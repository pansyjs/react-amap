import { hasWindow } from './';

const DEFAULT_CONFIG = {
  version: '1.4.0',
  hostAndPath: 'webapi.amap.com/maps',
  key: 'f97efc35164149d0c0f299e7a8adb3d2',
  callback: '__amap_init_callback',
  useAMapUI: false,
}

interface Config {
  key: string;
  version: string;
  protocol: string;
  callback: string;
  useAMapUI: boolean | (() => void);
  hostAndPath: string;
}

type APILoaderOptions = Omit<Partial<Config>, 'callback'>;

let mainPromise = null;
let amapuiPromise = null;
let amapuiInited = false;

export class APILoader {
  private protocol: string;
  private config: Config;

  constructor(opts: Omit<Partial<APILoaderOptions>, 'callback'>) {
    const { key, useAMapUI, version, protocol, hostAndPath } = opts;
    this.config = { ...DEFAULT_CONFIG, useAMapUI, protocol };

    if (hasWindow) {
      if (key) {
        this.config.key = key
      } else if ('amapkey' in window) {
        this.config.key = window['amapkey'];
      }

      if (version) {
        this.config.version = version
      }

      if (hostAndPath) {
        this.config.hostAndPath;
      }

      this.protocol = protocol || window.location.protocol;
      if (this.protocol.indexOf(':') === -1) {
        this.protocol += ':'
      }
    }
  }

  getScriptSrc(cfg: Partial<Config>) {
    return `${this.protocol}//${cfg.hostAndPath}?v=${cfg.version}&key=${cfg.key}&callback=${cfg.callback}`
  }

  buildScriptTag(src: string): HTMLScriptElement {
    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.async = true
    script.defer = true
    script.src = src
    return script
  }

  getAmapuiPromise(): Promise<void> {
    if (window.AMapUI) {
      return Promise.resolve()
    }
    const script = this.buildScriptTag(`${this.protocol}//webapi.amap.com/ui/1.0/main-async.js`)
    const promise = new Promise<void>(resolve => {
      script.onload = () => {
        resolve()
      }
    })
    document.body.appendChild(script)
    return promise;
  }

  getMainPromise(): Promise<void> {
    if (window.AMap) {
      return Promise.resolve()
    }
    const script = this.buildScriptTag(this.getScriptSrc(this.config))
    const promise = new Promise<void>(resolve => {
      window[this.config.callback] = () => {
        resolve()
        delete window[this.config.callback]
      }
    })
    document.body.appendChild(script)
    return promise;
  }

  load() {
    if (typeof window === 'undefined') {
      return null
    }
    const { useAMapUI } = this.config
    mainPromise = mainPromise || this.getMainPromise()
    if (useAMapUI) {
      amapuiPromise = amapuiPromise || this.getAmapuiPromise()
    }
    return new Promise<void>(resolve => {
      mainPromise.then(() => {
        if (useAMapUI && amapuiPromise) {
          amapuiPromise.then(() => {
            if (window['initAMapUI'] && !amapuiInited) {
              window['initAMapUI']()
              if (typeof useAMapUI === 'function') {
                useAMapUI()
              }
              amapuiInited = true
            }
            resolve()
          })
        } else {
          resolve()
        }
      })
    })
  }
}
