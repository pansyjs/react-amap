<h1 align="center" style="line-height: 50px; height: 50px">
  <img height="24" src="https://cdn.jsdelivr.net/gh/wangxingkang/pictures@latest/imgs/amap-logo.svg" />
  <span style="padding-left: 8px">React AMap<span>
</h1>

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
  <a href="https://packagephobia.com/result?p=@pansy/react-amap">
    <img src="https://packagephobia.com/badge?p=@pansy/react-amap" alt="npm version">
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
- 💻 使用 TypeScript 编写，提供完善的类型定义，包含高德地图 JS SDK 声明。
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
import { Map } from 'react-amap';

ReactDOM.render(
  <Map mapKey={YOUR_AMAP_KEY} version={VERSION} />,
  document.querySelector('#app')
)
```

## 🎉 组件列表

### 地图

|名称|说明|
|--|--|
|APILoader|JS API加载|
|Map|地图组件|

### 图层

|名称|说明|
|--|--|
|Heatmap|热力图|
|Satellite|卫星图|
|Traffic|实时交通图层|

### 点标记

|名称|说明|
|--|--|
|ElasticMarker|灵活点标记|
|Marker|点标记|
|MarkerCluster|点聚合|

### 信息窗体

|名称|说明|
|--|--|
|InfoWindow|信息窗体|

### 右键菜单

|名称|说明|
|--|--|
|ContextMenu|右键菜单|

### 矢量图形

|名称|说明|
|--|--|
|BezierCurve|贝塞尔曲线|
|Circle|圆形|
|CircleMarker|圆点标记|
|Ellipse|椭圆|
|Polygon|多边形|
|Polyline|折线|
|Rectangle|矩形|

### 工具

|名称|说明|
|--|--|
|MouseTool|鼠标工具|
|RangingTool|距离量测|
|BezierCurveEditor|贝瑟尔曲线编辑|
|CircleEditor|圆形编辑|
|EllipseEditor|椭圆编辑|
|PolyEditor|折线/多边形编辑|
|PolygonEditor|多边形编辑|
|PolylineEditor|折线编辑|
|RectangleEditor|矩形编辑|

### 地图控件

|名称|说明|
|--|--|
|ControlBar||
|HawkEye|地图鹰眼|
|MapType|地图类型切换|
|Scale|比例尺|
|ToolBar|工具条|

### 搜索

|名称|说明|
|--|--|
|AutoComplete|关键字搜索|
|DistrictSearch|行政区查询|

### 地理编码

|名称|说明|
|--|--|
|Geocoder|地理编码与逆地理编码服务|

### AMapUI

|名称|说明|
|--|--|
|PathNavigator|轨迹巡航控制|

## 👥 社区互助

| Github Issue | 钉钉群 | 微信群 |
| --- | --- | --- |
| [issues](https://github.com/pansyjs/react-amap/issues) | <img src="https://cdn.jsdelivr.net/gh/wangxingkang/pictures@latest/imgs/alita-dingding.png" height="60" /> | <img src="https://cdn.jsdelivr.net/gh/wangxingkang/pictures@latest/imgs/alita-wx.png" height="60" /> |
