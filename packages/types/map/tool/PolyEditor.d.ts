declare namespace AMap {

  namespace PolyEditor {
    interface EventMap<I = Polyline | Polygon> extends ShapeOverlay.EventMap<I> {
      addnode: MapsEvent<'addnode', I>;
      adjust: MapsEvent<'adjust', I>;
      removenode: MapsEvent<'removenode', I>;
      end: Event<'end', I>;
    }
  }

  class PolyEditor extends AMap.EventEmitter {
    constructor(map: AMap.Map, poly: AMap.Polyline | AMap.Polygon);
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
