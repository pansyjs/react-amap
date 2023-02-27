import { useState, useEffect, useRef } from 'react';
import { Map } from '@pansy/react-amap';
import { PointSimplifier } from '@pansy/react-amap-ui';

const colors = [
  '#0cc2f2',
  '#4fd2b1',
  '#90e36f',
  '#ffe700',
  '#ff9e00',
  '#ff6700',
  '#ff1800',
];

export default () => {
  const interval = useRef<ReturnType<typeof setInterval>>();
  const [data, setData] = useState<string[][]>([])
  const [pointSimplifier, setPointSimplifier] = useState<AMap.AMapUI.PointSimplifier>();

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

          setData(list)
        })
    },
    []
  )

  useEffect(
    () => {
      if (pointSimplifier) {
        interval.current = setInterval(() => {
          pointSimplifier.render();
        }, 500)
      }

      return () => {
        interval.current && clearInterval(interval.current)
      }
    },
    [pointSimplifier]
  );

  const renderOptions: AMap.AMapUI.PointSimplifier.Options['renderOptions'] = {
    eventSupport: false,
    pointStyle: {
      fillStyle: null,
      width: 5,
      height: 5
    },
    topNAreaStyle: null,
    getGroupId: () => {
      return Math.ceil(colors.length * Math.random());
    },
    groupStyleOptions: () => {
      const radius = 2 + 10 * Math.random();

      return {
        pointStyle: radius > 0
          ? {
            content: (ctx, x, y, width, height) => {
              const p = {
                x: x + width / 2,
                y: y + height / 2,
                radius: radius
              };

              ctx.beginPath();
              const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius);
              gradient.addColorStop(0, "rgba(7,120,249,0.8)");
              gradient.addColorStop(1, "rgba(7,120,249,0.1)");
              ctx.fillStyle = gradient;
              ctx.arc(p.x, p.y, p.radius, Math.PI * 2, 0);
              ctx.fill();
            },
            width: radius * 2,
            height: radius * 2
          }
          : null
        ,
        pointHardcoreStyle: {
          width: radius * 2 + 3,
          height: radius * 2 + 3
        }
      }
    }
  }

  return (
    <div style={{ height: 500 }}>
      <Map AMapUI={{}} zoom={4}>
        <PointSimplifier
          data={data}
          zIndex={115}
          autoSetFitView={false}
          getPosition={(item) => {
            if (!item) {
              return null;
            }

            return item.map(parseFloat);
          }}
          getHoverTitle={(item, index) => {
            return `序号: ${index}`;
          }}
          renderConstructor="GroupStyleRender"
          renderOptions={renderOptions}
          events={{
            created: (instance) => {
              setPointSimplifier(instance);
            }
          }}
        />
      </Map>
    </div>
  );
};

