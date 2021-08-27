import React, { useRef, useEffect, useImperativeHandle } from 'react';
import { useMap } from '../map';
import { usePropsReactive } from '../hooks';
import { buildCreateOptions } from '../utils/control';
import type { HeatmapProps } from './types';
import { allProps, converterMap, setterMap } from './config';

export const Heatmap = React.forwardRef<AMap.HeatMap, HeatmapProps>((props = {}, ref) => {
  const { map } = useMap();
  const instanceObj = useRef<AMap.HeatMap>(null);

  const { onInstanceCreated } = usePropsReactive<AMap.HeatMap, HeatmapProps>(
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
      map.plugin(['AMap.HeatMap'], () => {
        const options = buildCreateOptions<HeatmapProps, AMap.HeatMap.Options>(
          props,
          allProps,
          converterMap,
        );
        instanceObj.current = new AMap.HeatMap(map, options);
        if (props.dataSet) {
          instanceObj.current.setDataSet(props.dataSet)
        }
        resolve();
      });
    });
  }

  return null;
});
