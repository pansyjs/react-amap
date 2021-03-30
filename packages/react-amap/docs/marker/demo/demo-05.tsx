import { Map, Marker } from '@pansy/react-amap';

export default () => {
  return (
    <div style={{ height: 500 }}>
      <Map zoom={4}>
        <div>
          <Marker
            position={{
              longitude: 121,
              latitude: 36
            }}
            events={{
              created: (instance) => {
                console.log('Marker 实例创建成功；如果你需要对原生实例进行操作，可以从这里开始；');
                console.log(instance);
              },
              click: (e) => {
                console.log("你点击了这个图标；调用参数为：");
                console.log(e);
              },
            }}
          />
        </div>
      </Map>
    </div>
  );
};

