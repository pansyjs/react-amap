import React, { useEffect, useState, } from 'react';
import { Options, load } from '@pansy/amap-api-loader';
import { getAMap } from '@pansy/react-amap-core';

export interface APILoaderProps extends Omit<Options, 'key'> {
  /**
   * 开发者秘钥
   */
  mapKey?: string;
  /**
   * 加载效果组件
   * */
  loading?: React.ReactNode;
  /**
   * 资源加载完成
   */
  onComplete?: (aMap: typeof AMap) => void;
}

export const APILoader: React.FC<APILoaderProps> = ({
  loading,
  children,
  onComplete,
  ...rest
}) => {
  const [success, setSuccess] = useState<boolean>(false);
  const [loaded, setLoaded] = useState<boolean>(true);

  useEffect(
    () => {
      load({
        ...rest,
        key: rest.mapKey,
      })
        .then(() => {
          const AMap = getAMap();
          onComplete?.(AMap);
          setSuccess(true)
          setLoaded(false);
        })
        .catch((err) => {
          setLoaded(false);
        });
    },
    [JSON.stringify(rest)]
  );

  if (loaded && loading) {
    return (
      <>{loading}</>
    )
  }

  return (
    <>
      {success && children}
    </>
  );
}
