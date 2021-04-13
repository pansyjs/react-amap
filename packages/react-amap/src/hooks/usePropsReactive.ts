import { useState, useEffect, useRef } from 'react';
import { toCapitalString } from '../utils';

export type SetterMap = Record<string, Function>;
export type ConverterMap = Record<string, Function>;

interface Config {
  setterMap?: SetterMap;
  converterMap?: ConverterMap;
}

export function usePropsReactive<I extends ReactAMap.BaseInstance, P = {}>(
  props: P,
  config: Config = {}
) {
  const instanceRef = useRef<I>(null);
  const registeredEvents = useRef<string[]>([]);
  const [loaded, setLoaded] = useState<boolean>(false);
  const { setterMap = {}, converterMap = {} } = config;

  useEffect(
    () => {
      reactivePropChange(props);

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
    [props]
  )

  const onInstanceCreated = (instance: I) => {
    instanceRef.current = instance;
    setLoaded(true);
    if ('events' in props) {
      props['events'].created?.(instance);
    }
    reactivePropChange(props);
  }

  const reactivePropChange = (nextProps = {}) => {
    const instance = instanceRef.current;
    if (!instance) return;

    try {
      Object.keys(nextProps).forEach((key) => {
        if (key === 'events') {
          return createEventsProxy(nextProps)
        }

        if (key === 'radius' || key === 'center') return;

        let setterParam = nextProps[key];

        // 对值进行转换
        if (key in converterMap) {
          setterParam = converterMap[key](nextProps[key])
        }

        if (key in setterMap) {
          console.log(`setterMap: ${key}`);
          setterMap[key](setterParam, instance)
        } else {
          const trySetterName = `set${toCapitalString(key)}`;

          if (trySetterName in instance) {
            console.log(trySetterName);
            console.log(setterParam);
            instance[trySetterName](setterParam);
          }
        }
      })
    } catch (err) {
      console.log(err);
    }
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
