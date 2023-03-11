var Q=Object.defineProperty,X=Object.defineProperties;var Y=Object.getOwnPropertyDescriptors;var V=Object.getOwnPropertySymbols;var Z=Object.prototype.hasOwnProperty,ee=Object.prototype.propertyIsEnumerable;var $=(r,i,o)=>i in r?Q(r,i,{enumerable:!0,configurable:!0,writable:!0,value:o}):r[i]=o,m=(r,i)=>{for(var o in i||(i={}))Z.call(i,o)&&$(r,o,i[o]);if(V)for(var o of V(i))ee.call(i,o)&&$(r,o,i[o]);return r},_=(r,i)=>X(r,Y(i));import{r as k,B as oe,c as g,d as x,a as z,f as S,m as h,J as F,at as P,u as e,W as T,g as v,i as B,L as D,t as K,h as M,P as U,n as re,o as ae,p as le,M as ie,a7 as de,w as ne}from"./index.f20a2340.js";import{b as y,a7 as A,k as G,a8 as C,I as N,ac as se,o as te,a as E,_ as R,K as ue,aa as pe,ad as be,x as ce,w as ve,l as L}from"./base.f9e60852.js";import{U as I,C as fe}from"./event.776e7e11.js";const W=y({size:A,disabled:Boolean,label:{type:[String,Number,Boolean],default:""}}),me=y(_(m({},W),{modelValue:{type:[String,Number,Boolean],default:""},name:{type:String,default:""},border:Boolean})),j={[I]:r=>G(r)||C(r)||N(r),[fe]:r=>G(r)||C(r)||N(r)},q=Symbol("radioGroupKey"),H=(r,i)=>{const o=k(),l=oe(q,void 0),u=g(()=>!!l),c=g({get(){return u.value?l.modelValue:r.modelValue},set(t){u.value?l.changeEvent(t):i&&i(I,t),o.value.checked=r.modelValue===r.label}}),s=se(g(()=>l==null?void 0:l.size)),p=te(g(()=>l==null?void 0:l.disabled)),d=k(!1),b=g(()=>p.value||u.value&&c.value!==r.label?-1:0);return{radioRef:o,isGroup:u,radioGroup:l,focus:d,size:s,disabled:p,tabIndex:b,modelValue:c}},_e=["value","name","disabled"],ge=x({name:"ElRadio"}),he=x(_(m({},ge),{props:me,emits:j,setup(r,{emit:i}){const o=r,l=E("radio"),{radioRef:u,radioGroup:c,focus:s,size:p,disabled:d,modelValue:b}=H(o,i);function t(){U(()=>i("change",b.value))}return(a,n)=>{var f;return z(),S("label",{class:v([e(l).b(),e(l).is("disabled",e(d)),e(l).is("focus",e(s)),e(l).is("bordered",a.border),e(l).is("checked",e(b)===a.label),e(l).m(e(p))])},[h("span",{class:v([e(l).e("input"),e(l).is("disabled",e(d)),e(l).is("checked",e(b)===a.label)])},[F(h("input",{ref_key:"radioRef",ref:u,"onUpdate:modelValue":n[0]||(n[0]=w=>T(b)?b.value=w:null),class:v(e(l).e("original")),value:a.label,name:a.name||((f=e(c))==null?void 0:f.name),disabled:e(d),type:"radio",onFocus:n[1]||(n[1]=w=>s.value=!0),onBlur:n[2]||(n[2]=w=>s.value=!1),onChange:t},null,42,_e),[[P,e(b)]]),h("span",{class:v(e(l).e("inner"))},null,2)],2),h("span",{class:v(e(l).e("label")),onKeydown:n[3]||(n[3]=M(()=>{},["stop"]))},[B(a.$slots,"default",{},()=>[D(K(a.label),1)])],34)],2)}}}));var xe=R(he,[["__file","/home/runner/work/element-plus/element-plus/packages/components/radio/src/radio.vue"]]);const ye=y(_(m({},W),{name:{type:String,default:""}})),we=["value","name","disabled"],ke=x({name:"ElRadioButton"}),ze=x(_(m({},ke),{props:ye,setup(r){const i=r,o=E("radio"),{radioRef:l,focus:u,size:c,disabled:s,modelValue:p,radioGroup:d}=H(i),b=g(()=>({backgroundColor:(d==null?void 0:d.fill)||"",borderColor:(d==null?void 0:d.fill)||"",boxShadow:d!=null&&d.fill?`-1px 0 0 0 ${d.fill}`:"",color:(d==null?void 0:d.textColor)||""}));return(t,a)=>{var n;return z(),S("label",{class:v([e(o).b("button"),e(o).is("active",e(p)===t.label),e(o).is("disabled",e(s)),e(o).is("focus",e(u)),e(o).bm("button",e(c))])},[F(h("input",{ref_key:"radioRef",ref:l,"onUpdate:modelValue":a[0]||(a[0]=f=>T(p)?p.value=f:null),class:v(e(o).be("button","original-radio")),value:t.label,type:"radio",name:t.name||((n=e(d))==null?void 0:n.name),disabled:e(s),onFocus:a[1]||(a[1]=f=>u.value=!0),onBlur:a[2]||(a[2]=f=>u.value=!1)},null,42,we),[[P,e(p)]]),h("span",{class:v(e(o).be("button","inner")),style:re(e(p)===t.label?e(b):{}),onKeydown:a[3]||(a[3]=M(()=>{},["stop"]))},[B(t.$slots,"default",{},()=>[D(K(t.label),1)])],38)],2)}}}));var J=R(ze,[["__file","/home/runner/work/element-plus/element-plus/packages/components/radio/src/radio-button.vue"]]);const Se=y({id:{type:String,default:void 0},size:A,disabled:Boolean,modelValue:{type:[String,Number,Boolean],default:""},fill:{type:String,default:""},label:{type:String,default:void 0},textColor:{type:String,default:""},name:{type:String,default:void 0},validateEvent:{type:Boolean,default:!0}}),Be=j,Ee=["id","aria-label","aria-labelledby"],Re=x({name:"ElRadioGroup"}),Ie=x(_(m({},Re),{props:Se,emits:Be,setup(r,{emit:i}){const o=r,l=E("radio"),u=ue(),c=k(),{formItem:s}=pe(),{inputId:p,isLabeledByFormItem:d}=be(o,{formItemContext:s}),b=a=>{i(I,a),U(()=>i("change",a))};ae(()=>{const a=c.value.querySelectorAll("[type=radio]"),n=a[0];!Array.from(a).some(f=>f.checked)&&n&&(n.tabIndex=0)});const t=g(()=>o.name||u.value);return le(q,ie(_(m({},de(o)),{changeEvent:b,name:t}))),ne(()=>o.modelValue,()=>{o.validateEvent&&(s==null||s.validate("change").catch(a=>ce()))}),(a,n)=>(z(),S("div",{id:e(p),ref_key:"radioGroupRef",ref:c,class:v(e(l).b("group")),role:"radiogroup","aria-label":e(d)?void 0:a.label||"radio-group","aria-labelledby":e(d)?e(s).labelId:void 0},[B(a.$slots,"default")],10,Ee))}}));var O=R(Ie,[["__file","/home/runner/work/element-plus/element-plus/packages/components/radio/src/radio-group.vue"]]);const Ne=ve(xe,{RadioButton:J,RadioGroup:O});L(O);L(J);export{Ne as E};
