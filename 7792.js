(self.webpackChunkclient=self.webpackChunkclient||[]).push([[7792],{7792:(e,t,n)=>{"use strict";n.d(t,{c:()=>c});var i=n(900);let o;const a=e=>{if(void 0===o){const t=void 0!==e.style.animationName,n=void 0!==e.style.webkitAnimationName;o=!t&&n?"-webkit-":""}return o},r=(e,t,n)=>{const i=t.startsWith("animation")?a(e):"";e.style.setProperty(i+t,n)},s=(e,t)=>{const n=t.startsWith("animation")?a(e):"";e.style.removeProperty(n+t)},l=[],f=(e=[],t)=>{if(void 0!==t){const n=Array.isArray(t)?t:[t];return[...e,...n]}return e},c=e=>{let t,n,o,c,d,m,h,u,p,g,y,E,v,A=[],b=[],C=[],k=!1,w={},$=[],S=[],T={},D=0,L=!1,P=!1,F=!0,N=!1,O=!0;const R=e,W=[],x=[],I=[],j=[],M=[],q=[],z=[],K=[],Z=[],B=[],G="function"==typeof AnimationEffect||"function"==typeof window.AnimationEffect,H="function"==typeof Element&&"function"==typeof Element.prototype.animate&&G,J=(e,t)=>((t&&t.oneTimeCallback?x:W).push({c:e,o:t}),v),Q=()=>{if(H)B.forEach((e=>{e.cancel()})),B.length=0;else{const e=I.slice();(0,i.r)((()=>{e.forEach((e=>{s(e,"animation-name"),s(e,"animation-duration"),s(e,"animation-timing-function"),s(e,"animation-iteration-count"),s(e,"animation-delay"),s(e,"animation-play-state"),s(e,"animation-fill-mode"),s(e,"animation-direction")}))}))}},U=()=>{M.forEach((e=>{e&&e.parentNode&&e.parentNode.removeChild(e)})),M.length=0},V=()=>void 0!==d?d:h?h.getFill():"both",X=()=>void 0!==p?p:void 0!==m?m:h?h.getDirection():"normal",Y=()=>L?"linear":void 0!==o?o:h?h.getEasing():"linear",_=()=>P?0:void 0!==g?g:void 0!==n?n:h?h.getDuration():0,ee=()=>void 0!==c?c:h?h.getIterations():1,te=()=>void 0!==y?y:void 0!==t?t:h?h.getDelay():0,ne=()=>{0!==D&&(D--,0===D&&((()=>{ce(),K.forEach((e=>e())),Z.forEach((e=>e()));const e=F?1:0,t=$,n=S,i=T;I.forEach((e=>{const o=e.classList;t.forEach((e=>o.add(e))),n.forEach((e=>o.remove(e)));for(const t in i)i.hasOwnProperty(t)&&r(e,t,i[t])})),W.forEach((t=>t.c(e,v))),x.forEach((t=>t.c(e,v))),x.length=0,O=!0,F&&(N=!0),F=!0})(),h&&h.animationFinish()))},ie=(t=!0)=>{(()=>{q.forEach((e=>e())),z.forEach((e=>e()));const e=b,t=C,n=w;I.forEach((i=>{const o=i.classList;e.forEach((e=>o.add(e))),t.forEach((e=>o.remove(e)));for(const e in n)n.hasOwnProperty(e)&&r(i,e,n[e])}))})(),A.length>0&&(H?(I.forEach((e=>{const t=e.animate(A,{id:R,delay:te(),duration:_(),easing:Y(),iterations:ee(),fill:V(),direction:X()});t.pause(),B.push(t)})),B.length>0&&(B[0].onfinish=()=>{ne()})):((t=!0)=>{U();const n=((o=A).forEach((e=>{for(const t in e)if(e.hasOwnProperty(t)){const n=e[t];if("easing"===t)e["animation-timing-function"]=n,delete e[t];else{const i=t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();i!==t&&(e[i]=n,delete e[t])}}})),o);var o;I.forEach((o=>{if(n.length>0){const s=((e=[])=>e.map((e=>{const t=e.offset,n=[];for(const t in e)e.hasOwnProperty(t)&&"offset"!==t&&n.push(`${t}: ${e[t]};`);return`${100*t}% { ${n.join(" ")} }`})).join(" "))(n);E=void 0!==e?e:(e=>{let t=l.indexOf(e);return t<0&&(t=l.push(e)-1),"ion-animation-"+t})(s);const f=((e,t,n)=>{const i=(e=>{const t=e.getRootNode();return t.head||t})(n),o=a(n),r=i.querySelector("#"+e);if(r)return r;const s=(n.ownerDocument||document).createElement("style");return s.id=e,s.textContent=`@${o}keyframes ${e} { ${t} } @${o}keyframes ${e}-alt { ${t} }`,i.appendChild(s),s})(E,s,o);M.push(f),r(o,"animation-duration",_()+"ms"),r(o,"animation-timing-function",Y()),r(o,"animation-delay",te()+"ms"),r(o,"animation-fill-mode",V()),r(o,"animation-direction",X());const c=ee()===1/0?"infinite":ee().toString();r(o,"animation-iteration-count",c),r(o,"animation-play-state","paused"),t&&r(o,"animation-name",f.id+"-alt"),(0,i.r)((()=>{r(o,"animation-name",f.id||null)}))}}))})(t)),k=!0},oe=e=>{if(e=Math.min(Math.max(e,0),.9999),H)B.forEach((t=>{t.currentTime=t.effect.getComputedTiming().delay+_()*e,t.pause()}));else{const t=`-${_()*e}ms`;I.forEach((e=>{A.length>0&&(r(e,"animation-delay",t),r(e,"animation-play-state","paused"))}))}},ae=e=>{B.forEach((e=>{e.effect.updateTiming({delay:te(),duration:_(),easing:Y(),iterations:ee(),fill:V(),direction:X()})})),void 0!==e&&oe(e)},re=(e=!0,t)=>{(0,i.r)((()=>{I.forEach((n=>{r(n,"animation-name",E||null),r(n,"animation-duration",_()+"ms"),r(n,"animation-timing-function",Y()),r(n,"animation-delay",void 0!==t?`-${t*_()}ms`:te()+"ms"),r(n,"animation-fill-mode",V()||null),r(n,"animation-direction",X()||null);const o=ee()===1/0?"infinite":ee().toString();r(n,"animation-iteration-count",o),e&&r(n,"animation-name",E+"-alt"),(0,i.r)((()=>{r(n,"animation-name",E||null)}))}))}))},se=(e=!1,t=!0,n)=>(e&&j.forEach((i=>{i.update(e,t,n)})),H?ae(n):re(t,n),v),le=()=>{k&&(H?B.forEach((e=>{e.pause()})):I.forEach((e=>{r(e,"animation-play-state","paused")})))},fe=()=>{u=void 0,ne()},ce=()=>{u&&clearTimeout(u)},de=e=>new Promise((t=>{e&&e.sync&&(P=!0,J((()=>P=!1),{oneTimeCallback:!0})),k||ie(),N&&(H?(oe(0),ae()):re(),N=!1),O&&(D=j.length+1,O=!1),J((()=>t()),{oneTimeCallback:!0}),j.forEach((e=>{e.play()})),H?(B.forEach((e=>{e.play()})),0!==A.length&&0!==I.length||ne()):(()=>{if(ce(),(0,i.r)((()=>{I.forEach((e=>{A.length>0&&r(e,"animation-play-state","running")}))})),0===A.length||0===I.length)ne();else{const e=te()||0,t=_()||0,n=ee()||1;isFinite(n)&&(u=setTimeout(fe,e+t*n+100)),((e,t)=>{let n;const o={passive:!0},a=t=>{e===t.target&&(n&&n(),ce(),(0,i.r)((()=>{I.forEach((e=>{s(e,"animation-duration"),s(e,"animation-delay"),s(e,"animation-play-state")})),(0,i.r)(ne)})))};e&&(e.addEventListener("webkitAnimationEnd",a,o),e.addEventListener("animationend",a,o),n=()=>{e.removeEventListener("webkitAnimationEnd",a,o),e.removeEventListener("animationend",a,o)})})(I[0])}})()})),me=(e,t)=>{const n=A[0];return void 0===n||void 0!==n.offset&&0!==n.offset?A=[{offset:0,[e]:t},...A]:n[e]=t,v};return v={parentAnimation:h,elements:I,childAnimations:j,id:R,animationFinish:ne,from:me,to:(e,t)=>{const n=A[A.length-1];return void 0===n||void 0!==n.offset&&1!==n.offset?A=[...A,{offset:1,[e]:t}]:n[e]=t,v},fromTo:(e,t,n)=>me(e,t).to(e,n),parent:e=>(h=e,v),play:de,pause:()=>(j.forEach((e=>{e.pause()})),le(),v),stop:()=>{j.forEach((e=>{e.stop()})),k&&(Q(),k=!1),L=!1,P=!1,O=!0,p=void 0,g=void 0,y=void 0,D=0,N=!1,F=!0},destroy:e=>(j.forEach((t=>{t.destroy(e)})),(e=>{Q(),e&&U()})(e),I.length=0,j.length=0,A.length=0,W.length=0,x.length=0,k=!1,O=!0,v),keyframes:e=>(A=e,v),addAnimation:e=>{if(null!=e)if(Array.isArray(e))for(const t of e)t.parent(v),j.push(t);else e.parent(v),j.push(e);return v},addElement:e=>{if(null!=e)if(1===e.nodeType)I.push(e);else if(e.length>=0)for(let t=0;t<e.length;t++)I.push(e[t]);else console.error("Invalid addElement value");return v},update:se,fill:e=>(d=e,se(!0),v),direction:e=>(m=e,se(!0),v),iterations:e=>(c=e,se(!0),v),duration:e=>(H||0!==e||(e=1),n=e,se(!0),v),easing:e=>(o=e,se(!0),v),delay:e=>(t=e,se(!0),v),getWebAnimations:()=>B,getKeyframes:()=>A,getFill:V,getDirection:X,getDelay:te,getIterations:ee,getEasing:Y,getDuration:_,afterAddRead:e=>(K.push(e),v),afterAddWrite:e=>(Z.push(e),v),afterClearStyles:(e=[])=>{for(const t of e)T[t]="";return v},afterStyles:(e={})=>(T=e,v),afterRemoveClass:e=>(S=f(S,e),v),afterAddClass:e=>($=f($,e),v),beforeAddRead:e=>(q.push(e),v),beforeAddWrite:e=>(z.push(e),v),beforeClearStyles:(e=[])=>{for(const t of e)w[t]="";return v},beforeStyles:(e={})=>(w=e,v),beforeRemoveClass:e=>(C=f(C,e),v),beforeAddClass:e=>(b=f(b,e),v),onFinish:J,progressStart:(e=!1,t)=>(j.forEach((n=>{n.progressStart(e,t)})),le(),L=e,k?se(!1,!0,t):ie(),v),progressStep:e=>(j.forEach((t=>{t.progressStep(e)})),oe(e),v),progressEnd:(e,t,n)=>(L=!1,j.forEach((i=>{i.progressEnd(e,t,n)})),void 0!==n&&(g=n),N=!1,F=!0,0===e?(p="reverse"===X()?"normal":"reverse","reverse"===p&&(F=!1),H?(se(),oe(1-t)):(y=(1-t)*_()*-1,se(!1,!1))):1===e&&(H?(se(),oe(t)):(y=t*_()*-1,se(!1,!1))),void 0!==e&&(J((()=>{g=void 0,p=void 0,y=void 0}),{oneTimeCallback:!0}),h||de()),v)}}}}]);