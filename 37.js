(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{49:function(i,n,t){"use strict";t.r(n),t.d(n,"ion_infinite_scroll",(function(){return l})),t.d(n,"ion_infinite_scroll_content",(function(){return r}));var e=t(1),s=t(4),o=t(87);const l=class{constructor(i){Object(e.o)(this,i),this.ionInfinite=Object(e.g)(this,"ionInfinite",7),this.thrPx=0,this.thrPc=0,this.didFire=!1,this.isBusy=!1,this.isLoading=!1,this.threshold="15%",this.disabled=!1,this.position="bottom",this.onScroll=()=>{const i=this.scrollEl;if(!i||!this.canStart())return 1;const n=this.el.offsetHeight;if(0===n)return 2;const t=i.scrollTop,e=i.scrollHeight,s=i.offsetHeight,o=0!==this.thrPc?s*this.thrPc:this.thrPx;if(("bottom"===this.position?e-n-t-o-s:t-n-o)<0){if(!this.didFire)return this.isLoading=!0,this.didFire=!0,this.ionInfinite.emit(),3}else this.didFire=!1;return 4}}thresholdChanged(){const i=this.threshold;i.lastIndexOf("%")>-1?(this.thrPx=0,this.thrPc=parseFloat(i)/100):(this.thrPx=parseFloat(i),this.thrPc=0)}disabledChanged(){const i=this.disabled;i&&(this.isLoading=!1,this.isBusy=!1),this.enableScrollEvents(!i)}async connectedCallback(){const i=this.el.closest("ion-content");i?(this.scrollEl=await i.getScrollElement(),this.thresholdChanged(),this.disabledChanged(),"top"===this.position&&Object(e.f)(()=>{this.scrollEl&&(this.scrollEl.scrollTop=this.scrollEl.scrollHeight-this.scrollEl.clientHeight)})):console.error("<ion-infinite-scroll> must be used inside an <ion-content>")}disconnectedCallback(){this.enableScrollEvents(!1),this.scrollEl=void 0}async complete(){const i=this.scrollEl;if(this.isLoading&&i&&(this.isLoading=!1,"top"===this.position)){this.isBusy=!0;const n=i.scrollHeight-i.scrollTop;requestAnimationFrame(()=>{Object(e.h)(()=>{const t=i.scrollHeight-n;requestAnimationFrame(()=>{Object(e.f)(()=>{i.scrollTop=t,this.isBusy=!1})})})})}}canStart(){return!(this.disabled||this.isBusy||!this.scrollEl||this.isLoading)}enableScrollEvents(i){this.scrollEl&&(i?this.scrollEl.addEventListener("scroll",this.onScroll):this.scrollEl.removeEventListener("scroll",this.onScroll))}render(){const i=Object(s.b)(this),n=this.disabled;return Object(e.j)(e.c,{class:{[i]:!0,"infinite-scroll-loading":this.isLoading,"infinite-scroll-enabled":!n}})}get el(){return Object(e.k)(this)}static get watchers(){return{threshold:["thresholdChanged"],disabled:["disabledChanged"]}}};l.style="ion-infinite-scroll{display:none;width:100%}.infinite-scroll-enabled{display:block}";const r=class{constructor(i){Object(e.o)(this,i)}componentDidLoad(){if(void 0===this.loadingSpinner){const i=Object(s.b)(this);this.loadingSpinner=s.c.get("infiniteLoadingSpinner",s.c.get("spinner","ios"===i?"lines":"crescent"))}}render(){const i=Object(s.b)(this);return Object(e.j)(e.c,{class:{[i]:!0,["infinite-scroll-content-"+i]:!0}},Object(e.j)("div",{class:"infinite-loading"},this.loadingSpinner&&Object(e.j)("div",{class:"infinite-loading-spinner"},Object(e.j)("ion-spinner",{name:this.loadingSpinner})),this.loadingText&&Object(e.j)("div",{class:"infinite-loading-text",innerHTML:Object(o.a)(this.loadingText)})))}};r.style={ios:"ion-infinite-scroll-content{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;min-height:84px;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.infinite-loading{margin-left:0;margin-right:0;margin-top:0;margin-bottom:32px;display:none;width:100%}.infinite-loading-text{margin-left:32px;margin-right:32px;margin-top:4px;margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.infinite-loading-text{margin-left:unset;margin-right:unset;-webkit-margin-start:32px;margin-inline-start:32px;-webkit-margin-end:32px;margin-inline-end:32px}}.infinite-scroll-loading ion-infinite-scroll-content>.infinite-loading{display:block}.infinite-scroll-content-ios .infinite-loading-text{color:var(--ion-color-step-600, #666666)}.infinite-scroll-content-ios .infinite-loading-spinner .spinner-lines-ios line,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-lines-small-ios line,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-crescent circle{stroke:var(--ion-color-step-600, #666666)}.infinite-scroll-content-ios .infinite-loading-spinner .spinner-bubbles circle,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-circles circle,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-dots circle{fill:var(--ion-color-step-600, #666666)}",md:"ion-infinite-scroll-content{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;min-height:84px;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.infinite-loading{margin-left:0;margin-right:0;margin-top:0;margin-bottom:32px;display:none;width:100%}.infinite-loading-text{margin-left:32px;margin-right:32px;margin-top:4px;margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.infinite-loading-text{margin-left:unset;margin-right:unset;-webkit-margin-start:32px;margin-inline-start:32px;-webkit-margin-end:32px;margin-inline-end:32px}}.infinite-scroll-loading ion-infinite-scroll-content>.infinite-loading{display:block}.infinite-scroll-content-md .infinite-loading-text{color:var(--ion-color-step-600, #666666)}.infinite-scroll-content-md .infinite-loading-spinner .spinner-lines-md line,.infinite-scroll-content-md .infinite-loading-spinner .spinner-lines-small-md line,.infinite-scroll-content-md .infinite-loading-spinner .spinner-crescent circle{stroke:var(--ion-color-step-600, #666666)}.infinite-scroll-content-md .infinite-loading-spinner .spinner-bubbles circle,.infinite-scroll-content-md .infinite-loading-spinner .spinner-circles circle,.infinite-scroll-content-md .infinite-loading-spinner .spinner-dots circle{fill:var(--ion-color-step-600, #666666)}"}},87:function(i,n,t){"use strict";t.d(n,"a",(function(){return e}));const e=i=>{try{if(i instanceof class{constructor(i){this.value=i}})return i.value;if(!l()||"string"!=typeof i||""===i)return i;const n=document.createDocumentFragment(),t=document.createElement("div");n.appendChild(t),t.innerHTML=i,c.forEach(i=>{const t=n.querySelectorAll(i);for(let i=t.length-1;i>=0;i--){const e=t[i];e.parentNode?e.parentNode.removeChild(e):n.removeChild(e);const l=o(e);for(let i=0;i<l.length;i++)s(l[i])}});const e=o(n);for(let i=0;i<e.length;i++)s(e[i]);const r=document.createElement("div");r.appendChild(n);const a=r.querySelector("div");return null!==a?a.innerHTML:r.innerHTML}catch(i){return console.error(i),""}},s=i=>{if(i.nodeType&&1!==i.nodeType)return;for(let n=i.attributes.length-1;n>=0;n--){const t=i.attributes.item(n),e=t.name;if(!r.includes(e.toLowerCase())){i.removeAttribute(e);continue}const s=t.value;null!=s&&s.toLowerCase().includes("javascript:")&&i.removeAttribute(e)}const n=o(i);for(let i=0;i<n.length;i++)s(n[i])},o=i=>null!=i.children?i.children:i.childNodes,l=()=>{const i=window,n=i&&i.Ionic&&i.Ionic.config;return!n||(n.get?n.get("sanitizerEnabled",!0):!0===n.sanitizerEnabled||void 0===n.sanitizerEnabled)},r=["class","id","href","src","name","slot"],c=["script","style","iframe","meta","link","object","embed"]}}]);