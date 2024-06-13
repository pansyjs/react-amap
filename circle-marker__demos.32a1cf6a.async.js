"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4851],{625:function(N,S,i){i.d(S,{S:function(){return w},X:function(){return s}});var c=i(50959),s=(0,c.createContext)({}),w=function(){return(0,c.useContext)(s)}},34422:function(N,S,i){i.d(S,{D:function(){return ue}});var c=i(50959),s=i(35354),w=i(80667),u=i(66724),M=["layers","zoom","zooms","center","labelzIndex","lang","mapStyle","features","cursor","pitch","mask","defaultLayer"],O=["animateEnable","doubleClickZoom","dragEnable","isHotspot","jogEnable","keyboardEnable","pitchEnable","resizeEnable","rotateEnable","scrollWheel","touchZoom","zoomEnable"],x=["view","showIndoorMap","indoorMap","expandZoomRange","touchZoomCenter","showBuildingBlock","viewMode","buildingAnimation","skyColor","WebGLParams"],a={width:"100%",height:"100%",position:"relative"},o={width:"100%",height:"100%"},f=M.concat(O,x),b={zoom:function(t,r){r&&r.setZoom(t)},cursor:function(t,r){r&&r.setDefaultCursor(t)},labelzIndex:function(t,r){r&&r.setLabelzIndex(t)}},P={center:u.t,mapStyle:function(t){return t.indexOf("amap://styles")===0?t:"amap://styles/".concat(t)}},g=i(95704),y=i(11527);function p(e){"@babel/helpers - typeof";return p=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},p(e)}function A(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),r.push.apply(r,n)}return r}function h(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?A(Object(r),!0).forEach(function(n){K(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):A(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function K(e,t,r){return t=$(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function $(e){var t=D(e,"string");return p(t)==="symbol"?t:String(t)}function D(e,t){if(p(e)!=="object"||e===null)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t||"default");if(p(n)!=="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var Z=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=(0,c.useRef)(),n=(0,c.useRef)(),l=(0,w.s)(t,n,{setterMap:b,converterMap:P}),v=l.loaded,L=l.prevProps,C=l.onInstanceCreated;(0,c.useEffect)(function(){j().then(function(){var E;(E=t.onMapCreate)===null||E===void 0||E.call(t,n.current),C==null||C(n.current)})},[]),(0,c.useEffect)(function(){v&&Y(L,t)},[t]);var j=function(){var d=U(),m=(0,g.rr)();return n.current=new m.Map(r.current,d),Promise.resolve()},U=function(){var d={};return f.forEach(function(m){m in t&&(d[m]=B(m,t))}),d},B=function(d,m){return d in P?P[d](m[d]):m[d]},Y=function(d,m){var R={},T=!1,J=!1;O.forEach(function(z){z in m&&(J=!0,H(z,d,m)&&(T=!0,R[z]=m[z]))}),T&&n.current.setStatus(R)},H=function(d,m,R){return m[d]!==R[d]};return(0,y.jsxs)("div",{className:t.className,style:h(h({},a),t.style),children:[(0,y.jsx)("div",{ref:r,style:o,children:v?null:t.loading}),(0,y.jsx)("div",{children:v?t.children:null})]})},X=i(625);function I(e){"@babel/helpers - typeof";return I=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},I(e)}var F=["mapKey","version","plugins","AMapUI","Loca","loading","onComplete","onMapCreate"];function G(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),r.push.apply(r,n)}return r}function W(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?G(Object(r),!0).forEach(function(n){q(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):G(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function q(e,t,r){return t=_(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function _(e){var t=ee(e,"string");return I(t)==="symbol"?t:String(t)}function ee(e,t){if(I(e)!=="object"||e===null)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t||"default");if(I(n)!=="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Q(e,t){return ae(e)||ne(e,t)||re(e,t)||te()}function te(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function re(e,t){if(e){if(typeof e=="string")return k(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return k(e,t)}}function k(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function ne(e,t){var r=e==null?null:typeof Symbol!="undefined"&&e[Symbol.iterator]||e["@@iterator"];if(r!=null){var n,l,v,L,C=[],j=!0,U=!1;try{if(v=(r=r.call(e)).next,t===0){if(Object(r)!==r)return;j=!1}else for(;!(j=(n=v.call(r)).done)&&(C.push(n.value),C.length!==t);j=!0);}catch(B){U=!0,l=B}finally{try{if(!j&&r.return!=null&&(L=r.return(),Object(L)!==L))return}finally{if(U)throw l}}return C}}function ae(e){if(Array.isArray(e))return e}function oe(e,t){if(e==null)return{};var r=ie(e,t),n,l;if(Object.getOwnPropertySymbols){var v=Object.getOwnPropertySymbols(e);for(l=0;l<v.length;l++)n=v[l],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function ie(e,t){if(e==null)return{};var r={},n=Object.keys(e),l,v;for(v=0;v<n.length;v++)l=n[v],!(t.indexOf(l)>=0)&&(r[l]=e[l]);return r}var ue=c.forwardRef(function(e,t){var r=e.mapKey,n=e.version,l=e.plugins,v=e.AMapUI,L=e.Loca,C=e.loading,j=e.onComplete,U=e.onMapCreate,B=oe(e,F),Y=(0,c.useState)(),H=Q(Y,2),E=H[0],d=H[1],m=(0,c.useState)(),R=Q(m,2),T=R[0],J=R[1];return(0,c.useImperativeHandle)(t,function(){return T},[T]),(0,y.jsx)(X.X.Provider,{value:{AMap:E,map:T},children:(0,y.jsx)(s._,{mapKey:r,version:n,plugins:l,Loca:L,AMapUI:v,loading:C,onComplete:function(V){j==null||j(V),d(V)},children:(0,y.jsx)(Z,W(W({loading:C},B),{},{onMapCreate:function(V){J(V)}}))})})})},76746:function(N,S,i){i.d(S,{T:function(){return O},p:function(){return x}});var c=i(50959);function s(a){"@babel/helpers - typeof";return s=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(o){return typeof o}:function(o){return o&&typeof Symbol=="function"&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},s(a)}function w(a,o,f){return o=u(o),o in a?Object.defineProperty(a,o,{value:f,enumerable:!0,configurable:!0,writable:!0}):a[o]=f,a}function u(a){var o=M(a,"string");return s(o)==="symbol"?o:String(o)}function M(a,o){if(s(a)!=="object"||a===null)return a;var f=a[Symbol.toPrimitive];if(f!==void 0){var b=f.call(a,o||"default");if(s(b)!=="object")return b;throw new TypeError("@@toPrimitive must return a primitive value.")}return(o==="string"?String:Number)(a)}function O(a,o,f){var b={},P=function(y,p){return y in f?f[y](p[y]):p[y]};return o.forEach(function(g){if(g in a)if(g==="style"&&a.style!==void 0){var y=Object.keys(a.style);y.forEach(function(p){b[p]=a.style[p]})}else g!=="visible"&&(b[g]=P(g,a))}),b}function x(a,o){var f;return!a||c.Children.count(a)!==1?null:c.cloneElement(c.Children.only(a),(f={},w(f,"".concat(o.key),o.instance),w(f,"map",o.map),f))}},66724:function(N,S,i){i.d(S,{t:function(){return s}});var c=i(95704),s=function(u){if(!u)return null;if("getLng"in u&&"getLat"in u)return u;var M=0,O=0;Array.isArray(u)?(M=u[0],O=u[1]):"lng"in u&&"lat"in u?(M=u.lng,O=u.lat):"longitude"in u&&"latitude"in u&&(M=u.longitude,O=u.latitude);var x=(0,c.rr)();return c.Ym&&x?new x.LngLat(M,O):null}},49337:function(N,S,i){i.r(S),i.d(S,{default:function(){return y}});var c=i(34422),s=i(50959),w=i(625),u=i(80667),M=i(76746),O=i(66724),x=["center","radius","draggable","extData","visible","style"],a=x.concat(["zIndex","bubble"]),o={visible:function(A,h){h&&(A?h.show():h.hide())},style:function(A,h){h&&h.setOptions(A)}},f={center:O.t},b=s.forwardRef(function(){var p=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},A=arguments.length>1?arguments[1]:void 0,h=(0,w.S)(),K=h.map,$=h.AMap,D=(0,s.useRef)(null),Z=(0,u.s)(p,D,{setterMap:o,converterMap:f}),X=Z.loaded,I=Z.onInstanceCreated;(0,s.useEffect)(function(){K&&F().then(function(){I==null||I(D.current)})},[K]),(0,s.useImperativeHandle)(A,function(){return D.current},[D.current,X]);var F=function(){var W=(0,M.T)(p,a,f);return W.map=K,D.current=new $.CircleMarker(W),Promise.resolve()};return null}),P=i(11527),g={strokeColor:"#fff",strokeWeight:2,strokeOpacity:.5,fillColor:"rgba(0,0,255,1)",fillOpacity:.5},y=function(){return(0,P.jsx)("div",{style:{height:500},children:(0,P.jsxs)(c.D,{zoom:4,center:[116.400274,39.905812],children:[(0,P.jsx)(b,{center:[116.407394,39.904211],radius:10+Math.random()*10,style:g,events:{click:function(){console.log("click")}}}),(0,P.jsx)(b,{center:[113.26641,23.132324],radius:10+Math.random()*10,style:g}),(0,P.jsx)(b,{center:[115.26641,27.132324],radius:10+Math.random()*10,style:g})]})})}}}]);
