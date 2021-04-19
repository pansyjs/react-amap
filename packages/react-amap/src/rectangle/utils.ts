import { toBounds } from '../utils';
import type { Bounds } from './types';

export function buildBounds(rawBounds: Bounds) {
  if (!rawBounds) {
    return rawBounds;
  }

  return toBounds(rawBounds);
}
