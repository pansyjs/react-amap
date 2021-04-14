import React, { useRef, useEffect, useImperativeHandle } from 'react';
import { useMap } from '../map';
import { usePropsReactive } from '../hooks';
import { buildCreateOptions } from '../utils/control';
import type { OverViewProps, OverViewType } from './types';
import { allProps, converterMap, setterMap } from './config';

const OverView: OverViewType = (props = {}, ref) => {
  const { map } = useMap();
  const instanceObj = useRef<AMap.OverView>(null);

  const { onInstanceCreated } = usePropsReactive<AMap.OverView, OverViewProps>(
    props,
    instanceObj,
    {
      setterMap,
      converterMap
    }
  );

  useEffect(
    () => {
      if (map) {
        createInstance().then(() => {
          map.addControl(instanceObj.current);
          onInstanceCreated?.(instanceObj.current)
        });
      }
    },
    [map]
  );

  useImperativeHandle(
    ref,
    () => instanceObj.current,
    [instanceObj.current]
  );

  const createInstance = () => {
    return new Promise<void>((resolve) => {
      map.plugin(['AMap.OverView'], () => {
        const options = buildCreateOptions<OverViewProps, AMap.OverView.Options>(
          props,
          allProps,
          converterMap,
        );
        instanceObj.current = new AMap.OverView(options);
        resolve();
      });
    });
  }

  return null;
}

export default React.forwardRef(OverView);
