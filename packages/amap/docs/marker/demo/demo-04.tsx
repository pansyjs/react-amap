import { Map, Marker } from '@pansy/react-amap';

const styleA = {
  border: '1px solid #000',
  color: '#fff',
  backgroundColor: '#000',
  padding: '6px',
}

const styleB = {
  border: '1px solid #fff',
  color: '#000',
  backgroundColor: '#fff',
  padding: '6px',
}

export default () => {
  const renderMarker = (extData) => {
    return <div style={styleA}>{extData.myLabel}</div>
  }

  const renderMarkerHover = (extData) => {
    return <div style={styleB}>{extData.myLabel}</div>
  }

  return (
    <div style={{ height: 500 }}>
      <Map zoom={4}>
        <div>
          <Marker
            position={{
              longitude: 121,
              latitude: 36
            }}
            events={{
              mouseover:(e) => {
                const marker = e.target;
                // TODO: 待解决
                // @ts-ignore
                marker.render(renderMarkerHover);
              },
              mouseout:(e) => {
                const marker = e.target;
                // @ts-ignore
                marker.render(renderMarker);
              }
            }}
            render={renderMarker}
            extData={{ myLabel: 'A' }}
          />
        </div>
      </Map>
    </div>
  );
};

