(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{73:function(t,n,r){"use strict";r.r(n),r.d(n,"MENU_BACK_BUTTON_PRIORITY",(function(){return o})),r.d(n,"OVERLAY_BACK_BUTTON_PRIORITY",(function(){return i})),r.d(n,"startHardwareBackButton",(function(){return e}));const e=()=>{const t=document;let n=!1;t.addEventListener("backbutton",()=>{if(n)return;let r=0,e=[];const i=new CustomEvent("ionBackButton",{bubbles:!1,detail:{register(t,n){e.push({priority:t,handler:n,id:r++})}}});t.dispatchEvent(i);const o=()=>{if(e.length>0){let t={priority:Number.MIN_SAFE_INTEGER,handler:()=>{},id:-1};e.forEach(n=>{n.priority>=t.priority&&(t=n)}),n=!0,e=e.filter(n=>n.id!==t.id),(async t=>{try{if(t&&t.handler){const n=t.handler(o);null!=n&&await n}}catch(t){console.error(t)}})(t).then(()=>n=!1)}};o()})},i=100,o=99}}]);