---
title: Markers 海量点标记
nav:
  title: 组件
  path: /components
group:
  path: /overlay
  title: 覆盖物
---

# Markers 海量点标记

## 何时使用

- 显示大量标记的时候使用；

## 代码示例

### 基本使用

<code src="./demo/demo-01.tsx" />

### useCluster

<code src="./demo/demo-02.tsx" />

### 事件绑定

<code src="./demo/demo-07.tsx" />

## API

### 动态属性

| 属性 |说明|类型|默认值|
|-----|----|----|----|
|useCluster| 是否启用标记点聚合插件 | `boolean` \| `MarkerClustererOptions` | `false` |
|markers| 数组每一项都是都应标记点的属性或者其他自定义数据配置 | `MarkerOptions[]` | -- |

### 静态属性

| 属性 |说明|类型|默认值|
|-----|----|----|----|
|render| 根据传入的 MarkerOption 返回一个 React 组件 | `(options: MarkerOptions) => void` | -- |
|events| 是否将覆盖物的鼠标或touch等事件冒泡到地图上 | `object` | -- |

### Markers events 事件

- click 
  高德原生提供的Click事件, 具体请查看 [MarkerClusterer](https://lbs.amap.com/api/javascript-api/reference/plugin#AMap.MarkerClusterer)
- created
  扩展事件，在标记点批量创建完成后，会执行events.created这个方法传入创建的所有标记点实例；
  如果对坐标点进行了增删操作，这个方法会重复执行。
