"use strict";(self.webpackChunk_pansy_workspace=self.webpackChunk_pansy_workspace||[]).push([[3077],{28607:function(p,_,n){n.r(_);var a=n(7863),o=n.n(a),d=n(79685),e=n(52985),t=n(15699),u=n(75298),r=n(63342);_.default=function(){var s=(0,d.useState)(!0),i=o()(s,2),P=i[0],m=i[1],v=function(){m(function(c){return!c})};return(0,r.jsxs)("div",{style:{height:500},children:[(0,r.jsx)(t.D,{children:(0,r.jsx)(u.C,{visible:P,offset:[20,20],position:"RB"})}),(0,r.jsx)(e.ZP,{onClick:v,children:"\u663E\u793A/\u9690\u85CF"})]})}},384:function(p,_,n){n.r(_);var a=n(7863),o=n.n(a),d=n(79685),e=n(52985),t=n(15699),u=n(75298),r=n(63342);_.default=function(){var s=(0,d.useState)(!0),i=o()(s,2),P=i[0],m=i[1],v=function(){m(function(E){return!E})},l={created:function(E){console.log("\u6BD4\u4F8B\u5C3A\u521B\u5EFA\u4E8B\u4EF6"),console.log(E)},show:function(){console.log("\u6BD4\u4F8B\u5C3A\u663E\u793A")},hide:function(){console.log("\u6BD4\u4F8B\u5C3A\u9690\u85CF")}};return(0,r.jsxs)("div",{style:{height:500},children:[(0,r.jsx)(t.D,{children:(0,r.jsx)(u.C,{visible:P,events:l,position:"RB"})}),(0,r.jsx)(e.ZP,{onClick:v,children:"\u663E\u793A/\u9690\u85CF"})]})}},75298:function(p,_,n){n.d(_,{C:function(){return P}});var a=n(79685),o=n(11930),d=n(38781),e=n(52015),t=n(11559),u=["visible"],r=u.concat(["position","offset"]),s={visible:function(v,l){l&&(v?l.show():l.hide())}},i={offset:t.H},P=a.forwardRef(function(){var m=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},v=arguments.length>1?arguments[1]:void 0,l=(0,o.S)(),c=l.map,E=l.AMap,f=(0,a.useRef)(null),M=(0,d.s)(m,f,{setterMap:s,converterMap:i}),h=M.onInstanceCreated;(0,a.useEffect)(function(){c&&C().then(function(){f.current.addTo(c),h==null||h(f.current)})},[c]),(0,a.useImperativeHandle)(v,function(){return f.current},[f.current]);var C=function(){return new Promise(function(D){E.plugin(["AMap.Scale"],function(){var A=(0,e.T)(m,r,i);f.current=new E.Scale(A),D()})})};return null})},52015:function(p,_,n){n.d(_,{T:function(){return a}});function a(o,d,e){var t={},u=function(s,i){return s in e?e[s](i[s]):i[s]};return d.forEach(function(r){r in o&&r!=="visible"&&(t[r]=u(r,o))}),t}},11559:function(p,_,n){n.d(_,{H:function(){return o}});var a=n(57077),o=function(e){if(!e)return null;if("getX"in e&&"getY"in e)return e;var t=0,u=0;Array.isArray(e)?(t=e[0],u=e[1]):"x"in e&&"y"in e&&(t=e.x,u=e.y);var r=(0,a.rr)();return a.Ym&&r?new r.Pixel(t,u):null}}}]);
