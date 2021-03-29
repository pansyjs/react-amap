/**
  * desc: Map 的父组件必须具有宽度和高度；
  */
import { useState } from 'react';
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
      <button onClick={changeCenter}>Random Change Center</button>
    </div>
  );
};

