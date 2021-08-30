import { useState } from 'react';
import { Button } from 'antd';
import { Map, PolylineEditor, Polyline } from '@pansy/react-amap';

const randomPath = () => ({
  longitude: 60 + Math.random() * 50,
  latitude: 10 + Math.random() * 40,
})

export default () => {
  const [active, setActive] = useState<boolean>(true);
  const [path] = useState<{ longitude: number, latitude: number}[]>(Array(3).fill(true).map(randomPath));
  const [center] = useState<ReactAMap.Position>({
    longitude: 120,
    latitude: 30
  });

  const changeActive = () => {
    setActive(prev => !prev);
  }

  return (
    <div style={{ height: 500 }}>
      <Map center={center} zoom={3}>
        <Polyline
          path={path}
        >
          <PolylineEditor active={active} />
        </Polyline>
      </Map>
      <Button onClick={() => { changeActive() }}>Random Active</Button>
    </div>
  );
};

