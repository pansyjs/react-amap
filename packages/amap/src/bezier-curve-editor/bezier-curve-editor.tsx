import React, { useRef, useEffect, useImperativeHandle } from 'react';
import { usePropsReactive } from '../utils';
import { useMap } from '../map';
import { setterMap, converterMap } from './config';
import type { BezierCurveEditorProps } from './types';

export const BezierCurveEditor = React.forwardRef<AMap.BezierCurveEditor, BezierCurveEditorProps>((props = {}, ref) => {
  const { map, AMap } = useMap();
  const instanceObj = useRef<AMap.BezierCurveEditor>(null);

  const { onInstanceCreated } = usePropsReactive(
    props,
    instanceObj,
    {
      setterMap,
      converterMap
    }
  );

  useEffect(
    () => {
      if (props.map && props.bezierCurve) {
        createInstance()
          .then(() => {
            onInstanceCreated?.(instanceObj.current)
          })
      }
    },
    [props.map, props.bezierCurve]
  );

  useImperativeHandle(
    ref,
    () => instanceObj.current,
    [instanceObj.current]
  );

  const createInstance = () => {
    return new Promise<void>((resolve) => {
      map.plugin(['AMap.BezierCurveEditor'], () => {
        instanceObj.current = new AMap.BezierCurveEditor(props.map, props.bezierCurve);
        resolve();
      });
    });
  }

  return null;
});
