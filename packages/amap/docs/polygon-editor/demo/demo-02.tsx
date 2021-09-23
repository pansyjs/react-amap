import { useRef } from 'react';
import { Map, Polygon, PolygonEditor } from '@pansy/react-amap';

export default () => {
  const polygonEditor = useRef<AMap.PolygonEditor>();
  const polygon1 = useRef<AMap.Polygon>();
  const polygon2 = useRef<AMap.Polygon>();

  const init = () => {
    if (
      polygonEditor.current &&
      polygon1.current &&
      polygon2.current
    ) {
      polygonEditor.current.addAdsorbPolygons([
        polygon1.current,
        polygon2.current
      ]);

      polygonEditor.current.setTarget(polygon1.current);
      polygonEditor.current.open();

    }
  }

  return (
    <div style={{ height: 500 }}>
      <Map center={[116.475334, 39.997534]} zoom={16}>
        <PolygonEditor
          events={{
            created: (obj) => {
              polygonEditor.current = obj;
              init();
            }
          }}
        />

        <Polygon
          path={[
            [116.474595, 40.001321],
            [116.473526, 39.999865],
            [116.476284, 40.000917],
          ]}
          events={{
            created: (obj) => {
              polygon1.current = obj;
              init();
            },
            dblclick: () => {
              polygonEditor.current.setTarget(polygon1.current);
              polygonEditor.current.open();
            }
          }}
        />

        <Polygon
          path={[
            [116.475334, 39.997534],
            [116.476627, 39.998315],
            [116.478603, 39.99879],
            [116.478529, 40.000296],
            [116.475082, 40.000151],
            [116.473421, 39.998717],
          ]}
          events={{
            created: (obj) => {
              polygon2.current = obj;
              init();
            },
            dblclick: () => {
              polygonEditor.current.setTarget(polygon2.current);
              polygonEditor.current.open();
            }
          }}
        />
      </Map>
    </div>
  );
};

