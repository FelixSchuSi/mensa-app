(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{61:function(t,e,n){"use strict";n.r(e),n.d(e,"ion_route",(function(){return a})),n.d(e,"ion_route_redirect",(function(){return c})),n.d(e,"ion_router",(function(){return S})),n.d(e,"ion_router_link",(function(){return k}));var o=n(1),r=n(3),i=n(77),s=n(78);const a=class{constructor(t){Object(o.o)(this,t),this.ionRouteDataChanged=Object(o.g)(this,"ionRouteDataChanged",7),this.url=""}onUpdate(t){this.ionRouteDataChanged.emit(t)}onComponentProps(t,e){if(t===e)return;const n=t?Object.keys(t):[],o=e?Object.keys(e):[];if(n.length===o.length){for(const o of n)if(t[o]!==e[o])return void this.onUpdate(t)}else this.onUpdate(t)}connectedCallback(){this.ionRouteDataChanged.emit()}static get watchers(){return{url:["onUpdate"],component:["onUpdate"],componentProps:["onComponentProps"]}}},c=class{constructor(t){Object(o.o)(this,t),this.ionRouteRedirectChanged=Object(o.g)(this,"ionRouteRedirectChanged",7)}propDidChange(){this.ionRouteRedirectChanged.emit()}connectedCallback(){this.ionRouteRedirectChanged.emit()}static get watchers(){return{from:["propDidChange"],to:["propDidChange"]}}},u=t=>"/"+t.filter(t=>t.length>0).join("/"),h=t=>{if(null==t)return[""];const e=t.split("?")[0].split("/").map(t=>t.trim()).filter(t=>t.length>0);return 0===e.length?[""]:e},l=async(t,e,n,o,r=!1,i)=>{try{const s=f(t);if(o>=e.length||!s)return r;await s.componentOnReady();const a=e[o],c=await s.setRouteId(a.id,a.params,n,i);return c.changed&&(n="root",r=!0),r=await l(c.element,e,n,o+1,r,i),c.markVisible&&await c.markVisible(),r}catch(t){return console.error(t),!1}},d=":not([no-router]) ion-nav, :not([no-router]) ion-tabs, :not([no-router]) ion-router-outlet",f=t=>{if(!t)return;if(t.matches(d))return t;const e=t.querySelector(d);return e||void 0},p=(t,e)=>e.find(e=>((t,e)=>{const{from:n,to:o}=e;if(void 0===o)return!1;if(n.length>t.length)return!1;for(let e=0;e<n.length;e++){const o=n[e];if("*"===o)return!0;if(o!==t[e])return!1}return n.length===t.length})(t,e)),g=(t,e)=>{const n=Math.min(t.length,e.length);let o=0;for(;o<n&&t[o].toLowerCase()===e[o].id;o++);return o},m=(t,e)=>{const n=new v(t);let o,r=!1;for(let t=0;t<e.length;t++){const i=e[t].path;if(""===i[0])r=!0;else{for(const e of i){const r=n.next();if(":"===e[0]){if(""===r)return null;o=o||[];(o[t]||(o[t]={}))[e.slice(1)]=r}else if(r!==e)return null}r=!1}}return!r||r===(""===n.next())?o?e.map((t,e)=>({id:t.id,path:t.path,params:w(t.params,o[e])})):e:null},w=(t,e)=>!t&&e?e:t&&!e?t:t&&e?Object.assign(Object.assign({},t),e):void 0,b=(t,e)=>{let n=null,o=0;for(const r of e){const e=m(t,r);if(null!==e){const t=y(e);t>o&&(o=t,n=e)}}return n},y=t=>{let e=1,n=1;for(const o of t)for(const t of o.path)":"===t[0]?e+=Math.pow(1,n):""!==t&&(e+=Math.pow(2,n)),n++;return e};class v{constructor(t){this.path=t.slice()}next(){return this.path.length>0?this.path.shift():""}}const R=t=>Array.from(t.children).filter(t=>"ION-ROUTE-REDIRECT"===t.tagName).map(t=>{const e=O(t,"to");return{from:h(O(t,"from")),to:null==e?void 0:h(e)}}),C=t=>E(j(t)),j=(t,e=t)=>Array.from(e.children).filter(t=>"ION-ROUTE"===t.tagName&&t.component).map(e=>{const n=O(e,"component");if(null==n)throw new Error("component missing in ion-route");return{path:h(O(e,"url")),id:n.toLowerCase(),params:e.componentProps,beforeLeave:e.beforeLeave,beforeEnter:e.beforeEnter,children:j(t,e)}}),O=(t,e)=>e in t?t[e]:t.hasAttribute(e)?t.getAttribute(e):null,E=t=>{const e=[];for(const n of t)P([],e,n);return e},P=(t,e,n)=>{const o=t.slice();if(o.push({id:n.id,path:n.path,params:n.params,beforeLeave:n.beforeLeave,beforeEnter:n.beforeEnter}),0!==n.children.length)for(const t of n.children)P(o,e,t);else e.push(o)},S=class{constructor(t){Object(o.o)(this,t),this.ionRouteWillChange=Object(o.g)(this,"ionRouteWillChange",7),this.ionRouteDidChange=Object(o.g)(this,"ionRouteDidChange",7),this.previousPath=null,this.busy=!1,this.state=0,this.lastState=0,this.root="/",this.useHash=!0}async componentWillLoad(){console.debug("[ion-router] router will load"),await(f(document.body)?Promise.resolve():new Promise(t=>{window.addEventListener("ionNavWillLoad",t,{once:!0})})),console.debug("[ion-router] found nav"),await this.onRoutesChanged()}componentDidLoad(){window.addEventListener("ionRouteRedirectChanged",Object(i.k)(this.onRedirectChanged.bind(this),10)),window.addEventListener("ionRouteDataChanged",Object(i.k)(this.onRoutesChanged.bind(this),100))}async onPopState(){const t=this.historyDirection();let e=this.getPath();const n=await this.runGuards(e);return!0!==n?("object"==typeof n&&(e=h(n.redirect)),!1):(console.debug("[ion-router] URL changed -> update nav",e,t),this.writeNavStateRoot(e,t))}onBackButton(t){t.detail.register(0,t=>{this.back(),t()})}async canTransition(){const t=await this.runGuards();return!0===t||"object"==typeof t&&t.redirect}async push(t,e="forward",n){t.startsWith(".")&&(t=new URL(t,window.location.href).pathname),console.debug("[ion-router] URL pushed -> updating nav",t,e);let o=h(t),r=t.split("?")[1];const i=await this.runGuards(o);if(!0!==i){if("object"!=typeof i)return!1;o=h(i.redirect),r=i.redirect.split("?")[1]}return this.setPath(o,e,r),this.writeNavStateRoot(o,e,n)}back(){return window.history.back(),Promise.resolve(this.waitPromise)}async printDebug(){console.debug("CURRENT PATH",this.getPath()),console.debug("PREVIOUS PATH",this.previousPath),(t=>{console.group(`[ion-core] ROUTES[${t.length}]`);for(const e of t){const t=[];e.forEach(e=>t.push(...e.path));const n=e.map(t=>t.id);console.debug("%c "+u(t),"font-weight: bold; padding-left: 20px","=>\t",`(${n.join(", ")})`)}console.groupEnd()})(C(this.el)),(t=>{console.group(`[ion-core] REDIRECTS[${t.length}]`);for(const e of t)e.to&&console.debug("FROM: ","$c "+u(e.from),"font-weight: bold"," TO: ","$c "+u(e.to),"font-weight: bold");console.groupEnd()})(R(this.el))}async navChanged(t){if(this.busy)return console.warn("[ion-router] router is busy, navChanged was cancelled"),!1;const{ids:e,outlet:n}=await(async t=>{const e=[];let n,o=t;for(;n=f(o),n;){const t=await n.getRouteId();if(!t)break;o=t.element,t.element=void 0,e.push(t)}return{ids:e,outlet:n}})(window.document.body),o=((t,e)=>{let n=null,o=0;const r=t.map(t=>t.id);for(const t of e){const e=g(r,t);e>o&&(n=t,o=e)}return n?n.map((e,n)=>({id:e.id,path:e.path,params:w(e.params,t[n]&&t[n].params)})):null})(e,C(this.el));if(!o)return console.warn("[ion-router] no matching URL for ",e.map(t=>t.id)),!1;const r=(t=>{const e=[];for(const n of t)for(const t of n.path)if(":"===t[0]){const o=n.params&&n.params[t.slice(1)];if(!o)return null;e.push(o)}else""!==t&&e.push(t);return e})(o);return r?(console.debug("[ion-router] nav changed -> update URL",e,r),this.setPath(r,t),await this.safeWriteNavState(n,o,"root",r,null,e.length),!0):(console.warn("[ion-router] router could not match path because some required param is missing"),!1)}onRedirectChanged(){const t=this.getPath();t&&p(t,R(this.el))&&this.writeNavStateRoot(t,"root")}onRoutesChanged(){return this.writeNavStateRoot(this.getPath(),"root")}historyDirection(){const t=window;null===t.history.state&&(this.state++,t.history.replaceState(this.state,t.document.title,t.document.location&&t.document.location.href));const e=t.history.state,n=this.lastState;return this.lastState=e,e>n||e>=n&&n>0?"forward":e<n?"back":"root"}async writeNavStateRoot(t,e,n){if(!t)return console.error("[ion-router] URL is not part of the routing set"),!1;const o=R(this.el),r=p(t,o);let i=null;r&&(this.setPath(r.to,e),i=r.from,t=r.to);const s=C(this.el),a=b(t,s);return a?this.safeWriteNavState(document.body,a,e,t,i,0,n):(console.error("[ion-router] the path does not match any route"),!1)}async safeWriteNavState(t,e,n,o,r,i=0,s){const a=await this.lock();let c=!1;try{c=await this.writeNavState(t,e,n,o,r,i,s)}catch(t){console.error(t)}return a(),c}async lock(){const t=this.waitPromise;let e;return this.waitPromise=new Promise(t=>e=t),void 0!==t&&await t,e}async runGuards(t=this.getPath(),e=h(this.previousPath)){if(!t||!e)return!0;const n=C(this.el),o=b(t,n),r=b(e,n),i=o&&o[o.length-1].beforeEnter,s=r&&r[r.length-1].beforeLeave,a=!s||await s();if(!1===a||"object"==typeof a)return a;const c=!i||await i();return!1!==c&&"object"!=typeof c||c}async writeNavState(t,e,n,o,r,i=0,s){if(this.busy)return console.warn("[ion-router] router is busy, transition was cancelled"),!1;this.busy=!0;const a=this.routeChangeEvent(o,r);a&&this.ionRouteWillChange.emit(a);const c=await l(t,e,n,i,!1,s);return this.busy=!1,c&&console.debug("[ion-router] route changed",o),a&&this.ionRouteDidChange.emit(a),c}setPath(t,e,n){this.state++,((t,e,n,o,r,i,s)=>{let a=u([...h(e),...o]);n&&(a="#"+a),void 0!==s&&(a=a+"?"+s),"forward"===r?t.pushState(i,"",a):t.replaceState(i,"",a)})(window.history,this.root,this.useHash,t,e,this.state,n)}getPath(){return((t,e,n)=>{let o=t.pathname;if(n){const e=t.hash;o="#"===e[0]?e.slice(1):""}return((t,e)=>{if(t.length>e.length)return null;if(t.length<=1&&""===t[0])return e;for(let n=0;n<t.length;n++)if(t[n].length>0&&t[n]!==e[n])return null;return e.length===t.length?[""]:e.slice(t.length)})(h(e),h(o))})(window.location,this.root,this.useHash)}routeChangeEvent(t,e){const n=this.previousPath,o=u(t);if(this.previousPath=o,o===n)return null;return{from:n,redirectedFrom:e?u(e):null,to:o}}get el(){return Object(o.k)(this)}},k=class{constructor(t){Object(o.o)(this,t),this.routerDirection="forward",this.onClick=t=>{Object(s.d)(this.href,t,this.routerDirection,this.routerAnimation)}}render(){const t=Object(r.b)(this),e={href:this.href,rel:this.rel,target:this.target};return Object(o.j)(o.c,{onClick:this.onClick,class:Object(s.a)(this.color,{[t]:!0,"ion-activatable":!0})},Object(o.j)("a",Object.assign({},e),Object(o.j)("slot",null)))}};k.style=":host{--background:transparent;--color:var(--ion-color-primary, #3880ff);background:var(--background);color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}a{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit}"},77:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return u})),n.d(e,"d",(function(){return g})),n.d(e,"e",(function(){return h})),n.d(e,"f",(function(){return c})),n.d(e,"g",(function(){return i})),n.d(e,"h",(function(){return a})),n.d(e,"i",(function(){return l})),n.d(e,"j",(function(){return p})),n.d(e,"k",(function(){return m})),n.d(e,"l",(function(){return d})),n.d(e,"m",(function(){return f})),n.d(e,"n",(function(){return s}));const o=(t,e,n,o)=>{if("undefined"!=typeof window){const r=window,i=r&&r.Ionic&&r.Ionic.config;if(i){const r=i.get("_ael");if(r)return r(t,e,n,o);if(i._ael)return i._ael(t,e,n,o)}}return t.addEventListener(e,n,o)},r=(t,e,n,o)=>{if("undefined"!=typeof window){const r=window,i=r&&r.Ionic&&r.Ionic.config;if(i){const r=i.get("_rel");if(r)return r(t,e,n,o);if(i._rel)return i._rel(t,e,n,o)}}return t.removeEventListener(e,n,o)},i=(t,e=t)=>t.shadowRoot||e,s=t=>"function"==typeof __zone_symbol__requestAnimationFrame?__zone_symbol__requestAnimationFrame(t):"function"==typeof requestAnimationFrame?requestAnimationFrame(t):setTimeout(t),a=t=>!!t.shadowRoot&&!!t.attachShadow,c=t=>{const e=t.closest("ion-item");return e?e.querySelector("ion-label"):null},u=(t,e,n,o,r)=>{if(t||a(e)){let t=e.querySelector("input.aux-input");t||(t=e.ownerDocument.createElement("input"),t.type="hidden",t.classList.add("aux-input"),e.appendChild(t)),t.disabled=r,t.name=n,t.value=o||""}},h=(t,e,n)=>Math.max(t,Math.min(e,n)),l=(t,e)=>{if(!t){const t="ASSERT: "+e;throw console.error(t),new Error(t)}},d=t=>t.timeStamp||Date.now(),f=t=>{if(t){const e=t.changedTouches;if(e&&e.length>0){const t=e[0];return{x:t.clientX,y:t.clientY}}if(void 0!==t.pageX)return{x:t.pageX,y:t.pageY}}return{x:0,y:0}},p=t=>{const e="rtl"===document.dir;switch(t){case"start":return e;case"end":return!e;default:throw new Error(`"${t}" is not a valid value for [side]. Use "start" or "end" instead.`)}},g=(t,e)=>{const n=t._original||t;return{_original:t,emit:m(n.emit.bind(n),e)}},m=(t,e=0)=>{let n;return(...o)=>{clearTimeout(n),n=setTimeout(t,e,...o)}}},78:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"d",(function(){return a}));const o=(t,e)=>null!==e.closest(t),r=(t,e)=>"string"==typeof t&&t.length>0?Object.assign({"ion-color":!0,["ion-color-"+t]:!0},e):e,i=t=>{const e={};return(t=>{if(void 0!==t){return(Array.isArray(t)?t:t.split(" ")).filter(t=>null!=t).map(t=>t.trim()).filter(t=>""!==t)}return[]})(t).forEach(t=>e[t]=!0),e},s=/^[a-z][a-z0-9+\-.]*:/,a=async(t,e,n,o)=>{if(null!=t&&"#"!==t[0]&&!s.test(t)){const r=document.querySelector("ion-router");if(r)return null!=e&&e.preventDefault(),r.push(t,n,o)}return!1}}}]);