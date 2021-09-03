declare namespace AMap {
  namespace Util {
    /**
     * 判断参数是否为DOM元素
     * @param data
     */
    function isDOM(data: any): data is HTMLElement;

    /**
     * 将颜色名转换为16进制RGB颜色值
     * @param colorName
     */
    function colorNameToHex(colorName: string): string;

    /**
     * 将16进制RGB转为rgba(R,G,B,A)
     * @param hex
     */
    function rgbHex2Rgba(hex: string): string;

    /**
     * 将16进制RGBA转为rgba(R,G,B,A)
     * @param hex
     */
    function argbHex2Rgba(hex: string): string;

    /**
     * 判断一个对象是都为空
     * @param value
     */
    function isEmpty(value: object): boolean;

    /**
     * 从数组删除元素
     * @param array
     * @param item
     */
    function deleteItemFromArray<T = any>(array: T[], item: T): T[];

    /**
     * 按索引删除数组元素
     * @param array
     * @param index
     */
    function deleteItemFromArrayByIndex<T = any>(array: T[], index: number): T[];

    /**
     * 返回元素索引
     * @param array
     * @param item
     */
    function indexOf<T = any>(array: T[], item: T): number;

    /**
     * 保留小数点后指定位
     * @param floatNumber
     * @param digits
     */
    function format(floatNumber: number, digits?: number): number;

    /**
     * 判断是否数组
     * @param data
     */
    function isArray(data: any): data is any[];

    /**
     * 判断数组是否包含某个元素
     * @param array 数组
     * @param item 元素
     */
    function includes<T = any>(array: T[], item: T): boolean;
  }
}
