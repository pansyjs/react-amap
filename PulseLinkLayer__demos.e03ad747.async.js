"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7010],{1006:function(N,P,u){u.d(P,{j:function(){return b},l:function(){return p}});var v=u(50959),b=(0,v.createContext)({}),p=function(){return(0,v.useContext)(b)}},81077:function(N,P,u){u.d(P,{o:function(){return Q}});var v=u(50959),b=u(625),p=u(11527),d=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},o=a.onCreate,s=(0,b.S)(),w=s.map,R=(0,v.useRef)();return(0,v.useEffect)(function(){w&&(R.current=new window.Loca.Container({map:w}),o==null||o(R.current))},[w]),(0,p.jsx)(p.Fragment,{children:a.children})},L=u(1006);function h(n){"@babel/helpers - typeof";return h=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},h(n)}function S(n,a){var o=Object.keys(n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);a&&(s=s.filter(function(w){return Object.getOwnPropertyDescriptor(n,w).enumerable})),o.push.apply(o,s)}return o}function A(n){for(var a=1;a<arguments.length;a++){var o=arguments[a]!=null?arguments[a]:{};a%2?S(Object(o),!0).forEach(function(s){D(n,s,o[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(o)):S(Object(o)).forEach(function(s){Object.defineProperty(n,s,Object.getOwnPropertyDescriptor(o,s))})}return n}function D(n,a,o){return a=K(a),a in n?Object.defineProperty(n,a,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[a]=o,n}function K(n){var a=x(n,"string");return h(a)==="symbol"?a:String(a)}function x(n,a){if(h(n)!=="object"||n===null)return n;var o=n[Symbol.toPrimitive];if(o!==void 0){var s=o.call(n,a||"default");if(h(s)!=="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(a==="string"?String:Number)(n)}function W(n,a){return B(n)||Y(n,a)||j(n,a)||T()}function T(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function j(n,a){if(n){if(typeof n=="string")return Z(n,a);var o=Object.prototype.toString.call(n).slice(8,-1);if(o==="Object"&&n.constructor&&(o=n.constructor.name),o==="Map"||o==="Set")return Array.from(n);if(o==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return Z(n,a)}}function Z(n,a){(a==null||a>n.length)&&(a=n.length);for(var o=0,s=new Array(a);o<a;o++)s[o]=n[o];return s}function Y(n,a){var o=n==null?null:typeof Symbol!="undefined"&&n[Symbol.iterator]||n["@@iterator"];if(o!=null){var s,w,R,l,i=[],f=!0,m=!1;try{if(R=(o=o.call(n)).next,a===0){if(Object(o)!==o)return;f=!1}else for(;!(f=(s=R.call(o)).done)&&(i.push(s.value),i.length!==a);f=!0);}catch(I){m=!0,w=I}finally{try{if(!f&&o.return!=null&&(l=o.return(),Object(l)!==l))return}finally{if(m)throw w}}return i}}function B(n){if(Array.isArray(n))return n}var Q=(0,v.forwardRef)(function(n,a){var o=(0,v.useState)(),s=W(o,2),w=s[0],R=s[1];return(0,v.useImperativeHandle)(a,function(){return w},[w]),(0,p.jsx)(L.j.Provider,{value:{loca:w},children:(0,p.jsx)(d,A(A({},n),{},{onCreate:function(i){R(i)}}))})})},57682:function(N,P,u){u.d(P,{A:function(){return A}});var v=u(50959),b=u(91227),p=u(80667),d=["loca","zIndex","visible","zooms","opacity"],L=d.concat([]),h={visible:function(K,x){x&&(K?x.show():x.hide())}},S={},A=(0,v.forwardRef)(function(){var D=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},K=arguments.length>1?arguments[1]:void 0,x=(0,v.useRef)(),W=(0,p.s)(D,x,{setterMap:h,converterMap:S}),T=W.onInstanceCreated;return(0,v.useEffect)(function(){var j=(0,b.T)(D,L,S);x.current=new window.Loca.ScatterLayer(j),T==null||T(x.current)},[]),(0,v.useImperativeHandle)(K,function(){return x.current},[x.current]),null})},625:function(N,P,u){u.d(P,{S:function(){return p},X:function(){return b}});var v=u(50959),b=(0,v.createContext)({}),p=function(){return(0,v.useContext)(b)}},34422:function(N,P,u){u.d(P,{D:function(){return k}});var v=u(50959),b=u(35354),p=u(80667),d=u(66724),L=["layers","zoom","zooms","center","labelzIndex","lang","mapStyle","features","cursor","pitch","mask","defaultLayer"],h=["animateEnable","doubleClickZoom","dragEnable","isHotspot","jogEnable","keyboardEnable","pitchEnable","resizeEnable","rotateEnable","scrollWheel","touchZoom","zoomEnable"],S=["view","showIndoorMap","indoorMap","expandZoomRange","touchZoomCenter","showBuildingBlock","viewMode","buildingAnimation","skyColor"],A={width:"100%",height:"100%",position:"relative"},D={width:"100%",height:"100%"},K=L.concat(h,S),x={zoom:function(t,r){r&&r.setZoom(t)},cursor:function(t,r){r&&r.setDefaultCursor(t)},labelzIndex:function(t,r){r&&r.setLabelzIndex(t)}},W={center:d.t,mapStyle:function(t){return t.indexOf("amap://styles")===0?t:"amap://styles/".concat(t)}},T=u(95704),j=u(11527),Z=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=(0,v.useRef)(),c=(0,v.useRef)(),y=(0,p.s)(t,c,{setterMap:x,converterMap:W}),g=y.loaded,U=y.prevProps,E=y.onInstanceCreated;(0,v.useEffect)(function(){O().then(function(){var z;(z=t.onMapCreate)===null||z===void 0||z.call(t,c.current),E==null||E(c.current)})},[]),(0,v.useEffect)(function(){g&&q(U,t)},[t]);var O=function(){var C=H(),M=(0,T.rr)();return c.current=new M.Map(r.current,C),Promise.resolve()},H=function(){var C={};return K.forEach(function(M){M in t&&(C[M]=G(M,t))}),C},G=function(C,M){return C in W?W[C](M[C]):M[C]},q=function(C,M){var F={},J=!1,te=!1;h.forEach(function(X){X in M&&(te=!0,_(X,C,M)&&(J=!0,F[X]=M[X]))}),J&&c.current.setStatus(F)},_=function(C,M,F){return M[C]!==F[C]};return(0,j.jsxs)("div",{style:A,children:[(0,j.jsx)("div",{ref:r,style:D,children:g?null:t.loading}),(0,j.jsx)("div",{children:g?t.children:null})]})},Y=u(625);function B(e){"@babel/helpers - typeof";return B=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},B(e)}var Q=["mapKey","version","plugins","AMapUI","Loca","loading","onComplete","onMapCreate"];function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter(function(y){return Object.getOwnPropertyDescriptor(e,y).enumerable})),r.push.apply(r,c)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?n(Object(r),!0).forEach(function(c){o(e,c,r[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach(function(c){Object.defineProperty(e,c,Object.getOwnPropertyDescriptor(r,c))})}return e}function o(e,t,r){return t=s(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e){var t=w(e,"string");return B(t)==="symbol"?t:String(t)}function w(e,t){if(B(e)!=="object"||e===null)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var c=r.call(e,t||"default");if(B(c)!=="object")return c;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function R(e,t){return I(e)||m(e,t)||i(e,t)||l()}function l(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function i(e,t){if(e){if(typeof e=="string")return f(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return f(e,t)}}function f(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,c=new Array(t);r<t;r++)c[r]=e[r];return c}function m(e,t){var r=e==null?null:typeof Symbol!="undefined"&&e[Symbol.iterator]||e["@@iterator"];if(r!=null){var c,y,g,U,E=[],O=!0,H=!1;try{if(g=(r=r.call(e)).next,t===0){if(Object(r)!==r)return;O=!1}else for(;!(O=(c=g.call(r)).done)&&(E.push(c.value),E.length!==t);O=!0);}catch(G){H=!0,y=G}finally{try{if(!O&&r.return!=null&&(U=r.return(),Object(U)!==U))return}finally{if(H)throw y}}return E}}function I(e){if(Array.isArray(e))return e}function $(e,t){if(e==null)return{};var r=V(e,t),c,y;if(Object.getOwnPropertySymbols){var g=Object.getOwnPropertySymbols(e);for(y=0;y<g.length;y++)c=g[y],!(t.indexOf(c)>=0)&&Object.prototype.propertyIsEnumerable.call(e,c)&&(r[c]=e[c])}return r}function V(e,t){if(e==null)return{};var r={},c=Object.keys(e),y,g;for(g=0;g<c.length;g++)y=c[g],!(t.indexOf(y)>=0)&&(r[y]=e[y]);return r}var k=v.forwardRef(function(e,t){var r=e.mapKey,c=e.version,y=e.plugins,g=e.AMapUI,U=e.Loca,E=e.loading,O=e.onComplete,H=e.onMapCreate,G=$(e,Q),q=(0,v.useState)(),_=R(q,2),z=_[0],C=_[1],M=(0,v.useState)(),F=R(M,2),J=F[0],te=F[1];return(0,v.useImperativeHandle)(t,function(){return J},[J]),(0,j.jsx)(Y.X.Provider,{value:{AMap:z,map:J},children:(0,j.jsx)(b._,{mapKey:r,version:c,plugins:y,Loca:U,AMapUI:g,loading:E,onComplete:function(ee){O==null||O(ee),C(ee)},children:(0,j.jsx)(Z,a(a({loading:E},G),{},{onMapCreate:function(ee){te(ee)}}))})})})},91227:function(N,P,u){u.d(P,{T:function(){return v}});function v(b,p,d){var L={},h=function(A,D){return A in d?d[A](D[A]):D[A]};return p.forEach(function(S){S in b&&S!=="visible"&&(L[S]=h(S,b))}),L}},66724:function(N,P,u){u.d(P,{t:function(){return b}});var v=u(95704),b=function(d){if(!d)return null;if("getLng"in d&&"getLat"in d)return d;var L=0,h=0;Array.isArray(d)?(L=d[0],h=d[1]):"lng"in d&&"lat"in d?(L=d.lng,h=d.lat):"longitude"in d&&"latitude"in d&&(L=d.longitude,h=d.latitude);var S=(0,v.rr)();return v.Ym&&S?new S.LngLat(L,h):null}},15455:function(N,P,u){u.r(P),u.d(P,{default:function(){return R}});var v=u(54306),b=u.n(v),p=u(50959),d=u(34422),L=u(38342),h=u(1006),S=u(57682),A=u(91227),D=u(80667),K=["loca","zIndex","zooms","opacity"],x=K.concat(["visible"]),W={visible:function(i,f){f&&(i?f.show():f.hide())}},T={};function j(l){"@babel/helpers - typeof";return j=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(i){return typeof i}:function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},j(l)}function Z(l,i){var f=Object.keys(l);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(l);i&&(m=m.filter(function(I){return Object.getOwnPropertyDescriptor(l,I).enumerable})),f.push.apply(f,m)}return f}function Y(l){for(var i=1;i<arguments.length;i++){var f=arguments[i]!=null?arguments[i]:{};i%2?Z(Object(f),!0).forEach(function(m){B(l,m,f[m])}):Object.getOwnPropertyDescriptors?Object.defineProperties(l,Object.getOwnPropertyDescriptors(f)):Z(Object(f)).forEach(function(m){Object.defineProperty(l,m,Object.getOwnPropertyDescriptor(f,m))})}return l}function B(l,i,f){return i=Q(i),i in l?Object.defineProperty(l,i,{value:f,enumerable:!0,configurable:!0,writable:!0}):l[i]=f,l}function Q(l){var i=n(l,"string");return j(i)==="symbol"?i:String(i)}function n(l,i){if(j(l)!=="object"||l===null)return l;var f=l[Symbol.toPrimitive];if(f!==void 0){var m=f.call(l,i||"default");if(j(m)!=="object")return m;throw new TypeError("@@toPrimitive must return a primitive value.")}return(i==="string"?String:Number)(l)}var a=(0,p.forwardRef)(function(){var l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=arguments.length>1?arguments[1]:void 0,f=(0,h.l)(),m=f.loca,I=(0,p.useRef)(),$=(0,D.s)(l,I,{setterMap:W,converterMap:T}),V=$.onInstanceCreated;return(0,p.useEffect)(function(){if(m){var k=(0,A.T)(l,x,T);I.current=new window.Loca.PulseLinkLayer(Y({loca:m},k)),V==null||V(I.current)}},[m]),(0,p.useImperativeHandle)(i,function(){return I.current},[I.current]),null}),o=u(81077),s=u(11527),w=function(){var i=(0,h.l)(),f=i.loca,m=(0,p.useState)(!0),I=b()(m,2),$=I[0],V=I[1],k=(0,p.useState)(),e=b()(k,2),t=e[0],r=e[1],c=(0,p.useState)(),y=b()(c,2),g=y[0],U=y[1];return(0,p.useEffect)(function(){if(t&&f&&g){var E=new window.Loca.GeoJSONSource({url:"https://a.amap.com/Loca/static/loca-v2/demos/mock_data/pulselink-china-city-point.json"});t.setSource(E),t.setStyle({unit:"meter",size:[2e5,2e5],borderWidth:0,texture:"https://a.amap.com/Loca/static/static/green.png",duration:2e3,animate:!0}),f.add(t);var O=new window.Loca.GeoJSONSource({url:"https://a.amap.com/Loca/static/loca-v2/demos/mock_data/data-line-out.json"});g.setSource(O),g.setStyle({unit:"meter",dash:[4e4,0,4e4,0],lineWidth:function(){return[8e3,8e3]},height:function(G,q){return q.distance/3+10},smoothSteps:30,speed:function(){return 1e3+Math.random()*1e5},flowLength:1e5,lineColors:function(){return["rgba(44, 119, 248, 0.9)","rgba(44, 119, 248, 0.5)","rgba(44, 119, 248, 0.2)"]},maxHeightScale:.3,headColor:"rgb(3, 214, 252)",trailColor:"rgba(255, 255,0,0)"}),f.add(g),f.animate.start()}},[t,g,f]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(L.ZP,{onClick:function(){V(function(O){return!O})},children:"\u5207\u6362\u663E\u9690"}),(0,s.jsx)(S.A,{zIndex:10,opacity:.6,visible:$,zooms:[2,22],events:{created:function(O){r(O)}}}),(0,s.jsx)(a,{zIndex:10,opacity:1,visible:$,zooms:[2,22],depth:!0,events:{created:function(O){U(O)}}})]})},R=function(){return(0,s.jsx)("div",{style:{height:500},children:(0,s.jsx)(d.D,{Loca:{},viewMode:"3D",pitch:35,center:[104.780269,34.955403],zoom:5,mapStyle:"amap://styles/grey",children:(0,s.jsx)(o.o,{children:(0,s.jsx)(w,{})})})})}}}]);
