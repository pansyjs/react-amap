export interface EventMap extends ReactAMap.GetEventFunObject<AMap.ToolBar.EventMap> {
  /** 创建事件 */
  created?: (instance: AMap.ToolBar) => void;
}

export interface ToolBarProps extends
  ReactAMap.BaseChildrenComponentProps,
  Omit<AMap.ToolBar.Options, 'offset'>
{
  /** 相对于地图容器左上角的偏移量，正数代表向右下偏移。 */
  offset?: ReactAMap.Offset,
  /** 是否显示 */
  visible?: boolean;
  /** 可以绑定的事件 */
  events?: EventMap;
}

export type ToolBarType = React.ForwardRefRenderFunction<AMap.ToolBar, ToolBarProps>;
