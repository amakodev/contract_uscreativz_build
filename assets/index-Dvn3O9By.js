function NA(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function OA(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var nE={exports:{}},Qc={},rE={exports:{}},ne={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var il=Symbol.for("react.element"),LA=Symbol.for("react.portal"),MA=Symbol.for("react.fragment"),jA=Symbol.for("react.strict_mode"),FA=Symbol.for("react.profiler"),UA=Symbol.for("react.provider"),BA=Symbol.for("react.context"),$A=Symbol.for("react.forward_ref"),zA=Symbol.for("react.suspense"),WA=Symbol.for("react.memo"),HA=Symbol.for("react.lazy"),M0=Symbol.iterator;function qA(t){return t===null||typeof t!="object"?null:(t=M0&&t[M0]||t["@@iterator"],typeof t=="function"?t:null)}var iE={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},sE=Object.assign,oE={};function uo(t,e,n){this.props=t,this.context=e,this.refs=oE,this.updater=n||iE}uo.prototype.isReactComponent={};uo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};uo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function aE(){}aE.prototype=uo.prototype;function dm(t,e,n){this.props=t,this.context=e,this.refs=oE,this.updater=n||iE}var fm=dm.prototype=new aE;fm.constructor=dm;sE(fm,uo.prototype);fm.isPureReactComponent=!0;var j0=Array.isArray,lE=Object.prototype.hasOwnProperty,pm={current:null},uE={key:!0,ref:!0,__self:!0,__source:!0};function cE(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)lE.call(e,r)&&!uE.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:il,type:t,key:s,ref:o,props:i,_owner:pm.current}}function KA(t,e){return{$$typeof:il,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function mm(t){return typeof t=="object"&&t!==null&&t.$$typeof===il}function GA(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var F0=/\/+/g;function hd(t,e){return typeof t=="object"&&t!==null&&t.key!=null?GA(""+t.key):e.toString(36)}function _u(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case il:case LA:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+hd(o,0):r,j0(i)?(n="",t!=null&&(n=t.replace(F0,"$&/")+"/"),_u(i,e,n,"",function(c){return c})):i!=null&&(mm(i)&&(i=KA(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(F0,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",j0(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+hd(s,a);o+=_u(s,e,n,l,i)}else if(l=qA(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+hd(s,a++),o+=_u(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Wl(t,e,n){if(t==null)return t;var r=[],i=0;return _u(t,r,"","",function(s){return e.call(n,s,i++)}),r}function QA(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Pt={current:null},wu={transition:null},YA={ReactCurrentDispatcher:Pt,ReactCurrentBatchConfig:wu,ReactCurrentOwner:pm};function hE(){throw Error("act(...) is not supported in production builds of React.")}ne.Children={map:Wl,forEach:function(t,e,n){Wl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Wl(t,function(){e++}),e},toArray:function(t){return Wl(t,function(e){return e})||[]},only:function(t){if(!mm(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ne.Component=uo;ne.Fragment=MA;ne.Profiler=FA;ne.PureComponent=dm;ne.StrictMode=jA;ne.Suspense=zA;ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=YA;ne.act=hE;ne.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=sE({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=pm.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)lE.call(e,l)&&!uE.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:il,type:t.type,key:i,ref:s,props:r,_owner:o}};ne.createContext=function(t){return t={$$typeof:BA,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:UA,_context:t},t.Consumer=t};ne.createElement=cE;ne.createFactory=function(t){var e=cE.bind(null,t);return e.type=t,e};ne.createRef=function(){return{current:null}};ne.forwardRef=function(t){return{$$typeof:$A,render:t}};ne.isValidElement=mm;ne.lazy=function(t){return{$$typeof:HA,_payload:{_status:-1,_result:t},_init:QA}};ne.memo=function(t,e){return{$$typeof:WA,type:t,compare:e===void 0?null:e}};ne.startTransition=function(t){var e=wu.transition;wu.transition={};try{t()}finally{wu.transition=e}};ne.unstable_act=hE;ne.useCallback=function(t,e){return Pt.current.useCallback(t,e)};ne.useContext=function(t){return Pt.current.useContext(t)};ne.useDebugValue=function(){};ne.useDeferredValue=function(t){return Pt.current.useDeferredValue(t)};ne.useEffect=function(t,e){return Pt.current.useEffect(t,e)};ne.useId=function(){return Pt.current.useId()};ne.useImperativeHandle=function(t,e,n){return Pt.current.useImperativeHandle(t,e,n)};ne.useInsertionEffect=function(t,e){return Pt.current.useInsertionEffect(t,e)};ne.useLayoutEffect=function(t,e){return Pt.current.useLayoutEffect(t,e)};ne.useMemo=function(t,e){return Pt.current.useMemo(t,e)};ne.useReducer=function(t,e,n){return Pt.current.useReducer(t,e,n)};ne.useRef=function(t){return Pt.current.useRef(t)};ne.useState=function(t){return Pt.current.useState(t)};ne.useSyncExternalStore=function(t,e,n){return Pt.current.useSyncExternalStore(t,e,n)};ne.useTransition=function(){return Pt.current.useTransition()};ne.version="18.3.1";rE.exports=ne;var N=rE.exports;const Bt=OA(N),XA=NA({__proto__:null,default:Bt},[N]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var JA=N,ZA=Symbol.for("react.element"),eR=Symbol.for("react.fragment"),tR=Object.prototype.hasOwnProperty,nR=JA.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,rR={key:!0,ref:!0,__self:!0,__source:!0};function dE(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)tR.call(e,r)&&!rR.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:ZA,type:t,key:s,ref:o,props:i,_owner:nR.current}}Qc.Fragment=eR;Qc.jsx=dE;Qc.jsxs=dE;nE.exports=Qc;var g=nE.exports,fE={exports:{}},Ht={},pE={exports:{}},mE={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e($,K){var Q=$.length;$.push(K);e:for(;0<Q;){var fe=Q-1>>>1,re=$[fe];if(0<i(re,K))$[fe]=K,$[Q]=re,Q=fe;else break e}}function n($){return $.length===0?null:$[0]}function r($){if($.length===0)return null;var K=$[0],Q=$.pop();if(Q!==K){$[0]=Q;e:for(var fe=0,re=$.length,Ie=re>>>1;fe<Ie;){var Lt=2*(fe+1)-1,At=$[Lt],_t=Lt+1,Rt=$[_t];if(0>i(At,Q))_t<re&&0>i(Rt,At)?($[fe]=Rt,$[_t]=Q,fe=_t):($[fe]=At,$[Lt]=Q,fe=Lt);else if(_t<re&&0>i(Rt,Q))$[fe]=Rt,$[_t]=Q,fe=_t;else break e}}return K}function i($,K){var Q=$.sortIndex-K.sortIndex;return Q!==0?Q:$.id-K.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],h=1,f=null,p=3,y=!1,x=!1,I=!1,R=typeof setTimeout=="function"?setTimeout:null,w=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function S($){for(var K=n(c);K!==null;){if(K.callback===null)r(c);else if(K.startTime<=$)r(c),K.sortIndex=K.expirationTime,e(l,K);else break;K=n(c)}}function b($){if(I=!1,S($),!x)if(n(l)!==null)x=!0,hr(O);else{var K=n(c);K!==null&&de(b,K.startTime-$)}}function O($,K){x=!1,I&&(I=!1,w(v),v=-1),y=!0;var Q=p;try{for(S(K),f=n(l);f!==null&&(!(f.expirationTime>K)||$&&!k());){var fe=f.callback;if(typeof fe=="function"){f.callback=null,p=f.priorityLevel;var re=fe(f.expirationTime<=K);K=t.unstable_now(),typeof re=="function"?f.callback=re:f===n(l)&&r(l),S(K)}else r(l);f=n(l)}if(f!==null)var Ie=!0;else{var Lt=n(c);Lt!==null&&de(b,Lt.startTime-K),Ie=!1}return Ie}finally{f=null,p=Q,y=!1}}var M=!1,T=null,v=-1,P=5,C=-1;function k(){return!(t.unstable_now()-C<P)}function V(){if(T!==null){var $=t.unstable_now();C=$;var K=!0;try{K=T(!0,$)}finally{K?A():(M=!1,T=null)}}else M=!1}var A;if(typeof _=="function")A=function(){_(V)};else if(typeof MessageChannel<"u"){var _e=new MessageChannel,vn=_e.port2;_e.port1.onmessage=V,A=function(){vn.postMessage(null)}}else A=function(){R(V,0)};function hr($){T=$,M||(M=!0,A())}function de($,K){v=R(function(){$(t.unstable_now())},K)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function($){$.callback=null},t.unstable_continueExecution=function(){x||y||(x=!0,hr(O))},t.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<$?Math.floor(1e3/$):5},t.unstable_getCurrentPriorityLevel=function(){return p},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function($){switch(p){case 1:case 2:case 3:var K=3;break;default:K=p}var Q=p;p=K;try{return $()}finally{p=Q}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function($,K){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var Q=p;p=$;try{return K()}finally{p=Q}},t.unstable_scheduleCallback=function($,K,Q){var fe=t.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?fe+Q:fe):Q=fe,$){case 1:var re=-1;break;case 2:re=250;break;case 5:re=1073741823;break;case 4:re=1e4;break;default:re=5e3}return re=Q+re,$={id:h++,callback:K,priorityLevel:$,startTime:Q,expirationTime:re,sortIndex:-1},Q>fe?($.sortIndex=Q,e(c,$),n(l)===null&&$===n(c)&&(I?(w(v),v=-1):I=!0,de(b,Q-fe))):($.sortIndex=re,e(l,$),x||y||(x=!0,hr(O))),$},t.unstable_shouldYield=k,t.unstable_wrapCallback=function($){var K=p;return function(){var Q=p;p=K;try{return $.apply(this,arguments)}finally{p=Q}}}})(mE);pE.exports=mE;var iR=pE.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sR=N,zt=iR;function B(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var gE=new Set,Sa={};function Gi(t,e){js(t,e),js(t+"Capture",e)}function js(t,e){for(Sa[t]=e,t=0;t<e.length;t++)gE.add(e[t])}var er=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),xf=Object.prototype.hasOwnProperty,oR=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,U0={},B0={};function aR(t){return xf.call(B0,t)?!0:xf.call(U0,t)?!1:oR.test(t)?B0[t]=!0:(U0[t]=!0,!1)}function lR(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function uR(t,e,n,r){if(e===null||typeof e>"u"||lR(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Ct(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var rt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){rt[t]=new Ct(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];rt[e]=new Ct(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){rt[t]=new Ct(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){rt[t]=new Ct(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){rt[t]=new Ct(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){rt[t]=new Ct(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){rt[t]=new Ct(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){rt[t]=new Ct(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){rt[t]=new Ct(t,5,!1,t.toLowerCase(),null,!1,!1)});var gm=/[\-:]([a-z])/g;function ym(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(gm,ym);rt[e]=new Ct(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(gm,ym);rt[e]=new Ct(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(gm,ym);rt[e]=new Ct(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){rt[t]=new Ct(t,1,!1,t.toLowerCase(),null,!1,!1)});rt.xlinkHref=new Ct("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){rt[t]=new Ct(t,1,!1,t.toLowerCase(),null,!0,!0)});function vm(t,e,n,r){var i=rt.hasOwnProperty(e)?rt[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(uR(e,n,i,r)&&(n=null),r||i===null?aR(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var ur=sR.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Hl=Symbol.for("react.element"),us=Symbol.for("react.portal"),cs=Symbol.for("react.fragment"),_m=Symbol.for("react.strict_mode"),If=Symbol.for("react.profiler"),yE=Symbol.for("react.provider"),vE=Symbol.for("react.context"),wm=Symbol.for("react.forward_ref"),Pf=Symbol.for("react.suspense"),Cf=Symbol.for("react.suspense_list"),Em=Symbol.for("react.memo"),wr=Symbol.for("react.lazy"),_E=Symbol.for("react.offscreen"),$0=Symbol.iterator;function Lo(t){return t===null||typeof t!="object"?null:(t=$0&&t[$0]||t["@@iterator"],typeof t=="function"?t:null)}var be=Object.assign,dd;function Go(t){if(dd===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);dd=e&&e[1]||""}return`
`+dd+t}var fd=!1;function pd(t,e){if(!t||fd)return"";fd=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{fd=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Go(t):""}function cR(t){switch(t.tag){case 5:return Go(t.type);case 16:return Go("Lazy");case 13:return Go("Suspense");case 19:return Go("SuspenseList");case 0:case 2:case 15:return t=pd(t.type,!1),t;case 11:return t=pd(t.type.render,!1),t;case 1:return t=pd(t.type,!0),t;default:return""}}function Af(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case cs:return"Fragment";case us:return"Portal";case If:return"Profiler";case _m:return"StrictMode";case Pf:return"Suspense";case Cf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case vE:return(t.displayName||"Context")+".Consumer";case yE:return(t._context.displayName||"Context")+".Provider";case wm:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Em:return e=t.displayName||null,e!==null?e:Af(t.type)||"Memo";case wr:e=t._payload,t=t._init;try{return Af(t(e))}catch{}}return null}function hR(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Af(e);case 8:return e===_m?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Hr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function wE(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function dR(t){var e=wE(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ql(t){t._valueTracker||(t._valueTracker=dR(t))}function EE(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=wE(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Gu(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Rf(t,e){var n=e.checked;return be({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function z0(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Hr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function TE(t,e){e=e.checked,e!=null&&vm(t,"checked",e,!1)}function kf(t,e){TE(t,e);var n=Hr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?bf(t,e.type,n):e.hasOwnProperty("defaultValue")&&bf(t,e.type,Hr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function W0(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function bf(t,e,n){(e!=="number"||Gu(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Qo=Array.isArray;function As(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Hr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Vf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(B(91));return be({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function H0(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(B(92));if(Qo(n)){if(1<n.length)throw Error(B(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Hr(n)}}function SE(t,e){var n=Hr(e.value),r=Hr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function q0(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function xE(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Df(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?xE(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Kl,IE=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Kl=Kl||document.createElement("div"),Kl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Kl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function xa(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var sa={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},fR=["Webkit","ms","Moz","O"];Object.keys(sa).forEach(function(t){fR.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),sa[e]=sa[t]})});function PE(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||sa.hasOwnProperty(t)&&sa[t]?(""+e).trim():e+"px"}function CE(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=PE(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var pR=be({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Nf(t,e){if(e){if(pR[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(B(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(B(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(B(61))}if(e.style!=null&&typeof e.style!="object")throw Error(B(62))}}function Of(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Lf=null;function Tm(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Mf=null,Rs=null,ks=null;function K0(t){if(t=al(t)){if(typeof Mf!="function")throw Error(B(280));var e=t.stateNode;e&&(e=eh(e),Mf(t.stateNode,t.type,e))}}function AE(t){Rs?ks?ks.push(t):ks=[t]:Rs=t}function RE(){if(Rs){var t=Rs,e=ks;if(ks=Rs=null,K0(t),e)for(t=0;t<e.length;t++)K0(e[t])}}function kE(t,e){return t(e)}function bE(){}var md=!1;function VE(t,e,n){if(md)return t(e,n);md=!0;try{return kE(t,e,n)}finally{md=!1,(Rs!==null||ks!==null)&&(bE(),RE())}}function Ia(t,e){var n=t.stateNode;if(n===null)return null;var r=eh(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(B(231,e,typeof n));return n}var jf=!1;if(er)try{var Mo={};Object.defineProperty(Mo,"passive",{get:function(){jf=!0}}),window.addEventListener("test",Mo,Mo),window.removeEventListener("test",Mo,Mo)}catch{jf=!1}function mR(t,e,n,r,i,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(h){this.onError(h)}}var oa=!1,Qu=null,Yu=!1,Ff=null,gR={onError:function(t){oa=!0,Qu=t}};function yR(t,e,n,r,i,s,o,a,l){oa=!1,Qu=null,mR.apply(gR,arguments)}function vR(t,e,n,r,i,s,o,a,l){if(yR.apply(this,arguments),oa){if(oa){var c=Qu;oa=!1,Qu=null}else throw Error(B(198));Yu||(Yu=!0,Ff=c)}}function Qi(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function DE(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function G0(t){if(Qi(t)!==t)throw Error(B(188))}function _R(t){var e=t.alternate;if(!e){if(e=Qi(t),e===null)throw Error(B(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return G0(i),t;if(s===r)return G0(i),e;s=s.sibling}throw Error(B(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(B(189))}}if(n.alternate!==r)throw Error(B(190))}if(n.tag!==3)throw Error(B(188));return n.stateNode.current===n?t:e}function NE(t){return t=_R(t),t!==null?OE(t):null}function OE(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=OE(t);if(e!==null)return e;t=t.sibling}return null}var LE=zt.unstable_scheduleCallback,Q0=zt.unstable_cancelCallback,wR=zt.unstable_shouldYield,ER=zt.unstable_requestPaint,Me=zt.unstable_now,TR=zt.unstable_getCurrentPriorityLevel,Sm=zt.unstable_ImmediatePriority,ME=zt.unstable_UserBlockingPriority,Xu=zt.unstable_NormalPriority,SR=zt.unstable_LowPriority,jE=zt.unstable_IdlePriority,Yc=null,xn=null;function xR(t){if(xn&&typeof xn.onCommitFiberRoot=="function")try{xn.onCommitFiberRoot(Yc,t,void 0,(t.current.flags&128)===128)}catch{}}var fn=Math.clz32?Math.clz32:CR,IR=Math.log,PR=Math.LN2;function CR(t){return t>>>=0,t===0?32:31-(IR(t)/PR|0)|0}var Gl=64,Ql=4194304;function Yo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ju(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Yo(a):(s&=o,s!==0&&(r=Yo(s)))}else o=n&~i,o!==0?r=Yo(o):s!==0&&(r=Yo(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-fn(e),i=1<<n,r|=t[n],e&=~i;return r}function AR(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function RR(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-fn(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=AR(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Uf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function FE(){var t=Gl;return Gl<<=1,!(Gl&4194240)&&(Gl=64),t}function gd(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function sl(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-fn(e),t[e]=n}function kR(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-fn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function xm(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-fn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var pe=0;function UE(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var BE,Im,$E,zE,WE,Bf=!1,Yl=[],Dr=null,Nr=null,Or=null,Pa=new Map,Ca=new Map,Tr=[],bR="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Y0(t,e){switch(t){case"focusin":case"focusout":Dr=null;break;case"dragenter":case"dragleave":Nr=null;break;case"mouseover":case"mouseout":Or=null;break;case"pointerover":case"pointerout":Pa.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ca.delete(e.pointerId)}}function jo(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=al(e),e!==null&&Im(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function VR(t,e,n,r,i){switch(e){case"focusin":return Dr=jo(Dr,t,e,n,r,i),!0;case"dragenter":return Nr=jo(Nr,t,e,n,r,i),!0;case"mouseover":return Or=jo(Or,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Pa.set(s,jo(Pa.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Ca.set(s,jo(Ca.get(s)||null,t,e,n,r,i)),!0}return!1}function HE(t){var e=vi(t.target);if(e!==null){var n=Qi(e);if(n!==null){if(e=n.tag,e===13){if(e=DE(n),e!==null){t.blockedOn=e,WE(t.priority,function(){$E(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Eu(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=$f(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Lf=r,n.target.dispatchEvent(r),Lf=null}else return e=al(n),e!==null&&Im(e),t.blockedOn=n,!1;e.shift()}return!0}function X0(t,e,n){Eu(t)&&n.delete(e)}function DR(){Bf=!1,Dr!==null&&Eu(Dr)&&(Dr=null),Nr!==null&&Eu(Nr)&&(Nr=null),Or!==null&&Eu(Or)&&(Or=null),Pa.forEach(X0),Ca.forEach(X0)}function Fo(t,e){t.blockedOn===e&&(t.blockedOn=null,Bf||(Bf=!0,zt.unstable_scheduleCallback(zt.unstable_NormalPriority,DR)))}function Aa(t){function e(i){return Fo(i,t)}if(0<Yl.length){Fo(Yl[0],t);for(var n=1;n<Yl.length;n++){var r=Yl[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Dr!==null&&Fo(Dr,t),Nr!==null&&Fo(Nr,t),Or!==null&&Fo(Or,t),Pa.forEach(e),Ca.forEach(e),n=0;n<Tr.length;n++)r=Tr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Tr.length&&(n=Tr[0],n.blockedOn===null);)HE(n),n.blockedOn===null&&Tr.shift()}var bs=ur.ReactCurrentBatchConfig,Zu=!0;function NR(t,e,n,r){var i=pe,s=bs.transition;bs.transition=null;try{pe=1,Pm(t,e,n,r)}finally{pe=i,bs.transition=s}}function OR(t,e,n,r){var i=pe,s=bs.transition;bs.transition=null;try{pe=4,Pm(t,e,n,r)}finally{pe=i,bs.transition=s}}function Pm(t,e,n,r){if(Zu){var i=$f(t,e,n,r);if(i===null)Pd(t,e,r,ec,n),Y0(t,r);else if(VR(i,t,e,n,r))r.stopPropagation();else if(Y0(t,r),e&4&&-1<bR.indexOf(t)){for(;i!==null;){var s=al(i);if(s!==null&&BE(s),s=$f(t,e,n,r),s===null&&Pd(t,e,r,ec,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Pd(t,e,r,null,n)}}var ec=null;function $f(t,e,n,r){if(ec=null,t=Tm(r),t=vi(t),t!==null)if(e=Qi(t),e===null)t=null;else if(n=e.tag,n===13){if(t=DE(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return ec=t,null}function qE(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(TR()){case Sm:return 1;case ME:return 4;case Xu:case SR:return 16;case jE:return 536870912;default:return 16}default:return 16}}var Ar=null,Cm=null,Tu=null;function KE(){if(Tu)return Tu;var t,e=Cm,n=e.length,r,i="value"in Ar?Ar.value:Ar.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Tu=i.slice(t,1<r?1-r:void 0)}function Su(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Xl(){return!0}function J0(){return!1}function qt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Xl:J0,this.isPropagationStopped=J0,this}return be(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Xl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Xl)},persist:function(){},isPersistent:Xl}),e}var co={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Am=qt(co),ol=be({},co,{view:0,detail:0}),LR=qt(ol),yd,vd,Uo,Xc=be({},ol,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Rm,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Uo&&(Uo&&t.type==="mousemove"?(yd=t.screenX-Uo.screenX,vd=t.screenY-Uo.screenY):vd=yd=0,Uo=t),yd)},movementY:function(t){return"movementY"in t?t.movementY:vd}}),Z0=qt(Xc),MR=be({},Xc,{dataTransfer:0}),jR=qt(MR),FR=be({},ol,{relatedTarget:0}),_d=qt(FR),UR=be({},co,{animationName:0,elapsedTime:0,pseudoElement:0}),BR=qt(UR),$R=be({},co,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),zR=qt($R),WR=be({},co,{data:0}),ev=qt(WR),HR={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},qR={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},KR={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function GR(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=KR[t])?!!e[t]:!1}function Rm(){return GR}var QR=be({},ol,{key:function(t){if(t.key){var e=HR[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Su(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?qR[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Rm,charCode:function(t){return t.type==="keypress"?Su(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Su(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),YR=qt(QR),XR=be({},Xc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),tv=qt(XR),JR=be({},ol,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Rm}),ZR=qt(JR),ek=be({},co,{propertyName:0,elapsedTime:0,pseudoElement:0}),tk=qt(ek),nk=be({},Xc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),rk=qt(nk),ik=[9,13,27,32],km=er&&"CompositionEvent"in window,aa=null;er&&"documentMode"in document&&(aa=document.documentMode);var sk=er&&"TextEvent"in window&&!aa,GE=er&&(!km||aa&&8<aa&&11>=aa),nv=" ",rv=!1;function QE(t,e){switch(t){case"keyup":return ik.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function YE(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var hs=!1;function ok(t,e){switch(t){case"compositionend":return YE(e);case"keypress":return e.which!==32?null:(rv=!0,nv);case"textInput":return t=e.data,t===nv&&rv?null:t;default:return null}}function ak(t,e){if(hs)return t==="compositionend"||!km&&QE(t,e)?(t=KE(),Tu=Cm=Ar=null,hs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return GE&&e.locale!=="ko"?null:e.data;default:return null}}var lk={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function iv(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!lk[t.type]:e==="textarea"}function XE(t,e,n,r){AE(r),e=tc(e,"onChange"),0<e.length&&(n=new Am("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var la=null,Ra=null;function uk(t){lT(t,0)}function Jc(t){var e=ps(t);if(EE(e))return t}function ck(t,e){if(t==="change")return e}var JE=!1;if(er){var wd;if(er){var Ed="oninput"in document;if(!Ed){var sv=document.createElement("div");sv.setAttribute("oninput","return;"),Ed=typeof sv.oninput=="function"}wd=Ed}else wd=!1;JE=wd&&(!document.documentMode||9<document.documentMode)}function ov(){la&&(la.detachEvent("onpropertychange",ZE),Ra=la=null)}function ZE(t){if(t.propertyName==="value"&&Jc(Ra)){var e=[];XE(e,Ra,t,Tm(t)),VE(uk,e)}}function hk(t,e,n){t==="focusin"?(ov(),la=e,Ra=n,la.attachEvent("onpropertychange",ZE)):t==="focusout"&&ov()}function dk(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Jc(Ra)}function fk(t,e){if(t==="click")return Jc(e)}function pk(t,e){if(t==="input"||t==="change")return Jc(e)}function mk(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var gn=typeof Object.is=="function"?Object.is:mk;function ka(t,e){if(gn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!xf.call(e,i)||!gn(t[i],e[i]))return!1}return!0}function av(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function lv(t,e){var n=av(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=av(n)}}function eT(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?eT(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function tT(){for(var t=window,e=Gu();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Gu(t.document)}return e}function bm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function gk(t){var e=tT(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&eT(n.ownerDocument.documentElement,n)){if(r!==null&&bm(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=lv(n,s);var o=lv(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var yk=er&&"documentMode"in document&&11>=document.documentMode,ds=null,zf=null,ua=null,Wf=!1;function uv(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Wf||ds==null||ds!==Gu(r)||(r=ds,"selectionStart"in r&&bm(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ua&&ka(ua,r)||(ua=r,r=tc(zf,"onSelect"),0<r.length&&(e=new Am("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=ds)))}function Jl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var fs={animationend:Jl("Animation","AnimationEnd"),animationiteration:Jl("Animation","AnimationIteration"),animationstart:Jl("Animation","AnimationStart"),transitionend:Jl("Transition","TransitionEnd")},Td={},nT={};er&&(nT=document.createElement("div").style,"AnimationEvent"in window||(delete fs.animationend.animation,delete fs.animationiteration.animation,delete fs.animationstart.animation),"TransitionEvent"in window||delete fs.transitionend.transition);function Zc(t){if(Td[t])return Td[t];if(!fs[t])return t;var e=fs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in nT)return Td[t]=e[n];return t}var rT=Zc("animationend"),iT=Zc("animationiteration"),sT=Zc("animationstart"),oT=Zc("transitionend"),aT=new Map,cv="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Zr(t,e){aT.set(t,e),Gi(e,[t])}for(var Sd=0;Sd<cv.length;Sd++){var xd=cv[Sd],vk=xd.toLowerCase(),_k=xd[0].toUpperCase()+xd.slice(1);Zr(vk,"on"+_k)}Zr(rT,"onAnimationEnd");Zr(iT,"onAnimationIteration");Zr(sT,"onAnimationStart");Zr("dblclick","onDoubleClick");Zr("focusin","onFocus");Zr("focusout","onBlur");Zr(oT,"onTransitionEnd");js("onMouseEnter",["mouseout","mouseover"]);js("onMouseLeave",["mouseout","mouseover"]);js("onPointerEnter",["pointerout","pointerover"]);js("onPointerLeave",["pointerout","pointerover"]);Gi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Gi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Gi("onBeforeInput",["compositionend","keypress","textInput","paste"]);Gi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Gi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Gi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Xo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),wk=new Set("cancel close invalid load scroll toggle".split(" ").concat(Xo));function hv(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,vR(r,e,void 0,t),t.currentTarget=null}function lT(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;hv(i,a,c),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;hv(i,a,c),s=l}}}if(Yu)throw t=Ff,Yu=!1,Ff=null,t}function Ee(t,e){var n=e[Qf];n===void 0&&(n=e[Qf]=new Set);var r=t+"__bubble";n.has(r)||(uT(e,t,2,!1),n.add(r))}function Id(t,e,n){var r=0;e&&(r|=4),uT(n,t,r,e)}var Zl="_reactListening"+Math.random().toString(36).slice(2);function ba(t){if(!t[Zl]){t[Zl]=!0,gE.forEach(function(n){n!=="selectionchange"&&(wk.has(n)||Id(n,!1,t),Id(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Zl]||(e[Zl]=!0,Id("selectionchange",!1,e))}}function uT(t,e,n,r){switch(qE(e)){case 1:var i=NR;break;case 4:i=OR;break;default:i=Pm}n=i.bind(null,e,n,t),i=void 0,!jf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Pd(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=vi(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}VE(function(){var c=s,h=Tm(n),f=[];e:{var p=aT.get(t);if(p!==void 0){var y=Am,x=t;switch(t){case"keypress":if(Su(n)===0)break e;case"keydown":case"keyup":y=YR;break;case"focusin":x="focus",y=_d;break;case"focusout":x="blur",y=_d;break;case"beforeblur":case"afterblur":y=_d;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Z0;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=jR;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=ZR;break;case rT:case iT:case sT:y=BR;break;case oT:y=tk;break;case"scroll":y=LR;break;case"wheel":y=rk;break;case"copy":case"cut":case"paste":y=zR;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=tv}var I=(e&4)!==0,R=!I&&t==="scroll",w=I?p!==null?p+"Capture":null:p;I=[];for(var _=c,S;_!==null;){S=_;var b=S.stateNode;if(S.tag===5&&b!==null&&(S=b,w!==null&&(b=Ia(_,w),b!=null&&I.push(Va(_,b,S)))),R)break;_=_.return}0<I.length&&(p=new y(p,x,null,n,h),f.push({event:p,listeners:I}))}}if(!(e&7)){e:{if(p=t==="mouseover"||t==="pointerover",y=t==="mouseout"||t==="pointerout",p&&n!==Lf&&(x=n.relatedTarget||n.fromElement)&&(vi(x)||x[tr]))break e;if((y||p)&&(p=h.window===h?h:(p=h.ownerDocument)?p.defaultView||p.parentWindow:window,y?(x=n.relatedTarget||n.toElement,y=c,x=x?vi(x):null,x!==null&&(R=Qi(x),x!==R||x.tag!==5&&x.tag!==6)&&(x=null)):(y=null,x=c),y!==x)){if(I=Z0,b="onMouseLeave",w="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(I=tv,b="onPointerLeave",w="onPointerEnter",_="pointer"),R=y==null?p:ps(y),S=x==null?p:ps(x),p=new I(b,_+"leave",y,n,h),p.target=R,p.relatedTarget=S,b=null,vi(h)===c&&(I=new I(w,_+"enter",x,n,h),I.target=S,I.relatedTarget=R,b=I),R=b,y&&x)t:{for(I=y,w=x,_=0,S=I;S;S=is(S))_++;for(S=0,b=w;b;b=is(b))S++;for(;0<_-S;)I=is(I),_--;for(;0<S-_;)w=is(w),S--;for(;_--;){if(I===w||w!==null&&I===w.alternate)break t;I=is(I),w=is(w)}I=null}else I=null;y!==null&&dv(f,p,y,I,!1),x!==null&&R!==null&&dv(f,R,x,I,!0)}}e:{if(p=c?ps(c):window,y=p.nodeName&&p.nodeName.toLowerCase(),y==="select"||y==="input"&&p.type==="file")var O=ck;else if(iv(p))if(JE)O=pk;else{O=dk;var M=hk}else(y=p.nodeName)&&y.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(O=fk);if(O&&(O=O(t,c))){XE(f,O,n,h);break e}M&&M(t,p,c),t==="focusout"&&(M=p._wrapperState)&&M.controlled&&p.type==="number"&&bf(p,"number",p.value)}switch(M=c?ps(c):window,t){case"focusin":(iv(M)||M.contentEditable==="true")&&(ds=M,zf=c,ua=null);break;case"focusout":ua=zf=ds=null;break;case"mousedown":Wf=!0;break;case"contextmenu":case"mouseup":case"dragend":Wf=!1,uv(f,n,h);break;case"selectionchange":if(yk)break;case"keydown":case"keyup":uv(f,n,h)}var T;if(km)e:{switch(t){case"compositionstart":var v="onCompositionStart";break e;case"compositionend":v="onCompositionEnd";break e;case"compositionupdate":v="onCompositionUpdate";break e}v=void 0}else hs?QE(t,n)&&(v="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(v="onCompositionStart");v&&(GE&&n.locale!=="ko"&&(hs||v!=="onCompositionStart"?v==="onCompositionEnd"&&hs&&(T=KE()):(Ar=h,Cm="value"in Ar?Ar.value:Ar.textContent,hs=!0)),M=tc(c,v),0<M.length&&(v=new ev(v,t,null,n,h),f.push({event:v,listeners:M}),T?v.data=T:(T=YE(n),T!==null&&(v.data=T)))),(T=sk?ok(t,n):ak(t,n))&&(c=tc(c,"onBeforeInput"),0<c.length&&(h=new ev("onBeforeInput","beforeinput",null,n,h),f.push({event:h,listeners:c}),h.data=T))}lT(f,e)})}function Va(t,e,n){return{instance:t,listener:e,currentTarget:n}}function tc(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Ia(t,n),s!=null&&r.unshift(Va(t,s,i)),s=Ia(t,e),s!=null&&r.push(Va(t,s,i))),t=t.return}return r}function is(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function dv(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&c!==null&&(a=c,i?(l=Ia(n,s),l!=null&&o.unshift(Va(n,l,a))):i||(l=Ia(n,s),l!=null&&o.push(Va(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Ek=/\r\n?/g,Tk=/\u0000|\uFFFD/g;function fv(t){return(typeof t=="string"?t:""+t).replace(Ek,`
`).replace(Tk,"")}function eu(t,e,n){if(e=fv(e),fv(t)!==e&&n)throw Error(B(425))}function nc(){}var Hf=null,qf=null;function Kf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Gf=typeof setTimeout=="function"?setTimeout:void 0,Sk=typeof clearTimeout=="function"?clearTimeout:void 0,pv=typeof Promise=="function"?Promise:void 0,xk=typeof queueMicrotask=="function"?queueMicrotask:typeof pv<"u"?function(t){return pv.resolve(null).then(t).catch(Ik)}:Gf;function Ik(t){setTimeout(function(){throw t})}function Cd(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Aa(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Aa(e)}function Lr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function mv(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ho=Math.random().toString(36).slice(2),Sn="__reactFiber$"+ho,Da="__reactProps$"+ho,tr="__reactContainer$"+ho,Qf="__reactEvents$"+ho,Pk="__reactListeners$"+ho,Ck="__reactHandles$"+ho;function vi(t){var e=t[Sn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[tr]||n[Sn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=mv(t);t!==null;){if(n=t[Sn])return n;t=mv(t)}return e}t=n,n=t.parentNode}return null}function al(t){return t=t[Sn]||t[tr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ps(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(B(33))}function eh(t){return t[Da]||null}var Yf=[],ms=-1;function ei(t){return{current:t}}function xe(t){0>ms||(t.current=Yf[ms],Yf[ms]=null,ms--)}function ve(t,e){ms++,Yf[ms]=t.current,t.current=e}var qr={},yt=ei(qr),Dt=ei(!1),ji=qr;function Fs(t,e){var n=t.type.contextTypes;if(!n)return qr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Nt(t){return t=t.childContextTypes,t!=null}function rc(){xe(Dt),xe(yt)}function gv(t,e,n){if(yt.current!==qr)throw Error(B(168));ve(yt,e),ve(Dt,n)}function cT(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(B(108,hR(t)||"Unknown",i));return be({},n,r)}function ic(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||qr,ji=yt.current,ve(yt,t),ve(Dt,Dt.current),!0}function yv(t,e,n){var r=t.stateNode;if(!r)throw Error(B(169));n?(t=cT(t,e,ji),r.__reactInternalMemoizedMergedChildContext=t,xe(Dt),xe(yt),ve(yt,t)):xe(Dt),ve(Dt,n)}var Un=null,th=!1,Ad=!1;function hT(t){Un===null?Un=[t]:Un.push(t)}function Ak(t){th=!0,hT(t)}function ti(){if(!Ad&&Un!==null){Ad=!0;var t=0,e=pe;try{var n=Un;for(pe=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Un=null,th=!1}catch(i){throw Un!==null&&(Un=Un.slice(t+1)),LE(Sm,ti),i}finally{pe=e,Ad=!1}}return null}var gs=[],ys=0,sc=null,oc=0,Xt=[],Jt=0,Fi=null,Bn=1,$n="";function fi(t,e){gs[ys++]=oc,gs[ys++]=sc,sc=t,oc=e}function dT(t,e,n){Xt[Jt++]=Bn,Xt[Jt++]=$n,Xt[Jt++]=Fi,Fi=t;var r=Bn;t=$n;var i=32-fn(r)-1;r&=~(1<<i),n+=1;var s=32-fn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Bn=1<<32-fn(e)+i|n<<i|r,$n=s+t}else Bn=1<<s|n<<i|r,$n=t}function Vm(t){t.return!==null&&(fi(t,1),dT(t,1,0))}function Dm(t){for(;t===sc;)sc=gs[--ys],gs[ys]=null,oc=gs[--ys],gs[ys]=null;for(;t===Fi;)Fi=Xt[--Jt],Xt[Jt]=null,$n=Xt[--Jt],Xt[Jt]=null,Bn=Xt[--Jt],Xt[Jt]=null}var $t=null,Ut=null,Pe=!1,cn=null;function fT(t,e){var n=en(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function vv(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,$t=t,Ut=Lr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,$t=t,Ut=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Fi!==null?{id:Bn,overflow:$n}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=en(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,$t=t,Ut=null,!0):!1;default:return!1}}function Xf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Jf(t){if(Pe){var e=Ut;if(e){var n=e;if(!vv(t,e)){if(Xf(t))throw Error(B(418));e=Lr(n.nextSibling);var r=$t;e&&vv(t,e)?fT(r,n):(t.flags=t.flags&-4097|2,Pe=!1,$t=t)}}else{if(Xf(t))throw Error(B(418));t.flags=t.flags&-4097|2,Pe=!1,$t=t}}}function _v(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;$t=t}function tu(t){if(t!==$t)return!1;if(!Pe)return _v(t),Pe=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Kf(t.type,t.memoizedProps)),e&&(e=Ut)){if(Xf(t))throw pT(),Error(B(418));for(;e;)fT(t,e),e=Lr(e.nextSibling)}if(_v(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(B(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Ut=Lr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Ut=null}}else Ut=$t?Lr(t.stateNode.nextSibling):null;return!0}function pT(){for(var t=Ut;t;)t=Lr(t.nextSibling)}function Us(){Ut=$t=null,Pe=!1}function Nm(t){cn===null?cn=[t]:cn.push(t)}var Rk=ur.ReactCurrentBatchConfig;function Bo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(B(309));var r=n.stateNode}if(!r)throw Error(B(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(B(284));if(!n._owner)throw Error(B(290,t))}return t}function nu(t,e){throw t=Object.prototype.toString.call(e),Error(B(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function wv(t){var e=t._init;return e(t._payload)}function mT(t){function e(w,_){if(t){var S=w.deletions;S===null?(w.deletions=[_],w.flags|=16):S.push(_)}}function n(w,_){if(!t)return null;for(;_!==null;)e(w,_),_=_.sibling;return null}function r(w,_){for(w=new Map;_!==null;)_.key!==null?w.set(_.key,_):w.set(_.index,_),_=_.sibling;return w}function i(w,_){return w=Ur(w,_),w.index=0,w.sibling=null,w}function s(w,_,S){return w.index=S,t?(S=w.alternate,S!==null?(S=S.index,S<_?(w.flags|=2,_):S):(w.flags|=2,_)):(w.flags|=1048576,_)}function o(w){return t&&w.alternate===null&&(w.flags|=2),w}function a(w,_,S,b){return _===null||_.tag!==6?(_=Od(S,w.mode,b),_.return=w,_):(_=i(_,S),_.return=w,_)}function l(w,_,S,b){var O=S.type;return O===cs?h(w,_,S.props.children,b,S.key):_!==null&&(_.elementType===O||typeof O=="object"&&O!==null&&O.$$typeof===wr&&wv(O)===_.type)?(b=i(_,S.props),b.ref=Bo(w,_,S),b.return=w,b):(b=ku(S.type,S.key,S.props,null,w.mode,b),b.ref=Bo(w,_,S),b.return=w,b)}function c(w,_,S,b){return _===null||_.tag!==4||_.stateNode.containerInfo!==S.containerInfo||_.stateNode.implementation!==S.implementation?(_=Ld(S,w.mode,b),_.return=w,_):(_=i(_,S.children||[]),_.return=w,_)}function h(w,_,S,b,O){return _===null||_.tag!==7?(_=Ii(S,w.mode,b,O),_.return=w,_):(_=i(_,S),_.return=w,_)}function f(w,_,S){if(typeof _=="string"&&_!==""||typeof _=="number")return _=Od(""+_,w.mode,S),_.return=w,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Hl:return S=ku(_.type,_.key,_.props,null,w.mode,S),S.ref=Bo(w,null,_),S.return=w,S;case us:return _=Ld(_,w.mode,S),_.return=w,_;case wr:var b=_._init;return f(w,b(_._payload),S)}if(Qo(_)||Lo(_))return _=Ii(_,w.mode,S,null),_.return=w,_;nu(w,_)}return null}function p(w,_,S,b){var O=_!==null?_.key:null;if(typeof S=="string"&&S!==""||typeof S=="number")return O!==null?null:a(w,_,""+S,b);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Hl:return S.key===O?l(w,_,S,b):null;case us:return S.key===O?c(w,_,S,b):null;case wr:return O=S._init,p(w,_,O(S._payload),b)}if(Qo(S)||Lo(S))return O!==null?null:h(w,_,S,b,null);nu(w,S)}return null}function y(w,_,S,b,O){if(typeof b=="string"&&b!==""||typeof b=="number")return w=w.get(S)||null,a(_,w,""+b,O);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Hl:return w=w.get(b.key===null?S:b.key)||null,l(_,w,b,O);case us:return w=w.get(b.key===null?S:b.key)||null,c(_,w,b,O);case wr:var M=b._init;return y(w,_,S,M(b._payload),O)}if(Qo(b)||Lo(b))return w=w.get(S)||null,h(_,w,b,O,null);nu(_,b)}return null}function x(w,_,S,b){for(var O=null,M=null,T=_,v=_=0,P=null;T!==null&&v<S.length;v++){T.index>v?(P=T,T=null):P=T.sibling;var C=p(w,T,S[v],b);if(C===null){T===null&&(T=P);break}t&&T&&C.alternate===null&&e(w,T),_=s(C,_,v),M===null?O=C:M.sibling=C,M=C,T=P}if(v===S.length)return n(w,T),Pe&&fi(w,v),O;if(T===null){for(;v<S.length;v++)T=f(w,S[v],b),T!==null&&(_=s(T,_,v),M===null?O=T:M.sibling=T,M=T);return Pe&&fi(w,v),O}for(T=r(w,T);v<S.length;v++)P=y(T,w,v,S[v],b),P!==null&&(t&&P.alternate!==null&&T.delete(P.key===null?v:P.key),_=s(P,_,v),M===null?O=P:M.sibling=P,M=P);return t&&T.forEach(function(k){return e(w,k)}),Pe&&fi(w,v),O}function I(w,_,S,b){var O=Lo(S);if(typeof O!="function")throw Error(B(150));if(S=O.call(S),S==null)throw Error(B(151));for(var M=O=null,T=_,v=_=0,P=null,C=S.next();T!==null&&!C.done;v++,C=S.next()){T.index>v?(P=T,T=null):P=T.sibling;var k=p(w,T,C.value,b);if(k===null){T===null&&(T=P);break}t&&T&&k.alternate===null&&e(w,T),_=s(k,_,v),M===null?O=k:M.sibling=k,M=k,T=P}if(C.done)return n(w,T),Pe&&fi(w,v),O;if(T===null){for(;!C.done;v++,C=S.next())C=f(w,C.value,b),C!==null&&(_=s(C,_,v),M===null?O=C:M.sibling=C,M=C);return Pe&&fi(w,v),O}for(T=r(w,T);!C.done;v++,C=S.next())C=y(T,w,v,C.value,b),C!==null&&(t&&C.alternate!==null&&T.delete(C.key===null?v:C.key),_=s(C,_,v),M===null?O=C:M.sibling=C,M=C);return t&&T.forEach(function(V){return e(w,V)}),Pe&&fi(w,v),O}function R(w,_,S,b){if(typeof S=="object"&&S!==null&&S.type===cs&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case Hl:e:{for(var O=S.key,M=_;M!==null;){if(M.key===O){if(O=S.type,O===cs){if(M.tag===7){n(w,M.sibling),_=i(M,S.props.children),_.return=w,w=_;break e}}else if(M.elementType===O||typeof O=="object"&&O!==null&&O.$$typeof===wr&&wv(O)===M.type){n(w,M.sibling),_=i(M,S.props),_.ref=Bo(w,M,S),_.return=w,w=_;break e}n(w,M);break}else e(w,M);M=M.sibling}S.type===cs?(_=Ii(S.props.children,w.mode,b,S.key),_.return=w,w=_):(b=ku(S.type,S.key,S.props,null,w.mode,b),b.ref=Bo(w,_,S),b.return=w,w=b)}return o(w);case us:e:{for(M=S.key;_!==null;){if(_.key===M)if(_.tag===4&&_.stateNode.containerInfo===S.containerInfo&&_.stateNode.implementation===S.implementation){n(w,_.sibling),_=i(_,S.children||[]),_.return=w,w=_;break e}else{n(w,_);break}else e(w,_);_=_.sibling}_=Ld(S,w.mode,b),_.return=w,w=_}return o(w);case wr:return M=S._init,R(w,_,M(S._payload),b)}if(Qo(S))return x(w,_,S,b);if(Lo(S))return I(w,_,S,b);nu(w,S)}return typeof S=="string"&&S!==""||typeof S=="number"?(S=""+S,_!==null&&_.tag===6?(n(w,_.sibling),_=i(_,S),_.return=w,w=_):(n(w,_),_=Od(S,w.mode,b),_.return=w,w=_),o(w)):n(w,_)}return R}var Bs=mT(!0),gT=mT(!1),ac=ei(null),lc=null,vs=null,Om=null;function Lm(){Om=vs=lc=null}function Mm(t){var e=ac.current;xe(ac),t._currentValue=e}function Zf(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Vs(t,e){lc=t,Om=vs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(bt=!0),t.firstContext=null)}function nn(t){var e=t._currentValue;if(Om!==t)if(t={context:t,memoizedValue:e,next:null},vs===null){if(lc===null)throw Error(B(308));vs=t,lc.dependencies={lanes:0,firstContext:t}}else vs=vs.next=t;return e}var _i=null;function jm(t){_i===null?_i=[t]:_i.push(t)}function yT(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,jm(e)):(n.next=i.next,i.next=n),e.interleaved=n,nr(t,r)}function nr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Er=!1;function Fm(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function vT(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Kn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Mr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ae&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,nr(t,n)}return i=r.interleaved,i===null?(e.next=e,jm(r)):(e.next=i.next,i.next=e),r.interleaved=e,nr(t,n)}function xu(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,xm(t,n)}}function Ev(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function uc(t,e,n,r){var i=t.updateQueue;Er=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var h=t.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==o&&(a===null?h.firstBaseUpdate=c:a.next=c,h.lastBaseUpdate=l))}if(s!==null){var f=i.baseState;o=0,h=c=l=null,a=s;do{var p=a.lane,y=a.eventTime;if((r&p)===p){h!==null&&(h=h.next={eventTime:y,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var x=t,I=a;switch(p=e,y=n,I.tag){case 1:if(x=I.payload,typeof x=="function"){f=x.call(y,f,p);break e}f=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=I.payload,p=typeof x=="function"?x.call(y,f,p):x,p==null)break e;f=be({},f,p);break e;case 2:Er=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,p=i.effects,p===null?i.effects=[a]:p.push(a))}else y={eventTime:y,lane:p,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(c=h=y,l=f):h=h.next=y,o|=p;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;p=a,a=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(!0);if(h===null&&(l=f),i.baseState=l,i.firstBaseUpdate=c,i.lastBaseUpdate=h,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Bi|=o,t.lanes=o,t.memoizedState=f}}function Tv(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(B(191,i));i.call(r)}}}var ll={},In=ei(ll),Na=ei(ll),Oa=ei(ll);function wi(t){if(t===ll)throw Error(B(174));return t}function Um(t,e){switch(ve(Oa,e),ve(Na,t),ve(In,ll),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Df(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Df(e,t)}xe(In),ve(In,e)}function $s(){xe(In),xe(Na),xe(Oa)}function _T(t){wi(Oa.current);var e=wi(In.current),n=Df(e,t.type);e!==n&&(ve(Na,t),ve(In,n))}function Bm(t){Na.current===t&&(xe(In),xe(Na))}var Ae=ei(0);function cc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Rd=[];function $m(){for(var t=0;t<Rd.length;t++)Rd[t]._workInProgressVersionPrimary=null;Rd.length=0}var Iu=ur.ReactCurrentDispatcher,kd=ur.ReactCurrentBatchConfig,Ui=0,ke=null,$e=null,Ke=null,hc=!1,ca=!1,La=0,kk=0;function lt(){throw Error(B(321))}function zm(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!gn(t[n],e[n]))return!1;return!0}function Wm(t,e,n,r,i,s){if(Ui=s,ke=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Iu.current=t===null||t.memoizedState===null?Nk:Ok,t=n(r,i),ca){s=0;do{if(ca=!1,La=0,25<=s)throw Error(B(301));s+=1,Ke=$e=null,e.updateQueue=null,Iu.current=Lk,t=n(r,i)}while(ca)}if(Iu.current=dc,e=$e!==null&&$e.next!==null,Ui=0,Ke=$e=ke=null,hc=!1,e)throw Error(B(300));return t}function Hm(){var t=La!==0;return La=0,t}function En(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ke===null?ke.memoizedState=Ke=t:Ke=Ke.next=t,Ke}function rn(){if($e===null){var t=ke.alternate;t=t!==null?t.memoizedState:null}else t=$e.next;var e=Ke===null?ke.memoizedState:Ke.next;if(e!==null)Ke=e,$e=t;else{if(t===null)throw Error(B(310));$e=t,t={memoizedState:$e.memoizedState,baseState:$e.baseState,baseQueue:$e.baseQueue,queue:$e.queue,next:null},Ke===null?ke.memoizedState=Ke=t:Ke=Ke.next=t}return Ke}function Ma(t,e){return typeof e=="function"?e(t):e}function bd(t){var e=rn(),n=e.queue;if(n===null)throw Error(B(311));n.lastRenderedReducer=t;var r=$e,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,c=s;do{var h=c.lane;if((Ui&h)===h)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var f={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=f,o=r):l=l.next=f,ke.lanes|=h,Bi|=h}c=c.next}while(c!==null&&c!==s);l===null?o=r:l.next=a,gn(r,e.memoizedState)||(bt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,ke.lanes|=s,Bi|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Vd(t){var e=rn(),n=e.queue;if(n===null)throw Error(B(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);gn(s,e.memoizedState)||(bt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function wT(){}function ET(t,e){var n=ke,r=rn(),i=e(),s=!gn(r.memoizedState,i);if(s&&(r.memoizedState=i,bt=!0),r=r.queue,qm(xT.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Ke!==null&&Ke.memoizedState.tag&1){if(n.flags|=2048,ja(9,ST.bind(null,n,r,i,e),void 0,null),Qe===null)throw Error(B(349));Ui&30||TT(n,e,i)}return i}function TT(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ke.updateQueue,e===null?(e={lastEffect:null,stores:null},ke.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function ST(t,e,n,r){e.value=n,e.getSnapshot=r,IT(e)&&PT(t)}function xT(t,e,n){return n(function(){IT(e)&&PT(t)})}function IT(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!gn(t,n)}catch{return!0}}function PT(t){var e=nr(t,1);e!==null&&pn(e,t,1,-1)}function Sv(t){var e=En();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ma,lastRenderedState:t},e.queue=t,t=t.dispatch=Dk.bind(null,ke,t),[e.memoizedState,t]}function ja(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ke.updateQueue,e===null?(e={lastEffect:null,stores:null},ke.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function CT(){return rn().memoizedState}function Pu(t,e,n,r){var i=En();ke.flags|=t,i.memoizedState=ja(1|e,n,void 0,r===void 0?null:r)}function nh(t,e,n,r){var i=rn();r=r===void 0?null:r;var s=void 0;if($e!==null){var o=$e.memoizedState;if(s=o.destroy,r!==null&&zm(r,o.deps)){i.memoizedState=ja(e,n,s,r);return}}ke.flags|=t,i.memoizedState=ja(1|e,n,s,r)}function xv(t,e){return Pu(8390656,8,t,e)}function qm(t,e){return nh(2048,8,t,e)}function AT(t,e){return nh(4,2,t,e)}function RT(t,e){return nh(4,4,t,e)}function kT(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function bT(t,e,n){return n=n!=null?n.concat([t]):null,nh(4,4,kT.bind(null,e,t),n)}function Km(){}function VT(t,e){var n=rn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&zm(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function DT(t,e){var n=rn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&zm(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function NT(t,e,n){return Ui&21?(gn(n,e)||(n=FE(),ke.lanes|=n,Bi|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,bt=!0),t.memoizedState=n)}function bk(t,e){var n=pe;pe=n!==0&&4>n?n:4,t(!0);var r=kd.transition;kd.transition={};try{t(!1),e()}finally{pe=n,kd.transition=r}}function OT(){return rn().memoizedState}function Vk(t,e,n){var r=Fr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},LT(t))MT(e,n);else if(n=yT(t,e,n,r),n!==null){var i=St();pn(n,t,r,i),jT(n,e,r)}}function Dk(t,e,n){var r=Fr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(LT(t))MT(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,gn(a,o)){var l=e.interleaved;l===null?(i.next=i,jm(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=yT(t,e,i,r),n!==null&&(i=St(),pn(n,t,r,i),jT(n,e,r))}}function LT(t){var e=t.alternate;return t===ke||e!==null&&e===ke}function MT(t,e){ca=hc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function jT(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,xm(t,n)}}var dc={readContext:nn,useCallback:lt,useContext:lt,useEffect:lt,useImperativeHandle:lt,useInsertionEffect:lt,useLayoutEffect:lt,useMemo:lt,useReducer:lt,useRef:lt,useState:lt,useDebugValue:lt,useDeferredValue:lt,useTransition:lt,useMutableSource:lt,useSyncExternalStore:lt,useId:lt,unstable_isNewReconciler:!1},Nk={readContext:nn,useCallback:function(t,e){return En().memoizedState=[t,e===void 0?null:e],t},useContext:nn,useEffect:xv,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Pu(4194308,4,kT.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Pu(4194308,4,t,e)},useInsertionEffect:function(t,e){return Pu(4,2,t,e)},useMemo:function(t,e){var n=En();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=En();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=Vk.bind(null,ke,t),[r.memoizedState,t]},useRef:function(t){var e=En();return t={current:t},e.memoizedState=t},useState:Sv,useDebugValue:Km,useDeferredValue:function(t){return En().memoizedState=t},useTransition:function(){var t=Sv(!1),e=t[0];return t=bk.bind(null,t[1]),En().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ke,i=En();if(Pe){if(n===void 0)throw Error(B(407));n=n()}else{if(n=e(),Qe===null)throw Error(B(349));Ui&30||TT(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,xv(xT.bind(null,r,s,t),[t]),r.flags|=2048,ja(9,ST.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=En(),e=Qe.identifierPrefix;if(Pe){var n=$n,r=Bn;n=(r&~(1<<32-fn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=La++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=kk++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Ok={readContext:nn,useCallback:VT,useContext:nn,useEffect:qm,useImperativeHandle:bT,useInsertionEffect:AT,useLayoutEffect:RT,useMemo:DT,useReducer:bd,useRef:CT,useState:function(){return bd(Ma)},useDebugValue:Km,useDeferredValue:function(t){var e=rn();return NT(e,$e.memoizedState,t)},useTransition:function(){var t=bd(Ma)[0],e=rn().memoizedState;return[t,e]},useMutableSource:wT,useSyncExternalStore:ET,useId:OT,unstable_isNewReconciler:!1},Lk={readContext:nn,useCallback:VT,useContext:nn,useEffect:qm,useImperativeHandle:bT,useInsertionEffect:AT,useLayoutEffect:RT,useMemo:DT,useReducer:Vd,useRef:CT,useState:function(){return Vd(Ma)},useDebugValue:Km,useDeferredValue:function(t){var e=rn();return $e===null?e.memoizedState=t:NT(e,$e.memoizedState,t)},useTransition:function(){var t=Vd(Ma)[0],e=rn().memoizedState;return[t,e]},useMutableSource:wT,useSyncExternalStore:ET,useId:OT,unstable_isNewReconciler:!1};function ln(t,e){if(t&&t.defaultProps){e=be({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function ep(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:be({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var rh={isMounted:function(t){return(t=t._reactInternals)?Qi(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=St(),i=Fr(t),s=Kn(r,i);s.payload=e,n!=null&&(s.callback=n),e=Mr(t,s,i),e!==null&&(pn(e,t,i,r),xu(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=St(),i=Fr(t),s=Kn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Mr(t,s,i),e!==null&&(pn(e,t,i,r),xu(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=St(),r=Fr(t),i=Kn(n,r);i.tag=2,e!=null&&(i.callback=e),e=Mr(t,i,r),e!==null&&(pn(e,t,r,n),xu(e,t,r))}};function Iv(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!ka(n,r)||!ka(i,s):!0}function FT(t,e,n){var r=!1,i=qr,s=e.contextType;return typeof s=="object"&&s!==null?s=nn(s):(i=Nt(e)?ji:yt.current,r=e.contextTypes,s=(r=r!=null)?Fs(t,i):qr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=rh,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Pv(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&rh.enqueueReplaceState(e,e.state,null)}function tp(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Fm(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=nn(s):(s=Nt(e)?ji:yt.current,i.context=Fs(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(ep(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&rh.enqueueReplaceState(i,i.state,null),uc(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function zs(t,e){try{var n="",r=e;do n+=cR(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Dd(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function np(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Mk=typeof WeakMap=="function"?WeakMap:Map;function UT(t,e,n){n=Kn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){pc||(pc=!0,dp=r),np(t,e)},n}function BT(t,e,n){n=Kn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){np(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){np(t,e),typeof r!="function"&&(jr===null?jr=new Set([this]):jr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Cv(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new Mk;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=Xk.bind(null,t,e,n),e.then(t,t))}function Av(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Rv(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Kn(-1,1),e.tag=2,Mr(n,e,1))),n.lanes|=1),t)}var jk=ur.ReactCurrentOwner,bt=!1;function Tt(t,e,n,r){e.child=t===null?gT(e,null,n,r):Bs(e,t.child,n,r)}function kv(t,e,n,r,i){n=n.render;var s=e.ref;return Vs(e,i),r=Wm(t,e,n,r,s,i),n=Hm(),t!==null&&!bt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,rr(t,e,i)):(Pe&&n&&Vm(e),e.flags|=1,Tt(t,e,r,i),e.child)}function bv(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!tg(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,$T(t,e,s,r,i)):(t=ku(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:ka,n(o,r)&&t.ref===e.ref)return rr(t,e,i)}return e.flags|=1,t=Ur(s,r),t.ref=e.ref,t.return=e,e.child=t}function $T(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(ka(s,r)&&t.ref===e.ref)if(bt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(bt=!0);else return e.lanes=t.lanes,rr(t,e,i)}return rp(t,e,n,r,i)}function zT(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ve(ws,Ft),Ft|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ve(ws,Ft),Ft|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ve(ws,Ft),Ft|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ve(ws,Ft),Ft|=r;return Tt(t,e,i,n),e.child}function WT(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function rp(t,e,n,r,i){var s=Nt(n)?ji:yt.current;return s=Fs(e,s),Vs(e,i),n=Wm(t,e,n,r,s,i),r=Hm(),t!==null&&!bt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,rr(t,e,i)):(Pe&&r&&Vm(e),e.flags|=1,Tt(t,e,n,i),e.child)}function Vv(t,e,n,r,i){if(Nt(n)){var s=!0;ic(e)}else s=!1;if(Vs(e,i),e.stateNode===null)Cu(t,e),FT(e,n,r),tp(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=nn(c):(c=Nt(n)?ji:yt.current,c=Fs(e,c));var h=n.getDerivedStateFromProps,f=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==c)&&Pv(e,o,r,c),Er=!1;var p=e.memoizedState;o.state=p,uc(e,r,o,i),l=e.memoizedState,a!==r||p!==l||Dt.current||Er?(typeof h=="function"&&(ep(e,n,h,r),l=e.memoizedState),(a=Er||Iv(e,n,a,r,p,l,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=c,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,vT(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:ln(e.type,a),o.props=c,f=e.pendingProps,p=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=nn(l):(l=Nt(n)?ji:yt.current,l=Fs(e,l));var y=n.getDerivedStateFromProps;(h=typeof y=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||p!==l)&&Pv(e,o,r,l),Er=!1,p=e.memoizedState,o.state=p,uc(e,r,o,i);var x=e.memoizedState;a!==f||p!==x||Dt.current||Er?(typeof y=="function"&&(ep(e,n,y,r),x=e.memoizedState),(c=Er||Iv(e,n,c,r,p,x,l)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,x,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,x,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=x),o.props=r,o.state=x,o.context=l,r=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),r=!1)}return ip(t,e,n,r,s,i)}function ip(t,e,n,r,i,s){WT(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&yv(e,n,!1),rr(t,e,s);r=e.stateNode,jk.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Bs(e,t.child,null,s),e.child=Bs(e,null,a,s)):Tt(t,e,a,s),e.memoizedState=r.state,i&&yv(e,n,!0),e.child}function HT(t){var e=t.stateNode;e.pendingContext?gv(t,e.pendingContext,e.pendingContext!==e.context):e.context&&gv(t,e.context,!1),Um(t,e.containerInfo)}function Dv(t,e,n,r,i){return Us(),Nm(i),e.flags|=256,Tt(t,e,n,r),e.child}var sp={dehydrated:null,treeContext:null,retryLane:0};function op(t){return{baseLanes:t,cachePool:null,transitions:null}}function qT(t,e,n){var r=e.pendingProps,i=Ae.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ve(Ae,i&1),t===null)return Jf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=oh(o,r,0,null),t=Ii(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=op(n),e.memoizedState=sp,t):Gm(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return Fk(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Ur(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Ur(a,s):(s=Ii(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?op(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=sp,r}return s=t.child,t=s.sibling,r=Ur(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Gm(t,e){return e=oh({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ru(t,e,n,r){return r!==null&&Nm(r),Bs(e,t.child,null,n),t=Gm(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Fk(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Dd(Error(B(422))),ru(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=oh({mode:"visible",children:r.children},i,0,null),s=Ii(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Bs(e,t.child,null,o),e.child.memoizedState=op(o),e.memoizedState=sp,s);if(!(e.mode&1))return ru(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(B(419)),r=Dd(s,r,void 0),ru(t,e,o,r)}if(a=(o&t.childLanes)!==0,bt||a){if(r=Qe,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,nr(t,i),pn(r,t,i,-1))}return eg(),r=Dd(Error(B(421))),ru(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=Jk.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Ut=Lr(i.nextSibling),$t=e,Pe=!0,cn=null,t!==null&&(Xt[Jt++]=Bn,Xt[Jt++]=$n,Xt[Jt++]=Fi,Bn=t.id,$n=t.overflow,Fi=e),e=Gm(e,r.children),e.flags|=4096,e)}function Nv(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Zf(t.return,e,n)}function Nd(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function KT(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Tt(t,e,r.children,n),r=Ae.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Nv(t,n,e);else if(t.tag===19)Nv(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ve(Ae,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&cc(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Nd(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&cc(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Nd(e,!0,n,null,s);break;case"together":Nd(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Cu(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function rr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Bi|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(B(153));if(e.child!==null){for(t=e.child,n=Ur(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Ur(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Uk(t,e,n){switch(e.tag){case 3:HT(e),Us();break;case 5:_T(e);break;case 1:Nt(e.type)&&ic(e);break;case 4:Um(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ve(ac,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ve(Ae,Ae.current&1),e.flags|=128,null):n&e.child.childLanes?qT(t,e,n):(ve(Ae,Ae.current&1),t=rr(t,e,n),t!==null?t.sibling:null);ve(Ae,Ae.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return KT(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ve(Ae,Ae.current),r)break;return null;case 22:case 23:return e.lanes=0,zT(t,e,n)}return rr(t,e,n)}var GT,ap,QT,YT;GT=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ap=function(){};QT=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,wi(In.current);var s=null;switch(n){case"input":i=Rf(t,i),r=Rf(t,r),s=[];break;case"select":i=be({},i,{value:void 0}),r=be({},r,{value:void 0}),s=[];break;case"textarea":i=Vf(t,i),r=Vf(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=nc)}Nf(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Sa.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var l=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Sa.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&Ee("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};YT=function(t,e,n,r){n!==r&&(e.flags|=4)};function $o(t,e){if(!Pe)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function ut(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function Bk(t,e,n){var r=e.pendingProps;switch(Dm(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ut(e),null;case 1:return Nt(e.type)&&rc(),ut(e),null;case 3:return r=e.stateNode,$s(),xe(Dt),xe(yt),$m(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(tu(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,cn!==null&&(mp(cn),cn=null))),ap(t,e),ut(e),null;case 5:Bm(e);var i=wi(Oa.current);if(n=e.type,t!==null&&e.stateNode!=null)QT(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(B(166));return ut(e),null}if(t=wi(In.current),tu(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Sn]=e,r[Da]=s,t=(e.mode&1)!==0,n){case"dialog":Ee("cancel",r),Ee("close",r);break;case"iframe":case"object":case"embed":Ee("load",r);break;case"video":case"audio":for(i=0;i<Xo.length;i++)Ee(Xo[i],r);break;case"source":Ee("error",r);break;case"img":case"image":case"link":Ee("error",r),Ee("load",r);break;case"details":Ee("toggle",r);break;case"input":z0(r,s),Ee("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Ee("invalid",r);break;case"textarea":H0(r,s),Ee("invalid",r)}Nf(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&eu(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&eu(r.textContent,a,t),i=["children",""+a]):Sa.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Ee("scroll",r)}switch(n){case"input":ql(r),W0(r,s,!0);break;case"textarea":ql(r),q0(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=nc)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=xE(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Sn]=e,t[Da]=r,GT(t,e,!1,!1),e.stateNode=t;e:{switch(o=Of(n,r),n){case"dialog":Ee("cancel",t),Ee("close",t),i=r;break;case"iframe":case"object":case"embed":Ee("load",t),i=r;break;case"video":case"audio":for(i=0;i<Xo.length;i++)Ee(Xo[i],t);i=r;break;case"source":Ee("error",t),i=r;break;case"img":case"image":case"link":Ee("error",t),Ee("load",t),i=r;break;case"details":Ee("toggle",t),i=r;break;case"input":z0(t,r),i=Rf(t,r),Ee("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=be({},r,{value:void 0}),Ee("invalid",t);break;case"textarea":H0(t,r),i=Vf(t,r),Ee("invalid",t);break;default:i=r}Nf(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?CE(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&IE(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&xa(t,l):typeof l=="number"&&xa(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Sa.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Ee("scroll",t):l!=null&&vm(t,s,l,o))}switch(n){case"input":ql(t),W0(t,r,!1);break;case"textarea":ql(t),q0(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Hr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?As(t,!!r.multiple,s,!1):r.defaultValue!=null&&As(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=nc)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return ut(e),null;case 6:if(t&&e.stateNode!=null)YT(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(B(166));if(n=wi(Oa.current),wi(In.current),tu(e)){if(r=e.stateNode,n=e.memoizedProps,r[Sn]=e,(s=r.nodeValue!==n)&&(t=$t,t!==null))switch(t.tag){case 3:eu(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&eu(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Sn]=e,e.stateNode=r}return ut(e),null;case 13:if(xe(Ae),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Pe&&Ut!==null&&e.mode&1&&!(e.flags&128))pT(),Us(),e.flags|=98560,s=!1;else if(s=tu(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(B(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(B(317));s[Sn]=e}else Us(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;ut(e),s=!1}else cn!==null&&(mp(cn),cn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Ae.current&1?ze===0&&(ze=3):eg())),e.updateQueue!==null&&(e.flags|=4),ut(e),null);case 4:return $s(),ap(t,e),t===null&&ba(e.stateNode.containerInfo),ut(e),null;case 10:return Mm(e.type._context),ut(e),null;case 17:return Nt(e.type)&&rc(),ut(e),null;case 19:if(xe(Ae),s=e.memoizedState,s===null)return ut(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)$o(s,!1);else{if(ze!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=cc(t),o!==null){for(e.flags|=128,$o(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ve(Ae,Ae.current&1|2),e.child}t=t.sibling}s.tail!==null&&Me()>Ws&&(e.flags|=128,r=!0,$o(s,!1),e.lanes=4194304)}else{if(!r)if(t=cc(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),$o(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Pe)return ut(e),null}else 2*Me()-s.renderingStartTime>Ws&&n!==1073741824&&(e.flags|=128,r=!0,$o(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Me(),e.sibling=null,n=Ae.current,ve(Ae,r?n&1|2:n&1),e):(ut(e),null);case 22:case 23:return Zm(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Ft&1073741824&&(ut(e),e.subtreeFlags&6&&(e.flags|=8192)):ut(e),null;case 24:return null;case 25:return null}throw Error(B(156,e.tag))}function $k(t,e){switch(Dm(e),e.tag){case 1:return Nt(e.type)&&rc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return $s(),xe(Dt),xe(yt),$m(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Bm(e),null;case 13:if(xe(Ae),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(B(340));Us()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return xe(Ae),null;case 4:return $s(),null;case 10:return Mm(e.type._context),null;case 22:case 23:return Zm(),null;case 24:return null;default:return null}}var iu=!1,ft=!1,zk=typeof WeakSet=="function"?WeakSet:Set,W=null;function _s(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ne(t,e,r)}else n.current=null}function lp(t,e,n){try{n()}catch(r){Ne(t,e,r)}}var Ov=!1;function Wk(t,e){if(Hf=Zu,t=tT(),bm(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,h=0,f=t,p=null;t:for(;;){for(var y;f!==n||i!==0&&f.nodeType!==3||(a=o+i),f!==s||r!==0&&f.nodeType!==3||(l=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(y=f.firstChild)!==null;)p=f,f=y;for(;;){if(f===t)break t;if(p===n&&++c===i&&(a=o),p===s&&++h===r&&(l=o),(y=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=y}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(qf={focusedElem:t,selectionRange:n},Zu=!1,W=e;W!==null;)if(e=W,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,W=t;else for(;W!==null;){e=W;try{var x=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var I=x.memoizedProps,R=x.memoizedState,w=e.stateNode,_=w.getSnapshotBeforeUpdate(e.elementType===e.type?I:ln(e.type,I),R);w.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var S=e.stateNode.containerInfo;S.nodeType===1?S.textContent="":S.nodeType===9&&S.documentElement&&S.removeChild(S.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(B(163))}}catch(b){Ne(e,e.return,b)}if(t=e.sibling,t!==null){t.return=e.return,W=t;break}W=e.return}return x=Ov,Ov=!1,x}function ha(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&lp(e,n,s)}i=i.next}while(i!==r)}}function ih(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function up(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function XT(t){var e=t.alternate;e!==null&&(t.alternate=null,XT(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Sn],delete e[Da],delete e[Qf],delete e[Pk],delete e[Ck])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function JT(t){return t.tag===5||t.tag===3||t.tag===4}function Lv(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||JT(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function cp(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=nc));else if(r!==4&&(t=t.child,t!==null))for(cp(t,e,n),t=t.sibling;t!==null;)cp(t,e,n),t=t.sibling}function hp(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(hp(t,e,n),t=t.sibling;t!==null;)hp(t,e,n),t=t.sibling}var Xe=null,un=!1;function gr(t,e,n){for(n=n.child;n!==null;)ZT(t,e,n),n=n.sibling}function ZT(t,e,n){if(xn&&typeof xn.onCommitFiberUnmount=="function")try{xn.onCommitFiberUnmount(Yc,n)}catch{}switch(n.tag){case 5:ft||_s(n,e);case 6:var r=Xe,i=un;Xe=null,gr(t,e,n),Xe=r,un=i,Xe!==null&&(un?(t=Xe,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Xe.removeChild(n.stateNode));break;case 18:Xe!==null&&(un?(t=Xe,n=n.stateNode,t.nodeType===8?Cd(t.parentNode,n):t.nodeType===1&&Cd(t,n),Aa(t)):Cd(Xe,n.stateNode));break;case 4:r=Xe,i=un,Xe=n.stateNode.containerInfo,un=!0,gr(t,e,n),Xe=r,un=i;break;case 0:case 11:case 14:case 15:if(!ft&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&lp(n,e,o),i=i.next}while(i!==r)}gr(t,e,n);break;case 1:if(!ft&&(_s(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Ne(n,e,a)}gr(t,e,n);break;case 21:gr(t,e,n);break;case 22:n.mode&1?(ft=(r=ft)||n.memoizedState!==null,gr(t,e,n),ft=r):gr(t,e,n);break;default:gr(t,e,n)}}function Mv(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new zk),e.forEach(function(r){var i=Zk.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function an(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Xe=a.stateNode,un=!1;break e;case 3:Xe=a.stateNode.containerInfo,un=!0;break e;case 4:Xe=a.stateNode.containerInfo,un=!0;break e}a=a.return}if(Xe===null)throw Error(B(160));ZT(s,o,i),Xe=null,un=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(c){Ne(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)eS(e,t),e=e.sibling}function eS(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(an(e,t),_n(t),r&4){try{ha(3,t,t.return),ih(3,t)}catch(I){Ne(t,t.return,I)}try{ha(5,t,t.return)}catch(I){Ne(t,t.return,I)}}break;case 1:an(e,t),_n(t),r&512&&n!==null&&_s(n,n.return);break;case 5:if(an(e,t),_n(t),r&512&&n!==null&&_s(n,n.return),t.flags&32){var i=t.stateNode;try{xa(i,"")}catch(I){Ne(t,t.return,I)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&TE(i,s),Of(a,o);var c=Of(a,s);for(o=0;o<l.length;o+=2){var h=l[o],f=l[o+1];h==="style"?CE(i,f):h==="dangerouslySetInnerHTML"?IE(i,f):h==="children"?xa(i,f):vm(i,h,f,c)}switch(a){case"input":kf(i,s);break;case"textarea":SE(i,s);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var y=s.value;y!=null?As(i,!!s.multiple,y,!1):p!==!!s.multiple&&(s.defaultValue!=null?As(i,!!s.multiple,s.defaultValue,!0):As(i,!!s.multiple,s.multiple?[]:"",!1))}i[Da]=s}catch(I){Ne(t,t.return,I)}}break;case 6:if(an(e,t),_n(t),r&4){if(t.stateNode===null)throw Error(B(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(I){Ne(t,t.return,I)}}break;case 3:if(an(e,t),_n(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Aa(e.containerInfo)}catch(I){Ne(t,t.return,I)}break;case 4:an(e,t),_n(t);break;case 13:an(e,t),_n(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Xm=Me())),r&4&&Mv(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(ft=(c=ft)||h,an(e,t),ft=c):an(e,t),_n(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!h&&t.mode&1)for(W=t,h=t.child;h!==null;){for(f=W=h;W!==null;){switch(p=W,y=p.child,p.tag){case 0:case 11:case 14:case 15:ha(4,p,p.return);break;case 1:_s(p,p.return);var x=p.stateNode;if(typeof x.componentWillUnmount=="function"){r=p,n=p.return;try{e=r,x.props=e.memoizedProps,x.state=e.memoizedState,x.componentWillUnmount()}catch(I){Ne(r,n,I)}}break;case 5:_s(p,p.return);break;case 22:if(p.memoizedState!==null){Fv(f);continue}}y!==null?(y.return=p,W=y):Fv(f)}h=h.sibling}e:for(h=null,f=t;;){if(f.tag===5){if(h===null){h=f;try{i=f.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=PE("display",o))}catch(I){Ne(t,t.return,I)}}}else if(f.tag===6){if(h===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(I){Ne(t,t.return,I)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;h===f&&(h=null),f=f.return}h===f&&(h=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:an(e,t),_n(t),r&4&&Mv(t);break;case 21:break;default:an(e,t),_n(t)}}function _n(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(JT(n)){var r=n;break e}n=n.return}throw Error(B(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(xa(i,""),r.flags&=-33);var s=Lv(t);hp(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Lv(t);cp(t,a,o);break;default:throw Error(B(161))}}catch(l){Ne(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Hk(t,e,n){W=t,tS(t)}function tS(t,e,n){for(var r=(t.mode&1)!==0;W!==null;){var i=W,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||iu;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||ft;a=iu;var c=ft;if(iu=o,(ft=l)&&!c)for(W=i;W!==null;)o=W,l=o.child,o.tag===22&&o.memoizedState!==null?Uv(i):l!==null?(l.return=o,W=l):Uv(i);for(;s!==null;)W=s,tS(s),s=s.sibling;W=i,iu=a,ft=c}jv(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,W=s):jv(t)}}function jv(t){for(;W!==null;){var e=W;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:ft||ih(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!ft)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:ln(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Tv(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Tv(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var f=h.dehydrated;f!==null&&Aa(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(B(163))}ft||e.flags&512&&up(e)}catch(p){Ne(e,e.return,p)}}if(e===t){W=null;break}if(n=e.sibling,n!==null){n.return=e.return,W=n;break}W=e.return}}function Fv(t){for(;W!==null;){var e=W;if(e===t){W=null;break}var n=e.sibling;if(n!==null){n.return=e.return,W=n;break}W=e.return}}function Uv(t){for(;W!==null;){var e=W;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{ih(4,e)}catch(l){Ne(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){Ne(e,i,l)}}var s=e.return;try{up(e)}catch(l){Ne(e,s,l)}break;case 5:var o=e.return;try{up(e)}catch(l){Ne(e,o,l)}}}catch(l){Ne(e,e.return,l)}if(e===t){W=null;break}var a=e.sibling;if(a!==null){a.return=e.return,W=a;break}W=e.return}}var qk=Math.ceil,fc=ur.ReactCurrentDispatcher,Qm=ur.ReactCurrentOwner,tn=ur.ReactCurrentBatchConfig,ae=0,Qe=null,Ue=null,tt=0,Ft=0,ws=ei(0),ze=0,Fa=null,Bi=0,sh=0,Ym=0,da=null,kt=null,Xm=0,Ws=1/0,jn=null,pc=!1,dp=null,jr=null,su=!1,Rr=null,mc=0,fa=0,fp=null,Au=-1,Ru=0;function St(){return ae&6?Me():Au!==-1?Au:Au=Me()}function Fr(t){return t.mode&1?ae&2&&tt!==0?tt&-tt:Rk.transition!==null?(Ru===0&&(Ru=FE()),Ru):(t=pe,t!==0||(t=window.event,t=t===void 0?16:qE(t.type)),t):1}function pn(t,e,n,r){if(50<fa)throw fa=0,fp=null,Error(B(185));sl(t,n,r),(!(ae&2)||t!==Qe)&&(t===Qe&&(!(ae&2)&&(sh|=n),ze===4&&Sr(t,tt)),Ot(t,r),n===1&&ae===0&&!(e.mode&1)&&(Ws=Me()+500,th&&ti()))}function Ot(t,e){var n=t.callbackNode;RR(t,e);var r=Ju(t,t===Qe?tt:0);if(r===0)n!==null&&Q0(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Q0(n),e===1)t.tag===0?Ak(Bv.bind(null,t)):hT(Bv.bind(null,t)),xk(function(){!(ae&6)&&ti()}),n=null;else{switch(UE(r)){case 1:n=Sm;break;case 4:n=ME;break;case 16:n=Xu;break;case 536870912:n=jE;break;default:n=Xu}n=uS(n,nS.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function nS(t,e){if(Au=-1,Ru=0,ae&6)throw Error(B(327));var n=t.callbackNode;if(Ds()&&t.callbackNode!==n)return null;var r=Ju(t,t===Qe?tt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=gc(t,r);else{e=r;var i=ae;ae|=2;var s=iS();(Qe!==t||tt!==e)&&(jn=null,Ws=Me()+500,xi(t,e));do try{Qk();break}catch(a){rS(t,a)}while(!0);Lm(),fc.current=s,ae=i,Ue!==null?e=0:(Qe=null,tt=0,e=ze)}if(e!==0){if(e===2&&(i=Uf(t),i!==0&&(r=i,e=pp(t,i))),e===1)throw n=Fa,xi(t,0),Sr(t,r),Ot(t,Me()),n;if(e===6)Sr(t,r);else{if(i=t.current.alternate,!(r&30)&&!Kk(i)&&(e=gc(t,r),e===2&&(s=Uf(t),s!==0&&(r=s,e=pp(t,s))),e===1))throw n=Fa,xi(t,0),Sr(t,r),Ot(t,Me()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(B(345));case 2:pi(t,kt,jn);break;case 3:if(Sr(t,r),(r&130023424)===r&&(e=Xm+500-Me(),10<e)){if(Ju(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){St(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Gf(pi.bind(null,t,kt,jn),e);break}pi(t,kt,jn);break;case 4:if(Sr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-fn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Me()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*qk(r/1960))-r,10<r){t.timeoutHandle=Gf(pi.bind(null,t,kt,jn),r);break}pi(t,kt,jn);break;case 5:pi(t,kt,jn);break;default:throw Error(B(329))}}}return Ot(t,Me()),t.callbackNode===n?nS.bind(null,t):null}function pp(t,e){var n=da;return t.current.memoizedState.isDehydrated&&(xi(t,e).flags|=256),t=gc(t,e),t!==2&&(e=kt,kt=n,e!==null&&mp(e)),t}function mp(t){kt===null?kt=t:kt.push.apply(kt,t)}function Kk(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!gn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Sr(t,e){for(e&=~Ym,e&=~sh,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-fn(e),r=1<<n;t[n]=-1,e&=~r}}function Bv(t){if(ae&6)throw Error(B(327));Ds();var e=Ju(t,0);if(!(e&1))return Ot(t,Me()),null;var n=gc(t,e);if(t.tag!==0&&n===2){var r=Uf(t);r!==0&&(e=r,n=pp(t,r))}if(n===1)throw n=Fa,xi(t,0),Sr(t,e),Ot(t,Me()),n;if(n===6)throw Error(B(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,pi(t,kt,jn),Ot(t,Me()),null}function Jm(t,e){var n=ae;ae|=1;try{return t(e)}finally{ae=n,ae===0&&(Ws=Me()+500,th&&ti())}}function $i(t){Rr!==null&&Rr.tag===0&&!(ae&6)&&Ds();var e=ae;ae|=1;var n=tn.transition,r=pe;try{if(tn.transition=null,pe=1,t)return t()}finally{pe=r,tn.transition=n,ae=e,!(ae&6)&&ti()}}function Zm(){Ft=ws.current,xe(ws)}function xi(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Sk(n)),Ue!==null)for(n=Ue.return;n!==null;){var r=n;switch(Dm(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&rc();break;case 3:$s(),xe(Dt),xe(yt),$m();break;case 5:Bm(r);break;case 4:$s();break;case 13:xe(Ae);break;case 19:xe(Ae);break;case 10:Mm(r.type._context);break;case 22:case 23:Zm()}n=n.return}if(Qe=t,Ue=t=Ur(t.current,null),tt=Ft=e,ze=0,Fa=null,Ym=sh=Bi=0,kt=da=null,_i!==null){for(e=0;e<_i.length;e++)if(n=_i[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}_i=null}return t}function rS(t,e){do{var n=Ue;try{if(Lm(),Iu.current=dc,hc){for(var r=ke.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}hc=!1}if(Ui=0,Ke=$e=ke=null,ca=!1,La=0,Qm.current=null,n===null||n.return===null){ze=1,Fa=e,Ue=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=tt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,h=a,f=h.tag;if(!(h.mode&1)&&(f===0||f===11||f===15)){var p=h.alternate;p?(h.updateQueue=p.updateQueue,h.memoizedState=p.memoizedState,h.lanes=p.lanes):(h.updateQueue=null,h.memoizedState=null)}var y=Av(o);if(y!==null){y.flags&=-257,Rv(y,o,a,s,e),y.mode&1&&Cv(s,c,e),e=y,l=c;var x=e.updateQueue;if(x===null){var I=new Set;I.add(l),e.updateQueue=I}else x.add(l);break e}else{if(!(e&1)){Cv(s,c,e),eg();break e}l=Error(B(426))}}else if(Pe&&a.mode&1){var R=Av(o);if(R!==null){!(R.flags&65536)&&(R.flags|=256),Rv(R,o,a,s,e),Nm(zs(l,a));break e}}s=l=zs(l,a),ze!==4&&(ze=2),da===null?da=[s]:da.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var w=UT(s,l,e);Ev(s,w);break e;case 1:a=l;var _=s.type,S=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||S!==null&&typeof S.componentDidCatch=="function"&&(jr===null||!jr.has(S)))){s.flags|=65536,e&=-e,s.lanes|=e;var b=BT(s,a,e);Ev(s,b);break e}}s=s.return}while(s!==null)}oS(n)}catch(O){e=O,Ue===n&&n!==null&&(Ue=n=n.return);continue}break}while(!0)}function iS(){var t=fc.current;return fc.current=dc,t===null?dc:t}function eg(){(ze===0||ze===3||ze===2)&&(ze=4),Qe===null||!(Bi&268435455)&&!(sh&268435455)||Sr(Qe,tt)}function gc(t,e){var n=ae;ae|=2;var r=iS();(Qe!==t||tt!==e)&&(jn=null,xi(t,e));do try{Gk();break}catch(i){rS(t,i)}while(!0);if(Lm(),ae=n,fc.current=r,Ue!==null)throw Error(B(261));return Qe=null,tt=0,ze}function Gk(){for(;Ue!==null;)sS(Ue)}function Qk(){for(;Ue!==null&&!wR();)sS(Ue)}function sS(t){var e=lS(t.alternate,t,Ft);t.memoizedProps=t.pendingProps,e===null?oS(t):Ue=e,Qm.current=null}function oS(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=$k(n,e),n!==null){n.flags&=32767,Ue=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{ze=6,Ue=null;return}}else if(n=Bk(n,e,Ft),n!==null){Ue=n;return}if(e=e.sibling,e!==null){Ue=e;return}Ue=e=t}while(e!==null);ze===0&&(ze=5)}function pi(t,e,n){var r=pe,i=tn.transition;try{tn.transition=null,pe=1,Yk(t,e,n,r)}finally{tn.transition=i,pe=r}return null}function Yk(t,e,n,r){do Ds();while(Rr!==null);if(ae&6)throw Error(B(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(B(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(kR(t,s),t===Qe&&(Ue=Qe=null,tt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||su||(su=!0,uS(Xu,function(){return Ds(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=tn.transition,tn.transition=null;var o=pe;pe=1;var a=ae;ae|=4,Qm.current=null,Wk(t,n),eS(n,t),gk(qf),Zu=!!Hf,qf=Hf=null,t.current=n,Hk(n),ER(),ae=a,pe=o,tn.transition=s}else t.current=n;if(su&&(su=!1,Rr=t,mc=i),s=t.pendingLanes,s===0&&(jr=null),xR(n.stateNode),Ot(t,Me()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(pc)throw pc=!1,t=dp,dp=null,t;return mc&1&&t.tag!==0&&Ds(),s=t.pendingLanes,s&1?t===fp?fa++:(fa=0,fp=t):fa=0,ti(),null}function Ds(){if(Rr!==null){var t=UE(mc),e=tn.transition,n=pe;try{if(tn.transition=null,pe=16>t?16:t,Rr===null)var r=!1;else{if(t=Rr,Rr=null,mc=0,ae&6)throw Error(B(331));var i=ae;for(ae|=4,W=t.current;W!==null;){var s=W,o=s.child;if(W.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(W=c;W!==null;){var h=W;switch(h.tag){case 0:case 11:case 15:ha(8,h,s)}var f=h.child;if(f!==null)f.return=h,W=f;else for(;W!==null;){h=W;var p=h.sibling,y=h.return;if(XT(h),h===c){W=null;break}if(p!==null){p.return=y,W=p;break}W=y}}}var x=s.alternate;if(x!==null){var I=x.child;if(I!==null){x.child=null;do{var R=I.sibling;I.sibling=null,I=R}while(I!==null)}}W=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,W=o;else e:for(;W!==null;){if(s=W,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ha(9,s,s.return)}var w=s.sibling;if(w!==null){w.return=s.return,W=w;break e}W=s.return}}var _=t.current;for(W=_;W!==null;){o=W;var S=o.child;if(o.subtreeFlags&2064&&S!==null)S.return=o,W=S;else e:for(o=_;W!==null;){if(a=W,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:ih(9,a)}}catch(O){Ne(a,a.return,O)}if(a===o){W=null;break e}var b=a.sibling;if(b!==null){b.return=a.return,W=b;break e}W=a.return}}if(ae=i,ti(),xn&&typeof xn.onPostCommitFiberRoot=="function")try{xn.onPostCommitFiberRoot(Yc,t)}catch{}r=!0}return r}finally{pe=n,tn.transition=e}}return!1}function $v(t,e,n){e=zs(n,e),e=UT(t,e,1),t=Mr(t,e,1),e=St(),t!==null&&(sl(t,1,e),Ot(t,e))}function Ne(t,e,n){if(t.tag===3)$v(t,t,n);else for(;e!==null;){if(e.tag===3){$v(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(jr===null||!jr.has(r))){t=zs(n,t),t=BT(e,t,1),e=Mr(e,t,1),t=St(),e!==null&&(sl(e,1,t),Ot(e,t));break}}e=e.return}}function Xk(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=St(),t.pingedLanes|=t.suspendedLanes&n,Qe===t&&(tt&n)===n&&(ze===4||ze===3&&(tt&130023424)===tt&&500>Me()-Xm?xi(t,0):Ym|=n),Ot(t,e)}function aS(t,e){e===0&&(t.mode&1?(e=Ql,Ql<<=1,!(Ql&130023424)&&(Ql=4194304)):e=1);var n=St();t=nr(t,e),t!==null&&(sl(t,e,n),Ot(t,n))}function Jk(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),aS(t,n)}function Zk(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(B(314))}r!==null&&r.delete(e),aS(t,n)}var lS;lS=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Dt.current)bt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return bt=!1,Uk(t,e,n);bt=!!(t.flags&131072)}else bt=!1,Pe&&e.flags&1048576&&dT(e,oc,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Cu(t,e),t=e.pendingProps;var i=Fs(e,yt.current);Vs(e,n),i=Wm(null,e,r,t,i,n);var s=Hm();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Nt(r)?(s=!0,ic(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Fm(e),i.updater=rh,e.stateNode=i,i._reactInternals=e,tp(e,r,t,n),e=ip(null,e,r,!0,s,n)):(e.tag=0,Pe&&s&&Vm(e),Tt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Cu(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=t2(r),t=ln(r,t),i){case 0:e=rp(null,e,r,t,n);break e;case 1:e=Vv(null,e,r,t,n);break e;case 11:e=kv(null,e,r,t,n);break e;case 14:e=bv(null,e,r,ln(r.type,t),n);break e}throw Error(B(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:ln(r,i),rp(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:ln(r,i),Vv(t,e,r,i,n);case 3:e:{if(HT(e),t===null)throw Error(B(387));r=e.pendingProps,s=e.memoizedState,i=s.element,vT(t,e),uc(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=zs(Error(B(423)),e),e=Dv(t,e,r,n,i);break e}else if(r!==i){i=zs(Error(B(424)),e),e=Dv(t,e,r,n,i);break e}else for(Ut=Lr(e.stateNode.containerInfo.firstChild),$t=e,Pe=!0,cn=null,n=gT(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Us(),r===i){e=rr(t,e,n);break e}Tt(t,e,r,n)}e=e.child}return e;case 5:return _T(e),t===null&&Jf(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Kf(r,i)?o=null:s!==null&&Kf(r,s)&&(e.flags|=32),WT(t,e),Tt(t,e,o,n),e.child;case 6:return t===null&&Jf(e),null;case 13:return qT(t,e,n);case 4:return Um(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Bs(e,null,r,n):Tt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:ln(r,i),kv(t,e,r,i,n);case 7:return Tt(t,e,e.pendingProps,n),e.child;case 8:return Tt(t,e,e.pendingProps.children,n),e.child;case 12:return Tt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ve(ac,r._currentValue),r._currentValue=o,s!==null)if(gn(s.value,o)){if(s.children===i.children&&!Dt.current){e=rr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Kn(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?l.next=l:(l.next=h.next,h.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Zf(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(B(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Zf(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Tt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Vs(e,n),i=nn(i),r=r(i),e.flags|=1,Tt(t,e,r,n),e.child;case 14:return r=e.type,i=ln(r,e.pendingProps),i=ln(r.type,i),bv(t,e,r,i,n);case 15:return $T(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:ln(r,i),Cu(t,e),e.tag=1,Nt(r)?(t=!0,ic(e)):t=!1,Vs(e,n),FT(e,r,i),tp(e,r,i,n),ip(null,e,r,!0,t,n);case 19:return KT(t,e,n);case 22:return zT(t,e,n)}throw Error(B(156,e.tag))};function uS(t,e){return LE(t,e)}function e2(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function en(t,e,n,r){return new e2(t,e,n,r)}function tg(t){return t=t.prototype,!(!t||!t.isReactComponent)}function t2(t){if(typeof t=="function")return tg(t)?1:0;if(t!=null){if(t=t.$$typeof,t===wm)return 11;if(t===Em)return 14}return 2}function Ur(t,e){var n=t.alternate;return n===null?(n=en(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function ku(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")tg(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case cs:return Ii(n.children,i,s,e);case _m:o=8,i|=8;break;case If:return t=en(12,n,e,i|2),t.elementType=If,t.lanes=s,t;case Pf:return t=en(13,n,e,i),t.elementType=Pf,t.lanes=s,t;case Cf:return t=en(19,n,e,i),t.elementType=Cf,t.lanes=s,t;case _E:return oh(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case yE:o=10;break e;case vE:o=9;break e;case wm:o=11;break e;case Em:o=14;break e;case wr:o=16,r=null;break e}throw Error(B(130,t==null?t:typeof t,""))}return e=en(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Ii(t,e,n,r){return t=en(7,t,r,e),t.lanes=n,t}function oh(t,e,n,r){return t=en(22,t,r,e),t.elementType=_E,t.lanes=n,t.stateNode={isHidden:!1},t}function Od(t,e,n){return t=en(6,t,null,e),t.lanes=n,t}function Ld(t,e,n){return e=en(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function n2(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=gd(0),this.expirationTimes=gd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=gd(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function ng(t,e,n,r,i,s,o,a,l){return t=new n2(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=en(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Fm(s),t}function r2(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:us,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function cS(t){if(!t)return qr;t=t._reactInternals;e:{if(Qi(t)!==t||t.tag!==1)throw Error(B(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Nt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(B(171))}if(t.tag===1){var n=t.type;if(Nt(n))return cT(t,n,e)}return e}function hS(t,e,n,r,i,s,o,a,l){return t=ng(n,r,!0,t,i,s,o,a,l),t.context=cS(null),n=t.current,r=St(),i=Fr(n),s=Kn(r,i),s.callback=e??null,Mr(n,s,i),t.current.lanes=i,sl(t,i,r),Ot(t,r),t}function ah(t,e,n,r){var i=e.current,s=St(),o=Fr(i);return n=cS(n),e.context===null?e.context=n:e.pendingContext=n,e=Kn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Mr(i,e,o),t!==null&&(pn(t,i,o,s),xu(t,i,o)),o}function yc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function zv(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function rg(t,e){zv(t,e),(t=t.alternate)&&zv(t,e)}function i2(){return null}var dS=typeof reportError=="function"?reportError:function(t){console.error(t)};function ig(t){this._internalRoot=t}lh.prototype.render=ig.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(B(409));ah(t,e,null,null)};lh.prototype.unmount=ig.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;$i(function(){ah(null,t,null,null)}),e[tr]=null}};function lh(t){this._internalRoot=t}lh.prototype.unstable_scheduleHydration=function(t){if(t){var e=zE();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Tr.length&&e!==0&&e<Tr[n].priority;n++);Tr.splice(n,0,t),n===0&&HE(t)}};function sg(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function uh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Wv(){}function s2(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=yc(o);s.call(c)}}var o=hS(e,r,t,0,null,!1,!1,"",Wv);return t._reactRootContainer=o,t[tr]=o.current,ba(t.nodeType===8?t.parentNode:t),$i(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=yc(l);a.call(c)}}var l=ng(t,0,!1,null,null,!1,!1,"",Wv);return t._reactRootContainer=l,t[tr]=l.current,ba(t.nodeType===8?t.parentNode:t),$i(function(){ah(e,l,n,r)}),l}function ch(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=yc(o);a.call(l)}}ah(e,o,t,i)}else o=s2(n,e,t,i,r);return yc(o)}BE=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Yo(e.pendingLanes);n!==0&&(xm(e,n|1),Ot(e,Me()),!(ae&6)&&(Ws=Me()+500,ti()))}break;case 13:$i(function(){var r=nr(t,1);if(r!==null){var i=St();pn(r,t,1,i)}}),rg(t,1)}};Im=function(t){if(t.tag===13){var e=nr(t,134217728);if(e!==null){var n=St();pn(e,t,134217728,n)}rg(t,134217728)}};$E=function(t){if(t.tag===13){var e=Fr(t),n=nr(t,e);if(n!==null){var r=St();pn(n,t,e,r)}rg(t,e)}};zE=function(){return pe};WE=function(t,e){var n=pe;try{return pe=t,e()}finally{pe=n}};Mf=function(t,e,n){switch(e){case"input":if(kf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=eh(r);if(!i)throw Error(B(90));EE(r),kf(r,i)}}}break;case"textarea":SE(t,n);break;case"select":e=n.value,e!=null&&As(t,!!n.multiple,e,!1)}};kE=Jm;bE=$i;var o2={usingClientEntryPoint:!1,Events:[al,ps,eh,AE,RE,Jm]},zo={findFiberByHostInstance:vi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},a2={bundleType:zo.bundleType,version:zo.version,rendererPackageName:zo.rendererPackageName,rendererConfig:zo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ur.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=NE(t),t===null?null:t.stateNode},findFiberByHostInstance:zo.findFiberByHostInstance||i2,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ou=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ou.isDisabled&&ou.supportsFiber)try{Yc=ou.inject(a2),xn=ou}catch{}}Ht.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=o2;Ht.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!sg(e))throw Error(B(200));return r2(t,e,null,n)};Ht.createRoot=function(t,e){if(!sg(t))throw Error(B(299));var n=!1,r="",i=dS;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=ng(t,1,!1,null,null,n,!1,r,i),t[tr]=e.current,ba(t.nodeType===8?t.parentNode:t),new ig(e)};Ht.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(B(188)):(t=Object.keys(t).join(","),Error(B(268,t)));return t=NE(e),t=t===null?null:t.stateNode,t};Ht.flushSync=function(t){return $i(t)};Ht.hydrate=function(t,e,n){if(!uh(e))throw Error(B(200));return ch(null,t,e,!0,n)};Ht.hydrateRoot=function(t,e,n){if(!sg(t))throw Error(B(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=dS;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=hS(e,null,t,1,n??null,i,!1,s,o),t[tr]=e.current,ba(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new lh(e)};Ht.render=function(t,e,n){if(!uh(e))throw Error(B(200));return ch(null,t,e,!1,n)};Ht.unmountComponentAtNode=function(t){if(!uh(t))throw Error(B(40));return t._reactRootContainer?($i(function(){ch(null,null,t,!1,function(){t._reactRootContainer=null,t[tr]=null})}),!0):!1};Ht.unstable_batchedUpdates=Jm;Ht.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!uh(n))throw Error(B(200));if(t==null||t._reactInternals===void 0)throw Error(B(38));return ch(t,e,n,!1,r)};Ht.version="18.3.1-next-f1338f8080-20240426";function fS(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(fS)}catch(t){console.error(t)}}fS(),fE.exports=Ht;var l2=fE.exports,pS,Hv=l2;pS=Hv.createRoot,Hv.hydrateRoot;var Vt=function(){return Vt=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},Vt.apply(this,arguments)};function Ua(t,e,n){if(n||arguments.length===2)for(var r=0,i=e.length,s;r<i;r++)(s||!(r in e))&&(s||(s=Array.prototype.slice.call(e,0,r)),s[r]=e[r]);return t.concat(s||Array.prototype.slice.call(e))}var Te="-ms-",pa="-moz-",ce="-webkit-",mS="comm",hh="rule",og="decl",u2="@import",gS="@keyframes",c2="@layer",yS=Math.abs,ag=String.fromCharCode,gp=Object.assign;function h2(t,e){return Ge(t,0)^45?(((e<<2^Ge(t,0))<<2^Ge(t,1))<<2^Ge(t,2))<<2^Ge(t,3):0}function vS(t){return t.trim()}function Fn(t,e){return(t=e.exec(t))?t[0]:t}function te(t,e,n){return t.replace(e,n)}function bu(t,e,n){return t.indexOf(e,n)}function Ge(t,e){return t.charCodeAt(e)|0}function Hs(t,e,n){return t.slice(e,n)}function Tn(t){return t.length}function _S(t){return t.length}function Jo(t,e){return e.push(t),t}function d2(t,e){return t.map(e).join("")}function qv(t,e){return t.filter(function(n){return!Fn(n,e)})}var dh=1,qs=1,wS=0,sn=0,Fe=0,fo="";function fh(t,e,n,r,i,s,o,a){return{value:t,root:e,parent:n,type:r,props:i,children:s,line:dh,column:qs,length:o,return:"",siblings:a}}function vr(t,e){return gp(fh("",null,null,"",null,null,0,t.siblings),t,{length:-t.length},e)}function ss(t){for(;t.root;)t=vr(t.root,{children:[t]});Jo(t,t.siblings)}function f2(){return Fe}function p2(){return Fe=sn>0?Ge(fo,--sn):0,qs--,Fe===10&&(qs=1,dh--),Fe}function mn(){return Fe=sn<wS?Ge(fo,sn++):0,qs++,Fe===10&&(qs=1,dh++),Fe}function Pi(){return Ge(fo,sn)}function Vu(){return sn}function ph(t,e){return Hs(fo,t,e)}function yp(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function m2(t){return dh=qs=1,wS=Tn(fo=t),sn=0,[]}function g2(t){return fo="",t}function Md(t){return vS(ph(sn-1,vp(t===91?t+2:t===40?t+1:t)))}function y2(t){for(;(Fe=Pi())&&Fe<33;)mn();return yp(t)>2||yp(Fe)>3?"":" "}function v2(t,e){for(;--e&&mn()&&!(Fe<48||Fe>102||Fe>57&&Fe<65||Fe>70&&Fe<97););return ph(t,Vu()+(e<6&&Pi()==32&&mn()==32))}function vp(t){for(;mn();)switch(Fe){case t:return sn;case 34:case 39:t!==34&&t!==39&&vp(Fe);break;case 40:t===41&&vp(t);break;case 92:mn();break}return sn}function _2(t,e){for(;mn()&&t+Fe!==57;)if(t+Fe===84&&Pi()===47)break;return"/*"+ph(e,sn-1)+"*"+ag(t===47?t:mn())}function w2(t){for(;!yp(Pi());)mn();return ph(t,sn)}function E2(t){return g2(Du("",null,null,null,[""],t=m2(t),0,[0],t))}function Du(t,e,n,r,i,s,o,a,l){for(var c=0,h=0,f=o,p=0,y=0,x=0,I=1,R=1,w=1,_=0,S="",b=i,O=s,M=r,T=S;R;)switch(x=_,_=mn()){case 40:if(x!=108&&Ge(T,f-1)==58){bu(T+=te(Md(_),"&","&\f"),"&\f",yS(c?a[c-1]:0))!=-1&&(w=-1);break}case 34:case 39:case 91:T+=Md(_);break;case 9:case 10:case 13:case 32:T+=y2(x);break;case 92:T+=v2(Vu()-1,7);continue;case 47:switch(Pi()){case 42:case 47:Jo(T2(_2(mn(),Vu()),e,n,l),l);break;default:T+="/"}break;case 123*I:a[c++]=Tn(T)*w;case 125*I:case 59:case 0:switch(_){case 0:case 125:R=0;case 59+h:w==-1&&(T=te(T,/\f/g,"")),y>0&&Tn(T)-f&&Jo(y>32?Gv(T+";",r,n,f-1,l):Gv(te(T," ","")+";",r,n,f-2,l),l);break;case 59:T+=";";default:if(Jo(M=Kv(T,e,n,c,h,i,a,S,b=[],O=[],f,s),s),_===123)if(h===0)Du(T,e,M,M,b,s,f,a,O);else switch(p===99&&Ge(T,3)===110?100:p){case 100:case 108:case 109:case 115:Du(t,M,M,r&&Jo(Kv(t,M,M,0,0,i,a,S,i,b=[],f,O),O),i,O,f,a,r?b:O);break;default:Du(T,M,M,M,[""],O,0,a,O)}}c=h=y=0,I=w=1,S=T="",f=o;break;case 58:f=1+Tn(T),y=x;default:if(I<1){if(_==123)--I;else if(_==125&&I++==0&&p2()==125)continue}switch(T+=ag(_),_*I){case 38:w=h>0?1:(T+="\f",-1);break;case 44:a[c++]=(Tn(T)-1)*w,w=1;break;case 64:Pi()===45&&(T+=Md(mn())),p=Pi(),h=f=Tn(S=T+=w2(Vu())),_++;break;case 45:x===45&&Tn(T)==2&&(I=0)}}return s}function Kv(t,e,n,r,i,s,o,a,l,c,h,f){for(var p=i-1,y=i===0?s:[""],x=_S(y),I=0,R=0,w=0;I<r;++I)for(var _=0,S=Hs(t,p+1,p=yS(R=o[I])),b=t;_<x;++_)(b=vS(R>0?y[_]+" "+S:te(S,/&\f/g,y[_])))&&(l[w++]=b);return fh(t,e,n,i===0?hh:a,l,c,h,f)}function T2(t,e,n,r){return fh(t,e,n,mS,ag(f2()),Hs(t,2,-2),0,r)}function Gv(t,e,n,r,i){return fh(t,e,n,og,Hs(t,0,r),Hs(t,r+1,-1),r,i)}function ES(t,e,n){switch(h2(t,e)){case 5103:return ce+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ce+t+t;case 4789:return pa+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return ce+t+pa+t+Te+t+t;case 5936:switch(Ge(t,e+11)){case 114:return ce+t+Te+te(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return ce+t+Te+te(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return ce+t+Te+te(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return ce+t+Te+t+t;case 6165:return ce+t+Te+"flex-"+t+t;case 5187:return ce+t+te(t,/(\w+).+(:[^]+)/,ce+"box-$1$2"+Te+"flex-$1$2")+t;case 5443:return ce+t+Te+"flex-item-"+te(t,/flex-|-self/g,"")+(Fn(t,/flex-|baseline/)?"":Te+"grid-row-"+te(t,/flex-|-self/g,""))+t;case 4675:return ce+t+Te+"flex-line-pack"+te(t,/align-content|flex-|-self/g,"")+t;case 5548:return ce+t+Te+te(t,"shrink","negative")+t;case 5292:return ce+t+Te+te(t,"basis","preferred-size")+t;case 6060:return ce+"box-"+te(t,"-grow","")+ce+t+Te+te(t,"grow","positive")+t;case 4554:return ce+te(t,/([^-])(transform)/g,"$1"+ce+"$2")+t;case 6187:return te(te(te(t,/(zoom-|grab)/,ce+"$1"),/(image-set)/,ce+"$1"),t,"")+t;case 5495:case 3959:return te(t,/(image-set\([^]*)/,ce+"$1$`$1");case 4968:return te(te(t,/(.+:)(flex-)?(.*)/,ce+"box-pack:$3"+Te+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ce+t+t;case 4200:if(!Fn(t,/flex-|baseline/))return Te+"grid-column-align"+Hs(t,e)+t;break;case 2592:case 3360:return Te+te(t,"template-","")+t;case 4384:case 3616:return n&&n.some(function(r,i){return e=i,Fn(r.props,/grid-\w+-end/)})?~bu(t+(n=n[e].value),"span",0)?t:Te+te(t,"-start","")+t+Te+"grid-row-span:"+(~bu(n,"span",0)?Fn(n,/\d+/):+Fn(n,/\d+/)-+Fn(t,/\d+/))+";":Te+te(t,"-start","")+t;case 4896:case 4128:return n&&n.some(function(r){return Fn(r.props,/grid-\w+-start/)})?t:Te+te(te(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return te(t,/(.+)-inline(.+)/,ce+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Tn(t)-1-e>6)switch(Ge(t,e+1)){case 109:if(Ge(t,e+4)!==45)break;case 102:return te(t,/(.+:)(.+)-([^]+)/,"$1"+ce+"$2-$3$1"+pa+(Ge(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~bu(t,"stretch",0)?ES(te(t,"stretch","fill-available"),e,n)+t:t}break;case 5152:case 5920:return te(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,s,o,a,l,c){return Te+i+":"+s+c+(o?Te+i+"-span:"+(a?l:+l-+s)+c:"")+t});case 4949:if(Ge(t,e+6)===121)return te(t,":",":"+ce)+t;break;case 6444:switch(Ge(t,Ge(t,14)===45?18:11)){case 120:return te(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+ce+(Ge(t,14)===45?"inline-":"")+"box$3$1"+ce+"$2$3$1"+Te+"$2box$3")+t;case 100:return te(t,":",":"+Te)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return te(t,"scroll-","scroll-snap-")+t}return t}function vc(t,e){for(var n="",r=0;r<t.length;r++)n+=e(t[r],r,t,e)||"";return n}function S2(t,e,n,r){switch(t.type){case c2:if(t.children.length)break;case u2:case og:return t.return=t.return||t.value;case mS:return"";case gS:return t.return=t.value+"{"+vc(t.children,r)+"}";case hh:if(!Tn(t.value=t.props.join(",")))return""}return Tn(n=vc(t.children,r))?t.return=t.value+"{"+n+"}":""}function x2(t){var e=_S(t);return function(n,r,i,s){for(var o="",a=0;a<e;a++)o+=t[a](n,r,i,s)||"";return o}}function I2(t){return function(e){e.root||(e=e.return)&&t(e)}}function P2(t,e,n,r){if(t.length>-1&&!t.return)switch(t.type){case og:t.return=ES(t.value,t.length,n);return;case gS:return vc([vr(t,{value:te(t.value,"@","@"+ce)})],r);case hh:if(t.length)return d2(n=t.props,function(i){switch(Fn(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":ss(vr(t,{props:[te(i,/:(read-\w+)/,":"+pa+"$1")]})),ss(vr(t,{props:[i]})),gp(t,{props:qv(n,r)});break;case"::placeholder":ss(vr(t,{props:[te(i,/:(plac\w+)/,":"+ce+"input-$1")]})),ss(vr(t,{props:[te(i,/:(plac\w+)/,":"+pa+"$1")]})),ss(vr(t,{props:[te(i,/:(plac\w+)/,Te+"input-$1")]})),ss(vr(t,{props:[i]})),gp(t,{props:qv(n,r)});break}return""})}}var C2={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},jt={},Ks=typeof process<"u"&&jt!==void 0&&(jt.REACT_APP_SC_ATTR||jt.SC_ATTR)||"data-styled",TS="active",SS="data-styled-version",mh="6.1.13",lg=`/*!sc*/
`,_c=typeof window<"u"&&"HTMLElement"in window,A2=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&jt!==void 0&&jt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&jt.REACT_APP_SC_DISABLE_SPEEDY!==""?jt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&jt.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&jt!==void 0&&jt.SC_DISABLE_SPEEDY!==void 0&&jt.SC_DISABLE_SPEEDY!==""&&jt.SC_DISABLE_SPEEDY!=="false"&&jt.SC_DISABLE_SPEEDY),gh=Object.freeze([]),Gs=Object.freeze({});function R2(t,e,n){return n===void 0&&(n=Gs),t.theme!==n.theme&&t.theme||e||n.theme}var xS=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),k2=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,b2=/(^-|-$)/g;function Qv(t){return t.replace(k2,"-").replace(b2,"")}var V2=/(a)(d)/gi,au=52,Yv=function(t){return String.fromCharCode(t+(t>25?39:97))};function _p(t){var e,n="";for(e=Math.abs(t);e>au;e=e/au|0)n=Yv(e%au)+n;return(Yv(e%au)+n).replace(V2,"$1-$2")}var jd,IS=5381,Es=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},PS=function(t){return Es(IS,t)};function CS(t){return _p(PS(t)>>>0)}function D2(t){return t.displayName||t.name||"Component"}function Fd(t){return typeof t=="string"&&!0}var AS=typeof Symbol=="function"&&Symbol.for,RS=AS?Symbol.for("react.memo"):60115,N2=AS?Symbol.for("react.forward_ref"):60112,O2={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},L2={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},kS={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},M2=((jd={})[N2]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},jd[RS]=kS,jd);function Xv(t){return("type"in(e=t)&&e.type.$$typeof)===RS?kS:"$$typeof"in t?M2[t.$$typeof]:O2;var e}var j2=Object.defineProperty,F2=Object.getOwnPropertyNames,Jv=Object.getOwnPropertySymbols,U2=Object.getOwnPropertyDescriptor,B2=Object.getPrototypeOf,Zv=Object.prototype;function bS(t,e,n){if(typeof e!="string"){if(Zv){var r=B2(e);r&&r!==Zv&&bS(t,r,n)}var i=F2(e);Jv&&(i=i.concat(Jv(e)));for(var s=Xv(t),o=Xv(e),a=0;a<i.length;++a){var l=i[a];if(!(l in L2||n&&n[l]||o&&l in o||s&&l in s)){var c=U2(e,l);try{j2(t,l,c)}catch{}}}}return t}function Qs(t){return typeof t=="function"}function ug(t){return typeof t=="object"&&"styledComponentId"in t}function Ei(t,e){return t&&e?"".concat(t," ").concat(e):t||e||""}function wp(t,e){if(t.length===0)return"";for(var n=t[0],r=1;r<t.length;r++)n+=t[r];return n}function Ba(t){return t!==null&&typeof t=="object"&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function Ep(t,e,n){if(n===void 0&&(n=!1),!n&&!Ba(t)&&!Array.isArray(t))return e;if(Array.isArray(e))for(var r=0;r<e.length;r++)t[r]=Ep(t[r],e[r]);else if(Ba(e))for(var r in e)t[r]=Ep(t[r],e[r]);return t}function cg(t,e){Object.defineProperty(t,"toString",{value:e})}function ul(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var $2=function(){function t(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return t.prototype.indexOfGroup=function(e){for(var n=0,r=0;r<e;r++)n+=this.groupSizes[r];return n},t.prototype.insertRules=function(e,n){if(e>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,s=i;e>=s;)if((s<<=1)<0)throw ul(16,"".concat(e));this.groupSizes=new Uint32Array(s),this.groupSizes.set(r),this.length=s;for(var o=i;o<s;o++)this.groupSizes[o]=0}for(var a=this.indexOfGroup(e+1),l=(o=0,n.length);o<l;o++)this.tag.insertRule(a,n[o])&&(this.groupSizes[e]++,a++)},t.prototype.clearGroup=function(e){if(e<this.length){var n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n;this.groupSizes[e]=0;for(var s=r;s<i;s++)this.tag.deleteRule(r)}},t.prototype.getGroup=function(e){var n="";if(e>=this.length||this.groupSizes[e]===0)return n;for(var r=this.groupSizes[e],i=this.indexOfGroup(e),s=i+r,o=i;o<s;o++)n+="".concat(this.tag.getRule(o)).concat(lg);return n},t}(),Nu=new Map,wc=new Map,Ou=1,lu=function(t){if(Nu.has(t))return Nu.get(t);for(;wc.has(Ou);)Ou++;var e=Ou++;return Nu.set(t,e),wc.set(e,t),e},z2=function(t,e){Ou=e+1,Nu.set(t,e),wc.set(e,t)},W2="style[".concat(Ks,"][").concat(SS,'="').concat(mh,'"]'),H2=new RegExp("^".concat(Ks,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),q2=function(t,e,n){for(var r,i=n.split(","),s=0,o=i.length;s<o;s++)(r=i[s])&&t.registerName(e,r)},K2=function(t,e){for(var n,r=((n=e.textContent)!==null&&n!==void 0?n:"").split(lg),i=[],s=0,o=r.length;s<o;s++){var a=r[s].trim();if(a){var l=a.match(H2);if(l){var c=0|parseInt(l[1],10),h=l[2];c!==0&&(z2(h,c),q2(t,h,l[3]),t.getTag().insertRules(c,i)),i.length=0}else i.push(a)}}},e_=function(t){for(var e=document.querySelectorAll(W2),n=0,r=e.length;n<r;n++){var i=e[n];i&&i.getAttribute(Ks)!==TS&&(K2(t,i),i.parentNode&&i.parentNode.removeChild(i))}};function G2(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var VS=function(t){var e=document.head,n=t||e,r=document.createElement("style"),i=function(a){var l=Array.from(a.querySelectorAll("style[".concat(Ks,"]")));return l[l.length-1]}(n),s=i!==void 0?i.nextSibling:null;r.setAttribute(Ks,TS),r.setAttribute(SS,mh);var o=G2();return o&&r.setAttribute("nonce",o),n.insertBefore(r,s),r},Q2=function(){function t(e){this.element=VS(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,s=r.length;i<s;i++){var o=r[i];if(o.ownerNode===n)return o}throw ul(17)}(this.element),this.length=0}return t.prototype.insertRule=function(e,n){try{return this.sheet.insertRule(n,e),this.length++,!0}catch{return!1}},t.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.prototype.getRule=function(e){var n=this.sheet.cssRules[e];return n&&n.cssText?n.cssText:""},t}(),Y2=function(){function t(e){this.element=VS(e),this.nodes=this.element.childNodes,this.length=0}return t.prototype.insertRule=function(e,n){if(e<=this.length&&e>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[e]||null),this.length++,!0}return!1},t.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},t}(),X2=function(){function t(e){this.rules=[],this.length=0}return t.prototype.insertRule=function(e,n){return e<=this.length&&(this.rules.splice(e,0,n),this.length++,!0)},t.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},t}(),t_=_c,J2={isServer:!_c,useCSSOMInjection:!A2},DS=function(){function t(e,n,r){e===void 0&&(e=Gs),n===void 0&&(n={});var i=this;this.options=Vt(Vt({},J2),e),this.gs=n,this.names=new Map(r),this.server=!!e.isServer,!this.server&&_c&&t_&&(t_=!1,e_(this)),cg(this,function(){return function(s){for(var o=s.getTag(),a=o.length,l="",c=function(f){var p=function(w){return wc.get(w)}(f);if(p===void 0)return"continue";var y=s.names.get(p),x=o.getGroup(f);if(y===void 0||!y.size||x.length===0)return"continue";var I="".concat(Ks,".g").concat(f,'[id="').concat(p,'"]'),R="";y!==void 0&&y.forEach(function(w){w.length>0&&(R+="".concat(w,","))}),l+="".concat(x).concat(I,'{content:"').concat(R,'"}').concat(lg)},h=0;h<a;h++)c(h);return l}(i)})}return t.registerId=function(e){return lu(e)},t.prototype.rehydrate=function(){!this.server&&_c&&e_(this)},t.prototype.reconstructWithOptions=function(e,n){return n===void 0&&(n=!0),new t(Vt(Vt({},this.options),e),this.gs,n&&this.names||void 0)},t.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.prototype.getTag=function(){return this.tag||(this.tag=(e=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new X2(i):r?new Q2(i):new Y2(i)}(this.options),new $2(e)));var e},t.prototype.hasNameForId=function(e,n){return this.names.has(e)&&this.names.get(e).has(n)},t.prototype.registerName=function(e,n){if(lu(e),this.names.has(e))this.names.get(e).add(n);else{var r=new Set;r.add(n),this.names.set(e,r)}},t.prototype.insertRules=function(e,n,r){this.registerName(e,n),this.getTag().insertRules(lu(e),r)},t.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.prototype.clearRules=function(e){this.getTag().clearGroup(lu(e)),this.clearNames(e)},t.prototype.clearTag=function(){this.tag=void 0},t}(),Z2=/&/g,eb=/^\s*\/\/.*$/gm;function NS(t,e){return t.map(function(n){return n.type==="rule"&&(n.value="".concat(e," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(e," ")),n.props=n.props.map(function(r){return"".concat(e," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=NS(n.children,e)),n})}function tb(t){var e,n,r,i=Gs,s=i.options,o=s===void 0?Gs:s,a=i.plugins,l=a===void 0?gh:a,c=function(p,y,x){return x.startsWith(n)&&x.endsWith(n)&&x.replaceAll(n,"").length>0?".".concat(e):p},h=l.slice();h.push(function(p){p.type===hh&&p.value.includes("&")&&(p.props[0]=p.props[0].replace(Z2,n).replace(r,c))}),o.prefix&&h.push(P2),h.push(S2);var f=function(p,y,x,I){y===void 0&&(y=""),x===void 0&&(x=""),I===void 0&&(I="&"),e=I,n=y,r=new RegExp("\\".concat(n,"\\b"),"g");var R=p.replace(eb,""),w=E2(x||y?"".concat(x," ").concat(y," { ").concat(R," }"):R);o.namespace&&(w=NS(w,o.namespace));var _=[];return vc(w,x2(h.concat(I2(function(S){return _.push(S)})))),_};return f.hash=l.length?l.reduce(function(p,y){return y.name||ul(15),Es(p,y.name)},IS).toString():"",f}var nb=new DS,Tp=tb(),OS=Bt.createContext({shouldForwardProp:void 0,styleSheet:nb,stylis:Tp});OS.Consumer;Bt.createContext(void 0);function n_(){return N.useContext(OS)}var LS=function(){function t(e,n){var r=this;this.inject=function(i,s){s===void 0&&(s=Tp);var o=r.name+s.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,s(r.rules,o,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=n,cg(this,function(){throw ul(12,String(r.name))})}return t.prototype.getName=function(e){return e===void 0&&(e=Tp),this.name+e.hash},t}(),rb=function(t){return t>="A"&&t<="Z"};function r_(t){for(var e="",n=0;n<t.length;n++){var r=t[n];if(n===1&&r==="-"&&t[0]==="-")return t;rb(r)?e+="-"+r.toLowerCase():e+=r}return e.startsWith("ms-")?"-"+e:e}var MS=function(t){return t==null||t===!1||t===""},jS=function(t){var e,n,r=[];for(var i in t){var s=t[i];t.hasOwnProperty(i)&&!MS(s)&&(Array.isArray(s)&&s.isCss||Qs(s)?r.push("".concat(r_(i),":"),s,";"):Ba(s)?r.push.apply(r,Ua(Ua(["".concat(i," {")],jS(s),!1),["}"],!1)):r.push("".concat(r_(i),": ").concat((e=i,(n=s)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||e in C2||e.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Ci(t,e,n,r){if(MS(t))return[];if(ug(t))return[".".concat(t.styledComponentId)];if(Qs(t)){if(!Qs(s=t)||s.prototype&&s.prototype.isReactComponent||!e)return[t];var i=t(e);return Ci(i,e,n,r)}var s;return t instanceof LS?n?(t.inject(n,r),[t.getName(r)]):[t]:Ba(t)?jS(t):Array.isArray(t)?Array.prototype.concat.apply(gh,t.map(function(o){return Ci(o,e,n,r)})):[t.toString()]}function ib(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(Qs(n)&&!ug(n))return!1}return!0}var sb=PS(mh),ob=function(){function t(e,n,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&ib(e),this.componentId=n,this.baseHash=Es(sb,n),this.baseStyle=r,DS.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=Ei(i,this.staticRulesId);else{var s=wp(Ci(this.rules,e,n,r)),o=_p(Es(this.baseHash,s)>>>0);if(!n.hasNameForId(this.componentId,o)){var a=r(s,".".concat(o),void 0,this.componentId);n.insertRules(this.componentId,o,a)}i=Ei(i,o),this.staticRulesId=o}else{for(var l=Es(this.baseHash,r.hash),c="",h=0;h<this.rules.length;h++){var f=this.rules[h];if(typeof f=="string")c+=f;else if(f){var p=wp(Ci(f,e,n,r));l=Es(l,p+h),c+=p}}if(c){var y=_p(l>>>0);n.hasNameForId(this.componentId,y)||n.insertRules(this.componentId,y,r(c,".".concat(y),void 0,this.componentId)),i=Ei(i,y)}}return i},t}(),FS=Bt.createContext(void 0);FS.Consumer;var Ud={};function ab(t,e,n){var r=ug(t),i=t,s=!Fd(t),o=e.attrs,a=o===void 0?gh:o,l=e.componentId,c=l===void 0?function(b,O){var M=typeof b!="string"?"sc":Qv(b);Ud[M]=(Ud[M]||0)+1;var T="".concat(M,"-").concat(CS(mh+M+Ud[M]));return O?"".concat(O,"-").concat(T):T}(e.displayName,e.parentComponentId):l,h=e.displayName,f=h===void 0?function(b){return Fd(b)?"styled.".concat(b):"Styled(".concat(D2(b),")")}(t):h,p=e.displayName&&e.componentId?"".concat(Qv(e.displayName),"-").concat(e.componentId):e.componentId||c,y=r&&i.attrs?i.attrs.concat(a).filter(Boolean):a,x=e.shouldForwardProp;if(r&&i.shouldForwardProp){var I=i.shouldForwardProp;if(e.shouldForwardProp){var R=e.shouldForwardProp;x=function(b,O){return I(b,O)&&R(b,O)}}else x=I}var w=new ob(n,p,r?i.componentStyle:void 0);function _(b,O){return function(M,T,v){var P=M.attrs,C=M.componentStyle,k=M.defaultProps,V=M.foldedComponentIds,A=M.styledComponentId,_e=M.target,vn=Bt.useContext(FS),hr=n_(),de=M.shouldForwardProp||hr.shouldForwardProp,$=R2(T,vn,k)||Gs,K=function(At,_t,Rt){for(var ii,Nn=Vt(Vt({},_t),{className:void 0,theme:Rt}),dr=0;dr<At.length;dr+=1){var On=Qs(ii=At[dr])?ii(Nn):ii;for(var Gt in On)Nn[Gt]=Gt==="className"?Ei(Nn[Gt],On[Gt]):Gt==="style"?Vt(Vt({},Nn[Gt]),On[Gt]):On[Gt]}return _t.className&&(Nn.className=Ei(Nn.className,_t.className)),Nn}(P,T,$),Q=K.as||_e,fe={};for(var re in K)K[re]===void 0||re[0]==="$"||re==="as"||re==="theme"&&K.theme===$||(re==="forwardedAs"?fe.as=K.forwardedAs:de&&!de(re,Q)||(fe[re]=K[re]));var Ie=function(At,_t){var Rt=n_(),ii=At.generateAndInjectStyles(_t,Rt.styleSheet,Rt.stylis);return ii}(C,K),Lt=Ei(V,A);return Ie&&(Lt+=" "+Ie),K.className&&(Lt+=" "+K.className),fe[Fd(Q)&&!xS.has(Q)?"class":"className"]=Lt,fe.ref=v,N.createElement(Q,fe)}(S,b,O)}_.displayName=f;var S=Bt.forwardRef(_);return S.attrs=y,S.componentStyle=w,S.displayName=f,S.shouldForwardProp=x,S.foldedComponentIds=r?Ei(i.foldedComponentIds,i.styledComponentId):"",S.styledComponentId=p,S.target=r?i.target:t,Object.defineProperty(S,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(b){this._foldedDefaultProps=r?function(O){for(var M=[],T=1;T<arguments.length;T++)M[T-1]=arguments[T];for(var v=0,P=M;v<P.length;v++)Ep(O,P[v],!0);return O}({},i.defaultProps,b):b}}),cg(S,function(){return".".concat(S.styledComponentId)}),s&&bS(S,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),S}function i_(t,e){for(var n=[t[0]],r=0,i=e.length;r<i;r+=1)n.push(e[r],t[r+1]);return n}var s_=function(t){return Object.assign(t,{isCss:!0})};function US(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(Qs(t)||Ba(t))return s_(Ci(i_(gh,Ua([t],e,!0))));var r=t;return e.length===0&&r.length===1&&typeof r[0]=="string"?Ci(r):s_(Ci(i_(r,e)))}function Sp(t,e,n){if(n===void 0&&(n=Gs),!e)throw ul(1,e);var r=function(i){for(var s=[],o=1;o<arguments.length;o++)s[o-1]=arguments[o];return t(e,n,US.apply(void 0,Ua([i],s,!1)))};return r.attrs=function(i){return Sp(t,e,Vt(Vt({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return Sp(t,e,Vt(Vt({},n),i))},r}var BS=function(t){return Sp(ab,t)},j=BS;xS.forEach(function(t){j[t]=BS(t)});function $S(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];var r=wp(US.apply(void 0,Ua([t],e,!1))),i=CS(r);return new LS(i,r)}/**
 * @remix-run/router v1.19.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function $a(){return $a=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},$a.apply(this,arguments)}var kr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(kr||(kr={}));const o_="popstate";function lb(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return xp("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:WS(i)}return cb(e,n,null,t)}function We(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function zS(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function ub(){return Math.random().toString(36).substr(2,8)}function a_(t,e){return{usr:t.state,key:t.key,idx:e}}function xp(t,e,n,r){return n===void 0&&(n=null),$a({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?po(e):e,{state:n,key:e&&e.key||r||ub()})}function WS(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function po(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function cb(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=kr.Pop,l=null,c=h();c==null&&(c=0,o.replaceState($a({},o.state,{idx:c}),""));function h(){return(o.state||{idx:null}).idx}function f(){a=kr.Pop;let R=h(),w=R==null?null:R-c;c=R,l&&l({action:a,location:I.location,delta:w})}function p(R,w){a=kr.Push;let _=xp(I.location,R,w);c=h()+1;let S=a_(_,c),b=I.createHref(_);try{o.pushState(S,"",b)}catch(O){if(O instanceof DOMException&&O.name==="DataCloneError")throw O;i.location.assign(b)}s&&l&&l({action:a,location:I.location,delta:1})}function y(R,w){a=kr.Replace;let _=xp(I.location,R,w);c=h();let S=a_(_,c),b=I.createHref(_);o.replaceState(S,"",b),s&&l&&l({action:a,location:I.location,delta:0})}function x(R){let w=i.location.origin!=="null"?i.location.origin:i.location.href,_=typeof R=="string"?R:WS(R);return _=_.replace(/ $/,"%20"),We(w,"No window.location.(origin|href) available to create URL for href: "+_),new URL(_,w)}let I={get action(){return a},get location(){return t(i,o)},listen(R){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(o_,f),l=R,()=>{i.removeEventListener(o_,f),l=null}},createHref(R){return e(i,R)},createURL:x,encodeLocation(R){let w=x(R);return{pathname:w.pathname,search:w.search,hash:w.hash}},push:p,replace:y,go(R){return o.go(R)}};return I}var l_;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(l_||(l_={}));function hb(t,e,n){return n===void 0&&(n="/"),db(t,e,n,!1)}function db(t,e,n,r){let i=typeof e=="string"?po(e):e,s=KS(i.pathname||"/",n);if(s==null)return null;let o=HS(t);fb(o);let a=null;for(let l=0;a==null&&l<o.length;++l){let c=xb(s);a=Tb(o[l],c,r)}return a}function HS(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(We(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let c=Ai([r,l.relativePath]),h=n.concat(l);s.children&&s.children.length>0&&(We(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),HS(s.children,e,h,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:wb(c,s.index),routesMeta:h})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of qS(s.path))i(s,o,l)}),e}function qS(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=qS(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function fb(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:Eb(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const pb=/^:[\w-]+$/,mb=3,gb=2,yb=1,vb=10,_b=-2,u_=t=>t==="*";function wb(t,e){let n=t.split("/"),r=n.length;return n.some(u_)&&(r+=_b),e&&(r+=gb),n.filter(i=>!u_(i)).reduce((i,s)=>i+(pb.test(s)?mb:s===""?yb:vb),r)}function Eb(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function Tb(t,e,n){let{routesMeta:r}=t,i={},s="/",o=[];for(let a=0;a<r.length;++a){let l=r[a],c=a===r.length-1,h=s==="/"?e:e.slice(s.length)||"/",f=c_({path:l.relativePath,caseSensitive:l.caseSensitive,end:c},h),p=l.route;if(!f&&c&&n&&!r[r.length-1].route.index&&(f=c_({path:l.relativePath,caseSensitive:l.caseSensitive,end:!1},h)),!f)return null;Object.assign(i,f.params),o.push({params:i,pathname:Ai([s,f.pathname]),pathnameBase:kb(Ai([s,f.pathnameBase])),route:p}),f.pathnameBase!=="/"&&(s=Ai([s,f.pathnameBase]))}return o}function c_(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=Sb(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((c,h,f)=>{let{paramName:p,isOptional:y}=h;if(p==="*"){let I=a[f]||"";o=s.slice(0,s.length-I.length).replace(/(.)\/+$/,"$1")}const x=a[f];return y&&!x?c[p]=void 0:c[p]=(x||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function Sb(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),zS(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function xb(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return zS(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function KS(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function Ib(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?po(t):t;return{pathname:n?n.startsWith("/")?n:Pb(n,e):e,search:bb(r),hash:Vb(i)}}function Pb(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Bd(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Cb(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Ab(t,e){let n=Cb(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Rb(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=po(t):(i=$a({},t),We(!i.pathname||!i.pathname.includes("?"),Bd("?","pathname","search",i)),We(!i.pathname||!i.pathname.includes("#"),Bd("#","pathname","hash",i)),We(!i.search||!i.search.includes("#"),Bd("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=n;else{let f=e.length-1;if(!r&&o.startsWith("..")){let p=o.split("/");for(;p[0]==="..";)p.shift(),f-=1;i.pathname=p.join("/")}a=f>=0?e[f]:"/"}let l=Ib(i,a),c=o&&o!=="/"&&o.endsWith("/"),h=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(c||h)&&(l.pathname+="/"),l}const Ai=t=>t.join("/").replace(/\/\/+/g,"/"),kb=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),bb=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,Vb=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function Db(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const GS=["post","put","patch","delete"];new Set(GS);const Nb=["get",...GS];new Set(Nb);/**
 * React Router v6.26.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function za(){return za=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},za.apply(this,arguments)}const hg=N.createContext(null),Ob=N.createContext(null),yh=N.createContext(null),vh=N.createContext(null),mo=N.createContext({outlet:null,matches:[],isDataRoute:!1}),QS=N.createContext(null);function _h(){return N.useContext(vh)!=null}function YS(){return _h()||We(!1),N.useContext(vh).location}function XS(t){N.useContext(yh).static||N.useLayoutEffect(t)}function cl(){let{isDataRoute:t}=N.useContext(mo);return t?Gb():Lb()}function Lb(){_h()||We(!1);let t=N.useContext(hg),{basename:e,future:n,navigator:r}=N.useContext(yh),{matches:i}=N.useContext(mo),{pathname:s}=YS(),o=JSON.stringify(Ab(i,n.v7_relativeSplatPath)),a=N.useRef(!1);return XS(()=>{a.current=!0}),N.useCallback(function(c,h){if(h===void 0&&(h={}),!a.current)return;if(typeof c=="number"){r.go(c);return}let f=Rb(c,JSON.parse(o),s,h.relative==="path");t==null&&e!=="/"&&(f.pathname=f.pathname==="/"?e:Ai([e,f.pathname])),(h.replace?r.replace:r.push)(f,h.state,h)},[e,r,o,s,t])}function Mb(t,e){return jb(t,e)}function jb(t,e,n,r){_h()||We(!1);let{navigator:i}=N.useContext(yh),{matches:s}=N.useContext(mo),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let c=YS(),h;if(e){var f;let R=typeof e=="string"?po(e):e;l==="/"||(f=R.pathname)!=null&&f.startsWith(l)||We(!1),h=R}else h=c;let p=h.pathname||"/",y=p;if(l!=="/"){let R=l.replace(/^\//,"").split("/");y="/"+p.replace(/^\//,"").split("/").slice(R.length).join("/")}let x=hb(t,{pathname:y}),I=zb(x&&x.map(R=>Object.assign({},R,{params:Object.assign({},a,R.params),pathname:Ai([l,i.encodeLocation?i.encodeLocation(R.pathname).pathname:R.pathname]),pathnameBase:R.pathnameBase==="/"?l:Ai([l,i.encodeLocation?i.encodeLocation(R.pathnameBase).pathname:R.pathnameBase])})),s,n,r);return e&&I?N.createElement(vh.Provider,{value:{location:za({pathname:"/",search:"",hash:"",state:null,key:"default"},h),navigationType:kr.Pop}},I):I}function Fb(){let t=Kb(),e=Db(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return N.createElement(N.Fragment,null,N.createElement("h2",null,"Unexpected Application Error!"),N.createElement("h3",{style:{fontStyle:"italic"}},e),n?N.createElement("pre",{style:i},n):null,null)}const Ub=N.createElement(Fb,null);class Bb extends N.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?N.createElement(mo.Provider,{value:this.props.routeContext},N.createElement(QS.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function $b(t){let{routeContext:e,match:n,children:r}=t,i=N.useContext(hg);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),N.createElement(mo.Provider,{value:e},r)}function zb(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,a=(i=n)==null?void 0:i.errors;if(a!=null){let h=o.findIndex(f=>f.route.id&&(a==null?void 0:a[f.route.id])!==void 0);h>=0||We(!1),o=o.slice(0,Math.min(o.length,h+1))}let l=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let h=0;h<o.length;h++){let f=o[h];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(c=h),f.route.id){let{loaderData:p,errors:y}=n,x=f.route.loader&&p[f.route.id]===void 0&&(!y||y[f.route.id]===void 0);if(f.route.lazy||x){l=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((h,f,p)=>{let y,x=!1,I=null,R=null;n&&(y=a&&f.route.id?a[f.route.id]:void 0,I=f.route.errorElement||Ub,l&&(c<0&&p===0?(x=!0,R=null):c===p&&(x=!0,R=f.route.hydrateFallbackElement||null)));let w=e.concat(o.slice(0,p+1)),_=()=>{let S;return y?S=I:x?S=R:f.route.Component?S=N.createElement(f.route.Component,null):f.route.element?S=f.route.element:S=h,N.createElement($b,{match:f,routeContext:{outlet:h,matches:w,isDataRoute:n!=null},children:S})};return n&&(f.route.ErrorBoundary||f.route.errorElement||p===0)?N.createElement(Bb,{location:n.location,revalidation:n.revalidation,component:I,error:y,children:_(),routeContext:{outlet:null,matches:w,isDataRoute:!0}}):_()},null)}var JS=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(JS||{}),Ec=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Ec||{});function Wb(t){let e=N.useContext(hg);return e||We(!1),e}function Hb(t){let e=N.useContext(Ob);return e||We(!1),e}function qb(t){let e=N.useContext(mo);return e||We(!1),e}function ZS(t){let e=qb(),n=e.matches[e.matches.length-1];return n.route.id||We(!1),n.route.id}function Kb(){var t;let e=N.useContext(QS),n=Hb(Ec.UseRouteError),r=ZS(Ec.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function Gb(){let{router:t}=Wb(JS.UseNavigateStable),e=ZS(Ec.UseNavigateStable),n=N.useRef(!1);return XS(()=>{n.current=!0}),N.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,za({fromRouteId:e},s)))},[t,e])}function wn(t){We(!1)}function Qb(t){let{basename:e="/",children:n=null,location:r,navigationType:i=kr.Pop,navigator:s,static:o=!1,future:a}=t;_h()&&We(!1);let l=e.replace(/^\/*/,"/"),c=N.useMemo(()=>({basename:l,navigator:s,static:o,future:za({v7_relativeSplatPath:!1},a)}),[l,a,s,o]);typeof r=="string"&&(r=po(r));let{pathname:h="/",search:f="",hash:p="",state:y=null,key:x="default"}=r,I=N.useMemo(()=>{let R=KS(h,l);return R==null?null:{location:{pathname:R,search:f,hash:p,state:y,key:x},navigationType:i}},[l,h,f,p,y,x,i]);return I==null?null:N.createElement(yh.Provider,{value:c},N.createElement(vh.Provider,{children:n,value:I}))}function Yb(t){let{children:e,location:n}=t;return Mb(Ip(e),n)}new Promise(()=>{});function Ip(t,e){e===void 0&&(e=[]);let n=[];return N.Children.forEach(t,(r,i)=>{if(!N.isValidElement(r))return;let s=[...e,i];if(r.type===N.Fragment){n.push.apply(n,Ip(r.props.children,s));return}r.type!==wn&&We(!1),!r.props.index||!r.props.children||We(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Ip(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.26.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const Xb="6";try{window.__reactRouterVersion=Xb}catch{}const Jb="startTransition",h_=XA[Jb];function Zb(t){let{basename:e,children:n,future:r,window:i}=t,s=N.useRef();s.current==null&&(s.current=lb({window:i,v5Compat:!0}));let o=s.current,[a,l]=N.useState({action:o.action,location:o.location}),{v7_startTransition:c}=r||{},h=N.useCallback(f=>{c&&h_?h_(()=>l(f)):l(f)},[l,c]);return N.useLayoutEffect(()=>o.listen(h),[o,h]),N.createElement(Qb,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o,future:r})}var d_;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(d_||(d_={}));var f_;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(f_||(f_={}));function eV(t){if(typeof Proxy>"u")return t;const e=new Map,n=(...r)=>t(...r);return new Proxy(n,{get:(r,i)=>i==="create"?t:(e.has(i)||e.set(i,t(i)),e.get(i))})}function Wa(t){return t!==null&&typeof t=="object"&&typeof t.start=="function"}const Pp=t=>Array.isArray(t);function ex(t,e){if(!Array.isArray(e))return!1;const n=e.length;if(n!==t.length)return!1;for(let r=0;r<n;r++)if(e[r]!==t[r])return!1;return!0}function Ha(t){return typeof t=="string"||Array.isArray(t)}function p_(t){const e=[{},{}];return t==null||t.values.forEach((n,r)=>{e[0][r]=n.get(),e[1][r]=n.getVelocity()}),e}function dg(t,e,n,r){if(typeof e=="function"){const[i,s]=p_(r);e=e(n!==void 0?n:t.custom,i,s)}if(typeof e=="string"&&(e=t.variants&&t.variants[e]),typeof e=="function"){const[i,s]=p_(r);e=e(n!==void 0?n:t.custom,i,s)}return e}function wh(t,e,n){const r=t.getProps();return dg(r,e,n!==void 0?n:r.custom,t)}const fg=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],pg=["initial",...fg],hl=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],ni=new Set(hl),Gn=t=>t*1e3,Qn=t=>t/1e3,tV={type:"spring",stiffness:500,damping:25,restSpeed:10},nV=t=>({type:"spring",stiffness:550,damping:t===0?2*Math.sqrt(550):30,restSpeed:10}),rV={type:"keyframes",duration:.8},iV={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},sV=(t,{keyframes:e})=>e.length>2?rV:ni.has(t)?t.startsWith("scale")?nV(e[1]):tV:iV;function mg(t,e){return t?t[e]||t.default||t:void 0}const oV={skipAnimations:!1,useManualTiming:!1},aV=t=>t!==null;function Eh(t,{repeat:e,repeatType:n="loop"},r){const i=t.filter(aV),s=e&&n!=="loop"&&e%2===1?0:i.length-1;return!s||r===void 0?i[s]:r}const gt=t=>t;function lV(t){let e=new Set,n=new Set,r=!1,i=!1;const s=new WeakSet;let o={delta:0,timestamp:0,isProcessing:!1};function a(c){s.has(c)&&(l.schedule(c),t()),c(o)}const l={schedule:(c,h=!1,f=!1)=>{const y=f&&r?e:n;return h&&s.add(c),y.has(c)||y.add(c),c},cancel:c=>{n.delete(c),s.delete(c)},process:c=>{if(o=c,r){i=!0;return}r=!0,[e,n]=[n,e],n.clear(),e.forEach(a),r=!1,i&&(i=!1,l.process(c))}};return l}const uu=["read","resolveKeyframes","update","preRender","render","postRender"],uV=40;function tx(t,e){let n=!1,r=!0;const i={delta:0,timestamp:0,isProcessing:!1},s=()=>n=!0,o=uu.reduce((w,_)=>(w[_]=lV(s),w),{}),{read:a,resolveKeyframes:l,update:c,preRender:h,render:f,postRender:p}=o,y=()=>{const w=performance.now();n=!1,i.delta=r?1e3/60:Math.max(Math.min(w-i.timestamp,uV),1),i.timestamp=w,i.isProcessing=!0,a.process(i),l.process(i),c.process(i),h.process(i),f.process(i),p.process(i),i.isProcessing=!1,n&&e&&(r=!1,t(y))},x=()=>{n=!0,r=!0,i.isProcessing||t(y)};return{schedule:uu.reduce((w,_)=>{const S=o[_];return w[_]=(b,O=!1,M=!1)=>(n||x(),S.schedule(b,O,M)),w},{}),cancel:w=>{for(let _=0;_<uu.length;_++)o[uu[_]].cancel(w)},state:i,steps:o}}const{schedule:ge,cancel:Kr,state:Je,steps:$d}=tx(typeof requestAnimationFrame<"u"?requestAnimationFrame:gt,!0),nx=(t,e,n)=>(((1-3*n+3*e)*t+(3*n-6*e))*t+3*e)*t,cV=1e-7,hV=12;function dV(t,e,n,r,i){let s,o,a=0;do o=e+(n-e)/2,s=nx(o,r,i)-t,s>0?n=o:e=o;while(Math.abs(s)>cV&&++a<hV);return o}function dl(t,e,n,r){if(t===e&&n===r)return gt;const i=s=>dV(s,0,1,t,n);return s=>s===0||s===1?s:nx(i(s),e,r)}const rx=t=>e=>e<=.5?t(2*e)/2:(2-t(2*(1-e)))/2,ix=t=>e=>1-t(1-e),sx=dl(.33,1.53,.69,.99),gg=ix(sx),ox=rx(gg),ax=t=>(t*=2)<1?.5*gg(t):.5*(2-Math.pow(2,-10*(t-1))),yg=t=>1-Math.sin(Math.acos(t)),lx=ix(yg),ux=rx(yg),cx=t=>/^0[^.\s]+$/u.test(t);function fV(t){return typeof t=="number"?t===0:t!==null?t==="none"||t==="0"||cx(t):!0}let Cp=gt;const hx=t=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t),dx=t=>e=>typeof e=="string"&&e.startsWith(t),fx=dx("--"),pV=dx("var(--"),vg=t=>pV(t)?mV.test(t.split("/*")[0].trim()):!1,mV=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,gV=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function yV(t){const e=gV.exec(t);if(!e)return[,];const[,n,r,i]=e;return[`--${n??r}`,i]}function px(t,e,n=1){const[r,i]=yV(t);if(!r)return;const s=window.getComputedStyle(e).getPropertyValue(r);if(s){const o=s.trim();return hx(o)?parseFloat(o):o}return vg(i)?px(i,e,n+1):i}const Gr=(t,e,n)=>n>e?e:n<t?t:n,go={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},qa={...go,transform:t=>Gr(0,1,t)},cu={...go,default:1},fl=t=>({test:e=>typeof e=="string"&&e.endsWith(t)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${t}`}),_r=fl("deg"),Pn=fl("%"),Y=fl("px"),vV=fl("vh"),_V=fl("vw"),m_={...Pn,parse:t=>Pn.parse(t)/100,transform:t=>Pn.transform(t*100)},wV=new Set(["width","height","top","left","right","bottom","x","y","translateX","translateY"]),g_=t=>t===go||t===Y,y_=(t,e)=>parseFloat(t.split(", ")[e]),v_=(t,e)=>(n,{transform:r})=>{if(r==="none"||!r)return 0;const i=r.match(/^matrix3d\((.+)\)$/u);if(i)return y_(i[1],e);{const s=r.match(/^matrix\((.+)\)$/u);return s?y_(s[1],t):0}},EV=new Set(["x","y","z"]),TV=hl.filter(t=>!EV.has(t));function SV(t){const e=[];return TV.forEach(n=>{const r=t.getValue(n);r!==void 0&&(e.push([n,r.get()]),r.set(n.startsWith("scale")?1:0))}),e}const Ys={width:({x:t},{paddingLeft:e="0",paddingRight:n="0"})=>t.max-t.min-parseFloat(e)-parseFloat(n),height:({y:t},{paddingTop:e="0",paddingBottom:n="0"})=>t.max-t.min-parseFloat(e)-parseFloat(n),top:(t,{top:e})=>parseFloat(e),left:(t,{left:e})=>parseFloat(e),bottom:({y:t},{top:e})=>parseFloat(e)+(t.max-t.min),right:({x:t},{left:e})=>parseFloat(e)+(t.max-t.min),x:v_(4,13),y:v_(5,14)};Ys.translateX=Ys.x;Ys.translateY=Ys.y;const mx=t=>e=>e.test(t),xV={test:t=>t==="auto",parse:t=>t},gx=[go,Y,Pn,_r,_V,vV,xV],__=t=>gx.find(mx(t)),Ri=new Set;let Ap=!1,Rp=!1;function yx(){if(Rp){const t=Array.from(Ri).filter(r=>r.needsMeasurement),e=new Set(t.map(r=>r.element)),n=new Map;e.forEach(r=>{const i=SV(r);i.length&&(n.set(r,i),r.render())}),t.forEach(r=>r.measureInitialState()),e.forEach(r=>{r.render();const i=n.get(r);i&&i.forEach(([s,o])=>{var a;(a=r.getValue(s))===null||a===void 0||a.set(o)})}),t.forEach(r=>r.measureEndState()),t.forEach(r=>{r.suspendedScrollY!==void 0&&window.scrollTo(0,r.suspendedScrollY)})}Rp=!1,Ap=!1,Ri.forEach(t=>t.complete()),Ri.clear()}function vx(){Ri.forEach(t=>{t.readKeyframes(),t.needsMeasurement&&(Rp=!0)})}function IV(){vx(),yx()}class _g{constructor(e,n,r,i,s,o=!1){this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...e],this.onComplete=n,this.name=r,this.motionValue=i,this.element=s,this.isAsync=o}scheduleResolve(){this.isScheduled=!0,this.isAsync?(Ri.add(this),Ap||(Ap=!0,ge.read(vx),ge.resolveKeyframes(yx))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:e,name:n,element:r,motionValue:i}=this;for(let s=0;s<e.length;s++)if(e[s]===null)if(s===0){const o=i==null?void 0:i.get(),a=e[e.length-1];if(o!==void 0)e[0]=o;else if(r&&n){const l=r.readValue(n,a);l!=null&&(e[0]=l)}e[0]===void 0&&(e[0]=a),i&&o===void 0&&i.set(e[0])}else e[s]=e[s-1]}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),Ri.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,Ri.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}const ma=t=>Math.round(t*1e5)/1e5,wg=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function PV(t){return t==null}const CV=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Eg=(t,e)=>n=>!!(typeof n=="string"&&CV.test(n)&&n.startsWith(t)||e&&!PV(n)&&Object.prototype.hasOwnProperty.call(n,e)),_x=(t,e,n)=>r=>{if(typeof r!="string")return r;const[i,s,o,a]=r.match(wg);return{[t]:parseFloat(i),[e]:parseFloat(s),[n]:parseFloat(o),alpha:a!==void 0?parseFloat(a):1}},AV=t=>Gr(0,255,t),zd={...go,transform:t=>Math.round(AV(t))},Ti={test:Eg("rgb","red"),parse:_x("red","green","blue"),transform:({red:t,green:e,blue:n,alpha:r=1})=>"rgba("+zd.transform(t)+", "+zd.transform(e)+", "+zd.transform(n)+", "+ma(qa.transform(r))+")"};function RV(t){let e="",n="",r="",i="";return t.length>5?(e=t.substring(1,3),n=t.substring(3,5),r=t.substring(5,7),i=t.substring(7,9)):(e=t.substring(1,2),n=t.substring(2,3),r=t.substring(3,4),i=t.substring(4,5),e+=e,n+=n,r+=r,i+=i),{red:parseInt(e,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:i?parseInt(i,16)/255:1}}const kp={test:Eg("#"),parse:RV,transform:Ti.transform},Ts={test:Eg("hsl","hue"),parse:_x("hue","saturation","lightness"),transform:({hue:t,saturation:e,lightness:n,alpha:r=1})=>"hsla("+Math.round(t)+", "+Pn.transform(ma(e))+", "+Pn.transform(ma(n))+", "+ma(qa.transform(r))+")"},ht={test:t=>Ti.test(t)||kp.test(t)||Ts.test(t),parse:t=>Ti.test(t)?Ti.parse(t):Ts.test(t)?Ts.parse(t):kp.parse(t),transform:t=>typeof t=="string"?t:t.hasOwnProperty("red")?Ti.transform(t):Ts.transform(t)},kV=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function bV(t){var e,n;return isNaN(t)&&typeof t=="string"&&(((e=t.match(wg))===null||e===void 0?void 0:e.length)||0)+(((n=t.match(kV))===null||n===void 0?void 0:n.length)||0)>0}const wx="number",Ex="color",VV="var",DV="var(",w_="${}",NV=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Ka(t){const e=t.toString(),n=[],r={color:[],number:[],var:[]},i=[];let s=0;const a=e.replace(NV,l=>(ht.test(l)?(r.color.push(s),i.push(Ex),n.push(ht.parse(l))):l.startsWith(DV)?(r.var.push(s),i.push(VV),n.push(l)):(r.number.push(s),i.push(wx),n.push(parseFloat(l))),++s,w_)).split(w_);return{values:n,split:a,indexes:r,types:i}}function Tx(t){return Ka(t).values}function Sx(t){const{split:e,types:n}=Ka(t),r=e.length;return i=>{let s="";for(let o=0;o<r;o++)if(s+=e[o],i[o]!==void 0){const a=n[o];a===wx?s+=ma(i[o]):a===Ex?s+=ht.transform(i[o]):s+=i[o]}return s}}const OV=t=>typeof t=="number"?0:t;function LV(t){const e=Tx(t);return Sx(t)(e.map(OV))}const Qr={test:bV,parse:Tx,createTransformer:Sx,getAnimatableNone:LV},MV=new Set(["brightness","contrast","saturate","opacity"]);function jV(t){const[e,n]=t.slice(0,-1).split("(");if(e==="drop-shadow")return t;const[r]=n.match(wg)||[];if(!r)return t;const i=n.replace(r,"");let s=MV.has(e)?1:0;return r!==n&&(s*=100),e+"("+s+i+")"}const FV=/\b([a-z-]*)\(.*?\)/gu,bp={...Qr,getAnimatableNone:t=>{const e=t.match(FV);return e?e.map(jV).join(" "):t}},UV={borderWidth:Y,borderTopWidth:Y,borderRightWidth:Y,borderBottomWidth:Y,borderLeftWidth:Y,borderRadius:Y,radius:Y,borderTopLeftRadius:Y,borderTopRightRadius:Y,borderBottomRightRadius:Y,borderBottomLeftRadius:Y,width:Y,maxWidth:Y,height:Y,maxHeight:Y,top:Y,right:Y,bottom:Y,left:Y,padding:Y,paddingTop:Y,paddingRight:Y,paddingBottom:Y,paddingLeft:Y,margin:Y,marginTop:Y,marginRight:Y,marginBottom:Y,marginLeft:Y,backgroundPositionX:Y,backgroundPositionY:Y},BV={rotate:_r,rotateX:_r,rotateY:_r,rotateZ:_r,scale:cu,scaleX:cu,scaleY:cu,scaleZ:cu,skew:_r,skewX:_r,skewY:_r,distance:Y,translateX:Y,translateY:Y,translateZ:Y,x:Y,y:Y,z:Y,perspective:Y,transformPerspective:Y,opacity:qa,originX:m_,originY:m_,originZ:Y},E_={...go,transform:Math.round},Tg={...UV,...BV,zIndex:E_,size:Y,fillOpacity:qa,strokeOpacity:qa,numOctaves:E_},$V={...Tg,color:ht,backgroundColor:ht,outlineColor:ht,fill:ht,stroke:ht,borderColor:ht,borderTopColor:ht,borderRightColor:ht,borderBottomColor:ht,borderLeftColor:ht,filter:bp,WebkitFilter:bp},Sg=t=>$V[t];function xx(t,e){let n=Sg(t);return n!==bp&&(n=Qr),n.getAnimatableNone?n.getAnimatableNone(e):void 0}const zV=new Set(["auto","none","0"]);function WV(t,e,n){let r=0,i;for(;r<t.length&&!i;){const s=t[r];typeof s=="string"&&!zV.has(s)&&Ka(s).values.length&&(i=t[r]),r++}if(i&&n)for(const s of e)t[s]=xx(n,i)}class Ix extends _g{constructor(e,n,r,i,s){super(e,n,r,i,s,!0)}readKeyframes(){const{unresolvedKeyframes:e,element:n,name:r}=this;if(!n||!n.current)return;super.readKeyframes();for(let l=0;l<e.length;l++){let c=e[l];if(typeof c=="string"&&(c=c.trim(),vg(c))){const h=px(c,n.current);h!==void 0&&(e[l]=h),l===e.length-1&&(this.finalKeyframe=c)}}if(this.resolveNoneKeyframes(),!wV.has(r)||e.length!==2)return;const[i,s]=e,o=__(i),a=__(s);if(o!==a)if(g_(o)&&g_(a))for(let l=0;l<e.length;l++){const c=e[l];typeof c=="string"&&(e[l]=parseFloat(c))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:e,name:n}=this,r=[];for(let i=0;i<e.length;i++)fV(e[i])&&r.push(i);r.length&&WV(e,r,n)}measureInitialState(){const{element:e,unresolvedKeyframes:n,name:r}=this;if(!e||!e.current)return;r==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Ys[r](e.measureViewportBox(),window.getComputedStyle(e.current)),n[0]=this.measuredOrigin;const i=n[n.length-1];i!==void 0&&e.getValue(r,i).jump(i,!1)}measureEndState(){var e;const{element:n,name:r,unresolvedKeyframes:i}=this;if(!n||!n.current)return;const s=n.getValue(r);s&&s.jump(this.measuredOrigin,!1);const o=i.length-1,a=i[o];i[o]=Ys[r](n.measureViewportBox(),window.getComputedStyle(n.current)),a!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=a),!((e=this.removedTransforms)===null||e===void 0)&&e.length&&this.removedTransforms.forEach(([l,c])=>{n.getValue(l).set(c)}),this.resolveNoneKeyframes()}}function xg(t){return typeof t=="function"}let Lu;function HV(){Lu=void 0}const Cn={now:()=>(Lu===void 0&&Cn.set(Je.isProcessing||oV.useManualTiming?Je.timestamp:performance.now()),Lu),set:t=>{Lu=t,queueMicrotask(HV)}},T_=(t,e)=>e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&(Qr.test(t)||t==="0")&&!t.startsWith("url("));function qV(t){const e=t[0];if(t.length===1)return!0;for(let n=0;n<t.length;n++)if(t[n]!==e)return!0}function KV(t,e,n,r){const i=t[0];if(i===null)return!1;if(e==="display"||e==="visibility")return!0;const s=t[t.length-1],o=T_(i,e),a=T_(s,e);return!o||!a?!1:qV(t)||(n==="spring"||xg(n))&&r}const GV=40;class Px{constructor({autoplay:e=!0,delay:n=0,type:r="keyframes",repeat:i=0,repeatDelay:s=0,repeatType:o="loop",...a}){this.isStopped=!1,this.hasAttemptedResolve=!1,this.createdAt=Cn.now(),this.options={autoplay:e,delay:n,type:r,repeat:i,repeatDelay:s,repeatType:o,...a},this.updateFinishedPromise()}calcStartTime(){return this.resolvedAt?this.resolvedAt-this.createdAt>GV?this.resolvedAt:this.createdAt:this.createdAt}get resolved(){return!this._resolved&&!this.hasAttemptedResolve&&IV(),this._resolved}onKeyframesResolved(e,n){this.resolvedAt=Cn.now(),this.hasAttemptedResolve=!0;const{name:r,type:i,velocity:s,delay:o,onComplete:a,onUpdate:l,isGenerator:c}=this.options;if(!c&&!KV(e,r,i,s))if(o)this.options.duration=0;else{l==null||l(Eh(e,this.options,n)),a==null||a(),this.resolveFinishedPromise();return}const h=this.initPlayback(e,n);h!==!1&&(this._resolved={keyframes:e,finalKeyframe:n,...h},this.onPostResolved())}onPostResolved(){}then(e,n){return this.currentFinishedPromise.then(e,n)}updateFinishedPromise(){this.currentFinishedPromise=new Promise(e=>{this.resolveFinishedPromise=e})}}function Cx(t,e){return e?t*(1e3/e):0}const QV=5;function Ax(t,e,n){const r=Math.max(e-QV,0);return Cx(n-t(r),e-r)}const Wd=.001,YV=.01,XV=10,JV=.05,ZV=1;function eD({duration:t=800,bounce:e=.25,velocity:n=0,mass:r=1}){let i,s,o=1-e;o=Gr(JV,ZV,o),t=Gr(YV,XV,Qn(t)),o<1?(i=c=>{const h=c*o,f=h*t,p=h-n,y=Vp(c,o),x=Math.exp(-f);return Wd-p/y*x},s=c=>{const f=c*o*t,p=f*n+n,y=Math.pow(o,2)*Math.pow(c,2)*t,x=Math.exp(-f),I=Vp(Math.pow(c,2),o);return(-i(c)+Wd>0?-1:1)*((p-y)*x)/I}):(i=c=>{const h=Math.exp(-c*t),f=(c-n)*t+1;return-Wd+h*f},s=c=>{const h=Math.exp(-c*t),f=(n-c)*(t*t);return h*f});const a=5/t,l=nD(i,s,a);if(t=Gn(t),isNaN(l))return{stiffness:100,damping:10,duration:t};{const c=Math.pow(l,2)*r;return{stiffness:c,damping:o*2*Math.sqrt(r*c),duration:t}}}const tD=12;function nD(t,e,n){let r=n;for(let i=1;i<tD;i++)r=r-t(r)/e(r);return r}function Vp(t,e){return t*Math.sqrt(1-e*e)}const rD=["duration","bounce"],iD=["stiffness","damping","mass"];function S_(t,e){return e.some(n=>t[n]!==void 0)}function sD(t){let e={velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1,...t};if(!S_(t,iD)&&S_(t,rD)){const n=eD(t);e={...e,...n,mass:1},e.isResolvedFromDuration=!0}return e}function Rx({keyframes:t,restDelta:e,restSpeed:n,...r}){const i=t[0],s=t[t.length-1],o={done:!1,value:i},{stiffness:a,damping:l,mass:c,duration:h,velocity:f,isResolvedFromDuration:p}=sD({...r,velocity:-Qn(r.velocity||0)}),y=f||0,x=l/(2*Math.sqrt(a*c)),I=s-i,R=Qn(Math.sqrt(a/c)),w=Math.abs(I)<5;n||(n=w?.01:2),e||(e=w?.005:.5);let _;if(x<1){const S=Vp(R,x);_=b=>{const O=Math.exp(-x*R*b);return s-O*((y+x*R*I)/S*Math.sin(S*b)+I*Math.cos(S*b))}}else if(x===1)_=S=>s-Math.exp(-R*S)*(I+(y+R*I)*S);else{const S=R*Math.sqrt(x*x-1);_=b=>{const O=Math.exp(-x*R*b),M=Math.min(S*b,300);return s-O*((y+x*R*I)*Math.sinh(M)+S*I*Math.cosh(M))/S}}return{calculatedDuration:p&&h||null,next:S=>{const b=_(S);if(p)o.done=S>=h;else{let O=0;x<1&&(O=S===0?Gn(y):Ax(_,S,b));const M=Math.abs(O)<=n,T=Math.abs(s-b)<=e;o.done=M&&T}return o.value=o.done?s:b,o}}}function x_({keyframes:t,velocity:e=0,power:n=.8,timeConstant:r=325,bounceDamping:i=10,bounceStiffness:s=500,modifyTarget:o,min:a,max:l,restDelta:c=.5,restSpeed:h}){const f=t[0],p={done:!1,value:f},y=v=>a!==void 0&&v<a||l!==void 0&&v>l,x=v=>a===void 0?l:l===void 0||Math.abs(a-v)<Math.abs(l-v)?a:l;let I=n*e;const R=f+I,w=o===void 0?R:o(R);w!==R&&(I=w-f);const _=v=>-I*Math.exp(-v/r),S=v=>w+_(v),b=v=>{const P=_(v),C=S(v);p.done=Math.abs(P)<=c,p.value=p.done?w:C};let O,M;const T=v=>{y(p.value)&&(O=v,M=Rx({keyframes:[p.value,x(p.value)],velocity:Ax(S,v,p.value),damping:i,stiffness:s,restDelta:c,restSpeed:h}))};return T(0),{calculatedDuration:null,next:v=>{let P=!1;return!M&&O===void 0&&(P=!0,b(v),T(v)),O!==void 0&&v>=O?M.next(v-O):(!P&&b(v),p)}}}const oD=dl(.42,0,1,1),aD=dl(0,0,.58,1),kx=dl(.42,0,.58,1),lD=t=>Array.isArray(t)&&typeof t[0]!="number",Ig=t=>Array.isArray(t)&&typeof t[0]=="number",I_={linear:gt,easeIn:oD,easeInOut:kx,easeOut:aD,circIn:yg,circInOut:ux,circOut:lx,backIn:gg,backInOut:ox,backOut:sx,anticipate:ax},P_=t=>{if(Ig(t)){Cp(t.length===4);const[e,n,r,i]=t;return dl(e,n,r,i)}else if(typeof t=="string")return Cp(I_[t]!==void 0),I_[t];return t},uD=(t,e)=>n=>e(t(n)),Yn=(...t)=>t.reduce(uD),Xs=(t,e,n)=>{const r=e-t;return r===0?1:(n-t)/r},Re=(t,e,n)=>t+(e-t)*n;function Hd(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*(2/3-n)*6:t}function cD({hue:t,saturation:e,lightness:n,alpha:r}){t/=360,e/=100,n/=100;let i=0,s=0,o=0;if(!e)i=s=o=n;else{const a=n<.5?n*(1+e):n+e-n*e,l=2*n-a;i=Hd(l,a,t+1/3),s=Hd(l,a,t),o=Hd(l,a,t-1/3)}return{red:Math.round(i*255),green:Math.round(s*255),blue:Math.round(o*255),alpha:r}}function Tc(t,e){return n=>n>0?e:t}const qd=(t,e,n)=>{const r=t*t,i=n*(e*e-r)+r;return i<0?0:Math.sqrt(i)},hD=[kp,Ti,Ts],dD=t=>hD.find(e=>e.test(t));function C_(t){const e=dD(t);if(!e)return!1;let n=e.parse(t);return e===Ts&&(n=cD(n)),n}const A_=(t,e)=>{const n=C_(t),r=C_(e);if(!n||!r)return Tc(t,e);const i={...n};return s=>(i.red=qd(n.red,r.red,s),i.green=qd(n.green,r.green,s),i.blue=qd(n.blue,r.blue,s),i.alpha=Re(n.alpha,r.alpha,s),Ti.transform(i))},Dp=new Set(["none","hidden"]);function fD(t,e){return Dp.has(t)?n=>n<=0?t:e:n=>n>=1?e:t}function pD(t,e){return n=>Re(t,e,n)}function Pg(t){return typeof t=="number"?pD:typeof t=="string"?vg(t)?Tc:ht.test(t)?A_:yD:Array.isArray(t)?bx:typeof t=="object"?ht.test(t)?A_:mD:Tc}function bx(t,e){const n=[...t],r=n.length,i=t.map((s,o)=>Pg(s)(s,e[o]));return s=>{for(let o=0;o<r;o++)n[o]=i[o](s);return n}}function mD(t,e){const n={...t,...e},r={};for(const i in n)t[i]!==void 0&&e[i]!==void 0&&(r[i]=Pg(t[i])(t[i],e[i]));return i=>{for(const s in r)n[s]=r[s](i);return n}}function gD(t,e){var n;const r=[],i={color:0,var:0,number:0};for(let s=0;s<e.values.length;s++){const o=e.types[s],a=t.indexes[o][i[o]],l=(n=t.values[a])!==null&&n!==void 0?n:0;r[s]=l,i[o]++}return r}const yD=(t,e)=>{const n=Qr.createTransformer(e),r=Ka(t),i=Ka(e);return r.indexes.var.length===i.indexes.var.length&&r.indexes.color.length===i.indexes.color.length&&r.indexes.number.length>=i.indexes.number.length?Dp.has(t)&&!i.values.length||Dp.has(e)&&!r.values.length?fD(t,e):Yn(bx(gD(r,i),i.values),n):Tc(t,e)};function Vx(t,e,n){return typeof t=="number"&&typeof e=="number"&&typeof n=="number"?Re(t,e,n):Pg(t)(t,e)}function vD(t,e,n){const r=[],i=n||Vx,s=t.length-1;for(let o=0;o<s;o++){let a=i(t[o],t[o+1]);if(e){const l=Array.isArray(e)?e[o]||gt:e;a=Yn(l,a)}r.push(a)}return r}function _D(t,e,{clamp:n=!0,ease:r,mixer:i}={}){const s=t.length;if(Cp(s===e.length),s===1)return()=>e[0];if(s===2&&t[0]===t[1])return()=>e[1];t[0]>t[s-1]&&(t=[...t].reverse(),e=[...e].reverse());const o=vD(e,r,i),a=o.length,l=c=>{let h=0;if(a>1)for(;h<t.length-2&&!(c<t[h+1]);h++);const f=Xs(t[h],t[h+1],c);return o[h](f)};return n?c=>l(Gr(t[0],t[s-1],c)):l}function wD(t,e){const n=t[t.length-1];for(let r=1;r<=e;r++){const i=Xs(0,e,r);t.push(Re(n,1,i))}}function ED(t){const e=[0];return wD(e,t.length-1),e}function TD(t,e){return t.map(n=>n*e)}function SD(t,e){return t.map(()=>e||kx).splice(0,t.length-1)}function Sc({duration:t=300,keyframes:e,times:n,ease:r="easeInOut"}){const i=lD(r)?r.map(P_):P_(r),s={done:!1,value:e[0]},o=TD(n&&n.length===e.length?n:ED(e),t),a=_D(o,e,{ease:Array.isArray(i)?i:SD(e,i)});return{calculatedDuration:t,next:l=>(s.value=a(l),s.done=l>=t,s)}}const R_=2e4;function xD(t){let e=0;const n=50;let r=t.next(e);for(;!r.done&&e<R_;)e+=n,r=t.next(e);return e>=R_?1/0:e}const ID=t=>{const e=({timestamp:n})=>t(n);return{start:()=>ge.update(e,!0),stop:()=>Kr(e),now:()=>Je.isProcessing?Je.timestamp:Cn.now()}},PD={decay:x_,inertia:x_,tween:Sc,keyframes:Sc,spring:Rx},CD=t=>t/100;class Cg extends Px{constructor(e){super(e),this.holdTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.startTime=null,this.state="idle",this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.teardown();const{onStop:l}=this.options;l&&l()};const{name:n,motionValue:r,element:i,keyframes:s}=this.options,o=(i==null?void 0:i.KeyframeResolver)||_g,a=(l,c)=>this.onKeyframesResolved(l,c);this.resolver=new o(s,a,n,r,i),this.resolver.scheduleResolve()}initPlayback(e){const{type:n="keyframes",repeat:r=0,repeatDelay:i=0,repeatType:s,velocity:o=0}=this.options,a=xg(n)?n:PD[n]||Sc;let l,c;a!==Sc&&typeof e[0]!="number"&&(l=Yn(CD,Vx(e[0],e[1])),e=[0,100]);const h=a({...this.options,keyframes:e});s==="mirror"&&(c=a({...this.options,keyframes:[...e].reverse(),velocity:-o})),h.calculatedDuration===null&&(h.calculatedDuration=xD(h));const{calculatedDuration:f}=h,p=f+i,y=p*(r+1)-i;return{generator:h,mirroredGenerator:c,mapPercentToKeyframes:l,calculatedDuration:f,resolvedDuration:p,totalDuration:y}}onPostResolved(){const{autoplay:e=!0}=this.options;this.play(),this.pendingPlayState==="paused"||!e?this.pause():this.state=this.pendingPlayState}tick(e,n=!1){const{resolved:r}=this;if(!r){const{keyframes:v}=this.options;return{done:!0,value:v[v.length-1]}}const{finalKeyframe:i,generator:s,mirroredGenerator:o,mapPercentToKeyframes:a,keyframes:l,calculatedDuration:c,totalDuration:h,resolvedDuration:f}=r;if(this.startTime===null)return s.next(0);const{delay:p,repeat:y,repeatType:x,repeatDelay:I,onUpdate:R}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-h/this.speed,this.startTime)),n?this.currentTime=e:this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=Math.round(e-this.startTime)*this.speed;const w=this.currentTime-p*(this.speed>=0?1:-1),_=this.speed>=0?w<0:w>h;this.currentTime=Math.max(w,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=h);let S=this.currentTime,b=s;if(y){const v=Math.min(this.currentTime,h)/f;let P=Math.floor(v),C=v%1;!C&&v>=1&&(C=1),C===1&&P--,P=Math.min(P,y+1),!!(P%2)&&(x==="reverse"?(C=1-C,I&&(C-=I/f)):x==="mirror"&&(b=o)),S=Gr(0,1,C)*f}const O=_?{done:!1,value:l[0]}:b.next(S);a&&(O.value=a(O.value));let{done:M}=O;!_&&c!==null&&(M=this.speed>=0?this.currentTime>=h:this.currentTime<=0);const T=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&M);return T&&i!==void 0&&(O.value=Eh(l,this.options,i)),R&&R(O.value),T&&this.finish(),O}get duration(){const{resolved:e}=this;return e?Qn(e.calculatedDuration):0}get time(){return Qn(this.currentTime)}set time(e){e=Gn(e),this.currentTime=e,this.holdTime!==null||this.speed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.speed)}get speed(){return this.playbackSpeed}set speed(e){const n=this.playbackSpeed!==e;this.playbackSpeed=e,n&&(this.time=Qn(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved){this.pendingPlayState="running";return}if(this.isStopped)return;const{driver:e=ID,onPlay:n,startTime:r}=this.options;this.driver||(this.driver=e(s=>this.tick(s))),n&&n();const i=this.driver.now();this.holdTime!==null?this.startTime=i-this.holdTime:this.startTime?this.state==="finished"&&(this.startTime=i):this.startTime=r??this.calcStartTime(),this.state==="finished"&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){var e;if(!this._resolved){this.pendingPlayState="paused";return}this.state="paused",this.holdTime=(e=this.currentTime)!==null&&e!==void 0?e:0}complete(){this.state!=="running"&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";const{onComplete:e}=this.options;e&&e()}cancel(){this.cancelTime!==null&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel()}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}}const Dx=new Set(["opacity","clipPath","filter","transform"]),AD=10,RD=(t,e)=>{let n="";const r=Math.max(Math.round(e/AD),2);for(let i=0;i<r;i++)n+=t(Xs(0,r-1,i))+", ";return`linear(${n.substring(0,n.length-2)})`};function Ag(t){let e;return()=>(e===void 0&&(e=t()),e)}const kD={linearEasing:void 0};function bD(t,e){const n=Ag(t);return()=>{var r;return(r=kD[e])!==null&&r!==void 0?r:n()}}const xc=bD(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing");function Nx(t){return!!(typeof t=="function"&&xc()||!t||typeof t=="string"&&(t in Np||xc())||Ig(t)||Array.isArray(t)&&t.every(Nx))}const Zo=([t,e,n,r])=>`cubic-bezier(${t}, ${e}, ${n}, ${r})`,Np={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Zo([0,.65,.55,1]),circOut:Zo([.55,0,1,.45]),backIn:Zo([.31,.01,.66,-.59]),backOut:Zo([.33,1.53,.69,.99])};function Ox(t,e){if(t)return typeof t=="function"&&xc()?RD(t,e):Ig(t)?Zo(t):Array.isArray(t)?t.map(n=>Ox(n,e)||Np.easeOut):Np[t]}function VD(t,e,n,{delay:r=0,duration:i=300,repeat:s=0,repeatType:o="loop",ease:a,times:l}={}){const c={[e]:n};l&&(c.offset=l);const h=Ox(a,i);return Array.isArray(h)&&(c.easing=h),t.animate(c,{delay:r,duration:i,easing:Array.isArray(h)?"linear":h,fill:"both",iterations:s+1,direction:o==="reverse"?"alternate":"normal"})}function k_(t,e){t.timeline=e,t.onfinish=null}const DD=Ag(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),Ic=10,ND=2e4;function OD(t){return xg(t.type)||t.type==="spring"||!Nx(t.ease)}function LD(t,e){const n=new Cg({...e,keyframes:t,repeat:0,delay:0,isGenerator:!0});let r={done:!1,value:t[0]};const i=[];let s=0;for(;!r.done&&s<ND;)r=n.sample(s),i.push(r.value),s+=Ic;return{times:void 0,keyframes:i,duration:s-Ic,ease:"linear"}}const Lx={anticipate:ax,backInOut:ox,circInOut:ux};function MD(t){return t in Lx}class b_ extends Px{constructor(e){super(e);const{name:n,motionValue:r,element:i,keyframes:s}=this.options;this.resolver=new Ix(s,(o,a)=>this.onKeyframesResolved(o,a),n,r,i),this.resolver.scheduleResolve()}initPlayback(e,n){var r;let{duration:i=300,times:s,ease:o,type:a,motionValue:l,name:c,startTime:h}=this.options;if(!(!((r=l.owner)===null||r===void 0)&&r.current))return!1;if(typeof o=="string"&&xc()&&MD(o)&&(o=Lx[o]),OD(this.options)){const{onComplete:p,onUpdate:y,motionValue:x,element:I,...R}=this.options,w=LD(e,R);e=w.keyframes,e.length===1&&(e[1]=e[0]),i=w.duration,s=w.times,o=w.ease,a="keyframes"}const f=VD(l.owner.current,c,e,{...this.options,duration:i,times:s,ease:o});return f.startTime=h??this.calcStartTime(),this.pendingTimeline?(k_(f,this.pendingTimeline),this.pendingTimeline=void 0):f.onfinish=()=>{const{onComplete:p}=this.options;l.set(Eh(e,this.options,n)),p&&p(),this.cancel(),this.resolveFinishedPromise()},{animation:f,duration:i,times:s,type:a,ease:o,keyframes:e}}get duration(){const{resolved:e}=this;if(!e)return 0;const{duration:n}=e;return Qn(n)}get time(){const{resolved:e}=this;if(!e)return 0;const{animation:n}=e;return Qn(n.currentTime||0)}set time(e){const{resolved:n}=this;if(!n)return;const{animation:r}=n;r.currentTime=Gn(e)}get speed(){const{resolved:e}=this;if(!e)return 1;const{animation:n}=e;return n.playbackRate}set speed(e){const{resolved:n}=this;if(!n)return;const{animation:r}=n;r.playbackRate=e}get state(){const{resolved:e}=this;if(!e)return"idle";const{animation:n}=e;return n.playState}get startTime(){const{resolved:e}=this;if(!e)return null;const{animation:n}=e;return n.startTime}attachTimeline(e){if(!this._resolved)this.pendingTimeline=e;else{const{resolved:n}=this;if(!n)return gt;const{animation:r}=n;k_(r,e)}return gt}play(){if(this.isStopped)return;const{resolved:e}=this;if(!e)return;const{animation:n}=e;n.playState==="finished"&&this.updateFinishedPromise(),n.play()}pause(){const{resolved:e}=this;if(!e)return;const{animation:n}=e;n.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.resolveFinishedPromise(),this.updateFinishedPromise();const{resolved:e}=this;if(!e)return;const{animation:n,keyframes:r,duration:i,type:s,ease:o,times:a}=e;if(n.playState==="idle"||n.playState==="finished")return;if(this.time){const{motionValue:c,onUpdate:h,onComplete:f,element:p,...y}=this.options,x=new Cg({...y,keyframes:r,duration:i,type:s,ease:o,times:a,isGenerator:!0}),I=Gn(this.time);c.setWithVelocity(x.sample(I-Ic).value,x.sample(I).value,Ic)}const{onStop:l}=this.options;l&&l(),this.cancel()}complete(){const{resolved:e}=this;e&&e.animation.finish()}cancel(){const{resolved:e}=this;e&&e.animation.cancel()}static supports(e){const{motionValue:n,name:r,repeatDelay:i,repeatType:s,damping:o,type:a}=e;return DD()&&r&&Dx.has(r)&&n&&n.owner&&n.owner.current instanceof HTMLElement&&!n.owner.getProps().onUpdate&&!i&&s!=="mirror"&&o!==0&&a!=="inertia"}}const jD=Ag(()=>window.ScrollTimeline!==void 0);class FD{constructor(e){this.stop=()=>this.runAll("stop"),this.animations=e.filter(Boolean)}then(e,n){return Promise.all(this.animations).then(e).catch(n)}getAll(e){return this.animations[0][e]}setAll(e,n){for(let r=0;r<this.animations.length;r++)this.animations[r][e]=n}attachTimeline(e,n){const r=this.animations.map(i=>jD()&&i.attachTimeline?i.attachTimeline(e):n(i));return()=>{r.forEach((i,s)=>{i&&i(),this.animations[s].stop()})}}get time(){return this.getAll("time")}set time(e){this.setAll("time",e)}get speed(){return this.getAll("speed")}set speed(e){this.setAll("speed",e)}get startTime(){return this.getAll("startTime")}get duration(){let e=0;for(let n=0;n<this.animations.length;n++)e=Math.max(e,this.animations[n].duration);return e}runAll(e){this.animations.forEach(n=>n[e]())}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}function UD({when:t,delay:e,delayChildren:n,staggerChildren:r,staggerDirection:i,repeat:s,repeatType:o,repeatDelay:a,from:l,elapsed:c,...h}){return!!Object.keys(h).length}const Rg=(t,e,n,r={},i,s)=>o=>{const a=mg(r,t)||{},l=a.delay||r.delay||0;let{elapsed:c=0}=r;c=c-Gn(l);let h={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:e.getVelocity(),...a,delay:-c,onUpdate:p=>{e.set(p),a.onUpdate&&a.onUpdate(p)},onComplete:()=>{o(),a.onComplete&&a.onComplete()},name:t,motionValue:e,element:s?void 0:i};UD(a)||(h={...h,...sV(t,h)}),h.duration&&(h.duration=Gn(h.duration)),h.repeatDelay&&(h.repeatDelay=Gn(h.repeatDelay)),h.from!==void 0&&(h.keyframes[0]=h.from);let f=!1;if((h.type===!1||h.duration===0&&!h.repeatDelay)&&(h.duration=0,h.delay===0&&(f=!0)),f&&!s&&e.get()!==void 0){const p=Eh(h.keyframes,a);if(p!==void 0)return ge.update(()=>{h.onUpdate(p),h.onComplete()}),new FD([])}return!s&&b_.supports(h)?new b_(h):new Cg(h)},BD=t=>!!(t&&typeof t=="object"&&t.mix&&t.toValue),$D=t=>Pp(t)?t[t.length-1]||0:t;function kg(t,e){t.indexOf(e)===-1&&t.push(e)}function bg(t,e){const n=t.indexOf(e);n>-1&&t.splice(n,1)}class Vg{constructor(){this.subscriptions=[]}add(e){return kg(this.subscriptions,e),()=>bg(this.subscriptions,e)}notify(e,n,r){const i=this.subscriptions.length;if(i)if(i===1)this.subscriptions[0](e,n,r);else for(let s=0;s<i;s++){const o=this.subscriptions[s];o&&o(e,n,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const V_=30,zD=t=>!isNaN(parseFloat(t));class WD{constructor(e,n={}){this.version="11.11.4",this.canTrackVelocity=null,this.events={},this.updateAndNotify=(r,i=!0)=>{const s=Cn.now();this.updatedAt!==s&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(r),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),i&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(e),this.owner=n.owner}setCurrent(e){this.current=e,this.updatedAt=Cn.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=zD(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,n){this.events[e]||(this.events[e]=new Vg);const r=this.events[e].add(n);return e==="change"?()=>{r(),ge.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,n){this.passiveEffect=e,this.stopPassiveEffect=n}set(e,n=!0){!n||!this.passiveEffect?this.updateAndNotify(e,n):this.passiveEffect(e,this.updateAndNotify)}setWithVelocity(e,n,r){this.set(n),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-r}jump(e,n=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,n&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const e=Cn.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>V_)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,V_);return Cx(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(e){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=e(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Ga(t,e){return new WD(t,e)}function HD(t,e,n){t.hasValue(e)?t.getValue(e).set(n):t.addValue(e,Ga(n))}function qD(t,e){const n=wh(t,e);let{transitionEnd:r={},transition:i={},...s}=n||{};s={...s,...r};for(const o in s){const a=$D(s[o]);HD(t,o,a)}}const Th=t=>t.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),KD="framerAppearId",Mx="data-"+Th(KD);function jx(t){return t.props[Mx]}const mt=t=>!!(t&&t.getVelocity);function GD(t){return!!(mt(t)&&t.add)}function Fx(t){if(ni.has(t))return"transform";if(Dx.has(t))return Th(t)}function Op(t,e){var n;if(!t.applyWillChange)return;const r=t.getValue("willChange");if(GD(r))return r.add(e);!(!((n=t.props.style)===null||n===void 0)&&n.willChange)&&Fx(e)&&t.setStaticValue("willChange","transform")}function QD({protectedKeys:t,needsAnimating:e},n){const r=t.hasOwnProperty(n)&&e[n]!==!0;return e[n]=!1,r}function Ux(t,e,{delay:n=0,transitionOverride:r,type:i}={}){var s;let{transition:o=t.getDefaultTransition(),transitionEnd:a,...l}=e;r&&(o=r);const c=[],h=i&&t.animationState&&t.animationState.getState()[i];for(const f in l){const p=t.getValue(f,(s=t.latestValues[f])!==null&&s!==void 0?s:null),y=l[f];if(y===void 0||h&&QD(h,f))continue;const x={delay:n,...mg(o||{},f)};let I=!1;if(window.MotionHandoffAnimation){const w=jx(t);if(w){const _=window.MotionHandoffAnimation(w,f,ge);_!==null&&(x.startTime=_,I=!0)}}Op(t,f),p.start(Rg(f,p,y,t.shouldReduceMotion&&ni.has(f)?{type:!1}:x,t,I));const R=p.animation;R&&c.push(R)}return a&&Promise.all(c).then(()=>{ge.update(()=>{a&&qD(t,a)})}),c}function Lp(t,e,n={}){var r;const i=wh(t,e,n.type==="exit"?(r=t.presenceContext)===null||r===void 0?void 0:r.custom:void 0);let{transition:s=t.getDefaultTransition()||{}}=i||{};n.transitionOverride&&(s=n.transitionOverride);const o=i?()=>Promise.all(Ux(t,i,n)):()=>Promise.resolve(),a=t.variantChildren&&t.variantChildren.size?(c=0)=>{const{delayChildren:h=0,staggerChildren:f,staggerDirection:p}=s;return YD(t,e,h+c,f,p,n)}:()=>Promise.resolve(),{when:l}=s;if(l){const[c,h]=l==="beforeChildren"?[o,a]:[a,o];return c().then(()=>h())}else return Promise.all([o(),a(n.delay)])}function YD(t,e,n=0,r=0,i=1,s){const o=[],a=(t.variantChildren.size-1)*r,l=i===1?(c=0)=>c*r:(c=0)=>a-c*r;return Array.from(t.variantChildren).sort(XD).forEach((c,h)=>{c.notify("AnimationStart",e),o.push(Lp(c,e,{...s,delay:n+l(h)}).then(()=>c.notify("AnimationComplete",e)))}),Promise.all(o)}function XD(t,e){return t.sortNodePosition(e)}function JD(t,e,n={}){t.notify("AnimationStart",e);let r;if(Array.isArray(e)){const i=e.map(s=>Lp(t,s,n));r=Promise.all(i)}else if(typeof e=="string")r=Lp(t,e,n);else{const i=typeof e=="function"?wh(t,e,n.custom):e;r=Promise.all(Ux(t,i,n))}return r.then(()=>{t.notify("AnimationComplete",e)})}const ZD=pg.length;function Bx(t){if(!t)return;if(!t.isControllingVariants){const n=t.parent?Bx(t.parent)||{}:{};return t.props.initial!==void 0&&(n.initial=t.props.initial),n}const e={};for(let n=0;n<ZD;n++){const r=pg[n],i=t.props[r];(Ha(i)||i===!1)&&(e[r]=i)}return e}const eN=[...fg].reverse(),tN=fg.length;function nN(t){return e=>Promise.all(e.map(({animation:n,options:r})=>JD(t,n,r)))}function rN(t){let e=nN(t),n=D_(),r=!0;const i=l=>(c,h)=>{var f;const p=wh(t,h,l==="exit"?(f=t.presenceContext)===null||f===void 0?void 0:f.custom:void 0);if(p){const{transition:y,transitionEnd:x,...I}=p;c={...c,...I,...x}}return c};function s(l){e=l(t)}function o(l){const{props:c}=t,h=Bx(t.parent)||{},f=[],p=new Set;let y={},x=1/0;for(let R=0;R<tN;R++){const w=eN[R],_=n[w],S=c[w]!==void 0?c[w]:h[w],b=Ha(S),O=w===l?_.isActive:null;O===!1&&(x=R);let M=S===h[w]&&S!==c[w]&&b;if(M&&r&&t.manuallyAnimateOnMount&&(M=!1),_.protectedKeys={...y},!_.isActive&&O===null||!S&&!_.prevProp||Wa(S)||typeof S=="boolean")continue;const T=iN(_.prevProp,S);let v=T||w===l&&_.isActive&&!M&&b||R>x&&b,P=!1;const C=Array.isArray(S)?S:[S];let k=C.reduce(i(w),{});O===!1&&(k={});const{prevResolvedValues:V={}}=_,A={...V,...k},_e=de=>{v=!0,p.has(de)&&(P=!0,p.delete(de)),_.needsAnimating[de]=!0;const $=t.getValue(de);$&&($.liveStyle=!1)};for(const de in A){const $=k[de],K=V[de];if(y.hasOwnProperty(de))continue;let Q=!1;Pp($)&&Pp(K)?Q=!ex($,K):Q=$!==K,Q?$!=null?_e(de):p.add(de):$!==void 0&&p.has(de)?_e(de):_.protectedKeys[de]=!0}_.prevProp=S,_.prevResolvedValues=k,_.isActive&&(y={...y,...k}),r&&t.blockInitialAnimation&&(v=!1),v&&(!(M&&T)||P)&&f.push(...C.map(de=>({animation:de,options:{type:w}})))}if(p.size){const R={};p.forEach(w=>{const _=t.getBaseTarget(w),S=t.getValue(w);S&&(S.liveStyle=!0),R[w]=_??null}),f.push({animation:R})}let I=!!f.length;return r&&(c.initial===!1||c.initial===c.animate)&&!t.manuallyAnimateOnMount&&(I=!1),r=!1,I?e(f):Promise.resolve()}function a(l,c){var h;if(n[l].isActive===c)return Promise.resolve();(h=t.variantChildren)===null||h===void 0||h.forEach(p=>{var y;return(y=p.animationState)===null||y===void 0?void 0:y.setActive(l,c)}),n[l].isActive=c;const f=o(l);for(const p in n)n[p].protectedKeys={};return f}return{animateChanges:o,setActive:a,setAnimateFunction:s,getState:()=>n,reset:()=>{n=D_(),r=!0}}}function iN(t,e){return typeof e=="string"?e!==t:Array.isArray(e)?!ex(e,t):!1}function ui(t=!1){return{isActive:t,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function D_(){return{animate:ui(!0),whileInView:ui(),whileHover:ui(),whileTap:ui(),whileDrag:ui(),whileFocus:ui(),exit:ui()}}class ri{constructor(e){this.isMounted=!1,this.node=e}update(){}}class sN extends ri{constructor(e){super(e),e.animationState||(e.animationState=rN(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();Wa(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:n}=this.node.prevProps||{};e!==n&&this.updateAnimationControlsSubscription()}unmount(){var e;this.node.animationState.reset(),(e=this.unmountControls)===null||e===void 0||e.call(this)}}let oN=0;class aN extends ri{constructor(){super(...arguments),this.id=oN++}update(){if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:n}=this.node.presenceContext,{isPresent:r}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===r)return;const i=this.node.animationState.setActive("exit",!e);n&&!e&&i.then(()=>n(this.id))}mount(){const{register:e}=this.node.presenceContext||{};e&&(this.unmount=e(this.id))}unmount(){}}const lN={animation:{Feature:sN},exit:{Feature:aN}},$x=t=>t.pointerType==="mouse"?typeof t.button!="number"||t.button<=0:t.isPrimary!==!1;function Sh(t,e="page"){return{point:{x:t[`${e}X`],y:t[`${e}Y`]}}}const uN=t=>e=>$x(e)&&t(e,Sh(e));function zn(t,e,n,r={passive:!0}){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n)}function Xn(t,e,n,r){return zn(t,e,uN(n),r)}const N_=(t,e)=>Math.abs(t-e);function cN(t,e){const n=N_(t.x,e.x),r=N_(t.y,e.y);return Math.sqrt(n**2+r**2)}class zx{constructor(e,n,{transformPagePoint:r,contextWindow:i,dragSnapToOrigin:s=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const f=Gd(this.lastMoveEventInfo,this.history),p=this.startEvent!==null,y=cN(f.offset,{x:0,y:0})>=3;if(!p&&!y)return;const{point:x}=f,{timestamp:I}=Je;this.history.push({...x,timestamp:I});const{onStart:R,onMove:w}=this.handlers;p||(R&&R(this.lastMoveEvent,f),this.startEvent=this.lastMoveEvent),w&&w(this.lastMoveEvent,f)},this.handlePointerMove=(f,p)=>{this.lastMoveEvent=f,this.lastMoveEventInfo=Kd(p,this.transformPagePoint),ge.update(this.updatePoint,!0)},this.handlePointerUp=(f,p)=>{this.end();const{onEnd:y,onSessionEnd:x,resumeAnimation:I}=this.handlers;if(this.dragSnapToOrigin&&I&&I(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const R=Gd(f.type==="pointercancel"?this.lastMoveEventInfo:Kd(p,this.transformPagePoint),this.history);this.startEvent&&y&&y(f,R),x&&x(f,R)},!$x(e))return;this.dragSnapToOrigin=s,this.handlers=n,this.transformPagePoint=r,this.contextWindow=i||window;const o=Sh(e),a=Kd(o,this.transformPagePoint),{point:l}=a,{timestamp:c}=Je;this.history=[{...l,timestamp:c}];const{onSessionStart:h}=n;h&&h(e,Gd(a,this.history)),this.removeListeners=Yn(Xn(this.contextWindow,"pointermove",this.handlePointerMove),Xn(this.contextWindow,"pointerup",this.handlePointerUp),Xn(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),Kr(this.updatePoint)}}function Kd(t,e){return e?{point:e(t.point)}:t}function O_(t,e){return{x:t.x-e.x,y:t.y-e.y}}function Gd({point:t},e){return{point:t,delta:O_(t,Wx(e)),offset:O_(t,hN(e)),velocity:dN(e,.1)}}function hN(t){return t[0]}function Wx(t){return t[t.length-1]}function dN(t,e){if(t.length<2)return{x:0,y:0};let n=t.length-1,r=null;const i=Wx(t);for(;n>=0&&(r=t[n],!(i.timestamp-r.timestamp>Gn(e)));)n--;if(!r)return{x:0,y:0};const s=Qn(i.timestamp-r.timestamp);if(s===0)return{x:0,y:0};const o={x:(i.x-r.x)/s,y:(i.y-r.y)/s};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}function Hx(t){let e=null;return()=>{const n=()=>{e=null};return e===null?(e=t,n):!1}}const L_=Hx("dragHorizontal"),M_=Hx("dragVertical");function qx(t){let e=!1;if(t==="y")e=M_();else if(t==="x")e=L_();else{const n=L_(),r=M_();n&&r?e=()=>{n(),r()}:(n&&n(),r&&r())}return e}function Kx(){const t=qx(!0);return t?(t(),!1):!0}function Ss(t){return t&&typeof t=="object"&&Object.prototype.hasOwnProperty.call(t,"current")}const Gx=1e-4,fN=1-Gx,pN=1+Gx,Qx=.01,mN=0-Qx,gN=0+Qx;function Wt(t){return t.max-t.min}function yN(t,e,n){return Math.abs(t-e)<=n}function j_(t,e,n,r=.5){t.origin=r,t.originPoint=Re(e.min,e.max,t.origin),t.scale=Wt(n)/Wt(e),t.translate=Re(n.min,n.max,t.origin)-t.originPoint,(t.scale>=fN&&t.scale<=pN||isNaN(t.scale))&&(t.scale=1),(t.translate>=mN&&t.translate<=gN||isNaN(t.translate))&&(t.translate=0)}function ga(t,e,n,r){j_(t.x,e.x,n.x,r?r.originX:void 0),j_(t.y,e.y,n.y,r?r.originY:void 0)}function F_(t,e,n){t.min=n.min+e.min,t.max=t.min+Wt(e)}function vN(t,e,n){F_(t.x,e.x,n.x),F_(t.y,e.y,n.y)}function U_(t,e,n){t.min=e.min-n.min,t.max=t.min+Wt(e)}function ya(t,e,n){U_(t.x,e.x,n.x),U_(t.y,e.y,n.y)}function _N(t,{min:e,max:n},r){return e!==void 0&&t<e?t=r?Re(e,t,r.min):Math.max(t,e):n!==void 0&&t>n&&(t=r?Re(n,t,r.max):Math.min(t,n)),t}function B_(t,e,n){return{min:e!==void 0?t.min+e:void 0,max:n!==void 0?t.max+n-(t.max-t.min):void 0}}function wN(t,{top:e,left:n,bottom:r,right:i}){return{x:B_(t.x,n,i),y:B_(t.y,e,r)}}function $_(t,e){let n=e.min-t.min,r=e.max-t.max;return e.max-e.min<t.max-t.min&&([n,r]=[r,n]),{min:n,max:r}}function EN(t,e){return{x:$_(t.x,e.x),y:$_(t.y,e.y)}}function TN(t,e){let n=.5;const r=Wt(t),i=Wt(e);return i>r?n=Xs(e.min,e.max-r,t.min):r>i&&(n=Xs(t.min,t.max-i,e.min)),Gr(0,1,n)}function SN(t,e){const n={};return e.min!==void 0&&(n.min=e.min-t.min),e.max!==void 0&&(n.max=e.max-t.min),n}const Mp=.35;function xN(t=Mp){return t===!1?t=0:t===!0&&(t=Mp),{x:z_(t,"left","right"),y:z_(t,"top","bottom")}}function z_(t,e,n){return{min:W_(t,e),max:W_(t,n)}}function W_(t,e){return typeof t=="number"?t:t[e]||0}const H_=()=>({translate:0,scale:1,origin:0,originPoint:0}),xs=()=>({x:H_(),y:H_()}),q_=()=>({min:0,max:0}),Oe=()=>({x:q_(),y:q_()});function Yt(t){return[t("x"),t("y")]}function Yx({top:t,left:e,right:n,bottom:r}){return{x:{min:e,max:n},y:{min:t,max:r}}}function IN({x:t,y:e}){return{top:e.min,right:t.max,bottom:e.max,left:t.min}}function PN(t,e){if(!e)return t;const n=e({x:t.left,y:t.top}),r=e({x:t.right,y:t.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}function Qd(t){return t===void 0||t===1}function jp({scale:t,scaleX:e,scaleY:n}){return!Qd(t)||!Qd(e)||!Qd(n)}function mi(t){return jp(t)||Xx(t)||t.z||t.rotate||t.rotateX||t.rotateY||t.skewX||t.skewY}function Xx(t){return K_(t.x)||K_(t.y)}function K_(t){return t&&t!=="0%"}function Pc(t,e,n){const r=t-n,i=e*r;return n+i}function G_(t,e,n,r,i){return i!==void 0&&(t=Pc(t,i,r)),Pc(t,n,r)+e}function Fp(t,e=0,n=1,r,i){t.min=G_(t.min,e,n,r,i),t.max=G_(t.max,e,n,r,i)}function Jx(t,{x:e,y:n}){Fp(t.x,e.translate,e.scale,e.originPoint),Fp(t.y,n.translate,n.scale,n.originPoint)}const Q_=.999999999999,Y_=1.0000000000001;function CN(t,e,n,r=!1){const i=n.length;if(!i)return;e.x=e.y=1;let s,o;for(let a=0;a<i;a++){s=n[a],o=s.projectionDelta;const{visualElement:l}=s.options;l&&l.props.style&&l.props.style.display==="contents"||(r&&s.options.layoutScroll&&s.scroll&&s!==s.root&&Ps(t,{x:-s.scroll.offset.x,y:-s.scroll.offset.y}),o&&(e.x*=o.x.scale,e.y*=o.y.scale,Jx(t,o)),r&&mi(s.latestValues)&&Ps(t,s.latestValues))}e.x<Y_&&e.x>Q_&&(e.x=1),e.y<Y_&&e.y>Q_&&(e.y=1)}function Is(t,e){t.min=t.min+e,t.max=t.max+e}function X_(t,e,n,r,i=.5){const s=Re(t.min,t.max,i);Fp(t,e,n,s,r)}function Ps(t,e){X_(t.x,e.x,e.scaleX,e.scale,e.originX),X_(t.y,e.y,e.scaleY,e.scale,e.originY)}function Zx(t,e){return Yx(PN(t.getBoundingClientRect(),e))}function AN(t,e,n){const r=Zx(t,n),{scroll:i}=e;return i&&(Is(r.x,i.offset.x),Is(r.y,i.offset.y)),r}const eI=({current:t})=>t?t.ownerDocument.defaultView:null,RN=new WeakMap;class kN{constructor(e){this.openGlobalLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Oe(),this.visualElement=e}start(e,{snapToCursor:n=!1}={}){const{presenceContext:r}=this.visualElement;if(r&&r.isPresent===!1)return;const i=h=>{const{dragSnapToOrigin:f}=this.getProps();f?this.pauseAnimation():this.stopAnimation(),n&&this.snapToCursor(Sh(h,"page").point)},s=(h,f)=>{const{drag:p,dragPropagation:y,onDragStart:x}=this.getProps();if(p&&!y&&(this.openGlobalLock&&this.openGlobalLock(),this.openGlobalLock=qx(p),!this.openGlobalLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Yt(R=>{let w=this.getAxisMotionValue(R).get()||0;if(Pn.test(w)){const{projection:_}=this.visualElement;if(_&&_.layout){const S=_.layout.layoutBox[R];S&&(w=Wt(S)*(parseFloat(w)/100))}}this.originPoint[R]=w}),x&&ge.postRender(()=>x(h,f)),Op(this.visualElement,"transform");const{animationState:I}=this.visualElement;I&&I.setActive("whileDrag",!0)},o=(h,f)=>{const{dragPropagation:p,dragDirectionLock:y,onDirectionLock:x,onDrag:I}=this.getProps();if(!p&&!this.openGlobalLock)return;const{offset:R}=f;if(y&&this.currentDirection===null){this.currentDirection=bN(R),this.currentDirection!==null&&x&&x(this.currentDirection);return}this.updateAxis("x",f.point,R),this.updateAxis("y",f.point,R),this.visualElement.render(),I&&I(h,f)},a=(h,f)=>this.stop(h,f),l=()=>Yt(h=>{var f;return this.getAnimationState(h)==="paused"&&((f=this.getAxisMotionValue(h).animation)===null||f===void 0?void 0:f.play())}),{dragSnapToOrigin:c}=this.getProps();this.panSession=new zx(e,{onSessionStart:i,onStart:s,onMove:o,onSessionEnd:a,resumeAnimation:l},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:c,contextWindow:eI(this.visualElement)})}stop(e,n){const r=this.isDragging;if(this.cancel(),!r)return;const{velocity:i}=n;this.startAnimation(i);const{onDragEnd:s}=this.getProps();s&&ge.postRender(()=>s(e,n))}cancel(){this.isDragging=!1;const{projection:e,animationState:n}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:r}=this.getProps();!r&&this.openGlobalLock&&(this.openGlobalLock(),this.openGlobalLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(e,n,r){const{drag:i}=this.getProps();if(!r||!hu(e,i,this.currentDirection))return;const s=this.getAxisMotionValue(e);let o=this.originPoint[e]+r[e];this.constraints&&this.constraints[e]&&(o=_N(o,this.constraints[e],this.elastic[e])),s.set(o)}resolveConstraints(){var e;const{dragConstraints:n,dragElastic:r}=this.getProps(),i=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(e=this.visualElement.projection)===null||e===void 0?void 0:e.layout,s=this.constraints;n&&Ss(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):n&&i?this.constraints=wN(i.layoutBox,n):this.constraints=!1,this.elastic=xN(r),s!==this.constraints&&i&&this.constraints&&!this.hasMutatedConstraints&&Yt(o=>{this.constraints!==!1&&this.getAxisMotionValue(o)&&(this.constraints[o]=SN(i.layoutBox[o],this.constraints[o]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:n}=this.getProps();if(!e||!Ss(e))return!1;const r=e.current,{projection:i}=this.visualElement;if(!i||!i.layout)return!1;const s=AN(r,i.root,this.visualElement.getTransformPagePoint());let o=EN(i.layout.layoutBox,s);if(n){const a=n(IN(o));this.hasMutatedConstraints=!!a,a&&(o=Yx(a))}return o}startAnimation(e){const{drag:n,dragMomentum:r,dragElastic:i,dragTransition:s,dragSnapToOrigin:o,onDragTransitionEnd:a}=this.getProps(),l=this.constraints||{},c=Yt(h=>{if(!hu(h,n,this.currentDirection))return;let f=l&&l[h]||{};o&&(f={min:0,max:0});const p=i?200:1e6,y=i?40:1e7,x={type:"inertia",velocity:r?e[h]:0,bounceStiffness:p,bounceDamping:y,timeConstant:750,restDelta:1,restSpeed:10,...s,...f};return this.startAxisValueAnimation(h,x)});return Promise.all(c).then(a)}startAxisValueAnimation(e,n){const r=this.getAxisMotionValue(e);return Op(this.visualElement,e),r.start(Rg(e,r,0,n,this.visualElement,!1))}stopAnimation(){Yt(e=>this.getAxisMotionValue(e).stop())}pauseAnimation(){Yt(e=>{var n;return(n=this.getAxisMotionValue(e).animation)===null||n===void 0?void 0:n.pause()})}getAnimationState(e){var n;return(n=this.getAxisMotionValue(e).animation)===null||n===void 0?void 0:n.state}getAxisMotionValue(e){const n=`_drag${e.toUpperCase()}`,r=this.visualElement.getProps(),i=r[n];return i||this.visualElement.getValue(e,(r.initial?r.initial[e]:void 0)||0)}snapToCursor(e){Yt(n=>{const{drag:r}=this.getProps();if(!hu(n,r,this.currentDirection))return;const{projection:i}=this.visualElement,s=this.getAxisMotionValue(n);if(i&&i.layout){const{min:o,max:a}=i.layout.layoutBox[n];s.set(e[n]-Re(o,a,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:n}=this.getProps(),{projection:r}=this.visualElement;if(!Ss(n)||!r||!this.constraints)return;this.stopAnimation();const i={x:0,y:0};Yt(o=>{const a=this.getAxisMotionValue(o);if(a&&this.constraints!==!1){const l=a.get();i[o]=TN({min:l,max:l},this.constraints[o])}});const{transformTemplate:s}=this.visualElement.getProps();this.visualElement.current.style.transform=s?s({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.resolveConstraints(),Yt(o=>{if(!hu(o,e,null))return;const a=this.getAxisMotionValue(o),{min:l,max:c}=this.constraints[o];a.set(Re(l,c,i[o]))})}addListeners(){if(!this.visualElement.current)return;RN.set(this.visualElement,this);const e=this.visualElement.current,n=Xn(e,"pointerdown",l=>{const{drag:c,dragListener:h=!0}=this.getProps();c&&h&&this.start(l)}),r=()=>{const{dragConstraints:l}=this.getProps();Ss(l)&&l.current&&(this.constraints=this.resolveRefConstraints())},{projection:i}=this.visualElement,s=i.addEventListener("measure",r);i&&!i.layout&&(i.root&&i.root.updateScroll(),i.updateLayout()),ge.read(r);const o=zn(window,"resize",()=>this.scalePositionWithinConstraints()),a=i.addEventListener("didUpdate",({delta:l,hasLayoutChanged:c})=>{this.isDragging&&c&&(Yt(h=>{const f=this.getAxisMotionValue(h);f&&(this.originPoint[h]+=l[h].translate,f.set(f.get()+l[h].translate))}),this.visualElement.render())});return()=>{o(),n(),s(),a&&a()}}getProps(){const e=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:r=!1,dragPropagation:i=!1,dragConstraints:s=!1,dragElastic:o=Mp,dragMomentum:a=!0}=e;return{...e,drag:n,dragDirectionLock:r,dragPropagation:i,dragConstraints:s,dragElastic:o,dragMomentum:a}}}function hu(t,e,n){return(e===!0||e===t)&&(n===null||n===t)}function bN(t,e=10){let n=null;return Math.abs(t.y)>e?n="y":Math.abs(t.x)>e&&(n="x"),n}class VN extends ri{constructor(e){super(e),this.removeGroupControls=gt,this.removeListeners=gt,this.controls=new kN(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||gt}unmount(){this.removeGroupControls(),this.removeListeners()}}const J_=t=>(e,n)=>{t&&ge.postRender(()=>t(e,n))};class DN extends ri{constructor(){super(...arguments),this.removePointerDownListener=gt}onPointerDown(e){this.session=new zx(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:eI(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:n,onPan:r,onPanEnd:i}=this.node.getProps();return{onSessionStart:J_(e),onStart:J_(n),onMove:r,onEnd:(s,o)=>{delete this.session,i&&ge.postRender(()=>i(s,o))}}}mount(){this.removePointerDownListener=Xn(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const Dg=N.createContext(null);function NN(){const t=N.useContext(Dg);if(t===null)return[!0,null];const{isPresent:e,onExitComplete:n,register:r}=t,i=N.useId();N.useEffect(()=>r(i),[]);const s=N.useCallback(()=>n&&n(i),[i,n]);return!e&&n?[!1,s]:[!0]}const tI=N.createContext({}),nI=N.createContext({}),Mu={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function Z_(t,e){return e.max===e.min?0:t/(e.max-e.min)*100}const Wo={correct:(t,e)=>{if(!e.target)return t;if(typeof t=="string")if(Y.test(t))t=parseFloat(t);else return t;const n=Z_(t,e.target.x),r=Z_(t,e.target.y);return`${n}% ${r}%`}},ON={correct:(t,{treeScale:e,projectionDelta:n})=>{const r=t,i=Qr.parse(t);if(i.length>5)return r;const s=Qr.createTransformer(t),o=typeof i[0]!="number"?1:0,a=n.x.scale*e.x,l=n.y.scale*e.y;i[0+o]/=a,i[1+o]/=l;const c=Re(a,l,.5);return typeof i[2+o]=="number"&&(i[2+o]/=c),typeof i[3+o]=="number"&&(i[3+o]/=c),s(i)}},Cc={};function LN(t){Object.assign(Cc,t)}const{schedule:Ng,cancel:VU}=tx(queueMicrotask,!1);class MN extends N.Component{componentDidMount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:r,layoutId:i}=this.props,{projection:s}=e;LN(jN),s&&(n.group&&n.group.add(s),r&&r.register&&i&&r.register(s),s.root.didUpdate(),s.addEventListener("animationComplete",()=>{this.safeToRemove()}),s.setOptions({...s.options,onExitComplete:()=>this.safeToRemove()})),Mu.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:n,visualElement:r,drag:i,isPresent:s}=this.props,o=r.projection;return o&&(o.isPresent=s,i||e.layoutDependency!==n||n===void 0?o.willUpdate():this.safeToRemove(),e.isPresent!==s&&(s?o.promote():o.relegate()||ge.postRender(()=>{const a=o.getStack();(!a||!a.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),Ng.postRender(()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:r}=this.props,{projection:i}=e;i&&(i.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(i),r&&r.deregister&&r.deregister(i))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function rI(t){const[e,n]=NN(),r=N.useContext(tI);return g.jsx(MN,{...t,layoutGroup:r,switchLayoutGroup:N.useContext(nI),isPresent:e,safeToRemove:n})}const jN={borderRadius:{...Wo,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Wo,borderTopRightRadius:Wo,borderBottomLeftRadius:Wo,borderBottomRightRadius:Wo,boxShadow:ON},iI=["TopLeft","TopRight","BottomLeft","BottomRight"],FN=iI.length,e1=t=>typeof t=="string"?parseFloat(t):t,t1=t=>typeof t=="number"||Y.test(t);function UN(t,e,n,r,i,s){i?(t.opacity=Re(0,n.opacity!==void 0?n.opacity:1,BN(r)),t.opacityExit=Re(e.opacity!==void 0?e.opacity:1,0,$N(r))):s&&(t.opacity=Re(e.opacity!==void 0?e.opacity:1,n.opacity!==void 0?n.opacity:1,r));for(let o=0;o<FN;o++){const a=`border${iI[o]}Radius`;let l=n1(e,a),c=n1(n,a);if(l===void 0&&c===void 0)continue;l||(l=0),c||(c=0),l===0||c===0||t1(l)===t1(c)?(t[a]=Math.max(Re(e1(l),e1(c),r),0),(Pn.test(c)||Pn.test(l))&&(t[a]+="%")):t[a]=c}(e.rotate||n.rotate)&&(t.rotate=Re(e.rotate||0,n.rotate||0,r))}function n1(t,e){return t[e]!==void 0?t[e]:t.borderRadius}const BN=sI(0,.5,lx),$N=sI(.5,.95,gt);function sI(t,e,n){return r=>r<t?0:r>e?1:n(Xs(t,e,r))}function r1(t,e){t.min=e.min,t.max=e.max}function Qt(t,e){r1(t.x,e.x),r1(t.y,e.y)}function i1(t,e){t.translate=e.translate,t.scale=e.scale,t.originPoint=e.originPoint,t.origin=e.origin}function s1(t,e,n,r,i){return t-=e,t=Pc(t,1/n,r),i!==void 0&&(t=Pc(t,1/i,r)),t}function zN(t,e=0,n=1,r=.5,i,s=t,o=t){if(Pn.test(e)&&(e=parseFloat(e),e=Re(o.min,o.max,e/100)-o.min),typeof e!="number")return;let a=Re(s.min,s.max,r);t===s&&(a-=e),t.min=s1(t.min,e,n,a,i),t.max=s1(t.max,e,n,a,i)}function o1(t,e,[n,r,i],s,o){zN(t,e[n],e[r],e[i],e.scale,s,o)}const WN=["x","scaleX","originX"],HN=["y","scaleY","originY"];function a1(t,e,n,r){o1(t.x,e,WN,n?n.x:void 0,r?r.x:void 0),o1(t.y,e,HN,n?n.y:void 0,r?r.y:void 0)}function l1(t){return t.translate===0&&t.scale===1}function oI(t){return l1(t.x)&&l1(t.y)}function u1(t,e){return t.min===e.min&&t.max===e.max}function qN(t,e){return u1(t.x,e.x)&&u1(t.y,e.y)}function c1(t,e){return Math.round(t.min)===Math.round(e.min)&&Math.round(t.max)===Math.round(e.max)}function aI(t,e){return c1(t.x,e.x)&&c1(t.y,e.y)}function h1(t){return Wt(t.x)/Wt(t.y)}function d1(t,e){return t.translate===e.translate&&t.scale===e.scale&&t.originPoint===e.originPoint}class KN{constructor(){this.members=[]}add(e){kg(this.members,e),e.scheduleRender()}remove(e){if(bg(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(e){const n=this.members.findIndex(i=>e===i);if(n===0)return!1;let r;for(let i=n;i>=0;i--){const s=this.members[i];if(s.isPresent!==!1){r=s;break}}return r?(this.promote(r),!0):!1}promote(e,n){const r=this.lead;if(e!==r&&(this.prevLead=r,this.lead=e,e.show(),r)){r.instance&&r.scheduleRender(),e.scheduleRender(),e.resumeFrom=r,n&&(e.resumeFrom.preserveOpacity=!0),r.snapshot&&(e.snapshot=r.snapshot,e.snapshot.latestValues=r.animationValues||r.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0);const{crossfade:i}=e.options;i===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(e=>{const{options:n,resumingFrom:r}=e;n.onExitComplete&&n.onExitComplete(),r&&r.options.onExitComplete&&r.options.onExitComplete()})}scheduleRender(){this.members.forEach(e=>{e.instance&&e.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function GN(t,e,n){let r="";const i=t.x.translate/e.x,s=t.y.translate/e.y,o=(n==null?void 0:n.z)||0;if((i||s||o)&&(r=`translate3d(${i}px, ${s}px, ${o}px) `),(e.x!==1||e.y!==1)&&(r+=`scale(${1/e.x}, ${1/e.y}) `),n){const{transformPerspective:c,rotate:h,rotateX:f,rotateY:p,skewX:y,skewY:x}=n;c&&(r=`perspective(${c}px) ${r}`),h&&(r+=`rotate(${h}deg) `),f&&(r+=`rotateX(${f}deg) `),p&&(r+=`rotateY(${p}deg) `),y&&(r+=`skewX(${y}deg) `),x&&(r+=`skewY(${x}deg) `)}const a=t.x.scale*e.x,l=t.y.scale*e.y;return(a!==1||l!==1)&&(r+=`scale(${a}, ${l})`),r||"none"}const QN=(t,e)=>t.depth-e.depth;class YN{constructor(){this.children=[],this.isDirty=!1}add(e){kg(this.children,e),this.isDirty=!0}remove(e){bg(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(QN),this.isDirty=!1,this.children.forEach(e)}}function ju(t){const e=mt(t)?t.get():t;return BD(e)?e.toValue():e}function XN(t,e){const n=Cn.now(),r=({timestamp:i})=>{const s=i-n;s>=e&&(Kr(r),t(s-e))};return ge.read(r,!0),()=>Kr(r)}function JN(t){return t instanceof SVGElement&&t.tagName!=="svg"}function ZN(t,e,n){const r=mt(t)?t:Ga(t);return r.start(Rg("",r,e,n)),r.animation}const gi={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0},ea=typeof window<"u"&&window.MotionDebug!==void 0,Yd=["","X","Y","Z"],e4={visibility:"hidden"},f1=1e3;let t4=0;function Xd(t,e,n,r){const{latestValues:i}=e;i[t]&&(n[t]=i[t],e.setStaticValue(t,0),r&&(r[t]=0))}function lI(t){if(t.hasCheckedOptimisedAppear=!0,t.root===t)return;const{visualElement:e}=t.options;if(!e)return;const n=jx(e);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:i,layoutId:s}=t.options;window.MotionCancelOptimisedAnimation(n,"transform",ge,!(i||s))}const{parent:r}=t;r&&!r.hasCheckedOptimisedAppear&&lI(r)}function uI({attachResizeListener:t,defaultParent:e,measureScroll:n,checkIsScrollRoot:r,resetTransform:i}){return class{constructor(o={},a=e==null?void 0:e()){this.id=t4++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,ea&&(gi.totalNodes=gi.resolvedTargetDeltas=gi.recalculatedProjection=0),this.nodes.forEach(i4),this.nodes.forEach(u4),this.nodes.forEach(c4),this.nodes.forEach(s4),ea&&window.MotionDebug.record(gi)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=o,this.root=a?a.root||a:this,this.path=a?[...a.path,a]:[],this.parent=a,this.depth=a?a.depth+1:0;for(let l=0;l<this.path.length;l++)this.path[l].shouldResetTransform=!0;this.root===this&&(this.nodes=new YN)}addEventListener(o,a){return this.eventHandlers.has(o)||this.eventHandlers.set(o,new Vg),this.eventHandlers.get(o).add(a)}notifyListeners(o,...a){const l=this.eventHandlers.get(o);l&&l.notify(...a)}hasListeners(o){return this.eventHandlers.has(o)}mount(o,a=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=JN(o),this.instance=o;const{layoutId:l,layout:c,visualElement:h}=this.options;if(h&&!h.current&&h.mount(o),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),a&&(c||l)&&(this.isLayoutDirty=!0),t){let f;const p=()=>this.root.updateBlockedByResize=!1;t(o,()=>{this.root.updateBlockedByResize=!0,f&&f(),f=XN(p,250),Mu.hasAnimatedSinceResize&&(Mu.hasAnimatedSinceResize=!1,this.nodes.forEach(m1))})}l&&this.root.registerSharedNode(l,this),this.options.animate!==!1&&h&&(l||c)&&this.addEventListener("didUpdate",({delta:f,hasLayoutChanged:p,hasRelativeTargetChanged:y,layout:x})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const I=this.options.transition||h.getDefaultTransition()||m4,{onLayoutAnimationStart:R,onLayoutAnimationComplete:w}=h.getProps(),_=!this.targetLayout||!aI(this.targetLayout,x)||y,S=!p&&y;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||S||p&&(_||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(f,S);const b={...mg(I,"layout"),onPlay:R,onComplete:w};(h.shouldReduceMotion||this.options.layoutRoot)&&(b.delay=0,b.type=!1),this.startAnimation(b)}else p||m1(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=x})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const o=this.getStack();o&&o.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,Kr(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(h4),this.animationId++)}getTransformTemplate(){const{visualElement:o}=this.options;return o&&o.getProps().transformTemplate}willUpdate(o=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&lI(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let h=0;h<this.path.length;h++){const f=this.path[h];f.shouldResetTransform=!0,f.updateScroll("snapshot"),f.options.layoutRoot&&f.willUpdate(!1)}const{layoutId:a,layout:l}=this.options;if(a===void 0&&!l)return;const c=this.getTransformTemplate();this.prevTransformTemplateValue=c?c(this.latestValues,""):void 0,this.updateSnapshot(),o&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(p1);return}this.isUpdating||this.nodes.forEach(a4),this.isUpdating=!1,this.nodes.forEach(l4),this.nodes.forEach(n4),this.nodes.forEach(r4),this.clearAllSnapshots();const a=Cn.now();Je.delta=Gr(0,1e3/60,a-Je.timestamp),Je.timestamp=a,Je.isProcessing=!0,$d.update.process(Je),$d.preRender.process(Je),$d.render.process(Je),Je.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Ng.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(o4),this.sharedNodes.forEach(d4)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,ge.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){ge.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const o=this.layout;this.layout=this.measure(!1),this.layoutCorrected=Oe(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:a}=this.options;a&&a.notify("LayoutMeasure",this.layout.layoutBox,o?o.layoutBox:void 0)}updateScroll(o="measure"){let a=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===o&&(a=!1),a){const l=r(this.instance);this.scroll={animationId:this.root.animationId,phase:o,isRoot:l,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:l}}}resetTransform(){if(!i)return;const o=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,a=this.projectionDelta&&!oI(this.projectionDelta),l=this.getTransformTemplate(),c=l?l(this.latestValues,""):void 0,h=c!==this.prevTransformTemplateValue;o&&(a||mi(this.latestValues)||h)&&(i(this.instance,c),this.shouldResetTransform=!1,this.scheduleRender())}measure(o=!0){const a=this.measurePageBox();let l=this.removeElementScroll(a);return o&&(l=this.removeTransform(l)),g4(l),{animationId:this.root.animationId,measuredBox:a,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){var o;const{visualElement:a}=this.options;if(!a)return Oe();const l=a.measureViewportBox();if(!(((o=this.scroll)===null||o===void 0?void 0:o.wasRoot)||this.path.some(y4))){const{scroll:h}=this.root;h&&(Is(l.x,h.offset.x),Is(l.y,h.offset.y))}return l}removeElementScroll(o){var a;const l=Oe();if(Qt(l,o),!((a=this.scroll)===null||a===void 0)&&a.wasRoot)return l;for(let c=0;c<this.path.length;c++){const h=this.path[c],{scroll:f,options:p}=h;h!==this.root&&f&&p.layoutScroll&&(f.wasRoot&&Qt(l,o),Is(l.x,f.offset.x),Is(l.y,f.offset.y))}return l}applyTransform(o,a=!1){const l=Oe();Qt(l,o);for(let c=0;c<this.path.length;c++){const h=this.path[c];!a&&h.options.layoutScroll&&h.scroll&&h!==h.root&&Ps(l,{x:-h.scroll.offset.x,y:-h.scroll.offset.y}),mi(h.latestValues)&&Ps(l,h.latestValues)}return mi(this.latestValues)&&Ps(l,this.latestValues),l}removeTransform(o){const a=Oe();Qt(a,o);for(let l=0;l<this.path.length;l++){const c=this.path[l];if(!c.instance||!mi(c.latestValues))continue;jp(c.latestValues)&&c.updateSnapshot();const h=Oe(),f=c.measurePageBox();Qt(h,f),a1(a,c.latestValues,c.snapshot?c.snapshot.layoutBox:void 0,h)}return mi(this.latestValues)&&a1(a,this.latestValues),a}setTargetDelta(o){this.targetDelta=o,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(o){this.options={...this.options,...o,crossfade:o.crossfade!==void 0?o.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Je.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(o=!1){var a;const l=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=l.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=l.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=l.isSharedProjectionDirty);const c=!!this.resumingFrom||this!==l;if(!(o||c&&this.isSharedProjectionDirty||this.isProjectionDirty||!((a=this.parent)===null||a===void 0)&&a.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:f,layoutId:p}=this.options;if(!(!this.layout||!(f||p))){if(this.resolvedRelativeTargetAt=Je.timestamp,!this.targetDelta&&!this.relativeTarget){const y=this.getClosestProjectingParent();y&&y.layout&&this.animationProgress!==1?(this.relativeParent=y,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Oe(),this.relativeTargetOrigin=Oe(),ya(this.relativeTargetOrigin,this.layout.layoutBox,y.layout.layoutBox),Qt(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=Oe(),this.targetWithTransforms=Oe()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),vN(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):Qt(this.target,this.layout.layoutBox),Jx(this.target,this.targetDelta)):Qt(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const y=this.getClosestProjectingParent();y&&!!y.resumingFrom==!!this.resumingFrom&&!y.options.layoutScroll&&y.target&&this.animationProgress!==1?(this.relativeParent=y,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Oe(),this.relativeTargetOrigin=Oe(),ya(this.relativeTargetOrigin,this.target,y.target),Qt(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}ea&&gi.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||jp(this.parent.latestValues)||Xx(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var o;const a=this.getLead(),l=!!this.resumingFrom||this!==a;let c=!0;if((this.isProjectionDirty||!((o=this.parent)===null||o===void 0)&&o.isProjectionDirty)&&(c=!1),l&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(c=!1),this.resolvedRelativeTargetAt===Je.timestamp&&(c=!1),c)return;const{layout:h,layoutId:f}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(h||f))return;Qt(this.layoutCorrected,this.layout.layoutBox);const p=this.treeScale.x,y=this.treeScale.y;CN(this.layoutCorrected,this.treeScale,this.path,l),a.layout&&!a.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(a.target=a.layout.layoutBox,a.targetWithTransforms=Oe());const{target:x}=a;if(!x){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(i1(this.prevProjectionDelta.x,this.projectionDelta.x),i1(this.prevProjectionDelta.y,this.projectionDelta.y)),ga(this.projectionDelta,this.layoutCorrected,x,this.latestValues),(this.treeScale.x!==p||this.treeScale.y!==y||!d1(this.projectionDelta.x,this.prevProjectionDelta.x)||!d1(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",x)),ea&&gi.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(o=!0){var a;if((a=this.options.visualElement)===null||a===void 0||a.scheduleRender(),o){const l=this.getStack();l&&l.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=xs(),this.projectionDelta=xs(),this.projectionDeltaWithTransform=xs()}setAnimationOrigin(o,a=!1){const l=this.snapshot,c=l?l.latestValues:{},h={...this.latestValues},f=xs();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!a;const p=Oe(),y=l?l.source:void 0,x=this.layout?this.layout.source:void 0,I=y!==x,R=this.getStack(),w=!R||R.members.length<=1,_=!!(I&&!w&&this.options.crossfade===!0&&!this.path.some(p4));this.animationProgress=0;let S;this.mixTargetDelta=b=>{const O=b/1e3;g1(f.x,o.x,O),g1(f.y,o.y,O),this.setTargetDelta(f),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(ya(p,this.layout.layoutBox,this.relativeParent.layout.layoutBox),f4(this.relativeTarget,this.relativeTargetOrigin,p,O),S&&qN(this.relativeTarget,S)&&(this.isProjectionDirty=!1),S||(S=Oe()),Qt(S,this.relativeTarget)),I&&(this.animationValues=h,UN(h,c,this.latestValues,O,_,w)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=O},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(o){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(Kr(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=ge.update(()=>{Mu.hasAnimatedSinceResize=!0,this.currentAnimation=ZN(0,f1,{...o,onUpdate:a=>{this.mixTargetDelta(a),o.onUpdate&&o.onUpdate(a)},onComplete:()=>{o.onComplete&&o.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const o=this.getStack();o&&o.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(f1),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const o=this.getLead();let{targetWithTransforms:a,target:l,layout:c,latestValues:h}=o;if(!(!a||!l||!c)){if(this!==o&&this.layout&&c&&cI(this.options.animationType,this.layout.layoutBox,c.layoutBox)){l=this.target||Oe();const f=Wt(this.layout.layoutBox.x);l.x.min=o.target.x.min,l.x.max=l.x.min+f;const p=Wt(this.layout.layoutBox.y);l.y.min=o.target.y.min,l.y.max=l.y.min+p}Qt(a,l),Ps(a,h),ga(this.projectionDeltaWithTransform,this.layoutCorrected,a,h)}}registerSharedNode(o,a){this.sharedNodes.has(o)||this.sharedNodes.set(o,new KN),this.sharedNodes.get(o).add(a);const c=a.options.initialPromotionConfig;a.promote({transition:c?c.transition:void 0,preserveFollowOpacity:c&&c.shouldPreserveFollowOpacity?c.shouldPreserveFollowOpacity(a):void 0})}isLead(){const o=this.getStack();return o?o.lead===this:!0}getLead(){var o;const{layoutId:a}=this.options;return a?((o=this.getStack())===null||o===void 0?void 0:o.lead)||this:this}getPrevLead(){var o;const{layoutId:a}=this.options;return a?(o=this.getStack())===null||o===void 0?void 0:o.prevLead:void 0}getStack(){const{layoutId:o}=this.options;if(o)return this.root.sharedNodes.get(o)}promote({needsReset:o,transition:a,preserveFollowOpacity:l}={}){const c=this.getStack();c&&c.promote(this,l),o&&(this.projectionDelta=void 0,this.needsReset=!0),a&&this.setOptions({transition:a})}relegate(){const o=this.getStack();return o?o.relegate(this):!1}resetSkewAndRotation(){const{visualElement:o}=this.options;if(!o)return;let a=!1;const{latestValues:l}=o;if((l.z||l.rotate||l.rotateX||l.rotateY||l.rotateZ||l.skewX||l.skewY)&&(a=!0),!a)return;const c={};l.z&&Xd("z",o,c,this.animationValues);for(let h=0;h<Yd.length;h++)Xd(`rotate${Yd[h]}`,o,c,this.animationValues),Xd(`skew${Yd[h]}`,o,c,this.animationValues);o.render();for(const h in c)o.setStaticValue(h,c[h]),this.animationValues&&(this.animationValues[h]=c[h]);o.scheduleRender()}getProjectionStyles(o){var a,l;if(!this.instance||this.isSVG)return;if(!this.isVisible)return e4;const c={visibility:""},h=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,c.opacity="",c.pointerEvents=ju(o==null?void 0:o.pointerEvents)||"",c.transform=h?h(this.latestValues,""):"none",c;const f=this.getLead();if(!this.projectionDelta||!this.layout||!f.target){const I={};return this.options.layoutId&&(I.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,I.pointerEvents=ju(o==null?void 0:o.pointerEvents)||""),this.hasProjected&&!mi(this.latestValues)&&(I.transform=h?h({},""):"none",this.hasProjected=!1),I}const p=f.animationValues||f.latestValues;this.applyTransformsToTarget(),c.transform=GN(this.projectionDeltaWithTransform,this.treeScale,p),h&&(c.transform=h(p,c.transform));const{x:y,y:x}=this.projectionDelta;c.transformOrigin=`${y.origin*100}% ${x.origin*100}% 0`,f.animationValues?c.opacity=f===this?(l=(a=p.opacity)!==null&&a!==void 0?a:this.latestValues.opacity)!==null&&l!==void 0?l:1:this.preserveOpacity?this.latestValues.opacity:p.opacityExit:c.opacity=f===this?p.opacity!==void 0?p.opacity:"":p.opacityExit!==void 0?p.opacityExit:0;for(const I in Cc){if(p[I]===void 0)continue;const{correct:R,applyTo:w}=Cc[I],_=c.transform==="none"?p[I]:R(p[I],f);if(w){const S=w.length;for(let b=0;b<S;b++)c[w[b]]=_}else c[I]=_}return this.options.layoutId&&(c.pointerEvents=f===this?ju(o==null?void 0:o.pointerEvents)||"":"none"),c}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(o=>{var a;return(a=o.currentAnimation)===null||a===void 0?void 0:a.stop()}),this.root.nodes.forEach(p1),this.root.sharedNodes.clear()}}}function n4(t){t.updateLayout()}function r4(t){var e;const n=((e=t.resumeFrom)===null||e===void 0?void 0:e.snapshot)||t.snapshot;if(t.isLead()&&t.layout&&n&&t.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:i}=t.layout,{animationType:s}=t.options,o=n.source!==t.layout.source;s==="size"?Yt(f=>{const p=o?n.measuredBox[f]:n.layoutBox[f],y=Wt(p);p.min=r[f].min,p.max=p.min+y}):cI(s,n.layoutBox,r)&&Yt(f=>{const p=o?n.measuredBox[f]:n.layoutBox[f],y=Wt(r[f]);p.max=p.min+y,t.relativeTarget&&!t.currentAnimation&&(t.isProjectionDirty=!0,t.relativeTarget[f].max=t.relativeTarget[f].min+y)});const a=xs();ga(a,r,n.layoutBox);const l=xs();o?ga(l,t.applyTransform(i,!0),n.measuredBox):ga(l,r,n.layoutBox);const c=!oI(a);let h=!1;if(!t.resumeFrom){const f=t.getClosestProjectingParent();if(f&&!f.resumeFrom){const{snapshot:p,layout:y}=f;if(p&&y){const x=Oe();ya(x,n.layoutBox,p.layoutBox);const I=Oe();ya(I,r,y.layoutBox),aI(x,I)||(h=!0),f.options.layoutRoot&&(t.relativeTarget=I,t.relativeTargetOrigin=x,t.relativeParent=f)}}}t.notifyListeners("didUpdate",{layout:r,snapshot:n,delta:l,layoutDelta:a,hasLayoutChanged:c,hasRelativeTargetChanged:h})}else if(t.isLead()){const{onExitComplete:r}=t.options;r&&r()}t.options.transition=void 0}function i4(t){ea&&gi.totalNodes++,t.parent&&(t.isProjecting()||(t.isProjectionDirty=t.parent.isProjectionDirty),t.isSharedProjectionDirty||(t.isSharedProjectionDirty=!!(t.isProjectionDirty||t.parent.isProjectionDirty||t.parent.isSharedProjectionDirty)),t.isTransformDirty||(t.isTransformDirty=t.parent.isTransformDirty))}function s4(t){t.isProjectionDirty=t.isSharedProjectionDirty=t.isTransformDirty=!1}function o4(t){t.clearSnapshot()}function p1(t){t.clearMeasurements()}function a4(t){t.isLayoutDirty=!1}function l4(t){const{visualElement:e}=t.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),t.resetTransform()}function m1(t){t.finishAnimation(),t.targetDelta=t.relativeTarget=t.target=void 0,t.isProjectionDirty=!0}function u4(t){t.resolveTargetDelta()}function c4(t){t.calcProjection()}function h4(t){t.resetSkewAndRotation()}function d4(t){t.removeLeadSnapshot()}function g1(t,e,n){t.translate=Re(e.translate,0,n),t.scale=Re(e.scale,1,n),t.origin=e.origin,t.originPoint=e.originPoint}function y1(t,e,n,r){t.min=Re(e.min,n.min,r),t.max=Re(e.max,n.max,r)}function f4(t,e,n,r){y1(t.x,e.x,n.x,r),y1(t.y,e.y,n.y,r)}function p4(t){return t.animationValues&&t.animationValues.opacityExit!==void 0}const m4={duration:.45,ease:[.4,0,.1,1]},v1=t=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(t),_1=v1("applewebkit/")&&!v1("chrome/")?Math.round:gt;function w1(t){t.min=_1(t.min),t.max=_1(t.max)}function g4(t){w1(t.x),w1(t.y)}function cI(t,e,n){return t==="position"||t==="preserve-aspect"&&!yN(h1(e),h1(n),.2)}function y4(t){var e;return t!==t.root&&((e=t.scroll)===null||e===void 0?void 0:e.wasRoot)}const v4=uI({attachResizeListener:(t,e)=>zn(t,"resize",e),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Jd={current:void 0},hI=uI({measureScroll:t=>({x:t.scrollLeft,y:t.scrollTop}),defaultParent:()=>{if(!Jd.current){const t=new v4({});t.mount(window),t.setOptions({layoutScroll:!0}),Jd.current=t}return Jd.current},resetTransform:(t,e)=>{t.style.transform=e!==void 0?e:"none"},checkIsScrollRoot:t=>window.getComputedStyle(t).position==="fixed"}),_4={pan:{Feature:DN},drag:{Feature:VN,ProjectionNode:hI,MeasureLayout:rI}};function E1(t,e){const n=e?"pointerenter":"pointerleave",r=e?"onHoverStart":"onHoverEnd",i=(s,o)=>{if(s.pointerType==="touch"||Kx())return;const a=t.getProps();t.animationState&&a.whileHover&&t.animationState.setActive("whileHover",e);const l=a[r];l&&ge.postRender(()=>l(s,o))};return Xn(t.current,n,i,{passive:!t.getProps()[r]})}class w4 extends ri{mount(){this.unmount=Yn(E1(this.node,!0),E1(this.node,!1))}unmount(){}}class E4 extends ri{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Yn(zn(this.node.current,"focus",()=>this.onFocus()),zn(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}const dI=(t,e)=>e?t===e?!0:dI(t,e.parentElement):!1;function Zd(t,e){if(!e)return;const n=new PointerEvent("pointer"+t);e(n,Sh(n))}class T4 extends ri{constructor(){super(...arguments),this.removeStartListeners=gt,this.removeEndListeners=gt,this.removeAccessibleListeners=gt,this.startPointerPress=(e,n)=>{if(this.isPressing)return;this.removeEndListeners();const r=this.node.getProps(),s=Xn(window,"pointerup",(a,l)=>{if(!this.checkPressEnd())return;const{onTap:c,onTapCancel:h,globalTapTarget:f}=this.node.getProps(),p=!f&&!dI(this.node.current,a.target)?h:c;p&&ge.update(()=>p(a,l))},{passive:!(r.onTap||r.onPointerUp)}),o=Xn(window,"pointercancel",(a,l)=>this.cancelPress(a,l),{passive:!(r.onTapCancel||r.onPointerCancel)});this.removeEndListeners=Yn(s,o),this.startPress(e,n)},this.startAccessiblePress=()=>{const e=s=>{if(s.key!=="Enter"||this.isPressing)return;const o=a=>{a.key!=="Enter"||!this.checkPressEnd()||Zd("up",(l,c)=>{const{onTap:h}=this.node.getProps();h&&ge.postRender(()=>h(l,c))})};this.removeEndListeners(),this.removeEndListeners=zn(this.node.current,"keyup",o),Zd("down",(a,l)=>{this.startPress(a,l)})},n=zn(this.node.current,"keydown",e),r=()=>{this.isPressing&&Zd("cancel",(s,o)=>this.cancelPress(s,o))},i=zn(this.node.current,"blur",r);this.removeAccessibleListeners=Yn(n,i)}}startPress(e,n){this.isPressing=!0;const{onTapStart:r,whileTap:i}=this.node.getProps();i&&this.node.animationState&&this.node.animationState.setActive("whileTap",!0),r&&ge.postRender(()=>r(e,n))}checkPressEnd(){return this.removeEndListeners(),this.isPressing=!1,this.node.getProps().whileTap&&this.node.animationState&&this.node.animationState.setActive("whileTap",!1),!Kx()}cancelPress(e,n){if(!this.checkPressEnd())return;const{onTapCancel:r}=this.node.getProps();r&&ge.postRender(()=>r(e,n))}mount(){const e=this.node.getProps(),n=Xn(e.globalTapTarget?window:this.node.current,"pointerdown",this.startPointerPress,{passive:!(e.onTapStart||e.onPointerStart)}),r=zn(this.node.current,"focus",this.startAccessiblePress);this.removeStartListeners=Yn(n,r)}unmount(){this.removeStartListeners(),this.removeEndListeners(),this.removeAccessibleListeners()}}const Up=new WeakMap,ef=new WeakMap,S4=t=>{const e=Up.get(t.target);e&&e(t)},x4=t=>{t.forEach(S4)};function I4({root:t,...e}){const n=t||document;ef.has(n)||ef.set(n,{});const r=ef.get(n),i=JSON.stringify(e);return r[i]||(r[i]=new IntersectionObserver(x4,{root:t,...e})),r[i]}function P4(t,e,n){const r=I4(e);return Up.set(t,n),r.observe(t),()=>{Up.delete(t),r.unobserve(t)}}const C4={some:0,all:1};class A4 extends ri{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:e={}}=this.node.getProps(),{root:n,margin:r,amount:i="some",once:s}=e,o={root:n?n.current:void 0,rootMargin:r,threshold:typeof i=="number"?i:C4[i]},a=l=>{const{isIntersecting:c}=l;if(this.isInView===c||(this.isInView=c,s&&!c&&this.hasEnteredView))return;c&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",c);const{onViewportEnter:h,onViewportLeave:f}=this.node.getProps(),p=c?h:f;p&&p(l)};return P4(this.node.current,o,a)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:e,prevProps:n}=this.node;["amount","margin","root"].some(R4(e,n))&&this.startObserver()}unmount(){}}function R4({viewport:t={}},{viewport:e={}}={}){return n=>t[n]!==e[n]}const k4={inView:{Feature:A4},tap:{Feature:T4},focus:{Feature:E4},hover:{Feature:w4}},b4={layout:{ProjectionNode:hI,MeasureLayout:rI}},fI=N.createContext({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"}),xh=N.createContext({}),Og=typeof window<"u",V4=Og?N.useLayoutEffect:N.useEffect,pI=N.createContext({strict:!1});function D4(t,e,n,r,i){var s,o;const{visualElement:a}=N.useContext(xh),l=N.useContext(pI),c=N.useContext(Dg),h=N.useContext(fI).reducedMotion,f=N.useRef();r=r||l.renderer,!f.current&&r&&(f.current=r(t,{visualState:e,parent:a,props:n,presenceContext:c,blockInitialAnimation:c?c.initial===!1:!1,reducedMotionConfig:h}));const p=f.current,y=N.useContext(nI);p&&!p.projection&&i&&(p.type==="html"||p.type==="svg")&&N4(f.current,n,i,y),N.useInsertionEffect(()=>{p&&p.update(n,c)});const x=n[Mx],I=N.useRef(!!x&&!(!((s=window.MotionHandoffIsComplete)===null||s===void 0)&&s.call(window,x))&&((o=window.MotionHasOptimisedAnimation)===null||o===void 0?void 0:o.call(window,x)));return V4(()=>{p&&(window.MotionIsMounted=!0,p.updateFeatures(),Ng.render(p.render),I.current&&p.animationState&&p.animationState.animateChanges())}),N.useEffect(()=>{p&&(!I.current&&p.animationState&&p.animationState.animateChanges(),I.current&&(queueMicrotask(()=>{var R;(R=window.MotionHandoffMarkAsComplete)===null||R===void 0||R.call(window,x)}),I.current=!1))}),p}function N4(t,e,n,r){const{layoutId:i,layout:s,drag:o,dragConstraints:a,layoutScroll:l,layoutRoot:c}=e;t.projection=new n(t.latestValues,e["data-framer-portal-id"]?void 0:mI(t.parent)),t.projection.setOptions({layoutId:i,layout:s,alwaysMeasureLayout:!!o||a&&Ss(a),visualElement:t,animationType:typeof s=="string"?s:"both",initialPromotionConfig:r,layoutScroll:l,layoutRoot:c})}function mI(t){if(t)return t.options.allowProjection!==!1?t.projection:mI(t.parent)}function O4(t,e,n){return N.useCallback(r=>{r&&t.mount&&t.mount(r),e&&(r?e.mount(r):e.unmount()),n&&(typeof n=="function"?n(r):Ss(n)&&(n.current=r))},[e])}function Ih(t){return Wa(t.animate)||pg.some(e=>Ha(t[e]))}function gI(t){return!!(Ih(t)||t.variants)}function L4(t,e){if(Ih(t)){const{initial:n,animate:r}=t;return{initial:n===!1||Ha(n)?n:void 0,animate:Ha(r)?r:void 0}}return t.inherit!==!1?e:{}}function M4(t){const{initial:e,animate:n}=L4(t,N.useContext(xh));return N.useMemo(()=>({initial:e,animate:n}),[T1(e),T1(n)])}function T1(t){return Array.isArray(t)?t.join(" "):t}const S1={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},Js={};for(const t in S1)Js[t]={isEnabled:e=>S1[t].some(n=>!!e[n])};function j4(t){for(const e in t)Js[e]={...Js[e],...t[e]}}const F4=Symbol.for("motionComponentSymbol");function U4({preloadedFeatures:t,createVisualElement:e,useRender:n,useVisualState:r,Component:i}){t&&j4(t);function s(a,l){let c;const h={...N.useContext(fI),...a,layoutId:B4(a)},{isStatic:f}=h,p=M4(a),y=r(a,f);if(!f&&Og){$4();const x=z4(h);c=x.MeasureLayout,p.visualElement=D4(i,y,h,e,x.ProjectionNode)}return g.jsxs(xh.Provider,{value:p,children:[c&&p.visualElement?g.jsx(c,{visualElement:p.visualElement,...h}):null,n(i,a,O4(y,p.visualElement,l),y,f,p.visualElement)]})}const o=N.forwardRef(s);return o[F4]=i,o}function B4({layoutId:t}){const e=N.useContext(tI).id;return e&&t!==void 0?e+"-"+t:t}function $4(t,e){N.useContext(pI).strict}function z4(t){const{drag:e,layout:n}=Js;if(!e&&!n)return{};const r={...e,...n};return{MeasureLayout:e!=null&&e.isEnabled(t)||n!=null&&n.isEnabled(t)?r.MeasureLayout:void 0,ProjectionNode:r.ProjectionNode}}const W4=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Lg(t){return typeof t!="string"||t.includes("-")?!1:!!(W4.indexOf(t)>-1||/[A-Z]/u.test(t))}function yI(t,{style:e,vars:n},r,i){Object.assign(t.style,e,i&&i.getProjectionStyles(r));for(const s in n)t.style.setProperty(s,n[s])}const vI=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function _I(t,e,n,r){yI(t,e,void 0,r);for(const i in e.attrs)t.setAttribute(vI.has(i)?i:Th(i),e.attrs[i])}function wI(t,{layout:e,layoutId:n}){return ni.has(t)||t.startsWith("origin")||(e||n!==void 0)&&(!!Cc[t]||t==="opacity")}function Mg(t,e,n){var r;const{style:i}=t,s={};for(const o in i)(mt(i[o])||e.style&&mt(e.style[o])||wI(o,t)||((r=n==null?void 0:n.getValue(o))===null||r===void 0?void 0:r.liveStyle)!==void 0)&&(s[o]=i[o]);return n&&i&&typeof i.willChange=="string"&&(n.applyWillChange=!1),s}function EI(t,e,n){const r=Mg(t,e,n);for(const i in t)if(mt(t[i])||mt(e[i])){const s=hl.indexOf(i)!==-1?"attr"+i.charAt(0).toUpperCase()+i.substring(1):i;r[s]=t[i]}return r}function H4(t){const e=N.useRef(null);return e.current===null&&(e.current=t()),e.current}function q4({applyWillChange:t=!1,scrapeMotionValuesFromProps:e,createRenderState:n,onMount:r},i,s,o,a){const l={latestValues:K4(i,s,o,a?!1:t,e),renderState:n()};return r&&(l.mount=c=>r(i,c,l)),l}const TI=t=>(e,n)=>{const r=N.useContext(xh),i=N.useContext(Dg),s=()=>q4(t,e,r,i,n);return n?s():H4(s)};function x1(t,e,n){const r=Array.isArray(e)?e:[e];for(let i=0;i<r.length;i++){const s=dg(t,r[i]);if(s){const{transitionEnd:o,transition:a,...l}=s;n(l,o)}}}function K4(t,e,n,r,i){var s;const o={};let a=r&&((s=t.style)===null||s===void 0?void 0:s.willChange)===void 0;const l=i(t,{});for(const I in l)o[I]=ju(l[I]);let{initial:c,animate:h}=t;const f=Ih(t),p=gI(t);e&&p&&!f&&t.inherit!==!1&&(c===void 0&&(c=e.initial),h===void 0&&(h=e.animate));let y=n?n.initial===!1:!1;y=y||c===!1;const x=y?h:c;return x&&typeof x!="boolean"&&!Wa(x)&&x1(t,x,(I,R)=>{for(const w in I){let _=I[w];if(Array.isArray(_)){const S=y?_.length-1:0;_=_[S]}_!==null&&(o[w]=_)}for(const w in R)o[w]=R[w]}),a&&h&&c!==!1&&!Wa(h)&&x1(t,h,I=>{for(const R in I)if(Fx(R)){o.willChange="transform";return}}),o}const jg=()=>({style:{},transform:{},transformOrigin:{},vars:{}}),SI=()=>({...jg(),attrs:{}}),xI=(t,e)=>e&&typeof t=="number"?e.transform(t):t,G4={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},Q4=hl.length;function Y4(t,e,n){let r="",i=!0;for(let s=0;s<Q4;s++){const o=hl[s],a=t[o];if(a===void 0)continue;let l=!0;if(typeof a=="number"?l=a===(o.startsWith("scale")?1:0):l=parseFloat(a)===0,!l||n){const c=xI(a,Tg[o]);if(!l){i=!1;const h=G4[o]||o;r+=`${h}(${c}) `}n&&(e[o]=c)}}return r=r.trim(),n?r=n(e,i?"":r):i&&(r="none"),r}function Fg(t,e,n){const{style:r,vars:i,transformOrigin:s}=t;let o=!1,a=!1;for(const l in e){const c=e[l];if(ni.has(l)){o=!0;continue}else if(fx(l)){i[l]=c;continue}else{const h=xI(c,Tg[l]);l.startsWith("origin")?(a=!0,s[l]=h):r[l]=h}}if(e.transform||(o||n?r.transform=Y4(e,t.transform,n):r.transform&&(r.transform="none")),a){const{originX:l="50%",originY:c="50%",originZ:h=0}=s;r.transformOrigin=`${l} ${c} ${h}`}}function I1(t,e,n){return typeof t=="string"?t:Y.transform(e+n*t)}function X4(t,e,n){const r=I1(e,t.x,t.width),i=I1(n,t.y,t.height);return`${r} ${i}`}const J4={offset:"stroke-dashoffset",array:"stroke-dasharray"},Z4={offset:"strokeDashoffset",array:"strokeDasharray"};function eO(t,e,n=1,r=0,i=!0){t.pathLength=1;const s=i?J4:Z4;t[s.offset]=Y.transform(-r);const o=Y.transform(e),a=Y.transform(n);t[s.array]=`${o} ${a}`}function Ug(t,{attrX:e,attrY:n,attrScale:r,originX:i,originY:s,pathLength:o,pathSpacing:a=1,pathOffset:l=0,...c},h,f){if(Fg(t,c,f),h){t.style.viewBox&&(t.attrs.viewBox=t.style.viewBox);return}t.attrs=t.style,t.style={};const{attrs:p,style:y,dimensions:x}=t;p.transform&&(x&&(y.transform=p.transform),delete p.transform),x&&(i!==void 0||s!==void 0||y.transform)&&(y.transformOrigin=X4(x,i!==void 0?i:.5,s!==void 0?s:.5)),e!==void 0&&(p.x=e),n!==void 0&&(p.y=n),r!==void 0&&(p.scale=r),o!==void 0&&eO(p,o,a,l,!1)}const Bg=t=>typeof t=="string"&&t.toLowerCase()==="svg",tO={useVisualState:TI({scrapeMotionValuesFromProps:EI,createRenderState:SI,onMount:(t,e,{renderState:n,latestValues:r})=>{ge.read(()=>{try{n.dimensions=typeof e.getBBox=="function"?e.getBBox():e.getBoundingClientRect()}catch{n.dimensions={x:0,y:0,width:0,height:0}}}),ge.render(()=>{Ug(n,r,Bg(e.tagName),t.transformTemplate),_I(e,n)})}})},nO={useVisualState:TI({applyWillChange:!0,scrapeMotionValuesFromProps:Mg,createRenderState:jg})};function II(t,e,n){for(const r in e)!mt(e[r])&&!wI(r,n)&&(t[r]=e[r])}function rO({transformTemplate:t},e){return N.useMemo(()=>{const n=jg();return Fg(n,e,t),Object.assign({},n.vars,n.style)},[e])}function iO(t,e){const n=t.style||{},r={};return II(r,n,t),Object.assign(r,rO(t,e)),r}function sO(t,e){const n={},r=iO(t,e);return t.drag&&t.dragListener!==!1&&(n.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout="none",r.touchAction=t.drag===!0?"none":`pan-${t.drag==="x"?"y":"x"}`),t.tabIndex===void 0&&(t.onTap||t.onTapStart||t.whileTap)&&(n.tabIndex=0),n.style=r,n}const oO=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function Ac(t){return t.startsWith("while")||t.startsWith("drag")&&t!=="draggable"||t.startsWith("layout")||t.startsWith("onTap")||t.startsWith("onPan")||t.startsWith("onLayout")||oO.has(t)}let PI=t=>!Ac(t);function aO(t){t&&(PI=e=>e.startsWith("on")?!Ac(e):t(e))}try{aO(require("@emotion/is-prop-valid").default)}catch{}function lO(t,e,n){const r={};for(const i in t)i==="values"&&typeof t.values=="object"||(PI(i)||n===!0&&Ac(i)||!e&&!Ac(i)||t.draggable&&i.startsWith("onDrag"))&&(r[i]=t[i]);return r}function uO(t,e,n,r){const i=N.useMemo(()=>{const s=SI();return Ug(s,e,Bg(r),t.transformTemplate),{...s.attrs,style:{...s.style}}},[e]);if(t.style){const s={};II(s,t.style,t),i.style={...s,...i.style}}return i}function cO(t=!1){return(n,r,i,{latestValues:s},o)=>{const l=(Lg(n)?uO:sO)(r,s,o,n),c=lO(r,typeof n=="string",t),h=n!==N.Fragment?{...c,...l,ref:i}:{},{children:f}=r,p=N.useMemo(()=>mt(f)?f.get():f,[f]);return N.createElement(n,{...h,children:p})}}function hO(t,e){return function(r,{forwardMotionProps:i}={forwardMotionProps:!1}){const o={...Lg(r)?tO:nO,preloadedFeatures:t,useRender:cO(i),createVisualElement:e,Component:r};return U4(o)}}const Bp={current:null},CI={current:!1};function dO(){if(CI.current=!0,!!Og)if(window.matchMedia){const t=window.matchMedia("(prefers-reduced-motion)"),e=()=>Bp.current=t.matches;t.addListener(e),e()}else Bp.current=!1}function fO(t,e,n){for(const r in e){const i=e[r],s=n[r];if(mt(i))t.addValue(r,i);else if(mt(s))t.addValue(r,Ga(i,{owner:t}));else if(s!==i)if(t.hasValue(r)){const o=t.getValue(r);o.liveStyle===!0?o.jump(i):o.hasAnimated||o.set(i)}else{const o=t.getStaticValue(r);t.addValue(r,Ga(o!==void 0?o:i,{owner:t}))}}for(const r in n)e[r]===void 0&&t.removeValue(r);return e}const P1=new WeakMap,pO=[...gx,ht,Qr],mO=t=>pO.find(mx(t)),C1=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class gO{scrapeMotionValuesFromProps(e,n,r){return{}}constructor({parent:e,props:n,presenceContext:r,reducedMotionConfig:i,blockInitialAnimation:s,visualState:o},a={}){this.applyWillChange=!1,this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=_g,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const p=Cn.now();this.renderScheduledAt<p&&(this.renderScheduledAt=p,ge.render(this.render,!1,!0))};const{latestValues:l,renderState:c}=o;this.latestValues=l,this.baseTarget={...l},this.initialValues=n.initial?{...l}:{},this.renderState=c,this.parent=e,this.props=n,this.presenceContext=r,this.depth=e?e.depth+1:0,this.reducedMotionConfig=i,this.options=a,this.blockInitialAnimation=!!s,this.isControllingVariants=Ih(n),this.isVariantNode=gI(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:h,...f}=this.scrapeMotionValuesFromProps(n,{},this);for(const p in f){const y=f[p];l[p]!==void 0&&mt(y)&&y.set(l[p],!1)}}mount(e){this.current=e,P1.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((n,r)=>this.bindToMotionValue(r,n)),CI.current||dO(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:Bp.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){P1.delete(this.current),this.projection&&this.projection.unmount(),Kr(this.notifyUpdate),Kr(this.render),this.valueSubscriptions.forEach(e=>e()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const e in this.events)this.events[e].clear();for(const e in this.features){const n=this.features[e];n&&(n.unmount(),n.isMounted=!1)}this.current=null}bindToMotionValue(e,n){this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)();const r=ni.has(e),i=n.on("change",a=>{this.latestValues[e]=a,this.props.onUpdate&&ge.preRender(this.notifyUpdate),r&&this.projection&&(this.projection.isTransformDirty=!0)}),s=n.on("renderRequest",this.scheduleRender);let o;window.MotionCheckAppearSync&&(o=window.MotionCheckAppearSync(this,e,n)),this.valueSubscriptions.set(e,()=>{i(),s(),o&&o(),n.owner&&n.stop()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e="animation";for(e in Js){const n=Js[e];if(!n)continue;const{isEnabled:r,Feature:i}=n;if(!this.features[e]&&i&&r(this.props)&&(this.features[e]=new i(this)),this.features[e]){const s=this.features[e];s.isMounted?s.update():(s.mount(),s.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Oe()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,n){this.latestValues[e]=n}update(e,n){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let r=0;r<C1.length;r++){const i=C1[r];this.propEventSubscriptions[i]&&(this.propEventSubscriptions[i](),delete this.propEventSubscriptions[i]);const s="on"+i,o=e[s];o&&(this.propEventSubscriptions[i]=this.on(i,o))}this.prevMotionValues=fO(this,this.scrapeMotionValuesFromProps(e,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(e),()=>n.variantChildren.delete(e)}addValue(e,n){const r=this.values.get(e);n!==r&&(r&&this.removeValue(e),this.bindToMotionValue(e,n),this.values.set(e,n),this.latestValues[e]=n.get())}removeValue(e){this.values.delete(e);const n=this.valueSubscriptions.get(e);n&&(n(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,n){if(this.props.values&&this.props.values[e])return this.props.values[e];let r=this.values.get(e);return r===void 0&&n!==void 0&&(r=Ga(n===null?void 0:n,{owner:this}),this.addValue(e,r)),r}readValue(e,n){var r;let i=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:(r=this.getBaseTargetFromProps(this.props,e))!==null&&r!==void 0?r:this.readValueFromInstance(this.current,e,this.options);return i!=null&&(typeof i=="string"&&(hx(i)||cx(i))?i=parseFloat(i):!mO(i)&&Qr.test(n)&&(i=xx(e,n)),this.setBaseTarget(e,mt(i)?i.get():i)),mt(i)?i.get():i}setBaseTarget(e,n){this.baseTarget[e]=n}getBaseTarget(e){var n;const{initial:r}=this.props;let i;if(typeof r=="string"||typeof r=="object"){const o=dg(this.props,r,(n=this.presenceContext)===null||n===void 0?void 0:n.custom);o&&(i=o[e])}if(r&&i!==void 0)return i;const s=this.getBaseTargetFromProps(this.props,e);return s!==void 0&&!mt(s)?s:this.initialValues[e]!==void 0&&i===void 0?void 0:this.baseTarget[e]}on(e,n){return this.events[e]||(this.events[e]=new Vg),this.events[e].add(n)}notify(e,...n){this.events[e]&&this.events[e].notify(...n)}}class AI extends gO{constructor(){super(...arguments),this.KeyframeResolver=Ix}sortInstanceNodePosition(e,n){return e.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(e,n){return e.style?e.style[n]:void 0}removeValueFromRenderState(e,{vars:n,style:r}){delete n[e],delete r[e]}}function yO(t){return window.getComputedStyle(t)}class vO extends AI{constructor(){super(...arguments),this.type="html",this.applyWillChange=!0,this.renderInstance=yI}readValueFromInstance(e,n){if(ni.has(n)){const r=Sg(n);return r&&r.default||0}else{const r=yO(e),i=(fx(n)?r.getPropertyValue(n):r[n])||0;return typeof i=="string"?i.trim():i}}measureInstanceViewportBox(e,{transformPagePoint:n}){return Zx(e,n)}build(e,n,r){Fg(e,n,r.transformTemplate)}scrapeMotionValuesFromProps(e,n,r){return Mg(e,n,r)}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;mt(e)&&(this.childSubscription=e.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}}class _O extends AI{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=Oe}getBaseTargetFromProps(e,n){return e[n]}readValueFromInstance(e,n){if(ni.has(n)){const r=Sg(n);return r&&r.default||0}return n=vI.has(n)?n:Th(n),e.getAttribute(n)}scrapeMotionValuesFromProps(e,n,r){return EI(e,n,r)}build(e,n,r){Ug(e,n,this.isSVGTag,r.transformTemplate)}renderInstance(e,n,r,i){_I(e,n,r,i)}mount(e){this.isSVGTag=Bg(e.tagName),super.mount(e)}}const wO=(t,e)=>Lg(t)?new _O(e):new vO(e,{allowProjection:t!==N.Fragment}),EO=hO({...lN,...k4,..._4,...b4},wO),Ce=eV(EO),he={primary:"#ed2647",accent:"#f692a3",light:"#7f7f7f",dark:"#222222",white:"#ffffff",black:"#000000"};var A1={};/**
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
 */const RI=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},TO=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},kI={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,h=s>>2,f=(s&3)<<4|a>>4;let p=(a&15)<<2|c>>6,y=c&63;l||(y=64,o||(p=64)),r.push(n[h],n[f],n[p],n[y])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(RI(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):TO(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const f=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||c==null||f==null)throw new SO;const p=s<<2|a>>4;if(r.push(p),c!==64){const y=a<<4&240|c>>2;if(r.push(y),f!==64){const x=c<<6&192|f;r.push(x)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class SO extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const xO=function(t){const e=RI(t);return kI.encodeByteArray(e,!0)},Rc=function(t){return xO(t).replace(/\./g,"")},bI=function(t){try{return kI.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function IO(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const PO=()=>IO().__FIREBASE_DEFAULTS__,CO=()=>{if(typeof process>"u"||typeof A1>"u")return;const t=A1.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},AO=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&bI(t[1]);return e&&JSON.parse(e)},Ph=()=>{try{return PO()||CO()||AO()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},VI=t=>{var e,n;return(n=(e=Ph())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},RO=t=>{const e=VI(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},DI=()=>{var t;return(t=Ph())===null||t===void 0?void 0:t.config},NI=t=>{var e;return(e=Ph())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class kO{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function bO(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Rc(JSON.stringify(n)),Rc(JSON.stringify(o)),""].join(".")}/**
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
 */function vt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function VO(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(vt())}function DO(){var t;const e=(t=Ph())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function NO(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function OO(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function LO(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function MO(){const t=vt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function jO(){return!DO()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function FO(){try{return typeof indexedDB=="object"}catch{return!1}}function UO(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const BO="FirebaseError";class cr extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=BO,Object.setPrototypeOf(this,cr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,pl.prototype.create)}}class pl{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?$O(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new cr(i,a,r)}}function $O(t,e){return t.replace(zO,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const zO=/\{\$([^}]+)}/g;function WO(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function kc(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(R1(s)&&R1(o)){if(!kc(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function R1(t){return t!==null&&typeof t=="object"}/**
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
 */function ml(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function HO(t,e){const n=new qO(t,e);return n.subscribe.bind(n)}class qO{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");KO(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=tf),i.error===void 0&&(i.error=tf),i.complete===void 0&&(i.complete=tf);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function KO(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function tf(){}/**
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
 */function It(t){return t&&t._delegate?t._delegate:t}class zi{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */class GO{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new kO;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(YO(e))try{this.getOrInitializeService({instanceIdentifier:yi})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=yi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=yi){return this.instances.has(e)}getOptions(e=yi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:QO(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=yi){return this.component?this.component.multipleInstances?e:yi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function QO(t){return t===yi?void 0:t}function YO(t){return t.instantiationMode==="EAGER"}/**
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
 */class XO{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new GO(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var se;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(se||(se={}));const JO={debug:se.DEBUG,verbose:se.VERBOSE,info:se.INFO,warn:se.WARN,error:se.ERROR,silent:se.SILENT},ZO=se.INFO,eL={[se.DEBUG]:"log",[se.VERBOSE]:"log",[se.INFO]:"info",[se.WARN]:"warn",[se.ERROR]:"error"},tL=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=eL[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class $g{constructor(e){this.name=e,this._logLevel=ZO,this._logHandler=tL,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in se))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?JO[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,se.DEBUG,...e),this._logHandler(this,se.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,se.VERBOSE,...e),this._logHandler(this,se.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,se.INFO,...e),this._logHandler(this,se.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,se.WARN,...e),this._logHandler(this,se.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,se.ERROR,...e),this._logHandler(this,se.ERROR,...e)}}const nL=(t,e)=>e.some(n=>t instanceof n);let k1,b1;function rL(){return k1||(k1=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function iL(){return b1||(b1=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const OI=new WeakMap,$p=new WeakMap,LI=new WeakMap,nf=new WeakMap,zg=new WeakMap;function sL(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Br(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&OI.set(n,t)}).catch(()=>{}),zg.set(e,t),e}function oL(t){if($p.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});$p.set(t,e)}let zp={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return $p.get(t);if(e==="objectStoreNames")return t.objectStoreNames||LI.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Br(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function aL(t){zp=t(zp)}function lL(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(rf(this),e,...n);return LI.set(r,e.sort?e.sort():[e]),Br(r)}:iL().includes(t)?function(...e){return t.apply(rf(this),e),Br(OI.get(this))}:function(...e){return Br(t.apply(rf(this),e))}}function uL(t){return typeof t=="function"?lL(t):(t instanceof IDBTransaction&&oL(t),nL(t,rL())?new Proxy(t,zp):t)}function Br(t){if(t instanceof IDBRequest)return sL(t);if(nf.has(t))return nf.get(t);const e=uL(t);return e!==t&&(nf.set(t,e),zg.set(e,t)),e}const rf=t=>zg.get(t);function cL(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Br(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Br(o.result),l.oldVersion,l.newVersion,Br(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const hL=["get","getKey","getAll","getAllKeys","count"],dL=["put","add","delete","clear"],sf=new Map;function V1(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(sf.get(e))return sf.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=dL.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||hL.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return sf.set(e,s),s}aL(t=>({...t,get:(e,n,r)=>V1(e,n)||t.get(e,n,r),has:(e,n)=>!!V1(e,n)||t.has(e,n)}));/**
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
 */class fL{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(pL(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function pL(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Wp="@firebase/app",D1="0.10.12";/**
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
 */const ir=new $g("@firebase/app"),mL="@firebase/app-compat",gL="@firebase/analytics-compat",yL="@firebase/analytics",vL="@firebase/app-check-compat",_L="@firebase/app-check",wL="@firebase/auth",EL="@firebase/auth-compat",TL="@firebase/database",SL="@firebase/data-connect",xL="@firebase/database-compat",IL="@firebase/functions",PL="@firebase/functions-compat",CL="@firebase/installations",AL="@firebase/installations-compat",RL="@firebase/messaging",kL="@firebase/messaging-compat",bL="@firebase/performance",VL="@firebase/performance-compat",DL="@firebase/remote-config",NL="@firebase/remote-config-compat",OL="@firebase/storage",LL="@firebase/storage-compat",ML="@firebase/firestore",jL="@firebase/vertexai-preview",FL="@firebase/firestore-compat",UL="firebase",BL="10.14.0";/**
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
 */const Hp="[DEFAULT]",$L={[Wp]:"fire-core",[mL]:"fire-core-compat",[yL]:"fire-analytics",[gL]:"fire-analytics-compat",[_L]:"fire-app-check",[vL]:"fire-app-check-compat",[wL]:"fire-auth",[EL]:"fire-auth-compat",[TL]:"fire-rtdb",[SL]:"fire-data-connect",[xL]:"fire-rtdb-compat",[IL]:"fire-fn",[PL]:"fire-fn-compat",[CL]:"fire-iid",[AL]:"fire-iid-compat",[RL]:"fire-fcm",[kL]:"fire-fcm-compat",[bL]:"fire-perf",[VL]:"fire-perf-compat",[DL]:"fire-rc",[NL]:"fire-rc-compat",[OL]:"fire-gcs",[LL]:"fire-gcs-compat",[ML]:"fire-fst",[FL]:"fire-fst-compat",[jL]:"fire-vertex","fire-js":"fire-js",[UL]:"fire-js-all"};/**
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
 */const bc=new Map,zL=new Map,qp=new Map;function N1(t,e){try{t.container.addComponent(e)}catch(n){ir.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Zs(t){const e=t.name;if(qp.has(e))return ir.debug(`There were multiple attempts to register component ${e}.`),!1;qp.set(e,t);for(const n of bc.values())N1(n,t);for(const n of zL.values())N1(n,t);return!0}function Wg(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function br(t){return t.settings!==void 0}/**
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
 */const WL={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},$r=new pl("app","Firebase",WL);/**
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
 */class HL{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new zi("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw $r.create("app-deleted",{appName:this._name})}}/**
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
 */const yo=BL;function MI(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Hp,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw $r.create("bad-app-name",{appName:String(i)});if(n||(n=DI()),!n)throw $r.create("no-options");const s=bc.get(i);if(s){if(kc(n,s.options)&&kc(r,s.config))return s;throw $r.create("duplicate-app",{appName:i})}const o=new XO(i);for(const l of qp.values())o.addComponent(l);const a=new HL(n,r,o);return bc.set(i,a),a}function jI(t=Hp){const e=bc.get(t);if(!e&&t===Hp&&DI())return MI();if(!e)throw $r.create("no-app",{appName:t});return e}function zr(t,e,n){var r;let i=(r=$L[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ir.warn(a.join(" "));return}Zs(new zi(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const qL="firebase-heartbeat-database",KL=1,Qa="firebase-heartbeat-store";let of=null;function FI(){return of||(of=cL(qL,KL,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Qa)}catch(n){console.warn(n)}}}}).catch(t=>{throw $r.create("idb-open",{originalErrorMessage:t.message})})),of}async function GL(t){try{const n=(await FI()).transaction(Qa),r=await n.objectStore(Qa).get(UI(t));return await n.done,r}catch(e){if(e instanceof cr)ir.warn(e.message);else{const n=$r.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ir.warn(n.message)}}}async function O1(t,e){try{const r=(await FI()).transaction(Qa,"readwrite");await r.objectStore(Qa).put(e,UI(t)),await r.done}catch(n){if(n instanceof cr)ir.warn(n.message);else{const r=$r.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ir.warn(r.message)}}}function UI(t){return`${t.name}!${t.options.appId}`}/**
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
 */const QL=1024,YL=30*24*60*60*1e3;class XL{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new ZL(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=L1();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=YL}),this._storage.overwrite(this._heartbeatsCache))}catch(r){ir.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=L1(),{heartbeatsToSend:r,unsentEntries:i}=JL(this._heartbeatsCache.heartbeats),s=Rc(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return ir.warn(n),""}}}function L1(){return new Date().toISOString().substring(0,10)}function JL(t,e=QL){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),M1(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),M1(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class ZL{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return FO()?UO().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await GL(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return O1(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return O1(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function M1(t){return Rc(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function eM(t){Zs(new zi("platform-logger",e=>new fL(e),"PRIVATE")),Zs(new zi("heartbeat",e=>new XL(e),"PRIVATE")),zr(Wp,D1,t),zr(Wp,D1,"esm2017"),zr("fire-js","")}eM("");var j1=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ki,BI;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(T,v){function P(){}P.prototype=v.prototype,T.D=v.prototype,T.prototype=new P,T.prototype.constructor=T,T.C=function(C,k,V){for(var A=Array(arguments.length-2),_e=2;_e<arguments.length;_e++)A[_e-2]=arguments[_e];return v.prototype[k].apply(C,A)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(T,v,P){P||(P=0);var C=Array(16);if(typeof v=="string")for(var k=0;16>k;++k)C[k]=v.charCodeAt(P++)|v.charCodeAt(P++)<<8|v.charCodeAt(P++)<<16|v.charCodeAt(P++)<<24;else for(k=0;16>k;++k)C[k]=v[P++]|v[P++]<<8|v[P++]<<16|v[P++]<<24;v=T.g[0],P=T.g[1],k=T.g[2];var V=T.g[3],A=v+(V^P&(k^V))+C[0]+3614090360&4294967295;v=P+(A<<7&4294967295|A>>>25),A=V+(k^v&(P^k))+C[1]+3905402710&4294967295,V=v+(A<<12&4294967295|A>>>20),A=k+(P^V&(v^P))+C[2]+606105819&4294967295,k=V+(A<<17&4294967295|A>>>15),A=P+(v^k&(V^v))+C[3]+3250441966&4294967295,P=k+(A<<22&4294967295|A>>>10),A=v+(V^P&(k^V))+C[4]+4118548399&4294967295,v=P+(A<<7&4294967295|A>>>25),A=V+(k^v&(P^k))+C[5]+1200080426&4294967295,V=v+(A<<12&4294967295|A>>>20),A=k+(P^V&(v^P))+C[6]+2821735955&4294967295,k=V+(A<<17&4294967295|A>>>15),A=P+(v^k&(V^v))+C[7]+4249261313&4294967295,P=k+(A<<22&4294967295|A>>>10),A=v+(V^P&(k^V))+C[8]+1770035416&4294967295,v=P+(A<<7&4294967295|A>>>25),A=V+(k^v&(P^k))+C[9]+2336552879&4294967295,V=v+(A<<12&4294967295|A>>>20),A=k+(P^V&(v^P))+C[10]+4294925233&4294967295,k=V+(A<<17&4294967295|A>>>15),A=P+(v^k&(V^v))+C[11]+2304563134&4294967295,P=k+(A<<22&4294967295|A>>>10),A=v+(V^P&(k^V))+C[12]+1804603682&4294967295,v=P+(A<<7&4294967295|A>>>25),A=V+(k^v&(P^k))+C[13]+4254626195&4294967295,V=v+(A<<12&4294967295|A>>>20),A=k+(P^V&(v^P))+C[14]+2792965006&4294967295,k=V+(A<<17&4294967295|A>>>15),A=P+(v^k&(V^v))+C[15]+1236535329&4294967295,P=k+(A<<22&4294967295|A>>>10),A=v+(k^V&(P^k))+C[1]+4129170786&4294967295,v=P+(A<<5&4294967295|A>>>27),A=V+(P^k&(v^P))+C[6]+3225465664&4294967295,V=v+(A<<9&4294967295|A>>>23),A=k+(v^P&(V^v))+C[11]+643717713&4294967295,k=V+(A<<14&4294967295|A>>>18),A=P+(V^v&(k^V))+C[0]+3921069994&4294967295,P=k+(A<<20&4294967295|A>>>12),A=v+(k^V&(P^k))+C[5]+3593408605&4294967295,v=P+(A<<5&4294967295|A>>>27),A=V+(P^k&(v^P))+C[10]+38016083&4294967295,V=v+(A<<9&4294967295|A>>>23),A=k+(v^P&(V^v))+C[15]+3634488961&4294967295,k=V+(A<<14&4294967295|A>>>18),A=P+(V^v&(k^V))+C[4]+3889429448&4294967295,P=k+(A<<20&4294967295|A>>>12),A=v+(k^V&(P^k))+C[9]+568446438&4294967295,v=P+(A<<5&4294967295|A>>>27),A=V+(P^k&(v^P))+C[14]+3275163606&4294967295,V=v+(A<<9&4294967295|A>>>23),A=k+(v^P&(V^v))+C[3]+4107603335&4294967295,k=V+(A<<14&4294967295|A>>>18),A=P+(V^v&(k^V))+C[8]+1163531501&4294967295,P=k+(A<<20&4294967295|A>>>12),A=v+(k^V&(P^k))+C[13]+2850285829&4294967295,v=P+(A<<5&4294967295|A>>>27),A=V+(P^k&(v^P))+C[2]+4243563512&4294967295,V=v+(A<<9&4294967295|A>>>23),A=k+(v^P&(V^v))+C[7]+1735328473&4294967295,k=V+(A<<14&4294967295|A>>>18),A=P+(V^v&(k^V))+C[12]+2368359562&4294967295,P=k+(A<<20&4294967295|A>>>12),A=v+(P^k^V)+C[5]+4294588738&4294967295,v=P+(A<<4&4294967295|A>>>28),A=V+(v^P^k)+C[8]+2272392833&4294967295,V=v+(A<<11&4294967295|A>>>21),A=k+(V^v^P)+C[11]+1839030562&4294967295,k=V+(A<<16&4294967295|A>>>16),A=P+(k^V^v)+C[14]+4259657740&4294967295,P=k+(A<<23&4294967295|A>>>9),A=v+(P^k^V)+C[1]+2763975236&4294967295,v=P+(A<<4&4294967295|A>>>28),A=V+(v^P^k)+C[4]+1272893353&4294967295,V=v+(A<<11&4294967295|A>>>21),A=k+(V^v^P)+C[7]+4139469664&4294967295,k=V+(A<<16&4294967295|A>>>16),A=P+(k^V^v)+C[10]+3200236656&4294967295,P=k+(A<<23&4294967295|A>>>9),A=v+(P^k^V)+C[13]+681279174&4294967295,v=P+(A<<4&4294967295|A>>>28),A=V+(v^P^k)+C[0]+3936430074&4294967295,V=v+(A<<11&4294967295|A>>>21),A=k+(V^v^P)+C[3]+3572445317&4294967295,k=V+(A<<16&4294967295|A>>>16),A=P+(k^V^v)+C[6]+76029189&4294967295,P=k+(A<<23&4294967295|A>>>9),A=v+(P^k^V)+C[9]+3654602809&4294967295,v=P+(A<<4&4294967295|A>>>28),A=V+(v^P^k)+C[12]+3873151461&4294967295,V=v+(A<<11&4294967295|A>>>21),A=k+(V^v^P)+C[15]+530742520&4294967295,k=V+(A<<16&4294967295|A>>>16),A=P+(k^V^v)+C[2]+3299628645&4294967295,P=k+(A<<23&4294967295|A>>>9),A=v+(k^(P|~V))+C[0]+4096336452&4294967295,v=P+(A<<6&4294967295|A>>>26),A=V+(P^(v|~k))+C[7]+1126891415&4294967295,V=v+(A<<10&4294967295|A>>>22),A=k+(v^(V|~P))+C[14]+2878612391&4294967295,k=V+(A<<15&4294967295|A>>>17),A=P+(V^(k|~v))+C[5]+4237533241&4294967295,P=k+(A<<21&4294967295|A>>>11),A=v+(k^(P|~V))+C[12]+1700485571&4294967295,v=P+(A<<6&4294967295|A>>>26),A=V+(P^(v|~k))+C[3]+2399980690&4294967295,V=v+(A<<10&4294967295|A>>>22),A=k+(v^(V|~P))+C[10]+4293915773&4294967295,k=V+(A<<15&4294967295|A>>>17),A=P+(V^(k|~v))+C[1]+2240044497&4294967295,P=k+(A<<21&4294967295|A>>>11),A=v+(k^(P|~V))+C[8]+1873313359&4294967295,v=P+(A<<6&4294967295|A>>>26),A=V+(P^(v|~k))+C[15]+4264355552&4294967295,V=v+(A<<10&4294967295|A>>>22),A=k+(v^(V|~P))+C[6]+2734768916&4294967295,k=V+(A<<15&4294967295|A>>>17),A=P+(V^(k|~v))+C[13]+1309151649&4294967295,P=k+(A<<21&4294967295|A>>>11),A=v+(k^(P|~V))+C[4]+4149444226&4294967295,v=P+(A<<6&4294967295|A>>>26),A=V+(P^(v|~k))+C[11]+3174756917&4294967295,V=v+(A<<10&4294967295|A>>>22),A=k+(v^(V|~P))+C[2]+718787259&4294967295,k=V+(A<<15&4294967295|A>>>17),A=P+(V^(k|~v))+C[9]+3951481745&4294967295,T.g[0]=T.g[0]+v&4294967295,T.g[1]=T.g[1]+(k+(A<<21&4294967295|A>>>11))&4294967295,T.g[2]=T.g[2]+k&4294967295,T.g[3]=T.g[3]+V&4294967295}r.prototype.u=function(T,v){v===void 0&&(v=T.length);for(var P=v-this.blockSize,C=this.B,k=this.h,V=0;V<v;){if(k==0)for(;V<=P;)i(this,T,V),V+=this.blockSize;if(typeof T=="string"){for(;V<v;)if(C[k++]=T.charCodeAt(V++),k==this.blockSize){i(this,C),k=0;break}}else for(;V<v;)if(C[k++]=T[V++],k==this.blockSize){i(this,C),k=0;break}}this.h=k,this.o+=v},r.prototype.v=function(){var T=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);T[0]=128;for(var v=1;v<T.length-8;++v)T[v]=0;var P=8*this.o;for(v=T.length-8;v<T.length;++v)T[v]=P&255,P/=256;for(this.u(T),T=Array(16),v=P=0;4>v;++v)for(var C=0;32>C;C+=8)T[P++]=this.g[v]>>>C&255;return T};function s(T,v){var P=a;return Object.prototype.hasOwnProperty.call(P,T)?P[T]:P[T]=v(T)}function o(T,v){this.h=v;for(var P=[],C=!0,k=T.length-1;0<=k;k--){var V=T[k]|0;C&&V==v||(P[k]=V,C=!1)}this.g=P}var a={};function l(T){return-128<=T&&128>T?s(T,function(v){return new o([v|0],0>v?-1:0)}):new o([T|0],0>T?-1:0)}function c(T){if(isNaN(T)||!isFinite(T))return f;if(0>T)return R(c(-T));for(var v=[],P=1,C=0;T>=P;C++)v[C]=T/P|0,P*=4294967296;return new o(v,0)}function h(T,v){if(T.length==0)throw Error("number format error: empty string");if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(T.charAt(0)=="-")return R(h(T.substring(1),v));if(0<=T.indexOf("-"))throw Error('number format error: interior "-" character');for(var P=c(Math.pow(v,8)),C=f,k=0;k<T.length;k+=8){var V=Math.min(8,T.length-k),A=parseInt(T.substring(k,k+V),v);8>V?(V=c(Math.pow(v,V)),C=C.j(V).add(c(A))):(C=C.j(P),C=C.add(c(A)))}return C}var f=l(0),p=l(1),y=l(16777216);t=o.prototype,t.m=function(){if(I(this))return-R(this).m();for(var T=0,v=1,P=0;P<this.g.length;P++){var C=this.i(P);T+=(0<=C?C:4294967296+C)*v,v*=4294967296}return T},t.toString=function(T){if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(x(this))return"0";if(I(this))return"-"+R(this).toString(T);for(var v=c(Math.pow(T,6)),P=this,C="";;){var k=b(P,v).g;P=w(P,k.j(v));var V=((0<P.g.length?P.g[0]:P.h)>>>0).toString(T);if(P=k,x(P))return V+C;for(;6>V.length;)V="0"+V;C=V+C}},t.i=function(T){return 0>T?0:T<this.g.length?this.g[T]:this.h};function x(T){if(T.h!=0)return!1;for(var v=0;v<T.g.length;v++)if(T.g[v]!=0)return!1;return!0}function I(T){return T.h==-1}t.l=function(T){return T=w(this,T),I(T)?-1:x(T)?0:1};function R(T){for(var v=T.g.length,P=[],C=0;C<v;C++)P[C]=~T.g[C];return new o(P,~T.h).add(p)}t.abs=function(){return I(this)?R(this):this},t.add=function(T){for(var v=Math.max(this.g.length,T.g.length),P=[],C=0,k=0;k<=v;k++){var V=C+(this.i(k)&65535)+(T.i(k)&65535),A=(V>>>16)+(this.i(k)>>>16)+(T.i(k)>>>16);C=A>>>16,V&=65535,A&=65535,P[k]=A<<16|V}return new o(P,P[P.length-1]&-2147483648?-1:0)};function w(T,v){return T.add(R(v))}t.j=function(T){if(x(this)||x(T))return f;if(I(this))return I(T)?R(this).j(R(T)):R(R(this).j(T));if(I(T))return R(this.j(R(T)));if(0>this.l(y)&&0>T.l(y))return c(this.m()*T.m());for(var v=this.g.length+T.g.length,P=[],C=0;C<2*v;C++)P[C]=0;for(C=0;C<this.g.length;C++)for(var k=0;k<T.g.length;k++){var V=this.i(C)>>>16,A=this.i(C)&65535,_e=T.i(k)>>>16,vn=T.i(k)&65535;P[2*C+2*k]+=A*vn,_(P,2*C+2*k),P[2*C+2*k+1]+=V*vn,_(P,2*C+2*k+1),P[2*C+2*k+1]+=A*_e,_(P,2*C+2*k+1),P[2*C+2*k+2]+=V*_e,_(P,2*C+2*k+2)}for(C=0;C<v;C++)P[C]=P[2*C+1]<<16|P[2*C];for(C=v;C<2*v;C++)P[C]=0;return new o(P,0)};function _(T,v){for(;(T[v]&65535)!=T[v];)T[v+1]+=T[v]>>>16,T[v]&=65535,v++}function S(T,v){this.g=T,this.h=v}function b(T,v){if(x(v))throw Error("division by zero");if(x(T))return new S(f,f);if(I(T))return v=b(R(T),v),new S(R(v.g),R(v.h));if(I(v))return v=b(T,R(v)),new S(R(v.g),v.h);if(30<T.g.length){if(I(T)||I(v))throw Error("slowDivide_ only works with positive integers.");for(var P=p,C=v;0>=C.l(T);)P=O(P),C=O(C);var k=M(P,1),V=M(C,1);for(C=M(C,2),P=M(P,2);!x(C);){var A=V.add(C);0>=A.l(T)&&(k=k.add(P),V=A),C=M(C,1),P=M(P,1)}return v=w(T,k.j(v)),new S(k,v)}for(k=f;0<=T.l(v);){for(P=Math.max(1,Math.floor(T.m()/v.m())),C=Math.ceil(Math.log(P)/Math.LN2),C=48>=C?1:Math.pow(2,C-48),V=c(P),A=V.j(v);I(A)||0<A.l(T);)P-=C,V=c(P),A=V.j(v);x(V)&&(V=p),k=k.add(V),T=w(T,A)}return new S(k,T)}t.A=function(T){return b(this,T).h},t.and=function(T){for(var v=Math.max(this.g.length,T.g.length),P=[],C=0;C<v;C++)P[C]=this.i(C)&T.i(C);return new o(P,this.h&T.h)},t.or=function(T){for(var v=Math.max(this.g.length,T.g.length),P=[],C=0;C<v;C++)P[C]=this.i(C)|T.i(C);return new o(P,this.h|T.h)},t.xor=function(T){for(var v=Math.max(this.g.length,T.g.length),P=[],C=0;C<v;C++)P[C]=this.i(C)^T.i(C);return new o(P,this.h^T.h)};function O(T){for(var v=T.g.length+1,P=[],C=0;C<v;C++)P[C]=T.i(C)<<1|T.i(C-1)>>>31;return new o(P,T.h)}function M(T,v){var P=v>>5;v%=32;for(var C=T.g.length-P,k=[],V=0;V<C;V++)k[V]=0<v?T.i(V+P)>>>v|T.i(V+P+1)<<32-v:T.i(V+P);return new o(k,T.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,BI=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=h,ki=o}).apply(typeof j1<"u"?j1:typeof self<"u"?self:typeof window<"u"?window:{});var du=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var $I,ta,zI,Fu,Kp,WI,HI,qI;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(u,d,m){return u==Array.prototype||u==Object.prototype||(u[d]=m.value),u};function n(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof du=="object"&&du];for(var d=0;d<u.length;++d){var m=u[d];if(m&&m.Math==Math)return m}throw Error("Cannot find global object")}var r=n(this);function i(u,d){if(d)e:{var m=r;u=u.split(".");for(var E=0;E<u.length-1;E++){var D=u[E];if(!(D in m))break e;m=m[D]}u=u[u.length-1],E=m[u],d=d(E),d!=E&&d!=null&&e(m,u,{configurable:!0,writable:!0,value:d})}}function s(u,d){u instanceof String&&(u+="");var m=0,E=!1,D={next:function(){if(!E&&m<u.length){var L=m++;return{value:d(L,u[L]),done:!1}}return E=!0,{done:!0,value:void 0}}};return D[Symbol.iterator]=function(){return D},D}i("Array.prototype.values",function(u){return u||function(){return s(this,function(d,m){return m})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function l(u){var d=typeof u;return d=d!="object"?d:u?Array.isArray(u)?"array":d:"null",d=="array"||d=="object"&&typeof u.length=="number"}function c(u){var d=typeof u;return d=="object"&&u!=null||d=="function"}function h(u,d,m){return u.call.apply(u.bind,arguments)}function f(u,d,m){if(!u)throw Error();if(2<arguments.length){var E=Array.prototype.slice.call(arguments,2);return function(){var D=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(D,E),u.apply(d,D)}}return function(){return u.apply(d,arguments)}}function p(u,d,m){return p=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?h:f,p.apply(null,arguments)}function y(u,d){var m=Array.prototype.slice.call(arguments,1);return function(){var E=m.slice();return E.push.apply(E,arguments),u.apply(this,E)}}function x(u,d){function m(){}m.prototype=d.prototype,u.aa=d.prototype,u.prototype=new m,u.prototype.constructor=u,u.Qb=function(E,D,L){for(var z=Array(arguments.length-2),ye=2;ye<arguments.length;ye++)z[ye-2]=arguments[ye];return d.prototype[D].apply(E,z)}}function I(u){const d=u.length;if(0<d){const m=Array(d);for(let E=0;E<d;E++)m[E]=u[E];return m}return[]}function R(u,d){for(let m=1;m<arguments.length;m++){const E=arguments[m];if(l(E)){const D=u.length||0,L=E.length||0;u.length=D+L;for(let z=0;z<L;z++)u[D+z]=E[z]}else u.push(E)}}class w{constructor(d,m){this.i=d,this.j=m,this.h=0,this.g=null}get(){let d;return 0<this.h?(this.h--,d=this.g,this.g=d.next,d.next=null):d=this.i(),d}}function _(u){return/^[\s\xa0]*$/.test(u)}function S(){var u=a.navigator;return u&&(u=u.userAgent)?u:""}function b(u){return b[" "](u),u}b[" "]=function(){};var O=S().indexOf("Gecko")!=-1&&!(S().toLowerCase().indexOf("webkit")!=-1&&S().indexOf("Edge")==-1)&&!(S().indexOf("Trident")!=-1||S().indexOf("MSIE")!=-1)&&S().indexOf("Edge")==-1;function M(u,d,m){for(const E in u)d.call(m,u[E],E,u)}function T(u,d){for(const m in u)d.call(void 0,u[m],m,u)}function v(u){const d={};for(const m in u)d[m]=u[m];return d}const P="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function C(u,d){let m,E;for(let D=1;D<arguments.length;D++){E=arguments[D];for(m in E)u[m]=E[m];for(let L=0;L<P.length;L++)m=P[L],Object.prototype.hasOwnProperty.call(E,m)&&(u[m]=E[m])}}function k(u){var d=1;u=u.split(":");const m=[];for(;0<d&&u.length;)m.push(u.shift()),d--;return u.length&&m.push(u.join(":")),m}function V(u){a.setTimeout(()=>{throw u},0)}function A(){var u=K;let d=null;return u.g&&(d=u.g,u.g=u.g.next,u.g||(u.h=null),d.next=null),d}class _e{constructor(){this.h=this.g=null}add(d,m){const E=vn.get();E.set(d,m),this.h?this.h.next=E:this.g=E,this.h=E}}var vn=new w(()=>new hr,u=>u.reset());class hr{constructor(){this.next=this.g=this.h=null}set(d,m){this.h=d,this.g=m,this.next=null}reset(){this.next=this.g=this.h=null}}let de,$=!1,K=new _e,Q=()=>{const u=a.Promise.resolve(void 0);de=()=>{u.then(fe)}};var fe=()=>{for(var u;u=A();){try{u.h.call(u.g)}catch(m){V(m)}var d=vn;d.j(u),100>d.h&&(d.h++,u.next=d.g,d.g=u)}$=!1};function re(){this.s=this.s,this.C=this.C}re.prototype.s=!1,re.prototype.ma=function(){this.s||(this.s=!0,this.N())},re.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ie(u,d){this.type=u,this.g=this.target=d,this.defaultPrevented=!1}Ie.prototype.h=function(){this.defaultPrevented=!0};var Lt=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var u=!1,d=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const m=()=>{};a.addEventListener("test",m,d),a.removeEventListener("test",m,d)}catch{}return u}();function At(u,d){if(Ie.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u){var m=this.type=u.type,E=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;if(this.target=u.target||u.srcElement,this.g=d,d=u.relatedTarget){if(O){e:{try{b(d.nodeName);var D=!0;break e}catch{}D=!1}D||(d=null)}}else m=="mouseover"?d=u.fromElement:m=="mouseout"&&(d=u.toElement);this.relatedTarget=d,E?(this.clientX=E.clientX!==void 0?E.clientX:E.pageX,this.clientY=E.clientY!==void 0?E.clientY:E.pageY,this.screenX=E.screenX||0,this.screenY=E.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=typeof u.pointerType=="string"?u.pointerType:_t[u.pointerType]||"",this.state=u.state,this.i=u,u.defaultPrevented&&At.aa.h.call(this)}}x(At,Ie);var _t={2:"touch",3:"pen",4:"mouse"};At.prototype.h=function(){At.aa.h.call(this);var u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var Rt="closure_listenable_"+(1e6*Math.random()|0),ii=0;function Nn(u,d,m,E,D){this.listener=u,this.proxy=null,this.src=d,this.type=m,this.capture=!!E,this.ha=D,this.key=++ii,this.da=this.fa=!1}function dr(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function On(u){this.src=u,this.g={},this.h=0}On.prototype.add=function(u,d,m,E,D){var L=u.toString();u=this.g[L],u||(u=this.g[L]=[],this.h++);var z=zh(u,d,E,D);return-1<z?(d=u[z],m||(d.fa=!1)):(d=new Nn(d,this.src,L,!!E,D),d.fa=m,u.push(d)),d};function Gt(u,d){var m=d.type;if(m in u.g){var E=u.g[m],D=Array.prototype.indexOf.call(E,d,void 0),L;(L=0<=D)&&Array.prototype.splice.call(E,D,1),L&&(dr(d),u.g[m].length==0&&(delete u.g[m],u.h--))}}function zh(u,d,m,E){for(var D=0;D<u.length;++D){var L=u[D];if(!L.da&&L.listener==d&&L.capture==!!m&&L.ha==E)return D}return-1}var Wh="closure_lm_"+(1e6*Math.random()|0),Hh={};function jy(u,d,m,E,D){if(Array.isArray(d)){for(var L=0;L<d.length;L++)jy(u,d[L],m,E,D);return null}return m=By(m),u&&u[Rt]?u.K(d,m,c(E)?!!E.capture:!!E,D):sA(u,d,m,!1,E,D)}function sA(u,d,m,E,D,L){if(!d)throw Error("Invalid event type");var z=c(D)?!!D.capture:!!D,ye=Kh(u);if(ye||(u[Wh]=ye=new On(u)),m=ye.add(d,m,E,z,L),m.proxy)return m;if(E=oA(),m.proxy=E,E.src=u,E.listener=m,u.addEventListener)Lt||(D=z),D===void 0&&(D=!1),u.addEventListener(d.toString(),E,D);else if(u.attachEvent)u.attachEvent(Uy(d.toString()),E);else if(u.addListener&&u.removeListener)u.addListener(E);else throw Error("addEventListener and attachEvent are unavailable.");return m}function oA(){function u(m){return d.call(u.src,u.listener,m)}const d=aA;return u}function Fy(u,d,m,E,D){if(Array.isArray(d))for(var L=0;L<d.length;L++)Fy(u,d[L],m,E,D);else E=c(E)?!!E.capture:!!E,m=By(m),u&&u[Rt]?(u=u.i,d=String(d).toString(),d in u.g&&(L=u.g[d],m=zh(L,m,E,D),-1<m&&(dr(L[m]),Array.prototype.splice.call(L,m,1),L.length==0&&(delete u.g[d],u.h--)))):u&&(u=Kh(u))&&(d=u.g[d.toString()],u=-1,d&&(u=zh(d,m,E,D)),(m=-1<u?d[u]:null)&&qh(m))}function qh(u){if(typeof u!="number"&&u&&!u.da){var d=u.src;if(d&&d[Rt])Gt(d.i,u);else{var m=u.type,E=u.proxy;d.removeEventListener?d.removeEventListener(m,E,u.capture):d.detachEvent?d.detachEvent(Uy(m),E):d.addListener&&d.removeListener&&d.removeListener(E),(m=Kh(d))?(Gt(m,u),m.h==0&&(m.src=null,d[Wh]=null)):dr(u)}}}function Uy(u){return u in Hh?Hh[u]:Hh[u]="on"+u}function aA(u,d){if(u.da)u=!0;else{d=new At(d,this);var m=u.listener,E=u.ha||u.src;u.fa&&qh(u),u=m.call(E,d)}return u}function Kh(u){return u=u[Wh],u instanceof On?u:null}var Gh="__closure_events_fn_"+(1e9*Math.random()>>>0);function By(u){return typeof u=="function"?u:(u[Gh]||(u[Gh]=function(d){return u.handleEvent(d)}),u[Gh])}function st(){re.call(this),this.i=new On(this),this.M=this,this.F=null}x(st,re),st.prototype[Rt]=!0,st.prototype.removeEventListener=function(u,d,m,E){Fy(this,u,d,m,E)};function wt(u,d){var m,E=u.F;if(E)for(m=[];E;E=E.F)m.push(E);if(u=u.M,E=d.type||d,typeof d=="string")d=new Ie(d,u);else if(d instanceof Ie)d.target=d.target||u;else{var D=d;d=new Ie(E,u),C(d,D)}if(D=!0,m)for(var L=m.length-1;0<=L;L--){var z=d.g=m[L];D=Al(z,E,!0,d)&&D}if(z=d.g=u,D=Al(z,E,!0,d)&&D,D=Al(z,E,!1,d)&&D,m)for(L=0;L<m.length;L++)z=d.g=m[L],D=Al(z,E,!1,d)&&D}st.prototype.N=function(){if(st.aa.N.call(this),this.i){var u=this.i,d;for(d in u.g){for(var m=u.g[d],E=0;E<m.length;E++)dr(m[E]);delete u.g[d],u.h--}}this.F=null},st.prototype.K=function(u,d,m,E){return this.i.add(String(u),d,!1,m,E)},st.prototype.L=function(u,d,m,E){return this.i.add(String(u),d,!0,m,E)};function Al(u,d,m,E){if(d=u.i.g[String(d)],!d)return!0;d=d.concat();for(var D=!0,L=0;L<d.length;++L){var z=d[L];if(z&&!z.da&&z.capture==m){var ye=z.listener,Ye=z.ha||z.src;z.fa&&Gt(u.i,z),D=ye.call(Ye,E)!==!1&&D}}return D&&!E.defaultPrevented}function $y(u,d,m){if(typeof u=="function")m&&(u=p(u,m));else if(u&&typeof u.handleEvent=="function")u=p(u.handleEvent,u);else throw Error("Invalid listener argument");return 2147483647<Number(d)?-1:a.setTimeout(u,d||0)}function zy(u){u.g=$y(()=>{u.g=null,u.i&&(u.i=!1,zy(u))},u.l);const d=u.h;u.h=null,u.m.apply(null,d)}class lA extends re{constructor(d,m){super(),this.m=d,this.l=m,this.h=null,this.i=!1,this.g=null}j(d){this.h=arguments,this.g?this.i=!0:zy(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function So(u){re.call(this),this.h=u,this.g={}}x(So,re);var Wy=[];function Hy(u){M(u.g,function(d,m){this.g.hasOwnProperty(m)&&qh(d)},u),u.g={}}So.prototype.N=function(){So.aa.N.call(this),Hy(this)},So.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Qh=a.JSON.stringify,uA=a.JSON.parse,cA=class{stringify(u){return a.JSON.stringify(u,void 0)}parse(u){return a.JSON.parse(u,void 0)}};function Yh(){}Yh.prototype.h=null;function qy(u){return u.h||(u.h=u.i())}function Ky(){}var xo={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Xh(){Ie.call(this,"d")}x(Xh,Ie);function Jh(){Ie.call(this,"c")}x(Jh,Ie);var si={},Gy=null;function Rl(){return Gy=Gy||new st}si.La="serverreachability";function Qy(u){Ie.call(this,si.La,u)}x(Qy,Ie);function Io(u){const d=Rl();wt(d,new Qy(d))}si.STAT_EVENT="statevent";function Yy(u,d){Ie.call(this,si.STAT_EVENT,u),this.stat=d}x(Yy,Ie);function Et(u){const d=Rl();wt(d,new Yy(d,u))}si.Ma="timingevent";function Xy(u,d){Ie.call(this,si.Ma,u),this.size=d}x(Xy,Ie);function Po(u,d){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){u()},d)}function Co(){this.g=!0}Co.prototype.xa=function(){this.g=!1};function hA(u,d,m,E,D,L){u.info(function(){if(u.g)if(L)for(var z="",ye=L.split("&"),Ye=0;Ye<ye.length;Ye++){var le=ye[Ye].split("=");if(1<le.length){var ot=le[0];le=le[1];var at=ot.split("_");z=2<=at.length&&at[1]=="type"?z+(ot+"="+le+"&"):z+(ot+"=redacted&")}}else z=null;else z=L;return"XMLHTTP REQ ("+E+") [attempt "+D+"]: "+d+`
`+m+`
`+z})}function dA(u,d,m,E,D,L,z){u.info(function(){return"XMLHTTP RESP ("+E+") [ attempt "+D+"]: "+d+`
`+m+`
`+L+" "+z})}function es(u,d,m,E){u.info(function(){return"XMLHTTP TEXT ("+d+"): "+pA(u,m)+(E?" "+E:"")})}function fA(u,d){u.info(function(){return"TIMEOUT: "+d})}Co.prototype.info=function(){};function pA(u,d){if(!u.g)return d;if(!d)return null;try{var m=JSON.parse(d);if(m){for(u=0;u<m.length;u++)if(Array.isArray(m[u])){var E=m[u];if(!(2>E.length)){var D=E[1];if(Array.isArray(D)&&!(1>D.length)){var L=D[0];if(L!="noop"&&L!="stop"&&L!="close")for(var z=1;z<D.length;z++)D[z]=""}}}}return Qh(m)}catch{return d}}var kl={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Jy={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Zh;function bl(){}x(bl,Yh),bl.prototype.g=function(){return new XMLHttpRequest},bl.prototype.i=function(){return{}},Zh=new bl;function fr(u,d,m,E){this.j=u,this.i=d,this.l=m,this.R=E||1,this.U=new So(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Zy}function Zy(){this.i=null,this.g="",this.h=!1}var e0={},ed={};function td(u,d,m){u.L=1,u.v=Ol(Ln(d)),u.m=m,u.P=!0,t0(u,null)}function t0(u,d){u.F=Date.now(),Vl(u),u.A=Ln(u.v);var m=u.A,E=u.R;Array.isArray(E)||(E=[String(E)]),m0(m.i,"t",E),u.C=0,m=u.j.J,u.h=new Zy,u.g=D0(u.j,m?d:null,!u.m),0<u.O&&(u.M=new lA(p(u.Y,u,u.g),u.O)),d=u.U,m=u.g,E=u.ca;var D="readystatechange";Array.isArray(D)||(D&&(Wy[0]=D.toString()),D=Wy);for(var L=0;L<D.length;L++){var z=jy(m,D[L],E||d.handleEvent,!1,d.h||d);if(!z)break;d.g[z.key]=z}d=u.H?v(u.H):{},u.m?(u.u||(u.u="POST"),d["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.A,u.u,u.m,d)):(u.u="GET",u.g.ea(u.A,u.u,null,d)),Io(),hA(u.i,u.u,u.A,u.l,u.R,u.m)}fr.prototype.ca=function(u){u=u.target;const d=this.M;d&&Mn(u)==3?d.j():this.Y(u)},fr.prototype.Y=function(u){try{if(u==this.g)e:{const at=Mn(this.g);var d=this.g.Ba();const rs=this.g.Z();if(!(3>at)&&(at!=3||this.g&&(this.h.h||this.g.oa()||T0(this.g)))){this.J||at!=4||d==7||(d==8||0>=rs?Io(3):Io(2)),nd(this);var m=this.g.Z();this.X=m;t:if(n0(this)){var E=T0(this.g);u="";var D=E.length,L=Mn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){oi(this),Ao(this);var z="";break t}this.h.i=new a.TextDecoder}for(d=0;d<D;d++)this.h.h=!0,u+=this.h.i.decode(E[d],{stream:!(L&&d==D-1)});E.length=0,this.h.g+=u,this.C=0,z=this.h.g}else z=this.g.oa();if(this.o=m==200,dA(this.i,this.u,this.A,this.l,this.R,at,m),this.o){if(this.T&&!this.K){t:{if(this.g){var ye,Ye=this.g;if((ye=Ye.g?Ye.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!_(ye)){var le=ye;break t}}le=null}if(m=le)es(this.i,this.l,m,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,rd(this,m);else{this.o=!1,this.s=3,Et(12),oi(this),Ao(this);break e}}if(this.P){m=!0;let on;for(;!this.J&&this.C<z.length;)if(on=mA(this,z),on==ed){at==4&&(this.s=4,Et(14),m=!1),es(this.i,this.l,null,"[Incomplete Response]");break}else if(on==e0){this.s=4,Et(15),es(this.i,this.l,z,"[Invalid Chunk]"),m=!1;break}else es(this.i,this.l,on,null),rd(this,on);if(n0(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),at!=4||z.length!=0||this.h.h||(this.s=1,Et(16),m=!1),this.o=this.o&&m,!m)es(this.i,this.l,z,"[Invalid Chunked Response]"),oi(this),Ao(this);else if(0<z.length&&!this.W){this.W=!0;var ot=this.j;ot.g==this&&ot.ba&&!ot.M&&(ot.j.info("Great, no buffering proxy detected. Bytes received: "+z.length),ud(ot),ot.M=!0,Et(11))}}else es(this.i,this.l,z,null),rd(this,z);at==4&&oi(this),this.o&&!this.J&&(at==4?R0(this.j,this):(this.o=!1,Vl(this)))}else VA(this.g),m==400&&0<z.indexOf("Unknown SID")?(this.s=3,Et(12)):(this.s=0,Et(13)),oi(this),Ao(this)}}}catch{}finally{}};function n0(u){return u.g?u.u=="GET"&&u.L!=2&&u.j.Ca:!1}function mA(u,d){var m=u.C,E=d.indexOf(`
`,m);return E==-1?ed:(m=Number(d.substring(m,E)),isNaN(m)?e0:(E+=1,E+m>d.length?ed:(d=d.slice(E,E+m),u.C=E+m,d)))}fr.prototype.cancel=function(){this.J=!0,oi(this)};function Vl(u){u.S=Date.now()+u.I,r0(u,u.I)}function r0(u,d){if(u.B!=null)throw Error("WatchDog timer not null");u.B=Po(p(u.ba,u),d)}function nd(u){u.B&&(a.clearTimeout(u.B),u.B=null)}fr.prototype.ba=function(){this.B=null;const u=Date.now();0<=u-this.S?(fA(this.i,this.A),this.L!=2&&(Io(),Et(17)),oi(this),this.s=2,Ao(this)):r0(this,this.S-u)};function Ao(u){u.j.G==0||u.J||R0(u.j,u)}function oi(u){nd(u);var d=u.M;d&&typeof d.ma=="function"&&d.ma(),u.M=null,Hy(u.U),u.g&&(d=u.g,u.g=null,d.abort(),d.ma())}function rd(u,d){try{var m=u.j;if(m.G!=0&&(m.g==u||id(m.h,u))){if(!u.K&&id(m.h,u)&&m.G==3){try{var E=m.Da.g.parse(d)}catch{E=null}if(Array.isArray(E)&&E.length==3){var D=E;if(D[0]==0){e:if(!m.u){if(m.g)if(m.g.F+3e3<u.F)Bl(m),Fl(m);else break e;ld(m),Et(18)}}else m.za=D[1],0<m.za-m.T&&37500>D[2]&&m.F&&m.v==0&&!m.C&&(m.C=Po(p(m.Za,m),6e3));if(1>=o0(m.h)&&m.ca){try{m.ca()}catch{}m.ca=void 0}}else li(m,11)}else if((u.K||m.g==u)&&Bl(m),!_(d))for(D=m.Da.g.parse(d),d=0;d<D.length;d++){let le=D[d];if(m.T=le[0],le=le[1],m.G==2)if(le[0]=="c"){m.K=le[1],m.ia=le[2];const ot=le[3];ot!=null&&(m.la=ot,m.j.info("VER="+m.la));const at=le[4];at!=null&&(m.Aa=at,m.j.info("SVER="+m.Aa));const rs=le[5];rs!=null&&typeof rs=="number"&&0<rs&&(E=1.5*rs,m.L=E,m.j.info("backChannelRequestTimeoutMs_="+E)),E=m;const on=u.g;if(on){const zl=on.g?on.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(zl){var L=E.h;L.g||zl.indexOf("spdy")==-1&&zl.indexOf("quic")==-1&&zl.indexOf("h2")==-1||(L.j=L.l,L.g=new Set,L.h&&(sd(L,L.h),L.h=null))}if(E.D){const cd=on.g?on.g.getResponseHeader("X-HTTP-Session-Id"):null;cd&&(E.ya=cd,we(E.I,E.D,cd))}}m.G=3,m.l&&m.l.ua(),m.ba&&(m.R=Date.now()-u.F,m.j.info("Handshake RTT: "+m.R+"ms")),E=m;var z=u;if(E.qa=V0(E,E.J?E.ia:null,E.W),z.K){a0(E.h,z);var ye=z,Ye=E.L;Ye&&(ye.I=Ye),ye.B&&(nd(ye),Vl(ye)),E.g=z}else C0(E);0<m.i.length&&Ul(m)}else le[0]!="stop"&&le[0]!="close"||li(m,7);else m.G==3&&(le[0]=="stop"||le[0]=="close"?le[0]=="stop"?li(m,7):ad(m):le[0]!="noop"&&m.l&&m.l.ta(le),m.v=0)}}Io(4)}catch{}}var gA=class{constructor(u,d){this.g=u,this.map=d}};function i0(u){this.l=u||10,a.PerformanceNavigationTiming?(u=a.performance.getEntriesByType("navigation"),u=0<u.length&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function s0(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function o0(u){return u.h?1:u.g?u.g.size:0}function id(u,d){return u.h?u.h==d:u.g?u.g.has(d):!1}function sd(u,d){u.g?u.g.add(d):u.h=d}function a0(u,d){u.h&&u.h==d?u.h=null:u.g&&u.g.has(d)&&u.g.delete(d)}i0.prototype.cancel=function(){if(this.i=l0(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function l0(u){if(u.h!=null)return u.i.concat(u.h.D);if(u.g!=null&&u.g.size!==0){let d=u.i;for(const m of u.g.values())d=d.concat(m.D);return d}return I(u.i)}function yA(u){if(u.V&&typeof u.V=="function")return u.V();if(typeof Map<"u"&&u instanceof Map||typeof Set<"u"&&u instanceof Set)return Array.from(u.values());if(typeof u=="string")return u.split("");if(l(u)){for(var d=[],m=u.length,E=0;E<m;E++)d.push(u[E]);return d}d=[],m=0;for(E in u)d[m++]=u[E];return d}function vA(u){if(u.na&&typeof u.na=="function")return u.na();if(!u.V||typeof u.V!="function"){if(typeof Map<"u"&&u instanceof Map)return Array.from(u.keys());if(!(typeof Set<"u"&&u instanceof Set)){if(l(u)||typeof u=="string"){var d=[];u=u.length;for(var m=0;m<u;m++)d.push(m);return d}d=[],m=0;for(const E in u)d[m++]=E;return d}}}function u0(u,d){if(u.forEach&&typeof u.forEach=="function")u.forEach(d,void 0);else if(l(u)||typeof u=="string")Array.prototype.forEach.call(u,d,void 0);else for(var m=vA(u),E=yA(u),D=E.length,L=0;L<D;L++)d.call(void 0,E[L],m&&m[L],u)}var c0=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function _A(u,d){if(u){u=u.split("&");for(var m=0;m<u.length;m++){var E=u[m].indexOf("="),D=null;if(0<=E){var L=u[m].substring(0,E);D=u[m].substring(E+1)}else L=u[m];d(L,D?decodeURIComponent(D.replace(/\+/g," ")):"")}}}function ai(u){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,u instanceof ai){this.h=u.h,Dl(this,u.j),this.o=u.o,this.g=u.g,Nl(this,u.s),this.l=u.l;var d=u.i,m=new bo;m.i=d.i,d.g&&(m.g=new Map(d.g),m.h=d.h),h0(this,m),this.m=u.m}else u&&(d=String(u).match(c0))?(this.h=!1,Dl(this,d[1]||"",!0),this.o=Ro(d[2]||""),this.g=Ro(d[3]||"",!0),Nl(this,d[4]),this.l=Ro(d[5]||"",!0),h0(this,d[6]||"",!0),this.m=Ro(d[7]||"")):(this.h=!1,this.i=new bo(null,this.h))}ai.prototype.toString=function(){var u=[],d=this.j;d&&u.push(ko(d,d0,!0),":");var m=this.g;return(m||d=="file")&&(u.push("//"),(d=this.o)&&u.push(ko(d,d0,!0),"@"),u.push(encodeURIComponent(String(m)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),m=this.s,m!=null&&u.push(":",String(m))),(m=this.l)&&(this.g&&m.charAt(0)!="/"&&u.push("/"),u.push(ko(m,m.charAt(0)=="/"?TA:EA,!0))),(m=this.i.toString())&&u.push("?",m),(m=this.m)&&u.push("#",ko(m,xA)),u.join("")};function Ln(u){return new ai(u)}function Dl(u,d,m){u.j=m?Ro(d,!0):d,u.j&&(u.j=u.j.replace(/:$/,""))}function Nl(u,d){if(d){if(d=Number(d),isNaN(d)||0>d)throw Error("Bad port number "+d);u.s=d}else u.s=null}function h0(u,d,m){d instanceof bo?(u.i=d,IA(u.i,u.h)):(m||(d=ko(d,SA)),u.i=new bo(d,u.h))}function we(u,d,m){u.i.set(d,m)}function Ol(u){return we(u,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),u}function Ro(u,d){return u?d?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function ko(u,d,m){return typeof u=="string"?(u=encodeURI(u).replace(d,wA),m&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function wA(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var d0=/[#\/\?@]/g,EA=/[#\?:]/g,TA=/[#\?]/g,SA=/[#\?@]/g,xA=/#/g;function bo(u,d){this.h=this.g=null,this.i=u||null,this.j=!!d}function pr(u){u.g||(u.g=new Map,u.h=0,u.i&&_A(u.i,function(d,m){u.add(decodeURIComponent(d.replace(/\+/g," ")),m)}))}t=bo.prototype,t.add=function(u,d){pr(this),this.i=null,u=ts(this,u);var m=this.g.get(u);return m||this.g.set(u,m=[]),m.push(d),this.h+=1,this};function f0(u,d){pr(u),d=ts(u,d),u.g.has(d)&&(u.i=null,u.h-=u.g.get(d).length,u.g.delete(d))}function p0(u,d){return pr(u),d=ts(u,d),u.g.has(d)}t.forEach=function(u,d){pr(this),this.g.forEach(function(m,E){m.forEach(function(D){u.call(d,D,E,this)},this)},this)},t.na=function(){pr(this);const u=Array.from(this.g.values()),d=Array.from(this.g.keys()),m=[];for(let E=0;E<d.length;E++){const D=u[E];for(let L=0;L<D.length;L++)m.push(d[E])}return m},t.V=function(u){pr(this);let d=[];if(typeof u=="string")p0(this,u)&&(d=d.concat(this.g.get(ts(this,u))));else{u=Array.from(this.g.values());for(let m=0;m<u.length;m++)d=d.concat(u[m])}return d},t.set=function(u,d){return pr(this),this.i=null,u=ts(this,u),p0(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[d]),this.h+=1,this},t.get=function(u,d){return u?(u=this.V(u),0<u.length?String(u[0]):d):d};function m0(u,d,m){f0(u,d),0<m.length&&(u.i=null,u.g.set(ts(u,d),I(m)),u.h+=m.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],d=Array.from(this.g.keys());for(var m=0;m<d.length;m++){var E=d[m];const L=encodeURIComponent(String(E)),z=this.V(E);for(E=0;E<z.length;E++){var D=L;z[E]!==""&&(D+="="+encodeURIComponent(String(z[E]))),u.push(D)}}return this.i=u.join("&")};function ts(u,d){return d=String(d),u.j&&(d=d.toLowerCase()),d}function IA(u,d){d&&!u.j&&(pr(u),u.i=null,u.g.forEach(function(m,E){var D=E.toLowerCase();E!=D&&(f0(this,E),m0(this,D,m))},u)),u.j=d}function PA(u,d){const m=new Co;if(a.Image){const E=new Image;E.onload=y(mr,m,"TestLoadImage: loaded",!0,d,E),E.onerror=y(mr,m,"TestLoadImage: error",!1,d,E),E.onabort=y(mr,m,"TestLoadImage: abort",!1,d,E),E.ontimeout=y(mr,m,"TestLoadImage: timeout",!1,d,E),a.setTimeout(function(){E.ontimeout&&E.ontimeout()},1e4),E.src=u}else d(!1)}function CA(u,d){const m=new Co,E=new AbortController,D=setTimeout(()=>{E.abort(),mr(m,"TestPingServer: timeout",!1,d)},1e4);fetch(u,{signal:E.signal}).then(L=>{clearTimeout(D),L.ok?mr(m,"TestPingServer: ok",!0,d):mr(m,"TestPingServer: server error",!1,d)}).catch(()=>{clearTimeout(D),mr(m,"TestPingServer: error",!1,d)})}function mr(u,d,m,E,D){try{D&&(D.onload=null,D.onerror=null,D.onabort=null,D.ontimeout=null),E(m)}catch{}}function AA(){this.g=new cA}function RA(u,d,m){const E=m||"";try{u0(u,function(D,L){let z=D;c(D)&&(z=Qh(D)),d.push(E+L+"="+encodeURIComponent(z))})}catch(D){throw d.push(E+"type="+encodeURIComponent("_badmap")),D}}function Ll(u){this.l=u.Ub||null,this.j=u.eb||!1}x(Ll,Yh),Ll.prototype.g=function(){return new Ml(this.l,this.j)},Ll.prototype.i=function(u){return function(){return u}}({});function Ml(u,d){st.call(this),this.D=u,this.o=d,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}x(Ml,st),t=Ml.prototype,t.open=function(u,d){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=u,this.A=d,this.readyState=1,Do(this)},t.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const d={headers:this.u,method:this.B,credentials:this.m,cache:void 0};u&&(d.body=u),(this.D||a).fetch(new Request(this.A,d)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Vo(this)),this.readyState=0},t.Sa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,Do(this)),this.g&&(this.readyState=3,Do(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;g0(this)}else u.text().then(this.Ra.bind(this),this.ga.bind(this))};function g0(u){u.j.read().then(u.Pa.bind(u)).catch(u.ga.bind(u))}t.Pa=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var d=u.value?u.value:new Uint8Array(0);(d=this.v.decode(d,{stream:!u.done}))&&(this.response=this.responseText+=d)}u.done?Vo(this):Do(this),this.readyState==3&&g0(this)}},t.Ra=function(u){this.g&&(this.response=this.responseText=u,Vo(this))},t.Qa=function(u){this.g&&(this.response=u,Vo(this))},t.ga=function(){this.g&&Vo(this)};function Vo(u){u.readyState=4,u.l=null,u.j=null,u.v=null,Do(u)}t.setRequestHeader=function(u,d){this.u.append(u,d)},t.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],d=this.h.entries();for(var m=d.next();!m.done;)m=m.value,u.push(m[0]+": "+m[1]),m=d.next();return u.join(`\r
`)};function Do(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(Ml.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function y0(u){let d="";return M(u,function(m,E){d+=E,d+=":",d+=m,d+=`\r
`}),d}function od(u,d,m){e:{for(E in m){var E=!1;break e}E=!0}E||(m=y0(m),typeof u=="string"?m!=null&&encodeURIComponent(String(m)):we(u,d,m))}function De(u){st.call(this),this.headers=new Map,this.o=u||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}x(De,st);var kA=/^https?$/i,bA=["POST","PUT"];t=De.prototype,t.Ha=function(u){this.J=u},t.ea=function(u,d,m,E){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);d=d?d.toUpperCase():"GET",this.D=u,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Zh.g(),this.v=this.o?qy(this.o):qy(Zh),this.g.onreadystatechange=p(this.Ea,this);try{this.B=!0,this.g.open(d,String(u),!0),this.B=!1}catch(L){v0(this,L);return}if(u=m||"",m=new Map(this.headers),E)if(Object.getPrototypeOf(E)===Object.prototype)for(var D in E)m.set(D,E[D]);else if(typeof E.keys=="function"&&typeof E.get=="function")for(const L of E.keys())m.set(L,E.get(L));else throw Error("Unknown input type for opt_headers: "+String(E));E=Array.from(m.keys()).find(L=>L.toLowerCase()=="content-type"),D=a.FormData&&u instanceof a.FormData,!(0<=Array.prototype.indexOf.call(bA,d,void 0))||E||D||m.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[L,z]of m)this.g.setRequestHeader(L,z);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{E0(this),this.u=!0,this.g.send(u),this.u=!1}catch(L){v0(this,L)}};function v0(u,d){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=d,u.m=5,_0(u),jl(u)}function _0(u){u.A||(u.A=!0,wt(u,"complete"),wt(u,"error"))}t.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=u||7,wt(this,"complete"),wt(this,"abort"),jl(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),jl(this,!0)),De.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?w0(this):this.bb())},t.bb=function(){w0(this)};function w0(u){if(u.h&&typeof o<"u"&&(!u.v[1]||Mn(u)!=4||u.Z()!=2)){if(u.u&&Mn(u)==4)$y(u.Ea,0,u);else if(wt(u,"readystatechange"),Mn(u)==4){u.h=!1;try{const z=u.Z();e:switch(z){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var d=!0;break e;default:d=!1}var m;if(!(m=d)){var E;if(E=z===0){var D=String(u.D).match(c0)[1]||null;!D&&a.self&&a.self.location&&(D=a.self.location.protocol.slice(0,-1)),E=!kA.test(D?D.toLowerCase():"")}m=E}if(m)wt(u,"complete"),wt(u,"success");else{u.m=6;try{var L=2<Mn(u)?u.g.statusText:""}catch{L=""}u.l=L+" ["+u.Z()+"]",_0(u)}}finally{jl(u)}}}}function jl(u,d){if(u.g){E0(u);const m=u.g,E=u.v[0]?()=>{}:null;u.g=null,u.v=null,d||wt(u,"ready");try{m.onreadystatechange=E}catch{}}}function E0(u){u.I&&(a.clearTimeout(u.I),u.I=null)}t.isActive=function(){return!!this.g};function Mn(u){return u.g?u.g.readyState:0}t.Z=function(){try{return 2<Mn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(u){if(this.g){var d=this.g.responseText;return u&&d.indexOf(u)==0&&(d=d.substring(u.length)),uA(d)}};function T0(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.H){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function VA(u){const d={};u=(u.g&&2<=Mn(u)&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let E=0;E<u.length;E++){if(_(u[E]))continue;var m=k(u[E]);const D=m[0];if(m=m[1],typeof m!="string")continue;m=m.trim();const L=d[D]||[];d[D]=L,L.push(m)}T(d,function(E){return E.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function No(u,d,m){return m&&m.internalChannelParams&&m.internalChannelParams[u]||d}function S0(u){this.Aa=0,this.i=[],this.j=new Co,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=No("failFast",!1,u),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=No("baseRetryDelayMs",5e3,u),this.cb=No("retryDelaySeedMs",1e4,u),this.Wa=No("forwardChannelMaxRetries",2,u),this.wa=No("forwardChannelRequestTimeoutMs",2e4,u),this.pa=u&&u.xmlHttpFactory||void 0,this.Xa=u&&u.Tb||void 0,this.Ca=u&&u.useFetchStreams||!1,this.L=void 0,this.J=u&&u.supportsCrossDomainXhr||!1,this.K="",this.h=new i0(u&&u.concurrentRequestLimit),this.Da=new AA,this.P=u&&u.fastHandshake||!1,this.O=u&&u.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=u&&u.Rb||!1,u&&u.xa&&this.j.xa(),u&&u.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&u&&u.detectBufferingProxy||!1,this.ja=void 0,u&&u.longPollingTimeout&&0<u.longPollingTimeout&&(this.ja=u.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=S0.prototype,t.la=8,t.G=1,t.connect=function(u,d,m,E){Et(0),this.W=u,this.H=d||{},m&&E!==void 0&&(this.H.OSID=m,this.H.OAID=E),this.F=this.X,this.I=V0(this,null,this.W),Ul(this)};function ad(u){if(x0(u),u.G==3){var d=u.U++,m=Ln(u.I);if(we(m,"SID",u.K),we(m,"RID",d),we(m,"TYPE","terminate"),Oo(u,m),d=new fr(u,u.j,d),d.L=2,d.v=Ol(Ln(m)),m=!1,a.navigator&&a.navigator.sendBeacon)try{m=a.navigator.sendBeacon(d.v.toString(),"")}catch{}!m&&a.Image&&(new Image().src=d.v,m=!0),m||(d.g=D0(d.j,null),d.g.ea(d.v)),d.F=Date.now(),Vl(d)}b0(u)}function Fl(u){u.g&&(ud(u),u.g.cancel(),u.g=null)}function x0(u){Fl(u),u.u&&(a.clearTimeout(u.u),u.u=null),Bl(u),u.h.cancel(),u.s&&(typeof u.s=="number"&&a.clearTimeout(u.s),u.s=null)}function Ul(u){if(!s0(u.h)&&!u.s){u.s=!0;var d=u.Ga;de||Q(),$||(de(),$=!0),K.add(d,u),u.B=0}}function DA(u,d){return o0(u.h)>=u.h.j-(u.s?1:0)?!1:u.s?(u.i=d.D.concat(u.i),!0):u.G==1||u.G==2||u.B>=(u.Va?0:u.Wa)?!1:(u.s=Po(p(u.Ga,u,d),k0(u,u.B)),u.B++,!0)}t.Ga=function(u){if(this.s)if(this.s=null,this.G==1){if(!u){this.U=Math.floor(1e5*Math.random()),u=this.U++;const D=new fr(this,this.j,u);let L=this.o;if(this.S&&(L?(L=v(L),C(L,this.S)):L=this.S),this.m!==null||this.O||(D.H=L,L=null),this.P)e:{for(var d=0,m=0;m<this.i.length;m++){t:{var E=this.i[m];if("__data__"in E.map&&(E=E.map.__data__,typeof E=="string")){E=E.length;break t}E=void 0}if(E===void 0)break;if(d+=E,4096<d){d=m;break e}if(d===4096||m===this.i.length-1){d=m+1;break e}}d=1e3}else d=1e3;d=P0(this,D,d),m=Ln(this.I),we(m,"RID",u),we(m,"CVER",22),this.D&&we(m,"X-HTTP-Session-Id",this.D),Oo(this,m),L&&(this.O?d="headers="+encodeURIComponent(String(y0(L)))+"&"+d:this.m&&od(m,this.m,L)),sd(this.h,D),this.Ua&&we(m,"TYPE","init"),this.P?(we(m,"$req",d),we(m,"SID","null"),D.T=!0,td(D,m,null)):td(D,m,d),this.G=2}}else this.G==3&&(u?I0(this,u):this.i.length==0||s0(this.h)||I0(this))};function I0(u,d){var m;d?m=d.l:m=u.U++;const E=Ln(u.I);we(E,"SID",u.K),we(E,"RID",m),we(E,"AID",u.T),Oo(u,E),u.m&&u.o&&od(E,u.m,u.o),m=new fr(u,u.j,m,u.B+1),u.m===null&&(m.H=u.o),d&&(u.i=d.D.concat(u.i)),d=P0(u,m,1e3),m.I=Math.round(.5*u.wa)+Math.round(.5*u.wa*Math.random()),sd(u.h,m),td(m,E,d)}function Oo(u,d){u.H&&M(u.H,function(m,E){we(d,E,m)}),u.l&&u0({},function(m,E){we(d,E,m)})}function P0(u,d,m){m=Math.min(u.i.length,m);var E=u.l?p(u.l.Na,u.l,u):null;e:{var D=u.i;let L=-1;for(;;){const z=["count="+m];L==-1?0<m?(L=D[0].g,z.push("ofs="+L)):L=0:z.push("ofs="+L);let ye=!0;for(let Ye=0;Ye<m;Ye++){let le=D[Ye].g;const ot=D[Ye].map;if(le-=L,0>le)L=Math.max(0,D[Ye].g-100),ye=!1;else try{RA(ot,z,"req"+le+"_")}catch{E&&E(ot)}}if(ye){E=z.join("&");break e}}}return u=u.i.splice(0,m),d.D=u,E}function C0(u){if(!u.g&&!u.u){u.Y=1;var d=u.Fa;de||Q(),$||(de(),$=!0),K.add(d,u),u.v=0}}function ld(u){return u.g||u.u||3<=u.v?!1:(u.Y++,u.u=Po(p(u.Fa,u),k0(u,u.v)),u.v++,!0)}t.Fa=function(){if(this.u=null,A0(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var u=2*this.R;this.j.info("BP detection timer enabled: "+u),this.A=Po(p(this.ab,this),u)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Et(10),Fl(this),A0(this))};function ud(u){u.A!=null&&(a.clearTimeout(u.A),u.A=null)}function A0(u){u.g=new fr(u,u.j,"rpc",u.Y),u.m===null&&(u.g.H=u.o),u.g.O=0;var d=Ln(u.qa);we(d,"RID","rpc"),we(d,"SID",u.K),we(d,"AID",u.T),we(d,"CI",u.F?"0":"1"),!u.F&&u.ja&&we(d,"TO",u.ja),we(d,"TYPE","xmlhttp"),Oo(u,d),u.m&&u.o&&od(d,u.m,u.o),u.L&&(u.g.I=u.L);var m=u.g;u=u.ia,m.L=1,m.v=Ol(Ln(d)),m.m=null,m.P=!0,t0(m,u)}t.Za=function(){this.C!=null&&(this.C=null,Fl(this),ld(this),Et(19))};function Bl(u){u.C!=null&&(a.clearTimeout(u.C),u.C=null)}function R0(u,d){var m=null;if(u.g==d){Bl(u),ud(u),u.g=null;var E=2}else if(id(u.h,d))m=d.D,a0(u.h,d),E=1;else return;if(u.G!=0){if(d.o)if(E==1){m=d.m?d.m.length:0,d=Date.now()-d.F;var D=u.B;E=Rl(),wt(E,new Xy(E,m)),Ul(u)}else C0(u);else if(D=d.s,D==3||D==0&&0<d.X||!(E==1&&DA(u,d)||E==2&&ld(u)))switch(m&&0<m.length&&(d=u.h,d.i=d.i.concat(m)),D){case 1:li(u,5);break;case 4:li(u,10);break;case 3:li(u,6);break;default:li(u,2)}}}function k0(u,d){let m=u.Ta+Math.floor(Math.random()*u.cb);return u.isActive()||(m*=2),m*d}function li(u,d){if(u.j.info("Error code "+d),d==2){var m=p(u.fb,u),E=u.Xa;const D=!E;E=new ai(E||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Dl(E,"https"),Ol(E),D?PA(E.toString(),m):CA(E.toString(),m)}else Et(2);u.G=0,u.l&&u.l.sa(d),b0(u),x0(u)}t.fb=function(u){u?(this.j.info("Successfully pinged google.com"),Et(2)):(this.j.info("Failed to ping google.com"),Et(1))};function b0(u){if(u.G=0,u.ka=[],u.l){const d=l0(u.h);(d.length!=0||u.i.length!=0)&&(R(u.ka,d),R(u.ka,u.i),u.h.i.length=0,I(u.i),u.i.length=0),u.l.ra()}}function V0(u,d,m){var E=m instanceof ai?Ln(m):new ai(m);if(E.g!="")d&&(E.g=d+"."+E.g),Nl(E,E.s);else{var D=a.location;E=D.protocol,d=d?d+"."+D.hostname:D.hostname,D=+D.port;var L=new ai(null);E&&Dl(L,E),d&&(L.g=d),D&&Nl(L,D),m&&(L.l=m),E=L}return m=u.D,d=u.ya,m&&d&&we(E,m,d),we(E,"VER",u.la),Oo(u,E),E}function D0(u,d,m){if(d&&!u.J)throw Error("Can't create secondary domain capable XhrIo object.");return d=u.Ca&&!u.pa?new De(new Ll({eb:m})):new De(u.pa),d.Ha(u.J),d}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function N0(){}t=N0.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function $l(){}$l.prototype.g=function(u,d){return new Mt(u,d)};function Mt(u,d){st.call(this),this.g=new S0(d),this.l=u,this.h=d&&d.messageUrlParams||null,u=d&&d.messageHeaders||null,d&&d.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=d&&d.initMessageHeaders||null,d&&d.messageContentType&&(u?u["X-WebChannel-Content-Type"]=d.messageContentType:u={"X-WebChannel-Content-Type":d.messageContentType}),d&&d.va&&(u?u["X-WebChannel-Client-Profile"]=d.va:u={"X-WebChannel-Client-Profile":d.va}),this.g.S=u,(u=d&&d.Sb)&&!_(u)&&(this.g.m=u),this.v=d&&d.supportsCrossDomainXhr||!1,this.u=d&&d.sendRawJson||!1,(d=d&&d.httpSessionIdParam)&&!_(d)&&(this.g.D=d,u=this.h,u!==null&&d in u&&(u=this.h,d in u&&delete u[d])),this.j=new ns(this)}x(Mt,st),Mt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Mt.prototype.close=function(){ad(this.g)},Mt.prototype.o=function(u){var d=this.g;if(typeof u=="string"){var m={};m.__data__=u,u=m}else this.u&&(m={},m.__data__=Qh(u),u=m);d.i.push(new gA(d.Ya++,u)),d.G==3&&Ul(d)},Mt.prototype.N=function(){this.g.l=null,delete this.j,ad(this.g),delete this.g,Mt.aa.N.call(this)};function O0(u){Xh.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var d=u.__sm__;if(d){e:{for(const m in d){u=m;break e}u=void 0}(this.i=u)&&(u=this.i,d=d!==null&&u in d?d[u]:void 0),this.data=d}else this.data=u}x(O0,Xh);function L0(){Jh.call(this),this.status=1}x(L0,Jh);function ns(u){this.g=u}x(ns,N0),ns.prototype.ua=function(){wt(this.g,"a")},ns.prototype.ta=function(u){wt(this.g,new O0(u))},ns.prototype.sa=function(u){wt(this.g,new L0)},ns.prototype.ra=function(){wt(this.g,"b")},$l.prototype.createWebChannel=$l.prototype.g,Mt.prototype.send=Mt.prototype.o,Mt.prototype.open=Mt.prototype.m,Mt.prototype.close=Mt.prototype.close,qI=function(){return new $l},HI=function(){return Rl()},WI=si,Kp={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},kl.NO_ERROR=0,kl.TIMEOUT=8,kl.HTTP_ERROR=6,Fu=kl,Jy.COMPLETE="complete",zI=Jy,Ky.EventType=xo,xo.OPEN="a",xo.CLOSE="b",xo.ERROR="c",xo.MESSAGE="d",st.prototype.listen=st.prototype.K,ta=Ky,De.prototype.listenOnce=De.prototype.L,De.prototype.getLastError=De.prototype.Ka,De.prototype.getLastErrorCode=De.prototype.Ba,De.prototype.getStatus=De.prototype.Z,De.prototype.getResponseJson=De.prototype.Oa,De.prototype.getResponseText=De.prototype.oa,De.prototype.send=De.prototype.ea,De.prototype.setWithCredentials=De.prototype.Ha,$I=De}).apply(typeof du<"u"?du:typeof self<"u"?self:typeof window<"u"?window:{});const F1="@firebase/firestore";/**
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
 */let vo="10.14.0";/**
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
 */const Wi=new $g("@firebase/firestore");function Ho(){return Wi.logLevel}function q(t,...e){if(Wi.logLevel<=se.DEBUG){const n=e.map(Hg);Wi.debug(`Firestore (${vo}): ${t}`,...n)}}function sr(t,...e){if(Wi.logLevel<=se.ERROR){const n=e.map(Hg);Wi.error(`Firestore (${vo}): ${t}`,...n)}}function eo(t,...e){if(Wi.logLevel<=se.WARN){const n=e.map(Hg);Wi.warn(`Firestore (${vo}): ${t}`,...n)}}function Hg(t){if(typeof t=="string")return t;try{/**
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
 */function J(t="Unexpected state"){const e=`FIRESTORE (${vo}) INTERNAL ASSERTION FAILED: `+t;throw sr(e),new Error(e)}function me(t,e){t||J()}function ee(t,e){return t}/**
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
 */class KI{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class tM{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(dt.UNAUTHENTICATED))}shutdown(){}}class nM{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class rM{constructor(e){this.t=e,this.currentUser=dt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){me(this.o===void 0);let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new Jn;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Jn,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{q("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(q("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Jn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(q("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(me(typeof r.accessToken=="string"),new KI(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return me(e===null||typeof e=="string"),new dt(e)}}class iM{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=dt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class sM{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new iM(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(dt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class oM{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class aM{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){me(this.o===void 0);const r=s=>{s.error!=null&&q("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,q("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{q("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):q("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(me(typeof n.token=="string"),this.R=n.token,new oM(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function lM(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class GI{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=lM(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function ue(t,e){return t<e?-1:t>e?1:0}function to(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */class He{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new H(F.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new H(F.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new H(F.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new H(F.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return He.fromMillis(Date.now())}static fromDate(e){return He.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new He(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ue(this.nanoseconds,e.nanoseconds):ue(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class Z{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Z(e)}static min(){return new Z(new He(0,0))}static max(){return new Z(new He(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Ya{constructor(e,n,r){n===void 0?n=0:n>e.length&&J(),r===void 0?r=e.length-n:r>e.length-n&&J(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Ya.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Ya?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Se extends Ya{construct(e,n,r){return new Se(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new H(F.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Se(n)}static emptyPath(){return new Se([])}}const uM=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class et extends Ya{construct(e,n,r){return new et(e,n,r)}static isValidIdentifier(e){return uM.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),et.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new et(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new H(F.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new H(F.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new H(F.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new H(F.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new et(n)}static emptyPath(){return new et([])}}/**
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
 */class G{constructor(e){this.path=e}static fromPath(e){return new G(Se.fromString(e))}static fromName(e){return new G(Se.fromString(e).popFirst(5))}static empty(){return new G(Se.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Se.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Se.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new G(new Se(e.slice()))}}function cM(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=Z.fromTimestamp(r===1e9?new He(n+1,0):new He(n,r));return new Yr(i,G.empty(),e)}function hM(t){return new Yr(t.readTime,t.key,-1)}class Yr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Yr(Z.min(),G.empty(),-1)}static max(){return new Yr(Z.max(),G.empty(),-1)}}function dM(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=G.comparator(t.documentKey,e.documentKey),n!==0?n:ue(t.largestBatchId,e.largestBatchId))}/**
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
 */const fM="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class pM{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function gl(t){if(t.code!==F.FAILED_PRECONDITION||t.message!==fM)throw t;q("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class U{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&J(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new U((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof U?n:U.resolve(n)}catch(n){return U.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):U.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):U.reject(n)}static resolve(e){return new U((n,r)=>{n(e)})}static reject(e){return new U((n,r)=>{r(e)})}static waitFor(e){return new U((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=U.resolve(!1);for(const r of e)n=n.next(i=>i?U.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new U((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const c=l;n(e[c]).next(h=>{o[c]=h,++a,a===s&&r(o)},h=>i(h))}})}static doWhile(e,n){return new U((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function mM(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function yl(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class qg{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}qg.oe=-1;function Ch(t){return t==null}function Vc(t){return t===0&&1/t==-1/0}function gM(t){return typeof t=="number"&&Number.isInteger(t)&&!Vc(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function U1(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function _o(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function QI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Ve{constructor(e,n){this.comparator=e,this.root=n||Ze.EMPTY}insert(e,n){return new Ve(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ze.BLACK,null,null))}remove(e){return new Ve(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ze.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new fu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new fu(this.root,e,this.comparator,!1)}getReverseIterator(){return new fu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new fu(this.root,e,this.comparator,!0)}}class fu{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ze{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Ze.RED,this.left=i??Ze.EMPTY,this.right=s??Ze.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Ze(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Ze.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Ze.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ze.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ze.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw J();const e=this.left.check();if(e!==this.right.check())throw J();return e+(this.isRed()?0:1)}}Ze.EMPTY=null,Ze.RED=!0,Ze.BLACK=!1;Ze.EMPTY=new class{constructor(){this.size=0}get key(){throw J()}get value(){throw J()}get color(){throw J()}get left(){throw J()}get right(){throw J()}copy(e,n,r,i,s){return this}insert(e,n,r){return new Ze(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class nt{constructor(e){this.comparator=e,this.data=new Ve(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new B1(this.data.getIterator())}getIteratorFrom(e){return new B1(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof nt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new nt(this.comparator);return n.data=e,n}}class B1{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class hn{constructor(e){this.fields=e,e.sort(et.comparator)}static empty(){return new hn([])}unionWith(e){let n=new nt(et.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new hn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return to(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class YI extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class it{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new YI("Invalid base64 string: "+s):s}}(e);return new it(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new it(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ue(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}it.EMPTY_BYTE_STRING=new it("");const yM=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Xr(t){if(me(!!t),typeof t=="string"){let e=0;const n=yM.exec(t);if(me(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Le(t.seconds),nanos:Le(t.nanos)}}function Le(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Hi(t){return typeof t=="string"?it.fromBase64String(t):it.fromUint8Array(t)}/**
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
 */function Kg(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Gg(t){const e=t.mapValue.fields.__previous_value__;return Kg(e)?Gg(e):e}function Xa(t){const e=Xr(t.mapValue.fields.__local_write_time__.timestampValue);return new He(e.seconds,e.nanos)}/**
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
 */class vM{constructor(e,n,r,i,s,o,a,l,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=c}}class Ja{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Ja("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ja&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const pu={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function qi(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Kg(t)?4:wM(t)?9007199254740991:_M(t)?10:11:J()}function Dn(t,e){if(t===e)return!0;const n=qi(t);if(n!==qi(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Xa(t).isEqual(Xa(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Xr(i.timestampValue),a=Xr(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Hi(i.bytesValue).isEqual(Hi(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Le(i.geoPointValue.latitude)===Le(s.geoPointValue.latitude)&&Le(i.geoPointValue.longitude)===Le(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Le(i.integerValue)===Le(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Le(i.doubleValue),a=Le(s.doubleValue);return o===a?Vc(o)===Vc(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return to(t.arrayValue.values||[],e.arrayValue.values||[],Dn);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(U1(o)!==U1(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!Dn(o[l],a[l])))return!1;return!0}(t,e);default:return J()}}function Za(t,e){return(t.values||[]).find(n=>Dn(n,e))!==void 0}function no(t,e){if(t===e)return 0;const n=qi(t),r=qi(e);if(n!==r)return ue(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ue(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=Le(s.integerValue||s.doubleValue),l=Le(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return $1(t.timestampValue,e.timestampValue);case 4:return $1(Xa(t),Xa(e));case 5:return ue(t.stringValue,e.stringValue);case 6:return function(s,o){const a=Hi(s),l=Hi(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),l=o.split("/");for(let c=0;c<a.length&&c<l.length;c++){const h=ue(a[c],l[c]);if(h!==0)return h}return ue(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=ue(Le(s.latitude),Le(o.latitude));return a!==0?a:ue(Le(s.longitude),Le(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return z1(t.arrayValue,e.arrayValue);case 10:return function(s,o){var a,l,c,h;const f=s.fields||{},p=o.fields||{},y=(a=f.value)===null||a===void 0?void 0:a.arrayValue,x=(l=p.value)===null||l===void 0?void 0:l.arrayValue,I=ue(((c=y==null?void 0:y.values)===null||c===void 0?void 0:c.length)||0,((h=x==null?void 0:x.values)===null||h===void 0?void 0:h.length)||0);return I!==0?I:z1(y,x)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===pu.mapValue&&o===pu.mapValue)return 0;if(s===pu.mapValue)return 1;if(o===pu.mapValue)return-1;const a=s.fields||{},l=Object.keys(a),c=o.fields||{},h=Object.keys(c);l.sort(),h.sort();for(let f=0;f<l.length&&f<h.length;++f){const p=ue(l[f],h[f]);if(p!==0)return p;const y=no(a[l[f]],c[h[f]]);if(y!==0)return y}return ue(l.length,h.length)}(t.mapValue,e.mapValue);default:throw J()}}function $1(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ue(t,e);const n=Xr(t),r=Xr(e),i=ue(n.seconds,r.seconds);return i!==0?i:ue(n.nanos,r.nanos)}function z1(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=no(n[i],r[i]);if(s)return s}return ue(n.length,r.length)}function ro(t){return Gp(t)}function Gp(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Xr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Hi(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return G.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Gp(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Gp(n.fields[o])}`;return i+"}"}(t.mapValue):J()}function W1(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Qp(t){return!!t&&"integerValue"in t}function Qg(t){return!!t&&"arrayValue"in t}function H1(t){return!!t&&"nullValue"in t}function q1(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Uu(t){return!!t&&"mapValue"in t}function _M(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function va(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return _o(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=va(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=va(t.arrayValue.values[n]);return e}return Object.assign({},t)}function wM(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Zt{constructor(e){this.value=e}static empty(){return new Zt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Uu(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=va(n)}setAll(e){let n=et.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=va(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Uu(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Dn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Uu(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){_o(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Zt(va(this.value))}}function XI(t){const e=[];return _o(t.fields,(n,r)=>{const i=new et([n]);if(Uu(r)){const s=XI(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new hn(e)}/**
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
 */class pt{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new pt(e,0,Z.min(),Z.min(),Z.min(),Zt.empty(),0)}static newFoundDocument(e,n,r,i){return new pt(e,1,n,Z.min(),r,i,0)}static newNoDocument(e,n){return new pt(e,2,n,Z.min(),Z.min(),Zt.empty(),0)}static newUnknownDocument(e,n){return new pt(e,3,n,Z.min(),Z.min(),Zt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Z.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Zt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Zt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Z.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof pt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new pt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Dc{constructor(e,n){this.position=e,this.inclusive=n}}function K1(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=G.comparator(G.fromName(o.referenceValue),n.key):r=no(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function G1(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Dn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Nc{constructor(e,n="asc"){this.field=e,this.dir=n}}function EM(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class JI{}class Be extends JI{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new SM(e,n,r):n==="array-contains"?new PM(e,r):n==="in"?new CM(e,r):n==="not-in"?new AM(e,r):n==="array-contains-any"?new RM(e,r):new Be(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new xM(e,r):new IM(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(no(n,this.value)):n!==null&&qi(this.value)===qi(n)&&this.matchesComparison(no(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return J()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class yn extends JI{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new yn(e,n)}matches(e){return ZI(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function ZI(t){return t.op==="and"}function eP(t){return TM(t)&&ZI(t)}function TM(t){for(const e of t.filters)if(e instanceof yn)return!1;return!0}function Yp(t){if(t instanceof Be)return t.field.canonicalString()+t.op.toString()+ro(t.value);if(eP(t))return t.filters.map(e=>Yp(e)).join(",");{const e=t.filters.map(n=>Yp(n)).join(",");return`${t.op}(${e})`}}function tP(t,e){return t instanceof Be?function(r,i){return i instanceof Be&&r.op===i.op&&r.field.isEqual(i.field)&&Dn(r.value,i.value)}(t,e):t instanceof yn?function(r,i){return i instanceof yn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&tP(o,i.filters[a]),!0):!1}(t,e):void J()}function nP(t){return t instanceof Be?function(n){return`${n.field.canonicalString()} ${n.op} ${ro(n.value)}`}(t):t instanceof yn?function(n){return n.op.toString()+" {"+n.getFilters().map(nP).join(" ,")+"}"}(t):"Filter"}class SM extends Be{constructor(e,n,r){super(e,n,r),this.key=G.fromName(r.referenceValue)}matches(e){const n=G.comparator(e.key,this.key);return this.matchesComparison(n)}}class xM extends Be{constructor(e,n){super(e,"in",n),this.keys=rP("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class IM extends Be{constructor(e,n){super(e,"not-in",n),this.keys=rP("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function rP(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>G.fromName(r.referenceValue))}class PM extends Be{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Qg(n)&&Za(n.arrayValue,this.value)}}class CM extends Be{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Za(this.value.arrayValue,n)}}class AM extends Be{constructor(e,n){super(e,"not-in",n)}matches(e){if(Za(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Za(this.value.arrayValue,n)}}class RM extends Be{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Qg(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Za(this.value.arrayValue,r))}}/**
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
 */class kM{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ue=null}}function Q1(t,e=null,n=[],r=[],i=null,s=null,o=null){return new kM(t,e,n,r,i,s,o)}function Yg(t){const e=ee(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Yp(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Ch(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ro(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ro(r)).join(",")),e.ue=n}return e.ue}function Xg(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!EM(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!tP(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!G1(t.startAt,e.startAt)&&G1(t.endAt,e.endAt)}function Xp(t){return G.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class vl{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function bM(t,e,n,r,i,s,o,a){return new vl(t,e,n,r,i,s,o,a)}function Ah(t){return new vl(t)}function Y1(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function iP(t){return t.collectionGroup!==null}function _a(t){const e=ee(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new nt(et.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(c=>{c.isInequality()&&(a=a.add(c.field))})}),a})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new Nc(s,r))}),n.has(et.keyField().canonicalString())||e.ce.push(new Nc(et.keyField(),r))}return e.ce}function An(t){const e=ee(t);return e.le||(e.le=VM(e,_a(t))),e.le}function VM(t,e){if(t.limitType==="F")return Q1(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Nc(i.field,s)});const n=t.endAt?new Dc(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Dc(t.startAt.position,t.startAt.inclusive):null;return Q1(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Jp(t,e){const n=t.filters.concat([e]);return new vl(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Zp(t,e,n){return new vl(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Rh(t,e){return Xg(An(t),An(e))&&t.limitType===e.limitType}function sP(t){return`${Yg(An(t))}|lt:${t.limitType}`}function os(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>nP(i)).join(", ")}]`),Ch(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>ro(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>ro(i)).join(",")),`Target(${r})`}(An(t))}; limitType=${t.limitType})`}function kh(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):G.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of _a(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,l){const c=K1(o,a,l);return o.inclusive?c<=0:c<0}(r.startAt,_a(r),i)||r.endAt&&!function(o,a,l){const c=K1(o,a,l);return o.inclusive?c>=0:c>0}(r.endAt,_a(r),i))}(t,e)}function DM(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function oP(t){return(e,n)=>{let r=!1;for(const i of _a(t)){const s=NM(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function NM(t,e,n){const r=t.field.isKeyField()?G.comparator(e.key,n.key):function(s,o,a){const l=o.data.field(s),c=a.data.field(s);return l!==null&&c!==null?no(l,c):J()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return J()}}/**
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
 */class wo{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){_o(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return QI(this.inner)}size(){return this.innerSize}}/**
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
 */const OM=new Ve(G.comparator);function or(){return OM}const aP=new Ve(G.comparator);function na(...t){let e=aP;for(const n of t)e=e.insert(n.key,n);return e}function lP(t){let e=aP;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Si(){return wa()}function uP(){return wa()}function wa(){return new wo(t=>t.toString(),(t,e)=>t.isEqual(e))}const LM=new Ve(G.comparator),MM=new nt(G.comparator);function ie(...t){let e=MM;for(const n of t)e=e.add(n);return e}const jM=new nt(ue);function FM(){return jM}/**
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
 */function Jg(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Vc(e)?"-0":e}}function cP(t){return{integerValue:""+t}}function UM(t,e){return gM(e)?cP(e):Jg(t,e)}/**
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
 */class bh{constructor(){this._=void 0}}function BM(t,e,n){return t instanceof Oc?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Kg(s)&&(s=Gg(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof el?dP(t,e):t instanceof tl?fP(t,e):function(i,s){const o=hP(i,s),a=X1(o)+X1(i.Pe);return Qp(o)&&Qp(i.Pe)?cP(a):Jg(i.serializer,a)}(t,e)}function $M(t,e,n){return t instanceof el?dP(t,e):t instanceof tl?fP(t,e):n}function hP(t,e){return t instanceof Lc?function(r){return Qp(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Oc extends bh{}class el extends bh{constructor(e){super(),this.elements=e}}function dP(t,e){const n=pP(e);for(const r of t.elements)n.some(i=>Dn(i,r))||n.push(r);return{arrayValue:{values:n}}}class tl extends bh{constructor(e){super(),this.elements=e}}function fP(t,e){let n=pP(e);for(const r of t.elements)n=n.filter(i=>!Dn(i,r));return{arrayValue:{values:n}}}class Lc extends bh{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function X1(t){return Le(t.integerValue||t.doubleValue)}function pP(t){return Qg(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function zM(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof el&&i instanceof el||r instanceof tl&&i instanceof tl?to(r.elements,i.elements,Dn):r instanceof Lc&&i instanceof Lc?Dn(r.Pe,i.Pe):r instanceof Oc&&i instanceof Oc}(t.transform,e.transform)}class WM{constructor(e,n){this.version=e,this.transformResults=n}}class Zn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Zn}static exists(e){return new Zn(void 0,e)}static updateTime(e){return new Zn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Bu(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Vh{}function mP(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new yP(t.key,Zn.none()):new _l(t.key,t.data,Zn.none());{const n=t.data,r=Zt.empty();let i=new nt(et.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Yi(t.key,r,new hn(i.toArray()),Zn.none())}}function HM(t,e,n){t instanceof _l?function(i,s,o){const a=i.value.clone(),l=Z1(i.fieldTransforms,s,o.transformResults);a.setAll(l),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof Yi?function(i,s,o){if(!Bu(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=Z1(i.fieldTransforms,s,o.transformResults),l=s.data;l.setAll(gP(i)),l.setAll(a),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Ea(t,e,n,r){return t instanceof _l?function(s,o,a,l){if(!Bu(s.precondition,o))return a;const c=s.value.clone(),h=ew(s.fieldTransforms,l,o);return c.setAll(h),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof Yi?function(s,o,a,l){if(!Bu(s.precondition,o))return a;const c=ew(s.fieldTransforms,l,o),h=o.data;return h.setAll(gP(s)),h.setAll(c),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(f=>f.field))}(t,e,n,r):function(s,o,a){return Bu(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function qM(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=hP(r.transform,i||null);s!=null&&(n===null&&(n=Zt.empty()),n.set(r.field,s))}return n||null}function J1(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&to(r,i,(s,o)=>zM(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class _l extends Vh{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Yi extends Vh{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function gP(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Z1(t,e,n){const r=new Map;me(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,$M(o,a,n[i]))}return r}function ew(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,BM(s,o,e))}return r}class yP extends Vh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class KM extends Vh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class GM{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&HM(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Ea(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Ea(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=uP();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=mP(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(Z.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ie())}isEqual(e){return this.batchId===e.batchId&&to(this.mutations,e.mutations,(n,r)=>J1(n,r))&&to(this.baseMutations,e.baseMutations,(n,r)=>J1(n,r))}}class Zg{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){me(e.mutations.length===r.length);let i=function(){return LM}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Zg(e,n,r,i)}}/**
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
 */class QM{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class YM{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var je,oe;function XM(t){switch(t){default:return J();case F.CANCELLED:case F.UNKNOWN:case F.DEADLINE_EXCEEDED:case F.RESOURCE_EXHAUSTED:case F.INTERNAL:case F.UNAVAILABLE:case F.UNAUTHENTICATED:return!1;case F.INVALID_ARGUMENT:case F.NOT_FOUND:case F.ALREADY_EXISTS:case F.PERMISSION_DENIED:case F.FAILED_PRECONDITION:case F.ABORTED:case F.OUT_OF_RANGE:case F.UNIMPLEMENTED:case F.DATA_LOSS:return!0}}function vP(t){if(t===void 0)return sr("GRPC error has no .code"),F.UNKNOWN;switch(t){case je.OK:return F.OK;case je.CANCELLED:return F.CANCELLED;case je.UNKNOWN:return F.UNKNOWN;case je.DEADLINE_EXCEEDED:return F.DEADLINE_EXCEEDED;case je.RESOURCE_EXHAUSTED:return F.RESOURCE_EXHAUSTED;case je.INTERNAL:return F.INTERNAL;case je.UNAVAILABLE:return F.UNAVAILABLE;case je.UNAUTHENTICATED:return F.UNAUTHENTICATED;case je.INVALID_ARGUMENT:return F.INVALID_ARGUMENT;case je.NOT_FOUND:return F.NOT_FOUND;case je.ALREADY_EXISTS:return F.ALREADY_EXISTS;case je.PERMISSION_DENIED:return F.PERMISSION_DENIED;case je.FAILED_PRECONDITION:return F.FAILED_PRECONDITION;case je.ABORTED:return F.ABORTED;case je.OUT_OF_RANGE:return F.OUT_OF_RANGE;case je.UNIMPLEMENTED:return F.UNIMPLEMENTED;case je.DATA_LOSS:return F.DATA_LOSS;default:return J()}}(oe=je||(je={}))[oe.OK=0]="OK",oe[oe.CANCELLED=1]="CANCELLED",oe[oe.UNKNOWN=2]="UNKNOWN",oe[oe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",oe[oe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",oe[oe.NOT_FOUND=5]="NOT_FOUND",oe[oe.ALREADY_EXISTS=6]="ALREADY_EXISTS",oe[oe.PERMISSION_DENIED=7]="PERMISSION_DENIED",oe[oe.UNAUTHENTICATED=16]="UNAUTHENTICATED",oe[oe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",oe[oe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",oe[oe.ABORTED=10]="ABORTED",oe[oe.OUT_OF_RANGE=11]="OUT_OF_RANGE",oe[oe.UNIMPLEMENTED=12]="UNIMPLEMENTED",oe[oe.INTERNAL=13]="INTERNAL",oe[oe.UNAVAILABLE=14]="UNAVAILABLE",oe[oe.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function JM(){return new TextEncoder}/**
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
 */const ZM=new ki([4294967295,4294967295],0);function tw(t){const e=JM().encode(t),n=new BI;return n.update(e),new Uint8Array(n.digest())}function nw(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new ki([n,r],0),new ki([i,s],0)]}class ey{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new ra(`Invalid padding: ${n}`);if(r<0)throw new ra(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ra(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new ra(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=ki.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(ki.fromNumber(r)));return i.compare(ZM)===1&&(i=new ki([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=tw(e),[r,i]=nw(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new ey(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ie===0)return;const n=tw(e),[r,i]=nw(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class ra extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Dh{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,wl.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Dh(Z.min(),i,new Ve(ue),or(),ie())}}class wl{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new wl(r,n,ie(),ie(),ie())}}/**
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
 */class $u{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class _P{constructor(e,n){this.targetId=e,this.me=n}}class wP{constructor(e,n,r=it.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class rw{constructor(){this.fe=0,this.ge=sw(),this.pe=it.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=ie(),n=ie(),r=ie();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:J()}}),new wl(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=sw()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,me(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class e5{constructor(e){this.Le=e,this.Be=new Map,this.ke=or(),this.qe=iw(),this.Qe=new Ve(ue)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:J()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(Xp(s))if(r===0){const o=new G(s.path);this.Ue(n,o,pt.newNoDocument(o,Z.min()))}else me(r===1);else{const o=this.Ye(n);if(o!==r){const a=this.Ze(e),l=a?this.Xe(a,e,o):1;if(l!==0){this.je(n);const c=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,c)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=Hi(r).toUint8Array()}catch(l){if(l instanceof YI)return eo("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new ey(o,i,s)}catch(l){return eo(l instanceof ra?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Ie===0?null:a}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const a=this.Je(o);if(a){if(s.current&&Xp(a.target)){const l=new G(a.target.path);this.ke.get(l)!==null||this.it(o,l)||this.Ue(o,l,pt.newNoDocument(l,e))}s.be&&(n.set(o,s.ve()),s.Ce())}});let r=ie();this.qe.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const c=this.Je(l);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new Dh(e,n,this.Qe,this.ke,r);return this.ke=or(),this.qe=iw(),this.Qe=new Ve(ue),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new rw,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new nt(ue),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||q("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new rw),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function iw(){return new Ve(G.comparator)}function sw(){return new Ve(G.comparator)}const t5={asc:"ASCENDING",desc:"DESCENDING"},n5={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},r5={and:"AND",or:"OR"};class i5{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function em(t,e){return t.useProto3Json||Ch(e)?e:{value:e}}function Mc(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function EP(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function s5(t,e){return Mc(t,e.toTimestamp())}function Rn(t){return me(!!t),Z.fromTimestamp(function(n){const r=Xr(n);return new He(r.seconds,r.nanos)}(t))}function ty(t,e){return tm(t,e).canonicalString()}function tm(t,e){const n=function(i){return new Se(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function TP(t){const e=Se.fromString(t);return me(CP(e)),e}function nm(t,e){return ty(t.databaseId,e.path)}function af(t,e){const n=TP(e);if(n.get(1)!==t.databaseId.projectId)throw new H(F.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new H(F.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new G(xP(n))}function SP(t,e){return ty(t.databaseId,e)}function o5(t){const e=TP(t);return e.length===4?Se.emptyPath():xP(e)}function rm(t){return new Se(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function xP(t){return me(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function ow(t,e,n){return{name:nm(t,e),fields:n.value.mapValue.fields}}function a5(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:J()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,h){return c.useProto3Json?(me(h===void 0||typeof h=="string"),it.fromBase64String(h||"")):(me(h===void 0||h instanceof Buffer||h instanceof Uint8Array),it.fromUint8Array(h||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const h=c.code===void 0?F.UNKNOWN:vP(c.code);return new H(h,c.message||"")}(o);n=new wP(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=af(t,r.document.name),s=Rn(r.document.updateTime),o=r.document.createTime?Rn(r.document.createTime):Z.min(),a=new Zt({mapValue:{fields:r.document.fields}}),l=pt.newFoundDocument(i,s,o,a),c=r.targetIds||[],h=r.removedTargetIds||[];n=new $u(c,h,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=af(t,r.document),s=r.readTime?Rn(r.readTime):Z.min(),o=pt.newNoDocument(i,s),a=r.removedTargetIds||[];n=new $u([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=af(t,r.document),s=r.removedTargetIds||[];n=new $u([],s,i,null)}else{if(!("filter"in e))return J();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new YM(i,s),a=r.targetId;n=new _P(a,o)}}return n}function l5(t,e){let n;if(e instanceof _l)n={update:ow(t,e.key,e.value)};else if(e instanceof yP)n={delete:nm(t,e.key)};else if(e instanceof Yi)n={update:ow(t,e.key,e.data),updateMask:y5(e.fieldMask)};else{if(!(e instanceof KM))return J();n={verify:nm(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof Oc)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof el)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof tl)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Lc)return{fieldPath:o.field.canonicalString(),increment:a.Pe};throw J()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:s5(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:J()}(t,e.precondition)),n}function u5(t,e){return t&&t.length>0?(me(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?Rn(i.updateTime):Rn(s);return o.isEqual(Z.min())&&(o=Rn(s)),new WM(o,i.transformResults||[])}(n,e))):[]}function c5(t,e){return{documents:[SP(t,e.path)]}}function h5(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=SP(t,i);const s=function(c){if(c.length!==0)return PP(yn.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(h=>function(p){return{field:as(p.field),direction:p5(p.dir)}}(h))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=em(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{_t:n,parent:i}}function d5(t){let e=o5(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){me(r===1);const h=n.from[0];h.allDescendants?i=h.collectionId:e=e.child(h.collectionId)}let s=[];n.where&&(s=function(f){const p=IP(f);return p instanceof yn&&eP(p)?p.getFilters():[p]}(n.where));let o=[];n.orderBy&&(o=function(f){return f.map(p=>function(x){return new Nc(ls(x.field),function(R){switch(R){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(x.direction))}(p))}(n.orderBy));let a=null;n.limit&&(a=function(f){let p;return p=typeof f=="object"?f.value:f,Ch(p)?null:p}(n.limit));let l=null;n.startAt&&(l=function(f){const p=!!f.before,y=f.values||[];return new Dc(y,p)}(n.startAt));let c=null;return n.endAt&&(c=function(f){const p=!f.before,y=f.values||[];return new Dc(y,p)}(n.endAt)),bM(e,i,o,s,a,"F",l,c)}function f5(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return J()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function IP(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=ls(n.unaryFilter.field);return Be.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=ls(n.unaryFilter.field);return Be.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=ls(n.unaryFilter.field);return Be.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ls(n.unaryFilter.field);return Be.create(o,"!=",{nullValue:"NULL_VALUE"});default:return J()}}(t):t.fieldFilter!==void 0?function(n){return Be.create(ls(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return J()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return yn.create(n.compositeFilter.filters.map(r=>IP(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return J()}}(n.compositeFilter.op))}(t):J()}function p5(t){return t5[t]}function m5(t){return n5[t]}function g5(t){return r5[t]}function as(t){return{fieldPath:t.canonicalString()}}function ls(t){return et.fromServerFormat(t.fieldPath)}function PP(t){return t instanceof Be?function(n){if(n.op==="=="){if(q1(n.value))return{unaryFilter:{field:as(n.field),op:"IS_NAN"}};if(H1(n.value))return{unaryFilter:{field:as(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(q1(n.value))return{unaryFilter:{field:as(n.field),op:"IS_NOT_NAN"}};if(H1(n.value))return{unaryFilter:{field:as(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:as(n.field),op:m5(n.op),value:n.value}}}(t):t instanceof yn?function(n){const r=n.getFilters().map(i=>PP(i));return r.length===1?r[0]:{compositeFilter:{op:g5(n.op),filters:r}}}(t):J()}function y5(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function CP(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class Vr{constructor(e,n,r,i,s=Z.min(),o=Z.min(),a=it.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new Vr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Vr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Vr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Vr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class v5{constructor(e){this.ct=e}}function _5(t){const e=d5({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Zp(e,e.limit,"L"):e}/**
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
 */class w5{constructor(){this.un=new E5}addToCollectionParentIndex(e,n){return this.un.add(n),U.resolve()}getCollectionParents(e,n){return U.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return U.resolve()}deleteFieldIndex(e,n){return U.resolve()}deleteAllFieldIndexes(e){return U.resolve()}createTargetIndexes(e,n){return U.resolve()}getDocumentsMatchingTarget(e,n){return U.resolve(null)}getIndexType(e,n){return U.resolve(0)}getFieldIndexes(e,n){return U.resolve([])}getNextCollectionGroupToUpdate(e){return U.resolve(null)}getMinOffset(e,n){return U.resolve(Yr.min())}getMinOffsetFromCollectionGroup(e,n){return U.resolve(Yr.min())}updateCollectionGroup(e,n,r){return U.resolve()}updateIndexEntries(e,n){return U.resolve()}}class E5{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new nt(Se.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new nt(Se.comparator)).toArray()}}/**
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
 */class io{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new io(0)}static kn(){return new io(-1)}}/**
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
 */class T5{constructor(){this.changes=new wo(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,pt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?U.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class S5{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class x5{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Ea(r.mutation,i,hn.empty(),He.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ie()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ie()){const i=Si();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=na();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Si();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ie()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=or();const o=wa(),a=function(){return wa()}();return n.forEach((l,c)=>{const h=r.get(c.key);i.has(c.key)&&(h===void 0||h.mutation instanceof Yi)?s=s.insert(c.key,c):h!==void 0?(o.set(c.key,h.mutation.getFieldMask()),Ea(h.mutation,c,h.mutation.getFieldMask(),He.now())):o.set(c.key,hn.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((c,h)=>o.set(c,h)),n.forEach((c,h)=>{var f;return a.set(c,new S5(h,(f=o.get(c))!==null&&f!==void 0?f:null))}),a))}recalculateAndSaveOverlays(e,n){const r=wa();let i=new Ve((o,a)=>o-a),s=ie();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=n.get(l);if(c===null)return;let h=r.get(l)||hn.empty();h=a.applyToLocalView(c,h),r.set(l,h);const f=(i.get(a.batchId)||ie()).add(l);i=i.insert(a.batchId,f)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,h=l.value,f=uP();h.forEach(p=>{if(!s.has(p)){const y=mP(n.get(p),r.get(p));y!==null&&f.set(p,y),s=s.add(p)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,f))}return U.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return G.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):iP(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):U.resolve(Si());let a=-1,l=s;return o.next(c=>U.forEach(c,(h,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),s.get(h)?U.resolve():this.remoteDocumentCache.getEntry(e,h).next(p=>{l=l.insert(h,p)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,l,c,ie())).next(h=>({batchId:a,changes:lP(h)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new G(n)).next(r=>{let i=na();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=na();return this.indexManager.getCollectionParents(e,s).next(a=>U.forEach(a,l=>{const c=function(f,p){return new vl(p,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(n,l.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(h=>{h.forEach((f,p)=>{o=o.insert(f,p)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((l,c)=>{const h=c.getKey();o.get(h)===null&&(o=o.insert(h,pt.newInvalidDocument(h)))});let a=na();return o.forEach((l,c)=>{const h=s.get(l);h!==void 0&&Ea(h.mutation,c,hn.empty(),He.now()),kh(n,c)&&(a=a.insert(l,c))}),a})}}/**
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
 */class I5{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return U.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Rn(i.createTime)}}(n)),U.resolve()}getNamedQuery(e,n){return U.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(i){return{name:i.name,query:_5(i.bundledQuery),readTime:Rn(i.readTime)}}(n)),U.resolve()}}/**
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
 */class P5{constructor(){this.overlays=new Ve(G.comparator),this.Ir=new Map}getOverlay(e,n){return U.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Si();return U.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),U.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(r)),U.resolve()}getOverlaysForCollection(e,n,r){const i=Si(),s=n.length+1,o=new G(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return U.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Ve((c,h)=>c-h);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let h=s.get(c.largestBatchId);h===null&&(h=Si(),s=s.insert(c.largestBatchId,h)),h.set(c.getKey(),c)}}const a=Si(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,h)=>a.set(c,h)),!(a.size()>=i)););return U.resolve(a)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new QM(n,r));let s=this.Ir.get(n);s===void 0&&(s=ie(),this.Ir.set(n,s)),this.Ir.set(n,s.add(r.key))}}/**
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
 */class C5{constructor(){this.sessionToken=it.EMPTY_BYTE_STRING}getSessionToken(e){return U.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,U.resolve()}}/**
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
 */class ny{constructor(){this.Tr=new nt(qe.Er),this.dr=new nt(qe.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new qe(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new qe(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new G(new Se([])),r=new qe(n,e),i=new qe(n,e+1),s=[];return this.dr.forEachInRange([r,i],o=>{this.Vr(o),s.push(o.key)}),s}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new G(new Se([])),r=new qe(n,e),i=new qe(n,e+1);let s=ie();return this.dr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new qe(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class qe{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return G.comparator(e.key,n.key)||ue(e.wr,n.wr)}static Ar(e,n){return ue(e.wr,n.wr)||G.comparator(e.key,n.key)}}/**
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
 */class A5{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new nt(qe.Er)}checkEmpty(e){return U.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new GM(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.br=this.br.add(new qe(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return U.resolve(o)}lookupMutationBatch(e,n){return U.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.vr(r),s=i<0?0:i;return U.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return U.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return U.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new qe(n,0),i=new qe(n,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([r,i],o=>{const a=this.Dr(o.wr);s.push(a)}),U.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new nt(ue);return n.forEach(i=>{const s=new qe(i,0),o=new qe(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,o],a=>{r=r.add(a.wr)})}),U.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;G.isDocumentKey(s)||(s=s.child(""));const o=new qe(new G(s),0);let a=new nt(ue);return this.br.forEachWhile(l=>{const c=l.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(a=a.add(l.wr)),!0)},o),U.resolve(this.Cr(a))}Cr(e){const n=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){me(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return U.forEach(n.mutations,i=>{const s=new qe(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new qe(n,0),i=this.br.firstAfterOrEqual(r);return U.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,U.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class R5{constructor(e){this.Mr=e,this.docs=function(){return new Ve(G.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return U.resolve(r?r.document.mutableCopy():pt.newInvalidDocument(n))}getEntries(e,n){let r=or();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():pt.newInvalidDocument(i))}),U.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=or();const o=n.path,a=new G(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:c,value:{document:h}}=l.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||dM(hM(h),r)<=0||(i.has(h.key)||kh(n,h))&&(s=s.insert(h.key,h.mutableCopy()))}return U.resolve(s)}getAllFromCollectionGroup(e,n,r,i){J()}Or(e,n){return U.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new k5(this)}getSize(e){return U.resolve(this.size)}}class k5 extends T5{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),U.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
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
 */class b5{constructor(e){this.persistence=e,this.Nr=new wo(n=>Yg(n),Xg),this.lastRemoteSnapshotVersion=Z.min(),this.highestTargetId=0,this.Lr=0,this.Br=new ny,this.targetCount=0,this.kr=io.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,i)=>n(i)),U.resolve()}getLastRemoteSnapshotVersion(e){return U.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return U.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),U.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),U.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new io(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,U.resolve()}updateTargetData(e,n){return this.Kn(n),U.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,U.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Nr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Nr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),U.waitFor(s).next(()=>i)}getTargetCount(e){return U.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return U.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),U.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),U.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),U.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return U.resolve(r)}containsKey(e,n){return U.resolve(this.Br.containsKey(n))}}/**
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
 */class V5{constructor(e,n){this.qr={},this.overlays={},this.Qr=new qg(0),this.Kr=!1,this.Kr=!0,this.$r=new C5,this.referenceDelegate=e(this),this.Ur=new b5(this),this.indexManager=new w5,this.remoteDocumentCache=function(i){return new R5(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new v5(n),this.Gr=new I5(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new P5,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new A5(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){q("MemoryPersistence","Starting transaction:",e);const i=new D5(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(e,n){return U.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class D5 extends pM{constructor(e){super(),this.currentSequenceNumber=e}}class ry{constructor(e){this.persistence=e,this.Jr=new ny,this.Yr=null}static Zr(e){return new ry(e)}get Xr(){if(this.Yr)return this.Yr;throw J()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),U.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),U.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),U.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return U.forEach(this.Xr,r=>{const i=G.fromPath(r);return this.ei(e,i).next(s=>{s||n.removeEntry(i,Z.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return U.or([()=>U.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
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
 */class iy{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=i}static Wi(e,n){let r=ie(),i=ie();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new iy(e,n.fromCache,r,i)}}/**
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
 */class N5{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class O5{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return jO()?8:mM(vt())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.Yi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Zi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new N5;return this.Xi(e,n,o).next(a=>{if(s.result=a,this.zi)return this.es(e,n,o,a.size)})}).next(()=>s.result)}es(e,n,r,i){return r.documentReadCount<this.ji?(Ho()<=se.DEBUG&&q("QueryEngine","SDK will not create cache indexes for query:",os(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),U.resolve()):(Ho()<=se.DEBUG&&q("QueryEngine","Query:",os(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(Ho()<=se.DEBUG&&q("QueryEngine","The SDK decides to create cache indexes for query:",os(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,An(n))):U.resolve())}Yi(e,n){if(Y1(n))return U.resolve(null);let r=An(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Zp(n,null,"F"),r=An(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=ie(...s);return this.Ji.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const c=this.ts(n,a);return this.ns(n,c,o,l.readTime)?this.Yi(e,Zp(n,null,"F")):this.rs(e,c,n,l)}))})))}Zi(e,n,r,i){return Y1(n)||i.isEqual(Z.min())?U.resolve(null):this.Ji.getDocuments(e,r).next(s=>{const o=this.ts(n,s);return this.ns(n,o,r,i)?U.resolve(null):(Ho()<=se.DEBUG&&q("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),os(n)),this.rs(e,o,n,cM(i,-1)).next(a=>a))})}ts(e,n){let r=new nt(oP(e));return n.forEach((i,s)=>{kh(e,s)&&(r=r.add(s))}),r}ns(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(e,n,r){return Ho()<=se.DEBUG&&q("QueryEngine","Using full collection scan to execute query:",os(n)),this.Ji.getDocumentsMatchingQuery(e,n,Yr.min(),r)}rs(e,n,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class L5{constructor(e,n,r,i){this.persistence=e,this.ss=n,this.serializer=i,this.os=new Ve(ue),this._s=new wo(s=>Yg(s),Xg),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new x5(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function M5(t,e,n,r){return new L5(t,e,n,r)}async function AP(t,e){const n=ee(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=ie();for(const c of i){o.push(c.batchId);for(const h of c.mutations)l=l.add(h.key)}for(const c of s){a.push(c.batchId);for(const h of c.mutations)l=l.add(h.key)}return n.localDocuments.getDocuments(r,l).next(c=>({hs:c,removedBatchIds:o,addedBatchIds:a}))})})}function j5(t,e){const n=ee(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.cs.newChangeBuffer({trackRemovals:!0});return function(a,l,c,h){const f=c.batch,p=f.keys();let y=U.resolve();return p.forEach(x=>{y=y.next(()=>h.getEntry(l,x)).next(I=>{const R=c.docVersions.get(x);me(R!==null),I.version.compareTo(R)<0&&(f.applyToRemoteDocument(I,c),I.isValidDocument()&&(I.setReadTime(c.commitVersion),h.addEntry(I)))})}),y.next(()=>a.mutationQueue.removeMutationBatch(l,f))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=ie();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(l=l.add(a.batch.mutations[c].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function RP(t){const e=ee(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function F5(t,e){const n=ee(t),r=e.snapshotVersion;let i=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});i=n.os;const a=[];e.targetChanges.forEach((h,f)=>{const p=i.get(f);if(!p)return;a.push(n.Ur.removeMatchingKeys(s,h.removedDocuments,f).next(()=>n.Ur.addMatchingKeys(s,h.addedDocuments,f)));let y=p.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(f)!==null?y=y.withResumeToken(it.EMPTY_BYTE_STRING,Z.min()).withLastLimboFreeSnapshotVersion(Z.min()):h.resumeToken.approximateByteSize()>0&&(y=y.withResumeToken(h.resumeToken,r)),i=i.insert(f,y),function(I,R,w){return I.resumeToken.approximateByteSize()===0||R.snapshotVersion.toMicroseconds()-I.snapshotVersion.toMicroseconds()>=3e8?!0:w.addedDocuments.size+w.modifiedDocuments.size+w.removedDocuments.size>0}(p,y,h)&&a.push(n.Ur.updateTargetData(s,y))});let l=or(),c=ie();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,h))}),a.push(U5(s,o,e.documentUpdates).next(h=>{l=h.Ps,c=h.Is})),!r.isEqual(Z.min())){const h=n.Ur.getLastRemoteSnapshotVersion(s).next(f=>n.Ur.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(h)}return U.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,c)).next(()=>l)}).then(s=>(n.os=i,s))}function U5(t,e,n){let r=ie(),i=ie();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=or();return n.forEach((a,l)=>{const c=s.get(a);l.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(Z.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):q("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",l.version)}),{Ps:o,Is:i}})}function B5(t,e){const n=ee(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function $5(t,e){const n=ee(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Ur.getTargetData(r,e).next(s=>s?(i=s,U.resolve(i)):n.Ur.allocateTargetId(r).next(o=>(i=new Vr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function im(t,e,n){const r=ee(t),i=r.os.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!yl(o))throw o;q("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function aw(t,e,n){const r=ee(t);let i=Z.min(),s=ie();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,c,h){const f=ee(l),p=f._s.get(h);return p!==void 0?U.resolve(f.os.get(p)):f.Ur.getTargetData(c,h)}(r,o,An(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?i:Z.min(),n?s:ie())).next(a=>(z5(r,DM(e),a),{documents:a,Ts:s})))}function z5(t,e,n){let r=t.us.get(e)||Z.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.us.set(e,r)}class lw{constructor(){this.activeTargetIds=FM()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class W5{constructor(){this.so=new lw,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new lw,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class H5{_o(e){}shutdown(){}}/**
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
 */class uw{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){q("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){q("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let mu=null;function lf(){return mu===null?mu=function(){return 268435456+Math.round(2147483648*Math.random())}():mu++,"0x"+mu.toString(16)}/**
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
 */const q5={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class K5{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
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
 */const ct="WebChannelConnection";class G5 extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(n,r,i,s,o){const a=lf(),l=this.xo(n,r.toUriEncodedString());q("RestConnection",`Sending RPC '${n}' ${a}:`,l,i);const c={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(c,s,o),this.No(n,l,c,i).then(h=>(q("RestConnection",`Received RPC '${n}' ${a}: `,h),h),h=>{throw eo("RestConnection",`RPC '${n}' ${a} failed with error: `,h,"url: ",l,"request:",i),h})}Lo(n,r,i,s,o,a){return this.Mo(n,r,i,s,o)}Oo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+vo}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}xo(n,r){const i=q5[n];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,i){const s=lf();return new Promise((o,a)=>{const l=new $I;l.setWithCredentials(!0),l.listenOnce(zI.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Fu.NO_ERROR:const h=l.getResponseJson();q(ct,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(h)),o(h);break;case Fu.TIMEOUT:q(ct,`RPC '${e}' ${s} timed out`),a(new H(F.DEADLINE_EXCEEDED,"Request time out"));break;case Fu.HTTP_ERROR:const f=l.getStatus();if(q(ct,`RPC '${e}' ${s} failed with status:`,f,"response text:",l.getResponseText()),f>0){let p=l.getResponseJson();Array.isArray(p)&&(p=p[0]);const y=p==null?void 0:p.error;if(y&&y.status&&y.message){const x=function(R){const w=R.toLowerCase().replace(/_/g,"-");return Object.values(F).indexOf(w)>=0?w:F.UNKNOWN}(y.status);a(new H(x,y.message))}else a(new H(F.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new H(F.UNAVAILABLE,"Connection failed."));break;default:J()}}finally{q(ct,`RPC '${e}' ${s} completed.`)}});const c=JSON.stringify(i);q(ct,`RPC '${e}' ${s} sending request:`,i),l.send(n,"POST",c,r,15)})}Bo(e,n,r){const i=lf(),s=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=qI(),a=HI(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(l.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Oo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const h=s.join("");q(ct,`Creating RPC '${e}' stream ${i}: ${h}`,l);const f=o.createWebChannel(h,l);let p=!1,y=!1;const x=new K5({Io:R=>{y?q(ct,`Not sending because RPC '${e}' stream ${i} is closed:`,R):(p||(q(ct,`Opening RPC '${e}' stream ${i} transport.`),f.open(),p=!0),q(ct,`RPC '${e}' stream ${i} sending:`,R),f.send(R))},To:()=>f.close()}),I=(R,w,_)=>{R.listen(w,S=>{try{_(S)}catch(b){setTimeout(()=>{throw b},0)}})};return I(f,ta.EventType.OPEN,()=>{y||(q(ct,`RPC '${e}' stream ${i} transport opened.`),x.yo())}),I(f,ta.EventType.CLOSE,()=>{y||(y=!0,q(ct,`RPC '${e}' stream ${i} transport closed`),x.So())}),I(f,ta.EventType.ERROR,R=>{y||(y=!0,eo(ct,`RPC '${e}' stream ${i} transport errored:`,R),x.So(new H(F.UNAVAILABLE,"The operation could not be completed")))}),I(f,ta.EventType.MESSAGE,R=>{var w;if(!y){const _=R.data[0];me(!!_);const S=_,b=S.error||((w=S[0])===null||w===void 0?void 0:w.error);if(b){q(ct,`RPC '${e}' stream ${i} received error:`,b);const O=b.status;let M=function(P){const C=je[P];if(C!==void 0)return vP(C)}(O),T=b.message;M===void 0&&(M=F.INTERNAL,T="Unknown error status: "+O+" with message "+b.message),y=!0,x.So(new H(M,T)),f.close()}else q(ct,`RPC '${e}' stream ${i} received:`,_),x.bo(_)}}),I(a,WI.STAT_EVENT,R=>{R.stat===Kp.PROXY?q(ct,`RPC '${e}' stream ${i} detected buffering proxy`):R.stat===Kp.NOPROXY&&q(ct,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{x.wo()},0),x}}function uf(){return typeof document<"u"?document:null}/**
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
 */function Nh(t){return new i5(t,!0)}/**
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
 */class kP{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-r);i>0&&q("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class bP{constructor(e,n,r,i,s,o,a,l){this.ui=e,this.Ho=r,this.Jo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new kP(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===F.RESOURCE_EXHAUSTED?(sr(n.toString()),sr("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===F.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===n&&this.P_(r,i)},r=>{e(()=>{const i=new H(F.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return q("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(q("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Q5 extends bP{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=a5(this.serializer,e),r=function(s){if(!("targetChange"in s))return Z.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?Z.min():o.readTime?Rn(o.readTime):Z.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=rm(this.serializer),n.addTarget=function(s,o){let a;const l=o.target;if(a=Xp(l)?{documents:c5(s,l)}:{query:h5(s,l)._t},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=EP(s,o.resumeToken);const c=em(s,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(Z.min())>0){a.readTime=Mc(s,o.snapshotVersion.toTimestamp());const c=em(s,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,e);const r=f5(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=rm(this.serializer),n.removeTarget=e,this.a_(n)}}class Y5 extends bP{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return me(!!e.streamToken),this.lastStreamToken=e.streamToken,me(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){me(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=u5(e.writeResults,e.commitTime),r=Rn(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=rm(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>l5(this.serializer,r))};this.a_(n)}}/**
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
 */class X5 extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new H(F.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Mo(e,tm(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===F.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new H(F.UNKNOWN,s.toString())})}Lo(e,n,r,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Lo(e,tm(n,r),i,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===F.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new H(F.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class J5{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
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
 */class Z5{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(o=>{r.enqueueAndForget(async()=>{Xi(this)&&(q("RemoteStore","Restarting streams for network reachability change."),await async function(l){const c=ee(l);c.L_.add(4),await El(c),c.q_.set("Unknown"),c.L_.delete(4),await Oh(c)}(this))})}),this.q_=new J5(r,i)}}async function Oh(t){if(Xi(t))for(const e of t.B_)await e(!0)}async function El(t){for(const e of t.B_)await e(!1)}function VP(t,e){const n=ee(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),ly(n)?ay(n):Eo(n).r_()&&oy(n,e))}function sy(t,e){const n=ee(t),r=Eo(n);n.N_.delete(e),r.r_()&&DP(n,e),n.N_.size===0&&(r.r_()?r.o_():Xi(n)&&n.q_.set("Unknown"))}function oy(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Z.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Eo(t).A_(e)}function DP(t,e){t.Q_.xe(e),Eo(t).R_(e)}function ay(t){t.Q_=new e5({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),Eo(t).start(),t.q_.v_()}function ly(t){return Xi(t)&&!Eo(t).n_()&&t.N_.size>0}function Xi(t){return ee(t).L_.size===0}function NP(t){t.Q_=void 0}async function e6(t){t.q_.set("Online")}async function t6(t){t.N_.forEach((e,n)=>{oy(t,e)})}async function n6(t,e){NP(t),ly(t)?(t.q_.M_(e),ay(t)):t.q_.set("Unknown")}async function r6(t,e,n){if(t.q_.set("Online"),e instanceof wP&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.N_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.N_.delete(a),i.Q_.removeTarget(a))}(t,e)}catch(r){q("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await jc(t,r)}else if(e instanceof $u?t.Q_.Ke(e):e instanceof _P?t.Q_.He(e):t.Q_.We(e),!n.isEqual(Z.min()))try{const r=await RP(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.Q_.rt(o);return a.targetChanges.forEach((l,c)=>{if(l.resumeToken.approximateByteSize()>0){const h=s.N_.get(c);h&&s.N_.set(c,h.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,c)=>{const h=s.N_.get(l);if(!h)return;s.N_.set(l,h.withResumeToken(it.EMPTY_BYTE_STRING,h.snapshotVersion)),DP(s,l);const f=new Vr(h.target,l,c,h.sequenceNumber);oy(s,f)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){q("RemoteStore","Failed to raise snapshot:",r),await jc(t,r)}}async function jc(t,e,n){if(!yl(e))throw e;t.L_.add(1),await El(t),t.q_.set("Offline"),n||(n=()=>RP(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{q("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await Oh(t)})}function OP(t,e){return e().catch(n=>jc(t,n,e))}async function Lh(t){const e=ee(t),n=Jr(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;i6(e);)try{const i=await B5(e.localStore,r);if(i===null){e.O_.length===0&&n.o_();break}r=i.batchId,s6(e,i)}catch(i){await jc(e,i)}LP(e)&&MP(e)}function i6(t){return Xi(t)&&t.O_.length<10}function s6(t,e){t.O_.push(e);const n=Jr(t);n.r_()&&n.V_&&n.m_(e.mutations)}function LP(t){return Xi(t)&&!Jr(t).n_()&&t.O_.length>0}function MP(t){Jr(t).start()}async function o6(t){Jr(t).p_()}async function a6(t){const e=Jr(t);for(const n of t.O_)e.m_(n.mutations)}async function l6(t,e,n){const r=t.O_.shift(),i=Zg.from(r,e,n);await OP(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Lh(t)}async function u6(t,e){e&&Jr(t).V_&&await async function(r,i){if(function(o){return XM(o)&&o!==F.ABORTED}(i.code)){const s=r.O_.shift();Jr(r).s_(),await OP(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Lh(r)}}(t,e),LP(t)&&MP(t)}async function cw(t,e){const n=ee(t);n.asyncQueue.verifyOperationInProgress(),q("RemoteStore","RemoteStore received new credentials");const r=Xi(n);n.L_.add(3),await El(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await Oh(n)}async function c6(t,e){const n=ee(t);e?(n.L_.delete(2),await Oh(n)):e||(n.L_.add(2),await El(n),n.q_.set("Unknown"))}function Eo(t){return t.K_||(t.K_=function(n,r,i){const s=ee(n);return s.w_(),new Q5(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:e6.bind(null,t),Ro:t6.bind(null,t),mo:n6.bind(null,t),d_:r6.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),ly(t)?ay(t):t.q_.set("Unknown")):(await t.K_.stop(),NP(t))})),t.K_}function Jr(t){return t.U_||(t.U_=function(n,r,i){const s=ee(n);return s.w_(),new Y5(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:o6.bind(null,t),mo:u6.bind(null,t),f_:a6.bind(null,t),g_:l6.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await Lh(t)):(await t.U_.stop(),t.O_.length>0&&(q("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
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
 */class uy{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Jn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new uy(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new H(F.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function cy(t,e){if(sr("AsyncQueue",`${e}: ${t}`),yl(t))return new H(F.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Ns{constructor(e){this.comparator=e?(n,r)=>e(n,r)||G.comparator(n.key,r.key):(n,r)=>G.comparator(n.key,r.key),this.keyedMap=na(),this.sortedSet=new Ve(this.comparator)}static emptySet(e){return new Ns(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ns)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Ns;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class hw{constructor(){this.W_=new Ve(G.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):J():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class so{constructor(e,n,r,i,s,o,a,l,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new so(e,n,Ns.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Rh(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class h6{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class d6{constructor(){this.queries=dw(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const i=ee(n),s=i.queries;i.queries=dw(),s.forEach((o,a)=>{for(const l of a.j_)l.onError(r)})})(this,new H(F.ABORTED,"Firestore shutting down"))}}function dw(){return new wo(t=>sP(t),Rh)}async function hy(t,e){const n=ee(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.H_()&&e.J_()&&(r=2):(s=new h6,r=e.J_()?0:1);try{switch(r){case 0:s.z_=await n.onListen(i,!0);break;case 1:s.z_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const a=cy(o,`Initialization of query '${os(e.query)}' failed`);return void e.onError(a)}n.queries.set(i,s),s.j_.push(e),e.Z_(n.onlineState),s.z_&&e.X_(s.z_)&&fy(n)}async function dy(t,e){const n=ee(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.j_.indexOf(e);o>=0&&(s.j_.splice(o,1),s.j_.length===0?i=e.J_()?0:1:!s.H_()&&e.J_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function f6(t,e){const n=ee(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.j_)a.X_(i)&&(r=!0);o.z_=i}}r&&fy(n)}function p6(t,e,n){const r=ee(t),i=r.queries.get(e);if(i)for(const s of i.j_)s.onError(n);r.queries.delete(e)}function fy(t){t.Y_.forEach(e=>{e.next()})}var sm,fw;(fw=sm||(sm={})).ea="default",fw.Cache="cache";class py{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new so(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=so.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==sm.Cache}}/**
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
 */class jP{constructor(e){this.key=e}}class FP{constructor(e){this.key=e}}class m6{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=ie(),this.mutatedKeys=ie(),this.Aa=oP(e),this.Ra=new Ns(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new hw,i=n?n.Ra:this.Ra;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((h,f)=>{const p=i.get(h),y=kh(this.query,f)?f:null,x=!!p&&this.mutatedKeys.has(p.key),I=!!y&&(y.hasLocalMutations||this.mutatedKeys.has(y.key)&&y.hasCommittedMutations);let R=!1;p&&y?p.data.isEqual(y.data)?x!==I&&(r.track({type:3,doc:y}),R=!0):this.ga(p,y)||(r.track({type:2,doc:y}),R=!0,(l&&this.Aa(y,l)>0||c&&this.Aa(y,c)<0)&&(a=!0)):!p&&y?(r.track({type:0,doc:y}),R=!0):p&&!y&&(r.track({type:1,doc:p}),R=!0,(l||c)&&(a=!0)),R&&(y?(o=o.add(y),s=I?s.add(h):s.delete(h)):(o=o.delete(h),s=s.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),s=s.delete(h.key),r.track({type:1,doc:h})}return{Ra:o,fa:r,ns:a,mutatedKeys:s}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((h,f)=>function(y,x){const I=R=>{switch(R){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return J()}};return I(y)-I(x)}(h.type,f.type)||this.Aa(h.doc,f.doc)),this.pa(r),i=i!=null&&i;const a=n&&!i?this.ya():[],l=this.da.size===0&&this.current&&!i?1:0,c=l!==this.Ea;return this.Ea=l,o.length!==0||c?{snapshot:new so(this.query,e.Ra,s,o,e.mutatedKeys,l===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:a}:{wa:a}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new hw,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=ie(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new FP(r))}),this.da.forEach(r=>{e.has(r)||n.push(new jP(r))}),n}ba(e){this.Ta=e.Ts,this.da=ie();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return so.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class g6{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class y6{constructor(e){this.key=e,this.va=!1}}class v6{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new wo(a=>sP(a),Rh),this.Ma=new Map,this.xa=new Set,this.Oa=new Ve(G.comparator),this.Na=new Map,this.La=new ny,this.Ba={},this.ka=new Map,this.qa=io.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function _6(t,e,n=!0){const r=HP(t);let i;const s=r.Fa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await UP(r,e,n,!0),i}async function w6(t,e){const n=HP(t);await UP(n,e,!0,!1)}async function UP(t,e,n,r){const i=await $5(t.localStore,An(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let a;return r&&(a=await E6(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&VP(t.remoteStore,i),a}async function E6(t,e,n,r,i){t.Ka=(f,p,y)=>async function(I,R,w,_){let S=R.view.ma(w);S.ns&&(S=await aw(I.localStore,R.query,!1).then(({documents:T})=>R.view.ma(T,S)));const b=_&&_.targetChanges.get(R.targetId),O=_&&_.targetMismatches.get(R.targetId)!=null,M=R.view.applyChanges(S,I.isPrimaryClient,b,O);return mw(I,R.targetId,M.wa),M.snapshot}(t,f,p,y);const s=await aw(t.localStore,e,!0),o=new m6(e,s.Ts),a=o.ma(s.documents),l=wl.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(a,t.isPrimaryClient,l);mw(t,n,c.wa);const h=new g6(e,n,o);return t.Fa.set(e,h),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),c.snapshot}async function T6(t,e,n){const r=ee(t),i=r.Fa.get(e),s=r.Ma.get(i.targetId);if(s.length>1)return r.Ma.set(i.targetId,s.filter(o=>!Rh(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await im(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&sy(r.remoteStore,i.targetId),om(r,i.targetId)}).catch(gl)):(om(r,i.targetId),await im(r.localStore,i.targetId,!0))}async function S6(t,e){const n=ee(t),r=n.Fa.get(e),i=n.Ma.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),sy(n.remoteStore,r.targetId))}async function x6(t,e,n){const r=b6(t);try{const i=await function(o,a){const l=ee(o),c=He.now(),h=a.reduce((y,x)=>y.add(x.key),ie());let f,p;return l.persistence.runTransaction("Locally write mutations","readwrite",y=>{let x=or(),I=ie();return l.cs.getEntries(y,h).next(R=>{x=R,x.forEach((w,_)=>{_.isValidDocument()||(I=I.add(w))})}).next(()=>l.localDocuments.getOverlayedDocuments(y,x)).next(R=>{f=R;const w=[];for(const _ of a){const S=qM(_,f.get(_.key).overlayedDocument);S!=null&&w.push(new Yi(_.key,S,XI(S.value.mapValue),Zn.exists(!0)))}return l.mutationQueue.addMutationBatch(y,c,w,a)}).next(R=>{p=R;const w=R.applyToLocalDocumentSet(f,I);return l.documentOverlayCache.saveOverlays(y,R.batchId,w)})}).then(()=>({batchId:p.batchId,changes:lP(f)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,l){let c=o.Ba[o.currentUser.toKey()];c||(c=new Ve(ue)),c=c.insert(a,l),o.Ba[o.currentUser.toKey()]=c}(r,i.batchId,n),await Tl(r,i.changes),await Lh(r.remoteStore)}catch(i){const s=cy(i,"Failed to persist write");n.reject(s)}}async function BP(t,e){const n=ee(t);try{const r=await F5(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Na.get(s);o&&(me(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.va=!0:i.modifiedDocuments.size>0?me(o.va):i.removedDocuments.size>0&&(me(o.va),o.va=!1))}),await Tl(n,r,e)}catch(r){await gl(r)}}function pw(t,e,n){const r=ee(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Fa.forEach((s,o)=>{const a=o.view.Z_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const l=ee(o);l.onlineState=a;let c=!1;l.queries.forEach((h,f)=>{for(const p of f.j_)p.Z_(a)&&(c=!0)}),c&&fy(l)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function I6(t,e,n){const r=ee(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Na.get(e),s=i&&i.key;if(s){let o=new Ve(G.comparator);o=o.insert(s,pt.newNoDocument(s,Z.min()));const a=ie().add(s),l=new Dh(Z.min(),new Map,new Ve(ue),o,a);await BP(r,l),r.Oa=r.Oa.remove(s),r.Na.delete(e),my(r)}else await im(r.localStore,e,!1).then(()=>om(r,e,n)).catch(gl)}async function P6(t,e){const n=ee(t),r=e.batch.batchId;try{const i=await j5(n.localStore,e);zP(n,r,null),$P(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Tl(n,i)}catch(i){await gl(i)}}async function C6(t,e,n){const r=ee(t);try{const i=await function(o,a){const l=ee(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let h;return l.mutationQueue.lookupMutationBatch(c,a).next(f=>(me(f!==null),h=f.keys(),l.mutationQueue.removeMutationBatch(c,f))).next(()=>l.mutationQueue.performConsistencyCheck(c)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(c,h,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,h)).next(()=>l.localDocuments.getDocuments(c,h))})}(r.localStore,e);zP(r,e,n),$P(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Tl(r,i)}catch(i){await gl(i)}}function $P(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function zP(t,e,n){const r=ee(t);let i=r.Ba[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}function om(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||WP(t,r)})}function WP(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(sy(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),my(t))}function mw(t,e,n){for(const r of n)r instanceof jP?(t.La.addReference(r.key,e),A6(t,r)):r instanceof FP?(q("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||WP(t,r.key)):J()}function A6(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(q("SyncEngine","New document in limbo: "+n),t.xa.add(r),my(t))}function my(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new G(Se.fromString(e)),r=t.qa.next();t.Na.set(r,new y6(n)),t.Oa=t.Oa.insert(n,r),VP(t.remoteStore,new Vr(An(Ah(n.path)),r,"TargetPurposeLimboResolution",qg.oe))}}async function Tl(t,e,n){const r=ee(t),i=[],s=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((a,l)=>{o.push(r.Ka(l,e,n).then(c=>{var h;if((c||n)&&r.isPrimaryClient){const f=c?!c.fromCache:(h=n==null?void 0:n.targetChanges.get(l.targetId))===null||h===void 0?void 0:h.current;r.sharedClientState.updateQueryState(l.targetId,f?"current":"not-current")}if(c){i.push(c);const f=iy.Wi(l.targetId,c);s.push(f)}}))}),await Promise.all(o),r.Ca.d_(i),await async function(l,c){const h=ee(l);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>U.forEach(c,p=>U.forEach(p.$i,y=>h.persistence.referenceDelegate.addReference(f,p.targetId,y)).next(()=>U.forEach(p.Ui,y=>h.persistence.referenceDelegate.removeReference(f,p.targetId,y)))))}catch(f){if(!yl(f))throw f;q("LocalStore","Failed to update sequence numbers: "+f)}for(const f of c){const p=f.targetId;if(!f.fromCache){const y=h.os.get(p),x=y.snapshotVersion,I=y.withLastLimboFreeSnapshotVersion(x);h.os=h.os.insert(p,I)}}}(r.localStore,s))}async function R6(t,e){const n=ee(t);if(!n.currentUser.isEqual(e)){q("SyncEngine","User change. New user:",e.toKey());const r=await AP(n.localStore,e);n.currentUser=e,function(s,o){s.ka.forEach(a=>{a.forEach(l=>{l.reject(new H(F.CANCELLED,o))})}),s.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Tl(n,r.hs)}}function k6(t,e){const n=ee(t),r=n.Na.get(e);if(r&&r.va)return ie().add(r.key);{let i=ie();const s=n.Ma.get(e);if(!s)return i;for(const o of s){const a=n.Fa.get(o);i=i.unionWith(a.view.Va)}return i}}function HP(t){const e=ee(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=BP.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=k6.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=I6.bind(null,e),e.Ca.d_=f6.bind(null,e.eventManager),e.Ca.$a=p6.bind(null,e.eventManager),e}function b6(t){const e=ee(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=P6.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=C6.bind(null,e),e}class Fc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Nh(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return M5(this.persistence,new O5,e.initialUser,this.serializer)}Ga(e){return new V5(ry.Zr,this.serializer)}Wa(e){return new W5}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Fc.provider={build:()=>new Fc};class am{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>pw(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=R6.bind(null,this.syncEngine),await c6(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new d6}()}createDatastore(e){const n=Nh(e.databaseInfo.databaseId),r=function(s){return new G5(s)}(e.databaseInfo);return function(s,o,a,l){return new X5(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new Z5(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>pw(this.syncEngine,n,0),function(){return uw.D()?new uw:new H5}())}createSyncEngine(e,n){return function(i,s,o,a,l,c,h){const f=new v6(i,s,o,a,l,c);return h&&(f.Qa=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=ee(i);q("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await El(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}am.provider={build:()=>new am};/**
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
 */class gy{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):sr("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class V6{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=dt.UNAUTHENTICATED,this.clientId=GI.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{q("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(q("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Jn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=cy(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function cf(t,e){t.asyncQueue.verifyOperationInProgress(),q("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await AP(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function gw(t,e){t.asyncQueue.verifyOperationInProgress();const n=await D6(t);q("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>cw(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>cw(e.remoteStore,i)),t._onlineComponents=e}async function D6(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){q("FirestoreClient","Using user provided OfflineComponentProvider");try{await cf(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===F.FAILED_PRECONDITION||i.code===F.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;eo("Error using user provided cache. Falling back to memory cache: "+n),await cf(t,new Fc)}}else q("FirestoreClient","Using default OfflineComponentProvider"),await cf(t,new Fc);return t._offlineComponents}async function qP(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(q("FirestoreClient","Using user provided OnlineComponentProvider"),await gw(t,t._uninitializedComponentsProvider._online)):(q("FirestoreClient","Using default OnlineComponentProvider"),await gw(t,new am))),t._onlineComponents}function N6(t){return qP(t).then(e=>e.syncEngine)}async function Uc(t){const e=await qP(t),n=e.eventManager;return n.onListen=_6.bind(null,e.syncEngine),n.onUnlisten=T6.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=w6.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=S6.bind(null,e.syncEngine),n}function O6(t,e,n={}){const r=new Jn;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,c){const h=new gy({next:p=>{h.Za(),o.enqueueAndForget(()=>dy(s,f));const y=p.docs.has(a);!y&&p.fromCache?c.reject(new H(F.UNAVAILABLE,"Failed to get document because the client is offline.")):y&&p.fromCache&&l&&l.source==="server"?c.reject(new H(F.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(p)},error:p=>c.reject(p)}),f=new py(Ah(a.path),h,{includeMetadataChanges:!0,_a:!0});return hy(s,f)}(await Uc(t),t.asyncQueue,e,n,r)),r.promise}function L6(t,e,n={}){const r=new Jn;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,c){const h=new gy({next:p=>{h.Za(),o.enqueueAndForget(()=>dy(s,f)),p.fromCache&&l.source==="server"?c.reject(new H(F.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(p)},error:p=>c.reject(p)}),f=new py(a,h,{includeMetadataChanges:!0,_a:!0});return hy(s,f)}(await Uc(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function KP(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const yw=new Map;/**
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
 */function GP(t,e,n){if(!n)throw new H(F.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function M6(t,e,n,r){if(e===!0&&r===!0)throw new H(F.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function vw(t){if(!G.isDocumentKey(t))throw new H(F.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function _w(t){if(G.isDocumentKey(t))throw new H(F.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Mh(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":J()}function kn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new H(F.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Mh(t);throw new H(F.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class ww{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new H(F.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new H(F.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}M6("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=KP((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new H(F.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new H(F.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new H(F.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class jh{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ww({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new H(F.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new H(F.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ww(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new tM;switch(r.type){case"firstParty":return new sM(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new H(F.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=yw.get(n);r&&(q("ComponentProvider","Removing Datastore"),yw.delete(n),r.terminate())}(this),Promise.resolve()}}function j6(t,e,n,r={}){var i;const s=(t=kn(t,jh))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&eo("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=dt.MOCK_USER;else{a=bO(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new H(F.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new dt(c)}t._authCredentials=new nM(new KI(a,l))}}/**
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
 */class Ji{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Ji(this.firestore,e,this._query)}}class xt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Wr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new xt(this.firestore,e,this._key)}}class Wr extends Ji{constructor(e,n,r){super(e,n,Ah(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new xt(this.firestore,null,new G(e))}withConverter(e){return new Wr(this.firestore,e,this._path)}}function Sl(t,e,...n){if(t=It(t),GP("collection","path",e),t instanceof jh){const r=Se.fromString(e,...n);return _w(r),new Wr(t,null,r)}{if(!(t instanceof xt||t instanceof Wr))throw new H(F.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Se.fromString(e,...n));return _w(r),new Wr(t.firestore,null,r)}}function bi(t,e,...n){if(t=It(t),arguments.length===1&&(e=GI.newId()),GP("doc","path",e),t instanceof jh){const r=Se.fromString(e,...n);return vw(r),new xt(t,null,new G(r))}{if(!(t instanceof xt||t instanceof Wr))throw new H(F.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Se.fromString(e,...n));return vw(r),new xt(t.firestore,t instanceof Wr?t.converter:null,new G(r))}}/**
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
 */class Ew{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new kP(this,"async_queue_retry"),this.Vu=()=>{const r=uf();r&&q("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=uf();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=uf();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new Jn;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!yl(e))throw e;q("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw sr("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const i=uy.createAndSchedule(this,e,n,r,s=>this.yu(s));return this.Tu.push(i),i}fu(){this.Eu&&J()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}function Tw(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class oo extends jh{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new Ew,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Ew(e),this._firestoreClient=void 0,await e}}}function F6(t,e){const n=typeof t=="object"?t:jI(),r=typeof t=="string"?t:"(default)",i=Wg(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=RO("firestore");s&&j6(i,...s)}return i}function Fh(t){if(t._terminated)throw new H(F.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||U6(t),t._firestoreClient}function U6(t){var e,n,r;const i=t._freezeSettings(),s=function(a,l,c,h){return new vM(a,l,c,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,KP(h.experimentalLongPollingOptions),h.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new V6(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(a){const l=a==null?void 0:a._online.build();return{_offline:a==null?void 0:a._offline.build(l),_online:l}}(t._componentsProvider))}/**
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
 */class ao{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ao(it.fromBase64String(e))}catch(n){throw new H(F.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new ao(it.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class yy{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new H(F.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new et(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class QP{constructor(e){this._methodName=e}}/**
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
 */class vy{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new H(F.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new H(F.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ue(this._lat,e._lat)||ue(this._long,e._long)}}/**
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
 */class _y{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
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
 */const B6=/^__.*__$/;class $6{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Yi(e,this.data,this.fieldMask,n,this.fieldTransforms):new _l(e,this.data,n,this.fieldTransforms)}}function YP(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw J()}}class wy{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new wy(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.Ou(e),i}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return Bc(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(YP(this.Cu)&&B6.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class z6{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Nh(e)}Qu(e,n,r,i=!1){return new wy({Cu:e,methodName:n,qu:r,path:et.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function XP(t){const e=t._freezeSettings(),n=Nh(t._databaseId);return new z6(t._databaseId,!!e.ignoreUndefinedProperties,n)}function W6(t,e,n,r,i,s={}){const o=t.Qu(s.merge||s.mergeFields?2:0,e,n,i);eC("Data must be an object, but it was:",o,r);const a=JP(r,o);let l,c;if(s.merge)l=new hn(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const h=[];for(const f of s.mergeFields){const p=q6(e,f,n);if(!o.contains(p))throw new H(F.INVALID_ARGUMENT,`Field '${p}' is specified in your field mask but missing from your input data.`);G6(h,p)||h.push(p)}l=new hn(h),c=o.fieldTransforms.filter(f=>l.covers(f.field))}else l=null,c=o.fieldTransforms;return new $6(new Zt(a),l,c)}function H6(t,e,n,r=!1){return Ey(n,t.Qu(r?4:3,e))}function Ey(t,e){if(ZP(t=It(t)))return eC("Unsupported field value:",e,t),JP(t,e);if(t instanceof QP)return function(r,i){if(!YP(i.Cu))throw i.Bu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let l=Ey(a,i.Lu(o));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=It(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return UM(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=He.fromDate(r);return{timestampValue:Mc(i.serializer,s)}}if(r instanceof He){const s=new He(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Mc(i.serializer,s)}}if(r instanceof vy)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof ao)return{bytesValue:EP(i.serializer,r._byteString)};if(r instanceof xt){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:ty(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof _y)return function(o,a){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(l=>{if(typeof l!="number")throw a.Bu("VectorValues must only contain numeric values.");return Jg(a.serializer,l)})}}}}}}(r,i);throw i.Bu(`Unsupported field value: ${Mh(r)}`)}(t,e)}function JP(t,e){const n={};return QI(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):_o(t,(r,i)=>{const s=Ey(i,e.Mu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function ZP(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof He||t instanceof vy||t instanceof ao||t instanceof xt||t instanceof QP||t instanceof _y)}function eC(t,e,n){if(!ZP(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Mh(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function q6(t,e,n){if((e=It(e))instanceof yy)return e._internalPath;if(typeof e=="string")return tC(t,e);throw Bc("Field path arguments must be of type string or ",t,!1,void 0,n)}const K6=new RegExp("[~\\*/\\[\\]]");function tC(t,e,n){if(e.search(K6)>=0)throw Bc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new yy(...e.split("."))._internalPath}catch{throw Bc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Bc(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new H(F.INVALID_ARGUMENT,a+t+l)}function G6(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class nC{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new xt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Q6(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Ty("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Q6 extends nC{data(){return super.data()}}function Ty(t,e){return typeof e=="string"?tC(t,e):e instanceof yy?e._internalPath:e._delegate._internalPath}/**
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
 */function rC(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new H(F.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Sy{}class Y6 extends Sy{}function iC(t,e,...n){let r=[];e instanceof Sy&&r.push(e),r=r.concat(n),function(s){const o=s.filter(l=>l instanceof xy).length,a=s.filter(l=>l instanceof Uh).length;if(o>1||o>0&&a>0)throw new H(F.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class Uh extends Y6{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Uh(e,n,r)}_apply(e){const n=this._parse(e);return oC(e._query,n),new Ji(e.firestore,e.converter,Jp(e._query,n))}_parse(e){const n=XP(e.firestore);return function(s,o,a,l,c,h,f){let p;if(c.isKeyField()){if(h==="array-contains"||h==="array-contains-any")throw new H(F.INVALID_ARGUMENT,`Invalid Query. You can't perform '${h}' queries on documentId().`);if(h==="in"||h==="not-in"){xw(f,h);const y=[];for(const x of f)y.push(Sw(l,s,x));p={arrayValue:{values:y}}}else p=Sw(l,s,f)}else h!=="in"&&h!=="not-in"&&h!=="array-contains-any"||xw(f,h),p=H6(a,o,f,h==="in"||h==="not-in");return Be.create(c,h,p)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function sC(t,e,n){const r=e,i=Ty("where",t);return Uh._create(i,r,n)}class xy extends Sy{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new xy(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:yn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const l of a)oC(o,l),o=Jp(o,l)}(e._query,n),new Ji(e.firestore,e.converter,Jp(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Sw(t,e,n){if(typeof(n=It(n))=="string"){if(n==="")throw new H(F.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!iP(e)&&n.indexOf("/")!==-1)throw new H(F.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Se.fromString(n));if(!G.isDocumentKey(r))throw new H(F.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return W1(t,new G(r))}if(n instanceof xt)return W1(t,n._key);throw new H(F.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Mh(n)}.`)}function xw(t,e){if(!Array.isArray(t)||t.length===0)throw new H(F.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function oC(t,e){const n=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new H(F.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new H(F.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class X6{convertValue(e,n="none"){switch(qi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Le(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Hi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw J()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return _o(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var n,r,i;const s=(i=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>Le(o.doubleValue));return new _y(s)}convertGeoPoint(e){return new vy(Le(e.latitude),Le(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Gg(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Xa(e));default:return null}}convertTimestamp(e){const n=Xr(e);return new He(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Se.fromString(e);me(CP(r));const i=new Ja(r.get(1),r.get(3)),s=new G(r.popFirst(5));return i.isEqual(n)||sr(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function J6(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
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
 */class ia{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class aC extends nC{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new zu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Ty("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class zu extends aC{data(e={}){return super.data(e)}}class lC{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new ia(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new zu(this._firestore,this._userDataWriter,r.key,r,new ia(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new H(F.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const l=new zu(i._firestore,i._userDataWriter,a.doc.key,a.doc,new ia(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const l=new zu(i._firestore,i._userDataWriter,a.doc.key,a.doc,new ia(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,h=-1;return a.type!==0&&(c=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),h=o.indexOf(a.doc.key)),{type:Z6(a.type),doc:l,oldIndex:c,newIndex:h}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function Z6(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return J()}}/**
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
 */function nl(t){t=kn(t,xt);const e=kn(t.firestore,oo);return O6(Fh(e),t._key).then(n=>cC(e,t,n))}class Iy extends X6{constructor(e){super(),this.firestore=e}convertBytes(e){return new ao(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new xt(this.firestore,null,n)}}function Py(t){t=kn(t,Ji);const e=kn(t.firestore,oo),n=Fh(e),r=new Iy(e);return rC(t._query),L6(n,t._query).then(i=>new lC(e,r,t,i))}function uC(t,e,n){t=kn(t,xt);const r=kn(t.firestore,oo),i=J6(t.converter,e,n);return tj(r,[W6(XP(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Zn.none())])}function ej(t,...e){var n,r,i;t=It(t);let s={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||Tw(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(Tw(e[o])){const f=e[o];e[o]=(n=f.next)===null||n===void 0?void 0:n.bind(f),e[o+1]=(r=f.error)===null||r===void 0?void 0:r.bind(f),e[o+2]=(i=f.complete)===null||i===void 0?void 0:i.bind(f)}let l,c,h;if(t instanceof xt)c=kn(t.firestore,oo),h=Ah(t._key.path),l={next:f=>{e[o]&&e[o](cC(c,t,f))},error:e[o+1],complete:e[o+2]};else{const f=kn(t,Ji);c=kn(f.firestore,oo),h=f._query;const p=new Iy(c);l={next:y=>{e[o]&&e[o](new lC(c,p,f,y))},error:e[o+1],complete:e[o+2]},rC(t._query)}return function(p,y,x,I){const R=new gy(I),w=new py(y,R,x);return p.asyncQueue.enqueueAndForget(async()=>hy(await Uc(p),w)),()=>{R.Za(),p.asyncQueue.enqueueAndForget(async()=>dy(await Uc(p),w))}}(Fh(c),h,a,l)}function tj(t,e){return function(r,i){const s=new Jn;return r.asyncQueue.enqueueAndForget(async()=>x6(await N6(r),i,s)),s.promise}(Fh(t),e)}function cC(t,e,n){const r=n.docs.get(e._key),i=new Iy(t);return new aC(t,i,e._key,r,new ia(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(i){vo=i})(yo),Zs(new zi("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new oo(new rM(r.getProvider("auth-internal")),new aM(r.getProvider("app-check-internal")),function(c,h){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new H(F.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ja(c.options.projectId,h)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),zr(F1,"4.7.3",e),zr(F1,"4.7.3","esm2017")})();var nj="firebase",rj="10.14.0";/**
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
 */zr(nj,rj,"app");function Cy(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function hC(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const ij=hC,dC=new pl("auth","Firebase",hC());/**
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
 */const $c=new $g("@firebase/auth");function sj(t,...e){$c.logLevel<=se.WARN&&$c.warn(`Auth (${yo}): ${t}`,...e)}function Wu(t,...e){$c.logLevel<=se.ERROR&&$c.error(`Auth (${yo}): ${t}`,...e)}/**
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
 */function ar(t,...e){throw Ay(t,...e)}function bn(t,...e){return Ay(t,...e)}function fC(t,e,n){const r=Object.assign(Object.assign({},ij()),{[e]:n});return new pl("auth","Firebase",r).create(e,{appName:t.name})}function Vi(t){return fC(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Ay(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return dC.create(t,...e)}function X(t,e,...n){if(!t)throw Ay(e,...n)}function Wn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Wu(e),new Error(e)}function lr(t,e){t||Wn(e)}/**
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
 */function lm(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function oj(){return Iw()==="http:"||Iw()==="https:"}function Iw(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function aj(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(oj()||OO()||"connection"in navigator)?navigator.onLine:!0}function lj(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class xl{constructor(e,n){this.shortDelay=e,this.longDelay=n,lr(n>e,"Short delay should be less than long delay!"),this.isMobile=VO()||LO()}get(){return aj()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Ry(t,e){lr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class pC{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Wn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Wn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Wn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const uj={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const cj=new xl(3e4,6e4);function ky(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function To(t,e,n,r,i={}){return mC(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=ml(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const c=Object.assign({method:e,headers:l},s);return NO()||(c.referrerPolicy="no-referrer"),pC.fetch()(gC(t,t.config.apiHost,n,a),c)})}async function mC(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},uj),e);try{const i=new dj(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw gu(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw gu(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw gu(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw gu(t,"user-disabled",o);const h=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw fC(t,h,c);ar(t,h)}}catch(i){if(i instanceof cr)throw i;ar(t,"network-request-failed",{message:String(i)})}}async function hj(t,e,n,r,i={}){const s=await To(t,e,n,r,i);return"mfaPendingCredential"in s&&ar(t,"multi-factor-auth-required",{_serverResponse:s}),s}function gC(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Ry(t.config,i):`${t.config.apiScheme}://${i}`}class dj{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(bn(this.auth,"network-request-failed")),cj.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function gu(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=bn(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */async function fj(t,e){return To(t,"POST","/v1/accounts:delete",e)}async function yC(t,e){return To(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ta(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function pj(t,e=!1){const n=It(t),r=await n.getIdToken(e),i=by(r);X(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Ta(hf(i.auth_time)),issuedAtTime:Ta(hf(i.iat)),expirationTime:Ta(hf(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function hf(t){return Number(t)*1e3}function by(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Wu("JWT malformed, contained fewer than 3 sections"),null;try{const i=bI(n);return i?JSON.parse(i):(Wu("Failed to decode base64 JWT payload"),null)}catch(i){return Wu("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Pw(t){const e=by(t);return X(e,"internal-error"),X(typeof e.exp<"u","internal-error"),X(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function rl(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof cr&&mj(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function mj({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class gj{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class um{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ta(this.lastLoginAt),this.creationTime=Ta(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function zc(t){var e;const n=t.auth,r=await t.getIdToken(),i=await rl(t,yC(n,{idToken:r}));X(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?vC(s.providerUserInfo):[],a=vj(t.providerData,o),l=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),h=l?c:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new um(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(t,f)}async function yj(t){const e=It(t);await zc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function vj(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function vC(t){return t.map(e=>{var{providerId:n}=e,r=Cy(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function _j(t,e){const n=await mC(t,{},async()=>{const r=ml({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=gC(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",pC.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function wj(t,e){return To(t,"POST","/v2/accounts:revokeToken",ky(t,e))}/**
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
 */class Os{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){X(e.idToken,"internal-error"),X(typeof e.idToken<"u","internal-error"),X(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Pw(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){X(e.length!==0,"internal-error");const n=Pw(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(X(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await _j(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Os;return r&&(X(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(X(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(X(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Os,this.toJSON())}_performRefresh(){return Wn("not implemented")}}/**
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
 */function yr(t,e){X(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Hn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Cy(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new gj(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new um(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await rl(this,this.stsTokenManager.getToken(this.auth,e));return X(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return pj(this,e)}reload(){return yj(this)}_assign(e){this!==e&&(X(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Hn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){X(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await zc(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(br(this.auth.app))return Promise.reject(Vi(this.auth));const e=await this.getIdToken();return await rl(this,fj(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,c,h;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(i=n.email)!==null&&i!==void 0?i:void 0,y=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,x=(o=n.photoURL)!==null&&o!==void 0?o:void 0,I=(a=n.tenantId)!==null&&a!==void 0?a:void 0,R=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,w=(c=n.createdAt)!==null&&c!==void 0?c:void 0,_=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:S,emailVerified:b,isAnonymous:O,providerData:M,stsTokenManager:T}=n;X(S&&T,e,"internal-error");const v=Os.fromJSON(this.name,T);X(typeof S=="string",e,"internal-error"),yr(f,e.name),yr(p,e.name),X(typeof b=="boolean",e,"internal-error"),X(typeof O=="boolean",e,"internal-error"),yr(y,e.name),yr(x,e.name),yr(I,e.name),yr(R,e.name),yr(w,e.name),yr(_,e.name);const P=new Hn({uid:S,auth:e,email:p,emailVerified:b,displayName:f,isAnonymous:O,photoURL:x,phoneNumber:y,tenantId:I,stsTokenManager:v,createdAt:w,lastLoginAt:_});return M&&Array.isArray(M)&&(P.providerData=M.map(C=>Object.assign({},C))),R&&(P._redirectEventId=R),P}static async _fromIdTokenResponse(e,n,r=!1){const i=new Os;i.updateFromServerResponse(n);const s=new Hn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await zc(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];X(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?vC(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new Os;a.updateFromIdToken(r);const l=new Hn({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new um(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(l,c),l}}/**
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
 */const Cw=new Map;function qn(t){lr(t instanceof Function,"Expected a class definition");let e=Cw.get(t);return e?(lr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Cw.set(t,e),e)}/**
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
 */class _C{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}_C.type="NONE";const Aw=_C;/**
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
 */function Hu(t,e,n){return`firebase:${t}:${e}:${n}`}class Ls{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Hu(this.userKey,i.apiKey,s),this.fullPersistenceKey=Hu("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Hn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ls(qn(Aw),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||qn(Aw);const o=Hu(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const h=await c._get(o);if(h){const f=Hn._fromJSON(e,h);c!==s&&(a=f),s=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Ls(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new Ls(s,e,r))}}/**
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
 */function Rw(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(SC(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(wC(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(IC(e))return"Blackberry";if(PC(e))return"Webos";if(EC(e))return"Safari";if((e.includes("chrome/")||TC(e))&&!e.includes("edge/"))return"Chrome";if(xC(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function wC(t=vt()){return/firefox\//i.test(t)}function EC(t=vt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function TC(t=vt()){return/crios\//i.test(t)}function SC(t=vt()){return/iemobile/i.test(t)}function xC(t=vt()){return/android/i.test(t)}function IC(t=vt()){return/blackberry/i.test(t)}function PC(t=vt()){return/webos/i.test(t)}function Vy(t=vt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Ej(t=vt()){var e;return Vy(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Tj(){return MO()&&document.documentMode===10}function CC(t=vt()){return Vy(t)||xC(t)||PC(t)||IC(t)||/windows phone/i.test(t)||SC(t)}/**
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
 */function AC(t,e=[]){let n;switch(t){case"Browser":n=Rw(vt());break;case"Worker":n=`${Rw(vt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${yo}/${r}`}/**
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
 */class Sj{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function xj(t,e={}){return To(t,"GET","/v2/passwordPolicy",ky(t,e))}/**
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
 */const Ij=6;class Pj{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:Ij,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class Cj{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new kw(this),this.idTokenSubscription=new kw(this),this.beforeStateQueue=new Sj(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=dC,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=qn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Ls.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await yC(this,{idToken:e}),r=await Hn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(br(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return X(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await zc(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=lj()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(br(this.app))return Promise.reject(Vi(this));const n=e?It(e):null;return n&&X(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&X(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return br(this.app)?Promise.reject(Vi(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return br(this.app)?Promise.reject(Vi(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(qn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await xj(this),n=new Pj(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new pl("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await wj(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&qn(e)||this._popupRedirectResolver;X(n,this,"argument-error"),this.redirectPersistenceManager=await Ls.create(this,[qn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(X(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return X(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=AC(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&sj(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Dy(t){return It(t)}class kw{constructor(e){this.auth=e,this.observer=null,this.addObserver=HO(n=>this.observer=n)}get next(){return X(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Ny={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Aj(t){Ny=t}function Rj(t){return Ny.loadJS(t)}function kj(){return Ny.gapiScript}function bj(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */function Vj(t,e){const n=Wg(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(kc(s,e??{}))return i;ar(i,"already-initialized")}return n.initialize({options:e})}function Dj(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(qn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Nj(t,e,n){const r=Dy(t);X(r._canInitEmulator,r,"emulator-config-failed"),X(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=RC(e),{host:o,port:a}=Oj(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),Lj()}function RC(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Oj(t){const e=RC(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:bw(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:bw(o)}}}function bw(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Lj(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class kC{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Wn("not implemented")}_getIdTokenResponse(e){return Wn("not implemented")}_linkToIdToken(e,n){return Wn("not implemented")}_getReauthenticationResolver(e){return Wn("not implemented")}}/**
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
 */async function Ms(t,e){return hj(t,"POST","/v1/accounts:signInWithIdp",ky(t,e))}/**
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
 */const Mj="http://localhost";class Ki extends kC{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ki(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):ar("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Cy(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Ki(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ms(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ms(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ms(e,n)}buildRequest(){const e={requestUri:Mj,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ml(n)}return e}}/**
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
 */class bC{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Il extends bC{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class xr extends Il{constructor(){super("facebook.com")}static credential(e){return Ki._fromParams({providerId:xr.PROVIDER_ID,signInMethod:xr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return xr.credentialFromTaggedObject(e)}static credentialFromError(e){return xr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return xr.credential(e.oauthAccessToken)}catch{return null}}}xr.FACEBOOK_SIGN_IN_METHOD="facebook.com";xr.PROVIDER_ID="facebook.com";/**
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
 */class Ir extends Il{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ki._fromParams({providerId:Ir.PROVIDER_ID,signInMethod:Ir.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Ir.credentialFromTaggedObject(e)}static credentialFromError(e){return Ir.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Ir.credential(n,r)}catch{return null}}}Ir.GOOGLE_SIGN_IN_METHOD="google.com";Ir.PROVIDER_ID="google.com";/**
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
 */class Pr extends Il{constructor(){super("github.com")}static credential(e){return Ki._fromParams({providerId:Pr.PROVIDER_ID,signInMethod:Pr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Pr.credentialFromTaggedObject(e)}static credentialFromError(e){return Pr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Pr.credential(e.oauthAccessToken)}catch{return null}}}Pr.GITHUB_SIGN_IN_METHOD="github.com";Pr.PROVIDER_ID="github.com";/**
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
 */class Cr extends Il{constructor(){super("twitter.com")}static credential(e,n){return Ki._fromParams({providerId:Cr.PROVIDER_ID,signInMethod:Cr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Cr.credentialFromTaggedObject(e)}static credentialFromError(e){return Cr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Cr.credential(n,r)}catch{return null}}}Cr.TWITTER_SIGN_IN_METHOD="twitter.com";Cr.PROVIDER_ID="twitter.com";/**
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
 */class lo{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Hn._fromIdTokenResponse(e,r,i),o=Vw(r);return new lo({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Vw(r);return new lo({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Vw(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Wc extends cr{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Wc.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Wc(e,n,r,i)}}function VC(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Wc._fromErrorAndOperation(t,s,e,r):s})}async function jj(t,e,n=!1){const r=await rl(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return lo._forOperation(t,"link",r)}/**
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
 */async function Fj(t,e,n=!1){const{auth:r}=t;if(br(r.app))return Promise.reject(Vi(r));const i="reauthenticate";try{const s=await rl(t,VC(r,i,e,t),n);X(s.idToken,r,"internal-error");const o=by(s.idToken);X(o,r,"internal-error");const{sub:a}=o;return X(t.uid===a,r,"user-mismatch"),lo._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&ar(r,"user-mismatch"),s}}/**
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
 */async function Uj(t,e,n=!1){if(br(t.app))return Promise.reject(Vi(t));const r="signIn",i=await VC(t,r,e),s=await lo._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}function Bj(t,e,n,r){return It(t).onIdTokenChanged(e,n,r)}function $j(t,e,n){return It(t).beforeAuthStateChanged(e,n)}function zj(t,e,n,r){return It(t).onAuthStateChanged(e,n,r)}function Wj(t){return It(t).signOut()}const Hc="__sak";/**
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
 */class DC{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Hc,"1"),this.storage.removeItem(Hc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const Hj=1e3,qj=10;class NC extends DC{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=CC(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);Tj()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,qj):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Hj)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}NC.type="LOCAL";const Kj=NC;/**
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
 */class OC extends DC{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}OC.type="SESSION";const LC=OC;/**
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
 */function Gj(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Bh{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Bh(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,s)),l=await Gj(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Bh.receivers=[];/**
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
 */function Oy(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Qj{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const c=Oy("",20);i.port1.start();const h=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(f){const p=f;if(p.data.eventId===c)switch(p.data.status){case"ack":clearTimeout(h),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(p.data.response);break;default:clearTimeout(h),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Vn(){return window}function Yj(t){Vn().location.href=t}/**
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
 */function MC(){return typeof Vn().WorkerGlobalScope<"u"&&typeof Vn().importScripts=="function"}async function Xj(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Jj(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Zj(){return MC()?self:null}/**
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
 */const jC="firebaseLocalStorageDb",e3=1,qc="firebaseLocalStorage",FC="fbase_key";class Pl{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function $h(t,e){return t.transaction([qc],e?"readwrite":"readonly").objectStore(qc)}function t3(){const t=indexedDB.deleteDatabase(jC);return new Pl(t).toPromise()}function cm(){const t=indexedDB.open(jC,e3);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(qc,{keyPath:FC})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(qc)?e(r):(r.close(),await t3(),e(await cm()))})})}async function Dw(t,e,n){const r=$h(t,!0).put({[FC]:e,value:n});return new Pl(r).toPromise()}async function n3(t,e){const n=$h(t,!1).get(e),r=await new Pl(n).toPromise();return r===void 0?null:r.value}function Nw(t,e){const n=$h(t,!0).delete(e);return new Pl(n).toPromise()}const r3=800,i3=3;class UC{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await cm(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>i3)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return MC()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Bh._getInstance(Zj()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Xj(),!this.activeServiceWorker)return;this.sender=new Qj(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Jj()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await cm();return await Dw(e,Hc,"1"),await Nw(e,Hc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Dw(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>n3(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Nw(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=$h(i,!1).getAll();return new Pl(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),r3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}UC.type="LOCAL";const s3=UC;new xl(3e4,6e4);/**
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
 */function o3(t,e){return e?qn(e):(X(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Ly extends kC{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ms(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ms(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ms(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function a3(t){return Uj(t.auth,new Ly(t),t.bypassAuthState)}function l3(t){const{auth:e,user:n}=t;return X(n,e,"internal-error"),Fj(n,new Ly(t),t.bypassAuthState)}async function u3(t){const{auth:e,user:n}=t;return X(n,e,"internal-error"),jj(n,new Ly(t),t.bypassAuthState)}/**
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
 */class BC{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return a3;case"linkViaPopup":case"linkViaRedirect":return u3;case"reauthViaPopup":case"reauthViaRedirect":return l3;default:ar(this.auth,"internal-error")}}resolve(e){lr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){lr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const c3=new xl(2e3,1e4);class Cs extends BC{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Cs.currentPopupAction&&Cs.currentPopupAction.cancel(),Cs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return X(e,this.auth,"internal-error"),e}async onExecution(){lr(this.filter.length===1,"Popup operations only handle one event");const e=Oy();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(bn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(bn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Cs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(bn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,c3.get())};e()}}Cs.currentPopupAction=null;/**
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
 */const h3="pendingRedirect",qu=new Map;class d3 extends BC{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=qu.get(this.auth._key());if(!e){try{const r=await f3(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}qu.set(this.auth._key(),e)}return this.bypassAuthState||qu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function f3(t,e){const n=g3(e),r=m3(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function p3(t,e){qu.set(t._key(),e)}function m3(t){return qn(t._redirectPersistence)}function g3(t){return Hu(h3,t.config.apiKey,t.name)}async function y3(t,e,n=!1){if(br(t.app))return Promise.reject(Vi(t));const r=Dy(t),i=o3(r,e),o=await new d3(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const v3=10*60*1e3;class _3{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!w3(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!$C(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(bn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=v3&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ow(e))}saveEventToCache(e){this.cachedEventUids.add(Ow(e)),this.lastProcessedEventTime=Date.now()}}function Ow(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function $C({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function w3(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return $C(t);default:return!1}}/**
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
 */async function E3(t,e={}){return To(t,"GET","/v1/projects",e)}/**
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
 */const T3=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,S3=/^https?/;async function x3(t){if(t.config.emulator)return;const{authorizedDomains:e}=await E3(t);for(const n of e)try{if(I3(n))return}catch{}ar(t,"unauthorized-domain")}function I3(t){const e=lm(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!S3.test(n))return!1;if(T3.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const P3=new xl(3e4,6e4);function Lw(){const t=Vn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function C3(t){return new Promise((e,n)=>{var r,i,s;function o(){Lw(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Lw(),n(bn(t,"network-request-failed"))},timeout:P3.get()})}if(!((i=(r=Vn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Vn().gapi)===null||s===void 0)&&s.load)o();else{const a=bj("iframefcb");return Vn()[a]=()=>{gapi.load?o():n(bn(t,"network-request-failed"))},Rj(`${kj()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Ku=null,e})}let Ku=null;function A3(t){return Ku=Ku||C3(t),Ku}/**
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
 */const R3=new xl(5e3,15e3),k3="__/auth/iframe",b3="emulator/auth/iframe",V3={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},D3=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function N3(t){const e=t.config;X(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Ry(e,b3):`https://${t.config.authDomain}/${k3}`,r={apiKey:e.apiKey,appName:t.name,v:yo},i=D3.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${ml(r).slice(1)}`}async function O3(t){const e=await A3(t),n=Vn().gapi;return X(n,t,"internal-error"),e.open({where:document.body,url:N3(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:V3,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=bn(t,"network-request-failed"),a=Vn().setTimeout(()=>{s(o)},R3.get());function l(){Vn().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const L3={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},M3=500,j3=600,F3="_blank",U3="http://localhost";class Mw{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function B3(t,e,n,r=M3,i=j3){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},L3),{width:r.toString(),height:i.toString(),top:s,left:o}),c=vt().toLowerCase();n&&(a=TC(c)?F3:n),wC(c)&&(e=e||U3,l.scrollbars="yes");const h=Object.entries(l).reduce((p,[y,x])=>`${p}${y}=${x},`,"");if(Ej(c)&&a!=="_self")return $3(e||"",a),new Mw(null);const f=window.open(e||"",a,h);X(f,t,"popup-blocked");try{f.focus()}catch{}return new Mw(f)}function $3(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const z3="__/auth/handler",W3="emulator/auth/handler",H3=encodeURIComponent("fac");async function jw(t,e,n,r,i,s){X(t.config.authDomain,t,"auth-domain-config-required"),X(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:yo,eventId:i};if(e instanceof bC){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",WO(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,f]of Object.entries({}))o[h]=f}if(e instanceof Il){const h=e.getScopes().filter(f=>f!=="");h.length>0&&(o.scopes=h.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const h of Object.keys(a))a[h]===void 0&&delete a[h];const l=await t._getAppCheckToken(),c=l?`#${H3}=${encodeURIComponent(l)}`:"";return`${q3(t)}?${ml(a).slice(1)}${c}`}function q3({config:t}){return t.emulator?Ry(t,W3):`https://${t.authDomain}/${z3}`}/**
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
 */const df="webStorageSupport";class K3{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=LC,this._completeRedirectFn=y3,this._overrideRedirectResult=p3}async _openPopup(e,n,r,i){var s;lr((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await jw(e,n,r,lm(),i);return B3(e,o,Oy())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await jw(e,n,r,lm(),i);return Yj(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(lr(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await O3(e),r=new _3(e);return n.register("authEvent",i=>(X(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(df,{type:df},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[df];o!==void 0&&n(!!o),ar(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=x3(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return CC()||EC()||Vy()}}const G3=K3;var Fw="@firebase/auth",Uw="1.7.9";/**
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
 */class Q3{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){X(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Y3(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function X3(t){Zs(new zi("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;X(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:AC(t)},c=new Cj(r,i,s,l);return Dj(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Zs(new zi("auth-internal",e=>{const n=Dy(e.getProvider("auth").getImmediate());return(r=>new Q3(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),zr(Fw,Uw,Y3(t)),zr(Fw,Uw,"esm2017")}/**
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
 */const J3=5*60,Z3=NI("authIdTokenMaxAge")||J3;let Bw=null;const eF=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Z3)return;const i=n==null?void 0:n.token;Bw!==i&&(Bw=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function tF(t=jI()){const e=Wg(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Vj(t,{popupRedirectResolver:G3,persistence:[s3,Kj,LC]}),r=NI("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=eF(s.toString());$j(n,o,()=>o(n.currentUser)),Bj(n,a=>o(a))}}const i=VI("auth");return i&&Nj(n,`http://${i}`),n}function nF(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}Aj({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=bn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",nF().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});X3("Browser");const rF={apiKey:"AIzaSyDszU29OvzBBkeG7Ojlw7mRJsB-i3qA2Yk",authDomain:"uscreativ-devz.firebaseapp.com",projectId:"uscreativ-devz",storageBucket:"uscreativ-devz.appspot.com",messagingSenderId:"309170960642",appId:"1:309170960642:web:eb1a529dcd56dc6ffa6a1b",measurementId:"G-P0NXZ2TXPS"},zC=MI(rF),dn=F6(zC),ff=tF(zC),iF=$S`
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;$S`
0% {
  box-shadow: 0 0 0 0 rgba(255, 107, 107, 0.6);
}
100% {
  box-shadow: 0 0 0 30px rgba(255, 107, 107, 0);
}
`;const WC={hidden:{opacity:0,scale:.8},visible:{opacity:1,scale:1},exit:{opacity:0,scale:.8}},sF=j.div`
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
  animation: ${iF} 1s ease-in forwards;
`,oF=({message:t,type:e})=>{const{closeAlert:n}=Cl();return g.jsx(sF,{type:e,onClick:n,children:g.jsx("p",{children:t})})},aF=j.div`
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
`,lF=j.div`
  background-color: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  width: 90%;
  max-width: 400px;
  text-align: center;
`,HC=j.button`
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
`,uF=j(HC)`
  background-color: #dc3545;

  &:hover {
    background-color: #c82333;
  }
`,cF=({message:t,onConfirm:e,onCancel:n})=>g.jsx(aF,{children:g.jsxs(lF,{children:[g.jsx("p",{children:t}),g.jsxs("div",{children:[g.jsx(HC,{onClick:e,children:"Confirm"}),g.jsx(uF,{onClick:n,children:"Cancel"})]})]})});var qC={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},$w=Bt.createContext&&Bt.createContext(qC),hF=["attr","size","title"];function dF(t,e){if(t==null)return{};var n=fF(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function fF(t,e){if(t==null)return{};var n={};for(var r in t)if(Object.prototype.hasOwnProperty.call(t,r)){if(e.indexOf(r)>=0)continue;n[r]=t[r]}return n}function Kc(){return Kc=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Kc.apply(this,arguments)}function zw(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function Gc(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?zw(Object(n),!0).forEach(function(r){pF(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):zw(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function pF(t,e,n){return e=mF(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function mF(t){var e=gF(t,"string");return typeof e=="symbol"?e:e+""}function gF(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function KC(t){return t&&t.map((e,n)=>Bt.createElement(e.tag,Gc({key:n},e.attr),KC(e.child)))}function Kt(t){return e=>Bt.createElement(yF,Kc({attr:Gc({},t.attr)},e),KC(t.child))}function yF(t){var e=n=>{var{attr:r,size:i,title:s}=t,o=dF(t,hF),a=i||n.size||"1em",l;return n.className&&(l=n.className),t.className&&(l=(l?l+" ":"")+t.className),Bt.createElement("svg",Kc({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,o,{className:l,style:Gc(Gc({color:t.color||n.color},n.style),t.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),s&&Bt.createElement("title",null,s),t.children)};return $w!==void 0?Bt.createElement($w.Consumer,null,n=>e(n)):e(qC)}function GC(t){return Kt({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M576 64H205.26A63.97 63.97 0 0 0 160 82.75L9.37 233.37c-12.5 12.5-12.5 32.76 0 45.25L160 429.25c12 12 28.28 18.75 45.25 18.75H576c35.35 0 64-28.65 64-64V128c0-35.35-28.65-64-64-64zm-84.69 254.06c6.25 6.25 6.25 16.38 0 22.63l-22.62 22.62c-6.25 6.25-16.38 6.25-22.63 0L384 301.25l-62.06 62.06c-6.25 6.25-16.38 6.25-22.63 0l-22.62-22.62c-6.25-6.25-6.25-16.38 0-22.63L338.75 256l-62.06-62.06c-6.25-6.25-6.25-16.38 0-22.63l22.62-22.62c6.25-6.25 16.38-6.25 22.63 0L384 210.75l62.06-62.06c6.25-6.25 16.38-6.25 22.63 0l22.62 22.62c6.25 6.25 6.25 16.38 0 22.63L429.25 256l62.06 62.06z"},child:[]}]})(t)}function vF(t){return Kt({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64zm215.39-149.71c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71z"},child:[]}]})(t)}function hm(t){return Kt({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M320 336c0 8.84-7.16 16-16 16h-96c-8.84 0-16-7.16-16-16v-48H0v144c0 25.6 22.4 48 48 48h416c25.6 0 48-22.4 48-48V288H320v48zm144-208h-80V80c0-25.6-22.4-48-48-48H176c-25.6 0-48 22.4-48 48v48H48c-25.6 0-48 22.4-48 48v80h512v-80c0-25.6-22.4-48-48-48zm-144 0H192V96h128v32z"},child:[]}]})(t)}function pf(t){return Kt({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M496 384H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v336c0 17.67 14.33 32 32 32h464c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zM464 96H345.94c-21.38 0-32.09 25.85-16.97 40.97l32.4 32.4L288 242.75l-73.37-73.37c-12.5-12.5-32.76-12.5-45.25 0l-68.69 68.69c-6.25 6.25-6.25 16.38 0 22.63l22.62 22.62c6.25 6.25 16.38 6.25 22.63 0L192 237.25l73.37 73.37c12.5 12.5 32.76 12.5 45.25 0l96-96 32.4 32.4c15.12 15.12 40.97 4.41 40.97-16.97V112c.01-8.84-7.15-16-15.99-16z"},child:[]}]})(t)}function _F(t){return Kt({tag:"svg",attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M336 64h-80c0-35.3-28.7-64-64-64s-64 28.7-64 64H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM192 40c13.3 0 24 10.7 24 24s-10.7 24-24 24-24-10.7-24-24 10.7-24 24-24zm121.2 231.8l-143 141.8c-4.7 4.7-12.3 4.6-17-.1l-82.6-83.3c-4.7-4.7-4.6-12.3.1-17L99.1 285c4.7-4.7 12.3-4.6 17 .1l46 46.4 106-105.2c4.7-4.7 12.3-4.6 17 .1l28.2 28.4c4.7 4.8 4.6 12.3-.1 17z"},child:[]}]})(t)}function wF(t){return Kt({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M416 192c0-88.4-93.1-160-208-160S0 103.6 0 192c0 34.3 14.1 65.9 38 92-13.4 30.2-35.5 54.2-35.8 54.5-2.2 2.3-2.8 5.7-1.5 8.7S4.8 352 8 352c36.6 0 66.9-12.3 88.7-25 32.2 15.7 70.3 25 111.3 25 114.9 0 208-71.6 208-160zm122 220c23.9-26 38-57.7 38-92 0-66.9-53.5-124.2-129.3-148.1.9 6.6 1.3 13.3 1.3 20.1 0 105.9-107.7 192-240 192-10.8 0-21.3-.8-31.7-1.9C207.8 439.6 281.8 480 368 480c41 0 79.1-9.2 111.3-25 21.8 12.7 52.1 25 88.7 25 3.2 0 6.1-1.9 7.3-4.8 1.3-2.9.7-6.3-1.5-8.7-.3-.3-22.4-24.2-35.8-54.5z"},child:[]}]})(t)}function EF(t){return Kt({tag:"svg",attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zM64 72c0-4.42 3.58-8 8-8h80c4.42 0 8 3.58 8 8v16c0 4.42-3.58 8-8 8H72c-4.42 0-8-3.58-8-8V72zm0 64c0-4.42 3.58-8 8-8h80c4.42 0 8 3.58 8 8v16c0 4.42-3.58 8-8 8H72c-4.42 0-8-3.58-8-8v-16zm192.81 248H304c8.84 0 16 7.16 16 16s-7.16 16-16 16h-47.19c-16.45 0-31.27-9.14-38.64-23.86-2.95-5.92-8.09-6.52-10.17-6.52s-7.22.59-10.02 6.19l-7.67 15.34a15.986 15.986 0 0 1-14.31 8.84c-.38 0-.75-.02-1.14-.05-6.45-.45-12-4.75-14.03-10.89L144 354.59l-10.61 31.88c-5.89 17.66-22.38 29.53-41 29.53H80c-8.84 0-16-7.16-16-16s7.16-16 16-16h12.39c4.83 0 9.11-3.08 10.64-7.66l18.19-54.64c3.3-9.81 12.44-16.41 22.78-16.41s19.48 6.59 22.77 16.41l13.88 41.64c19.77-16.19 54.05-9.7 66 14.16 2.02 4.06 5.96 6.5 10.16 6.5zM377 105L279.1 7c-4.5-4.5-10.6-7-17-7H256v128h128v-6.1c0-6.3-2.5-12.4-7-16.9z"},child:[]}]})(t)}function TF(t){return Kt({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 255.531c.253 136.64-111.18 248.372-247.82 248.468-59.015.042-113.223-20.53-155.822-54.911-11.077-8.94-11.905-25.541-1.839-35.607l11.267-11.267c8.609-8.609 22.353-9.551 31.891-1.984C173.062 425.135 212.781 440 256 440c101.705 0 184-82.311 184-184 0-101.705-82.311-184-184-184-48.814 0-93.149 18.969-126.068 49.932l50.754 50.754c10.08 10.08 2.941 27.314-11.313 27.314H24c-8.837 0-16-7.163-16-16V38.627c0-14.254 17.234-21.393 27.314-11.314l49.372 49.372C129.209 34.136 189.552 8 256 8c136.81 0 247.747 110.78 248 247.531zm-180.912 78.784l9.823-12.63c8.138-10.463 6.253-25.542-4.21-33.679L288 256.349V152c0-13.255-10.745-24-24-24h-16c-13.255 0-24 10.745-24 24v135.651l65.409 50.874c10.463 8.137 25.541 6.253 33.679-4.21z"},child:[]}]})(t)}function SF(t){return Kt({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"},child:[]}]})(t)}function xF(t){return Kt({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"},child:[]}]})(t)}function IF(t){return Kt({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M139.61 35.5a12 12 0 0 0-17 0L58.93 98.81l-22.7-22.12a12 12 0 0 0-17 0L3.53 92.41a12 12 0 0 0 0 17l47.59 47.4a12.78 12.78 0 0 0 17.61 0l15.59-15.62L156.52 69a12.09 12.09 0 0 0 .09-17zm0 159.19a12 12 0 0 0-17 0l-63.68 63.72-22.7-22.1a12 12 0 0 0-17 0L3.53 252a12 12 0 0 0 0 17L51 316.5a12.77 12.77 0 0 0 17.6 0l15.7-15.69 72.2-72.22a12 12 0 0 0 .09-16.9zM64 368c-26.49 0-48.59 21.5-48.59 48S37.53 464 64 464a48 48 0 0 0 0-96zm432 16H208a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h288a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-320H208a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h288a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16zm0 160H208a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h288a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z"},child:[]}]})(t)}function PF(t){return Kt({tag:"svg",attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"},child:[]}]})(t)}function QC(t){return Kt({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"},child:[]}]})(t)}const YC=N.createContext(void 0),Cl=()=>{const t=N.useContext(YC);if(!t)throw new Error("useAlert must be used within a AlertProvider");return t},CF=({children:t})=>{const[e,n]=N.useState(null),[r,i]=N.useState(!1),[s,o]=N.useState(!0),a=(h,f="info")=>{n(g.jsx(oF,{message:h,type:f})),i(!0)},l=(h,f,p)=>{n(g.jsx(cF,{message:h,onConfirm:()=>{f(),c()},onCancel:()=>{p&&p(),c()}})),i(!0)},c=()=>{i(!1),n(null)};return g.jsxs(YC.Provider,{value:{showNotification:a,showConfirmation:l,closeAlert:c,isVisible:r,isNotice:s,setIsNotice:o},children:[t,r&&g.jsxs(AF,{initial:"hidden",animate:"visible",exit:"exit",variants:WC,children:[e,g.jsx("div",{className:"close",children:g.jsx(GC,{onClick:c})})]})]})},AF=j(Ce.div)`
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
    background: ${he.dark};
    color: ${he.white};
    padding: 0.1rem 0.5rem;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
    border-radius: 0.5rem;
    transition: 0.3s ease-in-out;
    cursor: pointer;

    &:hover {
      scale: 1.05;
      background: ${he.primary};
    }
  }
`,RF=()=>{const[t,e]=N.useState(!1),{setIsNotice:n}=Cl(),{closePopup:r}=JC();N.useEffect(()=>{n(!1),localStorage.getItem("betaAgreementAccepted")&&r()},[]);const i=()=>{localStorage.setItem("betaAgreementAccepted","true"),r()};return g.jsxs(kF,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.6},children:[g.jsx("h2",{children:"Welcome to the Beta Version of UsCreativz"}),g.jsx("p",{children:"You're accessing a platform that is currently in development. Please be aware that this version may contain bugs, missing features, and performance issues."}),g.jsxs(bF,{children:[g.jsx("strong",{children:"Key Information:"}),g.jsxs("ul",{children:[g.jsx("li",{children:'This beta is provided "as is" with no guarantees of full functionality.'}),g.jsx("li",{children:"We are actively gathering feedback to improve the service."}),g.jsx("li",{children:"Your data may be subject to changes, interruptions, or loss during this phase."}),g.jsx("li",{children:"Any actions or uploads on this platform should be considered at your own risk."})]}),g.jsxs("p",{children:["By accepting, you agree to our ",g.jsx("a",{href:"https://uscreativz.com/terms",target:"_blank",children:"Terms and Conditions"})," and ",g.jsx("a",{href:"https://uscreativz.com/privacy",target:"_blank",children:"Privacy Policy"}),", which outline your rights and responsibilities, data handling, and potential risks during the beta phase."]}),g.jsx("p",{children:"Note: We may collect certain data to improve our platform, but we will handle your information securely and in accordance with our privacy policy."})]}),g.jsxs(VF,{children:[g.jsx(DF,{type:"checkbox",id:"terms",checked:t,onChange:()=>e(!t)}),g.jsxs("label",{htmlFor:"terms",children:["I acknowledge the risks and accept the"," ",g.jsx("a",{href:"https://uscreativz.com/terms",target:"_blank",children:"Terms and Conditions"})," and"," ",g.jsx("a",{href:"https://uscreativz.com/privacy",target:"_blank",children:"Privacy Policy"}),"."]})]}),g.jsx(NF,{children:g.jsx(OF,{whileHover:{scale:1.05},whileTap:{scale:.95},onClick:i,disabled:!t,children:"Accept and Proceed"})})]})},kF=j(Ce.div)`
  width: 100%;
  max-width: 600px;
  padding: 2rem;
  background: ${he.primary};
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
`,bF=j.div`
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
`,VF=j.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.9rem;

  a {
    color: #f692a3;
    text-decoration: none;
  }
`,DF=j.input`
  width: 1.25rem;
  height: 1.25rem;
`,NF=j.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`,OF=j(Ce.button)`
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
`,XC=N.createContext(void 0),JC=()=>{const t=N.useContext(XC);if(!t)throw new Error("usePopup must be used within a PopupProvider");return t},LF=({children:t})=>{const{popup:e}=My(),[n,r]=N.useState(null),[i,s]=N.useState(!1),{setIsNotice:o}=Cl();N.useEffect(()=>{a(g.jsx(RF,{}))},[]),N.useEffect(()=>{e&&a(e)},[e]);const a=c=>{r(c),s(!0)},l=()=>{s(!1),r(null),o(!0)};return g.jsxs(XC.Provider,{value:{openPopup:a,closePopup:l,isVisible:i,popupContent:n},children:[t,i&&g.jsxs(MF,{initial:"hidden",animate:"visible",exit:"exit",variants:WC,children:[g.jsx(jF,{children:n}),g.jsx("div",{className:"close",children:g.jsx(GC,{onClick:l})})]})]})},MF=j(Ce.div)`
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
`,jF=j(Ce.div)`
  width: 95%;
  height: 95vh;
  display: flex;
  justify-content: center;
  border-radius: 5px;
  padding 1rem;
  backdrop-filter: blur(0.1rem);
  font-family: "Comic Neue", sans-serif;

  overflow-y: auto;
`,FF=j.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: linear-gradient(45deg, #000, #222, #666);
  padding: 2rem;
  font-family: "Poppins", sans-serif;
`,UF=j.h1`
  font-size: 2rem;
  margin-bottom: 1.5rem;
  text-align: center;
  color: #222;
`,BF=j.form`
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
`,Ww=j(Ce.input)`
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
`,$F=j(Ce.select)`
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
`,ZC=j.div`
  width: 100%;
  color: #f692a3;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin: 1rem 0;

  input {
  margin-right: 0.5rem;
  }
`,eA=j.label`
  font-size: 1rem;
  padding: 0.5rem;
  background: #fff;
  color: #ed2647;
  text-align: center;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
`,zF=j(ZC)`

`,WF=j(eA)`

`,HF=j(Ce.button)`
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
`,qF=j(Ce.div).attrs(({progress:t})=>({style:{width:`${t}%`}}))`
  background: #e63946;
  height: 10px;
  border-radius: 5px;
  margin-top: 1rem;
  transition: width 0.5s ease-in-out;
`,KF=()=>{const{user:t,fbUser:e,login:n}=My(),{closePopup:r}=JC(),[i,s]=N.useState((e==null?void 0:e.displayName)||""),[o,a]=N.useState(""),[l,c]=N.useState([]),[h,f]=N.useState(""),[p,y]=N.useState(""),[x,I]=N.useState(!1),[R,w]=N.useState(0);N.useEffect(()=>{t!=null&&t.uid&&r()},[t]);const _=["Individual","Business"],S=["Web","Mobile"],b=["Design","Development","Content Creation"],O=T=>{l.includes(T)?c(l.filter(v=>v!==T)):c([...l,T])},M=async T=>{if(T.preventDefault(),!!(e!=null&&e.uid)){I(!0),w(50);try{const v={uid:e==null?void 0:e.uid,name:i,role:o,interests:l,platformPreference:h,registered:!0,credits:1e4};await uC(bi(Sl(dn,"users"),e.uid),v),w(100),n()}catch(v){y(`Error: ${v.message}`),w(0)}finally{I(!1)}}};return g.jsxs(FF,{children:[g.jsx(UF,{children:"Complete Your Profile"}),g.jsxs(BF,{onSubmit:M,children:[p&&g.jsx("p",{style:{color:"red"},children:p}),g.jsx(Ww,{type:"email",value:(e==null?void 0:e.email)||"Not Authorized",disabled:!0,required:!0}),g.jsx(Ww,{type:"text",value:i,onChange:T=>s(T.target.value),placeholder:(e==null?void 0:e.displayName)||"Not Authorized",disabled:!(e!=null&&e.uid),required:!0}),g.jsxs($F,{value:o,onChange:T=>a(T.target.value),whileFocus:{scale:1.05},disabled:!(e!=null&&e.uid),required:!0,children:[g.jsx("option",{value:"",disabled:!0,children:"Select your role"}),_.map(T=>g.jsx("option",{value:T,children:T},T))]}),g.jsxs(ZC,{children:[g.jsx(eA,{children:"Preferred Platform:"}),S.map(T=>g.jsxs("label",{children:[g.jsx("input",{type:"radio",name:"platform",value:T,checked:h===T,onChange:v=>f(v.target.value),disabled:!(e!=null&&e.uid),required:!0}),T]},T))]}),g.jsxs(zF,{children:[g.jsx(WF,{children:"Interests:"}),b.map(T=>g.jsxs("label",{children:[g.jsx("input",{type:"checkbox",value:T,checked:l.includes(T),onChange:()=>O(T),disabled:!(e!=null&&e.uid)}),T]},T))]}),g.jsx(HF,{type:"submit",whileHover:{scale:1.05},whileTap:{scale:.95},disabled:!(e!=null&&e.uid)||x,children:x?"Saving...":"Complete Profile"}),g.jsx(qF,{progress:R,initial:{width:0},animate:{width:`${R}%`}})]})]})},GF=async t=>{try{const e=bi(dn,"users",t),n=await nl(e);return n.exists()?n.data().projects||[]:(console.log("No user document found!"),[])}catch(e){throw console.error("Error fetching all projects:",e),new Error("Failed to fetch all projects.")}},QF=async t=>{try{const e=bi(dn,"users",t),n=await nl(e);if(n.exists()){const i=(n.data().projects||[]).filter(s=>!s.linkID);return console.log("Fetched unlinked projects:",i),i}else return console.log("No user document found!"),[]}catch(e){throw console.error("Error fetching unlinked projects:",e),new Error("Failed to fetch unlinked projects.")}},YF=async t=>{try{const e=bi(dn,"users",t),n=await nl(e);return n.exists()?(n.data().projects||[]).filter(i=>typeof i.linkID=="string"&&i.linkID.length>0):(console.log("No such user document found."),[])}catch(e){throw console.error("Error fetching linked projects:",e),new Error("Failed to fetch linked projects.")}},tA=async t=>{try{const e=Sl(dn,"users",t,"contractus_notifications");return(await Py(e)).docs.map(i=>i.data())}catch(e){return console.error("Error fetching notifications:",e),[]}},XF=async t=>{try{const e=[],n=[],r=[],i=Sl(dn,"contracts"),s=iC(i,sC("clientUID","==",t));return(await Py(s)).docs.forEach(a=>{const l=a.data();l.status==="pending"?e.push(l):l.status==="active"?n.push(l):l.status==="completed"&&r.push(l)}),{notifications:await tA(t),pendingServices:e,activeServices:n,completedServices:r}}catch(e){return console.error("Error fetching client contracts:",e),{notifications:[],pendingServices:[],activeServices:[],completedServices:[]}}},JF=async t=>{try{const e=[],n=[],r=[],i=Sl(dn,"contracts"),s=iC(i,sC("freelancerUID","==",t));return(await Py(s)).docs.forEach(a=>{const l=a.data();l.status==="pending"?e.push(l):l.status==="active"?n.push(l):l.status==="completed"&&r.push(l)}),{notifications:await tA(t),pendingContracts:e,activeContracts:n,completedContracts:r}}catch(e){return console.error("Error fetching freelancer contracts:",e),{notifications:[],pendingContracts:[],activeContracts:[],completedContracts:[]}}},ZF=async(t,e)=>e==="freelancer"?await JF(t):await XF(t),e9={client:{notifications:[{type:"Job Posted",message:"Your job has been posted.",timestamp:1696768567},{type:"Milestone Completed",message:"Freelancer completed a milestone.",timestamp:1696758567}],pendingServices:[{id:"1",status:"Pending",title:"Landing Page Design",consultation:{category:"Web Design",skills:["HTML","CSS","JavaScript"],experience:"Intermediate",requirements:["Responsive Design","SEO Optimization"]}}],activeServices:[{id:"2",status:"In Progress",title:"Portfolio Website",consultation:{category:"Web Development",skills:["React","TypeScript"],experience:"Advanced",requirements:["Animations","Cross-browser compatibility"]},proposal:{milestones:[{title:"Initial Design",description:"Create wireframes",budget:"$500",deadline:1698781567,status:"Completed"},{title:"Development",description:"Develop main site",budget:"$1500",deadline:1699992567,status:"In Progress"}],totalBudget:2e3,currency:"USD"},signitures:{client:"Client123",freelancer:"Freelancer456"}}],completedServices:[{id:"3",status:"Completed",title:"Business Card Design",consultation:{category:"Graphic Design",skills:["Photoshop","Illustrator"],experience:"Beginner",requirements:["Minimalist Design","Print-ready"]},review:{feedback:"Great work!",rating:5}}]},freelancer:{notifications:[{type:"Job Application",message:"Your application has been received.",timestamp:1696768567}],pendingContracts:[{id:"4",status:"Pending",title:"Brand Logo Design",consultation:{category:"Graphic Design",skills:["Illustrator","Photoshop"],experience:"Intermediate",requirements:["Logo Variants","Color Guide"]}}],activeContracts:[{id:"5",status:"In Progress",title:"Mobile App UI",consultation:{category:"UI/UX Design",skills:["Figma","Sketch"],experience:"Advanced",requirements:["High-fidelity mockups","User testing"]},proposal:{milestones:[{title:"Wireframes",description:"Low-fidelity wireframes",budget:"$600",deadline:1698882567,status:"Completed"},{title:"High-fidelity",description:"Design main screens",budget:"$1200",deadline:1699992567,status:"In Progress"}],totalBudget:1800,currency:"USD"},signitures:{client:"Client789",freelancer:"Freelancer123"}}],completedContracts:[{id:"6",status:"Completed",title:"E-Commerce Website",consultation:{category:"Web Development",skills:["Shopify","Liquid"],experience:"Expert",requirements:["Custom Theme","Payment Integration"]},review:{feedback:"Excellent work!",rating:5}}]}},nA=N.createContext(void 0),My=()=>{const t=N.useContext(nA);if(!t)throw new Error("useUser must be used within a UserProvider");return t},t9=({children:t})=>{const{showNotification:e}=Cl(),[n,r]=N.useState({}),[i,s]=N.useState(ff.currentUser),[o,a]=N.useState([]),[l,c]=N.useState([]),[h,f]=N.useState([]),[p,y]=N.useState(null),[x,I]=N.useState(null),[R,w]=N.useState(!1);N.useEffect(()=>{(async()=>{!e9||!n.uid||!n.role||(w(!0),await new Promise(V=>setTimeout(V,1e3)),y(await ZF(n.uid,n.role)),w(!1))})()},[n]),N.useEffect(()=>{const k=zj(ff,V=>{s(V)});return()=>k()},[]),N.useEffect(()=>{const k=ej(Sl(dn,"creditTransactions"),()=>{O()},V=>{console.error("Error fetching transactions:",V)});return()=>k()},[]),N.useEffect(()=>{i!=null&&i.uid&&O()},[i]),N.useEffect(()=>{n!=null&&n.uid&&P()},[n]);const _=async k=>{w(!0);try{await k()}catch(V){e(V==null?void 0:V.message,"error")}finally{w(!1)}},S=async()=>{await O()},b=async()=>{await _(async()=>{await Wj(ff),r({})})},O=async()=>{await _(async()=>{if(!(i!=null&&i.uid))return;const V=bi(dn,"users",i==null?void 0:i.uid),A=await nl(V);if(A.exists()){const _e=A.data();r(_e)}})},M=async k=>{try{if(!(n!=null&&n.uid))throw new Error("User is not authenticated");await uC(bi(dn,"users",n.uid),k,{merge:!0}),await O()}catch(V){console.error("Error updating user:",V)}},T=async k=>{if(!(k!=null&&k.uid)){e("User Not Registered","error");return}S()},v=async k=>{const V=(k==null?void 0:k.uid)||(i==null?void 0:i.uid);if(!V)return;await _(async()=>{const _e=await nl(bi(dn,"users",V));_e.exists()?await T(_e.data()):I(g.jsx(KF,{}))})},P=async()=>{if(n!=null&&n.uid)try{const k=await GF(n.uid);a(k);const V=await QF(n.uid);c(V);const A=await YF(n.uid);f(A)}catch{e("Error fetching projects","error")}},C=async(k,V,A=null)=>k.filter(_e=>A&&_e.linkID===A||_e.type===V);return g.jsx(nA.Provider,{value:{popup:x,user:n,fbUser:i,projects:o,unlinkedProjects:l,linkedProjects:h,userContractData:p,isLoading:R,handleOnboard:T,login:S,updateUser:M,refreshUser:O,fetchUserData:v,fetchProjects:P,filterProjects:C,logout:b},children:t})},Di=j.section`
  margin-bottom: 30px;
  padding: 20px;
  background: ${he.white};
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
`,Ni=j.h2`
  font-size: 24px;
  color: ${he.dark};
  border-bottom: 2px solid ${he.primary};
  padding-bottom: 10px;
  display: flex;
  align-items: center;
  transition: color 0.3s ease;

  &:hover {
    color: ${he.primary};
  }

  & > svg {
    margin-right: 8px;
    color: ${he.primary};
  }
`,Oi=j.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 20px;
`,Li=j(Ce.div)`
  background: ${he.accent};
  color: ${he.dark};
  padding: 15px;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, background 0.3s;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
    background: ${he.primary};
    color: ${he.white};
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  }
`,Mi=j.p`
  color: ${he.light};
  text-align: center;
`,n9=({notifications:t=[]})=>g.jsxs(Di,{className:"right",children:[g.jsxs(Ni,{children:[g.jsx(vF,{})," Notifications"]}),(t==null?void 0:t.length)>0?g.jsx(Oi,{children:t.map((e,n)=>g.jsxs(Li,{whileHover:{scale:1.05},whileTap:{scale:.95},children:["type: ",e.type," | ",e.message," | ",String(new Date(e.timestamp))]},n))}):g.jsx(Mi,{children:"No new notifications."})]}),r9=({data:t})=>{const{pendingServices:e=[],activeServices:n=[],completedServices:r=[]}=t||{};return g.jsxs(g.Fragment,{children:[g.jsxs(Di,{children:[g.jsxs(Ni,{children:[g.jsx(hm,{})," Pending Services"]}),e.length>0?g.jsx(Oi,{children:e.map(i=>g.jsxs(Li,{whileHover:{scale:1.05},whileTap:{scale:.95},children:[g.jsx("h3",{children:i.title}),g.jsxs("p",{children:["Status: ",i.status]})]},i.id))}):g.jsx(Mi,{children:"No pending services available."})]}),g.jsxs(Di,{children:[g.jsxs(Ni,{children:[g.jsx(hm,{})," Active Services"]}),n.length>0?g.jsx(Oi,{children:n.map(i=>g.jsxs(Li,{whileHover:{scale:1.05},whileTap:{scale:.95},children:[g.jsx("h3",{children:i.title}),g.jsxs("p",{children:["Status: ",i.status]})]},i.id))}):g.jsx(Mi,{children:"No active services available."})]}),g.jsxs(Di,{children:[g.jsxs(Ni,{children:[g.jsx(TF,{})," Completed Services"]}),r.length>0?g.jsx(Oi,{children:r.map(i=>g.jsxs(Li,{whileHover:{scale:1.05},whileTap:{scale:.95},children:[g.jsx("h3",{children:i.title}),g.jsxs("p",{children:["Rating: ",i.rating,"⭐"]})]},i.id))}):g.jsx(Mi,{children:"No completed services available."})]})]})},i9=({data:t})=>{const{pendingContracts:e=[],activeContracts:n=[],completedContracts:r=[]}=t||{};return g.jsxs(g.Fragment,{children:[g.jsxs(Di,{children:[g.jsxs(Ni,{children:[g.jsx(_F,{})," Pending contracts"]}),e.length>0?g.jsx(Oi,{children:e.map(i=>g.jsxs(Li,{whileHover:{scale:1.05},whileTap:{scale:.95},children:[g.jsx("h3",{children:i.title}),g.jsxs("p",{children:["Status: ",i.status]})]},i.id))}):g.jsx(Mi,{children:"No pending contracts available."})]}),g.jsxs(Di,{children:[g.jsxs(Ni,{children:[g.jsx(hm,{})," Active Contracts"]}),n.length>0?g.jsx(Oi,{children:n.map(i=>g.jsxs(Li,{whileHover:{scale:1.05},whileTap:{scale:.95},children:[g.jsx("h3",{children:i.title}),g.jsxs("p",{children:["Milestones: ",i.milestones.join(", ")]})]},i.id))}):g.jsx(Mi,{children:"No active contracts available."})]}),g.jsxs(Di,{children:[g.jsxs(Ni,{children:[g.jsx(xF,{})," Reviews"]}),r.length>0?g.jsx(Oi,{children:r.map(i=>g.jsx(Li,{whileHover:{scale:1.05},whileTap:{scale:.95},children:g.jsxs("p",{children:["Job ID: ",i.jobId," - Feedback: ",i.feedback," - Rating:"," ",i.rating,"⭐"]})},i.jobId))}):g.jsx(Mi,{children:"No reviews available."})]})]})},s9=()=>{const{user:t,userContractData:e,isLoading:n}=My(),{role:r}=t,{notifications:i}=e||{};return r?g.jsxs("div",{children:[g.jsxs(a9,{children:[r.toUpperCase(),"'s Dashboard"]}),g.jsxs(o9,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.5},children:[n?g.jsx(Hw,{children:"Loading your dashboard..."}):g.jsx("div",{className:"left-dash",children:r==="freelancer"?g.jsx(i9,{data:e}):g.jsx(r9,{data:e})}),g.jsx(n9,{notifications:i||[]})]})]}):g.jsx(Hw,{children:"INVALID_USER"})},o9=j(Ce.div)`
  height: 80vh;
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  padding: 2rem;
  background: linear-gradient(
    135deg,
    ${he.white} 30%,
    ${he.light} 100%
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
`,a9=j.h1`
  color: ${he.black};
  font-size: 21px;
`,Hw=j.p`
  width: 100%;
  color: ${he.dark};
  font-style: italic;
  text-align: center;
`,l9=j.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem;
  background-color: #fff;
  box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  @media (max-width: 768px) {
    padding: 1rem;
  }
`,mf=j.h2`
  color: #ed2647;
  font-size: 2rem;
  margin-bottom: 1rem;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`,ci=j.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
`,qw=j.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
`,Kw=j(Ce.div)`
  background-color: #f5f5f5;
  border-radius: 8px;
  padding: 1rem;
  width: 100%;
  max-width: 400px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  text-align: center;
  &:hover {
    background-color: #ed2647;
    color: #fff;
  }
`,Gw=j(Ce.button)`
  background-color: #ed2647;
  color: white;
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  cursor: pointer;
  width: 100%;
  max-width: 400px;
  transition: background-color 0.3s;
  margin-top: 1rem;
  &:hover {
    background-color: #f692a3;
  }
`,hi=j.label`
  font-weight: bold;
  margin-bottom: 0.5rem;
`,qo=j.select`
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 1rem;
  margin-bottom: 1rem;
`;j.label`
  display: flex;
  align-items: center;
  font-weight: normal;
  margin-bottom: 0.5rem;
`;j.input`
  margin-right: 0.5rem;
`;const u9=j.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`,c9=()=>{const[t,e]=N.useState(1),[n,r]=N.useState("Client"),[i,s]=N.useState(""),[o,a]=N.useState([]),[l,c]=N.useState(""),h=I=>{a(R=>R.includes(I)?R.filter(w=>w!==I):[...R,I])},f=()=>g.jsxs(g.Fragment,{children:[g.jsx(mf,{children:"Freelancer Profile Setup"}),g.jsxs(ci,{children:[g.jsx(hi,{children:"Experience Level:"}),g.jsxs(qo,{onChange:I=>c(I.target.value),children:[g.jsx("option",{value:"",children:"Select experience level"}),g.jsx("option",{value:"Novice",children:"Novice (less than 10 jobs)"}),g.jsx("option",{value:"Experienced",children:"Experienced (10-50 jobs)"}),g.jsx("option",{value:"Legend",children:"Legend (50+ jobs)"})]})]}),g.jsxs(ci,{children:[g.jsx(hi,{children:"Select Your Skills:"}),g.jsx(qw,{children:["React.js","Photoshop","Illustrator","Node.js","Figma"].map(I=>g.jsx(Kw,{whileHover:{scale:1.05},onClick:()=>h(I),style:{backgroundColor:o.includes(I)?"#ed2647":"#f5f5f5",color:o.includes(I)?"#fff":"#222"},children:I},I))})]})]}),p=()=>g.jsxs(g.Fragment,{children:[g.jsx(mf,{children:"Client Profile Setup"}),g.jsxs(ci,{children:[g.jsx(hi,{children:"Company Type:"}),g.jsxs(qo,{children:[g.jsx("option",{value:"",children:"Select company type"}),g.jsx("option",{value:"Business",children:"Business"}),g.jsx("option",{value:"Individual",children:"Individual"})]})]}),g.jsxs(ci,{children:[g.jsx(hi,{children:"Select Job Category:"}),g.jsx(qw,{children:["Digital Design","Web Development","Content Creation"].map(I=>g.jsx(Kw,{whileHover:{scale:1.05},onClick:()=>s(I),style:{backgroundColor:i===I?"#ed2647":"#f5f5f5",color:i===I?"#fff":"#222"},children:I},I))})]})]}),y=()=>g.jsxs(g.Fragment,{children:[g.jsx(mf,{children:"AI-Powered Job Consultation"}),g.jsxs(ci,{children:[g.jsx(hi,{children:"Describe Your Project Needs:"}),g.jsxs(qo,{children:[g.jsx("option",{value:"",children:"Select project type"}),g.jsx("option",{value:"Website",children:"I need a website design"}),g.jsx("option",{value:"Logo",children:"I need a logo design"}),g.jsx("option",{value:"App",children:"I need an app design"})]})]}),g.jsxs(ci,{children:[g.jsx(hi,{children:"Select Freelancer Experience Level:"}),g.jsxs(qo,{children:[g.jsx("option",{value:"",children:"Select experience level"}),g.jsx("option",{value:"Novice",children:"Novice"}),g.jsx("option",{value:"Experienced",children:"Experienced"}),g.jsx("option",{value:"Legend",children:"Legend"})]})]})]}),x=()=>{if(n==="Freelancer")return g.jsx(f,{});if(n==="Client"&&t===1)return g.jsx(p,{});if(n==="Client"&&t===2)return g.jsx(y,{})};return g.jsxs(l9,{children:[g.jsxs(ci,{children:[g.jsx(hi,{children:"User Type:"}),g.jsxs(qo,{onChange:I=>r(I.target.value),children:[g.jsx("option",{value:"Client",children:"Client"}),g.jsx("option",{value:"Freelancer",children:"Freelancer"})]})]}),x(),g.jsxs(u9,{children:[n==="Client"&&t===1&&g.jsx(Gw,{whileHover:{scale:1.05},onClick:()=>e(2),children:"Proceed to Contract Creation"}),n==="Freelancer"&&g.jsx(Gw,{whileHover:{scale:1.05},onClick:()=>alert("Profile Completed!"),children:"Complete Profile"})]})]})},Zi=j(Ce.div)`
  width: 80%;
  height: 80vh;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 2rem auto;
  padding: 2rem;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s;
  color: ${he.dark};
  overflow-y: auto;

  &:hover {
    transform: scale(1.02);
  }
`,h9=j.div`
  display: flex;
  align-items: center;
`,d9=j.img`
  border-radius: 50%;
  width: 80px;
  height: 80px;
  margin-right: 1rem;
`,f9=j.div`
  flex-grow: 1;
`,p9=j.h2`
  margin: 0;
  color: #ed2647;
`,m9=j.p`
  color: #666;
`,g9=j.div`
  padding: 1.5rem;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
`,y9=j.h3`
  color: #ed2647;
`,gf=j.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0;
`,yf=j.div`
  display: flex;
  align-items: center;
  color: #ed2647;
  margin-right: 0.5rem;

  svg {
    font-size: 1.5rem;
  }
`,v9=j.div`
  padding: 1.5rem;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
`,_9=j.h3`
  color: #ed2647;
`,Qw=j.p`
  margin: 0.5rem 0;
`,w9=j(Ce.button)`
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
`,E9={name:"John Doe",role:"Freelancer",profilePicture:"https://via.placeholder.com/80",analytics:{totalProjects:15,completedProjects:12,rating:4.8},earnings:{totalEarnings:5e3,pendingPayments:1200}},T9=()=>{const{name:t,role:e,profilePicture:n,analytics:r,earnings:i}=E9;return g.jsxs(Zi,{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.95},children:[g.jsxs(h9,{children:[g.jsx(d9,{src:n,alt:"Profile Picture"}),g.jsxs(f9,{children:[g.jsx(p9,{children:t}),g.jsx(m9,{children:e})]})]}),g.jsxs(g9,{children:[g.jsx(y9,{children:"Analytics"}),g.jsxs(gf,{children:[g.jsxs(yf,{children:[g.jsx(pf,{}),g.jsx("span",{children:"Total Projects"})]}),g.jsx("span",{children:r.totalProjects})]}),g.jsxs(gf,{children:[g.jsxs(yf,{children:[g.jsx(pf,{}),g.jsx("span",{children:"Completed Projects"})]}),g.jsx("span",{children:r.completedProjects})]}),g.jsxs(gf,{children:[g.jsxs(yf,{children:[g.jsx(pf,{}),g.jsx("span",{children:"Rating"})]}),g.jsx("span",{children:r.rating})]})]}),g.jsxs(v9,{children:[g.jsx(_9,{children:"Earnings"}),g.jsxs(Qw,{children:["Total Earnings: $",i.totalEarnings]}),g.jsxs(Qw,{children:["Pending Payments: $",i.pendingPayments]})]}),g.jsxs(w9,{whileHover:{scale:1.05},whileTap:{scale:.95},children:[g.jsx(QC,{style:{marginRight:"0.5rem"}}),"View Projects"]})]})},vf=[{level:"Novice",multiplier:1},{level:"Experienced",multiplier:1.5},{level:"Legend",multiplier:2}],S9=[{skill:"Responsive Layouts",baseValue:1e3,deadline:2},{skill:"Wireframing",baseValue:500,deadline:1},{skill:"Prototyping",baseValue:1500,deadline:2},{skill:"Color Theory",baseValue:400,deadline:1},{skill:"Web Animations",baseValue:1200,deadline:3},{skill:"Custom Fonts",baseValue:800,deadline:2},{skill:"Image Optimization",baseValue:300,deadline:1},{skill:"SEO-Friendly Design",baseValue:1e3,deadline:2},{skill:"Cross-Browser Compatibility",baseValue:900,deadline:2},{skill:"CMS Platforms (WordPress)",baseValue:2e3,deadline:3}],x9=[{skill:"React Development",baseValue:2e3,deadline:3},{skill:"API Integration",baseValue:1800,deadline:2},{skill:"JavaScript Debugging",baseValue:600,deadline:1},{skill:"State Management",baseValue:1500,deadline:2},{skill:"TypeScript Development",baseValue:2e3,deadline:3},{skill:"Database Configuration",baseValue:1800,deadline:2},{skill:"Server-Side Rendering (SSR)",baseValue:2200,deadline:3},{skill:"Unit Testing",baseValue:900,deadline:1},{skill:"Code Optimization",baseValue:1e3,deadline:2},{skill:"Version Control (Git)",baseValue:500,deadline:1}],I9=[{skill:"Copywriting",baseValue:700,deadline:2},{skill:"Video Editing",baseValue:1500,deadline:3},{skill:"Graphic Design",baseValue:1200,deadline:2},{skill:"Podcast Editing",baseValue:800,deadline:2},{skill:"Blog Writing",baseValue:500,deadline:1},{skill:"Infographic Creation",baseValue:1e3,deadline:2},{skill:"Social Media Post Design",baseValue:800,deadline:1},{skill:"SEO Writing",baseValue:600,deadline:1},{skill:"Email Campaign Design",baseValue:1e3,deadline:2},{skill:"Scriptwriting",baseValue:800,deadline:2}];function P9(t,e){const n=t.map(s=>s.skill),r=t.reduce((s,o)=>s+o.baseValue*e.multiplier,0),i=t.reduce((s,o)=>s+o.deadline,0);return{skillTitles:n,totalBaseValue:r,totalDeadlines:i}}const Yw=t=>{switch(t){case 1:return"What type of project are you looking to get done?";case 2:return"Awesome! Now, please select the skills you believe are important for this project. Don't worry, we can suggest some!";case 3:return"Great choice! How much experience should the freelancer have? Novice, Experienced, or a Legend?";case 4:return"Please provide some additional details about your project timeline and budget.";case 5:return"Here's a summary of your project. Please confirm or make changes before submission.";default:return"Thank you for submitting your project!"}},C9=j(Zi)`
  flex-direction: row;
  align-items: center;

  .input {
    width: 100%;
    height: 100%;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
    padding: 0 1rem;
    padding-bottom: 1rem;
     overflow-y: auto;
  }
`,A9=j.div`
width: 40%;
height: 100%;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  overflow-y: auto;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
`,yu=j.h2`
  color: #ed2647;
  font-size: 2.5rem;
  margin-bottom: 2rem;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`,R9=j(Ce.div)`

  background-color: ${({isAI:t})=>t?"#f5f5f5":"#ed2647"};
  color: ${({isAI:t})=>t?"#222":"#fff"};
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 15px;
  width: fit-content;
  max-width: 80%;
  ${({isAI:t})=>t?"align-self: flex-start;":"align-self: flex-end;"}
`,_f=j.div`
  margin: 1.5rem 0;
  display: flex;
  flex-direction: column;
`,wf=j.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
`,Ef=j(Ce.div)`
  background-color: #f5f5f5;
  border-radius: 8px;
  padding: 1rem;
  width: 100%;
  max-width: 300px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  text-align: center;
  &:hover {
    background-color: #ed2647;
    color: white;
  }
`;j.input`
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 1rem;
`;const k9=j(Ce.button)`
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
  margin-top: 1rem;
  &:hover {
    background-color: #f692a3;
  }
`;j.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;const b9=j.div`
  background-color: #f0f0f0;
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.05);
  margin-top: 2rem;
  color: ${he.dark};
`,V9=()=>{const t=cl(),[e,n]=N.useState(1),[r,i]=N.useState([{message:Yw(1),isAI:!0}]),[s,o]=N.useState(""),[a,l]=N.useState([]),[c,h]=N.useState([]),[f,p]=N.useState(null),[y,x]=N.useState({});N.useEffect(()=>{if(s)switch(s){case"Web Design":l(S9);break;case"Software Development":l(x9);break;case"Content Creation":l(I9);break}},[s]),N.useEffect(()=>{f&&c&&x(P9(c,f))},[f,c]);const I=S=>{h(b=>b.includes(S)?b.filter(O=>O!==S):[...b,S])},R=()=>{e<4?(n(e+1),i([...r,{message:Yw(e+1),isAI:!0}])):w()},w=()=>{alert("Project submitted successfully!"),t("/match")},_=()=>{var S;switch(e){case 1:return g.jsxs(_f,{children:[g.jsx(yu,{children:"Select Your Project Category"}),g.jsx(wf,{children:["Web Design","Software Development","Content Creation"].map(b=>g.jsx(Ef,{whileHover:{scale:1.05},onClick:()=>o(b),style:{backgroundColor:s===b?"#ed2647":"#f5f5f5",color:s===b?"#fff":"#222"},children:b},b))})]});case 2:return g.jsxs(_f,{children:[g.jsx(yu,{children:"Select Skills for the Project"}),g.jsx(wf,{children:a==null?void 0:a.map(b=>g.jsx(Ef,{whileHover:{scale:1.05},onClick:()=>I(b),style:{backgroundColor:c.includes(b)?"#ed2647":"#f5f5f5",color:c.includes(b)?"#fff":"#222"},children:b.skill},b.skill))})]});case 3:return g.jsxs(_f,{children:[g.jsx(yu,{children:"Select Freelancer Experience Level"}),g.jsx(wf,{children:vf==null?void 0:vf.map(b=>g.jsx(Ef,{whileHover:{scale:1.05},onClick:()=>p(b),style:{backgroundColor:f===b?"#ed2647":"#f5f5f5",color:f===b?"#fff":"#222"},children:b.level},b.level))})]});case 4:return g.jsxs(b9,{children:[g.jsx(yu,{children:"Project Summary"}),g.jsxs("p",{children:[g.jsx("strong",{children:"Category:"})," ",s]}),g.jsxs("p",{children:[g.jsx("strong",{children:"Skills:"})," ",((S=y.skillTitles)==null?void 0:S.join(", "))||"None selected"]}),g.jsxs("p",{children:[g.jsx("strong",{children:"Experience Level:"})," ",(f==null?void 0:f.level)||"Not specified"]}),g.jsxs("p",{children:[g.jsx("strong",{children:"Budget:"})," ",y.totalBaseValue||"Not specified"]}),g.jsxs("p",{children:[g.jsx("strong",{children:"Timeline:"})," ",y.totalDeadlines||"Not specified"]})]});default:return null}};return g.jsxs(C9,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.5},children:[g.jsxs("div",{className:"input",children:[_(),g.jsx(k9,{onClick:R,children:"Next"})]}),g.jsx(A9,{children:r.map((S,b)=>g.jsx(R9,{isAI:S.isAI,children:S.message},b))})]})},D9=[{id:1,name:"Alice Smith",bio:"Expert in UI/UX Design",skills:["Figma","Photoshop"],rating:4.8,completedJobs:50,experience:"Legend"},{id:2,name:"John Doe",bio:"Full Stack Developer",skills:["React.js","Node.js"],rating:4.5,completedJobs:30,experience:"Experienced"},{id:3,name:"Jane Roe",bio:"Graphic Designer",skills:["Illustrator","Photoshop"],rating:4.2,completedJobs:20,experience:"Novice"}],N9=j(Zi)`

`,O9=j.h2`
  color: #ed2647;
  font-size: 2rem;
  margin-bottom: 2rem;
  text-align: center;
`,L9=j.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  
  .filters {
  display: flex;
  gap: 1rem;
  height: 2rem;
  }
`,Tf=j(Ce.button)`
  background-color: #ed2647;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  &:hover {
    background-color: #f692a3;
  }
`,rA=j(Ce.div)`
  background-color: #f5f5f5;
  color: ${he.dark};
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 1rem;
 box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  cursor: pointer;
  transition: 0.5s ease-in-out;
  &:hover {
    background-color: #ed2647;
    
  }
`,M9=j.div`
  text-align: left;
`,vu=j.div`
  margin: 0.5rem 0;
`;j(rA)`
  background-color: ${he.primary};
  color: white;
  text-align: center;
  &:hover {
    background-color: #0056b3;
  }
`;const j9=j.div`

select {
margin-left: 1rem;
background-color: ${he.primary};
padding: 0.5rem;
border-radius: 6px;
}
`,F9=()=>{const t=cl(),[e,n]=N.useState(""),[r,i]=N.useState("rating"),o=D9.filter(l=>e?l.experience===e:!0).sort((l,c)=>r==="rating"?c.rating-l.rating:c.completedJobs-l.completedJobs),a=l=>{console.log(`Selected Freelancer: ${l.name}`),t("/contract")};return g.jsxs(N9,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.5},children:[g.jsx(O9,{children:"AI-Powered Freelancer Matching"}),g.jsxs(L9,{children:[g.jsxs("div",{className:"filters",children:[g.jsx(Tf,{onClick:()=>n("Novice"),style:{backgroundColor:e==="Novice"?"#ed2647":"${colors.primary}"},children:"Novice"}),g.jsx(Tf,{onClick:()=>n("Experienced"),style:{backgroundColor:e==="Experienced"?"#ed2647":"${colors.primary}"},children:"Experienced"}),g.jsx(Tf,{onClick:()=>n("Legend"),style:{backgroundColor:e==="Legend"?"#ed2647":"${colors.primary}"},children:"Legend"})]}),g.jsx(j9,{children:g.jsxs("label",{children:["Sort By:",g.jsxs("select",{value:r,onChange:l=>i(l.target.value),children:[g.jsx("option",{value:"rating",children:"Rating"}),g.jsx("option",{value:"completedJobs",children:"Completed Jobs"})]})]})})]}),o.slice(0,3).map(l=>g.jsx(rA,{onClick:()=>a(l),children:g.jsxs(M9,{children:[g.jsx("h3",{children:l.name}),g.jsxs(vu,{children:[g.jsx("strong",{children:"Bio:"})," ",l.bio]}),g.jsxs(vu,{children:[g.jsx("strong",{children:"Skills:"})," ",l.skills.join(", ")]}),g.jsxs(vu,{children:[g.jsx("strong",{children:"Rating:"})," ",l.rating]}),g.jsxs(vu,{children:[g.jsx("strong",{children:"Completed Jobs:"})," ",l.completedJobs]})]})},l.id)),o.length===0&&g.jsx("p",{children:"No freelancers found."})]})},U9=j(Zi)`

`,B9=j.h2`
  text-align: center;
  color: #ed2647;
  margin-bottom: 1rem;
  font-size: 2rem;
`,$9=j.div`
  margin-bottom: 2rem;
  padding: 1rem;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
`,z9=j.h3`
  color: #ed2647;
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`,W9=j.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #333;
`,H9=j.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
  padding: 1rem;
  background-color: #f0f0f0;
  border-radius: 10px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
`,Sf=j.div`
  flex: 1;
  text-align: center;
  color: #555;
`,q9=j.div`
  margin-top: 2rem;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  background-color: #e8ffe8;
  border-radius: 10px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
`,Xw=j.div`
  text-align: center;
`,Jw=j(Ce.button)`
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
`,K9="This contract outlines the project scope, payment terms, and milestones.",G9="In Progress",Q9=()=>{const t=cl(),[e,n]=N.useState({}),r=()=>{e.freelancer&&e.client?t("/manage"):alert("Both Parties must sign to agree.")};return g.jsxs(U9,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.5},children:[g.jsx(B9,{children:"Contract Agreement"}),g.jsxs($9,{children:[g.jsx(z9,{children:"Agreement Terms"}),g.jsx(W9,{children:K9})]}),g.jsxs(H9,{children:[g.jsxs(Sf,{children:[g.jsx("h4",{children:"Client Signature"}),g.jsx("p",{children:"Pending"})]}),g.jsxs(Sf,{children:[g.jsx("h4",{children:"Freelancer Signature"}),g.jsx("p",{children:"Pending"})]}),g.jsxs(Sf,{children:[g.jsx("h4",{children:"Project Status"}),g.jsx("p",{children:G9})]})]}),g.jsxs(q9,{children:[g.jsxs(Xw,{children:[g.jsx("h4",{children:"Client Signature"}),g.jsx(Jw,{onClick:()=>n({...e,client:"Client signed the contract"}),whileHover:{scale:1.05},children:e.client||"Client must sign"})]}),g.jsxs(Xw,{children:[g.jsx("h4",{children:"Freelancer Signature"}),g.jsx(Jw,{onClick:()=>n({...e,freelancer:"Freelancer signed the contract"}),whileHover:{scale:1.05},children:e.freelancer||"Freelancer must sign"})]})]}),g.jsx("button",{onClick:r,children:"Mint Certificate"})]})},Y9=j(Zi)``,X9=j.h2`
  text-align: center;
  color: #ed2647;
  margin-bottom: 1rem;
  font-size: 2rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`,J9=j(Ce.div)`
  background-color: #f9f9f9;
  border-radius: 10px;
  padding: 1.5rem;
  margin: 1rem 0;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 1rem;
  }
`,Z9=j.div`
  margin-top: 1rem;
  border-top: 1px solid #e0e0e0;
`,eU=j.h3`
  color: #ed2647;
  margin-bottom: 0.5rem;
`,di=j.p`
  font-size: 1rem;
  line-height: 1.5;
  color: #333;
`,iA=j(Ce.button)`
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
`,tU=j.div`
  margin-top: 1rem;
  border-top: 1px solid #e0e0e0;
  padding-top: 1rem;
`,nU=j.textarea`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  margin-top: 0.5rem;
  resize: none;
`,Zw=j(iA)`
margin: 0 0.5rem;
  margin-top: 0.5rem;
`,rU=j.div`
  margin-top: 1rem;
  border-top: 1px solid #e0e0e0;
  padding-top: 1rem;
`,iU=j.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`,sU=j(iA)`
  margin-top: 0.5rem;
`,oU=[{id:1,title:"Website Development Contract",terms:"Complete the website within 4 weeks. Budget: $2000.",status:"In Progress",budget:2e3,deadline:"2024-11-30",milestones:[{id:1,description:"Design mockup",completed:!1},{id:2,description:"Frontend development",completed:!1},{id:3,description:"Backend integration",completed:!1}],comments:[]},{id:2,title:"Logo Design Contract",terms:"Deliver 3 logo concepts in 1 week. Budget: $500.",status:"Pending Approval",budget:500,deadline:"2024-10-15",milestones:[{id:1,description:"Initial concept sketches",completed:!1},{id:2,description:"Final logo design",completed:!1}],comments:[]}],aU=()=>{const t=cl(),[e,n]=N.useState(oU),[r,i]=N.useState(""),[s,o]=N.useState(null),[a,l]=N.useState(""),c=f=>{n(p=>p.map(y=>y.id===f?{...y,comments:[...y.comments,r]}:y)),i("")},h=f=>{console.log(`Milestone review requested for contract ID: ${f}, Review: ${a}`),l(""),t("/review")};return g.jsxs(Y9,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.5},children:[g.jsx(X9,{children:"Contract Tracking and Management"}),g.jsx(Z9,{children:e.map(f=>g.jsxs(J9,{whileHover:{scale:1.02},onClick:()=>o(f.id===s?null:f.id),children:[g.jsx(eU,{children:f.title}),g.jsx(di,{children:f.terms}),g.jsxs(di,{children:["Status: ",f.status]}),g.jsxs(di,{children:["Budget: $",f.budget]}),g.jsxs(di,{children:["Deadline: ",f.deadline]}),s===f.id&&g.jsxs(g.Fragment,{children:[g.jsxs(rU,{children:[g.jsx("h4",{children:"Milestones"}),f.milestones.map(p=>g.jsxs(iU,{children:[g.jsx(di,{children:p.description}),g.jsx(di,{children:p.completed?"Completed":"Pending"})]},p.id)),g.jsx(sU,{onClick:()=>h(f.id),children:"Request Milestone Review"})]}),g.jsxs(tU,{children:[g.jsx("h4",{children:"Comments"}),f.comments.map((p,y)=>g.jsxs(di,{children:["- ",p]},y)),g.jsx(nU,{rows:3,placeholder:"Add a comment...",value:r,onChange:p=>i(p.target.value)}),g.jsx(Zw,{onClick:()=>c(f.id),children:"Submit Comment"}),g.jsx(Zw,{onClick:()=>t("/chat"),children:"Open Chat"})]})]})]},f.id))})]})},lU=j(Zi)`
  justify-content: flex-end;
`,uU=j.div`
  height: 80%;
  overflow-y: auto;
  margin-bottom: 1rem;
  padding: 0.5rem;
  border: 1px solid #e0e0e0;
  border-radius: 6px;
`,cU=j.div`
  background-color: ${({isSender:t})=>t?"#ed2647":"#f0f0f0"};
  color: ${({isSender:t})=>t?"#ffffff":"#000000"};
  padding: 0.5rem;
  border-radius: 6px;
  margin: 0.5rem 0;
  align-self: ${({isSender:t})=>t?"flex-end":"flex-start"};
  max-width: 75%;
  word-wrap: break-word;
`,hU=j.div`
  display: flex;
  margin-top: 1rem;
`,dU=j.textarea`
  flex: 1;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  resize: none;
`,fU=j.button`
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
`,pU=({userId:t=0,chatId:e})=>{const[n,r]=N.useState([]),[i,s]=N.useState(""),o=()=>{if(!i.trim())return;const a={id:n.length+1,senderId:t,recipientId:t===1?2:1,content:i,timestamp:new Date().toISOString()};r([...n,a]),s("")};return g.jsxs(lU,{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.95},children:[g.jsx(uU,{children:n.map(a=>g.jsx(cU,{isSender:a.senderId===t,children:a.content},a.id))}),g.jsxs(hU,{children:[g.jsx(dU,{rows:2,value:i,onChange:a=>s(a.target.value),placeholder:"Type your message..."}),g.jsx(fU,{onClick:o,children:"Send"})]})]})},mU=j(Zi)`

`,eE=j.h3`
  color: #ed2647;
  margin-bottom: 1rem;
`,gU=j.form`
  display: flex;
  flex-direction: column;
`,yU=j.textarea`
  margin-bottom: 1rem;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  resize: none;
`,vU=j.button`
  background-color: #ed2647;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background-color: #f692a3;
  }
`,_U=j.div`
  margin-top: 2rem;
  color: #000;
`,wU=j.div`
  background-color: #f9f9f9;
  border-radius: 10px;
  padding: 1rem;
  margin-bottom: 1rem;
  border: 1px solid #e0e0e0;
`,EU=j.p`
  margin: 0.5rem 0;
`,tE=j.button`
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
`,TU=({freelancerId:t=1,contractId:e})=>{const[n,r]=N.useState(""),[i,s]=N.useState([]),o=l=>{l.preventDefault();const c={id:i.length+1,milestoneId:1,freelancerId:t,content:n,submittedAt:new Date().toISOString(),status:"pending"};s([...i,c]),r("")},a=(l,c,h)=>{s(f=>f.map(p=>p.id===l?{...p,status:c==="approve"?"approved":"denied",dispute:c==="deny"?h:void 0}:p))};return g.jsxs(mU,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.5},children:[g.jsx(eE,{children:"Submit Milestone"}),g.jsxs(gU,{onSubmit:o,children:[g.jsx(yU,{rows:4,value:n,onChange:l=>r(l.target.value),placeholder:"Describe your milestone submission..."}),g.jsx(vU,{type:"submit",children:"Submit Milestone"})]}),g.jsxs(_U,{children:[g.jsx(eE,{children:"Milestone Submissions"}),i.map(l=>g.jsxs(wU,{children:[g.jsx(EU,{children:l.content}),g.jsxs("p",{children:["Status: ",l.status]}),l.status==="pending"&&g.jsxs(g.Fragment,{children:[g.jsx(tE,{onClick:()=>a(l.id,"approve"),children:"Approve"}),g.jsx(tE,{onClick:()=>a(l.id,"deny","Dispute reason here"),children:"Deny"})]}),l.status==="denied"&&l.dispute&&g.jsxs("p",{style:{color:"red"},children:["Dispute: ",l.dispute]})]},l.id))]})]})},SU=j.div`
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
`,Ko=j.button`
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
`;const xU=()=>{const t=cl(),e=n=>{t(`/${n}`)};return g.jsxs(SU,{children:[g.jsx(Ko,{onClick:()=>e(""),children:g.jsx(SF,{})}),g.jsx(Ko,{onClick:()=>e("create"),children:g.jsx(EF,{})}),g.jsx(Ko,{onClick:()=>e("manage"),children:g.jsx(IF,{})}),g.jsx(Ko,{onClick:()=>e("chat"),children:g.jsx(wF,{})}),g.jsx(Ko,{onClick:()=>e("profile"),children:g.jsx(QC,{})})]})},IU=()=>g.jsxs(Zb,{children:[g.jsxs(Yb,{children:[g.jsx(wn,{path:"/",element:g.jsx(s9,{})}),g.jsx(wn,{path:"/onboard",element:g.jsx(c9,{})}),g.jsx(wn,{path:"/create",element:g.jsx(V9,{})}),g.jsx(wn,{path:"/match",element:g.jsx(F9,{})}),g.jsx(wn,{path:"/contract",element:g.jsx(Q9,{})}),g.jsx(wn,{path:"/manage",element:g.jsx(aU,{})}),g.jsx(wn,{path:"/chat",element:g.jsx(pU,{})}),g.jsx(wn,{path:"/review",element:g.jsx(TU,{})}),g.jsx(wn,{path:"/profile",element:g.jsx(T9,{})})]}),g.jsx(xU,{})]}),PU=()=>{const{isNotice:t,setIsNotice:e}=Cl(),n=()=>{e(!1)};return t?g.jsxs(CU,{initial:{y:-50,opacity:0},animate:{y:0,opacity:1},transition:{duration:.5},children:[g.jsx(AU,{children:g.jsxs("span",{children:["You're using a beta version of UsCreativz. Expect bugs and unfinished features.",g.jsx("a",{href:"https://uscreativz.com/",target:"_blank",rel:"noopener noreferrer",children:"Learn More"})]})}),g.jsx(RU,{onClick:n,children:g.jsx(PF,{})})]}):null},CU=j(Ce.div)`
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
  background-color: ${he.primary};
  color: ${he.white};
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  z-index: 9999;

  a {
    color: ${he.white};
    text-decoration: underline;
    margin-left: 0.5rem;
    &:hover {
      color: ${he.accent};
    }
  }
`,AU=j.div`
  flex: 1;
  padding: 0 2rem;
`,RU=j.button`
  background: none;
  border: none;
  color: ${he.white};
  font-size: 1.2rem;
  cursor: pointer;
  position: absolute;
  right: 1rem;
  top: 50%;
  padding: 0;
  transform: translateY(-50%);
  transition: 0.3s ease-in-out;
  &:hover {
    color: ${he.white};
    scale: 1.05;
  }
`,kU=j.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: center;
  padding: 2rem 4rem;
  background-color: ${he.light};
  overflow-y: auto;
`,bU=()=>g.jsx(kU,{children:g.jsx(CF,{children:g.jsx(t9,{children:g.jsxs(LF,{children:[g.jsx(PU,{}),g.jsx(IU,{})]})})})});pS(document.getElementById("root")).render(g.jsx(N.StrictMode,{children:g.jsx(bU,{})}));
