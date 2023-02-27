---
title: Circle 圆形
nav:
  title: 组件
  path: /components
group:
  path: /vector-graphics
  title: 矢量图形
---

# Circle 圆形

## 何时使用

- 需要在地图上显示一个圆形时

## 代码示例

### 基本使用

<code src="./demo/demo-01.tsx"></code>

### 通过ref获取实例

<code src="./demo/demo-02.tsx"></code>

## API

### 动态属性

| 属性 |说明|类型|默认值|
|-----|----|----|----|
|center| 圆心位置 | `Position` | -- |
|radius| 圆半径，单位:米 | `number` | -- |
|draggable| 圆形是否可拖拽 | `boolean` | -- |
|extData| 用户自定义属性 | `any` | -- |

### 静态属性

| 属性 |说明|类型|默认值|
|-----|----|----|----|
|zIndex| 层叠顺序 | `number` | `10` |
|bubble| 是否将覆盖物的鼠标或touch等事件冒泡到地图上 | `boolean` | `false` |

### 扩展属性

| 属性 |属性类型 |说明|类型|默认值|
|-----|----|----|----|----|
|style| 动态属性 |圆形的样式 | `Style` | -- |
|visible| 动态属性 |是否显示 | `boolean` | `true` |

<br />

```ts
type Position = [number, number] | 
  { lng: number; lat: number; } | 
  { longitude: number; latitude: number; } |
  AMap.LngLat;

interface Style { 
  // 线条的颜色
  strokeColor: string; 
  // 线条的透明度
  strokeOpacity: number; 
  // 线条的宽度
  strokeWeight: string;  
  // 线条的样式
  strokeStyle: 'dashed' | 'solid';
  // 虚线分段设置
  strokeDasharray: [number, number]; 
  // 填充的颜色
  fillColor: string;
  // 填充的透明度
  fillOpacity: number;
}
```

