/// <reference path="./GroupStyleRender.d.ts" />

declare namespace AMap {
  namespace AMapUI {
    namespace PointSimplifier {
      namespace Render {
        namespace Canvas {
          type PointStyleContentS = 'rect' | 'circle' | 'none';

          interface Bounds {
            x: number,
            y: number,
            width: number,
            height: number
          }

          interface PointSize {
            width: number;
            height: number;
          }

          /**
           * @param context  Canvas的2d Context对象
           * @param x  x 绘制区域左上角横坐标（相对于map容器）
           * @param y  y 绘制区域左上角纵坐标（相对于map容器）
           * @param width  绘制区域的宽度
           * @param height  绘制区域的高度
           */
          type PointStyleContentF = (
            context: CanvasRenderingContext2D,
            x: number,
            y: number,
            width: number,
            height: number
          ) => void;

          type GetAreaScore = (
            minScore: number,
            maxScore: number,
            bounds: Bounds,
            descendantsNum: number,
            pointSize: PointSize,
          ) => number;

          type GetAreaSizeForTopSelect = (
            zoom: number,
            pointSize: {
              width:number,
              height:number
            }
          ) => number;

          type GetNumForTopSelect = (
            zoom: number,
            bounds: Bounds,
            descendantsNum: number,
            pointSize: PointSize,
          ) => number;

          interface PointStyle {
            content?: PointStyleContentS | PointStyleContentF | any;
            /**
             * 绘制区域相对于定位点的偏移，可以使用绝对数值，也可以使用百分比['-50%', '-100%']
             */
            offset?: [number, number] | [string, string];
            /**
             * 绘制区域矩形的宽度
             */
            width?: number;
            /**
             * 绘制区域矩形的高度
             */
            height?: number;
            /**
             * 填充色
             */
            fillStyle?: string;
            /**
             * 描边宽度
             */
            lineWidth?: number;
            /**
             * 描边色
             */
            strokeStyle?: string;
          }

          interface TopNAreaStyle extends PointStyle {
            /**
             * 标识不透明度的范围（[min, max]）
             */
            autoGlobalAlphaAlpha?: [number, number] | false;
          }

          interface Options {
            /**
             * 是否支持事件
             * @default true
             */
            eventSupport?: boolean;
            /**
             * 是否绘制四叉树
             * @default false
             */
            drawQuadTree?: boolean;
            /**
             * 是否绘制位置点，通常在开发调试阶段开启，辅助设定点的绘制区域的偏移
             * @default false
             */
            drawPositionPoint?: boolean;
            /**
             * 是否绘制 Shadow Point
             * @default false
             */
            drawShadowPoint?: boolean;
            /**
             * 点的样式
             */
            pointStyle?: PointStyle;
            /**
             * 点的”硬核空间“的样式
             */
            pointHardcoreStyle?: PointStyle;
            /**
             * 定位点的样式 drawPositionPoint 开启时有效
             */
            pointPositionStyle?: PointStyle;
            /**
             * 鼠标Hover时绘制的覆盖点的样式
             */
            pointHoverStyle?: PointStyle;
            /**
             * Shadow Point（空间被挤占的点）的样式
             */
            shadowPointStyle?: PointStyle;
            /**
             * TopN区域的样式
             * 1. width、height无效，由四叉树节点自身决定
             * 2. content为circle时，circle的直径为width和height中的较小值
             */
            topNAreaStyle?: TopNAreaStyle;
            /**
             * 根据密度计算TopN区域的分数，范围为1-10，就近取整。
             */
            getAreaScore?: GetAreaScore;
            /**
             * 四叉树的样式
             */
            quadTreeStyle?: {
              fillStyle?: PointStyle['fillStyle'];
              lineWidth?: PointStyle['lineWidth'];
              strokeStyle?: PointStyle['strokeStyle'];
            };
            hoverTitleStyle?: {
              /**
               * title的位置，left 或者 top
               */
              position?: string;
              /**
               * title所用的dom节点上的classNames，多个用空格分开
               */
              classNames?: string;
              /**
               * title的dom节点相对于定位点的偏移
               */
              offset?: [number, number];
            };
            /**
             * 返回一个面积阈值，当四叉树的节点区域小于该阈值时，会进行TopN选取。
             */
            getAreaSizeForTopSelect?: GetAreaSizeForTopSelect;
            /**
             * 返回某个区域内按优先级
             */
            getNumForTopSelect?: GetNumForTopSelect;
          }
        }

        class Canvas {
          constructor(opts: Canvas.Options);

          GroupStyleRender: Canvas.GroupStyleRender;

          /**
           * 用于创建图片内容的content
           * @param url
           * @param onload
           * @param onerror
           */
          getImageContent(url: string, onload?: () => void, onerror?: (e: Error) => void): void;
        }
      }

      class Render {
        constructor();

        Canvas: Render.Canvas;
      }
    }
  }
}
