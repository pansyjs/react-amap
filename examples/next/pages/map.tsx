import React, { useEffect, useRef, useState } from 'react';
import { APILoader } from "@pansy/react-amap";
import { Avatar } from 'antd';
import 'antd/dist/antd.css';
import { usePortal } from '@pansy/use-portal';

const Marker: React.FC<any> = ({ map, children }) => {
  const { Portal, container } = usePortal();

  useEffect(() => {
    if (!map) return;

    // @ts-ignore
    const marker = new AMap.Marker({
      // @ts-ignore
      position: new AMap.LngLat(116.397428, 39.90923),
      content: container,
      anchor: 'bottom-center',
    })
    map.add(marker);
  }, [map])

  return <Portal>{children}</Portal>
}

export const Map = () => {
  const container = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<any>();

  useEffect(() => {
    if (!container.current) return;
    // @ts-ignore
    const AMap: any = window.AMap;

    const map = new AMap.Map(container.current);
    setMap(map);
  }, [container]);

  return (
    <>
      <div ref={container} style={{ height: '100vh' }} />

      {map && (
        <>
          <Marker map={map} >
            <Avatar style={{ backgroundColor: 'red' }}>A</Avatar>
          </Marker>
        </>
      )}
    </>
  )
}

export default () => {
  return (
    <APILoader>
      <Map />
    </APILoader>
  )
}
