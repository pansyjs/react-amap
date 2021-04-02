import { useState } from 'react';
import { Map, PolyEditor, Polyline } from '@pansy/react-amap';

const randomPath = () => ({
  longitude: 60 + Math.random() * 50,
  latitude: 10 + Math.random() * 40,
})

export default () => {
  const [active, setActive] = useState<boolean>(true);
  const [path] = useState<{ longitude: number, latitude: number}[]>(Array(5).fill(true).map(randomPath));
  const [center] = useState<ReactAMap.Position>({
    longitude: 120,
    latitude: 30
  });

  const changeActive = () => {
    setActive(prev => !prev);
  }

  return (
    <div style={{ height: 500 }}>
      <Map center={center}>
        <Polyline
          path={path}
        >
          <PolyEditor active={active} />
        </Polyline>
      </Map>
      <button onClick={() => { changeActive() }}>Random Active</button>
    </div>
  );
};

