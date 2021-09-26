import { useState } from 'react';
import { MarkerProps } from '@pansy/react-amap/es/marker/types';
import { MapEventMap } from '@pansy/react-amap/es/map/types';
import { getServiceToken } from './utils';

const randomLnglat = () => [
  100 + Math.random() * 20,
  30 + Math.random() * 20
];

const randomMarker = (len = 10) => (
  Array(len).fill(true).map((item, index) => ({
    position: randomLnglat(),
    extData: index
  }))
);

export const useMapService = () => {
  /** 标记点数据 */
  const [list, setList] = useState(randomMarker() as MarkerProps[]);

  const mapEventMap: MapEventMap = {
    created: obj => {
      console.log(obj);
    },
  };

  return {
    list,
    mapEventMap,
  };
};

export const MapService = getServiceToken(useMapService);
