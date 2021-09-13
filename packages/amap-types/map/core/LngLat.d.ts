declare namespace AMap {
  /**
   * 经纬度坐标，确定地图上的一个点。
   * 目前高德地图使用的是 GCJ-02 坐标，如果你采集的是 WGS84 坐标，请先进行坐标转换
   */
  class LngLat {
    /**
     * 构造一个地理坐标对象
     * @param lng 经度
     * @param lat 纬度
     * @param noAutofix 是否自动将经度值修正到 [-180,180] 区间内，缺省为false;
     */
    constructor(lng: number, lat: number, noAutofix?: boolean);

    /** 纬度 */
    lat: number;

    /** 经度 */
    lng: number;


    pos: [number, number];

    /**
     * 设置经度值
     */
    setLng(lng: number): void;

    /**
     * 获取经度值
     */
    getLng(): number;

    /**
     * 设置纬度值
     * @param lng
     */
    setLat(lat: number): void;

    /**
     * 获取纬度值
     */
    getLat(): number;

    /**
     * 判断当前坐标对象与传入坐标对象是否相等
     * @param lnglat 判断目标
     */
    equals(lnglat: LngLat): boolean;

    /**
     * 与另外一个经纬度相加
     * @param lnglat 另外一个经纬度坐标
     * @param noWrap 是否将相加的结果经度值修正到 [-180,180] 区间内
     */
    add(lnglat: LngLat, noWrap: boolean): LngLat;

    /**
     * 与另外一个经纬度相减
     * @param lnglat 另外一个经纬度坐标
     * @param noWrap 是否将相加的结果经度值修正到 [-180,180] 区间内
     */
    subtract(lnglat: LngLat, noWrap: boolean): LngLat;

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
     * 以字符串的形式返回
     */
    toString(): string;

    /**
     * 以数组的形式返回
     */
    toArray(): [number, number];
  }
}
