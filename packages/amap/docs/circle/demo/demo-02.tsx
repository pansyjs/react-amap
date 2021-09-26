import { useRef } from 'react';
import { Button } from 'antd';
import { Map, Circle } from '@pansy/react-amap';

const position = {
  longitude: 120,
  latitude: 30
}

export default () => {
  const circle = useRef<AMap.Circle>(null);

  return (
    <div style={{ height: 500 }}>
      <Map
        center={position}
      >
        <Circle
          ref={circle}
          center={position}
          radius={15000}
        />
      </Map>
      <Button onClick={() => { console.log(circle.current) }}>获取实例</Button>
    </div>
  );
};

