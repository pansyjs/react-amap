export interface EventMap extends ReactAMap.GetEventFunObject<AMap.MouseTool.EventMap> {
  /** 创建事件 */
  created?: (instance: AMap.MouseTool) => void;
}

export interface MouseToolProps extends
  AMap.MouseTool.Options
{
  /** 可以绑定的事件 */
  events?: EventMap;
}

export type MouseToolType = React.ForwardRefRenderFunction<AMap.MouseTool, MouseToolProps>;
