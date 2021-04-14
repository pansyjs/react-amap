import { AbstractComponentProps } from '../AbstractComponent';

export interface EventMap extends ReactAMap.GetEventFunObject<AMap.OverView.EventMap> {
  /** 创建事件 */
  created?: (instance: AMap.OverView) => void;
}

export interface OverViewProps extends
  ReactAMap.BaseChildrenComponentProps,
  AMap.OverView.Options,
  AbstractComponentProps
{
  /** 可以绑定的事件 */
  events?: EventMap;
}

export type OverViewType = React.ForwardRefRenderFunction<AMap.OverView, OverViewProps>;
