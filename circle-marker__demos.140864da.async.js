(self.webpackChunk_pansy_workspace=self.webpackChunk_pansy_workspace||[]).push([[4851],{98850:function(s,v,e){"use strict";e.r(v),e.d(v,{default:function(){return P}});var p=e(73101),r=e(79685),n=e(72561),u=e(7825),l=e(39696),t=e(69841),a=["center","radius","draggable","extData","visible","style"],o=a.concat(["zIndex","bubble"]),m={visible:function(h,d){d&&(h?d.show():d.hide())},style:function(h,d){d&&d.setOptions(h)}},g={center:t.t},c=r.forwardRef(function(){var _=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},h=arguments.length>1?arguments[1]:void 0,d=(0,n.S)(),y=d.map,j=d.AMap,b=(0,r.useRef)(null),O=(0,u.s)(_,b,{setterMap:m,converterMap:g}),E=O.loaded,M=O.onInstanceCreated;(0,r.useEffect)(function(){y&&C().then(function(){M==null||M(b.current)})},[y]),(0,r.useImperativeHandle)(h,function(){return b.current},[b.current,E]);var C=function(){var x=(0,l.T)(_,o,g);return x.map=y,b.current=new j.CircleMarker(x),Promise.resolve()};return null}),i=e(63342),f={strokeColor:"#fff",strokeWeight:2,strokeOpacity:.5,fillColor:"rgba(0,0,255,1)",fillOpacity:.5},P=function(){return(0,i.jsx)("div",{style:{height:500},children:(0,i.jsxs)(p.D,{zoom:4,center:[116.400274,39.905812],children:[(0,i.jsx)(c,{center:[116.407394,39.904211],radius:10+Math.random()*10,style:f,events:{click:function(){console.log("click")}}}),(0,i.jsx)(c,{center:[113.26641,23.132324],radius:10+Math.random()*10,style:f}),(0,i.jsx)(c,{center:[115.26641,27.132324],radius:10+Math.random()*10,style:f})]})})}},39696:function(s,v,e){"use strict";e.d(v,{T:function(){return u},p:function(){return l}});var p=e(52510),r=e.n(p),n=e(79685);function u(t,a,o){var m={},g=function(i,f){return i in o?o[i](f[i]):f[i]};return a.forEach(function(c){if(c in t)if(c==="style"&&t.style!==void 0){var i=Object.keys(t.style);i.forEach(function(f){m[f]=t.style[f]})}else c!=="visible"&&(m[c]=g(c,t))}),m}function l(t,a){var o;return!t||n.Children.count(t)!==1?null:n.cloneElement(n.Children.only(t),(o={},r()(o,"".concat(a.key),a.instance),r()(o,"map",a.map),o))}},12342:function(s,v,e){var p=e(20006);function r(n,u){if(n==null)return{};var l=p(n,u),t,a;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(a=0;a<o.length;a++)t=o[a],!(u.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(n,t)&&(l[t]=n[t])}return l}s.exports=r,s.exports.__esModule=!0,s.exports.default=s.exports},20006:function(s){function v(e,p){if(e==null)return{};var r={},n=Object.keys(e),u,l;for(l=0;l<n.length;l++)u=n[l],!(p.indexOf(u)>=0)&&(r[u]=e[u]);return r}s.exports=v,s.exports.__esModule=!0,s.exports.default=s.exports}}]);
