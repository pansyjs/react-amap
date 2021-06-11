import { useRef, useState } from 'react';
import { Map, Geocoder } from '@pansy/react-amap';
import { Button, Input, Space, message } from 'antd';

export default () => {
  const [location, setLocation] = useState<string>('116.39,39.9');
  const geocoderRef = useRef<AMap.Geocoder>();

  const getLocation = () => {
    const geocoder = geocoderRef.current;
    if (geocoder) {
      const lnglat  = location.split(',').map(i => +i) as [number, number];

      geocoder.getAddress(lnglat, (status, result) => {
        if (status === 'complete' && result.regeocode) {
          var address = result.regeocode.formattedAddress;
          message.info(`地址: ${address}`);
        }
      })
    }
  }

  return (
    <div>
      <Space>
        <Input
          value={location}
          style={{ width:  200 }}
          onChange={(e) => {
            setLocation(e.target.value);
          }}
        />
        <Button disabled={!location} onClick={getLocation}>
          经纬度 {'>'} 地址
        </Button>
      </Space>

      <Map isRender={false}>
        <Geocoder
          city="010"
          events={{
            created: (instance) => {
              geocoderRef.current = instance;
            }
          }}
        />
      </Map>
    </div>
  );
};

