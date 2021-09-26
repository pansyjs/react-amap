import { toLnglat } from '../utils';

export function buildPathValue(path: AMap.ExpandPosition[]) {
  if (path.length) {
    if ('getLng' in path[0]) {
      return path;
    }
    return path.map((p) => toLnglat(p));
  }
  return path;
}
