export interface Style extends ReactAMap.StrokeStyle, ReactAMap.FillStyle {};
export type StyleKeys = ReactAMap.$Keys<Style>;

export interface EventMap<ExtraData = any> extends ReactAMap.GetEventFunObject<AMap.Rectangle.EventMap<AMap.Rectangle<ExtraData>>> {
  /** 创建事件 */
  created?: (instance: AMap.Rectangle<ExtraData>) => void;
}

export type Bounds = AMap.Bounds | [ReactAMap.Position, ReactAMap.Position];

export interface RectangleProps<ExtraData = any>
  extends Omit<AMap.Rectangle.Options<ExtraData>, StyleKeys | 'bounds'>
{
  /** 矩形的样式 */
  style?: Style;
  /** 是否显示 */
  visible?: boolean;
  /** 矩形的范围 */
  bounds?: Bounds;
  events?: EventMap<ExtraData>;
}

export type RectangleType = React.ForwardRefRenderFunction<AMap.Rectangle, RectangleProps>;
