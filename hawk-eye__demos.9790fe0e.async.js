"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2907],{625:function(B,b,a){a.d(b,{S:function(){return P},X:function(){return p}});var i=a(50959),p=(0,i.createContext)({}),P=function(){return(0,i.useContext)(p)}},34422:function(B,b,a){a.d(b,{D:function(){return ie}});var i=a(50959),p=a(35354),P=a(80667),o=a(66724),m=["layers","zoom","zooms","center","labelzIndex","lang","mapStyle","features","cursor","pitch","mask","defaultLayer"],y=["animateEnable","doubleClickZoom","dragEnable","isHotspot","jogEnable","keyboardEnable","pitchEnable","resizeEnable","rotateEnable","scrollWheel","touchZoom","zoomEnable"],v=["view","showIndoorMap","indoorMap","expandZoomRange","touchZoomCenter","showBuildingBlock","viewMode","buildingAnimation","skyColor","WebGLParams"],S={width:"100%",height:"100%",position:"relative"},M={width:"100%",height:"100%"},V=m.concat(y,v),D={zoom:function(t,r){r&&r.setZoom(t)},cursor:function(t,r){r&&r.setDefaultCursor(t)},labelzIndex:function(t,r){r&&r.setLabelzIndex(t)}},R={center:o.t,mapStyle:function(t){return t.indexOf("amap://styles")===0?t:"amap://styles/".concat(t)}},E=a(95704),d=a(11527);function l(e){"@babel/helpers - typeof";return l=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},l(e)}function I(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(u){return Object.getOwnPropertyDescriptor(e,u).enumerable})),r.push.apply(r,n)}return r}function z(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?I(Object(r),!0).forEach(function(n){j(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):I(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function j(e,t,r){return t=H(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function H(e){var t=X(e,"string");return l(t)==="symbol"?t:String(t)}function X(e,t){if(l(e)!=="object"||e===null)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t||"default");if(l(n)!=="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var T=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=(0,i.useRef)(),n=(0,i.useRef)(),u=(0,P.s)(t,n,{setterMap:D,converterMap:R}),c=u.loaded,w=u.prevProps,g=u.onInstanceCreated;(0,i.useEffect)(function(){h().then(function(){var O;(O=t.onMapCreate)===null||O===void 0||O.call(t,n.current),g==null||g(n.current)})},[]),(0,i.useEffect)(function(){c&&G(w,t)},[t]);var h=function(){var f=K(),s=(0,E.rr)();return n.current=new s.Map(r.current,f),Promise.resolve()},K=function(){var f={};return V.forEach(function(s){s in t&&(f[s]=W(s,t))}),f},W=function(f,s){return f in R?R[f](s[f]):s[f]},G=function(f,s){var C={},x=!1,Y=!1;y.forEach(function(L){L in s&&(Y=!0,N(L,f,s)&&(x=!0,C[L]=s[L]))}),x&&n.current.setStatus(C)},N=function(f,s,C){return s[f]!==C[f]};return(0,d.jsxs)("div",{className:t.className,style:z(z({},S),t.style),children:[(0,d.jsx)("div",{ref:r,style:M,children:c?null:t.loading}),(0,d.jsx)("div",{children:c?t.children:null})]})},$=a(625);function A(e){"@babel/helpers - typeof";return A=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},A(e)}var F=["mapKey","version","plugins","AMapUI","Loca","loading","onComplete","onMapCreate"];function U(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(u){return Object.getOwnPropertyDescriptor(e,u).enumerable})),r.push.apply(r,n)}return r}function J(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?U(Object(r),!0).forEach(function(n){q(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):U(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function q(e,t,r){return t=_(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function _(e){var t=ee(e,"string");return A(t)==="symbol"?t:String(t)}function ee(e,t){if(A(e)!=="object"||e===null)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t||"default");if(A(n)!=="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Q(e,t){return ae(e)||ne(e,t)||re(e,t)||te()}function te(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function re(e,t){if(e){if(typeof e=="string")return k(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return k(e,t)}}function k(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function ne(e,t){var r=e==null?null:typeof Symbol!="undefined"&&e[Symbol.iterator]||e["@@iterator"];if(r!=null){var n,u,c,w,g=[],h=!0,K=!1;try{if(c=(r=r.call(e)).next,t===0){if(Object(r)!==r)return;h=!1}else for(;!(h=(n=c.call(r)).done)&&(g.push(n.value),g.length!==t);h=!0);}catch(W){K=!0,u=W}finally{try{if(!h&&r.return!=null&&(w=r.return(),Object(w)!==w))return}finally{if(K)throw u}}return g}}function ae(e){if(Array.isArray(e))return e}function oe(e,t){if(e==null)return{};var r=ue(e,t),n,u;if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(u=0;u<c.length;u++)n=c[u],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function ue(e,t){if(e==null)return{};var r={},n=Object.keys(e),u,c;for(c=0;c<n.length;c++)u=n[c],!(t.indexOf(u)>=0)&&(r[u]=e[u]);return r}var ie=i.forwardRef(function(e,t){var r=e.mapKey,n=e.version,u=e.plugins,c=e.AMapUI,w=e.Loca,g=e.loading,h=e.onComplete,K=e.onMapCreate,W=oe(e,F),G=(0,i.useState)(),N=Q(G,2),O=N[0],f=N[1],s=(0,i.useState)(),C=Q(s,2),x=C[0],Y=C[1];return(0,i.useImperativeHandle)(t,function(){return x},[x]),(0,d.jsx)($.X.Provider,{value:{AMap:O,map:x},children:(0,d.jsx)(p._,{mapKey:r,version:n,plugins:u,Loca:w,AMapUI:c,loading:g,onComplete:function(Z){h==null||h(Z),f(Z)},children:(0,d.jsx)(T,J(J({loading:g},W),{},{onMapCreate:function(Z){Y(Z)}}))})})})},91227:function(B,b,a){a.d(b,{T:function(){return i}});function i(p,P,o){var m={},y=function(S,M){return S in o?o[S](M[S]):M[S]};return P.forEach(function(v){v in p&&v!=="visible"&&(m[v]=y(v,p))}),m}},66724:function(B,b,a){a.d(b,{t:function(){return p}});var i=a(95704),p=function(o){if(!o)return null;if("getLng"in o&&"getLat"in o)return o;var m=0,y=0;Array.isArray(o)?(m=o[0],y=o[1]):"lng"in o&&"lat"in o?(m=o.lng,y=o.lat):"longitude"in o&&"latitude"in o&&(m=o.longitude,y=o.latitude);var v=(0,i.rr)();return i.Ym&&v?new v.LngLat(m,y):null}},57863:function(B,b,a){a.r(b),a.d(b,{default:function(){return R}});var i=a(34422),p=a(50959),P=a(625),o=a(80667),m=a(91227),y=["isOpen","visible"],v=y.concat(["autoMove","showRectangle","showButton","isOpen","mapStyle","layers","width","height","offset","borderStyle","borderColor","borderRadius","borderWidth","buttonSize"]),S={visible:function(d,l){l&&(d?l.show():l.hide())},isOpen:function(d,l){l&&(d?l.open():l.close())}},M={},V=p.forwardRef(function(){var E=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},d=arguments.length>1?arguments[1]:void 0,l=(0,P.S)(),I=l.map,z=l.AMap,j=(0,p.useRef)(null),H=(0,o.s)(E,j,{setterMap:S,converterMap:M}),X=H.loaded,T=H.onInstanceCreated;(0,p.useEffect)(function(){I&&$().then(function(){I.addControl(j.current),T==null||T(j.current)})},[I]),(0,p.useImperativeHandle)(d,function(){return j.current},[X]);var $=function(){return new Promise(function(F){z.plugin(["AMap.HawkEye"],function(){var U=(0,m.T)(E,v,M);j.current=new z.HawkEye(U),F()})})};return null}),D=a(11527),R=function(){return(0,D.jsx)("div",{style:{height:500},children:(0,D.jsx)(i.D,{children:(0,D.jsx)(V,{})})})}}}]);
