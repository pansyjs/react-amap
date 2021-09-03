declare namespace AMap {
  namespace AutoComplete {
    interface Event {
      /** POI唯一标识 */
      id: string;
      /** 名称 */
      name: string;
      /** 区域编码 */
      adcode: string;
      /** 所属区域 */
      district: string;
      /** 位置 */
      location: AMap.LngLat;
      /** 类型 */
      type: string;
    }

    interface EventMap {
      select?: (event: Event) => void;
      choose?: (event: Event) => void;
    }

    interface Options {
      /**
       * 输入提示时限定POI类型，多个类型用“|”分隔，目前只支持Poi类型编码
       */
      type?: string;
      /**
       * 输入提示时限定城市
       * @default '全国'
       */
      city?: string;
      /**
       * 返回的数据类型
       * 可选值：
       *   all: 返回所有数据类型
       *   poi: 返回POI数据类型
       *   bus: 返回公交站点数据类型
       *   busline: 返回公交线路数据类型目前暂时不支持多种类型
       */
      datatype?: string;
      /**
       * 是否强制限制在设置的城市内搜索
       * @default false
       */
      citylimit?: boolean;
      /**
       * 用来指定一个input输入框，设定之后，在input输入文字将自动生成下拉选择列表。
       * 支持传入输入框DOM对象的id值，或直接传入输入框的DOM对象。
       */
      input?: string | HTMLDivElement;
      /**
       * 可选参数，指定一个现有的div的id或者元素，作为展示提示结果的容器，当指定了input的时候有效，缺省的时候将自动创建一个显示结果面板
       */
      output?: string | HTMLDivElement;
      /**
       * 表示是否在input位于页面较下方的时候自动将输入面板显示在input上方以避免被遮挡
       * @default true
       */
      outPutDirAuto?: boolean;
      /**
       * 页面滚动时关闭搜索结果列表
       * @default true
       */
      closeResultOnScroll?: boolean;
      /**
       * 设置检索语言类型
       * @default 'zh_cn'
       */
      lang?: string;
    }

    type Status = 'complete' | 'error' | 'no_data';

    interface Tip {
      id: string;
      /** 名称 */
      name: string;
      /** 所属区域 */
      district: string;
      /** 区域编码 */
      adcode: string;
      /** 地址信息 */
      address: string;
      /** 位置坐标 */
      location: AMap.LngLat;
      /**  */
      typecode: string;
    }

    interface Result {
      /** 查询状态说明 */
      info: string;
      /** 输入提示条数 */
      count: number;
      /** 输入提示列表 */
      tips: Tip[];
    }

    type AutoCompleteSearchCallback = (status: Status, result: Result) => void;
  }

  class AutoComplete extends AMap.EventEmitter {
    constructor(options: AutoComplete.Options);

    /**
     * 设置提示Poi类型
     */
    setType(type: string): void;

    /**
     * 设置城市
     * @param city
     */
    setCity(city: string): void;

    /**
     * 设置是否强制限制城市
     * @param citylimit
     */
    setCityLimit(citylimit: boolean): void;

    /**
     * 根据输入关键字提示匹配信息，支持中文、拼音
     * @param keyword
     * @param callback
     */
    search(keyword: string, callback: AutoComplete.AutoCompleteSearchCallback): void;
  }
}
