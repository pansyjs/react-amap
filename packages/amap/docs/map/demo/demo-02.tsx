/**
  * desc: 可以通过events属性给地图绑定事件；
  */
import { message } from 'antd';
import { Map } from '@pansy/react-amap';
import { MapProps } from '@pansy/react-amap/es/map';

export default () => {
  const mapEvents: MapProps['events'] = {
    click: (e) => { message.info(`点击的坐标为${e.lnglat}`) }
  }

  return (
    <div style={{ height: 500 }}>
      <Map events={mapEvents} />
    </div>
  );
};

