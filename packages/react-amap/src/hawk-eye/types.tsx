export interface EventMap extends ReactAMap.GetEventFunObject<AMap.HawkEye.EventMap> {
  /** 创建事件 */
  created?: (instance: AMap.HawkEye) => void;
}

export interface HawkEyeProps extends
  AMap.HawkEye.Options
{
  /** 可以绑定的事件 */
  events?: EventMap;
}
