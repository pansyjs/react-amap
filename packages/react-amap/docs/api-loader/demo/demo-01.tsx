import { APILoader } from '@pansy/react-amap';

export default () => {
  return (
    <APILoader
      plugins={['MarkerCluster']}
      AMapUI={{}}
      Loca={{}}
    >
      123
    </APILoader>
  );
};

