import { Map, ElasticMarker, Polygon, ControlBar } from '@pansy/react-amap';
import type { ElasticMarkerProps } from '@pansy/react-amap/es/elastic-marker';
import { touristSpots, paths } from './tiantan';
import './style.less';

const zoomStyleMapping = {
  14: 0,
  15: 0,
  16: 0,
  17: 0,
  18: 0,
  19: 0,
  20: 0
}

export default () => {
  return (
    <div style={{ height: 500 }}>
      <Map
        viewMode="3D"
        zooms={[14, 20]}
        zoom={16}
        center={[116.408967, 39.880101]}
      >
        <div>
          {touristSpots.map((item, index) => {
            const styles: ElasticMarkerProps['styles'] = [
              {
                icon: {
                    img: item.smallIcon,
                    size:[16,16],//可见区域的大小
                    ancher:[8,16],//锚点
                    fitZoom:14,//最合适的级别
                    scaleFactor:2,//地图放大一级的缩放比例系数
                    maxScale:2,//最大放大比例
                    minScale:1//最小放大比例
                },
                label: {
                    content: item.name,
                    offset:[-35,0],
                    position:'BM',
                    minZoom:15
                }
              },
              {
                icon:{
                    img: item.bigIcon,
                    size: item.size as [number, number],
                    ancher: item.ancher as [number, number],
                    fitZoom: 17.5,
                    scaleFactor: 2,
                    maxScale: 2,
                    minScale: 0.125
                },
                label:{
                    content: item.name,
                    offset: [-35,0],
                    position:'BM'
                }
              }

            ]
            return (
              <ElasticMarker
                key={index}
                styles={styles}
                position={item.position as ReactAMap.Position}
                zoomStyleMapping={zoomStyleMapping}
              />
            )
          })}
        </div>
        <Polygon
          path={paths}
          bubble
          style={{
            fillOpacity: 0.3,
            strokeWeight: 1,
            fillColor: 'green'
          }}
        />
        <ControlBar />
      </Map>
    </div>
  );
};

