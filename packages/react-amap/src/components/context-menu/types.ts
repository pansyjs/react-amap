
import { AbstractComponentProps } from '../AbstractComponent';

export interface ContextMenuProps extends
  AMap.ContextMenu.Options,
  PansyMap.BaseChildrenComponentProps,
  AbstractComponentProps
{
  visible?: boolean;
}

export interface ContextMenuState {
  loaded: boolean
}
