import React from 'react';
import { render } from 'react-dom';
import { ClusterProps } from './config';
import { isFun } from '../utils';
import type { MarkersProps, MarkerClusterOptions } from './types';

const defalutOptions = {
  maxZoom: 18,
  gridSize: 60,
  averageCenter: true,
  zoomOnClick: true,
};

/**
 * 加载高德聚合插件
 * @param map
 * @param mapCluster
 * @param options
 * @returns
 */
export const loadClusterPlugin = (
  map: AMap.Map,
  mapCluster: AMap.MarkerCluster,
  useCluster: MarkersProps['useCluster']
): Promise<AMap.MarkerCluster> => {
  if (mapCluster) {
    return Promise.resolve(mapCluster);
  }
  const config: MarkerClusterOptions = (typeof useCluster === 'boolean') ? {} : useCluster;
  return new Promise((resolve) => {
    map.plugin(['AMap.MarkerCluster'], () => {
      resolve(createClusterPlugin(map, config, useCluster));
    });
  });
}

const createClusterPlugin = (map, config: MarkerClusterOptions, useCluster) => {
  const options: MarkerClusterOptions = {};

  ClusterProps.forEach((key) => {
    if (key in config) {
      options[key] = config[key];
    } else {
      options[key] = defalutOptions[key];
    }
  });

  // 扩展 render 方法，支持 react 组件
  if ('render' in config && isFun(config.render)) {
    options.renderClusterMarker = ({ count, marker }) => {
      const result = config.render();

      if (result && React.isValidElement(result)) {
        const contentWrapper = document.createElement('div');

        marker.setContent(contentWrapper);

        const children = React.cloneElement(result, {
          count,
          marker
        });

        render(<div>{children}</div>, contentWrapper)
      }
    }
  }

  const markerCluster = new window.AMap.MarkerCluster(map, [], options);

  let events: Record<string, any>= {};
    if ('events' in config) {
      events = config.events;
      if ('created' in events) {
        events.created?.(markerCluster);
      }
    }

  markerCluster.on('click', (e) => {
    if (useCluster && options.zoomOnClick) {
      /** 支持 v1 zoomOnClick 功能 */
      map.setCenter(e.lnglat);
      map.zoomIn();
    } else {
      if (isFun(events.click)) {
        events.click(e);
      }
    }
  });

  return Promise.resolve(markerCluster);
}
