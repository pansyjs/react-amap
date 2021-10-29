declare namespace AMap {
  namespace MassMarks {
    interface EventMap {
      click: (e: { data: MassData, target: AMap.MassMarks, type: string }) => void;
    }

    interface MassData {
      lnglat: AMap.LngLat | [number, number];
      style?: number;
      [key: string]: any;
    }

    interface Options {
      /**
       * 图层叠加的顺序值，0表示最底层。
       * @default 120
       */
      zIndex?: number;
      /**
       * 图层的透明度，取值范围 [0,1] ，1代表完全不透明，0代表完全透明
       */
      opacity?: number;
      /**
       * 支持的缩放级别范围
       */
      zooms?: [number, number];
      /**
       * 指定鼠标悬停时的鼠标样式，自定义cursor。
       */
      cursor?: string;
      /**
       * 用于设置点的样式
       */
      style?: Style | Style[];
    }

    interface Style {
      /**
       * 图标的地址
       */
      url: string
      /**
       * 图标的尺寸
       */
      size: AMap.Size;
      /**
       * 图标显示位置偏移量
       */
      anchor: AMap.Pixel;
      /**
       * 点展示优先级，默认为使用样式的索引值。
       */
      zIndex?: number;
      /**
       * 旋转角度
       */
      rotation?: number;
    }
  }

  class MassMarks extends Layer {
    /**
     * 海量点类
     * @param data
     * @param opts
     */
    constructor(data: MassMarks.MassData[], opts?: MarkerCluster.Options);

    /**
     * 设置显示MassMark的地图对象
     */
    setMap(map: AMap.Map): void;

    /**
     * 获取MassMark所在地图对象
     */
    getMap(): AMap.Map;

    /**
     * 设置MassMark展现的数据集
     * @param list
     */
    setData(list: MassMarks.MassData[]): void;

    /**
     * 获取MassMark的数据集
     */
    getData(): MassMarks.MassData[];

    /**
     * 获取MassMark的显示样式
     */
    getStyle(): MassMarks.Style[];

    /**
     * 设置MassMark的显示样式，可设置单个样式或样式列表
     */
    setStyle(style: MassMarks.Style | MassMarks.Style[]): void;

    /**
     * 设置海量点图层的透明度
     */
    setOpacity(opacity: number): void;

    /**
     * 获取海量点图层的透明度
     */
    getOpacity(): number;

    /**
     * 设置图层叠加的顺序值
     * @param zIndex
     */
    setzIndex(zIndex: number): void;

    /**
     * 获取图层叠加的顺序值
     * @param zIndex
     */
    getzIndex(): number;

    /**
     * 设置海量点图层可见层级范围
     * @param zooms
     */
    setZooms(zooms: [number, number]): void;

    /**
     * 获取海量点图层可见层级范围
     * @param zooms
     */
    getZooms(): [number, number];

    /**
     * 显示海量点图层
     */
    show(): void;

    /**
     * 隐藏海量点图层
     */
    hide(): void;

    /**
     * 清除海量点
     */
    clear(): void;
  }
}
