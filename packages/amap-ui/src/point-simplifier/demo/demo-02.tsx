import { useState, useEffect, useRef } from 'react';
import { Map } from '@pansy/react-amap';
import { PointSimplifier } from '@pansy/react-amap-ui';

export default () => {
  const [data, setData] = useState<string[][]>([]);
  const pointSimplifierIns = useRef<AMap.AMapUI.PointSimplifier>();

  useEffect(
    () => {
      fetch('https://a.amap.com/amap-ui/static/data/10w.txt', {
        method: 'GET',
      })
        .then(response => {
          if (!response.ok) {
            throw new Error("HTTP error " + response.status);
          }
          return response.text();
        })
        .then((csv) => {
          const list = csv.split('\n').slice(0, 5000).map(item => item.split(','));

          setData(list);
        })
    },
    []
  )

  return (
    <div style={{ height: 500 }}>
      <Map AMapUI={{}} zoom={4}>
        <PointSimplifier
          data={data}
          zIndex={300}
          getPosition={(item) => {
            if (!item) {
              return null;
            }

            return item.map(parseFloat);
          }}
          getHoverTitle={(_, index) => {
            return `序号: ${index}`;
          }}
          getRenderOptions={(PointSimplifier) => {
            return {
              pointStyle: {
                content: PointSimplifier.Render.Canvas.getImageContent(
                  'https://webapi.amap.com/theme/v1.3/markers/n/mark_b1.png',
                  function onload() {
                    pointSimplifierIns.current?.renderLater();
                  },
                  function onerror(e) {
                    alert('图片加载失败！');
                  }
                ),
                width: 19,
                height: 31,
                offset: ['-50%', '-100%'],
                fillStyle: null,
                strokeStyle: null
              }
            }
          }}
          events={{
            created: (instance) => {
              pointSimplifierIns.current = instance;
            }
          }}
        />
      </Map>
    </div>
  );
};

