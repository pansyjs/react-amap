import React from 'react';
import { MarkerOptions } from '../marker';

/** Marker 标记点的事件对象 */
export type MarkerEventFunObject = ReactAMap.GetEventFunObject<AMap.Marker.EventMap<AMap.Marker>>;

/** MarkerCluster 聚合对象的事件对象  */
export type MarkerClusterEventFunObject = ReactAMap.GetEventFunObject<AMap.MarkerCluster.EventMap<AMap.MarkerCluster>>;

/** Marker 标记点的事件对象 添加创建事件 */
export interface MarkerEventMap extends MarkerEventFunObject {
  created?: (clusterer: AMap.Marker[]) => void;
}

/** MarkerCluster 聚合对象的事件对象 添加创建事件 */
export interface MarkerClusterEventMap extends MarkerClusterEventFunObject {
  created?: (clusterer: AMap.MarkerCluster) => void;
}

/** 创建聚合对象的参数 */
export interface MarkerClusterOptions<ExtraData = any> extends AMap.MarkerCluster.Options<ExtraData> {
  zoomOnClick?: boolean;
  render?: () => React.ReactNode;
  events?: MarkerClusterEventMap
}

/** 聚合点组件参数 */
export interface ClusterComponentProps {
  count?: number;
  marker?: AMap.Marker;
}

export interface MarkersProps<D = any> extends AMap.Marker.Options {
  /** 启用聚合插件 */
  useCluster?: boolean | MarkerClusterOptions<D>;
  /** 标记点数据集合 */
  markers?: (MarkerOptions & AMap.MarkerCluster.DataOptions)[];
  /** 需要绑定的事件 */
  events?: MarkerEventMap;
  render?: (options: MarkerOptions) => React.ReactNode | false;
}

export { MarkerProps as MarkerOptions } from '../marker/types';
