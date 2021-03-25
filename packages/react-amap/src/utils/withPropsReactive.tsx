import React from 'react';
import { toCapitalString } from './';
import { AbstractComponent, AbstractComponentProps } from '../components/AbstractComponent';

export function withPropsReactive<
  Instance extends PansyMap.BaseInstance = any, 
  Props extends AbstractComponentProps = any
>(MapComponent) {
  class InternalComponent extends React.Component<Props> {
    /** 实例是否创建 */
    private instanceCreated: boolean;
    /** 需要包装的组件 */
    private myMapComponent: AbstractComponent<Instance>;
    /** 需要绑定的事件 */
    private registeredEvents: string[];

    constructor(props: Props) {
      super(props)
      this.instanceCreated = false
      this.myMapComponent = null
      this.registeredEvents = []
      this.onInstanceCreated = this.onInstanceCreated.bind(this);
    }

    componentWillReceiveProps(nextProps) {
      this.reactivePropChange(nextProps, true)
    }

    omponentWillUnmount() {
      const { instance } = this.myMapComponent
      if (!instance) return
      if ('destroy' in instance) {
        setTimeout(() => {
          instance.destroy()
        }, 10)
      }
      if ('hide' in instance) {
        instance.hide()
      }
      if ('map' in this.props && 'setMap' in instance) {
        instance.setMap(null)
      }
    }
    
    /**
     * 实例创建成功的回调
     */
    onInstanceCreated() {
      this.instanceCreated = true
      if ('events' in this.props) {
        // 获取地图组件的实例
        const { instance } = this.myMapComponent
        this.props.events.created?.(instance);
      }
      this.reactivePropChange(this.props, false)
    }

    /**
     * 
     * @param nextProps 
     * @param shouldDetectChange 
     * @returns 
     */
    reactivePropChange(nextProps, shouldDetectChange = true) {
      if (!this.instanceCreated) {
        return false
      }
      const { setterMap = {}, converterMap = {}, instance = {} } = this.myMapComponent
      const list = Object.keys(nextProps);
      list.length && list.forEach(key => {
        if (key === 'events') {
          return this.createEventsProxy(nextProps)
        }

        let willReactive = true
        if (shouldDetectChange) {
          willReactive = this.detectPropChange(key, nextProps, this.props)
        }
        if (!willReactive) {
          return false
        }
        let setterParam = nextProps[key]
        if (key in converterMap) {
          setterParam = converterMap[key](nextProps[key])
        }
        if (key in setterMap) {
          setterMap[key](setterParam)
        } else {
          const trySetterName = `set${toCapitalString(key)}`
          if (trySetterName in instance) {
            instance[trySetterName](setterParam)
          }
        }
      })
    }

    /**
     * 绑定事件
     * @param props 
     */
    createEventsProxy(props) {
      const self = this;
      const { instance } = this.myMapComponent
      const evs = Object.keys(props.events || {})
      evs.length && evs.forEach(ev => {
        if (self.registeredEvents.indexOf(ev) === -1) {
          self.registeredEvents.push(ev)
          instance.on(ev, (function(ev) {
            return function(...args) {
              if (self.props.events && ev in self.props.events) {
                self.props.events[ev].apply(null, args)
              }
            }
          })(ev))
        }
      })
    }

    detectPropChange(key, nextProps, oldProps) {
      return nextProps[key] !== oldProps[key]
    }

    public saveComponent = (component) => {
      this.myMapComponent = component
    }

    render() {
      return (
        <MapComponent
          onInstanceCreated={this.onInstanceCreated}
          ref={this.saveComponent}
          {...this.props}
        />
      );
    }
  }

  return InternalComponent;
}