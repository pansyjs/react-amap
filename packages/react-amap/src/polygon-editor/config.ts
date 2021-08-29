export const setterMap = {
  active(val: boolean, instance: AMap.PolygonEditor) {
    if (instance) {
      if (val) {
        instance.open();
      } else {
        instance.close();
      }
    }
  }
}

export const converterMap = {};
