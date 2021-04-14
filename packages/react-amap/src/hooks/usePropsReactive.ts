import React, { useState, useEffect, useRef } from 'react';
import { toCapitalString } from '../utils';
import { usePrevious } from './';

export type SetterMap = Record<string, Function>;
export type ConverterMap = Record<string, Function>;

interface Config {
  setterMap?: SetterMap;
  converterMap?: ConverterMap;
}

export function usePropsReactive<
  I extends ReactAMap.BaseInstance,
  P = {}
>( props: P, instanceRef: React.MutableRefObject<I>, config: Config = {}) {
  const prevProps = usePrevious(props) ?? {};
  const registeredEvents = useRef<string[]>([]);
  const [loaded, setLoaded] = useState<boolean>(false);
  const { setterMap = {}, converterMap = {} } = config;

  useEffect(
    () => {
      if (!instanceRef.current) return;
      reactivePropChange(props, true);
    },
    [props]
  )

  useEffect(
    () => {
      return () => {
        if (!instanceRef.current) return;

        if ('destroy' in instanceRef.current) {
          setTimeout(() => {
            instanceRef.current.destroy()
          }, 10);
        }

        if ('hide' in instanceRef.current) {
          instanceRef.current.hide();
        }

        if ('map' in props && 'setMap' in instanceRef.current) {
          instanceRef.current.setMap(null);
        }
      }
    },
    []
  )

  const onInstanceCreated = (instance: I) => {
    setLoaded(true);
    if ('events' in props) {
      props['events'].created?.(instance);
    }
    reactivePropChange(props, false)
  }

  const reactivePropChange = (nextProps = {}, shouldDetectChange: boolean = true) => {
    const instance = instanceRef.current;
    if (!instance) return;

    try {
      Object.keys(nextProps).forEach((key) => {
        if (key === 'events') {
          return createEventsProxy(nextProps)
        }

        let willReactive = true
        if (shouldDetectChange) {
          willReactive = detectPropChange(key, nextProps, prevProps)
        }
        if (!willReactive) return;

        let setterParam = nextProps[key];

        // 对值进行转换
        if (key in converterMap) {
          setterParam = converterMap[key](nextProps[key])
        }

        if (key in setterMap) {
          setterMap[key](setterParam, instance)
        } else {
          const trySetterName = `set${toCapitalString(key)}`;

          if (trySetterName in instance) {
            instance[trySetterName](setterParam);
          }
        }
      })
    } catch (err) {}
  }

  const createEventsProxy = (props) => {
    const instance = instanceRef.current;

    const events = Object.keys(props.events || {});

    events.length && events.forEach((event) => {
      if (registeredEvents.current.indexOf(event) === -1) {
        registeredEvents.current.push(event);
        instance.on(event, ((ev) => {
          return function(...args) {
            if (props.events && ev in props.events) {
              props.events[ev].apply(null, args)
            }
          }
        })(event));
      }
    })
  }

  const detectPropChange = (key: string, nextProps, oldProps) => {
    return nextProps[key] !== oldProps[key]
  }

  return {
    loaded,
    onInstanceCreated
  }
}
