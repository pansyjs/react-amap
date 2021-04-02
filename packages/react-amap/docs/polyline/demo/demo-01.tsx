import { useState } from 'react';
import { Map, Polyline } from '@pansy/react-amap';

const randomPath = () => ({
  longitude: 60 + Math.random() * 50,
  latitude: 10 + Math.random() * 40,
})

export default () => {
  const [visible, setVisible] = useState<boolean>(true);
  const [draggable, setDraggable] = useState<boolean>(true);
  const [path, setPath] = useState<{ longitude: number, latitude: number}[]>(Array(5).fill(true).map(randomPath));

  const toggleVisible = () => {
    setVisible((prev) => !prev);
  }

  const changePath = () => {
    setPath(Array(5).fill(true).map(randomPath))
  }

  const toggleDraggable = () => {
    setDraggable((prev) => !prev);
  }

  return (
    <div style={{ height: 500 }}>
      <Map zoom={4}>
        <Polyline
          path={path}
          draggable={draggable}
          visible={visible}
        />
      </Map>
      <button onClick={toggleVisible}>Toggle Visible</button>
      <button onClick={toggleDraggable}>Toggle Draggable</button>
      <button onClick={changePath}>Change Path</button>
    </div>
  );
};

