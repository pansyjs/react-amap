
import { AbstractComponentProps } from '../AbstractComponent';

export interface Style extends ReactAMap.StrokeStyle, ReactAMap.OutlineStyle {};
export type StyleKeys = ReactAMap.$Keys<Style>;
export interface EventMap extends ReactAMap.GetEventFunObject<AMap.BezierCurve.EventMap<AMap.BezierCurve>> {
  /** 创建事件 */
  created?: (instance: AMap.BezierCurve) => void;
}

export interface BezierCurveProps extends
  Omit<AMap.BezierCurve.Options, StyleKeys>,
  ReactAMap.BaseChildrenComponentProps,
  AbstractComponentProps
{
  /** 曲线的样式 */
  style?: Style;
  /** 是否显示 */
  visible?: boolean;
   /** 绑定事件 */
  events?: EventMap;
}

export interface BezierCurveState {
  loaded: boolean
}
