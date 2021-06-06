import { Map, ToolBar } from '@pansy/react-amap';

export default () => {
  return (
    <div style={{ height: 500 }}>
      <Map>
        <ToolBar liteStyle />
      </Map>
    </div>
  );
};

