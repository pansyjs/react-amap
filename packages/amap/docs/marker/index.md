---
title: Marker 点标记
nav:
  title: 组件
  path: /components
group:
  path: /point-mark
  title: 点标记
  order: 50
---

# Marker 点标记

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

### 案例1

<code src="./demo/demo-06/index.tsx" />

## API

### 动态属性

| 属性 |说明|类型|默认值|
|-----|----|----|----|
|position|点标记在地图上显示的位置，默认为地图中心点| `Position` | 地图中心点 |
|anchor| 设置文本标记锚点。 | `Anchor` | `center` |
|offset| 点标记显示位置偏移量 | `Offset` | `Pixel(0,0)` |
|icon| 需在点标记中显示的图标。 | `string` \| `Icon` | -- |
|content| 点标记显示内容。 | `string` \| `HTMLElement` | -- |
|draggable| 设置点标记是否可拖拽移动 | `boolean` | `false` |
|raiseOnDrag| 设置拖拽点标记时是否开启点标记离开地图的效果 | `boolean` | -- |
|cursor| 指定鼠标悬停时的鼠标样式 | `boolean` | -- |
|visible| 点标记是否可见 | `Animation` | `AMAP_ANIMATION_NONE` |
|zIndex| 点标记的叠加顺序。 | `number` | `100` |
|angle| 点标记的旋转角度。 | `number` | -- |
|animation| 点标记的动画效果 | `Animation` | -- |
|shadow| 点标记阴影 | `Icon` | -- |
|title| 鼠标滑过点标记时的文字提示 | `string` | -- |
|clickable| 点标记是否可点击 | `boolean` | -- |
|shape| 设置Marker的可点击区域，在定义的区域内可触发Marker的鼠标点击事件 | `MarkerShape` | -- |
|extData| 用户自定义属性 | `any` | -- |
|label| 添加文本标注 | `object` | -- |

### 静态属性

| 属性 |说明|类型|默认值|
|-----|----|----|----|
|topWhenClick| 鼠标点击时是否置顶 | `boolean` | `false` |
|autoRotation| 是否自动旋转。点标记在使用moveAlong动画时，路径方向若有变化，点标记是否自动调整角度 | `boolean` | `false` |
|bubble| 是否将覆盖物的鼠标或touch等事件冒泡到地图上 | `boolean` | `false` |

### 扩展属性

| 属性 | 属性类型 |说明|类型|默认值|
|-----|----|----|----|----|
|events| 动态属性 | 以键值对形式提供绑定的事件对象 | `object` | -- |
|render| 静态属性 | render 属性接受一个 React 组件，或者一个方法返回一个 React 组件，会在初始化时渲染为组件的外观。 | `any` | -- |

部分类型说明：

```ts
type Position = [number, number] | 
  { lng: number; lat: number; } | 
  { longitude: number; latitude: number; } |
  AMap.LngLat;

type Offset = AMap.Pixel |
  [number, number] |
  { x: number, y: number };

type Anchor = 
  'top-left' | 
  'top-center' | 
  'top-right' | 
  'middle-left' | 
  'center' | 
  'middle-right' | 
  'bottom-left' | 
  'bottom-center' | 
  'bottom-right';

type Animation = 
  'AMAP_ANIMATION_NONE' | 
  'AMAP_ANIMATION_DROP' | 
  'AMAP_ANIMATION_BOUNCE';
```
