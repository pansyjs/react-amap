import { useState } from 'react';
import { Avatar } from 'antd';
import { AntDesignOutlined } from '@ant-design/icons';
import { Map, MarkerCluster } from '@pansy/react-amap';

const randomLnglat = () => [
  100 + Math.random() * 20,
  30 + Math.random() * 20
] as AMap.MarkerCluster.DataOptions['lnglat'];

const randomMarker = (len = 10) => (
  Array(len).fill(true).map((item, index) => ({
    lnglat: randomLnglat(),
    extData: index
  }))
);

export default () => {
  const [list] = useState(randomMarker());

  return (
    <div style={{ height: 500 }}>
      <Map zoom={4}>
        <MarkerCluster
          data={list}
          render={
            <Avatar
              style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}
              icon={<AntDesignOutlined />}
            />
          }
          renderCluster={({ count, list = [] }) => {
            return (
              <Avatar
                style={{ backgroundColor: '#87d068' }}
              >
                {count}
              </Avatar>
            )
          }}
        />
      </Map>
    </div>
  );
};

