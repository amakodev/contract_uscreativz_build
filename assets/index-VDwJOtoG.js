function MA(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function jA(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var sE={exports:{}},Jc={},oE={exports:{}},re={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ll=Symbol.for("react.element"),FA=Symbol.for("react.portal"),UA=Symbol.for("react.fragment"),BA=Symbol.for("react.strict_mode"),$A=Symbol.for("react.profiler"),zA=Symbol.for("react.provider"),WA=Symbol.for("react.context"),HA=Symbol.for("react.forward_ref"),qA=Symbol.for("react.suspense"),KA=Symbol.for("react.memo"),GA=Symbol.for("react.lazy"),B0=Symbol.iterator;function QA(t){return t===null||typeof t!="object"?null:(t=B0&&t[B0]||t["@@iterator"],typeof t=="function"?t:null)}var aE={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},lE=Object.assign,uE={};function co(t,e,n){this.props=t,this.context=e,this.refs=uE,this.updater=n||aE}co.prototype.isReactComponent={};co.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};co.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function cE(){}cE.prototype=co.prototype;function gm(t,e,n){this.props=t,this.context=e,this.refs=uE,this.updater=n||aE}var ym=gm.prototype=new cE;ym.constructor=gm;lE(ym,co.prototype);ym.isPureReactComponent=!0;var $0=Array.isArray,hE=Object.prototype.hasOwnProperty,vm={current:null},dE={key:!0,ref:!0,__self:!0,__source:!0};function fE(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)hE.call(e,r)&&!dE.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:ll,type:t,key:s,ref:o,props:i,_owner:vm.current}}function YA(t,e){return{$$typeof:ll,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function _m(t){return typeof t=="object"&&t!==null&&t.$$typeof===ll}function XA(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var z0=/\/+/g;function pd(t,e){return typeof t=="object"&&t!==null&&t.key!=null?XA(""+t.key):e.toString(36)}function Tu(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case ll:case FA:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+pd(o,0):r,$0(i)?(n="",t!=null&&(n=t.replace(z0,"$&/")+"/"),Tu(i,e,n,"",function(c){return c})):i!=null&&(_m(i)&&(i=YA(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(z0,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",$0(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+pd(s,a);o+=Tu(s,e,n,l,i)}else if(l=QA(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+pd(s,a++),o+=Tu(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Kl(t,e,n){if(t==null)return t;var r=[],i=0;return Tu(t,r,"","",function(s){return e.call(n,s,i++)}),r}function JA(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Pt={current:null},xu={transition:null},ZA={ReactCurrentDispatcher:Pt,ReactCurrentBatchConfig:xu,ReactCurrentOwner:vm};function pE(){throw Error("act(...) is not supported in production builds of React.")}re.Children={map:Kl,forEach:function(t,e,n){Kl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Kl(t,function(){e++}),e},toArray:function(t){return Kl(t,function(e){return e})||[]},only:function(t){if(!_m(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};re.Component=co;re.Fragment=UA;re.Profiler=$A;re.PureComponent=gm;re.StrictMode=BA;re.Suspense=qA;re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ZA;re.act=pE;re.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=lE({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=vm.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)hE.call(e,l)&&!dE.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:ll,type:t.type,key:i,ref:s,props:r,_owner:o}};re.createContext=function(t){return t={$$typeof:WA,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:zA,_context:t},t.Consumer=t};re.createElement=fE;re.createFactory=function(t){var e=fE.bind(null,t);return e.type=t,e};re.createRef=function(){return{current:null}};re.forwardRef=function(t){return{$$typeof:HA,render:t}};re.isValidElement=_m;re.lazy=function(t){return{$$typeof:GA,_payload:{_status:-1,_result:t},_init:JA}};re.memo=function(t,e){return{$$typeof:KA,type:t,compare:e===void 0?null:e}};re.startTransition=function(t){var e=xu.transition;xu.transition={};try{t()}finally{xu.transition=e}};re.unstable_act=pE;re.useCallback=function(t,e){return Pt.current.useCallback(t,e)};re.useContext=function(t){return Pt.current.useContext(t)};re.useDebugValue=function(){};re.useDeferredValue=function(t){return Pt.current.useDeferredValue(t)};re.useEffect=function(t,e){return Pt.current.useEffect(t,e)};re.useId=function(){return Pt.current.useId()};re.useImperativeHandle=function(t,e,n){return Pt.current.useImperativeHandle(t,e,n)};re.useInsertionEffect=function(t,e){return Pt.current.useInsertionEffect(t,e)};re.useLayoutEffect=function(t,e){return Pt.current.useLayoutEffect(t,e)};re.useMemo=function(t,e){return Pt.current.useMemo(t,e)};re.useReducer=function(t,e,n){return Pt.current.useReducer(t,e,n)};re.useRef=function(t){return Pt.current.useRef(t)};re.useState=function(t){return Pt.current.useState(t)};re.useSyncExternalStore=function(t,e,n){return Pt.current.useSyncExternalStore(t,e,n)};re.useTransition=function(){return Pt.current.useTransition()};re.version="18.3.1";oE.exports=re;var N=oE.exports;const $t=jA(N),e2=MA({__proto__:null,default:$t},[N]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var t2=N,n2=Symbol.for("react.element"),r2=Symbol.for("react.fragment"),i2=Object.prototype.hasOwnProperty,s2=t2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o2={key:!0,ref:!0,__self:!0,__source:!0};function mE(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)i2.call(e,r)&&!o2.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:n2,type:t,key:s,ref:o,props:i,_owner:s2.current}}Jc.Fragment=r2;Jc.jsx=mE;Jc.jsxs=mE;sE.exports=Jc;var g=sE.exports,gE={exports:{}},qt={},yE={exports:{}},vE={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e($,K){var Y=$.length;$.push(K);e:for(;0<Y;){var fe=Y-1>>>1,ie=$[fe];if(0<i(ie,K))$[fe]=K,$[Y]=ie,Y=fe;else break e}}function n($){return $.length===0?null:$[0]}function r($){if($.length===0)return null;var K=$[0],Y=$.pop();if(Y!==K){$[0]=Y;e:for(var fe=0,ie=$.length,Pe=ie>>>1;fe<Pe;){var Mt=2*(fe+1)-1,Rt=$[Mt],_t=Mt+1,kt=$[_t];if(0>i(Rt,Y))_t<ie&&0>i(kt,Rt)?($[fe]=kt,$[_t]=Y,fe=_t):($[fe]=Rt,$[Mt]=Y,fe=Mt);else if(_t<ie&&0>i(kt,Y))$[fe]=kt,$[_t]=Y,fe=_t;else break e}}return K}function i($,K){var Y=$.sortIndex-K.sortIndex;return Y!==0?Y:$.id-K.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],h=1,f=null,p=3,y=!1,S=!1,I=!1,R=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,w=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x($){for(var K=n(c);K!==null;){if(K.callback===null)r(c);else if(K.startTime<=$)r(c),K.sortIndex=K.expirationTime,e(l,K);else break;K=n(c)}}function V($){if(I=!1,x($),!S)if(n(l)!==null)S=!0,hr(O);else{var K=n(c);K!==null&&de(V,K.startTime-$)}}function O($,K){S=!1,I&&(I=!1,v(_),_=-1),y=!0;var Y=p;try{for(x(K),f=n(l);f!==null&&(!(f.expirationTime>K)||$&&!A());){var fe=f.callback;if(typeof fe=="function"){f.callback=null,p=f.priorityLevel;var ie=fe(f.expirationTime<=K);K=t.unstable_now(),typeof ie=="function"?f.callback=ie:f===n(l)&&r(l),x(K)}else r(l);f=n(l)}if(f!==null)var Pe=!0;else{var Mt=n(c);Mt!==null&&de(V,Mt.startTime-K),Pe=!1}return Pe}finally{f=null,p=Y,y=!1}}var M=!1,T=null,_=-1,P=5,C=-1;function A(){return!(t.unstable_now()-C<P)}function b(){if(T!==null){var $=t.unstable_now();C=$;var K=!0;try{K=T(!0,$)}finally{K?k():(M=!1,T=null)}}else M=!1}var k;if(typeof w=="function")k=function(){w(b)};else if(typeof MessageChannel<"u"){var we=new MessageChannel,vn=we.port2;we.port1.onmessage=b,k=function(){vn.postMessage(null)}}else k=function(){R(b,0)};function hr($){T=$,M||(M=!0,k())}function de($,K){_=R(function(){$(t.unstable_now())},K)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function($){$.callback=null},t.unstable_continueExecution=function(){S||y||(S=!0,hr(O))},t.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<$?Math.floor(1e3/$):5},t.unstable_getCurrentPriorityLevel=function(){return p},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function($){switch(p){case 1:case 2:case 3:var K=3;break;default:K=p}var Y=p;p=K;try{return $()}finally{p=Y}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function($,K){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var Y=p;p=$;try{return K()}finally{p=Y}},t.unstable_scheduleCallback=function($,K,Y){var fe=t.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?fe+Y:fe):Y=fe,$){case 1:var ie=-1;break;case 2:ie=250;break;case 5:ie=1073741823;break;case 4:ie=1e4;break;default:ie=5e3}return ie=Y+ie,$={id:h++,callback:K,priorityLevel:$,startTime:Y,expirationTime:ie,sortIndex:-1},Y>fe?($.sortIndex=Y,e(c,$),n(l)===null&&$===n(c)&&(I?(v(_),_=-1):I=!0,de(V,Y-fe))):($.sortIndex=ie,e(l,$),S||y||(S=!0,hr(O))),$},t.unstable_shouldYield=A,t.unstable_wrapCallback=function($){var K=p;return function(){var Y=p;p=K;try{return $.apply(this,arguments)}finally{p=Y}}}})(vE);yE.exports=vE;var a2=yE.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var l2=N,Wt=a2;function B(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var _E=new Set,Ca={};function Ki(t,e){Fs(t,e),Fs(t+"Capture",e)}function Fs(t,e){for(Ca[t]=e,t=0;t<e.length;t++)_E.add(e[t])}var er=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Cf=Object.prototype.hasOwnProperty,u2=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,W0={},H0={};function c2(t){return Cf.call(H0,t)?!0:Cf.call(W0,t)?!1:u2.test(t)?H0[t]=!0:(W0[t]=!0,!1)}function h2(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function d2(t,e,n,r){if(e===null||typeof e>"u"||h2(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Ct(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var rt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){rt[t]=new Ct(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];rt[e]=new Ct(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){rt[t]=new Ct(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){rt[t]=new Ct(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){rt[t]=new Ct(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){rt[t]=new Ct(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){rt[t]=new Ct(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){rt[t]=new Ct(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){rt[t]=new Ct(t,5,!1,t.toLowerCase(),null,!1,!1)});var wm=/[\-:]([a-z])/g;function Em(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(wm,Em);rt[e]=new Ct(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(wm,Em);rt[e]=new Ct(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(wm,Em);rt[e]=new Ct(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){rt[t]=new Ct(t,1,!1,t.toLowerCase(),null,!1,!1)});rt.xlinkHref=new Ct("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){rt[t]=new Ct(t,1,!1,t.toLowerCase(),null,!0,!0)});function Tm(t,e,n,r){var i=rt.hasOwnProperty(e)?rt[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(d2(e,n,i,r)&&(n=null),r||i===null?c2(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var ur=l2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Gl=Symbol.for("react.element"),cs=Symbol.for("react.portal"),hs=Symbol.for("react.fragment"),xm=Symbol.for("react.strict_mode"),Af=Symbol.for("react.profiler"),wE=Symbol.for("react.provider"),EE=Symbol.for("react.context"),Sm=Symbol.for("react.forward_ref"),Rf=Symbol.for("react.suspense"),kf=Symbol.for("react.suspense_list"),Im=Symbol.for("react.memo"),wr=Symbol.for("react.lazy"),TE=Symbol.for("react.offscreen"),q0=Symbol.iterator;function jo(t){return t===null||typeof t!="object"?null:(t=q0&&t[q0]||t["@@iterator"],typeof t=="function"?t:null)}var be=Object.assign,md;function Jo(t){if(md===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);md=e&&e[1]||""}return`
`+md+t}var gd=!1;function yd(t,e){if(!t||gd)return"";gd=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{gd=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Jo(t):""}function f2(t){switch(t.tag){case 5:return Jo(t.type);case 16:return Jo("Lazy");case 13:return Jo("Suspense");case 19:return Jo("SuspenseList");case 0:case 2:case 15:return t=yd(t.type,!1),t;case 11:return t=yd(t.type.render,!1),t;case 1:return t=yd(t.type,!0),t;default:return""}}function bf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case hs:return"Fragment";case cs:return"Portal";case Af:return"Profiler";case xm:return"StrictMode";case Rf:return"Suspense";case kf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case EE:return(t.displayName||"Context")+".Consumer";case wE:return(t._context.displayName||"Context")+".Provider";case Sm:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Im:return e=t.displayName||null,e!==null?e:bf(t.type)||"Memo";case wr:e=t._payload,t=t._init;try{return bf(t(e))}catch{}}return null}function p2(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return bf(e);case 8:return e===xm?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function qr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function xE(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function m2(t){var e=xE(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ql(t){t._valueTracker||(t._valueTracker=m2(t))}function SE(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=xE(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Xu(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Vf(t,e){var n=e.checked;return be({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function K0(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=qr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function IE(t,e){e=e.checked,e!=null&&Tm(t,"checked",e,!1)}function Df(t,e){IE(t,e);var n=qr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Nf(t,e.type,n):e.hasOwnProperty("defaultValue")&&Nf(t,e.type,qr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function G0(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Nf(t,e,n){(e!=="number"||Xu(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Zo=Array.isArray;function Rs(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+qr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Of(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(B(91));return be({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Q0(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(B(92));if(Zo(n)){if(1<n.length)throw Error(B(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:qr(n)}}function PE(t,e){var n=qr(e.value),r=qr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Y0(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function CE(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Lf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?CE(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Yl,AE=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Yl=Yl||document.createElement("div"),Yl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Yl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Aa(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ua={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},g2=["Webkit","ms","Moz","O"];Object.keys(ua).forEach(function(t){g2.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ua[e]=ua[t]})});function RE(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ua.hasOwnProperty(t)&&ua[t]?(""+e).trim():e+"px"}function kE(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=RE(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var y2=be({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Mf(t,e){if(e){if(y2[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(B(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(B(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(B(61))}if(e.style!=null&&typeof e.style!="object")throw Error(B(62))}}function jf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ff=null;function Pm(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Uf=null,ks=null,bs=null;function X0(t){if(t=hl(t)){if(typeof Uf!="function")throw Error(B(280));var e=t.stateNode;e&&(e=rh(e),Uf(t.stateNode,t.type,e))}}function bE(t){ks?bs?bs.push(t):bs=[t]:ks=t}function VE(){if(ks){var t=ks,e=bs;if(bs=ks=null,X0(t),e)for(t=0;t<e.length;t++)X0(e[t])}}function DE(t,e){return t(e)}function NE(){}var vd=!1;function OE(t,e,n){if(vd)return t(e,n);vd=!0;try{return DE(t,e,n)}finally{vd=!1,(ks!==null||bs!==null)&&(NE(),VE())}}function Ra(t,e){var n=t.stateNode;if(n===null)return null;var r=rh(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(B(231,e,typeof n));return n}var Bf=!1;if(er)try{var Fo={};Object.defineProperty(Fo,"passive",{get:function(){Bf=!0}}),window.addEventListener("test",Fo,Fo),window.removeEventListener("test",Fo,Fo)}catch{Bf=!1}function v2(t,e,n,r,i,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(h){this.onError(h)}}var ca=!1,Ju=null,Zu=!1,$f=null,_2={onError:function(t){ca=!0,Ju=t}};function w2(t,e,n,r,i,s,o,a,l){ca=!1,Ju=null,v2.apply(_2,arguments)}function E2(t,e,n,r,i,s,o,a,l){if(w2.apply(this,arguments),ca){if(ca){var c=Ju;ca=!1,Ju=null}else throw Error(B(198));Zu||(Zu=!0,$f=c)}}function Gi(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function LE(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function J0(t){if(Gi(t)!==t)throw Error(B(188))}function T2(t){var e=t.alternate;if(!e){if(e=Gi(t),e===null)throw Error(B(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return J0(i),t;if(s===r)return J0(i),e;s=s.sibling}throw Error(B(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(B(189))}}if(n.alternate!==r)throw Error(B(190))}if(n.tag!==3)throw Error(B(188));return n.stateNode.current===n?t:e}function ME(t){return t=T2(t),t!==null?jE(t):null}function jE(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=jE(t);if(e!==null)return e;t=t.sibling}return null}var FE=Wt.unstable_scheduleCallback,Z0=Wt.unstable_cancelCallback,x2=Wt.unstable_shouldYield,S2=Wt.unstable_requestPaint,Me=Wt.unstable_now,I2=Wt.unstable_getCurrentPriorityLevel,Cm=Wt.unstable_ImmediatePriority,UE=Wt.unstable_UserBlockingPriority,ec=Wt.unstable_NormalPriority,P2=Wt.unstable_LowPriority,BE=Wt.unstable_IdlePriority,Zc=null,Sn=null;function C2(t){if(Sn&&typeof Sn.onCommitFiberRoot=="function")try{Sn.onCommitFiberRoot(Zc,t,void 0,(t.current.flags&128)===128)}catch{}}var fn=Math.clz32?Math.clz32:k2,A2=Math.log,R2=Math.LN2;function k2(t){return t>>>=0,t===0?32:31-(A2(t)/R2|0)|0}var Xl=64,Jl=4194304;function ea(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function tc(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=ea(a):(s&=o,s!==0&&(r=ea(s)))}else o=n&~i,o!==0?r=ea(o):s!==0&&(r=ea(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-fn(e),i=1<<n,r|=t[n],e&=~i;return r}function b2(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function V2(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-fn(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=b2(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function zf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function $E(){var t=Xl;return Xl<<=1,!(Xl&4194240)&&(Xl=64),t}function _d(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ul(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-fn(e),t[e]=n}function D2(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-fn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Am(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-fn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var me=0;function zE(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var WE,Rm,HE,qE,KE,Wf=!1,Zl=[],Dr=null,Nr=null,Or=null,ka=new Map,ba=new Map,Tr=[],N2="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ev(t,e){switch(t){case"focusin":case"focusout":Dr=null;break;case"dragenter":case"dragleave":Nr=null;break;case"mouseover":case"mouseout":Or=null;break;case"pointerover":case"pointerout":ka.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ba.delete(e.pointerId)}}function Uo(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=hl(e),e!==null&&Rm(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function O2(t,e,n,r,i){switch(e){case"focusin":return Dr=Uo(Dr,t,e,n,r,i),!0;case"dragenter":return Nr=Uo(Nr,t,e,n,r,i),!0;case"mouseover":return Or=Uo(Or,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return ka.set(s,Uo(ka.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,ba.set(s,Uo(ba.get(s)||null,t,e,n,r,i)),!0}return!1}function GE(t){var e=vi(t.target);if(e!==null){var n=Gi(e);if(n!==null){if(e=n.tag,e===13){if(e=LE(n),e!==null){t.blockedOn=e,KE(t.priority,function(){HE(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Su(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Hf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Ff=r,n.target.dispatchEvent(r),Ff=null}else return e=hl(n),e!==null&&Rm(e),t.blockedOn=n,!1;e.shift()}return!0}function tv(t,e,n){Su(t)&&n.delete(e)}function L2(){Wf=!1,Dr!==null&&Su(Dr)&&(Dr=null),Nr!==null&&Su(Nr)&&(Nr=null),Or!==null&&Su(Or)&&(Or=null),ka.forEach(tv),ba.forEach(tv)}function Bo(t,e){t.blockedOn===e&&(t.blockedOn=null,Wf||(Wf=!0,Wt.unstable_scheduleCallback(Wt.unstable_NormalPriority,L2)))}function Va(t){function e(i){return Bo(i,t)}if(0<Zl.length){Bo(Zl[0],t);for(var n=1;n<Zl.length;n++){var r=Zl[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Dr!==null&&Bo(Dr,t),Nr!==null&&Bo(Nr,t),Or!==null&&Bo(Or,t),ka.forEach(e),ba.forEach(e),n=0;n<Tr.length;n++)r=Tr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Tr.length&&(n=Tr[0],n.blockedOn===null);)GE(n),n.blockedOn===null&&Tr.shift()}var Vs=ur.ReactCurrentBatchConfig,nc=!0;function M2(t,e,n,r){var i=me,s=Vs.transition;Vs.transition=null;try{me=1,km(t,e,n,r)}finally{me=i,Vs.transition=s}}function j2(t,e,n,r){var i=me,s=Vs.transition;Vs.transition=null;try{me=4,km(t,e,n,r)}finally{me=i,Vs.transition=s}}function km(t,e,n,r){if(nc){var i=Hf(t,e,n,r);if(i===null)Rd(t,e,r,rc,n),ev(t,r);else if(O2(i,t,e,n,r))r.stopPropagation();else if(ev(t,r),e&4&&-1<N2.indexOf(t)){for(;i!==null;){var s=hl(i);if(s!==null&&WE(s),s=Hf(t,e,n,r),s===null&&Rd(t,e,r,rc,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Rd(t,e,r,null,n)}}var rc=null;function Hf(t,e,n,r){if(rc=null,t=Pm(r),t=vi(t),t!==null)if(e=Gi(t),e===null)t=null;else if(n=e.tag,n===13){if(t=LE(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return rc=t,null}function QE(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(I2()){case Cm:return 1;case UE:return 4;case ec:case P2:return 16;case BE:return 536870912;default:return 16}default:return 16}}var Ar=null,bm=null,Iu=null;function YE(){if(Iu)return Iu;var t,e=bm,n=e.length,r,i="value"in Ar?Ar.value:Ar.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Iu=i.slice(t,1<r?1-r:void 0)}function Pu(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function eu(){return!0}function nv(){return!1}function Kt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?eu:nv,this.isPropagationStopped=nv,this}return be(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=eu)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=eu)},persist:function(){},isPersistent:eu}),e}var ho={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Vm=Kt(ho),cl=be({},ho,{view:0,detail:0}),F2=Kt(cl),wd,Ed,$o,eh=be({},cl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Dm,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==$o&&($o&&t.type==="mousemove"?(wd=t.screenX-$o.screenX,Ed=t.screenY-$o.screenY):Ed=wd=0,$o=t),wd)},movementY:function(t){return"movementY"in t?t.movementY:Ed}}),rv=Kt(eh),U2=be({},eh,{dataTransfer:0}),B2=Kt(U2),$2=be({},cl,{relatedTarget:0}),Td=Kt($2),z2=be({},ho,{animationName:0,elapsedTime:0,pseudoElement:0}),W2=Kt(z2),H2=be({},ho,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),q2=Kt(H2),K2=be({},ho,{data:0}),iv=Kt(K2),G2={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Q2={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Y2={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function X2(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Y2[t])?!!e[t]:!1}function Dm(){return X2}var J2=be({},cl,{key:function(t){if(t.key){var e=G2[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Pu(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Q2[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Dm,charCode:function(t){return t.type==="keypress"?Pu(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Pu(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Z2=Kt(J2),eR=be({},eh,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),sv=Kt(eR),tR=be({},cl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Dm}),nR=Kt(tR),rR=be({},ho,{propertyName:0,elapsedTime:0,pseudoElement:0}),iR=Kt(rR),sR=be({},eh,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),oR=Kt(sR),aR=[9,13,27,32],Nm=er&&"CompositionEvent"in window,ha=null;er&&"documentMode"in document&&(ha=document.documentMode);var lR=er&&"TextEvent"in window&&!ha,XE=er&&(!Nm||ha&&8<ha&&11>=ha),ov=" ",av=!1;function JE(t,e){switch(t){case"keyup":return aR.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ZE(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ds=!1;function uR(t,e){switch(t){case"compositionend":return ZE(e);case"keypress":return e.which!==32?null:(av=!0,ov);case"textInput":return t=e.data,t===ov&&av?null:t;default:return null}}function cR(t,e){if(ds)return t==="compositionend"||!Nm&&JE(t,e)?(t=YE(),Iu=bm=Ar=null,ds=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return XE&&e.locale!=="ko"?null:e.data;default:return null}}var hR={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function lv(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!hR[t.type]:e==="textarea"}function eT(t,e,n,r){bE(r),e=ic(e,"onChange"),0<e.length&&(n=new Vm("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var da=null,Da=null;function dR(t){hT(t,0)}function th(t){var e=ms(t);if(SE(e))return t}function fR(t,e){if(t==="change")return e}var tT=!1;if(er){var xd;if(er){var Sd="oninput"in document;if(!Sd){var uv=document.createElement("div");uv.setAttribute("oninput","return;"),Sd=typeof uv.oninput=="function"}xd=Sd}else xd=!1;tT=xd&&(!document.documentMode||9<document.documentMode)}function cv(){da&&(da.detachEvent("onpropertychange",nT),Da=da=null)}function nT(t){if(t.propertyName==="value"&&th(Da)){var e=[];eT(e,Da,t,Pm(t)),OE(dR,e)}}function pR(t,e,n){t==="focusin"?(cv(),da=e,Da=n,da.attachEvent("onpropertychange",nT)):t==="focusout"&&cv()}function mR(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return th(Da)}function gR(t,e){if(t==="click")return th(e)}function yR(t,e){if(t==="input"||t==="change")return th(e)}function vR(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var gn=typeof Object.is=="function"?Object.is:vR;function Na(t,e){if(gn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Cf.call(e,i)||!gn(t[i],e[i]))return!1}return!0}function hv(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function dv(t,e){var n=hv(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=hv(n)}}function rT(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?rT(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function iT(){for(var t=window,e=Xu();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Xu(t.document)}return e}function Om(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function _R(t){var e=iT(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&rT(n.ownerDocument.documentElement,n)){if(r!==null&&Om(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=dv(n,s);var o=dv(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var wR=er&&"documentMode"in document&&11>=document.documentMode,fs=null,qf=null,fa=null,Kf=!1;function fv(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Kf||fs==null||fs!==Xu(r)||(r=fs,"selectionStart"in r&&Om(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),fa&&Na(fa,r)||(fa=r,r=ic(qf,"onSelect"),0<r.length&&(e=new Vm("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=fs)))}function tu(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ps={animationend:tu("Animation","AnimationEnd"),animationiteration:tu("Animation","AnimationIteration"),animationstart:tu("Animation","AnimationStart"),transitionend:tu("Transition","TransitionEnd")},Id={},sT={};er&&(sT=document.createElement("div").style,"AnimationEvent"in window||(delete ps.animationend.animation,delete ps.animationiteration.animation,delete ps.animationstart.animation),"TransitionEvent"in window||delete ps.transitionend.transition);function nh(t){if(Id[t])return Id[t];if(!ps[t])return t;var e=ps[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in sT)return Id[t]=e[n];return t}var oT=nh("animationend"),aT=nh("animationiteration"),lT=nh("animationstart"),uT=nh("transitionend"),cT=new Map,pv="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ei(t,e){cT.set(t,e),Ki(e,[t])}for(var Pd=0;Pd<pv.length;Pd++){var Cd=pv[Pd],ER=Cd.toLowerCase(),TR=Cd[0].toUpperCase()+Cd.slice(1);ei(ER,"on"+TR)}ei(oT,"onAnimationEnd");ei(aT,"onAnimationIteration");ei(lT,"onAnimationStart");ei("dblclick","onDoubleClick");ei("focusin","onFocus");ei("focusout","onBlur");ei(uT,"onTransitionEnd");Fs("onMouseEnter",["mouseout","mouseover"]);Fs("onMouseLeave",["mouseout","mouseover"]);Fs("onPointerEnter",["pointerout","pointerover"]);Fs("onPointerLeave",["pointerout","pointerover"]);Ki("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ki("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ki("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ki("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ki("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ki("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ta="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),xR=new Set("cancel close invalid load scroll toggle".split(" ").concat(ta));function mv(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,E2(r,e,void 0,t),t.currentTarget=null}function hT(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;mv(i,a,c),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;mv(i,a,c),s=l}}}if(Zu)throw t=$f,Zu=!1,$f=null,t}function Te(t,e){var n=e[Jf];n===void 0&&(n=e[Jf]=new Set);var r=t+"__bubble";n.has(r)||(dT(e,t,2,!1),n.add(r))}function Ad(t,e,n){var r=0;e&&(r|=4),dT(n,t,r,e)}var nu="_reactListening"+Math.random().toString(36).slice(2);function Oa(t){if(!t[nu]){t[nu]=!0,_E.forEach(function(n){n!=="selectionchange"&&(xR.has(n)||Ad(n,!1,t),Ad(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[nu]||(e[nu]=!0,Ad("selectionchange",!1,e))}}function dT(t,e,n,r){switch(QE(e)){case 1:var i=M2;break;case 4:i=j2;break;default:i=km}n=i.bind(null,e,n,t),i=void 0,!Bf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Rd(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=vi(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}OE(function(){var c=s,h=Pm(n),f=[];e:{var p=cT.get(t);if(p!==void 0){var y=Vm,S=t;switch(t){case"keypress":if(Pu(n)===0)break e;case"keydown":case"keyup":y=Z2;break;case"focusin":S="focus",y=Td;break;case"focusout":S="blur",y=Td;break;case"beforeblur":case"afterblur":y=Td;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=rv;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=B2;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=nR;break;case oT:case aT:case lT:y=W2;break;case uT:y=iR;break;case"scroll":y=F2;break;case"wheel":y=oR;break;case"copy":case"cut":case"paste":y=q2;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=sv}var I=(e&4)!==0,R=!I&&t==="scroll",v=I?p!==null?p+"Capture":null:p;I=[];for(var w=c,x;w!==null;){x=w;var V=x.stateNode;if(x.tag===5&&V!==null&&(x=V,v!==null&&(V=Ra(w,v),V!=null&&I.push(La(w,V,x)))),R)break;w=w.return}0<I.length&&(p=new y(p,S,null,n,h),f.push({event:p,listeners:I}))}}if(!(e&7)){e:{if(p=t==="mouseover"||t==="pointerover",y=t==="mouseout"||t==="pointerout",p&&n!==Ff&&(S=n.relatedTarget||n.fromElement)&&(vi(S)||S[tr]))break e;if((y||p)&&(p=h.window===h?h:(p=h.ownerDocument)?p.defaultView||p.parentWindow:window,y?(S=n.relatedTarget||n.toElement,y=c,S=S?vi(S):null,S!==null&&(R=Gi(S),S!==R||S.tag!==5&&S.tag!==6)&&(S=null)):(y=null,S=c),y!==S)){if(I=rv,V="onMouseLeave",v="onMouseEnter",w="mouse",(t==="pointerout"||t==="pointerover")&&(I=sv,V="onPointerLeave",v="onPointerEnter",w="pointer"),R=y==null?p:ms(y),x=S==null?p:ms(S),p=new I(V,w+"leave",y,n,h),p.target=R,p.relatedTarget=x,V=null,vi(h)===c&&(I=new I(v,w+"enter",S,n,h),I.target=x,I.relatedTarget=R,V=I),R=V,y&&S)t:{for(I=y,v=S,w=0,x=I;x;x=rs(x))w++;for(x=0,V=v;V;V=rs(V))x++;for(;0<w-x;)I=rs(I),w--;for(;0<x-w;)v=rs(v),x--;for(;w--;){if(I===v||v!==null&&I===v.alternate)break t;I=rs(I),v=rs(v)}I=null}else I=null;y!==null&&gv(f,p,y,I,!1),S!==null&&R!==null&&gv(f,R,S,I,!0)}}e:{if(p=c?ms(c):window,y=p.nodeName&&p.nodeName.toLowerCase(),y==="select"||y==="input"&&p.type==="file")var O=fR;else if(lv(p))if(tT)O=yR;else{O=mR;var M=pR}else(y=p.nodeName)&&y.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(O=gR);if(O&&(O=O(t,c))){eT(f,O,n,h);break e}M&&M(t,p,c),t==="focusout"&&(M=p._wrapperState)&&M.controlled&&p.type==="number"&&Nf(p,"number",p.value)}switch(M=c?ms(c):window,t){case"focusin":(lv(M)||M.contentEditable==="true")&&(fs=M,qf=c,fa=null);break;case"focusout":fa=qf=fs=null;break;case"mousedown":Kf=!0;break;case"contextmenu":case"mouseup":case"dragend":Kf=!1,fv(f,n,h);break;case"selectionchange":if(wR)break;case"keydown":case"keyup":fv(f,n,h)}var T;if(Nm)e:{switch(t){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else ds?JE(t,n)&&(_="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(XE&&n.locale!=="ko"&&(ds||_!=="onCompositionStart"?_==="onCompositionEnd"&&ds&&(T=YE()):(Ar=h,bm="value"in Ar?Ar.value:Ar.textContent,ds=!0)),M=ic(c,_),0<M.length&&(_=new iv(_,t,null,n,h),f.push({event:_,listeners:M}),T?_.data=T:(T=ZE(n),T!==null&&(_.data=T)))),(T=lR?uR(t,n):cR(t,n))&&(c=ic(c,"onBeforeInput"),0<c.length&&(h=new iv("onBeforeInput","beforeinput",null,n,h),f.push({event:h,listeners:c}),h.data=T))}hT(f,e)})}function La(t,e,n){return{instance:t,listener:e,currentTarget:n}}function ic(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Ra(t,n),s!=null&&r.unshift(La(t,s,i)),s=Ra(t,e),s!=null&&r.push(La(t,s,i))),t=t.return}return r}function rs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function gv(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&c!==null&&(a=c,i?(l=Ra(n,s),l!=null&&o.unshift(La(n,l,a))):i||(l=Ra(n,s),l!=null&&o.push(La(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var SR=/\r\n?/g,IR=/\u0000|\uFFFD/g;function yv(t){return(typeof t=="string"?t:""+t).replace(SR,`
`).replace(IR,"")}function ru(t,e,n){if(e=yv(e),yv(t)!==e&&n)throw Error(B(425))}function sc(){}var Gf=null,Qf=null;function Yf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Xf=typeof setTimeout=="function"?setTimeout:void 0,PR=typeof clearTimeout=="function"?clearTimeout:void 0,vv=typeof Promise=="function"?Promise:void 0,CR=typeof queueMicrotask=="function"?queueMicrotask:typeof vv<"u"?function(t){return vv.resolve(null).then(t).catch(AR)}:Xf;function AR(t){setTimeout(function(){throw t})}function kd(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Va(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Va(e)}function Lr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function _v(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var fo=Math.random().toString(36).slice(2),xn="__reactFiber$"+fo,Ma="__reactProps$"+fo,tr="__reactContainer$"+fo,Jf="__reactEvents$"+fo,RR="__reactListeners$"+fo,kR="__reactHandles$"+fo;function vi(t){var e=t[xn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[tr]||n[xn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=_v(t);t!==null;){if(n=t[xn])return n;t=_v(t)}return e}t=n,n=t.parentNode}return null}function hl(t){return t=t[xn]||t[tr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ms(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(B(33))}function rh(t){return t[Ma]||null}var Zf=[],gs=-1;function ti(t){return{current:t}}function Ie(t){0>gs||(t.current=Zf[gs],Zf[gs]=null,gs--)}function _e(t,e){gs++,Zf[gs]=t.current,t.current=e}var Kr={},yt=ti(Kr),Nt=ti(!1),Mi=Kr;function Us(t,e){var n=t.type.contextTypes;if(!n)return Kr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Ot(t){return t=t.childContextTypes,t!=null}function oc(){Ie(Nt),Ie(yt)}function wv(t,e,n){if(yt.current!==Kr)throw Error(B(168));_e(yt,e),_e(Nt,n)}function fT(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(B(108,p2(t)||"Unknown",i));return be({},n,r)}function ac(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Kr,Mi=yt.current,_e(yt,t),_e(Nt,Nt.current),!0}function Ev(t,e,n){var r=t.stateNode;if(!r)throw Error(B(169));n?(t=fT(t,e,Mi),r.__reactInternalMemoizedMergedChildContext=t,Ie(Nt),Ie(yt),_e(yt,t)):Ie(Nt),_e(Nt,n)}var Un=null,ih=!1,bd=!1;function pT(t){Un===null?Un=[t]:Un.push(t)}function bR(t){ih=!0,pT(t)}function ni(){if(!bd&&Un!==null){bd=!0;var t=0,e=me;try{var n=Un;for(me=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Un=null,ih=!1}catch(i){throw Un!==null&&(Un=Un.slice(t+1)),FE(Cm,ni),i}finally{me=e,bd=!1}}return null}var ys=[],vs=0,lc=null,uc=0,Xt=[],Jt=0,ji=null,Bn=1,$n="";function fi(t,e){ys[vs++]=uc,ys[vs++]=lc,lc=t,uc=e}function mT(t,e,n){Xt[Jt++]=Bn,Xt[Jt++]=$n,Xt[Jt++]=ji,ji=t;var r=Bn;t=$n;var i=32-fn(r)-1;r&=~(1<<i),n+=1;var s=32-fn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Bn=1<<32-fn(e)+i|n<<i|r,$n=s+t}else Bn=1<<s|n<<i|r,$n=t}function Lm(t){t.return!==null&&(fi(t,1),mT(t,1,0))}function Mm(t){for(;t===lc;)lc=ys[--vs],ys[vs]=null,uc=ys[--vs],ys[vs]=null;for(;t===ji;)ji=Xt[--Jt],Xt[Jt]=null,$n=Xt[--Jt],Xt[Jt]=null,Bn=Xt[--Jt],Xt[Jt]=null}var zt=null,Bt=null,Ce=!1,hn=null;function gT(t,e){var n=en(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Tv(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,zt=t,Bt=Lr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,zt=t,Bt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=ji!==null?{id:Bn,overflow:$n}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=en(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,zt=t,Bt=null,!0):!1;default:return!1}}function ep(t){return(t.mode&1)!==0&&(t.flags&128)===0}function tp(t){if(Ce){var e=Bt;if(e){var n=e;if(!Tv(t,e)){if(ep(t))throw Error(B(418));e=Lr(n.nextSibling);var r=zt;e&&Tv(t,e)?gT(r,n):(t.flags=t.flags&-4097|2,Ce=!1,zt=t)}}else{if(ep(t))throw Error(B(418));t.flags=t.flags&-4097|2,Ce=!1,zt=t}}}function xv(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;zt=t}function iu(t){if(t!==zt)return!1;if(!Ce)return xv(t),Ce=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Yf(t.type,t.memoizedProps)),e&&(e=Bt)){if(ep(t))throw yT(),Error(B(418));for(;e;)gT(t,e),e=Lr(e.nextSibling)}if(xv(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(B(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Bt=Lr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Bt=null}}else Bt=zt?Lr(t.stateNode.nextSibling):null;return!0}function yT(){for(var t=Bt;t;)t=Lr(t.nextSibling)}function Bs(){Bt=zt=null,Ce=!1}function jm(t){hn===null?hn=[t]:hn.push(t)}var VR=ur.ReactCurrentBatchConfig;function zo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(B(309));var r=n.stateNode}if(!r)throw Error(B(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(B(284));if(!n._owner)throw Error(B(290,t))}return t}function su(t,e){throw t=Object.prototype.toString.call(e),Error(B(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Sv(t){var e=t._init;return e(t._payload)}function vT(t){function e(v,w){if(t){var x=v.deletions;x===null?(v.deletions=[w],v.flags|=16):x.push(w)}}function n(v,w){if(!t)return null;for(;w!==null;)e(v,w),w=w.sibling;return null}function r(v,w){for(v=new Map;w!==null;)w.key!==null?v.set(w.key,w):v.set(w.index,w),w=w.sibling;return v}function i(v,w){return v=Ur(v,w),v.index=0,v.sibling=null,v}function s(v,w,x){return v.index=x,t?(x=v.alternate,x!==null?(x=x.index,x<w?(v.flags|=2,w):x):(v.flags|=2,w)):(v.flags|=1048576,w)}function o(v){return t&&v.alternate===null&&(v.flags|=2),v}function a(v,w,x,V){return w===null||w.tag!==6?(w=jd(x,v.mode,V),w.return=v,w):(w=i(w,x),w.return=v,w)}function l(v,w,x,V){var O=x.type;return O===hs?h(v,w,x.props.children,V,x.key):w!==null&&(w.elementType===O||typeof O=="object"&&O!==null&&O.$$typeof===wr&&Sv(O)===w.type)?(V=i(w,x.props),V.ref=zo(v,w,x),V.return=v,V):(V=Du(x.type,x.key,x.props,null,v.mode,V),V.ref=zo(v,w,x),V.return=v,V)}function c(v,w,x,V){return w===null||w.tag!==4||w.stateNode.containerInfo!==x.containerInfo||w.stateNode.implementation!==x.implementation?(w=Fd(x,v.mode,V),w.return=v,w):(w=i(w,x.children||[]),w.return=v,w)}function h(v,w,x,V,O){return w===null||w.tag!==7?(w=Ii(x,v.mode,V,O),w.return=v,w):(w=i(w,x),w.return=v,w)}function f(v,w,x){if(typeof w=="string"&&w!==""||typeof w=="number")return w=jd(""+w,v.mode,x),w.return=v,w;if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Gl:return x=Du(w.type,w.key,w.props,null,v.mode,x),x.ref=zo(v,null,w),x.return=v,x;case cs:return w=Fd(w,v.mode,x),w.return=v,w;case wr:var V=w._init;return f(v,V(w._payload),x)}if(Zo(w)||jo(w))return w=Ii(w,v.mode,x,null),w.return=v,w;su(v,w)}return null}function p(v,w,x,V){var O=w!==null?w.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return O!==null?null:a(v,w,""+x,V);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Gl:return x.key===O?l(v,w,x,V):null;case cs:return x.key===O?c(v,w,x,V):null;case wr:return O=x._init,p(v,w,O(x._payload),V)}if(Zo(x)||jo(x))return O!==null?null:h(v,w,x,V,null);su(v,x)}return null}function y(v,w,x,V,O){if(typeof V=="string"&&V!==""||typeof V=="number")return v=v.get(x)||null,a(w,v,""+V,O);if(typeof V=="object"&&V!==null){switch(V.$$typeof){case Gl:return v=v.get(V.key===null?x:V.key)||null,l(w,v,V,O);case cs:return v=v.get(V.key===null?x:V.key)||null,c(w,v,V,O);case wr:var M=V._init;return y(v,w,x,M(V._payload),O)}if(Zo(V)||jo(V))return v=v.get(x)||null,h(w,v,V,O,null);su(w,V)}return null}function S(v,w,x,V){for(var O=null,M=null,T=w,_=w=0,P=null;T!==null&&_<x.length;_++){T.index>_?(P=T,T=null):P=T.sibling;var C=p(v,T,x[_],V);if(C===null){T===null&&(T=P);break}t&&T&&C.alternate===null&&e(v,T),w=s(C,w,_),M===null?O=C:M.sibling=C,M=C,T=P}if(_===x.length)return n(v,T),Ce&&fi(v,_),O;if(T===null){for(;_<x.length;_++)T=f(v,x[_],V),T!==null&&(w=s(T,w,_),M===null?O=T:M.sibling=T,M=T);return Ce&&fi(v,_),O}for(T=r(v,T);_<x.length;_++)P=y(T,v,_,x[_],V),P!==null&&(t&&P.alternate!==null&&T.delete(P.key===null?_:P.key),w=s(P,w,_),M===null?O=P:M.sibling=P,M=P);return t&&T.forEach(function(A){return e(v,A)}),Ce&&fi(v,_),O}function I(v,w,x,V){var O=jo(x);if(typeof O!="function")throw Error(B(150));if(x=O.call(x),x==null)throw Error(B(151));for(var M=O=null,T=w,_=w=0,P=null,C=x.next();T!==null&&!C.done;_++,C=x.next()){T.index>_?(P=T,T=null):P=T.sibling;var A=p(v,T,C.value,V);if(A===null){T===null&&(T=P);break}t&&T&&A.alternate===null&&e(v,T),w=s(A,w,_),M===null?O=A:M.sibling=A,M=A,T=P}if(C.done)return n(v,T),Ce&&fi(v,_),O;if(T===null){for(;!C.done;_++,C=x.next())C=f(v,C.value,V),C!==null&&(w=s(C,w,_),M===null?O=C:M.sibling=C,M=C);return Ce&&fi(v,_),O}for(T=r(v,T);!C.done;_++,C=x.next())C=y(T,v,_,C.value,V),C!==null&&(t&&C.alternate!==null&&T.delete(C.key===null?_:C.key),w=s(C,w,_),M===null?O=C:M.sibling=C,M=C);return t&&T.forEach(function(b){return e(v,b)}),Ce&&fi(v,_),O}function R(v,w,x,V){if(typeof x=="object"&&x!==null&&x.type===hs&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case Gl:e:{for(var O=x.key,M=w;M!==null;){if(M.key===O){if(O=x.type,O===hs){if(M.tag===7){n(v,M.sibling),w=i(M,x.props.children),w.return=v,v=w;break e}}else if(M.elementType===O||typeof O=="object"&&O!==null&&O.$$typeof===wr&&Sv(O)===M.type){n(v,M.sibling),w=i(M,x.props),w.ref=zo(v,M,x),w.return=v,v=w;break e}n(v,M);break}else e(v,M);M=M.sibling}x.type===hs?(w=Ii(x.props.children,v.mode,V,x.key),w.return=v,v=w):(V=Du(x.type,x.key,x.props,null,v.mode,V),V.ref=zo(v,w,x),V.return=v,v=V)}return o(v);case cs:e:{for(M=x.key;w!==null;){if(w.key===M)if(w.tag===4&&w.stateNode.containerInfo===x.containerInfo&&w.stateNode.implementation===x.implementation){n(v,w.sibling),w=i(w,x.children||[]),w.return=v,v=w;break e}else{n(v,w);break}else e(v,w);w=w.sibling}w=Fd(x,v.mode,V),w.return=v,v=w}return o(v);case wr:return M=x._init,R(v,w,M(x._payload),V)}if(Zo(x))return S(v,w,x,V);if(jo(x))return I(v,w,x,V);su(v,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,w!==null&&w.tag===6?(n(v,w.sibling),w=i(w,x),w.return=v,v=w):(n(v,w),w=jd(x,v.mode,V),w.return=v,v=w),o(v)):n(v,w)}return R}var $s=vT(!0),_T=vT(!1),cc=ti(null),hc=null,_s=null,Fm=null;function Um(){Fm=_s=hc=null}function Bm(t){var e=cc.current;Ie(cc),t._currentValue=e}function np(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Ds(t,e){hc=t,Fm=_s=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Vt=!0),t.firstContext=null)}function rn(t){var e=t._currentValue;if(Fm!==t)if(t={context:t,memoizedValue:e,next:null},_s===null){if(hc===null)throw Error(B(308));_s=t,hc.dependencies={lanes:0,firstContext:t}}else _s=_s.next=t;return e}var _i=null;function $m(t){_i===null?_i=[t]:_i.push(t)}function wT(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,$m(e)):(n.next=i.next,i.next=n),e.interleaved=n,nr(t,r)}function nr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Er=!1;function zm(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ET(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Kn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Mr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,le&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,nr(t,n)}return i=r.interleaved,i===null?(e.next=e,$m(r)):(e.next=i.next,i.next=e),r.interleaved=e,nr(t,n)}function Cu(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Am(t,n)}}function Iv(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function dc(t,e,n,r){var i=t.updateQueue;Er=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var h=t.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==o&&(a===null?h.firstBaseUpdate=c:a.next=c,h.lastBaseUpdate=l))}if(s!==null){var f=i.baseState;o=0,h=c=l=null,a=s;do{var p=a.lane,y=a.eventTime;if((r&p)===p){h!==null&&(h=h.next={eventTime:y,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var S=t,I=a;switch(p=e,y=n,I.tag){case 1:if(S=I.payload,typeof S=="function"){f=S.call(y,f,p);break e}f=S;break e;case 3:S.flags=S.flags&-65537|128;case 0:if(S=I.payload,p=typeof S=="function"?S.call(y,f,p):S,p==null)break e;f=be({},f,p);break e;case 2:Er=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,p=i.effects,p===null?i.effects=[a]:p.push(a))}else y={eventTime:y,lane:p,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(c=h=y,l=f):h=h.next=y,o|=p;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;p=a,a=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(!0);if(h===null&&(l=f),i.baseState=l,i.firstBaseUpdate=c,i.lastBaseUpdate=h,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Ui|=o,t.lanes=o,t.memoizedState=f}}function Pv(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(B(191,i));i.call(r)}}}var dl={},In=ti(dl),ja=ti(dl),Fa=ti(dl);function wi(t){if(t===dl)throw Error(B(174));return t}function Wm(t,e){switch(_e(Fa,e),_e(ja,t),_e(In,dl),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Lf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Lf(e,t)}Ie(In),_e(In,e)}function zs(){Ie(In),Ie(ja),Ie(Fa)}function TT(t){wi(Fa.current);var e=wi(In.current),n=Lf(e,t.type);e!==n&&(_e(ja,t),_e(In,n))}function Hm(t){ja.current===t&&(Ie(In),Ie(ja))}var Ae=ti(0);function fc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Vd=[];function qm(){for(var t=0;t<Vd.length;t++)Vd[t]._workInProgressVersionPrimary=null;Vd.length=0}var Au=ur.ReactCurrentDispatcher,Dd=ur.ReactCurrentBatchConfig,Fi=0,ke=null,$e=null,Ke=null,pc=!1,pa=!1,Ua=0,DR=0;function lt(){throw Error(B(321))}function Km(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!gn(t[n],e[n]))return!1;return!0}function Gm(t,e,n,r,i,s){if(Fi=s,ke=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Au.current=t===null||t.memoizedState===null?MR:jR,t=n(r,i),pa){s=0;do{if(pa=!1,Ua=0,25<=s)throw Error(B(301));s+=1,Ke=$e=null,e.updateQueue=null,Au.current=FR,t=n(r,i)}while(pa)}if(Au.current=mc,e=$e!==null&&$e.next!==null,Fi=0,Ke=$e=ke=null,pc=!1,e)throw Error(B(300));return t}function Qm(){var t=Ua!==0;return Ua=0,t}function En(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ke===null?ke.memoizedState=Ke=t:Ke=Ke.next=t,Ke}function sn(){if($e===null){var t=ke.alternate;t=t!==null?t.memoizedState:null}else t=$e.next;var e=Ke===null?ke.memoizedState:Ke.next;if(e!==null)Ke=e,$e=t;else{if(t===null)throw Error(B(310));$e=t,t={memoizedState:$e.memoizedState,baseState:$e.baseState,baseQueue:$e.baseQueue,queue:$e.queue,next:null},Ke===null?ke.memoizedState=Ke=t:Ke=Ke.next=t}return Ke}function Ba(t,e){return typeof e=="function"?e(t):e}function Nd(t){var e=sn(),n=e.queue;if(n===null)throw Error(B(311));n.lastRenderedReducer=t;var r=$e,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,c=s;do{var h=c.lane;if((Fi&h)===h)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var f={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=f,o=r):l=l.next=f,ke.lanes|=h,Ui|=h}c=c.next}while(c!==null&&c!==s);l===null?o=r:l.next=a,gn(r,e.memoizedState)||(Vt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,ke.lanes|=s,Ui|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Od(t){var e=sn(),n=e.queue;if(n===null)throw Error(B(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);gn(s,e.memoizedState)||(Vt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function xT(){}function ST(t,e){var n=ke,r=sn(),i=e(),s=!gn(r.memoizedState,i);if(s&&(r.memoizedState=i,Vt=!0),r=r.queue,Ym(CT.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Ke!==null&&Ke.memoizedState.tag&1){if(n.flags|=2048,$a(9,PT.bind(null,n,r,i,e),void 0,null),Qe===null)throw Error(B(349));Fi&30||IT(n,e,i)}return i}function IT(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ke.updateQueue,e===null?(e={lastEffect:null,stores:null},ke.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function PT(t,e,n,r){e.value=n,e.getSnapshot=r,AT(e)&&RT(t)}function CT(t,e,n){return n(function(){AT(e)&&RT(t)})}function AT(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!gn(t,n)}catch{return!0}}function RT(t){var e=nr(t,1);e!==null&&pn(e,t,1,-1)}function Cv(t){var e=En();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ba,lastRenderedState:t},e.queue=t,t=t.dispatch=LR.bind(null,ke,t),[e.memoizedState,t]}function $a(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ke.updateQueue,e===null?(e={lastEffect:null,stores:null},ke.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function kT(){return sn().memoizedState}function Ru(t,e,n,r){var i=En();ke.flags|=t,i.memoizedState=$a(1|e,n,void 0,r===void 0?null:r)}function sh(t,e,n,r){var i=sn();r=r===void 0?null:r;var s=void 0;if($e!==null){var o=$e.memoizedState;if(s=o.destroy,r!==null&&Km(r,o.deps)){i.memoizedState=$a(e,n,s,r);return}}ke.flags|=t,i.memoizedState=$a(1|e,n,s,r)}function Av(t,e){return Ru(8390656,8,t,e)}function Ym(t,e){return sh(2048,8,t,e)}function bT(t,e){return sh(4,2,t,e)}function VT(t,e){return sh(4,4,t,e)}function DT(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function NT(t,e,n){return n=n!=null?n.concat([t]):null,sh(4,4,DT.bind(null,e,t),n)}function Xm(){}function OT(t,e){var n=sn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Km(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function LT(t,e){var n=sn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Km(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function MT(t,e,n){return Fi&21?(gn(n,e)||(n=$E(),ke.lanes|=n,Ui|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Vt=!0),t.memoizedState=n)}function NR(t,e){var n=me;me=n!==0&&4>n?n:4,t(!0);var r=Dd.transition;Dd.transition={};try{t(!1),e()}finally{me=n,Dd.transition=r}}function jT(){return sn().memoizedState}function OR(t,e,n){var r=Fr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},FT(t))UT(e,n);else if(n=wT(t,e,n,r),n!==null){var i=xt();pn(n,t,r,i),BT(n,e,r)}}function LR(t,e,n){var r=Fr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(FT(t))UT(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,gn(a,o)){var l=e.interleaved;l===null?(i.next=i,$m(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=wT(t,e,i,r),n!==null&&(i=xt(),pn(n,t,r,i),BT(n,e,r))}}function FT(t){var e=t.alternate;return t===ke||e!==null&&e===ke}function UT(t,e){pa=pc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function BT(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Am(t,n)}}var mc={readContext:rn,useCallback:lt,useContext:lt,useEffect:lt,useImperativeHandle:lt,useInsertionEffect:lt,useLayoutEffect:lt,useMemo:lt,useReducer:lt,useRef:lt,useState:lt,useDebugValue:lt,useDeferredValue:lt,useTransition:lt,useMutableSource:lt,useSyncExternalStore:lt,useId:lt,unstable_isNewReconciler:!1},MR={readContext:rn,useCallback:function(t,e){return En().memoizedState=[t,e===void 0?null:e],t},useContext:rn,useEffect:Av,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ru(4194308,4,DT.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ru(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ru(4,2,t,e)},useMemo:function(t,e){var n=En();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=En();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=OR.bind(null,ke,t),[r.memoizedState,t]},useRef:function(t){var e=En();return t={current:t},e.memoizedState=t},useState:Cv,useDebugValue:Xm,useDeferredValue:function(t){return En().memoizedState=t},useTransition:function(){var t=Cv(!1),e=t[0];return t=NR.bind(null,t[1]),En().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ke,i=En();if(Ce){if(n===void 0)throw Error(B(407));n=n()}else{if(n=e(),Qe===null)throw Error(B(349));Fi&30||IT(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Av(CT.bind(null,r,s,t),[t]),r.flags|=2048,$a(9,PT.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=En(),e=Qe.identifierPrefix;if(Ce){var n=$n,r=Bn;n=(r&~(1<<32-fn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ua++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=DR++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},jR={readContext:rn,useCallback:OT,useContext:rn,useEffect:Ym,useImperativeHandle:NT,useInsertionEffect:bT,useLayoutEffect:VT,useMemo:LT,useReducer:Nd,useRef:kT,useState:function(){return Nd(Ba)},useDebugValue:Xm,useDeferredValue:function(t){var e=sn();return MT(e,$e.memoizedState,t)},useTransition:function(){var t=Nd(Ba)[0],e=sn().memoizedState;return[t,e]},useMutableSource:xT,useSyncExternalStore:ST,useId:jT,unstable_isNewReconciler:!1},FR={readContext:rn,useCallback:OT,useContext:rn,useEffect:Ym,useImperativeHandle:NT,useInsertionEffect:bT,useLayoutEffect:VT,useMemo:LT,useReducer:Od,useRef:kT,useState:function(){return Od(Ba)},useDebugValue:Xm,useDeferredValue:function(t){var e=sn();return $e===null?e.memoizedState=t:MT(e,$e.memoizedState,t)},useTransition:function(){var t=Od(Ba)[0],e=sn().memoizedState;return[t,e]},useMutableSource:xT,useSyncExternalStore:ST,useId:jT,unstable_isNewReconciler:!1};function un(t,e){if(t&&t.defaultProps){e=be({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function rp(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:be({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var oh={isMounted:function(t){return(t=t._reactInternals)?Gi(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=xt(),i=Fr(t),s=Kn(r,i);s.payload=e,n!=null&&(s.callback=n),e=Mr(t,s,i),e!==null&&(pn(e,t,i,r),Cu(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=xt(),i=Fr(t),s=Kn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Mr(t,s,i),e!==null&&(pn(e,t,i,r),Cu(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=xt(),r=Fr(t),i=Kn(n,r);i.tag=2,e!=null&&(i.callback=e),e=Mr(t,i,r),e!==null&&(pn(e,t,r,n),Cu(e,t,r))}};function Rv(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Na(n,r)||!Na(i,s):!0}function $T(t,e,n){var r=!1,i=Kr,s=e.contextType;return typeof s=="object"&&s!==null?s=rn(s):(i=Ot(e)?Mi:yt.current,r=e.contextTypes,s=(r=r!=null)?Us(t,i):Kr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=oh,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function kv(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&oh.enqueueReplaceState(e,e.state,null)}function ip(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},zm(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=rn(s):(s=Ot(e)?Mi:yt.current,i.context=Us(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(rp(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&oh.enqueueReplaceState(i,i.state,null),dc(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Ws(t,e){try{var n="",r=e;do n+=f2(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Ld(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function sp(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var UR=typeof WeakMap=="function"?WeakMap:Map;function zT(t,e,n){n=Kn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){yc||(yc=!0,mp=r),sp(t,e)},n}function WT(t,e,n){n=Kn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){sp(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){sp(t,e),typeof r!="function"&&(jr===null?jr=new Set([this]):jr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function bv(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new UR;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=ek.bind(null,t,e,n),e.then(t,t))}function Vv(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Dv(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Kn(-1,1),e.tag=2,Mr(n,e,1))),n.lanes|=1),t)}var BR=ur.ReactCurrentOwner,Vt=!1;function Tt(t,e,n,r){e.child=t===null?_T(e,null,n,r):$s(e,t.child,n,r)}function Nv(t,e,n,r,i){n=n.render;var s=e.ref;return Ds(e,i),r=Gm(t,e,n,r,s,i),n=Qm(),t!==null&&!Vt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,rr(t,e,i)):(Ce&&n&&Lm(e),e.flags|=1,Tt(t,e,r,i),e.child)}function Ov(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!sg(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,HT(t,e,s,r,i)):(t=Du(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Na,n(o,r)&&t.ref===e.ref)return rr(t,e,i)}return e.flags|=1,t=Ur(s,r),t.ref=e.ref,t.return=e,e.child=t}function HT(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Na(s,r)&&t.ref===e.ref)if(Vt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Vt=!0);else return e.lanes=t.lanes,rr(t,e,i)}return op(t,e,n,r,i)}function qT(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},_e(Es,Ut),Ut|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,_e(Es,Ut),Ut|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,_e(Es,Ut),Ut|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,_e(Es,Ut),Ut|=r;return Tt(t,e,i,n),e.child}function KT(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function op(t,e,n,r,i){var s=Ot(n)?Mi:yt.current;return s=Us(e,s),Ds(e,i),n=Gm(t,e,n,r,s,i),r=Qm(),t!==null&&!Vt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,rr(t,e,i)):(Ce&&r&&Lm(e),e.flags|=1,Tt(t,e,n,i),e.child)}function Lv(t,e,n,r,i){if(Ot(n)){var s=!0;ac(e)}else s=!1;if(Ds(e,i),e.stateNode===null)ku(t,e),$T(e,n,r),ip(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=rn(c):(c=Ot(n)?Mi:yt.current,c=Us(e,c));var h=n.getDerivedStateFromProps,f=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==c)&&kv(e,o,r,c),Er=!1;var p=e.memoizedState;o.state=p,dc(e,r,o,i),l=e.memoizedState,a!==r||p!==l||Nt.current||Er?(typeof h=="function"&&(rp(e,n,h,r),l=e.memoizedState),(a=Er||Rv(e,n,a,r,p,l,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=c,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,ET(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:un(e.type,a),o.props=c,f=e.pendingProps,p=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=rn(l):(l=Ot(n)?Mi:yt.current,l=Us(e,l));var y=n.getDerivedStateFromProps;(h=typeof y=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||p!==l)&&kv(e,o,r,l),Er=!1,p=e.memoizedState,o.state=p,dc(e,r,o,i);var S=e.memoizedState;a!==f||p!==S||Nt.current||Er?(typeof y=="function"&&(rp(e,n,y,r),S=e.memoizedState),(c=Er||Rv(e,n,c,r,p,S,l)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,S,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,S,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=S),o.props=r,o.state=S,o.context=l,r=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),r=!1)}return ap(t,e,n,r,s,i)}function ap(t,e,n,r,i,s){KT(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Ev(e,n,!1),rr(t,e,s);r=e.stateNode,BR.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=$s(e,t.child,null,s),e.child=$s(e,null,a,s)):Tt(t,e,a,s),e.memoizedState=r.state,i&&Ev(e,n,!0),e.child}function GT(t){var e=t.stateNode;e.pendingContext?wv(t,e.pendingContext,e.pendingContext!==e.context):e.context&&wv(t,e.context,!1),Wm(t,e.containerInfo)}function Mv(t,e,n,r,i){return Bs(),jm(i),e.flags|=256,Tt(t,e,n,r),e.child}var lp={dehydrated:null,treeContext:null,retryLane:0};function up(t){return{baseLanes:t,cachePool:null,transitions:null}}function QT(t,e,n){var r=e.pendingProps,i=Ae.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),_e(Ae,i&1),t===null)return tp(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=uh(o,r,0,null),t=Ii(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=up(n),e.memoizedState=lp,t):Jm(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return $R(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Ur(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Ur(a,s):(s=Ii(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?up(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=lp,r}return s=t.child,t=s.sibling,r=Ur(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Jm(t,e){return e=uh({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ou(t,e,n,r){return r!==null&&jm(r),$s(e,t.child,null,n),t=Jm(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function $R(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Ld(Error(B(422))),ou(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=uh({mode:"visible",children:r.children},i,0,null),s=Ii(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&$s(e,t.child,null,o),e.child.memoizedState=up(o),e.memoizedState=lp,s);if(!(e.mode&1))return ou(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(B(419)),r=Ld(s,r,void 0),ou(t,e,o,r)}if(a=(o&t.childLanes)!==0,Vt||a){if(r=Qe,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,nr(t,i),pn(r,t,i,-1))}return ig(),r=Ld(Error(B(421))),ou(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=tk.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Bt=Lr(i.nextSibling),zt=e,Ce=!0,hn=null,t!==null&&(Xt[Jt++]=Bn,Xt[Jt++]=$n,Xt[Jt++]=ji,Bn=t.id,$n=t.overflow,ji=e),e=Jm(e,r.children),e.flags|=4096,e)}function jv(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),np(t.return,e,n)}function Md(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function YT(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Tt(t,e,r.children,n),r=Ae.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&jv(t,n,e);else if(t.tag===19)jv(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(_e(Ae,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&fc(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Md(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&fc(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Md(e,!0,n,null,s);break;case"together":Md(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function ku(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function rr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Ui|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(B(153));if(e.child!==null){for(t=e.child,n=Ur(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Ur(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function zR(t,e,n){switch(e.tag){case 3:GT(e),Bs();break;case 5:TT(e);break;case 1:Ot(e.type)&&ac(e);break;case 4:Wm(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;_e(cc,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(_e(Ae,Ae.current&1),e.flags|=128,null):n&e.child.childLanes?QT(t,e,n):(_e(Ae,Ae.current&1),t=rr(t,e,n),t!==null?t.sibling:null);_e(Ae,Ae.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return YT(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),_e(Ae,Ae.current),r)break;return null;case 22:case 23:return e.lanes=0,qT(t,e,n)}return rr(t,e,n)}var XT,cp,JT,ZT;XT=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};cp=function(){};JT=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,wi(In.current);var s=null;switch(n){case"input":i=Vf(t,i),r=Vf(t,r),s=[];break;case"select":i=be({},i,{value:void 0}),r=be({},r,{value:void 0}),s=[];break;case"textarea":i=Of(t,i),r=Of(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=sc)}Mf(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Ca.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var l=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Ca.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&Te("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};ZT=function(t,e,n,r){n!==r&&(e.flags|=4)};function Wo(t,e){if(!Ce)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function ut(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function WR(t,e,n){var r=e.pendingProps;switch(Mm(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ut(e),null;case 1:return Ot(e.type)&&oc(),ut(e),null;case 3:return r=e.stateNode,zs(),Ie(Nt),Ie(yt),qm(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(iu(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,hn!==null&&(vp(hn),hn=null))),cp(t,e),ut(e),null;case 5:Hm(e);var i=wi(Fa.current);if(n=e.type,t!==null&&e.stateNode!=null)JT(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(B(166));return ut(e),null}if(t=wi(In.current),iu(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[xn]=e,r[Ma]=s,t=(e.mode&1)!==0,n){case"dialog":Te("cancel",r),Te("close",r);break;case"iframe":case"object":case"embed":Te("load",r);break;case"video":case"audio":for(i=0;i<ta.length;i++)Te(ta[i],r);break;case"source":Te("error",r);break;case"img":case"image":case"link":Te("error",r),Te("load",r);break;case"details":Te("toggle",r);break;case"input":K0(r,s),Te("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Te("invalid",r);break;case"textarea":Q0(r,s),Te("invalid",r)}Mf(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&ru(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&ru(r.textContent,a,t),i=["children",""+a]):Ca.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Te("scroll",r)}switch(n){case"input":Ql(r),G0(r,s,!0);break;case"textarea":Ql(r),Y0(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=sc)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=CE(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[xn]=e,t[Ma]=r,XT(t,e,!1,!1),e.stateNode=t;e:{switch(o=jf(n,r),n){case"dialog":Te("cancel",t),Te("close",t),i=r;break;case"iframe":case"object":case"embed":Te("load",t),i=r;break;case"video":case"audio":for(i=0;i<ta.length;i++)Te(ta[i],t);i=r;break;case"source":Te("error",t),i=r;break;case"img":case"image":case"link":Te("error",t),Te("load",t),i=r;break;case"details":Te("toggle",t),i=r;break;case"input":K0(t,r),i=Vf(t,r),Te("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=be({},r,{value:void 0}),Te("invalid",t);break;case"textarea":Q0(t,r),i=Of(t,r),Te("invalid",t);break;default:i=r}Mf(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?kE(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&AE(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Aa(t,l):typeof l=="number"&&Aa(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ca.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Te("scroll",t):l!=null&&Tm(t,s,l,o))}switch(n){case"input":Ql(t),G0(t,r,!1);break;case"textarea":Ql(t),Y0(t);break;case"option":r.value!=null&&t.setAttribute("value",""+qr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Rs(t,!!r.multiple,s,!1):r.defaultValue!=null&&Rs(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=sc)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return ut(e),null;case 6:if(t&&e.stateNode!=null)ZT(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(B(166));if(n=wi(Fa.current),wi(In.current),iu(e)){if(r=e.stateNode,n=e.memoizedProps,r[xn]=e,(s=r.nodeValue!==n)&&(t=zt,t!==null))switch(t.tag){case 3:ru(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ru(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[xn]=e,e.stateNode=r}return ut(e),null;case 13:if(Ie(Ae),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ce&&Bt!==null&&e.mode&1&&!(e.flags&128))yT(),Bs(),e.flags|=98560,s=!1;else if(s=iu(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(B(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(B(317));s[xn]=e}else Bs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;ut(e),s=!1}else hn!==null&&(vp(hn),hn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Ae.current&1?ze===0&&(ze=3):ig())),e.updateQueue!==null&&(e.flags|=4),ut(e),null);case 4:return zs(),cp(t,e),t===null&&Oa(e.stateNode.containerInfo),ut(e),null;case 10:return Bm(e.type._context),ut(e),null;case 17:return Ot(e.type)&&oc(),ut(e),null;case 19:if(Ie(Ae),s=e.memoizedState,s===null)return ut(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Wo(s,!1);else{if(ze!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=fc(t),o!==null){for(e.flags|=128,Wo(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return _e(Ae,Ae.current&1|2),e.child}t=t.sibling}s.tail!==null&&Me()>Hs&&(e.flags|=128,r=!0,Wo(s,!1),e.lanes=4194304)}else{if(!r)if(t=fc(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Wo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Ce)return ut(e),null}else 2*Me()-s.renderingStartTime>Hs&&n!==1073741824&&(e.flags|=128,r=!0,Wo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Me(),e.sibling=null,n=Ae.current,_e(Ae,r?n&1|2:n&1),e):(ut(e),null);case 22:case 23:return rg(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Ut&1073741824&&(ut(e),e.subtreeFlags&6&&(e.flags|=8192)):ut(e),null;case 24:return null;case 25:return null}throw Error(B(156,e.tag))}function HR(t,e){switch(Mm(e),e.tag){case 1:return Ot(e.type)&&oc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return zs(),Ie(Nt),Ie(yt),qm(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Hm(e),null;case 13:if(Ie(Ae),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(B(340));Bs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Ie(Ae),null;case 4:return zs(),null;case 10:return Bm(e.type._context),null;case 22:case 23:return rg(),null;case 24:return null;default:return null}}var au=!1,ft=!1,qR=typeof WeakSet=="function"?WeakSet:Set,W=null;function ws(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ne(t,e,r)}else n.current=null}function hp(t,e,n){try{n()}catch(r){Ne(t,e,r)}}var Fv=!1;function KR(t,e){if(Gf=nc,t=iT(),Om(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,h=0,f=t,p=null;t:for(;;){for(var y;f!==n||i!==0&&f.nodeType!==3||(a=o+i),f!==s||r!==0&&f.nodeType!==3||(l=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(y=f.firstChild)!==null;)p=f,f=y;for(;;){if(f===t)break t;if(p===n&&++c===i&&(a=o),p===s&&++h===r&&(l=o),(y=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=y}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Qf={focusedElem:t,selectionRange:n},nc=!1,W=e;W!==null;)if(e=W,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,W=t;else for(;W!==null;){e=W;try{var S=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(S!==null){var I=S.memoizedProps,R=S.memoizedState,v=e.stateNode,w=v.getSnapshotBeforeUpdate(e.elementType===e.type?I:un(e.type,I),R);v.__reactInternalSnapshotBeforeUpdate=w}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(B(163))}}catch(V){Ne(e,e.return,V)}if(t=e.sibling,t!==null){t.return=e.return,W=t;break}W=e.return}return S=Fv,Fv=!1,S}function ma(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&hp(e,n,s)}i=i.next}while(i!==r)}}function ah(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function dp(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function ex(t){var e=t.alternate;e!==null&&(t.alternate=null,ex(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[xn],delete e[Ma],delete e[Jf],delete e[RR],delete e[kR])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function tx(t){return t.tag===5||t.tag===3||t.tag===4}function Uv(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||tx(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function fp(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=sc));else if(r!==4&&(t=t.child,t!==null))for(fp(t,e,n),t=t.sibling;t!==null;)fp(t,e,n),t=t.sibling}function pp(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(pp(t,e,n),t=t.sibling;t!==null;)pp(t,e,n),t=t.sibling}var Xe=null,cn=!1;function gr(t,e,n){for(n=n.child;n!==null;)nx(t,e,n),n=n.sibling}function nx(t,e,n){if(Sn&&typeof Sn.onCommitFiberUnmount=="function")try{Sn.onCommitFiberUnmount(Zc,n)}catch{}switch(n.tag){case 5:ft||ws(n,e);case 6:var r=Xe,i=cn;Xe=null,gr(t,e,n),Xe=r,cn=i,Xe!==null&&(cn?(t=Xe,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Xe.removeChild(n.stateNode));break;case 18:Xe!==null&&(cn?(t=Xe,n=n.stateNode,t.nodeType===8?kd(t.parentNode,n):t.nodeType===1&&kd(t,n),Va(t)):kd(Xe,n.stateNode));break;case 4:r=Xe,i=cn,Xe=n.stateNode.containerInfo,cn=!0,gr(t,e,n),Xe=r,cn=i;break;case 0:case 11:case 14:case 15:if(!ft&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&hp(n,e,o),i=i.next}while(i!==r)}gr(t,e,n);break;case 1:if(!ft&&(ws(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Ne(n,e,a)}gr(t,e,n);break;case 21:gr(t,e,n);break;case 22:n.mode&1?(ft=(r=ft)||n.memoizedState!==null,gr(t,e,n),ft=r):gr(t,e,n);break;default:gr(t,e,n)}}function Bv(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new qR),e.forEach(function(r){var i=nk.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function ln(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Xe=a.stateNode,cn=!1;break e;case 3:Xe=a.stateNode.containerInfo,cn=!0;break e;case 4:Xe=a.stateNode.containerInfo,cn=!0;break e}a=a.return}if(Xe===null)throw Error(B(160));nx(s,o,i),Xe=null,cn=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(c){Ne(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)rx(e,t),e=e.sibling}function rx(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(ln(e,t),_n(t),r&4){try{ma(3,t,t.return),ah(3,t)}catch(I){Ne(t,t.return,I)}try{ma(5,t,t.return)}catch(I){Ne(t,t.return,I)}}break;case 1:ln(e,t),_n(t),r&512&&n!==null&&ws(n,n.return);break;case 5:if(ln(e,t),_n(t),r&512&&n!==null&&ws(n,n.return),t.flags&32){var i=t.stateNode;try{Aa(i,"")}catch(I){Ne(t,t.return,I)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&IE(i,s),jf(a,o);var c=jf(a,s);for(o=0;o<l.length;o+=2){var h=l[o],f=l[o+1];h==="style"?kE(i,f):h==="dangerouslySetInnerHTML"?AE(i,f):h==="children"?Aa(i,f):Tm(i,h,f,c)}switch(a){case"input":Df(i,s);break;case"textarea":PE(i,s);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var y=s.value;y!=null?Rs(i,!!s.multiple,y,!1):p!==!!s.multiple&&(s.defaultValue!=null?Rs(i,!!s.multiple,s.defaultValue,!0):Rs(i,!!s.multiple,s.multiple?[]:"",!1))}i[Ma]=s}catch(I){Ne(t,t.return,I)}}break;case 6:if(ln(e,t),_n(t),r&4){if(t.stateNode===null)throw Error(B(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(I){Ne(t,t.return,I)}}break;case 3:if(ln(e,t),_n(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Va(e.containerInfo)}catch(I){Ne(t,t.return,I)}break;case 4:ln(e,t),_n(t);break;case 13:ln(e,t),_n(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(tg=Me())),r&4&&Bv(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(ft=(c=ft)||h,ln(e,t),ft=c):ln(e,t),_n(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!h&&t.mode&1)for(W=t,h=t.child;h!==null;){for(f=W=h;W!==null;){switch(p=W,y=p.child,p.tag){case 0:case 11:case 14:case 15:ma(4,p,p.return);break;case 1:ws(p,p.return);var S=p.stateNode;if(typeof S.componentWillUnmount=="function"){r=p,n=p.return;try{e=r,S.props=e.memoizedProps,S.state=e.memoizedState,S.componentWillUnmount()}catch(I){Ne(r,n,I)}}break;case 5:ws(p,p.return);break;case 22:if(p.memoizedState!==null){zv(f);continue}}y!==null?(y.return=p,W=y):zv(f)}h=h.sibling}e:for(h=null,f=t;;){if(f.tag===5){if(h===null){h=f;try{i=f.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=RE("display",o))}catch(I){Ne(t,t.return,I)}}}else if(f.tag===6){if(h===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(I){Ne(t,t.return,I)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;h===f&&(h=null),f=f.return}h===f&&(h=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:ln(e,t),_n(t),r&4&&Bv(t);break;case 21:break;default:ln(e,t),_n(t)}}function _n(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(tx(n)){var r=n;break e}n=n.return}throw Error(B(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Aa(i,""),r.flags&=-33);var s=Uv(t);pp(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Uv(t);fp(t,a,o);break;default:throw Error(B(161))}}catch(l){Ne(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function GR(t,e,n){W=t,ix(t)}function ix(t,e,n){for(var r=(t.mode&1)!==0;W!==null;){var i=W,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||au;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||ft;a=au;var c=ft;if(au=o,(ft=l)&&!c)for(W=i;W!==null;)o=W,l=o.child,o.tag===22&&o.memoizedState!==null?Wv(i):l!==null?(l.return=o,W=l):Wv(i);for(;s!==null;)W=s,ix(s),s=s.sibling;W=i,au=a,ft=c}$v(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,W=s):$v(t)}}function $v(t){for(;W!==null;){var e=W;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:ft||ah(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!ft)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:un(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Pv(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Pv(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var f=h.dehydrated;f!==null&&Va(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(B(163))}ft||e.flags&512&&dp(e)}catch(p){Ne(e,e.return,p)}}if(e===t){W=null;break}if(n=e.sibling,n!==null){n.return=e.return,W=n;break}W=e.return}}function zv(t){for(;W!==null;){var e=W;if(e===t){W=null;break}var n=e.sibling;if(n!==null){n.return=e.return,W=n;break}W=e.return}}function Wv(t){for(;W!==null;){var e=W;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{ah(4,e)}catch(l){Ne(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){Ne(e,i,l)}}var s=e.return;try{dp(e)}catch(l){Ne(e,s,l)}break;case 5:var o=e.return;try{dp(e)}catch(l){Ne(e,o,l)}}}catch(l){Ne(e,e.return,l)}if(e===t){W=null;break}var a=e.sibling;if(a!==null){a.return=e.return,W=a;break}W=e.return}}var QR=Math.ceil,gc=ur.ReactCurrentDispatcher,Zm=ur.ReactCurrentOwner,nn=ur.ReactCurrentBatchConfig,le=0,Qe=null,Ue=null,tt=0,Ut=0,Es=ti(0),ze=0,za=null,Ui=0,lh=0,eg=0,ga=null,bt=null,tg=0,Hs=1/0,jn=null,yc=!1,mp=null,jr=null,lu=!1,Rr=null,vc=0,ya=0,gp=null,bu=-1,Vu=0;function xt(){return le&6?Me():bu!==-1?bu:bu=Me()}function Fr(t){return t.mode&1?le&2&&tt!==0?tt&-tt:VR.transition!==null?(Vu===0&&(Vu=$E()),Vu):(t=me,t!==0||(t=window.event,t=t===void 0?16:QE(t.type)),t):1}function pn(t,e,n,r){if(50<ya)throw ya=0,gp=null,Error(B(185));ul(t,n,r),(!(le&2)||t!==Qe)&&(t===Qe&&(!(le&2)&&(lh|=n),ze===4&&xr(t,tt)),Lt(t,r),n===1&&le===0&&!(e.mode&1)&&(Hs=Me()+500,ih&&ni()))}function Lt(t,e){var n=t.callbackNode;V2(t,e);var r=tc(t,t===Qe?tt:0);if(r===0)n!==null&&Z0(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Z0(n),e===1)t.tag===0?bR(Hv.bind(null,t)):pT(Hv.bind(null,t)),CR(function(){!(le&6)&&ni()}),n=null;else{switch(zE(r)){case 1:n=Cm;break;case 4:n=UE;break;case 16:n=ec;break;case 536870912:n=BE;break;default:n=ec}n=dx(n,sx.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function sx(t,e){if(bu=-1,Vu=0,le&6)throw Error(B(327));var n=t.callbackNode;if(Ns()&&t.callbackNode!==n)return null;var r=tc(t,t===Qe?tt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=_c(t,r);else{e=r;var i=le;le|=2;var s=ax();(Qe!==t||tt!==e)&&(jn=null,Hs=Me()+500,Si(t,e));do try{JR();break}catch(a){ox(t,a)}while(!0);Um(),gc.current=s,le=i,Ue!==null?e=0:(Qe=null,tt=0,e=ze)}if(e!==0){if(e===2&&(i=zf(t),i!==0&&(r=i,e=yp(t,i))),e===1)throw n=za,Si(t,0),xr(t,r),Lt(t,Me()),n;if(e===6)xr(t,r);else{if(i=t.current.alternate,!(r&30)&&!YR(i)&&(e=_c(t,r),e===2&&(s=zf(t),s!==0&&(r=s,e=yp(t,s))),e===1))throw n=za,Si(t,0),xr(t,r),Lt(t,Me()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(B(345));case 2:pi(t,bt,jn);break;case 3:if(xr(t,r),(r&130023424)===r&&(e=tg+500-Me(),10<e)){if(tc(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){xt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Xf(pi.bind(null,t,bt,jn),e);break}pi(t,bt,jn);break;case 4:if(xr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-fn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Me()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*QR(r/1960))-r,10<r){t.timeoutHandle=Xf(pi.bind(null,t,bt,jn),r);break}pi(t,bt,jn);break;case 5:pi(t,bt,jn);break;default:throw Error(B(329))}}}return Lt(t,Me()),t.callbackNode===n?sx.bind(null,t):null}function yp(t,e){var n=ga;return t.current.memoizedState.isDehydrated&&(Si(t,e).flags|=256),t=_c(t,e),t!==2&&(e=bt,bt=n,e!==null&&vp(e)),t}function vp(t){bt===null?bt=t:bt.push.apply(bt,t)}function YR(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!gn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function xr(t,e){for(e&=~eg,e&=~lh,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-fn(e),r=1<<n;t[n]=-1,e&=~r}}function Hv(t){if(le&6)throw Error(B(327));Ns();var e=tc(t,0);if(!(e&1))return Lt(t,Me()),null;var n=_c(t,e);if(t.tag!==0&&n===2){var r=zf(t);r!==0&&(e=r,n=yp(t,r))}if(n===1)throw n=za,Si(t,0),xr(t,e),Lt(t,Me()),n;if(n===6)throw Error(B(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,pi(t,bt,jn),Lt(t,Me()),null}function ng(t,e){var n=le;le|=1;try{return t(e)}finally{le=n,le===0&&(Hs=Me()+500,ih&&ni())}}function Bi(t){Rr!==null&&Rr.tag===0&&!(le&6)&&Ns();var e=le;le|=1;var n=nn.transition,r=me;try{if(nn.transition=null,me=1,t)return t()}finally{me=r,nn.transition=n,le=e,!(le&6)&&ni()}}function rg(){Ut=Es.current,Ie(Es)}function Si(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,PR(n)),Ue!==null)for(n=Ue.return;n!==null;){var r=n;switch(Mm(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&oc();break;case 3:zs(),Ie(Nt),Ie(yt),qm();break;case 5:Hm(r);break;case 4:zs();break;case 13:Ie(Ae);break;case 19:Ie(Ae);break;case 10:Bm(r.type._context);break;case 22:case 23:rg()}n=n.return}if(Qe=t,Ue=t=Ur(t.current,null),tt=Ut=e,ze=0,za=null,eg=lh=Ui=0,bt=ga=null,_i!==null){for(e=0;e<_i.length;e++)if(n=_i[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}_i=null}return t}function ox(t,e){do{var n=Ue;try{if(Um(),Au.current=mc,pc){for(var r=ke.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}pc=!1}if(Fi=0,Ke=$e=ke=null,pa=!1,Ua=0,Zm.current=null,n===null||n.return===null){ze=1,za=e,Ue=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=tt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,h=a,f=h.tag;if(!(h.mode&1)&&(f===0||f===11||f===15)){var p=h.alternate;p?(h.updateQueue=p.updateQueue,h.memoizedState=p.memoizedState,h.lanes=p.lanes):(h.updateQueue=null,h.memoizedState=null)}var y=Vv(o);if(y!==null){y.flags&=-257,Dv(y,o,a,s,e),y.mode&1&&bv(s,c,e),e=y,l=c;var S=e.updateQueue;if(S===null){var I=new Set;I.add(l),e.updateQueue=I}else S.add(l);break e}else{if(!(e&1)){bv(s,c,e),ig();break e}l=Error(B(426))}}else if(Ce&&a.mode&1){var R=Vv(o);if(R!==null){!(R.flags&65536)&&(R.flags|=256),Dv(R,o,a,s,e),jm(Ws(l,a));break e}}s=l=Ws(l,a),ze!==4&&(ze=2),ga===null?ga=[s]:ga.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var v=zT(s,l,e);Iv(s,v);break e;case 1:a=l;var w=s.type,x=s.stateNode;if(!(s.flags&128)&&(typeof w.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(jr===null||!jr.has(x)))){s.flags|=65536,e&=-e,s.lanes|=e;var V=WT(s,a,e);Iv(s,V);break e}}s=s.return}while(s!==null)}ux(n)}catch(O){e=O,Ue===n&&n!==null&&(Ue=n=n.return);continue}break}while(!0)}function ax(){var t=gc.current;return gc.current=mc,t===null?mc:t}function ig(){(ze===0||ze===3||ze===2)&&(ze=4),Qe===null||!(Ui&268435455)&&!(lh&268435455)||xr(Qe,tt)}function _c(t,e){var n=le;le|=2;var r=ax();(Qe!==t||tt!==e)&&(jn=null,Si(t,e));do try{XR();break}catch(i){ox(t,i)}while(!0);if(Um(),le=n,gc.current=r,Ue!==null)throw Error(B(261));return Qe=null,tt=0,ze}function XR(){for(;Ue!==null;)lx(Ue)}function JR(){for(;Ue!==null&&!x2();)lx(Ue)}function lx(t){var e=hx(t.alternate,t,Ut);t.memoizedProps=t.pendingProps,e===null?ux(t):Ue=e,Zm.current=null}function ux(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=HR(n,e),n!==null){n.flags&=32767,Ue=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{ze=6,Ue=null;return}}else if(n=WR(n,e,Ut),n!==null){Ue=n;return}if(e=e.sibling,e!==null){Ue=e;return}Ue=e=t}while(e!==null);ze===0&&(ze=5)}function pi(t,e,n){var r=me,i=nn.transition;try{nn.transition=null,me=1,ZR(t,e,n,r)}finally{nn.transition=i,me=r}return null}function ZR(t,e,n,r){do Ns();while(Rr!==null);if(le&6)throw Error(B(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(B(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(D2(t,s),t===Qe&&(Ue=Qe=null,tt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||lu||(lu=!0,dx(ec,function(){return Ns(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=nn.transition,nn.transition=null;var o=me;me=1;var a=le;le|=4,Zm.current=null,KR(t,n),rx(n,t),_R(Qf),nc=!!Gf,Qf=Gf=null,t.current=n,GR(n),S2(),le=a,me=o,nn.transition=s}else t.current=n;if(lu&&(lu=!1,Rr=t,vc=i),s=t.pendingLanes,s===0&&(jr=null),C2(n.stateNode),Lt(t,Me()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(yc)throw yc=!1,t=mp,mp=null,t;return vc&1&&t.tag!==0&&Ns(),s=t.pendingLanes,s&1?t===gp?ya++:(ya=0,gp=t):ya=0,ni(),null}function Ns(){if(Rr!==null){var t=zE(vc),e=nn.transition,n=me;try{if(nn.transition=null,me=16>t?16:t,Rr===null)var r=!1;else{if(t=Rr,Rr=null,vc=0,le&6)throw Error(B(331));var i=le;for(le|=4,W=t.current;W!==null;){var s=W,o=s.child;if(W.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(W=c;W!==null;){var h=W;switch(h.tag){case 0:case 11:case 15:ma(8,h,s)}var f=h.child;if(f!==null)f.return=h,W=f;else for(;W!==null;){h=W;var p=h.sibling,y=h.return;if(ex(h),h===c){W=null;break}if(p!==null){p.return=y,W=p;break}W=y}}}var S=s.alternate;if(S!==null){var I=S.child;if(I!==null){S.child=null;do{var R=I.sibling;I.sibling=null,I=R}while(I!==null)}}W=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,W=o;else e:for(;W!==null;){if(s=W,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ma(9,s,s.return)}var v=s.sibling;if(v!==null){v.return=s.return,W=v;break e}W=s.return}}var w=t.current;for(W=w;W!==null;){o=W;var x=o.child;if(o.subtreeFlags&2064&&x!==null)x.return=o,W=x;else e:for(o=w;W!==null;){if(a=W,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:ah(9,a)}}catch(O){Ne(a,a.return,O)}if(a===o){W=null;break e}var V=a.sibling;if(V!==null){V.return=a.return,W=V;break e}W=a.return}}if(le=i,ni(),Sn&&typeof Sn.onPostCommitFiberRoot=="function")try{Sn.onPostCommitFiberRoot(Zc,t)}catch{}r=!0}return r}finally{me=n,nn.transition=e}}return!1}function qv(t,e,n){e=Ws(n,e),e=zT(t,e,1),t=Mr(t,e,1),e=xt(),t!==null&&(ul(t,1,e),Lt(t,e))}function Ne(t,e,n){if(t.tag===3)qv(t,t,n);else for(;e!==null;){if(e.tag===3){qv(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(jr===null||!jr.has(r))){t=Ws(n,t),t=WT(e,t,1),e=Mr(e,t,1),t=xt(),e!==null&&(ul(e,1,t),Lt(e,t));break}}e=e.return}}function ek(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=xt(),t.pingedLanes|=t.suspendedLanes&n,Qe===t&&(tt&n)===n&&(ze===4||ze===3&&(tt&130023424)===tt&&500>Me()-tg?Si(t,0):eg|=n),Lt(t,e)}function cx(t,e){e===0&&(t.mode&1?(e=Jl,Jl<<=1,!(Jl&130023424)&&(Jl=4194304)):e=1);var n=xt();t=nr(t,e),t!==null&&(ul(t,e,n),Lt(t,n))}function tk(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),cx(t,n)}function nk(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(B(314))}r!==null&&r.delete(e),cx(t,n)}var hx;hx=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Nt.current)Vt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Vt=!1,zR(t,e,n);Vt=!!(t.flags&131072)}else Vt=!1,Ce&&e.flags&1048576&&mT(e,uc,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;ku(t,e),t=e.pendingProps;var i=Us(e,yt.current);Ds(e,n),i=Gm(null,e,r,t,i,n);var s=Qm();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Ot(r)?(s=!0,ac(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,zm(e),i.updater=oh,e.stateNode=i,i._reactInternals=e,ip(e,r,t,n),e=ap(null,e,r,!0,s,n)):(e.tag=0,Ce&&s&&Lm(e),Tt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(ku(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=ik(r),t=un(r,t),i){case 0:e=op(null,e,r,t,n);break e;case 1:e=Lv(null,e,r,t,n);break e;case 11:e=Nv(null,e,r,t,n);break e;case 14:e=Ov(null,e,r,un(r.type,t),n);break e}throw Error(B(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:un(r,i),op(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:un(r,i),Lv(t,e,r,i,n);case 3:e:{if(GT(e),t===null)throw Error(B(387));r=e.pendingProps,s=e.memoizedState,i=s.element,ET(t,e),dc(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Ws(Error(B(423)),e),e=Mv(t,e,r,n,i);break e}else if(r!==i){i=Ws(Error(B(424)),e),e=Mv(t,e,r,n,i);break e}else for(Bt=Lr(e.stateNode.containerInfo.firstChild),zt=e,Ce=!0,hn=null,n=_T(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Bs(),r===i){e=rr(t,e,n);break e}Tt(t,e,r,n)}e=e.child}return e;case 5:return TT(e),t===null&&tp(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Yf(r,i)?o=null:s!==null&&Yf(r,s)&&(e.flags|=32),KT(t,e),Tt(t,e,o,n),e.child;case 6:return t===null&&tp(e),null;case 13:return QT(t,e,n);case 4:return Wm(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=$s(e,null,r,n):Tt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:un(r,i),Nv(t,e,r,i,n);case 7:return Tt(t,e,e.pendingProps,n),e.child;case 8:return Tt(t,e,e.pendingProps.children,n),e.child;case 12:return Tt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,_e(cc,r._currentValue),r._currentValue=o,s!==null)if(gn(s.value,o)){if(s.children===i.children&&!Nt.current){e=rr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Kn(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?l.next=l:(l.next=h.next,h.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),np(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(B(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),np(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Tt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Ds(e,n),i=rn(i),r=r(i),e.flags|=1,Tt(t,e,r,n),e.child;case 14:return r=e.type,i=un(r,e.pendingProps),i=un(r.type,i),Ov(t,e,r,i,n);case 15:return HT(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:un(r,i),ku(t,e),e.tag=1,Ot(r)?(t=!0,ac(e)):t=!1,Ds(e,n),$T(e,r,i),ip(e,r,i,n),ap(null,e,r,!0,t,n);case 19:return YT(t,e,n);case 22:return qT(t,e,n)}throw Error(B(156,e.tag))};function dx(t,e){return FE(t,e)}function rk(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function en(t,e,n,r){return new rk(t,e,n,r)}function sg(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ik(t){if(typeof t=="function")return sg(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Sm)return 11;if(t===Im)return 14}return 2}function Ur(t,e){var n=t.alternate;return n===null?(n=en(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Du(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")sg(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case hs:return Ii(n.children,i,s,e);case xm:o=8,i|=8;break;case Af:return t=en(12,n,e,i|2),t.elementType=Af,t.lanes=s,t;case Rf:return t=en(13,n,e,i),t.elementType=Rf,t.lanes=s,t;case kf:return t=en(19,n,e,i),t.elementType=kf,t.lanes=s,t;case TE:return uh(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case wE:o=10;break e;case EE:o=9;break e;case Sm:o=11;break e;case Im:o=14;break e;case wr:o=16,r=null;break e}throw Error(B(130,t==null?t:typeof t,""))}return e=en(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Ii(t,e,n,r){return t=en(7,t,r,e),t.lanes=n,t}function uh(t,e,n,r){return t=en(22,t,r,e),t.elementType=TE,t.lanes=n,t.stateNode={isHidden:!1},t}function jd(t,e,n){return t=en(6,t,null,e),t.lanes=n,t}function Fd(t,e,n){return e=en(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function sk(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=_d(0),this.expirationTimes=_d(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=_d(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function og(t,e,n,r,i,s,o,a,l){return t=new sk(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=en(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},zm(s),t}function ok(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:cs,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function fx(t){if(!t)return Kr;t=t._reactInternals;e:{if(Gi(t)!==t||t.tag!==1)throw Error(B(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Ot(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(B(171))}if(t.tag===1){var n=t.type;if(Ot(n))return fT(t,n,e)}return e}function px(t,e,n,r,i,s,o,a,l){return t=og(n,r,!0,t,i,s,o,a,l),t.context=fx(null),n=t.current,r=xt(),i=Fr(n),s=Kn(r,i),s.callback=e??null,Mr(n,s,i),t.current.lanes=i,ul(t,i,r),Lt(t,r),t}function ch(t,e,n,r){var i=e.current,s=xt(),o=Fr(i);return n=fx(n),e.context===null?e.context=n:e.pendingContext=n,e=Kn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Mr(i,e,o),t!==null&&(pn(t,i,o,s),Cu(t,i,o)),o}function wc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Kv(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function ag(t,e){Kv(t,e),(t=t.alternate)&&Kv(t,e)}function ak(){return null}var mx=typeof reportError=="function"?reportError:function(t){console.error(t)};function lg(t){this._internalRoot=t}hh.prototype.render=lg.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(B(409));ch(t,e,null,null)};hh.prototype.unmount=lg.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Bi(function(){ch(null,t,null,null)}),e[tr]=null}};function hh(t){this._internalRoot=t}hh.prototype.unstable_scheduleHydration=function(t){if(t){var e=qE();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Tr.length&&e!==0&&e<Tr[n].priority;n++);Tr.splice(n,0,t),n===0&&GE(t)}};function ug(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function dh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Gv(){}function lk(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=wc(o);s.call(c)}}var o=px(e,r,t,0,null,!1,!1,"",Gv);return t._reactRootContainer=o,t[tr]=o.current,Oa(t.nodeType===8?t.parentNode:t),Bi(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=wc(l);a.call(c)}}var l=og(t,0,!1,null,null,!1,!1,"",Gv);return t._reactRootContainer=l,t[tr]=l.current,Oa(t.nodeType===8?t.parentNode:t),Bi(function(){ch(e,l,n,r)}),l}function fh(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=wc(o);a.call(l)}}ch(e,o,t,i)}else o=lk(n,e,t,i,r);return wc(o)}WE=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ea(e.pendingLanes);n!==0&&(Am(e,n|1),Lt(e,Me()),!(le&6)&&(Hs=Me()+500,ni()))}break;case 13:Bi(function(){var r=nr(t,1);if(r!==null){var i=xt();pn(r,t,1,i)}}),ag(t,1)}};Rm=function(t){if(t.tag===13){var e=nr(t,134217728);if(e!==null){var n=xt();pn(e,t,134217728,n)}ag(t,134217728)}};HE=function(t){if(t.tag===13){var e=Fr(t),n=nr(t,e);if(n!==null){var r=xt();pn(n,t,e,r)}ag(t,e)}};qE=function(){return me};KE=function(t,e){var n=me;try{return me=t,e()}finally{me=n}};Uf=function(t,e,n){switch(e){case"input":if(Df(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=rh(r);if(!i)throw Error(B(90));SE(r),Df(r,i)}}}break;case"textarea":PE(t,n);break;case"select":e=n.value,e!=null&&Rs(t,!!n.multiple,e,!1)}};DE=ng;NE=Bi;var uk={usingClientEntryPoint:!1,Events:[hl,ms,rh,bE,VE,ng]},Ho={findFiberByHostInstance:vi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},ck={bundleType:Ho.bundleType,version:Ho.version,rendererPackageName:Ho.rendererPackageName,rendererConfig:Ho.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ur.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=ME(t),t===null?null:t.stateNode},findFiberByHostInstance:Ho.findFiberByHostInstance||ak,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var uu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!uu.isDisabled&&uu.supportsFiber)try{Zc=uu.inject(ck),Sn=uu}catch{}}qt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=uk;qt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ug(e))throw Error(B(200));return ok(t,e,null,n)};qt.createRoot=function(t,e){if(!ug(t))throw Error(B(299));var n=!1,r="",i=mx;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=og(t,1,!1,null,null,n,!1,r,i),t[tr]=e.current,Oa(t.nodeType===8?t.parentNode:t),new lg(e)};qt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(B(188)):(t=Object.keys(t).join(","),Error(B(268,t)));return t=ME(e),t=t===null?null:t.stateNode,t};qt.flushSync=function(t){return Bi(t)};qt.hydrate=function(t,e,n){if(!dh(e))throw Error(B(200));return fh(null,t,e,!0,n)};qt.hydrateRoot=function(t,e,n){if(!ug(t))throw Error(B(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=mx;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=px(e,null,t,1,n??null,i,!1,s,o),t[tr]=e.current,Oa(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new hh(e)};qt.render=function(t,e,n){if(!dh(e))throw Error(B(200));return fh(null,t,e,!1,n)};qt.unmountComponentAtNode=function(t){if(!dh(t))throw Error(B(40));return t._reactRootContainer?(Bi(function(){fh(null,null,t,!1,function(){t._reactRootContainer=null,t[tr]=null})}),!0):!1};qt.unstable_batchedUpdates=ng;qt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!dh(n))throw Error(B(200));if(t==null||t._reactInternals===void 0)throw Error(B(38));return fh(t,e,n,!1,r)};qt.version="18.3.1-next-f1338f8080-20240426";function gx(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(gx)}catch(t){console.error(t)}}gx(),gE.exports=qt;var hk=gE.exports,yx,Qv=hk;yx=Qv.createRoot,Qv.hydrateRoot;var Dt=function(){return Dt=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},Dt.apply(this,arguments)};function Wa(t,e,n){if(n||arguments.length===2)for(var r=0,i=e.length,s;r<i;r++)(s||!(r in e))&&(s||(s=Array.prototype.slice.call(e,0,r)),s[r]=e[r]);return t.concat(s||Array.prototype.slice.call(e))}var xe="-ms-",va="-moz-",he="-webkit-",vx="comm",ph="rule",cg="decl",dk="@import",_x="@keyframes",fk="@layer",wx=Math.abs,hg=String.fromCharCode,_p=Object.assign;function pk(t,e){return Ge(t,0)^45?(((e<<2^Ge(t,0))<<2^Ge(t,1))<<2^Ge(t,2))<<2^Ge(t,3):0}function Ex(t){return t.trim()}function Fn(t,e){return(t=e.exec(t))?t[0]:t}function ne(t,e,n){return t.replace(e,n)}function Nu(t,e,n){return t.indexOf(e,n)}function Ge(t,e){return t.charCodeAt(e)|0}function qs(t,e,n){return t.slice(e,n)}function Tn(t){return t.length}function Tx(t){return t.length}function na(t,e){return e.push(t),t}function mk(t,e){return t.map(e).join("")}function Yv(t,e){return t.filter(function(n){return!Fn(n,e)})}var mh=1,Ks=1,xx=0,on=0,Fe=0,po="";function gh(t,e,n,r,i,s,o,a){return{value:t,root:e,parent:n,type:r,props:i,children:s,line:mh,column:Ks,length:o,return:"",siblings:a}}function vr(t,e){return _p(gh("",null,null,"",null,null,0,t.siblings),t,{length:-t.length},e)}function is(t){for(;t.root;)t=vr(t.root,{children:[t]});na(t,t.siblings)}function gk(){return Fe}function yk(){return Fe=on>0?Ge(po,--on):0,Ks--,Fe===10&&(Ks=1,mh--),Fe}function mn(){return Fe=on<xx?Ge(po,on++):0,Ks++,Fe===10&&(Ks=1,mh++),Fe}function Pi(){return Ge(po,on)}function Ou(){return on}function yh(t,e){return qs(po,t,e)}function wp(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function vk(t){return mh=Ks=1,xx=Tn(po=t),on=0,[]}function _k(t){return po="",t}function Ud(t){return Ex(yh(on-1,Ep(t===91?t+2:t===40?t+1:t)))}function wk(t){for(;(Fe=Pi())&&Fe<33;)mn();return wp(t)>2||wp(Fe)>3?"":" "}function Ek(t,e){for(;--e&&mn()&&!(Fe<48||Fe>102||Fe>57&&Fe<65||Fe>70&&Fe<97););return yh(t,Ou()+(e<6&&Pi()==32&&mn()==32))}function Ep(t){for(;mn();)switch(Fe){case t:return on;case 34:case 39:t!==34&&t!==39&&Ep(Fe);break;case 40:t===41&&Ep(t);break;case 92:mn();break}return on}function Tk(t,e){for(;mn()&&t+Fe!==57;)if(t+Fe===84&&Pi()===47)break;return"/*"+yh(e,on-1)+"*"+hg(t===47?t:mn())}function xk(t){for(;!wp(Pi());)mn();return yh(t,on)}function Sk(t){return _k(Lu("",null,null,null,[""],t=vk(t),0,[0],t))}function Lu(t,e,n,r,i,s,o,a,l){for(var c=0,h=0,f=o,p=0,y=0,S=0,I=1,R=1,v=1,w=0,x="",V=i,O=s,M=r,T=x;R;)switch(S=w,w=mn()){case 40:if(S!=108&&Ge(T,f-1)==58){Nu(T+=ne(Ud(w),"&","&\f"),"&\f",wx(c?a[c-1]:0))!=-1&&(v=-1);break}case 34:case 39:case 91:T+=Ud(w);break;case 9:case 10:case 13:case 32:T+=wk(S);break;case 92:T+=Ek(Ou()-1,7);continue;case 47:switch(Pi()){case 42:case 47:na(Ik(Tk(mn(),Ou()),e,n,l),l);break;default:T+="/"}break;case 123*I:a[c++]=Tn(T)*v;case 125*I:case 59:case 0:switch(w){case 0:case 125:R=0;case 59+h:v==-1&&(T=ne(T,/\f/g,"")),y>0&&Tn(T)-f&&na(y>32?Jv(T+";",r,n,f-1,l):Jv(ne(T," ","")+";",r,n,f-2,l),l);break;case 59:T+=";";default:if(na(M=Xv(T,e,n,c,h,i,a,x,V=[],O=[],f,s),s),w===123)if(h===0)Lu(T,e,M,M,V,s,f,a,O);else switch(p===99&&Ge(T,3)===110?100:p){case 100:case 108:case 109:case 115:Lu(t,M,M,r&&na(Xv(t,M,M,0,0,i,a,x,i,V=[],f,O),O),i,O,f,a,r?V:O);break;default:Lu(T,M,M,M,[""],O,0,a,O)}}c=h=y=0,I=v=1,x=T="",f=o;break;case 58:f=1+Tn(T),y=S;default:if(I<1){if(w==123)--I;else if(w==125&&I++==0&&yk()==125)continue}switch(T+=hg(w),w*I){case 38:v=h>0?1:(T+="\f",-1);break;case 44:a[c++]=(Tn(T)-1)*v,v=1;break;case 64:Pi()===45&&(T+=Ud(mn())),p=Pi(),h=f=Tn(x=T+=xk(Ou())),w++;break;case 45:S===45&&Tn(T)==2&&(I=0)}}return s}function Xv(t,e,n,r,i,s,o,a,l,c,h,f){for(var p=i-1,y=i===0?s:[""],S=Tx(y),I=0,R=0,v=0;I<r;++I)for(var w=0,x=qs(t,p+1,p=wx(R=o[I])),V=t;w<S;++w)(V=Ex(R>0?y[w]+" "+x:ne(x,/&\f/g,y[w])))&&(l[v++]=V);return gh(t,e,n,i===0?ph:a,l,c,h,f)}function Ik(t,e,n,r){return gh(t,e,n,vx,hg(gk()),qs(t,2,-2),0,r)}function Jv(t,e,n,r,i){return gh(t,e,n,cg,qs(t,0,r),qs(t,r+1,-1),r,i)}function Sx(t,e,n){switch(pk(t,e)){case 5103:return he+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return he+t+t;case 4789:return va+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return he+t+va+t+xe+t+t;case 5936:switch(Ge(t,e+11)){case 114:return he+t+xe+ne(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return he+t+xe+ne(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return he+t+xe+ne(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return he+t+xe+t+t;case 6165:return he+t+xe+"flex-"+t+t;case 5187:return he+t+ne(t,/(\w+).+(:[^]+)/,he+"box-$1$2"+xe+"flex-$1$2")+t;case 5443:return he+t+xe+"flex-item-"+ne(t,/flex-|-self/g,"")+(Fn(t,/flex-|baseline/)?"":xe+"grid-row-"+ne(t,/flex-|-self/g,""))+t;case 4675:return he+t+xe+"flex-line-pack"+ne(t,/align-content|flex-|-self/g,"")+t;case 5548:return he+t+xe+ne(t,"shrink","negative")+t;case 5292:return he+t+xe+ne(t,"basis","preferred-size")+t;case 6060:return he+"box-"+ne(t,"-grow","")+he+t+xe+ne(t,"grow","positive")+t;case 4554:return he+ne(t,/([^-])(transform)/g,"$1"+he+"$2")+t;case 6187:return ne(ne(ne(t,/(zoom-|grab)/,he+"$1"),/(image-set)/,he+"$1"),t,"")+t;case 5495:case 3959:return ne(t,/(image-set\([^]*)/,he+"$1$`$1");case 4968:return ne(ne(t,/(.+:)(flex-)?(.*)/,he+"box-pack:$3"+xe+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+he+t+t;case 4200:if(!Fn(t,/flex-|baseline/))return xe+"grid-column-align"+qs(t,e)+t;break;case 2592:case 3360:return xe+ne(t,"template-","")+t;case 4384:case 3616:return n&&n.some(function(r,i){return e=i,Fn(r.props,/grid-\w+-end/)})?~Nu(t+(n=n[e].value),"span",0)?t:xe+ne(t,"-start","")+t+xe+"grid-row-span:"+(~Nu(n,"span",0)?Fn(n,/\d+/):+Fn(n,/\d+/)-+Fn(t,/\d+/))+";":xe+ne(t,"-start","")+t;case 4896:case 4128:return n&&n.some(function(r){return Fn(r.props,/grid-\w+-start/)})?t:xe+ne(ne(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return ne(t,/(.+)-inline(.+)/,he+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Tn(t)-1-e>6)switch(Ge(t,e+1)){case 109:if(Ge(t,e+4)!==45)break;case 102:return ne(t,/(.+:)(.+)-([^]+)/,"$1"+he+"$2-$3$1"+va+(Ge(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~Nu(t,"stretch",0)?Sx(ne(t,"stretch","fill-available"),e,n)+t:t}break;case 5152:case 5920:return ne(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,s,o,a,l,c){return xe+i+":"+s+c+(o?xe+i+"-span:"+(a?l:+l-+s)+c:"")+t});case 4949:if(Ge(t,e+6)===121)return ne(t,":",":"+he)+t;break;case 6444:switch(Ge(t,Ge(t,14)===45?18:11)){case 120:return ne(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+he+(Ge(t,14)===45?"inline-":"")+"box$3$1"+he+"$2$3$1"+xe+"$2box$3")+t;case 100:return ne(t,":",":"+xe)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return ne(t,"scroll-","scroll-snap-")+t}return t}function Ec(t,e){for(var n="",r=0;r<t.length;r++)n+=e(t[r],r,t,e)||"";return n}function Pk(t,e,n,r){switch(t.type){case fk:if(t.children.length)break;case dk:case cg:return t.return=t.return||t.value;case vx:return"";case _x:return t.return=t.value+"{"+Ec(t.children,r)+"}";case ph:if(!Tn(t.value=t.props.join(",")))return""}return Tn(n=Ec(t.children,r))?t.return=t.value+"{"+n+"}":""}function Ck(t){var e=Tx(t);return function(n,r,i,s){for(var o="",a=0;a<e;a++)o+=t[a](n,r,i,s)||"";return o}}function Ak(t){return function(e){e.root||(e=e.return)&&t(e)}}function Rk(t,e,n,r){if(t.length>-1&&!t.return)switch(t.type){case cg:t.return=Sx(t.value,t.length,n);return;case _x:return Ec([vr(t,{value:ne(t.value,"@","@"+he)})],r);case ph:if(t.length)return mk(n=t.props,function(i){switch(Fn(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":is(vr(t,{props:[ne(i,/:(read-\w+)/,":"+va+"$1")]})),is(vr(t,{props:[i]})),_p(t,{props:Yv(n,r)});break;case"::placeholder":is(vr(t,{props:[ne(i,/:(plac\w+)/,":"+he+"input-$1")]})),is(vr(t,{props:[ne(i,/:(plac\w+)/,":"+va+"$1")]})),is(vr(t,{props:[ne(i,/:(plac\w+)/,xe+"input-$1")]})),is(vr(t,{props:[i]})),_p(t,{props:Yv(n,r)});break}return""})}}var kk={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Ft={},Gs=typeof process<"u"&&Ft!==void 0&&(Ft.REACT_APP_SC_ATTR||Ft.SC_ATTR)||"data-styled",Ix="active",Px="data-styled-version",vh="6.1.13",dg=`/*!sc*/
`,Tc=typeof window<"u"&&"HTMLElement"in window,bk=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Ft!==void 0&&Ft.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Ft.REACT_APP_SC_DISABLE_SPEEDY!==""?Ft.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Ft.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Ft!==void 0&&Ft.SC_DISABLE_SPEEDY!==void 0&&Ft.SC_DISABLE_SPEEDY!==""&&Ft.SC_DISABLE_SPEEDY!=="false"&&Ft.SC_DISABLE_SPEEDY),_h=Object.freeze([]),Qs=Object.freeze({});function Vk(t,e,n){return n===void 0&&(n=Qs),t.theme!==n.theme&&t.theme||e||n.theme}var Cx=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Dk=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Nk=/(^-|-$)/g;function Zv(t){return t.replace(Dk,"-").replace(Nk,"")}var Ok=/(a)(d)/gi,cu=52,e_=function(t){return String.fromCharCode(t+(t>25?39:97))};function Tp(t){var e,n="";for(e=Math.abs(t);e>cu;e=e/cu|0)n=e_(e%cu)+n;return(e_(e%cu)+n).replace(Ok,"$1-$2")}var Bd,Ax=5381,Ts=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},Rx=function(t){return Ts(Ax,t)};function kx(t){return Tp(Rx(t)>>>0)}function Lk(t){return t.displayName||t.name||"Component"}function $d(t){return typeof t=="string"&&!0}var bx=typeof Symbol=="function"&&Symbol.for,Vx=bx?Symbol.for("react.memo"):60115,Mk=bx?Symbol.for("react.forward_ref"):60112,jk={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Fk={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Dx={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Uk=((Bd={})[Mk]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Bd[Vx]=Dx,Bd);function t_(t){return("type"in(e=t)&&e.type.$$typeof)===Vx?Dx:"$$typeof"in t?Uk[t.$$typeof]:jk;var e}var Bk=Object.defineProperty,$k=Object.getOwnPropertyNames,n_=Object.getOwnPropertySymbols,zk=Object.getOwnPropertyDescriptor,Wk=Object.getPrototypeOf,r_=Object.prototype;function Nx(t,e,n){if(typeof e!="string"){if(r_){var r=Wk(e);r&&r!==r_&&Nx(t,r,n)}var i=$k(e);n_&&(i=i.concat(n_(e)));for(var s=t_(t),o=t_(e),a=0;a<i.length;++a){var l=i[a];if(!(l in Fk||n&&n[l]||o&&l in o||s&&l in s)){var c=zk(e,l);try{Bk(t,l,c)}catch{}}}}return t}function Ys(t){return typeof t=="function"}function fg(t){return typeof t=="object"&&"styledComponentId"in t}function Ei(t,e){return t&&e?"".concat(t," ").concat(e):t||e||""}function xp(t,e){if(t.length===0)return"";for(var n=t[0],r=1;r<t.length;r++)n+=t[r];return n}function Ha(t){return t!==null&&typeof t=="object"&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function Sp(t,e,n){if(n===void 0&&(n=!1),!n&&!Ha(t)&&!Array.isArray(t))return e;if(Array.isArray(e))for(var r=0;r<e.length;r++)t[r]=Sp(t[r],e[r]);else if(Ha(e))for(var r in e)t[r]=Sp(t[r],e[r]);return t}function pg(t,e){Object.defineProperty(t,"toString",{value:e})}function fl(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var Hk=function(){function t(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return t.prototype.indexOfGroup=function(e){for(var n=0,r=0;r<e;r++)n+=this.groupSizes[r];return n},t.prototype.insertRules=function(e,n){if(e>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,s=i;e>=s;)if((s<<=1)<0)throw fl(16,"".concat(e));this.groupSizes=new Uint32Array(s),this.groupSizes.set(r),this.length=s;for(var o=i;o<s;o++)this.groupSizes[o]=0}for(var a=this.indexOfGroup(e+1),l=(o=0,n.length);o<l;o++)this.tag.insertRule(a,n[o])&&(this.groupSizes[e]++,a++)},t.prototype.clearGroup=function(e){if(e<this.length){var n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n;this.groupSizes[e]=0;for(var s=r;s<i;s++)this.tag.deleteRule(r)}},t.prototype.getGroup=function(e){var n="";if(e>=this.length||this.groupSizes[e]===0)return n;for(var r=this.groupSizes[e],i=this.indexOfGroup(e),s=i+r,o=i;o<s;o++)n+="".concat(this.tag.getRule(o)).concat(dg);return n},t}(),Mu=new Map,xc=new Map,ju=1,hu=function(t){if(Mu.has(t))return Mu.get(t);for(;xc.has(ju);)ju++;var e=ju++;return Mu.set(t,e),xc.set(e,t),e},qk=function(t,e){ju=e+1,Mu.set(t,e),xc.set(e,t)},Kk="style[".concat(Gs,"][").concat(Px,'="').concat(vh,'"]'),Gk=new RegExp("^".concat(Gs,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Qk=function(t,e,n){for(var r,i=n.split(","),s=0,o=i.length;s<o;s++)(r=i[s])&&t.registerName(e,r)},Yk=function(t,e){for(var n,r=((n=e.textContent)!==null&&n!==void 0?n:"").split(dg),i=[],s=0,o=r.length;s<o;s++){var a=r[s].trim();if(a){var l=a.match(Gk);if(l){var c=0|parseInt(l[1],10),h=l[2];c!==0&&(qk(h,c),Qk(t,h,l[3]),t.getTag().insertRules(c,i)),i.length=0}else i.push(a)}}},i_=function(t){for(var e=document.querySelectorAll(Kk),n=0,r=e.length;n<r;n++){var i=e[n];i&&i.getAttribute(Gs)!==Ix&&(Yk(t,i),i.parentNode&&i.parentNode.removeChild(i))}};function Xk(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Ox=function(t){var e=document.head,n=t||e,r=document.createElement("style"),i=function(a){var l=Array.from(a.querySelectorAll("style[".concat(Gs,"]")));return l[l.length-1]}(n),s=i!==void 0?i.nextSibling:null;r.setAttribute(Gs,Ix),r.setAttribute(Px,vh);var o=Xk();return o&&r.setAttribute("nonce",o),n.insertBefore(r,s),r},Jk=function(){function t(e){this.element=Ox(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,s=r.length;i<s;i++){var o=r[i];if(o.ownerNode===n)return o}throw fl(17)}(this.element),this.length=0}return t.prototype.insertRule=function(e,n){try{return this.sheet.insertRule(n,e),this.length++,!0}catch{return!1}},t.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.prototype.getRule=function(e){var n=this.sheet.cssRules[e];return n&&n.cssText?n.cssText:""},t}(),Zk=function(){function t(e){this.element=Ox(e),this.nodes=this.element.childNodes,this.length=0}return t.prototype.insertRule=function(e,n){if(e<=this.length&&e>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[e]||null),this.length++,!0}return!1},t.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},t}(),eb=function(){function t(e){this.rules=[],this.length=0}return t.prototype.insertRule=function(e,n){return e<=this.length&&(this.rules.splice(e,0,n),this.length++,!0)},t.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},t}(),s_=Tc,tb={isServer:!Tc,useCSSOMInjection:!bk},Lx=function(){function t(e,n,r){e===void 0&&(e=Qs),n===void 0&&(n={});var i=this;this.options=Dt(Dt({},tb),e),this.gs=n,this.names=new Map(r),this.server=!!e.isServer,!this.server&&Tc&&s_&&(s_=!1,i_(this)),pg(this,function(){return function(s){for(var o=s.getTag(),a=o.length,l="",c=function(f){var p=function(v){return xc.get(v)}(f);if(p===void 0)return"continue";var y=s.names.get(p),S=o.getGroup(f);if(y===void 0||!y.size||S.length===0)return"continue";var I="".concat(Gs,".g").concat(f,'[id="').concat(p,'"]'),R="";y!==void 0&&y.forEach(function(v){v.length>0&&(R+="".concat(v,","))}),l+="".concat(S).concat(I,'{content:"').concat(R,'"}').concat(dg)},h=0;h<a;h++)c(h);return l}(i)})}return t.registerId=function(e){return hu(e)},t.prototype.rehydrate=function(){!this.server&&Tc&&i_(this)},t.prototype.reconstructWithOptions=function(e,n){return n===void 0&&(n=!0),new t(Dt(Dt({},this.options),e),this.gs,n&&this.names||void 0)},t.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.prototype.getTag=function(){return this.tag||(this.tag=(e=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new eb(i):r?new Jk(i):new Zk(i)}(this.options),new Hk(e)));var e},t.prototype.hasNameForId=function(e,n){return this.names.has(e)&&this.names.get(e).has(n)},t.prototype.registerName=function(e,n){if(hu(e),this.names.has(e))this.names.get(e).add(n);else{var r=new Set;r.add(n),this.names.set(e,r)}},t.prototype.insertRules=function(e,n,r){this.registerName(e,n),this.getTag().insertRules(hu(e),r)},t.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.prototype.clearRules=function(e){this.getTag().clearGroup(hu(e)),this.clearNames(e)},t.prototype.clearTag=function(){this.tag=void 0},t}(),nb=/&/g,rb=/^\s*\/\/.*$/gm;function Mx(t,e){return t.map(function(n){return n.type==="rule"&&(n.value="".concat(e," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(e," ")),n.props=n.props.map(function(r){return"".concat(e," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=Mx(n.children,e)),n})}function ib(t){var e,n,r,i=Qs,s=i.options,o=s===void 0?Qs:s,a=i.plugins,l=a===void 0?_h:a,c=function(p,y,S){return S.startsWith(n)&&S.endsWith(n)&&S.replaceAll(n,"").length>0?".".concat(e):p},h=l.slice();h.push(function(p){p.type===ph&&p.value.includes("&")&&(p.props[0]=p.props[0].replace(nb,n).replace(r,c))}),o.prefix&&h.push(Rk),h.push(Pk);var f=function(p,y,S,I){y===void 0&&(y=""),S===void 0&&(S=""),I===void 0&&(I="&"),e=I,n=y,r=new RegExp("\\".concat(n,"\\b"),"g");var R=p.replace(rb,""),v=Sk(S||y?"".concat(S," ").concat(y," { ").concat(R," }"):R);o.namespace&&(v=Mx(v,o.namespace));var w=[];return Ec(v,Ck(h.concat(Ak(function(x){return w.push(x)})))),w};return f.hash=l.length?l.reduce(function(p,y){return y.name||fl(15),Ts(p,y.name)},Ax).toString():"",f}var sb=new Lx,Ip=ib(),jx=$t.createContext({shouldForwardProp:void 0,styleSheet:sb,stylis:Ip});jx.Consumer;$t.createContext(void 0);function o_(){return N.useContext(jx)}var Fx=function(){function t(e,n){var r=this;this.inject=function(i,s){s===void 0&&(s=Ip);var o=r.name+s.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,s(r.rules,o,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=n,pg(this,function(){throw fl(12,String(r.name))})}return t.prototype.getName=function(e){return e===void 0&&(e=Ip),this.name+e.hash},t}(),ob=function(t){return t>="A"&&t<="Z"};function a_(t){for(var e="",n=0;n<t.length;n++){var r=t[n];if(n===1&&r==="-"&&t[0]==="-")return t;ob(r)?e+="-"+r.toLowerCase():e+=r}return e.startsWith("ms-")?"-"+e:e}var Ux=function(t){return t==null||t===!1||t===""},Bx=function(t){var e,n,r=[];for(var i in t){var s=t[i];t.hasOwnProperty(i)&&!Ux(s)&&(Array.isArray(s)&&s.isCss||Ys(s)?r.push("".concat(a_(i),":"),s,";"):Ha(s)?r.push.apply(r,Wa(Wa(["".concat(i," {")],Bx(s),!1),["}"],!1)):r.push("".concat(a_(i),": ").concat((e=i,(n=s)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||e in kk||e.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Ci(t,e,n,r){if(Ux(t))return[];if(fg(t))return[".".concat(t.styledComponentId)];if(Ys(t)){if(!Ys(s=t)||s.prototype&&s.prototype.isReactComponent||!e)return[t];var i=t(e);return Ci(i,e,n,r)}var s;return t instanceof Fx?n?(t.inject(n,r),[t.getName(r)]):[t]:Ha(t)?Bx(t):Array.isArray(t)?Array.prototype.concat.apply(_h,t.map(function(o){return Ci(o,e,n,r)})):[t.toString()]}function ab(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(Ys(n)&&!fg(n))return!1}return!0}var lb=Rx(vh),ub=function(){function t(e,n,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&ab(e),this.componentId=n,this.baseHash=Ts(lb,n),this.baseStyle=r,Lx.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=Ei(i,this.staticRulesId);else{var s=xp(Ci(this.rules,e,n,r)),o=Tp(Ts(this.baseHash,s)>>>0);if(!n.hasNameForId(this.componentId,o)){var a=r(s,".".concat(o),void 0,this.componentId);n.insertRules(this.componentId,o,a)}i=Ei(i,o),this.staticRulesId=o}else{for(var l=Ts(this.baseHash,r.hash),c="",h=0;h<this.rules.length;h++){var f=this.rules[h];if(typeof f=="string")c+=f;else if(f){var p=xp(Ci(f,e,n,r));l=Ts(l,p+h),c+=p}}if(c){var y=Tp(l>>>0);n.hasNameForId(this.componentId,y)||n.insertRules(this.componentId,y,r(c,".".concat(y),void 0,this.componentId)),i=Ei(i,y)}}return i},t}(),$x=$t.createContext(void 0);$x.Consumer;var zd={};function cb(t,e,n){var r=fg(t),i=t,s=!$d(t),o=e.attrs,a=o===void 0?_h:o,l=e.componentId,c=l===void 0?function(V,O){var M=typeof V!="string"?"sc":Zv(V);zd[M]=(zd[M]||0)+1;var T="".concat(M,"-").concat(kx(vh+M+zd[M]));return O?"".concat(O,"-").concat(T):T}(e.displayName,e.parentComponentId):l,h=e.displayName,f=h===void 0?function(V){return $d(V)?"styled.".concat(V):"Styled(".concat(Lk(V),")")}(t):h,p=e.displayName&&e.componentId?"".concat(Zv(e.displayName),"-").concat(e.componentId):e.componentId||c,y=r&&i.attrs?i.attrs.concat(a).filter(Boolean):a,S=e.shouldForwardProp;if(r&&i.shouldForwardProp){var I=i.shouldForwardProp;if(e.shouldForwardProp){var R=e.shouldForwardProp;S=function(V,O){return I(V,O)&&R(V,O)}}else S=I}var v=new ub(n,p,r?i.componentStyle:void 0);function w(V,O){return function(M,T,_){var P=M.attrs,C=M.componentStyle,A=M.defaultProps,b=M.foldedComponentIds,k=M.styledComponentId,we=M.target,vn=$t.useContext($x),hr=o_(),de=M.shouldForwardProp||hr.shouldForwardProp,$=Vk(T,vn,A)||Qs,K=function(Rt,_t,kt){for(var oi,Nn=Dt(Dt({},_t),{className:void 0,theme:kt}),dr=0;dr<Rt.length;dr+=1){var On=Ys(oi=Rt[dr])?oi(Nn):oi;for(var Gt in On)Nn[Gt]=Gt==="className"?Ei(Nn[Gt],On[Gt]):Gt==="style"?Dt(Dt({},Nn[Gt]),On[Gt]):On[Gt]}return _t.className&&(Nn.className=Ei(Nn.className,_t.className)),Nn}(P,T,$),Y=K.as||we,fe={};for(var ie in K)K[ie]===void 0||ie[0]==="$"||ie==="as"||ie==="theme"&&K.theme===$||(ie==="forwardedAs"?fe.as=K.forwardedAs:de&&!de(ie,Y)||(fe[ie]=K[ie]));var Pe=function(Rt,_t){var kt=o_(),oi=Rt.generateAndInjectStyles(_t,kt.styleSheet,kt.stylis);return oi}(C,K),Mt=Ei(b,k);return Pe&&(Mt+=" "+Pe),K.className&&(Mt+=" "+K.className),fe[$d(Y)&&!Cx.has(Y)?"class":"className"]=Mt,fe.ref=_,N.createElement(Y,fe)}(x,V,O)}w.displayName=f;var x=$t.forwardRef(w);return x.attrs=y,x.componentStyle=v,x.displayName=f,x.shouldForwardProp=S,x.foldedComponentIds=r?Ei(i.foldedComponentIds,i.styledComponentId):"",x.styledComponentId=p,x.target=r?i.target:t,Object.defineProperty(x,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(V){this._foldedDefaultProps=r?function(O){for(var M=[],T=1;T<arguments.length;T++)M[T-1]=arguments[T];for(var _=0,P=M;_<P.length;_++)Sp(O,P[_],!0);return O}({},i.defaultProps,V):V}}),pg(x,function(){return".".concat(x.styledComponentId)}),s&&Nx(x,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),x}function l_(t,e){for(var n=[t[0]],r=0,i=e.length;r<i;r+=1)n.push(e[r],t[r+1]);return n}var u_=function(t){return Object.assign(t,{isCss:!0})};function zx(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(Ys(t)||Ha(t))return u_(Ci(l_(_h,Wa([t],e,!0))));var r=t;return e.length===0&&r.length===1&&typeof r[0]=="string"?Ci(r):u_(Ci(l_(r,e)))}function Pp(t,e,n){if(n===void 0&&(n=Qs),!e)throw fl(1,e);var r=function(i){for(var s=[],o=1;o<arguments.length;o++)s[o-1]=arguments[o];return t(e,n,zx.apply(void 0,Wa([i],s,!1)))};return r.attrs=function(i){return Pp(t,e,Dt(Dt({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return Pp(t,e,Dt(Dt({},n),i))},r}var Wx=function(t){return Pp(cb,t)},j=Wx;Cx.forEach(function(t){j[t]=Wx(t)});function Hx(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];var r=xp(zx.apply(void 0,Wa([t],e,!1))),i=kx(r);return new Fx(i,r)}/**
 * @remix-run/router v1.19.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function qa(){return qa=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},qa.apply(this,arguments)}var kr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(kr||(kr={}));const c_="popstate";function hb(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return Cp("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Kx(i)}return fb(e,n,null,t)}function We(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function qx(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function db(){return Math.random().toString(36).substr(2,8)}function h_(t,e){return{usr:t.state,key:t.key,idx:e}}function Cp(t,e,n,r){return n===void 0&&(n=null),qa({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?mo(e):e,{state:n,key:e&&e.key||r||db()})}function Kx(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function mo(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function fb(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=kr.Pop,l=null,c=h();c==null&&(c=0,o.replaceState(qa({},o.state,{idx:c}),""));function h(){return(o.state||{idx:null}).idx}function f(){a=kr.Pop;let R=h(),v=R==null?null:R-c;c=R,l&&l({action:a,location:I.location,delta:v})}function p(R,v){a=kr.Push;let w=Cp(I.location,R,v);c=h()+1;let x=h_(w,c),V=I.createHref(w);try{o.pushState(x,"",V)}catch(O){if(O instanceof DOMException&&O.name==="DataCloneError")throw O;i.location.assign(V)}s&&l&&l({action:a,location:I.location,delta:1})}function y(R,v){a=kr.Replace;let w=Cp(I.location,R,v);c=h();let x=h_(w,c),V=I.createHref(w);o.replaceState(x,"",V),s&&l&&l({action:a,location:I.location,delta:0})}function S(R){let v=i.location.origin!=="null"?i.location.origin:i.location.href,w=typeof R=="string"?R:Kx(R);return w=w.replace(/ $/,"%20"),We(v,"No window.location.(origin|href) available to create URL for href: "+w),new URL(w,v)}let I={get action(){return a},get location(){return t(i,o)},listen(R){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(c_,f),l=R,()=>{i.removeEventListener(c_,f),l=null}},createHref(R){return e(i,R)},createURL:S,encodeLocation(R){let v=S(R);return{pathname:v.pathname,search:v.search,hash:v.hash}},push:p,replace:y,go(R){return o.go(R)}};return I}var d_;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(d_||(d_={}));function pb(t,e,n){return n===void 0&&(n="/"),mb(t,e,n,!1)}function mb(t,e,n,r){let i=typeof e=="string"?mo(e):e,s=Yx(i.pathname||"/",n);if(s==null)return null;let o=Gx(t);gb(o);let a=null;for(let l=0;a==null&&l<o.length;++l){let c=Cb(s);a=Ib(o[l],c,r)}return a}function Gx(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(We(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let c=Ai([r,l.relativePath]),h=n.concat(l);s.children&&s.children.length>0&&(We(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),Gx(s.children,e,h,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:xb(c,s.index),routesMeta:h})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of Qx(s.path))i(s,o,l)}),e}function Qx(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=Qx(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function gb(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:Sb(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const yb=/^:[\w-]+$/,vb=3,_b=2,wb=1,Eb=10,Tb=-2,f_=t=>t==="*";function xb(t,e){let n=t.split("/"),r=n.length;return n.some(f_)&&(r+=Tb),e&&(r+=_b),n.filter(i=>!f_(i)).reduce((i,s)=>i+(yb.test(s)?vb:s===""?wb:Eb),r)}function Sb(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function Ib(t,e,n){let{routesMeta:r}=t,i={},s="/",o=[];for(let a=0;a<r.length;++a){let l=r[a],c=a===r.length-1,h=s==="/"?e:e.slice(s.length)||"/",f=p_({path:l.relativePath,caseSensitive:l.caseSensitive,end:c},h),p=l.route;if(!f&&c&&n&&!r[r.length-1].route.index&&(f=p_({path:l.relativePath,caseSensitive:l.caseSensitive,end:!1},h)),!f)return null;Object.assign(i,f.params),o.push({params:i,pathname:Ai([s,f.pathname]),pathnameBase:Db(Ai([s,f.pathnameBase])),route:p}),f.pathnameBase!=="/"&&(s=Ai([s,f.pathnameBase]))}return o}function p_(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=Pb(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((c,h,f)=>{let{paramName:p,isOptional:y}=h;if(p==="*"){let I=a[f]||"";o=s.slice(0,s.length-I.length).replace(/(.)\/+$/,"$1")}const S=a[f];return y&&!S?c[p]=void 0:c[p]=(S||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function Pb(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),qx(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function Cb(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return qx(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Yx(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function Ab(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?mo(t):t;return{pathname:n?n.startsWith("/")?n:Rb(n,e):e,search:Nb(r),hash:Ob(i)}}function Rb(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Wd(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function kb(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function bb(t,e){let n=kb(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Vb(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=mo(t):(i=qa({},t),We(!i.pathname||!i.pathname.includes("?"),Wd("?","pathname","search",i)),We(!i.pathname||!i.pathname.includes("#"),Wd("#","pathname","hash",i)),We(!i.search||!i.search.includes("#"),Wd("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=n;else{let f=e.length-1;if(!r&&o.startsWith("..")){let p=o.split("/");for(;p[0]==="..";)p.shift(),f-=1;i.pathname=p.join("/")}a=f>=0?e[f]:"/"}let l=Ab(i,a),c=o&&o!=="/"&&o.endsWith("/"),h=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(c||h)&&(l.pathname+="/"),l}const Ai=t=>t.join("/").replace(/\/\/+/g,"/"),Db=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),Nb=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,Ob=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function Lb(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const Xx=["post","put","patch","delete"];new Set(Xx);const Mb=["get",...Xx];new Set(Mb);/**
 * React Router v6.26.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ka(){return Ka=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ka.apply(this,arguments)}const mg=N.createContext(null),jb=N.createContext(null),wh=N.createContext(null),Eh=N.createContext(null),go=N.createContext({outlet:null,matches:[],isDataRoute:!1}),Jx=N.createContext(null);function Th(){return N.useContext(Eh)!=null}function Zx(){return Th()||We(!1),N.useContext(Eh).location}function eS(t){N.useContext(wh).static||N.useLayoutEffect(t)}function pl(){let{isDataRoute:t}=N.useContext(go);return t?Xb():Fb()}function Fb(){Th()||We(!1);let t=N.useContext(mg),{basename:e,future:n,navigator:r}=N.useContext(wh),{matches:i}=N.useContext(go),{pathname:s}=Zx(),o=JSON.stringify(bb(i,n.v7_relativeSplatPath)),a=N.useRef(!1);return eS(()=>{a.current=!0}),N.useCallback(function(c,h){if(h===void 0&&(h={}),!a.current)return;if(typeof c=="number"){r.go(c);return}let f=Vb(c,JSON.parse(o),s,h.relative==="path");t==null&&e!=="/"&&(f.pathname=f.pathname==="/"?e:Ai([e,f.pathname])),(h.replace?r.replace:r.push)(f,h.state,h)},[e,r,o,s,t])}function Ub(t,e){return Bb(t,e)}function Bb(t,e,n,r){Th()||We(!1);let{navigator:i}=N.useContext(wh),{matches:s}=N.useContext(go),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let c=Zx(),h;if(e){var f;let R=typeof e=="string"?mo(e):e;l==="/"||(f=R.pathname)!=null&&f.startsWith(l)||We(!1),h=R}else h=c;let p=h.pathname||"/",y=p;if(l!=="/"){let R=l.replace(/^\//,"").split("/");y="/"+p.replace(/^\//,"").split("/").slice(R.length).join("/")}let S=pb(t,{pathname:y}),I=qb(S&&S.map(R=>Object.assign({},R,{params:Object.assign({},a,R.params),pathname:Ai([l,i.encodeLocation?i.encodeLocation(R.pathname).pathname:R.pathname]),pathnameBase:R.pathnameBase==="/"?l:Ai([l,i.encodeLocation?i.encodeLocation(R.pathnameBase).pathname:R.pathnameBase])})),s,n,r);return e&&I?N.createElement(Eh.Provider,{value:{location:Ka({pathname:"/",search:"",hash:"",state:null,key:"default"},h),navigationType:kr.Pop}},I):I}function $b(){let t=Yb(),e=Lb(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return N.createElement(N.Fragment,null,N.createElement("h2",null,"Unexpected Application Error!"),N.createElement("h3",{style:{fontStyle:"italic"}},e),n?N.createElement("pre",{style:i},n):null,null)}const zb=N.createElement($b,null);class Wb extends N.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?N.createElement(go.Provider,{value:this.props.routeContext},N.createElement(Jx.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Hb(t){let{routeContext:e,match:n,children:r}=t,i=N.useContext(mg);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),N.createElement(go.Provider,{value:e},r)}function qb(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,a=(i=n)==null?void 0:i.errors;if(a!=null){let h=o.findIndex(f=>f.route.id&&(a==null?void 0:a[f.route.id])!==void 0);h>=0||We(!1),o=o.slice(0,Math.min(o.length,h+1))}let l=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let h=0;h<o.length;h++){let f=o[h];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(c=h),f.route.id){let{loaderData:p,errors:y}=n,S=f.route.loader&&p[f.route.id]===void 0&&(!y||y[f.route.id]===void 0);if(f.route.lazy||S){l=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((h,f,p)=>{let y,S=!1,I=null,R=null;n&&(y=a&&f.route.id?a[f.route.id]:void 0,I=f.route.errorElement||zb,l&&(c<0&&p===0?(S=!0,R=null):c===p&&(S=!0,R=f.route.hydrateFallbackElement||null)));let v=e.concat(o.slice(0,p+1)),w=()=>{let x;return y?x=I:S?x=R:f.route.Component?x=N.createElement(f.route.Component,null):f.route.element?x=f.route.element:x=h,N.createElement(Hb,{match:f,routeContext:{outlet:h,matches:v,isDataRoute:n!=null},children:x})};return n&&(f.route.ErrorBoundary||f.route.errorElement||p===0)?N.createElement(Wb,{location:n.location,revalidation:n.revalidation,component:I,error:y,children:w(),routeContext:{outlet:null,matches:v,isDataRoute:!0}}):w()},null)}var tS=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(tS||{}),Sc=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Sc||{});function Kb(t){let e=N.useContext(mg);return e||We(!1),e}function Gb(t){let e=N.useContext(jb);return e||We(!1),e}function Qb(t){let e=N.useContext(go);return e||We(!1),e}function nS(t){let e=Qb(),n=e.matches[e.matches.length-1];return n.route.id||We(!1),n.route.id}function Yb(){var t;let e=N.useContext(Jx),n=Gb(Sc.UseRouteError),r=nS(Sc.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function Xb(){let{router:t}=Kb(tS.UseNavigateStable),e=nS(Sc.UseNavigateStable),n=N.useRef(!1);return eS(()=>{n.current=!0}),N.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Ka({fromRouteId:e},s)))},[t,e])}function wn(t){We(!1)}function Jb(t){let{basename:e="/",children:n=null,location:r,navigationType:i=kr.Pop,navigator:s,static:o=!1,future:a}=t;Th()&&We(!1);let l=e.replace(/^\/*/,"/"),c=N.useMemo(()=>({basename:l,navigator:s,static:o,future:Ka({v7_relativeSplatPath:!1},a)}),[l,a,s,o]);typeof r=="string"&&(r=mo(r));let{pathname:h="/",search:f="",hash:p="",state:y=null,key:S="default"}=r,I=N.useMemo(()=>{let R=Yx(h,l);return R==null?null:{location:{pathname:R,search:f,hash:p,state:y,key:S},navigationType:i}},[l,h,f,p,y,S,i]);return I==null?null:N.createElement(wh.Provider,{value:c},N.createElement(Eh.Provider,{children:n,value:I}))}function Zb(t){let{children:e,location:n}=t;return Ub(Ap(e),n)}new Promise(()=>{});function Ap(t,e){e===void 0&&(e=[]);let n=[];return N.Children.forEach(t,(r,i)=>{if(!N.isValidElement(r))return;let s=[...e,i];if(r.type===N.Fragment){n.push.apply(n,Ap(r.props.children,s));return}r.type!==wn&&We(!1),!r.props.index||!r.props.children||We(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Ap(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.26.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const eV="6";try{window.__reactRouterVersion=eV}catch{}const tV="startTransition",m_=e2[tV];function nV(t){let{basename:e,children:n,future:r,window:i}=t,s=N.useRef();s.current==null&&(s.current=hb({window:i,v5Compat:!0}));let o=s.current,[a,l]=N.useState({action:o.action,location:o.location}),{v7_startTransition:c}=r||{},h=N.useCallback(f=>{c&&m_?m_(()=>l(f)):l(f)},[l,c]);return N.useLayoutEffect(()=>o.listen(h),[o,h]),N.createElement(Jb,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o,future:r})}var g_;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(g_||(g_={}));var y_;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(y_||(y_={}));function rV(t){if(typeof Proxy>"u")return t;const e=new Map,n=(...r)=>t(...r);return new Proxy(n,{get:(r,i)=>i==="create"?t:(e.has(i)||e.set(i,t(i)),e.get(i))})}function Ga(t){return t!==null&&typeof t=="object"&&typeof t.start=="function"}const Rp=t=>Array.isArray(t);function rS(t,e){if(!Array.isArray(e))return!1;const n=e.length;if(n!==t.length)return!1;for(let r=0;r<n;r++)if(e[r]!==t[r])return!1;return!0}function Qa(t){return typeof t=="string"||Array.isArray(t)}function v_(t){const e=[{},{}];return t==null||t.values.forEach((n,r)=>{e[0][r]=n.get(),e[1][r]=n.getVelocity()}),e}function gg(t,e,n,r){if(typeof e=="function"){const[i,s]=v_(r);e=e(n!==void 0?n:t.custom,i,s)}if(typeof e=="string"&&(e=t.variants&&t.variants[e]),typeof e=="function"){const[i,s]=v_(r);e=e(n!==void 0?n:t.custom,i,s)}return e}function xh(t,e,n){const r=t.getProps();return gg(r,e,n!==void 0?n:r.custom,t)}const yg=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],vg=["initial",...yg],ml=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],ri=new Set(ml),Gn=t=>t*1e3,Qn=t=>t/1e3,iV={type:"spring",stiffness:500,damping:25,restSpeed:10},sV=t=>({type:"spring",stiffness:550,damping:t===0?2*Math.sqrt(550):30,restSpeed:10}),oV={type:"keyframes",duration:.8},aV={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},lV=(t,{keyframes:e})=>e.length>2?oV:ri.has(t)?t.startsWith("scale")?sV(e[1]):iV:aV;function _g(t,e){return t?t[e]||t.default||t:void 0}const uV={skipAnimations:!1,useManualTiming:!1},cV=t=>t!==null;function Sh(t,{repeat:e,repeatType:n="loop"},r){const i=t.filter(cV),s=e&&n!=="loop"&&e%2===1?0:i.length-1;return!s||r===void 0?i[s]:r}const gt=t=>t;function hV(t){let e=new Set,n=new Set,r=!1,i=!1;const s=new WeakSet;let o={delta:0,timestamp:0,isProcessing:!1};function a(c){s.has(c)&&(l.schedule(c),t()),c(o)}const l={schedule:(c,h=!1,f=!1)=>{const y=f&&r?e:n;return h&&s.add(c),y.has(c)||y.add(c),c},cancel:c=>{n.delete(c),s.delete(c)},process:c=>{if(o=c,r){i=!0;return}r=!0,[e,n]=[n,e],n.clear(),e.forEach(a),r=!1,i&&(i=!1,l.process(c))}};return l}const du=["read","resolveKeyframes","update","preRender","render","postRender"],dV=40;function iS(t,e){let n=!1,r=!0;const i={delta:0,timestamp:0,isProcessing:!1},s=()=>n=!0,o=du.reduce((v,w)=>(v[w]=hV(s),v),{}),{read:a,resolveKeyframes:l,update:c,preRender:h,render:f,postRender:p}=o,y=()=>{const v=performance.now();n=!1,i.delta=r?1e3/60:Math.max(Math.min(v-i.timestamp,dV),1),i.timestamp=v,i.isProcessing=!0,a.process(i),l.process(i),c.process(i),h.process(i),f.process(i),p.process(i),i.isProcessing=!1,n&&e&&(r=!1,t(y))},S=()=>{n=!0,r=!0,i.isProcessing||t(y)};return{schedule:du.reduce((v,w)=>{const x=o[w];return v[w]=(V,O=!1,M=!1)=>(n||S(),x.schedule(V,O,M)),v},{}),cancel:v=>{for(let w=0;w<du.length;w++)o[du[w]].cancel(v)},state:i,steps:o}}const{schedule:ye,cancel:Gr,state:Je,steps:Hd}=iS(typeof requestAnimationFrame<"u"?requestAnimationFrame:gt,!0),sS=(t,e,n)=>(((1-3*n+3*e)*t+(3*n-6*e))*t+3*e)*t,fV=1e-7,pV=12;function mV(t,e,n,r,i){let s,o,a=0;do o=e+(n-e)/2,s=sS(o,r,i)-t,s>0?n=o:e=o;while(Math.abs(s)>fV&&++a<pV);return o}function gl(t,e,n,r){if(t===e&&n===r)return gt;const i=s=>mV(s,0,1,t,n);return s=>s===0||s===1?s:sS(i(s),e,r)}const oS=t=>e=>e<=.5?t(2*e)/2:(2-t(2*(1-e)))/2,aS=t=>e=>1-t(1-e),lS=gl(.33,1.53,.69,.99),wg=aS(lS),uS=oS(wg),cS=t=>(t*=2)<1?.5*wg(t):.5*(2-Math.pow(2,-10*(t-1))),Eg=t=>1-Math.sin(Math.acos(t)),hS=aS(Eg),dS=oS(Eg),fS=t=>/^0[^.\s]+$/u.test(t);function gV(t){return typeof t=="number"?t===0:t!==null?t==="none"||t==="0"||fS(t):!0}let kp=gt;const pS=t=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t),mS=t=>e=>typeof e=="string"&&e.startsWith(t),gS=mS("--"),yV=mS("var(--"),Tg=t=>yV(t)?vV.test(t.split("/*")[0].trim()):!1,vV=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,_V=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function wV(t){const e=_V.exec(t);if(!e)return[,];const[,n,r,i]=e;return[`--${n??r}`,i]}function yS(t,e,n=1){const[r,i]=wV(t);if(!r)return;const s=window.getComputedStyle(e).getPropertyValue(r);if(s){const o=s.trim();return pS(o)?parseFloat(o):o}return Tg(i)?yS(i,e,n+1):i}const Qr=(t,e,n)=>n>e?e:n<t?t:n,yo={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},Ya={...yo,transform:t=>Qr(0,1,t)},fu={...yo,default:1},yl=t=>({test:e=>typeof e=="string"&&e.endsWith(t)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${t}`}),_r=yl("deg"),Pn=yl("%"),X=yl("px"),EV=yl("vh"),TV=yl("vw"),__={...Pn,parse:t=>Pn.parse(t)/100,transform:t=>Pn.transform(t*100)},xV=new Set(["width","height","top","left","right","bottom","x","y","translateX","translateY"]),w_=t=>t===yo||t===X,E_=(t,e)=>parseFloat(t.split(", ")[e]),T_=(t,e)=>(n,{transform:r})=>{if(r==="none"||!r)return 0;const i=r.match(/^matrix3d\((.+)\)$/u);if(i)return E_(i[1],e);{const s=r.match(/^matrix\((.+)\)$/u);return s?E_(s[1],t):0}},SV=new Set(["x","y","z"]),IV=ml.filter(t=>!SV.has(t));function PV(t){const e=[];return IV.forEach(n=>{const r=t.getValue(n);r!==void 0&&(e.push([n,r.get()]),r.set(n.startsWith("scale")?1:0))}),e}const Xs={width:({x:t},{paddingLeft:e="0",paddingRight:n="0"})=>t.max-t.min-parseFloat(e)-parseFloat(n),height:({y:t},{paddingTop:e="0",paddingBottom:n="0"})=>t.max-t.min-parseFloat(e)-parseFloat(n),top:(t,{top:e})=>parseFloat(e),left:(t,{left:e})=>parseFloat(e),bottom:({y:t},{top:e})=>parseFloat(e)+(t.max-t.min),right:({x:t},{left:e})=>parseFloat(e)+(t.max-t.min),x:T_(4,13),y:T_(5,14)};Xs.translateX=Xs.x;Xs.translateY=Xs.y;const vS=t=>e=>e.test(t),CV={test:t=>t==="auto",parse:t=>t},_S=[yo,X,Pn,_r,TV,EV,CV],x_=t=>_S.find(vS(t)),Ri=new Set;let bp=!1,Vp=!1;function wS(){if(Vp){const t=Array.from(Ri).filter(r=>r.needsMeasurement),e=new Set(t.map(r=>r.element)),n=new Map;e.forEach(r=>{const i=PV(r);i.length&&(n.set(r,i),r.render())}),t.forEach(r=>r.measureInitialState()),e.forEach(r=>{r.render();const i=n.get(r);i&&i.forEach(([s,o])=>{var a;(a=r.getValue(s))===null||a===void 0||a.set(o)})}),t.forEach(r=>r.measureEndState()),t.forEach(r=>{r.suspendedScrollY!==void 0&&window.scrollTo(0,r.suspendedScrollY)})}Vp=!1,bp=!1,Ri.forEach(t=>t.complete()),Ri.clear()}function ES(){Ri.forEach(t=>{t.readKeyframes(),t.needsMeasurement&&(Vp=!0)})}function AV(){ES(),wS()}class xg{constructor(e,n,r,i,s,o=!1){this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...e],this.onComplete=n,this.name=r,this.motionValue=i,this.element=s,this.isAsync=o}scheduleResolve(){this.isScheduled=!0,this.isAsync?(Ri.add(this),bp||(bp=!0,ye.read(ES),ye.resolveKeyframes(wS))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:e,name:n,element:r,motionValue:i}=this;for(let s=0;s<e.length;s++)if(e[s]===null)if(s===0){const o=i==null?void 0:i.get(),a=e[e.length-1];if(o!==void 0)e[0]=o;else if(r&&n){const l=r.readValue(n,a);l!=null&&(e[0]=l)}e[0]===void 0&&(e[0]=a),i&&o===void 0&&i.set(e[0])}else e[s]=e[s-1]}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),Ri.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,Ri.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}const _a=t=>Math.round(t*1e5)/1e5,Sg=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function RV(t){return t==null}const kV=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Ig=(t,e)=>n=>!!(typeof n=="string"&&kV.test(n)&&n.startsWith(t)||e&&!RV(n)&&Object.prototype.hasOwnProperty.call(n,e)),TS=(t,e,n)=>r=>{if(typeof r!="string")return r;const[i,s,o,a]=r.match(Sg);return{[t]:parseFloat(i),[e]:parseFloat(s),[n]:parseFloat(o),alpha:a!==void 0?parseFloat(a):1}},bV=t=>Qr(0,255,t),qd={...yo,transform:t=>Math.round(bV(t))},Ti={test:Ig("rgb","red"),parse:TS("red","green","blue"),transform:({red:t,green:e,blue:n,alpha:r=1})=>"rgba("+qd.transform(t)+", "+qd.transform(e)+", "+qd.transform(n)+", "+_a(Ya.transform(r))+")"};function VV(t){let e="",n="",r="",i="";return t.length>5?(e=t.substring(1,3),n=t.substring(3,5),r=t.substring(5,7),i=t.substring(7,9)):(e=t.substring(1,2),n=t.substring(2,3),r=t.substring(3,4),i=t.substring(4,5),e+=e,n+=n,r+=r,i+=i),{red:parseInt(e,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:i?parseInt(i,16)/255:1}}const Dp={test:Ig("#"),parse:VV,transform:Ti.transform},xs={test:Ig("hsl","hue"),parse:TS("hue","saturation","lightness"),transform:({hue:t,saturation:e,lightness:n,alpha:r=1})=>"hsla("+Math.round(t)+", "+Pn.transform(_a(e))+", "+Pn.transform(_a(n))+", "+_a(Ya.transform(r))+")"},ht={test:t=>Ti.test(t)||Dp.test(t)||xs.test(t),parse:t=>Ti.test(t)?Ti.parse(t):xs.test(t)?xs.parse(t):Dp.parse(t),transform:t=>typeof t=="string"?t:t.hasOwnProperty("red")?Ti.transform(t):xs.transform(t)},DV=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function NV(t){var e,n;return isNaN(t)&&typeof t=="string"&&(((e=t.match(Sg))===null||e===void 0?void 0:e.length)||0)+(((n=t.match(DV))===null||n===void 0?void 0:n.length)||0)>0}const xS="number",SS="color",OV="var",LV="var(",S_="${}",MV=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Xa(t){const e=t.toString(),n=[],r={color:[],number:[],var:[]},i=[];let s=0;const a=e.replace(MV,l=>(ht.test(l)?(r.color.push(s),i.push(SS),n.push(ht.parse(l))):l.startsWith(LV)?(r.var.push(s),i.push(OV),n.push(l)):(r.number.push(s),i.push(xS),n.push(parseFloat(l))),++s,S_)).split(S_);return{values:n,split:a,indexes:r,types:i}}function IS(t){return Xa(t).values}function PS(t){const{split:e,types:n}=Xa(t),r=e.length;return i=>{let s="";for(let o=0;o<r;o++)if(s+=e[o],i[o]!==void 0){const a=n[o];a===xS?s+=_a(i[o]):a===SS?s+=ht.transform(i[o]):s+=i[o]}return s}}const jV=t=>typeof t=="number"?0:t;function FV(t){const e=IS(t);return PS(t)(e.map(jV))}const Yr={test:NV,parse:IS,createTransformer:PS,getAnimatableNone:FV},UV=new Set(["brightness","contrast","saturate","opacity"]);function BV(t){const[e,n]=t.slice(0,-1).split("(");if(e==="drop-shadow")return t;const[r]=n.match(Sg)||[];if(!r)return t;const i=n.replace(r,"");let s=UV.has(e)?1:0;return r!==n&&(s*=100),e+"("+s+i+")"}const $V=/\b([a-z-]*)\(.*?\)/gu,Np={...Yr,getAnimatableNone:t=>{const e=t.match($V);return e?e.map(BV).join(" "):t}},zV={borderWidth:X,borderTopWidth:X,borderRightWidth:X,borderBottomWidth:X,borderLeftWidth:X,borderRadius:X,radius:X,borderTopLeftRadius:X,borderTopRightRadius:X,borderBottomRightRadius:X,borderBottomLeftRadius:X,width:X,maxWidth:X,height:X,maxHeight:X,top:X,right:X,bottom:X,left:X,padding:X,paddingTop:X,paddingRight:X,paddingBottom:X,paddingLeft:X,margin:X,marginTop:X,marginRight:X,marginBottom:X,marginLeft:X,backgroundPositionX:X,backgroundPositionY:X},WV={rotate:_r,rotateX:_r,rotateY:_r,rotateZ:_r,scale:fu,scaleX:fu,scaleY:fu,scaleZ:fu,skew:_r,skewX:_r,skewY:_r,distance:X,translateX:X,translateY:X,translateZ:X,x:X,y:X,z:X,perspective:X,transformPerspective:X,opacity:Ya,originX:__,originY:__,originZ:X},I_={...yo,transform:Math.round},Pg={...zV,...WV,zIndex:I_,size:X,fillOpacity:Ya,strokeOpacity:Ya,numOctaves:I_},HV={...Pg,color:ht,backgroundColor:ht,outlineColor:ht,fill:ht,stroke:ht,borderColor:ht,borderTopColor:ht,borderRightColor:ht,borderBottomColor:ht,borderLeftColor:ht,filter:Np,WebkitFilter:Np},Cg=t=>HV[t];function CS(t,e){let n=Cg(t);return n!==Np&&(n=Yr),n.getAnimatableNone?n.getAnimatableNone(e):void 0}const qV=new Set(["auto","none","0"]);function KV(t,e,n){let r=0,i;for(;r<t.length&&!i;){const s=t[r];typeof s=="string"&&!qV.has(s)&&Xa(s).values.length&&(i=t[r]),r++}if(i&&n)for(const s of e)t[s]=CS(n,i)}class AS extends xg{constructor(e,n,r,i,s){super(e,n,r,i,s,!0)}readKeyframes(){const{unresolvedKeyframes:e,element:n,name:r}=this;if(!n||!n.current)return;super.readKeyframes();for(let l=0;l<e.length;l++){let c=e[l];if(typeof c=="string"&&(c=c.trim(),Tg(c))){const h=yS(c,n.current);h!==void 0&&(e[l]=h),l===e.length-1&&(this.finalKeyframe=c)}}if(this.resolveNoneKeyframes(),!xV.has(r)||e.length!==2)return;const[i,s]=e,o=x_(i),a=x_(s);if(o!==a)if(w_(o)&&w_(a))for(let l=0;l<e.length;l++){const c=e[l];typeof c=="string"&&(e[l]=parseFloat(c))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:e,name:n}=this,r=[];for(let i=0;i<e.length;i++)gV(e[i])&&r.push(i);r.length&&KV(e,r,n)}measureInitialState(){const{element:e,unresolvedKeyframes:n,name:r}=this;if(!e||!e.current)return;r==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Xs[r](e.measureViewportBox(),window.getComputedStyle(e.current)),n[0]=this.measuredOrigin;const i=n[n.length-1];i!==void 0&&e.getValue(r,i).jump(i,!1)}measureEndState(){var e;const{element:n,name:r,unresolvedKeyframes:i}=this;if(!n||!n.current)return;const s=n.getValue(r);s&&s.jump(this.measuredOrigin,!1);const o=i.length-1,a=i[o];i[o]=Xs[r](n.measureViewportBox(),window.getComputedStyle(n.current)),a!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=a),!((e=this.removedTransforms)===null||e===void 0)&&e.length&&this.removedTransforms.forEach(([l,c])=>{n.getValue(l).set(c)}),this.resolveNoneKeyframes()}}function Ag(t){return typeof t=="function"}let Fu;function GV(){Fu=void 0}const Cn={now:()=>(Fu===void 0&&Cn.set(Je.isProcessing||uV.useManualTiming?Je.timestamp:performance.now()),Fu),set:t=>{Fu=t,queueMicrotask(GV)}},P_=(t,e)=>e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&(Yr.test(t)||t==="0")&&!t.startsWith("url("));function QV(t){const e=t[0];if(t.length===1)return!0;for(let n=0;n<t.length;n++)if(t[n]!==e)return!0}function YV(t,e,n,r){const i=t[0];if(i===null)return!1;if(e==="display"||e==="visibility")return!0;const s=t[t.length-1],o=P_(i,e),a=P_(s,e);return!o||!a?!1:QV(t)||(n==="spring"||Ag(n))&&r}const XV=40;class RS{constructor({autoplay:e=!0,delay:n=0,type:r="keyframes",repeat:i=0,repeatDelay:s=0,repeatType:o="loop",...a}){this.isStopped=!1,this.hasAttemptedResolve=!1,this.createdAt=Cn.now(),this.options={autoplay:e,delay:n,type:r,repeat:i,repeatDelay:s,repeatType:o,...a},this.updateFinishedPromise()}calcStartTime(){return this.resolvedAt?this.resolvedAt-this.createdAt>XV?this.resolvedAt:this.createdAt:this.createdAt}get resolved(){return!this._resolved&&!this.hasAttemptedResolve&&AV(),this._resolved}onKeyframesResolved(e,n){this.resolvedAt=Cn.now(),this.hasAttemptedResolve=!0;const{name:r,type:i,velocity:s,delay:o,onComplete:a,onUpdate:l,isGenerator:c}=this.options;if(!c&&!YV(e,r,i,s))if(o)this.options.duration=0;else{l==null||l(Sh(e,this.options,n)),a==null||a(),this.resolveFinishedPromise();return}const h=this.initPlayback(e,n);h!==!1&&(this._resolved={keyframes:e,finalKeyframe:n,...h},this.onPostResolved())}onPostResolved(){}then(e,n){return this.currentFinishedPromise.then(e,n)}updateFinishedPromise(){this.currentFinishedPromise=new Promise(e=>{this.resolveFinishedPromise=e})}}function kS(t,e){return e?t*(1e3/e):0}const JV=5;function bS(t,e,n){const r=Math.max(e-JV,0);return kS(n-t(r),e-r)}const Kd=.001,ZV=.01,eD=10,tD=.05,nD=1;function rD({duration:t=800,bounce:e=.25,velocity:n=0,mass:r=1}){let i,s,o=1-e;o=Qr(tD,nD,o),t=Qr(ZV,eD,Qn(t)),o<1?(i=c=>{const h=c*o,f=h*t,p=h-n,y=Op(c,o),S=Math.exp(-f);return Kd-p/y*S},s=c=>{const f=c*o*t,p=f*n+n,y=Math.pow(o,2)*Math.pow(c,2)*t,S=Math.exp(-f),I=Op(Math.pow(c,2),o);return(-i(c)+Kd>0?-1:1)*((p-y)*S)/I}):(i=c=>{const h=Math.exp(-c*t),f=(c-n)*t+1;return-Kd+h*f},s=c=>{const h=Math.exp(-c*t),f=(n-c)*(t*t);return h*f});const a=5/t,l=sD(i,s,a);if(t=Gn(t),isNaN(l))return{stiffness:100,damping:10,duration:t};{const c=Math.pow(l,2)*r;return{stiffness:c,damping:o*2*Math.sqrt(r*c),duration:t}}}const iD=12;function sD(t,e,n){let r=n;for(let i=1;i<iD;i++)r=r-t(r)/e(r);return r}function Op(t,e){return t*Math.sqrt(1-e*e)}const oD=["duration","bounce"],aD=["stiffness","damping","mass"];function C_(t,e){return e.some(n=>t[n]!==void 0)}function lD(t){let e={velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1,...t};if(!C_(t,aD)&&C_(t,oD)){const n=rD(t);e={...e,...n,mass:1},e.isResolvedFromDuration=!0}return e}function VS({keyframes:t,restDelta:e,restSpeed:n,...r}){const i=t[0],s=t[t.length-1],o={done:!1,value:i},{stiffness:a,damping:l,mass:c,duration:h,velocity:f,isResolvedFromDuration:p}=lD({...r,velocity:-Qn(r.velocity||0)}),y=f||0,S=l/(2*Math.sqrt(a*c)),I=s-i,R=Qn(Math.sqrt(a/c)),v=Math.abs(I)<5;n||(n=v?.01:2),e||(e=v?.005:.5);let w;if(S<1){const x=Op(R,S);w=V=>{const O=Math.exp(-S*R*V);return s-O*((y+S*R*I)/x*Math.sin(x*V)+I*Math.cos(x*V))}}else if(S===1)w=x=>s-Math.exp(-R*x)*(I+(y+R*I)*x);else{const x=R*Math.sqrt(S*S-1);w=V=>{const O=Math.exp(-S*R*V),M=Math.min(x*V,300);return s-O*((y+S*R*I)*Math.sinh(M)+x*I*Math.cosh(M))/x}}return{calculatedDuration:p&&h||null,next:x=>{const V=w(x);if(p)o.done=x>=h;else{let O=0;S<1&&(O=x===0?Gn(y):bS(w,x,V));const M=Math.abs(O)<=n,T=Math.abs(s-V)<=e;o.done=M&&T}return o.value=o.done?s:V,o}}}function A_({keyframes:t,velocity:e=0,power:n=.8,timeConstant:r=325,bounceDamping:i=10,bounceStiffness:s=500,modifyTarget:o,min:a,max:l,restDelta:c=.5,restSpeed:h}){const f=t[0],p={done:!1,value:f},y=_=>a!==void 0&&_<a||l!==void 0&&_>l,S=_=>a===void 0?l:l===void 0||Math.abs(a-_)<Math.abs(l-_)?a:l;let I=n*e;const R=f+I,v=o===void 0?R:o(R);v!==R&&(I=v-f);const w=_=>-I*Math.exp(-_/r),x=_=>v+w(_),V=_=>{const P=w(_),C=x(_);p.done=Math.abs(P)<=c,p.value=p.done?v:C};let O,M;const T=_=>{y(p.value)&&(O=_,M=VS({keyframes:[p.value,S(p.value)],velocity:bS(x,_,p.value),damping:i,stiffness:s,restDelta:c,restSpeed:h}))};return T(0),{calculatedDuration:null,next:_=>{let P=!1;return!M&&O===void 0&&(P=!0,V(_),T(_)),O!==void 0&&_>=O?M.next(_-O):(!P&&V(_),p)}}}const uD=gl(.42,0,1,1),cD=gl(0,0,.58,1),DS=gl(.42,0,.58,1),hD=t=>Array.isArray(t)&&typeof t[0]!="number",Rg=t=>Array.isArray(t)&&typeof t[0]=="number",R_={linear:gt,easeIn:uD,easeInOut:DS,easeOut:cD,circIn:Eg,circInOut:dS,circOut:hS,backIn:wg,backInOut:uS,backOut:lS,anticipate:cS},k_=t=>{if(Rg(t)){kp(t.length===4);const[e,n,r,i]=t;return gl(e,n,r,i)}else if(typeof t=="string")return kp(R_[t]!==void 0),R_[t];return t},dD=(t,e)=>n=>e(t(n)),Yn=(...t)=>t.reduce(dD),Js=(t,e,n)=>{const r=e-t;return r===0?1:(n-t)/r},Re=(t,e,n)=>t+(e-t)*n;function Gd(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*(2/3-n)*6:t}function fD({hue:t,saturation:e,lightness:n,alpha:r}){t/=360,e/=100,n/=100;let i=0,s=0,o=0;if(!e)i=s=o=n;else{const a=n<.5?n*(1+e):n+e-n*e,l=2*n-a;i=Gd(l,a,t+1/3),s=Gd(l,a,t),o=Gd(l,a,t-1/3)}return{red:Math.round(i*255),green:Math.round(s*255),blue:Math.round(o*255),alpha:r}}function Ic(t,e){return n=>n>0?e:t}const Qd=(t,e,n)=>{const r=t*t,i=n*(e*e-r)+r;return i<0?0:Math.sqrt(i)},pD=[Dp,Ti,xs],mD=t=>pD.find(e=>e.test(t));function b_(t){const e=mD(t);if(!e)return!1;let n=e.parse(t);return e===xs&&(n=fD(n)),n}const V_=(t,e)=>{const n=b_(t),r=b_(e);if(!n||!r)return Ic(t,e);const i={...n};return s=>(i.red=Qd(n.red,r.red,s),i.green=Qd(n.green,r.green,s),i.blue=Qd(n.blue,r.blue,s),i.alpha=Re(n.alpha,r.alpha,s),Ti.transform(i))},Lp=new Set(["none","hidden"]);function gD(t,e){return Lp.has(t)?n=>n<=0?t:e:n=>n>=1?e:t}function yD(t,e){return n=>Re(t,e,n)}function kg(t){return typeof t=="number"?yD:typeof t=="string"?Tg(t)?Ic:ht.test(t)?V_:wD:Array.isArray(t)?NS:typeof t=="object"?ht.test(t)?V_:vD:Ic}function NS(t,e){const n=[...t],r=n.length,i=t.map((s,o)=>kg(s)(s,e[o]));return s=>{for(let o=0;o<r;o++)n[o]=i[o](s);return n}}function vD(t,e){const n={...t,...e},r={};for(const i in n)t[i]!==void 0&&e[i]!==void 0&&(r[i]=kg(t[i])(t[i],e[i]));return i=>{for(const s in r)n[s]=r[s](i);return n}}function _D(t,e){var n;const r=[],i={color:0,var:0,number:0};for(let s=0;s<e.values.length;s++){const o=e.types[s],a=t.indexes[o][i[o]],l=(n=t.values[a])!==null&&n!==void 0?n:0;r[s]=l,i[o]++}return r}const wD=(t,e)=>{const n=Yr.createTransformer(e),r=Xa(t),i=Xa(e);return r.indexes.var.length===i.indexes.var.length&&r.indexes.color.length===i.indexes.color.length&&r.indexes.number.length>=i.indexes.number.length?Lp.has(t)&&!i.values.length||Lp.has(e)&&!r.values.length?gD(t,e):Yn(NS(_D(r,i),i.values),n):Ic(t,e)};function OS(t,e,n){return typeof t=="number"&&typeof e=="number"&&typeof n=="number"?Re(t,e,n):kg(t)(t,e)}function ED(t,e,n){const r=[],i=n||OS,s=t.length-1;for(let o=0;o<s;o++){let a=i(t[o],t[o+1]);if(e){const l=Array.isArray(e)?e[o]||gt:e;a=Yn(l,a)}r.push(a)}return r}function TD(t,e,{clamp:n=!0,ease:r,mixer:i}={}){const s=t.length;if(kp(s===e.length),s===1)return()=>e[0];if(s===2&&t[0]===t[1])return()=>e[1];t[0]>t[s-1]&&(t=[...t].reverse(),e=[...e].reverse());const o=ED(e,r,i),a=o.length,l=c=>{let h=0;if(a>1)for(;h<t.length-2&&!(c<t[h+1]);h++);const f=Js(t[h],t[h+1],c);return o[h](f)};return n?c=>l(Qr(t[0],t[s-1],c)):l}function xD(t,e){const n=t[t.length-1];for(let r=1;r<=e;r++){const i=Js(0,e,r);t.push(Re(n,1,i))}}function SD(t){const e=[0];return xD(e,t.length-1),e}function ID(t,e){return t.map(n=>n*e)}function PD(t,e){return t.map(()=>e||DS).splice(0,t.length-1)}function Pc({duration:t=300,keyframes:e,times:n,ease:r="easeInOut"}){const i=hD(r)?r.map(k_):k_(r),s={done:!1,value:e[0]},o=ID(n&&n.length===e.length?n:SD(e),t),a=TD(o,e,{ease:Array.isArray(i)?i:PD(e,i)});return{calculatedDuration:t,next:l=>(s.value=a(l),s.done=l>=t,s)}}const D_=2e4;function CD(t){let e=0;const n=50;let r=t.next(e);for(;!r.done&&e<D_;)e+=n,r=t.next(e);return e>=D_?1/0:e}const AD=t=>{const e=({timestamp:n})=>t(n);return{start:()=>ye.update(e,!0),stop:()=>Gr(e),now:()=>Je.isProcessing?Je.timestamp:Cn.now()}},RD={decay:A_,inertia:A_,tween:Pc,keyframes:Pc,spring:VS},kD=t=>t/100;class bg extends RS{constructor(e){super(e),this.holdTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.startTime=null,this.state="idle",this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.teardown();const{onStop:l}=this.options;l&&l()};const{name:n,motionValue:r,element:i,keyframes:s}=this.options,o=(i==null?void 0:i.KeyframeResolver)||xg,a=(l,c)=>this.onKeyframesResolved(l,c);this.resolver=new o(s,a,n,r,i),this.resolver.scheduleResolve()}initPlayback(e){const{type:n="keyframes",repeat:r=0,repeatDelay:i=0,repeatType:s,velocity:o=0}=this.options,a=Ag(n)?n:RD[n]||Pc;let l,c;a!==Pc&&typeof e[0]!="number"&&(l=Yn(kD,OS(e[0],e[1])),e=[0,100]);const h=a({...this.options,keyframes:e});s==="mirror"&&(c=a({...this.options,keyframes:[...e].reverse(),velocity:-o})),h.calculatedDuration===null&&(h.calculatedDuration=CD(h));const{calculatedDuration:f}=h,p=f+i,y=p*(r+1)-i;return{generator:h,mirroredGenerator:c,mapPercentToKeyframes:l,calculatedDuration:f,resolvedDuration:p,totalDuration:y}}onPostResolved(){const{autoplay:e=!0}=this.options;this.play(),this.pendingPlayState==="paused"||!e?this.pause():this.state=this.pendingPlayState}tick(e,n=!1){const{resolved:r}=this;if(!r){const{keyframes:_}=this.options;return{done:!0,value:_[_.length-1]}}const{finalKeyframe:i,generator:s,mirroredGenerator:o,mapPercentToKeyframes:a,keyframes:l,calculatedDuration:c,totalDuration:h,resolvedDuration:f}=r;if(this.startTime===null)return s.next(0);const{delay:p,repeat:y,repeatType:S,repeatDelay:I,onUpdate:R}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-h/this.speed,this.startTime)),n?this.currentTime=e:this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=Math.round(e-this.startTime)*this.speed;const v=this.currentTime-p*(this.speed>=0?1:-1),w=this.speed>=0?v<0:v>h;this.currentTime=Math.max(v,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=h);let x=this.currentTime,V=s;if(y){const _=Math.min(this.currentTime,h)/f;let P=Math.floor(_),C=_%1;!C&&_>=1&&(C=1),C===1&&P--,P=Math.min(P,y+1),!!(P%2)&&(S==="reverse"?(C=1-C,I&&(C-=I/f)):S==="mirror"&&(V=o)),x=Qr(0,1,C)*f}const O=w?{done:!1,value:l[0]}:V.next(x);a&&(O.value=a(O.value));let{done:M}=O;!w&&c!==null&&(M=this.speed>=0?this.currentTime>=h:this.currentTime<=0);const T=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&M);return T&&i!==void 0&&(O.value=Sh(l,this.options,i)),R&&R(O.value),T&&this.finish(),O}get duration(){const{resolved:e}=this;return e?Qn(e.calculatedDuration):0}get time(){return Qn(this.currentTime)}set time(e){e=Gn(e),this.currentTime=e,this.holdTime!==null||this.speed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.speed)}get speed(){return this.playbackSpeed}set speed(e){const n=this.playbackSpeed!==e;this.playbackSpeed=e,n&&(this.time=Qn(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved){this.pendingPlayState="running";return}if(this.isStopped)return;const{driver:e=AD,onPlay:n,startTime:r}=this.options;this.driver||(this.driver=e(s=>this.tick(s))),n&&n();const i=this.driver.now();this.holdTime!==null?this.startTime=i-this.holdTime:this.startTime?this.state==="finished"&&(this.startTime=i):this.startTime=r??this.calcStartTime(),this.state==="finished"&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){var e;if(!this._resolved){this.pendingPlayState="paused";return}this.state="paused",this.holdTime=(e=this.currentTime)!==null&&e!==void 0?e:0}complete(){this.state!=="running"&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";const{onComplete:e}=this.options;e&&e()}cancel(){this.cancelTime!==null&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel()}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}}const LS=new Set(["opacity","clipPath","filter","transform"]),bD=10,VD=(t,e)=>{let n="";const r=Math.max(Math.round(e/bD),2);for(let i=0;i<r;i++)n+=t(Js(0,r-1,i))+", ";return`linear(${n.substring(0,n.length-2)})`};function Vg(t){let e;return()=>(e===void 0&&(e=t()),e)}const DD={linearEasing:void 0};function ND(t,e){const n=Vg(t);return()=>{var r;return(r=DD[e])!==null&&r!==void 0?r:n()}}const Cc=ND(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing");function MS(t){return!!(typeof t=="function"&&Cc()||!t||typeof t=="string"&&(t in Mp||Cc())||Rg(t)||Array.isArray(t)&&t.every(MS))}const ra=([t,e,n,r])=>`cubic-bezier(${t}, ${e}, ${n}, ${r})`,Mp={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:ra([0,.65,.55,1]),circOut:ra([.55,0,1,.45]),backIn:ra([.31,.01,.66,-.59]),backOut:ra([.33,1.53,.69,.99])};function jS(t,e){if(t)return typeof t=="function"&&Cc()?VD(t,e):Rg(t)?ra(t):Array.isArray(t)?t.map(n=>jS(n,e)||Mp.easeOut):Mp[t]}function OD(t,e,n,{delay:r=0,duration:i=300,repeat:s=0,repeatType:o="loop",ease:a,times:l}={}){const c={[e]:n};l&&(c.offset=l);const h=jS(a,i);return Array.isArray(h)&&(c.easing=h),t.animate(c,{delay:r,duration:i,easing:Array.isArray(h)?"linear":h,fill:"both",iterations:s+1,direction:o==="reverse"?"alternate":"normal"})}function N_(t,e){t.timeline=e,t.onfinish=null}const LD=Vg(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),Ac=10,MD=2e4;function jD(t){return Ag(t.type)||t.type==="spring"||!MS(t.ease)}function FD(t,e){const n=new bg({...e,keyframes:t,repeat:0,delay:0,isGenerator:!0});let r={done:!1,value:t[0]};const i=[];let s=0;for(;!r.done&&s<MD;)r=n.sample(s),i.push(r.value),s+=Ac;return{times:void 0,keyframes:i,duration:s-Ac,ease:"linear"}}const FS={anticipate:cS,backInOut:uS,circInOut:dS};function UD(t){return t in FS}class O_ extends RS{constructor(e){super(e);const{name:n,motionValue:r,element:i,keyframes:s}=this.options;this.resolver=new AS(s,(o,a)=>this.onKeyframesResolved(o,a),n,r,i),this.resolver.scheduleResolve()}initPlayback(e,n){var r;let{duration:i=300,times:s,ease:o,type:a,motionValue:l,name:c,startTime:h}=this.options;if(!(!((r=l.owner)===null||r===void 0)&&r.current))return!1;if(typeof o=="string"&&Cc()&&UD(o)&&(o=FS[o]),jD(this.options)){const{onComplete:p,onUpdate:y,motionValue:S,element:I,...R}=this.options,v=FD(e,R);e=v.keyframes,e.length===1&&(e[1]=e[0]),i=v.duration,s=v.times,o=v.ease,a="keyframes"}const f=OD(l.owner.current,c,e,{...this.options,duration:i,times:s,ease:o});return f.startTime=h??this.calcStartTime(),this.pendingTimeline?(N_(f,this.pendingTimeline),this.pendingTimeline=void 0):f.onfinish=()=>{const{onComplete:p}=this.options;l.set(Sh(e,this.options,n)),p&&p(),this.cancel(),this.resolveFinishedPromise()},{animation:f,duration:i,times:s,type:a,ease:o,keyframes:e}}get duration(){const{resolved:e}=this;if(!e)return 0;const{duration:n}=e;return Qn(n)}get time(){const{resolved:e}=this;if(!e)return 0;const{animation:n}=e;return Qn(n.currentTime||0)}set time(e){const{resolved:n}=this;if(!n)return;const{animation:r}=n;r.currentTime=Gn(e)}get speed(){const{resolved:e}=this;if(!e)return 1;const{animation:n}=e;return n.playbackRate}set speed(e){const{resolved:n}=this;if(!n)return;const{animation:r}=n;r.playbackRate=e}get state(){const{resolved:e}=this;if(!e)return"idle";const{animation:n}=e;return n.playState}get startTime(){const{resolved:e}=this;if(!e)return null;const{animation:n}=e;return n.startTime}attachTimeline(e){if(!this._resolved)this.pendingTimeline=e;else{const{resolved:n}=this;if(!n)return gt;const{animation:r}=n;N_(r,e)}return gt}play(){if(this.isStopped)return;const{resolved:e}=this;if(!e)return;const{animation:n}=e;n.playState==="finished"&&this.updateFinishedPromise(),n.play()}pause(){const{resolved:e}=this;if(!e)return;const{animation:n}=e;n.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.resolveFinishedPromise(),this.updateFinishedPromise();const{resolved:e}=this;if(!e)return;const{animation:n,keyframes:r,duration:i,type:s,ease:o,times:a}=e;if(n.playState==="idle"||n.playState==="finished")return;if(this.time){const{motionValue:c,onUpdate:h,onComplete:f,element:p,...y}=this.options,S=new bg({...y,keyframes:r,duration:i,type:s,ease:o,times:a,isGenerator:!0}),I=Gn(this.time);c.setWithVelocity(S.sample(I-Ac).value,S.sample(I).value,Ac)}const{onStop:l}=this.options;l&&l(),this.cancel()}complete(){const{resolved:e}=this;e&&e.animation.finish()}cancel(){const{resolved:e}=this;e&&e.animation.cancel()}static supports(e){const{motionValue:n,name:r,repeatDelay:i,repeatType:s,damping:o,type:a}=e;return LD()&&r&&LS.has(r)&&n&&n.owner&&n.owner.current instanceof HTMLElement&&!n.owner.getProps().onUpdate&&!i&&s!=="mirror"&&o!==0&&a!=="inertia"}}const BD=Vg(()=>window.ScrollTimeline!==void 0);class $D{constructor(e){this.stop=()=>this.runAll("stop"),this.animations=e.filter(Boolean)}then(e,n){return Promise.all(this.animations).then(e).catch(n)}getAll(e){return this.animations[0][e]}setAll(e,n){for(let r=0;r<this.animations.length;r++)this.animations[r][e]=n}attachTimeline(e,n){const r=this.animations.map(i=>BD()&&i.attachTimeline?i.attachTimeline(e):n(i));return()=>{r.forEach((i,s)=>{i&&i(),this.animations[s].stop()})}}get time(){return this.getAll("time")}set time(e){this.setAll("time",e)}get speed(){return this.getAll("speed")}set speed(e){this.setAll("speed",e)}get startTime(){return this.getAll("startTime")}get duration(){let e=0;for(let n=0;n<this.animations.length;n++)e=Math.max(e,this.animations[n].duration);return e}runAll(e){this.animations.forEach(n=>n[e]())}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}function zD({when:t,delay:e,delayChildren:n,staggerChildren:r,staggerDirection:i,repeat:s,repeatType:o,repeatDelay:a,from:l,elapsed:c,...h}){return!!Object.keys(h).length}const Dg=(t,e,n,r={},i,s)=>o=>{const a=_g(r,t)||{},l=a.delay||r.delay||0;let{elapsed:c=0}=r;c=c-Gn(l);let h={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:e.getVelocity(),...a,delay:-c,onUpdate:p=>{e.set(p),a.onUpdate&&a.onUpdate(p)},onComplete:()=>{o(),a.onComplete&&a.onComplete()},name:t,motionValue:e,element:s?void 0:i};zD(a)||(h={...h,...lV(t,h)}),h.duration&&(h.duration=Gn(h.duration)),h.repeatDelay&&(h.repeatDelay=Gn(h.repeatDelay)),h.from!==void 0&&(h.keyframes[0]=h.from);let f=!1;if((h.type===!1||h.duration===0&&!h.repeatDelay)&&(h.duration=0,h.delay===0&&(f=!0)),f&&!s&&e.get()!==void 0){const p=Sh(h.keyframes,a);if(p!==void 0)return ye.update(()=>{h.onUpdate(p),h.onComplete()}),new $D([])}return!s&&O_.supports(h)?new O_(h):new bg(h)},WD=t=>!!(t&&typeof t=="object"&&t.mix&&t.toValue),HD=t=>Rp(t)?t[t.length-1]||0:t;function Ng(t,e){t.indexOf(e)===-1&&t.push(e)}function Og(t,e){const n=t.indexOf(e);n>-1&&t.splice(n,1)}class Lg{constructor(){this.subscriptions=[]}add(e){return Ng(this.subscriptions,e),()=>Og(this.subscriptions,e)}notify(e,n,r){const i=this.subscriptions.length;if(i)if(i===1)this.subscriptions[0](e,n,r);else for(let s=0;s<i;s++){const o=this.subscriptions[s];o&&o(e,n,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const L_=30,qD=t=>!isNaN(parseFloat(t));class KD{constructor(e,n={}){this.version="11.11.4",this.canTrackVelocity=null,this.events={},this.updateAndNotify=(r,i=!0)=>{const s=Cn.now();this.updatedAt!==s&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(r),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),i&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(e),this.owner=n.owner}setCurrent(e){this.current=e,this.updatedAt=Cn.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=qD(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,n){this.events[e]||(this.events[e]=new Lg);const r=this.events[e].add(n);return e==="change"?()=>{r(),ye.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,n){this.passiveEffect=e,this.stopPassiveEffect=n}set(e,n=!0){!n||!this.passiveEffect?this.updateAndNotify(e,n):this.passiveEffect(e,this.updateAndNotify)}setWithVelocity(e,n,r){this.set(n),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-r}jump(e,n=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,n&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const e=Cn.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>L_)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,L_);return kS(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(e){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=e(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Ja(t,e){return new KD(t,e)}function GD(t,e,n){t.hasValue(e)?t.getValue(e).set(n):t.addValue(e,Ja(n))}function QD(t,e){const n=xh(t,e);let{transitionEnd:r={},transition:i={},...s}=n||{};s={...s,...r};for(const o in s){const a=HD(s[o]);GD(t,o,a)}}const Ih=t=>t.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),YD="framerAppearId",US="data-"+Ih(YD);function BS(t){return t.props[US]}const mt=t=>!!(t&&t.getVelocity);function XD(t){return!!(mt(t)&&t.add)}function $S(t){if(ri.has(t))return"transform";if(LS.has(t))return Ih(t)}function jp(t,e){var n;if(!t.applyWillChange)return;const r=t.getValue("willChange");if(XD(r))return r.add(e);!(!((n=t.props.style)===null||n===void 0)&&n.willChange)&&$S(e)&&t.setStaticValue("willChange","transform")}function JD({protectedKeys:t,needsAnimating:e},n){const r=t.hasOwnProperty(n)&&e[n]!==!0;return e[n]=!1,r}function zS(t,e,{delay:n=0,transitionOverride:r,type:i}={}){var s;let{transition:o=t.getDefaultTransition(),transitionEnd:a,...l}=e;r&&(o=r);const c=[],h=i&&t.animationState&&t.animationState.getState()[i];for(const f in l){const p=t.getValue(f,(s=t.latestValues[f])!==null&&s!==void 0?s:null),y=l[f];if(y===void 0||h&&JD(h,f))continue;const S={delay:n,..._g(o||{},f)};let I=!1;if(window.MotionHandoffAnimation){const v=BS(t);if(v){const w=window.MotionHandoffAnimation(v,f,ye);w!==null&&(S.startTime=w,I=!0)}}jp(t,f),p.start(Dg(f,p,y,t.shouldReduceMotion&&ri.has(f)?{type:!1}:S,t,I));const R=p.animation;R&&c.push(R)}return a&&Promise.all(c).then(()=>{ye.update(()=>{a&&QD(t,a)})}),c}function Fp(t,e,n={}){var r;const i=xh(t,e,n.type==="exit"?(r=t.presenceContext)===null||r===void 0?void 0:r.custom:void 0);let{transition:s=t.getDefaultTransition()||{}}=i||{};n.transitionOverride&&(s=n.transitionOverride);const o=i?()=>Promise.all(zS(t,i,n)):()=>Promise.resolve(),a=t.variantChildren&&t.variantChildren.size?(c=0)=>{const{delayChildren:h=0,staggerChildren:f,staggerDirection:p}=s;return ZD(t,e,h+c,f,p,n)}:()=>Promise.resolve(),{when:l}=s;if(l){const[c,h]=l==="beforeChildren"?[o,a]:[a,o];return c().then(()=>h())}else return Promise.all([o(),a(n.delay)])}function ZD(t,e,n=0,r=0,i=1,s){const o=[],a=(t.variantChildren.size-1)*r,l=i===1?(c=0)=>c*r:(c=0)=>a-c*r;return Array.from(t.variantChildren).sort(e4).forEach((c,h)=>{c.notify("AnimationStart",e),o.push(Fp(c,e,{...s,delay:n+l(h)}).then(()=>c.notify("AnimationComplete",e)))}),Promise.all(o)}function e4(t,e){return t.sortNodePosition(e)}function t4(t,e,n={}){t.notify("AnimationStart",e);let r;if(Array.isArray(e)){const i=e.map(s=>Fp(t,s,n));r=Promise.all(i)}else if(typeof e=="string")r=Fp(t,e,n);else{const i=typeof e=="function"?xh(t,e,n.custom):e;r=Promise.all(zS(t,i,n))}return r.then(()=>{t.notify("AnimationComplete",e)})}const n4=vg.length;function WS(t){if(!t)return;if(!t.isControllingVariants){const n=t.parent?WS(t.parent)||{}:{};return t.props.initial!==void 0&&(n.initial=t.props.initial),n}const e={};for(let n=0;n<n4;n++){const r=vg[n],i=t.props[r];(Qa(i)||i===!1)&&(e[r]=i)}return e}const r4=[...yg].reverse(),i4=yg.length;function s4(t){return e=>Promise.all(e.map(({animation:n,options:r})=>t4(t,n,r)))}function o4(t){let e=s4(t),n=M_(),r=!0;const i=l=>(c,h)=>{var f;const p=xh(t,h,l==="exit"?(f=t.presenceContext)===null||f===void 0?void 0:f.custom:void 0);if(p){const{transition:y,transitionEnd:S,...I}=p;c={...c,...I,...S}}return c};function s(l){e=l(t)}function o(l){const{props:c}=t,h=WS(t.parent)||{},f=[],p=new Set;let y={},S=1/0;for(let R=0;R<i4;R++){const v=r4[R],w=n[v],x=c[v]!==void 0?c[v]:h[v],V=Qa(x),O=v===l?w.isActive:null;O===!1&&(S=R);let M=x===h[v]&&x!==c[v]&&V;if(M&&r&&t.manuallyAnimateOnMount&&(M=!1),w.protectedKeys={...y},!w.isActive&&O===null||!x&&!w.prevProp||Ga(x)||typeof x=="boolean")continue;const T=a4(w.prevProp,x);let _=T||v===l&&w.isActive&&!M&&V||R>S&&V,P=!1;const C=Array.isArray(x)?x:[x];let A=C.reduce(i(v),{});O===!1&&(A={});const{prevResolvedValues:b={}}=w,k={...b,...A},we=de=>{_=!0,p.has(de)&&(P=!0,p.delete(de)),w.needsAnimating[de]=!0;const $=t.getValue(de);$&&($.liveStyle=!1)};for(const de in k){const $=A[de],K=b[de];if(y.hasOwnProperty(de))continue;let Y=!1;Rp($)&&Rp(K)?Y=!rS($,K):Y=$!==K,Y?$!=null?we(de):p.add(de):$!==void 0&&p.has(de)?we(de):w.protectedKeys[de]=!0}w.prevProp=x,w.prevResolvedValues=A,w.isActive&&(y={...y,...A}),r&&t.blockInitialAnimation&&(_=!1),_&&(!(M&&T)||P)&&f.push(...C.map(de=>({animation:de,options:{type:v}})))}if(p.size){const R={};p.forEach(v=>{const w=t.getBaseTarget(v),x=t.getValue(v);x&&(x.liveStyle=!0),R[v]=w??null}),f.push({animation:R})}let I=!!f.length;return r&&(c.initial===!1||c.initial===c.animate)&&!t.manuallyAnimateOnMount&&(I=!1),r=!1,I?e(f):Promise.resolve()}function a(l,c){var h;if(n[l].isActive===c)return Promise.resolve();(h=t.variantChildren)===null||h===void 0||h.forEach(p=>{var y;return(y=p.animationState)===null||y===void 0?void 0:y.setActive(l,c)}),n[l].isActive=c;const f=o(l);for(const p in n)n[p].protectedKeys={};return f}return{animateChanges:o,setActive:a,setAnimateFunction:s,getState:()=>n,reset:()=>{n=M_(),r=!0}}}function a4(t,e){return typeof e=="string"?e!==t:Array.isArray(e)?!rS(e,t):!1}function hi(t=!1){return{isActive:t,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function M_(){return{animate:hi(!0),whileInView:hi(),whileHover:hi(),whileTap:hi(),whileDrag:hi(),whileFocus:hi(),exit:hi()}}class ii{constructor(e){this.isMounted=!1,this.node=e}update(){}}class l4 extends ii{constructor(e){super(e),e.animationState||(e.animationState=o4(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();Ga(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:n}=this.node.prevProps||{};e!==n&&this.updateAnimationControlsSubscription()}unmount(){var e;this.node.animationState.reset(),(e=this.unmountControls)===null||e===void 0||e.call(this)}}let u4=0;class c4 extends ii{constructor(){super(...arguments),this.id=u4++}update(){if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:n}=this.node.presenceContext,{isPresent:r}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===r)return;const i=this.node.animationState.setActive("exit",!e);n&&!e&&i.then(()=>n(this.id))}mount(){const{register:e}=this.node.presenceContext||{};e&&(this.unmount=e(this.id))}unmount(){}}const h4={animation:{Feature:l4},exit:{Feature:c4}},HS=t=>t.pointerType==="mouse"?typeof t.button!="number"||t.button<=0:t.isPrimary!==!1;function Ph(t,e="page"){return{point:{x:t[`${e}X`],y:t[`${e}Y`]}}}const d4=t=>e=>HS(e)&&t(e,Ph(e));function zn(t,e,n,r={passive:!0}){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n)}function Xn(t,e,n,r){return zn(t,e,d4(n),r)}const j_=(t,e)=>Math.abs(t-e);function f4(t,e){const n=j_(t.x,e.x),r=j_(t.y,e.y);return Math.sqrt(n**2+r**2)}class qS{constructor(e,n,{transformPagePoint:r,contextWindow:i,dragSnapToOrigin:s=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const f=Xd(this.lastMoveEventInfo,this.history),p=this.startEvent!==null,y=f4(f.offset,{x:0,y:0})>=3;if(!p&&!y)return;const{point:S}=f,{timestamp:I}=Je;this.history.push({...S,timestamp:I});const{onStart:R,onMove:v}=this.handlers;p||(R&&R(this.lastMoveEvent,f),this.startEvent=this.lastMoveEvent),v&&v(this.lastMoveEvent,f)},this.handlePointerMove=(f,p)=>{this.lastMoveEvent=f,this.lastMoveEventInfo=Yd(p,this.transformPagePoint),ye.update(this.updatePoint,!0)},this.handlePointerUp=(f,p)=>{this.end();const{onEnd:y,onSessionEnd:S,resumeAnimation:I}=this.handlers;if(this.dragSnapToOrigin&&I&&I(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const R=Xd(f.type==="pointercancel"?this.lastMoveEventInfo:Yd(p,this.transformPagePoint),this.history);this.startEvent&&y&&y(f,R),S&&S(f,R)},!HS(e))return;this.dragSnapToOrigin=s,this.handlers=n,this.transformPagePoint=r,this.contextWindow=i||window;const o=Ph(e),a=Yd(o,this.transformPagePoint),{point:l}=a,{timestamp:c}=Je;this.history=[{...l,timestamp:c}];const{onSessionStart:h}=n;h&&h(e,Xd(a,this.history)),this.removeListeners=Yn(Xn(this.contextWindow,"pointermove",this.handlePointerMove),Xn(this.contextWindow,"pointerup",this.handlePointerUp),Xn(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),Gr(this.updatePoint)}}function Yd(t,e){return e?{point:e(t.point)}:t}function F_(t,e){return{x:t.x-e.x,y:t.y-e.y}}function Xd({point:t},e){return{point:t,delta:F_(t,KS(e)),offset:F_(t,p4(e)),velocity:m4(e,.1)}}function p4(t){return t[0]}function KS(t){return t[t.length-1]}function m4(t,e){if(t.length<2)return{x:0,y:0};let n=t.length-1,r=null;const i=KS(t);for(;n>=0&&(r=t[n],!(i.timestamp-r.timestamp>Gn(e)));)n--;if(!r)return{x:0,y:0};const s=Qn(i.timestamp-r.timestamp);if(s===0)return{x:0,y:0};const o={x:(i.x-r.x)/s,y:(i.y-r.y)/s};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}function GS(t){let e=null;return()=>{const n=()=>{e=null};return e===null?(e=t,n):!1}}const U_=GS("dragHorizontal"),B_=GS("dragVertical");function QS(t){let e=!1;if(t==="y")e=B_();else if(t==="x")e=U_();else{const n=U_(),r=B_();n&&r?e=()=>{n(),r()}:(n&&n(),r&&r())}return e}function YS(){const t=QS(!0);return t?(t(),!1):!0}function Ss(t){return t&&typeof t=="object"&&Object.prototype.hasOwnProperty.call(t,"current")}const XS=1e-4,g4=1-XS,y4=1+XS,JS=.01,v4=0-JS,_4=0+JS;function Ht(t){return t.max-t.min}function w4(t,e,n){return Math.abs(t-e)<=n}function $_(t,e,n,r=.5){t.origin=r,t.originPoint=Re(e.min,e.max,t.origin),t.scale=Ht(n)/Ht(e),t.translate=Re(n.min,n.max,t.origin)-t.originPoint,(t.scale>=g4&&t.scale<=y4||isNaN(t.scale))&&(t.scale=1),(t.translate>=v4&&t.translate<=_4||isNaN(t.translate))&&(t.translate=0)}function wa(t,e,n,r){$_(t.x,e.x,n.x,r?r.originX:void 0),$_(t.y,e.y,n.y,r?r.originY:void 0)}function z_(t,e,n){t.min=n.min+e.min,t.max=t.min+Ht(e)}function E4(t,e,n){z_(t.x,e.x,n.x),z_(t.y,e.y,n.y)}function W_(t,e,n){t.min=e.min-n.min,t.max=t.min+Ht(e)}function Ea(t,e,n){W_(t.x,e.x,n.x),W_(t.y,e.y,n.y)}function T4(t,{min:e,max:n},r){return e!==void 0&&t<e?t=r?Re(e,t,r.min):Math.max(t,e):n!==void 0&&t>n&&(t=r?Re(n,t,r.max):Math.min(t,n)),t}function H_(t,e,n){return{min:e!==void 0?t.min+e:void 0,max:n!==void 0?t.max+n-(t.max-t.min):void 0}}function x4(t,{top:e,left:n,bottom:r,right:i}){return{x:H_(t.x,n,i),y:H_(t.y,e,r)}}function q_(t,e){let n=e.min-t.min,r=e.max-t.max;return e.max-e.min<t.max-t.min&&([n,r]=[r,n]),{min:n,max:r}}function S4(t,e){return{x:q_(t.x,e.x),y:q_(t.y,e.y)}}function I4(t,e){let n=.5;const r=Ht(t),i=Ht(e);return i>r?n=Js(e.min,e.max-r,t.min):r>i&&(n=Js(t.min,t.max-i,e.min)),Qr(0,1,n)}function P4(t,e){const n={};return e.min!==void 0&&(n.min=e.min-t.min),e.max!==void 0&&(n.max=e.max-t.min),n}const Up=.35;function C4(t=Up){return t===!1?t=0:t===!0&&(t=Up),{x:K_(t,"left","right"),y:K_(t,"top","bottom")}}function K_(t,e,n){return{min:G_(t,e),max:G_(t,n)}}function G_(t,e){return typeof t=="number"?t:t[e]||0}const Q_=()=>({translate:0,scale:1,origin:0,originPoint:0}),Is=()=>({x:Q_(),y:Q_()}),Y_=()=>({min:0,max:0}),Oe=()=>({x:Y_(),y:Y_()});function Yt(t){return[t("x"),t("y")]}function ZS({top:t,left:e,right:n,bottom:r}){return{x:{min:e,max:n},y:{min:t,max:r}}}function A4({x:t,y:e}){return{top:e.min,right:t.max,bottom:e.max,left:t.min}}function R4(t,e){if(!e)return t;const n=e({x:t.left,y:t.top}),r=e({x:t.right,y:t.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}function Jd(t){return t===void 0||t===1}function Bp({scale:t,scaleX:e,scaleY:n}){return!Jd(t)||!Jd(e)||!Jd(n)}function mi(t){return Bp(t)||eI(t)||t.z||t.rotate||t.rotateX||t.rotateY||t.skewX||t.skewY}function eI(t){return X_(t.x)||X_(t.y)}function X_(t){return t&&t!=="0%"}function Rc(t,e,n){const r=t-n,i=e*r;return n+i}function J_(t,e,n,r,i){return i!==void 0&&(t=Rc(t,i,r)),Rc(t,n,r)+e}function $p(t,e=0,n=1,r,i){t.min=J_(t.min,e,n,r,i),t.max=J_(t.max,e,n,r,i)}function tI(t,{x:e,y:n}){$p(t.x,e.translate,e.scale,e.originPoint),$p(t.y,n.translate,n.scale,n.originPoint)}const Z_=.999999999999,e1=1.0000000000001;function k4(t,e,n,r=!1){const i=n.length;if(!i)return;e.x=e.y=1;let s,o;for(let a=0;a<i;a++){s=n[a],o=s.projectionDelta;const{visualElement:l}=s.options;l&&l.props.style&&l.props.style.display==="contents"||(r&&s.options.layoutScroll&&s.scroll&&s!==s.root&&Cs(t,{x:-s.scroll.offset.x,y:-s.scroll.offset.y}),o&&(e.x*=o.x.scale,e.y*=o.y.scale,tI(t,o)),r&&mi(s.latestValues)&&Cs(t,s.latestValues))}e.x<e1&&e.x>Z_&&(e.x=1),e.y<e1&&e.y>Z_&&(e.y=1)}function Ps(t,e){t.min=t.min+e,t.max=t.max+e}function t1(t,e,n,r,i=.5){const s=Re(t.min,t.max,i);$p(t,e,n,s,r)}function Cs(t,e){t1(t.x,e.x,e.scaleX,e.scale,e.originX),t1(t.y,e.y,e.scaleY,e.scale,e.originY)}function nI(t,e){return ZS(R4(t.getBoundingClientRect(),e))}function b4(t,e,n){const r=nI(t,n),{scroll:i}=e;return i&&(Ps(r.x,i.offset.x),Ps(r.y,i.offset.y)),r}const rI=({current:t})=>t?t.ownerDocument.defaultView:null,V4=new WeakMap;class D4{constructor(e){this.openGlobalLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Oe(),this.visualElement=e}start(e,{snapToCursor:n=!1}={}){const{presenceContext:r}=this.visualElement;if(r&&r.isPresent===!1)return;const i=h=>{const{dragSnapToOrigin:f}=this.getProps();f?this.pauseAnimation():this.stopAnimation(),n&&this.snapToCursor(Ph(h,"page").point)},s=(h,f)=>{const{drag:p,dragPropagation:y,onDragStart:S}=this.getProps();if(p&&!y&&(this.openGlobalLock&&this.openGlobalLock(),this.openGlobalLock=QS(p),!this.openGlobalLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Yt(R=>{let v=this.getAxisMotionValue(R).get()||0;if(Pn.test(v)){const{projection:w}=this.visualElement;if(w&&w.layout){const x=w.layout.layoutBox[R];x&&(v=Ht(x)*(parseFloat(v)/100))}}this.originPoint[R]=v}),S&&ye.postRender(()=>S(h,f)),jp(this.visualElement,"transform");const{animationState:I}=this.visualElement;I&&I.setActive("whileDrag",!0)},o=(h,f)=>{const{dragPropagation:p,dragDirectionLock:y,onDirectionLock:S,onDrag:I}=this.getProps();if(!p&&!this.openGlobalLock)return;const{offset:R}=f;if(y&&this.currentDirection===null){this.currentDirection=N4(R),this.currentDirection!==null&&S&&S(this.currentDirection);return}this.updateAxis("x",f.point,R),this.updateAxis("y",f.point,R),this.visualElement.render(),I&&I(h,f)},a=(h,f)=>this.stop(h,f),l=()=>Yt(h=>{var f;return this.getAnimationState(h)==="paused"&&((f=this.getAxisMotionValue(h).animation)===null||f===void 0?void 0:f.play())}),{dragSnapToOrigin:c}=this.getProps();this.panSession=new qS(e,{onSessionStart:i,onStart:s,onMove:o,onSessionEnd:a,resumeAnimation:l},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:c,contextWindow:rI(this.visualElement)})}stop(e,n){const r=this.isDragging;if(this.cancel(),!r)return;const{velocity:i}=n;this.startAnimation(i);const{onDragEnd:s}=this.getProps();s&&ye.postRender(()=>s(e,n))}cancel(){this.isDragging=!1;const{projection:e,animationState:n}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:r}=this.getProps();!r&&this.openGlobalLock&&(this.openGlobalLock(),this.openGlobalLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(e,n,r){const{drag:i}=this.getProps();if(!r||!pu(e,i,this.currentDirection))return;const s=this.getAxisMotionValue(e);let o=this.originPoint[e]+r[e];this.constraints&&this.constraints[e]&&(o=T4(o,this.constraints[e],this.elastic[e])),s.set(o)}resolveConstraints(){var e;const{dragConstraints:n,dragElastic:r}=this.getProps(),i=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(e=this.visualElement.projection)===null||e===void 0?void 0:e.layout,s=this.constraints;n&&Ss(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):n&&i?this.constraints=x4(i.layoutBox,n):this.constraints=!1,this.elastic=C4(r),s!==this.constraints&&i&&this.constraints&&!this.hasMutatedConstraints&&Yt(o=>{this.constraints!==!1&&this.getAxisMotionValue(o)&&(this.constraints[o]=P4(i.layoutBox[o],this.constraints[o]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:n}=this.getProps();if(!e||!Ss(e))return!1;const r=e.current,{projection:i}=this.visualElement;if(!i||!i.layout)return!1;const s=b4(r,i.root,this.visualElement.getTransformPagePoint());let o=S4(i.layout.layoutBox,s);if(n){const a=n(A4(o));this.hasMutatedConstraints=!!a,a&&(o=ZS(a))}return o}startAnimation(e){const{drag:n,dragMomentum:r,dragElastic:i,dragTransition:s,dragSnapToOrigin:o,onDragTransitionEnd:a}=this.getProps(),l=this.constraints||{},c=Yt(h=>{if(!pu(h,n,this.currentDirection))return;let f=l&&l[h]||{};o&&(f={min:0,max:0});const p=i?200:1e6,y=i?40:1e7,S={type:"inertia",velocity:r?e[h]:0,bounceStiffness:p,bounceDamping:y,timeConstant:750,restDelta:1,restSpeed:10,...s,...f};return this.startAxisValueAnimation(h,S)});return Promise.all(c).then(a)}startAxisValueAnimation(e,n){const r=this.getAxisMotionValue(e);return jp(this.visualElement,e),r.start(Dg(e,r,0,n,this.visualElement,!1))}stopAnimation(){Yt(e=>this.getAxisMotionValue(e).stop())}pauseAnimation(){Yt(e=>{var n;return(n=this.getAxisMotionValue(e).animation)===null||n===void 0?void 0:n.pause()})}getAnimationState(e){var n;return(n=this.getAxisMotionValue(e).animation)===null||n===void 0?void 0:n.state}getAxisMotionValue(e){const n=`_drag${e.toUpperCase()}`,r=this.visualElement.getProps(),i=r[n];return i||this.visualElement.getValue(e,(r.initial?r.initial[e]:void 0)||0)}snapToCursor(e){Yt(n=>{const{drag:r}=this.getProps();if(!pu(n,r,this.currentDirection))return;const{projection:i}=this.visualElement,s=this.getAxisMotionValue(n);if(i&&i.layout){const{min:o,max:a}=i.layout.layoutBox[n];s.set(e[n]-Re(o,a,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:n}=this.getProps(),{projection:r}=this.visualElement;if(!Ss(n)||!r||!this.constraints)return;this.stopAnimation();const i={x:0,y:0};Yt(o=>{const a=this.getAxisMotionValue(o);if(a&&this.constraints!==!1){const l=a.get();i[o]=I4({min:l,max:l},this.constraints[o])}});const{transformTemplate:s}=this.visualElement.getProps();this.visualElement.current.style.transform=s?s({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.resolveConstraints(),Yt(o=>{if(!pu(o,e,null))return;const a=this.getAxisMotionValue(o),{min:l,max:c}=this.constraints[o];a.set(Re(l,c,i[o]))})}addListeners(){if(!this.visualElement.current)return;V4.set(this.visualElement,this);const e=this.visualElement.current,n=Xn(e,"pointerdown",l=>{const{drag:c,dragListener:h=!0}=this.getProps();c&&h&&this.start(l)}),r=()=>{const{dragConstraints:l}=this.getProps();Ss(l)&&l.current&&(this.constraints=this.resolveRefConstraints())},{projection:i}=this.visualElement,s=i.addEventListener("measure",r);i&&!i.layout&&(i.root&&i.root.updateScroll(),i.updateLayout()),ye.read(r);const o=zn(window,"resize",()=>this.scalePositionWithinConstraints()),a=i.addEventListener("didUpdate",({delta:l,hasLayoutChanged:c})=>{this.isDragging&&c&&(Yt(h=>{const f=this.getAxisMotionValue(h);f&&(this.originPoint[h]+=l[h].translate,f.set(f.get()+l[h].translate))}),this.visualElement.render())});return()=>{o(),n(),s(),a&&a()}}getProps(){const e=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:r=!1,dragPropagation:i=!1,dragConstraints:s=!1,dragElastic:o=Up,dragMomentum:a=!0}=e;return{...e,drag:n,dragDirectionLock:r,dragPropagation:i,dragConstraints:s,dragElastic:o,dragMomentum:a}}}function pu(t,e,n){return(e===!0||e===t)&&(n===null||n===t)}function N4(t,e=10){let n=null;return Math.abs(t.y)>e?n="y":Math.abs(t.x)>e&&(n="x"),n}class O4 extends ii{constructor(e){super(e),this.removeGroupControls=gt,this.removeListeners=gt,this.controls=new D4(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||gt}unmount(){this.removeGroupControls(),this.removeListeners()}}const n1=t=>(e,n)=>{t&&ye.postRender(()=>t(e,n))};class L4 extends ii{constructor(){super(...arguments),this.removePointerDownListener=gt}onPointerDown(e){this.session=new qS(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:rI(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:n,onPan:r,onPanEnd:i}=this.node.getProps();return{onSessionStart:n1(e),onStart:n1(n),onMove:r,onEnd:(s,o)=>{delete this.session,i&&ye.postRender(()=>i(s,o))}}}mount(){this.removePointerDownListener=Xn(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const Mg=N.createContext(null);function M4(){const t=N.useContext(Mg);if(t===null)return[!0,null];const{isPresent:e,onExitComplete:n,register:r}=t,i=N.useId();N.useEffect(()=>r(i),[]);const s=N.useCallback(()=>n&&n(i),[i,n]);return!e&&n?[!1,s]:[!0]}const iI=N.createContext({}),sI=N.createContext({}),Uu={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function r1(t,e){return e.max===e.min?0:t/(e.max-e.min)*100}const qo={correct:(t,e)=>{if(!e.target)return t;if(typeof t=="string")if(X.test(t))t=parseFloat(t);else return t;const n=r1(t,e.target.x),r=r1(t,e.target.y);return`${n}% ${r}%`}},j4={correct:(t,{treeScale:e,projectionDelta:n})=>{const r=t,i=Yr.parse(t);if(i.length>5)return r;const s=Yr.createTransformer(t),o=typeof i[0]!="number"?1:0,a=n.x.scale*e.x,l=n.y.scale*e.y;i[0+o]/=a,i[1+o]/=l;const c=Re(a,l,.5);return typeof i[2+o]=="number"&&(i[2+o]/=c),typeof i[3+o]=="number"&&(i[3+o]/=c),s(i)}},kc={};function F4(t){Object.assign(kc,t)}const{schedule:jg,cancel:GU}=iS(queueMicrotask,!1);class U4 extends N.Component{componentDidMount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:r,layoutId:i}=this.props,{projection:s}=e;F4(B4),s&&(n.group&&n.group.add(s),r&&r.register&&i&&r.register(s),s.root.didUpdate(),s.addEventListener("animationComplete",()=>{this.safeToRemove()}),s.setOptions({...s.options,onExitComplete:()=>this.safeToRemove()})),Uu.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:n,visualElement:r,drag:i,isPresent:s}=this.props,o=r.projection;return o&&(o.isPresent=s,i||e.layoutDependency!==n||n===void 0?o.willUpdate():this.safeToRemove(),e.isPresent!==s&&(s?o.promote():o.relegate()||ye.postRender(()=>{const a=o.getStack();(!a||!a.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),jg.postRender(()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:r}=this.props,{projection:i}=e;i&&(i.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(i),r&&r.deregister&&r.deregister(i))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function oI(t){const[e,n]=M4(),r=N.useContext(iI);return g.jsx(U4,{...t,layoutGroup:r,switchLayoutGroup:N.useContext(sI),isPresent:e,safeToRemove:n})}const B4={borderRadius:{...qo,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:qo,borderTopRightRadius:qo,borderBottomLeftRadius:qo,borderBottomRightRadius:qo,boxShadow:j4},aI=["TopLeft","TopRight","BottomLeft","BottomRight"],$4=aI.length,i1=t=>typeof t=="string"?parseFloat(t):t,s1=t=>typeof t=="number"||X.test(t);function z4(t,e,n,r,i,s){i?(t.opacity=Re(0,n.opacity!==void 0?n.opacity:1,W4(r)),t.opacityExit=Re(e.opacity!==void 0?e.opacity:1,0,H4(r))):s&&(t.opacity=Re(e.opacity!==void 0?e.opacity:1,n.opacity!==void 0?n.opacity:1,r));for(let o=0;o<$4;o++){const a=`border${aI[o]}Radius`;let l=o1(e,a),c=o1(n,a);if(l===void 0&&c===void 0)continue;l||(l=0),c||(c=0),l===0||c===0||s1(l)===s1(c)?(t[a]=Math.max(Re(i1(l),i1(c),r),0),(Pn.test(c)||Pn.test(l))&&(t[a]+="%")):t[a]=c}(e.rotate||n.rotate)&&(t.rotate=Re(e.rotate||0,n.rotate||0,r))}function o1(t,e){return t[e]!==void 0?t[e]:t.borderRadius}const W4=lI(0,.5,hS),H4=lI(.5,.95,gt);function lI(t,e,n){return r=>r<t?0:r>e?1:n(Js(t,e,r))}function a1(t,e){t.min=e.min,t.max=e.max}function Qt(t,e){a1(t.x,e.x),a1(t.y,e.y)}function l1(t,e){t.translate=e.translate,t.scale=e.scale,t.originPoint=e.originPoint,t.origin=e.origin}function u1(t,e,n,r,i){return t-=e,t=Rc(t,1/n,r),i!==void 0&&(t=Rc(t,1/i,r)),t}function q4(t,e=0,n=1,r=.5,i,s=t,o=t){if(Pn.test(e)&&(e=parseFloat(e),e=Re(o.min,o.max,e/100)-o.min),typeof e!="number")return;let a=Re(s.min,s.max,r);t===s&&(a-=e),t.min=u1(t.min,e,n,a,i),t.max=u1(t.max,e,n,a,i)}function c1(t,e,[n,r,i],s,o){q4(t,e[n],e[r],e[i],e.scale,s,o)}const K4=["x","scaleX","originX"],G4=["y","scaleY","originY"];function h1(t,e,n,r){c1(t.x,e,K4,n?n.x:void 0,r?r.x:void 0),c1(t.y,e,G4,n?n.y:void 0,r?r.y:void 0)}function d1(t){return t.translate===0&&t.scale===1}function uI(t){return d1(t.x)&&d1(t.y)}function f1(t,e){return t.min===e.min&&t.max===e.max}function Q4(t,e){return f1(t.x,e.x)&&f1(t.y,e.y)}function p1(t,e){return Math.round(t.min)===Math.round(e.min)&&Math.round(t.max)===Math.round(e.max)}function cI(t,e){return p1(t.x,e.x)&&p1(t.y,e.y)}function m1(t){return Ht(t.x)/Ht(t.y)}function g1(t,e){return t.translate===e.translate&&t.scale===e.scale&&t.originPoint===e.originPoint}class Y4{constructor(){this.members=[]}add(e){Ng(this.members,e),e.scheduleRender()}remove(e){if(Og(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(e){const n=this.members.findIndex(i=>e===i);if(n===0)return!1;let r;for(let i=n;i>=0;i--){const s=this.members[i];if(s.isPresent!==!1){r=s;break}}return r?(this.promote(r),!0):!1}promote(e,n){const r=this.lead;if(e!==r&&(this.prevLead=r,this.lead=e,e.show(),r)){r.instance&&r.scheduleRender(),e.scheduleRender(),e.resumeFrom=r,n&&(e.resumeFrom.preserveOpacity=!0),r.snapshot&&(e.snapshot=r.snapshot,e.snapshot.latestValues=r.animationValues||r.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0);const{crossfade:i}=e.options;i===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(e=>{const{options:n,resumingFrom:r}=e;n.onExitComplete&&n.onExitComplete(),r&&r.options.onExitComplete&&r.options.onExitComplete()})}scheduleRender(){this.members.forEach(e=>{e.instance&&e.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function X4(t,e,n){let r="";const i=t.x.translate/e.x,s=t.y.translate/e.y,o=(n==null?void 0:n.z)||0;if((i||s||o)&&(r=`translate3d(${i}px, ${s}px, ${o}px) `),(e.x!==1||e.y!==1)&&(r+=`scale(${1/e.x}, ${1/e.y}) `),n){const{transformPerspective:c,rotate:h,rotateX:f,rotateY:p,skewX:y,skewY:S}=n;c&&(r=`perspective(${c}px) ${r}`),h&&(r+=`rotate(${h}deg) `),f&&(r+=`rotateX(${f}deg) `),p&&(r+=`rotateY(${p}deg) `),y&&(r+=`skewX(${y}deg) `),S&&(r+=`skewY(${S}deg) `)}const a=t.x.scale*e.x,l=t.y.scale*e.y;return(a!==1||l!==1)&&(r+=`scale(${a}, ${l})`),r||"none"}const J4=(t,e)=>t.depth-e.depth;class Z4{constructor(){this.children=[],this.isDirty=!1}add(e){Ng(this.children,e),this.isDirty=!0}remove(e){Og(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(J4),this.isDirty=!1,this.children.forEach(e)}}function Bu(t){const e=mt(t)?t.get():t;return WD(e)?e.toValue():e}function eN(t,e){const n=Cn.now(),r=({timestamp:i})=>{const s=i-n;s>=e&&(Gr(r),t(s-e))};return ye.read(r,!0),()=>Gr(r)}function tN(t){return t instanceof SVGElement&&t.tagName!=="svg"}function nN(t,e,n){const r=mt(t)?t:Ja(t);return r.start(Dg("",r,e,n)),r.animation}const gi={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0},ia=typeof window<"u"&&window.MotionDebug!==void 0,Zd=["","X","Y","Z"],rN={visibility:"hidden"},y1=1e3;let iN=0;function ef(t,e,n,r){const{latestValues:i}=e;i[t]&&(n[t]=i[t],e.setStaticValue(t,0),r&&(r[t]=0))}function hI(t){if(t.hasCheckedOptimisedAppear=!0,t.root===t)return;const{visualElement:e}=t.options;if(!e)return;const n=BS(e);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:i,layoutId:s}=t.options;window.MotionCancelOptimisedAnimation(n,"transform",ye,!(i||s))}const{parent:r}=t;r&&!r.hasCheckedOptimisedAppear&&hI(r)}function dI({attachResizeListener:t,defaultParent:e,measureScroll:n,checkIsScrollRoot:r,resetTransform:i}){return class{constructor(o={},a=e==null?void 0:e()){this.id=iN++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,ia&&(gi.totalNodes=gi.resolvedTargetDeltas=gi.recalculatedProjection=0),this.nodes.forEach(aN),this.nodes.forEach(dN),this.nodes.forEach(fN),this.nodes.forEach(lN),ia&&window.MotionDebug.record(gi)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=o,this.root=a?a.root||a:this,this.path=a?[...a.path,a]:[],this.parent=a,this.depth=a?a.depth+1:0;for(let l=0;l<this.path.length;l++)this.path[l].shouldResetTransform=!0;this.root===this&&(this.nodes=new Z4)}addEventListener(o,a){return this.eventHandlers.has(o)||this.eventHandlers.set(o,new Lg),this.eventHandlers.get(o).add(a)}notifyListeners(o,...a){const l=this.eventHandlers.get(o);l&&l.notify(...a)}hasListeners(o){return this.eventHandlers.has(o)}mount(o,a=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=tN(o),this.instance=o;const{layoutId:l,layout:c,visualElement:h}=this.options;if(h&&!h.current&&h.mount(o),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),a&&(c||l)&&(this.isLayoutDirty=!0),t){let f;const p=()=>this.root.updateBlockedByResize=!1;t(o,()=>{this.root.updateBlockedByResize=!0,f&&f(),f=eN(p,250),Uu.hasAnimatedSinceResize&&(Uu.hasAnimatedSinceResize=!1,this.nodes.forEach(_1))})}l&&this.root.registerSharedNode(l,this),this.options.animate!==!1&&h&&(l||c)&&this.addEventListener("didUpdate",({delta:f,hasLayoutChanged:p,hasRelativeTargetChanged:y,layout:S})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const I=this.options.transition||h.getDefaultTransition()||vN,{onLayoutAnimationStart:R,onLayoutAnimationComplete:v}=h.getProps(),w=!this.targetLayout||!cI(this.targetLayout,S)||y,x=!p&&y;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||x||p&&(w||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(f,x);const V={..._g(I,"layout"),onPlay:R,onComplete:v};(h.shouldReduceMotion||this.options.layoutRoot)&&(V.delay=0,V.type=!1),this.startAnimation(V)}else p||_1(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=S})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const o=this.getStack();o&&o.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,Gr(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(pN),this.animationId++)}getTransformTemplate(){const{visualElement:o}=this.options;return o&&o.getProps().transformTemplate}willUpdate(o=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&hI(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let h=0;h<this.path.length;h++){const f=this.path[h];f.shouldResetTransform=!0,f.updateScroll("snapshot"),f.options.layoutRoot&&f.willUpdate(!1)}const{layoutId:a,layout:l}=this.options;if(a===void 0&&!l)return;const c=this.getTransformTemplate();this.prevTransformTemplateValue=c?c(this.latestValues,""):void 0,this.updateSnapshot(),o&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(v1);return}this.isUpdating||this.nodes.forEach(cN),this.isUpdating=!1,this.nodes.forEach(hN),this.nodes.forEach(sN),this.nodes.forEach(oN),this.clearAllSnapshots();const a=Cn.now();Je.delta=Qr(0,1e3/60,a-Je.timestamp),Je.timestamp=a,Je.isProcessing=!0,Hd.update.process(Je),Hd.preRender.process(Je),Hd.render.process(Je),Je.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,jg.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(uN),this.sharedNodes.forEach(mN)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,ye.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){ye.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const o=this.layout;this.layout=this.measure(!1),this.layoutCorrected=Oe(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:a}=this.options;a&&a.notify("LayoutMeasure",this.layout.layoutBox,o?o.layoutBox:void 0)}updateScroll(o="measure"){let a=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===o&&(a=!1),a){const l=r(this.instance);this.scroll={animationId:this.root.animationId,phase:o,isRoot:l,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:l}}}resetTransform(){if(!i)return;const o=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,a=this.projectionDelta&&!uI(this.projectionDelta),l=this.getTransformTemplate(),c=l?l(this.latestValues,""):void 0,h=c!==this.prevTransformTemplateValue;o&&(a||mi(this.latestValues)||h)&&(i(this.instance,c),this.shouldResetTransform=!1,this.scheduleRender())}measure(o=!0){const a=this.measurePageBox();let l=this.removeElementScroll(a);return o&&(l=this.removeTransform(l)),_N(l),{animationId:this.root.animationId,measuredBox:a,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){var o;const{visualElement:a}=this.options;if(!a)return Oe();const l=a.measureViewportBox();if(!(((o=this.scroll)===null||o===void 0?void 0:o.wasRoot)||this.path.some(wN))){const{scroll:h}=this.root;h&&(Ps(l.x,h.offset.x),Ps(l.y,h.offset.y))}return l}removeElementScroll(o){var a;const l=Oe();if(Qt(l,o),!((a=this.scroll)===null||a===void 0)&&a.wasRoot)return l;for(let c=0;c<this.path.length;c++){const h=this.path[c],{scroll:f,options:p}=h;h!==this.root&&f&&p.layoutScroll&&(f.wasRoot&&Qt(l,o),Ps(l.x,f.offset.x),Ps(l.y,f.offset.y))}return l}applyTransform(o,a=!1){const l=Oe();Qt(l,o);for(let c=0;c<this.path.length;c++){const h=this.path[c];!a&&h.options.layoutScroll&&h.scroll&&h!==h.root&&Cs(l,{x:-h.scroll.offset.x,y:-h.scroll.offset.y}),mi(h.latestValues)&&Cs(l,h.latestValues)}return mi(this.latestValues)&&Cs(l,this.latestValues),l}removeTransform(o){const a=Oe();Qt(a,o);for(let l=0;l<this.path.length;l++){const c=this.path[l];if(!c.instance||!mi(c.latestValues))continue;Bp(c.latestValues)&&c.updateSnapshot();const h=Oe(),f=c.measurePageBox();Qt(h,f),h1(a,c.latestValues,c.snapshot?c.snapshot.layoutBox:void 0,h)}return mi(this.latestValues)&&h1(a,this.latestValues),a}setTargetDelta(o){this.targetDelta=o,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(o){this.options={...this.options,...o,crossfade:o.crossfade!==void 0?o.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Je.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(o=!1){var a;const l=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=l.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=l.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=l.isSharedProjectionDirty);const c=!!this.resumingFrom||this!==l;if(!(o||c&&this.isSharedProjectionDirty||this.isProjectionDirty||!((a=this.parent)===null||a===void 0)&&a.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:f,layoutId:p}=this.options;if(!(!this.layout||!(f||p))){if(this.resolvedRelativeTargetAt=Je.timestamp,!this.targetDelta&&!this.relativeTarget){const y=this.getClosestProjectingParent();y&&y.layout&&this.animationProgress!==1?(this.relativeParent=y,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Oe(),this.relativeTargetOrigin=Oe(),Ea(this.relativeTargetOrigin,this.layout.layoutBox,y.layout.layoutBox),Qt(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=Oe(),this.targetWithTransforms=Oe()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),E4(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):Qt(this.target,this.layout.layoutBox),tI(this.target,this.targetDelta)):Qt(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const y=this.getClosestProjectingParent();y&&!!y.resumingFrom==!!this.resumingFrom&&!y.options.layoutScroll&&y.target&&this.animationProgress!==1?(this.relativeParent=y,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Oe(),this.relativeTargetOrigin=Oe(),Ea(this.relativeTargetOrigin,this.target,y.target),Qt(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}ia&&gi.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||Bp(this.parent.latestValues)||eI(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var o;const a=this.getLead(),l=!!this.resumingFrom||this!==a;let c=!0;if((this.isProjectionDirty||!((o=this.parent)===null||o===void 0)&&o.isProjectionDirty)&&(c=!1),l&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(c=!1),this.resolvedRelativeTargetAt===Je.timestamp&&(c=!1),c)return;const{layout:h,layoutId:f}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(h||f))return;Qt(this.layoutCorrected,this.layout.layoutBox);const p=this.treeScale.x,y=this.treeScale.y;k4(this.layoutCorrected,this.treeScale,this.path,l),a.layout&&!a.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(a.target=a.layout.layoutBox,a.targetWithTransforms=Oe());const{target:S}=a;if(!S){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(l1(this.prevProjectionDelta.x,this.projectionDelta.x),l1(this.prevProjectionDelta.y,this.projectionDelta.y)),wa(this.projectionDelta,this.layoutCorrected,S,this.latestValues),(this.treeScale.x!==p||this.treeScale.y!==y||!g1(this.projectionDelta.x,this.prevProjectionDelta.x)||!g1(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",S)),ia&&gi.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(o=!0){var a;if((a=this.options.visualElement)===null||a===void 0||a.scheduleRender(),o){const l=this.getStack();l&&l.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Is(),this.projectionDelta=Is(),this.projectionDeltaWithTransform=Is()}setAnimationOrigin(o,a=!1){const l=this.snapshot,c=l?l.latestValues:{},h={...this.latestValues},f=Is();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!a;const p=Oe(),y=l?l.source:void 0,S=this.layout?this.layout.source:void 0,I=y!==S,R=this.getStack(),v=!R||R.members.length<=1,w=!!(I&&!v&&this.options.crossfade===!0&&!this.path.some(yN));this.animationProgress=0;let x;this.mixTargetDelta=V=>{const O=V/1e3;w1(f.x,o.x,O),w1(f.y,o.y,O),this.setTargetDelta(f),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Ea(p,this.layout.layoutBox,this.relativeParent.layout.layoutBox),gN(this.relativeTarget,this.relativeTargetOrigin,p,O),x&&Q4(this.relativeTarget,x)&&(this.isProjectionDirty=!1),x||(x=Oe()),Qt(x,this.relativeTarget)),I&&(this.animationValues=h,z4(h,c,this.latestValues,O,w,v)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=O},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(o){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(Gr(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=ye.update(()=>{Uu.hasAnimatedSinceResize=!0,this.currentAnimation=nN(0,y1,{...o,onUpdate:a=>{this.mixTargetDelta(a),o.onUpdate&&o.onUpdate(a)},onComplete:()=>{o.onComplete&&o.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const o=this.getStack();o&&o.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(y1),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const o=this.getLead();let{targetWithTransforms:a,target:l,layout:c,latestValues:h}=o;if(!(!a||!l||!c)){if(this!==o&&this.layout&&c&&fI(this.options.animationType,this.layout.layoutBox,c.layoutBox)){l=this.target||Oe();const f=Ht(this.layout.layoutBox.x);l.x.min=o.target.x.min,l.x.max=l.x.min+f;const p=Ht(this.layout.layoutBox.y);l.y.min=o.target.y.min,l.y.max=l.y.min+p}Qt(a,l),Cs(a,h),wa(this.projectionDeltaWithTransform,this.layoutCorrected,a,h)}}registerSharedNode(o,a){this.sharedNodes.has(o)||this.sharedNodes.set(o,new Y4),this.sharedNodes.get(o).add(a);const c=a.options.initialPromotionConfig;a.promote({transition:c?c.transition:void 0,preserveFollowOpacity:c&&c.shouldPreserveFollowOpacity?c.shouldPreserveFollowOpacity(a):void 0})}isLead(){const o=this.getStack();return o?o.lead===this:!0}getLead(){var o;const{layoutId:a}=this.options;return a?((o=this.getStack())===null||o===void 0?void 0:o.lead)||this:this}getPrevLead(){var o;const{layoutId:a}=this.options;return a?(o=this.getStack())===null||o===void 0?void 0:o.prevLead:void 0}getStack(){const{layoutId:o}=this.options;if(o)return this.root.sharedNodes.get(o)}promote({needsReset:o,transition:a,preserveFollowOpacity:l}={}){const c=this.getStack();c&&c.promote(this,l),o&&(this.projectionDelta=void 0,this.needsReset=!0),a&&this.setOptions({transition:a})}relegate(){const o=this.getStack();return o?o.relegate(this):!1}resetSkewAndRotation(){const{visualElement:o}=this.options;if(!o)return;let a=!1;const{latestValues:l}=o;if((l.z||l.rotate||l.rotateX||l.rotateY||l.rotateZ||l.skewX||l.skewY)&&(a=!0),!a)return;const c={};l.z&&ef("z",o,c,this.animationValues);for(let h=0;h<Zd.length;h++)ef(`rotate${Zd[h]}`,o,c,this.animationValues),ef(`skew${Zd[h]}`,o,c,this.animationValues);o.render();for(const h in c)o.setStaticValue(h,c[h]),this.animationValues&&(this.animationValues[h]=c[h]);o.scheduleRender()}getProjectionStyles(o){var a,l;if(!this.instance||this.isSVG)return;if(!this.isVisible)return rN;const c={visibility:""},h=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,c.opacity="",c.pointerEvents=Bu(o==null?void 0:o.pointerEvents)||"",c.transform=h?h(this.latestValues,""):"none",c;const f=this.getLead();if(!this.projectionDelta||!this.layout||!f.target){const I={};return this.options.layoutId&&(I.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,I.pointerEvents=Bu(o==null?void 0:o.pointerEvents)||""),this.hasProjected&&!mi(this.latestValues)&&(I.transform=h?h({},""):"none",this.hasProjected=!1),I}const p=f.animationValues||f.latestValues;this.applyTransformsToTarget(),c.transform=X4(this.projectionDeltaWithTransform,this.treeScale,p),h&&(c.transform=h(p,c.transform));const{x:y,y:S}=this.projectionDelta;c.transformOrigin=`${y.origin*100}% ${S.origin*100}% 0`,f.animationValues?c.opacity=f===this?(l=(a=p.opacity)!==null&&a!==void 0?a:this.latestValues.opacity)!==null&&l!==void 0?l:1:this.preserveOpacity?this.latestValues.opacity:p.opacityExit:c.opacity=f===this?p.opacity!==void 0?p.opacity:"":p.opacityExit!==void 0?p.opacityExit:0;for(const I in kc){if(p[I]===void 0)continue;const{correct:R,applyTo:v}=kc[I],w=c.transform==="none"?p[I]:R(p[I],f);if(v){const x=v.length;for(let V=0;V<x;V++)c[v[V]]=w}else c[I]=w}return this.options.layoutId&&(c.pointerEvents=f===this?Bu(o==null?void 0:o.pointerEvents)||"":"none"),c}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(o=>{var a;return(a=o.currentAnimation)===null||a===void 0?void 0:a.stop()}),this.root.nodes.forEach(v1),this.root.sharedNodes.clear()}}}function sN(t){t.updateLayout()}function oN(t){var e;const n=((e=t.resumeFrom)===null||e===void 0?void 0:e.snapshot)||t.snapshot;if(t.isLead()&&t.layout&&n&&t.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:i}=t.layout,{animationType:s}=t.options,o=n.source!==t.layout.source;s==="size"?Yt(f=>{const p=o?n.measuredBox[f]:n.layoutBox[f],y=Ht(p);p.min=r[f].min,p.max=p.min+y}):fI(s,n.layoutBox,r)&&Yt(f=>{const p=o?n.measuredBox[f]:n.layoutBox[f],y=Ht(r[f]);p.max=p.min+y,t.relativeTarget&&!t.currentAnimation&&(t.isProjectionDirty=!0,t.relativeTarget[f].max=t.relativeTarget[f].min+y)});const a=Is();wa(a,r,n.layoutBox);const l=Is();o?wa(l,t.applyTransform(i,!0),n.measuredBox):wa(l,r,n.layoutBox);const c=!uI(a);let h=!1;if(!t.resumeFrom){const f=t.getClosestProjectingParent();if(f&&!f.resumeFrom){const{snapshot:p,layout:y}=f;if(p&&y){const S=Oe();Ea(S,n.layoutBox,p.layoutBox);const I=Oe();Ea(I,r,y.layoutBox),cI(S,I)||(h=!0),f.options.layoutRoot&&(t.relativeTarget=I,t.relativeTargetOrigin=S,t.relativeParent=f)}}}t.notifyListeners("didUpdate",{layout:r,snapshot:n,delta:l,layoutDelta:a,hasLayoutChanged:c,hasRelativeTargetChanged:h})}else if(t.isLead()){const{onExitComplete:r}=t.options;r&&r()}t.options.transition=void 0}function aN(t){ia&&gi.totalNodes++,t.parent&&(t.isProjecting()||(t.isProjectionDirty=t.parent.isProjectionDirty),t.isSharedProjectionDirty||(t.isSharedProjectionDirty=!!(t.isProjectionDirty||t.parent.isProjectionDirty||t.parent.isSharedProjectionDirty)),t.isTransformDirty||(t.isTransformDirty=t.parent.isTransformDirty))}function lN(t){t.isProjectionDirty=t.isSharedProjectionDirty=t.isTransformDirty=!1}function uN(t){t.clearSnapshot()}function v1(t){t.clearMeasurements()}function cN(t){t.isLayoutDirty=!1}function hN(t){const{visualElement:e}=t.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),t.resetTransform()}function _1(t){t.finishAnimation(),t.targetDelta=t.relativeTarget=t.target=void 0,t.isProjectionDirty=!0}function dN(t){t.resolveTargetDelta()}function fN(t){t.calcProjection()}function pN(t){t.resetSkewAndRotation()}function mN(t){t.removeLeadSnapshot()}function w1(t,e,n){t.translate=Re(e.translate,0,n),t.scale=Re(e.scale,1,n),t.origin=e.origin,t.originPoint=e.originPoint}function E1(t,e,n,r){t.min=Re(e.min,n.min,r),t.max=Re(e.max,n.max,r)}function gN(t,e,n,r){E1(t.x,e.x,n.x,r),E1(t.y,e.y,n.y,r)}function yN(t){return t.animationValues&&t.animationValues.opacityExit!==void 0}const vN={duration:.45,ease:[.4,0,.1,1]},T1=t=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(t),x1=T1("applewebkit/")&&!T1("chrome/")?Math.round:gt;function S1(t){t.min=x1(t.min),t.max=x1(t.max)}function _N(t){S1(t.x),S1(t.y)}function fI(t,e,n){return t==="position"||t==="preserve-aspect"&&!w4(m1(e),m1(n),.2)}function wN(t){var e;return t!==t.root&&((e=t.scroll)===null||e===void 0?void 0:e.wasRoot)}const EN=dI({attachResizeListener:(t,e)=>zn(t,"resize",e),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),tf={current:void 0},pI=dI({measureScroll:t=>({x:t.scrollLeft,y:t.scrollTop}),defaultParent:()=>{if(!tf.current){const t=new EN({});t.mount(window),t.setOptions({layoutScroll:!0}),tf.current=t}return tf.current},resetTransform:(t,e)=>{t.style.transform=e!==void 0?e:"none"},checkIsScrollRoot:t=>window.getComputedStyle(t).position==="fixed"}),TN={pan:{Feature:L4},drag:{Feature:O4,ProjectionNode:pI,MeasureLayout:oI}};function I1(t,e){const n=e?"pointerenter":"pointerleave",r=e?"onHoverStart":"onHoverEnd",i=(s,o)=>{if(s.pointerType==="touch"||YS())return;const a=t.getProps();t.animationState&&a.whileHover&&t.animationState.setActive("whileHover",e);const l=a[r];l&&ye.postRender(()=>l(s,o))};return Xn(t.current,n,i,{passive:!t.getProps()[r]})}class xN extends ii{mount(){this.unmount=Yn(I1(this.node,!0),I1(this.node,!1))}unmount(){}}class SN extends ii{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Yn(zn(this.node.current,"focus",()=>this.onFocus()),zn(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}const mI=(t,e)=>e?t===e?!0:mI(t,e.parentElement):!1;function nf(t,e){if(!e)return;const n=new PointerEvent("pointer"+t);e(n,Ph(n))}class IN extends ii{constructor(){super(...arguments),this.removeStartListeners=gt,this.removeEndListeners=gt,this.removeAccessibleListeners=gt,this.startPointerPress=(e,n)=>{if(this.isPressing)return;this.removeEndListeners();const r=this.node.getProps(),s=Xn(window,"pointerup",(a,l)=>{if(!this.checkPressEnd())return;const{onTap:c,onTapCancel:h,globalTapTarget:f}=this.node.getProps(),p=!f&&!mI(this.node.current,a.target)?h:c;p&&ye.update(()=>p(a,l))},{passive:!(r.onTap||r.onPointerUp)}),o=Xn(window,"pointercancel",(a,l)=>this.cancelPress(a,l),{passive:!(r.onTapCancel||r.onPointerCancel)});this.removeEndListeners=Yn(s,o),this.startPress(e,n)},this.startAccessiblePress=()=>{const e=s=>{if(s.key!=="Enter"||this.isPressing)return;const o=a=>{a.key!=="Enter"||!this.checkPressEnd()||nf("up",(l,c)=>{const{onTap:h}=this.node.getProps();h&&ye.postRender(()=>h(l,c))})};this.removeEndListeners(),this.removeEndListeners=zn(this.node.current,"keyup",o),nf("down",(a,l)=>{this.startPress(a,l)})},n=zn(this.node.current,"keydown",e),r=()=>{this.isPressing&&nf("cancel",(s,o)=>this.cancelPress(s,o))},i=zn(this.node.current,"blur",r);this.removeAccessibleListeners=Yn(n,i)}}startPress(e,n){this.isPressing=!0;const{onTapStart:r,whileTap:i}=this.node.getProps();i&&this.node.animationState&&this.node.animationState.setActive("whileTap",!0),r&&ye.postRender(()=>r(e,n))}checkPressEnd(){return this.removeEndListeners(),this.isPressing=!1,this.node.getProps().whileTap&&this.node.animationState&&this.node.animationState.setActive("whileTap",!1),!YS()}cancelPress(e,n){if(!this.checkPressEnd())return;const{onTapCancel:r}=this.node.getProps();r&&ye.postRender(()=>r(e,n))}mount(){const e=this.node.getProps(),n=Xn(e.globalTapTarget?window:this.node.current,"pointerdown",this.startPointerPress,{passive:!(e.onTapStart||e.onPointerStart)}),r=zn(this.node.current,"focus",this.startAccessiblePress);this.removeStartListeners=Yn(n,r)}unmount(){this.removeStartListeners(),this.removeEndListeners(),this.removeAccessibleListeners()}}const zp=new WeakMap,rf=new WeakMap,PN=t=>{const e=zp.get(t.target);e&&e(t)},CN=t=>{t.forEach(PN)};function AN({root:t,...e}){const n=t||document;rf.has(n)||rf.set(n,{});const r=rf.get(n),i=JSON.stringify(e);return r[i]||(r[i]=new IntersectionObserver(CN,{root:t,...e})),r[i]}function RN(t,e,n){const r=AN(e);return zp.set(t,n),r.observe(t),()=>{zp.delete(t),r.unobserve(t)}}const kN={some:0,all:1};class bN extends ii{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:e={}}=this.node.getProps(),{root:n,margin:r,amount:i="some",once:s}=e,o={root:n?n.current:void 0,rootMargin:r,threshold:typeof i=="number"?i:kN[i]},a=l=>{const{isIntersecting:c}=l;if(this.isInView===c||(this.isInView=c,s&&!c&&this.hasEnteredView))return;c&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",c);const{onViewportEnter:h,onViewportLeave:f}=this.node.getProps(),p=c?h:f;p&&p(l)};return RN(this.node.current,o,a)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:e,prevProps:n}=this.node;["amount","margin","root"].some(VN(e,n))&&this.startObserver()}unmount(){}}function VN({viewport:t={}},{viewport:e={}}={}){return n=>t[n]!==e[n]}const DN={inView:{Feature:bN},tap:{Feature:IN},focus:{Feature:SN},hover:{Feature:xN}},NN={layout:{ProjectionNode:pI,MeasureLayout:oI}},gI=N.createContext({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"}),Ch=N.createContext({}),Fg=typeof window<"u",ON=Fg?N.useLayoutEffect:N.useEffect,yI=N.createContext({strict:!1});function LN(t,e,n,r,i){var s,o;const{visualElement:a}=N.useContext(Ch),l=N.useContext(yI),c=N.useContext(Mg),h=N.useContext(gI).reducedMotion,f=N.useRef();r=r||l.renderer,!f.current&&r&&(f.current=r(t,{visualState:e,parent:a,props:n,presenceContext:c,blockInitialAnimation:c?c.initial===!1:!1,reducedMotionConfig:h}));const p=f.current,y=N.useContext(sI);p&&!p.projection&&i&&(p.type==="html"||p.type==="svg")&&MN(f.current,n,i,y),N.useInsertionEffect(()=>{p&&p.update(n,c)});const S=n[US],I=N.useRef(!!S&&!(!((s=window.MotionHandoffIsComplete)===null||s===void 0)&&s.call(window,S))&&((o=window.MotionHasOptimisedAnimation)===null||o===void 0?void 0:o.call(window,S)));return ON(()=>{p&&(window.MotionIsMounted=!0,p.updateFeatures(),jg.render(p.render),I.current&&p.animationState&&p.animationState.animateChanges())}),N.useEffect(()=>{p&&(!I.current&&p.animationState&&p.animationState.animateChanges(),I.current&&(queueMicrotask(()=>{var R;(R=window.MotionHandoffMarkAsComplete)===null||R===void 0||R.call(window,S)}),I.current=!1))}),p}function MN(t,e,n,r){const{layoutId:i,layout:s,drag:o,dragConstraints:a,layoutScroll:l,layoutRoot:c}=e;t.projection=new n(t.latestValues,e["data-framer-portal-id"]?void 0:vI(t.parent)),t.projection.setOptions({layoutId:i,layout:s,alwaysMeasureLayout:!!o||a&&Ss(a),visualElement:t,animationType:typeof s=="string"?s:"both",initialPromotionConfig:r,layoutScroll:l,layoutRoot:c})}function vI(t){if(t)return t.options.allowProjection!==!1?t.projection:vI(t.parent)}function jN(t,e,n){return N.useCallback(r=>{r&&t.mount&&t.mount(r),e&&(r?e.mount(r):e.unmount()),n&&(typeof n=="function"?n(r):Ss(n)&&(n.current=r))},[e])}function Ah(t){return Ga(t.animate)||vg.some(e=>Qa(t[e]))}function _I(t){return!!(Ah(t)||t.variants)}function FN(t,e){if(Ah(t)){const{initial:n,animate:r}=t;return{initial:n===!1||Qa(n)?n:void 0,animate:Qa(r)?r:void 0}}return t.inherit!==!1?e:{}}function UN(t){const{initial:e,animate:n}=FN(t,N.useContext(Ch));return N.useMemo(()=>({initial:e,animate:n}),[P1(e),P1(n)])}function P1(t){return Array.isArray(t)?t.join(" "):t}const C1={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},Zs={};for(const t in C1)Zs[t]={isEnabled:e=>C1[t].some(n=>!!e[n])};function BN(t){for(const e in t)Zs[e]={...Zs[e],...t[e]}}const $N=Symbol.for("motionComponentSymbol");function zN({preloadedFeatures:t,createVisualElement:e,useRender:n,useVisualState:r,Component:i}){t&&BN(t);function s(a,l){let c;const h={...N.useContext(gI),...a,layoutId:WN(a)},{isStatic:f}=h,p=UN(a),y=r(a,f);if(!f&&Fg){HN();const S=qN(h);c=S.MeasureLayout,p.visualElement=LN(i,y,h,e,S.ProjectionNode)}return g.jsxs(Ch.Provider,{value:p,children:[c&&p.visualElement?g.jsx(c,{visualElement:p.visualElement,...h}):null,n(i,a,jN(y,p.visualElement,l),y,f,p.visualElement)]})}const o=N.forwardRef(s);return o[$N]=i,o}function WN({layoutId:t}){const e=N.useContext(iI).id;return e&&t!==void 0?e+"-"+t:t}function HN(t,e){N.useContext(yI).strict}function qN(t){const{drag:e,layout:n}=Zs;if(!e&&!n)return{};const r={...e,...n};return{MeasureLayout:e!=null&&e.isEnabled(t)||n!=null&&n.isEnabled(t)?r.MeasureLayout:void 0,ProjectionNode:r.ProjectionNode}}const KN=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Ug(t){return typeof t!="string"||t.includes("-")?!1:!!(KN.indexOf(t)>-1||/[A-Z]/u.test(t))}function wI(t,{style:e,vars:n},r,i){Object.assign(t.style,e,i&&i.getProjectionStyles(r));for(const s in n)t.style.setProperty(s,n[s])}const EI=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function TI(t,e,n,r){wI(t,e,void 0,r);for(const i in e.attrs)t.setAttribute(EI.has(i)?i:Ih(i),e.attrs[i])}function xI(t,{layout:e,layoutId:n}){return ri.has(t)||t.startsWith("origin")||(e||n!==void 0)&&(!!kc[t]||t==="opacity")}function Bg(t,e,n){var r;const{style:i}=t,s={};for(const o in i)(mt(i[o])||e.style&&mt(e.style[o])||xI(o,t)||((r=n==null?void 0:n.getValue(o))===null||r===void 0?void 0:r.liveStyle)!==void 0)&&(s[o]=i[o]);return n&&i&&typeof i.willChange=="string"&&(n.applyWillChange=!1),s}function SI(t,e,n){const r=Bg(t,e,n);for(const i in t)if(mt(t[i])||mt(e[i])){const s=ml.indexOf(i)!==-1?"attr"+i.charAt(0).toUpperCase()+i.substring(1):i;r[s]=t[i]}return r}function GN(t){const e=N.useRef(null);return e.current===null&&(e.current=t()),e.current}function QN({applyWillChange:t=!1,scrapeMotionValuesFromProps:e,createRenderState:n,onMount:r},i,s,o,a){const l={latestValues:YN(i,s,o,a?!1:t,e),renderState:n()};return r&&(l.mount=c=>r(i,c,l)),l}const II=t=>(e,n)=>{const r=N.useContext(Ch),i=N.useContext(Mg),s=()=>QN(t,e,r,i,n);return n?s():GN(s)};function A1(t,e,n){const r=Array.isArray(e)?e:[e];for(let i=0;i<r.length;i++){const s=gg(t,r[i]);if(s){const{transitionEnd:o,transition:a,...l}=s;n(l,o)}}}function YN(t,e,n,r,i){var s;const o={};let a=r&&((s=t.style)===null||s===void 0?void 0:s.willChange)===void 0;const l=i(t,{});for(const I in l)o[I]=Bu(l[I]);let{initial:c,animate:h}=t;const f=Ah(t),p=_I(t);e&&p&&!f&&t.inherit!==!1&&(c===void 0&&(c=e.initial),h===void 0&&(h=e.animate));let y=n?n.initial===!1:!1;y=y||c===!1;const S=y?h:c;return S&&typeof S!="boolean"&&!Ga(S)&&A1(t,S,(I,R)=>{for(const v in I){let w=I[v];if(Array.isArray(w)){const x=y?w.length-1:0;w=w[x]}w!==null&&(o[v]=w)}for(const v in R)o[v]=R[v]}),a&&h&&c!==!1&&!Ga(h)&&A1(t,h,I=>{for(const R in I)if($S(R)){o.willChange="transform";return}}),o}const $g=()=>({style:{},transform:{},transformOrigin:{},vars:{}}),PI=()=>({...$g(),attrs:{}}),CI=(t,e)=>e&&typeof t=="number"?e.transform(t):t,XN={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},JN=ml.length;function ZN(t,e,n){let r="",i=!0;for(let s=0;s<JN;s++){const o=ml[s],a=t[o];if(a===void 0)continue;let l=!0;if(typeof a=="number"?l=a===(o.startsWith("scale")?1:0):l=parseFloat(a)===0,!l||n){const c=CI(a,Pg[o]);if(!l){i=!1;const h=XN[o]||o;r+=`${h}(${c}) `}n&&(e[o]=c)}}return r=r.trim(),n?r=n(e,i?"":r):i&&(r="none"),r}function zg(t,e,n){const{style:r,vars:i,transformOrigin:s}=t;let o=!1,a=!1;for(const l in e){const c=e[l];if(ri.has(l)){o=!0;continue}else if(gS(l)){i[l]=c;continue}else{const h=CI(c,Pg[l]);l.startsWith("origin")?(a=!0,s[l]=h):r[l]=h}}if(e.transform||(o||n?r.transform=ZN(e,t.transform,n):r.transform&&(r.transform="none")),a){const{originX:l="50%",originY:c="50%",originZ:h=0}=s;r.transformOrigin=`${l} ${c} ${h}`}}function R1(t,e,n){return typeof t=="string"?t:X.transform(e+n*t)}function eO(t,e,n){const r=R1(e,t.x,t.width),i=R1(n,t.y,t.height);return`${r} ${i}`}const tO={offset:"stroke-dashoffset",array:"stroke-dasharray"},nO={offset:"strokeDashoffset",array:"strokeDasharray"};function rO(t,e,n=1,r=0,i=!0){t.pathLength=1;const s=i?tO:nO;t[s.offset]=X.transform(-r);const o=X.transform(e),a=X.transform(n);t[s.array]=`${o} ${a}`}function Wg(t,{attrX:e,attrY:n,attrScale:r,originX:i,originY:s,pathLength:o,pathSpacing:a=1,pathOffset:l=0,...c},h,f){if(zg(t,c,f),h){t.style.viewBox&&(t.attrs.viewBox=t.style.viewBox);return}t.attrs=t.style,t.style={};const{attrs:p,style:y,dimensions:S}=t;p.transform&&(S&&(y.transform=p.transform),delete p.transform),S&&(i!==void 0||s!==void 0||y.transform)&&(y.transformOrigin=eO(S,i!==void 0?i:.5,s!==void 0?s:.5)),e!==void 0&&(p.x=e),n!==void 0&&(p.y=n),r!==void 0&&(p.scale=r),o!==void 0&&rO(p,o,a,l,!1)}const Hg=t=>typeof t=="string"&&t.toLowerCase()==="svg",iO={useVisualState:II({scrapeMotionValuesFromProps:SI,createRenderState:PI,onMount:(t,e,{renderState:n,latestValues:r})=>{ye.read(()=>{try{n.dimensions=typeof e.getBBox=="function"?e.getBBox():e.getBoundingClientRect()}catch{n.dimensions={x:0,y:0,width:0,height:0}}}),ye.render(()=>{Wg(n,r,Hg(e.tagName),t.transformTemplate),TI(e,n)})}})},sO={useVisualState:II({applyWillChange:!0,scrapeMotionValuesFromProps:Bg,createRenderState:$g})};function AI(t,e,n){for(const r in e)!mt(e[r])&&!xI(r,n)&&(t[r]=e[r])}function oO({transformTemplate:t},e){return N.useMemo(()=>{const n=$g();return zg(n,e,t),Object.assign({},n.vars,n.style)},[e])}function aO(t,e){const n=t.style||{},r={};return AI(r,n,t),Object.assign(r,oO(t,e)),r}function lO(t,e){const n={},r=aO(t,e);return t.drag&&t.dragListener!==!1&&(n.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout="none",r.touchAction=t.drag===!0?"none":`pan-${t.drag==="x"?"y":"x"}`),t.tabIndex===void 0&&(t.onTap||t.onTapStart||t.whileTap)&&(n.tabIndex=0),n.style=r,n}const uO=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function bc(t){return t.startsWith("while")||t.startsWith("drag")&&t!=="draggable"||t.startsWith("layout")||t.startsWith("onTap")||t.startsWith("onPan")||t.startsWith("onLayout")||uO.has(t)}let RI=t=>!bc(t);function cO(t){t&&(RI=e=>e.startsWith("on")?!bc(e):t(e))}try{cO(require("@emotion/is-prop-valid").default)}catch{}function hO(t,e,n){const r={};for(const i in t)i==="values"&&typeof t.values=="object"||(RI(i)||n===!0&&bc(i)||!e&&!bc(i)||t.draggable&&i.startsWith("onDrag"))&&(r[i]=t[i]);return r}function dO(t,e,n,r){const i=N.useMemo(()=>{const s=PI();return Wg(s,e,Hg(r),t.transformTemplate),{...s.attrs,style:{...s.style}}},[e]);if(t.style){const s={};AI(s,t.style,t),i.style={...s,...i.style}}return i}function fO(t=!1){return(n,r,i,{latestValues:s},o)=>{const l=(Ug(n)?dO:lO)(r,s,o,n),c=hO(r,typeof n=="string",t),h=n!==N.Fragment?{...c,...l,ref:i}:{},{children:f}=r,p=N.useMemo(()=>mt(f)?f.get():f,[f]);return N.createElement(n,{...h,children:p})}}function pO(t,e){return function(r,{forwardMotionProps:i}={forwardMotionProps:!1}){const o={...Ug(r)?iO:sO,preloadedFeatures:t,useRender:fO(i),createVisualElement:e,Component:r};return zN(o)}}const Wp={current:null},kI={current:!1};function mO(){if(kI.current=!0,!!Fg)if(window.matchMedia){const t=window.matchMedia("(prefers-reduced-motion)"),e=()=>Wp.current=t.matches;t.addListener(e),e()}else Wp.current=!1}function gO(t,e,n){for(const r in e){const i=e[r],s=n[r];if(mt(i))t.addValue(r,i);else if(mt(s))t.addValue(r,Ja(i,{owner:t}));else if(s!==i)if(t.hasValue(r)){const o=t.getValue(r);o.liveStyle===!0?o.jump(i):o.hasAnimated||o.set(i)}else{const o=t.getStaticValue(r);t.addValue(r,Ja(o!==void 0?o:i,{owner:t}))}}for(const r in n)e[r]===void 0&&t.removeValue(r);return e}const k1=new WeakMap,yO=[..._S,ht,Yr],vO=t=>yO.find(vS(t)),b1=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class _O{scrapeMotionValuesFromProps(e,n,r){return{}}constructor({parent:e,props:n,presenceContext:r,reducedMotionConfig:i,blockInitialAnimation:s,visualState:o},a={}){this.applyWillChange=!1,this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=xg,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const p=Cn.now();this.renderScheduledAt<p&&(this.renderScheduledAt=p,ye.render(this.render,!1,!0))};const{latestValues:l,renderState:c}=o;this.latestValues=l,this.baseTarget={...l},this.initialValues=n.initial?{...l}:{},this.renderState=c,this.parent=e,this.props=n,this.presenceContext=r,this.depth=e?e.depth+1:0,this.reducedMotionConfig=i,this.options=a,this.blockInitialAnimation=!!s,this.isControllingVariants=Ah(n),this.isVariantNode=_I(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:h,...f}=this.scrapeMotionValuesFromProps(n,{},this);for(const p in f){const y=f[p];l[p]!==void 0&&mt(y)&&y.set(l[p],!1)}}mount(e){this.current=e,k1.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((n,r)=>this.bindToMotionValue(r,n)),kI.current||mO(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:Wp.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){k1.delete(this.current),this.projection&&this.projection.unmount(),Gr(this.notifyUpdate),Gr(this.render),this.valueSubscriptions.forEach(e=>e()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const e in this.events)this.events[e].clear();for(const e in this.features){const n=this.features[e];n&&(n.unmount(),n.isMounted=!1)}this.current=null}bindToMotionValue(e,n){this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)();const r=ri.has(e),i=n.on("change",a=>{this.latestValues[e]=a,this.props.onUpdate&&ye.preRender(this.notifyUpdate),r&&this.projection&&(this.projection.isTransformDirty=!0)}),s=n.on("renderRequest",this.scheduleRender);let o;window.MotionCheckAppearSync&&(o=window.MotionCheckAppearSync(this,e,n)),this.valueSubscriptions.set(e,()=>{i(),s(),o&&o(),n.owner&&n.stop()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e="animation";for(e in Zs){const n=Zs[e];if(!n)continue;const{isEnabled:r,Feature:i}=n;if(!this.features[e]&&i&&r(this.props)&&(this.features[e]=new i(this)),this.features[e]){const s=this.features[e];s.isMounted?s.update():(s.mount(),s.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Oe()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,n){this.latestValues[e]=n}update(e,n){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let r=0;r<b1.length;r++){const i=b1[r];this.propEventSubscriptions[i]&&(this.propEventSubscriptions[i](),delete this.propEventSubscriptions[i]);const s="on"+i,o=e[s];o&&(this.propEventSubscriptions[i]=this.on(i,o))}this.prevMotionValues=gO(this,this.scrapeMotionValuesFromProps(e,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(e),()=>n.variantChildren.delete(e)}addValue(e,n){const r=this.values.get(e);n!==r&&(r&&this.removeValue(e),this.bindToMotionValue(e,n),this.values.set(e,n),this.latestValues[e]=n.get())}removeValue(e){this.values.delete(e);const n=this.valueSubscriptions.get(e);n&&(n(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,n){if(this.props.values&&this.props.values[e])return this.props.values[e];let r=this.values.get(e);return r===void 0&&n!==void 0&&(r=Ja(n===null?void 0:n,{owner:this}),this.addValue(e,r)),r}readValue(e,n){var r;let i=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:(r=this.getBaseTargetFromProps(this.props,e))!==null&&r!==void 0?r:this.readValueFromInstance(this.current,e,this.options);return i!=null&&(typeof i=="string"&&(pS(i)||fS(i))?i=parseFloat(i):!vO(i)&&Yr.test(n)&&(i=CS(e,n)),this.setBaseTarget(e,mt(i)?i.get():i)),mt(i)?i.get():i}setBaseTarget(e,n){this.baseTarget[e]=n}getBaseTarget(e){var n;const{initial:r}=this.props;let i;if(typeof r=="string"||typeof r=="object"){const o=gg(this.props,r,(n=this.presenceContext)===null||n===void 0?void 0:n.custom);o&&(i=o[e])}if(r&&i!==void 0)return i;const s=this.getBaseTargetFromProps(this.props,e);return s!==void 0&&!mt(s)?s:this.initialValues[e]!==void 0&&i===void 0?void 0:this.baseTarget[e]}on(e,n){return this.events[e]||(this.events[e]=new Lg),this.events[e].add(n)}notify(e,...n){this.events[e]&&this.events[e].notify(...n)}}class bI extends _O{constructor(){super(...arguments),this.KeyframeResolver=AS}sortInstanceNodePosition(e,n){return e.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(e,n){return e.style?e.style[n]:void 0}removeValueFromRenderState(e,{vars:n,style:r}){delete n[e],delete r[e]}}function wO(t){return window.getComputedStyle(t)}class EO extends bI{constructor(){super(...arguments),this.type="html",this.applyWillChange=!0,this.renderInstance=wI}readValueFromInstance(e,n){if(ri.has(n)){const r=Cg(n);return r&&r.default||0}else{const r=wO(e),i=(gS(n)?r.getPropertyValue(n):r[n])||0;return typeof i=="string"?i.trim():i}}measureInstanceViewportBox(e,{transformPagePoint:n}){return nI(e,n)}build(e,n,r){zg(e,n,r.transformTemplate)}scrapeMotionValuesFromProps(e,n,r){return Bg(e,n,r)}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;mt(e)&&(this.childSubscription=e.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}}class TO extends bI{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=Oe}getBaseTargetFromProps(e,n){return e[n]}readValueFromInstance(e,n){if(ri.has(n)){const r=Cg(n);return r&&r.default||0}return n=EI.has(n)?n:Ih(n),e.getAttribute(n)}scrapeMotionValuesFromProps(e,n,r){return SI(e,n,r)}build(e,n,r){Wg(e,n,this.isSVGTag,r.transformTemplate)}renderInstance(e,n,r,i){TI(e,n,r,i)}mount(e){this.isSVGTag=Hg(e.tagName),super.mount(e)}}const xO=(t,e)=>Ug(t)?new TO(e):new EO(e,{allowProjection:t!==N.Fragment}),SO=pO({...h4,...DN,...TN,...NN},xO),pe=rV(SO),G={primary:"#ed2647",accent:"#f692a3",light:"#7f7f7f",dark:"#222222",white:"#ffffff",black:"#000000"};var V1={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VI=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},IO=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},DI={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,h=s>>2,f=(s&3)<<4|a>>4;let p=(a&15)<<2|c>>6,y=c&63;l||(y=64,o||(p=64)),r.push(n[h],n[f],n[p],n[y])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(VI(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):IO(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const f=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||c==null||f==null)throw new PO;const p=s<<2|a>>4;if(r.push(p),c!==64){const y=a<<4&240|c>>2;if(r.push(y),f!==64){const S=c<<6&192|f;r.push(S)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class PO extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const CO=function(t){const e=VI(t);return DI.encodeByteArray(e,!0)},Vc=function(t){return CO(t).replace(/\./g,"")},NI=function(t){try{return DI.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AO(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RO=()=>AO().__FIREBASE_DEFAULTS__,kO=()=>{if(typeof process>"u"||typeof V1>"u")return;const t=V1.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},bO=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&NI(t[1]);return e&&JSON.parse(e)},Rh=()=>{try{return RO()||kO()||bO()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},OI=t=>{var e,n;return(n=(e=Rh())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},VO=t=>{const e=OI(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},LI=()=>{var t;return(t=Rh())===null||t===void 0?void 0:t.config},MI=t=>{var e;return(e=Rh())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DO{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NO(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Vc(JSON.stringify(n)),Vc(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function OO(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(vt())}function LO(){var t;const e=(t=Rh())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function MO(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function jO(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function FO(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function UO(){const t=vt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function BO(){return!LO()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function $O(){try{return typeof indexedDB=="object"}catch{return!1}}function zO(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WO="FirebaseError";class cr extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=WO,Object.setPrototypeOf(this,cr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,vl.prototype.create)}}class vl{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?HO(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new cr(i,a,r)}}function HO(t,e){return t.replace(qO,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const qO=/\{\$([^}]+)}/g;function KO(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Dc(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(D1(s)&&D1(o)){if(!Dc(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function D1(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _l(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function GO(t,e){const n=new QO(t,e);return n.subscribe.bind(n)}class QO{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");YO(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=sf),i.error===void 0&&(i.error=sf),i.complete===void 0&&(i.complete=sf);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function YO(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function sf(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function It(t){return t&&t._delegate?t._delegate:t}class $i{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yi="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XO{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new DO;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(ZO(e))try{this.getOrInitializeService({instanceIdentifier:yi})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=yi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=yi){return this.instances.has(e)}getOptions(e=yi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:JO(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=yi){return this.component?this.component.multipleInstances?e:yi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function JO(t){return t===yi?void 0:t}function ZO(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eL{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new XO(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var oe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(oe||(oe={}));const tL={debug:oe.DEBUG,verbose:oe.VERBOSE,info:oe.INFO,warn:oe.WARN,error:oe.ERROR,silent:oe.SILENT},nL=oe.INFO,rL={[oe.DEBUG]:"log",[oe.VERBOSE]:"log",[oe.INFO]:"info",[oe.WARN]:"warn",[oe.ERROR]:"error"},iL=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=rL[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class qg{constructor(e){this.name=e,this._logLevel=nL,this._logHandler=iL,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in oe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?tL[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,oe.DEBUG,...e),this._logHandler(this,oe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,oe.VERBOSE,...e),this._logHandler(this,oe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,oe.INFO,...e),this._logHandler(this,oe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,oe.WARN,...e),this._logHandler(this,oe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,oe.ERROR,...e),this._logHandler(this,oe.ERROR,...e)}}const sL=(t,e)=>e.some(n=>t instanceof n);let N1,O1;function oL(){return N1||(N1=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function aL(){return O1||(O1=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const jI=new WeakMap,Hp=new WeakMap,FI=new WeakMap,of=new WeakMap,Kg=new WeakMap;function lL(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Br(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&jI.set(n,t)}).catch(()=>{}),Kg.set(e,t),e}function uL(t){if(Hp.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Hp.set(t,e)}let qp={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Hp.get(t);if(e==="objectStoreNames")return t.objectStoreNames||FI.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Br(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function cL(t){qp=t(qp)}function hL(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(af(this),e,...n);return FI.set(r,e.sort?e.sort():[e]),Br(r)}:aL().includes(t)?function(...e){return t.apply(af(this),e),Br(jI.get(this))}:function(...e){return Br(t.apply(af(this),e))}}function dL(t){return typeof t=="function"?hL(t):(t instanceof IDBTransaction&&uL(t),sL(t,oL())?new Proxy(t,qp):t)}function Br(t){if(t instanceof IDBRequest)return lL(t);if(of.has(t))return of.get(t);const e=dL(t);return e!==t&&(of.set(t,e),Kg.set(e,t)),e}const af=t=>Kg.get(t);function fL(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Br(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Br(o.result),l.oldVersion,l.newVersion,Br(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const pL=["get","getKey","getAll","getAllKeys","count"],mL=["put","add","delete","clear"],lf=new Map;function L1(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(lf.get(e))return lf.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=mL.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||pL.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return lf.set(e,s),s}cL(t=>({...t,get:(e,n,r)=>L1(e,n)||t.get(e,n,r),has:(e,n)=>!!L1(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gL{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(yL(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function yL(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Kp="@firebase/app",M1="0.10.12";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ir=new qg("@firebase/app"),vL="@firebase/app-compat",_L="@firebase/analytics-compat",wL="@firebase/analytics",EL="@firebase/app-check-compat",TL="@firebase/app-check",xL="@firebase/auth",SL="@firebase/auth-compat",IL="@firebase/database",PL="@firebase/data-connect",CL="@firebase/database-compat",AL="@firebase/functions",RL="@firebase/functions-compat",kL="@firebase/installations",bL="@firebase/installations-compat",VL="@firebase/messaging",DL="@firebase/messaging-compat",NL="@firebase/performance",OL="@firebase/performance-compat",LL="@firebase/remote-config",ML="@firebase/remote-config-compat",jL="@firebase/storage",FL="@firebase/storage-compat",UL="@firebase/firestore",BL="@firebase/vertexai-preview",$L="@firebase/firestore-compat",zL="firebase",WL="10.14.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gp="[DEFAULT]",HL={[Kp]:"fire-core",[vL]:"fire-core-compat",[wL]:"fire-analytics",[_L]:"fire-analytics-compat",[TL]:"fire-app-check",[EL]:"fire-app-check-compat",[xL]:"fire-auth",[SL]:"fire-auth-compat",[IL]:"fire-rtdb",[PL]:"fire-data-connect",[CL]:"fire-rtdb-compat",[AL]:"fire-fn",[RL]:"fire-fn-compat",[kL]:"fire-iid",[bL]:"fire-iid-compat",[VL]:"fire-fcm",[DL]:"fire-fcm-compat",[NL]:"fire-perf",[OL]:"fire-perf-compat",[LL]:"fire-rc",[ML]:"fire-rc-compat",[jL]:"fire-gcs",[FL]:"fire-gcs-compat",[UL]:"fire-fst",[$L]:"fire-fst-compat",[BL]:"fire-vertex","fire-js":"fire-js",[zL]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nc=new Map,qL=new Map,Qp=new Map;function j1(t,e){try{t.container.addComponent(e)}catch(n){ir.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function eo(t){const e=t.name;if(Qp.has(e))return ir.debug(`There were multiple attempts to register component ${e}.`),!1;Qp.set(e,t);for(const n of Nc.values())j1(n,t);for(const n of qL.values())j1(n,t);return!0}function Gg(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function br(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KL={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},$r=new vl("app","Firebase",KL);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GL{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new $i("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw $r.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vo=WL;function UI(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Gp,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw $r.create("bad-app-name",{appName:String(i)});if(n||(n=LI()),!n)throw $r.create("no-options");const s=Nc.get(i);if(s){if(Dc(n,s.options)&&Dc(r,s.config))return s;throw $r.create("duplicate-app",{appName:i})}const o=new eL(i);for(const l of Qp.values())o.addComponent(l);const a=new GL(n,r,o);return Nc.set(i,a),a}function BI(t=Gp){const e=Nc.get(t);if(!e&&t===Gp&&LI())return UI();if(!e)throw $r.create("no-app",{appName:t});return e}function zr(t,e,n){var r;let i=(r=HL[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ir.warn(a.join(" "));return}eo(new $i(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QL="firebase-heartbeat-database",YL=1,Za="firebase-heartbeat-store";let uf=null;function $I(){return uf||(uf=fL(QL,YL,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Za)}catch(n){console.warn(n)}}}}).catch(t=>{throw $r.create("idb-open",{originalErrorMessage:t.message})})),uf}async function XL(t){try{const n=(await $I()).transaction(Za),r=await n.objectStore(Za).get(zI(t));return await n.done,r}catch(e){if(e instanceof cr)ir.warn(e.message);else{const n=$r.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ir.warn(n.message)}}}async function F1(t,e){try{const r=(await $I()).transaction(Za,"readwrite");await r.objectStore(Za).put(e,zI(t)),await r.done}catch(n){if(n instanceof cr)ir.warn(n.message);else{const r=$r.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ir.warn(r.message)}}}function zI(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JL=1024,ZL=30*24*60*60*1e3;class eM{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new nM(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=U1();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=ZL}),this._storage.overwrite(this._heartbeatsCache))}catch(r){ir.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=U1(),{heartbeatsToSend:r,unsentEntries:i}=tM(this._heartbeatsCache.heartbeats),s=Vc(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return ir.warn(n),""}}}function U1(){return new Date().toISOString().substring(0,10)}function tM(t,e=JL){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),B1(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),B1(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class nM{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return $O()?zO().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await XL(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return F1(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return F1(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function B1(t){return Vc(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rM(t){eo(new $i("platform-logger",e=>new gL(e),"PRIVATE")),eo(new $i("heartbeat",e=>new eM(e),"PRIVATE")),zr(Kp,M1,t),zr(Kp,M1,"esm2017"),zr("fire-js","")}rM("");var $1=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ki,WI;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(T,_){function P(){}P.prototype=_.prototype,T.D=_.prototype,T.prototype=new P,T.prototype.constructor=T,T.C=function(C,A,b){for(var k=Array(arguments.length-2),we=2;we<arguments.length;we++)k[we-2]=arguments[we];return _.prototype[A].apply(C,k)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(T,_,P){P||(P=0);var C=Array(16);if(typeof _=="string")for(var A=0;16>A;++A)C[A]=_.charCodeAt(P++)|_.charCodeAt(P++)<<8|_.charCodeAt(P++)<<16|_.charCodeAt(P++)<<24;else for(A=0;16>A;++A)C[A]=_[P++]|_[P++]<<8|_[P++]<<16|_[P++]<<24;_=T.g[0],P=T.g[1],A=T.g[2];var b=T.g[3],k=_+(b^P&(A^b))+C[0]+3614090360&4294967295;_=P+(k<<7&4294967295|k>>>25),k=b+(A^_&(P^A))+C[1]+3905402710&4294967295,b=_+(k<<12&4294967295|k>>>20),k=A+(P^b&(_^P))+C[2]+606105819&4294967295,A=b+(k<<17&4294967295|k>>>15),k=P+(_^A&(b^_))+C[3]+3250441966&4294967295,P=A+(k<<22&4294967295|k>>>10),k=_+(b^P&(A^b))+C[4]+4118548399&4294967295,_=P+(k<<7&4294967295|k>>>25),k=b+(A^_&(P^A))+C[5]+1200080426&4294967295,b=_+(k<<12&4294967295|k>>>20),k=A+(P^b&(_^P))+C[6]+2821735955&4294967295,A=b+(k<<17&4294967295|k>>>15),k=P+(_^A&(b^_))+C[7]+4249261313&4294967295,P=A+(k<<22&4294967295|k>>>10),k=_+(b^P&(A^b))+C[8]+1770035416&4294967295,_=P+(k<<7&4294967295|k>>>25),k=b+(A^_&(P^A))+C[9]+2336552879&4294967295,b=_+(k<<12&4294967295|k>>>20),k=A+(P^b&(_^P))+C[10]+4294925233&4294967295,A=b+(k<<17&4294967295|k>>>15),k=P+(_^A&(b^_))+C[11]+2304563134&4294967295,P=A+(k<<22&4294967295|k>>>10),k=_+(b^P&(A^b))+C[12]+1804603682&4294967295,_=P+(k<<7&4294967295|k>>>25),k=b+(A^_&(P^A))+C[13]+4254626195&4294967295,b=_+(k<<12&4294967295|k>>>20),k=A+(P^b&(_^P))+C[14]+2792965006&4294967295,A=b+(k<<17&4294967295|k>>>15),k=P+(_^A&(b^_))+C[15]+1236535329&4294967295,P=A+(k<<22&4294967295|k>>>10),k=_+(A^b&(P^A))+C[1]+4129170786&4294967295,_=P+(k<<5&4294967295|k>>>27),k=b+(P^A&(_^P))+C[6]+3225465664&4294967295,b=_+(k<<9&4294967295|k>>>23),k=A+(_^P&(b^_))+C[11]+643717713&4294967295,A=b+(k<<14&4294967295|k>>>18),k=P+(b^_&(A^b))+C[0]+3921069994&4294967295,P=A+(k<<20&4294967295|k>>>12),k=_+(A^b&(P^A))+C[5]+3593408605&4294967295,_=P+(k<<5&4294967295|k>>>27),k=b+(P^A&(_^P))+C[10]+38016083&4294967295,b=_+(k<<9&4294967295|k>>>23),k=A+(_^P&(b^_))+C[15]+3634488961&4294967295,A=b+(k<<14&4294967295|k>>>18),k=P+(b^_&(A^b))+C[4]+3889429448&4294967295,P=A+(k<<20&4294967295|k>>>12),k=_+(A^b&(P^A))+C[9]+568446438&4294967295,_=P+(k<<5&4294967295|k>>>27),k=b+(P^A&(_^P))+C[14]+3275163606&4294967295,b=_+(k<<9&4294967295|k>>>23),k=A+(_^P&(b^_))+C[3]+4107603335&4294967295,A=b+(k<<14&4294967295|k>>>18),k=P+(b^_&(A^b))+C[8]+1163531501&4294967295,P=A+(k<<20&4294967295|k>>>12),k=_+(A^b&(P^A))+C[13]+2850285829&4294967295,_=P+(k<<5&4294967295|k>>>27),k=b+(P^A&(_^P))+C[2]+4243563512&4294967295,b=_+(k<<9&4294967295|k>>>23),k=A+(_^P&(b^_))+C[7]+1735328473&4294967295,A=b+(k<<14&4294967295|k>>>18),k=P+(b^_&(A^b))+C[12]+2368359562&4294967295,P=A+(k<<20&4294967295|k>>>12),k=_+(P^A^b)+C[5]+4294588738&4294967295,_=P+(k<<4&4294967295|k>>>28),k=b+(_^P^A)+C[8]+2272392833&4294967295,b=_+(k<<11&4294967295|k>>>21),k=A+(b^_^P)+C[11]+1839030562&4294967295,A=b+(k<<16&4294967295|k>>>16),k=P+(A^b^_)+C[14]+4259657740&4294967295,P=A+(k<<23&4294967295|k>>>9),k=_+(P^A^b)+C[1]+2763975236&4294967295,_=P+(k<<4&4294967295|k>>>28),k=b+(_^P^A)+C[4]+1272893353&4294967295,b=_+(k<<11&4294967295|k>>>21),k=A+(b^_^P)+C[7]+4139469664&4294967295,A=b+(k<<16&4294967295|k>>>16),k=P+(A^b^_)+C[10]+3200236656&4294967295,P=A+(k<<23&4294967295|k>>>9),k=_+(P^A^b)+C[13]+681279174&4294967295,_=P+(k<<4&4294967295|k>>>28),k=b+(_^P^A)+C[0]+3936430074&4294967295,b=_+(k<<11&4294967295|k>>>21),k=A+(b^_^P)+C[3]+3572445317&4294967295,A=b+(k<<16&4294967295|k>>>16),k=P+(A^b^_)+C[6]+76029189&4294967295,P=A+(k<<23&4294967295|k>>>9),k=_+(P^A^b)+C[9]+3654602809&4294967295,_=P+(k<<4&4294967295|k>>>28),k=b+(_^P^A)+C[12]+3873151461&4294967295,b=_+(k<<11&4294967295|k>>>21),k=A+(b^_^P)+C[15]+530742520&4294967295,A=b+(k<<16&4294967295|k>>>16),k=P+(A^b^_)+C[2]+3299628645&4294967295,P=A+(k<<23&4294967295|k>>>9),k=_+(A^(P|~b))+C[0]+4096336452&4294967295,_=P+(k<<6&4294967295|k>>>26),k=b+(P^(_|~A))+C[7]+1126891415&4294967295,b=_+(k<<10&4294967295|k>>>22),k=A+(_^(b|~P))+C[14]+2878612391&4294967295,A=b+(k<<15&4294967295|k>>>17),k=P+(b^(A|~_))+C[5]+4237533241&4294967295,P=A+(k<<21&4294967295|k>>>11),k=_+(A^(P|~b))+C[12]+1700485571&4294967295,_=P+(k<<6&4294967295|k>>>26),k=b+(P^(_|~A))+C[3]+2399980690&4294967295,b=_+(k<<10&4294967295|k>>>22),k=A+(_^(b|~P))+C[10]+4293915773&4294967295,A=b+(k<<15&4294967295|k>>>17),k=P+(b^(A|~_))+C[1]+2240044497&4294967295,P=A+(k<<21&4294967295|k>>>11),k=_+(A^(P|~b))+C[8]+1873313359&4294967295,_=P+(k<<6&4294967295|k>>>26),k=b+(P^(_|~A))+C[15]+4264355552&4294967295,b=_+(k<<10&4294967295|k>>>22),k=A+(_^(b|~P))+C[6]+2734768916&4294967295,A=b+(k<<15&4294967295|k>>>17),k=P+(b^(A|~_))+C[13]+1309151649&4294967295,P=A+(k<<21&4294967295|k>>>11),k=_+(A^(P|~b))+C[4]+4149444226&4294967295,_=P+(k<<6&4294967295|k>>>26),k=b+(P^(_|~A))+C[11]+3174756917&4294967295,b=_+(k<<10&4294967295|k>>>22),k=A+(_^(b|~P))+C[2]+718787259&4294967295,A=b+(k<<15&4294967295|k>>>17),k=P+(b^(A|~_))+C[9]+3951481745&4294967295,T.g[0]=T.g[0]+_&4294967295,T.g[1]=T.g[1]+(A+(k<<21&4294967295|k>>>11))&4294967295,T.g[2]=T.g[2]+A&4294967295,T.g[3]=T.g[3]+b&4294967295}r.prototype.u=function(T,_){_===void 0&&(_=T.length);for(var P=_-this.blockSize,C=this.B,A=this.h,b=0;b<_;){if(A==0)for(;b<=P;)i(this,T,b),b+=this.blockSize;if(typeof T=="string"){for(;b<_;)if(C[A++]=T.charCodeAt(b++),A==this.blockSize){i(this,C),A=0;break}}else for(;b<_;)if(C[A++]=T[b++],A==this.blockSize){i(this,C),A=0;break}}this.h=A,this.o+=_},r.prototype.v=function(){var T=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);T[0]=128;for(var _=1;_<T.length-8;++_)T[_]=0;var P=8*this.o;for(_=T.length-8;_<T.length;++_)T[_]=P&255,P/=256;for(this.u(T),T=Array(16),_=P=0;4>_;++_)for(var C=0;32>C;C+=8)T[P++]=this.g[_]>>>C&255;return T};function s(T,_){var P=a;return Object.prototype.hasOwnProperty.call(P,T)?P[T]:P[T]=_(T)}function o(T,_){this.h=_;for(var P=[],C=!0,A=T.length-1;0<=A;A--){var b=T[A]|0;C&&b==_||(P[A]=b,C=!1)}this.g=P}var a={};function l(T){return-128<=T&&128>T?s(T,function(_){return new o([_|0],0>_?-1:0)}):new o([T|0],0>T?-1:0)}function c(T){if(isNaN(T)||!isFinite(T))return f;if(0>T)return R(c(-T));for(var _=[],P=1,C=0;T>=P;C++)_[C]=T/P|0,P*=4294967296;return new o(_,0)}function h(T,_){if(T.length==0)throw Error("number format error: empty string");if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(T.charAt(0)=="-")return R(h(T.substring(1),_));if(0<=T.indexOf("-"))throw Error('number format error: interior "-" character');for(var P=c(Math.pow(_,8)),C=f,A=0;A<T.length;A+=8){var b=Math.min(8,T.length-A),k=parseInt(T.substring(A,A+b),_);8>b?(b=c(Math.pow(_,b)),C=C.j(b).add(c(k))):(C=C.j(P),C=C.add(c(k)))}return C}var f=l(0),p=l(1),y=l(16777216);t=o.prototype,t.m=function(){if(I(this))return-R(this).m();for(var T=0,_=1,P=0;P<this.g.length;P++){var C=this.i(P);T+=(0<=C?C:4294967296+C)*_,_*=4294967296}return T},t.toString=function(T){if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(S(this))return"0";if(I(this))return"-"+R(this).toString(T);for(var _=c(Math.pow(T,6)),P=this,C="";;){var A=V(P,_).g;P=v(P,A.j(_));var b=((0<P.g.length?P.g[0]:P.h)>>>0).toString(T);if(P=A,S(P))return b+C;for(;6>b.length;)b="0"+b;C=b+C}},t.i=function(T){return 0>T?0:T<this.g.length?this.g[T]:this.h};function S(T){if(T.h!=0)return!1;for(var _=0;_<T.g.length;_++)if(T.g[_]!=0)return!1;return!0}function I(T){return T.h==-1}t.l=function(T){return T=v(this,T),I(T)?-1:S(T)?0:1};function R(T){for(var _=T.g.length,P=[],C=0;C<_;C++)P[C]=~T.g[C];return new o(P,~T.h).add(p)}t.abs=function(){return I(this)?R(this):this},t.add=function(T){for(var _=Math.max(this.g.length,T.g.length),P=[],C=0,A=0;A<=_;A++){var b=C+(this.i(A)&65535)+(T.i(A)&65535),k=(b>>>16)+(this.i(A)>>>16)+(T.i(A)>>>16);C=k>>>16,b&=65535,k&=65535,P[A]=k<<16|b}return new o(P,P[P.length-1]&-2147483648?-1:0)};function v(T,_){return T.add(R(_))}t.j=function(T){if(S(this)||S(T))return f;if(I(this))return I(T)?R(this).j(R(T)):R(R(this).j(T));if(I(T))return R(this.j(R(T)));if(0>this.l(y)&&0>T.l(y))return c(this.m()*T.m());for(var _=this.g.length+T.g.length,P=[],C=0;C<2*_;C++)P[C]=0;for(C=0;C<this.g.length;C++)for(var A=0;A<T.g.length;A++){var b=this.i(C)>>>16,k=this.i(C)&65535,we=T.i(A)>>>16,vn=T.i(A)&65535;P[2*C+2*A]+=k*vn,w(P,2*C+2*A),P[2*C+2*A+1]+=b*vn,w(P,2*C+2*A+1),P[2*C+2*A+1]+=k*we,w(P,2*C+2*A+1),P[2*C+2*A+2]+=b*we,w(P,2*C+2*A+2)}for(C=0;C<_;C++)P[C]=P[2*C+1]<<16|P[2*C];for(C=_;C<2*_;C++)P[C]=0;return new o(P,0)};function w(T,_){for(;(T[_]&65535)!=T[_];)T[_+1]+=T[_]>>>16,T[_]&=65535,_++}function x(T,_){this.g=T,this.h=_}function V(T,_){if(S(_))throw Error("division by zero");if(S(T))return new x(f,f);if(I(T))return _=V(R(T),_),new x(R(_.g),R(_.h));if(I(_))return _=V(T,R(_)),new x(R(_.g),_.h);if(30<T.g.length){if(I(T)||I(_))throw Error("slowDivide_ only works with positive integers.");for(var P=p,C=_;0>=C.l(T);)P=O(P),C=O(C);var A=M(P,1),b=M(C,1);for(C=M(C,2),P=M(P,2);!S(C);){var k=b.add(C);0>=k.l(T)&&(A=A.add(P),b=k),C=M(C,1),P=M(P,1)}return _=v(T,A.j(_)),new x(A,_)}for(A=f;0<=T.l(_);){for(P=Math.max(1,Math.floor(T.m()/_.m())),C=Math.ceil(Math.log(P)/Math.LN2),C=48>=C?1:Math.pow(2,C-48),b=c(P),k=b.j(_);I(k)||0<k.l(T);)P-=C,b=c(P),k=b.j(_);S(b)&&(b=p),A=A.add(b),T=v(T,k)}return new x(A,T)}t.A=function(T){return V(this,T).h},t.and=function(T){for(var _=Math.max(this.g.length,T.g.length),P=[],C=0;C<_;C++)P[C]=this.i(C)&T.i(C);return new o(P,this.h&T.h)},t.or=function(T){for(var _=Math.max(this.g.length,T.g.length),P=[],C=0;C<_;C++)P[C]=this.i(C)|T.i(C);return new o(P,this.h|T.h)},t.xor=function(T){for(var _=Math.max(this.g.length,T.g.length),P=[],C=0;C<_;C++)P[C]=this.i(C)^T.i(C);return new o(P,this.h^T.h)};function O(T){for(var _=T.g.length+1,P=[],C=0;C<_;C++)P[C]=T.i(C)<<1|T.i(C-1)>>>31;return new o(P,T.h)}function M(T,_){var P=_>>5;_%=32;for(var C=T.g.length-P,A=[],b=0;b<C;b++)A[b]=0<_?T.i(b+P)>>>_|T.i(b+P+1)<<32-_:T.i(b+P);return new o(A,T.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,WI=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=h,ki=o}).apply(typeof $1<"u"?$1:typeof self<"u"?self:typeof window<"u"?window:{});var mu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var HI,sa,qI,$u,Yp,KI,GI,QI;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(u,d,m){return u==Array.prototype||u==Object.prototype||(u[d]=m.value),u};function n(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof mu=="object"&&mu];for(var d=0;d<u.length;++d){var m=u[d];if(m&&m.Math==Math)return m}throw Error("Cannot find global object")}var r=n(this);function i(u,d){if(d)e:{var m=r;u=u.split(".");for(var E=0;E<u.length-1;E++){var D=u[E];if(!(D in m))break e;m=m[D]}u=u[u.length-1],E=m[u],d=d(E),d!=E&&d!=null&&e(m,u,{configurable:!0,writable:!0,value:d})}}function s(u,d){u instanceof String&&(u+="");var m=0,E=!1,D={next:function(){if(!E&&m<u.length){var L=m++;return{value:d(L,u[L]),done:!1}}return E=!0,{done:!0,value:void 0}}};return D[Symbol.iterator]=function(){return D},D}i("Array.prototype.values",function(u){return u||function(){return s(this,function(d,m){return m})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function l(u){var d=typeof u;return d=d!="object"?d:u?Array.isArray(u)?"array":d:"null",d=="array"||d=="object"&&typeof u.length=="number"}function c(u){var d=typeof u;return d=="object"&&u!=null||d=="function"}function h(u,d,m){return u.call.apply(u.bind,arguments)}function f(u,d,m){if(!u)throw Error();if(2<arguments.length){var E=Array.prototype.slice.call(arguments,2);return function(){var D=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(D,E),u.apply(d,D)}}return function(){return u.apply(d,arguments)}}function p(u,d,m){return p=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?h:f,p.apply(null,arguments)}function y(u,d){var m=Array.prototype.slice.call(arguments,1);return function(){var E=m.slice();return E.push.apply(E,arguments),u.apply(this,E)}}function S(u,d){function m(){}m.prototype=d.prototype,u.aa=d.prototype,u.prototype=new m,u.prototype.constructor=u,u.Qb=function(E,D,L){for(var z=Array(arguments.length-2),ve=2;ve<arguments.length;ve++)z[ve-2]=arguments[ve];return d.prototype[D].apply(E,z)}}function I(u){const d=u.length;if(0<d){const m=Array(d);for(let E=0;E<d;E++)m[E]=u[E];return m}return[]}function R(u,d){for(let m=1;m<arguments.length;m++){const E=arguments[m];if(l(E)){const D=u.length||0,L=E.length||0;u.length=D+L;for(let z=0;z<L;z++)u[D+z]=E[z]}else u.push(E)}}class v{constructor(d,m){this.i=d,this.j=m,this.h=0,this.g=null}get(){let d;return 0<this.h?(this.h--,d=this.g,this.g=d.next,d.next=null):d=this.i(),d}}function w(u){return/^[\s\xa0]*$/.test(u)}function x(){var u=a.navigator;return u&&(u=u.userAgent)?u:""}function V(u){return V[" "](u),u}V[" "]=function(){};var O=x().indexOf("Gecko")!=-1&&!(x().toLowerCase().indexOf("webkit")!=-1&&x().indexOf("Edge")==-1)&&!(x().indexOf("Trident")!=-1||x().indexOf("MSIE")!=-1)&&x().indexOf("Edge")==-1;function M(u,d,m){for(const E in u)d.call(m,u[E],E,u)}function T(u,d){for(const m in u)d.call(void 0,u[m],m,u)}function _(u){const d={};for(const m in u)d[m]=u[m];return d}const P="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function C(u,d){let m,E;for(let D=1;D<arguments.length;D++){E=arguments[D];for(m in E)u[m]=E[m];for(let L=0;L<P.length;L++)m=P[L],Object.prototype.hasOwnProperty.call(E,m)&&(u[m]=E[m])}}function A(u){var d=1;u=u.split(":");const m=[];for(;0<d&&u.length;)m.push(u.shift()),d--;return u.length&&m.push(u.join(":")),m}function b(u){a.setTimeout(()=>{throw u},0)}function k(){var u=K;let d=null;return u.g&&(d=u.g,u.g=u.g.next,u.g||(u.h=null),d.next=null),d}class we{constructor(){this.h=this.g=null}add(d,m){const E=vn.get();E.set(d,m),this.h?this.h.next=E:this.g=E,this.h=E}}var vn=new v(()=>new hr,u=>u.reset());class hr{constructor(){this.next=this.g=this.h=null}set(d,m){this.h=d,this.g=m,this.next=null}reset(){this.next=this.g=this.h=null}}let de,$=!1,K=new we,Y=()=>{const u=a.Promise.resolve(void 0);de=()=>{u.then(fe)}};var fe=()=>{for(var u;u=k();){try{u.h.call(u.g)}catch(m){b(m)}var d=vn;d.j(u),100>d.h&&(d.h++,u.next=d.g,d.g=u)}$=!1};function ie(){this.s=this.s,this.C=this.C}ie.prototype.s=!1,ie.prototype.ma=function(){this.s||(this.s=!0,this.N())},ie.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Pe(u,d){this.type=u,this.g=this.target=d,this.defaultPrevented=!1}Pe.prototype.h=function(){this.defaultPrevented=!0};var Mt=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var u=!1,d=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const m=()=>{};a.addEventListener("test",m,d),a.removeEventListener("test",m,d)}catch{}return u}();function Rt(u,d){if(Pe.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u){var m=this.type=u.type,E=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;if(this.target=u.target||u.srcElement,this.g=d,d=u.relatedTarget){if(O){e:{try{V(d.nodeName);var D=!0;break e}catch{}D=!1}D||(d=null)}}else m=="mouseover"?d=u.fromElement:m=="mouseout"&&(d=u.toElement);this.relatedTarget=d,E?(this.clientX=E.clientX!==void 0?E.clientX:E.pageX,this.clientY=E.clientY!==void 0?E.clientY:E.pageY,this.screenX=E.screenX||0,this.screenY=E.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=typeof u.pointerType=="string"?u.pointerType:_t[u.pointerType]||"",this.state=u.state,this.i=u,u.defaultPrevented&&Rt.aa.h.call(this)}}S(Rt,Pe);var _t={2:"touch",3:"pen",4:"mouse"};Rt.prototype.h=function(){Rt.aa.h.call(this);var u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var kt="closure_listenable_"+(1e6*Math.random()|0),oi=0;function Nn(u,d,m,E,D){this.listener=u,this.proxy=null,this.src=d,this.type=m,this.capture=!!E,this.ha=D,this.key=++oi,this.da=this.fa=!1}function dr(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function On(u){this.src=u,this.g={},this.h=0}On.prototype.add=function(u,d,m,E,D){var L=u.toString();u=this.g[L],u||(u=this.g[L]=[],this.h++);var z=qh(u,d,E,D);return-1<z?(d=u[z],m||(d.fa=!1)):(d=new Nn(d,this.src,L,!!E,D),d.fa=m,u.push(d)),d};function Gt(u,d){var m=d.type;if(m in u.g){var E=u.g[m],D=Array.prototype.indexOf.call(E,d,void 0),L;(L=0<=D)&&Array.prototype.splice.call(E,D,1),L&&(dr(d),u.g[m].length==0&&(delete u.g[m],u.h--))}}function qh(u,d,m,E){for(var D=0;D<u.length;++D){var L=u[D];if(!L.da&&L.listener==d&&L.capture==!!m&&L.ha==E)return D}return-1}var Kh="closure_lm_"+(1e6*Math.random()|0),Gh={};function $y(u,d,m,E,D){if(Array.isArray(d)){for(var L=0;L<d.length;L++)$y(u,d[L],m,E,D);return null}return m=Hy(m),u&&u[kt]?u.K(d,m,c(E)?!!E.capture:!!E,D):lA(u,d,m,!1,E,D)}function lA(u,d,m,E,D,L){if(!d)throw Error("Invalid event type");var z=c(D)?!!D.capture:!!D,ve=Yh(u);if(ve||(u[Kh]=ve=new On(u)),m=ve.add(d,m,E,z,L),m.proxy)return m;if(E=uA(),m.proxy=E,E.src=u,E.listener=m,u.addEventListener)Mt||(D=z),D===void 0&&(D=!1),u.addEventListener(d.toString(),E,D);else if(u.attachEvent)u.attachEvent(Wy(d.toString()),E);else if(u.addListener&&u.removeListener)u.addListener(E);else throw Error("addEventListener and attachEvent are unavailable.");return m}function uA(){function u(m){return d.call(u.src,u.listener,m)}const d=cA;return u}function zy(u,d,m,E,D){if(Array.isArray(d))for(var L=0;L<d.length;L++)zy(u,d[L],m,E,D);else E=c(E)?!!E.capture:!!E,m=Hy(m),u&&u[kt]?(u=u.i,d=String(d).toString(),d in u.g&&(L=u.g[d],m=qh(L,m,E,D),-1<m&&(dr(L[m]),Array.prototype.splice.call(L,m,1),L.length==0&&(delete u.g[d],u.h--)))):u&&(u=Yh(u))&&(d=u.g[d.toString()],u=-1,d&&(u=qh(d,m,E,D)),(m=-1<u?d[u]:null)&&Qh(m))}function Qh(u){if(typeof u!="number"&&u&&!u.da){var d=u.src;if(d&&d[kt])Gt(d.i,u);else{var m=u.type,E=u.proxy;d.removeEventListener?d.removeEventListener(m,E,u.capture):d.detachEvent?d.detachEvent(Wy(m),E):d.addListener&&d.removeListener&&d.removeListener(E),(m=Yh(d))?(Gt(m,u),m.h==0&&(m.src=null,d[Kh]=null)):dr(u)}}}function Wy(u){return u in Gh?Gh[u]:Gh[u]="on"+u}function cA(u,d){if(u.da)u=!0;else{d=new Rt(d,this);var m=u.listener,E=u.ha||u.src;u.fa&&Qh(u),u=m.call(E,d)}return u}function Yh(u){return u=u[Kh],u instanceof On?u:null}var Xh="__closure_events_fn_"+(1e9*Math.random()>>>0);function Hy(u){return typeof u=="function"?u:(u[Xh]||(u[Xh]=function(d){return u.handleEvent(d)}),u[Xh])}function st(){ie.call(this),this.i=new On(this),this.M=this,this.F=null}S(st,ie),st.prototype[kt]=!0,st.prototype.removeEventListener=function(u,d,m,E){zy(this,u,d,m,E)};function wt(u,d){var m,E=u.F;if(E)for(m=[];E;E=E.F)m.push(E);if(u=u.M,E=d.type||d,typeof d=="string")d=new Pe(d,u);else if(d instanceof Pe)d.target=d.target||u;else{var D=d;d=new Pe(E,u),C(d,D)}if(D=!0,m)for(var L=m.length-1;0<=L;L--){var z=d.g=m[L];D=bl(z,E,!0,d)&&D}if(z=d.g=u,D=bl(z,E,!0,d)&&D,D=bl(z,E,!1,d)&&D,m)for(L=0;L<m.length;L++)z=d.g=m[L],D=bl(z,E,!1,d)&&D}st.prototype.N=function(){if(st.aa.N.call(this),this.i){var u=this.i,d;for(d in u.g){for(var m=u.g[d],E=0;E<m.length;E++)dr(m[E]);delete u.g[d],u.h--}}this.F=null},st.prototype.K=function(u,d,m,E){return this.i.add(String(u),d,!1,m,E)},st.prototype.L=function(u,d,m,E){return this.i.add(String(u),d,!0,m,E)};function bl(u,d,m,E){if(d=u.i.g[String(d)],!d)return!0;d=d.concat();for(var D=!0,L=0;L<d.length;++L){var z=d[L];if(z&&!z.da&&z.capture==m){var ve=z.listener,Ye=z.ha||z.src;z.fa&&Gt(u.i,z),D=ve.call(Ye,E)!==!1&&D}}return D&&!E.defaultPrevented}function qy(u,d,m){if(typeof u=="function")m&&(u=p(u,m));else if(u&&typeof u.handleEvent=="function")u=p(u.handleEvent,u);else throw Error("Invalid listener argument");return 2147483647<Number(d)?-1:a.setTimeout(u,d||0)}function Ky(u){u.g=qy(()=>{u.g=null,u.i&&(u.i=!1,Ky(u))},u.l);const d=u.h;u.h=null,u.m.apply(null,d)}class hA extends ie{constructor(d,m){super(),this.m=d,this.l=m,this.h=null,this.i=!1,this.g=null}j(d){this.h=arguments,this.g?this.i=!0:Ky(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Io(u){ie.call(this),this.h=u,this.g={}}S(Io,ie);var Gy=[];function Qy(u){M(u.g,function(d,m){this.g.hasOwnProperty(m)&&Qh(d)},u),u.g={}}Io.prototype.N=function(){Io.aa.N.call(this),Qy(this)},Io.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Jh=a.JSON.stringify,dA=a.JSON.parse,fA=class{stringify(u){return a.JSON.stringify(u,void 0)}parse(u){return a.JSON.parse(u,void 0)}};function Zh(){}Zh.prototype.h=null;function Yy(u){return u.h||(u.h=u.i())}function Xy(){}var Po={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ed(){Pe.call(this,"d")}S(ed,Pe);function td(){Pe.call(this,"c")}S(td,Pe);var ai={},Jy=null;function Vl(){return Jy=Jy||new st}ai.La="serverreachability";function Zy(u){Pe.call(this,ai.La,u)}S(Zy,Pe);function Co(u){const d=Vl();wt(d,new Zy(d))}ai.STAT_EVENT="statevent";function e0(u,d){Pe.call(this,ai.STAT_EVENT,u),this.stat=d}S(e0,Pe);function Et(u){const d=Vl();wt(d,new e0(d,u))}ai.Ma="timingevent";function t0(u,d){Pe.call(this,ai.Ma,u),this.size=d}S(t0,Pe);function Ao(u,d){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){u()},d)}function Ro(){this.g=!0}Ro.prototype.xa=function(){this.g=!1};function pA(u,d,m,E,D,L){u.info(function(){if(u.g)if(L)for(var z="",ve=L.split("&"),Ye=0;Ye<ve.length;Ye++){var ue=ve[Ye].split("=");if(1<ue.length){var ot=ue[0];ue=ue[1];var at=ot.split("_");z=2<=at.length&&at[1]=="type"?z+(ot+"="+ue+"&"):z+(ot+"=redacted&")}}else z=null;else z=L;return"XMLHTTP REQ ("+E+") [attempt "+D+"]: "+d+`
`+m+`
`+z})}function mA(u,d,m,E,D,L,z){u.info(function(){return"XMLHTTP RESP ("+E+") [ attempt "+D+"]: "+d+`
`+m+`
`+L+" "+z})}function Zi(u,d,m,E){u.info(function(){return"XMLHTTP TEXT ("+d+"): "+yA(u,m)+(E?" "+E:"")})}function gA(u,d){u.info(function(){return"TIMEOUT: "+d})}Ro.prototype.info=function(){};function yA(u,d){if(!u.g)return d;if(!d)return null;try{var m=JSON.parse(d);if(m){for(u=0;u<m.length;u++)if(Array.isArray(m[u])){var E=m[u];if(!(2>E.length)){var D=E[1];if(Array.isArray(D)&&!(1>D.length)){var L=D[0];if(L!="noop"&&L!="stop"&&L!="close")for(var z=1;z<D.length;z++)D[z]=""}}}}return Jh(m)}catch{return d}}var Dl={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},n0={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},nd;function Nl(){}S(Nl,Zh),Nl.prototype.g=function(){return new XMLHttpRequest},Nl.prototype.i=function(){return{}},nd=new Nl;function fr(u,d,m,E){this.j=u,this.i=d,this.l=m,this.R=E||1,this.U=new Io(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new r0}function r0(){this.i=null,this.g="",this.h=!1}var i0={},rd={};function id(u,d,m){u.L=1,u.v=jl(Ln(d)),u.m=m,u.P=!0,s0(u,null)}function s0(u,d){u.F=Date.now(),Ol(u),u.A=Ln(u.v);var m=u.A,E=u.R;Array.isArray(E)||(E=[String(E)]),_0(m.i,"t",E),u.C=0,m=u.j.J,u.h=new r0,u.g=M0(u.j,m?d:null,!u.m),0<u.O&&(u.M=new hA(p(u.Y,u,u.g),u.O)),d=u.U,m=u.g,E=u.ca;var D="readystatechange";Array.isArray(D)||(D&&(Gy[0]=D.toString()),D=Gy);for(var L=0;L<D.length;L++){var z=$y(m,D[L],E||d.handleEvent,!1,d.h||d);if(!z)break;d.g[z.key]=z}d=u.H?_(u.H):{},u.m?(u.u||(u.u="POST"),d["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.A,u.u,u.m,d)):(u.u="GET",u.g.ea(u.A,u.u,null,d)),Co(),pA(u.i,u.u,u.A,u.l,u.R,u.m)}fr.prototype.ca=function(u){u=u.target;const d=this.M;d&&Mn(u)==3?d.j():this.Y(u)},fr.prototype.Y=function(u){try{if(u==this.g)e:{const at=Mn(this.g);var d=this.g.Ba();const ns=this.g.Z();if(!(3>at)&&(at!=3||this.g&&(this.h.h||this.g.oa()||P0(this.g)))){this.J||at!=4||d==7||(d==8||0>=ns?Co(3):Co(2)),sd(this);var m=this.g.Z();this.X=m;t:if(o0(this)){var E=P0(this.g);u="";var D=E.length,L=Mn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){li(this),ko(this);var z="";break t}this.h.i=new a.TextDecoder}for(d=0;d<D;d++)this.h.h=!0,u+=this.h.i.decode(E[d],{stream:!(L&&d==D-1)});E.length=0,this.h.g+=u,this.C=0,z=this.h.g}else z=this.g.oa();if(this.o=m==200,mA(this.i,this.u,this.A,this.l,this.R,at,m),this.o){if(this.T&&!this.K){t:{if(this.g){var ve,Ye=this.g;if((ve=Ye.g?Ye.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!w(ve)){var ue=ve;break t}}ue=null}if(m=ue)Zi(this.i,this.l,m,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,od(this,m);else{this.o=!1,this.s=3,Et(12),li(this),ko(this);break e}}if(this.P){m=!0;let an;for(;!this.J&&this.C<z.length;)if(an=vA(this,z),an==rd){at==4&&(this.s=4,Et(14),m=!1),Zi(this.i,this.l,null,"[Incomplete Response]");break}else if(an==i0){this.s=4,Et(15),Zi(this.i,this.l,z,"[Invalid Chunk]"),m=!1;break}else Zi(this.i,this.l,an,null),od(this,an);if(o0(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),at!=4||z.length!=0||this.h.h||(this.s=1,Et(16),m=!1),this.o=this.o&&m,!m)Zi(this.i,this.l,z,"[Invalid Chunked Response]"),li(this),ko(this);else if(0<z.length&&!this.W){this.W=!0;var ot=this.j;ot.g==this&&ot.ba&&!ot.M&&(ot.j.info("Great, no buffering proxy detected. Bytes received: "+z.length),dd(ot),ot.M=!0,Et(11))}}else Zi(this.i,this.l,z,null),od(this,z);at==4&&li(this),this.o&&!this.J&&(at==4?D0(this.j,this):(this.o=!1,Ol(this)))}else OA(this.g),m==400&&0<z.indexOf("Unknown SID")?(this.s=3,Et(12)):(this.s=0,Et(13)),li(this),ko(this)}}}catch{}finally{}};function o0(u){return u.g?u.u=="GET"&&u.L!=2&&u.j.Ca:!1}function vA(u,d){var m=u.C,E=d.indexOf(`
`,m);return E==-1?rd:(m=Number(d.substring(m,E)),isNaN(m)?i0:(E+=1,E+m>d.length?rd:(d=d.slice(E,E+m),u.C=E+m,d)))}fr.prototype.cancel=function(){this.J=!0,li(this)};function Ol(u){u.S=Date.now()+u.I,a0(u,u.I)}function a0(u,d){if(u.B!=null)throw Error("WatchDog timer not null");u.B=Ao(p(u.ba,u),d)}function sd(u){u.B&&(a.clearTimeout(u.B),u.B=null)}fr.prototype.ba=function(){this.B=null;const u=Date.now();0<=u-this.S?(gA(this.i,this.A),this.L!=2&&(Co(),Et(17)),li(this),this.s=2,ko(this)):a0(this,this.S-u)};function ko(u){u.j.G==0||u.J||D0(u.j,u)}function li(u){sd(u);var d=u.M;d&&typeof d.ma=="function"&&d.ma(),u.M=null,Qy(u.U),u.g&&(d=u.g,u.g=null,d.abort(),d.ma())}function od(u,d){try{var m=u.j;if(m.G!=0&&(m.g==u||ad(m.h,u))){if(!u.K&&ad(m.h,u)&&m.G==3){try{var E=m.Da.g.parse(d)}catch{E=null}if(Array.isArray(E)&&E.length==3){var D=E;if(D[0]==0){e:if(!m.u){if(m.g)if(m.g.F+3e3<u.F)Wl(m),$l(m);else break e;hd(m),Et(18)}}else m.za=D[1],0<m.za-m.T&&37500>D[2]&&m.F&&m.v==0&&!m.C&&(m.C=Ao(p(m.Za,m),6e3));if(1>=c0(m.h)&&m.ca){try{m.ca()}catch{}m.ca=void 0}}else ci(m,11)}else if((u.K||m.g==u)&&Wl(m),!w(d))for(D=m.Da.g.parse(d),d=0;d<D.length;d++){let ue=D[d];if(m.T=ue[0],ue=ue[1],m.G==2)if(ue[0]=="c"){m.K=ue[1],m.ia=ue[2];const ot=ue[3];ot!=null&&(m.la=ot,m.j.info("VER="+m.la));const at=ue[4];at!=null&&(m.Aa=at,m.j.info("SVER="+m.Aa));const ns=ue[5];ns!=null&&typeof ns=="number"&&0<ns&&(E=1.5*ns,m.L=E,m.j.info("backChannelRequestTimeoutMs_="+E)),E=m;const an=u.g;if(an){const ql=an.g?an.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ql){var L=E.h;L.g||ql.indexOf("spdy")==-1&&ql.indexOf("quic")==-1&&ql.indexOf("h2")==-1||(L.j=L.l,L.g=new Set,L.h&&(ld(L,L.h),L.h=null))}if(E.D){const fd=an.g?an.g.getResponseHeader("X-HTTP-Session-Id"):null;fd&&(E.ya=fd,Ee(E.I,E.D,fd))}}m.G=3,m.l&&m.l.ua(),m.ba&&(m.R=Date.now()-u.F,m.j.info("Handshake RTT: "+m.R+"ms")),E=m;var z=u;if(E.qa=L0(E,E.J?E.ia:null,E.W),z.K){h0(E.h,z);var ve=z,Ye=E.L;Ye&&(ve.I=Ye),ve.B&&(sd(ve),Ol(ve)),E.g=z}else b0(E);0<m.i.length&&zl(m)}else ue[0]!="stop"&&ue[0]!="close"||ci(m,7);else m.G==3&&(ue[0]=="stop"||ue[0]=="close"?ue[0]=="stop"?ci(m,7):cd(m):ue[0]!="noop"&&m.l&&m.l.ta(ue),m.v=0)}}Co(4)}catch{}}var _A=class{constructor(u,d){this.g=u,this.map=d}};function l0(u){this.l=u||10,a.PerformanceNavigationTiming?(u=a.performance.getEntriesByType("navigation"),u=0<u.length&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function u0(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function c0(u){return u.h?1:u.g?u.g.size:0}function ad(u,d){return u.h?u.h==d:u.g?u.g.has(d):!1}function ld(u,d){u.g?u.g.add(d):u.h=d}function h0(u,d){u.h&&u.h==d?u.h=null:u.g&&u.g.has(d)&&u.g.delete(d)}l0.prototype.cancel=function(){if(this.i=d0(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function d0(u){if(u.h!=null)return u.i.concat(u.h.D);if(u.g!=null&&u.g.size!==0){let d=u.i;for(const m of u.g.values())d=d.concat(m.D);return d}return I(u.i)}function wA(u){if(u.V&&typeof u.V=="function")return u.V();if(typeof Map<"u"&&u instanceof Map||typeof Set<"u"&&u instanceof Set)return Array.from(u.values());if(typeof u=="string")return u.split("");if(l(u)){for(var d=[],m=u.length,E=0;E<m;E++)d.push(u[E]);return d}d=[],m=0;for(E in u)d[m++]=u[E];return d}function EA(u){if(u.na&&typeof u.na=="function")return u.na();if(!u.V||typeof u.V!="function"){if(typeof Map<"u"&&u instanceof Map)return Array.from(u.keys());if(!(typeof Set<"u"&&u instanceof Set)){if(l(u)||typeof u=="string"){var d=[];u=u.length;for(var m=0;m<u;m++)d.push(m);return d}d=[],m=0;for(const E in u)d[m++]=E;return d}}}function f0(u,d){if(u.forEach&&typeof u.forEach=="function")u.forEach(d,void 0);else if(l(u)||typeof u=="string")Array.prototype.forEach.call(u,d,void 0);else for(var m=EA(u),E=wA(u),D=E.length,L=0;L<D;L++)d.call(void 0,E[L],m&&m[L],u)}var p0=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function TA(u,d){if(u){u=u.split("&");for(var m=0;m<u.length;m++){var E=u[m].indexOf("="),D=null;if(0<=E){var L=u[m].substring(0,E);D=u[m].substring(E+1)}else L=u[m];d(L,D?decodeURIComponent(D.replace(/\+/g," ")):"")}}}function ui(u){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,u instanceof ui){this.h=u.h,Ll(this,u.j),this.o=u.o,this.g=u.g,Ml(this,u.s),this.l=u.l;var d=u.i,m=new Do;m.i=d.i,d.g&&(m.g=new Map(d.g),m.h=d.h),m0(this,m),this.m=u.m}else u&&(d=String(u).match(p0))?(this.h=!1,Ll(this,d[1]||"",!0),this.o=bo(d[2]||""),this.g=bo(d[3]||"",!0),Ml(this,d[4]),this.l=bo(d[5]||"",!0),m0(this,d[6]||"",!0),this.m=bo(d[7]||"")):(this.h=!1,this.i=new Do(null,this.h))}ui.prototype.toString=function(){var u=[],d=this.j;d&&u.push(Vo(d,g0,!0),":");var m=this.g;return(m||d=="file")&&(u.push("//"),(d=this.o)&&u.push(Vo(d,g0,!0),"@"),u.push(encodeURIComponent(String(m)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),m=this.s,m!=null&&u.push(":",String(m))),(m=this.l)&&(this.g&&m.charAt(0)!="/"&&u.push("/"),u.push(Vo(m,m.charAt(0)=="/"?IA:SA,!0))),(m=this.i.toString())&&u.push("?",m),(m=this.m)&&u.push("#",Vo(m,CA)),u.join("")};function Ln(u){return new ui(u)}function Ll(u,d,m){u.j=m?bo(d,!0):d,u.j&&(u.j=u.j.replace(/:$/,""))}function Ml(u,d){if(d){if(d=Number(d),isNaN(d)||0>d)throw Error("Bad port number "+d);u.s=d}else u.s=null}function m0(u,d,m){d instanceof Do?(u.i=d,AA(u.i,u.h)):(m||(d=Vo(d,PA)),u.i=new Do(d,u.h))}function Ee(u,d,m){u.i.set(d,m)}function jl(u){return Ee(u,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),u}function bo(u,d){return u?d?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function Vo(u,d,m){return typeof u=="string"?(u=encodeURI(u).replace(d,xA),m&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function xA(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var g0=/[#\/\?@]/g,SA=/[#\?:]/g,IA=/[#\?]/g,PA=/[#\?@]/g,CA=/#/g;function Do(u,d){this.h=this.g=null,this.i=u||null,this.j=!!d}function pr(u){u.g||(u.g=new Map,u.h=0,u.i&&TA(u.i,function(d,m){u.add(decodeURIComponent(d.replace(/\+/g," ")),m)}))}t=Do.prototype,t.add=function(u,d){pr(this),this.i=null,u=es(this,u);var m=this.g.get(u);return m||this.g.set(u,m=[]),m.push(d),this.h+=1,this};function y0(u,d){pr(u),d=es(u,d),u.g.has(d)&&(u.i=null,u.h-=u.g.get(d).length,u.g.delete(d))}function v0(u,d){return pr(u),d=es(u,d),u.g.has(d)}t.forEach=function(u,d){pr(this),this.g.forEach(function(m,E){m.forEach(function(D){u.call(d,D,E,this)},this)},this)},t.na=function(){pr(this);const u=Array.from(this.g.values()),d=Array.from(this.g.keys()),m=[];for(let E=0;E<d.length;E++){const D=u[E];for(let L=0;L<D.length;L++)m.push(d[E])}return m},t.V=function(u){pr(this);let d=[];if(typeof u=="string")v0(this,u)&&(d=d.concat(this.g.get(es(this,u))));else{u=Array.from(this.g.values());for(let m=0;m<u.length;m++)d=d.concat(u[m])}return d},t.set=function(u,d){return pr(this),this.i=null,u=es(this,u),v0(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[d]),this.h+=1,this},t.get=function(u,d){return u?(u=this.V(u),0<u.length?String(u[0]):d):d};function _0(u,d,m){y0(u,d),0<m.length&&(u.i=null,u.g.set(es(u,d),I(m)),u.h+=m.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],d=Array.from(this.g.keys());for(var m=0;m<d.length;m++){var E=d[m];const L=encodeURIComponent(String(E)),z=this.V(E);for(E=0;E<z.length;E++){var D=L;z[E]!==""&&(D+="="+encodeURIComponent(String(z[E]))),u.push(D)}}return this.i=u.join("&")};function es(u,d){return d=String(d),u.j&&(d=d.toLowerCase()),d}function AA(u,d){d&&!u.j&&(pr(u),u.i=null,u.g.forEach(function(m,E){var D=E.toLowerCase();E!=D&&(y0(this,E),_0(this,D,m))},u)),u.j=d}function RA(u,d){const m=new Ro;if(a.Image){const E=new Image;E.onload=y(mr,m,"TestLoadImage: loaded",!0,d,E),E.onerror=y(mr,m,"TestLoadImage: error",!1,d,E),E.onabort=y(mr,m,"TestLoadImage: abort",!1,d,E),E.ontimeout=y(mr,m,"TestLoadImage: timeout",!1,d,E),a.setTimeout(function(){E.ontimeout&&E.ontimeout()},1e4),E.src=u}else d(!1)}function kA(u,d){const m=new Ro,E=new AbortController,D=setTimeout(()=>{E.abort(),mr(m,"TestPingServer: timeout",!1,d)},1e4);fetch(u,{signal:E.signal}).then(L=>{clearTimeout(D),L.ok?mr(m,"TestPingServer: ok",!0,d):mr(m,"TestPingServer: server error",!1,d)}).catch(()=>{clearTimeout(D),mr(m,"TestPingServer: error",!1,d)})}function mr(u,d,m,E,D){try{D&&(D.onload=null,D.onerror=null,D.onabort=null,D.ontimeout=null),E(m)}catch{}}function bA(){this.g=new fA}function VA(u,d,m){const E=m||"";try{f0(u,function(D,L){let z=D;c(D)&&(z=Jh(D)),d.push(E+L+"="+encodeURIComponent(z))})}catch(D){throw d.push(E+"type="+encodeURIComponent("_badmap")),D}}function Fl(u){this.l=u.Ub||null,this.j=u.eb||!1}S(Fl,Zh),Fl.prototype.g=function(){return new Ul(this.l,this.j)},Fl.prototype.i=function(u){return function(){return u}}({});function Ul(u,d){st.call(this),this.D=u,this.o=d,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}S(Ul,st),t=Ul.prototype,t.open=function(u,d){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=u,this.A=d,this.readyState=1,Oo(this)},t.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const d={headers:this.u,method:this.B,credentials:this.m,cache:void 0};u&&(d.body=u),(this.D||a).fetch(new Request(this.A,d)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,No(this)),this.readyState=0},t.Sa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,Oo(this)),this.g&&(this.readyState=3,Oo(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;w0(this)}else u.text().then(this.Ra.bind(this),this.ga.bind(this))};function w0(u){u.j.read().then(u.Pa.bind(u)).catch(u.ga.bind(u))}t.Pa=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var d=u.value?u.value:new Uint8Array(0);(d=this.v.decode(d,{stream:!u.done}))&&(this.response=this.responseText+=d)}u.done?No(this):Oo(this),this.readyState==3&&w0(this)}},t.Ra=function(u){this.g&&(this.response=this.responseText=u,No(this))},t.Qa=function(u){this.g&&(this.response=u,No(this))},t.ga=function(){this.g&&No(this)};function No(u){u.readyState=4,u.l=null,u.j=null,u.v=null,Oo(u)}t.setRequestHeader=function(u,d){this.u.append(u,d)},t.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],d=this.h.entries();for(var m=d.next();!m.done;)m=m.value,u.push(m[0]+": "+m[1]),m=d.next();return u.join(`\r
`)};function Oo(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(Ul.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function E0(u){let d="";return M(u,function(m,E){d+=E,d+=":",d+=m,d+=`\r
`}),d}function ud(u,d,m){e:{for(E in m){var E=!1;break e}E=!0}E||(m=E0(m),typeof u=="string"?m!=null&&encodeURIComponent(String(m)):Ee(u,d,m))}function De(u){st.call(this),this.headers=new Map,this.o=u||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}S(De,st);var DA=/^https?$/i,NA=["POST","PUT"];t=De.prototype,t.Ha=function(u){this.J=u},t.ea=function(u,d,m,E){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);d=d?d.toUpperCase():"GET",this.D=u,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():nd.g(),this.v=this.o?Yy(this.o):Yy(nd),this.g.onreadystatechange=p(this.Ea,this);try{this.B=!0,this.g.open(d,String(u),!0),this.B=!1}catch(L){T0(this,L);return}if(u=m||"",m=new Map(this.headers),E)if(Object.getPrototypeOf(E)===Object.prototype)for(var D in E)m.set(D,E[D]);else if(typeof E.keys=="function"&&typeof E.get=="function")for(const L of E.keys())m.set(L,E.get(L));else throw Error("Unknown input type for opt_headers: "+String(E));E=Array.from(m.keys()).find(L=>L.toLowerCase()=="content-type"),D=a.FormData&&u instanceof a.FormData,!(0<=Array.prototype.indexOf.call(NA,d,void 0))||E||D||m.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[L,z]of m)this.g.setRequestHeader(L,z);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{I0(this),this.u=!0,this.g.send(u),this.u=!1}catch(L){T0(this,L)}};function T0(u,d){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=d,u.m=5,x0(u),Bl(u)}function x0(u){u.A||(u.A=!0,wt(u,"complete"),wt(u,"error"))}t.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=u||7,wt(this,"complete"),wt(this,"abort"),Bl(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Bl(this,!0)),De.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?S0(this):this.bb())},t.bb=function(){S0(this)};function S0(u){if(u.h&&typeof o<"u"&&(!u.v[1]||Mn(u)!=4||u.Z()!=2)){if(u.u&&Mn(u)==4)qy(u.Ea,0,u);else if(wt(u,"readystatechange"),Mn(u)==4){u.h=!1;try{const z=u.Z();e:switch(z){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var d=!0;break e;default:d=!1}var m;if(!(m=d)){var E;if(E=z===0){var D=String(u.D).match(p0)[1]||null;!D&&a.self&&a.self.location&&(D=a.self.location.protocol.slice(0,-1)),E=!DA.test(D?D.toLowerCase():"")}m=E}if(m)wt(u,"complete"),wt(u,"success");else{u.m=6;try{var L=2<Mn(u)?u.g.statusText:""}catch{L=""}u.l=L+" ["+u.Z()+"]",x0(u)}}finally{Bl(u)}}}}function Bl(u,d){if(u.g){I0(u);const m=u.g,E=u.v[0]?()=>{}:null;u.g=null,u.v=null,d||wt(u,"ready");try{m.onreadystatechange=E}catch{}}}function I0(u){u.I&&(a.clearTimeout(u.I),u.I=null)}t.isActive=function(){return!!this.g};function Mn(u){return u.g?u.g.readyState:0}t.Z=function(){try{return 2<Mn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(u){if(this.g){var d=this.g.responseText;return u&&d.indexOf(u)==0&&(d=d.substring(u.length)),dA(d)}};function P0(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.H){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function OA(u){const d={};u=(u.g&&2<=Mn(u)&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let E=0;E<u.length;E++){if(w(u[E]))continue;var m=A(u[E]);const D=m[0];if(m=m[1],typeof m!="string")continue;m=m.trim();const L=d[D]||[];d[D]=L,L.push(m)}T(d,function(E){return E.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Lo(u,d,m){return m&&m.internalChannelParams&&m.internalChannelParams[u]||d}function C0(u){this.Aa=0,this.i=[],this.j=new Ro,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Lo("failFast",!1,u),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Lo("baseRetryDelayMs",5e3,u),this.cb=Lo("retryDelaySeedMs",1e4,u),this.Wa=Lo("forwardChannelMaxRetries",2,u),this.wa=Lo("forwardChannelRequestTimeoutMs",2e4,u),this.pa=u&&u.xmlHttpFactory||void 0,this.Xa=u&&u.Tb||void 0,this.Ca=u&&u.useFetchStreams||!1,this.L=void 0,this.J=u&&u.supportsCrossDomainXhr||!1,this.K="",this.h=new l0(u&&u.concurrentRequestLimit),this.Da=new bA,this.P=u&&u.fastHandshake||!1,this.O=u&&u.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=u&&u.Rb||!1,u&&u.xa&&this.j.xa(),u&&u.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&u&&u.detectBufferingProxy||!1,this.ja=void 0,u&&u.longPollingTimeout&&0<u.longPollingTimeout&&(this.ja=u.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=C0.prototype,t.la=8,t.G=1,t.connect=function(u,d,m,E){Et(0),this.W=u,this.H=d||{},m&&E!==void 0&&(this.H.OSID=m,this.H.OAID=E),this.F=this.X,this.I=L0(this,null,this.W),zl(this)};function cd(u){if(A0(u),u.G==3){var d=u.U++,m=Ln(u.I);if(Ee(m,"SID",u.K),Ee(m,"RID",d),Ee(m,"TYPE","terminate"),Mo(u,m),d=new fr(u,u.j,d),d.L=2,d.v=jl(Ln(m)),m=!1,a.navigator&&a.navigator.sendBeacon)try{m=a.navigator.sendBeacon(d.v.toString(),"")}catch{}!m&&a.Image&&(new Image().src=d.v,m=!0),m||(d.g=M0(d.j,null),d.g.ea(d.v)),d.F=Date.now(),Ol(d)}O0(u)}function $l(u){u.g&&(dd(u),u.g.cancel(),u.g=null)}function A0(u){$l(u),u.u&&(a.clearTimeout(u.u),u.u=null),Wl(u),u.h.cancel(),u.s&&(typeof u.s=="number"&&a.clearTimeout(u.s),u.s=null)}function zl(u){if(!u0(u.h)&&!u.s){u.s=!0;var d=u.Ga;de||Y(),$||(de(),$=!0),K.add(d,u),u.B=0}}function LA(u,d){return c0(u.h)>=u.h.j-(u.s?1:0)?!1:u.s?(u.i=d.D.concat(u.i),!0):u.G==1||u.G==2||u.B>=(u.Va?0:u.Wa)?!1:(u.s=Ao(p(u.Ga,u,d),N0(u,u.B)),u.B++,!0)}t.Ga=function(u){if(this.s)if(this.s=null,this.G==1){if(!u){this.U=Math.floor(1e5*Math.random()),u=this.U++;const D=new fr(this,this.j,u);let L=this.o;if(this.S&&(L?(L=_(L),C(L,this.S)):L=this.S),this.m!==null||this.O||(D.H=L,L=null),this.P)e:{for(var d=0,m=0;m<this.i.length;m++){t:{var E=this.i[m];if("__data__"in E.map&&(E=E.map.__data__,typeof E=="string")){E=E.length;break t}E=void 0}if(E===void 0)break;if(d+=E,4096<d){d=m;break e}if(d===4096||m===this.i.length-1){d=m+1;break e}}d=1e3}else d=1e3;d=k0(this,D,d),m=Ln(this.I),Ee(m,"RID",u),Ee(m,"CVER",22),this.D&&Ee(m,"X-HTTP-Session-Id",this.D),Mo(this,m),L&&(this.O?d="headers="+encodeURIComponent(String(E0(L)))+"&"+d:this.m&&ud(m,this.m,L)),ld(this.h,D),this.Ua&&Ee(m,"TYPE","init"),this.P?(Ee(m,"$req",d),Ee(m,"SID","null"),D.T=!0,id(D,m,null)):id(D,m,d),this.G=2}}else this.G==3&&(u?R0(this,u):this.i.length==0||u0(this.h)||R0(this))};function R0(u,d){var m;d?m=d.l:m=u.U++;const E=Ln(u.I);Ee(E,"SID",u.K),Ee(E,"RID",m),Ee(E,"AID",u.T),Mo(u,E),u.m&&u.o&&ud(E,u.m,u.o),m=new fr(u,u.j,m,u.B+1),u.m===null&&(m.H=u.o),d&&(u.i=d.D.concat(u.i)),d=k0(u,m,1e3),m.I=Math.round(.5*u.wa)+Math.round(.5*u.wa*Math.random()),ld(u.h,m),id(m,E,d)}function Mo(u,d){u.H&&M(u.H,function(m,E){Ee(d,E,m)}),u.l&&f0({},function(m,E){Ee(d,E,m)})}function k0(u,d,m){m=Math.min(u.i.length,m);var E=u.l?p(u.l.Na,u.l,u):null;e:{var D=u.i;let L=-1;for(;;){const z=["count="+m];L==-1?0<m?(L=D[0].g,z.push("ofs="+L)):L=0:z.push("ofs="+L);let ve=!0;for(let Ye=0;Ye<m;Ye++){let ue=D[Ye].g;const ot=D[Ye].map;if(ue-=L,0>ue)L=Math.max(0,D[Ye].g-100),ve=!1;else try{VA(ot,z,"req"+ue+"_")}catch{E&&E(ot)}}if(ve){E=z.join("&");break e}}}return u=u.i.splice(0,m),d.D=u,E}function b0(u){if(!u.g&&!u.u){u.Y=1;var d=u.Fa;de||Y(),$||(de(),$=!0),K.add(d,u),u.v=0}}function hd(u){return u.g||u.u||3<=u.v?!1:(u.Y++,u.u=Ao(p(u.Fa,u),N0(u,u.v)),u.v++,!0)}t.Fa=function(){if(this.u=null,V0(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var u=2*this.R;this.j.info("BP detection timer enabled: "+u),this.A=Ao(p(this.ab,this),u)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Et(10),$l(this),V0(this))};function dd(u){u.A!=null&&(a.clearTimeout(u.A),u.A=null)}function V0(u){u.g=new fr(u,u.j,"rpc",u.Y),u.m===null&&(u.g.H=u.o),u.g.O=0;var d=Ln(u.qa);Ee(d,"RID","rpc"),Ee(d,"SID",u.K),Ee(d,"AID",u.T),Ee(d,"CI",u.F?"0":"1"),!u.F&&u.ja&&Ee(d,"TO",u.ja),Ee(d,"TYPE","xmlhttp"),Mo(u,d),u.m&&u.o&&ud(d,u.m,u.o),u.L&&(u.g.I=u.L);var m=u.g;u=u.ia,m.L=1,m.v=jl(Ln(d)),m.m=null,m.P=!0,s0(m,u)}t.Za=function(){this.C!=null&&(this.C=null,$l(this),hd(this),Et(19))};function Wl(u){u.C!=null&&(a.clearTimeout(u.C),u.C=null)}function D0(u,d){var m=null;if(u.g==d){Wl(u),dd(u),u.g=null;var E=2}else if(ad(u.h,d))m=d.D,h0(u.h,d),E=1;else return;if(u.G!=0){if(d.o)if(E==1){m=d.m?d.m.length:0,d=Date.now()-d.F;var D=u.B;E=Vl(),wt(E,new t0(E,m)),zl(u)}else b0(u);else if(D=d.s,D==3||D==0&&0<d.X||!(E==1&&LA(u,d)||E==2&&hd(u)))switch(m&&0<m.length&&(d=u.h,d.i=d.i.concat(m)),D){case 1:ci(u,5);break;case 4:ci(u,10);break;case 3:ci(u,6);break;default:ci(u,2)}}}function N0(u,d){let m=u.Ta+Math.floor(Math.random()*u.cb);return u.isActive()||(m*=2),m*d}function ci(u,d){if(u.j.info("Error code "+d),d==2){var m=p(u.fb,u),E=u.Xa;const D=!E;E=new ui(E||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Ll(E,"https"),jl(E),D?RA(E.toString(),m):kA(E.toString(),m)}else Et(2);u.G=0,u.l&&u.l.sa(d),O0(u),A0(u)}t.fb=function(u){u?(this.j.info("Successfully pinged google.com"),Et(2)):(this.j.info("Failed to ping google.com"),Et(1))};function O0(u){if(u.G=0,u.ka=[],u.l){const d=d0(u.h);(d.length!=0||u.i.length!=0)&&(R(u.ka,d),R(u.ka,u.i),u.h.i.length=0,I(u.i),u.i.length=0),u.l.ra()}}function L0(u,d,m){var E=m instanceof ui?Ln(m):new ui(m);if(E.g!="")d&&(E.g=d+"."+E.g),Ml(E,E.s);else{var D=a.location;E=D.protocol,d=d?d+"."+D.hostname:D.hostname,D=+D.port;var L=new ui(null);E&&Ll(L,E),d&&(L.g=d),D&&Ml(L,D),m&&(L.l=m),E=L}return m=u.D,d=u.ya,m&&d&&Ee(E,m,d),Ee(E,"VER",u.la),Mo(u,E),E}function M0(u,d,m){if(d&&!u.J)throw Error("Can't create secondary domain capable XhrIo object.");return d=u.Ca&&!u.pa?new De(new Fl({eb:m})):new De(u.pa),d.Ha(u.J),d}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function j0(){}t=j0.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Hl(){}Hl.prototype.g=function(u,d){return new jt(u,d)};function jt(u,d){st.call(this),this.g=new C0(d),this.l=u,this.h=d&&d.messageUrlParams||null,u=d&&d.messageHeaders||null,d&&d.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=d&&d.initMessageHeaders||null,d&&d.messageContentType&&(u?u["X-WebChannel-Content-Type"]=d.messageContentType:u={"X-WebChannel-Content-Type":d.messageContentType}),d&&d.va&&(u?u["X-WebChannel-Client-Profile"]=d.va:u={"X-WebChannel-Client-Profile":d.va}),this.g.S=u,(u=d&&d.Sb)&&!w(u)&&(this.g.m=u),this.v=d&&d.supportsCrossDomainXhr||!1,this.u=d&&d.sendRawJson||!1,(d=d&&d.httpSessionIdParam)&&!w(d)&&(this.g.D=d,u=this.h,u!==null&&d in u&&(u=this.h,d in u&&delete u[d])),this.j=new ts(this)}S(jt,st),jt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},jt.prototype.close=function(){cd(this.g)},jt.prototype.o=function(u){var d=this.g;if(typeof u=="string"){var m={};m.__data__=u,u=m}else this.u&&(m={},m.__data__=Jh(u),u=m);d.i.push(new _A(d.Ya++,u)),d.G==3&&zl(d)},jt.prototype.N=function(){this.g.l=null,delete this.j,cd(this.g),delete this.g,jt.aa.N.call(this)};function F0(u){ed.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var d=u.__sm__;if(d){e:{for(const m in d){u=m;break e}u=void 0}(this.i=u)&&(u=this.i,d=d!==null&&u in d?d[u]:void 0),this.data=d}else this.data=u}S(F0,ed);function U0(){td.call(this),this.status=1}S(U0,td);function ts(u){this.g=u}S(ts,j0),ts.prototype.ua=function(){wt(this.g,"a")},ts.prototype.ta=function(u){wt(this.g,new F0(u))},ts.prototype.sa=function(u){wt(this.g,new U0)},ts.prototype.ra=function(){wt(this.g,"b")},Hl.prototype.createWebChannel=Hl.prototype.g,jt.prototype.send=jt.prototype.o,jt.prototype.open=jt.prototype.m,jt.prototype.close=jt.prototype.close,QI=function(){return new Hl},GI=function(){return Vl()},KI=ai,Yp={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Dl.NO_ERROR=0,Dl.TIMEOUT=8,Dl.HTTP_ERROR=6,$u=Dl,n0.COMPLETE="complete",qI=n0,Xy.EventType=Po,Po.OPEN="a",Po.CLOSE="b",Po.ERROR="c",Po.MESSAGE="d",st.prototype.listen=st.prototype.K,sa=Xy,De.prototype.listenOnce=De.prototype.L,De.prototype.getLastError=De.prototype.Ka,De.prototype.getLastErrorCode=De.prototype.Ba,De.prototype.getStatus=De.prototype.Z,De.prototype.getResponseJson=De.prototype.Oa,De.prototype.getResponseText=De.prototype.oa,De.prototype.send=De.prototype.ea,De.prototype.setWithCredentials=De.prototype.Ha,HI=De}).apply(typeof mu<"u"?mu:typeof self<"u"?self:typeof window<"u"?window:{});const z1="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}dt.UNAUTHENTICATED=new dt(null),dt.GOOGLE_CREDENTIALS=new dt("google-credentials-uid"),dt.FIRST_PARTY=new dt("first-party-uid"),dt.MOCK_USER=new dt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _o="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zi=new qg("@firebase/firestore");function Ko(){return zi.logLevel}function q(t,...e){if(zi.logLevel<=oe.DEBUG){const n=e.map(Qg);zi.debug(`Firestore (${_o}): ${t}`,...n)}}function sr(t,...e){if(zi.logLevel<=oe.ERROR){const n=e.map(Qg);zi.error(`Firestore (${_o}): ${t}`,...n)}}function to(t,...e){if(zi.logLevel<=oe.WARN){const n=e.map(Qg);zi.warn(`Firestore (${_o}): ${t}`,...n)}}function Qg(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z(t="Unexpected state"){const e=`FIRESTORE (${_o}) INTERNAL ASSERTION FAILED: `+t;throw sr(e),new Error(e)}function ge(t,e){t||Z()}function te(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class H extends cr{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YI{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class iM{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(dt.UNAUTHENTICATED))}shutdown(){}}class sM{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class oM{constructor(e){this.t=e,this.currentUser=dt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){ge(this.o===void 0);let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new Jn;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Jn,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{q("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(q("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Jn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(q("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ge(typeof r.accessToken=="string"),new YI(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ge(e===null||typeof e=="string"),new dt(e)}}class aM{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=dt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class lM{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new aM(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(dt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class uM{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class cM{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){ge(this.o===void 0);const r=s=>{s.error!=null&&q("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,q("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{q("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):q("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ge(typeof n.token=="string"),this.R=n.token,new uM(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hM(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XI{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=hM(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function ce(t,e){return t<e?-1:t>e?1:0}function no(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new H(F.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new H(F.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new H(F.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new H(F.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return He.fromMillis(Date.now())}static fromDate(e){return He.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new He(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ce(this.nanoseconds,e.nanoseconds):ce(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ee(e)}static min(){return new ee(new He(0,0))}static max(){return new ee(new He(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class el{constructor(e,n,r){n===void 0?n=0:n>e.length&&Z(),r===void 0?r=e.length-n:r>e.length-n&&Z(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return el.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof el?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Se extends el{construct(e,n,r){return new Se(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new H(F.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Se(n)}static emptyPath(){return new Se([])}}const dM=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class et extends el{construct(e,n,r){return new et(e,n,r)}static isValidIdentifier(e){return dM.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),et.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new et(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new H(F.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new H(F.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new H(F.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new H(F.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new et(n)}static emptyPath(){return new et([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(e){this.path=e}static fromPath(e){return new Q(Se.fromString(e))}static fromName(e){return new Q(Se.fromString(e).popFirst(5))}static empty(){return new Q(Se.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Se.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Se.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Q(new Se(e.slice()))}}function fM(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=ee.fromTimestamp(r===1e9?new He(n+1,0):new He(n,r));return new Xr(i,Q.empty(),e)}function pM(t){return new Xr(t.readTime,t.key,-1)}class Xr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Xr(ee.min(),Q.empty(),-1)}static max(){return new Xr(ee.max(),Q.empty(),-1)}}function mM(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=Q.comparator(t.documentKey,e.documentKey),n!==0?n:ce(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gM="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class yM{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wl(t){if(t.code!==F.FAILED_PRECONDITION||t.message!==gM)throw t;q("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Z(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new U((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof U?n:U.resolve(n)}catch(n){return U.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):U.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):U.reject(n)}static resolve(e){return new U((n,r)=>{n(e)})}static reject(e){return new U((n,r)=>{r(e)})}static waitFor(e){return new U((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=U.resolve(!1);for(const r of e)n=n.next(i=>i?U.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new U((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const c=l;n(e[c]).next(h=>{o[c]=h,++a,a===s&&r(o)},h=>i(h))}})}static doWhile(e,n){return new U((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function vM(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function El(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yg{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Yg.oe=-1;function kh(t){return t==null}function Oc(t){return t===0&&1/t==-1/0}function _M(t){return typeof t=="number"&&Number.isInteger(t)&&!Oc(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W1(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function wo(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function JI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve{constructor(e,n){this.comparator=e,this.root=n||Ze.EMPTY}insert(e,n){return new Ve(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ze.BLACK,null,null))}remove(e){return new Ve(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ze.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new gu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new gu(this.root,e,this.comparator,!1)}getReverseIterator(){return new gu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new gu(this.root,e,this.comparator,!0)}}class gu{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ze{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Ze.RED,this.left=i??Ze.EMPTY,this.right=s??Ze.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Ze(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Ze.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Ze.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ze.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ze.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Z();const e=this.left.check();if(e!==this.right.check())throw Z();return e+(this.isRed()?0:1)}}Ze.EMPTY=null,Ze.RED=!0,Ze.BLACK=!1;Ze.EMPTY=new class{constructor(){this.size=0}get key(){throw Z()}get value(){throw Z()}get color(){throw Z()}get left(){throw Z()}get right(){throw Z()}copy(e,n,r,i,s){return this}insert(e,n,r){return new Ze(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(e){this.comparator=e,this.data=new Ve(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new H1(this.data.getIterator())}getIteratorFrom(e){return new H1(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof nt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new nt(this.comparator);return n.data=e,n}}class H1{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn{constructor(e){this.fields=e,e.sort(et.comparator)}static empty(){return new dn([])}unionWith(e){let n=new nt(et.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new dn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return no(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZI extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new ZI("Invalid base64 string: "+s):s}}(e);return new it(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new it(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ce(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}it.EMPTY_BYTE_STRING=new it("");const wM=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Jr(t){if(ge(!!t),typeof t=="string"){let e=0;const n=wM.exec(t);if(ge(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Le(t.seconds),nanos:Le(t.nanos)}}function Le(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Wi(t){return typeof t=="string"?it.fromBase64String(t):it.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xg(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Jg(t){const e=t.mapValue.fields.__previous_value__;return Xg(e)?Jg(e):e}function tl(t){const e=Jr(t.mapValue.fields.__local_write_time__.timestampValue);return new He(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EM{constructor(e,n,r,i,s,o,a,l,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=c}}class nl{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new nl("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof nl&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yu={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Hi(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Xg(t)?4:xM(t)?9007199254740991:TM(t)?10:11:Z()}function Dn(t,e){if(t===e)return!0;const n=Hi(t);if(n!==Hi(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return tl(t).isEqual(tl(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Jr(i.timestampValue),a=Jr(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Wi(i.bytesValue).isEqual(Wi(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Le(i.geoPointValue.latitude)===Le(s.geoPointValue.latitude)&&Le(i.geoPointValue.longitude)===Le(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Le(i.integerValue)===Le(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Le(i.doubleValue),a=Le(s.doubleValue);return o===a?Oc(o)===Oc(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return no(t.arrayValue.values||[],e.arrayValue.values||[],Dn);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(W1(o)!==W1(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!Dn(o[l],a[l])))return!1;return!0}(t,e);default:return Z()}}function rl(t,e){return(t.values||[]).find(n=>Dn(n,e))!==void 0}function ro(t,e){if(t===e)return 0;const n=Hi(t),r=Hi(e);if(n!==r)return ce(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ce(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=Le(s.integerValue||s.doubleValue),l=Le(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return q1(t.timestampValue,e.timestampValue);case 4:return q1(tl(t),tl(e));case 5:return ce(t.stringValue,e.stringValue);case 6:return function(s,o){const a=Wi(s),l=Wi(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),l=o.split("/");for(let c=0;c<a.length&&c<l.length;c++){const h=ce(a[c],l[c]);if(h!==0)return h}return ce(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=ce(Le(s.latitude),Le(o.latitude));return a!==0?a:ce(Le(s.longitude),Le(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return K1(t.arrayValue,e.arrayValue);case 10:return function(s,o){var a,l,c,h;const f=s.fields||{},p=o.fields||{},y=(a=f.value)===null||a===void 0?void 0:a.arrayValue,S=(l=p.value)===null||l===void 0?void 0:l.arrayValue,I=ce(((c=y==null?void 0:y.values)===null||c===void 0?void 0:c.length)||0,((h=S==null?void 0:S.values)===null||h===void 0?void 0:h.length)||0);return I!==0?I:K1(y,S)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===yu.mapValue&&o===yu.mapValue)return 0;if(s===yu.mapValue)return 1;if(o===yu.mapValue)return-1;const a=s.fields||{},l=Object.keys(a),c=o.fields||{},h=Object.keys(c);l.sort(),h.sort();for(let f=0;f<l.length&&f<h.length;++f){const p=ce(l[f],h[f]);if(p!==0)return p;const y=ro(a[l[f]],c[h[f]]);if(y!==0)return y}return ce(l.length,h.length)}(t.mapValue,e.mapValue);default:throw Z()}}function q1(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ce(t,e);const n=Jr(t),r=Jr(e),i=ce(n.seconds,r.seconds);return i!==0?i:ce(n.nanos,r.nanos)}function K1(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=ro(n[i],r[i]);if(s)return s}return ce(n.length,r.length)}function io(t){return Xp(t)}function Xp(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Jr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Wi(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return Q.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Xp(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Xp(n.fields[o])}`;return i+"}"}(t.mapValue):Z()}function G1(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Jp(t){return!!t&&"integerValue"in t}function Zg(t){return!!t&&"arrayValue"in t}function Q1(t){return!!t&&"nullValue"in t}function Y1(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function zu(t){return!!t&&"mapValue"in t}function TM(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function Ta(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return wo(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Ta(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ta(t.arrayValue.values[n]);return e}return Object.assign({},t)}function xM(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt{constructor(e){this.value=e}static empty(){return new Zt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!zu(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ta(n)}setAll(e){let n=et.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=Ta(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());zu(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Dn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];zu(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){wo(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Zt(Ta(this.value))}}function eP(t){const e=[];return wo(t.fields,(n,r)=>{const i=new et([n]);if(zu(r)){const s=eP(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new dn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new pt(e,0,ee.min(),ee.min(),ee.min(),Zt.empty(),0)}static newFoundDocument(e,n,r,i){return new pt(e,1,n,ee.min(),r,i,0)}static newNoDocument(e,n){return new pt(e,2,n,ee.min(),ee.min(),Zt.empty(),0)}static newUnknownDocument(e,n){return new pt(e,3,n,ee.min(),ee.min(),Zt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ee.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Zt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Zt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ee.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof pt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new pt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lc{constructor(e,n){this.position=e,this.inclusive=n}}function X1(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=Q.comparator(Q.fromName(o.referenceValue),n.key):r=ro(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function J1(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Dn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mc{constructor(e,n="asc"){this.field=e,this.dir=n}}function SM(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tP{}class Be extends tP{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new PM(e,n,r):n==="array-contains"?new RM(e,r):n==="in"?new kM(e,r):n==="not-in"?new bM(e,r):n==="array-contains-any"?new VM(e,r):new Be(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new CM(e,r):new AM(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(ro(n,this.value)):n!==null&&Hi(this.value)===Hi(n)&&this.matchesComparison(ro(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Z()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class yn extends tP{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new yn(e,n)}matches(e){return nP(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function nP(t){return t.op==="and"}function rP(t){return IM(t)&&nP(t)}function IM(t){for(const e of t.filters)if(e instanceof yn)return!1;return!0}function Zp(t){if(t instanceof Be)return t.field.canonicalString()+t.op.toString()+io(t.value);if(rP(t))return t.filters.map(e=>Zp(e)).join(",");{const e=t.filters.map(n=>Zp(n)).join(",");return`${t.op}(${e})`}}function iP(t,e){return t instanceof Be?function(r,i){return i instanceof Be&&r.op===i.op&&r.field.isEqual(i.field)&&Dn(r.value,i.value)}(t,e):t instanceof yn?function(r,i){return i instanceof yn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&iP(o,i.filters[a]),!0):!1}(t,e):void Z()}function sP(t){return t instanceof Be?function(n){return`${n.field.canonicalString()} ${n.op} ${io(n.value)}`}(t):t instanceof yn?function(n){return n.op.toString()+" {"+n.getFilters().map(sP).join(" ,")+"}"}(t):"Filter"}class PM extends Be{constructor(e,n,r){super(e,n,r),this.key=Q.fromName(r.referenceValue)}matches(e){const n=Q.comparator(e.key,this.key);return this.matchesComparison(n)}}class CM extends Be{constructor(e,n){super(e,"in",n),this.keys=oP("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class AM extends Be{constructor(e,n){super(e,"not-in",n),this.keys=oP("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function oP(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>Q.fromName(r.referenceValue))}class RM extends Be{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Zg(n)&&rl(n.arrayValue,this.value)}}class kM extends Be{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&rl(this.value.arrayValue,n)}}class bM extends Be{constructor(e,n){super(e,"not-in",n)}matches(e){if(rl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!rl(this.value.arrayValue,n)}}class VM extends Be{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Zg(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>rl(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DM{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ue=null}}function Z1(t,e=null,n=[],r=[],i=null,s=null,o=null){return new DM(t,e,n,r,i,s,o)}function ey(t){const e=te(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Zp(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),kh(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>io(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>io(r)).join(",")),e.ue=n}return e.ue}function ty(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!SM(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!iP(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!J1(t.startAt,e.startAt)&&J1(t.endAt,e.endAt)}function em(t){return Q.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tl{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function NM(t,e,n,r,i,s,o,a){return new Tl(t,e,n,r,i,s,o,a)}function bh(t){return new Tl(t)}function ew(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function aP(t){return t.collectionGroup!==null}function xa(t){const e=te(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new nt(et.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(c=>{c.isInequality()&&(a=a.add(c.field))})}),a})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new Mc(s,r))}),n.has(et.keyField().canonicalString())||e.ce.push(new Mc(et.keyField(),r))}return e.ce}function An(t){const e=te(t);return e.le||(e.le=OM(e,xa(t))),e.le}function OM(t,e){if(t.limitType==="F")return Z1(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Mc(i.field,s)});const n=t.endAt?new Lc(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Lc(t.startAt.position,t.startAt.inclusive):null;return Z1(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function tm(t,e){const n=t.filters.concat([e]);return new Tl(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function nm(t,e,n){return new Tl(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Vh(t,e){return ty(An(t),An(e))&&t.limitType===e.limitType}function lP(t){return`${ey(An(t))}|lt:${t.limitType}`}function as(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>sP(i)).join(", ")}]`),kh(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>io(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>io(i)).join(",")),`Target(${r})`}(An(t))}; limitType=${t.limitType})`}function Dh(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):Q.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of xa(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,l){const c=X1(o,a,l);return o.inclusive?c<=0:c<0}(r.startAt,xa(r),i)||r.endAt&&!function(o,a,l){const c=X1(o,a,l);return o.inclusive?c>=0:c>0}(r.endAt,xa(r),i))}(t,e)}function LM(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function uP(t){return(e,n)=>{let r=!1;for(const i of xa(t)){const s=MM(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function MM(t,e,n){const r=t.field.isKeyField()?Q.comparator(e.key,n.key):function(s,o,a){const l=o.data.field(s),c=a.data.field(s);return l!==null&&c!==null?ro(l,c):Z()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Z()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eo{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){wo(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return JI(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jM=new Ve(Q.comparator);function or(){return jM}const cP=new Ve(Q.comparator);function oa(...t){let e=cP;for(const n of t)e=e.insert(n.key,n);return e}function hP(t){let e=cP;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function xi(){return Sa()}function dP(){return Sa()}function Sa(){return new Eo(t=>t.toString(),(t,e)=>t.isEqual(e))}const FM=new Ve(Q.comparator),UM=new nt(Q.comparator);function se(...t){let e=UM;for(const n of t)e=e.add(n);return e}const BM=new nt(ce);function $M(){return BM}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ny(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Oc(e)?"-0":e}}function fP(t){return{integerValue:""+t}}function zM(t,e){return _M(e)?fP(e):ny(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nh{constructor(){this._=void 0}}function WM(t,e,n){return t instanceof jc?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Xg(s)&&(s=Jg(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof il?mP(t,e):t instanceof sl?gP(t,e):function(i,s){const o=pP(i,s),a=tw(o)+tw(i.Pe);return Jp(o)&&Jp(i.Pe)?fP(a):ny(i.serializer,a)}(t,e)}function HM(t,e,n){return t instanceof il?mP(t,e):t instanceof sl?gP(t,e):n}function pP(t,e){return t instanceof Fc?function(r){return Jp(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class jc extends Nh{}class il extends Nh{constructor(e){super(),this.elements=e}}function mP(t,e){const n=yP(e);for(const r of t.elements)n.some(i=>Dn(i,r))||n.push(r);return{arrayValue:{values:n}}}class sl extends Nh{constructor(e){super(),this.elements=e}}function gP(t,e){let n=yP(e);for(const r of t.elements)n=n.filter(i=>!Dn(i,r));return{arrayValue:{values:n}}}class Fc extends Nh{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function tw(t){return Le(t.integerValue||t.doubleValue)}function yP(t){return Zg(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function qM(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof il&&i instanceof il||r instanceof sl&&i instanceof sl?no(r.elements,i.elements,Dn):r instanceof Fc&&i instanceof Fc?Dn(r.Pe,i.Pe):r instanceof jc&&i instanceof jc}(t.transform,e.transform)}class KM{constructor(e,n){this.version=e,this.transformResults=n}}class Zn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Zn}static exists(e){return new Zn(void 0,e)}static updateTime(e){return new Zn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Wu(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Oh{}function vP(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new wP(t.key,Zn.none()):new xl(t.key,t.data,Zn.none());{const n=t.data,r=Zt.empty();let i=new nt(et.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Qi(t.key,r,new dn(i.toArray()),Zn.none())}}function GM(t,e,n){t instanceof xl?function(i,s,o){const a=i.value.clone(),l=rw(i.fieldTransforms,s,o.transformResults);a.setAll(l),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof Qi?function(i,s,o){if(!Wu(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=rw(i.fieldTransforms,s,o.transformResults),l=s.data;l.setAll(_P(i)),l.setAll(a),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Ia(t,e,n,r){return t instanceof xl?function(s,o,a,l){if(!Wu(s.precondition,o))return a;const c=s.value.clone(),h=iw(s.fieldTransforms,l,o);return c.setAll(h),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof Qi?function(s,o,a,l){if(!Wu(s.precondition,o))return a;const c=iw(s.fieldTransforms,l,o),h=o.data;return h.setAll(_P(s)),h.setAll(c),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(f=>f.field))}(t,e,n,r):function(s,o,a){return Wu(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function QM(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=pP(r.transform,i||null);s!=null&&(n===null&&(n=Zt.empty()),n.set(r.field,s))}return n||null}function nw(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&no(r,i,(s,o)=>qM(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class xl extends Oh{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Qi extends Oh{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function _P(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function rw(t,e,n){const r=new Map;ge(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,HM(o,a,n[i]))}return r}function iw(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,WM(s,o,e))}return r}class wP extends Oh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class YM extends Oh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XM{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&GM(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Ia(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Ia(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=dP();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=vP(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(ee.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),se())}isEqual(e){return this.batchId===e.batchId&&no(this.mutations,e.mutations,(n,r)=>nw(n,r))&&no(this.baseMutations,e.baseMutations,(n,r)=>nw(n,r))}}class ry{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){ge(e.mutations.length===r.length);let i=function(){return FM}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new ry(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JM{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZM{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var je,ae;function e5(t){switch(t){default:return Z();case F.CANCELLED:case F.UNKNOWN:case F.DEADLINE_EXCEEDED:case F.RESOURCE_EXHAUSTED:case F.INTERNAL:case F.UNAVAILABLE:case F.UNAUTHENTICATED:return!1;case F.INVALID_ARGUMENT:case F.NOT_FOUND:case F.ALREADY_EXISTS:case F.PERMISSION_DENIED:case F.FAILED_PRECONDITION:case F.ABORTED:case F.OUT_OF_RANGE:case F.UNIMPLEMENTED:case F.DATA_LOSS:return!0}}function EP(t){if(t===void 0)return sr("GRPC error has no .code"),F.UNKNOWN;switch(t){case je.OK:return F.OK;case je.CANCELLED:return F.CANCELLED;case je.UNKNOWN:return F.UNKNOWN;case je.DEADLINE_EXCEEDED:return F.DEADLINE_EXCEEDED;case je.RESOURCE_EXHAUSTED:return F.RESOURCE_EXHAUSTED;case je.INTERNAL:return F.INTERNAL;case je.UNAVAILABLE:return F.UNAVAILABLE;case je.UNAUTHENTICATED:return F.UNAUTHENTICATED;case je.INVALID_ARGUMENT:return F.INVALID_ARGUMENT;case je.NOT_FOUND:return F.NOT_FOUND;case je.ALREADY_EXISTS:return F.ALREADY_EXISTS;case je.PERMISSION_DENIED:return F.PERMISSION_DENIED;case je.FAILED_PRECONDITION:return F.FAILED_PRECONDITION;case je.ABORTED:return F.ABORTED;case je.OUT_OF_RANGE:return F.OUT_OF_RANGE;case je.UNIMPLEMENTED:return F.UNIMPLEMENTED;case je.DATA_LOSS:return F.DATA_LOSS;default:return Z()}}(ae=je||(je={}))[ae.OK=0]="OK",ae[ae.CANCELLED=1]="CANCELLED",ae[ae.UNKNOWN=2]="UNKNOWN",ae[ae.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ae[ae.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ae[ae.NOT_FOUND=5]="NOT_FOUND",ae[ae.ALREADY_EXISTS=6]="ALREADY_EXISTS",ae[ae.PERMISSION_DENIED=7]="PERMISSION_DENIED",ae[ae.UNAUTHENTICATED=16]="UNAUTHENTICATED",ae[ae.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ae[ae.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ae[ae.ABORTED=10]="ABORTED",ae[ae.OUT_OF_RANGE=11]="OUT_OF_RANGE",ae[ae.UNIMPLEMENTED=12]="UNIMPLEMENTED",ae[ae.INTERNAL=13]="INTERNAL",ae[ae.UNAVAILABLE=14]="UNAVAILABLE",ae[ae.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function t5(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n5=new ki([4294967295,4294967295],0);function sw(t){const e=t5().encode(t),n=new WI;return n.update(e),new Uint8Array(n.digest())}function ow(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new ki([n,r],0),new ki([i,s],0)]}class iy{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new aa(`Invalid padding: ${n}`);if(r<0)throw new aa(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new aa(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new aa(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=ki.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(ki.fromNumber(r)));return i.compare(n5)===1&&(i=new ki([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=sw(e),[r,i]=ow(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new iy(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ie===0)return;const n=sw(e),[r,i]=ow(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class aa extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lh{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Sl.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Lh(ee.min(),i,new Ve(ce),or(),se())}}class Sl{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Sl(r,n,se(),se(),se())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hu{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class TP{constructor(e,n){this.targetId=e,this.me=n}}class xP{constructor(e,n,r=it.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class aw{constructor(){this.fe=0,this.ge=uw(),this.pe=it.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=se(),n=se(),r=se();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:Z()}}),new Sl(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=uw()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,ge(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class r5{constructor(e){this.Le=e,this.Be=new Map,this.ke=or(),this.qe=lw(),this.Qe=new Ve(ce)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:Z()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(em(s))if(r===0){const o=new Q(s.path);this.Ue(n,o,pt.newNoDocument(o,ee.min()))}else ge(r===1);else{const o=this.Ye(n);if(o!==r){const a=this.Ze(e),l=a?this.Xe(a,e,o):1;if(l!==0){this.je(n);const c=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,c)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=Wi(r).toUint8Array()}catch(l){if(l instanceof ZI)return to("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new iy(o,i,s)}catch(l){return to(l instanceof aa?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Ie===0?null:a}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const a=this.Je(o);if(a){if(s.current&&em(a.target)){const l=new Q(a.target.path);this.ke.get(l)!==null||this.it(o,l)||this.Ue(o,l,pt.newNoDocument(l,e))}s.be&&(n.set(o,s.ve()),s.Ce())}});let r=se();this.qe.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const c=this.Je(l);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new Lh(e,n,this.Qe,this.ke,r);return this.ke=or(),this.qe=lw(),this.Qe=new Ve(ce),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new aw,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new nt(ce),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||q("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new aw),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function lw(){return new Ve(Q.comparator)}function uw(){return new Ve(Q.comparator)}const i5={asc:"ASCENDING",desc:"DESCENDING"},s5={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},o5={and:"AND",or:"OR"};class a5{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function rm(t,e){return t.useProto3Json||kh(e)?e:{value:e}}function Uc(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function SP(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function l5(t,e){return Uc(t,e.toTimestamp())}function Rn(t){return ge(!!t),ee.fromTimestamp(function(n){const r=Jr(n);return new He(r.seconds,r.nanos)}(t))}function sy(t,e){return im(t,e).canonicalString()}function im(t,e){const n=function(i){return new Se(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function IP(t){const e=Se.fromString(t);return ge(kP(e)),e}function sm(t,e){return sy(t.databaseId,e.path)}function cf(t,e){const n=IP(e);if(n.get(1)!==t.databaseId.projectId)throw new H(F.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new H(F.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Q(CP(n))}function PP(t,e){return sy(t.databaseId,e)}function u5(t){const e=IP(t);return e.length===4?Se.emptyPath():CP(e)}function om(t){return new Se(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function CP(t){return ge(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function cw(t,e,n){return{name:sm(t,e),fields:n.value.mapValue.fields}}function c5(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:Z()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,h){return c.useProto3Json?(ge(h===void 0||typeof h=="string"),it.fromBase64String(h||"")):(ge(h===void 0||h instanceof Buffer||h instanceof Uint8Array),it.fromUint8Array(h||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const h=c.code===void 0?F.UNKNOWN:EP(c.code);return new H(h,c.message||"")}(o);n=new xP(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=cf(t,r.document.name),s=Rn(r.document.updateTime),o=r.document.createTime?Rn(r.document.createTime):ee.min(),a=new Zt({mapValue:{fields:r.document.fields}}),l=pt.newFoundDocument(i,s,o,a),c=r.targetIds||[],h=r.removedTargetIds||[];n=new Hu(c,h,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=cf(t,r.document),s=r.readTime?Rn(r.readTime):ee.min(),o=pt.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Hu([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=cf(t,r.document),s=r.removedTargetIds||[];n=new Hu([],s,i,null)}else{if(!("filter"in e))return Z();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new ZM(i,s),a=r.targetId;n=new TP(a,o)}}return n}function h5(t,e){let n;if(e instanceof xl)n={update:cw(t,e.key,e.value)};else if(e instanceof wP)n={delete:sm(t,e.key)};else if(e instanceof Qi)n={update:cw(t,e.key,e.data),updateMask:w5(e.fieldMask)};else{if(!(e instanceof YM))return Z();n={verify:sm(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof jc)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof il)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof sl)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Fc)return{fieldPath:o.field.canonicalString(),increment:a.Pe};throw Z()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:l5(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:Z()}(t,e.precondition)),n}function d5(t,e){return t&&t.length>0?(ge(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?Rn(i.updateTime):Rn(s);return o.isEqual(ee.min())&&(o=Rn(s)),new KM(o,i.transformResults||[])}(n,e))):[]}function f5(t,e){return{documents:[PP(t,e.path)]}}function p5(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=PP(t,i);const s=function(c){if(c.length!==0)return RP(yn.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(h=>function(p){return{field:ls(p.field),direction:y5(p.dir)}}(h))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=rm(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{_t:n,parent:i}}function m5(t){let e=u5(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ge(r===1);const h=n.from[0];h.allDescendants?i=h.collectionId:e=e.child(h.collectionId)}let s=[];n.where&&(s=function(f){const p=AP(f);return p instanceof yn&&rP(p)?p.getFilters():[p]}(n.where));let o=[];n.orderBy&&(o=function(f){return f.map(p=>function(S){return new Mc(us(S.field),function(R){switch(R){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(S.direction))}(p))}(n.orderBy));let a=null;n.limit&&(a=function(f){let p;return p=typeof f=="object"?f.value:f,kh(p)?null:p}(n.limit));let l=null;n.startAt&&(l=function(f){const p=!!f.before,y=f.values||[];return new Lc(y,p)}(n.startAt));let c=null;return n.endAt&&(c=function(f){const p=!f.before,y=f.values||[];return new Lc(y,p)}(n.endAt)),NM(e,i,o,s,a,"F",l,c)}function g5(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Z()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function AP(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=us(n.unaryFilter.field);return Be.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=us(n.unaryFilter.field);return Be.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=us(n.unaryFilter.field);return Be.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=us(n.unaryFilter.field);return Be.create(o,"!=",{nullValue:"NULL_VALUE"});default:return Z()}}(t):t.fieldFilter!==void 0?function(n){return Be.create(us(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Z()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return yn.create(n.compositeFilter.filters.map(r=>AP(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return Z()}}(n.compositeFilter.op))}(t):Z()}function y5(t){return i5[t]}function v5(t){return s5[t]}function _5(t){return o5[t]}function ls(t){return{fieldPath:t.canonicalString()}}function us(t){return et.fromServerFormat(t.fieldPath)}function RP(t){return t instanceof Be?function(n){if(n.op==="=="){if(Y1(n.value))return{unaryFilter:{field:ls(n.field),op:"IS_NAN"}};if(Q1(n.value))return{unaryFilter:{field:ls(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Y1(n.value))return{unaryFilter:{field:ls(n.field),op:"IS_NOT_NAN"}};if(Q1(n.value))return{unaryFilter:{field:ls(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ls(n.field),op:v5(n.op),value:n.value}}}(t):t instanceof yn?function(n){const r=n.getFilters().map(i=>RP(i));return r.length===1?r[0]:{compositeFilter:{op:_5(n.op),filters:r}}}(t):Z()}function w5(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function kP(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr{constructor(e,n,r,i,s=ee.min(),o=ee.min(),a=it.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new Vr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Vr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Vr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Vr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E5{constructor(e){this.ct=e}}function T5(t){const e=m5({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?nm(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x5{constructor(){this.un=new S5}addToCollectionParentIndex(e,n){return this.un.add(n),U.resolve()}getCollectionParents(e,n){return U.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return U.resolve()}deleteFieldIndex(e,n){return U.resolve()}deleteAllFieldIndexes(e){return U.resolve()}createTargetIndexes(e,n){return U.resolve()}getDocumentsMatchingTarget(e,n){return U.resolve(null)}getIndexType(e,n){return U.resolve(0)}getFieldIndexes(e,n){return U.resolve([])}getNextCollectionGroupToUpdate(e){return U.resolve(null)}getMinOffset(e,n){return U.resolve(Xr.min())}getMinOffsetFromCollectionGroup(e,n){return U.resolve(Xr.min())}updateCollectionGroup(e,n,r){return U.resolve()}updateIndexEntries(e,n){return U.resolve()}}class S5{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new nt(Se.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new nt(Se.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new so(0)}static kn(){return new so(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I5{constructor(){this.changes=new Eo(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,pt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?U.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P5{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C5{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Ia(r.mutation,i,dn.empty(),He.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,se()).next(()=>r))}getLocalViewOfDocuments(e,n,r=se()){const i=xi();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=oa();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=xi();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,se()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=or();const o=Sa(),a=function(){return Sa()}();return n.forEach((l,c)=>{const h=r.get(c.key);i.has(c.key)&&(h===void 0||h.mutation instanceof Qi)?s=s.insert(c.key,c):h!==void 0?(o.set(c.key,h.mutation.getFieldMask()),Ia(h.mutation,c,h.mutation.getFieldMask(),He.now())):o.set(c.key,dn.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((c,h)=>o.set(c,h)),n.forEach((c,h)=>{var f;return a.set(c,new P5(h,(f=o.get(c))!==null&&f!==void 0?f:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Sa();let i=new Ve((o,a)=>o-a),s=se();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=n.get(l);if(c===null)return;let h=r.get(l)||dn.empty();h=a.applyToLocalView(c,h),r.set(l,h);const f=(i.get(a.batchId)||se()).add(l);i=i.insert(a.batchId,f)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,h=l.value,f=dP();h.forEach(p=>{if(!s.has(p)){const y=vP(n.get(p),r.get(p));y!==null&&f.set(p,y),s=s.add(p)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,f))}return U.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return Q.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):aP(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):U.resolve(xi());let a=-1,l=s;return o.next(c=>U.forEach(c,(h,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),s.get(h)?U.resolve():this.remoteDocumentCache.getEntry(e,h).next(p=>{l=l.insert(h,p)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,l,c,se())).next(h=>({batchId:a,changes:hP(h)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new Q(n)).next(r=>{let i=oa();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=oa();return this.indexManager.getCollectionParents(e,s).next(a=>U.forEach(a,l=>{const c=function(f,p){return new Tl(p,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(n,l.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(h=>{h.forEach((f,p)=>{o=o.insert(f,p)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((l,c)=>{const h=c.getKey();o.get(h)===null&&(o=o.insert(h,pt.newInvalidDocument(h)))});let a=oa();return o.forEach((l,c)=>{const h=s.get(l);h!==void 0&&Ia(h.mutation,c,dn.empty(),He.now()),Dh(n,c)&&(a=a.insert(l,c))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A5{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return U.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Rn(i.createTime)}}(n)),U.resolve()}getNamedQuery(e,n){return U.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(i){return{name:i.name,query:T5(i.bundledQuery),readTime:Rn(i.readTime)}}(n)),U.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R5{constructor(){this.overlays=new Ve(Q.comparator),this.Ir=new Map}getOverlay(e,n){return U.resolve(this.overlays.get(n))}getOverlays(e,n){const r=xi();return U.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),U.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(r)),U.resolve()}getOverlaysForCollection(e,n,r){const i=xi(),s=n.length+1,o=new Q(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return U.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Ve((c,h)=>c-h);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let h=s.get(c.largestBatchId);h===null&&(h=xi(),s=s.insert(c.largestBatchId,h)),h.set(c.getKey(),c)}}const a=xi(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,h)=>a.set(c,h)),!(a.size()>=i)););return U.resolve(a)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new JM(n,r));let s=this.Ir.get(n);s===void 0&&(s=se(),this.Ir.set(n,s)),this.Ir.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k5{constructor(){this.sessionToken=it.EMPTY_BYTE_STRING}getSessionToken(e){return U.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,U.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oy{constructor(){this.Tr=new nt(qe.Er),this.dr=new nt(qe.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new qe(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new qe(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new Q(new Se([])),r=new qe(n,e),i=new qe(n,e+1),s=[];return this.dr.forEachInRange([r,i],o=>{this.Vr(o),s.push(o.key)}),s}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new Q(new Se([])),r=new qe(n,e),i=new qe(n,e+1);let s=se();return this.dr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new qe(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class qe{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return Q.comparator(e.key,n.key)||ce(e.wr,n.wr)}static Ar(e,n){return ce(e.wr,n.wr)||Q.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b5{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new nt(qe.Er)}checkEmpty(e){return U.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new XM(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.br=this.br.add(new qe(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return U.resolve(o)}lookupMutationBatch(e,n){return U.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.vr(r),s=i<0?0:i;return U.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return U.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return U.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new qe(n,0),i=new qe(n,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([r,i],o=>{const a=this.Dr(o.wr);s.push(a)}),U.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new nt(ce);return n.forEach(i=>{const s=new qe(i,0),o=new qe(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,o],a=>{r=r.add(a.wr)})}),U.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;Q.isDocumentKey(s)||(s=s.child(""));const o=new qe(new Q(s),0);let a=new nt(ce);return this.br.forEachWhile(l=>{const c=l.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(a=a.add(l.wr)),!0)},o),U.resolve(this.Cr(a))}Cr(e){const n=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){ge(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return U.forEach(n.mutations,i=>{const s=new qe(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new qe(n,0),i=this.br.firstAfterOrEqual(r);return U.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,U.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V5{constructor(e){this.Mr=e,this.docs=function(){return new Ve(Q.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return U.resolve(r?r.document.mutableCopy():pt.newInvalidDocument(n))}getEntries(e,n){let r=or();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():pt.newInvalidDocument(i))}),U.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=or();const o=n.path,a=new Q(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:c,value:{document:h}}=l.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||mM(pM(h),r)<=0||(i.has(h.key)||Dh(n,h))&&(s=s.insert(h.key,h.mutableCopy()))}return U.resolve(s)}getAllFromCollectionGroup(e,n,r,i){Z()}Or(e,n){return U.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new D5(this)}getSize(e){return U.resolve(this.size)}}class D5 extends I5{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),U.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N5{constructor(e){this.persistence=e,this.Nr=new Eo(n=>ey(n),ty),this.lastRemoteSnapshotVersion=ee.min(),this.highestTargetId=0,this.Lr=0,this.Br=new oy,this.targetCount=0,this.kr=so.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,i)=>n(i)),U.resolve()}getLastRemoteSnapshotVersion(e){return U.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return U.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),U.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),U.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new so(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,U.resolve()}updateTargetData(e,n){return this.Kn(n),U.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,U.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Nr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Nr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),U.waitFor(s).next(()=>i)}getTargetCount(e){return U.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return U.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),U.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),U.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),U.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return U.resolve(r)}containsKey(e,n){return U.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O5{constructor(e,n){this.qr={},this.overlays={},this.Qr=new Yg(0),this.Kr=!1,this.Kr=!0,this.$r=new k5,this.referenceDelegate=e(this),this.Ur=new N5(this),this.indexManager=new x5,this.remoteDocumentCache=function(i){return new V5(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new E5(n),this.Gr=new A5(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new R5,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new b5(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){q("MemoryPersistence","Starting transaction:",e);const i=new L5(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(e,n){return U.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class L5 extends yM{constructor(e){super(),this.currentSequenceNumber=e}}class ay{constructor(e){this.persistence=e,this.Jr=new oy,this.Yr=null}static Zr(e){return new ay(e)}get Xr(){if(this.Yr)return this.Yr;throw Z()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),U.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),U.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),U.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return U.forEach(this.Xr,r=>{const i=Q.fromPath(r);return this.ei(e,i).next(s=>{s||n.removeEntry(i,ee.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return U.or([()=>U.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ly{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=i}static Wi(e,n){let r=se(),i=se();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new ly(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M5{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j5{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return BO()?8:vM(vt())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.Yi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Zi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new M5;return this.Xi(e,n,o).next(a=>{if(s.result=a,this.zi)return this.es(e,n,o,a.size)})}).next(()=>s.result)}es(e,n,r,i){return r.documentReadCount<this.ji?(Ko()<=oe.DEBUG&&q("QueryEngine","SDK will not create cache indexes for query:",as(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),U.resolve()):(Ko()<=oe.DEBUG&&q("QueryEngine","Query:",as(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(Ko()<=oe.DEBUG&&q("QueryEngine","The SDK decides to create cache indexes for query:",as(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,An(n))):U.resolve())}Yi(e,n){if(ew(n))return U.resolve(null);let r=An(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=nm(n,null,"F"),r=An(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=se(...s);return this.Ji.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const c=this.ts(n,a);return this.ns(n,c,o,l.readTime)?this.Yi(e,nm(n,null,"F")):this.rs(e,c,n,l)}))})))}Zi(e,n,r,i){return ew(n)||i.isEqual(ee.min())?U.resolve(null):this.Ji.getDocuments(e,r).next(s=>{const o=this.ts(n,s);return this.ns(n,o,r,i)?U.resolve(null):(Ko()<=oe.DEBUG&&q("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),as(n)),this.rs(e,o,n,fM(i,-1)).next(a=>a))})}ts(e,n){let r=new nt(uP(e));return n.forEach((i,s)=>{Dh(e,s)&&(r=r.add(s))}),r}ns(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(e,n,r){return Ko()<=oe.DEBUG&&q("QueryEngine","Using full collection scan to execute query:",as(n)),this.Ji.getDocumentsMatchingQuery(e,n,Xr.min(),r)}rs(e,n,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F5{constructor(e,n,r,i){this.persistence=e,this.ss=n,this.serializer=i,this.os=new Ve(ce),this._s=new Eo(s=>ey(s),ty),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new C5(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function U5(t,e,n,r){return new F5(t,e,n,r)}async function bP(t,e){const n=te(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=se();for(const c of i){o.push(c.batchId);for(const h of c.mutations)l=l.add(h.key)}for(const c of s){a.push(c.batchId);for(const h of c.mutations)l=l.add(h.key)}return n.localDocuments.getDocuments(r,l).next(c=>({hs:c,removedBatchIds:o,addedBatchIds:a}))})})}function B5(t,e){const n=te(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.cs.newChangeBuffer({trackRemovals:!0});return function(a,l,c,h){const f=c.batch,p=f.keys();let y=U.resolve();return p.forEach(S=>{y=y.next(()=>h.getEntry(l,S)).next(I=>{const R=c.docVersions.get(S);ge(R!==null),I.version.compareTo(R)<0&&(f.applyToRemoteDocument(I,c),I.isValidDocument()&&(I.setReadTime(c.commitVersion),h.addEntry(I)))})}),y.next(()=>a.mutationQueue.removeMutationBatch(l,f))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=se();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(l=l.add(a.batch.mutations[c].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function VP(t){const e=te(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function $5(t,e){const n=te(t),r=e.snapshotVersion;let i=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});i=n.os;const a=[];e.targetChanges.forEach((h,f)=>{const p=i.get(f);if(!p)return;a.push(n.Ur.removeMatchingKeys(s,h.removedDocuments,f).next(()=>n.Ur.addMatchingKeys(s,h.addedDocuments,f)));let y=p.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(f)!==null?y=y.withResumeToken(it.EMPTY_BYTE_STRING,ee.min()).withLastLimboFreeSnapshotVersion(ee.min()):h.resumeToken.approximateByteSize()>0&&(y=y.withResumeToken(h.resumeToken,r)),i=i.insert(f,y),function(I,R,v){return I.resumeToken.approximateByteSize()===0||R.snapshotVersion.toMicroseconds()-I.snapshotVersion.toMicroseconds()>=3e8?!0:v.addedDocuments.size+v.modifiedDocuments.size+v.removedDocuments.size>0}(p,y,h)&&a.push(n.Ur.updateTargetData(s,y))});let l=or(),c=se();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,h))}),a.push(z5(s,o,e.documentUpdates).next(h=>{l=h.Ps,c=h.Is})),!r.isEqual(ee.min())){const h=n.Ur.getLastRemoteSnapshotVersion(s).next(f=>n.Ur.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(h)}return U.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,c)).next(()=>l)}).then(s=>(n.os=i,s))}function z5(t,e,n){let r=se(),i=se();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=or();return n.forEach((a,l)=>{const c=s.get(a);l.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(ee.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):q("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",l.version)}),{Ps:o,Is:i}})}function W5(t,e){const n=te(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function H5(t,e){const n=te(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Ur.getTargetData(r,e).next(s=>s?(i=s,U.resolve(i)):n.Ur.allocateTargetId(r).next(o=>(i=new Vr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function am(t,e,n){const r=te(t),i=r.os.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!El(o))throw o;q("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function hw(t,e,n){const r=te(t);let i=ee.min(),s=se();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,c,h){const f=te(l),p=f._s.get(h);return p!==void 0?U.resolve(f.os.get(p)):f.Ur.getTargetData(c,h)}(r,o,An(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?i:ee.min(),n?s:se())).next(a=>(q5(r,LM(e),a),{documents:a,Ts:s})))}function q5(t,e,n){let r=t.us.get(e)||ee.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.us.set(e,r)}class dw{constructor(){this.activeTargetIds=$M()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class K5{constructor(){this.so=new dw,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new dw,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G5{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fw{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){q("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){q("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let vu=null;function hf(){return vu===null?vu=function(){return 268435456+Math.round(2147483648*Math.random())}():vu++,"0x"+vu.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q5={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y5{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ct="WebChannelConnection";class X5 extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(n,r,i,s,o){const a=hf(),l=this.xo(n,r.toUriEncodedString());q("RestConnection",`Sending RPC '${n}' ${a}:`,l,i);const c={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(c,s,o),this.No(n,l,c,i).then(h=>(q("RestConnection",`Received RPC '${n}' ${a}: `,h),h),h=>{throw to("RestConnection",`RPC '${n}' ${a} failed with error: `,h,"url: ",l,"request:",i),h})}Lo(n,r,i,s,o,a){return this.Mo(n,r,i,s,o)}Oo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+_o}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}xo(n,r){const i=Q5[n];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,i){const s=hf();return new Promise((o,a)=>{const l=new HI;l.setWithCredentials(!0),l.listenOnce(qI.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case $u.NO_ERROR:const h=l.getResponseJson();q(ct,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(h)),o(h);break;case $u.TIMEOUT:q(ct,`RPC '${e}' ${s} timed out`),a(new H(F.DEADLINE_EXCEEDED,"Request time out"));break;case $u.HTTP_ERROR:const f=l.getStatus();if(q(ct,`RPC '${e}' ${s} failed with status:`,f,"response text:",l.getResponseText()),f>0){let p=l.getResponseJson();Array.isArray(p)&&(p=p[0]);const y=p==null?void 0:p.error;if(y&&y.status&&y.message){const S=function(R){const v=R.toLowerCase().replace(/_/g,"-");return Object.values(F).indexOf(v)>=0?v:F.UNKNOWN}(y.status);a(new H(S,y.message))}else a(new H(F.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new H(F.UNAVAILABLE,"Connection failed."));break;default:Z()}}finally{q(ct,`RPC '${e}' ${s} completed.`)}});const c=JSON.stringify(i);q(ct,`RPC '${e}' ${s} sending request:`,i),l.send(n,"POST",c,r,15)})}Bo(e,n,r){const i=hf(),s=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=QI(),a=GI(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(l.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Oo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const h=s.join("");q(ct,`Creating RPC '${e}' stream ${i}: ${h}`,l);const f=o.createWebChannel(h,l);let p=!1,y=!1;const S=new Y5({Io:R=>{y?q(ct,`Not sending because RPC '${e}' stream ${i} is closed:`,R):(p||(q(ct,`Opening RPC '${e}' stream ${i} transport.`),f.open(),p=!0),q(ct,`RPC '${e}' stream ${i} sending:`,R),f.send(R))},To:()=>f.close()}),I=(R,v,w)=>{R.listen(v,x=>{try{w(x)}catch(V){setTimeout(()=>{throw V},0)}})};return I(f,sa.EventType.OPEN,()=>{y||(q(ct,`RPC '${e}' stream ${i} transport opened.`),S.yo())}),I(f,sa.EventType.CLOSE,()=>{y||(y=!0,q(ct,`RPC '${e}' stream ${i} transport closed`),S.So())}),I(f,sa.EventType.ERROR,R=>{y||(y=!0,to(ct,`RPC '${e}' stream ${i} transport errored:`,R),S.So(new H(F.UNAVAILABLE,"The operation could not be completed")))}),I(f,sa.EventType.MESSAGE,R=>{var v;if(!y){const w=R.data[0];ge(!!w);const x=w,V=x.error||((v=x[0])===null||v===void 0?void 0:v.error);if(V){q(ct,`RPC '${e}' stream ${i} received error:`,V);const O=V.status;let M=function(P){const C=je[P];if(C!==void 0)return EP(C)}(O),T=V.message;M===void 0&&(M=F.INTERNAL,T="Unknown error status: "+O+" with message "+V.message),y=!0,S.So(new H(M,T)),f.close()}else q(ct,`RPC '${e}' stream ${i} received:`,w),S.bo(w)}}),I(a,KI.STAT_EVENT,R=>{R.stat===Yp.PROXY?q(ct,`RPC '${e}' stream ${i} detected buffering proxy`):R.stat===Yp.NOPROXY&&q(ct,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{S.wo()},0),S}}function df(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mh(t){return new a5(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DP{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-r);i>0&&q("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NP{constructor(e,n,r,i,s,o,a,l){this.ui=e,this.Ho=r,this.Jo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new DP(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===F.RESOURCE_EXHAUSTED?(sr(n.toString()),sr("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===F.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===n&&this.P_(r,i)},r=>{e(()=>{const i=new H(F.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return q("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(q("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class J5 extends NP{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=c5(this.serializer,e),r=function(s){if(!("targetChange"in s))return ee.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?ee.min():o.readTime?Rn(o.readTime):ee.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=om(this.serializer),n.addTarget=function(s,o){let a;const l=o.target;if(a=em(l)?{documents:f5(s,l)}:{query:p5(s,l)._t},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=SP(s,o.resumeToken);const c=rm(s,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(ee.min())>0){a.readTime=Uc(s,o.snapshotVersion.toTimestamp());const c=rm(s,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,e);const r=g5(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=om(this.serializer),n.removeTarget=e,this.a_(n)}}class Z5 extends NP{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return ge(!!e.streamToken),this.lastStreamToken=e.streamToken,ge(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){ge(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=d5(e.writeResults,e.commitTime),r=Rn(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=om(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>h5(this.serializer,r))};this.a_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e6 extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new H(F.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Mo(e,im(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===F.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new H(F.UNKNOWN,s.toString())})}Lo(e,n,r,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Lo(e,im(n,r),i,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===F.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new H(F.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class t6{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(sr(n),this.D_=!1):q("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n6{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(o=>{r.enqueueAndForget(async()=>{Yi(this)&&(q("RemoteStore","Restarting streams for network reachability change."),await async function(l){const c=te(l);c.L_.add(4),await Il(c),c.q_.set("Unknown"),c.L_.delete(4),await jh(c)}(this))})}),this.q_=new t6(r,i)}}async function jh(t){if(Yi(t))for(const e of t.B_)await e(!0)}async function Il(t){for(const e of t.B_)await e(!1)}function OP(t,e){const n=te(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),dy(n)?hy(n):To(n).r_()&&cy(n,e))}function uy(t,e){const n=te(t),r=To(n);n.N_.delete(e),r.r_()&&LP(n,e),n.N_.size===0&&(r.r_()?r.o_():Yi(n)&&n.q_.set("Unknown"))}function cy(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ee.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}To(t).A_(e)}function LP(t,e){t.Q_.xe(e),To(t).R_(e)}function hy(t){t.Q_=new r5({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),To(t).start(),t.q_.v_()}function dy(t){return Yi(t)&&!To(t).n_()&&t.N_.size>0}function Yi(t){return te(t).L_.size===0}function MP(t){t.Q_=void 0}async function r6(t){t.q_.set("Online")}async function i6(t){t.N_.forEach((e,n)=>{cy(t,e)})}async function s6(t,e){MP(t),dy(t)?(t.q_.M_(e),hy(t)):t.q_.set("Unknown")}async function o6(t,e,n){if(t.q_.set("Online"),e instanceof xP&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.N_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.N_.delete(a),i.Q_.removeTarget(a))}(t,e)}catch(r){q("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Bc(t,r)}else if(e instanceof Hu?t.Q_.Ke(e):e instanceof TP?t.Q_.He(e):t.Q_.We(e),!n.isEqual(ee.min()))try{const r=await VP(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.Q_.rt(o);return a.targetChanges.forEach((l,c)=>{if(l.resumeToken.approximateByteSize()>0){const h=s.N_.get(c);h&&s.N_.set(c,h.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,c)=>{const h=s.N_.get(l);if(!h)return;s.N_.set(l,h.withResumeToken(it.EMPTY_BYTE_STRING,h.snapshotVersion)),LP(s,l);const f=new Vr(h.target,l,c,h.sequenceNumber);cy(s,f)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){q("RemoteStore","Failed to raise snapshot:",r),await Bc(t,r)}}async function Bc(t,e,n){if(!El(e))throw e;t.L_.add(1),await Il(t),t.q_.set("Offline"),n||(n=()=>VP(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{q("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await jh(t)})}function jP(t,e){return e().catch(n=>Bc(t,n,e))}async function Fh(t){const e=te(t),n=Zr(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;a6(e);)try{const i=await W5(e.localStore,r);if(i===null){e.O_.length===0&&n.o_();break}r=i.batchId,l6(e,i)}catch(i){await Bc(e,i)}FP(e)&&UP(e)}function a6(t){return Yi(t)&&t.O_.length<10}function l6(t,e){t.O_.push(e);const n=Zr(t);n.r_()&&n.V_&&n.m_(e.mutations)}function FP(t){return Yi(t)&&!Zr(t).n_()&&t.O_.length>0}function UP(t){Zr(t).start()}async function u6(t){Zr(t).p_()}async function c6(t){const e=Zr(t);for(const n of t.O_)e.m_(n.mutations)}async function h6(t,e,n){const r=t.O_.shift(),i=ry.from(r,e,n);await jP(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Fh(t)}async function d6(t,e){e&&Zr(t).V_&&await async function(r,i){if(function(o){return e5(o)&&o!==F.ABORTED}(i.code)){const s=r.O_.shift();Zr(r).s_(),await jP(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Fh(r)}}(t,e),FP(t)&&UP(t)}async function pw(t,e){const n=te(t);n.asyncQueue.verifyOperationInProgress(),q("RemoteStore","RemoteStore received new credentials");const r=Yi(n);n.L_.add(3),await Il(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await jh(n)}async function f6(t,e){const n=te(t);e?(n.L_.delete(2),await jh(n)):e||(n.L_.add(2),await Il(n),n.q_.set("Unknown"))}function To(t){return t.K_||(t.K_=function(n,r,i){const s=te(n);return s.w_(),new J5(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:r6.bind(null,t),Ro:i6.bind(null,t),mo:s6.bind(null,t),d_:o6.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),dy(t)?hy(t):t.q_.set("Unknown")):(await t.K_.stop(),MP(t))})),t.K_}function Zr(t){return t.U_||(t.U_=function(n,r,i){const s=te(n);return s.w_(),new Z5(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:u6.bind(null,t),mo:d6.bind(null,t),f_:c6.bind(null,t),g_:h6.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await Fh(t)):(await t.U_.stop(),t.O_.length>0&&(q("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fy{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Jn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new fy(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new H(F.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function py(t,e){if(sr("AsyncQueue",`${e}: ${t}`),El(t))return new H(F.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Os{constructor(e){this.comparator=e?(n,r)=>e(n,r)||Q.comparator(n.key,r.key):(n,r)=>Q.comparator(n.key,r.key),this.keyedMap=oa(),this.sortedSet=new Ve(this.comparator)}static emptySet(e){return new Os(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Os)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Os;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mw{constructor(){this.W_=new Ve(Q.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):Z():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class oo{constructor(e,n,r,i,s,o,a,l,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new oo(e,n,Os.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Vh(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p6{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class m6{constructor(){this.queries=gw(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const i=te(n),s=i.queries;i.queries=gw(),s.forEach((o,a)=>{for(const l of a.j_)l.onError(r)})})(this,new H(F.ABORTED,"Firestore shutting down"))}}function gw(){return new Eo(t=>lP(t),Vh)}async function my(t,e){const n=te(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.H_()&&e.J_()&&(r=2):(s=new p6,r=e.J_()?0:1);try{switch(r){case 0:s.z_=await n.onListen(i,!0);break;case 1:s.z_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const a=py(o,`Initialization of query '${as(e.query)}' failed`);return void e.onError(a)}n.queries.set(i,s),s.j_.push(e),e.Z_(n.onlineState),s.z_&&e.X_(s.z_)&&yy(n)}async function gy(t,e){const n=te(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.j_.indexOf(e);o>=0&&(s.j_.splice(o,1),s.j_.length===0?i=e.J_()?0:1:!s.H_()&&e.J_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function g6(t,e){const n=te(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.j_)a.X_(i)&&(r=!0);o.z_=i}}r&&yy(n)}function y6(t,e,n){const r=te(t),i=r.queries.get(e);if(i)for(const s of i.j_)s.onError(n);r.queries.delete(e)}function yy(t){t.Y_.forEach(e=>{e.next()})}var lm,yw;(yw=lm||(lm={})).ea="default",yw.Cache="cache";class vy{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new oo(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=oo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==lm.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BP{constructor(e){this.key=e}}class $P{constructor(e){this.key=e}}class v6{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=se(),this.mutatedKeys=se(),this.Aa=uP(e),this.Ra=new Os(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new mw,i=n?n.Ra:this.Ra;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((h,f)=>{const p=i.get(h),y=Dh(this.query,f)?f:null,S=!!p&&this.mutatedKeys.has(p.key),I=!!y&&(y.hasLocalMutations||this.mutatedKeys.has(y.key)&&y.hasCommittedMutations);let R=!1;p&&y?p.data.isEqual(y.data)?S!==I&&(r.track({type:3,doc:y}),R=!0):this.ga(p,y)||(r.track({type:2,doc:y}),R=!0,(l&&this.Aa(y,l)>0||c&&this.Aa(y,c)<0)&&(a=!0)):!p&&y?(r.track({type:0,doc:y}),R=!0):p&&!y&&(r.track({type:1,doc:p}),R=!0,(l||c)&&(a=!0)),R&&(y?(o=o.add(y),s=I?s.add(h):s.delete(h)):(o=o.delete(h),s=s.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),s=s.delete(h.key),r.track({type:1,doc:h})}return{Ra:o,fa:r,ns:a,mutatedKeys:s}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((h,f)=>function(y,S){const I=R=>{switch(R){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Z()}};return I(y)-I(S)}(h.type,f.type)||this.Aa(h.doc,f.doc)),this.pa(r),i=i!=null&&i;const a=n&&!i?this.ya():[],l=this.da.size===0&&this.current&&!i?1:0,c=l!==this.Ea;return this.Ea=l,o.length!==0||c?{snapshot:new oo(this.query,e.Ra,s,o,e.mutatedKeys,l===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:a}:{wa:a}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new mw,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=se(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new $P(r))}),this.da.forEach(r=>{e.has(r)||n.push(new BP(r))}),n}ba(e){this.Ta=e.Ts,this.da=se();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return oo.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class _6{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class w6{constructor(e){this.key=e,this.va=!1}}class E6{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new Eo(a=>lP(a),Vh),this.Ma=new Map,this.xa=new Set,this.Oa=new Ve(Q.comparator),this.Na=new Map,this.La=new oy,this.Ba={},this.ka=new Map,this.qa=so.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function T6(t,e,n=!0){const r=GP(t);let i;const s=r.Fa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await zP(r,e,n,!0),i}async function x6(t,e){const n=GP(t);await zP(n,e,!0,!1)}async function zP(t,e,n,r){const i=await H5(t.localStore,An(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let a;return r&&(a=await S6(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&OP(t.remoteStore,i),a}async function S6(t,e,n,r,i){t.Ka=(f,p,y)=>async function(I,R,v,w){let x=R.view.ma(v);x.ns&&(x=await hw(I.localStore,R.query,!1).then(({documents:T})=>R.view.ma(T,x)));const V=w&&w.targetChanges.get(R.targetId),O=w&&w.targetMismatches.get(R.targetId)!=null,M=R.view.applyChanges(x,I.isPrimaryClient,V,O);return _w(I,R.targetId,M.wa),M.snapshot}(t,f,p,y);const s=await hw(t.localStore,e,!0),o=new v6(e,s.Ts),a=o.ma(s.documents),l=Sl.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(a,t.isPrimaryClient,l);_w(t,n,c.wa);const h=new _6(e,n,o);return t.Fa.set(e,h),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),c.snapshot}async function I6(t,e,n){const r=te(t),i=r.Fa.get(e),s=r.Ma.get(i.targetId);if(s.length>1)return r.Ma.set(i.targetId,s.filter(o=>!Vh(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await am(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&uy(r.remoteStore,i.targetId),um(r,i.targetId)}).catch(wl)):(um(r,i.targetId),await am(r.localStore,i.targetId,!0))}async function P6(t,e){const n=te(t),r=n.Fa.get(e),i=n.Ma.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),uy(n.remoteStore,r.targetId))}async function C6(t,e,n){const r=N6(t);try{const i=await function(o,a){const l=te(o),c=He.now(),h=a.reduce((y,S)=>y.add(S.key),se());let f,p;return l.persistence.runTransaction("Locally write mutations","readwrite",y=>{let S=or(),I=se();return l.cs.getEntries(y,h).next(R=>{S=R,S.forEach((v,w)=>{w.isValidDocument()||(I=I.add(v))})}).next(()=>l.localDocuments.getOverlayedDocuments(y,S)).next(R=>{f=R;const v=[];for(const w of a){const x=QM(w,f.get(w.key).overlayedDocument);x!=null&&v.push(new Qi(w.key,x,eP(x.value.mapValue),Zn.exists(!0)))}return l.mutationQueue.addMutationBatch(y,c,v,a)}).next(R=>{p=R;const v=R.applyToLocalDocumentSet(f,I);return l.documentOverlayCache.saveOverlays(y,R.batchId,v)})}).then(()=>({batchId:p.batchId,changes:hP(f)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,l){let c=o.Ba[o.currentUser.toKey()];c||(c=new Ve(ce)),c=c.insert(a,l),o.Ba[o.currentUser.toKey()]=c}(r,i.batchId,n),await Pl(r,i.changes),await Fh(r.remoteStore)}catch(i){const s=py(i,"Failed to persist write");n.reject(s)}}async function WP(t,e){const n=te(t);try{const r=await $5(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Na.get(s);o&&(ge(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.va=!0:i.modifiedDocuments.size>0?ge(o.va):i.removedDocuments.size>0&&(ge(o.va),o.va=!1))}),await Pl(n,r,e)}catch(r){await wl(r)}}function vw(t,e,n){const r=te(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Fa.forEach((s,o)=>{const a=o.view.Z_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const l=te(o);l.onlineState=a;let c=!1;l.queries.forEach((h,f)=>{for(const p of f.j_)p.Z_(a)&&(c=!0)}),c&&yy(l)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function A6(t,e,n){const r=te(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Na.get(e),s=i&&i.key;if(s){let o=new Ve(Q.comparator);o=o.insert(s,pt.newNoDocument(s,ee.min()));const a=se().add(s),l=new Lh(ee.min(),new Map,new Ve(ce),o,a);await WP(r,l),r.Oa=r.Oa.remove(s),r.Na.delete(e),_y(r)}else await am(r.localStore,e,!1).then(()=>um(r,e,n)).catch(wl)}async function R6(t,e){const n=te(t),r=e.batch.batchId;try{const i=await B5(n.localStore,e);qP(n,r,null),HP(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Pl(n,i)}catch(i){await wl(i)}}async function k6(t,e,n){const r=te(t);try{const i=await function(o,a){const l=te(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let h;return l.mutationQueue.lookupMutationBatch(c,a).next(f=>(ge(f!==null),h=f.keys(),l.mutationQueue.removeMutationBatch(c,f))).next(()=>l.mutationQueue.performConsistencyCheck(c)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(c,h,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,h)).next(()=>l.localDocuments.getDocuments(c,h))})}(r.localStore,e);qP(r,e,n),HP(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Pl(r,i)}catch(i){await wl(i)}}function HP(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function qP(t,e,n){const r=te(t);let i=r.Ba[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}function um(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||KP(t,r)})}function KP(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(uy(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),_y(t))}function _w(t,e,n){for(const r of n)r instanceof BP?(t.La.addReference(r.key,e),b6(t,r)):r instanceof $P?(q("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||KP(t,r.key)):Z()}function b6(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(q("SyncEngine","New document in limbo: "+n),t.xa.add(r),_y(t))}function _y(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new Q(Se.fromString(e)),r=t.qa.next();t.Na.set(r,new w6(n)),t.Oa=t.Oa.insert(n,r),OP(t.remoteStore,new Vr(An(bh(n.path)),r,"TargetPurposeLimboResolution",Yg.oe))}}async function Pl(t,e,n){const r=te(t),i=[],s=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((a,l)=>{o.push(r.Ka(l,e,n).then(c=>{var h;if((c||n)&&r.isPrimaryClient){const f=c?!c.fromCache:(h=n==null?void 0:n.targetChanges.get(l.targetId))===null||h===void 0?void 0:h.current;r.sharedClientState.updateQueryState(l.targetId,f?"current":"not-current")}if(c){i.push(c);const f=ly.Wi(l.targetId,c);s.push(f)}}))}),await Promise.all(o),r.Ca.d_(i),await async function(l,c){const h=te(l);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>U.forEach(c,p=>U.forEach(p.$i,y=>h.persistence.referenceDelegate.addReference(f,p.targetId,y)).next(()=>U.forEach(p.Ui,y=>h.persistence.referenceDelegate.removeReference(f,p.targetId,y)))))}catch(f){if(!El(f))throw f;q("LocalStore","Failed to update sequence numbers: "+f)}for(const f of c){const p=f.targetId;if(!f.fromCache){const y=h.os.get(p),S=y.snapshotVersion,I=y.withLastLimboFreeSnapshotVersion(S);h.os=h.os.insert(p,I)}}}(r.localStore,s))}async function V6(t,e){const n=te(t);if(!n.currentUser.isEqual(e)){q("SyncEngine","User change. New user:",e.toKey());const r=await bP(n.localStore,e);n.currentUser=e,function(s,o){s.ka.forEach(a=>{a.forEach(l=>{l.reject(new H(F.CANCELLED,o))})}),s.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Pl(n,r.hs)}}function D6(t,e){const n=te(t),r=n.Na.get(e);if(r&&r.va)return se().add(r.key);{let i=se();const s=n.Ma.get(e);if(!s)return i;for(const o of s){const a=n.Fa.get(o);i=i.unionWith(a.view.Va)}return i}}function GP(t){const e=te(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=WP.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=D6.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=A6.bind(null,e),e.Ca.d_=g6.bind(null,e.eventManager),e.Ca.$a=y6.bind(null,e.eventManager),e}function N6(t){const e=te(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=R6.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=k6.bind(null,e),e}class $c{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Mh(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return U5(this.persistence,new j5,e.initialUser,this.serializer)}Ga(e){return new O5(ay.Zr,this.serializer)}Wa(e){return new K5}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}$c.provider={build:()=>new $c};class cm{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>vw(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=V6.bind(null,this.syncEngine),await f6(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new m6}()}createDatastore(e){const n=Mh(e.databaseInfo.databaseId),r=function(s){return new X5(s)}(e.databaseInfo);return function(s,o,a,l){return new e6(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new n6(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>vw(this.syncEngine,n,0),function(){return fw.D()?new fw:new G5}())}createSyncEngine(e,n){return function(i,s,o,a,l,c,h){const f=new E6(i,s,o,a,l,c);return h&&(f.Qa=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=te(i);q("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await Il(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}cm.provider={build:()=>new cm};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wy{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):sr("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O6{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=dt.UNAUTHENTICATED,this.clientId=XI.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{q("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(q("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Jn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=py(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function ff(t,e){t.asyncQueue.verifyOperationInProgress(),q("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await bP(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function ww(t,e){t.asyncQueue.verifyOperationInProgress();const n=await L6(t);q("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>pw(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>pw(e.remoteStore,i)),t._onlineComponents=e}async function L6(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){q("FirestoreClient","Using user provided OfflineComponentProvider");try{await ff(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===F.FAILED_PRECONDITION||i.code===F.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;to("Error using user provided cache. Falling back to memory cache: "+n),await ff(t,new $c)}}else q("FirestoreClient","Using default OfflineComponentProvider"),await ff(t,new $c);return t._offlineComponents}async function QP(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(q("FirestoreClient","Using user provided OnlineComponentProvider"),await ww(t,t._uninitializedComponentsProvider._online)):(q("FirestoreClient","Using default OnlineComponentProvider"),await ww(t,new cm))),t._onlineComponents}function M6(t){return QP(t).then(e=>e.syncEngine)}async function zc(t){const e=await QP(t),n=e.eventManager;return n.onListen=T6.bind(null,e.syncEngine),n.onUnlisten=I6.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=x6.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=P6.bind(null,e.syncEngine),n}function j6(t,e,n={}){const r=new Jn;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,c){const h=new wy({next:p=>{h.Za(),o.enqueueAndForget(()=>gy(s,f));const y=p.docs.has(a);!y&&p.fromCache?c.reject(new H(F.UNAVAILABLE,"Failed to get document because the client is offline.")):y&&p.fromCache&&l&&l.source==="server"?c.reject(new H(F.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(p)},error:p=>c.reject(p)}),f=new vy(bh(a.path),h,{includeMetadataChanges:!0,_a:!0});return my(s,f)}(await zc(t),t.asyncQueue,e,n,r)),r.promise}function F6(t,e,n={}){const r=new Jn;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,c){const h=new wy({next:p=>{h.Za(),o.enqueueAndForget(()=>gy(s,f)),p.fromCache&&l.source==="server"?c.reject(new H(F.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(p)},error:p=>c.reject(p)}),f=new vy(a,h,{includeMetadataChanges:!0,_a:!0});return my(s,f)}(await zc(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YP(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ew=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XP(t,e,n){if(!n)throw new H(F.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function U6(t,e,n,r){if(e===!0&&r===!0)throw new H(F.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Tw(t){if(!Q.isDocumentKey(t))throw new H(F.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function xw(t){if(Q.isDocumentKey(t))throw new H(F.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Uh(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Z()}function kn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new H(F.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Uh(t);throw new H(F.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sw{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new H(F.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new H(F.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}U6("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=YP((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new H(F.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new H(F.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new H(F.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Bh{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Sw({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new H(F.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new H(F.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Sw(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new iM;switch(r.type){case"firstParty":return new lM(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new H(F.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Ew.get(n);r&&(q("ComponentProvider","Removing Datastore"),Ew.delete(n),r.terminate())}(this),Promise.resolve()}}function B6(t,e,n,r={}){var i;const s=(t=kn(t,Bh))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&to("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=dt.MOCK_USER;else{a=NO(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new H(F.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new dt(c)}t._authCredentials=new sM(new YI(a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xi{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Xi(this.firestore,e,this._query)}}class St{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Wr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new St(this.firestore,e,this._key)}}class Wr extends Xi{constructor(e,n,r){super(e,n,bh(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new St(this.firestore,null,new Q(e))}withConverter(e){return new Wr(this.firestore,e,this._path)}}function xo(t,e,...n){if(t=It(t),XP("collection","path",e),t instanceof Bh){const r=Se.fromString(e,...n);return xw(r),new Wr(t,null,r)}{if(!(t instanceof St||t instanceof Wr))throw new H(F.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Se.fromString(e,...n));return xw(r),new Wr(t.firestore,null,r)}}function Hr(t,e,...n){if(t=It(t),arguments.length===1&&(e=XI.newId()),XP("doc","path",e),t instanceof Bh){const r=Se.fromString(e,...n);return Tw(r),new St(t,null,new Q(r))}{if(!(t instanceof St||t instanceof Wr))throw new H(F.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Se.fromString(e,...n));return Tw(r),new St(t.firestore,t instanceof Wr?t.converter:null,new Q(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iw{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new DP(this,"async_queue_retry"),this.Vu=()=>{const r=df();r&&q("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=df();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=df();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new Jn;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!El(e))throw e;q("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw sr("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const i=fy.createAndSchedule(this,e,n,r,s=>this.yu(s));return this.Tu.push(i),i}fu(){this.Eu&&Z()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}function Pw(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class ao extends Bh{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new Iw,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Iw(e),this._firestoreClient=void 0,await e}}}function $6(t,e){const n=typeof t=="object"?t:BI(),r=typeof t=="string"?t:"(default)",i=Gg(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=VO("firestore");s&&B6(i,...s)}return i}function $h(t){if(t._terminated)throw new H(F.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||z6(t),t._firestoreClient}function z6(t){var e,n,r;const i=t._freezeSettings(),s=function(a,l,c,h){return new EM(a,l,c,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,YP(h.experimentalLongPollingOptions),h.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new O6(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(a){const l=a==null?void 0:a._online.build();return{_offline:a==null?void 0:a._offline.build(l),_online:l}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lo{constructor(e){this._byteString=e}static fromBase64String(e){try{return new lo(it.fromBase64String(e))}catch(n){throw new H(F.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new lo(it.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ey{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new H(F.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new et(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JP{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ty{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new H(F.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new H(F.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ce(this._lat,e._lat)||ce(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xy{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W6=/^__.*__$/;class H6{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Qi(e,this.data,this.fieldMask,n,this.fieldTransforms):new xl(e,this.data,n,this.fieldTransforms)}}function ZP(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Z()}}class Sy{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new Sy(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.Ou(e),i}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return Wc(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(ZP(this.Cu)&&W6.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class q6{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Mh(e)}Qu(e,n,r,i=!1){return new Sy({Cu:e,methodName:n,qu:r,path:et.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function eC(t){const e=t._freezeSettings(),n=Mh(t._databaseId);return new q6(t._databaseId,!!e.ignoreUndefinedProperties,n)}function K6(t,e,n,r,i,s={}){const o=t.Qu(s.merge||s.mergeFields?2:0,e,n,i);rC("Data must be an object, but it was:",o,r);const a=tC(r,o);let l,c;if(s.merge)l=new dn(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const h=[];for(const f of s.mergeFields){const p=Q6(e,f,n);if(!o.contains(p))throw new H(F.INVALID_ARGUMENT,`Field '${p}' is specified in your field mask but missing from your input data.`);X6(h,p)||h.push(p)}l=new dn(h),c=o.fieldTransforms.filter(f=>l.covers(f.field))}else l=null,c=o.fieldTransforms;return new H6(new Zt(a),l,c)}function G6(t,e,n,r=!1){return Iy(n,t.Qu(r?4:3,e))}function Iy(t,e){if(nC(t=It(t)))return rC("Unsupported field value:",e,t),tC(t,e);if(t instanceof JP)return function(r,i){if(!ZP(i.Cu))throw i.Bu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let l=Iy(a,i.Lu(o));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=It(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return zM(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=He.fromDate(r);return{timestampValue:Uc(i.serializer,s)}}if(r instanceof He){const s=new He(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Uc(i.serializer,s)}}if(r instanceof Ty)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof lo)return{bytesValue:SP(i.serializer,r._byteString)};if(r instanceof St){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:sy(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof xy)return function(o,a){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(l=>{if(typeof l!="number")throw a.Bu("VectorValues must only contain numeric values.");return ny(a.serializer,l)})}}}}}}(r,i);throw i.Bu(`Unsupported field value: ${Uh(r)}`)}(t,e)}function tC(t,e){const n={};return JI(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):wo(t,(r,i)=>{const s=Iy(i,e.Mu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function nC(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof He||t instanceof Ty||t instanceof lo||t instanceof St||t instanceof JP||t instanceof xy)}function rC(t,e,n){if(!nC(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Uh(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function Q6(t,e,n){if((e=It(e))instanceof Ey)return e._internalPath;if(typeof e=="string")return iC(t,e);throw Wc("Field path arguments must be of type string or ",t,!1,void 0,n)}const Y6=new RegExp("[~\\*/\\[\\]]");function iC(t,e,n){if(e.search(Y6)>=0)throw Wc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Ey(...e.split("."))._internalPath}catch{throw Wc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Wc(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new H(F.INVALID_ARGUMENT,a+t+l)}function X6(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sC{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new St(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new J6(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Py("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class J6 extends sC{data(){return super.data()}}function Py(t,e){return typeof e=="string"?iC(t,e):e instanceof Ey?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oC(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new H(F.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Cy{}class Z6 extends Cy{}function aC(t,e,...n){let r=[];e instanceof Cy&&r.push(e),r=r.concat(n),function(s){const o=s.filter(l=>l instanceof Ay).length,a=s.filter(l=>l instanceof zh).length;if(o>1||o>0&&a>0)throw new H(F.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class zh extends Z6{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new zh(e,n,r)}_apply(e){const n=this._parse(e);return uC(e._query,n),new Xi(e.firestore,e.converter,tm(e._query,n))}_parse(e){const n=eC(e.firestore);return function(s,o,a,l,c,h,f){let p;if(c.isKeyField()){if(h==="array-contains"||h==="array-contains-any")throw new H(F.INVALID_ARGUMENT,`Invalid Query. You can't perform '${h}' queries on documentId().`);if(h==="in"||h==="not-in"){Aw(f,h);const y=[];for(const S of f)y.push(Cw(l,s,S));p={arrayValue:{values:y}}}else p=Cw(l,s,f)}else h!=="in"&&h!=="not-in"&&h!=="array-contains-any"||Aw(f,h),p=G6(a,o,f,h==="in"||h==="not-in");return Be.create(c,h,p)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function lC(t,e,n){const r=e,i=Py("where",t);return zh._create(i,r,n)}class Ay extends Cy{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Ay(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:yn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const l of a)uC(o,l),o=tm(o,l)}(e._query,n),new Xi(e.firestore,e.converter,tm(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Cw(t,e,n){if(typeof(n=It(n))=="string"){if(n==="")throw new H(F.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!aP(e)&&n.indexOf("/")!==-1)throw new H(F.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Se.fromString(n));if(!Q.isDocumentKey(r))throw new H(F.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return G1(t,new Q(r))}if(n instanceof St)return G1(t,n._key);throw new H(F.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Uh(n)}.`)}function Aw(t,e){if(!Array.isArray(t)||t.length===0)throw new H(F.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function uC(t,e){const n=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new H(F.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new H(F.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class e3{convertValue(e,n="none"){switch(Hi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Le(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Wi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw Z()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return wo(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var n,r,i;const s=(i=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>Le(o.doubleValue));return new xy(s)}convertGeoPoint(e){return new Ty(Le(e.latitude),Le(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Jg(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(tl(e));default:return null}}convertTimestamp(e){const n=Jr(e);return new He(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Se.fromString(e);ge(kP(r));const i=new nl(r.get(1),r.get(3)),s=new Q(r.popFirst(5));return i.isEqual(n)||sr(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function t3(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class la{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class cC extends sC{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new qu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Py("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class qu extends cC{data(e={}){return super.data(e)}}class hC{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new la(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new qu(this._firestore,this._userDataWriter,r.key,r,new la(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new H(F.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const l=new qu(i._firestore,i._userDataWriter,a.doc.key,a.doc,new la(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const l=new qu(i._firestore,i._userDataWriter,a.doc.key,a.doc,new la(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,h=-1;return a.type!==0&&(c=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),h=o.indexOf(a.doc.key)),{type:n3(a.type),doc:l,oldIndex:c,newIndex:h}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function n3(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Z()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ol(t){t=kn(t,St);const e=kn(t.firestore,ao);return j6($h(e),t._key).then(n=>dC(e,t,n))}class Ry extends e3{constructor(e){super(),this.firestore=e}convertBytes(e){return new lo(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new St(this.firestore,null,n)}}function ky(t){t=kn(t,Xi);const e=kn(t.firestore,ao),n=$h(e),r=new Ry(e);return oC(t._query),F6(n,t._query).then(i=>new hC(e,r,t,i))}function by(t,e,n){t=kn(t,St);const r=kn(t.firestore,ao),i=t3(t.converter,e,n);return i3(r,[K6(eC(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Zn.none())])}function r3(t,...e){var n,r,i;t=It(t);let s={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||Pw(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(Pw(e[o])){const f=e[o];e[o]=(n=f.next)===null||n===void 0?void 0:n.bind(f),e[o+1]=(r=f.error)===null||r===void 0?void 0:r.bind(f),e[o+2]=(i=f.complete)===null||i===void 0?void 0:i.bind(f)}let l,c,h;if(t instanceof St)c=kn(t.firestore,ao),h=bh(t._key.path),l={next:f=>{e[o]&&e[o](dC(c,t,f))},error:e[o+1],complete:e[o+2]};else{const f=kn(t,Xi);c=kn(f.firestore,ao),h=f._query;const p=new Ry(c);l={next:y=>{e[o]&&e[o](new hC(c,p,f,y))},error:e[o+1],complete:e[o+2]},oC(t._query)}return function(p,y,S,I){const R=new wy(I),v=new vy(y,R,S);return p.asyncQueue.enqueueAndForget(async()=>my(await zc(p),v)),()=>{R.Za(),p.asyncQueue.enqueueAndForget(async()=>gy(await zc(p),v))}}($h(c),h,a,l)}function i3(t,e){return function(r,i){const s=new Jn;return r.asyncQueue.enqueueAndForget(async()=>C6(await M6(r),i,s)),s.promise}($h(t),e)}function dC(t,e,n){const r=n.docs.get(e._key),i=new Ry(t);return new cC(t,i,e._key,r,new la(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(i){_o=i})(vo),eo(new $i("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new ao(new oM(r.getProvider("auth-internal")),new cM(r.getProvider("app-check-internal")),function(c,h){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new H(F.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new nl(c.options.projectId,h)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),zr(z1,"4.7.3",e),zr(z1,"4.7.3","esm2017")})();var s3="firebase",o3="10.14.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */zr(s3,o3,"app");function Vy(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function fC(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const a3=fC,pC=new vl("auth","Firebase",fC());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hc=new qg("@firebase/auth");function l3(t,...e){Hc.logLevel<=oe.WARN&&Hc.warn(`Auth (${vo}): ${t}`,...e)}function Ku(t,...e){Hc.logLevel<=oe.ERROR&&Hc.error(`Auth (${vo}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ar(t,...e){throw Dy(t,...e)}function bn(t,...e){return Dy(t,...e)}function mC(t,e,n){const r=Object.assign(Object.assign({},a3()),{[e]:n});return new vl("auth","Firebase",r).create(e,{appName:t.name})}function bi(t){return mC(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Dy(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return pC.create(t,...e)}function J(t,e,...n){if(!t)throw Dy(e,...n)}function Wn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ku(e),new Error(e)}function lr(t,e){t||Wn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hm(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function u3(){return Rw()==="http:"||Rw()==="https:"}function Rw(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function c3(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(u3()||jO()||"connection"in navigator)?navigator.onLine:!0}function h3(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cl{constructor(e,n){this.shortDelay=e,this.longDelay=n,lr(n>e,"Short delay should be less than long delay!"),this.isMobile=OO()||FO()}get(){return c3()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ny(t,e){lr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gC{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Wn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Wn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Wn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d3={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f3=new Cl(3e4,6e4);function Oy(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function So(t,e,n,r,i={}){return yC(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=_l(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const c=Object.assign({method:e,headers:l},s);return MO()||(c.referrerPolicy="no-referrer"),gC.fetch()(vC(t,t.config.apiHost,n,a),c)})}async function yC(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},d3),e);try{const i=new m3(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw _u(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw _u(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw _u(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw _u(t,"user-disabled",o);const h=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw mC(t,h,c);ar(t,h)}}catch(i){if(i instanceof cr)throw i;ar(t,"network-request-failed",{message:String(i)})}}async function p3(t,e,n,r,i={}){const s=await So(t,e,n,r,i);return"mfaPendingCredential"in s&&ar(t,"multi-factor-auth-required",{_serverResponse:s}),s}function vC(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Ny(t.config,i):`${t.config.apiScheme}://${i}`}class m3{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(bn(this.auth,"network-request-failed")),f3.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function _u(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=bn(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function g3(t,e){return So(t,"POST","/v1/accounts:delete",e)}async function _C(t,e){return So(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pa(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function y3(t,e=!1){const n=It(t),r=await n.getIdToken(e),i=Ly(r);J(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Pa(pf(i.auth_time)),issuedAtTime:Pa(pf(i.iat)),expirationTime:Pa(pf(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function pf(t){return Number(t)*1e3}function Ly(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Ku("JWT malformed, contained fewer than 3 sections"),null;try{const i=NI(n);return i?JSON.parse(i):(Ku("Failed to decode base64 JWT payload"),null)}catch(i){return Ku("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function kw(t){const e=Ly(t);return J(e,"internal-error"),J(typeof e.exp<"u","internal-error"),J(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function al(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof cr&&v3(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function v3({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _3{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dm{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Pa(this.lastLoginAt),this.creationTime=Pa(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qc(t){var e;const n=t.auth,r=await t.getIdToken(),i=await al(t,_C(n,{idToken:r}));J(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?wC(s.providerUserInfo):[],a=E3(t.providerData,o),l=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),h=l?c:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new dm(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(t,f)}async function w3(t){const e=It(t);await qc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function E3(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function wC(t){return t.map(e=>{var{providerId:n}=e,r=Vy(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function T3(t,e){const n=await yC(t,{},async()=>{const r=_l({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=vC(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",gC.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function x3(t,e){return So(t,"POST","/v2/accounts:revokeToken",Oy(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ls{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){J(e.idToken,"internal-error"),J(typeof e.idToken<"u","internal-error"),J(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):kw(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){J(e.length!==0,"internal-error");const n=kw(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(J(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await T3(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Ls;return r&&(J(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(J(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(J(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ls,this.toJSON())}_performRefresh(){return Wn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yr(t,e){J(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Hn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Vy(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new _3(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new dm(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await al(this,this.stsTokenManager.getToken(this.auth,e));return J(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return y3(this,e)}reload(){return w3(this)}_assign(e){this!==e&&(J(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Hn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){J(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await qc(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(br(this.auth.app))return Promise.reject(bi(this.auth));const e=await this.getIdToken();return await al(this,g3(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,c,h;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(i=n.email)!==null&&i!==void 0?i:void 0,y=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,S=(o=n.photoURL)!==null&&o!==void 0?o:void 0,I=(a=n.tenantId)!==null&&a!==void 0?a:void 0,R=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,v=(c=n.createdAt)!==null&&c!==void 0?c:void 0,w=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:x,emailVerified:V,isAnonymous:O,providerData:M,stsTokenManager:T}=n;J(x&&T,e,"internal-error");const _=Ls.fromJSON(this.name,T);J(typeof x=="string",e,"internal-error"),yr(f,e.name),yr(p,e.name),J(typeof V=="boolean",e,"internal-error"),J(typeof O=="boolean",e,"internal-error"),yr(y,e.name),yr(S,e.name),yr(I,e.name),yr(R,e.name),yr(v,e.name),yr(w,e.name);const P=new Hn({uid:x,auth:e,email:p,emailVerified:V,displayName:f,isAnonymous:O,photoURL:S,phoneNumber:y,tenantId:I,stsTokenManager:_,createdAt:v,lastLoginAt:w});return M&&Array.isArray(M)&&(P.providerData=M.map(C=>Object.assign({},C))),R&&(P._redirectEventId=R),P}static async _fromIdTokenResponse(e,n,r=!1){const i=new Ls;i.updateFromServerResponse(n);const s=new Hn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await qc(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];J(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?wC(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new Ls;a.updateFromIdToken(r);const l=new Hn({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new dm(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(l,c),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bw=new Map;function qn(t){lr(t instanceof Function,"Expected a class definition");let e=bw.get(t);return e?(lr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,bw.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EC{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}EC.type="NONE";const Vw=EC;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gu(t,e,n){return`firebase:${t}:${e}:${n}`}class Ms{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Gu(this.userKey,i.apiKey,s),this.fullPersistenceKey=Gu("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Hn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ms(qn(Vw),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||qn(Vw);const o=Gu(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const h=await c._get(o);if(h){const f=Hn._fromJSON(e,h);c!==s&&(a=f),s=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Ms(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new Ms(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dw(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(IC(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(TC(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(CC(e))return"Blackberry";if(AC(e))return"Webos";if(xC(e))return"Safari";if((e.includes("chrome/")||SC(e))&&!e.includes("edge/"))return"Chrome";if(PC(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function TC(t=vt()){return/firefox\//i.test(t)}function xC(t=vt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function SC(t=vt()){return/crios\//i.test(t)}function IC(t=vt()){return/iemobile/i.test(t)}function PC(t=vt()){return/android/i.test(t)}function CC(t=vt()){return/blackberry/i.test(t)}function AC(t=vt()){return/webos/i.test(t)}function My(t=vt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function S3(t=vt()){var e;return My(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function I3(){return UO()&&document.documentMode===10}function RC(t=vt()){return My(t)||PC(t)||AC(t)||CC(t)||/windows phone/i.test(t)||IC(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kC(t,e=[]){let n;switch(t){case"Browser":n=Dw(vt());break;case"Worker":n=`${Dw(vt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${vo}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P3{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function C3(t,e={}){return So(t,"GET","/v2/passwordPolicy",Oy(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A3=6;class R3{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:A3,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k3{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Nw(this),this.idTokenSubscription=new Nw(this),this.beforeStateQueue=new P3(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=pC,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=qn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Ms.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await _C(this,{idToken:e}),r=await Hn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(br(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return J(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await qc(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=h3()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(br(this.app))return Promise.reject(bi(this));const n=e?It(e):null;return n&&J(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&J(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return br(this.app)?Promise.reject(bi(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return br(this.app)?Promise.reject(bi(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(qn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await C3(this),n=new R3(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new vl("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await x3(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&qn(e)||this._popupRedirectResolver;J(n,this,"argument-error"),this.redirectPersistenceManager=await Ms.create(this,[qn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(J(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return J(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=kC(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&l3(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function jy(t){return It(t)}class Nw{constructor(e){this.auth=e,this.observer=null,this.addObserver=GO(n=>this.observer=n)}get next(){return J(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fy={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function b3(t){Fy=t}function V3(t){return Fy.loadJS(t)}function D3(){return Fy.gapiScript}function N3(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O3(t,e){const n=Gg(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Dc(s,e??{}))return i;ar(i,"already-initialized")}return n.initialize({options:e})}function L3(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(qn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function M3(t,e,n){const r=jy(t);J(r._canInitEmulator,r,"emulator-config-failed"),J(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=bC(e),{host:o,port:a}=j3(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),F3()}function bC(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function j3(t){const e=bC(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Ow(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Ow(o)}}}function Ow(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function F3(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VC{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Wn("not implemented")}_getIdTokenResponse(e){return Wn("not implemented")}_linkToIdToken(e,n){return Wn("not implemented")}_getReauthenticationResolver(e){return Wn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function js(t,e){return p3(t,"POST","/v1/accounts:signInWithIdp",Oy(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U3="http://localhost";class qi extends VC{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new qi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):ar("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Vy(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new qi(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return js(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,js(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,js(e,n)}buildRequest(){const e={requestUri:U3,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=_l(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DC{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Al extends DC{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr extends Al{constructor(){super("facebook.com")}static credential(e){return qi._fromParams({providerId:Sr.PROVIDER_ID,signInMethod:Sr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Sr.credentialFromTaggedObject(e)}static credentialFromError(e){return Sr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Sr.credential(e.oauthAccessToken)}catch{return null}}}Sr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Sr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir extends Al{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return qi._fromParams({providerId:Ir.PROVIDER_ID,signInMethod:Ir.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Ir.credentialFromTaggedObject(e)}static credentialFromError(e){return Ir.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Ir.credential(n,r)}catch{return null}}}Ir.GOOGLE_SIGN_IN_METHOD="google.com";Ir.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr extends Al{constructor(){super("github.com")}static credential(e){return qi._fromParams({providerId:Pr.PROVIDER_ID,signInMethod:Pr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Pr.credentialFromTaggedObject(e)}static credentialFromError(e){return Pr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Pr.credential(e.oauthAccessToken)}catch{return null}}}Pr.GITHUB_SIGN_IN_METHOD="github.com";Pr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr extends Al{constructor(){super("twitter.com")}static credential(e,n){return qi._fromParams({providerId:Cr.PROVIDER_ID,signInMethod:Cr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Cr.credentialFromTaggedObject(e)}static credentialFromError(e){return Cr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Cr.credential(n,r)}catch{return null}}}Cr.TWITTER_SIGN_IN_METHOD="twitter.com";Cr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Hn._fromIdTokenResponse(e,r,i),o=Lw(r);return new uo({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Lw(r);return new uo({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Lw(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kc extends cr{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Kc.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Kc(e,n,r,i)}}function NC(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Kc._fromErrorAndOperation(t,s,e,r):s})}async function B3(t,e,n=!1){const r=await al(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return uo._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $3(t,e,n=!1){const{auth:r}=t;if(br(r.app))return Promise.reject(bi(r));const i="reauthenticate";try{const s=await al(t,NC(r,i,e,t),n);J(s.idToken,r,"internal-error");const o=Ly(s.idToken);J(o,r,"internal-error");const{sub:a}=o;return J(t.uid===a,r,"user-mismatch"),uo._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&ar(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function z3(t,e,n=!1){if(br(t.app))return Promise.reject(bi(t));const r="signIn",i=await NC(t,r,e),s=await uo._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}function W3(t,e,n,r){return It(t).onIdTokenChanged(e,n,r)}function H3(t,e,n){return It(t).beforeAuthStateChanged(e,n)}function q3(t,e,n,r){return It(t).onAuthStateChanged(e,n,r)}function K3(t){return It(t).signOut()}const Gc="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OC{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Gc,"1"),this.storage.removeItem(Gc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G3=1e3,Q3=10;class LC extends OC{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=RC(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);I3()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Q3):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},G3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}LC.type="LOCAL";const Y3=LC;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MC extends OC{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}MC.type="SESSION";const jC=MC;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X3(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wh{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Wh(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,s)),l=await X3(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Wh.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uy(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J3{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const c=Uy("",20);i.port1.start();const h=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(f){const p=f;if(p.data.eventId===c)switch(p.data.status){case"ack":clearTimeout(h),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(p.data.response);break;default:clearTimeout(h),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vn(){return window}function Z3(t){Vn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FC(){return typeof Vn().WorkerGlobalScope<"u"&&typeof Vn().importScripts=="function"}async function ej(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function tj(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function nj(){return FC()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UC="firebaseLocalStorageDb",rj=1,Qc="firebaseLocalStorage",BC="fbase_key";class Rl{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Hh(t,e){return t.transaction([Qc],e?"readwrite":"readonly").objectStore(Qc)}function ij(){const t=indexedDB.deleteDatabase(UC);return new Rl(t).toPromise()}function fm(){const t=indexedDB.open(UC,rj);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Qc,{keyPath:BC})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Qc)?e(r):(r.close(),await ij(),e(await fm()))})})}async function Mw(t,e,n){const r=Hh(t,!0).put({[BC]:e,value:n});return new Rl(r).toPromise()}async function sj(t,e){const n=Hh(t,!1).get(e),r=await new Rl(n).toPromise();return r===void 0?null:r.value}function jw(t,e){const n=Hh(t,!0).delete(e);return new Rl(n).toPromise()}const oj=800,aj=3;class $C{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await fm(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>aj)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return FC()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Wh._getInstance(nj()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await ej(),!this.activeServiceWorker)return;this.sender=new J3(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||tj()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await fm();return await Mw(e,Gc,"1"),await jw(e,Gc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Mw(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>sj(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>jw(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Hh(i,!1).getAll();return new Rl(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),oj)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}$C.type="LOCAL";const lj=$C;new Cl(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uj(t,e){return e?qn(e):(J(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class By extends VC{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return js(e,this._buildIdpRequest())}_linkToIdToken(e,n){return js(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return js(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function cj(t){return z3(t.auth,new By(t),t.bypassAuthState)}function hj(t){const{auth:e,user:n}=t;return J(n,e,"internal-error"),$3(n,new By(t),t.bypassAuthState)}async function dj(t){const{auth:e,user:n}=t;return J(n,e,"internal-error"),B3(n,new By(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zC{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return cj;case"linkViaPopup":case"linkViaRedirect":return dj;case"reauthViaPopup":case"reauthViaRedirect":return hj;default:ar(this.auth,"internal-error")}}resolve(e){lr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){lr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fj=new Cl(2e3,1e4);class As extends zC{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,As.currentPopupAction&&As.currentPopupAction.cancel(),As.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return J(e,this.auth,"internal-error"),e}async onExecution(){lr(this.filter.length===1,"Popup operations only handle one event");const e=Uy();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(bn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(bn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,As.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(bn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,fj.get())};e()}}As.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pj="pendingRedirect",Qu=new Map;class mj extends zC{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Qu.get(this.auth._key());if(!e){try{const r=await gj(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Qu.set(this.auth._key(),e)}return this.bypassAuthState||Qu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function gj(t,e){const n=_j(e),r=vj(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function yj(t,e){Qu.set(t._key(),e)}function vj(t){return qn(t._redirectPersistence)}function _j(t){return Gu(pj,t.config.apiKey,t.name)}async function wj(t,e,n=!1){if(br(t.app))return Promise.reject(bi(t));const r=jy(t),i=uj(r,e),o=await new mj(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ej=10*60*1e3;class Tj{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!xj(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!WC(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(bn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Ej&&this.cachedEventUids.clear(),this.cachedEventUids.has(Fw(e))}saveEventToCache(e){this.cachedEventUids.add(Fw(e)),this.lastProcessedEventTime=Date.now()}}function Fw(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function WC({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function xj(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return WC(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sj(t,e={}){return So(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ij=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Pj=/^https?/;async function Cj(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Sj(t);for(const n of e)try{if(Aj(n))return}catch{}ar(t,"unauthorized-domain")}function Aj(t){const e=hm(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Pj.test(n))return!1;if(Ij.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rj=new Cl(3e4,6e4);function Uw(){const t=Vn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function kj(t){return new Promise((e,n)=>{var r,i,s;function o(){Uw(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Uw(),n(bn(t,"network-request-failed"))},timeout:Rj.get()})}if(!((i=(r=Vn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Vn().gapi)===null||s===void 0)&&s.load)o();else{const a=N3("iframefcb");return Vn()[a]=()=>{gapi.load?o():n(bn(t,"network-request-failed"))},V3(`${D3()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Yu=null,e})}let Yu=null;function bj(t){return Yu=Yu||kj(t),Yu}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vj=new Cl(5e3,15e3),Dj="__/auth/iframe",Nj="emulator/auth/iframe",Oj={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Lj=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Mj(t){const e=t.config;J(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Ny(e,Nj):`https://${t.config.authDomain}/${Dj}`,r={apiKey:e.apiKey,appName:t.name,v:vo},i=Lj.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${_l(r).slice(1)}`}async function jj(t){const e=await bj(t),n=Vn().gapi;return J(n,t,"internal-error"),e.open({where:document.body,url:Mj(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Oj,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=bn(t,"network-request-failed"),a=Vn().setTimeout(()=>{s(o)},Vj.get());function l(){Vn().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fj={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Uj=500,Bj=600,$j="_blank",zj="http://localhost";class Bw{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Wj(t,e,n,r=Uj,i=Bj){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},Fj),{width:r.toString(),height:i.toString(),top:s,left:o}),c=vt().toLowerCase();n&&(a=SC(c)?$j:n),TC(c)&&(e=e||zj,l.scrollbars="yes");const h=Object.entries(l).reduce((p,[y,S])=>`${p}${y}=${S},`,"");if(S3(c)&&a!=="_self")return Hj(e||"",a),new Bw(null);const f=window.open(e||"",a,h);J(f,t,"popup-blocked");try{f.focus()}catch{}return new Bw(f)}function Hj(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qj="__/auth/handler",Kj="emulator/auth/handler",Gj=encodeURIComponent("fac");async function $w(t,e,n,r,i,s){J(t.config.authDomain,t,"auth-domain-config-required"),J(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:vo,eventId:i};if(e instanceof DC){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",KO(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,f]of Object.entries({}))o[h]=f}if(e instanceof Al){const h=e.getScopes().filter(f=>f!=="");h.length>0&&(o.scopes=h.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const h of Object.keys(a))a[h]===void 0&&delete a[h];const l=await t._getAppCheckToken(),c=l?`#${Gj}=${encodeURIComponent(l)}`:"";return`${Qj(t)}?${_l(a).slice(1)}${c}`}function Qj({config:t}){return t.emulator?Ny(t,Kj):`https://${t.authDomain}/${qj}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mf="webStorageSupport";class Yj{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=jC,this._completeRedirectFn=wj,this._overrideRedirectResult=yj}async _openPopup(e,n,r,i){var s;lr((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await $w(e,n,r,hm(),i);return Wj(e,o,Uy())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await $w(e,n,r,hm(),i);return Z3(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(lr(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await jj(e),r=new Tj(e);return n.register("authEvent",i=>(J(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(mf,{type:mf},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[mf];o!==void 0&&n(!!o),ar(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Cj(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return RC()||xC()||My()}}const Xj=Yj;var zw="@firebase/auth",Ww="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jj{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){J(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zj(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function eF(t){eo(new $i("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;J(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:kC(t)},c=new k3(r,i,s,l);return L3(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),eo(new $i("auth-internal",e=>{const n=jy(e.getProvider("auth").getImmediate());return(r=>new Jj(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),zr(zw,Ww,Zj(t)),zr(zw,Ww,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tF=5*60,nF=MI("authIdTokenMaxAge")||tF;let Hw=null;const rF=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>nF)return;const i=n==null?void 0:n.token;Hw!==i&&(Hw=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function iF(t=BI()){const e=Gg(t,"auth");if(e.isInitialized())return e.getImmediate();const n=O3(t,{popupRedirectResolver:Xj,persistence:[lj,Y3,jC]}),r=MI("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=rF(s.toString());H3(n,o,()=>o(n.currentUser)),W3(n,a=>o(a))}}const i=OI("auth");return i&&M3(n,`http://${i}`),n}function sF(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}b3({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=bn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",sF().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});eF("Browser");const oF={apiKey:"AIzaSyDszU29OvzBBkeG7Ojlw7mRJsB-i3qA2Yk",authDomain:"uscreativ-devz.firebaseapp.com",projectId:"uscreativ-devz",storageBucket:"uscreativ-devz.appspot.com",messagingSenderId:"309170960642",appId:"1:309170960642:web:eb1a529dcd56dc6ffa6a1b",measurementId:"G-P0NXZ2TXPS"},HC=UI(oF),tn=$6(HC),gf=iF(HC),aF=Hx`
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;Hx`
0% {
  box-shadow: 0 0 0 0 rgba(255, 107, 107, 0.6);
}
100% {
  box-shadow: 0 0 0 30px rgba(255, 107, 107, 0);
}
`;const qC={hidden:{opacity:0,scale:.8},visible:{opacity:1,scale:1},exit:{opacity:0,scale:.8}},lF=j.div`
  padding: 1rem;
  border-radius: 8px;
  background-color: ${({type:t})=>t==="success"?"#28a745":t==="error"?"#dc3545":"#17a2b8"};
  color: white;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  width: 80%;
  max-width: 400px;
  text-align: center;

  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  animation: ${aF} 1s ease-in forwards;
`,uF=({message:t,type:e})=>{const{closeAlert:n}=Ji();return g.jsx(lF,{type:e,onClick:n,children:g.jsx("p",{children:t})})},cF=j.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`,hF=j.div`
  background-color: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  width: 90%;
  max-width: 400px;
  text-align: center;
`,KC=j.button`
  background-color: green;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  margin: 0 0.5rem;

  &:hover {
    background-color: '#0056b3';
  }
`,dF=j(KC)`
  background-color: #dc3545;

  &:hover {
    background-color: #c82333;
  }
`,fF=({message:t,onConfirm:e,onCancel:n})=>g.jsx(cF,{children:g.jsxs(hF,{children:[g.jsx("p",{children:t}),g.jsxs("div",{children:[g.jsx(KC,{onClick:e,children:"Confirm"}),g.jsx(dF,{onClick:n,children:"Cancel"})]})]})});var GC={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},qw=$t.createContext&&$t.createContext(GC),pF=["attr","size","title"];function mF(t,e){if(t==null)return{};var n=gF(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function gF(t,e){if(t==null)return{};var n={};for(var r in t)if(Object.prototype.hasOwnProperty.call(t,r)){if(e.indexOf(r)>=0)continue;n[r]=t[r]}return n}function Yc(){return Yc=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Yc.apply(this,arguments)}function Kw(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function Xc(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Kw(Object(n),!0).forEach(function(r){yF(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Kw(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function yF(t,e,n){return e=vF(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function vF(t){var e=_F(t,"string");return typeof e=="symbol"?e:e+""}function _F(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function QC(t){return t&&t.map((e,n)=>$t.createElement(e.tag,Xc({key:n},e.attr),QC(e.child)))}function At(t){return e=>$t.createElement(wF,Yc({attr:Xc({},t.attr)},e),QC(t.child))}function wF(t){var e=n=>{var{attr:r,size:i,title:s}=t,o=mF(t,pF),a=i||n.size||"1em",l;return n.className&&(l=n.className),t.className&&(l=(l?l+" ":"")+t.className),$t.createElement("svg",Yc({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,o,{className:l,style:Xc(Xc({color:t.color||n.color},n.style),t.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),s&&$t.createElement("title",null,s),t.children)};return qw!==void 0?$t.createElement(qw.Consumer,null,n=>e(n)):e(GC)}function YC(t){return At({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M576 64H205.26A63.97 63.97 0 0 0 160 82.75L9.37 233.37c-12.5 12.5-12.5 32.76 0 45.25L160 429.25c12 12 28.28 18.75 45.25 18.75H576c35.35 0 64-28.65 64-64V128c0-35.35-28.65-64-64-64zm-84.69 254.06c6.25 6.25 6.25 16.38 0 22.63l-22.62 22.62c-6.25 6.25-16.38 6.25-22.63 0L384 301.25l-62.06 62.06c-6.25 6.25-16.38 6.25-22.63 0l-22.62-22.62c-6.25-6.25-6.25-16.38 0-22.63L338.75 256l-62.06-62.06c-6.25-6.25-6.25-16.38 0-22.63l22.62-22.62c6.25-6.25 16.38-6.25 22.63 0L384 210.75l62.06-62.06c6.25-6.25 16.38-6.25 22.63 0l22.62 22.62c6.25 6.25 6.25 16.38 0 22.63L429.25 256l62.06 62.06z"},child:[]}]})(t)}function EF(t){return At({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64zm215.39-149.71c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71z"},child:[]}]})(t)}function pm(t){return At({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M320 336c0 8.84-7.16 16-16 16h-96c-8.84 0-16-7.16-16-16v-48H0v144c0 25.6 22.4 48 48 48h416c25.6 0 48-22.4 48-48V288H320v48zm144-208h-80V80c0-25.6-22.4-48-48-48H176c-25.6 0-48 22.4-48 48v48H48c-25.6 0-48 22.4-48 48v80h512v-80c0-25.6-22.4-48-48-48zm-144 0H192V96h128v32z"},child:[]}]})(t)}function yf(t){return At({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M496 384H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v336c0 17.67 14.33 32 32 32h464c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zM464 96H345.94c-21.38 0-32.09 25.85-16.97 40.97l32.4 32.4L288 242.75l-73.37-73.37c-12.5-12.5-32.76-12.5-45.25 0l-68.69 68.69c-6.25 6.25-6.25 16.38 0 22.63l22.62 22.62c6.25 6.25 16.38 6.25 22.63 0L192 237.25l73.37 73.37c12.5 12.5 32.76 12.5 45.25 0l96-96 32.4 32.4c15.12 15.12 40.97 4.41 40.97-16.97V112c.01-8.84-7.15-16-15.99-16z"},child:[]}]})(t)}function TF(t){return At({tag:"svg",attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M336 64h-80c0-35.3-28.7-64-64-64s-64 28.7-64 64H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM192 40c13.3 0 24 10.7 24 24s-10.7 24-24 24-24-10.7-24-24 10.7-24 24-24zm121.2 231.8l-143 141.8c-4.7 4.7-12.3 4.6-17-.1l-82.6-83.3c-4.7-4.7-4.6-12.3.1-17L99.1 285c4.7-4.7 12.3-4.6 17 .1l46 46.4 106-105.2c4.7-4.7 12.3-4.6 17 .1l28.2 28.4c4.7 4.8 4.6 12.3-.1 17z"},child:[]}]})(t)}function xF(t){return At({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M416 192c0-88.4-93.1-160-208-160S0 103.6 0 192c0 34.3 14.1 65.9 38 92-13.4 30.2-35.5 54.2-35.8 54.5-2.2 2.3-2.8 5.7-1.5 8.7S4.8 352 8 352c36.6 0 66.9-12.3 88.7-25 32.2 15.7 70.3 25 111.3 25 114.9 0 208-71.6 208-160zm122 220c23.9-26 38-57.7 38-92 0-66.9-53.5-124.2-129.3-148.1.9 6.6 1.3 13.3 1.3 20.1 0 105.9-107.7 192-240 192-10.8 0-21.3-.8-31.7-1.9C207.8 439.6 281.8 480 368 480c41 0 79.1-9.2 111.3-25 21.8 12.7 52.1 25 88.7 25 3.2 0 6.1-1.9 7.3-4.8 1.3-2.9.7-6.3-1.5-8.7-.3-.3-22.4-24.2-35.8-54.5z"},child:[]}]})(t)}function SF(t){return At({tag:"svg",attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zM64 72c0-4.42 3.58-8 8-8h80c4.42 0 8 3.58 8 8v16c0 4.42-3.58 8-8 8H72c-4.42 0-8-3.58-8-8V72zm0 64c0-4.42 3.58-8 8-8h80c4.42 0 8 3.58 8 8v16c0 4.42-3.58 8-8 8H72c-4.42 0-8-3.58-8-8v-16zm192.81 248H304c8.84 0 16 7.16 16 16s-7.16 16-16 16h-47.19c-16.45 0-31.27-9.14-38.64-23.86-2.95-5.92-8.09-6.52-10.17-6.52s-7.22.59-10.02 6.19l-7.67 15.34a15.986 15.986 0 0 1-14.31 8.84c-.38 0-.75-.02-1.14-.05-6.45-.45-12-4.75-14.03-10.89L144 354.59l-10.61 31.88c-5.89 17.66-22.38 29.53-41 29.53H80c-8.84 0-16-7.16-16-16s7.16-16 16-16h12.39c4.83 0 9.11-3.08 10.64-7.66l18.19-54.64c3.3-9.81 12.44-16.41 22.78-16.41s19.48 6.59 22.77 16.41l13.88 41.64c19.77-16.19 54.05-9.7 66 14.16 2.02 4.06 5.96 6.5 10.16 6.5zM377 105L279.1 7c-4.5-4.5-10.6-7-17-7H256v128h128v-6.1c0-6.3-2.5-12.4-7-16.9z"},child:[]}]})(t)}function IF(t){return At({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 255.531c.253 136.64-111.18 248.372-247.82 248.468-59.015.042-113.223-20.53-155.822-54.911-11.077-8.94-11.905-25.541-1.839-35.607l11.267-11.267c8.609-8.609 22.353-9.551 31.891-1.984C173.062 425.135 212.781 440 256 440c101.705 0 184-82.311 184-184 0-101.705-82.311-184-184-184-48.814 0-93.149 18.969-126.068 49.932l50.754 50.754c10.08 10.08 2.941 27.314-11.313 27.314H24c-8.837 0-16-7.163-16-16V38.627c0-14.254 17.234-21.393 27.314-11.314l49.372 49.372C129.209 34.136 189.552 8 256 8c136.81 0 247.747 110.78 248 247.531zm-180.912 78.784l9.823-12.63c8.138-10.463 6.253-25.542-4.21-33.679L288 256.349V152c0-13.255-10.745-24-24-24h-16c-13.255 0-24 10.745-24 24v135.651l65.409 50.874c10.463 8.137 25.541 6.253 33.679-4.21z"},child:[]}]})(t)}function PF(t){return At({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"},child:[]}]})(t)}function CF(t){return At({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"},child:[]}]})(t)}function AF(t){return At({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M139.61 35.5a12 12 0 0 0-17 0L58.93 98.81l-22.7-22.12a12 12 0 0 0-17 0L3.53 92.41a12 12 0 0 0 0 17l47.59 47.4a12.78 12.78 0 0 0 17.61 0l15.59-15.62L156.52 69a12.09 12.09 0 0 0 .09-17zm0 159.19a12 12 0 0 0-17 0l-63.68 63.72-22.7-22.1a12 12 0 0 0-17 0L3.53 252a12 12 0 0 0 0 17L51 316.5a12.77 12.77 0 0 0 17.6 0l15.7-15.69 72.2-72.22a12 12 0 0 0 .09-16.9zM64 368c-26.49 0-48.59 21.5-48.59 48S37.53 464 64 464a48 48 0 0 0 0-96zm432 16H208a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h288a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-320H208a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h288a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16zm0 160H208a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h288a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z"},child:[]}]})(t)}function XC(t){return At({tag:"svg",attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"},child:[]}]})(t)}function JC(t){return At({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"},child:[]}]})(t)}const ZC=N.createContext(void 0),Ji=()=>{const t=N.useContext(ZC);if(!t)throw new Error("useAlert must be used within a AlertProvider");return t},RF=({children:t})=>{const[e,n]=N.useState(null),[r,i]=N.useState(!1),[s,o]=N.useState(!0),a=(h,f="info")=>{n(g.jsx(uF,{message:h,type:f})),i(!0)},l=(h,f,p)=>{n(g.jsx(fF,{message:h,onConfirm:()=>{f(),c()},onCancel:()=>{p&&p(),c()}})),i(!0)},c=()=>{i(!1),n(null)};return g.jsxs(ZC.Provider,{value:{showNotification:a,showConfirmation:l,closeAlert:c,isVisible:r,isNotice:s,setIsNotice:o},children:[t,r&&g.jsxs(kF,{initial:"hidden",animate:"visible",exit:"exit",variants:qC,children:[e,g.jsx("div",{className:"close",children:g.jsx(YC,{onClick:c})})]})]})},kF=j(pe.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  z-index: 1000;

  .close {
    background: ${G.dark};
    color: ${G.white};
    padding: 0.1rem 0.5rem;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
    border-radius: 0.5rem;
    transition: 0.3s ease-in-out;
    cursor: pointer;

    &:hover {
      scale: 1.05;
      background: ${G.primary};
    }
  }
`,bF=()=>{const[t,e]=N.useState(!1),{setIsNotice:n}=Ji(),{closePopup:r}=tA();N.useEffect(()=>{n(!1),localStorage.getItem("betaAgreementAccepted")&&r()},[]);const i=()=>{localStorage.setItem("betaAgreementAccepted","true"),r()};return g.jsxs(VF,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.6},children:[g.jsx("h2",{children:"Welcome to the Beta Version of UsCreativz"}),g.jsx("p",{children:"You're accessing a platform that is currently in development. Please be aware that this version may contain bugs, missing features, and performance issues."}),g.jsxs(DF,{children:[g.jsx("strong",{children:"Key Information:"}),g.jsxs("ul",{children:[g.jsx("li",{children:'This beta is provided "as is" with no guarantees of full functionality.'}),g.jsx("li",{children:"We are actively gathering feedback to improve the service."}),g.jsx("li",{children:"Your data may be subject to changes, interruptions, or loss during this phase."}),g.jsx("li",{children:"Any actions or uploads on this platform should be considered at your own risk."})]}),g.jsxs("p",{children:["By accepting, you agree to our ",g.jsx("a",{href:"https://uscreativz.com/terms",target:"_blank",children:"Terms and Conditions"})," and ",g.jsx("a",{href:"https://uscreativz.com/privacy",target:"_blank",children:"Privacy Policy"}),", which outline your rights and responsibilities, data handling, and potential risks during the beta phase."]}),g.jsx("p",{children:"Note: We may collect certain data to improve our platform, but we will handle your information securely and in accordance with our privacy policy."})]}),g.jsxs(NF,{children:[g.jsx(OF,{type:"checkbox",id:"terms",checked:t,onChange:()=>e(!t)}),g.jsxs("label",{htmlFor:"terms",children:["I acknowledge the risks and accept the"," ",g.jsx("a",{href:"https://uscreativz.com/terms",target:"_blank",children:"Terms and Conditions"})," and"," ",g.jsx("a",{href:"https://uscreativz.com/privacy",target:"_blank",children:"Privacy Policy"}),"."]})]}),g.jsx(LF,{children:g.jsx(MF,{whileHover:{scale:1.05},whileTap:{scale:.95},onClick:i,disabled:!t,children:"Accept and Proceed"})})]})},VF=j(pe.div)`
  width: 100%;
  max-width: 600px;
  padding: 2rem;
  background: ${G.primary};
  border-radius: 16px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
  color: white;
  font-family: "SF Pro Text", Arial, sans-serif;
  overflow-y: auto;

  h2 {
    margin-bottom: 1.5rem;
    font-size: 1.75rem;
    text-align: center;
  }

  p {
    font-size: 1rem;
    text-align: center;
    margin-bottom: 1.5rem;
    color: #fff;
  }
`,DF=j.div`
  background-color: rgba(255, 255, 255, 0.1);
  padding: 1.5rem;
  border-radius: 8px;
  margin-bottom: 1.5rem;
  overflow-y: auto;
  font-size: 0.85rem;
  line-height: 1.5;
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: #ffffffa1;

  ul {
    margin-top: 1rem;
    margin-bottom: 1rem;
    padding-left: 20px;
  }

  li {
    margin-bottom: 0.5rem;
  }

  a {
    color: #f692a3;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(255, 255, 255, 0.3);
    border-radius: 4px;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
`,NF=j.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.9rem;

  a {
    color: #f692a3;
    text-decoration: none;
  }
`,OF=j.input`
  width: 1.25rem;
  height: 1.25rem;
`,LF=j.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`,MF=j(pe.button)`
  padding: 1rem 2rem;
  background-color: ${({disabled:t})=>t?"#7f7f7f":"#222"};
  color: ${({disabled:t})=>t?"#ddd":"#fff"};
  border: none;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);

  &:hover {
    background-color: ${({disabled:t})=>t?"#7f7f7f":"#ed2647"};
  }
`,eA=N.createContext(void 0),tA=()=>{const t=N.useContext(eA);if(!t)throw new Error("usePopup must be used within a PopupProvider");return t},jF=({children:t})=>{const{popup:e}=kl(),[n,r]=N.useState(null),[i,s]=N.useState(!1),{setIsNotice:o}=Ji();N.useEffect(()=>{a(g.jsx(bF,{}))},[]),N.useEffect(()=>{e&&a(e)},[e]);const a=c=>{r(c),s(!0)},l=()=>{s(!1),r(null),o(!0)};return g.jsxs(eA.Provider,{value:{openPopup:a,closePopup:l,isVisible:i,popupContent:n},children:[t,i&&g.jsxs(FF,{initial:"hidden",animate:"visible",exit:"exit",variants:qC,children:[g.jsx(UF,{children:n}),g.jsx("div",{className:"close",children:g.jsx(YC,{onClick:l})})]})]})},FF=j(pe.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  z-index: 1000;

  .close {
  font-size: 1.2rem;
  color: #fff;
  transition: 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
  scale: 1.1;
  color: #ed2647;
  }
  }
`,UF=j(pe.div)`
  width: 95%;
  height: 95vh;
  display: flex;
  justify-content: center;
  border-radius: 5px;
  padding 1rem;
  backdrop-filter: blur(0.1rem);
  font-family: "Comic Neue", sans-serif;

  overflow-y: auto;
`,BF=j.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: linear-gradient(45deg, #000, #222, #666);
  padding: 2rem;
  font-family: "Poppins", sans-serif;
`,$F=j.h1`
  font-size: 2rem;
  margin-bottom: 1.5rem;
  text-align: center;
  color: #222;
`,zF=j.form`
  background: rgba(255, 255, 255, 0.1);
  padding: 3rem;
  border-radius: 2rem;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  width: 100%;
  max-width: 500px;
  backdrop-filter: blur(10px);
`,Gw=j(pe.input)`
  padding: 1rem;
  border: none;
  border-radius: 10px;
  width: 100%;
  background: #7f7f7f;
  color: white;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  font-size: 1rem;
  &:focus {
    outline: none;
    border: 2px solid #ff6f91;
  }
`,WF=j(pe.select)`
  padding: 1rem;
  border: none;
  border-radius: 10px;
  width: 100%;
 background: #7f7f7f;
      color: #fff;
  font-size: 1rem;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  &:focus {
    outline: none;
     background: #222;
      color: #f692a3;

  }
`,nA=j.div`
  width: 100%;
  color: #f692a3;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin: 1rem 0;

  input {
  margin-right: 0.5rem;
  }
`,rA=j.label`
  font-size: 1rem;
  padding: 0.5rem;
  background: #fff;
  color: #ed2647;
  text-align: center;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
`,HF=j(nA)`

`,qF=j(rA)`

`,KF=j(pe.button)`
  padding: 1rem 2.5rem;
  background: #fff;
  border: none;
  color: #222;
  border-radius: 50px;
  font-size: 1.2rem;
  cursor: pointer;
  margin-top: 1rem;

  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;

  &:hover {
    background: #e63946;
    color: #fff;
  }

  &:disabled {
    background: #aaa;
    cursor: not-allowed;
  }
`,GF=j(pe.div).attrs(({progress:t})=>({style:{width:`${t}%`}}))`
  background: #e63946;
  height: 10px;
  border-radius: 5px;
  margin-top: 1rem;
  transition: width 0.5s ease-in-out;
`,QF=()=>{const{user:t,fbUser:e,login:n}=kl(),{closePopup:r}=tA(),[i,s]=N.useState((e==null?void 0:e.displayName)||""),[o,a]=N.useState(""),[l,c]=N.useState([]),[h,f]=N.useState(""),[p,y]=N.useState(""),[S,I]=N.useState(!1),[R,v]=N.useState(0);N.useEffect(()=>{t!=null&&t.uid&&r()},[t]);const w=["Individual","Business"],x=["Web","Mobile"],V=["Design","Development","Content Creation"],O=T=>{l.includes(T)?c(l.filter(_=>_!==T)):c([...l,T])},M=async T=>{if(T.preventDefault(),!!(e!=null&&e.uid)){I(!0),v(50);try{const _={uid:e==null?void 0:e.uid,name:i,role:o,interests:l,platformPreference:h,registered:!0,credits:1e4};await by(Hr(xo(tn,"users"),e.uid),_),v(100),n()}catch(_){y(`Error: ${_.message}`),v(0)}finally{I(!1)}}};return g.jsxs(BF,{children:[g.jsx($F,{children:"Complete Your Profile"}),g.jsxs(zF,{onSubmit:M,children:[p&&g.jsx("p",{style:{color:"red"},children:p}),g.jsx(Gw,{type:"email",value:(e==null?void 0:e.email)||"Not Authorized",disabled:!0,required:!0}),g.jsx(Gw,{type:"text",value:i,onChange:T=>s(T.target.value),placeholder:(e==null?void 0:e.displayName)||"Not Authorized",disabled:!(e!=null&&e.uid),required:!0}),g.jsxs(WF,{value:o,onChange:T=>a(T.target.value),whileFocus:{scale:1.05},disabled:!(e!=null&&e.uid),required:!0,children:[g.jsx("option",{value:"",disabled:!0,children:"Select your role"}),w.map(T=>g.jsx("option",{value:T,children:T},T))]}),g.jsxs(nA,{children:[g.jsx(rA,{children:"Preferred Platform:"}),x.map(T=>g.jsxs("label",{children:[g.jsx("input",{type:"radio",name:"platform",value:T,checked:h===T,onChange:_=>f(_.target.value),disabled:!(e!=null&&e.uid),required:!0}),T]},T))]}),g.jsxs(HF,{children:[g.jsx(qF,{children:"Interests:"}),V.map(T=>g.jsxs("label",{children:[g.jsx("input",{type:"checkbox",value:T,checked:l.includes(T),onChange:()=>O(T),disabled:!(e!=null&&e.uid)}),T]},T))]}),g.jsx(KF,{type:"submit",whileHover:{scale:1.05},whileTap:{scale:.95},disabled:!(e!=null&&e.uid)||S,children:S?"Saving...":"Complete Profile"}),g.jsx(GF,{progress:R,initial:{width:0},animate:{width:`${R}%`}})]})]})},YF=async t=>{try{const e=Hr(tn,"users",t),n=await ol(e);return n.exists()?n.data().projects||[]:(console.log("No user document found!"),[])}catch(e){throw console.error("Error fetching all projects:",e),new Error("Failed to fetch all projects.")}},XF=async t=>{try{const e=Hr(tn,"users",t),n=await ol(e);if(n.exists()){const i=(n.data().projects||[]).filter(s=>!s.linkID);return console.log("Fetched unlinked projects:",i),i}else return console.log("No user document found!"),[]}catch(e){throw console.error("Error fetching unlinked projects:",e),new Error("Failed to fetch unlinked projects.")}},JF=async t=>{try{const e=Hr(tn,"users",t),n=await ol(e);return n.exists()?(n.data().projects||[]).filter(i=>typeof i.linkID=="string"&&i.linkID.length>0):(console.log("No such user document found."),[])}catch(e){throw console.error("Error fetching linked projects:",e),new Error("Failed to fetch linked projects.")}},ZF=async(t,e,n)=>{try{const r=Hr(xo(tn,"contracts")),i={...t,clientUID:e,freelancerUID:n,createdAt:Date.now(),status:"pending"};return await by(r,i),console.log("Contract created successfully:",r.id),r.id}catch(r){throw console.error("Error creating contract:",r),new Error("Contract creation failed")}},iA=async t=>{try{const e=xo(tn,"users",t,"contractus_notifications");return(await ky(e)).docs.map(i=>i.data())}catch(e){return console.error("Error fetching notifications:",e),[]}},e9=async t=>{try{const e=[],n=[],r=[],i=xo(tn,"contracts"),s=aC(i,lC("clientUID","==",t));return(await ky(s)).docs.forEach(a=>{const l=a.data();l.status==="pending"?e.push(l):l.status==="active"?n.push(l):l.status==="completed"&&r.push(l)}),{notifications:await iA(t),pendingServices:e,activeServices:n,completedServices:r}}catch(e){return console.error("Error fetching client contracts:",e),{notifications:[],pendingServices:[],activeServices:[],completedServices:[]}}},t9=async t=>{try{const e=[],n=[],r=[],i=xo(tn,"contracts"),s=aC(i,lC("freelancerUID","==",t));return(await ky(s)).docs.forEach(a=>{const l=a.data();l.status==="pending"?e.push(l):l.status==="active"?n.push(l):l.status==="completed"&&r.push(l)}),{notifications:await iA(t),pendingContracts:e,activeContracts:n,completedContracts:r}}catch(e){return console.error("Error fetching freelancer contracts:",e),{notifications:[],pendingContracts:[],activeContracts:[],completedContracts:[]}}},n9=async(t,e)=>e==="freelancer"?await t9(t):await e9(t),r9={client:{notifications:[{type:"Job Posted",message:"Your job has been posted.",timestamp:1696768567},{type:"Milestone Completed",message:"Freelancer completed a milestone.",timestamp:1696758567}],pendingServices:[{id:"1",status:"Pending",title:"Landing Page Design",consultation:{category:"Web Design",skills:["HTML","CSS","JavaScript"],experience:"Intermediate",requirements:["Responsive Design","SEO Optimization"]}}],activeServices:[{id:"2",status:"In Progress",title:"Portfolio Website",consultation:{category:"Web Development",skills:["React","TypeScript"],experience:"Advanced",requirements:["Animations","Cross-browser compatibility"]},proposal:{milestones:[{title:"Initial Design",description:"Create wireframes",budget:"$500",deadline:1698781567,status:"Completed"},{title:"Development",description:"Develop main site",budget:"$1500",deadline:1699992567,status:"In Progress"}],totalBudget:2e3,currency:"USD"},signitures:{client:"Client123",freelancer:"Freelancer456"}}],completedServices:[{id:"3",status:"Completed",title:"Business Card Design",consultation:{category:"Graphic Design",skills:["Photoshop","Illustrator"],experience:"Beginner",requirements:["Minimalist Design","Print-ready"]},review:{feedback:"Great work!",rating:5}}]},freelancer:{notifications:[{type:"Job Application",message:"Your application has been received.",timestamp:1696768567}],pendingContracts:[{id:"4",status:"Pending",title:"Brand Logo Design",consultation:{category:"Graphic Design",skills:["Illustrator","Photoshop"],experience:"Intermediate",requirements:["Logo Variants","Color Guide"]}}],activeContracts:[{id:"5",status:"In Progress",title:"Mobile App UI",consultation:{category:"UI/UX Design",skills:["Figma","Sketch"],experience:"Advanced",requirements:["High-fidelity mockups","User testing"]},proposal:{milestones:[{title:"Wireframes",description:"Low-fidelity wireframes",budget:"$600",deadline:1698882567,status:"Completed"},{title:"High-fidelity",description:"Design main screens",budget:"$1200",deadline:1699992567,status:"In Progress"}],totalBudget:1800,currency:"USD"},signitures:{client:"Client789",freelancer:"Freelancer123"}}],completedContracts:[{id:"6",status:"Completed",title:"E-Commerce Website",consultation:{category:"Web Development",skills:["Shopify","Liquid"],experience:"Expert",requirements:["Custom Theme","Payment Integration"]},review:{feedback:"Excellent work!",rating:5}}]}},sA=N.createContext(void 0),kl=()=>{const t=N.useContext(sA);if(!t)throw new Error("useUser must be used within a UserProvider");return t},i9=({children:t})=>{const{showNotification:e}=Ji(),[n,r]=N.useState({}),[i,s]=N.useState(gf.currentUser),[o,a]=N.useState([]),[l,c]=N.useState([]),[h,f]=N.useState([]),[p,y]=N.useState(null),[S,I]=N.useState(null),[R,v]=N.useState(!1);N.useEffect(()=>{(async()=>{!r9||!n.uid||!n.role||(v(!0),await new Promise(b=>setTimeout(b,1e3)),y(await n9(n.uid,n.role)),v(!1))})()},[n]),N.useEffect(()=>{const A=q3(gf,b=>{s(b)});return()=>A()},[]),N.useEffect(()=>{const A=r3(xo(tn,"creditTransactions"),()=>{O()},b=>{console.error("Error fetching transactions:",b)});return()=>A()},[]),N.useEffect(()=>{i!=null&&i.uid&&O()},[i]),N.useEffect(()=>{n!=null&&n.uid&&P()},[n]);const w=async A=>{v(!0);try{await A()}catch(b){e(b==null?void 0:b.message,"error")}finally{v(!1)}},x=async()=>{await O()},V=async()=>{await w(async()=>{await K3(gf),r({})})},O=async()=>{await w(async()=>{if(!(i!=null&&i.uid))return;const b=Hr(tn,"users",i==null?void 0:i.uid),k=await ol(b);if(k.exists()){const we=k.data();r(we)}})},M=async A=>{try{if(!(n!=null&&n.uid))throw new Error("User is not authenticated");await by(Hr(tn,"users",n.uid),A,{merge:!0}),await O()}catch(b){console.error("Error updating user:",b)}},T=async A=>{if(!(A!=null&&A.uid)){e("User Not Registered","error");return}x()},_=async A=>{const b=(A==null?void 0:A.uid)||(i==null?void 0:i.uid);if(!b)return;await w(async()=>{const we=await ol(Hr(tn,"users",b));we.exists()?await T(we.data()):I(g.jsx(QF,{}))})},P=async()=>{if(n!=null&&n.uid)try{const A=await YF(n.uid);a(A);const b=await XF(n.uid);c(b);const k=await JF(n.uid);f(k)}catch{e("Error fetching projects","error")}},C=async(A,b,k=null)=>A.filter(we=>k&&we.linkID===k||we.type===b);return g.jsx(sA.Provider,{value:{popup:S,user:n,fbUser:i,projects:o,unlinkedProjects:l,linkedProjects:h,userContractData:p,isLoading:R,handleOnboard:T,login:x,updateUser:M,refreshUser:O,fetchUserData:_,fetchProjects:P,filterProjects:C,logout:V},children:t})},Vi=j.section`
  margin-bottom: 30px;
  padding: 20px;
  background: ${G.white};
  border-radius: 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;
  transition: transform 0.3s ease;

  .right {
    width: 50%;
  }

  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;

  &:hover {
    transform: translateY(-5px);
  }
`,Di=j.h2`
  font-size: 24px;
  color: ${G.dark};
  border-bottom: 2px solid ${G.primary};
  padding-bottom: 10px;
  display: flex;
  align-items: center;
  transition: color 0.3s ease;

  &:hover {
    color: ${G.primary};
  }

  & > svg {
    margin-right: 8px;
    color: ${G.primary};
  }
`,Ni=j.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 20px;
`,Oi=j(pe.div)`
  background: ${G.accent};
  color: ${G.dark};
  padding: 15px;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, background 0.3s;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
    background: ${G.primary};
    color: ${G.white};
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  }
`,Li=j.p`
  color: ${G.light};
  text-align: center;
`,s9=({notifications:t=[]})=>g.jsxs(Vi,{className:"right",children:[g.jsxs(Di,{children:[g.jsx(EF,{})," Notifications"]}),(t==null?void 0:t.length)>0?g.jsx(Ni,{children:t.map((e,n)=>g.jsxs(Oi,{whileHover:{scale:1.05},whileTap:{scale:.95},children:["type: ",e.type," | ",e.message," | ",String(new Date(e.timestamp))]},n))}):g.jsx(Li,{children:"No new notifications."})]}),o9=({data:t})=>{const{pendingServices:e=[],activeServices:n=[],completedServices:r=[]}=t||{};return g.jsxs(g.Fragment,{children:[g.jsxs(Vi,{children:[g.jsxs(Di,{children:[g.jsx(pm,{})," Pending Services"]}),e.length>0?g.jsx(Ni,{children:e.map(i=>g.jsxs(Oi,{whileHover:{scale:1.05},whileTap:{scale:.95},children:[g.jsx("h3",{children:i.title}),g.jsxs("p",{children:["Status: ",i.status]})]},i.id))}):g.jsx(Li,{children:"No pending services available."})]}),g.jsxs(Vi,{children:[g.jsxs(Di,{children:[g.jsx(pm,{})," Active Services"]}),n.length>0?g.jsx(Ni,{children:n.map(i=>g.jsxs(Oi,{whileHover:{scale:1.05},whileTap:{scale:.95},children:[g.jsx("h3",{children:i.title}),g.jsxs("p",{children:["Status: ",i.status]})]},i.id))}):g.jsx(Li,{children:"No active services available."})]}),g.jsxs(Vi,{children:[g.jsxs(Di,{children:[g.jsx(IF,{})," Completed Services"]}),r.length>0?g.jsx(Ni,{children:r.map(i=>g.jsxs(Oi,{whileHover:{scale:1.05},whileTap:{scale:.95},children:[g.jsx("h3",{children:i.title}),g.jsxs("p",{children:["Rating: ",i.rating,"⭐"]})]},i.id))}):g.jsx(Li,{children:"No completed services available."})]})]})},a9=({data:t})=>{const{pendingContracts:e=[],activeContracts:n=[],completedContracts:r=[]}=t||{};return g.jsxs(g.Fragment,{children:[g.jsxs(Vi,{children:[g.jsxs(Di,{children:[g.jsx(TF,{})," Pending contracts"]}),e.length>0?g.jsx(Ni,{children:e.map(i=>g.jsxs(Oi,{whileHover:{scale:1.05},whileTap:{scale:.95},children:[g.jsx("h3",{children:i.title}),g.jsxs("p",{children:["Status: ",i.status]})]},i.id))}):g.jsx(Li,{children:"No pending contracts available."})]}),g.jsxs(Vi,{children:[g.jsxs(Di,{children:[g.jsx(pm,{})," Active Contracts"]}),n.length>0?g.jsx(Ni,{children:n.map(i=>g.jsxs(Oi,{whileHover:{scale:1.05},whileTap:{scale:.95},children:[g.jsx("h3",{children:i.title}),g.jsxs("p",{children:["Milestones: ",i.milestones.join(", ")]})]},i.id))}):g.jsx(Li,{children:"No active contracts available."})]}),g.jsxs(Vi,{children:[g.jsxs(Di,{children:[g.jsx(CF,{})," Reviews"]}),r.length>0?g.jsx(Ni,{children:r.map(i=>g.jsx(Oi,{whileHover:{scale:1.05},whileTap:{scale:.95},children:g.jsxs("p",{children:["Job ID: ",i.jobId," - Feedback: ",i.feedback," - Rating:"," ",i.rating,"⭐"]})},i.jobId))}):g.jsx(Li,{children:"No reviews available."})]})]})},l9=()=>{const{user:t,userContractData:e,isLoading:n}=kl(),{role:r}=t,{notifications:i}=e||{};return r?g.jsxs("div",{children:[g.jsxs(c9,{children:[r.toUpperCase(),"'s Dashboard"]}),g.jsxs(u9,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.5},children:[n?g.jsx(Qw,{children:"Loading your dashboard..."}):g.jsx("div",{className:"left-dash",children:r==="freelancer"?g.jsx(a9,{data:e}):g.jsx(o9,{data:e})}),g.jsx(s9,{notifications:i||[]})]})]}):g.jsx(Qw,{children:"INVALID_USER"})},u9=j(pe.div)`
  height: 80vh;
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  padding: 2rem;
  background: linear-gradient(
    135deg,
    ${G.white} 30%,
    ${G.light} 100%
  );
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  transition: background 0.3s ease;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  overflow-y: auto;

  .left-dash {
    width: 100%;
    padding: 1rem;
    overflow-y: auto;
  }
`,c9=j.h1`
  color: ${G.black};
  font-size: 21px;
`,Qw=j.p`
  width: 100%;
  color: ${G.dark};
  font-style: italic;
  text-align: center;
`;function h9(t){return At({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M459.5 440.6c9.5 7.9 22.8 9.7 34.1 4.4s18.4-16.6 18.4-29V96c0-12.4-7.2-23.7-18.4-29s-24.5-3.6-34.1 4.4L288 214.3V256v41.7L459.5 440.6zM256 352V256 128 96c0-12.4-7.2-23.7-18.4-29s-24.5-3.6-34.1 4.4l-192 160C4.2 237.5 0 246.5 0 256s4.2 18.5 11.5 24.6l192 160c9.5 7.9 22.8 9.7 34.1 4.4s18.4-16.6 18.4-29V352z"},child:[]}]})(t)}function d9(t){return At({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M0 224c0 17.7 14.3 32 32 32s32-14.3 32-32c0-53 43-96 96-96H320v32c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l64-64c12.5-12.5 12.5-32.8 0-45.3l-64-64c-9.2-9.2-22.9-11.9-34.9-6.9S320 19.1 320 32V64H160C71.6 64 0 135.6 0 224zm512 64c0-17.7-14.3-32-32-32s-32 14.3-32 32c0 53-43 96-96 96H192V352c0-12.9-7.8-24.6-19.8-29.6s-25.7-2.2-34.9 6.9l-64 64c-12.5 12.5-12.5 32.8 0 45.3l64 64c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6V448H352c88.4 0 160-71.6 160-160z"},child:[]}]})(t)}const vf=[{level:"Novice",multiplier:1},{level:"Experienced",multiplier:1.5},{level:"Legend",multiplier:2}],f9=[{skill:"Wireframing",baseValue:250,deadline:1,currency:"ZAR"},{skill:"Single-page Responsive Layouts",baseValue:500,deadline:2,currency:"ZAR"},{skill:"Multi-page Implementation (per content page)",baseValue:250,deadline:1,currency:"ZAR"},{skill:"Color Theory",baseValue:250,deadline:1,currency:"ZAR"},{skill:"Web Animations",baseValue:500,deadline:2,currency:"ZAR"},{skill:"Custom Fonts",baseValue:250,deadline:1,currency:"ZAR"},{skill:"Image Optimization",baseValue:250,deadline:1,currency:"ZAR"},{skill:"Search Engine Optimization",baseValue:500,deadline:2,currency:"ZAR"},{skill:"Build-code Delivery",repo:!0,baseValue:500,deadline:2,currency:"ZAR"},{skill:"Source-code Delivery",repo:!0,baseValue:1e3,deadline:2,currency:"ZAR"},{skill:"Cross-Browser Compatibility",repo:!0,baseValue:250,deadline:1,currency:"ZAR"},{skill:"WordPress Integration",baseValue:2e3,deadline:3,currency:"ZAR"}],p9=[{skill:"Prototyping",baseValue:2e3,deadline:3,currency:"ZAR"},{skill:"API Integration",baseValue:1800,deadline:2,currency:"ZAR"},{skill:"JavaScript Debugging",baseValue:600,deadline:1,currency:"ZAR"},{skill:"State Management",baseValue:1500,deadline:2,currency:"ZAR"},{skill:"TypeScript Development",baseValue:2e3,deadline:3,currency:"ZAR"},{skill:"Database Configuration",baseValue:1800,deadline:2,currency:"ZAR"},{skill:"Server-Side Rendering (per endpont)",baseValue:1e3,deadline:1,currency:"ZAR"},{skill:"Unit Testing",baseValue:500,deadline:1,currency:"ZAR"},{skill:"Code Optimization",baseValue:1e3,deadline:2,currency:"ZAR"},{skill:"Version Control (Git)",baseValue:500,deadline:1,currency:"ZAR"}],m9=[{skill:"Copywriting",baseValue:700,deadline:2,currency:"ZAR"},{skill:"Video Editing",baseValue:1e3,deadline:3,currency:"ZAR"},{skill:"Graphic Design",baseValue:1200,deadline:2,currency:"ZAR"},{skill:"Podcast Editing",baseValue:800,deadline:2,currency:"ZAR"},{skill:"Blog Writing",baseValue:500,deadline:1,currency:"ZAR"},{skill:"Infographic Creation",baseValue:1e3,deadline:2,currency:"ZAR"},{skill:"Social Media Post Design",baseValue:800,deadline:1,currency:"ZAR"},{skill:"SEO Writing",baseValue:600,deadline:1,currency:"ZAR"},{skill:"Email Campaign Design",baseValue:1e3,deadline:2,currency:"ZAR"},{skill:"Scriptwriting",baseValue:800,deadline:2,currency:"ZAR"}],Yw=["Web Design","Software Development","Content Creation"],mm=t=>{switch(t){case"Web Design":return f9;case"Software Development":return p9;case"Content Creation":return m9;default:return[]}};function g9(t,e){const n=t.map(s=>s.skill),r=t.reduce((s,o)=>s+o.baseValue*e.multiplier,0),i=t.reduce((s,o)=>s+o.deadline,0);return{skillTitles:n,totalBaseValue:r,totalDeadlines:i}}const si=j(pe.div)`
  width: 80%;
  height: 80vh;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 2rem auto;
  padding: 2rem;
  background-color: ${G.accent}2a;
   background-color: ${G.white};
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s;
  color: ${G.dark};
  overflow-y: auto;

  &:hover {
    transform: scale(1.02);
  }
`,y9=j.div`
  display: flex;
  align-items: center;
`,v9=j.img`
  border-radius: 50%;
  width: 80px;
  height: 80px;
  margin-right: 1rem;
`,_9=j.div`
  flex-grow: 1;
`,w9=j.h2`
  margin: 0;
  color: #ed2647;
`,E9=j.p`
  color: #666;
`,T9=j.div`
  padding: 1.5rem;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
`,x9=j.h3`
  color: #ed2647;
`,_f=j.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0;
`,wf=j.div`
  display: flex;
  align-items: center;
  color: #ed2647;
  margin-right: 0.5rem;

  svg {
    font-size: 1.5rem;
  }
`,S9=j.div`
  padding: 1.5rem;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
`,I9=j.h3`
  color: #ed2647;
`,Xw=j.p`
  margin: 0.5rem 0;
`,P9=j(pe.button)`
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  background-color: #ed2647;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #f692a3;
  }
`,C9={name:"John Doe",role:"Freelancer",profilePicture:"https://via.placeholder.com/80",analytics:{totalProjects:15,completedProjects:12,rating:4.8},earnings:{totalEarnings:5e3,pendingPayments:1200}},A9=()=>{const{name:t,role:e,profilePicture:n,analytics:r,earnings:i}=C9;return g.jsxs(si,{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.95},children:[g.jsxs(y9,{children:[g.jsx(v9,{src:n,alt:"Profile Picture"}),g.jsxs(_9,{children:[g.jsx(w9,{children:t}),g.jsx(E9,{children:e})]})]}),g.jsxs(T9,{children:[g.jsx(x9,{children:"Analytics"}),g.jsxs(_f,{children:[g.jsxs(wf,{children:[g.jsx(yf,{}),g.jsx("span",{children:"Total Projects"})]}),g.jsx("span",{children:r.totalProjects})]}),g.jsxs(_f,{children:[g.jsxs(wf,{children:[g.jsx(yf,{}),g.jsx("span",{children:"Completed Projects"})]}),g.jsx("span",{children:r.completedProjects})]}),g.jsxs(_f,{children:[g.jsxs(wf,{children:[g.jsx(yf,{}),g.jsx("span",{children:"Rating"})]}),g.jsx("span",{children:r.rating})]})]}),g.jsxs(S9,{children:[g.jsx(I9,{children:"Earnings"}),g.jsxs(Xw,{children:["Total Earnings: $",i.totalEarnings]}),g.jsxs(Xw,{children:["Pending Payments: $",i.pendingPayments]})]}),g.jsxs(P9,{whileHover:{scale:1.05},whileTap:{scale:.95},children:[g.jsx(JC,{style:{marginRight:"0.5rem"}}),"View Projects"]})]})},R9=j(si)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  max-width: 1200px;
  margin: auto;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`,Go=j.h2`
  color: ${G.primary};
  font-size: 2.5rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`,Qo=j.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.5rem;
  }
`,ss=j(pe.div)`
  background-color: ${G.light};
  padding: 1.5rem;
  border-radius: 12px;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${G.accent};
  }

  @media (max-width: 768px) {
    padding: 1rem;
  }
`,Jw=j(pe.button)`
  background-color: ${G.primary};
  color: ${G.white};
  padding: 1rem 2rem;
  border: none;
  border-radius: 8px;
  margin-top: 1rem;
  cursor: pointer;
  font-size: 1.2rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${G.accent};
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 1rem;
  }
`,k9=j.div`
  margin-top: 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  @media (max-width: 768px) {
    justify-content: center;
  }
`,b9=j.div`
  background-color: ${G.dark};
  color: ${G.light};
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  width: 100%;
  margin-top: 1.5rem;

  .preview_title {
    width: max-content;
    margin: auto;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    background: ${G.light};
    color: ${G.dark};
    box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
      rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
  }

  .preview_skills {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 1rem;
    border-radius: 1rem;
    gap: 1rem;
    background: ${G.light};
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
      rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
      rgba(0, 0, 0, 0.2) 0px -3px 0px inset;

    span {
      padding: 0.5rem 1rem;
      border-radius: 0.5rem;
      background: ${G.accent};
      color: ${G.dark};
      box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset,
        rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset,
        rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset,
        rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,
        rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,
        rgba(0, 0, 0, 0.09) 0px 32px 16px;
      cursor: pointer;
      transition: 0.3s ease-in-out;

      &:hover {
        scale: 1.05;
        color: ${G.white};
      }
    }
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`,Yo={hidden:{opacity:0},visible:{opacity:1,transition:{duration:.5}}},os={hidden:{y:20,opacity:0},visible:{y:0,opacity:1,transition:{duration:.4,ease:"easeInOut"}}},V9=()=>{kl();const{showNotification:t}=Ji(),[e,n]=N.useState(null),[r,i]=N.useState(""),[s,o]=N.useState([]),[a,l]=N.useState([]),c=R=>{o(v=>v.includes(R)?v.filter(w=>w!==R):[...v,R])},h=()=>{n(null),i(""),o([]),l([])},f=()=>{console.log({category:r,skills:s,privatePrefs:a}),t("Data submitted successfully!","success")},p=()=>e?e==="freelancer"?S():e==="client"?I():null:y(),y=()=>g.jsxs(pe.div,{variants:Yo,initial:"hidden",animate:"visible",children:[g.jsx(Go,{children:"Select User Type"}),g.jsxs(Qo,{children:[g.jsx(ss,{onClick:()=>n("freelancer"),variants:os,children:"Freelancer"}),g.jsx(ss,{onClick:()=>n("client"),variants:os,children:"Client"})]})]}),S=()=>{var R;return g.jsxs(g.Fragment,{children:[g.jsxs(pe.div,{variants:Yo,initial:"hidden",animate:"visible",children:[g.jsx(Go,{children:"Select Your Freelancer Category"}),g.jsx(Qo,{children:Yw.map(v=>g.jsx(ss,{onClick:()=>i(v),variants:os,children:v},v))})]}),r&&g.jsxs(pe.div,{variants:Yo,initial:"hidden",animate:"visible",children:[g.jsx(Go,{children:"Select Skills"}),g.jsx(Qo,{children:(R=mm(r))==null?void 0:R.map(v=>g.jsx(ss,{onClick:()=>c(v),variants:os,children:s.includes(v)?`✓ ${v.skill}`:v.skill},v.skill))})]})]})},I=()=>{var R;return g.jsxs(g.Fragment,{children:[g.jsxs(pe.div,{variants:Yo,initial:"hidden",animate:"visible",children:[g.jsx(Go,{children:"Optional: Select Preferred Skills"}),g.jsx(Qo,{children:Yw.map(v=>g.jsx(ss,{onClick:()=>{i(v),l([v])},variants:os,children:v},v))})]}),r&&g.jsxs(pe.div,{variants:Yo,initial:"hidden",animate:"visible",children:[g.jsx(Go,{children:"Select Skills"}),g.jsx(Qo,{children:(R=mm(r))==null?void 0:R.map(v=>g.jsx(ss,{onClick:()=>c(v),variants:os,children:s.includes(v)?`✓ ${v.skill}`:v.skill},v.skill))})]})]})};return g.jsxs(R9,{children:[p(),(s.length>0||a.length>0)&&g.jsxs(b9,{children:[g.jsx("h3",{children:"Summary"}),e==="freelancer"?g.jsxs("p",{className:"preview_title",children:["Category: ",r]}):g.jsxs("p",{className:"preview_title",children:["Private Prefs: ",a.join(", ")]}),g.jsx("h3",{children:"Skills:"}),g.jsx("div",{className:"preview_skills",children:s.map((R,v)=>g.jsx("span",{onClick:()=>c(R),children:s.includes(R)?`✓ ${R.skill}`:R.skill},v))}),g.jsx(Jw,{onClick:f,whileHover:{scale:1.05},whileTap:{scale:.95},children:e==="freelancer"?"Submit Application":"Complete Profile"})]}),e==="client"&&a.length<1&&g.jsx(Jw,{onClick:f,whileHover:{scale:1.05},whileTap:{scale:.95},children:"Create Client Profile (No Preferences)"}),e&&g.jsxs(k9,{onClick:h,children:[g.jsx(d9,{}),"Restart"]})]})},D9=j.div`
  margin: 20px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`,N9=j.h3`
  font-size: 1.5em;
  margin-bottom: 10px;
`,O9=j.input`
  padding: 10px;
  margin-right: 10px;
  width: 300px;
  border: 1px solid #ccc;
  border-radius: 4px;
`,L9=j.button`
  padding: 8px 12px;
  background-color: #ed2647;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #f692a3;
  }
`,M9=j.ul`
  list-style-type: none;
  padding: 0;
`,j9=j.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f2f2f2;
  padding: 10px;
  margin-bottom: 5px;
  border-radius: 4px;
  cursor: pointer;

  span {
  border-bottom: 2px solid ${G.accent};
  }

  &:hover {
    background-color: #e0e0e0;
  }
`,F9=j.input`
  padding: 6px;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 4px;
`,U9=j(XC)`
  color: #ed2647;
  cursor: pointer;

  &:hover {
    color: #f692a3;
  }
`,B9=({props:t})=>{const{requirements:e,setRequirements:n}=t,[r,i]=N.useState(""),[s,o]=N.useState(null),[a,l]=N.useState(""),c=()=>{r.trim()!==""&&(n([...e,r]),i(""))},h=p=>{const y=e.filter((S,I)=>I!==p);n(y)},f=p=>{if(a.trim()!==""){const y=[...e];y[p]=a,n(y)}o(null)};return g.jsxs(D9,{children:[g.jsx(N9,{children:"Project Requirements"}),g.jsxs("div",{children:[g.jsx(O9,{type:"text",value:r,onChange:p=>i(p.target.value),placeholder:"Add a new requirement"}),g.jsx(L9,{onClick:c,children:"Add"})]}),g.jsx(M9,{children:e.map((p,y)=>g.jsxs(j9,{children:[s===y?g.jsx(F9,{type:"text",value:a,onChange:S=>l(S.target.value),onBlur:()=>f(y),autoFocus:!0}):g.jsx("span",{onClick:()=>{o(y),l(p)},children:p}),g.jsx(U9,{onClick:()=>h(y)})]},y))})]})},Zw=t=>{switch(t){case 1:return"What type of project are you looking to get done?";case 2:return"Awesome! Now, please select the skills you believe are important for this project. Don't worry, we can suggest some!";case 3:return"Great choice! How much experience should the freelancer have? Novice, Experienced, or a Legend?";case 4:return"Please provide some additional details about your project timeline and budget.";case 5:return"Here's a summary of your project. Please confirm or make changes before submission.";default:return"Thank you for submitting your project!"}},$9=j(si)`
  flex-direction: row;
  align-items: center;

  .input {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.3rem;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
      rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
      rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
    padding: 0 1rem;
    padding-bottom: 1rem;
    overflow-y: auto;
  }
`,z9=j.div`
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  overflow-y: auto;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
`,wu=j.h2`
  color: #ed2647;
  font-size: 2.5rem;
  margin-bottom: 2rem;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`,W9=j(pe.div)`
  background-color: ${({isAI:t})=>t?"#f5f5f5":"#ed2647"};
  color: ${({isAI:t})=>t?"#222":"#fff"};
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 15px;
  width: fit-content;
  max-width: 80%;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  ${({isAI:t})=>t?"align-self: flex-start;":"align-self: flex-end;"}
`,Ef=j.div`
  margin: 1.5rem 0;
  display: flex;
  flex-direction: column;
`,Tf=j.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
`,xf=j(pe.div)`
display: flex;
align-items: center;
justify-content: center;
  border-radius: 8px;
  padding: 1rem;
  width: 100%;
  max-width: 300px;
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
    rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
  cursor: pointer;
  text-align: center;

  &:hover {
    background-color: #ed2647;
    color: white;
  }
`,Sf=t=>({backgroundColor:t?G.accent:G.dark,color:t?G.dark:G.light}),H9=j(pe.button)`
  background-color: #ed2647;
  color: white;
  padding: 1rem 1.5rem;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;
  width: 100%;
  max-width: 300px;
  margin: 1rem 0;

  &:disabled {
    background-color: ${G.light};
  }

  &:hover {
    background-color: #f692a3;
  }
`,q9=j.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  padding: 0.2rem 1rem;
  border-radius: 1rem;
  background: ${G.dark};
  color: ${G.light};
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  transition: 0.3s ease-in-out;
  cursor: pointer;
  &:hover {
  color: ${G.accent};
  scale: 1.05;
  }
  `,K9=j.div`
  background-color: #f0f0f0;
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.05);
  margin-top: 2rem;
  color: ${G.dark};

  .requirements {
  display: flex;
  flex-direction: column;
  }
`,G9=()=>{const{fbUser:t}=kl(),{showNotification:e}=Ji(),n=pl(),[r,i]=N.useState(1),[s,o]=N.useState([{message:Zw(1),isAI:!0}]),[a,l]=N.useState(""),[c,h]=N.useState([]),[f,p]=N.useState([]),[y,S]=N.useState(null),[I,R]=N.useState([]),[v,w]=N.useState({}),[x,V]=N.useState(!1);N.useEffect(()=>{switch(V(!1),r){case 1:if(!a)return;break;case 2:if(f.length<1)return;break;case 3:if(!y)return;break;case 4:if(I.length<1)return;break}V(!0)},[r,a,f,y,I]),N.useEffect(()=>{a&&h(mm(a))},[a]),N.useEffect(()=>{y&&f&&w(g9(f,y))},[y,f]);const O=C=>{p(A=>A.includes(C)?A.filter(b=>b!==C):[...A,C])},M=()=>{r>1&&i(r-1)},T=()=>{r<5?(i(r+1),o([...s,{message:Zw(r+1),isAI:!0}])):_()},_=async()=>{try{if(!t||!a||!v.skillTitles||!(y!=null&&y.level)||!I)throw new Error("INCOMPLETE_DATA");const C={category:a,skills:v.skillTitles,experience:y.level,requirements:I},A={id:"",status:"submitted",title:`${a} service`,consultation:C};await ZF(A,t.uid,"UsCreativz"),e("Project submitted successfully!","success"),setTimeout(()=>{n("/match")},3e3)}catch(C){e(C.message,"error")}},P=()=>{var C;switch(r){case 1:return g.jsxs(Ef,{children:[g.jsx(wu,{children:"Select Your Project Category"}),g.jsx(Tf,{children:["Web Design","Software Development","Content Creation"].map(A=>g.jsx(xf,{whileHover:{scale:1.05},onClick:()=>l(A),style:Sf(a===A),children:A},A))})]});case 2:return g.jsxs(Ef,{children:[g.jsx(wu,{children:"Select Skills for the Project"}),g.jsx(Tf,{children:c==null?void 0:c.map(A=>g.jsx(xf,{whileHover:{scale:1.05},onClick:()=>O(A),style:Sf(f.includes(A)),children:`${A.skill} (${A.currency} ${A.baseValue})`},A.skill))})]});case 3:return g.jsxs(Ef,{children:[g.jsx(wu,{children:"Select Freelancer Experience Level"}),g.jsx(Tf,{children:vf==null?void 0:vf.map(A=>g.jsx(xf,{whileHover:{scale:1.05},onClick:()=>S(A),style:Sf(y===A),children:A.level},A.level))})]});case 4:return g.jsx(B9,{props:{requirements:I,setRequirements:R}});case 5:return g.jsxs(K9,{children:[g.jsx(wu,{children:"Project Summary"}),g.jsxs("p",{children:[g.jsx("strong",{children:"Category:"})," ",a]}),g.jsxs("p",{children:[g.jsx("strong",{children:"Skills:"})," ",((C=v.skillTitles)==null?void 0:C.join(", "))||"None selected"]}),g.jsxs("p",{children:[g.jsx("strong",{children:"Experience Level:"})," ",(y==null?void 0:y.level)||"Not specified"]}),g.jsxs("div",{className:"requirements",children:[g.jsx("strong",{children:"Requirements:"}),I.length<1&&"Not specified",I.map((A,b)=>g.jsx("span",{children:A},b))]}),g.jsxs("p",{children:[g.jsx("strong",{children:"Budget:"})," ",v.totalBaseValue||"Not specified"]}),g.jsxs("p",{children:[g.jsx("strong",{children:"Timeline:"})," ",v.totalDeadlines||"Not specified"]})]});default:return null}};return g.jsxs($9,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.5},children:[g.jsxs("div",{className:"input",children:[P(),g.jsx(H9,{onClick:T,disabled:!x,children:"Next"}),g.jsxs("div",{children:["Step ",r," out of 5"]}),r>1&&g.jsxs(q9,{onClick:M,children:[g.jsx(h9,{})," Go Back"]})]}),g.jsx(z9,{children:s.map((C,A)=>g.jsx(W9,{isAI:C.isAI,children:C.message},A))})]})},Q9=[{id:1,name:"Alice Smith",bio:"Expert in UI/UX Design",skills:["Figma","Photoshop"],rating:4.8,completedJobs:50,experience:"Legend"},{id:2,name:"John Doe",bio:"Full Stack Developer",skills:["React.js","Node.js"],rating:4.5,completedJobs:30,experience:"Experienced"},{id:3,name:"Jane Roe",bio:"Graphic Designer",skills:["Illustrator","Photoshop"],rating:4.2,completedJobs:20,experience:"Novice"}],Y9=j(si)`

`,X9=j.h2`
  color: #ed2647;
  font-size: 2rem;
  margin-bottom: 2rem;
  text-align: center;
`,J9=j.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  
  .filters {
  display: flex;
  gap: 1rem;
  height: 2rem;
  }
`,If=j(pe.button)`
  background-color: #ed2647;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  &:hover {
    background-color: #f692a3;
  }
`,oA=j(pe.div)`
  background-color: #f5f5f5;
  color: ${G.dark};
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 1rem;
 box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  cursor: pointer;
  transition: 0.5s ease-in-out;
  &:hover {
    background-color: #ed2647;
    
  }
`,Z9=j.div`
  text-align: left;
`,Eu=j.div`
  margin: 0.5rem 0;
`;j(oA)`
  background-color: ${G.primary};
  color: white;
  text-align: center;
  &:hover {
    background-color: #0056b3;
  }
`;const eU=j.div`

select {
margin-left: 1rem;
background-color: ${G.primary};
padding: 0.5rem;
border-radius: 6px;
}
`,tU=()=>{const t=pl(),[e,n]=N.useState(""),[r,i]=N.useState("rating"),o=Q9.filter(l=>e?l.experience===e:!0).sort((l,c)=>r==="rating"?c.rating-l.rating:c.completedJobs-l.completedJobs),a=l=>{console.log(`Selected Freelancer: ${l.name}`),t("/contract")};return g.jsxs(Y9,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.5},children:[g.jsx(X9,{children:"AI-Powered Freelancer Matching"}),g.jsxs(J9,{children:[g.jsxs("div",{className:"filters",children:[g.jsx(If,{onClick:()=>n("Novice"),style:{backgroundColor:e==="Novice"?"#ed2647":"${colors.primary}"},children:"Novice"}),g.jsx(If,{onClick:()=>n("Experienced"),style:{backgroundColor:e==="Experienced"?"#ed2647":"${colors.primary}"},children:"Experienced"}),g.jsx(If,{onClick:()=>n("Legend"),style:{backgroundColor:e==="Legend"?"#ed2647":"${colors.primary}"},children:"Legend"})]}),g.jsx(eU,{children:g.jsxs("label",{children:["Sort By:",g.jsxs("select",{value:r,onChange:l=>i(l.target.value),children:[g.jsx("option",{value:"rating",children:"Rating"}),g.jsx("option",{value:"completedJobs",children:"Completed Jobs"})]})]})})]}),o.slice(0,3).map(l=>g.jsx(oA,{onClick:()=>a(l),children:g.jsxs(Z9,{children:[g.jsx("h3",{children:l.name}),g.jsxs(Eu,{children:[g.jsx("strong",{children:"Bio:"})," ",l.bio]}),g.jsxs(Eu,{children:[g.jsx("strong",{children:"Skills:"})," ",l.skills.join(", ")]}),g.jsxs(Eu,{children:[g.jsx("strong",{children:"Rating:"})," ",l.rating]}),g.jsxs(Eu,{children:[g.jsx("strong",{children:"Completed Jobs:"})," ",l.completedJobs]})]})},l.id)),o.length===0&&g.jsx("p",{children:"No freelancers found."})]})},nU=j(si)`

`,rU=j.h2`
  text-align: center;
  color: #ed2647;
  margin-bottom: 1rem;
  font-size: 2rem;
`,iU=j.div`
  margin-bottom: 2rem;
  padding: 1rem;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
`,sU=j.h3`
  color: #ed2647;
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`,oU=j.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #333;
`,aU=j.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
  padding: 1rem;
  background-color: #f0f0f0;
  border-radius: 10px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
`,Pf=j.div`
  flex: 1;
  text-align: center;
  color: #555;
`,lU=j.div`
  margin-top: 2rem;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  background-color: #e8ffe8;
  border-radius: 10px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
`,eE=j.div`
  text-align: center;
`,tE=j(pe.button)`
  background-color: #ed2647;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: #f692a3;
  }
`,uU="This contract outlines the project scope, payment terms, and milestones.",cU="In Progress",hU=()=>{const t=pl(),[e,n]=N.useState({}),r=()=>{e.freelancer&&e.client?t("/manage"):alert("Both Parties must sign to agree.")};return g.jsxs(nU,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.5},children:[g.jsx(rU,{children:"Contract Agreement"}),g.jsxs(iU,{children:[g.jsx(sU,{children:"Agreement Terms"}),g.jsx(oU,{children:uU})]}),g.jsxs(aU,{children:[g.jsxs(Pf,{children:[g.jsx("h4",{children:"Client Signature"}),g.jsx("p",{children:"Pending"})]}),g.jsxs(Pf,{children:[g.jsx("h4",{children:"Freelancer Signature"}),g.jsx("p",{children:"Pending"})]}),g.jsxs(Pf,{children:[g.jsx("h4",{children:"Project Status"}),g.jsx("p",{children:cU})]})]}),g.jsxs(lU,{children:[g.jsxs(eE,{children:[g.jsx("h4",{children:"Client Signature"}),g.jsx(tE,{onClick:()=>n({...e,client:"Client signed the contract"}),whileHover:{scale:1.05},children:e.client||"Client must sign"})]}),g.jsxs(eE,{children:[g.jsx("h4",{children:"Freelancer Signature"}),g.jsx(tE,{onClick:()=>n({...e,freelancer:"Freelancer signed the contract"}),whileHover:{scale:1.05},children:e.freelancer||"Freelancer must sign"})]})]}),g.jsx("button",{onClick:r,children:"Mint Certificate"})]})},dU=j(si)``,fU=j.h2`
  text-align: center;
  color: #ed2647;
  margin-bottom: 1rem;
  font-size: 2rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`,pU=j(pe.div)`
  background-color: #f9f9f9;
  border-radius: 10px;
  padding: 1.5rem;
  margin: 1rem 0;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 1rem;
  }
`,mU=j.div`
  margin-top: 1rem;
  border-top: 1px solid #e0e0e0;
`,gU=j.h3`
  color: #ed2647;
  margin-bottom: 0.5rem;
`,di=j.p`
  font-size: 1rem;
  line-height: 1.5;
  color: #333;
`,aA=j(pe.button)`
  background-color: #ed2647;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #f692a3;
  }
`,yU=j.div`
  margin-top: 1rem;
  border-top: 1px solid #e0e0e0;
  padding-top: 1rem;
`,vU=j.textarea`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  margin-top: 0.5rem;
  resize: none;
`,nE=j(aA)`
margin: 0 0.5rem;
  margin-top: 0.5rem;
`,_U=j.div`
  margin-top: 1rem;
  border-top: 1px solid #e0e0e0;
  padding-top: 1rem;
`,wU=j.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`,EU=j(aA)`
  margin-top: 0.5rem;
`,TU=[{id:1,title:"Website Development Contract",terms:"Complete the website within 4 weeks. Budget: $2000.",status:"In Progress",budget:2e3,deadline:"2024-11-30",milestones:[{id:1,description:"Design mockup",completed:!1},{id:2,description:"Frontend development",completed:!1},{id:3,description:"Backend integration",completed:!1}],comments:[]},{id:2,title:"Logo Design Contract",terms:"Deliver 3 logo concepts in 1 week. Budget: $500.",status:"Pending Approval",budget:500,deadline:"2024-10-15",milestones:[{id:1,description:"Initial concept sketches",completed:!1},{id:2,description:"Final logo design",completed:!1}],comments:[]}],xU=()=>{const t=pl(),[e,n]=N.useState(TU),[r,i]=N.useState(""),[s,o]=N.useState(null),[a,l]=N.useState(""),c=f=>{n(p=>p.map(y=>y.id===f?{...y,comments:[...y.comments,r]}:y)),i("")},h=f=>{console.log(`Milestone review requested for contract ID: ${f}, Review: ${a}`),l(""),t("/review")};return g.jsxs(dU,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.5},children:[g.jsx(fU,{children:"Contract Tracking and Management"}),g.jsx(mU,{children:e.map(f=>g.jsxs(pU,{whileHover:{scale:1.02},onClick:()=>o(f.id===s?null:f.id),children:[g.jsx(gU,{children:f.title}),g.jsx(di,{children:f.terms}),g.jsxs(di,{children:["Status: ",f.status]}),g.jsxs(di,{children:["Budget: $",f.budget]}),g.jsxs(di,{children:["Deadline: ",f.deadline]}),s===f.id&&g.jsxs(g.Fragment,{children:[g.jsxs(_U,{children:[g.jsx("h4",{children:"Milestones"}),f.milestones.map(p=>g.jsxs(wU,{children:[g.jsx(di,{children:p.description}),g.jsx(di,{children:p.completed?"Completed":"Pending"})]},p.id)),g.jsx(EU,{onClick:()=>h(f.id),children:"Request Milestone Review"})]}),g.jsxs(yU,{children:[g.jsx("h4",{children:"Comments"}),f.comments.map((p,y)=>g.jsxs(di,{children:["- ",p]},y)),g.jsx(vU,{rows:3,placeholder:"Add a comment...",value:r,onChange:p=>i(p.target.value)}),g.jsx(nE,{onClick:()=>c(f.id),children:"Submit Comment"}),g.jsx(nE,{onClick:()=>t("/chat"),children:"Open Chat"})]})]})]},f.id))})]})},SU=j(si)`
  justify-content: flex-end;
`,IU=j.div`
  height: 80%;
  overflow-y: auto;
  margin-bottom: 1rem;
  padding: 0.5rem;
  border: 1px solid #e0e0e0;
  border-radius: 6px;
`,PU=j.div`
  background-color: ${({isSender:t})=>t?"#ed2647":"#f0f0f0"};
  color: ${({isSender:t})=>t?"#ffffff":"#000000"};
  padding: 0.5rem;
  border-radius: 6px;
  margin: 0.5rem 0;
  align-self: ${({isSender:t})=>t?"flex-end":"flex-start"};
  max-width: 75%;
  word-wrap: break-word;
`,CU=j.div`
  display: flex;
  margin-top: 1rem;
`,AU=j.textarea`
  flex: 1;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  resize: none;
`,RU=j.button`
  background-color: #ed2647;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  margin-left: 0.5rem;

  &:hover {
    background-color: #f692a3;
  }
`,kU=({userId:t=0,chatId:e})=>{const[n,r]=N.useState([]),[i,s]=N.useState(""),o=()=>{if(!i.trim())return;const a={id:n.length+1,senderId:t,recipientId:t===1?2:1,content:i,timestamp:new Date().toISOString()};r([...n,a]),s("")};return g.jsxs(SU,{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.95},children:[g.jsx(IU,{children:n.map(a=>g.jsx(PU,{isSender:a.senderId===t,children:a.content},a.id))}),g.jsxs(CU,{children:[g.jsx(AU,{rows:2,value:i,onChange:a=>s(a.target.value),placeholder:"Type your message..."}),g.jsx(RU,{onClick:o,children:"Send"})]})]})},bU=j(si)`

`,rE=j.h3`
  color: #ed2647;
  margin-bottom: 1rem;
`,VU=j.form`
  display: flex;
  flex-direction: column;
`,DU=j.textarea`
  margin-bottom: 1rem;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  resize: none;
`,NU=j.button`
  background-color: #ed2647;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background-color: #f692a3;
  }
`,OU=j.div`
  margin-top: 2rem;
  color: #000;
`,LU=j.div`
  background-color: #f9f9f9;
  border-radius: 10px;
  padding: 1rem;
  margin-bottom: 1rem;
  border: 1px solid #e0e0e0;
`,MU=j.p`
  margin: 0.5rem 0;
`,iE=j.button`
margin: 0 0.5rem;
  margin-top: 0.5rem;
  background-color: #ed2647;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background-color: #f692a3;
  }
`,jU=({freelancerId:t=1,contractId:e})=>{const[n,r]=N.useState(""),[i,s]=N.useState([]),o=l=>{l.preventDefault();const c={id:i.length+1,milestoneId:1,freelancerId:t,content:n,submittedAt:new Date().toISOString(),status:"pending"};s([...i,c]),r("")},a=(l,c,h)=>{s(f=>f.map(p=>p.id===l?{...p,status:c==="approve"?"approved":"denied",dispute:c==="deny"?h:void 0}:p))};return g.jsxs(bU,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.5},children:[g.jsx(rE,{children:"Submit Milestone"}),g.jsxs(VU,{onSubmit:o,children:[g.jsx(DU,{rows:4,value:n,onChange:l=>r(l.target.value),placeholder:"Describe your milestone submission..."}),g.jsx(NU,{type:"submit",children:"Submit Milestone"})]}),g.jsxs(OU,{children:[g.jsx(rE,{children:"Milestone Submissions"}),i.map(l=>g.jsxs(LU,{children:[g.jsx(MU,{children:l.content}),g.jsxs("p",{children:["Status: ",l.status]}),l.status==="pending"&&g.jsxs(g.Fragment,{children:[g.jsx(iE,{onClick:()=>a(l.id,"approve"),children:"Approve"}),g.jsx(iE,{onClick:()=>a(l.id,"deny","Dispute reason here"),children:"Deny"})]}),l.status==="denied"&&l.dispute&&g.jsxs("p",{style:{color:"red"},children:["Dispute: ",l.dispute]})]},l.id))]})]})},FU=j.div`
  position: fixed;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  background-color: #ffffffa1;
  border-radius: 0 8px 8px 0;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  backdrop-filter: blur(5px);
  padding: 1rem;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: center;
`,Xo=j.button`
  background: none;
  border: none;
  cursor: pointer;
  margin: 1rem 0;
  padding: 0.5rem;
  border-radius: 50%;
  transition: background-color 0.3s;

  &:hover {
    background-color: #f0f0f0;
  }

  &:focus {
    outline: none;
  }

  svg {
    font-size: 1.5rem;
    color: #ed2647;
  }
`;j.h2`
  color: #ed2647;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  text-align: center;
`;const UU=()=>{const t=pl(),e=n=>{t(`/${n}`)};return g.jsxs(FU,{children:[g.jsx(Xo,{onClick:()=>e(""),children:g.jsx(PF,{})}),g.jsx(Xo,{onClick:()=>e("create"),children:g.jsx(SF,{})}),g.jsx(Xo,{onClick:()=>e("manage"),children:g.jsx(AF,{})}),g.jsx(Xo,{onClick:()=>e("chat"),children:g.jsx(xF,{})}),g.jsx(Xo,{onClick:()=>e("profile"),children:g.jsx(JC,{})})]})},BU=()=>g.jsxs(nV,{children:[g.jsxs(Zb,{children:[g.jsx(wn,{path:"/",element:g.jsx(l9,{})}),g.jsx(wn,{path:"/onboard",element:g.jsx(V9,{})}),g.jsx(wn,{path:"/create",element:g.jsx(G9,{})}),g.jsx(wn,{path:"/match",element:g.jsx(tU,{})}),g.jsx(wn,{path:"/contract",element:g.jsx(hU,{})}),g.jsx(wn,{path:"/manage",element:g.jsx(xU,{})}),g.jsx(wn,{path:"/chat",element:g.jsx(kU,{})}),g.jsx(wn,{path:"/review",element:g.jsx(jU,{})}),g.jsx(wn,{path:"/profile",element:g.jsx(A9,{})})]}),g.jsx(UU,{})]}),$U=()=>{const{isNotice:t,setIsNotice:e}=Ji(),n=()=>{e(!1)};return t?g.jsxs(zU,{initial:{y:-50,opacity:0},animate:{y:0,opacity:1},transition:{duration:.5},children:[g.jsx(WU,{children:g.jsxs("span",{children:["You're using a beta version of UsCreativz. Expect bugs and unfinished features.",g.jsx("a",{href:"https://uscreativz.com/",target:"_blank",rel:"noopener noreferrer",children:"Learn More"})]})}),g.jsx(HU,{onClick:n,children:g.jsx(XC,{})})]}):null},zU=j(pe.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
    text-align: center;
  font-size: 0.9rem;
  padding: 0.75rem;
  background-color: ${G.primary};
  color: ${G.white};
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  z-index: 9999;

  a {
    color: ${G.white};
    text-decoration: underline;
    margin-left: 0.5rem;
    &:hover {
      color: ${G.accent};
    }
  }
`,WU=j.div`
  flex: 1;
  padding: 0 2rem;
`,HU=j.button`
  background: none;
  border: none;
  color: ${G.white};
  font-size: 1.2rem;
  cursor: pointer;
  position: absolute;
  right: 1rem;
  top: 50%;
  padding: 0;
  transform: translateY(-50%);
  transition: 0.3s ease-in-out;
  &:hover {
    color: ${G.white};
    scale: 1.05;
  }
`,qU=j.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: center;
  padding: 2rem 4rem;
  background-color: ${G.light};
  overflow-y: auto;
`,KU=()=>g.jsx(qU,{children:g.jsx(RF,{children:g.jsx(i9,{children:g.jsxs(jF,{children:[g.jsx($U,{}),g.jsx(BU,{})]})})})});yx(document.getElementById("root")).render(g.jsx(N.StrictMode,{children:g.jsx(KU,{})}));
