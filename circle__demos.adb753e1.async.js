"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3334],{20916:function(H,E,r){r.d(E,{C:function(){return c}});var o=r(50959),v=r(625),h=r(80667),s=r(76746),m=r(66724),S=["center","radius","draggable","extData","visible","style"],A=S.concat(["zIndex","bubble"]),l={visible:function(j,u){u&&(j?u.show():u.hide())},style:function(j,u){u&&u.setOptions(j)}},i={center:m.t},c=o.forwardRef(function(){var x=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},j=arguments.length>1?arguments[1]:void 0,u=(0,v.S)(),f=u.map,I=u.AMap,N=(0,o.useRef)(null),T=(0,h.s)(x,N,{setterMap:l,converterMap:i}),p=T.loaded,D=T.onInstanceCreated;(0,o.useEffect)(function(){f&&R().then(function(){D==null||D(N.current)})},[f]),(0,o.useImperativeHandle)(j,function(){return N.current},[N.current]);var R=function(){var P=(0,s.T)(x,A,i);return P.map=f,N.current=new I.Circle(P),Promise.resolve()};return p?(0,s.p)(x.children,{key:"circle",instance:N.current,map:f}):null})},625:function(H,E,r){r.d(E,{S:function(){return h},X:function(){return v}});var o=r(50959),v=(0,o.createContext)({}),h=function(){return(0,o.useContext)(v)}},34422:function(H,E,r){r.d(E,{D:function(){return Z}});var o=r(50959),v=r(35354),h=r(80667),s=r(66724),m=["layers","zoom","zooms","center","labelzIndex","lang","mapStyle","features","cursor","pitch","mask","defaultLayer"],S=["animateEnable","doubleClickZoom","dragEnable","isHotspot","jogEnable","keyboardEnable","pitchEnable","resizeEnable","rotateEnable","scrollWheel","touchZoom","zoomEnable"],A=["view","showIndoorMap","indoorMap","expandZoomRange","touchZoomCenter","showBuildingBlock","viewMode","buildingAnimation","skyColor","WebGLParams"],l={width:"100%",height:"100%",position:"relative"},i={width:"100%",height:"100%"},c=m.concat(S,A),x={zoom:function(t,n){n&&n.setZoom(t)},cursor:function(t,n){n&&n.setDefaultCursor(t)},labelzIndex:function(t,n){n&&n.setLabelzIndex(t)}},j={center:s.t,mapStyle:function(t){return t.indexOf("amap://styles")===0?t:"amap://styles/".concat(t)}},u=r(95704),f=r(11527);function I(e){"@babel/helpers - typeof";return I=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},I(e)}function N(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(g){return Object.getOwnPropertyDescriptor(e,g).enumerable})),n.push.apply(n,a)}return n}function T(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?N(Object(n),!0).forEach(function(a){p(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):N(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}function p(e,t,n){return t=D(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function D(e){var t=R(e,"string");return I(t)==="symbol"?t:String(t)}function R(e,t){if(I(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var a=n.call(e,t||"default");if(I(a)!=="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var y=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=(0,o.useRef)(),a=(0,o.useRef)(),g=(0,h.s)(t,a,{setterMap:x,converterMap:j}),O=g.loaded,$=g.prevProps,C=g.onInstanceCreated;(0,o.useEffect)(function(){L().then(function(){var w;(w=t.onMapCreate)===null||w===void 0||w.call(t,a.current),C==null||C(a.current)})},[]),(0,o.useEffect)(function(){O&&te($,t)},[t]);var L=function(){var M=Q(),b=(0,u.rr)();return a.current=new b.Map(n.current,M),Promise.resolve()},Q=function(){var M={};return c.forEach(function(b){b in t&&(M[b]=k(b,t))}),M},k=function(M,b){return M in j?j[M](b[M]):b[M]},te=function(M,b){var z={},B=!1,q=!1;S.forEach(function(W){W in b&&(q=!0,V(W,M,b)&&(B=!0,z[W]=b[W]))}),B&&a.current.setStatus(z)},V=function(M,b,z){return b[M]!==z[M]};return(0,f.jsxs)("div",{className:t.className,style:T(T({},l),t.style),children:[(0,f.jsx)("div",{ref:n,style:i,children:O?null:t.loading}),(0,f.jsx)("div",{children:O?t.children:null})]})},P=r(625);function d(e){"@babel/helpers - typeof";return d=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},d(e)}var G=["mapKey","version","plugins","AMapUI","Loca","loading","onComplete","onMapCreate"];function K(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(g){return Object.getOwnPropertyDescriptor(e,g).enumerable})),n.push.apply(n,a)}return n}function F(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?K(Object(n),!0).forEach(function(a){re(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):K(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}function re(e,t,n){return t=ae(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ae(e){var t=_(e,"string");return d(t)==="symbol"?t:String(t)}function _(e,t){if(d(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var a=n.call(e,t||"default");if(d(a)!=="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function X(e,t){return Y(e)||ie(e,t)||le(e,t)||oe()}function oe(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function le(e,t){if(e){if(typeof e=="string")return ee(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ee(e,t)}}function ee(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function ie(e,t){var n=e==null?null:typeof Symbol!="undefined"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var a,g,O,$,C=[],L=!0,Q=!1;try{if(O=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;L=!1}else for(;!(L=(a=O.call(n)).done)&&(C.push(a.value),C.length!==t);L=!0);}catch(k){Q=!0,g=k}finally{try{if(!L&&n.return!=null&&($=n.return(),Object($)!==$))return}finally{if(Q)throw g}}return C}}function Y(e){if(Array.isArray(e))return e}function J(e,t){if(e==null)return{};var n=U(e,t),a,g;if(Object.getOwnPropertySymbols){var O=Object.getOwnPropertySymbols(e);for(g=0;g<O.length;g++)a=O[g],!(t.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}function U(e,t){if(e==null)return{};var n={},a=Object.keys(e),g,O;for(O=0;O<a.length;O++)g=a[O],!(t.indexOf(g)>=0)&&(n[g]=e[g]);return n}var Z=o.forwardRef(function(e,t){var n=e.mapKey,a=e.version,g=e.plugins,O=e.AMapUI,$=e.Loca,C=e.loading,L=e.onComplete,Q=e.onMapCreate,k=J(e,G),te=(0,o.useState)(),V=X(te,2),w=V[0],M=V[1],b=(0,o.useState)(),z=X(b,2),B=z[0],q=z[1];return(0,o.useImperativeHandle)(t,function(){return B},[B]),(0,f.jsx)(P.X.Provider,{value:{AMap:w,map:B},children:(0,f.jsx)(v._,{mapKey:n,version:a,plugins:g,Loca:$,AMapUI:O,loading:C,onComplete:function(ne){L==null||L(ne),M(ne)},children:(0,f.jsx)(y,F(F({loading:C},k),{},{onMapCreate:function(ne){q(ne)}}))})})})},76746:function(H,E,r){r.d(E,{T:function(){return S},p:function(){return A}});var o=r(50959);function v(l){"@babel/helpers - typeof";return v=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(i){return typeof i}:function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},v(l)}function h(l,i,c){return i=s(i),i in l?Object.defineProperty(l,i,{value:c,enumerable:!0,configurable:!0,writable:!0}):l[i]=c,l}function s(l){var i=m(l,"string");return v(i)==="symbol"?i:String(i)}function m(l,i){if(v(l)!=="object"||l===null)return l;var c=l[Symbol.toPrimitive];if(c!==void 0){var x=c.call(l,i||"default");if(v(x)!=="object")return x;throw new TypeError("@@toPrimitive must return a primitive value.")}return(i==="string"?String:Number)(l)}function S(l,i,c){var x={},j=function(f,I){return f in c?c[f](I[f]):I[f]};return i.forEach(function(u){if(u in l)if(u==="style"&&l.style!==void 0){var f=Object.keys(l.style);f.forEach(function(I){x[I]=l.style[I]})}else u!=="visible"&&(x[u]=j(u,l))}),x}function A(l,i){var c;return!l||o.Children.count(l)!==1?null:o.cloneElement(o.Children.only(l),(c={},h(c,"".concat(i.key),i.instance),h(c,"map",i.map),c))}},66724:function(H,E,r){r.d(E,{t:function(){return v}});var o=r(95704),v=function(s){if(!s)return null;if("getLng"in s&&"getLat"in s)return s;var m=0,S=0;Array.isArray(s)?(m=s[0],S=s[1]):"lng"in s&&"lat"in s?(m=s.lng,S=s.lat):"longitude"in s&&"latitude"in s&&(m=s.longitude,S=s.latitude);var A=(0,o.rr)();return o.Ym&&A?new A.LngLat(m,S):null}},53610:function(H,E,r){r.r(E),r.d(E,{default:function(){return x}});var o=r(54306),v=r.n(o),h=r(50959),s=r(24206),m=r(25552),S=r(34422),A=r(20916),l=function(u){return Math.floor(Math.random()*u)},i=function(){var u="0123456789abcdef".split(""),f=u.length;return"#".concat(u[l(f)]).concat(u[l(f)])+"".concat(u[l(f)]).concat(u[l(f)])+"".concat(u[l(f)]).concat(u[l(f)])},c=r(11527),x=function(){var j=(0,h.useState)(!0),u=v()(j,2),f=u[0],I=u[1],N=(0,h.useState)(15e3),T=v()(N,2),p=T[0],D=T[1],R=(0,h.useState)({longitude:120,latitude:30}),y=v()(R,2),P=y[0],d=y[1],G=(0,h.useState)({strokeColor:"#f00"}),K=v()(G,2),F=K[0],re=K[1],ae=(0,h.useState)(!1),_=v()(ae,2),X=_[0],oe=_[1],le=function(){d({longitude:120+Math.random()*20,latitude:30+Math.random()*10})},ee=function(){D(15e3+Math.random()*15e3)},ie=function(){I(function(Z){return!Z})},Y=function(){oe(function(Z){return!Z})},J=function(){re({strokeColor:i()})};return(0,c.jsxs)("div",{style:{height:500},children:[(0,c.jsx)(S.D,{center:P,children:(0,c.jsx)(A.C,{center:P,radius:p,visible:f,style:F,draggable:X})}),(0,c.jsxs)(s.Z,{children:[(0,c.jsx)(m.ZP,{onClick:le,children:"Random Center"}),(0,c.jsx)(m.ZP,{onClick:ee,children:"Change Radius"}),(0,c.jsx)(m.ZP,{onClick:ie,children:"Toggle Visible"}),(0,c.jsx)(m.ZP,{onClick:Y,children:"Toggle Draggable"}),(0,c.jsx)(m.ZP,{onClick:J,children:"Change Style"})]})]})}},41019:function(H,E,r){r.r(E);var o=r(50959),v=r(25552),h=r(34422),s=r(20916),m=r(11527),S={longitude:120,latitude:30};E.default=function(){var A=(0,o.useRef)(null);return(0,m.jsxs)("div",{style:{height:500},children:[(0,m.jsx)(h.D,{center:S,children:(0,m.jsx)(s.C,{ref:A,center:S,radius:15e3})}),(0,m.jsx)(v.ZP,{onClick:function(){console.log(A.current)},children:"\u83B7\u53D6\u5B9E\u4F8B"})]})}},24206:function(H,E,r){r.d(E,{Z:function(){return T}});var o=r(50959),v=r(84875),h=r.n(v),s=r(13763);function m(p){return["small","middle","large"].includes(p)}function S(p){return p?typeof p=="number"&&!Number.isNaN(p):!1}var A=r(17962),l=r(86292);const i=o.createContext({latestIndex:0}),c=i.Provider;var j=p=>{let{className:D,index:R,children:y,split:P,style:d}=p;const{latestIndex:G}=o.useContext(i);return y==null?null:o.createElement(o.Fragment,null,o.createElement("div",{className:D,style:d},y),R<G&&P&&o.createElement("span",{className:`${D}-split`},P))},u=r(33662),f=function(p,D){var R={};for(var y in p)Object.prototype.hasOwnProperty.call(p,y)&&D.indexOf(y)<0&&(R[y]=p[y]);if(p!=null&&typeof Object.getOwnPropertySymbols=="function")for(var P=0,y=Object.getOwnPropertySymbols(p);P<y.length;P++)D.indexOf(y[P])<0&&Object.prototype.propertyIsEnumerable.call(p,y[P])&&(R[y[P]]=p[y[P]]);return R};const N=o.forwardRef((p,D)=>{var R,y;const{getPrefixCls:P,space:d,direction:G}=o.useContext(A.E_),{size:K=(d==null?void 0:d.size)||"small",align:F,className:re,rootClassName:ae,children:_,direction:X="horizontal",prefixCls:oe,split:le,style:ee,wrap:ie=!1,classNames:Y,styles:J}=p,U=f(p,["size","align","className","rootClassName","children","direction","prefixCls","split","style","wrap","classNames","styles"]),[Z,e]=Array.isArray(K)?K:[K,K],t=m(e),n=m(Z),a=S(e),g=S(Z),O=(0,s.Z)(_,{keepEmpty:!0}),$=F===void 0&&X==="horizontal"?"center":F,C=P("space",oe),[L,Q]=(0,u.Z)(C),k=h()(C,d==null?void 0:d.className,Q,`${C}-${X}`,{[`${C}-rtl`]:G==="rtl",[`${C}-align-${$}`]:$,[`${C}-gap-row-${e}`]:t,[`${C}-gap-col-${Z}`]:n},re,ae),te=h()(`${C}-item`,(R=Y==null?void 0:Y.item)!==null&&R!==void 0?R:(y=d==null?void 0:d.classNames)===null||y===void 0?void 0:y.item);let V=0;const w=O.map((z,B)=>{var q,W;z!=null&&(V=B);const ne=z&&z.key||`${te}-${B}`;return o.createElement(j,{className:te,key:ne,index:B,split:le,style:(q=J==null?void 0:J.item)!==null&&q!==void 0?q:(W=d==null?void 0:d.styles)===null||W===void 0?void 0:W.item},z)}),M=o.useMemo(()=>({latestIndex:V}),[V]);if(O.length===0)return null;const b={};return ie&&(b.flexWrap="wrap"),!n&&g&&(b.columnGap=Z),!t&&a&&(b.rowGap=e),L(o.createElement("div",Object.assign({ref:D,className:k,style:Object.assign(Object.assign(Object.assign({},b),d==null?void 0:d.style),ee)},U),o.createElement(c,{value:M},w)))});N.Compact=l.ZP;var T=N}}]);
