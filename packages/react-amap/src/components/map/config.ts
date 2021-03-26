import React from 'react';

export const NativeDynamicProps: string[] = [
  'layers',
  'zoom',
  'center',
  'labelzIndex',
  'mapStyle',
  'features',
  'cursor',
  'pitch'
];

export const StatusDynamicProps: string[] = [
  'animateEnable',
  'doubleClickZoom',
  'dragEnable',
  'isHotspot',
  'jogEnable',
  'keyboardEnable',
  'resizeEnable',
  'rotateEnable',
  'scrollWheel',
  'touchZoom',
  'zoomEnable',
  'touchZoomCenter'
];

export const StaticProps: string[] = [
  'view',
  'zooms',
  'showIndoorMap',
  'indoorMap',
  'expandZoomRange',
  'showBuildingBlock',
  'viewMode',
  'pitchEnable',
  'buildingAnimation',
  'skyColor'
];

export const wrapperStyle: React.CSSProperties = {
  width: '100%',
  height: '100%',
  position: 'relative'
}
export const containerStyle: React.CSSProperties = {
  width: '100%',
  height: '100%'
}

export const CreateProps = NativeDynamicProps.concat(StatusDynamicProps, StaticProps)
