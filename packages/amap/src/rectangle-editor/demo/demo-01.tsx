import { useState } from 'react';
import { Map, Rectangle, RectangleEditor } from '@pansy/react-amap';

export default () => {
  const [active, setActive] = useState<boolean>(true);

  const toggleActive = () => {
    setActive((prev) => !prev);
  }

  return (
    <div style={{ height: 500 }}>
      <Map zoom={4}>
        <Rectangle
          bounds={[
            [108.245573, 39.027206],
            [116.485319, 26.666506]
          ]}
        >
          <RectangleEditor active={active} />
        </Rectangle>
      </Map>
      <button onClick={() => { toggleActive() }}>Toggle Active</button>
    </div>
  );
};

