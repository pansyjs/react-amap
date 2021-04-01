import { useRef } from 'react';
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
      <button onClick={()=>{ drawMarker() }}>Draw Marker</button>
      <button onClick={()=>{ drawRectangle() }}>Draw Rectangle</button>
      <button onClick={()=>{ drawCircle() }}>Draw Circle</button>
      <button onClick={()=>{ drawPolygon() }}>Draw Polygon</button>
      <button onClick={()=>{ close() }}>Close</button>
    </div>
  );
};

