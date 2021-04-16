
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
export interface MarkerOptions extends
  Omit<AMap.Marker.Options, ReactAMap.$Keys<ExpandMarkerOptions>>,
  ExpandMarkerOptions
  {};

export type PropKey = ReactAMap.$Keys<MarkerOptions>

export interface MarkerProps<D = any> extends
  MarkerOptions,
  ReactAMap.BaseChildrenComponentProps
{
  className?: string;
  render?: renderMarker<D>;
  events?: EventMap<D>;
  children?: React.ReactNode;
}

export interface MarkerState {
  loaded: boolean
}

export type renderMarker<D = any> = (extData: D) => React.ReactNode | string;

export type MarkerType = React.ForwardRefRenderFunction<AMap.Marker, MarkerProps>;
