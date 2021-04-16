export const setterMap = {
  active(val: boolean, editor: AMap.RectangleEditor) {
    if (editor) {
      if (val) {
        editor.open()
      } else {
        editor.close()
      }
    }
  }
}

export const converterMap = {};
