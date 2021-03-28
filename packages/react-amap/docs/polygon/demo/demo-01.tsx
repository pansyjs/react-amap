import { useState } from 'react';
// @ts-ignore
import { Map, Polygon } from '@pansy/react-amap';

export default () => {
  const [visible, setVisible] = useState<boolean>(true);
  const [draggable, setDraggable] = useState<boolean>(true);
  const [path, setPath] = useState([
    [116.403322, 39.920255],
    [116.410703, 39.897555],
    [116.402292, 39.892353],
    [116.389846, 39.891365]
  ]);

  const toggleVisible = () => {
    setVisible((prev) => !prev);
  }

  const toggleDraggable = () => {
    setDraggable((prev) => !prev);
  }

  return (
    <div style={{ height: 500 }}>
      <Map zoom={14} center={[116.400274, 39.905812]}>
        <Polygon
          path={path}
          draggable={draggable}
          visible={visible}
        />
      </Map>
      <button onClick={toggleVisible}>Toggle Visible</button>
      <button onClick={toggleDraggable}>Toggle Draggable</button>
    </div>
  );
};

