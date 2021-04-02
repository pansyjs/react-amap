/// <reference path="../common/index.d.ts" />

declare namespace AMap {
  namespace BezierCurveEditor {
    interface EventMap<I = Circle> extends ShapeOverlay.EventMap<I> {
      addnode: MapsEvent<'addnode', BezierCurve>;
      adjust: MapsEvent<'adjust', BezierCurve>;
      removenode: MapsEvent<'removenode', BezierCurve>;
      end: MapsEvent<'end', BezierCurve>;
    }
  }

  class BezierCurveEditor {
    constructor(map: AMap.Map, circle: AMap.BezierCurve);
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
