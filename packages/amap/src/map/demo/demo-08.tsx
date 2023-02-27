/**
  * desc: Map 组件现在还支持配置 loading 属性，在地图加载完成之前渲染。
  */
import React from 'react';
import { Map } from '@pansy/react-amap';

const loadingStyle: React.CSSProperties = {
  position: 'relative',
  height: '100%',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}

const Loading = <div style={loadingStyle}>Loading Map...</div>

export default () => {
  return (
    <div style={{ height: 500 }}>
      <Map loading={Loading} />
    </div>
  );
};

