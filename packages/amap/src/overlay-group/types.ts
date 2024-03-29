export interface EventMap extends ReactAMap.GetEventFunObject<AMap.OverlayGroup.EventMap> {
  /** 创建事件 */
  created?: (instance: AMap.OverlayGroup) => void;
}

export interface OverlayGroupProps extends AMap.OverlayGroup.Options
{
  /** 绑定的事件 */
  events?: EventMap;
}
