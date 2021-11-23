import { useState, useEffect } from 'react';
import { Map } from '@pansy/react-amap';
import { PathSimplifier } from '@pansy/react-amap-ui';
import { data } from './config';

export default () => {
  const [pathSimplifier, setPathSimplifier] = useState<AMap.AMapUI.PathSimplifier>();

  useEffect(
    () => {
      if (pathSimplifier) {
        pathSimplifier.setData(data);

        const navg1 = pathSimplifier.createPathNavigator(0, {
          loop: true, //循环播放
          speed: 1000000 //巡航速度，单位千米/小时
        });

        navg1.start();
      };
    },
    [pathSimplifier]
  );

  return (
    <div style={{ height: 500 }}>
      <Map AMapUI={{}} zoom={4}>
        <PathSimplifier
          zIndex={100}
          getPath={(pathData) => {
            return pathData.path;
          }}
          // autoSetFitView={false}
          getHoverTitle={(pathData, pathIndex, pointIndex) => {
            if (pointIndex >= 0) {
              return `${pathData.name}，点：${pointIndex}/${pathData.path.length}`;
            }

            return `${pathData.name}，点数量${pathData.path.length}`;
          }}
          renderOptions={{
            renderAllPointsIfNumberBelow: 100 //绘制路线节点，如不需要可设置为-1
          }}
          events={{
            created: (instance) => {
              setPathSimplifier(instance);
            }
          }}
        />
      </Map>
    </div>
  );
};

