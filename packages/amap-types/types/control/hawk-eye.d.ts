declare namespace AMap {
  namespace HawkEye {
    interface EventMap {
      show: Event<'show'>;
      hide: Event<'hide'>;
      open: Event<'open'>;
      close: Event<'close'>;
    }

    interface Options<L extends TileLayer = TileLayer> {
      /**
       * 是否随主图视口变化移动
       */
      autoMove?: boolean;
      /**
       * 是否显示视口矩形
       */
      showRectangle?: boolean;
      /**
       * 是否显示打开关闭的按钮
       */
      showButton?: boolean;
      /**
       * 默认是否展开
       */
      isOpen?: boolean;
      /**
       * 缩略图要显示的地图自定义样式
       */
      mapStyle?: string;
      /**
       * 缩略图要显示的图层类型，默认为普通矢量地图
       */
      layers?: L[];
      /**
       * 缩略图的宽度
       */
      width?: string;
      /**
       * 缩略图的高度
       */
      height?: string;
      /**
       * 缩略图距离地图右下角的像素距离
       */
      offset?: [number, number];
      /**
       * 缩略图的边框样式
       */
      borderStyle?: string;
      /**
       * 边框的颜色
       */
      borderColor?: string;
      /**
       * 缩略图的圆角
       */
      borderRadius?: string;
      /**
       * 缩略图的边框宽度
       */
      borderWidth?: string;
      /**
       * 箭头按钮的像素尺寸
       */
      buttonSize?: string;
    }
  }

  /**
   * 地图鹰眼插件
   */
  class HawkEye<L extends TileLayer = TileLayer> extends EventEmitter {
    constructor(options?: HawkEye.Options<L>);

    /**
     * 显示鹰眼控件
     */
    show(): void;

    /**
     * 隐藏鹰眼控件
     */
    hide(): void;

    /**
     * 恢复鹰眼控件的正常大小
     */
    open(): void;

    /***
     * 最小化鹰眼控件
     */
    close(): void;
  }
}
