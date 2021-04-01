import React from 'react';
import { toLnglat, APILoader, hasWindow } from '../utils';
import {
  allProps,
  wrapperStyle,
  containerStyle,
  StatusDynamicProps
} from './config';
import { MapProps, MapState } from './types';
import { AbstractComponent } from '../AbstractComponent';

export class InternalMap extends AbstractComponent<AMap.Map, MapProps, MapState> {
  /** 存放地图的容器 */
  private mapWrapper: HTMLDivElement;

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
    allProps.forEach((key) => {
      if (key in props) {
        options[key] = this.getSetterValue(key, props)
      }
    })
    return options;
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
    const { loading = null } = this.props;

    return (
      <div style={wrapperStyle}>
        <div ref={this.handleSaveWrapper} style={containerStyle}>
          {this.state.mapLoaded ? null : loading}
        </div>
        <div>
          { this.state.mapLoaded ? this.props.children : null }
        </div>
      </div>
    )
  }
}
