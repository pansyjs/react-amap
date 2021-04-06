import { hasWindow } from '../utils';
import { HeatmapProps } from './types';
import { AbstractComponent } from '../AbstractComponent';
import { allProps } from './config';

// @ts-ignore
export class InternalHeatmap extends AbstractComponent<AMap.Heatmap, HeatmapProps> {
  private map: AMap.Map;

  constructor(props: HeatmapProps) {
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
          dataSet(data: AMap.Heatmap.DataSet) {
            console.log(data);
            if (self.internalObj) {
              self.internalObj.setDataSet(data);
            }
          },
        };

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

  createInstance(props: HeatmapProps) {
    return new Promise<AMap.Heatmap>((resolve) => {
      this.map.plugin(['AMap.Heatmap'], () => {
        const options = this.buildCreateOptions(props);
        const heatmap = new AMap.Heatmap(this.map, options);
        if (props.dataSet) {
          heatmap.setDataSet(props.dataSet)
        }
        this.setInstance(heatmap);

        resolve(this.instance);
      });
    });
  }

  buildCreateOptions(props: HeatmapProps) {
    const options: AMap.Heatmap.Options = {}
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
