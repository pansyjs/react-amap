/// <reference path="./map/index.d.ts" />
/// <reference path="./loca/index.d.ts" />

interface Window {
  AMap: typeof AMap;
  AMapUI: any;
  Loca: typeof Loca;
  __amap_init_callback?: (error?: Error) => void;
}
