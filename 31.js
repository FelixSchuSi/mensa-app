(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{77:function(e,t,o){"use strict";o.d(t,"a",(function(){return f}));var n=o(73);let a;const r=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),i=e=>{if(void 0===a){const t=void 0!==e.style.animationName,o=void 0!==e.style.webkitAnimationName;a=!t&&o?"-webkit-":""}return a},s=(e,t,o)=>{const n=t.startsWith("animation")?i(e):"";e.style.setProperty(n+t,o)},l=(e,t)=>{const o=t.startsWith("animation")?i(e):"";e.style.removeProperty(o+t)},c=[],d=(e=[],t)=>{if(void 0!==t){const o=Array.isArray(t)?t:[t];return[...e,...o]}return e},f=e=>{let t,o,a,f,m,p,u,y,h,b,g,E,S,v=[],$=[],A=[],T=!1,x={},O=[],q=[],X={},j=0,C=!1,w=!1,k=!0,P=!1,L=!0;const R=e,W=[],D=[],N=[],B=[],F=[],I=[],z=[],J=[],M=[],K=[],Z="function"==typeof AnimationEffect||"function"==typeof window.AnimationEffect,G="function"==typeof Element&&"function"==typeof Element.prototype.animate&&Z,H=e=>{V(),e&&Y()},Q=(e,t)=>((t&&t.oneTimeCallback?D:W).push({c:e,o:t}),S),U=()=>(W.length=0,D.length=0,S),V=()=>{if(G)K.forEach(e=>{e.cancel()}),K.length=0;else{const e=N.slice();Object(n.n)(()=>{e.forEach(e=>{l(e,"animation-name"),l(e,"animation-duration"),l(e,"animation-timing-function"),l(e,"animation-iteration-count"),l(e,"animation-delay"),l(e,"animation-play-state"),l(e,"animation-fill-mode"),l(e,"animation-direction")})})}},Y=()=>{F.forEach(e=>{e&&e.parentNode&&e.parentNode.removeChild(e)}),F.length=0},_=()=>void 0!==m?m:u?u.getFill():"both",ee=()=>void 0!==h?h:void 0!==p?p:u?u.getDirection():"normal",te=()=>C?"linear":void 0!==a?a:u?u.getEasing():"linear",oe=()=>w?0:void 0!==b?b:void 0!==o?o:u?u.getDuration():0,ne=()=>void 0!==f?f:u?u.getIterations():1,ae=()=>void 0!==g?g:void 0!==t?t:u?u.getDelay():0,re=()=>{0!==j&&(j--,0===j&&((()=>{ue(),J.forEach(e=>e()),M.forEach(e=>e());const e=k?1:0,t=O,o=q,n=X;N.forEach(e=>{const a=e.classList;t.forEach(e=>a.add(e)),o.forEach(e=>a.remove(e));for(const t in n)n.hasOwnProperty(t)&&s(e,t,n[t])}),W.forEach(t=>t.c(e,S)),D.forEach(t=>t.c(e,S)),D.length=0,L=!0,k&&(P=!0),k=!0})(),u&&u.animationFinish()))},ie=(t=!0)=>{Y();const o=(e=>(e.forEach(e=>{for(const t in e)if(e.hasOwnProperty(t)){const o=e[t];if("easing"===t){e["animation-timing-function"]=o,delete e[t]}else{const n=r(t);n!==t&&(e[n]=o,delete e[t])}}}),e))(v);N.forEach(a=>{if(o.length>0){const r=((e=[])=>e.map(e=>{const t=e.offset,o=[];for(const t in e)e.hasOwnProperty(t)&&"offset"!==t&&o.push(`${t}: ${e[t]};`);return`${100*t}% { ${o.join(" ")} }`}).join(" "))(o);E=void 0!==e?e:(e=>{let t=c.indexOf(e);return t<0&&(t=c.push(e)-1),"ion-animation-"+t})(r);const l=((e,t,o)=>{const n=(e=>{const t=e.getRootNode();return t.head||t})(o),a=i(o),r=n.querySelector("#"+e);if(r)return r;const s=(o.ownerDocument||document).createElement("style");return s.id=e,s.textContent=`@${a}keyframes ${e} { ${t} } @${a}keyframes ${e}-alt { ${t} }`,n.appendChild(s),s})(E,r,a);F.push(l),s(a,"animation-duration",oe()+"ms"),s(a,"animation-timing-function",te()),s(a,"animation-delay",ae()+"ms"),s(a,"animation-fill-mode",_()),s(a,"animation-direction",ee());const d=ne()===1/0?"infinite":ne().toString();s(a,"animation-iteration-count",d),s(a,"animation-play-state","paused"),t&&s(a,"animation-name",l.id+"-alt"),Object(n.n)(()=>{s(a,"animation-name",l.id||null)})}})},se=(e=!0)=>{(()=>{I.forEach(e=>e()),z.forEach(e=>e());const e=$,t=A,o=x;N.forEach(n=>{const a=n.classList;e.forEach(e=>a.add(e)),t.forEach(e=>a.remove(e));for(const e in o)o.hasOwnProperty(e)&&s(n,e,o[e])})})(),v.length>0&&(G?(N.forEach(e=>{const t=e.animate(v,{id:R,delay:ae(),duration:oe(),easing:te(),iterations:ne(),fill:_(),direction:ee()});t.pause(),K.push(t)}),K.length>0&&(K[0].onfinish=()=>{re()})):ie(e)),T=!0},le=e=>{if(e=Math.min(Math.max(e,0),.9999),G)K.forEach(t=>{t.currentTime=t.effect.getComputedTiming().delay+oe()*e,t.pause()});else{const t=`-${oe()*e}ms`;N.forEach(e=>{v.length>0&&(s(e,"animation-delay",t),s(e,"animation-play-state","paused"))})}},ce=e=>{K.forEach(e=>{e.effect.updateTiming({delay:ae(),duration:oe(),easing:te(),iterations:ne(),fill:_(),direction:ee()})}),void 0!==e&&le(e)},de=(e=!0,t)=>{Object(n.n)(()=>{N.forEach(o=>{s(o,"animation-name",E||null),s(o,"animation-duration",oe()+"ms"),s(o,"animation-timing-function",te()),s(o,"animation-delay",void 0!==t?`-${t*oe()}ms`:ae()+"ms"),s(o,"animation-fill-mode",_()||null),s(o,"animation-direction",ee()||null);const a=ne()===1/0?"infinite":ne().toString();s(o,"animation-iteration-count",a),e&&s(o,"animation-name",E+"-alt"),Object(n.n)(()=>{s(o,"animation-name",E||null)})})})},fe=(e=!1,t=!0,o)=>(e&&B.forEach(n=>{n.update(e,t,o)}),G?ce(o):de(t,o),S),me=()=>{T&&(G?K.forEach(e=>{e.pause()}):N.forEach(e=>{s(e,"animation-play-state","paused")}))},pe=()=>{y=void 0,re()},ue=()=>{y&&clearTimeout(y)},ye=()=>{N.forEach(e=>{l(e,"animation-duration"),l(e,"animation-delay"),l(e,"animation-play-state")})},he=e=>new Promise(t=>{e&&e.sync&&(w=!0,Q(()=>w=!1,{oneTimeCallback:!0})),T||se(),P&&(G?(le(0),ce()):de(),P=!1),L&&(j=B.length+1,L=!1),Q(()=>t(),{oneTimeCallback:!0}),B.forEach(e=>{e.play()}),G?(K.forEach(e=>{e.play()}),0!==v.length&&0!==N.length||re()):(()=>{if(ue(),Object(n.n)(()=>{N.forEach(e=>{v.length>0&&s(e,"animation-play-state","running")})}),0===v.length||0===N.length)re();else{const e=ae()||0,t=oe()||0,o=ne()||1;isFinite(o)&&(y=setTimeout(pe,e+t*o+100)),((e,t)=>{let o;const n={passive:!0},a=()=>{o&&o()},r=o=>{e===o.target&&(a(),t(o))};e&&(e.addEventListener("webkitAnimationEnd",r,n),e.addEventListener("animationend",r,n),o=()=>{e.removeEventListener("webkitAnimationEnd",r,n),e.removeEventListener("animationend",r,n)})})(N[0],()=>{ue(),Object(n.n)(()=>{ye(),Object(n.n)(re)})})}})()}),be=(e,t)=>{const o=v[0];return void 0===o||void 0!==o.offset&&0!==o.offset?v=[{offset:0,[e]:t},...v]:o[e]=t,S};return S={parentAnimation:u,elements:N,childAnimations:B,id:R,animationFinish:re,from:be,to:(e,t)=>{const o=v[v.length-1];return void 0===o||void 0!==o.offset&&1!==o.offset?v=[...v,{offset:1,[e]:t}]:o[e]=t,S},fromTo:(e,t,o)=>be(e,t).to(e,o),parent:e=>(u=e,S),play:he,pause:()=>(B.forEach(e=>{e.pause()}),me(),S),stop:()=>{B.forEach(e=>{e.stop()}),T&&(V(),T=!1),C=!1,w=!1,L=!0,h=void 0,b=void 0,g=void 0,j=0,P=!1,k=!0},destroy:e=>(B.forEach(t=>{t.destroy(e)}),H(e),N.length=0,B.length=0,v.length=0,U(),T=!1,L=!0,S),keyframes:e=>(v=e,S),addAnimation:e=>{if(null!=e)if(Array.isArray(e))for(const t of e)t.parent(S),B.push(t);else e.parent(S),B.push(e);return S},addElement:e=>{if(null!=e)if(1===e.nodeType)N.push(e);else if(e.length>=0)for(let t=0;t<e.length;t++)N.push(e[t]);else console.error("Invalid addElement value");return S},update:fe,fill:e=>(m=e,fe(!0),S),direction:e=>(p=e,fe(!0),S),iterations:e=>(f=e,fe(!0),S),duration:e=>(G||0!==e||(e=1),o=e,fe(!0),S),easing:e=>(a=e,fe(!0),S),delay:e=>(t=e,fe(!0),S),getWebAnimations:()=>K,getKeyframes:()=>v,getFill:_,getDirection:ee,getDelay:ae,getIterations:ne,getEasing:te,getDuration:oe,afterAddRead:e=>(J.push(e),S),afterAddWrite:e=>(M.push(e),S),afterClearStyles:(e=[])=>{for(const t of e)X[t]="";return S},afterStyles:(e={})=>(X=e,S),afterRemoveClass:e=>(q=d(q,e),S),afterAddClass:e=>(O=d(O,e),S),beforeAddRead:e=>(I.push(e),S),beforeAddWrite:e=>(z.push(e),S),beforeClearStyles:(e=[])=>{for(const t of e)x[t]="";return S},beforeStyles:(e={})=>(x=e,S),beforeRemoveClass:e=>(A=d(A,e),S),beforeAddClass:e=>($=d($,e),S),onFinish:Q,progressStart:(e=!1,t)=>(B.forEach(o=>{o.progressStart(e,t)}),me(),C=e,T?fe(!1,!0,t):se(),S),progressStep:e=>(B.forEach(t=>{t.progressStep(e)}),le(e),S),progressEnd:(e,t,o)=>(C=!1,B.forEach(n=>{n.progressEnd(e,t,o)}),void 0!==o&&(b=o),P=!1,k=!0,0===e?(h="reverse"===ee()?"normal":"reverse","reverse"===h&&(k=!1),G?(fe(),le(1-t)):(g=(1-t)*oe()*-1,fe(!1,!1))):1===e&&(G?(fe(),le(t)):(g=t*oe()*-1,fe(!1,!1))),void 0!==e&&(Q(()=>{b=void 0,h=void 0,g=void 0},{oneTimeCallback:!0}),u||he()),S)}}},85:function(e,t,o){"use strict";o.r(t),o.d(t,"iosTransitionAnimation",(function(){return f})),o.d(t,"shadow",(function(){return i}));o(0),o(73);var n=o(77),a=o(82);const r=e=>document.querySelector(e+".ion-cloned-element"),i=e=>e.shadowRoot||e,s=e=>{const t="ION-TABS"===e.tagName?e:e.querySelector("ion-tabs"),o="ion-header:not(.header-collapse-condense-inactive) ion-title.title-large";if(null!=t){const e=t.querySelector("ion-tab:not(.tab-hidden), .ion-page:not(.ion-page-hidden)");return null!=e?e.querySelector(o):null}return e.querySelector(o)},l=(e,t)=>{const o="ION-TABS"===e.tagName?e:e.querySelector("ion-tabs");let n=[];if(null!=o){const e=o.querySelector("ion-tab:not(.tab-hidden), .ion-page:not(.ion-page-hidden)");null!=e&&(n=e.querySelectorAll("ion-buttons"))}else n=e.querySelectorAll("ion-buttons");for(const e of n){const o=e.closest("ion-header"),n=o&&!o.classList.contains("header-collapse-condense-inactive"),a=e.querySelector("ion-back-button"),r=e.classList.contains("buttons-collapse"),i="start"===e.slot||""===e.slot;if(null!==a&&i&&(r&&n&&t||!r))return a}return null},c=(e,t,o,a,s,l)=>{const c=t?`calc(100% - ${l.right+4}px)`:l.left-4+"px",d=t?"7px":"-7px",f=t?"-4px":"4px",m=t?"-4px":"4px",p=t?"right":"left",u=t?"left":"right",y=[{offset:0,opacity:0,transform:`translate3d(${d}, ${s.top-40}px, 0) scale(2.1)`},{offset:1,opacity:1,transform:`translate3d(${f}, ${l.top-46}px, 0) scale(1)`}],h=[{offset:0,opacity:1,transform:`translate3d(${f}, ${l.top-46}px, 0) scale(1)`},{offset:.6,opacity:0},{offset:1,opacity:0,transform:`translate3d(${d}, ${s.top-40}px, 0) scale(2.1)`}],b=o?h:y,g=[{offset:0,opacity:0,transform:`translate3d(${m}, ${l.top-41}px, 0) scale(0.6)`},{offset:1,opacity:1,transform:`translate3d(${m}, ${l.top-46}px, 0) scale(1)`}],E=[{offset:0,opacity:1,transform:`translate3d(${m}, ${l.top-46}px, 0) scale(1)`},{offset:.2,opacity:0,transform:`translate3d(${m}, ${l.top-41}px, 0) scale(0.6)`},{offset:1,opacity:0,transform:`translate3d(${m}, ${l.top-41}px, 0) scale(0.6)`}],S=o?E:g,v=Object(n.a)(),$=Object(n.a)(),A=r("ion-back-button"),T=i(A).querySelector(".button-text"),x=i(A).querySelector("ion-icon");A.text=a.text,A.mode=a.mode,A.icon=a.icon,A.color=a.color,A.disabled=a.disabled,A.style.setProperty("display","block"),A.style.setProperty("position","fixed"),$.addElement(x),v.addElement(T),v.beforeStyles({"transform-origin":p+" center"}).beforeAddWrite(()=>{a.style.setProperty("display","none"),A.style.setProperty(p,c)}).afterAddWrite(()=>{a.style.setProperty("display",""),A.style.setProperty("display","none"),A.style.removeProperty(p)}).keyframes(b),$.beforeStyles({"transform-origin":u+" center"}).keyframes(S),e.addAnimation([v,$])},d=(e,t,o,a,i,s)=>{const l=t?`calc(100% - ${i.right}px)`:i.left+"px",c=t?"-18px":"18px",d=t?"right":"left",f=[{offset:0,opacity:0,transform:`translate3d(${c}, ${s.top-4}px, 0) scale(0.49)`},{offset:.1,opacity:0},{offset:1,opacity:1,transform:`translate3d(0, ${i.top-2}px, 0) scale(1)`}],m=[{offset:0,opacity:.99,transform:`translate3d(0, ${i.top-2}px, 0) scale(1)`},{offset:.6,opacity:0},{offset:1,opacity:0,transform:`translate3d(${c}, ${s.top-4}px, 0) scale(0.5)`}],p=o?f:m,u=r("ion-title"),y=Object(n.a)();u.innerText=a.innerText,u.size=a.size,u.color=a.color,y.addElement(u),y.beforeStyles({"transform-origin":d+" center",height:"46px",display:"",position:"relative",[d]:l}).beforeAddWrite(()=>{a.style.setProperty("display","none")}).afterAddWrite(()=>{a.style.setProperty("display",""),u.style.setProperty("display","none")}).keyframes(p),e.addAnimation(y)},f=(e,t)=>{try{const o="cubic-bezier(0.32,0.72,0,1)",r="opacity",f="transform",m="0%",p=.8,u="rtl"===e.ownerDocument.dir,y=u?"-99.5%":"99.5%",h=u?"33%":"-33%",b=t.enteringEl,g=t.leavingEl,E="back"===t.direction,S=b.querySelector(":scope > ion-content"),v=b.querySelectorAll(":scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *"),$=b.querySelectorAll(":scope > ion-header > ion-toolbar"),A=Object(n.a)(),T=Object(n.a)();if(A.addElement(b).duration(t.duration||540).easing(t.easing||o).fill("both").beforeRemoveClass("ion-page-invisible"),g&&e){const t=Object(n.a)();t.addElement(e),A.addAnimation(t)}if(S||0!==$.length||0!==v.length?(T.addElement(S),T.addElement(v)):T.addElement(b.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs")),A.addAnimation(T),E?T.beforeClearStyles([r]).fromTo("transform",`translateX(${h})`,`translateX(${m})`).fromTo(r,p,1):T.beforeClearStyles([r]).fromTo("transform",`translateX(${y})`,`translateX(${m})`),S){const e=i(S).querySelector(".transition-effect");if(e){const t=e.querySelector(".transition-cover"),o=e.querySelector(".transition-shadow"),a=Object(n.a)(),i=Object(n.a)(),s=Object(n.a)();a.addElement(e).beforeStyles({opacity:"1",display:"block"}).afterStyles({opacity:"",display:""}),i.addElement(t).beforeClearStyles([r]).fromTo(r,0,.1),s.addElement(o).beforeClearStyles([r]).fromTo(r,.03,.7),a.addAnimation([i,s]),T.addAnimation([a])}}const x=b.querySelector("ion-header.header-collapse-condense"),{forward:O,backward:q}=((e,t,o,n,a)=>{const r=l(n,o),i=s(a),f=s(n),m=l(a,o),p=null!==r&&null!==i&&!o,u=null!==f&&null!==m&&o;if(p){const n=i.getBoundingClientRect(),a=r.getBoundingClientRect();d(e,t,o,i,n,a),c(e,t,o,r,n,a)}else if(u){const n=f.getBoundingClientRect(),a=m.getBoundingClientRect();d(e,t,o,f,n,a),c(e,t,o,m,n,a)}return{forward:p,backward:u}})(A,u,E,b,g);if($.forEach(e=>{const t=Object(n.a)();t.addElement(e),A.addAnimation(t);const o=Object(n.a)();o.addElement(e.querySelector("ion-title"));const a=Object(n.a)(),s=Array.from(e.querySelectorAll("ion-buttons,[menuToggle]")),l=e.closest("ion-header"),c=l&&l.classList.contains("header-collapse-condense-inactive");let d;d=E?s.filter(e=>{const t=e.classList.contains("buttons-collapse");return t&&!c||!t}):s.filter(e=>!e.classList.contains("buttons-collapse")),a.addElement(d);const f=Object(n.a)();f.addElement(e.querySelectorAll(":scope > *:not(ion-title):not(ion-buttons):not([menuToggle])"));const p=Object(n.a)();p.addElement(i(e).querySelector(".toolbar-background"));const b=Object(n.a)(),g=e.querySelector("ion-back-button");if(g&&b.addElement(g),t.addAnimation([o,a,f,p,b]),a.fromTo(r,.01,1),f.fromTo(r,.01,1),E)c||o.fromTo("transform",`translateX(${h})`,`translateX(${m})`).fromTo(r,.01,1),f.fromTo("transform",`translateX(${h})`,`translateX(${m})`),b.fromTo(r,.01,1);else{x||o.fromTo("transform",`translateX(${y})`,`translateX(${m})`).fromTo(r,.01,1),f.fromTo("transform",`translateX(${y})`,`translateX(${m})`),p.beforeClearStyles([r,"transform"]);if((null==l?void 0:l.translucent)?p.fromTo("transform",u?"translateX(-100%)":"translateX(100%)","translateX(0px)"):p.fromTo(r,.01,"var(--opacity)"),O||b.fromTo(r,.01,1),g&&!O){const e=Object(n.a)();e.addElement(i(g).querySelector(".button-text")).fromTo("transform",u?"translateX(-100px)":"translateX(100px)","translateX(0px)"),t.addAnimation(e)}}}),g){const e=Object(n.a)(),t=g.querySelector(":scope > ion-content"),o=g.querySelectorAll(":scope > ion-header > ion-toolbar"),s=g.querySelectorAll(":scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *");if(t||0!==o.length||0!==s.length?(e.addElement(t),e.addElement(s)):e.addElement(g.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs")),A.addAnimation(e),E){e.beforeClearStyles([r]).fromTo("transform",`translateX(${m})`,u?"translateX(-100%)":"translateX(100%)");const t=Object(a.e)(g);A.afterAddWrite(()=>{"normal"===A.getDirection()&&t.style.setProperty("display","none")})}else e.fromTo("transform",`translateX(${m})`,`translateX(${h})`).fromTo(r,1,p);if(t){const o=i(t).querySelector(".transition-effect");if(o){const t=o.querySelector(".transition-cover"),a=o.querySelector(".transition-shadow"),i=Object(n.a)(),s=Object(n.a)(),l=Object(n.a)();i.addElement(o).beforeStyles({opacity:"1",display:"block"}).afterStyles({opacity:"",display:""}),s.addElement(t).beforeClearStyles([r]).fromTo(r,.1,0),l.addElement(a).beforeClearStyles([r]).fromTo(r,.7,.03),i.addAnimation([s,l]),e.addAnimation([i])}}o.forEach(e=>{const t=Object(n.a)();t.addElement(e);const o=Object(n.a)();o.addElement(e.querySelector("ion-title"));const a=Object(n.a)(),s=e.querySelectorAll("ion-buttons,[menuToggle]"),l=e.closest("ion-header"),c=l&&l.classList.contains("header-collapse-condense-inactive"),d=Array.from(s).filter(e=>{const t=e.classList.contains("buttons-collapse");return t&&!c||!t});a.addElement(d);const p=Object(n.a)(),y=e.querySelectorAll(":scope > *:not(ion-title):not(ion-buttons):not([menuToggle])");y.length>0&&p.addElement(y);const b=Object(n.a)();b.addElement(i(e).querySelector(".toolbar-background"));const g=Object(n.a)(),S=e.querySelector("ion-back-button");if(S&&g.addElement(S),t.addAnimation([o,a,p,g,b]),A.addAnimation(t),g.fromTo(r,.99,0),a.fromTo(r,.99,0),p.fromTo(r,.99,0),E){c||o.fromTo("transform",`translateX(${m})`,u?"translateX(-100%)":"translateX(100%)").fromTo(r,.99,0),p.fromTo("transform",`translateX(${m})`,u?"translateX(-100%)":"translateX(100%)"),b.beforeClearStyles([r,"transform"]);if((null==l?void 0:l.translucent)?b.fromTo("transform","translateX(0px)",u?"translateX(-100%)":"translateX(100%)"):b.fromTo(r,"var(--opacity)",0),S&&!q){const e=Object(n.a)();e.addElement(i(S).querySelector(".button-text")).fromTo("transform",`translateX(${m})`,`translateX(${(u?-124:124)+"px"})`),t.addAnimation(e)}}else c||o.fromTo("transform",`translateX(${m})`,`translateX(${h})`).fromTo(r,.99,0).afterClearStyles([f,r]),p.fromTo("transform",`translateX(${m})`,`translateX(${h})`).afterClearStyles([f,r]),g.afterClearStyles([r]),o.afterClearStyles([r]),a.afterClearStyles([r])})}return A}catch(e){throw e}}}}]);