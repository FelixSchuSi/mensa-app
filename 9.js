(window.webpackJsonp=window.webpackJsonp||[]).push([[9,46],{77:function(t,e,n){"use strict";n.r(e),n.d(e,"ion_menu",(function(){return b})),n.d(e,"ion_menu_button",(function(){return E})),n.d(e,"ion_menu_toggle",(function(){return O}));var i=n(1),o=n(4),a=n(79),r=n(83),s=n(89),d=n(81),l=n(82);const c=t=>Object(r.a)().duration(t?400:300),h=t=>{let e,n;const i=t.width+8,a=Object(r.a)(),s=Object(r.a)();t.isEndSide?(e=i+"px",n="0px"):(e=-i+"px",n="0px"),a.addElement(t.menuInnerEl).fromTo("transform",`translateX(${e})`,`translateX(${n})`);const d="ios"===Object(o.b)(t),l=d?.2:.25;return s.addElement(t.backdropEl).fromTo("opacity",.01,l),c(d).addAnimation([a,s])},u=t=>{let e,n;const i=Object(o.b)(t),a=t.width;t.isEndSide?(e=-a+"px",n=a+"px"):(e=a+"px",n=-a+"px");const s=Object(r.a)().addElement(t.menuInnerEl).fromTo("transform",`translateX(${n})`,"translateX(0px)"),d=Object(r.a)().addElement(t.contentEl).fromTo("transform","translateX(0px)",`translateX(${e})`),l=Object(r.a)().addElement(t.backdropEl).fromTo("opacity",.01,.32);return c("ios"===i).addAnimation([s,d,l])},m=t=>{const e=Object(o.b)(t),n=t.width*(t.isEndSide?-1:1)+"px",i=Object(r.a)().addElement(t.contentEl).fromTo("transform","translateX(0px)",`translateX(${n})`);return c("ios"===e).addAnimation(i)},p=(()=>{const t=new Map,e=[],n=async t=>{if(await p(),"start"===t||"end"===t){const e=c(e=>e.side===t&&!e.disabled);return e||c(e=>e.side===t)}if(null!=t)return c(e=>e.menuId===t);const n=c(t=>!t.disabled);return n||(e.length>0?e[0].el:void 0)},i=async()=>(await p(),r()),o=(e,n)=>{t.set(e,n)},a=t=>{const n=t.side;e.filter(e=>e.side===n&&e!==t).forEach(t=>t.disabled=!0)},r=()=>c(t=>t._isOpen),s=()=>e.map(t=>t.el),d=()=>e.some(t=>t.isAnimating),c=t=>{const n=e.find(t);if(void 0!==n)return n.el},p=()=>Promise.all(Array.from(document.querySelectorAll("ion-menu")).map(t=>t.componentOnReady()));return o("reveal",m),o("push",u),o("overlay",h),"undefined"!=typeof document&&document.addEventListener("ionBackButton",t=>{const e=r();e&&t.detail.register(l.MENU_BACK_BUTTON_PRIORITY,()=>e.close())}),{registerAnimation:o,get:n,getMenus:async()=>(await p(),s()),getOpen:i,isEnabled:async t=>{const e=await n(t);return!!e&&!e.disabled},swipeGesture:async(t,e)=>{const i=await n(e);return i&&(i.swipeGesture=t),i},isAnimating:async()=>(await p(),d()),isOpen:async t=>{if(null!=t){const e=await n(t);return void 0!==e&&e.isOpen()}return void 0!==await i()},enable:async(t,e)=>{const i=await n(e);return i&&(i.disabled=!t),i},toggle:async t=>{const e=await n(t);return!!e&&e.toggle()},close:async t=>{const e=await(void 0!==t?n(t):i());return void 0!==e&&e.close()},open:async t=>{const e=await n(t);return!!e&&e.open()},_getOpenSync:r,_createAnimation:(e,n)=>{const i=t.get(e);if(!i)throw new Error("animation not registered");return i(n)},_register:t=>{e.indexOf(t)<0&&(t.disabled||a(t),e.push(t))},_unregister:t=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},_setOpen:async(t,e,n)=>{if(d())return!1;if(e){const e=await i();e&&t.el!==e&&await e.setOpen(!1,!1)}return t._setOpen(e,n)},_setActiveMenu:a}})();var f=n(80);const b=class{constructor(t){Object(i.o)(this,t),this.ionWillOpen=Object(i.g)(this,"ionWillOpen",7),this.ionWillClose=Object(i.g)(this,"ionWillClose",7),this.ionDidOpen=Object(i.g)(this,"ionDidOpen",7),this.ionDidClose=Object(i.g)(this,"ionDidClose",7),this.ionMenuChange=Object(i.g)(this,"ionMenuChange",7),this.lastOnEnd=0,this.blocker=d.a.createBlocker({disableScroll:!0}),this.isAnimating=!1,this._isOpen=!1,this.isPaneVisible=!1,this.isEndSide=!1,this.disabled=!1,this.side="start",this.swipeGesture=!0,this.maxEdgeStart=50}typeChanged(t,e){const n=this.contentEl;n&&(void 0!==e&&n.classList.remove("menu-content-"+e),n.classList.add("menu-content-"+t),n.removeAttribute("style")),this.menuInnerEl&&this.menuInnerEl.removeAttribute("style"),this.animation=void 0}disabledChanged(){this.updateState(),this.ionMenuChange.emit({disabled:this.disabled,open:this._isOpen})}sideChanged(){this.isEndSide=Object(a.j)(this.side)}swipeGestureChanged(){this.updateState()}async connectedCallback(){void 0===this.type&&(this.type=o.c.get("menuType","overlay"));const t=this.el.parentNode;void 0===this.contentId&&console.warn('[DEPRECATED][ion-menu] Using the [main] attribute is deprecated, please use the "contentId" property instead:\nBEFORE:\n  <ion-menu>...</ion-menu>\n  <div main>...</div>\n\nAFTER:\n  <ion-menu contentId="main-content"></ion-menu>\n  <div id="main-content">...</div>\n');const e=void 0!==this.contentId?document.getElementById(this.contentId):t&&t.querySelector&&t.querySelector("[main]");e&&e.tagName?(this.contentEl=e,e.classList.add("menu-content"),this.typeChanged(this.type,void 0),this.sideChanged(),p._register(this),this.gesture=(await n.e(47).then(n.bind(null,84))).createGesture({el:document,gestureName:"menu-swipe",gesturePriority:30,threshold:10,blurOnStart:!0,canStart:t=>this.canStart(t),onWillStart:()=>this.onWillStart(),onStart:()=>this.onStart(),onMove:t=>this.onMove(t),onEnd:t=>this.onEnd(t)}),this.updateState()):console.error('Menu: must have a "content" element to listen for drag events on.')}async componentDidLoad(){this.ionMenuChange.emit({disabled:this.disabled,open:this._isOpen}),this.updateState()}disconnectedCallback(){this.blocker.destroy(),p._unregister(this),this.animation&&this.animation.destroy(),this.gesture&&(this.gesture.destroy(),this.gesture=void 0),this.animation=void 0,this.contentEl=this.backdropEl=this.menuInnerEl=void 0}onSplitPaneChanged(t){this.isPaneVisible=t.detail.isPane(this.el),this.updateState()}onBackdropClick(t){if(this._isOpen&&this.lastOnEnd<t.timeStamp-100){!!t.composedPath&&!t.composedPath().includes(this.menuInnerEl)&&(t.preventDefault(),t.stopPropagation(),this.close())}}isOpen(){return Promise.resolve(this._isOpen)}isActive(){return Promise.resolve(this._isActive())}open(t=!0){return this.setOpen(!0,t)}close(t=!0){return this.setOpen(!1,t)}toggle(t=!0){return this.setOpen(!this._isOpen,t)}setOpen(t,e=!0){return p._setOpen(this,t,e)}async _setOpen(t,e=!0){return!(!this._isActive()||this.isAnimating||t===this._isOpen)&&(this.beforeAnimation(t),await this.loadAnimation(),await this.startAnimation(t,e),this.afterAnimation(t),!0)}async loadAnimation(){const t=this.menuInnerEl.offsetWidth;t===this.width&&void 0!==this.animation||(this.width=t,this.animation&&(this.animation.destroy(),this.animation=void 0),this.animation=await p._createAnimation(this.type,this),o.c.getBoolean("animated",!0)||this.animation.duration(0),this.animation.fill("both"))}async startAnimation(t,e){const n=!t,i=Object(o.b)(this),a="ios"===i?"cubic-bezier(0.32,0.72,0,1)":"cubic-bezier(0.0,0.0,0.2,1)",r="ios"===i?"cubic-bezier(1, 0, 0.68, 0.28)":"cubic-bezier(0.4, 0, 0.6, 1)",s=this.animation.direction(n?"reverse":"normal").easing(n?r:a).onFinish(()=>{"reverse"===s.getDirection()&&s.direction("normal")});e?await s.play():s.play({sync:!0})}_isActive(){return!this.disabled&&!this.isPaneVisible}canSwipe(){return this.swipeGesture&&!this.isAnimating&&this._isActive()}canStart(t){return!(!!document.querySelector("ion-modal.show-modal")||!this.canSwipe())&&(!!this._isOpen||!p._getOpenSync()&&v(window,t.currentX,this.isEndSide,this.maxEdgeStart))}onWillStart(){return this.beforeAnimation(!this._isOpen),this.loadAnimation()}onStart(){this.isAnimating&&this.animation?this.animation.progressStart(!0,this._isOpen?1:0):Object(a.i)(!1,"isAnimating has to be true")}onMove(t){if(!this.isAnimating||!this.animation)return void Object(a.i)(!1,"isAnimating has to be true");const e=g(t.deltaX,this._isOpen,this.isEndSide)/this.width;this.animation.progressStep(this._isOpen?1-e:e)}onEnd(t){if(!this.isAnimating||!this.animation)return void Object(a.i)(!1,"isAnimating has to be true");const e=this._isOpen,n=this.isEndSide,i=g(t.deltaX,e,n),o=this.width,r=i/o,d=t.velocityX,l=o/2,c=d>=0&&(d>.2||t.deltaX>l),h=d<=0&&(d<-.2||t.deltaX<-l),u=e?n?c:h:n?h:c;let m=!e&&u;e&&!u&&(m=!0),this.lastOnEnd=t.currentTime;let p=u?.001:-.001;const f=r<0?.01:r;p+=Object(s.a)([0,0],[.4,0],[.6,1],[1,1],Object(a.e)(0,f,.9999))[0]||0;const b=this._isOpen?!u:u;this.animation.easing("cubic-bezier(0.4, 0.0, 0.6, 1)").onFinish(()=>this.afterAnimation(m),{oneTimeCallback:!0}).progressEnd(b?1:0,this._isOpen?1-p:p,300)}beforeAnimation(t){Object(a.i)(!this.isAnimating,"_before() should not be called while animating"),this.el.classList.add(w),this.backdropEl&&this.backdropEl.classList.add(y),this.blocker.block(),this.isAnimating=!0,t?this.ionWillOpen.emit():this.ionWillClose.emit()}afterAnimation(t){Object(a.i)(this.isAnimating,"_before() should be called while animating"),this._isOpen=t,this.isAnimating=!1,this._isOpen||this.blocker.unblock(),t?(this.contentEl&&this.contentEl.classList.add(x),this.ionDidOpen.emit()):(this.el.classList.remove(w),this.contentEl&&this.contentEl.classList.remove(x),this.backdropEl&&this.backdropEl.classList.remove(y),this.animation&&this.animation.stop(),this.ionDidClose.emit())}updateState(){const t=this._isActive();this.gesture&&this.gesture.enable(t&&this.swipeGesture),!t&&this._isOpen&&this.forceClosing(),this.disabled||p._setActiveMenu(this),Object(a.i)(!this.isAnimating,"can not be animating")}forceClosing(){Object(a.i)(this._isOpen,"menu cannot be closed"),this.isAnimating=!0;this.animation.direction("reverse").play({sync:!0}),this.afterAnimation(!1)}render(){const{isEndSide:t,type:e,disabled:n,isPaneVisible:a}=this,r=Object(o.b)(this);return Object(i.j)(i.c,{role:"navigation",class:{[r]:!0,["menu-type-"+e]:!0,"menu-enabled":!n,"menu-side-end":t,"menu-side-start":!t,"menu-pane-visible":a}},Object(i.j)("div",{class:"menu-inner",part:"container",ref:t=>this.menuInnerEl=t},Object(i.j)("slot",null)),Object(i.j)("ion-backdrop",{ref:t=>this.backdropEl=t,class:"menu-backdrop",tappable:!1,stopPropagation:!1,part:"backdrop"}))}get el(){return Object(i.k)(this)}static get watchers(){return{type:["typeChanged"],disabled:["disabledChanged"],side:["sideChanged"],swipeGesture:["swipeGestureChanged"]}}},g=(t,e,n)=>Math.max(0,e!==n?-t:t),v=(t,e,n,i)=>n?e>=t.innerWidth-i:e<=i,w="show-menu",y="show-backdrop",x="menu-content-open";b.style={ios:":host{--width:304px;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--background:var(--ion-background-color, #fff);left:0;right:0;top:0;bottom:0;display:none;position:absolute;contain:strict}:host(.show-menu){display:block}.menu-inner{left:0;right:auto;top:0;bottom:0;-webkit-transform:translate3d(-9999px,  0,  0);transform:translate3d(-9999px,  0,  0);display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:justify;justify-content:space-between;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);contain:strict}[dir=rtl] .menu-inner,:host-context([dir=rtl]) .menu-inner{left:unset;right:unset;left:auto;right:0}[dir=rtl] .menu-inner,:host-context([dir=rtl]) .menu-inner{-webkit-transform:translate3d(calc(-1 * -9999px),  0,  0);transform:translate3d(calc(-1 * -9999px),  0,  0)}:host(.menu-side-start) .menu-inner{--ion-safe-area-right:0px;right:auto;left:0}:host(.menu-side-end) .menu-inner{--ion-safe-area-left:0px;right:0;left:auto;}ion-backdrop{display:none;opacity:0.01;z-index:-1}@media (max-width: 340px){.menu-inner{--width:264px}}:host(.menu-type-reveal){z-index:0}:host(.menu-type-reveal.show-menu) .menu-inner{-webkit-transform:translate3d(0,  0,  0);transform:translate3d(0,  0,  0)}:host(.menu-type-overlay){z-index:1000}:host(.menu-type-overlay) .show-backdrop{display:block;cursor:pointer}:host(.menu-pane-visible){width:var(--width);min-width:var(--min-width);max-width:var(--max-width)}:host(.menu-pane-visible) .menu-inner{left:0;right:0;width:auto;-webkit-transform:none !important;transform:none !important;-webkit-box-shadow:none !important;box-shadow:none !important}:host(.menu-pane-visible) ion-backdrop{display:hidden !important;}:host(.menu-type-push){z-index:1000}:host(.menu-type-push) .show-backdrop{display:block}",md:":host{--width:304px;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--background:var(--ion-background-color, #fff);left:0;right:0;top:0;bottom:0;display:none;position:absolute;contain:strict}:host(.show-menu){display:block}.menu-inner{left:0;right:auto;top:0;bottom:0;-webkit-transform:translate3d(-9999px,  0,  0);transform:translate3d(-9999px,  0,  0);display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:justify;justify-content:space-between;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);contain:strict}[dir=rtl] .menu-inner,:host-context([dir=rtl]) .menu-inner{left:unset;right:unset;left:auto;right:0}[dir=rtl] .menu-inner,:host-context([dir=rtl]) .menu-inner{-webkit-transform:translate3d(calc(-1 * -9999px),  0,  0);transform:translate3d(calc(-1 * -9999px),  0,  0)}:host(.menu-side-start) .menu-inner{--ion-safe-area-right:0px;right:auto;left:0}:host(.menu-side-end) .menu-inner{--ion-safe-area-left:0px;right:0;left:auto;}ion-backdrop{display:none;opacity:0.01;z-index:-1}@media (max-width: 340px){.menu-inner{--width:264px}}:host(.menu-type-reveal){z-index:0}:host(.menu-type-reveal.show-menu) .menu-inner{-webkit-transform:translate3d(0,  0,  0);transform:translate3d(0,  0,  0)}:host(.menu-type-overlay){z-index:1000}:host(.menu-type-overlay) .show-backdrop{display:block;cursor:pointer}:host(.menu-pane-visible){width:var(--width);min-width:var(--min-width);max-width:var(--max-width)}:host(.menu-pane-visible) .menu-inner{left:0;right:0;width:auto;-webkit-transform:none !important;transform:none !important;-webkit-box-shadow:none !important;box-shadow:none !important}:host(.menu-pane-visible) ion-backdrop{display:hidden !important;}:host(.menu-type-overlay) .menu-inner{-webkit-box-shadow:4px 0px 16px rgba(0, 0, 0, 0.18);box-shadow:4px 0px 16px rgba(0, 0, 0, 0.18)}"};const k=async t=>{const e=await p.get(t);return!(!e||!await e.isActive())},E=class{constructor(t){Object(i.o)(this,t),this.visible=!1,this.disabled=!1,this.autoHide=!0,this.type="button",this.onClick=async()=>p.toggle(this.menu)}componentDidLoad(){this.visibilityChanged()}async visibilityChanged(){this.visible=await k(this.menu)}render(){const{color:t,disabled:e}=this,n=Object(o.b)(this),a=o.c.get("menuIcon","ios"===n?"menu-outline":"menu-sharp"),r=this.autoHide&&!this.visible,s={type:this.type};return Object(i.j)(i.c,{onClick:this.onClick,"aria-disabled":e?"true":null,"aria-hidden":r?"true":null,class:Object(f.a)(t,{[n]:!0,button:!0,"menu-button-hidden":r,"menu-button-disabled":e,"in-toolbar":Object(f.c)("ion-toolbar",this.el),"in-toolbar-color":Object(f.c)("ion-toolbar[color]",this.el),"ion-activatable":!0,"ion-focusable":!0})},Object(i.j)("button",Object.assign({},s,{disabled:e,class:"button-native",part:"native","aria-label":"menu"}),Object(i.j)("span",{class:"button-inner"},Object(i.j)("slot",null,Object(i.j)("ion-icon",{part:"icon",icon:a,mode:n,lazy:!1,"aria-hidden":"true"}))),"md"===n&&Object(i.j)("ion-ripple-effect",{type:"unbounded"})))}get el(){return Object(i.k)(this)}};E.style={ios:':host{--background:transparent;--color-focused:currentColor;--border-radius:initial;--padding-top:0;--padding-bottom:0;color:var(--color);text-align:center;text-decoration:none;text-overflow:ellipsis;text-transform:none;white-space:nowrap;-webkit-font-kerning:none;font-kerning:none}.button-native{border-radius:var(--border-radius);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;border:0;outline:none;background:var(--background);line-height:1;cursor:pointer;overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:0;-webkit-appearance:none;-moz-appearance:none;appearance:none}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.button-native{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;z-index:1}ion-icon{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;pointer-events:none}:host(.menu-button-hidden){display:none}:host(.menu-button-disabled){cursor:default;opacity:0.5;pointer-events:none}:host(.ion-focused) .button-native{color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}@media (any-hover: hover){:host(:hover) .button-native{color:var(--color-hover)}:host(:hover) .button-native::after{background:var(--background-hover);opacity:var(--background-hover-opacity, 0)}}:host(.ion-color) .button-native{color:var(--ion-color-base)}:host(.in-toolbar:not(.in-toolbar-color)){color:var(--ion-toolbar-color, var(--color))}:host{--background-focused:currentColor;--background-focused-opacity:.1;--border-radius:4px;--color:var(--ion-color-primary, #3880ff);--padding-start:5px;--padding-end:5px;height:32px;font-size:31px}:host(.ion-activated){opacity:0.4}@media (any-hover: hover){:host(:hover){opacity:0.6}}',md:':host{--background:transparent;--color-focused:currentColor;--border-radius:initial;--padding-top:0;--padding-bottom:0;color:var(--color);text-align:center;text-decoration:none;text-overflow:ellipsis;text-transform:none;white-space:nowrap;-webkit-font-kerning:none;font-kerning:none}.button-native{border-radius:var(--border-radius);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;border:0;outline:none;background:var(--background);line-height:1;cursor:pointer;overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:0;-webkit-appearance:none;-moz-appearance:none;appearance:none}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.button-native{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;z-index:1}ion-icon{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;pointer-events:none}:host(.menu-button-hidden){display:none}:host(.menu-button-disabled){cursor:default;opacity:0.5;pointer-events:none}:host(.ion-focused) .button-native{color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}@media (any-hover: hover){:host(:hover) .button-native{color:var(--color-hover)}:host(:hover) .button-native::after{background:var(--background-hover);opacity:var(--background-hover-opacity, 0)}}:host(.ion-color) .button-native{color:var(--ion-color-base)}:host(.in-toolbar:not(.in-toolbar-color)){color:var(--ion-toolbar-color, var(--color))}:host{--background-focused:currentColor;--background-focused-opacity:.12;--background-hover:currentColor;--background-hover-opacity:.04;--border-radius:50%;--color:initial;--padding-start:8px;--padding-end:8px;width:48px;height:48px;font-size:24px}:host(.ion-color.ion-focused)::after{background:var(--ion-color-base)}@media (any-hover: hover){:host(.ion-color:hover) .button-native::after{background:var(--ion-color-base)}}'};const O=class{constructor(t){Object(i.o)(this,t),this.visible=!1,this.autoHide=!0,this.onClick=()=>p.toggle(this.menu)}connectedCallback(){this.visibilityChanged()}async visibilityChanged(){this.visible=await k(this.menu)}render(){const t=Object(o.b)(this),e=this.autoHide&&!this.visible;return Object(i.j)(i.c,{onClick:this.onClick,"aria-hidden":e?"true":null,class:{[t]:!0,"menu-toggle-hidden":e}},Object(i.j)("slot",null))}};O.style=":host(.menu-toggle-hidden){display:none}"},79:function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return l})),n.d(e,"d",(function(){return f})),n.d(e,"e",(function(){return c})),n.d(e,"f",(function(){return d})),n.d(e,"g",(function(){return a})),n.d(e,"h",(function(){return s})),n.d(e,"i",(function(){return h})),n.d(e,"j",(function(){return p})),n.d(e,"k",(function(){return b})),n.d(e,"l",(function(){return u})),n.d(e,"m",(function(){return m})),n.d(e,"n",(function(){return r}));const i=(t,e,n,i)=>{if("undefined"!=typeof window){const o=window,a=o&&o.Ionic&&o.Ionic.config;if(a){const o=a.get("_ael");if(o)return o(t,e,n,i);if(a._ael)return a._ael(t,e,n,i)}}return t.addEventListener(e,n,i)},o=(t,e,n,i)=>{if("undefined"!=typeof window){const o=window,a=o&&o.Ionic&&o.Ionic.config;if(a){const o=a.get("_rel");if(o)return o(t,e,n,i);if(a._rel)return a._rel(t,e,n,i)}}return t.removeEventListener(e,n,i)},a=(t,e=t)=>t.shadowRoot||e,r=t=>"function"==typeof __zone_symbol__requestAnimationFrame?__zone_symbol__requestAnimationFrame(t):"function"==typeof requestAnimationFrame?requestAnimationFrame(t):setTimeout(t),s=t=>!!t.shadowRoot&&!!t.attachShadow,d=t=>{const e=t.closest("ion-item");return e?e.querySelector("ion-label"):null},l=(t,e,n,i,o)=>{if(t||s(e)){let t=e.querySelector("input.aux-input");t||(t=e.ownerDocument.createElement("input"),t.type="hidden",t.classList.add("aux-input"),e.appendChild(t)),t.disabled=o,t.name=n,t.value=i||""}},c=(t,e,n)=>Math.max(t,Math.min(e,n)),h=(t,e)=>{if(!t){const t="ASSERT: "+e;throw console.error(t),new Error(t)}},u=t=>t.timeStamp||Date.now(),m=t=>{if(t){const e=t.changedTouches;if(e&&e.length>0){const t=e[0];return{x:t.clientX,y:t.clientY}}if(void 0!==t.pageX)return{x:t.pageX,y:t.pageY}}return{x:0,y:0}},p=t=>{const e="rtl"===document.dir;switch(t){case"start":return e;case"end":return!e;default:throw new Error(`"${t}" is not a valid value for [side]. Use "start" or "end" instead.`)}},f=(t,e)=>{const n=t._original||t;return{_original:t,emit:b(n.emit.bind(n),e)}},b=(t,e=0)=>{let n;return(...i)=>{clearTimeout(n),n=setTimeout(t,e,...i)}}},80:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return i})),n.d(e,"d",(function(){return s}));const i=(t,e)=>null!==e.closest(t),o=(t,e)=>"string"==typeof t&&t.length>0?Object.assign({"ion-color":!0,["ion-color-"+t]:!0},e):e,a=t=>{const e={};return(t=>{if(void 0!==t){return(Array.isArray(t)?t:t.split(" ")).filter(t=>null!=t).map(t=>t.trim()).filter(t=>""!==t)}return[]})(t).forEach(t=>e[t]=!0),e},r=/^[a-z][a-z0-9+\-.]*:/,s=async(t,e,n,i)=>{if(null!=t&&"#"!==t[0]&&!r.test(t)){const o=document.querySelector("ion-router");if(o)return null!=e&&e.preventDefault(),o.push(t,n,i)}return!1}},81:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));class i{constructor(t,e,n,i,o){this.id=e,this.name=n,this.disableScroll=o,this.priority=1e6*i+e,this.ctrl=t}canStart(){return!!this.ctrl&&this.ctrl.canStart(this.name)}start(){return!!this.ctrl&&this.ctrl.start(this.name,this.id,this.priority)}capture(){if(!this.ctrl)return!1;const t=this.ctrl.capture(this.name,this.id,this.priority);return t&&this.disableScroll&&this.ctrl.disableScroll(this.id),t}release(){this.ctrl&&(this.ctrl.release(this.id),this.disableScroll&&this.ctrl.enableScroll(this.id))}destroy(){this.release(),this.ctrl=void 0}}class o{constructor(t,e,n,i){this.id=e,this.disable=n,this.disableScroll=i,this.ctrl=t}block(){if(this.ctrl){if(this.disable)for(const t of this.disable)this.ctrl.disableGesture(t,this.id);this.disableScroll&&this.ctrl.disableScroll(this.id)}}unblock(){if(this.ctrl){if(this.disable)for(const t of this.disable)this.ctrl.enableGesture(t,this.id);this.disableScroll&&this.ctrl.enableScroll(this.id)}}destroy(){this.unblock(),this.ctrl=void 0}}const a="backdrop-no-scroll",r=new class{constructor(){this.gestureId=0,this.requestedStart=new Map,this.disabledGestures=new Map,this.disabledScroll=new Set}createGesture(t){return new i(this,this.newID(),t.name,t.priority||0,!!t.disableScroll)}createBlocker(t={}){return new o(this,this.newID(),t.disable,!!t.disableScroll)}start(t,e,n){return this.canStart(t)?(this.requestedStart.set(e,n),!0):(this.requestedStart.delete(e),!1)}capture(t,e,n){if(!this.start(t,e,n))return!1;const i=this.requestedStart;let o=-1e4;if(i.forEach(t=>{o=Math.max(o,t)}),o===n){this.capturedId=e,i.clear();const n=new CustomEvent("ionGestureCaptured",{detail:{gestureName:t}});return document.dispatchEvent(n),!0}return i.delete(e),!1}release(t){this.requestedStart.delete(t),this.capturedId===t&&(this.capturedId=void 0)}disableGesture(t,e){let n=this.disabledGestures.get(t);void 0===n&&(n=new Set,this.disabledGestures.set(t,n)),n.add(e)}enableGesture(t,e){const n=this.disabledGestures.get(t);void 0!==n&&n.delete(e)}disableScroll(t){this.disabledScroll.add(t),1===this.disabledScroll.size&&document.body.classList.add(a)}enableScroll(t){this.disabledScroll.delete(t),0===this.disabledScroll.size&&document.body.classList.remove(a)}canStart(t){return void 0===this.capturedId&&!this.isDisabled(t)}isCaptured(){return void 0!==this.capturedId}isScrollDisabled(){return this.disabledScroll.size>0}isDisabled(t){const e=this.disabledGestures.get(t);return!!(e&&e.size>0)}newID(){return this.gestureId++,this.gestureId}}},82:function(t,e,n){"use strict";n.r(e),n.d(e,"MENU_BACK_BUTTON_PRIORITY",(function(){return a})),n.d(e,"OVERLAY_BACK_BUTTON_PRIORITY",(function(){return o})),n.d(e,"startHardwareBackButton",(function(){return i}));const i=()=>{const t=document;let e=!1;t.addEventListener("backbutton",()=>{if(e)return;let n=0,i=[];const o=new CustomEvent("ionBackButton",{bubbles:!1,detail:{register(t,e){i.push({priority:t,handler:e,id:n++})}}});t.dispatchEvent(o);const a=()=>{if(i.length>0){let t={priority:Number.MIN_SAFE_INTEGER,handler:()=>{},id:-1};i.forEach(e=>{e.priority>=t.priority&&(t=e)}),e=!0,i=i.filter(e=>e.id!==t.id),(async t=>{try{if(t&&t.handler){const e=t.handler(a);null!=e&&await e}}catch(t){console.error(t)}})(t).then(()=>e=!1)}};a()})},o=100,a=99},83:function(t,e,n){"use strict";n.d(e,"a",(function(){return h}));var i=n(79);let o;const a=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),r=t=>{if(void 0===o){const e=void 0!==t.style.animationName,n=void 0!==t.style.webkitAnimationName;o=!e&&n?"-webkit-":""}return o},s=(t,e,n)=>{const i=e.startsWith("animation")?r(t):"";t.style.setProperty(i+e,n)},d=(t,e)=>{const n=e.startsWith("animation")?r(t):"";t.style.removeProperty(n+e)},l=[],c=(t=[],e)=>{if(void 0!==e){const n=Array.isArray(e)?e:[e];return[...t,...n]}return t},h=t=>{let e,n,o,h,u,m,p,f,b,g,v,w,y,x=[],k=[],E=[],O=!1,S={},j=[],A=[],_={},C=0,M=!1,I=!1,T=!0,z=!1,D=!0;const P=t,L=[],q=[],G=[],R=[],$=[],B=[],N=[],X=[],W=[],F=[],U="function"==typeof AnimationEffect||"function"==typeof window.AnimationEffect,Y="function"==typeof Element&&"function"==typeof Element.prototype.animate&&U,H=t=>{J(),t&&Z()},V=(t,e)=>((e&&e.oneTimeCallback?q:L).push({c:t,o:e}),y),K=()=>(L.length=0,q.length=0,y),J=()=>{if(Y)F.forEach(t=>{t.cancel()}),F.length=0;else{const t=G.slice();Object(i.n)(()=>{t.forEach(t=>{d(t,"animation-name"),d(t,"animation-duration"),d(t,"animation-timing-function"),d(t,"animation-iteration-count"),d(t,"animation-delay"),d(t,"animation-play-state"),d(t,"animation-fill-mode"),d(t,"animation-direction")})})}},Z=()=>{$.forEach(t=>{t&&t.parentNode&&t.parentNode.removeChild(t)}),$.length=0},Q=()=>void 0!==u?u:p?p.getFill():"both",tt=()=>void 0!==b?b:void 0!==m?m:p?p.getDirection():"normal",et=()=>M?"linear":void 0!==o?o:p?p.getEasing():"linear",nt=()=>I?0:void 0!==g?g:void 0!==n?n:p?p.getDuration():0,it=()=>void 0!==h?h:p?p.getIterations():1,ot=()=>void 0!==v?v:void 0!==e?e:p?p.getDelay():0,at=()=>{0!==C&&(C--,0===C&&((()=>{pt(),X.forEach(t=>t()),W.forEach(t=>t());const t=T?1:0,e=j,n=A,i=_;G.forEach(t=>{const o=t.classList;e.forEach(t=>o.add(t)),n.forEach(t=>o.remove(t));for(const e in i)i.hasOwnProperty(e)&&s(t,e,i[e])}),L.forEach(e=>e.c(t,y)),q.forEach(e=>e.c(t,y)),q.length=0,D=!0,T&&(z=!0),T=!0})(),p&&p.animationFinish()))},rt=(e=!0)=>{Z();const n=(t=>(t.forEach(t=>{for(const e in t)if(t.hasOwnProperty(e)){const n=t[e];if("easing"===e){t["animation-timing-function"]=n,delete t[e]}else{const i=a(e);i!==e&&(t[i]=n,delete t[e])}}}),t))(x);G.forEach(o=>{if(n.length>0){const a=((t=[])=>t.map(t=>{const e=t.offset,n=[];for(const e in t)t.hasOwnProperty(e)&&"offset"!==e&&n.push(`${e}: ${t[e]};`);return`${100*e}% { ${n.join(" ")} }`}).join(" "))(n);w=void 0!==t?t:(t=>{let e=l.indexOf(t);return e<0&&(e=l.push(t)-1),"ion-animation-"+e})(a);const d=((t,e,n)=>{const i=(t=>{const e=t.getRootNode();return e.head||e})(n),o=r(n),a=i.querySelector("#"+t);if(a)return a;const s=(n.ownerDocument||document).createElement("style");return s.id=t,s.textContent=`@${o}keyframes ${t} { ${e} } @${o}keyframes ${t}-alt { ${e} }`,i.appendChild(s),s})(w,a,o);$.push(d),s(o,"animation-duration",nt()+"ms"),s(o,"animation-timing-function",et()),s(o,"animation-delay",ot()+"ms"),s(o,"animation-fill-mode",Q()),s(o,"animation-direction",tt());const c=it()===1/0?"infinite":it().toString();s(o,"animation-iteration-count",c),s(o,"animation-play-state","paused"),e&&s(o,"animation-name",d.id+"-alt"),Object(i.n)(()=>{s(o,"animation-name",d.id||null)})}})},st=(t=!0)=>{(()=>{B.forEach(t=>t()),N.forEach(t=>t());const t=k,e=E,n=S;G.forEach(i=>{const o=i.classList;t.forEach(t=>o.add(t)),e.forEach(t=>o.remove(t));for(const t in n)n.hasOwnProperty(t)&&s(i,t,n[t])})})(),x.length>0&&(Y?(G.forEach(t=>{const e=t.animate(x,{id:P,delay:ot(),duration:nt(),easing:et(),iterations:it(),fill:Q(),direction:tt()});e.pause(),F.push(e)}),F.length>0&&(F[0].onfinish=()=>{at()})):rt(t)),O=!0},dt=t=>{if(t=Math.min(Math.max(t,0),.9999),Y)F.forEach(e=>{e.currentTime=e.effect.getComputedTiming().delay+nt()*t,e.pause()});else{const e=`-${nt()*t}ms`;G.forEach(t=>{x.length>0&&(s(t,"animation-delay",e),s(t,"animation-play-state","paused"))})}},lt=t=>{F.forEach(t=>{t.effect.updateTiming({delay:ot(),duration:nt(),easing:et(),iterations:it(),fill:Q(),direction:tt()})}),void 0!==t&&dt(t)},ct=(t=!0,e)=>{Object(i.n)(()=>{G.forEach(n=>{s(n,"animation-name",w||null),s(n,"animation-duration",nt()+"ms"),s(n,"animation-timing-function",et()),s(n,"animation-delay",void 0!==e?`-${e*nt()}ms`:ot()+"ms"),s(n,"animation-fill-mode",Q()||null),s(n,"animation-direction",tt()||null);const o=it()===1/0?"infinite":it().toString();s(n,"animation-iteration-count",o),t&&s(n,"animation-name",w+"-alt"),Object(i.n)(()=>{s(n,"animation-name",w||null)})})})},ht=(t=!1,e=!0,n)=>(t&&R.forEach(i=>{i.update(t,e,n)}),Y?lt(n):ct(e,n),y),ut=()=>{O&&(Y?F.forEach(t=>{t.pause()}):G.forEach(t=>{s(t,"animation-play-state","paused")}))},mt=()=>{f=void 0,at()},pt=()=>{f&&clearTimeout(f)},ft=()=>{G.forEach(t=>{d(t,"animation-duration"),d(t,"animation-delay"),d(t,"animation-play-state")})},bt=t=>new Promise(e=>{t&&t.sync&&(I=!0,V(()=>I=!1,{oneTimeCallback:!0})),O||st(),z&&(Y?(dt(0),lt()):ct(),z=!1),D&&(C=R.length+1,D=!1),V(()=>e(),{oneTimeCallback:!0}),R.forEach(t=>{t.play()}),Y?(F.forEach(t=>{t.play()}),0!==x.length&&0!==G.length||at()):(()=>{if(pt(),Object(i.n)(()=>{G.forEach(t=>{x.length>0&&s(t,"animation-play-state","running")})}),0===x.length||0===G.length)at();else{const t=ot()||0,e=nt()||0,n=it()||1;isFinite(n)&&(f=setTimeout(mt,t+e*n+100)),((t,e)=>{let n;const i={passive:!0},o=()=>{n&&n()},a=n=>{t===n.target&&(o(),e(n))};t&&(t.addEventListener("webkitAnimationEnd",a,i),t.addEventListener("animationend",a,i),n=()=>{t.removeEventListener("webkitAnimationEnd",a,i),t.removeEventListener("animationend",a,i)})})(G[0],()=>{pt(),Object(i.n)(()=>{ft(),Object(i.n)(at)})})}})()}),gt=(t,e)=>{const n=x[0];return void 0===n||void 0!==n.offset&&0!==n.offset?x=[{offset:0,[t]:e},...x]:n[t]=e,y};return y={parentAnimation:p,elements:G,childAnimations:R,id:P,animationFinish:at,from:gt,to:(t,e)=>{const n=x[x.length-1];return void 0===n||void 0!==n.offset&&1!==n.offset?x=[...x,{offset:1,[t]:e}]:n[t]=e,y},fromTo:(t,e,n)=>gt(t,e).to(t,n),parent:t=>(p=t,y),play:bt,pause:()=>(R.forEach(t=>{t.pause()}),ut(),y),stop:()=>{R.forEach(t=>{t.stop()}),O&&(J(),O=!1),M=!1,I=!1,D=!0,b=void 0,g=void 0,v=void 0,C=0,z=!1,T=!0},destroy:t=>(R.forEach(e=>{e.destroy(t)}),H(t),G.length=0,R.length=0,x.length=0,K(),O=!1,D=!0,y),keyframes:t=>(x=t,y),addAnimation:t=>{if(null!=t)if(Array.isArray(t))for(const e of t)e.parent(y),R.push(e);else t.parent(y),R.push(t);return y},addElement:t=>{if(null!=t)if(1===t.nodeType)G.push(t);else if(t.length>=0)for(let e=0;e<t.length;e++)G.push(t[e]);else console.error("Invalid addElement value");return y},update:ht,fill:t=>(u=t,ht(!0),y),direction:t=>(m=t,ht(!0),y),iterations:t=>(h=t,ht(!0),y),duration:t=>(Y||0!==t||(t=1),n=t,ht(!0),y),easing:t=>(o=t,ht(!0),y),delay:t=>(e=t,ht(!0),y),getWebAnimations:()=>F,getKeyframes:()=>x,getFill:Q,getDirection:tt,getDelay:ot,getIterations:it,getEasing:et,getDuration:nt,afterAddRead:t=>(X.push(t),y),afterAddWrite:t=>(W.push(t),y),afterClearStyles:(t=[])=>{for(const e of t)_[e]="";return y},afterStyles:(t={})=>(_=t,y),afterRemoveClass:t=>(A=c(A,t),y),afterAddClass:t=>(j=c(j,t),y),beforeAddRead:t=>(B.push(t),y),beforeAddWrite:t=>(N.push(t),y),beforeClearStyles:(t=[])=>{for(const e of t)S[e]="";return y},beforeStyles:(t={})=>(S=t,y),beforeRemoveClass:t=>(E=c(E,t),y),beforeAddClass:t=>(k=c(k,t),y),onFinish:V,progressStart:(t=!1,e)=>(R.forEach(n=>{n.progressStart(t,e)}),ut(),M=t,O?ht(!1,!0,e):st(),y),progressStep:t=>(R.forEach(e=>{e.progressStep(t)}),dt(t),y),progressEnd:(t,e,n)=>(M=!1,R.forEach(i=>{i.progressEnd(t,e,n)}),void 0!==n&&(g=n),z=!1,T=!0,0===t?(b="reverse"===tt()?"normal":"reverse","reverse"===b&&(T=!1),Y?(ht(),dt(1-e)):(v=(1-e)*nt()*-1,ht(!1,!1))):1===t&&(Y?(ht(),dt(e)):(v=e*nt()*-1,ht(!1,!1))),void 0!==t&&(V(()=>{g=void 0,b=void 0,v=void 0},{oneTimeCallback:!0}),p||bt()),y)}}},89:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));const i=(t,e,n,i,r)=>a(t[1],e[1],n[1],i[1],r).map(a=>o(t[0],e[0],n[0],i[0],a)),o=(t,e,n,i,o)=>o*(3*e*Math.pow(o-1,2)+o*(-3*n*o+3*n+i*o))-t*Math.pow(o-1,3),a=(t,e,n,i,o)=>r((i-=o)-3*(n-=o)+3*(e-=o)-(t-=o),3*n-6*e+3*t,3*e-3*t,t).filter(t=>t>=0&&t<=1),r=(t,e,n,i)=>{if(0===t)return((t,e,n)=>{const i=e*e-4*t*n;return i<0?[]:[(-e+Math.sqrt(i))/(2*t),(-e-Math.sqrt(i))/(2*t)]})(e,n,i);const o=(3*(n/=t)-(e/=t)*e)/3,a=(2*e*e*e-9*e*n+27*(i/=t))/27;if(0===o)return[Math.pow(-a,1/3)];if(0===a)return[Math.sqrt(-o),-Math.sqrt(-o)];const r=Math.pow(a/2,2)+Math.pow(o/3,3);if(0===r)return[Math.pow(a/2,.5)-e/3];if(r>0)return[Math.pow(-a/2+Math.sqrt(r),1/3)-Math.pow(a/2+Math.sqrt(r),1/3)-e/3];const s=Math.sqrt(Math.pow(-o/3,3)),d=Math.acos(-a/(2*Math.sqrt(Math.pow(-o/3,3)))),l=2*Math.pow(s,1/3);return[l*Math.cos(d/3)-e/3,l*Math.cos((d+2*Math.PI)/3)-e/3,l*Math.cos((d+4*Math.PI)/3)-e/3]}}}]);