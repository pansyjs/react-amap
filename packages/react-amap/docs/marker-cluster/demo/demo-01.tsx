import { useState } from 'react';
import { Map, MarkerCluster } from '@pansy/react-amap';

const randomLnglat = () => [
  100 + Math.random() * 20,
  30 + Math.random() * 20
] as AMap.MarkerCluster.DataOptions['lnglat'];

const randomMarker = (len = 10) => (
  Array(len).fill(true).map((item, index) => ({
    lnglat: randomLnglat(),
    extData: index
  }))
);

export default () => {
  const [list] = useState(randomMarker());

  return (
    <div style={{ height: 500 }}>
      <Map zoom={4}>
        <MarkerCluster
          data={list}
        />
      </Map>
    </div>
  );
};

