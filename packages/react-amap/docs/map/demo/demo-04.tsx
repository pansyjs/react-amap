/**
  * desc: 你可以在 Map 组件内部写其他的 DOM 组件，不过你需要自己给它定位；
  */
 import React from 'react';
 import { Map } from '@pansy/react-amap';

 const styleA: React.CSSProperties = {
  position: 'absolute',
  top: '10px',
  left: '10px',
  padding: '5px 10px',
  border: '1px solid #d3d3d3',
  backgroundColor: '#f9f9f9'
}

 export default () => {
   return (
     <div style={{ height: 500 }}>
       <Map>
        <div className="customLayer" style={styleA}>
            <h4>A Custom Layer</h4>
          </div>
       </Map>
     </div>
   );
 };

