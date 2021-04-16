import React, {
  useRef,
  useEffect,
  useImperativeHandle
} from 'react';
import { render } from 'react-dom';
import { useMap } from '../map';
import { usePropsReactive } from '../hooks';
import { isFun } from '../utils';
import { renderMarkerComponent, getPropValue } from '../marker/utils';
import { allProps, defaultOpts, IdKey } from './config';
import type { MarkersProps, MarkersType, MarkerOptions } from './types';
import { loadClusterPlugin } from './utils';

const Markers: MarkersType = (props = {}, ref) => {
  const { map } = useMap();
  const mapCluster = useRef<AMap.MarkerClusterer>();
  const markersCache = useRef<AMap.Marker[]>(defaultOpts.markersCache);
  const markerReactChildDOM = useRef<Record<string, HTMLDivElement>>({});

  const { prevProps, onInstanceCreated } = usePropsReactive<AMap.MarkerClusterer, MarkersProps>(
    props,
    mapCluster,
    {}
  );

  useEffect(
    () => {
      if (map) {
        createInstance(props).then(() => {
          setMarkerChild();
          onInstanceCreated?.()
        });
      }
    },
    [map]
  );

  useEffect(
    () => {
      if (map) {
        refreshMarkersLayout(props);
      }
    },
    [props.markers, props.useCluster]
  )

  useImperativeHandle(
    ref,
    () => mapCluster.current,
    [mapCluster.current]
  );

  const createInstance = (props: MarkersProps) => {
    const markers = props.markers || [];
    const mapMarkers: AMap.Marker[] = [];
    const markerRCDOM = {};

    markers.length && markers.forEach((raw, idx) => {
      const options: AMap.Marker.Options = buildCreateOptions(props, raw, idx);
      options.map = map;

      let markerContent = null;

      // 优先使用render
      if (isFun(props.render)) {
        let markerChild = props.render(raw);
        if (markerChild !== false) {
          const div = document.createElement('div');
          div.setAttribute(IdKey, '1');
          markerContent = div;
          markerRCDOM[idx] = markerChild;
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
      marker.on('click', (e) => { onMarkerClick(e); });
      marker.on('mouseover', (e) => { onMarkerHover(e); });
      marker.on('mouseout', (e) => { onMarkerHoverOut(e); });

      marker['render'] = (function(marker) {
        return function(component) {
          return renderMarkerComponent(component, marker);
        };
      }(marker));

      bindMarkerEvents(marker);
      mapMarkers.push(marker);
    });

    markersCache.current = mapMarkers;
    markerReactChildDOM.current = markerRCDOM;
    exposeMarkerInstance();
    checkClusterSettings(props);

    return Promise.resolve();
  }

  /**
   * 刷新标记点
   * @param nextProps
   */
  const refreshMarkersLayout = (props: MarkersProps) => {
    const markerChanged = (props.markers !== prevProps.markers);
    const clusterChanged = ((!!prevProps.useCluster) !== (!!props.useCluster));
    if (markerChanged) {
      // 清除所有的标记点
      markersCache.current?.forEach((marker) => {
        if (marker) {
          marker.setMap(null);
          marker = null;
        }
      });
      markersCache.current = defaultOpts.markersCache;
      createInstance(props);
      setMarkerChild();
    }

    if (clusterChanged) {
      checkClusterSettings(props);
    }
  }

  const setMarkerChild = () => {
    Object.keys(markerReactChildDOM.current)
      .forEach((idx) => {
        const dom = markersCache.current[idx].getContent();
        const child = markerReactChildDOM.current[idx];
        renderMarkerChild(dom, child);
      });
  }

  const renderMarkerChild = (dom: HTMLElement, child: any) => {
    render(<div>{child}</div>, dom);
  }

  /**
   * 检查是否聚合
   * @param props
   */
  const checkClusterSettings = (props: MarkersProps) => {
    // 开启聚合
    if (props.useCluster) {
      loadClusterPlugin(map, mapCluster.current, props.useCluster)
        .then((cluster) => {
          cluster.setMarkers(markersCache.current);
        });
    } else {
      if (mapCluster.current) {
        const markers = mapCluster.current.getMarkers();
        mapCluster.current.clearMarkers();
        markers.forEach((marker) => {
          marker.setMap(map);
        });
      }
    }
  }

  /** 触发标记点集合创建事件  */
  const exposeMarkerInstance = () => {
    if ('events' in props) {
      const events = props.events || {};
      if (isFun(events.created)) {
        events.created(markersCache.current);
      }
    }
  }

  /**
   * 获取创建标记点的参数
   * @param props
   * @param raw
   * @param idx
   * @returns
   */
  const buildCreateOptions = (
    props: MarkersProps,
    raw: MarkerOptions,
    idx: number
  ): AMap.Marker.Options => {
    const result: AMap.Marker.Options = {};

    allProps.forEach((key) => {
      if (key in raw) {
        const val = getPropValue(key, raw[key]) as never;
        val && (result[key] = val);
      } else if (key in props) {
        if (isFun(props[key])) {
          const tmpValue = props[key].call(null, raw, idx);
          const val = getPropValue(key, tmpValue) as never;
          val && (result[key] = val);
        }
      } else {
        const val = getPropValue(key, props[key]) as never;
        val && (result[key] = val);
      }
    });

    return result;
  }

  /**
   * 绑定标记点的事件
   * @param marker
   */
  const bindMarkerEvents = (marker: AMap.Marker) => {
    const events = props.events || {};
    const list = Object.keys(events);
    const preserveEv = ['click', 'mouseover', 'mouseout', 'created'];
    list.length && list.forEach((evName) => {
      if (preserveEv.indexOf(evName) === -1) {
        marker.on(evName, events[evName]);
      }
    });
  }

  /** Marker标记点的点击事件 */
  const onMarkerClick = (event: AMap.Marker.EventMap['click']) => {
    const events = props.events || {};

    if (isFun(events.click)) {
      events.click(event);
    }
  }

  /** Marker标记点的鼠标移入事件 */
  const onMarkerHover = (event: AMap.Marker.EventMap['mouseover']) => {
    event.target.setTop(true);
    const events = props.events || {};
    if (isFun(events.mouseover)) {
      events.mouseover(event);
    }
  }

  /** Marker标记点的鼠标移出事件 */
  const onMarkerHoverOut = (e: AMap.Marker.EventMap['mouseout']) => {
    e.target.setTop(false);
    const events = props.events || {};
    if (isFun(events.mouseout)) {
      events.mouseout(e);
    }
  }

  return null;
}

export default React.forwardRef(Markers);
