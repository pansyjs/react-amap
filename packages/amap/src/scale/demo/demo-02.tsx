
import { useState } from 'react';
import { Button } from 'antd';
import { Map, Scale } from '@pansy/react-amap';

export default () => {
  const [visible, setVisible] = useState<boolean>(true);

  const handleChangeVisible = () => {
    setVisible(prev => !prev);
  }

  const scaleEvents = {
    created: (scale) => {
      console.log(`比例尺创建事件`);
      console.log(scale);
    },
    show: () => {
      console.log(`比例尺显示`);
    },
    hide: () => {
      console.log(`比例尺隐藏`);
    }
  }

  return (
    <div style={{ height: 500 }}>
      <Map>
        <Scale visible={visible} events={scaleEvents} position="RB" />
      </Map>

      <Button onClick={handleChangeVisible}>显示/隐藏</Button>
    </div>
  );
};

