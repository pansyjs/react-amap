import { toLnglat } from '../utils';
import type { Bounds } from './types';

export function buildBounds(rawBounds: Bounds) {
  if (!rawBounds) {
    return rawBounds;
  }

  if ('getSouthWest' in rawBounds) {
    return rawBounds;
  }

  if (Array.isArray(rawBounds) && rawBounds.length === 2) {
    const bounds = new window.AMap.Bounds(
      ...rawBounds.map(toLnglat) as [AMap.LngLat, AMap.LngLat]
    );
    return bounds;
  }
}
