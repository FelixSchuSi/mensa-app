(self.webpackChunkclient=self.webpackChunkclient||[]).push([[5881,2416,6326,6322],{9299:(e,t,o)=>{"use strict";o.d(t,{g:()=>i});const i=(e,t,o,i,a)=>s(e[1],t[1],o[1],i[1],a).map((s=>r(e[0],t[0],o[0],i[0],s))),r=(e,t,o,i,r)=>r*(3*t*Math.pow(r-1,2)+r*(-3*o*r+3*o+i*r))-e*Math.pow(r-1,3),s=(e,t,o,i,r)=>a((i-=r)-3*(o-=r)+3*(t-=r)-(e-=r),3*o-6*t+3*e,3*t-3*e,e).filter((e=>e>=0&&e<=1)),a=(e,t,o,i)=>{if(0===e)return((e,t,o)=>{const i=t*t-4*e*o;return i<0?[]:[(-t+Math.sqrt(i))/(2*e),(-t-Math.sqrt(i))/(2*e)]})(t,o,i);const r=(3*(o/=e)-(t/=e)*t)/3,s=(2*t*t*t-9*t*o+27*(i/=e))/27;if(0===r)return[Math.pow(-s,1/3)];if(0===s)return[Math.sqrt(-r),-Math.sqrt(-r)];const a=Math.pow(s/2,2)+Math.pow(r/3,3);if(0===a)return[Math.pow(s/2,.5)-t/3];if(a>0)return[Math.pow(-s/2+Math.sqrt(a),1/3)-Math.pow(s/2+Math.sqrt(a),1/3)-t/3];const n=Math.sqrt(Math.pow(-r/3,3)),d=Math.acos(-s/(2*Math.sqrt(Math.pow(-r/3,3)))),l=2*Math.pow(n,1/3);return[l*Math.cos(d/3)-t/3,l*Math.cos((d+2*Math.PI)/3)-t/3,l*Math.cos((d+4*Math.PI)/3)-t/3]}},1479:(e,t,o)=>{"use strict";o.d(t,{a:()=>i,d:()=>r});const i=async(e,t,o,i,r)=>{if(e)return e.attachViewToDom(t,o,r,i);if("string"!=typeof o&&!(o instanceof HTMLElement))throw new Error("framework delegate is missing");const s="string"==typeof o?t.ownerDocument&&t.ownerDocument.createElement(o):o;return i&&i.forEach((e=>s.classList.add(e))),r&&Object.assign(s,r),t.appendChild(s),s.componentOnReady&&await s.componentOnReady(),s},r=(e,t)=>{if(t){if(e){const o=t.parentElement;return e.removeViewFromDom(o,t)}t.remove()}return Promise.resolve()}},4890:(e,t,o)=>{"use strict";o.d(t,{G:()=>a});class i{constructor(e,t,o,i,r){this.id=t,this.name=o,this.disableScroll=r,this.priority=1e6*i+t,this.ctrl=e}canStart(){return!!this.ctrl&&this.ctrl.canStart(this.name)}start(){return!!this.ctrl&&this.ctrl.start(this.name,this.id,this.priority)}capture(){if(!this.ctrl)return!1;const e=this.ctrl.capture(this.name,this.id,this.priority);return e&&this.disableScroll&&this.ctrl.disableScroll(this.id),e}release(){this.ctrl&&(this.ctrl.release(this.id),this.disableScroll&&this.ctrl.enableScroll(this.id))}destroy(){this.release(),this.ctrl=void 0}}class r{constructor(e,t,o,i){this.id=t,this.disable=o,this.disableScroll=i,this.ctrl=e}block(){if(this.ctrl){if(this.disable)for(const e of this.disable)this.ctrl.disableGesture(e,this.id);this.disableScroll&&this.ctrl.disableScroll(this.id)}}unblock(){if(this.ctrl){if(this.disable)for(const e of this.disable)this.ctrl.enableGesture(e,this.id);this.disableScroll&&this.ctrl.enableScroll(this.id)}}destroy(){this.unblock(),this.ctrl=void 0}}const s="backdrop-no-scroll",a=new class{constructor(){this.gestureId=0,this.requestedStart=new Map,this.disabledGestures=new Map,this.disabledScroll=new Set}createGesture(e){return new i(this,this.newID(),e.name,e.priority||0,!!e.disableScroll)}createBlocker(e={}){return new r(this,this.newID(),e.disable,!!e.disableScroll)}start(e,t,o){return this.canStart(e)?(this.requestedStart.set(t,o),!0):(this.requestedStart.delete(t),!1)}capture(e,t,o){if(!this.start(e,t,o))return!1;const i=this.requestedStart;let r=-1e4;if(i.forEach((e=>{r=Math.max(r,e)})),r===o){this.capturedId=t,i.clear();const o=new CustomEvent("ionGestureCaptured",{detail:{gestureName:e}});return document.dispatchEvent(o),!0}return i.delete(t),!1}release(e){this.requestedStart.delete(e),this.capturedId===e&&(this.capturedId=void 0)}disableGesture(e,t){let o=this.disabledGestures.get(e);void 0===o&&(o=new Set,this.disabledGestures.set(e,o)),o.add(t)}enableGesture(e,t){const o=this.disabledGestures.get(e);void 0!==o&&o.delete(t)}disableScroll(e){this.disabledScroll.add(e),1===this.disabledScroll.size&&document.body.classList.add(s)}enableScroll(e){this.disabledScroll.delete(e),0===this.disabledScroll.size&&document.body.classList.remove(s)}canStart(e){return void 0===this.capturedId&&!this.isDisabled(e)}isCaptured(){return void 0!==this.capturedId}isScrollDisabled(){return this.disabledScroll.size>0}isDisabled(e){const t=this.disabledGestures.get(e);return!!(t&&t.size>0)}newID(){return this.gestureId++,this.gestureId}}},2416:(e,t,o)=>{"use strict";o.r(t),o.d(t,{MENU_BACK_BUTTON_PRIORITY:()=>s,OVERLAY_BACK_BUTTON_PRIORITY:()=>r,startHardwareBackButton:()=>i});const i=()=>{const e=document;let t=!1;e.addEventListener("backbutton",(()=>{if(t)return;let o=0,i=[];const r=new CustomEvent("ionBackButton",{bubbles:!1,detail:{register(e,t){i.push({priority:e,handler:t,id:o++})}}});e.dispatchEvent(r);const s=()=>{if(i.length>0){let e={priority:Number.MIN_SAFE_INTEGER,handler:()=>{},id:-1};i.forEach((t=>{t.priority>=e.priority&&(e=t)})),t=!0,i=i.filter((t=>t.id!==e.id)),(async e=>{try{if(e&&e.handler){const t=e.handler(s);null!=t&&await t}}catch(e){console.error(e)}})(e).then((()=>t=!1))}};s()}))},r=100,s=99},900:(e,t,o)=>{"use strict";o.d(t,{a:()=>i,b:()=>r,c:()=>l,d:()=>f,e:()=>c,f:()=>d,g:()=>s,h:()=>n,i:()=>m,j:()=>u,k:()=>b,n:()=>h,p:()=>p,r:()=>a});const i=(e,t,o,i)=>{if("undefined"!=typeof window){const r=window,s=r&&r.Ionic&&r.Ionic.config;if(s){const r=s.get("_ael");if(r)return r(e,t,o,i);if(s._ael)return s._ael(e,t,o,i)}}return e.addEventListener(t,o,i)},r=(e,t,o,i)=>{if("undefined"!=typeof window){const r=window,s=r&&r.Ionic&&r.Ionic.config;if(s){const r=s.get("_rel");if(r)return r(e,t,o,i);if(s._rel)return s._rel(e,t,o,i)}}return e.removeEventListener(t,o,i)},s=(e,t=e)=>e.shadowRoot||t,a=e=>"function"==typeof __zone_symbol__requestAnimationFrame?__zone_symbol__requestAnimationFrame(e):"function"==typeof requestAnimationFrame?requestAnimationFrame(e):setTimeout(e),n=e=>!!e.shadowRoot&&!!e.attachShadow,d=e=>{const t=e.closest("ion-item");return t?t.querySelector("ion-label"):null},l=(e,t,o,i,r)=>{if(e||n(t)){let e=t.querySelector("input.aux-input");e||(e=t.ownerDocument.createElement("input"),e.type="hidden",e.classList.add("aux-input"),t.appendChild(e)),e.disabled=r,e.name=o,e.value=i||""}},c=(e,t,o)=>Math.max(e,Math.min(t,o)),m=(e,t)=>{if(!e){const e="ASSERT: "+t;throw console.error(e),new Error(e)}},h=e=>e.timeStamp||Date.now(),p=e=>{if(e){const t=e.changedTouches;if(t&&t.length>0){const e=t[0];return{x:e.clientX,y:e.clientY}}if(void 0!==e.pageX)return{x:e.pageX,y:e.pageY}}return{x:0,y:0}},u=e=>{const t="rtl"===document.dir;switch(e){case"start":return t;case"end":return!t;default:throw new Error(`"${e}" is not a valid value for [side]. Use "start" or "end" instead.`)}},f=(e,t)=>{const o=e._original||e;return{_original:e,emit:b(o.emit.bind(o),t)}},b=(e,t=0)=>{let o;return(...i)=>{clearTimeout(o),o=setTimeout(e,t,...i)}}},697:(e,t,o)=>{"use strict";o.d(t,{b:()=>r,c:()=>s,d:()=>a,e:()=>x,g:()=>k,l:()=>g,s:()=>E,t:()=>n});var i=o(2707);const r="ionViewWillLeave",s="ionViewDidLeave",a="ionViewWillUnload",n=e=>new Promise(((t,o)=>{(0,i.c)((()=>{d(e),l(e).then((o=>{o.animation&&o.animation.destroy(),c(e),t(o)}),(t=>{c(e),o(t)}))}))})),d=e=>{const t=e.enteringEl,o=e.leavingEl;S(t,o,e.direction),e.showGoBack?t.classList.add("can-go-back"):t.classList.remove("can-go-back"),E(t,!1),o&&E(o,!1)},l=async e=>{const t=await m(e);return t&&i.B.isBrowser?h(t,e):p(e)},c=e=>{const t=e.enteringEl,o=e.leavingEl;t.classList.remove("ion-page-invisible"),void 0!==o&&o.classList.remove("ion-page-invisible")},m=async e=>{if(e.leavingEl&&e.animated&&0!==e.duration)return e.animationBuilder?e.animationBuilder:"ios"===e.mode?(await Promise.all([o.e(7792),o.e(9454)]).then(o.bind(o,9454))).iosTransitionAnimation:(await Promise.all([o.e(7792),o.e(3039)]).then(o.bind(o,3039))).mdTransitionAnimation},h=async(e,t)=>{await u(t,!0);const o=e(t.baseEl,t);y(t.enteringEl,t.leavingEl);const i=await b(o,t);return t.progressCallback&&t.progressCallback(void 0),i&&w(t.enteringEl,t.leavingEl),{hasCompleted:i,animation:o}},p=async e=>{const t=e.enteringEl,o=e.leavingEl;return await u(e,!1),y(t,o),w(t,o),{hasCompleted:!0}},u=async(e,t)=>{const o=(void 0!==e.deepWait?e.deepWait:t)?[x(e.enteringEl),x(e.leavingEl)]:[v(e.enteringEl),v(e.leavingEl)];await Promise.all(o),await f(e.viewIsReady,e.enteringEl)},f=async(e,t)=>{e&&await e(t)},b=(e,t)=>{const o=t.progressCallback,i=new Promise((t=>{e.onFinish((e=>t(1===e)))}));return o?(e.progressStart(!0),o(e)):e.play(),i},y=(e,t)=>{g(t,r),g(e,"ionViewWillEnter")},w=(e,t)=>{g(e,"ionViewDidEnter"),g(t,s)},g=(e,t)=>{if(e){const o=new CustomEvent(t,{bubbles:!1,cancelable:!1});e.dispatchEvent(o)}},v=e=>e&&e.componentOnReady?e.componentOnReady():Promise.resolve(),x=async e=>{const t=e;if(t){if(null!=t.componentOnReady&&null!=await t.componentOnReady())return;await Promise.all(Array.from(t.children).map(x))}},E=(e,t)=>{t?(e.setAttribute("aria-hidden","true"),e.classList.add("ion-page-hidden")):(e.hidden=!1,e.removeAttribute("aria-hidden"),e.classList.remove("ion-page-hidden"))},S=(e,t,o)=>{void 0!==e&&(e.style.zIndex="back"===o?"99":"101"),void 0!==t&&(t.style.zIndex="100")},k=e=>{if(e.classList.contains("ion-page"))return e;return e.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs")||e}},6326:(e,t,o)=>{"use strict";o.r(t),o.d(t,{GESTURE_CONTROLLER:()=>i.G,createGesture:()=>d});var i=o(4890);const r=(e,t,o,i)=>{const r=s(e)?{capture:!!i.capture,passive:!!i.passive}:!!i.capture;let a,n;return e.__zone_symbol__addEventListener?(a="__zone_symbol__addEventListener",n="__zone_symbol__removeEventListener"):(a="addEventListener",n="removeEventListener"),e[a](t,o,r),()=>{e[n](t,o,r)}},s=e=>{if(void 0===a)try{const t=Object.defineProperty({},"passive",{get:()=>{a=!0}});e.addEventListener("optsTest",(()=>{}),t)}catch(e){a=!1}return!!a};let a;const n=e=>e instanceof Document?e:e.ownerDocument,d=e=>{let t=!1,o=!1,s=!0,a=!1;const d=Object.assign({disableScroll:!1,direction:"x",gesturePriority:0,passive:!0,maxAngle:40,threshold:10},e),h=d.canStart,p=d.onWillStart,u=d.onStart,f=d.onEnd,b=d.notCaptured,y=d.onMove,w=d.threshold,g=d.passive,v=d.blurOnStart,x={type:"pan",startX:0,startY:0,startTime:0,currentX:0,currentY:0,velocityX:0,velocityY:0,deltaX:0,deltaY:0,currentTime:0,event:void 0,data:void 0},E=((e,t,o)=>{const i=o*(Math.PI/180),r="x"===e,s=Math.cos(i),a=t*t;let n=0,d=0,l=!1,c=0;return{start(e,t){n=e,d=t,c=0,l=!0},detect(e,t){if(!l)return!1;const o=e-n,i=t-d,m=o*o+i*i;if(m<a)return!1;const h=Math.sqrt(m),p=(r?o:i)/h;return c=p>s?1:p<-s?-1:0,l=!1,!0},isGesture:()=>0!==c,getDirection:()=>c}})(d.direction,d.threshold,d.maxAngle),S=i.G.createGesture({name:e.gestureName,priority:e.gesturePriority,disableScroll:e.disableScroll}),k=()=>{t&&(a=!1,y&&y(x))},D=()=>!(S&&!S.capture()||(t=!0,s=!1,x.startX=x.currentX,x.startY=x.currentY,x.startTime=x.currentTime,p?p(x).then(A):A(),0)),A=()=>{v&&(()=>{if("undefined"!=typeof document){const e=document.activeElement;null!==e&&e.blur&&e.blur()}})(),u&&u(x),s=!0},M=()=>{t=!1,o=!1,a=!1,s=!0,S.release()},T=e=>{const o=t,i=s;M(),i&&(l(x,e),o?f&&f(x):b&&b(x))},Y=((e,t,o,i,s)=>{let a,d,l,c,m,h,p,u=0;const f=i=>{u=Date.now()+2e3,t(i)&&(!d&&o&&(d=r(e,"touchmove",o,s)),l||(l=r(e,"touchend",y,s)),c||(c=r(e,"touchcancel",y,s)))},b=i=>{u>Date.now()||t(i)&&(!h&&o&&(h=r(n(e),"mousemove",o,s)),p||(p=r(n(e),"mouseup",w,s)))},y=e=>{g(),i&&i(e)},w=e=>{v(),i&&i(e)},g=()=>{d&&d(),l&&l(),c&&c(),d=l=c=void 0},v=()=>{h&&h(),p&&p(),h=p=void 0},x=()=>{g(),v()},E=(t=!0)=>{t?(a||(a=r(e,"touchstart",f,s)),m||(m=r(e,"mousedown",b,s))):(a&&a(),m&&m(),a=m=void 0,x())};return{enable:E,stop:x,destroy:()=>{E(!1),i=o=t=void 0}}})(d.el,(e=>{const t=m(e);return!(o||!s)&&(c(e,x),x.startX=x.currentX,x.startY=x.currentY,x.startTime=x.currentTime=t,x.velocityX=x.velocityY=x.deltaX=x.deltaY=0,x.event=e,(!h||!1!==h(x))&&(S.release(),!!S.start()&&(o=!0,0===w?D():(E.start(x.startX,x.startY),!0))))}),(e=>{t?!a&&s&&(a=!0,l(x,e),requestAnimationFrame(k)):(l(x,e),E.detect(x.currentX,x.currentY)&&(E.isGesture()&&D()||_()))}),T,{capture:!1,passive:g}),_=()=>{M(),Y.stop(),b&&b(x)};return{enable(e=!0){e||(t&&T(void 0),M()),Y.enable(e)},destroy(){S.destroy(),Y.destroy()}}},l=(e,t)=>{if(!t)return;const o=e.currentX,i=e.currentY,r=e.currentTime;c(t,e);const s=e.currentX,a=e.currentY,n=(e.currentTime=m(t))-r;if(n>0&&n<100){const t=(s-o)/n,r=(a-i)/n;e.velocityX=.7*t+.3*e.velocityX,e.velocityY=.7*r+.3*e.velocityY}e.deltaX=s-e.startX,e.deltaY=a-e.startY,e.event=t},c=(e,t)=>{let o=0,i=0;if(e){const t=e.changedTouches;if(t&&t.length>0){const e=t[0];o=e.clientX,i=e.clientY}else void 0!==e.pageX&&(o=e.pageX,i=e.pageY)}t.currentX=o,t.currentY=i},m=e=>e.timeStamp||Date.now()},5881:(e,t,o)=>{"use strict";o.r(t),o.d(t,{ion_modal:()=>w});var i=o(2707),r=o(4550),s=o(900),a=o(7792),n=o(697),d=o(9299),l=(o(4890),o(6326)),c=o(700),m=o(3819),h=o(1479);const p=.93,u=(e,t)=>{const o=(0,a.c)().addElement(e.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),i=(0,a.c)().addElement(e.querySelectorAll(".modal-wrapper, .modal-shadow")).beforeStyles({opacity:1}).fromTo("transform","translateY(100vh)","translateY(0vh)"),r=(0,a.c)().addElement(e).easing("cubic-bezier(0.32,0.72,0,1)").duration(500).addAnimation(i);if(t){const e=window.innerWidth<768,s="ION-MODAL"===t.tagName&&void 0!==t.presentingElement,n=(0,a.c)().beforeStyles({transform:"translateY(0)","transform-origin":"top center",overflow:"hidden"}),d=document.body;if(e){const e=CSS.supports("width","max(0px, 1px)")?"max(30px, var(--ion-safe-area-top))":"30px",o=`translateY(${s?"-10px":e}) scale(0.93)`;n.afterStyles({transform:o}).beforeAddWrite((()=>d.style.setProperty("background-color","black"))).addElement(t).keyframes([{offset:0,filter:"contrast(1)",transform:"translateY(0px) scale(1)",borderRadius:"0px"},{offset:1,filter:"contrast(0.85)",transform:o,borderRadius:"10px 10px 0 0"}]),r.addAnimation(n)}else if(r.addAnimation(o),s){const e=`translateY(-10px) scale(${s?p:1})`;n.afterStyles({transform:e}).addElement(t.querySelector(".modal-wrapper")).keyframes([{offset:0,filter:"contrast(1)",transform:"translateY(0) scale(1)"},{offset:1,filter:"contrast(0.85)",transform:e}]);const o=(0,a.c)().afterStyles({transform:e}).addElement(t.querySelector(".modal-shadow")).keyframes([{offset:0,opacity:"1",transform:"translateY(0) scale(1)"},{offset:1,opacity:"0",transform:e}]);r.addAnimation([n,o])}else i.fromTo("opacity","0","1")}else r.addAnimation(o);return r},f=(e,t,o=500)=>{const i=(0,a.c)().addElement(e.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),r=(0,a.c)().addElement(e.querySelectorAll(".modal-wrapper, .modal-shadow")).beforeStyles({opacity:1}).fromTo("transform","translateY(0vh)","translateY(100vh)"),s=(0,a.c)().addElement(e).easing("cubic-bezier(0.32,0.72,0,1)").duration(o).addAnimation(r);if(t){const e=window.innerWidth<768,o="ION-MODAL"===t.tagName&&void 0!==t.presentingElement,n=(0,a.c)().beforeClearStyles(["transform"]).afterClearStyles(["transform"]).onFinish((e=>{1===e&&(t.style.setProperty("overflow",""),Array.from(d.querySelectorAll("ion-modal")).filter((e=>void 0!==e.presentingElement)).length<=1&&d.style.setProperty("background-color",""))})),d=document.body;if(e){const e=CSS.supports("width","max(0px, 1px)")?"max(30px, var(--ion-safe-area-top))":"30px",i=`translateY(${o?"-10px":e}) scale(0.93)`;n.addElement(t).keyframes([{offset:0,filter:"contrast(0.85)",transform:i,borderRadius:"10px 10px 0 0"},{offset:1,filter:"contrast(1)",transform:"translateY(0px) scale(1)",borderRadius:"0px"}]),s.addAnimation(n)}else if(s.addAnimation(i),o){const e=`translateY(-10px) scale(${o?p:1})`;n.addElement(t.querySelector(".modal-wrapper")).afterStyles({transform:"translate3d(0, 0, 0)"}).keyframes([{offset:0,filter:"contrast(0.85)",transform:e},{offset:1,filter:"contrast(1)",transform:"translateY(0) scale(1)"}]);const i=(0,a.c)().addElement(t.querySelector(".modal-shadow")).afterStyles({transform:"translateY(0) scale(1)"}).keyframes([{offset:0,opacity:"0",transform:e},{offset:1,opacity:"1",transform:"translateY(0) scale(1)"}]);s.addAnimation([n,i])}else r.fromTo("opacity","1","0")}else s.addAnimation(i);return s},b=e=>{const t=(0,a.c)(),o=(0,a.c)(),i=(0,a.c)();return o.addElement(e.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),i.addElement(e.querySelector(".modal-wrapper")).keyframes([{offset:0,opacity:.01,transform:"translateY(40px)"},{offset:1,opacity:1,transform:"translateY(0px)"}]),t.addElement(e).easing("cubic-bezier(0.36,0.66,0.04,1)").duration(280).addAnimation([o,i])},y=e=>{const t=(0,a.c)(),o=(0,a.c)(),i=(0,a.c)(),r=e.querySelector(".modal-wrapper");return o.addElement(e.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),i.addElement(r).keyframes([{offset:0,opacity:.99,transform:"translateY(0px)"},{offset:1,opacity:0,transform:"translateY(40px)"}]),t.addElement(e).easing("cubic-bezier(0.47,0,0.745,0.715)").duration(200).addAnimation([o,i])},w=class{constructor(e){(0,i.r)(this,e),this.didPresent=(0,i.e)(this,"ionModalDidPresent",7),this.willPresent=(0,i.e)(this,"ionModalWillPresent",7),this.willDismiss=(0,i.e)(this,"ionModalWillDismiss",7),this.didDismiss=(0,i.e)(this,"ionModalDidDismiss",7),this.gestureAnimationDismissing=!1,this.presented=!1,this.keyboardClose=!0,this.backdropDismiss=!0,this.showBackdrop=!0,this.animated=!0,this.swipeToClose=!1,this.onBackdropTap=()=>{this.dismiss(void 0,c.B)},this.onDismiss=e=>{e.stopPropagation(),e.preventDefault(),this.dismiss()},this.onLifecycle=e=>{const t=this.usersElement,o=g[e.type];if(t&&o){const i=new CustomEvent(o,{bubbles:!1,cancelable:!1,detail:e.detail});t.dispatchEvent(i)}}}swipeToCloseChanged(e){this.gesture?this.gesture.enable(e):e&&this.initSwipeToClose()}connectedCallback(){(0,c.e)(this.el)}async present(){if(this.presented)return;const e=this.el.querySelector(".modal-wrapper");if(!e)throw new Error("container is undefined");const t=Object.assign(Object.assign({},this.componentProps),{modal:this.el});this.usersElement=await(0,h.a)(this.delegate,e,this.component,["ion-page"],t),await(0,n.e)(this.usersElement),(0,i.c)((()=>this.el.classList.add("show-modal"))),await(0,c.d)(this,"modalEnter",u,b,this.presentingElement),this.swipeToClose&&this.initSwipeToClose()}initSwipeToClose(){if("ios"!==(0,r.b)(this))return;const e=this.leaveAnimation||r.c.get("modalLeave",f),t=this.animation=e(this.el,this.presentingElement);this.gesture=((e,t,o)=>{const i=e.offsetHeight;let r=!1;const a=(0,l.createGesture)({el:e,gestureName:"modalSwipeToClose",gesturePriority:40,direction:"y",threshold:10,canStart:e=>{const t=e.event.target;return null===t||!t.closest||null===t.closest("ion-content")},onStart:()=>{t.progressStart(!0,r?1:0)},onMove:e=>{const o=(0,s.e)(1e-4,e.deltaY/i,.9999);t.progressStep(o)},onEnd:e=>{const n=e.velocityY,l=(0,s.e)(1e-4,e.deltaY/i,.9999),c=(e.deltaY+1e3*n)/i>=.5;let m=c?-.001:.001;c?(t.easing("cubic-bezier(0.32, 0.72, 0, 1)"),m+=(0,d.g)([0,0],[.32,.72],[0,1],[1,1],l)[0]):(t.easing("cubic-bezier(1, 0, 0.68, 0.28)"),m+=(0,d.g)([0,0],[1,0],[.68,.28],[1,1],l)[0]);const h=((e,t)=>(0,s.e)(400,e/Math.abs(1.1*t),500))(c?l*i:(1-l)*i,n);r=c,a.enable(!1),t.onFinish((()=>{c||a.enable(!0)})).progressEnd(c?1:0,m,h),c&&o()}});return a})(this.el,t,(()=>{this.gestureAnimationDismissing=!0,this.animation.onFinish((async()=>{await this.dismiss(void 0,"gesture"),this.gestureAnimationDismissing=!1}))})),this.gesture.enable(!0)}async dismiss(e,t){if(this.gestureAnimationDismissing&&"gesture"!==t)return!1;const o=c.h.get(this)||[],i=await(0,c.f)(this,e,t,"modalLeave",f,y,this.presentingElement);return i&&(await(0,h.d)(this.delegate,this.usersElement),this.animation&&this.animation.destroy(),o.forEach((e=>e.destroy()))),this.animation=void 0,i}onDidDismiss(){return(0,c.g)(this.el,"ionModalDidDismiss")}onWillDismiss(){return(0,c.g)(this.el,"ionModalWillDismiss")}render(){const e=(0,r.b)(this);return(0,i.h)(i.H,{"no-router":!0,"aria-modal":"true",tabindex:"-1",class:Object.assign({[e]:!0,"modal-card":void 0!==this.presentingElement&&"ios"===e},(0,m.g)(this.cssClass)),style:{zIndex:""+(2e4+this.overlayIndex)},onIonBackdropTap:this.onBackdropTap,onIonDismiss:this.onDismiss,onIonModalDidPresent:this.onLifecycle,onIonModalWillPresent:this.onLifecycle,onIonModalWillDismiss:this.onLifecycle,onIonModalDidDismiss:this.onLifecycle},(0,i.h)("ion-backdrop",{visible:this.showBackdrop,tappable:this.backdropDismiss}),"ios"===e&&(0,i.h)("div",{class:"modal-shadow"}),(0,i.h)("div",{tabindex:"0"}),(0,i.h)("div",{role:"dialog",class:"modal-wrapper ion-overlay-wrapper"}),(0,i.h)("div",{tabindex:"0"}))}get el(){return(0,i.i)(this)}static get watchers(){return{swipeToClose:["swipeToCloseChanged"]}}},g={ionModalDidPresent:"ionViewDidEnter",ionModalWillPresent:"ionViewWillEnter",ionModalWillDismiss:"ionViewWillLeave",ionModalDidDismiss:"ionViewDidLeave"};w.style={ios:".sc-ion-modal-ios-h{--width:100%;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--overflow:hidden;--border-radius:0;--border-width:0;--border-style:none;--border-color:transparent;--background:var(--ion-background-color, #fff);--box-shadow:none;--backdrop-opacity:0;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;contain:strict}.overlay-hidden.sc-ion-modal-ios-h{display:none}.modal-wrapper.sc-ion-modal-ios,.modal-shadow.sc-ion-modal-ios{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:var(--overflow);z-index:10}.modal-shadow.sc-ion-modal-ios{position:absolute;background:transparent}@media only screen and (min-width: 768px) and (min-height: 600px){.sc-ion-modal-ios-h{--width:600px;--height:500px;--ion-safe-area-top:0px;--ion-safe-area-bottom:0px;--ion-safe-area-right:0px;--ion-safe-area-left:0px}}@media only screen and (min-width: 768px) and (min-height: 768px){.sc-ion-modal-ios-h{--width:600px;--height:600px}}.sc-ion-modal-ios-h:first-of-type{--backdrop-opacity:var(--ion-backdrop-opacity, 0.4)}@media only screen and (min-width: 768px) and (min-height: 600px){.sc-ion-modal-ios-h{--border-radius:10px}}.modal-wrapper.sc-ion-modal-ios{-webkit-transform:translate3d(0,  100%,  0);transform:translate3d(0,  100%,  0)}@media screen and (max-width: 767px){@supports (width: max(0px, 1px)){.modal-card.sc-ion-modal-ios-h{--height:calc(100% - max(30px, var(--ion-safe-area-top)) - 10px)}}@supports not (width: max(0px, 1px)){.modal-card.sc-ion-modal-ios-h{--height:calc(100% - 40px)}}.modal-card.sc-ion-modal-ios-h .modal-wrapper.sc-ion-modal-ios{border-top-left-radius:10px;border-top-right-radius:10px;border-bottom-right-radius:0;border-bottom-left-radius:0}[dir=rtl].sc-ion-modal-ios-h -no-combinator.modal-card.sc-ion-modal-ios-h .modal-wrapper.sc-ion-modal-ios,[dir=rtl] .sc-ion-modal-ios-h -no-combinator.modal-card.sc-ion-modal-ios-h .modal-wrapper.sc-ion-modal-ios,[dir=rtl].modal-card.sc-ion-modal-ios-h .modal-wrapper.sc-ion-modal-ios,[dir=rtl] .modal-card.sc-ion-modal-ios-h .modal-wrapper.sc-ion-modal-ios{border-top-left-radius:10px;border-top-right-radius:10px;border-bottom-right-radius:0;border-bottom-left-radius:0}.modal-card.sc-ion-modal-ios-h{--backdrop-opacity:0;--width:100%;-ms-flex-align:end;align-items:flex-end}.modal-card.sc-ion-modal-ios-h .modal-shadow.sc-ion-modal-ios{display:none}.modal-card.sc-ion-modal-ios-h ion-backdrop.sc-ion-modal-ios{pointer-events:none}}@media screen and (min-width: 768px){.modal-card.sc-ion-modal-ios-h{--width:calc(100% - 120px);--height:calc(100% - (120px + var(--ion-safe-area-top) + var(--ion-safe-area-bottom)));--max-width:720px;--max-height:1000px}.modal-card.sc-ion-modal-ios-h{--backdrop-opacity:0;-webkit-transition:all 0.5s ease-in-out;transition:all 0.5s ease-in-out}.modal-card.sc-ion-modal-ios-h:first-of-type{--backdrop-opacity:0.18}.modal-card.sc-ion-modal-ios-h .modal-shadow.sc-ion-modal-ios{-webkit-box-shadow:0px 0px 30px 10px rgba(0, 0, 0, 0.1);box-shadow:0px 0px 30px 10px rgba(0, 0, 0, 0.1)}}",md:".sc-ion-modal-md-h{--width:100%;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--overflow:hidden;--border-radius:0;--border-width:0;--border-style:none;--border-color:transparent;--background:var(--ion-background-color, #fff);--box-shadow:none;--backdrop-opacity:0;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;contain:strict}.overlay-hidden.sc-ion-modal-md-h{display:none}.modal-wrapper.sc-ion-modal-md,.modal-shadow.sc-ion-modal-md{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:var(--overflow);z-index:10}.modal-shadow.sc-ion-modal-md{position:absolute;background:transparent}@media only screen and (min-width: 768px) and (min-height: 600px){.sc-ion-modal-md-h{--width:600px;--height:500px;--ion-safe-area-top:0px;--ion-safe-area-bottom:0px;--ion-safe-area-right:0px;--ion-safe-area-left:0px}}@media only screen and (min-width: 768px) and (min-height: 768px){.sc-ion-modal-md-h{--width:600px;--height:600px}}.sc-ion-modal-md-h:first-of-type{--backdrop-opacity:var(--ion-backdrop-opacity, 0.32)}@media only screen and (min-width: 768px) and (min-height: 600px){.sc-ion-modal-md-h{--border-radius:2px}.sc-ion-modal-md-h:first-of-type{--box-shadow:0 28px 48px rgba(0, 0, 0, 0.4)}}.modal-wrapper.sc-ion-modal-md{-webkit-transform:translate3d(0,  40px,  0);transform:translate3d(0,  40px,  0);opacity:0.01}"}},700:(e,t,o)=>{"use strict";o.d(t,{B:()=>_,a:()=>l,b:()=>c,c:()=>h,d:()=>v,e:()=>p,f:()=>E,g:()=>D,h:()=>n,i:()=>M,p:()=>m,s:()=>Y});var i=o(4550),r=o(900),s=o(2416);let a=0;const n=new WeakMap,d=e=>({create:t=>u(e,t),dismiss:(t,o,i)=>w(document,t,o,e,i),getTop:async()=>g(document,e)}),l=d("ion-alert"),c=d("ion-action-sheet"),m=d("ion-picker"),h=d("ion-popover"),p=e=>{"undefined"!=typeof document&&y(document);const t=a++;e.overlayIndex=t,e.hasAttribute("id")||(e.id="ion-overlay-"+t)},u=(e,t)=>"undefined"!=typeof customElements?customElements.whenDefined(e).then((()=>{const o=document.createElement(e);return o.classList.add("overlay-hidden"),Object.assign(o,t),S(document).appendChild(o),o.componentOnReady()})):Promise.resolve(),f='[tabindex]:not([tabindex^="-"]), input:not([type=hidden]):not([tabindex^="-"]), textarea:not([tabindex^="-"]), button:not([tabindex^="-"]), select:not([tabindex^="-"]), .ion-focusable:not([tabindex^="-"])',b="input:not([type=hidden]), textarea, button, select",y=e=>{0===a&&(a=1,e.addEventListener("focus",(t=>((e,t)=>{const o=g(t),i=e.target;if(o&&i)if(o===i)o.lastFocus=void 0;else{const e=(0,r.g)(o);if(!e.contains(i))return;const s=e.querySelector(".ion-overlay-wrapper");if(!s)return;if(s.contains(i))o.lastFocus=i;else{const e=o.lastFocus;((e,t)=>{let o=e.querySelector(f);const i=o&&o.shadowRoot;i&&(o=i.querySelector(b)||o),o?o.focus():t.focus()})(s,o),e===t.activeElement&&((e,t)=>{const o=Array.from(e.querySelectorAll(f));let i=o.length>0?o[o.length-1]:null;const r=i&&i.shadowRoot;r&&(i=r.querySelector(b)||i),i?i.focus():t.focus()})(s,o),o.lastFocus=t.activeElement}}})(t,e)),!0),e.addEventListener("ionBackButton",(t=>{const o=g(e);o&&o.backdropDismiss&&t.detail.register(s.OVERLAY_BACK_BUTTON_PRIORITY,(()=>o.dismiss(void 0,_)))})),e.addEventListener("keyup",(t=>{if("Escape"===t.key){const t=g(e);t&&t.backdropDismiss&&t.dismiss(void 0,_)}})))},w=(e,t,o,i,r)=>{const s=g(e,i,r);return s?s.dismiss(t,o):Promise.reject("overlay does not exist")},g=(e,t,o)=>{const i=((e,t)=>(void 0===t&&(t="ion-alert,ion-action-sheet,ion-loading,ion-modal,ion-picker,ion-popover,ion-toast"),Array.from(e.querySelectorAll(t)).filter((e=>e.overlayIndex>0))))(e,t);return void 0===o?i[i.length-1]:i.find((e=>e.id===o))},v=async(e,t,o,r,s)=>{if(e.presented)return;e.presented=!0,e.willPresent.emit();const a=(0,i.b)(e),n=e.enterAnimation?e.enterAnimation:i.c.get(t,"ios"===a?o:r);await k(e,n,e.el,s)&&e.didPresent.emit(),"ION-TOAST"!==e.el.tagName&&x(e.el),e.keyboardClose&&e.el.focus()},x=async e=>{let t=document.activeElement;if(!t)return;const o=t&&t.shadowRoot;o&&(t=o.querySelector(b)||t),await e.onDidDismiss(),t.focus()},E=async(e,t,o,r,s,a,d)=>{if(!e.presented)return!1;e.presented=!1;try{e.el.style.setProperty("pointer-events","none"),e.willDismiss.emit({data:t,role:o});const l=(0,i.b)(e),c=e.leaveAnimation?e.leaveAnimation:i.c.get(r,"ios"===l?s:a);"gesture"!==o&&await k(e,c,e.el,d),e.didDismiss.emit({data:t,role:o}),n.delete(e)}catch(e){console.error(e)}return e.el.remove(),!0},S=e=>e.querySelector("ion-app")||e.body,k=async(e,t,o,r)=>{o.classList.remove("overlay-hidden");const s=t(o.shadowRoot||e.el,r);e.animated&&i.c.getBoolean("animated",!0)||s.duration(0),e.keyboardClose&&s.beforeAddWrite((()=>{const e=o.ownerDocument.activeElement;e&&e.matches("input, ion-input, ion-textarea")&&e.blur()}));const a=n.get(e)||[];return n.set(e,[...a,s]),await s.play(),!0},D=(e,t)=>{let o;const i=new Promise((e=>o=e));return A(e,t,(e=>{o(e.detail)})),i},A=(e,t,o)=>{const i=s=>{(0,r.b)(e,t,i),o(s)};(0,r.a)(e,t,i)},M=e=>"cancel"===e||e===_,T=e=>e(),Y=(e,t)=>{if("function"==typeof e)return i.c.get("_zoneGate",T)((()=>{try{return e(t)}catch(e){console.error(e)}}))},_="backdrop"},3819:(e,t,o)=>{"use strict";o.d(t,{c:()=>r,g:()=>s,h:()=>i,o:()=>n});const i=(e,t)=>null!==t.closest(e),r=(e,t)=>"string"==typeof e&&e.length>0?Object.assign({"ion-color":!0,["ion-color-"+e]:!0},t):t,s=e=>{const t={};return(e=>void 0!==e?(Array.isArray(e)?e:e.split(" ")).filter((e=>null!=e)).map((e=>e.trim())).filter((e=>""!==e)):[])(e).forEach((e=>t[e]=!0)),t},a=/^[a-z][a-z0-9+\-.]*:/,n=async(e,t,o,i)=>{if(null!=e&&"#"!==e[0]&&!a.test(e)){const r=document.querySelector("ion-router");if(r)return null!=t&&t.preventDefault(),r.push(e,o,i)}return!1}}}]);