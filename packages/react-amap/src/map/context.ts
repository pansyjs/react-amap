import React from 'react';

export interface MapContextProps {
  map: AMap.Map;
  AMap: typeof AMap;
}

export const MapContext = React.createContext<MapContextProps>({} as MapContextProps);

export const useMap = () => {
  return React.useContext(MapContext);
};
