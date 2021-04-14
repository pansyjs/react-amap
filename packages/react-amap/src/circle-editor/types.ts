import { AbstractComponentProps } from '../AbstractComponent';

export interface EventMap extends ReactAMap.GetEventFunObject<AMap.CircleEditor.EventMap> {
  /** 创建事件 */
  created?: (instance: AMap.CircleEditor) => void;
}

export interface CircleEditorProps extends
  ReactAMap.BaseChildrenComponentProps,
  AbstractComponentProps
{
  /** 是否开启编辑功能 */
  active?: boolean;
  /** 绑定的事件 */
  events?: EventMap;
  /** 需要操作的圆，由父组件注入 */
  circle?: AMap.Circle;
}

export interface CircleEditorState {
  loaded: boolean
}

export type CircleEditorType = React.ForwardRefRenderFunction<AMap.CircleEditor, CircleEditorProps>;
