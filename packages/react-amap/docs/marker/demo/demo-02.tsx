import { useState } from 'react';
import { Map, Marker } from '@pansy/react-amap';

export default () => {
  const [visible, setVisible] = useState<boolean>(true);
  const [clickable, setClickable] = useState<boolean>(true);
  const [draggable, setDraggable] = useState<boolean>(true);
  const [position, setPosition] = useState<AMap.ExpandPosition>({
    longitude: 120,
    latitude: 35
  });

  const toggleVisible = () => {
    setVisible((prev) => !prev)
  }

  const randomPosition = () => {
    setPosition({
      longitude: 120 + Math.random() * 10 ,
      latitude: 35 + Math.random() * 10
    });
  }

  const toggleClickable = () => {
    setClickable((prev) => !prev);
  }

  const toggleDraggable = () => {
    setDraggable((prev) => !prev);
  }

  return (
    <div style={{ height: 500 }}>
      <Map zoom={4}>
        <div>
          <Marker
            visible={visible}
            position={position}
            draggable={draggable}
            clickable={clickable}
          />
        </div>
      </Map>
      <button onClick={toggleVisible}>Visible</button>
      <button onClick={randomPosition}>Position</button>
      <button onClick={toggleClickable}>Clickable</button>
      <button onClick={toggleDraggable}>Draggable</button>
    </div>
  );
};

