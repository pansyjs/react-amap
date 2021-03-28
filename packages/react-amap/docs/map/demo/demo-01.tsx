/**
  * desc: Map 的父组件必须具有宽度和高度；
  */
// @ts-ignore
import { Map } from '@pansy/react-amap';

export default () => {
  return (
    <div style={{ height: 500 }}>
      <Map />
    </div>
  );
};

