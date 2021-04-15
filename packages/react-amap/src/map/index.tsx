import React, { useState, useImperativeHandle } from 'react';
import { MapContext } from './context';
import { withPropsReactive, isFun } from '../utils';
import { MapType, MapProps } from './types';
import { InternalMap } from './map';

export const MapReactive = withPropsReactive<AMap.Map, MapProps>(InternalMap);

/** 支持通过ref获取地图实例 */
export const ForwardRefMap: MapType = (
  props,
  ref
) => {
  const { events = {}, ...rest } = props;
  const [mapInternal, setMapInternal] = useState<AMap.Map>(null);
  const nextEvents: MapProps['events'] = {
    ...events,
    created: (map) => {
      setMapInternal(map);
      if (isFun(events.created)) {
        events.created(map);
      }
    }
  }

  useImperativeHandle(
    ref,
    () => mapInternal,
    [mapInternal]
  );

  return (
    <MapContext.Provider value={{ map: mapInternal }}>
      <MapReactive events={nextEvents} {...rest} />
    </MapContext.Provider>
  )
}

export const Map = React.forwardRef(ForwardRefMap);

export type { MapProps } from './types';
export { useMap } from './context';
