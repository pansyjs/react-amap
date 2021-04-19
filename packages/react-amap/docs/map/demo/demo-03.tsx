/**
  * desc: 地图的动态属性在地图创建成功后可以动态的改变；
  */
import { useState } from 'react';
import { Button } from 'antd';
import { Map } from '@pansy/react-amap';

export default () => {
  const [center, setCenter] = useState<ReactAMap.Position>({ longitude: 115, latitude: 30 });

  const changeCenter = () => {
    setCenter({
      longitude: 115 + Math.random() * 10,
      latitude: 30 + Math.random() * 10,
    });
  }
  return (
    <div style={{ height: 500 }}>
      <Map center={center} />
      <Button onClick={changeCenter}>Random Change Center</Button>
    </div>
  );
};

