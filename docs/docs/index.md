---
title: 快速开始

nav:
  title: 文档
  path: /docs
---

# 快速开始

`@pansy/react-amap` 是一个基于 React 封装的高德地图组件；帮助你轻松的接入地图到 React 项目中。

除了必须引用的 Map 组件外，我们目前提供了多个常用的地图组件，能满足大部分简单的业务场景；如果你有更复杂的需求，或者觉得默认提供的组件功能不够，你完全可以自定义一个地图组件，然后根据高德原生 API 做高德允许你做的一切事情。

## 安装

```sh
# npm install
$ npm i @pansy/react-amap --save

# yarn install
$ yarn add @pansy/react-amap
```

## 使用

```html
<div id="app"></div>
```

```css
#app {
  width: 600px;
  height: 400px;
}
```

```tsx | pure
import React from 'react';
import ReactDOM from 'react-dom';
import { Map } from 'react-amap';

ReactDOM.render(
  <Map mapKey={YOUR_AMAP_KEY} version={VERSION} />,
  document.querySelector('#app')
)
```

version 指定高德地图版本 不填则使用默认值: 2.0

## 关于 mapKey

在上面的例子中需要给 Map 组件传入 `mapKey` 属性，这个是高德地图给开发者分配的开发者 Key；你可以在[高德开放平台](https://lbs.amap.com/faq/account/key/67)申请你自己的 Key。

在 react-amap 中 `mapKey` 的传入方式有两种:
- 给 Map 组件传入 mapKey 属性（因为 React 框架本身对 key 属性有其他作用，所以不能用 key，所以我们用 mapKey），这样的缺点是如果多个地方使用就要每次都要传入；
- 对Map组件进行再封装，将一些常量属性内置，再在项目中使用。 -- 推荐
