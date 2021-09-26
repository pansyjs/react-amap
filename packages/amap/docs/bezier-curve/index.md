---
title: BezierCurve 贝塞尔曲线
nav:
  title: 组件
  path: /components
order: 1
group:
  path: /vector-graphics
  title: 矢量图形
  order: 150
---

# BezierCurve 贝塞尔曲线

## 何时使用

- 需要在地图上一个弧线的时候；

## 代码示例

### 基本使用

<code src="./demo/demo-01.tsx" />

## API

### 动态属性

| 属性 |说明|类型|默认值|
|-----|----|----|----|
|path| 折线的节点坐标数组 | `Position[]` | -- |
|draggable| 实例线段图形是否可拖拽 | `boolean` | -- |
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
