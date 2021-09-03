import React, { useEffect, useState, } from 'react';
import { Options, load } from '@pansy/amap-api-loader';

export interface APILoaderProps extends Options {
  /** 加载效果组件 */
  loading?: React.ReactNode;
  onCreate?: (aMap: typeof AMap) => void;
}

export const APILoader: React.FC<APILoaderProps> = ({
  loading,
  children,
  onCreate,
  ...rest
}) => {
  const [success, setSuccess] = useState<boolean>(false);
  const [loaded, setLoaded] = useState<boolean>(true);

  useEffect(
    () => {
      load(rest)
        .then((obj) => {
          onCreate?.(obj);
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
