import React from 'react';
import { withPropsReactive, toLnglat, hasWindow } from '../../utils';
import { AbstractComponent } from '../AbstractComponent';
import { CircleProps, CircleState } from './types';
import { allProps } from './config';

class Circle extends AbstractComponent<AMap.Circle, CircleProps, CircleState> {
  private map: AMap.Map;
  private element: HTMLElement;

  constructor(props: CircleProps) {
    super(props);
    if (hasWindow) {
      if (props.map) {
        const self = this;

        this.state = {
          loaded: false
        };
        this.map = props.map;
        this.element = this.map.getContainer()

        this.setterMap = {
          visible(val) {
            if (self.internalObj) {
              if (val) {
                self.internalObj.show()
              } else {
                self.internalObj.hide()
              }
            }
          },
          style(val) {
            self.internalObj.setOptions(val)
          }
        }

        this.converterMap = {
          center: toLnglat
        }

        this.createInstance(props).then(() => {
          this.setState({
            loaded: true
          })
          this.props.onInstanceCreated && this.props.onInstanceCreated()
        })
      }
    }
  }

  createInstance(props: CircleProps) {
    const options = this.buildCreateOptions(props)
    options.map = this.map
    this.setInstance(new window.AMap.Circle(options));
    return Promise.resolve(this.instance)
  }

  buildCreateOptions(props: CircleProps) {
    const options: AMap.Circle.Options = {}
    allProps.forEach((key) => {
      if (key in props) {
        if (key === 'style' && (props.style !== undefined)) {
          const styleItem = Object.keys(props.style)
          styleItem.forEach((item) => {
            options[item] = props.style[item]
          })
        } else {
          options[key] = this.getSetterValue(key, props)
        }
      }
    })
    return options
  }

  getSetterValue(key: string, props: CircleProps) {
    if (key in this.converterMap) {
      return this.converterMap[key](props[key])
    }
    return props[key]
  }

  renderEditor(children: any) {
    if (!children) {
      return null
    }
    if (React.Children.count(children) !== 1) {
      return null
    }
    return React.cloneElement(React.Children.only(children), {
      __circle__: this.internalObj,
      __map__: this.map,
      __ele__: this.element
    })
  }

  render() {
    return this.state.loaded ? (this.renderEditor(this.props.children)) : null
  }
}

export default withPropsReactive<AMap.Circle, CircleProps>(Circle);
