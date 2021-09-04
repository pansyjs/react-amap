declare namespace Loca {
  namespace PolygonLayer {

    interface Options extends Layer.Options {
      /**
       * 剔除背面/前面的面（选择剔除将会提升性能）
       */
      cullface?: Loca.Cullface;

      /**
       * 面是否接受光照，光照信息在 loca 对象中配置
       * @default true
       */
      acceptLight?: boolean;

      /**
       * 立体网格的粗糙度，值越高，说明表面越粗糙。
       * @default 30
       */
      shininess?: number;

      /**
       * 当面有厚度的时候，有没有侧面和底面
       * @default true
       */
      hasSide?: boolean;

      /**
       * 是否开启深度检测，开启后可能会影响zIndex
       * @default true
       */
      depth?: boolean;
    }

    interface Style {
      /**
       * 面的顶面颜色
       */
      topColor?: string;

      /**
       * 面的侧面颜色
       */
      sideColor?: string;

      /**
       * 海拔高度，也就是面的底面的高度。单位：米。支持动画过渡效果。
       * @default 0
       */
      altitude?: number;

      /**
       * 面的厚度。单位：米。支持动画过渡效果。
       */
      height?: number;

      /**
       * 带有高度的时候，侧面的贴图纹理，目前仅支持侧面。
       */
      texture?: any;

      /**
       * 一个纹理图片覆盖的大小，[宽度, 高度]，单位是米，默认是宽 20 米，高 3 米贴一张纹理，会重复贴图。
       */
      textureSize?: [number, number];
    }
  }

  class PolygonLayer extends Layer {
    constructor(opts: PolygonLayer.Options);

    /**
     * 更新图层样式，如果有的字段被缺省，那么它的值将会被重置为默认值。
     * @param style
     */
    setStyle(style: PolygonLayer.Style): void;
  }
}
