(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{110:function(e,t,n){"use strict";n.r(t),n.d(t,"startInputShims",(function(){return f}));var o=n(3);const r=new WeakMap,i=(e,t,n,o=0)=>{r.has(e)!==n&&(n?s(e,t,o):l(e,t))},a=e=>e===e.getRootNode().activeElement,s=(e,t,n)=>{const o=t.parentNode,i=t.cloneNode(!1);i.classList.add("cloned-input"),i.tabIndex=-1,o.appendChild(i),r.set(e,i);const a="rtl"===e.ownerDocument.dir?9999:-9999;e.style.pointerEvents="none",t.style.transform=`translate3d(${a}px,${n}px,0) scale(0)`},l=(e,t)=>{const n=r.get(e);n&&(r.delete(e),n.remove()),e.style.pointerEvents="",t.style.transform=""},c="input, textarea, [no-blur]",d=(e,t,n,o)=>{const r=e.top,i=e.bottom,a=t.top,s=a+15,l=.75*Math.min(t.bottom,o-n)-i,c=s-r,d=Math.round(l<0?-l:c>0?-c:0),u=Math.min(d,r-a),m=Math.abs(u)/.3;return{scrollAmount:u,scrollDuration:Math.min(400,Math.max(150,m)),scrollPadding:n,inputSafeY:4-(r-s)}},u=async(e,t,n,o,r)=>{if(!n&&!o)return;const a=((e,t,n)=>{const o=e.closest("ion-item,[ion-item]")||e;return d(o.getBoundingClientRect(),t.getBoundingClientRect(),n,e.ownerDocument.defaultView.innerHeight)})(e,n||o,r);if(n&&Math.abs(a.scrollAmount)<4)t.focus();else if(i(e,t,!0,a.inputSafeY),t.focus(),"undefined"!=typeof window){let o;const r=async()=>{void 0!==o&&clearTimeout(o),window.removeEventListener("ionKeyboardDidShow",s),window.removeEventListener("ionKeyboardDidShow",r),n&&await n.scrollByPoint(0,a.scrollAmount,a.scrollDuration),i(e,t,!1,a.inputSafeY),t.focus()},s=()=>{window.removeEventListener("ionKeyboardDidShow",s),window.addEventListener("ionKeyboardDidShow",r)};if(n){const e=await n.getScrollElement(),i=e.scrollHeight-e.clientHeight;if(a.scrollAmount>i-e.scrollTop)return"password"===t.type?(a.scrollAmount+=50,window.addEventListener("ionKeyboardDidShow",s)):window.addEventListener("ionKeyboardDidShow",r),void(o=setTimeout(r,1e3))}r()}},m=(e,t,n)=>{if(t&&n){const o=t.x-n.x,r=t.y-n.y;return o*o+r*r>e*e}return!1},p=(e,t)=>{if("INPUT"!==e.tagName)return;if(e.parentElement&&"ION-INPUT"===e.parentElement.tagName)return;if(e.parentElement&&e.parentElement.parentElement&&"ION-SEARCHBAR"===e.parentElement.parentElement.tagName)return;const n=e.closest("ion-content");if(null===n)return;const o=n.$ionPaddingTimer;o&&clearTimeout(o),t>0?n.style.setProperty("--keyboard-offset",t+"px"):n.$ionPaddingTimer=setTimeout(()=>{n.style.setProperty("--keyboard-offset","0px")},120)},f=e=>{const t=document,n=e.getNumber("keyboardHeight",290),r=e.getBoolean("scrollAssist",!0),s=e.getBoolean("hideCaretOnScroll",!0),l=e.getBoolean("inputBlurring",!0),d=e.getBoolean("scrollPadding",!0),f=Array.from(t.querySelectorAll("ion-input, ion-textarea")),w=new WeakMap,v=new WeakMap,E=async e=>{e.componentOnReady&&await e.componentOnReady();const t=e.shadowRoot||e,l=t.querySelector("input")||t.querySelector("textarea"),c=e.closest("ion-content"),d=c?null:e.closest("ion-footer");if(l){if(c&&s&&!w.has(e)){const t=((e,t,n)=>{if(!n||!t)return()=>{};const r=n=>{a(t)&&i(e,t,n)},s=()=>i(e,t,!1),l=()=>r(!0),c=()=>r(!1);return Object(o.a)(n,"ionScrollStart",l),Object(o.a)(n,"ionScrollEnd",c),t.addEventListener("blur",s),()=>{Object(o.b)(n,"ionScrollStart",l),Object(o.b)(n,"ionScrollEnd",c),t.addEventListener("ionBlur",s)}})(e,l,c);w.set(e,t)}if((c||d)&&r&&!v.has(e)){const t=((e,t,n,r,i)=>{let s;const l=e=>{s=Object(o.m)(e)},c=l=>{if(!s)return;const c=Object(o.m)(l);m(6,s,c)||a(t)||(l.preventDefault(),l.stopPropagation(),u(e,t,n,r,i))};return e.addEventListener("touchstart",l,!0),e.addEventListener("touchend",c,!0),()=>{e.removeEventListener("touchstart",l,!0),e.removeEventListener("touchend",c,!0)}})(e,l,c,d,n);v.set(e,t)}}};l&&(()=>{let e=!0,t=!1;const n=document,r=()=>{t=!0},i=()=>{e=!0},a=o=>{if(t)return void(t=!1);const r=n.activeElement;if(!r)return;if(r.matches(c))return;const i=o.target;i!==r&&(i.matches(c)||i.closest(c)||(e=!1,setTimeout(()=>{e||r.blur()},50)))};Object(o.a)(n,"ionScrollStart",r),n.addEventListener("focusin",i,!0),n.addEventListener("touchend",a,!1)})(),d&&(e=>{const t=document,n=t=>{p(t.target,e)},o=e=>{p(e.target,0)};t.addEventListener("focusin",n),t.addEventListener("focusout",o)})(n);for(const e of f)E(e);t.addEventListener("ionInputDidLoad",e=>{E(e.detail)}),t.addEventListener("ionInputDidUnload",e=>{(e=>{if(s){const t=w.get(e);t&&t(),w.delete(e)}if(r){const t=v.get(e);t&&t(),v.delete(e)}})(e.detail)})}}}]);