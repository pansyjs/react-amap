/**
  * title 基本示例
  */
import { Map, HawkEye } from '@pansy/react-amap';

export default () => {
  return (
    <div style={{ height: 500 }}>
      <Map>
        <HawkEye />
      </Map>
    </div>
  );
};

