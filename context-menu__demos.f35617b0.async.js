"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[654],{625:function(U,g,i){i.d(g,{S:function(){return C},X:function(){return y}});var c=i(50959),y=(0,c.createContext)({}),C=function(){return(0,c.useContext)(y)}},34422:function(U,g,i){i.d(g,{D:function(){return N}});var c=i(50959),y=i(35354),C=i(80667),f=i(66724),h=["layers","zoom","zooms","center","labelzIndex","lang","mapStyle","features","cursor","pitch","mask","defaultLayer"],O=["animateEnable","doubleClickZoom","dragEnable","isHotspot","jogEnable","keyboardEnable","pitchEnable","resizeEnable","rotateEnable","scrollWheel","touchZoom","zoomEnable"],b=["view","showIndoorMap","indoorMap","expandZoomRange","touchZoomCenter","showBuildingBlock","viewMode","buildingAnimation","skyColor"],E={width:"100%",height:"100%",position:"relative"},A={width:"100%",height:"100%"},M=h.concat(O,b),D={zoom:function(t,n){n&&n.setZoom(t)},cursor:function(t,n){n&&n.setDefaultCursor(t)},labelzIndex:function(t,n){n&&n.setLabelzIndex(t)}},F={center:f.t,mapStyle:function(t){return t.indexOf("amap://styles")===0?t:"amap://styles/".concat(t)}},H=i(95704),I=i(11527),G=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=(0,c.useRef)(),o=(0,c.useRef)(),s=(0,C.s)(t,o,{setterMap:D,converterMap:F}),v=s.loaded,R=s.prevProps,S=s.onInstanceCreated;(0,c.useEffect)(function(){j().then(function(){var x;(x=t.onMapCreate)===null||x===void 0||x.call(t,o.current),S==null||S(o.current)})},[]),(0,c.useEffect)(function(){v&&ee(R,t)},[t]);var j=function(){var d=B(),m=(0,H.rr)();return o.current=new m.Map(n.current,d),Promise.resolve()},B=function(){var d={};return M.forEach(function(m){m in t&&(d[m]=V(m,t))}),d},V=function(d,m){return d in F?F[d](m[d]):m[d]},ee=function(d,m){var T={},K=!1,te=!1;O.forEach(function(Z){Z in m&&(te=!0,X(Z,d,m)&&(K=!0,T[Z]=m[Z]))}),K&&o.current.setStatus(T)},X=function(d,m,T){return m[d]!==T[d]};return(0,I.jsxs)("div",{style:E,children:[(0,I.jsx)("div",{ref:n,style:A,children:v?null:t.loading}),(0,I.jsx)("div",{children:v?t.children:null})]})},J=i(625);function L(e){"@babel/helpers - typeof";return L=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},L(e)}var Q=["mapKey","version","plugins","AMapUI","Loca","loading","onComplete","onMapCreate"];function $(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),n.push.apply(n,o)}return n}function w(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?$(Object(n),!0).forEach(function(o){k(e,o,n[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):$(Object(n)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(n,o))})}return e}function k(e,t,n){return t=a(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e){var t=r(e,"string");return L(t)==="symbol"?t:String(t)}function r(e,t){if(L(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var o=n.call(e,t||"default");if(L(o)!=="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function u(e,t){return q(e)||z(e,t)||P(e,t)||l()}function l(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function P(e,t){if(e){if(typeof e=="string")return p(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return p(e,t)}}function p(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function z(e,t){var n=e==null?null:typeof Symbol!="undefined"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var o,s,v,R,S=[],j=!0,B=!1;try{if(v=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;j=!1}else for(;!(j=(o=v.call(n)).done)&&(S.push(o.value),S.length!==t);j=!0);}catch(V){B=!0,s=V}finally{try{if(!j&&n.return!=null&&(R=n.return(),Object(R)!==R))return}finally{if(B)throw s}}return S}}function q(e){if(Array.isArray(e))return e}function W(e,t){if(e==null)return{};var n=_(e,t),o,s;if(Object.getOwnPropertySymbols){var v=Object.getOwnPropertySymbols(e);for(s=0;s<v.length;s++)o=v[s],!(t.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}function _(e,t){if(e==null)return{};var n={},o=Object.keys(e),s,v;for(v=0;v<o.length;v++)s=o[v],!(t.indexOf(s)>=0)&&(n[s]=e[s]);return n}var N=c.forwardRef(function(e,t){var n=e.mapKey,o=e.version,s=e.plugins,v=e.AMapUI,R=e.Loca,S=e.loading,j=e.onComplete,B=e.onMapCreate,V=W(e,Q),ee=(0,c.useState)(),X=u(ee,2),x=X[0],d=X[1],m=(0,c.useState)(),T=u(m,2),K=T[0],te=T[1];return(0,c.useImperativeHandle)(t,function(){return K},[K]),(0,I.jsx)(J.X.Provider,{value:{AMap:x,map:K},children:(0,I.jsx)(y._,{mapKey:n,version:o,plugins:s,Loca:R,AMapUI:v,loading:S,onComplete:function(Y){j==null||j(Y),d(Y)},children:(0,I.jsx)(G,w(w({loading:S},V),{},{onMapCreate:function(Y){te(Y)}}))})})})},91227:function(U,g,i){i.d(g,{T:function(){return c}});function c(y,C,f){var h={},O=function(E,A){return E in f?f[E](A[E]):A[E]};return C.forEach(function(b){b in y&&b!=="visible"&&(h[b]=O(b,y))}),h}},88421:function(U,g,i){i.d(g,{Se:function(){return y},ZT:function(){return c}});var c=function(){},y=function(f){return!!f&&typeof f=="function"}},66724:function(U,g,i){i.d(g,{t:function(){return y}});var c=i(95704),y=function(f){if(!f)return null;if("getLng"in f&&"getLat"in f)return f;var h=0,O=0;Array.isArray(f)?(h=f[0],O=f[1]):"lng"in f&&"lat"in f?(h=f.lng,O=f.lat):"longitude"in f&&"latitude"in f&&(h=f.longitude,O=f.latitude);var b=(0,c.rr)();return c.Ym&&b?new b.LngLat(h,O):null}},48542:function(U,g,i){i.r(g),i.d(g,{default:function(){return k}});var c=i(50959),y=i(34422),C=i(91227),f=i(80667),h=i(625),O=["content"],b=O.concat([]),E={},A={},M=i(11527);function D(a){"@babel/helpers - typeof";return D=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},D(a)}function F(a,r){var u=Object.keys(a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(a);r&&(l=l.filter(function(P){return Object.getOwnPropertyDescriptor(a,P).enumerable})),u.push.apply(u,l)}return u}function H(a){for(var r=1;r<arguments.length;r++){var u=arguments[r]!=null?arguments[r]:{};r%2?F(Object(u),!0).forEach(function(l){I(a,l,u[l])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(u)):F(Object(u)).forEach(function(l){Object.defineProperty(a,l,Object.getOwnPropertyDescriptor(u,l))})}return a}function I(a,r,u){return r=G(r),r in a?Object.defineProperty(a,r,{value:u,enumerable:!0,configurable:!0,writable:!0}):a[r]=u,a}function G(a){var r=J(a,"string");return D(r)==="symbol"?r:String(r)}function J(a,r){if(D(a)!=="object"||a===null)return a;var u=a[Symbol.toPrimitive];if(u!==void 0){var l=u.call(a,r||"default");if(D(l)!=="object")return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(a)}var L=c.forwardRef(function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=arguments.length>1?arguments[1]:void 0,u=(0,h.S)(),l=u.map,P=u.AMap,p=(0,c.useRef)(null),z=(0,f.s)(a,p,{setterMap:E,converterMap:A}),q=z.loaded,W=z.onInstanceCreated;(0,c.useEffect)(function(){return l&&_().then(function(){l.on("rightclick",N),W==null||W(p.current)}),function(){p.current&&(p.current.off("rightclick",N),l.remove(p.current))}},[l]),(0,c.useImperativeHandle)(r,function(){return p.current},[p.current]);var _=function(){var n=(0,C.T)(a,b,A);return p.current=new P.ContextMenu(n),Promise.resolve()},N=function(n){p.current&&p.current.open(l,n.lnglat)},e=function(){var n=c.Children.toArray(a.children);return(0,M.jsx)(M.Fragment,{children:n.map(function(o,s){return c.isValidElement(o)?c.cloneElement(o,H(H({},o.props),{},{map:l,contextMenu:p.current,key:s})):null})})};return q?e():null}),Q=i(88421),$=function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},u=r.text,l=u===void 0?"":u,P=r.contextMenu,p=r.onClick,z=p===void 0?Q.ZT:p;return(0,c.useEffect)(function(){return P&&P.addItem(l,z),function(){P&&P.removeItem(l,z)}},[r.contextMenu,r.text,r.onClick]),null},w=L;w.Item=$;var k=function(){var a=(0,c.useRef)(),r=function(l){if(a.current)switch(l){case"zoomIn":a.current.zoomIn();break;case"zoomOut":a.current.zoomOut();break;case"center":a.current.setZoomAndCenter(4,[108.946609,34.262324]);break}};return(0,M.jsx)("div",{style:{height:500},children:(0,M.jsx)(y.D,{events:{created:function(l){a.current=l}},children:(0,M.jsxs)(w,{children:[(0,M.jsx)(w.Item,{text:"\u653E\u5927\u4E00\u7EA7",onClick:function(){r("zoomIn")}}),(0,M.jsx)(w.Item,{text:"\u7F29\u5C0F\u4E00\u7EA7",onClick:function(){return r("zoomOut")}}),(0,M.jsx)(w.Item,{text:"\u7F29\u653E\u81F3\u5168\u56FD\u8303\u56F4",onClick:function(){return r("center")}})]})})})}}}]);
