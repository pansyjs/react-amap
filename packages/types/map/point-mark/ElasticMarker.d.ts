declare namespace AMap {
  namespace ElasticMarker {
    interface EventMap<I = Marker> {
      click: MapsEvent<'click', I>;
      dblclick: MapsEvent<'dblclick', I>;
      rightclick: MapsEvent<'rightclick', I>;
      mousemove: MapsEvent<'mousemove', I>;
      mouseover: MapsEvent<'mouseover', I>;
      mouseout: MapsEvent<'mouseout', I>;
      mousedown: MapsEvent<'mousedown', I>;
      mouseup: MapsEvent<'mouseup', I>;
      dragstart: MapsEvent<'dragstart', I>;
      dragging: MapsEvent<'dragging', I>;
      dragend: MapsEvent<'dragend', I>;
      moving: Event<'moving', { passedPath: LngLat[]; }>;
      moveend: Event<'moveend'>;
      movealong: Event<'movealong'>;
      touchstart: MapsEvent<'touchstart', I>;
      touchmove: MapsEvent<'touchmove', I>;
      touchend: MapsEvent<'touchend', I>;
    }

    /**
     * BL: 左下角;
     * BM: 底部中央;
     * BR: 右下角;
     * ML: 左侧中央;
     * MR: 右侧中央;
     * TL: 左上角
     * TM: 顶部中央;
     * TR: 右上角;
     */
    type StylePosition =
     'BL'|
     'BM' |
     'BR' |
     'ML' |
     'MR' |
     'TL' |
     'TM' |
     'TR';

    interface StyleLabel {
      /** 文本内容 */
      content?: string;
      /** 文本位置相对于图标的基准点 */
      position?: StylePosition;
      /** 相对position的偏移量 */
      offset?: [number, number];
      /** label的最小显示级别 */
      minZoom?: number;
    }

    interface StyleIcon {
      /** 图片url */
      img?: string;
      /** 图标的原始大小 */
      size?: [number, number];
      /** 锚点，图标原始大小下锚点所处的位置，相对左上角 */
      ancher?: [number, number];
      /** 图片的偏移量 */
      imageOffset?: [number, number];
      /** 图片的大小 */
      imageSize?: [number, number];
      /** 合适的级别，在此级别下显示为原始大小 */
      fitZoom?: number;
      /** 地图放大一级的缩放比例系数 */
      scaleFactor?: number;
      /** 最大放大比例 */
      maxScale?: number;
      /** 最小放大比例 */
      minScale?: number;
    }

    interface Style {
      icon: StyleIcon;
      label: StyleLabel;
    }

    interface Options<ExtraData = any> extends Overlay.Options<ExtraData> {
      /** 多个不同样式的数组 */
      styles?: Style[];
      /** 表示地图级别与styles中样式对应关系的映射 */
      zoomStyleMapping?: Record<number, number>;
      /** 要显示该标记的地图对象 */
      map?: Map;
      /**
       * 点标记在地图上显示的位置
       */
      position?: LngLat;
      /**
       * 鼠标点击时marker是否置顶
       * @default false
       */
      topWhenClick?: boolean;
      /**
       * 是否将覆盖物的鼠标或touch等事件冒泡到地图上
       * @default false
       */
      bubble?: boolean;
      /**
       * 设置点标记是否可拖拽移动
       * @default false
       */
      draggable?: boolean;
      /**
       * 指定鼠标悬停时的鼠标样式，自定义cursor，IE仅支持cur/ani/ico格式，Opera不支持自定义cursor
       */
      cursor?: string;
      /**
       * 点标记的叠加顺序。
       * @default 100;
       */
      zIndex?: number;
      /**
       * 点标记是否可见
       * @default true
       *  */
      visible?: boolean;
      /**
       * 点标记是否可点击
       */
      clickable?: boolean;
      /**
       * 额外的数据
       */
      extData?: any;
    }
  }

  class ElasticMarker<ExtraData = any> extends Overlay<ExtraData> {
    /**
     * 点标记
     * @param options 选项
     */
    constructor(options?: ElasticMarker.Options<ExtraData>);

    /**
     * 唤起高德地图客户端标注页
     * @param obj 唤起参数
     */
    markOnAMAP(obj?: { name?: string, position?: LocationValue }): void;

    /**
     * 设置点标记是支持鼠标单击事件
     * @param cilckable 是否支持点击
     */
    setClickable(cilckable: boolean): void;
    /**
     * 获取点标记是否支持鼠标单击事件
     */
    getClickable(): boolean;

    /**
     * 获取点标记的位置
     */
    getPosition(): LngLat | undefined;
    /**
    * 设置点标记位置
    * @param position 位置经纬度
    */
    setPosition(position: LocationValue): void;

    /**
     * 设置点标记的叠加顺序
     * @param index 层级
     */
    setzIndex(index: number): void;
    /**
     * 获取点标记的叠加顺序
     */
    getzIndex(): number;

    /**
     * 设置点标记对象是否可拖拽移动
     * @param draggable 是否可拖拽移动
     */
    setDraggable(draggable: boolean): void;
    /**
    * 获取点标记对象是否可拖拽移动
    */
    getDraggable(): boolean;

    /**
     * 设置鼠标悬停时的光标
     * @param cursor 光标
     */
    setCursor(cursor: string): void;

    /**
     * 为Marker指定目标显示地图,当参数值取null时，地图上移除当前Marker
     * @param draggable 是否可拖拽移动
     */
    setMap(map: Map): void;
     /**
      * 获取Marker所在地图对象
      */
    getMap(): Map;

    /**
     * 鼠标滑过点标时的文字提示
     * @param title 提示文字
     */
    setTitle(title: string): void;
    /**
     * 获取点标记的文字提示
     */
    getTitle(): string | undefined;

    /**
     * 地图上有多个marker时，当isTop为true时，marker将显示在最前面；当为false时，marker取消置顶
     * @param title 提示文字
     */
    setTop(isTop: boolean): void;
    /**
     * marker是否置顶
     */
    getTop(): boolean;

    /**
     * 设置用户自定义属性
     */
    setExtData(ext: any): void;
     /**
      * 获取用户自定义属性
      */
    getExtData(): any;
  }
}
