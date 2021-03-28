import { render } from 'react-dom';
import { withPropsReactive, toLnglat, toPixel, hasWindow } from '../../utils';
import { AbstractComponent } from '../AbstractComponent';
import { MarkerProps, MarkerState } from './types';
import { renderMarkerComponent } from './utils';
import { allProps } from './config';

class Marker extends AbstractComponent<AMap.Marker, MarkerProps, MarkerState> {
  private map: AMap.Map;
  private contentWrapper: HTMLDivElement;

  constructor(props: MarkerProps) {
    super(props);

    if (hasWindow) {
      if (props.map) {
        const self = this;

        this.map = props.map;

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
          zIndex(val: number) {
            self.internalObj?.setzIndex(val);
          }
        }

        this.converterMap = {
          position: toLnglat,
          offset: toPixel
        }

        this.createInstance(props)
          .then(() => {
            this.props.onInstanceCreated?.()
          });
      }
    }
  }

  shouldComponentUpdate() {
    return false
  }

  componentWillReceiveProps(nextProps: MarkerProps) {
    if (this.map) {
      this.refreshMarkerLayout(nextProps);
    }
  }

  createInstance(props: MarkerProps) {
    const options = this.buildCreateOptions(props);
    const marker = new window.AMap.Marker(options);

    this.setInstance(marker);

    marker['render'] = (function(marker) {
      return function(component) {
        renderMarkerComponent(component, marker)
      }
    })(this.internalObj);
    this.setMarkerLayout(props);
    this.setChildComponent(props);
    return Promise.resolve(this.instance);
  }

   // 在创建实例时根据传入配置，设置初始化选项
   buildCreateOptions(props: MarkerProps) {
    let opts: AMap.Marker.Options = {}
    allProps.forEach((key) => {
      if (key in props) {
        opts[key] = this.getSetterValue(key, props);
      }
    })
    opts.map = this.map;
    return opts;
  }

  createContentWrapper() {
    this.contentWrapper = document.createElement('div');
    this.internalObj.setContent(this.contentWrapper);
  }

  // 初始化标记的外观
  setMarkerLayout(props: MarkerProps) {
    if (('render' in props) || ('children' in props && props.children)) {
      this.createContentWrapper()
      if ('className' in props && props.className) {
        this.contentWrapper.className = props.className;
      }
    }
  }

  setChildComponent(props: MarkerProps) {
    if (this.contentWrapper) {
      if ('className' in props && props.className) {
        this.contentWrapper.className = props.className
      }
      if ('render' in props) {
        renderMarkerComponent(props.render, this.internalObj)
      } else if ('children' in props) {
        const child = props.children
        const childType = typeof child
        if (childType !== 'undefined' && this.contentWrapper) {
          render(<div>{child}</div>, this.contentWrapper)
        }
      }
    }
  }

  refreshMarkerLayout(nextProps: MarkerProps) {
    this.setChildComponent(nextProps)
  }
}

export default withPropsReactive<AMap.Marker, MarkerProps>(Marker);
