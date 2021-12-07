import { useState } from 'react';
import { Button } from 'antd';
import { Map, Marker } from '@pansy/react-amap';

export default () => {
  const [marks, setMarks] = useState([
    {
      id: 1,
      position: {
        latitude: 39.902908,
        longitude: 116.405179,
      },
      year: 2021,
      list: [1, 2, 3],
      name: "111"
    },
    {
      id: 2,
      lat: "",
      position: {
        latitude: 36.102908,
        longitude: 116.405179,
      },
      lnt: "",
      year: 2021,
      list: [11, 22, 33],
      name: "222"
    }
  ]);

  const toggleList = () => {
    setMarks(marks.map(mark => {
      return {
        ...mark,
        year: 2022,
      }
    }));
  };

  return (
    <div style={{ height: 500 }}>
      <Map zoom={4}>
        {marks.map((item) => (
          <Marker
            key={item.id}
            position={item.position}
            extData={item}
            offset={[-25, -25]} // 宽高的一半
            events={{
              click: (e,) => {
                console.log(e.target.getExtData());
              }
            }}
          >
            <div
              style={{
                width: 50,
                height: 50,
                backgroundColor: 'pink',
                borderRadius: '50%',
                lineHeight: '50px',
                textAlign: 'center',
              }}
            >
              {item.year}
            </div>
          </Marker>
        ))}
        <Button onClick={toggleList}>
          更改数据
        </Button>
      </Map>
    </div>
  );
};

