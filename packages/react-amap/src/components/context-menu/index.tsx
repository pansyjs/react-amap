import React from 'react';
import { withPropsReactive, toLnglat, hasWindow } from '../../utils';
import { AbstractComponent } from '../AbstractComponent';
import { ContextMenuProps, ContextMenuState } from './types';
import { allProps } from './config';

class InternalContextMenu extends AbstractComponent<AMap.ContextMenu, ContextMenuProps, ContextMenuState> {
  private map: AMap.Map;
  private element: HTMLElement;

  constructor(props: ContextMenuProps) {
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
          style(val: ContextMenuProps) {
            // @ts-ignore
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

  createInstance(props: ContextMenuProps) {
    const options = this.buildCreateOptions(props)
    options.map = this.map;
    this.setInstance(new window.AMap.ContextMenu(options));
    return Promise.resolve(this.instance);
  }

  buildCreateOptions(props: ContextMenuProps) {
    const options: AMap.Circle.Options = {}
    allProps.forEach((key) => {
      if (key in props) {
        if (key !== 'visible') {
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
      polygon: this.internalObj,
      map: this.map,
      ele: this.element
    })
  }

  render() {
    return this.state.loaded ? (this.renderEditor(this.props.children)) : null
  }
}

export const ContextMenu = withPropsReactive<AMap.ContextMenu, ContextMenuProps>(InternalContextMenu);
