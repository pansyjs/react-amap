import { useState, useEffect, useRef } from 'react';
import { Map, useMap } from '@pansy/react-amap';
import { PathSimplifier } from '@pansy/react-amap-ui';
import { data } from './config';

import type { PathSimplifierProps } from '@pansy/react-amap-ui/es/path-simplifier';

const PathSimplifierDemo = (props: PathSimplifierProps) => {
  const { map } = useMap();
  const navigator = useRef<AMap.AMapUI.PathNavigator>();
  const AMapPathSimplifier = useRef<AMap.AMapUI.PathSimplifier>();
  const [pathSimplifier, setPathSimplifier] = useState<AMap.AMapUI.PathSimplifier>();

  useEffect(
    () => {
      if (pathSimplifier && AMapPathSimplifier.current) {
        pathSimplifier.setData(data);

        if (!navigator.current) {
          navigator.current = pathSimplifier.createPathNavigator(0, {
            // 巡航速度，单位千米/小时
            speed: 1000000,
            pathNavigatorStyle: {
              width: 10,
              height: 10,
              // @ts-ignore
              content: AMapPathSimplifier.current.Render.Canvas.getImageContent(
                'https://tdesign.gtimg.com/demo/demo-image-1.png',
                function onload() {
                  pathSimplifier?.renderLater();
                },
              )
            },
          });

          navigator.current.start();
        }
      }

      if (map && pathSimplifier) {
        map.on('zoomchange', handleMapZoomChange)
      };

      return () => {
        map && map.off('zoomchange', handleMapZoomChange)
      }
    },
    [pathSimplifier, AMapPathSimplifier.current]
  );

  const handleMapZoomChange = () => {
    const zoom = map.getZoom();

    if (navigator.current && AMapPathSimplifier.current) {
      if (zoom <= 4) {
        navigator.current.setOption('pathNavigatorStyle', {
          ...navigator.current.getOption('pathNavigatorStyle'),
          width: 50,
          height: 50,
        })

        pathSimplifier.renderLater();
      }
    }
  }

  return (
    <PathSimplifier
      zIndex={100}
      getPath={(pathData) => {
        return pathData.path;
      }}
      getHoverTitle={(pathData, pathIndex, pointIndex) => {
        if (pointIndex >= 0) {
          return `${pathData.name}，点：${pointIndex}/${pathData.path.length}`;
        }

        return `${pathData.name}，点数量${pathData.path.length}`;
      }}
      events={{
        init: (PathSimplifier) => {
          AMapPathSimplifier.current = PathSimplifier;
        },
        created: (instance) => {
          setPathSimplifier(instance);
        }
      }}
      {...props}
    />
  )
}

export default () => {
  return (
    <div style={{ height: 500 }}>
      <Map AMapUI={{}} zoom={4}>
        <PathSimplifierDemo />
      </Map>
    </div>
  );
};

