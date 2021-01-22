(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{103:function(t,e,s){"use strict";s.d(e,"a",(function(){return n})),s.d(e,"b",(function(){return r})),s.d(e,"c",(function(){return o})),s.d(e,"d",(function(){return c})),s.d(e,"e",(function(){return l}));const i={getEngine(){const t=window;return t.TapticEngine||t.Capacitor&&t.Capacitor.isPluginAvailable("Haptics")&&t.Capacitor.Plugins.Haptics},available(){return!!this.getEngine()},isCordova:()=>!!window.TapticEngine,isCapacitor:()=>!!window.Capacitor,impact(t){const e=this.getEngine();if(!e)return;const s=this.isCapacitor()?t.style.toUpperCase():t.style;e.impact({style:s})},notification(t){const e=this.getEngine();if(!e)return;const s=this.isCapacitor()?t.style.toUpperCase():t.style;e.notification({style:s})},selection(){this.impact({style:"light"})},selectionStart(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionStart():t.gestureSelectionStart())},selectionChanged(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionChanged():t.gestureSelectionChanged())},selectionEnd(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionEnd():t.gestureSelectionEnd())}},o=()=>{i.selection()},n=()=>{i.selectionStart()},r=()=>{i.selectionChanged()},l=()=>{i.selectionEnd()},c=t=>{i.impact(t)}},77:function(t,e,s){"use strict";s.r(e),s.d(e,"ion_reorder",(function(){return r})),s.d(e,"ion_reorder_group",(function(){return l}));var i=s(1),o=s(2),n=s(103);const r=class{constructor(t){Object(i.o)(this,t)}onClick(t){const e=this.el.closest("ion-reorder-group");t.preventDefault(),e&&e.disabled||t.stopImmediatePropagation()}render(){const t=Object(o.b)(this),e="ios"===t?"reorder-three-outline":"reorder-two-sharp";return Object(i.j)(i.c,{class:t},Object(i.j)("slot",null,Object(i.j)("ion-icon",{name:e,lazy:!1,class:"reorder-icon",part:"icon"})))}get el(){return Object(i.k)(this)}};r.style={ios:":host([slot]){display:none;line-height:0;z-index:100}.reorder-icon{display:block;font-size:22px}.reorder-icon{font-size:34px;opacity:0.4}",md:":host([slot]){display:none;line-height:0;z-index:100}.reorder-icon{display:block;font-size:22px}.reorder-icon{font-size:31px;opacity:0.3}"};const l=class{constructor(t){Object(i.o)(this,t),this.ionItemReorder=Object(i.g)(this,"ionItemReorder",7),this.lastToIndex=-1,this.cachedHeights=[],this.scrollElTop=0,this.scrollElBottom=0,this.scrollElInitial=0,this.containerTop=0,this.containerBottom=0,this.state=0,this.disabled=!0}disabledChanged(){this.gesture&&this.gesture.enable(!this.disabled)}async connectedCallback(){const t=this.el.closest("ion-content");t&&(this.scrollEl=await t.getScrollElement()),this.gesture=(await Promise.resolve().then(s.bind(null,15))).createGesture({el:this.el,gestureName:"reorder",gesturePriority:110,threshold:0,direction:"y",passive:!1,canStart:t=>this.canStart(t),onStart:t=>this.onStart(t),onMove:t=>this.onMove(t),onEnd:()=>this.onEnd()}),this.disabledChanged()}disconnectedCallback(){this.onEnd(),this.gesture&&(this.gesture.destroy(),this.gesture=void 0)}complete(t){return Promise.resolve(this.completeSync(t))}canStart(t){if(this.selectedItemEl||0!==this.state)return!1;const e=t.event.target.closest("ion-reorder");if(!e)return!1;const s=a(e,this.el);return!!s&&(t.data=s,!0)}onStart(t){t.event.preventDefault();const e=this.selectedItemEl=t.data,s=this.cachedHeights;s.length=0;const i=this.el,o=i.children;if(!o||0===o.length)return;let r=0;for(let t=0;t<o.length;t++){const e=o[t];r+=e.offsetHeight,s.push(r),e.$ionIndex=t}const l=i.getBoundingClientRect();if(this.containerTop=l.top,this.containerBottom=l.bottom,this.scrollEl){const t=this.scrollEl.getBoundingClientRect();this.scrollElInitial=this.scrollEl.scrollTop,this.scrollElTop=t.top+h,this.scrollElBottom=t.bottom-h}else this.scrollElInitial=0,this.scrollElTop=0,this.scrollElBottom=0;this.lastToIndex=c(e),this.selectedItemHeight=e.offsetHeight,this.state=1,e.classList.add(u),Object(n.a)()}onMove(t){const e=this.selectedItemEl;if(!e)return;const s=this.autoscroll(t.currentY),i=this.containerTop-s,o=this.containerBottom-s,r=Math.max(i,Math.min(t.currentY,o)),l=s+r-t.startY,a=r-i,h=this.itemIndexForTop(a);if(h!==this.lastToIndex){const t=c(e);this.lastToIndex=h,Object(n.b)(),this.reorderMove(t,h)}e.style.transform=`translateY(${l}px)`}onEnd(){const t=this.selectedItemEl;if(this.state=2,!t)return void(this.state=0);const e=this.lastToIndex,s=c(t);e===s?this.completeSync():this.ionItemReorder.emit({from:s,to:e,complete:this.completeSync.bind(this)}),Object(n.e)()}completeSync(t){const e=this.selectedItemEl;if(e&&2===this.state){const s=this.el.children,i=s.length,o=this.lastToIndex,n=c(e);if(o!==n&&(void 0===t||!0===t)){const t=n<o?s[o+1]:s[o];this.el.insertBefore(e,t)}Array.isArray(t)&&(t=p(t,n,o));for(let t=0;t<i;t++)s[t].style.transform="";e.style.transition="",e.classList.remove(u),this.selectedItemEl=void 0,this.state=0}return t}itemIndexForTop(t){const e=this.cachedHeights;let s=0;for(s=0;s<e.length&&!(e[s]>t);s++);return s}reorderMove(t,e){const s=this.selectedItemHeight,i=this.el.children;for(let o=0;o<i.length;o++){const n=i[o].style;let r="";o>t&&o<=e?r=`translateY(${-s}px)`:o<t&&o>=e&&(r=`translateY(${s}px)`),n.transform=r}}autoscroll(t){if(!this.scrollEl)return 0;let e=0;return t<this.scrollElTop?e=-d:t>this.scrollElBottom&&(e=d),0!==e&&this.scrollEl.scrollBy(0,e),this.scrollEl.scrollTop-this.scrollElInitial}render(){const t=Object(o.b)(this);return Object(i.j)(i.c,{class:{[t]:!0,"reorder-enabled":!this.disabled,"reorder-list-active":0!==this.state}})}get el(){return Object(i.k)(this)}static get watchers(){return{disabled:["disabledChanged"]}}},c=t=>t.$ionIndex,a=(t,e)=>{let s;for(;t;){if(s=t.parentElement,s===e)return t;t=s}},h=60,d=10,u="reorder-selected",p=(t,e,s)=>{const i=t[e];return t.splice(e,1),t.splice(s,0,i),t.slice()};l.style=".reorder-list-active>*{-webkit-transition:-webkit-transform 300ms;transition:-webkit-transform 300ms;transition:transform 300ms;transition:transform 300ms, -webkit-transform 300ms;will-change:transform}.reorder-enabled{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.reorder-enabled ion-reorder{display:block;cursor:-webkit-grab;cursor:grab;pointer-events:all;-ms-touch-action:none;touch-action:none}.reorder-selected,.reorder-selected ion-reorder{cursor:-webkit-grabbing;cursor:grabbing}.reorder-selected{position:relative;-webkit-transition:none !important;transition:none !important;-webkit-box-shadow:0 0 10px rgba(0, 0, 0, 0.4);box-shadow:0 0 10px rgba(0, 0, 0, 0.4);opacity:0.8;z-index:100}.reorder-visible ion-reorder .reorder-icon{-webkit-transform:translate3d(0,  0,  0);transform:translate3d(0,  0,  0)}"}}]);