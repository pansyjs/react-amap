import React from 'react';

export function buildCreateOptions<Props extends { style?: object }, Options extends {}> (
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
      if (key === 'style' && (props.style !== undefined)) {
        const styleItem = Object.keys(props.style)
        styleItem.forEach((item) => {
          options[item] = props.style[item]
        })
      } else if (key !== 'visible') {
        options[key] = getSetterValue(key, props)
      }
    }
  });

  return options;
}

interface RenderEditorOptions<Instance> {
  key: string,
  map: AMap.Map,
  instance: Instance,
}

export function renderEditor<Instance>(
  children: any,
  options: RenderEditorOptions<Instance>
) {
  if (!children) {
    return null
  }

  if (React.Children.count(children) !== 1) {
    return null
  }

  return React.cloneElement(React.Children.only(children), {
    [`${options.key}`]: options.instance,
    map: options.map
  });
}
