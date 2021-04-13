import { useState } from 'react';
import { Button, Space } from 'antd';
import { Map, Ellipse } from '@pansy/react-amap';
import { randomColor } from '../../utils';

export default () => {
  const [visible, setVisible] = useState<boolean>(true);
  const [center, setCenter] = useState<ReactAMap.Position>({
    longitude: 116,
    latitude: 39
  });
  const [radius, setRadius] = useState<[number, number]>([1000000, 200000]);
  const [draggable, setDraggable] = useState<boolean>(false);
  const [style, setStyle] = useState({ strokeColor: '#f00' });

  const handleChangeVisible = () => {
    setVisible(prev => !prev);
  }

  const handleChangeDraggable = () => {
    setDraggable(prev => !prev);
  }

  const changeCenter = () => {
    setCenter({
      longitude: 116 + Math.random() * 20,
      latitude: 39 + Math.random() * 10,
    });
  }

  const changeRadius = () => {
    setRadius([
      1000000 + Math.random() * 15000,
      200000 + Math.random() * 15000
    ])
  }

  const changeStyle = () => {
    setStyle({
      strokeColor: randomColor()
    });
  }

  return (
    <div style={{ height: 500 }}>
      <Map zoom={4}>
        <Ellipse
          visible={visible}
          style={style}
          draggable={draggable}
          center={center}
          radius={radius}
        />
      </Map>
      <Space direction="horizontal">
        <Button onClick={handleChangeVisible}>
          切换显示/隐藏
        </Button>
        <Button onClick={handleChangeDraggable}>
          切换拖拽
        </Button>
        <Button onClick={changeCenter}>
          随机的位置
        </Button>
        <Button onClick={changeRadius}>
          改变大小
        </Button>
        <Button onClick={changeStyle}>
          改变样式
        </Button>
      </Space>

    </div>
  );
};

