import { useState } from 'react';
import { Map, Markers, ControlBar } from '@pansy/react-amap';
import styles from './index.less';

const randomPosition = () => ({
  longitude: 100 + Math.random() * 20,
  latitude: 30 + Math.random() * 20
});

const ChildrenComponent = (props: any) => {
  return (
    <div className={styles.clusterer}>
      {props.count}
    </div>
  )
}

export default () => {
  const [markers] = useState(Array(10).fill(true).map(function(_, i){
    return {
      position: randomPosition(),
      // 这个属性就可以用来确定点击的是哪个坐标点
      myIndex: i
    }
  }));

  const markersEvents = {
    click(e, marker){
      // 通过高德原生提供的 getExtData 方法获取原始数据
      const extData = marker.getExtData();
      const index = extData.myIndex;
      alert(`点击的是第${index}号坐标点`);
    }
  }

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
          events={markersEvents}
        />
      </Map>
    </div>
  );
};

