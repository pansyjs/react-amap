import { render } from 'react-dom';
import { withPropsReactive, hasWindow, toSize, toPixel, toLnglat } from '../../utils';
import { AbstractComponent } from '../AbstractComponent';
import { InfoWindowProps } from './types';
import { allProps } from './config';

class InfoWindow extends AbstractComponent<AMap.InfoWindow, InfoWindowProps> {
  private map: AMap.Map;
  private infoDOM: HTMLDivElement;

  constructor(props: InfoWindowProps) {
    super(props);

    if (hasWindow) {
      if (props.map) {
        this.map = props.map;
        const self = this;

        this.setterMap = {
          visible(val) {
            if (val) {
              self.showWindow()
              self.setClassName(self.props)
              self.setChild(self.props)
            } else {
              self.closeWindow()
            }
          }
        }

        this.converterMap = {
          size: toSize,
          offset: toPixel,
          position: toLnglat
        };

        setTimeout(() => {
          this.createInfoWindow(props)
        }, 0);
      }
    }
  }

  shouldComponentUpdate() {
    return false
  }

  componentDidUpdate(nextProps: InfoWindowProps) {
    if (this.map) {
      this.refreshWindowLayout(nextProps)
    }
  }

  refreshWindowLayout(nextProps: InfoWindowProps) {
    this.setChild(nextProps)
    this.setClassName(nextProps)
  }

  showWindow() {
    this.internalObj.open(this.map, this.internalObj.getPosition())
  }

  closeWindow() {
    this.internalObj.close()
  }

  createInfoWindow(props: InfoWindowProps) {
    const options = this.buildCreateOptions(props);
    this.setInstance(new window.AMap.InfoWindow(options));
    this.props.onInstanceCreated?.()
  }

  buildCreateOptions(props: InfoWindowProps) {
    const options: AMap.InfoWindow.Options = {}

    // 如果开发者没有设置 isCustom 属性，默认设置为 false
    if ('isCustom' in props) {
      options.isCustom = !!props.isCustom
    } else {
      options.isCustom = false
    }

    if ('content' in props) {
      options.content = props.content
    } else {
      this.infoDOM = document.createElement('div')
      options.content = this.infoDOM
    }

    allProps.forEach((key) => {
      if (key in props) {
        if (['visible', 'isCustom', 'content'].indexOf(key) === -1) {
          options[key] = this.getSetterValue(key, props[key])
        }
      }
    })
    return options
  }

  getSetterValue(key: string, value: any) {
    if (key in this.converterMap) {
      return this.converterMap[key](value)
    }
    return value
  }

  setChild(props: InfoWindowProps) {
    const child = props.children
    if (this.infoDOM && child) {
      render(<div>{child}</div>, this.infoDOM)
    }
  }

  setClassName(props: InfoWindowProps) {
    if (this.infoDOM) {
      let baseClsValue = ''
      // 刷新 className
      if ('className' in props && props.className) {
        baseClsValue += props.className
      } else if (props.isCustom === true) {
        baseClsValue += 'amap_markers_pop_window'
      }
      this.infoDOM.className = baseClsValue
    }
  }
}

export default withPropsReactive<AMap.InfoWindow, InfoWindowProps>(InfoWindow)
