---
title: InfoWindow 组件
nav:
  title: 组件
  path: /components
order: 99
group:
  path: /map
  title: '地图'
  order: 1
---

# Map 地图

## 何时使用

-  需要在地图上显示一个信息窗体的时候使用；

注意：在一个地图上最多只能同时显示一个信息窗体

## 代码示例

### 自定义窗体内容

<code src="./demo/demo-02.tsx" />

## API

### 动态属性

| 属性 |说明|类型|默认值|
|-----|----|----|----|
|content| 信息窗体的显示内容 | `string` \| `HTMLElement` | -- |
|position| 信息窗体显示基点位置 | `Position` | -- |
|size| 信息窗体尺寸（isCustom为true时，该属性无效） | `Size` | -- |
|offset| 相对于基点的偏移量 | `Offset` | -- |

### 静态属性

| 属性 |说明|类型|默认值|
|-----|----|----|----|
|isCustom| 是否自定义窗体。 | `boolean` | `false` |
|autoMove| 是否自动调整窗体到视野内 | `boolean` | `true` |
|closeWhenClickMap| 控制是否在鼠标点击地图后关闭信息窗体 | `boolean` | `false` |
|showShadow| 控制是否显示信息窗体阴影 | `boolean` | `false` |


### 扩展属性

| 属性 |说明|类型|默认值|
|-----|----|----|----|
|visible| 是否显示信息窗体。 | `boolean` | `false` |

```ts
type Position = [number, number] | 
  { lng: number; lat: number; } | 
  { longitude: number; latitude: number; } |
  AMap.LngLat;


type Offset = AMap.Pixel |
  [number, number] |
  { x: number, y: number };

type Size = AMap.Size |
  { width: number, height: number };
```
