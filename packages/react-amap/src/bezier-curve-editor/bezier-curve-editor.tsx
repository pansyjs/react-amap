import { hasWindow } from '../utils';
import { AbstractComponent } from '../AbstractComponent';
import { BezierCurveEditorProps, BezierCurveEditorState } from './types';

// @ts-ignore
export class InternalBezierCurveEditor extends AbstractComponent<AMap.BezierCurveEditor, BezierCurveEditorProps, BezierCurveEditorState> {
  private map: AMap.Map;
  private bezierCurve: AMap.BezierCurve;

  constructor(props: BezierCurveEditorProps) {
    super(props);

    if (hasWindow) {
      if (props.map && props.bezierCurve) {
        const self = this;

        this.map = props.map;
        this.bezierCurve = props.bezierCurve;
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
      this.map.plugin(['AMap.BezierCurveEditor'], () => {
        this.setInstance(new AMap.BezierCurveEditor(this.map, this.bezierCurve));
        resolve(this.instance);
      });
    });
  }
}
