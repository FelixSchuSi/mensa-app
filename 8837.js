(self.webpackChunkclient=self.webpackChunkclient||[]).push([[8837,2416],{2416:(t,e,o)=>{"use strict";o.r(e),o.d(e,{MENU_BACK_BUTTON_PRIORITY:()=>r,OVERLAY_BACK_BUTTON_PRIORITY:()=>i,startHardwareBackButton:()=>n});const n=()=>{const t=document;let e=!1;t.addEventListener("backbutton",(()=>{if(e)return;let o=0,n=[];const i=new CustomEvent("ionBackButton",{bubbles:!1,detail:{register(t,e){n.push({priority:t,handler:e,id:o++})}}});t.dispatchEvent(i);const r=()=>{if(n.length>0){let t={priority:Number.MIN_SAFE_INTEGER,handler:()=>{},id:-1};n.forEach((e=>{e.priority>=t.priority&&(t=e)})),e=!0,n=n.filter((e=>e.id!==t.id)),(async t=>{try{if(t&&t.handler){const e=t.handler(r);null!=e&&await e}}catch(t){console.error(t)}})(t).then((()=>e=!1))}};r()}))},i=100,r=99},900:(t,e,o)=>{"use strict";o.d(e,{a:()=>n,b:()=>i,c:()=>l,d:()=>g,e:()=>c,f:()=>d,g:()=>r,h:()=>s,i:()=>p,j:()=>m,k:()=>b,n:()=>u,p:()=>h,r:()=>a});const n=(t,e,o,n)=>{if("undefined"!=typeof window){const i=window,r=i&&i.Ionic&&i.Ionic.config;if(r){const i=r.get("_ael");if(i)return i(t,e,o,n);if(r._ael)return r._ael(t,e,o,n)}}return t.addEventListener(e,o,n)},i=(t,e,o,n)=>{if("undefined"!=typeof window){const i=window,r=i&&i.Ionic&&i.Ionic.config;if(r){const i=r.get("_rel");if(i)return i(t,e,o,n);if(r._rel)return r._rel(t,e,o,n)}}return t.removeEventListener(e,o,n)},r=(t,e=t)=>t.shadowRoot||e,a=t=>"function"==typeof __zone_symbol__requestAnimationFrame?__zone_symbol__requestAnimationFrame(t):"function"==typeof requestAnimationFrame?requestAnimationFrame(t):setTimeout(t),s=t=>!!t.shadowRoot&&!!t.attachShadow,d=t=>{const e=t.closest("ion-item");return e?e.querySelector("ion-label"):null},l=(t,e,o,n,i)=>{if(t||s(e)){let t=e.querySelector("input.aux-input");t||(t=e.ownerDocument.createElement("input"),t.type="hidden",t.classList.add("aux-input"),e.appendChild(t)),t.disabled=i,t.name=o,t.value=n||""}},c=(t,e,o)=>Math.max(t,Math.min(e,o)),p=(t,e)=>{if(!t){const t="ASSERT: "+e;throw console.error(t),new Error(t)}},u=t=>t.timeStamp||Date.now(),h=t=>{if(t){const e=t.changedTouches;if(e&&e.length>0){const t=e[0];return{x:t.clientX,y:t.clientY}}if(void 0!==t.pageX)return{x:t.pageX,y:t.pageY}}return{x:0,y:0}},m=t=>{const e="rtl"===document.dir;switch(t){case"start":return e;case"end":return!e;default:throw new Error(`"${t}" is not a valid value for [side]. Use "start" or "end" instead.`)}},g=(t,e)=>{const o=t._original||t;return{_original:t,emit:b(o.emit.bind(o),e)}},b=(t,e=0)=>{let o;return(...n)=>{clearTimeout(o),o=setTimeout(t,e,...n)}}},254:(t,e,o)=>{"use strict";o.d(e,{s:()=>n});const n=t=>{try{if(t instanceof class{constructor(t){this.value=t}})return t.value;if(!a()||"string"!=typeof t||""===t)return t;const e=document.createDocumentFragment(),o=document.createElement("div");e.appendChild(o),o.innerHTML=t,d.forEach((t=>{const o=e.querySelectorAll(t);for(let t=o.length-1;t>=0;t--){const n=o[t];n.parentNode?n.parentNode.removeChild(n):e.removeChild(n);const a=r(n);for(let t=0;t<a.length;t++)i(a[t])}}));const n=r(e);for(let t=0;t<n.length;t++)i(n[t]);const s=document.createElement("div");s.appendChild(e);const l=s.querySelector("div");return null!==l?l.innerHTML:s.innerHTML}catch(t){return console.error(t),""}},i=t=>{if(t.nodeType&&1!==t.nodeType)return;for(let e=t.attributes.length-1;e>=0;e--){const o=t.attributes.item(e),n=o.name;if(!s.includes(n.toLowerCase())){t.removeAttribute(n);continue}const i=o.value;null!=i&&i.toLowerCase().includes("javascript:")&&t.removeAttribute(n)}const e=r(t);for(let t=0;t<e.length;t++)i(e[t])},r=t=>null!=t.children?t.children:t.childNodes,a=()=>{const t=window,e=t&&t.Ionic&&t.Ionic.config;return!e||(e.get?e.get("sanitizerEnabled",!0):!0===e.sanitizerEnabled||void 0===e.sanitizerEnabled)},s=["class","id","href","src","name","slot"],d=["script","style","iframe","meta","link","object","embed"]},8837:(t,e,o)=>{"use strict";o.r(e),o.d(e,{ion_toast:()=>h});var n=o(2707),i=o(4550),r=o(7792),a=o(254),s=o(700),d=o(3819);const l=(t,e)=>{const o=(0,r.c)(),n=(0,r.c)(),i=t.host||t,a=t.querySelector(".toast-wrapper");switch(n.addElement(a),e){case"top":n.fromTo("transform","translateY(-100%)","translateY(calc(10px + var(--ion-safe-area-top, 0px)))");break;case"middle":const t=Math.floor(i.clientHeight/2-a.clientHeight/2);a.style.top=t+"px",n.fromTo("opacity",.01,1);break;default:n.fromTo("transform","translateY(100%)","translateY(calc(-10px - var(--ion-safe-area-bottom, 0px)))")}return o.addElement(i).easing("cubic-bezier(.155,1.105,.295,1.12)").duration(400).addAnimation(n)},c=(t,e)=>{const o=(0,r.c)(),n=(0,r.c)(),i=t.host||t,a=t.querySelector(".toast-wrapper");switch(n.addElement(a),e){case"top":n.fromTo("transform","translateY(calc(10px + var(--ion-safe-area-top, 0px)))","translateY(-100%)");break;case"middle":n.fromTo("opacity",.99,0);break;default:n.fromTo("transform","translateY(calc(-10px - var(--ion-safe-area-bottom, 0px)))","translateY(100%)")}return o.addElement(i).easing("cubic-bezier(.36,.66,.04,1)").duration(300).addAnimation(n)},p=(t,e)=>{const o=(0,r.c)(),n=(0,r.c)(),i=t.host||t,a=t.querySelector(".toast-wrapper");switch(n.addElement(a),e){case"top":a.style.top="calc(8px + var(--ion-safe-area-top, 0px))",n.fromTo("opacity",.01,1);break;case"middle":const t=Math.floor(i.clientHeight/2-a.clientHeight/2);a.style.top=t+"px",n.fromTo("opacity",.01,1);break;default:a.style.bottom="calc(8px + var(--ion-safe-area-bottom, 0px))",n.fromTo("opacity",.01,1)}return o.addElement(i).easing("cubic-bezier(.36,.66,.04,1)").duration(400).addAnimation(n)},u=t=>{const e=(0,r.c)(),o=(0,r.c)(),n=t.host||t,i=t.querySelector(".toast-wrapper");return o.addElement(i).fromTo("opacity",.99,0),e.addElement(n).easing("cubic-bezier(.36,.66,.04,1)").duration(300).addAnimation(o)},h=class{constructor(t){(0,n.r)(this,t),this.didPresent=(0,n.e)(this,"ionToastDidPresent",7),this.willPresent=(0,n.e)(this,"ionToastWillPresent",7),this.willDismiss=(0,n.e)(this,"ionToastWillDismiss",7),this.didDismiss=(0,n.e)(this,"ionToastDidDismiss",7),this.presented=!1,this.duration=0,this.keyboardClose=!1,this.position="bottom",this.translucent=!1,this.animated=!0,this.dispatchCancelHandler=t=>{const e=t.detail.role;if((0,s.i)(e)){const t=this.getButtons().find((t=>"cancel"===t.role));this.callButtonHandler(t)}}}connectedCallback(){(0,s.e)(this.el)}async present(){await(0,s.d)(this,"toastEnter",l,p,this.position),this.duration>0&&(this.durationTimeout=setTimeout((()=>this.dismiss(void 0,"timeout")),this.duration))}dismiss(t,e){return this.durationTimeout&&clearTimeout(this.durationTimeout),(0,s.f)(this,t,e,"toastLeave",c,u,this.position)}onDidDismiss(){return(0,s.g)(this.el,"ionToastDidDismiss")}onWillDismiss(){return(0,s.g)(this.el,"ionToastWillDismiss")}getButtons(){return this.buttons?this.buttons.map((t=>"string"==typeof t?{text:t}:t)):[]}async buttonClick(t){const e=t.role;return(0,s.i)(e)||await this.callButtonHandler(t)?this.dismiss(void 0,e):Promise.resolve()}async callButtonHandler(t){if(t&&t.handler)try{if(!1===await(0,s.s)(t.handler))return!1}catch(t){console.error(t)}return!0}renderButtons(t,e){if(0===t.length)return;const o=(0,i.b)(this),r={"toast-button-group":!0,["toast-button-group-"+e]:!0};return(0,n.h)("div",{class:r},t.map((t=>(0,n.h)("button",{type:"button",class:m(t),tabIndex:0,onClick:()=>this.buttonClick(t),part:"button"},(0,n.h)("div",{class:"toast-button-inner"},t.icon&&(0,n.h)("ion-icon",{icon:t.icon,slot:void 0===t.text?"icon-only":void 0,class:"toast-icon"}),t.text),"md"===o&&(0,n.h)("ion-ripple-effect",{type:void 0!==t.icon&&void 0===t.text?"unbounded":"bounded"})))))}render(){const t=this.getButtons(),e=t.filter((t=>"start"===t.side)),o=t.filter((t=>"start"!==t.side)),r=(0,i.b)(this),s={"toast-wrapper":!0,["toast-"+this.position]:!0};return(0,n.h)(n.H,{style:{zIndex:""+(6e4+this.overlayIndex)},class:(0,d.c)(this.color,Object.assign(Object.assign({[r]:!0},(0,d.g)(this.cssClass)),{"toast-translucent":this.translucent})),tabindex:"-1",onIonToastWillDismiss:this.dispatchCancelHandler},(0,n.h)("div",{class:s},(0,n.h)("div",{class:"toast-container",part:"container"},this.renderButtons(e,"start"),(0,n.h)("div",{class:"toast-content"},void 0!==this.header&&(0,n.h)("div",{class:"toast-header",part:"header"},this.header),void 0!==this.message&&(0,n.h)("div",{class:"toast-message",part:"message",innerHTML:(0,a.s)(this.message)})),this.renderButtons(o,"end"))))}get el(){return(0,n.i)(this)}},m=t=>Object.assign({"toast-button":!0,"toast-button-icon-only":void 0!==t.icon&&void 0===t.text,["toast-button-"+t.role]:void 0!==t.role,"ion-focusable":!0,"ion-activatable":!0},(0,d.g)(t.cssClass));h.style={ios:":host{--border-width:0;--border-style:none;--border-color:initial;--box-shadow:none;--min-width:auto;--width:auto;--min-height:auto;--height:auto;--max-height:auto;--white-space:pre-wrap;left:0;top:0;display:block;position:absolute;width:100%;height:100%;outline:none;color:var(--color);font-family:var(--ion-font-family, inherit);contain:strict;z-index:1001;pointer-events:none}:host-context([dir=rtl]){left:unset;right:unset;right:0}:host(.overlay-hidden){display:none}:host(.ion-color){--button-color:inherit;color:var(--ion-color-contrast)}:host(.ion-color) .toast-button-cancel{color:inherit}:host(.ion-color) .toast-wrapper{background:var(--ion-color-base)}.toast-wrapper{border-radius:var(--border-radius);left:var(--start);right:var(--end);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow)}[dir=rtl] .toast-wrapper,:host-context([dir=rtl]) .toast-wrapper{left:unset;right:unset;left:var(--end);right:var(--start)}.toast-container{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;pointer-events:auto;height:inherit;min-height:inherit;max-height:inherit;contain:content}.toast-content{display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center}.toast-message{-ms-flex:1;flex:1;white-space:var(--white-space)}.toast-button-group{display:-ms-flexbox;display:flex}.toast-button{border:0;outline:none;color:var(--button-color);z-index:0}.toast-icon{font-size:1.4em}.toast-button-inner{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}@media (any-hover: hover){.toast-button:hover{cursor:pointer}}:host{--background:var(--ion-color-step-50, #f2f2f2);--border-radius:14px;--button-color:var(--ion-color-primary, #3880ff);--color:var(--ion-color-step-850, #262626);--max-width:700px;--start:10px;--end:10px;font-size:14px}.toast-wrapper{margin-left:auto;margin-right:auto;margin-top:auto;margin-bottom:auto;display:block;position:absolute;z-index:10}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toast-wrapper{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){:host(.toast-translucent) .toast-wrapper{background:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}}.toast-wrapper.toast-top{-webkit-transform:translate3d(0,  -100%,  0);transform:translate3d(0,  -100%,  0);top:0}.toast-wrapper.toast-middle{opacity:0.01}.toast-wrapper.toast-bottom{-webkit-transform:translate3d(0,  100%,  0);transform:translate3d(0,  100%,  0);bottom:0}.toast-content{padding-left:15px;padding-right:15px;padding-top:15px;padding-bottom:15px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toast-content{padding-left:unset;padding-right:unset;-webkit-padding-start:15px;padding-inline-start:15px;-webkit-padding-end:15px;padding-inline-end:15px}}.toast-header{margin-bottom:2px;font-weight:500}.toast-button{padding-left:15px;padding-right:15px;padding-top:10px;padding-bottom:10px;height:44px;-webkit-transition:background-color, opacity 100ms linear;transition:background-color, opacity 100ms linear;border:0;background-color:transparent;font-family:var(--ion-font-family);font-size:17px;font-weight:500;overflow:hidden}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toast-button{padding-left:unset;padding-right:unset;-webkit-padding-start:15px;padding-inline-start:15px;-webkit-padding-end:15px;padding-inline-end:15px}}.toast-button.ion-activated{opacity:0.4}@media (any-hover: hover){.toast-button:hover{opacity:0.6}}",md:":host{--border-width:0;--border-style:none;--border-color:initial;--box-shadow:none;--min-width:auto;--width:auto;--min-height:auto;--height:auto;--max-height:auto;--white-space:pre-wrap;left:0;top:0;display:block;position:absolute;width:100%;height:100%;outline:none;color:var(--color);font-family:var(--ion-font-family, inherit);contain:strict;z-index:1001;pointer-events:none}:host-context([dir=rtl]){left:unset;right:unset;right:0}:host(.overlay-hidden){display:none}:host(.ion-color){--button-color:inherit;color:var(--ion-color-contrast)}:host(.ion-color) .toast-button-cancel{color:inherit}:host(.ion-color) .toast-wrapper{background:var(--ion-color-base)}.toast-wrapper{border-radius:var(--border-radius);left:var(--start);right:var(--end);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow)}[dir=rtl] .toast-wrapper,:host-context([dir=rtl]) .toast-wrapper{left:unset;right:unset;left:var(--end);right:var(--start)}.toast-container{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;pointer-events:auto;height:inherit;min-height:inherit;max-height:inherit;contain:content}.toast-content{display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center}.toast-message{-ms-flex:1;flex:1;white-space:var(--white-space)}.toast-button-group{display:-ms-flexbox;display:flex}.toast-button{border:0;outline:none;color:var(--button-color);z-index:0}.toast-icon{font-size:1.4em}.toast-button-inner{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}@media (any-hover: hover){.toast-button:hover{cursor:pointer}}:host{--background:var(--ion-color-step-800, #333333);--border-radius:4px;--box-shadow:0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12);--button-color:var(--ion-color-primary, #3880ff);--color:var(--ion-color-step-50, #f2f2f2);--max-width:700px;--start:8px;--end:8px;font-size:14px}.toast-wrapper{margin-left:auto;margin-right:auto;margin-top:auto;margin-bottom:auto;display:block;position:absolute;opacity:0.01;z-index:10}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toast-wrapper{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}.toast-content{padding-left:16px;padding-right:16px;padding-top:14px;padding-bottom:14px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toast-content{padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px}}.toast-header{margin-bottom:2px;font-weight:500;line-height:20px}.toast-message{line-height:20px}.toast-button-group-start{margin-left:8px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toast-button-group-start{margin-left:unset;-webkit-margin-start:8px;margin-inline-start:8px}}.toast-button-group-end{margin-right:8px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toast-button-group-end{margin-right:unset;-webkit-margin-end:8px;margin-inline-end:8px}}.toast-button{padding-left:15px;padding-right:15px;padding-top:10px;padding-bottom:10px;position:relative;background-color:transparent;font-family:var(--ion-font-family);font-size:14px;font-weight:500;letter-spacing:0.84px;text-transform:uppercase;overflow:hidden}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toast-button{padding-left:unset;padding-right:unset;-webkit-padding-start:15px;padding-inline-start:15px;-webkit-padding-end:15px;padding-inline-end:15px}}.toast-button-cancel{color:var(--ion-color-step-100, #e6e6e6)}.toast-button-icon-only{border-radius:50%;padding-left:9px;padding-right:9px;padding-top:9px;padding-bottom:9px;width:36px;height:36px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toast-button-icon-only{padding-left:unset;padding-right:unset;-webkit-padding-start:9px;padding-inline-start:9px;-webkit-padding-end:9px;padding-inline-end:9px}}@media (any-hover: hover){.toast-button:hover{background-color:rgba(var(--ion-color-primary-rgb, 56, 128, 255), 0.08)}.toast-button-cancel:hover{background-color:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.08)}}"}},700:(t,e,o)=>{"use strict";o.d(e,{B:()=>B,a:()=>l,b:()=>c,c:()=>u,d:()=>v,e:()=>h,f:()=>k,g:()=>A,h:()=>s,i:()=>z,p:()=>p,s:()=>D});var n=o(4550),i=o(900),r=o(2416);let a=0;const s=new WeakMap,d=t=>({create:e=>m(t,e),dismiss:(e,o,n)=>x(document,e,o,t,n),getTop:async()=>w(document,t)}),l=d("ion-alert"),c=d("ion-action-sheet"),p=d("ion-picker"),u=d("ion-popover"),h=t=>{"undefined"!=typeof document&&f(document);const e=a++;t.overlayIndex=e,t.hasAttribute("id")||(t.id="ion-overlay-"+e)},m=(t,e)=>"undefined"!=typeof customElements?customElements.whenDefined(t).then((()=>{const o=document.createElement(t);return o.classList.add("overlay-hidden"),Object.assign(o,e),T(document).appendChild(o),o.componentOnReady()})):Promise.resolve(),g='[tabindex]:not([tabindex^="-"]), input:not([type=hidden]):not([tabindex^="-"]), textarea:not([tabindex^="-"]), button:not([tabindex^="-"]), select:not([tabindex^="-"]), .ion-focusable:not([tabindex^="-"])',b="input:not([type=hidden]), textarea, button, select",f=t=>{0===a&&(a=1,t.addEventListener("focus",(e=>((t,e)=>{const o=w(e),n=t.target;if(o&&n)if(o===n)o.lastFocus=void 0;else{const t=(0,i.g)(o);if(!t.contains(n))return;const r=t.querySelector(".ion-overlay-wrapper");if(!r)return;if(r.contains(n))o.lastFocus=n;else{const t=o.lastFocus;((t,e)=>{let o=t.querySelector(g);const n=o&&o.shadowRoot;n&&(o=n.querySelector(b)||o),o?o.focus():e.focus()})(r,o),t===e.activeElement&&((t,e)=>{const o=Array.from(t.querySelectorAll(g));let n=o.length>0?o[o.length-1]:null;const i=n&&n.shadowRoot;i&&(n=i.querySelector(b)||n),n?n.focus():e.focus()})(r,o),o.lastFocus=e.activeElement}}})(e,t)),!0),t.addEventListener("ionBackButton",(e=>{const o=w(t);o&&o.backdropDismiss&&e.detail.register(r.OVERLAY_BACK_BUTTON_PRIORITY,(()=>o.dismiss(void 0,B)))})),t.addEventListener("keyup",(e=>{if("Escape"===e.key){const e=w(t);e&&e.backdropDismiss&&e.dismiss(void 0,B)}})))},x=(t,e,o,n,i)=>{const r=w(t,n,i);return r?r.dismiss(e,o):Promise.reject("overlay does not exist")},w=(t,e,o)=>{const n=((t,e)=>(void 0===e&&(e="ion-alert,ion-action-sheet,ion-loading,ion-modal,ion-picker,ion-popover,ion-toast"),Array.from(t.querySelectorAll(e)).filter((t=>t.overlayIndex>0))))(t,e);return void 0===o?n[n.length-1]:n.find((t=>t.id===o))},v=async(t,e,o,i,r)=>{if(t.presented)return;t.presented=!0,t.willPresent.emit();const a=(0,n.b)(t),s=t.enterAnimation?t.enterAnimation:n.c.get(e,"ios"===a?o:i);await E(t,s,t.el,r)&&t.didPresent.emit(),"ION-TOAST"!==t.el.tagName&&y(t.el),t.keyboardClose&&t.el.focus()},y=async t=>{let e=document.activeElement;if(!e)return;const o=e&&e.shadowRoot;o&&(e=o.querySelector(b)||e),await t.onDidDismiss(),e.focus()},k=async(t,e,o,i,r,a,d)=>{if(!t.presented)return!1;t.presented=!1;try{t.el.style.setProperty("pointer-events","none"),t.willDismiss.emit({data:e,role:o});const l=(0,n.b)(t),c=t.leaveAnimation?t.leaveAnimation:n.c.get(i,"ios"===l?r:a);"gesture"!==o&&await E(t,c,t.el,d),t.didDismiss.emit({data:e,role:o}),s.delete(t)}catch(t){console.error(t)}return t.el.remove(),!0},T=t=>t.querySelector("ion-app")||t.body,E=async(t,e,o,i)=>{o.classList.remove("overlay-hidden");const r=e(o.shadowRoot||t.el,i);t.animated&&n.c.getBoolean("animated",!0)||r.duration(0),t.keyboardClose&&r.beforeAddWrite((()=>{const t=o.ownerDocument.activeElement;t&&t.matches("input, ion-input, ion-textarea")&&t.blur()}));const a=s.get(t)||[];return s.set(t,[...a,r]),await r.play(),!0},A=(t,e)=>{let o;const n=new Promise((t=>o=t));return _(t,e,(t=>{o(t.detail)})),n},_=(t,e,o)=>{const n=r=>{(0,i.b)(t,e,n),o(r)};(0,i.a)(t,e,n)},z=t=>"cancel"===t||t===B,C=t=>t(),D=(t,e)=>{if("function"==typeof t)return n.c.get("_zoneGate",C)((()=>{try{return t(e)}catch(t){console.error(t)}}))},B="backdrop"},3819:(t,e,o)=>{"use strict";o.d(e,{c:()=>i,g:()=>r,h:()=>n,o:()=>s});const n=(t,e)=>null!==e.closest(t),i=(t,e)=>"string"==typeof t&&t.length>0?Object.assign({"ion-color":!0,["ion-color-"+t]:!0},e):e,r=t=>{const e={};return(t=>void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter((t=>null!=t)).map((t=>t.trim())).filter((t=>""!==t)):[])(t).forEach((t=>e[t]=!0)),e},a=/^[a-z][a-z0-9+\-.]*:/,s=async(t,e,o,n)=>{if(null!=t&&"#"!==t[0]&&!a.test(t)){const i=document.querySelector("ion-router");if(i)return null!=e&&e.preventDefault(),i.push(t,o,n)}return!1}}}]);