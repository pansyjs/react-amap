declare namespace AMap {
  /**
   * GeometryUtil为一组空间数据计算的函数库，v1.4.2新增。支持点线面的空间关系计算、长度、面积计算等等，
   */
  namespace GeometryUtil {

    /**
     * 计算两个经纬度点之间的实际距离。单位：米
     * @param p1
     * @param p2
     */
    function distance(p1: AMap.LngLat, p2: AMap.LngLat): number;

    /**
     * 计算一个经纬度路径围成区域的实际面积。单位：平米
     * @param ring
     */
    function ringArea(ring: AMap.LngLat[]): number;

    /**
     * 计算一个带有绝对海拔的经纬度高度路径围成区域的实际面积。单位：平米
     * @param averageAltitude
     */
    function ringAreaByAltitude(averageAltitude: number): number;

    /**
     * 判断一个经纬度路径是否为顺时针
     * @param ring
     */
    function isClockwise(ring: AMap.LngLat[]): boolean;

    /**
     * 判断一个经纬度路径面类型
     * @param ring
     */
    function typePolygon(ring: AMap.LngLat[]): boolean;

    /**
     * 将一个路径变为顺时针
     * @param ring
     */
    function makesureClockwise(ring: AMap.LngLat[]): [number, number][];

    /**
     * 将一个路径变为逆时针
     * @param ring
     */
    function makesureAntiClockwise(ring: AMap.LngLat[]): [number, number][];

    /**
     * 计算一个经纬度路径的实际长度。单位：米
     * @param ring
     */
    function distanceOfLine(ring: AMap.LngLat[]): number;

    /**
     * 计算一个经纬度带绝对海报高度路径的实际长度。单位：米
     * @param ring
     */
    function distanceOfLineByAltitude(ring: AMap.LngLat[]): number;

    /**
     * 计算一个经纬度带绝对海报高度两点空间距离的实际长度。单位：米
     * @param ring
     */
    function distanceLineByAltitude(pt1: number[], pt2: number[]): number;

    /**
     * 计算两个经纬度面的交叉区域。只适用于凸多边形。单位：平米
     * @param ring1
     * @param ring2
     */
    function ringRingClip(ring1: AMap.LngLat[], ring2: AMap.LngLat[]): number;

    /**
     * 判断两个线段是否相交
     * @param p1
     * @param p2
     * @param p3
     * @param p4
     */
    function doesSegmentsIntersect(p1: AMap.LngLat, p2: AMap.LngLat, p3: AMap.LngLat, p4: AMap.LngLat): boolean;

    /**
     * 判断线段和一个路径是否相交
     * @param p1
     * @param p2
     * @param line1
     */
    function doesSegmentLineIntersect(p1: AMap.LngLat, p2: AMap.LngLat, line1: AMap.LngLat[]): boolean;

    /**
     * 判断线段和一个环是否相交
     * @param p1
     * @param p2
     * @param ring1
     */
    function doesSegmentRingIntersect(p1: AMap.LngLat, p2: AMap.LngLat, ring1: AMap.LngLat[]): boolean;

    /**
     * 判断线段和多个环是否相交
     * @param p1
     * @param p2
     */
    function doesSegmentPolygonIntersect(p1: AMap.LngLat, p2: AMap.LngLat): boolean;

    /**
     * 判断P是否在line上
     * @param p
     * @param line
     * @param tolerance 误差范围
     */
    function isPointOnLine(p: AMap.LngLat, line: AMap.LngLat[], tolerance: number): boolean;

    /**
     * 判断P是否在ring的边上，tolerance为误差范围
     * @param p
     * @param ring
     * @param tolerance 误差范围
     */
    function isPointOnRing(p: AMap.LngLat, ring: AMap.LngLat[], tolerance: number): boolean;

    /**
     * 判断经纬度路径和经纬度面是否交叉
     * @param line
     * @param ring
     */
    function doesLineRingIntersect(line: AMap.LngLat[], ring: AMap.LngLat[]): boolean;

    /**
     * 判断两个经纬度面是否交叉
     * @param ring1
     * @param ring2
     */
    function doesRingRingIntersect(ring1: AMap.LngLat[], ring2: AMap.LngLat[]): boolean;

    /**
     * 判断两个经纬度路径是否相交
     */
    function doesLineLineIntersect(line1: AMap.LngLat[], line2: AMap.LngLat[]): boolean;

    /**
     * 计算P2、P3上距离P1最近的点
     * @param p1
     * @param p2
     * @param p3
     */
    function closestOnSegment(p1: AMap.LngLat, p2: AMap.LngLat, p3: AMap.LngLat): number;

    /**
     * 计算line上距离P最近的点
     * @param p
     * @param line
     */
    function closestOnLine(p: AMap.LngLat, line: AMap.LngLat[]): number;

    /**
     * 判断P是否在多个ring的边上，tolerance为误差范围
     * @param p
     * @param line
     */
    function isPointOnPolygon(p: AMap.LngLat, tolerance: number): boolean;

    /**
     * 判断点是否在环内
     * @param p
     * @param ring
     */
    function pointInRing(p: AMap.LngLat, ring: AMap.LngLat[]): boolean;

    /**
     * 判断点是否在环内
     * @param p
     * @param ring
     */
    function isPointInRing(p: AMap.LngLat, ring: AMap.LngLat[]): boolean;

    /**
     * 判断环是否在另一个环内
     * @param ring1
     * @param ring2
     */
    function isRingInRing(ring1: AMap.LngLat[], ring2: AMap.LngLat[]): boolean;

    /**
     * 计算P2、P3到P1的距离。单位：米
     * @param p1
     * @param p2
     * @param p3
     */
    function distanceToSegment(p1: AMap.LngLat, p2: AMap.LngLat, p3: AMap.LngLat,): number;

    /**
     * 计算P到line的距离。单位：米
     * @param p
     * @param line
     */
    function distanceToLine(p: AMap.LngLat, line: AMap.LngLat[]): number;
  }
}
