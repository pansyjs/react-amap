import { useState } from 'react';
import { Map, Markers, ControlBar } from '@pansy/react-amap';
import styles from './index.less';

const randomLnglat = () => [
  100 + Math.random() * 20,
  30 + Math.random() * 20,
]

const randomMarker = (len) => (
  Array(len).fill(true).map(() => ({
    lnglat: randomLnglat(),
  }))
);

const ChildrenComponent = (props: any) => {
  return (
    <div className={styles.clusterer}>
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
          markers={markers as any}
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

