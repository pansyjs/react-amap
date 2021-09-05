declare namespace AMap {
  /**
   * 像素坐标，确定地图上的一个像素点。
   */
  class Pixel {
    /**
     * 像素坐标，确定地图上的一个像素点
     * @param x 横轴坐标
     * @param y 纵轴坐标
     * @param round 是否四舍五入
     */
    constructor(x: number, y: number, round?: boolean);

    /**
     * 获取像素横坐标
     */
    getX(): number;

    /**
     * 获取像素纵坐标
     */
    getY(): number;

    /**
     * 当前像素坐标与传入像素坐标是否相等
     * @param point 目标像素坐标
     */
    equals(point: Pixel): boolean;

    /**
     * 以字符串形式返回像素坐标对象
     */
    toString(): string;
  }
}
