
import React from 'react';
import { AbstractComponentProps } from '../AbstractComponent';

export interface EventMap<D = any> extends ReactAMap.GetEventFunObject<AMap.Marker.EventMap<AMap.Marker<D>>> {
  /** 创建事件 */
  created?: (instance: AMap.Marker<D>) => void;
}

export interface MarkerProps<D = any> extends
  AMap.Marker.Options,
  ReactAMap.BaseChildrenComponentProps,
  AbstractComponentProps
{
  className?: string;
  render?: renderMarker<D>;
  events?: EventMap<D>;
}

export interface MarkerState {
  loaded: boolean
}

export type renderMarker<D = any> = (extData: D) => React.ReactNode | string;
