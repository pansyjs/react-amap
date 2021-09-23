declare namespace Loca {
  namespace LinkLayer {
    interface Options extends Layer.Options {}

    interface Style {
      /**
       * 链接线颜色。
       * 类型为Array时，可设置颜色渐变，color[0]为起始色，color[color.lenth-1]为终止色，中间为过渡色；
       * 类型为Function时，返回每根线的颜色。参数为(index,item)，item为一个对象{link,distance}，link为该条线的初始信息。返回结果为Array(渐变)。
       */
      lineColors?: any[];

      /**
       * 高度，单位为米，代表弧顶的最高高度。
       * 类型为Function时，返回每根线的高度。参数为(index,item)，item中有distance属性，代表两点间的距离（米），可以用该属性处理高度。
       */
      height?: number;

      /**
       * 平滑步数，代表弧线的分隔段数，越大平滑度越好。
       * @default 100
       */
      altitude?: number;
    }
  }

  class LinkLayer extends Layer {
    constructor(opts: LinkLayer.Options);

    /**
     * 更新图层样式，如果有的字段被缺省，那么它的值将会被重置为默认值。
     * @param style
     */
    setStyle(style: LinkLayer.Style): void;
  }
}
