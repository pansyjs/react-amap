export const configurableProps = [
  /** 动态属性 */
  'type',
  'city',
  'citylimit',
];

export const allProps = configurableProps.concat([
  'datatype',
  'input',
  'output',
  'outPutDirAuto',
  'closeResultOnScroll',
  'lang',
]);

export const setterMap = {
  type(type: string, instance: AMap.AutoComplete) {
    if (instance) {
      instance.setType(type);
    }
  },
  city(city: string, instance: AMap.AutoComplete) {
    if (instance) {
      instance.setCity(city);
    }
  },
  citylimit(citylimit: boolean, instance: AMap.AutoComplete) {
    if (instance) {
      instance.setCityLimit(citylimit);
    }
  },
}

export const converterMap = {}
