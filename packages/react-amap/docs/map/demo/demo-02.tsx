/**
  * desc: 可以通过events属性给地图绑定事件；
  */
// @ts-ignore
import { Map } from '@pansy/react-amap';

export default () => {
  const events = {
    created: (map) => { console.log(map) },
    click: () => { console.log('You Clicked The Map'); }
  }

  return (
    <div style={{ height: 500 }}>
      <Map events={events} />
    </div>
  );
};

