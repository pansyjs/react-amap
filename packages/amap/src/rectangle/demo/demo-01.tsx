import { useState } from 'react';
import { Button, Space } from 'antd';
import { Map, Rectangle } from '@pansy/react-amap';
import { randomColor } from './utils';

export default () => {
  const [visible, setVisible] = useState<boolean>(true);
  const [style, setStyle] = useState<object>({
    strokeColor: '#f00'
  });

  const toggleVisible = () => {
    setVisible((prev) => !prev);
  }

  const changeStyle = () => {
    setStyle({strokeColor: randomColor() });
  }

  return (
    <div style={{ height: 500 }}>
      <Map zoom={4}>
        <Rectangle
          bounds={[
            [108.245573, 39.027206],
            [116.485319, 26.666506]
          ]}
          visible={visible}
          style={style}
        />
      </Map>
      <Space>
        <Button onClick={toggleVisible}>Toggle Visible</Button>
        <Button onClick={changeStyle}>Change Style</Button>
      </Space>
    </div>
  );
};

