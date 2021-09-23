export interface EventMap extends ReactAMap.GetEventFunObject<
  AMap.ElasticMarker.EventMap<AMap.CircleMarker>
> {
  /** 创建事件 */
  created?: (instance: AMap.ElasticMarker) => void;
}

export interface ElasticMarkerProps extends Omit<AMap.ElasticMarker.Options, 'position'> {
  /** 标记点的位置 */
  position?: AMap.ExpandPosition;
  /** 标记点的事件 */
  events?: EventMap;
}
