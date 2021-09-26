import { useRef } from 'react';
import { Button, Space } from 'antd';
import { Map, MouseTool } from '@pansy/react-amap';

export default () => {
  const mouseTool = useRef<AMap.MouseTool>(null);

  const events = {
    created: (instance) => {
      mouseTool.current = instance;
    }
  }

  const drawMarker = () => {
    if (mouseTool.current) {
      mouseTool.current.marker();
    }
  }

  const drawRectangle = () => {
    if (mouseTool.current) {
      mouseTool.current.rectangle();
    }
  }

  const drawCircle = () => {
    if (mouseTool.current) {
      mouseTool.current.circle();
    }
  }

  const drawPolygon = () => {
    if (mouseTool.current) {
      mouseTool.current.polygon();
    }
  }

  const close = () => {
    if (mouseTool.current) {
      mouseTool.current.close();
    }
  }

  return (
    <div style={{ height: 500 }}>
      <Map>
        <MouseTool events={events} />
      </Map>
      <Space>
        <Button onClick={drawMarker}>Draw Marker</Button>
        <Button onClick={drawRectangle}>Draw Rectangle</Button>
        <Button onClick={drawCircle}>Draw Circle</Button>
        <Button onClick={drawPolygon}>Draw Polygon</Button>
        <Button onClick={close}>Close</Button>
      </Space>
    </div>
  );
};

