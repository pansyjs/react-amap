import { APILoader } from '@pansy/react-amap';

export default () => {
  return (
    <APILoader
      plugins={['AMap.MarkerCluster']}
      AMapUI={{}}
      Loca={{}}
      onCreate={(obj) => {
        console.log(obj);
      }}
    >
      api 已加载
    </APILoader>
  );
};

