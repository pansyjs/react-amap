export interface EventMap extends ReactAMap.GetEventFunObject<AMap.OverView.EventMap> {
  /** 创建事件 */
  created?: (instance: AMap.OverView) => void;
}

export interface OverViewProps extends
  AMap.OverView.Options
{
  /** 可以绑定的事件 */
  events?: EventMap;
}
