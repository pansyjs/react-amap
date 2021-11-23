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
