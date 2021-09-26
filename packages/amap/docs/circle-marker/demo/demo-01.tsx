import { Map, CircleMarker } from '@pansy/react-amap';

const circleMarkerStyle = {
  strokeColor: '#fff',
  strokeWeight: 2,
  strokeOpacity: 0.5,
  fillColor: 'rgba(0,0,255,1)',
  fillOpacity: 0.5
};

export default () => {
  return (
    <div style={{ height: 500 }}>
      <Map zoom={4} center={[116.400274, 39.905812]}>
        <CircleMarker
          center={[116.407394, 39.904211]}
          radius={10+Math.random()*10}
          style={circleMarkerStyle}
        />
        <CircleMarker
          center={[113.26641, 23.132324]}
          radius={10+Math.random()*10}
          style={circleMarkerStyle}
        />
        <CircleMarker
          center={[115.26641, 27.132324]}
          radius={10+Math.random()*10}
          style={circleMarkerStyle}
        />
      </Map>
    </div>
  );
};

