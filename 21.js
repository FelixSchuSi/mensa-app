(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{49:function(t,i,e){"use strict";e.r(i),e.d(i,"ion_item_option",(function(){return a})),e.d(i,"ion_item_options",(function(){return l})),e.d(i,"ion_item_sliding",(function(){return p}));var n=e(1),o=e(3),s=e(77),r=e(78);const a=class{constructor(t){Object(n.o)(this,t),this.disabled=!1,this.expandable=!1,this.type="button",this.onClick=t=>{t.target.closest("ion-item-option")&&t.preventDefault()}}render(){const{disabled:t,expandable:i,href:e}=this,s=void 0===e?"button":"a",a=Object(o.b)(this),l="button"===s?{type:this.type}:{download:this.download,href:this.href,target:this.target};return Object(n.j)(n.c,{onClick:this.onClick,class:Object(r.a)(this.color,{[a]:!0,"item-option-disabled":t,"item-option-expandable":i,"ion-activatable":!0})},Object(n.j)(s,Object.assign({},l,{class:"button-native",part:"native",disabled:t}),Object(n.j)("span",{class:"button-inner"},Object(n.j)("slot",{name:"top"}),Object(n.j)("div",{class:"horizontal-wrapper"},Object(n.j)("slot",{name:"start"}),Object(n.j)("slot",{name:"icon-only"}),Object(n.j)("slot",null),Object(n.j)("slot",{name:"end"})),Object(n.j)("slot",{name:"bottom"})),"md"===a&&Object(n.j)("ion-ripple-effect",null)))}get el(){return Object(n.k)(this)}};a.style={ios:":host{--background:var(--ion-color-primary, #3880ff);--color:var(--ion-color-primary-contrast, #fff);background:var(--background);color:var(--color);font-family:var(--ion-font-family, inherit)}:host(.in-list.item-options-end:last-child){padding-right:calc(.7em + var(--ion-safe-area-right))}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.in-list.item-options-end:last-child){padding-right:unset;-webkit-padding-end:calc(.7em + var(--ion-safe-area-right));padding-inline-end:calc(.7em + var(--ion-safe-area-right))}}:host(.in-list.item-options-start:first-child){padding-left:calc(.7em + var(--ion-safe-area-left))}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.in-list.item-options-start:first-child){padding-left:unset;-webkit-padding-start:calc(.7em + var(--ion-safe-area-left));padding-inline-start:calc(.7em + var(--ion-safe-area-left))}}:host(.ion-color){background:var(--ion-color-base);color:var(--ion-color-contrast)}.button-native{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;padding-left:0.7em;padding-right:0.7em;padding-top:0;padding-bottom:0;display:inline-block;position:relative;width:100%;height:100%;border:0;outline:none;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;-webkit-box-sizing:border-box;box-sizing:border-box}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.button-native{padding-left:unset;padding-right:unset;-webkit-padding-start:0.7em;padding-inline-start:0.7em;-webkit-padding-end:0.7em;padding-inline-end:0.7em}}.button-inner{display:-ms-flexbox;display:flex;-ms-flex-flow:column nowrap;flex-flow:column nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%}.horizontal-wrapper{display:-ms-flexbox;display:flex;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%}::slotted(*){-ms-flex-negative:0;flex-shrink:0}::slotted([slot=start]){margin-left:0;margin-right:5px;margin-top:0;margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted([slot=start]){margin-left:unset;margin-right:unset;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:5px;margin-inline-end:5px}}::slotted([slot=end]){margin-left:5px;margin-right:0;margin-top:0;margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted([slot=end]){margin-left:unset;margin-right:unset;-webkit-margin-start:5px;margin-inline-start:5px;-webkit-margin-end:0;margin-inline-end:0}}::slotted([slot=icon-only]){padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:10px;margin-right:10px;margin-top:0;margin-bottom:0;min-width:0.9em;font-size:1.8em}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted([slot=icon-only]){margin-left:unset;margin-right:unset;-webkit-margin-start:10px;margin-inline-start:10px;-webkit-margin-end:10px;margin-inline-end:10px}}:host(.item-option-expandable){-ms-flex-negative:0;flex-shrink:0;-webkit-transition-duration:0;transition-duration:0;-webkit-transition-property:none;transition-property:none;-webkit-transition-timing-function:cubic-bezier(0.65, 0.05, 0.36, 1);transition-timing-function:cubic-bezier(0.65, 0.05, 0.36, 1)}:host(.item-option-disabled){pointer-events:none}:host(.item-option-disabled) .button-native{cursor:default;opacity:0.5;pointer-events:none}:host{font-size:16px}:host(.ion-activated){background:var(--ion-color-primary-shade, #3171e0)}:host(.ion-color.ion-activated){background:var(--ion-color-shade)}",md:":host{--background:var(--ion-color-primary, #3880ff);--color:var(--ion-color-primary-contrast, #fff);background:var(--background);color:var(--color);font-family:var(--ion-font-family, inherit)}:host(.in-list.item-options-end:last-child){padding-right:calc(.7em + var(--ion-safe-area-right))}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.in-list.item-options-end:last-child){padding-right:unset;-webkit-padding-end:calc(.7em + var(--ion-safe-area-right));padding-inline-end:calc(.7em + var(--ion-safe-area-right))}}:host(.in-list.item-options-start:first-child){padding-left:calc(.7em + var(--ion-safe-area-left))}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.in-list.item-options-start:first-child){padding-left:unset;-webkit-padding-start:calc(.7em + var(--ion-safe-area-left));padding-inline-start:calc(.7em + var(--ion-safe-area-left))}}:host(.ion-color){background:var(--ion-color-base);color:var(--ion-color-contrast)}.button-native{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;padding-left:0.7em;padding-right:0.7em;padding-top:0;padding-bottom:0;display:inline-block;position:relative;width:100%;height:100%;border:0;outline:none;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;-webkit-box-sizing:border-box;box-sizing:border-box}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.button-native{padding-left:unset;padding-right:unset;-webkit-padding-start:0.7em;padding-inline-start:0.7em;-webkit-padding-end:0.7em;padding-inline-end:0.7em}}.button-inner{display:-ms-flexbox;display:flex;-ms-flex-flow:column nowrap;flex-flow:column nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%}.horizontal-wrapper{display:-ms-flexbox;display:flex;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%}::slotted(*){-ms-flex-negative:0;flex-shrink:0}::slotted([slot=start]){margin-left:0;margin-right:5px;margin-top:0;margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted([slot=start]){margin-left:unset;margin-right:unset;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:5px;margin-inline-end:5px}}::slotted([slot=end]){margin-left:5px;margin-right:0;margin-top:0;margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted([slot=end]){margin-left:unset;margin-right:unset;-webkit-margin-start:5px;margin-inline-start:5px;-webkit-margin-end:0;margin-inline-end:0}}::slotted([slot=icon-only]){padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:10px;margin-right:10px;margin-top:0;margin-bottom:0;min-width:0.9em;font-size:1.8em}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted([slot=icon-only]){margin-left:unset;margin-right:unset;-webkit-margin-start:10px;margin-inline-start:10px;-webkit-margin-end:10px;margin-inline-end:10px}}:host(.item-option-expandable){-ms-flex-negative:0;flex-shrink:0;-webkit-transition-duration:0;transition-duration:0;-webkit-transition-property:none;transition-property:none;-webkit-transition-timing-function:cubic-bezier(0.65, 0.05, 0.36, 1);transition-timing-function:cubic-bezier(0.65, 0.05, 0.36, 1)}:host(.item-option-disabled){pointer-events:none}:host(.item-option-disabled) .button-native{cursor:default;opacity:0.5;pointer-events:none}:host{font-size:14px;font-weight:500;text-transform:uppercase}"};const l=class{constructor(t){Object(n.o)(this,t),this.ionSwipe=Object(n.g)(this,"ionSwipe",7),this.side="end"}async fireSwipeEvent(){this.ionSwipe.emit({side:this.side})}render(){const t=Object(o.b)(this),i=Object(s.j)(this.side);return Object(n.j)(n.c,{class:{[t]:!0,["item-options-"+t]:!0,"item-options-start":!i,"item-options-end":i}})}get el(){return Object(n.k)(this)}};l.style={ios:"ion-item-options{top:0;right:0;-ms-flex-pack:end;justify-content:flex-end;display:none;position:absolute;height:100%;font-size:14px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1}[dir=rtl] ion-item-options,:host-context([dir=rtl]) ion-item-options{-ms-flex-pack:start;justify-content:flex-start}[dir=rtl] ion-item-options:not(.item-options-end),:host-context([dir=rtl]) ion-item-options:not(.item-options-end){right:auto;left:0;-ms-flex-pack:end;justify-content:flex-end}.item-options-start{right:auto;left:0;-ms-flex-pack:start;justify-content:flex-start}[dir=rtl] .item-options-start,:host-context([dir=rtl]) .item-options-start{-ms-flex-pack:end;justify-content:flex-end}.item-options-start ion-item-option:first-child{padding-right:var(--ion-safe-area-left)}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.item-options-start ion-item-option:first-child{padding-right:unset;-webkit-padding-end:var(--ion-safe-area-left);padding-inline-end:var(--ion-safe-area-left)}}.item-options-end ion-item-option:last-child{padding-right:var(--ion-safe-area-right)}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.item-options-end ion-item-option:last-child{padding-right:unset;-webkit-padding-end:var(--ion-safe-area-right);padding-inline-end:var(--ion-safe-area-right)}}[dir=rtl] .item-sliding-active-slide.item-sliding-active-options-start ion-item-options:not(.item-options-end),:host-context([dir=rtl]) .item-sliding-active-slide.item-sliding-active-options-start ion-item-options:not(.item-options-end){width:100%;visibility:visible}.item-sliding-active-slide ion-item-options{display:-ms-flexbox;display:flex;visibility:hidden}.item-sliding-active-slide.item-sliding-active-options-start .item-options-start,.item-sliding-active-slide.item-sliding-active-options-end ion-item-options:not(.item-options-start){width:100%;visibility:visible}.item-options-ios{border-bottom-width:0;border-bottom-style:solid;border-bottom-color:var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-250, #c8c7cc)))}.item-options-ios.item-options-end{border-bottom-width:0.55px}.list-ios-lines-none .item-options-ios{border-bottom-width:0}.list-ios-lines-full .item-options-ios,.list-ios-lines-inset .item-options-ios.item-options-end{border-bottom-width:0.55px}",md:"ion-item-options{top:0;right:0;-ms-flex-pack:end;justify-content:flex-end;display:none;position:absolute;height:100%;font-size:14px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1}[dir=rtl] ion-item-options,:host-context([dir=rtl]) ion-item-options{-ms-flex-pack:start;justify-content:flex-start}[dir=rtl] ion-item-options:not(.item-options-end),:host-context([dir=rtl]) ion-item-options:not(.item-options-end){right:auto;left:0;-ms-flex-pack:end;justify-content:flex-end}.item-options-start{right:auto;left:0;-ms-flex-pack:start;justify-content:flex-start}[dir=rtl] .item-options-start,:host-context([dir=rtl]) .item-options-start{-ms-flex-pack:end;justify-content:flex-end}.item-options-start ion-item-option:first-child{padding-right:var(--ion-safe-area-left)}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.item-options-start ion-item-option:first-child{padding-right:unset;-webkit-padding-end:var(--ion-safe-area-left);padding-inline-end:var(--ion-safe-area-left)}}.item-options-end ion-item-option:last-child{padding-right:var(--ion-safe-area-right)}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.item-options-end ion-item-option:last-child{padding-right:unset;-webkit-padding-end:var(--ion-safe-area-right);padding-inline-end:var(--ion-safe-area-right)}}[dir=rtl] .item-sliding-active-slide.item-sliding-active-options-start ion-item-options:not(.item-options-end),:host-context([dir=rtl]) .item-sliding-active-slide.item-sliding-active-options-start ion-item-options:not(.item-options-end){width:100%;visibility:visible}.item-sliding-active-slide ion-item-options{display:-ms-flexbox;display:flex;visibility:hidden}.item-sliding-active-slide.item-sliding-active-options-start .item-options-start,.item-sliding-active-slide.item-sliding-active-options-end ion-item-options:not(.item-options-start){width:100%;visibility:visible}.item-options-md{border-bottom-width:0;border-bottom-style:solid;border-bottom-color:var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-150, rgba(0, 0, 0, 0.13))))}.list-md-lines-none .item-options-md{border-bottom-width:0}.list-md-lines-full .item-options-md,.list-md-lines-inset .item-options-md.item-options-end{border-bottom-width:1px}"};let d;const p=class{constructor(t){Object(n.o)(this,t),this.ionDrag=Object(n.g)(this,"ionDrag",7),this.item=null,this.openAmount=0,this.initialOpenAmount=0,this.optsWidthRightSide=0,this.optsWidthLeftSide=0,this.sides=0,this.optsDirty=!0,this.state=2,this.disabled=!1}disabledChanged(){this.gesture&&this.gesture.enable(!this.disabled)}async connectedCallback(){this.item=this.el.querySelector("ion-item"),await this.updateOptions(),this.gesture=(await e.e(0).then(e.bind(null,82))).createGesture({el:this.el,gestureName:"item-swipe",gesturePriority:100,threshold:5,canStart:t=>this.canStart(t),onStart:()=>this.onStart(),onMove:t=>this.onMove(t),onEnd:t=>this.onEnd(t)}),this.disabledChanged()}disconnectedCallback(){this.gesture&&(this.gesture.destroy(),this.gesture=void 0),this.item=null,this.leftOptions=this.rightOptions=void 0,d===this.el&&(d=void 0)}getOpenAmount(){return Promise.resolve(this.openAmount)}getSlidingRatio(){return Promise.resolve(this.getSlidingRatioSync())}async open(t){if(null===this.item)return;const i=this.getOptions(t);if(!i)return;void 0===t&&(t=i===this.leftOptions?"start":"end"),t=Object(s.j)(t)?"end":"start";const e=this.openAmount<0,n=this.openAmount>0;e&&i===this.leftOptions||n&&i===this.rightOptions||(this.closeOpened(),this.state=4,requestAnimationFrame(()=>{this.calculateOptsWidth();const i="end"===t?this.optsWidthRightSide:-this.optsWidthLeftSide;d=this.el,this.setOpenAmount(i,!1),this.state="end"===t?8:16}))}async close(){this.setOpenAmount(0,!0)}async closeOpened(){return void 0!==d&&(d.close(),d=void 0,!0)}getOptions(t){return void 0===t?this.leftOptions||this.rightOptions:"start"===t?this.leftOptions:this.rightOptions}async updateOptions(){const t=this.el.querySelectorAll("ion-item-options");let i=0;this.leftOptions=this.rightOptions=void 0;for(let e=0;e<t.length;e++){const n=await t.item(e).componentOnReady();"start"===(Object(s.j)(n.side)?"end":"start")?(this.leftOptions=n,i|=1):(this.rightOptions=n,i|=2)}this.optsDirty=!0,this.sides=i}canStart(t){if("rtl"===document.dir?window.innerWidth-t.startX<15:t.startX<15)return!1;return d&&d!==this.el?(this.closeOpened(),!1):!(!this.rightOptions&&!this.leftOptions)}onStart(){d=this.el,void 0!==this.tmr&&(clearTimeout(this.tmr),this.tmr=void 0),0===this.openAmount&&(this.optsDirty=!0,this.state=4),this.initialOpenAmount=this.openAmount,this.item&&(this.item.style.transition="none")}onMove(t){this.optsDirty&&this.calculateOptsWidth();let i,e=this.initialOpenAmount-t.deltaX;switch(this.sides){case 2:e=Math.max(0,e);break;case 1:e=Math.min(0,e);break;case 3:break;case 0:return;default:console.warn("invalid ItemSideFlags value",this.sides)}e>this.optsWidthRightSide?(i=this.optsWidthRightSide,e=i+.55*(e-i)):e<-this.optsWidthLeftSide&&(i=-this.optsWidthLeftSide,e=i+.55*(e-i)),this.setOpenAmount(e,!1)}onEnd(t){const i=t.velocityX;let e=this.openAmount>0?this.optsWidthRightSide:-this.optsWidthLeftSide;const n=this.openAmount>0==!(i<0),o=Math.abs(i)>.3,s=Math.abs(this.openAmount)<Math.abs(e/2);m(n,o,s)&&(e=0);const r=this.state;this.setOpenAmount(e,!0),0!=(32&r)&&this.rightOptions?this.rightOptions.fireSwipeEvent():0!=(64&r)&&this.leftOptions&&this.leftOptions.fireSwipeEvent()}calculateOptsWidth(){this.optsWidthRightSide=0,this.rightOptions&&(this.rightOptions.style.display="flex",this.optsWidthRightSide=this.rightOptions.offsetWidth,this.rightOptions.style.display=""),this.optsWidthLeftSide=0,this.leftOptions&&(this.leftOptions.style.display="flex",this.optsWidthLeftSide=this.leftOptions.offsetWidth,this.leftOptions.style.display=""),this.optsDirty=!1}setOpenAmount(t,i){if(void 0!==this.tmr&&(clearTimeout(this.tmr),this.tmr=void 0),!this.item)return;const e=this.item.style;if(this.openAmount=t,i&&(e.transition=""),t>0)this.state=t>=this.optsWidthRightSide+30?40:8;else{if(!(t<0))return this.tmr=setTimeout(()=>{this.state=2,this.tmr=void 0},600),d=void 0,void(e.transform="");this.state=t<=-this.optsWidthLeftSide-30?80:16}e.transform=`translate3d(${-t}px,0,0)`,this.ionDrag.emit({amount:t,ratio:this.getSlidingRatioSync()})}getSlidingRatioSync(){return this.openAmount>0?this.openAmount/this.optsWidthRightSide:this.openAmount<0?this.openAmount/this.optsWidthLeftSide:0}render(){const t=Object(o.b)(this);return Object(n.j)(n.c,{class:{[t]:!0,"item-sliding-active-slide":2!==this.state,"item-sliding-active-options-end":0!=(8&this.state),"item-sliding-active-options-start":0!=(16&this.state),"item-sliding-active-swipe-end":0!=(32&this.state),"item-sliding-active-swipe-start":0!=(64&this.state)}})}get el(){return Object(n.k)(this)}static get watchers(){return{disabled:["disabledChanged"]}}},m=(t,i,e)=>!i&&e||t&&i;p.style="ion-item-sliding{display:block;position:relative;width:100%;overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}ion-item-sliding .item{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.item-sliding-active-slide .item{position:relative;-webkit-transition:-webkit-transform 500ms cubic-bezier(0.36, 0.66, 0.04, 1);transition:-webkit-transform 500ms cubic-bezier(0.36, 0.66, 0.04, 1);transition:transform 500ms cubic-bezier(0.36, 0.66, 0.04, 1);transition:transform 500ms cubic-bezier(0.36, 0.66, 0.04, 1), -webkit-transform 500ms cubic-bezier(0.36, 0.66, 0.04, 1);opacity:1;z-index:2;pointer-events:none;will-change:transform}.item-sliding-active-swipe-end .item-options-end .item-option-expandable{padding-left:100%;-ms-flex-order:1;order:1;-webkit-transition-duration:0.6s;transition-duration:0.6s;-webkit-transition-property:padding-left;transition-property:padding-left}[dir=rtl] .item-sliding-active-swipe-end .item-options-end .item-option-expandable,:host-context([dir=rtl]) .item-sliding-active-swipe-end .item-options-end .item-option-expandable{-ms-flex-order:-1;order:-1}.item-sliding-active-swipe-start .item-options-start .item-option-expandable{padding-right:100%;-ms-flex-order:-1;order:-1;-webkit-transition-duration:0.6s;transition-duration:0.6s;-webkit-transition-property:padding-right;transition-property:padding-right}[dir=rtl] .item-sliding-active-swipe-start .item-options-start .item-option-expandable,:host-context([dir=rtl]) .item-sliding-active-swipe-start .item-options-start .item-option-expandable{-ms-flex-order:1;order:1}"},77:function(t,i,e){"use strict";e.d(i,"a",(function(){return n})),e.d(i,"b",(function(){return o})),e.d(i,"c",(function(){return d})),e.d(i,"d",(function(){return f})),e.d(i,"e",(function(){return p})),e.d(i,"f",(function(){return l})),e.d(i,"g",(function(){return s})),e.d(i,"h",(function(){return a})),e.d(i,"i",(function(){return m})),e.d(i,"j",(function(){return g})),e.d(i,"k",(function(){return u})),e.d(i,"l",(function(){return c})),e.d(i,"m",(function(){return h})),e.d(i,"n",(function(){return r}));const n=(t,i,e,n)=>{if("undefined"!=typeof window){const o=window,s=o&&o.Ionic&&o.Ionic.config;if(s){const o=s.get("_ael");if(o)return o(t,i,e,n);if(s._ael)return s._ael(t,i,e,n)}}return t.addEventListener(i,e,n)},o=(t,i,e,n)=>{if("undefined"!=typeof window){const o=window,s=o&&o.Ionic&&o.Ionic.config;if(s){const o=s.get("_rel");if(o)return o(t,i,e,n);if(s._rel)return s._rel(t,i,e,n)}}return t.removeEventListener(i,e,n)},s=(t,i=t)=>t.shadowRoot||i,r=t=>"function"==typeof __zone_symbol__requestAnimationFrame?__zone_symbol__requestAnimationFrame(t):"function"==typeof requestAnimationFrame?requestAnimationFrame(t):setTimeout(t),a=t=>!!t.shadowRoot&&!!t.attachShadow,l=t=>{const i=t.closest("ion-item");return i?i.querySelector("ion-label"):null},d=(t,i,e,n,o)=>{if(t||a(i)){let t=i.querySelector("input.aux-input");t||(t=i.ownerDocument.createElement("input"),t.type="hidden",t.classList.add("aux-input"),i.appendChild(t)),t.disabled=o,t.name=e,t.value=n||""}},p=(t,i,e)=>Math.max(t,Math.min(i,e)),m=(t,i)=>{if(!t){const t="ASSERT: "+i;throw console.error(t),new Error(t)}},c=t=>t.timeStamp||Date.now(),h=t=>{if(t){const i=t.changedTouches;if(i&&i.length>0){const t=i[0];return{x:t.clientX,y:t.clientY}}if(void 0!==t.pageX)return{x:t.pageX,y:t.pageY}}return{x:0,y:0}},g=t=>{const i="rtl"===document.dir;switch(t){case"start":return i;case"end":return!i;default:throw new Error(`"${t}" is not a valid value for [side]. Use "start" or "end" instead.`)}},f=(t,i)=>{const e=t._original||t;return{_original:t,emit:u(e.emit.bind(e),i)}},u=(t,i=0)=>{let e;return(...n)=>{clearTimeout(e),e=setTimeout(t,i,...n)}}},78:function(t,i,e){"use strict";e.d(i,"a",(function(){return o})),e.d(i,"b",(function(){return s})),e.d(i,"c",(function(){return n})),e.d(i,"d",(function(){return a}));const n=(t,i)=>null!==i.closest(t),o=(t,i)=>"string"==typeof t&&t.length>0?Object.assign({"ion-color":!0,["ion-color-"+t]:!0},i):i,s=t=>{const i={};return(t=>{if(void 0!==t){return(Array.isArray(t)?t:t.split(" ")).filter(t=>null!=t).map(t=>t.trim()).filter(t=>""!==t)}return[]})(t).forEach(t=>i[t]=!0),i},r=/^[a-z][a-z0-9+\-.]*:/,a=async(t,i,e,n)=>{if(null!=t&&"#"!==t[0]&&!r.test(t)){const o=document.querySelector("ion-router");if(o)return null!=i&&i.preventDefault(),o.push(t,e,n)}return!1}}}]);