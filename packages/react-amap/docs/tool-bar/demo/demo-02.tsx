import { useState } from 'react';
import { Map, ToolBar } from '@pansy/react-amap';

export default () => {
  const [visible, setVisible] = useState<boolean>(true);
  const [ruler, setRuler] = useState<boolean>(true);
  const [direction, setDirection] = useState<boolean>(true);
  const [offset, setOffset] = useState<ReactAMap.Offset>({ x: 10, y: 10 });

  const changeCenter = () => {
    setOffset({
      x: 50,
      y: 50
    })
  }

  const changeVisible = () => {
    setVisible((prev) => !prev)
  }

  const changeDirection = () => {
    setDirection((prev) => !prev)
  }

  const changeRuler = () => {
    setRuler((prev) => !prev)
  }

  return (
    <div style={{ height: 500 }}>
      <Map>
        <ToolBar
          position="RB"
          offset={offset}
          ruler={ruler}
          visible={visible}
          direction={direction}
        />
      </Map>
      <button onClick={changeCenter}>Change Offset</button>
      <button onClick={changeVisible}>Change Visible</button>
      <button onClick={changeDirection}>Change Direction</button>
      <button onClick={changeRuler}>Change Ruler</button>
    </div>
  );
};
