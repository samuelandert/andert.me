import{s as K,f as v,a as y,l as B,g,h as C,M,c as D,m as H,d as p,J as N,j as S,i as J,x as f,ag as G,y as L,P as x,K as F,G as Q,ai as O,n as R,ak as U}from"./scheduler.405fa0d9.js";import{S as W,i as X,b as Y,d as Z,m as ee,a as te,t as ne,e as ae}from"./index.95682a25.js";import{e as P}from"./each.c6f74fb0.js";import oe from"./ComposeView.f5312a5b.js";import{w as le}from"./index.d6169ac8.js";const j={id:"Test",layout:{areas:`
			"main"
		`},children:[{id:"Todos",component:"Todos",slot:"main",queries:[{operation:"Countries",input:{filter:{code:{eq:"ES"}}}}]}]};function z(s,e,n){const a=s.slice();return a[7]=e[n],a}function A(s){let e,n=s[7].name+"",a,c;return{c(){e=v("option"),a=B(n),this.h()},l(r){e=g(r,"OPTION",{});var o=C(e);a=H(o,n),o.forEach(p),this.h()},h(){e.__value=c=s[7].value,O(e,e.__value)},m(r,o){J(r,e,o),f(e,a)},p(r,o){o&4&&n!==(n=r[7].name+"")&&R(a,n),o&4&&c!==(c=r[7].value)&&(e.__value=c,O(e,e.__value))},d(r){r&&p(e)}}}function se(s){let e,n,a,c="Editor",r,o,w,u,$,_,d,T,k,V,E=P(s[2]),l=[];for(let t=0;t<E.length;t+=1)l[t]=A(z(s,E,t));return d=new oe({props:{view:s[1]}}),{c(){e=v("div"),n=v("div"),a=v("h2"),a.textContent=c,r=y(),o=v("label"),w=B(`Component:
			`),u=v("select");for(let t=0;t<l.length;t+=1)l[t].c();$=y(),_=v("div"),Y(d.$$.fragment),this.h()},l(t){e=g(t,"DIV",{class:!0});var m=C(e);n=g(m,"DIV",{class:!0});var h=C(n);a=g(h,"H2",{"data-svelte-h":!0}),M(a)!=="svelte-1aegi2z"&&(a.textContent=c),r=D(h),o=g(h,"LABEL",{});var i=C(o);w=H(i,`Component:
			`),u=g(i,"SELECT",{});var b=C(u);for(let I=0;I<l.length;I+=1)l[I].l(b);b.forEach(p),i.forEach(p),h.forEach(p),$=D(m),_=g(m,"DIV",{class:!0});var q=C(_);Z(d.$$.fragment,q),q.forEach(p),m.forEach(p),this.h()},h(){s[0].component===void 0&&N(()=>s[5].call(u)),S(n,"class","w-1/3 h-full overflow-auto"),S(_,"class","w-2/3 h-full overflow-auto"),S(e,"class","h-screen w-screen flex")},m(t,m){J(t,e,m),f(e,n),f(n,a),f(n,r),f(n,o),f(o,w),f(o,u);for(let h=0;h<l.length;h+=1)l[h]&&l[h].m(u,null);G(u,s[0].component,!0),f(e,$),f(e,_),ee(d,_,null),T=!0,k||(V=[L(u,"change",s[5]),L(u,"change",s[6])],k=!0)},p(t,[m]){if(m&4){E=P(t[2]);let i;for(i=0;i<E.length;i+=1){const b=z(t,E,i);l[i]?l[i].p(b,m):(l[i]=A(b),l[i].c(),l[i].m(u,null))}for(;i<l.length;i+=1)l[i].d(1);l.length=E.length}m&5&&G(u,t[0].component);const h={};m&2&&(h.view=t[1]),d.$set(h)},i(t){T||(te(d.$$.fragment,t),T=!0)},o(t){ne(d.$$.fragment,t),T=!1},d(t){t&&p(e),x(l,t),ae(d),k=!1,F(V)}}}function re(s,e,n){let a,c={...j.children[0]},r={...j};const o=le([{name:"Todos",value:"Todos"},{name:"Green",value:"Green"}]);Q(s,o,_=>n(2,a=_));function w(_,d){n(1,r.children=[{...c,component:_,slot:d}],r)}function u(){c.component=U(this),n(0,c)}return[c,r,a,o,w,u,_=>w(_.target.value,c.slot)]}class me extends W{constructor(e){super(),X(this,e,re,se,K,{})}}export{me as default};
