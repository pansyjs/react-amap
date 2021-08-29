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
     * 判断当前实例是否已经绑定了某个事件回调
     * @param eventName 事件类型
     * @param handler 事件回调
     * @param context 事件上下文
     */
    hasEvents<C = this>(
      eventName: string,
      handler: ((this: C, event: any) => void) | 'mv',
      context?: C
    ): boolean;

    /**
     * 清除当前实例某一类型的全部事件回调
     * @param type 事件类型，如果此参数为空，清除实例上的所有绑定的事件回调
     */
    clearEvents(type?: string): this;

    /**
     * 触发事件
     * @param eventName 事件名称
     * @param data 事件数据
     */
    emit(eventName: string, data?: any): this;
  }
}
