"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6312],{625:function(Z,S,r){r.d(S,{S:function(){return g},X:function(){return y}});var i=r(50959),y=(0,i.createContext)({}),g=function(){return(0,i.useContext)(y)}},34422:function(Z,S,r){r.d(S,{D:function(){return te}});var i=r(50959),y=r(35354),g=r(80667),l=r(66724),O=["layers","zoom","zooms","center","labelzIndex","lang","mapStyle","features","cursor","pitch","mask","defaultLayer"],M=["animateEnable","doubleClickZoom","dragEnable","isHotspot","jogEnable","keyboardEnable","pitchEnable","resizeEnable","rotateEnable","scrollWheel","touchZoom","zoomEnable"],A=["view","showIndoorMap","indoorMap","expandZoomRange","touchZoomCenter","showBuildingBlock","viewMode","buildingAnimation","skyColor"],o={width:"100%",height:"100%",position:"relative"},u={width:"100%",height:"100%"},d=O.concat(M,A),C={zoom:function(t,n){n&&n.setZoom(t)},cursor:function(t,n){n&&n.setDefaultCursor(t)},labelzIndex:function(t,n){n&&n.setLabelzIndex(t)}},f={center:l.t,mapStyle:function(t){return t.indexOf("amap://styles")===0?t:"amap://styles/".concat(t)}},p=r(95704),c=r(11527),s=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=(0,i.useRef)(),a=(0,i.useRef)(),m=(0,g.s)(t,a,{setterMap:C,converterMap:f}),h=m.loaded,K=m.prevProps,j=m.onInstanceCreated;(0,i.useEffect)(function(){x().then(function(){var L;(L=t.onMapCreate)===null||L===void 0||L.call(t,a.current),j==null||j(a.current)})},[]),(0,i.useEffect)(function(){h&&J(K,t)},[t]);var x=function(){var b=N(),P=(0,p.rr)();return a.current=new P.Map(n.current,b),Promise.resolve()},N=function(){var b={};return d.forEach(function(P){P in t&&(b[P]=$(P,t))}),b},$=function(b,P){return b in f?f[b](P[b]):P[b]},J=function(b,P){var U={},W=!1,Q=!1;M.forEach(function(B){B in P&&(Q=!0,F(B,b,P)&&(W=!0,U[B]=P[B]))}),W&&a.current.setStatus(U)},F=function(b,P,U){return P[b]!==U[b]};return(0,c.jsxs)("div",{style:o,children:[(0,c.jsx)("div",{ref:n,style:u,children:h?null:t.loading}),(0,c.jsx)("div",{children:h?t.children:null})]})},I=r(625);function v(e){"@babel/helpers - typeof";return v=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},v(e)}var R=["mapKey","version","plugins","AMapUI","Loca","loading","onComplete","onMapCreate"];function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(m){return Object.getOwnPropertyDescriptor(e,m).enumerable})),n.push.apply(n,a)}return n}function E(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?w(Object(n),!0).forEach(function(a){z(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}function z(e,t,n){return t=D(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function D(e){var t=T(e,"string");return v(t)==="symbol"?t:String(t)}function T(e,t){if(v(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var a=n.call(e,t||"default");if(v(a)!=="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function H(e,t){return q(e)||k(e,t)||G(e,t)||V()}function V(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function G(e,t){if(e){if(typeof e=="string")return X(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return X(e,t)}}function X(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function k(e,t){var n=e==null?null:typeof Symbol!="undefined"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var a,m,h,K,j=[],x=!0,N=!1;try{if(h=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;x=!1}else for(;!(x=(a=h.call(n)).done)&&(j.push(a.value),j.length!==t);x=!0);}catch($){N=!0,m=$}finally{try{if(!x&&n.return!=null&&(K=n.return(),Object(K)!==K))return}finally{if(N)throw m}}return j}}function q(e){if(Array.isArray(e))return e}function _(e,t){if(e==null)return{};var n=ee(e,t),a,m;if(Object.getOwnPropertySymbols){var h=Object.getOwnPropertySymbols(e);for(m=0;m<h.length;m++)a=h[m],!(t.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}function ee(e,t){if(e==null)return{};var n={},a=Object.keys(e),m,h;for(h=0;h<a.length;h++)m=a[h],!(t.indexOf(m)>=0)&&(n[m]=e[m]);return n}var te=i.forwardRef(function(e,t){var n=e.mapKey,a=e.version,m=e.plugins,h=e.AMapUI,K=e.Loca,j=e.loading,x=e.onComplete,N=e.onMapCreate,$=_(e,R),J=(0,i.useState)(),F=H(J,2),L=F[0],b=F[1],P=(0,i.useState)(),U=H(P,2),W=U[0],Q=U[1];return(0,i.useImperativeHandle)(t,function(){return W},[W]),(0,c.jsx)(I.X.Provider,{value:{AMap:L,map:W},children:(0,c.jsx)(y._,{mapKey:n,version:a,plugins:m,Loca:K,AMapUI:h,loading:j,onComplete:function(Y){x==null||x(Y),b(Y)},children:(0,c.jsx)(s,E(E({loading:j},$),{},{onMapCreate:function(Y){Q(Y)}}))})})})},67348:function(Z,S,r){r.d(S,{a:function(){return C}});var i=r(50959),y=r(625),g=r(80667),l=r(76746),O=r(66724);function M(f){return f.length?"getLng"in f[0]?f:f.map(function(p){return(0,O.t)(p)}):f}var A=["path","extData","draggable","visible","style"],o=A.concat(["zIndex","bubble","showDir"]),u={visible:function(p,c){c&&(p?c.show():c.hide())},style:function(p,c){c&&c.setOptions(p)}},d={path:function(p){return M(p)}},C=i.forwardRef(function(){var f=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},p=arguments.length>1?arguments[1]:void 0,c=(0,y.S)(),s=c.map,I=c.AMap,v=(0,i.useRef)(null),R=(0,g.s)(f,v,{setterMap:u,converterMap:d}),w=R.loaded,E=R.onInstanceCreated;(0,i.useEffect)(function(){s&&z().then(function(){E==null||E(v.current)})},[s]),(0,i.useImperativeHandle)(p,function(){return v.current},[w]);var z=function(){var T=(0,l.T)(f,o,d);return T.map=s,v.current=new I.Polyline(T),Promise.resolve()};return w?(0,l.p)(f.children,{key:"poly",instance:v.current,map:s}):null})},76746:function(Z,S,r){r.d(S,{T:function(){return M},p:function(){return A}});var i=r(50959);function y(o){"@babel/helpers - typeof";return y=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(u){return typeof u}:function(u){return u&&typeof Symbol=="function"&&u.constructor===Symbol&&u!==Symbol.prototype?"symbol":typeof u},y(o)}function g(o,u,d){return u=l(u),u in o?Object.defineProperty(o,u,{value:d,enumerable:!0,configurable:!0,writable:!0}):o[u]=d,o}function l(o){var u=O(o,"string");return y(u)==="symbol"?u:String(u)}function O(o,u){if(y(o)!=="object"||o===null)return o;var d=o[Symbol.toPrimitive];if(d!==void 0){var C=d.call(o,u||"default");if(y(C)!=="object")return C;throw new TypeError("@@toPrimitive must return a primitive value.")}return(u==="string"?String:Number)(o)}function M(o,u,d){var C={},f=function(c,s){return c in d?d[c](s[c]):s[c]};return u.forEach(function(p){if(p in o)if(p==="style"&&o.style!==void 0){var c=Object.keys(o.style);c.forEach(function(s){C[s]=o.style[s]})}else p!=="visible"&&(C[p]=f(p,o))}),C}function A(o,u){var d;return!o||i.Children.count(o)!==1?null:i.cloneElement(i.Children.only(o),(d={},g(d,"".concat(u.key),u.instance),g(d,"map",u.map),d))}},66724:function(Z,S,r){r.d(S,{t:function(){return y}});var i=r(95704),y=function(l){if(!l)return null;if("getLng"in l&&"getLat"in l)return l;var O=0,M=0;Array.isArray(l)?(O=l[0],M=l[1]):"lng"in l&&"lat"in l?(O=l.lng,M=l.lat):"longitude"in l&&"latitude"in l&&(O=l.longitude,M=l.latitude);var A=(0,i.rr)();return i.Ym&&A?new A.LngLat(O,M):null}},79478:function(Z,S,r){r.r(S),r.d(S,{default:function(){return c}});var i=r(54306),y=r.n(i),g=r(50959),l=r(38342),O=r(34422),M=r(67348),A=r(80667),o=r(625),u={active:function(I,v){v&&(I?v.open():v.close())}},d={},C=g.forwardRef(function(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},I=arguments.length>1?arguments[1]:void 0,v=(0,g.useRef)(null),R=(0,o.S)(),w=R.map,E=R.AMap,z=(0,A.s)(s,v,{setterMap:u,converterMap:d}),D=z.onInstanceCreated;(0,g.useEffect)(function(){s.map&&s.poly&&T().then(function(){D==null||D(v.current)})},[s.map,s.poly]),(0,g.useImperativeHandle)(I,function(){return v.current},[v.current]);var T=function(){return new Promise(function(V){E.plugin(["AMap.PolylineEditor"],function(){v.current=new E.PolylineEditor(s.map,s.poly),V()})})};return null}),f=r(11527),p=function(){return{longitude:60+Math.random()*50,latitude:10+Math.random()*40}},c=function(){var s=(0,g.useState)(!0),I=y()(s,2),v=I[0],R=I[1],w=(0,g.useState)(Array(3).fill(!0).map(p)),E=y()(w,1),z=E[0],D=(0,g.useState)({longitude:120,latitude:30}),T=y()(D,1),H=T[0],V=function(){R(function(X){return!X})};return(0,f.jsxs)("div",{style:{height:500},children:[(0,f.jsx)(O.D,{center:H,zoom:3,children:(0,f.jsx)(M.a,{path:z,children:(0,f.jsx)(C,{active:v})})}),(0,f.jsx)(l.ZP,{onClick:function(){V()},children:"Random Active"})]})}}}]);