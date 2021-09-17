/// <reference path="./loca/index.d.ts" />
/// <reference path="./map/index.d.ts" />
/// <reference path="./map-ui/index.d.ts" />

interface Window {
  AMap: typeof AMap;
  AMapUI: typeof AMapUI;
  Loca: typeof Loca;
  __amap_init_callback?: (error?: Error) => void;
}
