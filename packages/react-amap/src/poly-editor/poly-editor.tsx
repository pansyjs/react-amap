import { hasWindow } from '../utils';
import { AbstractComponent } from '../AbstractComponent';
import { PolyEditorProps, PolyEditorState } from './types';

// @ts-ignore
export class InternalPolyEditor extends AbstractComponent<AMap.PolyEditor, PolyEditorProps, PolyEditorState> {
  private map: AMap.Map;
  private poly: AMap.Polyline | AMap.Polygon;

  constructor(props: PolyEditorProps) {
    super(props);

    if (hasWindow) {
      if (props.map && props.poly) {
        const self = this;

        this.map = props.map;
        this.poly = props.poly;
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
    return new Promise<AMap.PolyEditor>((resolve) => {
      this.map.plugin(['AMap.PolyEditor'], () => {

        this.setInstance(new AMap.PolyEditor(this.map, this.poly));
        resolve(this.instance);
      });
    });
  }
}
