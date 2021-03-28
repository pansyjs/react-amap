---
title: Map 组件
nav:
  title: 组件
  path: /components
order: 1
group:
  path: /map
  title: 地图
  order: 1
---

# Map 地图

Map 组件是其他组件的基础，其他地图组件必须作为 Map 的子组件使用，Map 组件会给所有的子组件注入 `map` 属性，在拥有访问这个属性的能力后，就可以根据高德原生 API 做高德允许你做的一切事情。`@pansy/react-amap` 中的其他组件就是这么做的。所以，你也可以写出满足你业务需求的地图组件。

## 何时使用

-  在需要显示地图的地方使用；

## 代码示例

### 基础用法

<code src="./demo/demo-01.tsx" />

### 事件绑定

<code src="./demo/demo-02.tsx" />

### 动态改变属性

<code src="./demo/demo-03.tsx" />

## API

| 属性 |说明|类型|默认值|
|-----|----|----|----|
|classname| 额外的样式类 | `string` | -- |
|style| 额外的样式 | `React.CSSProperties` | -- |
|loading| 地图加载中的UI | `React.ReactNode` | -- |
|center|地图中心点坐标值|`Position`| --|
|mapKey|高德地图的开发者Key|`string`| --|
|version|高德地图的版本|`string`| `1.4.0` |
|protocol|加载高德API协议|`string`| --|
|hostAndPath| 加载高德API的前半部分 |`string`|`webapi.amap.com/maps`|

```ts
type Position = [number, number] | 
  { lng: number; lat: number; } | 
  { longitude: number; latitude: number; } |
  AMap.LngLat;
```

更多参数请查看 [map](https://lbs.amap.com/api/javascript-api/reference/map)

**注意:** 

- 组件对 center 进行了扩展，兼容了常见的经纬度数据格式。
