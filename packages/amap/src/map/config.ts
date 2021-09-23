import React from 'react';
import { toLnglat } from '../utils';
import { StatusPropKey, PropKey } from './types';

/** 动态属性 */
export const NativeDynamicProps: PropKey[] = [
  'layers',
  'zoom',
  'zooms',
  'center',
  'labelzIndex',
  'lang',
  'mapStyle',
  'features',
  // defaultCursor
  'cursor',
  'pitch',
  'mask',
  'defaultLayer',
];

/** 状态属性 */
export const StatusDynamicProps: StatusPropKey[] = [
  'animateEnable',
  'doubleClickZoom',
  'dragEnable',
  'isHotspot',
  'jogEnable',
  'keyboardEnable',
  'pitchEnable',
  'resizeEnable',
  'rotateEnable',
  'scrollWheel',
  'touchZoom',
  'zoomEnable',
];

/** 静态属性 */
export const StaticProps: PropKey[] = [
  'view',
  // 'crs',
  'showIndoorMap',
  'indoorMap',
  'expandZoomRange',
  'touchZoomCenter',
  'showBuildingBlock',
  'viewMode',
  'buildingAnimation',
  'skyColor'
];

export const wrapperStyle: React.CSSProperties = {
  width: '100%',
  height: '100%',
  position: 'relative'
}

export const containerStyle: React.CSSProperties = {
  width: '100%',
  height: '100%'
}

export const allProps = NativeDynamicProps.concat(StatusDynamicProps, StaticProps);

export const setterMap = {
  zoom(zoom: number, map: AMap.Map) {
    if (map) {
      map.setZoom(zoom);
    }
  },
  cursor(cursor: string, map: AMap.Map) {
    if (map) {
      map.setDefaultCursor(cursor);
    }
  },
  labelzIndex(index: number, map: AMap.Map) {
    if (map) {
      map.setLabelzIndex(index);
    }
  }
}

export const converterMap = {
  center: toLnglat,
  mapStyle: (str: string) => {
    if (str.indexOf('amap://styles') === 0) {
      return str
    }
    return `amap://styles/${str}`
  }
}
