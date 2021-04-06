import { Map, Heatmap } from '@pansy/react-amap';
import { heatmapData } from './data';

export default () => {
  return (
    <div style={{ height: 500 }}>
      <Map>
        <Heatmap
          dataSet={{
            data: heatmapData,
            max:100
          }}
        />
      </Map>
    </div>
  );
};

