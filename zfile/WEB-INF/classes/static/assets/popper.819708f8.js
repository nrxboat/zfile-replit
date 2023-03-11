var bo=Object.defineProperty,ho=Object.defineProperties;var yo=Object.getOwnPropertyDescriptors;var yt=Object.getOwnPropertySymbols;var wo=Object.prototype.hasOwnProperty,Oo=Object.prototype.propertyIsEnumerable;var wt=(e,t,o)=>t in e?bo(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,S=(e,t)=>{for(var o in t||(t={}))wo.call(t,o)&&wt(e,o,t[o]);if(yt)for(var o of yt(t))Oo.call(t,o)&&wt(e,o,t[o]);return e},W=(e,t)=>ho(e,yo(t));import{ao as jt,d as M,j as Le,Q as xe,I as Ft,ap as Ot,aq as xo,ar as Eo,as as To,b as oe,_ as pe,a as ke,N as Ge,ab as Co,at as We,m as Dt,J as Ro,au as xt,w as Lt,av as Et,s as Ao,K as Po}from"./base.f9e60852.js";import{c as R,w as D,o as Ke,Y as _o,u as c,s as ko,r as j,D as Se,Z as So,p as Ce,d as N,i as le,B as ue,a as G,f as qe,g as Nt,n as Mo,J as $t,ae as Bo,F as Io,j as Re,a4 as jo,ad as Fo,b as de,e as re,x as Xe,k as Ae,q as $e,K as Do,T as Lo,N as No,$ as $o,af as Ho,t as Wo}from"./index.f20a2340.js";import{c as Ht,o as qo}from"./request.29c9df35.js";import{E as zo}from"./focus-trap.7aeb3cb3.js";const ee=(e,t,{checkForDefaultPrevented:o=!0}={})=>n=>{const a=e==null?void 0:e(n);if(o===!1||!a)return t==null?void 0:t(n)},oa=e=>t=>t.pointerType==="mouse"?e(t):void 0;function Ko(e){return e===void 0}const Uo=jt({type:M(Boolean),default:null}),Vo=jt({type:M(Function)}),Zo=e=>{const t=`update:${e}`,o=`onUpdate:${e}`,r=[t],n={[e]:Uo,[o]:Vo};return{useModelToggle:({indicator:i,toggleReason:p,shouldHideWhenRouteChanges:s,shouldProceed:l,onShow:f,onHide:v})=>{const b=_o(),{emit:g}=b,m=b.props,d=R(()=>Le(m[o])),x=R(()=>m[e]===null),u=O=>{i.value!==!0&&(i.value=!0,p&&(p.value=O),Le(f)&&f(O))},w=O=>{i.value!==!1&&(i.value=!1,p&&(p.value=O),Le(v)&&v(O))},E=O=>{if(m.disabled===!0||Le(l)&&!l())return;const C=d.value&&xe;C&&g(t,!0),(x.value||!C)&&u(O)},h=O=>{if(m.disabled===!0||!xe)return;const C=d.value&&xe;C&&g(t,!1),(x.value||!C)&&w(O)},T=O=>{!Ft(O)||(m.disabled&&O?d.value&&g(t,!1):i.value!==O&&(O?u():w()))},A=()=>{i.value?h():E()};return D(()=>m[e],T),s&&b.appContext.config.globalProperties.$route!==void 0&&D(()=>S({},b.proxy.$route),()=>{s.value&&i.value&&h()}),Ke(()=>{T(m[e])}),{hide:h,show:E,toggle:A,hasUpdateHandler:d}},useModelToggleProps:n,useModelToggleEmits:r}};var q="top",U="bottom",V="right",z="left",Qe="auto",Me=[q,U,V,z],ve="start",Pe="end",Jo="clippingParents",Wt="viewport",Oe="popper",Go="reference",Tt=Me.reduce(function(e,t){return e.concat([t+"-"+ve,t+"-"+Pe])},[]),et=[].concat(Me,[Qe]).reduce(function(e,t){return e.concat([t,t+"-"+ve,t+"-"+Pe])},[]),Yo="beforeRead",Xo="read",Qo="afterRead",er="beforeMain",tr="main",or="afterMain",rr="beforeWrite",nr="write",ar="afterWrite",ir=[Yo,Xo,Qo,er,tr,or,rr,nr,ar];function X(e){return e?(e.nodeName||"").toLowerCase():null}function Z(e){if(e==null)return window;if(e.toString()!=="[object Window]"){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function ge(e){var t=Z(e).Element;return e instanceof t||e instanceof Element}function K(e){var t=Z(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function tt(e){if(typeof ShadowRoot=="undefined")return!1;var t=Z(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}function sr(e){var t=e.state;Object.keys(t.elements).forEach(function(o){var r=t.styles[o]||{},n=t.attributes[o]||{},a=t.elements[o];!K(a)||!X(a)||(Object.assign(a.style,r),Object.keys(n).forEach(function(i){var p=n[i];p===!1?a.removeAttribute(i):a.setAttribute(i,p===!0?"":p)}))})}function lr(e){var t=e.state,o={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,o.popper),t.styles=o,t.elements.arrow&&Object.assign(t.elements.arrow.style,o.arrow),function(){Object.keys(t.elements).forEach(function(r){var n=t.elements[r],a=t.attributes[r]||{},i=Object.keys(t.styles.hasOwnProperty(r)?t.styles[r]:o[r]),p=i.reduce(function(s,l){return s[l]="",s},{});!K(n)||!X(n)||(Object.assign(n.style,p),Object.keys(a).forEach(function(s){n.removeAttribute(s)}))})}}var qt={name:"applyStyles",enabled:!0,phase:"write",fn:sr,effect:lr,requires:["computeStyles"]};function Y(e){return e.split("-")[0]}var se=Math.max,ze=Math.min,me=Math.round;function be(e,t){t===void 0&&(t=!1);var o=e.getBoundingClientRect(),r=1,n=1;if(K(e)&&t){var a=e.offsetHeight,i=e.offsetWidth;i>0&&(r=me(o.width)/i||1),a>0&&(n=me(o.height)/a||1)}return{width:o.width/r,height:o.height/n,top:o.top/n,right:o.right/r,bottom:o.bottom/n,left:o.left/r,x:o.left/r,y:o.top/n}}function ot(e){var t=be(e),o=e.offsetWidth,r=e.offsetHeight;return Math.abs(t.width-o)<=1&&(o=t.width),Math.abs(t.height-r)<=1&&(r=t.height),{x:e.offsetLeft,y:e.offsetTop,width:o,height:r}}function zt(e,t){var o=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(o&&tt(o)){var r=t;do{if(r&&e.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function te(e){return Z(e).getComputedStyle(e)}function pr(e){return["table","td","th"].indexOf(X(e))>=0}function ne(e){return((ge(e)?e.ownerDocument:e.document)||window.document).documentElement}function Ue(e){return X(e)==="html"?e:e.assignedSlot||e.parentNode||(tt(e)?e.host:null)||ne(e)}function Ct(e){return!K(e)||te(e).position==="fixed"?null:e.offsetParent}function ur(e){var t=navigator.userAgent.toLowerCase().indexOf("firefox")!==-1,o=navigator.userAgent.indexOf("Trident")!==-1;if(o&&K(e)){var r=te(e);if(r.position==="fixed")return null}var n=Ue(e);for(tt(n)&&(n=n.host);K(n)&&["html","body"].indexOf(X(n))<0;){var a=te(n);if(a.transform!=="none"||a.perspective!=="none"||a.contain==="paint"||["transform","perspective"].indexOf(a.willChange)!==-1||t&&a.willChange==="filter"||t&&a.filter&&a.filter!=="none")return n;n=n.parentNode}return null}function Be(e){for(var t=Z(e),o=Ct(e);o&&pr(o)&&te(o).position==="static";)o=Ct(o);return o&&(X(o)==="html"||X(o)==="body"&&te(o).position==="static")?t:o||ur(e)||t}function rt(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function Ee(e,t,o){return se(e,ze(t,o))}function cr(e,t,o){var r=Ee(e,t,o);return r>o?o:r}function Kt(){return{top:0,right:0,bottom:0,left:0}}function Ut(e){return Object.assign({},Kt(),e)}function Vt(e,t){return t.reduce(function(o,r){return o[r]=e,o},{})}var fr=function(e,t){return e=typeof e=="function"?e(Object.assign({},t.rects,{placement:t.placement})):e,Ut(typeof e!="number"?e:Vt(e,Me))};function dr(e){var t,o=e.state,r=e.name,n=e.options,a=o.elements.arrow,i=o.modifiersData.popperOffsets,p=Y(o.placement),s=rt(p),l=[z,V].indexOf(p)>=0,f=l?"height":"width";if(!(!a||!i)){var v=fr(n.padding,o),b=ot(a),g=s==="y"?q:z,m=s==="y"?U:V,d=o.rects.reference[f]+o.rects.reference[s]-i[s]-o.rects.popper[f],x=i[s]-o.rects.reference[s],u=Be(a),w=u?s==="y"?u.clientHeight||0:u.clientWidth||0:0,E=d/2-x/2,h=v[g],T=w-b[f]-v[m],A=w/2-b[f]/2+E,O=Ee(h,A,T),C=s;o.modifiersData[r]=(t={},t[C]=O,t.centerOffset=O-A,t)}}function vr(e){var t=e.state,o=e.options,r=o.element,n=r===void 0?"[data-popper-arrow]":r;n!=null&&(typeof n=="string"&&(n=t.elements.popper.querySelector(n),!n)||!zt(t.elements.popper,n)||(t.elements.arrow=n))}var gr={name:"arrow",enabled:!0,phase:"main",fn:dr,effect:vr,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function he(e){return e.split("-")[1]}var mr={top:"auto",right:"auto",bottom:"auto",left:"auto"};function br(e){var t=e.x,o=e.y,r=window,n=r.devicePixelRatio||1;return{x:me(t*n)/n||0,y:me(o*n)/n||0}}function Rt(e){var t,o=e.popper,r=e.popperRect,n=e.placement,a=e.variation,i=e.offsets,p=e.position,s=e.gpuAcceleration,l=e.adaptive,f=e.roundOffsets,v=e.isFixed,b=i.x,g=b===void 0?0:b,m=i.y,d=m===void 0?0:m,x=typeof f=="function"?f({x:g,y:d}):{x:g,y:d};g=x.x,d=x.y;var u=i.hasOwnProperty("x"),w=i.hasOwnProperty("y"),E=z,h=q,T=window;if(l){var A=Be(o),O="clientHeight",C="clientWidth";if(A===Z(o)&&(A=ne(o),te(A).position!=="static"&&p==="absolute"&&(O="scrollHeight",C="scrollWidth")),A=A,n===q||(n===z||n===V)&&a===Pe){h=U;var I=v&&A===T&&T.visualViewport?T.visualViewport.height:A[O];d-=I-r.height,d*=s?1:-1}if(n===z||(n===q||n===U)&&a===Pe){E=V;var P=v&&A===T&&T.visualViewport?T.visualViewport.width:A[C];g-=P-r.width,g*=s?1:-1}}var k=Object.assign({position:p},l&&mr),L=f===!0?br({x:g,y:d}):{x:g,y:d};if(g=L.x,d=L.y,s){var _;return Object.assign({},k,(_={},_[h]=w?"0":"",_[E]=u?"0":"",_.transform=(T.devicePixelRatio||1)<=1?"translate("+g+"px, "+d+"px)":"translate3d("+g+"px, "+d+"px, 0)",_))}return Object.assign({},k,(t={},t[h]=w?d+"px":"",t[E]=u?g+"px":"",t.transform="",t))}function hr(e){var t=e.state,o=e.options,r=o.gpuAcceleration,n=r===void 0?!0:r,a=o.adaptive,i=a===void 0?!0:a,p=o.roundOffsets,s=p===void 0?!0:p,l={placement:Y(t.placement),variation:he(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:n,isFixed:t.options.strategy==="fixed"};t.modifiersData.popperOffsets!=null&&(t.styles.popper=Object.assign({},t.styles.popper,Rt(Object.assign({},l,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:i,roundOffsets:s})))),t.modifiersData.arrow!=null&&(t.styles.arrow=Object.assign({},t.styles.arrow,Rt(Object.assign({},l,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:s})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}var Zt={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:hr,data:{}},Ne={passive:!0};function yr(e){var t=e.state,o=e.instance,r=e.options,n=r.scroll,a=n===void 0?!0:n,i=r.resize,p=i===void 0?!0:i,s=Z(t.elements.popper),l=[].concat(t.scrollParents.reference,t.scrollParents.popper);return a&&l.forEach(function(f){f.addEventListener("scroll",o.update,Ne)}),p&&s.addEventListener("resize",o.update,Ne),function(){a&&l.forEach(function(f){f.removeEventListener("scroll",o.update,Ne)}),p&&s.removeEventListener("resize",o.update,Ne)}}var Jt={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:yr,data:{}},wr={left:"right",right:"left",bottom:"top",top:"bottom"};function He(e){return e.replace(/left|right|bottom|top/g,function(t){return wr[t]})}var Or={start:"end",end:"start"};function At(e){return e.replace(/start|end/g,function(t){return Or[t]})}function nt(e){var t=Z(e),o=t.pageXOffset,r=t.pageYOffset;return{scrollLeft:o,scrollTop:r}}function at(e){return be(ne(e)).left+nt(e).scrollLeft}function xr(e){var t=Z(e),o=ne(e),r=t.visualViewport,n=o.clientWidth,a=o.clientHeight,i=0,p=0;return r&&(n=r.width,a=r.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(i=r.offsetLeft,p=r.offsetTop)),{width:n,height:a,x:i+at(e),y:p}}function Er(e){var t,o=ne(e),r=nt(e),n=(t=e.ownerDocument)==null?void 0:t.body,a=se(o.scrollWidth,o.clientWidth,n?n.scrollWidth:0,n?n.clientWidth:0),i=se(o.scrollHeight,o.clientHeight,n?n.scrollHeight:0,n?n.clientHeight:0),p=-r.scrollLeft+at(e),s=-r.scrollTop;return te(n||o).direction==="rtl"&&(p+=se(o.clientWidth,n?n.clientWidth:0)-a),{width:a,height:i,x:p,y:s}}function it(e){var t=te(e),o=t.overflow,r=t.overflowX,n=t.overflowY;return/auto|scroll|overlay|hidden/.test(o+n+r)}function Gt(e){return["html","body","#document"].indexOf(X(e))>=0?e.ownerDocument.body:K(e)&&it(e)?e:Gt(Ue(e))}function Te(e,t){var o;t===void 0&&(t=[]);var r=Gt(e),n=r===((o=e.ownerDocument)==null?void 0:o.body),a=Z(r),i=n?[a].concat(a.visualViewport||[],it(r)?r:[]):r,p=t.concat(i);return n?p:p.concat(Te(Ue(i)))}function Ye(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function Tr(e){var t=be(e);return t.top=t.top+e.clientTop,t.left=t.left+e.clientLeft,t.bottom=t.top+e.clientHeight,t.right=t.left+e.clientWidth,t.width=e.clientWidth,t.height=e.clientHeight,t.x=t.left,t.y=t.top,t}function Pt(e,t){return t===Wt?Ye(xr(e)):ge(t)?Tr(t):Ye(Er(ne(e)))}function Cr(e){var t=Te(Ue(e)),o=["absolute","fixed"].indexOf(te(e).position)>=0,r=o&&K(e)?Be(e):e;return ge(r)?t.filter(function(n){return ge(n)&&zt(n,r)&&X(n)!=="body"}):[]}function Rr(e,t,o){var r=t==="clippingParents"?Cr(e):[].concat(t),n=[].concat(r,[o]),a=n[0],i=n.reduce(function(p,s){var l=Pt(e,s);return p.top=se(l.top,p.top),p.right=ze(l.right,p.right),p.bottom=ze(l.bottom,p.bottom),p.left=se(l.left,p.left),p},Pt(e,a));return i.width=i.right-i.left,i.height=i.bottom-i.top,i.x=i.left,i.y=i.top,i}function Yt(e){var t=e.reference,o=e.element,r=e.placement,n=r?Y(r):null,a=r?he(r):null,i=t.x+t.width/2-o.width/2,p=t.y+t.height/2-o.height/2,s;switch(n){case q:s={x:i,y:t.y-o.height};break;case U:s={x:i,y:t.y+t.height};break;case V:s={x:t.x+t.width,y:p};break;case z:s={x:t.x-o.width,y:p};break;default:s={x:t.x,y:t.y}}var l=n?rt(n):null;if(l!=null){var f=l==="y"?"height":"width";switch(a){case ve:s[l]=s[l]-(t[f]/2-o[f]/2);break;case Pe:s[l]=s[l]+(t[f]/2-o[f]/2);break}}return s}function _e(e,t){t===void 0&&(t={});var o=t,r=o.placement,n=r===void 0?e.placement:r,a=o.boundary,i=a===void 0?Jo:a,p=o.rootBoundary,s=p===void 0?Wt:p,l=o.elementContext,f=l===void 0?Oe:l,v=o.altBoundary,b=v===void 0?!1:v,g=o.padding,m=g===void 0?0:g,d=Ut(typeof m!="number"?m:Vt(m,Me)),x=f===Oe?Go:Oe,u=e.rects.popper,w=e.elements[b?x:f],E=Rr(ge(w)?w:w.contextElement||ne(e.elements.popper),i,s),h=be(e.elements.reference),T=Yt({reference:h,element:u,strategy:"absolute",placement:n}),A=Ye(Object.assign({},u,T)),O=f===Oe?A:h,C={top:E.top-O.top+d.top,bottom:O.bottom-E.bottom+d.bottom,left:E.left-O.left+d.left,right:O.right-E.right+d.right},I=e.modifiersData.offset;if(f===Oe&&I){var P=I[n];Object.keys(C).forEach(function(k){var L=[V,U].indexOf(k)>=0?1:-1,_=[q,U].indexOf(k)>=0?"y":"x";C[k]+=P[_]*L})}return C}function Ar(e,t){t===void 0&&(t={});var o=t,r=o.placement,n=o.boundary,a=o.rootBoundary,i=o.padding,p=o.flipVariations,s=o.allowedAutoPlacements,l=s===void 0?et:s,f=he(r),v=f?p?Tt:Tt.filter(function(m){return he(m)===f}):Me,b=v.filter(function(m){return l.indexOf(m)>=0});b.length===0&&(b=v);var g=b.reduce(function(m,d){return m[d]=_e(e,{placement:d,boundary:n,rootBoundary:a,padding:i})[Y(d)],m},{});return Object.keys(g).sort(function(m,d){return g[m]-g[d]})}function Pr(e){if(Y(e)===Qe)return[];var t=He(e);return[At(e),t,At(t)]}function _r(e){var t=e.state,o=e.options,r=e.name;if(!t.modifiersData[r]._skip){for(var n=o.mainAxis,a=n===void 0?!0:n,i=o.altAxis,p=i===void 0?!0:i,s=o.fallbackPlacements,l=o.padding,f=o.boundary,v=o.rootBoundary,b=o.altBoundary,g=o.flipVariations,m=g===void 0?!0:g,d=o.allowedAutoPlacements,x=t.options.placement,u=Y(x),w=u===x,E=s||(w||!m?[He(x)]:Pr(x)),h=[x].concat(E).reduce(function(ae,Q){return ae.concat(Y(Q)===Qe?Ar(t,{placement:Q,boundary:f,rootBoundary:v,padding:l,flipVariations:m,allowedAutoPlacements:d}):Q)},[]),T=t.rects.reference,A=t.rects.popper,O=new Map,C=!0,I=h[0],P=0;P<h.length;P++){var k=h[P],L=Y(k),_=he(k)===ve,$=[q,U].indexOf(L)>=0,F=$?"width":"height",B=_e(t,{placement:k,boundary:f,rootBoundary:v,altBoundary:b,padding:l}),y=$?_?V:z:_?U:q;T[F]>A[F]&&(y=He(y));var H=He(y),J=[];if(a&&J.push(B[L]<=0),p&&J.push(B[y]<=0,B[H]<=0),J.every(function(ae){return ae})){I=k,C=!1;break}O.set(k,J)}if(C)for(var Ie=m?3:1,Ve=function(ae){var Q=h.find(function(Fe){var we=O.get(Fe);if(we)return we.slice(0,ae).every(function(ce){return ce})});if(Q)return I=Q,"break"},ye=Ie;ye>0;ye--){var je=Ve(ye);if(je==="break")break}t.placement!==I&&(t.modifiersData[r]._skip=!0,t.placement=I,t.reset=!0)}}var kr={name:"flip",enabled:!0,phase:"main",fn:_r,requiresIfExists:["offset"],data:{_skip:!1}};function _t(e,t,o){return o===void 0&&(o={x:0,y:0}),{top:e.top-t.height-o.y,right:e.right-t.width+o.x,bottom:e.bottom-t.height+o.y,left:e.left-t.width-o.x}}function kt(e){return[q,V,U,z].some(function(t){return e[t]>=0})}function Sr(e){var t=e.state,o=e.name,r=t.rects.reference,n=t.rects.popper,a=t.modifiersData.preventOverflow,i=_e(t,{elementContext:"reference"}),p=_e(t,{altBoundary:!0}),s=_t(i,r),l=_t(p,n,a),f=kt(s),v=kt(l);t.modifiersData[o]={referenceClippingOffsets:s,popperEscapeOffsets:l,isReferenceHidden:f,hasPopperEscaped:v},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":f,"data-popper-escaped":v})}var Mr={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:Sr};function Br(e,t,o){var r=Y(e),n=[z,q].indexOf(r)>=0?-1:1,a=typeof o=="function"?o(Object.assign({},t,{placement:e})):o,i=a[0],p=a[1];return i=i||0,p=(p||0)*n,[z,V].indexOf(r)>=0?{x:p,y:i}:{x:i,y:p}}function Ir(e){var t=e.state,o=e.options,r=e.name,n=o.offset,a=n===void 0?[0,0]:n,i=et.reduce(function(f,v){return f[v]=Br(v,t.rects,a),f},{}),p=i[t.placement],s=p.x,l=p.y;t.modifiersData.popperOffsets!=null&&(t.modifiersData.popperOffsets.x+=s,t.modifiersData.popperOffsets.y+=l),t.modifiersData[r]=i}var jr={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:Ir};function Fr(e){var t=e.state,o=e.name;t.modifiersData[o]=Yt({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})}var Xt={name:"popperOffsets",enabled:!0,phase:"read",fn:Fr,data:{}};function Dr(e){return e==="x"?"y":"x"}function Lr(e){var t=e.state,o=e.options,r=e.name,n=o.mainAxis,a=n===void 0?!0:n,i=o.altAxis,p=i===void 0?!1:i,s=o.boundary,l=o.rootBoundary,f=o.altBoundary,v=o.padding,b=o.tether,g=b===void 0?!0:b,m=o.tetherOffset,d=m===void 0?0:m,x=_e(t,{boundary:s,rootBoundary:l,padding:v,altBoundary:f}),u=Y(t.placement),w=he(t.placement),E=!w,h=rt(u),T=Dr(h),A=t.modifiersData.popperOffsets,O=t.rects.reference,C=t.rects.popper,I=typeof d=="function"?d(Object.assign({},t.rects,{placement:t.placement})):d,P=typeof I=="number"?{mainAxis:I,altAxis:I}:Object.assign({mainAxis:0,altAxis:0},I),k=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,L={x:0,y:0};if(A){if(a){var _,$=h==="y"?q:z,F=h==="y"?U:V,B=h==="y"?"height":"width",y=A[h],H=y+x[$],J=y-x[F],Ie=g?-C[B]/2:0,Ve=w===ve?O[B]:C[B],ye=w===ve?-C[B]:-O[B],je=t.elements.arrow,ae=g&&je?ot(je):{width:0,height:0},Q=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:Kt(),Fe=Q[$],we=Q[F],ce=Ee(0,O[B],ae[B]),po=E?O[B]/2-Ie-ce-Fe-P.mainAxis:Ve-ce-Fe-P.mainAxis,uo=E?-O[B]/2+Ie+ce+we+P.mainAxis:ye+ce+we+P.mainAxis,Ze=t.elements.arrow&&Be(t.elements.arrow),co=Ze?h==="y"?Ze.clientTop||0:Ze.clientLeft||0:0,ut=(_=k==null?void 0:k[h])!=null?_:0,fo=y+po-ut-co,vo=y+uo-ut,ct=Ee(g?ze(H,fo):H,y,g?se(J,vo):J);A[h]=ct,L[h]=ct-y}if(p){var ft,go=h==="x"?q:z,mo=h==="x"?U:V,ie=A[T],De=T==="y"?"height":"width",dt=ie+x[go],vt=ie-x[mo],Je=[q,z].indexOf(u)!==-1,gt=(ft=k==null?void 0:k[T])!=null?ft:0,mt=Je?dt:ie-O[De]-C[De]-gt+P.altAxis,bt=Je?ie+O[De]+C[De]-gt-P.altAxis:vt,ht=g&&Je?cr(mt,ie,bt):Ee(g?mt:dt,ie,g?bt:vt);A[T]=ht,L[T]=ht-ie}t.modifiersData[r]=L}}var Nr={name:"preventOverflow",enabled:!0,phase:"main",fn:Lr,requiresIfExists:["offset"]};function $r(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function Hr(e){return e===Z(e)||!K(e)?nt(e):$r(e)}function Wr(e){var t=e.getBoundingClientRect(),o=me(t.width)/e.offsetWidth||1,r=me(t.height)/e.offsetHeight||1;return o!==1||r!==1}function qr(e,t,o){o===void 0&&(o=!1);var r=K(t),n=K(t)&&Wr(t),a=ne(t),i=be(e,n),p={scrollLeft:0,scrollTop:0},s={x:0,y:0};return(r||!r&&!o)&&((X(t)!=="body"||it(a))&&(p=Hr(t)),K(t)?(s=be(t,!0),s.x+=t.clientLeft,s.y+=t.clientTop):a&&(s.x=at(a))),{x:i.left+p.scrollLeft-s.x,y:i.top+p.scrollTop-s.y,width:i.width,height:i.height}}function zr(e){var t=new Map,o=new Set,r=[];e.forEach(function(a){t.set(a.name,a)});function n(a){o.add(a.name);var i=[].concat(a.requires||[],a.requiresIfExists||[]);i.forEach(function(p){if(!o.has(p)){var s=t.get(p);s&&n(s)}}),r.push(a)}return e.forEach(function(a){o.has(a.name)||n(a)}),r}function Kr(e){var t=zr(e);return ir.reduce(function(o,r){return o.concat(t.filter(function(n){return n.phase===r}))},[])}function Ur(e){var t;return function(){return t||(t=new Promise(function(o){Promise.resolve().then(function(){t=void 0,o(e())})})),t}}function Vr(e){var t=e.reduce(function(o,r){var n=o[r.name];return o[r.name]=n?Object.assign({},n,r,{options:Object.assign({},n.options,r.options),data:Object.assign({},n.data,r.data)}):r,o},{});return Object.keys(t).map(function(o){return t[o]})}var St={placement:"bottom",modifiers:[],strategy:"absolute"};function Mt(){for(var e=arguments.length,t=new Array(e),o=0;o<e;o++)t[o]=arguments[o];return!t.some(function(r){return!(r&&typeof r.getBoundingClientRect=="function")})}function st(e){e===void 0&&(e={});var t=e,o=t.defaultModifiers,r=o===void 0?[]:o,n=t.defaultOptions,a=n===void 0?St:n;return function(i,p,s){s===void 0&&(s=a);var l={placement:"bottom",orderedModifiers:[],options:Object.assign({},St,a),modifiersData:{},elements:{reference:i,popper:p},attributes:{},styles:{}},f=[],v=!1,b={state:l,setOptions:function(d){var x=typeof d=="function"?d(l.options):d;m(),l.options=Object.assign({},a,l.options,x),l.scrollParents={reference:ge(i)?Te(i):i.contextElement?Te(i.contextElement):[],popper:Te(p)};var u=Kr(Vr([].concat(r,l.options.modifiers)));return l.orderedModifiers=u.filter(function(w){return w.enabled}),g(),b.update()},forceUpdate:function(){if(!v){var d=l.elements,x=d.reference,u=d.popper;if(Mt(x,u)){l.rects={reference:qr(x,Be(u),l.options.strategy==="fixed"),popper:ot(u)},l.reset=!1,l.placement=l.options.placement,l.orderedModifiers.forEach(function(C){return l.modifiersData[C.name]=Object.assign({},C.data)});for(var w=0;w<l.orderedModifiers.length;w++){if(l.reset===!0){l.reset=!1,w=-1;continue}var E=l.orderedModifiers[w],h=E.fn,T=E.options,A=T===void 0?{}:T,O=E.name;typeof h=="function"&&(l=h({state:l,options:A,name:O,instance:b})||l)}}}},update:Ur(function(){return new Promise(function(d){b.forceUpdate(),d(l)})}),destroy:function(){m(),v=!0}};if(!Mt(i,p))return b;b.setOptions(s).then(function(d){!v&&s.onFirstUpdate&&s.onFirstUpdate(d)});function g(){l.orderedModifiers.forEach(function(d){var x=d.name,u=d.options,w=u===void 0?{}:u,E=d.effect;if(typeof E=="function"){var h=E({state:l,name:x,instance:b,options:w}),T=function(){};f.push(h||T)}})}function m(){f.forEach(function(d){return d()}),f=[]}return b}}st();var Zr=[Jt,Xt,Zt,qt];st({defaultModifiers:Zr});var Jr=[Jt,Xt,Zt,qt,jr,kr,Nr,gr,Mr],Gr=st({defaultModifiers:Jr});const Yr=(e,t,o={})=>{const r={name:"updateState",enabled:!0,phase:"write",fn:({state:s})=>{const l=Xr(s);Object.assign(i.value,l)},requires:["computeStyles"]},n=R(()=>{const{onFirstUpdate:s,placement:l,strategy:f,modifiers:v}=c(o);return{onFirstUpdate:s,placement:l||"bottom",strategy:f||"absolute",modifiers:[...v||[],r,{name:"applyStyles",enabled:!1}]}}),a=ko(),i=j({styles:{popper:{position:c(n).strategy,left:"0",top:"0"},arrow:{position:"absolute"}},attributes:{}}),p=()=>{!a.value||(a.value.destroy(),a.value=void 0)};return D(n,s=>{const l=c(a);l&&l.setOptions(s)},{deep:!0}),D([e,t],([s,l])=>{p(),!(!s||!l)&&(a.value=Gr(s,l,c(n)))}),Se(()=>{p()}),{state:R(()=>{var s;return S({},((s=c(a))==null?void 0:s.state)||{})}),styles:R(()=>c(i).styles),attributes:R(()=>c(i).attributes),update:()=>{var s;return(s=c(a))==null?void 0:s.update()},forceUpdate:()=>{var s;return(s=c(a))==null?void 0:s.forceUpdate()},instanceRef:R(()=>c(a))}};function Xr(e){const t=Object.keys(e.elements),o=Ot(t.map(n=>[n,e.styles[n]||{}])),r=Ot(t.map(n=>[n,e.attributes[n]]));return{styles:o,attributes:r}}function Qr(){let e;const t=(r,n)=>{o(),e=window.setTimeout(r,n)},o=()=>window.clearTimeout(e);return xo(()=>o()),{registerTimeout:t,cancelTimeout:o}}let Bt;const Qt=()=>{const e=Eo(),t=To(),o=R(()=>`${e.value}-popper-container-${t.prefix}`),r=R(()=>`#${o.value}`);return{id:o,selector:r}},en=e=>{const t=document.createElement("div");return t.id=e,document.body.appendChild(t),t},tn=()=>{So(()=>{if(!xe)return;const{id:e,selector:t}=Qt();!Bt&&!document.body.querySelector(t.value)&&(Bt=en(e.value))})},on=oe({showAfter:{type:Number,default:0},hideAfter:{type:Number,default:200}}),rn=({showAfter:e,hideAfter:t,open:o,close:r})=>{const{registerTimeout:n}=Qr();return{onOpen:p=>{n(()=>{o(p)},c(e))},onClose:p=>{n(()=>{r(p)},c(t))}}},eo=Symbol("elForwardRef"),nn=e=>{Ce(eo,{setForwardRef:o=>{e.value=o}})},an=e=>({mounted(t){e(t)},updated(t){e(t)},unmounted(){e(null)}}),lt=Symbol("popper"),to=Symbol("popperContent"),sn=["dialog","grid","group","listbox","menu","navigation","tooltip","tree"],oo=oe({role:{type:String,values:sn,default:"tooltip"}}),ln=N({name:"ElPopper",inheritAttrs:!1}),pn=N(W(S({},ln),{props:oo,setup(e,{expose:t}){const o=e,r=j(),n=j(),a=j(),i=j(),p=R(()=>o.role),s={triggerRef:r,popperInstanceRef:n,contentRef:a,referenceRef:i,role:p};return t(s),Ce(lt,s),(l,f)=>le(l.$slots,"default")}}));var un=pe(pn,[["__file","/home/runner/work/element-plus/element-plus/packages/components/popper/src/popper.vue"]]);const ro=oe({arrowOffset:{type:Number,default:5}}),cn=N({name:"ElPopperArrow",inheritAttrs:!1}),fn=N(W(S({},cn),{props:ro,setup(e,{expose:t}){const o=e,r=ke("popper"),{arrowOffset:n,arrowRef:a,arrowStyle:i}=ue(to,void 0);return D(()=>o.arrowOffset,p=>{n.value=p}),Se(()=>{a.value=void 0}),t({arrowRef:a}),(p,s)=>(G(),qe("span",{ref_key:"arrowRef",ref:a,class:Nt(c(r).e("arrow")),style:Mo(c(i)),"data-popper-arrow":""},null,6))}}));var dn=pe(fn,[["__file","/home/runner/work/element-plus/element-plus/packages/components/popper/src/arrow.vue"]]);const vn="ElOnlyChild",gn=N({name:vn,setup(e,{slots:t,attrs:o}){var r;const n=ue(eo),a=an((r=n==null?void 0:n.setForwardRef)!=null?r:Ge);return()=>{var i;const p=(i=t.default)==null?void 0:i.call(t,o);if(!p||p.length>1)return null;const s=no(p);return s?$t(Bo(s,o),[[a]]):null}}});function no(e){if(!e)return null;const t=e;for(const o of t){if(Co(o))switch(o.type){case Fo:continue;case jo:case"svg":return It(o);case Io:return no(o.children);default:return o}return It(o)}return null}function It(e){const t=ke("only-child");return Re("span",{class:t.e("content")},[e])}const ao=oe({virtualRef:{type:M(Object)},virtualTriggering:Boolean,onMouseenter:{type:M(Function)},onMouseleave:{type:M(Function)},onClick:{type:M(Function)},onKeydown:{type:M(Function)},onFocus:{type:M(Function)},onBlur:{type:M(Function)},onContextmenu:{type:M(Function)},id:String,open:Boolean}),mn=N({name:"ElPopperTrigger",inheritAttrs:!1}),bn=N(W(S({},mn),{props:ao,setup(e,{expose:t}){const o=e,{role:r,triggerRef:n}=ue(lt,void 0);nn(n);const a=R(()=>p.value?o.id:void 0),i=R(()=>{if(r&&r.value==="tooltip")return o.open&&o.id?o.id:void 0}),p=R(()=>{if(r&&r.value!=="tooltip")return r.value}),s=R(()=>p.value?`${o.open}`:void 0);let l;return Ke(()=>{D(()=>o.virtualRef,f=>{f&&(n.value=Ht(f))},{immediate:!0}),D(n,(f,v)=>{l==null||l(),l=void 0,We(f)&&(["onMouseenter","onMouseleave","onClick","onKeydown","onFocus","onBlur","onContextmenu"].forEach(b=>{var g;const m=o[b];m&&(f.addEventListener(b.slice(2).toLowerCase(),m),(g=v==null?void 0:v.removeEventListener)==null||g.call(v,b.slice(2).toLowerCase(),m))}),l=D([a,i,p,s],b=>{["aria-controls","aria-describedby","aria-haspopup","aria-expanded"].forEach((g,m)=>{Dt(b[m])?f.removeAttribute(g):f.setAttribute(g,b[m])})},{immediate:!0})),We(v)&&["aria-controls","aria-describedby","aria-haspopup","aria-expanded"].forEach(b=>v.removeAttribute(b))},{immediate:!0})}),Se(()=>{l==null||l(),l=void 0}),t({triggerRef:n}),(f,v)=>f.virtualTriggering?Ae("v-if",!0):(G(),de(c(gn),Xe({key:0},f.$attrs,{"aria-controls":c(a),"aria-describedby":c(i),"aria-expanded":c(s),"aria-haspopup":c(p)}),{default:re(()=>[le(f.$slots,"default")]),_:3},16,["aria-controls","aria-describedby","aria-expanded","aria-haspopup"]))}}));var hn=pe(bn,[["__file","/home/runner/work/element-plus/element-plus/packages/components/popper/src/trigger.vue"]]);const yn=["fixed","absolute"],wn=oe({boundariesPadding:{type:Number,default:0},fallbackPlacements:{type:M(Array),default:void 0},gpuAcceleration:{type:Boolean,default:!0},offset:{type:Number,default:12},placement:{type:String,values:et,default:"bottom"},popperOptions:{type:M(Object),default:()=>({})},strategy:{type:String,values:yn,default:"absolute"}}),io=oe(W(S({},wn),{id:String,style:{type:M([String,Array,Object])},className:{type:M([String,Array,Object])},effect:{type:String,default:"dark"},visible:Boolean,enterable:{type:Boolean,default:!0},pure:Boolean,focusOnShow:{type:Boolean,default:!1},trapping:{type:Boolean,default:!1},popperClass:{type:M([String,Array,Object])},popperStyle:{type:M([String,Array,Object])},referenceEl:{type:M(Object)},triggerTargetEl:{type:M(Object)},stopPopperMouseEvent:{type:Boolean,default:!0},ariaLabel:{type:String,default:void 0},virtualTriggering:Boolean,zIndex:Number})),On={mouseenter:e=>e instanceof MouseEvent,mouseleave:e=>e instanceof MouseEvent,focus:()=>!0,blur:()=>!0,close:()=>!0},xn=(e,t=[])=>{const{placement:o,strategy:r,popperOptions:n}=e,a=W(S({placement:o,strategy:r},n),{modifiers:[...Tn(e),...t]});return Cn(a,n==null?void 0:n.modifiers),a},En=e=>{if(!!xe)return Ht(e)};function Tn(e){const{offset:t,gpuAcceleration:o,fallbackPlacements:r}=e;return[{name:"offset",options:{offset:[0,t!=null?t:12]}},{name:"preventOverflow",options:{padding:{top:2,bottom:2,left:5,right:5}}},{name:"flip",options:{padding:5,fallbackPlacements:r}},{name:"computeStyles",options:{gpuAcceleration:o}}]}function Cn(e,t){t&&(e.modifiers=[...e.modifiers,...t!=null?t:[]])}const Rn=0,An=e=>{const{popperInstanceRef:t,contentRef:o,triggerRef:r,role:n}=ue(lt,void 0),a=j(),i=j(),p=R(()=>({name:"eventListeners",enabled:!!e.visible})),s=R(()=>{var u;const w=c(a),E=(u=c(i))!=null?u:Rn;return{name:"arrow",enabled:!Ko(w),options:{element:w,padding:E}}}),l=R(()=>S({onFirstUpdate:()=>{m()}},xn(e,[c(s),c(p)]))),f=R(()=>En(e.referenceEl)||c(r)),{attributes:v,state:b,styles:g,update:m,forceUpdate:d,instanceRef:x}=Yr(f,o,l);return D(x,u=>t.value=u),Ke(()=>{D(()=>{var u;return(u=c(f))==null?void 0:u.getBoundingClientRect()},()=>{m()})}),{attributes:v,arrowRef:a,contentRef:o,instanceRef:x,state:b,styles:g,role:n,forceUpdate:d,update:m}},Pn=(e,{attributes:t,styles:o,role:r})=>{const{nextZIndex:n}=Ro(),a=ke("popper"),i=R(()=>c(t).popper),p=j(e.zIndex||n()),s=R(()=>[a.b(),a.is("pure",e.pure),a.is(e.effect),e.popperClass]),l=R(()=>[{zIndex:c(p)},e.popperStyle||{},c(o).popper]),f=R(()=>r.value==="dialog"?"false":void 0),v=R(()=>c(o).arrow||{});return{ariaModal:f,arrowStyle:v,contentAttrs:i,contentClass:s,contentStyle:l,contentZIndex:p,updateZIndex:()=>{p.value=e.zIndex||n()}}},_n=(e,t)=>{const o=j(!1),r=j();return{focusStartRef:r,trapped:o,onFocusAfterReleased:l=>{var f;((f=l.detail)==null?void 0:f.focusReason)!=="pointer"&&(r.value="first",t("blur"))},onFocusAfterTrapped:()=>{t("focus")},onFocusInTrap:l=>{e.visible&&!o.value&&(l.target&&(r.value=l.target),o.value=!0)},onFocusoutPrevented:l=>{e.trapping||(l.detail.focusReason==="pointer"&&l.preventDefault(),o.value=!1)},onReleaseRequested:()=>{o.value=!1,t("close")}}},kn=N({name:"ElPopperContent"}),Sn=N(W(S({},kn),{props:io,emits:On,setup(e,{expose:t,emit:o}){const r=e,{focusStartRef:n,trapped:a,onFocusAfterReleased:i,onFocusAfterTrapped:p,onFocusInTrap:s,onFocusoutPrevented:l,onReleaseRequested:f}=_n(r,o),{attributes:v,arrowRef:b,contentRef:g,styles:m,instanceRef:d,role:x,update:u}=An(r),{ariaModal:w,arrowStyle:E,contentAttrs:h,contentClass:T,contentStyle:A,updateZIndex:O}=Pn(r,{styles:m,attributes:v,role:x}),C=ue(xt,void 0),I=j();Ce(to,{arrowStyle:E,arrowRef:b,arrowOffset:I}),C&&(C.addInputId||C.removeInputId)&&Ce(xt,W(S({},C),{addInputId:Ge,removeInputId:Ge}));let P;const k=(_=!0)=>{u(),_&&O()},L=()=>{k(!1),r.visible&&r.focusOnShow?a.value=!0:r.visible===!1&&(a.value=!1)};return Ke(()=>{D(()=>r.triggerTargetEl,(_,$)=>{P==null||P(),P=void 0;const F=c(_||g.value),B=c($||g.value);We(F)&&(P=D([x,()=>r.ariaLabel,w,()=>r.id],y=>{["role","aria-label","aria-modal","id"].forEach((H,J)=>{Dt(y[J])?F.removeAttribute(H):F.setAttribute(H,y[J])})},{immediate:!0})),B!==F&&We(B)&&["role","aria-label","aria-modal","id"].forEach(y=>{B.removeAttribute(y)})},{immediate:!0}),D(()=>r.visible,L,{immediate:!0})}),Se(()=>{P==null||P(),P=void 0}),t({popperContentRef:g,popperInstanceRef:d,updatePopper:k,contentStyle:A}),(_,$)=>(G(),qe("div",Xe({ref_key:"contentRef",ref:g},c(h),{style:c(A),class:c(T),tabindex:"-1",onMouseenter:$[0]||($[0]=F=>_.$emit("mouseenter",F)),onMouseleave:$[1]||($[1]=F=>_.$emit("mouseleave",F))}),[Re(c(zo),{trapped:c(a),"trap-on-focus-in":!0,"focus-trap-el":c(g),"focus-start-el":c(n),onFocusAfterTrapped:c(p),onFocusAfterReleased:c(i),onFocusin:c(s),onFocusoutPrevented:c(l),onReleaseRequested:c(f)},{default:re(()=>[le(_.$slots,"default")]),_:3},8,["trapped","focus-trap-el","focus-start-el","onFocusAfterTrapped","onFocusAfterReleased","onFocusin","onFocusoutPrevented","onReleaseRequested"])],16))}}));var Mn=pe(Sn,[["__file","/home/runner/work/element-plus/element-plus/packages/components/popper/src/content.vue"]]);const Bn=Lt(un),pt=Symbol("elTooltip"),so=oe(W(S(S({},on),io),{appendTo:{type:M([String,Object])},content:{type:String,default:""},rawContent:{type:Boolean,default:!1},persistent:Boolean,ariaLabel:String,visible:{type:M(Boolean),default:null},transition:{type:String,default:""},teleported:{type:Boolean,default:!0},disabled:{type:Boolean}})),lo=oe(W(S({},ao),{disabled:Boolean,trigger:{type:M([String,Array]),default:"hover"},triggerKeys:{type:M(Array),default:()=>[Et.enter,Et.space]}})),{useModelToggleProps:In,useModelToggleEmits:jn,useModelToggle:Fn}=Zo("visible"),Dn=oe(W(S(S(S(S(S({},oo),In),so),lo),ro),{showArrow:{type:Boolean,default:!0}})),Ln=[...jn,"before-show","before-hide","show","hide","open","close"],Nn=(e,t)=>Ao(e)?e.includes(t):e===t,fe=(e,t,o)=>r=>{Nn(c(e),t)&&o(r)},$n=N({name:"ElTooltipTrigger"}),Hn=N(W(S({},$n),{props:lo,setup(e,{expose:t}){const o=e,r=ke("tooltip"),{controlled:n,id:a,open:i,onOpen:p,onClose:s,onToggle:l}=ue(pt,void 0),f=j(null),v=()=>{if(c(n)||o.disabled)return!0},b=$e(o,"trigger"),g=ee(v,fe(b,"hover",p)),m=ee(v,fe(b,"hover",s)),d=ee(v,fe(b,"click",h=>{h.button===0&&l(h)})),x=ee(v,fe(b,"focus",p)),u=ee(v,fe(b,"focus",s)),w=ee(v,fe(b,"contextmenu",h=>{h.preventDefault(),l(h)})),E=ee(v,h=>{const{code:T}=h;o.triggerKeys.includes(T)&&(h.preventDefault(),l(h))});return t({triggerRef:f}),(h,T)=>(G(),de(c(hn),{id:c(a),"virtual-ref":h.virtualRef,open:c(i),"virtual-triggering":h.virtualTriggering,class:Nt(c(r).e("trigger")),onBlur:c(u),onClick:c(d),onContextmenu:c(w),onFocus:c(x),onMouseenter:c(g),onMouseleave:c(m),onKeydown:c(E)},{default:re(()=>[le(h.$slots,"default")]),_:3},8,["id","virtual-ref","open","virtual-triggering","class","onBlur","onClick","onContextmenu","onFocus","onMouseenter","onMouseleave","onKeydown"]))}}));var Wn=pe(Hn,[["__file","/home/runner/work/element-plus/element-plus/packages/components/tooltip/src/trigger.vue"]]);const qn=N({name:"ElTooltipContent",inheritAttrs:!1}),zn=N(W(S({},qn),{props:so,setup(e,{expose:t}){const o=e,{selector:r}=Qt(),n=ke("tooltip"),a=j(null),i=j(!1),{controlled:p,id:s,open:l,trigger:f,onClose:v,onOpen:b,onShow:g,onHide:m,onBeforeShow:d,onBeforeHide:x}=ue(pt,void 0),u=R(()=>o.transition||`${n.namespace.value}-fade-in-linear`),w=R(()=>o.persistent);Se(()=>{i.value=!0});const E=R(()=>c(w)?!0:c(l)),h=R(()=>o.disabled?!1:c(l)),T=R(()=>o.appendTo||r.value),A=R(()=>{var y;return(y=o.style)!=null?y:{}}),O=R(()=>!c(l)),C=()=>{m()},I=()=>{if(c(p))return!0},P=ee(I,()=>{o.enterable&&c(f)==="hover"&&b()}),k=ee(I,()=>{c(f)==="hover"&&v()}),L=()=>{var y,H;(H=(y=a.value)==null?void 0:y.updatePopper)==null||H.call(y),d==null||d()},_=()=>{x==null||x()},$=()=>{g(),B=qo(R(()=>{var y;return(y=a.value)==null?void 0:y.popperContentRef}),()=>{if(c(p))return;c(f)!=="hover"&&v()})},F=()=>{o.virtualTriggering||v()};let B;return D(()=>c(l),y=>{y||B==null||B()},{flush:"post"}),D(()=>o.content,()=>{var y,H;(H=(y=a.value)==null?void 0:y.updatePopper)==null||H.call(y)}),t({contentRef:a}),(y,H)=>(G(),de(No,{disabled:!y.teleported,to:c(T)},[Re(Lo,{name:c(u),onAfterLeave:C,onBeforeEnter:L,onAfterEnter:$,onBeforeLeave:_},{default:re(()=>[c(E)?$t((G(),de(c(Mn),Xe({key:0,id:c(s),ref_key:"contentRef",ref:a},y.$attrs,{"aria-label":y.ariaLabel,"aria-hidden":c(O),"boundaries-padding":y.boundariesPadding,"fallback-placements":y.fallbackPlacements,"gpu-acceleration":y.gpuAcceleration,offset:y.offset,placement:y.placement,"popper-options":y.popperOptions,strategy:y.strategy,effect:y.effect,enterable:y.enterable,pure:y.pure,"popper-class":y.popperClass,"popper-style":[y.popperStyle,c(A)],"reference-el":y.referenceEl,"trigger-target-el":y.triggerTargetEl,visible:c(h),"z-index":y.zIndex,onMouseenter:c(P),onMouseleave:c(k),onBlur:F,onClose:c(v)}),{default:re(()=>[i.value?Ae("v-if",!0):le(y.$slots,"default",{key:0})]),_:3},16,["id","aria-label","aria-hidden","boundaries-padding","fallback-placements","gpu-acceleration","offset","placement","popper-options","strategy","effect","enterable","pure","popper-class","popper-style","reference-el","trigger-target-el","visible","z-index","onMouseenter","onMouseleave","onClose"])),[[Do,c(h)]]):Ae("v-if",!0)]),_:3},8,["name"])],8,["disabled","to"]))}}));var Kn=pe(zn,[["__file","/home/runner/work/element-plus/element-plus/packages/components/tooltip/src/content.vue"]]);const Un=["innerHTML"],Vn={key:1},Zn=N({name:"ElTooltip"}),Jn=N(W(S({},Zn),{props:Dn,emits:Ln,setup(e,{expose:t,emit:o}){const r=e;tn();const n=Po(),a=j(),i=j(),p=()=>{var u;const w=c(a);w&&((u=w.popperInstanceRef)==null||u.update())},s=j(!1),l=j(),{show:f,hide:v,hasUpdateHandler:b}=Fn({indicator:s,toggleReason:l}),{onOpen:g,onClose:m}=rn({showAfter:$e(r,"showAfter"),hideAfter:$e(r,"hideAfter"),open:f,close:v}),d=R(()=>Ft(r.visible)&&!b.value);Ce(pt,{controlled:d,id:n,open:$o(s),trigger:$e(r,"trigger"),onOpen:u=>{g(u)},onClose:u=>{m(u)},onToggle:u=>{c(s)?m(u):g(u)},onShow:()=>{o("show",l.value)},onHide:()=>{o("hide",l.value)},onBeforeShow:()=>{o("before-show",l.value)},onBeforeHide:()=>{o("before-hide",l.value)},updatePopper:p}),D(()=>r.disabled,u=>{u&&s.value&&(s.value=!1)});const x=()=>{var u,w;const E=(w=(u=i.value)==null?void 0:u.contentRef)==null?void 0:w.popperContentRef;return E&&E.contains(document.activeElement)};return Ho(()=>s.value&&v()),t({popperRef:a,contentRef:i,isFocusInsideContent:x,updatePopper:p,onOpen:g,onClose:m,hide:v}),(u,w)=>(G(),de(c(Bn),{ref_key:"popperRef",ref:a,role:u.role},{default:re(()=>[Re(Wn,{disabled:u.disabled,trigger:u.trigger,"trigger-keys":u.triggerKeys,"virtual-ref":u.virtualRef,"virtual-triggering":u.virtualTriggering},{default:re(()=>[u.$slots.default?le(u.$slots,"default",{key:0}):Ae("v-if",!0)]),_:3},8,["disabled","trigger","trigger-keys","virtual-ref","virtual-triggering"]),Re(Kn,{ref_key:"contentRef",ref:i,"aria-label":u.ariaLabel,"boundaries-padding":u.boundariesPadding,content:u.content,disabled:u.disabled,effect:u.effect,enterable:u.enterable,"fallback-placements":u.fallbackPlacements,"hide-after":u.hideAfter,"gpu-acceleration":u.gpuAcceleration,offset:u.offset,persistent:u.persistent,"popper-class":u.popperClass,"popper-style":u.popperStyle,placement:u.placement,"popper-options":u.popperOptions,pure:u.pure,"raw-content":u.rawContent,"reference-el":u.referenceEl,"trigger-target-el":u.triggerTargetEl,"show-after":u.showAfter,strategy:u.strategy,teleported:u.teleported,transition:u.transition,"virtual-triggering":u.virtualTriggering,"z-index":u.zIndex,"append-to":u.appendTo},{default:re(()=>[le(u.$slots,"content",{},()=>[u.rawContent?(G(),qe("span",{key:0,innerHTML:u.content},null,8,Un)):(G(),qe("span",Vn,Wo(u.content),1))]),u.showArrow?(G(),de(c(dn),{key:0,"arrow-offset":u.arrowOffset},null,8,["arrow-offset"])):Ae("v-if",!0)]),_:3},8,["aria-label","boundaries-padding","content","disabled","effect","enterable","fallback-placements","hide-after","gpu-acceleration","offset","persistent","popper-class","popper-style","placement","popper-options","pure","raw-content","reference-el","trigger-target-el","show-after","strategy","teleported","transition","virtual-triggering","z-index","append-to"])]),_:3},8,["role"]))}}));var Gn=pe(Jn,[["__file","/home/runner/work/element-plus/element-plus/packages/components/tooltip/src/tooltip.vue"]]);const ra=Lt(Gn);export{ra as E,gn as O,pt as T,lo as a,so as b,ee as c,et as d,rn as u,oa as w,Gr as y};
