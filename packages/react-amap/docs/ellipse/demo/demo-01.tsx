import { useState } from 'react';
import { Button } from 'antd';
import { Map, Ellipse } from '@pansy/react-amap';

export default () => {
  const [visible, setVisible] = useState<boolean>(true);

  const handleChangeVisible = () => {
    setVisible(prev => !prev);
  }

  return (
    <div style={{ height: 500 }}>
      <Map zoom={4}>
        <Ellipse
          visible={visible}
          center={[116.433322, 39.900255]}
          radius={[1000000, 200000]}
        />
      </Map>
      <Button onClick={handleChangeVisible}>
        切换显示/隐藏
      </Button>
    </div>
  );
};

