(window.webpackJsonp=window.webpackJsonp||[]).push([[1,0,46,47],{81:function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return l})),n.d(e,"d",(function(){return p})),n.d(e,"e",(function(){return d})),n.d(e,"f",(function(){return c})),n.d(e,"g",(function(){return o})),n.d(e,"h",(function(){return a})),n.d(e,"i",(function(){return u})),n.d(e,"j",(function(){return m})),n.d(e,"k",(function(){return y})),n.d(e,"l",(function(){return f})),n.d(e,"m",(function(){return h})),n.d(e,"n",(function(){return s}));const i=(t,e,n,i)=>{if("undefined"!=typeof window){const r=window,o=r&&r.Ionic&&r.Ionic.config;if(o){const r=o.get("_ael");if(r)return r(t,e,n,i);if(o._ael)return o._ael(t,e,n,i)}}return t.addEventListener(e,n,i)},r=(t,e,n,i)=>{if("undefined"!=typeof window){const r=window,o=r&&r.Ionic&&r.Ionic.config;if(o){const r=o.get("_rel");if(r)return r(t,e,n,i);if(o._rel)return o._rel(t,e,n,i)}}return t.removeEventListener(e,n,i)},o=(t,e=t)=>t.shadowRoot||e,s=t=>"function"==typeof __zone_symbol__requestAnimationFrame?__zone_symbol__requestAnimationFrame(t):"function"==typeof requestAnimationFrame?requestAnimationFrame(t):setTimeout(t),a=t=>!!t.shadowRoot&&!!t.attachShadow,c=t=>{const e=t.closest("ion-item");return e?e.querySelector("ion-label"):null},l=(t,e,n,i,r)=>{if(t||a(e)){let t=e.querySelector("input.aux-input");t||(t=e.ownerDocument.createElement("input"),t.type="hidden",t.classList.add("aux-input"),e.appendChild(t)),t.disabled=r,t.name=n,t.value=i||""}},d=(t,e,n)=>Math.max(t,Math.min(e,n)),u=(t,e)=>{if(!t){const t="ASSERT: "+e;throw console.error(t),new Error(t)}},f=t=>t.timeStamp||Date.now(),h=t=>{if(t){const e=t.changedTouches;if(e&&e.length>0){const t=e[0];return{x:t.clientX,y:t.clientY}}if(void 0!==t.pageX)return{x:t.pageX,y:t.pageY}}return{x:0,y:0}},m=t=>{const e="rtl"===document.dir;switch(t){case"start":return e;case"end":return!e;default:throw new Error(`"${t}" is not a valid value for [side]. Use "start" or "end" instead.`)}},p=(t,e)=>{const n=t._original||t;return{_original:t,emit:y(n.emit.bind(n),e)}},y=(t,e=0)=>{let n;return(...i)=>{clearTimeout(n),n=setTimeout(t,e,...i)}}},82:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return i})),n.d(e,"d",(function(){return a}));const i=(t,e)=>null!==e.closest(t),r=(t,e)=>"string"==typeof t&&t.length>0?Object.assign({"ion-color":!0,["ion-color-"+t]:!0},e):e,o=t=>{const e={};return(t=>{if(void 0!==t){return(Array.isArray(t)?t:t.split(" ")).filter(t=>null!=t).map(t=>t.trim()).filter(t=>""!==t)}return[]})(t).forEach(t=>e[t]=!0),e},s=/^[a-z][a-z0-9+\-.]*:/,a=async(t,e,n,i)=>{if(null!=t&&"#"!==t[0]&&!s.test(t)){const r=document.querySelector("ion-router");if(r)return null!=e&&e.preventDefault(),r.push(t,n,i)}return!1}},83:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));class i{constructor(t,e,n,i,r){this.id=e,this.name=n,this.disableScroll=r,this.priority=1e6*i+e,this.ctrl=t}canStart(){return!!this.ctrl&&this.ctrl.canStart(this.name)}start(){return!!this.ctrl&&this.ctrl.start(this.name,this.id,this.priority)}capture(){if(!this.ctrl)return!1;const t=this.ctrl.capture(this.name,this.id,this.priority);return t&&this.disableScroll&&this.ctrl.disableScroll(this.id),t}release(){this.ctrl&&(this.ctrl.release(this.id),this.disableScroll&&this.ctrl.enableScroll(this.id))}destroy(){this.release(),this.ctrl=void 0}}class r{constructor(t,e,n,i){this.id=e,this.disable=n,this.disableScroll=i,this.ctrl=t}block(){if(this.ctrl){if(this.disable)for(const t of this.disable)this.ctrl.disableGesture(t,this.id);this.disableScroll&&this.ctrl.disableScroll(this.id)}}unblock(){if(this.ctrl){if(this.disable)for(const t of this.disable)this.ctrl.enableGesture(t,this.id);this.disableScroll&&this.ctrl.enableScroll(this.id)}}destroy(){this.unblock(),this.ctrl=void 0}}const o="backdrop-no-scroll",s=new class{constructor(){this.gestureId=0,this.requestedStart=new Map,this.disabledGestures=new Map,this.disabledScroll=new Set}createGesture(t){return new i(this,this.newID(),t.name,t.priority||0,!!t.disableScroll)}createBlocker(t={}){return new r(this,this.newID(),t.disable,!!t.disableScroll)}start(t,e,n){return this.canStart(t)?(this.requestedStart.set(e,n),!0):(this.requestedStart.delete(e),!1)}capture(t,e,n){if(!this.start(t,e,n))return!1;const i=this.requestedStart;let r=-1e4;if(i.forEach(t=>{r=Math.max(r,t)}),r===n){this.capturedId=e,i.clear();const n=new CustomEvent("ionGestureCaptured",{detail:{gestureName:t}});return document.dispatchEvent(n),!0}return i.delete(e),!1}release(t){this.requestedStart.delete(t),this.capturedId===t&&(this.capturedId=void 0)}disableGesture(t,e){let n=this.disabledGestures.get(t);void 0===n&&(n=new Set,this.disabledGestures.set(t,n)),n.add(e)}enableGesture(t,e){const n=this.disabledGestures.get(t);void 0!==n&&n.delete(e)}disableScroll(t){this.disabledScroll.add(t),1===this.disabledScroll.size&&document.body.classList.add(o)}enableScroll(t){this.disabledScroll.delete(t),0===this.disabledScroll.size&&document.body.classList.remove(o)}canStart(t){return void 0===this.capturedId&&!this.isDisabled(t)}isCaptured(){return void 0!==this.capturedId}isScrollDisabled(){return this.disabledScroll.size>0}isDisabled(t){const e=this.disabledGestures.get(t);return!!(e&&e.size>0)}newID(){return this.gestureId++,this.gestureId}}},84:function(t,e,n){"use strict";n.r(e),n.d(e,"MENU_BACK_BUTTON_PRIORITY",(function(){return o})),n.d(e,"OVERLAY_BACK_BUTTON_PRIORITY",(function(){return r})),n.d(e,"startHardwareBackButton",(function(){return i}));const i=()=>{const t=document;let e=!1;t.addEventListener("backbutton",()=>{if(e)return;let n=0,i=[];const r=new CustomEvent("ionBackButton",{bubbles:!1,detail:{register(t,e){i.push({priority:t,handler:e,id:n++})}}});t.dispatchEvent(r);const o=()=>{if(i.length>0){let t={priority:Number.MIN_SAFE_INTEGER,handler:()=>{},id:-1};i.forEach(e=>{e.priority>=t.priority&&(t=e)}),e=!0,i=i.filter(e=>e.id!==t.id),(async t=>{try{if(t&&t.handler){const e=t.handler(o);null!=e&&await e}}catch(t){console.error(t)}})(t).then(()=>e=!1)}};o()})},r=100,o=99},85:function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var i=n(81);let r;const o=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),s=t=>{if(void 0===r){const e=void 0!==t.style.animationName,n=void 0!==t.style.webkitAnimationName;r=!e&&n?"-webkit-":""}return r},a=(t,e,n)=>{const i=e.startsWith("animation")?s(t):"";t.style.setProperty(i+e,n)},c=(t,e)=>{const n=e.startsWith("animation")?s(t):"";t.style.removeProperty(n+e)},l=[],d=(t=[],e)=>{if(void 0!==e){const n=Array.isArray(e)?e:[e];return[...t,...n]}return t},u=t=>{let e,n,r,u,f,h,m,p,y,v,g,b,E,w=[],S=[],A=[],_=!1,C={},T=[],O=[],k={},D=0,I=!1,L=!1,Y=!0,x=!1,X=!0;const j=t,R=[],q=[],P=[],G=[],N=[],F=[],M=[],$=[],B=[],z=[],U="function"==typeof AnimationEffect||"function"==typeof window.AnimationEffect,W="function"==typeof Element&&"function"==typeof Element.prototype.animate&&U,K=t=>{V(),t&&Z()},H=(t,e)=>((e&&e.oneTimeCallback?q:R).push({c:t,o:e}),E),J=()=>(R.length=0,q.length=0,E),V=()=>{if(W)z.forEach(t=>{t.cancel()}),z.length=0;else{const t=P.slice();Object(i.n)(()=>{t.forEach(t=>{c(t,"animation-name"),c(t,"animation-duration"),c(t,"animation-timing-function"),c(t,"animation-iteration-count"),c(t,"animation-delay"),c(t,"animation-play-state"),c(t,"animation-fill-mode"),c(t,"animation-direction")})})}},Z=()=>{N.forEach(t=>{t&&t.parentNode&&t.parentNode.removeChild(t)}),N.length=0},Q=()=>void 0!==f?f:m?m.getFill():"both",tt=()=>void 0!==y?y:void 0!==h?h:m?m.getDirection():"normal",et=()=>I?"linear":void 0!==r?r:m?m.getEasing():"linear",nt=()=>L?0:void 0!==v?v:void 0!==n?n:m?m.getDuration():0,it=()=>void 0!==u?u:m?m.getIterations():1,rt=()=>void 0!==g?g:void 0!==e?e:m?m.getDelay():0,ot=()=>{0!==D&&(D--,0===D&&((()=>{mt(),$.forEach(t=>t()),B.forEach(t=>t());const t=Y?1:0,e=T,n=O,i=k;P.forEach(t=>{const r=t.classList;e.forEach(t=>r.add(t)),n.forEach(t=>r.remove(t));for(const e in i)i.hasOwnProperty(e)&&a(t,e,i[e])}),R.forEach(e=>e.c(t,E)),q.forEach(e=>e.c(t,E)),q.length=0,X=!0,Y&&(x=!0),Y=!0})(),m&&m.animationFinish()))},st=(e=!0)=>{Z();const n=(t=>(t.forEach(t=>{for(const e in t)if(t.hasOwnProperty(e)){const n=t[e];if("easing"===e){t["animation-timing-function"]=n,delete t[e]}else{const i=o(e);i!==e&&(t[i]=n,delete t[e])}}}),t))(w);P.forEach(r=>{if(n.length>0){const o=((t=[])=>t.map(t=>{const e=t.offset,n=[];for(const e in t)t.hasOwnProperty(e)&&"offset"!==e&&n.push(`${e}: ${t[e]};`);return`${100*e}% { ${n.join(" ")} }`}).join(" "))(n);b=void 0!==t?t:(t=>{let e=l.indexOf(t);return e<0&&(e=l.push(t)-1),"ion-animation-"+e})(o);const c=((t,e,n)=>{const i=(t=>{const e=t.getRootNode();return e.head||e})(n),r=s(n),o=i.querySelector("#"+t);if(o)return o;const a=(n.ownerDocument||document).createElement("style");return a.id=t,a.textContent=`@${r}keyframes ${t} { ${e} } @${r}keyframes ${t}-alt { ${e} }`,i.appendChild(a),a})(b,o,r);N.push(c),a(r,"animation-duration",nt()+"ms"),a(r,"animation-timing-function",et()),a(r,"animation-delay",rt()+"ms"),a(r,"animation-fill-mode",Q()),a(r,"animation-direction",tt());const d=it()===1/0?"infinite":it().toString();a(r,"animation-iteration-count",d),a(r,"animation-play-state","paused"),e&&a(r,"animation-name",c.id+"-alt"),Object(i.n)(()=>{a(r,"animation-name",c.id||null)})}})},at=(t=!0)=>{(()=>{F.forEach(t=>t()),M.forEach(t=>t());const t=S,e=A,n=C;P.forEach(i=>{const r=i.classList;t.forEach(t=>r.add(t)),e.forEach(t=>r.remove(t));for(const t in n)n.hasOwnProperty(t)&&a(i,t,n[t])})})(),w.length>0&&(W?(P.forEach(t=>{const e=t.animate(w,{id:j,delay:rt(),duration:nt(),easing:et(),iterations:it(),fill:Q(),direction:tt()});e.pause(),z.push(e)}),z.length>0&&(z[0].onfinish=()=>{ot()})):st(t)),_=!0},ct=t=>{if(t=Math.min(Math.max(t,0),.9999),W)z.forEach(e=>{e.currentTime=e.effect.getComputedTiming().delay+nt()*t,e.pause()});else{const e=`-${nt()*t}ms`;P.forEach(t=>{w.length>0&&(a(t,"animation-delay",e),a(t,"animation-play-state","paused"))})}},lt=t=>{z.forEach(t=>{t.effect.updateTiming({delay:rt(),duration:nt(),easing:et(),iterations:it(),fill:Q(),direction:tt()})}),void 0!==t&&ct(t)},dt=(t=!0,e)=>{Object(i.n)(()=>{P.forEach(n=>{a(n,"animation-name",b||null),a(n,"animation-duration",nt()+"ms"),a(n,"animation-timing-function",et()),a(n,"animation-delay",void 0!==e?`-${e*nt()}ms`:rt()+"ms"),a(n,"animation-fill-mode",Q()||null),a(n,"animation-direction",tt()||null);const r=it()===1/0?"infinite":it().toString();a(n,"animation-iteration-count",r),t&&a(n,"animation-name",b+"-alt"),Object(i.n)(()=>{a(n,"animation-name",b||null)})})})},ut=(t=!1,e=!0,n)=>(t&&G.forEach(i=>{i.update(t,e,n)}),W?lt(n):dt(e,n),E),ft=()=>{_&&(W?z.forEach(t=>{t.pause()}):P.forEach(t=>{a(t,"animation-play-state","paused")}))},ht=()=>{p=void 0,ot()},mt=()=>{p&&clearTimeout(p)},pt=()=>{P.forEach(t=>{c(t,"animation-duration"),c(t,"animation-delay"),c(t,"animation-play-state")})},yt=t=>new Promise(e=>{t&&t.sync&&(L=!0,H(()=>L=!1,{oneTimeCallback:!0})),_||at(),x&&(W?(ct(0),lt()):dt(),x=!1),X&&(D=G.length+1,X=!1),H(()=>e(),{oneTimeCallback:!0}),G.forEach(t=>{t.play()}),W?(z.forEach(t=>{t.play()}),0!==w.length&&0!==P.length||ot()):(()=>{if(mt(),Object(i.n)(()=>{P.forEach(t=>{w.length>0&&a(t,"animation-play-state","running")})}),0===w.length||0===P.length)ot();else{const t=rt()||0,e=nt()||0,n=it()||1;isFinite(n)&&(p=setTimeout(ht,t+e*n+100)),((t,e)=>{let n;const i={passive:!0},r=()=>{n&&n()},o=n=>{t===n.target&&(r(),e(n))};t&&(t.addEventListener("webkitAnimationEnd",o,i),t.addEventListener("animationend",o,i),n=()=>{t.removeEventListener("webkitAnimationEnd",o,i),t.removeEventListener("animationend",o,i)})})(P[0],()=>{mt(),Object(i.n)(()=>{pt(),Object(i.n)(ot)})})}})()}),vt=(t,e)=>{const n=w[0];return void 0===n||void 0!==n.offset&&0!==n.offset?w=[{offset:0,[t]:e},...w]:n[t]=e,E};return E={parentAnimation:m,elements:P,childAnimations:G,id:j,animationFinish:ot,from:vt,to:(t,e)=>{const n=w[w.length-1];return void 0===n||void 0!==n.offset&&1!==n.offset?w=[...w,{offset:1,[t]:e}]:n[t]=e,E},fromTo:(t,e,n)=>vt(t,e).to(t,n),parent:t=>(m=t,E),play:yt,pause:()=>(G.forEach(t=>{t.pause()}),ft(),E),stop:()=>{G.forEach(t=>{t.stop()}),_&&(V(),_=!1),I=!1,L=!1,X=!0,y=void 0,v=void 0,g=void 0,D=0,x=!1,Y=!0},destroy:t=>(G.forEach(e=>{e.destroy(t)}),K(t),P.length=0,G.length=0,w.length=0,J(),_=!1,X=!0,E),keyframes:t=>(w=t,E),addAnimation:t=>{if(null!=t)if(Array.isArray(t))for(const e of t)e.parent(E),G.push(e);else t.parent(E),G.push(t);return E},addElement:t=>{if(null!=t)if(1===t.nodeType)P.push(t);else if(t.length>=0)for(let e=0;e<t.length;e++)P.push(t[e]);else console.error("Invalid addElement value");return E},update:ut,fill:t=>(f=t,ut(!0),E),direction:t=>(h=t,ut(!0),E),iterations:t=>(u=t,ut(!0),E),duration:t=>(W||0!==t||(t=1),n=t,ut(!0),E),easing:t=>(r=t,ut(!0),E),delay:t=>(e=t,ut(!0),E),getWebAnimations:()=>z,getKeyframes:()=>w,getFill:Q,getDirection:tt,getDelay:rt,getIterations:it,getEasing:et,getDuration:nt,afterAddRead:t=>($.push(t),E),afterAddWrite:t=>(B.push(t),E),afterClearStyles:(t=[])=>{for(const e of t)k[e]="";return E},afterStyles:(t={})=>(k=t,E),afterRemoveClass:t=>(O=d(O,t),E),afterAddClass:t=>(T=d(T,t),E),beforeAddRead:t=>(F.push(t),E),beforeAddWrite:t=>(M.push(t),E),beforeClearStyles:(t=[])=>{for(const e of t)C[e]="";return E},beforeStyles:(t={})=>(C=t,E),beforeRemoveClass:t=>(A=d(A,t),E),beforeAddClass:t=>(S=d(S,t),E),onFinish:H,progressStart:(t=!1,e)=>(G.forEach(n=>{n.progressStart(t,e)}),ft(),I=t,_?ut(!1,!0,e):at(),E),progressStep:t=>(G.forEach(e=>{e.progressStep(t)}),ct(t),E),progressEnd:(t,e,n)=>(I=!1,G.forEach(i=>{i.progressEnd(t,e,n)}),void 0!==n&&(v=n),x=!1,Y=!0,0===t?(y="reverse"===tt()?"normal":"reverse","reverse"===y&&(Y=!1),W?(ut(),ct(1-e)):(g=(1-e)*nt()*-1,ut(!1,!1))):1===t&&(W?(ut(),ct(e)):(g=e*nt()*-1,ut(!1,!1))),void 0!==t&&(H(()=>{v=void 0,y=void 0,g=void 0},{oneTimeCallback:!0}),m||yt()),E)}}},86:function(t,e,n){"use strict";n.r(e),n.d(e,"createGesture",(function(){return c}));var i=n(83);n.d(e,"GESTURE_CONTROLLER",(function(){return i.a}));const r=(t,e,n,i)=>{const r=o(t)?{capture:!!i.capture,passive:!!i.passive}:!!i.capture;let s,a;return t.__zone_symbol__addEventListener?(s="__zone_symbol__addEventListener",a="__zone_symbol__removeEventListener"):(s="addEventListener",a="removeEventListener"),t[s](e,n,r),()=>{t[a](e,n,r)}},o=t=>{if(void 0===s)try{const e=Object.defineProperty({},"passive",{get:()=>{s=!0}});t.addEventListener("optsTest",()=>{},e)}catch(t){s=!1}return!!s};let s;const a=t=>t instanceof Document?t:t.ownerDocument,c=t=>{let e=!1,n=!1,o=!0,s=!1;const c=Object.assign({disableScroll:!1,direction:"x",gesturePriority:0,passive:!0,maxAngle:40,threshold:10},t),f=c.canStart,h=c.onWillStart,m=c.onStart,p=c.onEnd,y=c.notCaptured,v=c.onMove,g=c.threshold,b=c.passive,E=c.blurOnStart,w={type:"pan",startX:0,startY:0,startTime:0,currentX:0,currentY:0,velocityX:0,velocityY:0,deltaX:0,deltaY:0,currentTime:0,event:void 0,data:void 0},S=((t,e,n)=>{const i=n*(Math.PI/180),r="x"===t,o=Math.cos(i),s=e*e;let a=0,c=0,l=!1,d=0;return{start(t,e){a=t,c=e,d=0,l=!0},detect(t,e){if(!l)return!1;const n=t-a,i=e-c,u=n*n+i*i;if(u<s)return!1;const f=Math.sqrt(u),h=(r?n:i)/f;return d=h>o?1:h<-o?-1:0,l=!1,!0},isGesture:()=>0!==d,getDirection:()=>d}})(c.direction,c.threshold,c.maxAngle),A=i.a.createGesture({name:t.gestureName,priority:t.gesturePriority,disableScroll:t.disableScroll}),_=()=>{e&&(s=!1,v&&v(w))},C=()=>!(A&&!A.capture())&&(e=!0,o=!1,w.startX=w.currentX,w.startY=w.currentY,w.startTime=w.currentTime,h?h(w).then(T):T(),!0),T=()=>{E&&(()=>{if("undefined"!=typeof document){const t=document.activeElement;null!==t&&t.blur&&t.blur()}})(),m&&m(w),o=!0},O=()=>{e=!1,n=!1,s=!1,o=!0,A.release()},k=t=>{const n=e,i=o;O(),i&&(l(w,t),n?p&&p(w):y&&y(w))},D=((t,e,n,i,o)=>{let s,c,l,d,u,f,h,m=0;const p=i=>{m=Date.now()+2e3,e(i)&&(!c&&n&&(c=r(t,"touchmove",n,o)),l||(l=r(t,"touchend",v,o)),d||(d=r(t,"touchcancel",v,o)))},y=i=>{m>Date.now()||e(i)&&(!f&&n&&(f=r(a(t),"mousemove",n,o)),h||(h=r(a(t),"mouseup",g,o)))},v=t=>{b(),i&&i(t)},g=t=>{E(),i&&i(t)},b=()=>{c&&c(),l&&l(),d&&d(),c=l=d=void 0},E=()=>{f&&f(),h&&h(),f=h=void 0},w=()=>{b(),E()},S=(e=!0)=>{e?(s||(s=r(t,"touchstart",p,o)),u||(u=r(t,"mousedown",y,o))):(s&&s(),u&&u(),s=u=void 0,w())};return{enable:S,stop:w,destroy:()=>{S(!1),i=n=e=void 0}}})(c.el,t=>{const e=u(t);return!(n||!o)&&(d(t,w),w.startX=w.currentX,w.startY=w.currentY,w.startTime=w.currentTime=e,w.velocityX=w.velocityY=w.deltaX=w.deltaY=0,w.event=t,(!f||!1!==f(w))&&(A.release(),!!A.start()&&(n=!0,0===g?C():(S.start(w.startX,w.startY),!0))))},t=>{e?!s&&o&&(s=!0,l(w,t),requestAnimationFrame(_)):(l(w,t),S.detect(w.currentX,w.currentY)&&(S.isGesture()&&C()||I()))},k,{capture:!1,passive:b}),I=()=>{O(),D.stop(),y&&y(w)};return{enable(t=!0){t||(e&&k(void 0),O()),D.enable(t)},destroy(){A.destroy(),D.destroy()}}},l=(t,e)=>{if(!e)return;const n=t.currentX,i=t.currentY,r=t.currentTime;d(e,t);const o=t.currentX,s=t.currentY,a=(t.currentTime=u(e))-r;if(a>0&&a<100){const e=(o-n)/a,r=(s-i)/a;t.velocityX=.7*e+.3*t.velocityX,t.velocityY=.7*r+.3*t.velocityY}t.deltaX=o-t.startX,t.deltaY=s-t.startY,t.event=e},d=(t,e)=>{let n=0,i=0;if(t){const e=t.changedTouches;if(e&&e.length>0){const t=e[0];n=t.clientX,i=t.clientY}else void 0!==t.pageX&&(n=t.pageX,i=t.pageY)}e.currentX=n,e.currentY=i},u=t=>t.timeStamp||Date.now()},87:function(t,e,n){"use strict";n.d(e,"a",(function(){return L})),n.d(e,"b",(function(){return l})),n.d(e,"c",(function(){return d})),n.d(e,"d",(function(){return f})),n.d(e,"e",(function(){return w})),n.d(e,"f",(function(){return h})),n.d(e,"g",(function(){return A})),n.d(e,"h",(function(){return T})),n.d(e,"i",(function(){return a})),n.d(e,"j",(function(){return k})),n.d(e,"k",(function(){return u})),n.d(e,"l",(function(){return I}));var i=n(4),r=n(81),o=n(84);let s=0;const a=new WeakMap,c=t=>({create:e=>m(t,e),dismiss:(e,n,i)=>b(document,e,n,t,i),getTop:async()=>E(document,t)}),l=c("ion-alert"),d=c("ion-action-sheet"),u=c("ion-picker"),f=c("ion-popover"),h=t=>{"undefined"!=typeof document&&g(document);const e=s++;t.overlayIndex=e,t.hasAttribute("id")||(t.id="ion-overlay-"+e)},m=(t,e)=>"undefined"!=typeof customElements?customElements.whenDefined(t).then(()=>{const n=document.createElement(t);return n.classList.add("overlay-hidden"),Object.assign(n,e),_(document).appendChild(n),n.componentOnReady()}):Promise.resolve(),p='[tabindex]:not([tabindex^="-"]), input:not([type=hidden]):not([tabindex^="-"]), textarea:not([tabindex^="-"]), button:not([tabindex^="-"]), select:not([tabindex^="-"]), .ion-focusable:not([tabindex^="-"])',y="input:not([type=hidden]), textarea, button, select",v=(t,e)=>{const n=E(e),i=t.target;if(n&&i)if(n===i)n.lastFocus=void 0;else{const t=Object(r.g)(n);if(!t.contains(i))return;const o=t.querySelector(".ion-overlay-wrapper");if(!o)return;if(o.contains(i))n.lastFocus=i;else{const t=n.lastFocus;((t,e)=>{let n=t.querySelector(p);const i=n&&n.shadowRoot;i&&(n=i.querySelector(y)||n),n?n.focus():e.focus()})(o,n),t===e.activeElement&&((t,e)=>{const n=Array.from(t.querySelectorAll(p));let i=n.length>0?n[n.length-1]:null;const r=i&&i.shadowRoot;r&&(i=r.querySelector(y)||i),i?i.focus():e.focus()})(o,n),n.lastFocus=e.activeElement}}},g=t=>{0===s&&(s=1,t.addEventListener("focus",e=>v(e,t),!0),t.addEventListener("ionBackButton",e=>{const n=E(t);n&&n.backdropDismiss&&e.detail.register(o.OVERLAY_BACK_BUTTON_PRIORITY,()=>n.dismiss(void 0,L))}),t.addEventListener("keyup",e=>{if("Escape"===e.key){const e=E(t);e&&e.backdropDismiss&&e.dismiss(void 0,L)}}))},b=(t,e,n,i,r)=>{const o=E(t,i,r);return o?o.dismiss(e,n):Promise.reject("overlay does not exist")},E=(t,e,n)=>{const i=((t,e)=>(void 0===e&&(e="ion-alert,ion-action-sheet,ion-loading,ion-modal,ion-picker,ion-popover,ion-toast"),Array.from(t.querySelectorAll(e)).filter(t=>t.overlayIndex>0)))(t,e);return void 0===n?i[i.length-1]:i.find(t=>t.id===n)},w=async(t,e,n,r,o)=>{if(t.presented)return;t.presented=!0,t.willPresent.emit();const s=Object(i.b)(t),a=t.enterAnimation?t.enterAnimation:i.c.get(e,"ios"===s?n:r);await C(t,a,t.el,o)&&t.didPresent.emit(),"ION-TOAST"!==t.el.tagName&&S(t.el),t.keyboardClose&&t.el.focus()},S=async t=>{let e=document.activeElement;if(!e)return;const n=e&&e.shadowRoot;n&&(e=n.querySelector(y)||e),await t.onDidDismiss(),e.focus()},A=async(t,e,n,r,o,s,c)=>{if(!t.presented)return!1;t.presented=!1;try{t.el.style.setProperty("pointer-events","none"),t.willDismiss.emit({data:e,role:n});const l=Object(i.b)(t),d=t.leaveAnimation?t.leaveAnimation:i.c.get(r,"ios"===l?o:s);"gesture"!==n&&await C(t,d,t.el,c),t.didDismiss.emit({data:e,role:n}),a.delete(t)}catch(t){console.error(t)}return t.el.remove(),!0},_=t=>t.querySelector("ion-app")||t.body,C=async(t,e,n,r)=>{n.classList.remove("overlay-hidden");const o=e(n.shadowRoot||t.el,r);t.animated&&i.c.getBoolean("animated",!0)||o.duration(0),t.keyboardClose&&o.beforeAddWrite(()=>{const t=n.ownerDocument.activeElement;t&&t.matches("input, ion-input, ion-textarea")&&t.blur()});const s=a.get(t)||[];return a.set(t,[...s,o]),await o.play(),!0},T=(t,e)=>{let n;const i=new Promise(t=>n=t);return O(t,e,t=>{n(t.detail)}),i},O=(t,e,n)=>{const i=o=>{Object(r.b)(t,e,i),n(o)};Object(r.a)(t,e,i)},k=t=>"cancel"===t||t===L,D=t=>t(),I=(t,e)=>{if("function"==typeof t){return i.c.get("_zoneGate",D)(()=>{try{return t(e)}catch(t){console.error(t)}})}},L="backdrop"},88:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return s})),n.d(e,"c",(function(){return r})),n.d(e,"d",(function(){return c})),n.d(e,"e",(function(){return a}));const i={getEngine(){const t=window;return t.TapticEngine||t.Capacitor&&t.Capacitor.isPluginAvailable("Haptics")&&t.Capacitor.Plugins.Haptics},available(){return!!this.getEngine()},isCordova:()=>!!window.TapticEngine,isCapacitor:()=>!!window.Capacitor,impact(t){const e=this.getEngine();if(!e)return;const n=this.isCapacitor()?t.style.toUpperCase():t.style;e.impact({style:n})},notification(t){const e=this.getEngine();if(!e)return;const n=this.isCapacitor()?t.style.toUpperCase():t.style;e.notification({style:n})},selection(){this.impact({style:"light"})},selectionStart(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionStart():t.gestureSelectionStart())},selectionChanged(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionChanged():t.gestureSelectionChanged())},selectionEnd(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionEnd():t.gestureSelectionEnd())}},r=()=>{i.selection()},o=()=>{i.selectionStart()},s=()=>{i.selectionChanged()},a=()=>{i.selectionEnd()},c=t=>{i.impact(t)}},96:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var i=n(2),r=n(86),o=n(88);const s=(t,e)=>{let n,s;const a=(t,i,r)=>{if("undefined"==typeof document)return;const o=document.elementFromPoint(t,i);o&&e(o)?o!==n&&(l(),c(o,r)):l()},c=(t,e)=>{n=t,s||(s=n);const r=n;Object(i.f)(()=>r.classList.add("ion-activated")),e()},l=(t=!1)=>{if(!n)return;const e=n;Object(i.f)(()=>e.classList.remove("ion-activated")),t&&s!==n&&n.click(),n=void 0};return Object(r.createGesture)({el:t,gestureName:"buttonActiveDrag",threshold:0,onStart:t=>a(t.currentX,t.currentY,o.a),onMove:t=>a(t.currentX,t.currentY,o.b),onEnd:()=>{l(!0),Object(o.e)(),s=void 0}})}}}]);