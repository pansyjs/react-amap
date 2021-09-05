declare namespace AMap {
  namespace IndoorMap {
    interface Options extends TileLayer.Options {
      /**
       * 指定鼠标悬停到店铺面时的鼠标样式
       */
      cursor?: string;

      /**
       * 是否隐藏楼层切换控件
       * @default false
       */
      hideFloorBar?: boolean;
    }
  }

  class IndoorMap extends TileLayer {
    constructor(options?: IndoorMap.Options);

    /**
     * 显示指定 POI 的室内地图
     * @param indoorid 建筑物 POIID
     * @param floor 楼层
     * @param shopid 商铺 ID
     */
    showIndoorMap(indoorid: string, floor: number, shopid: string): void;

    /**
     * 显示指定的楼层
     * @param floor 楼层
     */
    showFloor(floor: number): void;

    /**
     * 设置显示室内图层的地图对象
     * @param map
     */
    setMap(map: AMap.Map): void;

    /**
     * 隐藏楼层切换控件
     */
    hideFloorBar(): void;

    /**
     * 显示室内图层上的标注
     */
    showLabels(): void;

    /**
     * 隐藏室内图层上的标注
     */
    hideLabels(): void;

    /**
     * 获取被选中室内的 POIID
     */
    getSelectedBuildingId(): string;

    /**
     * 获取被选中的室内地图的一些基本信息，包含名称、当前楼层、所有楼层信息、POIID等
     */
    getSelectedBuilding(): any;
  }
}
