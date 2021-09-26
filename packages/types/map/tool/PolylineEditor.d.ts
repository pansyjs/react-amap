declare namespace AMap {

  namespace PolylineEditor {
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
      addnode: (event: { pixel: AMap.Pixel, target: AMap.Polyline, lnglat: AMap.LngLat }) => void;

      /**
       * 移除一个节点时触发此事件
       */
      removenode: (event: { pixel: AMap.Pixel, target: AMap.Polyline, lnglat: AMap.LngLat }) => void;

      /**
       * 调整折线上某个点时触发此事件
       */
      adjust: (event: { pixel: AMap.Pixel, target: AMap.Polyline, lnglat: AMap.LngLat }) => void;

      /**
       * 调整折线上某个点时触发此事件
       */
      move: (event: { pixel: AMap.Pixel, target: AMap.Polyline, lnglat: AMap.LngLat }) => void;

      /**
       * 创建一个覆盖物之后触发该事件，target即为创建对象。当editor编辑对象为空时，调用open接口，再点击一次屏幕就会创建新的覆盖物对象
       */
      add: (event: { target: AMap.Polyline }) => void;

      /**
       * 调用close之后触发该事件，target即为编辑后的覆盖物对象
       */
      end: (event: { target: AMap.Polyline }) => void;
    }
  }

  class PolylineEditor extends AMap.EventEmitter {
    constructor(map: AMap.Map, poly?: AMap.Polyline, opts?: PolylineEditor.Options);

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
     * @param overlay
     */
    setTarget(overlay: AMap.Polyline): void;

    /**
     * 获取编辑对象
     */
    getTarget(): AMap.Polyline | undefined;
  }
}
