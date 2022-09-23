import { Map, Marker } from '@pansy/react-amap';

const styleA = {
  border: '1px solid #000',
  color: '#fff',
  backgroundColor: '#000',
  padding: '6px',
}

export default () => {
  return (
    <div style={{ height: 500 }}>
      <Map zoom={4}>
        <Marker
          position={{
            longitude: 121,
            latitude: 36
          }}
          render={() => {
            return <div style={styleA}>A</div>
          }}
        />
      </Map>
    </div>
  );
};

