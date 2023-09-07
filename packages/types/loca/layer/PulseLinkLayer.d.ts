declare namespace Loca {
  namespace PulseLinkLayer {
    interface Options extends Layer.Options {
      /**
       * 图层中的要素是否具有前后遮盖关系
       * @default true
       */
      depth?: boolean;
    }

    interface Style {
      unit: string;
      /**
       * 链接线颜色数组。
       * 类型为String时代表单根线的颜色，支持16进制，rgb，rgba和"red"，"blue"等color keywords；
       * 类型为Array时，可设置颜色渐变，color[0]为起始色，color[color.lenth-1]为终止色，中间为过渡色；
       * 类型为Function时，返回每根线的颜色。参数为(index,item)，item为一个对象{link,distance}，link为该条线的初始信息。返回结果必须是颜色数组 Array(渐变)。
       */
      lineColors?: string | string[] | ((index: number, item: any) => string[]);

      /**
       * 高度，单位为米，代表弧顶的高度。
       * 类型为Function时，返回每根线的高度。参数为(index,item)，item中有distance属性，代表两点间的距离（米），可以用该属性处理高度。
       */
      height?: number | ((index: number, item: any) => number);

      /**
       * 平滑步数，代表弧线的分隔段数，越大平滑度越好，但更消耗性能，默认为50。
       */
      smoothSteps?: number;

      speed: (index: number, item: any) => number;

      flowLength: number;

      maxHeightScale: number;

      headColor: string;

      trailColor: string;

      /**
       * 连接线的头尾宽度设置：[起点宽度，终点宽度];
       */
      lineWidth?: number | (() => [number, number]);

      /**
       * 连接线的虚线配置信息：[实线长度, 虚线长度, 实线长度, 虚线长度];
       */
      dash?: number[];
    }
  }

  class PulseLinkLayer extends Layer {
    constructor(opts: PulseLinkLayer.Options);

    /**
     * 更新图层样式，如果有的字段被缺省，那么它的值将会被重置为默认值。
     * @param style
     */
    setStyle(style: PulseLinkLayer.Style): void;
  }
}
