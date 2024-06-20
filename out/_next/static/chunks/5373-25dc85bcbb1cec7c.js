"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5373],{8369:function(e,t,n){n.d(t,{Ry:function(){return l}});var r=new WeakMap,o=new WeakMap,a={},c=0,u=function(e){return e&&(e.host||u(e.parentNode))},i=function(e,t,n,i){var l=(Array.isArray(e)?e:[e]).map(function(e){if(t.contains(e))return e;var n=u(e);return n&&t.contains(n)?n:(console.error("aria-hidden",e,"in not contained inside",t,". Doing nothing"),null)}).filter(function(e){return!!e});a[n]||(a[n]=new WeakMap);var d=a[n],f=[],s=new Set,v=new Set(l),p=function(e){!e||s.has(e)||(s.add(e),p(e.parentNode))};l.forEach(p);var m=function(e){!e||v.has(e)||Array.prototype.forEach.call(e.children,function(e){if(s.has(e))m(e);else try{var t=e.getAttribute(i),a=null!==t&&"false"!==t,c=(r.get(e)||0)+1,u=(d.get(e)||0)+1;r.set(e,c),d.set(e,u),f.push(e),1===c&&a&&o.set(e,!0),1===u&&e.setAttribute(n,"true"),a||e.setAttribute(i,"true")}catch(t){console.error("aria-hidden: cannot operate on ",e,t)}})};return m(t),s.clear(),c++,function(){f.forEach(function(e){var t=r.get(e)-1,a=d.get(e)-1;r.set(e,t),d.set(e,a),t||(o.has(e)||e.removeAttribute(i),o.delete(e)),a||e.removeAttribute(n)}),--c||(r=new WeakMap,r=new WeakMap,o=new WeakMap,a={})}},l=function(e,t,n){void 0===n&&(n="data-aria-hidden");var r=Array.from(Array.isArray(e)?e:[e]),o=t||("undefined"==typeof document?null:(Array.isArray(e)?e[0]:e).ownerDocument.body);return o?(r.push.apply(r,Array.from(o.querySelectorAll("[aria-live]"))),i(r,o,n,"aria-hidden")):function(){return null}}},8030:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(2265);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let o=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),a=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((e,t,n)=>!!e&&n.indexOf(e)===t).join(" ")};/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var c={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let u=(0,r.forwardRef)((e,t)=>{let{color:n="currentColor",size:o=24,strokeWidth:u=2,absoluteStrokeWidth:i,className:l="",children:d,iconNode:f,...s}=e;return(0,r.createElement)("svg",{ref:t,...c,width:o,height:o,stroke:n,strokeWidth:i?24*Number(u)/Number(o):u,className:a("lucide",l),...s},[...f.map(e=>{let[t,n]=e;return(0,r.createElement)(t,n)}),...Array.isArray(d)?d:[d]])}),i=(e,t)=>{let n=(0,r.forwardRef)((n,c)=>{let{className:i,...l}=n;return(0,r.createElement)(u,{ref:c,iconNode:t,className:a("lucide-".concat(o(e)),i),...l})});return n.displayName="".concat(e),n}},2421:function(e,t,n){n.d(t,{Z:function(){return r}});/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let r=(0,n(8030).Z)("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]])},9418:function(e,t,n){n.d(t,{Z:function(){return V}});var r,o,a,c,u,i,l,d=function(){return(d=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function f(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)0>t.indexOf(r[o])&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n}"function"==typeof SuppressedError&&SuppressedError;var s=n(2265),v="right-scroll-bar-position",p="width-before-scroll-bar";function m(e,t){return"function"==typeof e?e(t):e&&(e.current=t),e}var h="undefined"!=typeof window?s.useLayoutEffect:s.useEffect,g=new WeakMap,y=(void 0===o&&(o={}),(void 0===a&&(a=function(e){return e}),c=[],u=!1,i={read:function(){if(u)throw Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return c.length?c[c.length-1]:null},useMedium:function(e){var t=a(e,u);return c.push(t),function(){c=c.filter(function(e){return e!==t})}},assignSyncMedium:function(e){for(u=!0;c.length;){var t=c;c=[],t.forEach(e)}c={push:function(t){return e(t)},filter:function(){return c}}},assignMedium:function(e){u=!0;var t=[];if(c.length){var n=c;c=[],n.forEach(e),t=c}var r=function(){var n=t;t=[],n.forEach(e)},o=function(){return Promise.resolve().then(r)};o(),c={push:function(e){t.push(e),o()},filter:function(e){return t=t.filter(e),c}}}}).options=d({async:!0,ssr:!1},o),i),E=function(){},b=s.forwardRef(function(e,t){var n,r,o,a,c=s.useRef(null),u=s.useState({onScrollCapture:E,onWheelCapture:E,onTouchMoveCapture:E}),i=u[0],l=u[1],v=e.forwardProps,p=e.children,b=e.className,w=e.removeScrollBar,S=e.enabled,C=e.shards,k=e.sideCar,A=e.noIsolation,R=e.inert,M=e.allowPinchZoom,x=e.as,N=f(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as"]),L=(n=[c,t],r=function(e){return n.forEach(function(t){return m(t,e)})},(o=(0,s.useState)(function(){return{value:null,callback:r,facade:{get current(){return o.value},set current(value){var e=o.value;e!==value&&(o.value=value,o.callback(value,e))}}}})[0]).callback=r,a=o.facade,h(function(){var e=g.get(a);if(e){var t=new Set(e),r=new Set(n),o=a.current;t.forEach(function(e){r.has(e)||m(e,null)}),r.forEach(function(e){t.has(e)||m(e,o)})}g.set(a,n)},[n]),a),T=d(d({},N),i);return s.createElement(s.Fragment,null,S&&s.createElement(k,{sideCar:y,removeScrollBar:w,shards:C,noIsolation:A,inert:R,setCallbacks:l,allowPinchZoom:!!M,lockRef:c}),v?s.cloneElement(s.Children.only(p),d(d({},T),{ref:L})):s.createElement(void 0===x?"div":x,d({},T,{className:b,ref:L}),p))});b.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1},b.classNames={fullWidth:p,zeroRight:v};var w=function(e){var t=e.sideCar,n=f(e,["sideCar"]);if(!t)throw Error("Sidecar: please provide `sideCar` property to import the right car");var r=t.read();if(!r)throw Error("Sidecar medium not found");return s.createElement(r,d({},n))};w.isSideCarExport=!0;var S=function(){var e=0,t=null;return{add:function(o){if(0==e&&(t=function(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=r||n.nc;return t&&e.setAttribute("nonce",t),e}())){var a,c;(a=t).styleSheet?a.styleSheet.cssText=o:a.appendChild(document.createTextNode(o)),c=t,(document.head||document.getElementsByTagName("head")[0]).appendChild(c)}e++},remove:function(){--e||!t||(t.parentNode&&t.parentNode.removeChild(t),t=null)}}},C=function(){var e=S();return function(t,n){s.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&n])}},k=function(){var e=C();return function(t){return e(t.styles,t.dynamic),null}},A={left:0,top:0,right:0,gap:0},R=function(e){return parseInt(e||"",10)||0},M=function(e){var t=window.getComputedStyle(document.body),n=t["padding"===e?"paddingLeft":"marginLeft"],r=t["padding"===e?"paddingTop":"marginTop"],o=t["padding"===e?"paddingRight":"marginRight"];return[R(n),R(r),R(o)]},x=function(e){if(void 0===e&&(e="margin"),"undefined"==typeof window)return A;var t=M(e),n=document.documentElement.clientWidth,r=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,r-n+t[2]-t[0])}},N=k(),L="data-scroll-locked",T=function(e,t,n,r){var o=e.left,a=e.top,c=e.right,u=e.gap;return void 0===n&&(n="margin"),"\n  .".concat("with-scroll-bars-hidden"," {\n   overflow: hidden ").concat(r,";\n   padding-right: ").concat(u,"px ").concat(r,";\n  }\n  body[").concat(L,"] {\n    overflow: hidden ").concat(r,";\n    overscroll-behavior: contain;\n    ").concat([t&&"position: relative ".concat(r,";"),"margin"===n&&"\n    padding-left: ".concat(o,"px;\n    padding-top: ").concat(a,"px;\n    padding-right: ").concat(c,"px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(u,"px ").concat(r,";\n    "),"padding"===n&&"padding-right: ".concat(u,"px ").concat(r,";")].filter(Boolean).join(""),"\n  }\n  \n  .").concat(v," {\n    right: ").concat(u,"px ").concat(r,";\n  }\n  \n  .").concat(p," {\n    margin-right: ").concat(u,"px ").concat(r,";\n  }\n  \n  .").concat(v," .").concat(v," {\n    right: 0 ").concat(r,";\n  }\n  \n  .").concat(p," .").concat(p," {\n    margin-right: 0 ").concat(r,";\n  }\n  \n  body[").concat(L,"] {\n    ").concat("--removed-body-scroll-bar-size",": ").concat(u,"px;\n  }\n")},W=function(){var e=parseInt(document.body.getAttribute(L)||"0",10);return isFinite(e)?e:0},I=function(){s.useEffect(function(){return document.body.setAttribute(L,(W()+1).toString()),function(){var e=W()-1;e<=0?document.body.removeAttribute(L):document.body.setAttribute(L,e.toString())}},[])},O=function(e){var t=e.noRelative,n=e.noImportant,r=e.gapMode,o=void 0===r?"margin":r;I();var a=s.useMemo(function(){return x(o)},[o]);return s.createElement(N,{styles:T(a,!t,o,n?"":"!important")})},P=!1;if("undefined"!=typeof window)try{var F=Object.defineProperty({},"passive",{get:function(){return P=!0,!0}});window.addEventListener("test",F,F),window.removeEventListener("test",F,F)}catch(e){P=!1}var j=!!P&&{passive:!1},B=function(e,t){var n=window.getComputedStyle(e);return"hidden"!==n[t]&&!(n.overflowY===n.overflowX&&"TEXTAREA"!==e.tagName&&"visible"===n[t])},Z=function(e,t){var n=t;do{if("undefined"!=typeof ShadowRoot&&n instanceof ShadowRoot&&(n=n.host),D(e,n)){var r=K(e,n);if(r[1]>r[2])return!0}n=n.parentNode}while(n&&n!==document.body);return!1},D=function(e,t){return"v"===e?B(t,"overflowY"):B(t,"overflowX")},K=function(e,t){return"v"===e?[t.scrollTop,t.scrollHeight,t.clientHeight]:[t.scrollLeft,t.scrollWidth,t.clientWidth]},_=function(e,t,n,r,o){var a,c=(a=window.getComputedStyle(t).direction,"h"===e&&"rtl"===a?-1:1),u=c*r,i=n.target,l=t.contains(i),d=!1,f=u>0,s=0,v=0;do{var p=K(e,i),m=p[0],h=p[1]-p[2]-c*m;(m||h)&&D(e,i)&&(s+=h,v+=m),i=i.parentNode}while(!l&&i!==document.body||l&&(t.contains(i)||t===i));return f&&(o&&0===s||!o&&u>s)?d=!0:!f&&(o&&0===v||!o&&-u>v)&&(d=!0),d},X=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},Y=function(e){return[e.deltaX,e.deltaY]},q=function(e){return e&&"current"in e?e.current:e},H=0,$=[],z=(l=function(e){var t=s.useRef([]),n=s.useRef([0,0]),r=s.useRef(),o=s.useState(H++)[0],a=s.useState(function(){return k()})[0],c=s.useRef(e);s.useEffect(function(){c.current=e},[e]),s.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(o));var t=(function(e,t,n){if(n||2==arguments.length)for(var r,o=0,a=t.length;o<a;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))})([e.lockRef.current],(e.shards||[]).map(q),!0).filter(Boolean);return t.forEach(function(e){return e.classList.add("allow-interactivity-".concat(o))}),function(){document.body.classList.remove("block-interactivity-".concat(o)),t.forEach(function(e){return e.classList.remove("allow-interactivity-".concat(o))})}}},[e.inert,e.lockRef.current,e.shards]);var u=s.useCallback(function(e,t){if("touches"in e&&2===e.touches.length)return!c.current.allowPinchZoom;var o,a=X(e),u=n.current,i="deltaX"in e?e.deltaX:u[0]-a[0],l="deltaY"in e?e.deltaY:u[1]-a[1],d=e.target,f=Math.abs(i)>Math.abs(l)?"h":"v";if("touches"in e&&"h"===f&&"range"===d.type)return!1;var s=Z(f,d);if(!s)return!0;if(s?o=f:(o="v"===f?"h":"v",s=Z(f,d)),!s)return!1;if(!r.current&&"changedTouches"in e&&(i||l)&&(r.current=o),!o)return!0;var v=r.current||o;return _(v,t,e,"h"===v?i:l,!0)},[]),i=s.useCallback(function(e){if($.length&&$[$.length-1]===a){var n="deltaY"in e?Y(e):X(e),r=t.current.filter(function(t){var r;return t.name===e.type&&t.target===e.target&&(r=t.delta)[0]===n[0]&&r[1]===n[1]})[0];if(r&&r.should){e.cancelable&&e.preventDefault();return}if(!r){var o=(c.current.shards||[]).map(q).filter(Boolean).filter(function(t){return t.contains(e.target)});(o.length>0?u(e,o[0]):!c.current.noIsolation)&&e.cancelable&&e.preventDefault()}}},[]),l=s.useCallback(function(e,n,r,o){var a={name:e,delta:n,target:r,should:o};t.current.push(a),setTimeout(function(){t.current=t.current.filter(function(e){return e!==a})},1)},[]),d=s.useCallback(function(e){n.current=X(e),r.current=void 0},[]),f=s.useCallback(function(t){l(t.type,Y(t),t.target,u(t,e.lockRef.current))},[]),v=s.useCallback(function(t){l(t.type,X(t),t.target,u(t,e.lockRef.current))},[]);s.useEffect(function(){return $.push(a),e.setCallbacks({onScrollCapture:f,onWheelCapture:f,onTouchMoveCapture:v}),document.addEventListener("wheel",i,j),document.addEventListener("touchmove",i,j),document.addEventListener("touchstart",d,j),function(){$=$.filter(function(e){return e!==a}),document.removeEventListener("wheel",i,j),document.removeEventListener("touchmove",i,j),document.removeEventListener("touchstart",d,j)}},[]);var p=e.removeScrollBar,m=e.inert;return s.createElement(s.Fragment,null,m?s.createElement(a,{styles:"\n  .block-interactivity-".concat(o," {pointer-events: none;}\n  .allow-interactivity-").concat(o," {pointer-events: all;}\n")}):null,p?s.createElement(O,{gapMode:"margin"}):null)},y.useMedium(l),w),U=s.forwardRef(function(e,t){return s.createElement(b,d({},e,{ref:t,sideCar:z}))});U.classNames=b.classNames;var V=U},976:function(e,t,n){n.d(t,{B:function(){return u}});var r=n(2265),o=n(8324),a=n(1584),c=n(1538);function u(e){let t=e+"CollectionProvider",[n,u]=(0,o.b)(t),[i,l]=n(t,{collectionRef:{current:null},itemMap:new Map}),d=e+"CollectionSlot",f=r.forwardRef((e,t)=>{let{scope:n,children:o}=e,u=l(d,n),i=(0,a.e)(t,u.collectionRef);return r.createElement(c.g7,{ref:i},o)}),s=e+"CollectionItemSlot",v="data-radix-collection-item";return[{Provider:e=>{let{scope:t,children:n}=e,o=r.useRef(null),a=r.useRef(new Map).current;return r.createElement(i,{scope:t,itemMap:a,collectionRef:o},n)},Slot:f,ItemSlot:r.forwardRef((e,t)=>{let{scope:n,children:o,...u}=e,i=r.useRef(null),d=(0,a.e)(t,i),f=l(s,n);return r.useEffect(()=>(f.itemMap.set(i,{ref:i,...u}),()=>void f.itemMap.delete(i))),r.createElement(c.g7,{[v]:"",ref:d},o)})},function(t){let n=l(e+"CollectionConsumer",t);return r.useCallback(()=>{let e=n.collectionRef.current;if(!e)return[];let t=Array.from(e.querySelectorAll(`[${v}]`));return Array.from(n.itemMap.values()).sort((e,n)=>t.indexOf(e.ref.current)-t.indexOf(n.ref.current))},[n.collectionRef,n.itemMap])},u]}},7513:function(e,t,n){n.d(t,{gm:function(){return a}});var r=n(2265);let o=(0,r.createContext)(void 0);function a(e){let t=(0,r.useContext)(o);return e||t||"ltr"}},589:function(e,t,n){n.d(t,{EW:function(){return a}});var r=n(2265);let o=0;function a(){(0,r.useEffect)(()=>{var e,t;let n=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",null!==(e=n[0])&&void 0!==e?e:c()),document.body.insertAdjacentElement("beforeend",null!==(t=n[1])&&void 0!==t?t:c()),o++,()=>{1===o&&document.querySelectorAll("[data-radix-focus-guard]").forEach(e=>e.remove()),o--}},[])}function c(){let e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.cssText="outline: none; opacity: 0; position: fixed; pointer-events: none",e}},467:function(e,t,n){let r;n.d(t,{M:function(){return s}});var o=n(2988),a=n(2265),c=n(1584),u=n(5171),i=n(5137);let l="focusScope.autoFocusOnMount",d="focusScope.autoFocusOnUnmount",f={bubbles:!1,cancelable:!0},s=(0,a.forwardRef)((e,t)=>{let{loop:n=!1,trapped:r=!1,onMountAutoFocus:s,onUnmountAutoFocus:g,...y}=e,[E,b]=(0,a.useState)(null),w=(0,i.W)(s),S=(0,i.W)(g),C=(0,a.useRef)(null),k=(0,c.e)(t,e=>b(e)),A=(0,a.useRef)({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;(0,a.useEffect)(()=>{if(r){function e(e){if(A.paused||!E)return;let t=e.target;E.contains(t)?C.current=t:m(C.current,{select:!0})}function t(e){if(A.paused||!E)return;let t=e.relatedTarget;null===t||E.contains(t)||m(C.current,{select:!0})}document.addEventListener("focusin",e),document.addEventListener("focusout",t);let n=new MutationObserver(function(e){if(document.activeElement===document.body)for(let t of e)t.removedNodes.length>0&&m(E)});return E&&n.observe(E,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",e),document.removeEventListener("focusout",t),n.disconnect()}}},[r,E,A.paused]),(0,a.useEffect)(()=>{if(E){h.add(A);let e=document.activeElement;if(!E.contains(e)){let t=new CustomEvent(l,f);E.addEventListener(l,w),E.dispatchEvent(t),t.defaultPrevented||(function(e,{select:t=!1}={}){let n=document.activeElement;for(let r of e)if(m(r,{select:t}),document.activeElement!==n)return}(v(E).filter(e=>"A"!==e.tagName),{select:!0}),document.activeElement===e&&m(E))}return()=>{E.removeEventListener(l,w),setTimeout(()=>{let t=new CustomEvent(d,f);E.addEventListener(d,S),E.dispatchEvent(t),t.defaultPrevented||m(null!=e?e:document.body,{select:!0}),E.removeEventListener(d,S),h.remove(A)},0)}}},[E,w,S,A]);let R=(0,a.useCallback)(e=>{if(!n&&!r||A.paused)return;let t="Tab"===e.key&&!e.altKey&&!e.ctrlKey&&!e.metaKey,o=document.activeElement;if(t&&o){let t=e.currentTarget,[r,a]=function(e){let t=v(e);return[p(t,e),p(t.reverse(),e)]}(t);r&&a?e.shiftKey||o!==a?e.shiftKey&&o===r&&(e.preventDefault(),n&&m(a,{select:!0})):(e.preventDefault(),n&&m(r,{select:!0})):o===t&&e.preventDefault()}},[n,r,A.paused]);return(0,a.createElement)(u.WV.div,(0,o.Z)({tabIndex:-1},y,{ref:k,onKeyDown:R}))});function v(e){let t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:e=>{let t="INPUT"===e.tagName&&"hidden"===e.type;return e.disabled||e.hidden||t?NodeFilter.FILTER_SKIP:e.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function p(e,t){for(let n of e)if(!function(e,{upTo:t}){if("hidden"===getComputedStyle(e).visibility)return!0;for(;e&&(void 0===t||e!==t);){if("none"===getComputedStyle(e).display)return!0;e=e.parentElement}return!1}(n,{upTo:t}))return n}function m(e,{select:t=!1}={}){if(e&&e.focus){var n;let r=document.activeElement;e.focus({preventScroll:!0}),e!==r&&(n=e)instanceof HTMLInputElement&&"select"in n&&t&&e.select()}}let h=(r=[],{add(e){let t=r[0];e!==t&&(null==t||t.pause()),(r=g(r,e)).unshift(e)},remove(e){var t;null===(t=(r=g(r,e))[0])||void 0===t||t.resume()}});function g(e,t){let n=[...e],r=n.indexOf(t);return -1!==r&&n.splice(r,1),n}},3201:function(e,t,n){n.d(t,{M:function(){return i}});var r,o=n(2265),a=n(1336);let c=(r||(r=n.t(o,2)))["useId".toString()]||(()=>void 0),u=0;function i(e){let[t,n]=o.useState(c());return(0,a.b)(()=>{e||n(e=>null!=e?e:String(u++))},[e]),e||(t?`radix-${t}`:"")}},7250:function(e,t,n){n.d(t,{D:function(){return o}});var r=n(2265);function o(e){let t=(0,r.useRef)({value:e,previous:e});return(0,r.useMemo)(()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous),[e])}},1725:function(e,t,n){n.d(t,{T:function(){return c},f:function(){return u}});var r=n(2988),o=n(2265),a=n(5171);let c=(0,o.forwardRef)((e,t)=>(0,o.createElement)(a.WV.span,(0,r.Z)({},e,{ref:t,style:{position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal",...e.style}}))),u=c}}]);