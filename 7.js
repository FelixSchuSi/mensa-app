(window.webpackJsonp=window.webpackJsonp||[]).push([[7,0,46,47],{48:function(e,t,n){"use strict";n.r(t),n.d(t,"ion_modal",(function(){return v}));var o=n(0),i=n(3),r=n(73),a=n(77),s=n(82),d=n(83),l=(n(75),n(78)),c=(n(76),n(79)),m=n(74),u=n(84);const h=.93,f=(e,t)=>Object(r.e)(400,e/Math.abs(1.1*t),500),p=(e,t)=>{const n=Object(a.a)().addElement(e.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),o=Object(a.a)().addElement(e.querySelectorAll(".modal-wrapper, .modal-shadow")).beforeStyles({opacity:1}).fromTo("transform","translateY(100vh)","translateY(0vh)"),i=Object(a.a)().addElement(e).easing("cubic-bezier(0.32,0.72,0,1)").duration(500).addAnimation(o);if(t){const e=window.innerWidth<768,r="ION-MODAL"===t.tagName&&void 0!==t.presentingElement,s=Object(a.a)().beforeStyles({transform:"translateY(0)","transform-origin":"top center",overflow:"hidden"}),d=document.body;if(e){const e=CSS.supports("width","max(0px, 1px)")?"max(30px, var(--ion-safe-area-top))":"30px",n=`translateY(${r?"-10px":e}) scale(${h})`;s.afterStyles({transform:n}).beforeAddWrite(()=>d.style.setProperty("background-color","black")).addElement(t).keyframes([{offset:0,filter:"contrast(1)",transform:"translateY(0px) scale(1)",borderRadius:"0px"},{offset:1,filter:"contrast(0.85)",transform:n,borderRadius:"10px 10px 0 0"}]),i.addAnimation(s)}else if(i.addAnimation(n),r){const e=`translateY(-10px) scale(${r?h:1})`;s.afterStyles({transform:e}).addElement(t.querySelector(".modal-wrapper")).keyframes([{offset:0,filter:"contrast(1)",transform:"translateY(0) scale(1)"},{offset:1,filter:"contrast(0.85)",transform:e}]);const n=Object(a.a)().afterStyles({transform:e}).addElement(t.querySelector(".modal-shadow")).keyframes([{offset:0,opacity:"1",transform:"translateY(0) scale(1)"},{offset:1,opacity:"0",transform:e}]);i.addAnimation([s,n])}else o.fromTo("opacity","0","1")}else i.addAnimation(n);return i},b=(e,t,n=500)=>{const o=Object(a.a)().addElement(e.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),i=Object(a.a)().addElement(e.querySelectorAll(".modal-wrapper, .modal-shadow")).beforeStyles({opacity:1}).fromTo("transform","translateY(0vh)","translateY(100vh)"),r=Object(a.a)().addElement(e).easing("cubic-bezier(0.32,0.72,0,1)").duration(n).addAnimation(i);if(t){const e=window.innerWidth<768,n="ION-MODAL"===t.tagName&&void 0!==t.presentingElement,s=Object(a.a)().beforeClearStyles(["transform"]).afterClearStyles(["transform"]).onFinish(e=>{if(1!==e)return;t.style.setProperty("overflow","");Array.from(d.querySelectorAll("ion-modal")).filter(e=>void 0!==e.presentingElement).length<=1&&d.style.setProperty("background-color","")}),d=document.body;if(e){const e=CSS.supports("width","max(0px, 1px)")?"max(30px, var(--ion-safe-area-top))":"30px",o=`translateY(${n?"-10px":e}) scale(${h})`;s.addElement(t).keyframes([{offset:0,filter:"contrast(0.85)",transform:o,borderRadius:"10px 10px 0 0"},{offset:1,filter:"contrast(1)",transform:"translateY(0px) scale(1)",borderRadius:"0px"}]),r.addAnimation(s)}else if(r.addAnimation(o),n){const e=`translateY(-10px) scale(${n?h:1})`;s.addElement(t.querySelector(".modal-wrapper")).afterStyles({transform:"translate3d(0, 0, 0)"}).keyframes([{offset:0,filter:"contrast(0.85)",transform:e},{offset:1,filter:"contrast(1)",transform:"translateY(0) scale(1)"}]);const o=Object(a.a)().addElement(t.querySelector(".modal-shadow")).afterStyles({transform:"translateY(0) scale(1)"}).keyframes([{offset:0,opacity:"0",transform:e},{offset:1,opacity:"1",transform:"translateY(0) scale(1)"}]);r.addAnimation([s,o])}else i.fromTo("opacity","1","0")}else r.addAnimation(o);return r},y=e=>{const t=Object(a.a)(),n=Object(a.a)(),o=Object(a.a)();return n.addElement(e.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),o.addElement(e.querySelector(".modal-wrapper")).keyframes([{offset:0,opacity:.01,transform:"translateY(40px)"},{offset:1,opacity:1,transform:"translateY(0px)"}]),t.addElement(e).easing("cubic-bezier(0.36,0.66,0.04,1)").duration(280).addAnimation([n,o])},g=e=>{const t=Object(a.a)(),n=Object(a.a)(),o=Object(a.a)(),i=e.querySelector(".modal-wrapper");return n.addElement(e.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),o.addElement(i).keyframes([{offset:0,opacity:.99,transform:"translateY(0px)"},{offset:1,opacity:0,transform:"translateY(40px)"}]),t.addElement(e).easing("cubic-bezier(0.47,0,0.745,0.715)").duration(200).addAnimation([n,o])},v=class{constructor(e){Object(o.o)(this,e),this.didPresent=Object(o.g)(this,"ionModalDidPresent",7),this.willPresent=Object(o.g)(this,"ionModalWillPresent",7),this.willDismiss=Object(o.g)(this,"ionModalWillDismiss",7),this.didDismiss=Object(o.g)(this,"ionModalDidDismiss",7),this.gestureAnimationDismissing=!1,this.presented=!1,this.keyboardClose=!0,this.backdropDismiss=!0,this.showBackdrop=!0,this.animated=!0,this.swipeToClose=!1,this.onBackdropTap=()=>{this.dismiss(void 0,c.a)},this.onDismiss=e=>{e.stopPropagation(),e.preventDefault(),this.dismiss()},this.onLifecycle=e=>{const t=this.usersElement,n=w[e.type];if(t&&n){const o=new CustomEvent(n,{bubbles:!1,cancelable:!1,detail:e.detail});t.dispatchEvent(o)}}}swipeToCloseChanged(e){this.gesture?this.gesture.enable(e):e&&this.initSwipeToClose()}connectedCallback(){Object(c.f)(this.el)}async present(){if(this.presented)return;const e=this.el.querySelector(".modal-wrapper");if(!e)throw new Error("container is undefined");const t=Object.assign(Object.assign({},this.componentProps),{modal:this.el});this.usersElement=await Object(u.a)(this.delegate,e,this.component,["ion-page"],t),await Object(s.d)(this.usersElement),Object(o.f)(()=>this.el.classList.add("show-modal")),await Object(c.e)(this,"modalEnter",p,y,this.presentingElement),this.swipeToClose&&this.initSwipeToClose()}initSwipeToClose(){if("ios"!==Object(i.b)(this))return;const e=this.leaveAnimation||i.c.get("modalLeave",b),t=this.animation=e(this.el,this.presentingElement);this.gesture=((e,t,n)=>{const o=e.offsetHeight;let i=!1;const a=Object(l.createGesture)({el:e,gestureName:"modalSwipeToClose",gesturePriority:40,direction:"y",threshold:10,canStart:e=>{const t=e.event.target;if(null===t||!t.closest)return!0;return null===t.closest("ion-content")},onStart:()=>{t.progressStart(!0,i?1:0)},onMove:e=>{const n=Object(r.e)(1e-4,e.deltaY/o,.9999);t.progressStep(n)},onEnd:e=>{const s=e.velocityY,l=Object(r.e)(1e-4,e.deltaY/o,.9999),c=(e.deltaY+1e3*s)/o>=.5;let m=c?-.001:.001;c?(t.easing("cubic-bezier(0.32, 0.72, 0, 1)"),m+=Object(d.a)([0,0],[.32,.72],[0,1],[1,1],l)[0]):(t.easing("cubic-bezier(1, 0, 0.68, 0.28)"),m+=Object(d.a)([0,0],[1,0],[.68,.28],[1,1],l)[0]);const u=f(c?l*o:(1-l)*o,s);i=c,a.enable(!1),t.onFinish(()=>{c||a.enable(!0)}).progressEnd(c?1:0,m,u),c&&n()}});return a})(this.el,t,()=>{this.gestureAnimationDismissing=!0,this.animation.onFinish(async()=>{await this.dismiss(void 0,"gesture"),this.gestureAnimationDismissing=!1})}),this.gesture.enable(!0)}async dismiss(e,t){if(this.gestureAnimationDismissing&&"gesture"!==t)return!1;const n=c.i.get(this)||[],o=await Object(c.g)(this,e,t,"modalLeave",b,g,this.presentingElement);return o&&(await Object(u.b)(this.delegate,this.usersElement),this.animation&&this.animation.destroy(),n.forEach(e=>e.destroy())),this.animation=void 0,o}onDidDismiss(){return Object(c.h)(this.el,"ionModalDidDismiss")}onWillDismiss(){return Object(c.h)(this.el,"ionModalWillDismiss")}render(){const e=Object(i.b)(this);return Object(o.j)(o.c,{"no-router":!0,"aria-modal":"true",tabindex:"-1",class:Object.assign({[e]:!0,"modal-card":void 0!==this.presentingElement&&"ios"===e},Object(m.b)(this.cssClass)),style:{zIndex:""+(2e4+this.overlayIndex)},onIonBackdropTap:this.onBackdropTap,onIonDismiss:this.onDismiss,onIonModalDidPresent:this.onLifecycle,onIonModalWillPresent:this.onLifecycle,onIonModalWillDismiss:this.onLifecycle,onIonModalDidDismiss:this.onLifecycle},Object(o.j)("ion-backdrop",{visible:this.showBackdrop,tappable:this.backdropDismiss}),"ios"===e&&Object(o.j)("div",{class:"modal-shadow"}),Object(o.j)("div",{tabindex:"0"}),Object(o.j)("div",{role:"dialog",class:"modal-wrapper ion-overlay-wrapper"}),Object(o.j)("div",{tabindex:"0"}))}get el(){return Object(o.k)(this)}static get watchers(){return{swipeToClose:["swipeToCloseChanged"]}}},w={ionModalDidPresent:"ionViewDidEnter",ionModalWillPresent:"ionViewWillEnter",ionModalWillDismiss:"ionViewWillLeave",ionModalDidDismiss:"ionViewDidLeave"};v.style={ios:".sc-ion-modal-ios-h{--width:100%;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--overflow:hidden;--border-radius:0;--border-width:0;--border-style:none;--border-color:transparent;--background:var(--ion-background-color, #fff);--box-shadow:none;--backdrop-opacity:0;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;contain:strict}.overlay-hidden.sc-ion-modal-ios-h{display:none}.modal-wrapper.sc-ion-modal-ios,.modal-shadow.sc-ion-modal-ios{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:var(--overflow);z-index:10}.modal-shadow.sc-ion-modal-ios{position:absolute;background:transparent}@media only screen and (min-width: 768px) and (min-height: 600px){.sc-ion-modal-ios-h{--width:600px;--height:500px;--ion-safe-area-top:0px;--ion-safe-area-bottom:0px;--ion-safe-area-right:0px;--ion-safe-area-left:0px}}@media only screen and (min-width: 768px) and (min-height: 768px){.sc-ion-modal-ios-h{--width:600px;--height:600px}}.sc-ion-modal-ios-h:first-of-type{--backdrop-opacity:var(--ion-backdrop-opacity, 0.4)}@media only screen and (min-width: 768px) and (min-height: 600px){.sc-ion-modal-ios-h{--border-radius:10px}}.modal-wrapper.sc-ion-modal-ios{-webkit-transform:translate3d(0,  100%,  0);transform:translate3d(0,  100%,  0)}@media screen and (max-width: 767px){@supports (width: max(0px, 1px)){.modal-card.sc-ion-modal-ios-h{--height:calc(100% - max(30px, var(--ion-safe-area-top)) - 10px)}}@supports not (width: max(0px, 1px)){.modal-card.sc-ion-modal-ios-h{--height:calc(100% - 40px)}}.modal-card.sc-ion-modal-ios-h .modal-wrapper.sc-ion-modal-ios{border-top-left-radius:10px;border-top-right-radius:10px;border-bottom-right-radius:0;border-bottom-left-radius:0}[dir=rtl].sc-ion-modal-ios-h -no-combinator.modal-card.sc-ion-modal-ios-h .modal-wrapper.sc-ion-modal-ios,[dir=rtl] .sc-ion-modal-ios-h -no-combinator.modal-card.sc-ion-modal-ios-h .modal-wrapper.sc-ion-modal-ios,[dir=rtl].modal-card.sc-ion-modal-ios-h .modal-wrapper.sc-ion-modal-ios,[dir=rtl] .modal-card.sc-ion-modal-ios-h .modal-wrapper.sc-ion-modal-ios{border-top-left-radius:10px;border-top-right-radius:10px;border-bottom-right-radius:0;border-bottom-left-radius:0}.modal-card.sc-ion-modal-ios-h{--backdrop-opacity:0;--width:100%;-ms-flex-align:end;align-items:flex-end}.modal-card.sc-ion-modal-ios-h .modal-shadow.sc-ion-modal-ios{display:none}.modal-card.sc-ion-modal-ios-h ion-backdrop.sc-ion-modal-ios{pointer-events:none}}@media screen and (min-width: 768px){.modal-card.sc-ion-modal-ios-h{--width:calc(100% - 120px);--height:calc(100% - (120px + var(--ion-safe-area-top) + var(--ion-safe-area-bottom)));--max-width:720px;--max-height:1000px}.modal-card.sc-ion-modal-ios-h{--backdrop-opacity:0;-webkit-transition:all 0.5s ease-in-out;transition:all 0.5s ease-in-out}.modal-card.sc-ion-modal-ios-h:first-of-type{--backdrop-opacity:0.18}.modal-card.sc-ion-modal-ios-h .modal-shadow.sc-ion-modal-ios{-webkit-box-shadow:0px 0px 30px 10px rgba(0, 0, 0, 0.1);box-shadow:0px 0px 30px 10px rgba(0, 0, 0, 0.1)}}",md:".sc-ion-modal-md-h{--width:100%;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--overflow:hidden;--border-radius:0;--border-width:0;--border-style:none;--border-color:transparent;--background:var(--ion-background-color, #fff);--box-shadow:none;--backdrop-opacity:0;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;contain:strict}.overlay-hidden.sc-ion-modal-md-h{display:none}.modal-wrapper.sc-ion-modal-md,.modal-shadow.sc-ion-modal-md{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:var(--overflow);z-index:10}.modal-shadow.sc-ion-modal-md{position:absolute;background:transparent}@media only screen and (min-width: 768px) and (min-height: 600px){.sc-ion-modal-md-h{--width:600px;--height:500px;--ion-safe-area-top:0px;--ion-safe-area-bottom:0px;--ion-safe-area-right:0px;--ion-safe-area-left:0px}}@media only screen and (min-width: 768px) and (min-height: 768px){.sc-ion-modal-md-h{--width:600px;--height:600px}}.sc-ion-modal-md-h:first-of-type{--backdrop-opacity:var(--ion-backdrop-opacity, 0.32)}@media only screen and (min-width: 768px) and (min-height: 600px){.sc-ion-modal-md-h{--border-radius:2px}.sc-ion-modal-md-h:first-of-type{--box-shadow:0 28px 48px rgba(0, 0, 0, 0.4)}}.modal-wrapper.sc-ion-modal-md{-webkit-transform:translate3d(0,  40px,  0);transform:translate3d(0,  40px,  0);opacity:0.01}"}},73:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return l})),n.d(t,"d",(function(){return p})),n.d(t,"e",(function(){return c})),n.d(t,"f",(function(){return d})),n.d(t,"g",(function(){return r})),n.d(t,"h",(function(){return s})),n.d(t,"i",(function(){return m})),n.d(t,"j",(function(){return f})),n.d(t,"k",(function(){return b})),n.d(t,"l",(function(){return u})),n.d(t,"m",(function(){return h})),n.d(t,"n",(function(){return a}));const o=(e,t,n,o)=>{if("undefined"!=typeof window){const i=window,r=i&&i.Ionic&&i.Ionic.config;if(r){const i=r.get("_ael");if(i)return i(e,t,n,o);if(r._ael)return r._ael(e,t,n,o)}}return e.addEventListener(t,n,o)},i=(e,t,n,o)=>{if("undefined"!=typeof window){const i=window,r=i&&i.Ionic&&i.Ionic.config;if(r){const i=r.get("_rel");if(i)return i(e,t,n,o);if(r._rel)return r._rel(e,t,n,o)}}return e.removeEventListener(t,n,o)},r=(e,t=e)=>e.shadowRoot||t,a=e=>"function"==typeof __zone_symbol__requestAnimationFrame?__zone_symbol__requestAnimationFrame(e):"function"==typeof requestAnimationFrame?requestAnimationFrame(e):setTimeout(e),s=e=>!!e.shadowRoot&&!!e.attachShadow,d=e=>{const t=e.closest("ion-item");return t?t.querySelector("ion-label"):null},l=(e,t,n,o,i)=>{if(e||s(t)){let e=t.querySelector("input.aux-input");e||(e=t.ownerDocument.createElement("input"),e.type="hidden",e.classList.add("aux-input"),t.appendChild(e)),e.disabled=i,e.name=n,e.value=o||""}},c=(e,t,n)=>Math.max(e,Math.min(t,n)),m=(e,t)=>{if(!e){const e="ASSERT: "+t;throw console.error(e),new Error(e)}},u=e=>e.timeStamp||Date.now(),h=e=>{if(e){const t=e.changedTouches;if(t&&t.length>0){const e=t[0];return{x:e.clientX,y:e.clientY}}if(void 0!==e.pageX)return{x:e.pageX,y:e.pageY}}return{x:0,y:0}},f=e=>{const t="rtl"===document.dir;switch(e){case"start":return t;case"end":return!t;default:throw new Error(`"${e}" is not a valid value for [side]. Use "start" or "end" instead.`)}},p=(e,t)=>{const n=e._original||e;return{_original:e,emit:b(n.emit.bind(n),t)}},b=(e,t=0)=>{let n;return(...o)=>{clearTimeout(n),n=setTimeout(e,t,...o)}}},74:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return o})),n.d(t,"d",(function(){return s}));const o=(e,t)=>null!==t.closest(e),i=(e,t)=>"string"==typeof e&&e.length>0?Object.assign({"ion-color":!0,["ion-color-"+e]:!0},t):t,r=e=>{const t={};return(e=>{if(void 0!==e){return(Array.isArray(e)?e:e.split(" ")).filter(e=>null!=e).map(e=>e.trim()).filter(e=>""!==e)}return[]})(e).forEach(e=>t[e]=!0),t},a=/^[a-z][a-z0-9+\-.]*:/,s=async(e,t,n,o)=>{if(null!=e&&"#"!==e[0]&&!a.test(e)){const i=document.querySelector("ion-router");if(i)return null!=t&&t.preventDefault(),i.push(e,n,o)}return!1}},75:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));class o{constructor(e,t,n,o,i){this.id=t,this.name=n,this.disableScroll=i,this.priority=1e6*o+t,this.ctrl=e}canStart(){return!!this.ctrl&&this.ctrl.canStart(this.name)}start(){return!!this.ctrl&&this.ctrl.start(this.name,this.id,this.priority)}capture(){if(!this.ctrl)return!1;const e=this.ctrl.capture(this.name,this.id,this.priority);return e&&this.disableScroll&&this.ctrl.disableScroll(this.id),e}release(){this.ctrl&&(this.ctrl.release(this.id),this.disableScroll&&this.ctrl.enableScroll(this.id))}destroy(){this.release(),this.ctrl=void 0}}class i{constructor(e,t,n,o){this.id=t,this.disable=n,this.disableScroll=o,this.ctrl=e}block(){if(this.ctrl){if(this.disable)for(const e of this.disable)this.ctrl.disableGesture(e,this.id);this.disableScroll&&this.ctrl.disableScroll(this.id)}}unblock(){if(this.ctrl){if(this.disable)for(const e of this.disable)this.ctrl.enableGesture(e,this.id);this.disableScroll&&this.ctrl.enableScroll(this.id)}}destroy(){this.unblock(),this.ctrl=void 0}}const r="backdrop-no-scroll",a=new class{constructor(){this.gestureId=0,this.requestedStart=new Map,this.disabledGestures=new Map,this.disabledScroll=new Set}createGesture(e){return new o(this,this.newID(),e.name,e.priority||0,!!e.disableScroll)}createBlocker(e={}){return new i(this,this.newID(),e.disable,!!e.disableScroll)}start(e,t,n){return this.canStart(e)?(this.requestedStart.set(t,n),!0):(this.requestedStart.delete(t),!1)}capture(e,t,n){if(!this.start(e,t,n))return!1;const o=this.requestedStart;let i=-1e4;if(o.forEach(e=>{i=Math.max(i,e)}),i===n){this.capturedId=t,o.clear();const n=new CustomEvent("ionGestureCaptured",{detail:{gestureName:e}});return document.dispatchEvent(n),!0}return o.delete(t),!1}release(e){this.requestedStart.delete(e),this.capturedId===e&&(this.capturedId=void 0)}disableGesture(e,t){let n=this.disabledGestures.get(e);void 0===n&&(n=new Set,this.disabledGestures.set(e,n)),n.add(t)}enableGesture(e,t){const n=this.disabledGestures.get(e);void 0!==n&&n.delete(t)}disableScroll(e){this.disabledScroll.add(e),1===this.disabledScroll.size&&document.body.classList.add(r)}enableScroll(e){this.disabledScroll.delete(e),0===this.disabledScroll.size&&document.body.classList.remove(r)}canStart(e){return void 0===this.capturedId&&!this.isDisabled(e)}isCaptured(){return void 0!==this.capturedId}isScrollDisabled(){return this.disabledScroll.size>0}isDisabled(e){const t=this.disabledGestures.get(e);return!!(t&&t.size>0)}newID(){return this.gestureId++,this.gestureId}}},76:function(e,t,n){"use strict";n.r(t),n.d(t,"MENU_BACK_BUTTON_PRIORITY",(function(){return r})),n.d(t,"OVERLAY_BACK_BUTTON_PRIORITY",(function(){return i})),n.d(t,"startHardwareBackButton",(function(){return o}));const o=()=>{const e=document;let t=!1;e.addEventListener("backbutton",()=>{if(t)return;let n=0,o=[];const i=new CustomEvent("ionBackButton",{bubbles:!1,detail:{register(e,t){o.push({priority:e,handler:t,id:n++})}}});e.dispatchEvent(i);const r=()=>{if(o.length>0){let e={priority:Number.MIN_SAFE_INTEGER,handler:()=>{},id:-1};o.forEach(t=>{t.priority>=e.priority&&(e=t)}),t=!0,o=o.filter(t=>t.id!==e.id),(async e=>{try{if(e&&e.handler){const t=e.handler(r);null!=t&&await t}}catch(e){console.error(e)}})(e).then(()=>t=!1)}};r()})},i=100,r=99},77:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var o=n(73);let i;const r=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),a=e=>{if(void 0===i){const t=void 0!==e.style.animationName,n=void 0!==e.style.webkitAnimationName;i=!t&&n?"-webkit-":""}return i},s=(e,t,n)=>{const o=t.startsWith("animation")?a(e):"";e.style.setProperty(o+t,n)},d=(e,t)=>{const n=t.startsWith("animation")?a(e):"";e.style.removeProperty(n+t)},l=[],c=(e=[],t)=>{if(void 0!==t){const n=Array.isArray(t)?t:[t];return[...e,...n]}return e},m=e=>{let t,n,i,m,u,h,f,p,b,y,g,v,w,x=[],E=[],S=[],k=!1,O={},j=[],A=[],D={},T=0,M=!1,C=!1,Y=!0,L=!1,_=!0;const q=e,I=[],P=[],R=[],W=[],X=[],z=[],B=[],N=[],F=[],$=[],G="function"==typeof AnimationEffect||"function"==typeof window.AnimationEffect,V="function"==typeof Element&&"function"==typeof Element.prototype.animate&&G,U=e=>{J(),e&&Z()},K=(e,t)=>((t&&t.oneTimeCallback?P:I).push({c:e,o:t}),w),H=()=>(I.length=0,P.length=0,w),J=()=>{if(V)$.forEach(e=>{e.cancel()}),$.length=0;else{const e=R.slice();Object(o.n)(()=>{e.forEach(e=>{d(e,"animation-name"),d(e,"animation-duration"),d(e,"animation-timing-function"),d(e,"animation-iteration-count"),d(e,"animation-delay"),d(e,"animation-play-state"),d(e,"animation-fill-mode"),d(e,"animation-direction")})})}},Z=()=>{X.forEach(e=>{e&&e.parentNode&&e.parentNode.removeChild(e)}),X.length=0},Q=()=>void 0!==u?u:f?f.getFill():"both",ee=()=>void 0!==b?b:void 0!==h?h:f?f.getDirection():"normal",te=()=>M?"linear":void 0!==i?i:f?f.getEasing():"linear",ne=()=>C?0:void 0!==y?y:void 0!==n?n:f?f.getDuration():0,oe=()=>void 0!==m?m:f?f.getIterations():1,ie=()=>void 0!==g?g:void 0!==t?t:f?f.getDelay():0,re=()=>{0!==T&&(T--,0===T&&((()=>{fe(),N.forEach(e=>e()),F.forEach(e=>e());const e=Y?1:0,t=j,n=A,o=D;R.forEach(e=>{const i=e.classList;t.forEach(e=>i.add(e)),n.forEach(e=>i.remove(e));for(const t in o)o.hasOwnProperty(t)&&s(e,t,o[t])}),I.forEach(t=>t.c(e,w)),P.forEach(t=>t.c(e,w)),P.length=0,_=!0,Y&&(L=!0),Y=!0})(),f&&f.animationFinish()))},ae=(t=!0)=>{Z();const n=(e=>(e.forEach(e=>{for(const t in e)if(e.hasOwnProperty(t)){const n=e[t];if("easing"===t){e["animation-timing-function"]=n,delete e[t]}else{const o=r(t);o!==t&&(e[o]=n,delete e[t])}}}),e))(x);R.forEach(i=>{if(n.length>0){const r=((e=[])=>e.map(e=>{const t=e.offset,n=[];for(const t in e)e.hasOwnProperty(t)&&"offset"!==t&&n.push(`${t}: ${e[t]};`);return`${100*t}% { ${n.join(" ")} }`}).join(" "))(n);v=void 0!==e?e:(e=>{let t=l.indexOf(e);return t<0&&(t=l.push(e)-1),"ion-animation-"+t})(r);const d=((e,t,n)=>{const o=(e=>{const t=e.getRootNode();return t.head||t})(n),i=a(n),r=o.querySelector("#"+e);if(r)return r;const s=(n.ownerDocument||document).createElement("style");return s.id=e,s.textContent=`@${i}keyframes ${e} { ${t} } @${i}keyframes ${e}-alt { ${t} }`,o.appendChild(s),s})(v,r,i);X.push(d),s(i,"animation-duration",ne()+"ms"),s(i,"animation-timing-function",te()),s(i,"animation-delay",ie()+"ms"),s(i,"animation-fill-mode",Q()),s(i,"animation-direction",ee());const c=oe()===1/0?"infinite":oe().toString();s(i,"animation-iteration-count",c),s(i,"animation-play-state","paused"),t&&s(i,"animation-name",d.id+"-alt"),Object(o.n)(()=>{s(i,"animation-name",d.id||null)})}})},se=(e=!0)=>{(()=>{z.forEach(e=>e()),B.forEach(e=>e());const e=E,t=S,n=O;R.forEach(o=>{const i=o.classList;e.forEach(e=>i.add(e)),t.forEach(e=>i.remove(e));for(const e in n)n.hasOwnProperty(e)&&s(o,e,n[e])})})(),x.length>0&&(V?(R.forEach(e=>{const t=e.animate(x,{id:q,delay:ie(),duration:ne(),easing:te(),iterations:oe(),fill:Q(),direction:ee()});t.pause(),$.push(t)}),$.length>0&&($[0].onfinish=()=>{re()})):ae(e)),k=!0},de=e=>{if(e=Math.min(Math.max(e,0),.9999),V)$.forEach(t=>{t.currentTime=t.effect.getComputedTiming().delay+ne()*e,t.pause()});else{const t=`-${ne()*e}ms`;R.forEach(e=>{x.length>0&&(s(e,"animation-delay",t),s(e,"animation-play-state","paused"))})}},le=e=>{$.forEach(e=>{e.effect.updateTiming({delay:ie(),duration:ne(),easing:te(),iterations:oe(),fill:Q(),direction:ee()})}),void 0!==e&&de(e)},ce=(e=!0,t)=>{Object(o.n)(()=>{R.forEach(n=>{s(n,"animation-name",v||null),s(n,"animation-duration",ne()+"ms"),s(n,"animation-timing-function",te()),s(n,"animation-delay",void 0!==t?`-${t*ne()}ms`:ie()+"ms"),s(n,"animation-fill-mode",Q()||null),s(n,"animation-direction",ee()||null);const i=oe()===1/0?"infinite":oe().toString();s(n,"animation-iteration-count",i),e&&s(n,"animation-name",v+"-alt"),Object(o.n)(()=>{s(n,"animation-name",v||null)})})})},me=(e=!1,t=!0,n)=>(e&&W.forEach(o=>{o.update(e,t,n)}),V?le(n):ce(t,n),w),ue=()=>{k&&(V?$.forEach(e=>{e.pause()}):R.forEach(e=>{s(e,"animation-play-state","paused")}))},he=()=>{p=void 0,re()},fe=()=>{p&&clearTimeout(p)},pe=()=>{R.forEach(e=>{d(e,"animation-duration"),d(e,"animation-delay"),d(e,"animation-play-state")})},be=e=>new Promise(t=>{e&&e.sync&&(C=!0,K(()=>C=!1,{oneTimeCallback:!0})),k||se(),L&&(V?(de(0),le()):ce(),L=!1),_&&(T=W.length+1,_=!1),K(()=>t(),{oneTimeCallback:!0}),W.forEach(e=>{e.play()}),V?($.forEach(e=>{e.play()}),0!==x.length&&0!==R.length||re()):(()=>{if(fe(),Object(o.n)(()=>{R.forEach(e=>{x.length>0&&s(e,"animation-play-state","running")})}),0===x.length||0===R.length)re();else{const e=ie()||0,t=ne()||0,n=oe()||1;isFinite(n)&&(p=setTimeout(he,e+t*n+100)),((e,t)=>{let n;const o={passive:!0},i=()=>{n&&n()},r=n=>{e===n.target&&(i(),t(n))};e&&(e.addEventListener("webkitAnimationEnd",r,o),e.addEventListener("animationend",r,o),n=()=>{e.removeEventListener("webkitAnimationEnd",r,o),e.removeEventListener("animationend",r,o)})})(R[0],()=>{fe(),Object(o.n)(()=>{pe(),Object(o.n)(re)})})}})()}),ye=(e,t)=>{const n=x[0];return void 0===n||void 0!==n.offset&&0!==n.offset?x=[{offset:0,[e]:t},...x]:n[e]=t,w};return w={parentAnimation:f,elements:R,childAnimations:W,id:q,animationFinish:re,from:ye,to:(e,t)=>{const n=x[x.length-1];return void 0===n||void 0!==n.offset&&1!==n.offset?x=[...x,{offset:1,[e]:t}]:n[e]=t,w},fromTo:(e,t,n)=>ye(e,t).to(e,n),parent:e=>(f=e,w),play:be,pause:()=>(W.forEach(e=>{e.pause()}),ue(),w),stop:()=>{W.forEach(e=>{e.stop()}),k&&(J(),k=!1),M=!1,C=!1,_=!0,b=void 0,y=void 0,g=void 0,T=0,L=!1,Y=!0},destroy:e=>(W.forEach(t=>{t.destroy(e)}),U(e),R.length=0,W.length=0,x.length=0,H(),k=!1,_=!0,w),keyframes:e=>(x=e,w),addAnimation:e=>{if(null!=e)if(Array.isArray(e))for(const t of e)t.parent(w),W.push(t);else e.parent(w),W.push(e);return w},addElement:e=>{if(null!=e)if(1===e.nodeType)R.push(e);else if(e.length>=0)for(let t=0;t<e.length;t++)R.push(e[t]);else console.error("Invalid addElement value");return w},update:me,fill:e=>(u=e,me(!0),w),direction:e=>(h=e,me(!0),w),iterations:e=>(m=e,me(!0),w),duration:e=>(V||0!==e||(e=1),n=e,me(!0),w),easing:e=>(i=e,me(!0),w),delay:e=>(t=e,me(!0),w),getWebAnimations:()=>$,getKeyframes:()=>x,getFill:Q,getDirection:ee,getDelay:ie,getIterations:oe,getEasing:te,getDuration:ne,afterAddRead:e=>(N.push(e),w),afterAddWrite:e=>(F.push(e),w),afterClearStyles:(e=[])=>{for(const t of e)D[t]="";return w},afterStyles:(e={})=>(D=e,w),afterRemoveClass:e=>(A=c(A,e),w),afterAddClass:e=>(j=c(j,e),w),beforeAddRead:e=>(z.push(e),w),beforeAddWrite:e=>(B.push(e),w),beforeClearStyles:(e=[])=>{for(const t of e)O[t]="";return w},beforeStyles:(e={})=>(O=e,w),beforeRemoveClass:e=>(S=c(S,e),w),beforeAddClass:e=>(E=c(E,e),w),onFinish:K,progressStart:(e=!1,t)=>(W.forEach(n=>{n.progressStart(e,t)}),ue(),M=e,k?me(!1,!0,t):se(),w),progressStep:e=>(W.forEach(t=>{t.progressStep(e)}),de(e),w),progressEnd:(e,t,n)=>(M=!1,W.forEach(o=>{o.progressEnd(e,t,n)}),void 0!==n&&(y=n),L=!1,Y=!0,0===e?(b="reverse"===ee()?"normal":"reverse","reverse"===b&&(Y=!1),V?(me(),de(1-t)):(g=(1-t)*ne()*-1,me(!1,!1))):1===e&&(V?(me(),de(t)):(g=t*ne()*-1,me(!1,!1))),void 0!==e&&(K(()=>{y=void 0,b=void 0,g=void 0},{oneTimeCallback:!0}),f||be()),w)}}},78:function(e,t,n){"use strict";n.r(t),n.d(t,"createGesture",(function(){return d}));var o=n(75);n.d(t,"GESTURE_CONTROLLER",(function(){return o.a}));const i=(e,t,n,o)=>{const i=r(e)?{capture:!!o.capture,passive:!!o.passive}:!!o.capture;let a,s;return e.__zone_symbol__addEventListener?(a="__zone_symbol__addEventListener",s="__zone_symbol__removeEventListener"):(a="addEventListener",s="removeEventListener"),e[a](t,n,i),()=>{e[s](t,n,i)}},r=e=>{if(void 0===a)try{const t=Object.defineProperty({},"passive",{get:()=>{a=!0}});e.addEventListener("optsTest",()=>{},t)}catch(e){a=!1}return!!a};let a;const s=e=>e instanceof Document?e:e.ownerDocument,d=e=>{let t=!1,n=!1,r=!0,a=!1;const d=Object.assign({disableScroll:!1,direction:"x",gesturePriority:0,passive:!0,maxAngle:40,threshold:10},e),u=d.canStart,h=d.onWillStart,f=d.onStart,p=d.onEnd,b=d.notCaptured,y=d.onMove,g=d.threshold,v=d.passive,w=d.blurOnStart,x={type:"pan",startX:0,startY:0,startTime:0,currentX:0,currentY:0,velocityX:0,velocityY:0,deltaX:0,deltaY:0,currentTime:0,event:void 0,data:void 0},E=((e,t,n)=>{const o=n*(Math.PI/180),i="x"===e,r=Math.cos(o),a=t*t;let s=0,d=0,l=!1,c=0;return{start(e,t){s=e,d=t,c=0,l=!0},detect(e,t){if(!l)return!1;const n=e-s,o=t-d,m=n*n+o*o;if(m<a)return!1;const u=Math.sqrt(m),h=(i?n:o)/u;return c=h>r?1:h<-r?-1:0,l=!1,!0},isGesture:()=>0!==c,getDirection:()=>c}})(d.direction,d.threshold,d.maxAngle),S=o.a.createGesture({name:e.gestureName,priority:e.gesturePriority,disableScroll:e.disableScroll}),k=()=>{t&&(a=!1,y&&y(x))},O=()=>!(S&&!S.capture())&&(t=!0,r=!1,x.startX=x.currentX,x.startY=x.currentY,x.startTime=x.currentTime,h?h(x).then(j):j(),!0),j=()=>{w&&(()=>{if("undefined"!=typeof document){const e=document.activeElement;null!==e&&e.blur&&e.blur()}})(),f&&f(x),r=!0},A=()=>{t=!1,n=!1,a=!1,r=!0,S.release()},D=e=>{const n=t,o=r;A(),o&&(l(x,e),n?p&&p(x):b&&b(x))},T=((e,t,n,o,r)=>{let a,d,l,c,m,u,h,f=0;const p=o=>{f=Date.now()+2e3,t(o)&&(!d&&n&&(d=i(e,"touchmove",n,r)),l||(l=i(e,"touchend",y,r)),c||(c=i(e,"touchcancel",y,r)))},b=o=>{f>Date.now()||t(o)&&(!u&&n&&(u=i(s(e),"mousemove",n,r)),h||(h=i(s(e),"mouseup",g,r)))},y=e=>{v(),o&&o(e)},g=e=>{w(),o&&o(e)},v=()=>{d&&d(),l&&l(),c&&c(),d=l=c=void 0},w=()=>{u&&u(),h&&h(),u=h=void 0},x=()=>{v(),w()},E=(t=!0)=>{t?(a||(a=i(e,"touchstart",p,r)),m||(m=i(e,"mousedown",b,r))):(a&&a(),m&&m(),a=m=void 0,x())};return{enable:E,stop:x,destroy:()=>{E(!1),o=n=t=void 0}}})(d.el,e=>{const t=m(e);return!(n||!r)&&(c(e,x),x.startX=x.currentX,x.startY=x.currentY,x.startTime=x.currentTime=t,x.velocityX=x.velocityY=x.deltaX=x.deltaY=0,x.event=e,(!u||!1!==u(x))&&(S.release(),!!S.start()&&(n=!0,0===g?O():(E.start(x.startX,x.startY),!0))))},e=>{t?!a&&r&&(a=!0,l(x,e),requestAnimationFrame(k)):(l(x,e),E.detect(x.currentX,x.currentY)&&(E.isGesture()&&O()||M()))},D,{capture:!1,passive:v}),M=()=>{A(),T.stop(),b&&b(x)};return{enable(e=!0){e||(t&&D(void 0),A()),T.enable(e)},destroy(){S.destroy(),T.destroy()}}},l=(e,t)=>{if(!t)return;const n=e.currentX,o=e.currentY,i=e.currentTime;c(t,e);const r=e.currentX,a=e.currentY,s=(e.currentTime=m(t))-i;if(s>0&&s<100){const t=(r-n)/s,i=(a-o)/s;e.velocityX=.7*t+.3*e.velocityX,e.velocityY=.7*i+.3*e.velocityY}e.deltaX=r-e.startX,e.deltaY=a-e.startY,e.event=t},c=(e,t)=>{let n=0,o=0;if(e){const t=e.changedTouches;if(t&&t.length>0){const e=t[0];n=e.clientX,o=e.clientY}else void 0!==e.pageX&&(n=e.pageX,o=e.pageY)}t.currentX=n,t.currentY=o},m=e=>e.timeStamp||Date.now()},79:function(e,t,n){"use strict";n.d(t,"a",(function(){return C})),n.d(t,"b",(function(){return l})),n.d(t,"c",(function(){return c})),n.d(t,"d",(function(){return u})),n.d(t,"e",(function(){return x})),n.d(t,"f",(function(){return h})),n.d(t,"g",(function(){return S})),n.d(t,"h",(function(){return j})),n.d(t,"i",(function(){return s})),n.d(t,"j",(function(){return D})),n.d(t,"k",(function(){return m})),n.d(t,"l",(function(){return M}));var o=n(3),i=n(73),r=n(76);let a=0;const s=new WeakMap,d=e=>({create:t=>f(e,t),dismiss:(t,n,o)=>v(document,t,n,e,o),getTop:async()=>w(document,e)}),l=d("ion-alert"),c=d("ion-action-sheet"),m=d("ion-picker"),u=d("ion-popover"),h=e=>{"undefined"!=typeof document&&g(document);const t=a++;e.overlayIndex=t,e.hasAttribute("id")||(e.id="ion-overlay-"+t)},f=(e,t)=>"undefined"!=typeof customElements?customElements.whenDefined(e).then(()=>{const n=document.createElement(e);return n.classList.add("overlay-hidden"),Object.assign(n,t),k(document).appendChild(n),n.componentOnReady()}):Promise.resolve(),p='[tabindex]:not([tabindex^="-"]), input:not([type=hidden]):not([tabindex^="-"]), textarea:not([tabindex^="-"]), button:not([tabindex^="-"]), select:not([tabindex^="-"]), .ion-focusable:not([tabindex^="-"])',b="input:not([type=hidden]), textarea, button, select",y=(e,t)=>{const n=w(t),o=e.target;if(n&&o)if(n===o)n.lastFocus=void 0;else{const e=Object(i.g)(n);if(!e.contains(o))return;const r=e.querySelector(".ion-overlay-wrapper");if(!r)return;if(r.contains(o))n.lastFocus=o;else{const e=n.lastFocus;((e,t)=>{let n=e.querySelector(p);const o=n&&n.shadowRoot;o&&(n=o.querySelector(b)||n),n?n.focus():t.focus()})(r,n),e===t.activeElement&&((e,t)=>{const n=Array.from(e.querySelectorAll(p));let o=n.length>0?n[n.length-1]:null;const i=o&&o.shadowRoot;i&&(o=i.querySelector(b)||o),o?o.focus():t.focus()})(r,n),n.lastFocus=t.activeElement}}},g=e=>{0===a&&(a=1,e.addEventListener("focus",t=>y(t,e),!0),e.addEventListener("ionBackButton",t=>{const n=w(e);n&&n.backdropDismiss&&t.detail.register(r.OVERLAY_BACK_BUTTON_PRIORITY,()=>n.dismiss(void 0,C))}),e.addEventListener("keyup",t=>{if("Escape"===t.key){const t=w(e);t&&t.backdropDismiss&&t.dismiss(void 0,C)}}))},v=(e,t,n,o,i)=>{const r=w(e,o,i);return r?r.dismiss(t,n):Promise.reject("overlay does not exist")},w=(e,t,n)=>{const o=((e,t)=>(void 0===t&&(t="ion-alert,ion-action-sheet,ion-loading,ion-modal,ion-picker,ion-popover,ion-toast"),Array.from(e.querySelectorAll(t)).filter(e=>e.overlayIndex>0)))(e,t);return void 0===n?o[o.length-1]:o.find(e=>e.id===n)},x=async(e,t,n,i,r)=>{if(e.presented)return;e.presented=!0,e.willPresent.emit();const a=Object(o.b)(e),s=e.enterAnimation?e.enterAnimation:o.c.get(t,"ios"===a?n:i);await O(e,s,e.el,r)&&e.didPresent.emit(),"ION-TOAST"!==e.el.tagName&&E(e.el),e.keyboardClose&&e.el.focus()},E=async e=>{let t=document.activeElement;if(!t)return;const n=t&&t.shadowRoot;n&&(t=n.querySelector(b)||t),await e.onDidDismiss(),t.focus()},S=async(e,t,n,i,r,a,d)=>{if(!e.presented)return!1;e.presented=!1;try{e.el.style.setProperty("pointer-events","none"),e.willDismiss.emit({data:t,role:n});const l=Object(o.b)(e),c=e.leaveAnimation?e.leaveAnimation:o.c.get(i,"ios"===l?r:a);"gesture"!==n&&await O(e,c,e.el,d),e.didDismiss.emit({data:t,role:n}),s.delete(e)}catch(e){console.error(e)}return e.el.remove(),!0},k=e=>e.querySelector("ion-app")||e.body,O=async(e,t,n,i)=>{n.classList.remove("overlay-hidden");const r=t(n.shadowRoot||e.el,i);e.animated&&o.c.getBoolean("animated",!0)||r.duration(0),e.keyboardClose&&r.beforeAddWrite(()=>{const e=n.ownerDocument.activeElement;e&&e.matches("input, ion-input, ion-textarea")&&e.blur()});const a=s.get(e)||[];return s.set(e,[...a,r]),await r.play(),!0},j=(e,t)=>{let n;const o=new Promise(e=>n=e);return A(e,t,e=>{n(e.detail)}),o},A=(e,t,n)=>{const o=r=>{Object(i.b)(e,t,o),n(r)};Object(i.a)(e,t,o)},D=e=>"cancel"===e||e===C,T=e=>e(),M=(e,t)=>{if("function"==typeof e){return o.c.get("_zoneGate",T)(()=>{try{return e(t)}catch(e){console.error(e)}})}},C="backdrop"},82:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return a})),n.d(t,"d",(function(){return x})),n.d(t,"e",(function(){return k})),n.d(t,"f",(function(){return v})),n.d(t,"g",(function(){return E})),n.d(t,"h",(function(){return s}));var o=n(0);const i="ionViewWillLeave",r="ionViewDidLeave",a="ionViewWillUnload",s=e=>new Promise((t,n)=>{Object(o.f)(()=>{d(e),l(e).then(n=>{n.animation&&n.animation.destroy(),c(e),t(n)},t=>{c(e),n(t)})})}),d=e=>{const t=e.enteringEl,n=e.leavingEl;S(t,n,e.direction),e.showGoBack?t.classList.add("can-go-back"):t.classList.remove("can-go-back"),E(t,!1),n&&E(n,!1)},l=async e=>{const t=await m(e);return t&&o.a.isBrowser?u(t,e):h(e)},c=e=>{const t=e.enteringEl,n=e.leavingEl;t.classList.remove("ion-page-invisible"),void 0!==n&&n.classList.remove("ion-page-invisible")},m=async e=>{if(!e.leavingEl||!e.animated||0===e.duration)return;if(e.animationBuilder)return e.animationBuilder;return"ios"===e.mode?(await n.e(31).then(n.bind(null,85))).iosTransitionAnimation:(await n.e(32).then(n.bind(null,86))).mdTransitionAnimation},u=async(e,t)=>{await f(t,!0);const n=e(t.baseEl,t);y(t.enteringEl,t.leavingEl);const o=await b(n,t);return t.progressCallback&&t.progressCallback(void 0),o&&g(t.enteringEl,t.leavingEl),{hasCompleted:o,animation:n}},h=async e=>{const t=e.enteringEl,n=e.leavingEl;return await f(e,!1),y(t,n),g(t,n),{hasCompleted:!0}},f=async(e,t)=>{const n=(void 0!==e.deepWait?e.deepWait:t)?[x(e.enteringEl),x(e.leavingEl)]:[w(e.enteringEl),w(e.leavingEl)];await Promise.all(n),await p(e.viewIsReady,e.enteringEl)},p=async(e,t)=>{e&&await e(t)},b=(e,t)=>{const n=t.progressCallback,o=new Promise(t=>{e.onFinish(e=>t(1===e))});return n?(e.progressStart(!0),n(e)):e.play(),o},y=(e,t)=>{v(t,i),v(e,"ionViewWillEnter")},g=(e,t)=>{v(e,"ionViewDidEnter"),v(t,r)},v=(e,t)=>{if(e){const n=new CustomEvent(t,{bubbles:!1,cancelable:!1});e.dispatchEvent(n)}},w=e=>e&&e.componentOnReady?e.componentOnReady():Promise.resolve(),x=async e=>{const t=e;if(t){if(null!=t.componentOnReady){if(null!=await t.componentOnReady())return}await Promise.all(Array.from(t.children).map(x))}},E=(e,t)=>{t?(e.setAttribute("aria-hidden","true"),e.classList.add("ion-page-hidden")):(e.hidden=!1,e.removeAttribute("aria-hidden"),e.classList.remove("ion-page-hidden"))},S=(e,t,n)=>{void 0!==e&&(e.style.zIndex="back"===n?"99":"101"),void 0!==t&&(t.style.zIndex="100")},k=e=>{if(e.classList.contains("ion-page"))return e;const t=e.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs");return t||e}},83:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));const o=(e,t,n,o,a)=>r(e[1],t[1],n[1],o[1],a).map(r=>i(e[0],t[0],n[0],o[0],r)),i=(e,t,n,o,i)=>i*(3*t*Math.pow(i-1,2)+i*(-3*n*i+3*n+o*i))-e*Math.pow(i-1,3),r=(e,t,n,o,i)=>a((o-=i)-3*(n-=i)+3*(t-=i)-(e-=i),3*n-6*t+3*e,3*t-3*e,e).filter(e=>e>=0&&e<=1),a=(e,t,n,o)=>{if(0===e)return((e,t,n)=>{const o=t*t-4*e*n;return o<0?[]:[(-t+Math.sqrt(o))/(2*e),(-t-Math.sqrt(o))/(2*e)]})(t,n,o);const i=(3*(n/=e)-(t/=e)*t)/3,r=(2*t*t*t-9*t*n+27*(o/=e))/27;if(0===i)return[Math.pow(-r,1/3)];if(0===r)return[Math.sqrt(-i),-Math.sqrt(-i)];const a=Math.pow(r/2,2)+Math.pow(i/3,3);if(0===a)return[Math.pow(r/2,.5)-t/3];if(a>0)return[Math.pow(-r/2+Math.sqrt(a),1/3)-Math.pow(r/2+Math.sqrt(a),1/3)-t/3];const s=Math.sqrt(Math.pow(-i/3,3)),d=Math.acos(-r/(2*Math.sqrt(Math.pow(-i/3,3)))),l=2*Math.pow(s,1/3);return[l*Math.cos(d/3)-t/3,l*Math.cos((d+2*Math.PI)/3)-t/3,l*Math.cos((d+4*Math.PI)/3)-t/3]}},84:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return i}));const o=async(e,t,n,o,i)=>{if(e)return e.attachViewToDom(t,n,i,o);if("string"!=typeof n&&!(n instanceof HTMLElement))throw new Error("framework delegate is missing");const r="string"==typeof n?t.ownerDocument&&t.ownerDocument.createElement(n):n;return o&&o.forEach(e=>r.classList.add(e)),i&&Object.assign(r,i),t.appendChild(r),r.componentOnReady&&await r.componentOnReady(),r},i=(e,t)=>{if(t){if(e){const n=t.parentElement;return e.removeViewFromDom(n,t)}t.remove()}return Promise.resolve()}}}]);