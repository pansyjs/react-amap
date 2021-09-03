declare namespace AMap {
  namespace Satellite {
    interface Options extends TileLayer.Options {}
  }

  /**
   * 卫星图层
   */
  class Satellite extends TileLayer {
    constructor(options?: Satellite.Options);

    /**
     * 销毁图层
     */
    destroy(): void;
  }
}
