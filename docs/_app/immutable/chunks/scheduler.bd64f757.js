var W=Object.defineProperty;var I=(t,e,n)=>e in t?W(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var f=(t,e,n)=>(I(t,typeof e!="symbol"?e+"":e,n),n);function L(){}function O(t,e){for(const n in e)t[n]=e[n];return t}function G(t){return t()}function lt(){return Object.create(null)}function R(t){t.forEach(G)}function F(t){return typeof t=="function"}function at(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let p;function ut(t,e){return t===e?!0:(p||(p=document.createElement("a")),p.href=e,t===p.href)}function ft(t){return Object.keys(t).length===0}function P(t,...e){if(t==null){for(const i of e)i(void 0);return L}const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function dt(t){let e;return P(t,n=>e=n)(),e}function _t(t,e,n){t.$$.on_destroy.push(P(e,n))}function ht(t,e,n,i){if(t){const s=j(t,e,n,i);return t[0](s)}}function j(t,e,n,i){return t[1]&&i?O(n.ctx.slice(),t[1](i(e))):n.ctx}function mt(t,e,n,i){if(t[2]&&i){const s=t[2](i(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const c=[],r=Math.max(e.dirty.length,s.length);for(let l=0;l<r;l+=1)c[l]=e.dirty[l]|s[l];return c}return e.dirty|s}return e.dirty}function pt(t,e,n,i,s,c){if(s){const r=j(e,n,i,c);t.p(r,s)}}function yt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function bt(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function gt(t,e){const n={};e=new Set(e);for(const i in t)!e.has(i)&&i[0]!=="$"&&(n[i]=t[i]);return n}function xt(t){return t??""}function wt(t,e,n){return t.set(n),e}function vt(t){return t&&F(t.destroy)?t.destroy:L}let x=!1;function Et(){x=!0}function Tt(){x=!1}function U(t,e,n,i){for(;t<e;){const s=t+(e-t>>1);n(s)<=i?t=s+1:e=s}return t}function J(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const o=[];for(let a=0;a<e.length;a++){const u=e[a];u.claim_order!==void 0&&o.push(u)}e=o}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let s=0;for(let o=0;o<e.length;o++){const a=e[o].claim_order,u=(s>0&&e[n[s]].claim_order<=a?s+1:U(1,s,B=>e[n[B]].claim_order,a))-1;i[o]=n[u]+1;const k=u+1;n[k]=o,s=Math.max(k,s)}const c=[],r=[];let l=e.length-1;for(let o=n[s]+1;o!=0;o=i[o-1]){for(c.push(e[o-1]);l>=o;l--)r.push(e[l]);l--}for(;l>=0;l--)r.push(e[l]);c.reverse(),r.sort((o,a)=>o.claim_order-a.claim_order);for(let o=0,a=0;o<r.length;o++){for(;a<c.length&&r[o].claim_order>=c[a].claim_order;)a++;const u=a<c.length?c[a]:null;t.insertBefore(r[o],u)}}function K(t,e){t.appendChild(e)}function Q(t,e){if(x){for(J(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function V(t,e,n){t.insertBefore(e,n||null)}function X(t,e,n){x&&!n?Q(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function b(t){t.parentNode&&t.parentNode.removeChild(t)}function Nt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function N(t){return document.createElement(t)}function Y(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function A(t){return document.createTextNode(t)}function At(){return A(" ")}function kt(){return A("")}function S(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function St(t){return function(e){return e.stopPropagation(),t.call(this,e)}}function Ct(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Ht(t){return t.dataset.svelteH}function Mt(t){return t===""?null:+t}function Lt(t){return Array.from(t.childNodes)}function D(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function q(t,e,n,i,s=!1){D(t);const c=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const l=t[r];if(e(l)){const o=n(l);return o===void 0?t.splice(r,1):t[r]=o,s||(t.claim_info.last_index=r),l}}for(let r=t.claim_info.last_index-1;r>=0;r--){const l=t[r];if(e(l)){const o=n(l);return o===void 0?t.splice(r,1):t[r]=o,s?o===void 0&&t.claim_info.last_index--:t.claim_info.last_index=r,l}}return i()})();return c.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,c}function Z(t,e,n,i){return q(t,s=>s.nodeName===e,s=>{const c=[];for(let r=0;r<s.attributes.length;r++){const l=s.attributes[r];n[l.name]||c.push(l.name)}c.forEach(r=>s.removeAttribute(r))},()=>i(e))}function Pt(t,e,n){return Z(t,e,n,N)}function $(t,e){return q(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>A(e),!0)}function jt(t){return $(t," ")}function C(t,e,n){for(let i=n;i<t.length;i+=1){const s=t[i];if(s.nodeType===8&&s.textContent.trim()===e)return i}return-1}function Dt(t,e){const n=C(t,"HTML_TAG_START",0),i=C(t,"HTML_TAG_END",n+1);if(n===-1||i===-1)return new H(e);D(t);const s=t.splice(n,i-n+1);b(s[0]),b(s[s.length-1]);const c=s.slice(1,s.length-1);for(const r of c)r.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new H(e,c)}function qt(t,e){e=""+e,t.data!==e&&(t.data=e)}function zt(t,e){t.value=e??""}function Bt(t,e,n,i){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function Wt(t,e,n){for(let i=0;i<t.options.length;i+=1){const s=t.options[i];if(s.__value===e){s.selected=!0;return}}(!n||e!==void 0)&&(t.selectedIndex=-1)}function It(t){const e=t.querySelector(":checked");return e&&e.__value}let y;function tt(){if(y===void 0){y=!1;try{typeof window<"u"&&window.parent&&window.parent.document}catch{y=!0}}return y}function Ot(t,e){getComputedStyle(t).position==="static"&&(t.style.position="relative");const i=N("iframe");i.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),i.setAttribute("aria-hidden","true"),i.tabIndex=-1;const s=tt();let c;return s?(i.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",c=S(window,"message",r=>{r.source===i.contentWindow&&e()})):(i.src="about:blank",i.onload=()=>{c=S(i.contentWindow,"resize",e),e()}),K(t,i),()=>{(s||c&&i.contentWindow)&&c(),b(i)}}function Gt(t,e,n){t.classList.toggle(e,!!n)}function et(t,e,{bubbles:n=!1,cancelable:i=!1}={}){return new CustomEvent(t,{detail:e,bubbles:n,cancelable:i})}function Rt(t,e){const n=[];let i=0;for(const s of e.childNodes)if(s.nodeType===8){const c=s.textContent.trim();c===`HEAD_${t}_END`?(i-=1,n.push(s)):c===`HEAD_${t}_START`&&(i+=1,n.push(s))}else i>0&&n.push(s);return n}class nt{constructor(e=!1){f(this,"is_svg",!1);f(this,"e");f(this,"n");f(this,"t");f(this,"a");this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,n,i=null){this.e||(this.is_svg?this.e=Y(n.nodeName):this.e=N(n.nodeType===11?"TEMPLATE":n.nodeName),this.t=n.tagName!=="TEMPLATE"?n:n.content,this.c(e)),this.i(i)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)V(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(b)}}class H extends nt{constructor(n=!1,i){super(n);f(this,"l");this.e=this.n=null,this.l=i}c(n){this.l?this.n=this.l:super.c(n)}i(n){for(let i=0;i<this.n.length;i+=1)X(this.t,this.n[i],n)}}function Ft(t,e){return new t(e)}let g;function w(t){g=t}function h(){if(!g)throw new Error("Function called outside component initialization");return g}function Ut(t){h().$$.on_mount.push(t)}function Jt(t){h().$$.after_update.push(t)}function Kt(t){h().$$.on_destroy.push(t)}function Qt(){const t=h();return(e,n,{cancelable:i=!1}={})=>{const s=t.$$.callbacks[e];if(s){const c=et(e,n,{cancelable:i});return s.slice().forEach(r=>{r.call(t,c)}),!c.defaultPrevented}return!0}}function Vt(t,e){return h().$$.context.set(t,e),e}function Xt(t){return h().$$.context.get(t)}function Yt(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const m=[],M=[];let _=[];const E=[],z=Promise.resolve();let T=!1;function it(){T||(T=!0,z.then(rt))}function Zt(){return it(),z}function st(t){_.push(t)}function $t(t){E.push(t)}const v=new Set;let d=0;function rt(){if(d!==0)return;const t=g;do{try{for(;d<m.length;){const e=m[d];d++,w(e),ct(e.$$)}}catch(e){throw m.length=0,d=0,e}for(w(null),m.length=0,d=0;M.length;)M.pop()();for(let e=0;e<_.length;e+=1){const n=_[e];v.has(n)||(v.add(n),n())}_.length=0}while(m.length);for(;E.length;)E.pop()();T=!1,v.clear(),w(t)}function ct(t){if(t.fragment!==null){t.update(),R(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(st)}}function te(t){const e=[],n=[];_.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),_=e}export{Mt as $,pt as A,yt as B,mt as C,_t as D,wt as E,Rt as F,Xt as G,Gt as H,vt as I,F as J,H as K,Dt as L,dt as M,Nt as N,Yt as O,st as P,Ot as Q,St as R,gt as S,Vt as T,Kt as U,O as V,bt as W,xt as X,ut as Y,zt as Z,Wt as _,At as a,$t as a0,It as a1,P as a2,lt as a3,rt as a4,ft as a5,te as a6,g as a7,w as a8,G as a9,m as aa,it as ab,Et as ac,Tt as ad,Jt as b,jt as c,b as d,kt as e,N as f,Pt as g,Lt as h,X as i,Ct as j,Bt as k,A as l,$ as m,qt as n,Ut as o,M as p,Ft as q,Q as r,at as s,Zt as t,S as u,L as v,R as w,Qt as x,ht as y,Ht as z};