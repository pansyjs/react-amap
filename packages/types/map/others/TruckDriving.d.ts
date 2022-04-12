declare namespace AMap {
  namespace TruckDriving {
    type PathLngLat = { lnglat: [number, number]; pid?: string; type?: string };

    type PathKeyword = { keyword: string; city: string };

    type Path = PathLngLat[] | PathKeyword[];

    type Status = 'complete' | 'error' | 'no_data';

    type GetTruckDrivingCallback = (status: Status, result: TruckDrivingResult) => void;

    enum PoiType {
      START = 'start',
      END = 'end',
      WATPOINT = 'waypoint',
    }

    interface Options {
      /** 路线规划策略，1-9 */
      policy?: number;
      /** 车型大小，必填，1-4分别对应小型至大型 */
      size: number;
      /** 宽度，缺省2.5米 */
      width?: number;
      /** 高度，缺省1.6米 */
      height?: number;
      /** 载重，缺省0.9t */
      load?: number;
      /** 自重，缺省10t */
      weight?: number;
      /** 轴数，缺省2轴 */
      axlesNum?: number;
      /** 默认值：base，返回基本地址信息当取值为：all，返回DriveStep基本信息+DriveStep详细信息 */
      extensions?: string;
      /** AMap.Map对象, 展现结果的地图实例。当指定此参数后，搜索结果的标注、线路等均会自动添加到此地图上。 */
      map?: Map;
      /** 结果列表的HTML容器id或容器元素，提供此参数后，结果列表将在此容器中进行展示。 */
      panel?: string | HTMLElement;
      /** 设置隐藏路径规划的起始点图标，设置为true：隐藏图标；设置false：显示图标   */
      hideMarkers?: boolean;
      /** 设置是否显示实时路况信息，默认设置为true。显示绿色代表畅通，黄色代表轻微拥堵，红色代表比较拥堵，灰色表示无路况信息。 */
      showTraffic?: boolean;
      /** 使用map属性时，绘制的规划线路是否显示描边。缺省为true */
      isOutline?: boolean;
      /** 使用map属性时，绘制的规划线路的描边颜色。缺省为'white' */
      outlineColor?: string;
      /** 用于控制在路径规划结束后，是否自动调整地图视野使绘制的路线处于视口的可见范围 */
      autoFitView?: boolean;
      /** 车辆牌照省份，如‘京’ */
      province?: string;
      /** 车牌号，如‘111111’ */
      number?: number;
    }

    interface Poi {
      type: PoiType;
      name: string;
      location: LngLat;
      isWaypoint?: boolean;
    }

    interface District {
      /** 区域名称 */
      name: string;
      /** 区域编码 */
      adcode: string;
    }

    interface ViaCity {
      /** 途径名称 */
      name: string;
      /** 城市编码 */
      citycode: string;
      /** 区域编码 */
      adcode: string;
      /** 途径行政区列表 */
      districts: District[];
    }

    interface TMC {
      /**
       * 路况信息对应的编码
       * 如果direction是正向 lcode返回值大于0；否则lcode，返回值小于0
       * 如果返回0则说明此路段无lcode
       */
      lcode: string;
      /** 此lcode对应的路段长度，单位: 米 */
      distance: number;
      /** 路况状态，可能的值有：未知，畅通，缓行，拥堵 */
      status: string;
    }

    interface DriveStep {
      /** 此路段起点 */
      start_location: LngLat;
      /** 此路段终点 */
      end_location: LngLat;
      /** 此路段说明，如“沿北京南站路行驶565米右转” */
      instruction: string;
      /** 驾车子路段完成后动作 */
      action: string;
      /** 驾车子路段完成后辅助动作，一般为到达某个目的地时返回 */
      assist_action: string;
      /** 驾车方向 */
      orientation: string;
      /** 道路 */
      road: string;
      /** 此路段距离，单位：米 */
      distance: number;
      /** 此段收费，单位：元 */
      tolls: number;
      /** 收费路段长度，单位：米 */
      tolls_distance: number;
      /** 主要收费道路 */
      toll_road: string;
      /** 此路段预计使用时间，单位：秒 */
      time: number;
      /** 此路段坐标集合 */
      path: LngLat[];
      /** 途径城市列表 */
      cities?: ViaCity[];
      /** 实时交通信息列表 */
      tmcs?: TMC[];
    }

    interface DriveRoute {
      /** 起点到终点的驾车距离，单位：米 */
      distance: number;
      /** 时间预计，单位：秒 */
      time: number;
      /** 驾车规划策略 */
      policy: string;
      /** 此驾车路线收费金额，单位：元 */
      tolls: number;
      /** 收费路段长度，单位：米 */
      tolls_distance: number;
      /** 子路段DriveStep集合 */
      steps: DriveStep[];
      /**
       * 限行结果
       * 0 代表限行已规避或未限行，即该路线没有限行路段
       * 1 代表限行无法规避，即该线路有限行路段
       */
      restriction: number;
    }

    interface TruckDrivingResult {
      /** 成功状态说明 */
      info: string;
      /** 驾车规划起点坐标 */
      origin: LngLat;
      /** 驾车规划终点坐标 */
      destination: LngLat;
      /** 驾车规划起点 */
      start: Poi;
      /** 驾车规划终点 */
      end: Poi;
      /** 驾车规划途经点 */
      waypoints: Poi[];
      /** 打车费用，仅extensions为“all”时返回单位：元 */
      taxi_cost: number;
      /** 驾车规划路线列表 */
      routes: DriveRoute[];
    }
  }

  class TruckDriving {
    constructor(options: TruckDriving.Options);

    /**
     * 根据路径，实现货车路线规划，path支持两种格式
     * 当status为complete时，result为TruckDrivingResult；
     * 当status为error时，result为错误信息info；
     * 当status为no_data时，代表检索返回0结果
     * @param path
     * @param callback
     */
    search(path: TruckDriving.Path, callback: TruckDriving.GetTruckDrivingCallback): void;

    /**
     * 清除搜索结果
     */
    clear(): void;

    /**
     * 修改车牌号
     *
     * @param province
     * @param number
     */
    setProvinceAndNumber(province: string, number: number): void;
  }
}
