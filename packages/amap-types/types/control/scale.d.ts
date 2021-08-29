declare namespace AMap {
  namespace Scale {
    interface EventMap extends Control.EventMap {}

    interface Options extends Control.Options {}
  }

  /**
   * 比例尺插件
   */
  class Scale extends Control {
    constructor(options?: Scale.Options);
  }
}
