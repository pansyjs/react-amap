"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4851],{625:function(B,S,u){u.d(S,{S:function(){return I},X:function(){return s}});var l=u(50959),s=(0,l.createContext)({}),I=function(){return(0,l.useContext)(s)}},34422:function(B,S,u){u.d(S,{D:function(){return te}});var l=u(50959),s=u(35354),I=u(80667),i=u(66724),O=["layers","zoom","zooms","center","labelzIndex","lang","mapStyle","features","cursor","pitch","mask","defaultLayer"],M=["animateEnable","doubleClickZoom","dragEnable","isHotspot","jogEnable","keyboardEnable","pitchEnable","resizeEnable","rotateEnable","scrollWheel","touchZoom","zoomEnable"],x=["view","showIndoorMap","indoorMap","expandZoomRange","touchZoomCenter","showBuildingBlock","viewMode","buildingAnimation","skyColor"],a={width:"100%",height:"100%",position:"relative"},o={width:"100%",height:"100%"},f=O.concat(M,x),b={zoom:function(t,r){r&&r.setZoom(t)},cursor:function(t,r){r&&r.setDefaultCursor(t)},labelzIndex:function(t,r){r&&r.setLabelzIndex(t)}},P={center:i.t,mapStyle:function(t){return t.indexOf("amap://styles")===0?t:"amap://styles/".concat(t)}},h=u(95704),m=u(11527),g=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=(0,l.useRef)(),n=(0,l.useRef)(),c=(0,I.s)(t,n,{setterMap:b,converterMap:P}),v=c.loaded,L=c.prevProps,C=c.onInstanceCreated;(0,l.useEffect)(function(){E().then(function(){var j;(j=t.onMapCreate)===null||j===void 0||j.call(t,n.current),C==null||C(n.current)})},[]),(0,l.useEffect)(function(){v&&Y(L,t)},[t]);var E=function(){var d=W(),p=(0,h.rr)();return n.current=new p.Map(r.current,d),Promise.resolve()},W=function(){var d={};return f.forEach(function(p){p in t&&(d[p]=U(p,t))}),d},U=function(d,p){return d in P?P[d](p[d]):p[d]},Y=function(d,p){var D={},R=!1,G=!1;M.forEach(function(z){z in p&&(G=!0,$(z,d,p)&&(R=!0,D[z]=p[z]))}),R&&n.current.setStatus(D)},$=function(d,p,D){return p[d]!==D[d]};return(0,m.jsxs)("div",{style:a,children:[(0,m.jsx)("div",{ref:r,style:o,children:v?null:t.loading}),(0,m.jsx)("div",{children:v?t.children:null})]})},w=u(625);function y(e){"@babel/helpers - typeof";return y=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},y(e)}var T=["mapKey","version","plugins","AMapUI","Loca","loading","onComplete","onMapCreate"];function Z(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(c){return Object.getOwnPropertyDescriptor(e,c).enumerable})),r.push.apply(r,n)}return r}function A(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?Z(Object(r),!0).forEach(function(n){H(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Z(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function H(e,t,r){return t=F(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function F(e){var t=K(e,"string");return y(t)==="symbol"?t:String(t)}function K(e,t){if(y(e)!=="object"||e===null)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t||"default");if(y(n)!=="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function V(e,t){return q(e)||k(e,t)||N(e,t)||J()}function J(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function N(e,t){if(e){if(typeof e=="string")return Q(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return Q(e,t)}}function Q(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function k(e,t){var r=e==null?null:typeof Symbol!="undefined"&&e[Symbol.iterator]||e["@@iterator"];if(r!=null){var n,c,v,L,C=[],E=!0,W=!1;try{if(v=(r=r.call(e)).next,t===0){if(Object(r)!==r)return;E=!1}else for(;!(E=(n=v.call(r)).done)&&(C.push(n.value),C.length!==t);E=!0);}catch(U){W=!0,c=U}finally{try{if(!E&&r.return!=null&&(L=r.return(),Object(L)!==L))return}finally{if(W)throw c}}return C}}function q(e){if(Array.isArray(e))return e}function _(e,t){if(e==null)return{};var r=ee(e,t),n,c;if(Object.getOwnPropertySymbols){var v=Object.getOwnPropertySymbols(e);for(c=0;c<v.length;c++)n=v[c],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function ee(e,t){if(e==null)return{};var r={},n=Object.keys(e),c,v;for(v=0;v<n.length;v++)c=n[v],!(t.indexOf(c)>=0)&&(r[c]=e[c]);return r}var te=l.forwardRef(function(e,t){var r=e.mapKey,n=e.version,c=e.plugins,v=e.AMapUI,L=e.Loca,C=e.loading,E=e.onComplete,W=e.onMapCreate,U=_(e,T),Y=(0,l.useState)(),$=V(Y,2),j=$[0],d=$[1],p=(0,l.useState)(),D=V(p,2),R=D[0],G=D[1];return(0,l.useImperativeHandle)(t,function(){return R},[R]),(0,m.jsx)(w.X.Provider,{value:{AMap:j,map:R},children:(0,m.jsx)(s._,{mapKey:r,version:n,plugins:c,Loca:L,AMapUI:v,loading:C,onComplete:function(X){E==null||E(X),d(X)},children:(0,m.jsx)(g,A(A({loading:C},U),{},{onMapCreate:function(X){G(X)}}))})})})},76746:function(B,S,u){u.d(S,{T:function(){return M},p:function(){return x}});var l=u(50959);function s(a){"@babel/helpers - typeof";return s=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(o){return typeof o}:function(o){return o&&typeof Symbol=="function"&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},s(a)}function I(a,o,f){return o=i(o),o in a?Object.defineProperty(a,o,{value:f,enumerable:!0,configurable:!0,writable:!0}):a[o]=f,a}function i(a){var o=O(a,"string");return s(o)==="symbol"?o:String(o)}function O(a,o){if(s(a)!=="object"||a===null)return a;var f=a[Symbol.toPrimitive];if(f!==void 0){var b=f.call(a,o||"default");if(s(b)!=="object")return b;throw new TypeError("@@toPrimitive must return a primitive value.")}return(o==="string"?String:Number)(a)}function M(a,o,f){var b={},P=function(m,g){return m in f?f[m](g[m]):g[m]};return o.forEach(function(h){if(h in a)if(h==="style"&&a.style!==void 0){var m=Object.keys(a.style);m.forEach(function(g){b[g]=a.style[g]})}else h!=="visible"&&(b[h]=P(h,a))}),b}function x(a,o){var f;return!a||l.Children.count(a)!==1?null:l.cloneElement(l.Children.only(a),(f={},I(f,"".concat(o.key),o.instance),I(f,"map",o.map),f))}},66724:function(B,S,u){u.d(S,{t:function(){return s}});var l=u(95704),s=function(i){if(!i)return null;if("getLng"in i&&"getLat"in i)return i;var O=0,M=0;Array.isArray(i)?(O=i[0],M=i[1]):"lng"in i&&"lat"in i?(O=i.lng,M=i.lat):"longitude"in i&&"latitude"in i&&(O=i.longitude,M=i.latitude);var x=(0,l.rr)();return l.Ym&&x?new x.LngLat(O,M):null}},49337:function(B,S,u){u.r(S),u.d(S,{default:function(){return m}});var l=u(34422),s=u(50959),I=u(625),i=u(80667),O=u(76746),M=u(66724),x=["center","radius","draggable","extData","visible","style"],a=x.concat(["zIndex","bubble"]),o={visible:function(w,y){y&&(w?y.show():y.hide())},style:function(w,y){y&&y.setOptions(w)}},f={center:M.t},b=s.forwardRef(function(){var g=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},w=arguments.length>1?arguments[1]:void 0,y=(0,I.S)(),T=y.map,Z=y.AMap,A=(0,s.useRef)(null),H=(0,i.s)(g,A,{setterMap:o,converterMap:f}),F=H.loaded,K=H.onInstanceCreated;(0,s.useEffect)(function(){T&&V().then(function(){K==null||K(A.current)})},[T]),(0,s.useImperativeHandle)(w,function(){return A.current},[A.current,F]);var V=function(){var N=(0,O.T)(g,a,f);return N.map=T,A.current=new Z.CircleMarker(N),Promise.resolve()};return null}),P=u(11527),h={strokeColor:"#fff",strokeWeight:2,strokeOpacity:.5,fillColor:"rgba(0,0,255,1)",fillOpacity:.5},m=function(){return(0,P.jsx)("div",{style:{height:500},children:(0,P.jsxs)(l.D,{zoom:4,center:[116.400274,39.905812],children:[(0,P.jsx)(b,{center:[116.407394,39.904211],radius:10+Math.random()*10,style:h,events:{click:function(){console.log("click")}}}),(0,P.jsx)(b,{center:[113.26641,23.132324],radius:10+Math.random()*10,style:h}),(0,P.jsx)(b,{center:[115.26641,27.132324],radius:10+Math.random()*10,style:h})]})})}}}]);
