---
title: APILoader JS API加载
nav:
  title: 组件
  path: /components
order: 1
group:
  path: /map
  title: 地图
---

# APILoader JS API加载

## 何时使用

- 加载高德地图 JS API；

## 代码示例

### 基本使用

<code src="./demo/demo-01.tsx" />

### 加载插件

<code src="./demo/demo-04.tsx" />

### 加载AMapUI

<code src="./demo/demo-02.tsx" />

### 加载Loca

<code src="./demo/demo-03.tsx" />



## API

| 属性 |说明|类型|默认值|
|-----|----|----|----|
|mapKey| 开发者秘钥 | `string` | -- |
|version| 高德地图版本 | `string` | `2.0` |
|plugins| 需要加载的高德插件名称 | `string[]` | `[]` |
|AMapUI| 需要加载的高德插件名称 | `{ version: string; plugins: string[] }` | -- |
|Loca| Loca 加载配置 | `{ version: string }` | -- |
|onComplete|资源加载完成|`(aMap: AMap) => void`| -- |

**注意：**

1. AMapUI 不配置则不会加载，默认配置如下

```ts
{
  version: '1.1',
  plugins: [],
}
```

如与默认配置一致，只需配置 `AMapUI={{}}`


2. Loca 不配置则不会加载，默认配置如下

```ts
{
  version: '2.0.0',
}
```

如与默认配置一致，只需配置 `Loca={{}}`
