import { useState } from 'react';
import { MapContext } from './context';
import { withPropsReactive } from '../utils';
import { MapProps } from './types';
import { InternalMap } from './map';

export const MapReactive = withPropsReactive<AMap.Map, MapProps>(InternalMap);

export const Map: React.FC<MapProps> = ({
  events,
  ...rest
}) => {
  const [mapInternal, setMapInternal] = useState<AMap.Map>(null);
  const nextEvents: MapProps['events'] = {
    created: (map) => {
      setMapInternal(map);
      events?.created(map);
    }
  }

  return (
    <MapContext.Provider value={{ map: mapInternal }}>
      <MapReactive events={nextEvents} {...rest} />
    </MapContext.Provider>
  )
}

export * from './map';
export * from './config';
export * from './types';
