import{s as v,H as w,f as I,g as E,h as x,d as m,a9 as p,i as y,ad as _,x as A,u as g,K as h,o as T,p as S}from"./scheduler.6e6fc796.js";import{g as k}from"./spread.8a54911c.js";import{S as q,i as C}from"./index.0e200954.js";function H(a){let n,s,u,t,i,f,l=[{name:s=a[5].name},{class:u="w-full px-3 py-2 text-3xl bg-transparent border-gray-100 rounded-md textarea border-1 ring-0 ring-white focus:outline-none focus:ring-2 focus:ring-blue-500 "+(a[1][a[5].name]?"input-warning":"")},{"aria-invalid":t=a[1][a[5].name]?"true":void 0},a[6][a[5].name]],o={};for(let e=0;e<l.length;e+=1)o=w(o,l[e]);return{c(){n=I("textarea"),this.h()},l(e){n=E(e,"TEXTAREA",{name:!0,class:!0,"aria-invalid":!0}),x(n).forEach(m),this.h()},h(){p(n,o)},m(e,d){y(e,n,d),n.autofocus&&n.focus(),a[8](n),_(n,a[2][a[5].name]),i||(f=A(n,"input",a[9]),i=!0)},p(e,[d]){p(n,o=k(l,[{name:s},d&2&&u!==(u="w-full px-3 py-2 text-3xl bg-transparent border-gray-100 rounded-md textarea border-1 ring-0 ring-white focus:outline-none focus:ring-2 focus:ring-blue-500 "+(e[1][e[5].name]?"input-warning":""))&&{class:u},d&2&&t!==(t=e[1][e[5].name]?"true":void 0)&&{"aria-invalid":t},e[6][e[5].name]])),d&36&&_(n,e[2][e[5].name])},i:g,o:g,d(e){e&&m(n),a[8](null),i=!1,f()}}}function K(a,n,s){let u,t,i,{childInput:f}=n;const{form:l,errors:o,field:e,constraints:d}=f;h(a,l,r=>s(2,t=r)),h(a,o,r=>s(1,u=r)),T(()=>{i.focus()});function c(r){S[r?"unshift":"push"](()=>{i=r,s(0,i)})}function b(){t[e.name]=this.value,l.set(t)}return a.$$set=r=>{"childInput"in r&&s(7,f=r.childInput)},[i,u,t,l,o,e,d,f,c,b]}class j extends q{constructor(n){super(),C(this,n,K,H,v,{childInput:7})}}export{j as default};
