"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[7896],{7896:(e,t,n)=>{n.r(t),n.d(t,{startInputShims:()=>v});var o=n(1340),r=n(8840),i=new WeakMap,a=function(e,t,n,o){void 0===o&&(o=0),i.has(e)!==n&&(n?c(e,t,o):l(e,t))},u=function(e){return e===e.getRootNode().activeElement},c=function(e,t,n){var o=t.parentNode,r=t.cloneNode(!1);r.classList.add("cloned-input"),r.tabIndex=-1,o.appendChild(r),i.set(e,r);var a="rtl"===e.ownerDocument.dir?9999:-9999;e.style.pointerEvents="none",t.style.transform="translate3d("+a+"px,"+n+"px,0) scale(0)"},l=function(e,t){var n=i.get(e);n&&(i.delete(e),n.remove()),e.style.pointerEvents="",t.style.transform=""},s="input, textarea, [no-blur], [contenteditable]",d=function(e,t,n,i,u){return(0,o.mG)(void 0,void 0,void 0,(function(){var c,l,s,d,f,v;return(0,o.Jh)(this,(function(m){switch(m.label){case 0:return n||i?(c=function(e,t,n){return function(e,t,n,o){var r=e.top,i=e.bottom,a=t.top,u=a+15,c=.75*Math.min(t.bottom,o-n)-i,l=u-r,s=Math.round(c<0?-c:l>0?-l:0),d=Math.min(s,r-a),f=Math.abs(d)/.3;return{scrollAmount:d,scrollDuration:Math.min(400,Math.max(150,f)),scrollPadding:n,inputSafeY:4-(r-u)}}((e.closest("ion-item,[ion-item]")||e).getBoundingClientRect(),t.getBoundingClientRect(),n,e.ownerDocument.defaultView.innerHeight)}(e,n||i,u),n&&Math.abs(c.scrollAmount)<4?(t.focus(),[2]):(a(e,t,!0,c.inputSafeY),t.focus(),(0,r.r)((function(){return e.click()})),"undefined"==typeof window?[3,3]:(s=function(){return(0,o.mG)(void 0,void 0,void 0,(function(){return(0,o.Jh)(this,(function(o){switch(o.label){case 0:return void 0!==l&&clearTimeout(l),window.removeEventListener("ionKeyboardDidShow",d),window.removeEventListener("ionKeyboardDidShow",s),n?[4,n.scrollByPoint(0,c.scrollAmount,c.scrollDuration)]:[3,2];case 1:o.sent(),o.label=2;case 2:return a(e,t,!1,c.inputSafeY),t.focus(),[2]}}))}))},d=function(){window.removeEventListener("ionKeyboardDidShow",d),window.addEventListener("ionKeyboardDidShow",s)},n?[4,n.getScrollElement()]:[3,2]))):[2];case 1:if(f=m.sent(),v=f.scrollHeight-f.clientHeight,c.scrollAmount>v-f.scrollTop)return"password"===t.type?(c.scrollAmount+=50,window.addEventListener("ionKeyboardDidShow",d)):window.addEventListener("ionKeyboardDidShow",s),l=setTimeout(s,1e3),[2];m.label=2;case 2:s(),m.label=3;case 3:return[2]}}))}))},f=function(e,t){if("INPUT"===e.tagName&&!(e.parentElement&&"ION-INPUT"===e.parentElement.tagName||e.parentElement&&e.parentElement.parentElement&&"ION-SEARCHBAR"===e.parentElement.parentElement.tagName)){var n=e.closest("ion-content");if(null!==n){var o=n.$ionPaddingTimer;o&&clearTimeout(o),t>0?n.style.setProperty("--keyboard-offset",t+"px"):n.$ionPaddingTimer=setTimeout((function(){n.style.setProperty("--keyboard-offset","0px")}),120)}}},v=function(e){var t=document,n=e.getNumber("keyboardHeight",290),i=e.getBoolean("scrollAssist",!0),c=e.getBoolean("hideCaretOnScroll",!0),l=e.getBoolean("inputBlurring",!0),v=e.getBoolean("scrollPadding",!0),m=Array.from(t.querySelectorAll("ion-input, ion-textarea")),p=new WeakMap,h=new WeakMap,w=function(e){return(0,o.mG)(void 0,void 0,void 0,(function(){var t,l,s,f,v;return(0,o.Jh)(this,(function(o){switch(o.label){case 0:return[4,new Promise((function(t){return(0,r.c)(e,t)}))];case 1:return o.sent(),t=e.shadowRoot||e,l=t.querySelector("input")||t.querySelector("textarea"),s=e.closest("ion-content"),f=s?null:e.closest("ion-footer"),l?(s&&c&&!p.has(e)&&(v=function(e,t,n){if(!n||!t)return function(){};var o=function(n){u(t)&&a(e,t,n)},i=function(){return a(e,t,!1)},c=function(){return o(!0)},l=function(){return o(!1)};return(0,r.a)(n,"ionScrollStart",c),(0,r.a)(n,"ionScrollEnd",l),t.addEventListener("blur",i),function(){(0,r.b)(n,"ionScrollStart",c),(0,r.b)(n,"ionScrollEnd",l),t.addEventListener("ionBlur",i)}}(e,l,s),p.set(e,v)),(s||f)&&i&&!h.has(e)&&(v=function(e,t,n,o,i){var a,c=function(e){a=(0,r.p)(e)},l=function(c){if(a){var l=(0,r.p)(c);(function(e,t,n){if(t&&n){var o=t.x-n.x,r=t.y-n.y;return o*o+r*r>e*e}return!1})(6,a,l)||u(t)||(c.stopPropagation(),d(e,t,n,o,i))}};return e.addEventListener("touchstart",c,!0),e.addEventListener("touchend",l,!0),function(){e.removeEventListener("touchstart",c,!0),e.removeEventListener("touchend",l,!0)}}(e,l,s,f,n),h.set(e,v)),[2]):[2]}}))}))};l&&function(){var e=!0,t=!1,n=document;(0,r.a)(n,"ionScrollStart",(function(){t=!0})),n.addEventListener("focusin",(function(){e=!0}),!0),n.addEventListener("touchend",(function(o){if(t)t=!1;else{var r=n.activeElement;if(r&&!r.matches(s)){var i=o.target;i!==r&&(i.matches(s)||i.closest(s)||(e=!1,setTimeout((function(){e||r.blur()}),50)))}}}),!1)}(),v&&function(e){var t=document;t.addEventListener("focusin",(function(t){f(t.target,e)})),t.addEventListener("focusout",(function(e){f(e.target,0)}))}(n);for(var E=0,g=m;E<g.length;E++){var b=g[E];w(b)}t.addEventListener("ionInputDidLoad",(function(e){w(e.detail)})),t.addEventListener("ionInputDidUnload",(function(e){!function(e){var t;c&&((t=p.get(e))&&t(),p.delete(e)),i&&((t=h.get(e))&&t(),h.delete(e))}(e.detail)}))}}}]);