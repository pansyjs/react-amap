import React from 'react';
import { withPropsReactive, toLnglat, hasWindow } from '../../utils';
import { AbstractComponent } from '../AbstractComponent';
import { EllipseProps, EllipseState, Style } from './types';
import { allProps } from './config';

class Ellipse extends AbstractComponent<AMap.Ellipse, EllipseProps, EllipseState> {
  private map: AMap.Map;
  private element: HTMLElement;

  constructor(props: EllipseProps) {
    super(props);

    if (hasWindow) {
      if (props.map) {
        const self = this;

        this.map = props.map;
        this.element = this.map.getContainer();
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
          center: toLnglat
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

  createInstance(props: EllipseProps) {
    const options = this.buildCreateOptions(props)
    options.map = this.map;
    this.setInstance(new window.AMap.Ellipse(options));
    return Promise.resolve(this.instance);
  }

  buildCreateOptions(props: EllipseProps) {
    const options: AMap.Ellipse.Options = {}
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

  renderEditor(children: any) {
    if (!children) {
      return null
    }
    if (React.Children.count(children) !== 1) {
      return null
    }
    return React.cloneElement(React.Children.only(children), {
      ellipse: this.internalObj,
      map: this.map,
      ele: this.element
    })
  }

  render() {
    return this.state.loaded ? (this.renderEditor(this.props.children)) : null
  }
}

export default withPropsReactive<AMap.Ellipse, EllipseProps>(Ellipse);
