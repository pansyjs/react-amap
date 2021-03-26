
import { AbstractComponentProps } from '../AbstractComponent';

export interface PolylineProps extends
  AMap.Polyline.Options,
  PansyMap.BaseChildrenComponentProps,
  AbstractComponentProps
{
  style?: PolylineStyle;
  visible?: boolean;
}

interface PolylineStyle {
  /**
   * 线条是否带描边
   */
  isOutline?: boolean;
  /**
  * 线条描边颜色
  */
  outlineColor?: string;
  /**
  * 是否绘制成大地线
  */
  geodesic?: boolean;
  /**
   * 描边线条颜色
   */
  strokeColor?: string;
  /**
   * 描边线条透明度
   */
  strokeOpacity?: number;
  /**
   * 描边宽度
   */
  strokeWeight?: number;
  /**
   * 描边样式
   */
  strokeStyle?: AMap.StrokeStyle;
  /**
   * 虚线间隔
   */
  strokeDasharray?: number[];
  /**
   * 折线拐点的绘制样式
   */
  lineJoin?: AMap.StrokeLineJoin;
  /**
   * 折线两端线帽的绘制样式
   */
  lineCap?: AMap.StrokeLineCap;
}

export interface PolylineState {
  loaded: boolean
}
