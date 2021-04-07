---
title: Heatmap 热力图插件
nav:
  title: 组件
  path: /components
order: 1
group:
  path: /plugin
  title: 插件
---

# Heatmap 热力图插件

## 何时使用

-  需要显示热力图的时候使用；

## 代码示例

### 基础用法

<code src="./demo/demo-01.tsx" />

## API

### 动态属性

| 属性 |说明|类型|默认值|
|-----|----|----|----|

### 静态属性

| 属性 |说明|类型|默认值|
|-----|----|----|----|
|radius|热力图中单个点的半径| `number` | `30` |
|gradient|热力图的渐变区间| `object` | -- |
|opacity|热力图透明度数组，取值范围[0,1]| `[number, number]` | `[0,1]` |
|zooms|支持的缩放级别范围| `[number, number]` | `[3,18]` |

### 扩展属性

| 属性 |属性类型|说明|类型|默认值|
|-----|-----|----|----|----|
|visible| 动态属性 |热力图的显示/隐藏 | `boolean` | `true` |
|dataSet| 动态属性 |热力图展现的数据集 | `{ max: number; data: object[] }` | `true` |
