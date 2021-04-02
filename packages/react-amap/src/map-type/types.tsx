import { AbstractComponentProps } from '../AbstractComponent';

export interface EventMap extends ReactAMap.GetEventFunObject<AMap.MapType.EventMap> {
  /** 创建事件 */
  created?: (instance: AMap.MapType) => void;
}

export interface MapTypeProps extends
  ReactAMap.BaseChildrenComponentProps,
  AMap.MapType.Options,
  AbstractComponentProps
{
  /** 可以绑定的事件 */
  events?: EventMap;
}

export interface MapTypeState {
  loaded: boolean
}
