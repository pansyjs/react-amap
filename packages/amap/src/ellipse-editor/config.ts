export const setterMap = {
  active(val: boolean, instance: AMap.CircleEditor) {
    if (instance) {
      if (val) {
        instance.open()
      } else {
        instance.close()
      }
    }
  }
}

export const converterMap = {};
