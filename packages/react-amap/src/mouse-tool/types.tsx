import { AbstractComponentProps } from '../AbstractComponent';

export interface EventMap extends ReactAMap.GetEventFunObject<AMap.MouseTool.EventMap> {
  /** 创建事件 */
  created?: (instance: AMap.MouseTool) => void;
}

export interface MouseToolProps extends
  ReactAMap.BaseChildrenComponentProps,
  AMap.MouseTool.Options,
  AbstractComponentProps
{
  /** 可以绑定的事件 */
  events?: EventMap;
}

export interface MouseToolState {
  loaded: boolean
}
