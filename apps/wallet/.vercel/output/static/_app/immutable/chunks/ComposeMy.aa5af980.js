import{_ as m}from"./preload-helper.a4192956.js";import{s as f,f as d,g as _,h,d as l,j as p,i as v,I as y,L as o}from"./scheduler.df63c2e8.js";import{S as w,i as C}from"./index.8a30a216.js";function q(n){let e,i,s;return{c(){e=d("div"),this.h()},l(t){e=_(t,"DIV",{class:!0}),h(e).forEach(l),this.h()},h(){p(e,"class","grid h-full w-full")},m(t,r){v(t,e,r),i||(s=y(n[0].call(null,e)),i=!0)},p:o,i:o,o,d(t){t&&l(e),i=!1,s()}}}function g(n,e,i){let{queryClient:s}=e,{view:t}=e;async function r(a){const u=await m(()=>import("./Composer.b354e4b6.js").then(c=>c.C),["./Composer.b354e4b6.js","./preload-helper.a4192956.js","./scheduler.df63c2e8.js","./index.8a30a216.js","./each.34398241.js","./index.795a612f.js","./index.d1f0f39f.js","./context.4e14d07d.js","./_commonjs-dynamic-modules.aed0e1c3.js","./QueryClientProvider.6190c03f.js"],import.meta.url);new u.default({target:a,props:{composer:t,queryClient:s}})}return n.$$set=a=>{"queryClient"in a&&i(1,s=a.queryClient),"view"in a&&i(2,t=a.view)},[r,s,t]}class D extends w{constructor(e){super(),C(this,e,g,q,f,{queryClient:1,view:2})}}export{D as default};
