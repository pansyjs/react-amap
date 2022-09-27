/// <reference types="@pansy/amap-types" />

import { LoadStatus, defaultConfig } from './config';
import { getScriptSrc } from './utils';

import type { Options } from './types';

let Status = {
  AMap: LoadStatus.notload,
  AMapUI: LoadStatus.notload,
  Loca: LoadStatus.notload,
};

let Callback = {
  AMap: [],
  AMapUI: [],
  Loca: [],
};

let config = {
  ...defaultConfig,
}

let onloadCBKs = [];
function onload(callback) {
  if (typeof callback == "function") {
    if (Status.AMap === LoadStatus.loaded) {
      callback(window.AMap);
      return;
    }
    onloadCBKs.push(callback);
  }
};

/**
 * 加载其他资源
 * @param option
 * @returns
 */
function appendOther(option: Options): Promise<any> {
  let promises: Promise<void>[] = [];

  if (option.AMapUI) {
    promises.push(loadAMapUI(option.AMapUI));
  }

  if (option.Loca) {
    promises.push(loadLoca(option.Loca));
  }

  return Promise.all(promises);
}

export function loadAMapUI(params: { version?: string; plugins?: string[] }): Promise<void> {
  return new Promise((resolve, reject) => {
    const newPlugins: string[] = [];

    if (params.plugins) {
      for (var i = 0; i < params.plugins.length; i += 1) {
        if (config.AMapUI.plugins.indexOf(params.plugins[i]) == -1) {
          newPlugins.push(params.plugins[i]);
        }
      }
    }

    if (Status.AMapUI === LoadStatus.failed) {
      reject('前次请求 AMapUI 失败');
      return;
    }

    if (Status.AMapUI === LoadStatus.notload) {
      Status.AMapUI = LoadStatus.loading;
      config.AMapUI.version = params.version || config.AMapUI.version;
      const version = config.AMapUI.version;
      const parentNode = document.body || document.head;

      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = `https://webapi.amap.com/ui/${version}/main.js`;

      script.onerror = (e) => {
        Status.AMapUI = LoadStatus.failed;
        reject('请求 AMapUI 失败');
      };

      script.onload = () => {
        Status.AMapUI = LoadStatus.loaded;

        if (newPlugins.length) {
          window.AMapUI.loadUI(newPlugins, function () {
            for (let i = 0, len = newPlugins.length; i < len; i++) {
              const path = newPlugins[i];
              const name = path.split('/').slice(-1)[0];
              window.AMapUI[name] = arguments[i];
            }
            resolve();
            while (Callback.AMapUI.length) {
              Callback.AMapUI.splice(0, 1)[0]();
            }
          });
      } else {
        resolve();
          while (Callback.AMapUI.length) {
            Callback.AMapUI.splice(0, 1)[0]();
          }
        }
      }

      parentNode.appendChild(script);
      return;
    }

    if (Status.AMapUI === LoadStatus.loaded) {
      if (params.version && params.version !== config.AMapUI.version) {
        reject('不允许多个版本 AMapUI 混用');
      } else {
        if (newPlugins.length) {
            window.AMapUI.loadUI(newPlugins, function () {
              for (let i = 0, len = newPlugins.length; i < len; i++) {
                const path = newPlugins[i];
                const name = path.split("/").slice(-1)[0];
                window.AMapUI[name] = arguments[i];
              }
              resolve();
            });
        } else {
          resolve();
        }
      }
      return;
    }

    if (params.version && params.version !== config.AMapUI.version) {
      reject('不允许多个版本 AMapUI 混用');
    } else {
      Callback.AMapUI.push((err) => {
        if (err) {
          reject(err);
        } else {
          if (newPlugins.length) {
            window.AMapUI.loadUI(newPlugins, function () {
              for (let i = 0, len = newPlugins.length; i < len; i++) {
                const path = newPlugins[i];
                const name = path.split("/").slice(-1)[0];
                window.AMapUI[name] = arguments[i];
              }
              resolve();
            });
          } else {
            resolve();
          }
        }
      });
    }
  });
}

export function loadLoca(params: { version?: string }): Promise<void> {
  return new Promise((resolve, reject) => {
    if (Status.Loca === LoadStatus.failed) {
      reject('前次请求 Loca 失败');
      return;
    }

    if (Status.Loca === LoadStatus.notload) {
      Status.Loca = LoadStatus.loading;

      config.Loca.version = params.version || config.Loca.version;

      const version = config.Loca.version;
      const isApiV2 = config.AMap.version.startsWith('2');
      const isLocaV2 = version.startsWith('2');

      if ((isApiV2 && !isLocaV2) || (!isApiV2 && isLocaV2)) {
        reject('JSAPI 与 Loca 版本不对应！！' );
        return;
      }

      const key = config.key;
      const parentNode = document.body || document.head;
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = `https://webapi.amap.com/loca?v=${version}&key=${key}`;

      script.onerror = () => {
        Status.Loca = LoadStatus.failed;
        reject('请求 Loca 失败');
      };

      script.onload = () => {
        Status.Loca = LoadStatus.loaded;
        resolve();
        while (Callback.Loca.length) {
          Callback.Loca.splice(0, 1)[0]();
        }
      };

      parentNode.appendChild(script);
      return;
    }

    if (Status.Loca === LoadStatus.loaded) {
      if (params.version && params.version !== config.Loca.version) {
        reject('不允许多个版本 Loca 混用');
      } else {
        resolve();
      }
      return;
    }

    if (params.version && params.version !== config.Loca.version) {
      reject('不允许多个版本 Loca 混用');
    } else {
      Callback.Loca.push((err) => {
        if (err) {
          reject(err);
        } else {
          reject();
        }
      });
    }
  })
}

export function load(opts: Options): Promise<typeof AMap> {
  return new Promise((resolve, reject) => {
    /** 加载失败 */
    if (Status.AMap == LoadStatus.failed) {
      reject();
      return;
    }

    /** 未加载 */
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

        appendOther(opts)
          .then(() => {
            resolve(window.AMap);
          })
          .catch(reject);

        while (onloadCBKs.length) {
          onloadCBKs.splice(0, 1)[0]();
        }
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

    /** 加载中 */
    if (Status.AMap == LoadStatus.loaded) {
      if (opts.key && opts.key !== config.key) {
        reject('多个不一致的 key');
        return;
      }

      if (opts.version && opts.version !== config.AMap.version) {
        reject('不允许多个版本 JSAPI 混用');
        return;
      }

      const newPlugins = [];

      if (opts.plugins) {
        for (var i = 0; i < opts.plugins.length; i += 1) {
          if (config.AMap.plugins.indexOf(opts.plugins[i]) == -1) {
            newPlugins.push(opts.plugins[i]);
          }
        }
      }

      if (newPlugins.length) {
        window.AMap.plugin(newPlugins, () => {
          appendOther(opts)
            .then(() => {
                resolve(window.AMap);
            })
            .catch(reject);
        })
      } else {
        appendOther(opts)
          .then(() => {
              resolve(window.AMap);
          })
          .catch(reject);
      }
      return;
    }

    /** 加载中 */
    if (opts.key && opts.key !== config.key) {
      reject('多个不一致的 key');
      return;
    }

    if (opts.version && opts.version !== config.AMap.version) {
      reject('不允许多个版本 JSAPI 混用');
      return;
    }

    const newPlugins = [];

    if (opts.plugins) {
      for (var i = 0; i < opts.plugins.length; i += 1) {
        if (config.AMap.plugins.indexOf(opts.plugins[i]) == -1) {
          newPlugins.push(opts.plugins[i]);
        }
      }
    }

    onload(() => {
      if (newPlugins.length) {
        window.AMap.plugin(newPlugins, () => {
          appendOther(opts)
            .then(() => {
              resolve(window.AMap);
            })
            .catch(reject);
        })
      } else {
        appendOther(opts)
          .then(() => {
            resolve(window.AMap);
          })
          .catch(reject);
      }
    })
  })
}

export function reset() {
  delete window.AMap;
  delete window.AMapUI;
  delete window.Loca;

  config = {
    ...defaultConfig
  }

  Status = {
    AMap: LoadStatus.notload,
    AMapUI: LoadStatus.notload,
    Loca: LoadStatus.notload,
  };

  Callback = {
    AMap: [],
    AMapUI: [],
    Loca: [],
  };
}

export type { Options } from './types';
