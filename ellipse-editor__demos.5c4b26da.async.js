(self.webpackChunk_pansy_workspace=self.webpackChunk_pansy_workspace||[]).push([[7484],{52783:function(c,g,e){"use strict";e.r(g),e.d(g,{default:function(){return s}});var f=e(7863),v=e.n(f),n=e(79685),u=e(15699),l=e(48307),r=e(38781),o=e(11930),i={active:function(d,p){p&&(d?p.open():p.close())}},E={},_=n.forwardRef(function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},d=arguments.length>1?arguments[1]:void 0,p=(0,o.S)(),m=p.map,M=p.AMap,h=(0,n.useRef)(null),P=(0,r.s)(t,h,{setterMap:i,converterMap:E}),y=P.onInstanceCreated;(0,n.useEffect)(function(){t.map&&t.ellipse&&x().then(function(){y==null||y(h.current)})},[t.map,t.ellipse]),(0,n.useImperativeHandle)(d,function(){return h.current},[h.current]);var x=function(){return new Promise(function(O){m.plugin(["AMap.EllipseEditor"],function(){h.current=new M.EllipseEditor(t.map,t.ellipse),O()})})};return null}),a=e(63342),s=function(){var t=(0,n.useState)(!0),d=v()(t,2),p=d[0],m=d[1],M=(0,n.useState)({longitude:120,latitude:30}),h=v()(M,1),P=h[0],y=function(){m(function(b){return!b})};return(0,a.jsxs)("div",{style:{height:500},children:[(0,a.jsx)(u.D,{center:P,zoom:4,children:(0,a.jsx)(l.P,{center:P,radius:[1e6,2e5],children:(0,a.jsx)(_,{active:p})})}),(0,a.jsx)("button",{onClick:function(){y()},children:"Random Active"})]})}},48307:function(c,g,e){"use strict";e.d(g,{P:function(){return _}});var f=e(79685),v=e(11930),n=e(38781),u=e(32812),l=e(44305),r=["center","radius","draggable","extData","visible","style"],o=r.concat(["zIndex","bubble"]),i={visible:function(s,t){t&&(s?t.show():t.hide())},style:function(s,t){t&&t.setOptions(s)}},E={center:l.t},_=f.forwardRef(function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},s=arguments.length>1?arguments[1]:void 0,t=(0,v.S)(),d=t.map,p=t.AMap,m=(0,f.useRef)(null),M=(0,n.s)(a,m,{setterMap:i,converterMap:E}),h=M.loaded,P=M.onInstanceCreated;(0,f.useEffect)(function(){d&&y().then(function(){P==null||P(m.current)})},[d]),(0,f.useImperativeHandle)(s,function(){return m.current},[m.current]);var y=function(){var b=(0,u.T)(a,o,E);return b.map=d,m.current=new p.Ellipse(b),Promise.resolve()};return h?(0,u.p)(a.children,{key:"ellipse",instance:m.current,map:d}):null})},32812:function(c,g,e){"use strict";e.d(g,{T:function(){return u},p:function(){return l}});var f=e(39620),v=e.n(f),n=e(79685);function u(r,o,i){var E={},_=function(s,t){return s in i?i[s](t[s]):t[s]};return o.forEach(function(a){if(a in r)if(a==="style"&&r.style!==void 0){var s=Object.keys(r.style);s.forEach(function(t){E[t]=r.style[t]})}else a!=="visible"&&(E[a]=_(a,r))}),E}function l(r,o){var i;return!r||n.Children.count(r)!==1?null:n.cloneElement(n.Children.only(r),(i={},v()(i,"".concat(o.key),o.instance),v()(i,"map",o.map),i))}},38425:function(c,g,e){var f=e(68277);function v(n,u){if(n==null)return{};var l=f(n,u),r,o;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(o=0;o<i.length;o++)r=i[o],!(u.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(n,r)&&(l[r]=n[r])}return l}c.exports=v,c.exports.__esModule=!0,c.exports.default=c.exports},68277:function(c){function g(e,f){if(e==null)return{};var v={},n=Object.keys(e),u,l;for(l=0;l<n.length;l++)u=n[l],!(f.indexOf(u)>=0)&&(v[u]=e[u]);return v}c.exports=g,c.exports.__esModule=!0,c.exports.default=c.exports}}]);
