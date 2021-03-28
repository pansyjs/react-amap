import { AbstractComponentProps } from '../AbstractComponent';

export interface ControlBarProps extends
  PansyMap.BaseChildrenComponentProps,
  AMap.ControlBar.Options,
  AbstractComponentProps
{
  visible?: boolean;
}

export interface ControlBarState {
  loaded: boolean
}
