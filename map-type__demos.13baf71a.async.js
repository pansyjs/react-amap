(self.webpackChunk_pansy_workspace=self.webpackChunk_pansy_workspace||[]).push([[2621],{50986:function(n,c,t){"use strict";t.r(c);var r=t(73101),i=t(28969),e=t(63342);c.default=function(){return(0,e.jsx)("div",{style:{height:500},children:(0,e.jsx)(r.D,{children:(0,e.jsx)(i.T,{})})})}},28969:function(n,c,t){"use strict";t.d(c,{T:function(){return v}});var r=t(79685),i=t(72561),e=t(7825),a=t(27460),u=["defaultType","showTraffic","showRoad"],f=u.concat([]),o={visible:function(h,p){p&&(h?p.show():p.hide())}},s={},v=r.forwardRef(function(){var d=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},h=arguments.length>1?arguments[1]:void 0,p=(0,i.S)(),g=p.map,_=p.AMap,l=(0,r.useRef)(null),O=(0,e.s)(d,l,{setterMap:o,converterMap:s}),M=O.onInstanceCreated;(0,r.useEffect)(function(){g&&P().then(function(){l.current.addTo(g),M==null||M(l.current)})},[g]),(0,r.useImperativeHandle)(h,function(){return l.current},[l.current]);var P=function(){return new Promise(function(x){_.plugin(["AMap.MapType"],function(){var b=(0,a.T)(d,f,s);l.current=new _.MapType(b),x()})})};return null})},27460:function(n,c,t){"use strict";t.d(c,{T:function(){return r}});function r(i,e,a){var u={},f=function(s,v){return s in a?a[s](v[s]):v[s]};return e.forEach(function(o){o in i&&o!=="visible"&&(u[o]=f(o,i))}),u}},12342:function(n,c,t){var r=t(20006);function i(e,a){if(e==null)return{};var u=r(e,a),f,o;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)f=s[o],!(a.indexOf(f)>=0)&&Object.prototype.propertyIsEnumerable.call(e,f)&&(u[f]=e[f])}return u}n.exports=i,n.exports.__esModule=!0,n.exports.default=n.exports},20006:function(n){function c(t,r){if(t==null)return{};var i={},e=Object.keys(t),a,u;for(u=0;u<e.length;u++)a=e[u],!(r.indexOf(a)>=0)&&(i[a]=t[a]);return i}n.exports=c,n.exports.__esModule=!0,n.exports.default=n.exports}}]);
