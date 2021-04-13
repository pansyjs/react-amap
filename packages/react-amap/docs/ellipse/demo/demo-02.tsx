import { Map, Ellipse } from '@pansy/react-amap';

export default () => {

  const events = {
    created: (ellipse) => {
      console.log('创建事件');
      console.log(ellipse);
    },
    click: () => {
      console.log('点击事件');
    }
  };


  return (
    <div style={{ height: 500 }}>
      <Map zoom={4}>
        <Ellipse
          events={events}
          center={[116.433322, 39.900255]}
          radius={[1000000, 200000]}
        />
      </Map>
    </div>
  );
};

