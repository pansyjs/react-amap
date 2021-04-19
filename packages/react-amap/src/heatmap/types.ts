export interface EventMap extends ReactAMap.GetEventFunObject<AMap.Heatmap.EventMap> {
  /** 创建事件 */
  created?: (instance: AMap.Heatmap) => void;
}

export interface HeatmapProps extends
  AMap.Heatmap.Options
{
  dataSet?: AMap.Heatmap.DataSet;
  /** 可以绑定的事件 */
  events?: EventMap;
}
