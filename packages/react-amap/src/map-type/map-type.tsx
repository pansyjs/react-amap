import { hasWindow } from '../utils';
import { AbstractComponent } from '../AbstractComponent';
import { MapTypeProps, MapTypeState } from './types';
import { allProps } from './config'


export class InternalMapType extends AbstractComponent<AMap.MapType, MapTypeProps, MapTypeState> {
  private map: AMap.Map;

  constructor(props: MapTypeProps) {
    super(props);

    if (hasWindow) {
      if (props.map) {
        this.map = props.map;
        this.state = {
          loaded: false
        };

        const self = this;

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

        this.converterMap = {};

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

  createInstance(props: MapTypeProps) {
    return new Promise<AMap.MapType>((resolve) => {
      const opts = this.buildCreateOptions(props);
      this.map.plugin(['AMap.MapType'], () => {
        this.setInstance(new AMap.MapType(opts));
        resolve(this.instance);
      });
    });
  }

  buildCreateOptions(props: MapTypeProps) {
    const options: AMap.MapType.Options = {}
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
