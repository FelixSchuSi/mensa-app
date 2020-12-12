(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{32:function(t,e,s){"use strict";s.r(e),s.d(e,"scopeCss",(function(){return k}));
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 *
 * This file is a port of shadowCSS from webcomponents.js to TypeScript.
 * https://github.com/webcomponents/webcomponentsjs/blob/4efecd7e0e/src/ShadowCSS/ShadowCSS.js
 * https://github.com/angular/angular/blob/master/packages/compiler/src/shadow_css.ts
 */
const o=")(?:\\(((?:\\([^)(]*\\)|[^)(]*)+?)\\))?([^,{]*)",c=new RegExp("(-shadowcsshost"+o,"gim"),r=new RegExp("(-shadowcsscontext"+o,"gim"),n=new RegExp("(-shadowcssslotted"+o,"gim"),l=/-shadowcsshost-no-combinator([^\s]*)/,a=[/::shadow/g,/::content/g],i=/-shadowcsshost/gim,h=/:host/gim,p=/::slotted/gim,d=/:host-context/gim,u=/\/\*\s*[\s\S]*?\*\//g,g=/\/\*\s*#\s*source(Mapping)?URL=[\s\S]+?\*\//g,m=/(\s*)([^;\{\}]+?)(\s*)((?:{%BLOCK%}?\s*;?)|(?:\s*;))/g,w=/([{}])/g,f=(t,e)=>{const s=x(t);let o=0;return s.escapedString.replace(m,(...t)=>{const c=t[2];let r="",n=t[4],l="";n&&n.startsWith("{%BLOCK%")&&(r=s.blocks[o++],n=n.substring("%BLOCK%".length+1),l="{");const a=e({selector:c,content:r});return`${t[1]}${a.selector}${t[3]}${l}${a.content}${n}`})},x=t=>{const e=t.split(w),s=[],o=[];let c=0,r=[];for(let t=0;t<e.length;t++){const n=e[t];"}"===n&&c--,c>0?r.push(n):(r.length>0&&(o.push(r.join("")),s.push("%BLOCK%"),r=[]),s.push(n)),"{"===n&&c++}r.length>0&&(o.push(r.join("")),s.push("%BLOCK%"));return{escapedString:s.join(""),blocks:o}},$=(t,e,s)=>t.replace(e,(...t)=>{if(t[2]){const e=t[2].split(","),o=[];for(let c=0;c<e.length;c++){const r=e[c].trim();if(!r)break;o.push(s("-shadowcsshost-no-combinator",r,t[3]))}return o.join(",")}return"-shadowcsshost-no-combinator"+t[3]}),_=(t,e,s)=>t+e.replace("-shadowcsshost","")+s,b=(t,e,s)=>e.indexOf("-shadowcsshost")>-1?_(t,e,s):t+e+s+", "+e+" "+t+s,O=(t,e)=>!(t=>(t=t.replace(/\[/g,"\\[").replace(/\]/g,"\\]"),new RegExp("^("+t+")([>\\s~+[.,{:][\\s\\S]*)?$","m")))(e).test(t),S=(t,e,s)=>{const o="."+(e=e.replace(/\[is=([^\]]*)\]/g,(t,...e)=>e[0])),c=t=>{let c=t.trim();if(!c)return"";if(t.indexOf("-shadowcsshost-no-combinator")>-1)c=((t,e,s)=>{if(i.lastIndex=0,i.test(t)){const e="."+s;return t.replace(l,(t,s)=>s.replace(/([^:]*)(:*)(.*)/,(t,s,o,c)=>s+e+o+c)).replace(i,e+" ")}return e+" "+t})(t,e,s);else{const e=t.replace(i,"");if(e.length>0){const t=e.match(/([^:]*)(:*)(.*)/);t&&(c=t[1]+o+t[2]+t[3])}}return c},r=(t=>{const e=[];let s,o=0;s=(t=t.replace(/(\[[^\]]*\])/g,(t,s)=>{const c=`__ph-${o}__`;return e.push(s),o++,c})).replace(/(:nth-[-\w]+)(\([^)]+\))/g,(t,s,c)=>{const r=`__ph-${o}__`;return e.push(c),o++,s+r});return{content:s,placeholders:e}})(t);let n,a="",h=0;const p=/( |>|\+|~(?!=))\s*/g;let d=!((t=r.content).indexOf("-shadowcsshost-no-combinator")>-1);for(;null!==(n=p.exec(t));){const e=n[1],s=t.slice(h,n.index).trim();d=d||s.indexOf("-shadowcsshost-no-combinator")>-1;a+=`${d?c(s):s} ${e} `,h=p.lastIndex}const u=t.substring(h);return d=d||u.indexOf("-shadowcsshost-no-combinator")>-1,a+=d?c(u):u,g=r.placeholders,a.replace(/__ph-(\d+)__/g,(t,e)=>g[+e]);var g},W=(t,e,s,o,c)=>f(t,t=>{let c=t.selector,r=t.content;"@"!==t.selector[0]?c=((t,e,s,o)=>t.split(",").map(t=>o&&t.indexOf("."+o)>-1?t.trim():O(t,e)?S(t,e,s).trim():t.trim()).join(", "))(t.selector,e,s,o):(t.selector.startsWith("@media")||t.selector.startsWith("@supports")||t.selector.startsWith("@page")||t.selector.startsWith("@document"))&&(r=W(t.content,e,s,o));return{selector:c.replace(/\s{2,}/g," ").trim(),content:r}}),j=(t,e,s,o,l)=>{const i=((t,e)=>{const s="."+e+" > ",o=[];return t=t.replace(n,(...t)=>{if(t[2]){const e=t[2].trim(),c=t[3],r=s+e+c;let n="";for(let e=t[4]-1;e>=0;e--){const s=t[5][e];if("}"===s||","===s)break;n=s+n}const l=n+r,a=`${n.trimRight()}${r.trim()}`;if(l.trim()!==a.trim()){const t=`${a}, ${l}`;o.push({orgSelector:l,updatedSelector:t})}return r}return"-shadowcsshost-no-combinator"+t[3]}),{selectors:o,cssText:t}})(t=(t=>$(t,r,b))(t=(t=>$(t,c,_))(t=t.replace(d,"-shadowcsscontext").replace(h,"-shadowcsshost").replace(p,"-shadowcssslotted"))),o);return t=(t=>a.reduce((t,e)=>t.replace(e," "),t))(t=i.cssText),e&&(t=W(t,e,s,o)),{cssText:(t=(t=t.replace(/-shadowcsshost-no-combinator/g,"."+s)).replace(/>\s*\*\s+([^{, ]+)/gm," $1 ")).trim(),slottedSelectors:i.selectors}},k=(t,e,s)=>{const o=e+"-h",c=e+"-s",r=t.match(g)||[];t=(t=>t.replace(u,""))(t);const n=[];if(s){const e=t=>{const e=`/*!@___${n.length}___*/`,s=`/*!@${t.selector}*/`;return n.push({placeholder:e,comment:s}),t.selector=e+t.selector,t};t=f(t,t=>"@"!==t.selector[0]?e(t):t.selector.startsWith("@media")||t.selector.startsWith("@supports")||t.selector.startsWith("@page")||t.selector.startsWith("@document")?(t.content=f(t.content,e),t):t)}const l=j(t,e,o,c);return t=[l.cssText,...r].join("\n"),s&&n.forEach(({placeholder:e,comment:s})=>{t=t.replace(e,s)}),l.slottedSelectors.forEach(e=>{t=t.replace(e.orgSelector,e.updatedSelector)}),t}}}]);