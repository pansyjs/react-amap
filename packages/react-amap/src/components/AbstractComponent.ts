import React from 'react';

export interface AbstractComponentProps<E = any> {
  events?: E;
  onInstanceCreated?: () => void;
  children?: React.ReactNode;
}

export abstract class AbstractComponent<
  Instance extends PansyMap.BaseInstance,
  Props extends AbstractComponentProps = {},
  State = {}
> extends React.Component<Props, State> {
  /** 地图组件的实例 */
  public internalObj: Instance;
  /**  */
  public setterMap: Record<string, any> = {};
  /** 转换器配置  */
  public converterMap: Record<string, any> = {};

  constructor(props) {
    super(props);
  }

  /** 创建实例 */
  abstract createInstance(props?: Props): void;

  /** 获取创建实例的参数 */
  abstract buildCreateOptions(props?: Props): object;

  /**
   * 设置实例
   * @param instance
   */
  public setInstance = (instance: Instance) => {
    this.internalObj = instance;
  };

  /** 获取实例 */
  get instance() {
    return this.internalObj;
  }

  /**
   * 处理需要转换的参数
   * @param key
   * @param props
   * @returns
   */
  getSetterValue(key: string, props: Props) {
    if (key in this.converterMap) {
      return this.converterMap[key](props[key])
    }
    return props[key];
  }

  render() {
    return null;
  }
}
