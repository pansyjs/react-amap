"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3334],{20916:function(Y,x,r){r.d(x,{C:function(){return d}});var f=r(50959),m=r(625),b=r(80667),a=r(76746),g=r(66724),S=["center","radius","draggable","extData","visible","style"],C=S.concat(["zIndex","bubble"]),o={visible:function(E,u){u&&(E?u.show():u.hide())},style:function(E,u){u&&u.setOptions(E)}},i={center:g.t},d=f.forwardRef(function(){var P=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},E=arguments.length>1?arguments[1]:void 0,u=(0,m.S)(),v=u.map,I=u.AMap,B=(0,f.useRef)(null),A=(0,b.s)(P,B,{setterMap:o,converterMap:i}),_=A.loaded,N=A.onInstanceCreated;(0,f.useEffect)(function(){v&&V().then(function(){N==null||N(B.current)})},[v]),(0,f.useImperativeHandle)(E,function(){return B.current},[B.current]);var V=function(){var M=(0,a.T)(P,C,i);return M.map=v,B.current=new I.Circle(M),Promise.resolve()};return _?(0,a.p)(P.children,{key:"circle",instance:B.current,map:v}):null})},625:function(Y,x,r){r.d(x,{S:function(){return b},X:function(){return m}});var f=r(50959),m=(0,f.createContext)({}),b=function(){return(0,f.useContext)(m)}},34422:function(Y,x,r){r.d(x,{D:function(){return k}});var f=r(50959),m=r(35354),b=r(80667),a=r(66724),g=["layers","zoom","zooms","center","labelzIndex","lang","mapStyle","features","cursor","pitch","mask","defaultLayer"],S=["animateEnable","doubleClickZoom","dragEnable","isHotspot","jogEnable","keyboardEnable","pitchEnable","resizeEnable","rotateEnable","scrollWheel","touchZoom","zoomEnable"],C=["view","showIndoorMap","indoorMap","expandZoomRange","touchZoomCenter","showBuildingBlock","viewMode","buildingAnimation","skyColor","WebGLParams"],o={width:"100%",height:"100%",position:"relative"},i={width:"100%",height:"100%"},d=g.concat(S,C),P={zoom:function(t,n){n&&n.setZoom(t)},cursor:function(t,n){n&&n.setDefaultCursor(t)},labelzIndex:function(t,n){n&&n.setLabelzIndex(t)}},E={center:a.t,mapStyle:function(t){return t.indexOf("amap://styles")===0?t:"amap://styles/".concat(t)}},u=r(95704),v=r(11527),I=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=(0,f.useRef)(),l=(0,f.useRef)(),c=(0,b.s)(t,l,{setterMap:P,converterMap:E}),p=c.loaded,Z=c.prevProps,z=c.onInstanceCreated;(0,f.useEffect)(function(){L().then(function(){var T;(T=t.onMapCreate)===null||T===void 0||T.call(t,l.current),z==null||z(l.current)})},[]),(0,f.useEffect)(function(){p&&te(Z,t)},[t]);var L=function(){var O=K(),h=(0,u.rr)();return l.current=new h.Map(n.current,O),Promise.resolve()},K=function(){var O={};return d.forEach(function(h){h in t&&(O[h]=q(h,t))}),O},q=function(O,h){return O in E?E[O](h[O]):h[O]},te=function(O,h){var G={},H=!1,F=!1;S.forEach(function(D){D in h&&(F=!0,ee(D,O,h)&&(H=!0,G[D]=h[D]))}),H&&l.current.setStatus(G)},ee=function(O,h,G){return h[O]!==G[O]};return(0,v.jsxs)("div",{style:o,children:[(0,v.jsx)("div",{ref:n,style:i,children:p?null:t.loading}),(0,v.jsx)("div",{children:p?t.children:null})]})},B=r(625);function A(e){"@babel/helpers - typeof";return A=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},A(e)}var _=["mapKey","version","plugins","AMapUI","Loca","loading","onComplete","onMapCreate"];function N(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter(function(c){return Object.getOwnPropertyDescriptor(e,c).enumerable})),n.push.apply(n,l)}return n}function V(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?N(Object(n),!0).forEach(function(l){s(e,l,n[l])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):N(Object(n)).forEach(function(l){Object.defineProperty(e,l,Object.getOwnPropertyDescriptor(n,l))})}return e}function s(e,t,n){return t=M(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function M(e){var t=U(e,"string");return A(t)==="symbol"?t:String(t)}function U(e,t){if(A(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var l=n.call(e,t||"default");if(A(l)!=="object")return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function y(e,t){return $(e)||J(e,t)||R(e,t)||j()}function j(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function R(e,t){if(e){if(typeof e=="string")return w(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return w(e,t)}}function w(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,l=new Array(t);n<t;n++)l[n]=e[n];return l}function J(e,t){var n=e==null?null:typeof Symbol!="undefined"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var l,c,p,Z,z=[],L=!0,K=!1;try{if(p=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;L=!1}else for(;!(L=(l=p.call(n)).done)&&(z.push(l.value),z.length!==t);L=!0);}catch(q){K=!0,c=q}finally{try{if(!L&&n.return!=null&&(Z=n.return(),Object(Z)!==Z))return}finally{if(K)throw c}}return z}}function $(e){if(Array.isArray(e))return e}function Q(e,t){if(e==null)return{};var n=W(e,t),l,c;if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(c=0;c<p.length;c++)l=p[c],!(t.indexOf(l)>=0)&&Object.prototype.propertyIsEnumerable.call(e,l)&&(n[l]=e[l])}return n}function W(e,t){if(e==null)return{};var n={},l=Object.keys(e),c,p;for(p=0;p<l.length;p++)c=l[p],!(t.indexOf(c)>=0)&&(n[c]=e[c]);return n}var k=f.forwardRef(function(e,t){var n=e.mapKey,l=e.version,c=e.plugins,p=e.AMapUI,Z=e.Loca,z=e.loading,L=e.onComplete,K=e.onMapCreate,q=Q(e,_),te=(0,f.useState)(),ee=y(te,2),T=ee[0],O=ee[1],h=(0,f.useState)(),G=y(h,2),H=G[0],F=G[1];return(0,f.useImperativeHandle)(t,function(){return H},[H]),(0,v.jsx)(B.X.Provider,{value:{AMap:T,map:H},children:(0,v.jsx)(m._,{mapKey:n,version:l,plugins:c,Loca:Z,AMapUI:p,loading:z,onComplete:function(X){L==null||L(X),O(X)},children:(0,v.jsx)(I,V(V({loading:z},q),{},{onMapCreate:function(X){F(X)}}))})})})},76746:function(Y,x,r){r.d(x,{T:function(){return S},p:function(){return C}});var f=r(50959);function m(o){"@babel/helpers - typeof";return m=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(i){return typeof i}:function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},m(o)}function b(o,i,d){return i=a(i),i in o?Object.defineProperty(o,i,{value:d,enumerable:!0,configurable:!0,writable:!0}):o[i]=d,o}function a(o){var i=g(o,"string");return m(i)==="symbol"?i:String(i)}function g(o,i){if(m(o)!=="object"||o===null)return o;var d=o[Symbol.toPrimitive];if(d!==void 0){var P=d.call(o,i||"default");if(m(P)!=="object")return P;throw new TypeError("@@toPrimitive must return a primitive value.")}return(i==="string"?String:Number)(o)}function S(o,i,d){var P={},E=function(v,I){return v in d?d[v](I[v]):I[v]};return i.forEach(function(u){if(u in o)if(u==="style"&&o.style!==void 0){var v=Object.keys(o.style);v.forEach(function(I){P[I]=o.style[I]})}else u!=="visible"&&(P[u]=E(u,o))}),P}function C(o,i){var d;return!o||f.Children.count(o)!==1?null:f.cloneElement(f.Children.only(o),(d={},b(d,"".concat(i.key),i.instance),b(d,"map",i.map),d))}},66724:function(Y,x,r){r.d(x,{t:function(){return m}});var f=r(95704),m=function(a){if(!a)return null;if("getLng"in a&&"getLat"in a)return a;var g=0,S=0;Array.isArray(a)?(g=a[0],S=a[1]):"lng"in a&&"lat"in a?(g=a.lng,S=a.lat):"longitude"in a&&"latitude"in a&&(g=a.longitude,S=a.latitude);var C=(0,f.rr)();return f.Ym&&C?new C.LngLat(g,S):null}},53610:function(Y,x,r){r.r(x),r.d(x,{default:function(){return P}});var f=r(54306),m=r.n(f),b=r(50959),a=r(73803),g=r(38342),S=r(34422),C=r(20916),o=function(u){return Math.floor(Math.random()*u)},i=function(){var u="0123456789abcdef".split(""),v=u.length;return"#".concat(u[o(v)]).concat(u[o(v)])+"".concat(u[o(v)]).concat(u[o(v)])+"".concat(u[o(v)]).concat(u[o(v)])},d=r(11527),P=function(){var E=(0,b.useState)(!0),u=m()(E,2),v=u[0],I=u[1],B=(0,b.useState)(15e3),A=m()(B,2),_=A[0],N=A[1],V=(0,b.useState)({longitude:120,latitude:30}),s=m()(V,2),M=s[0],U=s[1],y=(0,b.useState)({strokeColor:"#f00"}),j=m()(y,2),R=j[0],w=j[1],J=(0,b.useState)(!1),$=m()(J,2),Q=$[0],W=$[1],k=function(){U({longitude:120+Math.random()*20,latitude:30+Math.random()*10})},e=function(){N(15e3+Math.random()*15e3)},t=function(){I(function(p){return!p})},n=function(){W(function(p){return!p})},l=function(){w({strokeColor:i()})};return(0,d.jsxs)("div",{style:{height:500},children:[(0,d.jsx)(S.D,{center:M,children:(0,d.jsx)(C.C,{center:M,radius:_,visible:v,style:R,draggable:Q})}),(0,d.jsxs)(a.Z,{children:[(0,d.jsx)(g.ZP,{onClick:k,children:"Random Center"}),(0,d.jsx)(g.ZP,{onClick:e,children:"Change Radius"}),(0,d.jsx)(g.ZP,{onClick:t,children:"Toggle Visible"}),(0,d.jsx)(g.ZP,{onClick:n,children:"Toggle Draggable"}),(0,d.jsx)(g.ZP,{onClick:l,children:"Change Style"})]})]})}},41019:function(Y,x,r){r.r(x);var f=r(50959),m=r(38342),b=r(34422),a=r(20916),g=r(11527),S={longitude:120,latitude:30};x.default=function(){var C=(0,f.useRef)(null);return(0,g.jsxs)("div",{style:{height:500},children:[(0,g.jsx)(b.D,{center:S,children:(0,g.jsx)(a.C,{ref:C,center:S,radius:15e3})}),(0,g.jsx)(m.ZP,{onClick:function(){console.log(C.current)},children:"\u83B7\u53D6\u5B9E\u4F8B"})]})}},73803:function(Y,x,r){r.d(x,{u:function(){return I},Z:function(){return V}});var f=r(84875),m=r.n(f),b=r(79625),a=r(50959),g=r(36638);const S=()=>(0,g.Z)()&&window.document.documentElement;let C;const o=()=>{if(!S())return!1;if(C!==void 0)return C;const s=document.createElement("div");return s.style.display="flex",s.style.flexDirection="column",s.style.rowGap="1px",s.appendChild(document.createElement("div")),s.appendChild(document.createElement("div")),document.body.appendChild(s),C=s.scrollHeight===1,document.body.removeChild(s),C};var i=()=>{const[s,M]=a.useState(!1);return a.useEffect(()=>{M(o())},[]),s},d=r(25030),P=r(21482);function E(s){let{className:M,direction:U,index:y,marginDirection:j,children:R,split:w,wrap:J}=s;const{horizontalSize:$,verticalSize:Q,latestIndex:W,supportFlexGap:k}=a.useContext(I);let e={};return k||(U==="vertical"?y<W&&(e={marginBottom:$/(w?2:1)}):e=Object.assign(Object.assign({},y<W&&{[j]:$/(w?2:1)}),J&&{paddingBottom:Q})),R==null?null:a.createElement(a.Fragment,null,a.createElement("div",{className:M,style:e},R),y<W&&w&&a.createElement("span",{className:`${M}-split`,style:e},w))}var u=r(89389),v=function(s,M){var U={};for(var y in s)Object.prototype.hasOwnProperty.call(s,y)&&M.indexOf(y)<0&&(U[y]=s[y]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function")for(var j=0,y=Object.getOwnPropertySymbols(s);j<y.length;j++)M.indexOf(y[j])<0&&Object.prototype.propertyIsEnumerable.call(s,y[j])&&(U[y[j]]=s[y[j]]);return U};const I=a.createContext({latestIndex:0,horizontalSize:0,verticalSize:0,supportFlexGap:!1}),B={small:8,middle:16,large:24};function A(s){return typeof s=="string"?B[s]:s||0}const N=a.forwardRef((s,M)=>{const{getPrefixCls:U,space:y,direction:j}=a.useContext(d.E_),{size:R=(y==null?void 0:y.size)||"small",align:w,className:J,rootClassName:$,children:Q,direction:W="horizontal",prefixCls:k,split:e,style:t,wrap:n=!1}=s,l=v(s,["size","align","className","rootClassName","children","direction","prefixCls","split","style","wrap"]),c=i(),[p,Z]=a.useMemo(()=>(Array.isArray(R)?R:[R,R]).map(D=>A(D)),[R]),z=(0,b.Z)(Q,{keepEmpty:!0}),L=w===void 0&&W==="horizontal"?"center":w,K=U("space",k),[q,te]=(0,u.Z)(K),ee=m()(K,te,`${K}-${W}`,{[`${K}-rtl`]:j==="rtl",[`${K}-align-${L}`]:L},J,$),T=`${K}-item`,O=j==="rtl"?"marginLeft":"marginRight";let h=0;const G=z.map((D,X)=>{D!=null&&(h=X);const ne=D&&D.key||`${T}-${X}`;return a.createElement(E,{className:T,key:ne,direction:W,index:X,marginDirection:O,split:e,wrap:n},D)}),H=a.useMemo(()=>({horizontalSize:p,verticalSize:Z,latestIndex:h,supportFlexGap:c}),[p,Z,h,c]);if(z.length===0)return null;const F={};return n&&(F.flexWrap="wrap",c||(F.marginBottom=-Z)),c&&(F.columnGap=p,F.rowGap=Z),q(a.createElement("div",Object.assign({ref:M,className:ee,style:Object.assign(Object.assign({},F),t)},l),a.createElement(I.Provider,{value:H},G)))});N.Compact=P.ZP;var V=N}}]);