
import React from 'react';

export interface EventMap<D = any> extends ReactAMap.GetEventFunObject<AMap.Marker.EventMap<AMap.Marker<D>>> {
  /** 创建事件 */
  created?: (instance: AMap.Marker<D>) => void;
}

interface ExpandMarkerOptions {
  position?: AMap.ExpandPosition;
  offset?: AMap.ExpandOffset;
}

/** 高德标记点的参数 */
export interface MarkerOptions<ExtraData = any> extends
  Omit<AMap.Marker.Options<ExtraData>, ReactAMap.$Keys<ExpandMarkerOptions>>,
  ExpandMarkerOptions
  {};

export type PropKey = ReactAMap.$Keys<MarkerOptions>

export interface MarkerProps<ExtraData = any> extends MarkerOptions<ExtraData> {
  /** 额外的样式 */
  className?: string;
  // TODO: 意义不大，后续考虑删除
  /** 自定义标记点样式 */
  render?: renderMarker;
  /** 绑定的事件  */
  events?: EventMap<ExtraData>;
}

export type renderMarker = () => React.ReactNode | string;
