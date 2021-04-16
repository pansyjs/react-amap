import React from 'react';
import { render } from 'react-dom';
import { ClusterProps } from './config';
import { isFun } from '../utils';
import type { MarkersProps, MarkerClustererOptions } from './types';

const defalutOptions = {
  minClusterSize: 2,
  zoomOnClick: true,
  maxZoom: 18,
  gridSize: 60,
  averageCenter: true
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
  mapCluster: AMap.MarkerClusterer,
  useCluster: MarkersProps['useCluster']
): Promise<AMap.MarkerClusterer> => {
  if (mapCluster) {
    return Promise.resolve(mapCluster);
  }
  const config: MarkerClustererOptions = (typeof useCluster === 'boolean') ? {} : useCluster;
  return new Promise((resolve) => {
    map.plugin(['AMap.MarkerClusterer'], () => {
      resolve(createClusterPlugin(map, config, useCluster));
    });
  });
}

const createClusterPlugin = (map, config: MarkerClustererOptions, useCluster) => {
  const options: MarkerClustererOptions = {};

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

  const markerClusterer = new window.AMap.MarkerClusterer(map, [], options);

  let events: Record<string, any>= {};
    if ('events' in config) {
      events = config.events;
      if ('created' in events) {
        events.created?.(markerClusterer);
      }
    }

  markerClusterer.on('click', (e) => {
    if (useCluster && useCluster['zoomOnClick']) {
      // 执行高德默认逻辑
    } else {
      if (isFun(events.click)) {
        events.click(e);
      }
    }
  });

  return Promise.resolve(markerClusterer);
}
