
import { useState } from 'react';
import { Button } from 'antd';
import { Map, Scale } from '@pansy/react-amap';

export default () => {
  const [visible, setVisible] = useState<boolean>(true);

  const handleChangeVisible = () => {
    setVisible(prev => !prev);
  }

  return (
    <div style={{ height: 500 }}>
      <Map>
        <Scale visible={visible} offset={[20, 20]} position="RB" />
      </Map>

      <Button onClick={handleChangeVisible}>显示/隐藏</Button>
    </div>
  );
};

