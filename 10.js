(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{50:function(e,r,t){"use strict";t.r(r),t.d(r,"ion_refresher",(function(){return v})),t.d(r,"ion_refresher_content",(function(){return w}));var n=t(0),i=t(3),s=t(70),o=t(74),a=t(80),l=t(78),h=t(77),c=t(84);const f=e=>{const r=e.querySelector("ion-spinner"),t=r.shadowRoot.querySelector("circle"),n=e.querySelector(".spinner-arrow-container"),i=e.querySelector(".arrow-container"),s=i?i.querySelector("ion-icon"):null,a=Object(o.a)().duration(1e3).easing("ease-out"),l=Object(o.a)().addElement(n).keyframes([{offset:0,opacity:"0.3"},{offset:.45,opacity:"0.3"},{offset:.55,opacity:"1"},{offset:1,opacity:"1"}]),h=Object(o.a)().addElement(t).keyframes([{offset:0,strokeDasharray:"1px, 200px"},{offset:.2,strokeDasharray:"1px, 200px"},{offset:.55,strokeDasharray:"100px, 200px"},{offset:1,strokeDasharray:"100px, 200px"}]),c=Object(o.a)().addElement(r).keyframes([{offset:0,transform:"rotate(-90deg)"},{offset:1,transform:"rotate(210deg)"}]);if(i&&s){const e=Object(o.a)().addElement(i).keyframes([{offset:0,transform:"rotate(0deg)"},{offset:.3,transform:"rotate(0deg)"},{offset:.55,transform:"rotate(280deg)"},{offset:1,transform:"rotate(400deg)"}]),r=Object(o.a)().addElement(s).keyframes([{offset:0,transform:"translateX(2px) scale(0)"},{offset:.3,transform:"translateX(2px) scale(0)"},{offset:.55,transform:"translateX(-1.5px) scale(1)"},{offset:1,transform:"translateX(-1.5px) scale(1)"}]);a.addAnimation([e,r])}return a.addAnimation([l,h,c])},d=e=>{const r=e.clientHeight,t=Object(o.a)().addElement(e).keyframes([{offset:0,transform:`scale(0) translateY(-${r+20}px)`},{offset:1,transform:"scale(1) translateY(100px)"}]);return f(e).addAnimation([t])},u=e=>{const r=e.clientHeight,t=Object(o.a)().addElement(e).keyframes([{offset:0,transform:`translateY(-${r+20}px)`},{offset:1,transform:"translateY(100px)"}]);return f(e).addAnimation([t])},p=(e,r)=>{e.style.setProperty("opacity",r.toString())},m=(e,r)=>{if(!e)return Promise.resolve();const t=b(e,200);return Object(n.f)(()=>{e.style.setProperty("transition","0.2s all ease-out"),void 0===r?e.style.removeProperty("transform"):e.style.setProperty("transform",`translate3d(0px, ${r}, 0px)`)}),t},g=(e,r)=>{const t=e.querySelector("ion-refresher-content .refresher-pulling ion-spinner"),n=e.querySelector("ion-refresher-content .refresher-refreshing ion-spinner");return null!==t&&null!==n&&("ios"===r&&Object(i.d)("mobile")&&void 0!==e.style.webkitOverflowScrolling||"md"===r)},b=(e,r=0)=>new Promise(t=>{y(e,r,t)}),y=(e,r=0,t)=>{let n,i;const s={passive:!0},o=()=>{n&&n()},a=r=>{void 0!==r&&e!==r.target||(o(),t(r))};return e&&(e.addEventListener("webkitTransitionEnd",a,s),e.addEventListener("transitionend",a,s),i=setTimeout(a,r+500),n=()=>{i&&(clearTimeout(i),i=void 0),e.removeEventListener("webkitTransitionEnd",a,s),e.removeEventListener("transitionend",a,s)}),o},v=class{constructor(e){Object(n.o)(this,e),this.ionRefresh=Object(n.g)(this,"ionRefresh",7),this.ionPull=Object(n.g)(this,"ionPull",7),this.ionStart=Object(n.g)(this,"ionStart",7),this.appliedStyles=!1,this.didStart=!1,this.progress=0,this.pointerDown=!1,this.needsCompletion=!1,this.didRefresh=!1,this.lastVelocityY=0,this.animations=[],this.nativeRefresher=!1,this.state=1,this.pullMin=60,this.pullMax=this.pullMin+60,this.closeDuration="280ms",this.snapbackDuration="280ms",this.pullFactor=1,this.disabled=!1}disabledChanged(){this.gesture&&this.gesture.enable(!this.disabled)}checkNativeRefresher(){const e=g(this.el,Object(i.b)(this));if(e&&!this.nativeRefresher){const e=this.el.closest("ion-content");this.setupNativeRefresher(e)}else e||this.destroyNativeRefresher()}destroyNativeRefresher(){this.scrollEl&&this.scrollListenerCallback&&(this.scrollEl.removeEventListener("scroll",this.scrollListenerCallback),this.scrollListenerCallback=void 0),this.nativeRefresher=!1}async resetNativeRefresher(e,r){this.state=r,"ios"===Object(i.b)(this)?await m(e,void 0):await b(this.el.querySelector(".refresher-refreshing-icon"),200),this.didRefresh=!1,this.needsCompletion=!1,this.pointerDown=!1,this.animations.forEach(e=>e.destroy()),this.animations=[],this.progress=0,this.state=1}async setupiOSNativeRefresher(e,r){this.elementToTransform=this.scrollEl;const i=e.shadowRoot.querySelectorAll("svg"),o=.16*this.scrollEl.clientHeight,a=i.length;Object(n.f)(()=>i.forEach(e=>e.style.setProperty("animation","none"))),this.scrollListenerCallback=()=>{(this.pointerDown||1!==this.state)&&Object(n.h)(()=>{const t=this.scrollEl.scrollTop,l=this.el.clientHeight;if(t>0){if(8===this.state){const e=Object(s.e)(0,t/(.5*l),1);return void Object(n.f)(()=>p(r,1-e))}return void Object(n.f)(()=>p(e,0))}this.pointerDown&&(this.didStart||(this.didStart=!0,this.ionStart.emit()),this.pointerDown&&this.ionPull.emit());const c=Object(s.e)(0,Math.abs(t)/l,.99),f=this.progress=Object(s.e)(0,(Math.abs(t)-30)/o,1),d=Object(s.e)(0,Math.floor(f*a),a-1);var u,g;8===this.state||d===a-1?(this.pointerDown&&(u=r,g=this.lastVelocityY,Object(n.f)(()=>{u.style.setProperty("--refreshing-rotation-duration",g>=1?"0.5s":"2s"),u.style.setProperty("opacity","1")})),this.didRefresh||(this.beginRefresh(),this.didRefresh=!0,Object(h.d)({style:"light"}),this.pointerDown||m(this.elementToTransform,l+"px"))):(this.state=2,((e,r,t,i)=>{Object(n.f)(()=>{p(e,t),r.forEach((e,r)=>e.style.setProperty("opacity",r<=i?"0.99":"0"))})})(e,i,c,d))})},this.scrollEl.addEventListener("scroll",this.scrollListenerCallback),this.gesture=(await t.e(0).then(t.bind(null,75))).createGesture({el:this.scrollEl,gestureName:"refresher",gesturePriority:10,direction:"y",threshold:5,onStart:()=>{this.pointerDown=!0,this.didRefresh||m(this.elementToTransform,"0px")},onMove:e=>{this.lastVelocityY=e.velocityY},onEnd:()=>{this.pointerDown=!1,this.didStart=!1,this.needsCompletion?(this.resetNativeRefresher(this.elementToTransform,32),this.needsCompletion=!1):this.didRefresh&&Object(n.h)(()=>m(this.elementToTransform,this.el.clientHeight+"px"))}}),this.disabledChanged()}async setupMDNativeRefresher(e,r,i){const l=Object(s.g)(r).querySelector("circle"),h=this.el.querySelector("ion-refresher-content .refresher-pulling-icon"),c=Object(s.g)(i).querySelector("circle");null!==l&&null!==c&&Object(n.f)(()=>{l.style.setProperty("animation","none"),i.style.setProperty("animation-delay","-655ms"),c.style.setProperty("animation-delay","-655ms")}),this.gesture=(await t.e(0).then(t.bind(null,75))).createGesture({el:this.scrollEl,gestureName:"refresher",gesturePriority:10,direction:"y",threshold:5,canStart:()=>8!==this.state&&32!==this.state&&0===this.scrollEl.scrollTop,onStart:e=>{e.data={animation:void 0,didStart:!1,cancelled:!1}},onMove:r=>{if(r.velocityY<0&&0===this.progress&&!r.data.didStart||r.data.cancelled)r.data.cancelled=!0;else{if(!r.data.didStart)return r.data.didStart=!0,this.state=2,void Object(n.f)(()=>{const t=((e,r)=>"scale"===e?d(r):u(r))((e=>{const r=e.previousElementSibling;return null!==r&&"ION-HEADER"===r.tagName?"translate":"scale"})(e),h);r.data.animation=t,this.scrollEl.style.setProperty("--overflow","hidden"),t.progressStart(!1,0),this.ionStart.emit(),this.animations.push(t)});this.progress=Object(s.e)(0,r.deltaY/180*.5,1),r.data.animation.progressStep(this.progress),this.ionPull.emit()}},onEnd:e=>{if(!e.data.didStart)return;if(Object(n.f)(()=>this.scrollEl.style.removeProperty("--overflow")),this.progress<=.4)return this.gesture.enable(!1),void e.data.animation.progressEnd(0,this.progress,500).onFinish(()=>{this.animations.forEach(e=>e.destroy()),this.animations=[],this.gesture.enable(!0),this.state=1});const r=Object(a.a)([0,0],[0,0],[1,1],[1,1],this.progress)[0],t=(e=>Object(o.a)().duration(125).addElement(e).fromTo("transform","translateY(var(--ion-pulling-refresher-translate, 100px))","translateY(0px)"))(h);this.animations.push(t),Object(n.f)(async()=>{h.style.setProperty("--ion-pulling-refresher-translate",100*r+"px"),e.data.animation.progressEnd(),await t.play(),this.beginRefresh(),e.data.animation.destroy()})}}),this.disabledChanged()}async setupNativeRefresher(e){if(this.scrollListenerCallback||!e||this.nativeRefresher||!this.scrollEl)return;this.nativeRefresher=!0;const r=this.el.querySelector("ion-refresher-content .refresher-pulling ion-spinner"),t=this.el.querySelector("ion-refresher-content .refresher-refreshing ion-spinner");"ios"===Object(i.b)(this)?this.setupiOSNativeRefresher(r,t):this.setupMDNativeRefresher(e,r,t)}componentDidUpdate(){this.checkNativeRefresher()}async connectedCallback(){if("fixed"!==this.el.getAttribute("slot"))return void console.error('Make sure you use: <ion-refresher slot="fixed">');const e=this.el.closest("ion-content");e?(await e.componentOnReady(),this.scrollEl=await e.getScrollElement(),this.backgroundContentEl=Object(s.g)(e).querySelector("#background-content"),g(this.el,Object(i.b)(this))?this.setupNativeRefresher(e):(this.gesture=(await t.e(0).then(t.bind(null,75))).createGesture({el:e,gestureName:"refresher",gesturePriority:10,direction:"y",threshold:20,passive:!1,canStart:()=>this.canStart(),onStart:()=>this.onStart(),onMove:e=>this.onMove(e),onEnd:()=>this.onEnd()}),this.disabledChanged())):console.error("<ion-refresher> must be used inside an <ion-content>")}disconnectedCallback(){this.destroyNativeRefresher(),this.scrollEl=void 0,this.gesture&&(this.gesture.destroy(),this.gesture=void 0)}async complete(){this.nativeRefresher?(this.needsCompletion=!0,this.pointerDown||Object(s.n)(()=>Object(s.n)(()=>this.resetNativeRefresher(this.elementToTransform,32)))):this.close(32,"120ms")}async cancel(){this.nativeRefresher?this.pointerDown||Object(s.n)(()=>Object(s.n)(()=>this.resetNativeRefresher(this.elementToTransform,16))):this.close(16,"")}getProgress(){return Promise.resolve(this.progress)}canStart(){return!!this.scrollEl&&(1===this.state&&!(this.scrollEl.scrollTop>0))}onStart(){this.progress=0,this.state=1}onMove(e){if(!this.scrollEl)return;const r=e.event;if(r.touches&&r.touches.length>1)return;if(0!=(56&this.state))return;const t=Number.isNaN(this.pullFactor)||this.pullFactor<0?1:this.pullFactor,n=e.deltaY*t;if(n<=0)return this.progress=0,this.state=1,this.appliedStyles?void this.setCss(0,"",!1,""):void 0;if(1===this.state){if(this.scrollEl.scrollTop>0)return void(this.progress=0);this.state=2}if(r.cancelable&&r.preventDefault(),this.setCss(n,"0ms",!0,""),0===n)return void(this.progress=0);const i=this.pullMin;this.progress=n/i,this.didStart||(this.didStart=!0,this.ionStart.emit()),this.ionPull.emit(),n<i?this.state=2:n>this.pullMax?this.beginRefresh():this.state=4}onEnd(){4===this.state?this.beginRefresh():2===this.state&&this.cancel()}beginRefresh(){this.state=8,this.setCss(this.pullMin,this.snapbackDuration,!0,""),this.ionRefresh.emit({complete:this.complete.bind(this)})}close(e,r){setTimeout(()=>{this.state=1,this.progress=0,this.didStart=!1,this.setCss(0,"0ms",!1,"")},600),this.state=e,this.setCss(0,this.closeDuration,!0,r)}setCss(e,r,t,i){this.nativeRefresher||(this.appliedStyles=e>0,Object(n.f)(()=>{if(this.scrollEl&&this.backgroundContentEl){const n=this.scrollEl.style,s=this.backgroundContentEl.style;n.transform=s.transform=e>0?`translateY(${e}px) translateZ(0px)`:"",n.transitionDuration=s.transitionDuration=r,n.transitionDelay=s.transitionDelay=i,n.overflow=t?"hidden":""}}))}render(){const e=Object(i.b)(this);return Object(n.j)(n.c,{slot:"fixed",class:{[e]:!0,["refresher-"+e]:!0,"refresher-native":this.nativeRefresher,"refresher-active":1!==this.state,"refresher-pulling":2===this.state,"refresher-ready":4===this.state,"refresher-refreshing":8===this.state,"refresher-cancelling":16===this.state,"refresher-completing":32===this.state}})}get el(){return Object(n.k)(this)}static get watchers(){return{disabled:["disabledChanged"]}}};v.style={ios:"ion-refresher{left:0;top:0;display:none;position:absolute;width:100%;height:60px;pointer-events:none;z-index:-1}[dir=rtl] ion-refresher,:host-context([dir=rtl]) ion-refresher{left:unset;right:unset;right:0}ion-refresher.refresher-active{display:block}ion-refresher-content{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;height:100%}.refresher-pulling,.refresher-refreshing{display:none;width:100%}.refresher-pulling-icon,.refresher-refreshing-icon{-webkit-transform-origin:center;transform-origin:center;-webkit-transition:200ms;transition:200ms;font-size:30px;text-align:center}[dir=rtl] .refresher-pulling-icon,:host-context([dir=rtl]) .refresher-pulling-icon,[dir=rtl] .refresher-refreshing-icon,:host-context([dir=rtl]) .refresher-refreshing-icon{-webkit-transform-origin:calc(100% - center);transform-origin:calc(100% - center)}.refresher-pulling-text,.refresher-refreshing-text{font-size:16px;text-align:center}ion-refresher-content .arrow-container{display:none}.refresher-pulling ion-refresher-content .refresher-pulling{display:block}.refresher-ready ion-refresher-content .refresher-pulling{display:block}.refresher-ready ion-refresher-content .refresher-pulling-icon{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.refresher-refreshing ion-refresher-content .refresher-refreshing{display:block}.refresher-cancelling ion-refresher-content .refresher-pulling{display:block}.refresher-cancelling ion-refresher-content .refresher-pulling-icon{-webkit-transform:scale(0);transform:scale(0)}.refresher-completing ion-refresher-content .refresher-refreshing{display:block}.refresher-completing ion-refresher-content .refresher-refreshing-icon{-webkit-transform:scale(0);transform:scale(0)}.refresher-native .refresher-pulling-text,.refresher-native .refresher-refreshing-text{display:none}.refresher-ios .refresher-pulling-icon,.refresher-ios .refresher-refreshing-icon{color:var(--ion-text-color, #000)}.refresher-ios .refresher-pulling-text,.refresher-ios .refresher-refreshing-text{color:var(--ion-text-color, #000)}.refresher-ios .refresher-refreshing .spinner-lines-ios line,.refresher-ios .refresher-refreshing .spinner-lines-small-ios line,.refresher-ios .refresher-refreshing .spinner-crescent circle{stroke:var(--ion-text-color, #000)}.refresher-ios .refresher-refreshing .spinner-bubbles circle,.refresher-ios .refresher-refreshing .spinner-circles circle,.refresher-ios .refresher-refreshing .spinner-dots circle{fill:var(--ion-text-color, #000)}ion-refresher.refresher-native{display:block;z-index:1}ion-refresher.refresher-native ion-spinner{margin-left:auto;margin-right:auto;margin-top:0;margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){ion-refresher.refresher-native ion-spinner{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}.refresher-native .refresher-refreshing ion-spinner{--refreshing-rotation-duration:2s;display:none;-webkit-animation:var(--refreshing-rotation-duration) ease-out refresher-rotate forwards;animation:var(--refreshing-rotation-duration) ease-out refresher-rotate forwards}.refresher-native .refresher-refreshing{display:none;-webkit-animation:250ms linear refresher-pop forwards;animation:250ms linear refresher-pop forwards}.refresher-native.refresher-refreshing .refresher-pulling ion-spinner,.refresher-native.refresher-completing .refresher-pulling ion-spinner{display:none}.refresher-native.refresher-refreshing .refresher-refreshing ion-spinner,.refresher-native.refresher-completing .refresher-refreshing ion-spinner{display:block}.refresher-native.refresher-pulling .refresher-pulling ion-spinner{display:block}.refresher-native.refresher-pulling .refresher-refreshing ion-spinner{display:none}@-webkit-keyframes refresher-pop{0%{-webkit-transform:scale(1);transform:scale(1);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}50%{-webkit-transform:scale(1.2);transform:scale(1.2);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes refresher-pop{0%{-webkit-transform:scale(1);transform:scale(1);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}50%{-webkit-transform:scale(1.2);transform:scale(1.2);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}100%{-webkit-transform:scale(1);transform:scale(1)}}@-webkit-keyframes refresher-rotate{from{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}@keyframes refresher-rotate{from{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}",md:"ion-refresher{left:0;top:0;display:none;position:absolute;width:100%;height:60px;pointer-events:none;z-index:-1}[dir=rtl] ion-refresher,:host-context([dir=rtl]) ion-refresher{left:unset;right:unset;right:0}ion-refresher.refresher-active{display:block}ion-refresher-content{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;height:100%}.refresher-pulling,.refresher-refreshing{display:none;width:100%}.refresher-pulling-icon,.refresher-refreshing-icon{-webkit-transform-origin:center;transform-origin:center;-webkit-transition:200ms;transition:200ms;font-size:30px;text-align:center}[dir=rtl] .refresher-pulling-icon,:host-context([dir=rtl]) .refresher-pulling-icon,[dir=rtl] .refresher-refreshing-icon,:host-context([dir=rtl]) .refresher-refreshing-icon{-webkit-transform-origin:calc(100% - center);transform-origin:calc(100% - center)}.refresher-pulling-text,.refresher-refreshing-text{font-size:16px;text-align:center}ion-refresher-content .arrow-container{display:none}.refresher-pulling ion-refresher-content .refresher-pulling{display:block}.refresher-ready ion-refresher-content .refresher-pulling{display:block}.refresher-ready ion-refresher-content .refresher-pulling-icon{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.refresher-refreshing ion-refresher-content .refresher-refreshing{display:block}.refresher-cancelling ion-refresher-content .refresher-pulling{display:block}.refresher-cancelling ion-refresher-content .refresher-pulling-icon{-webkit-transform:scale(0);transform:scale(0)}.refresher-completing ion-refresher-content .refresher-refreshing{display:block}.refresher-completing ion-refresher-content .refresher-refreshing-icon{-webkit-transform:scale(0);transform:scale(0)}.refresher-native .refresher-pulling-text,.refresher-native .refresher-refreshing-text{display:none}.refresher-md .refresher-pulling-icon,.refresher-md .refresher-refreshing-icon{color:var(--ion-text-color, #000)}.refresher-md .refresher-pulling-text,.refresher-md .refresher-refreshing-text{color:var(--ion-text-color, #000)}.refresher-md .refresher-refreshing .spinner-lines-md line,.refresher-md .refresher-refreshing .spinner-lines-small-md line,.refresher-md .refresher-refreshing .spinner-crescent circle{stroke:var(--ion-text-color, #000)}.refresher-md .refresher-refreshing .spinner-bubbles circle,.refresher-md .refresher-refreshing .spinner-circles circle,.refresher-md .refresher-refreshing .spinner-dots circle{fill:var(--ion-text-color, #000)}ion-refresher.refresher-native{display:block;z-index:1}ion-refresher.refresher-native ion-spinner{margin-left:auto;margin-right:auto;margin-top:0;margin-bottom:0;width:24px;height:24px;color:var(--ion-color-primary, #3880ff)}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){ion-refresher.refresher-native ion-spinner{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}ion-refresher.refresher-native .spinner-arrow-container{display:inherit}ion-refresher.refresher-native .arrow-container{display:block;position:absolute;width:24px;height:24px}ion-refresher.refresher-native .arrow-container ion-icon{margin-left:auto;margin-right:auto;margin-top:0;margin-bottom:0;left:0;right:0;bottom:-4px;position:absolute;color:var(--ion-color-primary, #3880ff);font-size:12px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){ion-refresher.refresher-native .arrow-container ion-icon{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}ion-refresher.refresher-native.refresher-pulling ion-refresher-content .refresher-pulling,ion-refresher.refresher-native.refresher-ready ion-refresher-content .refresher-pulling{display:-ms-flexbox;display:flex}ion-refresher.refresher-native.refresher-refreshing ion-refresher-content .refresher-refreshing,ion-refresher.refresher-native.refresher-completing ion-refresher-content .refresher-refreshing,ion-refresher.refresher-native.refresher-cancelling ion-refresher-content .refresher-refreshing{display:-ms-flexbox;display:flex}ion-refresher.refresher-native .refresher-pulling-icon{-webkit-transform:translateY(calc(-100% - 10px));transform:translateY(calc(-100% - 10px))}ion-refresher.refresher-native .refresher-pulling-icon,ion-refresher.refresher-native .refresher-refreshing-icon{margin-left:auto;margin-right:auto;margin-top:0;margin-bottom:0;border-radius:100%;padding-left:8px;padding-right:8px;padding-top:8px;padding-bottom:8px;display:-ms-flexbox;display:flex;border:1px solid #ececec;background:white;-webkit-box-shadow:0px 1px 6px rgba(0, 0, 0, 0.1);box-shadow:0px 1px 6px rgba(0, 0, 0, 0.1)}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){ion-refresher.refresher-native .refresher-pulling-icon,ion-refresher.refresher-native .refresher-refreshing-icon{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){ion-refresher.refresher-native .refresher-pulling-icon,ion-refresher.refresher-native .refresher-refreshing-icon{padding-left:unset;padding-right:unset;-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:8px;padding-inline-end:8px}}"};const w=class{constructor(e){Object(n.o)(this,e)}componentWillLoad(){if(void 0===this.pullingIcon){const e=Object(i.b)(this),r=void 0!==this.el.style.webkitOverflowScrolling?"lines":"arrow-down";this.pullingIcon=i.c.get("refreshingIcon","ios"===e&&Object(i.d)("mobile")?i.c.get("spinner",r):"circular")}if(void 0===this.refreshingSpinner){const e=Object(i.b)(this);this.refreshingSpinner=i.c.get("refreshingSpinner",i.c.get("spinner","ios"===e?"lines":"circular"))}}render(){const e=this.pullingIcon,r=null!=e&&void 0!==c.a[e],t=Object(i.b)(this);return Object(n.j)(n.c,{class:t},Object(n.j)("div",{class:"refresher-pulling"},this.pullingIcon&&r&&Object(n.j)("div",{class:"refresher-pulling-icon"},Object(n.j)("div",{class:"spinner-arrow-container"},Object(n.j)("ion-spinner",{name:this.pullingIcon,paused:!0}),"md"===t&&"circular"===this.pullingIcon&&Object(n.j)("div",{class:"arrow-container"},Object(n.j)("ion-icon",{name:"caret-back-sharp"})))),this.pullingIcon&&!r&&Object(n.j)("div",{class:"refresher-pulling-icon"},Object(n.j)("ion-icon",{icon:this.pullingIcon,lazy:!1})),this.pullingText&&Object(n.j)("div",{class:"refresher-pulling-text",innerHTML:Object(l.a)(this.pullingText)})),Object(n.j)("div",{class:"refresher-refreshing"},this.refreshingSpinner&&Object(n.j)("div",{class:"refresher-refreshing-icon"},Object(n.j)("ion-spinner",{name:this.refreshingSpinner})),this.refreshingText&&Object(n.j)("div",{class:"refresher-refreshing-text",innerHTML:Object(l.a)(this.refreshingText)})))}get el(){return Object(n.k)(this)}}},70:function(e,r,t){"use strict";t.d(r,"a",(function(){return n})),t.d(r,"b",(function(){return i})),t.d(r,"c",(function(){return h})),t.d(r,"d",(function(){return m})),t.d(r,"e",(function(){return c})),t.d(r,"f",(function(){return l})),t.d(r,"g",(function(){return s})),t.d(r,"h",(function(){return a})),t.d(r,"i",(function(){return f})),t.d(r,"j",(function(){return p})),t.d(r,"k",(function(){return g})),t.d(r,"l",(function(){return d})),t.d(r,"m",(function(){return u})),t.d(r,"n",(function(){return o}));const n=(e,r,t,n)=>{if("undefined"!=typeof window){const i=window,s=i&&i.Ionic&&i.Ionic.config;if(s){const i=s.get("_ael");if(i)return i(e,r,t,n);if(s._ael)return s._ael(e,r,t,n)}}return e.addEventListener(r,t,n)},i=(e,r,t,n)=>{if("undefined"!=typeof window){const i=window,s=i&&i.Ionic&&i.Ionic.config;if(s){const i=s.get("_rel");if(i)return i(e,r,t,n);if(s._rel)return s._rel(e,r,t,n)}}return e.removeEventListener(r,t,n)},s=(e,r=e)=>e.shadowRoot||r,o=e=>"function"==typeof __zone_symbol__requestAnimationFrame?__zone_symbol__requestAnimationFrame(e):"function"==typeof requestAnimationFrame?requestAnimationFrame(e):setTimeout(e),a=e=>!!e.shadowRoot&&!!e.attachShadow,l=e=>{const r=e.closest("ion-item");return r?r.querySelector("ion-label"):null},h=(e,r,t,n,i)=>{if(e||a(r)){let e=r.querySelector("input.aux-input");e||(e=r.ownerDocument.createElement("input"),e.type="hidden",e.classList.add("aux-input"),r.appendChild(e)),e.disabled=i,e.name=t,e.value=n||""}},c=(e,r,t)=>Math.max(e,Math.min(r,t)),f=(e,r)=>{if(!e){const e="ASSERT: "+r;throw console.error(e),new Error(e)}},d=e=>e.timeStamp||Date.now(),u=e=>{if(e){const r=e.changedTouches;if(r&&r.length>0){const e=r[0];return{x:e.clientX,y:e.clientY}}if(void 0!==e.pageX)return{x:e.pageX,y:e.pageY}}return{x:0,y:0}},p=e=>{const r="rtl"===document.dir;switch(e){case"start":return r;case"end":return!r;default:throw new Error(`"${e}" is not a valid value for [side]. Use "start" or "end" instead.`)}},m=(e,r)=>{const t=e._original||e;return{_original:e,emit:g(t.emit.bind(t),r)}},g=(e,r=0)=>{let t;return(...n)=>{clearTimeout(t),t=setTimeout(e,r,...n)}}},74:function(e,r,t){"use strict";t.d(r,"a",(function(){return f}));var n=t(70);let i;const s=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),o=e=>{if(void 0===i){const r=void 0!==e.style.animationName,t=void 0!==e.style.webkitAnimationName;i=!r&&t?"-webkit-":""}return i},a=(e,r,t)=>{const n=r.startsWith("animation")?o(e):"";e.style.setProperty(n+r,t)},l=(e,r)=>{const t=r.startsWith("animation")?o(e):"";e.style.removeProperty(t+r)},h=[],c=(e=[],r)=>{if(void 0!==r){const t=Array.isArray(r)?r:[r];return[...e,...t]}return e},f=e=>{let r,t,i,f,d,u,p,m,g,b,y,v,w,x=[],E=[],k=[],j=!1,O={},S=[],C=[],M={},T=0,R=!1,D=!1,P=!0,A=!1,q=!0;const N=e,L=[],I=[],$=[],_=[],Y=[],z=[],F=[],H=[],X=[],W=[],U="function"==typeof AnimationEffect||"function"==typeof window.AnimationEffect,G="function"==typeof Element&&"function"==typeof Element.prototype.animate&&U,V=e=>{B(),e&&K()},J=(e,r)=>((r&&r.oneTimeCallback?I:L).push({c:e,o:r}),w),Z=()=>(L.length=0,I.length=0,w),B=()=>{if(G)W.forEach(e=>{e.cancel()}),W.length=0;else{const e=$.slice();Object(n.n)(()=>{e.forEach(e=>{l(e,"animation-name"),l(e,"animation-duration"),l(e,"animation-timing-function"),l(e,"animation-iteration-count"),l(e,"animation-delay"),l(e,"animation-play-state"),l(e,"animation-fill-mode"),l(e,"animation-direction")})})}},K=()=>{Y.forEach(e=>{e&&e.parentNode&&e.parentNode.removeChild(e)}),Y.length=0},Q=()=>void 0!==d?d:p?p.getFill():"both",ee=()=>void 0!==g?g:void 0!==u?u:p?p.getDirection():"normal",re=()=>R?"linear":void 0!==i?i:p?p.getEasing():"linear",te=()=>D?0:void 0!==b?b:void 0!==t?t:p?p.getDuration():0,ne=()=>void 0!==f?f:p?p.getIterations():1,ie=()=>void 0!==y?y:void 0!==r?r:p?p.getDelay():0,se=()=>{0!==T&&(T--,0===T&&((()=>{pe(),H.forEach(e=>e()),X.forEach(e=>e());const e=P?1:0,r=S,t=C,n=M;$.forEach(e=>{const i=e.classList;r.forEach(e=>i.add(e)),t.forEach(e=>i.remove(e));for(const r in n)n.hasOwnProperty(r)&&a(e,r,n[r])}),L.forEach(r=>r.c(e,w)),I.forEach(r=>r.c(e,w)),I.length=0,q=!0,P&&(A=!0),P=!0})(),p&&p.animationFinish()))},oe=(r=!0)=>{K();const t=(e=>(e.forEach(e=>{for(const r in e)if(e.hasOwnProperty(r)){const t=e[r];if("easing"===r){e["animation-timing-function"]=t,delete e[r]}else{const n=s(r);n!==r&&(e[n]=t,delete e[r])}}}),e))(x);$.forEach(i=>{if(t.length>0){const s=((e=[])=>e.map(e=>{const r=e.offset,t=[];for(const r in e)e.hasOwnProperty(r)&&"offset"!==r&&t.push(`${r}: ${e[r]};`);return`${100*r}% { ${t.join(" ")} }`}).join(" "))(t);v=void 0!==e?e:(e=>{let r=h.indexOf(e);return r<0&&(r=h.push(e)-1),"ion-animation-"+r})(s);const l=((e,r,t)=>{const n=(e=>{const r=e.getRootNode();return r.head||r})(t),i=o(t),s=n.querySelector("#"+e);if(s)return s;const a=(t.ownerDocument||document).createElement("style");return a.id=e,a.textContent=`@${i}keyframes ${e} { ${r} } @${i}keyframes ${e}-alt { ${r} }`,n.appendChild(a),a})(v,s,i);Y.push(l),a(i,"animation-duration",te()+"ms"),a(i,"animation-timing-function",re()),a(i,"animation-delay",ie()+"ms"),a(i,"animation-fill-mode",Q()),a(i,"animation-direction",ee());const c=ne()===1/0?"infinite":ne().toString();a(i,"animation-iteration-count",c),a(i,"animation-play-state","paused"),r&&a(i,"animation-name",l.id+"-alt"),Object(n.n)(()=>{a(i,"animation-name",l.id||null)})}})},ae=(e=!0)=>{(()=>{z.forEach(e=>e()),F.forEach(e=>e());const e=E,r=k,t=O;$.forEach(n=>{const i=n.classList;e.forEach(e=>i.add(e)),r.forEach(e=>i.remove(e));for(const e in t)t.hasOwnProperty(e)&&a(n,e,t[e])})})(),x.length>0&&(G?($.forEach(e=>{const r=e.animate(x,{id:N,delay:ie(),duration:te(),easing:re(),iterations:ne(),fill:Q(),direction:ee()});r.pause(),W.push(r)}),W.length>0&&(W[0].onfinish=()=>{se()})):oe(e)),j=!0},le=e=>{if(e=Math.min(Math.max(e,0),.9999),G)W.forEach(r=>{r.currentTime=r.effect.getComputedTiming().delay+te()*e,r.pause()});else{const r=`-${te()*e}ms`;$.forEach(e=>{x.length>0&&(a(e,"animation-delay",r),a(e,"animation-play-state","paused"))})}},he=e=>{W.forEach(e=>{e.effect.updateTiming({delay:ie(),duration:te(),easing:re(),iterations:ne(),fill:Q(),direction:ee()})}),void 0!==e&&le(e)},ce=(e=!0,r)=>{Object(n.n)(()=>{$.forEach(t=>{a(t,"animation-name",v||null),a(t,"animation-duration",te()+"ms"),a(t,"animation-timing-function",re()),a(t,"animation-delay",void 0!==r?`-${r*te()}ms`:ie()+"ms"),a(t,"animation-fill-mode",Q()||null),a(t,"animation-direction",ee()||null);const i=ne()===1/0?"infinite":ne().toString();a(t,"animation-iteration-count",i),e&&a(t,"animation-name",v+"-alt"),Object(n.n)(()=>{a(t,"animation-name",v||null)})})})},fe=(e=!1,r=!0,t)=>(e&&_.forEach(n=>{n.update(e,r,t)}),G?he(t):ce(r,t),w),de=()=>{j&&(G?W.forEach(e=>{e.pause()}):$.forEach(e=>{a(e,"animation-play-state","paused")}))},ue=()=>{m=void 0,se()},pe=()=>{m&&clearTimeout(m)},me=()=>{$.forEach(e=>{l(e,"animation-duration"),l(e,"animation-delay"),l(e,"animation-play-state")})},ge=e=>new Promise(r=>{e&&e.sync&&(D=!0,J(()=>D=!1,{oneTimeCallback:!0})),j||ae(),A&&(G?(le(0),he()):ce(),A=!1),q&&(T=_.length+1,q=!1),J(()=>r(),{oneTimeCallback:!0}),_.forEach(e=>{e.play()}),G?(W.forEach(e=>{e.play()}),0!==x.length&&0!==$.length||se()):(()=>{if(pe(),Object(n.n)(()=>{$.forEach(e=>{x.length>0&&a(e,"animation-play-state","running")})}),0===x.length||0===$.length)se();else{const e=ie()||0,r=te()||0,t=ne()||1;isFinite(t)&&(m=setTimeout(ue,e+r*t+100)),((e,r)=>{let t;const n={passive:!0},i=()=>{t&&t()},s=t=>{e===t.target&&(i(),r(t))};e&&(e.addEventListener("webkitAnimationEnd",s,n),e.addEventListener("animationend",s,n),t=()=>{e.removeEventListener("webkitAnimationEnd",s,n),e.removeEventListener("animationend",s,n)})})($[0],()=>{pe(),Object(n.n)(()=>{me(),Object(n.n)(se)})})}})()}),be=(e,r)=>{const t=x[0];return void 0===t||void 0!==t.offset&&0!==t.offset?x=[{offset:0,[e]:r},...x]:t[e]=r,w};return w={parentAnimation:p,elements:$,childAnimations:_,id:N,animationFinish:se,from:be,to:(e,r)=>{const t=x[x.length-1];return void 0===t||void 0!==t.offset&&1!==t.offset?x=[...x,{offset:1,[e]:r}]:t[e]=r,w},fromTo:(e,r,t)=>be(e,r).to(e,t),parent:e=>(p=e,w),play:ge,pause:()=>(_.forEach(e=>{e.pause()}),de(),w),stop:()=>{_.forEach(e=>{e.stop()}),j&&(B(),j=!1),R=!1,D=!1,q=!0,g=void 0,b=void 0,y=void 0,T=0,A=!1,P=!0},destroy:e=>(_.forEach(r=>{r.destroy(e)}),V(e),$.length=0,_.length=0,x.length=0,Z(),j=!1,q=!0,w),keyframes:e=>(x=e,w),addAnimation:e=>{if(null!=e)if(Array.isArray(e))for(const r of e)r.parent(w),_.push(r);else e.parent(w),_.push(e);return w},addElement:e=>{if(null!=e)if(1===e.nodeType)$.push(e);else if(e.length>=0)for(let r=0;r<e.length;r++)$.push(e[r]);else console.error("Invalid addElement value");return w},update:fe,fill:e=>(d=e,fe(!0),w),direction:e=>(u=e,fe(!0),w),iterations:e=>(f=e,fe(!0),w),duration:e=>(G||0!==e||(e=1),t=e,fe(!0),w),easing:e=>(i=e,fe(!0),w),delay:e=>(r=e,fe(!0),w),getWebAnimations:()=>W,getKeyframes:()=>x,getFill:Q,getDirection:ee,getDelay:ie,getIterations:ne,getEasing:re,getDuration:te,afterAddRead:e=>(H.push(e),w),afterAddWrite:e=>(X.push(e),w),afterClearStyles:(e=[])=>{for(const r of e)M[r]="";return w},afterStyles:(e={})=>(M=e,w),afterRemoveClass:e=>(C=c(C,e),w),afterAddClass:e=>(S=c(S,e),w),beforeAddRead:e=>(z.push(e),w),beforeAddWrite:e=>(F.push(e),w),beforeClearStyles:(e=[])=>{for(const r of e)O[r]="";return w},beforeStyles:(e={})=>(O=e,w),beforeRemoveClass:e=>(k=c(k,e),w),beforeAddClass:e=>(E=c(E,e),w),onFinish:J,progressStart:(e=!1,r)=>(_.forEach(t=>{t.progressStart(e,r)}),de(),R=e,j?fe(!1,!0,r):ae(),w),progressStep:e=>(_.forEach(r=>{r.progressStep(e)}),le(e),w),progressEnd:(e,r,t)=>(R=!1,_.forEach(n=>{n.progressEnd(e,r,t)}),void 0!==t&&(b=t),A=!1,P=!0,0===e?(g="reverse"===ee()?"normal":"reverse","reverse"===g&&(P=!1),G?(fe(),le(1-r)):(y=(1-r)*te()*-1,fe(!1,!1))):1===e&&(G?(fe(),le(r)):(y=r*te()*-1,fe(!1,!1))),void 0!==e&&(J(()=>{b=void 0,g=void 0,y=void 0},{oneTimeCallback:!0}),p||ge()),w)}}},77:function(e,r,t){"use strict";t.d(r,"a",(function(){return s})),t.d(r,"b",(function(){return o})),t.d(r,"c",(function(){return i})),t.d(r,"d",(function(){return l})),t.d(r,"e",(function(){return a}));const n={getEngine(){const e=window;return e.TapticEngine||e.Capacitor&&e.Capacitor.isPluginAvailable("Haptics")&&e.Capacitor.Plugins.Haptics},available(){return!!this.getEngine()},isCordova:()=>!!window.TapticEngine,isCapacitor:()=>!!window.Capacitor,impact(e){const r=this.getEngine();if(!r)return;const t=this.isCapacitor()?e.style.toUpperCase():e.style;r.impact({style:t})},notification(e){const r=this.getEngine();if(!r)return;const t=this.isCapacitor()?e.style.toUpperCase():e.style;r.notification({style:t})},selection(){this.impact({style:"light"})},selectionStart(){const e=this.getEngine();e&&(this.isCapacitor()?e.selectionStart():e.gestureSelectionStart())},selectionChanged(){const e=this.getEngine();e&&(this.isCapacitor()?e.selectionChanged():e.gestureSelectionChanged())},selectionEnd(){const e=this.getEngine();e&&(this.isCapacitor()?e.selectionEnd():e.gestureSelectionEnd())}},i=()=>{n.selection()},s=()=>{n.selectionStart()},o=()=>{n.selectionChanged()},a=()=>{n.selectionEnd()},l=e=>{n.impact(e)}},78:function(e,r,t){"use strict";t.d(r,"a",(function(){return n}));const n=e=>{try{if(e instanceof class{constructor(e){this.value=e}})return e.value;if(!o()||"string"!=typeof e||""===e)return e;const r=document.createDocumentFragment(),t=document.createElement("div");r.appendChild(t),t.innerHTML=e,l.forEach(e=>{const t=r.querySelectorAll(e);for(let e=t.length-1;e>=0;e--){const n=t[e];n.parentNode?n.parentNode.removeChild(n):r.removeChild(n);const o=s(n);for(let e=0;e<o.length;e++)i(o[e])}});const n=s(r);for(let e=0;e<n.length;e++)i(n[e]);const a=document.createElement("div");a.appendChild(r);const h=a.querySelector("div");return null!==h?h.innerHTML:a.innerHTML}catch(e){return console.error(e),""}},i=e=>{if(e.nodeType&&1!==e.nodeType)return;for(let r=e.attributes.length-1;r>=0;r--){const t=e.attributes.item(r),n=t.name;if(!a.includes(n.toLowerCase())){e.removeAttribute(n);continue}const i=t.value;null!=i&&i.toLowerCase().includes("javascript:")&&e.removeAttribute(n)}const r=s(e);for(let e=0;e<r.length;e++)i(r[e])},s=e=>null!=e.children?e.children:e.childNodes,o=()=>{const e=window,r=e&&e.Ionic&&e.Ionic.config;return!r||(r.get?r.get("sanitizerEnabled",!0):!0===r.sanitizerEnabled||void 0===r.sanitizerEnabled)},a=["class","id","href","src","name","slot"],l=["script","style","iframe","meta","link","object","embed"]},80:function(e,r,t){"use strict";t.d(r,"a",(function(){return n}));const n=(e,r,t,n,o)=>s(e[1],r[1],t[1],n[1],o).map(s=>i(e[0],r[0],t[0],n[0],s)),i=(e,r,t,n,i)=>i*(3*r*Math.pow(i-1,2)+i*(-3*t*i+3*t+n*i))-e*Math.pow(i-1,3),s=(e,r,t,n,i)=>o((n-=i)-3*(t-=i)+3*(r-=i)-(e-=i),3*t-6*r+3*e,3*r-3*e,e).filter(e=>e>=0&&e<=1),o=(e,r,t,n)=>{if(0===e)return((e,r,t)=>{const n=r*r-4*e*t;return n<0?[]:[(-r+Math.sqrt(n))/(2*e),(-r-Math.sqrt(n))/(2*e)]})(r,t,n);const i=(3*(t/=e)-(r/=e)*r)/3,s=(2*r*r*r-9*r*t+27*(n/=e))/27;if(0===i)return[Math.pow(-s,1/3)];if(0===s)return[Math.sqrt(-i),-Math.sqrt(-i)];const o=Math.pow(s/2,2)+Math.pow(i/3,3);if(0===o)return[Math.pow(s/2,.5)-r/3];if(o>0)return[Math.pow(-s/2+Math.sqrt(o),1/3)-Math.pow(s/2+Math.sqrt(o),1/3)-r/3];const a=Math.sqrt(Math.pow(-i/3,3)),l=Math.acos(-s/(2*Math.sqrt(Math.pow(-i/3,3)))),h=2*Math.pow(a,1/3);return[h*Math.cos(l/3)-r/3,h*Math.cos((l+2*Math.PI)/3)-r/3,h*Math.cos((l+4*Math.PI)/3)-r/3]}},84:function(e,r,t){"use strict";t.d(r,"a",(function(){return n}));const n={bubbles:{dur:1e3,circles:9,fn:(e,r,t)=>{const n=e*r/t-e+"ms",i=2*Math.PI*r/t;return{r:5,style:{top:9*Math.sin(i)+"px",left:9*Math.cos(i)+"px","animation-delay":n}}}},circles:{dur:1e3,circles:8,fn:(e,r,t)=>{const n=r/t,i=e*n-e+"ms",s=2*Math.PI*n;return{r:5,style:{top:9*Math.sin(s)+"px",left:9*Math.cos(s)+"px","animation-delay":i}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(e,r)=>({r:6,style:{left:9-9*r+"px","animation-delay":-110*r+"ms"}})},lines:{dur:1e3,lines:12,fn:(e,r,t)=>({y1:17,y2:29,style:{transform:`rotate(${30*r+(r<6?180:-180)}deg)`,"animation-delay":e*r/t-e+"ms"}})},"lines-small":{dur:1e3,lines:12,fn:(e,r,t)=>({y1:12,y2:20,style:{transform:`rotate(${30*r+(r<6?180:-180)}deg)`,"animation-delay":e*r/t-e+"ms"}})}}}}]);