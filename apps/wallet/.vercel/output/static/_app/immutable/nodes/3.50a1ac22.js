import{s as v,f as o,g as c,h as m,d as l,j as y,i as u,L as f,G as g,l as p,m as d,x as _,n as h,M as b}from"../chunks/scheduler.df63c2e8.js";import{S as E,i as S}from"../chunks/index.8a30a216.js";import{c as k}from"../chunks/index.d1f0f39f.js";function x(s){let e,a=JSON.stringify(s[0].data,null,2)+"",n;return{c(){e=o("pre"),n=p(a)},l(t){e=c(t,"PRE",{});var r=m(e);n=d(r,a),r.forEach(l)},m(t,r){u(t,e,r),_(e,n)},p(t,r){r&1&&a!==(a=JSON.stringify(t[0].data,null,2)+"")&&h(n,a)},d(t){t&&l(e)}}}function C(s){let e,a,n=JSON.stringify(s[0].error,null,2)+"",t;return{c(){e=o("pre"),a=p("Error: "),t=p(n)},l(r){e=c(r,"PRE",{});var i=m(e);a=d(i,"Error: "),t=d(i,n),i.forEach(l)},m(r,i){u(r,e,i),_(e,a),_(e,t)},p(r,i){i&1&&n!==(n=JSON.stringify(r[0].error,null,2)+"")&&h(t,n)},d(r){r&&l(e)}}}function N(s){let e,a="Loading...";return{c(){e=o("p"),e.textContent=a},l(n){e=c(n,"P",{"data-svelte-h":!0}),b(e)!=="svelte-qdsr2u"&&(e.textContent=a)},m(n,t){u(n,e,t)},p:f,d(n){n&&l(e)}}}function J(s){let e;function a(r,i){return r[0].isLoading?N:r[0].error?C:x}let n=a(s),t=n(s);return{c(){e=o("div"),t.c(),this.h()},l(r){e=c(r,"DIV",{class:!0});var i=m(e);t.l(i),i.forEach(l),this.h()},h(){y(e,"class","results")},m(r,i){u(r,e,i),t.m(e,null)},p(r,[i]){n===(n=a(r))&&t?t.p(r,i):(t.d(1),t=n(r),t&&(t.c(),t.m(e,null)))},i:f,o:f,d(r){r&&l(e),t.d()}}}function O(s,e,a){let n;const t=k({operationName:"Countries",input:{filter:{code:{eq:"SA"}}}});return g(s,t,r=>a(0,n=r)),[n,t]}class Q extends E{constructor(e){super(),S(this,e,O,J,v,{})}}export{Q as component};
