/// <reference path="./control/index.d.ts" />
/// <reference path="./core/index.d.ts" />
/// <reference path="./layer/index.d.ts" />

declare namespace Loca {
  type Unit = 'px' | 'meter';

  /**
   * 剔除背面/前面的面
   *   back: 是剔除背面的面
   *   front: 是剔除前面的面
   *   none: 是不进行剔除。
   */
  type Cullface = 'back' | 'front' | 'none';
}
