import { Map, Marker } from '@pansy/react-amap';

const styleB = {
  background: '#000',
  color: '#fff',
  padding: '5px'
}

export default () => {
  return (
    <div style={{ height: 500 }}>
      <Map
        center={{longitude: 121, latitude: 34}}
        zoom={6}
      >
        <Marker position={{longitude: 120, latitude: 35 }} />
        <Marker position={{longitude: 121, latitude: 35 }} >
          A
        </Marker>
        <Marker position={{longitude: 122, latitude: 35 }} >
          <div style={styleB}>B</div>
        </Marker>
        <Marker position={{longitude: 121, latitude: 34 }} >
          <div>MARKER</div>
          <div>WITH A LOT OF TEXT IN</div>
          <div>OBVIOUSLY NOT LIKE A MARKER</div>
        </Marker>
      </Map>
    </div>
  );
};

