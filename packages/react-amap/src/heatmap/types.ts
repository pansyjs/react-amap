export interface EventMap extends ReactAMap.GetEventFunObject<AMap.HeatMap.EventMap> {
  /** 创建事件 */
  created?: (instance: AMap.HeatMap) => void;
}

export interface HeatmapProps extends
  AMap.HeatMap.Options
{
  dataSet?: AMap.HeatMap.DataSet;
  /** 可以绑定的事件 */
  events?: EventMap;
}
