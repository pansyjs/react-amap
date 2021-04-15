/**
  * desc: Map 的父组件必须具有宽度和高度；
  */
import { useState } from 'react';
import { message } from 'antd';
import { Map, Marker } from '@pansy/react-amap';
import type { MapProps } from '@pansy/react-amap/es/map';

export default () => {
  const [position, setPosition] = useState<ReactAMap.Position>();

  const mapEvents: MapProps['events'] = {
    click: (event) => {
      const position: [number, number] = [event.lnglat.getLng(), event.lnglat.getLat()];
      message.success(`获取的坐标点位置为${position}`);
      setPosition(position);
    }
  }

  return (
    <div style={{ height: 500 }}>
      <Map events={mapEvents}>
        {position && (
           <Marker position={position} />
        )}
      </Map>
    </div>
  );
};
