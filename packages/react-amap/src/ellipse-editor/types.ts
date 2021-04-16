export interface EventMap extends ReactAMap.GetEventFunObject<AMap.EllipseEditor.EventMap> {
  /** 创建事件 */
  created?: (instance: AMap.EllipseEditor) => void;
}

export interface EllipseEditorProps {
  /** 是否开启编辑功能 */
  active?: boolean;
  /** 绑定的事件 */
  events?: EventMap;
  /** 由父组件注入的地图实例对象 */
  map?: AMap.Map;
  /** 需要操作的圆，由父组件注入 */
  ellipse?: AMap.Ellipse;
}

export type EllipseEditorType = React.ForwardRefRenderFunction<AMap.EllipseEditor, EllipseEditorProps>;
