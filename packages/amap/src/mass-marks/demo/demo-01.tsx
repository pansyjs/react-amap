import { Map, MassMarks } from '@pansy/react-amap';
import { citys } from './data';

const Content = () => {
  const style = [
    {
      url: 'https://webapi.amap.com/images/mass/mass0.png',
      anchor: new AMap.Pixel(6, 6),
      size: new AMap.Size(11, 11),
      zIndex: 3,
    },
    {
      url: 'https://webapi.amap.com/images/mass/mass1.png',
      anchor: new AMap.Pixel(4, 4),
      size: new AMap.Size(7, 7),
      zIndex: 2,
    },
    {
      url: 'https://webapi.amap.com/images/mass/mass2.png',
      anchor: new AMap.Pixel(3, 3),
      size: new AMap.Size(5, 5),
      zIndex: 1,
    },
  ];

  return (
    <MassMarks
      data={citys}
      style={style}
      events={{
        click: (e) => {
          console.log(e);
        }
      }}
    />
  )
}

export default () => {
  return (
    <div style={{ height: 500 }}>
      <Map zoom={4}>
        <Content />
      </Map>
    </div>
  );
};

