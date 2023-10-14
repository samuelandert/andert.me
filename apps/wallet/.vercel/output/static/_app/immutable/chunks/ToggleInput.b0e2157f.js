import{s as U,G as K,f as S,a as G,g as B,h as j,c as H,d as I,a9 as J,j as g,ah as C,i as O,D as z,E as _,M as ce,an as M,F as oe,K as re,H as N,r as ue,u as de,v as fe,w as he,I as v,p as ge,ao as be,J as me}from"./scheduler.530ffea1.js";import{S as Q,i as W,a as q,g as _e,t as w,c as ke,j as ve,b as pe,d as Ee,m as Ie,e as Te}from"./index.5e624b26.js";import{g as X,a as De}from"./spread.8a54911c.js";import"./UserSchema.20c1aece.js";function R(l){let e,a;const t=l[22].default,c=ue(t,l,l[21],null);return{c(){e=S("div"),c&&c.c(),this.h()},l(r){e=B(r,"DIV",{class:!0});var o=j(e);c&&c.l(o),o.forEach(I),this.h()},h(){g(e,"class","slide-toggle-text ml-3")},m(r,o){O(r,e,o),c&&c.m(e,null),a=!0},p(r,o){c&&c.p&&(!a||o[0]&2097152)&&de(c,t,r,r[21],a?he(t,r[21],o,null):fe(r[21]),null)},i(r){a||(q(c,r),a=!0)},o(r){w(c,r),a=!1},d(r){r&&I(e),c&&c.d(r)}}}function ye(l){let e,a,t,c,r,o,i,b,f,T,p,k,h,D,A,L=[{type:"checkbox"},{class:"slide-toggle-input hidden"},{name:l[1]},l[8](),{disabled:c=l[9].disabled}],E={};for(let n=0;n<L.length;n+=1)E=K(E,L[n]);let u=l[10].default&&R(l);return{c(){e=S("div"),a=S("label"),t=S("input"),r=G(),o=S("div"),i=S("div"),T=G(),u&&u.c(),this.h()},l(n){e=B(n,"DIV",{id:!0,class:!0,"data-testid":!0,role:!0,"aria-label":!0,"aria-checked":!0,tabindex:!0});var d=j(e);a=B(d,"LABEL",{class:!0});var m=j(a);t=B(m,"INPUT",{type:!0,class:!0,name:!0}),r=H(m),o=B(m,"DIV",{class:!0});var y=j(o);i=B(y,"DIV",{class:!0}),j(i).forEach(I),y.forEach(I),T=H(m),u&&u.l(m),m.forEach(I),d.forEach(I),this.h()},h(){J(t,E),g(i,"class",b="slide-toggle-thumb "+l[3]),C(i,"cursor-not-allowed",l[9].disabled),g(o,"class",f="slide-toggle-track "+l[4]),C(o,"cursor-not-allowed",l[9].disabled),g(a,"class",p="slide-toggle-label "+l[5]),g(e,"id",l[2]),g(e,"class",k="slide-toggle "+l[6]),g(e,"data-testid","slide-toggle"),g(e,"role","switch"),g(e,"aria-label",l[2]),g(e,"aria-checked",l[0]),g(e,"tabindex","0")},m(n,d){O(n,e,d),z(e,a),z(a,t),t.autofocus&&t.focus(),t.checked=l[0],z(a,r),z(a,o),z(o,i),z(a,T),u&&u.m(a,null),h=!0,D||(A=[_(t,"change",l[31]),_(t,"click",l[23]),_(t,"keydown",l[24]),_(t,"keyup",l[25]),_(t,"keypress",l[26]),_(t,"mouseover",l[27]),_(t,"change",l[28]),_(t,"focus",l[29]),_(t,"blur",l[30]),_(e,"keydown",l[7])],D=!0)},p(n,d){J(t,E=X(L,[{type:"checkbox"},{class:"slide-toggle-input hidden"},(!h||d[0]&2)&&{name:n[1]},n[8](),(!h||d[0]&512&&c!==(c=n[9].disabled))&&{disabled:c}])),d[0]&1&&(t.checked=n[0]),(!h||d[0]&8&&b!==(b="slide-toggle-thumb "+n[3]))&&g(i,"class",b),(!h||d[0]&520)&&C(i,"cursor-not-allowed",n[9].disabled),(!h||d[0]&16&&f!==(f="slide-toggle-track "+n[4]))&&g(o,"class",f),(!h||d[0]&528)&&C(o,"cursor-not-allowed",n[9].disabled),n[10].default?u?(u.p(n,d),d[0]&1024&&q(u,1)):(u=R(n),u.c(),q(u,1),u.m(a,null)):u&&(_e(),w(u,1,1,()=>{u=null}),ke()),(!h||d[0]&32&&p!==(p="slide-toggle-label "+n[5]))&&g(a,"class",p),(!h||d[0]&4)&&g(e,"id",n[2]),(!h||d[0]&64&&k!==(k="slide-toggle "+n[6]))&&g(e,"class",k),(!h||d[0]&4)&&g(e,"aria-label",n[2]),(!h||d[0]&1)&&g(e,"aria-checked",n[0])},i(n){h||(q(u),h=!0)},o(n){w(u),h=!1},d(n){n&&I(e),u&&u.d(),D=!1,ce(A)}}}const ze="inline-block",Se="unstyled flex items-center",Be="flex transition-all duration-[200ms] cursor-pointer",Le="w-[50%] h-full scale-[0.8] transition-all duration-[200ms] shadow";function Pe(l,e,a){let t,c,r,o,i,b,f,T;const p=["name","checked","size","background","active","border","rounded","label"];let k=M(e,p),{$$slots:h={},$$scope:D}=e;const A=oe(h),L=re();let{name:E}=e,{checked:u=!1}=e,{size:n="md"}=e,{background:d="bg-surface-400 dark:bg-surface-700"}=e,{active:m="bg-surface-900 dark:bg-surface-300"}=e,{border:y=""}=e,{rounded:P="rounded-full"}=e,{label:F=""}=e,V;switch(n){case"sm":V="w-12 h-6";break;case"lg":V="w-20 h-10";break;default:V="w-16 h-8"}function Y(s){["Enter","Space"].includes(s.code)&&(s.preventDefault(),L("keyup",s),s.currentTarget.firstChild.click())}function Z(){return delete k.class,k}function x(s){v.call(this,l,s)}function $(s){v.call(this,l,s)}function ee(s){v.call(this,l,s)}function le(s){v.call(this,l,s)}function ae(s){v.call(this,l,s)}function se(s){v.call(this,l,s)}function te(s){v.call(this,l,s)}function ie(s){v.call(this,l,s)}function ne(){u=this.checked,a(0,u)}return l.$$set=s=>{a(9,e=K(K({},e),N(s))),a(33,k=M(e,p)),"name"in s&&a(1,E=s.name),"checked"in s&&a(0,u=s.checked),"size"in s&&a(11,n=s.size),"background"in s&&a(12,d=s.background),"active"in s&&a(13,m=s.active),"border"in s&&a(14,y=s.border),"rounded"in s&&a(15,P=s.rounded),"label"in s&&a(2,F=s.label),"$$scope"in s&&a(21,D=s.$$scope)},l.$$.update=()=>{l.$$.dirty[0]&12289&&a(19,t=u?m:`${d} cursor-pointer`),l.$$.dirty[0]&1&&a(18,c=u?"bg-white/75":"bg-white"),l.$$.dirty[0]&1&&a(17,r=u?"translate-x-full":""),a(20,o=e.disabled===!0?"opacity-50":"hover:brightness-[105%] dark:hover:brightness-110 cursor-pointer"),a(6,i=`${ze} ${P} ${o} ${e.class??""}`),l.$$.dirty[0]&638976&&a(4,f=`${Be} ${y} ${P} ${V} ${t}`),l.$$.dirty[0]&425984&&a(3,T=`${Le} ${P} ${c} ${r}`)},a(5,b=`${Se}`),e=N(e),[u,E,F,T,f,b,i,Y,Z,e,A,n,d,m,y,P,V,r,c,t,o,D,h,x,$,ee,le,ae,se,te,ie,ne]}class Ve extends Q{constructor(e){super(),W(this,e,Pe,ye,U,{name:1,checked:0,size:11,background:12,active:13,border:14,rounded:15,label:2},null,[-1,-1])}}function je(l){let e,a,t;const c=[{name:l[2].name},l[3][l[2].name]];function r(i){l[5](i)}let o={};for(let i=0;i<c.length;i+=1)o=K(o,c[i]);return l[0][l[2].name]!==void 0&&(o.checked=l[0][l[2].name]),e=new Ve({props:o}),ge.push(()=>ve(e,"checked",r)),{c(){pe(e.$$.fragment)},l(i){Ee(e.$$.fragment,i)},m(i,b){Ie(e,i,b),t=!0},p(i,[b]){const f=b&12?X(c,[b&4&&{name:i[2].name},De(i[3][i[2].name])]):{};!a&&b&5&&(a=!0,f.checked=i[0][i[2].name],be(()=>a=!1)),e.$set(f)},i(i){t||(q(e.$$.fragment,i),t=!0)},o(i){w(e.$$.fragment,i),t=!1},d(i){Te(e,i)}}}function qe(l,e,a){let t,{childInput:c}=e;const{form:r,field:o,constraints:i}=c;me(l,r,f=>a(0,t=f));function b(f){l.$$.not_equal(t[o.name],f)&&(t[o.name]=f,r.set(t))}return l.$$set=f=>{"childInput"in f&&a(4,c=f.childInput)},[t,r,o,i,c,b]}class Ge extends Q{constructor(e){super(),W(this,e,qe,je,U,{childInput:4})}}export{Ge as default};
