export interface EventMap extends ReactAMap.GetEventFunObject<AMap.ContextMenu.EventMap<AMap.ContextMenu>> {
  /** 创建事件 */
  created?: (instance: AMap.ContextMenu) => void;
}

export interface ContextMenuProps extends AMap.ContextMenu.Options {
  events?: EventMap;
}

export type ContextMenuType = React.ForwardRefRenderFunction<AMap.ContextMenu, ContextMenuProps>;
