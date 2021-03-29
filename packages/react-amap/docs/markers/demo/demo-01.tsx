import { useState } from 'react';
import { Map, Markers } from '@pansy/react-amap';

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
  const [markers, setMarkers] = useState(randomMarker(100));
  return (
    <div style={{ height: 500 }}>
      <Map zoom={4}>
        <Markers
          markers={markers}
        />
      </Map>
    </div>
  );
};

