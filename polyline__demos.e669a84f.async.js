(self.webpackChunk_pansy_workspace=self.webpackChunk_pansy_workspace||[]).push([[4356],{50107:function(s,v,e){"use strict";e.r(v);var c=e(54306),i=e.n(c),r=e(79685),l=e(73101),_=e(13023),t=e(63342),o=function(){return{longitude:60+Math.random()*50,latitude:10+Math.random()*40}};v.default=function(){var u=(0,r.useState)(!0),p=i()(u,2),g=p[0],d=p[1],n=(0,r.useState)(!0),a=i()(n,2),f=a[0],h=a[1],M=(0,r.useState)(Array(3).fill(!0).map(o)),m=i()(M,2),E=m[0],O=m[1],b=function(){d(function(D){return!D})},y=function(){O(Array(3).fill(!0).map(o))},j=function(){h(function(D){return!D})};return(0,t.jsxs)("div",{style:{height:500},children:[(0,t.jsx)(l.D,{zoom:3,children:(0,t.jsx)(_.a,{path:E,draggable:f,visible:g})}),(0,t.jsx)("button",{onClick:b,children:"Toggle Visible"}),(0,t.jsx)("button",{onClick:j,children:"Toggle Draggable"}),(0,t.jsx)("button",{onClick:y,children:"Change Path"})]})}},13023:function(s,v,e){"use strict";e.d(v,{a:function(){return d}});var c=e(79685),i=e(72561),r=e(7825),l=e(39696),_=e(69841);function t(n){return n.length?"getLng"in n[0]?n:n.map(function(a){return(0,_.t)(a)}):n}var o=["path","extData","draggable","visible","style"],u=o.concat(["zIndex","bubble","showDir"]),p={visible:function(a,f){f&&(a?f.show():f.hide())},style:function(a,f){f&&f.setOptions(a)}},g={path:function(a){return t(a)}},d=c.forwardRef(function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0,f=(0,i.S)(),h=f.map,M=f.AMap,m=(0,c.useRef)(null),E=(0,r.s)(n,m,{setterMap:p,converterMap:g}),O=E.loaded,b=E.onInstanceCreated;(0,c.useEffect)(function(){h&&y().then(function(){b==null||b(m.current)})},[h]),(0,c.useImperativeHandle)(a,function(){return m.current},[O]);var y=function(){var P=(0,l.T)(n,u,g);return P.map=h,m.current=new M.Polyline(P),Promise.resolve()};return O?(0,l.p)(n.children,{key:"poly",instance:m.current,map:h}):null})},39696:function(s,v,e){"use strict";e.d(v,{T:function(){return l},p:function(){return _}});var c=e(52510),i=e.n(c),r=e(79685);function l(t,o,u){var p={},g=function(n,a){return n in u?u[n](a[n]):a[n]};return o.forEach(function(d){if(d in t)if(d==="style"&&t.style!==void 0){var n=Object.keys(t.style);n.forEach(function(a){p[a]=t.style[a]})}else d!=="visible"&&(p[d]=g(d,t))}),p}function _(t,o){var u;return!t||r.Children.count(t)!==1?null:r.cloneElement(r.Children.only(t),(u={},i()(u,"".concat(o.key),o.instance),i()(u,"map",o.map),u))}},12342:function(s,v,e){var c=e(20006);function i(r,l){if(r==null)return{};var _=c(r,l),t,o;if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(r);for(o=0;o<u.length;o++)t=u[o],!(l.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(r,t)&&(_[t]=r[t])}return _}s.exports=i,s.exports.__esModule=!0,s.exports.default=s.exports},20006:function(s){function v(e,c){if(e==null)return{};var i={},r=Object.keys(e),l,_;for(_=0;_<r.length;_++)l=r[_],!(c.indexOf(l)>=0)&&(i[l]=e[l]);return i}s.exports=v,s.exports.__esModule=!0,s.exports.default=s.exports}}]);
