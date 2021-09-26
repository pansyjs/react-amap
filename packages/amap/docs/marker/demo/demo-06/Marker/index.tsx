import React from 'react';
import { Avatar } from 'antd';
import { AntDesignOutlined } from '@ant-design/icons';
import { Marker as MapMarker } from '@pansy/react-amap';
import { MarkerProps } from '@pansy/react-amap/es/marker/types';
import styles from './index.less';

export const Marker: React.FC<MarkerProps> = (props) => {
  console.log(props);
  return (
    <MapMarker {...props}>
      <Avatar
        className={styles.marker}
        icon={<AntDesignOutlined />}
      />
    </MapMarker>
  )
}
