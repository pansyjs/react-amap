import React from 'react';
import { toLnglat, hasWindow } from '../utils';
import { AbstractComponent } from '../AbstractComponent';
import { PolygonProps, PolygonState, Style } from './types';
import { allProps } from './config';

export class InternalPolygon extends AbstractComponent<AMap.Polygon, PolygonProps, PolygonState> {
  private map: AMap.Map;

  constructor(props: PolygonProps) {
    super(props);

    if (hasWindow) {
      if (props.map) {
        const self = this;

        this.map = props.map;
        this.state = {
          loaded: false
        };

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
          style(val: Style) {
            self.internalObj.setOptions(val);
          }
        }

        this.converterMap = {
          path(val: ReactAMap.Position[]) {
            return self.buildPathValue(val);
          }
        }

        this.createInstance(props)
          .then(() => {
            this.setState({
              loaded: true
            })
            this.props.onInstanceCreated?.()
          })
      }
    }
  }

  createInstance(props: PolygonProps) {
    const options = this.buildCreateOptions(props)
    options.map = this.map;
    this.setInstance(new window.AMap.Polygon(options));
    return Promise.resolve(this.instance);
  }

  buildCreateOptions(props: PolygonProps) {
    const options: AMap.Circle.Options = {}
    allProps.forEach((key) => {
      if (key in props) {
        if (key === 'style' && (props.style !== undefined)) {
          const styleItem = Object.keys(props.style)
          styleItem.forEach((item) => {
            options[item] = props.style[item]
          })
        } else if (key !== 'visible') {
          options[key] = this.getSetterValue(key, props)
        }
      }
    })
    return options;
  }

  buildPathValue(path: ReactAMap.Position[] | ReactAMap.Position[][]) {
    if (path.length) {
      return path.map((p, index) => {
        if (Array.isArray(p[index])) {
          return this.buildPathValue(p);
        }
        return toLnglat(p);
      });
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
    return React.cloneElement(React.Children.only(children), {
      poly: this.internalObj,
      map: this.map
    })
  }

  render() {
    return this.state.loaded ? (this.renderEditor(this.props.children)) : null
  }
}
