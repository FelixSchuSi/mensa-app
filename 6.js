(self.webpackChunkclient=self.webpackChunkclient||[]).push([[6,2416],{9299:(t,e,i)=>{"use strict";i.d(e,{g:()=>n});const n=(t,e,i,n,a)=>s(t[1],e[1],i[1],n[1],a).map((s=>o(t[0],e[0],i[0],n[0],s))),o=(t,e,i,n,o)=>o*(3*e*Math.pow(o-1,2)+o*(-3*i*o+3*i+n*o))-t*Math.pow(o-1,3),s=(t,e,i,n,o)=>a((n-=o)-3*(i-=o)+3*(e-=o)-(t-=o),3*i-6*e+3*t,3*e-3*t,t).filter((t=>t>=0&&t<=1)),a=(t,e,i,n)=>{if(0===t)return((t,e,i)=>{const n=e*e-4*t*i;return n<0?[]:[(-e+Math.sqrt(n))/(2*t),(-e-Math.sqrt(n))/(2*t)]})(e,i,n);const o=(3*(i/=t)-(e/=t)*e)/3,s=(2*e*e*e-9*e*i+27*(n/=t))/27;if(0===o)return[Math.pow(-s,1/3)];if(0===s)return[Math.sqrt(-o),-Math.sqrt(-o)];const a=Math.pow(s/2,2)+Math.pow(o/3,3);if(0===a)return[Math.pow(s/2,.5)-e/3];if(a>0)return[Math.pow(-s/2+Math.sqrt(a),1/3)-Math.pow(s/2+Math.sqrt(a),1/3)-e/3];const r=Math.sqrt(Math.pow(-o/3,3)),d=Math.acos(-s/(2*Math.sqrt(Math.pow(-o/3,3)))),l=2*Math.pow(r,1/3);return[l*Math.cos(d/3)-e/3,l*Math.cos((d+2*Math.PI)/3)-e/3,l*Math.cos((d+4*Math.PI)/3)-e/3]}},4890:(t,e,i)=>{"use strict";i.d(e,{G:()=>a});class n{constructor(t,e,i,n,o){this.id=e,this.name=i,this.disableScroll=o,this.priority=1e6*n+e,this.ctrl=t}canStart(){return!!this.ctrl&&this.ctrl.canStart(this.name)}start(){return!!this.ctrl&&this.ctrl.start(this.name,this.id,this.priority)}capture(){if(!this.ctrl)return!1;const t=this.ctrl.capture(this.name,this.id,this.priority);return t&&this.disableScroll&&this.ctrl.disableScroll(this.id),t}release(){this.ctrl&&(this.ctrl.release(this.id),this.disableScroll&&this.ctrl.enableScroll(this.id))}destroy(){this.release(),this.ctrl=void 0}}class o{constructor(t,e,i,n){this.id=e,this.disable=i,this.disableScroll=n,this.ctrl=t}block(){if(this.ctrl){if(this.disable)for(const t of this.disable)this.ctrl.disableGesture(t,this.id);this.disableScroll&&this.ctrl.disableScroll(this.id)}}unblock(){if(this.ctrl){if(this.disable)for(const t of this.disable)this.ctrl.enableGesture(t,this.id);this.disableScroll&&this.ctrl.enableScroll(this.id)}}destroy(){this.unblock(),this.ctrl=void 0}}const s="backdrop-no-scroll",a=new class{constructor(){this.gestureId=0,this.requestedStart=new Map,this.disabledGestures=new Map,this.disabledScroll=new Set}createGesture(t){return new n(this,this.newID(),t.name,t.priority||0,!!t.disableScroll)}createBlocker(t={}){return new o(this,this.newID(),t.disable,!!t.disableScroll)}start(t,e,i){return this.canStart(t)?(this.requestedStart.set(e,i),!0):(this.requestedStart.delete(e),!1)}capture(t,e,i){if(!this.start(t,e,i))return!1;const n=this.requestedStart;let o=-1e4;if(n.forEach((t=>{o=Math.max(o,t)})),o===i){this.capturedId=e,n.clear();const i=new CustomEvent("ionGestureCaptured",{detail:{gestureName:t}});return document.dispatchEvent(i),!0}return n.delete(e),!1}release(t){this.requestedStart.delete(t),this.capturedId===t&&(this.capturedId=void 0)}disableGesture(t,e){let i=this.disabledGestures.get(t);void 0===i&&(i=new Set,this.disabledGestures.set(t,i)),i.add(e)}enableGesture(t,e){const i=this.disabledGestures.get(t);void 0!==i&&i.delete(e)}disableScroll(t){this.disabledScroll.add(t),1===this.disabledScroll.size&&document.body.classList.add(s)}enableScroll(t){this.disabledScroll.delete(t),0===this.disabledScroll.size&&document.body.classList.remove(s)}canStart(t){return void 0===this.capturedId&&!this.isDisabled(t)}isCaptured(){return void 0!==this.capturedId}isScrollDisabled(){return this.disabledScroll.size>0}isDisabled(t){const e=this.disabledGestures.get(t);return!!(e&&e.size>0)}newID(){return this.gestureId++,this.gestureId}}},2416:(t,e,i)=>{"use strict";i.r(e),i.d(e,{MENU_BACK_BUTTON_PRIORITY:()=>s,OVERLAY_BACK_BUTTON_PRIORITY:()=>o,startHardwareBackButton:()=>n});const n=()=>{const t=document;let e=!1;t.addEventListener("backbutton",(()=>{if(e)return;let i=0,n=[];const o=new CustomEvent("ionBackButton",{bubbles:!1,detail:{register(t,e){n.push({priority:t,handler:e,id:i++})}}});t.dispatchEvent(o);const s=()=>{if(n.length>0){let t={priority:Number.MIN_SAFE_INTEGER,handler:()=>{},id:-1};n.forEach((e=>{e.priority>=t.priority&&(t=e)})),e=!0,n=n.filter((e=>e.id!==t.id)),(async t=>{try{if(t&&t.handler){const e=t.handler(s);null!=e&&await e}}catch(t){console.error(t)}})(t).then((()=>e=!1))}};s()}))},o=100,s=99},900:(t,e,i)=>{"use strict";i.d(e,{a:()=>n,b:()=>o,c:()=>l,d:()=>b,e:()=>h,f:()=>d,g:()=>s,h:()=>r,i:()=>c,j:()=>m,k:()=>g,n:()=>u,p:()=>p,r:()=>a});const n=(t,e,i,n)=>{if("undefined"!=typeof window){const o=window,s=o&&o.Ionic&&o.Ionic.config;if(s){const o=s.get("_ael");if(o)return o(t,e,i,n);if(s._ael)return s._ael(t,e,i,n)}}return t.addEventListener(e,i,n)},o=(t,e,i,n)=>{if("undefined"!=typeof window){const o=window,s=o&&o.Ionic&&o.Ionic.config;if(s){const o=s.get("_rel");if(o)return o(t,e,i,n);if(s._rel)return s._rel(t,e,i,n)}}return t.removeEventListener(e,i,n)},s=(t,e=t)=>t.shadowRoot||e,a=t=>"function"==typeof __zone_symbol__requestAnimationFrame?__zone_symbol__requestAnimationFrame(t):"function"==typeof requestAnimationFrame?requestAnimationFrame(t):setTimeout(t),r=t=>!!t.shadowRoot&&!!t.attachShadow,d=t=>{const e=t.closest("ion-item");return e?e.querySelector("ion-label"):null},l=(t,e,i,n,o)=>{if(t||r(e)){let t=e.querySelector("input.aux-input");t||(t=e.ownerDocument.createElement("input"),t.type="hidden",t.classList.add("aux-input"),e.appendChild(t)),t.disabled=o,t.name=i,t.value=n||""}},h=(t,e,i)=>Math.max(t,Math.min(e,i)),c=(t,e)=>{if(!t){const t="ASSERT: "+e;throw console.error(t),new Error(t)}},u=t=>t.timeStamp||Date.now(),p=t=>{if(t){const e=t.changedTouches;if(e&&e.length>0){const t=e[0];return{x:t.clientX,y:t.clientY}}if(void 0!==t.pageX)return{x:t.pageX,y:t.pageY}}return{x:0,y:0}},m=t=>{const e="rtl"===document.dir;switch(t){case"start":return e;case"end":return!e;default:throw new Error(`"${t}" is not a valid value for [side]. Use "start" or "end" instead.`)}},b=(t,e)=>{const i=t._original||t;return{_original:t,emit:g(i.emit.bind(i),e)}},g=(t,e=0)=>{let i;return(...n)=>{clearTimeout(i),i=setTimeout(t,e,...n)}}},6:(t,e,i)=>{"use strict";i.r(e),i.d(e,{ion_menu:()=>g,ion_menu_button:()=>E,ion_menu_toggle:()=>S});var n=i(2707),o=i(4550),s=i(900),a=i(7792),r=i(9299),d=i(4890),l=i(2416);const h=t=>(0,a.c)().duration(t?400:300),c=t=>{let e,i;const n=t.width+8,s=(0,a.c)(),r=(0,a.c)();t.isEndSide?(e=n+"px",i="0px"):(e=-n+"px",i="0px"),s.addElement(t.menuInnerEl).fromTo("transform",`translateX(${e})`,`translateX(${i})`);const d="ios"===(0,o.b)(t),l=d?.2:.25;return r.addElement(t.backdropEl).fromTo("opacity",.01,l),h(d).addAnimation([s,r])},u=t=>{let e,i;const n=(0,o.b)(t),s=t.width;t.isEndSide?(e=-s+"px",i=s+"px"):(e=s+"px",i=-s+"px");const r=(0,a.c)().addElement(t.menuInnerEl).fromTo("transform",`translateX(${i})`,"translateX(0px)"),d=(0,a.c)().addElement(t.contentEl).fromTo("transform","translateX(0px)",`translateX(${e})`),l=(0,a.c)().addElement(t.backdropEl).fromTo("opacity",.01,.32);return h("ios"===n).addAnimation([r,d,l])},p=t=>{const e=(0,o.b)(t),i=t.width*(t.isEndSide?-1:1)+"px",n=(0,a.c)().addElement(t.contentEl).fromTo("transform","translateX(0px)",`translateX(${i})`);return h("ios"===e).addAnimation(n)},m=(()=>{const t=new Map,e=[],i=async t=>{if(await h(),"start"===t||"end"===t){return d((e=>e.side===t&&!e.disabled))||d((e=>e.side===t))}if(null!=t)return d((e=>e.menuId===t));return d((t=>!t.disabled))||(e.length>0?e[0].el:void 0)},n=async()=>(await h(),a()),o=(e,i)=>{t.set(e,i)},s=t=>{const i=t.side;e.filter((e=>e.side===i&&e!==t)).forEach((t=>t.disabled=!0))},a=()=>d((t=>t._isOpen)),r=()=>e.some((t=>t.isAnimating)),d=t=>{const i=e.find(t);if(void 0!==i)return i.el},h=()=>Promise.all(Array.from(document.querySelectorAll("ion-menu")).map((t=>t.componentOnReady())));return o("reveal",p),o("push",u),o("overlay",c),"undefined"!=typeof document&&document.addEventListener("ionBackButton",(t=>{const e=a();e&&t.detail.register(l.MENU_BACK_BUTTON_PRIORITY,(()=>e.close()))})),{registerAnimation:o,get:i,getMenus:async()=>(await h(),e.map((t=>t.el))),getOpen:n,isEnabled:async t=>{const e=await i(t);return!!e&&!e.disabled},swipeGesture:async(t,e)=>{const n=await i(e);return n&&(n.swipeGesture=t),n},isAnimating:async()=>(await h(),r()),isOpen:async t=>{if(null!=t){const e=await i(t);return void 0!==e&&e.isOpen()}return void 0!==await n()},enable:async(t,e)=>{const n=await i(e);return n&&(n.disabled=!t),n},toggle:async t=>{const e=await i(t);return!!e&&e.toggle()},close:async t=>{const e=await(void 0!==t?i(t):n());return void 0!==e&&e.close()},open:async t=>{const e=await i(t);return!!e&&e.open()},_getOpenSync:a,_createAnimation:(e,i)=>{const n=t.get(e);if(!n)throw new Error("animation not registered");return n(i)},_register:t=>{e.indexOf(t)<0&&(t.disabled||s(t),e.push(t))},_unregister:t=>{const i=e.indexOf(t);i>-1&&e.splice(i,1)},_setOpen:async(t,e,i)=>{if(r())return!1;if(e){const e=await n();e&&t.el!==e&&await e.setOpen(!1,!1)}return t._setOpen(e,i)},_setActiveMenu:s}})();var b=i(3819);const g=class{constructor(t){(0,n.r)(this,t),this.ionWillOpen=(0,n.e)(this,"ionWillOpen",7),this.ionWillClose=(0,n.e)(this,"ionWillClose",7),this.ionDidOpen=(0,n.e)(this,"ionDidOpen",7),this.ionDidClose=(0,n.e)(this,"ionDidClose",7),this.ionMenuChange=(0,n.e)(this,"ionMenuChange",7),this.lastOnEnd=0,this.blocker=d.G.createBlocker({disableScroll:!0}),this.isAnimating=!1,this._isOpen=!1,this.isPaneVisible=!1,this.isEndSide=!1,this.disabled=!1,this.side="start",this.swipeGesture=!0,this.maxEdgeStart=50}typeChanged(t,e){const i=this.contentEl;i&&(void 0!==e&&i.classList.remove("menu-content-"+e),i.classList.add("menu-content-"+t),i.removeAttribute("style")),this.menuInnerEl&&this.menuInnerEl.removeAttribute("style"),this.animation=void 0}disabledChanged(){this.updateState(),this.ionMenuChange.emit({disabled:this.disabled,open:this._isOpen})}sideChanged(){this.isEndSide=(0,s.j)(this.side)}swipeGestureChanged(){this.updateState()}async connectedCallback(){void 0===this.type&&(this.type=o.c.get("menuType","overlay"));const t=this.el.parentNode;void 0===this.contentId&&console.warn('[DEPRECATED][ion-menu] Using the [main] attribute is deprecated, please use the "contentId" property instead:\nBEFORE:\n  <ion-menu>...</ion-menu>\n  <div main>...</div>\n\nAFTER:\n  <ion-menu contentId="main-content"></ion-menu>\n  <div id="main-content">...</div>\n');const e=void 0!==this.contentId?document.getElementById(this.contentId):t&&t.querySelector&&t.querySelector("[main]");e&&e.tagName?(this.contentEl=e,e.classList.add("menu-content"),this.typeChanged(this.type,void 0),this.sideChanged(),m._register(this),this.gesture=(await i.e(6322).then(i.bind(i,6326))).createGesture({el:document,gestureName:"menu-swipe",gesturePriority:30,threshold:10,blurOnStart:!0,canStart:t=>this.canStart(t),onWillStart:()=>this.onWillStart(),onStart:()=>this.onStart(),onMove:t=>this.onMove(t),onEnd:t=>this.onEnd(t)}),this.updateState()):console.error('Menu: must have a "content" element to listen for drag events on.')}async componentDidLoad(){this.ionMenuChange.emit({disabled:this.disabled,open:this._isOpen}),this.updateState()}disconnectedCallback(){this.blocker.destroy(),m._unregister(this),this.animation&&this.animation.destroy(),this.gesture&&(this.gesture.destroy(),this.gesture=void 0),this.animation=void 0,this.contentEl=this.backdropEl=this.menuInnerEl=void 0}onSplitPaneChanged(t){this.isPaneVisible=t.detail.isPane(this.el),this.updateState()}onBackdropClick(t){this._isOpen&&this.lastOnEnd<t.timeStamp-100&&t.composedPath&&!t.composedPath().includes(this.menuInnerEl)&&(t.preventDefault(),t.stopPropagation(),this.close())}isOpen(){return Promise.resolve(this._isOpen)}isActive(){return Promise.resolve(this._isActive())}open(t=!0){return this.setOpen(!0,t)}close(t=!0){return this.setOpen(!1,t)}toggle(t=!0){return this.setOpen(!this._isOpen,t)}setOpen(t,e=!0){return m._setOpen(this,t,e)}async _setOpen(t,e=!0){return!(!this._isActive()||this.isAnimating||t===this._isOpen||(this.beforeAnimation(t),await this.loadAnimation(),await this.startAnimation(t,e),this.afterAnimation(t),0))}async loadAnimation(){const t=this.menuInnerEl.offsetWidth;t===this.width&&void 0!==this.animation||(this.width=t,this.animation&&(this.animation.destroy(),this.animation=void 0),this.animation=await m._createAnimation(this.type,this),o.c.getBoolean("animated",!0)||this.animation.duration(0),this.animation.fill("both"))}async startAnimation(t,e){const i=!t,n=(0,o.b)(this),s="ios"===n?"cubic-bezier(0.32,0.72,0,1)":"cubic-bezier(0.0,0.0,0.2,1)",a="ios"===n?"cubic-bezier(1, 0, 0.68, 0.28)":"cubic-bezier(0.4, 0, 0.6, 1)",r=this.animation.direction(i?"reverse":"normal").easing(i?a:s).onFinish((()=>{"reverse"===r.getDirection()&&r.direction("normal")}));e?await r.play():r.play({sync:!0})}_isActive(){return!this.disabled&&!this.isPaneVisible}canSwipe(){return this.swipeGesture&&!this.isAnimating&&this._isActive()}canStart(t){return!(document.querySelector("ion-modal.show-modal")||!this.canSwipe())&&(!!this._isOpen||!m._getOpenSync()&&v(window,t.currentX,this.isEndSide,this.maxEdgeStart))}onWillStart(){return this.beforeAnimation(!this._isOpen),this.loadAnimation()}onStart(){this.isAnimating&&this.animation?this.animation.progressStart(!0,this._isOpen?1:0):(0,s.i)(!1,"isAnimating has to be true")}onMove(t){if(!this.isAnimating||!this.animation)return void(0,s.i)(!1,"isAnimating has to be true");const e=f(t.deltaX,this._isOpen,this.isEndSide)/this.width;this.animation.progressStep(this._isOpen?1-e:e)}onEnd(t){if(!this.isAnimating||!this.animation)return void(0,s.i)(!1,"isAnimating has to be true");const e=this._isOpen,i=this.isEndSide,n=f(t.deltaX,e,i),o=this.width,a=n/o,d=t.velocityX,l=o/2,h=d>=0&&(d>.2||t.deltaX>l),c=d<=0&&(d<-.2||t.deltaX<-l),u=e?i?h:c:i?c:h;let p=!e&&u;e&&!u&&(p=!0),this.lastOnEnd=t.currentTime;let m=u?.001:-.001;const b=a<0?.01:a;m+=(0,r.g)([0,0],[.4,0],[.6,1],[1,1],(0,s.e)(0,b,.9999))[0]||0;const g=this._isOpen?!u:u;this.animation.easing("cubic-bezier(0.4, 0.0, 0.6, 1)").onFinish((()=>this.afterAnimation(p)),{oneTimeCallback:!0}).progressEnd(g?1:0,this._isOpen?1-m:m,300)}beforeAnimation(t){(0,s.i)(!this.isAnimating,"_before() should not be called while animating"),this.el.classList.add(w),this.backdropEl&&this.backdropEl.classList.add(y),this.blocker.block(),this.isAnimating=!0,t?this.ionWillOpen.emit():this.ionWillClose.emit()}afterAnimation(t){(0,s.i)(this.isAnimating,"_before() should be called while animating"),this._isOpen=t,this.isAnimating=!1,this._isOpen||this.blocker.unblock(),t?(this.contentEl&&this.contentEl.classList.add(x),this.ionDidOpen.emit()):(this.el.classList.remove(w),this.contentEl&&this.contentEl.classList.remove(x),this.backdropEl&&this.backdropEl.classList.remove(y),this.animation&&this.animation.stop(),this.ionDidClose.emit())}updateState(){const t=this._isActive();this.gesture&&this.gesture.enable(t&&this.swipeGesture),!t&&this._isOpen&&this.forceClosing(),this.disabled||m._setActiveMenu(this),(0,s.i)(!this.isAnimating,"can not be animating")}forceClosing(){(0,s.i)(this._isOpen,"menu cannot be closed"),this.isAnimating=!0,this.animation.direction("reverse").play({sync:!0}),this.afterAnimation(!1)}render(){const{isEndSide:t,type:e,disabled:i,isPaneVisible:s}=this,a=(0,o.b)(this);return(0,n.h)(n.H,{role:"navigation",class:{[a]:!0,["menu-type-"+e]:!0,"menu-enabled":!i,"menu-side-end":t,"menu-side-start":!t,"menu-pane-visible":s}},(0,n.h)("div",{class:"menu-inner",part:"container",ref:t=>this.menuInnerEl=t},(0,n.h)("slot",null)),(0,n.h)("ion-backdrop",{ref:t=>this.backdropEl=t,class:"menu-backdrop",tappable:!1,stopPropagation:!1,part:"backdrop"}))}get el(){return(0,n.i)(this)}static get watchers(){return{type:["typeChanged"],disabled:["disabledChanged"],side:["sideChanged"],swipeGesture:["swipeGestureChanged"]}}},f=(t,e,i)=>Math.max(0,e!==i?-t:t),v=(t,e,i,n)=>i?e>=t.innerWidth-n:e<=n,w="show-menu",y="show-backdrop",x="menu-content-open";g.style={ios:":host{--width:304px;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--background:var(--ion-background-color, #fff);left:0;right:0;top:0;bottom:0;display:none;position:absolute;contain:strict}:host(.show-menu){display:block}.menu-inner{left:0;right:auto;top:0;bottom:0;-webkit-transform:translate3d(-9999px,  0,  0);transform:translate3d(-9999px,  0,  0);display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:justify;justify-content:space-between;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);contain:strict}[dir=rtl] .menu-inner,:host-context([dir=rtl]) .menu-inner{left:unset;right:unset;left:auto;right:0}[dir=rtl] .menu-inner,:host-context([dir=rtl]) .menu-inner{-webkit-transform:translate3d(calc(-1 * -9999px),  0,  0);transform:translate3d(calc(-1 * -9999px),  0,  0)}:host(.menu-side-start) .menu-inner{--ion-safe-area-right:0px;right:auto;left:0}:host(.menu-side-end) .menu-inner{--ion-safe-area-left:0px;right:0;left:auto;}ion-backdrop{display:none;opacity:0.01;z-index:-1}@media (max-width: 340px){.menu-inner{--width:264px}}:host(.menu-type-reveal){z-index:0}:host(.menu-type-reveal.show-menu) .menu-inner{-webkit-transform:translate3d(0,  0,  0);transform:translate3d(0,  0,  0)}:host(.menu-type-overlay){z-index:1000}:host(.menu-type-overlay) .show-backdrop{display:block;cursor:pointer}:host(.menu-pane-visible){width:var(--width);min-width:var(--min-width);max-width:var(--max-width)}:host(.menu-pane-visible) .menu-inner{left:0;right:0;width:auto;-webkit-transform:none !important;transform:none !important;-webkit-box-shadow:none !important;box-shadow:none !important}:host(.menu-pane-visible) ion-backdrop{display:hidden !important;}:host(.menu-type-push){z-index:1000}:host(.menu-type-push) .show-backdrop{display:block}",md:":host{--width:304px;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--background:var(--ion-background-color, #fff);left:0;right:0;top:0;bottom:0;display:none;position:absolute;contain:strict}:host(.show-menu){display:block}.menu-inner{left:0;right:auto;top:0;bottom:0;-webkit-transform:translate3d(-9999px,  0,  0);transform:translate3d(-9999px,  0,  0);display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:justify;justify-content:space-between;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);contain:strict}[dir=rtl] .menu-inner,:host-context([dir=rtl]) .menu-inner{left:unset;right:unset;left:auto;right:0}[dir=rtl] .menu-inner,:host-context([dir=rtl]) .menu-inner{-webkit-transform:translate3d(calc(-1 * -9999px),  0,  0);transform:translate3d(calc(-1 * -9999px),  0,  0)}:host(.menu-side-start) .menu-inner{--ion-safe-area-right:0px;right:auto;left:0}:host(.menu-side-end) .menu-inner{--ion-safe-area-left:0px;right:0;left:auto;}ion-backdrop{display:none;opacity:0.01;z-index:-1}@media (max-width: 340px){.menu-inner{--width:264px}}:host(.menu-type-reveal){z-index:0}:host(.menu-type-reveal.show-menu) .menu-inner{-webkit-transform:translate3d(0,  0,  0);transform:translate3d(0,  0,  0)}:host(.menu-type-overlay){z-index:1000}:host(.menu-type-overlay) .show-backdrop{display:block;cursor:pointer}:host(.menu-pane-visible){width:var(--width);min-width:var(--min-width);max-width:var(--max-width)}:host(.menu-pane-visible) .menu-inner{left:0;right:0;width:auto;-webkit-transform:none !important;transform:none !important;-webkit-box-shadow:none !important;box-shadow:none !important}:host(.menu-pane-visible) ion-backdrop{display:hidden !important;}:host(.menu-type-overlay) .menu-inner{-webkit-box-shadow:4px 0px 16px rgba(0, 0, 0, 0.18);box-shadow:4px 0px 16px rgba(0, 0, 0, 0.18)}"};const k=async t=>{const e=await m.get(t);return!(!e||!await e.isActive())},E=class{constructor(t){(0,n.r)(this,t),this.visible=!1,this.disabled=!1,this.autoHide=!0,this.type="button",this.onClick=async()=>m.toggle(this.menu)}componentDidLoad(){this.visibilityChanged()}async visibilityChanged(){this.visible=await k(this.menu)}render(){const{color:t,disabled:e}=this,i=(0,o.b)(this),s=o.c.get("menuIcon","ios"===i?"menu-outline":"menu-sharp"),a=this.autoHide&&!this.visible,r={type:this.type};return(0,n.h)(n.H,{onClick:this.onClick,"aria-disabled":e?"true":null,"aria-hidden":a?"true":null,class:(0,b.c)(t,{[i]:!0,button:!0,"menu-button-hidden":a,"menu-button-disabled":e,"in-toolbar":(0,b.h)("ion-toolbar",this.el),"in-toolbar-color":(0,b.h)("ion-toolbar[color]",this.el),"ion-activatable":!0,"ion-focusable":!0})},(0,n.h)("button",Object.assign({},r,{disabled:e,class:"button-native",part:"native","aria-label":"menu"}),(0,n.h)("span",{class:"button-inner"},(0,n.h)("slot",null,(0,n.h)("ion-icon",{part:"icon",icon:s,mode:i,lazy:!1,"aria-hidden":"true"}))),"md"===i&&(0,n.h)("ion-ripple-effect",{type:"unbounded"})))}get el(){return(0,n.i)(this)}};E.style={ios:':host{--background:transparent;--color-focused:currentColor;--border-radius:initial;--padding-top:0;--padding-bottom:0;color:var(--color);text-align:center;text-decoration:none;text-overflow:ellipsis;text-transform:none;white-space:nowrap;-webkit-font-kerning:none;font-kerning:none}.button-native{border-radius:var(--border-radius);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;border:0;outline:none;background:var(--background);line-height:1;cursor:pointer;overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:0;-webkit-appearance:none;-moz-appearance:none;appearance:none}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.button-native{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;z-index:1}ion-icon{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;pointer-events:none}:host(.menu-button-hidden){display:none}:host(.menu-button-disabled){cursor:default;opacity:0.5;pointer-events:none}:host(.ion-focused) .button-native{color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}@media (any-hover: hover){:host(:hover) .button-native{color:var(--color-hover)}:host(:hover) .button-native::after{background:var(--background-hover);opacity:var(--background-hover-opacity, 0)}}:host(.ion-color) .button-native{color:var(--ion-color-base)}:host(.in-toolbar:not(.in-toolbar-color)){color:var(--ion-toolbar-color, var(--color))}:host{--background-focused:currentColor;--background-focused-opacity:.1;--border-radius:4px;--color:var(--ion-color-primary, #3880ff);--padding-start:5px;--padding-end:5px;height:32px;font-size:31px}:host(.ion-activated){opacity:0.4}@media (any-hover: hover){:host(:hover){opacity:0.6}}',md:':host{--background:transparent;--color-focused:currentColor;--border-radius:initial;--padding-top:0;--padding-bottom:0;color:var(--color);text-align:center;text-decoration:none;text-overflow:ellipsis;text-transform:none;white-space:nowrap;-webkit-font-kerning:none;font-kerning:none}.button-native{border-radius:var(--border-radius);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;border:0;outline:none;background:var(--background);line-height:1;cursor:pointer;overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:0;-webkit-appearance:none;-moz-appearance:none;appearance:none}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.button-native{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;z-index:1}ion-icon{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;pointer-events:none}:host(.menu-button-hidden){display:none}:host(.menu-button-disabled){cursor:default;opacity:0.5;pointer-events:none}:host(.ion-focused) .button-native{color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}@media (any-hover: hover){:host(:hover) .button-native{color:var(--color-hover)}:host(:hover) .button-native::after{background:var(--background-hover);opacity:var(--background-hover-opacity, 0)}}:host(.ion-color) .button-native{color:var(--ion-color-base)}:host(.in-toolbar:not(.in-toolbar-color)){color:var(--ion-toolbar-color, var(--color))}:host{--background-focused:currentColor;--background-focused-opacity:.12;--background-hover:currentColor;--background-hover-opacity:.04;--border-radius:50%;--color:initial;--padding-start:8px;--padding-end:8px;width:48px;height:48px;font-size:24px}:host(.ion-color.ion-focused)::after{background:var(--ion-color-base)}@media (any-hover: hover){:host(.ion-color:hover) .button-native::after{background:var(--ion-color-base)}}'};const S=class{constructor(t){(0,n.r)(this,t),this.visible=!1,this.autoHide=!0,this.onClick=()=>m.toggle(this.menu)}connectedCallback(){this.visibilityChanged()}async visibilityChanged(){this.visible=await k(this.menu)}render(){const t=(0,o.b)(this),e=this.autoHide&&!this.visible;return(0,n.h)(n.H,{onClick:this.onClick,"aria-hidden":e?"true":null,class:{[t]:!0,"menu-toggle-hidden":e}},(0,n.h)("slot",null))}};S.style=":host(.menu-toggle-hidden){display:none}"},3819:(t,e,i)=>{"use strict";i.d(e,{c:()=>o,g:()=>s,h:()=>n,o:()=>r});const n=(t,e)=>null!==e.closest(t),o=(t,e)=>"string"==typeof t&&t.length>0?Object.assign({"ion-color":!0,["ion-color-"+t]:!0},e):e,s=t=>{const e={};return(t=>void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter((t=>null!=t)).map((t=>t.trim())).filter((t=>""!==t)):[])(t).forEach((t=>e[t]=!0)),e},a=/^[a-z][a-z0-9+\-.]*:/,r=async(t,e,i,n)=>{if(null!=t&&"#"!==t[0]&&!a.test(t)){const o=document.querySelector("ion-router");if(o)return null!=e&&e.preventDefault(),o.push(t,i,n)}return!1}}}]);