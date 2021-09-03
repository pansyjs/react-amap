import React, { useRef, useEffect, useImperativeHandle } from 'react';
import { usePropsReactive } from '../hooks';
import { AutoCompleteProps } from './types';
import { buildCreateOptions } from '../utils/control';
import { allProps, setterMap, converterMap } from './config';

export const AutoComplete = React.forwardRef<
  AMap.AutoComplete,
  React.PropsWithChildren<AutoCompleteProps>
>((props = {}, ref) => {
  const instanceObj = useRef<AMap.AutoComplete>(null);

  const { loaded, onInstanceCreated } = usePropsReactive<AMap.AutoComplete, AutoCompleteProps>(
    props,
    instanceObj,
    {
      setterMap,
      converterMap
    }
  );

  useEffect(
    () => {
      createInstance().then((instance) => {
        instanceObj.current = instance;
        onInstanceCreated?.(instance);
      });
    },
    []
  );

  useImperativeHandle(
    ref,
    () => instanceObj.current,
    [instanceObj.current, loaded]
  );

  const createInstance = () => {
    return new Promise<AMap.AutoComplete>((resolve) => {
      AMap.plugin(['AMap.AutoComplete'], () => {
        const options = buildCreateOptions<AutoCompleteProps, AMap.AutoComplete.Options>(
          props,
          allProps,
          converterMap,
        );

        resolve(new AMap.AutoComplete(options));
      })
    })
  }

  return null;
})
