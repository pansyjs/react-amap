/// <reference path="../common/index.d.ts" />

declare namespace AMap {
  namespace RectangleEditor {
    interface EventMap<I = BezierCurve> {
      adjust: MapsEvent<'adjust', { radius: number, target: I }>;
      end: MapsEvent<'end', I>;
    }
  }

  class RectangleEditor {
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
