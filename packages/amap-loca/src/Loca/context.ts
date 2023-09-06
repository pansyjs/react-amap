import { useContext, createContext }  from 'react';

export interface LocaContextProps {
  loca: Loca.Container;
}

export const LocaContext = createContext<LocaContextProps>({} as LocaContextProps);

export const useLoca = () => {
  return useContext(LocaContext);
};
