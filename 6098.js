(self.webpackChunkclient=self.webpackChunkclient||[]).push([[6098],{6098:(e,t,n)=>{"use strict";n.r(t),n.d(t,{startInputShims:()=>m});var o=n(900);const r=new WeakMap,i=(e,t,n,o=0)=>{r.has(e)!==n&&(n?s(e,t,o):l(e,t))},a=e=>e===e.getRootNode().activeElement,s=(e,t,n)=>{const o=t.parentNode,i=t.cloneNode(!1);i.classList.add("cloned-input"),i.tabIndex=-1,o.appendChild(i),r.set(e,i);const a="rtl"===e.ownerDocument.dir?9999:-9999;e.style.pointerEvents="none",t.style.transform=`translate3d(${a}px,${n}px,0) scale(0)`},l=(e,t)=>{const n=r.get(e);n&&(r.delete(e),n.remove()),e.style.pointerEvents="",t.style.transform=""},d="input, textarea, [no-blur]",c=async(e,t,n,o,r)=>{if(!n&&!o)return;const a=((e,t,n)=>((e,t,n,o)=>{const r=e.top,i=e.bottom,a=t.top,s=a+15,l=.75*Math.min(t.bottom,o-n)-i,d=s-r,c=Math.round(l<0?-l:d>0?-d:0),u=Math.min(c,r-a),m=Math.abs(u)/.3;return{scrollAmount:u,scrollDuration:Math.min(400,Math.max(150,m)),scrollPadding:n,inputSafeY:4-(r-s)}})((e.closest("ion-item,[ion-item]")||e).getBoundingClientRect(),t.getBoundingClientRect(),n,e.ownerDocument.defaultView.innerHeight))(e,n||o,r);if(n&&Math.abs(a.scrollAmount)<4)t.focus();else if(i(e,t,!0,a.inputSafeY),t.focus(),"undefined"!=typeof window){let o;const r=async()=>{void 0!==o&&clearTimeout(o),window.removeEventListener("ionKeyboardDidShow",s),window.removeEventListener("ionKeyboardDidShow",r),n&&await n.scrollByPoint(0,a.scrollAmount,a.scrollDuration),i(e,t,!1,a.inputSafeY),t.focus()},s=()=>{window.removeEventListener("ionKeyboardDidShow",s),window.addEventListener("ionKeyboardDidShow",r)};if(n){const e=await n.getScrollElement(),i=e.scrollHeight-e.clientHeight;if(a.scrollAmount>i-e.scrollTop)return"password"===t.type?(a.scrollAmount+=50,window.addEventListener("ionKeyboardDidShow",s)):window.addEventListener("ionKeyboardDidShow",r),void(o=setTimeout(r,1e3))}r()}},u=(e,t)=>{if("INPUT"!==e.tagName)return;if(e.parentElement&&"ION-INPUT"===e.parentElement.tagName)return;if(e.parentElement&&e.parentElement.parentElement&&"ION-SEARCHBAR"===e.parentElement.parentElement.tagName)return;const n=e.closest("ion-content");if(null===n)return;const o=n.$ionPaddingTimer;o&&clearTimeout(o),t>0?n.style.setProperty("--keyboard-offset",t+"px"):n.$ionPaddingTimer=setTimeout((()=>{n.style.setProperty("--keyboard-offset","0px")}),120)},m=e=>{const t=document,n=e.getNumber("keyboardHeight",290),r=e.getBoolean("scrollAssist",!0),s=e.getBoolean("hideCaretOnScroll",!0),l=e.getBoolean("inputBlurring",!0),m=e.getBoolean("scrollPadding",!0),p=Array.from(t.querySelectorAll("ion-input, ion-textarea")),f=new WeakMap,h=new WeakMap,v=async e=>{e.componentOnReady&&await e.componentOnReady();const t=e.shadowRoot||e,l=t.querySelector("input")||t.querySelector("textarea"),d=e.closest("ion-content"),u=d?null:e.closest("ion-footer");if(l){if(d&&s&&!f.has(e)){const t=((e,t,n)=>{if(!n||!t)return()=>{};const r=n=>{a(t)&&i(e,t,n)},s=()=>i(e,t,!1),l=()=>r(!0),d=()=>r(!1);return(0,o.a)(n,"ionScrollStart",l),(0,o.a)(n,"ionScrollEnd",d),t.addEventListener("blur",s),()=>{(0,o.b)(n,"ionScrollStart",l),(0,o.b)(n,"ionScrollEnd",d),t.addEventListener("ionBlur",s)}})(e,l,d);f.set(e,t)}if((d||u)&&r&&!h.has(e)){const t=((e,t,n,r,i)=>{let s;const l=e=>{s=(0,o.p)(e)},d=l=>{if(!s)return;const d=(0,o.p)(l);((e,t,n)=>{if(t&&n){const o=t.x-n.x,r=t.y-n.y;return o*o+r*r>e*e}return!1})(6,s,d)||a(t)||(l.preventDefault(),l.stopPropagation(),c(e,t,n,r,i))};return e.addEventListener("touchstart",l,!0),e.addEventListener("touchend",d,!0),()=>{e.removeEventListener("touchstart",l,!0),e.removeEventListener("touchend",d,!0)}})(e,l,d,u,n);h.set(e,t)}}};l&&(()=>{let e=!0,t=!1;const n=document;(0,o.a)(n,"ionScrollStart",(()=>{t=!0})),n.addEventListener("focusin",(()=>{e=!0}),!0),n.addEventListener("touchend",(o=>{if(t)return void(t=!1);const r=n.activeElement;if(!r)return;if(r.matches(d))return;const i=o.target;i!==r&&(i.matches(d)||i.closest(d)||(e=!1,setTimeout((()=>{e||r.blur()}),50)))}),!1)})(),m&&(e=>{const t=document;t.addEventListener("focusin",(t=>{u(t.target,e)})),t.addEventListener("focusout",(e=>{u(e.target,0)}))})(n);for(const e of p)v(e);t.addEventListener("ionInputDidLoad",(e=>{v(e.detail)})),t.addEventListener("ionInputDidUnload",(e=>{(e=>{if(s){const t=f.get(e);t&&t(),f.delete(e)}if(r){const t=h.get(e);t&&t(),h.delete(e)}})(e.detail)}))}}}]);