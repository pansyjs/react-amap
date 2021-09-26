import { useState } from 'react';
import { Button } from 'antd';
import { Map } from '@pansy/react-amap';
import { PathSimplifier } from '@pansy/react-amap-ui';

export default () => {

  return (
    <div style={{ height: 500 }}>
      <Map AMapUI={{}} zoom={14} center={[116.397637, 39.900001]}>
        <PathSimplifier />
      </Map>
    </div>
  );
};

