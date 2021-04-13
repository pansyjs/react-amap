import React from 'react';
import { useMap } from '../map/context';
import { withPropsReactive } from '../utils';
import { HeatmapProps } from './types';
import { InternalHeatmap } from './heatmap';

// @ts-ignore
export const HeatmapReactive = withPropsReactive<AMap.Heatmap, HeatmapProps>(InternalHeatmap);

export const Heatmap: React.FC<HeatmapProps> = (props) => {
  const { map } = useMap();

  return (
    <HeatmapReactive map={map} {...props} />
  )
};

export { HeatmapProps } from './types';
