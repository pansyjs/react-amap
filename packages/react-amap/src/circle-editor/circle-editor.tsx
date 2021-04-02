import { hasWindow } from '../utils';
import { AbstractComponent } from '../AbstractComponent';
import { CircleEditorProps, CircleEditorState } from './types';

// @ts-ignore
export class InternalCircleEditor extends AbstractComponent<AMap.CircleEditor, CircleEditorProps, CircleEditorState> {
  private map: AMap.Map;
  private circle: AMap.Circle;

  constructor(props: CircleEditorProps) {
    super(props);

    if (hasWindow) {
      if (props.map && props.circle) {
        const self = this;

        this.map = props.map;
        this.circle = props.circle;
        this.state = {
          loaded: false
        };

        this.setterMap = {
          active(val: boolean) {
            if (self.internalObj) {
              if (val) {
                self.internalObj.open()
              } else {
                self.internalObj.close()
              }
            }
          }
        }

        this.converterMap = {};

        this.createInstance()
          .then(() => {
            this.setState({
              loaded: true
            });
            this.props.onInstanceCreated?.()
          })
      }
    }
  }

  createInstance() {
    return new Promise<AMap.CircleEditor>((resolve) => {
      this.map.plugin(['AMap.CircleEditor'], () => {

        this.setInstance(new AMap.CircleEditor(this.map, this.circle));
        resolve(this.instance);
      });
    });
  }
}
