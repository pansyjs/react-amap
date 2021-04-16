export interface EventMap extends ReactAMap.GetEventFunObject<AMap.PolyEditor.EventMap> {
  /** 创建事件 */
  created?: (instance: AMap.PolyEditor) => void;
}

export interface PolyEditorProps
{
  /** 是否开启编辑功能 */
  active?: boolean;
  /** 绑定的事件 */
  events?: EventMap;
  /** 由父组件注入的地图实例对象 */
  map?: AMap.Map;
  /** 由父组件注入 */
  poly?: AMap.Polygon | AMap.Polyline;
}

export type PolyEditorType = React.ForwardRefRenderFunction<AMap.PolyEditor, PolyEditorProps>;
