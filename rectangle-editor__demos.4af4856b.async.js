"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[514],{625:function(G,I,a){a.d(I,{S:function(){return M},X:function(){return g}});var f=a(50959),g=(0,f.createContext)({}),M=function(){return(0,f.useContext)(g)}},34422:function(G,I,a){a.d(I,{D:function(){return F}});var f=a(50959),g=a(35354),M=a(80667),s=a(66724),O=["layers","zoom","zooms","center","labelzIndex","lang","mapStyle","features","cursor","pitch","mask","defaultLayer"],A=["animateEnable","doubleClickZoom","dragEnable","isHotspot","jogEnable","keyboardEnable","pitchEnable","resizeEnable","rotateEnable","scrollWheel","touchZoom","zoomEnable"],C=["view","showIndoorMap","indoorMap","expandZoomRange","touchZoomCenter","showBuildingBlock","viewMode","buildingAnimation","skyColor","WebGLParams"],i={width:"100%",height:"100%",position:"relative"},u={width:"100%",height:"100%"},y=O.concat(A,C),b={zoom:function(e,n){n&&n.setZoom(e)},cursor:function(e,n){n&&n.setDefaultCursor(e)},labelzIndex:function(e,n){n&&n.setLabelzIndex(e)}},D={center:s.t,mapStyle:function(e){return e.indexOf("amap://styles")===0?e:"amap://styles/".concat(e)}},p=a(95704),v=a(11527),d=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=(0,f.useRef)(),o=(0,f.useRef)(),m=(0,M.s)(e,o,{setterMap:b,converterMap:D}),h=m.loaded,Z=m.prevProps,L=m.onInstanceCreated;(0,f.useEffect)(function(){w().then(function(){var T;(T=e.onMapCreate)===null||T===void 0||T.call(e,o.current),L==null||L(o.current)})},[]),(0,f.useEffect)(function(){h&&tt(Z,e)},[e]);var w=function(){var P=J(),S=(0,p.rr)();return o.current=new S.Map(n.current,P),Promise.resolve()},J=function(){var P={};return y.forEach(function(S){S in e&&(P[S]=Q(S,e))}),P},Q=function(P,S){return P in D?D[P](S[P]):S[P]},tt=function(P,S){var N={},X=!1,et=!1;A.forEach(function(Y){Y in S&&(et=!0,q(Y,P,S)&&(X=!0,N[Y]=S[Y]))}),X&&o.current.setStatus(N)},q=function(P,S,N){return S[P]!==N[P]};return(0,v.jsxs)("div",{style:i,children:[(0,v.jsx)("div",{ref:n,style:u,children:h?null:e.loading}),(0,v.jsx)("div",{children:h?e.children:null})]})},V=a(625);function j(t){"@babel/helpers - typeof";return j=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},j(t)}var R=["mapKey","version","plugins","AMapUI","Loca","loading","onComplete","onMapCreate"];function z(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter(function(m){return Object.getOwnPropertyDescriptor(t,m).enumerable})),n.push.apply(n,o)}return n}function B(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?z(Object(n),!0).forEach(function(o){$(t,o,n[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):z(Object(n)).forEach(function(o){Object.defineProperty(t,o,Object.getOwnPropertyDescriptor(n,o))})}return t}function $(t,e,n){return e=k(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function k(t){var e=r(t,"string");return j(e)==="symbol"?e:String(e)}function r(t,e){if(j(t)!=="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var o=n.call(t,e||"default");if(j(o)!=="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function c(t,e){return K(t)||x(t,e)||E(t,e)||l()}function l(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function E(t,e){if(t){if(typeof t=="string")return W(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return W(t,e)}}function W(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}function x(t,e){var n=t==null?null:typeof Symbol!="undefined"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var o,m,h,Z,L=[],w=!0,J=!1;try{if(h=(n=n.call(t)).next,e===0){if(Object(n)!==n)return;w=!1}else for(;!(w=(o=h.call(n)).done)&&(L.push(o.value),L.length!==e);w=!0);}catch(Q){J=!0,m=Q}finally{try{if(!w&&n.return!=null&&(Z=n.return(),Object(Z)!==Z))return}finally{if(J)throw m}}return L}}function K(t){if(Array.isArray(t))return t}function U(t,e){if(t==null)return{};var n=H(t,e),o,m;if(Object.getOwnPropertySymbols){var h=Object.getOwnPropertySymbols(t);for(m=0;m<h.length;m++)o=h[m],!(e.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(t,o)&&(n[o]=t[o])}return n}function H(t,e){if(t==null)return{};var n={},o=Object.keys(t),m,h;for(h=0;h<o.length;h++)m=o[h],!(e.indexOf(m)>=0)&&(n[m]=t[m]);return n}var F=f.forwardRef(function(t,e){var n=t.mapKey,o=t.version,m=t.plugins,h=t.AMapUI,Z=t.Loca,L=t.loading,w=t.onComplete,J=t.onMapCreate,Q=U(t,R),tt=(0,f.useState)(),q=c(tt,2),T=q[0],P=q[1],S=(0,f.useState)(),N=c(S,2),X=N[0],et=N[1];return(0,f.useImperativeHandle)(e,function(){return X},[X]),(0,v.jsx)(V.X.Provider,{value:{AMap:T,map:X},children:(0,v.jsx)(g._,{mapKey:n,version:o,plugins:m,Loca:Z,AMapUI:h,loading:L,onComplete:function(_){w==null||w(_),P(_)},children:(0,v.jsx)(d,B(B({loading:L},Q),{},{onMapCreate:function(_){et(_)}}))})})})},19055:function(G,I,a){a.d(I,{A:function(){return k}});var f=a(50959),g=a(625),M=a(80667),s=a(76746),O=a(95704),A=a(66724);function C(r,c,l){return i()?C=Reflect.construct.bind():C=function(W,x,K){var U=[null];U.push.apply(U,x);var H=Function.bind.apply(W,U),F=new H;return K&&u(F,K.prototype),F},C.apply(null,arguments)}function i(){if(typeof Reflect=="undefined"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(r){return!1}}function u(r,c){return u=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(E,W){return E.__proto__=W,E},u(r,c)}function y(r){return v(r)||p(r)||D(r)||b()}function b(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function D(r,c){if(r){if(typeof r=="string")return d(r,c);var l=Object.prototype.toString.call(r).slice(8,-1);if(l==="Object"&&r.constructor&&(l=r.constructor.name),l==="Map"||l==="Set")return Array.from(r);if(l==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l))return d(r,c)}}function p(r){if(typeof Symbol!="undefined"&&r[Symbol.iterator]!=null||r["@@iterator"]!=null)return Array.from(r)}function v(r){if(Array.isArray(r))return d(r)}function d(r,c){(c==null||c>r.length)&&(c=r.length);for(var l=0,E=new Array(c);l<c;l++)E[l]=r[l];return E}var V=function(c){if("getSouthWest"in c)return c;var l=(0,O.rr)();return O.Ym&&l?C(l.Bounds,y(c.map(A.t))):null};function j(r){return r&&V(r)}var R=["bounds","draggable","extData","visible","style"],z=R.concat(["zIndex","bubble","cursor"]),B={visible:function(c,l){l&&(c?l.show():l.hide())},style:function(c,l){l&&l.setOptions(c)}},$={bounds:function(c){return j(c)}},k=f.forwardRef(function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},c=arguments.length>1?arguments[1]:void 0,l=(0,g.S)(),E=l.map,W=l.AMap,x=(0,f.useRef)(null),K=(0,M.s)(r,x,{setterMap:B,converterMap:$}),U=K.loaded,H=K.onInstanceCreated;(0,f.useEffect)(function(){E&&F().then(function(){H==null||H(x.current)})},[E]),(0,f.useImperativeHandle)(c,function(){return x.current},[x.current]);var F=function(){var e=(0,s.T)(r,z,$);return e.map=E,x.current=new W.Rectangle(e),Promise.resolve()};return U?(0,s.p)(r.children,{key:"rectangle",instance:x.current,map:E}):null})},76746:function(G,I,a){a.d(I,{T:function(){return A},p:function(){return C}});var f=a(50959);function g(i){"@babel/helpers - typeof";return g=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(u){return typeof u}:function(u){return u&&typeof Symbol=="function"&&u.constructor===Symbol&&u!==Symbol.prototype?"symbol":typeof u},g(i)}function M(i,u,y){return u=s(u),u in i?Object.defineProperty(i,u,{value:y,enumerable:!0,configurable:!0,writable:!0}):i[u]=y,i}function s(i){var u=O(i,"string");return g(u)==="symbol"?u:String(u)}function O(i,u){if(g(i)!=="object"||i===null)return i;var y=i[Symbol.toPrimitive];if(y!==void 0){var b=y.call(i,u||"default");if(g(b)!=="object")return b;throw new TypeError("@@toPrimitive must return a primitive value.")}return(u==="string"?String:Number)(i)}function A(i,u,y){var b={},D=function(v,d){return v in y?y[v](d[v]):d[v]};return u.forEach(function(p){if(p in i)if(p==="style"&&i.style!==void 0){var v=Object.keys(i.style);v.forEach(function(d){b[d]=i.style[d]})}else p!=="visible"&&(b[p]=D(p,i))}),b}function C(i,u){var y;return!i||f.Children.count(i)!==1?null:f.cloneElement(f.Children.only(i),(y={},M(y,"".concat(u.key),u.instance),M(y,"map",u.map),y))}},66724:function(G,I,a){a.d(I,{t:function(){return g}});var f=a(95704),g=function(s){if(!s)return null;if("getLng"in s&&"getLat"in s)return s;var O=0,A=0;Array.isArray(s)?(O=s[0],A=s[1]):"lng"in s&&"lat"in s?(O=s.lng,A=s.lat):"longitude"in s&&"latitude"in s&&(O=s.longitude,A=s.latitude);var C=(0,f.rr)();return f.Ym&&C?new C.LngLat(O,A):null}},9637:function(G,I,a){a.r(I),a.d(I,{default:function(){return D}});var f=a(54306),g=a.n(f),M=a(50959),s=a(34422),O=a(19055),A=a(80667),C=a(625),i={active:function(v,d){d&&(v?d.open():d.close())}},u={},y=M.forwardRef(function(){var p=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},v=arguments.length>1?arguments[1]:void 0,d=(0,C.S)(),V=d.map,j=d.AMap,R=(0,M.useRef)(null),z=(0,A.s)(p,R,{setterMap:i,converterMap:u}),B=z.onInstanceCreated;(0,M.useEffect)(function(){p.map&&p.rectangle&&$().then(function(){B==null||B(R.current)})},[p.map,p.rectangle]),(0,M.useImperativeHandle)(v,function(){return R.current},[R.current]);var $=function(){return new Promise(function(r){j.plugin(["AMap.RectangleEditor"],function(){R.current=new j.RectangleEditor(p.map,p.rectangle),r()})})};return null}),b=a(11527),D=function(){var p=(0,M.useState)(!0),v=g()(p,2),d=v[0],V=v[1],j=function(){V(function(z){return!z})};return(0,b.jsxs)("div",{style:{height:500},children:[(0,b.jsx)(s.D,{zoom:4,children:(0,b.jsx)(O.A,{bounds:[[108.245573,39.027206],[116.485319,26.666506]],children:(0,b.jsx)(y,{active:d})})}),(0,b.jsx)("button",{onClick:function(){j()},children:"Toggle Active"})]})}}}]);