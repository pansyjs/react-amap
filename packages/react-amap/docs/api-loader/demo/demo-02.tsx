import { APILoader } from '@pansy/react-amap';

export default () => {
  return (
    <APILoader
      AMapUI={{}}
      onCreate={() => {
        console.log('已加载 AMapUI Api');
        console.log(window.AMapUI);
      }}
    >
      AMapUI Api 已加载
    </APILoader>
  );
};

