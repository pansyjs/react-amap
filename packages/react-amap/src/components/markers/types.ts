import React from 'react';
import { AbstractComponentProps } from '../AbstractComponent';
import { MarkerProps as MarkerOptions } from '../marker';

/** Marker 标记点的事件对象 */
export type MarkerEventFunObject = ReactAMap.GetEventFunObject<AMap.Marker.EventMap<AMap.Marker>>;

/** MarkerClusterer 聚合对象的事件对象  */
export type MarkerClustererEventFunObject = ReactAMap.GetEventFunObject<AMap.MarkerClusterer.EventMap<AMap.MarkerClusterer>>;

/** Marker 标记点的事件对象 添加创建事件 */
export interface MarkerEventMap extends MarkerEventFunObject {
  created?: (clusterer: AMap.Marker[]) => void;
}

/** MarkerClusterer 聚合对象的事件对象 添加创建事件 */
export interface MarkerClustererEventMap extends MarkerClustererEventFunObject {
  created?: (clusterer: AMap.MarkerClusterer) => void;
}

/** 创建聚合对象的参数 */
export interface MarkerClustererOptions<ExtraData = any> extends AMap.MarkerClusterer.Options<ExtraData> {
  events?: MarkerClustererEventMap
}

export interface MarkersProps<D = any> extends
  AMap.Marker.Options,
  ReactAMap.BaseChildrenComponentProps,
  AbstractComponentProps
{
  useCluster?: boolean | MarkerClustererOptions<D>;
  markers?: MarkerOptions[];
  events?: MarkerEventMap;
  render?: (options: MarkerOptions<D>) => React.ReactNode | false;
}

export { MarkerProps as MarkerOptions } from '../marker/types';
