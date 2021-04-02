import React from 'react';
import { Map, useMap } from '@pansy/react-amap';

 const MyMapComponent = () => {
  const { map } = useMap();

  const wrapperStyle: React.CSSProperties = {
    position: 'absolute',
    top: '10px',
    left: '10px',
    background: '#fff',
    padding: '5px',
    border: '1px solid #333'
  }

  const spanStyle: React.CSSProperties = {
    display: 'inline-block',
    height: '30px',
    lineHeight: '30px',
    width: '30px',
    textAlign: 'center',
    borderRadius: '50%',
    margin: '0 5px',
    cursor: 'pointer',
    background: '#333',
    color: '#fff',
    fontSize: '16px',
    border: '1px solid #333'
  }

  const zoomIn = () => map.zoomIn()
  const zoomOut = () => map.zoomOut()

  return (
    <div style={wrapperStyle} id="zoom-ctrl">
      <span style={spanStyle} onClick={zoomIn}>+</span>
      <span style={spanStyle} onClick={zoomOut}>-</span>
    </div>
  );
}

 export default () => {
   return (
     <div style={{ height: 500 }}>
       <Map>
         <MyMapComponent />
       </Map>
     </div>
   );
 };

