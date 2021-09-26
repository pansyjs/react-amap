---
title: Scale 比例尺
nav:
  title: 组件
  path: /components
order: 1
group:
  path: /control
  title: 地图控件
  order: 200
---

# Scale 比例尺

## 何时使用

-  需要展示比例尺的时候使用；

## 代码示例

### 基础用法

<code src="./demo/demo-01.tsx" />

### 绑定事件

<code src="./demo/demo-02.tsx" />

## API

### 动态属性

| 属性 |说明|类型|默认值|
|-----|----|----|----|

### 静态属性

| 属性 |说明|类型|默认值|
|-----|----|----|----|
|offset|相对于地图容器左上角的偏移量，正数代表向右下偏移| `Offset` | `Pixel(10,10)` |
|position|控件停靠位置| `LT` \| `RT` \| `LB` \| `RB` | `LB` |


### 扩展属性

| 属性 | 属性类型 |说明|类型|默认值|
|-----|----|----|----|----|
|visible| 动态属性 | 是否显示 | `boolean` | `true` |
|events| 静态属性 | 事件对象 | `object` | -- |

类型说明：

```
type Offset = AMap.Pixel |
  [number, number] |
  { x: number, y: number };
```

### 事件

| 事件名称 | 	参数 |说明|
|-----|----|----|
|show| -- | 是否显显示比例尺插件时触发的事件示 |
|hide| -- | 隐藏比例尺插件时触发的事件 |
|created| `AMap.Scale` | 比例尺实例创建事件 |
