import { useRef } from 'react';
import { Button, Space } from 'antd';
import { Map, RangingTool } from '@pansy/react-amap';

export default () => {
  const rangingTool = useRef<AMap.RangingTool>(null);

  const events = {
    created: (instance) => {
      console.log(instance);
      rangingTool.current = instance;
    }
  }

  const handleStart = () => {
    if (rangingTool.current) {
      rangingTool.current.turnOn();
    }
  }

  const handleEnd = () => {
    if (rangingTool.current) {
      rangingTool.current.turnOff(true);
    }
  }

  return (
    <div style={{ height: 500 }}>
      <Map>
        <RangingTool events={events} />
      </Map>
      <Space>
        <Button onClick={handleStart}>开始测量</Button>
        <Button onClick={handleEnd}>结束测量</Button>
      </Space>
    </div>
  );
};

