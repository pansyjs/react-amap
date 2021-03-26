/// <reference path="./event.d.ts" />

declare namespace AMap {
  type SizeValue = Size | [number, number];
  type Lang = 'zh_cn' | 'en' | 'zh_en';
  type Crs = 'EPSG3857' | 'EPSG3395' | 'EPSG4326';
  type LocationValue = LngLat | [number, number];

  type StrokeLineJoin = 'miter' | 'round' | 'bevel';
  type StrokeLineCap = 'butt' | 'round' | 'square';
  type StrokeStyle = 'dashed' | 'solid';

  type AnimationName = 'AMAP_ANIMATION_NONE' | 'AMAP_ANIMATION_DROP' | 'AMAP_ANIMATION_BOUNCE';

  type Event<N extends string = string, V = undefined> = { type: N } &
    (V extends HTMLElement ? { value: V }
      : V extends object ? V
      : V extends undefined ? {}
      : { value: V });

  type Omit<T, E extends keyof T> = {
    [K in Exclude<keyof T, E>]: T[K]
  };

  type OptionalKey<T> = { [K in keyof T]-?: undefined extends T[K] ? K : never }[keyof T];

  type Merge<O, T> =
    { [K in Exclude<keyof O, keyof T | OptionalKey<O>>]-?: O[K]; } &
    { [K in Extract<Exclude<keyof O, keyof T>, OptionalKey<O>>]?: O[K]; } &
    T;

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
