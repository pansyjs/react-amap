declare namespace AMap {
  namespace DistrictSearch {
    interface EventMap {
      complete?: (info: any) => void;
      error?: (event: any) => void;
    }

    /**
     * 关键字对应的行政区级别或商圈
     *   country: 国家
     *   province: 省/直辖市
     *   city: 市
     *   district: 区/县
     *   biz_area: 商圈
     */
    type Level =
      'country' |
      'province' |
      'city' |
      'district' |
      'biz_area';

    /**
     * 显示下级行政区级数
     *   0：不返回下级行政区
     *   1：返回下一级行政区
     *   2：返回下两级行政区
     *   3：返回下三级行政区
     */
    type Subdistrict = 0 | 1 | 2 | 3;

    interface Options {
      /** 关键字对应的行政区级别或商圈 */
      level?: Level;
      /**
       * 是否显示商圈
       * @default true
       */
      showbiz?: boolean;
      /**
       * 是否返回行政区边界坐标点，默认值：base，不返回行政区边界坐标点，取值：all，返回完整行政区边界坐标点
       * @default 'base'
       */
      extensions?: 'base' | 'all';
      /**
       * 显示下级行政区级数
       */
      subdistrict?: Subdistrict;
    }

    type DistrictSearchStatus = 'complete' | 'error' | 'no_data';

    interface District {
      /**
       * 行政编码
       */
      adcode: string;
      /**
       * 中心点坐标
       */
      center: AMap.LngLat;
      /** 边界 */
      boundaries: AMap.LngLat[];
      citycode: string;
      districtList: District[];
      /** 级别 */
      level: Level;
      name: string;
    }

    interface DistrictSearchResult {
      info: string;
      districtList: District[];
    }

    type DistrictSearchCallBack = (status: DistrictSearchStatus, result: DistrictSearchResult) => void;
  }

  class DistrictSearch extends AMap.EventEmitter {
    constructor(options: DistrictSearch.Options);

    /**
     * 设置关键字对应的行政区级别或商圈
     * @param level
     */
    setLevel(level: DistrictSearch.Level): void;

    /**
     * 设置下级行政区级数
     * @param val
     */
    setSubdistrict(val: DistrictSearch.Subdistrict): void;

    /**
     * 根据关键字查询行政区或商圈信息
     * @param keyword
     * @param callback
     */
    search(keyword: any, callback: DistrictSearch.DistrictSearchCallBack, keywords?: string): void;
  }
}
