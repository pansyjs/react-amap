import { hasWindow } from '../utils';
import { AbstractComponent } from '../AbstractComponent';
import { RectangleEditorProps, RectangleEditorState } from './types';

// @ts-ignore
export class InternalRectangleEditor extends AbstractComponent<AMap.RectangleEditor, RectangleEditorProps, RectangleEditorState> {
  private map: AMap.Map;
  private rectangle: AMap.Rectangle;

  constructor(props: RectangleEditorProps) {
    super(props);

    if (hasWindow) {
      if (props.map && props.rectangle) {
        const self = this;

        this.map = props.map;
        this.rectangle = props.rectangle;
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
    return new Promise<AMap.RectangleEditor>((resolve) => {
      this.map.plugin(['AMap.RectangleEditor'], () => {

        this.setInstance(new AMap.RectangleEditor(this.map, this.rectangle));
        resolve(this.instance);
      });
    });
  }
}
