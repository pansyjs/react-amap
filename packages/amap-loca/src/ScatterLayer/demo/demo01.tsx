import React, { useState, useEffect } from 'react';
import { Map } from '@pansy/react-amap';
import { Loca, useLoca, ScatterLayer } from '@pansy/react-amap-loca';

const Scatter = () => {
  const { loca } = useLoca();
  const [scatter, setScatter] = useState<Loca.ScatterLayer>();

  useEffect(() => {
    if (scatter && loca) {
      const geo = new window.Loca.GeoJSONSource({
        url: 'https://a.amap.com/Loca/static/loca-v2/demos/mock_data/sz_road_F.json',
      });
      scatter.setSource(geo);

      scatter.setStyle({
        unit: 'meter',
        size: [2600, 2600],
        borderWidth: 0,
        texture: 'https://a.amap.com/Loca/static/loca-v2/demos/images/breath_red.png',
        duration: 2000,
        animate: true,
      });

      loca.add(scatter);
      loca.animate.start();
    }
  }, [scatter, loca])

  return (
    <ScatterLayer
      zIndex={111}
      opacity={1}
      visible={true}
      zooms={[2, 22]}
      events={{
        created: (instance) => {
          setScatter(instance);
        }
      }}
    />
  )
}

export default () => {
  return (
    <div style={{ height: 500 }}>
      <Map
        zoom={11.7}
        Loca={{}}
        center={[113.97199630737305, 22.5807295363949]}
        pitch={40}
        mapStyle="amap://styles/grey"
        viewMode="3D"
      >
        <Loca>
          <Scatter />
        </Loca>
      </Map>
    </div>
  );
};

