import{d as t}from"./request.29c9df35.js";const o=()=>t({url:"/admin/support-storage",method:"get"}),s=e=>t({url:"/admin/storages",method:"get",data:e}),n=e=>t({url:`/admin/storage/${e}`,method:"get"}),d=e=>t({url:`/admin/storage/${e}`,method:"delete"}),m=(e,r)=>t({url:`/admin/storage/${e}/${r}`,method:"post"}),g=e=>t({url:"/admin/storage/sort",method:"post",data:e}),u=(e,r)=>t({url:`/admin/cache/${e}/${r}`,method:"post"}),i=(e,r)=>t({url:`/admin/cache/${e}/auto-refresh/${r}`,method:"post"}),l=e=>t({url:"/admin/storage-params",method:"get",data:e}),c=e=>t({url:"/admin/storage",method:"post",data:e}),h=e=>t({url:"/admin/storage/exist/key",method:"get",data:e}),R=e=>t({url:`/admin/storage/${e}/filters`,method:"get"}),p=(e,r)=>t({url:`/admin/storage/${e}/filters`,method:"post",data:r}),q=e=>t({url:`/admin/storage/${e}/password`,method:"get"}),$=(e,r)=>t({url:`/admin/storage/${e}/password`,method:"post",data:r}),S=e=>t({url:`/admin/storage/${e}/readme`,method:"get"}),w=(e,r)=>t({url:`/admin/storage/${e}/readme`,method:"post",data:r}),b=(e,r)=>t({url:`/admin/storage/${e}/compatibility_readme/${r}`,method:"post"});export{u as a,i as b,g as c,d,n as e,c as f,o as g,h,l as i,R as j,p as k,s as l,q as m,$ as n,S as o,w as p,b as q,m as s};
