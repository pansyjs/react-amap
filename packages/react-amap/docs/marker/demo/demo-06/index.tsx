import React from 'react';
import { Map } from '@pansy/react-amap';
import { Business } from './Business';
import { useMapService, MapService } from './useMapService';

export default () => {
  const mapService = useMapService();

  return (
    <MapService.Provider value={mapService}>
      <div style={{ height: 500 }}>
        <Map zoom={4} events={mapService.mapEventMap}>
          <Business />
        </Map>
      </div>
    </MapService.Provider>
  );
};

