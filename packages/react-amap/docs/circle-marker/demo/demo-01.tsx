import { Map, CircleMarker } from '@pansy/react-amap';

export default () => {
  return (
    <div style={{ height: 500 }}>
      <Map zoom={4} center={[116.400274, 39.905812]}>
        <CircleMarker
          center={[116.407394, 39.904211]}
          radius={10+Math.random()*10}
          style={{
            strokeColor: '#fff',
            strokeWeight: 2,
            strokeOpacity: 0.5,
            fillColor: 'rgba(0,0,255,1)',
            fillOpacity: 0.5
          }}
          bubble={true}
          cursor='pointer'
          clickable= {true}
        />
        <CircleMarker
          center={[113.26641, 23.132324]}
          radius={10+Math.random()*10}
          style={{
            strokeColor: '#fff',
            strokeWeight: 2,
            strokeOpacity: 0.5,
            fillColor: 'rgba(0,0,255,1)',
            fillOpacity: 0.5
          }}
          zIndex={10}
          bubble={true}
          cursor='pointer'
          clickable= {true}
        />
      </Map>
    </div>
  );
};

