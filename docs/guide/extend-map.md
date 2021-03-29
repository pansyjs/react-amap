---
title: 自定义地图组件
order: 10
group:
  path: /
nav:
  title: 文档
  path: /docs
---

# 自定义地图组件

如果 `@pansy/react-amap` 所包含的组件 不满足您的需求，完全可以基于 `@pansy/react-amap` 扩展能力，封装一个地图组件。

比如：

```tsx | pure
const MyMapComponent = (props) => {
  // props.map;
  // your code here
};

// render here
<Map>
  <MyMapComponent />
</Map>
```

我们会给 Map 组件的所有自定义子组件注入地图属性；在你的组件内部，你可以:

1. 通过 props 的 map 属性访问创建好的高德地图实例；

拥有访问这这个属性的能力后，你可以根据高德原生 API 做高德允许你做的一切事情。

下面的例子中，我们写了一个自定义的 `ZoomCtrl` 组件，来定义一个自己的地图 zoom 控制器。

```tsx | pure
import React from 'react';

const ZoomCtrl: React.FC = ({ map }) => {
  if (!map) {
    console.log('组件必须作为 Map 的子组件使用');
    return;
  }
  const style = {
    position: 'absolute',
    top: '10px',
    left: '10px',
    background: '#fff',
    padding: '10px'
  }
  const zoomIn = () => map.zoomIn();
  const zoomOut = () => map.zoomOut();

  return (
    <div style={style}>
      <button onClick={zoomIn}>zoom in</button>
      <button onClick={zoomOut}>zoom out</button>
    </div>
  );
};

export default ZoomCtrl;
```

默认情况下， `@pansy/react-amap` 会给所有 Map 的子组件注入 `map` 属性，如果你明确不需要注入（比如跟你自己的属性名有冲突），可以设置组件的 preventAmap 属性为 true。不过即便注入了只要不使用并且也不存在属性名冲突的问题，也没有什么副作用。

```tsx | pure
const MyNormalComponent = (props) => {
  // props.map 和 props.AMap 都是 undefined
  // your code here
};

MyNormalComponent.preventAmap = true;

// render here
<Map>
  <MyNormalComponent />
</Map>
```
