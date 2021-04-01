---
title: ToolBar 组件
nav:
  title: 组件
  path: /components
order: 1
group:
  path: /control
  title: 控件
  order: 200
---

# ToolBar 组件

## 何时使用

-  需要显示地图工具条插件时使用；

## 代码示例

### 基础用法

<code src="./demo/demo-01.tsx" />

### 动态设置属性

<code src="./demo/demo-02.tsx" />

## API

### 动态属性

| 属性 |说明|类型|默认值|
|-----|----|----|----|
|offset|相对于地图容器左上角的偏移量，正数代表向右下偏移| `Offset` | -- |
|ruler|标尺键盘是否可见| `boolean` | `true` |
|locate|是否显示定位按钮| `boolean` | `false` |
|direction|方向键盘是否可见| `boolean` | `true` |

### 静态属性

| 属性 |说明|类型|默认值|
|-----|----|----|----|
|position|控件停靠位置| `LT` \| `RT` \| `LB` \| `RB` | `LT` |
|noIpLocate|定位失败后，是否开启IP定位| `boolean` | `false` |
|liteStyle|是否使用精简模式| `boolean` | `false` |
|autoPosition|是否自动定位| `boolean` | `false` |
|locationMarker|自定义定位图标| `AMap.Marker` | `false` |
|useNative|是否使用高德定位sdk用来辅助优化定位效果| `boolean` | `false` |

### 扩展属性

| 属性 |属性类型|说明|类型|默认值|
|-----|-----|----|----|----|
|visible| 动态属性 |圆形的显示/隐藏状态 | `boolean` | `true` |
