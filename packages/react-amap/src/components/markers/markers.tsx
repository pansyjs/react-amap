import { render } from 'react-dom';
import { hasWindow, isFun } from '../../utils';
import { AbstractComponent } from '../AbstractComponent';
import { renderMarkerComponent, getPropValue } from '../marker/utils';
import { MarkerOptions } from '../marker';
import { allProps, defaultOpts, IdKey, ClusterProps } from './config';
import { MarkersProps,  MarkerClustererOptions, MarkerClustererEventFunObject } from './types';

export class InternalMarkers extends AbstractComponent<any, MarkersProps> {
  private map: AMap.Map;
  private mapCluster: AMap.MarkerClusterer;
  /** 存储所有的Marker对象 */
  private markersCache: AMap.Marker[];
  private markerReactChildDOM: Record<string, HTMLDivElement>;

  constructor(props: MarkersProps) {
    super(props);

    if (hasWindow) {
      if (props.map) {
        this.map = props.map;
        this.markersCache = defaultOpts.markersCache;

        this.createInstance(props);
      }
    }
  }

  shouldComponentUpdate() {
    return false;
  }

  componentWillReceiveProps(nextProps: MarkersProps) {
    if (this.map) {
      this.refreshMarkersLayout(nextProps);
    }
  }

  componentDidMount() {
    if (this.map) {
      this.setMarkerChild();
    }
  }

  /**
   * 创建所有的标记点
   * @param props
   */
  createInstance(props: MarkersProps) {
    const markers = props.markers || [];
    const mapMarkers: AMap.Marker[] = [];
    const markerReactChildDOM = {};

    markers.length && markers.forEach((raw, idx) => {
      const options: AMap.Marker.Options = this.buildCreateOptions(props, raw, idx);
      options.map = this.map;

      let markerContent = null;

      // 优先使用render
      if (isFun(props.render)) {
        let markerChild = props.render(raw);
        if (markerChild !== false) {
          const div = document.createElement('div');
          div.setAttribute(IdKey, '1');
          markerContent = div;
          markerReactChildDOM[idx] = markerChild;
        }
      }

      if (!markerContent) {
        markerContent = document.createElement('div');
        const img = document.createElement('img');
        img.src = '//webapi.amap.com/theme/v1.3/markers/n/mark_bs.png';
        markerContent.appendChild(img);
      }
      options.content = markerContent;

      const marker = new window.AMap.Marker(options);
      marker.on('click', (e) => { this.onMarkerClick(e); });
      marker.on('mouseover', (e) => { this.onMarkerHover(e); });
      marker.on('mouseout', (e) => { this.onMarkerHoverOut(e); });

      marker['render'] = (function(marker) {
        return function(component) {
          return renderMarkerComponent(component, marker);
        };
      }(marker));

      this.bindMarkerEvents(marker);
      mapMarkers.push(marker);
    });

    this.markersCache = mapMarkers;
    this.markerReactChildDOM = markerReactChildDOM;
    this.exposeMarkerInstance();
    this.checkClusterSettings(props);
  }

  /**
   * 获取创建标记点的参数
   */
  // @ts-ignore
  buildCreateOptions(props: MarkersProps, raw: MarkerOptions, idx: number) {
    const result: AMap.Marker.Options = {};

    const disabledKeys = ['extData'];

    allProps.forEach((key) => {
      if ((key in raw) && (disabledKeys.indexOf(key) === -1)) {
        result[key] = getPropValue(key, raw[key]);
      } else if (key in props) {
        if (isFun(props[key])) {
          const tmpValue = props[key].call(null, raw, idx);
          result[key] = getPropValue(key, tmpValue);
        } else {
          result[key] = getPropValue(key, props[key]);
        }
      }
    });

    result.extData = raw;
    return result;
  }

  /**
   * 刷新标记点
   * @param nextProps
   */
  refreshMarkersLayout(nextProps: MarkersProps) {
    const markerChanged = (nextProps.markers !== this.props.markers);
    const clusterChanged = ((!!this.props.useCluster) !== (!!nextProps.useCluster));
    if (markerChanged) {
      // 清除所有的标记点
      this.markersCache.length && this.markersCache.forEach((marker) => {
        if (marker) {
          marker.setMap(null);
          marker = null;
        }
      });
      this.markersCache = defaultOpts.markersCache;
      this.createInstance(nextProps);
      this.setMarkerChild();
    }

    if (clusterChanged) {
      this.checkClusterSettings(nextProps);
    }
  }

  setMarkerChild() {
    Object.keys(this.markerReactChildDOM).forEach((idx) => {
      const dom = this.markersCache[idx].getContent();
      const child = this.markerReactChildDOM[idx];
      this.renderMarkerChild(dom, child);
    });
  }

  renderMarkerChild(dom: HTMLElement, child: any) {
    render(<div>{child}</div>, dom);
  }

  /**
   * 加载高德地图MarkerClusterer插件
   * @param clusterConfig
   * @returns
   */
  loadClusterPlugin(
    clusterConfig: MarkersProps['useCluster']
  ): Promise<AMap.MarkerClusterer> {
    if (this.mapCluster) {
      return Promise.resolve(this.mapCluster);
    }
    const config = (typeof clusterConfig === 'boolean') ? {} : clusterConfig;
    return new Promise((resolve) => {
      this.map.plugin(['AMap.MarkerClusterer'], () => {
        resolve(this.createClusterPlugin(config));
      });
    });
  }

  /**
   * 创建聚合对象实例
   * @param config
   * @returns
   */
  createClusterPlugin(config: MarkerClustererOptions) {
    let options: AMap.MarkerClusterer.Options = {};

    const defalutOptions = {
      minClusterSize: 2,
      zoomOnClick: false,
      maxZoom: 18,
      gridSize: 60,
      averageCenter: true
    };

    ClusterProps.forEach((key) => {
      if (key in config) {
        options[key] = config[key];
      } else {
        options[key] = defalutOptions[key];
      }
    });

    this.mapCluster = new window.AMap.MarkerClusterer(this.map, [], options);
    let events: Record<string, any>= {};
    if ('events' in config) {
      events = config.events;
      if ('created' in events) {
        events.created?.(this.mapCluster);
      }
    }
    this.bindClusterEvent(events);
    return this.mapCluster;
  }

  /**
   * 绑定聚合对象的事件
   * @param events
   */
  bindClusterEvent(events: MarkerClustererEventFunObject = {}) {
    this.mapCluster.on('click', (e) => {
      if (this.props.useCluster && this.props.useCluster['zoomOnClick']) {
        // 执行高德默认逻辑
      } else {
        if (isFun(events.click)) {
          events.click(e);
        }
      }
    });
  }

  /**
   * 检查是否聚合
   * @param props
   */
  checkClusterSettings(props: MarkersProps) {
    // 开启聚合
    if (props.useCluster) {
      this.loadClusterPlugin(props.useCluster)
        .then((cluster) => {
          cluster.setMarkers(this.markersCache);
        });
    } else {
      if (this.mapCluster) {
        const markers = this.mapCluster.getMarkers();
        this.mapCluster.clearMarkers();
        markers.forEach((marker) => {
          marker.setMap(this.map);
        });
      }
    }
  }

  /** 触发标记点创建事件  */
  exposeMarkerInstance() {
    if ('events' in this.props) {
      const events = this.props.events || {};
      if (isFun(events.created)) {
        events.created(this.markersCache);
      }
    }
  }

  /**
   * 绑定标记点的事件
   * @param marker
   */
  bindMarkerEvents(marker: AMap.Marker) {
    const events = this.props.events || {};
    const list = Object.keys(events);
    const preserveEv = ['click', 'mouseover', 'mouseout', 'created'];
    list.length && list.forEach((evName) => {
      if (preserveEv.indexOf(evName) === -1) {
        marker.on(evName, events[evName]);
      }
    });
  }

  /** Marker标记点的点击事件 */
  onMarkerClick(event: AMap.Marker.EventMap['click']) {
    const events = this.props.events || {};

    if (isFun(events.click)) {
      events.click(event);
    }
  }

  /** Marker标记点的鼠标移入事件 */
  onMarkerHover(event: AMap.Marker.EventMap['mouseover']) {
    event.target.setTop(true);
    const events = this.props.events || {};
    if (isFun(events.mouseover)) {
      events.mouseover(event);
    }
  }

  /** Marker标记点的鼠标移出事件 */
  onMarkerHoverOut(e: AMap.Marker.EventMap['mouseout']) {
    e.target.setTop(false);
    const events = this.props.events || {};
    if (isFun(events.mouseout)) {
      events.mouseout(e);
    }
  }
}
