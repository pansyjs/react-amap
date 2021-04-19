---
title: Map 组件
nav:
  title: 组件
  path: /components
order: 1
group:
  path: /map
  title: 地图
  order: 1
---

# Map 地图

Map 组件是其他组件的基础，Map 组件通过`content`共享`map`实例，子组件通过`context`在拥有访问这个属性的能力后，就可以根据高德原生 API 做高德允许你做的一切事情。`@pansy/react-amap` 中的其他组件就是这么做的。所以，你也可以写出满足你业务需求的地图组件。

## 何时使用

-  在需要显示地图的地方使用；

## 代码示例

### 基础用法

<code src="./demo/demo-01.tsx" />

### 插件的使用

<code src="./demo/demo-09.tsx" />

### 事件绑定

<code src="./demo/demo-02.tsx" />

### 动态改变属性

<code src="./demo/demo-03.tsx" />

### 在 Map 下添加自定义 DOM 组件

<code src="./demo/demo-04.tsx" />

### 在 Map 下添加自定义地图组件

<code src="./demo/demo-07.tsx" />

### 3D地图

<code src="./demo/demo-10.tsx" />

### status 属性

<code src="./demo/demo-11.tsx" />

### 地图加载过渡样式

<code src="./demo/demo-08.tsx" />

## API

### 动态属性

| 属性 |说明|类型|默认值|
|-----|----|----|----|
|layers|地图图层数组| `array` | -- |
|zoom|地图显示的缩放级别| `number` | -- |
|zooms|地图显示的缩放级别范围| `[number, number]` | -- |
|center|地图中心点坐标值| `Position` | -- |
|labelzIndex|地图图层数组| `number` | -- |
|lang|地图语言类型| `string` | -- |
|mapStyle|设置地图的显示样式| `string` | -- |
|features|设置地图上显示的元素种类| `array` | -- |
|cursor|地图默认鼠标样式。| `string` | -- |
|pitch|俯仰角度，默认0，[0,83]，2D地图下无效 。| `boolean` | -- |
|mask|为 Map 实例指定掩模的路径，各图层将只显示路径范围内图像，3D视图下有效。| `array` | -- |
|defaultLayer|当前地图中默认显示的图层。| `TileLayer` | -- |
|animateEnable|地图平移过程中是否使用动画| `boolean` | -- |
|doubleClickZoom|地图是否可通过双击鼠标放大地图| `boolean` | -- |
|dragEnable|地图是否可通过鼠标拖拽平移| `boolean` | -- |
|isHotspot|是否开启地图热点和标注的hover效果。| `boolean` | -- |
|jogEnable|地图是否使用缓动效果| `boolean` | -- |
|keyboardEnable|地图是否可通过键盘控制| `boolean` | -- |
|pitchEnable|是否允许设置俯仰角度，3D视图下为true，2D视图下无效。| `boolean` | -- |
|resizeEnable|是否监控地图容器尺寸变化| `boolean` | -- |
|rotateEnable|地图是否可旋转| `boolean` | -- |
|scrollWheel|地图是否可通过鼠标滚轮缩放浏览| `boolean` | -- |
|touchZoom|地图在移动终端上是否可通过多点触控缩放浏览地图| `boolean` | -- |
|zoomEnable|地图是否可缩放| `boolean` | -- |

### 静态属性

| 属性 |说明|类型|默认值|
|-----|----|----|----|
|view|地图视口，用于控制影响地图静态显示的属性| `View2D` | -- |
|showIndoorMap|是否在有矢量底图的时候自动展示室内地图| `boolean` | -- |
|indoorMap|在展示矢量图的时候自动展示室内地图图层| `IndoorMap` | -- |
|expandZoomRange|是否支持可以扩展最大缩放级别| `boolean` | -- |
|touchZoomCenter|可缺省，当touchZoomCenter=1的时候，手机端双指缩放的以地图中心为中心，否则默认以双指中间点为中心| `number` | -- |
|showBuildingBlock|设置地图显示3D楼块效果| `boolean` | -- |
|viewMode|默认为‘2D’，可选’3D’。| `2D` \| `3D` | -- |
|buildingAnimation|楼块出现和消失的时候是否显示动画过程。| `boolean` | -- |
|skyColor|调整天空颜色，配合自定义地图，3D视图有效| `string` | -- |

### 扩展属性

| 属性 | 属性类型 |说明|类型|默认值|
|-----|----|----|----|----|
|loading| 动态属性 | 地图加载中的UI | `React.ReactNode` | -- |
|center| 静态属性 |地图中心点坐标值|`Position`| --|
|mapKey| 静态属性 |高德地图的开发者Key|`string`| --|
|version| 静态属性 |高德地图的版本|`string`| `1.4.0` |
|protocol| 静态属性 |加载高德API协议|`string`| --|
|hostAndPath| 静态属性 | 加载高德API的前半部分 |`string`|`webapi.amap.com/maps`|

类型说明：

```ts
type Position = [number, number] | 
  { lng: number; lat: number; } | 
  { longitude: number; latitude: number; } |
  AMap.LngLat;
```

更多参数请查看 [map](https://lbs.amap.com/api/javascript-api/reference/map)
