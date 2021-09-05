
declare namespace AMap {
  type Event<N extends string = string, V = undefined> = { type: N } &
    (V extends HTMLElement ? { value: V }
      : V extends object ? V
      : V extends undefined ? {}
      : { value: V });

  type MapsEvent<N extends string, I> = Event<N, {
    /**
     * 经纬度坐标
     */
    lnglat: LngLat;
    /**
     * 像素坐标
     */
    pixel: Pixel;
    /**
     * 触发对象
     */
    target: I
  }>;
}
