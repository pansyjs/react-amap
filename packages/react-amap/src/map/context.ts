import React from 'react';

export interface MapContextProps {
  map: AMap.Map;
}

export const MapContext = React.createContext<MapContextProps>({} as MapContextProps);

export const useMap = () => {
  const context = React.useContext(MapContext);
  return context;
};
