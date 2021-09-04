declare namespace Loca {
  namespace GeoJSONSource {
    interface Options {
      /**
       * 数据对象。如果你不想使用 url 方式请求数据，可以直接填写请求好的 geojson 对象。
       */
      data?: any;
      /**
       * 数据源的链接地址，一般是接口地址，返回的数据必须是 geojson 格式。
       */
      url?: string;
    }
  }

  class GeoJSONSource {
    constructor(opts: GeoJSONSource.Options);

    /**
     * 销毁数据源对象
     */
     destroy(): void;
  }
}
