---
title: 基本介绍

nav:
  title: 组件
  path: /components
---

# 基本介绍

## 术语说明

### 静态属性

- 只能在创建实例时定义的属性

### 动态属性

- 创建实例以及实例创建成功后仍然可以操作改变的属性

### 扩展属性

- 为方便开发者使用，对参数进行的扩展

### 经纬度

高德很多API的经纬度参数是需要传递[AMap.LngLat](https://lbs.amap.com/api/javascript-api/reference/core#LngLat)，`@pansy/react-amap`通过内部转换支持常见的经纬度数据格式:

- `[lng, lat]`
- `{ lng: number; lat: number; }`
- `{ longitude: number; latitude: number; }`

类型定义可通过 `AMap.ExpandPosition` 获取
