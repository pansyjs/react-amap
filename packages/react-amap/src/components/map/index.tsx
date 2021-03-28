import React from 'react';
import { toLnglat, APILoader, hasWindow, withPropsReactive } from '../../utils';
import {
  CreateProps,
  wrapperStyle,
  containerStyle,
  StatusDynamicProps
} from './config';
import { MapProps, MapState } from './types';
import { AbstractComponent } from '../AbstractComponent';

class Map extends AbstractComponent<AMap.Map, MapProps, MapState> {
  /** 存放地图的容器 */
  private mapWrapper: HTMLDivElement;

  static defaultProps: MapProps = {
    logoUrl: ' ',
    logoUrlRetina: ' '
  }

  constructor(props: MapProps) {
    super(props);
    const self = this

    this.state = {
      mapLoaded: false
    }

    this.setterMap = {
      zoom(zoom: number) {
        self.internalObj.setZoom(zoom)
      },
      cursor(cursor: string) {
        self.internalObj.setDefaultCursor(cursor)
      },
      labelzIndex(index: number) {
        self.internalObj.setLabelzIndex(index);
      }
    }

    this.converterMap = {
      center: toLnglat,
      mapStyle: (str: string) => {
        if (str.indexOf('amap://styles') === 0) {
          return str
        }
        return `amap://styles/${str}`
      }
    }

    if (hasWindow) {
      new APILoader({
        key: props.mapKey,
        useAMapUI: props.useAMapUI,
        version: props.version,
        protocol: props.protocol,
        hostAndPath: props.hostAndPath
      })
      .load()
      .then(() => {
        this.createInstance()
        if (!this.state.mapLoaded) {
          this.setState({
            mapLoaded: true
          })
        }
      })
    }
  }

  componentDidUpdate(nextProps: MapProps) {
    if (this.state.mapLoaded) {
      this.updateMapProps(this.props, nextProps)
    }
  }

  /** 创建地图实例 */
  createInstance() {
    if (!this.internalObj) {
      const options = this.buildCreateOptions()
      this.setInstance(new window.AMap.Map(this.mapWrapper, options));
      this.props.onInstanceCreated?.()
    }
  }

  /** 获取创建地图的参数 */
  buildCreateOptions() {
    const props = this.props
    const options: AMap.Map.Options = {}
    CreateProps.forEach((key) => {
      if (key in props) {
        options[key] = this.getSetterValue(key, props)
      }
    })
    return options;
  }

  /**
   * 渲染子组件
   * @returns
   */
  renderChildren() {
    return React.Children.map(this.props.children, (child: any) => {
      if (child) {
        const cType = child.type
        /* 针对下面两种组件不注入地图相关属性
         * 1. 明确声明不需要注入的
         * 2. DOM 元素
         */
        if (cType.preventAmap || (typeof cType === 'string')) {
          return child
        }
        return React.cloneElement(child, {
          map: this.internalObj
        })
      }
      return child
    })
  }

  updateMapProps(prevProps: MapProps, nextProps: MapProps) {
    const nextMapStatus = {};
    let statusChangeFlag = false;
    let statusPropExist = false;

    StatusDynamicProps.forEach((key) => {
      if (key in nextProps) {
        statusPropExist = true
        if (this.detectPropChanged(key, prevProps, nextProps)) {
          statusChangeFlag = true
          nextMapStatus[key] = nextProps[key]
        }
      }
    });

    statusChangeFlag && this.internalObj.setStatus(nextMapStatus);
  }

  detectPropChanged(key: string, prevProps: MapProps, nextProps: MapProps) {
    return prevProps[key] !== nextProps[key]
  }

  private handleSaveWrapper = (wrapper: HTMLDivElement) => {
    this.mapWrapper = wrapper;
  }

  public render() {
    const { loading = null, className, style } = this.props;

    return (
      <div className={className} style={{ ...wrapperStyle, ...style }}>
        <div ref={this.handleSaveWrapper} style={containerStyle}>
          {this.state.mapLoaded ? null : loading}
        </div>
        <div>
          { this.state.mapLoaded ? this.renderChildren() : null }
        </div>
      </div>
    )
  }
}

export default withPropsReactive<AMap.Map, MapProps>(Map);
