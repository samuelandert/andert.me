import{s as O,D as S,f as y,a as C,g as w,h as j,M as N,c as T,d as D,j as h,a9 as k,ah as q,i as x,x as g,ai as U,y as I,am as M,L as B,K as G,G as E,o as K,p as L}from"./scheduler.df63c2e8.js";import{g as P}from"./spread.8a54911c.js";import{S as V,i as z}from"./index.8a30a216.js";function A(t){let s,i,c="-",m,n,d,o,p,u,l,b="+",f,v,_=[{name:d=t[5].name},{type:"number"},{class:o="bg-white-custom w-full h-16 md:h-24 px-3 py-2 text-secondary-500 text-4xl md:text-6xl ring-white focus:outline-none focus:ring-2 focus:ring-primary-500 "+(t[1][t[5].name]?"input-warning":"")},{"aria-invalid":p=t[1][t[5].name]?"true":void 0},t[6][t[5].name]],a={};for(let e=0;e<_.length;e+=1)a=S(a,_[e]);return{c(){s=y("div"),i=y("button"),i.textContent=c,m=C(),n=y("input"),u=C(),l=y("button"),l.textContent=b,this.h()},l(e){s=w(e,"DIV",{class:!0});var r=j(s);i=w(r,"BUTTON",{type:!0,class:!0,"data-svelte-h":!0}),N(i)!=="svelte-62qtt4"&&(i.textContent=c),m=T(r),n=w(r,"INPUT",{name:!0,type:!0,class:!0,"aria-invalid":!0}),u=T(r),l=w(r,"BUTTON",{type:!0,class:!0,"data-svelte-h":!0}),N(l)!=="svelte-q8dfm6"&&(l.textContent=b),r.forEach(D),this.h()},h(){h(i,"type","button"),h(i,"class","variant-number text-white bg-secondary-400 svelte-a41dc2"),k(n,a),q(n,"svelte-a41dc2",!0),h(l,"type","button"),h(l,"class","variant-number text-white bg-secondary-400 svelte-a41dc2"),h(s,"class","input-group input-group-divider grid grid-cols-[auto,1fr,auto]")},m(e,r){x(e,s,r),g(s,i),g(s,m),g(s,n),n.autofocus&&n.focus(),t[10](n),U(n,t[2][t[5].name]),g(s,u),g(s,l),f||(v=[I(i,"click",t[8]),I(n,"input",t[11]),I(l,"click",t[7])],f=!0)},p(e,[r]){k(n,a=P(_,[{name:d},{type:"number"},r&2&&o!==(o="bg-white-custom w-full h-16 md:h-24 px-3 py-2 text-secondary-500 text-4xl md:text-6xl ring-white focus:outline-none focus:ring-2 focus:ring-primary-500 "+(e[1][e[5].name]?"input-warning":""))&&{class:o},r&2&&p!==(p=e[1][e[5].name]?"true":void 0)&&{"aria-invalid":p},e[6][e[5].name]])),r&36&&M(n.value)!==e[2][e[5].name]&&U(n,e[2][e[5].name]),q(n,"svelte-a41dc2",!0)},i:B,o:B,d(e){e&&D(s),t[10](null),f=!1,G(v)}}}function F(t,s,i){let c,m,n,{childInput:d}=s;const{form:o,errors:p,field:u,constraints:l}=d;E(t,o,a=>i(2,m=a)),E(t,p,a=>i(1,c=a)),K(()=>{n.focus()});function b(a){a.preventDefault(),o.update(e=>(e[u.name]=e[u.name]?Number(e[u.name])+1:1,e))}function f(a){a.preventDefault(),o.update(e=>(e[u.name]=e[u.name]?Number(e[u.name])-1:0,e))}function v(a){L[a?"unshift":"push"](()=>{n=a,i(0,n)})}function _(){m[u.name]=M(this.value),o.set(m)}return t.$$set=a=>{"childInput"in a&&i(9,d=a.childInput)},[n,c,m,o,p,u,l,b,f,d,v,_]}class R extends V{constructor(s){super(),z(this,s,F,A,O,{childInput:9})}}export{R as default};
