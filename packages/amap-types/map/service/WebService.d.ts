declare namespace AMap {
  namespace WebService {
    type Status = 'complete' | 'error';

    /**
     * WebService 的回调函数
     */
    type Callback = (status: Status, data: any) => void;
  }

  class WebService {
    /**
     * 以 GET 请求方式请求指定的 Web 服务 API 接口
     * @param path Web服务API的接口路径
     * @param params Web服务 API 的查询参数
     * @param callback 查询回调函数
     * @param opts  HTTP 请求参数配置
     */
    static get(
      path: string,
      params?: object,
      callback?: WebService.Callback,
      opts?: any
    ): void;

    /**
     * 以 POST 请求方式请求指定的 Web 服务 API 接口
     * @param path Web服务API的接口路径
     * @param params Web服务 API 的查询参数
     * @param callback 查询回调函数
     */
    static post(
      path: string,
      params?: object,
      callback?: WebService.Callback,
    ): void;
  }
}
