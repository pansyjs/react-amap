export interface EventMap extends ReactAMap.GetEventFunObject<AMap.PolylineEditor.EventMap> {
  /** 创建事件 */
  created?: (instance: AMap.PolylineEditor) => void;
}

export interface PolylineEditorProps
{
  /** 是否开启编辑功能 */
  active?: boolean;
  /** 绑定的事件 */
  events?: EventMap;
  /** 由父组件注入的地图实例对象 */
  map?: AMap.Map;
  /** 由父组件注入 */
  poly?: AMap.Polyline;
}
