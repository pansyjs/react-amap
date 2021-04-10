import { hasWindow, toPixel } from '../utils';
import { AbstractComponent } from '../AbstractComponent';
import { ScaleProps, ScaleState } from './types';
import { allProps } from './config'

export class InternalScale extends AbstractComponent<AMap.Scale, ScaleProps, ScaleState> {
  private map: AMap.Map;

  constructor(props: ScaleProps) {
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
        }

        this.converterMap = {
          offset: toPixel
        };

        this.createInstance(props)
          .then(() => {
            this.setState({
              loaded: true
            });
            this.map.addControl(this.instance);
            this.props.onInstanceCreated?.()
          })
      }
    }
  }

  createInstance(props: ScaleProps) {
    return new Promise<AMap.Scale>((resolve) => {
      const opts = this.buildCreateOptions(props);
      this.map.plugin(['AMap.Scale'], () => {
        this.setInstance(new AMap.Scale(opts));
        resolve(this.instance);
      });
    });
  }

  buildCreateOptions(props: ScaleProps) {
    const options: AMap.Scale.Options = {}
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
