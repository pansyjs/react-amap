
import { AbstractComponentProps } from '../AbstractComponent';

export interface EventMap extends ReactAMap.GetEventFunObject<AMap.ContextMenu.EventMap<AMap.ContextMenu>> {
  /** 创建事件 */
  created?: (instance: AMap.ContextMenu) => void;
}

export interface ContextMenuProps extends
  AMap.ContextMenu.Options,
  ReactAMap.BaseChildrenComponentProps,
  AbstractComponentProps
{
  visible?: boolean;
  events?: EventMap;
}

export interface ContextMenuState {
  loaded: boolean
}
