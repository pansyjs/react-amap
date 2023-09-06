import React, { useState, useImperativeHandle, forwardRef } from 'react';
import { BaseLoca } from './Loca';
import { LocaContext } from './context';

export const Loca = forwardRef<Loca.Container, React.PropsWithChildren<{}>>((props, ref) => {
  const [loca, setLoca] = useState<Loca.Container>();

  useImperativeHandle(
    ref,
    () => loca,
    [loca]
  );

  return (
    <LocaContext.Provider
      value={{
        loca,
      }}
    >
      <BaseLoca
        {...props}
        onCreate={(ins) => {
          setLoca(ins);
        }}
      />
    </LocaContext.Provider>
  )
})

export { useLoca } from './context';
