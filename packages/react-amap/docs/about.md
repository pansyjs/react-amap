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
|BezierCurve|在地图上显示曲线|
|Circle|在地图上显示圆形|
|CircleMarker|在地图上显示圆点标记|
|ContextMenu|地图右键菜单|
|ControlBar|组合了旋转、倾斜、复位、缩放在内的地图控件|
|Ellipse|在地图上显示椭圆|
|InfoWindow|在地图上显示信息窗体|
|Marker|在地图上显示单个坐标点|
|Markers|在地图上显示大量标记|
|Polygon|在地图上显示多边形|
|Polyline|在地图上显示折线|
|Rectangle|在地图上显示矩形|

### 术语说明

#### 静态属性

- 只能在创建实例时定义的属性

#### 动态属性

- 创建实例以及实例创建成功后仍然可以操作改变的属性


### 类型扩展

`react-amap` 为了方便开发者使用，对部分参数进行了扩展

#### 经纬度

高德很多API的经纬度参数是需要传递[AMap.LngLat](https://lbs.amap.com/api/javascript-api/reference/core#LngLat)，通过内部转换支持常见的经纬度数据格式:

- `[lng, lat]`
- `{ lng: number; lat: number; }`
- `{ longitude: number; latitude: number; }`

类型定义可通过 `ReactAMap.Position` 获取


