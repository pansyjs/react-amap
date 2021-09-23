declare namespace AMap {
  /**
   * 实时交通图层类
   */
  namespace Traffic {
    interface Options extends TileLayer.Options {
      /**
       * 是否自动更新数据
       * @default true
       */
      autoRefresh?: boolean;

      /**
       * 自动更新数据的间隔毫秒数
       * @default 180
       */
      interval?: number;
    }
  }

  class Traffic extends TileLayer {
    /**
     * 实时交通图层
     * @param options 图层选项
     */
    constructor(options?: Traffic.Options);

    /**
     * 停止自动更新数据
     */
    stopFresh(): void;
  }
}
