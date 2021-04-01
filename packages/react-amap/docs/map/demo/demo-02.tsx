/**
  * desc: 可以通过events属性给地图绑定事件；
  */
import { Map } from '@pansy/react-amap';

export default () => {
  const mapEvents = {
    click: () => { console.log('You Clicked The Map'); }
  }

  return (
    <div style={{ height: 500 }}>
      <Map events={mapEvents} />
    </div>
  );
};

