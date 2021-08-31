import { Options } from './types';
import { LoadStatus, defaultConfig } from './config';
import { getScriptSrc } from './utils';

let Status = {
  AMap: LoadStatus.notload,
  AMapUI: LoadStatus.notload,
  Loca: LoadStatus.notload,
};

let config = {
  ...defaultConfig,
}

export function load(opts: Options) {
  return new Promise((resolve, reject) => {
    if (Status.AMap == LoadStatus.failed) {
      reject();
      return;
    }

    if (Status.AMap == LoadStatus.notload) {
      let {
        key = config.key,
        version = config.AMap.version,
        plugins = []
      } = opts;

      config.key = key;
      config.AMap.version = version;
      config.AMap.plugins = plugins;

      Status.AMap = LoadStatus.loading;

      const parentNode = document.body || document.head;

      window.__amap_init_callback = (err) => {
        delete window.__amap_init_callback;

        if (err) {
          Status.AMap = LoadStatus.failed;
          reject(err);
          return;
        }

        Status.AMap = LoadStatus.loaded;


      }

      const script = document.createElement('script');
      script.type = 'text/javascript';

      script.src = getScriptSrc(config);

      script.onerror = (e) => {
        Status.AMap = LoadStatus.failed;
        reject(e);
      };

      parentNode.appendChild(script);
      return;
    }

    if (Status.AMap == LoadStatus.loaded) {

    }



  })
}
