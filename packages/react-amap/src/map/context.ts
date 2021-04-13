import React from 'react';

export interface MapContextProps {
  map: AMap.Map;
}

export const MapContext = React.createContext<MapContextProps>({} as MapContextProps);

export const useMap = () => {
  return React.useContext(MapContext);
};
