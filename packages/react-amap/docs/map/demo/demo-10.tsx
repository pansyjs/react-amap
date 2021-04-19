/**
  * desc: 开启方式是设置viewMode属性为3D
  */
 import { Map, ControlBar } from '@pansy/react-amap';

 export default () => {
   return (
     <div style={{ height: 500 }}>
       <Map viewMode="3D">
         <ControlBar />
       </Map>
     </div>
   );
 };
