/**
  * desc: 通过 status 属性可以统一配置其他几个布尔值属性, animateEnable, doubleClickZoom, dragEnable, isHotspot, jogEnable, keyboardEnable, resizeEnable, rotateEnable, scrollWheel, touchZoom, zoomEnable。它们既可以通过 status 属性提供对象统一配置，也可以单独提供属性配置。status优先级最高。
  */
import { useState } from 'react';
import { Button, message } from 'antd';
import { Map } from '@pansy/react-amap';
import type { MapStatus } from '@pansy/react-amap/es/map';

 export default () => {
   const [status, setStatus] = useState<MapStatus>({
    zoomEnable: true,
   });
   const [zoomEnable] = useState<boolean>(false);

   const toggleZoom = () => {
    const nextEnable = !status.zoomEnable;
    message.info(nextEnable ? '缩放已启用' : '缩放已禁用');

    setStatus({
      zoomEnable: nextEnable
    });
  }

   return (
     <div style={{ height: 500 }}>
       <Map status={status} zoomEnable={zoomEnable} />
       <Button onClick={toggleZoom}>Toggle Zoom Enable</Button>
     </div>
   );
 };
