import { Map, Ellipse } from '@pansy/react-amap';

export default () => {
  return (
    <div style={{ height: 500 }}>
      <Map zoom={4}>
        <Ellipse
          center={[116.433322, 39.900255]}
          radius={[1000000, 200000]}
        />
      </Map>
    </div>
  );
};

