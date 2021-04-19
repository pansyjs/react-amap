import { useState } from 'react';
import { message } from 'antd';
import { Map, Markers, ControlBar } from '@pansy/react-amap';
import type { MarkersProps } from '@pansy/react-amap/es/markers';
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
      extData: {
        myIndex: i
      }
    }
  }));

  const markersEvents: MarkersProps['events'] = {
    created: (markers) => {
      console.log(`标记点创建事件`);
      console.log(markers);
    },
    click(e) {
      // 通过高德原生提供的 getExtData 方法获取原始数据
      const extData = e.target.getExtData();
      message.success(`点击的是第${extData.myIndex}号坐标点`);
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

