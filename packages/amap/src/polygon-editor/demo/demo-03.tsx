import { useRef, useState } from 'react';
import { message } from 'antd';
import { Map, Polygon, PolygonEditor, OverlayGroup } from '@pansy/react-amap';

export default () => {
  const map = useRef<AMap.Map>();
  const currentPolygonPath = useRef<any[]>([]);
  const [paths] = useState<any[]>([
    [
      [116.474595, 40.001321],
      [116.473526, 39.999865],
      [116.476284, 40.000917],
    ],
    [
      [116.475334, 39.997534],
      [116.476627, 39.998315],
      [116.478603, 39.99879],
      [116.478529, 40.000296],
      [116.475082, 40.000151],
      [116.473421, 39.998717],
    ],
  ]);

  const polygonEditor = useRef<AMap.PolygonEditor>();
  const overlayGroup = useRef<AMap.OverlayGroup>();

  const init = (polygons: AMap.Polygon[]): void => {
    if (polygonEditor.current) {
      polygonEditor.current.addAdsorbPolygons(polygons);

      polygonEditor.current.setTarget(polygons[0]);
      polygonEditor.current.open();

      currentPolygonPath.current = polygons[0].getPath();

      overlayGroup.current.on('dblclick', handlerOverlayGroupDblclick);
    }
  }

  const handlerOverlayGroupDblclick = (event) => {
    const polygon = event.target;

    currentPolygonPath.current = polygon.getPath();

    polygonEditor.current.setTarget(polygon);
    polygonEditor.current.open();
  }

  /**
   * 覆盖物分组创建事件
   * @param instance
   */
  const overlayGroupCreated = (instance: AMap.OverlayGroup) => {
    overlayGroup.current = instance;

    setTimeout(() => {
      const overlays = overlayGroup.current.getOverlays();

      if (overlays.length) {
        init(overlays);
      }
    }, 0);
  }

  return (
    <div style={{ height: 500 }}>
      <Map
        center={[116.475334, 39.997534]}
        zoom={16}
        events={{
          created: (obj) => {
            map.current = obj;
          }
        }}
      >
        <PolygonEditor
          events={{
            created: (obj) => {
              polygonEditor.current = obj;
            },
            removenode: (event) => {
              const polygon = event['target'];
              const path = polygon.getPath();

              // 只剩两个点时，不允许删除
              if (path.length === 0) {
                const polygons = overlayGroup.current.getOverlays();

                if (polygons.length === 1) {
                  message.warning('区域必须剩余一个');

                  // 重新创建多边形覆盖物
                  const newPolygon = new AMap.Polygon({
                    // ...polygon.getOptions().createOptions,
                    map: map.current,
                    path: currentPolygonPath.current
                  });

                  overlayGroup.current.removeOverlay(polygon);
                  overlayGroup.current.addOverlay(newPolygon);
                  overlayGroup.current.on('dblclick', handlerOverlayGroupDblclick);
                }

                overlayGroup.current.removeOverlay(polygon);
                return;
              }

              currentPolygonPath.current = path;
            }
          }}
        />

        <OverlayGroup
          events={{
            created: overlayGroupCreated
          }}
        >
          {paths.map((path, index) => {
            return (
              <Polygon path={path} key={index} />
            )
          })}
        </OverlayGroup>
      </Map>
    </div>
  );
};

