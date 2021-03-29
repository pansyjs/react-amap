import { AbstractComponentProps } from '../AbstractComponent';

export interface EventMap extends ReactAMap.GetEventFunObject<AMap.InfoWindow.EventMap<AMap.InfoWindow>> {
  /** 创建事件 */
  created?: (instance: AMap.InfoWindow) => void;
}


export interface InfoWindowProps extends
  AMap.InfoWindow.Options,
  ReactAMap.BaseChildrenComponentProps,
  AbstractComponentProps
{
  className?: string;
  visible?: boolean;
  events?: EventMap;
}
