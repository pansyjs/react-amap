import { useState } from 'react';
// @ts-ignore
import { Map, Markers, ControlBar } from '@pansy/react-amap';

const randomPosition = () => ({
  longitude: 100 + Math.random() * 20,
  latitude: 30 + Math.random() * 20
});

const randomMarker = (len) => (
  Array(len).fill(true).map((e, idx) => ({
    position: randomPosition()
  }))
);

export default () => {
  const [markers] = useState(randomMarker(100));

  return (
    <div style={{ height: 500 }}>
      <Map zoom={4}>
        <ControlBar
          position={{
            right: '10px',
            bottom: 0
          }}
        />
        <Markers
          markers={markers}
          useCluster
        />
      </Map>
    </div>
  );
};

