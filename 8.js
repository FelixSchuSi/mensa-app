(window.webpackJsonp=window.webpackJsonp||[]).push([[8,46],{54:function(e,t,o){"use strict";o.r(t),o.d(t,"ion_popover",(function(){return h}));var n=o(1),i=o(3),r=(o(77),o(81)),a=o(86),s=(o(80),o(83)),c=o(78),l=o(88);const d=(e,t)=>{let o="top",n="left";const i=e.querySelector(".popover-content"),a=i.getBoundingClientRect(),s=a.width,c=a.height,l=e.ownerDocument.defaultView.innerWidth,d=e.ownerDocument.defaultView.innerHeight,u=t&&t.target&&t.target.getBoundingClientRect(),f=null!=u&&"top"in u?u.top:d/2-c/2,m=null!=u&&"left"in u?u.left:l/2,h=u&&u.width||0,v=u&&u.height||0,b=e.querySelector(".popover-arrow"),g=b.getBoundingClientRect(),y=g.width,w=g.height;null==u&&(b.style.display="none");const E={top:f+v,left:m+h/2-y/2},x={top:f+v+(w-1),left:m+h/2-s/2};let k=!1,O=!1;x.left<p+25?(k=!0,x.left=p):s+p+x.left+25>l&&(O=!0,x.left=l-s-p,n="right"),f+v+c>d&&f-c>0?(E.top=f-(w+1),x.top=f-c-(w-1),e.className=e.className+" popover-bottom",o="bottom"):f+v+c>d&&(i.style.bottom=p+"%"),b.style.top=E.top+"px",b.style.left=E.left+"px",i.style.top=x.top+"px",i.style.left=x.left+"px",k&&(i.style.left=`calc(${x.left}px + var(--ion-safe-area-left, 0px))`),O&&(i.style.left=`calc(${x.left}px - var(--ion-safe-area-right, 0px))`),i.style.transformOrigin=o+" "+n;const j=Object(r.a)(),D=Object(r.a)(),A=Object(r.a)();return D.addElement(e.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),A.addElement(e.querySelector(".popover-wrapper")).fromTo("opacity",.01,1),j.addElement(e).easing("ease").duration(100).addAnimation([D,A])},p=5,u=e=>{const t=Object(r.a)(),o=Object(r.a)(),n=Object(r.a)();return o.addElement(e.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),n.addElement(e.querySelector(".popover-wrapper")).fromTo("opacity",.99,0),t.addElement(e).easing("ease").duration(500).addAnimation([o,n])},f=(e,t)=>{const o=e.ownerDocument,n="rtl"===o.dir;let i="top",a=n?"right":"left";const s=e.querySelector(".popover-content"),c=s.getBoundingClientRect(),l=c.width,d=c.height,p=o.defaultView.innerWidth,u=o.defaultView.innerHeight,f=t&&t.target&&t.target.getBoundingClientRect(),m=null!=f&&"bottom"in f?f.bottom:u/2-d/2,h=null!=f&&"left"in f?n?f.left-l+f.width:f.left:p/2-l/2,v=f&&f.height||0,b={top:m,left:h};b.left<12?(b.left=12,a="left"):l+12+b.left>p&&(b.left=p-l-12,a="right"),m+v+d>u&&m-d>0?(b.top=m-d-v,e.className=e.className+" popover-bottom",i="bottom"):m+v+d>u&&(s.style.bottom="12px");const g=Object(r.a)(),y=Object(r.a)(),w=Object(r.a)(),E=Object(r.a)(),x=Object(r.a)();return y.addElement(e.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),w.addElement(e.querySelector(".popover-wrapper")).fromTo("opacity",.01,1),E.addElement(s).beforeStyles({top:b.top+"px",left:b.left+"px","transform-origin":`${i} ${a}`}).fromTo("transform","scale(0.001)","scale(1)"),x.addElement(e.querySelector(".popover-viewport")).fromTo("opacity",.01,1),g.addElement(e).easing("cubic-bezier(0.36,0.66,0.04,1)").duration(300).addAnimation([y,w,E,x])},m=e=>{const t=Object(r.a)(),o=Object(r.a)(),n=Object(r.a)();return o.addElement(e.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),n.addElement(e.querySelector(".popover-wrapper")).fromTo("opacity",.99,0),t.addElement(e).easing("ease").duration(500).addAnimation([o,n])},h=class{constructor(e){Object(n.o)(this,e),this.didPresent=Object(n.g)(this,"ionPopoverDidPresent",7),this.willPresent=Object(n.g)(this,"ionPopoverWillPresent",7),this.willDismiss=Object(n.g)(this,"ionPopoverWillDismiss",7),this.didDismiss=Object(n.g)(this,"ionPopoverDidDismiss",7),this.presented=!1,this.keyboardClose=!0,this.backdropDismiss=!0,this.showBackdrop=!0,this.translucent=!1,this.animated=!0,this.onDismiss=e=>{e.stopPropagation(),e.preventDefault(),this.dismiss()},this.onBackdropTap=()=>{this.dismiss(void 0,s.a)},this.onLifecycle=e=>{const t=this.usersElement,o=v[e.type];if(t&&o){const n=new CustomEvent(o,{bubbles:!1,cancelable:!1,detail:e.detail});t.dispatchEvent(n)}}}connectedCallback(){Object(s.f)(this.el)}async present(){if(this.presented)return;const e=this.el.querySelector(".popover-content");if(!e)throw new Error("container is undefined");const t=Object.assign(Object.assign({},this.componentProps),{popover:this.el});return this.usersElement=await Object(l.a)(this.delegate,e,this.component,["popover-viewport",this.el["s-sc"]],t),await Object(a.d)(this.usersElement),Object(s.e)(this,"popoverEnter",d,f,this.event)}async dismiss(e,t){const o=await Object(s.g)(this,e,t,"popoverLeave",u,m,this.event);return o&&await Object(l.b)(this.delegate,this.usersElement),o}onDidDismiss(){return Object(s.h)(this.el,"ionPopoverDidDismiss")}onWillDismiss(){return Object(s.h)(this.el,"ionPopoverWillDismiss")}render(){const e=Object(i.b)(this),{onLifecycle:t}=this;return Object(n.j)(n.c,{"aria-modal":"true","no-router":!0,tabindex:"-1",style:{zIndex:""+(2e4+this.overlayIndex)},class:Object.assign(Object.assign({},Object(c.b)(this.cssClass)),{[e]:!0,"popover-translucent":this.translucent}),onIonPopoverDidPresent:t,onIonPopoverWillPresent:t,onIonPopoverWillDismiss:t,onIonPopoverDidDismiss:t,onIonDismiss:this.onDismiss,onIonBackdropTap:this.onBackdropTap},Object(n.j)("ion-backdrop",{tappable:this.backdropDismiss,visible:this.showBackdrop}),Object(n.j)("div",{tabindex:"0"}),Object(n.j)("div",{class:"popover-wrapper ion-overlay-wrapper"},Object(n.j)("div",{class:"popover-arrow"}),Object(n.j)("div",{class:"popover-content"})),Object(n.j)("div",{tabindex:"0"}))}get el(){return Object(n.k)(this)}},v={ionPopoverDidPresent:"ionViewDidEnter",ionPopoverWillPresent:"ionViewWillEnter",ionPopoverWillDismiss:"ionViewWillLeave",ionPopoverDidDismiss:"ionViewDidLeave"};h.style={ios:'.sc-ion-popover-ios-h{--background:var(--ion-background-color, #fff);--min-width:0;--min-height:0;--max-width:auto;--height:auto;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;color:var(--ion-text-color, #000);z-index:1001}.overlay-hidden.sc-ion-popover-ios-h{display:none}.popover-wrapper.sc-ion-popover-ios{opacity:0;z-index:10}.popover-content.sc-ion-popover-ios{display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:auto;z-index:10}.popover-viewport.sc-ion-popover-ios{--ion-safe-area-top:0px;--ion-safe-area-right:0px;--ion-safe-area-bottom:0px;--ion-safe-area-left:0px}.sc-ion-popover-ios-h{--width:200px;--max-height:90%;--box-shadow:none;--backdrop-opacity:var(--ion-backdrop-opacity, 0.08)}.popover-content.sc-ion-popover-ios{border-radius:10px}.popover-arrow.sc-ion-popover-ios{display:block;position:absolute;width:20px;height:10px;overflow:hidden}.popover-arrow.sc-ion-popover-ios::after{left:3px;top:3px;border-radius:3px;position:absolute;width:14px;height:14px;-webkit-transform:rotate(45deg);transform:rotate(45deg);background:var(--background);content:"";z-index:10}[dir=rtl].sc-ion-popover-ios .popover-arrow.sc-ion-popover-ios::after,[dir=rtl].sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios::after,[dir=rtl] .sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios::after{left:unset;right:unset;right:3px}.popover-bottom.sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios{top:auto;bottom:-10px}.popover-bottom.sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios::after{top:-6px}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){.popover-translucent.sc-ion-popover-ios-h .popover-content.sc-ion-popover-ios,.popover-translucent.sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios::after{background:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}}',md:".sc-ion-popover-md-h{--background:var(--ion-background-color, #fff);--min-width:0;--min-height:0;--max-width:auto;--height:auto;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;color:var(--ion-text-color, #000);z-index:1001}.overlay-hidden.sc-ion-popover-md-h{display:none}.popover-wrapper.sc-ion-popover-md{opacity:0;z-index:10}.popover-content.sc-ion-popover-md{display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:auto;z-index:10}.popover-viewport.sc-ion-popover-md{--ion-safe-area-top:0px;--ion-safe-area-right:0px;--ion-safe-area-bottom:0px;--ion-safe-area-left:0px}.sc-ion-popover-md-h{--width:250px;--max-height:90%;--box-shadow:0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);--backdrop-opacity:var(--ion-backdrop-opacity, 0.32)}.popover-content.sc-ion-popover-md{border-radius:4px;-webkit-transform-origin:left top;transform-origin:left top}[dir=rtl].sc-ion-popover-md .popover-content.sc-ion-popover-md,[dir=rtl].sc-ion-popover-md-h .popover-content.sc-ion-popover-md,[dir=rtl] .sc-ion-popover-md-h .popover-content.sc-ion-popover-md{-webkit-transform-origin:right top;transform-origin:right top}.popover-viewport.sc-ion-popover-md{-webkit-transition-delay:100ms;transition-delay:100ms}"}},77:function(e,t,o){"use strict";o.d(t,"a",(function(){return n})),o.d(t,"b",(function(){return i})),o.d(t,"c",(function(){return l})),o.d(t,"d",(function(){return h})),o.d(t,"e",(function(){return d})),o.d(t,"f",(function(){return c})),o.d(t,"g",(function(){return r})),o.d(t,"h",(function(){return s})),o.d(t,"i",(function(){return p})),o.d(t,"j",(function(){return m})),o.d(t,"k",(function(){return v})),o.d(t,"l",(function(){return u})),o.d(t,"m",(function(){return f})),o.d(t,"n",(function(){return a}));const n=(e,t,o,n)=>{if("undefined"!=typeof window){const i=window,r=i&&i.Ionic&&i.Ionic.config;if(r){const i=r.get("_ael");if(i)return i(e,t,o,n);if(r._ael)return r._ael(e,t,o,n)}}return e.addEventListener(t,o,n)},i=(e,t,o,n)=>{if("undefined"!=typeof window){const i=window,r=i&&i.Ionic&&i.Ionic.config;if(r){const i=r.get("_rel");if(i)return i(e,t,o,n);if(r._rel)return r._rel(e,t,o,n)}}return e.removeEventListener(t,o,n)},r=(e,t=e)=>e.shadowRoot||t,a=e=>"function"==typeof __zone_symbol__requestAnimationFrame?__zone_symbol__requestAnimationFrame(e):"function"==typeof requestAnimationFrame?requestAnimationFrame(e):setTimeout(e),s=e=>!!e.shadowRoot&&!!e.attachShadow,c=e=>{const t=e.closest("ion-item");return t?t.querySelector("ion-label"):null},l=(e,t,o,n,i)=>{if(e||s(t)){let e=t.querySelector("input.aux-input");e||(e=t.ownerDocument.createElement("input"),e.type="hidden",e.classList.add("aux-input"),t.appendChild(e)),e.disabled=i,e.name=o,e.value=n||""}},d=(e,t,o)=>Math.max(e,Math.min(t,o)),p=(e,t)=>{if(!e){const e="ASSERT: "+t;throw console.error(e),new Error(e)}},u=e=>e.timeStamp||Date.now(),f=e=>{if(e){const t=e.changedTouches;if(t&&t.length>0){const e=t[0];return{x:e.clientX,y:e.clientY}}if(void 0!==e.pageX)return{x:e.pageX,y:e.pageY}}return{x:0,y:0}},m=e=>{const t="rtl"===document.dir;switch(e){case"start":return t;case"end":return!t;default:throw new Error(`"${e}" is not a valid value for [side]. Use "start" or "end" instead.`)}},h=(e,t)=>{const o=e._original||e;return{_original:e,emit:v(o.emit.bind(o),t)}},v=(e,t=0)=>{let o;return(...n)=>{clearTimeout(o),o=setTimeout(e,t,...n)}}},78:function(e,t,o){"use strict";o.d(t,"a",(function(){return i})),o.d(t,"b",(function(){return r})),o.d(t,"c",(function(){return n})),o.d(t,"d",(function(){return s}));const n=(e,t)=>null!==t.closest(e),i=(e,t)=>"string"==typeof e&&e.length>0?Object.assign({"ion-color":!0,["ion-color-"+e]:!0},t):t,r=e=>{const t={};return(e=>{if(void 0!==e){return(Array.isArray(e)?e:e.split(" ")).filter(e=>null!=e).map(e=>e.trim()).filter(e=>""!==e)}return[]})(e).forEach(e=>t[e]=!0),t},a=/^[a-z][a-z0-9+\-.]*:/,s=async(e,t,o,n)=>{if(null!=e&&"#"!==e[0]&&!a.test(e)){const i=document.querySelector("ion-router");if(i)return null!=t&&t.preventDefault(),i.push(e,o,n)}return!1}},80:function(e,t,o){"use strict";o.r(t),o.d(t,"MENU_BACK_BUTTON_PRIORITY",(function(){return r})),o.d(t,"OVERLAY_BACK_BUTTON_PRIORITY",(function(){return i})),o.d(t,"startHardwareBackButton",(function(){return n}));const n=()=>{const e=document;let t=!1;e.addEventListener("backbutton",()=>{if(t)return;let o=0,n=[];const i=new CustomEvent("ionBackButton",{bubbles:!1,detail:{register(e,t){n.push({priority:e,handler:t,id:o++})}}});e.dispatchEvent(i);const r=()=>{if(n.length>0){let e={priority:Number.MIN_SAFE_INTEGER,handler:()=>{},id:-1};n.forEach(t=>{t.priority>=e.priority&&(e=t)}),t=!0,n=n.filter(t=>t.id!==e.id),(async e=>{try{if(e&&e.handler){const t=e.handler(r);null!=t&&await t}}catch(e){console.error(e)}})(e).then(()=>t=!1)}};r()})},i=100,r=99},81:function(e,t,o){"use strict";o.d(t,"a",(function(){return p}));var n=o(77);let i;const r=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),a=e=>{if(void 0===i){const t=void 0!==e.style.animationName,o=void 0!==e.style.webkitAnimationName;i=!t&&o?"-webkit-":""}return i},s=(e,t,o)=>{const n=t.startsWith("animation")?a(e):"";e.style.setProperty(n+t,o)},c=(e,t)=>{const o=t.startsWith("animation")?a(e):"";e.style.removeProperty(o+t)},l=[],d=(e=[],t)=>{if(void 0!==t){const o=Array.isArray(t)?t:[t];return[...e,...o]}return e},p=e=>{let t,o,i,p,u,f,m,h,v,b,g,y,w,E=[],x=[],k=[],O=!1,j={},D=[],A=[],S={},P=0,T=!1,C=!1,L=!0,R=!1,_=!0;const q=e,I=[],B=[],W=[],$=[],N=[],z=[],F=[],V=[],M=[],Y=[],U="function"==typeof AnimationEffect||"function"==typeof window.AnimationEffect,H="function"==typeof Element&&"function"==typeof Element.prototype.animate&&U,K=e=>{J(),e&&Z()},G=(e,t)=>((t&&t.oneTimeCallback?B:I).push({c:e,o:t}),w),X=()=>(I.length=0,B.length=0,w),J=()=>{if(H)Y.forEach(e=>{e.cancel()}),Y.length=0;else{const e=W.slice();Object(n.n)(()=>{e.forEach(e=>{c(e,"animation-name"),c(e,"animation-duration"),c(e,"animation-timing-function"),c(e,"animation-iteration-count"),c(e,"animation-delay"),c(e,"animation-play-state"),c(e,"animation-fill-mode"),c(e,"animation-direction")})})}},Z=()=>{N.forEach(e=>{e&&e.parentNode&&e.parentNode.removeChild(e)}),N.length=0},Q=()=>void 0!==u?u:m?m.getFill():"both",ee=()=>void 0!==v?v:void 0!==f?f:m?m.getDirection():"normal",te=()=>T?"linear":void 0!==i?i:m?m.getEasing():"linear",oe=()=>C?0:void 0!==b?b:void 0!==o?o:m?m.getDuration():0,ne=()=>void 0!==p?p:m?m.getIterations():1,ie=()=>void 0!==g?g:void 0!==t?t:m?m.getDelay():0,re=()=>{0!==P&&(P--,0===P&&((()=>{me(),V.forEach(e=>e()),M.forEach(e=>e());const e=L?1:0,t=D,o=A,n=S;W.forEach(e=>{const i=e.classList;t.forEach(e=>i.add(e)),o.forEach(e=>i.remove(e));for(const t in n)n.hasOwnProperty(t)&&s(e,t,n[t])}),I.forEach(t=>t.c(e,w)),B.forEach(t=>t.c(e,w)),B.length=0,_=!0,L&&(R=!0),L=!0})(),m&&m.animationFinish()))},ae=(t=!0)=>{Z();const o=(e=>(e.forEach(e=>{for(const t in e)if(e.hasOwnProperty(t)){const o=e[t];if("easing"===t){e["animation-timing-function"]=o,delete e[t]}else{const n=r(t);n!==t&&(e[n]=o,delete e[t])}}}),e))(E);W.forEach(i=>{if(o.length>0){const r=((e=[])=>e.map(e=>{const t=e.offset,o=[];for(const t in e)e.hasOwnProperty(t)&&"offset"!==t&&o.push(`${t}: ${e[t]};`);return`${100*t}% { ${o.join(" ")} }`}).join(" "))(o);y=void 0!==e?e:(e=>{let t=l.indexOf(e);return t<0&&(t=l.push(e)-1),"ion-animation-"+t})(r);const c=((e,t,o)=>{const n=(e=>{const t=e.getRootNode();return t.head||t})(o),i=a(o),r=n.querySelector("#"+e);if(r)return r;const s=(o.ownerDocument||document).createElement("style");return s.id=e,s.textContent=`@${i}keyframes ${e} { ${t} } @${i}keyframes ${e}-alt { ${t} }`,n.appendChild(s),s})(y,r,i);N.push(c),s(i,"animation-duration",oe()+"ms"),s(i,"animation-timing-function",te()),s(i,"animation-delay",ie()+"ms"),s(i,"animation-fill-mode",Q()),s(i,"animation-direction",ee());const d=ne()===1/0?"infinite":ne().toString();s(i,"animation-iteration-count",d),s(i,"animation-play-state","paused"),t&&s(i,"animation-name",c.id+"-alt"),Object(n.n)(()=>{s(i,"animation-name",c.id||null)})}})},se=(e=!0)=>{(()=>{z.forEach(e=>e()),F.forEach(e=>e());const e=x,t=k,o=j;W.forEach(n=>{const i=n.classList;e.forEach(e=>i.add(e)),t.forEach(e=>i.remove(e));for(const e in o)o.hasOwnProperty(e)&&s(n,e,o[e])})})(),E.length>0&&(H?(W.forEach(e=>{const t=e.animate(E,{id:q,delay:ie(),duration:oe(),easing:te(),iterations:ne(),fill:Q(),direction:ee()});t.pause(),Y.push(t)}),Y.length>0&&(Y[0].onfinish=()=>{re()})):ae(e)),O=!0},ce=e=>{if(e=Math.min(Math.max(e,0),.9999),H)Y.forEach(t=>{t.currentTime=t.effect.getComputedTiming().delay+oe()*e,t.pause()});else{const t=`-${oe()*e}ms`;W.forEach(e=>{E.length>0&&(s(e,"animation-delay",t),s(e,"animation-play-state","paused"))})}},le=e=>{Y.forEach(e=>{e.effect.updateTiming({delay:ie(),duration:oe(),easing:te(),iterations:ne(),fill:Q(),direction:ee()})}),void 0!==e&&ce(e)},de=(e=!0,t)=>{Object(n.n)(()=>{W.forEach(o=>{s(o,"animation-name",y||null),s(o,"animation-duration",oe()+"ms"),s(o,"animation-timing-function",te()),s(o,"animation-delay",void 0!==t?`-${t*oe()}ms`:ie()+"ms"),s(o,"animation-fill-mode",Q()||null),s(o,"animation-direction",ee()||null);const i=ne()===1/0?"infinite":ne().toString();s(o,"animation-iteration-count",i),e&&s(o,"animation-name",y+"-alt"),Object(n.n)(()=>{s(o,"animation-name",y||null)})})})},pe=(e=!1,t=!0,o)=>(e&&$.forEach(n=>{n.update(e,t,o)}),H?le(o):de(t,o),w),ue=()=>{O&&(H?Y.forEach(e=>{e.pause()}):W.forEach(e=>{s(e,"animation-play-state","paused")}))},fe=()=>{h=void 0,re()},me=()=>{h&&clearTimeout(h)},he=()=>{W.forEach(e=>{c(e,"animation-duration"),c(e,"animation-delay"),c(e,"animation-play-state")})},ve=e=>new Promise(t=>{e&&e.sync&&(C=!0,G(()=>C=!1,{oneTimeCallback:!0})),O||se(),R&&(H?(ce(0),le()):de(),R=!1),_&&(P=$.length+1,_=!1),G(()=>t(),{oneTimeCallback:!0}),$.forEach(e=>{e.play()}),H?(Y.forEach(e=>{e.play()}),0!==E.length&&0!==W.length||re()):(()=>{if(me(),Object(n.n)(()=>{W.forEach(e=>{E.length>0&&s(e,"animation-play-state","running")})}),0===E.length||0===W.length)re();else{const e=ie()||0,t=oe()||0,o=ne()||1;isFinite(o)&&(h=setTimeout(fe,e+t*o+100)),((e,t)=>{let o;const n={passive:!0},i=()=>{o&&o()},r=o=>{e===o.target&&(i(),t(o))};e&&(e.addEventListener("webkitAnimationEnd",r,n),e.addEventListener("animationend",r,n),o=()=>{e.removeEventListener("webkitAnimationEnd",r,n),e.removeEventListener("animationend",r,n)})})(W[0],()=>{me(),Object(n.n)(()=>{he(),Object(n.n)(re)})})}})()}),be=(e,t)=>{const o=E[0];return void 0===o||void 0!==o.offset&&0!==o.offset?E=[{offset:0,[e]:t},...E]:o[e]=t,w};return w={parentAnimation:m,elements:W,childAnimations:$,id:q,animationFinish:re,from:be,to:(e,t)=>{const o=E[E.length-1];return void 0===o||void 0!==o.offset&&1!==o.offset?E=[...E,{offset:1,[e]:t}]:o[e]=t,w},fromTo:(e,t,o)=>be(e,t).to(e,o),parent:e=>(m=e,w),play:ve,pause:()=>($.forEach(e=>{e.pause()}),ue(),w),stop:()=>{$.forEach(e=>{e.stop()}),O&&(J(),O=!1),T=!1,C=!1,_=!0,v=void 0,b=void 0,g=void 0,P=0,R=!1,L=!0},destroy:e=>($.forEach(t=>{t.destroy(e)}),K(e),W.length=0,$.length=0,E.length=0,X(),O=!1,_=!0,w),keyframes:e=>(E=e,w),addAnimation:e=>{if(null!=e)if(Array.isArray(e))for(const t of e)t.parent(w),$.push(t);else e.parent(w),$.push(e);return w},addElement:e=>{if(null!=e)if(1===e.nodeType)W.push(e);else if(e.length>=0)for(let t=0;t<e.length;t++)W.push(e[t]);else console.error("Invalid addElement value");return w},update:pe,fill:e=>(u=e,pe(!0),w),direction:e=>(f=e,pe(!0),w),iterations:e=>(p=e,pe(!0),w),duration:e=>(H||0!==e||(e=1),o=e,pe(!0),w),easing:e=>(i=e,pe(!0),w),delay:e=>(t=e,pe(!0),w),getWebAnimations:()=>Y,getKeyframes:()=>E,getFill:Q,getDirection:ee,getDelay:ie,getIterations:ne,getEasing:te,getDuration:oe,afterAddRead:e=>(V.push(e),w),afterAddWrite:e=>(M.push(e),w),afterClearStyles:(e=[])=>{for(const t of e)S[t]="";return w},afterStyles:(e={})=>(S=e,w),afterRemoveClass:e=>(A=d(A,e),w),afterAddClass:e=>(D=d(D,e),w),beforeAddRead:e=>(z.push(e),w),beforeAddWrite:e=>(F.push(e),w),beforeClearStyles:(e=[])=>{for(const t of e)j[t]="";return w},beforeStyles:(e={})=>(j=e,w),beforeRemoveClass:e=>(k=d(k,e),w),beforeAddClass:e=>(x=d(x,e),w),onFinish:G,progressStart:(e=!1,t)=>($.forEach(o=>{o.progressStart(e,t)}),ue(),T=e,O?pe(!1,!0,t):se(),w),progressStep:e=>($.forEach(t=>{t.progressStep(e)}),ce(e),w),progressEnd:(e,t,o)=>(T=!1,$.forEach(n=>{n.progressEnd(e,t,o)}),void 0!==o&&(b=o),R=!1,L=!0,0===e?(v="reverse"===ee()?"normal":"reverse","reverse"===v&&(L=!1),H?(pe(),ce(1-t)):(g=(1-t)*oe()*-1,pe(!1,!1))):1===e&&(H?(pe(),ce(t)):(g=t*oe()*-1,pe(!1,!1))),void 0!==e&&(G(()=>{b=void 0,v=void 0,g=void 0},{oneTimeCallback:!0}),m||ve()),w)}}},83:function(e,t,o){"use strict";o.d(t,"a",(function(){return C})),o.d(t,"b",(function(){return l})),o.d(t,"c",(function(){return d})),o.d(t,"d",(function(){return u})),o.d(t,"e",(function(){return E})),o.d(t,"f",(function(){return f})),o.d(t,"g",(function(){return k})),o.d(t,"h",(function(){return D})),o.d(t,"i",(function(){return s})),o.d(t,"j",(function(){return S})),o.d(t,"k",(function(){return p})),o.d(t,"l",(function(){return T}));var n=o(3),i=o(77),r=o(80);let a=0;const s=new WeakMap,c=e=>({create:t=>m(e,t),dismiss:(t,o,n)=>y(document,t,o,e,n),getTop:async()=>w(document,e)}),l=c("ion-alert"),d=c("ion-action-sheet"),p=c("ion-picker"),u=c("ion-popover"),f=e=>{"undefined"!=typeof document&&g(document);const t=a++;e.overlayIndex=t,e.hasAttribute("id")||(e.id="ion-overlay-"+t)},m=(e,t)=>"undefined"!=typeof customElements?customElements.whenDefined(e).then(()=>{const o=document.createElement(e);return o.classList.add("overlay-hidden"),Object.assign(o,t),O(document).appendChild(o),o.componentOnReady()}):Promise.resolve(),h='[tabindex]:not([tabindex^="-"]), input:not([type=hidden]):not([tabindex^="-"]), textarea:not([tabindex^="-"]), button:not([tabindex^="-"]), select:not([tabindex^="-"]), .ion-focusable:not([tabindex^="-"])',v="input:not([type=hidden]), textarea, button, select",b=(e,t)=>{const o=w(t),n=e.target;if(o&&n)if(o===n)o.lastFocus=void 0;else{const e=Object(i.g)(o);if(!e.contains(n))return;const r=e.querySelector(".ion-overlay-wrapper");if(!r)return;if(r.contains(n))o.lastFocus=n;else{const e=o.lastFocus;((e,t)=>{let o=e.querySelector(h);const n=o&&o.shadowRoot;n&&(o=n.querySelector(v)||o),o?o.focus():t.focus()})(r,o),e===t.activeElement&&((e,t)=>{const o=Array.from(e.querySelectorAll(h));let n=o.length>0?o[o.length-1]:null;const i=n&&n.shadowRoot;i&&(n=i.querySelector(v)||n),n?n.focus():t.focus()})(r,o),o.lastFocus=t.activeElement}}},g=e=>{0===a&&(a=1,e.addEventListener("focus",t=>b(t,e),!0),e.addEventListener("ionBackButton",t=>{const o=w(e);o&&o.backdropDismiss&&t.detail.register(r.OVERLAY_BACK_BUTTON_PRIORITY,()=>o.dismiss(void 0,C))}),e.addEventListener("keyup",t=>{if("Escape"===t.key){const t=w(e);t&&t.backdropDismiss&&t.dismiss(void 0,C)}}))},y=(e,t,o,n,i)=>{const r=w(e,n,i);return r?r.dismiss(t,o):Promise.reject("overlay does not exist")},w=(e,t,o)=>{const n=((e,t)=>(void 0===t&&(t="ion-alert,ion-action-sheet,ion-loading,ion-modal,ion-picker,ion-popover,ion-toast"),Array.from(e.querySelectorAll(t)).filter(e=>e.overlayIndex>0)))(e,t);return void 0===o?n[n.length-1]:n.find(e=>e.id===o)},E=async(e,t,o,i,r)=>{if(e.presented)return;e.presented=!0,e.willPresent.emit();const a=Object(n.b)(e),s=e.enterAnimation?e.enterAnimation:n.c.get(t,"ios"===a?o:i);await j(e,s,e.el,r)&&e.didPresent.emit(),"ION-TOAST"!==e.el.tagName&&x(e.el),e.keyboardClose&&e.el.focus()},x=async e=>{let t=document.activeElement;if(!t)return;const o=t&&t.shadowRoot;o&&(t=o.querySelector(v)||t),await e.onDidDismiss(),t.focus()},k=async(e,t,o,i,r,a,c)=>{if(!e.presented)return!1;e.presented=!1;try{e.el.style.setProperty("pointer-events","none"),e.willDismiss.emit({data:t,role:o});const l=Object(n.b)(e),d=e.leaveAnimation?e.leaveAnimation:n.c.get(i,"ios"===l?r:a);"gesture"!==o&&await j(e,d,e.el,c),e.didDismiss.emit({data:t,role:o}),s.delete(e)}catch(e){console.error(e)}return e.el.remove(),!0},O=e=>e.querySelector("ion-app")||e.body,j=async(e,t,o,i)=>{o.classList.remove("overlay-hidden");const r=t(o.shadowRoot||e.el,i);e.animated&&n.c.getBoolean("animated",!0)||r.duration(0),e.keyboardClose&&r.beforeAddWrite(()=>{const e=o.ownerDocument.activeElement;e&&e.matches("input, ion-input, ion-textarea")&&e.blur()});const a=s.get(e)||[];return s.set(e,[...a,r]),await r.play(),!0},D=(e,t)=>{let o;const n=new Promise(e=>o=e);return A(e,t,e=>{o(e.detail)}),n},A=(e,t,o)=>{const n=r=>{Object(i.b)(e,t,n),o(r)};Object(i.a)(e,t,n)},S=e=>"cancel"===e||e===C,P=e=>e(),T=(e,t)=>{if("function"==typeof e){return n.c.get("_zoneGate",P)(()=>{try{return e(t)}catch(e){console.error(e)}})}},C="backdrop"},86:function(e,t,o){"use strict";o.d(t,"a",(function(){return i})),o.d(t,"b",(function(){return r})),o.d(t,"c",(function(){return a})),o.d(t,"d",(function(){return E})),o.d(t,"e",(function(){return O})),o.d(t,"f",(function(){return y})),o.d(t,"g",(function(){return x})),o.d(t,"h",(function(){return s}));var n=o(1);const i="ionViewWillLeave",r="ionViewDidLeave",a="ionViewWillUnload",s=e=>new Promise((t,o)=>{Object(n.f)(()=>{c(e),l(e).then(o=>{o.animation&&o.animation.destroy(),d(e),t(o)},t=>{d(e),o(t)})})}),c=e=>{const t=e.enteringEl,o=e.leavingEl;k(t,o,e.direction),e.showGoBack?t.classList.add("can-go-back"):t.classList.remove("can-go-back"),x(t,!1),o&&x(o,!1)},l=async e=>{const t=await p(e);return t&&n.a.isBrowser?u(t,e):f(e)},d=e=>{const t=e.enteringEl,o=e.leavingEl;t.classList.remove("ion-page-invisible"),void 0!==o&&o.classList.remove("ion-page-invisible")},p=async e=>{if(!e.leavingEl||!e.animated||0===e.duration)return;if(e.animationBuilder)return e.animationBuilder;return"ios"===e.mode?(await o.e(31).then(o.bind(null,89))).iosTransitionAnimation:(await o.e(32).then(o.bind(null,90))).mdTransitionAnimation},u=async(e,t)=>{await m(t,!0);const o=e(t.baseEl,t);b(t.enteringEl,t.leavingEl);const n=await v(o,t);return t.progressCallback&&t.progressCallback(void 0),n&&g(t.enteringEl,t.leavingEl),{hasCompleted:n,animation:o}},f=async e=>{const t=e.enteringEl,o=e.leavingEl;return await m(e,!1),b(t,o),g(t,o),{hasCompleted:!0}},m=async(e,t)=>{const o=(void 0!==e.deepWait?e.deepWait:t)?[E(e.enteringEl),E(e.leavingEl)]:[w(e.enteringEl),w(e.leavingEl)];await Promise.all(o),await h(e.viewIsReady,e.enteringEl)},h=async(e,t)=>{e&&await e(t)},v=(e,t)=>{const o=t.progressCallback,n=new Promise(t=>{e.onFinish(e=>t(1===e))});return o?(e.progressStart(!0),o(e)):e.play(),n},b=(e,t)=>{y(t,i),y(e,"ionViewWillEnter")},g=(e,t)=>{y(e,"ionViewDidEnter"),y(t,r)},y=(e,t)=>{if(e){const o=new CustomEvent(t,{bubbles:!1,cancelable:!1});e.dispatchEvent(o)}},w=e=>e&&e.componentOnReady?e.componentOnReady():Promise.resolve(),E=async e=>{const t=e;if(t){if(null!=t.componentOnReady){if(null!=await t.componentOnReady())return}await Promise.all(Array.from(t.children).map(E))}},x=(e,t)=>{t?(e.setAttribute("aria-hidden","true"),e.classList.add("ion-page-hidden")):(e.hidden=!1,e.removeAttribute("aria-hidden"),e.classList.remove("ion-page-hidden"))},k=(e,t,o)=>{void 0!==e&&(e.style.zIndex="back"===o?"99":"101"),void 0!==t&&(t.style.zIndex="100")},O=e=>{if(e.classList.contains("ion-page"))return e;const t=e.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs");return t||e}},88:function(e,t,o){"use strict";o.d(t,"a",(function(){return n})),o.d(t,"b",(function(){return i}));const n=async(e,t,o,n,i)=>{if(e)return e.attachViewToDom(t,o,i,n);if("string"!=typeof o&&!(o instanceof HTMLElement))throw new Error("framework delegate is missing");const r="string"==typeof o?t.ownerDocument&&t.ownerDocument.createElement(o):o;return n&&n.forEach(e=>r.classList.add(e)),i&&Object.assign(r,i),t.appendChild(r),r.componentOnReady&&await r.componentOnReady(),r},i=(e,t)=>{if(t){if(e){const o=t.parentElement;return e.removeViewFromDom(o,t)}t.remove()}return Promise.resolve()}}}]);