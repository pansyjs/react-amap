import { useState } from 'react';
// @ts-ignore
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
          // events={this.windowEvents}
        />
      </Map>
      <button onClick={() => { toggleVisible() }}>Toggle Visible</button>
      <button onClick={() => { randomPosition() }}>Random Position</button>
      <button onClick={() => { changeValue() }}>Change Value</button>
      <button onClick={() => { changeOffset() }}>Change Offset</button>
      <button onClick={() => { resetOffset() }}>Restore Offset</button>
      <button onClick={() => { changeSize() }}>Change Size</button>
    </div>
  );
};

