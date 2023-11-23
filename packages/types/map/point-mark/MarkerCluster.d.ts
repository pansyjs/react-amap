declare namespace AMap {
  namespace MarkerCluster {
    interface EventMap<D = any> {
      click: (data: {
        cluster: MarkerCluster,
        lnglat: AMap.LngLat,
        target: any,
        markers: AMap.Marker[],
        clusterData: D[];
      }) => void;
    }

    interface Style {
      /**
       * 图标显示图片的url地址
       */
      url: string;
      /**
       * 图标显示图片的大小
       */
      size: AMap.Size;
      /**
       * 图标定位在地图上的位置相对于图标左上角的偏移值
       * @default 0,0
       */
      offset?: AMap.Pixel;
      /**
       * 图片相对于可视区域的偏移值，此功能的作用等同CSS中的background-position属性。
       * @default 0,0
       */
      imageOffset?: AMap.Pixel;
      /**
       * 文字的颜色
       * @default "#000000"
       */
      textColor?: string;
      /**
       * 文字的大小，默认为10（可选）
       *  @default 10
       */
      textSize?: number;
    }

    interface DataOptions {
      /**
       * 点标记的经纬度信息
       */
      lnglat: [number, number];
      /**
       * 点标记的权重信息，以权重高的点为中心进行聚合
       */
      weight?: number;
      /** 其他需要传递的数据 */
      [key: string]: any;
    }

    interface RenderMarkerData {
      count: number;
      marker: AMap.Marker;
      data: DataOptions[];
    }

    interface RenderClusterMarkerData {
      count: number;
      marker: AMap.Marker;
      clusterData: DataOptions[];
    }

    interface Options<ExtraData = any> extends Overlay.Options<ExtraData> {
      /**
       * 聚合计算时网格的像素大小
       * @default 60
       */
      gridSize?: number;
      /**
       * 最大的聚合级别，大于该级别就不进行相应的聚合
       * @default 18
       */
      maxZoom?: number;
      /**
       * 聚合点的图标位置是否是所有聚合内点的中心点。
       * 默认为否，即聚合点的图标位置位于聚合内的第一个点处
       * @default true
       */
      averageCenter?: boolean;
      /**
       * 地图缩放过程中是否聚合
       * @default false
       */
      clusterByZoomChange?: boolean;
      /**
       * 指定聚合后的点标记的图标样式，可缺省，缺省时为默认样式；
       * 数据元素分别对应聚合量在1-10,11-100,101-1000…的聚合点的样式；
       * 当用户设置聚合样式少于实际叠加的点数，未设置部分按照系统默认样式显示；
       */
      styles?: Style[];
      /**
       * 该方法用来实现聚合点的自定义绘制，由开发者自己实现，API将在绘制每个聚合点的时候调用这个方法，可以实现聚合点样式的灵活设定，指定了renderClusterMarker后styles无效。
       * 该函数的入参为一个Object，包含如下属性：
       * 1. count: 当前聚合点下聚合的Marker的数量
       * 3. marker：当前聚合点的显示Marker
       * 在renderClusterMarker里面可以根据count和markers的一些附加属性来修改marker的icon、content等属性实现聚合点的完全自定义
       */
      renderClusterMarker?: (data: RenderClusterMarkerData) => void;
      /**
       * 该方法用来实现非聚合点的自定义绘制，由开发者自己实现，API 将在绘制每个非聚合点的时候调用这个方法
       */
      renderMarker?: (data: RenderMarkerData) => void;
    }
  }

  class MarkerCluster extends Layer {
    /**
     * 创建聚合实例
     * @param map 地图实例
     * @param markers 需要聚合的标记点
     * @param opts
     */
    constructor(map: AMap.Map, dataOptions: MarkerCluster.DataOptions[], opts?: MarkerCluster.Options);

    /**
     * 在原数据基础上添加数据
     * */
    addData(dataOptions: MarkerCluster.DataOptions[]): void;

    /**
     * 设置数据
     * */
    setData(dataOptions: MarkerCluster.DataOptions[]): void;

    /**
     * 获取聚合点的总数量
     */
    getClustersCount(): number;

    /**
     * 获取聚合网格的像素大小
     */
    getGridSize(): number;

    /**
     * 设置聚合网格的像素大小
     */
    setGridSize(size: number): void;

    /**
     * 获取地图中点标记的最大聚合级别
     */
    getMaxZoom(): number;

    /**
     * 设置地图中点标记的最大聚合级别
     * @param zoom
     */
    setMaxZoom(zoom: number): void;

    /**
     * 获取聚合的样式风格集合
     */
    getStyles(): MarkerCluster.Style[];

    /**
     * 设置聚合的样式风格
     * @param styles
     */
    setStyles(styles: MarkerCluster.Style[]): void;

    /**
     * 获取该点聚合的地图对象
     */
    getMap(): AMap.Map;

    /**
     * 设置将进行点聚合的地图对象
     * @param map
     */
    setMap(map: AMap.Map): void;

    /**
     * 获取单个聚合点位置是否是聚合内所有标记的平均中心
     */
    isAverageCenter(): boolean;

    /**
     * 设置单个聚合点位置是否是聚合内所有标记的平均中心
     */
    setAverageCenter(averageCenter: boolean): void;
  }
}
