(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{55:function(e,t,n){"use strict";n.r(t),n.d(t,"ion_nav",(function(){return h})),n.d(t,"ion_nav_link",(function(){return m}));var i=n(1),r=n(4),s=n(79),o=n(88),a=n(89),c=n(90);class u{constructor(e,t){this.component=e,this.params=t,this.state=1}async init(e){if(this.state=2,!this.element){const t=this.component;this.element=await Object(c.a)(this.delegate,e,t,["ion-page","ion-page-invisible"],this.params)}}_destroy(){Object(s.i)(3!==this.state,"view state must be ATTACHED");const e=this.element;e&&(this.delegate?this.delegate.removeViewFromDom(e.parentElement,e):e.remove()),this.nav=void 0,this.state=3}}const l=(e,t,n)=>{if(!e)return!1;if(e.component!==t)return!1;const i=e.params;if(i===n)return!0;if(!i&&!n)return!0;if(!i||!n)return!1;const r=Object.keys(i),s=Object.keys(n);if(r.length!==s.length)return!1;for(const e of r)if(i[e]!==n[e])return!1;return!0},d=(e,t)=>e?e instanceof u?e:new u(e,t):null,h=class{constructor(e){Object(i.o)(this,e),this.ionNavWillLoad=Object(i.g)(this,"ionNavWillLoad",7),this.ionNavWillChange=Object(i.g)(this,"ionNavWillChange",3),this.ionNavDidChange=Object(i.g)(this,"ionNavDidChange",3),this.transInstr=[],this.animationEnabled=!0,this.useRouter=!1,this.isTransitioning=!1,this.destroyed=!1,this.views=[],this.animated=!0}swipeGestureChanged(){this.gesture&&this.gesture.enable(!0===this.swipeGesture)}rootChanged(){void 0!==this.root&&(this.useRouter||this.setRoot(this.root,this.rootParams))}componentWillLoad(){if(this.useRouter=!!document.querySelector("ion-router")&&!this.el.closest("[no-router]"),void 0===this.swipeGesture){const e=Object(r.b)(this);this.swipeGesture=r.c.getBoolean("swipeBackEnabled","ios"===e)}this.ionNavWillLoad.emit()}async componentDidLoad(){this.rootChanged(),this.gesture=(await n.e(2).then(n.bind(null,95))).createSwipeBackGesture(this.el,this.canStart.bind(this),this.onStart.bind(this),this.onMove.bind(this),this.onEnd.bind(this)),this.swipeGestureChanged()}disconnectedCallback(){for(const e of this.views)Object(o.f)(e.element,o.c),e._destroy();this.gesture&&(this.gesture.destroy(),this.gesture=void 0),this.transInstr.length=this.views.length=0,this.destroyed=!0}push(e,t,n,i){return this.queueTrns({insertStart:-1,insertViews:[{component:e,componentProps:t}],opts:n},i)}insert(e,t,n,i,r){return this.queueTrns({insertStart:e,insertViews:[{component:t,componentProps:n}],opts:i},r)}insertPages(e,t,n,i){return this.queueTrns({insertStart:e,insertViews:t,opts:n},i)}pop(e,t){return this.queueTrns({removeStart:-1,removeCount:1,opts:e},t)}popTo(e,t,n){const i={removeStart:-1,removeCount:-1,opts:t};return"object"==typeof e&&e.component?(i.removeView=e,i.removeStart=1):"number"==typeof e&&(i.removeStart=e+1),this.queueTrns(i,n)}popToRoot(e,t){return this.queueTrns({removeStart:1,removeCount:-1,opts:e},t)}removeIndex(e,t=1,n,i){return this.queueTrns({removeStart:e,removeCount:t,opts:n},i)}setRoot(e,t,n,i){return this.setPages([{component:e,componentProps:t}],n,i)}setPages(e,t,n){return null==t&&(t={}),!0!==t.animated&&(t.animated=!1),this.queueTrns({insertStart:0,insertViews:e,removeStart:0,removeCount:-1,opts:t},n)}setRouteId(e,t,n,i){const r=this.getActiveSync();if(l(r,e,t))return Promise.resolve({changed:!1,element:r.element});let s;const o=new Promise(e=>s=e);let a;const c={updateURL:!1,viewIsReady:e=>{let t;const n=new Promise(e=>t=e);return s({changed:!0,element:e,markVisible:async()=>{t(),await a}}),n}};if("root"===n)a=this.setRoot(e,t,c);else{const r=this.views.find(n=>l(n,e,t));r?a=this.popTo(r,Object.assign(Object.assign({},c),{direction:"back",animationBuilder:i})):"forward"===n?a=this.push(e,t,Object.assign(Object.assign({},c),{animationBuilder:i})):"back"===n&&(a=this.setRoot(e,t,Object.assign(Object.assign({},c),{direction:"back",animated:!0,animationBuilder:i})))}return o}async getRouteId(){const e=this.getActiveSync();return e?{id:e.element.tagName,params:e.params,element:e.element}:void 0}getActive(){return Promise.resolve(this.getActiveSync())}getByIndex(e){return Promise.resolve(this.views[e])}canGoBack(e){return Promise.resolve(this.canGoBackSync(e))}getPrevious(e){return Promise.resolve(this.getPreviousSync(e))}getLength(){return this.views.length}getActiveSync(){return this.views[this.views.length-1]}canGoBackSync(e=this.getActiveSync()){return!(!e||!this.getPreviousSync(e))}getPreviousSync(e=this.getActiveSync()){if(!e)return;const t=this.views,n=t.indexOf(e);return n>0?t[n-1]:void 0}async queueTrns(e,t){if(this.isTransitioning&&null!=e.opts&&e.opts.skipIfBusy)return Promise.resolve(!1);const n=new Promise((t,n)=>{e.resolve=t,e.reject=n});if(e.done=t,e.opts&&!1!==e.opts.updateURL&&this.useRouter){const t=document.querySelector("ion-router");if(t){const n=await t.canTransition();if(!1===n)return Promise.resolve(!1);if("string"==typeof n)return t.push(n,e.opts.direction||"back"),Promise.resolve(!1)}}return e.insertViews&&0===e.insertViews.length&&(e.insertViews=void 0),this.transInstr.push(e),this.nextTrns(),n}success(e,t){if(this.destroyed)this.fireError("nav controller was destroyed",t);else if(t.done&&t.done(e.hasCompleted,e.requiresTransition,e.enteringView,e.leavingView,e.direction),t.resolve(e.hasCompleted),!1!==t.opts.updateURL&&this.useRouter){const t=document.querySelector("ion-router");if(t){const n="back"===e.direction?"back":"forward";t.navChanged(n)}}}failed(e,t){this.destroyed?this.fireError("nav controller was destroyed",t):(this.transInstr.length=0,this.fireError(e,t))}fireError(e,t){t.done&&t.done(!1,!1,e),t.reject&&!this.destroyed?t.reject(e):t.resolve(!1)}nextTrns(){if(this.isTransitioning)return!1;const e=this.transInstr.shift();return!!e&&(this.runTransition(e),!0)}async runTransition(e){try{this.ionNavWillChange.emit(),this.isTransitioning=!0,this.prepareTI(e);const t=this.getActiveSync(),n=this.getEnteringView(e,t);if(!t&&!n)throw new Error("no views in the stack to be removed");n&&1===n.state&&await n.init(this.el),this.postViewInit(n,t,e);const i=(e.enteringRequiresTransition||e.leavingRequiresTransition)&&n!==t;if(i&&e.opts&&t){"back"===e.opts.direction&&(e.opts.animationBuilder=e.opts.animationBuilder||n&&n.animationBuilder),t.animationBuilder=e.opts.animationBuilder}const r=i?await this.transition(n,t,e):{hasCompleted:!0,requiresTransition:!1};this.success(r,e),this.ionNavDidChange.emit()}catch(t){this.failed(t,e)}this.isTransitioning=!1,this.nextTrns()}prepareTI(e){const t=this.views.length;if(e.opts=e.opts||{},void 0===e.opts.delegate&&(e.opts.delegate=this.delegate),void 0!==e.removeView){Object(s.i)(void 0!==e.removeStart,"removeView needs removeStart"),Object(s.i)(void 0!==e.removeCount,"removeView needs removeCount");const t=this.views.indexOf(e.removeView);if(t<0)throw new Error("removeView was not found");e.removeStart+=t}void 0!==e.removeStart&&(e.removeStart<0&&(e.removeStart=t-1),e.removeCount<0&&(e.removeCount=t-e.removeStart),e.leavingRequiresTransition=e.removeCount>0&&e.removeStart+e.removeCount===t),e.insertViews&&((e.insertStart<0||e.insertStart>t)&&(e.insertStart=t),e.enteringRequiresTransition=e.insertStart===t);const n=e.insertViews;if(!n)return;Object(s.i)(n.length>0,"length can not be zero");const i=n.map(e=>e instanceof u?e:"component"in e?d(e.component,null===e.componentProps?void 0:e.componentProps):d(e,void 0)).filter(e=>null!==e);if(0===i.length)throw new Error("invalid views to insert");for(const t of i){t.delegate=e.opts.delegate;const n=t.nav;if(n&&n!==this)throw new Error("inserted view was already inserted");if(3===t.state)throw new Error("inserted view was already destroyed")}e.insertViews=i}getEnteringView(e,t){const n=e.insertViews;if(void 0!==n)return n[n.length-1];const i=e.removeStart;if(void 0!==i){const n=this.views,r=i+e.removeCount;for(let e=n.length-1;e>=0;e--){const s=n[e];if((e<i||e>=r)&&s!==t)return s}}}postViewInit(e,t,n){Object(s.i)(t||e,"Both leavingView and enteringView are null"),Object(s.i)(n.resolve,"resolve must be valid"),Object(s.i)(n.reject,"reject must be valid");const i=n.opts,r=n.insertViews,a=n.removeStart,c=n.removeCount;let u;if(void 0!==a&&void 0!==c){Object(s.i)(a>=0,"removeStart can not be negative"),Object(s.i)(c>=0,"removeCount can not be negative"),u=[];for(let n=0;n<c;n++){const i=this.views[n+a];i&&i!==e&&i!==t&&u.push(i)}i.direction=i.direction||"back"}const l=this.views.length+(void 0!==r?r.length:0)-(void 0!==c?c:0);if(Object(s.i)(l>=0,"final balance can not be negative"),0===l)throw console.warn("You can't remove all the pages in the navigation stack. nav.pop() is probably called too many times.",this,this.el),new Error("navigation stack needs at least one root page");if(r){let e=n.insertStart;for(const t of r)this.insertViewAt(t,e),e++;n.enteringRequiresTransition&&(i.direction=i.direction||"forward")}if(u&&u.length>0){for(const e of u)Object(o.f)(e.element,o.a),Object(o.f)(e.element,o.b),Object(o.f)(e.element,o.c);for(const e of u)this.destroyView(e)}}async transition(e,t,n){const i=n.opts,s=i.progressAnimation?e=>this.sbAni=e:void 0,a=Object(r.b)(this),c=e.element,u=t&&t.element,l=Object.assign({mode:a,showGoBack:this.canGoBackSync(e),baseEl:this.el,animationBuilder:this.animation||i.animationBuilder||r.c.get("navAnimation"),progressCallback:s,animated:this.animated&&r.c.getBoolean("animated",!0),enteringEl:c,leavingEl:u},i),{hasCompleted:d}=await Object(o.h)(l);return this.transitionFinish(d,e,t,i)}transitionFinish(e,t,n,i){const r=e?t:n;return r&&this.cleanup(r),{hasCompleted:e,requiresTransition:!0,enteringView:t,leavingView:n,direction:i.direction}}insertViewAt(e,t){const n=this.views,i=n.indexOf(e);i>-1?(Object(s.i)(e.nav===this,"view is not part of the nav"),n.splice(t,0,n.splice(i,1)[0])):(Object(s.i)(!e.nav,"nav is used"),e.nav=this,n.splice(t,0,e))}removeView(e){Object(s.i)(2===e.state||3===e.state,"view state should be loaded or destroyed");const t=this.views,n=t.indexOf(e);Object(s.i)(n>-1,"view must be part of the stack"),n>=0&&t.splice(n,1)}destroyView(e){e._destroy(),this.removeView(e)}cleanup(e){if(this.destroyed)return;const t=this.views,n=t.indexOf(e);for(let e=t.length-1;e>=0;e--){const i=t[e],r=i.element;r&&(e>n?(Object(o.f)(r,o.c),this.destroyView(i)):e<n&&Object(o.g)(r,!0))}}canStart(){return!!this.swipeGesture&&!this.isTransitioning&&0===this.transInstr.length&&this.animationEnabled&&this.canGoBackSync()}onStart(){this.queueTrns({removeStart:-1,removeCount:1,opts:{direction:"back",progressAnimation:!0}},void 0)}onMove(e){this.sbAni&&this.sbAni.progressStep(e)}onEnd(e,t,n){if(this.sbAni){this.animationEnabled=!1,this.sbAni.onFinish(()=>{this.animationEnabled=!0},{oneTimeCallback:!0});let i=e?-.001:.001;e?i+=Object(a.a)([0,0],[.32,.72],[0,1],[1,1],t)[0]:(this.sbAni.easing("cubic-bezier(1, 0, 0.68, 0.28)"),i+=Object(a.a)([0,0],[1,0],[.68,.28],[1,1],t)[0]),this.sbAni.progressEnd(e?1:0,i,n)}}render(){return Object(i.j)("slot",null)}get el(){return Object(i.k)(this)}static get watchers(){return{swipeGesture:["swipeGestureChanged"],root:["rootChanged"]}}};h.style=":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:layout size style;overflow:hidden;z-index:0}";const m=class{constructor(e){Object(i.o)(this,e),this.routerDirection="forward",this.onClick=()=>((e,t,n,i,r)=>{const s=e.closest("ion-nav");if(s)if("forward"===t){if(void 0!==n)return s.push(n,i,{skipIfBusy:!0,animationBuilder:r})}else if("root"===t){if(void 0!==n)return s.setRoot(n,i,{skipIfBusy:!0,animationBuilder:r})}else if("back"===t)return s.pop({skipIfBusy:!0,animationBuilder:r});return Promise.resolve(!1)})(this.el,this.routerDirection,this.component,this.componentProps,this.routerAnimation)}render(){return Object(i.j)(i.c,{onClick:this.onClick})}get el(){return Object(i.k)(this)}}},79:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return u})),n.d(t,"d",(function(){return p})),n.d(t,"e",(function(){return l})),n.d(t,"f",(function(){return c})),n.d(t,"g",(function(){return s})),n.d(t,"h",(function(){return a})),n.d(t,"i",(function(){return d})),n.d(t,"j",(function(){return v})),n.d(t,"k",(function(){return f})),n.d(t,"l",(function(){return h})),n.d(t,"m",(function(){return m})),n.d(t,"n",(function(){return o}));const i=(e,t,n,i)=>{if("undefined"!=typeof window){const r=window,s=r&&r.Ionic&&r.Ionic.config;if(s){const r=s.get("_ael");if(r)return r(e,t,n,i);if(s._ael)return s._ael(e,t,n,i)}}return e.addEventListener(t,n,i)},r=(e,t,n,i)=>{if("undefined"!=typeof window){const r=window,s=r&&r.Ionic&&r.Ionic.config;if(s){const r=s.get("_rel");if(r)return r(e,t,n,i);if(s._rel)return s._rel(e,t,n,i)}}return e.removeEventListener(t,n,i)},s=(e,t=e)=>e.shadowRoot||t,o=e=>"function"==typeof __zone_symbol__requestAnimationFrame?__zone_symbol__requestAnimationFrame(e):"function"==typeof requestAnimationFrame?requestAnimationFrame(e):setTimeout(e),a=e=>!!e.shadowRoot&&!!e.attachShadow,c=e=>{const t=e.closest("ion-item");return t?t.querySelector("ion-label"):null},u=(e,t,n,i,r)=>{if(e||a(t)){let e=t.querySelector("input.aux-input");e||(e=t.ownerDocument.createElement("input"),e.type="hidden",e.classList.add("aux-input"),t.appendChild(e)),e.disabled=r,e.name=n,e.value=i||""}},l=(e,t,n)=>Math.max(e,Math.min(t,n)),d=(e,t)=>{if(!e){const e="ASSERT: "+t;throw console.error(e),new Error(e)}},h=e=>e.timeStamp||Date.now(),m=e=>{if(e){const t=e.changedTouches;if(t&&t.length>0){const e=t[0];return{x:e.clientX,y:e.clientY}}if(void 0!==e.pageX)return{x:e.pageX,y:e.pageY}}return{x:0,y:0}},v=e=>{const t="rtl"===document.dir;switch(e){case"start":return t;case"end":return!t;default:throw new Error(`"${e}" is not a valid value for [side]. Use "start" or "end" instead.`)}},p=(e,t)=>{const n=e._original||e;return{_original:e,emit:f(n.emit.bind(n),t)}},f=(e,t=0)=>{let n;return(...i)=>{clearTimeout(n),n=setTimeout(e,t,...i)}}},88:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return s})),n.d(t,"c",(function(){return o})),n.d(t,"d",(function(){return S})),n.d(t,"e",(function(){return j})),n.d(t,"f",(function(){return b})),n.d(t,"g",(function(){return E})),n.d(t,"h",(function(){return a}));var i=n(1);const r="ionViewWillLeave",s="ionViewDidLeave",o="ionViewWillUnload",a=e=>new Promise((t,n)=>{Object(i.f)(()=>{c(e),u(e).then(n=>{n.animation&&n.animation.destroy(),l(e),t(n)},t=>{l(e),n(t)})})}),c=e=>{const t=e.enteringEl,n=e.leavingEl;O(t,n,e.direction),e.showGoBack?t.classList.add("can-go-back"):t.classList.remove("can-go-back"),E(t,!1),n&&E(n,!1)},u=async e=>{const t=await d(e);return t&&i.a.isBrowser?h(t,e):m(e)},l=e=>{const t=e.enteringEl,n=e.leavingEl;t.classList.remove("ion-page-invisible"),void 0!==n&&n.classList.remove("ion-page-invisible")},d=async e=>{if(!e.leavingEl||!e.animated||0===e.duration)return;if(e.animationBuilder)return e.animationBuilder;return"ios"===e.mode?(await n.e(31).then(n.bind(null,91))).iosTransitionAnimation:(await n.e(32).then(n.bind(null,92))).mdTransitionAnimation},h=async(e,t)=>{await v(t,!0);const n=e(t.baseEl,t);w(t.enteringEl,t.leavingEl);const i=await f(n,t);return t.progressCallback&&t.progressCallback(void 0),i&&g(t.enteringEl,t.leavingEl),{hasCompleted:i,animation:n}},m=async e=>{const t=e.enteringEl,n=e.leavingEl;return await v(e,!1),w(t,n),g(t,n),{hasCompleted:!0}},v=async(e,t)=>{const n=(void 0!==e.deepWait?e.deepWait:t)?[S(e.enteringEl),S(e.leavingEl)]:[y(e.enteringEl),y(e.leavingEl)];await Promise.all(n),await p(e.viewIsReady,e.enteringEl)},p=async(e,t)=>{e&&await e(t)},f=(e,t)=>{const n=t.progressCallback,i=new Promise(t=>{e.onFinish(e=>t(1===e))});return n?(e.progressStart(!0),n(e)):e.play(),i},w=(e,t)=>{b(t,r),b(e,"ionViewWillEnter")},g=(e,t)=>{b(e,"ionViewDidEnter"),b(t,s)},b=(e,t)=>{if(e){const n=new CustomEvent(t,{bubbles:!1,cancelable:!1});e.dispatchEvent(n)}},y=e=>e&&e.componentOnReady?e.componentOnReady():Promise.resolve(),S=async e=>{const t=e;if(t){if(null!=t.componentOnReady){if(null!=await t.componentOnReady())return}await Promise.all(Array.from(t.children).map(S))}},E=(e,t)=>{t?(e.setAttribute("aria-hidden","true"),e.classList.add("ion-page-hidden")):(e.hidden=!1,e.removeAttribute("aria-hidden"),e.classList.remove("ion-page-hidden"))},O=(e,t,n)=>{void 0!==e&&(e.style.zIndex="back"===n?"99":"101"),void 0!==t&&(t.style.zIndex="100")},j=e=>{if(e.classList.contains("ion-page"))return e;const t=e.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs");return t||e}},89:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));const i=(e,t,n,i,o)=>s(e[1],t[1],n[1],i[1],o).map(s=>r(e[0],t[0],n[0],i[0],s)),r=(e,t,n,i,r)=>r*(3*t*Math.pow(r-1,2)+r*(-3*n*r+3*n+i*r))-e*Math.pow(r-1,3),s=(e,t,n,i,r)=>o((i-=r)-3*(n-=r)+3*(t-=r)-(e-=r),3*n-6*t+3*e,3*t-3*e,e).filter(e=>e>=0&&e<=1),o=(e,t,n,i)=>{if(0===e)return((e,t,n)=>{const i=t*t-4*e*n;return i<0?[]:[(-t+Math.sqrt(i))/(2*e),(-t-Math.sqrt(i))/(2*e)]})(t,n,i);const r=(3*(n/=e)-(t/=e)*t)/3,s=(2*t*t*t-9*t*n+27*(i/=e))/27;if(0===r)return[Math.pow(-s,1/3)];if(0===s)return[Math.sqrt(-r),-Math.sqrt(-r)];const o=Math.pow(s/2,2)+Math.pow(r/3,3);if(0===o)return[Math.pow(s/2,.5)-t/3];if(o>0)return[Math.pow(-s/2+Math.sqrt(o),1/3)-Math.pow(s/2+Math.sqrt(o),1/3)-t/3];const a=Math.sqrt(Math.pow(-r/3,3)),c=Math.acos(-s/(2*Math.sqrt(Math.pow(-r/3,3)))),u=2*Math.pow(a,1/3);return[u*Math.cos(c/3)-t/3,u*Math.cos((c+2*Math.PI)/3)-t/3,u*Math.cos((c+4*Math.PI)/3)-t/3]}},90:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return r}));const i=async(e,t,n,i,r)=>{if(e)return e.attachViewToDom(t,n,r,i);if("string"!=typeof n&&!(n instanceof HTMLElement))throw new Error("framework delegate is missing");const s="string"==typeof n?t.ownerDocument&&t.ownerDocument.createElement(n):n;return i&&i.forEach(e=>s.classList.add(e)),r&&Object.assign(s,r),t.appendChild(s),s.componentOnReady&&await s.componentOnReady(),s},r=(e,t)=>{if(t){if(e){const n=t.parentElement;return e.removeViewFromDom(n,t)}t.remove()}return Promise.resolve()}}}]);