declare namespace AMap {
  namespace DistrictLayer {
    type Color = number[] | string;

    interface Styles {
      /**
       * 描边线宽
       */
      ['stroke-width']?: number;

      /**
       * 图层中每个区域层级，数值越大，层级越高
       */
      zIndex?: number;

      /**
       * 海岸线颜色
       */
      ['coastline-stroke']?: Color;

      /**
       * 省界颜色
       */
      ['province-stroke']?: Color;

      /**
       * 国境线颜色
       */
      ['nation-stroke']?: Color;

      /**
       * 城市界颜色
       */
      ['city-stroke']?: Color;

      /**
       * 区/县界颜色
       */
      ['county-stroke']?: Color;

      /**
       * 填充色
       */
      fill?: Color;
    }

    interface Options extends TileLayer.Options {
      /**
       * 行政区的编码
       */
      adcode?: string;

      /**
       * 设定显示的国家
       */
      SOC?: string;

      /**
       * 设定数据的层级深度，depth为0的时候只显示国家面，depth为1的时候显示省级， 当国家为中国时设置depth为2的可以显示市一级
       */
      depth?: number;

      /**
       * 为简易行政区图设定各面的填充颜色和描边颜色
       */
      styles?: Styles;
    }
  }

  /**
   * 卫星图层
   */
  class DistrictLayer extends TileLayer {
    constructor(options?: DistrictLayer.Options);

    /**
     * 设定显示的国家 SOC
     */
    setSOC(SOC: string): void;

    /**
     * 设置 adcodes 值
     * @param adcodes
     */
    setDistricts(adcodes: string | number | any[]): void;

    /**
     * 获取 adcodes
     */
    getDistricts(): any;

    /**
     * 销毁图层
     */
    destroy(): void;
  }
}
