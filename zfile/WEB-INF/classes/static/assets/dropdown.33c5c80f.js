var h=Object.defineProperty,M=Object.defineProperties;var w=Object.getOwnPropertyDescriptors;var I=Object.getOwnPropertySymbols;var v=Object.prototype.hasOwnProperty,B=Object.prototype.propertyIsEnumerable;var C=(t,e,o)=>e in t?h(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,a=(t,e)=>{for(var o in e||(e={}))v.call(e,o)&&C(t,o,e[o]);if(I)for(var o of I(e))B.call(e,o)&&C(t,o,e[o]);return t},u=(t,e)=>M(t,w(e));import{_ as y,b as E,d as l,H as P,av as s}from"./base.f9e60852.js";import{a as A,b as T}from"./popper.819708f8.js";import{d as N,i as S,r as O,p as g,B as K,o as x,u as _,D as Y}from"./index.f20a2340.js";const j=N({inheritAttrs:!1});function k(t,e,o,r,i,m){return S(t.$slots,"default")}var D=y(j,[["render",k],["__file","/home/runner/work/element-plus/element-plus/packages/components/collection/src/collection.vue"]]);const F=N({name:"ElCollectionItem",inheritAttrs:!1});function J(t,e,o,r,i,m){return S(t.$slots,"default")}var R=y(F,[["render",J],["__file","/home/runner/work/element-plus/element-plus/packages/components/collection/src/collection-item.vue"]]);const H="data-el-collection-item",U=t=>{const e=`El${t}Collection`,o=`${e}Item`,r=Symbol(e),i=Symbol(o),m=u(a({},D),{name:e,setup(){const f=O(null),p=new Map;g(r,{itemMap:p,getItems:()=>{const c=_(f);if(!c)return[];const n=Array.from(c.querySelectorAll(`[${H}]`));return[...p.values()].sort((L,$)=>n.indexOf(L.ref)-n.indexOf($.ref))},collectionRef:f})}}),b=u(a({},R),{name:o,setup(f,{attrs:p}){const d=O(null),c=K(r,void 0);g(i,{collectionItemRef:d}),x(()=>{const n=_(d);n&&c.itemMap.set(n,a({ref:n},p))}),Y(()=>{const n=_(d);c.itemMap.delete(n)})}});return{COLLECTION_INJECTION_KEY:r,COLLECTION_ITEM_INJECTION_KEY:i,ElCollection:m,ElCollectionItem:b}},Z=E({trigger:A.trigger,effect:u(a({},T.effect),{default:"light"}),type:{type:l(String)},placement:{type:l(String),default:"bottom"},popperOptions:{type:l(Object),default:()=>({})},id:String,size:{type:String,default:""},splitButton:Boolean,hideOnClick:{type:Boolean,default:!0},loop:{type:Boolean,default:!0},showTimeout:{type:Number,default:150},hideTimeout:{type:Number,default:150},tabindex:{type:l([Number,String]),default:0},maxHeight:{type:l([Number,String]),default:""},popperClass:{type:String,default:""},disabled:{type:Boolean,default:!1},role:{type:String,default:"menu"},buttonProps:{type:l(Object)},teleported:T.teleported}),ee=E({command:{type:[Object,String,Number],default:()=>({})},disabled:Boolean,divided:Boolean,textValue:String,icon:{type:P}}),te=E({onKeydown:{type:l(Function)}}),V=[s.down,s.pageDown,s.home],q=[s.up,s.pageUp,s.end],oe=[...V,...q],{ElCollection:ne,ElCollectionItem:le,COLLECTION_INJECTION_KEY:se,COLLECTION_ITEM_INJECTION_KEY:re}=U("Dropdown");export{re as C,ne as E,oe as F,q as L,ee as a,H as b,U as c,Z as d,le as e,te as f,se as g};
