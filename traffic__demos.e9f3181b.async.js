"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3114],{625:function(X,y,a){a.d(y,{S:function(){return v},X:function(){return h}});var i=a(50959),h=(0,i.createContext)({}),v=function(){return(0,i.useContext)(h)}},34422:function(X,y,a){a.d(y,{D:function(){return te}});var i=a(50959),h=a(35354),v=a(80667),o=a(66724),b=["layers","zoom","zooms","center","labelzIndex","lang","mapStyle","features","cursor","pitch","mask","defaultLayer"],g=["animateEnable","doubleClickZoom","dragEnable","isHotspot","jogEnable","keyboardEnable","pitchEnable","resizeEnable","rotateEnable","scrollWheel","touchZoom","zoomEnable"],E=["view","showIndoorMap","indoorMap","expandZoomRange","touchZoomCenter","showBuildingBlock","viewMode","buildingAnimation","skyColor"],$={width:"100%",height:"100%",position:"relative"},K={width:"100%",height:"100%"},Y=b.concat(g,E),G={zoom:function(t,r){r&&r.setZoom(t)},cursor:function(t,r){r&&r.setDefaultCursor(t)},labelzIndex:function(t,r){r&&r.setLabelzIndex(t)}},U={center:o.t,mapStyle:function(t){return t.indexOf("amap://styles")===0?t:"amap://styles/".concat(t)}},x=a(95704),M=a(11527),S=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=(0,i.useRef)(),n=(0,i.useRef)(),u=(0,v.s)(t,n,{setterMap:G,converterMap:U}),l=u.loaded,A=u.prevProps,p=u.onInstanceCreated;(0,i.useEffect)(function(){d().then(function(){var m;(m=t.onMapCreate)===null||m===void 0||m.call(t,n.current),p==null||p(n.current)})},[]),(0,i.useEffect)(function(){l&&_(A,t)},[t]);var d=function(){var s=W(),c=(0,x.rr)();return n.current=new c.Map(r.current,s),Promise.resolve()},W=function(){var s={};return Y.forEach(function(c){c in t&&(s[c]=B(c,t))}),s},B=function(s,c){return s in U?U[s](c[s]):c[s]},_=function(s,c){var I={},D=!1,ee=!1;g.forEach(function(T){T in c&&(ee=!0,F(T,s,c)&&(D=!0,I[T]=c[T]))}),D&&n.current.setStatus(I)},F=function(s,c,I){return c[s]!==I[s]};return(0,M.jsxs)("div",{style:$,children:[(0,M.jsx)("div",{ref:r,style:K,children:l?null:t.loading}),(0,M.jsx)("div",{children:l?t.children:null})]})},O=a(625);function f(e){"@babel/helpers - typeof";return f=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},f(e)}var j=["mapKey","version","plugins","AMapUI","Loca","loading","onComplete","onMapCreate"];function L(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(u){return Object.getOwnPropertyDescriptor(e,u).enumerable})),r.push.apply(r,n)}return r}function P(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?L(Object(r),!0).forEach(function(n){w(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):L(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function w(e,t,r){return t=J(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function J(e){var t=V(e,"string");return f(t)==="symbol"?t:String(t)}function V(e,t){if(f(e)!=="object"||e===null)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t||"default");if(f(n)!=="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Z(e,t){return R(e)||q(e,t)||k(e,t)||Q()}function Q(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function k(e,t){if(e){if(typeof e=="string")return C(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return C(e,t)}}function C(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function q(e,t){var r=e==null?null:typeof Symbol!="undefined"&&e[Symbol.iterator]||e["@@iterator"];if(r!=null){var n,u,l,A,p=[],d=!0,W=!1;try{if(l=(r=r.call(e)).next,t===0){if(Object(r)!==r)return;d=!1}else for(;!(d=(n=l.call(r)).done)&&(p.push(n.value),p.length!==t);d=!0);}catch(B){W=!0,u=B}finally{try{if(!d&&r.return!=null&&(A=r.return(),Object(A)!==A))return}finally{if(W)throw u}}return p}}function R(e){if(Array.isArray(e))return e}function z(e,t){if(e==null)return{};var r=H(e,t),n,u;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(u=0;u<l.length;u++)n=l[u],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function H(e,t){if(e==null)return{};var r={},n=Object.keys(e),u,l;for(l=0;l<n.length;l++)u=n[l],!(t.indexOf(u)>=0)&&(r[u]=e[u]);return r}var te=i.forwardRef(function(e,t){var r=e.mapKey,n=e.version,u=e.plugins,l=e.AMapUI,A=e.Loca,p=e.loading,d=e.onComplete,W=e.onMapCreate,B=z(e,j),_=(0,i.useState)(),F=Z(_,2),m=F[0],s=F[1],c=(0,i.useState)(),I=Z(c,2),D=I[0],ee=I[1];return(0,i.useImperativeHandle)(t,function(){return D},[D]),(0,M.jsx)(O.X.Provider,{value:{AMap:m,map:D},children:(0,M.jsx)(h._,{mapKey:r,version:n,plugins:u,Loca:A,AMapUI:l,loading:p,onComplete:function(N){d==null||d(N),s(N)},children:(0,M.jsx)(S,P(P({loading:p},B),{},{onMapCreate:function(N){ee(N)}}))})})})},66724:function(X,y,a){a.d(y,{t:function(){return h}});var i=a(95704),h=function(o){if(!o)return null;if("getLng"in o&&"getLat"in o)return o;var b=0,g=0;Array.isArray(o)?(b=o[0],g=o[1]):"lng"in o&&"lat"in o?(b=o.lng,g=o.lat):"longitude"in o&&"latitude"in o&&(b=o.longitude,g=o.latitude);var E=(0,i.rr)();return i.Ym&&E?new E.LngLat(b,g):null}},5783:function(X,y,a){a.r(y),a.d(y,{default:function(){return M}});var i=a(54306),h=a.n(i),v=a(50959),o=a(38342),b=a(34422),g=a(625),E=a(80667),$={visible:function(O,f){f&&(O?f.show():f.hide())}},K={},Y=["zooms","opacity","visible","zIndex"],G=Y.concat(["autoRefresh","interval","tileSize"]),U=v.forwardRef(function(){var S=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},O=arguments.length>1?arguments[1]:void 0,f=(0,g.S)(),j=f.map,L=f.AMap,P=(0,v.useRef)(null),w=(0,E.s)(S,P,{setterMap:$,converterMap:K}),J=w.loaded,V=w.onInstanceCreated;(0,v.useEffect)(function(){j&&Z().then(function(){V==null||V(P.current)})},[j]),(0,v.useImperativeHandle)(O,function(){return P.current},[J]);var Z=function(){var C=Q();return P.current=new L.TileLayer.Traffic(C),Promise.resolve()},Q=function(){var C={};C.map=j;var q=function(z,H){return z in K?K[z](H[z]):H[z]};return G.forEach(function(R){R in S&&(C[R]=q(R,S))}),C};return null}),x=a(11527),M=function(){var S=(0,v.useState)(!0),O=h()(S,2),f=O[0],j=O[1],L=function(){j(function(w){return!w})};return(0,x.jsxs)("div",{style:{height:500},children:[(0,x.jsx)(b.D,{children:(0,x.jsx)(U,{visible:f})}),(0,x.jsx)(o.ZP,{onClick:L,children:"\u663E\u793A/\u9690\u85CF"})]})}}}]);
