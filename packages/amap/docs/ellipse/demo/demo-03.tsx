import { Map, Ellipse } from '@pansy/react-amap';

export default () => {
  return (
    <div style={{ height: 500 }}>
      <Map zoom={4}>
        <Ellipse
          center={[116.433322, 39.900255]}
          radius={[1000000, 200000]}
          style={{
            strokeOpacity: 0.2,
            strokeWeight: 6,
            strokeColor: '#FF33FF',
            strokeStyle: 'dashed',
            strokeDasharray: [10, 10],
            fillOpacity: 0.4,
            fillColor: '#1791fc'
          }}
        />
      </Map>
    </div>
  );
};

