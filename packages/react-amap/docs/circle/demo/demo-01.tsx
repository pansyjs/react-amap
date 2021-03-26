import { useState } from 'react';
// @ts-ignore
import { Map, Circle } from '@pansy/react-amap';

const randomIndex = (len) => (Math.floor(Math.random() * len));

const randomColor = () => {
  const chars = '0123456789abcdef'.split('');
  const len = chars.length;
  return `#${chars[randomIndex(len)]}${chars[randomIndex(len)]}`
  + `${chars[randomIndex(len)]}${chars[randomIndex(len)]}`
  + `${chars[randomIndex(len)]}${chars[randomIndex(len)]}`;
};

export default () => {
  const [visible, setVisible] = useState<boolean>(true);
  const [radius, setRadius] = useState<number>(15000);
  const [center, setCenter] = useState<PansyMap.Position>({
    longitude: 120,
    latitude: 30
  });
  const [style, setStyle] = useState<object>({
    strokeColor: '#f00'
  });
  const [draggable, setDraggable] = useState<boolean>(true);

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
      <button onClick={() => { changeCenter() }}>Random Center</button>
      <button onClick={() => { changeRadius() }}>Change Radius</button>
      <button onClick={() => { toggleVisible() }}>Toggle Visible</button>
      <button onClick={() => { toggleDraggable() }}>Toggle Draggable</button>
      <button onClick={() => { changeStyle() }}>Change Style</button>
    </div>
  );
};

