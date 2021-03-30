import { hasWindow } from '../utils';
import { AbstractComponent } from '../AbstractComponent';
import { ControlBarProps, ControlBarState } from './types';
import { allProps } from './config';

export class InternalControlBar extends AbstractComponent<AMap.ControlBar, ControlBarProps, ControlBarState> {
  private map: AMap.Map;

  static defaultProps: ControlBarProps = {
    showControlButton: false
  }

  constructor(props: ControlBarProps) {
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
          }
        }

        this.converterMap = {}

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

  createInstance(props: ControlBarProps) {
    return new Promise<AMap.ControlBar>((resolve) => {
      this.map.plugin(['AMap.ControlBar'], () => {
        const options = this.buildCreateOptions(props);
        this.setInstance(new AMap.ControlBar(options));
        resolve(this.instance);
      });
    });
  }

  buildCreateOptions(props: ControlBarProps) {
    const options: AMap.ControlBar.Options = {}
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
