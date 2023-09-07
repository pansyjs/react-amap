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

1. 请在 [issues](https://github.com/pansyjs/react-amap/issues) 提出需求。
2. 提 PR 扩展组件。
3. 使用提供的自定义组件的能力，自己封装。

**注意**

由于高德API`v1` 和 `v2`兼容性问题，本仓库提供对应的版本

- `v1.x.x` 对应 `amap v1`
- `v2.x.x` 对应 `amap v2` 

## ✨ 特性

- 📦 开箱即用，封装了大部分常用的地图组件
- 🎉 可扩展，支持自定义地图组件
- 💻 使用 TypeScript 编写，提供完善的类型定义，包含高德地图 JS SDK 类型声明

## 🏗 安装

```sh
# npm install
$ npm install @pansy/react-amap --save

# yarn install
$ yarn add @pansy/react-amap

# pnpm install
$ pnpm i @pansy/react-amap
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
|[APILoader](https://amap.xingkang.wang/components/api-loader)|JS API加载|
|[Map](https://amap.xingkang.wang/components/map)|地图组件|

### 图层

|名称|说明|
|--|--|
|[Heatmap](https://amap.xingkang.wang/components/heatmap)|热力图|
|[Satellite](https://amap.xingkang.wang/components/satellite)|卫星图|
|[Traffic](https://amap.xingkang.wang/components/traffic)|实时交通图层|

### 点标记

|名称|说明|
|--|--|
|[ElasticMarker](https://amap.xingkang.wang/components/elastic-marker)|灵活点标记|
|[Marker](https://amap.xingkang.wang/components/marker)|点标记|
|[MarkerCluster](https://amap.xingkang.wang/components/marker-cluster)|点聚合|
|[MassMarks](https://amap.xingkang.wang/components/mass-marks)|海量点类|

### 信息窗体

|名称|说明|
|--|--|
|[InfoWindow](https://amap.xingkang.wang/components/info-window)|信息窗体|

### 右键菜单

|名称|说明|
|--|--|
|[ContextMenu](https://amap.xingkang.wang/components/context-menu)|右键菜单|

### 矢量图形

|名称|说明|
|--|--|
|[BezierCurve](https://amap.xingkang.wang/components/bezier-curve)|贝塞尔曲线|
|[Circle](https://amap.xingkang.wang/components/circle)|圆形|
|[CircleMarker](https://amap.xingkang.wang/components/circle-marker)|圆点标记|
|[Ellipse](https://amap.xingkang.wang/components/ellipse)|椭圆|
|[Polygon](https://amap.xingkang.wang/components/polygon)|多边形|
|[Polyline](https://amap.xingkang.wang/components/polyline)|折线|
|[Rectangle](https://amap.xingkang.wang/components/rectangle)|矩形|

### 工具

|名称|说明|
|--|--|
|[MouseTool](https://amap.xingkang.wang/components/mouse-tool)|鼠标工具|
|[RangingTool](https://amap.xingkang.wang/components/ranging-tool)|距离量测|
|[BezierCurveEditor](https://amap.xingkang.wang/components/bezier-curve-editor)|贝瑟尔曲线编辑|
|[CircleEditor](https://amap.xingkang.wang/components/circle-editor)|圆形编辑|
|[EllipseEditor](https://amap.xingkang.wang/components/ellipse-editor)|椭圆编辑|
|[PolyEditor](https://amap.xingkang.wang/components/poly-editor)|折线/多边形编辑|
|[PolygonEditor](https://amap.xingkang.wang/components/polygon-editor)|多边形编辑|
|[PolylineEditor](https://amap.xingkang.wang/components/polyline-editor)|折线编辑|
|[RectangleEditor](https://amap.xingkang.wang/components/rectangle-editor)|矩形编辑|

### 地图控件

|名称|说明|
|--|--|
|[ControlBar](https://amap.xingkang.wang/components/control-bar)|3D控制组件|
|[HawkEye](https://amap.xingkang.wang/components/hawk-eye)|地图鹰眼|
|[MapType](https://amap.xingkang.wang/components/map-type)|地图类型切换|
|[Scale](https://amap.xingkang.wang/components/scale)|比例尺|
|[ToolBar](https://amap.xingkang.wang/components/tool-bar)|工具条|

### 搜索

|名称|说明|
|--|--|
|[AutoComplete](https://amap.xingkang.wang/components/auto-complete)|关键字搜索|
|[DistrictSearch](https://amap.xingkang.wang/components/district-search)|行政区查询|

### 地理编码

|名称|说明|
|--|--|
|[Geocoder](https://amap.xingkang.wang/components/geocoder)|地理编码与逆地理编码服务|

### AMapUI

|名称|说明|
|--|--|
|[PathNavigator](https://amap.xingkang.wang/components/path-simplifier)|轨迹巡航控制|
|[PointSimplifier](https://amap.xingkang.wang/components/point-simplifier)|海量点展示|

### Loca

|名称|说明|
|--|--|
|[ScatterLayer](https://amap.xingkang.wang/components/scatter-layer)|动画图层|
|[PulseLinkLayer](https://amap.xingkang.wang/components/pulse-link-layer)|连接飞线图层|

## 👥 社区互助

| Github Issue | 钉钉群 | 微信群 |
| --- | --- | --- |
| [issues](https://github.com/pansyjs/react-amap/issues) | <img src="https://cdn.jsdelivr.net/gh/wangxingkang/pictures@latest/imgs/alita-dingding.png" height="60" /> | <img src="https://cdn.jsdelivr.net/gh/wangxingkang/pictures@latest/imgs/alita-wx.png" height="60" /> |
