/******/!function(t){/******/
/******/
// The require function
/******/
function e(n){/******/
/******/
// Check if module is in cache
/******/
if(i[n])/******/
return i[n].exports;/******/
// Create a new module (and put it into the cache)
/******/
var s=i[n]={/******/
i:n,/******/
l:!1,/******/
exports:{}};/******/
/******/
// Return the exports of the module
/******/
/******/
/******/
// Execute the module function
/******/
/******/
/******/
// Flag the module as loaded
/******/
return t[n].call(s.exports,s,s.exports,e),s.l=!0,s.exports}// webpackBootstrap
/******/
// The module cache
/******/
var i={};/******/
/******/
// Load entry module and return exports
/******/
/******/
/******/
/******/
// expose the modules object (__webpack_modules__)
/******/
e.m=t,/******/
/******/
// expose the module cache
/******/
e.c=i,/******/
/******/
// identity function for calling harmony imports with the correct context
/******/
e.i=function(t){return t},/******/
/******/
// define getter function for harmony exports
/******/
e.d=function(t,i,n){/******/
e.o(t,i)||/******/
Object.defineProperty(t,i,{/******/
configurable:!1,/******/
enumerable:!0,/******/
get:n})},/******/
/******/
// getDefaultExport function for compatibility with non-harmony modules
/******/
e.n=function(t){/******/
var i=t&&t.__esModule?/******/
function(){return t.default}:/******/
function(){return t};/******/
/******/
return e.d(i,"a",i),i},/******/
/******/
// Object.prototype.hasOwnProperty.call
/******/
e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},/******/
/******/
// __webpack_public_path__
/******/
e.p="",e(e.s=14)}([/* 0 */
/***/
function(t,e){t.exports=jQuery},/* 1 */
/***/
function(t,e,i){"use strict";/* WEBPACK VAR INJECTION */
(function(e){/*
 Copyright (C) Federico Zivolo 2018
 Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
 */
!function(e,i){t.exports=i()}(0,function(){function t(t){return t&&"[object Function]"==={}.toString.call(t)}function i(t,e){if(1!==t.nodeType)return[];var i=getComputedStyle(t,null);return e?i[e]:i}function n(t){return"HTML"===t.nodeName?t:t.parentNode||t.host}function s(t){for(var e=!0;e;){var s=t;if(e=!1,!s)return document.body;switch(s.nodeName){case"HTML":case"BODY":return s.ownerDocument.body;case"#document":return s.body}var o=i(s),r=o.overflow,a=o.overflowX,l=o.overflowY;if(/(auto|scroll|overlay)/.test(r+l+a))return s;t=n(s),e=!0,o=r=a=l=void 0}}function o(t){return 11===t?rt:10===t?at:rt||at}function r(t){var e=!0;t:for(;e;){var n=t;if(e=!1,!n)return document.documentElement;for(var s=o(10)?document.body:null,r=n.offsetParent;r===s&&n.nextElementSibling;)r=(n=n.nextElementSibling).offsetParent;var a=r&&r.nodeName;if(a&&"BODY"!==a&&"HTML"!==a){if(-1!==["TD","TABLE"].indexOf(r.nodeName)&&"static"===i(r,"position")){t=r,e=!0,s=r=a=void 0;continue t}return r}return n?n.ownerDocument.documentElement:document.documentElement}}function a(t){var e=t.nodeName;return"BODY"!==e&&("HTML"===e||r(t.firstElementChild)===t)}function l(t){for(var e=!0;e;){var i=t;if(e=!1,null===i.parentNode)return i;t=i.parentNode,e=!0}}function h(t,e){for(var i=!0;i;){var n=t,s=e;if(i=!1,!(n&&n.nodeType&&s&&s.nodeType))return document.documentElement;var o=n.compareDocumentPosition(s)&Node.DOCUMENT_POSITION_FOLLOWING,h=o?n:s,c=o?s:n,u=document.createRange();u.setStart(h,0),u.setEnd(c,0);var d=u.commonAncestorContainer;if(n!==d&&s!==d||h.contains(c))return a(d)?d:r(d);var f=l(n);f.host?(t=f.host,e=s,i=!0,o=h=c=u=d=f=void 0):(t=n,e=l(s).host,i=!0,o=h=c=u=d=f=void 0)}}function c(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"top",i="top"===e?"scrollTop":"scrollLeft",n=t.nodeName;if("BODY"===n||"HTML"===n){var s=t.ownerDocument.documentElement;return(t.ownerDocument.scrollingElement||s)[i]}return t[i]}function u(t,e){var i=2<arguments.length&&void 0!==arguments[2]&&arguments[2],n=c(e,"top"),s=c(e,"left"),o=i?-1:1;return t.top+=n*o,t.bottom+=n*o,t.left+=s*o,t.right+=s*o,t}function d(t,e){var i="x"===e?"Left":"Top",n="Left"==i?"Right":"Bottom";return parseFloat(t["border"+i+"Width"],10)+parseFloat(t["border"+n+"Width"],10)}function f(t,e,i,n){return J(e["offset"+t],e["scroll"+t],i["client"+t],i["offset"+t],i["scroll"+t],o(10)?i["offset"+t]+n["margin"+("Height"===t?"Top":"Left")]+n["margin"+("Height"===t?"Bottom":"Right")]:0)}function p(){var t=document.body,e=document.documentElement,i=o(10)&&getComputedStyle(e);return{height:f("Height",t,e,i),width:f("Width",t,e,i)}}function g(t){return ut({},t,{right:t.left+t.width,bottom:t.top+t.height})}function m(t){var e={};try{if(o(10)){e=t.getBoundingClientRect();var n=c(t,"top"),s=c(t,"left");e.top+=n,e.left+=s,e.bottom+=n,e.right+=s}else e=t.getBoundingClientRect()}catch(t){}var r={left:e.left,top:e.top,width:e.right-e.left,height:e.bottom-e.top},a="HTML"===t.nodeName?p():{},l=a.width||t.clientWidth||r.right-r.left,h=a.height||t.clientHeight||r.bottom-r.top,u=t.offsetWidth-l,f=t.offsetHeight-h;if(u||f){var m=i(t);u-=d(m,"x"),f-=d(m,"y"),r.width-=u,r.height-=f}return g(r)}function v(t,e){var n=2<arguments.length&&void 0!==arguments[2]&&arguments[2],r=o(10),a="HTML"===e.nodeName,l=m(t),h=m(e),c=s(t),d=i(e),f=parseFloat(d.borderTopWidth,10),p=parseFloat(d.borderLeftWidth,10);n&&"HTML"===e.nodeName&&(h.top=J(h.top,0),h.left=J(h.left,0));var v=g({top:l.top-h.top-f,left:l.left-h.left-p,width:l.width,height:l.height});if(v.marginTop=0,v.marginLeft=0,!r&&a){var _=parseFloat(d.marginTop,10),y=parseFloat(d.marginLeft,10);v.top-=f-_,v.bottom-=f-_,v.left-=p-y,v.right-=p-y,v.marginTop=_,v.marginLeft=y}return(r&&!n?e.contains(c):e===c&&"BODY"!==c.nodeName)&&(v=u(v,e)),v}function _(t){var e=1<arguments.length&&void 0!==arguments[1]&&arguments[1],i=t.ownerDocument.documentElement,n=v(t,i),s=J(i.clientWidth,window.innerWidth||0),o=J(i.clientHeight,window.innerHeight||0),r=e?0:c(i),a=e?0:c(i,"left");return g({top:r-n.top+n.marginTop,left:a-n.left+n.marginLeft,width:s,height:o})}function y(t){for(var e,s=!0;s;){var o=t;s=!1;var r=o.nodeName;if("BODY"===r||"HTML"===r)return!1;if(e="fixed"===i(o,"position"))return e;t=n(o),s=!0,r=void 0}}function w(t){if(!t||!t.parentElement||o())return document.documentElement;for(var e=t.parentElement;e&&"none"===i(e,"transform");)e=e.parentElement;return e||document.documentElement}function b(t,e,i,o){var r=4<arguments.length&&void 0!==arguments[4]&&arguments[4],a={top:0,left:0},l=r?w(t):h(t,e);if("viewport"===o)a=_(l,r);else{var c;"scrollParent"===o?(c=s(n(e)),"BODY"===c.nodeName&&(c=t.ownerDocument.documentElement)):c="window"===o?t.ownerDocument.documentElement:o;var u=v(c,l,r);if("HTML"!==c.nodeName||y(l))a=u;else{var d=p(),f=d.height,g=d.width;a.top+=u.top-u.marginTop,a.bottom=f+u.top,a.left+=u.left-u.marginLeft,a.right=g+u.left}}return a.left+=i,a.top+=i,a.right-=i,a.bottom-=i,a}function E(t){return t.width*t.height}function x(t,e,i,n,s){var o=5<arguments.length&&void 0!==arguments[5]?arguments[5]:0;if(-1===t.indexOf("auto"))return t;var r=b(i,n,o,s),a={top:{width:r.width,height:e.top-r.top},right:{width:r.right-e.right,height:r.height},bottom:{width:r.width,height:r.bottom-e.bottom},left:{width:e.left-r.left,height:r.height}},l=Object.keys(a).map(function(t){return ut({key:t},a[t],{area:E(a[t])})}).sort(function(t,e){return e.area-t.area}),h=l.filter(function(t){var e=t.width,n=t.height;return e>=i.clientWidth&&n>=i.clientHeight}),c=0<h.length?h[0].key:l[0].key,u=t.split("-")[1];return c+(u?"-"+u:"")}function C(t,e,i){var n=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return v(i,n?w(e):h(e,i),n)}function S(t){var e=getComputedStyle(t),i=parseFloat(e.marginTop)+parseFloat(e.marginBottom),n=parseFloat(e.marginLeft)+parseFloat(e.marginRight);return{width:t.offsetWidth+n,height:t.offsetHeight+i}}function T(t){var e={left:"right",right:"left",bottom:"top",top:"bottom"};return t.replace(/left|right|bottom|top/g,function(t){return e[t]})}function I(t,e,i){i=i.split("-")[0];var n=S(t),s={width:n.width,height:n.height},o=-1!==["right","left"].indexOf(i),r=o?"top":"left",a=o?"left":"top",l=o?"height":"width",h=o?"width":"height";return s[r]=e[r]+e[l]/2-n[l]/2,s[a]=i===a?e[a]-n[h]:e[T(a)],s}function D(t,e){return Array.prototype.find?t.find(e):t.filter(e)[0]}function O(t,e,i){if(Array.prototype.findIndex)return t.findIndex(function(t){return t[e]===i});var n=D(t,function(t){return t[e]===i});return t.indexOf(n)}function k(e,i,n){return(void 0===n?e:e.slice(0,O(e,"name",n))).forEach(function(e){e.function;var n=e.function||e.fn;e.enabled&&t(n)&&(i.offsets.popper=g(i.offsets.popper),i.offsets.reference=g(i.offsets.reference),i=n(i,e))}),i}function A(){if(!this.state.isDestroyed){var t={instance:this,styles:{},arrowStyles:{},attributes:{},flipped:!1,offsets:{}};t.offsets.reference=C(this.state,this.popper,this.reference,this.options.positionFixed),t.placement=x(this.options.placement,t.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement,this.options.modifiers.flip.padding),t.originalPlacement=t.placement,t.positionFixed=this.options.positionFixed,t.offsets.popper=I(this.popper,t.offsets.reference,t.placement),t.offsets.popper.position=this.options.positionFixed?"fixed":"absolute",t=k(this.modifiers,t),this.state.isCreated?this.options.onUpdate(t):(this.state.isCreated=!0,this.options.onCreate(t))}}function M(t,e){return t.some(function(t){var i=t.name;return t.enabled&&i===e})}function L(t){for(var e=[!1,"ms","Webkit","Moz","O"],i=t.charAt(0).toUpperCase()+t.slice(1),n=0;n<e.length;n++){var s=e[n],o=s?""+s+i:t;if(void 0!==document.body.style[o])return o}return null}function N(){return this.state.isDestroyed=!0,M(this.modifiers,"applyStyle")&&(this.popper.removeAttribute("x-placement"),this.popper.style.position="",this.popper.style.top="",this.popper.style.left="",this.popper.style.right="",this.popper.style.bottom="",this.popper.style.willChange="",this.popper.style[L("transform")]=""),this.disableEventListeners(),this.options.removeOnDestroy&&this.popper.parentNode.removeChild(this.popper),this}function P(t){var e=t.ownerDocument;return e?e.defaultView:window}function W(t,e,i,n){var o="BODY"===t.nodeName,r=o?t.ownerDocument.defaultView:t;r.addEventListener(e,i,{passive:!0}),o||W(s(r.parentNode),e,i,n),n.push(r)}function z(t,e,i,n){i.updateBound=n,P(t).addEventListener("resize",i.updateBound,{passive:!0});var o=s(t);return W(o,"scroll",i.updateBound,i.scrollParents),i.scrollElement=o,i.eventsEnabled=!0,i}function H(){this.state.eventsEnabled||(this.state=z(this.reference,this.options,this.state,this.scheduleUpdate))}function j(t,e){return P(t).removeEventListener("resize",e.updateBound),e.scrollParents.forEach(function(t){t.removeEventListener("scroll",e.updateBound)}),e.updateBound=null,e.scrollParents=[],e.scrollElement=null,e.eventsEnabled=!1,e}function R(){this.state.eventsEnabled&&(cancelAnimationFrame(this.scheduleUpdate),this.state=j(this.reference,this.state))}function F(t){return""!==t&&!isNaN(parseFloat(t))&&isFinite(t)}function $(t,e){Object.keys(e).forEach(function(i){var n="";-1!==["width","height","top","right","bottom","left"].indexOf(i)&&F(e[i])&&(n="px"),t.style[i]=e[i]+n})}function B(t,e){Object.keys(e).forEach(function(i){!1===e[i]?t.removeAttribute(i):t.setAttribute(i,e[i])})}function U(t,e,i){var n=D(t,function(t){return t.name===e}),s=!!n&&t.some(function(t){return t.name===i&&t.enabled&&t.order<n.order});if(!s);return s}function Q(t){return"end"===t?"start":"start"===t?"end":t}function V(t){var e=1<arguments.length&&void 0!==arguments[1]&&arguments[1],i=ft.indexOf(t),n=ft.slice(i+1).concat(ft.slice(0,i));return e?n.reverse():n}function q(t,e,i,n){var s=t.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),o=+s[1],r=s[2];if(!o)return t;if(0===r.indexOf("%")){var a;switch(r){case"%p":a=i;break;case"%":case"%r":default:a=n}return g(a)[e]/100*o}if("vh"===r||"vw"===r){return("vh"===r?J(document.documentElement.clientHeight,window.innerHeight||0):J(document.documentElement.clientWidth,window.innerWidth||0))/100*o}return o}function K(t,e,i,n){var s=[0,0],o=-1!==["right","left"].indexOf(n),r=t.split(/(\+|\-)/).map(function(t){return t.trim()}),a=r.indexOf(D(r,function(t){return-1!==t.search(/,|\s/)}));r[a]&&r[a].indexOf(",");var l=/\s*,\s*|\s+/,h=-1===a?[r]:[r.slice(0,a).concat([r[a].split(l)[0]]),[r[a].split(l)[1]].concat(r.slice(a+1))];return h=h.map(function(t,n){var s=(1===n?!o:o)?"height":"width",r=!1;return t.reduce(function(t,e){return""===t[t.length-1]&&-1!==["+","-"].indexOf(e)?(t[t.length-1]=e,r=!0,t):r?(t[t.length-1]+=e,r=!1,t):t.concat(e)},[]).map(function(t){return q(t,s,e,i)})}),h.forEach(function(t,e){t.forEach(function(i,n){F(i)&&(s[e]+=i*("-"===t[n-1]?-1:1))})}),s}function Y(t,e){var i,n=e.offset,s=t.placement,o=t.offsets,r=o.popper,a=o.reference,l=s.split("-")[0];return i=F(+n)?[+n,0]:K(n,r,a,l),"left"===l?(r.top+=i[0],r.left-=i[1]):"right"===l?(r.top+=i[0],r.left+=i[1]):"top"===l?(r.left+=i[0],r.top-=i[1]):"bottom"===l&&(r.left+=i[0],r.top+=i[1]),t.popper=r,t}for(var G=Math.min,Z=Math.round,X=Math.floor,J=Math.max,tt="undefined"!=typeof window&&"undefined"!=typeof document,et=["Edge","Trident","Firefox"],it=0,nt=0;nt<et.length;nt+=1)if(tt&&0<=navigator.userAgent.indexOf(et[nt])){it=1;break}var st=tt&&window.Promise,ot=st?function(t){var e=!1;return function(){e||(e=!0,window.Promise.resolve().then(function(){e=!1,t()}))}}:function(t){var e=!1;return function(){e||(e=!0,setTimeout(function(){e=!1,t()},it))}},rt=tt&&!(!window.MSInputMethodContext||!document.documentMode),at=tt&&/MSIE 10/.test(navigator.userAgent),lt=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},ht=function(){function t(t,e){for(var i,n=0;n<e.length;n++)i=e[n],i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),ct=function(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t},ut=Object.assign||function(t){for(var e,i=1;i<arguments.length;i++)for(var n in e=arguments[i])Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t},dt=["auto-start","auto","auto-end","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"],ft=dt.slice(3),pt={FLIP:"flip",CLOCKWISE:"clockwise",COUNTERCLOCKWISE:"counterclockwise"},gt=function(){function e(i,n){var s=this,o=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};lt(this,e),this.scheduleUpdate=function(){return requestAnimationFrame(s.update)},this.update=ot(this.update.bind(this)),this.options=ut({},e.Defaults,o),this.state={isDestroyed:!1,isCreated:!1,scrollParents:[]},this.reference=i&&i.jquery?i[0]:i,this.popper=n&&n.jquery?n[0]:n,this.options.modifiers={},Object.keys(ut({},e.Defaults.modifiers,o.modifiers)).forEach(function(t){s.options.modifiers[t]=ut({},e.Defaults.modifiers[t]||{},o.modifiers?o.modifiers[t]:{})}),this.modifiers=Object.keys(this.options.modifiers).map(function(t){return ut({name:t},s.options.modifiers[t])}).sort(function(t,e){return t.order-e.order}),this.modifiers.forEach(function(e){e.enabled&&t(e.onLoad)&&e.onLoad(s.reference,s.popper,s.options,e,s.state)}),this.update();var r=this.options.eventsEnabled;r&&this.enableEventListeners(),this.state.eventsEnabled=r}return ht(e,[{key:"update",value:function(){return A.call(this)}},{key:"destroy",value:function(){return N.call(this)}},{key:"enableEventListeners",value:function(){return H.call(this)}},{key:"disableEventListeners",value:function(){return R.call(this)}}]),e}();return gt.Utils=("undefined"==typeof window?e:window).PopperUtils,gt.placements=dt,gt.Defaults={placement:"bottom",positionFixed:!1,eventsEnabled:!0,removeOnDestroy:!1,onCreate:function(){},onUpdate:function(){},modifiers:{shift:{order:100,enabled:!0,fn:function(t){var e=t.placement,i=e.split("-")[0],n=e.split("-")[1];if(n){var s=t.offsets,o=s.reference,r=s.popper,a=-1!==["bottom","top"].indexOf(i),l=a?"left":"top",h=a?"width":"height",c={start:ct({},l,o[l]),end:ct({},l,o[l]+o[h]-r[h])};t.offsets.popper=ut({},r,c[n])}return t}},offset:{order:200,enabled:!0,fn:Y,offset:0},preventOverflow:{order:300,enabled:!0,fn:function(t,e){var i=e.boundariesElement||r(t.instance.popper);t.instance.reference===i&&(i=r(i));var n=L("transform"),s=t.instance.popper.style,o=s.top,a=s.left,l=s[n];s.top="",s.left="",s[n]="";var h=b(t.instance.popper,t.instance.reference,e.padding,i,t.positionFixed);s.top=o,s.left=a,s[n]=l,e.boundaries=h;var c=e.priority,u=t.offsets.popper,d={primary:function(t){var i=u[t];return u[t]<h[t]&&!e.escapeWithReference&&(i=J(u[t],h[t])),ct({},t,i)},secondary:function(t){var i="right"===t?"left":"top",n=u[i];return u[t]>h[t]&&!e.escapeWithReference&&(n=G(u[i],h[t]-("right"===t?u.width:u.height))),ct({},i,n)}};return c.forEach(function(t){var e=-1===["left","top"].indexOf(t)?"secondary":"primary";u=ut({},u,d[e](t))}),t.offsets.popper=u,t},priority:["left","right","top","bottom"],padding:5,boundariesElement:"scrollParent"},keepTogether:{order:400,enabled:!0,fn:function(t){var e=t.offsets,i=e.popper,n=e.reference,s=t.placement.split("-")[0],o=X,r=-1!==["top","bottom"].indexOf(s),a=r?"right":"bottom",l=r?"left":"top",h=r?"width":"height";return i[a]<o(n[l])&&(t.offsets.popper[l]=o(n[l])-i[h]),i[l]>o(n[a])&&(t.offsets.popper[l]=o(n[a])),t}},arrow:{order:500,enabled:!0,fn:function(t,e){var n;if(!U(t.instance.modifiers,"arrow","keepTogether"))return t;var s=e.element;if("string"==typeof s){if(!(s=t.instance.popper.querySelector(s)))return t}else if(!t.instance.popper.contains(s))return t;var o=t.placement.split("-")[0],r=t.offsets,a=r.popper,l=r.reference,h=-1!==["left","right"].indexOf(o),c=h?"height":"width",u=h?"Top":"Left",d=u.toLowerCase(),f=h?"left":"top",p=h?"bottom":"right",m=S(s)[c];l[p]-m<a[d]&&(t.offsets.popper[d]-=a[d]-(l[p]-m)),l[d]+m>a[p]&&(t.offsets.popper[d]+=l[d]+m-a[p]),t.offsets.popper=g(t.offsets.popper);var v=l[d]+l[c]/2-m/2,_=i(t.instance.popper),y=parseFloat(_["margin"+u],10),w=parseFloat(_["border"+u+"Width"],10),b=v-t.offsets.popper[d]-y-w;return b=J(G(a[c]-m,b),0),t.arrowElement=s,t.offsets.arrow=(n={},ct(n,d,Z(b)),ct(n,f,""),n),t},element:"[x-arrow]"},flip:{order:600,enabled:!0,fn:function(t,e){if(M(t.instance.modifiers,"inner"))return t;if(t.flipped&&t.placement===t.originalPlacement)return t;var i=b(t.instance.popper,t.instance.reference,e.padding,e.boundariesElement,t.positionFixed),n=t.placement.split("-")[0],s=T(n),o=t.placement.split("-")[1]||"",r=[];switch(e.behavior){case pt.FLIP:r=[n,s];break;case pt.CLOCKWISE:r=V(n);break;case pt.COUNTERCLOCKWISE:r=V(n,!0);break;default:r=e.behavior}return r.forEach(function(a,l){if(n!==a||r.length===l+1)return t;n=t.placement.split("-")[0],s=T(n);var h=t.offsets.popper,c=t.offsets.reference,u=X,d="left"===n&&u(h.right)>u(c.left)||"right"===n&&u(h.left)<u(c.right)||"top"===n&&u(h.bottom)>u(c.top)||"bottom"===n&&u(h.top)<u(c.bottom),f=u(h.left)<u(i.left),p=u(h.right)>u(i.right),g=u(h.top)<u(i.top),m=u(h.bottom)>u(i.bottom),v="left"===n&&f||"right"===n&&p||"top"===n&&g||"bottom"===n&&m,_=-1!==["top","bottom"].indexOf(n),y=!!e.flipVariations&&(_&&"start"===o&&f||_&&"end"===o&&p||!_&&"start"===o&&g||!_&&"end"===o&&m);(d||v||y)&&(t.flipped=!0,(d||v)&&(n=r[l+1]),y&&(o=Q(o)),t.placement=n+(o?"-"+o:""),t.offsets.popper=ut({},t.offsets.popper,I(t.instance.popper,t.offsets.reference,t.placement)),t=k(t.instance.modifiers,t,"flip"))}),t},behavior:"flip",padding:5,boundariesElement:"viewport"},inner:{order:700,enabled:!1,fn:function(t){var e=t.placement,i=e.split("-")[0],n=t.offsets,s=n.popper,o=n.reference,r=-1!==["left","right"].indexOf(i),a=-1===["top","left"].indexOf(i);return s[r?"left":"top"]=o[i]-(a?s[r?"width":"height"]:0),t.placement=T(e),t.offsets.popper=g(s),t}},hide:{order:800,enabled:!0,fn:function(t){if(!U(t.instance.modifiers,"hide","preventOverflow"))return t;var e=t.offsets.reference,i=D(t.instance.modifiers,function(t){return"preventOverflow"===t.name}).boundaries;if(e.bottom<i.top||e.left>i.right||e.top>i.bottom||e.right<i.left){if(!0===t.hide)return t;t.hide=!0,t.attributes["x-out-of-boundaries"]=""}else{if(!1===t.hide)return t;t.hide=!1,t.attributes["x-out-of-boundaries"]=!1}return t}},computeStyle:{order:850,enabled:!0,fn:function(t,e){var i,n,s=e.x,o=e.y,a=t.offsets.popper,l=D(t.instance.modifiers,function(t){return"applyStyle"===t.name}).gpuAcceleration,h=void 0===l?e.gpuAcceleration:l,c=r(t.instance.popper),u=m(c),d={position:a.position},f={left:X(a.left),top:Z(a.top),bottom:Z(a.bottom),right:X(a.right)},p="bottom"===s?"top":"bottom",g="right"===o?"left":"right",v=L("transform");if(n="bottom"==p?-u.height+f.bottom:f.top,i="right"==g?-u.width+f.right:f.left,h&&v)d[v]="translate3d("+i+"px, "+n+"px, 0)",d[p]=0,d[g]=0,d.willChange="transform";else{var _="bottom"==p?-1:1,y="right"==g?-1:1;d[p]=n*_,d[g]=i*y,d.willChange=p+", "+g}var w={"x-placement":t.placement};return t.attributes=ut({},w,t.attributes),t.styles=ut({},d,t.styles),t.arrowStyles=ut({},t.offsets.arrow,t.arrowStyles),t},gpuAcceleration:!0,x:"bottom",y:"right"},applyStyle:{order:900,enabled:!0,fn:function(t){return $(t.instance.popper,t.styles),B(t.instance.popper,t.attributes),t.arrowElement&&Object.keys(t.arrowStyles).length&&$(t.arrowElement,t.arrowStyles),t},onLoad:function(t,e,i,n,s){var o=C(s,e,t,i.positionFixed),r=x(i.placement,o,e,t,i.modifiers.flip.boundariesElement,i.modifiers.flip.padding);return e.setAttribute("x-placement",r),$(e,{position:i.positionFixed?"fixed":"absolute"}),i},gpuAcceleration:void 0}}},gt})}).call(e,i(13))},/* 2 */
/***/
function(t,e,i){"use strict";
// import './../node_modules/jquery/dist/jquery';
i(7),i(1),i(5),i(12),i(8),i(9),
// import './vendors/aos';
i(11),i(10),i(6),i(4)},/* 3 */
/***/
function(t,e){},/* 4 */
/***/
function(t,e,i){"use strict";AOS.init({duration:800,easing:"slide",once:!1}),jQuery(document).ready(function(t){t(".loader").delay(1e3).fadeOut("slow"),t("#overlayer").delay(1e3).fadeOut("slow");!function(){t(".js-clone-nav").each(function(){t(this).clone().attr("class","site-nav-wrap").appendTo(".site-mobile-menu-body")}),setTimeout(function(){var e=0;t(".site-mobile-menu .has-children").each(function(){var i=t(this);i.prepend('<span class="arrow-collapse collapsed">'),i.find(".arrow-collapse").attr({"data-toggle":"collapse","data-target":"#collapseItem"+e}),i.find("> ul").attr({class:"collapse",id:"collapseItem"+e}),e++})},1e3),t("body").on("click",".arrow-collapse",function(e){var i=t(this);i.closest("li").find(".collapse").hasClass("show")?i.removeClass("active"):i.addClass("active"),e.preventDefault()}),t(window).resize(function(){t(this).width()>768&&t("body").hasClass("offcanvas-menu")&&t("body").removeClass("offcanvas-menu")}),t("body").on("click",".js-menu-toggle",function(e){var i=t(this);e.preventDefault(),t("body").hasClass("offcanvas-menu")?(t("body").removeClass("offcanvas-menu"),i.removeClass("active")):(t("body").addClass("offcanvas-menu"),i.addClass("active"))}),
// click outisde offcanvas
t(document).mouseup(function(e){var i=t(".site-mobile-menu");i.is(e.target)||0!==i.has(e.target).length||t("body").hasClass("offcanvas-menu")&&t("body").removeClass("offcanvas-menu")})}();!function(){t(".nonloop-block-13").length>0&&t(".nonloop-block-13").owlCarousel({center:!1,items:1,loop:!0,stagePadding:0,margin:0,smartSpeed:1e3,autoplay:!0,nav:!0,navText:['<span class="icon-arrow_back">','<span class="icon-arrow_forward">'],responsive:{600:{margin:0,nav:!0,items:2},1e3:{margin:0,stagePadding:0,nav:!0,items:2},1200:{margin:0,stagePadding:0,nav:!0,items:3}}}),t(".slide-one-item").owlCarousel({center:!1,items:1,loop:!0,stagePadding:0,margin:0,autoplay:!0,pauseOnHover:!1,nav:!0,navText:['<span class="icon-keyboard_arrow_left">','<span class="icon-keyboard_arrow_right">']}),
// $('.slide-one-item-alt').owlCarousel({
//   center: false,
//   items: 1,
//   loop: true,
// stagePadding: 0,
// smartSpeed: 700,
//   margin: 0,
//   autoplay: true,
//   pauseOnHover: false,
// });
// $('.slide-one-item-alt-text').owlCarousel({
//   center: false,
//   items: 1,
//   loop: true,
// stagePadding: 0,
// smartSpeed: 700,
//   margin: 0,
//   autoplay: true,
//   pauseOnHover: false,
// });
t(".slide-one-item-alt").owlCarousel({center:!1,items:1,loop:!0,stagePadding:0,margin:0,smartSpeed:1e3,autoplay:!0,pauseOnHover:!0,onDragged:function(e){"left"==e.relatedTarget._drag.direction?t(".slide-one-item-alt-text").trigger("next.owl.carousel"):t(".slide-one-item-alt-text").trigger("prev.owl.carousel")}}),t(".slide-one-item-alt-text").owlCarousel({center:!1,items:1,loop:!0,stagePadding:0,margin:0,smartSpeed:1e3,autoplay:!0,pauseOnHover:!0,onDragged:function(e){"left"==e.relatedTarget._drag.direction?t(".slide-one-item-alt").trigger("next.owl.carousel"):t(".slide-one-item-alt").trigger("prev.owl.carousel")}}),t(".custom-next").click(function(e){e.preventDefault(),t(".slide-one-item-alt").trigger("next.owl.carousel"),t(".slide-one-item-alt-text").trigger("next.owl.carousel")}),t(".custom-prev").click(function(e){e.preventDefault(),t(".slide-one-item-alt").trigger("prev.owl.carousel"),t(".slide-one-item-alt-text").trigger("prev.owl.carousel")})}();!function(){t("#date-countdown").countdown("2020/10/10",function(e){t(this).html(e.strftime('<span class="countdown-block"><span class="label">%w</span> weeks </span><span class="countdown-block"><span class="label">%d</span> days </span><span class="countdown-block"><span class="label">%H</span> hr </span><span class="countdown-block"><span class="label">%M</span> min </span><span class="countdown-block"><span class="label">%S</span> sec</span>'))})}();!function(){t(".datepicker").length>0&&t(".datepicker").datepicker()}();!function(){t(".js-sticky-header").sticky({topSpacing:0})}();!function(){t(".site-menu-toggle");t("body").on("click",".main-menu li a[href^='#'], .smoothscroll[href^='#'], .site-mobile-menu .site-nav-wrap li a",function(e){e.preventDefault();var i=this.hash;t("html, body").animate({scrollTop:t(i).offset().top},600,"easeInOutExpo",function(){window.location.hash=i})})}();!function(){t(window).scroll(function(){t(this).scrollTop()>100?t(".js-sticky-header").addClass("shrink"):t(".js-sticky-header").removeClass("shrink")})}();!function(){/* activate jquery isotope */
var e=t("#posts").isotope({itemSelector:".item",isFitWidth:!0});t(window).resize(function(){e.isotope({columnWidth:".col-sm-3"})}),e.isotope({filter:"*"}),
// filter items on button click
t("#filters").on("click","button",function(){var i=t(this).attr("data-filter");e.isotope({filter:i}),t("#filters button").removeClass("active"),t(this).addClass("active")})}(),t(".fancybox").on("click",function(){var e=t(".fancybox");return t.fancybox.open(e,{},e.index(this)),!1})})},/* 5 */
/***/
function(t,e,i){"use strict";/*!
 * Bootstrap v4.3.1 (https://getbootstrap.com/)
 * Copyright 2011-2019 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
!function(t,n){n(e,i(0),i(1))}(0,function(t,e,i){function n(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function s(t,e,i){return e&&n(t.prototype,e),i&&n(t,i),t}function o(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{},n=Object.keys(i);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(i).filter(function(t){return Object.getOwnPropertyDescriptor(i,t).enumerable}))),n.forEach(function(e){var n,s,o;n=t,o=i[s=e],s in n?Object.defineProperty(n,s,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[s]=o})}return t}function r(t){var i=this,n=!1;return e(this).one(h.TRANSITION_END,function(){n=!0}),setTimeout(function(){n||h.triggerTransitionEnd(i)},t),this}function a(t,e,i){if(0===t.length)return t;if(i&&"function"==typeof i)return i(t);for(var n=(new window.DOMParser).parseFromString(t,"text/html"),s=Object.keys(e),o=[].slice.call(n.body.querySelectorAll("*")),r=0,a=o.length;r<a;r++)!function(t,i){var n=o[t],r=n.nodeName.toLowerCase();if(-1===s.indexOf(n.nodeName.toLowerCase()))return n.parentNode.removeChild(n),"continue";var a=[].slice.call(n.attributes),l=[].concat(e["*"]||[],e[r]||[]);a.forEach(function(t){(function(t,e){var i=t.nodeName.toLowerCase();if(-1!==e.indexOf(i))return-1===Ot.indexOf(i)||Boolean(t.nodeValue.match(At)||t.nodeValue.match(Mt));for(var n=e.filter(function(t){return t instanceof RegExp}),s=0,o=n.length;s<o;s++)if(i.match(n[s]))return!0;return!1})(t,l)||n.removeAttribute(t.nodeName)})}(r);return n.body.innerHTML}e=e&&e.hasOwnProperty("default")?e.default:e,i=i&&i.hasOwnProperty("default")?i.default:i;var l="transitionend",h={TRANSITION_END:"bsTransitionEnd",getUID:function(t){for(;t+=~~(1e6*Math.random()),document.getElementById(t););return t},getSelectorFromElement:function(t){var e=t.getAttribute("data-target");if(!e||"#"===e){var i=t.getAttribute("href");e=i&&"#"!==i?i.trim():""}try{return document.querySelector(e)?e:null}catch(t){return null}},getTransitionDurationFromElement:function(t){if(!t)return 0;var i=e(t).css("transition-duration"),n=e(t).css("transition-delay"),s=parseFloat(i),o=parseFloat(n);return s||o?(i=i.split(",")[0],n=n.split(",")[0],1e3*(parseFloat(i)+parseFloat(n))):0},reflow:function(t){return t.offsetHeight},triggerTransitionEnd:function(t){e(t).trigger(l)},supportsTransitionEnd:function(){return Boolean(l)},isElement:function(t){return(t[0]||t).nodeType},typeCheckConfig:function(t,e,i){for(var n in i)if(Object.prototype.hasOwnProperty.call(i,n)){var s=i[n],o=e[n],r=o&&h.isElement(o)?"element":(a=o,{}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase());if(!new RegExp(s).test(r))throw new Error(t.toUpperCase()+': Option "'+n+'" provided type "'+r+'" but expected type "'+s+'".')}var a},findShadowRoot:function(t){if(!document.documentElement.attachShadow)return null;if("function"!=typeof t.getRootNode)return t instanceof ShadowRoot?t:t.parentNode?h.findShadowRoot(t.parentNode):null;var e=t.getRootNode();return e instanceof ShadowRoot?e:null}};e.fn.emulateTransitionEnd=r,e.event.special[h.TRANSITION_END]={bindType:l,delegateType:l,handle:function(t){if(e(t.target).is(this))return t.handleObj.handler.apply(this,arguments)}};var c="alert",u="bs.alert",d="."+u,f=e.fn[c],p={CLOSE:"close"+d,CLOSED:"closed"+d,CLICK_DATA_API:"click"+d+".data-api"},g=function(){function t(t){this._element=t}var i=t.prototype;return i.close=function(t){var e=this._element;t&&(e=this._getRootElement(t)),this._triggerCloseEvent(e).isDefaultPrevented()||this._removeElement(e)},i.dispose=function(){e.removeData(this._element,u),this._element=null},i._getRootElement=function(t){var i=h.getSelectorFromElement(t),n=!1;return i&&(n=document.querySelector(i)),n||(n=e(t).closest(".alert")[0]),n},i._triggerCloseEvent=function(t){var i=e.Event(p.CLOSE);return e(t).trigger(i),i},i._removeElement=function(t){var i=this;if(e(t).removeClass("show"),e(t).hasClass("fade")){var n=h.getTransitionDurationFromElement(t);e(t).one(h.TRANSITION_END,function(e){return i._destroyElement(t,e)}).emulateTransitionEnd(n)}else this._destroyElement(t)},i._destroyElement=function(t){e(t).detach().trigger(p.CLOSED).remove()},t._jQueryInterface=function(i){return this.each(function(){var n=e(this),s=n.data(u);s||(s=new t(this),n.data(u,s)),"close"===i&&s[i](this)})},t._handleDismiss=function(t){return function(e){e&&e.preventDefault(),t.close(this)}},s(t,null,[{key:"VERSION",get:function(){return"4.3.1"}}]),t}();e(document).on(p.CLICK_DATA_API,'[data-dismiss="alert"]',g._handleDismiss(new g)),e.fn[c]=g._jQueryInterface,e.fn[c].Constructor=g,e.fn[c].noConflict=function(){return e.fn[c]=f,g._jQueryInterface};var m="button",v="bs.button",_="."+v,y=".data-api",w=e.fn[m],b="active",E='[data-toggle^="button"]',x=".btn",C={CLICK_DATA_API:"click"+_+y,FOCUS_BLUR_DATA_API:"focus"+_+y+" blur"+_+y},S=function(){function t(t){this._element=t}var i=t.prototype;return i.toggle=function(){var t=!0,i=!0,n=e(this._element).closest('[data-toggle="buttons"]')[0];if(n){var s=this._element.querySelector('input:not([type="hidden"])');if(s){if("radio"===s.type)if(s.checked&&this._element.classList.contains(b))t=!1;else{var o=n.querySelector(".active");o&&e(o).removeClass(b)}if(t){if(s.hasAttribute("disabled")||n.hasAttribute("disabled")||s.classList.contains("disabled")||n.classList.contains("disabled"))return;s.checked=!this._element.classList.contains(b),e(s).trigger("change")}s.focus(),i=!1}}i&&this._element.setAttribute("aria-pressed",!this._element.classList.contains(b)),t&&e(this._element).toggleClass(b)},i.dispose=function(){e.removeData(this._element,v),this._element=null},t._jQueryInterface=function(i){return this.each(function(){var n=e(this).data(v);n||(n=new t(this),e(this).data(v,n)),"toggle"===i&&n[i]()})},s(t,null,[{key:"VERSION",get:function(){return"4.3.1"}}]),t}();e(document).on(C.CLICK_DATA_API,E,function(t){t.preventDefault();var i=t.target;e(i).hasClass("btn")||(i=e(i).closest(x)),S._jQueryInterface.call(e(i),"toggle")}).on(C.FOCUS_BLUR_DATA_API,E,function(t){var i=e(t.target).closest(x)[0];e(i).toggleClass("focus",/^focus(in)?$/.test(t.type))}),e.fn[m]=S._jQueryInterface,e.fn[m].Constructor=S,e.fn[m].noConflict=function(){return e.fn[m]=w,S._jQueryInterface};var T="carousel",I="bs.carousel",D="."+I,O=".data-api",k=e.fn[T],A={interval:5e3,keyboard:!0,slide:!1,pause:"hover",wrap:!0,touch:!0},M={interval:"(number|boolean)",keyboard:"boolean",slide:"(boolean|string)",pause:"(string|boolean)",wrap:"boolean",touch:"boolean"},L="next",N="prev",P={SLIDE:"slide"+D,SLID:"slid"+D,KEYDOWN:"keydown"+D,MOUSEENTER:"mouseenter"+D,MOUSELEAVE:"mouseleave"+D,TOUCHSTART:"touchstart"+D,TOUCHMOVE:"touchmove"+D,TOUCHEND:"touchend"+D,POINTERDOWN:"pointerdown"+D,POINTERUP:"pointerup"+D,DRAG_START:"dragstart"+D,LOAD_DATA_API:"load"+D+O,CLICK_DATA_API:"click"+D+O},W="active",z=".active.carousel-item",H=".carousel-indicators",j={TOUCH:"touch",PEN:"pen"},R=function(){function t(t,e){this._items=null,this._interval=null,this._activeElement=null,this._isPaused=!1,this._isSliding=!1,this.touchTimeout=null,this.touchStartX=0,this.touchDeltaX=0,this._config=this._getConfig(e),this._element=t,this._indicatorsElement=this._element.querySelector(H),this._touchSupported="ontouchstart"in document.documentElement||0<navigator.maxTouchPoints,this._pointerEvent=Boolean(window.PointerEvent||window.MSPointerEvent),this._addEventListeners()}var i=t.prototype;return i.next=function(){this._isSliding||this._slide(L)},i.nextWhenVisible=function(){!document.hidden&&e(this._element).is(":visible")&&"hidden"!==e(this._element).css("visibility")&&this.next()},i.prev=function(){this._isSliding||this._slide(N)},i.pause=function(t){t||(this._isPaused=!0),this._element.querySelector(".carousel-item-next, .carousel-item-prev")&&(h.triggerTransitionEnd(this._element),this.cycle(!0)),clearInterval(this._interval),this._interval=null},i.cycle=function(t){t||(this._isPaused=!1),this._interval&&(clearInterval(this._interval),this._interval=null),this._config.interval&&!this._isPaused&&(this._interval=setInterval((document.visibilityState?this.nextWhenVisible:this.next).bind(this),this._config.interval))},i.to=function(t){var i=this;this._activeElement=this._element.querySelector(z);var n=this._getItemIndex(this._activeElement);if(!(t>this._items.length-1||t<0))if(this._isSliding)e(this._element).one(P.SLID,function(){return i.to(t)});else{if(n===t)return this.pause(),void this.cycle();var s=n<t?L:N;this._slide(s,this._items[t])}},i.dispose=function(){e(this._element).off(D),e.removeData(this._element,I),this._items=null,this._config=null,this._element=null,this._interval=null,this._isPaused=null,this._isSliding=null,this._activeElement=null,this._indicatorsElement=null},i._getConfig=function(t){return t=o({},A,t),h.typeCheckConfig(T,t,M),t},i._handleSwipe=function(){var t=Math.abs(this.touchDeltaX);if(!(t<=40)){var e=t/this.touchDeltaX;0<e&&this.prev(),e<0&&this.next()}},i._addEventListeners=function(){var t=this;this._config.keyboard&&e(this._element).on(P.KEYDOWN,function(e){return t._keydown(e)}),"hover"===this._config.pause&&e(this._element).on(P.MOUSEENTER,function(e){return t.pause(e)}).on(P.MOUSELEAVE,function(e){return t.cycle(e)}),this._config.touch&&this._addTouchEventListeners()},i._addTouchEventListeners=function(){var t=this;if(this._touchSupported){var i=function(e){t._pointerEvent&&j[e.originalEvent.pointerType.toUpperCase()]?t.touchStartX=e.originalEvent.clientX:t._pointerEvent||(t.touchStartX=e.originalEvent.touches[0].clientX)},n=function(e){t._pointerEvent&&j[e.originalEvent.pointerType.toUpperCase()]&&(t.touchDeltaX=e.originalEvent.clientX-t.touchStartX),t._handleSwipe(),"hover"===t._config.pause&&(t.pause(),t.touchTimeout&&clearTimeout(t.touchTimeout),t.touchTimeout=setTimeout(function(e){return t.cycle(e)},500+t._config.interval))};e(this._element.querySelectorAll(".carousel-item img")).on(P.DRAG_START,function(t){return t.preventDefault()}),this._pointerEvent?(e(this._element).on(P.POINTERDOWN,function(t){return i(t)}),e(this._element).on(P.POINTERUP,function(t){return n(t)}),this._element.classList.add("pointer-event")):(e(this._element).on(P.TOUCHSTART,function(t){return i(t)}),e(this._element).on(P.TOUCHMOVE,function(e){var i;(i=e).originalEvent.touches&&1<i.originalEvent.touches.length?t.touchDeltaX=0:t.touchDeltaX=i.originalEvent.touches[0].clientX-t.touchStartX}),e(this._element).on(P.TOUCHEND,function(t){return n(t)}))}},i._keydown=function(t){if(!/input|textarea/i.test(t.target.tagName))switch(t.which){case 37:t.preventDefault(),this.prev();break;case 39:t.preventDefault(),this.next()}},i._getItemIndex=function(t){return this._items=t&&t.parentNode?[].slice.call(t.parentNode.querySelectorAll(".carousel-item")):[],this._items.indexOf(t)},i._getItemByDirection=function(t,e){var i=t===L,n=t===N,s=this._getItemIndex(e),o=this._items.length-1;if((n&&0===s||i&&s===o)&&!this._config.wrap)return e;var r=(s+(t===N?-1:1))%this._items.length;return-1===r?this._items[this._items.length-1]:this._items[r]},i._triggerSlideEvent=function(t,i){var n=this._getItemIndex(t),s=this._getItemIndex(this._element.querySelector(z)),o=e.Event(P.SLIDE,{relatedTarget:t,direction:i,from:s,to:n});return e(this._element).trigger(o),o},i._setActiveIndicatorElement=function(t){if(this._indicatorsElement){var i=[].slice.call(this._indicatorsElement.querySelectorAll(".active"));e(i).removeClass(W);var n=this._indicatorsElement.children[this._getItemIndex(t)];n&&e(n).addClass(W)}},i._slide=function(t,i){var n,s,o,r=this,a=this._element.querySelector(z),l=this._getItemIndex(a),c=i||a&&this._getItemByDirection(t,a),u=this._getItemIndex(c),d=Boolean(this._interval);if(o=t===L?(n="carousel-item-left",s="carousel-item-next","left"):(n="carousel-item-right",s="carousel-item-prev","right"),c&&e(c).hasClass(W))this._isSliding=!1;else if(!this._triggerSlideEvent(c,o).isDefaultPrevented()&&a&&c){this._isSliding=!0,d&&this.pause(),this._setActiveIndicatorElement(c);var f=e.Event(P.SLID,{relatedTarget:c,direction:o,from:l,to:u});if(e(this._element).hasClass("slide")){e(c).addClass(s),h.reflow(c),e(a).addClass(n),e(c).addClass(n);var p=parseInt(c.getAttribute("data-interval"),10);this._config.interval=p?(this._config.defaultInterval=this._config.defaultInterval||this._config.interval,p):this._config.defaultInterval||this._config.interval;var g=h.getTransitionDurationFromElement(a);e(a).one(h.TRANSITION_END,function(){e(c).removeClass(n+" "+s).addClass(W),e(a).removeClass(W+" "+s+" "+n),r._isSliding=!1,setTimeout(function(){return e(r._element).trigger(f)},0)}).emulateTransitionEnd(g)}else e(a).removeClass(W),e(c).addClass(W),this._isSliding=!1,e(this._element).trigger(f);d&&this.cycle()}},t._jQueryInterface=function(i){return this.each(function(){var n=e(this).data(I),s=o({},A,e(this).data());"object"==typeof i&&(s=o({},s,i));var r="string"==typeof i?i:s.slide;if(n||(n=new t(this,s),e(this).data(I,n)),"number"==typeof i)n.to(i);else if("string"==typeof r){if(void 0===n[r])throw new TypeError('No method named "'+r+'"');n[r]()}else s.interval&&s.ride&&(n.pause(),n.cycle())})},t._dataApiClickHandler=function(i){var n=h.getSelectorFromElement(this);if(n){var s=e(n)[0];if(s&&e(s).hasClass("carousel")){var r=o({},e(s).data(),e(this).data()),a=this.getAttribute("data-slide-to");a&&(r.interval=!1),t._jQueryInterface.call(e(s),r),a&&e(s).data(I).to(a),i.preventDefault()}}},s(t,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"Default",get:function(){return A}}]),t}();e(document).on(P.CLICK_DATA_API,"[data-slide], [data-slide-to]",R._dataApiClickHandler),e(window).on(P.LOAD_DATA_API,function(){for(var t=[].slice.call(document.querySelectorAll('[data-ride="carousel"]')),i=0,n=t.length;i<n;i++){var s=e(t[i]);R._jQueryInterface.call(s,s.data())}}),e.fn[T]=R._jQueryInterface,e.fn[T].Constructor=R,e.fn[T].noConflict=function(){return e.fn[T]=k,R._jQueryInterface};var F="collapse",$="bs.collapse",B="."+$,U=e.fn[F],Q={toggle:!0,parent:""},V={toggle:"boolean",parent:"(string|element)"},q={SHOW:"show"+B,SHOWN:"shown"+B,HIDE:"hide"+B,HIDDEN:"hidden"+B,CLICK_DATA_API:"click"+B+".data-api"},K="show",Y="collapse",G="collapsing",Z="collapsed",X='[data-toggle="collapse"]',J=function(){function t(t,e){this._isTransitioning=!1,this._element=t,this._config=this._getConfig(e),this._triggerArray=[].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#'+t.id+'"],[data-toggle="collapse"][data-target="#'+t.id+'"]'));for(var i=[].slice.call(document.querySelectorAll(X)),n=0,s=i.length;n<s;n++){var o=i[n],r=h.getSelectorFromElement(o),a=[].slice.call(document.querySelectorAll(r)).filter(function(e){return e===t});null!==r&&0<a.length&&(this._selector=r,this._triggerArray.push(o))}this._parent=this._config.parent?this._getParent():null,this._config.parent||this._addAriaAndCollapsedClass(this._element,this._triggerArray),this._config.toggle&&this.toggle()}var i=t.prototype;return i.toggle=function(){e(this._element).hasClass(K)?this.hide():this.show()},i.show=function(){var i,n,s=this;if(!(this._isTransitioning||e(this._element).hasClass(K)||(this._parent&&0===(i=[].slice.call(this._parent.querySelectorAll(".show, .collapsing")).filter(function(t){return"string"==typeof s._config.parent?t.getAttribute("data-parent")===s._config.parent:t.classList.contains(Y)})).length&&(i=null),i&&(n=e(i).not(this._selector).data($))&&n._isTransitioning))){var o=e.Event(q.SHOW);if(e(this._element).trigger(o),!o.isDefaultPrevented()){i&&(t._jQueryInterface.call(e(i).not(this._selector),"hide"),n||e(i).data($,null));var r=this._getDimension();e(this._element).removeClass(Y).addClass(G),this._element.style[r]=0,this._triggerArray.length&&e(this._triggerArray).removeClass(Z).attr("aria-expanded",!0),this.setTransitioning(!0);var a="scroll"+(r[0].toUpperCase()+r.slice(1)),l=h.getTransitionDurationFromElement(this._element);e(this._element).one(h.TRANSITION_END,function(){e(s._element).removeClass(G).addClass(Y).addClass(K),s._element.style[r]="",s.setTransitioning(!1),e(s._element).trigger(q.SHOWN)}).emulateTransitionEnd(l),this._element.style[r]=this._element[a]+"px"}}},i.hide=function(){var t=this;if(!this._isTransitioning&&e(this._element).hasClass(K)){var i=e.Event(q.HIDE);if(e(this._element).trigger(i),!i.isDefaultPrevented()){var n=this._getDimension();this._element.style[n]=this._element.getBoundingClientRect()[n]+"px",h.reflow(this._element),e(this._element).addClass(G).removeClass(Y).removeClass(K);var s=this._triggerArray.length;if(0<s)for(var o=0;o<s;o++){var r=this._triggerArray[o],a=h.getSelectorFromElement(r);null!==a&&(e([].slice.call(document.querySelectorAll(a))).hasClass(K)||e(r).addClass(Z).attr("aria-expanded",!1))}this.setTransitioning(!0),this._element.style[n]="";var l=h.getTransitionDurationFromElement(this._element);e(this._element).one(h.TRANSITION_END,function(){t.setTransitioning(!1),e(t._element).removeClass(G).addClass(Y).trigger(q.HIDDEN)}).emulateTransitionEnd(l)}}},i.setTransitioning=function(t){this._isTransitioning=t},i.dispose=function(){e.removeData(this._element,$),this._config=null,this._parent=null,this._element=null,this._triggerArray=null,this._isTransitioning=null},i._getConfig=function(t){return(t=o({},Q,t)).toggle=Boolean(t.toggle),h.typeCheckConfig(F,t,V),t},i._getDimension=function(){return e(this._element).hasClass("width")?"width":"height"},i._getParent=function(){var i,n=this;h.isElement(this._config.parent)?(i=this._config.parent,void 0!==this._config.parent.jquery&&(i=this._config.parent[0])):i=document.querySelector(this._config.parent);var s='[data-toggle="collapse"][data-parent="'+this._config.parent+'"]',o=[].slice.call(i.querySelectorAll(s));return e(o).each(function(e,i){n._addAriaAndCollapsedClass(t._getTargetFromElement(i),[i])}),i},i._addAriaAndCollapsedClass=function(t,i){var n=e(t).hasClass(K);i.length&&e(i).toggleClass(Z,!n).attr("aria-expanded",n)},t._getTargetFromElement=function(t){var e=h.getSelectorFromElement(t);return e?document.querySelector(e):null},t._jQueryInterface=function(i){return this.each(function(){var n=e(this),s=n.data($),r=o({},Q,n.data(),"object"==typeof i&&i?i:{});if(!s&&r.toggle&&/show|hide/.test(i)&&(r.toggle=!1),s||(s=new t(this,r),n.data($,s)),"string"==typeof i){if(void 0===s[i])throw new TypeError('No method named "'+i+'"');s[i]()}})},s(t,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"Default",get:function(){return Q}}]),t}();e(document).on(q.CLICK_DATA_API,X,function(t){"A"===t.currentTarget.tagName&&t.preventDefault();var i=e(this),n=h.getSelectorFromElement(this),s=[].slice.call(document.querySelectorAll(n));e(s).each(function(){var t=e(this),n=t.data($)?"toggle":i.data();J._jQueryInterface.call(t,n)})}),e.fn[F]=J._jQueryInterface,e.fn[F].Constructor=J,e.fn[F].noConflict=function(){return e.fn[F]=U,J._jQueryInterface};var tt="dropdown",et="bs.dropdown",it="."+et,nt=".data-api",st=e.fn[tt],ot=new RegExp("38|40|27"),rt={HIDE:"hide"+it,HIDDEN:"hidden"+it,SHOW:"show"+it,SHOWN:"shown"+it,CLICK:"click"+it,CLICK_DATA_API:"click"+it+nt,KEYDOWN_DATA_API:"keydown"+it+nt,KEYUP_DATA_API:"keyup"+it+nt},at="disabled",lt="show",ht="dropdown-menu-right",ct='[data-toggle="dropdown"]',ut=".dropdown-menu",dt={offset:0,flip:!0,boundary:"scrollParent",reference:"toggle",display:"dynamic"},ft={offset:"(number|string|function)",flip:"boolean",boundary:"(string|element)",reference:"(string|element)",display:"string"},pt=function(){function t(t,e){this._element=t,this._popper=null,this._config=this._getConfig(e),this._menu=this._getMenuElement(),this._inNavbar=this._detectNavbar(),this._addEventListeners()}var n=t.prototype;return n.toggle=function(){if(!this._element.disabled&&!e(this._element).hasClass(at)){var n=t._getParentFromElement(this._element),s=e(this._menu).hasClass(lt);if(t._clearMenus(),!s){var o={relatedTarget:this._element},r=e.Event(rt.SHOW,o);if(e(n).trigger(r),!r.isDefaultPrevented()){if(!this._inNavbar){if(void 0===i)throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)");var a=this._element;"parent"===this._config.reference?a=n:h.isElement(this._config.reference)&&(a=this._config.reference,void 0!==this._config.reference.jquery&&(a=this._config.reference[0])),"scrollParent"!==this._config.boundary&&e(n).addClass("position-static"),this._popper=new i(a,this._menu,this._getPopperConfig())}"ontouchstart"in document.documentElement&&0===e(n).closest(".navbar-nav").length&&e(document.body).children().on("mouseover",null,e.noop),this._element.focus(),this._element.setAttribute("aria-expanded",!0),e(this._menu).toggleClass(lt),e(n).toggleClass(lt).trigger(e.Event(rt.SHOWN,o))}}}},n.show=function(){if(!(this._element.disabled||e(this._element).hasClass(at)||e(this._menu).hasClass(lt))){var i={relatedTarget:this._element},n=e.Event(rt.SHOW,i),s=t._getParentFromElement(this._element);e(s).trigger(n),n.isDefaultPrevented()||(e(this._menu).toggleClass(lt),e(s).toggleClass(lt).trigger(e.Event(rt.SHOWN,i)))}},n.hide=function(){if(!this._element.disabled&&!e(this._element).hasClass(at)&&e(this._menu).hasClass(lt)){var i={relatedTarget:this._element},n=e.Event(rt.HIDE,i),s=t._getParentFromElement(this._element);e(s).trigger(n),n.isDefaultPrevented()||(e(this._menu).toggleClass(lt),e(s).toggleClass(lt).trigger(e.Event(rt.HIDDEN,i)))}},n.dispose=function(){e.removeData(this._element,et),e(this._element).off(it),this._element=null,(this._menu=null)!==this._popper&&(this._popper.destroy(),this._popper=null)},n.update=function(){this._inNavbar=this._detectNavbar(),null!==this._popper&&this._popper.scheduleUpdate()},n._addEventListeners=function(){var t=this;e(this._element).on(rt.CLICK,function(e){e.preventDefault(),e.stopPropagation(),t.toggle()})},n._getConfig=function(t){return t=o({},this.constructor.Default,e(this._element).data(),t),h.typeCheckConfig(tt,t,this.constructor.DefaultType),t},n._getMenuElement=function(){if(!this._menu){var e=t._getParentFromElement(this._element);e&&(this._menu=e.querySelector(ut))}return this._menu},n._getPlacement=function(){var t=e(this._element.parentNode),i="bottom-start";return t.hasClass("dropup")?(i="top-start",e(this._menu).hasClass(ht)&&(i="top-end")):t.hasClass("dropright")?i="right-start":t.hasClass("dropleft")?i="left-start":e(this._menu).hasClass(ht)&&(i="bottom-end"),i},n._detectNavbar=function(){return 0<e(this._element).closest(".navbar").length},n._getOffset=function(){var t=this,e={};return"function"==typeof this._config.offset?e.fn=function(e){return e.offsets=o({},e.offsets,t._config.offset(e.offsets,t._element)||{}),e}:e.offset=this._config.offset,e},n._getPopperConfig=function(){var t={placement:this._getPlacement(),modifiers:{offset:this._getOffset(),flip:{enabled:this._config.flip},preventOverflow:{boundariesElement:this._config.boundary}}};return"static"===this._config.display&&(t.modifiers.applyStyle={enabled:!1}),t},t._jQueryInterface=function(i){return this.each(function(){var n=e(this).data(et);if(n||(n=new t(this,"object"==typeof i?i:null),e(this).data(et,n)),"string"==typeof i){if(void 0===n[i])throw new TypeError('No method named "'+i+'"');n[i]()}})},t._clearMenus=function(i){if(!i||3!==i.which&&("keyup"!==i.type||9===i.which))for(var n=[].slice.call(document.querySelectorAll(ct)),s=0,o=n.length;s<o;s++){var r=t._getParentFromElement(n[s]),a=e(n[s]).data(et),l={relatedTarget:n[s]};if(i&&"click"===i.type&&(l.clickEvent=i),a){var h=a._menu;if(e(r).hasClass(lt)&&!(i&&("click"===i.type&&/input|textarea/i.test(i.target.tagName)||"keyup"===i.type&&9===i.which)&&e.contains(r,i.target))){var c=e.Event(rt.HIDE,l);e(r).trigger(c),c.isDefaultPrevented()||("ontouchstart"in document.documentElement&&e(document.body).children().off("mouseover",null,e.noop),n[s].setAttribute("aria-expanded","false"),e(h).removeClass(lt),e(r).removeClass(lt).trigger(e.Event(rt.HIDDEN,l)))}}}},t._getParentFromElement=function(t){var e,i=h.getSelectorFromElement(t);return i&&(e=document.querySelector(i)),e||t.parentNode},t._dataApiKeydownHandler=function(i){if((/input|textarea/i.test(i.target.tagName)?!(32===i.which||27!==i.which&&(40!==i.which&&38!==i.which||e(i.target).closest(ut).length)):ot.test(i.which))&&(i.preventDefault(),i.stopPropagation(),!this.disabled&&!e(this).hasClass(at))){var n=t._getParentFromElement(this),s=e(n).hasClass(lt);if(s&&(!s||27!==i.which&&32!==i.which)){var o=[].slice.call(n.querySelectorAll(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)"));if(0!==o.length){var r=o.indexOf(i.target);38===i.which&&0<r&&r--,40===i.which&&r<o.length-1&&r++,r<0&&(r=0),o[r].focus()}}else{if(27===i.which){var a=n.querySelector(ct);e(a).trigger("focus")}e(this).trigger("click")}}},s(t,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"Default",get:function(){return dt}},{key:"DefaultType",get:function(){return ft}}]),t}();e(document).on(rt.KEYDOWN_DATA_API,ct,pt._dataApiKeydownHandler).on(rt.KEYDOWN_DATA_API,ut,pt._dataApiKeydownHandler).on(rt.CLICK_DATA_API+" "+rt.KEYUP_DATA_API,pt._clearMenus).on(rt.CLICK_DATA_API,ct,function(t){t.preventDefault(),t.stopPropagation(),pt._jQueryInterface.call(e(this),"toggle")}).on(rt.CLICK_DATA_API,".dropdown form",function(t){t.stopPropagation()}),e.fn[tt]=pt._jQueryInterface,e.fn[tt].Constructor=pt,e.fn[tt].noConflict=function(){return e.fn[tt]=st,pt._jQueryInterface};var gt="modal",mt="bs.modal",vt="."+mt,_t=e.fn[gt],yt={backdrop:!0,keyboard:!0,focus:!0,show:!0},wt={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean",show:"boolean"},bt={HIDE:"hide"+vt,HIDDEN:"hidden"+vt,SHOW:"show"+vt,SHOWN:"shown"+vt,FOCUSIN:"focusin"+vt,RESIZE:"resize"+vt,CLICK_DISMISS:"click.dismiss"+vt,KEYDOWN_DISMISS:"keydown.dismiss"+vt,MOUSEUP_DISMISS:"mouseup.dismiss"+vt,MOUSEDOWN_DISMISS:"mousedown.dismiss"+vt,CLICK_DATA_API:"click"+vt+".data-api"},Et="modal-open",xt="fade",Ct="show",St=".modal-dialog",Tt=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",It=".sticky-top",Dt=function(){function t(t,e){this._config=this._getConfig(e),this._element=t,this._dialog=t.querySelector(St),this._backdrop=null,this._isShown=!1,this._isBodyOverflowing=!1,this._ignoreBackdropClick=!1,this._isTransitioning=!1,this._scrollbarWidth=0}var i=t.prototype;return i.toggle=function(t){return this._isShown?this.hide():this.show(t)},i.show=function(t){var i=this;if(!this._isShown&&!this._isTransitioning){e(this._element).hasClass(xt)&&(this._isTransitioning=!0);var n=e.Event(bt.SHOW,{relatedTarget:t});e(this._element).trigger(n),this._isShown||n.isDefaultPrevented()||(this._isShown=!0,this._checkScrollbar(),this._setScrollbar(),this._adjustDialog(),this._setEscapeEvent(),this._setResizeEvent(),e(this._element).on(bt.CLICK_DISMISS,'[data-dismiss="modal"]',function(t){return i.hide(t)}),e(this._dialog).on(bt.MOUSEDOWN_DISMISS,function(){e(i._element).one(bt.MOUSEUP_DISMISS,function(t){e(t.target).is(i._element)&&(i._ignoreBackdropClick=!0)})}),this._showBackdrop(function(){return i._showElement(t)}))}},i.hide=function(t){var i=this;if(t&&t.preventDefault(),this._isShown&&!this._isTransitioning){var n=e.Event(bt.HIDE);if(e(this._element).trigger(n),this._isShown&&!n.isDefaultPrevented()){this._isShown=!1;var s=e(this._element).hasClass(xt);if(s&&(this._isTransitioning=!0),this._setEscapeEvent(),this._setResizeEvent(),e(document).off(bt.FOCUSIN),e(this._element).removeClass(Ct),e(this._element).off(bt.CLICK_DISMISS),e(this._dialog).off(bt.MOUSEDOWN_DISMISS),s){var o=h.getTransitionDurationFromElement(this._element);e(this._element).one(h.TRANSITION_END,function(t){return i._hideModal(t)}).emulateTransitionEnd(o)}else this._hideModal()}}},i.dispose=function(){[window,this._element,this._dialog].forEach(function(t){return e(t).off(vt)}),e(document).off(bt.FOCUSIN),e.removeData(this._element,mt),this._config=null,this._element=null,this._dialog=null,this._backdrop=null,this._isShown=null,this._isBodyOverflowing=null,this._ignoreBackdropClick=null,this._isTransitioning=null,this._scrollbarWidth=null},i.handleUpdate=function(){this._adjustDialog()},i._getConfig=function(t){return t=o({},yt,t),h.typeCheckConfig(gt,t,wt),t},i._showElement=function(t){var i=this,n=e(this._element).hasClass(xt);this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE||document.body.appendChild(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),e(this._dialog).hasClass("modal-dialog-scrollable")?this._dialog.querySelector(".modal-body").scrollTop=0:this._element.scrollTop=0,n&&h.reflow(this._element),e(this._element).addClass(Ct),this._config.focus&&this._enforceFocus();var s=e.Event(bt.SHOWN,{relatedTarget:t}),o=function(){i._config.focus&&i._element.focus(),i._isTransitioning=!1,e(i._element).trigger(s)};if(n){var r=h.getTransitionDurationFromElement(this._dialog);e(this._dialog).one(h.TRANSITION_END,o).emulateTransitionEnd(r)}else o()},i._enforceFocus=function(){var t=this;e(document).off(bt.FOCUSIN).on(bt.FOCUSIN,function(i){document!==i.target&&t._element!==i.target&&0===e(t._element).has(i.target).length&&t._element.focus()})},i._setEscapeEvent=function(){var t=this;this._isShown&&this._config.keyboard?e(this._element).on(bt.KEYDOWN_DISMISS,function(e){27===e.which&&(e.preventDefault(),t.hide())}):this._isShown||e(this._element).off(bt.KEYDOWN_DISMISS)},i._setResizeEvent=function(){var t=this;this._isShown?e(window).on(bt.RESIZE,function(e){return t.handleUpdate(e)}):e(window).off(bt.RESIZE)},i._hideModal=function(){var t=this;this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._isTransitioning=!1,this._showBackdrop(function(){e(document.body).removeClass(Et),t._resetAdjustments(),t._resetScrollbar(),e(t._element).trigger(bt.HIDDEN)})},i._removeBackdrop=function(){this._backdrop&&(e(this._backdrop).remove(),this._backdrop=null)},i._showBackdrop=function(t){var i=this,n=e(this._element).hasClass(xt)?xt:"";if(this._isShown&&this._config.backdrop){if(this._backdrop=document.createElement("div"),this._backdrop.className="modal-backdrop",n&&this._backdrop.classList.add(n),e(this._backdrop).appendTo(document.body),e(this._element).on(bt.CLICK_DISMISS,function(t){i._ignoreBackdropClick?i._ignoreBackdropClick=!1:t.target===t.currentTarget&&("static"===i._config.backdrop?i._element.focus():i.hide())}),n&&h.reflow(this._backdrop),e(this._backdrop).addClass(Ct),!t)return;if(!n)return void t();var s=h.getTransitionDurationFromElement(this._backdrop);e(this._backdrop).one(h.TRANSITION_END,t).emulateTransitionEnd(s)}else if(!this._isShown&&this._backdrop){e(this._backdrop).removeClass(Ct);var o=function(){i._removeBackdrop(),t&&t()};if(e(this._element).hasClass(xt)){var r=h.getTransitionDurationFromElement(this._backdrop);e(this._backdrop).one(h.TRANSITION_END,o).emulateTransitionEnd(r)}else o()}else t&&t()},i._adjustDialog=function(){var t=this._element.scrollHeight>document.documentElement.clientHeight;!this._isBodyOverflowing&&t&&(this._element.style.paddingLeft=this._scrollbarWidth+"px"),this._isBodyOverflowing&&!t&&(this._element.style.paddingRight=this._scrollbarWidth+"px")},i._resetAdjustments=function(){this._element.style.paddingLeft="",this._element.style.paddingRight=""},i._checkScrollbar=function(){var t=document.body.getBoundingClientRect();this._isBodyOverflowing=t.left+t.right<window.innerWidth,this._scrollbarWidth=this._getScrollbarWidth()},i._setScrollbar=function(){var t=this;if(this._isBodyOverflowing){var i=[].slice.call(document.querySelectorAll(Tt)),n=[].slice.call(document.querySelectorAll(It));e(i).each(function(i,n){var s=n.style.paddingRight,o=e(n).css("padding-right");e(n).data("padding-right",s).css("padding-right",parseFloat(o)+t._scrollbarWidth+"px")}),e(n).each(function(i,n){var s=n.style.marginRight,o=e(n).css("margin-right");e(n).data("margin-right",s).css("margin-right",parseFloat(o)-t._scrollbarWidth+"px")});var s=document.body.style.paddingRight,o=e(document.body).css("padding-right");e(document.body).data("padding-right",s).css("padding-right",parseFloat(o)+this._scrollbarWidth+"px")}e(document.body).addClass(Et)},i._resetScrollbar=function(){var t=[].slice.call(document.querySelectorAll(Tt));e(t).each(function(t,i){var n=e(i).data("padding-right");e(i).removeData("padding-right"),i.style.paddingRight=n||""});var i=[].slice.call(document.querySelectorAll(""+It));e(i).each(function(t,i){var n=e(i).data("margin-right");void 0!==n&&e(i).css("margin-right",n).removeData("margin-right")});var n=e(document.body).data("padding-right");e(document.body).removeData("padding-right"),document.body.style.paddingRight=n||""},i._getScrollbarWidth=function(){var t=document.createElement("div");t.className="modal-scrollbar-measure",document.body.appendChild(t);var e=t.getBoundingClientRect().width-t.clientWidth;return document.body.removeChild(t),e},t._jQueryInterface=function(i,n){return this.each(function(){var s=e(this).data(mt),r=o({},yt,e(this).data(),"object"==typeof i&&i?i:{});if(s||(s=new t(this,r),e(this).data(mt,s)),"string"==typeof i){if(void 0===s[i])throw new TypeError('No method named "'+i+'"');s[i](n)}else r.show&&s.show(n)})},s(t,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"Default",get:function(){return yt}}]),t}();e(document).on(bt.CLICK_DATA_API,'[data-toggle="modal"]',function(t){var i,n=this,s=h.getSelectorFromElement(this);s&&(i=document.querySelector(s));var r=e(i).data(mt)?"toggle":o({},e(i).data(),e(this).data());"A"!==this.tagName&&"AREA"!==this.tagName||t.preventDefault();var a=e(i).one(bt.SHOW,function(t){t.isDefaultPrevented()||a.one(bt.HIDDEN,function(){e(n).is(":visible")&&n.focus()})});Dt._jQueryInterface.call(e(i),r,this)}),e.fn[gt]=Dt._jQueryInterface,e.fn[gt].Constructor=Dt,e.fn[gt].noConflict=function(){return e.fn[gt]=_t,Dt._jQueryInterface};var Ot=["background","cite","href","itemtype","longdesc","poster","src","xlink:href"],kt={"*":["class","dir","id","lang","role",/^aria-[\w-]*$/i],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},At=/^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,Mt=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i,Lt="tooltip",Nt="bs.tooltip",Pt="."+Nt,Wt=e.fn[Lt],zt="bs-tooltip",Ht=new RegExp("(^|\\s)"+zt+"\\S+","g"),jt=["sanitize","whiteList","sanitizeFn"],Rt={animation:"boolean",template:"string",title:"(string|element|function)",trigger:"string",delay:"(number|object)",html:"boolean",selector:"(string|boolean)",placement:"(string|function)",offset:"(number|string|function)",container:"(string|element|boolean)",fallbackPlacement:"(string|array)",boundary:"(string|element)",sanitize:"boolean",sanitizeFn:"(null|function)",whiteList:"object"},Ft={AUTO:"auto",TOP:"top",RIGHT:"right",BOTTOM:"bottom",LEFT:"left"},$t={animation:!0,template:'<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,selector:!1,placement:"top",offset:0,container:!1,fallbackPlacement:"flip",boundary:"scrollParent",sanitize:!0,sanitizeFn:null,whiteList:kt},Bt="show",Ut={HIDE:"hide"+Pt,HIDDEN:"hidden"+Pt,SHOW:"show"+Pt,SHOWN:"shown"+Pt,INSERTED:"inserted"+Pt,CLICK:"click"+Pt,FOCUSIN:"focusin"+Pt,FOCUSOUT:"focusout"+Pt,MOUSEENTER:"mouseenter"+Pt,MOUSELEAVE:"mouseleave"+Pt},Qt="fade",Vt="show",qt="hover",Kt="focus",Yt=function(){function t(t,e){if(void 0===i)throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");this._isEnabled=!0,this._timeout=0,this._hoverState="",this._activeTrigger={},this._popper=null,this.element=t,this.config=this._getConfig(e),this.tip=null,this._setListeners()}var n=t.prototype;return n.enable=function(){this._isEnabled=!0},n.disable=function(){this._isEnabled=!1},n.toggleEnabled=function(){this._isEnabled=!this._isEnabled},n.toggle=function(t){if(this._isEnabled)if(t){var i=this.constructor.DATA_KEY,n=e(t.currentTarget).data(i);n||(n=new this.constructor(t.currentTarget,this._getDelegateConfig()),e(t.currentTarget).data(i,n)),n._activeTrigger.click=!n._activeTrigger.click,n._isWithActiveTrigger()?n._enter(null,n):n._leave(null,n)}else{if(e(this.getTipElement()).hasClass(Vt))return void this._leave(null,this);this._enter(null,this)}},n.dispose=function(){clearTimeout(this._timeout),e.removeData(this.element,this.constructor.DATA_KEY),e(this.element).off(this.constructor.EVENT_KEY),e(this.element).closest(".modal").off("hide.bs.modal"),this.tip&&e(this.tip).remove(),this._isEnabled=null,this._timeout=null,this._hoverState=null,(this._activeTrigger=null)!==this._popper&&this._popper.destroy(),this._popper=null,this.element=null,this.config=null,this.tip=null},n.show=function(){var t=this;if("none"===e(this.element).css("display"))throw new Error("Please use show on visible elements");var n=e.Event(this.constructor.Event.SHOW);if(this.isWithContent()&&this._isEnabled){e(this.element).trigger(n);var s=h.findShadowRoot(this.element),o=e.contains(null!==s?s:this.element.ownerDocument.documentElement,this.element);if(n.isDefaultPrevented()||!o)return;var r=this.getTipElement(),a=h.getUID(this.constructor.NAME);r.setAttribute("id",a),this.element.setAttribute("aria-describedby",a),this.setContent(),this.config.animation&&e(r).addClass(Qt);var l="function"==typeof this.config.placement?this.config.placement.call(this,r,this.element):this.config.placement,c=this._getAttachment(l);this.addAttachmentClass(c);var u=this._getContainer();e(r).data(this.constructor.DATA_KEY,this),e.contains(this.element.ownerDocument.documentElement,this.tip)||e(r).appendTo(u),e(this.element).trigger(this.constructor.Event.INSERTED),this._popper=new i(this.element,r,{placement:c,modifiers:{offset:this._getOffset(),flip:{behavior:this.config.fallbackPlacement},arrow:{element:".arrow"},preventOverflow:{boundariesElement:this.config.boundary}},onCreate:function(e){e.originalPlacement!==e.placement&&t._handlePopperPlacementChange(e)},onUpdate:function(e){return t._handlePopperPlacementChange(e)}}),e(r).addClass(Vt),"ontouchstart"in document.documentElement&&e(document.body).children().on("mouseover",null,e.noop);var d=function(){t.config.animation&&t._fixTransition();var i=t._hoverState;t._hoverState=null,e(t.element).trigger(t.constructor.Event.SHOWN),"out"===i&&t._leave(null,t)};if(e(this.tip).hasClass(Qt)){var f=h.getTransitionDurationFromElement(this.tip);e(this.tip).one(h.TRANSITION_END,d).emulateTransitionEnd(f)}else d()}},n.hide=function(t){var i=this,n=this.getTipElement(),s=e.Event(this.constructor.Event.HIDE),o=function(){i._hoverState!==Bt&&n.parentNode&&n.parentNode.removeChild(n),i._cleanTipClass(),i.element.removeAttribute("aria-describedby"),e(i.element).trigger(i.constructor.Event.HIDDEN),null!==i._popper&&i._popper.destroy(),t&&t()};if(e(this.element).trigger(s),!s.isDefaultPrevented()){if(e(n).removeClass(Vt),"ontouchstart"in document.documentElement&&e(document.body).children().off("mouseover",null,e.noop),this._activeTrigger.click=!1,this._activeTrigger[Kt]=!1,this._activeTrigger[qt]=!1,e(this.tip).hasClass(Qt)){var r=h.getTransitionDurationFromElement(n);e(n).one(h.TRANSITION_END,o).emulateTransitionEnd(r)}else o();this._hoverState=""}},n.update=function(){null!==this._popper&&this._popper.scheduleUpdate()},n.isWithContent=function(){return Boolean(this.getTitle())},n.addAttachmentClass=function(t){e(this.getTipElement()).addClass(zt+"-"+t)},n.getTipElement=function(){return this.tip=this.tip||e(this.config.template)[0],this.tip},n.setContent=function(){var t=this.getTipElement();this.setElementContent(e(t.querySelectorAll(".tooltip-inner")),this.getTitle()),e(t).removeClass(Qt+" "+Vt)},n.setElementContent=function(t,i){"object"!=typeof i||!i.nodeType&&!i.jquery?this.config.html?(this.config.sanitize&&(i=a(i,this.config.whiteList,this.config.sanitizeFn)),t.html(i)):t.text(i):this.config.html?e(i).parent().is(t)||t.empty().append(i):t.text(e(i).text())},n.getTitle=function(){var t=this.element.getAttribute("data-original-title");return t||(t="function"==typeof this.config.title?this.config.title.call(this.element):this.config.title),t},n._getOffset=function(){var t=this,e={};return"function"==typeof this.config.offset?e.fn=function(e){return e.offsets=o({},e.offsets,t.config.offset(e.offsets,t.element)||{}),e}:e.offset=this.config.offset,e},n._getContainer=function(){return!1===this.config.container?document.body:h.isElement(this.config.container)?e(this.config.container):e(document).find(this.config.container)},n._getAttachment=function(t){return Ft[t.toUpperCase()]},n._setListeners=function(){var t=this;this.config.trigger.split(" ").forEach(function(i){if("click"===i)e(t.element).on(t.constructor.Event.CLICK,t.config.selector,function(e){return t.toggle(e)});else if("manual"!==i){var n=i===qt?t.constructor.Event.MOUSEENTER:t.constructor.Event.FOCUSIN,s=i===qt?t.constructor.Event.MOUSELEAVE:t.constructor.Event.FOCUSOUT;e(t.element).on(n,t.config.selector,function(e){return t._enter(e)}).on(s,t.config.selector,function(e){return t._leave(e)})}}),e(this.element).closest(".modal").on("hide.bs.modal",function(){t.element&&t.hide()}),this.config.selector?this.config=o({},this.config,{trigger:"manual",selector:""}):this._fixTitle()},n._fixTitle=function(){var t=typeof this.element.getAttribute("data-original-title");(this.element.getAttribute("title")||"string"!==t)&&(this.element.setAttribute("data-original-title",this.element.getAttribute("title")||""),this.element.setAttribute("title",""))},n._enter=function(t,i){var n=this.constructor.DATA_KEY;(i=i||e(t.currentTarget).data(n))||(i=new this.constructor(t.currentTarget,this._getDelegateConfig()),e(t.currentTarget).data(n,i)),t&&(i._activeTrigger["focusin"===t.type?Kt:qt]=!0),e(i.getTipElement()).hasClass(Vt)||i._hoverState===Bt?i._hoverState=Bt:(clearTimeout(i._timeout),i._hoverState=Bt,i.config.delay&&i.config.delay.show?i._timeout=setTimeout(function(){i._hoverState===Bt&&i.show()},i.config.delay.show):i.show())},n._leave=function(t,i){var n=this.constructor.DATA_KEY;(i=i||e(t.currentTarget).data(n))||(i=new this.constructor(t.currentTarget,this._getDelegateConfig()),e(t.currentTarget).data(n,i)),t&&(i._activeTrigger["focusout"===t.type?Kt:qt]=!1),i._isWithActiveTrigger()||(clearTimeout(i._timeout),i._hoverState="out",i.config.delay&&i.config.delay.hide?i._timeout=setTimeout(function(){"out"===i._hoverState&&i.hide()},i.config.delay.hide):i.hide())},n._isWithActiveTrigger=function(){for(var t in this._activeTrigger)if(this._activeTrigger[t])return!0;return!1},n._getConfig=function(t){var i=e(this.element).data();return Object.keys(i).forEach(function(t){-1!==jt.indexOf(t)&&delete i[t]}),"number"==typeof(t=o({},this.constructor.Default,i,"object"==typeof t&&t?t:{})).delay&&(t.delay={show:t.delay,hide:t.delay}),"number"==typeof t.title&&(t.title=t.title.toString()),"number"==typeof t.content&&(t.content=t.content.toString()),h.typeCheckConfig(Lt,t,this.constructor.DefaultType),t.sanitize&&(t.template=a(t.template,t.whiteList,t.sanitizeFn)),t},n._getDelegateConfig=function(){var t={};if(this.config)for(var e in this.config)this.constructor.Default[e]!==this.config[e]&&(t[e]=this.config[e]);return t},n._cleanTipClass=function(){var t=e(this.getTipElement()),i=t.attr("class").match(Ht);null!==i&&i.length&&t.removeClass(i.join(""))},n._handlePopperPlacementChange=function(t){var e=t.instance;this.tip=e.popper,this._cleanTipClass(),this.addAttachmentClass(this._getAttachment(t.placement))},n._fixTransition=function(){var t=this.getTipElement(),i=this.config.animation;null===t.getAttribute("x-placement")&&(e(t).removeClass(Qt),this.config.animation=!1,this.hide(),this.show(),this.config.animation=i)},t._jQueryInterface=function(i){return this.each(function(){var n=e(this).data(Nt),s="object"==typeof i&&i;if((n||!/dispose|hide/.test(i))&&(n||(n=new t(this,s),e(this).data(Nt,n)),"string"==typeof i)){if(void 0===n[i])throw new TypeError('No method named "'+i+'"');n[i]()}})},s(t,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"Default",get:function(){return $t}},{key:"NAME",get:function(){return Lt}},{key:"DATA_KEY",get:function(){return Nt}},{key:"Event",get:function(){return Ut}},{key:"EVENT_KEY",get:function(){return Pt}},{key:"DefaultType",get:function(){return Rt}}]),t}();e.fn[Lt]=Yt._jQueryInterface,e.fn[Lt].Constructor=Yt,e.fn[Lt].noConflict=function(){return e.fn[Lt]=Wt,Yt._jQueryInterface};var Gt="popover",Zt="bs.popover",Xt="."+Zt,Jt=e.fn[Gt],te="bs-popover",ee=new RegExp("(^|\\s)"+te+"\\S+","g"),ie=o({},Yt.Default,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'}),ne=o({},Yt.DefaultType,{content:"(string|element|function)"}),se={HIDE:"hide"+Xt,HIDDEN:"hidden"+Xt,SHOW:"show"+Xt,SHOWN:"shown"+Xt,INSERTED:"inserted"+Xt,CLICK:"click"+Xt,FOCUSIN:"focusin"+Xt,FOCUSOUT:"focusout"+Xt,MOUSEENTER:"mouseenter"+Xt,MOUSELEAVE:"mouseleave"+Xt},oe=function(t){function i(){return t.apply(this,arguments)||this}var n,o;o=t,(n=i).prototype=Object.create(o.prototype),(n.prototype.constructor=n).__proto__=o;var r=i.prototype;return r.isWithContent=function(){return this.getTitle()||this._getContent()},r.addAttachmentClass=function(t){e(this.getTipElement()).addClass(te+"-"+t)},r.getTipElement=function(){return this.tip=this.tip||e(this.config.template)[0],this.tip},r.setContent=function(){var t=e(this.getTipElement());this.setElementContent(t.find(".popover-header"),this.getTitle());var i=this._getContent();"function"==typeof i&&(i=i.call(this.element)),this.setElementContent(t.find(".popover-body"),i),t.removeClass("fade show")},r._getContent=function(){return this.element.getAttribute("data-content")||this.config.content},r._cleanTipClass=function(){var t=e(this.getTipElement()),i=t.attr("class").match(ee);null!==i&&0<i.length&&t.removeClass(i.join(""))},i._jQueryInterface=function(t){return this.each(function(){var n=e(this).data(Zt),s="object"==typeof t?t:null;if((n||!/dispose|hide/.test(t))&&(n||(n=new i(this,s),e(this).data(Zt,n)),"string"==typeof t)){if(void 0===n[t])throw new TypeError('No method named "'+t+'"');n[t]()}})},s(i,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"Default",get:function(){return ie}},{key:"NAME",get:function(){return Gt}},{key:"DATA_KEY",get:function(){return Zt}},{key:"Event",get:function(){return se}},{key:"EVENT_KEY",get:function(){return Xt}},{key:"DefaultType",get:function(){return ne}}]),i}(Yt);e.fn[Gt]=oe._jQueryInterface,e.fn[Gt].Constructor=oe,e.fn[Gt].noConflict=function(){return e.fn[Gt]=Jt,oe._jQueryInterface};var re="scrollspy",ae="bs.scrollspy",le="."+ae,he=e.fn[re],ce={offset:10,method:"auto",target:""},ue={offset:"number",method:"string",target:"(string|element)"},de={ACTIVATE:"activate"+le,SCROLL:"scroll"+le,LOAD_DATA_API:"load"+le+".data-api"},fe="active",pe=".nav, .list-group",ge=".nav-link",me=".list-group-item",ve=".dropdown-item",_e="position",ye=function(){function t(t,i){var n=this;this._element=t,this._scrollElement="BODY"===t.tagName?window:t,this._config=this._getConfig(i),this._selector=this._config.target+" "+ge+","+this._config.target+" "+me+","+this._config.target+" "+ve,this._offsets=[],this._targets=[],this._activeTarget=null,this._scrollHeight=0,e(this._scrollElement).on(de.SCROLL,function(t){return n._process(t)}),this.refresh(),this._process()}var i=t.prototype;return i.refresh=function(){var t=this,i=this._scrollElement===this._scrollElement.window?"offset":_e,n="auto"===this._config.method?i:this._config.method,s=n===_e?this._getScrollTop():0;this._offsets=[],this._targets=[],this._scrollHeight=this._getScrollHeight(),[].slice.call(document.querySelectorAll(this._selector)).map(function(t){var i,o=h.getSelectorFromElement(t);if(o&&(i=document.querySelector(o)),i){var r=i.getBoundingClientRect();if(r.width||r.height)return[e(i)[n]().top+s,o]}return null}).filter(function(t){return t}).sort(function(t,e){return t[0]-e[0]}).forEach(function(e){t._offsets.push(e[0]),t._targets.push(e[1])})},i.dispose=function(){e.removeData(this._element,ae),e(this._scrollElement).off(le),this._element=null,this._scrollElement=null,this._config=null,this._selector=null,this._offsets=null,this._targets=null,this._activeTarget=null,this._scrollHeight=null},i._getConfig=function(t){if("string"!=typeof(t=o({},ce,"object"==typeof t&&t?t:{})).target){var i=e(t.target).attr("id");i||(i=h.getUID(re),e(t.target).attr("id",i)),t.target="#"+i}return h.typeCheckConfig(re,t,ue),t},i._getScrollTop=function(){return this._scrollElement===window?this._scrollElement.pageYOffset:this._scrollElement.scrollTop},i._getScrollHeight=function(){return this._scrollElement.scrollHeight||Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)},i._getOffsetHeight=function(){return this._scrollElement===window?window.innerHeight:this._scrollElement.getBoundingClientRect().height},i._process=function(){var t=this._getScrollTop()+this._config.offset,e=this._getScrollHeight(),i=this._config.offset+e-this._getOffsetHeight();if(this._scrollHeight!==e&&this.refresh(),i<=t){var n=this._targets[this._targets.length-1];this._activeTarget!==n&&this._activate(n)}else{if(this._activeTarget&&t<this._offsets[0]&&0<this._offsets[0])return this._activeTarget=null,void this._clear();for(var s=this._offsets.length;s--;)this._activeTarget!==this._targets[s]&&t>=this._offsets[s]&&(void 0===this._offsets[s+1]||t<this._offsets[s+1])&&this._activate(this._targets[s])}},i._activate=function(t){this._activeTarget=t,this._clear();var i=this._selector.split(",").map(function(e){return e+'[data-target="'+t+'"],'+e+'[href="'+t+'"]'}),n=e([].slice.call(document.querySelectorAll(i.join(","))));n.hasClass("dropdown-item")?(n.closest(".dropdown").find(".dropdown-toggle").addClass(fe),n.addClass(fe)):(n.addClass(fe),n.parents(pe).prev(ge+", "+me).addClass(fe),n.parents(pe).prev(".nav-item").children(ge).addClass(fe)),e(this._scrollElement).trigger(de.ACTIVATE,{relatedTarget:t})},i._clear=function(){[].slice.call(document.querySelectorAll(this._selector)).filter(function(t){return t.classList.contains(fe)}).forEach(function(t){return t.classList.remove(fe)})},t._jQueryInterface=function(i){return this.each(function(){var n=e(this).data(ae);if(n||(n=new t(this,"object"==typeof i&&i),e(this).data(ae,n)),"string"==typeof i){if(void 0===n[i])throw new TypeError('No method named "'+i+'"');n[i]()}})},s(t,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"Default",get:function(){return ce}}]),t}();e(window).on(de.LOAD_DATA_API,function(){for(var t=[].slice.call(document.querySelectorAll('[data-spy="scroll"]')),i=t.length;i--;){var n=e(t[i]);ye._jQueryInterface.call(n,n.data())}}),e.fn[re]=ye._jQueryInterface,e.fn[re].Constructor=ye,e.fn[re].noConflict=function(){return e.fn[re]=he,ye._jQueryInterface};var we="bs.tab",be="."+we,Ee=e.fn.tab,xe={HIDE:"hide"+be,HIDDEN:"hidden"+be,SHOW:"show"+be,SHOWN:"shown"+be,CLICK_DATA_API:"click"+be+".data-api"},Ce="active",Se=".active",Te="> li > .active",Ie=function(){function t(t){this._element=t}var i=t.prototype;return i.show=function(){var t=this;if(!(this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE&&e(this._element).hasClass(Ce)||e(this._element).hasClass("disabled"))){var i,n,s=e(this._element).closest(".nav, .list-group")[0],o=h.getSelectorFromElement(this._element);if(s){var r="UL"===s.nodeName||"OL"===s.nodeName?Te:Se;n=(n=e.makeArray(e(s).find(r)))[n.length-1]}var a=e.Event(xe.HIDE,{relatedTarget:this._element}),l=e.Event(xe.SHOW,{relatedTarget:n});if(n&&e(n).trigger(a),e(this._element).trigger(l),!l.isDefaultPrevented()&&!a.isDefaultPrevented()){o&&(i=document.querySelector(o)),this._activate(this._element,s);var c=function(){var i=e.Event(xe.HIDDEN,{relatedTarget:t._element}),s=e.Event(xe.SHOWN,{relatedTarget:n});e(n).trigger(i),e(t._element).trigger(s)};i?this._activate(i,i.parentNode,c):c()}}},i.dispose=function(){e.removeData(this._element,we),this._element=null},i._activate=function(t,i,n){var s=this,o=(!i||"UL"!==i.nodeName&&"OL"!==i.nodeName?e(i).children(Se):e(i).find(Te))[0],r=n&&o&&e(o).hasClass("fade"),a=function(){return s._transitionComplete(t,o,n)};if(o&&r){var l=h.getTransitionDurationFromElement(o);e(o).removeClass("show").one(h.TRANSITION_END,a).emulateTransitionEnd(l)}else a()},i._transitionComplete=function(t,i,n){if(i){e(i).removeClass(Ce);var s=e(i.parentNode).find("> .dropdown-menu .active")[0];s&&e(s).removeClass(Ce),"tab"===i.getAttribute("role")&&i.setAttribute("aria-selected",!1)}if(e(t).addClass(Ce),"tab"===t.getAttribute("role")&&t.setAttribute("aria-selected",!0),h.reflow(t),t.classList.contains("fade")&&t.classList.add("show"),t.parentNode&&e(t.parentNode).hasClass("dropdown-menu")){var o=e(t).closest(".dropdown")[0];if(o){var r=[].slice.call(o.querySelectorAll(".dropdown-toggle"));e(r).addClass(Ce)}t.setAttribute("aria-expanded",!0)}n&&n()},t._jQueryInterface=function(i){return this.each(function(){var n=e(this),s=n.data(we);if(s||(s=new t(this),n.data(we,s)),"string"==typeof i){if(void 0===s[i])throw new TypeError('No method named "'+i+'"');s[i]()}})},s(t,null,[{key:"VERSION",get:function(){return"4.3.1"}}]),t}();e(document).on(xe.CLICK_DATA_API,'[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',function(t){t.preventDefault(),Ie._jQueryInterface.call(e(this),"show")}),e.fn.tab=Ie._jQueryInterface,e.fn.tab.Constructor=Ie,e.fn.tab.noConflict=function(){return e.fn.tab=Ee,Ie._jQueryInterface};var De="toast",Oe="bs.toast",ke="."+Oe,Ae=e.fn[De],Me={CLICK_DISMISS:"click.dismiss"+ke,HIDE:"hide"+ke,HIDDEN:"hidden"+ke,SHOW:"show"+ke,SHOWN:"shown"+ke},Le="show",Ne="showing",Pe={animation:"boolean",autohide:"boolean",delay:"number"},We={animation:!0,autohide:!0,delay:500},ze=function(){function t(t,e){this._element=t,this._config=this._getConfig(e),this._timeout=null,this._setListeners()}var i=t.prototype;return i.show=function(){var t=this;e(this._element).trigger(Me.SHOW),this._config.animation&&this._element.classList.add("fade");var i=function(){t._element.classList.remove(Ne),t._element.classList.add(Le),e(t._element).trigger(Me.SHOWN),t._config.autohide&&t.hide()};if(this._element.classList.remove("hide"),this._element.classList.add(Ne),this._config.animation){var n=h.getTransitionDurationFromElement(this._element);e(this._element).one(h.TRANSITION_END,i).emulateTransitionEnd(n)}else i()},i.hide=function(t){var i=this;this._element.classList.contains(Le)&&(e(this._element).trigger(Me.HIDE),t?this._close():this._timeout=setTimeout(function(){i._close()},this._config.delay))},i.dispose=function(){clearTimeout(this._timeout),this._timeout=null,this._element.classList.contains(Le)&&this._element.classList.remove(Le),e(this._element).off(Me.CLICK_DISMISS),e.removeData(this._element,Oe),this._element=null,this._config=null},i._getConfig=function(t){return t=o({},We,e(this._element).data(),"object"==typeof t&&t?t:{}),h.typeCheckConfig(De,t,this.constructor.DefaultType),t},i._setListeners=function(){var t=this;e(this._element).on(Me.CLICK_DISMISS,'[data-dismiss="toast"]',function(){return t.hide(!0)})},i._close=function(){var t=this,i=function(){t._element.classList.add("hide"),e(t._element).trigger(Me.HIDDEN)};if(this._element.classList.remove(Le),this._config.animation){var n=h.getTransitionDurationFromElement(this._element);e(this._element).one(h.TRANSITION_END,i).emulateTransitionEnd(n)}else i()},t._jQueryInterface=function(i){return this.each(function(){var n=e(this),s=n.data(Oe);if(s||(s=new t(this,"object"==typeof i&&i),n.data(Oe,s)),"string"==typeof i){if(void 0===s[i])throw new TypeError('No method named "'+i+'"');s[i](this)}})},s(t,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"DefaultType",get:function(){return Pe}},{key:"Default",get:function(){return We}}]),t}();e.fn[De]=ze._jQueryInterface,e.fn[De].Constructor=ze,e.fn[De].noConflict=function(){return e.fn[De]=Ae,ze._jQueryInterface},function(){if(void 0===e)throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");var t=e.fn.jquery.split(" ")[0].split(".");if(t[0]<2&&t[1]<9||1===t[0]&&9===t[1]&&t[2]<1||4<=t[0])throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")}(),t.Util=h,t.Alert=g,t.Button=S,t.Carousel=R,t.Collapse=J,t.Dropdown=pt,t.Modal=Dt,t.Popover=oe,t.Scrollspy=ye,t.Tab=Ie,t.Toast=ze,t.Tooltip=Yt,Object.defineProperty(t,"__esModule",{value:!0})})},/* 6 */
/***/
function(t,e,i){"use strict";var n,s,o,r,a,l,h,c,u,d,f,n,p,n,g,m,n,v,n,g,_,n,g,y,n,g,w,n,g,b,n,g,E,n,g,x,n,s;/*!
 * Isotope PACKAGED v3.0.6
 *
 * Licensed GPLv3 for open source use
 * or Isotope Commercial License for commercial use
 *
 * https://isotope.metafizzy.co
 * Copyright 2010-2018 Metafizzy
 */
!function(o,r){n=[i(0)],void 0!==(s=function(t){return r(o,t)}.apply(e,n))&&(t.exports=s)}(window,function(t,e){function i(i,o,a){function l(t,e,n){var s,o="$()."+i+'("'+e+'")';return t.each(function(t,l){var h=a.data(l,i);if(!h)return void r(i+" not initialized. Cannot call methods, i.e. "+o);var c=h[e];if(!c||"_"==e.charAt(0))return void r(o+" is not a valid method");var u=c.apply(h,n);s=void 0===s?u:s}),void 0!==s?s:t}function h(t,e){t.each(function(t,n){var s=a.data(n,i);s?(s.option(e),s._init()):(s=new o(n,e),a.data(n,i,s))})}(a=a||e||t.jQuery)&&(o.prototype.option||(o.prototype.option=function(t){a.isPlainObject(t)&&(this.options=a.extend(!0,this.options,t))}),a.fn[i]=function(t){if("string"==typeof t){return l(this,t,s.call(arguments,1))}return h(this,t),this},n(a))}function n(t){!t||t&&t.bridget||(t.bridget=i)}var s=Array.prototype.slice,o=t.console,r=void 0===o?function(){}:function(t){o.error(t)};return n(e||t.jQuery),i}),function(t,e){r=e,a={id:"ev-emitter/ev-emitter",exports:{},loaded:!1},o="function"==typeof r?r.call(a.exports,i,a.exports,a):r,a.loaded=!0,void 0===o&&(o=a.exports)}("undefined"!=typeof window&&window,function(){function t(){}var e=t.prototype;return e.on=function(t,e){if(t&&e){var i=this._events=this._events||{},n=i[t]=i[t]||[];return-1==n.indexOf(e)&&n.push(e),this}},e.once=function(t,e){if(t&&e){this.on(t,e);var i=this._onceEvents=this._onceEvents||{};return(i[t]=i[t]||{})[e]=!0,this}},e.off=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){var n=i.indexOf(e);return-1!=n&&i.splice(n,1),this}},e.emitEvent=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){i=i.slice(0),e=e||[];for(var n=this._onceEvents&&this._onceEvents[t],s=0;s<i.length;s++){var o=i[s];n&&n[o]&&(this.off(t,o),delete n[o]),o.apply(this,e)}return this}},e.allOff=function(){delete this._events,delete this._onceEvents},t}),function(t,e){h=e,c={id:"get-size/get-size",exports:{},loaded:!1},l="function"==typeof h?h.call(c.exports,i,c.exports,c):h,c.loaded=!0,void 0===l&&(l=c.exports)}(window,function(){function t(t){var e=parseFloat(t);return-1==t.indexOf("%")&&!isNaN(e)&&e}function e(){}function i(){for(var t={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0},e=0;e<h;e++){t[l[e]]=0}return t}function n(t){var e=getComputedStyle(t);return e||a("Style returned "+e+". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"),e}function s(){if(!c){c=!0;var e=document.createElement("div");e.style.width="200px",e.style.padding="1px 2px 3px 4px",e.style.borderStyle="solid",e.style.borderWidth="1px 2px 3px 4px",e.style.boxSizing="border-box";var i=document.body||document.documentElement;i.appendChild(e);var s=n(e);r=200==Math.round(t(s.width)),o.isBoxSizeOuter=r,i.removeChild(e)}}function o(e){if(s(),"string"==typeof e&&(e=document.querySelector(e)),e&&"object"==typeof e&&e.nodeType){var o=n(e);if("none"==o.display)return i();var a={};a.width=e.offsetWidth,a.height=e.offsetHeight;for(var c=a.isBorderBox="border-box"==o.boxSizing,u=0;u<h;u++){var d=l[u],f=o[d],p=parseFloat(f);a[d]=isNaN(p)?0:p}var g=a.paddingLeft+a.paddingRight,m=a.paddingTop+a.paddingBottom,v=a.marginLeft+a.marginRight,_=a.marginTop+a.marginBottom,y=a.borderLeftWidth+a.borderRightWidth,w=a.borderTopWidth+a.borderBottomWidth,b=c&&r,E=t(o.width);!1!==E&&(a.width=E+(b?0:g+y));var x=t(o.height);return!1!==x&&(a.height=x+(b?0:m+w)),a.innerWidth=a.width-(g+y),a.innerHeight=a.height-(m+w),a.outerWidth=a.width+v,a.outerHeight=a.height+_,a}}var r,a="undefined"==typeof console?e:function(t){},l=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"],h=l.length,c=!1;return o}),function(t,e){d=e,f={id:"desandro-matches-selector/matches-selector",exports:{},loaded:!1},u="function"==typeof d?d.call(f.exports,i,f.exports,f):d,f.loaded=!0,void 0===u&&(u=f.exports)}(window,function(){var t=function(){var t=window.Element.prototype;if(t.matches)return"matches";if(t.matchesSelector)return"matchesSelector";for(var e=["webkit","moz","ms","o"],i=0;i<e.length;i++){var n=e[i],s=n+"MatchesSelector";if(t[s])return s}}();return function(e,i){return e[t](i)}}),function(t,i){n=[u],p=function(e){return i(t,e)}.apply(e,n)}(window,function(t,e){var i={};i.extend=function(t,e){for(var i in e)t[i]=e[i];return t},i.modulo=function(t,e){return(t%e+e)%e};var n=Array.prototype.slice;i.makeArray=function(t){return Array.isArray(t)?t:null===t||void 0===t?[]:"object"==typeof t&&"number"==typeof t.length?n.call(t):[t]},i.removeFrom=function(t,e){var i=t.indexOf(e);-1!=i&&t.splice(i,1)},i.getParent=function(t,i){for(;t.parentNode&&t!=document.body;)if(t=t.parentNode,e(t,i))return t},i.getQueryElement=function(t){return"string"==typeof t?document.querySelector(t):t},i.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},i.filterFindElements=function(t,n){t=i.makeArray(t);var s=[];return t.forEach(function(t){if(t instanceof HTMLElement){if(!n)return void s.push(t);e(t,n)&&s.push(t);for(var i=t.querySelectorAll(n),o=0;o<i.length;o++)s.push(i[o])}}),s},i.debounceMethod=function(t,e,i){i=i||100;var n=t.prototype[e],s=e+"Timeout";t.prototype[e]=function(){var t=this[s];clearTimeout(t);var e=arguments,o=this;this[s]=setTimeout(function(){n.apply(o,e),delete o[s]},i)}},i.docReady=function(t){var e=document.readyState;"complete"==e||"interactive"==e?setTimeout(t):document.addEventListener("DOMContentLoaded",t)},i.toDashed=function(t){return t.replace(/(.)([A-Z])/g,function(t,e,i){return e+"-"+i}).toLowerCase()};var s=t.console;return i.htmlInit=function(e,n){i.docReady(function(){var o=i.toDashed(n),r="data-"+o,a=document.querySelectorAll("["+r+"]"),l=document.querySelectorAll(".js-"+o),h=i.makeArray(a).concat(i.makeArray(l)),c=r+"-options",u=t.jQuery;h.forEach(function(t){var i,o=t.getAttribute(r)||t.getAttribute(c);try{i=o&&JSON.parse(o)}catch(e){return void(s&&s.error("Error parsing "+r+" on "+t.className+": "+e))}var a=new e(t,i);u&&u.data(t,n,a)})})},i}),function(t,i){n=[o,l],g=i,m="function"==typeof g?g.apply(e,n):g}(window,function(t,e){function i(t){for(var e in t)return!1;return null,!0}function n(t,e){t&&(this.element=t,this.layout=e,this.position={x:0,y:0},this._create())}var s=document.documentElement.style,o="string"==typeof s.transition?"transition":"WebkitTransition",r="string"==typeof s.transform?"transform":"WebkitTransform",a={WebkitTransition:"webkitTransitionEnd",transition:"transitionend"}[o],l={transform:r,transition:o,transitionDuration:o+"Duration",transitionProperty:o+"Property",transitionDelay:o+"Delay"},h=n.prototype=Object.create(t.prototype);h.constructor=n,h._create=function(){this._transn={ingProperties:{},clean:{},onEnd:{}},this.css({position:"absolute"})},h.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},h.getSize=function(){this.size=e(this.element)},h.css=function(t){var e=this.element.style;for(var i in t){e[l[i]||i]=t[i]}},h.getPosition=function(){var t=getComputedStyle(this.element),e=this.layout._getOption("originLeft"),i=this.layout._getOption("originTop"),n=t[e?"left":"right"],s=t[i?"top":"bottom"],o=parseFloat(n),r=parseFloat(s),a=this.layout.size;-1!=n.indexOf("%")&&(o=o/100*a.width),-1!=s.indexOf("%")&&(r=r/100*a.height),o=isNaN(o)?0:o,r=isNaN(r)?0:r,o-=e?a.paddingLeft:a.paddingRight,r-=i?a.paddingTop:a.paddingBottom,this.position.x=o,this.position.y=r},h.layoutPosition=function(){var t=this.layout.size,e={},i=this.layout._getOption("originLeft"),n=this.layout._getOption("originTop"),s=i?"paddingLeft":"paddingRight",o=i?"left":"right",r=i?"right":"left",a=this.position.x+t[s];e[o]=this.getXValue(a),e[r]="";var l=n?"paddingTop":"paddingBottom",h=n?"top":"bottom",c=n?"bottom":"top",u=this.position.y+t[l];e[h]=this.getYValue(u),e[c]="",this.css(e),this.emitEvent("layout",[this])},h.getXValue=function(t){var e=this.layout._getOption("horizontal");return this.layout.options.percentPosition&&!e?t/this.layout.size.width*100+"%":t+"px"},h.getYValue=function(t){var e=this.layout._getOption("horizontal");return this.layout.options.percentPosition&&e?t/this.layout.size.height*100+"%":t+"px"},h._transitionTo=function(t,e){this.getPosition();var i=this.position.x,n=this.position.y,s=t==this.position.x&&e==this.position.y;if(this.setPosition(t,e),s&&!this.isTransitioning)return void this.layoutPosition();var o=t-i,r=e-n,a={};a.transform=this.getTranslate(o,r),this.transition({to:a,onTransitionEnd:{transform:this.layoutPosition},isCleaning:!0})},h.getTranslate=function(t,e){var i=this.layout._getOption("originLeft"),n=this.layout._getOption("originTop");return t=i?t:-t,e=n?e:-e,"translate3d("+t+"px, "+e+"px, 0)"},h.goTo=function(t,e){this.setPosition(t,e),this.layoutPosition()},h.moveTo=h._transitionTo,h.setPosition=function(t,e){this.position.x=parseFloat(t),this.position.y=parseFloat(e)},h._nonTransition=function(t){this.css(t.to),t.isCleaning&&this._removeStyles(t.to);for(var e in t.onTransitionEnd)t.onTransitionEnd[e].call(this)},h.transition=function(t){if(!parseFloat(this.layout.options.transitionDuration))return void this._nonTransition(t);var e=this._transn;for(var i in t.onTransitionEnd)e.onEnd[i]=t.onTransitionEnd[i];for(i in t.to)e.ingProperties[i]=!0,t.isCleaning&&(e.clean[i]=!0);if(t.from){this.css(t.from);this.element.offsetHeight;null}this.enableTransition(t.to),this.css(t.to),this.isTransitioning=!0};var c="opacity,"+function(t){return t.replace(/([A-Z])/g,function(t){return"-"+t.toLowerCase()})}(r);h.enableTransition=function(){if(!this.isTransitioning){var t=this.layout.options.transitionDuration;t="number"==typeof t?t+"ms":t,this.css({transitionProperty:c,transitionDuration:t,transitionDelay:this.staggerDelay||0}),this.element.addEventListener(a,this,!1)}},h.onwebkitTransitionEnd=function(t){this.ontransitionend(t)},h.onotransitionend=function(t){this.ontransitionend(t)};var u={"-webkit-transform":"transform"};h.ontransitionend=function(t){if(t.target===this.element){var e=this._transn,n=u[t.propertyName]||t.propertyName;if(delete e.ingProperties[n],i(e.ingProperties)&&this.disableTransition(),n in e.clean&&(this.element.style[t.propertyName]="",delete e.clean[n]),n in e.onEnd){e.onEnd[n].call(this),delete e.onEnd[n]}this.emitEvent("transitionEnd",[this])}},h.disableTransition=function(){this.removeTransitionStyles(),this.element.removeEventListener(a,this,!1),this.isTransitioning=!1},h._removeStyles=function(t){var e={};for(var i in t)e[i]="";this.css(e)};var d={transitionProperty:"",transitionDuration:"",transitionDelay:""};return h.removeTransitionStyles=function(){this.css(d)},h.stagger=function(t){t=isNaN(t)?0:t,this.staggerDelay=t+"ms"},h.removeElem=function(){this.element.parentNode.removeChild(this.element),this.css({display:""}),this.emitEvent("remove",[this])},h.remove=function(){return o&&parseFloat(this.layout.options.transitionDuration)?(this.once("transitionEnd",function(){this.removeElem()}),void this.hide()):void this.removeElem()},h.reveal=function(){delete this.isHidden,this.css({display:""});var t=this.layout.options,e={};e[this.getHideRevealTransitionEndProperty("visibleStyle")]=this.onRevealTransitionEnd,this.transition({from:t.hiddenStyle,to:t.visibleStyle,isCleaning:!0,onTransitionEnd:e})},h.onRevealTransitionEnd=function(){this.isHidden||this.emitEvent("reveal")},h.getHideRevealTransitionEndProperty=function(t){var e=this.layout.options[t];if(e.opacity)return"opacity";for(var i in e)return i},h.hide=function(){this.isHidden=!0,this.css({display:""});var t=this.layout.options,e={};e[this.getHideRevealTransitionEndProperty("hiddenStyle")]=this.onHideTransitionEnd,this.transition({from:t.visibleStyle,to:t.hiddenStyle,isCleaning:!0,onTransitionEnd:e})},h.onHideTransitionEnd=function(){this.isHidden&&(this.css({display:"none"}),this.emitEvent("hide"))},h.destroy=function(){this.css({position:"",left:"",right:"",top:"",bottom:"",transition:"",transform:""})},n}),function(t,i){n=[o,l,p,m],v=function(e,n,s,o){return i(t,e,n,s,o)}.apply(e,n)}(window,function(t,e,i,n,s){function o(t,e){var i=n.getQueryElement(t);if(!i)return void(l&&l.error("Bad element for "+this.constructor.namespace+": "+(i||t)));this.element=i,h&&(this.$element=h(this.element)),this.options=n.extend({},this.constructor.defaults),this.option(e);var s=++u;this.element.outlayerGUID=s,d[s]=this,this._create(),this._getOption("initLayout")&&this.layout()}function r(t){function e(){t.apply(this,arguments)}return e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e}function a(t){if("number"==typeof t)return t;var e=t.match(/(^\d*\.?\d*)(\w*)/),i=e&&e[1],n=e&&e[2];return i.length?(i=parseFloat(i))*(p[n]||1):0}var l=t.console,h=t.jQuery,c=function(){},u=0,d={};o.namespace="outlayer",o.Item=s,o.defaults={containerStyle:{position:"relative"},initLayout:!0,originLeft:!0,originTop:!0,resize:!0,resizeContainer:!0,transitionDuration:"0.4s",hiddenStyle:{opacity:0,transform:"scale(0.001)"},visibleStyle:{opacity:1,transform:"scale(1)"}};var f=o.prototype;n.extend(f,e.prototype),f.option=function(t){n.extend(this.options,t)},f._getOption=function(t){var e=this.constructor.compatOptions[t];return e&&void 0!==this.options[e]?this.options[e]:this.options[t]},o.compatOptions={initLayout:"isInitLayout",horizontal:"isHorizontal",layoutInstant:"isLayoutInstant",originLeft:"isOriginLeft",originTop:"isOriginTop",resize:"isResizeBound",resizeContainer:"isResizingContainer"},f._create=function(){this.reloadItems(),this.stamps=[],this.stamp(this.options.stamp),n.extend(this.element.style,this.options.containerStyle),this._getOption("resize")&&this.bindResize()},f.reloadItems=function(){this.items=this._itemize(this.element.children)},f._itemize=function(t){for(var e=this._filterFindItemElements(t),i=this.constructor.Item,n=[],s=0;s<e.length;s++){var o=e[s],r=new i(o,this);n.push(r)}return n},f._filterFindItemElements=function(t){return n.filterFindElements(t,this.options.itemSelector)},f.getItemElements=function(){return this.items.map(function(t){return t.element})},f.layout=function(){this._resetLayout(),this._manageStamps();var t=this._getOption("layoutInstant"),e=void 0!==t?t:!this._isLayoutInited;this.layoutItems(this.items,e),this._isLayoutInited=!0},f._init=f.layout,f._resetLayout=function(){this.getSize()},f.getSize=function(){this.size=i(this.element)},f._getMeasurement=function(t,e){var n,s=this.options[t];s?("string"==typeof s?n=this.element.querySelector(s):s instanceof HTMLElement&&(n=s),this[t]=n?i(n)[e]:s):this[t]=0},f.layoutItems=function(t,e){t=this._getItemsForLayout(t),this._layoutItems(t,e),this._postLayout()},f._getItemsForLayout=function(t){return t.filter(function(t){return!t.isIgnored})},f._layoutItems=function(t,e){if(this._emitCompleteOnItems("layout",t),t&&t.length){var i=[];t.forEach(function(t){var n=this._getItemLayoutPosition(t);n.item=t,n.isInstant=e||t.isLayoutInstant,i.push(n)},this),this._processLayoutQueue(i)}},f._getItemLayoutPosition=function(){return{x:0,y:0}},f._processLayoutQueue=function(t){this.updateStagger(),t.forEach(function(t,e){this._positionItem(t.item,t.x,t.y,t.isInstant,e)},this)},f.updateStagger=function(){var t=this.options.stagger;return null===t||void 0===t?void(this.stagger=0):(this.stagger=a(t),this.stagger)},f._positionItem=function(t,e,i,n,s){n?t.goTo(e,i):(t.stagger(s*this.stagger),t.moveTo(e,i))},f._postLayout=function(){this.resizeContainer()},f.resizeContainer=function(){if(this._getOption("resizeContainer")){var t=this._getContainerSize();t&&(this._setContainerMeasure(t.width,!0),this._setContainerMeasure(t.height,!1))}},f._getContainerSize=c,f._setContainerMeasure=function(t,e){if(void 0!==t){var i=this.size;i.isBorderBox&&(t+=e?i.paddingLeft+i.paddingRight+i.borderLeftWidth+i.borderRightWidth:i.paddingBottom+i.paddingTop+i.borderTopWidth+i.borderBottomWidth),t=Math.max(t,0),this.element.style[e?"width":"height"]=t+"px"}},f._emitCompleteOnItems=function(t,e){function i(){s.dispatchEvent(t+"Complete",null,[e])}function n(){++r==o&&i()}var s=this,o=e.length;if(!e||!o)return void i();var r=0;e.forEach(function(e){e.once(t,n)})},f.dispatchEvent=function(t,e,i){var n=e?[e].concat(i):i;if(this.emitEvent(t,n),h)if(this.$element=this.$element||h(this.element),e){var s=h.Event(e);s.type=t,this.$element.trigger(s,i)}else this.$element.trigger(t,i)},f.ignore=function(t){var e=this.getItem(t);e&&(e.isIgnored=!0)},f.unignore=function(t){var e=this.getItem(t);e&&delete e.isIgnored},f.stamp=function(t){(t=this._find(t))&&(this.stamps=this.stamps.concat(t),t.forEach(this.ignore,this))},f.unstamp=function(t){(t=this._find(t))&&t.forEach(function(t){n.removeFrom(this.stamps,t),this.unignore(t)},this)},f._find=function(t){if(t)return"string"==typeof t&&(t=this.element.querySelectorAll(t)),t=n.makeArray(t)},f._manageStamps=function(){this.stamps&&this.stamps.length&&(this._getBoundingRect(),this.stamps.forEach(this._manageStamp,this))},f._getBoundingRect=function(){var t=this.element.getBoundingClientRect(),e=this.size;this._boundingRect={left:t.left+e.paddingLeft+e.borderLeftWidth,top:t.top+e.paddingTop+e.borderTopWidth,right:t.right-(e.paddingRight+e.borderRightWidth),bottom:t.bottom-(e.paddingBottom+e.borderBottomWidth)}},f._manageStamp=c,f._getElementOffset=function(t){var e=t.getBoundingClientRect(),n=this._boundingRect,s=i(t);return{left:e.left-n.left-s.marginLeft,top:e.top-n.top-s.marginTop,right:n.right-e.right-s.marginRight,bottom:n.bottom-e.bottom-s.marginBottom}},f.handleEvent=n.handleEvent,f.bindResize=function(){t.addEventListener("resize",this),this.isResizeBound=!0},f.unbindResize=function(){t.removeEventListener("resize",this),this.isResizeBound=!1},f.onresize=function(){this.resize()},n.debounceMethod(o,"onresize",100),f.resize=function(){this.isResizeBound&&this.needsResizeLayout()&&this.layout()},f.needsResizeLayout=function(){var t=i(this.element);return this.size&&t&&t.innerWidth!==this.size.innerWidth},f.addItems=function(t){var e=this._itemize(t);return e.length&&(this.items=this.items.concat(e)),e},f.appended=function(t){var e=this.addItems(t);e.length&&(this.layoutItems(e,!0),this.reveal(e))},f.prepended=function(t){var e=this._itemize(t);if(e.length){var i=this.items.slice(0);this.items=e.concat(i),this._resetLayout(),this._manageStamps(),this.layoutItems(e,!0),this.reveal(e),this.layoutItems(i)}},f.reveal=function(t){if(this._emitCompleteOnItems("reveal",t),t&&t.length){var e=this.updateStagger();t.forEach(function(t,i){t.stagger(i*e),t.reveal()})}},f.hide=function(t){if(this._emitCompleteOnItems("hide",t),t&&t.length){var e=this.updateStagger();t.forEach(function(t,i){t.stagger(i*e),t.hide()})}},f.revealItemElements=function(t){var e=this.getItems(t);this.reveal(e)},f.hideItemElements=function(t){var e=this.getItems(t);this.hide(e)},f.getItem=function(t){for(var e=0;e<this.items.length;e++){var i=this.items[e];if(i.element==t)return i}},f.getItems=function(t){t=n.makeArray(t);var e=[];return t.forEach(function(t){var i=this.getItem(t);i&&e.push(i)},this),e},f.remove=function(t){var e=this.getItems(t);this._emitCompleteOnItems("remove",e),e&&e.length&&e.forEach(function(t){t.remove(),n.removeFrom(this.items,t)},this)},f.destroy=function(){var t=this.element.style;t.height="",t.position="",t.width="",this.items.forEach(function(t){t.destroy()}),this.unbindResize();var e=this.element.outlayerGUID;delete d[e],delete this.element.outlayerGUID,h&&h.removeData(this.element,this.constructor.namespace)},o.data=function(t){t=n.getQueryElement(t);var e=t&&t.outlayerGUID;return e&&d[e]},o.create=function(t,e){var i=r(o);return i.defaults=n.extend({},o.defaults),n.extend(i.defaults,e),i.compatOptions=n.extend({},o.compatOptions),i.namespace=t,i.data=o.data,i.Item=r(s),n.htmlInit(i,t),h&&h.bridget&&h.bridget(t,i),i};var p={ms:1,s:1e3};return o.Item=s,o}),function(t,i){n=[v],g=i,_="function"==typeof g?g.apply(e,n):g}(window,function(t){function e(){t.Item.apply(this,arguments)}var i=e.prototype=Object.create(t.Item.prototype),n=i._create;i._create=function(){this.id=this.layout.itemGUID++,n.call(this),this.sortData={}},i.updateSortData=function(){if(!this.isIgnored){this.sortData.id=this.id,this.sortData["original-order"]=this.id,this.sortData.random=Math.random();var t=this.layout.options.getSortData,e=this.layout._sorters;for(var i in t){var n=e[i];this.sortData[i]=n(this.element,this)}}};var s=i.destroy;return i.destroy=function(){s.apply(this,arguments),this.css({display:""})},e}),function(t,i){n=[l,v],g=i,y="function"==typeof g?g.apply(e,n):g}(window,function(t,e){function i(t){this.isotope=t,t&&(this.options=t.options[this.namespace],this.element=t.element,this.items=t.filteredItems,this.size=t.size)}var n=i.prototype;return["_resetLayout","_getItemLayoutPosition","_manageStamp","_getContainerSize","_getElementOffset","needsResizeLayout","_getOption"].forEach(function(t){n[t]=function(){return e.prototype[t].apply(this.isotope,arguments)}}),n.needsVerticalResizeLayout=function(){var e=t(this.isotope.element);return this.isotope.size&&e&&e.innerHeight!=this.isotope.size.innerHeight},n._getMeasurement=function(){this.isotope._getMeasurement.apply(this,arguments)},n.getColumnWidth=function(){this.getSegmentSize("column","Width")},n.getRowHeight=function(){this.getSegmentSize("row","Height")},n.getSegmentSize=function(t,e){var i=t+e,n="outer"+e;if(this._getMeasurement(i,n),!this[i]){var s=this.getFirstItemSize();this[i]=s&&s[n]||this.isotope.size["inner"+e]}},n.getFirstItemSize=function(){var e=this.isotope.filteredItems[0];return e&&e.element&&t(e.element)},n.layout=function(){this.isotope.layout.apply(this.isotope,arguments)},n.getSize=function(){this.isotope.getSize(),this.size=this.isotope.size},i.modes={},i.create=function(t,e){function s(){i.apply(this,arguments)}return s.prototype=Object.create(n),s.prototype.constructor=s,e&&(s.options=e),s.prototype.namespace=t,i.modes[t]=s,s},i}),function(t,i){n=[v,l],g=i,w="function"==typeof g?g.apply(e,n):g}(window,function(t,e){var i=t.create("masonry");i.compatOptions.fitWidth="isFitWidth";var n=i.prototype;return n._resetLayout=function(){this.getSize(),this._getMeasurement("columnWidth","outerWidth"),this._getMeasurement("gutter","outerWidth"),this.measureColumns(),this.colYs=[];for(var t=0;t<this.cols;t++)this.colYs.push(0);this.maxY=0,this.horizontalColIndex=0},n.measureColumns=function(){if(this.getContainerWidth(),!this.columnWidth){var t=this.items[0],i=t&&t.element;this.columnWidth=i&&e(i).outerWidth||this.containerWidth}var n=this.columnWidth+=this.gutter,s=this.containerWidth+this.gutter,o=s/n,r=n-s%n,a=r&&r<1?"round":"floor";o=Math[a](o),this.cols=Math.max(o,1)},n.getContainerWidth=function(){var t=this._getOption("fitWidth"),i=t?this.element.parentNode:this.element,n=e(i);this.containerWidth=n&&n.innerWidth},n._getItemLayoutPosition=function(t){t.getSize();var e=t.size.outerWidth%this.columnWidth,i=e&&e<1?"round":"ceil",n=Math[i](t.size.outerWidth/this.columnWidth);n=Math.min(n,this.cols);for(var s=this.options.horizontalOrder?"_getHorizontalColPosition":"_getTopColPosition",o=this[s](n,t),r={x:this.columnWidth*o.col,y:o.y},a=o.y+t.size.outerHeight,l=n+o.col,h=o.col;h<l;h++)this.colYs[h]=a;return r},n._getTopColPosition=function(t){var e=this._getTopColGroup(t),i=Math.min.apply(Math,e);return{col:e.indexOf(i),y:i}},n._getTopColGroup=function(t){if(t<2)return this.colYs;for(var e=[],i=this.cols+1-t,n=0;n<i;n++)e[n]=this._getColGroupY(n,t);return e},n._getColGroupY=function(t,e){if(e<2)return this.colYs[t];var i=this.colYs.slice(t,t+e);return Math.max.apply(Math,i)},n._getHorizontalColPosition=function(t,e){var i=this.horizontalColIndex%this.cols;i=t>1&&i+t>this.cols?0:i;var n=e.size.outerWidth&&e.size.outerHeight;return this.horizontalColIndex=n?i+t:this.horizontalColIndex,{col:i,y:this._getColGroupY(i,t)}},n._manageStamp=function(t){var i=e(t),n=this._getElementOffset(t),s=this._getOption("originLeft"),o=s?n.left:n.right,r=o+i.outerWidth,a=Math.floor(o/this.columnWidth);a=Math.max(0,a);var l=Math.floor(r/this.columnWidth);l-=r%this.columnWidth?0:1,l=Math.min(this.cols-1,l);for(var h=this._getOption("originTop"),c=(h?n.top:n.bottom)+i.outerHeight,u=a;u<=l;u++)this.colYs[u]=Math.max(c,this.colYs[u])},n._getContainerSize=function(){this.maxY=Math.max.apply(Math,this.colYs);var t={height:this.maxY};return this._getOption("fitWidth")&&(t.width=this._getContainerFitWidth()),t},n._getContainerFitWidth=function(){for(var t=0,e=this.cols;--e&&0===this.colYs[e];)t++;return(this.cols-t)*this.columnWidth-this.gutter},n.needsResizeLayout=function(){var t=this.containerWidth;return this.getContainerWidth(),t!=this.containerWidth},i}),function(t,i){n=[y,w],g=i,b="function"==typeof g?g.apply(e,n):g}(window,function(t,e){var i=t.create("masonry"),n=i.prototype,s={_getElementOffset:!0,layout:!0,_getMeasurement:!0};for(var o in e.prototype)s[o]||(n[o]=e.prototype[o]);var r=n.measureColumns;n.measureColumns=function(){this.items=this.isotope.filteredItems,r.call(this)};var a=n._getOption;return n._getOption=function(t){return"fitWidth"==t?void 0!==this.options.isFitWidth?this.options.isFitWidth:this.options.fitWidth:a.apply(this.isotope,arguments)},i}),function(t,i){n=[y],g=i,E="function"==typeof g?g.apply(e,n):g}(window,function(t){var e=t.create("fitRows"),i=e.prototype;return i._resetLayout=function(){this.x=0,this.y=0,this.maxY=0,this._getMeasurement("gutter","outerWidth")},i._getItemLayoutPosition=function(t){t.getSize();var e=t.size.outerWidth+this.gutter,i=this.isotope.size.innerWidth+this.gutter;0!==this.x&&e+this.x>i&&(this.x=0,this.y=this.maxY);var n={x:this.x,y:this.y};return this.maxY=Math.max(this.maxY,this.y+t.size.outerHeight),this.x+=e,n},i._getContainerSize=function(){return{height:this.maxY}},e}),function(t,i){n=[y],g=i,x="function"==typeof g?g.apply(e,n):g}(window,function(t){var e=t.create("vertical",{horizontalAlignment:0}),i=e.prototype;return i._resetLayout=function(){this.y=0},i._getItemLayoutPosition=function(t){t.getSize();var e=(this.isotope.size.innerWidth-t.size.outerWidth)*this.options.horizontalAlignment,i=this.y;return this.y+=t.size.outerHeight,{x:e,y:i}},i._getContainerSize=function(){return{height:this.y}},e}),function(i,o){n=[v,l,u,p,_,y,b,E,x],void 0!==(s=function(t,e,n,s,r,a){return o(i,t,e,n,s,r,a)}.apply(e,n))&&(t.exports=s)}(window,function(t,e,i,n,s,o,r){function a(t,e){return function(i,n){for(var s=0;s<t.length;s++){var o=t[s],r=i.sortData[o],a=n.sortData[o];if(r>a||r<a){var l=void 0!==e[o]?e[o]:e,h=l?1:-1;return(r>a?1:-1)*h}}return 0}}var l=t.jQuery,h=String.prototype.trim?function(t){return t.trim()}:function(t){return t.replace(/^\s+|\s+$/g,"")},c=e.create("isotope",{layoutMode:"masonry",isJQueryFiltering:!0,sortAscending:!0});c.Item=o,c.LayoutMode=r;var u=c.prototype;u._create=function(){this.itemGUID=0,this._sorters={},this._getSorters(),e.prototype._create.call(this),this.modes={},this.filteredItems=this.items,this.sortHistory=["original-order"];for(var t in r.modes)this._initLayoutMode(t)},u.reloadItems=function(){this.itemGUID=0,e.prototype.reloadItems.call(this)},u._itemize=function(){for(var t=e.prototype._itemize.apply(this,arguments),i=0;i<t.length;i++){t[i].id=this.itemGUID++}return this._updateItemsSortData(t),t},u._initLayoutMode=function(t){var e=r.modes[t],i=this.options[t]||{};this.options[t]=e.options?s.extend(e.options,i):i,this.modes[t]=new e(this)},u.layout=function(){return!this._isLayoutInited&&this._getOption("initLayout")?void this.arrange():void this._layout()},u._layout=function(){var t=this._getIsInstant();this._resetLayout(),this._manageStamps(),this.layoutItems(this.filteredItems,t),this._isLayoutInited=!0},u.arrange=function(t){this.option(t),this._getIsInstant();var e=this._filter(this.items);this.filteredItems=e.matches,this._bindArrangeComplete(),this._isInstant?this._noTransition(this._hideReveal,[e]):this._hideReveal(e),this._sort(),this._layout()},u._init=u.arrange,u._hideReveal=function(t){this.reveal(t.needReveal),this.hide(t.needHide)},u._getIsInstant=function(){var t=this._getOption("layoutInstant"),e=void 0!==t?t:!this._isLayoutInited;return this._isInstant=e,e},u._bindArrangeComplete=function(){function t(){e&&i&&n&&s.dispatchEvent("arrangeComplete",null,[s.filteredItems])}var e,i,n,s=this;this.once("layoutComplete",function(){e=!0,t()}),this.once("hideComplete",function(){i=!0,t()}),this.once("revealComplete",function(){n=!0,t()})},u._filter=function(t){var e=this.options.filter;e=e||"*";for(var i=[],n=[],s=[],o=this._getFilterTest(e),r=0;r<t.length;r++){var a=t[r];if(!a.isIgnored){var l=o(a);l&&i.push(a),l&&a.isHidden?n.push(a):l||a.isHidden||s.push(a)}}return{matches:i,needReveal:n,needHide:s}},u._getFilterTest=function(t){return l&&this.options.isJQueryFiltering?function(e){return l(e.element).is(t)}:"function"==typeof t?function(e){return t(e.element)}:function(e){return n(e.element,t)}},u.updateSortData=function(t){var e;t?(t=s.makeArray(t),e=this.getItems(t)):e=this.items,this._getSorters(),this._updateItemsSortData(e)},u._getSorters=function(){var t=this.options.getSortData;for(var e in t){var i=t[e];this._sorters[e]=d(i)}},u._updateItemsSortData=function(t){for(var e=t&&t.length,i=0;e&&i<e;i++){t[i].updateSortData()}};var d=function(){function t(t){if("string"!=typeof t)return t;var i=h(t).split(" "),n=i[0],s=n.match(/^\[(.+)\]$/),o=s&&s[1],r=e(o,n),a=c.sortDataParsers[i[1]];return t=a?function(t){return t&&a(r(t))}:function(t){return t&&r(t)}}function e(t,e){return t?function(e){return e.getAttribute(t)}:function(t){var i=t.querySelector(e);return i&&i.textContent}}return t}();c.sortDataParsers={parseInt:function(t){function e(e){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}(function(t){return parseInt(t,10)}),parseFloat:function(t){function e(e){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}(function(t){return parseFloat(t)})},u._sort=function(){if(this.options.sortBy){var t=s.makeArray(this.options.sortBy);this._getIsSameSortBy(t)||(this.sortHistory=t.concat(this.sortHistory));var e=a(this.sortHistory,this.options.sortAscending);this.filteredItems.sort(e)}},u._getIsSameSortBy=function(t){for(var e=0;e<t.length;e++)if(t[e]!=this.sortHistory[e])return!1;return!0},u._mode=function(){var t=this.options.layoutMode,e=this.modes[t];if(!e)throw new Error("No layout mode: "+t);return e.options=this.options[t],e},u._resetLayout=function(){e.prototype._resetLayout.call(this),this._mode()._resetLayout()},u._getItemLayoutPosition=function(t){return this._mode()._getItemLayoutPosition(t)},u._manageStamp=function(t){this._mode()._manageStamp(t)},u._getContainerSize=function(){return this._mode()._getContainerSize()},u.needsResizeLayout=function(){return this._mode().needsResizeLayout()},u.appended=function(t){var e=this.addItems(t);if(e.length){var i=this._filterRevealAdded(e);this.filteredItems=this.filteredItems.concat(i)}},u.prepended=function(t){var e=this._itemize(t);if(e.length){this._resetLayout(),this._manageStamps();var i=this._filterRevealAdded(e);this.layoutItems(this.filteredItems),this.filteredItems=i.concat(this.filteredItems),this.items=e.concat(this.items)}},u._filterRevealAdded=function(t){var e=this._filter(t);return this.hide(e.needHide),this.reveal(e.matches),this.layoutItems(e.matches,!0),e.matches},u.insert=function(t){var e=this.addItems(t);if(e.length){var i,n,s=e.length;for(i=0;i<s;i++)n=e[i],this.element.appendChild(n.element);var o=this._filter(e).matches;for(i=0;i<s;i++)e[i].isLayoutInstant=!0;for(this.arrange(),i=0;i<s;i++)delete e[i].isLayoutInstant;this.reveal(o)}};var f=u.remove;return u.remove=function(t){t=s.makeArray(t);var e=this.getItems(t);f.call(this,t);for(var i=e&&e.length,n=0;i&&n<i;n++){var o=e[n];s.removeFrom(this.filteredItems,o)}},u.shuffle=function(){for(var t=0;t<this.items.length;t++){this.items[t].sortData.random=Math.random()}this.options.sortBy="random",this._sort(),this._layout()},u._noTransition=function(t,e){var i=this.options.transitionDuration;this.options.transitionDuration=0;var n=t.apply(this,e);return this.options.transitionDuration=i,n},u.getFilteredItemElements=function(){return this.filteredItems.map(function(t){return t.element})},c})},/* 7 */
/***/
function(t,e,i){"use strict";var n,s,o;/*! jQuery UI - v1.12.1 - 2018-01-21
* http://jqueryui.com
* Includes: widget.js, keycode.js, widgets/mouse.js, widgets/slider.js
* Copyright jQuery Foundation and other contributors; Licensed MIT */
!function(r){
// AMD. Register as an anonymous module.
s=[i(0)],n=r,void 0!==(o="function"==typeof n?n.apply(e,s):n)&&(t.exports=o)}(function(t){t.ui=t.ui||{};var e=(t.ui.version="1.12.1",0),i=Array.prototype.slice;t.cleanData=function(e){return function(i){var n,s,o;for(o=0;null!=(s=i[o]);o++)try{
// Only trigger remove when necessary to save time
n=t._data(s,"events"),n&&n.remove&&t(s).triggerHandler("remove")}catch(t){}e(i)}}(t.cleanData),t.widget=function(e,i,n){var s,o,r,a={},l=e.split(".")[0];e=e.split(".")[1];var h=l+"-"+e;
// Create selector for plugin
// Extend with the existing constructor to carry over any static properties
// We need to make the options hash a property directly on the new instance
// otherwise we'll modify the options hash on the prototype that we're
// inheriting from
// If this widget is being redefined then we need to find all widgets that
// are inheriting from it and redefine all of them so that they inherit from
// the new version of this widget. We're essentially trying to replace one
// level in the prototype chain.
// Remove the list of existing child constructors from the old constructor
// so the old child constructors can be garbage collected
return n||(n=i,i=t.Widget),t.isArray(n)&&(n=t.extend.apply(null,[{}].concat(n))),t.expr[":"][h.toLowerCase()]=function(e){return!!t.data(e,h)},t[l]=t[l]||{},s=t[l][e],o=t[l][e]=function(t,e){
// Allow instantiation without "new" keyword
if(!this._createWidget)return new o(t,e);
// Allow instantiation without initializing for simple inheritance
// must use "new" keyword (the code above always passes args)
arguments.length&&this._createWidget(t,e)},t.extend(o,s,{version:n.version,
// Copy the object used to create the prototype in case we need to
// redefine the widget later
_proto:t.extend({},n),
// Track widgets that inherit from this widget in case this widget is
// redefined after a widget inherits from it
_childConstructors:[]}),r=new i,r.options=t.widget.extend({},r.options),t.each(n,function(e,n){if(!t.isFunction(n))return void(a[e]=n);a[e]=function(){function t(){return i.prototype[e].apply(this,arguments)}function s(t){return i.prototype[e].apply(this,t)}return function(){var e,i=this._super,o=this._superApply;return this._super=t,this._superApply=s,e=n.apply(this,arguments),this._super=i,this._superApply=o,e}}()}),o.prototype=t.widget.extend(r,{
// TODO: remove support for widgetEventPrefix
// always use the name + a colon as the prefix, e.g., draggable:start
// don't prefix for widgets that aren't DOM-based
widgetEventPrefix:s?r.widgetEventPrefix||e:e},a,{constructor:o,namespace:l,widgetName:e,widgetFullName:h}),s?(t.each(s._childConstructors,function(e,i){var n=i.prototype;
// Redefine the child widget using the same prototype that was
// originally used, but inherit from the new version of the base
t.widget(n.namespace+"."+n.widgetName,o,i._proto)}),delete s._childConstructors):i._childConstructors.push(o),t.widget.bridge(e,o),o},t.widget.extend=function(e){for(var n,s,o=i.call(arguments,1),r=0,a=o.length;r<a;r++)for(n in o[r])s=o[r][n],o[r].hasOwnProperty(n)&&void 0!==s&&(
// Clone objects
t.isPlainObject(s)?e[n]=t.isPlainObject(e[n])?t.widget.extend({},e[n],s):
// Don't extend strings, arrays, etc. with objects
t.widget.extend({},s):e[n]=s);return e},t.widget.bridge=function(e,n){var s=n.prototype.widgetFullName||e;t.fn[e]=function(o){var r="string"==typeof o,a=i.call(arguments,1),l=this;
// If this is an empty collection, we need to have the instance method
// return undefined instead of the jQuery instance
// Allow multiple hashes to be passed on init
return r?this.length||"instance"!==o?this.each(function(){var i,n=t.data(this,s);return"instance"===o?(l=n,!1):n?t.isFunction(n[o])&&"_"!==o.charAt(0)?(i=n[o].apply(n,a),i!==n&&void 0!==i?(l=i&&i.jquery?l.pushStack(i.get()):i,!1):void 0):t.error("no such method '"+o+"' for "+e+" widget instance"):t.error("cannot call methods on "+e+" prior to initialization; attempted to call method '"+o+"'")}):l=void 0:(a.length&&(o=t.widget.extend.apply(null,[o].concat(a))),this.each(function(){var e=t.data(this,s);e?(e.option(o||{}),e._init&&e._init()):t.data(this,s,new n(o,this))})),l}},t.Widget=function(){},t.Widget._childConstructors=[],t.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{classes:{},disabled:!1,
// Callbacks
create:null},_createWidget:function(i,n){n=t(n||this.defaultElement||this)[0],this.element=t(n),this.uuid=e++,this.eventNamespace="."+this.widgetName+this.uuid,this.bindings=t(),this.hoverable=t(),this.focusable=t(),this.classesElementLookup={},n!==this&&(t.data(n,this.widgetFullName,this),this._on(!0,this.element,{remove:function(t){t.target===n&&this.destroy()}}),this.document=t(n.style?
// Element within the document
n.ownerDocument:
// Element is window or document
n.document||n),this.window=t(this.document[0].defaultView||this.document[0].parentWindow)),this.options=t.widget.extend({},this.options,this._getCreateOptions(),i),this._create(),this.options.disabled&&this._setOptionDisabled(this.options.disabled),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:function(){return{}},_getCreateEventData:t.noop,_create:t.noop,_init:t.noop,destroy:function(){var e=this;this._destroy(),t.each(this.classesElementLookup,function(t,i){e._removeClass(i,t)}),
// We can probably remove the unbind calls in 2.0
// all event bindings should go through this._on()
this.element.off(this.eventNamespace).removeData(this.widgetFullName),this.widget().off(this.eventNamespace).removeAttr("aria-disabled"),
// Clean up events and states
this.bindings.off(this.eventNamespace)},_destroy:t.noop,widget:function(){return this.element},option:function(e,i){var n,s,o,r=e;if(0===arguments.length)
// Don't return a reference to the internal hash
return t.widget.extend({},this.options);if("string"==typeof e)if(
// Handle nested keys, e.g., "foo.bar" => { foo: { bar: ___ } }
r={},n=e.split("."),e=n.shift(),n.length){for(s=r[e]=t.widget.extend({},this.options[e]),o=0;o<n.length-1;o++)s[n[o]]=s[n[o]]||{},s=s[n[o]];if(e=n.pop(),1===arguments.length)return void 0===s[e]?null:s[e];s[e]=i}else{if(1===arguments.length)return void 0===this.options[e]?null:this.options[e];r[e]=i}return this._setOptions(r),this},_setOptions:function(t){var e;for(e in t)this._setOption(e,t[e]);return this},_setOption:function(t,e){return"classes"===t&&this._setOptionClasses(e),this.options[t]=e,"disabled"===t&&this._setOptionDisabled(e),this},_setOptionClasses:function(e){var i,n,s;for(i in e)s=this.classesElementLookup[i],e[i]!==this.options.classes[i]&&s&&s.length&&(
// We are doing this to create a new jQuery object because the _removeClass() call
// on the next line is going to destroy the reference to the current elements being
// tracked. We need to save a copy of this collection so that we can add the new classes
// below.
n=t(s.get()),this._removeClass(s,i),
// We don't use _addClass() here, because that uses this.options.classes
// for generating the string of classes. We want to use the value passed in from
// _setOption(), this is the new value of the classes option which was passed to
// _setOption(). We pass this value directly to _classes().
n.addClass(this._classes({element:n,keys:i,classes:e,add:!0})))},_setOptionDisabled:function(t){this._toggleClass(this.widget(),this.widgetFullName+"-disabled",null,!!t),
// If the widget is becoming disabled, then nothing is interactive
t&&(this._removeClass(this.hoverable,null,"ui-state-hover"),this._removeClass(this.focusable,null,"ui-state-focus"))},enable:function(){return this._setOptions({disabled:!1})},disable:function(){return this._setOptions({disabled:!0})},_classes:function(e){function i(i,o){var r,a;for(a=0;a<i.length;a++)r=s.classesElementLookup[i[a]]||t(),r=t(e.add?t.unique(r.get().concat(e.element.get())):r.not(e.element).get()),s.classesElementLookup[i[a]]=r,n.push(i[a]),o&&e.classes[i[a]]&&n.push(e.classes[i[a]])}var n=[],s=this;return e=t.extend({element:this.element,classes:this.options.classes||{}},e),this._on(e.element,{remove:"_untrackClassesElement"}),e.keys&&i(e.keys.match(/\S+/g)||[],!0),e.extra&&i(e.extra.match(/\S+/g)||[]),n.join(" ")},_untrackClassesElement:function(e){var i=this;t.each(i.classesElementLookup,function(n,s){-1!==t.inArray(e.target,s)&&(i.classesElementLookup[n]=t(s.not(e.target).get()))})},_removeClass:function(t,e,i){return this._toggleClass(t,e,i,!1)},_addClass:function(t,e,i){return this._toggleClass(t,e,i,!0)},_toggleClass:function(t,e,i,n){n="boolean"==typeof n?n:i;var s="string"==typeof t||null===t,o={extra:s?e:i,keys:s?t:e,element:s?this.element:t,add:n};return o.element.toggleClass(this._classes(o),n),this},_on:function(e,i,n){var s,o=this;
// No suppressDisabledCheck flag, shuffle arguments
"boolean"!=typeof e&&(n=i,i=e,e=!1),
// No element argument, shuffle and use this.element
n?(i=s=t(i),this.bindings=this.bindings.add(i)):(n=i,i=this.element,s=this.widget()),t.each(n,function(n,r){function a(){
// Allow widgets to customize the disabled handling
// - disabled as an array instead of boolean
// - disabled class as method for disabling individual parts
if(e||!0!==o.options.disabled&&!t(this).hasClass("ui-state-disabled"))return("string"==typeof r?o[r]:r).apply(o,arguments)}
// Copy the guid so direct unbinding works
"string"!=typeof r&&(a.guid=r.guid=r.guid||a.guid||t.guid++);var l=n.match(/^([\w:-]*)\s*(.*)$/),h=l[1]+o.eventNamespace,c=l[2];c?s.on(h,c,a):i.on(h,a)})},_off:function(e,i){i=(i||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,e.off(i).off(i),
// Clear the stack to avoid memory leaks (#10056)
this.bindings=t(this.bindings.not(e).get()),this.focusable=t(this.focusable.not(e).get()),this.hoverable=t(this.hoverable.not(e).get())},_delay:function(t,e){function i(){return("string"==typeof t?n[t]:t).apply(n,arguments)}var n=this;return setTimeout(i,e||0)},_hoverable:function(e){this.hoverable=this.hoverable.add(e),this._on(e,{mouseenter:function(e){this._addClass(t(e.currentTarget),null,"ui-state-hover")},mouseleave:function(e){this._removeClass(t(e.currentTarget),null,"ui-state-hover")}})},_focusable:function(e){this.focusable=this.focusable.add(e),this._on(e,{focusin:function(e){this._addClass(t(e.currentTarget),null,"ui-state-focus")},focusout:function(e){this._removeClass(t(e.currentTarget),null,"ui-state-focus")}})},_trigger:function(e,i,n){var s,o,r=this.options[e];if(n=n||{},i=t.Event(i),i.type=(e===this.widgetEventPrefix?e:this.widgetEventPrefix+e).toLowerCase(),
// The original event may come from any element
// so we need to reset the target on the new event
i.target=this.element[0],
// Copy original event properties over to the new event
o=i.originalEvent)for(s in o)s in i||(i[s]=o[s]);return this.element.trigger(i,n),!(t.isFunction(r)&&!1===r.apply(this.element[0],[i].concat(n))||i.isDefaultPrevented())}},t.each({show:"fadeIn",hide:"fadeOut"},function(e,i){t.Widget.prototype["_"+e]=function(n,s,o){"string"==typeof s&&(s={effect:s});var r,a=s?!0===s||"number"==typeof s?i:s.effect||i:e;s=s||{},"number"==typeof s&&(s={duration:s}),r=!t.isEmptyObject(s),s.complete=o,s.delay&&n.delay(s.delay),r&&t.effects&&t.effects.effect[a]?n[e](s):a!==e&&n[a]?n[a](s.duration,s.easing,o):n.queue(function(i){t(this)[e](),o&&o.call(n[0]),i()})}});var n=(t.widget,t.ui.keyCode={BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38},t.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),!1);t(document).on("mouseup",function(){n=!1});t.widget("ui.mouse",{version:"1.12.1",options:{cancel:"input, textarea, button, select, option",distance:1,delay:0},_mouseInit:function(){var e=this;this.element.on("mousedown."+this.widgetName,function(t){return e._mouseDown(t)}).on("click."+this.widgetName,function(i){if(!0===t.data(i.target,e.widgetName+".preventClickEvent"))return t.removeData(i.target,e.widgetName+".preventClickEvent"),i.stopImmediatePropagation(),!1}),this.started=!1},
// TODO: make sure destroying one instance of mouse doesn't mess with
// other instances of mouse
_mouseDestroy:function(){this.element.off("."+this.widgetName),this._mouseMoveDelegate&&this.document.off("mousemove."+this.widgetName,this._mouseMoveDelegate).off("mouseup."+this.widgetName,this._mouseUpDelegate)},_mouseDown:function(e){
// don't let more than one widget handle mouseStart
if(!n){this._mouseMoved=!1,
// We may have missed mouseup (out of window)
this._mouseStarted&&this._mouseUp(e),this._mouseDownEvent=e;var i=this,s=1===e.which,
// event.target.nodeName works around a bug in IE 8 with
// disabled inputs (#7620)
o=!("string"!=typeof this.options.cancel||!e.target.nodeName)&&t(e.target).closest(this.options.cancel).length;
// Click event may never have fired (Gecko & Opera)
// These delegates are required to keep context
return!(s&&!o&&this._mouseCapture(e))||(this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){i.mouseDelayMet=!0},this.options.delay)),this._mouseDistanceMet(e)&&this._mouseDelayMet(e)&&(this._mouseStarted=!1!==this._mouseStart(e),!this._mouseStarted)?(e.preventDefault(),!0):(!0===t.data(e.target,this.widgetName+".preventClickEvent")&&t.removeData(e.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(t){return i._mouseMove(t)},this._mouseUpDelegate=function(t){return i._mouseUp(t)},this.document.on("mousemove."+this.widgetName,this._mouseMoveDelegate).on("mouseup."+this.widgetName,this._mouseUpDelegate),e.preventDefault(),n=!0,!0))}},_mouseMove:function(e){
// Only check for mouseups outside the document if you've moved inside the document
// at least once. This prevents the firing of mouseup in the case of IE<9, which will
// fire a mousemove event if content is placed under the cursor. See #7778
// Support: IE <9
if(this._mouseMoved){
// IE mouseup check - mouseup happened when mouse was out of window
if(t.ui.ie&&(!document.documentMode||document.documentMode<9)&&!e.button)return this._mouseUp(e);if(!e.which)
// Support: Safari <=8 - 9
// Safari sets which to 0 if you press any of the following keys
// during a drag (#14461)
if(e.originalEvent.altKey||e.originalEvent.ctrlKey||e.originalEvent.metaKey||e.originalEvent.shiftKey)this.ignoreMissingWhich=!0;else if(!this.ignoreMissingWhich)return this._mouseUp(e)}return(e.which||e.button)&&(this._mouseMoved=!0),this._mouseStarted?(this._mouseDrag(e),e.preventDefault()):(this._mouseDistanceMet(e)&&this._mouseDelayMet(e)&&(this._mouseStarted=!1!==this._mouseStart(this._mouseDownEvent,e),this._mouseStarted?this._mouseDrag(e):this._mouseUp(e)),!this._mouseStarted)},_mouseUp:function(e){this.document.off("mousemove."+this.widgetName,this._mouseMoveDelegate).off("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,e.target===this._mouseDownEvent.target&&t.data(e.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(e)),this._mouseDelayTimer&&(clearTimeout(this._mouseDelayTimer),delete this._mouseDelayTimer),this.ignoreMissingWhich=!1,n=!1,e.preventDefault()},_mouseDistanceMet:function(t){return Math.max(Math.abs(this._mouseDownEvent.pageX-t.pageX),Math.abs(this._mouseDownEvent.pageY-t.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},
// These are placeholder methods, to be overriden by extending plugin
_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return!0}}),t.widget("ui.slider",t.ui.mouse,{version:"1.12.1",widgetEventPrefix:"slide",options:{animate:!1,classes:{"ui-slider":"ui-corner-all","ui-slider-handle":"ui-corner-all",
// Note: ui-widget-header isn't the most fittingly semantic framework class for this
// element, but worked best visually with a variety of themes
"ui-slider-range":"ui-corner-all ui-widget-header"},distance:0,max:100,min:0,orientation:"horizontal",range:!1,step:1,value:0,values:null,
// Callbacks
change:null,slide:null,start:null,stop:null},
// Number of pages in a slider
// (how many times can you page up/down to go through the whole range)
numPages:5,_create:function(){this._keySliding=!1,this._mouseSliding=!1,this._animateOff=!0,this._handleIndex=null,this._detectOrientation(),this._mouseInit(),this._calculateNewMax(),this._addClass("ui-slider ui-slider-"+this.orientation,"ui-widget ui-widget-content"),this._refresh(),this._animateOff=!1},_refresh:function(){this._createRange(),this._createHandles(),this._setupEvents(),this._refreshValue()},_createHandles:function(){var e,i,n=this.options,s=this.element.find(".ui-slider-handle"),o=[];for(i=n.values&&n.values.length||1,s.length>i&&(s.slice(i).remove(),s=s.slice(0,i)),e=s.length;e<i;e++)o.push("<span tabindex='0'></span>");this.handles=s.add(t(o.join("")).appendTo(this.element)),this._addClass(this.handles,"ui-slider-handle","ui-state-default"),this.handle=this.handles.eq(0),this.handles.each(function(e){t(this).data("ui-slider-handle-index",e).attr("tabIndex",0)})},_createRange:function(){var e=this.options;e.range?(!0===e.range&&(e.values?e.values.length&&2!==e.values.length?e.values=[e.values[0],e.values[0]]:t.isArray(e.values)&&(e.values=e.values.slice(0)):e.values=[this._valueMin(),this._valueMin()]),this.range&&this.range.length?(this._removeClass(this.range,"ui-slider-range-min ui-slider-range-max"),
// Handle range switching from true to min/max
this.range.css({left:"",bottom:""})):(this.range=t("<div>").appendTo(this.element),this._addClass(this.range,"ui-slider-range")),"min"!==e.range&&"max"!==e.range||this._addClass(this.range,"ui-slider-range-"+e.range)):(this.range&&this.range.remove(),this.range=null)},_setupEvents:function(){this._off(this.handles),this._on(this.handles,this._handleEvents),this._hoverable(this.handles),this._focusable(this.handles)},_destroy:function(){this.handles.remove(),this.range&&this.range.remove(),this._mouseDestroy()},_mouseCapture:function(e){var i,n,s,o,r,a,l,h=this,c=this.options;return!c.disabled&&(this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()},this.elementOffset=this.element.offset(),i={x:e.pageX,y:e.pageY},n=this._normValueFromMouse(i),s=this._valueMax()-this._valueMin()+1,this.handles.each(function(e){var i=Math.abs(n-h.values(e));(s>i||s===i&&(e===h._lastChangedValue||h.values(e)===c.min))&&(s=i,o=t(this),r=e)}),!1!==this._start(e,r)&&(this._mouseSliding=!0,this._handleIndex=r,this._addClass(o,null,"ui-state-active"),o.trigger("focus"),a=o.offset(),l=!t(e.target).parents().addBack().is(".ui-slider-handle"),this._clickOffset=l?{left:0,top:0}:{left:e.pageX-a.left-o.width()/2,top:e.pageY-a.top-o.height()/2-(parseInt(o.css("borderTopWidth"),10)||0)-(parseInt(o.css("borderBottomWidth"),10)||0)+(parseInt(o.css("marginTop"),10)||0)},this.handles.hasClass("ui-state-hover")||this._slide(e,r,n),this._animateOff=!0,!0))},_mouseStart:function(){return!0},_mouseDrag:function(t){var e={x:t.pageX,y:t.pageY},i=this._normValueFromMouse(e);return this._slide(t,this._handleIndex,i),!1},_mouseStop:function(t){return this._removeClass(this.handles,null,"ui-state-active"),this._mouseSliding=!1,this._stop(t,this._handleIndex),this._change(t,this._handleIndex),this._handleIndex=null,this._clickOffset=null,this._animateOff=!1,!1},_detectOrientation:function(){this.orientation="vertical"===this.options.orientation?"vertical":"horizontal"},_normValueFromMouse:function(t){var e,i,n,s,o;return"horizontal"===this.orientation?(e=this.elementSize.width,i=t.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)):(e=this.elementSize.height,i=t.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)),n=i/e,n>1&&(n=1),n<0&&(n=0),"vertical"===this.orientation&&(n=1-n),s=this._valueMax()-this._valueMin(),o=this._valueMin()+n*s,this._trimAlignValue(o)},_uiHash:function(t,e,i){var n={handle:this.handles[t],handleIndex:t,value:void 0!==e?e:this.value()};return this._hasMultipleValues()&&(n.value=void 0!==e?e:this.values(t),n.values=i||this.values()),n},_hasMultipleValues:function(){return this.options.values&&this.options.values.length},_start:function(t,e){return this._trigger("start",t,this._uiHash(e))},_slide:function(t,e,i){var n,s=this.value(),o=this.values();this._hasMultipleValues()&&(n=this.values(e?0:1),s=this.values(e),2===this.options.values.length&&!0===this.options.range&&(i=0===e?Math.min(n,i):Math.max(n,i)),o[e]=i),i!==s&&!1!==this._trigger("slide",t,this._uiHash(e,i,o))&&(this._hasMultipleValues()?this.values(e,i):this.value(i))},_stop:function(t,e){this._trigger("stop",t,this._uiHash(e))},_change:function(t,e){this._keySliding||this._mouseSliding||(
//store the last changed value index for reference when handles overlap
this._lastChangedValue=e,this._trigger("change",t,this._uiHash(e)))},value:function(t){return arguments.length?(this.options.value=this._trimAlignValue(t),this._refreshValue(),void this._change(null,0)):this._value()},values:function(e,i){var n,s,o;if(arguments.length>1)return this.options.values[e]=this._trimAlignValue(i),this._refreshValue(),void this._change(null,e);if(!arguments.length)return this._values();if(!t.isArray(arguments[0]))return this._hasMultipleValues()?this._values(e):this.value();for(n=this.options.values,s=arguments[0],o=0;o<n.length;o+=1)n[o]=this._trimAlignValue(s[o]),this._change(null,o);this._refreshValue()},_setOption:function(e,i){var n,s=0;switch("range"===e&&!0===this.options.range&&("min"===i?(this.options.value=this._values(0),this.options.values=null):"max"===i&&(this.options.value=this._values(this.options.values.length-1),this.options.values=null)),t.isArray(this.options.values)&&(s=this.options.values.length),this._super(e,i),e){case"orientation":this._detectOrientation(),this._removeClass("ui-slider-horizontal ui-slider-vertical")._addClass("ui-slider-"+this.orientation),this._refreshValue(),this.options.range&&this._refreshRange(i),
// Reset positioning from previous orientation
this.handles.css("horizontal"===i?"bottom":"left","");break;case"value":this._animateOff=!0,this._refreshValue(),this._change(null,0),this._animateOff=!1;break;case"values":
// Start from the last handle to prevent unreachable handles (#9046)
for(this._animateOff=!0,this._refreshValue(),n=s-1;n>=0;n--)this._change(null,n);this._animateOff=!1;break;case"step":case"min":case"max":this._animateOff=!0,this._calculateNewMax(),this._refreshValue(),this._animateOff=!1;break;case"range":this._animateOff=!0,this._refresh(),this._animateOff=!1}},_setOptionDisabled:function(t){this._super(t),this._toggleClass(null,"ui-state-disabled",!!t)},
//internal value getter
// _value() returns value trimmed by min and max, aligned by step
_value:function(){var t=this.options.value;return t=this._trimAlignValue(t)},
//internal values getter
// _values() returns array of values trimmed by min and max, aligned by step
// _values( index ) returns single value trimmed by min and max, aligned by step
_values:function(t){var e,i,n;if(arguments.length)return e=this.options.values[t],e=this._trimAlignValue(e);if(this._hasMultipleValues()){for(
// .slice() creates a copy of the array
// this copy gets trimmed by min and max and then returned
i=this.options.values.slice(),n=0;n<i.length;n+=1)i[n]=this._trimAlignValue(i[n]);return i}return[]},
// Returns the step-aligned value that val is closest to, between (inclusive) min and max
_trimAlignValue:function(t){if(t<=this._valueMin())return this._valueMin();if(t>=this._valueMax())return this._valueMax();var e=this.options.step>0?this.options.step:1,i=(t-this._valueMin())%e,n=t-i;
// Since JavaScript has problems with large floats, round
// the final value to 5 digits after the decimal point (see #4124)
return 2*Math.abs(i)>=e&&(n+=i>0?e:-e),parseFloat(n.toFixed(5))},_calculateNewMax:function(){var t=this.options.max,e=this._valueMin(),i=this.options.step;t=Math.round((t-e)/i)*i+e,t>this.options.max&&(
//If max is not divisible by step, rounding off may increase its value
t-=i),this.max=parseFloat(t.toFixed(this._precision()))},_precision:function(){var t=this._precisionOf(this.options.step);return null!==this.options.min&&(t=Math.max(t,this._precisionOf(this.options.min))),t},_precisionOf:function(t){var e=t.toString(),i=e.indexOf(".");return-1===i?0:e.length-i-1},_valueMin:function(){return this.options.min},_valueMax:function(){return this.max},_refreshRange:function(t){"vertical"===t&&this.range.css({width:"",left:""}),"horizontal"===t&&this.range.css({height:"",bottom:""})},_refreshValue:function(){var e,i,n,s,o,r=this.options.range,a=this.options,l=this,h=!this._animateOff&&a.animate,c={};this._hasMultipleValues()?this.handles.each(function(n){i=(l.values(n)-l._valueMin())/(l._valueMax()-l._valueMin())*100,c["horizontal"===l.orientation?"left":"bottom"]=i+"%",t(this).stop(1,1)[h?"animate":"css"](c,a.animate),!0===l.options.range&&("horizontal"===l.orientation?(0===n&&l.range.stop(1,1)[h?"animate":"css"]({left:i+"%"},a.animate),1===n&&l.range[h?"animate":"css"]({width:i-e+"%"},{queue:!1,duration:a.animate})):(0===n&&l.range.stop(1,1)[h?"animate":"css"]({bottom:i+"%"},a.animate),1===n&&l.range[h?"animate":"css"]({height:i-e+"%"},{queue:!1,duration:a.animate}))),e=i}):(n=this.value(),s=this._valueMin(),o=this._valueMax(),i=o!==s?(n-s)/(o-s)*100:0,c["horizontal"===this.orientation?"left":"bottom"]=i+"%",this.handle.stop(1,1)[h?"animate":"css"](c,a.animate),"min"===r&&"horizontal"===this.orientation&&this.range.stop(1,1)[h?"animate":"css"]({width:i+"%"},a.animate),"max"===r&&"horizontal"===this.orientation&&this.range.stop(1,1)[h?"animate":"css"]({width:100-i+"%"},a.animate),"min"===r&&"vertical"===this.orientation&&this.range.stop(1,1)[h?"animate":"css"]({height:i+"%"},a.animate),"max"===r&&"vertical"===this.orientation&&this.range.stop(1,1)[h?"animate":"css"]({height:100-i+"%"},a.animate))},_handleEvents:{keydown:function(e){var i,n,s,o=t(e.target).data("ui-slider-handle-index");switch(e.keyCode){case t.ui.keyCode.HOME:case t.ui.keyCode.END:case t.ui.keyCode.PAGE_UP:case t.ui.keyCode.PAGE_DOWN:case t.ui.keyCode.UP:case t.ui.keyCode.RIGHT:case t.ui.keyCode.DOWN:case t.ui.keyCode.LEFT:if(e.preventDefault(),!this._keySliding&&(this._keySliding=!0,this._addClass(t(e.target),null,"ui-state-active"),!1===this._start(e,o)))return}switch(s=this.options.step,i=n=this._hasMultipleValues()?this.values(o):this.value(),e.keyCode){case t.ui.keyCode.HOME:n=this._valueMin();break;case t.ui.keyCode.END:n=this._valueMax();break;case t.ui.keyCode.PAGE_UP:n=this._trimAlignValue(i+(this._valueMax()-this._valueMin())/this.numPages);break;case t.ui.keyCode.PAGE_DOWN:n=this._trimAlignValue(i-(this._valueMax()-this._valueMin())/this.numPages);break;case t.ui.keyCode.UP:case t.ui.keyCode.RIGHT:if(i===this._valueMax())return;n=this._trimAlignValue(i+s);break;case t.ui.keyCode.DOWN:case t.ui.keyCode.LEFT:if(i===this._valueMin())return;n=this._trimAlignValue(i-s)}this._slide(e,o,n)},keyup:function(e){var i=t(e.target).data("ui-slider-handle-index");this._keySliding&&(this._keySliding=!1,this._stop(e,i),this._change(e,i),this._removeClass(t(e.target),null,"ui-state-active"))}}})})},/* 8 */
/***/
function(t,e,i){"use strict";var n,s,o;/*!
 * The Final Countdown for jQuery v2.2.0 (http://hilios.github.io/jQuery.countdown/)
 * Copyright (c) 2016 Edson Hilios
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to
 * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
 * the Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
!function(r){s=[i(0)],n=r,void 0!==(o="function"==typeof n?n.apply(e,s):n)&&(t.exports=o)}(function(t){function e(t){if(t instanceof Date)return t;if(String(t).match(r))return String(t).match(/^[0-9]*$/)&&(t=Number(t)),String(t).match(/\-/)&&(t=String(t).replace(/\-/g,"/")),new Date(t);throw new Error("Couldn't cast `"+t+"` to a date object.")}function i(t){var e=t.toString().replace(/([.?*+^$[\]\\(){}|-])/g,"\\$1");return new RegExp(e)}function n(t){return function(e){var n=e.match(/%(-|!)?[A-Z]{1}(:[^;]+;)?/gi);if(n)for(var o=0,r=n.length;o<r;++o){var a=n[o].match(/%(-|!)?([a-zA-Z]{1})(:[^;]+;)?/),h=i(a[0]),c=a[1]||"",u=a[3]||"",d=null;a=a[2],l.hasOwnProperty(a)&&(d=l[a],d=Number(t[d])),null!==d&&("!"===c&&(d=s(u,d)),""===c&&d<10&&(d="0"+d.toString()),e=e.replace(h,d.toString()))}return e=e.replace(/%%/,"%")}}function s(t,e){var i="s",n="";return t&&(t=t.replace(/(:|;|\s)/gi,"").split(/\,/),1===t.length?i=t[0]:(n=t[0],i=t[1])),Math.abs(e)>1?i:n}var o=[],r=[],a={precision:100,elapse:!1,defer:!1};r.push(/^[0-9]*$/.source),r.push(/([0-9]{1,2}\/){2}[0-9]{4}( [0-9]{1,2}(:[0-9]{2}){2})?/.source),r.push(/[0-9]{4}([\/\-][0-9]{1,2}){2}( [0-9]{1,2}(:[0-9]{2}){2})?/.source),r=new RegExp(r.join("|"));var l={Y:"years",m:"months",n:"daysToMonth",d:"daysToWeek",w:"weeks",W:"weeksToMonth",H:"hours",M:"minutes",S:"seconds",D:"totalDays",I:"totalHours",N:"totalMinutes",T:"totalSeconds"},h=function(e,i,n){this.el=e,this.$el=t(e),this.interval=null,this.offset={},this.options=t.extend({},a),this.instanceNumber=o.length,o.push(this),this.$el.data("countdown-instance",this.instanceNumber),n&&("function"==typeof n?(this.$el.on("update.countdown",n),this.$el.on("stoped.countdown",n),this.$el.on("finish.countdown",n)):this.options=t.extend({},a,n)),this.setFinalDate(i),!1===this.options.defer&&this.start()};t.extend(h.prototype,{start:function(){null!==this.interval&&clearInterval(this.interval);var t=this;this.update(),this.interval=setInterval(function(){t.update.call(t)},this.options.precision)},stop:function(){clearInterval(this.interval),this.interval=null,this.dispatchEvent("stoped")},toggle:function(){this.interval?this.stop():this.start()},pause:function(){this.stop()},resume:function(){this.start()},remove:function(){this.stop.call(this),o[this.instanceNumber]=null,delete this.$el.data().countdownInstance},setFinalDate:function(t){this.finalDate=e(t)},update:function(){if(0===this.$el.closest("html").length)return void this.remove();var e,i=void 0!==t._data(this.el,"events"),n=new Date;e=this.finalDate.getTime()-n.getTime(),e=Math.ceil(e/1e3),e=!this.options.elapse&&e<0?0:Math.abs(e),this.totalSecsLeft!==e&&i&&(this.totalSecsLeft=e,this.elapsed=n>=this.finalDate,this.offset={seconds:this.totalSecsLeft%60,minutes:Math.floor(this.totalSecsLeft/60)%60,hours:Math.floor(this.totalSecsLeft/60/60)%24,days:Math.floor(this.totalSecsLeft/60/60/24)%7,daysToWeek:Math.floor(this.totalSecsLeft/60/60/24)%7,daysToMonth:Math.floor(this.totalSecsLeft/60/60/24%30.4368),weeks:Math.floor(this.totalSecsLeft/60/60/24/7),weeksToMonth:Math.floor(this.totalSecsLeft/60/60/24/7)%4,months:Math.floor(this.totalSecsLeft/60/60/24/30.4368),years:Math.abs(this.finalDate.getFullYear()-n.getFullYear()),totalDays:Math.floor(this.totalSecsLeft/60/60/24),totalHours:Math.floor(this.totalSecsLeft/60/60),totalMinutes:Math.floor(this.totalSecsLeft/60),totalSeconds:this.totalSecsLeft},this.options.elapse||0!==this.totalSecsLeft?this.dispatchEvent("update"):(this.stop(),this.dispatchEvent("finish")))},dispatchEvent:function(e){var i=t.Event(e+".countdown");i.finalDate=this.finalDate,i.elapsed=this.elapsed,i.offset=t.extend({},this.offset),i.strftime=n(this.offset),this.$el.trigger(i)}}),t.fn.countdown=function(){var e=Array.prototype.slice.call(arguments,0);return this.each(function(){var i=t(this).data("countdown-instance");if(void 0!==i){var n=o[i],s=e[0];h.prototype.hasOwnProperty(s)?n[s].apply(n,e.slice(1)):null===String(s).match(/^[$A-Z_][0-9A-Z_$]*$/i)?(n.setFinalDate.call(n,s),n.start()):t.error("Method %s does not exist on jQuery.countdown".replace(/\%s/gi,s))}else new h(this,e[0],e[1])})}})},/* 9 */
/***/
function(t,e,i){"use strict";/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright Ã‚Â© 2008 George McGinley Smith
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
*/
// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing.jswing=jQuery.easing.swing,jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(t,e,i,n,s){
//alert(jQuery.easing.default);
return jQuery.easing[jQuery.easing.def](t,e,i,n,s)},easeInQuad:function(t,e,i,n,s){return n*(e/=s)*e+i},easeOutQuad:function(t,e,i,n,s){return-n*(e/=s)*(e-2)+i},easeInOutQuad:function(t,e,i,n,s){return(e/=s/2)<1?n/2*e*e+i:-n/2*(--e*(e-2)-1)+i},easeInCubic:function(t,e,i,n,s){return n*(e/=s)*e*e+i},easeOutCubic:function(t,e,i,n,s){return n*((e=e/s-1)*e*e+1)+i},easeInOutCubic:function(t,e,i,n,s){return(e/=s/2)<1?n/2*e*e*e+i:n/2*((e-=2)*e*e+2)+i},easeInQuart:function(t,e,i,n,s){return n*(e/=s)*e*e*e+i},easeOutQuart:function(t,e,i,n,s){return-n*((e=e/s-1)*e*e*e-1)+i},easeInOutQuart:function(t,e,i,n,s){return(e/=s/2)<1?n/2*e*e*e*e+i:-n/2*((e-=2)*e*e*e-2)+i},easeInQuint:function(t,e,i,n,s){return n*(e/=s)*e*e*e*e+i},easeOutQuint:function(t,e,i,n,s){return n*((e=e/s-1)*e*e*e*e+1)+i},easeInOutQuint:function(t,e,i,n,s){return(e/=s/2)<1?n/2*e*e*e*e*e+i:n/2*((e-=2)*e*e*e*e+2)+i},easeInSine:function(t,e,i,n,s){return-n*Math.cos(e/s*(Math.PI/2))+n+i},easeOutSine:function(t,e,i,n,s){return n*Math.sin(e/s*(Math.PI/2))+i},easeInOutSine:function(t,e,i,n,s){return-n/2*(Math.cos(Math.PI*e/s)-1)+i},easeInExpo:function(t,e,i,n,s){return 0==e?i:n*Math.pow(2,10*(e/s-1))+i},easeOutExpo:function(t,e,i,n,s){return e==s?i+n:n*(1-Math.pow(2,-10*e/s))+i},easeInOutExpo:function(t,e,i,n,s){return 0==e?i:e==s?i+n:(e/=s/2)<1?n/2*Math.pow(2,10*(e-1))+i:n/2*(2-Math.pow(2,-10*--e))+i},easeInCirc:function(t,e,i,n,s){return-n*(Math.sqrt(1-(e/=s)*e)-1)+i},easeOutCirc:function(t,e,i,n,s){return n*Math.sqrt(1-(e=e/s-1)*e)+i},easeInOutCirc:function(t,e,i,n,s){return(e/=s/2)<1?-n/2*(Math.sqrt(1-e*e)-1)+i:n/2*(Math.sqrt(1-(e-=2)*e)+1)+i},easeInElastic:function(t,e,i,n,s){var o=1.70158,r=0,a=n;if(0==e)return i;if(1==(e/=s))return i+n;if(r||(r=.3*s),a<Math.abs(n)){a=n;var o=r/4}else var o=r/(2*Math.PI)*Math.asin(n/a);return-a*Math.pow(2,10*(e-=1))*Math.sin((e*s-o)*(2*Math.PI)/r)+i},easeOutElastic:function(t,e,i,n,s){var o=1.70158,r=0,a=n;if(0==e)return i;if(1==(e/=s))return i+n;if(r||(r=.3*s),a<Math.abs(n)){a=n;var o=r/4}else var o=r/(2*Math.PI)*Math.asin(n/a);return a*Math.pow(2,-10*e)*Math.sin((e*s-o)*(2*Math.PI)/r)+n+i},easeInOutElastic:function(t,e,i,n,s){var o=1.70158,r=0,a=n;if(0==e)return i;if(2==(e/=s/2))return i+n;if(r||(r=s*(.3*1.5)),a<Math.abs(n)){a=n;var o=r/4}else var o=r/(2*Math.PI)*Math.asin(n/a);return e<1?a*Math.pow(2,10*(e-=1))*Math.sin((e*s-o)*(2*Math.PI)/r)*-.5+i:a*Math.pow(2,-10*(e-=1))*Math.sin((e*s-o)*(2*Math.PI)/r)*.5+n+i},easeInBack:function(t,e,i,n,s,o){return void 0==o&&(o=1.70158),n*(e/=s)*e*((o+1)*e-o)+i},easeOutBack:function(t,e,i,n,s,o){return void 0==o&&(o=1.70158),n*((e=e/s-1)*e*((o+1)*e+o)+1)+i},easeInOutBack:function(t,e,i,n,s,o){return void 0==o&&(o=1.70158),(e/=s/2)<1?n/2*(e*e*((1+(o*=1.525))*e-o))+i:n/2*((e-=2)*e*((1+(o*=1.525))*e+o)+2)+i},easeInBounce:function(t,e,i,n,s){return n-jQuery.easing.easeOutBounce(t,s-e,0,n,s)+i},easeOutBounce:function(t,e,i,n,s){return(e/=s)<1/2.75?n*(7.5625*e*e)+i:e<2/2.75?n*(7.5625*(e-=1.5/2.75)*e+.75)+i:e<2.5/2.75?n*(7.5625*(e-=2.25/2.75)*e+.9375)+i:n*(7.5625*(e-=2.625/2.75)*e+.984375)+i},easeInOutBounce:function(t,e,i,n,s){return e<s/2?.5*jQuery.easing.easeInBounce(t,2*e,0,n,s)+i:.5*jQuery.easing.easeOutBounce(t,2*e-s,0,n,s)+.5*n+i}})},/* 10 */
/***/
function(t,e,i){"use strict";var n,s,o;// Sticky Plugin v1.0.4 for jQuery
// =============
// Author: Anthony Garand
// Improvements by German M. Bravo (Kronuz) and Ruud Kamphuis (ruudk)
// Improvements by Leonardo C. Daronco (daronco)
// Created: 02/14/2011
// Date: 07/20/2015
// Website: http://stickyjs.com/
// Description: Makes an element on the page stick on the screen as you scroll
//              It will only set the 'top' and 'position' of your element, you
!function(r){
// AMD. Register as an anonymous module.
s=[i(0)],n=r,void 0!==(o="function"==typeof n?n.apply(e,s):n)&&(t.exports=o)}(function(t){var e=Array.prototype.slice,i=Array.prototype.splice,n={topSpacing:0,bottomSpacing:0,className:"is-sticky",wrapperClassName:"sticky-wrapper",center:!1,getWidthFrom:"",widthFromWrapper:!0,// works only when .getWidthFrom is empty
responsiveWidth:!1,zIndex:"inherit"},s=t(window),o=t(document),r=[],a=s.height(),l=function(){for(var e=s.scrollTop(),i=o.height(),n=i-a,l=e>n?n-e:0,h=0,c=r.length;h<c;h++){var u=r[h],d=u.stickyWrapper.offset().top,f=d-u.topSpacing-l;if(
//update height in case of dynamic content
u.stickyWrapper.css("height",u.stickyElement.outerHeight()),e<=f)null!==u.currentTop&&(u.stickyElement.css({width:"",position:"",top:"","z-index":""}),u.stickyElement.parent().removeClass(u.className),u.stickyElement.trigger("sticky-end",[u]),u.currentTop=null);else{var p=i-u.stickyElement.outerHeight()-u.topSpacing-u.bottomSpacing-e-l;if(p<0?p+=u.topSpacing:p=u.topSpacing,u.currentTop!==p){var g;u.getWidthFrom?(padding=u.stickyElement.innerWidth()-u.stickyElement.width(),g=t(u.getWidthFrom).width()-padding||null):u.widthFromWrapper&&(g=u.stickyWrapper.width()),null==g&&(g=u.stickyElement.width()),u.stickyElement.css("width",g).css("position","fixed").css("top",p).css("z-index",u.zIndex),u.stickyElement.parent().addClass(u.className),null===u.currentTop?u.stickyElement.trigger("sticky-start",[u]):
// sticky is started but it have to be repositioned
u.stickyElement.trigger("sticky-update",[u]),u.currentTop===u.topSpacing&&u.currentTop>p||null===u.currentTop&&p<u.topSpacing?
// just reached bottom || just started to stick but bottom is already reached
u.stickyElement.trigger("sticky-bottom-reached",[u]):null!==u.currentTop&&p===u.topSpacing&&u.currentTop<p&&
// sticky is started && sticked at topSpacing && overflowing from top just finished
u.stickyElement.trigger("sticky-bottom-unreached",[u]),u.currentTop=p}
// Check if sticky has reached end of container and stop sticking
var m=u.stickyWrapper.parent();u.stickyElement.offset().top+u.stickyElement.outerHeight()>=m.offset().top+m.outerHeight()&&u.stickyElement.offset().top<=u.topSpacing?u.stickyElement.css("position","absolute").css("top","").css("bottom",0).css("z-index",""):u.stickyElement.css("position","fixed").css("top",p).css("bottom","").css("z-index",u.zIndex)}}},h=function(){a=s.height();for(var e=0,i=r.length;e<i;e++){var n=r[e],o=null;n.getWidthFrom?n.responsiveWidth&&(o=t(n.getWidthFrom).width()):n.widthFromWrapper&&(o=n.stickyWrapper.width()),null!=o&&n.stickyElement.css("width",o)}},c={init:function(e){return this.each(function(){var i=t.extend({},n,e),s=t(this),o=s.attr("id"),a=o?o+"-"+n.wrapperClassName:n.wrapperClassName,l=t("<div></div>").attr("id",a).addClass(i.wrapperClassName);s.wrapAll(function(){if(0==t(this).parent("#"+a).length)return l});var h=s.parent();i.center&&h.css({width:s.outerWidth(),marginLeft:"auto",marginRight:"auto"}),"right"===s.css("float")&&s.css({float:"none"}).parent().css({float:"right"}),i.stickyElement=s,i.stickyWrapper=h,i.currentTop=null,r.push(i),c.setWrapperHeight(this),c.setupChangeListeners(this)})},setWrapperHeight:function(e){var i=t(e),n=i.parent();n&&n.css("height",i.outerHeight())},setupChangeListeners:function(t){if(window.MutationObserver){new window.MutationObserver(function(e){(e[0].addedNodes.length||e[0].removedNodes.length)&&c.setWrapperHeight(t)}).observe(t,{subtree:!0,childList:!0})}else window.addEventListener?(t.addEventListener("DOMNodeInserted",function(){c.setWrapperHeight(t)},!1),t.addEventListener("DOMNodeRemoved",function(){c.setWrapperHeight(t)},!1)):window.attachEvent&&(t.attachEvent("onDOMNodeInserted",function(){c.setWrapperHeight(t)}),t.attachEvent("onDOMNodeRemoved",function(){c.setWrapperHeight(t)}))},update:l,unstick:function(e){return this.each(function(){for(var e=this,n=t(e),s=-1,o=r.length;o-- >0;)r[o].stickyElement.get(0)===e&&(i.call(r,o,1),s=o);-1!==s&&(n.unwrap(),n.css({width:"",position:"",top:"",float:"","z-index":""}))})}};
// should be more efficient than using $window.scroll(scroller) and $window.resize(resizer):
window.addEventListener?(window.addEventListener("scroll",l,!1),window.addEventListener("resize",h,!1)):window.attachEvent&&(window.attachEvent("onscroll",l),window.attachEvent("onresize",h)),t.fn.sticky=function(i){return c[i]?c[i].apply(this,e.call(arguments,1)):"object"!=typeof i&&i?void t.error("Method "+i+" does not exist on jQuery.sticky"):c.init.apply(this,arguments)},t.fn.unstick=function(i){return c[i]?c[i].apply(this,e.call(arguments,1)):"object"!=typeof i&&i?void t.error("Method "+i+" does not exist on jQuery.sticky"):c.unstick.apply(this,arguments)},t(function(){setTimeout(l,0)})})},/* 11 */
/***/
function(t,e,i){"use strict";!function(t,e,i,n){var s=i("html"),o=i(t),r=i(e),a=i.fancybox=function(){a.open.apply(this,arguments)},l=navigator.userAgent.match(/msie/i),h=null,c=void 0!==e.createTouch,u=function(t){return t&&t.hasOwnProperty&&t instanceof i},d=function(t){return t&&"string"===i.type(t)},f=function(t){return d(t)&&t.indexOf("%")>0},p=function(t){return t&&!(t.style.overflow&&"hidden"===t.style.overflow)&&(t.clientWidth&&t.scrollWidth>t.clientWidth||t.clientHeight&&t.scrollHeight>t.clientHeight)},g=function(t,e){var i=parseInt(t,10)||0;return e&&f(t)&&(i=a.getViewport()[e]/100*i),Math.ceil(i)},m=function(t,e){return g(t,e)+"px"};i.extend(a,{
// The current version of fancyBox
version:"2.1.5",defaults:{padding:15,margin:20,width:800,height:600,minWidth:100,minHeight:100,maxWidth:9999,maxHeight:9999,pixelRatio:1,// Set to 2 for retina display support
autoSize:!0,autoHeight:!1,autoWidth:!1,autoResize:!0,autoCenter:!c,fitToView:!0,aspectRatio:!1,topRatio:.5,leftRatio:.5,scrolling:"auto",// 'auto', 'yes' or 'no'
wrapCSS:"",arrows:!0,closeBtn:!0,closeClick:!1,nextClick:!1,mouseWheel:!0,autoPlay:!1,playSpeed:3e3,preload:3,modal:!1,loop:!0,ajax:{dataType:"html",headers:{"X-fancyBox":!0}},iframe:{scrolling:"auto",preload:!0},swf:{wmode:"transparent",allowfullscreen:"true",allowscriptaccess:"always"},keys:{next:{13:"left",// enter
34:"up",// page down
39:"left",// right arrow
40:"up"},prev:{8:"right",// backspace
33:"down",// page up
37:"right",// left arrow
38:"down"},close:[27],// escape key
play:[32],// space - start/stop slideshow
toggle:[70]},direction:{next:"left",prev:"right"},scrollOutside:!0,
// Override some properties
index:0,type:null,href:null,content:null,title:null,
// HTML templates
tpl:{wrap:'<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',image:'<img class="fancybox-image" src="{href}" alt="" />',iframe:'<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen'+(l?' allowtransparency="true"':"")+"></iframe>",error:'<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',closeBtn:'<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',next:'<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',prev:'<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>',loading:'<div id="fancybox-loading"><div></div></div>'},
// Properties for each animation type
// Opening fancyBox
openEffect:"fade",// 'elastic', 'fade' or 'none'
openSpeed:250,openEasing:"swing",openOpacity:!0,openMethod:"zoomIn",
// Closing fancyBox
closeEffect:"fade",// 'elastic', 'fade' or 'none'
closeSpeed:250,closeEasing:"swing",closeOpacity:!0,closeMethod:"zoomOut",
// Changing next gallery item
nextEffect:"elastic",// 'elastic', 'fade' or 'none'
nextSpeed:250,nextEasing:"swing",nextMethod:"changeIn",
// Changing previous gallery item
prevEffect:"elastic",// 'elastic', 'fade' or 'none'
prevSpeed:250,prevEasing:"swing",prevMethod:"changeOut",
// Enable default helpers
helpers:{overlay:!0,title:!0},
// Callbacks
onCancel:i.noop,// If canceling
beforeLoad:i.noop,// Before loading
afterLoad:i.noop,// After loading
beforeShow:i.noop,// Before changing in current item
afterShow:i.noop,// After opening
beforeChange:i.noop,// Before changing gallery item
beforeClose:i.noop,// Before closing
afterClose:i.noop},
//Current state
group:{},// Selected group
opts:{},// Group options
previous:null,// Previous element
coming:null,// Element being loaded
current:null,// Currently loaded element
isActive:!1,// Is activated
isOpen:!1,// Is currently open
isOpened:!1,// Have been fully opened at least once
wrap:null,skin:null,outer:null,inner:null,player:{timer:null,isActive:!1},
// Loaders
ajaxLoad:null,imgPreload:null,
// Some collections
transitions:{},helpers:{},/*
   *	Static methods
   */
open:function(t,e){if(t&&(i.isPlainObject(e)||(e={}),!1!==a.close(!0)))
// Normalize group
// Recheck if the type of each element is `object` and set content type (image, ajax, etc)
// Extend the defaults
// All options are merged recursive except keys
return i.isArray(t)||(t=u(t)?i(t).get():[t]),i.each(t,function(n,s){var o,r,l,h,c,f,p,g={};"object"===i.type(s)&&(
// Check if is DOM element
s.nodeType&&(s=i(s)),u(s)?(g={href:s.data("fancybox-href")||s.attr("href"),title:i("<div/>").text(s.data("fancybox-title")||s.attr("title")||"").html(),isDom:!0,element:s},i.metadata&&i.extend(!0,g,s.metadata())):g=s),o=e.href||g.href||(d(s)?s:null),r=void 0!==e.title?e.title:g.title||"",l=e.content||g.content,h=l?"html":e.type||g.type,!h&&g.isDom&&((h=s.data("fancybox-type"))||(c=s.prop("class").match(/fancybox\.(\w+)/),h=c?c[1]:null)),d(o)&&(
// Try to guess the content type
h||(a.isImage(o)?h="image":a.isSWF(o)?h="swf":"#"===o.charAt(0)?h="inline":d(s)&&(h="html",l=s)),
// Split url into two pieces with source url and content selector, e.g,
// "/mypage.html #my_id" will load "/mypage.html" and display element having id "my_id"
"ajax"===h&&(f=o.split(/\s+/,2),o=f.shift(),p=f.shift())),l||("inline"===h?o?l=i(d(o)?o.replace(/.*(?=#[^\s]+$)/,""):o):g.isDom&&(l=s):"html"===h?l=o:h||o||!g.isDom||(h="inline",l=s)),i.extend(g,{href:o,type:h,content:l,title:r,selector:p}),t[n]=g}),a.opts=i.extend(!0,{},a.defaults,e),void 0!==e.keys&&(a.opts.keys=!!e.keys&&i.extend({},a.defaults.keys,e.keys)),a.group=t,a._start(a.opts.index)},
// Cancel image loading or abort ajax request
cancel:function(){var t=a.coming;t&&!1===a.trigger("onCancel")||(a.hideLoading(),t&&(a.ajaxLoad&&a.ajaxLoad.abort(),a.ajaxLoad=null,a.imgPreload&&(a.imgPreload.onload=a.imgPreload.onerror=null),t.wrap&&t.wrap.stop(!0,!0).trigger("onReset").remove(),a.coming=null,
// If the first item has been canceled, then clear everything
a.current||a._afterZoomOut(t)))},
// Start closing animation if is open; remove immediately if opening/closing
close:function(t){a.cancel(),!1!==a.trigger("beforeClose")&&(a.unbindEvents(),a.isActive&&(a.isOpen&&!0!==t?(a.isOpen=a.isOpened=!1,a.isClosing=!0,i(".fancybox-item, .fancybox-nav").remove(),a.wrap.stop(!0,!0).removeClass("fancybox-opened"),a.transitions[a.current.closeMethod]()):(i(".fancybox-wrap").stop(!0).trigger("onReset").remove(),a._afterZoomOut())))},
// Manage slideshow:
//   $.fancybox.play(); - toggle slideshow
//   $.fancybox.play( true ); - start
//   $.fancybox.play( false ); - stop
play:function(t){var e=function(){clearTimeout(a.player.timer)},i=function(){e(),a.current&&a.player.isActive&&(a.player.timer=setTimeout(a.next,a.current.playSpeed))},n=function(){e(),r.unbind(".player"),a.player.isActive=!1,a.trigger("onPlayEnd")};!0===t||!a.player.isActive&&!1!==t?function(){a.current&&(a.current.loop||a.current.index<a.group.length-1)&&(a.player.isActive=!0,r.bind({"onCancel.player beforeClose.player":n,"onUpdate.player":i,"beforeLoad.player":e}),i(),a.trigger("onPlayStart"))}():n()},
// Navigate to next gallery item
next:function(t){var e=a.current;e&&(d(t)||(t=e.direction.next),a.jumpto(e.index+1,t,"next"))},
// Navigate to previous gallery item
prev:function(t){var e=a.current;e&&(d(t)||(t=e.direction.prev),a.jumpto(e.index-1,t,"prev"))},
// Navigate to gallery item by index
jumpto:function(t,e,i){var n=a.current;n&&(t=g(t),a.direction=e||n.direction[t>=n.index?"next":"prev"],a.router=i||"jumpto",n.loop&&(t<0&&(t=n.group.length+t%n.group.length),t%=n.group.length),void 0!==n.group[t]&&(a.cancel(),a._start(t)))},
// Center inside viewport and toggle position type to fixed or absolute if needed
reposition:function(t,e){var n,s=a.current,o=s?s.wrap:null;o&&(n=a._getPosition(e),t&&"scroll"===t.type?(delete n.position,o.stop(!0,!0).animate(n,200)):(o.css(n),s.pos=i.extend({},s.dim,n)))},update:function(t){var e=t&&t.originalEvent&&t.originalEvent.type,i=!e||"orientationchange"===e;i&&(clearTimeout(h),h=null),a.isOpen&&!h&&(h=setTimeout(function(){var n=a.current;n&&!a.isClosing&&(a.wrap.removeClass("fancybox-tmp"),(i||"load"===e||"resize"===e&&n.autoResize)&&a._setDimension(),"scroll"===e&&n.canShrink||a.reposition(t),a.trigger("onUpdate"),h=null)},i&&!c?0:300))},
// Shrink content to fit inside viewport or restore if resized
toggle:function(t){a.isOpen&&(a.current.fitToView="boolean"===i.type(t)?t:!a.current.fitToView,
// Help browser to restore document dimensions
c&&(a.wrap.removeAttr("style").addClass("fancybox-tmp"),a.trigger("onUpdate")),a.update())},hideLoading:function(){r.unbind(".loading"),i("#fancybox-loading").remove()},showLoading:function(){var t,e;a.hideLoading(),t=i(a.opts.tpl.loading).click(a.cancel).appendTo("body"),
// If user will press the escape-button, the request will be canceled
r.bind("keydown.loading",function(t){27===(t.which||t.keyCode)&&(t.preventDefault(),a.cancel())}),a.defaults.fixed||(e=a.getViewport(),t.css({position:"absolute",top:.5*e.h+e.y,left:.5*e.w+e.x})),a.trigger("onLoading")},getViewport:function(){var e=a.current&&a.current.locked||!1,i={x:o.scrollLeft(),y:o.scrollTop()};
// See http://bugs.jquery.com/ticket/6724
return e&&e.length?(i.w=e[0].clientWidth,i.h=e[0].clientHeight):(i.w=c&&t.innerWidth?t.innerWidth:o.width(),i.h=c&&t.innerHeight?t.innerHeight:o.height()),i},
// Unbind the keyboard / clicking actions
unbindEvents:function(){a.wrap&&u(a.wrap)&&a.wrap.unbind(".fb"),r.unbind(".fb"),o.unbind(".fb")},bindEvents:function(){var t,e=a.current;e&&(
// Changing document height on iOS devices triggers a 'resize' event,
// that can change document height... repeating infinitely
o.bind("orientationchange.fb"+(c?"":" resize.fb")+(e.autoCenter&&!e.locked?" scroll.fb":""),a.update),t=e.keys,t&&r.bind("keydown.fb",function(n){var s=n.which||n.keyCode,o=n.target||n.srcElement;
// Skip esc key if loading, because showLoading will cancel preloading
if(27===s&&a.coming)return!1;
// Ignore key combinations and key events within form elements
n.ctrlKey||n.altKey||n.shiftKey||n.metaKey||o&&(o.type||i(o).is("[contenteditable]"))||i.each(t,function(t,o){return e.group.length>1&&void 0!==o[s]?(a[t](o[s]),n.preventDefault(),!1):i.inArray(s,o)>-1?(a[t](),n.preventDefault(),!1):void 0})}),i.fn.mousewheel&&e.mouseWheel&&a.wrap.bind("mousewheel.fb",function(t,n,s,o){for(var r=t.target||null,l=i(r),h=!1;l.length&&!(h||l.is(".fancybox-skin")||l.is(".fancybox-wrap"));)h=p(l[0]),l=i(l).parent();0===n||h||a.group.length>1&&!e.canShrink&&(o>0||s>0?a.prev(o>0?"down":"left"):(o<0||s<0)&&a.next(o<0?"up":"right"),t.preventDefault())}))},trigger:function(t,e){var n,s=e||a.coming||a.current;if(s){if(i.isFunction(s[t])&&(n=s[t].apply(s,Array.prototype.slice.call(arguments,1))),!1===n)return!1;s.helpers&&i.each(s.helpers,function(e,n){n&&a.helpers[e]&&i.isFunction(a.helpers[e][t])&&a.helpers[e][t](i.extend(!0,{},a.helpers[e].defaults,n),s)})}r.trigger(t)},isImage:function(t){return d(t)&&t.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i)},isSWF:function(t){return d(t)&&t.match(/\.(swf)((\?|#).*)?$/i)},_start:function(t){var e,n,s,o,r,l={};if(t=g(t),!(e=a.group[t]||null))return!1;if(l=i.extend(!0,{},a.opts,e),
// Convert margin and padding properties to array - top, right, bottom, left
o=l.margin,r=l.padding,"number"===i.type(o)&&(l.margin=[o,o,o,o]),"number"===i.type(r)&&(l.padding=[r,r,r,r]),
// 'modal' propery is just a shortcut
l.modal&&i.extend(!0,l,{closeBtn:!1,closeClick:!1,nextClick:!1,arrows:!1,mouseWheel:!1,keys:null,helpers:{overlay:{closeClick:!1}}}),
// 'autoSize' property is a shortcut, too
l.autoSize&&(l.autoWidth=l.autoHeight=!0),"auto"===l.width&&(l.autoWidth=!0),"auto"===l.height&&(l.autoHeight=!0),/*
    * Add reference to the group, so it`s possible to access from callbacks, example:
    * afterLoad : function() {
    *     this.title = 'Image ' + (this.index + 1) + ' of ' + this.group.length + (this.title ? ' - ' + this.title : '');
    * }
    */
l.group=a.group,l.index=t,
// Give a chance for callback or helpers to update coming item (type, title, etc)
a.coming=l,!1===a.trigger("beforeLoad"))return void(a.coming=null);if(s=l.type,n=l.href,!s)
//If we can not determine content type then drop silently or display next/prev item if looping through gallery
//If we can not determine content type then drop silently or display next/prev item if looping through gallery
return a.coming=null,!(!a.current||!a.router||"jumpto"===a.router)&&(a.current.index=t,a[a.router](a.direction));
// Check before try to load; 'inline' and 'html' types need content, others - href
if(a.isActive=!0,"image"!==s&&"swf"!==s||(l.autoHeight=l.autoWidth=!1,l.scrolling="visible"),"image"===s&&(l.aspectRatio=!0),"iframe"===s&&c&&(l.scrolling="scroll"),
// Build the neccessary markup
l.wrap=i(l.tpl.wrap).addClass("fancybox-"+(c?"mobile":"desktop")+" fancybox-type-"+s+" fancybox-tmp "+l.wrapCSS).appendTo(l.parent||"body"),i.extend(l,{skin:i(".fancybox-skin",l.wrap),outer:i(".fancybox-outer",l.wrap),inner:i(".fancybox-inner",l.wrap)}),i.each(["Top","Right","Bottom","Left"],function(t,e){l.skin.css("padding"+e,m(l.padding[t]))}),a.trigger("onReady"),"inline"===s||"html"===s){if(!l.content||!l.content.length)return a._error("content")}else if(!n)return a._error("href");"image"===s?a._loadImage():"ajax"===s?a._loadAjax():"iframe"===s?a._loadIframe():a._afterLoad()},_error:function(t){i.extend(a.coming,{type:"html",autoWidth:!0,autoHeight:!0,minWidth:0,minHeight:0,scrolling:"no",hasError:t,content:a.coming.tpl.error}),a._afterLoad()},_loadImage:function(){
// Reset preload image so it is later possible to check "complete" property
var t=a.imgPreload=new Image;t.onload=function(){this.onload=this.onerror=null,a.coming.width=this.width/a.opts.pixelRatio,a.coming.height=this.height/a.opts.pixelRatio,a._afterLoad()},t.onerror=function(){this.onload=this.onerror=null,a._error("image")},t.src=a.coming.href,!0!==t.complete&&a.showLoading()},_loadAjax:function(){var t=a.coming;a.showLoading(),a.ajaxLoad=i.ajax(i.extend({},t.ajax,{url:t.href,error:function(t,e){a.coming&&"abort"!==e?a._error("ajax",t):a.hideLoading()},success:function(e,i){"success"===i&&(t.content=e,a._afterLoad())}}))},_loadIframe:function(){var t=a.coming,e=i(t.tpl.iframe.replace(/\{rnd\}/g,(new Date).getTime())).attr("scrolling",c?"auto":t.iframe.scrolling).attr("src",t.href);
// This helps IE
i(t.wrap).bind("onReset",function(){try{i(this).find("iframe").hide().attr("src","//about:blank").end().empty()}catch(t){}}),t.iframe.preload&&(a.showLoading(),e.one("load",function(){i(this).data("ready",1),
// iOS will lose scrolling if we resize
c||i(this).bind("load.fb",a.update),
// Without this trick:
//   - iframe won't scroll on iOS devices
//   - IE7 sometimes displays empty iframe
i(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show(),a._afterLoad()})),t.content=e.appendTo(t.inner),t.iframe.preload||a._afterLoad()},_preloadImages:function(){var t,e,i=a.group,n=a.current,s=i.length,o=n.preload?Math.min(n.preload,s-1):0;for(e=1;e<=o;e+=1)t=i[(n.index+e)%s],"image"===t.type&&t.href&&((new Image).src=t.href)},_afterLoad:function(){var t,e,n,s,o,r,l=a.coming,h=a.current,c="fancybox-placeholder";if(a.hideLoading(),l&&!1!==a.isActive){if(!1===a.trigger("afterLoad",l,h))return l.wrap.stop(!0).trigger("onReset").remove(),void(a.coming=null);switch(h&&(a.trigger("beforeChange",h),h.wrap.stop(!0).removeClass("fancybox-opened").find(".fancybox-item, .fancybox-nav").remove()),a.unbindEvents(),t=l,e=l.content,n=l.type,s=l.scrolling,i.extend(a,{wrap:t.wrap,skin:t.skin,outer:t.outer,inner:t.inner,current:t,previous:h}),o=t.href,n){case"inline":case"ajax":case"html":t.selector?e=i("<div>").html(e).find(t.selector):u(e)&&(e.data(c)||e.data(c,i('<div class="'+c+'"></div>').insertAfter(e).hide()),e=e.show().detach(),t.wrap.bind("onReset",function(){i(this).find(e).length&&e.hide().replaceAll(e.data(c)).data(c,!1)}));break;case"image":e=t.tpl.image.replace(/\{href\}/g,o);break;case"swf":e='<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="'+o+'"></param>',r="",i.each(t.swf,function(t,i){e+='<param name="'+t+'" value="'+i+'"></param>',r+=" "+t+'="'+i+'"'}),e+='<embed src="'+o+'" type="application/x-shockwave-flash" width="100%" height="100%"'+r+"></embed></object>"}u(e)&&e.parent().is(t.inner)||t.inner.append(e),
// Give a chance for helpers or callbacks to update elements
a.trigger("beforeShow"),
// Set scrolling before calculating dimensions
t.inner.css("overflow","yes"===s?"scroll":"no"===s?"hidden":s),
// Set initial dimensions and start position
a._setDimension(),a.reposition(),a.isOpen=!1,a.coming=null,a.bindEvents(),a.isOpened?h.prevMethod&&a.transitions[h.prevMethod]():i(".fancybox-wrap").not(t.wrap).stop(!0).trigger("onReset").remove(),a.transitions[a.isOpened?t.nextMethod:t.openMethod](),a._preloadImages()}},_setDimension:function(){var t,e,n,s,o,r,l,h,c,u,d,p,v,_,y,w=a.getViewport(),b=0,E=!1,x=!1,C=a.wrap,S=a.skin,T=a.inner,I=a.current,D=I.width,O=I.height,k=I.minWidth,A=I.minHeight,M=I.maxWidth,L=I.maxHeight,N=I.scrolling,P=I.scrollOutside?I.scrollbarWidth:0,W=I.margin,z=g(W[1]+W[3]),H=g(W[0]+W[2]);if(
// Reset dimensions so we could re-check actual size
C.add(S).add(T).width("auto").height("auto").removeClass("fancybox-tmp"),t=g(S.outerWidth(!0)-S.width()),e=g(S.outerHeight(!0)-S.height()),
// Any space between content and viewport (margin, padding, border, title)
n=z+t,s=H+e,o=f(D)?(w.w-n)*g(D)/100:D,r=f(O)?(w.h-s)*g(O)/100:O,"iframe"===I.type){if(_=I.content,I.autoHeight&&1===_.data("ready"))try{_[0].contentWindow.document.location&&(T.width(o).height(9999),y=_.contents().find("body"),P&&y.css("overflow-x","hidden"),r=y.outerHeight(!0))}catch(t){}}else(I.autoWidth||I.autoHeight)&&(T.addClass("fancybox-tmp"),
// Set width or height in case we need to calculate only one dimension
I.autoWidth||T.width(o),I.autoHeight||T.height(r),I.autoWidth&&(o=T.width()),I.autoHeight&&(r=T.height()),T.removeClass("fancybox-tmp"));
// Try to fit inside viewport (including the title)
if(D=g(o),O=g(r),c=o/r,
// Calculations for the content
k=g(f(k)?g(k,"w")-n:k),M=g(f(M)?g(M,"w")-n:M),A=g(f(A)?g(A,"h")-s:A),L=g(f(L)?g(L,"h")-s:L),
// These will be used to determine if wrap can fit in the viewport
l=M,h=L,I.fitToView&&(M=Math.min(w.w-n,M),L=Math.min(w.h-s,L)),p=w.w-z,v=w.h-H,I.aspectRatio?(D>M&&(D=M,O=g(D/c)),O>L&&(O=L,D=g(O*c)),D<k&&(D=k,O=g(D/c)),O<A&&(O=A,D=g(O*c))):(D=Math.max(k,Math.min(D,M)),I.autoHeight&&"iframe"!==I.type&&(T.width(D),O=T.height()),O=Math.max(A,Math.min(O,L))),I.fitToView)if(T.width(D).height(O),C.width(D+t),
// Real wrap dimensions
u=C.width(),d=C.height(),I.aspectRatio)for(;(u>p||d>v)&&D>k&&O>A&&!(b++>19);)O=Math.max(A,Math.min(L,O-10)),D=g(O*c),D<k&&(D=k,O=g(D/c)),D>M&&(D=M,O=g(D/c)),T.width(D).height(O),C.width(D+t),u=C.width(),d=C.height();else D=Math.max(k,Math.min(D,D-(u-p))),O=Math.max(A,Math.min(O,O-(d-v)));P&&"auto"===N&&O<r&&D+t+P<p&&(D+=P),T.width(D).height(O),C.width(D+t),u=C.width(),d=C.height(),E=(u>p||d>v)&&D>k&&O>A,x=I.aspectRatio?D<l&&O<h&&D<o&&O<r:(D<l||O<h)&&(D<o||O<r),i.extend(I,{dim:{width:m(u),height:m(d)},origWidth:o,origHeight:r,canShrink:E,canExpand:x,wPadding:t,hPadding:e,wrapSpace:d-S.outerHeight(!0),skinSpace:S.height()-O}),!_&&I.autoHeight&&O>A&&O<L&&!x&&T.height("auto")},_getPosition:function(t){var e=a.current,i=a.getViewport(),n=e.margin,s=a.wrap.width()+n[1]+n[3],o=a.wrap.height()+n[0]+n[2],r={position:"absolute",top:n[0],left:n[3]};return e.autoCenter&&e.fixed&&!t&&o<=i.h&&s<=i.w?r.position="fixed":e.locked||(r.top+=i.y,r.left+=i.x),r.top=m(Math.max(r.top,r.top+(i.h-o)*e.topRatio)),r.left=m(Math.max(r.left,r.left+(i.w-s)*e.leftRatio)),r},_afterZoomIn:function(){var t=a.current;t&&(a.isOpen=a.isOpened=!0,a.wrap.css("overflow","visible").addClass("fancybox-opened").hide().show(0),a.update(),
// Assign a click event
(t.closeClick||t.nextClick&&a.group.length>1)&&a.inner.css("cursor","pointer").bind("click.fb",function(e){i(e.target).is("a")||i(e.target).parent().is("a")||(e.preventDefault(),a[t.closeClick?"close":"next"]())}),
// Create a close button
t.closeBtn&&i(t.tpl.closeBtn).appendTo(a.skin).bind("click.fb",function(t){t.preventDefault(),a.close()}),
// Create navigation arrows
t.arrows&&a.group.length>1&&((t.loop||t.index>0)&&i(t.tpl.prev).appendTo(a.outer).bind("click.fb",a.prev),(t.loop||t.index<a.group.length-1)&&i(t.tpl.next).appendTo(a.outer).bind("click.fb",a.next)),a.trigger("afterShow"),
// Stop the slideshow if this is the last item
t.loop||t.index!==t.group.length-1?a.opts.autoPlay&&!a.player.isActive&&(a.opts.autoPlay=!1,a.play(!0)):a.play(!1))},_afterZoomOut:function(t){t=t||a.current,i(".fancybox-wrap").trigger("onReset").remove(),i.extend(a,{group:{},opts:{},router:!1,current:null,isActive:!1,isOpened:!1,isOpen:!1,isClosing:!1,wrap:null,skin:null,outer:null,inner:null}),a.trigger("afterClose",t)}}),/*
  *	Default transitions
  */
a.transitions={getOrigPosition:function(){var t=a.current,e=t.element,i=t.orig,n={},s=50,o=50,r=t.hPadding,l=t.wPadding,h=a.getViewport();return!i&&t.isDom&&e.is(":visible")&&(i=e.find("img:first"),i.length||(i=e)),u(i)?(n=i.offset(),i.is("img")&&(s=i.outerWidth(),o=i.outerHeight())):(n.top=h.y+(h.h-o)*t.topRatio,n.left=h.x+(h.w-s)*t.leftRatio),("fixed"===a.wrap.css("position")||t.locked)&&(n.top-=h.y,n.left-=h.x),n={top:m(n.top-r*t.topRatio),left:m(n.left-l*t.leftRatio),width:m(s+l),height:m(o+r)}},step:function(t,e){var i,n,s,o=e.prop,r=a.current,l=r.wrapSpace,h=r.skinSpace;"width"!==o&&"height"!==o||(i=e.end===e.start?1:(t-e.start)/(e.end-e.start),a.isClosing&&(i=1-i),n="width"===o?r.wPadding:r.hPadding,s=t-n,a.skin[o](g("width"===o?s:s-l*i)),a.inner[o](g("width"===o?s:s-l*i-h*i)))},zoomIn:function(){var t=a.current,e=t.pos,n=t.openEffect,s="elastic"===n,o=i.extend({opacity:1},e);
// Remove "position" property that breaks older IE
delete o.position,s?(e=this.getOrigPosition(),t.openOpacity&&(e.opacity=.1)):"fade"===n&&(e.opacity=.1),a.wrap.css(e).animate(o,{duration:"none"===n?0:t.openSpeed,easing:t.openEasing,step:s?this.step:null,complete:a._afterZoomIn})},zoomOut:function(){var t=a.current,e=t.closeEffect,i="elastic"===e,n={opacity:.1};i&&(n=this.getOrigPosition(),t.closeOpacity&&(n.opacity=.1)),a.wrap.animate(n,{duration:"none"===e?0:t.closeSpeed,easing:t.closeEasing,step:i?this.step:null,complete:a._afterZoomOut})},changeIn:function(){var t,e=a.current,i=e.nextEffect,n=e.pos,s={opacity:1},o=a.direction;n.opacity=.1,"elastic"===i&&(t="down"===o||"up"===o?"top":"left","down"===o||"right"===o?(n[t]=m(g(n[t])-200),s[t]="+=200px"):(n[t]=m(g(n[t])+200),s[t]="-=200px")),
// Workaround for http://bugs.jquery.com/ticket/12273
"none"===i?a._afterZoomIn():a.wrap.css(n).animate(s,{duration:e.nextSpeed,easing:e.nextEasing,complete:a._afterZoomIn})},changeOut:function(){var t=a.previous,e=t.prevEffect,n={opacity:.1},s=a.direction;"elastic"===e&&(n["down"===s||"up"===s?"top":"left"]=("up"===s||"left"===s?"-":"+")+"=200px"),t.wrap.animate(n,{duration:"none"===e?0:t.prevSpeed,easing:t.prevEasing,complete:function(){i(this).trigger("onReset").remove()}})}},/*
  *	Overlay helper
  */
a.helpers.overlay={defaults:{closeClick:!0,// if true, fancyBox will be closed when user clicks on the overlay
speedOut:200,// duration of fadeOut animation
showEarly:!0,// indicates if should be opened immediately or wait until the content is ready
css:{},// custom CSS properties
locked:!c,// if true, the content will be locked into overlay
fixed:!0},overlay:null,// current handle
fixed:!1,// indicates if the overlay has position "fixed"
el:i("html"),// element that contains "the lock"
// Public methods
create:function(t){var e;t=i.extend({},this.defaults,t),this.overlay&&this.close(),e=a.coming?a.coming.parent:t.parent,this.overlay=i('<div class="fancybox-overlay"></div>').appendTo(e&&e.length?e:"body"),this.fixed=!1,t.fixed&&a.defaults.fixed&&(this.overlay.addClass("fancybox-overlay-fixed"),this.fixed=!0)},open:function(t){var e=this;t=i.extend({},this.defaults,t),this.overlay?this.overlay.unbind(".overlay").width("auto").height("auto"):this.create(t),this.fixed||(o.bind("resize.overlay",i.proxy(this.update,this)),this.update()),t.closeClick&&this.overlay.bind("click.overlay",function(t){if(i(t.target).hasClass("fancybox-overlay"))return a.isActive?a.close():e.close(),!1}),this.overlay.css(t.css).show()},close:function(){o.unbind("resize.overlay"),this.el.hasClass("fancybox-lock")&&(i(".fancybox-margin").removeClass("fancybox-margin"),this.el.removeClass("fancybox-lock"),o.scrollTop(this.scrollV).scrollLeft(this.scrollH)),i(".fancybox-overlay").remove().hide(),i.extend(this,{overlay:null,fixed:!1})},
// Private, callbacks
update:function(){var t,i="100%";
// Reset width/height so it will not mess
this.overlay.width(i).height("100%"),
// jQuery does not return reliable result for IE
l?(t=Math.max(e.documentElement.offsetWidth,e.body.offsetWidth),r.width()>t&&(i=r.width())):r.width()>o.width()&&(i=r.width()),this.overlay.width(i).height(r.height())},
// This is where we can manipulate DOM, because later it would cause iframes to reload
onReady:function(t,e){var n=this.overlay;i(".fancybox-overlay").stop(!0,!0),n||this.create(t),t.locked&&this.fixed&&e.fixed&&(e.locked=this.overlay.append(e.wrap),e.fixed=!1),!0===t.showEarly&&this.beforeShow.apply(this,arguments)},beforeShow:function(t,e){e.locked&&!this.el.hasClass("fancybox-lock")&&(!1!==this.fixPosition&&i("*").filter(function(){return"fixed"===i(this).css("position")&&!i(this).hasClass("fancybox-overlay")&&!i(this).hasClass("fancybox-wrap")}).addClass("fancybox-margin"),this.el.addClass("fancybox-margin"),this.scrollV=o.scrollTop(),this.scrollH=o.scrollLeft(),this.el.addClass("fancybox-lock"),o.scrollTop(this.scrollV).scrollLeft(this.scrollH)),this.open(t)},onUpdate:function(){this.fixed||this.update()},afterClose:function(t){
// Remove overlay if exists and fancyBox is not opening
// (e.g., it is not being open using afterClose callback)
this.overlay&&!a.coming&&this.overlay.fadeOut(t.speedOut,i.proxy(this.close,this))}},/*
  *	Title helper
  */
a.helpers.title={defaults:{type:"float",// 'float', 'inside', 'outside' or 'over',
position:"bottom"},beforeShow:function(t){var e,n,s=a.current,o=s.title,r=t.type;if(i.isFunction(o)&&(o=o.call(s.element,s)),d(o)&&""!==i.trim(o)){switch(e=i('<div class="fancybox-title fancybox-title-'+r+'-wrap">'+o+"</div>"),r){case"inside":n=a.skin;break;case"outside":n=a.wrap;break;case"over":n=a.inner;break;default:
// 'float'
n=a.skin,e.appendTo("body"),l&&e.width(e.width()),e.wrapInner('<span class="child"></span>'),
//Increase bottom margin so this title will also fit into viewport
a.current.margin[2]+=Math.abs(g(e.css("margin-bottom")))}e["top"===t.position?"prependTo":"appendTo"](n)}}},
// jQuery plugin initialization
i.fn.fancybox=function(t){var e,n=i(this),s=this.selector||"",o=function(o){var r,l,h=i(this).blur(),c=e;o.ctrlKey||o.altKey||o.shiftKey||o.metaKey||h.is(".fancybox-wrap")||(r=t.groupAttr||"data-fancybox-group",l=h.attr(r),l||(r="rel",l=h.get(0)[r]),l&&""!==l&&"nofollow"!==l&&(h=s.length?i(s):n,h=h.filter("["+r+'="'+l+'"]'),c=h.index(this)),t.index=c,
// Stop an event from bubbling if everything is fine
!1!==a.open(h,t)&&o.preventDefault())};return t=t||{},e=t.index||0,s&&!1!==t.live?r.undelegate(s,"click.fb-start").delegate(s+":not('.fancybox-item, .fancybox-nav')","click.fb-start",o):n.unbind("click.fb-start").bind("click.fb-start",o),this.filter("[data-fancybox-start=1]").trigger("click"),this},
// Tests that need a body at doc ready
r.ready(function(){var e,n;void 0===i.scrollbarWidth&&(
// http://benalman.com/projects/jquery-misc-plugins/#scrollbarwidth
i.scrollbarWidth=function(){var t=i('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"),e=t.children(),n=e.innerWidth()-e.height(99).innerWidth();return t.remove(),n}),void 0===i.support.fixedPosition&&(i.support.fixedPosition=function(){var t=i('<div style="position:fixed;top:20px;"></div>').appendTo("body"),e=20===t[0].offsetTop||15===t[0].offsetTop;return t.remove(),e}()),i.extend(a.defaults,{scrollbarWidth:i.scrollbarWidth(),fixed:i.support.fixedPosition,parent:i("body")}),
//Get real width of page scroll-bar
e=i(t).width(),s.addClass("fancybox-lock-test"),n=i(t).width(),s.removeClass("fancybox-lock-test"),i("<style type='text/css'>.fancybox-margin{margin-right:"+(n-e)+"px;}</style>").appendTo("head")})}(window,document,jQuery)},/* 12 */
/***/
function(t,e,i){"use strict";!function(t,e,i,n){/**
  * Creates a carousel.
  * @class The Owl Carousel.
  * @public
  * @param {HTMLElement|jQuery} element - The element to create the carousel for.
  * @param {Object} [options] - The options
  */
function s(e,i){/**
   * Current settings for the carousel.
   * @public
   */
this.settings=null,/**
   * Current options set by the caller including defaults.
   * @public
   */
this.options=t.extend({},s.Defaults,i),/**
   * Plugin element.
   * @public
   */
this.$element=t(e),/**
   * Proxied event handlers.
   * @protected
   */
this._handlers={},/**
   * References to the running plugins of this carousel.
   * @protected
   */
this._plugins={},/**
   * Currently suppressed events to prevent them from being retriggered.
   * @protected
   */
this._supress={},/**
   * Absolute current position.
   * @protected
   */
this._current=null,/**
   * Animation speed in milliseconds.
   * @protected
   */
this._speed=null,/**
   * Coordinates of all items in pixel.
   * @todo The name of this member is missleading.
   * @protected
   */
this._coordinates=[],/**
   * Current breakpoint.
   * @todo Real media queries would be nice.
   * @protected
   */
this._breakpoint=null,/**
   * Current width of the plugin element.
   */
this._width=null,/**
   * All real items.
   * @protected
   */
this._items=[],/**
   * All cloned items.
   * @protected
   */
this._clones=[],/**
   * Merge values of all items.
   * @todo Maybe this could be part of a plugin.
   * @protected
   */
this._mergers=[],/**
   * Widths of all items.
   */
this._widths=[],/**
   * Invalidated parts within the update process.
   * @protected
   */
this._invalidated={},/**
   * Ordered list of workers for the update process.
   * @protected
   */
this._pipe=[],/**
   * Current state information for the drag operation.
   * @todo #261
   * @protected
   */
this._drag={time:null,target:null,pointer:null,stage:{start:null,current:null},direction:null},/**
   * Current state information and their tags.
   * @type {Object}
   * @protected
   */
this._states={current:{},tags:{initializing:["busy"],animating:["busy"],dragging:["interacting"]}},t.each(["onResize","onThrottledResize"],t.proxy(function(e,i){this._handlers[i]=t.proxy(this[i],this)},this)),t.each(s.Plugins,t.proxy(function(t,e){this._plugins[t.charAt(0).toLowerCase()+t.slice(1)]=new e(this)},this)),t.each(s.Workers,t.proxy(function(e,i){this._pipe.push({filter:i.filter,run:t.proxy(i.run,this)})},this)),this.setup(),this.initialize()}/**
  * Default options for the carousel.
  * @public
  */
s.Defaults={items:3,loop:!1,center:!1,rewind:!1,checkVisibility:!0,mouseDrag:!0,touchDrag:!0,pullDrag:!0,freeDrag:!1,margin:0,stagePadding:0,merge:!1,mergeFit:!0,autoWidth:!1,startPosition:0,rtl:!1,smartSpeed:250,fluidSpeed:!1,dragEndSpeed:!1,responsive:{},responsiveRefreshRate:200,responsiveBaseElement:e,fallbackEasing:"swing",slideTransition:"",info:!1,nestedItemSelector:!1,itemElement:"div",stageElement:"div",refreshClass:"owl-refresh",loadedClass:"owl-loaded",loadingClass:"owl-loading",rtlClass:"owl-rtl",responsiveClass:"owl-responsive",dragClass:"owl-drag",itemClass:"owl-item",stageClass:"owl-stage",stageOuterClass:"owl-stage-outer",grabClass:"owl-grab"},/**
  * Enumeration for width.
  * @public
  * @readonly
  * @enum {String}
  */
s.Width={Default:"default",Inner:"inner",Outer:"outer"},/**
  * Enumeration for types.
  * @public
  * @readonly
  * @enum {String}
  */
s.Type={Event:"event",State:"state"},/**
  * Contains all registered plugins.
  * @public
  */
s.Plugins={},/**
  * List of workers involved in the update process.
  */
s.Workers=[{filter:["width","settings"],run:function(){this._width=this.$element.width()}},{filter:["width","items","settings"],run:function(t){t.current=this._items&&this._items[this.relative(this._current)]}},{filter:["items","settings"],run:function(){this.$stage.children(".cloned").remove()}},{filter:["width","items","settings"],run:function(t){var e=this.settings.margin||"",i=!this.settings.autoWidth,n=this.settings.rtl,s={width:"auto","margin-left":n?e:"","margin-right":n?"":e};!i&&this.$stage.children().css(s),t.css=s}},{filter:["width","items","settings"],run:function(t){var e=(this.width()/this.settings.items).toFixed(3)-this.settings.margin,i=null,n=this._items.length,s=!this.settings.autoWidth,o=[];for(t.items={merge:!1,width:e};n--;)i=this._mergers[n],i=this.settings.mergeFit&&Math.min(i,this.settings.items)||i,t.items.merge=i>1||t.items.merge,o[n]=s?e*i:this._items[n].width();this._widths=o}},{filter:["items","settings"],run:function(){var e=[],i=this._items,n=this.settings,
// TODO: Should be computed from number of min width items in stage
s=Math.max(2*n.items,4),o=2*Math.ceil(i.length/2),r=n.loop&&i.length?n.rewind?s:Math.max(s,o):0,a="",l="";for(r/=2;r>0;)
// Switch to only using appended clones
e.push(this.normalize(e.length/2,!0)),a+=i[e[e.length-1]][0].outerHTML,e.push(this.normalize(i.length-1-(e.length-1)/2,!0)),l=i[e[e.length-1]][0].outerHTML+l,r-=1;this._clones=e,t(a).addClass("cloned").appendTo(this.$stage),t(l).addClass("cloned").prependTo(this.$stage)}},{filter:["width","items","settings"],run:function(){for(var t=this.settings.rtl?1:-1,e=this._clones.length+this._items.length,i=-1,n=0,s=0,o=[];++i<e;)n=o[i-1]||0,s=this._widths[this.relative(i)]+this.settings.margin,o.push(n+s*t);this._coordinates=o}},{filter:["width","items","settings"],run:function(){var t=this.settings.stagePadding,e=this._coordinates,i={width:Math.ceil(Math.abs(e[e.length-1]))+2*t,"padding-left":t||"","padding-right":t||""};this.$stage.css(i)}},{filter:["width","items","settings"],run:function(t){var e=this._coordinates.length,i=!this.settings.autoWidth,n=this.$stage.children();if(i&&t.items.merge)for(;e--;)t.css.width=this._widths[this.relative(e)],n.eq(e).css(t.css);else i&&(t.css.width=t.items.width,n.css(t.css))}},{filter:["items"],run:function(){this._coordinates.length<1&&this.$stage.removeAttr("style")}},{filter:["width","items","settings"],run:function(t){t.current=t.current?this.$stage.children().index(t.current):0,t.current=Math.max(this.minimum(),Math.min(this.maximum(),t.current)),this.reset(t.current)}},{filter:["position"],run:function(){this.animate(this.coordinates(this._current))}},{filter:["width","position","items","settings"],run:function(){var t,e,i,n,s=this.settings.rtl?1:-1,o=2*this.settings.stagePadding,r=this.coordinates(this.current())+o,a=r+this.width()*s,l=[];for(i=0,n=this._coordinates.length;i<n;i++)t=this._coordinates[i-1]||0,e=Math.abs(this._coordinates[i])+o*s,(this.op(t,"<=",r)&&this.op(t,">",a)||this.op(e,"<",r)&&this.op(e,">",a))&&l.push(i);this.$stage.children(".active").removeClass("active"),this.$stage.children(":eq("+l.join("), :eq(")+")").addClass("active"),this.$stage.children(".center").removeClass("center"),this.settings.center&&this.$stage.children().eq(this.current()).addClass("center")}}],/**
  * Create the stage DOM element
  */
s.prototype.initializeStage=function(){this.$stage=this.$element.find("."+this.settings.stageClass),
// if the stage is already in the DOM, grab it and skip stage initialization
this.$stage.length||(this.$element.addClass(this.options.loadingClass),
// create stage
this.$stage=t("<"+this.settings.stageElement+">",{class:this.settings.stageClass}).wrap(t("<div/>",{class:this.settings.stageOuterClass})),
// append stage
this.$element.append(this.$stage.parent()))},/**
  * Create item DOM elements
  */
s.prototype.initializeItems=function(){var e=this.$element.find(".owl-item");
// if the items are already in the DOM, grab them and skip item initialization
if(e.length)return this._items=e.get().map(function(e){return t(e)}),this._mergers=this._items.map(function(){return 1}),void this.refresh();
// append content
this.replace(this.$element.children().not(this.$stage.parent())),
// check visibility
this.isVisible()?
// update view
this.refresh():
// invalidate width
this.invalidate("width"),this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass)},/**
  * Initializes the carousel.
  * @protected
  */
s.prototype.initialize=function(){if(this.enter("initializing"),this.trigger("initialize"),this.$element.toggleClass(this.settings.rtlClass,this.settings.rtl),this.settings.autoWidth&&!this.is("pre-loading")){var t,e,i;t=this.$element.find("img"),e=this.settings.nestedItemSelector?"."+this.settings.nestedItemSelector:void 0,i=this.$element.children(e).width(),t.length&&i<=0&&this.preloadAutoWidthImages(t)}this.initializeStage(),this.initializeItems(),
// register event handlers
this.registerEventHandlers(),this.leave("initializing"),this.trigger("initialized")},/**
  * @returns {Boolean} visibility of $element
  *                    if you know the carousel will always be visible you can set `checkVisibility` to `false` to
  *                    prevent the expensive browser layout forced reflow the $element.is(':visible') does
  */
s.prototype.isVisible=function(){return!this.settings.checkVisibility||this.$element.is(":visible")},/**
  * Setups the current settings.
  * @todo Remove responsive classes. Why should adaptive designs be brought into IE8?
  * @todo Support for media queries by using `matchMedia` would be nice.
  * @public
  */
s.prototype.setup=function(){var e=this.viewport(),i=this.options.responsive,n=-1,s=null;i?(t.each(i,function(t){t<=e&&t>n&&(n=Number(t))}),s=t.extend({},this.options,i[n]),"function"==typeof s.stagePadding&&(s.stagePadding=s.stagePadding()),delete s.responsive,
// responsive class
s.responsiveClass&&this.$element.attr("class",this.$element.attr("class").replace(new RegExp("("+this.options.responsiveClass+"-)\\S+\\s","g"),"$1"+n))):s=t.extend({},this.options),this.trigger("change",{property:{name:"settings",value:s}}),this._breakpoint=n,this.settings=s,this.invalidate("settings"),this.trigger("changed",{property:{name:"settings",value:this.settings}})},/**
  * Updates option logic if necessery.
  * @protected
  */
s.prototype.optionsLogic=function(){this.settings.autoWidth&&(this.settings.stagePadding=!1,this.settings.merge=!1)},/**
  * Prepares an item before add.
  * @todo Rename event parameter `content` to `item`.
  * @protected
  * @returns {jQuery|HTMLElement} - The item container.
  */
s.prototype.prepare=function(e){var i=this.trigger("prepare",{content:e});return i.data||(i.data=t("<"+this.settings.itemElement+"/>").addClass(this.options.itemClass).append(e)),this.trigger("prepared",{content:i.data}),i.data},/**
  * Updates the view.
  * @public
  */
s.prototype.update=function(){for(var e=0,i=this._pipe.length,n=t.proxy(function(t){return this[t]},this._invalidated),s={};e<i;)(this._invalidated.all||t.grep(this._pipe[e].filter,n).length>0)&&this._pipe[e].run(s),e++;this._invalidated={},!this.is("valid")&&this.enter("valid")},/**
  * Gets the width of the view.
  * @public
  * @param {Owl.Width} [dimension=Owl.Width.Default] - The dimension to return.
  * @returns {Number} - The width of the view in pixel.
  */
s.prototype.width=function(t){switch(t=t||s.Width.Default){case s.Width.Inner:case s.Width.Outer:return this._width;default:return this._width-2*this.settings.stagePadding+this.settings.margin}},/**
  * Refreshes the carousel primarily for adaptive purposes.
  * @public
  */
s.prototype.refresh=function(){this.enter("refreshing"),this.trigger("refresh"),this.setup(),this.optionsLogic(),this.$element.addClass(this.options.refreshClass),this.update(),this.$element.removeClass(this.options.refreshClass),this.leave("refreshing"),this.trigger("refreshed")},/**
  * Checks window `resize` event.
  * @protected
  */
s.prototype.onThrottledResize=function(){e.clearTimeout(this.resizeTimer),this.resizeTimer=e.setTimeout(this._handlers.onResize,this.settings.responsiveRefreshRate)},/**
  * Checks window `resize` event.
  * @protected
  */
s.prototype.onResize=function(){return!!this._items.length&&(this._width!==this.$element.width()&&(!!this.isVisible()&&(this.enter("resizing"),this.trigger("resize").isDefaultPrevented()?(this.leave("resizing"),!1):(this.invalidate("width"),this.refresh(),this.leave("resizing"),void this.trigger("resized")))))},/**
  * Registers event handlers.
  * @todo Check `msPointerEnabled`
  * @todo #261
  * @protected
  */
s.prototype.registerEventHandlers=function(){t.support.transition&&this.$stage.on(t.support.transition.end+".owl.core",t.proxy(this.onTransitionEnd,this)),!1!==this.settings.responsive&&this.on(e,"resize",this._handlers.onThrottledResize),this.settings.mouseDrag&&(this.$element.addClass(this.options.dragClass),this.$stage.on("mousedown.owl.core",t.proxy(this.onDragStart,this)),this.$stage.on("dragstart.owl.core selectstart.owl.core",function(){return!1})),this.settings.touchDrag&&(this.$stage.on("touchstart.owl.core",t.proxy(this.onDragStart,this)),this.$stage.on("touchcancel.owl.core",t.proxy(this.onDragEnd,this)))},/**
  * Handles `touchstart` and `mousedown` events.
  * @todo Horizontal swipe threshold as option
  * @todo #261
  * @protected
  * @param {Event} event - The event arguments.
  */
s.prototype.onDragStart=function(e){var n=null;3!==e.which&&(t.support.transform?(n=this.$stage.css("transform").replace(/.*\(|\)| /g,"").split(","),n={x:n[16===n.length?12:4],y:n[16===n.length?13:5]}):(n=this.$stage.position(),n={x:this.settings.rtl?n.left+this.$stage.width()-this.width()+this.settings.margin:n.left,y:n.top}),this.is("animating")&&(t.support.transform?this.animate(n.x):this.$stage.stop(),this.invalidate("position")),this.$element.toggleClass(this.options.grabClass,"mousedown"===e.type),this.speed(0),this._drag.time=(new Date).getTime(),this._drag.target=t(e.target),this._drag.stage.start=n,this._drag.stage.current=n,this._drag.pointer=this.pointer(e),t(i).on("mouseup.owl.core touchend.owl.core",t.proxy(this.onDragEnd,this)),t(i).one("mousemove.owl.core touchmove.owl.core",t.proxy(function(e){var n=this.difference(this._drag.pointer,this.pointer(e));t(i).on("mousemove.owl.core touchmove.owl.core",t.proxy(this.onDragMove,this)),Math.abs(n.x)<Math.abs(n.y)&&this.is("valid")||(e.preventDefault(),this.enter("dragging"),this.trigger("drag"))},this)))},/**
  * Handles the `touchmove` and `mousemove` events.
  * @todo #261
  * @protected
  * @param {Event} event - The event arguments.
  */
s.prototype.onDragMove=function(t){var e=null,i=null,n=null,s=this.difference(this._drag.pointer,this.pointer(t)),o=this.difference(this._drag.stage.start,s);this.is("dragging")&&(t.preventDefault(),this.settings.loop?(e=this.coordinates(this.minimum()),i=this.coordinates(this.maximum()+1)-e,o.x=((o.x-e)%i+i)%i+e):(e=this.settings.rtl?this.coordinates(this.maximum()):this.coordinates(this.minimum()),i=this.settings.rtl?this.coordinates(this.minimum()):this.coordinates(this.maximum()),n=this.settings.pullDrag?-1*s.x/5:0,o.x=Math.max(Math.min(o.x,e+n),i+n)),this._drag.stage.current=o,this.animate(o.x))},/**
  * Handles the `touchend` and `mouseup` events.
  * @todo #261
  * @todo Threshold for click event
  * @protected
  * @param {Event} event - The event arguments.
  */
s.prototype.onDragEnd=function(e){var n=this.difference(this._drag.pointer,this.pointer(e)),s=this._drag.stage.current,o=n.x>0^this.settings.rtl?"left":"right";t(i).off(".owl.core"),this.$element.removeClass(this.options.grabClass),(0!==n.x&&this.is("dragging")||!this.is("valid"))&&(this.speed(this.settings.dragEndSpeed||this.settings.smartSpeed),this.current(this.closest(s.x,0!==n.x?o:this._drag.direction)),this.invalidate("position"),this.update(),this._drag.direction=o,(Math.abs(n.x)>3||(new Date).getTime()-this._drag.time>300)&&this._drag.target.one("click.owl.core",function(){return!1})),this.is("dragging")&&(this.leave("dragging"),this.trigger("dragged"))},/**
  * Gets absolute position of the closest item for a coordinate.
  * @todo Setting `freeDrag` makes `closest` not reusable. See #165.
  * @protected
  * @param {Number} coordinate - The coordinate in pixel.
  * @param {String} direction - The direction to check for the closest item. Ether `left` or `right`.
  * @return {Number} - The absolute position of the closest item.
  */
s.prototype.closest=function(e,i){var n=-1,s=this.width(),o=this.coordinates();
// check closest item
// non loop boundries
return this.settings.freeDrag||t.each(o,t.proxy(function(t,r){
// on a left pull, check on current index
return"left"===i&&e>r-30&&e<r+30?n=t:"right"===i&&e>r-s-30&&e<r-s+30?n=t+1:this.op(e,"<",r)&&this.op(e,">",void 0!==o[t+1]?o[t+1]:r-s)&&(n="left"===i?t+1:t),-1===n},this)),this.settings.loop||(this.op(e,">",o[this.minimum()])?n=e=this.minimum():this.op(e,"<",o[this.maximum()])&&(n=e=this.maximum())),n},/**
  * Animates the stage.
  * @todo #270
  * @public
  * @param {Number} coordinate - The coordinate in pixels.
  */
s.prototype.animate=function(e){var i=this.speed()>0;this.is("animating")&&this.onTransitionEnd(),i&&(this.enter("animating"),this.trigger("translate")),t.support.transform3d&&t.support.transition?this.$stage.css({transform:"translate3d("+e+"px,0px,0px)",transition:this.speed()/1e3+"s"+(this.settings.slideTransition?" "+this.settings.slideTransition:"")}):i?this.$stage.animate({left:e+"px"},this.speed(),this.settings.fallbackEasing,t.proxy(this.onTransitionEnd,this)):this.$stage.css({left:e+"px"})},/**
  * Checks whether the carousel is in a specific state or not.
  * @param {String} state - The state to check.
  * @returns {Boolean} - The flag which indicates if the carousel is busy.
  */
s.prototype.is=function(t){return this._states.current[t]&&this._states.current[t]>0},/**
  * Sets the absolute position of the current item.
  * @public
  * @param {Number} [position] - The new absolute position or nothing to leave it unchanged.
  * @returns {Number} - The absolute position of the current item.
  */
s.prototype.current=function(t){if(void 0===t)return this._current;if(0!==this._items.length){if(t=this.normalize(t),this._current!==t){var e=this.trigger("change",{property:{name:"position",value:t}});void 0!==e.data&&(t=this.normalize(e.data)),this._current=t,this.invalidate("position"),this.trigger("changed",{property:{name:"position",value:this._current}})}return this._current}},/**
  * Invalidates the given part of the update routine.
  * @param {String} [part] - The part to invalidate.
  * @returns {Array.<String>} - The invalidated parts.
  */
s.prototype.invalidate=function(e){return"string"===t.type(e)&&(this._invalidated[e]=!0,this.is("valid")&&this.leave("valid")),t.map(this._invalidated,function(t,e){return e})},/**
  * Resets the absolute position of the current item.
  * @public
  * @param {Number} position - The absolute position of the new item.
  */
s.prototype.reset=function(t){void 0!==(t=this.normalize(t))&&(this._speed=0,this._current=t,this.suppress(["translate","translated"]),this.animate(this.coordinates(t)),this.release(["translate","translated"]))},/**
  * Normalizes an absolute or a relative position of an item.
  * @public
  * @param {Number} position - The absolute or relative position to normalize.
  * @param {Boolean} [relative=false] - Whether the given position is relative or not.
  * @returns {Number} - The normalized position.
  */
s.prototype.normalize=function(t,e){var i=this._items.length,n=e?0:this._clones.length;return!this.isNumeric(t)||i<1?t=void 0:(t<0||t>=i+n)&&(t=((t-n/2)%i+i)%i+n/2),t},/**
  * Converts an absolute position of an item into a relative one.
  * @public
  * @param {Number} position - The absolute position to convert.
  * @returns {Number} - The converted position.
  */
s.prototype.relative=function(t){return t-=this._clones.length/2,this.normalize(t,!0)},/**
  * Gets the maximum position for the current item.
  * @public
  * @param {Boolean} [relative=false] - Whether to return an absolute position or a relative position.
  * @returns {Number}
  */
s.prototype.maximum=function(t){var e,i,n,s=this.settings,o=this._coordinates.length;if(s.loop)o=this._clones.length/2+this._items.length-1;else if(s.autoWidth||s.merge){if(e=this._items.length)for(i=this._items[--e].width(),n=this.$element.width();e--&&!((i+=this._items[e].width()+this.settings.margin)>n););o=e+1}else o=s.center?this._items.length-1:this._items.length-s.items;return t&&(o-=this._clones.length/2),Math.max(o,0)},/**
  * Gets the minimum position for the current item.
  * @public
  * @param {Boolean} [relative=false] - Whether to return an absolute position or a relative position.
  * @returns {Number}
  */
s.prototype.minimum=function(t){return t?0:this._clones.length/2},/**
  * Gets an item at the specified relative position.
  * @public
  * @param {Number} [position] - The relative position of the item.
  * @return {jQuery|Array.<jQuery>} - The item at the given position or all items if no position was given.
  */
s.prototype.items=function(t){return void 0===t?this._items.slice():(t=this.normalize(t,!0),this._items[t])},/**
  * Gets an item at the specified relative position.
  * @public
  * @param {Number} [position] - The relative position of the item.
  * @return {jQuery|Array.<jQuery>} - The item at the given position or all items if no position was given.
  */
s.prototype.mergers=function(t){return void 0===t?this._mergers.slice():(t=this.normalize(t,!0),this._mergers[t])},/**
  * Gets the absolute positions of clones for an item.
  * @public
  * @param {Number} [position] - The relative position of the item.
  * @returns {Array.<Number>} - The absolute positions of clones for the item or all if no position was given.
  */
s.prototype.clones=function(e){var i=this._clones.length/2,n=i+this._items.length,s=function(t){return t%2==0?n+t/2:i-(t+1)/2};return void 0===e?t.map(this._clones,function(t,e){return s(e)}):t.map(this._clones,function(t,i){return t===e?s(i):null})},/**
  * Sets the current animation speed.
  * @public
  * @param {Number} [speed] - The animation speed in milliseconds or nothing to leave it unchanged.
  * @returns {Number} - The current animation speed in milliseconds.
  */
s.prototype.speed=function(t){return void 0!==t&&(this._speed=t),this._speed},/**
  * Gets the coordinate of an item.
  * @todo The name of this method is missleanding.
  * @public
  * @param {Number} position - The absolute position of the item within `minimum()` and `maximum()`.
  * @returns {Number|Array.<Number>} - The coordinate of the item in pixel or all coordinates.
  */
s.prototype.coordinates=function(e){var i,n=1,s=e-1;return void 0===e?t.map(this._coordinates,t.proxy(function(t,e){return this.coordinates(e)},this)):(this.settings.center?(this.settings.rtl&&(n=-1,s=e+1),i=this._coordinates[e],i+=(this.width()-i+(this._coordinates[s]||0))/2*n):i=this._coordinates[s]||0,i=Math.ceil(i))},/**
  * Calculates the speed for a translation.
  * @protected
  * @param {Number} from - The absolute position of the start item.
  * @param {Number} to - The absolute position of the target item.
  * @param {Number} [factor=undefined] - The time factor in milliseconds.
  * @returns {Number} - The time in milliseconds for the translation.
  */
s.prototype.duration=function(t,e,i){return 0===i?0:Math.min(Math.max(Math.abs(e-t),1),6)*Math.abs(i||this.settings.smartSpeed)},/**
  * Slides to the specified item.
  * @public
  * @param {Number} position - The position of the item.
  * @param {Number} [speed] - The time in milliseconds for the transition.
  */
s.prototype.to=function(t,e){var i=this.current(),n=null,s=t-this.relative(i),o=(s>0)-(s<0),r=this._items.length,a=this.minimum(),l=this.maximum();this.settings.loop?(!this.settings.rewind&&Math.abs(s)>r/2&&(s+=-1*o*r),t=i+s,(n=((t-a)%r+r)%r+a)!==t&&n-s<=l&&n-s>0&&(i=n-s,t=n,this.reset(i))):this.settings.rewind?(l+=1,t=(t%l+l)%l):t=Math.max(a,Math.min(l,t)),this.speed(this.duration(i,t,e)),this.current(t),this.isVisible()&&this.update()},/**
  * Slides to the next item.
  * @public
  * @param {Number} [speed] - The time in milliseconds for the transition.
  */
s.prototype.next=function(t){t=t||!1,this.to(this.relative(this.current())+1,t)},/**
  * Slides to the previous item.
  * @public
  * @param {Number} [speed] - The time in milliseconds for the transition.
  */
s.prototype.prev=function(t){t=t||!1,this.to(this.relative(this.current())-1,t)},/**
  * Handles the end of an animation.
  * @protected
  * @param {Event} event - The event arguments.
  */
s.prototype.onTransitionEnd=function(t){
// if css2 animation then event object is undefined
if(void 0!==t&&(t.stopPropagation(),(t.target||t.srcElement||t.originalTarget)!==this.$stage.get(0)))return!1;this.leave("animating"),this.trigger("translated")},/**
  * Gets viewport width.
  * @protected
  * @return {Number} - The width in pixel.
  */
s.prototype.viewport=function(){var n;return this.options.responsiveBaseElement!==e?n=t(this.options.responsiveBaseElement).width():e.innerWidth?n=e.innerWidth:i.documentElement&&i.documentElement.clientWidth&&(n=i.documentElement.clientWidth),n},/**
  * Replaces the current content.
  * @public
  * @param {HTMLElement|jQuery|String} content - The new content.
  */
s.prototype.replace=function(e){this.$stage.empty(),this._items=[],e&&(e=e instanceof jQuery?e:t(e)),this.settings.nestedItemSelector&&(e=e.find("."+this.settings.nestedItemSelector)),e.filter(function(){return 1===this.nodeType}).each(t.proxy(function(t,e){e=this.prepare(e),this.$stage.append(e),this._items.push(e),this._mergers.push(1*e.find("[data-merge]").addBack("[data-merge]").attr("data-merge")||1)},this)),this.reset(this.isNumeric(this.settings.startPosition)?this.settings.startPosition:0),this.invalidate("items")},/**
  * Adds an item.
  * @todo Use `item` instead of `content` for the event arguments.
  * @public
  * @param {HTMLElement|jQuery|String} content - The item content to add.
  * @param {Number} [position] - The relative position at which to insert the item otherwise the item will be added to the end.
  */
s.prototype.add=function(e,i){var n=this.relative(this._current);i=void 0===i?this._items.length:this.normalize(i,!0),e=e instanceof jQuery?e:t(e),this.trigger("add",{content:e,position:i}),e=this.prepare(e),0===this._items.length||i===this._items.length?(0===this._items.length&&this.$stage.append(e),0!==this._items.length&&this._items[i-1].after(e),this._items.push(e),this._mergers.push(1*e.find("[data-merge]").addBack("[data-merge]").attr("data-merge")||1)):(this._items[i].before(e),this._items.splice(i,0,e),this._mergers.splice(i,0,1*e.find("[data-merge]").addBack("[data-merge]").attr("data-merge")||1)),this._items[n]&&this.reset(this._items[n].index()),this.invalidate("items"),this.trigger("added",{content:e,position:i})},/**
  * Removes an item by its position.
  * @todo Use `item` instead of `content` for the event arguments.
  * @public
  * @param {Number} position - The relative position of the item to remove.
  */
s.prototype.remove=function(t){void 0!==(t=this.normalize(t,!0))&&(this.trigger("remove",{content:this._items[t],position:t}),this._items[t].remove(),this._items.splice(t,1),this._mergers.splice(t,1),this.invalidate("items"),this.trigger("removed",{content:null,position:t}))},/**
  * Preloads images with auto width.
  * @todo Replace by a more generic approach
  * @protected
  */
s.prototype.preloadAutoWidthImages=function(e){e.each(t.proxy(function(e,i){this.enter("pre-loading"),i=t(i),t(new Image).one("load",t.proxy(function(t){i.attr("src",t.target.src),i.css("opacity",1),this.leave("pre-loading"),!this.is("pre-loading")&&!this.is("initializing")&&this.refresh()},this)).attr("src",i.attr("src")||i.attr("data-src")||i.attr("data-src-retina"))},this))},/**
  * Destroys the carousel.
  * @public
  */
s.prototype.destroy=function(){this.$element.off(".owl.core"),this.$stage.off(".owl.core"),t(i).off(".owl.core"),!1!==this.settings.responsive&&(e.clearTimeout(this.resizeTimer),this.off(e,"resize",this._handlers.onThrottledResize));for(var n in this._plugins)this._plugins[n].destroy();this.$stage.children(".cloned").remove(),this.$stage.unwrap(),this.$stage.children().contents().unwrap(),this.$stage.children().unwrap(),this.$stage.remove(),this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class",this.$element.attr("class").replace(new RegExp(this.options.responsiveClass+"-\\S+\\s","g"),"")).removeData("owl.carousel")},/**
  * Operators to calculate right-to-left and left-to-right.
  * @protected
  * @param {Number} [a] - The left side operand.
  * @param {String} [o] - The operator.
  * @param {Number} [b] - The right side operand.
  */
s.prototype.op=function(t,e,i){var n=this.settings.rtl;switch(e){case"<":return n?t>i:t<i;case">":return n?t<i:t>i;case">=":return n?t<=i:t>=i;case"<=":return n?t>=i:t<=i}},/**
  * Attaches to an internal event.
  * @protected
  * @param {HTMLElement} element - The event source.
  * @param {String} event - The event name.
  * @param {Function} listener - The event handler to attach.
  * @param {Boolean} capture - Wether the event should be handled at the capturing phase or not.
  */
s.prototype.on=function(t,e,i,n){t.addEventListener?t.addEventListener(e,i,n):t.attachEvent&&t.attachEvent("on"+e,i)},/**
  * Detaches from an internal event.
  * @protected
  * @param {HTMLElement} element - The event source.
  * @param {String} event - The event name.
  * @param {Function} listener - The attached event handler to detach.
  * @param {Boolean} capture - Wether the attached event handler was registered as a capturing listener or not.
  */
s.prototype.off=function(t,e,i,n){t.removeEventListener?t.removeEventListener(e,i,n):t.detachEvent&&t.detachEvent("on"+e,i)},/**
  * Triggers a public event.
  * @todo Remove `status`, `relatedTarget` should be used instead.
  * @protected
  * @param {String} name - The event name.
  * @param {*} [data=null] - The event data.
  * @param {String} [namespace=carousel] - The event namespace.
  * @param {String} [state] - The state which is associated with the event.
  * @param {Boolean} [enter=false] - Indicates if the call enters the specified state or not.
  * @returns {Event} - The event arguments.
  */
s.prototype.trigger=function(e,i,n,o,r){var a={item:{count:this._items.length,index:this.current()}},l=t.camelCase(t.grep(["on",e,n],function(t){return t}).join("-").toLowerCase()),h=t.Event([e,"owl",n||"carousel"].join(".").toLowerCase(),t.extend({relatedTarget:this},a,i));return this._supress[e]||(t.each(this._plugins,function(t,e){e.onTrigger&&e.onTrigger(h)}),this.register({type:s.Type.Event,name:e}),this.$element.trigger(h),this.settings&&"function"==typeof this.settings[l]&&this.settings[l].call(this,h)),h},/**
  * Enters a state.
  * @param name - The state name.
  */
s.prototype.enter=function(e){t.each([e].concat(this._states.tags[e]||[]),t.proxy(function(t,e){void 0===this._states.current[e]&&(this._states.current[e]=0),this._states.current[e]++},this))},/**
  * Leaves a state.
  * @param name - The state name.
  */
s.prototype.leave=function(e){t.each([e].concat(this._states.tags[e]||[]),t.proxy(function(t,e){this._states.current[e]--},this))},/**
  * Registers an event or state.
  * @public
  * @param {Object} object - The event or state to register.
  */
s.prototype.register=function(e){if(e.type===s.Type.Event){if(t.event.special[e.name]||(t.event.special[e.name]={}),!t.event.special[e.name].owl){var i=t.event.special[e.name]._default;t.event.special[e.name]._default=function(t){return!i||!i.apply||t.namespace&&-1!==t.namespace.indexOf("owl")?t.namespace&&t.namespace.indexOf("owl")>-1:i.apply(this,arguments)},t.event.special[e.name].owl=!0}}else e.type===s.Type.State&&(this._states.tags[e.name]?this._states.tags[e.name]=this._states.tags[e.name].concat(e.tags):this._states.tags[e.name]=e.tags,this._states.tags[e.name]=t.grep(this._states.tags[e.name],t.proxy(function(i,n){return t.inArray(i,this._states.tags[e.name])===n},this)))},/**
  * Suppresses events.
  * @protected
  * @param {Array.<String>} events - The events to suppress.
  */
s.prototype.suppress=function(e){t.each(e,t.proxy(function(t,e){this._supress[e]=!0},this))},/**
  * Releases suppressed events.
  * @protected
  * @param {Array.<String>} events - The events to release.
  */
s.prototype.release=function(e){t.each(e,t.proxy(function(t,e){delete this._supress[e]},this))},/**
  * Gets unified pointer coordinates from event.
  * @todo #261
  * @protected
  * @param {Event} - The `mousedown` or `touchstart` event.
  * @returns {Object} - Contains `x` and `y` coordinates of current pointer position.
  */
s.prototype.pointer=function(t){var i={x:null,y:null};return t=t.originalEvent||t||e.event,t=t.touches&&t.touches.length?t.touches[0]:t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:t,t.pageX?(i.x=t.pageX,i.y=t.pageY):(i.x=t.clientX,i.y=t.clientY),i},/**
  * Determines if the input is a Number or something that can be coerced to a Number
  * @protected
  * @param {Number|String|Object|Array|Boolean|RegExp|Function|Symbol} - The input to be tested
  * @returns {Boolean} - An indication if the input is a Number or can be coerced to a Number
  */
s.prototype.isNumeric=function(t){return!isNaN(parseFloat(t))},/**
  * Gets the difference of two vectors.
  * @todo #261
  * @protected
  * @param {Object} - The first vector.
  * @param {Object} - The second vector.
  * @returns {Object} - The difference.
  */
s.prototype.difference=function(t,e){return{x:t.x-e.x,y:t.y-e.y}},/**
  * The jQuery Plugin for the Owl Carousel
  * @todo Navigation plugin `next` and `prev`
  * @public
  */
t.fn.owlCarousel=function(e){var i=Array.prototype.slice.call(arguments,1);return this.each(function(){var n=t(this),o=n.data("owl.carousel");o||(o=new s(this,"object"==typeof e&&e),n.data("owl.carousel",o),t.each(["next","prev","to","destroy","refresh","replace","add","remove"],function(e,i){o.register({type:s.Type.Event,name:i}),o.$element.on(i+".owl.carousel.core",t.proxy(function(t){t.namespace&&t.relatedTarget!==this&&(this.suppress([i]),o[i].apply(this,[].slice.call(arguments,1)),this.release([i]))},o))})),"string"==typeof e&&"_"!==e.charAt(0)&&o[e].apply(o,i)})},/**
  * The constructor for the jQuery Plugin
  * @public
  */
t.fn.owlCarousel.Constructor=s}(window.Zepto||window.jQuery,window,document),function(t,e,i,n){/**
  * Creates the auto refresh plugin.
  * @class The Auto Refresh Plugin
  * @param {Owl} carousel - The Owl Carousel
  */
var s=function e(i){/**
   * Reference to the core.
   * @protected
   * @type {Owl}
   */
this._core=i,/**
   * Refresh interval.
   * @protected
   * @type {number}
   */
this._interval=null,/**
   * Whether the element is currently visible or not.
   * @protected
   * @type {Boolean}
   */
this._visible=null,/**
   * All event handlers.
   * @protected
   * @type {Object}
   */
this._handlers={"initialized.owl.carousel":t.proxy(function(t){t.namespace&&this._core.settings.autoRefresh&&this.watch()},this)},
// set default options
this._core.options=t.extend({},e.Defaults,this._core.options),
// register event handlers
this._core.$element.on(this._handlers)};/**
  * Default options.
  * @public
  */
s.Defaults={autoRefresh:!0,autoRefreshInterval:500},/**
  * Watches the element.
  */
s.prototype.watch=function(){this._interval||(this._visible=this._core.isVisible(),this._interval=e.setInterval(t.proxy(this.refresh,this),this._core.settings.autoRefreshInterval))},/**
  * Refreshes the element.
  */
s.prototype.refresh=function(){this._core.isVisible()!==this._visible&&(this._visible=!this._visible,this._core.$element.toggleClass("owl-hidden",!this._visible),this._visible&&this._core.invalidate("width")&&this._core.refresh())},/**
  * Destroys the plugin.
  */
s.prototype.destroy=function(){var t,i;e.clearInterval(this._interval);for(t in this._handlers)this._core.$element.off(t,this._handlers[t]);for(i in Object.getOwnPropertyNames(this))"function"!=typeof this[i]&&(this[i]=null)},t.fn.owlCarousel.Constructor.Plugins.AutoRefresh=s}(window.Zepto||window.jQuery,window,document),function(t,e,i,n){/**
  * Creates the lazy plugin.
  * @class The Lazy Plugin
  * @param {Owl} carousel - The Owl Carousel
  */
var s=function e(i){/**
   * Reference to the core.
   * @protected
   * @type {Owl}
   */
this._core=i,/**
   * Already loaded items.
   * @protected
   * @type {Array.<jQuery>}
   */
this._loaded=[],/**
   * Event handlers.
   * @protected
   * @type {Object}
   */
this._handlers={"initialized.owl.carousel change.owl.carousel resized.owl.carousel":t.proxy(function(e){if(e.namespace&&this._core.settings&&this._core.settings.lazyLoad&&(e.property&&"position"==e.property.name||"initialized"==e.type)){var i=this._core.settings,n=i.center&&Math.ceil(i.items/2)||i.items,s=i.center&&-1*n||0,o=(e.property&&void 0!==e.property.value?e.property.value:this._core.current())+s,r=this._core.clones().length,a=t.proxy(function(t,e){this.load(e)},this);for(
//TODO: Need documentation for this new option
i.lazyLoadEager>0&&(n+=i.lazyLoadEager,
// If the carousel is looping also preload images that are to the "left"
i.loop&&(o-=i.lazyLoadEager,n++));s++<n;)this.load(r/2+this._core.relative(o)),r&&t.each(this._core.clones(this._core.relative(o)),a),o++}},this)},
// set the default options
this._core.options=t.extend({},e.Defaults,this._core.options),
// register event handler
this._core.$element.on(this._handlers)};/**
  * Default options.
  * @public
  */
s.Defaults={lazyLoad:!1,lazyLoadEager:0},/**
  * Loads all resources of an item at the specified position.
  * @param {Number} position - The absolute position of the item.
  * @protected
  */
s.prototype.load=function(i){var n=this._core.$stage.children().eq(i),s=n&&n.find(".owl-lazy");!s||t.inArray(n.get(0),this._loaded)>-1||(s.each(t.proxy(function(i,n){var s,o=t(n),r=e.devicePixelRatio>1&&o.attr("data-src-retina")||o.attr("data-src")||o.attr("data-srcset");this._core.trigger("load",{element:o,url:r},"lazy"),o.is("img")?o.one("load.owl.lazy",t.proxy(function(){o.css("opacity",1),this._core.trigger("loaded",{element:o,url:r},"lazy")},this)).attr("src",r):o.is("source")?o.one("load.owl.lazy",t.proxy(function(){this._core.trigger("loaded",{element:o,url:r},"lazy")},this)).attr("srcset",r):(s=new Image,s.onload=t.proxy(function(){o.css({"background-image":'url("'+r+'")',opacity:"1"}),this._core.trigger("loaded",{element:o,url:r},"lazy")},this),s.src=r)},this)),this._loaded.push(n.get(0)))},/**
  * Destroys the plugin.
  * @public
  */
s.prototype.destroy=function(){var t,e;for(t in this.handlers)this._core.$element.off(t,this.handlers[t]);for(e in Object.getOwnPropertyNames(this))"function"!=typeof this[e]&&(this[e]=null)},t.fn.owlCarousel.Constructor.Plugins.Lazy=s}(window.Zepto||window.jQuery,window,document),function(t,e,i,n){/**
  * Creates the auto height plugin.
  * @class The Auto Height Plugin
  * @param {Owl} carousel - The Owl Carousel
  */
var s=function i(n){/**
   * Reference to the core.
   * @protected
   * @type {Owl}
   */
this._core=n,this._previousHeight=null,/**
   * All event handlers.
   * @protected
   * @type {Object}
   */
this._handlers={"initialized.owl.carousel refreshed.owl.carousel":t.proxy(function(t){t.namespace&&this._core.settings.autoHeight&&this.update()},this),"changed.owl.carousel":t.proxy(function(t){t.namespace&&this._core.settings.autoHeight&&"position"===t.property.name&&this.update()},this),"loaded.owl.lazy":t.proxy(function(t){t.namespace&&this._core.settings.autoHeight&&t.element.closest("."+this._core.settings.itemClass).index()===this._core.current()&&this.update()},this)},
// set default options
this._core.options=t.extend({},i.Defaults,this._core.options),
// register event handlers
this._core.$element.on(this._handlers),this._intervalId=null;var s=this;
// These changes have been taken from a PR by gavrochelegnou proposed in #1575
// and have been made compatible with the latest jQuery version
t(e).on("load",function(){s._core.settings.autoHeight&&s.update()}),
// Autoresize the height of the carousel when window is resized
// When carousel has images, the height is dependent on the width
// and should also change on resize
t(e).resize(function(){s._core.settings.autoHeight&&(null!=s._intervalId&&clearTimeout(s._intervalId),s._intervalId=setTimeout(function(){s.update()},250))})};/**
  * Default options.
  * @public
  */
s.Defaults={autoHeight:!1,autoHeightClass:"owl-height"},/**
  * Updates the view.
  */
s.prototype.update=function(){var e=this._core._current,i=e+this._core.settings.items,n=this._core.settings.lazyLoad,s=this._core.$stage.children().toArray().slice(e,i),o=[],r=0;t.each(s,function(e,i){o.push(t(i).height())}),r=Math.max.apply(null,o),r<=1&&n&&this._previousHeight&&(r=this._previousHeight),this._previousHeight=r,this._core.$stage.parent().height(r).addClass(this._core.settings.autoHeightClass)},s.prototype.destroy=function(){var t,e;for(t in this._handlers)this._core.$element.off(t,this._handlers[t]);for(e in Object.getOwnPropertyNames(this))"function"!=typeof this[e]&&(this[e]=null)},t.fn.owlCarousel.Constructor.Plugins.AutoHeight=s}(window.Zepto||window.jQuery,window,document),function(t,e,i,n){/**
  * Creates the video plugin.
  * @class The Video Plugin
  * @param {Owl} carousel - The Owl Carousel
  */
var s=function e(i){/**
   * Reference to the core.
   * @protected
   * @type {Owl}
   */
this._core=i,/**
   * Cache all video URLs.
   * @protected
   * @type {Object}
   */
this._videos={},/**
   * Current playing item.
   * @protected
   * @type {jQuery}
   */
this._playing=null,/**
   * All event handlers.
   * @todo The cloned content removale is too late
   * @protected
   * @type {Object}
   */
this._handlers={"initialized.owl.carousel":t.proxy(function(t){t.namespace&&this._core.register({type:"state",name:"playing",tags:["interacting"]})},this),"resize.owl.carousel":t.proxy(function(t){t.namespace&&this._core.settings.video&&this.isInFullScreen()&&t.preventDefault()},this),"refreshed.owl.carousel":t.proxy(function(t){t.namespace&&this._core.is("resizing")&&this._core.$stage.find(".cloned .owl-video-frame").remove()},this),"changed.owl.carousel":t.proxy(function(t){t.namespace&&"position"===t.property.name&&this._playing&&this.stop()},this),"prepared.owl.carousel":t.proxy(function(e){if(e.namespace){var i=t(e.content).find(".owl-video");i.length&&(i.css("display","none"),this.fetch(i,t(e.content)))}},this)},
// set default options
this._core.options=t.extend({},e.Defaults,this._core.options),
// register event handlers
this._core.$element.on(this._handlers),this._core.$element.on("click.owl.video",".owl-video-play-icon",t.proxy(function(t){this.play(t)},this))};/**
  * Default options.
  * @public
  */
s.Defaults={video:!1,videoHeight:!1,videoWidth:!1},/**
  * Gets the video ID and the type (YouTube/Vimeo/vzaar only).
  * @protected
  * @param {jQuery} target - The target containing the video data.
  * @param {jQuery} item - The item containing the video.
  */
s.prototype.fetch=function(t,e){var i=function(){return t.attr("data-vimeo-id")?"vimeo":t.attr("data-vzaar-id")?"vzaar":"youtube"}(),n=t.attr("data-vimeo-id")||t.attr("data-youtube-id")||t.attr("data-vzaar-id"),s=t.attr("data-width")||this._core.settings.videoWidth,o=t.attr("data-height")||this._core.settings.videoHeight,r=t.attr("href");if(!r)throw new Error("Missing video URL.");if(/*
   		Parses the id's out of the following urls (and probably more):
   		https://www.youtube.com/watch?v=:id
   		https://youtu.be/:id
   		https://vimeo.com/:id
   		https://vimeo.com/channels/:channel/:id
   		https://vimeo.com/groups/:group/videos/:id
   		https://app.vzaar.com/videos/:id
   			Visual example: https://regexper.com/#(http%3A%7Chttps%3A%7C)%5C%2F%5C%2F(player.%7Cwww.%7Capp.)%3F(vimeo%5C.com%7Cyoutu(be%5C.com%7C%5C.be%7Cbe%5C.googleapis%5C.com)%7Cvzaar%5C.com)%5C%2F(video%5C%2F%7Cvideos%5C%2F%7Cembed%5C%2F%7Cchannels%5C%2F.%2B%5C%2F%7Cgroups%5C%2F.%2B%5C%2F%7Cwatch%5C%3Fv%3D%7Cv%5C%2F)%3F(%5BA-Za-z0-9._%25-%5D*)(%5C%26%5CS%2B)%3F
   */
n=r.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com|be\-nocookie\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/),n[3].indexOf("youtu")>-1)i="youtube";else if(n[3].indexOf("vimeo")>-1)i="vimeo";else{if(!(n[3].indexOf("vzaar")>-1))throw new Error("Video URL not supported.");i="vzaar"}n=n[6],this._videos[r]={type:i,id:n,width:s,height:o},e.attr("data-video",r),this.thumbnail(t,this._videos[r])},/**
  * Creates video thumbnail.
  * @protected
  * @param {jQuery} target - The target containing the video data.
  * @param {Object} info - The video info object.
  * @see `fetch`
  */
s.prototype.thumbnail=function(e,i){var n,s,o,r=i.width&&i.height?"width:"+i.width+"px;height:"+i.height+"px;":"",a=e.find("img"),l="src",h="",c=this._core.settings,u=function(i){s='<div class="owl-video-play-icon"></div>',n=c.lazyLoad?t("<div/>",{class:"owl-video-tn "+h,srcType:i}):t("<div/>",{class:"owl-video-tn",style:"opacity:1;background-image:url("+i+")"}),e.after(n),e.after(s)};
// custom thumbnail
if(
// wrap video content into owl-video-wrapper div
e.wrap(t("<div/>",{class:"owl-video-wrapper",style:r})),this._core.settings.lazyLoad&&(l="data-src",h="owl-lazy"),a.length)return u(a.attr(l)),a.remove(),!1;"youtube"===i.type?(o="//img.youtube.com/vi/"+i.id+"/hqdefault.jpg",u(o)):"vimeo"===i.type?t.ajax({type:"GET",url:"//vimeo.com/api/v2/video/"+i.id+".json",jsonp:"callback",dataType:"jsonp",success:function(t){o=t[0].thumbnail_large,u(o)}}):"vzaar"===i.type&&t.ajax({type:"GET",url:"//vzaar.com/api/videos/"+i.id+".json",jsonp:"callback",dataType:"jsonp",success:function(t){o=t.framegrab_url,u(o)}})},/**
  * Stops the current video.
  * @public
  */
s.prototype.stop=function(){this._core.trigger("stop",null,"video"),this._playing.find(".owl-video-frame").remove(),this._playing.removeClass("owl-video-playing"),this._playing=null,this._core.leave("playing"),this._core.trigger("stopped",null,"video")},/**
  * Starts the current video.
  * @public
  * @param {Event} event - The event arguments.
  */
s.prototype.play=function(e){var i,n=t(e.target),s=n.closest("."+this._core.settings.itemClass),o=this._videos[s.attr("data-video")],r=o.width||"100%",a=o.height||this._core.$stage.height();this._playing||(this._core.enter("playing"),this._core.trigger("play",null,"video"),s=this._core.items(this._core.relative(s.index())),this._core.reset(s.index()),i=t('<iframe frameborder="0" allowfullscreen mozallowfullscreen webkitAllowFullScreen ></iframe>'),i.attr("height",a),i.attr("width",r),"youtube"===o.type?i.attr("src","//www.youtube.com/embed/"+o.id+"?autoplay=1&rel=0&v="+o.id):"vimeo"===o.type?i.attr("src","//player.vimeo.com/video/"+o.id+"?autoplay=1"):"vzaar"===o.type&&i.attr("src","//view.vzaar.com/"+o.id+"/player?autoplay=true"),t(i).wrap('<div class="owl-video-frame" />').insertAfter(s.find(".owl-video")),this._playing=s.addClass("owl-video-playing"))},/**
  * Checks whether an video is currently in full screen mode or not.
  * @todo Bad style because looks like a readonly method but changes members.
  * @protected
  * @returns {Boolean}
  */
s.prototype.isInFullScreen=function(){var e=i.fullscreenElement||i.mozFullScreenElement||i.webkitFullscreenElement;return e&&t(e).parent().hasClass("owl-video-frame")},/**
  * Destroys the plugin.
  */
s.prototype.destroy=function(){var t,e;this._core.$element.off("click.owl.video");for(t in this._handlers)this._core.$element.off(t,this._handlers[t]);for(e in Object.getOwnPropertyNames(this))"function"!=typeof this[e]&&(this[e]=null)},t.fn.owlCarousel.Constructor.Plugins.Video=s}(window.Zepto||window.jQuery,window,document),function(t,e,i,n){/**
  * Creates the animate plugin.
  * @class The Navigation Plugin
  * @param {Owl} scope - The Owl Carousel
  */
var s=function e(i){this.core=i,this.core.options=t.extend({},e.Defaults,this.core.options),this.swapping=!0,this.previous=void 0,this.next=void 0,this.handlers={"change.owl.carousel":t.proxy(function(t){t.namespace&&"position"==t.property.name&&(this.previous=this.core.current(),this.next=t.property.value)},this),"drag.owl.carousel dragged.owl.carousel translated.owl.carousel":t.proxy(function(t){t.namespace&&(this.swapping="translated"==t.type)},this),"translate.owl.carousel":t.proxy(function(t){t.namespace&&this.swapping&&(this.core.options.animateOut||this.core.options.animateIn)&&this.swap()},this)},this.core.$element.on(this.handlers)};/**
  * Default options.
  * @public
  */
s.Defaults={animateOut:!1,animateIn:!1},/**
  * Toggles the animation classes whenever an translations starts.
  * @protected
  * @returns {Boolean|undefined}
  */
s.prototype.swap=function(){if(1===this.core.settings.items&&t.support.animation&&t.support.transition){this.core.speed(0);var e,i=t.proxy(this.clear,this),n=this.core.$stage.children().eq(this.previous),s=this.core.$stage.children().eq(this.next),o=this.core.settings.animateIn,r=this.core.settings.animateOut;this.core.current()!==this.previous&&(r&&(e=this.core.coordinates(this.previous)-this.core.coordinates(this.next),n.one(t.support.animation.end,i).css({left:e+"px"}).addClass("animated owl-animated-out").addClass(r)),o&&s.one(t.support.animation.end,i).addClass("animated owl-animated-in").addClass(o))}},s.prototype.clear=function(e){t(e.target).css({left:""}).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut),this.core.onTransitionEnd()},/**
  * Destroys the plugin.
  * @public
  */
s.prototype.destroy=function(){var t,e;for(t in this.handlers)this.core.$element.off(t,this.handlers[t]);for(e in Object.getOwnPropertyNames(this))"function"!=typeof this[e]&&(this[e]=null)},t.fn.owlCarousel.Constructor.Plugins.Animate=s}(window.Zepto||window.jQuery,window,document),function(t,e,i,n){/**
  * Creates the autoplay plugin.
  * @class The Autoplay Plugin
  * @param {Owl} scope - The Owl Carousel
  */
var s=function e(i){/**
   * Reference to the core.
   * @protected
   * @type {Owl}
   */
this._core=i,/**
   * The autoplay timeout id.
   * @type {Number}
   */
this._call=null,/**
   * Depending on the state of the plugin, this variable contains either
   * the start time of the timer or the current timer value if it's
   * paused. Since we start in a paused state we initialize the timer
   * value.
   * @type {Number}
   */
this._time=0,/**
   * Stores the timeout currently used.
   * @type {Number}
   */
this._timeout=0,/**
   * Indicates whenever the autoplay is paused.
   * @type {Boolean}
   */
this._paused=!0,/**
   * All event handlers.
   * @protected
   * @type {Object}
   */
this._handlers={"changed.owl.carousel":t.proxy(function(t){t.namespace&&"settings"===t.property.name?this._core.settings.autoplay?this.play():this.stop():t.namespace&&"position"===t.property.name&&this._paused&&(
// Reset the timer. This code is triggered when the position
// of the carousel was changed through user interaction.
this._time=0)},this),"initialized.owl.carousel":t.proxy(function(t){t.namespace&&this._core.settings.autoplay&&this.play()},this),"play.owl.autoplay":t.proxy(function(t,e,i){t.namespace&&this.play(e,i)},this),"stop.owl.autoplay":t.proxy(function(t){t.namespace&&this.stop()},this),"mouseover.owl.autoplay":t.proxy(function(){this._core.settings.autoplayHoverPause&&this._core.is("rotating")&&this.pause()},this),"mouseleave.owl.autoplay":t.proxy(function(){this._core.settings.autoplayHoverPause&&this._core.is("rotating")&&this.play()},this),"touchstart.owl.core":t.proxy(function(){this._core.settings.autoplayHoverPause&&this._core.is("rotating")&&this.pause()},this),"touchend.owl.core":t.proxy(function(){this._core.settings.autoplayHoverPause&&this.play()},this)},
// register event handlers
this._core.$element.on(this._handlers),
// set default options
this._core.options=t.extend({},e.Defaults,this._core.options)};/**
  * Default options.
  * @public
  */
s.Defaults={autoplay:!1,autoplayTimeout:5e3,autoplayHoverPause:!1,autoplaySpeed:!1},/**
  * Transition to the next slide and set a timeout for the next transition.
  * @private
  * @param {Number} [speed] - The animation speed for the animations.
  */
s.prototype._next=function(n){this._call=e.setTimeout(t.proxy(this._next,this,n),this._timeout*(Math.round(this.read()/this._timeout)+1)-this.read()),this._core.is("interacting")||i.hidden||this._core.next(n||this._core.settings.autoplaySpeed)},/**
  * Reads the current timer value when the timer is playing.
  * @public
  */
s.prototype.read=function(){return(new Date).getTime()-this._time},/**
  * Starts the autoplay.
  * @public
  * @param {Number} [timeout] - The interval before the next animation starts.
  * @param {Number} [speed] - The animation speed for the animations.
  */
s.prototype.play=function(i,n){var s;this._core.is("rotating")||this._core.enter("rotating"),i=i||this._core.settings.autoplayTimeout,
// Calculate the elapsed time since the last transition. If the carousel
// wasn't playing this calculation will yield zero.
s=Math.min(this._time%(this._timeout||i),i),this._paused?(
// Start the clock.
this._time=this.read(),this._paused=!1):
// Clear the active timeout to allow replacement.
e.clearTimeout(this._call),
// Adjust the origin of the timer to match the new timeout value.
this._time+=this.read()%i-s,this._timeout=i,this._call=e.setTimeout(t.proxy(this._next,this,n),i-s)},/**
  * Stops the autoplay.
  * @public
  */
s.prototype.stop=function(){this._core.is("rotating")&&(
// Reset the clock.
this._time=0,this._paused=!0,e.clearTimeout(this._call),this._core.leave("rotating"))},/**
  * Pauses the autoplay.
  * @public
  */
s.prototype.pause=function(){this._core.is("rotating")&&!this._paused&&(
// Pause the clock.
this._time=this.read(),this._paused=!0,e.clearTimeout(this._call))},/**
  * Destroys the plugin.
  */
s.prototype.destroy=function(){var t,e;this.stop();for(t in this._handlers)this._core.$element.off(t,this._handlers[t]);for(e in Object.getOwnPropertyNames(this))"function"!=typeof this[e]&&(this[e]=null)},t.fn.owlCarousel.Constructor.Plugins.autoplay=s}(window.Zepto||window.jQuery,window,document),function(t,e,i,n){/**
  * Creates the navigation plugin.
  * @class The Navigation Plugin
  * @param {Owl} carousel - The Owl Carousel.
  */
var s=function e(i){/**
   * Reference to the core.
   * @protected
   * @type {Owl}
   */
this._core=i,/**
   * Indicates whether the plugin is initialized or not.
   * @protected
   * @type {Boolean}
   */
this._initialized=!1,/**
   * The current paging indexes.
   * @protected
   * @type {Array}
   */
this._pages=[],/**
   * All DOM elements of the user interface.
   * @protected
   * @type {Object}
   */
this._controls={},/**
   * Markup for an indicator.
   * @protected
   * @type {Array.<String>}
   */
this._templates=[],/**
   * The carousel element.
   * @type {jQuery}
   */
this.$element=this._core.$element,/**
   * Overridden methods of the carousel.
   * @protected
   * @type {Object}
   */
this._overrides={next:this._core.next,prev:this._core.prev,to:this._core.to},/**
   * All event handlers.
   * @protected
   * @type {Object}
   */
this._handlers={"prepared.owl.carousel":t.proxy(function(e){e.namespace&&this._core.settings.dotsData&&this._templates.push('<div class="'+this._core.settings.dotClass+'">'+t(e.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot")+"</div>")},this),"added.owl.carousel":t.proxy(function(t){t.namespace&&this._core.settings.dotsData&&this._templates.splice(t.position,0,this._templates.pop())},this),"remove.owl.carousel":t.proxy(function(t){t.namespace&&this._core.settings.dotsData&&this._templates.splice(t.position,1)},this),"changed.owl.carousel":t.proxy(function(t){t.namespace&&"position"==t.property.name&&this.draw()},this),"initialized.owl.carousel":t.proxy(function(t){t.namespace&&!this._initialized&&(this._core.trigger("initialize",null,"navigation"),this.initialize(),this.update(),this.draw(),this._initialized=!0,this._core.trigger("initialized",null,"navigation"))},this),"refreshed.owl.carousel":t.proxy(function(t){t.namespace&&this._initialized&&(this._core.trigger("refresh",null,"navigation"),this.update(),this.draw(),this._core.trigger("refreshed",null,"navigation"))},this)},
// set default options
this._core.options=t.extend({},e.Defaults,this._core.options),
// register event handlers
this.$element.on(this._handlers)};/**
  * Default options.
  * @public
  * @todo Rename `slideBy` to `navBy`
  */
s.Defaults={nav:!1,navText:['<span aria-label="Previous">&#x2039;</span>','<span aria-label="Next">&#x203a;</span>'],navSpeed:!1,navElement:'button type="button" role="presentation"',navContainer:!1,navContainerClass:"owl-nav",navClass:["owl-prev","owl-next"],slideBy:1,dotClass:"owl-dot",dotsClass:"owl-dots",dots:!0,dotsEach:!1,dotsData:!1,dotsSpeed:!1,dotsContainer:!1},/**
  * Initializes the layout of the plugin and extends the carousel.
  * @protected
  */
s.prototype.initialize=function(){var e,i=this._core.settings;
// create DOM structure for relative navigation
this._controls.$relative=(i.navContainer?t(i.navContainer):t("<div>").addClass(i.navContainerClass).appendTo(this.$element)).addClass("disabled"),this._controls.$previous=t("<"+i.navElement+">").addClass(i.navClass[0]).html(i.navText[0]).prependTo(this._controls.$relative).on("click",t.proxy(function(t){this.prev(i.navSpeed)},this)),this._controls.$next=t("<"+i.navElement+">").addClass(i.navClass[1]).html(i.navText[1]).appendTo(this._controls.$relative).on("click",t.proxy(function(t){this.next(i.navSpeed)},this)),
// create DOM structure for absolute navigation
i.dotsData||(this._templates=[t('<button role="button">').addClass(i.dotClass).append(t("<span>")).prop("outerHTML")]),this._controls.$absolute=(i.dotsContainer?t(i.dotsContainer):t("<div>").addClass(i.dotsClass).appendTo(this.$element)).addClass("disabled"),this._controls.$absolute.on("click","button",t.proxy(function(e){var n=t(e.target).parent().is(this._controls.$absolute)?t(e.target).index():t(e.target).parent().index();e.preventDefault(),this.to(n,i.dotsSpeed)},this));/*$el.on('focusin', function() {
  	$(document).off(".carousel");
  		$(document).on('keydown.carousel', function(e) {
  		if(e.keyCode == 37) {
  			$el.trigger('prev.owl')
  		}
  		if(e.keyCode == 39) {
  			$el.trigger('next.owl')
  		}
  	});
  });*/
// override public methods of the carousel
for(e in this._overrides)this._core[e]=t.proxy(this[e],this)},/**
  * Destroys the plugin.
  * @protected
  */
s.prototype.destroy=function(){var t,e,i,n,s;s=this._core.settings;for(t in this._handlers)this.$element.off(t,this._handlers[t]);for(e in this._controls)"$relative"===e&&s.navContainer?this._controls[e].html(""):this._controls[e].remove();for(n in this.overides)this._core[n]=this._overrides[n];for(i in Object.getOwnPropertyNames(this))"function"!=typeof this[i]&&(this[i]=null)},/**
  * Updates the internal state.
  * @protected
  */
s.prototype.update=function(){var t,e,i,n=this._core.clones().length/2,s=n+this._core.items().length,o=this._core.maximum(!0),r=this._core.settings,a=r.center||r.autoWidth||r.dotsData?1:r.dotsEach||r.items;if("page"!==r.slideBy&&(r.slideBy=Math.min(r.slideBy,r.items)),r.dots||"page"==r.slideBy)for(this._pages=[],t=n,e=0,i=0;t<s;t++){if(e>=a||0===e){if(this._pages.push({start:Math.min(o,t-n),end:t-n+a-1}),Math.min(o,t-n)===o)break;e=0,++i}e+=this._core.mergers(this._core.relative(t))}},/**
  * Draws the user interface.
  * @todo The option `dotsData` wont work.
  * @protected
  */
s.prototype.draw=function(){var e,i=this._core.settings,n=this._core.items().length<=i.items,s=this._core.relative(this._core.current()),o=i.loop||i.rewind;this._controls.$relative.toggleClass("disabled",!i.nav||n),i.nav&&(this._controls.$previous.toggleClass("disabled",!o&&s<=this._core.minimum(!0)),this._controls.$next.toggleClass("disabled",!o&&s>=this._core.maximum(!0))),this._controls.$absolute.toggleClass("disabled",!i.dots||n),i.dots&&(e=this._pages.length-this._controls.$absolute.children().length,i.dotsData&&0!==e?this._controls.$absolute.html(this._templates.join("")):e>0?this._controls.$absolute.append(new Array(e+1).join(this._templates[0])):e<0&&this._controls.$absolute.children().slice(e).remove(),this._controls.$absolute.find(".active").removeClass("active"),this._controls.$absolute.children().eq(t.inArray(this.current(),this._pages)).addClass("active"))},/**
  * Extends event data.
  * @protected
  * @param {Event} event - The event object which gets thrown.
  */
s.prototype.onTrigger=function(e){var i=this._core.settings;e.page={index:t.inArray(this.current(),this._pages),count:this._pages.length,size:i&&(i.center||i.autoWidth||i.dotsData?1:i.dotsEach||i.items)}},/**
  * Gets the current page position of the carousel.
  * @protected
  * @returns {Number}
  */
s.prototype.current=function(){var e=this._core.relative(this._core.current());return t.grep(this._pages,t.proxy(function(t,i){return t.start<=e&&t.end>=e},this)).pop()},/**
  * Gets the current succesor/predecessor position.
  * @protected
  * @returns {Number}
  */
s.prototype.getPosition=function(e){var i,n,s=this._core.settings;return"page"==s.slideBy?(i=t.inArray(this.current(),this._pages),n=this._pages.length,e?++i:--i,i=this._pages[(i%n+n)%n].start):(i=this._core.relative(this._core.current()),n=this._core.items().length,e?i+=s.slideBy:i-=s.slideBy),i},/**
  * Slides to the next item or page.
  * @public
  * @param {Number} [speed=false] - The time in milliseconds for the transition.
  */
s.prototype.next=function(e){t.proxy(this._overrides.to,this._core)(this.getPosition(!0),e)},/**
  * Slides to the previous item or page.
  * @public
  * @param {Number} [speed=false] - The time in milliseconds for the transition.
  */
s.prototype.prev=function(e){t.proxy(this._overrides.to,this._core)(this.getPosition(!1),e)},/**
  * Slides to the specified item or page.
  * @public
  * @param {Number} position - The position of the item or page.
  * @param {Number} [speed] - The time in milliseconds for the transition.
  * @param {Boolean} [standard=false] - Whether to use the standard behaviour or not.
  */
s.prototype.to=function(e,i,n){var s;!n&&this._pages.length?(s=this._pages.length,t.proxy(this._overrides.to,this._core)(this._pages[(e%s+s)%s].start,i)):t.proxy(this._overrides.to,this._core)(e,i)},t.fn.owlCarousel.Constructor.Plugins.Navigation=s}(window.Zepto||window.jQuery,window,document),function(t,e,i,n){/**
  * Creates the hash plugin.
  * @class The Hash Plugin
  * @param {Owl} carousel - The Owl Carousel
  */
var s=function i(n){/**
   * Reference to the core.
   * @protected
   * @type {Owl}
   */
this._core=n,/**
   * Hash index for the items.
   * @protected
   * @type {Object}
   */
this._hashes={},/**
   * The carousel element.
   * @type {jQuery}
   */
this.$element=this._core.$element,/**
   * All event handlers.
   * @protected
   * @type {Object}
   */
this._handlers={"initialized.owl.carousel":t.proxy(function(i){i.namespace&&"URLHash"===this._core.settings.startPosition&&t(e).trigger("hashchange.owl.navigation")},this),"prepared.owl.carousel":t.proxy(function(e){if(e.namespace){var i=t(e.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");if(!i)return;this._hashes[i]=e.content}},this),"changed.owl.carousel":t.proxy(function(i){if(i.namespace&&"position"===i.property.name){var n=this._core.items(this._core.relative(this._core.current())),s=t.map(this._hashes,function(t,e){return t===n?e:null}).join();if(!s||e.location.hash.slice(1)===s)return;e.location.hash=s}},this)},
// set default options
this._core.options=t.extend({},i.Defaults,this._core.options),
// register the event handlers
this.$element.on(this._handlers),
// register event listener for hash navigation
t(e).on("hashchange.owl.navigation",t.proxy(function(t){var i=e.location.hash.substring(1),n=this._core.$stage.children(),s=this._hashes[i]&&n.index(this._hashes[i]);void 0!==s&&s!==this._core.current()&&this._core.to(this._core.relative(s),!1,!0)},this))};/**
  * Default options.
  * @public
  */
s.Defaults={URLhashListener:!1},/**
  * Destroys the plugin.
  * @public
  */
s.prototype.destroy=function(){var i,n;t(e).off("hashchange.owl.navigation");for(i in this._handlers)this._core.$element.off(i,this._handlers[i]);for(n in Object.getOwnPropertyNames(this))"function"!=typeof this[n]&&(this[n]=null)},t.fn.owlCarousel.Constructor.Plugins.Hash=s}(window.Zepto||window.jQuery,window,document),function(t,e,i,n){function s(e,i){var s=!1,o=e.charAt(0).toUpperCase()+e.slice(1);return t.each((e+" "+a.join(o+" ")+o).split(" "),function(t,e){if(r[e]!==n)return s=!i||e,!1}),s}function o(t){return s(t,!0)}var r=t("<support>").get(0).style,a="Webkit Moz O ms".split(" "),l={transition:{end:{WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",transition:"transitionend"}},animation:{end:{WebkitAnimation:"webkitAnimationEnd",MozAnimation:"animationend",OAnimation:"oAnimationEnd",animation:"animationend"}}},h={csstransforms:function(){return!!s("transform")},csstransforms3d:function(){return!!s("perspective")},csstransitions:function(){return!!s("transition")},cssanimations:function(){return!!s("animation")}};h.csstransitions()&&(/* jshint -W053 */
t.support.transition=new String(o("transition")),t.support.transition.end=l.transition.end[t.support.transition]),h.cssanimations()&&(/* jshint -W053 */
t.support.animation=new String(o("animation")),t.support.animation.end=l.animation.end[t.support.animation]),h.csstransforms()&&(/* jshint -W053 */
t.support.transform=new String(o("transform")),t.support.transform3d=h.csstransforms3d())}(window.Zepto||window.jQuery,window,document)},/* 13 */
/***/
function(t,e,i){"use strict";var n;
// This works in non-strict mode
n=function(){return this}();try{
// This works if eval is allowed (see CSP)
n=n||Function("return this")()||(0,eval)("this")}catch(t){
// This works if the window reference is available
"object"==typeof window&&(n=window)}
// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}
t.exports=n},/* 14 */
/***/
function(t,e,i){i(2),t.exports=i(3)}]);