import { useState } from 'react';
import { Map, InfoWindow } from '@pansy/react-amap';

const position = {
  longitude: 120,
  latitude: 30
}

export default () => {
  const [visible, setVisible] = useState<boolean>(true);
  const [value, setValue] = useState<number>(1);

  const closeWindow = () => {
    setVisible(false);
  }

  return (
    <div style={{ height: 500 }}>
      <Map center={position}>
        <InfoWindow
          position={position}
          visible={visible}
          isCustom
        >
          <div style={{ background: '#fff', padding: 16 }}>
            <h3>Window 1</h3>
            <p>This is a window</p>
            <p>Changing Value: {value}</p>
            <button onClick={closeWindow}>Close Window</button>
          </div>
        </InfoWindow>
      </Map>
      <button onClick={() => { setVisible(true) }}>Show Window</button>
    </div>
  );
};

