import { useState } from 'react';
import { Map, Ellipse, EllipseEditor } from '@pansy/react-amap';

export default () => {
  const [active, setActive] = useState<boolean>(true);
  const [center] = useState<AMap.ExpandPosition>({
    longitude: 120,
    latitude: 30
  });

  const changeActive = () => {
    setActive(prev => !prev);
  }

  return (
    <div style={{ height: 500 }}>
      <Map center={center} zoom={4}>
        <Ellipse
          center={center}
          radius={[1000000, 200000]}
        >
          <EllipseEditor active={active} />
        </Ellipse>
      </Map>
      <button onClick={() => { changeActive() }}>Random Active</button>
    </div>
  );
};

