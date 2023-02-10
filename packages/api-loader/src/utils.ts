import { Config } from './types';

export function getScriptSrc(cfg: Config) {
  return `https://webapi.amap.com/maps?callback=__amap_init_callback` +
  `&v=${cfg.AMap.version}` +
  `&key=${cfg.key}` +
  `&plugin=${cfg.AMap.plugins.join(',')}`
}
