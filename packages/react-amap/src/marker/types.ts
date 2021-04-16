
import React from 'react';

export interface EventMap<D = any> extends ReactAMap.GetEventFunObject<AMap.Marker.EventMap<AMap.Marker<D>>> {
  /** 创建事件 */
  created?: (instance: AMap.Marker<D>) => void;
}

interface ExpandMarkerOptions {
  position?: ReactAMap.Position;
  offset?: ReactAMap.Offset;
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
  /** 自定义标记点样式 */
  render?: renderMarker<ExtraData>;
  /** 绑定的事件  */
  events?: EventMap<ExtraData>;
}

export type renderMarker<ExtraData = any> = (extData: ExtraData) => React.ReactNode | string;

export type MarkerType = React.ForwardRefRenderFunction<AMap.Marker, MarkerProps>;
