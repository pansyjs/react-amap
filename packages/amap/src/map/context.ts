import { useContext, createContext }  from 'react';

export interface MapContextProps {
  map: AMap.Map;
  AMap: typeof AMap;
}

export const MapContext = createContext<MapContextProps>({} as MapContextProps);

export const useMap = () => {
  return useContext(MapContext);
};
