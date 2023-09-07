import React, { useState, useEffect } from 'react';
import { Map } from '@pansy/react-amap';
import { Button } from 'antd';
import { Loca, useLoca, ScatterLayer, PulseLinkLayer } from '@pansy/react-amap-loca';

const Demo = () => {
  const { loca } = useLoca();
  const [visible, setVisible] = useState(true)
  const [scatter, setScatter] = useState<Loca.ScatterLayer>();
  const [pulseLink, setPulseLink] = useState<Loca.PulseLinkLayer>();

  useEffect(() => {
    if (scatter && loca && pulseLink) {
      const pointGeo = new window.Loca.GeoJSONSource({
        url: 'https://a.amap.com/Loca/static/loca-v2/demos/mock_data/pulselink-china-city-point.json',
      });
      scatter.setSource(pointGeo);

      scatter.setStyle({
        unit: 'meter',
        size: [200000, 200000],
        borderWidth: 0,
        texture: 'https://a.amap.com/Loca/static/static/green.png',
        duration: 2000,
        animate: true,
      });

      loca.add(scatter);

      const geo = new window.Loca.GeoJSONSource({
        url: 'https://a.amap.com/Loca/static/loca-v2/demos/mock_data/data-line-out.json',
      });
      pulseLink.setSource(geo);
      pulseLink.setStyle({
        unit: 'meter',
        dash: [40000, 0, 40000, 0],
        lineWidth: () => {
          return [8000, 8000];
        },
        height: (_, feat) => {
          return feat.distance / 3 + 10;
        },
        smoothSteps: 30,
        speed: () => {
          return 1000 + Math.random() * 100000;
        },
        flowLength: 100000,
        lineColors: () => {
          return ['rgba(44, 119, 248, 0.9)', 'rgba(44, 119, 248, 0.5)', 'rgba(44, 119, 248, 0.2)'];
        },
        maxHeightScale: 0.3,
        headColor: 'rgb(3, 214, 252)',
        trailColor: 'rgba(255, 255,0,0)',
      });

      loca.add(pulseLink);
      loca.animate.start();
    }
  }, [scatter, pulseLink, loca])

  return (
    <>
      <Button onClick={() => { setVisible((val) => !val) }}>切换显隐</Button>

      <ScatterLayer
        zIndex={10}
        opacity={0.6}
        visible={visible}
        zooms={[2, 22]}
        events={{
          created: (instance) => {
            setScatter(instance);
          }
        }}
      />

      <PulseLinkLayer
        zIndex={10}
        opacity={1}
        visible={visible}
        zooms={[2, 22]}
        depth
        events={{
          created: (instance) => {
            setPulseLink(instance);
          }
        }}
      />
    </>
  )
}
export default () => {
  return (
    <div style={{ height: 500 }}>
      <Map
        Loca={{}}
        viewMode="3D"
        pitch={35}
        center={[104.780269, 34.955403]}
        zoom={5}
        mapStyle="amap://styles/grey"
      >
        <Loca>
          <Demo />
        </Loca>
      </Map>
    </div>
  );
};

