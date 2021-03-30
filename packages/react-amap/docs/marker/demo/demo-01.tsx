import { Map, Marker } from '@pansy/react-amap';

export default () => {
  return (
    <div style={{ height: 500 }}>
      <Map zoom={4}>
        <div>
          <Marker
            position={{longitude: 121, latitude: 36}}
          />
        </div>
      </Map>
    </div>
  );
};

