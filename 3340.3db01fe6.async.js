"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3340],{69499:function(Rt,Xe,h){h.d(Xe,{Z:function(){return ft}});var i=h(75782),B=h(50959),k={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M716.3 313.8c19-18.9 19-49.7 0-68.6l-69.9-69.9.1.1c-18.5-18.5-50.3-50.3-95.3-95.2-21.2-20.7-55.5-20.5-76.5.5L80.9 474.2a53.84 53.84 0 000 76.4L474.6 944a54.14 54.14 0 0076.5 0l165.1-165c19-18.9 19-49.7 0-68.6a48.7 48.7 0 00-68.7 0l-125 125.2c-5.2 5.2-13.3 5.2-18.5 0L189.5 521.4c-5.2-5.2-5.2-13.3 0-18.5l314.4-314.2c.4-.4.9-.7 1.3-1.1 5.2-4.1 12.4-3.7 17.2 1.1l125.2 125.1c19 19 49.8 19 68.7 0zM408.6 514.4a106.3 106.2 0 10212.6 0 106.3 106.2 0 10-212.6 0zm536.2-38.6L821.9 353.5c-19-18.9-49.8-18.9-68.7.1a48.4 48.4 0 000 68.6l83 82.9c5.2 5.2 5.2 13.3 0 18.5l-81.8 81.7a48.4 48.4 0 000 68.6 48.7 48.7 0 0068.7 0l121.8-121.7a53.93 53.93 0 00-.1-76.4z"}}]},name:"ant-design",theme:"outlined"},Fe=k,ze=h(91600),ge=h(24572),Q=h(58733),Ye=h(84875),Ue=h.n(Ye),je=h(7719),xt=(0,B.createContext)({}),V=xt,Ie=h(26143),ve={};function Ge(a,l){}function Ke(a,l){}function Ot(){ve={}}function Qe(a,l,f){!l&&!ve[f]&&(a(!1,f),ve[f]=!0)}function he(a,l){Qe(Ge,a,l)}function Ae(a,l){Qe(Ke,a,l)}var ye=he;function le(){return!!(typeof window!="undefined"&&window.document&&window.document.createElement)}function Je(a,l){if(!a)return!1;if(a.contains)return a.contains(l);for(var f=l;f;){if(f===a)return!0;f=f.parentNode}return!1}var Ne="data-rc-order",Re="rc-util-key",ce=new Map;function Be(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},l=a.mark;return l?l.startsWith("data-")?l:"data-".concat(l):Re}function be(a){if(a.attachTo)return a.attachTo;var l=document.querySelector("head");return l||document.body}function Me(a){return a==="queue"?"prependQueue":a?"prepend":"append"}function Le(a){return Array.from((ce.get(a)||a).children).filter(function(l){return l.tagName==="STYLE"})}function J(a){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!le())return null;var f=l.csp,C=l.prepend,d=document.createElement("style");d.setAttribute(Ne,Me(C)),f!=null&&f.nonce&&(d.nonce=f==null?void 0:f.nonce),d.innerHTML=a;var P=be(l),N=P.firstChild;if(C){if(C==="queue"){var M=Le(P).filter(function(Z){return["prepend","prependQueue"].includes(Z.getAttribute(Ne))});if(M.length)return P.insertBefore(d,M[M.length-1].nextSibling),d}P.insertBefore(d,N)}else P.appendChild(d);return d}function Ce(a){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},f=be(l);return Le(f).find(function(C){return C.getAttribute(Be(l))===a})}function ke(a){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},f=Ce(a,l);if(f){var C=be(l);C.removeChild(f)}}function qe(a,l){var f=ce.get(a);if(!f||!Je(document,f)){var C=J("",l),d=C.parentNode;ce.set(a,d),a.removeChild(C)}}function St(){ce.clear()}function _e(a,l){var f=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},C=be(f);qe(C,f);var d=Ce(l,f);if(d){var P,N;if((P=f.csp)!==null&&P!==void 0&&P.nonce&&d.nonce!==((N=f.csp)===null||N===void 0?void 0:N.nonce)){var M;d.nonce=(M=f.csp)===null||M===void 0?void 0:M.nonce}return d.innerHTML!==a&&(d.innerHTML=a),d}var Z=J(a,f);return Z.setAttribute(Be(f),l),Z}function et(a,l){ye(a,"[@ant-design/icons] ".concat(l))}function X(a){return(0,Ie.Z)(a)==="object"&&typeof a.name=="string"&&typeof a.theme=="string"&&((0,Ie.Z)(a.icon)==="object"||typeof a.icon=="function")}function F(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Object.keys(a).reduce(function(l,f){var C=a[f];switch(f){case"class":l.className=C,delete l.class;break;default:l[f]=C}return l},{})}function j(a,l,f){return f?B.createElement(a.tag,(0,i.Z)((0,i.Z)({key:l},F(a.attrs)),f),(a.children||[]).map(function(C,d){return j(C,"".concat(l,"-").concat(a.tag,"-").concat(d))})):B.createElement(a.tag,(0,i.Z)({key:l},F(a.attrs)),(a.children||[]).map(function(C,d){return j(C,"".concat(l,"-").concat(a.tag,"-").concat(d))}))}function Ze(a){return(0,je.generate)(a)[0]}function tt(a){return a?Array.isArray(a)?a:[a]:[]}var $t={width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true",focusable:"false"},nt=`
.anticon {
  display: inline-block;
  color: inherit;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.anticon > * {
  line-height: 1;
}

.anticon svg {
  display: inline-block;
}

.anticon::before {
  display: none;
}

.anticon .anticon-icon {
  display: block;
}

.anticon[tabindex] {
  cursor: pointer;
}

.anticon-spin::before,
.anticon-spin {
  display: inline-block;
  -webkit-animation: loadingCircle 1s infinite linear;
  animation: loadingCircle 1s infinite linear;
}

@-webkit-keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
`,ot=function(){var l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:nt,f=(0,B.useContext)(V),C=f.csp,d=f.prefixCls,P=l;d&&(P=P.replace(/anticon/g,d)),(0,B.useEffect)(function(){_e(P,"@ant-design-icons",{prepend:!0,csp:C})},[])},rt=["icon","className","onClick","style","primaryColor","secondaryColor"],q={primaryColor:"#333",secondaryColor:"#E6E6E6",calculated:!1};function at(a){var l=a.primaryColor,f=a.secondaryColor;q.primaryColor=l,q.secondaryColor=f||Ze(l),q.calculated=!!f}function it(){return(0,i.Z)({},q)}var _=function(l){var f=l.icon,C=l.className,d=l.onClick,P=l.style,N=l.primaryColor,M=l.secondaryColor,Z=(0,Q.Z)(l,rt),G=q;if(N&&(G={primaryColor:N,secondaryColor:M||Ze(N)}),ot(),et(X(f),"icon should be icon definiton, but got ".concat(f)),!X(f))return null;var D=f;return D&&typeof D.icon=="function"&&(D=(0,i.Z)((0,i.Z)({},D),{},{icon:D.icon(G.primaryColor,G.secondaryColor)})),j(D.icon,"svg-".concat(D.name),(0,i.Z)({className:C,onClick:d,style:P,"data-icon":D.name,width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true"},Z))};_.displayName="IconReact",_.getTwoToneColors=it,_.setTwoToneColors=at;var fe=_;function ee(a){var l=tt(a),f=(0,ze.Z)(l,2),C=f[0],d=f[1];return fe.setTwoToneColors({primaryColor:C,secondaryColor:d})}function De(){var a=fe.getTwoToneColors();return a.calculated?[a.primaryColor,a.secondaryColor]:a.primaryColor}var st=["className","icon","spin","rotate","tabIndex","onClick","twoToneColor"];ee(je.blue.primary);var te=B.forwardRef(function(a,l){var f,C=a.className,d=a.icon,P=a.spin,N=a.rotate,M=a.tabIndex,Z=a.onClick,G=a.twoToneColor,D=(0,Q.Z)(a,st),We=B.useContext(V),He=We.prefixCls,we=He===void 0?"anticon":He,ut=We.rootClassName,mt=Ue()(ut,we,(f={},(0,ge.Z)(f,"".concat(we,"-").concat(d.name),!!d.name),(0,ge.Z)(f,"".concat(we,"-spin"),!!P||d.name==="loading"),f),C),xe=M;xe===void 0&&Z&&(xe=-1);var dt=N?{msTransform:"rotate(".concat(N,"deg)"),transform:"rotate(".concat(N,"deg)")}:void 0,pt=tt(G),Oe=(0,ze.Z)(pt,2),ne=Oe[0],gt=Oe[1];return B.createElement("span",(0,i.Z)((0,i.Z)({role:"img","aria-label":d.name},D),{},{ref:l,tabIndex:xe,onClick:Z,className:mt}),B.createElement(fe,{icon:d,primaryColor:ne,secondaryColor:gt,style:dt}))});te.displayName="AntdIcon",te.getTwoToneColor=De,te.setTwoToneColor=ee;var lt=te,ct=function(l,f){return B.createElement(lt,(0,i.Z)((0,i.Z)({},l),{},{ref:f,icon:Fe}))},ft=B.forwardRef(ct)},10979:function(Rt,Xe,h){h.d(Xe,{C:function(){return _t}});var i=h(50959),B=h(84875),k=h.n(B),Fe=h(12682),ze=h(12602),ge=h(59381);const Q=["xxl","xl","lg","md","sm","xs"],Ye=e=>({xs:`(max-width: ${e.screenXSMax}px)`,sm:`(min-width: ${e.screenSM}px)`,md:`(min-width: ${e.screenMD}px)`,lg:`(min-width: ${e.screenLG}px)`,xl:`(min-width: ${e.screenXL}px)`,xxl:`(min-width: ${e.screenXXL}px)`}),Ue=e=>{const t=e,n=[].concat(Q).reverse();return n.forEach((o,r)=>{const s=o.toUpperCase(),u=`screen${s}Min`,c=`screen${s}`;if(!(t[u]<=t[c]))throw new Error(`${u}<=${c} fails : !(${t[u]}<=${t[c]})`);if(r<n.length-1){const m=`screen${s}Max`;if(!(t[c]<=t[m]))throw new Error(`${c}<=${m} fails : !(${t[c]}<=${t[m]})`);const g=`screen${n[r+1].toUpperCase()}Min`;if(!(t[m]<=t[g]))throw new Error(`${m}<=${g} fails : !(${t[m]}<=${t[g]})`)}}),e};function je(){const[,e]=(0,ge.Z)(),t=Ye(Ue(e));return i.useMemo(()=>{const n=new Map;let o=-1,r={};return{matchHandlers:{},dispatch(s){return r=s,n.forEach(u=>u(r)),n.size>=1},subscribe(s){return n.size||this.register(),o+=1,n.set(o,s),s(r),o},unsubscribe(s){n.delete(s),n.size||this.unregister()},unregister(){Object.keys(t).forEach(s=>{const u=t[s],c=this.matchHandlers[u];c==null||c.mql.removeListener(c==null?void 0:c.listener)}),n.clear()},register(){Object.keys(t).forEach(s=>{const u=t[s],c=v=>{let{matches:g}=v;this.dispatch(Object.assign(Object.assign({},r),{[s]:g}))},m=window.matchMedia(u);m.addListener(c),this.matchHandlers[u]={mql:m,listener:c},c(m)})},responsiveMap:t}},[e])}const xt=(e,t)=>{if(t&&typeof t=="object")for(let n=0;n<Q.length;n++){const o=Q[n];if(e[o]&&t[o]!==void 0)return t[o]}};var V=h(17962),Ie=h(39148),ve=h(77189);function Ge(){const[,e]=i.useReducer(t=>t+1,0);return e}function Ke(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;const t=(0,i.useRef)({}),n=Ge(),o=je();return(0,ve.Z)(()=>{const r=o.subscribe(s=>{t.current=s,e&&n()});return()=>o.unsubscribe(r)},[]),t.current}var Ot=Ke,he=i.createContext({}),Ae=h(66748),ye=h(25874),le=h(55833);const Je=e=>{const{antCls:t,componentCls:n,iconCls:o,avatarBg:r,avatarColor:s,containerSize:u,containerSizeLG:c,containerSizeSM:m,textFontSize:v,textFontSizeLG:g,textFontSizeSM:p,borderRadius:y,borderRadiusLG:b,borderRadiusSM:w,lineWidth:S,lineType:I}=e,A=(E,O,W)=>({width:E,height:E,lineHeight:`${E-S*2}px`,borderRadius:"50%",[`&${n}-square`]:{borderRadius:W},[`${n}-string`]:{position:"absolute",left:{_skip_check_:!0,value:"50%"},transformOrigin:"0 center"},[`&${n}-icon`]:{fontSize:O,[`> ${o}`]:{margin:0}}});return{[n]:Object.assign(Object.assign(Object.assign(Object.assign({},(0,Ae.Wf)(e)),{position:"relative",display:"inline-block",overflow:"hidden",color:s,whiteSpace:"nowrap",textAlign:"center",verticalAlign:"middle",background:r,border:`${S}px ${I} transparent`,["&-image"]:{background:"transparent"},[`${t}-image-img`]:{display:"block"}}),A(u,v,y)),{["&-lg"]:Object.assign({},A(c,g,b)),["&-sm"]:Object.assign({},A(m,p,w)),"> img":{display:"block",width:"100%",height:"100%",objectFit:"cover"}})}},Ne=e=>{const{componentCls:t,groupBorderColor:n,groupOverlapping:o,groupSpace:r}=e;return{[`${t}-group`]:{display:"inline-flex",[`${t}`]:{borderColor:n},["> *:not(:first-child)"]:{marginInlineStart:o}},[`${t}-group-popover`]:{[`${t} + ${t}`]:{marginInlineStart:r}}}};var Re=(0,ye.Z)("Avatar",e=>{const{colorTextLightSolid:t,colorTextPlaceholder:n}=e,o=(0,le.TS)(e,{avatarBg:n,avatarColor:t});return[Je(o),Ne(o)]},e=>{const{controlHeight:t,controlHeightLG:n,controlHeightSM:o,fontSize:r,fontSizeLG:s,fontSizeXL:u,fontSizeHeading3:c,marginXS:m,marginXXS:v,colorBorderBg:g}=e;return{containerSize:t,containerSizeLG:n,containerSizeSM:o,textFontSize:Math.round((s+u)/2),textFontSizeLG:c,textFontSizeSM:r,groupSpace:v,groupOverlapping:-m,groupBorderColor:g}}),ce=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]]);return n};const Be=(e,t)=>{const[n,o]=i.useState(1),[r,s]=i.useState(!1),[u,c]=i.useState(!0),m=i.useRef(null),v=i.useRef(null),g=(0,ze.sQ)(t,m),{getPrefixCls:p,avatar:y}=i.useContext(V.E_),b=i.useContext(he),w=()=>{if(!v.current||!m.current)return;const x=v.current.offsetWidth,$=m.current.offsetWidth;if(x!==0&&$!==0){const{gap:L=4}=e;L*2<$&&o($-L*2<x?($-L*2)/x:1)}};i.useEffect(()=>{s(!0)},[]),i.useEffect(()=>{c(!0),o(1)},[e.src]),i.useEffect(w,[e.gap]);const S=()=>{const{onError:x}=e;(x==null?void 0:x())!==!1&&c(!1)},{prefixCls:I,shape:A,size:E,src:O,srcSet:W,icon:T,className:Y,rootClassName:oe,alt:Se,draggable:$e,children:K,crossOrigin:ue}=e,re=ce(e,["prefixCls","shape","size","src","srcSet","icon","className","rootClassName","alt","draggable","children","crossOrigin"]),z=(0,Ie.Z)(x=>{var $,L;return(L=($=E!=null?E:b==null?void 0:b.size)!==null&&$!==void 0?$:x)!==null&&L!==void 0?L:"default"}),ae=Object.keys(typeof z=="object"?z||{}:{}).some(x=>["xs","sm","md","lg","xl","xxl"].includes(x)),ie=Ot(ae),Pe=i.useMemo(()=>{if(typeof z!="object")return{};const x=Q.find(L=>ie[L]),$=z[x];return $?{width:$,height:$,lineHeight:`${$}px`,fontSize:$&&(T||K)?$/2:18}:{}},[ie,z]),R=p("avatar",I),[me,de]=Re(R),Ee=k()({[`${R}-lg`]:z==="large",[`${R}-sm`]:z==="small"}),Te=i.isValidElement(O),vt=A||(b==null?void 0:b.shape)||"circle",ht=k()(R,Ee,y==null?void 0:y.className,`${R}-${vt}`,{[`${R}-image`]:Te||O&&u,[`${R}-icon`]:!!T},Y,oe,de),yt=typeof z=="number"?{width:z,height:z,lineHeight:`${z}px`,fontSize:T?z/2:18}:{};let U;if(typeof O=="string"&&u)U=i.createElement("img",{src:O,draggable:$e,srcSet:W,onError:S,alt:Se,crossOrigin:ue});else if(Te)U=O;else if(T)U=T;else if(r||n!==1){const x=`scale(${n}) translateX(-50%)`,$={msTransform:x,WebkitTransform:x,transform:x},L=typeof z=="number"?{lineHeight:`${z}px`}:{};U=i.createElement(Fe.Z,{onResize:w},i.createElement("span",{className:`${R}-string`,ref:v,style:Object.assign(Object.assign({},L),$)},K))}else U=i.createElement("span",{className:`${R}-string`,style:{opacity:0},ref:v},K);return delete re.onError,delete re.gap,me(i.createElement("span",Object.assign({},re,{style:Object.assign(Object.assign(Object.assign(Object.assign({},yt),Pe),y==null?void 0:y.style),re.style),className:ht,ref:g}),U))};var Me=i.forwardRef(Be),Le=h(13763);const J=e=>e?typeof e=="function"?e():e:null;var Ce=h(20084);function ke(e){var t=e.children,n=e.prefixCls,o=e.id,r=e.overlayInnerStyle,s=e.className,u=e.style;return i.createElement("div",{className:k()("".concat(n,"-content"),s),style:u},i.createElement("div",{className:"".concat(n,"-inner"),id:o,role:"tooltip",style:r},typeof t=="function"?t():t))}var qe=h(51163),St=h(75782),_e=h(58733),et=h(18400),X={shiftX:64,adjustY:1},F={adjustX:1,shiftY:!0},j=[0,0],Ze={left:{points:["cr","cl"],overflow:F,offset:[-4,0],targetOffset:j},right:{points:["cl","cr"],overflow:F,offset:[4,0],targetOffset:j},top:{points:["bc","tc"],overflow:X,offset:[0,-4],targetOffset:j},bottom:{points:["tc","bc"],overflow:X,offset:[0,4],targetOffset:j},topLeft:{points:["bl","tl"],overflow:X,offset:[0,-4],targetOffset:j},leftTop:{points:["tr","tl"],overflow:F,offset:[-4,0],targetOffset:j},topRight:{points:["br","tr"],overflow:X,offset:[0,-4],targetOffset:j},rightTop:{points:["tl","tr"],overflow:F,offset:[4,0],targetOffset:j},bottomRight:{points:["tr","br"],overflow:X,offset:[0,4],targetOffset:j},rightBottom:{points:["bl","br"],overflow:F,offset:[4,0],targetOffset:j},bottomLeft:{points:["tl","bl"],overflow:X,offset:[0,4],targetOffset:j},leftBottom:{points:["br","bl"],overflow:F,offset:[-4,0],targetOffset:j}},tt=null,$t=["overlayClassName","trigger","mouseEnterDelay","mouseLeaveDelay","overlayStyle","prefixCls","children","onVisibleChange","afterVisibleChange","transitionName","animation","motion","placement","align","destroyTooltipOnHide","defaultVisible","getTooltipContainer","overlayInnerStyle","arrowContent","overlay","id","showArrow"],nt=function(t,n){var o=t.overlayClassName,r=t.trigger,s=r===void 0?["hover"]:r,u=t.mouseEnterDelay,c=u===void 0?0:u,m=t.mouseLeaveDelay,v=m===void 0?.1:m,g=t.overlayStyle,p=t.prefixCls,y=p===void 0?"rc-tooltip":p,b=t.children,w=t.onVisibleChange,S=t.afterVisibleChange,I=t.transitionName,A=t.animation,E=t.motion,O=t.placement,W=O===void 0?"right":O,T=t.align,Y=T===void 0?{}:T,oe=t.destroyTooltipOnHide,Se=oe===void 0?!1:oe,$e=t.defaultVisible,K=t.getTooltipContainer,ue=t.overlayInnerStyle,re=t.arrowContent,z=t.overlay,ae=t.id,ie=t.showArrow,Pe=ie===void 0?!0:ie,R=(0,_e.Z)(t,$t),me=(0,i.useRef)(null);(0,i.useImperativeHandle)(n,function(){return me.current});var de=(0,St.Z)({},R);"visible"in t&&(de.popupVisible=t.visible);var Ee=function(){return i.createElement(ke,{key:"content",prefixCls:y,id:ae,overlayInnerStyle:ue},z)};return i.createElement(et.Z,(0,qe.Z)({popupClassName:o,prefixCls:y,popup:Ee,action:s,builtinPlacements:Ze,popupPlacement:W,ref:me,popupAlign:Y,getPopupContainer:K,onPopupVisibleChange:w,afterPopupVisibleChange:S,popupTransitionName:I,popupAnimation:A,popupMotion:E,defaultPopupVisible:$e,autoDestroy:Se,mouseLeaveDelay:v,popupStyle:g,mouseEnterDelay:c,arrow:Pe},de),b)},ot=(0,i.forwardRef)(nt),rt=ot,q=h(65589),at=h(50192);const it=(e,t,n,o,r)=>{const s=e/2,u=0,c=s,m=n*1/Math.sqrt(2),v=s-n*(1-1/Math.sqrt(2)),g=s-t*(1/Math.sqrt(2)),p=n*(Math.sqrt(2)-1)+t*(1/Math.sqrt(2)),y=2*s-g,b=p,w=2*s-m,S=v,I=2*s-u,A=c,E=s*Math.sqrt(2)+n*(Math.sqrt(2)-2),O=n*(Math.sqrt(2)-1);return{pointerEvents:"none",width:e,height:e,overflow:"hidden","&::before":{position:"absolute",bottom:0,insetInlineStart:0,width:e,height:e/2,background:o,clipPath:{_multi_value_:!0,value:[`polygon(${O}px 100%, 50% ${O}px, ${2*s-O}px 100%, ${O}px 100%)`,`path('M ${u} ${c} A ${n} ${n} 0 0 0 ${m} ${v} L ${g} ${p} A ${t} ${t} 0 0 1 ${y} ${b} L ${w} ${S} A ${n} ${n} 0 0 0 ${I} ${A} Z')`]},content:'""'},"&::after":{content:'""',position:"absolute",width:E,height:E,bottom:0,insetInline:0,margin:"auto",borderRadius:{_skip_check_:!0,value:`0 0 ${t}px 0`},transform:"translateY(50%) rotate(-135deg)",boxShadow:r,zIndex:0,background:"transparent"}}},_=8;function fe(e){const t=_,{contentRadius:n,limitVerticalRadius:o}=e,r=n>12?n+2:12;return{dropdownArrowOffset:r,dropdownArrowOffsetVertical:o?t:r}}function ee(e,t){return e?t:{}}function De(e,t){const{componentCls:n,sizePopupArrow:o,borderRadiusXS:r,borderRadiusOuter:s,boxShadowPopoverArrow:u}=e,{colorBg:c,contentRadius:m=e.borderRadiusLG,limitVerticalRadius:v,arrowDistance:g=0,arrowPlacement:p={left:!0,right:!0,top:!0,bottom:!0}}=t,{dropdownArrowOffsetVertical:y,dropdownArrowOffset:b}=fe({contentRadius:m,limitVerticalRadius:v});return{[n]:Object.assign(Object.assign(Object.assign(Object.assign({[`${n}-arrow`]:[Object.assign(Object.assign({position:"absolute",zIndex:1,display:"block"},it(o,r,s,c,u)),{"&:before":{background:c}})]},ee(!!p.top,{[[`&-placement-top ${n}-arrow`,`&-placement-topLeft ${n}-arrow`,`&-placement-topRight ${n}-arrow`].join(",")]:{bottom:g,transform:"translateY(100%) rotate(180deg)"},[`&-placement-top ${n}-arrow`]:{left:{_skip_check_:!0,value:"50%"},transform:"translateX(-50%) translateY(100%) rotate(180deg)"},[`&-placement-topLeft ${n}-arrow`]:{left:{_skip_check_:!0,value:b}},[`&-placement-topRight ${n}-arrow`]:{right:{_skip_check_:!0,value:b}}})),ee(!!p.bottom,{[[`&-placement-bottom ${n}-arrow`,`&-placement-bottomLeft ${n}-arrow`,`&-placement-bottomRight ${n}-arrow`].join(",")]:{top:g,transform:"translateY(-100%)"},[`&-placement-bottom ${n}-arrow`]:{left:{_skip_check_:!0,value:"50%"},transform:"translateX(-50%) translateY(-100%)"},[`&-placement-bottomLeft ${n}-arrow`]:{left:{_skip_check_:!0,value:b}},[`&-placement-bottomRight ${n}-arrow`]:{right:{_skip_check_:!0,value:b}}})),ee(!!p.left,{[[`&-placement-left ${n}-arrow`,`&-placement-leftTop ${n}-arrow`,`&-placement-leftBottom ${n}-arrow`].join(",")]:{right:{_skip_check_:!0,value:g},transform:"translateX(100%) rotate(90deg)"},[`&-placement-left ${n}-arrow`]:{top:{_skip_check_:!0,value:"50%"},transform:"translateY(-50%) translateX(100%) rotate(90deg)"},[`&-placement-leftTop ${n}-arrow`]:{top:y},[`&-placement-leftBottom ${n}-arrow`]:{bottom:y}})),ee(!!p.right,{[[`&-placement-right ${n}-arrow`,`&-placement-rightTop ${n}-arrow`,`&-placement-rightBottom ${n}-arrow`].join(",")]:{left:{_skip_check_:!0,value:g},transform:"translateX(-100%) rotate(-90deg)"},[`&-placement-right ${n}-arrow`]:{top:{_skip_check_:!0,value:"50%"},transform:"translateY(-50%) translateX(-100%) rotate(-90deg)"},[`&-placement-rightTop ${n}-arrow`]:{top:y},[`&-placement-rightBottom ${n}-arrow`]:{bottom:y}}))}}function st(e,t,n,o){if(o===!1)return{adjustX:!1,adjustY:!1};const r=o&&typeof o=="object"?o:{},s={};switch(e){case"top":case"bottom":s.shiftX=t.dropdownArrowOffset*2+n,s.shiftY=!0,s.adjustY=!0;break;case"left":case"right":s.shiftY=t.dropdownArrowOffsetVertical*2+n,s.shiftX=!0,s.adjustX=!0;break}const u=Object.assign(Object.assign({},s),r);return u.shiftX||(u.adjustX=!0),u.shiftY||(u.adjustY=!0),u}const te={left:{points:["cr","cl"]},right:{points:["cl","cr"]},top:{points:["bc","tc"]},bottom:{points:["tc","bc"]},topLeft:{points:["bl","tl"]},leftTop:{points:["tr","tl"]},topRight:{points:["br","tr"]},rightTop:{points:["tl","tr"]},bottomRight:{points:["tr","br"]},rightBottom:{points:["bl","br"]},bottomLeft:{points:["tl","bl"]},leftBottom:{points:["br","bl"]}},lt={topLeft:{points:["bl","tc"]},leftTop:{points:["tr","cl"]},topRight:{points:["br","tc"]},rightTop:{points:["tl","cr"]},bottomRight:{points:["tr","bc"]},rightBottom:{points:["bl","cr"]},bottomLeft:{points:["tl","bc"]},leftBottom:{points:["br","cl"]}},ct=new Set(["topLeft","topRight","bottomLeft","bottomRight","leftTop","leftBottom","rightTop","rightBottom"]);function ft(e){const{arrowWidth:t,autoAdjustOverflow:n,arrowPointAtCenter:o,offset:r,borderRadius:s,visibleFirst:u}=e,c=t/2,m={};return Object.keys(te).forEach(v=>{const g=o&&lt[v]||te[v],p=Object.assign(Object.assign({},g),{offset:[0,0],dynamicInset:!0});switch(m[v]=p,ct.has(v)&&(p.autoArrow=!1),v){case"top":case"topLeft":case"topRight":p.offset[1]=-c-r;break;case"bottom":case"bottomLeft":case"bottomRight":p.offset[1]=c+r;break;case"left":case"leftTop":case"leftBottom":p.offset[0]=-c-r;break;case"right":case"rightTop":case"rightBottom":p.offset[0]=c+r;break}const y=fe({contentRadius:s,limitVerticalRadius:!0});if(o)switch(v){case"topLeft":case"bottomLeft":p.offset[0]=-y.dropdownArrowOffset-c;break;case"topRight":case"bottomRight":p.offset[0]=y.dropdownArrowOffset+c;break;case"leftTop":case"rightTop":p.offset[1]=-y.dropdownArrowOffset-c;break;case"leftBottom":case"rightBottom":p.offset[1]=y.dropdownArrowOffset+c;break}p.overflow=st(v,y,t,n),u&&(p.htmlRegion="visibleFirst")}),m}var a=h(6621),l=h(30844),f=h(45351),C=h(86292),d=h(26889),P=h(31221);const N=new d.E4("antZoomIn",{"0%":{transform:"scale(0.2)",opacity:0},"100%":{transform:"scale(1)",opacity:1}}),M=new d.E4("antZoomOut",{"0%":{transform:"scale(1)"},"100%":{transform:"scale(0.2)",opacity:0}}),Z=new d.E4("antZoomBigIn",{"0%":{transform:"scale(0.8)",opacity:0},"100%":{transform:"scale(1)",opacity:1}}),G=new d.E4("antZoomBigOut",{"0%":{transform:"scale(1)"},"100%":{transform:"scale(0.8)",opacity:0}}),D=new d.E4("antZoomUpIn",{"0%":{transform:"scale(0.8)",transformOrigin:"50% 0%",opacity:0},"100%":{transform:"scale(1)",transformOrigin:"50% 0%"}}),We=new d.E4("antZoomUpOut",{"0%":{transform:"scale(1)",transformOrigin:"50% 0%"},"100%":{transform:"scale(0.8)",transformOrigin:"50% 0%",opacity:0}}),He=new d.E4("antZoomLeftIn",{"0%":{transform:"scale(0.8)",transformOrigin:"0% 50%",opacity:0},"100%":{transform:"scale(1)",transformOrigin:"0% 50%"}}),we=new d.E4("antZoomLeftOut",{"0%":{transform:"scale(1)",transformOrigin:"0% 50%"},"100%":{transform:"scale(0.8)",transformOrigin:"0% 50%",opacity:0}}),ut=new d.E4("antZoomRightIn",{"0%":{transform:"scale(0.8)",transformOrigin:"100% 50%",opacity:0},"100%":{transform:"scale(1)",transformOrigin:"100% 50%"}}),mt=new d.E4("antZoomRightOut",{"0%":{transform:"scale(1)",transformOrigin:"100% 50%"},"100%":{transform:"scale(0.8)",transformOrigin:"100% 50%",opacity:0}}),xe=new d.E4("antZoomDownIn",{"0%":{transform:"scale(0.8)",transformOrigin:"50% 100%",opacity:0},"100%":{transform:"scale(1)",transformOrigin:"50% 100%"}}),dt=new d.E4("antZoomDownOut",{"0%":{transform:"scale(1)",transformOrigin:"50% 100%"},"100%":{transform:"scale(0.8)",transformOrigin:"50% 100%",opacity:0}}),pt={zoom:{inKeyframes:N,outKeyframes:M},"zoom-big":{inKeyframes:Z,outKeyframes:G},"zoom-big-fast":{inKeyframes:Z,outKeyframes:G},"zoom-left":{inKeyframes:He,outKeyframes:we},"zoom-right":{inKeyframes:ut,outKeyframes:mt},"zoom-up":{inKeyframes:D,outKeyframes:We},"zoom-down":{inKeyframes:xe,outKeyframes:dt}},Oe=(e,t)=>{const{antCls:n}=e,o=`${n}-${t}`,{inKeyframes:r,outKeyframes:s}=pt[t];return[(0,P.R)(o,r,s,t==="zoom-big-fast"?e.motionDurationFast:e.motionDurationMid),{[`
        ${o}-enter,
        ${o}-appear
      `]:{transform:"scale(0)",opacity:0,animationTimingFunction:e.motionEaseOutCirc,"&-prepare":{transform:"none"}},[`${o}-leave`]:{animationTimingFunction:e.motionEaseInOutCirc}}]},ne=["blue","purple","cyan","green","magenta","pink","red","orange","yellow","volcano","geekblue","lime","gold"];function gt(e,t){return ne.reduce((n,o)=>{const r=e[`${o}1`],s=e[`${o}3`],u=e[`${o}6`],c=e[`${o}7`];return Object.assign(Object.assign({},n),t(o,{lightColor:r,lightBorderColor:s,darkColor:u,textColor:c}))},{})}const Bt=e=>{const{componentCls:t,tooltipMaxWidth:n,tooltipColor:o,tooltipBg:r,tooltipBorderRadius:s,zIndexPopup:u,controlHeight:c,boxShadowSecondary:m,paddingSM:v,paddingXS:g,tooltipRadiusOuter:p}=e;return[{[t]:Object.assign(Object.assign(Object.assign(Object.assign({},(0,Ae.Wf)(e)),{position:"absolute",zIndex:u,display:"block",width:"max-content",maxWidth:n,visibility:"visible",transformOrigin:"var(--arrow-x, 50%) var(--arrow-y, 50%)","&-hidden":{display:"none"},"--antd-arrow-background-color":r,[`${t}-inner`]:{minWidth:c,minHeight:c,padding:`${v/2}px ${g}px`,color:o,textAlign:"start",textDecoration:"none",wordWrap:"break-word",backgroundColor:r,borderRadius:s,boxShadow:m,boxSizing:"border-box"},[["&-placement-left","&-placement-leftTop","&-placement-leftBottom","&-placement-right","&-placement-rightTop","&-placement-rightBottom"].join(",")]:{[`${t}-inner`]:{borderRadius:Math.min(s,_)}},[`${t}-content`]:{position:"relative"}}),gt(e,(y,b)=>{let{darkColor:w}=b;return{[`&${t}-${y}`]:{[`${t}-inner`]:{backgroundColor:w},[`${t}-arrow`]:{"--antd-arrow-background-color":w}}}})),{"&-rtl":{direction:"rtl"}})},De((0,le.TS)(e,{borderRadiusOuter:p}),{colorBg:"var(--antd-arrow-background-color)",contentRadius:s,limitVerticalRadius:!0}),{[`${t}-pure`]:{position:"relative",maxWidth:"none",margin:e.sizePopupArrow}}]};var Pt=(e,t)=>(0,ye.Z)("Tooltip",o=>{if(t===!1)return[];const{borderRadius:r,colorTextLightSolid:s,colorBgDefault:u,borderRadiusOuter:c}=o,m=(0,le.TS)(o,{tooltipMaxWidth:250,tooltipColor:s,tooltipBorderRadius:r,tooltipBg:u,tooltipRadiusOuter:c>4?4:c});return[Bt(m),Oe(o,"zoom-big-fast")]},o=>{let{zIndexPopupBase:r,colorBgSpotlight:s}=o;return{zIndexPopup:r+70,colorBgDefault:s}},{resetStyle:!1})(e),Et=h(49544);const Mt=ne.map(e=>`${e}-inverse`),Lt=null;function kt(e){return(arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0)?[].concat((0,Et.Z)(Mt),(0,Et.Z)(ne)).includes(e):ne.includes(e)}function fn(e){return Lt.includes(e)}function Tt(e,t){const n=kt(t),o=k()({[`${e}-${t}`]:t&&n}),r={},s={};return t&&!n&&(r.background=t,s["--antd-arrow-background-color"]=t),{className:o,overlayStyle:r,arrowStyle:s}}var Zt=e=>{const{prefixCls:t,className:n,placement:o="top",title:r,color:s,overlayInnerStyle:u}=e,{getPrefixCls:c}=i.useContext(V.E_),m=c("tooltip",t),[v,g]=Pt(m,!0),p=Tt(m,s),y=p.arrowStyle,b=Object.assign(Object.assign({},u),p.overlayStyle),w=k()(g,m,`${m}-pure`,`${m}-placement-${o}`,n,p.className);return v(i.createElement("div",{className:w,style:y},i.createElement("div",{className:`${m}-arrow`}),i.createElement(ke,Object.assign({},e,{className:g,prefixCls:m,overlayInnerStyle:b}),r)))},Dt=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]]);return n};const zt=i.forwardRef((e,t)=>{var n,o;const{prefixCls:r,openClassName:s,getTooltipContainer:u,overlayClassName:c,color:m,overlayInnerStyle:v,children:g,afterOpenChange:p,afterVisibleChange:y,destroyTooltipOnHide:b,arrow:w=!0,title:S,overlay:I,builtinPlacements:A,arrowPointAtCenter:E=!1,autoAdjustOverflow:O=!0}=e,W=!!w,[,T]=(0,ge.Z)(),{getPopupContainer:Y,getPrefixCls:oe,direction:Se}=i.useContext(V.E_),$e=(0,l.ln)("Tooltip"),K=i.useRef(null),ue=()=>{var H;(H=K.current)===null||H===void 0||H.forceAlign()};i.useImperativeHandle(t,()=>({forceAlign:ue,forcePopupAlign:()=>{$e.deprecated(!1,"forcePopupAlign","forceAlign"),ue()}}));const[re,z]=(0,q.Z)(!1,{value:(n=e.open)!==null&&n!==void 0?n:e.visible,defaultValue:(o=e.defaultOpen)!==null&&o!==void 0?o:e.defaultVisible}),ae=!S&&!I&&S!==0,ie=H=>{var se,pe;z(ae?!1:H),ae||((se=e.onOpenChange)===null||se===void 0||se.call(e,H),(pe=e.onVisibleChange)===null||pe===void 0||pe.call(e,H))},Pe=i.useMemo(()=>{var H,se;let pe=E;return typeof w=="object"&&(pe=(se=(H=w.pointAtCenter)!==null&&H!==void 0?H:w.arrowPointAtCenter)!==null&&se!==void 0?se:E),A||ft({arrowPointAtCenter:pe,autoAdjustOverflow:O,arrowWidth:W?T.sizePopupArrow:0,borderRadius:T.borderRadius,offset:T.marginXXS,visibleFirst:!0})},[E,w,A,T]),R=i.useMemo(()=>S===0?S:I||S||"",[I,S]),me=i.createElement(C.BR,null,typeof R=="function"?R():R),{getPopupContainer:de,placement:Ee="top",mouseEnterDelay:Te=.1,mouseLeaveDelay:vt=.1,overlayStyle:ht,rootClassName:yt}=e,U=Dt(e,["getPopupContainer","placement","mouseEnterDelay","mouseLeaveDelay","overlayStyle","rootClassName"]),x=oe("tooltip",r),$=oe(),L=e["data-popover-inject"];let bt=re;!("open"in e)&&!("visible"in e)&&ae&&(bt=!1);const Ct=(0,a.l$)(g)&&!(0,a.M2)(g)?g:i.createElement("span",null,g),Ve=Ct.props,en=!Ve.className||typeof Ve.className=="string"?k()(Ve.className,s||`${x}-open`):Ve.className,[tn,nn]=Pt(x,!L),wt=Tt(x,m),on=wt.arrowStyle,rn=Object.assign(Object.assign({},v),wt.overlayStyle),an=k()(c,{[`${x}-rtl`]:Se==="rtl"},wt.className,yt,nn),[sn,ln]=(0,at.Cn)("Tooltip",U.zIndex),cn=i.createElement(rt,Object.assign({},U,{zIndex:sn,showArrow:W,placement:Ee,mouseEnterDelay:Te,mouseLeaveDelay:vt,prefixCls:x,overlayClassName:an,overlayStyle:Object.assign(Object.assign({},on),ht),getTooltipContainer:de||u||Y,ref:K,builtinPlacements:Pe,overlay:me,visible:bt,onVisibleChange:ie,afterVisibleChange:p!=null?p:y,overlayInnerStyle:rn,arrowContent:i.createElement("span",{className:`${x}-arrow-content`}),motion:{motionName:(0,Ce.m)($,"zoom-big-fast",e.transitionName),motionDeadline:1e3},destroyTooltipOnHide:!!b}),bt?(0,a.Tm)(Ct,{className:en}):Ct);return tn(i.createElement(f.Z.Provider,{value:ln},cn))});zt._InternalPanelDoNotUseOrYouWillBeFired=Zt;var Wt=zt;const Ht=e=>{const{componentCls:t,popoverColor:n,titleMinWidth:o,fontWeightStrong:r,popoverPadding:s,boxShadowSecondary:u,colorTextHeading:c,borderRadiusLG:m,zIndexPopup:v,marginXS:g,colorBgElevated:p,popoverBg:y}=e;return[{[t]:Object.assign(Object.assign({},(0,Ae.Wf)(e)),{position:"absolute",top:0,left:{_skip_check_:!0,value:0},zIndex:v,fontWeight:"normal",whiteSpace:"normal",textAlign:"start",cursor:"auto",userSelect:"text",transformOrigin:"var(--arrow-x, 50%) var(--arrow-y, 50%)","--antd-arrow-background-color":p,"&-rtl":{direction:"rtl"},"&-hidden":{display:"none"},[`${t}-content`]:{position:"relative"},[`${t}-inner`]:{backgroundColor:y,backgroundClip:"padding-box",borderRadius:m,boxShadow:u,padding:s},[`${t}-title`]:{minWidth:o,marginBottom:g,color:c,fontWeight:r},[`${t}-inner-content`]:{color:n}})},De(e,{colorBg:"var(--antd-arrow-background-color)"}),{[`${t}-pure`]:{position:"relative",maxWidth:"none",margin:e.sizePopupArrow,display:"inline-block",[`${t}-content`]:{display:"inline-block"}}}]},Vt=e=>{const{componentCls:t}=e;return{[t]:ne.map(n=>{const o=e[`${n}6`];return{[`&${t}-${n}`]:{"--antd-arrow-background-color":o,[`${t}-inner`]:{backgroundColor:o},[`${t}-arrow`]:{background:"transparent"}}}})}},Xt=e=>{const{componentCls:t,lineWidth:n,lineType:o,colorSplit:r,paddingSM:s,controlHeight:u,fontSize:c,lineHeight:m,padding:v}=e,g=u-Math.round(c*m),p=g/2,y=g/2-n,b=v;return{[t]:{[`${t}-inner`]:{padding:0},[`${t}-title`]:{margin:0,padding:`${p}px ${b}px ${y}px`,borderBottom:`${n}px ${o} ${r}`},[`${t}-inner-content`]:{padding:`${s}px ${b}px`}}}};var jt=(0,ye.Z)("Popover",e=>{const{colorBgElevated:t,colorText:n,wireframe:o}=e,r=(0,le.TS)(e,{popoverPadding:12,popoverBg:t,popoverColor:n});return[Ht(r),Vt(r),o&&Xt(r),Oe(r,"zoom-big")]},e=>({width:177,minWidth:177,titleMinWidth:177,zIndexPopup:e.zIndexPopupBase+30}),{resetStyle:!1,deprecatedTokens:[["width","titleMinWidth"],["minWidth","titleMinWidth"]]}),Ft=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]]);return n};const Yt=(e,t,n)=>{if(!(!t&&!n))return i.createElement(i.Fragment,null,t&&i.createElement("div",{className:`${e}-title`},J(t)),i.createElement("div",{className:`${e}-inner-content`},J(n)))},Ut=e=>{const{hashId:t,prefixCls:n,className:o,style:r,placement:s="top",title:u,content:c,children:m}=e;return i.createElement("div",{className:k()(t,n,`${n}-pure`,`${n}-placement-${s}`,o),style:r},i.createElement("div",{className:`${n}-arrow`}),i.createElement(ke,Object.assign({},e,{className:t,prefixCls:n}),m||Yt(n,u,c)))};var Gt=e=>{const{prefixCls:t}=e,n=Ft(e,["prefixCls"]),{getPrefixCls:o}=i.useContext(V.E_),r=o("popover",t),[s,u]=jt(r);return s(i.createElement(Ut,Object.assign({},n,{prefixCls:r,hashId:u})))},Kt=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]]);return n};const Qt=e=>{let{title:t,content:n,prefixCls:o}=e;return i.createElement(i.Fragment,null,t&&i.createElement("div",{className:`${o}-title`},J(t)),i.createElement("div",{className:`${o}-inner-content`},J(n)))},It=i.forwardRef((e,t)=>{const{prefixCls:n,title:o,content:r,overlayClassName:s,placement:u="top",trigger:c="hover",mouseEnterDelay:m=.1,mouseLeaveDelay:v=.1,overlayStyle:g={}}=e,p=Kt(e,["prefixCls","title","content","overlayClassName","placement","trigger","mouseEnterDelay","mouseLeaveDelay","overlayStyle"]),{getPrefixCls:y}=i.useContext(V.E_),b=y("popover",n),[w,S]=jt(b),I=y(),A=k()(s,S);return w(i.createElement(Wt,Object.assign({placement:u,trigger:c,mouseEnterDelay:m,mouseLeaveDelay:v,overlayStyle:g},p,{prefixCls:b,overlayClassName:A,ref:t,overlay:o||r?i.createElement(Qt,{prefixCls:b,title:o,content:r}):null,transitionName:(0,Ce.m)(I,"zoom-big",p.transitionName),"data-popover-inject":!0})))});It._InternalPanelDoNotUseOrYouWillBeFired=Gt;var Jt=It;const At=e=>{const{size:t,shape:n}=i.useContext(he),o=i.useMemo(()=>({size:e.size||t,shape:e.shape||n}),[e.size,e.shape,t,n]);return i.createElement(he.Provider,{value:o},e.children)};var qt=e=>{const{getPrefixCls:t,direction:n}=i.useContext(V.E_),{prefixCls:o,className:r,rootClassName:s,style:u,maxCount:c,maxStyle:m,size:v,shape:g,maxPopoverPlacement:p="top",maxPopoverTrigger:y="hover",children:b}=e,w=t("avatar",o),S=`${w}-group`,[I,A]=Re(w),E=k()(S,{[`${S}-rtl`]:n==="rtl"},r,s,A),O=(0,Le.Z)(b).map((T,Y)=>(0,a.Tm)(T,{key:`avatar-key-${Y}`})),W=O.length;if(c&&c<W){const T=O.slice(0,c),Y=O.slice(c,W);return T.push(i.createElement(Jt,{key:"avatar-popover-key",content:Y,trigger:y,placement:p,overlayClassName:`${S}-popover`},i.createElement(Me,{style:m},`+${W-c}`))),I(i.createElement(At,{shape:g,size:v},i.createElement("div",{className:E,style:u},T)))}return I(i.createElement(At,{shape:g,size:v},i.createElement("div",{className:E,style:u},O)))};const Nt=Me;Nt.Group=qt;var _t=Nt}}]);
