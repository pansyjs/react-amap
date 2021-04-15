---
title: 基本介绍
nav:
  title: 组件
  path: /components
group:
  path: /about
  title: 介绍
  order: 1
---

# 基本介绍

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

## 术语说明

### 静态属性

- 只能在创建实例时定义的属性

### 动态属性

- 创建实例以及实例创建成功后仍然可以操作改变的属性


## 类型扩展

`@pansy/react-amap` 为了方便开发者使用，对部分参数进行了扩展

### 经纬度

高德很多API的经纬度参数是需要传递[AMap.LngLat](https://lbs.amap.com/api/javascript-api/reference/core#LngLat)，`@pansy/react-amap`通过内部转换支持常见的经纬度数据格式:

- `[lng, lat]`
- `{ lng: number; lat: number; }`
- `{ longitude: number; latitude: number; }`

类型定义可通过 `ReactAMap.Position` 获取
