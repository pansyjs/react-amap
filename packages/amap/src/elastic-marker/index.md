---
title: ElasticMarker 灵活点标记
nav:
  title: 组件
  path: /components
group:
  path: /point-mark
  title: 点标记
---

# ElasticMarker 灵活点标记

## 何时使用

- 需要在地图展示随着地图级别变化而改变图标和大小的点标记时使用

## 代码示例

### 基本使用

<code src="./demo/demo-01.tsx"></code>

## API

### 动态属性

| 属性 |说明|类型|默认值|
|-----|----|----|----|
|position| 标记点的位置 | `Position` \| `HTMLElement` | -- |
|draggable| 标记点是否可拖拽 | `boolean` | -- |
|extData| 用户自定义属性 | `any` | -- |

### 静态属性

| 属性 |说明|类型|默认值|
|-----|----|----|----|
|zIndex| 层叠顺序 | `number` | `10` |
|bubble| 是否将覆盖物的鼠标或touch等事件冒泡到地图上 | `boolean` | `false` |

### 扩展属性

| 属性 |说明|类型|默认值|
|-----|----|----|----|
|visible| 圆形的显示/隐藏状态 | `boolean` | `true` |

**类型说明：**

```ts
type Position = [number, number] | 
  { lng: number; lat: number; } | 
  { longitude: number; latitude: number; } |
  AMap.LngLat;
```
