import React, { useRef, useEffect, useImperativeHandle } from 'react';
import { useMap } from '../map';
import { usePropsReactive } from '../utils';
import { buildCreateOptions, renderEditor } from '../utils/overlay';
import { allProps, setterMap, converterMap } from './config';
import type { BezierCurveProps } from './types';

export const BezierCurve = React.forwardRef<AMap.BezierCurve, React.PropsWithChildren<BezierCurveProps>>((props = {}, ref) => {
  const { map, AMap } = useMap();
  const instanceObj = useRef<AMap.BezierCurve>(null);

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
      if (map) {
        createInstance().then(() => {
          onInstanceCreated?.(instanceObj.current)
        });
      }
    },
    [map]
  );

  useImperativeHandle(
    ref,
    () => instanceObj.current,
    [instanceObj.current, loaded]
  );

  const createInstance = () => {
    const options = buildCreateOptions<BezierCurveProps, AMap.BezierCurve.Options>(
      props,
      allProps,
      converterMap
    );
    options.map = map;
    instanceObj.current = new AMap.BezierCurve(options);
    return Promise.resolve();
  }

  return loaded
    ? renderEditor<AMap.BezierCurve>(props.children, {
        key: 'bezierCurve',
        instance: instanceObj.current,
        map: map
      })
    : null
});
