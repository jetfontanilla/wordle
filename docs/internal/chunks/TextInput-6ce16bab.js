import{S as z,i as F,s as L,e as R,c as b,b as d,N as h,g as T,O as v,d as k,P as N,a as P,H as A,Q as S,R as B,v as D,T as H}from"./vendor-40a01dac.js";function E(t,e,l){const s=t.slice();return s[12]=e[l],s[13]=e,s[14]=l,s}function C(t){let e,l,s,n=t[14],u,r;const f=()=>t[4](e,n),_=()=>t[4](null,n);function p(...i){return t[5](t[14],...i)}function m(...i){return t[6](t[14],...i)}function y(...i){return t[7](t[14],...i)}return{c(){e=R("input"),this.h()},l(i){e=b(i,"INPUT",{size:!0,maxlength:!0,class:!0,type:!0,pattern:!0}),this.h()},h(){var i;d(e,"size","1"),d(e,"maxlength","1"),d(e,"class","letter svelte-1k2v0m0"),d(e,"type","text"),d(e,"pattern","[A-Za-z]"),e.value=l=t[12].value,e.readOnly=s=t[0].readonly?"readonly":void 0,h(e,"readonly",t[0].readonly),h(e,"correct",t[12].correct),h(e,"exists",!t[12].correct&&t[12].exists),h(e,"incorrect",!((i=t[12].exists)!=null?i:!0))},m(i,c){T(i,e,c),f(),u||(r=[v(e,"keydown",p),v(e,"keyup",m),v(e,"input",y)],u=!0)},p(i,c){var g;t=i,c&1&&l!==(l=t[12].value)&&e.value!==l&&(e.value=l),c&1&&s!==(s=t[0].readonly?"readonly":void 0)&&(e.readOnly=s),n!==t[14]&&(_(),n=t[14],f()),c&1&&h(e,"readonly",t[0].readonly),c&1&&h(e,"correct",t[12].correct),c&1&&h(e,"exists",!t[12].correct&&t[12].exists),c&1&&h(e,"incorrect",!((g=t[12].exists)!=null?g:!0))},d(i){i&&k(e),_(),u=!1,N(r)}}}function W(t){let e,l=t[0].state,s=[];for(let n=0;n<l.length;n+=1)s[n]=C(E(t,l,n));return{c(){e=R("div");for(let n=0;n<s.length;n+=1)s[n].c();this.h()},l(n){e=b(n,"DIV",{class:!0});var u=P(e);for(let r=0;r<s.length;r+=1)s[r].l(u);u.forEach(k),this.h()},h(){d(e,"class","attempt")},m(n,u){T(n,e,u);for(let r=0;r<s.length;r+=1)s[r].m(e,null)},p(n,[u]){if(u&15){l=n[0].state;let r;for(r=0;r<l.length;r+=1){const f=E(n,l,r);s[r]?s[r].p(f,u):(s[r]=C(f),s[r].c(),s[r].m(e,null))}for(;r<s.length;r+=1)s[r].d(1);s.length=l.length}},i:A,o:A,d(n){n&&k(e),S(s,n)}}}const w="ArrowLeft",I="ArrowRight",j="Backspace",O="Enter";function q(t,e,l){let{attempt:s}=e,n=[];const u=B();function r(a,o){s.readonly||[w,I,O].includes(o)||l(1,n[a].value="",n)}function f(){var a;s.readonly||(a=n[0])==null||a.focus()}function _(a,o){if(!s.readonly){if(o==O)return f(),u("stateChange",{index:a,letter:o,submit:!0});if(o==w||o==j)return m(a);if(o==I)return p(a);o.length>1||!/[a-z]/i.test(o)||(u("stateChange",{index:a,letter:o,submit:!1}),p(a))}}function p(a){n[a+1]&&n[a+1].focus()}function m(a){n[a-1]&&n[a-1].focus()}D(()=>{f()});function y(a,o){H[a?"unshift":"push"](()=>{n[o]=a,l(1,n)})}const i=(a,o)=>r(a,o.key),c=(a,o)=>_(a,o.key),g=(a,o)=>_(a,o.key);return t.$$set=a=>{"attempt"in a&&l(0,s=a.attempt)},[s,n,r,_,y,i,c,g]}class K extends z{constructor(e){super();F(this,e,q,W,L,{attempt:0})}}export{K as T};
