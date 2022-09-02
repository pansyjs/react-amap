<p align="center">
  <a href="https://ant.design">
    <img width="200" src="https://cdn.jsdelivr.net/gh/wangxingkang/pictures@latest/imgs/amap-logo.svg">
  </a>
</p>

<h1 align="center">React AMap</h1>

<div align="center">
  基于 React 封装的高德地图组件，助你轻松的接入高德地图到 React 项目中。
</div>

<br />
<p align="center">
  <a href="https://github.com/pansyjs/react-amap/network">
    <img src="https://img.shields.io/github/forks/pansyjs/react-amap.svg" alt="Forks">
  </a>
  <a href="https://github.com/pansyjs/react-amap/stargazers">
    <img src="https://img.shields.io/github/stars/pansyjs/react-amap.svg" alt="Stars">
  </a>
  <a href="https://www.npmjs.com/package/@pansy/react-amap">
    <img src="https://img.shields.io/npm/v/@pansy/react-amap.svg" alt="npm version">
  </a>
</p>

本仓库提供了常用的地图组件，如不满足您的需求：

1. 请在[issues](https://github.com/pansyjs/react-amap/issues) 提出需求。
2. 提PR扩展本库的组件。
3. 使用本库提供的自定义组件的能力，自己封装。

**注意**

由于高德API`v1` 和 `v2`兼容性问题，本仓库提供对应的版本

- `v1.x.x` 对应 `amap v1`
- `v2.x.x` 对应 `amap v2` 

## ✨ 特性

- 📦 开箱即用，本组件支持了大部分的常用地图组件
- 🎉 可扩展，支持自定义地图组件
- 💻 使用 TypeScript 编写，提供完善的类型定义，包含高德地图 JS SDK 类型声明
- 💝 无任何第三方依赖

## 🏗 安装

```sh
# npm install
$ npm install @pansy/react-amap --save

# yarn install
$ yarn add @pansy/react-amap
```

## 🔨 使用

```html
<div id="app"></div>
```

```css
#app {
  width: 600px;
  height: 400px;
}
```

```tsx | pure
import React from 'react';
import ReactDOM from 'react-dom';
import { Map } from '@pansy/react-amap';

ReactDOM.render(
  <Map mapKey={YOUR_AMAP_KEY} />,
  document.querySelector('#app')
)
```

## 🎉 组件列表

### 地图

|名称|说明|
|--|--|
|[APILoader](https://react-amap-pansyjs.vercel.app/components/map/api-loader)|JS API加载|
|[Map](https://react-amap-pansyjs.vercel.app/components/map/map)|地图组件|

### 图层

|名称|说明|
|--|--|
|[Heatmap](https://react-amap-pansyjs.vercel.app/components/layers/heatmap)|热力图|
|[Satellite](https://react-amap-pansyjs.vercel.app/components/layers/satellite)|卫星图|
|[Traffic](https://react-amap-pansyjs.vercel.app/components/layers/traffic)|实时交通图层|

### 点标记

|名称|说明|
|--|--|
|[ElasticMarker](https://react-amap-pansyjs.vercel.app/components/point-mark/elastic-marker)|灵活点标记|
|[Marker](https://react-amap-pansyjs.vercel.app/components/point-mark/marker)|点标记|
|[MarkerCluster](https://react-amap-pansyjs.vercel.app/components/point-mark/marker-cluster)|点聚合|
|[MassMarks](https://react-amap-pansyjs.vercel.app/components/point-mark/mass-marks)|海量点类|

### 信息窗体

|名称|说明|
|--|--|
|[InfoWindow](https://react-amap-pansyjs.vercel.app/components/info-window/info-window)|信息窗体|

### 右键菜单

|名称|说明|
|--|--|
|[ContextMenu](https://react-amap-pansyjs.vercel.app/components/context-menu/context-menu)|右键菜单|

### 矢量图形

|名称|说明|
|--|--|
|[BezierCurve](https://react-amap-pansyjs.vercel.app/components/vector-graphics/bezier-curve)|贝塞尔曲线|
|[Circle](https://react-amap-pansyjs.vercel.app/components/vector-graphics/circle)|圆形|
|[CircleMarker](https://react-amap-pansyjs.vercel.app/components/vector-graphics/circle-marker)|圆点标记|
|[Ellipse](https://react-amap-pansyjs.vercel.app/components/vector-graphics/ellipse)|椭圆|
|[Polygon](https://react-amap-pansyjs.vercel.app/components/vector-graphics/polygon)|多边形|
|[Polyline](https://react-amap-pansyjs.vercel.app/components/vector-graphics/polyline)|折线|
|[Rectangle](https://react-amap-pansyjs.vercel.app/components/vector-graphics/rectangle)|矩形|

### 工具

|名称|说明|
|--|--|
|[MouseTool](https://react-amap-pansyjs.vercel.app/components/tool/mouse-tool)|鼠标工具|
|[RangingTool](https://react-amap-pansyjs.vercel.app/components/tool/ranging-tool)|距离量测|
|[BezierCurveEditor](https://react-amap-pansyjs.vercel.app/components/tool/bezier-curve-editor)|贝瑟尔曲线编辑|
|[CircleEditor](https://react-amap-pansyjs.vercel.app/components/tool/circle-editor)|圆形编辑|
|[EllipseEditor](https://react-amap-pansyjs.vercel.app/components/tool/ellipse-editor)|椭圆编辑|
|[PolyEditor](https://react-amap-pansyjs.vercel.app/components/tool/poly-editor)|折线/多边形编辑|
|[PolygonEditor](https://react-amap-pansyjs.vercel.app/components/tool/polygon-editor)|多边形编辑|
|[PolylineEditor](https://react-amap-pansyjs.vercel.app/components/tool/polyline-editor)|折线编辑|
|[RectangleEditor](https://react-amap-pansyjs.vercel.app/components/tool/rectangle-editor)|矩形编辑|

### 地图控件

|名称|说明|
|--|--|
|[ControlBar](https://react-amap-pansyjs.vercel.app/components/control/control-bar)|3D控制组件|
|[HawkEye](https://react-amap-pansyjs.vercel.app/components/control/hawk-eye)|地图鹰眼|
|[MapType](https://react-amap-pansyjs.vercel.app/components/control/map-type)|地图类型切换|
|[Scale](https://react-amap-pansyjs.vercel.app/components/control/scale)|比例尺|
|[ToolBar](https://react-amap-pansyjs.vercel.app/components/control/tool-bar)|工具条|

### 搜索

|名称|说明|
|--|--|
|[AutoComplete](https://react-amap-pansyjs.vercel.app/components/search/auto-complete)|关键字搜索|
|[DistrictSearch](https://react-amap-pansyjs.vercel.app/components/search/district-search)|行政区查询|

### 地理编码

|名称|说明|
|--|--|
|[Geocoder](https://react-amap-pansyjs.vercel.app/components/geocoder/geocoder)|地理编码与逆地理编码服务|

### AMapUI

|名称|说明|
|--|--|
|[PathNavigator](https://react-amap-pansyjs.vercel.app/components/amap-ui/path-simplifier)|轨迹巡航控制|
|[PointSimplifier](https://react-amap-pansyjs.vercel.app/components/amap-ui/point-simplifier)|海量点展示|

## 👥 社区互助

| Github Issue | 钉钉群 | 微信群 |
| --- | --- | --- |
| [issues](https://github.com/pansyjs/react-amap/issues) | <img src="https://cdn.jsdelivr.net/gh/wangxingkang/pictures@latest/imgs/alita-dingding.png" height="60" /> | <img src="https://cdn.jsdelivr.net/gh/wangxingkang/pictures@latest/imgs/alita-wx.png" height="60" /> |
