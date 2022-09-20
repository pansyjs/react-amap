import { useState, useEffect } from 'react';
import { Map } from '@pansy/react-amap';
import { PathSimplifier } from '@pansy/react-amap-ui';
import { data } from './config';

import type { PathSimplifierProps } from '@pansy/react-amap-ui/es/path-simplifier';

const PathSimplifier1 = (props: PathSimplifierProps) => {
  const [pathSimplifier, setPathSimplifier] = useState<AMap.AMapUI.PathSimplifier>();

  useEffect(
    () => {
      if (pathSimplifier) {
        pathSimplifier.setData(data);

        const navg1 = pathSimplifier.createPathNavigator(0, {
          // loop: true, //循环播放
          speed: 1000000 //巡航速度，单位千米/小时
        });

        navg1.start();
      };
    },
    [pathSimplifier]
  );
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
       // @ts-ignore
      renderOptions={(PathSimplifier) => {
        return {
          renderAllPointsIfNumberBelow: 100, //绘制路线节点，如不需要可设置为-1
          pathNavigatorStyle: {
            content: PathSimplifier.Render.Canvas.getImageContent(
              'https://tdesign.gtimg.com/demo/demo-image-1.png',
              function onload() {
                // @ts-ignore
                pathSimplifier?.renderLater();
              },
            )
          },
        }
      }}
      events={{
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
        <PathSimplifier1 />
      </Map>
    </div>
  );
};

