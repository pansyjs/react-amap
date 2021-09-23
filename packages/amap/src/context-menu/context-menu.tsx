import React, { useRef, useEffect, useImperativeHandle } from 'react';
import { buildCreateOptions } from '../utils/control';
import { usePropsReactive } from '../utils';
import { useMap } from '../map';
import type { MapEventMap } from '../map/types';
import type { ContextMenuProps } from './types';
import { allProps, setterMap, converterMap } from './config';

export const ContextMenu = React.forwardRef<AMap.ContextMenu, ContextMenuProps>((props = {}, ref) => {
  const { map, AMap } = useMap();
  const instanceObj = useRef<AMap.ContextMenu>(null);

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
          map.on('rightclick', mapRightClick);
          onInstanceCreated?.(instanceObj.current);
        });
      }

      return () => {
        if (instanceObj.current) {
          instanceObj.current.off('rightclick', mapRightClick);
          map.remove(instanceObj.current);
        }
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
    const options = buildCreateOptions<ContextMenuProps, AMap.ContextMenu.Options>(
      props,
      allProps,
      converterMap
    );
    instanceObj.current = new AMap.ContextMenu(options);
    return Promise.resolve();
  }

  const mapRightClick: MapEventMap['rightclick'] = (e) => {
    if (instanceObj.current) {
      instanceObj.current.open(map, e.lnglat);
    }
  }

  const renderChildren = () => {
    const childs = React.Children.toArray(props.children);

    return (
      <>
        {
          childs.map((child, key) => {
            if (!React.isValidElement(child)) return null;
            return React.cloneElement(child, {
              ...child.props,
              map: map,
              contextMenu: instanceObj.current,
              key
            });
          })
        }
      </>
    );
  }

  return loaded ? renderChildren() : null
});
