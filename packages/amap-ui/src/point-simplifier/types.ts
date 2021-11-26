export interface EventMap<D> extends AMap.AMapUI.PointSimplifier.EventMap<D> {
  /** 创建事件 */
  created?: (instance: AMap.AMapUI.PointSimplifier) => void;
}

export interface PointSimplifierProps<D = any> extends Omit<AMap.AMapUI.PointSimplifier.Options<D>, 'renderConstructor'> {
  /** 方便设置，由组件内部处理 */
  renderConstructor?: 'GroupStyleRender';
  /**
   * 方便在设置渲染参数的时候使用 PointSimplifier，此配置优先级高于 renderOptions
   */
  getRenderOptions?: (PointSimplifier: AMap.AMapUI.PointSimplifier) => AMap.AMapUI.PointSimplifier.Options<D>['renderOptions'];
  /** 绑定事件 */
  events?: EventMap<D>;
}
