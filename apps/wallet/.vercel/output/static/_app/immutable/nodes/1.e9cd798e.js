import{s as x,f as u,l as h,a as S,g as d,h as v,m as g,d as m,c as q,i as _,D as E,n as $,z as b,J as y}from"../chunks/scheduler.530ffea1.js";import{S as z,i as C}from"../chunks/index.5e624b26.js";import{p as D}from"../chunks/stores.ce782eb1.js";function H(i){var f;let a,s=i[0].status+"",r,o,n,p=((f=i[0].error)==null?void 0:f.message)+"",c;return{c(){a=u("h1"),r=h(s),o=S(),n=u("p"),c=h(p)},l(e){a=d(e,"H1",{});var t=v(a);r=g(t,s),t.forEach(m),o=q(e),n=d(e,"P",{});var l=v(n);c=g(l,p),l.forEach(m)},m(e,t){_(e,a,t),E(a,r),_(e,o,t),_(e,n,t),E(n,c)},p(e,[t]){var l;t&1&&s!==(s=e[0].status+"")&&$(r,s),t&1&&p!==(p=((l=e[0].error)==null?void 0:l.message)+"")&&$(c,p)},i:b,o:b,d(e){e&&(m(a),m(o),m(n))}}}function J(i,a,s){let r;return y(i,D,o=>s(0,r=o)),[r]}class w extends z{constructor(a){super(),C(this,a,J,H,x,{})}}export{w as component};
