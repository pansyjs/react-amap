import { useState } from 'react';
import { Map, Circle, CircleEditor } from '@pansy/react-amap';

export default () => {
  const [active, setActive] = useState<boolean>(true);
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
        <Circle
          center={center}
          radius={15000}
        >
          <CircleEditor active={active} />

        </Circle>
      </Map>
      <button onClick={() => { changeActive() }}>Random Active</button>
    </div>
  );
};

