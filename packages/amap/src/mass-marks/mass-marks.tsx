import React, { useRef, useEffect, useImperativeHandle } from 'react';
import { useMap } from '../map';
import { usePropsReactive } from '../utils';
import type { MassMarksProps } from './types';
import { converterMap, setterMap, allProps } from './config';

export const MassMarks = React.forwardRef<AMap.MassMarks, MassMarksProps>((props = {}, ref) => {
  const { map } = useMap();
  const massMarks = useRef<AMap.MassMarks>(null);

  const { loaded, onInstanceCreated } = usePropsReactive(
    props,
    massMarks,
    {
      setterMap,
      converterMap
    }
  );

  useEffect(
    () => {
      if (map) {
        createInstance().then(() => {
          massMarks.current.setMap(map)
          onInstanceCreated?.(massMarks.current)
        });
      }
    },
    [map]
  );

  useImperativeHandle(
    ref,
    () => massMarks.current,
    [loaded]
  );

  const buildCreateOptions = () => {
    const options: AMap.MassMarks.Options = {};

    const getSetterValue = (key: string, props: AMap.MassMarks.Options) => {
      if (key in converterMap) {
        return converterMap[key](props[key])
      }
      return props[key];
    }

    allProps.forEach((key) => {
      if (key === 'data') {
        return;
      }
      if (key in props) {
        options[key] = getSetterValue(key, props)
      }
    });

    return options;
  }

  const createInstance = () => {
    const opts = buildCreateOptions();

    massMarks.current = new AMap.MassMarks([], opts);
    return Promise.resolve();
  }

  return null;
});

MassMarks.defaultProps = {
  visible: true,
}
