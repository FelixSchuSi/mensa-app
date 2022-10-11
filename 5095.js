"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[5095],{5095:(t,e,n)=>{n.r(e),n.d(e,{ion_route:()=>s,ion_route_redirect:()=>c,ion_router:()=>j,ion_router_link:()=>N});var r=n(1340),o=n(5121),i=n(8840),u=n(3007),a=n(3262),s=function(){function t(t){(0,o.r)(this,t),this.ionRouteDataChanged=(0,o.e)(this,"ionRouteDataChanged",7),this.url=""}return t.prototype.onUpdate=function(t){this.ionRouteDataChanged.emit(t)},t.prototype.onComponentProps=function(t,e){if(t!==e){var n=t?Object.keys(t):[],r=e?Object.keys(e):[];if(n.length===r.length)for(var o=0,i=n;o<i.length;o++){var u=i[o];if(t[u]!==e[u])return void this.onUpdate(t)}else this.onUpdate(t)}},t.prototype.connectedCallback=function(){this.ionRouteDataChanged.emit()},Object.defineProperty(t,"watchers",{get:function(){return{url:["onUpdate"],component:["onUpdate"],componentProps:["onComponentProps"]}},enumerable:!1,configurable:!0}),t}(),c=function(){function t(t){(0,o.r)(this,t),this.ionRouteRedirectChanged=(0,o.e)(this,"ionRouteRedirectChanged",7)}return t.prototype.propDidChange=function(){this.ionRouteRedirectChanged.emit()},t.prototype.connectedCallback=function(){this.ionRouteRedirectChanged.emit()},Object.defineProperty(t,"watchers",{get:function(){return{from:["propDidChange"],to:["propDidChange"]}},enumerable:!1,configurable:!0}),t}(),h="root",l="forward",f=function(t){return"/"+t.filter((function(t){return t.length>0})).join("/")},d=function(t){if(null==t)return[""];var e=t.split("?")[0].split("/").map((function(t){return t.trim()})).filter((function(t){return t.length>0}));return 0===e.length?[""]:e},p=function(t,e,n,o,u,a){return void 0===u&&(u=!1),(0,r.mG)(void 0,void 0,void 0,(function(){var s,c,l,f;return(0,r.Jh)(this,(function(r){switch(r.label){case 0:return r.trys.push([0,6,,7]),s=m(t),o>=e.length||!s?[2,u]:[4,new Promise((function(t){return(0,i.c)(s,t)}))];case 1:return r.sent(),c=e[o],[4,s.setRouteId(c.id,c.params,n,a)];case 2:return(l=r.sent()).changed&&(n=h,u=!0),[4,p(l.element,e,n,o+1,u,a)];case 3:return u=r.sent(),l.markVisible?[4,l.markVisible()]:[3,5];case 4:r.sent(),r.label=5;case 5:return[2,u];case 6:return f=r.sent(),console.error(f),[2,!1];case 7:return[2]}}))}))},v=function(t){return(0,r.mG)(void 0,void 0,void 0,(function(){var e,n,o,i;return(0,r.Jh)(this,(function(r){switch(r.label){case 0:e=[],o=t,r.label=1;case 1:return(n=m(o))?[4,n.getRouteId()]:[3,3];case 2:return(i=r.sent())?(o=i.element,i.element=void 0,e.push(i),[3,4]):[3,5];case 3:return[3,5];case 4:return[3,1];case 5:return[2,{ids:e,outlet:n}]}}))}))},g=":not([no-router]) ion-nav, :not([no-router]) ion-tabs, :not([no-router]) ion-router-outlet",m=function(t){if(t)return t.matches(g)?t:t.querySelector(g)||void 0},b=function(t,e){return e.find((function(e){return function(t,e){var n=e.from;if(void 0===e.to)return!1;if(n.length>t.length)return!1;for(var r=0;r<n.length;r++){var o=n[r];if("*"===o)return!0;if(o!==t[r])return!1}return n.length===t.length}(t,e)}))},w=function(t,e){for(var n=Math.min(t.length,e.length),r=0;r<n&&t[r].toLowerCase()===e[r].id;r++);return r},y=function(t,e){for(var n,r=new E(t),o=!1,i=0;i<e.length;i++){var u=e[i].path;if(""===u[0])o=!0;else{for(var a=0,s=u;a<s.length;a++){var c=s[a],h=r.next();if(":"===c[0]){if(""===h)return null;((n=n||[])[i]||(n[i]={}))[c.slice(1)]=h}else if(h!==c)return null}o=!1}}return o&&o!==(""===r.next())?null:n?e.map((function(t,e){return{id:t.id,path:t.path,params:R(t.params,n[e]),beforeEnter:t.beforeEnter,beforeLeave:t.beforeLeave}})):e},R=function(t,e){return t||e?Object.assign(Object.assign({},t),e):void 0},C=function(t,e){for(var n=null,r=0,o=0,i=e;o<i.length;o++){var u=i[o],a=y(t,u);if(null!==a){var s=P(a);s>r&&(r=s,n=a)}}return n},P=function(t){for(var e=1,n=1,r=0,o=t;r<o.length;r++)for(var i=0,u=o[r].path;i<u.length;i++){var a=u[i];":"===a[0]?e+=Math.pow(1,n):""!==a&&(e+=Math.pow(2,n)),n++}return e},E=function(){function t(t){this.path=t.slice()}return t.prototype.next=function(){return this.path.length>0?this.path.shift():""},t}(),k=function(t){return Array.from(t.children).filter((function(t){return"ION-ROUTE-REDIRECT"===t.tagName})).map((function(t){var e=D(t,"to");return{from:d(D(t,"from")),to:null==e?void 0:d(e)}}))},S=function(t){return G(L(t))},L=function(t,e){return void 0===e&&(e=t),Array.from(e.children).filter((function(t){return"ION-ROUTE"===t.tagName&&t.component})).map((function(e){var n=D(e,"component");if(null==n)throw new Error("component missing in ion-route");return{path:d(D(e,"url")),id:n.toLowerCase(),params:e.componentProps,beforeLeave:e.beforeLeave,beforeEnter:e.beforeEnter,children:L(t,e)}}))},D=function(t,e){return e in t?t[e]:t.hasAttribute(e)?t.getAttribute(e):null},G=function(t){for(var e=[],n=0,r=t;n<r.length;n++){var o=r[n];O([],e,o)}return e},O=function(t,e,n){var r=t.slice();if(r.push({id:n.id,path:n.path,params:n.params,beforeLeave:n.beforeLeave,beforeEnter:n.beforeEnter}),0!==n.children.length)for(var o=0,i=n.children;o<i.length;o++){var u=i[o];O(r,e,u)}else e.push(r)},j=function(){function t(t){(0,o.r)(this,t),this.ionRouteWillChange=(0,o.e)(this,"ionRouteWillChange",7),this.ionRouteDidChange=(0,o.e)(this,"ionRouteDidChange",7),this.previousPath=null,this.busy=!1,this.state=0,this.lastState=0,this.root="/",this.useHash=!0}return t.prototype.componentWillLoad=function(){return(0,r.mG)(this,void 0,void 0,(function(){return(0,r.Jh)(this,(function(t){switch(t.label){case 0:return console.debug("[ion-router] router will load"),[4,m(document.body)?Promise.resolve():new Promise((function(t){window.addEventListener("ionNavWillLoad",t,{once:!0})}))];case 1:return t.sent(),console.debug("[ion-router] found nav"),[4,this.onRoutesChanged()];case 2:return t.sent(),[2]}}))}))},t.prototype.componentDidLoad=function(){window.addEventListener("ionRouteRedirectChanged",(0,i.n)(this.onRedirectChanged.bind(this),10)),window.addEventListener("ionRouteDataChanged",(0,i.n)(this.onRoutesChanged.bind(this),100))},t.prototype.onPopState=function(){return(0,r.mG)(this,void 0,void 0,(function(){var t,e,n;return(0,r.Jh)(this,(function(r){switch(r.label){case 0:return t=this.historyDirection(),e=this.getPath(),[4,this.runGuards(e)];case 1:return!0!==(n=r.sent())?("object"==typeof n&&(e=d(n.redirect)),[2,!1]):(console.debug("[ion-router] URL changed -> update nav",e,t),[2,this.writeNavStateRoot(e,t)])}}))}))},t.prototype.onBackButton=function(t){var e=this;t.detail.register(0,(function(t){e.back(),t()}))},t.prototype.canTransition=function(){return(0,r.mG)(this,void 0,void 0,(function(){var t;return(0,r.Jh)(this,(function(e){switch(e.label){case 0:return[4,this.runGuards()];case 1:return!0!==(t=e.sent())?"object"==typeof t?[2,t.redirect]:[2,!1]:[2,!0]}}))}))},t.prototype.push=function(t,e,n){return void 0===e&&(e="forward"),(0,r.mG)(this,void 0,void 0,(function(){var o,i,u;return(0,r.Jh)(this,(function(r){switch(r.label){case 0:return t.startsWith(".")&&(t=new URL(t,window.location.href).pathname),console.debug("[ion-router] URL pushed -> updating nav",t,e),o=d(t),i=t.split("?")[1],[4,this.runGuards(o)];case 1:if(!0!==(u=r.sent())){if("object"!=typeof u)return[2,!1];o=d(u.redirect),i=u.redirect.split("?")[1]}return this.setPath(o,e,i),[2,this.writeNavStateRoot(o,e,n)]}}))}))},t.prototype.back=function(){return window.history.back(),Promise.resolve(this.waitPromise)},t.prototype.printDebug=function(){return(0,r.mG)(this,void 0,void 0,(function(){return(0,r.Jh)(this,(function(t){return console.debug("CURRENT PATH",this.getPath()),console.debug("PREVIOUS PATH",this.previousPath),function(t){console.group("[ion-core] ROUTES["+t.length+"]");for(var e=function(t){var e=[];t.forEach((function(t){return e.push.apply(e,t.path)}));var n=t.map((function(t){return t.id}));console.debug("%c "+f(e),"font-weight: bold; padding-left: 20px","=>\t","("+n.join(", ")+")")},n=0,r=t;n<r.length;n++)e(r[n]);console.groupEnd()}(S(this.el)),function(t){console.group("[ion-core] REDIRECTS["+t.length+"]");for(var e=0,n=t;e<n.length;e++){var r=n[e];r.to&&console.debug("FROM: ","$c "+f(r.from),"font-weight: bold"," TO: ","$c "+f(r.to),"font-weight: bold")}console.groupEnd()}(k(this.el)),[2]}))}))},t.prototype.navChanged=function(t){return(0,r.mG)(this,void 0,void 0,(function(){var e,n,o,i,u,a;return(0,r.Jh)(this,(function(r){switch(r.label){case 0:return this.busy?(console.warn("[ion-router] router is busy, navChanged was cancelled"),[2,!1]):[4,v(window.document.body)];case 1:return e=r.sent(),n=e.ids,o=e.outlet,i=S(this.el),u=function(t,e){for(var n=null,r=0,o=t.map((function(t){return t.id})),i=0,u=e;i<u.length;i++){var a=u[i],s=w(o,a);s>r&&(n=a,r=s)}return n?n.map((function(e,n){return{id:e.id,path:e.path,params:R(e.params,t[n]&&t[n].params)}})):null}(n,i),u?(a=function(t){for(var e=[],n=0,r=t;n<r.length;n++)for(var o=r[n],i=0,u=o.path;i<u.length;i++){var a=u[i];if(":"===a[0]){var s=o.params&&o.params[a.slice(1)];if(!s)return null;e.push(s)}else""!==a&&e.push(a)}return e}(u),a?(console.debug("[ion-router] nav changed -> update URL",n,a),this.setPath(a,t),[4,this.safeWriteNavState(o,u,h,a,null,n.length)]):(console.warn("[ion-router] router could not match path because some required param is missing"),[2,!1])):(console.warn("[ion-router] no matching URL for ",n.map((function(t){return t.id}))),[2,!1]);case 2:return r.sent(),[2,!0]}}))}))},t.prototype.onRedirectChanged=function(){var t=this.getPath();t&&b(t,k(this.el))&&this.writeNavStateRoot(t,h)},t.prototype.onRoutesChanged=function(){return this.writeNavStateRoot(this.getPath(),h)},t.prototype.historyDirection=function(){var t=window;null===t.history.state&&(this.state++,t.history.replaceState(this.state,t.document.title,t.document.location&&t.document.location.href));var e=t.history.state,n=this.lastState;return this.lastState=e,e>n||e>=n&&n>0?l:e<n?"back":h},t.prototype.writeNavStateRoot=function(t,e,n){return(0,r.mG)(this,void 0,void 0,(function(){var o,i,u,a,s;return(0,r.Jh)(this,(function(r){return t?(o=k(this.el),i=b(t,o),u=null,i&&(this.setPath(i.to,e),u=i.from,t=i.to),a=S(this.el),(s=C(t,a))?[2,this.safeWriteNavState(document.body,s,e,t,u,0,n)]:(console.error("[ion-router] the path does not match any route"),[2,!1])):(console.error("[ion-router] URL is not part of the routing set"),[2,!1])}))}))},t.prototype.safeWriteNavState=function(t,e,n,o,i,u,a){return void 0===u&&(u=0),(0,r.mG)(this,void 0,void 0,(function(){var s,c,h;return(0,r.Jh)(this,(function(r){switch(r.label){case 0:return[4,this.lock()];case 1:s=r.sent(),c=!1,r.label=2;case 2:return r.trys.push([2,4,,5]),[4,this.writeNavState(t,e,n,o,i,u,a)];case 3:return c=r.sent(),[3,5];case 4:return h=r.sent(),console.error(h),[3,5];case 5:return s(),[2,c]}}))}))},t.prototype.lock=function(){return(0,r.mG)(this,void 0,void 0,(function(){var t,e;return(0,r.Jh)(this,(function(n){switch(n.label){case 0:return t=this.waitPromise,this.waitPromise=new Promise((function(t){return e=t})),void 0===t?[3,2]:[4,t];case 1:n.sent(),n.label=2;case 2:return[2,e]}}))}))},t.prototype.runGuards=function(t,e){return void 0===t&&(t=this.getPath()),void 0===e&&(e=d(this.previousPath)),(0,r.mG)(this,void 0,void 0,(function(){var n,o,i,u,a,s,c,h,l;return(0,r.Jh)(this,(function(r){switch(r.label){case 0:return t&&e?(n=S(this.el),o=C(t,n),i=C(e,n),u=o&&o[o.length-1].beforeEnter,(a=i&&i[i.length-1].beforeLeave)?[4,a()]:[3,2]):[2,!0];case 1:return c=r.sent(),[3,3];case 2:c=!0,r.label=3;case 3:return!1===(s=c)||"object"==typeof s?[2,s]:u?[4,u()]:[3,5];case 4:return l=r.sent(),[3,6];case 5:l=!0,r.label=6;case 6:return!1===(h=l)||"object"==typeof h?[2,h]:[2,!0]}}))}))},t.prototype.writeNavState=function(t,e,n,o,i,u,a){return void 0===u&&(u=0),(0,r.mG)(this,void 0,void 0,(function(){var s,c;return(0,r.Jh)(this,(function(r){switch(r.label){case 0:return this.busy?(console.warn("[ion-router] router is busy, transition was cancelled"),[2,!1]):(this.busy=!0,(s=this.routeChangeEvent(o,i))&&this.ionRouteWillChange.emit(s),[4,p(t,e,n,u,!1,a)]);case 1:return c=r.sent(),this.busy=!1,c&&console.debug("[ion-router] route changed",o),s&&this.ionRouteDidChange.emit(s),[2,c]}}))}))},t.prototype.setPath=function(t,e,n){this.state++,function(t,e,n,o,i,u,a){var s=f((0,r.ev)((0,r.ev)([],d(e)),o));n&&(s="#"+s),void 0!==a&&(s=s+"?"+a),i===l?t.pushState(u,"",s):t.replaceState(u,"",s)}(window.history,this.root,this.useHash,t,e,this.state,n)},t.prototype.getPath=function(){return function(t,e,n){var r=t.pathname;if(n){var o=t.hash;r="#"===o[0]?o.slice(1):""}return function(t,e){if(t.length>e.length)return null;if(t.length<=1&&""===t[0])return e;for(var n=0;n<t.length;n++)if(t[n].length>0&&t[n]!==e[n])return null;return e.length===t.length?[""]:e.slice(t.length)}(d(e),d(r))}(window.location,this.root,this.useHash)},t.prototype.routeChangeEvent=function(t,e){var n=this.previousPath,r=f(t);return this.previousPath=r,r===n?null:{from:n,redirectedFrom:e?f(e):null,to:r}},Object.defineProperty(t.prototype,"el",{get:function(){return(0,o.i)(this)},enumerable:!1,configurable:!0}),t}(),N=function(){function t(t){var e=this;(0,o.r)(this,t),this.routerDirection="forward",this.onClick=function(t){(0,a.o)(e.href,t,e.routerDirection,e.routerAnimation)}}return t.prototype.render=function(){var t,e=(0,u.b)(this),n={href:this.href,rel:this.rel,target:this.target};return(0,o.h)(o.H,{onClick:this.onClick,class:(0,a.c)(this.color,(t={},t[e]=!0,t["ion-activatable"]=!0,t))},(0,o.h)("a",Object.assign({},n),(0,o.h)("slot",null)))},t}();N.style=":host{--background:transparent;--color:var(--ion-color-primary, #3880ff);background:var(--background);color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}a{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit}"},3262:(t,e,n)=>{n.d(e,{c:()=>i,g:()=>u,h:()=>o,o:()=>s});var r=n(1340),o=function(t,e){return null!==e.closest(t)},i=function(t,e){var n;return"string"==typeof t&&t.length>0?Object.assign(((n={"ion-color":!0})["ion-color-"+t]=!0,n),e):e},u=function(t){var e={};return function(t){return void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter((function(t){return null!=t})).map((function(t){return t.trim()})).filter((function(t){return""!==t})):[]}(t).forEach((function(t){return e[t]=!0})),e},a=/^[a-z][a-z0-9+\-.]*:/,s=function(t,e,n,o){return(0,r.mG)(void 0,void 0,void 0,(function(){var i;return(0,r.Jh)(this,(function(r){return null!=t&&"#"!==t[0]&&!a.test(t)&&(i=document.querySelector("ion-router"))?(null!=e&&e.preventDefault(),[2,i.push(t,n,o)]):[2,!1]}))}))}}}]);