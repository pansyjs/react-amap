declare namespace AMap {
  namespace MapType {
    interface EventMap extends Control.EventMap {}

    interface LayerInfo {
      /**
       * 图层 id
       */
      id: string;
      /**
       * 图层是否可用
       */
      enable: boolean;
      /**
       * 图层暂时名称
       */
      name: string;
      /**
       * 图层类型，base 是属于底图图层，overlay 属于叠加图层
       */
      type: 'base' | 'overlay';
      /**
       * 图层对象
       */
      layer: any;
    }


    interface Options extends Control.Options {
      /**
       * 初始化默认图层类型。
       */
      defaultType?: number;
      /**
       * 叠加实时交通图层
       */
      showTraffic?: boolean;
      /**
       * 叠加路网图层
       */
      showRoad?: boolean;
    }
  }

  class MapType extends Control {
    constructor(options?: MapType.Options);

    /**
     * 添加一个图层
     * @param info
     */
    addLayer(info: MapType.LayerInfo): void;

    /**
     * 移除一个图层
     * @param id
     */
    removeLayer(id: string): void;
  }
}
