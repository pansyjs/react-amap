declare namespace AMap {
  namespace ToolBar {
    interface EventMap extends Control.EventMap {}

    interface Options extends Control.Options {}
  }

  class ToolBar extends Control {
    constructor(options?: ToolBar.Options);
  }
}
