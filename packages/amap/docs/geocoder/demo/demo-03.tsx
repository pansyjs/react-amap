/**
 * title: 获取Geocoder实例
 * desc: 可通过 ref 和 created 事件获取实例
 */
import { useRef } from 'react';
import { Geocoder, APILoader } from '@pansy/react-amap';

export default () => {
  const geocoderRef = useRef<AMap.Geocoder>();

  return (
    <div>
      <APILoader>
        <Geocoder
          ref={geocoderRef}
          events={{
            created: (instance) => {
              console.log(instance);
            }
          }}
        />
      </APILoader>
    </div>
  );
};

