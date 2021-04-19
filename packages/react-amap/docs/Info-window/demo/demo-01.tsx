import { useState } from 'react';
import { Button, Space } from 'antd';
import { Map, InfoWindow } from '@pansy/react-amap';

export default () => {
  const [visible, setVisible] = useState<boolean>(true);
  const [value, setValue] = useState<number>(1);
  const [position, setPosition] = useState<ReactAMap.Position>({
    longitude: 120,
    latitude: 30
  });
  const [offset, setOffset] = useState<ReactAMap.Offset>([0, 0]);
  const [size, setSize] = useState<ReactAMap.Size>({
    width: 200,
    height: 140,
  });

  const infoWindowEvents = {
    open: () => {
      setVisible(true);
    },
    close: () => {
      setVisible(false);
    },
  };

  const changeSize = () => {
    setSize({
      width: 200 + Math.random() * 20,
      height: 140 + Math.random() * 20,
    });
  }

  const changeValue = () => {
    setValue((prev) => (prev + 1));
  }

  const resetOffset = () => {
    setOffset([0, 0])
  }

  const changeOffset = () => {
    setOffset([Math.random() * 10, Math.random() * 10])
  }

  const toggleVisible = () => {
    setVisible(prev => !prev);
  }

  const randomPosition = () => {
    setPosition({
      longitude: 120 + Math.random() * 20,
      latitude: 30 + Math.random() * 20,
    })
  }

  const html = `<div><h4>Greetings</h4><p>This is content of this info window</p><p>Click 'Change Value' Button: ${value}</p></div>`;

  return (
    <div style={{ height: 500 }}>
      <Map>
        <InfoWindow
          position={position}
          visible={visible}
          isCustom={false}
          content={html}
          size={size}
          offset={offset}
          events={infoWindowEvents}
        />
      </Map>
      <Space>
        <Button onClick={toggleVisible}>Toggle Visible</Button>
        <Button onClick={randomPosition}>Random Position</Button>
        <Button onClick={changeValue}>Change Value</Button>
        <Button onClick={changeOffset}>Change Offset</Button>
        <Button onClick={resetOffset}>Restore Offset</Button>
        <Button onClick={changeSize}>Change Size</Button>
      </Space>
    </div>
  );
};

