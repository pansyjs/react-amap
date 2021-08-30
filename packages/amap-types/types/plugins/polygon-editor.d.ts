declare namespace AMap {

  namespace PolygonEditor {
    interface Options {
      createOptions: object;
      editOptions: object;
      controlPoint: object;
      midControlPoint: object;
    }

    interface EventMap {
      /**
       * 增加一个节点时触发此事件
       */
      addnode: (event: { pixel: AMap.Pixel, target: AMap.Polygon, lnglat: AMap.LngLat }) => void;

      /**
       * 移除一个节点时触发此事件
       */
      removenode: (event: { pixel: AMap.Pixel, target: AMap.Polygon, lnglat: AMap.LngLat }) => void;

      /**
       * 调整折线上某个点时触发此事件
       */
      adjust: (event: { pixel: AMap.Pixel, target: AMap.Polygon, lnglat: AMap.LngLat }) => void;

      /**
       * 调整折线上某个点时触发此事件
       */
      move: (event: { pixel: AMap.Pixel, target: AMap.Polygon, lnglat: AMap.LngLat }) => void;

      /**
       * 创建一个覆盖物之后触发该事件，target即为创建对象。当editor编辑对象为空时，调用open接口，再点击一次屏幕就会创建新的覆盖物对象
       */
      add: (event: { target: AMap.Polygon }) => void;

      /**
       * 调用close之后触发该事件，target即为编辑后的覆盖物对象
       */
      end: (event: { target: AMap.Polygon }) => void;
    }
  }

  class PolygonEditor extends AMap.EventEmitter {
    constructor(map: AMap.Map, poly?: AMap.Polygon, opts?: PolygonEditor.Options);

    /**
     * 开始编辑对象
     */
    open(): void;

    /**
     * 停止编辑对象
     * */
    close(): void;

    /**
     * 设置编辑对象
     * @param tar
     */
    setTarget(overlay: AMap.Polygon): void;

    /**
     * 获取编辑对象
     */
    getTarget(): AMap.Polygon | undefined;

    /**
     * 设置吸附多边形
     * @param list
     */
    setAdsorbPolygons(list: AMap.Polygon | AMap.Polygon[]): void;

    /**
     * 清空所有的吸附多边形
     */
    clearAdsorbPolygons(): void;

    /**
     * 添加吸附多边形
     * @param list
     */
    addAdsorbPolygons(list: AMap.Polygon | AMap.Polygon[]): void;

    /**
     * 删除吸附多边形
     */
    removeAdsorbPolygons(list: AMap.Polygon | AMap.Polygon[]): void;
  }
}
