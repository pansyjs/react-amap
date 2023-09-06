import React, { useEffect, useRef } from 'react';
import { useMap } from '@pansy/react-amap';

interface BaseLocaProps {
  onCreate?: (loca: Loca.Container) => void;
  children?: React.ReactNode;
}

export const BaseLoca: React.FC<BaseLocaProps> = (
  props = {},
) => {
  const { onCreate } = props;
  const { map } = useMap();
  const locaIns = useRef<Loca.Container>();

  useEffect(() => {
    if (map) {
      locaIns.current = new window.Loca.Container({
        map,
      });
      onCreate?.(locaIns.current)
    }
  }, [map])

  return (
    <>{props.children}</>
  );
}
