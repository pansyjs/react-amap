/**
  * desc: 请使用封装好的插件组件
  */
 import { Map, MapType, Scale } from '@pansy/react-amap';

 export default () => {
   return (
     <div style={{ height: 500 }}>
       <Map>
          <MapType />
          <Scale />
       </Map>
     </div>
   );
 };
