/// <reference path="./PathSimplifier/index.d.ts" />

declare namespace AMapUI {

  /**
   * 加载其他模块
   * @param module
   * @param callback
   */
  function load(module: string[], callback: (instance: any) => void): void;

  /**
   * 高德JS API 版本
   */
  const version: string;
}
