import { useState } from 'react';
// @ts-ignore
import { Map, Rectangle } from '@pansy/react-amap';

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
      <button onClick={() => { toggleVisible() }}>Toggle Visible</button>
      <button onClick={() => { changeStyle() }}>Change Style</button>
    </div>
  );
};

