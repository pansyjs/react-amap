"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3114],{625:function($,O,a){a.d(O,{S:function(){return v},X:function(){return P}});var u=a(50959),P=(0,u.createContext)({}),v=function(){return(0,u.useContext)(P)}},34422:function($,O,a){a.d(O,{D:function(){return ue}});var u=a(50959),P=a(35354),v=a(80667),i=a(66724),S=["layers","zoom","zooms","center","labelzIndex","lang","mapStyle","features","cursor","pitch","mask","defaultLayer"],g=["animateEnable","doubleClickZoom","dragEnable","isHotspot","jogEnable","keyboardEnable","pitchEnable","resizeEnable","rotateEnable","scrollWheel","touchZoom","zoomEnable"],x=["view","showIndoorMap","indoorMap","expandZoomRange","touchZoomCenter","showBuildingBlock","viewMode","buildingAnimation","skyColor","WebGLParams"],G={width:"100%",height:"100%",position:"relative"},K={width:"100%",height:"100%"},Y=S.concat(g,x),J={zoom:function(t,r){r&&r.setZoom(t)},cursor:function(t,r){r&&r.setDefaultCursor(t)},labelzIndex:function(t,r){r&&r.setLabelzIndex(t)}},W={center:i.t,mapStyle:function(t){return t.indexOf("amap://styles")===0?t:"amap://styles/".concat(t)}},L=a(95704),M=a(11527);function f(e){"@babel/helpers - typeof";return f=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},f(e)}function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?b(Object(r),!0).forEach(function(n){j(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function j(e,t,r){return t=U(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function U(e){var t=C(e,"string");return f(t)==="symbol"?t:String(t)}function C(e,t){if(f(e)!=="object"||e===null)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t||"default");if(f(n)!=="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var D=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=(0,u.useRef)(),n=(0,u.useRef)(),o=(0,v.s)(t,n,{setterMap:J,converterMap:W}),l=o.loaded,I=o.prevProps,d=o.onInstanceCreated;(0,u.useEffect)(function(){m().then(function(){var y;(y=t.onMapCreate)===null||y===void 0||y.call(t,n.current),d==null||d(n.current)})},[]),(0,u.useEffect)(function(){l&&_(I,t)},[t]);var m=function(){var c=V(),s=(0,L.rr)();return n.current=new s.Map(r.current,c),Promise.resolve()},V=function(){var c={};return Y.forEach(function(s){s in t&&(c[s]=B(s,t))}),c},B=function(c,s){return c in W?W[c](s[c]):s[c]},_=function(c,s){var w={},T=!1,ee=!1;g.forEach(function(z){z in s&&(ee=!0,F(z,c,s)&&(T=!0,w[z]=s[z]))}),T&&n.current.setStatus(w)},F=function(c,s,w){return s[c]!==w[c]};return(0,M.jsxs)("div",{className:t.className,style:p(p({},G),t.style),children:[(0,M.jsx)("div",{ref:r,style:K,children:l?null:t.loading}),(0,M.jsx)("div",{children:l?t.children:null})]})},Q=a(625);function h(e){"@babel/helpers - typeof";return h=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},h(e)}var q=["mapKey","version","plugins","AMapUI","Loca","loading","onComplete","onMapCreate"];function Z(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,n)}return r}function N(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?Z(Object(r),!0).forEach(function(n){E(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Z(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function E(e,t,r){return t=k(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function k(e){var t=R(e,"string");return h(t)==="symbol"?t:String(t)}function R(e,t){if(h(e)!=="object"||e===null)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t||"default");if(h(n)!=="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function A(e,t){return ae(e)||ne(e,t)||re(e,t)||H()}function H(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function re(e,t){if(e){if(typeof e=="string")return te(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return te(e,t)}}function te(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function ne(e,t){var r=e==null?null:typeof Symbol!="undefined"&&e[Symbol.iterator]||e["@@iterator"];if(r!=null){var n,o,l,I,d=[],m=!0,V=!1;try{if(l=(r=r.call(e)).next,t===0){if(Object(r)!==r)return;m=!1}else for(;!(m=(n=l.call(r)).done)&&(d.push(n.value),d.length!==t);m=!0);}catch(B){V=!0,o=B}finally{try{if(!m&&r.return!=null&&(I=r.return(),Object(I)!==I))return}finally{if(V)throw o}}return d}}function ae(e){if(Array.isArray(e))return e}function oe(e,t){if(e==null)return{};var r=ie(e,t),n,o;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function ie(e,t){if(e==null)return{};var r={},n=Object.keys(e),o,l;for(l=0;l<n.length;l++)o=n[l],!(t.indexOf(o)>=0)&&(r[o]=e[o]);return r}var ue=u.forwardRef(function(e,t){var r=e.mapKey,n=e.version,o=e.plugins,l=e.AMapUI,I=e.Loca,d=e.loading,m=e.onComplete,V=e.onMapCreate,B=oe(e,q),_=(0,u.useState)(),F=A(_,2),y=F[0],c=F[1],s=(0,u.useState)(),w=A(s,2),T=w[0],ee=w[1];return(0,u.useImperativeHandle)(t,function(){return T},[T]),(0,M.jsx)(Q.X.Provider,{value:{AMap:y,map:T},children:(0,M.jsx)(P._,{mapKey:r,version:n,plugins:o,Loca:I,AMapUI:l,loading:d,onComplete:function(X){m==null||m(X),c(X)},children:(0,M.jsx)(D,N(N({loading:d},B),{},{onMapCreate:function(X){ee(X)}}))})})})},66724:function($,O,a){a.d(O,{t:function(){return P}});var u=a(95704),P=function(i){if(!i)return null;if("getLng"in i&&"getLat"in i)return i;var S=0,g=0;Array.isArray(i)?(S=i[0],g=i[1]):"lng"in i&&"lat"in i?(S=i.lng,g=i.lat):"longitude"in i&&"latitude"in i&&(S=i.longitude,g=i.latitude);var x=(0,u.rr)();return u.Ym&&x?new x.LngLat(S,g):null}},5783:function($,O,a){a.r(O),a.d(O,{default:function(){return M}});var u=a(54306),P=a.n(u),v=a(50959),i=a(25552),S=a(34422),g=a(625),x=a(80667),G={visible:function(b,p){p&&(b?p.show():p.hide())}},K={},Y=["zooms","opacity","visible","zIndex"],J=Y.concat(["autoRefresh","interval","tileSize"]),W=v.forwardRef(function(){var f=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},b=arguments.length>1?arguments[1]:void 0,p=(0,g.S)(),j=p.map,U=p.AMap,C=(0,v.useRef)(null),D=(0,x.s)(f,C,{setterMap:G,converterMap:K}),Q=D.loaded,h=D.onInstanceCreated;(0,v.useEffect)(function(){j&&q().then(function(){h==null||h(C.current)})},[j]),(0,v.useImperativeHandle)(b,function(){return C.current},[Q]);var q=function(){var E=Z();return C.current=new U.TileLayer.Traffic(E),Promise.resolve()},Z=function(){var E={};E.map=j;var k=function(A,H){return A in K?K[A](H[A]):H[A]};return J.forEach(function(R){R in f&&(E[R]=k(R,f))}),E};return null}),L=a(11527),M=function(){var f=(0,v.useState)(!0),b=P()(f,2),p=b[0],j=b[1],U=function(){j(function(D){return!D})};return(0,L.jsxs)("div",{style:{height:500},children:[(0,L.jsx)(S.D,{children:(0,L.jsx)(W,{visible:p})}),(0,L.jsx)(i.ZP,{onClick:U,children:"\u663E\u793A/\u9690\u85CF"})]})}}}]);
