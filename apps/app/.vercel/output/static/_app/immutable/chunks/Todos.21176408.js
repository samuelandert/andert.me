import{s as E,f as _,a as S,g as d,h as y,M as C,c as N,d as f,j as h,i as b,x as m,L as p,G as J,Q as L,l as x,m as g,n as k}from"./scheduler.405fa0d9.js";import{S as O,i as Q}from"./index.95682a25.js";function j(o){let t=JSON.stringify(o[1].data)+"",s;return{c(){s=x(t)},l(e){s=g(e,t)},m(e,a){b(e,s,a)},p(e,a){a&2&&t!==(t=JSON.stringify(e[1].data)+"")&&k(s,t)},d(e){e&&f(s)}}}function q(o){let t,s,e=JSON.stringify(o[1].error,null,2)+"",a;return{c(){t=_("pre"),s=x("Error: "),a=x(e),this.h()},l(n){t=d(n,"PRE",{class:!0});var i=y(t);s=g(i,"Error: "),a=g(i,e),i.forEach(f),this.h()},h(){h(t,"class","text-red-500")},m(n,i){b(n,t,i),m(t,s),m(t,a)},p(n,i){i&2&&e!==(e=JSON.stringify(n[1].error,null,2)+"")&&k(a,e)},d(n){n&&f(t)}}}function M(o){let t,s="Loading...";return{c(){t=_("p"),t.textContent=s,this.h()},l(e){t=d(e,"P",{class:!0,"data-svelte-h":!0}),C(t)!=="svelte-1bhh02z"&&(t.textContent=s),this.h()},h(){h(t,"class","text-lg text-gray-500")},m(e,a){b(e,t,a)},p,d(e){e&&f(t)}}}function P(o){let t,s,e="Todos",a,n;function i(r,u){return r[1].isLoading?M:r[1].error?q:j}let c=i(o),l=c(o);return{c(){t=_("main"),s=_("h1"),s.textContent=e,a=S(),n=_("ul"),l.c(),this.h()},l(r){t=d(r,"MAIN",{class:!0});var u=y(t);s=d(u,"H1",{class:!0,"data-svelte-h":!0}),C(s)!=="svelte-1pulmj3"&&(s.textContent=e),a=N(u),n=d(u,"UL",{class:!0});var v=y(n);l.l(v),v.forEach(f),u.forEach(f),this.h()},h(){h(s,"class","text-4xl font-bold mb-4"),h(n,"class","space-y-4"),h(t,"class","p-6")},m(r,u){b(r,t,u),m(t,s),m(t,a),m(t,n),l.m(n,null)},p(r,[u]){c===(c=i(r))&&l?l.p(r,u):(l.d(1),l=c(r),l&&(l.c(),l.m(n,null)))},i:p,o:p,d(r){r&&f(t),l.d()}}}function T(o,t,s){let e,a=p,n=()=>(a(),a=L(c,r=>s(3,e=r)),c),i;o.$$.on_destroy.push(()=>a());let{me:c}=t;n();const l=e.queries.Countries;return J(o,l,r=>s(1,i=r)),o.$$set=r=>{"me"in r&&n(s(0,c=r.me))},[c,i,l]}class G extends O{constructor(t){super(),Q(this,t,T,P,E,{me:0})}}export{G as default};
