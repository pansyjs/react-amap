import { AbstractComponentProps } from '../AbstractComponent';

export interface EventMap extends ReactAMap.GetEventFunObject<AMap.BezierCurveEditor.EventMap> {
  /** 创建事件 */
  created?: (instance: AMap.BezierCurveEditor) => void;
}

export interface BezierCurveEditorProps extends
  ReactAMap.BaseChildrenComponentProps,
  AbstractComponentProps
{
  /** 是否开启编辑功能 */
  active?: boolean;
  /** 绑定的事件 */
  events?: EventMap;
  /** 需要操作的圆，由父组件注入 */
  bezierCurve?: AMap.BezierCurve;
}

export interface BezierCurveEditorState {
  loaded: boolean
}
