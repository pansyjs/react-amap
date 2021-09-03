declare namespace AMap {
  namespace EllipseEditor {
    interface EventMap {
      /**
       * 拖拽圆心调整圆形位置时触发此事件
       */
      move: (event: { type: string, target: Circle, lnglat: AMap.LngLat }) => void;
      /**
       * 鼠标调整圆形半径时，触发此事件
       */
      adjust: (event: { type: string, target: Circle, radius: number }) => void;
      /**
       * 该方法会在调用close方法后触发，target即为编辑后的圆对象
       */
      end: (event: { type: string, target: Circle }) => void;
    }
  }

  class EllipseEditor extends AMap.EventEmitter {
    constructor(map: AMap.Map, circle: AMap.Ellipse);
    /**
     * 打开编辑功能
     */
    open(): void;
    /**
     * 关闭编辑功能
     * */
    close(): void;
  }
}
