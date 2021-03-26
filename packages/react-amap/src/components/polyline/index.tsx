import React from 'react';
import { AbstractComponent } from '../AbstractComponent';
import { toLnglat, hasWindow, withPropsReactive } from '../../utils';
import { PolylineProps, PolylineState } from './types';
import { allProps } from './config';

class Polyline extends AbstractComponent<AMap.Polyline, PolylineProps, PolylineState> {
  private map: AMap.Map;
  private element: HTMLElement;

  constructor(props: PolylineProps) {
    super(props);

    if (hasWindow) {
      if (props.map) {
        const self = this;

        this.map = props.map;
        this.state = {
          loaded: false
        }
        this.element = this.map.getContainer()

        this.setterMap = {
          visible(val) {
            if (val) {
              self.internalObj && self.internalObj.show()
            } else {
              self.internalObj && self.internalObj.hide()
            }
          },
          style(val) {
            self.internalObj.setOptions(val)
          }
        }

        this.converterMap = {
          path(val) {
            return self.buildPathValue(val)
          }
        }

        setTimeout(() => {
          this.createMapPolyline(props)
        }, 13)
      }
    }
  }

  createMapPolyline(props: PolylineProps) {
    const options: AMap.Polyline.Options = this.buildCreateOptions(props)
    options.map = this.map;
    this.setInstance(new window.AMap.Polyline(options));
    this.setState({
      loaded: true
    })
    this.props.onInstanceCreated?.()
  }

  buildCreateOptions(props: PolylineProps) {
    const options = {}
    allProps.forEach((key) => {
      if (key in props) {
        if ((key === 'style') && props.style) {
          const styleItem = Object.keys(props.style)
          styleItem.forEach((item) => {
            // $FlowFixMe
            options[item] = props.style[item]
          })
          // visible 做特殊处理
        } else if (key !== 'visible') {
          options[key] = this.getSetterValue(key, props[key])
        }
      }
    })
    return options
  }

  buildPathValue(path: AMap.Polyline.Options['path']) {
    if (path.length) {
      if ('getLng' in path[0]) {
        return path
      }
      return path.map((p) => (toLnglat(p)))
    }
    return path
  }

  getSetterValue(key: string, value: any) {
    if (key in this.converterMap) {
      return this.converterMap[key](value)
    }
    return value
  }

  renderEditor(children: any) {
    if (!children) {
      return null
    }
    if (React.Children.count(children) !== 1) {
      return null
    }
    const child = React.Children.only(children)
    return React.cloneElement(child, {
      __poly__: this.internalObj,
      __map__: this.map
    })
    return null
  }

  render() {
    return this.state.loaded ? (this.renderEditor(this.props.children)) : null
  }
}

export default withPropsReactive<AMap.Polyline, PolylineProps>(Polyline);
