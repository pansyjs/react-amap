import { useState } from 'react';
import { Button, Space } from 'antd';
import { Map, Circle } from '@pansy/react-amap';
import { randomColor } from '../../utils';

export default () => {
  const [visible, setVisible] = useState<boolean>(true);
  const [radius, setRadius] = useState<number>(15000);
  const [center, setCenter] = useState<ReactAMap.Position>({
    longitude: 120,
    latitude: 30
  });
  const [style, setStyle] = useState<object>({
    strokeColor: '#f00'
  });
  const [draggable, setDraggable] = useState<boolean>(false);

  const changeCenter = () => {
    setCenter({
      longitude: 120 + Math.random() * 20,
      latitude: 30 + Math.random() * 10,
    });
  }

  const changeRadius = () => {
    setRadius(15000 + Math.random() * 15000);
  }

  const toggleVisible = () => {
    setVisible((prev) => !prev);
  }

  const toggleDraggable = () => {
    setDraggable((prev) => !prev);
  }

  const changeStyle = () => {
    setStyle({strokeColor: randomColor() });
  }

  return (
    <div style={{ height: 500 }}>
      <Map center={center}>
        <Circle
          center={center}
          radius={radius}
          visible={visible}
          style={style}
          draggable={draggable}
        />
      </Map>
      <Space>
        <Button onClick={changeCenter}>Random Center</Button>
        <Button onClick={changeRadius}>Change Radius</Button>
        <Button onClick={toggleVisible}>Toggle Visible</Button>
        <Button onClick={toggleDraggable}>Toggle Draggable</Button>
        <Button onClick={changeStyle}>Change Style</Button>
      </Space>
    </div>
  );
};

