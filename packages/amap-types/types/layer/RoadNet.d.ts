declare namespace AMap {
  namespace RoadNet {
    interface Options extends TileLayer.Options {}
  }

  /**
   * 卫星图层
   */
  class RoadNet extends TileLayer {
    constructor(options?: RoadNet.Options);

    /**
     * 销毁图层
     */
    destroy(): void;
  }
}
