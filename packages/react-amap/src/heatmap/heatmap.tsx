import React, { useRef, useEffect, useImperativeHandle } from 'react';
import { useMap } from '../map';
import { usePropsReactive } from '../hooks';
import { buildCreateOptions } from '../utils/control';
import type { HeatmapProps } from './types';
import { allProps, converterMap, setterMap } from './config';

export const Heatmap = React.forwardRef<AMap.Heatmap, HeatmapProps>((props = {}, ref) => {
  const { map } = useMap();
  const instanceObj = useRef<AMap.Heatmap>(null);

  const { onInstanceCreated } = usePropsReactive<AMap.Heatmap, HeatmapProps>(
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
      map.plugin(['AMap.Heatmap'], () => {
        const options = buildCreateOptions<HeatmapProps, AMap.Heatmap.Options>(
          props,
          allProps,
          converterMap,
        );
        instanceObj.current = new AMap.Heatmap(map, options);
        if (props.dataSet) {
          instanceObj.current.setDataSet(props.dataSet)
        }
        resolve();
      });
    });
  }

  return null;
});
