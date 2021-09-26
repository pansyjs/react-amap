/**
  * title 基本示例
  * desc Map 的父组件必须具有宽度和高度；
  */
import { Map, MapType } from '@pansy/react-amap';

export default () => {
  return (
    <div style={{ height: 500 }}>
      <Map>
        <MapType />
      </Map>
    </div>
  );
};

