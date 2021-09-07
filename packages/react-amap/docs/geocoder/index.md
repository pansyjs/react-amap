---
title: Geocoder 地理编码与逆地理编码服务
nav:
  title: 组件
  path: /components
order: 1
group:
  path: /geocoder
  title: 地理编码
  order: 600
---

# Geocoder 地理编码与逆地理编码服务

## 何时使用

-  地理编码与逆地理编码服务，用于地址描述与坐标间的相互转换；

## 代码示例

### 基础用法

<code src="./demo/demo-01.tsx" />

### 逆地理编码（坐标 -> 地址）

<code src="./demo/demo-02.tsx" />

### 获取Geocoder实例

<code src="./demo/demo-03.tsx" />

## API

### 动态属性

| 属性 |说明|类型|默认值|
|-----|----|----|----|
|city|城市，地理编码时，设置地址描述所在城市|`string`|--|

### 静态属性

| 属性 |说明|类型|默认值|
|-----|----|----|----|
|radius|逆地理编码时，以给定坐标为中心点,取值范围：0 - 3000|`number`|`1000`|
|lang|设置语言类型|`zh_cn` \| `en`| `zh_cn`|
|extensions|逆地理编码时，返回信息的详略|`base` \| `all`| `all`|

## 事件

| 属性 |说明|类型|
|-----|----|----|
|created|实例创建成功事件|`(geocoder: AMap.Geocoder) => void`|
|complete|当编码执行成功时触发此事件|--|
|error|当编码执行失败时触发此事件|--|
