(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{83:function(t,e,o){"use strict";o.r(e),o.d(e,"ion_route",(function(){return a})),o.d(e,"ion_route_redirect",(function(){return c})),o.d(e,"ion_router",(function(){return E})),o.d(e,"ion_router_link",(function(){return S}));var n=o(1),r=o(2),i=o(5),s=o(98);const a=class{constructor(t){Object(n.o)(this,t),this.ionRouteDataChanged=Object(n.g)(this,"ionRouteDataChanged",7),this.url=""}onUpdate(t){this.ionRouteDataChanged.emit(t)}onComponentProps(t,e){if(t===e)return;const o=t?Object.keys(t):[],n=e?Object.keys(e):[];if(o.length===n.length){for(const n of o)if(t[n]!==e[n])return void this.onUpdate(t)}else this.onUpdate(t)}connectedCallback(){this.ionRouteDataChanged.emit()}static get watchers(){return{url:["onUpdate"],component:["onUpdate"],componentProps:["onComponentProps"]}}},c=class{constructor(t){Object(n.o)(this,t),this.ionRouteRedirectChanged=Object(n.g)(this,"ionRouteRedirectChanged",7)}propDidChange(){this.ionRouteRedirectChanged.emit()}connectedCallback(){this.ionRouteRedirectChanged.emit()}static get watchers(){return{from:["propDidChange"],to:["propDidChange"]}}},h=t=>"/"+t.filter(t=>t.length>0).join("/"),u=t=>{if(null==t)return[""];const e=t.split("?")[0].split("/").map(t=>t.trim()).filter(t=>t.length>0);return 0===e.length?[""]:e},l=async(t,e,o,n,r=!1,i)=>{try{const s=f(t);if(n>=e.length||!s)return r;await s.componentOnReady();const a=e[n],c=await s.setRouteId(a.id,a.params,o,i);return c.changed&&(o="root",r=!0),r=await l(c.element,e,o,n+1,r,i),c.markVisible&&await c.markVisible(),r}catch(t){return console.error(t),!1}},d=":not([no-router]) ion-nav, :not([no-router]) ion-tabs, :not([no-router]) ion-router-outlet",f=t=>{if(!t)return;if(t.matches(d))return t;const e=t.querySelector(d);return e||void 0},g=(t,e)=>e.find(e=>((t,e)=>{const{from:o,to:n}=e;if(void 0===n)return!1;if(o.length>t.length)return!1;for(let e=0;e<o.length;e++){const n=o[e];if("*"===n)return!0;if(n!==t[e])return!1}return o.length===t.length})(t,e)),p=(t,e)=>{const o=Math.min(t.length,e.length);let n=0;for(;n<o&&t[n].toLowerCase()===e[n].id;n++);return n},b=(t,e)=>{const o=new v(t);let n,r=!1;for(let t=0;t<e.length;t++){const i=e[t].path;if(""===i[0])r=!0;else{for(const e of i){const r=o.next();if(":"===e[0]){if(""===r)return null;n=n||[];(n[t]||(n[t]={}))[e.slice(1)]=r}else if(r!==e)return null}r=!1}}return!r||r===(""===o.next())?n?e.map((t,e)=>({id:t.id,path:t.path,params:m(t.params,n[e])})):e:null},m=(t,e)=>!t&&e?e:t&&!e?t:t&&e?Object.assign(Object.assign({},t),e):void 0,w=(t,e)=>{let o=null,n=0;for(const r of e){const e=b(t,r);if(null!==e){const t=y(e);t>n&&(n=t,o=e)}}return o},y=t=>{let e=1,o=1;for(const n of t)for(const t of n.path)":"===t[0]?e+=Math.pow(1,o):""!==t&&(e+=Math.pow(2,o)),o++;return e};class v{constructor(t){this.path=t.slice()}next(){return this.path.length>0?this.path.shift():""}}const R=t=>Array.from(t.children).filter(t=>"ION-ROUTE-REDIRECT"===t.tagName).map(t=>{const e=O(t,"to");return{from:u(O(t,"from")),to:null==e?void 0:u(e)}}),C=t=>P(j(t)),j=(t,e=t)=>Array.from(e.children).filter(t=>"ION-ROUTE"===t.tagName&&t.component).map(e=>{const o=O(e,"component");if(null==o)throw new Error("component missing in ion-route");return{path:u(O(e,"url")),id:o.toLowerCase(),params:e.componentProps,beforeLeave:e.beforeLeave,beforeEnter:e.beforeEnter,children:j(t,e)}}),O=(t,e)=>e in t?t[e]:t.hasAttribute(e)?t.getAttribute(e):null,P=t=>{const e=[];for(const o of t)k([],e,o);return e},k=(t,e,o)=>{const n=t.slice();if(n.push({id:o.id,path:o.path,params:o.params,beforeLeave:o.beforeLeave,beforeEnter:o.beforeEnter}),0!==o.children.length)for(const t of o.children)k(n,e,t);else e.push(n)},E=class{constructor(t){Object(n.o)(this,t),this.ionRouteWillChange=Object(n.g)(this,"ionRouteWillChange",7),this.ionRouteDidChange=Object(n.g)(this,"ionRouteDidChange",7),this.previousPath=null,this.busy=!1,this.state=0,this.lastState=0,this.root="/",this.useHash=!0}async componentWillLoad(){console.debug("[ion-router] router will load"),await(f(document.body)?Promise.resolve():new Promise(t=>{window.addEventListener("ionNavWillLoad",t,{once:!0})})),console.debug("[ion-router] found nav"),await this.onRoutesChanged()}componentDidLoad(){window.addEventListener("ionRouteRedirectChanged",Object(i.k)(this.onRedirectChanged.bind(this),10)),window.addEventListener("ionRouteDataChanged",Object(i.k)(this.onRoutesChanged.bind(this),100))}async onPopState(){const t=this.historyDirection();let e=this.getPath();const o=await this.runGuards(e);return!0!==o?("object"==typeof o&&(e=u(o.redirect)),!1):(console.debug("[ion-router] URL changed -> update nav",e,t),this.writeNavStateRoot(e,t))}onBackButton(t){t.detail.register(0,t=>{this.back(),t()})}async canTransition(){const t=await this.runGuards();return!0===t||"object"==typeof t&&t.redirect}async push(t,e="forward",o){t.startsWith(".")&&(t=new URL(t,window.location.href).pathname),console.debug("[ion-router] URL pushed -> updating nav",t,e);let n=u(t),r=t.split("?")[1];const i=await this.runGuards(n);if(!0!==i){if("object"!=typeof i)return!1;n=u(i.redirect),r=i.redirect.split("?")[1]}return this.setPath(n,e,r),this.writeNavStateRoot(n,e,o)}back(){return window.history.back(),Promise.resolve(this.waitPromise)}async printDebug(){console.debug("CURRENT PATH",this.getPath()),console.debug("PREVIOUS PATH",this.previousPath),(t=>{console.group(`[ion-core] ROUTES[${t.length}]`);for(const e of t){const t=[];e.forEach(e=>t.push(...e.path));const o=e.map(t=>t.id);console.debug("%c "+h(t),"font-weight: bold; padding-left: 20px","=>\t",`(${o.join(", ")})`)}console.groupEnd()})(C(this.el)),(t=>{console.group(`[ion-core] REDIRECTS[${t.length}]`);for(const e of t)e.to&&console.debug("FROM: ","$c "+h(e.from),"font-weight: bold"," TO: ","$c "+h(e.to),"font-weight: bold");console.groupEnd()})(R(this.el))}async navChanged(t){if(this.busy)return console.warn("[ion-router] router is busy, navChanged was cancelled"),!1;const{ids:e,outlet:o}=await(async t=>{const e=[];let o,n=t;for(;o=f(n),o;){const t=await o.getRouteId();if(!t)break;n=t.element,t.element=void 0,e.push(t)}return{ids:e,outlet:o}})(window.document.body),n=((t,e)=>{let o=null,n=0;const r=t.map(t=>t.id);for(const t of e){const e=p(r,t);e>n&&(o=t,n=e)}return o?o.map((e,o)=>({id:e.id,path:e.path,params:m(e.params,t[o]&&t[o].params)})):null})(e,C(this.el));if(!n)return console.warn("[ion-router] no matching URL for ",e.map(t=>t.id)),!1;const r=(t=>{const e=[];for(const o of t)for(const t of o.path)if(":"===t[0]){const n=o.params&&o.params[t.slice(1)];if(!n)return null;e.push(n)}else""!==t&&e.push(t);return e})(n);return r?(console.debug("[ion-router] nav changed -> update URL",e,r),this.setPath(r,t),await this.safeWriteNavState(o,n,"root",r,null,e.length),!0):(console.warn("[ion-router] router could not match path because some required param is missing"),!1)}onRedirectChanged(){const t=this.getPath();t&&g(t,R(this.el))&&this.writeNavStateRoot(t,"root")}onRoutesChanged(){return this.writeNavStateRoot(this.getPath(),"root")}historyDirection(){const t=window;null===t.history.state&&(this.state++,t.history.replaceState(this.state,t.document.title,t.document.location&&t.document.location.href));const e=t.history.state,o=this.lastState;return this.lastState=e,e>o||e>=o&&o>0?"forward":e<o?"back":"root"}async writeNavStateRoot(t,e,o){if(!t)return console.error("[ion-router] URL is not part of the routing set"),!1;const n=R(this.el),r=g(t,n);let i=null;r&&(this.setPath(r.to,e),i=r.from,t=r.to);const s=C(this.el),a=w(t,s);return a?this.safeWriteNavState(document.body,a,e,t,i,0,o):(console.error("[ion-router] the path does not match any route"),!1)}async safeWriteNavState(t,e,o,n,r,i=0,s){const a=await this.lock();let c=!1;try{c=await this.writeNavState(t,e,o,n,r,i,s)}catch(t){console.error(t)}return a(),c}async lock(){const t=this.waitPromise;let e;return this.waitPromise=new Promise(t=>e=t),void 0!==t&&await t,e}async runGuards(t=this.getPath(),e=u(this.previousPath)){if(!t||!e)return!0;const o=C(this.el),n=w(t,o),r=w(e,o),i=n&&n[n.length-1].beforeEnter,s=r&&r[r.length-1].beforeLeave,a=!s||await s();if(!1===a||"object"==typeof a)return a;const c=!i||await i();return!1!==c&&"object"!=typeof c||c}async writeNavState(t,e,o,n,r,i=0,s){if(this.busy)return console.warn("[ion-router] router is busy, transition was cancelled"),!1;this.busy=!0;const a=this.routeChangeEvent(n,r);a&&this.ionRouteWillChange.emit(a);const c=await l(t,e,o,i,!1,s);return this.busy=!1,c&&console.debug("[ion-router] route changed",n),a&&this.ionRouteDidChange.emit(a),c}setPath(t,e,o){this.state++,((t,e,o,n,r,i,s)=>{let a=h([...u(e),...n]);o&&(a="#"+a),void 0!==s&&(a=a+"?"+s),"forward"===r?t.pushState(i,"",a):t.replaceState(i,"",a)})(window.history,this.root,this.useHash,t,e,this.state,o)}getPath(){return((t,e,o)=>{let n=t.pathname;if(o){const e=t.hash;n="#"===e[0]?e.slice(1):""}return((t,e)=>{if(t.length>e.length)return null;if(t.length<=1&&""===t[0])return e;for(let o=0;o<t.length;o++)if(t[o].length>0&&t[o]!==e[o])return null;return e.length===t.length?[""]:e.slice(t.length)})(u(e),u(n))})(window.location,this.root,this.useHash)}routeChangeEvent(t,e){const o=this.previousPath,n=h(t);if(this.previousPath=n,n===o)return null;return{from:o,redirectedFrom:e?h(e):null,to:n}}get el(){return Object(n.k)(this)}},S=class{constructor(t){Object(n.o)(this,t),this.routerDirection="forward",this.onClick=t=>{Object(s.d)(this.href,t,this.routerDirection,this.routerAnimation)}}render(){const t=Object(r.b)(this),e={href:this.href,rel:this.rel,target:this.target};return Object(n.j)(n.c,{onClick:this.onClick,class:Object(s.a)(this.color,{[t]:!0,"ion-activatable":!0})},Object(n.j)("a",Object.assign({},e),Object(n.j)("slot",null)))}};S.style=":host{--background:transparent;--color:var(--ion-color-primary, #3880ff);background:var(--background);color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}a{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit}"},98:function(t,e,o){"use strict";o.d(e,"a",(function(){return r})),o.d(e,"b",(function(){return i})),o.d(e,"c",(function(){return n})),o.d(e,"d",(function(){return a}));const n=(t,e)=>null!==e.closest(t),r=(t,e)=>"string"==typeof t&&t.length>0?Object.assign({"ion-color":!0,["ion-color-"+t]:!0},e):e,i=t=>{const e={};return(t=>{if(void 0!==t){return(Array.isArray(t)?t:t.split(" ")).filter(t=>null!=t).map(t=>t.trim()).filter(t=>""!==t)}return[]})(t).forEach(t=>e[t]=!0),e},s=/^[a-z][a-z0-9+\-.]*:/,a=async(t,e,o,n)=>{if(null!=t&&"#"!==t[0]&&!s.test(t)){const r=document.querySelector("ion-router");if(r)return null!=e&&e.preventDefault(),r.push(t,o,n)}return!1}}}]);