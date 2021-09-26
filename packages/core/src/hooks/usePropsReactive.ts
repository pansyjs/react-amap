import React, { useState, useEffect, useRef } from 'react';
import { toCapitalString } from '../utils';
import { usePrevious } from './usePrevious';

export interface Options {
  setterMap?: Record<string, Function>;
  converterMap?: Record<string, Function>;
}

/**
 * 处理参数变化
 * */
export function usePropsReactive<P extends object = {}>(
  props: P,
  instanceRef: React.MutableRefObject<any>,
  {
    setterMap = {},
    converterMap = {}
  }: Options = {}
) {
  /** 上一次渲染时 Props 值 */
  const prevProps = usePrevious(props) ?? {} as P;
  /** 已经注册的事件 */
  const registeredEvents = useRef<string[]>([]);
  /** 实例是否已经创建成功 */
  const [loaded, setLoaded] = useState<boolean>(false);

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

        try {
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
        } catch (err) {}
      }
    },
    []
  )

  /**
   * 影响实例创建事件
   * @param instance
   */
  const onInstanceCreated = (instance?: any) => {
    setLoaded(true);
    if ('events' in props && instance) {
      props['events'].created?.(instance);
    }
    reactivePropChange(props, false)
  }

  /**
   * 对参数变化进行处理
   * @param nextProps
   * @param shouldDetectChange
   * @returns
   */
  const reactivePropChange = (nextProps = {}, shouldDetectChange = true) => {
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

  /**
   * 处理事件绑定
   * @param props
   */
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

  /**
   * 检查参数变化
   * @param key
   * @param nextProps
   * @param oldProps
   * @returns
   */
  const detectPropChange = (key: string, nextProps, oldProps) => {
    return nextProps[key] !== oldProps[key]
  }

  return {
    loaded,
    prevProps,
    onInstanceCreated
  }
}
