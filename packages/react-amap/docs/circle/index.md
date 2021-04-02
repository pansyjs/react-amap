---
title: Circle 圆形
nav:
  title: 组件
  path: /components
group:
  path: /overlay
  title: 覆盖物
---

# Circle 圆形

## 何时使用

- 需要在地图上显示一个圆形时

## 代码示例

### 基本使用

<code src="./demo/demo-01.tsx" />

## API

### 动态属性

| 属性 |说明|类型|默认值|
|-----|----|----|----|
|center| 圆心位置 | `Position` \| `HTMLElement` | -- |
|radius| 圆半径，单位:米 | `number` | -- |
|draggable| 圆形是否可拖拽 | `boolean` | -- |
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

interface Style { 
  strokeColor: string; 
  strokeOpacity: number; 
  strokeWeight: string;  
  fillColor, 
  fillOpacity: number;
  strokeStyle, 
  strokeDasharray 
}
```
