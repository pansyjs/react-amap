/**
  * desc: 只需要加载高德API
  */
import { Map } from '@pansy/react-amap';

const TestChild = () => {
  console.log(window.AMap);

  return (
    <div>
      子组件
    </div>
  )
}

export default () => {
  return (
    <div style={{ height: 500 }}>
      <Map isRender={false}>
        <TestChild />
      </Map>
    </div>
  );
};
