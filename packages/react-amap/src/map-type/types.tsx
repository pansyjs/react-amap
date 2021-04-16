export interface EventMap extends ReactAMap.GetEventFunObject<AMap.MapType.EventMap> {
  /** 创建事件 */
  created?: (instance: AMap.MapType) => void;
}

export interface MapTypeProps extends
  AMap.MapType.Options
{
  /** 可以绑定的事件 */
  events?: EventMap;
}

export type MapTypeType = React.ForwardRefRenderFunction<AMap.MapType, MapTypeProps>;
