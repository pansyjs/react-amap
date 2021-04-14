export function buildCreateOptions<Props extends {}, Options extends {}> (
  props: Props,
  allProps: string[],
  converterMap: Record<string, any>
) {
  const options: Options = {} as Options;

  const getSetterValue = (key: string, props: Props) => {
    if (key in converterMap) {
      return converterMap[key](props[key])
    }
    return props[key];
  }

  allProps.forEach((key) => {
    if (key in props) {
      if (key !== 'visible') {
        options[key] = getSetterValue(key, props)
      }
    }
  })
  return options;
}
