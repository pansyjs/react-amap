import { hasWindow, toPixel } from '../utils';
import { AbstractComponent } from '../AbstractComponent';
import { ToolBarProps, ToolBarState } from './types';
import { allProps } from './config';

export class InternalToolBar extends AbstractComponent<AMap.ToolBar, ToolBarProps, ToolBarState> {
  private map: AMap.Map;

  constructor(props: ToolBarProps) {
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
          direction(val: boolean) {
            if (self.internalObj) {
              if (val) {
                self.internalObj.showDirection()
              } else {
                self.internalObj.hideDirection()
              }
            }
          },
          ruler(val: boolean) {
            if (self.internalObj) {
              if (val) {
                self.internalObj.showRuler()
              } else {
                self.internalObj.hideRuler()
              }
            }
          },
          locate(val: boolean) {
            if (self.internalObj) {
              if (val) {
                self.internalObj.showLocation()
              } else {
                self.internalObj.hideLocation()
              }
            }
          },
        }

        this.converterMap = {
          offset: toPixel
        };

        this.createInstance(props)
          .then(() => {
            this.setState({
              loaded: true
            });
            this.map.addControl(this.internalObj);
            this.props.onInstanceCreated?.()
          })
      }
    }
  }

  createInstance(props: ToolBarProps) {
    return new Promise<AMap.ToolBar>((resolve) => {
      this.map.plugin(['AMap.ToolBar'], () => {
        const options = this.buildCreateOptions(props);
        this.setInstance(new AMap.ToolBar(options));
        resolve(this.instance);
      });
    });
  }

  buildCreateOptions(props: ToolBarProps) {
    const options: AMap.ToolBar.Options = {}
    allProps.forEach((key) => {
      if (key in props) {
        if (key !== 'visible') {
          options[key] = this.getSetterValue(key, props)
        }
      }
    })
    return options;
  }
}
