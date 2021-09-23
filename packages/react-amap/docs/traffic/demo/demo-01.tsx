import { useState } from 'react';
import { Button } from 'antd';
import { Map, Traffic } from '@pansy/react-amap';

export default () => {
  const [visible, setVisible] = useState<boolean>(true);

  const handleChangeVisible = () => {
    setVisible(prev => !prev);
  }

  return (
    <div style={{ height: 500 }}>
      <Map>
        <Traffic visible={visible} />
      </Map>

      <Button onClick={handleChangeVisible}>显示/隐藏</Button>
    </div>
  );
};

