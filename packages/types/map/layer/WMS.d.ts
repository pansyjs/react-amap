declare namespace AMap {
  namespace WMS {
    type Params = {
      [key: string]: any
    };

    interface Options extends TileLayer.Options {
      /**
       * wmts服务的url地址
       */
      url?: string;
      /**
       * 地图级别切换时，不同级别的图片是否进行混合，如图层的图像内容为部分透明请设置为false
       */
      blend?: boolean;
      /**
       * OGC标准的WMS地图服务的GetMap接口的参数
       */
      param?: Params;
    }
  }

  /**
   * 卫星图层
   */
  class WMS extends TileLayer {
    constructor(options?: WMS.Options);

    /**
     * 设置OGC标准的WMS getMap接口的参数
     */
    setParams(params: WMS.Params): void;

    /**
     * 获取 OGC 标准的 WMS getMap 接口的参数
     */
    getParams(): WMS.Params;

    /**
     * 设置 WMS 服务地址
     * @param url
     */
    setUrl(url: string): void;

    /**
     * 获取 WMS 服务地址
     */
    getUrl(): string;
  }
}
