export interface EventMap extends ReactAMap.GetEventFunObject<AMap.MarkerCluster.EventMap> {
  /** 创建事件 */
  created?: (instance: AMap.MarkerCluster) => void;
}

export interface MarkerClusterProps extends
  AMap.MarkerCluster.Options
{
  /**
   * 聚合点数据
   */
  data?: AMap.MarkerCluster.DataOptions[];
  /** 可以绑定的事件 */
  events?: EventMap;
}
