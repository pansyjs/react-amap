/**
  * desc: 可通过 created event 和 ref 获取
  */
import { useRef, useEffect } from 'react';
import { Map } from '@pansy/react-amap';

export default () => {
  const mapRef = useRef<AMap.Map>(null);

  useEffect(
    () => {
      console.log('通过ref获取地图实例');
      console.log(mapRef.current);
    },
    [mapRef.current]
  )

  const mapEvents = {
    created: (map: AMap.Map) => {
      console.log('通过events获取地图实例');
      console.log(map);
    }
  }

  return (
    <div style={{ height: 500 }}>
      <Map ref={mapRef} events={mapEvents} />
    </div>
  );
};
