export interface EventMap<D> extends AMap.AMapUI.PointSimplifier.EventMap<D> {
  /** 创建事件 */
  created?: (instance: AMap.AMapUI.PointSimplifier<D>) => void;
}

export interface PointSimplifierProps<D = any> extends Omit<AMap.AMapUI.PointSimplifier.Options<D>, 'renderConstructor'> {
  /** 方便设置，由组件内部处理 */
  renderConstructor?: 'GroupStyleRender'
  /** 绑定事件 */
  events?: EventMap<D>;
}
