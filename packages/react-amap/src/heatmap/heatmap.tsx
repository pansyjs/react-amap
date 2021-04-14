import React, { useRef, useEffect, useImperativeHandle } from 'react';
import { useMap } from '../map';
import { usePropsReactive } from '../hooks';
import { buildCreateOptions } from '../utils/control';
import type { HeatmapProps, HeatmapType } from './types';
import { allProps, converterMap, setterMap } from './config';

const Heatmap: HeatmapType = (props = {}, ref) => {
  const { map } = useMap();
  const instanceObj = useRef<AMap.Heatmap>(null);

  // @ts-ignore
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
}

export default React.forwardRef(Heatmap);
