import { toLnglat } from '../utils';

export function buildPathValue(path: ReactAMap.Position[] | ReactAMap.Position[][]) {
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
