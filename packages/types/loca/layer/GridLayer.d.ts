declare namespace Loca {
  namespace GridLayer {
    interface Options {
      /**
       * 剔除背面/前面的面（选择剔除将会提升性能）
       * @default 'back'
       */
      cullface?: Loca.Cullface;

      /**
       * 立体网格是否接受光照，光照信息在 loca 对象中配置
       * @default true
       */
      acceptLight?: boolean;

      /**
       * 是否有深度检测能力，当图层元素没有高度的时候，并且需要 zIndex 生效，那么请关闭深度检测。
       * @default true
       */
      depth?: boolean;

      /**
       * 立体网格的粗糙度，值越高，说明表面越粗糙。
       * @default 30
       */
      shininess?: number;

      /**
       * 当立体网格有厚度的时候，有没有侧面和底面
       * @default true
       */
      hasSide?: boolean;
    }

    interface Style {
      /**
       * 顶面颜色
       * @default '#fff'
       */
      topColor?: string;

      /**
       * 侧面颜色
       * @default '#fff'
       */
      sideColor?: string;

      /**
       * 海拔高度，也就是面的底面的高度。单位：米。支持动画过渡效果。
       * @default 0
       */
      altitude?: number;

      /**
       * 网格高度，也就是立面的顶面的高度。单位：米。支持动画过渡效果
       * @default 0
       */
      height?: number;

      /**
       * 一个网格的半径大小，只能是一个常量值。单位由 unit 决定。
       */
      radius?: number;

      /**
       * 相邻网格的间隙大小，只能是一个常量值。单位由 unit 决定。
       */
      gap?: number;

      /**
       * 单位，只能是一个常量值。
       */
      unit?: Loca.Unit;
    }
  }

  class GridLayer extends Layer {
    constructor(opts: GridLayer.Options);

    /**
     * 更新图层样式，如果有的字段被缺省，那么它的值将会被重置为默认值。
     * @param style
     */
    setStyle(style: GridLayer.Style): void;
  }
}
