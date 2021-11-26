export interface EventMap {
  /** 创建事件 */
  created?: (instance: AMap.AMapUI.PointSimplifier) => void;
}

export interface PointSimplifierProps extends Omit<AMap.AMapUI.PointSimplifier.Options, 'renderConstructor'> {
  /** 方便设置，由组件内部处理 */
  renderConstructor?: 'GroupStyleRender'
  /** 绑定事件 */
  events?: EventMap;
}
