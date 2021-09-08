---
title: AutoComplete 关键字搜索
nav:
  title: 组件
  path: /components
order: 1
group:
  path: /search
  title: 搜索
  order: 500
---

# AutoComplete 关键字搜索

## 何时使用

- 根据输入关键字提示匹配信息

## 代码示例

### 基本使用

<code src="./demo/demo-01.tsx" />

## API

### 动态属性

| 属性 |说明|类型|默认值|
|-----|----|----|----|
|type| 输入提示时限定POI类型 | `string` | -- |
|city| 输入提示时限定城市 | `string` | `全国` |
|citylimit| 是否强制限制在设置的城市内搜索 | `boolean` | `false` |

### 静态属性

| 属性 |说明|类型|默认值|
|-----|----|----|----|
|datatype| 返回的数据类型 | `string` | -- |
|input| 用来指定一个input输入框 | `string` \| `HTMLDivElement` | -- |
|output| 用来指定一个展示提示结果的容器 | `string` \| `HTMLDivElement` | -- |
|outPutDirAuto| 是否避免被遮挡 | `boolean` | `true` |
|closeResultOnScroll| 页面滚动时关闭搜索结果列表 | `boolean` | `true` |
|lang| 设置检索语言类型 | `string` | `zh_cn` |
