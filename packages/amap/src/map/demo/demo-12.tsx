/**
  * desc: 通过 status 属性可以统一配置其他几个布尔值属性, animateEnable, doubleClickZoom, dragEnable, isHotspot, jogEnable, keyboardEnable, resizeEnable, rotateEnable, scrollWheel, touchZoom, zoomEnable。它们既可以通过 status 属性提供对象统一配置，也可以单独提供属性配置。status优先级最高。
  */
import { useState } from 'react';
import { Button } from 'antd';
import { Map } from '@pansy/react-amap';

const themeMap = {
  dark: 'amap://styles/dark',
  light: 'amap://styles/light',
}

export default () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prev) => prev === 'light' ? 'dark' : 'light')
  }

  return (
    <div style={{ height: 500 }}>
      <Map mapStyle={themeMap[theme]} />
      <Button onClick={toggleTheme}>切换主题</Button>
    </div>
  );
};
