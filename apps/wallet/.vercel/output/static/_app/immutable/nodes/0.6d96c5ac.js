import{b as Ze}from"../chunks/environment.60829b93.js";import{S as ue,i as de,a as b,g as U,t as S,c as W,f as be,h as me,b as re,d as oe,m as le,e as ie}from"../chunks/index.95682a25.js";import{Q as xe,a as $e}from"../chunks/QueryClientProvider.2c4a65fb.js";import{r as Me,u as et,v as ge,s as ce,w as v,f as B,a as N,g as z,h as A,c as Q,d as P,j as d,k as _e,i as O,x as q,y as Y,z as K,A as V,B as G,C as tt,D as ne,E as se,F as te,l as qe,m as ve,e as ke,G as fe,H as rt,I as ot,J as ye,K as lt,p as we}from"../chunks/scheduler.405fa0d9.js";import it from"../chunks/ComposeView.c33c3d84.js";import{i as nt,g as Ke}from"../chunks/UserSchema.e7989755.js";import{w as Ve}from"../chunks/index.d6169ac8.js";import{p as st}from"../chunks/ProgressBar.svelte_svelte_type_style_lang.ee117e22.js";const at=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global,ft=async()=>({queryClient:new xe({defaultOptions:{queries:{enabled:Ze}}})}),tr=Object.freeze(Object.defineProperty({__proto__:null,load:ft},Symbol.toStringTag,{value:"Module"}));const ut="modalStore";function dt(){const o=ct();return Me(ut,o)}function ct(){const{subscribe:o,set:e,update:t}=Ve([]);return{subscribe:o,set:e,update:t,trigger:l=>t(n=>(n.push(l),n)),close:()=>t(l=>(l.length>0&&l.shift(),l)),clear:()=>e([])}}const ht={message:"Missing Toast Message",autohide:!0,timeout:5e3},bt="toastStore";function mt(){const o=_t();return Me(bt,o)}function gt(){const o=Math.random();return Number(o).toString(32)}function _t(){const{subscribe:o,set:e,update:t}=Ve([]),l=r=>t(i=>{if(i.length>0){const s=i.findIndex(p=>p.id===r),u=i[s];u&&(u.callback&&u.callback({id:r,status:"closed"}),u.timeoutId&&clearTimeout(u.timeoutId),i.splice(s,1))}return i});function n(r){if(r.autohide===!0)return setTimeout(()=>{l(r.id)},r.timeout)}return{subscribe:o,close:l,trigger:r=>{const i=gt();return t(s=>{r&&r.callback&&r.callback({id:i,status:"queued"}),r.hideDismiss&&(r.autohide=!0);const u={...ht,...r,id:i};return u.timeoutId=n(u),s.push(u),s}),i},freeze:r=>t(i=>(i.length>0&&clearTimeout(i[r].timeoutId),i)),unfreeze:r=>t(i=>(i.length>0&&(i[r].timeoutId=n(i[r])),i)),clear:()=>e([])}}function kt(){dt(),mt(),nt()}function yt(o,e){const t='a[href], button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])';let l,n;function r(E){E.shiftKey&&E.code==="Tab"&&(E.preventDefault(),n.focus())}function i(E){!E.shiftKey&&E.code==="Tab"&&(E.preventDefault(),l.focus())}const s=E=>{if(e===!1)return;const F=Array.from(o.querySelectorAll(t));F.length&&(l=F[0],n=F[F.length-1],E||l.focus(),l.addEventListener("keydown",r),n.addEventListener("keydown",i))};s(!1);function u(){l&&l.removeEventListener("keydown",r),n&&n.removeEventListener("keydown",i)}const p=(E,F)=>(E.length&&(u(),s(!0)),F),L=new MutationObserver(p);return L.observe(o,{childList:!0,subtree:!0}),{update(E){e=E,E?s(!1):u()},destroy(){u(),L.disconnect()}}}function wt(o){const e=o-1;return e*e*e+1}function pe(o,{delay:e=0,duration:t=400,easing:l=et}={}){const n=+getComputedStyle(o).opacity;return{delay:e,duration:t,easing:l,css:r=>`opacity: ${r*n}`}}function De(o,{delay:e=0,duration:t=400,easing:l=wt,x:n=0,y:r=0,opacity:i=0}={}){const s=getComputedStyle(o),u=+s.opacity,p=s.transform==="none"?"":s.transform,L=u*(1-i),[E,F]=ge(n),[_,c]=ge(r);return{delay:e,duration:t,easing:l,css:(H,h)=>`
			transform: ${p} translate(${(1-H)*E}${F}, ${(1-H)*_}${c});
			opacity: ${u-L*h}`}}function ee(o,e){const{transition:t,params:l,enabled:n}=e;return n?t(o,l):"duration"in l?t(o,{duration:0}):{duration:0}}const pt=o=>({}),Ee=o=>({}),Dt=o=>({}),Se=o=>({}),Et=o=>({}),He=o=>({}),St=o=>({}),Te=o=>({}),Ht=o=>({}),Pe=o=>({}),Tt=o=>({}),Fe=o=>({});function Le(o){let e,t,l;const n=o[19].header,r=v(n,o,o[18],Fe);return{c(){e=B("header"),r&&r.c(),this.h()},l(i){e=z(i,"HEADER",{id:!0,class:!0});var s=A(e);r&&r.l(s),s.forEach(P),this.h()},h(){d(e,"id","shell-header"),d(e,"class",t="flex-none "+o[8])},m(i,s){O(i,e,s),r&&r.m(e,null),l=!0},p(i,s){r&&r.p&&(!l||s&262144)&&K(r,n,i,i[18],l?G(n,i[18],s,Tt):V(i[18]),Fe),(!l||s&256&&t!==(t="flex-none "+i[8]))&&d(e,"class",t)},i(i){l||(b(r,i),l=!0)},o(i){S(r,i),l=!1},d(i){i&&P(e),r&&r.d(i)}}}function Re(o){let e,t;const l=o[19].sidebarLeft,n=v(l,o,o[18],Pe);return{c(){e=B("aside"),n&&n.c(),this.h()},l(r){e=z(r,"ASIDE",{id:!0,class:!0});var i=A(e);n&&n.l(i),i.forEach(P),this.h()},h(){d(e,"id","sidebar-left"),d(e,"class",o[7])},m(r,i){O(r,e,i),n&&n.m(e,null),t=!0},p(r,i){n&&n.p&&(!t||i&262144)&&K(n,l,r,r[18],t?G(l,r[18],i,Ht):V(r[18]),Pe),(!t||i&128)&&d(e,"class",r[7])},i(r){t||(b(n,r),t=!0)},o(r){S(n,r),t=!1},d(r){r&&P(e),n&&n.d(r)}}}function Ie(o){let e,t,l;const n=o[19].pageHeader,r=v(n,o,o[18],Te),i=r||Pt();return{c(){e=B("header"),i&&i.c(),this.h()},l(s){e=z(s,"HEADER",{id:!0,class:!0});var u=A(e);i&&i.l(u),u.forEach(P),this.h()},h(){d(e,"id","page-header"),d(e,"class",t="flex-none "+o[5])},m(s,u){O(s,e,u),i&&i.m(e,null),l=!0},p(s,u){r&&r.p&&(!l||u&262144)&&K(r,n,s,s[18],l?G(n,s[18],u,St):V(s[18]),Te),(!l||u&32&&t!==(t="flex-none "+s[5]))&&d(e,"class",t)},i(s){l||(b(i,s),l=!0)},o(s){S(i,s),l=!1},d(s){s&&P(e),i&&i.d(s)}}}function Pt(o){let e;return{c(){e=qe("(slot:header)")},l(t){e=ve(t,"(slot:header)")},m(t,l){O(t,e,l)},d(t){t&&P(e)}}}function Ce(o){let e,t,l;const n=o[19].pageFooter,r=v(n,o,o[18],He),i=r||Ft();return{c(){e=B("footer"),i&&i.c(),this.h()},l(s){e=z(s,"FOOTER",{id:!0,class:!0});var u=A(e);i&&i.l(u),u.forEach(P),this.h()},h(){d(e,"id","page-footer"),d(e,"class",t="flex-none "+o[3])},m(s,u){O(s,e,u),i&&i.m(e,null),l=!0},p(s,u){r&&r.p&&(!l||u&262144)&&K(r,n,s,s[18],l?G(n,s[18],u,Et):V(s[18]),He),(!l||u&8&&t!==(t="flex-none "+s[3]))&&d(e,"class",t)},i(s){l||(b(i,s),l=!0)},o(s){S(i,s),l=!1},d(s){s&&P(e),i&&i.d(s)}}}function Ft(o){let e;return{c(){e=qe("(slot:footer)")},l(t){e=ve(t,"(slot:footer)")},m(t,l){O(t,e,l)},d(t){t&&P(e)}}}function Be(o){let e,t;const l=o[19].sidebarRight,n=v(l,o,o[18],Se);return{c(){e=B("aside"),n&&n.c(),this.h()},l(r){e=z(r,"ASIDE",{id:!0,class:!0});var i=A(e);n&&n.l(i),i.forEach(P),this.h()},h(){d(e,"id","sidebar-right"),d(e,"class",o[6])},m(r,i){O(r,e,i),n&&n.m(e,null),t=!0},p(r,i){n&&n.p&&(!t||i&262144)&&K(n,l,r,r[18],t?G(l,r[18],i,Dt):V(r[18]),Se),(!t||i&64)&&d(e,"class",r[6])},i(r){t||(b(n,r),t=!0)},o(r){S(n,r),t=!1},d(r){r&&P(e),n&&n.d(r)}}}function ze(o){let e,t,l;const n=o[19].footer,r=v(n,o,o[18],Ee);return{c(){e=B("footer"),r&&r.c(),this.h()},l(i){e=z(i,"FOOTER",{id:!0,class:!0});var s=A(e);r&&r.l(s),s.forEach(P),this.h()},h(){d(e,"id","shell-footer"),d(e,"class",t="flex-none "+o[2])},m(i,s){O(i,e,s),r&&r.m(e,null),l=!0},p(i,s){r&&r.p&&(!l||s&262144)&&K(r,n,i,i[18],l?G(n,i[18],s,pt):V(i[18]),Ee),(!l||s&4&&t!==(t="flex-none "+i[2]))&&d(e,"class",t)},i(i){l||(b(r,i),l=!0)},o(i){S(r,i),l=!1},d(i){i&&P(e),r&&r.d(i)}}}function Lt(o){let e,t,l,n,r,i,s,u,p,L,E,F,_,c,H,h=o[10].header&&Le(o),k=o[10].sidebarLeft&&Re(o),y=o[10].pageHeader&&Ie(o);const I=o[19].default,T=v(I,o,o[18],null);let w=o[10].pageFooter&&Ce(o),g=o[10].sidebarRight&&Be(o),D=o[10].footer&&ze(o);return{c(){e=B("div"),h&&h.c(),t=N(),l=B("div"),k&&k.c(),n=N(),r=B("div"),y&&y.c(),i=N(),s=B("main"),T&&T.c(),p=N(),w&&w.c(),E=N(),g&&g.c(),F=N(),D&&D.c(),this.h()},l(f){e=z(f,"DIV",{id:!0,class:!0,"data-testid":!0});var m=A(e);h&&h.l(m),t=Q(m),l=z(m,"DIV",{class:!0});var C=A(l);k&&k.l(C),n=Q(C),r=z(C,"DIV",{id:!0,class:!0});var M=A(r);y&&y.l(M),i=Q(M),s=z(M,"MAIN",{id:!0,class:!0});var j=A(s);T&&T.l(j),j.forEach(P),p=Q(M),w&&w.l(M),M.forEach(P),E=Q(C),g&&g.l(C),C.forEach(P),F=Q(m),D&&D.l(m),m.forEach(P),this.h()},h(){d(s,"id","page-content"),d(s,"class",u="flex-auto "+o[4]),d(r,"id","page"),d(r,"class",L=o[1]+" "+Ae),_e(r,"scrollbarGutter",o[0]),d(l,"class","flex-auto "+It),d(e,"id","appShell"),d(e,"class",o[9]),d(e,"data-testid","app-shell")},m(f,m){O(f,e,m),h&&h.m(e,null),q(e,t),q(e,l),k&&k.m(l,null),q(l,n),q(l,r),y&&y.m(r,null),q(r,i),q(r,s),T&&T.m(s,null),q(r,p),w&&w.m(r,null),q(l,E),g&&g.m(l,null),q(e,F),D&&D.m(e,null),_=!0,c||(H=Y(r,"scroll",o[20]),c=!0)},p(f,[m]){f[10].header?h?(h.p(f,m),m&1024&&b(h,1)):(h=Le(f),h.c(),b(h,1),h.m(e,t)):h&&(U(),S(h,1,1,()=>{h=null}),W()),f[10].sidebarLeft?k?(k.p(f,m),m&1024&&b(k,1)):(k=Re(f),k.c(),b(k,1),k.m(l,n)):k&&(U(),S(k,1,1,()=>{k=null}),W()),f[10].pageHeader?y?(y.p(f,m),m&1024&&b(y,1)):(y=Ie(f),y.c(),b(y,1),y.m(r,i)):y&&(U(),S(y,1,1,()=>{y=null}),W()),T&&T.p&&(!_||m&262144)&&K(T,I,f,f[18],_?G(I,f[18],m,null):V(f[18]),null),(!_||m&16&&u!==(u="flex-auto "+f[4]))&&d(s,"class",u),f[10].pageFooter?w?(w.p(f,m),m&1024&&b(w,1)):(w=Ce(f),w.c(),b(w,1),w.m(r,null)):w&&(U(),S(w,1,1,()=>{w=null}),W()),(!_||m&2&&L!==(L=f[1]+" "+Ae))&&d(r,"class",L),m&1&&_e(r,"scrollbarGutter",f[0]),f[10].sidebarRight?g?(g.p(f,m),m&1024&&b(g,1)):(g=Be(f),g.c(),b(g,1),g.m(l,null)):g&&(U(),S(g,1,1,()=>{g=null}),W()),f[10].footer?D?(D.p(f,m),m&1024&&b(D,1)):(D=ze(f),D.c(),b(D,1),D.m(e,null)):D&&(U(),S(D,1,1,()=>{D=null}),W()),(!_||m&512)&&d(e,"class",f[9])},i(f){_||(b(h),b(k),b(y),b(T,f),b(w),b(g),b(D),_=!0)},o(f){S(h),S(k),S(y),S(T,f),S(w),S(g),S(D),_=!1},d(f){f&&P(e),h&&h.d(),k&&k.d(),y&&y.d(),T&&T.d(f),w&&w.d(),g&&g.d(),D&&D.d(),c=!1,H()}}}const Rt="w-full h-full flex flex-col overflow-hidden",It="w-full h-full flex overflow-hidden",Ae="flex-1 overflow-x-hidden flex flex-col",Ct="flex-none overflow-x-hidden overflow-y-auto",Bt="flex-none overflow-x-hidden overflow-y-auto";function zt(o,e,t){let l,n,r,i,s,u,p,L,{$$slots:E={},$$scope:F}=e;const _=tt(E);let{scrollbarGutter:c="auto"}=e,{regionPage:H=""}=e,{slotHeader:h="z-10"}=e,{slotSidebarLeft:k="w-auto"}=e,{slotSidebarRight:y="w-auto"}=e,{slotPageHeader:I=""}=e,{slotPageContent:T=""}=e,{slotPageFooter:w=""}=e,{slotFooter:g=""}=e;function D(f){te.call(this,o,f)}return o.$$set=f=>{t(21,e=ne(ne({},e),se(f))),"scrollbarGutter"in f&&t(0,c=f.scrollbarGutter),"regionPage"in f&&t(1,H=f.regionPage),"slotHeader"in f&&t(11,h=f.slotHeader),"slotSidebarLeft"in f&&t(12,k=f.slotSidebarLeft),"slotSidebarRight"in f&&t(13,y=f.slotSidebarRight),"slotPageHeader"in f&&t(14,I=f.slotPageHeader),"slotPageContent"in f&&t(15,T=f.slotPageContent),"slotPageFooter"in f&&t(16,w=f.slotPageFooter),"slotFooter"in f&&t(17,g=f.slotFooter),"$$scope"in f&&t(18,F=f.$$scope)},o.$$.update=()=>{t(9,l=`${Rt} ${e.class??""}`),o.$$.dirty&2048&&t(8,n=`${h}`),o.$$.dirty&4096&&t(7,r=`${Ct} ${k}`),o.$$.dirty&8192&&t(6,i=`${Bt} ${y}`),o.$$.dirty&16384&&t(5,s=`${I}`),o.$$.dirty&32768&&t(4,u=`${T}`),o.$$.dirty&65536&&t(3,p=`${w}`),o.$$.dirty&131072&&t(2,L=`${g}`)},e=se(e),[c,H,L,p,u,s,i,r,n,l,_,h,k,y,I,T,w,g,F,E,D]}class At extends ue{constructor(e){super(),de(this,e,zt,Lt,ce,{scrollbarGutter:0,regionPage:1,slotHeader:11,slotSidebarLeft:12,slotSidebarRight:13,slotPageHeader:14,slotPageContent:15,slotPageFooter:16,slotFooter:17})}}const{window:Ot}=at;function Oe(o){let e,t,l,n,r,i,s,u,p,L,E;const F=o[31].default,_=v(F,o,o[30],null);return{c(){e=B("div"),t=B("div"),_&&_.c(),this.h()},l(c){e=z(c,"DIV",{class:!0,"data-testid":!0});var H=A(e);t=z(H,"DIV",{class:!0,"data-testid":!0,role:!0,"aria-modal":!0,"aria-labelledby":!0,"aria-describedby":!0});var h=A(t);_&&_.l(h),h.forEach(P),H.forEach(P),this.h()},h(){d(t,"class",l="drawer "+o[7]),d(t,"data-testid","drawer"),d(t,"role","dialog"),d(t,"aria-modal","true"),d(t,"aria-labelledby",o[0]),d(t,"aria-describedby",o[1]),d(e,"class",i="drawer-backdrop "+o[8]),d(e,"data-testid","drawer-backdrop")},m(c,H){O(c,e,H),q(e,t),_&&_.m(t,null),o[35](t),o[36](e),p=!0,L||(E=[Y(e,"mousedown",o[11]),Y(e,"touchstart",o[32]),Y(e,"touchend",o[33]),Y(e,"keypress",o[34]),ot(yt.call(null,e,!0))],L=!0)},p(c,H){o=c,_&&_.p&&(!p||H[0]&1073741824)&&K(_,F,o,o[30],p?G(F,o[30],H,null):V(o[30]),null),(!p||H[0]&128&&l!==(l="drawer "+o[7]))&&d(t,"class",l),(!p||H[0]&1)&&d(t,"aria-labelledby",o[0]),(!p||H[0]&2)&&d(t,"aria-describedby",o[1]),(!p||H[0]&256&&i!==(i="drawer-backdrop "+o[8]))&&d(e,"class",i)},i(c){p||(b(_,c),c&&ye(()=>{p&&(r&&r.end(1),n=be(t,ee,{transition:De,params:{x:o[6].x,y:o[6].y,duration:150,opacity:o[2]?void 0:1},enabled:o[3]}),n.start())}),c&&ye(()=>{p&&(u&&u.end(1),s=be(e,ee,{transition:pe,params:{duration:150},enabled:o[3]&&o[2]}),s.start())}),p=!0)},o(c){S(_,c),n&&n.invalidate(),c&&(r=me(t,ee,{transition:De,params:{x:o[6].x,y:o[6].y,duration:150,opacity:o[2]?void 0:1},enabled:o[3]})),s&&s.invalidate(),c&&(u=me(e,ee,{transition:pe,params:{duration:150},enabled:o[3]&&o[2]})),p=!1},d(c){c&&P(e),_&&_.d(c),o[35](null),c&&r&&r.end(),o[36](null),c&&u&&u.end(),L=!1,lt(E)}}}function Mt(o){let e,t,l,n,r=o[9].open===!0&&Oe(o);return{c(){r&&r.c(),e=ke()},l(i){r&&r.l(i),e=ke()},m(i,s){r&&r.m(i,s),O(i,e,s),t=!0,l||(n=Y(Ot,"keydown",o[12]),l=!0)},p(i,s){i[9].open===!0?r?(r.p(i,s),s[0]&512&&b(r,1)):(r=Oe(i),r.c(),b(r,1),r.m(e.parentNode,e)):r&&(U(),S(r,1,1,()=>{r=null}),W())},i(i){t||(b(r),t=!0)},o(i){S(r),t=!1},d(i){i&&P(e),r&&r.d(i),l=!1,n()}}}const qt="fixed top-0 left-0 right-0 bottom-0 flex",vt="overflow-y-auto transition-transform";function Kt(o,e,t){let l,n,r,i,s,u,p,L;fe(o,st,a=>t(37,L=a));let{$$slots:E={},$$scope:F}=e;const _=rt();let{position:c="left"}=e,{bgBackdrop:H="bg-surface-backdrop-token"}=e,{blur:h=""}=e,{padding:k=""}=e,{bgDrawer:y="bg-surface-100-800-token"}=e,{border:I=""}=e,{rounded:T=""}=e,{shadow:w="shadow-xl"}=e,{width:g=""}=e,{height:D=""}=e,{zIndex:f="z-40"}=e,{regionBackdrop:m=""}=e,{regionDrawer:C=""}=e,{labelledby:M=""}=e,{describedby:j=""}=e,{transitions:he=!L}=e,{opacityTransition:Z=!0}=e;const x={top:{alignment:"items-start",width:"w-full",height:"h-[50%]",rounded:"rounded-bl-container-token rounded-br-container-token"},bottom:{alignment:"items-end",width:"w-full",height:" h-[50%]",rounded:"rounded-tl-container-token rounded-tr-container-token"},left:{alignment:"justify-start",width:"w-[90%]",height:"h-full",rounded:"rounded-tr-container-token rounded-br-container-token"},right:{alignment:"justify-end",width:"w-[90%]",height:"h-full",rounded:"rounded-tl-container-token rounded-bl-container-token"}};let $,ae,J={x:0,y:0};const X=Ke();fe(o,X,a=>t(9,p=a));const R={position:c,bgBackdrop:H,blur:h,padding:k,bgDrawer:y,border:I,rounded:T,shadow:w,width:g,height:D,opacityTransition:Z,labelledby:M,describedby:j,regionBackdrop:m,regionDrawer:C};function Ge(a){t(13,c=a.position||R.position),t(14,H=a.bgBackdrop||R.bgBackdrop),t(15,h=a.blur||R.blur),t(16,k=a.padding||R.padding),t(17,y=a.bgDrawer||R.bgDrawer),t(18,I=a.border||R.border),t(19,T=a.rounded||R.rounded),t(20,w=a.shadow||R.shadow),t(21,g=a.width||R.width),t(22,D=a.height||R.height),t(2,Z=a.opacityTransition||R.opacityTransition),t(23,m=a.regionBackdrop||R.regionBackdrop),t(24,C=a.regionDrawer||R.regionDrawer),t(0,M=a.labelledby||R.labelledby),t(1,j=a.describedby||R.describedby)}function je(){switch(c){case"top":t(6,J={x:0,y:-window.innerWidth});break;case"bottom":t(6,J={x:0,y:window.innerWidth});break;case"left":t(6,J={x:-window.innerHeight,y:0});break;case"right":t(6,J={x:window.innerHeight,y:0});break;default:console.error("Error: unknown position property value.");break}}function Ue(a){a.target===$?(X.close(),_("backdrop",a)):_("drawer",a)}function We(a){p&&a.code==="Escape"&&X.close()}X.subscribe(a=>{a.open===!0&&(Ge(a),je())});function Ne(a){te.call(this,o,a)}function Qe(a){te.call(this,o,a)}function Ye(a){te.call(this,o,a)}function Je(a){we[a?"unshift":"push"](()=>{ae=a,t(5,ae)})}function Xe(a){we[a?"unshift":"push"](()=>{$=a,t(4,$)})}return o.$$set=a=>{t(43,e=ne(ne({},e),se(a))),"position"in a&&t(13,c=a.position),"bgBackdrop"in a&&t(14,H=a.bgBackdrop),"blur"in a&&t(15,h=a.blur),"padding"in a&&t(16,k=a.padding),"bgDrawer"in a&&t(17,y=a.bgDrawer),"border"in a&&t(18,I=a.border),"rounded"in a&&t(19,T=a.rounded),"shadow"in a&&t(20,w=a.shadow),"width"in a&&t(21,g=a.width),"height"in a&&t(22,D=a.height),"zIndex"in a&&t(25,f=a.zIndex),"regionBackdrop"in a&&t(23,m=a.regionBackdrop),"regionDrawer"in a&&t(24,C=a.regionDrawer),"labelledby"in a&&t(0,M=a.labelledby),"describedby"in a&&t(1,j=a.describedby),"transitions"in a&&t(3,he=a.transitions),"opacityTransition"in a&&t(2,Z=a.opacityTransition),"$$scope"in a&&t(30,F=a.$$scope)},o.$$.update=()=>{o.$$.dirty[0]&8192&&t(29,l=x[c].alignment),o.$$.dirty[0]&2105344&&t(28,n=g||x[c].width),o.$$.dirty[0]&4202496&&t(27,r=D||x[c].height),o.$$.dirty[0]&532480&&t(26,i=T||x[c].rounded),t(8,s=`${qt} ${H} ${k} ${h} ${l} ${m} ${f} ${e.class??""}`),o.$$.dirty[0]&488505344&&t(7,u=`${vt} ${y} ${I} ${T} ${w} ${n} ${r} ${i} ${C}`)},e=se(e),[M,j,Z,he,$,ae,J,u,s,p,X,Ue,We,c,H,h,k,y,I,T,w,g,D,m,C,f,i,r,n,l,F,E,Ne,Qe,Ye,Je,Xe]}class Vt extends ue{constructor(e){super(),de(this,e,Kt,Mt,ce,{position:13,bgBackdrop:14,blur:15,padding:16,bgDrawer:17,border:18,rounded:19,shadow:20,width:21,height:22,zIndex:25,regionBackdrop:23,regionDrawer:24,labelledby:0,describedby:1,transitions:3,opacityTransition:2},null,[-1,-1])}}function Gt(o){let e,t;return e=new it({props:{view:o[1].meta}}),{c(){re(e.$$.fragment)},l(l){oe(e.$$.fragment,l)},m(l,n){le(e,l,n),t=!0},p(l,n){const r={};n&2&&(r.view=l[1].meta),e.$set(r)},i(l){t||(b(e.$$.fragment,l),t=!0)},o(l){S(e.$$.fragment,l),t=!1},d(l){ie(e,l)}}}function jt(o){let e;const t=o[3].default,l=v(t,o,o[4],null);return{c(){l&&l.c()},l(n){l&&l.l(n)},m(n,r){l&&l.m(n,r),e=!0},p(n,r){l&&l.p&&(!e||r&16)&&K(l,t,n,n[4],e?G(t,n[4],r,null):V(n[4]),null)},i(n){e||(b(l,n),e=!0)},o(n){S(l,n),e=!1},d(n){l&&l.d(n)}}}function Ut(o){let e,t,l,n;return e=new Vt({props:{bgDrawer:"bg-white",height:"h-auto",$$slots:{default:[Gt]},$$scope:{ctx:o}}}),l=new At({props:{$$slots:{default:[jt]},$$scope:{ctx:o}}}),{c(){re(e.$$.fragment),t=N(),re(l.$$.fragment)},l(r){oe(e.$$.fragment,r),t=Q(r),oe(l.$$.fragment,r)},m(r,i){le(e,r,i),O(r,t,i),le(l,r,i),n=!0},p(r,i){const s={};i&18&&(s.$$scope={dirty:i,ctx:r}),e.$set(s);const u={};i&16&&(u.$$scope={dirty:i,ctx:r}),l.$set(u)},i(r){n||(b(e.$$.fragment,r),b(l.$$.fragment,r),n=!0)},o(r){S(e.$$.fragment,r),S(l.$$.fragment,r),n=!1},d(r){r&&P(t),ie(e,r),ie(l,r)}}}function Wt(o){let e,t;return e=new $e({props:{client:o[0].queryClient,$$slots:{default:[Ut]},$$scope:{ctx:o}}}),{c(){re(e.$$.fragment)},l(l){oe(e.$$.fragment,l)},m(l,n){le(e,l,n),t=!0},p(l,[n]){const r={};n&1&&(r.client=l[0].queryClient),n&18&&(r.$$scope={dirty:n,ctx:l}),e.$set(r)},i(l){t||(b(e.$$.fragment,l),t=!0)},o(l){S(e.$$.fragment,l),t=!1},d(l){ie(e,l)}}}function Nt(o,e,t){let l,{$$slots:n={},$$scope:r}=e,{data:i}=e;kt();const s=Ke();return fe(o,s,u=>t(1,l=u)),o.$$set=u=>{"data"in u&&t(0,i=u.data),"$$scope"in u&&t(4,r=u.$$scope)},[i,l,s,n,r]}class rr extends ue{constructor(e){super(),de(this,e,Nt,Wt,ce,{data:0})}}export{rr as component,tr as universal};
