declare namespace AMap {

  namespace HeatMap {
    interface EventMap<T extends ShapeOverlay = any> {
      click: MapsEvent<'click', T>;
      mouseover: MapsEvent<'mouseover', T>;
      mouseout: MapsEvent<'mouseout', T>;
    }

    interface HeatMap3DOptions {
      /**
       * 高度缩放因子，表示在单位高度上的缩放比例
       * @default 1
       */
      heightScale?: number;
      /**
       * 影响高度平滑度的贝塞尔曲线因子，
       * @default
       *   [0.5, 0, 1, 0.5]
       */
      heightBezier?: number[];
      /** 取样精度，越小越平滑，越大性能越高 */
      gridSize?: number;
    }

    interface Options {
      /**
       * 热力图中单个点的半径，单位：pixel
       * @default 30
       */
      radius?: number;
      /**
       * 热力图的渐变区间
       * 其中 key 表示间隔位置，取值范围： [0,1] ，value 为颜色值
       * @example
       * {
       *   0.4: 'rgb(0, 255, 255)',
       *   0.85: 'rgb(100, 0, 255)',
       * }
       *
       */
      gradient?: Record<number, string>;
      /**
       * 热力图透明度数组，取值范围[0,1]，0表示完全透明，1表示不透明
       * 默认：[0,1]
       */
      opacity?: [number, number];
      /**
       * 支持的缩放级别范围，取值范围[3-20]
       * @default [3,20]
       */
      zooms?: [number, number];
      /**
       * 是否可见
       */
      visible?: boolean;
      /**
       * 热力图层在地图上的叠加顺序
       * @default 130
       */
      zIndex?: number;
      /** 3D热力图属性 */
      ['3d']?: HeatMap3DOptions;
    }

    interface Data {
      /**
       * 经度
       */
      lng: number;
      /**
       * 维度
       */
      lat: number;
      /**
       * 权重
       */
      count: number;
    }

    interface DataSet {
      /**
       * 权重的最大值
       */
      max?: number;
      /**
       * 坐标数据集
       */
      data: Data[];
    }
  }

  /**
   * 热力图，基于第三方heatmap.js实现，以特殊高亮的形式显示数据密集程度。
   */
  class HeatMap extends AMap.EventEmitter {
    /**
     * 热力图
     * @param map 地图对象
     * @param opts 热力图选项
     */
    constructor(map: Map, opts?: HeatMap.Options);

    /**
     * 获取热力图叠加地图对象
     */
    getMap(): Map;

    /**
     * 设置热力图要叠加的地图对象
     * @param map 地图实例
     */
    setMap(map: Map): void;

    /**
     * 获取热力图的属性信息
     */
    getOptions(): HeatMap.Options;

    /**
     * 设置热力图属性
     * @param opts 热力图配置
     */
    setOptions(opts?: HeatMap.Options): void;


    /**
     * 输出热力图的数据集，数据结构同setDataSet中的数据集
     */
    getDataSet(): HeatMap.DataSet;

    /**
     * 设置热力图展现的数据集，数据格式详见
     * https://lbs.amap.com/api/javascript-api/reference/layer#m_AMap.Heatmap
     * @param dataset 数据集
     */
    setDataSet(dataset: HeatMap.DataSet | {
      data: string;
      dataParser?: (data: any) => HeatMap.DataSet;
    }): void;

    /**
     * 向热力图数据集中添加坐标点，count不填写时默认：1
     * @param longitude 经度
     * @param latitude 维度
     * @param count 权重
     */
    addDataPoint(longitude: number, latitude: number, count?: number): void;

    /**
     * 隐藏热力图
     */
    hide(): void;
    /**
     * 显示热力图
     */
    show(): void;

    /**
     * 设置热力图层叠加层级
     * @param zIndex
     */
    setzIndex(zIndex: number): void;

    /**
     * 获取热力图层叠加层级
     * @param zIndex
     */
    getzIndex(): number;
  }
}
