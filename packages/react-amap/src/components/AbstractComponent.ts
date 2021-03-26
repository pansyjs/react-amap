import React from 'react';

export interface AbstractComponentProps {
  events?: Record<string, any>;
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

  /**
   * 设置实例
   * @param instance
   */
  public setInstance = (instance: Instance) => {
    this.internalObj = instance;
  };

  get instance() {
    return this.internalObj;
  }

  render() {
    return null;
  }
}
