(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{87:function(t,e,i){"use strict";i.r(e),i.d(e,"ion_tab",(function(){return o})),i.d(e,"ion_tabs",(function(){return a}));var s=i(1),n=i(96);const o=class{constructor(t){Object(s.o)(this,t),this.loaded=!1,this.active=!1}async componentWillLoad(){this.active&&await this.setActive()}async setActive(){await this.prepareLazyLoaded(),this.active=!0}changeActive(t){t&&this.prepareLazyLoaded()}prepareLazyLoaded(){if(!this.loaded&&null!=this.component){this.loaded=!0;try{return Object(n.a)(this.delegate,this.el,this.component,["ion-page"])}catch(t){console.error(t)}}return Promise.resolve(void 0)}render(){const{tab:t,active:e,component:i}=this;return Object(s.j)(s.c,{role:"tabpanel","aria-hidden":e?null:"true","aria-labelledby":"tab-button-"+t,class:{"ion-page":void 0===i,"tab-hidden":!e}},Object(s.j)("slot",null))}get el(){return Object(s.k)(this)}static get watchers(){return{active:["changeActive"]}}};o.style=":host(.tab-hidden){display:none !important}";const a=class{constructor(t){Object(s.o)(this,t),this.ionNavWillLoad=Object(s.g)(this,"ionNavWillLoad",7),this.ionTabsWillChange=Object(s.g)(this,"ionTabsWillChange",3),this.ionTabsDidChange=Object(s.g)(this,"ionTabsDidChange",3),this.transitioning=!1,this.useRouter=!1,this.onTabClicked=t=>{const{href:e,tab:i}=t.detail;if(this.useRouter&&void 0!==e){const t=document.querySelector("ion-router");t&&t.push(e)}else this.select(i)}}async componentWillLoad(){if(this.useRouter||(this.useRouter=!!document.querySelector("ion-router")&&!this.el.closest("[no-router]")),!this.useRouter){const t=this.tabs;t.length>0&&await this.select(t[0])}this.ionNavWillLoad.emit()}componentWillRender(){const t=this.el.querySelector("ion-tab-bar");if(t){const e=this.selectedTab?this.selectedTab.tab:void 0;t.selectedTab=e}}async select(t){const e=r(this.tabs,t);return!!this.shouldSwitch(e)&&(await this.setActive(e),await this.notifyRouter(),this.tabSwitch(),!0)}async getTab(t){return r(this.tabs,t)}getSelected(){return Promise.resolve(this.selectedTab?this.selectedTab.tab:void 0)}async setRouteId(t){const e=r(this.tabs,t);return this.shouldSwitch(e)?(await this.setActive(e),{changed:!0,element:this.selectedTab,markVisible:()=>this.tabSwitch()}):{changed:!1,element:this.selectedTab}}async getRouteId(){const t=this.selectedTab&&this.selectedTab.tab;return void 0!==t?{id:t,element:this.selectedTab}:void 0}setActive(t){return this.transitioning?Promise.reject("transitioning already happening"):(this.transitioning=!0,this.leavingTab=this.selectedTab,this.selectedTab=t,this.ionTabsWillChange.emit({tab:t.tab}),t.active=!0,Promise.resolve())}tabSwitch(){const t=this.selectedTab,e=this.leavingTab;this.leavingTab=void 0,this.transitioning=!1,t&&e!==t&&(e&&(e.active=!1),this.ionTabsDidChange.emit({tab:t.tab}))}notifyRouter(){if(this.useRouter){const t=document.querySelector("ion-router");if(t)return t.navChanged("forward")}return Promise.resolve(!1)}shouldSwitch(t){const e=this.selectedTab;return void 0!==t&&t!==e&&!this.transitioning}get tabs(){return Array.from(this.el.querySelectorAll("ion-tab"))}render(){return Object(s.j)(s.c,{onIonTabButtonClick:this.onTabClicked},Object(s.j)("slot",{name:"top"}),Object(s.j)("div",{class:"tabs-inner"},Object(s.j)("slot",null)),Object(s.j)("slot",{name:"bottom"}))}get el(){return Object(s.k)(this)}},r=(t,e)=>{const i="string"==typeof e?t.find(t=>t.tab===e):e;return i||console.error(`tab with id: "${i}" does not exist`),i};a.style=":host{left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:100%;height:100%;contain:layout size style;z-index:0}.tabs-inner{position:relative;-ms-flex:1;flex:1;contain:layout size style}"},96:function(t,e,i){"use strict";i.d(e,"a",(function(){return s})),i.d(e,"b",(function(){return n}));const s=async(t,e,i,s,n)=>{if(t)return t.attachViewToDom(e,i,n,s);if("string"!=typeof i&&!(i instanceof HTMLElement))throw new Error("framework delegate is missing");const o="string"==typeof i?e.ownerDocument&&e.ownerDocument.createElement(i):i;return s&&s.forEach(t=>o.classList.add(t)),n&&Object.assign(o,n),e.appendChild(o),o.componentOnReady&&await o.componentOnReady(),o},n=(t,e)=>{if(e){if(t){const i=e.parentElement;return t.removeViewFromDom(i,e)}e.remove()}return Promise.resolve()}}}]);