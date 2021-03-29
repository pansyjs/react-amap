import { useState } from 'react';
import { Map, BezierCurve } from '@pansy/react-amap';

export default () => {
  const [visible, setVisible] = useState<boolean>(true);
  const [draggable, setDraggable] = useState<boolean>(true);
  const path = [//每个弧线段有两种描述方式
    [116.39, 39.91, 116.37, 39.91],//起点
    //第一段弧线
    [116.380298, 39.907771, 116.38, 39.90],//控制点，途经点
    //第二段弧线
    [116.385298, 39.907771, 116.40, 39.90],//控制点，途经点//弧线段有两种描述方式1
    //第三段弧线
    [//弧线段有两种描述方式2
      [116.392872, 39.887391],//控制点
      [116.40772, 39.909252],//控制点
      [116.41, 39.89]//途经点
    ],
    //第四段弧线
    [116.423857, 39.889498, 116.422312, 39.899639, 116.425273, 39.902273]
    //控制点，控制点，途经点，每段最多两个控制点
  ];

  const toggleVisible = () => {
    setVisible((prev) => !prev);
  }

  const toggleDraggable = () => {
    setDraggable((prev) => !prev);
  }

  return (
    <div style={{ height: 500 }}>
      <Map zoom={14} center={[116.397637, 39.900001]}>
        <BezierCurve
          path={path}
          draggable={draggable}
          visible={visible}
        />
      </Map>
      <button onClick={toggleVisible}>Toggle Visible</button>
      <button onClick={toggleDraggable}>Toggle Draggable</button>
    </div>
  );
};

