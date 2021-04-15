---
title: ContextMenu 右键菜单
nav:
  title: 组件
  path: /components
group:
  path: /overlay
  title: 覆盖物
---

# ContextMenu 右键菜单

## 何时使用

- 需要在地图上显示右侧菜单时使用

## 代码示例

### 基本使用

<code src="./demo/demo-01.tsx" />

## API

### 动态属性

| 属性 |说明|类型|默认值|
|-----|----|----|----|
|content| 右键菜单内容 | `string` \| `HTMLElement` | -- |

### 扩展属性

| 属性 |说明|类型|默认值|
|-----|----|----|----|
|events| 绑定的事件对象 | `object` | -- |


**Item**

| 属性 |说明|类型|默认值|
|-----|----|----|----|
|text| 菜单项的文案 | `string` | -- |
|onClick| 点击的回调 | `() => void` | -- |
