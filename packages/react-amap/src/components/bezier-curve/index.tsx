import React from 'react';
import { AbstractComponent } from '../AbstractComponent';
import { hasWindow, withPropsReactive } from '../../utils';
import { BezierCurveProps, BezierCurveState, Style } from './types';
import { allProps } from './config';

class InternalBezierCurve extends AbstractComponent<AMap.BezierCurve, BezierCurveProps, BezierCurveState> {
  private map: AMap.Map;
  private element: HTMLElement;

  constructor(props: BezierCurveProps) {
    super(props);

    if (hasWindow) {
      if (props.map) {
        const self = this;

        this.map = props.map;
        this.element = this.map.getContainer() as HTMLDivElement;
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
            self.internalObj.setOptions(val)
          }
        }

        this.converterMap = {}

        this.createInstance(props).then(() => {
          this.setState({
            loaded: true
          });
          this.props.onInstanceCreated?.()
        })
      }
    }
  }

  createInstance(props: BezierCurveProps) {
    const options = this.buildCreateOptions(props)
    options.map = this.map;
    this.setInstance(new window.AMap.BezierCurve(options));
    return Promise.resolve(this.instance);
  }

  buildCreateOptions(props: BezierCurveProps) {
    const options: AMap.BezierCurve.Options = {}
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

  renderEditor(children: any) {
    if (!children) {
      return null
    }
    if (React.Children.count(children) !== 1) {
      return null
    }
    const child = React.Children.only(children)
    return React.cloneElement(child, {
      bezierCurve: this.internalObj,
      map: this.map,
      ele: this.element
    });
    return null
  }

  render() {
    return this.state.loaded ? (this.renderEditor(this.props.children)) : null
  }
}

export const BezierCurve = withPropsReactive<AMap.BezierCurve, BezierCurveProps>(InternalBezierCurve);
