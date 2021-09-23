declare namespace AMap {

  /**
   * OverlayGroup 类用来包装其它覆盖物类的实例，对实例集合做整体操作，避免开发者对多个需要设置同样属性的覆盖物实例做循环处理。
   */
  namespace OverlayGroup {
    type Iterator<O extends Overlay> = (overlay: O, index: number, collections: O[]) => void;

    interface EventMap {}

    interface Options {

    }
  }

  class OverlayGroup<O extends Overlay = any> extends EventEmitter {
    /**
     *
     * @param overlays 覆盖物类的实例的集合
     */
    constructor(overlays?: O[]);

    /**
     * 添加单个覆盖物到集合中，不支持添加重复的覆盖物
     * @param overlay
     */
    addOverlay(overlay: O): void;

    /**
     * 添加覆盖物数组到集合中，不支持添加重复的覆盖物
     * @param overlays
     */
    addOverlays(overlays: O[]): void;

    /**
     * 返回当前集合中所有的覆盖物
     */
    getOverlays(): O[];

    /**
     * 判断传入的覆盖物实例是否在集合中
     * @param overlay
     */
    hasOverlay(overlay: O): boolean;

    /**
     * 从集合中删除传入的覆盖物实例
     * @param overlay
     */
    removeOverlay(overlay: O): void;

    /**
     * 从集合中删除传入的覆盖物实例数组
     * @param overlays
     */
    removeOverlays(overlays: O[]): void;

    /**
     * 清空集合
     */
    clearOverlays(): void;

    /**
     * 对集合中的覆盖物做迭代操作
     * @param iterator
     */
    eachOverlay(iterator: OverlayGroup.Iterator<O>): void;

    /**
     * 在地图上显示集合中覆盖物
     */
    show(): void;

    /**
     * 在地图上隐藏集合中覆盖物
     */
    hide(): void;

    /**
     * 修改覆盖物属性(包括线样式、样色等等)
     * @param opts
     */
    setOptions(opts: any): void;
  }
}
