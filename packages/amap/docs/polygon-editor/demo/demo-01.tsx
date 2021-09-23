import { useState } from 'react';
import { Button } from 'antd';
import { Map, Polygon, PolygonEditor } from '@pansy/react-amap';

export default () => {
  const [active, setActive] = useState<boolean>(true);
  const [path] = useState<AMap.ExpandPosition[]>([
    [116.403322, 39.920255],
    [116.410703, 39.897555],
    [116.402292, 39.892353],
    [116.389846, 39.891365]
  ]);

  const changeActive = () => {
    setActive(prev => !prev);
  }

  return (
    <div style={{ height: 500 }}>
      <Map zoom={14} center={[116.400274, 39.905812]}>
        <Polygon path={path}>
          <PolygonEditor active={active} />
        </Polygon>
      </Map>
      <Button onClick={() => { changeActive() }}>Random Active</Button>
    </div>
  );
};

