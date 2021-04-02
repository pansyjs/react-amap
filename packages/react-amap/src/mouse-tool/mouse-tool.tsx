import { hasWindow, toPixel } from '../utils';
import { AbstractComponent } from '../AbstractComponent';
import { MouseToolProps, MouseToolState } from './types';

// @ts-ignore
export class InternalMouseTool extends AbstractComponent<AMap.MouseTool, MouseToolProps, MouseToolState> {
  private map: AMap.Map;

  constructor(props: MouseToolProps) {
    super(props);

    if (hasWindow) {
      if (props.map) {
        const self = this;

        this.map = props.map;
        this.state = {
          loaded: false
        };

        this.setterMap = {}

        this.converterMap = {};

        this.createInstance(props)
          .then(() => {
            this.setState({
              loaded: true
            });
            this.props.onInstanceCreated?.()
          })
      }
    }
  }

  createInstance(props: MouseToolProps) {
    return new Promise<AMap.MouseTool>((resolve) => {
      this.map.plugin(['AMap.MouseTool'], () => {
        this.setInstance(new AMap.MouseTool(this.map));
        resolve(this.instance);
      });
    });
  }
}
