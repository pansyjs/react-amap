import { useRef } from 'react';
import { Map, ContextMenu } from '@pansy/react-amap';

export default () => {
  const map = useRef<AMap.Map>();
  const handleMenu = (type: string) => {
    if (map.current) {
      switch(type) {
        case 'zoomIn': map.current.zoomIn(); break;
        case 'zoomOut': map.current.zoomOut(); break;
        case 'center': map.current.setZoomAndCenter(4, [108.946609, 34.262324]); break;
      }
    }
  }

  return (
    <div style={{ height: 500 }}>
      <Map events={{ created: (mapIns) => { map.current = mapIns; } }}>
        <ContextMenu>
          <ContextMenu.Item text="放大一级" onClick={() => { handleMenu('zoomIn') }} />
          <ContextMenu.Item text="缩小一级" onClick={() => handleMenu('zoomOut')} />
          <ContextMenu.Item text="缩放至全国范围" onClick={() => handleMenu('center')} />
        </ContextMenu>
      </Map>
    </div>
  );
};

