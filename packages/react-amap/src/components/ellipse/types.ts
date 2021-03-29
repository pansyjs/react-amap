
import { AbstractComponentProps } from '../AbstractComponent';

export interface Style extends ReactAMap.StrokeStyle, ReactAMap.FillStyle {}
export type StyleKeys = ReactAMap.$Keys<Style>
export interface EventMap extends ReactAMap.GetEventFunObject<AMap.Ellipse.EventMap<AMap.Ellipse>> {
  /** 创建事件 */
  created?: (instance: AMap.Ellipse) => void;
}


export interface EllipseProps extends
  Omit<AMap.Ellipse.Options, StyleKeys>,
  ReactAMap.BaseChildrenComponentProps,
  AbstractComponentProps
{
  style?: Style;
  visible?: boolean;
  events?: EventMap;
}

export interface EllipseState {
  loaded: boolean
}
