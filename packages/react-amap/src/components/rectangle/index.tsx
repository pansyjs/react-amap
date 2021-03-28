import React from 'react';
import { toLnglat, hasWindow, withPropsReactive } from '../../utils';
import { AbstractComponent } from '../AbstractComponent';
import { RectangleProps, RectangleState, RectangleStyle, Bounds } from './types';
import { allProps } from './config';

class Rectangle extends AbstractComponent<AMap.Rectangle, RectangleProps, RectangleState> {
  private map: AMap.Map;
  private element: HTMLElement;

  constructor(props: RectangleProps) {
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
          style(val: RectangleStyle) {
            self.internalObj.setOptions(val)
          }
        }

        this.converterMap = {
          bounds(val: Bounds) {
            return self.buildBounds(val);
          }
        }

        this.createInstance(props)
          .then(() => {
            this.setState({
              loaded: true
            })
            this.props.onInstanceCreated?.()
          });
      }
    }
  }

  createInstance(props: RectangleProps) {
    const options = this.buildCreateOptions(props);
    options.map = this.map;
    this.setInstance(new window.AMap.Rectangle(options));
    return Promise.resolve(this.instance);
  }

  buildCreateOptions(props: RectangleProps) {
    const options: AMap.Rectangle.Options = {}
    allProps.forEach((key) => {
      if (key in props) {
        if ((key === 'style') && (props.style !== undefined)) {
          const styleItem = Object.keys(props.style)
          styleItem.forEach((item) => {
            options[item] = props.style[item]
          })
        } else if (key !== 'visible') {
          options[key] = this.getSetterValue(key, props);
        }
      }
    })
    return options;
  }

  private buildBounds(rawBounds: Bounds) {
    if (!rawBounds) {
      return rawBounds;
    }

    if ('getSouthWest' in rawBounds) {
      return rawBounds;
    }

    if (Array.isArray(rawBounds) && rawBounds.length === 2) {
      const bounds = new window.AMap.Bounds(
        ...rawBounds.map(toLnglat) as [AMap.LngLat, AMap.LngLat]
      );
      return bounds;
    }
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
      rectangle: this.internalObj,
      map: this.map,
      ele: this.element
    });
    return null
  }

  render() {
    return this.state.loaded ? (this.renderEditor(this.props.children)) : null
  }
}

export default withPropsReactive<AMap.Rectangle, RectangleProps>(Rectangle);
