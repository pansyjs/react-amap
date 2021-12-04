/// <reference path="./PathSimplifier/index.d.ts" />
/// <reference path="./PointSimplifier/index.d.ts" />

declare namespace AMapUI {

  /**
   * 加载模块
   * @param module
   * @param callback
   */
  function load(module: string[], callback: (instance: any) => void): void;

   /**
    * 加载模块，模块名省略ui/前缀
    * @param module
    * @param callback
    */
  function loadUI(module: string[], callback: (instance: any) => void): void;

  /**
   * 高德JS API 版本
   */
  const version: string;
}
