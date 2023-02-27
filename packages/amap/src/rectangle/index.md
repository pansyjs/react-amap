---
title: Rectangle 矩形
nav:
  title: 组件
  path: /components
group:
  path: /vector-graphics
  title: 矢量图形
---

# Rectangle 矩形

## 何时使用

- 需要在地图上显示一个矩形时

## 代码示例

### 基本使用

<code src="./demo/demo-01.tsx"></code>

## API

### 动态属性

| 属性 |说明|类型|默认值|
|-----|----|----|----|
|bounds| 矩形的范围 | `AMap.Bounds` \| `[Position, Position]` | -- |
|draggable| 圆形是否可拖拽 | `boolean` | -- |
|extData| 用户自定义属性 | `any` | -- |

### 静态属性

| 属性 |说明|类型|默认值|
|-----|----|----|----|
|zIndex| 层叠顺序 | `number` | `10` |
|bubble| 是否将覆盖物的鼠标或touch等事件冒泡到地图上 | `boolean` | `false` |

### 扩展属性

| 属性 | 属性类型 |说明|类型|默认值|
|-----|----|----|----|----|
|style| 动态属性 | 绘制圆形的外观，各个字段取值类型参考 | `Style` | -- |
|visible| 动态属性 | 圆形的显示/隐藏状态 | `boolean` | `true` |


类型说明：

```ts
type Position = [number, number] | 
  { lng: number; lat: number; } | 
  { longitude: number; latitude: number; } |
  AMap.LngLat;

interface Style { 
  /** 线条颜色 */
  strokeColor?: string;
  /** 线条透明度 */
  strokeOpacity?: number;
  /** 线条宽度 */
  strokeWeight?: number;
  /** 虚线或者视线 */
  strokeStyle?: AMap.StrokeStyle;
  /** 虚线的分段  */
  strokeDasharray?: [number, number];
  /** 填充的颜色 */
  fillColor?: string;
  /** 填充的透明度 */
  fillOpacity?: number;
}
```
