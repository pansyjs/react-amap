"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7894],{625:function(T,P,t){t.d(P,{S:function(){return f},X:function(){return g}});var u=t(50959),g=(0,u.createContext)({}),f=function(){return(0,u.useContext)(g)}},34422:function(T,P,t){t.d(P,{D:function(){return te}});var u=t(50959),g=t(35354),f=t(80667),i=t(66724),E=["layers","zoom","zooms","center","labelzIndex","lang","mapStyle","features","cursor","pitch","mask","defaultLayer"],v=["animateEnable","doubleClickZoom","dragEnable","isHotspot","jogEnable","keyboardEnable","pitchEnable","resizeEnable","rotateEnable","scrollWheel","touchZoom","zoomEnable"],y=["view","showIndoorMap","indoorMap","expandZoomRange","touchZoomCenter","showBuildingBlock","viewMode","buildingAnimation","skyColor","WebGLParams"],a={width:"100%",height:"100%",position:"relative"},o={width:"100%",height:"100%"},l=E.concat(v,y),m={zoom:function(n,r){r&&r.setZoom(n)},cursor:function(n,r){r&&r.setDefaultCursor(n)},labelzIndex:function(n,r){r&&r.setLabelzIndex(n)}},d={center:i.t,mapStyle:function(n){return n.indexOf("amap://styles")===0?n:"amap://styles/".concat(n)}},p=t(95704),c=t(11527),h=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=(0,u.useRef)(),s=(0,u.useRef)(),C=(0,f.s)(n,s,{setterMap:m,converterMap:d}),I=C.loaded,N=C.prevProps,B=C.onInstanceCreated;(0,u.useEffect)(function(){U().then(function(){var K;(K=n.onMapCreate)===null||K===void 0||K.call(n,s.current),B==null||B(s.current)})},[]),(0,u.useEffect)(function(){I&&k(N,n)},[n]);var U=function(){var S=V(),D=(0,p.rr)();return s.current=new D.Map(r.current,S),Promise.resolve()},V=function(){var S={};return l.forEach(function(D){D in n&&(S[D]=X(D,n))}),S},X=function(S,D){return S in d?d[S](D[S]):D[S]},k=function(S,D){var w={},G=!1,q=!1;v.forEach(function($){$ in D&&(q=!0,J($,S,D)&&(G=!0,w[$]=D[$]))}),G&&s.current.setStatus(w)},J=function(S,D,w){return D[S]!==w[S]};return(0,c.jsxs)("div",{style:a,children:[(0,c.jsx)("div",{ref:r,style:o,children:I?null:n.loading}),(0,c.jsx)("div",{children:I?n.children:null})]})},M=t(625);function O(e){"@babel/helpers - typeof";return O=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},O(e)}var x=["mapKey","version","plugins","AMapUI","Loca","loading","onComplete","onMapCreate"];function W(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);n&&(s=s.filter(function(C){return Object.getOwnPropertyDescriptor(e,C).enumerable})),r.push.apply(r,s)}return r}function _(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?W(Object(r),!0).forEach(function(s){R(e,s,r[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):W(Object(r)).forEach(function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(r,s))})}return e}function R(e,n,r){return n=z(n),n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function z(e){var n=j(e,"string");return O(n)==="symbol"?n:String(n)}function j(e,n){if(O(e)!=="object"||e===null)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var s=r.call(e,n||"default");if(O(s)!=="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}function Z(e,n){return Y(e)||F(e,n)||b(e,n)||L()}function L(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function b(e,n){if(e){if(typeof e=="string")return A(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return A(e,n)}}function A(e,n){(n==null||n>e.length)&&(n=e.length);for(var r=0,s=new Array(n);r<n;r++)s[r]=e[r];return s}function F(e,n){var r=e==null?null:typeof Symbol!="undefined"&&e[Symbol.iterator]||e["@@iterator"];if(r!=null){var s,C,I,N,B=[],U=!0,V=!1;try{if(I=(r=r.call(e)).next,n===0){if(Object(r)!==r)return;U=!1}else for(;!(U=(s=I.call(r)).done)&&(B.push(s.value),B.length!==n);U=!0);}catch(X){V=!0,C=X}finally{try{if(!U&&r.return!=null&&(N=r.return(),Object(N)!==N))return}finally{if(V)throw C}}return B}}function Y(e){if(Array.isArray(e))return e}function H(e,n){if(e==null)return{};var r=ee(e,n),s,C;if(Object.getOwnPropertySymbols){var I=Object.getOwnPropertySymbols(e);for(C=0;C<I.length;C++)s=I[C],!(n.indexOf(s)>=0)&&Object.prototype.propertyIsEnumerable.call(e,s)&&(r[s]=e[s])}return r}function ee(e,n){if(e==null)return{};var r={},s=Object.keys(e),C,I;for(I=0;I<s.length;I++)C=s[I],!(n.indexOf(C)>=0)&&(r[C]=e[C]);return r}var te=u.forwardRef(function(e,n){var r=e.mapKey,s=e.version,C=e.plugins,I=e.AMapUI,N=e.Loca,B=e.loading,U=e.onComplete,V=e.onMapCreate,X=H(e,x),k=(0,u.useState)(),J=Z(k,2),K=J[0],S=J[1],D=(0,u.useState)(),w=Z(D,2),G=w[0],q=w[1];return(0,u.useImperativeHandle)(n,function(){return G},[G]),(0,c.jsx)(M.X.Provider,{value:{AMap:K,map:G},children:(0,c.jsx)(g._,{mapKey:r,version:s,plugins:C,Loca:N,AMapUI:I,loading:B,onComplete:function(Q){U==null||U(Q),S(Q)},children:(0,c.jsx)(h,_(_({loading:B},X),{},{onMapCreate:function(Q){q(Q)}}))})})})},20394:function(T,P,t){t.d(P,{$:function(){return v}});var u=t(50959),g=t(625),f=t(80667),i={active:function(a,o){o&&(a?o.open():o.close())}},E={},v=u.forwardRef(function(){var y=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0,o=(0,g.S)(),l=o.map,m=o.AMap,d=(0,u.useRef)(null),p=(0,f.s)(y,d,{setterMap:i,converterMap:E}),c=p.onInstanceCreated;(0,u.useEffect)(function(){l&&h().then(function(){c==null||c(d.current)})},[l,y.poly]),(0,u.useImperativeHandle)(a,function(){return d.current},[d.current]);var h=function(){return new Promise(function(O){m.plugin(["AMap.PolygonEditor"],function(){d.current=new m.PolygonEditor(l,y.poly),O()})})};return null})},92265:function(T,P,t){t.d(P,{m:function(){return m}});var u=t(50959),g=t(625),f=t(80667),i=t(76746),E=t(66724);function v(d){var p=this;return d.length?d.map(function(c,h){return Array.isArray(c[h])?p.buildPathValue(c):(0,E.t)(c)}):d}var y=["center","radius","draggable","extData","visible","style"],a=y.concat(["zIndex","bubble"]),o={visible:function(p,c){c&&(p?c.show():c.hide())},style:function(p,c){c&&c.setOptions(p)}},l={path:function(p){return v(p)}},m=u.forwardRef(function(){var d=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},p=arguments.length>1?arguments[1]:void 0,c=(0,g.S)(),h=c.map,M=c.AMap,O=(0,u.useRef)(null),x=(0,f.s)(d,O,{setterMap:o,converterMap:l}),W=x.loaded,_=x.onInstanceCreated;(0,u.useEffect)(function(){h&&R().then(function(){_==null||_(O.current)})},[h]),(0,u.useImperativeHandle)(p,function(){return O.current},[W]);var R=function(){var j=(0,i.T)(d,a,l);return j.map=h,O.current=new M.Polygon(j),Promise.resolve()};return W?(0,i.p)(d.children,{key:"poly",instance:O.current,map:h}):null})},76746:function(T,P,t){t.d(P,{T:function(){return v},p:function(){return y}});var u=t(50959);function g(a){"@babel/helpers - typeof";return g=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(o){return typeof o}:function(o){return o&&typeof Symbol=="function"&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},g(a)}function f(a,o,l){return o=i(o),o in a?Object.defineProperty(a,o,{value:l,enumerable:!0,configurable:!0,writable:!0}):a[o]=l,a}function i(a){var o=E(a,"string");return g(o)==="symbol"?o:String(o)}function E(a,o){if(g(a)!=="object"||a===null)return a;var l=a[Symbol.toPrimitive];if(l!==void 0){var m=l.call(a,o||"default");if(g(m)!=="object")return m;throw new TypeError("@@toPrimitive must return a primitive value.")}return(o==="string"?String:Number)(a)}function v(a,o,l){var m={},d=function(c,h){return c in l?l[c](h[c]):h[c]};return o.forEach(function(p){if(p in a)if(p==="style"&&a.style!==void 0){var c=Object.keys(a.style);c.forEach(function(h){m[h]=a.style[h]})}else p!=="visible"&&(m[p]=d(p,a))}),m}function y(a,o){var l;return!a||u.Children.count(a)!==1?null:u.cloneElement(u.Children.only(a),(l={},f(l,"".concat(o.key),o.instance),f(l,"map",o.map),l))}},66724:function(T,P,t){t.d(P,{t:function(){return g}});var u=t(95704),g=function(i){if(!i)return null;if("getLng"in i&&"getLat"in i)return i;var E=0,v=0;Array.isArray(i)?(E=i[0],v=i[1]):"lng"in i&&"lat"in i?(E=i.lng,v=i.lat):"longitude"in i&&"latitude"in i&&(E=i.longitude,v=i.latitude);var y=(0,u.rr)();return u.Ym&&y?new y.LngLat(E,v):null}},52917:function(T,P,t){t.r(P);var u=t(54306),g=t.n(u),f=t(50959),i=t(25552),E=t(34422),v=t(92265),y=t(20394),a=t(11527);P.default=function(){var o=(0,f.useState)(!0),l=g()(o,2),m=l[0],d=l[1],p=(0,f.useState)([[116.403322,39.920255],[116.410703,39.897555],[116.402292,39.892353],[116.389846,39.891365]]),c=g()(p,1),h=c[0],M=function(){d(function(x){return!x})};return(0,a.jsxs)("div",{style:{height:500},children:[(0,a.jsx)(E.D,{zoom:14,center:[116.400274,39.905812],children:(0,a.jsx)(v.m,{path:h,children:(0,a.jsx)(y.$,{active:m})})}),(0,a.jsx)(i.ZP,{onClick:function(){M()},children:"Random Active"})]})}},44445:function(T,P,t){t.r(P);var u=t(50959),g=t(34422),f=t(20394),i=t(92265),E=t(11527);P.default=function(){var v=(0,u.useRef)(),y=(0,u.useRef)(),a=(0,u.useRef)(),o=function(){v.current&&y.current&&a.current&&(v.current.addAdsorbPolygons([y.current,a.current]),v.current.setTarget(y.current),v.current.open())};return(0,E.jsx)("div",{style:{height:500},children:(0,E.jsxs)(g.D,{center:[116.475334,39.997534],zoom:16,children:[(0,E.jsx)(f.$,{events:{created:function(m){v.current=m,o()}}}),(0,E.jsx)(i.m,{path:[[116.474595,40.001321],[116.473526,39.999865],[116.476284,40.000917]],events:{created:function(m){y.current=m,o()},dblclick:function(){v.current.setTarget(y.current),v.current.open()}}}),(0,E.jsx)(i.m,{path:[[116.475334,39.997534],[116.476627,39.998315],[116.478603,39.99879],[116.478529,40.000296],[116.475082,40.000151],[116.473421,39.998717]],events:{created:function(m){a.current=m,o()},dblclick:function(){v.current.setTarget(a.current),v.current.open()}}})]})})}},83985:function(T,P,t){t.r(P),t.d(P,{default:function(){return c}});var u=t(54306),g=t.n(u),f=t(50959),i=t(34432),E=t(34422),v=t(20394),y=t(80667),a=t(625),o={},l={},m=f.forwardRef(function(){var h=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},M=arguments.length>1?arguments[1]:void 0,O=(0,f.useRef)(null),x=(0,a.S)(),W=x.map,_=x.AMap,R=(0,y.s)(h,O,{setterMap:o,converterMap:l}),z=R.loaded,j=R.onInstanceCreated;(0,f.useEffect)(function(){W&&Z().then(function(){j==null||j(O.current)})},[W]),(0,f.useImperativeHandle)(M,function(){return O.current},[z]);var Z=function(){return new Promise(function(A){O.current=new _.OverlayGroup([]),A()})},L=function(A){return A?f.Children.map(A,function(F){return f.cloneElement(F,{events:{created:function(H){O.current&&O.current.addOverlay(H)}}})}):null};return z?L(h.children):null}),d=t(92265),p=t(11527),c=function(){var h=(0,f.useRef)(),M=(0,f.useRef)([]),O=(0,f.useState)([[[116.474595,40.001321],[116.473526,39.999865],[116.476284,40.000917]],[[116.475334,39.997534],[116.476627,39.998315],[116.478603,39.99879],[116.478529,40.000296],[116.475082,40.000151],[116.473421,39.998717]]]),x=g()(O,1),W=x[0],_=(0,f.useRef)(),R=(0,f.useRef)(),z=function(b){_.current&&(_.current.addAdsorbPolygons(b),_.current.setTarget(b[0]),_.current.open(),M.current=b[0].getPath(),R.current.on("dblclick",j))},j=function(b){var A=b.target;M.current=A.getPath(),_.current.setTarget(A),_.current.open()},Z=function(b){R.current=b,setTimeout(function(){var A=R.current.getOverlays();A.length&&z(A)},0)};return(0,p.jsx)("div",{style:{height:500},children:(0,p.jsxs)(E.D,{center:[116.475334,39.997534],zoom:16,events:{created:function(b){h.current=b}},children:[(0,p.jsx)(v.$,{events:{created:function(b){_.current=b},removenode:function(b){var A=b.target,F=A.getPath();if(F.length===0){var Y=R.current.getOverlays();if(Y.length===1){i.ZP.warning("\u533A\u57DF\u5FC5\u987B\u5269\u4F59\u4E00\u4E2A");var H=new AMap.Polygon({map:h.current,path:M.current});R.current.removeOverlay(A),R.current.addOverlay(H),R.current.on("dblclick",j)}R.current.removeOverlay(A);return}M.current=F}}}),(0,p.jsx)(m,{events:{created:Z},children:W.map(function(L,b){return(0,p.jsx)(d.m,{path:L},b)})})]})})}},50192:function(T,P,t){t.d(P,{Cn:function(){return l},u6:function(){return v}});var u=t(50959),g=t(59381),f=t(45351);const i=100,v=i*10,y={Modal:i,Drawer:i,Popover:i,Popconfirm:i,Tooltip:i,Tour:i},a={SelectLike:50,Dropdown:50,DatePicker:50,Menu:50,ImagePreview:1};function o(m){return m in y}function l(m,d){const[,p]=(0,g.Z)(),c=u.useContext(f.Z),h=o(m);if(d!==void 0)return[d,d];let M=c!=null?c:0;return h?(M+=(c?0:p.zIndexPopupBase)+y[m],M=Math.min(M,p.zIndexPopupBase+v)):M+=a[m],[c===void 0?d:M,M]}},30844:function(T,P,t){t.d(P,{G8:function(){return y},ln:function(){return a}});var u=t(50959),g=t(12868);function f(){}let i=null;function E(){i=null,rcResetWarned()}let v=null;const y=u.createContext({}),a=()=>{const l=()=>{};return l.deprecated=f,l};var o=null},45351:function(T,P,t){var u=t(50959);const g=u.createContext(void 0);P.Z=g}}]);
