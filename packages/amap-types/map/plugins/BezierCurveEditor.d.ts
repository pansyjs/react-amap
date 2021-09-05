declare namespace AMap {
  namespace BezierCurveEditor {
    interface EventMap<I = BezierCurve> {
      addnode: MapsEvent<'addnode', I>;
      adjust: MapsEvent<'adjust', I>;
      removenode: MapsEvent<'removenode', I>;
      end: MapsEvent<'end', I>;
    }
  }

  class BezierCurveEditor extends AMap.EventEmitter {
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
