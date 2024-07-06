import{s as lt,e as u,c as p,b as R,f as l,r as H,i,n as Ht,o as ot,p as bt,a as f,H as wt,y as _,g as k,z as Dt,h as v,t as Et,d as Lt}from"../chunks/scheduler.DBHCdeML.js";import{S as dt,i as it,b as S,d as j,m as B,a as P,t as N,e as W}from"../chunks/index.DdUEpItF.js";import{g as Mt,a as $t}from"../chunks/spread.CgU5AtxT.js";import{L as Rt}from"../chunks/layout.BzIW5I-a.js";import{S as yt,t as c,f as xt}from"../chunks/index.1qUbNw0j.js";import{A as zt}from"../chunks/A.Cm3qZsZh.js";function It(m){let e,a,d;return a=new yt({props:{from:c("8:00"),to:c("14:00"),minWidth:200,fitWidth:!0,rows:[{id:1,label:"Row 1"},{id:2,label:"Row 2"},{id:3,label:"Row 3"},{id:4,label:"Row 4"},{id:5,label:"Row 4"},{id:6,label:"Row 4"}],tasks:[{id:1,resourceId:1,from:c("8:30"),to:c("10:00"),label:"Default"},{id:2,resourceId:2,from:c("9:00"),to:c("10:30"),label:"25% done",amountDone:25},{id:3,resourceId:3,from:c("9:30"),to:c("11:00"),label:"Custom class",classes:"gradient"},{id:4,resourceId:4,from:c("10:00"),to:c("11:30"),html:'<span class="flex items-center gap-2"><span class="w-4 h-4 bg-blue-800"></span>Html content</span>'},{id:5,resourceId:5,from:c("10:30"),to:c("12:00"),label:"Resizable but not draggable",enableDragging:!1},{id:6,resourceId:6,from:c("11:00"),to:c("12:30"),label:"Draggable but not resizable",enableResize:!1}]}}),{c(){e=u("div"),S(a.$$.fragment),this.h()},l(n){e=p(n,"DIV",{class:!0});var s=R(e);j(a.$$.fragment,s),s.forEach(l),this.h()},h(){H(e,"class","example border my-12 svelte-k9bk9f")},m(n,s){i(n,e,s),B(a,e,null),d=!0},p:Ht,i(n){d||(P(a.$$.fragment,n),d=!0)},o(n){N(a.$$.fragment,n),d=!1},d(n){n&&l(e),W(a)}}}class At extends dt{constructor(e){super(),it(this,e,null,It,lt,{})}}function St(m){let e,a,d;return a=new yt({props:{from:c("8:00"),to:c("14:00"),minWidth:200,fitWidth:!0,rowHeight:140,taskElementHook:m[0],rows:[{id:1,label:"Row 1"},{id:2,label:"Row 2"}],tasks:[{id:1,resourceId:1,from:c("8:30"),to:c("11:00"),label:" ",title:"Employee Details page",classes:"task",priority:"Medium",assignees:["AD","BC","TE"]},{id:2,resourceId:2,from:c("9:30"),to:c("13:00"),label:" ",title:"Documentation page",classes:"task",priority:"High",assignees:["AN","TE"]}]}}),{c(){e=u("div"),S(a.$$.fragment),this.h()},l(n){e=p(n,"DIV",{class:!0});var s=R(e);j(a.$$.fragment,s),s.forEach(l),this.h()},h(){H(e,"class","example border")},m(n,s){i(n,e,s),B(a,e,null),d=!0},p:Ht,i(n){d||(P(a.$$.fragment,n),d=!0)},o(n){N(a.$$.fragment,n),d=!1},d(n){n&&l(e),W(a)}}}function jt(m){function e(a,d){const n=document.createElement("div");n.className="";function s(r){n.innerHTML=`
<div class="task__header">
    <div class="task__title">${r.title}</div>
    <div class="task__subtitle">${xt(r.from,"MMM DD")} - ${xt(r.to,"H:mm")}</div>

    <div class="task__menu">
    <i class="fa fa-ellipsis-vertical"></i>
    </div>
</div>
<div class="task__footer">
    <div class="task__tags">
    <span class="task__tag violet">
        <i class="task__icon-archive-box"></i>
    </span>
    <span class="task__tag amber">
        • ${r.priority}
    </span>
    </div>
    <div class="task__assignees">
        ${r.assignees.map(h=>`<span class="task__assignee">${h}</span>`)}
    </div>
</div>`}return s(d),a.appendChild(n),{update(r){console.log(r),s(r)},destroy(){a.remove()}}}return[e]}class Bt extends dt{constructor(e){super(),it(this,e,jt,St,lt,{})}}function Pt(m){let e;return{c(){e=Et("Task element hook")},l(a){e=Lt(a,"Task element hook")},m(a,d){i(a,e,d)},d(a){a&&l(e)}}}function Nt(m){let e,a='Task<a class="header-anchor" aria-hidden="true" href="#task">#</a>',d,n,s="Tasks are intervals of time that are assigned to a resource. They are defined as a list of objects:",r,h,rt='<thead><tr><th>Name</th> <th>Type</th> <th>Description</th> <th align="right">Default</th></tr></thead> <tbody><tr><td><code>id</code></td> <td><code>number</code>|<code>string</code></td> <td>Id of task, every task needs to have a unique one.</td> <td align="right">undefined</td></tr> <tr><td><code>amountDone</code></td> <td><code>number</code></td> <td>Task completion in percent, indicated on task.</td> <td align="right">undefined</td></tr> <tr><td><code>classes</code></td> <td><code>string</code>|<code>Array</code></td> <td>Custom CSS classes to apply to task.</td> <td align="right">undefined</td></tr> <tr><td><code>from</code></td> <td><code>number</code></td> <td>Datetime task starts on.</td> <td align="right">undefined</td></tr> <tr><td><code>to</code></td> <td><code>number</code></td> <td>Datetime task ends on.</td> <td align="right">undefined</td></tr> <tr><td><code>label</code></td> <td><code>string</code></td> <td>Label of task.</td> <td align="right">undefined</td></tr> <tr><td><code>html</code></td> <td><code>string</code></td> <td>Html content of task, will override label.</td> <td align="right">undefined</td></tr> <tr><td><code>showButton</code></td> <td><code>boolean</code></td> <td>Show button bar.</td> <td align="right">undefined</td></tr> <tr><td><code>buttonClasses</code></td> <td><code>string</code>|<code>Array</code></td> <td>Button classes, useful for fontawesome icons.</td> <td align="right">undefined</td></tr> <tr><td><code>buttonHtml</code></td> <td><code>string</code></td> <td>Html content of button.</td> <td align="right">undefined</td></tr> <tr><td><code>enableDragging</code></td> <td><code>boolean</code></td> <td>enable dragging of task.</td> <td align="right">true</td></tr> <tr><td><code>enableResize</code></td> <td><code>boolean</code></td> <td>enable resize of task.</td> <td align="right">true</td></tr></tbody>',G,y,O,b,ct='TaskElementHook<a class="header-anchor" aria-hidden="true" href="#taskelementhook">#</a>',Y,C,ut="Custom task components can be created by passing <code>taskElementHook</code> to gantt.",J,$,z,pt='<tr><th>Name</th> <th>Description</th> <th>Type</th> <th align="right">Default</th></tr>',et,q,g,I,mt="<code>taskElementHook</code>",nt,A,ft="<code>function</code>",at,V,x,st,w,kt="undefined",K,D,ht="Task element hook function is a svelte action, eg.",Q,E,U,Ct=`<code class="language-js"><span class="token punctuation">(</span><span class="token parameter">node<span class="token punctuation">,</span> task</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span> 
    node<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'click'</span><span class="token punctuation">,</span> console<span class="token punctuation">.</span>log<span class="token punctuation">)</span><span class="token punctuation">;</span> 
    <span class="token keyword">return</span> <span class="token punctuation">&#123;</span> 
        <span class="token function">update</span><span class="token punctuation">(</span><span class="token parameter">task</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span> 
            <span class="token comment">// ...</span>
        <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
        <span class="token function">destroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
            node<span class="token punctuation">.</span><span class="token function">removeEventListener</span><span class="token punctuation">(</span><span class="token string">'click'</span><span class="token punctuation">,</span> console<span class="token punctuation">.</span>log<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">&#125;</span> 
    <span class="token punctuation">&#125;</span><span class="token punctuation">;</span> 
<span class="token punctuation">&#125;</span></code>`,X,L,gt="This enables you to add custom behaviour and look to tasks. For example, displaying a popup on hover, or rendering Angular components within the task.",Z,M,tt;return y=new At({}),x=new zt({props:{href:"#taskelementhook",$$slots:{default:[Pt]},$$scope:{ctx:m}}}),M=new Bt({}),{c(){e=u("h1"),e.innerHTML=a,d=f(),n=u("p"),n.textContent=s,r=f(),h=u("table"),h.innerHTML=rt,G=f(),S(y.$$.fragment),O=f(),b=u("h3"),b.innerHTML=ct,Y=f(),C=u("p"),C.innerHTML=ut,J=f(),$=u("table"),z=u("thead"),z.innerHTML=pt,et=f(),q=u("tbody"),g=u("tr"),I=u("td"),I.innerHTML=mt,nt=f(),A=u("td"),A.innerHTML=ft,at=f(),V=u("td"),S(x.$$.fragment),st=f(),w=u("td"),w.textContent=kt,K=f(),D=u("p"),D.textContent=ht,Q=f(),E=u("pre"),U=new wt(!1),X=f(),L=u("p"),L.textContent=gt,Z=f(),S(M.$$.fragment),this.h()},l(t){e=p(t,"H1",{id:!0,tabindex:!0,"data-svelte-h":!0}),_(e)!=="svelte-kalzzn"&&(e.innerHTML=a),d=k(t),n=p(t,"P",{"data-svelte-h":!0}),_(n)!=="svelte-9a8s4k"&&(n.textContent=s),r=k(t),h=p(t,"TABLE",{"data-svelte-h":!0}),_(h)!=="svelte-p0zsqy"&&(h.innerHTML=rt),G=k(t),j(y.$$.fragment,t),O=k(t),b=p(t,"H3",{id:!0,tabindex:!0,"data-svelte-h":!0}),_(b)!=="svelte-1u5cwzo"&&(b.innerHTML=ct),Y=k(t),C=p(t,"P",{"data-svelte-h":!0}),_(C)!=="svelte-1ehsgat"&&(C.innerHTML=ut),J=k(t),$=p(t,"TABLE",{});var o=R($);z=p(o,"THEAD",{"data-svelte-h":!0}),_(z)!=="svelte-9d27rb"&&(z.innerHTML=pt),et=k(o),q=p(o,"TBODY",{});var F=R(q);g=p(F,"TR",{});var T=R(g);I=p(T,"TD",{"data-svelte-h":!0}),_(I)!=="svelte-jd7ua1"&&(I.innerHTML=mt),nt=k(T),A=p(T,"TD",{"data-svelte-h":!0}),_(A)!=="svelte-4c6y6l"&&(A.innerHTML=ft),at=k(T),V=p(T,"TD",{});var _t=R(V);j(x.$$.fragment,_t),_t.forEach(l),st=k(T),w=p(T,"TD",{align:!0,"data-svelte-h":!0}),_(w)!=="svelte-19hhiyk"&&(w.textContent=kt),T.forEach(l),F.forEach(l),o.forEach(l),K=k(t),D=p(t,"P",{"data-svelte-h":!0}),_(D)!=="svelte-1wv2ef2"&&(D.textContent=ht),Q=k(t),E=p(t,"PRE",{class:!0});var vt=R(E);U=Dt(vt,!1),vt.forEach(l),X=k(t),L=p(t,"P",{"data-svelte-h":!0}),_(L)!=="svelte-1nfuzj5"&&(L.textContent=gt),Z=k(t),j(M.$$.fragment,t),this.h()},h(){H(e,"id","task"),H(e,"tabindex","-1"),H(b,"id","taskelementhook"),H(b,"tabindex","-1"),H(w,"align","right"),U.a=null,H(E,"class","language-js")},m(t,o){i(t,e,o),i(t,d,o),i(t,n,o),i(t,r,o),i(t,h,o),i(t,G,o),B(y,t,o),i(t,O,o),i(t,b,o),i(t,Y,o),i(t,C,o),i(t,J,o),i(t,$,o),v($,z),v($,et),v($,q),v(q,g),v(g,I),v(g,nt),v(g,A),v(g,at),v(g,V),B(x,V,null),v(g,st),v(g,w),i(t,K,o),i(t,D,o),i(t,Q,o),i(t,E,o),U.m(Ct,E),i(t,X,o),i(t,L,o),i(t,Z,o),B(M,t,o),tt=!0},p(t,o){const F={};o&2&&(F.$$scope={dirty:o,ctx:t}),x.$set(F)},i(t){tt||(P(y.$$.fragment,t),P(x.$$.fragment,t),P(M.$$.fragment,t),tt=!0)},o(t){N(y.$$.fragment,t),N(x.$$.fragment,t),N(M.$$.fragment,t),tt=!1},d(t){t&&(l(e),l(d),l(n),l(r),l(h),l(G),l(O),l(b),l(Y),l(C),l(J),l($),l(K),l(D),l(Q),l(E),l(X),l(L),l(Z)),W(y,t),W(x),W(M,t)}}}function Wt(m){let e,a;const d=[m[0],Tt];let n={$$slots:{default:[Nt]},$$scope:{ctx:m}};for(let s=0;s<d.length;s+=1)n=ot(n,d[s]);return e=new Rt({props:n}),{c(){S(e.$$.fragment)},l(s){j(e.$$.fragment,s)},m(s,r){B(e,s,r),a=!0},p(s,[r]){const h=r&1?Mt(d,[r&1&&$t(s[0]),r&0&&$t(Tt)]):{};r&2&&(h.$$scope={dirty:r,ctx:s}),e.$set(h)},i(s){a||(P(e.$$.fragment,s),a=!0)},o(s){N(e.$$.fragment,s),a=!1},d(s){W(e,s)}}}const Tt={title:"Tasks"};function qt(m,e,a){return m.$$set=d=>{a(0,e=ot(ot({},e),bt(d)))},e=bt(e),[e]}class Kt extends dt{constructor(e){super(),it(this,e,qt,Wt,lt,{})}}export{Kt as component};