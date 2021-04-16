import React from 'react';
import { MarkerOptions } from '../marker';

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
  render?: () => React.ReactNode;
  events?: MarkerClustererEventMap
}

/** 聚合点组件参数 */
export interface ClusterComponentProps {
  count?: number;
  marker?: AMap.Marker;
}

export interface MarkersProps<D = any> extends
  AMap.Marker.Options,
  ReactAMap.BaseChildrenComponentProps
{
  /** 启用聚合插件 */
  useCluster?: boolean | MarkerClustererOptions<D>;
  /** 标记点数据集合 */
  markers?: MarkerOptions[];
  /** 需要绑定的事件 */
  events?: MarkerEventMap;
  render?: (options: MarkerOptions) => React.ReactNode | false;
}

export { MarkerProps as MarkerOptions } from '../marker/types';

export type MarkersType = React.ForwardRefRenderFunction<AMap.MarkerClusterer, MarkersProps>;
