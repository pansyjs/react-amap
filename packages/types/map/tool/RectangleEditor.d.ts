declare namespace AMap {
  namespace RectangleEditor {
    interface EventMap<I = Rectangle> {
      adjust: MapsEvent<'adjust', { radius: number, target: I }>;
      end: MapsEvent<'end', I>;
    }
  }

  class RectangleEditor extends AMap.EventEmitter {
    constructor(map: AMap.Map, circle: AMap.Rectangle);
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
