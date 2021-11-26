---
title: PointSimplifier 海量点展示
nav:
  title: 组件
  path: /components
order: 1
group:
  path: /amap-ui
  title: AMap UI
  order: 1000
---

# PointSimplifier 海量点展示

## 代码示例

### 闪烁效果

<code src="./demo/demo-01.tsx" />

### 图片内容

<code src="./demo/demo-02.tsx" />

## API

### 动态属性

| 属性 |说明|类型|默认值|
|-----|----|----|----|
|data| 数据源数组 | `any[]` | -- |

### 扩展属性

| 属性 |属性类型|说明|类型|默认值|
|-----|---|----|----|----|
|visible| 动态属性|是否显示 | `boolean` | `true` |
|renderConstructor|静态属性|设置渲染引擎|`GroupStyleRender`|--|
|getRenderOptions|静态属性|获取渲染参数|`function`|--|
