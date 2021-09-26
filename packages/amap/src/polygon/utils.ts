import { toLnglat } from '../utils';

export function buildPathValue(path: AMap.ExpandPosition[] | AMap.ExpandPosition[][]) {
  if (path.length) {
    return path.map((p, index) => {
      if (Array.isArray(p[index])) {
        return this.buildPathValue(p);
      }
      return toLnglat(p);
    });
  }
  return path;
}
