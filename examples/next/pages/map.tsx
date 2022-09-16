import React, { useEffect, useRef, useState } from 'react';
import { Avatar } from 'antd';
import 'antd/dist/antd.css';
import { usePortal } from '@pansy/use-portal';
import { useExternal } from '@pansy/use-external';

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

export default () => {
  const container = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<any>();
  const status = useExternal('//webapi.amap.com/maps?v=2.0&key=f97efc35164149d0c0f299e7a8adb3d2', {
    type: 'js',
  });

  useEffect(() => {
    if (status !== 'ready') return;
    if (!container.current) return;
    // @ts-ignore
    const AMap: any = window.AMap;

    const map = new AMap.Map(container.current);
    setMap(map);
  }, [status]);

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
