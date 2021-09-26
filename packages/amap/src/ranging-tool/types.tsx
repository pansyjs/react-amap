export interface EventMap extends ReactAMap.GetEventFunObject<AMap.RangingTool.EventMap> {
  /** 创建事件 */
  created?: (instance: AMap.RangingTool) => void;
}

export type RangingToolOptions = AMap.RangingTool.Options;

export interface RangingToolProps extends
  AMap.RangingTool.Options
{
  /** 可以绑定的事件 */
  events?: EventMap;
}
