import React from 'react';
import { AbstractComponent } from '../AbstractComponent';
import { toLnglat, hasWindow } from '../utils';
import { PolylineProps, PolylineState } from './types';
import { allProps } from './config';

export class InternalPolyline extends AbstractComponent<AMap.Polyline, PolylineProps, PolylineState> {
  private map: AMap.Map;

  constructor(props: PolylineProps) {
    super(props);

    if (hasWindow) {
      if (props.map) {
        const self = this;

        this.map = props.map;
        this.state = {
          loaded: false
        }

        this.setterMap = {
          visible(val: boolean) {
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
          path(val: ReactAMap.Position[]) {
            return self.buildPathValue(val);
          }
        }

        this.createInstance(props).then(() => {
          this.setState({
            loaded: true
          })
          this.props.onInstanceCreated?.()
        })
      }
    }
  }

  createInstance(props: PolylineProps) {
    const options: AMap.Polyline.Options = this.buildCreateOptions(props)
    options.map = this.map;
    this.setInstance(new window.AMap.Polyline(options));
    return Promise.resolve(this.instance);
  }

  buildCreateOptions(props: PolylineProps) {
    const options = {}
    allProps.forEach((key) => {
      if (key in props) {
        if ((key === 'style') && props.style) {
          const styleItem = Object.keys(props.style)
          styleItem.forEach((item) => {
            options[item] = props.style[item]
          })
          // visible 做特殊处理
        } else if (key !== 'visible') {
          options[key] = this.getSetterValue(key, props)
        }
      }
    })
    return options;
  }

  buildPathValue(path: ReactAMap.Position[]) {
    if (path.length) {
      if ('getLng' in path[0]) {
        return path;
      }
      return path.map((p) => toLnglat(p));
    }
    return path;
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
      poly: this.internalObj,
      map: this.map,
    });
    return null
  }

  render() {
    return this.state.loaded ? (this.renderEditor(this.props.children)) : null
  }
}
