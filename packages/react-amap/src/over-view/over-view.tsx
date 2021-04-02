import { hasWindow, toPixel } from '../utils';
import { AbstractComponent } from '../AbstractComponent';
import { OverViewProps, OverViewState } from './types';
import { allProps } from './config'


export class InternalOverView extends AbstractComponent<AMap.OverView, OverViewProps, OverViewState> {
  private map: AMap.Map;

  constructor(props: OverViewProps) {
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
          isOpen(val: boolean) {
            if (self.internalObj) {
              if (val) {
                self.internalObj.open()
              } else {
                self.internalObj.close()
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

  createInstance(props: OverViewProps) {
    return new Promise<AMap.OverView>((resolve) => {
      const opts = this.buildCreateOptions(props);
      this.map.plugin(['AMap.OverView'], () => {
        this.setInstance(new AMap.OverView(opts));
        resolve(this.instance);
      });
    });
  }

  buildCreateOptions(props: OverViewProps) {
    const options: AMap.OverView.Options = {}
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
