import { AbstractComponentProps } from '../AbstractComponent';

export interface EventMap extends ReactAMap.GetEventFunObject<AMap.ControlBar.EventMap> {
  /** 创建事件 */
  created?: (instance: AMap.ControlBar) => void;
}

export interface ControlBarProps extends
  ReactAMap.BaseChildrenComponentProps,
  AMap.ControlBar.Options,
  AbstractComponentProps
{
  visible?: boolean;
  events?: EventMap;
}

export interface ControlBarState {
  loaded: boolean
}
