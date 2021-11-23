import React, { useRef, useEffect, useImperativeHandle } from 'react';
import { DistrictSearchProps } from './types';
import { usePropsReactive, getAMap } from '../utils';
import { buildCreateOptions } from '../utils/control';
import { allProps, setterMap, converterMap } from './config';

export const DistrictSearch = React.forwardRef<
  AMap.DistrictSearch,
  React.PropsWithChildren<DistrictSearchProps>
>((props = {}, ref) => {
  const instanceObj = useRef<AMap.DistrictSearch>(null);

  const { loaded, onInstanceCreated } = usePropsReactive(
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
    [loaded]
  );

  const createInstance = () => {
    return new Promise<AMap.DistrictSearch>((resolve) => {
      getAMap().plugin(['AMap.DistrictSearch'], () => {
        const options = buildCreateOptions<DistrictSearchProps, AMap.DistrictSearch.Options>(
          props,
          allProps,
          converterMap,
        );

        resolve(new AMap.DistrictSearch(options));
      })
    })
  }

  return null;
})
