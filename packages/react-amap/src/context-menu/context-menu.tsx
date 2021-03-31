import React from 'react';
import { hasWindow } from '../utils';
import { MapEventMap } from '../map/types';
import { AbstractComponent } from '../AbstractComponent';
import { ContextMenuProps, ContextMenuState } from './types';
import { allProps } from './config';

export class InternalContextMenu extends AbstractComponent<
  AMap.ContextMenu,
  ContextMenuProps,
  ContextMenuState
> {
  private map: AMap.Map;

  constructor(props: ContextMenuProps) {
    super(props);

    if (hasWindow) {
      if (props.map) {
        this.map = props.map;
        this.state = {
          loaded: false
        };

        this.setterMap = {}
        this.converterMap = {}

        this.createInstance(props)
          .then(() => {
            this.setState({
              loaded: true
            });
            this.map.on('rightclick', this.mapRightClick);
            this.internalObj.close();

            // TODO: 需要找下原因，暂时这么解决
            setTimeout(() => {
              this.internalObj.close();
            }, 200);
            this.props.onInstanceCreated?.();
          })
      }
    }
  }

  componentWillUnmount() {
    if (this.internalObj) {
      this.map.off('rightclick', this.mapRightClick);
      this.map.remove(this.internalObj);
    }
  }

  createInstance(props: ContextMenuProps) {
    const options = this.buildCreateOptions(props);
    this.setInstance(new window.AMap.ContextMenu(options));
    return Promise.resolve(this.instance);
  }

  mapRightClick: MapEventMap['rightclick'] = (e) => {
    this.internalObj.open(this.map, e.lnglat);
  }

  buildCreateOptions(props: ContextMenuProps) {
    const options: AMap.ContextMenu.Options = {}
    allProps.forEach((key) => {
      if (key in props) {
        options[key] = this.getSetterValue(key, props);
      }
    })
    return options;
  }

  renderChildren = () => {
    const childs = React.Children.toArray(this.props.children);

    return (
      <>
        {
          childs.map((child, key) => {
            if (!React.isValidElement(child)) return null;
            return React.cloneElement(child, {
              ...child.props,
              map: this.map,
              contextMenu: this.internalObj,
              key
            });
          })
        }
      </>
    );
  }

  render() {
    return this.state.loaded ? this.renderChildren() : null
  }
}
