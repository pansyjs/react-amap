declare namespace AMap {
  abstract class EventEmitter {
    /**
     * 注册事件
     * @param eventName 事件名称
     * @param handler 事件回调函数
     * @param context 事件回调中的上下文
     * @param once 触发一次
     * @param unshift 更改事件顺序
     */
    on<C = this>(
      eventName: string,
      handler: (this: C, event: any) => void,
      context?: C,
      once?: boolean,
      unshift?: boolean
    ): this;
    /**
     * 移除事件绑定
     * @param eventName 事件名称
     * @param handler 事件功能函数
     * @param context 事件上下文
     */
    off<C = this>(
      eventName: string,
      handler: ((this: C, event: any) => void) | 'mv',
      context?: C
    ): this;
    /**
     * 触发事件
     * @param eventName 事件名称
     * @param data 事件数据
     */
    emit(eventName: string, data?: any): this;
  }
}