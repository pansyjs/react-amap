(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{"5Zva":function(e,t,n){"use strict";var a=n("ahKI"),r=n.n(a);n("dl4A");function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o.apply(this,arguments)}t["a"]=function(e){return r.a.createElement("div",o({className:"__dumi-default-alert"},e))}},c3e3:function(e,t,n){(function(e,a){a(t,n("ahKI"))})(0,(function(e,t){"use strict";function n(e){if(e&&e.__esModule)return e;var t=Object.create(null);return e&&Object.keys(e).forEach((function(n){if("default"!==n){var a=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(t,n,a.get?a:{enumerable:!0,get:function(){return e[n]}})}})),t["default"]=e,Object.freeze(t)}var a=n(t);function r(e,t){return r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},r(e,t)}function o(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,r(e,t)}var c=function(e,t){return void 0===e&&(e=[]),void 0===t&&(t=[]),e.length!==t.length||e.some((function(e,n){return!Object.is(e,t[n])}))},i={error:null},l=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return t=e.call.apply(e,[this].concat(a))||this,t.state=i,t.resetErrorBoundary=function(){for(var e,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];null==t.props.onReset||(e=t.props).onReset.apply(e,a),t.reset()},t}o(t,e),t.getDerivedStateFromError=function(e){return{error:e}};var n=t.prototype;return n.reset=function(){this.setState(i)},n.componentDidCatch=function(e,t){var n,a;null==(n=(a=this.props).onError)||n.call(a,e,t)},n.componentDidUpdate=function(e,t){var n,a,r=this.state.error,o=this.props.resetKeys;null!==r&&null!==t.error&&c(e.resetKeys,o)&&(null==(n=(a=this.props).onResetKeysChange)||n.call(a,e.resetKeys,o),this.reset())},n.render=function(){var e=this.state.error,t=this.props,n=t.fallbackRender,r=t.FallbackComponent,o=t.fallback;if(null!==e){var c={error:e,resetErrorBoundary:this.resetErrorBoundary};if(a.isValidElement(o))return o;if("function"===typeof n)return n(c);if(r)return a.createElement(r,c);throw new Error("react-error-boundary requires either a fallback, fallbackRender, or FallbackComponent prop")}return this.props.children},t}(a.Component);function u(e,t){var n=function(n){return a.createElement(l,t,a.createElement(e,n))},r=e.displayName||e.name||"Unknown";return n.displayName="withErrorBoundary("+r+")",n}function s(e){var t=a.useState(null),n=t[0],r=t[1];if(null!=e)throw e;if(null!=n)throw n;return r}e.ErrorBoundary=l,e.useErrorHandler=s,e.withErrorBoundary=u,Object.defineProperty(e,"__esModule",{value:!0})}))},dl4A:function(e,t,n){},sPhZ:function(e,t,n){"use strict";n.r(t);var a=n("ahKI"),r=n.n(a),o=n("Zl2U"),c=n("Ys0w"),i=n("nykw"),l=n("6kRW"),u=n("GEFz"),s=n("9rdf"),d=n("BRxd"),f=n.n(d),b=n("u15B"),v=n("9VtK"),m=n("cBB+"),p=n("ytit"),h=n("12ZA"),y=n("Fi7u");function j(e){var t=Object(a["useRef"])(),n=Object(a["useRef"])(!1);function r(){for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];n.current||(h["a"].cancel(t.current),t.current=Object(h["a"])((function(){e.apply(void 0,r)})))}return Object(a["useEffect"])((function(){return n.current=!1,function(){n.current=!0,h["a"].cancel(t.current)}}),[]),r}function O(e){var t=Object(a["useRef"])([]),n=Object(a["useState"])({}),r=Object(i["a"])(n,2),o=r[1],c=Object(a["useRef"])("function"===typeof e?e():e),l=j((function(){var e=c.current;t.current.forEach((function(t){e=t(e)})),t.current=[],c.current=e,o({})}));function u(e){t.current.push(e),l()}return[c.current,u]}var E=n("JWIC");function g(e,t){var n,r=e.prefixCls,o=e.id,i=e.active,l=e.tab,u=l.key,s=l.tab,d=l.disabled,b=l.closeIcon,v=e.closable,m=e.renderWrapper,p=e.removeAriaLabel,h=e.editable,y=e.onClick,j=e.onRemove,O=e.onFocus,g=e.style,k="".concat(r,"-tab");a["useEffect"]((function(){return j}),[]);var w=h&&!1!==v&&!d;function C(e){d||y(e)}function x(e){e.preventDefault(),e.stopPropagation(),h.onEdit("remove",{key:u,event:e})}var _=a["createElement"]("div",{key:u,ref:t,className:f()(k,(n={},Object(c["a"])(n,"".concat(k,"-with-remove"),w),Object(c["a"])(n,"".concat(k,"-active"),i),Object(c["a"])(n,"".concat(k,"-disabled"),d),n)),style:g,onClick:C},a["createElement"]("div",{role:"tab","aria-selected":i,id:o&&"".concat(o,"-tab-").concat(u),className:"".concat(k,"-btn"),"aria-controls":o&&"".concat(o,"-panel-").concat(u),"aria-disabled":d,tabIndex:d?null:0,onClick:function(e){e.stopPropagation(),C(e)},onKeyDown:function(e){[E["a"].SPACE,E["a"].ENTER].includes(e.which)&&(e.preventDefault(),C(e))},onFocus:O},s),w&&a["createElement"]("button",{type:"button","aria-label":p||"remove",tabIndex:0,className:"".concat(k,"-remove"),onClick:function(e){e.stopPropagation(),x(e)}},b||h.removeIcon||"\xd7"));return m?m(_):_}var k=a["forwardRef"](g),w={width:0,height:0,left:0,top:0};function C(e,t,n){return Object(a["useMemo"])((function(){for(var n,a=new Map,r=t.get(null===(n=e[0])||void 0===n?void 0:n.key)||w,o=r.left+r.width,c=0;c<e.length;c+=1){var i,l=e[c].key,u=t.get(l);if(!u)u=t.get(null===(i=e[c-1])||void 0===i?void 0:i.key)||w;var d=a.get(l)||Object(s["a"])({},u);d.right=o-d.left-d.width,a.set(l,d)}return a}),[e.map((function(e){return e.key})).join("_"),t,n])}var x={width:0,height:0,left:0,top:0,right:0};function _(e,t,n,r,o){var c,i,l,u=o.tabs,s=o.tabPosition,d=o.rtl;["top","bottom"].includes(s)?(c="width",i=d?"right":"left",l=Math.abs(t.left)):(c="height",i="top",l=-t.top);var f=t[c],b=n[c],v=r[c],m=f;return b+v>f&&b<f&&(m=f-v),Object(a["useMemo"])((function(){if(!u.length)return[0,0];for(var t=u.length,n=t,a=0;a<t;a+=1){var r=e.get(u[a].key)||x;if(r[i]+r[c]>l+m){n=a-1;break}}for(var o=0,s=t-1;s>=0;s-=1){var d=e.get(u[s].key)||x;if(d[i]<l){o=s+1;break}}return[o,n]}),[e,l,m,s,u.map((function(e){return e.key})).join("_"),d])}var N=n("yGQK"),S=n("ndD4");function R(e,t){var n=e.prefixCls,r=e.editable,o=e.locale,c=e.style;return r&&!1!==r.showAdd?a["createElement"]("button",{ref:t,type:"button",className:"".concat(n,"-nav-add"),style:c,"aria-label":(null===o||void 0===o?void 0:o.addAriaLabel)||"Add tab",onClick:function(e){r.onEdit("add",{event:e})}},r.addIcon||"+"):null}var P=a["forwardRef"](R);function T(e,t){var n=e.prefixCls,r=e.id,o=e.tabs,l=e.locale,u=e.mobile,s=e.moreIcon,d=void 0===s?"More":s,b=e.moreTransitionName,v=e.style,m=e.className,p=e.editable,h=e.tabBarGutter,y=e.rtl,j=e.removeAriaLabel,O=e.onTabClick,g=e.getPopupContainer,k=e.popupClassName,w=Object(a["useState"])(!1),C=Object(i["a"])(w,2),x=C[0],_=C[1],R=Object(a["useState"])(null),T=Object(i["a"])(R,2),I=T[0],M=T[1],A="".concat(r,"-more-popup"),B="".concat(n,"-dropdown"),L=null!==I?"".concat(A,"-").concat(I):null,D=null===l||void 0===l?void 0:l.dropdownAriaLabel;function K(e,t){e.preventDefault(),e.stopPropagation(),p.onEdit("remove",{key:t,event:e})}var W=a["createElement"](N["e"],{onClick:function(e){var t=e.key,n=e.domEvent;O(t,n),_(!1)},prefixCls:"".concat(B,"-menu"),id:A,tabIndex:-1,role:"listbox","aria-activedescendant":L,selectedKeys:[I],"aria-label":void 0!==D?D:"expanded dropdown"},o.map((function(e){var t=p&&!1!==e.closable&&!e.disabled;return a["createElement"](N["b"],{key:e.key,id:"".concat(A,"-").concat(e.key),role:"option","aria-controls":r&&"".concat(r,"-panel-").concat(e.key),disabled:e.disabled},a["createElement"]("span",null,e.tab),t&&a["createElement"]("button",{type:"button","aria-label":j||"remove",tabIndex:0,className:"".concat(B,"-menu-item-remove"),onClick:function(t){t.stopPropagation(),K(t,e.key)}},e.closeIcon||p.removeIcon||"\xd7"))})));function F(e){for(var t=o.filter((function(e){return!e.disabled})),n=t.findIndex((function(e){return e.key===I}))||0,a=t.length,r=0;r<a;r+=1){n=(n+e+a)%a;var c=t[n];if(!c.disabled)return void M(c.key)}}function U(e){var t=e.which;if(x)switch(t){case E["a"].UP:F(-1),e.preventDefault();break;case E["a"].DOWN:F(1),e.preventDefault();break;case E["a"].ESC:_(!1);break;case E["a"].SPACE:case E["a"].ENTER:null!==I&&O(I,e);break}else[E["a"].DOWN,E["a"].SPACE,E["a"].ENTER].includes(t)&&(_(!0),e.preventDefault())}Object(a["useEffect"])((function(){var e=document.getElementById(L);e&&e.scrollIntoView&&e.scrollIntoView(!1)}),[I]),Object(a["useEffect"])((function(){x||M(null)}),[x]);var G=Object(c["a"])({},y?"marginRight":"marginLeft",h);o.length||(G.visibility="hidden",G.order=1);var V=f()(Object(c["a"])({},"".concat(B,"-rtl"),y)),H=u?null:a["createElement"](S["a"],{prefixCls:B,overlay:W,trigger:["hover"],visible:!!o.length&&x,transitionName:b,onVisibleChange:_,overlayClassName:f()(V,k),mouseEnterDelay:.1,mouseLeaveDelay:.1,getPopupContainer:g},a["createElement"]("button",{type:"button",className:"".concat(n,"-nav-more"),style:G,tabIndex:-1,"aria-hidden":"true","aria-haspopup":"listbox","aria-controls":A,id:"".concat(r,"-more"),"aria-expanded":x,onKeyDown:U},d));return a["createElement"]("div",{className:f()("".concat(n,"-nav-operations"),m),style:v,ref:t},H,a["createElement"](P,{prefixCls:n,locale:l,editable:p}))}var I=a["memo"](a["forwardRef"](T),(function(e,t){return t.tabMoving})),M=Object(a["createContext"])(null),A=.1,B=.01,L=20,D=Math.pow(.995,L);function K(e,t){var n=Object(a["useState"])(),r=Object(i["a"])(n,2),o=r[0],c=r[1],l=Object(a["useState"])(0),u=Object(i["a"])(l,2),s=u[0],d=u[1],f=Object(a["useState"])(0),b=Object(i["a"])(f,2),v=b[0],m=b[1],p=Object(a["useState"])(),h=Object(i["a"])(p,2),y=h[0],j=h[1],O=Object(a["useRef"])();function E(e){var t=e.touches[0],n=t.screenX,a=t.screenY;c({x:n,y:a}),window.clearInterval(O.current)}function g(e){if(o){e.preventDefault();var n=e.touches[0],a=n.screenX,r=n.screenY;c({x:a,y:r});var i=a-o.x,l=r-o.y;t(i,l);var u=Date.now();d(u),m(u-s),j({x:i,y:l})}}function k(){if(o&&(c(null),j(null),y)){var e=y.x/v,n=y.y/v,a=Math.abs(e),r=Math.abs(n);if(Math.max(a,r)<A)return;var i=e,l=n;O.current=window.setInterval((function(){Math.abs(i)<B&&Math.abs(l)<B?window.clearInterval(O.current):(i*=D,l*=D,t(i*L,l*L))}),L)}}var w=Object(a["useRef"])();function C(e){var n=e.deltaX,a=e.deltaY,r=0,o=Math.abs(n),c=Math.abs(a);o===c?r="x"===w.current?n:a:o>c?(r=n,w.current="x"):(r=a,w.current="y"),t(-r,-r)&&e.preventDefault()}var x=Object(a["useRef"])(null);x.current={onTouchStart:E,onTouchMove:g,onTouchEnd:k,onWheel:C},a["useEffect"]((function(){function t(e){x.current.onTouchStart(e)}function n(e){x.current.onTouchMove(e)}function a(e){x.current.onTouchEnd(e)}function r(e){x.current.onWheel(e)}return document.addEventListener("touchmove",n,{passive:!1}),document.addEventListener("touchend",a,{passive:!1}),e.current.addEventListener("touchstart",t,{passive:!1}),e.current.addEventListener("wheel",r),function(){document.removeEventListener("touchmove",n),document.removeEventListener("touchend",a)}}),[])}function W(){var e=Object(a["useRef"])(new Map);function t(t){return e.current.has(t)||e.current.set(t,a["createRef"]()),e.current.get(t)}function n(t){e.current["delete"](t)}return[t,n]}function F(e,t){var n=a["useRef"](e),r=a["useState"]({}),o=Object(i["a"])(r,2),c=o[1];function l(e){var a="function"===typeof e?e(n.current):e;a!==n.current&&t(a,n.current),n.current=a,c({})}return[n.current,l]}var U=function(e){var t,n=e.position,r=e.prefixCls,o=e.extra;if(!o)return null;var c={};return o&&"object"===Object(l["a"])(o)&&!a["isValidElement"](o)?c=o:c.right=o,"right"===n&&(t=c.right),"left"===n&&(t=c.left),t?a["createElement"]("div",{className:"".concat(r,"-extra-content")},t):null};function G(e,t){var n,r=a["useContext"](M),l=r.prefixCls,u=r.tabs,d=e.className,b=e.style,v=e.id,m=e.animated,E=e.activeKey,g=e.rtl,w=e.extra,x=e.editable,N=e.locale,S=e.tabPosition,R=e.tabBarGutter,T=e.children,A=e.onTabClick,B=e.onTabScroll,L=Object(a["useRef"])(),D=Object(a["useRef"])(),G=Object(a["useRef"])(),V=Object(a["useRef"])(),H=W(),Z=Object(i["a"])(H,2),X=Z[0],Y=Z[1],z="top"===S||"bottom"===S,J=F(0,(function(e,t){z&&B&&B({direction:e>t?"left":"right"})})),$=Object(i["a"])(J,2),q=$[0],Q=$[1],ee=F(0,(function(e,t){!z&&B&&B({direction:e>t?"top":"bottom"})})),te=Object(i["a"])(ee,2),ne=te[0],ae=te[1],re=Object(a["useState"])(0),oe=Object(i["a"])(re,2),ce=oe[0],ie=oe[1],le=Object(a["useState"])(0),ue=Object(i["a"])(le,2),se=ue[0],de=ue[1],fe=Object(a["useState"])(null),be=Object(i["a"])(fe,2),ve=be[0],me=be[1],pe=Object(a["useState"])(null),he=Object(i["a"])(pe,2),ye=he[0],je=he[1],Oe=Object(a["useState"])(0),Ee=Object(i["a"])(Oe,2),ge=Ee[0],ke=Ee[1],we=Object(a["useState"])(0),Ce=Object(i["a"])(we,2),xe=Ce[0],_e=Ce[1],Ne=O(new Map),Se=Object(i["a"])(Ne,2),Re=Se[0],Pe=Se[1],Te=C(u,Re,ce),Ie="".concat(l,"-nav-operations-hidden"),Me=0,Ae=0;function Be(e){return e<Me?Me:e>Ae?Ae:e}z?g?(Me=0,Ae=Math.max(0,ce-ve)):(Me=Math.min(0,ve-ce),Ae=0):(Me=Math.min(0,ye-se),Ae=0);var Le=Object(a["useRef"])(),De=Object(a["useState"])(),Ke=Object(i["a"])(De,2),We=Ke[0],Fe=Ke[1];function Ue(){Fe(Date.now())}function Ge(){window.clearTimeout(Le.current)}function Ve(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=Te.get(e)||{width:0,height:0,left:0,right:0,top:0};if(z){var n=q;g?t.right<q?n=t.right:t.right+t.width>q+ve&&(n=t.right+t.width-ve):t.left<-q?n=-t.left:t.left+t.width>-q+ve&&(n=-(t.left+t.width-ve)),ae(0),Q(Be(n))}else{var a=ne;t.top<-ne?a=-t.top:t.top+t.height>-ne+ye&&(a=-(t.top+t.height-ye)),Q(0),ae(Be(a))}}K(L,(function(e,t){function n(e,t){e((function(e){var n=Be(e+t);return n}))}if(z){if(ve>=ce)return!1;n(Q,e)}else{if(ye>=se)return!1;n(ae,t)}return Ge(),Ue(),!0})),Object(a["useEffect"])((function(){return Ge(),We&&(Le.current=window.setTimeout((function(){Fe(0)}),100)),Ge}),[We]);var He=_(Te,{width:ve,height:ye,left:q,top:ne},{width:ce,height:se},{width:ge,height:xe},Object(s["a"])(Object(s["a"])({},e),{},{tabs:u})),Ze=Object(i["a"])(He,2),Xe=Ze[0],Ye=Ze[1],ze={};"top"===S||"bottom"===S?ze[g?"marginRight":"marginLeft"]=R:ze.marginTop=R;var Je=u.map((function(e,t){var n=e.key;return a["createElement"](k,{id:v,prefixCls:l,key:n,tab:e,style:0===t?void 0:ze,closable:e.closable,editable:x,active:n===E,renderWrapper:T,removeAriaLabel:null===N||void 0===N?void 0:N.removeAriaLabel,ref:X(n),onClick:function(e){A(n,e)},onRemove:function(){Y(n)},onFocus:function(){Ve(n),Ue(),L.current&&(g||(L.current.scrollLeft=0),L.current.scrollTop=0)}})})),$e=j((function(){var e,t,n,a,r,o,c=(null===(e=L.current)||void 0===e?void 0:e.offsetWidth)||0,i=(null===(t=L.current)||void 0===t?void 0:t.offsetHeight)||0,l=(null===(n=V.current)||void 0===n?void 0:n.offsetWidth)||0,s=(null===(a=V.current)||void 0===a?void 0:a.offsetHeight)||0;me(c),je(i),ke(l),_e(s);var d=((null===(r=D.current)||void 0===r?void 0:r.offsetWidth)||0)-l,f=((null===(o=D.current)||void 0===o?void 0:o.offsetHeight)||0)-s;ie(d),de(f),Pe((function(){var e=new Map;return u.forEach((function(t){var n=t.key,a=X(n).current;a&&e.set(n,{width:a.offsetWidth,height:a.offsetHeight,left:a.offsetLeft,top:a.offsetTop})})),e}))})),qe=u.slice(0,Xe),Qe=u.slice(Ye+1),et=[].concat(Object(p["a"])(qe),Object(p["a"])(Qe)),tt=Object(a["useState"])(),nt=Object(i["a"])(tt,2),at=nt[0],rt=nt[1],ot=Te.get(E),ct=Object(a["useRef"])();function it(){h["a"].cancel(ct.current)}Object(a["useEffect"])((function(){var e={};return ot&&(z?(g?e.right=ot.right:e.left=ot.left,e.width=ot.width):(e.top=ot.top,e.height=ot.height)),it(),ct.current=Object(h["a"])((function(){rt(e)})),it}),[ot,z,g]),Object(a["useEffect"])((function(){Ve()}),[E,ot,Te,z]),Object(a["useEffect"])((function(){$e()}),[g,R,E,u.map((function(e){return e.key})).join("_")]);var lt,ut,st,dt,ft=!!et.length,bt="".concat(l,"-nav-wrap");return z?g?(ut=q>0,lt=q+ve<ce):(lt=q<0,ut=-q+ve<ce):(st=ne<0,dt=-ne+ye<se),a["createElement"]("div",{ref:t,role:"tablist",className:f()("".concat(l,"-nav"),d),style:b,onKeyDown:function(){Ue()}},a["createElement"](U,{position:"left",extra:w,prefixCls:l}),a["createElement"](y["a"],{onResize:$e},a["createElement"]("div",{className:f()(bt,(n={},Object(c["a"])(n,"".concat(bt,"-ping-left"),lt),Object(c["a"])(n,"".concat(bt,"-ping-right"),ut),Object(c["a"])(n,"".concat(bt,"-ping-top"),st),Object(c["a"])(n,"".concat(bt,"-ping-bottom"),dt),n)),ref:L},a["createElement"](y["a"],{onResize:$e},a["createElement"]("div",{ref:D,className:"".concat(l,"-nav-list"),style:{transform:"translate(".concat(q,"px, ").concat(ne,"px)"),transition:We?"none":void 0}},Je,a["createElement"](P,{ref:V,prefixCls:l,locale:N,editable:x,style:Object(s["a"])(Object(s["a"])({},0===Je.length?void 0:ze),{},{visibility:ft?"hidden":null})}),a["createElement"]("div",{className:f()("".concat(l,"-ink-bar"),Object(c["a"])({},"".concat(l,"-ink-bar-animated"),m.inkBar)),style:at}))))),a["createElement"](I,Object(o["a"])({},e,{removeAriaLabel:null===N||void 0===N?void 0:N.removeAriaLabel,ref:G,prefixCls:l,tabs:et,className:!ft&&Ie,tabMoving:!!We})),a["createElement"](U,{position:"right",extra:w,prefixCls:l}))}var V=a["forwardRef"](G);function H(e){var t=e.id,n=e.activeKey,r=e.animated,o=e.tabPosition,i=e.rtl,l=e.destroyInactiveTabPane,u=a["useContext"](M),s=u.prefixCls,d=u.tabs,b=r.tabPane,v=d.findIndex((function(e){return e.key===n}));return a["createElement"]("div",{className:f()("".concat(s,"-content-holder"))},a["createElement"]("div",{className:f()("".concat(s,"-content"),"".concat(s,"-content-").concat(o),Object(c["a"])({},"".concat(s,"-content-animated"),b)),style:v&&b?Object(c["a"])({},i?"marginRight":"marginLeft","-".concat(v,"00%")):null},d.map((function(e){return a["cloneElement"](e.node,{key:e.key,prefixCls:s,tabKey:e.key,id:t,animated:b,active:e.key===n,destroyInactiveTabPane:l})}))))}function Z(e){var t=e.prefixCls,n=e.forceRender,r=e.className,o=e.style,c=e.id,l=e.active,u=e.animated,d=e.destroyInactiveTabPane,b=e.tabKey,v=e.children,m=a["useState"](n),p=Object(i["a"])(m,2),h=p[0],y=p[1];a["useEffect"]((function(){l?y(!0):d&&y(!1)}),[l,d]);var j={};return l||(u?(j.visibility="hidden",j.height=0,j.overflowY="hidden"):j.display="none"),a["createElement"]("div",{id:c&&"".concat(c,"-panel-").concat(b),role:"tabpanel",tabIndex:l?0:-1,"aria-labelledby":c&&"".concat(c,"-tab-").concat(b),"aria-hidden":!l,style:Object(s["a"])(Object(s["a"])({},j),o),className:f()("".concat(t,"-tabpane"),l&&"".concat(t,"-tabpane-active"),r)},(l||h||n)&&v)}var X=["id","prefixCls","className","children","direction","activeKey","defaultActiveKey","editable","animated","tabPosition","tabBarGutter","tabBarStyle","tabBarExtraContent","locale","moreIcon","moreTransitionName","destroyInactiveTabPane","renderTabBar","onChange","onTabClick","onTabScroll","getPopupContainer","popupClassName"],Y=0;function z(e){return Object(b["a"])(e).map((function(e){if(a["isValidElement"](e)){var t=void 0!==e.key?String(e.key):void 0;return Object(s["a"])(Object(s["a"])({key:t},e.props),{},{node:e})}return null})).filter((function(e){return e}))}function J(e,t){var n,r,d=e.id,b=e.prefixCls,p=void 0===b?"rc-tabs":b,h=e.className,y=e.children,j=e.direction,O=e.activeKey,E=e.defaultActiveKey,g=e.editable,k=e.animated,w=void 0===k?{inkBar:!0,tabPane:!1}:k,C=e.tabPosition,x=void 0===C?"top":C,_=e.tabBarGutter,N=e.tabBarStyle,S=e.tabBarExtraContent,R=e.locale,P=e.moreIcon,T=e.moreTransitionName,I=e.destroyInactiveTabPane,A=e.renderTabBar,B=e.onChange,L=e.onTabClick,D=e.onTabScroll,K=e.getPopupContainer,W=e.popupClassName,F=Object(u["a"])(e,X),U=z(y),G="rtl"===j;r=!1===w?{inkBar:!1,tabPane:!1}:!0===w?{inkBar:!0,tabPane:!0}:Object(s["a"])({inkBar:!0,tabPane:!1},"object"===Object(l["a"])(w)?w:{});var Z=Object(a["useState"])(!1),J=Object(i["a"])(Z,2),$=J[0],q=J[1];Object(a["useEffect"])((function(){q(Object(v["a"])())}),[]);var Q=Object(m["a"])((function(){var e;return null===(e=U[0])||void 0===e?void 0:e.key}),{value:O,defaultValue:E}),ee=Object(i["a"])(Q,2),te=ee[0],ne=ee[1],ae=Object(a["useState"])((function(){return U.findIndex((function(e){return e.key===te}))})),re=Object(i["a"])(ae,2),oe=re[0],ce=re[1];Object(a["useEffect"])((function(){var e,t=U.findIndex((function(e){return e.key===te}));-1===t&&(t=Math.max(0,Math.min(oe,U.length-1)),ne(null===(e=U[t])||void 0===e?void 0:e.key));ce(t)}),[U.map((function(e){return e.key})).join("_"),te,oe]);var ie=Object(m["a"])(null,{value:d}),le=Object(i["a"])(ie,2),ue=le[0],se=le[1],de=x;function fe(e,t){null===L||void 0===L||L(e,t);var n=e!==te;ne(e),n&&(null===B||void 0===B||B(e))}$&&!["left","right"].includes(x)&&(de="top"),Object(a["useEffect"])((function(){d||(se("rc-tabs-".concat(Y)),Y+=1)}),[]);var be,ve={id:ue,activeKey:te,animated:r,tabPosition:de,rtl:G,mobile:$},me=Object(s["a"])(Object(s["a"])({},ve),{},{editable:g,locale:R,moreIcon:P,moreTransitionName:T,tabBarGutter:_,onTabClick:fe,onTabScroll:D,extra:S,style:N,panes:y,getPopupContainer:K,popupClassName:W});return be=A?A(me,V):a["createElement"](V,me),a["createElement"](M.Provider,{value:{tabs:U,prefixCls:p}},a["createElement"]("div",Object(o["a"])({ref:t,id:d,className:f()(p,"".concat(p,"-").concat(de),(n={},Object(c["a"])(n,"".concat(p,"-mobile"),$),Object(c["a"])(n,"".concat(p,"-editable"),g),Object(c["a"])(n,"".concat(p,"-rtl"),G),n),h)},F),be,a["createElement"](H,Object(o["a"])({destroyInactiveTabPane:I},ve,{animated:r}))))}var $=a["forwardRef"](J);$.TabPane=Z;var q=$,Q=q,ee=n("c3e3"),te=n("MZF8"),ne=n("vLUS"),ae=n("Fesk"),re=n("5Zva");n("w3of");function oe(e,t){return se(e)||ue(e,t)||ie(e,t)||ce()}function ce(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function ie(e,t){if(e){if("string"===typeof e)return le(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?le(e,t):void 0}}function le(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function ue(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var a,r,o=[],c=!0,i=!1;try{for(n=n.call(e);!(c=(a=n.next()).done);c=!0)if(o.push(a.value),t&&o.length===t)break}catch(l){i=!0,r=l}finally{try{c||null==n["return"]||n["return"]()}finally{if(i)throw r}}return o}}function se(e){if(Array.isArray(e))return e}function de(e,t){var n,a=null===(n=e.match(/\.(\w+)$/))||void 0===n?void 0:n[1];return a||(a=t.tsx?"tsx":"jsx"),a}var fe=function(e){var t,n,o,c=Object(a["useRef"])(),i=Object(a["useContext"])(ne["context"]),l=i.locale,u=Object(ne["useLocaleProps"])(l,e),s=Object(ne["useDemoUrl"])(u.identifier),d=u.demoUrl||s,f=(null===te["a"]||void 0===te["a"]?void 0:te["a"].location.hash)==="#".concat(u.identifier),b=1===Object.keys(u.sources).length,v=Object(ne["useCodeSandbox"])((null===(t=u.hideActions)||void 0===t?void 0:t.includes("CSB"))?null:u),m=Object(ne["useRiddle"])((null===(n=u.hideActions)||void 0===n?void 0:n.includes("RIDDLE"))?null:u),p=Object(ne["useMotions"])(u.motions||[],c.current),h=oe(p,2),y=h[0],j=h[1],O=Object(ne["useCopy"])(),E=oe(O,2),g=E[0],k=E[1],w=Object(a["useState"])((function(){return u.sources._?"_":Object.keys(u.sources)[0]})),C=oe(w,2),x=C[0],_=C[1],N=Object(a["useState"])(de(x,u.sources[x])),S=oe(N,2),R=S[0],P=S[1],T=Object(a["useState"])(Boolean(u.defaultShowCode)),I=oe(T,2),M=I[0],A=I[1],B=Object(a["useState"])(Math.random()),L=oe(B,2),D=L[0],K=L[1],W=u.sources[x][R]||u.sources[x].content,F=Object(ne["useTSPlaygroundUrl"])(l,W),U=Object(a["useRef"])(),G=Object(ne["usePrefersColor"])(),V=oe(G,1),H=V[0],X=u.actionBarRender,Y=void 0===X?function(e){return e}:X;function z(e){_(e),P(de(e,u.sources[e]))}return Object(a["useEffect"])((function(){K(Math.random())}),[H]),r.a.createElement("div",{style:u.style,className:[u.className,"__dumi-default-previewer",f?"__dumi-default-previewer-target":""].filter(Boolean).join(" "),id:u.identifier,"data-debug":u.debug||void 0,"data-iframe":u.iframe||void 0},u.iframe&&r.a.createElement("div",{className:"__dumi-default-previewer-browser-nav"}),r.a.createElement("div",{ref:c,className:"__dumi-default-previewer-demo",style:{transform:u.transform?"translate(0, 0)":void 0,padding:u.compact||u.iframe&&!1!==u.compact?"0":void 0,background:u.background}},u.iframe?r.a.createElement("iframe",{title:"dumi-previewer",style:{height:String(u.iframe).replace(/(\d)$/,"$1px")},key:D,src:d,ref:U}):r.a.createElement(ee["ErrorBoundary"],{fallbackRender:function(e){var t=e.error;return r.a.createElement(re["a"],{type:"error"},r.a.createElement("h4",null,t.message||"This demo has been crashed."),t.stack&&r.a.createElement("details",null,r.a.createElement("summary",null,"Error stack"),r.a.createElement("pre",null,t.stack)))}},u.children)),r.a.createElement("div",{className:"__dumi-default-previewer-desc","data-title":u.title},u.title&&r.a.createElement(ne["AnchorLink"],{to:"#".concat(u.identifier)},u.title),u.description&&r.a.createElement("div",{dangerouslySetInnerHTML:{__html:u.description}})),r.a.createElement("div",{className:"__dumi-default-previewer-actions"},Y(r.a.createElement(r.a.Fragment,null,v&&r.a.createElement("button",{title:"Open demo on CodeSandbox.io",className:"__dumi-default-icon",role:"codesandbox",onClick:v}),m&&r.a.createElement("button",{title:"Open demo on Riddle",className:"__dumi-default-icon",role:"riddle",onClick:m}),u.motions&&r.a.createElement("button",{title:"Execute motions",className:"__dumi-default-icon",role:"motions",disabled:j,onClick:function(){return y()}}),u.iframe&&r.a.createElement("button",{title:"Reload demo iframe page",className:"__dumi-default-icon",role:"refresh",onClick:function(){return K(Math.random())}}),!(null===(o=u.hideActions)||void 0===o?void 0:o.includes("EXTERNAL"))&&r.a.createElement(ne["Link"],{target:"_blank",to:d},r.a.createElement("button",{title:"Open demo in new tab",className:"__dumi-default-icon",role:"open-demo",type:"button"})),r.a.createElement("span",null),r.a.createElement("button",{title:"Copy source code",className:"__dumi-default-icon",role:"copy","data-status":k,onClick:function(){return g(W)}}),"tsx"===R&&M&&r.a.createElement(ne["Link"],{target:"_blank",to:F},r.a.createElement("button",{title:"Get JSX via TypeScript Playground",className:"__dumi-default-icon",role:"change-tsx",type:"button"})),r.a.createElement("button",{title:"Toggle source code panel",className:"__dumi-default-icon".concat(M?" __dumi-default-btn-expand":""),role:"source",type:"button",onClick:function(){return A(!M)}})))),M&&r.a.createElement("div",{className:"__dumi-default-previewer-source-wrapper"},!b&&r.a.createElement(Q,{className:"__dumi-default-previewer-source-tab",prefixCls:"__dumi-default-tabs",moreIcon:"\xb7\xb7\xb7",defaultActiveKey:x,onChange:z},Object.keys(u.sources).map((function(e){return r.a.createElement(Z,{tab:"_"===e?"index.".concat(de(e,u.sources[e])):e,key:e})}))),r.a.createElement("div",{className:"__dumi-default-previewer-source"},r.a.createElement(ae["a"],{code:W,lang:R,showCopy:!1}))))};t["default"]=fe},w3of:function(e,t,n){}}]);