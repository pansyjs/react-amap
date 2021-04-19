import React from 'react';
import { Button } from 'antd';
import PlusOutlined from '@ant-design/icons/PlusOutlined';
import MinusOutlined from '@ant-design/icons/MinusOutlined';
import { Map, useMap } from '@pansy/react-amap';

 const MyMapComponent = () => {
  const { map } = useMap();

  const wrapperStyle: React.CSSProperties = {
    position: 'absolute',
    top: '10px',
    left: '10px'
  }

  const zoomIn = () => map.zoomIn()
  const zoomOut = () => map.zoomOut()

  return (
    <div style={wrapperStyle} id="zoom-ctrl">
      <Button icon={<PlusOutlined />} onClick={zoomIn}/>
      <Button icon={<MinusOutlined />} onClick={zoomOut} />
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

