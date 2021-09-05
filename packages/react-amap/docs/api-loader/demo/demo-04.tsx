import { APILoader } from '@pansy/react-amap';

export default () => {
  return (
    <APILoader
      plugins={['AMap.Scale']}
      onComplete={(obj) => {
        console.log('已加载 AMap Api 和 AMap.Scale 插件');
        console.log(obj);
      }}
    >
      高德 JS Api 、 AMap.Scale 插件 已加载
    </APILoader>
  );
};

