(window.webpackJsonp=window.webpackJsonp||[]).push([[12,46],{51:function(e,n,t){"use strict";t.r(n),t.d(n,"ion_loading",(function(){return f}));var i=t(1),o=t(3),r=(t(77),t(81)),a=t(85),s=(t(80),t(83)),c=t(78);const d=e=>{const n=Object(r.a)(),t=Object(r.a)(),i=Object(r.a)();return t.addElement(e.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),i.addElement(e.querySelector(".loading-wrapper")).keyframes([{offset:0,opacity:.01,transform:"scale(1.1)"},{offset:1,opacity:1,transform:"scale(1)"}]),n.addElement(e).easing("ease-in-out").duration(200).addAnimation([t,i])},l=e=>{const n=Object(r.a)(),t=Object(r.a)(),i=Object(r.a)();return t.addElement(e.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),i.addElement(e.querySelector(".loading-wrapper")).keyframes([{offset:0,opacity:.99,transform:"scale(1)"},{offset:1,opacity:0,transform:"scale(0.9)"}]),n.addElement(e).easing("ease-in-out").duration(200).addAnimation([t,i])},u=e=>{const n=Object(r.a)(),t=Object(r.a)(),i=Object(r.a)();return t.addElement(e.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),i.addElement(e.querySelector(".loading-wrapper")).keyframes([{offset:0,opacity:.01,transform:"scale(1.1)"},{offset:1,opacity:1,transform:"scale(1)"}]),n.addElement(e).easing("ease-in-out").duration(200).addAnimation([t,i])},m=e=>{const n=Object(r.a)(),t=Object(r.a)(),i=Object(r.a)();return t.addElement(e.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),i.addElement(e.querySelector(".loading-wrapper")).keyframes([{offset:0,opacity:.99,transform:"scale(1)"},{offset:1,opacity:0,transform:"scale(0.9)"}]),n.addElement(e).easing("ease-in-out").duration(200).addAnimation([t,i])},f=class{constructor(e){Object(i.o)(this,e),this.didPresent=Object(i.g)(this,"ionLoadingDidPresent",7),this.willPresent=Object(i.g)(this,"ionLoadingWillPresent",7),this.willDismiss=Object(i.g)(this,"ionLoadingWillDismiss",7),this.didDismiss=Object(i.g)(this,"ionLoadingDidDismiss",7),this.presented=!1,this.keyboardClose=!0,this.duration=0,this.backdropDismiss=!1,this.showBackdrop=!0,this.translucent=!1,this.animated=!0,this.onBackdropTap=()=>{this.dismiss(void 0,s.a)}}connectedCallback(){Object(s.f)(this.el)}componentWillLoad(){if(void 0===this.spinner){const e=Object(o.b)(this);this.spinner=o.c.get("loadingSpinner",o.c.get("spinner","ios"===e?"lines":"crescent"))}}async present(){await Object(s.e)(this,"loadingEnter",d,u,void 0),this.duration>0&&(this.durationTimeout=setTimeout(()=>this.dismiss(),this.duration+10))}dismiss(e,n){return this.durationTimeout&&clearTimeout(this.durationTimeout),Object(s.g)(this,e,n,"loadingLeave",l,m)}onDidDismiss(){return Object(s.h)(this.el,"ionLoadingDidDismiss")}onWillDismiss(){return Object(s.h)(this.el,"ionLoadingWillDismiss")}render(){const{message:e,spinner:n}=this,t=Object(o.b)(this);return Object(i.j)(i.c,{onIonBackdropTap:this.onBackdropTap,tabindex:"-1",style:{zIndex:""+(4e4+this.overlayIndex)},class:Object.assign(Object.assign({},Object(c.b)(this.cssClass)),{[t]:!0,"loading-translucent":this.translucent})},Object(i.j)("ion-backdrop",{visible:this.showBackdrop,tappable:this.backdropDismiss}),Object(i.j)("div",{tabindex:"0"}),Object(i.j)("div",{class:"loading-wrapper ion-overlay-wrapper",role:"dialog"},n&&Object(i.j)("div",{class:"loading-spinner"},Object(i.j)("ion-spinner",{name:n,"aria-hidden":"true"})),e&&Object(i.j)("div",{class:"loading-content",innerHTML:Object(a.a)(e)})),Object(i.j)("div",{tabindex:"0"}))}get el(){return Object(i.k)(this)}};f.style={ios:".sc-ion-loading-ios-h{--min-width:auto;--width:auto;--min-height:auto;--height:auto;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;font-family:var(--ion-font-family, inherit);contain:strict;-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1001}.overlay-hidden.sc-ion-loading-ios-h{display:none}.loading-wrapper.sc-ion-loading-ios{display:-ms-flexbox;display:flex;-ms-flex-align:inherit;align-items:inherit;-ms-flex-pack:inherit;justify-content:inherit;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);opacity:0;z-index:10}.spinner-lines.sc-ion-loading-ios,.spinner-lines-small.sc-ion-loading-ios,.spinner-bubbles.sc-ion-loading-ios,.spinner-circles.sc-ion-loading-ios,.spinner-crescent.sc-ion-loading-ios,.spinner-dots.sc-ion-loading-ios{color:var(--spinner-color)}.sc-ion-loading-ios-h{--background:var(--ion-overlay-background-color, var(--ion-color-step-100, #f9f9f9));--max-width:270px;--max-height:90%;--spinner-color:var(--ion-color-step-600, #666666);--backdrop-opacity:var(--ion-backdrop-opacity, 0.3);color:var(--ion-text-color, #000);font-size:14px}.loading-wrapper.sc-ion-loading-ios{border-radius:8px;padding-left:34px;padding-right:34px;padding-top:24px;padding-bottom:24px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.loading-wrapper.sc-ion-loading-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:34px;padding-inline-start:34px;-webkit-padding-end:34px;padding-inline-end:34px}}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){.loading-translucent.sc-ion-loading-ios-h .loading-wrapper.sc-ion-loading-ios{background-color:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}}.loading-content.sc-ion-loading-ios{font-weight:bold}.loading-spinner.sc-ion-loading-ios+.loading-content.sc-ion-loading-ios{margin-left:16px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.loading-spinner.sc-ion-loading-ios+.loading-content.sc-ion-loading-ios{margin-left:unset;-webkit-margin-start:16px;margin-inline-start:16px}}",md:".sc-ion-loading-md-h{--min-width:auto;--width:auto;--min-height:auto;--height:auto;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;font-family:var(--ion-font-family, inherit);contain:strict;-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1001}.overlay-hidden.sc-ion-loading-md-h{display:none}.loading-wrapper.sc-ion-loading-md{display:-ms-flexbox;display:flex;-ms-flex-align:inherit;align-items:inherit;-ms-flex-pack:inherit;justify-content:inherit;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);opacity:0;z-index:10}.spinner-lines.sc-ion-loading-md,.spinner-lines-small.sc-ion-loading-md,.spinner-bubbles.sc-ion-loading-md,.spinner-circles.sc-ion-loading-md,.spinner-crescent.sc-ion-loading-md,.spinner-dots.sc-ion-loading-md{color:var(--spinner-color)}.sc-ion-loading-md-h{--background:var(--ion-color-step-50, #f2f2f2);--max-width:280px;--max-height:90%;--spinner-color:var(--ion-color-primary, #3880ff);--backdrop-opacity:var(--ion-backdrop-opacity, 0.32);color:var(--ion-color-step-850, #262626);font-size:14px}.loading-wrapper.sc-ion-loading-md{border-radius:2px;padding-left:24px;padding-right:24px;padding-top:24px;padding-bottom:24px;-webkit-box-shadow:0 16px 20px rgba(0, 0, 0, 0.4);box-shadow:0 16px 20px rgba(0, 0, 0, 0.4)}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.loading-wrapper.sc-ion-loading-md{padding-left:unset;padding-right:unset;-webkit-padding-start:24px;padding-inline-start:24px;-webkit-padding-end:24px;padding-inline-end:24px}}.loading-spinner.sc-ion-loading-md+.loading-content.sc-ion-loading-md{margin-left:16px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.loading-spinner.sc-ion-loading-md+.loading-content.sc-ion-loading-md{margin-left:unset;-webkit-margin-start:16px;margin-inline-start:16px}}"}},77:function(e,n,t){"use strict";t.d(n,"a",(function(){return i})),t.d(n,"b",(function(){return o})),t.d(n,"c",(function(){return d})),t.d(n,"d",(function(){return h})),t.d(n,"e",(function(){return l})),t.d(n,"f",(function(){return c})),t.d(n,"g",(function(){return r})),t.d(n,"h",(function(){return s})),t.d(n,"i",(function(){return u})),t.d(n,"j",(function(){return p})),t.d(n,"k",(function(){return g})),t.d(n,"l",(function(){return m})),t.d(n,"m",(function(){return f})),t.d(n,"n",(function(){return a}));const i=(e,n,t,i)=>{if("undefined"!=typeof window){const o=window,r=o&&o.Ionic&&o.Ionic.config;if(r){const o=r.get("_ael");if(o)return o(e,n,t,i);if(r._ael)return r._ael(e,n,t,i)}}return e.addEventListener(n,t,i)},o=(e,n,t,i)=>{if("undefined"!=typeof window){const o=window,r=o&&o.Ionic&&o.Ionic.config;if(r){const o=r.get("_rel");if(o)return o(e,n,t,i);if(r._rel)return r._rel(e,n,t,i)}}return e.removeEventListener(n,t,i)},r=(e,n=e)=>e.shadowRoot||n,a=e=>"function"==typeof __zone_symbol__requestAnimationFrame?__zone_symbol__requestAnimationFrame(e):"function"==typeof requestAnimationFrame?requestAnimationFrame(e):setTimeout(e),s=e=>!!e.shadowRoot&&!!e.attachShadow,c=e=>{const n=e.closest("ion-item");return n?n.querySelector("ion-label"):null},d=(e,n,t,i,o)=>{if(e||s(n)){let e=n.querySelector("input.aux-input");e||(e=n.ownerDocument.createElement("input"),e.type="hidden",e.classList.add("aux-input"),n.appendChild(e)),e.disabled=o,e.name=t,e.value=i||""}},l=(e,n,t)=>Math.max(e,Math.min(n,t)),u=(e,n)=>{if(!e){const e="ASSERT: "+n;throw console.error(e),new Error(e)}},m=e=>e.timeStamp||Date.now(),f=e=>{if(e){const n=e.changedTouches;if(n&&n.length>0){const e=n[0];return{x:e.clientX,y:e.clientY}}if(void 0!==e.pageX)return{x:e.pageX,y:e.pageY}}return{x:0,y:0}},p=e=>{const n="rtl"===document.dir;switch(e){case"start":return n;case"end":return!n;default:throw new Error(`"${e}" is not a valid value for [side]. Use "start" or "end" instead.`)}},h=(e,n)=>{const t=e._original||e;return{_original:e,emit:g(t.emit.bind(t),n)}},g=(e,n=0)=>{let t;return(...i)=>{clearTimeout(t),t=setTimeout(e,n,...i)}}},78:function(e,n,t){"use strict";t.d(n,"a",(function(){return o})),t.d(n,"b",(function(){return r})),t.d(n,"c",(function(){return i})),t.d(n,"d",(function(){return s}));const i=(e,n)=>null!==n.closest(e),o=(e,n)=>"string"==typeof e&&e.length>0?Object.assign({"ion-color":!0,["ion-color-"+e]:!0},n):n,r=e=>{const n={};return(e=>{if(void 0!==e){return(Array.isArray(e)?e:e.split(" ")).filter(e=>null!=e).map(e=>e.trim()).filter(e=>""!==e)}return[]})(e).forEach(e=>n[e]=!0),n},a=/^[a-z][a-z0-9+\-.]*:/,s=async(e,n,t,i)=>{if(null!=e&&"#"!==e[0]&&!a.test(e)){const o=document.querySelector("ion-router");if(o)return null!=n&&n.preventDefault(),o.push(e,t,i)}return!1}},80:function(e,n,t){"use strict";t.r(n),t.d(n,"MENU_BACK_BUTTON_PRIORITY",(function(){return r})),t.d(n,"OVERLAY_BACK_BUTTON_PRIORITY",(function(){return o})),t.d(n,"startHardwareBackButton",(function(){return i}));const i=()=>{const e=document;let n=!1;e.addEventListener("backbutton",()=>{if(n)return;let t=0,i=[];const o=new CustomEvent("ionBackButton",{bubbles:!1,detail:{register(e,n){i.push({priority:e,handler:n,id:t++})}}});e.dispatchEvent(o);const r=()=>{if(i.length>0){let e={priority:Number.MIN_SAFE_INTEGER,handler:()=>{},id:-1};i.forEach(n=>{n.priority>=e.priority&&(e=n)}),n=!0,i=i.filter(n=>n.id!==e.id),(async e=>{try{if(e&&e.handler){const n=e.handler(r);null!=n&&await n}}catch(e){console.error(e)}})(e).then(()=>n=!1)}};r()})},o=100,r=99},81:function(e,n,t){"use strict";t.d(n,"a",(function(){return u}));var i=t(77);let o;const r=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),a=e=>{if(void 0===o){const n=void 0!==e.style.animationName,t=void 0!==e.style.webkitAnimationName;o=!n&&t?"-webkit-":""}return o},s=(e,n,t)=>{const i=n.startsWith("animation")?a(e):"";e.style.setProperty(i+n,t)},c=(e,n)=>{const t=n.startsWith("animation")?a(e):"";e.style.removeProperty(t+n)},d=[],l=(e=[],n)=>{if(void 0!==n){const t=Array.isArray(n)?n:[n];return[...e,...t]}return e},u=e=>{let n,t,o,u,m,f,p,h,g,b,y,v,w,x=[],E=[],k=[],j=!1,O={},A=[],T=[],S={},C=0,D=!1,L=!1,_=!0,q=!1,I=!0;const R=e,z=[],P=[],B=[],N=[],F=[],$=[],W=[],M=[],Y=[],H=[],U="function"==typeof AnimationEffect||"function"==typeof window.AnimationEffect,K="function"==typeof Element&&"function"==typeof Element.prototype.animate&&U,X=e=>{V(),e&&Z()},G=(e,n)=>((n&&n.oneTimeCallback?P:z).push({c:e,o:n}),w),J=()=>(z.length=0,P.length=0,w),V=()=>{if(K)H.forEach(e=>{e.cancel()}),H.length=0;else{const e=B.slice();Object(i.n)(()=>{e.forEach(e=>{c(e,"animation-name"),c(e,"animation-duration"),c(e,"animation-timing-function"),c(e,"animation-iteration-count"),c(e,"animation-delay"),c(e,"animation-play-state"),c(e,"animation-fill-mode"),c(e,"animation-direction")})})}},Z=()=>{F.forEach(e=>{e&&e.parentNode&&e.parentNode.removeChild(e)}),F.length=0},Q=()=>void 0!==m?m:p?p.getFill():"both",ee=()=>void 0!==g?g:void 0!==f?f:p?p.getDirection():"normal",ne=()=>D?"linear":void 0!==o?o:p?p.getEasing():"linear",te=()=>L?0:void 0!==b?b:void 0!==t?t:p?p.getDuration():0,ie=()=>void 0!==u?u:p?p.getIterations():1,oe=()=>void 0!==y?y:void 0!==n?n:p?p.getDelay():0,re=()=>{0!==C&&(C--,0===C&&((()=>{pe(),M.forEach(e=>e()),Y.forEach(e=>e());const e=_?1:0,n=A,t=T,i=S;B.forEach(e=>{const o=e.classList;n.forEach(e=>o.add(e)),t.forEach(e=>o.remove(e));for(const n in i)i.hasOwnProperty(n)&&s(e,n,i[n])}),z.forEach(n=>n.c(e,w)),P.forEach(n=>n.c(e,w)),P.length=0,I=!0,_&&(q=!0),_=!0})(),p&&p.animationFinish()))},ae=(n=!0)=>{Z();const t=(e=>(e.forEach(e=>{for(const n in e)if(e.hasOwnProperty(n)){const t=e[n];if("easing"===n){e["animation-timing-function"]=t,delete e[n]}else{const i=r(n);i!==n&&(e[i]=t,delete e[n])}}}),e))(x);B.forEach(o=>{if(t.length>0){const r=((e=[])=>e.map(e=>{const n=e.offset,t=[];for(const n in e)e.hasOwnProperty(n)&&"offset"!==n&&t.push(`${n}: ${e[n]};`);return`${100*n}% { ${t.join(" ")} }`}).join(" "))(t);v=void 0!==e?e:(e=>{let n=d.indexOf(e);return n<0&&(n=d.push(e)-1),"ion-animation-"+n})(r);const c=((e,n,t)=>{const i=(e=>{const n=e.getRootNode();return n.head||n})(t),o=a(t),r=i.querySelector("#"+e);if(r)return r;const s=(t.ownerDocument||document).createElement("style");return s.id=e,s.textContent=`@${o}keyframes ${e} { ${n} } @${o}keyframes ${e}-alt { ${n} }`,i.appendChild(s),s})(v,r,o);F.push(c),s(o,"animation-duration",te()+"ms"),s(o,"animation-timing-function",ne()),s(o,"animation-delay",oe()+"ms"),s(o,"animation-fill-mode",Q()),s(o,"animation-direction",ee());const l=ie()===1/0?"infinite":ie().toString();s(o,"animation-iteration-count",l),s(o,"animation-play-state","paused"),n&&s(o,"animation-name",c.id+"-alt"),Object(i.n)(()=>{s(o,"animation-name",c.id||null)})}})},se=(e=!0)=>{(()=>{$.forEach(e=>e()),W.forEach(e=>e());const e=E,n=k,t=O;B.forEach(i=>{const o=i.classList;e.forEach(e=>o.add(e)),n.forEach(e=>o.remove(e));for(const e in t)t.hasOwnProperty(e)&&s(i,e,t[e])})})(),x.length>0&&(K?(B.forEach(e=>{const n=e.animate(x,{id:R,delay:oe(),duration:te(),easing:ne(),iterations:ie(),fill:Q(),direction:ee()});n.pause(),H.push(n)}),H.length>0&&(H[0].onfinish=()=>{re()})):ae(e)),j=!0},ce=e=>{if(e=Math.min(Math.max(e,0),.9999),K)H.forEach(n=>{n.currentTime=n.effect.getComputedTiming().delay+te()*e,n.pause()});else{const n=`-${te()*e}ms`;B.forEach(e=>{x.length>0&&(s(e,"animation-delay",n),s(e,"animation-play-state","paused"))})}},de=e=>{H.forEach(e=>{e.effect.updateTiming({delay:oe(),duration:te(),easing:ne(),iterations:ie(),fill:Q(),direction:ee()})}),void 0!==e&&ce(e)},le=(e=!0,n)=>{Object(i.n)(()=>{B.forEach(t=>{s(t,"animation-name",v||null),s(t,"animation-duration",te()+"ms"),s(t,"animation-timing-function",ne()),s(t,"animation-delay",void 0!==n?`-${n*te()}ms`:oe()+"ms"),s(t,"animation-fill-mode",Q()||null),s(t,"animation-direction",ee()||null);const o=ie()===1/0?"infinite":ie().toString();s(t,"animation-iteration-count",o),e&&s(t,"animation-name",v+"-alt"),Object(i.n)(()=>{s(t,"animation-name",v||null)})})})},ue=(e=!1,n=!0,t)=>(e&&N.forEach(i=>{i.update(e,n,t)}),K?de(t):le(n,t),w),me=()=>{j&&(K?H.forEach(e=>{e.pause()}):B.forEach(e=>{s(e,"animation-play-state","paused")}))},fe=()=>{h=void 0,re()},pe=()=>{h&&clearTimeout(h)},he=()=>{B.forEach(e=>{c(e,"animation-duration"),c(e,"animation-delay"),c(e,"animation-play-state")})},ge=e=>new Promise(n=>{e&&e.sync&&(L=!0,G(()=>L=!1,{oneTimeCallback:!0})),j||se(),q&&(K?(ce(0),de()):le(),q=!1),I&&(C=N.length+1,I=!1),G(()=>n(),{oneTimeCallback:!0}),N.forEach(e=>{e.play()}),K?(H.forEach(e=>{e.play()}),0!==x.length&&0!==B.length||re()):(()=>{if(pe(),Object(i.n)(()=>{B.forEach(e=>{x.length>0&&s(e,"animation-play-state","running")})}),0===x.length||0===B.length)re();else{const e=oe()||0,n=te()||0,t=ie()||1;isFinite(t)&&(h=setTimeout(fe,e+n*t+100)),((e,n)=>{let t;const i={passive:!0},o=()=>{t&&t()},r=t=>{e===t.target&&(o(),n(t))};e&&(e.addEventListener("webkitAnimationEnd",r,i),e.addEventListener("animationend",r,i),t=()=>{e.removeEventListener("webkitAnimationEnd",r,i),e.removeEventListener("animationend",r,i)})})(B[0],()=>{pe(),Object(i.n)(()=>{he(),Object(i.n)(re)})})}})()}),be=(e,n)=>{const t=x[0];return void 0===t||void 0!==t.offset&&0!==t.offset?x=[{offset:0,[e]:n},...x]:t[e]=n,w};return w={parentAnimation:p,elements:B,childAnimations:N,id:R,animationFinish:re,from:be,to:(e,n)=>{const t=x[x.length-1];return void 0===t||void 0!==t.offset&&1!==t.offset?x=[...x,{offset:1,[e]:n}]:t[e]=n,w},fromTo:(e,n,t)=>be(e,n).to(e,t),parent:e=>(p=e,w),play:ge,pause:()=>(N.forEach(e=>{e.pause()}),me(),w),stop:()=>{N.forEach(e=>{e.stop()}),j&&(V(),j=!1),D=!1,L=!1,I=!0,g=void 0,b=void 0,y=void 0,C=0,q=!1,_=!0},destroy:e=>(N.forEach(n=>{n.destroy(e)}),X(e),B.length=0,N.length=0,x.length=0,J(),j=!1,I=!0,w),keyframes:e=>(x=e,w),addAnimation:e=>{if(null!=e)if(Array.isArray(e))for(const n of e)n.parent(w),N.push(n);else e.parent(w),N.push(e);return w},addElement:e=>{if(null!=e)if(1===e.nodeType)B.push(e);else if(e.length>=0)for(let n=0;n<e.length;n++)B.push(e[n]);else console.error("Invalid addElement value");return w},update:ue,fill:e=>(m=e,ue(!0),w),direction:e=>(f=e,ue(!0),w),iterations:e=>(u=e,ue(!0),w),duration:e=>(K||0!==e||(e=1),t=e,ue(!0),w),easing:e=>(o=e,ue(!0),w),delay:e=>(n=e,ue(!0),w),getWebAnimations:()=>H,getKeyframes:()=>x,getFill:Q,getDirection:ee,getDelay:oe,getIterations:ie,getEasing:ne,getDuration:te,afterAddRead:e=>(M.push(e),w),afterAddWrite:e=>(Y.push(e),w),afterClearStyles:(e=[])=>{for(const n of e)S[n]="";return w},afterStyles:(e={})=>(S=e,w),afterRemoveClass:e=>(T=l(T,e),w),afterAddClass:e=>(A=l(A,e),w),beforeAddRead:e=>($.push(e),w),beforeAddWrite:e=>(W.push(e),w),beforeClearStyles:(e=[])=>{for(const n of e)O[n]="";return w},beforeStyles:(e={})=>(O=e,w),beforeRemoveClass:e=>(k=l(k,e),w),beforeAddClass:e=>(E=l(E,e),w),onFinish:G,progressStart:(e=!1,n)=>(N.forEach(t=>{t.progressStart(e,n)}),me(),D=e,j?ue(!1,!0,n):se(),w),progressStep:e=>(N.forEach(n=>{n.progressStep(e)}),ce(e),w),progressEnd:(e,n,t)=>(D=!1,N.forEach(i=>{i.progressEnd(e,n,t)}),void 0!==t&&(b=t),q=!1,_=!0,0===e?(g="reverse"===ee()?"normal":"reverse","reverse"===g&&(_=!1),K?(ue(),ce(1-n)):(y=(1-n)*te()*-1,ue(!1,!1))):1===e&&(K?(ue(),ce(n)):(y=n*te()*-1,ue(!1,!1))),void 0!==e&&(G(()=>{b=void 0,g=void 0,y=void 0},{oneTimeCallback:!0}),p||ge()),w)}}},83:function(e,n,t){"use strict";t.d(n,"a",(function(){return L})),t.d(n,"b",(function(){return d})),t.d(n,"c",(function(){return l})),t.d(n,"d",(function(){return m})),t.d(n,"e",(function(){return x})),t.d(n,"f",(function(){return f})),t.d(n,"g",(function(){return k})),t.d(n,"h",(function(){return A})),t.d(n,"i",(function(){return s})),t.d(n,"j",(function(){return S})),t.d(n,"k",(function(){return u})),t.d(n,"l",(function(){return D}));var i=t(3),o=t(77),r=t(80);let a=0;const s=new WeakMap,c=e=>({create:n=>p(e,n),dismiss:(n,t,i)=>v(document,n,t,e,i),getTop:async()=>w(document,e)}),d=c("ion-alert"),l=c("ion-action-sheet"),u=c("ion-picker"),m=c("ion-popover"),f=e=>{"undefined"!=typeof document&&y(document);const n=a++;e.overlayIndex=n,e.hasAttribute("id")||(e.id="ion-overlay-"+n)},p=(e,n)=>"undefined"!=typeof customElements?customElements.whenDefined(e).then(()=>{const t=document.createElement(e);return t.classList.add("overlay-hidden"),Object.assign(t,n),j(document).appendChild(t),t.componentOnReady()}):Promise.resolve(),h='[tabindex]:not([tabindex^="-"]), input:not([type=hidden]):not([tabindex^="-"]), textarea:not([tabindex^="-"]), button:not([tabindex^="-"]), select:not([tabindex^="-"]), .ion-focusable:not([tabindex^="-"])',g="input:not([type=hidden]), textarea, button, select",b=(e,n)=>{const t=w(n),i=e.target;if(t&&i)if(t===i)t.lastFocus=void 0;else{const e=Object(o.g)(t);if(!e.contains(i))return;const r=e.querySelector(".ion-overlay-wrapper");if(!r)return;if(r.contains(i))t.lastFocus=i;else{const e=t.lastFocus;((e,n)=>{let t=e.querySelector(h);const i=t&&t.shadowRoot;i&&(t=i.querySelector(g)||t),t?t.focus():n.focus()})(r,t),e===n.activeElement&&((e,n)=>{const t=Array.from(e.querySelectorAll(h));let i=t.length>0?t[t.length-1]:null;const o=i&&i.shadowRoot;o&&(i=o.querySelector(g)||i),i?i.focus():n.focus()})(r,t),t.lastFocus=n.activeElement}}},y=e=>{0===a&&(a=1,e.addEventListener("focus",n=>b(n,e),!0),e.addEventListener("ionBackButton",n=>{const t=w(e);t&&t.backdropDismiss&&n.detail.register(r.OVERLAY_BACK_BUTTON_PRIORITY,()=>t.dismiss(void 0,L))}),e.addEventListener("keyup",n=>{if("Escape"===n.key){const n=w(e);n&&n.backdropDismiss&&n.dismiss(void 0,L)}}))},v=(e,n,t,i,o)=>{const r=w(e,i,o);return r?r.dismiss(n,t):Promise.reject("overlay does not exist")},w=(e,n,t)=>{const i=((e,n)=>(void 0===n&&(n="ion-alert,ion-action-sheet,ion-loading,ion-modal,ion-picker,ion-popover,ion-toast"),Array.from(e.querySelectorAll(n)).filter(e=>e.overlayIndex>0)))(e,n);return void 0===t?i[i.length-1]:i.find(e=>e.id===t)},x=async(e,n,t,o,r)=>{if(e.presented)return;e.presented=!0,e.willPresent.emit();const a=Object(i.b)(e),s=e.enterAnimation?e.enterAnimation:i.c.get(n,"ios"===a?t:o);await O(e,s,e.el,r)&&e.didPresent.emit(),"ION-TOAST"!==e.el.tagName&&E(e.el),e.keyboardClose&&e.el.focus()},E=async e=>{let n=document.activeElement;if(!n)return;const t=n&&n.shadowRoot;t&&(n=t.querySelector(g)||n),await e.onDidDismiss(),n.focus()},k=async(e,n,t,o,r,a,c)=>{if(!e.presented)return!1;e.presented=!1;try{e.el.style.setProperty("pointer-events","none"),e.willDismiss.emit({data:n,role:t});const d=Object(i.b)(e),l=e.leaveAnimation?e.leaveAnimation:i.c.get(o,"ios"===d?r:a);"gesture"!==t&&await O(e,l,e.el,c),e.didDismiss.emit({data:n,role:t}),s.delete(e)}catch(e){console.error(e)}return e.el.remove(),!0},j=e=>e.querySelector("ion-app")||e.body,O=async(e,n,t,o)=>{t.classList.remove("overlay-hidden");const r=n(t.shadowRoot||e.el,o);e.animated&&i.c.getBoolean("animated",!0)||r.duration(0),e.keyboardClose&&r.beforeAddWrite(()=>{const e=t.ownerDocument.activeElement;e&&e.matches("input, ion-input, ion-textarea")&&e.blur()});const a=s.get(e)||[];return s.set(e,[...a,r]),await r.play(),!0},A=(e,n)=>{let t;const i=new Promise(e=>t=e);return T(e,n,e=>{t(e.detail)}),i},T=(e,n,t)=>{const i=r=>{Object(o.b)(e,n,i),t(r)};Object(o.a)(e,n,i)},S=e=>"cancel"===e||e===L,C=e=>e(),D=(e,n)=>{if("function"==typeof e){return i.c.get("_zoneGate",C)(()=>{try{return e(n)}catch(e){console.error(e)}})}},L="backdrop"},85:function(e,n,t){"use strict";t.d(n,"a",(function(){return i}));const i=e=>{try{if(e instanceof class{constructor(e){this.value=e}})return e.value;if(!a()||"string"!=typeof e||""===e)return e;const n=document.createDocumentFragment(),t=document.createElement("div");n.appendChild(t),t.innerHTML=e,c.forEach(e=>{const t=n.querySelectorAll(e);for(let e=t.length-1;e>=0;e--){const i=t[e];i.parentNode?i.parentNode.removeChild(i):n.removeChild(i);const a=r(i);for(let e=0;e<a.length;e++)o(a[e])}});const i=r(n);for(let e=0;e<i.length;e++)o(i[e]);const s=document.createElement("div");s.appendChild(n);const d=s.querySelector("div");return null!==d?d.innerHTML:s.innerHTML}catch(e){return console.error(e),""}},o=e=>{if(e.nodeType&&1!==e.nodeType)return;for(let n=e.attributes.length-1;n>=0;n--){const t=e.attributes.item(n),i=t.name;if(!s.includes(i.toLowerCase())){e.removeAttribute(i);continue}const o=t.value;null!=o&&o.toLowerCase().includes("javascript:")&&e.removeAttribute(i)}const n=r(e);for(let e=0;e<n.length;e++)o(n[e])},r=e=>null!=e.children?e.children:e.childNodes,a=()=>{const e=window,n=e&&e.Ionic&&e.Ionic.config;return!n||(n.get?n.get("sanitizerEnabled",!0):!0===n.sanitizerEnabled||void 0===n.sanitizerEnabled)},s=["class","id","href","src","name","slot"],c=["script","style","iframe","meta","link","object","embed"]}}]);