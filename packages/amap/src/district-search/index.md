---
title: DistrictSearch 行政区查询
nav:
  title: 组件
  path: /components
order: 1
group:
  path: /search
  title: 搜索
  order: 500
---

# DistrictSearch 行政区查询

## 何时使用

- 行政区查询服务提供行政区信息的查询

## 代码示例

### 基本使用

<code src="./demo/demo-01.tsx"></code>

## API

### 动态属性

| 属性 |说明|类型|默认值|
|-----|----|----|----|
|level| 关键字对应的行政区级别或商圈 | `string` | -- |
|extensions| 是否返回行政区边界坐标点 | `base` \| `all`  | `base` |

### 静态属性

| 属性 |说明|类型|默认值|
|-----|----|----|----|
|showbiz| 是否显示商圈 | `boolean` | `true` |
|subdistrict| 显示下级行政区级数 | `number` | -- |
