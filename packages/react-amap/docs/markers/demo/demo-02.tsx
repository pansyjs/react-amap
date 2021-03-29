import { useState } from 'react';
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

const ChildrenComponent = (props: any) => {
  return (
    <div>
      {props.count}
    </div>
  )
}

export default () => {
  const [markers] = useState(randomMarker(100));

  return (
    <div style={{ height: 500 }}>
      <Map zoom={4}>
        <ControlBar
          position={{
            right: '10px',
            bottom: '10px'
          }}
        />
        <Markers
          markers={markers}
          useCluster={{
            render: () => {
              return <ChildrenComponent />
            }
          }}
        />
      </Map>
    </div>
  );
};

