---
title: 自定义地图组件
order: 10

nav:
  title: 文档
  path: /docs
---

**注意: 封装高德插件的时候，需要注意，所有参数分为静态属性和动态属性**

- 动态属性 - 高德插件实例提供了方法可对其进行重新设置的即为动态属性
- 静态属性 - 高德插件创建实例之后无法修改的属性即为静态属性

可使用 `@pansy/react-amap-core` 暴露的方法进行插件封装

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

我们会使用`React Context`共享`map`示例，你可以通过`const { map } = useMap()`在你的自定义组件中获取；

拥有访问这`map`实例的能力后，你可以根据高德原生 API 做高德允许你做的一切事情。

下面的例子中，我们写了一个自定义的 `ZoomCtrl` 组件，来定义一个自己的地图 zoom 控制器。

```tsx | pure
import React from 'react';
import { useMap } from '@pansy/react-amap';

const ZoomCtrl: React.FC = () => {
  const { map } = useMap();
  
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

如果需求使用不到展示时，可以使用 `APILoader`组件提供的加载高德JS API 的能力进行组件的封装

例如[AutoComplete](https://github.com/pansyjs/react-amap/blob/main/packages/amap/src/auto-complete/auto-complete.tsx)
