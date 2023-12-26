declare namespace AMap {
  namespace AMapUI {
    namespace PathNavigator {
      interface Options {
        /**
         * 是否循环回放（到达终点后，返回起点重新开始）
         * @default fasle
         */
        loop?: boolean;

        /**
         * 巡航速度，单位 千米/小时
         * @default 1000
         */
        speed?: number;

        /**
         * 轨迹巡航器样式
         */
        pathNavigatorStyle?: Style;

        /**
         * 动画触发的间隔，单位毫秒；
         * @default 16
         */
        animInterval?: number;

        /**
         * 该值默认200，单位毫秒。该值会影响巡航器行进中的方向指向，规则如下：
         *  1. 等于0，方向指向下一个节点
         *  2. 大于0，方向指向按当前速度行进设定毫秒后的节点位置。比如A点向C点行进，但中间的路径非常曲折，如果仅仅指向下一个节点（B点），巡航器的方向就会左右抖动；相对而言，指向200毫秒后的目标位置C点，方向就会稳定的多。
         */
        dirToPosInMillsecs?: number;

        /**
         * 巡航路径的节点索引范围，默认为[0, 路径长度-1]，即整条路径
         */
        range?: number[];
      }

      interface Style {
        /**
         * 巡航器形状宽度
         */
        width?: number;

        /**
         * 巡航器形状高度
         */
        height?: number;

        /**
         * 初始旋转角度，默认0
         */
        initRotateDegree?: number;

        /**
         * 是否根据路径方向进行角度旋转（相对于正上方向）
         * @default true
         */
        autoRotate?: boolean;

        /**
         * 巡航器的内容
         */
        content?: string | ContentFun;

        /**
         * 填充色
         */
        fillStyle?: string;

        /**
         * 描边色
         */
        strokeStyle?: string;

        /**
         * 描边宽度
         */
        lineWidth?: number;

        /**
         * 巡航器经过的路径的样式
         */
        pathLinePassedStyle?: any;
      }

      type ContentFun = (ctx: any, x: number, y: number, width: number, height: number) => void;
    }

    class PathNavigator {
      constructor(opts: PathNavigator.Options);

      /**
       * 开始路径巡航。 pointIndex用于指定巡航的起始节点索引，默认为节点索引范围（range）的最小值
       * @param pointIndex
       */
      start(pointIndex?: number): void;

      /**
       * 暂停巡航
       */
      pause(): void;

      /**
       * 恢复巡航
       */
      resume(): void;

      /**
       * 停止巡航，同时清除已经过路径（这一点不同于pause）
       */
      stop(): void;

      /**
       * 销毁巡航器。巡航作为动画过程是非常耗费性能的，因此不再需要时应及时销毁
       */
      destroy(): void;

      /**
       * 返回当前所处的索引位置
       */
      getCursor(): { idx: number, tail: number };

      /**
       * 返回巡航状态，有三种：
       * stop：停止状态，start之前或者stop之后处于该状态
       * moving：巡航状态，start或者resume之后处于该状态
       * pause：暂停状态，pause之后处于该状态
       */
      getNaviStatus(): string;

      /**
       * 返回巡航路径的轨迹索引
       */
      getPathIndex(): number;

      /**
       * 返回当前位置的经纬度
       */
      getPosition(): AMap.LngLat;

      /**
       * 返回当前设定的速度
       */
      getSpeed(): number;

      /**
       * 返回巡航经过的距离(起始节点到当前位置)
       */
      getMovedDistance(): number;

      /**
       * 返回巡航路径的起始节点索引
       */
      getPathStartIdx(): number;

      getStyleOptions(): PathNavigator.Options;

      /**
       * 返回巡航路径的结束节点索引
       */
      getPathEndIdx(): number;

      /**
       * 将巡航器移动指定的距离，单位米
       */
      moveByDistance(distance: number): void;

      /**
       * 将巡航器移动到指定的节点索引位置
       * @param idx
       * @param tail
       */
      moveToPoint(idx: number, tail: number): void;

      /**
       * 设定巡航器的速度
       * @param speed
       */
      setSpeed(speed: number): void;

      /**
       * 设定巡航器的路径节点索引范围
       * @param startIndex
       * @param endIndex
       */
      setRange(startIndex: number, endIndex: number): void;

      /**
       * 监听 eventName 事件，多个事件用空格分隔
       * @param eventName
       * @param handler
       */
      on(eventName: string, handler: Function): void;


      /**
       * 注销 eventName 事件，多个事件用空格分隔
       * @param eventname
       * @param handler
       */
      off(eventname: string, handler: Function): void;

      getOption(key: string): any;

      setOption(key: string, data: any): void;

      isCursorAtPathEnd(): boolean;

      isCursorAtPathStart(): boolean;
    }
  }
}
