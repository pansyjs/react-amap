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

  // TODO: ref 获取不到需要排查下原因
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

export * from './config';
export * from './types';
export * from './context';
