import React, { useState, useImperativeHandle } from 'react';
import { APILoader, APILoaderProps } from '../api-loader';
import { BaseMap } from './map';
import { MapContext } from '../context';
import { MapProps as BaseMapProps } from './types';

export interface MapProps extends Omit<APILoaderProps, 'key'>, BaseMapProps {
  mapKey?: string;
}

export const Map = React.forwardRef<AMap.Map, React.PropsWithChildren<MapProps>>(({
  mapKey,
  version,
  plugins,
  AMapUI,
  Loca,
  loading,
  onMapCreate,
  ...rest
}, ref) => {
  const [aMap, setAMap] = useState<typeof AMap>();
  const [map, setMap] = useState<AMap.Map>();

  useImperativeHandle(
    ref,
    () => map,
    [map]
  );

  return (
    <MapContext.Provider
      value={{
        AMap: aMap,
        map
      }}
    >
      <APILoader
        mapKey={mapKey}
        version={version}
        plugins={plugins}
        Loca={Loca}
        AMapUI={AMapUI}
        loading={loading}
        onCreate={(obj) => {
          setAMap(obj);
        }}
      >
        <BaseMap
          loading={loading}
          {...rest}
          onMapCreate={(obj) => {
            setMap(obj);
          }}
        />
      </APILoader>
    </MapContext.Provider>
  )
})

export { useMap } from '../context';
