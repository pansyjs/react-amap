declare namespace AMap {
  namespace PlaceSearch {
    interface Options {
      city?: string;
      type?: string;
      pageSize?: number;
      pageIndex?: number;
      extensions?: string;
    }

    type Status = 'complete' | 'error' | 'no_data';

    interface CityInfo {
      /** 城市名称 */
      name: string;
      /** 城市编码 */
      citycode: string;
      /** 行政区编码 */
      adcode: string;
      /** 该城市的建议结果数目 */
      count: number;
    }

    interface PoiInfo {
      /** 页码 */
      pageIndex: number;
      /** 单页结果数 */
      pageSize: number;
      /** 查询结果总数 */
      count: number;
    }

    interface POI {
      /** 兴趣点id */
      id: string;
      /** 名称 */
      name: string;
      /** 兴趣点类型 */
      type: string;
      /** 兴趣点经纬度 */
      location: AMap.LngLat;
      /** 地址 */
      address: string;
      /** 离中心点距离，仅周边查询返回 */
      distance: number;
      /** 电话 */
      tel: string;
      /** 网址 */
      website: string;
      /** poi所在省份编码 */
      pcode: string;
      /** poi所在城市名称 */
      citycode: string;
      /** poi所在区域编码 */
      adcode: string;
      /** 邮编 */
      postcode: string;
      /** poi所在省份 */
      pname: string;
      /** poi所在城市名称 */
      cityname: string;
      /** poi所在行政区名称 */
      adname: string;
      /** 电子邮箱 */
      email: string;
      /** 入口经纬度 */
      entr_location: AMap.LngLat;
      /** 出口经纬度 */
      exit_location: AMap.LngLat;
    }

    interface SearchResult {
      info: string;
      keywordList: string[];
      cityList: CityInfo[];
      poiList: PoiInfo;
      pois: POI[];
    }

    type SearchCallback = (status: Status, result: SearchResult) => void;
  }

  class PlaceSearch extends EventEmitter {
    constructor(options?: PlaceSearch.Options);

    /**
     * 根据输入关键字提示匹配信息，支持中文、拼音
     * @param keyword
     * @param callback
     */
    search(keyword: string, callback: PlaceSearch.SearchCallback): void;

    /**
     * 根据范围和关键词进行范围查询
     * @param keyword
     * @param bounds
     * @param callback
     */
    searchInBounds(keyword: string, bounds: AMap.Bounds, callback: PlaceSearch.SearchCallback): void;

    /**
     * 根据中心点经纬度、半径以及关键字进行周边查询 radius取值范围：0-50000
     * @param keyword 关键字
     * @param center 中心点经纬度
     * @param radius 半径
     */
    searchNearBy(keyword: string, center: AMap.LngLat, radius: number): void;

    /**
     * 根据PGUID 查询POI 详细信息
     * @param PGUID
     */
    getDetails(PGUID: string): PlaceSearch.POI;

    /**
     * 设置查询类别，多个类别用“|”分割
     * @param type
     */
    setType(type: string): void;

    /**
     * 设置显示查询结果页码
     */
    setPageIndex(pageIndex: number): void;

    /**
     * 设置每页显示查询结果数量
     * @param pageSize
     */
    setPageSize(pageSize: number): void;

    /**
     * 设置查询城市, 支持cityname（中文或中文全拼）、citycode、adcode
     * @param city
     */
    setCity(city: string): void;

    /**
     * 设置是否强制限制城市
     * @param citylimit
     */
    setCityLimit(citylimit: boolean): void;
  }
}
