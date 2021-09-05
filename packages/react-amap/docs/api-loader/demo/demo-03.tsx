import { APILoader } from '@pansy/react-amap';

export default () => {
  return (
    <APILoader
      Loca={{}}
      onCreate={() => {
        console.log('已加载 Loca Api');
        console.log(window.Loca);
      }}
    >
      Loca Api 已加载
    </APILoader>
  );
};

