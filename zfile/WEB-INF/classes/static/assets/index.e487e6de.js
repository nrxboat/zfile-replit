var Ee=Object.defineProperty,he=Object.defineProperties;var Be=Object.getOwnPropertyDescriptors;var ee=Object.getOwnPropertySymbols;var we=Object.prototype.hasOwnProperty,Te=Object.prototype.propertyIsEnumerable;var ne=(e,n,o)=>n in e?Ee(e,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[n]=o,z=(e,n)=>{for(var o in n||(n={}))we.call(n,o)&&ne(e,o,n[o]);if(ee)for(var o of ee(n))Te.call(n,o)&&ne(e,o,n[o]);return e},se=(e,n)=>he(e,Be(n));var H=(e,n,o)=>new Promise((l,t)=>{var a=c=>{try{d(o.next(c))}catch(v){t(v)}},s=c=>{try{d(o.throw(c))}catch(v){t(v)}},d=c=>c.done?l(c.value):Promise.resolve(c.value).then(a,s);d((o=o.apply(e,n)).next())});import{w as G,W as Me,P as L,d as Se,r as w,M as ke,c as T,o as Ie,D as Ae,a7 as Re,a8 as M,a as f,b,e as m,J as K,j as C,m as p,g as i,n as oe,h as P,f as j,l as D,k as S,t as R,z as N,i as Le,L as q,K as X,T as Oe,O as ce,am as fe}from"./index.f20a2340.js";import{av as Ve,A as $e,E as ze,ay as Pe,n as De,a as Ne,J as Fe,ax as te,K as ae,ac as Ue,_ as He,Q as Ke,k as me,ab as je,a9 as qe,ae as le,j as re,at as ie}from"./base.f9e60852.js";import{E as Xe}from"./index.2085544e.js";import{E as Ge,u as Je,b as We,a as Ze}from"./index.b60e2a18.js";import{E as Qe}from"./focus-trap.7aeb3cb3.js";import{i as Ye}from"./validator.02bde218.js";const xe='a[href],button:not([disabled]),button:not([hidden]),:not([tabindex="-1"]),input:not([disabled]),input:not([type="hidden"]),select:not([disabled]),textarea:not([disabled])',_e=e=>getComputedStyle(e).position==="fixed"?!1:e.offsetParent!==null,ue=e=>Array.from(e.querySelectorAll(xe)).filter(n=>en(n)&&_e(n)),en=e=>{if(e.tabIndex>0||e.tabIndex===0&&e.getAttribute("tabIndex")!==null)return!0;if(e.disabled)return!1;switch(e.nodeName){case"A":return!!e.href&&e.rel!=="ignore";case"INPUT":return!(e.type==="hidden"||e.type==="file");case"BUTTON":case"SELECT":case"TEXTAREA":return!0;default:return!1}},nn=(e,n)=>{let o;G(()=>e.value,l=>{var t,a;l?(o=document.activeElement,Me(n)&&((a=(t=n.value).focus)==null||a.call(t))):o.focus()})},J="_trap-focus-children",E=[],de=e=>{if(E.length===0)return;const n=E[E.length-1][J];if(n.length>0&&e.code===Ve.tab){if(n.length===1){e.preventDefault(),document.activeElement!==n[0]&&n[0].focus();return}const o=e.shiftKey,l=e.target===n[0],t=e.target===n[n.length-1];l&&o&&(e.preventDefault(),n[n.length-1].focus()),t&&!o&&(e.preventDefault(),n[0].focus())}},sn={beforeMount(e){e[J]=ue(e),E.push(e),E.length<=1&&document.addEventListener("keydown",de)},updated(e){L(()=>{e[J]=ue(e)})},unmounted(){E.shift(),E.length===0&&document.removeEventListener("keydown",de)}},on=Se({name:"ElMessageBox",directives:{TrapFocus:sn},components:z({ElButton:$e,ElFocusTrap:Qe,ElInput:Xe,ElOverlay:Ge,ElIcon:ze},Pe),inheritAttrs:!1,props:{buttonSize:{type:String,validator:Ye},modal:{type:Boolean,default:!0},lockScroll:{type:Boolean,default:!0},showClose:{type:Boolean,default:!0},closeOnClickModal:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},closeOnHashChange:{type:Boolean,default:!0},center:Boolean,draggable:Boolean,roundButton:{default:!1,type:Boolean},container:{type:String,default:"body"},boxType:{type:String,default:""}},emits:["vanish","action"],setup(e,{emit:n}){const{t:o}=De(),l=Ne("message-box"),t=w(!1),{nextZIndex:a}=Fe(),s=ke({autofocus:!0,beforeClose:null,callback:null,cancelButtonText:"",cancelButtonClass:"",confirmButtonText:"",confirmButtonClass:"",customClass:"",customStyle:{},dangerouslyUseHTMLString:!1,distinguishCancelAndClose:!1,icon:"",inputPattern:null,inputPlaceholder:"",inputType:"text",inputValue:null,inputValidator:null,inputErrorMessage:"",message:null,modalFade:!0,modalClass:"",showCancelButton:!1,showConfirmButton:!0,type:"",title:void 0,showInput:!1,action:"",confirmButtonLoading:!1,cancelButtonLoading:!1,confirmButtonDisabled:!1,editorErrorMessage:"",validateError:!1,zIndex:a()}),d=T(()=>{const r=s.type;return{[l.bm("icon",r)]:r&&te[r]}}),c=ae(),v=ae(),F=Ue(T(()=>e.buttonSize),{prop:!0,form:!0,formItem:!0}),U=T(()=>s.icon||te[s.type]||""),u=T(()=>!!s.message),h=w(),W=w(),I=w(),V=w(),Z=w(),pe=T(()=>s.confirmButtonClass);G(()=>s.inputValue,r=>H(this,null,function*(){yield L(),e.boxType==="prompt"&&r!==null&&Y()}),{immediate:!0}),G(()=>t.value,r=>{var g,B;r&&(e.boxType!=="prompt"&&(s.autofocus?I.value=(B=(g=Z.value)==null?void 0:g.$el)!=null?B:h.value:I.value=h.value),s.zIndex=a()),e.boxType==="prompt"&&(r?L().then(()=>{var _;V.value&&V.value.$el&&(s.autofocus?I.value=(_=ye())!=null?_:h.value:I.value=h.value)}):(s.editorErrorMessage="",s.validateError=!1))});const ve=T(()=>e.draggable);Je(h,W,ve),Ie(()=>H(this,null,function*(){yield L(),e.closeOnHashChange&&window.addEventListener("hashchange",A)})),Ae(()=>{e.closeOnHashChange&&window.removeEventListener("hashchange",A)});function A(){!t.value||(t.value=!1,L(()=>{s.action&&n("action",s.action)}))}const Q=()=>{e.closeOnClickModal&&$(s.distinguishCancelAndClose?"close":"cancel")},ge=Ze(Q),be=r=>{if(s.inputType!=="textarea")return r.preventDefault(),$("confirm")},$=r=>{var g;e.boxType==="prompt"&&r==="confirm"&&!Y()||(s.action=r,s.beforeClose?(g=s.beforeClose)==null||g.call(s,r,s,A):A())},Y=()=>{if(e.boxType==="prompt"){const r=s.inputPattern;if(r&&!r.test(s.inputValue||""))return s.editorErrorMessage=s.inputErrorMessage||o("el.messagebox.error"),s.validateError=!0,!1;const g=s.inputValidator;if(typeof g=="function"){const B=g(s.inputValue);if(B===!1)return s.editorErrorMessage=s.inputErrorMessage||o("el.messagebox.error"),s.validateError=!0,!1;if(typeof B=="string")return s.editorErrorMessage=B,s.validateError=!0,!1}}return s.editorErrorMessage="",s.validateError=!1,!0},ye=()=>{const r=V.value.$refs;return r.input||r.textarea},x=()=>{$("close")},Ce=()=>{e.closeOnPressEscape&&x()};return e.lockScroll&&We(t),nn(t),se(z({},Re(s)),{ns:l,overlayEvent:ge,visible:t,hasMessage:u,typeClass:d,contentId:c,inputId:v,btnSize:F,iconComponent:U,confirmButtonClasses:pe,rootRef:h,focusStartRef:I,headerRef:W,inputRef:V,confirmRef:Z,doClose:A,handleClose:x,onCloseRequested:Ce,handleWrapperClick:Q,handleInputEnter:be,handleAction:$,t:o})}}),tn=["aria-label","aria-describedby"],an=["aria-label"],ln=["id"];function rn(e,n,o,l,t,a){const s=M("el-icon"),d=M("close"),c=M("el-input"),v=M("el-button"),F=M("el-focus-trap"),U=M("el-overlay");return f(),b(Oe,{name:"fade-in-linear",onAfterLeave:n[11]||(n[11]=u=>e.$emit("vanish")),persisted:""},{default:m(()=>[K(C(U,{"z-index":e.zIndex,"overlay-class":[e.ns.is("message-box"),e.modalClass],mask:e.modal},{default:m(()=>[p("div",{role:"dialog","aria-label":e.title,"aria-modal":"true","aria-describedby":e.showInput?void 0:e.contentId,class:i(`${e.ns.namespace.value}-overlay-message-box`),onClick:n[8]||(n[8]=(...u)=>e.overlayEvent.onClick&&e.overlayEvent.onClick(...u)),onMousedown:n[9]||(n[9]=(...u)=>e.overlayEvent.onMousedown&&e.overlayEvent.onMousedown(...u)),onMouseup:n[10]||(n[10]=(...u)=>e.overlayEvent.onMouseup&&e.overlayEvent.onMouseup(...u))},[C(F,{loop:"",trapped:e.visible,"focus-trap-el":e.rootRef,"focus-start-el":e.focusStartRef,onReleaseRequested:e.onCloseRequested},{default:m(()=>[p("div",{ref:"rootRef",class:i([e.ns.b(),e.customClass,e.ns.is("draggable",e.draggable),{[e.ns.m("center")]:e.center}]),style:oe(e.customStyle),tabindex:"-1",onClick:n[7]||(n[7]=P(()=>{},["stop"]))},[e.title!==null&&e.title!==void 0?(f(),j("div",{key:0,ref:"headerRef",class:i(e.ns.e("header"))},[p("div",{class:i(e.ns.e("title"))},[e.iconComponent&&e.center?(f(),b(s,{key:0,class:i([e.ns.e("status"),e.typeClass])},{default:m(()=>[(f(),b(D(e.iconComponent)))]),_:1},8,["class"])):S("v-if",!0),p("span",null,R(e.title),1)],2),e.showClose?(f(),j("button",{key:0,type:"button",class:i(e.ns.e("headerbtn")),"aria-label":e.t("el.messagebox.close"),onClick:n[0]||(n[0]=u=>e.handleAction(e.distinguishCancelAndClose?"close":"cancel")),onKeydown:n[1]||(n[1]=N(P(u=>e.handleAction(e.distinguishCancelAndClose?"close":"cancel"),["prevent"]),["enter"]))},[C(s,{class:i(e.ns.e("close"))},{default:m(()=>[C(d)]),_:1},8,["class"])],42,an)):S("v-if",!0)],2)):S("v-if",!0),p("div",{id:e.contentId,class:i(e.ns.e("content"))},[p("div",{class:i(e.ns.e("container"))},[e.iconComponent&&!e.center&&e.hasMessage?(f(),b(s,{key:0,class:i([e.ns.e("status"),e.typeClass])},{default:m(()=>[(f(),b(D(e.iconComponent)))]),_:1},8,["class"])):S("v-if",!0),e.hasMessage?(f(),j("div",{key:1,class:i(e.ns.e("message"))},[Le(e.$slots,"default",{},()=>[e.dangerouslyUseHTMLString?(f(),b(D(e.showInput?"label":"p"),{key:1,for:e.showInput?e.inputId:void 0,innerHTML:e.message},null,8,["for","innerHTML"])):(f(),b(D(e.showInput?"label":"p"),{key:0,for:e.showInput?e.inputId:void 0},{default:m(()=>[q(R(e.dangerouslyUseHTMLString?"":e.message),1)]),_:1},8,["for"]))])],2)):S("v-if",!0)],2),K(p("div",{class:i(e.ns.e("input"))},[C(c,{id:e.inputId,ref:"inputRef",modelValue:e.inputValue,"onUpdate:modelValue":n[2]||(n[2]=u=>e.inputValue=u),type:e.inputType,placeholder:e.inputPlaceholder,"aria-invalid":e.validateError,class:i({invalid:e.validateError}),onKeydown:N(e.handleInputEnter,["enter"])},null,8,["id","modelValue","type","placeholder","aria-invalid","class","onKeydown"]),p("div",{class:i(e.ns.e("errormsg")),style:oe({visibility:e.editorErrorMessage?"visible":"hidden"})},R(e.editorErrorMessage),7)],2),[[X,e.showInput]])],10,ln),p("div",{class:i(e.ns.e("btns"))},[e.showCancelButton?(f(),b(v,{key:0,loading:e.cancelButtonLoading,class:i([e.cancelButtonClass]),round:e.roundButton,size:e.btnSize,onClick:n[3]||(n[3]=u=>e.handleAction("cancel")),onKeydown:n[4]||(n[4]=N(P(u=>e.handleAction("cancel"),["prevent"]),["enter"]))},{default:m(()=>[q(R(e.cancelButtonText||e.t("el.messagebox.cancel")),1)]),_:1},8,["loading","class","round","size"])):S("v-if",!0),K(C(v,{ref:"confirmRef",type:"primary",loading:e.confirmButtonLoading,class:i([e.confirmButtonClasses]),round:e.roundButton,disabled:e.confirmButtonDisabled,size:e.btnSize,onClick:n[5]||(n[5]=u=>e.handleAction("confirm")),onKeydown:n[6]||(n[6]=N(P(u=>e.handleAction("confirm"),["prevent"]),["enter"]))},{default:m(()=>[q(R(e.confirmButtonText||e.t("el.messagebox.confirm")),1)]),_:1},8,["loading","class","round","disabled","size"]),[[X,e.showConfirmButton]])],2)],6)]),_:3},8,["trapped","focus-trap-el","focus-start-el","onReleaseRequested"])],42,tn)]),_:3},8,["z-index","overlay-class","mask"]),[[X,e.visible]])]),_:3})}var un=He(on,[["render",rn],["__file","/home/runner/work/element-plus/element-plus/packages/components/message-box/src/index.vue"]]);const O=new Map,dn=e=>{let n=document.body;return e.appendTo&&(me(e.appendTo)&&(n=document.querySelector(e.appendTo)),ie(e.appendTo)&&(n=e.appendTo),ie(n)||(n=document.body)),n},cn=(e,n,o=null)=>{const l=C(un,e,re(e.message)||ce(e.message)?{default:re(e.message)?e.message:()=>e.message}:null);return l.appContext=o,fe(l,n),dn(e).appendChild(n.firstElementChild),l.component},fn=()=>document.createElement("div"),mn=(e,n)=>{const o=fn();e.onVanish=()=>{fe(null,o),O.delete(t)},e.onAction=a=>{const s=O.get(t);let d;e.showInput?d={value:t.inputValue,action:a}:d=a,e.callback?e.callback(d,l.proxy):a==="cancel"||a==="close"?e.distinguishCancelAndClose&&a!=="cancel"?s.reject("close"):s.reject("cancel"):s.resolve(d)};const l=cn(e,o,n),t=l.proxy;for(const a in e)le(e,a)&&!le(t.$props,a)&&(t[a]=e[a]);return t.visible=!0,t};function k(e,n=null){if(!Ke)return Promise.reject();let o;return me(e)||ce(e)?e={message:e}:o=e.callback,new Promise((l,t)=>{const a=mn(e,n!=null?n:k._context);O.set(a,{options:e,callback:o,resolve:l,reject:t})})}const pn=["alert","confirm","prompt"],vn={alert:{closeOnPressEscape:!1,closeOnClickModal:!1},confirm:{showCancelButton:!0},prompt:{showCancelButton:!0,showInput:!0}};pn.forEach(e=>{k[e]=gn(e)});function gn(e){return(n,o,l,t)=>{let a="";return je(o)?(l=o,a=""):qe(o)?a="":a=o,k(Object.assign(z({title:a,message:n,type:""},vn[e]),l,{boxType:e}),t)}}k.close=()=>{O.forEach((e,n)=>{n.doClose()}),O.clear()};k._context=null;const y=k;y.install=e=>{y._context=e._context,e.config.globalProperties.$msgbox=y,e.config.globalProperties.$messageBox=y,e.config.globalProperties.$alert=y.alert,e.config.globalProperties.$confirm=y.confirm,e.config.globalProperties.$prompt=y.prompt};const Tn=y;export{Tn as E};
