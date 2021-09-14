import React, { useContext } from 'react';
import { Marker } from './Marker';
import { MapService } from './useMapService';

export const Business: React.FC = () => {
  const { list = [] } = useContext(MapService);

  return (
    <div>
      {list.map((item, index) => {
        return (
          <Marker {...item} key={index} />
        )
      })}
    </div>
  )
}
