/// <reference path="./types/index.d.ts" />

interface Window {
  AMap: typeof AMap;
  AMapUI: any;
  Loca: any;
  __amap_init_callback?: (error?: Error) => void;
}
