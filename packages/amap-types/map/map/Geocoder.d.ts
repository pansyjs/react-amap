declare namespace AMap {
  namespace Geocoder {
    interface EventMap {
      /**
       * 当编码执行成功时触发此事件
       */
      complete?: (data: GeocodeResult) => void;

      /**
       * 当编码执行失败时触发此事件
       */
      error?: (status: string) => void;
    }

    interface Options {
      /**
       * 城市，地理编码时，设置地址描述所在城市
       * 可选值：城市名（中文或中文全拼）、citycode、adcode；
       * 默认值：“全国”
       */
      city?: string;
      /**
       * 逆地理编码时，以给定坐标为中心点，单位：米
       * 取值范围：0-3000
       * 默认值：1000
       */
      radius?: number;
      /**
       * 设置语言类型
       */
      lang?: string;
      /**
       * 是否批量查询
       */
      batch?: boolean;
      /**
       * 逆地理编码时，返回信息的详略
       * 默认值：base，返回基本地址信息；
       * 取值为：all，返回地址信息及附近poi、道路、道路交叉口等信息
       * */
      extensions?: string;
    }

    interface Cross {
      /** 道路离查询点最近距离 */
      distance: number;
      /** 与查询点的相对方位 */
      direction: string;
      /** 路口经纬度 */
      location: LngLat;
      /** 第一条道路id */
      first_id: string;
      /** 第一条道路名称 */
      first_name: string;
      /** 第二条道路id */
      second_id: string;
      /** 第二条道路名称 */
      second_name: string;
    }

    interface Road {
      /** 道路id */
      id: string;
      /** 道路名称 */
      name: string;
      /** 道路离查询点最近距离 */
      distance: number;
      /** 道路上离查询点最近的点坐标 */
      location: LngLat;
      /** 与查询点的相对方位 */
      direction: string;
    }

    interface BusinessArea {
      /** 商圈id */
      id: string;
      /** 商圈名称 */
      name: string;
      /** 圈中心点经纬度 */
      location: string;
    }

    interface ReGeocodePoi {
      /** Poi的唯一标识id */
      id: string;
      /** Poi名称 */
      name: string;
      /** Poi类型 */
      type: string;
      /** Poi电话 */
      tel: string;
      /** 该Poi到请求坐标的距离，单位：米 */
      distance: number;
      /** 该Poi相对于请求坐标的方向 */
      direction: string;
      /** Poi地址信息 */
      address: string;
      /** Poi坐标 */
      location: LngLat;
      /** Poi所在商圈名称 */
      businessArea: string;
    }

    interface AddressComponent {
      /** 所在省 */
      province: string;
      /** 所在城市 */
      city: string;
      /** 所在城市编码 */
      citycode: string;
      /** 所在区 */
      district: string;
      /** 所在区域编码 */
      adcode: string;
      /** 所在乡镇 */
      township: string;
      /** 所在街道 */
      street: string;
      /** 门牌号 */
      streetNumber: string;
      /** 所在社区 */
      neighborhood: string;
      /** 社区类型 */
      neighborhoodType: string;
      /** 所在楼/大厦 */
      building: string;
      /** 楼类型 */
      buildingType: string;
      /** 仅逆地理编码时返回，所属商圈信息 */
      businessAreas: BusinessArea[];
    }

    interface Geocode {
      addressComponent: AddressComponent;
      /**
       * 格式化地址
       * 规则：地址信息=基本行政区信息+具体信息；
       * 基本行政信息=省+市+区+乡镇
       * */
      formattedAddress: string;
      /** 坐标 */
      location: LngLat;
      /** 区域编码 */
      adcode: string;
      /** 给定地址匹配级别，返回匹配最详细级别 */
      level: string;
    }

    interface ReGeocode {
      /** 地址组成元素 */
      addressComponent: AddressComponent;
      /**
       * 格式化地址
       * 规则：地址信息=基本行政区信息+具体信息；
       * 基本行政信息=省+市+区+乡镇
       * 当给定坐标为poi时直接返回；非poi时，取离给定坐标最近poi返回
       * */
      formattedAddress: string;
      /** 道路信息列表 */
      roads: Road[];
      /** 道路路口列表 */
      crosses: Cross[];
      /** 给定地址匹配级别，返回匹配最详细级别 */
      pois: ReGeocodePoi[];
    }

    interface GeocodeResult {
      /** 成功状态说明 */
      info: string;
      /** 地理编码结果，仅地理编码返回 */
      geocodes: Geocode[];
      /** 地理编码结果数目，仅地理编码返回 */
      resultNum: number;
      /** 逆地理编码结果，仅逆地理编码返回 */
      regeocode: ReGeocode;
    }

    interface ReGeocodeResult {
      /** 成功状态说明 */
      info: string;
      /** 逆地理编码结果，仅逆地理编码返回 */
      regeocode: ReGeocode;
    }

    type Status = 'complete' | 'error' | 'no_data';

    type GetLocationCallback = (status: Status, result: GeocodeResult) =>  void;

    type GetAddressCallback = (status: Status, result: ReGeocodeResult) =>  void;
  }

  class Geocoder {
    constructor(options?: Geocoder.Options);

    /**
     * 根据给定的地址描述进行解析，支持中文、拼音
     * 当status为complete时，result为GeocodeResult；
     * 当status为error时，result为错误信息info；
     * 当status为no_data时，代表检索返回0结果
     * @param address
     * @param callback
     */
    getLocation(address: string, callback: Geocoder.GetLocationCallback): void;

    /**
     * 地理编码时，设置地址描述所在城市
     * @param city
     */
    setCity(city: string): void;

    /**
     * 根据给定坐标进行解析
     * 当status为complete时，result为ReGeocodeResult；
     * 当status为error时，result为错误信息info；
     * 当status为no_data时，代表检索返回0结果
     * 批量逆地理编码时，最多支持20个坐标点，超过20个坐标点，按20处理
     * @param location
     * @param callback
     */
    getAddress(location: LocationValue | LocationValue[], callback: Geocoder.GetAddressCallback): void;
  }
}
