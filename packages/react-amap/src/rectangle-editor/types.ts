export interface EventMap extends ReactAMap.GetEventFunObject<AMap.RectangleEditor.EventMap> {
  /** 创建事件 */
  created?: (instance: AMap.RectangleEditor) => void;
}

export interface RectangleEditorProps {
  /** 是否开启编辑功能 */
  active?: boolean;
  /** 绑定的事件 */
  events?: EventMap;
  /** 由父组件注入的地图实例对象 */
  map?: AMap.Map;
  /** 需要操作的圆，由父组件注入 */
  rectangle?: AMap.Rectangle;
}

export type RectangleEditorType = React.ForwardRefRenderFunction<AMap.RectangleEditor, RectangleEditorProps>;
