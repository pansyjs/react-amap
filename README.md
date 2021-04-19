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

1、请在[issues](https://github.com/pansyjs/react-amap/issues) 提出需求。
2、提PR扩展本库的组件。
3、使用本库提供的自定义组件的能力，自己封装。

本库主要参考 饿了么[react-amap](https://github.com/ElemeFE/react-amap)，API基本一致。

与饿了么[react-amap]区别如下:

- `Map`组件属性`amapkey`修改为`mapKey`
- 采用`context`共享map实例，其他组件没有必要一定是`Map`组件的子组件
- Map组件不支持加载插件，由项目封装的子组件代替。
- 提供完善的高德API的类型定义，丝滑般的开发体验

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

## 组件列表

|名称|说明|
|--|--|
|Map|地图组件|
|BezierCurve|贝塞尔曲线|
|BezierCurveEditor|编辑贝塞尔曲线，必须作为BezierCurve的子组件使用|
|Circle|圆形|
|CircleEditor|编辑圆形，必须作为Circle的子组件使用|
|CircleMarker|圆点标记|
|ContextMenu|地图右键菜单|
|ControlBar|组合了旋转、倾斜、复位、缩放在内的地图控件, 3D地图使用|
|Ellipse|椭圆|
|EllipseEditor|编辑椭圆，必须作为Ellipse的子组件使用|
|Heatmap|热力图组件|
|InfoWindow|信息窗体|
|MapType|地图类型切换插件，用来切换固定的几个常用图层|
|Marker|单个坐标点|
|Markers|海量坐标点|
|MouseTool|鼠标工具|
|OverView|地图鹰眼|
|Polygon|在地图上显示多边形|
|Polyline|在地图上显示折线|
|PolyEditor|多边形和折线的编辑组件，必须作为其子组件使用|
|Rectangle|在地图上显示矩形|
|RectangleEditor|编辑矩形，必须作为Rectangle的子组件使用|
|Scale|比例尺|
|ToolBar|工具条|
