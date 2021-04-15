---
title: MouseTool 鼠标工具
nav:
  title: 组件
  path: /components
order: 1
group:
  path: /plugin
  title: 插件
---

# MouseTool 鼠标工具

## 何时使用

- 需要在地图上启用鼠标工具插件时使用；

## 代码示例

### 基础用法

<code src="./demo/demo-01.tsx" />

## API

具体方法请查看 [MouseTool](https://lbs.amap.com/api/javascript-api/reference/plugin/#AMap.MouseTool)

## 动态属性

| 属性 |说明|类型|默认值|
|-----|----|----|----| |

### 静态属性

| 属性 |说明|类型|默认值|
|-----|----|----|----|

### 扩展属性

| 属性 |属性类型 |说明|类型|默认值|
|-----|----|----|----|----|
|events| 动态属性 |绑定的时间 | `object` | -- |

## 事件

| 事件名称 |说明|事件类型|
|-----|----|----|
|created|鼠标插件实例创建|`AMap.MouseTool`|
|draw|鼠标工具绘制覆盖物结束时触发此事件|`{type: string; obj: any}|

