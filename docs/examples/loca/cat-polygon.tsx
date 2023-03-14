import React, { useEffect, useRef } from 'react'
import { Map, useMap } from '@pansy/react-amap';

const colors = ['#FFF8B4', '#D3F299', '#9FE084', '#5ACA70', '#00AF53', '#00873A', '#006B31', '#004835', '#003829'].reverse();
const height = [1000, 2000, 4000, 6000, 8000, 10000, 12000, 14000, 16000];

const CatPolygon: React.FC = () => {
  const locaRef = useRef<any>();
  const { map } = useMap();

  useEffect(() => {
    if (map) {
      const loca: any = new Loca.Container({
        map,
      });

      loca.ambLight = {
        intensity: 0.3,
        color: '#fff',
      };

      loca.dirLight = {
        intensity: 0.6,
        color: '#fff',
        target: [0, 0, 0],
        position: [0, -1, 1],
      };

      loca.pointLight = {
        color: 'rgb(100,100,100)',
        position: [120.24289, 30.341335, 20000],
        intensity: 3,
        // 距离表示从光源到光照强度为 0 的位置，0 就是光不会消失。
        distance: 50000,
      };

      const geo = new Loca.GeoJSONSource({
        url: 'https://a.amap.com/Loca/static/loca-v2/demos/mock_data/hz_gn.json',
      });

      const pl: any = new Loca.PolygonLayer({
        // loca,
        zIndex: 120,
        opacity: 0.8,
        // cullface: 'none',
        shininess: 10,
        hasSide: true,
      });

      pl.setSource(geo);

      pl.setStyle({
        topColor: function (index, feature) {
            var v = feature.properties.health * 100;
            return v < 40 ? colors[8] :
                v < 50 ? colors[7] :
                    v < 55 ? colors[6] :
                        v < 60 ? colors[5] :
                            v < 65 ? colors[4] :
                                v < 70 ? colors[3] :
                                    v < 75 ? colors[2] :
                                        v < 80 ? colors[1] :
                                            v < 100 ? colors[0] : 'green';
        },
        sideTopColor: function (index, feature) {
          // var v = feature.properties.value;
          var v = feature.properties.health * 100;
          return v < 40 ? colors[8] :
              v < 50 ? colors[7] :
                  v < 55 ? colors[6] :
                      v < 60 ? colors[5] :
                          v < 65 ? colors[4] :
                              v < 70 ? colors[3] :
                                  v < 75 ? colors[2] :
                                      v < 80 ? colors[1] :
                                          v < 100 ? colors[0] : 'green';
        },
        sideBottomColor: function (index, feature) {
          // var v = feature.properties.value;
          var v = feature.properties.health * 100;
          return v < 40 ? colors[8] :
              v < 50 ? colors[7] :
                  v < 55 ? colors[6] :
                      v < 60 ? colors[5] :
                          v < 65 ? colors[4] :
                              v < 70 ? colors[3] :
                                  v < 75 ? colors[2] :
                                      v < 80 ? colors[1] :
                                          v < 100 ? colors[0] : 'green';
        },
        height: function (index, feature) {
          var v = feature.properties.health * 100;
          return v < 40 ? height[8] :
              v < 50 ? height[7] :
                  v < 55 ? height[6] :
                      v < 60 ? height[5] :
                          v < 65 ? height[4] :
                              v < 70 ? height[3] :
                                  v < 75 ? height[2] :
                                      v < 80 ? height[1] :
                                          v < 100 ? height[0] : 0;
        },
        altitude: 0,
      });

      loca.add(pl);
      locaRef.current = loca;
    }
  }, [map])
  return null;
}

export const App: React.FC = () => {
  return (
    <div style={{ height: 500 }}>
      <Map
        Loca={{ version: '2.0.0' }}
        zoom={11.14}
        viewMode="3D"
        pitch={45}
        center={[120.109233, 30.246411]}
        showBuildingBlock={false}
        showLabel={false}
      >
        <CatPolygon />
      </Map>
    </div>
  )
}

export default App;
