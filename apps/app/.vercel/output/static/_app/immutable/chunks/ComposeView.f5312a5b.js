import{_}from"./preload-helper.a4192956.js";import{s as p,f as h,g as y,h as v,d as u,j as w,i as C,I as q,N as g,L as f,O as I}from"./scheduler.405fa0d9.js";import{S as A,i as D}from"./index.95682a25.js";function E(a){let t,o,n,r;return{c(){t=h("div"),this.h()},l(e){t=y(e,"DIV",{class:!0}),v(t).forEach(u),this.h()},h(){w(t,"class","grid h-full w-full")},m(e,s){C(e,t,s),n||(r=q(o=a[1].call(null,t,a[0])),n=!0)},p(e,[s]){o&&g(o.update)&&s&1&&o.update.call(null,e[0])},i:f,o:f,d(e){e&&u(t),n=!1,r()}}}function V(a,t,o){let{queryClient:n}=t,{view:r}=t,e;async function s(i,l){e&&e.$destroy();const c=await _(()=>import("./Composer.623f3f66.js").then(d=>d.C),["./Composer.623f3f66.js","./preload-helper.a4192956.js","./scheduler.405fa0d9.js","./index.95682a25.js","./each.c6f74fb0.js","./index.d6169ac8.js","./index.5722f262.js","./context.2d6486d2.js","./_commonjs-dynamic-modules.aed0e1c3.js","./QueryClientProvider.2c4a65fb.js"],import.meta.url);e=new c.default({target:i,props:{composer:l,queryClient:n}})}function m(i,l){return s(i,l),{update(c){s(i,c)}}}return I(()=>{e&&e.$destroy()}),a.$$set=i=>{"queryClient"in i&&o(2,n=i.queryClient),"view"in i&&o(0,r=i.view)},[r,m,n]}class S extends A{constructor(t){super(),D(this,t,V,E,p,{queryClient:2,view:0})}}export{S as default};
