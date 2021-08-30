import { useState } from 'react';
import { Button } from 'antd';
import { Map, ToolBar } from '@pansy/react-amap';

export default () => {
  const [visible, setVisible] = useState<boolean>(true);

  const changeVisible = () => {
    setVisible((prev) => !prev)
  }

  return (
    <div style={{ height: 500 }}>
      <Map>
        <ToolBar
          position={{
            top: '110px',
            right: '40px'
          }}
          visible={visible}
        />
      </Map>

      <Button onClick={changeVisible}>Change Visible</Button>
    </div>
  );
};
