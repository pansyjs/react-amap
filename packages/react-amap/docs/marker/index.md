---
title: Marker 组件
nav:
  title: 组件
  path: /components
group:
  path: /overlay
  title: 覆盖物
---

# Marker 组件

## 何时使用

- 显示单个坐标点的时候使用

## 代码示例

### 基本使用

<code src="./demo/demo-01.tsx" />

### 动态更改 Marker 属性

<code src="./demo/demo-02.tsx" />

### 自定义 Marker 的外观

<code src="./demo/demo-03.tsx" />

### render 方法渲染标记的外观

<code src="./demo/demo-04.tsx" />

### 给 Marker 绑定事件

<code src="./demo/demo-05.tsx" />

## API

### 动态属性

| 属性 |说明|类型|默认值|
|-----|----|----|----|
|position| 点标记在地图上显示的位置，默认为地图中心点 | `Position` | -- |
|offset| 点标记显示位置偏移量 | `Offset` | -- |
|icon| 需在点标记中显示的图标。 | `boolean` | -- |
|content| 点标记显示内容，可以是HTML要素字符串或者HTML DOM对象。 | `string` \| `HTMLElement` | -- |
|draggable| 设置点标记是否可拖拽移动 | `boolean` | -- |
|zIndex| 点标记的叠加顺序。 | `boolean` | -- |
|extData| 用户自定义属性 | `any` | -- |

### 静态属性

| 属性 |说明|类型|默认值|
|-----|----|----|----|
|zIndex| 层叠顺序 | `number` | `10` |
|bubble| 是否将覆盖物的鼠标或touch等事件冒泡到地图上 | `boolean` | `false` |

### 扩展属性

| 属性 |说明|类型|默认值|
|-----|----|----|----|
|style| 绘制圆形的外观，各个字段取值类型参考 | `Style` | -- |
|visible| 圆形的显示/隐藏状态 | `boolean` | `true` |

```ts
type Position = [number, number] | 
  { lng: number; lat: number; } | 
  { longitude: number; latitude: number; } |
  AMap.LngLat;

type Offset = AMap.Pixel |
  [number, number] |
  { x: number, y: number };
```
