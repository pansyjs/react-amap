declare namespace AMap {

  /**
   * LayerGroup类用来包装其它图层类的实例， 对实例集合做批量操作， 避免开发者对多个需要设置同样属性的图层实例做循环处理。
   */
  namespace LayerGroup {
    /**
     * layer: 当前迭代到的图层
     * index: 该图层在集合中的序列号(从0开始)
     * collections: 所有图层实例
     */
    type Iterator<L extends Layer = any> = (layer: L, index: number, collections: L[]) => void
  }

  class LayerGroup<L extends Layer = any> {
    /**
     *
     * @param layers 覆盖物类的实例的集合
     */
    constructor(layers?: L[]);

    /**
     * 添加到地图上面
     * @param map
     */
    setMap(map: AMap.Map): void;

    /**
     * 判断传入的图层实例是否在集合中
     */
    hasLayer(layer: L): boolean;

    /**
     * 修改图层属性(包括线样式、样色等等)
     * @param opts
     */
    setOptions(opts: any): void;

    /**
     * 对集合中的图层做迭代操作
     * @param iterator
     */
    eachLayer(iterator: Iterator<L>): void;

    /**
     * 添加单个图层到集合中，不支持添加重复的图层
     * @param layer
     */
    addLayer(layer: L): void;

    /**
     * 添加图层数组到集合中，不支持添加重复的图层
     * @param layers
     */
    addLayers(layers: L[]): void;

    /**
     * 从集合中删除传入的图层实例
     * @param layer
     */
    removeLayer(layer: L): void;

    /**
     * 从集合中删除传入的图层实例数组
     * @param layers
     */
    removeLayers(layers: L[]): void;

    /**
     * 获取组里所有对象，包括图层和覆盖物
     */
    getLayers(): L[];

    /**
     * 清空图层
     */
    clearLayers(): void;

    /**
     * 设置图层隐藏
     */
    hide(): void;

    /**
     * 设置图层可见
     */
    show(): void;

    /**
     * 事件批量绑定
     * @param type
     */
    on(type: string, callback: any): void;

    /**
     * 重新加载图层资源，重新渲染
     */
    reload(): void;
  }
}
