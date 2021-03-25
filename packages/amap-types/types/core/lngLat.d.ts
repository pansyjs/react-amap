declare namespace AMap {
  /**
   * 经纬度坐标，确定地图上的一个点。
   */
  class LngLat {
    /**
     * 构造一个地理坐标对象
     * @param lng 经度
     * @param lat 纬度
     * @param noAutofix 是否自动修正
     */
    constructor(lng: number, lat: number, noAutofix?: boolean);
    /**
     * 移动当前经纬度坐标得到新的坐标，单位为米
     * @param w 移动经度，向右为正值
     * @param s 移动维度，向上为正值
     */
    offset(w: number, s: number): LngLat;
    /**
     * 当前经纬度和传入经纬度或者经纬度数组连线之间的地面距离，单位为米
     * @param lnglat 对比目标
     */
    distance(lnglat: LngLat | LngLat[]): number;
    /**
     * 获取经度值
     * @version: 1.2
     */
    getLng(): number;
    /**
     * 获取纬度值
     * @version: 1.2
     */
    getLat(): number;
    /**
     * 判断当前坐标对象与传入坐标对象是否相等
     * @param lnglat 判断目标
     */
    equals(lnglat: LngLat): boolean;
    /**
     * 以字符串的形式返回
     */
    toString(): string;
  }
}
