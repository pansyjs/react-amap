declare namespace AMap {
  namespace AMapUI {
    namespace PointSimplifier {
      namespace Render {
        namespace Canvas {
          namespace GroupStyleRender {
            type GroupId = number | string;

            interface GroupStyle {
              pointStyle?: Canvas.PointStyle;
              pointHardcoreStyle?: Canvas.PointStyle;
              pointPositionStyle?: Canvas.PointStyle;
            }

            type GroupStyleOptionsO = Record<GroupId, GroupStyle>;

            type GroupStyleOptionsF = (groupId: GroupId) => GroupStyle;

            interface Options extends Canvas.Options {
              /**
               * 返回某个数据项的分组Id
               */
              getGroupId?: (item: any, index: number) => GroupId;
              /**
               * 分组样式
               */
              groupStyleOptions?: GroupStyleOptionsO | GroupStyleOptionsF;
            }
          }

          class GroupStyleRender {
            constructor(opts: GroupStyleRender.Options);
          }
        }
      }
    }
  }
}
