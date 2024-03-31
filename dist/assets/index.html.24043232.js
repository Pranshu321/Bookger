const xb=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}};xb();var S={exports:{}},ae={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qu=Symbol.for("react.element"),Db=Symbol.for("react.portal"),Nb=Symbol.for("react.fragment"),Ob=Symbol.for("react.strict_mode"),Vb=Symbol.for("react.profiler"),Lb=Symbol.for("react.provider"),Mb=Symbol.for("react.context"),Fb=Symbol.for("react.forward_ref"),Ub=Symbol.for("react.suspense"),$b=Symbol.for("react.memo"),Bb=Symbol.for("react.lazy"),Vw=Symbol.iterator;function zb(t){return t===null||typeof t!="object"?null:(t=Vw&&t[Vw]||t["@@iterator"],typeof t=="function"?t:null)}var TT={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ST=Object.assign,RT={};function Ta(t,e,n){this.props=t,this.context=e,this.refs=RT,this.updater=n||TT}Ta.prototype.isReactComponent={};Ta.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ta.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function AT(){}AT.prototype=Ta.prototype;function __(t,e,n){this.props=t,this.context=e,this.refs=RT,this.updater=n||TT}var y_=__.prototype=new AT;y_.constructor=__;ST(y_,Ta.prototype);y_.isPureReactComponent=!0;var Lw=Array.isArray,PT=Object.prototype.hasOwnProperty,v_={current:null},CT={key:!0,ref:!0,__self:!0,__source:!0};function kT(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)PT.call(e,r)&&!CT.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Qu,type:t,key:s,ref:o,props:i,_owner:v_.current}}function jb(t,e){return{$$typeof:Qu,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function w_(t){return typeof t=="object"&&t!==null&&t.$$typeof===Qu}function qb(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Mw=/\/+/g;function mp(t,e){return typeof t=="object"&&t!==null&&t.key!=null?qb(""+t.key):e.toString(36)}function _d(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Qu:case Db:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+mp(o,0):r,Lw(i)?(n="",t!=null&&(n=t.replace(Mw,"$&/")+"/"),_d(i,e,n,"",function(u){return u})):i!=null&&(w_(i)&&(i=jb(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Mw,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Lw(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+mp(s,a);o+=_d(s,e,n,l,i)}else if(l=zb(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+mp(s,a++),o+=_d(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Lc(t,e,n){if(t==null)return t;var r=[],i=0;return _d(t,r,"","",function(s){return e.call(n,s,i++)}),r}function Wb(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var jt={current:null},yd={transition:null},Gb={ReactCurrentDispatcher:jt,ReactCurrentBatchConfig:yd,ReactCurrentOwner:v_};ae.Children={map:Lc,forEach:function(t,e,n){Lc(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Lc(t,function(){e++}),e},toArray:function(t){return Lc(t,function(e){return e})||[]},only:function(t){if(!w_(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ae.Component=Ta;ae.Fragment=Nb;ae.Profiler=Vb;ae.PureComponent=__;ae.StrictMode=Ob;ae.Suspense=Ub;ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Gb;ae.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=ST({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=v_.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)PT.call(e,l)&&!CT.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Qu,type:t.type,key:i,ref:s,props:r,_owner:o}};ae.createContext=function(t){return t={$$typeof:Mb,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Lb,_context:t},t.Consumer=t};ae.createElement=kT;ae.createFactory=function(t){var e=kT.bind(null,t);return e.type=t,e};ae.createRef=function(){return{current:null}};ae.forwardRef=function(t){return{$$typeof:Fb,render:t}};ae.isValidElement=w_;ae.lazy=function(t){return{$$typeof:Bb,_payload:{_status:-1,_result:t},_init:Wb}};ae.memo=function(t,e){return{$$typeof:$b,type:t,compare:e===void 0?null:e}};ae.startTransition=function(t){var e=yd.transition;yd.transition={};try{t()}finally{yd.transition=e}};ae.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};ae.useCallback=function(t,e){return jt.current.useCallback(t,e)};ae.useContext=function(t){return jt.current.useContext(t)};ae.useDebugValue=function(){};ae.useDeferredValue=function(t){return jt.current.useDeferredValue(t)};ae.useEffect=function(t,e){return jt.current.useEffect(t,e)};ae.useId=function(){return jt.current.useId()};ae.useImperativeHandle=function(t,e,n){return jt.current.useImperativeHandle(t,e,n)};ae.useInsertionEffect=function(t,e){return jt.current.useInsertionEffect(t,e)};ae.useLayoutEffect=function(t,e){return jt.current.useLayoutEffect(t,e)};ae.useMemo=function(t,e){return jt.current.useMemo(t,e)};ae.useReducer=function(t,e,n){return jt.current.useReducer(t,e,n)};ae.useRef=function(t){return jt.current.useRef(t)};ae.useState=function(t){return jt.current.useState(t)};ae.useSyncExternalStore=function(t,e,n){return jt.current.useSyncExternalStore(t,e,n)};ae.useTransition=function(){return jt.current.useTransition()};ae.version="18.2.0";S.exports=ae;var dr=S.exports,Tm={},hi={exports:{}},_n={},bT={exports:{}},xT={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(V,H){var K=V.length;V.push(H);e:for(;0<K;){var le=K-1>>>1,re=V[le];if(0<i(re,H))V[le]=H,V[K]=re,K=le;else break e}}function n(V){return V.length===0?null:V[0]}function r(V){if(V.length===0)return null;var H=V[0],K=V.pop();if(K!==H){V[0]=K;e:for(var le=0,re=V.length,Gt=re>>>1;le<Gt;){var Nt=2*(le+1)-1,Ir=V[Nt],We=Nt+1,Er=V[We];if(0>i(Ir,K))We<re&&0>i(Er,Ir)?(V[le]=Er,V[We]=K,le=We):(V[le]=Ir,V[Nt]=K,le=Nt);else if(We<re&&0>i(Er,K))V[le]=Er,V[We]=K,le=We;else break e}}return H}function i(V,H){var K=V.sortIndex-H.sortIndex;return K!==0?K:V.id-H.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,d=null,h=3,f=!1,v=!1,y=!1,E=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate!="undefined"?setImmediate:null;typeof navigator!="undefined"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(V){for(var H=n(u);H!==null;){if(H.callback===null)r(u);else if(H.startTime<=V)r(u),H.sortIndex=H.expirationTime,e(l,H);else break;H=n(u)}}function I(V){if(y=!1,m(V),!v)if(n(l)!==null)v=!0,J(A);else{var H=n(u);H!==null&&X(I,H.startTime-V)}}function A(V,H){v=!1,y&&(y=!1,g(w),w=-1),f=!0;var K=h;try{for(m(H),d=n(l);d!==null&&(!(d.expirationTime>H)||V&&!O());){var le=d.callback;if(typeof le=="function"){d.callback=null,h=d.priorityLevel;var re=le(d.expirationTime<=H);H=t.unstable_now(),typeof re=="function"?d.callback=re:d===n(l)&&r(l),m(H)}else r(l);d=n(l)}if(d!==null)var Gt=!0;else{var Nt=n(u);Nt!==null&&X(I,Nt.startTime-H),Gt=!1}return Gt}finally{d=null,h=K,f=!1}}var C=!1,_=null,w=-1,R=5,k=-1;function O(){return!(t.unstable_now()-k<R)}function q(){if(_!==null){var V=t.unstable_now();k=V;var H=!0;try{H=_(!0,V)}finally{H?Y():(C=!1,_=null)}}else C=!1}var Y;if(typeof p=="function")Y=function(){p(q)};else if(typeof MessageChannel!="undefined"){var Pe=new MessageChannel,W=Pe.port2;Pe.port1.onmessage=q,Y=function(){W.postMessage(null)}}else Y=function(){E(q,0)};function J(V){_=V,C||(C=!0,Y())}function X(V,H){w=E(function(){V(t.unstable_now())},H)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(V){V.callback=null},t.unstable_continueExecution=function(){v||f||(v=!0,J(A))},t.unstable_forceFrameRate=function(V){0>V||125<V?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<V?Math.floor(1e3/V):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(V){switch(h){case 1:case 2:case 3:var H=3;break;default:H=h}var K=h;h=H;try{return V()}finally{h=K}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(V,H){switch(V){case 1:case 2:case 3:case 4:case 5:break;default:V=3}var K=h;h=V;try{return H()}finally{h=K}},t.unstable_scheduleCallback=function(V,H,K){var le=t.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?le+K:le):K=le,V){case 1:var re=-1;break;case 2:re=250;break;case 5:re=1073741823;break;case 4:re=1e4;break;default:re=5e3}return re=K+re,V={id:c++,callback:H,priorityLevel:V,startTime:K,expirationTime:re,sortIndex:-1},K>le?(V.sortIndex=K,e(u,V),n(l)===null&&V===n(u)&&(y?(g(w),w=-1):y=!0,X(I,K-le))):(V.sortIndex=re,e(l,V),v||f||(v=!0,J(A))),V},t.unstable_shouldYield=O,t.unstable_wrapCallback=function(V){var H=h;return function(){var K=h;h=H;try{return V.apply(this,arguments)}finally{h=K}}}})(xT);bT.exports=xT;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var DT=S.exports,pn=bT.exports;function D(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var NT=new Set,Xl={};function qs(t,e){Xo(t,e),Xo(t+"Capture",e)}function Xo(t,e){for(Xl[t]=e,t=0;t<e.length;t++)NT.add(e[t])}var Fr=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"),Sm=Object.prototype.hasOwnProperty,Hb=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Fw={},Uw={};function Kb(t){return Sm.call(Uw,t)?!0:Sm.call(Fw,t)?!1:Hb.test(t)?Uw[t]=!0:(Fw[t]=!0,!1)}function Qb(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Yb(t,e,n,r){if(e===null||typeof e=="undefined"||Qb(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function qt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var It={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){It[t]=new qt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];It[e]=new qt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){It[t]=new qt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){It[t]=new qt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){It[t]=new qt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){It[t]=new qt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){It[t]=new qt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){It[t]=new qt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){It[t]=new qt(t,5,!1,t.toLowerCase(),null,!1,!1)});var I_=/[\-:]([a-z])/g;function E_(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(I_,E_);It[e]=new qt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(I_,E_);It[e]=new qt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(I_,E_);It[e]=new qt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){It[t]=new qt(t,1,!1,t.toLowerCase(),null,!1,!1)});It.xlinkHref=new qt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){It[t]=new qt(t,1,!1,t.toLowerCase(),null,!0,!0)});function T_(t,e,n,r){var i=It.hasOwnProperty(e)?It[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Yb(e,n,i,r)&&(n=null),r||i===null?Kb(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Gr=DT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Mc=Symbol.for("react.element"),Io=Symbol.for("react.portal"),Eo=Symbol.for("react.fragment"),S_=Symbol.for("react.strict_mode"),Rm=Symbol.for("react.profiler"),OT=Symbol.for("react.provider"),VT=Symbol.for("react.context"),R_=Symbol.for("react.forward_ref"),Am=Symbol.for("react.suspense"),Pm=Symbol.for("react.suspense_list"),A_=Symbol.for("react.memo"),ui=Symbol.for("react.lazy"),LT=Symbol.for("react.offscreen"),$w=Symbol.iterator;function Xa(t){return t===null||typeof t!="object"?null:(t=$w&&t[$w]||t["@@iterator"],typeof t=="function"?t:null)}var Ve=Object.assign,gp;function gl(t){if(gp===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);gp=e&&e[1]||""}return`
`+gp+t}var _p=!1;function yp(t,e){if(!t||_p)return"";_p=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{_p=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?gl(t):""}function Xb(t){switch(t.tag){case 5:return gl(t.type);case 16:return gl("Lazy");case 13:return gl("Suspense");case 19:return gl("SuspenseList");case 0:case 2:case 15:return t=yp(t.type,!1),t;case 11:return t=yp(t.type.render,!1),t;case 1:return t=yp(t.type,!0),t;default:return""}}function Cm(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Eo:return"Fragment";case Io:return"Portal";case Rm:return"Profiler";case S_:return"StrictMode";case Am:return"Suspense";case Pm:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case VT:return(t.displayName||"Context")+".Consumer";case OT:return(t._context.displayName||"Context")+".Provider";case R_:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case A_:return e=t.displayName||null,e!==null?e:Cm(t.type)||"Memo";case ui:e=t._payload,t=t._init;try{return Cm(t(e))}catch{}}return null}function Jb(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Cm(e);case 8:return e===S_?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function xi(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function MT(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Zb(t){var e=MT(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n!="undefined"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Fc(t){t._valueTracker||(t._valueTracker=Zb(t))}function FT(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=MT(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Bd(t){if(t=t||(typeof document!="undefined"?document:void 0),typeof t=="undefined")return null;try{return t.activeElement||t.body}catch{return t.body}}function km(t,e){var n=e.checked;return Ve({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:t._wrapperState.initialChecked})}function Bw(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=xi(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function UT(t,e){e=e.checked,e!=null&&T_(t,"checked",e,!1)}function bm(t,e){UT(t,e);var n=xi(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?xm(t,e.type,n):e.hasOwnProperty("defaultValue")&&xm(t,e.type,xi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function zw(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function xm(t,e,n){(e!=="number"||Bd(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var _l=Array.isArray;function Vo(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+xi(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Dm(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(D(91));return Ve({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function jw(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(D(92));if(_l(n)){if(1<n.length)throw Error(D(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:xi(n)}}function $T(t,e){var n=xi(e.value),r=xi(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function qw(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function BT(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Nm(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?BT(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Uc,zT=function(t){return typeof MSApp!="undefined"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Uc=Uc||document.createElement("div"),Uc.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Uc.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Jl(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Cl={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ex=["Webkit","ms","Moz","O"];Object.keys(Cl).forEach(function(t){ex.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Cl[e]=Cl[t]})});function jT(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Cl.hasOwnProperty(t)&&Cl[t]?(""+e).trim():e+"px"}function qT(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=jT(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var tx=Ve({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Om(t,e){if(e){if(tx[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(D(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(D(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(D(61))}if(e.style!=null&&typeof e.style!="object")throw Error(D(62))}}function Vm(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Lm=null;function P_(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Mm=null,Lo=null,Mo=null;function Ww(t){if(t=Ju(t)){if(typeof Mm!="function")throw Error(D(280));var e=t.stateNode;e&&(e=Kh(e),Mm(t.stateNode,t.type,e))}}function WT(t){Lo?Mo?Mo.push(t):Mo=[t]:Lo=t}function GT(){if(Lo){var t=Lo,e=Mo;if(Mo=Lo=null,Ww(t),e)for(t=0;t<e.length;t++)Ww(e[t])}}function HT(t,e){return t(e)}function KT(){}var vp=!1;function QT(t,e,n){if(vp)return t(e,n);vp=!0;try{return HT(t,e,n)}finally{vp=!1,(Lo!==null||Mo!==null)&&(KT(),GT())}}function Zl(t,e){var n=t.stateNode;if(n===null)return null;var r=Kh(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(D(231,e,typeof n));return n}var Fm=!1;if(Fr)try{var Ja={};Object.defineProperty(Ja,"passive",{get:function(){Fm=!0}}),window.addEventListener("test",Ja,Ja),window.removeEventListener("test",Ja,Ja)}catch{Fm=!1}function nx(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var kl=!1,zd=null,jd=!1,Um=null,rx={onError:function(t){kl=!0,zd=t}};function ix(t,e,n,r,i,s,o,a,l){kl=!1,zd=null,nx.apply(rx,arguments)}function sx(t,e,n,r,i,s,o,a,l){if(ix.apply(this,arguments),kl){if(kl){var u=zd;kl=!1,zd=null}else throw Error(D(198));jd||(jd=!0,Um=u)}}function Ws(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function YT(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Gw(t){if(Ws(t)!==t)throw Error(D(188))}function ox(t){var e=t.alternate;if(!e){if(e=Ws(t),e===null)throw Error(D(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Gw(i),t;if(s===r)return Gw(i),e;s=s.sibling}throw Error(D(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(D(189))}}if(n.alternate!==r)throw Error(D(190))}if(n.tag!==3)throw Error(D(188));return n.stateNode.current===n?t:e}function XT(t){return t=ox(t),t!==null?JT(t):null}function JT(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=JT(t);if(e!==null)return e;t=t.sibling}return null}var ZT=pn.unstable_scheduleCallback,Hw=pn.unstable_cancelCallback,ax=pn.unstable_shouldYield,lx=pn.unstable_requestPaint,Ge=pn.unstable_now,ux=pn.unstable_getCurrentPriorityLevel,C_=pn.unstable_ImmediatePriority,eS=pn.unstable_UserBlockingPriority,qd=pn.unstable_NormalPriority,cx=pn.unstable_LowPriority,tS=pn.unstable_IdlePriority,qh=null,hr=null;function dx(t){if(hr&&typeof hr.onCommitFiberRoot=="function")try{hr.onCommitFiberRoot(qh,t,void 0,(t.current.flags&128)===128)}catch{}}var $n=Math.clz32?Math.clz32:px,hx=Math.log,fx=Math.LN2;function px(t){return t>>>=0,t===0?32:31-(hx(t)/fx|0)|0}var $c=64,Bc=4194304;function yl(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Wd(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=yl(a):(s&=o,s!==0&&(r=yl(s)))}else o=n&~i,o!==0?r=yl(o):s!==0&&(r=yl(s));if(r===0)return 0;if(e!==0&&e!==r&&(e&i)===0&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if((r&4)!==0&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-$n(e),i=1<<n,r|=t[n],e&=~i;return r}function mx(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function gx(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-$n(s),a=1<<o,l=i[o];l===-1?((a&n)===0||(a&r)!==0)&&(i[o]=mx(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function $m(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function nS(){var t=$c;return $c<<=1,($c&4194240)===0&&($c=64),t}function wp(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Yu(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-$n(e),t[e]=n}function _x(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-$n(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function k_(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-$n(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var pe=0;function rS(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var iS,b_,sS,oS,aS,Bm=!1,zc=[],Ii=null,Ei=null,Ti=null,eu=new Map,tu=new Map,fi=[],yx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Kw(t,e){switch(t){case"focusin":case"focusout":Ii=null;break;case"dragenter":case"dragleave":Ei=null;break;case"mouseover":case"mouseout":Ti=null;break;case"pointerover":case"pointerout":eu.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":tu.delete(e.pointerId)}}function Za(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Ju(e),e!==null&&b_(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function vx(t,e,n,r,i){switch(e){case"focusin":return Ii=Za(Ii,t,e,n,r,i),!0;case"dragenter":return Ei=Za(Ei,t,e,n,r,i),!0;case"mouseover":return Ti=Za(Ti,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return eu.set(s,Za(eu.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,tu.set(s,Za(tu.get(s)||null,t,e,n,r,i)),!0}return!1}function lS(t){var e=ds(t.target);if(e!==null){var n=Ws(e);if(n!==null){if(e=n.tag,e===13){if(e=YT(n),e!==null){t.blockedOn=e,aS(t.priority,function(){sS(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function vd(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=zm(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Lm=r,n.target.dispatchEvent(r),Lm=null}else return e=Ju(n),e!==null&&b_(e),t.blockedOn=n,!1;e.shift()}return!0}function Qw(t,e,n){vd(t)&&n.delete(e)}function wx(){Bm=!1,Ii!==null&&vd(Ii)&&(Ii=null),Ei!==null&&vd(Ei)&&(Ei=null),Ti!==null&&vd(Ti)&&(Ti=null),eu.forEach(Qw),tu.forEach(Qw)}function el(t,e){t.blockedOn===e&&(t.blockedOn=null,Bm||(Bm=!0,pn.unstable_scheduleCallback(pn.unstable_NormalPriority,wx)))}function nu(t){function e(i){return el(i,t)}if(0<zc.length){el(zc[0],t);for(var n=1;n<zc.length;n++){var r=zc[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Ii!==null&&el(Ii,t),Ei!==null&&el(Ei,t),Ti!==null&&el(Ti,t),eu.forEach(e),tu.forEach(e),n=0;n<fi.length;n++)r=fi[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<fi.length&&(n=fi[0],n.blockedOn===null);)lS(n),n.blockedOn===null&&fi.shift()}var Fo=Gr.ReactCurrentBatchConfig,Gd=!0;function Ix(t,e,n,r){var i=pe,s=Fo.transition;Fo.transition=null;try{pe=1,x_(t,e,n,r)}finally{pe=i,Fo.transition=s}}function Ex(t,e,n,r){var i=pe,s=Fo.transition;Fo.transition=null;try{pe=4,x_(t,e,n,r)}finally{pe=i,Fo.transition=s}}function x_(t,e,n,r){if(Gd){var i=zm(t,e,n,r);if(i===null)bp(t,e,r,Hd,n),Kw(t,r);else if(vx(i,t,e,n,r))r.stopPropagation();else if(Kw(t,r),e&4&&-1<yx.indexOf(t)){for(;i!==null;){var s=Ju(i);if(s!==null&&iS(s),s=zm(t,e,n,r),s===null&&bp(t,e,r,Hd,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else bp(t,e,r,null,n)}}var Hd=null;function zm(t,e,n,r){if(Hd=null,t=P_(r),t=ds(t),t!==null)if(e=Ws(t),e===null)t=null;else if(n=e.tag,n===13){if(t=YT(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Hd=t,null}function uS(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ux()){case C_:return 1;case eS:return 4;case qd:case cx:return 16;case tS:return 536870912;default:return 16}default:return 16}}var _i=null,D_=null,wd=null;function cS(){if(wd)return wd;var t,e=D_,n=e.length,r,i="value"in _i?_i.value:_i.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return wd=i.slice(t,1<r?1-r:void 0)}function Id(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function jc(){return!0}function Yw(){return!1}function yn(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?jc:Yw,this.isPropagationStopped=Yw,this}return Ve(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=jc)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=jc)},persist:function(){},isPersistent:jc}),e}var Sa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},N_=yn(Sa),Xu=Ve({},Sa,{view:0,detail:0}),Tx=yn(Xu),Ip,Ep,tl,Wh=Ve({},Xu,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:O_,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==tl&&(tl&&t.type==="mousemove"?(Ip=t.screenX-tl.screenX,Ep=t.screenY-tl.screenY):Ep=Ip=0,tl=t),Ip)},movementY:function(t){return"movementY"in t?t.movementY:Ep}}),Xw=yn(Wh),Sx=Ve({},Wh,{dataTransfer:0}),Rx=yn(Sx),Ax=Ve({},Xu,{relatedTarget:0}),Tp=yn(Ax),Px=Ve({},Sa,{animationName:0,elapsedTime:0,pseudoElement:0}),Cx=yn(Px),kx=Ve({},Sa,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),bx=yn(kx),xx=Ve({},Sa,{data:0}),Jw=yn(xx),Dx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Nx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ox={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Vx(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Ox[t])?!!e[t]:!1}function O_(){return Vx}var Lx=Ve({},Xu,{key:function(t){if(t.key){var e=Dx[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Id(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Nx[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:O_,charCode:function(t){return t.type==="keypress"?Id(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Id(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Mx=yn(Lx),Fx=Ve({},Wh,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Zw=yn(Fx),Ux=Ve({},Xu,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:O_}),$x=yn(Ux),Bx=Ve({},Sa,{propertyName:0,elapsedTime:0,pseudoElement:0}),zx=yn(Bx),jx=Ve({},Wh,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),qx=yn(jx),Wx=[9,13,27,32],V_=Fr&&"CompositionEvent"in window,bl=null;Fr&&"documentMode"in document&&(bl=document.documentMode);var Gx=Fr&&"TextEvent"in window&&!bl,dS=Fr&&(!V_||bl&&8<bl&&11>=bl),eI=String.fromCharCode(32),tI=!1;function hS(t,e){switch(t){case"keyup":return Wx.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function fS(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var To=!1;function Hx(t,e){switch(t){case"compositionend":return fS(e);case"keypress":return e.which!==32?null:(tI=!0,eI);case"textInput":return t=e.data,t===eI&&tI?null:t;default:return null}}function Kx(t,e){if(To)return t==="compositionend"||!V_&&hS(t,e)?(t=cS(),wd=D_=_i=null,To=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return dS&&e.locale!=="ko"?null:e.data;default:return null}}var Qx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function nI(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Qx[t.type]:e==="textarea"}function pS(t,e,n,r){WT(r),e=Kd(e,"onChange"),0<e.length&&(n=new N_("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var xl=null,ru=null;function Yx(t){RS(t,0)}function Gh(t){var e=Ao(t);if(FT(e))return t}function Xx(t,e){if(t==="change")return e}var mS=!1;if(Fr){var Sp;if(Fr){var Rp="oninput"in document;if(!Rp){var rI=document.createElement("div");rI.setAttribute("oninput","return;"),Rp=typeof rI.oninput=="function"}Sp=Rp}else Sp=!1;mS=Sp&&(!document.documentMode||9<document.documentMode)}function iI(){xl&&(xl.detachEvent("onpropertychange",gS),ru=xl=null)}function gS(t){if(t.propertyName==="value"&&Gh(ru)){var e=[];pS(e,ru,t,P_(t)),QT(Yx,e)}}function Jx(t,e,n){t==="focusin"?(iI(),xl=e,ru=n,xl.attachEvent("onpropertychange",gS)):t==="focusout"&&iI()}function Zx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Gh(ru)}function eD(t,e){if(t==="click")return Gh(e)}function tD(t,e){if(t==="input"||t==="change")return Gh(e)}function nD(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var jn=typeof Object.is=="function"?Object.is:nD;function iu(t,e){if(jn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Sm.call(e,i)||!jn(t[i],e[i]))return!1}return!0}function sI(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function oI(t,e){var n=sI(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=sI(n)}}function _S(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?_S(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function yS(){for(var t=window,e=Bd();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Bd(t.document)}return e}function L_(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function rD(t){var e=yS(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&_S(n.ownerDocument.documentElement,n)){if(r!==null&&L_(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=oI(n,s);var o=oI(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var iD=Fr&&"documentMode"in document&&11>=document.documentMode,So=null,jm=null,Dl=null,qm=!1;function aI(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;qm||So==null||So!==Bd(r)||(r=So,"selectionStart"in r&&L_(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Dl&&iu(Dl,r)||(Dl=r,r=Kd(jm,"onSelect"),0<r.length&&(e=new N_("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=So)))}function qc(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ro={animationend:qc("Animation","AnimationEnd"),animationiteration:qc("Animation","AnimationIteration"),animationstart:qc("Animation","AnimationStart"),transitionend:qc("Transition","TransitionEnd")},Ap={},vS={};Fr&&(vS=document.createElement("div").style,"AnimationEvent"in window||(delete Ro.animationend.animation,delete Ro.animationiteration.animation,delete Ro.animationstart.animation),"TransitionEvent"in window||delete Ro.transitionend.transition);function Hh(t){if(Ap[t])return Ap[t];if(!Ro[t])return t;var e=Ro[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in vS)return Ap[t]=e[n];return t}var wS=Hh("animationend"),IS=Hh("animationiteration"),ES=Hh("animationstart"),TS=Hh("transitionend"),SS=new Map,lI="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function qi(t,e){SS.set(t,e),qs(e,[t])}for(var Pp=0;Pp<lI.length;Pp++){var Cp=lI[Pp],sD=Cp.toLowerCase(),oD=Cp[0].toUpperCase()+Cp.slice(1);qi(sD,"on"+oD)}qi(wS,"onAnimationEnd");qi(IS,"onAnimationIteration");qi(ES,"onAnimationStart");qi("dblclick","onDoubleClick");qi("focusin","onFocus");qi("focusout","onBlur");qi(TS,"onTransitionEnd");Xo("onMouseEnter",["mouseout","mouseover"]);Xo("onMouseLeave",["mouseout","mouseover"]);Xo("onPointerEnter",["pointerout","pointerover"]);Xo("onPointerLeave",["pointerout","pointerover"]);qs("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));qs("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));qs("onBeforeInput",["compositionend","keypress","textInput","paste"]);qs("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));qs("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));qs("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var vl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),aD=new Set("cancel close invalid load scroll toggle".split(" ").concat(vl));function uI(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,sx(r,e,void 0,t),t.currentTarget=null}function RS(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;uI(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;uI(i,a,u),s=l}}}if(jd)throw t=Um,jd=!1,Um=null,t}function Ie(t,e){var n=e[Qm];n===void 0&&(n=e[Qm]=new Set);var r=t+"__bubble";n.has(r)||(AS(e,t,2,!1),n.add(r))}function kp(t,e,n){var r=0;e&&(r|=4),AS(n,t,r,e)}var Wc="_reactListening"+Math.random().toString(36).slice(2);function su(t){if(!t[Wc]){t[Wc]=!0,NT.forEach(function(n){n!=="selectionchange"&&(aD.has(n)||kp(n,!1,t),kp(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Wc]||(e[Wc]=!0,kp("selectionchange",!1,e))}}function AS(t,e,n,r){switch(uS(e)){case 1:var i=Ix;break;case 4:i=Ex;break;default:i=x_}n=i.bind(null,e,n,t),i=void 0,!Fm||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function bp(t,e,n,r,i){var s=r;if((e&1)===0&&(e&2)===0&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=ds(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}QT(function(){var u=s,c=P_(n),d=[];e:{var h=SS.get(t);if(h!==void 0){var f=N_,v=t;switch(t){case"keypress":if(Id(n)===0)break e;case"keydown":case"keyup":f=Mx;break;case"focusin":v="focus",f=Tp;break;case"focusout":v="blur",f=Tp;break;case"beforeblur":case"afterblur":f=Tp;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":f=Xw;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":f=Rx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":f=$x;break;case wS:case IS:case ES:f=Cx;break;case TS:f=zx;break;case"scroll":f=Tx;break;case"wheel":f=qx;break;case"copy":case"cut":case"paste":f=bx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":f=Zw}var y=(e&4)!==0,E=!y&&t==="scroll",g=y?h!==null?h+"Capture":null:h;y=[];for(var p=u,m;p!==null;){m=p;var I=m.stateNode;if(m.tag===5&&I!==null&&(m=I,g!==null&&(I=Zl(p,g),I!=null&&y.push(ou(p,I,m)))),E)break;p=p.return}0<y.length&&(h=new f(h,v,null,n,c),d.push({event:h,listeners:y}))}}if((e&7)===0){e:{if(h=t==="mouseover"||t==="pointerover",f=t==="mouseout"||t==="pointerout",h&&n!==Lm&&(v=n.relatedTarget||n.fromElement)&&(ds(v)||v[Ur]))break e;if((f||h)&&(h=c.window===c?c:(h=c.ownerDocument)?h.defaultView||h.parentWindow:window,f?(v=n.relatedTarget||n.toElement,f=u,v=v?ds(v):null,v!==null&&(E=Ws(v),v!==E||v.tag!==5&&v.tag!==6)&&(v=null)):(f=null,v=u),f!==v)){if(y=Xw,I="onMouseLeave",g="onMouseEnter",p="mouse",(t==="pointerout"||t==="pointerover")&&(y=Zw,I="onPointerLeave",g="onPointerEnter",p="pointer"),E=f==null?h:Ao(f),m=v==null?h:Ao(v),h=new y(I,p+"leave",f,n,c),h.target=E,h.relatedTarget=m,I=null,ds(c)===u&&(y=new y(g,p+"enter",v,n,c),y.target=m,y.relatedTarget=E,I=y),E=I,f&&v)t:{for(y=f,g=v,p=0,m=y;m;m=oo(m))p++;for(m=0,I=g;I;I=oo(I))m++;for(;0<p-m;)y=oo(y),p--;for(;0<m-p;)g=oo(g),m--;for(;p--;){if(y===g||g!==null&&y===g.alternate)break t;y=oo(y),g=oo(g)}y=null}else y=null;f!==null&&cI(d,h,f,y,!1),v!==null&&E!==null&&cI(d,E,v,y,!0)}}e:{if(h=u?Ao(u):window,f=h.nodeName&&h.nodeName.toLowerCase(),f==="select"||f==="input"&&h.type==="file")var A=Xx;else if(nI(h))if(mS)A=tD;else{A=Zx;var C=Jx}else(f=h.nodeName)&&f.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(A=eD);if(A&&(A=A(t,u))){pS(d,A,n,c);break e}C&&C(t,h,u),t==="focusout"&&(C=h._wrapperState)&&C.controlled&&h.type==="number"&&xm(h,"number",h.value)}switch(C=u?Ao(u):window,t){case"focusin":(nI(C)||C.contentEditable==="true")&&(So=C,jm=u,Dl=null);break;case"focusout":Dl=jm=So=null;break;case"mousedown":qm=!0;break;case"contextmenu":case"mouseup":case"dragend":qm=!1,aI(d,n,c);break;case"selectionchange":if(iD)break;case"keydown":case"keyup":aI(d,n,c)}var _;if(V_)e:{switch(t){case"compositionstart":var w="onCompositionStart";break e;case"compositionend":w="onCompositionEnd";break e;case"compositionupdate":w="onCompositionUpdate";break e}w=void 0}else To?hS(t,n)&&(w="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(w="onCompositionStart");w&&(dS&&n.locale!=="ko"&&(To||w!=="onCompositionStart"?w==="onCompositionEnd"&&To&&(_=cS()):(_i=c,D_="value"in _i?_i.value:_i.textContent,To=!0)),C=Kd(u,w),0<C.length&&(w=new Jw(w,t,null,n,c),d.push({event:w,listeners:C}),_?w.data=_:(_=fS(n),_!==null&&(w.data=_)))),(_=Gx?Hx(t,n):Kx(t,n))&&(u=Kd(u,"onBeforeInput"),0<u.length&&(c=new Jw("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=_))}RS(d,e)})}function ou(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Kd(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Zl(t,n),s!=null&&r.unshift(ou(t,s,i)),s=Zl(t,e),s!=null&&r.push(ou(t,s,i))),t=t.return}return r}function oo(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function cI(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Zl(n,s),l!=null&&o.unshift(ou(n,l,a))):i||(l=Zl(n,s),l!=null&&o.push(ou(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var lD=/\r\n?/g,uD=/\u0000|\uFFFD/g;function dI(t){return(typeof t=="string"?t:""+t).replace(lD,`
`).replace(uD,"")}function Gc(t,e,n){if(e=dI(e),dI(t)!==e&&n)throw Error(D(425))}function Qd(){}var Wm=null,Gm=null;function Hm(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Km=typeof setTimeout=="function"?setTimeout:void 0,cD=typeof clearTimeout=="function"?clearTimeout:void 0,hI=typeof Promise=="function"?Promise:void 0,dD=typeof queueMicrotask=="function"?queueMicrotask:typeof hI!="undefined"?function(t){return hI.resolve(null).then(t).catch(hD)}:Km;function hD(t){setTimeout(function(){throw t})}function xp(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),nu(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);nu(e)}function Si(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function fI(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ra=Math.random().toString(36).slice(2),Zn="__reactFiber$"+Ra,au="__reactProps$"+Ra,Ur="__reactContainer$"+Ra,Qm="__reactEvents$"+Ra,fD="__reactListeners$"+Ra,pD="__reactHandles$"+Ra;function ds(t){var e=t[Zn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ur]||n[Zn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=fI(t);t!==null;){if(n=t[Zn])return n;t=fI(t)}return e}t=n,n=t.parentNode}return null}function Ju(t){return t=t[Zn]||t[Ur],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ao(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(D(33))}function Kh(t){return t[au]||null}var Ym=[],Po=-1;function Wi(t){return{current:t}}function Se(t){0>Po||(t.current=Ym[Po],Ym[Po]=null,Po--)}function ve(t,e){Po++,Ym[Po]=t.current,t.current=e}var Di={},Dt=Wi(Di),tn=Wi(!1),As=Di;function Jo(t,e){var n=t.type.contextTypes;if(!n)return Di;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function nn(t){return t=t.childContextTypes,t!=null}function Yd(){Se(tn),Se(Dt)}function pI(t,e,n){if(Dt.current!==Di)throw Error(D(168));ve(Dt,e),ve(tn,n)}function PS(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(D(108,Jb(t)||"Unknown",i));return Ve({},n,r)}function Xd(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Di,As=Dt.current,ve(Dt,t),ve(tn,tn.current),!0}function mI(t,e,n){var r=t.stateNode;if(!r)throw Error(D(169));n?(t=PS(t,e,As),r.__reactInternalMemoizedMergedChildContext=t,Se(tn),Se(Dt),ve(Dt,t)):Se(tn),ve(tn,n)}var Ar=null,Qh=!1,Dp=!1;function CS(t){Ar===null?Ar=[t]:Ar.push(t)}function mD(t){Qh=!0,CS(t)}function Gi(){if(!Dp&&Ar!==null){Dp=!0;var t=0,e=pe;try{var n=Ar;for(pe=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Ar=null,Qh=!1}catch(i){throw Ar!==null&&(Ar=Ar.slice(t+1)),ZT(C_,Gi),i}finally{pe=e,Dp=!1}}return null}var Co=[],ko=0,Jd=null,Zd=0,In=[],En=0,Ps=null,Cr=1,kr="";function ns(t,e){Co[ko++]=Zd,Co[ko++]=Jd,Jd=t,Zd=e}function kS(t,e,n){In[En++]=Cr,In[En++]=kr,In[En++]=Ps,Ps=t;var r=Cr;t=kr;var i=32-$n(r)-1;r&=~(1<<i),n+=1;var s=32-$n(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Cr=1<<32-$n(e)+i|n<<i|r,kr=s+t}else Cr=1<<s|n<<i|r,kr=t}function M_(t){t.return!==null&&(ns(t,1),kS(t,1,0))}function F_(t){for(;t===Jd;)Jd=Co[--ko],Co[ko]=null,Zd=Co[--ko],Co[ko]=null;for(;t===Ps;)Ps=In[--En],In[En]=null,kr=In[--En],In[En]=null,Cr=In[--En],In[En]=null}var hn=null,cn=null,Ce=!1,Un=null;function bS(t,e){var n=Sn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function gI(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,hn=t,cn=Si(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,hn=t,cn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Ps!==null?{id:Cr,overflow:kr}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Sn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,hn=t,cn=null,!0):!1;default:return!1}}function Xm(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Jm(t){if(Ce){var e=cn;if(e){var n=e;if(!gI(t,e)){if(Xm(t))throw Error(D(418));e=Si(n.nextSibling);var r=hn;e&&gI(t,e)?bS(r,n):(t.flags=t.flags&-4097|2,Ce=!1,hn=t)}}else{if(Xm(t))throw Error(D(418));t.flags=t.flags&-4097|2,Ce=!1,hn=t}}}function _I(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;hn=t}function Hc(t){if(t!==hn)return!1;if(!Ce)return _I(t),Ce=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Hm(t.type,t.memoizedProps)),e&&(e=cn)){if(Xm(t))throw xS(),Error(D(418));for(;e;)bS(t,e),e=Si(e.nextSibling)}if(_I(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(D(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){cn=Si(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}cn=null}}else cn=hn?Si(t.stateNode.nextSibling):null;return!0}function xS(){for(var t=cn;t;)t=Si(t.nextSibling)}function Zo(){cn=hn=null,Ce=!1}function U_(t){Un===null?Un=[t]:Un.push(t)}var gD=Gr.ReactCurrentBatchConfig;function Mn(t,e){if(t&&t.defaultProps){e=Ve({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var eh=Wi(null),th=null,bo=null,$_=null;function B_(){$_=bo=th=null}function z_(t){var e=eh.current;Se(eh),t._currentValue=e}function Zm(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Uo(t,e){th=t,$_=bo=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&e)!==0&&(Xt=!0),t.firstContext=null)}function bn(t){var e=t._currentValue;if($_!==t)if(t={context:t,memoizedValue:e,next:null},bo===null){if(th===null)throw Error(D(308));bo=t,th.dependencies={lanes:0,firstContext:t}}else bo=bo.next=t;return e}var hs=null;function j_(t){hs===null?hs=[t]:hs.push(t)}function DS(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,j_(e)):(n.next=i.next,i.next=n),e.interleaved=n,$r(t,r)}function $r(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var ci=!1;function q_(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function NS(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Vr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Ri(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,(de&2)!==0){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,$r(t,n)}return i=r.interleaved,i===null?(e.next=e,j_(r)):(e.next=i.next,i.next=e),r.interleaved=e,$r(t,n)}function Ed(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,k_(t,n)}}function yI(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function nh(t,e,n,r){var i=t.updateQueue;ci=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var d=i.baseState;o=0,c=u=l=null,a=s;do{var h=a.lane,f=a.eventTime;if((r&h)===h){c!==null&&(c=c.next={eventTime:f,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=t,y=a;switch(h=e,f=n,y.tag){case 1:if(v=y.payload,typeof v=="function"){d=v.call(f,d,h);break e}d=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=y.payload,h=typeof v=="function"?v.call(f,d,h):v,h==null)break e;d=Ve({},d,h);break e;case 2:ci=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=i.effects,h===null?i.effects=[a]:h.push(a))}else f={eventTime:f,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=f,l=d):c=c.next=f,o|=h;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;h=a,a=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(1);if(c===null&&(l=d),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);ks|=o,t.lanes=o,t.memoizedState=d}}function vI(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(D(191,i));i.call(r)}}}var OS=new DT.Component().refs;function eg(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ve({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Yh={isMounted:function(t){return(t=t._reactInternals)?Ws(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=$t(),i=Pi(t),s=Vr(r,i);s.payload=e,n!=null&&(s.callback=n),e=Ri(t,s,i),e!==null&&(Bn(e,t,i,r),Ed(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=$t(),i=Pi(t),s=Vr(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Ri(t,s,i),e!==null&&(Bn(e,t,i,r),Ed(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=$t(),r=Pi(t),i=Vr(n,r);i.tag=2,e!=null&&(i.callback=e),e=Ri(t,i,r),e!==null&&(Bn(e,t,r,n),Ed(e,t,r))}};function wI(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!iu(n,r)||!iu(i,s):!0}function VS(t,e,n){var r=!1,i=Di,s=e.contextType;return typeof s=="object"&&s!==null?s=bn(s):(i=nn(e)?As:Dt.current,r=e.contextTypes,s=(r=r!=null)?Jo(t,i):Di),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Yh,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function II(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Yh.enqueueReplaceState(e,e.state,null)}function tg(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=OS,q_(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=bn(s):(s=nn(e)?As:Dt.current,i.context=Jo(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(eg(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Yh.enqueueReplaceState(i,i.state,null),nh(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function nl(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(D(309));var r=n.stateNode}if(!r)throw Error(D(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===OS&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(D(284));if(!n._owner)throw Error(D(290,t))}return t}function Kc(t,e){throw t=Object.prototype.toString.call(e),Error(D(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function EI(t){var e=t._init;return e(t._payload)}function LS(t){function e(g,p){if(t){var m=g.deletions;m===null?(g.deletions=[p],g.flags|=16):m.push(p)}}function n(g,p){if(!t)return null;for(;p!==null;)e(g,p),p=p.sibling;return null}function r(g,p){for(g=new Map;p!==null;)p.key!==null?g.set(p.key,p):g.set(p.index,p),p=p.sibling;return g}function i(g,p){return g=Ci(g,p),g.index=0,g.sibling=null,g}function s(g,p,m){return g.index=m,t?(m=g.alternate,m!==null?(m=m.index,m<p?(g.flags|=2,p):m):(g.flags|=2,p)):(g.flags|=1048576,p)}function o(g){return t&&g.alternate===null&&(g.flags|=2),g}function a(g,p,m,I){return p===null||p.tag!==6?(p=Up(m,g.mode,I),p.return=g,p):(p=i(p,m),p.return=g,p)}function l(g,p,m,I){var A=m.type;return A===Eo?c(g,p,m.props.children,I,m.key):p!==null&&(p.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===ui&&EI(A)===p.type)?(I=i(p,m.props),I.ref=nl(g,p,m),I.return=g,I):(I=Cd(m.type,m.key,m.props,null,g.mode,I),I.ref=nl(g,p,m),I.return=g,I)}function u(g,p,m,I){return p===null||p.tag!==4||p.stateNode.containerInfo!==m.containerInfo||p.stateNode.implementation!==m.implementation?(p=$p(m,g.mode,I),p.return=g,p):(p=i(p,m.children||[]),p.return=g,p)}function c(g,p,m,I,A){return p===null||p.tag!==7?(p=Is(m,g.mode,I,A),p.return=g,p):(p=i(p,m),p.return=g,p)}function d(g,p,m){if(typeof p=="string"&&p!==""||typeof p=="number")return p=Up(""+p,g.mode,m),p.return=g,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Mc:return m=Cd(p.type,p.key,p.props,null,g.mode,m),m.ref=nl(g,null,p),m.return=g,m;case Io:return p=$p(p,g.mode,m),p.return=g,p;case ui:var I=p._init;return d(g,I(p._payload),m)}if(_l(p)||Xa(p))return p=Is(p,g.mode,m,null),p.return=g,p;Kc(g,p)}return null}function h(g,p,m,I){var A=p!==null?p.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return A!==null?null:a(g,p,""+m,I);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Mc:return m.key===A?l(g,p,m,I):null;case Io:return m.key===A?u(g,p,m,I):null;case ui:return A=m._init,h(g,p,A(m._payload),I)}if(_l(m)||Xa(m))return A!==null?null:c(g,p,m,I,null);Kc(g,m)}return null}function f(g,p,m,I,A){if(typeof I=="string"&&I!==""||typeof I=="number")return g=g.get(m)||null,a(p,g,""+I,A);if(typeof I=="object"&&I!==null){switch(I.$$typeof){case Mc:return g=g.get(I.key===null?m:I.key)||null,l(p,g,I,A);case Io:return g=g.get(I.key===null?m:I.key)||null,u(p,g,I,A);case ui:var C=I._init;return f(g,p,m,C(I._payload),A)}if(_l(I)||Xa(I))return g=g.get(m)||null,c(p,g,I,A,null);Kc(p,I)}return null}function v(g,p,m,I){for(var A=null,C=null,_=p,w=p=0,R=null;_!==null&&w<m.length;w++){_.index>w?(R=_,_=null):R=_.sibling;var k=h(g,_,m[w],I);if(k===null){_===null&&(_=R);break}t&&_&&k.alternate===null&&e(g,_),p=s(k,p,w),C===null?A=k:C.sibling=k,C=k,_=R}if(w===m.length)return n(g,_),Ce&&ns(g,w),A;if(_===null){for(;w<m.length;w++)_=d(g,m[w],I),_!==null&&(p=s(_,p,w),C===null?A=_:C.sibling=_,C=_);return Ce&&ns(g,w),A}for(_=r(g,_);w<m.length;w++)R=f(_,g,w,m[w],I),R!==null&&(t&&R.alternate!==null&&_.delete(R.key===null?w:R.key),p=s(R,p,w),C===null?A=R:C.sibling=R,C=R);return t&&_.forEach(function(O){return e(g,O)}),Ce&&ns(g,w),A}function y(g,p,m,I){var A=Xa(m);if(typeof A!="function")throw Error(D(150));if(m=A.call(m),m==null)throw Error(D(151));for(var C=A=null,_=p,w=p=0,R=null,k=m.next();_!==null&&!k.done;w++,k=m.next()){_.index>w?(R=_,_=null):R=_.sibling;var O=h(g,_,k.value,I);if(O===null){_===null&&(_=R);break}t&&_&&O.alternate===null&&e(g,_),p=s(O,p,w),C===null?A=O:C.sibling=O,C=O,_=R}if(k.done)return n(g,_),Ce&&ns(g,w),A;if(_===null){for(;!k.done;w++,k=m.next())k=d(g,k.value,I),k!==null&&(p=s(k,p,w),C===null?A=k:C.sibling=k,C=k);return Ce&&ns(g,w),A}for(_=r(g,_);!k.done;w++,k=m.next())k=f(_,g,w,k.value,I),k!==null&&(t&&k.alternate!==null&&_.delete(k.key===null?w:k.key),p=s(k,p,w),C===null?A=k:C.sibling=k,C=k);return t&&_.forEach(function(q){return e(g,q)}),Ce&&ns(g,w),A}function E(g,p,m,I){if(typeof m=="object"&&m!==null&&m.type===Eo&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Mc:e:{for(var A=m.key,C=p;C!==null;){if(C.key===A){if(A=m.type,A===Eo){if(C.tag===7){n(g,C.sibling),p=i(C,m.props.children),p.return=g,g=p;break e}}else if(C.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===ui&&EI(A)===C.type){n(g,C.sibling),p=i(C,m.props),p.ref=nl(g,C,m),p.return=g,g=p;break e}n(g,C);break}else e(g,C);C=C.sibling}m.type===Eo?(p=Is(m.props.children,g.mode,I,m.key),p.return=g,g=p):(I=Cd(m.type,m.key,m.props,null,g.mode,I),I.ref=nl(g,p,m),I.return=g,g=I)}return o(g);case Io:e:{for(C=m.key;p!==null;){if(p.key===C)if(p.tag===4&&p.stateNode.containerInfo===m.containerInfo&&p.stateNode.implementation===m.implementation){n(g,p.sibling),p=i(p,m.children||[]),p.return=g,g=p;break e}else{n(g,p);break}else e(g,p);p=p.sibling}p=$p(m,g.mode,I),p.return=g,g=p}return o(g);case ui:return C=m._init,E(g,p,C(m._payload),I)}if(_l(m))return v(g,p,m,I);if(Xa(m))return y(g,p,m,I);Kc(g,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,p!==null&&p.tag===6?(n(g,p.sibling),p=i(p,m),p.return=g,g=p):(n(g,p),p=Up(m,g.mode,I),p.return=g,g=p),o(g)):n(g,p)}return E}var ea=LS(!0),MS=LS(!1),Zu={},fr=Wi(Zu),lu=Wi(Zu),uu=Wi(Zu);function fs(t){if(t===Zu)throw Error(D(174));return t}function W_(t,e){switch(ve(uu,e),ve(lu,t),ve(fr,Zu),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Nm(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Nm(e,t)}Se(fr),ve(fr,e)}function ta(){Se(fr),Se(lu),Se(uu)}function FS(t){fs(uu.current);var e=fs(fr.current),n=Nm(e,t.type);e!==n&&(ve(lu,t),ve(fr,n))}function G_(t){lu.current===t&&(Se(fr),Se(lu))}var Ne=Wi(0);function rh(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Np=[];function H_(){for(var t=0;t<Np.length;t++)Np[t]._workInProgressVersionPrimary=null;Np.length=0}var Td=Gr.ReactCurrentDispatcher,Op=Gr.ReactCurrentBatchConfig,Cs=0,Oe=null,Je=null,it=null,ih=!1,Nl=!1,cu=0,_D=0;function St(){throw Error(D(321))}function K_(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!jn(t[n],e[n]))return!1;return!0}function Q_(t,e,n,r,i,s){if(Cs=s,Oe=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Td.current=t===null||t.memoizedState===null?ID:ED,t=n(r,i),Nl){s=0;do{if(Nl=!1,cu=0,25<=s)throw Error(D(301));s+=1,it=Je=null,e.updateQueue=null,Td.current=TD,t=n(r,i)}while(Nl)}if(Td.current=sh,e=Je!==null&&Je.next!==null,Cs=0,it=Je=Oe=null,ih=!1,e)throw Error(D(300));return t}function Y_(){var t=cu!==0;return cu=0,t}function Jn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return it===null?Oe.memoizedState=it=t:it=it.next=t,it}function xn(){if(Je===null){var t=Oe.alternate;t=t!==null?t.memoizedState:null}else t=Je.next;var e=it===null?Oe.memoizedState:it.next;if(e!==null)it=e,Je=t;else{if(t===null)throw Error(D(310));Je=t,t={memoizedState:Je.memoizedState,baseState:Je.baseState,baseQueue:Je.baseQueue,queue:Je.queue,next:null},it===null?Oe.memoizedState=it=t:it=it.next=t}return it}function du(t,e){return typeof e=="function"?e(t):e}function Vp(t){var e=xn(),n=e.queue;if(n===null)throw Error(D(311));n.lastRenderedReducer=t;var r=Je,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((Cs&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,o=r):l=l.next=d,Oe.lanes|=c,ks|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,jn(r,e.memoizedState)||(Xt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Oe.lanes|=s,ks|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Lp(t){var e=xn(),n=e.queue;if(n===null)throw Error(D(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);jn(s,e.memoizedState)||(Xt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function US(){}function $S(t,e){var n=Oe,r=xn(),i=e(),s=!jn(r.memoizedState,i);if(s&&(r.memoizedState=i,Xt=!0),r=r.queue,X_(jS.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||it!==null&&it.memoizedState.tag&1){if(n.flags|=2048,hu(9,zS.bind(null,n,r,i,e),void 0,null),at===null)throw Error(D(349));(Cs&30)!==0||BS(n,e,i)}return i}function BS(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Oe.updateQueue,e===null?(e={lastEffect:null,stores:null},Oe.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function zS(t,e,n,r){e.value=n,e.getSnapshot=r,qS(e)&&WS(t)}function jS(t,e,n){return n(function(){qS(e)&&WS(t)})}function qS(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!jn(t,n)}catch{return!0}}function WS(t){var e=$r(t,1);e!==null&&Bn(e,t,1,-1)}function TI(t){var e=Jn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:du,lastRenderedState:t},e.queue=t,t=t.dispatch=wD.bind(null,Oe,t),[e.memoizedState,t]}function hu(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Oe.updateQueue,e===null?(e={lastEffect:null,stores:null},Oe.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function GS(){return xn().memoizedState}function Sd(t,e,n,r){var i=Jn();Oe.flags|=t,i.memoizedState=hu(1|e,n,void 0,r===void 0?null:r)}function Xh(t,e,n,r){var i=xn();r=r===void 0?null:r;var s=void 0;if(Je!==null){var o=Je.memoizedState;if(s=o.destroy,r!==null&&K_(r,o.deps)){i.memoizedState=hu(e,n,s,r);return}}Oe.flags|=t,i.memoizedState=hu(1|e,n,s,r)}function SI(t,e){return Sd(8390656,8,t,e)}function X_(t,e){return Xh(2048,8,t,e)}function HS(t,e){return Xh(4,2,t,e)}function KS(t,e){return Xh(4,4,t,e)}function QS(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function YS(t,e,n){return n=n!=null?n.concat([t]):null,Xh(4,4,QS.bind(null,e,t),n)}function J_(){}function XS(t,e){var n=xn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&K_(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function JS(t,e){var n=xn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&K_(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function ZS(t,e,n){return(Cs&21)===0?(t.baseState&&(t.baseState=!1,Xt=!0),t.memoizedState=n):(jn(n,e)||(n=nS(),Oe.lanes|=n,ks|=n,t.baseState=!0),e)}function yD(t,e){var n=pe;pe=n!==0&&4>n?n:4,t(!0);var r=Op.transition;Op.transition={};try{t(!1),e()}finally{pe=n,Op.transition=r}}function eR(){return xn().memoizedState}function vD(t,e,n){var r=Pi(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},tR(t))nR(e,n);else if(n=DS(t,e,n,r),n!==null){var i=$t();Bn(n,t,r,i),rR(n,e,r)}}function wD(t,e,n){var r=Pi(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(tR(t))nR(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,jn(a,o)){var l=e.interleaved;l===null?(i.next=i,j_(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=DS(t,e,i,r),n!==null&&(i=$t(),Bn(n,t,r,i),rR(n,e,r))}}function tR(t){var e=t.alternate;return t===Oe||e!==null&&e===Oe}function nR(t,e){Nl=ih=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function rR(t,e,n){if((n&4194240)!==0){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,k_(t,n)}}var sh={readContext:bn,useCallback:St,useContext:St,useEffect:St,useImperativeHandle:St,useInsertionEffect:St,useLayoutEffect:St,useMemo:St,useReducer:St,useRef:St,useState:St,useDebugValue:St,useDeferredValue:St,useTransition:St,useMutableSource:St,useSyncExternalStore:St,useId:St,unstable_isNewReconciler:!1},ID={readContext:bn,useCallback:function(t,e){return Jn().memoizedState=[t,e===void 0?null:e],t},useContext:bn,useEffect:SI,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Sd(4194308,4,QS.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Sd(4194308,4,t,e)},useInsertionEffect:function(t,e){return Sd(4,2,t,e)},useMemo:function(t,e){var n=Jn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Jn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=vD.bind(null,Oe,t),[r.memoizedState,t]},useRef:function(t){var e=Jn();return t={current:t},e.memoizedState=t},useState:TI,useDebugValue:J_,useDeferredValue:function(t){return Jn().memoizedState=t},useTransition:function(){var t=TI(!1),e=t[0];return t=yD.bind(null,t[1]),Jn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Oe,i=Jn();if(Ce){if(n===void 0)throw Error(D(407));n=n()}else{if(n=e(),at===null)throw Error(D(349));(Cs&30)!==0||BS(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,SI(jS.bind(null,r,s,t),[t]),r.flags|=2048,hu(9,zS.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Jn(),e=at.identifierPrefix;if(Ce){var n=kr,r=Cr;n=(r&~(1<<32-$n(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=cu++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=_D++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},ED={readContext:bn,useCallback:XS,useContext:bn,useEffect:X_,useImperativeHandle:YS,useInsertionEffect:HS,useLayoutEffect:KS,useMemo:JS,useReducer:Vp,useRef:GS,useState:function(){return Vp(du)},useDebugValue:J_,useDeferredValue:function(t){var e=xn();return ZS(e,Je.memoizedState,t)},useTransition:function(){var t=Vp(du)[0],e=xn().memoizedState;return[t,e]},useMutableSource:US,useSyncExternalStore:$S,useId:eR,unstable_isNewReconciler:!1},TD={readContext:bn,useCallback:XS,useContext:bn,useEffect:X_,useImperativeHandle:YS,useInsertionEffect:HS,useLayoutEffect:KS,useMemo:JS,useReducer:Lp,useRef:GS,useState:function(){return Lp(du)},useDebugValue:J_,useDeferredValue:function(t){var e=xn();return Je===null?e.memoizedState=t:ZS(e,Je.memoizedState,t)},useTransition:function(){var t=Lp(du)[0],e=xn().memoizedState;return[t,e]},useMutableSource:US,useSyncExternalStore:$S,useId:eR,unstable_isNewReconciler:!1};function na(t,e){try{var n="",r=e;do n+=Xb(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Mp(t,e,n){return{value:t,source:null,stack:n!=null?n:null,digest:e!=null?e:null}}function ng(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var SD=typeof WeakMap=="function"?WeakMap:Map;function iR(t,e,n){n=Vr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){ah||(ah=!0,hg=r),ng(t,e)},n}function sR(t,e,n){n=Vr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){ng(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){ng(t,e),typeof r!="function"&&(Ai===null?Ai=new Set([this]):Ai.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function RI(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new SD;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=FD.bind(null,t,e,n),e.then(t,t))}function AI(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function PI(t,e,n,r,i){return(t.mode&1)===0?(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Vr(-1,1),e.tag=2,Ri(n,e,1))),n.lanes|=1),t):(t.flags|=65536,t.lanes=i,t)}var RD=Gr.ReactCurrentOwner,Xt=!1;function Vt(t,e,n,r){e.child=t===null?MS(e,null,n,r):ea(e,t.child,n,r)}function CI(t,e,n,r,i){n=n.render;var s=e.ref;return Uo(e,i),r=Q_(t,e,n,r,s,i),n=Y_(),t!==null&&!Xt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Br(t,e,i)):(Ce&&n&&M_(e),e.flags|=1,Vt(t,e,r,i),e.child)}function kI(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!oy(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,oR(t,e,s,r,i)):(t=Cd(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,(t.lanes&i)===0){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:iu,n(o,r)&&t.ref===e.ref)return Br(t,e,i)}return e.flags|=1,t=Ci(s,r),t.ref=e.ref,t.return=e,e.child=t}function oR(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(iu(s,r)&&t.ref===e.ref)if(Xt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)(t.flags&131072)!==0&&(Xt=!0);else return e.lanes=t.lanes,Br(t,e,i)}return rg(t,e,n,r,i)}function aR(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if((e.mode&1)===0)e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ve(Do,ln),ln|=n;else{if((n&1073741824)===0)return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ve(Do,ln),ln|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ve(Do,ln),ln|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ve(Do,ln),ln|=r;return Vt(t,e,i,n),e.child}function lR(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function rg(t,e,n,r,i){var s=nn(n)?As:Dt.current;return s=Jo(e,s),Uo(e,i),n=Q_(t,e,n,r,s,i),r=Y_(),t!==null&&!Xt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Br(t,e,i)):(Ce&&r&&M_(e),e.flags|=1,Vt(t,e,n,i),e.child)}function bI(t,e,n,r,i){if(nn(n)){var s=!0;Xd(e)}else s=!1;if(Uo(e,i),e.stateNode===null)Rd(t,e),VS(e,n,r),tg(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=bn(u):(u=nn(n)?As:Dt.current,u=Jo(e,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&II(e,o,r,u),ci=!1;var h=e.memoizedState;o.state=h,nh(e,r,o,i),l=e.memoizedState,a!==r||h!==l||tn.current||ci?(typeof c=="function"&&(eg(e,n,c,r),l=e.memoizedState),(a=ci||wI(e,n,a,r,h,l,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,NS(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:Mn(e.type,a),o.props=u,d=e.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=bn(l):(l=nn(n)?As:Dt.current,l=Jo(e,l));var f=n.getDerivedStateFromProps;(c=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||h!==l)&&II(e,o,r,l),ci=!1,h=e.memoizedState,o.state=h,nh(e,r,o,i);var v=e.memoizedState;a!==d||h!==v||tn.current||ci?(typeof f=="function"&&(eg(e,n,f,r),v=e.memoizedState),(u=ci||wI(e,n,u,r,h,v,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,v,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=v),o.props=r,o.state=v,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),r=!1)}return ig(t,e,n,r,s,i)}function ig(t,e,n,r,i,s){lR(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&mI(e,n,!1),Br(t,e,s);r=e.stateNode,RD.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=ea(e,t.child,null,s),e.child=ea(e,null,a,s)):Vt(t,e,a,s),e.memoizedState=r.state,i&&mI(e,n,!0),e.child}function uR(t){var e=t.stateNode;e.pendingContext?pI(t,e.pendingContext,e.pendingContext!==e.context):e.context&&pI(t,e.context,!1),W_(t,e.containerInfo)}function xI(t,e,n,r,i){return Zo(),U_(i),e.flags|=256,Vt(t,e,n,r),e.child}var sg={dehydrated:null,treeContext:null,retryLane:0};function og(t){return{baseLanes:t,cachePool:null,transitions:null}}function cR(t,e,n){var r=e.pendingProps,i=Ne.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ve(Ne,i&1),t===null)return Jm(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((e.mode&1)===0?e.lanes=1:t.data==="$!"?e.lanes=8:e.lanes=1073741824,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},(r&1)===0&&s!==null?(s.childLanes=0,s.pendingProps=o):s=ef(o,r,0,null),t=Is(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=og(n),e.memoizedState=sg,t):Z_(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return AD(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return(o&1)===0&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Ci(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Ci(a,s):(s=Is(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?og(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=sg,r}return s=t.child,t=s.sibling,r=Ci(s,{mode:"visible",children:r.children}),(e.mode&1)===0&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Z_(t,e){return e=ef({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Qc(t,e,n,r){return r!==null&&U_(r),ea(e,t.child,null,n),t=Z_(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function AD(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Mp(Error(D(422))),Qc(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=ef({mode:"visible",children:r.children},i,0,null),s=Is(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,(e.mode&1)!==0&&ea(e,t.child,null,o),e.child.memoizedState=og(o),e.memoizedState=sg,s);if((e.mode&1)===0)return Qc(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(D(419)),r=Mp(s,r,void 0),Qc(t,e,o,r)}if(a=(o&t.childLanes)!==0,Xt||a){if(r=at,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(r.suspendedLanes|o))!==0?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,$r(t,i),Bn(r,t,i,-1))}return sy(),r=Mp(Error(D(421))),Qc(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=UD.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,cn=Si(i.nextSibling),hn=e,Ce=!0,Un=null,t!==null&&(In[En++]=Cr,In[En++]=kr,In[En++]=Ps,Cr=t.id,kr=t.overflow,Ps=e),e=Z_(e,r.children),e.flags|=4096,e)}function DI(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Zm(t.return,e,n)}function Fp(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function dR(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Vt(t,e,r.children,n),r=Ne.current,(r&2)!==0)r=r&1|2,e.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&DI(t,n,e);else if(t.tag===19)DI(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ve(Ne,r),(e.mode&1)===0)e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&rh(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Fp(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&rh(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Fp(e,!0,n,null,s);break;case"together":Fp(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Rd(t,e){(e.mode&1)===0&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Br(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ks|=e.lanes,(n&e.childLanes)===0)return null;if(t!==null&&e.child!==t.child)throw Error(D(153));if(e.child!==null){for(t=e.child,n=Ci(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Ci(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function PD(t,e,n){switch(e.tag){case 3:uR(e),Zo();break;case 5:FS(e);break;case 1:nn(e.type)&&Xd(e);break;case 4:W_(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ve(eh,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ve(Ne,Ne.current&1),e.flags|=128,null):(n&e.child.childLanes)!==0?cR(t,e,n):(ve(Ne,Ne.current&1),t=Br(t,e,n),t!==null?t.sibling:null);ve(Ne,Ne.current&1);break;case 19:if(r=(n&e.childLanes)!==0,(t.flags&128)!==0){if(r)return dR(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ve(Ne,Ne.current),r)break;return null;case 22:case 23:return e.lanes=0,aR(t,e,n)}return Br(t,e,n)}var hR,ag,fR,pR;hR=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ag=function(){};fR=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,fs(fr.current);var s=null;switch(n){case"input":i=km(t,i),r=km(t,r),s=[];break;case"select":i=Ve({},i,{value:void 0}),r=Ve({},r,{value:void 0}),s=[];break;case"textarea":i=Dm(t,i),r=Dm(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Qd)}Om(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Xl.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Xl.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&Ie("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};pR=function(t,e,n,r){n!==r&&(e.flags|=4)};function rl(t,e){if(!Ce)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Rt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function CD(t,e,n){var r=e.pendingProps;switch(F_(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Rt(e),null;case 1:return nn(e.type)&&Yd(),Rt(e),null;case 3:return r=e.stateNode,ta(),Se(tn),Se(Dt),H_(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Hc(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,Un!==null&&(mg(Un),Un=null))),ag(t,e),Rt(e),null;case 5:G_(e);var i=fs(uu.current);if(n=e.type,t!==null&&e.stateNode!=null)fR(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(D(166));return Rt(e),null}if(t=fs(fr.current),Hc(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Zn]=e,r[au]=s,t=(e.mode&1)!==0,n){case"dialog":Ie("cancel",r),Ie("close",r);break;case"iframe":case"object":case"embed":Ie("load",r);break;case"video":case"audio":for(i=0;i<vl.length;i++)Ie(vl[i],r);break;case"source":Ie("error",r);break;case"img":case"image":case"link":Ie("error",r),Ie("load",r);break;case"details":Ie("toggle",r);break;case"input":Bw(r,s),Ie("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Ie("invalid",r);break;case"textarea":jw(r,s),Ie("invalid",r)}Om(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Gc(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Gc(r.textContent,a,t),i=["children",""+a]):Xl.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Ie("scroll",r)}switch(n){case"input":Fc(r),zw(r,s,!0);break;case"textarea":Fc(r),qw(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Qd)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=BT(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Zn]=e,t[au]=r,hR(t,e,!1,!1),e.stateNode=t;e:{switch(o=Vm(n,r),n){case"dialog":Ie("cancel",t),Ie("close",t),i=r;break;case"iframe":case"object":case"embed":Ie("load",t),i=r;break;case"video":case"audio":for(i=0;i<vl.length;i++)Ie(vl[i],t);i=r;break;case"source":Ie("error",t),i=r;break;case"img":case"image":case"link":Ie("error",t),Ie("load",t),i=r;break;case"details":Ie("toggle",t),i=r;break;case"input":Bw(t,r),i=km(t,r),Ie("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Ve({},r,{value:void 0}),Ie("invalid",t);break;case"textarea":jw(t,r),i=Dm(t,r),Ie("invalid",t);break;default:i=r}Om(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?qT(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&zT(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Jl(t,l):typeof l=="number"&&Jl(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Xl.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Ie("scroll",t):l!=null&&T_(t,s,l,o))}switch(n){case"input":Fc(t),zw(t,r,!1);break;case"textarea":Fc(t),qw(t);break;case"option":r.value!=null&&t.setAttribute("value",""+xi(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Vo(t,!!r.multiple,s,!1):r.defaultValue!=null&&Vo(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Qd)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Rt(e),null;case 6:if(t&&e.stateNode!=null)pR(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(D(166));if(n=fs(uu.current),fs(fr.current),Hc(e)){if(r=e.stateNode,n=e.memoizedProps,r[Zn]=e,(s=r.nodeValue!==n)&&(t=hn,t!==null))switch(t.tag){case 3:Gc(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Gc(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Zn]=e,e.stateNode=r}return Rt(e),null;case 13:if(Se(Ne),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ce&&cn!==null&&(e.mode&1)!==0&&(e.flags&128)===0)xS(),Zo(),e.flags|=98560,s=!1;else if(s=Hc(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(D(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(D(317));s[Zn]=e}else Zo(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Rt(e),s=!1}else Un!==null&&(mg(Un),Un=null),s=!0;if(!s)return e.flags&65536?e:null}return(e.flags&128)!==0?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,(e.mode&1)!==0&&(t===null||(Ne.current&1)!==0?et===0&&(et=3):sy())),e.updateQueue!==null&&(e.flags|=4),Rt(e),null);case 4:return ta(),ag(t,e),t===null&&su(e.stateNode.containerInfo),Rt(e),null;case 10:return z_(e.type._context),Rt(e),null;case 17:return nn(e.type)&&Yd(),Rt(e),null;case 19:if(Se(Ne),s=e.memoizedState,s===null)return Rt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)rl(s,!1);else{if(et!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(o=rh(t),o!==null){for(e.flags|=128,rl(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ve(Ne,Ne.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ge()>ra&&(e.flags|=128,r=!0,rl(s,!1),e.lanes=4194304)}else{if(!r)if(t=rh(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),rl(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Ce)return Rt(e),null}else 2*Ge()-s.renderingStartTime>ra&&n!==1073741824&&(e.flags|=128,r=!0,rl(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ge(),e.sibling=null,n=Ne.current,ve(Ne,r?n&1|2:n&1),e):(Rt(e),null);case 22:case 23:return iy(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&(e.mode&1)!==0?(ln&1073741824)!==0&&(Rt(e),e.subtreeFlags&6&&(e.flags|=8192)):Rt(e),null;case 24:return null;case 25:return null}throw Error(D(156,e.tag))}function kD(t,e){switch(F_(e),e.tag){case 1:return nn(e.type)&&Yd(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ta(),Se(tn),Se(Dt),H_(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 5:return G_(e),null;case 13:if(Se(Ne),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(D(340));Zo()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Se(Ne),null;case 4:return ta(),null;case 10:return z_(e.type._context),null;case 22:case 23:return iy(),null;case 24:return null;default:return null}}var Yc=!1,Pt=!1,bD=typeof WeakSet=="function"?WeakSet:Set,B=null;function xo(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Me(t,e,r)}else n.current=null}function lg(t,e,n){try{n()}catch(r){Me(t,e,r)}}var NI=!1;function xD(t,e){if(Wm=Gd,t=yS(),L_(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,d=t,h=null;t:for(;;){for(var f;d!==n||i!==0&&d.nodeType!==3||(a=o+i),d!==s||r!==0&&d.nodeType!==3||(l=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(f=d.firstChild)!==null;)h=d,d=f;for(;;){if(d===t)break t;if(h===n&&++u===i&&(a=o),h===s&&++c===r&&(l=o),(f=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=f}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Gm={focusedElem:t,selectionRange:n},Gd=!1,B=e;B!==null;)if(e=B,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,B=t;else for(;B!==null;){e=B;try{var v=e.alternate;if((e.flags&1024)!==0)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var y=v.memoizedProps,E=v.memoizedState,g=e.stateNode,p=g.getSnapshotBeforeUpdate(e.elementType===e.type?y:Mn(e.type,y),E);g.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var m=e.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(D(163))}}catch(I){Me(e,e.return,I)}if(t=e.sibling,t!==null){t.return=e.return,B=t;break}B=e.return}return v=NI,NI=!1,v}function Ol(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&lg(e,n,s)}i=i.next}while(i!==r)}}function Jh(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function ug(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function mR(t){var e=t.alternate;e!==null&&(t.alternate=null,mR(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Zn],delete e[au],delete e[Qm],delete e[fD],delete e[pD])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function gR(t){return t.tag===5||t.tag===3||t.tag===4}function OI(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||gR(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function cg(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Qd));else if(r!==4&&(t=t.child,t!==null))for(cg(t,e,n),t=t.sibling;t!==null;)cg(t,e,n),t=t.sibling}function dg(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(dg(t,e,n),t=t.sibling;t!==null;)dg(t,e,n),t=t.sibling}var mt=null,Fn=!1;function ii(t,e,n){for(n=n.child;n!==null;)_R(t,e,n),n=n.sibling}function _R(t,e,n){if(hr&&typeof hr.onCommitFiberUnmount=="function")try{hr.onCommitFiberUnmount(qh,n)}catch{}switch(n.tag){case 5:Pt||xo(n,e);case 6:var r=mt,i=Fn;mt=null,ii(t,e,n),mt=r,Fn=i,mt!==null&&(Fn?(t=mt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):mt.removeChild(n.stateNode));break;case 18:mt!==null&&(Fn?(t=mt,n=n.stateNode,t.nodeType===8?xp(t.parentNode,n):t.nodeType===1&&xp(t,n),nu(t)):xp(mt,n.stateNode));break;case 4:r=mt,i=Fn,mt=n.stateNode.containerInfo,Fn=!0,ii(t,e,n),mt=r,Fn=i;break;case 0:case 11:case 14:case 15:if(!Pt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&((s&2)!==0||(s&4)!==0)&&lg(n,e,o),i=i.next}while(i!==r)}ii(t,e,n);break;case 1:if(!Pt&&(xo(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Me(n,e,a)}ii(t,e,n);break;case 21:ii(t,e,n);break;case 22:n.mode&1?(Pt=(r=Pt)||n.memoizedState!==null,ii(t,e,n),Pt=r):ii(t,e,n);break;default:ii(t,e,n)}}function VI(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new bD),e.forEach(function(r){var i=$D.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Ln(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:mt=a.stateNode,Fn=!1;break e;case 3:mt=a.stateNode.containerInfo,Fn=!0;break e;case 4:mt=a.stateNode.containerInfo,Fn=!0;break e}a=a.return}if(mt===null)throw Error(D(160));_R(s,o,i),mt=null,Fn=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){Me(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)yR(e,t),e=e.sibling}function yR(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Ln(e,t),Xn(t),r&4){try{Ol(3,t,t.return),Jh(3,t)}catch(y){Me(t,t.return,y)}try{Ol(5,t,t.return)}catch(y){Me(t,t.return,y)}}break;case 1:Ln(e,t),Xn(t),r&512&&n!==null&&xo(n,n.return);break;case 5:if(Ln(e,t),Xn(t),r&512&&n!==null&&xo(n,n.return),t.flags&32){var i=t.stateNode;try{Jl(i,"")}catch(y){Me(t,t.return,y)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&UT(i,s),Vm(a,o);var u=Vm(a,s);for(o=0;o<l.length;o+=2){var c=l[o],d=l[o+1];c==="style"?qT(i,d):c==="dangerouslySetInnerHTML"?zT(i,d):c==="children"?Jl(i,d):T_(i,c,d,u)}switch(a){case"input":bm(i,s);break;case"textarea":$T(i,s);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var f=s.value;f!=null?Vo(i,!!s.multiple,f,!1):h!==!!s.multiple&&(s.defaultValue!=null?Vo(i,!!s.multiple,s.defaultValue,!0):Vo(i,!!s.multiple,s.multiple?[]:"",!1))}i[au]=s}catch(y){Me(t,t.return,y)}}break;case 6:if(Ln(e,t),Xn(t),r&4){if(t.stateNode===null)throw Error(D(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(y){Me(t,t.return,y)}}break;case 3:if(Ln(e,t),Xn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{nu(e.containerInfo)}catch(y){Me(t,t.return,y)}break;case 4:Ln(e,t),Xn(t);break;case 13:Ln(e,t),Xn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(ny=Ge())),r&4&&VI(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(Pt=(u=Pt)||c,Ln(e,t),Pt=u):Ln(e,t),Xn(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&(t.mode&1)!==0)for(B=t,c=t.child;c!==null;){for(d=B=c;B!==null;){switch(h=B,f=h.child,h.tag){case 0:case 11:case 14:case 15:Ol(4,h,h.return);break;case 1:xo(h,h.return);var v=h.stateNode;if(typeof v.componentWillUnmount=="function"){r=h,n=h.return;try{e=r,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(y){Me(r,n,y)}}break;case 5:xo(h,h.return);break;case 22:if(h.memoizedState!==null){MI(d);continue}}f!==null?(f.return=h,B=f):MI(d)}c=c.sibling}e:for(c=null,d=t;;){if(d.tag===5){if(c===null){c=d;try{i=d.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=jT("display",o))}catch(y){Me(t,t.return,y)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(y){Me(t,t.return,y)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Ln(e,t),Xn(t),r&4&&VI(t);break;case 21:break;default:Ln(e,t),Xn(t)}}function Xn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(gR(n)){var r=n;break e}n=n.return}throw Error(D(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Jl(i,""),r.flags&=-33);var s=OI(t);dg(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=OI(t);cg(t,a,o);break;default:throw Error(D(161))}}catch(l){Me(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function DD(t,e,n){B=t,vR(t)}function vR(t,e,n){for(var r=(t.mode&1)!==0;B!==null;){var i=B,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Yc;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Pt;a=Yc;var u=Pt;if(Yc=o,(Pt=l)&&!u)for(B=i;B!==null;)o=B,l=o.child,o.tag===22&&o.memoizedState!==null?FI(i):l!==null?(l.return=o,B=l):FI(i);for(;s!==null;)B=s,vR(s),s=s.sibling;B=i,Yc=a,Pt=u}LI(t)}else(i.subtreeFlags&8772)!==0&&s!==null?(s.return=i,B=s):LI(t)}}function LI(t){for(;B!==null;){var e=B;if((e.flags&8772)!==0){var n=e.alternate;try{if((e.flags&8772)!==0)switch(e.tag){case 0:case 11:case 15:Pt||Jh(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Pt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Mn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&vI(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}vI(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&nu(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(D(163))}Pt||e.flags&512&&ug(e)}catch(h){Me(e,e.return,h)}}if(e===t){B=null;break}if(n=e.sibling,n!==null){n.return=e.return,B=n;break}B=e.return}}function MI(t){for(;B!==null;){var e=B;if(e===t){B=null;break}var n=e.sibling;if(n!==null){n.return=e.return,B=n;break}B=e.return}}function FI(t){for(;B!==null;){var e=B;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Jh(4,e)}catch(l){Me(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){Me(e,i,l)}}var s=e.return;try{ug(e)}catch(l){Me(e,s,l)}break;case 5:var o=e.return;try{ug(e)}catch(l){Me(e,o,l)}}}catch(l){Me(e,e.return,l)}if(e===t){B=null;break}var a=e.sibling;if(a!==null){a.return=e.return,B=a;break}B=e.return}}var ND=Math.ceil,oh=Gr.ReactCurrentDispatcher,ey=Gr.ReactCurrentOwner,Cn=Gr.ReactCurrentBatchConfig,de=0,at=null,Xe=null,vt=0,ln=0,Do=Wi(0),et=0,fu=null,ks=0,Zh=0,ty=0,Vl=null,Yt=null,ny=0,ra=1/0,Rr=null,ah=!1,hg=null,Ai=null,Xc=!1,yi=null,lh=0,Ll=0,fg=null,Ad=-1,Pd=0;function $t(){return(de&6)!==0?Ge():Ad!==-1?Ad:Ad=Ge()}function Pi(t){return(t.mode&1)===0?1:(de&2)!==0&&vt!==0?vt&-vt:gD.transition!==null?(Pd===0&&(Pd=nS()),Pd):(t=pe,t!==0||(t=window.event,t=t===void 0?16:uS(t.type)),t)}function Bn(t,e,n,r){if(50<Ll)throw Ll=0,fg=null,Error(D(185));Yu(t,n,r),((de&2)===0||t!==at)&&(t===at&&((de&2)===0&&(Zh|=n),et===4&&pi(t,vt)),rn(t,r),n===1&&de===0&&(e.mode&1)===0&&(ra=Ge()+500,Qh&&Gi()))}function rn(t,e){var n=t.callbackNode;gx(t,e);var r=Wd(t,t===at?vt:0);if(r===0)n!==null&&Hw(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Hw(n),e===1)t.tag===0?mD(UI.bind(null,t)):CS(UI.bind(null,t)),dD(function(){(de&6)===0&&Gi()}),n=null;else{switch(rS(r)){case 1:n=C_;break;case 4:n=eS;break;case 16:n=qd;break;case 536870912:n=tS;break;default:n=qd}n=PR(n,wR.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function wR(t,e){if(Ad=-1,Pd=0,(de&6)!==0)throw Error(D(327));var n=t.callbackNode;if($o()&&t.callbackNode!==n)return null;var r=Wd(t,t===at?vt:0);if(r===0)return null;if((r&30)!==0||(r&t.expiredLanes)!==0||e)e=uh(t,r);else{e=r;var i=de;de|=2;var s=ER();(at!==t||vt!==e)&&(Rr=null,ra=Ge()+500,ws(t,e));do try{LD();break}catch(a){IR(t,a)}while(1);B_(),oh.current=s,de=i,Xe!==null?e=0:(at=null,vt=0,e=et)}if(e!==0){if(e===2&&(i=$m(t),i!==0&&(r=i,e=pg(t,i))),e===1)throw n=fu,ws(t,0),pi(t,r),rn(t,Ge()),n;if(e===6)pi(t,r);else{if(i=t.current.alternate,(r&30)===0&&!OD(i)&&(e=uh(t,r),e===2&&(s=$m(t),s!==0&&(r=s,e=pg(t,s))),e===1))throw n=fu,ws(t,0),pi(t,r),rn(t,Ge()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(D(345));case 2:rs(t,Yt,Rr);break;case 3:if(pi(t,r),(r&130023424)===r&&(e=ny+500-Ge(),10<e)){if(Wd(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){$t(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Km(rs.bind(null,t,Yt,Rr),e);break}rs(t,Yt,Rr);break;case 4:if(pi(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-$n(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Ge()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*ND(r/1960))-r,10<r){t.timeoutHandle=Km(rs.bind(null,t,Yt,Rr),r);break}rs(t,Yt,Rr);break;case 5:rs(t,Yt,Rr);break;default:throw Error(D(329))}}}return rn(t,Ge()),t.callbackNode===n?wR.bind(null,t):null}function pg(t,e){var n=Vl;return t.current.memoizedState.isDehydrated&&(ws(t,e).flags|=256),t=uh(t,e),t!==2&&(e=Yt,Yt=n,e!==null&&mg(e)),t}function mg(t){Yt===null?Yt=t:Yt.push.apply(Yt,t)}function OD(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!jn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function pi(t,e){for(e&=~ty,e&=~Zh,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-$n(e),r=1<<n;t[n]=-1,e&=~r}}function UI(t){if((de&6)!==0)throw Error(D(327));$o();var e=Wd(t,0);if((e&1)===0)return rn(t,Ge()),null;var n=uh(t,e);if(t.tag!==0&&n===2){var r=$m(t);r!==0&&(e=r,n=pg(t,r))}if(n===1)throw n=fu,ws(t,0),pi(t,e),rn(t,Ge()),n;if(n===6)throw Error(D(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,rs(t,Yt,Rr),rn(t,Ge()),null}function ry(t,e){var n=de;de|=1;try{return t(e)}finally{de=n,de===0&&(ra=Ge()+500,Qh&&Gi())}}function bs(t){yi!==null&&yi.tag===0&&(de&6)===0&&$o();var e=de;de|=1;var n=Cn.transition,r=pe;try{if(Cn.transition=null,pe=1,t)return t()}finally{pe=r,Cn.transition=n,de=e,(de&6)===0&&Gi()}}function iy(){ln=Do.current,Se(Do)}function ws(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,cD(n)),Xe!==null)for(n=Xe.return;n!==null;){var r=n;switch(F_(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Yd();break;case 3:ta(),Se(tn),Se(Dt),H_();break;case 5:G_(r);break;case 4:ta();break;case 13:Se(Ne);break;case 19:Se(Ne);break;case 10:z_(r.type._context);break;case 22:case 23:iy()}n=n.return}if(at=t,Xe=t=Ci(t.current,null),vt=ln=e,et=0,fu=null,ty=Zh=ks=0,Yt=Vl=null,hs!==null){for(e=0;e<hs.length;e++)if(n=hs[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}hs=null}return t}function IR(t,e){do{var n=Xe;try{if(B_(),Td.current=sh,ih){for(var r=Oe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ih=!1}if(Cs=0,it=Je=Oe=null,Nl=!1,cu=0,ey.current=null,n===null||n.return===null){et=1,fu=e,Xe=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=vt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,d=c.tag;if((c.mode&1)===0&&(d===0||d===11||d===15)){var h=c.alternate;h?(c.updateQueue=h.updateQueue,c.memoizedState=h.memoizedState,c.lanes=h.lanes):(c.updateQueue=null,c.memoizedState=null)}var f=AI(o);if(f!==null){f.flags&=-257,PI(f,o,a,s,e),f.mode&1&&RI(s,u,e),e=f,l=u;var v=e.updateQueue;if(v===null){var y=new Set;y.add(l),e.updateQueue=y}else v.add(l);break e}else{if((e&1)===0){RI(s,u,e),sy();break e}l=Error(D(426))}}else if(Ce&&a.mode&1){var E=AI(o);if(E!==null){(E.flags&65536)===0&&(E.flags|=256),PI(E,o,a,s,e),U_(na(l,a));break e}}s=l=na(l,a),et!==4&&(et=2),Vl===null?Vl=[s]:Vl.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var g=iR(s,l,e);yI(s,g);break e;case 1:a=l;var p=s.type,m=s.stateNode;if((s.flags&128)===0&&(typeof p.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Ai===null||!Ai.has(m)))){s.flags|=65536,e&=-e,s.lanes|=e;var I=sR(s,a,e);yI(s,I);break e}}s=s.return}while(s!==null)}SR(n)}catch(A){e=A,Xe===n&&n!==null&&(Xe=n=n.return);continue}break}while(1)}function ER(){var t=oh.current;return oh.current=sh,t===null?sh:t}function sy(){(et===0||et===3||et===2)&&(et=4),at===null||(ks&268435455)===0&&(Zh&268435455)===0||pi(at,vt)}function uh(t,e){var n=de;de|=2;var r=ER();(at!==t||vt!==e)&&(Rr=null,ws(t,e));do try{VD();break}catch(i){IR(t,i)}while(1);if(B_(),de=n,oh.current=r,Xe!==null)throw Error(D(261));return at=null,vt=0,et}function VD(){for(;Xe!==null;)TR(Xe)}function LD(){for(;Xe!==null&&!ax();)TR(Xe)}function TR(t){var e=AR(t.alternate,t,ln);t.memoizedProps=t.pendingProps,e===null?SR(t):Xe=e,ey.current=null}function SR(t){var e=t;do{var n=e.alternate;if(t=e.return,(e.flags&32768)===0){if(n=CD(n,e,ln),n!==null){Xe=n;return}}else{if(n=kD(n,e),n!==null){n.flags&=32767,Xe=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{et=6,Xe=null;return}}if(e=e.sibling,e!==null){Xe=e;return}Xe=e=t}while(e!==null);et===0&&(et=5)}function rs(t,e,n){var r=pe,i=Cn.transition;try{Cn.transition=null,pe=1,MD(t,e,n,r)}finally{Cn.transition=i,pe=r}return null}function MD(t,e,n,r){do $o();while(yi!==null);if((de&6)!==0)throw Error(D(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(D(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(_x(t,s),t===at&&(Xe=at=null,vt=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||Xc||(Xc=!0,PR(qd,function(){return $o(),null})),s=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||s){s=Cn.transition,Cn.transition=null;var o=pe;pe=1;var a=de;de|=4,ey.current=null,xD(t,n),yR(n,t),rD(Gm),Gd=!!Wm,Gm=Wm=null,t.current=n,DD(n),lx(),de=a,pe=o,Cn.transition=s}else t.current=n;if(Xc&&(Xc=!1,yi=t,lh=i),s=t.pendingLanes,s===0&&(Ai=null),dx(n.stateNode),rn(t,Ge()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(ah)throw ah=!1,t=hg,hg=null,t;return(lh&1)!==0&&t.tag!==0&&$o(),s=t.pendingLanes,(s&1)!==0?t===fg?Ll++:(Ll=0,fg=t):Ll=0,Gi(),null}function $o(){if(yi!==null){var t=rS(lh),e=Cn.transition,n=pe;try{if(Cn.transition=null,pe=16>t?16:t,yi===null)var r=!1;else{if(t=yi,yi=null,lh=0,(de&6)!==0)throw Error(D(331));var i=de;for(de|=4,B=t.current;B!==null;){var s=B,o=s.child;if((B.flags&16)!==0){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(B=u;B!==null;){var c=B;switch(c.tag){case 0:case 11:case 15:Ol(8,c,s)}var d=c.child;if(d!==null)d.return=c,B=d;else for(;B!==null;){c=B;var h=c.sibling,f=c.return;if(mR(c),c===u){B=null;break}if(h!==null){h.return=f,B=h;break}B=f}}}var v=s.alternate;if(v!==null){var y=v.child;if(y!==null){v.child=null;do{var E=y.sibling;y.sibling=null,y=E}while(y!==null)}}B=s}}if((s.subtreeFlags&2064)!==0&&o!==null)o.return=s,B=o;else e:for(;B!==null;){if(s=B,(s.flags&2048)!==0)switch(s.tag){case 0:case 11:case 15:Ol(9,s,s.return)}var g=s.sibling;if(g!==null){g.return=s.return,B=g;break e}B=s.return}}var p=t.current;for(B=p;B!==null;){o=B;var m=o.child;if((o.subtreeFlags&2064)!==0&&m!==null)m.return=o,B=m;else e:for(o=p;B!==null;){if(a=B,(a.flags&2048)!==0)try{switch(a.tag){case 0:case 11:case 15:Jh(9,a)}}catch(A){Me(a,a.return,A)}if(a===o){B=null;break e}var I=a.sibling;if(I!==null){I.return=a.return,B=I;break e}B=a.return}}if(de=i,Gi(),hr&&typeof hr.onPostCommitFiberRoot=="function")try{hr.onPostCommitFiberRoot(qh,t)}catch{}r=!0}return r}finally{pe=n,Cn.transition=e}}return!1}function $I(t,e,n){e=na(n,e),e=iR(t,e,1),t=Ri(t,e,1),e=$t(),t!==null&&(Yu(t,1,e),rn(t,e))}function Me(t,e,n){if(t.tag===3)$I(t,t,n);else for(;e!==null;){if(e.tag===3){$I(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ai===null||!Ai.has(r))){t=na(n,t),t=sR(e,t,1),e=Ri(e,t,1),t=$t(),e!==null&&(Yu(e,1,t),rn(e,t));break}}e=e.return}}function FD(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=$t(),t.pingedLanes|=t.suspendedLanes&n,at===t&&(vt&n)===n&&(et===4||et===3&&(vt&130023424)===vt&&500>Ge()-ny?ws(t,0):ty|=n),rn(t,e)}function RR(t,e){e===0&&((t.mode&1)===0?e=1:(e=Bc,Bc<<=1,(Bc&130023424)===0&&(Bc=4194304)));var n=$t();t=$r(t,e),t!==null&&(Yu(t,e,n),rn(t,n))}function UD(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),RR(t,n)}function $D(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(D(314))}r!==null&&r.delete(e),RR(t,n)}var AR;AR=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||tn.current)Xt=!0;else{if((t.lanes&n)===0&&(e.flags&128)===0)return Xt=!1,PD(t,e,n);Xt=(t.flags&131072)!==0}else Xt=!1,Ce&&(e.flags&1048576)!==0&&kS(e,Zd,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Rd(t,e),t=e.pendingProps;var i=Jo(e,Dt.current);Uo(e,n),i=Q_(null,e,r,t,i,n);var s=Y_();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,nn(r)?(s=!0,Xd(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,q_(e),i.updater=Yh,e.stateNode=i,i._reactInternals=e,tg(e,r,t,n),e=ig(null,e,r,!0,s,n)):(e.tag=0,Ce&&s&&M_(e),Vt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Rd(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=zD(r),t=Mn(r,t),i){case 0:e=rg(null,e,r,t,n);break e;case 1:e=bI(null,e,r,t,n);break e;case 11:e=CI(null,e,r,t,n);break e;case 14:e=kI(null,e,r,Mn(r.type,t),n);break e}throw Error(D(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Mn(r,i),rg(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Mn(r,i),bI(t,e,r,i,n);case 3:e:{if(uR(e),t===null)throw Error(D(387));r=e.pendingProps,s=e.memoizedState,i=s.element,NS(t,e),nh(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=na(Error(D(423)),e),e=xI(t,e,r,n,i);break e}else if(r!==i){i=na(Error(D(424)),e),e=xI(t,e,r,n,i);break e}else for(cn=Si(e.stateNode.containerInfo.firstChild),hn=e,Ce=!0,Un=null,n=MS(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Zo(),r===i){e=Br(t,e,n);break e}Vt(t,e,r,n)}e=e.child}return e;case 5:return FS(e),t===null&&Jm(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Hm(r,i)?o=null:s!==null&&Hm(r,s)&&(e.flags|=32),lR(t,e),Vt(t,e,o,n),e.child;case 6:return t===null&&Jm(e),null;case 13:return cR(t,e,n);case 4:return W_(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=ea(e,null,r,n):Vt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Mn(r,i),CI(t,e,r,i,n);case 7:return Vt(t,e,e.pendingProps,n),e.child;case 8:return Vt(t,e,e.pendingProps.children,n),e.child;case 12:return Vt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ve(eh,r._currentValue),r._currentValue=o,s!==null)if(jn(s.value,o)){if(s.children===i.children&&!tn.current){e=Br(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Vr(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Zm(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(D(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Zm(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Vt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Uo(e,n),i=bn(i),r=r(i),e.flags|=1,Vt(t,e,r,n),e.child;case 14:return r=e.type,i=Mn(r,e.pendingProps),i=Mn(r.type,i),kI(t,e,r,i,n);case 15:return oR(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Mn(r,i),Rd(t,e),e.tag=1,nn(r)?(t=!0,Xd(e)):t=!1,Uo(e,n),VS(e,r,i),tg(e,r,i,n),ig(null,e,r,!0,t,n);case 19:return dR(t,e,n);case 22:return aR(t,e,n)}throw Error(D(156,e.tag))};function PR(t,e){return ZT(t,e)}function BD(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Sn(t,e,n,r){return new BD(t,e,n,r)}function oy(t){return t=t.prototype,!(!t||!t.isReactComponent)}function zD(t){if(typeof t=="function")return oy(t)?1:0;if(t!=null){if(t=t.$$typeof,t===R_)return 11;if(t===A_)return 14}return 2}function Ci(t,e){var n=t.alternate;return n===null?(n=Sn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Cd(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")oy(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Eo:return Is(n.children,i,s,e);case S_:o=8,i|=8;break;case Rm:return t=Sn(12,n,e,i|2),t.elementType=Rm,t.lanes=s,t;case Am:return t=Sn(13,n,e,i),t.elementType=Am,t.lanes=s,t;case Pm:return t=Sn(19,n,e,i),t.elementType=Pm,t.lanes=s,t;case LT:return ef(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case OT:o=10;break e;case VT:o=9;break e;case R_:o=11;break e;case A_:o=14;break e;case ui:o=16,r=null;break e}throw Error(D(130,t==null?t:typeof t,""))}return e=Sn(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Is(t,e,n,r){return t=Sn(7,t,r,e),t.lanes=n,t}function ef(t,e,n,r){return t=Sn(22,t,r,e),t.elementType=LT,t.lanes=n,t.stateNode={isHidden:!1},t}function Up(t,e,n){return t=Sn(6,t,null,e),t.lanes=n,t}function $p(t,e,n){return e=Sn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function jD(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=wp(0),this.expirationTimes=wp(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=wp(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function ay(t,e,n,r,i,s,o,a,l){return t=new jD(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Sn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},q_(s),t}function qD(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Io,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function CR(t){if(!t)return Di;t=t._reactInternals;e:{if(Ws(t)!==t||t.tag!==1)throw Error(D(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(nn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(D(171))}if(t.tag===1){var n=t.type;if(nn(n))return PS(t,n,e)}return e}function kR(t,e,n,r,i,s,o,a,l){return t=ay(n,r,!0,t,i,s,o,a,l),t.context=CR(null),n=t.current,r=$t(),i=Pi(n),s=Vr(r,i),s.callback=e!=null?e:null,Ri(n,s,i),t.current.lanes=i,Yu(t,i,r),rn(t,r),t}function tf(t,e,n,r){var i=e.current,s=$t(),o=Pi(i);return n=CR(n),e.context===null?e.context=n:e.pendingContext=n,e=Vr(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Ri(i,e,o),t!==null&&(Bn(t,i,o,s),Ed(t,i,o)),o}function ch(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function BI(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function ly(t,e){BI(t,e),(t=t.alternate)&&BI(t,e)}function WD(){return null}var bR=typeof reportError=="function"?reportError:function(t){console.error(t)};function uy(t){this._internalRoot=t}nf.prototype.render=uy.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(D(409));tf(t,e,null,null)};nf.prototype.unmount=uy.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;bs(function(){tf(null,t,null,null)}),e[Ur]=null}};function nf(t){this._internalRoot=t}nf.prototype.unstable_scheduleHydration=function(t){if(t){var e=oS();t={blockedOn:null,target:t,priority:e};for(var n=0;n<fi.length&&e!==0&&e<fi[n].priority;n++);fi.splice(n,0,t),n===0&&lS(t)}};function cy(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function rf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function zI(){}function GD(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=ch(o);s.call(u)}}var o=kR(e,r,t,0,null,!1,!1,"",zI);return t._reactRootContainer=o,t[Ur]=o.current,su(t.nodeType===8?t.parentNode:t),bs(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=ch(l);a.call(u)}}var l=ay(t,0,!1,null,null,!1,!1,"",zI);return t._reactRootContainer=l,t[Ur]=l.current,su(t.nodeType===8?t.parentNode:t),bs(function(){tf(e,l,n,r)}),l}function sf(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=ch(o);a.call(l)}}tf(e,o,t,i)}else o=GD(n,e,t,i,r);return ch(o)}iS=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=yl(e.pendingLanes);n!==0&&(k_(e,n|1),rn(e,Ge()),(de&6)===0&&(ra=Ge()+500,Gi()))}break;case 13:bs(function(){var r=$r(t,1);if(r!==null){var i=$t();Bn(r,t,1,i)}}),ly(t,1)}};b_=function(t){if(t.tag===13){var e=$r(t,134217728);if(e!==null){var n=$t();Bn(e,t,134217728,n)}ly(t,134217728)}};sS=function(t){if(t.tag===13){var e=Pi(t),n=$r(t,e);if(n!==null){var r=$t();Bn(n,t,e,r)}ly(t,e)}};oS=function(){return pe};aS=function(t,e){var n=pe;try{return pe=t,e()}finally{pe=n}};Mm=function(t,e,n){switch(e){case"input":if(bm(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Kh(r);if(!i)throw Error(D(90));FT(r),bm(r,i)}}}break;case"textarea":$T(t,n);break;case"select":e=n.value,e!=null&&Vo(t,!!n.multiple,e,!1)}};HT=ry;KT=bs;var HD={usingClientEntryPoint:!1,Events:[Ju,Ao,Kh,WT,GT,ry]},il={findFiberByHostInstance:ds,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},KD={bundleType:il.bundleType,version:il.version,rendererPackageName:il.rendererPackageName,rendererConfig:il.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Gr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=XT(t),t===null?null:t.stateNode},findFiberByHostInstance:il.findFiberByHostInstance||WD,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!="undefined"){var Jc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Jc.isDisabled&&Jc.supportsFiber)try{qh=Jc.inject(KD),hr=Jc}catch{}}_n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=HD;_n.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!cy(e))throw Error(D(200));return qD(t,e,null,n)};_n.createRoot=function(t,e){if(!cy(t))throw Error(D(299));var n=!1,r="",i=bR;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=ay(t,1,!1,null,null,n,!1,r,i),t[Ur]=e.current,su(t.nodeType===8?t.parentNode:t),new uy(e)};_n.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(D(188)):(t=Object.keys(t).join(","),Error(D(268,t)));return t=XT(e),t=t===null?null:t.stateNode,t};_n.flushSync=function(t){return bs(t)};_n.hydrate=function(t,e,n){if(!rf(e))throw Error(D(200));return sf(null,t,e,!0,n)};_n.hydrateRoot=function(t,e,n){if(!cy(t))throw Error(D(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=bR;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=kR(e,null,t,1,n!=null?n:null,i,!1,s,o),t[Ur]=e.current,su(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new nf(e)};_n.render=function(t,e,n){if(!rf(e))throw Error(D(200));return sf(null,t,e,!1,n)};_n.unmountComponentAtNode=function(t){if(!rf(t))throw Error(D(40));return t._reactRootContainer?(bs(function(){sf(null,null,t,!1,function(){t._reactRootContainer=null,t[Ur]=null})}),!0):!1};_n.unstable_batchedUpdates=ry;_n.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!rf(n))throw Error(D(200));if(t==null||t._reactInternals===void 0)throw Error(D(38));return sf(t,e,n,!1,r)};_n.version="18.2.0-next-9e3b772b8-20220608";function xR(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(xR)}catch(t){console.error(t)}}xR(),hi.exports=_n;var jI=hi.exports;Tm.createRoot=jI.createRoot,Tm.hydrateRoot=jI.hydrateRoot;const QD="_container_p31t9_1",YD="_main_p31t9_17";var qI={container:QD,main:YD};let XD=0;function ye(t,e){const n=`atom${++XD}`,r={toString:()=>n};return typeof t=="function"?r.read=t:(r.init=t,r.read=i=>i(r),r.write=(i,s,o)=>s(r,typeof o=="function"?o(i(r)):o)),e&&(r.write=e),r}const Bp=t=>"init"in t,zp=t=>!!t.write,dh=new WeakMap,JD=(t,e)=>{dh.set(t,e),t.catch(()=>{}).finally(()=>dh.delete(t))},WI=(t,e)=>{const n=dh.get(t);n&&(dh.delete(t),n(e))},GI=(t,e)=>{t.status="fulfilled",t.value=e},HI=(t,e)=>{t.status="rejected",t.reason=e},Zc=(t,e)=>"v"in t&&"v"in e&&Object.is(t.v,e.v),KI=(t,e)=>"e"in t&&"e"in e&&Object.is(t.e,e.e),jp=t=>"v"in t&&t.v instanceof Promise,ed=t=>{if("e"in t)throw t.e;return t.v},ZD=()=>{const t=new WeakMap,e=new WeakMap,n=new Map;let r,i;({BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}&&"production")!=="production"&&(r=new Set,i=new Set);const s=_=>t.get(_),o=(_,w)=>{({BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}&&"production")!=="production"&&Object.freeze(w);const R=t.get(_);if(t.set(_,w),n.has(_)||n.set(_,R),R&&jp(R)){const k="v"in w?w.v instanceof Promise?w.v:Promise.resolve(w.v):Promise.reject(w.e);WI(R.v,k)}},a=(_,w,R)=>{const k=new Map;let O=!1;R.forEach(q=>{const Y=q===_?w:s(q);Y?(k.set(q,Y),w.d.get(q)!==Y&&(O=!0)):({BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}&&"production")!=="production"&&console.warn("[Bug] atom state not found")}),(O||w.d.size!==k.size)&&(w.d=k)},l=(_,w,R)=>{const k=s(_),O={d:(k==null?void 0:k.d)||new Map,v:w};return R&&a(_,O,R),k&&Zc(k,O)&&k.d===O.d?k:(o(_,O),O)},u=(_,w,R)=>{const k=s(_),O={d:(k==null?void 0:k.d)||new Map,e:w};return R&&a(_,O,R),k&&KI(k,O)&&k.d===O.d?k:(o(_,O),O)},c=_=>{const w=s(_);if(w&&(w.d.forEach((W,J)=>{J!==_&&!e.has(J)&&c(J)}),Array.from(w.d).every(([W,J])=>W===_||s(W)===J)))return w;const R=new Set;let k=!0;const O=W=>{if(R.add(W),W===_){const X=s(W);if(X)return ed(X);if(Bp(W))return W.init;throw new Error("no atom init")}const J=c(W);return ed(J)};let q,Y;const Pe={get signal(){return q||(q=new AbortController),q.signal},get setSelf(){return({BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}&&"production")!=="production"&&!zp(_)&&console.warn("setSelf function cannot be used with read-only atom"),!Y&&zp(_)&&(Y=(...W)=>{if(({BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}&&"production")!=="production"&&k&&console.warn("setSelf function cannot be called in sync"),!k)return g(_,...W)}),Y}};try{const W=_.read(O,Pe);if(W instanceof Promise){let J;const X=new Promise((V,H)=>{let K=!1;W.then(le=>{K||(GI(X,le),V(le))},le=>{K||(HI(X,le),H(le))}).finally(()=>{K||(K=!0,l(_,X,R))}),J=le=>{K||(K=!0,le.then(re=>GI(X,re),re=>HI(X,re)),V(le))}});return X.status="pending",JD(X,V=>{V&&J(V),q==null||q.abort()}),l(_,X,R)}return l(_,W,R)}catch(W){return u(_,W,R)}finally{k=!1}},d=_=>ed(c(_)),h=_=>{let w=e.get(_);return w||(w=p(_)),w},f=(_,w)=>!w.l.size&&(!w.t.size||w.t.size===1&&w.t.has(_)),v=_=>{const w=e.get(_);w&&f(_,w)&&m(_)},y=_=>{const w=e.get(_);w==null||w.t.forEach(R=>{if(R!==_){const k=s(R),O=c(R);(!k||!Zc(k,O))&&y(R)}})},E=(_,...w)=>{let R=!0;const k=Y=>ed(c(Y)),O=(Y,...Pe)=>{let W;if(Y===_){if(!Bp(Y))throw new Error("atom not writable");const J=s(Y),X=l(Y,Pe[0]);(!J||!Zc(J,X))&&y(Y)}else W=E(Y,...Pe);return R||A(),W},q=_.write(k,O,...w);return R=!1,q},g=(_,...w)=>{const R=E(_,...w);return A(),R},p=(_,w)=>{const R={t:new Set(w&&[w]),l:new Set};if(e.set(_,R),({BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}&&"production")!=="production"&&i.add(_),c(_).d.forEach((k,O)=>{const q=e.get(O);q?q.t.add(_):O!==_&&p(O,_)}),c(_),zp(_)&&_.onMount){const k=_.onMount((...O)=>g(_,...O));k&&(R.u=k)}return R},m=_=>{var w;const R=(w=e.get(_))==null?void 0:w.u;R&&R(),e.delete(_),({BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}&&"production")!=="production"&&i.delete(_);const k=s(_);k?(jp(k)&&WI(k.v),k.d.forEach((O,q)=>{if(q!==_){const Y=e.get(q);Y&&(Y.t.delete(_),f(q,Y)&&m(q))}})):({BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}&&"production")!=="production"&&console.warn("[Bug] could not find atom state to unmount",_)},I=(_,w,R)=>{const k=new Set(w.d.keys());R==null||R.forEach((O,q)=>{if(k.has(q)){k.delete(q);return}const Y=e.get(q);Y&&(Y.t.delete(_),f(q,Y)&&m(q))}),k.forEach(O=>{const q=e.get(O);q?q.t.add(_):e.has(_)&&p(O,_)})},A=()=>{for(;n.size;){const _=Array.from(n);n.clear(),_.forEach(([w,R])=>{const k=s(w);if(k){k.d!==(R==null?void 0:R.d)&&I(w,k,R==null?void 0:R.d);const O=e.get(w);O&&!(R&&!jp(R)&&(Zc(R,k)||KI(R,k)))&&O.l.forEach(q=>q())}else({BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}&&"production")!=="production"&&console.warn("[Bug] no atom state to flush")})}({BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}&&"production")!=="production"&&r.forEach(_=>_())},C=(_,w)=>{const R=h(_);A();const k=R.l;return k.add(w),()=>{k.delete(w),v(_)}};return({BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}&&"production")!=="production"?{get:d,set:g,sub:C,dev_subscribe_state:_=>(r.add(_),()=>{r.delete(_)}),dev_get_mounted_atoms:()=>i.values(),dev_get_atom_state:_=>t.get(_),dev_get_mounted:_=>e.get(_),dev_restore_atoms:_=>{for(const[w,R]of _)Bp(w)&&(l(w,R),y(w));A()}}:{get:d,set:g,sub:C}};let qp;const eN=()=>(qp||(qp=ZD()),qp);var of={exports:{}},af={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tN=S.exports,nN=Symbol.for("react.element"),rN=Symbol.for("react.fragment"),iN=Object.prototype.hasOwnProperty,sN=tN.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,oN={key:!0,ref:!0,__self:!0,__source:!0};function DR(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)iN.call(e,r)&&!oN.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:nN,type:t,key:s,ref:o,props:i,_owner:sN.current}}af.Fragment=rN;af.jsx=DR;af.jsxs=DR;of.exports=af;const M=of.exports.jsx,ne=of.exports.jsxs,NR=of.exports.Fragment,aN=S.exports.createContext(void 0),OR=t=>{const e=S.exports.useContext(aN);return(t==null?void 0:t.store)||e||eN()},lN=t=>t instanceof Promise,uN=dr.use||(t=>{if(t.status==="pending")throw t;if(t.status==="fulfilled")return t.value;throw t.status==="rejected"?t.reason:(t.status="pending",t.then(e=>{t.status="fulfilled",t.value=e},e=>{t.status="rejected",t.reason=e}),t)});function cN(t,e){const n=OR(e),[[r,i,s],o]=S.exports.useReducer(u=>{const c=n.get(t);return Object.is(u[0],c)&&u[1]===n&&u[2]===t?u:[c,n,t]},void 0,()=>[n.get(t),n,t]);let a=r;(i!==n||s!==t)&&(o(),a=n.get(t));const l=e==null?void 0:e.delay;return S.exports.useEffect(()=>{const u=n.sub(t,()=>{if(typeof l=="number"){setTimeout(o,l);return}o()});return o(),u},[n,t,l]),S.exports.useDebugValue(a),lN(a)?uN(a):a}function dN(t,e){const n=OR(e);return S.exports.useCallback((...i)=>{if(({BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}&&"production")!=="production"&&!("write"in t))throw new Error("not writable atom");return n.set(t,...i)},[n,t])}function Q(t,e){return[cN(t,e),dN(t,e)]}const VR=ye([]),lf=ye("1"),LR=ye([]),MR=ye([]),ia=ye("");ye(!1);const ec=ye(!1),tc=ye({x:0,y:0});ye(null);const dy=ye(!1),FR=ye(!1);ye(!1);const hN=ye([]),UR=ye(!1),uf=ye(!1),fN=ye(!1),pN=ye({}),$R=ye(!1),BR=ye("");ye({});const zR=ye(!1);function wl(t,e){const[,n]=Q(tc),r=i=>{t.current&&!t.current.contains(i.target)&&(e(),n({x:0,y:0}))};S.exports.useEffect(()=>(document.addEventListener("click",r,!0),()=>{document.removeEventListener("click",r,!0)}),[t,e])}/**
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
 */const jR=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},mN=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},qR={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,d=(s&3)<<4|a>>4;let h=(a&15)<<2|u>>6,f=u&63;l||(f=64,o||(h=64)),r.push(n[c],n[d],n[h],n[f])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(jR(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):mN(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||d==null)throw new gN;const h=s<<2|a>>4;if(r.push(h),u!==64){const f=a<<4&240|u>>2;if(r.push(f),d!==64){const v=u<<6&192|d;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class gN extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const _N=function(t){const e=jR(t);return qR.encodeByteArray(e,!0)},hh=function(t){return _N(t).replace(/\./g,"")},WR=function(t){try{return qR.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function fh(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!yN(n)||(t[n]=fh(t[n],e[n]));return t}function yN(t){return t!=="__proto__"}/**
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
 */function vN(){if(typeof self!="undefined")return self;if(typeof window!="undefined")return window;if(typeof global!="undefined")return global;throw new Error("Unable to locate global object.")}/**
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
 */const wN=()=>vN().__FIREBASE_DEFAULTS__,IN=()=>{if(typeof process=="undefined"||typeof process.env=="undefined")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},EN=()=>{if(typeof document=="undefined")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&WR(t[1]);return e&&JSON.parse(e)},hy=()=>{try{return wN()||IN()||EN()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},GR=()=>{var t;return(t=hy())===null||t===void 0?void 0:t.config},TN=t=>{var e;return(e=hy())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class SN{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function HR(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[hh(JSON.stringify(n)),hh(JSON.stringify(o)),a].join(".")}/**
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
 */function De(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function RN(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(De())}function fy(){var t;const e=(t=hy())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function KR(){return typeof self=="object"&&self.self===self}function QR(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function py(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function YR(){const t=De();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function XR(){return!fy()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function pu(){try{return typeof indexedDB=="object"}catch{return!1}}function AN(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const PN="FirebaseError";class kt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=PN,Object.setPrototypeOf(this,kt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Gs.prototype.create)}}class Gs{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?CN(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new kt(i,a,r)}}function CN(t,e){return t.replace(kN,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const kN=/\{\$([^}]+)}/g;/**
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
 */function QI(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function bN(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function mu(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(YI(s)&&YI(o)){if(!mu(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function YI(t){return t!==null&&typeof t=="object"}/**
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
 */function Aa(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function No(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Il(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function JR(t,e){const n=new xN(t,e);return n.subscribe.bind(n)}class xN{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");DN(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Wp),i.error===void 0&&(i.error=Wp),i.complete===void 0&&(i.complete=Wp);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console!="undefined"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function DN(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Wp(){}/**
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
 */function z(t){return t&&t._delegate?t._delegate:t}class Dn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const is="[DEFAULT]";/**
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
 */class NN{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new SN;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(VN(e))try{this.getOrInitializeService({instanceIdentifier:is})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=is){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=is){return this.instances.has(e)}getOptions(e=is){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:ON(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=is){return this.component?this.component.multipleInstances?e:is:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ON(t){return t===is?void 0:t}function VN(t){return t.instantiationMode==="EAGER"}/**
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
 */class ZR{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new NN(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */const my=[];var ie;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ie||(ie={}));const e1={debug:ie.DEBUG,verbose:ie.VERBOSE,info:ie.INFO,warn:ie.WARN,error:ie.ERROR,silent:ie.SILENT},LN=ie.INFO,MN={[ie.DEBUG]:"log",[ie.VERBOSE]:"log",[ie.INFO]:"info",[ie.WARN]:"warn",[ie.ERROR]:"error"},FN=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=MN[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class cf{constructor(e){this.name=e,this._logLevel=LN,this._logHandler=FN,this._userLogHandler=null,my.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ie))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?e1[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ie.DEBUG,...e),this._logHandler(this,ie.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ie.VERBOSE,...e),this._logHandler(this,ie.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ie.INFO,...e),this._logHandler(this,ie.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ie.WARN,...e),this._logHandler(this,ie.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ie.ERROR,...e),this._logHandler(this,ie.ERROR,...e)}}function UN(t){my.forEach(e=>{e.setLogLevel(t)})}function $N(t,e){for(const n of my){let r=null;e&&e.level&&(r=e1[e.level]),t===null?n.userLogHandler=null:n.userLogHandler=(i,s,...o)=>{const a=o.map(l=>{if(l==null)return null;if(typeof l=="string")return l;if(typeof l=="number"||typeof l=="boolean")return l.toString();if(l instanceof Error)return l.message;try{return JSON.stringify(l)}catch{return null}}).filter(l=>l).join(" ");s>=(r!=null?r:i.logLevel)&&t({level:ie[s].toLowerCase(),message:a,args:o,type:i.name})}}}const BN=(t,e)=>e.some(n=>t instanceof n);let XI,JI;function zN(){return XI||(XI=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function jN(){return JI||(JI=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const t1=new WeakMap,gg=new WeakMap,n1=new WeakMap,Gp=new WeakMap,gy=new WeakMap;function qN(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(ki(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&t1.set(n,t)}).catch(()=>{}),gy.set(e,t),e}function WN(t){if(gg.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});gg.set(t,e)}let _g={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return gg.get(t);if(e==="objectStoreNames")return t.objectStoreNames||n1.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ki(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function GN(t){_g=t(_g)}function HN(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Hp(this),e,...n);return n1.set(r,e.sort?e.sort():[e]),ki(r)}:jN().includes(t)?function(...e){return t.apply(Hp(this),e),ki(t1.get(this))}:function(...e){return ki(t.apply(Hp(this),e))}}function KN(t){return typeof t=="function"?HN(t):(t instanceof IDBTransaction&&WN(t),BN(t,zN())?new Proxy(t,_g):t)}function ki(t){if(t instanceof IDBRequest)return qN(t);if(Gp.has(t))return Gp.get(t);const e=KN(t);return e!==t&&(Gp.set(t,e),gy.set(e,t)),e}const Hp=t=>gy.get(t);function QN(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=ki(o);return r&&o.addEventListener("upgradeneeded",l=>{r(ki(o.result),l.oldVersion,l.newVersion,ki(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const YN=["get","getKey","getAll","getAllKeys","count"],XN=["put","add","delete","clear"],Kp=new Map;function ZI(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Kp.get(e))return Kp.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=XN.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||YN.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Kp.set(e,s),s}GN(t=>({...t,get:(e,n,r)=>ZI(e,n)||t.get(e,n,r),has:(e,n)=>!!ZI(e,n)||t.has(e,n)}));/**
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
 */class JN{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(ZN(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function ZN(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ph="@firebase/app",yg="0.10.0";/**
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
 */const xs=new cf("@firebase/app"),eO="@firebase/app-compat",tO="@firebase/analytics-compat",nO="@firebase/analytics",rO="@firebase/app-check-compat",iO="@firebase/app-check",sO="@firebase/auth",oO="@firebase/auth-compat",aO="@firebase/database",lO="@firebase/database-compat",uO="@firebase/functions",cO="@firebase/functions-compat",dO="@firebase/installations",hO="@firebase/installations-compat",fO="@firebase/messaging",pO="@firebase/messaging-compat",mO="@firebase/performance",gO="@firebase/performance-compat",_O="@firebase/remote-config",yO="@firebase/remote-config-compat",vO="@firebase/storage",wO="@firebase/storage-compat",IO="@firebase/firestore",EO="@firebase/firestore-compat",TO="firebase",SO="10.10.0";/**
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
 */const Ni="[DEFAULT]",RO={[ph]:"fire-core",[eO]:"fire-core-compat",[nO]:"fire-analytics",[tO]:"fire-analytics-compat",[iO]:"fire-app-check",[rO]:"fire-app-check-compat",[sO]:"fire-auth",[oO]:"fire-auth-compat",[aO]:"fire-rtdb",[lO]:"fire-rtdb-compat",[uO]:"fire-fn",[cO]:"fire-fn-compat",[dO]:"fire-iid",[hO]:"fire-iid-compat",[fO]:"fire-fcm",[pO]:"fire-fcm-compat",[mO]:"fire-perf",[gO]:"fire-perf-compat",[_O]:"fire-rc",[yO]:"fire-rc-compat",[vO]:"fire-gcs",[wO]:"fire-gcs-compat",[IO]:"fire-fst",[EO]:"fire-fst-compat","fire-js":"fire-js",[TO]:"fire-js-all"};/**
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
 */const Oi=new Map,sa=new Map,oa=new Map;function gu(t,e){try{t.container.addComponent(e)}catch(n){xs.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function r1(t,e){t.container.addOrOverwriteComponent(e)}function zr(t){const e=t.name;if(oa.has(e))return xs.debug(`There were multiple attempts to register component ${e}.`),!1;oa.set(e,t);for(const n of Oi.values())gu(n,t);for(const n of sa.values())gu(n,t);return!0}function i1(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function AO(t,e,n=Ni){i1(t,e).clearInstance(n)}function s1(t){return t.options!==void 0}function Ue(t){return t.settings!==void 0}function PO(){oa.clear()}/**
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
 */const CO={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}'",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["server-app-deleted"]:"Firebase Server App has been deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.",["finalization-registry-not-supported"]:"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.",["invalid-server-app-environment"]:"FirebaseServerApp is not for use in browser environments."},kn=new Gs("app","Firebase",CO);/**
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
 */class o1{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Dn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw kn.create("app-deleted",{appName:this._name})}}/**
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
 */class kO extends o1{constructor(e,n,r,i){const s=n.automaticDataCollectionEnabled!==void 0?n.automaticDataCollectionEnabled:!1,o={name:r,automaticDataCollectionEnabled:s};if(e.apiKey!==void 0)super(e,o,i);else{const a=e;super(a.options,o,i)}this._serverConfig=Object.assign({automaticDataCollectionEnabled:s},n),this._finalizationRegistry=new FinalizationRegistry(()=>{this.automaticCleanup()}),this._refCount=0,this.incRefCount(this._serverConfig.releaseOnDeref),this._serverConfig.releaseOnDeref=void 0,n.releaseOnDeref=void 0,fn(ph,yg,"serverapp")}get refCount(){return this._refCount}incRefCount(e){this.isDeleted||(this._refCount++,e!==void 0&&this._finalizationRegistry.register(e,this))}decRefCount(){return this.isDeleted?0:--this._refCount}automaticCleanup(){yy(this)}get settings(){return this.checkDestroyed(),this._serverConfig}checkDestroyed(){if(this.isDeleted)throw kn.create("server-app-deleted")}}/**
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
 */const Hr=SO;function _y(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Ni,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw kn.create("bad-app-name",{appName:String(i)});if(n||(n=GR()),!n)throw kn.create("no-options");const s=Oi.get(i);if(s){if(mu(n,s.options)&&mu(r,s.config))return s;throw kn.create("duplicate-app",{appName:i})}const o=new ZR(i);for(const l of oa.values())o.addComponent(l);const a=new o1(n,r,o);return Oi.set(i,a),a}function bO(t,e){if(KR())throw kn.create("invalid-server-app-environment");e.automaticDataCollectionEnabled===void 0&&(e.automaticDataCollectionEnabled=!1);let n;s1(t)?n=t.options:n=t;const r=Object.assign(Object.assign({},e),n);r.releaseOnDeref!==void 0&&delete r.releaseOnDeref;const i=u=>[...u].reduce((c,d)=>Math.imul(31,c)+d.charCodeAt(0)|0,0);if(e.releaseOnDeref!==void 0&&typeof FinalizationRegistry=="undefined")throw kn.create("finalization-registry-not-supported",{});const s=""+i(JSON.stringify(r)),o=sa.get(s);if(o)return o.incRefCount(e.releaseOnDeref),o;const a=new ZR(s);for(const u of oa.values())a.addComponent(u);const l=new kO(n,e,s,a);return sa.set(s,l),l}function xO(t=Ni){const e=Oi.get(t);if(!e&&t===Ni&&GR())return _y();if(!e)throw kn.create("no-app",{appName:t});return e}function DO(){return Array.from(Oi.values())}async function yy(t){let e=!1;const n=t.name;Oi.has(n)?(e=!0,Oi.delete(n)):sa.has(n)&&t.decRefCount()<=0&&(sa.delete(n),e=!0),e&&(await Promise.all(t.container.getProviders().map(r=>r.delete())),t.isDeleted=!0)}function fn(t,e,n){var r;let i=(r=RO[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),xs.warn(a.join(" "));return}zr(new Dn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}function a1(t,e){if(t!==null&&typeof t!="function")throw kn.create("invalid-log-argument");$N(t,e)}function l1(t){UN(t)}/**
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
 */const NO="firebase-heartbeat-database",OO=1,_u="firebase-heartbeat-store";let Qp=null;function u1(){return Qp||(Qp=QN(NO,OO,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(_u)}catch(n){console.warn(n)}}}}).catch(t=>{throw kn.create("idb-open",{originalErrorMessage:t.message})})),Qp}async function VO(t){try{const n=(await u1()).transaction(_u),r=await n.objectStore(_u).get(c1(t));return await n.done,r}catch(e){if(e instanceof kt)xs.warn(e.message);else{const n=kn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});xs.warn(n.message)}}}async function eE(t,e){try{const r=(await u1()).transaction(_u,"readwrite");await r.objectStore(_u).put(e,c1(t)),await r.done}catch(n){if(n instanceof kt)xs.warn(n.message);else{const r=kn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});xs.warn(r.message)}}}function c1(t){return`${t.name}!${t.options.appId}`}/**
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
 */const LO=1024,MO=30*24*60*60*1e3;class FO{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new $O(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=tE();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=MO}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=tE(),{heartbeatsToSend:r,unsentEntries:i}=UO(this._heartbeatsCache.heartbeats),s=hh(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function tE(){return new Date().toISOString().substring(0,10)}function UO(t,e=LO){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),nE(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),nE(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class $O{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return pu()?AN().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await VO(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return eE(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return eE(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function nE(t){return hh(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function BO(t){zr(new Dn("platform-logger",e=>new JN(e),"PRIVATE")),zr(new Dn("heartbeat",e=>new FO(e),"PRIVATE")),fn(ph,yg,t),fn(ph,yg,"esm2017"),fn("fire-js","")}BO("");var zO=Object.freeze(Object.defineProperty({__proto__:null,SDK_VERSION:Hr,_DEFAULT_ENTRY_NAME:Ni,_addComponent:gu,_addOrOverwriteComponent:r1,_apps:Oi,_clearComponents:PO,_components:oa,_getProvider:i1,_isFirebaseApp:s1,_isFirebaseServerApp:Ue,_registerComponent:zr,_removeServiceInstance:AO,_serverApps:sa,deleteApp:yy,getApp:xO,getApps:DO,initializeApp:_y,initializeServerApp:bO,onLog:a1,registerVersion:fn,setLogLevel:l1,FirebaseError:kt},Symbol.toStringTag,{value:"Module"}));/**
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
 */class jO{constructor(e,n){this._delegate=e,this.firebase=n,gu(e,new Dn("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),yy(this._delegate)))}_getService(e,n=Ni){var r;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(e);return!i.isInitialized()&&((r=i.getComponent())===null||r===void 0?void 0:r.instantiationMode)==="EXPLICIT"&&i.initialize(),i.getImmediate({identifier:n})}_removeServiceInstance(e,n=Ni){this._delegate.container.getProvider(e).clearInstance(n)}_addComponent(e){gu(this._delegate,e)}_addOrOverwriteComponent(e){r1(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
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
 */const qO={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance."},rE=new Gs("app-compat","Firebase",qO);/**
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
 */function WO(t){const e={},n={__esModule:!0,initializeApp:s,app:i,registerVersion:fn,setLogLevel:l1,onLog:a1,apps:null,SDK_VERSION:Hr,INTERNAL:{registerComponent:a,removeApp:r,useAsService:l,modularAPIs:zO}};n.default=n,Object.defineProperty(n,"apps",{get:o});function r(u){delete e[u]}function i(u){if(u=u||Ni,!QI(e,u))throw rE.create("no-app",{appName:u});return e[u]}i.App=t;function s(u,c={}){const d=_y(u,c);if(QI(e,d.name))return e[d.name];const h=new t(d,n);return e[d.name]=h,h}function o(){return Object.keys(e).map(u=>e[u])}function a(u){const c=u.name,d=c.replace("-compat","");if(zr(u)&&u.type==="PUBLIC"){const h=(f=i())=>{if(typeof f[d]!="function")throw rE.create("invalid-app-argument",{appName:c});return f[d]()};u.serviceProps!==void 0&&fh(h,u.serviceProps),n[d]=h,t.prototype[d]=function(...f){return this._getService.bind(this,c).apply(this,u.multipleInstances?f:[])}}return u.type==="PUBLIC"?n[d]:null}function l(u,c){return c==="serverAuth"?null:c}return n}/**
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
 */function d1(){const t=WO(jO);t.INTERNAL=Object.assign(Object.assign({},t.INTERNAL),{createFirebaseNamespace:d1,extendNamespace:e,createSubscribe:JR,ErrorFactory:Gs,deepExtend:fh});function e(n){fh(t,n)}return t}const GO=d1();/**
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
 */const iE=new cf("@firebase/app-compat"),HO="@firebase/app-compat",KO="0.2.30";/**
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
 */function QO(t){fn(HO,KO,t)}/**
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
 */if(KR()&&self.firebase!==void 0){iE.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);const t=self.firebase.SDK_VERSION;t&&t.indexOf("LITE")>=0&&iE.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}const pr=GO;QO();var YO="firebase",XO="10.10.0";/**
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
 */pr.registerVersion(YO,XO,"app-compat");function vy(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}const sl={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},ao={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
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
 */function JO(){return{["admin-restricted-operation"]:"This operation is restricted to administrators only.",["argument-error"]:"",["app-not-authorized"]:"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",["app-not-installed"]:"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",["captcha-check-failed"]:"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",["code-expired"]:"The SMS code has expired. Please re-send the verification code to try again.",["cordova-not-ready"]:"Cordova framework is not ready.",["cors-unsupported"]:"This browser is not supported.",["credential-already-in-use"]:"This credential is already associated with a different user account.",["custom-token-mismatch"]:"The custom token corresponds to a different audience.",["requires-recent-login"]:"This operation is sensitive and requires recent authentication. Log in again before retrying this request.",["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",["dynamic-link-not-activated"]:"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",["email-change-needs-verification"]:"Multi-factor users must always have a verified email.",["email-already-in-use"]:"The email address is already in use by another account.",["emulator-config-failed"]:'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',["expired-action-code"]:"The action code has expired.",["cancelled-popup-request"]:"This operation has been cancelled due to another conflicting popup being opened.",["internal-error"]:"An internal AuthError has occurred.",["invalid-app-credential"]:"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",["invalid-app-id"]:"The mobile app identifier is not registed for the current project.",["invalid-user-token"]:"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",["invalid-auth-event"]:"An internal AuthError has occurred.",["invalid-verification-code"]:"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.",["invalid-continue-uri"]:"The continue URL provided in the request is invalid.",["invalid-cordova-configuration"]:"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",["invalid-custom-token"]:"The custom token format is incorrect. Please check the documentation.",["invalid-dynamic-link-domain"]:"The provided dynamic link domain is not configured or authorized for the current project.",["invalid-email"]:"The email address is badly formatted.",["invalid-emulator-scheme"]:"Emulator URL must start with a valid scheme (http:// or https://).",["invalid-api-key"]:"Your API key is invalid, please check you have copied it correctly.",["invalid-cert-hash"]:"The SHA-1 certificate hash provided is invalid.",["invalid-credential"]:"The supplied auth credential is incorrect, malformed or has expired.",["invalid-message-payload"]:"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-multi-factor-session"]:"The request does not contain a valid proof of first factor successful sign-in.",["invalid-oauth-provider"]:"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",["invalid-oauth-client-id"]:"The OAuth client ID provided is either invalid or does not match the specified API key.",["unauthorized-domain"]:"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",["invalid-action-code"]:"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",["wrong-password"]:"The password is invalid or the user does not have a password.",["invalid-persistence-type"]:"The specified persistence type is invalid. It can only be local, session or none.",["invalid-phone-number"]:"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",["invalid-provider-id"]:"The specified provider ID is invalid.",["invalid-recipient-email"]:"The email corresponding to this action failed to send as the provided recipient email address is invalid.",["invalid-sender"]:"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-verification-id"]:"The verification ID used to create the phone auth credential is invalid.",["invalid-tenant-id"]:"The Auth instance's tenant ID is invalid.",["login-blocked"]:"Login blocked by user-provided method: {$originalMessage}",["missing-android-pkg-name"]:"An Android Package Name must be provided if the Android App is required to be installed.",["auth-domain-config-required"]:"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",["missing-app-credential"]:"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.",["missing-verification-code"]:"The phone auth credential was created with an empty SMS verification code.",["missing-continue-uri"]:"A continue URL must be provided in the request.",["missing-iframe-start"]:"An internal AuthError has occurred.",["missing-ios-bundle-id"]:"An iOS Bundle ID must be provided if an App Store ID is provided.",["missing-or-invalid-nonce"]:"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.",["missing-password"]:"A non-empty password must be provided",["missing-multi-factor-info"]:"No second factor identifier is provided.",["missing-multi-factor-session"]:"The request is missing proof of first factor successful sign-in.",["missing-phone-number"]:"To send verification codes, provide a phone number for the recipient.",["missing-verification-id"]:"The phone auth credential was created with an empty verification ID.",["app-deleted"]:"This instance of FirebaseApp has been deleted.",["multi-factor-info-not-found"]:"The user does not have a second factor matching the identifier provided.",["multi-factor-auth-required"]:"Proof of ownership of a second factor is required to complete sign-in.",["account-exists-with-different-credential"]:"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",["network-request-failed"]:"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.",["no-auth-event"]:"An internal AuthError has occurred.",["no-such-provider"]:"User was not linked to an account with the given provider.",["null-user"]:"A null user object was provided as the argument for an operation which requires a non-null user object.",["operation-not-allowed"]:"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",["operation-not-supported-in-this-environment"]:'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',["popup-blocked"]:"Unable to establish a connection with the popup. It may have been blocked by the browser.",["popup-closed-by-user"]:"The popup has been closed by the user before finalizing the operation.",["provider-already-linked"]:"User can only be linked to one identity for the given provider.",["quota-exceeded"]:"The project's quota for this operation has been exceeded.",["redirect-cancelled-by-user"]:"The redirect operation has been cancelled by the user before finalizing.",["redirect-operation-pending"]:"A redirect sign-in operation is already pending.",["rejected-credential"]:"The request contains malformed or mismatching credentials.",["second-factor-already-in-use"]:"The second factor is already enrolled on this account.",["maximum-second-factor-count-exceeded"]:"The maximum allowed number of second factors on a user has been exceeded.",["tenant-id-mismatch"]:"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.",["user-token-expired"]:"The user's credential is no longer valid. The user must sign in again.",["too-many-requests"]:"We have blocked all requests from this device due to unusual activity. Try again later.",["unauthorized-continue-uri"]:"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.",["unsupported-first-factor"]:"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.",["unsupported-persistence-type"]:"The current environment does not support the specified persistence type.",["unsupported-tenant-operation"]:"This operation is not supported in a multi-tenant context.",["unverified-email"]:"The operation requires a verified email.",["user-cancelled"]:"The user did not grant your application the permissions it requested.",["user-not-found"]:"There is no user record corresponding to this identifier. The user may have been deleted.",["user-disabled"]:"The user account has been disabled by an administrator.",["user-mismatch"]:"The supplied credentials do not correspond to the previously signed in user.",["user-signed-out"]:"",["weak-password"]:"The password must be 6 characters long or more.",["web-storage-unsupported"]:"This browser is not supported or 3rd party cookies and data may be disabled.",["already-initialized"]:"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.",["missing-recaptcha-token"]:"The reCAPTCHA token is missing when sending request to the backend.",["invalid-recaptcha-token"]:"The reCAPTCHA token is invalid when sending request to the backend.",["invalid-recaptcha-action"]:"The reCAPTCHA action is invalid when sending request to the backend.",["recaptcha-not-enabled"]:"reCAPTCHA Enterprise integration is not enabled for this project.",["missing-client-type"]:"The reCAPTCHA client type is missing when sending request to the backend.",["missing-recaptcha-version"]:"The reCAPTCHA version is missing when sending request to the backend.",["invalid-req-type"]:"Invalid request parameters.",["invalid-recaptcha-version"]:"The reCAPTCHA version is invalid when sending request to the backend.",["unsupported-password-policy-schema-version"]:"The password policy received from the backend uses a schema version that is not supported by this version of the Firebase SDK.",["password-does-not-meet-requirements"]:"The password does not meet the requirements."}}function h1(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const ZO=JO,eV=h1,f1=new Gs("auth","Firebase",h1());/**
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
 */const mh=new cf("@firebase/auth");function tV(t,...e){mh.logLevel<=ie.WARN&&mh.warn(`Auth (${Hr}): ${t}`,...e)}function kd(t,...e){mh.logLevel<=ie.ERROR&&mh.error(`Auth (${Hr}): ${t}`,...e)}/**
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
 */function Et(t,...e){throw Iy(t,...e)}function tt(t,...e){return Iy(t,...e)}function wy(t,e,n){const r=Object.assign(Object.assign({},eV()),{[e]:n});return new Gs("auth","Firebase",r).create(e,{appName:t.name})}function lt(t){return wy(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Pa(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Et(t,"argument-error"),wy(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Iy(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return f1.create(t,...e)}function N(t,e,...n){if(!t)throw Iy(e,...n)}function or(t){const e="INTERNAL ASSERTION FAILED: "+t;throw kd(e),new Error(e)}function qn(t,e){t||or(e)}/**
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
 */function yu(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Ey(){return sE()==="http:"||sE()==="https:"}function sE(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function nV(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Ey()||QR()||"connection"in navigator)?navigator.onLine:!0}function rV(){if(typeof navigator=="undefined")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class nc{constructor(e,n){this.shortDelay=e,this.longDelay=n,qn(n>e,"Short delay should be less than long delay!"),this.isMobile=RN()||py()}get(){return nV()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Ty(t,e){qn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class p1{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;if(typeof globalThis!="undefined"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch!="undefined")return fetch;or("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;if(typeof globalThis!="undefined"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers!="undefined")return Headers;or("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;if(typeof globalThis!="undefined"&&globalThis.Response)return globalThis.Response;if(typeof Response!="undefined")return Response;or("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const iV={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const sV=new nc(3e4,6e4);function je(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function qe(t,e,n,r,i={}){return m1(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Aa(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),p1.fetch()(g1(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function m1(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},iV),e);try{const i=new aV(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw El(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw El(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw El(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw El(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw wy(t,c,u);Et(t,c)}}catch(i){if(i instanceof kt)throw i;Et(t,"network-request-failed",{message:String(i)})}}async function Kr(t,e,n,r,i={}){const s=await qe(t,e,n,r,i);return"mfaPendingCredential"in s&&Et(t,"multi-factor-auth-required",{_serverResponse:s}),s}function g1(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Ty(t.config,i):`${t.config.apiScheme}://${i}`}function oV(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class aV{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(tt(this.auth,"network-request-failed")),sV.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function El(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=tt(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */function oE(t){return t!==void 0&&t.getResponse!==void 0}function aE(t){return t!==void 0&&t.enterprise!==void 0}class lV{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return oV(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}/**
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
 */async function uV(t){return(await qe(t,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function cV(t,e){return qe(t,"GET","/v2/recaptchaConfig",je(t,e))}/**
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
 */async function dV(t,e){return qe(t,"POST","/v1/accounts:delete",e)}async function hV(t,e){return qe(t,"POST","/v1/accounts:update",e)}async function _1(t,e){return qe(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ml(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function fV(t,e=!1){const n=z(t),r=await n.getIdToken(e),i=df(r);N(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Ml(Yp(i.auth_time)),issuedAtTime:Ml(Yp(i.iat)),expirationTime:Ml(Yp(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Yp(t){return Number(t)*1e3}function df(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return kd("JWT malformed, contained fewer than 3 sections"),null;try{const i=WR(n);return i?JSON.parse(i):(kd("Failed to decode base64 JWT payload"),null)}catch(i){return kd("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function lE(t){const e=df(t);return N(e,"internal-error"),N(typeof e.exp!="undefined","internal-error"),N(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function jr(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof kt&&pV(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function pV({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class mV{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class vg{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ml(this.lastLoginAt),this.creationTime=Ml(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function vu(t){var e;const n=t.auth,r=await t.getIdToken(),i=await jr(t,_1(n,{idToken:r}));N(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?y1(s.providerUserInfo):[],a=_V(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new vg(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,d)}async function gV(t){const e=z(t);await vu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function _V(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function y1(t){return t.map(e=>{var{providerId:n}=e,r=vy(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function yV(t,e){const n=await m1(t,{},async()=>{const r=Aa({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=g1(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",p1.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function vV(t,e){return qe(t,"POST","/v2/accounts:revokeToken",je(t,e))}/**
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
 */class Bo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){N(e.idToken,"internal-error"),N(typeof e.idToken!="undefined","internal-error"),N(typeof e.refreshToken!="undefined","internal-error");const n="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):lE(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){N(e.length!==0,"internal-error");const n=lE(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(N(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await yV(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Bo;return r&&(N(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(N(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(N(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Bo,this.toJSON())}_performRefresh(){return or("not implemented")}}/**
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
 */function si(t,e){N(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class br{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=vy(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new mV(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new vg(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await jr(this,this.stsTokenManager.getToken(this.auth,e));return N(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return fV(this,e)}reload(){return gV(this)}_assign(e){this!==e&&(N(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new br(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){N(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await vu(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ue(this.auth.app))return Promise.reject(lt(this.auth));const e=await this.getIdToken();return await jr(this,dV(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(i=n.email)!==null&&i!==void 0?i:void 0,f=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,v=(o=n.photoURL)!==null&&o!==void 0?o:void 0,y=(a=n.tenantId)!==null&&a!==void 0?a:void 0,E=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,g=(u=n.createdAt)!==null&&u!==void 0?u:void 0,p=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:m,emailVerified:I,isAnonymous:A,providerData:C,stsTokenManager:_}=n;N(m&&_,e,"internal-error");const w=Bo.fromJSON(this.name,_);N(typeof m=="string",e,"internal-error"),si(d,e.name),si(h,e.name),N(typeof I=="boolean",e,"internal-error"),N(typeof A=="boolean",e,"internal-error"),si(f,e.name),si(v,e.name),si(y,e.name),si(E,e.name),si(g,e.name),si(p,e.name);const R=new br({uid:m,auth:e,email:h,emailVerified:I,displayName:d,isAnonymous:A,photoURL:v,phoneNumber:f,tenantId:y,stsTokenManager:w,createdAt:g,lastLoginAt:p});return C&&Array.isArray(C)&&(R.providerData=C.map(k=>Object.assign({},k))),E&&(R._redirectEventId=E),R}static async _fromIdTokenResponse(e,n,r=!1){const i=new Bo;i.updateFromServerResponse(n);const s=new br({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await vu(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];N(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?y1(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new Bo;a.updateFromIdToken(r);const l=new br({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new vg(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(l,u),l}}/**
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
 */const uE=new Map;function dn(t){qn(t instanceof Function,"Expected a class definition");let e=uE.get(t);return e?(qn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,uE.set(t,e),e)}/**
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
 */class v1{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}v1.type="NONE";const aa=v1;/**
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
 */function Es(t,e,n){return`firebase:${t}:${e}:${n}`}class zo{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Es(this.userKey,i.apiKey,s),this.fullPersistenceKey=Es("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?br._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new zo(dn(aa),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||dn(aa);const o=Es(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const d=br._fromJSON(e,c);u!==s&&(a=d),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new zo(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new zo(s,e,r))}}/**
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
 */function cE(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(E1(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(w1(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(T1(e))return"Blackberry";if(S1(e))return"Webos";if(Sy(e))return"Safari";if((e.includes("chrome/")||I1(e))&&!e.includes("edge/"))return"Chrome";if(rc(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function w1(t=De()){return/firefox\//i.test(t)}function Sy(t=De()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function I1(t=De()){return/crios\//i.test(t)}function E1(t=De()){return/iemobile/i.test(t)}function rc(t=De()){return/android/i.test(t)}function T1(t=De()){return/blackberry/i.test(t)}function S1(t=De()){return/webos/i.test(t)}function Ca(t=De()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function wV(t=De()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(t)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(t)}function IV(t=De()){var e;return Ca(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function EV(){return YR()&&document.documentMode===10}function R1(t=De()){return Ca(t)||rc(t)||S1(t)||T1(t)||/windows phone/i.test(t)||E1(t)}function TV(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function A1(t,e=[]){let n;switch(t){case"Browser":n=cE(De());break;case"Worker":n=`${cE(De())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Hr}/${r}`}/**
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
 */class SV{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function RV(t,e={}){return qe(t,"GET","/v2/passwordPolicy",je(t,e))}/**
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
 */const AV=6;class PV{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:AV,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class CV{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new dE(this),this.idTokenSubscription=new dE(this),this.beforeStateQueue=new SV(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=f1,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=dn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await zo.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await _1(this,{idToken:e}),r=await br._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Ue(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l==null?void 0:l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return N(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await vu(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=rV()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ue(this.app))return Promise.reject(lt(this));const n=e?z(e):null;return n&&N(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&N(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ue(this.app)?Promise.reject(lt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ue(this.app)?Promise.reject(lt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(dn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await RV(this),n=new PV(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Gs("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await vV(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&dn(e)||this._popupRedirectResolver;N(n,this,"argument-error"),this.redirectPersistenceManager=await zo.create(this,[dn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(N(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return N(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=A1(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&tV(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function $e(t){return z(t)}class dE{constructor(e){this.auth=e,this.observer=null,this.addObserver=JR(n=>this.observer=n)}get next(){return N(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let ic={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function kV(t){ic=t}function Ry(t){return ic.loadJS(t)}function bV(){return ic.recaptchaV2Script}function xV(){return ic.recaptchaEnterpriseScript}function DV(){return ic.gapiScript}function P1(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const NV="recaptcha-enterprise",OV="NO_RECAPTCHA";class VV{constructor(e){this.type=NV,this.auth=$e(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{cV(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new lV(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;aE(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(OV)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&aE(window.grecaptcha))i(a,s,o);else{if(typeof window=="undefined"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=xV();l.length!==0&&(l+=a),Ry(l).then(()=>{i(a,s,o)}).catch(u=>{o(u)})}}).catch(a=>{o(a)})})}}async function hE(t,e,n,r=!1){const i=new VV(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function wu(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await hE(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await hE(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}function LV(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(dn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function MV(t,e,n){const r=$e(t);N(r._canInitEmulator,r,"emulator-config-failed"),N(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=C1(e),{host:o,port:a}=FV(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||UV()}function C1(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function FV(t){const e=C1(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:fE(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:fE(o)}}}function fE(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function UV(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console!="undefined"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window!="undefined"&&typeof document!="undefined"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class ka{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return or("not implemented")}_getIdTokenResponse(e){return or("not implemented")}_linkToIdToken(e,n){return or("not implemented")}_getReauthenticationResolver(e){return or("not implemented")}}/**
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
 */async function k1(t,e){return qe(t,"POST","/v1/accounts:resetPassword",je(t,e))}async function $V(t,e){return qe(t,"POST","/v1/accounts:update",e)}async function BV(t,e){return qe(t,"POST","/v1/accounts:signUp",e)}async function zV(t,e){return qe(t,"POST","/v1/accounts:update",je(t,e))}/**
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
 */async function jV(t,e){return Kr(t,"POST","/v1/accounts:signInWithPassword",je(t,e))}async function hf(t,e){return qe(t,"POST","/v1/accounts:sendOobCode",je(t,e))}async function qV(t,e){return hf(t,e)}async function WV(t,e){return hf(t,e)}async function GV(t,e){return hf(t,e)}async function HV(t,e){return hf(t,e)}/**
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
 */async function KV(t,e){return Kr(t,"POST","/v1/accounts:signInWithEmailLink",je(t,e))}async function QV(t,e){return Kr(t,"POST","/v1/accounts:signInWithEmailLink",je(t,e))}/**
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
 */class Iu extends ka{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Iu(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Iu(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return wu(e,n,"signInWithPassword",jV);case"emailLink":return KV(e,{email:this._email,oobCode:this._password});default:Et(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return wu(e,r,"signUpPassword",BV);case"emailLink":return QV(e,{idToken:n,email:this._email,oobCode:this._password});default:Et(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Lr(t,e){return Kr(t,"POST","/v1/accounts:signInWithIdp",je(t,e))}/**
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
 */const YV="http://localhost";class yr extends ka{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new yr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Et("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=vy(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new yr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Lr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Lr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Lr(e,n)}buildRequest(){const e={requestUri:YV,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Aa(n)}return e}}/**
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
 */async function XV(t,e){return qe(t,"POST","/v1/accounts:sendVerificationCode",je(t,e))}async function JV(t,e){return Kr(t,"POST","/v1/accounts:signInWithPhoneNumber",je(t,e))}async function ZV(t,e){const n=await Kr(t,"POST","/v1/accounts:signInWithPhoneNumber",je(t,e));if(n.temporaryProof)throw El(t,"account-exists-with-different-credential",n);return n}const e2={USER_NOT_FOUND:"user-not-found"};async function t2(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return Kr(t,"POST","/v1/accounts:signInWithPhoneNumber",je(t,n),e2)}/**
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
 */class Ts extends ka{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,n){return new Ts({verificationId:e,verificationCode:n})}static _fromTokenResponse(e,n){return new Ts({phoneNumber:e,temporaryProof:n})}_getIdTokenResponse(e){return JV(e,this._makeVerificationRequest())}_linkToIdToken(e,n){return ZV(e,Object.assign({idToken:n},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return t2(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:n,verificationId:r,verificationCode:i}=this.params;return e&&n?{temporaryProof:e,phoneNumber:n}:{sessionInfo:r,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s}=e;return!r&&!n&&!i&&!s?null:new Ts({verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s})}}/**
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
 */function n2(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function r2(t){const e=No(Il(t)).link,n=e?No(Il(e)).deep_link_id:null,r=No(Il(t)).deep_link_id;return(r?No(Il(r)).link:null)||r||n||e||t}class ff{constructor(e){var n,r,i,s,o,a;const l=No(Il(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,d=n2((i=l.mode)!==null&&i!==void 0?i:null);N(u&&c&&d,"argument-error"),this.apiKey=u,this.operation=d,this.code=c,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=r2(e);try{return new ff(n)}catch{return null}}}/**
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
 */class Hi{constructor(){this.providerId=Hi.PROVIDER_ID}static credential(e,n){return Iu._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=ff.parseLink(n);return N(r,"argument-error"),Iu._fromEmailAndCode(e,r.code,r.tenantId)}}Hi.PROVIDER_ID="password";Hi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Hi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Qr{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ba extends Qr{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class jo extends ba{static credentialFromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;return N("providerId"in n&&"signInMethod"in n,"argument-error"),yr._fromParams(n)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return N(e.idToken||e.accessToken,"argument-error"),yr._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return jo.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return jo.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r,oauthTokenSecret:i,pendingToken:s,nonce:o,providerId:a}=e;if(!r&&!i&&!n&&!s||!a)return null;try{return new jo(a)._credential({idToken:n,accessToken:r,nonce:o,pendingToken:s})}catch{return null}}}/**
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
 */class er extends ba{constructor(){super("facebook.com")}static credential(e){return yr._fromParams({providerId:er.PROVIDER_ID,signInMethod:er.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return er.credentialFromTaggedObject(e)}static credentialFromError(e){return er.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return er.credential(e.oauthAccessToken)}catch{return null}}}er.FACEBOOK_SIGN_IN_METHOD="facebook.com";er.PROVIDER_ID="facebook.com";/**
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
 */class tr extends ba{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return yr._fromParams({providerId:tr.PROVIDER_ID,signInMethod:tr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return tr.credentialFromTaggedObject(e)}static credentialFromError(e){return tr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return tr.credential(n,r)}catch{return null}}}tr.GOOGLE_SIGN_IN_METHOD="google.com";tr.PROVIDER_ID="google.com";/**
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
 */class nr extends ba{constructor(){super("github.com")}static credential(e){return yr._fromParams({providerId:nr.PROVIDER_ID,signInMethod:nr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return nr.credentialFromTaggedObject(e)}static credentialFromError(e){return nr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return nr.credential(e.oauthAccessToken)}catch{return null}}}nr.GITHUB_SIGN_IN_METHOD="github.com";nr.PROVIDER_ID="github.com";/**
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
 */const i2="http://localhost";class la extends ka{constructor(e,n){super(e,e),this.pendingToken=n}_getIdTokenResponse(e){const n=this.buildRequest();return Lr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Lr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Lr(e,n)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,pendingToken:s}=n;return!r||!i||!s||r!==i?null:new la(r,s)}static _create(e,n){return new la(e,n)}buildRequest(){return{requestUri:i2,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
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
 */const s2="saml.";class gh extends Qr{constructor(e){N(e.startsWith(s2),"argument-error"),super(e)}static credentialFromResult(e){return gh.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return gh.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const n=la.fromJSON(e);return N(n,"argument-error"),n}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:n,providerId:r}=e;if(!n||!r)return null;try{return la._create(r,n)}catch{return null}}}/**
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
 */class rr extends ba{constructor(){super("twitter.com")}static credential(e,n){return yr._fromParams({providerId:rr.PROVIDER_ID,signInMethod:rr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return rr.credentialFromTaggedObject(e)}static credentialFromError(e){return rr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return rr.credential(n,r)}catch{return null}}}rr.TWITTER_SIGN_IN_METHOD="twitter.com";rr.PROVIDER_ID="twitter.com";/**
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
 */async function b1(t,e){return Kr(t,"POST","/v1/accounts:signUp",je(t,e))}/**
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
 */class Nn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await br._fromIdTokenResponse(e,r,i),o=pE(r);return new Nn({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=pE(r);return new Nn({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function pE(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */async function o2(t){var e;if(Ue(t.app))return Promise.reject(lt(t));const n=$e(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new Nn({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await b1(n,{returnSecureToken:!0}),i=await Nn._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}/**
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
 */class _h extends kt{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,_h.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new _h(e,n,r,i)}}function x1(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?_h._fromErrorAndOperation(t,s,e,r):s})}/**
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
 */function D1(t){return new Set(t.map(({providerId:e})=>e).filter(e=>!!e))}/**
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
 */async function a2(t,e){const n=z(t);await pf(!0,n,e);const{providerUserInfo:r}=await hV(n.auth,{idToken:await n.getIdToken(),deleteProvider:[e]}),i=D1(r||[]);return n.providerData=n.providerData.filter(s=>i.has(s.providerId)),i.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function Ay(t,e,n=!1){const r=await jr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Nn._forOperation(t,"link",r)}async function pf(t,e,n){await vu(e);const r=D1(e.providerData),i=t===!1?"provider-already-linked":"no-such-provider";N(r.has(n)===t,e.auth,i)}/**
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
 */async function N1(t,e,n=!1){const{auth:r}=t;if(Ue(r.app))return Promise.reject(lt(r));const i="reauthenticate";try{const s=await jr(t,x1(r,i,e,t),n);N(s.idToken,r,"internal-error");const o=df(s.idToken);N(o,r,"internal-error");const{sub:a}=o;return N(t.uid===a,r,"user-mismatch"),Nn._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Et(r,"user-mismatch"),s}}/**
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
 */async function O1(t,e,n=!1){if(Ue(t.app))return Promise.reject(lt(t));const r="signIn",i=await x1(t,r,e),s=await Nn._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function mf(t,e){return O1($e(t),e)}async function V1(t,e){const n=z(t);return await pf(!1,n,e.providerId),Ay(n,e)}async function L1(t,e){return N1(z(t),e)}/**
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
 */async function l2(t,e){return Kr(t,"POST","/v1/accounts:signInWithCustomToken",je(t,e))}/**
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
 */async function u2(t,e){if(Ue(t.app))return Promise.reject(lt(t));const n=$e(t),r=await l2(n,{token:e,returnSecureToken:!0}),i=await Nn._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(i.user),i}/**
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
 */class sc{constructor(e,n){this.factorId=e,this.uid=n.mfaEnrollmentId,this.enrollmentTime=new Date(n.enrolledAt).toUTCString(),this.displayName=n.displayName}static _fromServerResponse(e,n){return"phoneInfo"in n?Py._fromServerResponse(e,n):"totpInfo"in n?Cy._fromServerResponse(e,n):Et(e,"internal-error")}}class Py extends sc{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,n){return new Py(n)}}class Cy extends sc{constructor(e){super("totp",e)}static _fromServerResponse(e,n){return new Cy(n)}}/**
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
 */function gf(t,e,n){var r;N(((r=n.url)===null||r===void 0?void 0:r.length)>0,t,"invalid-continue-uri"),N(typeof n.dynamicLinkDomain=="undefined"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(N(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(N(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
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
 */async function ky(t){const e=$e(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function c2(t,e,n){const r=$e(t),i={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};n&&gf(r,i,n),await wu(r,i,"getOobCode",WV)}async function d2(t,e,n){await k1(z(t),{oobCode:e,newPassword:n}).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&ky(t),r})}async function h2(t,e){await zV(z(t),{oobCode:e})}async function M1(t,e){const n=z(t),r=await k1(n,{oobCode:e}),i=r.requestType;switch(N(i,n,"internal-error"),i){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":N(r.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":N(r.mfaInfo,n,"internal-error");default:N(r.email,n,"internal-error")}let s=null;return r.mfaInfo&&(s=sc._fromServerResponse($e(n),r.mfaInfo)),{data:{email:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.newEmail:r.email)||null,previousEmail:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.email:r.newEmail)||null,multiFactorInfo:s},operation:i}}async function f2(t,e){const{data:n}=await M1(z(t),e);return n.email}async function p2(t,e,n){if(Ue(t.app))return Promise.reject(lt(t));const r=$e(t),o=await wu(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",b1).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&ky(t),l}),a=await Nn._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function m2(t,e,n){return Ue(t.app)?Promise.reject(lt(t)):mf(z(t),Hi.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&ky(t),r})}/**
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
 */async function g2(t,e,n){const r=$e(t),i={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function s(o,a){N(a.handleCodeInApp,r,"argument-error"),a&&gf(r,o,a)}s(i,n),await wu(r,i,"getOobCode",GV)}function _2(t,e){const n=ff.parseLink(e);return(n==null?void 0:n.operation)==="EMAIL_SIGNIN"}async function y2(t,e,n){if(Ue(t.app))return Promise.reject(lt(t));const r=z(t),i=Hi.credentialWithLink(e,n||yu());return N(i._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),mf(r,i)}/**
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
 */async function v2(t,e){return qe(t,"POST","/v1/accounts:createAuthUri",je(t,e))}/**
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
 */async function w2(t,e){const n=Ey()?yu():"http://localhost",r={identifier:e,continueUri:n},{signinMethods:i}=await v2(z(t),r);return i||[]}async function I2(t,e){const n=z(t),r=await t.getIdToken(),i={requestType:"VERIFY_EMAIL",idToken:r};e&&gf(n.auth,i,e);const{email:s}=await qV(n.auth,i);s!==t.email&&await t.reload()}async function E2(t,e,n){const r=z(t),i=await t.getIdToken(),s={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:i,newEmail:e};n&&gf(r.auth,s,n);const{email:o}=await HV(r.auth,s);o!==t.email&&await t.reload()}/**
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
 */async function T2(t,e){return qe(t,"POST","/v1/accounts:update",e)}/**
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
 */async function S2(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=z(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await jr(r,T2(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function R2(t,e){const n=z(t);return Ue(n.auth.app)?Promise.reject(lt(n.auth)):F1(n,e,null)}function A2(t,e){return F1(z(t),null,e)}async function F1(t,e,n){const{auth:r}=t,s={idToken:await t.getIdToken(),returnSecureToken:!0};e&&(s.email=e),n&&(s.password=n);const o=await jr(t,$V(r,s));await t._updateTokensIfNecessary(o,!0)}/**
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
 */function P2(t){var e,n;if(!t)return null;const{providerId:r}=t,i=t.rawUserInfo?JSON.parse(t.rawUserInfo):{},s=t.isNewUser||t.kind==="identitytoolkit#SignupNewUserResponse";if(!r&&(t==null?void 0:t.idToken)){const o=(n=(e=df(t.idToken))===null||e===void 0?void 0:e.firebase)===null||n===void 0?void 0:n.sign_in_provider;if(o){const a=o!=="anonymous"&&o!=="custom"?o:null;return new qo(s,a)}}if(!r)return null;switch(r){case"facebook.com":return new C2(s,i);case"github.com":return new k2(s,i);case"google.com":return new b2(s,i);case"twitter.com":return new x2(s,i,t.screenName||null);case"custom":case"anonymous":return new qo(s,null);default:return new qo(s,r,i)}}class qo{constructor(e,n,r={}){this.isNewUser=e,this.providerId=n,this.profile=r}}class U1 extends qo{constructor(e,n,r,i){super(e,n,r),this.username=i}}class C2 extends qo{constructor(e,n){super(e,"facebook.com",n)}}class k2 extends U1{constructor(e,n){super(e,"github.com",n,typeof(n==null?void 0:n.login)=="string"?n==null?void 0:n.login:null)}}class b2 extends qo{constructor(e,n){super(e,"google.com",n)}}class x2 extends U1{constructor(e,n,r){super(e,"twitter.com",n,r)}}function D2(t){const{user:e,_tokenResponse:n}=t;return e.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:P2(n)}/**
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
 */class ps{constructor(e,n,r){this.type=e,this.credential=n,this.user=r}static _fromIdtoken(e,n){return new ps("enroll",e,n)}static _fromMfaPendingCredential(e){return new ps("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var n,r;if(e!=null&&e.multiFactorSession){if(!((n=e.multiFactorSession)===null||n===void 0)&&n.pendingCredential)return ps._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(!((r=e.multiFactorSession)===null||r===void 0)&&r.idToken)return ps._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
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
 */class by{constructor(e,n,r){this.session=e,this.hints=n,this.signInResolver=r}static _fromError(e,n){const r=$e(e),i=n.customData._serverResponse,s=(i.mfaInfo||[]).map(a=>sc._fromServerResponse(r,a));N(i.mfaPendingCredential,r,"internal-error");const o=ps._fromMfaPendingCredential(i.mfaPendingCredential);return new by(o,s,async a=>{const l=await a._process(r,o);delete i.mfaInfo,delete i.mfaPendingCredential;const u=Object.assign(Object.assign({},i),{idToken:l.idToken,refreshToken:l.refreshToken});switch(n.operationType){case"signIn":const c=await Nn._fromIdTokenResponse(r,n.operationType,u);return await r._updateCurrentUser(c.user),c;case"reauthenticate":return N(n.user,r,"internal-error"),Nn._forOperation(n.user,n.operationType,u);default:Et(r,"internal-error")}})}async resolveSignIn(e){const n=e;return this.signInResolver(n)}}function N2(t,e){var n;const r=z(t),i=e;return N(e.customData.operationType,r,"argument-error"),N((n=i.customData._serverResponse)===null||n===void 0?void 0:n.mfaPendingCredential,r,"argument-error"),by._fromError(r,i)}/**
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
 */function O2(t,e){return qe(t,"POST","/v2/accounts/mfaEnrollment:start",je(t,e))}function V2(t,e){return qe(t,"POST","/v2/accounts/mfaEnrollment:finalize",je(t,e))}function L2(t,e){return qe(t,"POST","/v2/accounts/mfaEnrollment:withdraw",je(t,e))}class xy{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(n=>{n.mfaInfo&&(this.enrolledFactors=n.mfaInfo.map(r=>sc._fromServerResponse(e.auth,r)))})}static _fromUser(e){return new xy(e)}async getSession(){return ps._fromIdtoken(await this.user.getIdToken(),this.user)}async enroll(e,n){const r=e,i=await this.getSession(),s=await jr(this.user,r._process(this.user.auth,i,n));return await this.user._updateTokensIfNecessary(s),this.user.reload()}async unenroll(e){const n=typeof e=="string"?e:e.uid,r=await this.user.getIdToken();try{const i=await jr(this.user,L2(this.user.auth,{idToken:r,mfaEnrollmentId:n}));this.enrolledFactors=this.enrolledFactors.filter(({uid:s})=>s!==n),await this.user._updateTokensIfNecessary(i),await this.user.reload()}catch(i){throw i}}}const Xp=new WeakMap;function M2(t){const e=z(t);return Xp.has(e)||Xp.set(e,xy._fromUser(e)),Xp.get(e)}const yh="__sak";/**
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
 */class $1{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(yh,"1"),this.storage.removeItem(yh),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function F2(){const t=De();return Sy(t)||Ca(t)}const U2=1e3,$2=10;class B1 extends $1{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=F2()&&TV(),this.fallbackToPolling=R1(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);EV()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,$2):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},U2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}B1.type="LOCAL";const Dy=B1;/**
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
 */class z1 extends $1{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}z1.type="SESSION";const Ds=z1;/**
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
 */function B2(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class _f{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new _f(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await B2(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}_f.receivers=[];/**
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
 */function oc(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class z2{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=oc("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(d){const h=d;if(h.data.eventId===u)switch(h.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(h.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Ye(){return window}function j2(t){Ye().location.href=t}/**
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
 */function Ny(){return typeof Ye().WorkerGlobalScope!="undefined"&&typeof Ye().importScripts=="function"}async function q2(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function W2(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function G2(){return Ny()?self:null}/**
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
 */const j1="firebaseLocalStorageDb",H2=1,vh="firebaseLocalStorage",q1="fbase_key";class ac{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function yf(t,e){return t.transaction([vh],e?"readwrite":"readonly").objectStore(vh)}function K2(){const t=indexedDB.deleteDatabase(j1);return new ac(t).toPromise()}function wg(){const t=indexedDB.open(j1,H2);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(vh,{keyPath:q1})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(vh)?e(r):(r.close(),await K2(),e(await wg()))})})}async function mE(t,e,n){const r=yf(t,!0).put({[q1]:e,value:n});return new ac(r).toPromise()}async function Q2(t,e){const n=yf(t,!1).get(e),r=await new ac(n).toPromise();return r===void 0?null:r.value}function gE(t,e){const n=yf(t,!0).delete(e);return new ac(n).toPromise()}const Y2=800,X2=3;class W1{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await wg(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>X2)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ny()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=_f._getInstance(G2()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await q2(),!this.activeServiceWorker)return;this.sender=new z2(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||W2()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await wg();return await mE(e,yh,"1"),await gE(e,yh),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>mE(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Q2(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>gE(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=yf(i,!1).getAll();return new ac(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Y2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}W1.type="LOCAL";const Eu=W1;/**
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
 */function J2(t,e){return qe(t,"POST","/v2/accounts/mfaSignIn:start",je(t,e))}function Z2(t,e){return qe(t,"POST","/v2/accounts/mfaSignIn:finalize",je(t,e))}/**
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
 */const eL=500,tL=6e4,td=1e12;class nL{constructor(e){this.auth=e,this.counter=td,this._widgets=new Map}render(e,n){const r=this.counter;return this._widgets.set(r,new rL(e,this.auth.name,n||{})),this.counter++,r}reset(e){var n;const r=e||td;(n=this._widgets.get(r))===null||n===void 0||n.delete(),this._widgets.delete(r)}getResponse(e){var n;const r=e||td;return((n=this._widgets.get(r))===null||n===void 0?void 0:n.getResponse())||""}async execute(e){var n;const r=e||td;return(n=this._widgets.get(r))===null||n===void 0||n.execute(),""}}class rL{constructor(e,n,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof e=="string"?document.getElementById(e):e;N(i,"argument-error",{appName:n}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=iL(50);const{callback:e,"expired-callback":n}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,n)try{n()}catch{}this.isVisible&&this.execute()},tL)},eL))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function iL(t){const e=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<t;r++)e.push(n.charAt(Math.floor(Math.random()*n.length)));return e.join("")}/**
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
 */const Jp=P1("rcb"),sL=new nc(3e4,6e4);class oL{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((e=Ye().grecaptcha)===null||e===void 0)&&e.render)}load(e,n=""){return N(aL(n),e,"argument-error"),this.shouldResolveImmediately(n)&&oE(Ye().grecaptcha)?Promise.resolve(Ye().grecaptcha):new Promise((r,i)=>{const s=Ye().setTimeout(()=>{i(tt(e,"network-request-failed"))},sL.get());Ye()[Jp]=()=>{Ye().clearTimeout(s),delete Ye()[Jp];const a=Ye().grecaptcha;if(!a||!oE(a)){i(tt(e,"internal-error"));return}const l=a.render;a.render=(u,c)=>{const d=l(u,c);return this.counter++,d},this.hostLanguage=n,r(a)};const o=`${bV()}?${Aa({onload:Jp,render:"explicit",hl:n})}`;Ry(o).catch(()=>{clearTimeout(s),i(tt(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var n;return!!(!((n=Ye().grecaptcha)===null||n===void 0)&&n.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function aL(t){return t.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(t)}class lL{async load(e){return new nL(e)}clearedOneInstance(){}}/**
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
 */const G1="recaptcha",uL={theme:"light",type:"image"};class cL{constructor(e,n,r=Object.assign({},uL)){this.parameters=r,this.type=G1,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=$e(e),this.isInvisible=this.parameters.size==="invisible",N(typeof document!="undefined",this.auth,"operation-not-supported-in-this-environment");const i=typeof n=="string"?document.getElementById(n):n;N(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new lL:new oL,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),n=this.getAssertedRecaptcha(),r=n.getResponse(e);return r||new Promise(i=>{const s=o=>{!o||(this.tokenChangeListeners.delete(s),i(o))};this.tokenChangeListeners.add(s),this.isInvisible&&n.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){N(!this.parameters.sitekey,this.auth,"argument-error"),N(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),N(typeof document!="undefined",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return n=>{if(this.tokenChangeListeners.forEach(r=>r(n)),typeof e=="function")e(n);else if(typeof e=="string"){const r=Ye()[e];typeof r=="function"&&r(n)}}}assertNotDestroyed(){N(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const n=document.createElement("div");e.appendChild(n),e=n}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){N(Ey()&&!Ny(),this.auth,"internal-error"),await dL(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await uV(this.auth);N(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return N(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function dL(){let t=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}t=()=>e(),window.addEventListener("load",t)}).catch(e=>{throw t&&window.removeEventListener("load",t),e})}/**
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
 */class Oy{constructor(e,n){this.verificationId=e,this.onConfirmation=n}confirm(e){const n=Ts._fromVerification(this.verificationId,e);return this.onConfirmation(n)}}async function hL(t,e,n){if(Ue(t.app))return Promise.reject(lt(t));const r=$e(t),i=await vf(r,e,z(n));return new Oy(i,s=>mf(r,s))}async function fL(t,e,n){const r=z(t);await pf(!1,r,"phone");const i=await vf(r.auth,e,z(n));return new Oy(i,s=>V1(r,s))}async function pL(t,e,n){const r=z(t);if(Ue(r.auth.app))return Promise.reject(lt(r.auth));const i=await vf(r.auth,e,z(n));return new Oy(i,s=>L1(r,s))}async function vf(t,e,n){var r;const i=await n.verify();try{N(typeof i=="string",t,"argument-error"),N(n.type===G1,t,"argument-error");let s;if(typeof e=="string"?s={phoneNumber:e}:s=e,"session"in s){const o=s.session;if("phoneNumber"in s)return N(o.type==="enroll",t,"internal-error"),(await O2(t,{idToken:o.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}})).phoneSessionInfo.sessionInfo;{N(o.type==="signin",t,"internal-error");const a=((r=s.multiFactorHint)===null||r===void 0?void 0:r.uid)||s.multiFactorUid;return N(a,t,"missing-multi-factor-info"),(await J2(t,{mfaPendingCredential:o.credential,mfaEnrollmentId:a,phoneSignInInfo:{recaptchaToken:i}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:o}=await XV(t,{phoneNumber:s.phoneNumber,recaptchaToken:i});return o}}finally{n._reset()}}async function mL(t,e){const n=z(t);if(Ue(n.auth.app))return Promise.reject(lt(n.auth));await Ay(n,e)}/**
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
 */class zn{constructor(e){this.providerId=zn.PROVIDER_ID,this.auth=$e(e)}verifyPhoneNumber(e,n){return vf(this.auth,e,z(n))}static credential(e,n){return Ts._fromVerification(e,n)}static credentialFromResult(e){const n=e;return zn.credentialFromTaggedObject(n)}static credentialFromError(e){return zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:n,temporaryProof:r}=e;return n&&r?Ts._fromTokenResponse(n,r):null}}zn.PROVIDER_ID="phone";zn.PHONE_SIGN_IN_METHOD="phone";/**
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
 */function Hs(t,e){return e?dn(e):(N(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Vy extends ka{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Lr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Lr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Lr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function gL(t){return O1(t.auth,new Vy(t),t.bypassAuthState)}function _L(t){const{auth:e,user:n}=t;return N(n,e,"internal-error"),N1(n,new Vy(t),t.bypassAuthState)}async function yL(t){const{auth:e,user:n}=t;return N(n,e,"internal-error"),Ay(n,new Vy(t),t.bypassAuthState)}/**
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
 */class H1{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return gL;case"linkViaPopup":case"linkViaRedirect":return yL;case"reauthViaPopup":case"reauthViaRedirect":return _L;default:Et(this.auth,"internal-error")}}resolve(e){qn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){qn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const vL=new nc(2e3,1e4);async function wL(t,e,n){if(Ue(t.app))return Promise.reject(tt(t,"operation-not-supported-in-this-environment"));const r=$e(t);Pa(t,e,Qr);const i=Hs(r,n);return new xr(r,"signInViaPopup",e,i).executeNotNull()}async function IL(t,e,n){const r=z(t);if(Ue(r.auth.app))return Promise.reject(tt(r.auth,"operation-not-supported-in-this-environment"));Pa(r.auth,e,Qr);const i=Hs(r.auth,n);return new xr(r.auth,"reauthViaPopup",e,i,r).executeNotNull()}async function EL(t,e,n){const r=z(t);Pa(r.auth,e,Qr);const i=Hs(r.auth,n);return new xr(r.auth,"linkViaPopup",e,i,r).executeNotNull()}class xr extends H1{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,xr.currentPopupAction&&xr.currentPopupAction.cancel(),xr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return N(e,this.auth,"internal-error"),e}async onExecution(){qn(this.filter.length===1,"Popup operations only handle one event");const e=oc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(tt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(tt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,xr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(tt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,vL.get())};e()}}xr.currentPopupAction=null;/**
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
 */const TL="pendingRedirect",Fl=new Map;class SL extends H1{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Fl.get(this.auth._key());if(!e){try{const r=await RL(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Fl.set(this.auth._key(),e)}return this.bypassAuthState||Fl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function RL(t,e){const n=Q1(e),r=K1(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}async function Ly(t,e){return K1(t)._set(Q1(e),"true")}function AL(){Fl.clear()}function My(t,e){Fl.set(t._key(),e)}function K1(t){return dn(t._redirectPersistence)}function Q1(t){return Es(TL,t.config.apiKey,t.name)}/**
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
 */function PL(t,e,n){return CL(t,e,n)}async function CL(t,e,n){if(Ue(t.app))return Promise.reject(lt(t));const r=$e(t);Pa(t,e,Qr),await r._initializationPromise;const i=Hs(r,n);return await Ly(i,r),i._openRedirect(r,e,"signInViaRedirect")}function kL(t,e,n){return bL(t,e,n)}async function bL(t,e,n){const r=z(t);if(Pa(r.auth,e,Qr),Ue(r.auth.app))return Promise.reject(lt(r.auth));await r.auth._initializationPromise;const i=Hs(r.auth,n);await Ly(i,r.auth);const s=await Y1(r);return i._openRedirect(r.auth,e,"reauthViaRedirect",s)}function xL(t,e,n){return DL(t,e,n)}async function DL(t,e,n){const r=z(t);Pa(r.auth,e,Qr),await r.auth._initializationPromise;const i=Hs(r.auth,n);await pf(!1,r,e.providerId),await Ly(i,r.auth);const s=await Y1(r);return i._openRedirect(r.auth,e,"linkViaRedirect",s)}async function NL(t,e){return await $e(t)._initializationPromise,wf(t,e,!1)}async function wf(t,e,n=!1){if(Ue(t.app))return Promise.reject(lt(t));const r=$e(t),i=Hs(r,e),o=await new SL(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}async function Y1(t){const e=oc(`${t.uid}:::`);return t._redirectEventId=e,await t.auth._setRedirectUser(t),await t.auth._persistUserIfCurrent(t),e}/**
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
 */const OL=10*60*1e3;class X1{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!VL(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!J1(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(tt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=OL&&this.cachedEventUids.clear(),this.cachedEventUids.has(_E(e))}saveEventToCache(e){this.cachedEventUids.add(_E(e)),this.lastProcessedEventTime=Date.now()}}function _E(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function J1({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function VL(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return J1(t);default:return!1}}/**
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
 */async function Z1(t,e={}){return qe(t,"GET","/v1/projects",e)}/**
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
 */const LL=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ML=/^https?/;async function FL(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Z1(t);for(const n of e)try{if(UL(n))return}catch{}Et(t,"unauthorized-domain")}function UL(t){const e=yu(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!ML.test(n))return!1;if(LL.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const $L=new nc(3e4,6e4);function yE(){const t=Ye().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function BL(t){return new Promise((e,n)=>{var r,i,s;function o(){yE(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{yE(),n(tt(t,"network-request-failed"))},timeout:$L.get()})}if(!((i=(r=Ye().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Ye().gapi)===null||s===void 0)&&s.load)o();else{const a=P1("iframefcb");return Ye()[a]=()=>{gapi.load?o():n(tt(t,"network-request-failed"))},Ry(`${DV()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw bd=null,e})}let bd=null;function zL(t){return bd=bd||BL(t),bd}/**
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
 */const jL=new nc(5e3,15e3),qL="__/auth/iframe",WL="emulator/auth/iframe",GL={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},HL=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function KL(t){const e=t.config;N(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Ty(e,WL):`https://${t.config.authDomain}/${qL}`,r={apiKey:e.apiKey,appName:t.name,v:Hr},i=HL.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Aa(r).slice(1)}`}async function QL(t){const e=await zL(t),n=Ye().gapi;return N(n,t,"internal-error"),e.open({where:document.body,url:KL(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:GL,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=tt(t,"network-request-failed"),a=Ye().setTimeout(()=>{s(o)},jL.get());function l(){Ye().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const YL={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},XL=500,JL=600,ZL="_blank",eM="http://localhost";class vE{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function tM(t,e,n,r=XL,i=JL){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},YL),{width:r.toString(),height:i.toString(),top:s,left:o}),u=De().toLowerCase();n&&(a=I1(u)?ZL:n),w1(u)&&(e=e||eM,l.scrollbars="yes");const c=Object.entries(l).reduce((h,[f,v])=>`${h}${f}=${v},`,"");if(IV(u)&&a!=="_self")return nM(e||"",a),new vE(null);const d=window.open(e||"",a,c);N(d,t,"popup-blocked");try{d.focus()}catch{}return new vE(d)}function nM(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const rM="__/auth/handler",iM="emulator/auth/handler",sM=encodeURIComponent("fac");async function Ig(t,e,n,r,i,s){N(t.config.authDomain,t,"auth-domain-config-required"),N(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Hr,eventId:i};if(e instanceof Qr){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",bN(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,d]of Object.entries(s||{}))o[c]=d}if(e instanceof ba){const c=e.getScopes().filter(d=>d!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await t._getAppCheckToken(),u=l?`#${sM}=${encodeURIComponent(l)}`:"";return`${oM(t)}?${Aa(a).slice(1)}${u}`}function oM({config:t}){return t.emulator?Ty(t,iM):`https://${t.authDomain}/${rM}`}/**
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
 */const Zp="webStorageSupport";class aM{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ds,this._completeRedirectFn=wf,this._overrideRedirectResult=My}async _openPopup(e,n,r,i){var s;qn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Ig(e,n,r,yu(),i);return tM(e,o,oc())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Ig(e,n,r,yu(),i);return j2(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(qn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await QL(e),r=new X1(e);return n.register("authEvent",i=>(N(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Zp,{type:Zp},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Zp];o!==void 0&&n(!!o),Et(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=FL(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return R1()||Sy()||Ca()}}const lM=aM;class uM{constructor(e){this.factorId=e}_process(e,n,r){switch(n.type){case"enroll":return this._finalizeEnroll(e,n.credential,r);case"signin":return this._finalizeSignIn(e,n.credential);default:return or("unexpected MultiFactorSessionType")}}}class Fy extends uM{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new Fy(e)}_finalizeEnroll(e,n,r){return V2(e,{idToken:n,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,n){return Z2(e,{mfaPendingCredential:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class eA{constructor(){}static assertion(e){return Fy._fromCredential(e)}}eA.FACTOR_ID="phone";var wE="@firebase/auth",IE="1.7.0";/**
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
 */class cM{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){N(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function dM(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function hM(t){zr(new Dn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;N(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:A1(t)},u=new CV(r,i,s,l);return LV(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),zr(new Dn("auth-internal",e=>{const n=$e(e.getProvider("auth").getImmediate());return(r=>new cM(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),fn(wE,IE,dM(t)),fn(wE,IE,"esm2017")}/**
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
 */const fM=5*60;TN("authIdTokenMaxAge");function pM(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}kV({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=tt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",pM().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});hM("Browser");/**
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
 */function Ns(){return window}/**
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
 */const mM=2e3;async function gM(t,e,n){var r;const{BuildInfo:i}=Ns();qn(e.sessionId,"AuthEvent did not contain a session ID");const s=await IM(e.sessionId),o={};return Ca()?o.ibi=i.packageName:rc()?o.apn=i.packageName:Et(t,"operation-not-supported-in-this-environment"),i.displayName&&(o.appDisplayName=i.displayName),o.sessionId=s,Ig(t,n,e.type,void 0,(r=e.eventId)!==null&&r!==void 0?r:void 0,o)}async function _M(t){const{BuildInfo:e}=Ns(),n={};Ca()?n.iosBundleId=e.packageName:rc()?n.androidPackageName=e.packageName:Et(t,"operation-not-supported-in-this-environment"),await Z1(t,n)}function yM(t){const{cordova:e}=Ns();return new Promise(n=>{e.plugins.browsertab.isAvailable(r=>{let i=null;r?e.plugins.browsertab.openUrl(t):i=e.InAppBrowser.open(t,wV()?"_blank":"_system","location=yes"),n(i)})})}async function vM(t,e,n){const{cordova:r}=Ns();let i=()=>{};try{await new Promise((s,o)=>{let a=null;function l(){var d;s();const h=(d=r.plugins.browsertab)===null||d===void 0?void 0:d.close;typeof h=="function"&&h(),typeof(n==null?void 0:n.close)=="function"&&n.close()}function u(){a||(a=window.setTimeout(()=>{o(tt(t,"redirect-cancelled-by-user"))},mM))}function c(){(document==null?void 0:document.visibilityState)==="visible"&&u()}e.addPassiveListener(l),document.addEventListener("resume",u,!1),rc()&&document.addEventListener("visibilitychange",c,!1),i=()=>{e.removePassiveListener(l),document.removeEventListener("resume",u,!1),document.removeEventListener("visibilitychange",c,!1),a&&window.clearTimeout(a)}})}finally{i()}}function wM(t){var e,n,r,i,s,o,a,l,u,c;const d=Ns();N(typeof((e=d==null?void 0:d.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),N(typeof((n=d==null?void 0:d.BuildInfo)===null||n===void 0?void 0:n.packageName)!="undefined",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),N(typeof((s=(i=(r=d==null?void 0:d.cordova)===null||r===void 0?void 0:r.plugins)===null||i===void 0?void 0:i.browsertab)===null||s===void 0?void 0:s.openUrl)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),N(typeof((l=(a=(o=d==null?void 0:d.cordova)===null||o===void 0?void 0:o.plugins)===null||a===void 0?void 0:a.browsertab)===null||l===void 0?void 0:l.isAvailable)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),N(typeof((c=(u=d==null?void 0:d.cordova)===null||u===void 0?void 0:u.InAppBrowser)===null||c===void 0?void 0:c.open)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function IM(t){const e=EM(t),n=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(n)).map(i=>i.toString(16).padStart(2,"0")).join("")}function EM(t){if(qn(/[0-9a-zA-Z]+/.test(t),"Can only convert alpha-numeric strings"),typeof TextEncoder!="undefined")return new TextEncoder().encode(t);const e=new ArrayBuffer(t.length),n=new Uint8Array(e);for(let r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return n}/**
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
 */const TM=20;class SM extends X1{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach(n=>n(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function RM(t,e,n=null){return{type:e,eventId:n,urlResponse:null,sessionId:CM(),postBody:null,tenantId:t.tenantId,error:tt(t,"no-auth-event")}}function AM(t,e){return Eg()._set(Tg(t),e)}async function EE(t){const e=await Eg()._get(Tg(t));return e&&await Eg()._remove(Tg(t)),e}function PM(t,e){var n,r;const i=bM(e);if(i.includes("/__/auth/callback")){const s=xd(i),o=s.firebaseError?kM(decodeURIComponent(s.firebaseError)):null,a=(r=(n=o==null?void 0:o.code)===null||n===void 0?void 0:n.split("auth/"))===null||r===void 0?void 0:r[1],l=a?tt(a):null;return l?{type:t.type,eventId:t.eventId,tenantId:t.tenantId,error:l,urlResponse:null,sessionId:null,postBody:null}:{type:t.type,eventId:t.eventId,tenantId:t.tenantId,sessionId:t.sessionId,urlResponse:i,postBody:null}}return null}function CM(){const t=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<TM;n++){const r=Math.floor(Math.random()*e.length);t.push(e.charAt(r))}return t.join("")}function Eg(){return dn(Dy)}function Tg(t){return Es("authEvent",t.config.apiKey,t.name)}function kM(t){try{return JSON.parse(t)}catch{return null}}function bM(t){const e=xd(t),n=e.link?decodeURIComponent(e.link):void 0,r=xd(n).link,i=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return xd(i).link||i||r||n||t}function xd(t){if(!(t!=null&&t.includes("?")))return{};const[e,...n]=t.split("?");return No(n.join("?"))}/**
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
 */const xM=500;class DM{constructor(){this._redirectPersistence=Ds,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=wf,this._overrideRedirectResult=My}async _initialize(e){const n=e._key();let r=this.eventManagers.get(n);return r||(r=new SM(e),this.eventManagers.set(n,r),this.attachCallbackListeners(e,r)),r}_openPopup(e){Et(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,n,r,i){wM(e);const s=await this._initialize(e);await s.initialized(),s.resetRedirect(),AL(),await this._originValidation(e);const o=RM(e,r,i);await AM(e,o);const a=await gM(e,o,n),l=await yM(a);return vM(e,s,l)}_isIframeWebStorageSupported(e,n){throw new Error("Method not implemented.")}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=_M(e)),this.originValidationPromises[n]}attachCallbackListeners(e,n){const{universalLinks:r,handleOpenURL:i,BuildInfo:s}=Ns(),o=setTimeout(async()=>{await EE(e),n.onEvent(TE())},xM),a=async c=>{clearTimeout(o);const d=await EE(e);let h=null;d&&(c==null?void 0:c.url)&&(h=PM(d,c.url)),n.onEvent(h||TE())};typeof r!="undefined"&&typeof r.subscribe=="function"&&r.subscribe(null,a);const l=i,u=`${s.packageName.toLowerCase()}://`;Ns().handleOpenURL=async c=>{if(c.toLowerCase().startsWith(u)&&a({url:c}),typeof l=="function")try{l(c)}catch(d){console.error(d)}}}}const NM=DM;function TE(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:tt("no-auth-event")}}/**
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
 */function OM(t,e){$e(t)._logFramework(e)}var VM="@firebase/auth-compat",LM="0.5.5";/**
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
 */const MM=1e3;function Ul(){var t;return((t=self==null?void 0:self.location)===null||t===void 0?void 0:t.protocol)||null}function FM(){return Ul()==="http:"||Ul()==="https:"}function tA(t=De()){return!!((Ul()==="file:"||Ul()==="ionic:"||Ul()==="capacitor:")&&t.toLowerCase().match(/iphone|ipad|ipod|android/))}function UM(){return py()||fy()}function $M(){return YR()&&(document==null?void 0:document.documentMode)===11}function BM(t=De()){return/Edge\/\d+/.test(t)}function zM(t=De()){return $M()||BM(t)}function nA(){try{const t=self.localStorage,e=oc();if(t)return t.setItem(e,"1"),t.removeItem(e),zM()?pu():!0}catch{return Uy()&&pu()}return!1}function Uy(){return typeof global!="undefined"&&"WorkerGlobalScope"in global&&"importScripts"in global}function em(){return(FM()||QR()||tA())&&!UM()&&nA()&&!Uy()}function rA(){return tA()&&typeof document!="undefined"}async function jM(){return rA()?new Promise(t=>{const e=setTimeout(()=>{t(!1)},MM);document.addEventListener("deviceready",()=>{clearTimeout(e),t(!0)})}):!1}function qM(){return typeof window!="undefined"?window:null}/**
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
 */const un={LOCAL:"local",NONE:"none",SESSION:"session"},ol=N,iA="persistence";function WM(t,e){if(ol(Object.values(un).includes(e),t,"invalid-persistence-type"),py()){ol(e!==un.SESSION,t,"unsupported-persistence-type");return}if(fy()){ol(e===un.NONE,t,"unsupported-persistence-type");return}if(Uy()){ol(e===un.NONE||e===un.LOCAL&&pu(),t,"unsupported-persistence-type");return}ol(e===un.NONE||nA(),t,"unsupported-persistence-type")}async function Sg(t){await t._initializationPromise;const e=sA(),n=Es(iA,t.config.apiKey,t.name);e&&e.setItem(n,t._getPersistence())}function GM(t,e){const n=sA();if(!n)return[];const r=Es(iA,t,e);switch(n.getItem(r)){case un.NONE:return[aa];case un.LOCAL:return[Eu,Ds];case un.SESSION:return[Ds];default:return[]}}function sA(){var t;try{return((t=qM())===null||t===void 0?void 0:t.sessionStorage)||null}catch{return null}}/**
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
 */const HM=N;class vi{constructor(){this.browserResolver=dn(lM),this.cordovaResolver=dn(NM),this.underlyingResolver=null,this._redirectPersistence=Ds,this._completeRedirectFn=wf,this._overrideRedirectResult=My}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,n,r,i)}async _openRedirect(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,n,r,i)}_isIframeWebStorageSupported(e,n){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,n)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return rA()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return HM(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await jM();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
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
 */function oA(t){return t.unwrap()}function KM(t){return t.wrapped()}/**
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
 */function QM(t){return aA(t)}function YM(t,e){var n;const r=(n=e.customData)===null||n===void 0?void 0:n._tokenResponse;if((e==null?void 0:e.code)==="auth/multi-factor-auth-required"){const i=e;i.resolver=new XM(t,N2(t,e))}else if(r){const i=aA(e),s=e;i&&(s.credential=i,s.tenantId=r.tenantId||void 0,s.email=r.email||void 0,s.phoneNumber=r.phoneNumber||void 0)}}function aA(t){const{_tokenResponse:e}=t instanceof kt?t.customData:t;if(!e)return null;if(!(t instanceof kt)&&"temporaryProof"in e&&"phoneNumber"in e)return zn.credentialFromResult(t);const n=e.providerId;if(!n||n===sl.PASSWORD)return null;let r;switch(n){case sl.GOOGLE:r=tr;break;case sl.FACEBOOK:r=er;break;case sl.GITHUB:r=nr;break;case sl.TWITTER:r=rr;break;default:const{oauthIdToken:i,oauthAccessToken:s,oauthTokenSecret:o,pendingToken:a,nonce:l}=e;return!s&&!o&&!i&&!a?null:a?n.startsWith("saml.")?la._create(n,a):yr._fromParams({providerId:n,signInMethod:n,pendingToken:a,idToken:i,accessToken:s}):new jo(n).credential({idToken:i,accessToken:s,rawNonce:l})}return t instanceof kt?r.credentialFromError(t):r.credentialFromResult(t)}function Kt(t,e){return e.catch(n=>{throw n instanceof kt&&YM(t,n),n}).then(n=>{const r=n.operationType,i=n.user;return{operationType:r,credential:QM(n),additionalUserInfo:D2(n),user:Dr.getOrCreate(i)}})}async function Rg(t,e){const n=await e;return{verificationId:n.verificationId,confirm:r=>Kt(t,n.confirm(r))}}class XM{constructor(e,n){this.resolver=n,this.auth=KM(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return Kt(oA(this.auth),this.resolver.resolveSignIn(e))}}/**
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
 */class Dr{constructor(e){this._delegate=e,this.multiFactor=M2(e)}static getOrCreate(e){return Dr.USER_MAP.has(e)||Dr.USER_MAP.set(e,new Dr(e)),Dr.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return Kt(this.auth,V1(this._delegate,e))}async linkWithPhoneNumber(e,n){return Rg(this.auth,fL(this._delegate,e,n))}async linkWithPopup(e){return Kt(this.auth,EL(this._delegate,e,vi))}async linkWithRedirect(e){return await Sg($e(this.auth)),xL(this._delegate,e,vi)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return Kt(this.auth,L1(this._delegate,e))}reauthenticateWithPhoneNumber(e,n){return Rg(this.auth,pL(this._delegate,e,n))}reauthenticateWithPopup(e){return Kt(this.auth,IL(this._delegate,e,vi))}async reauthenticateWithRedirect(e){return await Sg($e(this.auth)),kL(this._delegate,e,vi)}sendEmailVerification(e){return I2(this._delegate,e)}async unlink(e){return await a2(this._delegate,e),this}updateEmail(e){return R2(this._delegate,e)}updatePassword(e){return A2(this._delegate,e)}updatePhoneNumber(e){return mL(this._delegate,e)}updateProfile(e){return S2(this._delegate,e)}verifyBeforeUpdateEmail(e,n){return E2(this._delegate,e,n)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}Dr.USER_MAP=new WeakMap;/**
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
 */const al=N;class Ag{constructor(e,n){if(this.app=e,n.isInitialized()){this._delegate=n.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:r}=e.options;al(r,"invalid-api-key",{appName:e.name}),al(r,"invalid-api-key",{appName:e.name});const i=typeof window!="undefined"?vi:void 0;this._delegate=n.initialize({options:{persistence:JM(r,e.name),popupRedirectResolver:i}}),this._delegate._updateErrorMap(ZO),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?Dr.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,n){MV(this._delegate,e,n)}applyActionCode(e){return h2(this._delegate,e)}checkActionCode(e){return M1(this._delegate,e)}confirmPasswordReset(e,n){return d2(this._delegate,e,n)}async createUserWithEmailAndPassword(e,n){return Kt(this._delegate,p2(this._delegate,e,n))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return w2(this._delegate,e)}isSignInWithEmailLink(e){return _2(this._delegate,e)}async getRedirectResult(){al(em(),this._delegate,"operation-not-supported-in-this-environment");const e=await NL(this._delegate,vi);return e?Kt(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){OM(this._delegate,e)}onAuthStateChanged(e,n,r){const{next:i,error:s,complete:o}=SE(e,n,r);return this._delegate.onAuthStateChanged(i,s,o)}onIdTokenChanged(e,n,r){const{next:i,error:s,complete:o}=SE(e,n,r);return this._delegate.onIdTokenChanged(i,s,o)}sendSignInLinkToEmail(e,n){return g2(this._delegate,e,n)}sendPasswordResetEmail(e,n){return c2(this._delegate,e,n||void 0)}async setPersistence(e){WM(this._delegate,e);let n;switch(e){case un.SESSION:n=Ds;break;case un.LOCAL:n=await dn(Eu)._isAvailable()?Eu:Dy;break;case un.NONE:n=aa;break;default:return Et("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(n)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return Kt(this._delegate,o2(this._delegate))}signInWithCredential(e){return Kt(this._delegate,mf(this._delegate,e))}signInWithCustomToken(e){return Kt(this._delegate,u2(this._delegate,e))}signInWithEmailAndPassword(e,n){return Kt(this._delegate,m2(this._delegate,e,n))}signInWithEmailLink(e,n){return Kt(this._delegate,y2(this._delegate,e,n))}signInWithPhoneNumber(e,n){return Rg(this._delegate,hL(this._delegate,e,n))}async signInWithPopup(e){return al(em(),this._delegate,"operation-not-supported-in-this-environment"),Kt(this._delegate,wL(this._delegate,e,vi))}async signInWithRedirect(e){return al(em(),this._delegate,"operation-not-supported-in-this-environment"),await Sg(this._delegate),PL(this._delegate,e,vi)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return f2(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}Ag.Persistence=un;function SE(t,e,n){let r=t;typeof t!="function"&&({next:r,error:e,complete:n}=t);const i=r;return{next:o=>i(o&&Dr.getOrCreate(o)),error:e,complete:n}}function JM(t,e){const n=GM(t,e);if(typeof self!="undefined"&&!n.includes(Eu)&&n.push(Eu),typeof window!="undefined")for(const r of[Dy,Ds])n.includes(r)||n.push(r);return n.includes(aa)||n.push(aa),n}/**
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
 */class $y{constructor(){this.providerId="phone",this._delegate=new zn(oA(pr.auth()))}static credential(e,n){return zn.credential(e,n)}verifyPhoneNumber(e,n){return this._delegate.verifyPhoneNumber(e,n)}unwrap(){return this._delegate}}$y.PHONE_SIGN_IN_METHOD=zn.PHONE_SIGN_IN_METHOD;$y.PROVIDER_ID=zn.PROVIDER_ID;/**
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
 */const ZM=N;class eF{constructor(e,n,r=pr.app()){var i;ZM((i=r.options)===null||i===void 0?void 0:i.apiKey,"invalid-api-key",{appName:r.name}),this._delegate=new cL(r.auth(),e,n),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
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
 */const tF="auth-compat";function nF(t){t.INTERNAL.registerComponent(new Dn(tF,e=>{const n=e.getProvider("app-compat").getImmediate(),r=e.getProvider("auth");return new Ag(n,r)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:ao.EMAIL_SIGNIN,PASSWORD_RESET:ao.PASSWORD_RESET,RECOVER_EMAIL:ao.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:ao.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:ao.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:ao.VERIFY_EMAIL}},EmailAuthProvider:Hi,FacebookAuthProvider:er,GithubAuthProvider:nr,GoogleAuthProvider:tr,OAuthProvider:jo,SAMLAuthProvider:gh,PhoneAuthProvider:$y,PhoneMultiFactorGenerator:eA,RecaptchaVerifier:eF,TwitterAuthProvider:rr,Auth:Ag,AuthCredential:ka,Error:kt}).setInstantiationMode("LAZY").setMultipleInstances(!1)),t.registerVersion(VM,LM)}nF(pr);var rF=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},U,By=By||{},Z=rF||self;function If(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function lc(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function iF(t){return Object.prototype.hasOwnProperty.call(t,tm)&&t[tm]||(t[tm]=++sF)}var tm="closure_uid_"+(1e9*Math.random()>>>0),sF=0;function oF(t,e,n){return t.call.apply(t.bind,arguments)}function aF(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function bt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?bt=oF:bt=aF,bt.apply(null,arguments)}function nd(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function dt(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function Ki(){this.s=this.s,this.o=this.o}var lF=0;Ki.prototype.s=!1;Ki.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),lF!=0)&&iF(this)};Ki.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const lA=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function zy(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function RE(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(If(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function xt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}xt.prototype.h=function(){this.defaultPrevented=!0};var uF=function(){if(!Z.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const n=()=>{};Z.addEventListener("test",n,e),Z.removeEventListener("test",n,e)}catch{}return t}();function Tu(t){return/^[\s\xa0]*$/.test(t)}function Ef(){var t=Z.navigator;return t&&(t=t.userAgent)?t:""}function ir(t){return Ef().indexOf(t)!=-1}function jy(t){return jy[" "](t),t}jy[" "]=function(){};function cF(t,e){var n=nU;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var dF=ir("Opera"),ua=ir("Trident")||ir("MSIE"),uA=ir("Edge"),Pg=uA||ua,cA=ir("Gecko")&&!(Ef().toLowerCase().indexOf("webkit")!=-1&&!ir("Edge"))&&!(ir("Trident")||ir("MSIE"))&&!ir("Edge"),hF=Ef().toLowerCase().indexOf("webkit")!=-1&&!ir("Edge");function dA(){var t=Z.document;return t?t.documentMode:void 0}var Cg;e:{var nm="",rm=function(){var t=Ef();if(cA)return/rv:([^\);]+)(\)|;)/.exec(t);if(uA)return/Edge\/([\d\.]+)/.exec(t);if(ua)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(hF)return/WebKit\/(\S+)/.exec(t);if(dF)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(rm&&(nm=rm?rm[1]:""),ua){var im=dA();if(im!=null&&im>parseFloat(nm)){Cg=String(im);break e}}Cg=nm}var kg;if(Z.document&&ua){var AE=dA();kg=AE||parseInt(Cg,10)||void 0}else kg=void 0;var fF=kg;function Su(t,e){if(xt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(cA){e:{try{jy(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:pF[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Su.$.h.call(this)}}dt(Su,xt);var pF={2:"touch",3:"pen",4:"mouse"};Su.prototype.h=function(){Su.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var uc="closure_listenable_"+(1e6*Math.random()|0),mF=0;function gF(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=i,this.key=++mF,this.fa=this.ia=!1}function Tf(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function qy(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function _F(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function hA(t){const e={};for(const n in t)e[n]=t[n];return e}const PE="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function fA(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<PE.length;s++)n=PE[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Sf(t){this.src=t,this.g={},this.h=0}Sf.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=xg(t,e,r,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new gF(e,this.src,s,!!r,i),e.ia=n,t.push(e)),e};function bg(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=lA(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(Tf(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function xg(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==r)return i}return-1}var Wy="closure_lm_"+(1e6*Math.random()|0),sm={};function pA(t,e,n,r,i){if(r&&r.once)return gA(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)pA(t,e[s],n,r,i);return null}return n=Ky(n),t&&t[uc]?t.O(e,n,lc(r)?!!r.capture:!!r,i):mA(t,e,n,!1,r,i)}function mA(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=lc(i)?!!i.capture:!!i,a=Hy(t);if(a||(t[Wy]=a=new Sf(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=yF(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)uF||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(yA(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function yF(){function t(n){return e.call(t.src,t.listener,n)}const e=vF;return t}function gA(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)gA(t,e[s],n,r,i);return null}return n=Ky(n),t&&t[uc]?t.P(e,n,lc(r)?!!r.capture:!!r,i):mA(t,e,n,!0,r,i)}function _A(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)_A(t,e[s],n,r,i);else r=lc(r)?!!r.capture:!!r,n=Ky(n),t&&t[uc]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=xg(s,n,r,i),-1<n&&(Tf(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=Hy(t))&&(e=t.g[e.toString()],t=-1,e&&(t=xg(e,n,r,i)),(n=-1<t?e[t]:null)&&Gy(n))}function Gy(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[uc])bg(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(yA(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Hy(e))?(bg(n,t),n.h==0&&(n.src=null,e[Wy]=null)):Tf(t)}}}function yA(t){return t in sm?sm[t]:sm[t]="on"+t}function vF(t,e){if(t.fa)t=!0;else{e=new Su(e,this);var n=t.listener,r=t.la||t.src;t.ia&&Gy(t),t=n.call(r,e)}return t}function Hy(t){return t=t[Wy],t instanceof Sf?t:null}var om="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ky(t){return typeof t=="function"?t:(t[om]||(t[om]=function(e){return t.handleEvent(e)}),t[om])}function ct(){Ki.call(this),this.i=new Sf(this),this.S=this,this.J=null}dt(ct,Ki);ct.prototype[uc]=!0;ct.prototype.removeEventListener=function(t,e,n,r){_A(this,t,e,n,r)};function wt(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new xt(e,t);else if(e instanceof xt)e.target=e.target||t;else{var i=e;e=new xt(r,t),fA(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=rd(o,r,!0,e)&&i}if(o=e.g=t,i=rd(o,r,!0,e)&&i,i=rd(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=rd(o,r,!1,e)&&i}ct.prototype.N=function(){if(ct.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Tf(n[r]);delete t.g[e],t.h--}}this.J=null};ct.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};ct.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function rd(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&bg(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var Qy=Z.JSON.stringify;class wF{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function IF(){var t=Yy;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class EF{constructor(){this.h=this.g=null}add(e,n){const r=vA.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var vA=new wF(()=>new TF,t=>t.reset());class TF{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function SF(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function RF(t){Z.setTimeout(()=>{throw t},0)}let Ru,Au=!1,Yy=new EF,wA=()=>{const t=Z.Promise.resolve(void 0);Ru=()=>{t.then(AF)}};var AF=()=>{for(var t;t=IF();){try{t.h.call(t.g)}catch(n){RF(n)}var e=vA;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Au=!1};function Rf(t,e){ct.call(this),this.h=t||1,this.g=e||Z,this.j=bt(this.qb,this),this.l=Date.now()}dt(Rf,ct);U=Rf.prototype;U.ga=!1;U.T=null;U.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),wt(this,"tick"),this.ga&&(Xy(this),this.start()))}};U.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Xy(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}U.N=function(){Rf.$.N.call(this),Xy(this),delete this.g};function Jy(t,e,n){if(typeof t=="function")n&&(t=bt(t,n));else if(t&&typeof t.handleEvent=="function")t=bt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:Z.setTimeout(t,e||0)}function IA(t){t.g=Jy(()=>{t.g=null,t.i&&(t.i=!1,IA(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class PF extends Ki{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:IA(this)}N(){super.N(),this.g&&(Z.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Pu(t){Ki.call(this),this.h=t,this.g={}}dt(Pu,Ki);var CE=[];function EA(t,e,n,r){Array.isArray(n)||(n&&(CE[0]=n.toString()),n=CE);for(var i=0;i<n.length;i++){var s=pA(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function TA(t){qy(t.g,function(e,n){this.g.hasOwnProperty(n)&&Gy(e)},t),t.g={}}Pu.prototype.N=function(){Pu.$.N.call(this),TA(this)};Pu.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Af(){this.g=!0}Af.prototype.Ea=function(){this.g=!1};function CF(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var d=c.split("_");o=2<=d.length&&d[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function kF(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function Oo(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+xF(t,n)+(r?" "+r:"")})}function bF(t,e){t.info(function(){return"TIMEOUT: "+e})}Af.prototype.info=function(){};function xF(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Qy(n)}catch{return e}}var Ks={},kE=null;function Pf(){return kE=kE||new ct}Ks.Ta="serverreachability";function SA(t){xt.call(this,Ks.Ta,t)}dt(SA,xt);function Cu(t){const e=Pf();wt(e,new SA(e))}Ks.STAT_EVENT="statevent";function RA(t,e){xt.call(this,Ks.STAT_EVENT,t),this.stat=e}dt(RA,xt);function Ut(t){const e=Pf();wt(e,new RA(e,t))}Ks.Ua="timingevent";function AA(t,e){xt.call(this,Ks.Ua,t),this.size=e}dt(AA,xt);function cc(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return Z.setTimeout(function(){t()},e)}var Cf={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},PA={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Zy(){}Zy.prototype.h=null;function bE(t){return t.h||(t.h=t.i())}function CA(){}var dc={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function ev(){xt.call(this,"d")}dt(ev,xt);function tv(){xt.call(this,"c")}dt(tv,xt);var Dg;function kf(){}dt(kf,Zy);kf.prototype.g=function(){return new XMLHttpRequest};kf.prototype.i=function(){return{}};Dg=new kf;function hc(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new Pu(this),this.P=DF,t=Pg?125:void 0,this.V=new Rf(t),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new kA}function kA(){this.i=null,this.g="",this.h=!1}var DF=45e3,bA={},Ng={};U=hc.prototype;U.setTimeout=function(t){this.P=t};function Og(t,e,n){t.L=1,t.A=xf(qr(e)),t.u=n,t.S=!0,xA(t,null)}function xA(t,e){t.G=Date.now(),fc(t),t.B=qr(t.A);var n=t.B,r=t.W;Array.isArray(r)||(r=[String(r)]),UA(n.i,"t",r),t.o=0,n=t.l.J,t.h=new kA,t.g=oP(t.l,n?e:null,!t.u),0<t.O&&(t.M=new PF(bt(t.Pa,t,t.g),t.O)),EA(t.U,t.g,"readystatechange",t.nb),e=t.I?hA(t.I):{},t.u?(t.v||(t.v="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.B,t.v,t.u,e)):(t.v="GET",t.g.ha(t.B,t.v,null,e)),Cu(),CF(t.j,t.v,t.B,t.m,t.W,t.u)}U.nb=function(t){t=t.target;const e=this.M;e&&ar(t)==3?e.l():this.Pa(t)};U.Pa=function(t){try{if(t==this.g)e:{const c=ar(this.g);var e=this.g.Ia();const d=this.g.da();if(!(3>c)&&(c!=3||Pg||this.g&&(this.h.h||this.g.ja()||OE(this.g)))){this.J||c!=4||e==7||(e==8||0>=d?Cu(3):Cu(2)),bf(this);var n=this.g.da();this.ca=n;t:if(DA(this)){var r=OE(this.g);t="";var i=r.length,s=ar(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){ms(this),$l(this);var o="";break t}this.h.i=new Z.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.length=0,this.h.g+=t,this.o=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,kF(this.j,this.v,this.B,this.m,this.W,c,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Tu(a)){var u=a;break t}}u=null}if(n=u)Oo(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Vg(this,n);else{this.i=!1,this.s=3,Ut(12),ms(this),$l(this);break e}}this.S?(NA(this,c,o),Pg&&this.i&&c==3&&(EA(this.U,this.V,"tick",this.mb),this.V.start())):(Oo(this.j,this.m,o,null),Vg(this,o)),c==4&&ms(this),this.i&&!this.J&&(c==4?nP(this.l,this):(this.i=!1,fc(this)))}else ZF(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.s=3,Ut(12)):(this.s=0,Ut(13)),ms(this),$l(this)}}}catch{}finally{}};function DA(t){return t.g?t.v=="GET"&&t.L!=2&&t.l.Ha:!1}function NA(t,e,n){let r=!0,i;for(;!t.J&&t.o<n.length;)if(i=NF(t,n),i==Ng){e==4&&(t.s=4,Ut(14),r=!1),Oo(t.j,t.m,null,"[Incomplete Response]");break}else if(i==bA){t.s=4,Ut(15),Oo(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Oo(t.j,t.m,i,null),Vg(t,i);DA(t)&&t.o!=0&&(t.h.g=t.h.g.slice(t.o),t.o=0),e!=4||n.length!=0||t.h.h||(t.s=1,Ut(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),av(e),e.M=!0,Ut(11))):(Oo(t.j,t.m,n,"[Invalid Chunked Response]"),ms(t),$l(t))}U.mb=function(){if(this.g){var t=ar(this.g),e=this.g.ja();this.o<e.length&&(bf(this),NA(this,t,e),this.i&&t!=4&&fc(this))}};function NF(t,e){var n=t.o,r=e.indexOf(`
`,n);return r==-1?Ng:(n=Number(e.substring(n,r)),isNaN(n)?bA:(r+=1,r+n>e.length?Ng:(e=e.slice(r,r+n),t.o=r+n,e)))}U.cancel=function(){this.J=!0,ms(this)};function fc(t){t.Y=Date.now()+t.P,OA(t,t.P)}function OA(t,e){if(t.C!=null)throw Error("WatchDog timer not null");t.C=cc(bt(t.lb,t),e)}function bf(t){t.C&&(Z.clearTimeout(t.C),t.C=null)}U.lb=function(){this.C=null;const t=Date.now();0<=t-this.Y?(bF(this.j,this.B),this.L!=2&&(Cu(),Ut(17)),ms(this),this.s=2,$l(this)):OA(this,this.Y-t)};function $l(t){t.l.H==0||t.J||nP(t.l,t)}function ms(t){bf(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,Xy(t.V),TA(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function Vg(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||Lg(n.i,t))){if(!t.K&&Lg(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)Eh(n),Vf(n);else break e;ov(n),Ut(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=cc(bt(n.ib,n),6e3));if(1>=zA(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else gs(n,11)}else if((t.K||n.g==t)&&Eh(n),!Tu(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.K=u[1],n.pa=u[2];const c=u[3];c!=null&&(n.ra=c,n.l.info("VER="+n.ra));const d=u[4];d!=null&&(n.Ga=d,n.l.info("SVER="+n.Ga));const h=u[5];h!=null&&typeof h=="number"&&0<h&&(r=1.5*h,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const f=t.g;if(f){const v=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(v){var s=r.i;s.g||v.indexOf("spdy")==-1&&v.indexOf("quic")==-1&&v.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(nv(s,s.h),s.h=null))}if(r.F){const y=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;y&&(r.Da=y,Ee(r.I,r.F,y))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=sP(r,r.J?r.pa:null,r.Y),o.K){jA(r.i,o);var a=o,l=r.L;l&&a.setTimeout(l),a.C&&(bf(a),fc(a)),r.g=o}else eP(r);0<n.j.length&&Lf(n)}else u[0]!="stop"&&u[0]!="close"||gs(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?gs(n,7):sv(n):u[0]!="noop"&&n.h&&n.h.Aa(u),n.A=0)}}Cu(4)}catch{}}function OF(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map!="undefined"&&t instanceof Map||typeof Set!="undefined"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(If(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function VF(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map!="undefined"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set!="undefined"&&t instanceof Set)){if(If(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function VA(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(If(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=VF(t),r=OF(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var LA=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function LF(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Ss(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Ss){this.h=t.h,wh(this,t.j),this.s=t.s,this.g=t.g,Ih(this,t.m),this.l=t.l;var e=t.i,n=new ku;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),xE(this,n),this.o=t.o}else t&&(e=String(t).match(LA))?(this.h=!1,wh(this,e[1]||"",!0),this.s=Tl(e[2]||""),this.g=Tl(e[3]||"",!0),Ih(this,e[4]),this.l=Tl(e[5]||"",!0),xE(this,e[6]||"",!0),this.o=Tl(e[7]||"")):(this.h=!1,this.i=new ku(null,this.h))}Ss.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Sl(e,DE,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Sl(e,DE,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Sl(n,n.charAt(0)=="/"?UF:FF,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Sl(n,BF)),t.join("")};function qr(t){return new Ss(t)}function wh(t,e,n){t.j=n?Tl(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Ih(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function xE(t,e,n){e instanceof ku?(t.i=e,zF(t.i,t.h)):(n||(e=Sl(e,$F)),t.i=new ku(e,t.h))}function Ee(t,e,n){t.i.set(e,n)}function xf(t){return Ee(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Tl(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Sl(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,MF),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function MF(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var DE=/[#\/\?@]/g,FF=/[#\?:]/g,UF=/[#\?]/g,$F=/[#\?@]/g,BF=/#/g;function ku(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Qi(t){t.g||(t.g=new Map,t.h=0,t.i&&LF(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}U=ku.prototype;U.add=function(t,e){Qi(this),this.i=null,t=xa(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function MA(t,e){Qi(t),e=xa(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function FA(t,e){return Qi(t),e=xa(t,e),t.g.has(e)}U.forEach=function(t,e){Qi(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};U.ta=function(){Qi(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};U.Z=function(t){Qi(this);let e=[];if(typeof t=="string")FA(this,t)&&(e=e.concat(this.g.get(xa(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};U.set=function(t,e){return Qi(this),this.i=null,t=xa(this,t),FA(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};U.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function UA(t,e,n){MA(t,e),0<n.length&&(t.i=null,t.g.set(xa(t,e),zy(n)),t.h+=n.length)}U.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function xa(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function zF(t,e){e&&!t.j&&(Qi(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(MA(this,r),UA(this,i,n))},t)),t.j=e}var jF=class{constructor(t,e){this.g=t,this.map=e}};function $A(t){this.l=t||qF,Z.PerformanceNavigationTiming?(t=Z.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(Z.g&&Z.g.Ka&&Z.g.Ka()&&Z.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var qF=10;function BA(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function zA(t){return t.h?1:t.g?t.g.size:0}function Lg(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function nv(t,e){t.g?t.g.add(e):t.h=e}function jA(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}$A.prototype.cancel=function(){if(this.i=qA(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function qA(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return zy(t.i)}var WF=class{stringify(t){return Z.JSON.stringify(t,void 0)}parse(t){return Z.JSON.parse(t,void 0)}};function GF(){this.g=new WF}function HF(t,e,n){const r=n||"";try{VA(t,function(i,s){let o=i;lc(i)&&(o=Qy(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function KF(t,e){const n=new Af;if(Z.Image){const r=new Image;r.onload=nd(id,n,r,"TestLoadImage: loaded",!0,e),r.onerror=nd(id,n,r,"TestLoadImage: error",!1,e),r.onabort=nd(id,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=nd(id,n,r,"TestLoadImage: timeout",!1,e),Z.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function id(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function Df(t){this.l=t.ec||null,this.j=t.ob||!1}dt(Df,Zy);Df.prototype.g=function(){return new Nf(this.l,this.j)};Df.prototype.i=function(t){return function(){return t}}({});function Nf(t,e){ct.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=rv,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}dt(Nf,ct);var rv=0;U=Nf.prototype;U.open=function(t,e){if(this.readyState!=rv)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,bu(this)};U.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||Z).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};U.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,pc(this)),this.readyState=rv};U.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,bu(this)),this.g&&(this.readyState=3,bu(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof Z.ReadableStream!="undefined"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;WA(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function WA(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}U.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?pc(this):bu(this),this.readyState==3&&WA(this)}};U.Za=function(t){this.g&&(this.response=this.responseText=t,pc(this))};U.Ya=function(t){this.g&&(this.response=t,pc(this))};U.ka=function(){this.g&&pc(this)};function pc(t){t.readyState=4,t.l=null,t.j=null,t.A=null,bu(t)}U.setRequestHeader=function(t,e){this.v.append(t,e)};U.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};U.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function bu(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Nf.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var QF=Z.JSON.parse;function Be(t){ct.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=GA,this.L=this.M=!1}dt(Be,ct);var GA="",YF=/^https?$/i,XF=["POST","PUT"];U=Be.prototype;U.Oa=function(t){this.M=t};U.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Dg.g(),this.C=this.u?bE(this.u):bE(Dg),this.g.onreadystatechange=bt(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(s){NE(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=Z.FormData&&t instanceof Z.FormData,!(0<=lA(XF,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{QA(this),0<this.B&&((this.L=JF(this.g))?(this.g.timeout=this.B,this.g.ontimeout=bt(this.ua,this)):this.A=Jy(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){NE(this,s)}};function JF(t){return ua&&typeof t.timeout=="number"&&t.ontimeout!==void 0}U.ua=function(){typeof By!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,wt(this,"timeout"),this.abort(8))};function NE(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,HA(t),Of(t)}function HA(t){t.F||(t.F=!0,wt(t,"complete"),wt(t,"error"))}U.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,wt(this,"complete"),wt(this,"abort"),Of(this))};U.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Of(this,!0)),Be.$.N.call(this)};U.La=function(){this.s||(this.G||this.v||this.l?KA(this):this.kb())};U.kb=function(){KA(this)};function KA(t){if(t.h&&typeof By!="undefined"&&(!t.C[1]||ar(t)!=4||t.da()!=2)){if(t.v&&ar(t)==4)Jy(t.La,0,t);else if(wt(t,"readystatechange"),ar(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var i=String(t.I).match(LA)[1]||null;!i&&Z.self&&Z.self.location&&(i=Z.self.location.protocol.slice(0,-1)),r=!YF.test(i?i.toLowerCase():"")}n=r}if(n)wt(t,"complete"),wt(t,"success");else{t.m=6;try{var s=2<ar(t)?t.g.statusText:""}catch{s=""}t.j=s+" ["+t.da()+"]",HA(t)}}finally{Of(t)}}}}function Of(t,e){if(t.g){QA(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||wt(t,"ready");try{n.onreadystatechange=r}catch{}}}function QA(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(Z.clearTimeout(t.A),t.A=null)}U.isActive=function(){return!!this.g};function ar(t){return t.g?t.g.readyState:0}U.da=function(){try{return 2<ar(this)?this.g.status:-1}catch{return-1}};U.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};U.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),QF(e)}};function OE(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case GA:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function ZF(t){const e={};t=(t.g&&2<=ar(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(Tu(t[r]))continue;var n=SF(t[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=e[i]||[];e[i]=s,s.push(n)}_F(e,function(r){return r.join(", ")})}U.Ia=function(){return this.m};U.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function YA(t){let e="";return qy(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function iv(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=YA(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Ee(t,e,n))}function ll(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function XA(t){this.Ga=0,this.j=[],this.l=new Af,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=ll("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=ll("baseRetryDelayMs",5e3,t),this.hb=ll("retryDelaySeedMs",1e4,t),this.eb=ll("forwardChannelMaxRetries",2,t),this.xa=ll("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new $A(t&&t.concurrentRequestLimit),this.Ja=new GF,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}U=XA.prototype;U.ra=8;U.H=1;function sv(t){if(JA(t),t.H==3){var e=t.W++,n=qr(t.I);if(Ee(n,"SID",t.K),Ee(n,"RID",e),Ee(n,"TYPE","terminate"),mc(t,n),e=new hc(t,t.l,e),e.L=2,e.A=xf(qr(n)),n=!1,Z.navigator&&Z.navigator.sendBeacon)try{n=Z.navigator.sendBeacon(e.A.toString(),"")}catch{}!n&&Z.Image&&(new Image().src=e.A,n=!0),n||(e.g=oP(e.l,null),e.g.ha(e.A)),e.G=Date.now(),fc(e)}iP(t)}function Vf(t){t.g&&(av(t),t.g.cancel(),t.g=null)}function JA(t){Vf(t),t.u&&(Z.clearTimeout(t.u),t.u=null),Eh(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&Z.clearTimeout(t.m),t.m=null)}function Lf(t){if(!BA(t.i)&&!t.m){t.m=!0;var e=t.Na;Ru||wA(),Au||(Ru(),Au=!0),Yy.add(e,t),t.C=0}}function eU(t,e){return zA(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=cc(bt(t.Na,t,e),rP(t,t.C)),t.C++,!0)}U.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new hc(this,this.l,t);let s=this.s;if(this.U&&(s?(s=hA(s),fA(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=ZA(this,i,e),n=qr(this.I),Ee(n,"RID",t),Ee(n,"CVER",22),this.F&&Ee(n,"X-HTTP-Session-Id",this.F),mc(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(YA(s)))+"&"+e:this.o&&iv(n,this.o,s)),nv(this.i,i),this.bb&&Ee(n,"TYPE","init"),this.P?(Ee(n,"$req",e),Ee(n,"SID","null"),i.aa=!0,Og(i,n,null)):Og(i,n,e),this.H=2}}else this.H==3&&(t?VE(this,t):this.j.length==0||BA(this.i)||VE(this))};function VE(t,e){var n;e?n=e.m:n=t.W++;const r=qr(t.I);Ee(r,"SID",t.K),Ee(r,"RID",n),Ee(r,"AID",t.V),mc(t,r),t.o&&t.s&&iv(r,t.o,t.s),n=new hc(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=ZA(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),nv(t.i,n),Og(n,r,e)}function mc(t,e){t.na&&qy(t.na,function(n,r){Ee(e,r,n)}),t.h&&VA({},function(n,r){Ee(e,r,n)})}function ZA(t,e,n){n=Math.min(t.j.length,n);var r=t.h?bt(t.h.Va,t.h,t):null;e:{var i=t.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].g;const c=i[l].map;if(u-=s,0>u)s=Math.max(0,i[l].g-100),a=!1;else try{HF(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function eP(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;Ru||wA(),Au||(Ru(),Au=!0),Yy.add(e,t),t.A=0}}function ov(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=cc(bt(t.Ma,t),rP(t,t.A)),t.A++,!0)}U.Ma=function(){if(this.u=null,tP(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=cc(bt(this.jb,this),t)}};U.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,Ut(10),Vf(this),tP(this))};function av(t){t.B!=null&&(Z.clearTimeout(t.B),t.B=null)}function tP(t){t.g=new hc(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=qr(t.wa);Ee(e,"RID","rpc"),Ee(e,"SID",t.K),Ee(e,"AID",t.V),Ee(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&Ee(e,"TO",t.qa),Ee(e,"TYPE","xmlhttp"),mc(t,e),t.o&&t.s&&iv(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.A=xf(qr(e)),n.u=null,n.S=!0,xA(n,t)}U.ib=function(){this.v!=null&&(this.v=null,Vf(this),ov(this),Ut(19))};function Eh(t){t.v!=null&&(Z.clearTimeout(t.v),t.v=null)}function nP(t,e){var n=null;if(t.g==e){Eh(t),av(t),t.g=null;var r=2}else if(Lg(t.i,e))n=e.F,jA(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.u?e.u.length:0,e=Date.now()-e.G;var i=t.C;r=Pf(),wt(r,new AA(r,n)),Lf(t)}else eP(t);else if(i=e.s,i==3||i==0&&0<e.ca||!(r==1&&eU(t,e)||r==2&&ov(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:gs(t,5);break;case 4:gs(t,10);break;case 3:gs(t,6);break;default:gs(t,2)}}}function rP(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function gs(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=bt(t.pb,t);n||(n=new Ss("//www.google.com/images/cleardot.gif"),Z.location&&Z.location.protocol=="http"||wh(n,"https"),xf(n)),KF(n.toString(),r)}else Ut(2);t.H=0,t.h&&t.h.za(e),iP(t),JA(t)}U.pb=function(t){t?(this.l.info("Successfully pinged google.com"),Ut(2)):(this.l.info("Failed to ping google.com"),Ut(1))};function iP(t){if(t.H=0,t.ma=[],t.h){const e=qA(t.i);(e.length!=0||t.j.length!=0)&&(RE(t.ma,e),RE(t.ma,t.j),t.i.i.length=0,zy(t.j),t.j.length=0),t.h.ya()}}function sP(t,e,n){var r=n instanceof Ss?qr(n):new Ss(n);if(r.g!="")e&&(r.g=e+"."+r.g),Ih(r,r.m);else{var i=Z.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new Ss(null);r&&wh(s,r),e&&(s.g=e),i&&Ih(s,i),n&&(s.l=n),r=s}return n=t.F,e=t.Da,n&&e&&Ee(r,n,e),Ee(r,"VER",t.ra),mc(t,r),r}function oP(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=t.Ha&&!t.va?new Be(new Df({ob:n})):new Be(t.va),e.Oa(t.J),e}U.isActive=function(){return!!this.h&&this.h.isActive(this)};function aP(){}U=aP.prototype;U.Ba=function(){};U.Aa=function(){};U.za=function(){};U.ya=function(){};U.isActive=function(){return!0};U.Va=function(){};function Th(){if(ua&&!(10<=Number(fF)))throw Error("Environmental error: no available transport.")}Th.prototype.g=function(t,e){return new mn(t,e)};function mn(t,e){ct.call(this),this.g=new XA(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!Tu(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Tu(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Da(this)}dt(mn,ct);mn.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;Ut(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=sP(t,null,t.Y),Lf(t)};mn.prototype.close=function(){sv(this.g)};mn.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Qy(t),t=n);e.j.push(new jF(e.fb++,t)),e.H==3&&Lf(e)};mn.prototype.N=function(){this.g.h=null,delete this.j,sv(this.g),delete this.g,mn.$.N.call(this)};function lP(t){ev.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}dt(lP,ev);function uP(){tv.call(this),this.status=1}dt(uP,tv);function Da(t){this.g=t}dt(Da,aP);Da.prototype.Ba=function(){wt(this.g,"a")};Da.prototype.Aa=function(t){wt(this.g,new lP(t))};Da.prototype.za=function(t){wt(this.g,new uP)};Da.prototype.ya=function(){wt(this.g,"b")};function tU(){this.blockSize=-1}function Wn(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}dt(Wn,tU);Wn.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function am(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var s=t.g[3],o=e+(s^n&(i^s))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(n^i))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^s)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~s))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+s&4294967295}Wn.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(i==0)for(;s<=n;)am(this,t,s),s+=this.blockSize;if(typeof t=="string"){for(;s<e;)if(r[i++]=t.charCodeAt(s++),i==this.blockSize){am(this,r),i=0;break}}else for(;s<e;)if(r[i++]=t[s++],i==this.blockSize){am(this,r),i=0;break}}this.h=i,this.i+=e};Wn.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function me(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var s=t[i]|0;r&&s==e||(n[i]=s,r=!1)}this.g=n}var nU={};function lv(t){return-128<=t&&128>t?cF(t,function(e){return new me([e|0],0>e?-1:0)}):new me([t|0],0>t?-1:0)}function lr(t){if(isNaN(t)||!isFinite(t))return Wo;if(0>t)return _t(lr(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=Mg;return new me(e,0)}function cP(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return _t(cP(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=lr(Math.pow(e,8)),r=Wo,i=0;i<t.length;i+=8){var s=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+s),e);8>s?(s=lr(Math.pow(e,s)),r=r.R(s).add(lr(o))):(r=r.R(n),r=r.add(lr(o)))}return r}var Mg=4294967296,Wo=lv(0),Fg=lv(1),LE=lv(16777216);U=me.prototype;U.ea=function(){if(Tn(this))return-_t(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:Mg+r)*e,e*=Mg}return t};U.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(Nr(this))return"0";if(Tn(this))return"-"+_t(this).toString(t);for(var e=lr(Math.pow(t,6)),n=this,r="";;){var i=Rh(n,e).g;n=Sh(n,i.R(e));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,Nr(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};U.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function Nr(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function Tn(t){return t.h==-1}U.X=function(t){return t=Sh(this,t),Tn(t)?-1:Nr(t)?0:1};function _t(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new me(n,~t.h).add(Fg)}U.abs=function(){return Tn(this)?_t(this):this};U.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var s=r+(this.D(i)&65535)+(t.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new me(n,n[n.length-1]&-2147483648?-1:0)};function Sh(t,e){return t.add(_t(e))}U.R=function(t){if(Nr(this)||Nr(t))return Wo;if(Tn(this))return Tn(t)?_t(this).R(_t(t)):_t(_t(this).R(t));if(Tn(t))return _t(this.R(_t(t)));if(0>this.X(LE)&&0>t.X(LE))return lr(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(i)>>>16,l=t.D(i)&65535;n[2*r+2*i]+=o*l,sd(n,2*r+2*i),n[2*r+2*i+1]+=s*l,sd(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,sd(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,sd(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new me(n,0)};function sd(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function ul(t,e){this.g=t,this.h=e}function Rh(t,e){if(Nr(e))throw Error("division by zero");if(Nr(t))return new ul(Wo,Wo);if(Tn(t))return e=Rh(_t(t),e),new ul(_t(e.g),_t(e.h));if(Tn(e))return e=Rh(t,_t(e)),new ul(_t(e.g),e.h);if(30<t.g.length){if(Tn(t)||Tn(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Fg,r=e;0>=r.X(t);)n=ME(n),r=ME(r);var i=lo(n,1),s=lo(r,1);for(r=lo(r,2),n=lo(n,2);!Nr(r);){var o=s.add(r);0>=o.X(t)&&(i=i.add(n),s=o),r=lo(r,1),n=lo(n,1)}return e=Sh(t,i.R(e)),new ul(i,e)}for(i=Wo;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=lr(n),o=s.R(e);Tn(o)||0<o.X(t);)n-=r,s=lr(n),o=s.R(e);Nr(s)&&(s=Fg),i=i.add(s),t=Sh(t,o)}return new ul(i,t)}U.gb=function(t){return Rh(this,t).h};U.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new me(n,this.h&t.h)};U.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new me(n,this.h|t.h)};U.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new me(n,this.h^t.h)};function ME(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new me(n,t.h)}function lo(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],s=0;s<r;s++)i[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new me(i,t.h)}Th.prototype.createWebChannel=Th.prototype.g;mn.prototype.send=mn.prototype.u;mn.prototype.open=mn.prototype.m;mn.prototype.close=mn.prototype.close;Cf.NO_ERROR=0;Cf.TIMEOUT=8;Cf.HTTP_ERROR=6;PA.COMPLETE="complete";CA.EventType=dc;dc.OPEN="a";dc.CLOSE="b";dc.ERROR="c";dc.MESSAGE="d";ct.prototype.listen=ct.prototype.O;Be.prototype.listenOnce=Be.prototype.P;Be.prototype.getLastError=Be.prototype.Sa;Be.prototype.getLastErrorCode=Be.prototype.Ia;Be.prototype.getStatus=Be.prototype.da;Be.prototype.getResponseJson=Be.prototype.Wa;Be.prototype.getResponseText=Be.prototype.ja;Be.prototype.send=Be.prototype.ha;Be.prototype.setWithCredentials=Be.prototype.Oa;Wn.prototype.digest=Wn.prototype.l;Wn.prototype.reset=Wn.prototype.reset;Wn.prototype.update=Wn.prototype.j;me.prototype.add=me.prototype.add;me.prototype.multiply=me.prototype.R;me.prototype.modulo=me.prototype.gb;me.prototype.compare=me.prototype.X;me.prototype.toNumber=me.prototype.ea;me.prototype.toString=me.prototype.toString;me.prototype.getBits=me.prototype.D;me.fromNumber=lr;me.fromString=cP;var rU=function(){return new Th},iU=function(){return Pf()},lm=Cf,sU=PA,oU=Ks,FE={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},od=CA,aU=Be,lU=Wn,Go=me;const UE="@firebase/firestore";/**
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
 */class st{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}st.UNAUTHENTICATED=new st(null),st.GOOGLE_CREDENTIALS=new st("google-credentials-uid"),st.FIRST_PARTY=new st("first-party-uid"),st.MOCK_USER=new st("mock-user");/**
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
 */let Na="10.10.0";/**
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
 */const Vi=new cf("@firebase/firestore");function go(){return Vi.logLevel}function uU(t){Vi.setLogLevel(t)}function x(t,...e){if(Vi.logLevel<=ie.DEBUG){const n=e.map(uv);Vi.debug(`Firestore (${Na}): ${t}`,...n)}}function He(t,...e){if(Vi.logLevel<=ie.ERROR){const n=e.map(uv);Vi.error(`Firestore (${Na}): ${t}`,...n)}}function Gn(t,...e){if(Vi.logLevel<=ie.WARN){const n=e.map(uv);Vi.warn(`Firestore (${Na}): ${t}`,...n)}}function uv(t){if(typeof t=="string")return t;try{/**
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
 */function $(t="Unexpected state"){const e=`FIRESTORE (${Na}) INTERNAL ASSERTION FAILED: `+t;throw He(e),new Error(e)}function j(t,e){t||$()}function cU(t,e){t||$()}function F(t,e){return t}/**
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
 */const P={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class b extends kt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class ut{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class dP{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class dU{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(st.UNAUTHENTICATED))}shutdown(){}}class hU{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class fU{constructor(e){this.t=e,this.currentUser=st.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new ut;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new ut,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{x("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(x("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new ut)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(x("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(j(typeof r.accessToken=="string"),new dP(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return j(e===null||typeof e=="string"),new st(e)}}class pU{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=st.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class mU{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new pU(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(st.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class gU{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class _U{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=s=>{s.error!=null&&x("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,x("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{x("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):x("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(j(typeof n.token=="string"),this.R=n.token,new gU(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function yU(t){const e=typeof self!="undefined"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class hP{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=yU(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function ee(t,e){return t<e?-1:t>e?1:0}function ca(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}function fP(t){return t+"\0"}/**
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
 */class xe{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new b(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new b(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new b(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new b(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return xe.fromMillis(Date.now())}static fromDate(e){return xe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new xe(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ee(this.nanoseconds,e.nanoseconds):ee(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class G{constructor(e){this.timestamp=e}static fromTimestamp(e){return new G(e)}static min(){return new G(new xe(0,0))}static max(){return new G(new xe(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class xu{constructor(e,n,r){n===void 0?n=0:n>e.length&&$(),r===void 0?r=e.length-n:r>e.length-n&&$(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return xu.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof xu?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class se extends xu{construct(e,n,r){return new se(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new b(P.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new se(n)}static emptyPath(){return new se([])}}const vU=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ke extends xu{construct(e,n,r){return new ke(e,n,r)}static isValidIdentifier(e){return vU.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ke.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ke(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new b(P.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new b(P.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new b(P.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new b(P.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ke(n)}static emptyPath(){return new ke([])}}/**
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
 */class L{constructor(e){this.path=e}static fromPath(e){return new L(se.fromString(e))}static fromName(e){return new L(se.fromString(e).popFirst(5))}static empty(){return new L(se.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&se.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return se.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new L(new se(e.slice()))}}/**
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
 */class Ah{constructor(e,n,r,i){this.indexId=e,this.collectionGroup=n,this.fields=r,this.indexState=i}}function Ug(t){return t.fields.find(e=>e.kind===2)}function ss(t){return t.fields.filter(e=>e.kind!==2)}Ah.UNKNOWN_ID=-1;class Dd{constructor(e,n){this.fieldPath=e,this.kind=n}}class Du{constructor(e,n){this.sequenceNumber=e,this.offset=n}static empty(){return new Du(0,gn.min())}}function pP(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=G.fromTimestamp(r===1e9?new xe(n+1,0):new xe(n,r));return new gn(i,L.empty(),e)}function mP(t){return new gn(t.readTime,t.key,-1)}class gn{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new gn(G.min(),L.empty(),-1)}static max(){return new gn(G.max(),L.empty(),-1)}}function cv(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=L.comparator(t.documentKey,e.documentKey),n!==0?n:ee(t.largestBatchId,e.largestBatchId))}/**
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
 */const gP="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class _P{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Yi(t){if(t.code!==P.FAILED_PRECONDITION||t.message!==gP)throw t;x("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class T{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&$(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new T((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof T?n:T.resolve(n)}catch(n){return T.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):T.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):T.reject(n)}static resolve(e){return new T((n,r)=>{n(e)})}static reject(e){return new T((n,r)=>{r(e)})}static waitFor(e){return new T((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=T.resolve(!1);for(const r of e)n=n.next(i=>i?T.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new T((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(e[u]).next(c=>{o[u]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(e,n){return new T((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}/**
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
 */class Mf{constructor(e,n){this.action=e,this.transaction=n,this.aborted=!1,this.V=new ut,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{n.error?this.V.reject(new Bl(e,n.error)):this.V.resolve()},this.transaction.onerror=r=>{const i=dv(r.target.error);this.V.reject(new Bl(e,i))}}static open(e,n,r,i){try{return new Mf(n,e.transaction(i,r))}catch(s){throw new Bl(n,s)}}get m(){return this.V.promise}abort(e){e&&this.V.reject(e),this.aborted||(x("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const n=this.transaction.objectStore(e);return new IU(n)}}class Rn{constructor(e,n,r){this.name=e,this.version=n,this.p=r,Rn.S(De())===12.2&&He("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return x("SimpleDb","Removing database:",e),os(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!pu())return!1;if(Rn.C())return!0;const e=De(),n=Rn.S(e),r=0<n&&n<10,i=Rn.v(e),s=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||s)}static C(){var e;return typeof process!="undefined"&&((e=process.__PRIVATE_env)===null||e===void 0?void 0:e.F)==="YES"}static M(e,n){return e.store(n)}static S(e){const n=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=n?n[1].split("_").slice(0,2).join("."):"-1";return Number(r)}static v(e){const n=e.match(/Android ([\d.]+)/i),r=n?n[1].split(".").slice(0,2).join("."):"-1";return Number(r)}async O(e){return this.db||(x("SimpleDb","Opening database:",this.name),this.db=await new Promise((n,r)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const o=s.target.result;n(o)},i.onblocked=()=>{r(new Bl(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const o=s.target.error;o.name==="VersionError"?r(new b(P.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new b(P.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new Bl(e,o))},i.onupgradeneeded=s=>{x("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const o=s.target.result;this.p.N(o,i.transaction,s.oldVersion,this.version).next(()=>{x("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.L&&(this.db.onversionchange=n=>this.L(n)),this.db}B(e){this.L=e,this.db&&(this.db.onversionchange=n=>e(n))}async runTransaction(e,n,r,i){const s=n==="readonly";let o=0;for(;;){++o;try{this.db=await this.O(e);const a=Mf.open(this.db,e,s?"readonly":"readwrite",r),l=i(a).next(u=>(a.g(),u)).catch(u=>(a.abort(u),T.reject(u))).toPromise();return l.catch(()=>{}),await a.m,l}catch(a){const l=a,u=l.name!=="FirebaseError"&&o<3;if(x("SimpleDb","Transaction failed with error:",l.message,"Retrying:",u),this.close(),!u)return Promise.reject(l)}}}close(){this.db&&this.db.close(),this.db=void 0}}class wU{constructor(e){this.k=e,this.q=!1,this.K=null}get isDone(){return this.q}get $(){return this.K}set cursor(e){this.k=e}done(){this.q=!0}U(e){this.K=e}delete(){return os(this.k.delete())}}class Bl extends b{constructor(e,n){super(P.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${n}`),this.name="IndexedDbTransactionError"}}function Xi(t){return t.name==="IndexedDbTransactionError"}class IU{constructor(e){this.store=e}put(e,n){let r;return n!==void 0?(x("SimpleDb","PUT",this.store.name,e,n),r=this.store.put(n,e)):(x("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),os(r)}add(e){return x("SimpleDb","ADD",this.store.name,e,e),os(this.store.add(e))}get(e){return os(this.store.get(e)).next(n=>(n===void 0&&(n=null),x("SimpleDb","GET",this.store.name,e,n),n))}delete(e){return x("SimpleDb","DELETE",this.store.name,e),os(this.store.delete(e))}count(){return x("SimpleDb","COUNT",this.store.name),os(this.store.count())}W(e,n){const r=this.options(e,n),i=r.index?this.store.index(r.index):this.store;if(typeof i.getAll=="function"){const s=i.getAll(r.range);return new T((o,a)=>{s.onerror=l=>{a(l.target.error)},s.onsuccess=l=>{o(l.target.result)}})}{const s=this.cursor(r),o=[];return this.G(s,(a,l)=>{o.push(l)}).next(()=>o)}}j(e,n){const r=this.store.getAll(e,n===null?void 0:n);return new T((i,s)=>{r.onerror=o=>{s(o.target.error)},r.onsuccess=o=>{i(o.target.result)}})}H(e,n){x("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,n);r.J=!1;const i=this.cursor(r);return this.G(i,(s,o,a)=>a.delete())}Y(e,n){let r;n?r=e:(r={},n=e);const i=this.cursor(r);return this.G(i,n)}Z(e){const n=this.cursor({});return new T((r,i)=>{n.onerror=s=>{const o=dv(s.target.error);i(o)},n.onsuccess=s=>{const o=s.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}G(e,n){const r=[];return new T((i,s)=>{e.onerror=o=>{s(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void i();const l=new wU(a),u=n(a.primaryKey,a.value,l);if(u instanceof T){const c=u.catch(d=>(l.done(),T.reject(d)));r.push(c)}l.isDone?i():l.$===null?a.continue():a.continue(l.$)}}).next(()=>T.waitFor(r))}options(e,n){let r;return e!==void 0&&(typeof e=="string"?r=e:n=e),{index:r,range:n}}cursor(e){let n="next";if(e.reverse&&(n="prev"),e.index){const r=this.store.index(e.index);return e.J?r.openKeyCursor(e.range,n):r.openCursor(e.range,n)}return this.store.openCursor(e.range,n)}}function os(t){return new T((e,n)=>{t.onsuccess=r=>{const i=r.target.result;e(i)},t.onerror=r=>{const i=dv(r.target.error);n(i)}})}let $E=!1;function dv(t){const e=Rn.S(De());if(e>=12.2&&e<13){const n="An internal error was encountered in the Indexed Database server";if(t.message.indexOf(n)>=0){const r=new b("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${n}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return $E||($E=!0,setTimeout(()=>{throw r},0)),r}}return t}class EU{constructor(e,n){this.asyncQueue=e,this.X=n,this.task=null}start(){this.ee(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}ee(e){x("IndexBackfiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{x("IndexBackfiller",`Documents written: ${await this.X.te()}`)}catch(n){Xi(n)?x("IndexBackfiller","Ignoring IndexedDB error during index backfill: ",n):await Yi(n)}await this.ee(6e4)})}}class TU{constructor(e,n){this.localStore=e,this.persistence=n}async te(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",n=>this.ne(n,e))}ne(e,n){const r=new Set;let i=n,s=!0;return T.doWhile(()=>s===!0&&i>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!r.has(o))return x("IndexBackfiller",`Processing collection: ${o}`),this.re(e,o,i).next(a=>{i-=a,r.add(o)});s=!1})).next(()=>n-i)}re(e,n,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,n).next(i=>this.localStore.localDocuments.getNextDocuments(e,n,i,r).next(s=>{const o=s.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.ie(i,s)).next(a=>(x("IndexBackfiller",`Updating offset: ${a}`),this.localStore.indexManager.updateCollectionGroup(e,n,a))).next(()=>o.size)}))}ie(e,n){let r=e;return n.changes.forEach((i,s)=>{const o=mP(s);cv(o,r)>0&&(r=o)}),new gn(r.readTime,r.documentKey,Math.max(n.batchId,e.largestBatchId))}}/**
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
 */class Jt{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.se(r),this.oe=r=>n.writeSequenceNumber(r))}se(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.oe&&this.oe(e),e}}Jt._e=-1;function gc(t){return t==null}function Nu(t){return t===0&&1/t==-1/0}function yP(t){return typeof t=="number"&&Number.isInteger(t)&&!Nu(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function Bt(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=BE(e)),e=SU(t.get(n),e);return BE(e)}function SU(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case"":n+="";break;default:n+=s}}return n}function BE(t){return t+""}function ur(t){const e=t.length;if(j(e>=2),e===2)return j(t.charAt(0)===""&&t.charAt(1)===""),se.emptyPath();const n=e-2,r=[];let i="";for(let s=0;s<e;){const o=t.indexOf("",s);switch((o<0||o>n)&&$(),t.charAt(o+1)){case"":const a=t.substring(s,o);let l;i.length===0?l=a:(i+=a,l=i,i=""),r.push(l);break;case"":i+=t.substring(s,o),i+="\0";break;case"":i+=t.substring(s,o+1);break;default:$()}s=o+2}return new se(r)}/**
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
 */const zE=["userId","batchId"];/**
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
 */function Nd(t,e){return[t,Bt(e)]}function vP(t,e,n){return[t,Bt(e),n]}const RU={},AU=["prefixPath","collectionGroup","readTime","documentId"],PU=["prefixPath","collectionGroup","documentId"],CU=["collectionGroup","readTime","prefixPath","documentId"],kU=["canonicalId","targetId"],bU=["targetId","path"],xU=["path","targetId"],DU=["collectionId","parent"],NU=["indexId","uid"],OU=["uid","sequenceNumber"],VU=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],LU=["indexId","uid","orderedDocumentKey"],MU=["userId","collectionPath","documentId"],FU=["userId","collectionPath","largestBatchId"],UU=["userId","collectionGroup","largestBatchId"],wP=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],$U=[...wP,"documentOverlays"],IP=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],EP=IP,BU=[...EP,"indexConfiguration","indexState","indexEntries"];/**
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
 */class $g extends _P{constructor(e,n){super(),this.ae=e,this.currentSequenceNumber=n}}function ht(t,e){const n=F(t);return Rn.M(n.ae,e)}/**
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
 */function jE(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Qs(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function TP(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class we{constructor(e,n){this.comparator=e,this.root=n||gt.EMPTY}insert(e,n){return new we(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,gt.BLACK,null,null))}remove(e){return new we(this.comparator,this.root.remove(e,this.comparator).copy(null,null,gt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ad(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ad(this.root,e,this.comparator,!1)}getReverseIterator(){return new ad(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ad(this.root,e,this.comparator,!0)}}class ad{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class gt{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r!=null?r:gt.RED,this.left=i!=null?i:gt.EMPTY,this.right=s!=null?s:gt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new gt(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,i!=null?i:this.left,s!=null?s:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return gt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return gt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,gt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,gt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw $();const e=this.left.check();if(e!==this.right.check())throw $();return e+(this.isRed()?0:1)}}gt.EMPTY=null,gt.RED=!0,gt.BLACK=!1;gt.EMPTY=new class{constructor(){this.size=0}get key(){throw $()}get value(){throw $()}get color(){throw $()}get left(){throw $()}get right(){throw $()}copy(e,n,r,i,s){return this}insert(e,n,r){return new gt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class _e{constructor(e){this.comparator=e,this.data=new we(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new qE(this.data.getIterator())}getIteratorFrom(e){return new qE(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof _e)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new _e(this.comparator);return n.data=e,n}}class qE{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function uo(t){return t.hasNext()?t.getNext():void 0}/**
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
 */class Zt{constructor(e){this.fields=e,e.sort(ke.comparator)}static empty(){return new Zt([])}unionWith(e){let n=new _e(ke.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Zt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ca(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class SP extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */function zU(){return typeof atob!="undefined"}/**
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
 */class nt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException!="undefined"&&s instanceof DOMException?new SP("Invalid base64 string: "+s):s}}(e);return new nt(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new nt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ee(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}nt.EMPTY_BYTE_STRING=new nt("");const jU=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Li(t){if(j(!!t),typeof t=="string"){let e=0;const n=jU.exec(t);if(j(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Fe(t.seconds),nanos:Fe(t.nanos)}}function Fe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Mi(t){return typeof t=="string"?nt.fromBase64String(t):nt.fromUint8Array(t)}/**
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
 */function Ff(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function hv(t){const e=t.mapValue.fields.__previous_value__;return Ff(e)?hv(e):e}function Ou(t){const e=Li(t.mapValue.fields.__local_write_time__.timestampValue);return new xe(e.seconds,e.nanos)}/**
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
 */class qU{constructor(e,n,r,i,s,o,a,l,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u}}class Fi{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Fi("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Fi&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const wi={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},Od={nullValue:"NULL_VALUE"};function Os(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Ff(t)?4:RP(t)?9007199254740991:10:$()}function vr(t,e){if(t===e)return!0;const n=Os(t);if(n!==Os(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ou(t).isEqual(Ou(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Li(i.timestampValue),a=Li(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Mi(i.bytesValue).isEqual(Mi(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Fe(i.geoPointValue.latitude)===Fe(s.geoPointValue.latitude)&&Fe(i.geoPointValue.longitude)===Fe(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Fe(i.integerValue)===Fe(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Fe(i.doubleValue),a=Fe(s.doubleValue);return o===a?Nu(o)===Nu(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return ca(t.arrayValue.values||[],e.arrayValue.values||[],vr);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(jE(o)!==jE(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!vr(o[l],a[l])))return!1;return!0}(t,e);default:return $()}}function Vu(t,e){return(t.values||[]).find(n=>vr(n,e))!==void 0}function Ui(t,e){if(t===e)return 0;const n=Os(t),r=Os(e);if(n!==r)return ee(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ee(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=Fe(s.integerValue||s.doubleValue),l=Fe(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return WE(t.timestampValue,e.timestampValue);case 4:return WE(Ou(t),Ou(e));case 5:return ee(t.stringValue,e.stringValue);case 6:return function(s,o){const a=Mi(s),l=Mi(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),l=o.split("/");for(let u=0;u<a.length&&u<l.length;u++){const c=ee(a[u],l[u]);if(c!==0)return c}return ee(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=ee(Fe(s.latitude),Fe(o.latitude));return a!==0?a:ee(Fe(s.longitude),Fe(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,o){const a=s.values||[],l=o.values||[];for(let u=0;u<a.length&&u<l.length;++u){const c=Ui(a[u],l[u]);if(c)return c}return ee(a.length,l.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===wi.mapValue&&o===wi.mapValue)return 0;if(s===wi.mapValue)return 1;if(o===wi.mapValue)return-1;const a=s.fields||{},l=Object.keys(a),u=o.fields||{},c=Object.keys(u);l.sort(),c.sort();for(let d=0;d<l.length&&d<c.length;++d){const h=ee(l[d],c[d]);if(h!==0)return h;const f=Ui(a[l[d]],u[c[d]]);if(f!==0)return f}return ee(l.length,c.length)}(t.mapValue,e.mapValue);default:throw $()}}function WE(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ee(t,e);const n=Li(t),r=Li(e),i=ee(n.seconds,r.seconds);return i!==0?i:ee(n.nanos,r.nanos)}function da(t){return Bg(t)}function Bg(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Li(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Mi(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return L.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Bg(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Bg(n.fields[o])}`;return i+"}"}(t.mapValue):$()}function Vs(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function zg(t){return!!t&&"integerValue"in t}function Lu(t){return!!t&&"arrayValue"in t}function GE(t){return!!t&&"nullValue"in t}function HE(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Vd(t){return!!t&&"mapValue"in t}function zl(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Qs(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=zl(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=zl(t.arrayValue.values[n]);return e}return Object.assign({},t)}function RP(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}function WU(t){return"nullValue"in t?Od:"booleanValue"in t?{booleanValue:!1}:"integerValue"in t||"doubleValue"in t?{doubleValue:NaN}:"timestampValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in t?{stringValue:""}:"bytesValue"in t?{bytesValue:""}:"referenceValue"in t?Vs(Fi.empty(),L.empty()):"geoPointValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in t?{arrayValue:{}}:"mapValue"in t?{mapValue:{}}:$()}function GU(t){return"nullValue"in t?{booleanValue:!1}:"booleanValue"in t?{doubleValue:NaN}:"integerValue"in t||"doubleValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in t?{stringValue:""}:"stringValue"in t?{bytesValue:""}:"bytesValue"in t?Vs(Fi.empty(),L.empty()):"referenceValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in t?{arrayValue:{}}:"arrayValue"in t?{mapValue:{}}:"mapValue"in t?wi:$()}function KE(t,e){const n=Ui(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?-1:!t.inclusive&&e.inclusive?1:0}function QE(t,e){const n=Ui(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?1:!t.inclusive&&e.inclusive?-1:0}/**
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
 */class yt{constructor(e){this.value=e}static empty(){return new yt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Vd(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=zl(n)}setAll(e){let n=ke.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=zl(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Vd(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return vr(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Vd(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Qs(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new yt(zl(this.value))}}function AP(t){const e=[];return Qs(t.fields,(n,r)=>{const i=new ke([n]);if(Vd(r)){const s=AP(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Zt(e)}/**
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
 */class Te{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Te(e,0,G.min(),G.min(),G.min(),yt.empty(),0)}static newFoundDocument(e,n,r,i){return new Te(e,1,n,G.min(),r,i,0)}static newNoDocument(e,n){return new Te(e,2,n,G.min(),G.min(),yt.empty(),0)}static newUnknownDocument(e,n){return new Te(e,3,n,G.min(),G.min(),yt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(G.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=yt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=yt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=G.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Te&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Te(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class $i{constructor(e,n){this.position=e,this.inclusive=n}}function YE(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=L.comparator(L.fromName(o.referenceValue),n.key):r=Ui(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function XE(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!vr(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Mu{constructor(e,n="asc"){this.field=e,this.dir=n}}function HU(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class PP{}class oe extends PP{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new KU(e,n,r):n==="array-contains"?new XU(e,r):n==="in"?new NP(e,r):n==="not-in"?new JU(e,r):n==="array-contains-any"?new ZU(e,r):new oe(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new QU(e,r):new YU(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Ui(n,this.value)):n!==null&&Os(this.value)===Os(n)&&this.matchesComparison(Ui(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return $()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class fe extends PP{constructor(e,n){super(),this.filters=e,this.op=n,this.ue=null}static create(e,n){return new fe(e,n)}matches(e){return ha(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ue!==null||(this.ue=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function ha(t){return t.op==="and"}function jg(t){return t.op==="or"}function fv(t){return CP(t)&&ha(t)}function CP(t){for(const e of t.filters)if(e instanceof fe)return!1;return!0}function qg(t){if(t instanceof oe)return t.field.canonicalString()+t.op.toString()+da(t.value);if(fv(t))return t.filters.map(e=>qg(e)).join(",");{const e=t.filters.map(n=>qg(n)).join(",");return`${t.op}(${e})`}}function kP(t,e){return t instanceof oe?function(r,i){return i instanceof oe&&r.op===i.op&&r.field.isEqual(i.field)&&vr(r.value,i.value)}(t,e):t instanceof fe?function(r,i){return i instanceof fe&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&kP(o,i.filters[a]),!0):!1}(t,e):void $()}function bP(t,e){const n=t.filters.concat(e);return fe.create(n,t.op)}function xP(t){return t instanceof oe?function(n){return`${n.field.canonicalString()} ${n.op} ${da(n.value)}`}(t):t instanceof fe?function(n){return n.op.toString()+" {"+n.getFilters().map(xP).join(" ,")+"}"}(t):"Filter"}class KU extends oe{constructor(e,n,r){super(e,n,r),this.key=L.fromName(r.referenceValue)}matches(e){const n=L.comparator(e.key,this.key);return this.matchesComparison(n)}}class QU extends oe{constructor(e,n){super(e,"in",n),this.keys=DP("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class YU extends oe{constructor(e,n){super(e,"not-in",n),this.keys=DP("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function DP(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>L.fromName(r.referenceValue))}class XU extends oe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Lu(n)&&Vu(n.arrayValue,this.value)}}class NP extends oe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Vu(this.value.arrayValue,n)}}class JU extends oe{constructor(e,n){super(e,"not-in",n)}matches(e){if(Vu(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Vu(this.value.arrayValue,n)}}class ZU extends oe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Lu(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Vu(this.value.arrayValue,r))}}/**
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
 */class e4{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ce=null}}function Wg(t,e=null,n=[],r=[],i=null,s=null,o=null){return new e4(t,e,n,r,i,s,o)}function Ls(t){const e=F(t);if(e.ce===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>qg(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),gc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>da(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>da(r)).join(",")),e.ce=n}return e.ce}function _c(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!HU(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!kP(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!XE(t.startAt,e.startAt)&&XE(t.endAt,e.endAt)}function Ph(t){return L.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function Ch(t,e){return t.filters.filter(n=>n instanceof oe&&n.field.isEqual(e))}function JE(t,e,n){let r=Od,i=!0;for(const s of Ch(t,e)){let o=Od,a=!0;switch(s.op){case"<":case"<=":o=WU(s.value);break;case"==":case"in":case">=":o=s.value;break;case">":o=s.value,a=!1;break;case"!=":case"not-in":o=Od}KE({value:r,inclusive:i},{value:o,inclusive:a})<0&&(r=o,i=a)}if(n!==null){for(let s=0;s<t.orderBy.length;++s)if(t.orderBy[s].field.isEqual(e)){const o=n.position[s];KE({value:r,inclusive:i},{value:o,inclusive:n.inclusive})<0&&(r=o,i=n.inclusive);break}}return{value:r,inclusive:i}}function ZE(t,e,n){let r=wi,i=!0;for(const s of Ch(t,e)){let o=wi,a=!0;switch(s.op){case">=":case">":o=GU(s.value),a=!1;break;case"==":case"in":case"<=":o=s.value;break;case"<":o=s.value,a=!1;break;case"!=":case"not-in":o=wi}QE({value:r,inclusive:i},{value:o,inclusive:a})>0&&(r=o,i=a)}if(n!==null){for(let s=0;s<t.orderBy.length;++s)if(t.orderBy[s].field.isEqual(e)){const o=n.position[s];QE({value:r,inclusive:i},{value:o,inclusive:n.inclusive})>0&&(r=o,i=n.inclusive);break}}return{value:r,inclusive:i}}/**
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
 */class Yr{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function OP(t,e,n,r,i,s,o,a){return new Yr(t,e,n,r,i,s,o,a)}function Oa(t){return new Yr(t)}function e0(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function pv(t){return t.collectionGroup!==null}function Ho(t){const e=F(t);if(e.le===null){e.le=[];const n=new Set;for(const s of e.explicitOrderBy)e.le.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new _e(ke.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(u=>{u.isInequality()&&(a=a.add(u.field))})}),a})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.le.push(new Mu(s,r))}),n.has(ke.keyField().canonicalString())||e.le.push(new Mu(ke.keyField(),r))}return e.le}function zt(t){const e=F(t);return e.he||(e.he=t4(e,Ho(t))),e.he}function t4(t,e){if(t.limitType==="F")return Wg(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Mu(i.field,s)});const n=t.endAt?new $i(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new $i(t.startAt.position,t.startAt.inclusive):null;return Wg(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Gg(t,e){const n=t.filters.concat([e]);return new Yr(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function kh(t,e,n){return new Yr(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function yc(t,e){return _c(zt(t),zt(e))&&t.limitType===e.limitType}function VP(t){return`${Ls(zt(t))}|lt:${t.limitType}`}function _o(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>xP(i)).join(", ")}]`),gc(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>da(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>da(i)).join(",")),`Target(${r})`}(zt(t))}; limitType=${t.limitType})`}function vc(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):L.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of Ho(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,l){const u=YE(o,a,l);return o.inclusive?u<=0:u<0}(r.startAt,Ho(r),i)||r.endAt&&!function(o,a,l){const u=YE(o,a,l);return o.inclusive?u>=0:u>0}(r.endAt,Ho(r),i))}(t,e)}function LP(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function MP(t){return(e,n)=>{let r=!1;for(const i of Ho(t)){const s=n4(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function n4(t,e,n){const r=t.field.isKeyField()?L.comparator(e.key,n.key):function(s,o,a){const l=o.data.field(s),u=a.data.field(s);return l!==null&&u!==null?Ui(l,u):$()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return $()}}/**
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
 */class Ji{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Qs(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return TP(this.inner)}size(){return this.innerSize}}/**
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
 */const r4=new we(L.comparator);function en(){return r4}const FP=new we(L.comparator);function Rl(...t){let e=FP;for(const n of t)e=e.insert(n.key,n);return e}function UP(t){let e=FP;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function cr(){return jl()}function $P(){return jl()}function jl(){return new Ji(t=>t.toString(),(t,e)=>t.isEqual(e))}const i4=new we(L.comparator),s4=new _e(L.comparator);function te(...t){let e=s4;for(const n of t)e=e.add(n);return e}const o4=new _e(ee);function mv(){return o4}/**
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
 */function BP(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Nu(e)?"-0":e}}function zP(t){return{integerValue:""+t}}function jP(t,e){return yP(e)?zP(e):BP(t,e)}/**
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
 */class Uf{constructor(){this._=void 0}}function a4(t,e,n){return t instanceof fa?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Ff(s)&&(s=hv(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof Ms?WP(t,e):t instanceof Fs?GP(t,e):function(i,s){const o=qP(i,s),a=t0(o)+t0(i.Ie);return zg(o)&&zg(i.Ie)?zP(a):BP(i.serializer,a)}(t,e)}function l4(t,e,n){return t instanceof Ms?WP(t,e):t instanceof Fs?GP(t,e):n}function qP(t,e){return t instanceof pa?function(r){return zg(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class fa extends Uf{}class Ms extends Uf{constructor(e){super(),this.elements=e}}function WP(t,e){const n=HP(e);for(const r of t.elements)n.some(i=>vr(i,r))||n.push(r);return{arrayValue:{values:n}}}class Fs extends Uf{constructor(e){super(),this.elements=e}}function GP(t,e){let n=HP(e);for(const r of t.elements)n=n.filter(i=>!vr(i,r));return{arrayValue:{values:n}}}class pa extends Uf{constructor(e,n){super(),this.serializer=e,this.Ie=n}}function t0(t){return Fe(t.integerValue||t.doubleValue)}function HP(t){return Lu(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class wc{constructor(e,n){this.field=e,this.transform=n}}function u4(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Ms&&i instanceof Ms||r instanceof Fs&&i instanceof Fs?ca(r.elements,i.elements,vr):r instanceof pa&&i instanceof pa?vr(r.Ie,i.Ie):r instanceof fa&&i instanceof fa}(t.transform,e.transform)}class c4{constructor(e,n){this.version=e,this.transformResults=n}}class be{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new be}static exists(e){return new be(void 0,e)}static updateTime(e){return new be(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ld(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class $f{}function KP(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new La(t.key,be.none()):new Va(t.key,t.data,be.none());{const n=t.data,r=yt.empty();let i=new _e(ke.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Xr(t.key,r,new Zt(i.toArray()),be.none())}}function d4(t,e,n){t instanceof Va?function(i,s,o){const a=i.value.clone(),l=r0(i.fieldTransforms,s,o.transformResults);a.setAll(l),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof Xr?function(i,s,o){if(!Ld(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=r0(i.fieldTransforms,s,o.transformResults),l=s.data;l.setAll(QP(i)),l.setAll(a),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function ql(t,e,n,r){return t instanceof Va?function(s,o,a,l){if(!Ld(s.precondition,o))return a;const u=s.value.clone(),c=i0(s.fieldTransforms,l,o);return u.setAll(c),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof Xr?function(s,o,a,l){if(!Ld(s.precondition,o))return a;const u=i0(s.fieldTransforms,l,o),c=o.data;return c.setAll(QP(s)),c.setAll(u),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(d=>d.field))}(t,e,n,r):function(s,o,a){return Ld(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function h4(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=qP(r.transform,i||null);s!=null&&(n===null&&(n=yt.empty()),n.set(r.field,s))}return n||null}function n0(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&ca(r,i,(s,o)=>u4(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Va extends $f{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Xr extends $f{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function QP(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function r0(t,e,n){const r=new Map;j(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,l4(o,a,n[i]))}return r}function i0(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,a4(s,o,e))}return r}class La extends $f{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class gv extends $f{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class _v{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&d4(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=ql(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=ql(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=$P();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=KP(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(G.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),te())}isEqual(e){return this.batchId===e.batchId&&ca(this.mutations,e.mutations,(n,r)=>n0(n,r))&&ca(this.baseMutations,e.baseMutations,(n,r)=>n0(n,r))}}class yv{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){j(e.mutations.length===r.length);let i=function(){return i4}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new yv(e,n,r,i)}}/**
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
 */class vv{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class f4{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Qe,ue;function YP(t){switch(t){default:return $();case P.CANCELLED:case P.UNKNOWN:case P.DEADLINE_EXCEEDED:case P.RESOURCE_EXHAUSTED:case P.INTERNAL:case P.UNAVAILABLE:case P.UNAUTHENTICATED:return!1;case P.INVALID_ARGUMENT:case P.NOT_FOUND:case P.ALREADY_EXISTS:case P.PERMISSION_DENIED:case P.FAILED_PRECONDITION:case P.ABORTED:case P.OUT_OF_RANGE:case P.UNIMPLEMENTED:case P.DATA_LOSS:return!0}}function XP(t){if(t===void 0)return He("GRPC error has no .code"),P.UNKNOWN;switch(t){case Qe.OK:return P.OK;case Qe.CANCELLED:return P.CANCELLED;case Qe.UNKNOWN:return P.UNKNOWN;case Qe.DEADLINE_EXCEEDED:return P.DEADLINE_EXCEEDED;case Qe.RESOURCE_EXHAUSTED:return P.RESOURCE_EXHAUSTED;case Qe.INTERNAL:return P.INTERNAL;case Qe.UNAVAILABLE:return P.UNAVAILABLE;case Qe.UNAUTHENTICATED:return P.UNAUTHENTICATED;case Qe.INVALID_ARGUMENT:return P.INVALID_ARGUMENT;case Qe.NOT_FOUND:return P.NOT_FOUND;case Qe.ALREADY_EXISTS:return P.ALREADY_EXISTS;case Qe.PERMISSION_DENIED:return P.PERMISSION_DENIED;case Qe.FAILED_PRECONDITION:return P.FAILED_PRECONDITION;case Qe.ABORTED:return P.ABORTED;case Qe.OUT_OF_RANGE:return P.OUT_OF_RANGE;case Qe.UNIMPLEMENTED:return P.UNIMPLEMENTED;case Qe.DATA_LOSS:return P.DATA_LOSS;default:return $()}}(ue=Qe||(Qe={}))[ue.OK=0]="OK",ue[ue.CANCELLED=1]="CANCELLED",ue[ue.UNKNOWN=2]="UNKNOWN",ue[ue.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ue[ue.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ue[ue.NOT_FOUND=5]="NOT_FOUND",ue[ue.ALREADY_EXISTS=6]="ALREADY_EXISTS",ue[ue.PERMISSION_DENIED=7]="PERMISSION_DENIED",ue[ue.UNAUTHENTICATED=16]="UNAUTHENTICATED",ue[ue.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ue[ue.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ue[ue.ABORTED=10]="ABORTED",ue[ue.OUT_OF_RANGE=11]="OUT_OF_RANGE",ue[ue.UNIMPLEMENTED=12]="UNIMPLEMENTED",ue[ue.INTERNAL=13]="INTERNAL",ue[ue.UNAVAILABLE=14]="UNAVAILABLE",ue[ue.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function JP(){return new TextEncoder}/**
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
 */const p4=new Go([4294967295,4294967295],0);function s0(t){const e=JP().encode(t),n=new lU;return n.update(e),new Uint8Array(n.digest())}function o0(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Go([n,r],0),new Go([i,s],0)]}class wv{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Al(`Invalid padding: ${n}`);if(r<0)throw new Al(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Al(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Al(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*e.length-n,this.Ee=Go.fromNumber(this.Te)}de(e,n,r){let i=e.add(n.multiply(Go.fromNumber(r)));return i.compare(p4)===1&&(i=new Go([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Ee).toNumber()}Ae(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const n=s0(e),[r,i]=o0(n);for(let s=0;s<this.hashCount;s++){const o=this.de(r,i,s);if(!this.Ae(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new wv(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Te===0)return;const n=s0(e),[r,i]=o0(n);for(let s=0;s<this.hashCount;s++){const o=this.de(r,i,s);this.Re(o)}}Re(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Al extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Ic{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Ec.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Ic(G.min(),i,new we(ee),en(),te())}}class Ec{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Ec(r,n,te(),te(),te())}}/**
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
 */class Md{constructor(e,n,r,i){this.Ve=e,this.removedTargetIds=n,this.key=r,this.me=i}}class ZP{constructor(e,n){this.targetId=e,this.fe=n}}class eC{constructor(e,n,r=nt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class a0{constructor(){this.ge=0,this.pe=u0(),this.ye=nt.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return this.ge!==0}get De(){return this.Se}Ce(e){e.approximateByteSize()>0&&(this.Se=!0,this.ye=e)}ve(){let e=te(),n=te(),r=te();return this.pe.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:$()}}),new Ec(this.ye,this.we,e,n,r)}Fe(){this.Se=!1,this.pe=u0()}Me(e,n){this.Se=!0,this.pe=this.pe.insert(e,n)}xe(e){this.Se=!0,this.pe=this.pe.remove(e)}Oe(){this.ge+=1}Ne(){this.ge-=1,j(this.ge>=0)}Le(){this.Se=!0,this.we=!0}}class m4{constructor(e){this.Be=e,this.ke=new Map,this.qe=en(),this.Qe=l0(),this.Ke=new we(ee)}$e(e){for(const n of e.Ve)e.me&&e.me.isFoundDocument()?this.Ue(n,e.me):this.We(n,e.key,e.me);for(const n of e.removedTargetIds)this.We(n,e.key,e.me)}Ge(e){this.forEachTarget(e,n=>{const r=this.ze(n);switch(e.state){case 0:this.je(n)&&r.Ce(e.resumeToken);break;case 1:r.Ne(),r.be||r.Fe(),r.Ce(e.resumeToken);break;case 2:r.Ne(),r.be||this.removeTarget(n);break;case 3:this.je(n)&&(r.Le(),r.Ce(e.resumeToken));break;case 4:this.je(n)&&(this.He(n),r.Ce(e.resumeToken));break;default:$()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ke.forEach((r,i)=>{this.je(i)&&n(i)})}Je(e){const n=e.targetId,r=e.fe.count,i=this.Ye(n);if(i){const s=i.target;if(Ph(s))if(r===0){const o=new L(s.path);this.We(n,o,Te.newNoDocument(o,G.min()))}else j(r===1);else{const o=this.Ze(n);if(o!==r){const a=this.Xe(e),l=a?this.et(a,e,o):1;if(l!==0){this.He(n);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,u)}}}}}Xe(e){const n=e.fe.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=Mi(r).toUint8Array()}catch(l){if(l instanceof SP)return Gn("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new wv(o,i,s)}catch(l){return Gn(l instanceof Al?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Te===0?null:a}et(e,n,r){return n.fe.count===r-this.rt(e,n.targetId)?0:2}rt(e,n){const r=this.Be.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Be.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.We(n,s,null),i++)}),i}it(e){const n=new Map;this.ke.forEach((s,o)=>{const a=this.Ye(o);if(a){if(s.current&&Ph(a.target)){const l=new L(a.target.path);this.qe.get(l)!==null||this.st(o,l)||this.We(o,l,Te.newNoDocument(l,e))}s.De&&(n.set(o,s.ve()),s.Fe())}});let r=te();this.Qe.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.Ye(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.qe.forEach((s,o)=>o.setReadTime(e));const i=new Ic(e,n,this.Ke,this.qe,r);return this.qe=en(),this.Qe=l0(),this.Ke=new we(ee),i}Ue(e,n){if(!this.je(e))return;const r=this.st(e,n.key)?2:0;this.ze(e).Me(n.key,r),this.qe=this.qe.insert(n.key,n),this.Qe=this.Qe.insert(n.key,this.ot(n.key).add(e))}We(e,n,r){if(!this.je(e))return;const i=this.ze(e);this.st(e,n)?i.Me(n,1):i.xe(n),this.Qe=this.Qe.insert(n,this.ot(n).delete(e)),r&&(this.qe=this.qe.insert(n,r))}removeTarget(e){this.ke.delete(e)}Ze(e){const n=this.ze(e).ve();return this.Be.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Oe(e){this.ze(e).Oe()}ze(e){let n=this.ke.get(e);return n||(n=new a0,this.ke.set(e,n)),n}ot(e){let n=this.Qe.get(e);return n||(n=new _e(ee),this.Qe=this.Qe.insert(e,n)),n}je(e){const n=this.Ye(e)!==null;return n||x("WatchChangeAggregator","Detected inactive target",e),n}Ye(e){const n=this.ke.get(e);return n&&n.be?null:this.Be._t(e)}He(e){this.ke.set(e,new a0),this.Be.getRemoteKeysForTarget(e).forEach(n=>{this.We(e,n,null)})}st(e,n){return this.Be.getRemoteKeysForTarget(e).has(n)}}function l0(){return new we(L.comparator)}function u0(){return new we(L.comparator)}const g4=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),_4=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),y4=(()=>({and:"AND",or:"OR"}))();class v4{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Hg(t,e){return t.useProto3Json||gc(e)?e:{value:e}}function ma(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function tC(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function w4(t,e){return ma(t,e.toTimestamp())}function Ke(t){return j(!!t),G.fromTimestamp(function(n){const r=Li(n);return new xe(r.seconds,r.nanos)}(t))}function Iv(t,e){return Kg(t,e).canonicalString()}function Kg(t,e){const n=function(i){return new se(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function nC(t){const e=se.fromString(t);return j(hC(e)),e}function Fu(t,e){return Iv(t.databaseId,e.path)}function mr(t,e){const n=nC(e);if(n.get(1)!==t.databaseId.projectId)throw new b(P.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new b(P.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new L(sC(n))}function rC(t,e){return Iv(t.databaseId,e)}function iC(t){const e=nC(t);return e.length===4?se.emptyPath():sC(e)}function Qg(t){return new se(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function sC(t){return j(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function c0(t,e,n){return{name:Fu(t,e),fields:n.value.mapValue.fields}}function oC(t,e,n){const r=mr(t,e.name),i=Ke(e.updateTime),s=e.createTime?Ke(e.createTime):G.min(),o=new yt({mapValue:{fields:e.fields}}),a=Te.newFoundDocument(r,i,s,o);return n&&a.setHasCommittedMutations(),n?a.setHasCommittedMutations():a}function I4(t,e){return"found"in e?function(r,i){j(!!i.found),i.found.name,i.found.updateTime;const s=mr(r,i.found.name),o=Ke(i.found.updateTime),a=i.found.createTime?Ke(i.found.createTime):G.min(),l=new yt({mapValue:{fields:i.found.fields}});return Te.newFoundDocument(s,o,a,l)}(t,e):"missing"in e?function(r,i){j(!!i.missing),j(!!i.readTime);const s=mr(r,i.missing),o=Ke(i.readTime);return Te.newNoDocument(s,o)}(t,e):$()}function E4(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:$()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(u,c){return u.useProto3Json?(j(c===void 0||typeof c=="string"),nt.fromBase64String(c||"")):(j(c===void 0||c instanceof Uint8Array),nt.fromUint8Array(c||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const c=u.code===void 0?P.UNKNOWN:XP(u.code);return new b(c,u.message||"")}(o);n=new eC(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=mr(t,r.document.name),s=Ke(r.document.updateTime),o=r.document.createTime?Ke(r.document.createTime):G.min(),a=new yt({mapValue:{fields:r.document.fields}}),l=Te.newFoundDocument(i,s,o,a),u=r.targetIds||[],c=r.removedTargetIds||[];n=new Md(u,c,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=mr(t,r.document),s=r.readTime?Ke(r.readTime):G.min(),o=Te.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Md([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=mr(t,r.document),s=r.removedTargetIds||[];n=new Md([],s,i,null)}else{if(!("filter"in e))return $();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new f4(i,s),a=r.targetId;n=new ZP(a,o)}}return n}function Uu(t,e){let n;if(e instanceof Va)n={update:c0(t,e.key,e.value)};else if(e instanceof La)n={delete:Fu(t,e.key)};else if(e instanceof Xr)n={update:c0(t,e.key,e.data),updateMask:C4(e.fieldMask)};else{if(!(e instanceof gv))return $();n={verify:Fu(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof fa)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Ms)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Fs)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof pa)return{fieldPath:o.field.canonicalString(),increment:a.Ie};throw $()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:w4(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:$()}(t,e.precondition)),n}function Yg(t,e){const n=e.currentDocument?function(s){return s.updateTime!==void 0?be.updateTime(Ke(s.updateTime)):s.exists!==void 0?be.exists(s.exists):be.none()}(e.currentDocument):be.none(),r=e.updateTransforms?e.updateTransforms.map(i=>function(o,a){let l=null;if("setToServerValue"in a)j(a.setToServerValue==="REQUEST_TIME"),l=new fa;else if("appendMissingElements"in a){const c=a.appendMissingElements.values||[];l=new Ms(c)}else if("removeAllFromArray"in a){const c=a.removeAllFromArray.values||[];l=new Fs(c)}else"increment"in a?l=new pa(o,a.increment):$();const u=ke.fromServerFormat(a.fieldPath);return new wc(u,l)}(t,i)):[];if(e.update){e.update.name;const i=mr(t,e.update.name),s=new yt({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(l){const u=l.fieldPaths||[];return new Zt(u.map(c=>ke.fromServerFormat(c)))}(e.updateMask);return new Xr(i,s,o,n,r)}return new Va(i,s,n,r)}if(e.delete){const i=mr(t,e.delete);return new La(i,n)}if(e.verify){const i=mr(t,e.verify);return new gv(i,n)}return $()}function T4(t,e){return t&&t.length>0?(j(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?Ke(i.updateTime):Ke(s);return o.isEqual(G.min())&&(o=Ke(s)),new c4(o,i.transformResults||[])}(n,e))):[]}function aC(t,e){return{documents:[rC(t,e.path)]}}function lC(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=rC(t,i);const s=function(u){if(u.length!==0)return dC(fe.create(u,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(u){if(u.length!==0)return u.map(c=>function(h){return{field:yo(h.field),direction:R4(h.dir)}}(c))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=Hg(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{ut:n,parent:i}}function uC(t){let e=iC(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){j(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=function(d){const h=cC(d);return h instanceof fe&&fv(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=function(d){return d.map(h=>function(v){return new Mu(vo(v.field),function(E){switch(E){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(v.direction))}(h))}(n.orderBy));let a=null;n.limit&&(a=function(d){let h;return h=typeof d=="object"?d.value:d,gc(h)?null:h}(n.limit));let l=null;n.startAt&&(l=function(d){const h=!!d.before,f=d.values||[];return new $i(f,h)}(n.startAt));let u=null;return n.endAt&&(u=function(d){const h=!d.before,f=d.values||[];return new $i(f,h)}(n.endAt)),OP(e,i,o,s,a,"F",l,u)}function S4(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return $()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function cC(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=vo(n.unaryFilter.field);return oe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=vo(n.unaryFilter.field);return oe.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=vo(n.unaryFilter.field);return oe.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=vo(n.unaryFilter.field);return oe.create(o,"!=",{nullValue:"NULL_VALUE"});default:return $()}}(t):t.fieldFilter!==void 0?function(n){return oe.create(vo(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return $()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return fe.create(n.compositeFilter.filters.map(r=>cC(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return $()}}(n.compositeFilter.op))}(t):$()}function R4(t){return g4[t]}function A4(t){return _4[t]}function P4(t){return y4[t]}function yo(t){return{fieldPath:t.canonicalString()}}function vo(t){return ke.fromServerFormat(t.fieldPath)}function dC(t){return t instanceof oe?function(n){if(n.op==="=="){if(HE(n.value))return{unaryFilter:{field:yo(n.field),op:"IS_NAN"}};if(GE(n.value))return{unaryFilter:{field:yo(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(HE(n.value))return{unaryFilter:{field:yo(n.field),op:"IS_NOT_NAN"}};if(GE(n.value))return{unaryFilter:{field:yo(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:yo(n.field),op:A4(n.op),value:n.value}}}(t):t instanceof fe?function(n){const r=n.getFilters().map(i=>dC(i));return r.length===1?r[0]:{compositeFilter:{op:P4(n.op),filters:r}}}(t):$()}function C4(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function hC(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class Or{constructor(e,n,r,i,s=G.min(),o=G.min(),a=nt.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new Or(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Or(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Or(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Or(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class fC{constructor(e){this.ct=e}}function k4(t,e){let n;if(e.document)n=oC(t.ct,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=L.fromSegments(e.noDocument.path),i=$s(e.noDocument.readTime);n=Te.newNoDocument(r,i),e.hasCommittedMutations&&n.setHasCommittedMutations()}else{if(!e.unknownDocument)return $();{const r=L.fromSegments(e.unknownDocument.path),i=$s(e.unknownDocument.version);n=Te.newUnknownDocument(r,i)}}return e.readTime&&n.setReadTime(function(i){const s=new xe(i[0],i[1]);return G.fromTimestamp(s)}(e.readTime)),n}function d0(t,e){const n=e.key,r={prefixPath:n.getCollectionPath().popLast().toArray(),collectionGroup:n.collectionGroup,documentId:n.path.lastSegment(),readTime:bh(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=function(s,o){return{name:Fu(s,o.key),fields:o.data.value.mapValue.fields,updateTime:ma(s,o.version.toTimestamp()),createTime:ma(s,o.createTime.toTimestamp())}}(t.ct,e);else if(e.isNoDocument())r.noDocument={path:n.path.toArray(),readTime:Us(e.version)};else{if(!e.isUnknownDocument())return $();r.unknownDocument={path:n.path.toArray(),version:Us(e.version)}}return r}function bh(t){const e=t.toTimestamp();return[e.seconds,e.nanoseconds]}function Us(t){const e=t.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function $s(t){const e=new xe(t.seconds,t.nanoseconds);return G.fromTimestamp(e)}function as(t,e){const n=(e.baseMutations||[]).map(s=>Yg(t.ct,s));for(let s=0;s<e.mutations.length-1;++s){const o=e.mutations[s];if(s+1<e.mutations.length&&e.mutations[s+1].transform!==void 0){const a=e.mutations[s+1];o.updateTransforms=a.transform.fieldTransforms,e.mutations.splice(s+1,1),++s}}const r=e.mutations.map(s=>Yg(t.ct,s)),i=xe.fromMillis(e.localWriteTimeMs);return new _v(e.batchId,i,n,r)}function Pl(t){const e=$s(t.readTime),n=t.lastLimboFreeSnapshotVersion!==void 0?$s(t.lastLimboFreeSnapshotVersion):G.min();let r;return r=function(s){return s.documents!==void 0}(t.query)?function(s){return j(s.documents.length===1),zt(Oa(iC(s.documents[0])))}(t.query):function(s){return zt(uC(s))}(t.query),new Or(r,t.targetId,"TargetPurposeListen",t.lastListenSequenceNumber,e,n,nt.fromBase64String(t.resumeToken))}function pC(t,e){const n=Us(e.snapshotVersion),r=Us(e.lastLimboFreeSnapshotVersion);let i;i=Ph(e.target)?aC(t.ct,e.target):lC(t.ct,e.target).ut;const s=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:Ls(e.target),readTime:n,resumeToken:s,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:i}}function Ev(t){const e=uC({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?kh(e,e.limit,"L"):e}function um(t,e){return new vv(e.largestBatchId,Yg(t.ct,e.overlayMutation))}function h0(t,e){const n=e.path.lastSegment();return[t,Bt(e.path.popLast()),n]}function f0(t,e,n,r){return{indexId:t,uid:e,sequenceNumber:n,readTime:Us(r.readTime),documentKey:Bt(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
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
 */class b4{getBundleMetadata(e,n){return p0(e).get(n).next(r=>{if(r)return function(s){return{id:s.bundleId,createTime:$s(s.createTime),version:s.version}}(r)})}saveBundleMetadata(e,n){return p0(e).put(function(i){return{bundleId:i.id,createTime:Us(Ke(i.createTime)),version:i.version}}(n))}getNamedQuery(e,n){return m0(e).get(n).next(r=>{if(r)return function(s){return{name:s.name,query:Ev(s.bundledQuery),readTime:$s(s.readTime)}}(r)})}saveNamedQuery(e,n){return m0(e).put(function(i){return{name:i.name,readTime:Us(Ke(i.readTime)),bundledQuery:i.bundledQuery}}(n))}}function p0(t){return ht(t,"bundles")}function m0(t){return ht(t,"namedQueries")}/**
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
 */class Bf{constructor(e,n){this.serializer=e,this.userId=n}static lt(e,n){const r=n.uid||"";return new Bf(e,r)}getOverlay(e,n){return cl(e).get(h0(this.userId,n)).next(r=>r?um(this.serializer,r):null)}getOverlays(e,n){const r=cr();return T.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){const i=[];return r.forEach((s,o)=>{const a=new vv(n,o);i.push(this.ht(e,a))}),T.waitFor(i)}removeOverlaysForBatchId(e,n,r){const i=new Set;n.forEach(o=>i.add(Bt(o.getCollectionPath())));const s=[];return i.forEach(o=>{const a=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,r+1],!1,!0);s.push(cl(e).H("collectionPathOverlayIndex",a))}),T.waitFor(s)}getOverlaysForCollection(e,n,r){const i=cr(),s=Bt(n),o=IDBKeyRange.bound([this.userId,s,r],[this.userId,s,Number.POSITIVE_INFINITY],!0);return cl(e).W("collectionPathOverlayIndex",o).next(a=>{for(const l of a){const u=um(this.serializer,l);i.set(u.getKey(),u)}return i})}getOverlaysForCollectionGroup(e,n,r,i){const s=cr();let o;const a=IDBKeyRange.bound([this.userId,n,r],[this.userId,n,Number.POSITIVE_INFINITY],!0);return cl(e).Y({index:"collectionGroupOverlayIndex",range:a},(l,u,c)=>{const d=um(this.serializer,u);s.size()<i||d.largestBatchId===o?(s.set(d.getKey(),d),o=d.largestBatchId):c.done()}).next(()=>s)}ht(e,n){return cl(e).put(function(i,s,o){const[a,l,u]=h0(s,o.mutation.key);return{userId:s,collectionPath:l,documentId:u,collectionGroup:o.mutation.key.getCollectionGroup(),largestBatchId:o.largestBatchId,overlayMutation:Uu(i.ct,o.mutation)}}(this.serializer,this.userId,n))}}function cl(t){return ht(t,"documentOverlays")}/**
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
 */class ls{constructor(){}Pt(e,n){this.It(e,n),n.Tt()}It(e,n){if("nullValue"in e)this.Et(n,5);else if("booleanValue"in e)this.Et(n,10),n.dt(e.booleanValue?1:0);else if("integerValue"in e)this.Et(n,15),n.dt(Fe(e.integerValue));else if("doubleValue"in e){const r=Fe(e.doubleValue);isNaN(r)?this.Et(n,13):(this.Et(n,15),Nu(r)?n.dt(0):n.dt(r))}else if("timestampValue"in e){const r=e.timestampValue;this.Et(n,20),typeof r=="string"?n.At(r):(n.At(`${r.seconds||""}`),n.dt(r.nanos||0))}else if("stringValue"in e)this.Rt(e.stringValue,n),this.Vt(n);else if("bytesValue"in e)this.Et(n,30),n.ft(Mi(e.bytesValue)),this.Vt(n);else if("referenceValue"in e)this.gt(e.referenceValue,n);else if("geoPointValue"in e){const r=e.geoPointValue;this.Et(n,45),n.dt(r.latitude||0),n.dt(r.longitude||0)}else"mapValue"in e?RP(e)?this.Et(n,Number.MAX_SAFE_INTEGER):(this.yt(e.mapValue,n),this.Vt(n)):"arrayValue"in e?(this.wt(e.arrayValue,n),this.Vt(n)):$()}Rt(e,n){this.Et(n,25),this.St(e,n)}St(e,n){n.At(e)}yt(e,n){const r=e.fields||{};this.Et(n,55);for(const i of Object.keys(r))this.Rt(i,n),this.It(r[i],n)}wt(e,n){const r=e.values||[];this.Et(n,50);for(const i of r)this.It(i,n)}gt(e,n){this.Et(n,37),L.fromName(e).path.forEach(r=>{this.Et(n,60),this.St(r,n)})}Et(e,n){e.dt(n)}Vt(e){e.dt(2)}}ls.bt=new ls;function x4(t){if(t===0)return 8;let e=0;return t>>4==0&&(e+=4,t<<=4),t>>6==0&&(e+=2,t<<=2),t>>7==0&&(e+=1),e}function g0(t){const e=64-function(r){let i=0;for(let s=0;s<8;++s){const o=x4(255&r[s]);if(i+=o,o!==8)break}return i}(t);return Math.ceil(e/8)}class D4{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Dt(e){const n=e[Symbol.iterator]();let r=n.next();for(;!r.done;)this.Ct(r.value),r=n.next();this.vt()}Ft(e){const n=e[Symbol.iterator]();let r=n.next();for(;!r.done;)this.Mt(r.value),r=n.next();this.xt()}Ot(e){for(const n of e){const r=n.charCodeAt(0);if(r<128)this.Ct(r);else if(r<2048)this.Ct(960|r>>>6),this.Ct(128|63&r);else if(n<"\uD800"||"\uDBFF"<n)this.Ct(480|r>>>12),this.Ct(128|63&r>>>6),this.Ct(128|63&r);else{const i=n.codePointAt(0);this.Ct(240|i>>>18),this.Ct(128|63&i>>>12),this.Ct(128|63&i>>>6),this.Ct(128|63&i)}}this.vt()}Nt(e){for(const n of e){const r=n.charCodeAt(0);if(r<128)this.Mt(r);else if(r<2048)this.Mt(960|r>>>6),this.Mt(128|63&r);else if(n<"\uD800"||"\uDBFF"<n)this.Mt(480|r>>>12),this.Mt(128|63&r>>>6),this.Mt(128|63&r);else{const i=n.codePointAt(0);this.Mt(240|i>>>18),this.Mt(128|63&i>>>12),this.Mt(128|63&i>>>6),this.Mt(128|63&i)}}this.xt()}Lt(e){const n=this.Bt(e),r=g0(n);this.kt(1+r),this.buffer[this.position++]=255&r;for(let i=n.length-r;i<n.length;++i)this.buffer[this.position++]=255&n[i]}qt(e){const n=this.Bt(e),r=g0(n);this.kt(1+r),this.buffer[this.position++]=~(255&r);for(let i=n.length-r;i<n.length;++i)this.buffer[this.position++]=~(255&n[i])}Qt(){this.Kt(255),this.Kt(255)}$t(){this.Ut(255),this.Ut(255)}reset(){this.position=0}seed(e){this.kt(e.length),this.buffer.set(e,this.position),this.position+=e.length}Wt(){return this.buffer.slice(0,this.position)}Bt(e){const n=function(s){const o=new DataView(new ArrayBuffer(8));return o.setFloat64(0,s,!1),new Uint8Array(o.buffer)}(e),r=(128&n[0])!=0;n[0]^=r?255:128;for(let i=1;i<n.length;++i)n[i]^=r?255:0;return n}Ct(e){const n=255&e;n===0?(this.Kt(0),this.Kt(255)):n===255?(this.Kt(255),this.Kt(0)):this.Kt(n)}Mt(e){const n=255&e;n===0?(this.Ut(0),this.Ut(255)):n===255?(this.Ut(255),this.Ut(0)):this.Ut(e)}vt(){this.Kt(0),this.Kt(1)}xt(){this.Ut(0),this.Ut(1)}Kt(e){this.kt(1),this.buffer[this.position++]=e}Ut(e){this.kt(1),this.buffer[this.position++]=~e}kt(e){const n=e+this.position;if(n<=this.buffer.length)return;let r=2*this.buffer.length;r<n&&(r=n);const i=new Uint8Array(r);i.set(this.buffer),this.buffer=i}}class N4{constructor(e){this.Gt=e}ft(e){this.Gt.Dt(e)}At(e){this.Gt.Ot(e)}dt(e){this.Gt.Lt(e)}Tt(){this.Gt.Qt()}}class O4{constructor(e){this.Gt=e}ft(e){this.Gt.Ft(e)}At(e){this.Gt.Nt(e)}dt(e){this.Gt.qt(e)}Tt(){this.Gt.$t()}}class dl{constructor(){this.Gt=new D4,this.zt=new N4(this.Gt),this.jt=new O4(this.Gt)}seed(e){this.Gt.seed(e)}Ht(e){return e===0?this.zt:this.jt}Wt(){return this.Gt.Wt()}reset(){this.Gt.reset()}}/**
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
 */class us{constructor(e,n,r,i){this.indexId=e,this.documentKey=n,this.arrayValue=r,this.directionalValue=i}Jt(){const e=this.directionalValue.length,n=e===0||this.directionalValue[e-1]===255?e+1:e,r=new Uint8Array(n);return r.set(this.directionalValue,0),n!==e?r.set([0],this.directionalValue.length):++r[r.length-1],new us(this.indexId,this.documentKey,this.arrayValue,r)}}function oi(t,e){let n=t.indexId-e.indexId;return n!==0?n:(n=_0(t.arrayValue,e.arrayValue),n!==0?n:(n=_0(t.directionalValue,e.directionalValue),n!==0?n:L.comparator(t.documentKey,e.documentKey)))}function _0(t,e){for(let n=0;n<t.length&&n<e.length;++n){const r=t[n]-e[n];if(r!==0)return r}return t.length-e.length}/**
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
 */class y0{constructor(e){this.Yt=new _e((n,r)=>ke.comparator(n.field,r.field)),this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.Zt=e.orderBy,this.Xt=[];for(const n of e.filters){const r=n;r.isInequality()?this.Yt=this.Yt.add(r):this.Xt.push(r)}}get en(){return this.Yt.size>1}tn(e){if(j(e.collectionGroup===this.collectionId),this.en)return!1;const n=Ug(e);if(n!==void 0&&!this.nn(n))return!1;const r=ss(e);let i=new Set,s=0,o=0;for(;s<r.length&&this.nn(r[s]);++s)i=i.add(r[s].fieldPath.canonicalString());if(s===r.length)return!0;if(this.Yt.size>0){const a=this.Yt.getIterator().getNext();if(!i.has(a.field.canonicalString())){const l=r[s];if(!this.rn(a,l)||!this.sn(this.Zt[o++],l))return!1}++s}for(;s<r.length;++s){const a=r[s];if(o>=this.Zt.length||!this.sn(this.Zt[o++],a))return!1}return!0}on(){if(this.en)return null;let e=new _e(ke.comparator);const n=[];for(const r of this.Xt)if(!r.field.isKeyField())if(r.op==="array-contains"||r.op==="array-contains-any")n.push(new Dd(r.field,2));else{if(e.has(r.field))continue;e=e.add(r.field),n.push(new Dd(r.field,0))}for(const r of this.Zt)r.field.isKeyField()||e.has(r.field)||(e=e.add(r.field),n.push(new Dd(r.field,r.dir==="asc"?0:1)));return new Ah(Ah.UNKNOWN_ID,this.collectionId,n,Du.empty())}nn(e){for(const n of this.Xt)if(this.rn(n,e))return!0;return!1}rn(e,n){if(e===void 0||!e.field.isEqual(n.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return n.kind===2===r}sn(e,n){return!!e.field.isEqual(n.fieldPath)&&(n.kind===0&&e.dir==="asc"||n.kind===1&&e.dir==="desc")}}/**
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
 */function mC(t){var e,n;if(j(t instanceof oe||t instanceof fe),t instanceof oe){if(t instanceof NP){const i=((n=(e=t.value.arrayValue)===null||e===void 0?void 0:e.values)===null||n===void 0?void 0:n.map(s=>oe.create(t.field,"==",s)))||[];return fe.create(i,"or")}return t}const r=t.filters.map(i=>mC(i));return fe.create(r,t.op)}function V4(t){if(t.getFilters().length===0)return[];const e=Zg(mC(t));return j(gC(e)),Xg(e)||Jg(e)?[e]:e.getFilters()}function Xg(t){return t instanceof oe}function Jg(t){return t instanceof fe&&fv(t)}function gC(t){return Xg(t)||Jg(t)||function(n){if(n instanceof fe&&jg(n)){for(const r of n.getFilters())if(!Xg(r)&&!Jg(r))return!1;return!0}return!1}(t)}function Zg(t){if(j(t instanceof oe||t instanceof fe),t instanceof oe)return t;if(t.filters.length===1)return Zg(t.filters[0]);const e=t.filters.map(r=>Zg(r));let n=fe.create(e,t.op);return n=xh(n),gC(n)?n:(j(n instanceof fe),j(ha(n)),j(n.filters.length>1),n.filters.reduce((r,i)=>Tv(r,i)))}function Tv(t,e){let n;return j(t instanceof oe||t instanceof fe),j(e instanceof oe||e instanceof fe),n=t instanceof oe?e instanceof oe?function(i,s){return fe.create([i,s],"and")}(t,e):v0(t,e):e instanceof oe?v0(e,t):function(i,s){if(j(i.filters.length>0&&s.filters.length>0),ha(i)&&ha(s))return bP(i,s.getFilters());const o=jg(i)?i:s,a=jg(i)?s:i,l=o.filters.map(u=>Tv(u,a));return fe.create(l,"or")}(t,e),xh(n)}function v0(t,e){if(ha(e))return bP(e,t.getFilters());{const n=e.filters.map(r=>Tv(t,r));return fe.create(n,"or")}}function xh(t){if(j(t instanceof oe||t instanceof fe),t instanceof oe)return t;const e=t.getFilters();if(e.length===1)return xh(e[0]);if(CP(t))return t;const n=e.map(i=>xh(i)),r=[];return n.forEach(i=>{i instanceof oe?r.push(i):i instanceof fe&&(i.op===t.op?r.push(...i.filters):r.push(i))}),r.length===1?r[0]:fe.create(r,t.op)}/**
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
 */class L4{constructor(){this._n=new Sv}addToCollectionParentIndex(e,n){return this._n.add(n),T.resolve()}getCollectionParents(e,n){return T.resolve(this._n.getEntries(n))}addFieldIndex(e,n){return T.resolve()}deleteFieldIndex(e,n){return T.resolve()}deleteAllFieldIndexes(e){return T.resolve()}createTargetIndexes(e,n){return T.resolve()}getDocumentsMatchingTarget(e,n){return T.resolve(null)}getIndexType(e,n){return T.resolve(0)}getFieldIndexes(e,n){return T.resolve([])}getNextCollectionGroupToUpdate(e){return T.resolve(null)}getMinOffset(e,n){return T.resolve(gn.min())}getMinOffsetFromCollectionGroup(e,n){return T.resolve(gn.min())}updateCollectionGroup(e,n,r){return T.resolve()}updateIndexEntries(e,n){return T.resolve()}}class Sv{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new _e(se.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new _e(se.comparator)).toArray()}}/**
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
 */const ld=new Uint8Array(0);class M4{constructor(e,n){this.databaseId=n,this.an=new Sv,this.un=new Ji(r=>Ls(r),(r,i)=>_c(r,i)),this.uid=e.uid||""}addToCollectionParentIndex(e,n){if(!this.an.has(n)){const r=n.lastSegment(),i=n.popLast();e.addOnCommittedListener(()=>{this.an.add(n)});const s={collectionId:r,parent:Bt(i)};return w0(e).put(s)}return T.resolve()}getCollectionParents(e,n){const r=[],i=IDBKeyRange.bound([n,""],[fP(n),""],!1,!0);return w0(e).W(i).next(s=>{for(const o of s){if(o.collectionId!==n)break;r.push(ur(o.parent))}return r})}addFieldIndex(e,n){const r=hl(e),i=function(a){return{indexId:a.indexId,collectionGroup:a.collectionGroup,fields:a.fields.map(l=>[l.fieldPath.canonicalString(),l.kind])}}(n);delete i.indexId;const s=r.add(i);if(n.indexState){const o=ho(e);return s.next(a=>{o.put(f0(a,this.uid,n.indexState.sequenceNumber,n.indexState.offset))})}return s.next()}deleteFieldIndex(e,n){const r=hl(e),i=ho(e),s=co(e);return r.delete(n.indexId).next(()=>i.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0))).next(()=>s.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0)))}deleteAllFieldIndexes(e){const n=hl(e),r=co(e),i=ho(e);return n.H().next(()=>r.H()).next(()=>i.H())}createTargetIndexes(e,n){return T.forEach(this.cn(n),r=>this.getIndexType(e,r).next(i=>{if(i===0||i===1){const s=new y0(r).on();if(s!=null)return this.addFieldIndex(e,s)}}))}getDocumentsMatchingTarget(e,n){const r=co(e);let i=!0;const s=new Map;return T.forEach(this.cn(n),o=>this.ln(e,o).next(a=>{i&&(i=!!a),s.set(o,a)})).next(()=>{if(i){let o=te();const a=[];return T.forEach(s,(l,u)=>{x("IndexedDbIndexManager",`Using index ${function(m){return`id=${m.indexId}|cg=${m.collectionGroup}|f=${m.fields.map(I=>`${I.fieldPath}:${I.kind}`).join(",")}`}(l)} to execute ${Ls(n)}`);const c=function(m,I){const A=Ug(I);if(A===void 0)return null;for(const C of Ch(m,A.fieldPath))switch(C.op){case"array-contains-any":return C.value.arrayValue.values||[];case"array-contains":return[C.value]}return null}(u,l),d=function(m,I){const A=new Map;for(const C of ss(I))for(const _ of Ch(m,C.fieldPath))switch(_.op){case"==":case"in":A.set(C.fieldPath.canonicalString(),_.value);break;case"not-in":case"!=":return A.set(C.fieldPath.canonicalString(),_.value),Array.from(A.values())}return null}(u,l),h=function(m,I){const A=[];let C=!0;for(const _ of ss(I)){const w=_.kind===0?JE(m,_.fieldPath,m.startAt):ZE(m,_.fieldPath,m.startAt);A.push(w.value),C&&(C=w.inclusive)}return new $i(A,C)}(u,l),f=function(m,I){const A=[];let C=!0;for(const _ of ss(I)){const w=_.kind===0?ZE(m,_.fieldPath,m.endAt):JE(m,_.fieldPath,m.endAt);A.push(w.value),C&&(C=w.inclusive)}return new $i(A,C)}(u,l),v=this.hn(l,u,h),y=this.hn(l,u,f),E=this.Pn(l,u,d),g=this.In(l.indexId,c,v,h.inclusive,y,f.inclusive,E);return T.forEach(g,p=>r.j(p,n.limit).next(m=>{m.forEach(I=>{const A=L.fromSegments(I.documentKey);o.has(A)||(o=o.add(A),a.push(A))})}))}).next(()=>a)}return T.resolve(null)})}cn(e){let n=this.un.get(e);return n||(e.filters.length===0?n=[e]:n=V4(fe.create(e.filters,"and")).map(r=>Wg(e.path,e.collectionGroup,e.orderBy,r.getFilters(),e.limit,e.startAt,e.endAt)),this.un.set(e,n),n)}In(e,n,r,i,s,o,a){const l=(n!=null?n.length:1)*Math.max(r.length,s.length),u=l/(n!=null?n.length:1),c=[];for(let d=0;d<l;++d){const h=n?this.Tn(n[d/u]):ld,f=this.En(e,h,r[d%u],i),v=this.dn(e,h,s[d%u],o),y=a.map(E=>this.En(e,h,E,!0));c.push(...this.createRange(f,v,y))}return c}En(e,n,r,i){const s=new us(e,L.empty(),n,r);return i?s:s.Jt()}dn(e,n,r,i){const s=new us(e,L.empty(),n,r);return i?s.Jt():s}ln(e,n){const r=new y0(n),i=n.collectionGroup!=null?n.collectionGroup:n.path.lastSegment();return this.getFieldIndexes(e,i).next(s=>{let o=null;for(const a of s)r.tn(a)&&(!o||a.fields.length>o.fields.length)&&(o=a);return o})}getIndexType(e,n){let r=2;const i=this.cn(n);return T.forEach(i,s=>this.ln(e,s).next(o=>{o?r!==0&&o.fields.length<function(l){let u=new _e(ke.comparator),c=!1;for(const d of l.filters)for(const h of d.getFlattenedFilters())h.field.isKeyField()||(h.op==="array-contains"||h.op==="array-contains-any"?c=!0:u=u.add(h.field));for(const d of l.orderBy)d.field.isKeyField()||(u=u.add(d.field));return u.size+(c?1:0)}(s)&&(r=1):r=0})).next(()=>function(o){return o.limit!==null}(n)&&i.length>1&&r===2?1:r)}An(e,n){const r=new dl;for(const i of ss(e)){const s=n.data.field(i.fieldPath);if(s==null)return null;const o=r.Ht(i.kind);ls.bt.Pt(s,o)}return r.Wt()}Tn(e){const n=new dl;return ls.bt.Pt(e,n.Ht(0)),n.Wt()}Rn(e,n){const r=new dl;return ls.bt.Pt(Vs(this.databaseId,n),r.Ht(function(s){const o=ss(s);return o.length===0?0:o[o.length-1].kind}(e))),r.Wt()}Pn(e,n,r){if(r===null)return[];let i=[];i.push(new dl);let s=0;for(const o of ss(e)){const a=r[s++];for(const l of i)if(this.Vn(n,o.fieldPath)&&Lu(a))i=this.mn(i,o,a);else{const u=l.Ht(o.kind);ls.bt.Pt(a,u)}}return this.fn(i)}hn(e,n,r){return this.Pn(e,n,r.position)}fn(e){const n=[];for(let r=0;r<e.length;++r)n[r]=e[r].Wt();return n}mn(e,n,r){const i=[...e],s=[];for(const o of r.arrayValue.values||[])for(const a of i){const l=new dl;l.seed(a.Wt()),ls.bt.Pt(o,l.Ht(n.kind)),s.push(l)}return s}Vn(e,n){return!!e.filters.find(r=>r instanceof oe&&r.field.isEqual(n)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(e,n){const r=hl(e),i=ho(e);return(n?r.W("collectionGroupIndex",IDBKeyRange.bound(n,n)):r.W()).next(s=>{const o=[];return T.forEach(s,a=>i.get([a.indexId,this.uid]).next(l=>{o.push(function(c,d){const h=d?new Du(d.sequenceNumber,new gn($s(d.readTime),new L(ur(d.documentKey)),d.largestBatchId)):Du.empty(),f=c.fields.map(([v,y])=>new Dd(ke.fromServerFormat(v),y));return new Ah(c.indexId,c.collectionGroup,f,h)}(a,l))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(n=>n.length===0?null:(n.sort((r,i)=>{const s=r.indexState.sequenceNumber-i.indexState.sequenceNumber;return s!==0?s:ee(r.collectionGroup,i.collectionGroup)}),n[0].collectionGroup))}updateCollectionGroup(e,n,r){const i=hl(e),s=ho(e);return this.gn(e).next(o=>i.W("collectionGroupIndex",IDBKeyRange.bound(n,n)).next(a=>T.forEach(a,l=>s.put(f0(l.indexId,this.uid,o,r)))))}updateIndexEntries(e,n){const r=new Map;return T.forEach(n,(i,s)=>{const o=r.get(i.collectionGroup);return(o?T.resolve(o):this.getFieldIndexes(e,i.collectionGroup)).next(a=>(r.set(i.collectionGroup,a),T.forEach(a,l=>this.pn(e,i,l).next(u=>{const c=this.yn(s,l);return u.isEqual(c)?T.resolve():this.wn(e,s,l,u,c)}))))})}Sn(e,n,r,i){return co(e).put({indexId:i.indexId,uid:this.uid,arrayValue:i.arrayValue,directionalValue:i.directionalValue,orderedDocumentKey:this.Rn(r,n.key),documentKey:n.key.path.toArray()})}bn(e,n,r,i){return co(e).delete([i.indexId,this.uid,i.arrayValue,i.directionalValue,this.Rn(r,n.key),n.key.path.toArray()])}pn(e,n,r){const i=co(e);let s=new _e(oi);return i.Y({index:"documentKeyIndex",range:IDBKeyRange.only([r.indexId,this.uid,this.Rn(r,n)])},(o,a)=>{s=s.add(new us(r.indexId,n,a.arrayValue,a.directionalValue))}).next(()=>s)}yn(e,n){let r=new _e(oi);const i=this.An(n,e);if(i==null)return r;const s=Ug(n);if(s!=null){const o=e.data.field(s.fieldPath);if(Lu(o))for(const a of o.arrayValue.values||[])r=r.add(new us(n.indexId,e.key,this.Tn(a),i))}else r=r.add(new us(n.indexId,e.key,ld,i));return r}wn(e,n,r,i,s){x("IndexedDbIndexManager","Updating index entries for document '%s'",n.key);const o=[];return function(l,u,c,d,h){const f=l.getIterator(),v=u.getIterator();let y=uo(f),E=uo(v);for(;y||E;){let g=!1,p=!1;if(y&&E){const m=c(y,E);m<0?p=!0:m>0&&(g=!0)}else y!=null?p=!0:g=!0;g?(d(E),E=uo(v)):p?(h(y),y=uo(f)):(y=uo(f),E=uo(v))}}(i,s,oi,a=>{o.push(this.Sn(e,n,r,a))},a=>{o.push(this.bn(e,n,r,a))}),T.waitFor(o)}gn(e){let n=1;return ho(e).Y({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,i,s)=>{s.done(),n=i.sequenceNumber+1}).next(()=>n)}createRange(e,n,r){r=r.sort((o,a)=>oi(o,a)).filter((o,a,l)=>!a||oi(o,l[a-1])!==0);const i=[];i.push(e);for(const o of r){const a=oi(o,e),l=oi(o,n);if(a===0)i[0]=e.Jt();else if(a>0&&l<0)i.push(o),i.push(o.Jt());else if(l>0)break}i.push(n);const s=[];for(let o=0;o<i.length;o+=2){if(this.Dn(i[o],i[o+1]))return[];const a=[i[o].indexId,this.uid,i[o].arrayValue,i[o].directionalValue,ld,[]],l=[i[o+1].indexId,this.uid,i[o+1].arrayValue,i[o+1].directionalValue,ld,[]];s.push(IDBKeyRange.bound(a,l))}return s}Dn(e,n){return oi(e,n)>0}getMinOffsetFromCollectionGroup(e,n){return this.getFieldIndexes(e,n).next(I0)}getMinOffset(e,n){return T.mapArray(this.cn(n),r=>this.ln(e,r).next(i=>i||$())).next(I0)}}function w0(t){return ht(t,"collectionParents")}function co(t){return ht(t,"indexEntries")}function hl(t){return ht(t,"indexConfiguration")}function ho(t){return ht(t,"indexState")}function I0(t){j(t.length!==0);let e=t[0].indexState.offset,n=e.largestBatchId;for(let r=1;r<t.length;r++){const i=t[r].indexState.offset;cv(i,e)<0&&(e=i),n<i.largestBatchId&&(n=i.largestBatchId)}return new gn(e.readTime,e.documentKey,n)}/**
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
 */const E0={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Qt{constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new Qt(e,Qt.DEFAULT_COLLECTION_PERCENTILE,Qt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
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
 */function _C(t,e,n){const r=t.store("mutations"),i=t.store("documentMutations"),s=[],o=IDBKeyRange.only(n.batchId);let a=0;const l=r.Y({range:o},(c,d,h)=>(a++,h.delete()));s.push(l.next(()=>{j(a===1)}));const u=[];for(const c of n.mutations){const d=vP(e,c.key.path,n.batchId);s.push(i.delete(d)),u.push(c.key)}return T.waitFor(s).next(()=>u)}function Dh(t){if(!t)return 0;let e;if(t.document)e=t.document;else if(t.unknownDocument)e=t.unknownDocument;else{if(!t.noDocument)throw $();e=t.noDocument}return JSON.stringify(e).length}/**
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
 */Qt.DEFAULT_COLLECTION_PERCENTILE=10,Qt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Qt.DEFAULT=new Qt(41943040,Qt.DEFAULT_COLLECTION_PERCENTILE,Qt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Qt.DISABLED=new Qt(-1,0,0);class zf{constructor(e,n,r,i){this.userId=e,this.serializer=n,this.indexManager=r,this.referenceDelegate=i,this.Cn={}}static lt(e,n,r,i){j(e.uid!=="");const s=e.isAuthenticated()?e.uid:"";return new zf(s,n,r,i)}checkEmpty(e){let n=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return ai(e).Y({index:"userMutationsIndex",range:r},(i,s,o)=>{n=!1,o.done()}).next(()=>n)}addMutationBatch(e,n,r,i){const s=wo(e),o=ai(e);return o.add({}).next(a=>{j(typeof a=="number");const l=new _v(a,n,r,i),u=function(f,v,y){const E=y.baseMutations.map(p=>Uu(f.ct,p)),g=y.mutations.map(p=>Uu(f.ct,p));return{userId:v,batchId:y.batchId,localWriteTimeMs:y.localWriteTime.toMillis(),baseMutations:E,mutations:g}}(this.serializer,this.userId,l),c=[];let d=new _e((h,f)=>ee(h.canonicalString(),f.canonicalString()));for(const h of i){const f=vP(this.userId,h.key.path,a);d=d.add(h.key.path.popLast()),c.push(o.put(u)),c.push(s.put(f,RU))}return d.forEach(h=>{c.push(this.indexManager.addToCollectionParentIndex(e,h))}),e.addOnCommittedListener(()=>{this.Cn[a]=l.keys()}),T.waitFor(c).next(()=>l)})}lookupMutationBatch(e,n){return ai(e).get(n).next(r=>r?(j(r.userId===this.userId),as(this.serializer,r)):null)}vn(e,n){return this.Cn[n]?T.resolve(this.Cn[n]):this.lookupMutationBatch(e,n).next(r=>{if(r){const i=r.keys();return this.Cn[n]=i,i}return null})}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=IDBKeyRange.lowerBound([this.userId,r]);let s=null;return ai(e).Y({index:"userMutationsIndex",range:i},(o,a,l)=>{a.userId===this.userId&&(j(a.batchId>=r),s=as(this.serializer,a)),l.done()}).next(()=>s)}getHighestUnacknowledgedBatchId(e){const n=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=-1;return ai(e).Y({index:"userMutationsIndex",range:n,reverse:!0},(i,s,o)=>{r=s.batchId,o.done()}).next(()=>r)}getAllMutationBatches(e){const n=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return ai(e).W("userMutationsIndex",n).next(r=>r.map(i=>as(this.serializer,i)))}getAllMutationBatchesAffectingDocumentKey(e,n){const r=Nd(this.userId,n.path),i=IDBKeyRange.lowerBound(r),s=[];return wo(e).Y({range:i},(o,a,l)=>{const[u,c,d]=o,h=ur(c);if(u===this.userId&&n.path.isEqual(h))return ai(e).get(d).next(f=>{if(!f)throw $();j(f.userId===this.userId),s.push(as(this.serializer,f))});l.done()}).next(()=>s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new _e(ee);const i=[];return n.forEach(s=>{const o=Nd(this.userId,s.path),a=IDBKeyRange.lowerBound(o),l=wo(e).Y({range:a},(u,c,d)=>{const[h,f,v]=u,y=ur(f);h===this.userId&&s.path.isEqual(y)?r=r.add(v):d.done()});i.push(l)}),T.waitFor(i).next(()=>this.Fn(e,r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1,s=Nd(this.userId,r),o=IDBKeyRange.lowerBound(s);let a=new _e(ee);return wo(e).Y({range:o},(l,u,c)=>{const[d,h,f]=l,v=ur(h);d===this.userId&&r.isPrefixOf(v)?v.length===i&&(a=a.add(f)):c.done()}).next(()=>this.Fn(e,a))}Fn(e,n){const r=[],i=[];return n.forEach(s=>{i.push(ai(e).get(s).next(o=>{if(o===null)throw $();j(o.userId===this.userId),r.push(as(this.serializer,o))}))}),T.waitFor(i).next(()=>r)}removeMutationBatch(e,n){return _C(e.ae,this.userId,n).next(r=>(e.addOnCommittedListener(()=>{this.Mn(n.batchId)}),T.forEach(r,i=>this.referenceDelegate.markPotentiallyOrphaned(e,i))))}Mn(e){delete this.Cn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(n=>{if(!n)return T.resolve();const r=IDBKeyRange.lowerBound(function(o){return[o]}(this.userId)),i=[];return wo(e).Y({range:r},(s,o,a)=>{if(s[0]===this.userId){const l=ur(s[1]);i.push(l)}else a.done()}).next(()=>{j(i.length===0)})})}containsKey(e,n){return yC(e,this.userId,n)}xn(e){return vC(e).get(this.userId).next(n=>n||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function yC(t,e,n){const r=Nd(e,n.path),i=r[1],s=IDBKeyRange.lowerBound(r);let o=!1;return wo(t).Y({range:s,J:!0},(a,l,u)=>{const[c,d,h]=a;c===e&&d===i&&(o=!0),u.done()}).next(()=>o)}function ai(t){return ht(t,"mutations")}function wo(t){return ht(t,"documentMutations")}function vC(t){return ht(t,"mutationQueues")}/**
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
 */class Bs{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new Bs(0)}static Ln(){return new Bs(-1)}}/**
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
 */class F4{constructor(e,n){this.referenceDelegate=e,this.serializer=n}allocateTargetId(e){return this.Bn(e).next(n=>{const r=new Bs(n.highestTargetId);return n.highestTargetId=r.next(),this.kn(e,n).next(()=>n.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.Bn(e).next(n=>G.fromTimestamp(new xe(n.lastRemoteSnapshotVersion.seconds,n.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.Bn(e).next(n=>n.highestListenSequenceNumber)}setTargetsMetadata(e,n,r){return this.Bn(e).next(i=>(i.highestListenSequenceNumber=n,r&&(i.lastRemoteSnapshotVersion=r.toTimestamp()),n>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=n),this.kn(e,i)))}addTargetData(e,n){return this.qn(e,n).next(()=>this.Bn(e).next(r=>(r.targetCount+=1,this.Qn(n,r),this.kn(e,r))))}updateTargetData(e,n){return this.qn(e,n)}removeTargetData(e,n){return this.removeMatchingKeysForTargetId(e,n.targetId).next(()=>fo(e).delete(n.targetId)).next(()=>this.Bn(e)).next(r=>(j(r.targetCount>0),r.targetCount-=1,this.kn(e,r)))}removeTargets(e,n,r){let i=0;const s=[];return fo(e).Y((o,a)=>{const l=Pl(a);l.sequenceNumber<=n&&r.get(l.targetId)===null&&(i++,s.push(this.removeTargetData(e,l)))}).next(()=>T.waitFor(s)).next(()=>i)}forEachTarget(e,n){return fo(e).Y((r,i)=>{const s=Pl(i);n(s)})}Bn(e){return T0(e).get("targetGlobalKey").next(n=>(j(n!==null),n))}kn(e,n){return T0(e).put("targetGlobalKey",n)}qn(e,n){return fo(e).put(pC(this.serializer,n))}Qn(e,n){let r=!1;return e.targetId>n.highestTargetId&&(n.highestTargetId=e.targetId,r=!0),e.sequenceNumber>n.highestListenSequenceNumber&&(n.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.Bn(e).next(n=>n.targetCount)}getTargetData(e,n){const r=Ls(n),i=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let s=null;return fo(e).Y({range:i,index:"queryTargetsIndex"},(o,a,l)=>{const u=Pl(a);_c(n,u.target)&&(s=u,l.done())}).next(()=>s)}addMatchingKeys(e,n,r){const i=[],s=mi(e);return n.forEach(o=>{const a=Bt(o.path);i.push(s.put({targetId:r,path:a})),i.push(this.referenceDelegate.addReference(e,r,o))}),T.waitFor(i)}removeMatchingKeys(e,n,r){const i=mi(e);return T.forEach(n,s=>{const o=Bt(s.path);return T.waitFor([i.delete([r,o]),this.referenceDelegate.removeReference(e,r,s)])})}removeMatchingKeysForTargetId(e,n){const r=mi(e),i=IDBKeyRange.bound([n],[n+1],!1,!0);return r.delete(i)}getMatchingKeysForTargetId(e,n){const r=IDBKeyRange.bound([n],[n+1],!1,!0),i=mi(e);let s=te();return i.Y({range:r,J:!0},(o,a,l)=>{const u=ur(o[1]),c=new L(u);s=s.add(c)}).next(()=>s)}containsKey(e,n){const r=Bt(n.path),i=IDBKeyRange.bound([r],[fP(r)],!1,!0);let s=0;return mi(e).Y({index:"documentTargetsIndex",J:!0,range:i},([o,a],l,u)=>{o!==0&&(s++,u.done())}).next(()=>s>0)}_t(e,n){return fo(e).get(n).next(r=>r?Pl(r):null)}}function fo(t){return ht(t,"targets")}function T0(t){return ht(t,"targetGlobal")}function mi(t){return ht(t,"targetDocuments")}/**
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
 */function S0([t,e],[n,r]){const i=ee(t,n);return i===0?ee(e,r):i}class U4{constructor(e){this.Kn=e,this.buffer=new _e(S0),this.$n=0}Un(){return++this.$n}Wn(e){const n=[e,this.Un()];if(this.buffer.size<this.Kn)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();S0(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class $4{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Gn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.zn(6e4)}stop(){this.Gn&&(this.Gn.cancel(),this.Gn=null)}get started(){return this.Gn!==null}zn(e){x("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Gn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Gn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Xi(n)?x("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",n):await Yi(n)}await this.zn(3e5)})}}class B4{constructor(e,n){this.jn=e,this.params=n}calculateTargetCount(e,n){return this.jn.Hn(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return T.resolve(Jt._e);const r=new U4(n);return this.jn.forEachTarget(e,i=>r.Wn(i.sequenceNumber)).next(()=>this.jn.Jn(e,i=>r.Wn(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.jn.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.jn.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(x("LruGarbageCollector","Garbage collection skipped; disabled"),T.resolve(E0)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(x("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),E0):this.Yn(e,n))}getCacheSize(e){return this.jn.getCacheSize(e)}Yn(e,n){let r,i,s,o,a,l,u;const c=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(d=>(d>this.params.maximumSequenceNumbersToCollect?(x("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${d}`),i=this.params.maximumSequenceNumbersToCollect):i=d,o=Date.now(),this.nthSequenceNumber(e,i))).next(d=>(r=d,a=Date.now(),this.removeTargets(e,r,n))).next(d=>(s=d,l=Date.now(),this.removeOrphanedDocuments(e,r))).next(d=>(u=Date.now(),go()<=ie.DEBUG&&x("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-c}ms
	Determined least recently used ${i} in `+(a-o)+`ms
	Removed ${s} targets in `+(l-a)+`ms
	Removed ${d} documents in `+(u-l)+`ms
Total Duration: ${u-c}ms`),T.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:d})))}}function z4(t,e){return new B4(t,e)}/**
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
 */class j4{constructor(e,n){this.db=e,this.garbageCollector=z4(this,n)}Hn(e){const n=this.Zn(e);return this.db.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}Zn(e){let n=0;return this.Jn(e,r=>{n++}).next(()=>n)}forEachTarget(e,n){return this.db.getTargetCache().forEachTarget(e,n)}Jn(e,n){return this.Xn(e,(r,i)=>n(i))}addReference(e,n,r){return ud(e,r)}removeReference(e,n,r){return ud(e,r)}removeTargets(e,n,r){return this.db.getTargetCache().removeTargets(e,n,r)}markPotentiallyOrphaned(e,n){return ud(e,n)}er(e,n){return function(i,s){let o=!1;return vC(i).Z(a=>yC(i,a,s).next(l=>(l&&(o=!0),T.resolve(!l)))).next(()=>o)}(e,n)}removeOrphanedDocuments(e,n){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[];let s=0;return this.Xn(e,(o,a)=>{if(a<=n){const l=this.er(e,o).next(u=>{if(!u)return s++,r.getEntry(e,o).next(()=>(r.removeEntry(o,G.min()),mi(e).delete(function(d){return[0,Bt(d.path)]}(o))))});i.push(l)}}).next(()=>T.waitFor(i)).next(()=>r.apply(e)).next(()=>s)}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,n){return ud(e,n)}Xn(e,n){const r=mi(e);let i,s=Jt._e;return r.Y({index:"documentTargetsIndex"},([o,a],{path:l,sequenceNumber:u})=>{o===0?(s!==Jt._e&&n(new L(ur(i)),s),s=u,i=l):s=Jt._e}).next(()=>{s!==Jt._e&&n(new L(ur(i)),s)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function ud(t,e){return mi(t).put(function(r,i){return{targetId:0,path:Bt(r.path),sequenceNumber:i}}(e,t.currentSequenceNumber))}/**
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
 */class wC{constructor(){this.changes=new Ji(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Te.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?T.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class q4{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,n,r){return ts(e).put(r)}removeEntry(e,n,r){return ts(e).delete(function(s,o){const a=s.path.toArray();return[a.slice(0,a.length-2),a[a.length-2],bh(o),a[a.length-1]]}(n,r))}updateMetadata(e,n){return this.getMetadata(e).next(r=>(r.byteSize+=n,this.tr(e,r)))}getEntry(e,n){let r=Te.newInvalidDocument(n);return ts(e).Y({index:"documentKeyIndex",range:IDBKeyRange.only(fl(n))},(i,s)=>{r=this.nr(n,s)}).next(()=>r)}rr(e,n){let r={size:0,document:Te.newInvalidDocument(n)};return ts(e).Y({index:"documentKeyIndex",range:IDBKeyRange.only(fl(n))},(i,s)=>{r={document:this.nr(n,s),size:Dh(s)}}).next(()=>r)}getEntries(e,n){let r=en();return this.ir(e,n,(i,s)=>{const o=this.nr(i,s);r=r.insert(i,o)}).next(()=>r)}sr(e,n){let r=en(),i=new we(L.comparator);return this.ir(e,n,(s,o)=>{const a=this.nr(s,o);r=r.insert(s,a),i=i.insert(s,Dh(o))}).next(()=>({documents:r,_r:i}))}ir(e,n,r){if(n.isEmpty())return T.resolve();let i=new _e(P0);n.forEach(l=>i=i.add(l));const s=IDBKeyRange.bound(fl(i.first()),fl(i.last())),o=i.getIterator();let a=o.getNext();return ts(e).Y({index:"documentKeyIndex",range:s},(l,u,c)=>{const d=L.fromSegments([...u.prefixPath,u.collectionGroup,u.documentId]);for(;a&&P0(a,d)<0;)r(a,null),a=o.getNext();a&&a.isEqual(d)&&(r(a,u),a=o.hasNext()?o.getNext():null),a?c.U(fl(a)):c.done()}).next(()=>{for(;a;)r(a,null),a=o.hasNext()?o.getNext():null})}getDocumentsMatchingQuery(e,n,r,i,s){const o=n.path,a=[o.popLast().toArray(),o.lastSegment(),bh(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],l=[o.popLast().toArray(),o.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return ts(e).W(IDBKeyRange.bound(a,l,!0)).next(u=>{s==null||s.incrementDocumentReadCount(u.length);let c=en();for(const d of u){const h=this.nr(L.fromSegments(d.prefixPath.concat(d.collectionGroup,d.documentId)),d);h.isFoundDocument()&&(vc(n,h)||i.has(h.key))&&(c=c.insert(h.key,h))}return c})}getAllFromCollectionGroup(e,n,r,i){let s=en();const o=A0(n,r),a=A0(n,gn.max());return ts(e).Y({index:"collectionGroupIndex",range:IDBKeyRange.bound(o,a,!0)},(l,u,c)=>{const d=this.nr(L.fromSegments(u.prefixPath.concat(u.collectionGroup,u.documentId)),u);s=s.insert(d.key,d),s.size===i&&c.done()}).next(()=>s)}newChangeBuffer(e){return new W4(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(n=>n.byteSize)}getMetadata(e){return R0(e).get("remoteDocumentGlobalKey").next(n=>(j(!!n),n))}tr(e,n){return R0(e).put("remoteDocumentGlobalKey",n)}nr(e,n){if(n){const r=k4(this.serializer,n);if(!(r.isNoDocument()&&r.version.isEqual(G.min())))return r}return Te.newInvalidDocument(e)}}function IC(t){return new q4(t)}class W4 extends wC{constructor(e,n){super(),this.ar=e,this.trackRemovals=n,this.ur=new Ji(r=>r.toString(),(r,i)=>r.isEqual(i))}applyChanges(e){const n=[];let r=0,i=new _e((s,o)=>ee(s.canonicalString(),o.canonicalString()));return this.changes.forEach((s,o)=>{const a=this.ur.get(s);if(n.push(this.ar.removeEntry(e,s,a.readTime)),o.isValidDocument()){const l=d0(this.ar.serializer,o);i=i.add(s.path.popLast()),r+=Dh(l)-a.size,n.push(this.ar.addEntry(e,s,l))}else if(r-=a.size,this.trackRemovals){const l=d0(this.ar.serializer,o.convertToNoDocument(G.min()));n.push(this.ar.addEntry(e,s,l))}}),i.forEach(s=>{n.push(this.ar.indexManager.addToCollectionParentIndex(e,s))}),n.push(this.ar.updateMetadata(e,r)),T.waitFor(n)}getFromCache(e,n){return this.ar.rr(e,n).next(r=>(this.ur.set(n,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(e,n){return this.ar.sr(e,n).next(({documents:r,_r:i})=>(i.forEach((s,o)=>{this.ur.set(s,{size:o,readTime:r.get(s).readTime})}),r))}}function R0(t){return ht(t,"remoteDocumentGlobal")}function ts(t){return ht(t,"remoteDocumentsV14")}function fl(t){const e=t.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function A0(t,e){const n=e.documentKey.path.toArray();return[t,bh(e.readTime),n.slice(0,n.length-2),n.length>0?n[n.length-1]:""]}function P0(t,e){const n=t.path.toArray(),r=e.path.toArray();let i=0;for(let s=0;s<n.length-2&&s<r.length-2;++s)if(i=ee(n[s],r[s]),i)return i;return i=ee(n.length,r.length),i||(i=ee(n[n.length-2],r[r.length-2]),i||ee(n[n.length-1],r[r.length-1]))}/**
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
 */class G4{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class EC{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&ql(r.mutation,i,Zt.empty(),xe.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,te()).next(()=>r))}getLocalViewOfDocuments(e,n,r=te()){const i=cr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Rl();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=cr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,te()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=en();const o=jl(),a=function(){return jl()}();return n.forEach((l,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof Xr)?s=s.insert(u.key,u):c!==void 0?(o.set(u.key,c.mutation.getFieldMask()),ql(c.mutation,u,c.mutation.getFieldMask(),xe.now())):o.set(u.key,Zt.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var d;return a.set(u,new G4(c,(d=o.get(u))!==null&&d!==void 0?d:null))}),a))}recalculateAndSaveOverlays(e,n){const r=jl();let i=new we((o,a)=>o-a),s=te();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=r.get(l)||Zt.empty();c=a.applyToLocalView(u,c),r.set(l,c);const d=(i.get(a.batchId)||te()).add(l);i=i.insert(a.batchId,d)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,d=$P();c.forEach(h=>{if(!s.has(h)){const f=KP(n.get(h),r.get(h));f!==null&&d.set(h,f),s=s.add(h)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,d))}return T.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return L.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):pv(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):T.resolve(cr());let a=-1,l=s;return o.next(u=>T.forEach(u,(c,d)=>(a<d.largestBatchId&&(a=d.largestBatchId),s.get(c)?T.resolve():this.remoteDocumentCache.getEntry(e,c).next(h=>{l=l.insert(c,h)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,l,u,te())).next(c=>({batchId:a,changes:UP(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new L(n)).next(r=>{let i=Rl();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=Rl();return this.indexManager.getCollectionParents(e,s).next(a=>T.forEach(a,l=>{const u=function(d,h){return new Yr(h,null,d.explicitOrderBy.slice(),d.filters.slice(),d.limit,d.limitType,d.startAt,d.endAt)}(n,l.child(s));return this.getDocumentsMatchingCollectionQuery(e,u,r,i).next(c=>{c.forEach((d,h)=>{o=o.insert(d,h)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((l,u)=>{const c=u.getKey();o.get(c)===null&&(o=o.insert(c,Te.newInvalidDocument(c)))});let a=Rl();return o.forEach((l,u)=>{const c=s.get(l);c!==void 0&&ql(c.mutation,u,Zt.empty(),xe.now()),vc(n,u)&&(a=a.insert(l,u))}),a})}}/**
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
 */class H4{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,n){return T.resolve(this.cr.get(n))}saveBundleMetadata(e,n){return this.cr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Ke(i.createTime)}}(n)),T.resolve()}getNamedQuery(e,n){return T.resolve(this.lr.get(n))}saveNamedQuery(e,n){return this.lr.set(n.name,function(i){return{name:i.name,query:Ev(i.bundledQuery),readTime:Ke(i.readTime)}}(n)),T.resolve()}}/**
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
 */class K4{constructor(){this.overlays=new we(L.comparator),this.hr=new Map}getOverlay(e,n){return T.resolve(this.overlays.get(n))}getOverlays(e,n){const r=cr();return T.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),T.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.hr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.hr.delete(r)),T.resolve()}getOverlaysForCollection(e,n,r){const i=cr(),s=n.length+1,o=new L(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return T.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new we((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=cr(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=cr(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return T.resolve(a)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.hr.get(i.largestBatchId).delete(r.key);this.hr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new vv(n,r));let s=this.hr.get(n);s===void 0&&(s=te(),this.hr.set(n,s)),this.hr.set(n,s.add(r.key))}}/**
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
 */class Rv{constructor(){this.Pr=new _e(rt.Ir),this.Tr=new _e(rt.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,n){const r=new rt(e,n);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Ar(new rt(e,n))}Rr(e,n){e.forEach(r=>this.removeReference(r,n))}Vr(e){const n=new L(new se([])),r=new rt(n,e),i=new rt(n,e+1),s=[];return this.Tr.forEachInRange([r,i],o=>{this.Ar(o),s.push(o.key)}),s}mr(){this.Pr.forEach(e=>this.Ar(e))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){const n=new L(new se([])),r=new rt(n,e),i=new rt(n,e+1);let s=te();return this.Tr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new rt(e,0),r=this.Pr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class rt{constructor(e,n){this.key=e,this.pr=n}static Ir(e,n){return L.comparator(e.key,n.key)||ee(e.pr,n.pr)}static Er(e,n){return ee(e.pr,n.pr)||L.comparator(e.key,n.key)}}/**
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
 */class Q4{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.yr=1,this.wr=new _e(rt.Ir)}checkEmpty(e){return T.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new _v(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.wr=this.wr.add(new rt(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return T.resolve(o)}lookupMutationBatch(e,n){return T.resolve(this.Sr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.br(r),s=i<0?0:i;return T.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return T.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(e){return T.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new rt(n,0),i=new rt(n,Number.POSITIVE_INFINITY),s=[];return this.wr.forEachInRange([r,i],o=>{const a=this.Sr(o.pr);s.push(a)}),T.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new _e(ee);return n.forEach(i=>{const s=new rt(i,0),o=new rt(i,Number.POSITIVE_INFINITY);this.wr.forEachInRange([s,o],a=>{r=r.add(a.pr)})}),T.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;L.isDocumentKey(s)||(s=s.child(""));const o=new rt(new L(s),0);let a=new _e(ee);return this.wr.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l.pr)),!0)},o),T.resolve(this.Dr(a))}Dr(e){const n=[];return e.forEach(r=>{const i=this.Sr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){j(this.Cr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return T.forEach(n.mutations,i=>{const s=new rt(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.wr=r})}Mn(e){}containsKey(e,n){const r=new rt(n,0),i=this.wr.firstAfterOrEqual(r);return T.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,T.resolve()}Cr(e,n){return this.br(e)}br(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Sr(e){const n=this.br(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class Y4{constructor(e){this.vr=e,this.docs=function(){return new we(L.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.vr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return T.resolve(r?r.document.mutableCopy():Te.newInvalidDocument(n))}getEntries(e,n){let r=en();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Te.newInvalidDocument(i))}),T.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=en();const o=n.path,a=new L(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:c}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||cv(mP(c),r)<=0||(i.has(c.key)||vc(n,c))&&(s=s.insert(c.key,c.mutableCopy()))}return T.resolve(s)}getAllFromCollectionGroup(e,n,r,i){$()}Fr(e,n){return T.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new X4(this)}getSize(e){return T.resolve(this.size)}}class X4 extends wC{constructor(e){super(),this.ar=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.ar.addEntry(e,i)):this.ar.removeEntry(r)}),T.waitFor(n)}getFromCache(e,n){return this.ar.getEntry(e,n)}getAllFromCache(e,n){return this.ar.getEntries(e,n)}}/**
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
 */class J4{constructor(e){this.persistence=e,this.Mr=new Ji(n=>Ls(n),_c),this.lastRemoteSnapshotVersion=G.min(),this.highestTargetId=0,this.Or=0,this.Nr=new Rv,this.targetCount=0,this.Lr=Bs.Nn()}forEachTarget(e,n){return this.Mr.forEach((r,i)=>n(i)),T.resolve()}getLastRemoteSnapshotVersion(e){return T.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return T.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Lr.next(),T.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Or&&(this.Or=n),T.resolve()}qn(e){this.Mr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Lr=new Bs(n),this.highestTargetId=n),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,n){return this.qn(n),this.targetCount+=1,T.resolve()}updateTargetData(e,n){return this.qn(n),T.resolve()}removeTargetData(e,n){return this.Mr.delete(n.target),this.Nr.Vr(n.targetId),this.targetCount-=1,T.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Mr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Mr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),T.waitFor(s).next(()=>i)}getTargetCount(e){return T.resolve(this.targetCount)}getTargetData(e,n){const r=this.Mr.get(n)||null;return T.resolve(r)}addMatchingKeys(e,n,r){return this.Nr.dr(n,r),T.resolve()}removeMatchingKeys(e,n,r){this.Nr.Rr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),T.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Nr.Vr(n),T.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Nr.gr(n);return T.resolve(r)}containsKey(e,n){return T.resolve(this.Nr.containsKey(n))}}/**
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
 */class TC{constructor(e,n){this.Br={},this.overlays={},this.kr=new Jt(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new J4(this),this.indexManager=new L4,this.remoteDocumentCache=function(i){return new Y4(i)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new fC(n),this.$r=new H4(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new K4,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Br[e.toKey()];return r||(r=new Q4(n,this.referenceDelegate),this.Br[e.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,n,r){x("MemoryPersistence","Starting transaction:",e);const i=new Z4(this.kr.next());return this.referenceDelegate.Ur(),r(i).next(s=>this.referenceDelegate.Wr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Gr(e,n){return T.or(Object.values(this.Br).map(r=>()=>r.containsKey(e,n)))}}class Z4 extends _P{constructor(e){super(),this.currentSequenceNumber=e}}class jf{constructor(e){this.persistence=e,this.zr=new Rv,this.jr=null}static Hr(e){return new jf(e)}get Jr(){if(this.jr)return this.jr;throw $()}addReference(e,n,r){return this.zr.addReference(r,n),this.Jr.delete(r.toString()),T.resolve()}removeReference(e,n,r){return this.zr.removeReference(r,n),this.Jr.add(r.toString()),T.resolve()}markPotentiallyOrphaned(e,n){return this.Jr.add(n.toString()),T.resolve()}removeTarget(e,n){this.zr.Vr(n.targetId).forEach(i=>this.Jr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Jr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ur(){this.jr=new Set}Wr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return T.forEach(this.Jr,r=>{const i=L.fromPath(r);return this.Yr(e,i).next(s=>{s||n.removeEntry(i,G.min())})}).next(()=>(this.jr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Yr(e,n).next(r=>{r?this.Jr.delete(n.toString()):this.Jr.add(n.toString())})}Kr(e){return 0}Yr(e,n){return T.or([()=>T.resolve(this.zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gr(e,n)])}}/**
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
 */class e${constructor(e){this.serializer=e}N(e,n,r,i){const s=new Mf("createOrUpgrade",n);r<1&&i>=1&&(function(l){l.createObjectStore("owner")}(e),function(l){l.createObjectStore("mutationQueues",{keyPath:"userId"}),l.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",zE,{unique:!0}),l.createObjectStore("documentMutations")}(e),C0(e),function(l){l.createObjectStore("remoteDocuments")}(e));let o=T.resolve();return r<3&&i>=3&&(r!==0&&(function(l){l.deleteObjectStore("targetDocuments"),l.deleteObjectStore("targets"),l.deleteObjectStore("targetGlobal")}(e),C0(e)),o=o.next(()=>function(l){const u=l.store("targetGlobal"),c={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:G.min().toTimestamp(),targetCount:0};return u.put("targetGlobalKey",c)}(s))),r<4&&i>=4&&(r!==0&&(o=o.next(()=>function(l,u){return u.store("mutations").W().next(c=>{l.deleteObjectStore("mutations"),l.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",zE,{unique:!0});const d=u.store("mutations"),h=c.map(f=>d.put(f));return T.waitFor(h)})}(e,s))),o=o.next(()=>{(function(l){l.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),r<5&&i>=5&&(o=o.next(()=>this.Xr(s))),r<6&&i>=6&&(o=o.next(()=>(function(l){l.createObjectStore("remoteDocumentGlobal")}(e),this.ei(s)))),r<7&&i>=7&&(o=o.next(()=>this.ti(s))),r<8&&i>=8&&(o=o.next(()=>this.ni(e,s))),r<9&&i>=9&&(o=o.next(()=>{(function(l){l.objectStoreNames.contains("remoteDocumentChanges")&&l.deleteObjectStore("remoteDocumentChanges")})(e)})),r<10&&i>=10&&(o=o.next(()=>this.ri(s))),r<11&&i>=11&&(o=o.next(()=>{(function(l){l.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(l){l.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),r<12&&i>=12&&(o=o.next(()=>{(function(l){const u=l.createObjectStore("documentOverlays",{keyPath:MU});u.createIndex("collectionPathOverlayIndex",FU,{unique:!1}),u.createIndex("collectionGroupOverlayIndex",UU,{unique:!1})})(e)})),r<13&&i>=13&&(o=o.next(()=>function(l){const u=l.createObjectStore("remoteDocumentsV14",{keyPath:AU});u.createIndex("documentKeyIndex",PU),u.createIndex("collectionGroupIndex",CU)}(e)).next(()=>this.ii(e,s)).next(()=>e.deleteObjectStore("remoteDocuments"))),r<14&&i>=14&&(o=o.next(()=>this.si(e,s))),r<15&&i>=15&&(o=o.next(()=>function(l){l.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),l.createObjectStore("indexState",{keyPath:NU}).createIndex("sequenceNumberIndex",OU,{unique:!1}),l.createObjectStore("indexEntries",{keyPath:VU}).createIndex("documentKeyIndex",LU,{unique:!1})}(e))),o}ei(e){let n=0;return e.store("remoteDocuments").Y((r,i)=>{n+=Dh(i)}).next(()=>{const r={byteSize:n};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",r)})}Xr(e){const n=e.store("mutationQueues"),r=e.store("mutations");return n.W().next(i=>T.forEach(i,s=>{const o=IDBKeyRange.bound([s.userId,-1],[s.userId,s.lastAcknowledgedBatchId]);return r.W("userMutationsIndex",o).next(a=>T.forEach(a,l=>{j(l.userId===s.userId);const u=as(this.serializer,l);return _C(e,s.userId,u).next(()=>{})}))}))}ti(e){const n=e.store("targetDocuments"),r=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(i=>{const s=[];return r.Y((o,a)=>{const l=new se(o),u=function(d){return[0,Bt(d)]}(l);s.push(n.get(u).next(c=>c?T.resolve():(d=>n.put({targetId:0,path:Bt(d),sequenceNumber:i.highestListenSequenceNumber}))(l)))}).next(()=>T.waitFor(s))})}ni(e,n){e.createObjectStore("collectionParents",{keyPath:DU});const r=n.store("collectionParents"),i=new Sv,s=o=>{if(i.add(o)){const a=o.lastSegment(),l=o.popLast();return r.put({collectionId:a,parent:Bt(l)})}};return n.store("remoteDocuments").Y({J:!0},(o,a)=>{const l=new se(o);return s(l.popLast())}).next(()=>n.store("documentMutations").Y({J:!0},([o,a,l],u)=>{const c=ur(a);return s(c.popLast())}))}ri(e){const n=e.store("targets");return n.Y((r,i)=>{const s=Pl(i),o=pC(this.serializer,s);return n.put(o)})}ii(e,n){const r=n.store("remoteDocuments"),i=[];return r.Y((s,o)=>{const a=n.store("remoteDocumentsV14"),l=function(d){return d.document?new L(se.fromString(d.document.name).popFirst(5)):d.noDocument?L.fromSegments(d.noDocument.path):d.unknownDocument?L.fromSegments(d.unknownDocument.path):$()}(o).path.toArray(),u={prefixPath:l.slice(0,l.length-2),collectionGroup:l[l.length-2],documentId:l[l.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};i.push(a.put(u))}).next(()=>T.waitFor(i))}si(e,n){const r=n.store("mutations"),i=IC(this.serializer),s=new TC(jf.Hr,this.serializer.ct);return r.W().next(o=>{const a=new Map;return o.forEach(l=>{var u;let c=(u=a.get(l.userId))!==null&&u!==void 0?u:te();as(this.serializer,l).keys().forEach(d=>c=c.add(d)),a.set(l.userId,c)}),T.forEach(a,(l,u)=>{const c=new st(u),d=Bf.lt(this.serializer,c),h=s.getIndexManager(c),f=zf.lt(c,this.serializer,h,s.referenceDelegate);return new EC(i,f,d,h).recalculateAndSaveOverlaysForDocumentKeys(new $g(n,Jt._e),l).next()})})}}function C0(t){t.createObjectStore("targetDocuments",{keyPath:bU}).createIndex("documentTargetsIndex",xU,{unique:!0}),t.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",kU,{unique:!0}),t.createObjectStore("targetGlobal")}const cm="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class Av{constructor(e,n,r,i,s,o,a,l,u,c,d=15){if(this.allowTabSynchronization=e,this.persistenceKey=n,this.clientId=r,this.oi=s,this.window=o,this.document=a,this._i=u,this.ai=c,this.ui=d,this.kr=null,this.qr=!1,this.isPrimary=!1,this.networkEnabled=!0,this.ci=null,this.inForeground=!1,this.li=null,this.hi=null,this.Pi=Number.NEGATIVE_INFINITY,this.Ii=h=>Promise.resolve(),!Av.D())throw new b(P.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new j4(this,i),this.Ti=n+"main",this.serializer=new fC(l),this.Ei=new Rn(this.Ti,this.ui,new e$(this.serializer)),this.Qr=new F4(this.referenceDelegate,this.serializer),this.remoteDocumentCache=IC(this.serializer),this.$r=new b4,this.window&&this.window.localStorage?this.di=this.window.localStorage:(this.di=null,c===!1&&He("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.Ai().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new b(P.FAILED_PRECONDITION,cm);return this.Ri(),this.Vi(),this.mi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Qr.getHighestSequenceNumber(e))}).then(e=>{this.kr=new Jt(e,this._i)}).then(()=>{this.qr=!0}).catch(e=>(this.Ei&&this.Ei.close(),Promise.reject(e)))}fi(e){return this.Ii=async n=>{if(this.started)return e(n)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.Ei.B(async n=>{n.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.oi.enqueueAndForget(async()=>{this.started&&await this.Ai()}))}Ai(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>cd(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.gi(e).next(n=>{n||(this.isPrimary=!1,this.oi.enqueueRetryable(()=>this.Ii(!1)))})}).next(()=>this.pi(e)).next(n=>this.isPrimary&&!n?this.yi(e).next(()=>!1):!!n&&this.wi(e).next(()=>!0))).catch(e=>{if(Xi(e))return x("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return x("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.oi.enqueueRetryable(()=>this.Ii(e)),this.isPrimary=e})}gi(e){return pl(e).get("owner").next(n=>T.resolve(this.Si(n)))}bi(e){return cd(e).delete(this.clientId)}async Di(){if(this.isPrimary&&!this.Ci(this.Pi,18e5)){this.Pi=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",n=>{const r=ht(n,"clientMetadata");return r.W().next(i=>{const s=this.vi(i,18e5),o=i.filter(a=>s.indexOf(a)===-1);return T.forEach(o,a=>r.delete(a.clientId)).next(()=>o)})}).catch(()=>[]);if(this.di)for(const n of e)this.di.removeItem(this.Fi(n.clientId))}}mi(){this.hi=this.oi.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.Ai().then(()=>this.Di()).then(()=>this.mi()))}Si(e){return!!e&&e.ownerId===this.clientId}pi(e){return this.ai?T.resolve(!0):pl(e).get("owner").next(n=>{if(n!==null&&this.Ci(n.leaseTimestampMs,5e3)&&!this.Mi(n.ownerId)){if(this.Si(n)&&this.networkEnabled)return!0;if(!this.Si(n)){if(!n.allowTabSynchronization)throw new b(P.FAILED_PRECONDITION,cm);return!1}}return!(!this.networkEnabled||!this.inForeground)||cd(e).W().next(r=>this.vi(r,5e3).find(i=>{if(this.clientId!==i.clientId){const s=!this.networkEnabled&&i.networkEnabled,o=!this.inForeground&&i.inForeground,a=this.networkEnabled===i.networkEnabled;if(s||o&&a)return!0}return!1})===void 0)}).next(n=>(this.isPrimary!==n&&x("IndexedDbPersistence",`Client ${n?"is":"is not"} eligible for a primary lease.`),n))}async shutdown(){this.qr=!1,this.xi(),this.hi&&(this.hi.cancel(),this.hi=null),this.Oi(),this.Ni(),await this.Ei.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const n=new $g(e,Jt._e);return this.yi(n).next(()=>this.bi(n))}),this.Ei.close(),this.Li()}vi(e,n){return e.filter(r=>this.Ci(r.updateTimeMs,n)&&!this.Mi(r.clientId))}Bi(){return this.runTransaction("getActiveClients","readonly",e=>cd(e).W().next(n=>this.vi(n,18e5).map(r=>r.clientId)))}get started(){return this.qr}getMutationQueue(e,n){return zf.lt(e,this.serializer,n,this.referenceDelegate)}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new M4(e,this.serializer.ct.databaseId)}getDocumentOverlayCache(e){return Bf.lt(this.serializer,e)}getBundleCache(){return this.$r}runTransaction(e,n,r){x("IndexedDbPersistence","Starting transaction:",e);const i=n==="readonly"?"readonly":"readwrite",s=function(l){return l===15?BU:l===14?EP:l===13?IP:l===12?$U:l===11?wP:void $()}(this.ui);let o;return this.Ei.runTransaction(e,i,s,a=>(o=new $g(a,this.kr?this.kr.next():Jt._e),n==="readwrite-primary"?this.gi(o).next(l=>!!l||this.pi(o)).next(l=>{if(!l)throw He(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.oi.enqueueRetryable(()=>this.Ii(!1)),new b(P.FAILED_PRECONDITION,gP);return r(o)}).next(l=>this.wi(o).next(()=>l)):this.ki(o).next(()=>r(o)))).then(a=>(o.raiseOnCommittedEvent(),a))}ki(e){return pl(e).get("owner").next(n=>{if(n!==null&&this.Ci(n.leaseTimestampMs,5e3)&&!this.Mi(n.ownerId)&&!this.Si(n)&&!(this.ai||this.allowTabSynchronization&&n.allowTabSynchronization))throw new b(P.FAILED_PRECONDITION,cm)})}wi(e){const n={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return pl(e).put("owner",n)}static D(){return Rn.D()}yi(e){const n=pl(e);return n.get("owner").next(r=>this.Si(r)?(x("IndexedDbPersistence","Releasing primary lease."),n.delete("owner")):T.resolve())}Ci(e,n){const r=Date.now();return!(e<r-n)&&(!(e>r)||(He(`Detected an update time that is in the future: ${e} > ${r}`),!1))}Ri(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.li=()=>{this.oi.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.Ai()))},this.document.addEventListener("visibilitychange",this.li),this.inForeground=this.document.visibilityState==="visible")}Oi(){this.li&&(this.document.removeEventListener("visibilitychange",this.li),this.li=null)}Vi(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.ci=()=>{this.xi();const n=/(?:Version|Mobile)\/1[456]/;XR()&&(navigator.appVersion.match(n)||navigator.userAgent.match(n))&&this.oi.enterRestrictedMode(!0),this.oi.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.ci))}Ni(){this.ci&&(this.window.removeEventListener("pagehide",this.ci),this.ci=null)}Mi(e){var n;try{const r=((n=this.di)===null||n===void 0?void 0:n.getItem(this.Fi(e)))!==null;return x("IndexedDbPersistence",`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return He("IndexedDbPersistence","Failed to get zombied client id.",r),!1}}xi(){if(this.di)try{this.di.setItem(this.Fi(this.clientId),String(Date.now()))}catch(e){He("Failed to set zombie client id.",e)}}Li(){if(this.di)try{this.di.removeItem(this.Fi(this.clientId))}catch{}}Fi(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function pl(t){return ht(t,"owner")}function cd(t){return ht(t,"clientMetadata")}function Pv(t,e){let n=t.projectId;return t.isDefaultDatabase||(n+="."+t.database),"firestore/"+e+"/"+n+"/"}/**
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
 */class Cv{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.qi=r,this.Qi=i}static Ki(e,n){let r=te(),i=te();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Cv(e,n.fromCache,r,i)}}/**
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
 */class t${constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class SC{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return XR()?8:Rn.v(De())>0?6:4}()}initialize(e,n){this.zi=e,this.indexManager=n,this.$i=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.ji(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Hi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new t$;return this.Ji(e,n,o).next(a=>{if(s.result=a,this.Ui)return this.Yi(e,n,o,a.size)})}).next(()=>s.result)}Yi(e,n,r,i){return r.documentReadCount<this.Wi?(go()<=ie.DEBUG&&x("QueryEngine","SDK will not create cache indexes for query:",_o(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),T.resolve()):(go()<=ie.DEBUG&&x("QueryEngine","Query:",_o(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Gi*i?(go()<=ie.DEBUG&&x("QueryEngine","The SDK decides to create cache indexes for query:",_o(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,zt(n))):T.resolve())}ji(e,n){if(e0(n))return T.resolve(null);let r=zt(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=kh(n,null,"F"),r=zt(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=te(...s);return this.zi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.Zi(n,a);return this.Xi(n,u,o,l.readTime)?this.ji(e,kh(n,null,"F")):this.es(e,u,n,l)}))})))}Hi(e,n,r,i){return e0(n)||i.isEqual(G.min())?T.resolve(null):this.zi.getDocuments(e,r).next(s=>{const o=this.Zi(n,s);return this.Xi(n,o,r,i)?T.resolve(null):(go()<=ie.DEBUG&&x("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),_o(n)),this.es(e,o,n,pP(i,-1)).next(a=>a))})}Zi(e,n){let r=new _e(MP(e));return n.forEach((i,s)=>{vc(e,s)&&(r=r.add(s))}),r}Xi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Ji(e,n,r){return go()<=ie.DEBUG&&x("QueryEngine","Using full collection scan to execute query:",_o(n)),this.zi.getDocumentsMatchingQuery(e,n,gn.min(),r)}es(e,n,r,i){return this.zi.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class n${constructor(e,n,r,i){this.persistence=e,this.ts=n,this.serializer=i,this.ns=new we(ee),this.rs=new Ji(s=>Ls(s),_c),this.ss=new Map,this.os=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this._s(r)}_s(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new EC(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ns))}}function RC(t,e,n,r){return new n$(t,e,n,r)}async function AC(t,e){const n=F(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n._s(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=te();for(const u of i){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(r,l).next(u=>({us:u,removedBatchIds:o,addedBatchIds:a}))})})}function r$(t,e){const n=F(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.os.newChangeBuffer({trackRemovals:!0});return function(a,l,u,c){const d=u.batch,h=d.keys();let f=T.resolve();return h.forEach(v=>{f=f.next(()=>c.getEntry(l,v)).next(y=>{const E=u.docVersions.get(v);j(E!==null),y.version.compareTo(E)<0&&(d.applyToRemoteDocument(y,u),y.isValidDocument()&&(y.setReadTime(u.commitVersion),c.addEntry(y)))})}),f.next(()=>a.mutationQueue.removeMutationBatch(l,d))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=te();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(l=l.add(a.batch.mutations[u].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function PC(t){const e=F(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Qr.getLastRemoteSnapshotVersion(n))}function i$(t,e){const n=F(t),r=e.snapshotVersion;let i=n.ns;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.os.newChangeBuffer({trackRemovals:!0});i=n.ns;const a=[];e.targetChanges.forEach((c,d)=>{const h=i.get(d);if(!h)return;a.push(n.Qr.removeMatchingKeys(s,c.removedDocuments,d).next(()=>n.Qr.addMatchingKeys(s,c.addedDocuments,d)));let f=h.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(d)!==null?f=f.withResumeToken(nt.EMPTY_BYTE_STRING,G.min()).withLastLimboFreeSnapshotVersion(G.min()):c.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(c.resumeToken,r)),i=i.insert(d,f),function(y,E,g){return y.resumeToken.approximateByteSize()===0||E.snapshotVersion.toMicroseconds()-y.snapshotVersion.toMicroseconds()>=3e8?!0:g.addedDocuments.size+g.modifiedDocuments.size+g.removedDocuments.size>0}(h,f,c)&&a.push(n.Qr.updateTargetData(s,f))});let l=en(),u=te();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(CC(s,o,e.documentUpdates).next(c=>{l=c.cs,u=c.ls})),!r.isEqual(G.min())){const c=n.Qr.getLastRemoteSnapshotVersion(s).next(d=>n.Qr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return T.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.ns=i,s))}function CC(t,e,n){let r=te(),i=te();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=en();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(G.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):x("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{cs:o,ls:i}})}function s$(t,e){const n=F(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function ga(t,e){const n=F(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Qr.getTargetData(r,e).next(s=>s?(i=s,T.resolve(i)):n.Qr.allocateTargetId(r).next(o=>(i=new Or(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Qr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.ns.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.ns=n.ns.insert(r.targetId,r),n.rs.set(e,r.targetId)),r})}async function _a(t,e,n){const r=F(t),i=r.ns.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Xi(o))throw o;x("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ns=r.ns.remove(e),r.rs.delete(i.target)}function Nh(t,e,n){const r=F(t);let i=G.min(),s=te();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,u,c){const d=F(l),h=d.rs.get(c);return h!==void 0?T.resolve(d.ns.get(h)):d.Qr.getTargetData(u,c)}(r,o,zt(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.ts.getDocumentsMatchingQuery(o,e,n?i:G.min(),n?s:te())).next(a=>(xC(r,LP(e),a),{documents:a,hs:s})))}function kC(t,e){const n=F(t),r=F(n.Qr),i=n.ns.get(e);return i?Promise.resolve(i.target):n.persistence.runTransaction("Get target data","readonly",s=>r._t(s,e).next(o=>o?o.target:null))}function bC(t,e){const n=F(t),r=n.ss.get(e)||G.min();return n.persistence.runTransaction("Get new document changes","readonly",i=>n.os.getAllFromCollectionGroup(i,e,pP(r,-1),Number.MAX_SAFE_INTEGER)).then(i=>(xC(n,e,i),i))}function xC(t,e,n){let r=t.ss.get(e)||G.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.ss.set(e,r)}async function o$(t,e,n,r){const i=F(t);let s=te(),o=en();for(const u of n){const c=e.Ps(u.metadata.name);u.document&&(s=s.add(c));const d=e.Is(u);d.setReadTime(e.Ts(u.metadata.readTime)),o=o.insert(c,d)}const a=i.os.newChangeBuffer({trackRemovals:!0}),l=await ga(i,function(c){return zt(Oa(se.fromString(`__bundle__/docs/${c}`)))}(r));return i.persistence.runTransaction("Apply bundle documents","readwrite",u=>CC(u,a,o).next(c=>(a.apply(u),c)).next(c=>i.Qr.removeMatchingKeysForTargetId(u,l.targetId).next(()=>i.Qr.addMatchingKeys(u,s,l.targetId)).next(()=>i.localDocuments.getLocalViewOfDocuments(u,c.cs,c.ls)).next(()=>c.cs)))}async function a$(t,e,n=te()){const r=await ga(t,zt(Ev(e.bundledQuery))),i=F(t);return i.persistence.runTransaction("Save named query","readwrite",s=>{const o=Ke(e.readTime);if(r.snapshotVersion.compareTo(o)>=0)return i.$r.saveNamedQuery(s,e);const a=r.withResumeToken(nt.EMPTY_BYTE_STRING,o);return i.ns=i.ns.insert(a.targetId,a),i.Qr.updateTargetData(s,a).next(()=>i.Qr.removeMatchingKeysForTargetId(s,r.targetId)).next(()=>i.Qr.addMatchingKeys(s,n,r.targetId)).next(()=>i.$r.saveNamedQuery(s,e))})}function k0(t,e){return`firestore_clients_${t}_${e}`}function b0(t,e,n){let r=`firestore_mutations_${t}_${n}`;return e.isAuthenticated()&&(r+=`_${e.uid}`),r}function dm(t,e){return`firestore_targets_${t}_${e}`}class Oh{constructor(e,n,r,i){this.user=e,this.batchId=n,this.state=r,this.error=i}static Es(e,n,r){const i=JSON.parse(r);let s,o=typeof i=="object"&&["pending","acknowledged","rejected"].indexOf(i.state)!==-1&&(i.error===void 0||typeof i.error=="object");return o&&i.error&&(o=typeof i.error.message=="string"&&typeof i.error.code=="string",o&&(s=new b(i.error.code,i.error.message))),o?new Oh(e,n,i.state,s):(He("SharedClientState",`Failed to parse mutation state for ID '${n}': ${r}`),null)}ds(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Wl{constructor(e,n,r){this.targetId=e,this.state=n,this.error=r}static Es(e,n){const r=JSON.parse(n);let i,s=typeof r=="object"&&["not-current","current","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return s&&r.error&&(s=typeof r.error.message=="string"&&typeof r.error.code=="string",s&&(i=new b(r.error.code,r.error.message))),s?new Wl(e,r.state,i):(He("SharedClientState",`Failed to parse target state for ID '${e}': ${n}`),null)}ds(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Vh{constructor(e,n){this.clientId=e,this.activeTargetIds=n}static Es(e,n){const r=JSON.parse(n);let i=typeof r=="object"&&r.activeTargetIds instanceof Array,s=mv();for(let o=0;i&&o<r.activeTargetIds.length;++o)i=yP(r.activeTargetIds[o]),s=s.add(r.activeTargetIds[o]);return i?new Vh(e,s):(He("SharedClientState",`Failed to parse client data for instance '${e}': ${n}`),null)}}class kv{constructor(e,n){this.clientId=e,this.onlineState=n}static Es(e){const n=JSON.parse(e);return typeof n=="object"&&["Unknown","Online","Offline"].indexOf(n.onlineState)!==-1&&typeof n.clientId=="string"?new kv(n.clientId,n.onlineState):(He("SharedClientState",`Failed to parse online state: ${e}`),null)}}class e_{constructor(){this.activeTargetIds=mv()}As(e){this.activeTargetIds=this.activeTargetIds.add(e)}Rs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ds(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class hm{constructor(e,n,r,i,s){this.window=e,this.oi=n,this.persistenceKey=r,this.Vs=i,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.fs=this.gs.bind(this),this.ps=new we(ee),this.started=!1,this.ys=[];const o=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=s,this.ws=k0(this.persistenceKey,this.Vs),this.Ss=function(l){return`firestore_sequence_number_${l}`}(this.persistenceKey),this.ps=this.ps.insert(this.Vs,new e_),this.bs=new RegExp(`^firestore_clients_${o}_([^_]*)$`),this.Ds=new RegExp(`^firestore_mutations_${o}_(\\d+)(?:_(.*))?$`),this.Cs=new RegExp(`^firestore_targets_${o}_(\\d+)$`),this.vs=function(l){return`firestore_online_state_${l}`}(this.persistenceKey),this.Fs=function(l){return`firestore_bundle_loaded_v2_${l}`}(this.persistenceKey),this.window.addEventListener("storage",this.fs)}static D(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.Bi();for(const r of e){if(r===this.Vs)continue;const i=this.getItem(k0(this.persistenceKey,r));if(i){const s=Vh.Es(r,i);s&&(this.ps=this.ps.insert(s.clientId,s))}}this.Ms();const n=this.storage.getItem(this.vs);if(n){const r=this.xs(n);r&&this.Os(r)}for(const r of this.ys)this.gs(r);this.ys=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.Ss,JSON.stringify(e))}getAllActiveQueryTargets(){return this.Ns(this.ps)}isActiveQueryTarget(e){let n=!1;return this.ps.forEach((r,i)=>{i.activeTargetIds.has(e)&&(n=!0)}),n}addPendingMutation(e){this.Ls(e,"pending")}updateMutationState(e,n,r){this.Ls(e,n,r),this.Bs(e)}addLocalQueryTarget(e){let n="not-current";if(this.isActiveQueryTarget(e)){const r=this.storage.getItem(dm(this.persistenceKey,e));if(r){const i=Wl.Es(e,r);i&&(n=i.state)}}return this.ks.As(e),this.Ms(),n}removeLocalQueryTarget(e){this.ks.Rs(e),this.Ms()}isLocalQueryTarget(e){return this.ks.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(dm(this.persistenceKey,e))}updateQueryState(e,n,r){this.qs(e,n,r)}handleUserChange(e,n,r){n.forEach(i=>{this.Bs(i)}),this.currentUser=e,r.forEach(i=>{this.addPendingMutation(i)})}setOnlineState(e){this.Qs(e)}notifyBundleLoaded(e){this.Ks(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.fs),this.removeItem(this.ws),this.started=!1)}getItem(e){const n=this.storage.getItem(e);return x("SharedClientState","READ",e,n),n}setItem(e,n){x("SharedClientState","SET",e,n),this.storage.setItem(e,n)}removeItem(e){x("SharedClientState","REMOVE",e),this.storage.removeItem(e)}gs(e){const n=e;if(n.storageArea===this.storage){if(x("SharedClientState","EVENT",n.key,n.newValue),n.key===this.ws)return void He("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.oi.enqueueRetryable(async()=>{if(this.started){if(n.key!==null){if(this.bs.test(n.key)){if(n.newValue==null){const r=this.$s(n.key);return this.Us(r,null)}{const r=this.Ws(n.key,n.newValue);if(r)return this.Us(r.clientId,r)}}else if(this.Ds.test(n.key)){if(n.newValue!==null){const r=this.Gs(n.key,n.newValue);if(r)return this.zs(r)}}else if(this.Cs.test(n.key)){if(n.newValue!==null){const r=this.js(n.key,n.newValue);if(r)return this.Hs(r)}}else if(n.key===this.vs){if(n.newValue!==null){const r=this.xs(n.newValue);if(r)return this.Os(r)}}else if(n.key===this.Ss){const r=function(s){let o=Jt._e;if(s!=null)try{const a=JSON.parse(s);j(typeof a=="number"),o=a}catch(a){He("SharedClientState","Failed to read sequence number from WebStorage",a)}return o}(n.newValue);r!==Jt._e&&this.sequenceNumberHandler(r)}else if(n.key===this.Fs){const r=this.Js(n.newValue);await Promise.all(r.map(i=>this.syncEngine.Ys(i)))}}}else this.ys.push(n)})}}get ks(){return this.ps.get(this.Vs)}Ms(){this.setItem(this.ws,this.ks.ds())}Ls(e,n,r){const i=new Oh(this.currentUser,e,n,r),s=b0(this.persistenceKey,this.currentUser,e);this.setItem(s,i.ds())}Bs(e){const n=b0(this.persistenceKey,this.currentUser,e);this.removeItem(n)}Qs(e){const n={clientId:this.Vs,onlineState:e};this.storage.setItem(this.vs,JSON.stringify(n))}qs(e,n,r){const i=dm(this.persistenceKey,e),s=new Wl(e,n,r);this.setItem(i,s.ds())}Ks(e){const n=JSON.stringify(Array.from(e));this.setItem(this.Fs,n)}$s(e){const n=this.bs.exec(e);return n?n[1]:null}Ws(e,n){const r=this.$s(e);return Vh.Es(r,n)}Gs(e,n){const r=this.Ds.exec(e),i=Number(r[1]),s=r[2]!==void 0?r[2]:null;return Oh.Es(new st(s),i,n)}js(e,n){const r=this.Cs.exec(e),i=Number(r[1]);return Wl.Es(i,n)}xs(e){return kv.Es(e)}Js(e){return JSON.parse(e)}async zs(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.Zs(e.batchId,e.state,e.error);x("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}Hs(e){return this.syncEngine.Xs(e.targetId,e.state,e.error)}Us(e,n){const r=n?this.ps.insert(e,n):this.ps.remove(e),i=this.Ns(this.ps),s=this.Ns(r),o=[],a=[];return s.forEach(l=>{i.has(l)||o.push(l)}),i.forEach(l=>{s.has(l)||a.push(l)}),this.syncEngine.eo(o,a).then(()=>{this.ps=r})}Os(e){this.ps.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}Ns(e){let n=mv();return e.forEach((r,i)=>{n=n.unionWith(i.activeTargetIds)}),n}}class DC{constructor(){this.no=new e_,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.no.As(e),this.ro[e]||"not-current"}updateQueryState(e,n,r){this.ro[e]=n}removeLocalQueryTarget(e){this.no.Rs(e)}isLocalQueryTarget(e){return this.no.activeTargetIds.has(e)}clearQueryState(e){delete this.ro[e]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(e){return this.no.activeTargetIds.has(e)}start(){return this.no=new e_,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class l${io(e){}shutdown(){}}/**
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
 */class x0{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(e){this.uo.push(e)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){x("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.uo)e(0)}ao(){x("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.uo)e(1)}static D(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let dd=null;function fm(){return dd===null?dd=function(){return 268435456+Math.round(2147483648*Math.random())}():dd++,"0x"+dd.toString(16)}/**
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
 */const u$={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class c${constructor(e){this.lo=e.lo,this.ho=e.ho}Po(e){this.Io=e}To(e){this.Eo=e}onMessage(e){this.Ao=e}close(){this.ho()}send(e){this.lo(e)}Ro(){this.Io()}Vo(e){this.Eo(e)}mo(e){this.Ao(e)}}/**
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
 */const At="WebChannelConnection";class d$ extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.fo=r+"://"+n.host,this.po=`projects/${i}/databases/${s}`,this.yo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get wo(){return!1}So(n,r,i,s,o){const a=fm(),l=this.bo(n,r.toUriEncodedString());x("RestConnection",`Sending RPC '${n}' ${a}:`,l,i);const u={"google-cloud-resource-prefix":this.po,"x-goog-request-params":this.yo};return this.Do(u,s,o),this.Co(n,l,u,i).then(c=>(x("RestConnection",`Received RPC '${n}' ${a}: `,c),c),c=>{throw Gn("RestConnection",`RPC '${n}' ${a} failed with error: `,c,"url: ",l,"request:",i),c})}vo(n,r,i,s,o,a){return this.So(n,r,i,s,o)}Do(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Na}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}bo(n,r){const i=u$[n];return`${this.fo}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Co(e,n,r,i){const s=fm();return new Promise((o,a)=>{const l=new aU;l.setWithCredentials(!0),l.listenOnce(sU.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case lm.NO_ERROR:const c=l.getResponseJson();x(At,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(c)),o(c);break;case lm.TIMEOUT:x(At,`RPC '${e}' ${s} timed out`),a(new b(P.DEADLINE_EXCEEDED,"Request time out"));break;case lm.HTTP_ERROR:const d=l.getStatus();if(x(At,`RPC '${e}' ${s} failed with status:`,d,"response text:",l.getResponseText()),d>0){let h=l.getResponseJson();Array.isArray(h)&&(h=h[0]);const f=h==null?void 0:h.error;if(f&&f.status&&f.message){const v=function(E){const g=E.toLowerCase().replace(/_/g,"-");return Object.values(P).indexOf(g)>=0?g:P.UNKNOWN}(f.status);a(new b(v,f.message))}else a(new b(P.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new b(P.UNAVAILABLE,"Connection failed."));break;default:$()}}finally{x(At,`RPC '${e}' ${s} completed.`)}});const u=JSON.stringify(i);x(At,`RPC '${e}' ${s} sending request:`,i),l.send(n,"POST",u,r,15)})}Fo(e,n,r){const i=fm(),s=[this.fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=rU(),a=iU(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Do(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const c=s.join("");x(At,`Creating RPC '${e}' stream ${i}: ${c}`,l);const d=o.createWebChannel(c,l);let h=!1,f=!1;const v=new c$({lo:E=>{f?x(At,`Not sending because RPC '${e}' stream ${i} is closed:`,E):(h||(x(At,`Opening RPC '${e}' stream ${i} transport.`),d.open(),h=!0),x(At,`RPC '${e}' stream ${i} sending:`,E),d.send(E))},ho:()=>d.close()}),y=(E,g,p)=>{E.listen(g,m=>{try{p(m)}catch(I){setTimeout(()=>{throw I},0)}})};return y(d,od.EventType.OPEN,()=>{f||x(At,`RPC '${e}' stream ${i} transport opened.`)}),y(d,od.EventType.CLOSE,()=>{f||(f=!0,x(At,`RPC '${e}' stream ${i} transport closed`),v.Vo())}),y(d,od.EventType.ERROR,E=>{f||(f=!0,Gn(At,`RPC '${e}' stream ${i} transport errored:`,E),v.Vo(new b(P.UNAVAILABLE,"The operation could not be completed")))}),y(d,od.EventType.MESSAGE,E=>{var g;if(!f){const p=E.data[0];j(!!p);const m=p,I=m.error||((g=m[0])===null||g===void 0?void 0:g.error);if(I){x(At,`RPC '${e}' stream ${i} received error:`,I);const A=I.status;let C=function(R){const k=Qe[R];if(k!==void 0)return XP(k)}(A),_=I.message;C===void 0&&(C=P.INTERNAL,_="Unknown error status: "+A+" with message "+I.message),f=!0,v.Vo(new b(C,_)),d.close()}else x(At,`RPC '${e}' stream ${i} received:`,p),v.mo(p)}}),y(a,oU.STAT_EVENT,E=>{E.stat===FE.PROXY?x(At,`RPC '${e}' stream ${i} detected buffering proxy`):E.stat===FE.NOPROXY&&x(At,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{v.Ro()},0),v}}/**
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
 */function NC(){return typeof window!="undefined"?window:null}function Fd(){return typeof document!="undefined"?document:null}/**
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
 */function Tc(t){return new v4(t,!0)}/**
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
 */class bv{constructor(e,n,r=1e3,i=1.5,s=6e4){this.oi=e,this.timerId=n,this.Mo=r,this.xo=i,this.Oo=s,this.No=0,this.Lo=null,this.Bo=Date.now(),this.reset()}reset(){this.No=0}ko(){this.No=this.Oo}qo(e){this.cancel();const n=Math.floor(this.No+this.Qo()),r=Math.max(0,Date.now()-this.Bo),i=Math.max(0,n-r);i>0&&x("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.No} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Lo=this.oi.enqueueAfterDelay(this.timerId,i,()=>(this.Bo=Date.now(),e())),this.No*=this.xo,this.No<this.Mo&&(this.No=this.Mo),this.No>this.Oo&&(this.No=this.Oo)}Ko(){this.Lo!==null&&(this.Lo.skipDelay(),this.Lo=null)}cancel(){this.Lo!==null&&(this.Lo.cancel(),this.Lo=null)}Qo(){return(Math.random()-.5)*this.No}}/**
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
 */class OC{constructor(e,n,r,i,s,o,a,l){this.oi=e,this.$o=r,this.Uo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Wo=0,this.Go=null,this.zo=null,this.stream=null,this.jo=new bv(e,n)}Ho(){return this.state===1||this.state===5||this.Jo()}Jo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Yo()}async stop(){this.Ho()&&await this.close(0)}Zo(){this.state=0,this.jo.reset()}Xo(){this.Jo()&&this.Go===null&&(this.Go=this.oi.enqueueAfterDelay(this.$o,6e4,()=>this.e_()))}t_(e){this.n_(),this.stream.send(e)}async e_(){if(this.Jo())return this.close(0)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}r_(){this.zo&&(this.zo.cancel(),this.zo=null)}async close(e,n){this.n_(),this.r_(),this.jo.cancel(),this.Wo++,e!==4?this.jo.reset():n&&n.code===P.RESOURCE_EXHAUSTED?(He(n.toString()),He("Using maximum backoff delay to prevent overloading the backend."),this.jo.ko()):n&&n.code===P.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.i_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.To(n)}i_(){}auth(){this.state=1;const e=this.s_(this.Wo),n=this.Wo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Wo===n&&this.o_(r,i)},r=>{e(()=>{const i=new b(P.UNKNOWN,"Fetching auth token failed: "+r.message);return this.__(i)})})}o_(e,n){const r=this.s_(this.Wo);this.stream=this.a_(e,n),this.stream.Po(()=>{r(()=>(this.state=2,this.zo=this.oi.enqueueAfterDelay(this.Uo,1e4,()=>(this.Jo()&&(this.state=3),Promise.resolve())),this.listener.Po()))}),this.stream.To(i=>{r(()=>this.__(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Yo(){this.state=5,this.jo.qo(async()=>{this.state=0,this.start()})}__(e){return x("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}s_(e){return n=>{this.oi.enqueueAndForget(()=>this.Wo===e?n():(x("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class h$ extends OC{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}a_(e,n){return this.connection.Fo("Listen",e,n)}onMessage(e){this.jo.reset();const n=E4(this.serializer,e),r=function(s){if(!("targetChange"in s))return G.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?G.min():o.readTime?Ke(o.readTime):G.min()}(e);return this.listener.u_(n,r)}c_(e){const n={};n.database=Qg(this.serializer),n.addTarget=function(s,o){let a;const l=o.target;if(a=Ph(l)?{documents:aC(s,l)}:{query:lC(s,l).ut},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=tC(s,o.resumeToken);const u=Hg(s,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(G.min())>0){a.readTime=ma(s,o.snapshotVersion.toTimestamp());const u=Hg(s,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,e);const r=S4(this.serializer,e);r&&(n.labels=r),this.t_(n)}l_(e){const n={};n.database=Qg(this.serializer),n.removeTarget=e,this.t_(n)}}class f$ extends OC{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.h_=!1}get P_(){return this.h_}start(){this.h_=!1,this.lastStreamToken=void 0,super.start()}i_(){this.h_&&this.I_([])}a_(e,n){return this.connection.Fo("Write",e,n)}onMessage(e){if(j(!!e.streamToken),this.lastStreamToken=e.streamToken,this.h_){this.jo.reset();const n=T4(e.writeResults,e.commitTime),r=Ke(e.commitTime);return this.listener.T_(r,n)}return j(!e.writeResults||e.writeResults.length===0),this.h_=!0,this.listener.E_()}d_(){const e={};e.database=Qg(this.serializer),this.t_(e)}I_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>Uu(this.serializer,r))};this.t_(n)}}/**
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
 */class p$ extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.A_=!1}R_(){if(this.A_)throw new b(P.FAILED_PRECONDITION,"The client has already been terminated.")}So(e,n,r,i){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.So(e,Kg(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new b(P.UNKNOWN,s.toString())})}vo(e,n,r,i,s){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.vo(e,Kg(n,r),i,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new b(P.UNKNOWN,o.toString())})}terminate(){this.A_=!0,this.connection.terminate()}}class m${constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.m_=0,this.f_=null,this.g_=!0}p_(){this.m_===0&&(this.y_("Unknown"),this.f_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.f_=null,this.w_("Backend didn't respond within 10 seconds."),this.y_("Offline"),Promise.resolve())))}S_(e){this.state==="Online"?this.y_("Unknown"):(this.m_++,this.m_>=1&&(this.b_(),this.w_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.y_("Offline")))}set(e){this.b_(),this.m_=0,e==="Online"&&(this.g_=!1),this.y_(e)}y_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}w_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.g_?(He(n),this.g_=!1):x("OnlineStateTracker",n)}b_(){this.f_!==null&&(this.f_.cancel(),this.f_=null)}}/**
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
 */class g${constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.D_=[],this.C_=new Map,this.v_=new Set,this.F_=[],this.M_=s,this.M_.io(o=>{r.enqueueAndForget(async()=>{Zi(this)&&(x("RemoteStore","Restarting streams for network reachability change."),await async function(l){const u=F(l);u.v_.add(4),await Ma(u),u.x_.set("Unknown"),u.v_.delete(4),await Sc(u)}(this))})}),this.x_=new m$(r,i)}}async function Sc(t){if(Zi(t))for(const e of t.F_)await e(!0)}async function Ma(t){for(const e of t.F_)await e(!1)}function qf(t,e){const n=F(t);n.C_.has(e.targetId)||(n.C_.set(e.targetId,e),Nv(n)?Dv(n):Ua(n).Jo()&&xv(n,e))}function ya(t,e){const n=F(t),r=Ua(n);n.C_.delete(e),r.Jo()&&VC(n,e),n.C_.size===0&&(r.Jo()?r.Xo():Zi(n)&&n.x_.set("Unknown"))}function xv(t,e){if(t.O_.Oe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(G.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Ua(t).c_(e)}function VC(t,e){t.O_.Oe(e),Ua(t).l_(e)}function Dv(t){t.O_=new m4({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),_t:e=>t.C_.get(e)||null,nt:()=>t.datastore.serializer.databaseId}),Ua(t).start(),t.x_.p_()}function Nv(t){return Zi(t)&&!Ua(t).Ho()&&t.C_.size>0}function Zi(t){return F(t).v_.size===0}function LC(t){t.O_=void 0}async function _$(t){t.C_.forEach((e,n)=>{xv(t,e)})}async function y$(t,e){LC(t),Nv(t)?(t.x_.S_(e),Dv(t)):t.x_.set("Unknown")}async function v$(t,e,n){if(t.x_.set("Online"),e instanceof eC&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.C_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.C_.delete(a),i.O_.removeTarget(a))}(t,e)}catch(r){x("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Lh(t,r)}else if(e instanceof Md?t.O_.$e(e):e instanceof ZP?t.O_.Je(e):t.O_.Ge(e),!n.isEqual(G.min()))try{const r=await PC(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.O_.it(o);return a.targetChanges.forEach((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const c=s.C_.get(u);c&&s.C_.set(u,c.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,u)=>{const c=s.C_.get(l);if(!c)return;s.C_.set(l,c.withResumeToken(nt.EMPTY_BYTE_STRING,c.snapshotVersion)),VC(s,l);const d=new Or(c.target,l,u,c.sequenceNumber);xv(s,d)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){x("RemoteStore","Failed to raise snapshot:",r),await Lh(t,r)}}async function Lh(t,e,n){if(!Xi(e))throw e;t.v_.add(1),await Ma(t),t.x_.set("Offline"),n||(n=()=>PC(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{x("RemoteStore","Retrying IndexedDB access"),await n(),t.v_.delete(1),await Sc(t)})}function MC(t,e){return e().catch(n=>Lh(t,n,e))}async function Fa(t){const e=F(t),n=Bi(e);let r=e.D_.length>0?e.D_[e.D_.length-1].batchId:-1;for(;w$(e);)try{const i=await s$(e.localStore,r);if(i===null){e.D_.length===0&&n.Xo();break}r=i.batchId,I$(e,i)}catch(i){await Lh(e,i)}FC(e)&&UC(e)}function w$(t){return Zi(t)&&t.D_.length<10}function I$(t,e){t.D_.push(e);const n=Bi(t);n.Jo()&&n.P_&&n.I_(e.mutations)}function FC(t){return Zi(t)&&!Bi(t).Ho()&&t.D_.length>0}function UC(t){Bi(t).start()}async function E$(t){Bi(t).d_()}async function T$(t){const e=Bi(t);for(const n of t.D_)e.I_(n.mutations)}async function S$(t,e,n){const r=t.D_.shift(),i=yv.from(r,e,n);await MC(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Fa(t)}async function R$(t,e){e&&Bi(t).P_&&await async function(r,i){if(function(o){return YP(o)&&o!==P.ABORTED}(i.code)){const s=r.D_.shift();Bi(r).Zo(),await MC(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Fa(r)}}(t,e),FC(t)&&UC(t)}async function D0(t,e){const n=F(t);n.asyncQueue.verifyOperationInProgress(),x("RemoteStore","RemoteStore received new credentials");const r=Zi(n);n.v_.add(3),await Ma(n),r&&n.x_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.v_.delete(3),await Sc(n)}async function t_(t,e){const n=F(t);e?(n.v_.delete(2),await Sc(n)):e||(n.v_.add(2),await Ma(n),n.x_.set("Unknown"))}function Ua(t){return t.N_||(t.N_=function(n,r,i){const s=F(n);return s.R_(),new h$(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Po:_$.bind(null,t),To:y$.bind(null,t),u_:v$.bind(null,t)}),t.F_.push(async e=>{e?(t.N_.Zo(),Nv(t)?Dv(t):t.x_.set("Unknown")):(await t.N_.stop(),LC(t))})),t.N_}function Bi(t){return t.L_||(t.L_=function(n,r,i){const s=F(n);return s.R_(),new f$(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Po:E$.bind(null,t),To:R$.bind(null,t),E_:T$.bind(null,t),T_:S$.bind(null,t)}),t.F_.push(async e=>{e?(t.L_.Zo(),await Fa(t)):(await t.L_.stop(),t.D_.length>0&&(x("RemoteStore",`Stopping write stream with ${t.D_.length} pending writes`),t.D_=[]))})),t.L_}/**
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
 */class Ov{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new ut,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new Ov(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new b(P.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function $a(t,e){if(He("AsyncQueue",`${e}: ${t}`),Xi(t))return new b(P.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Ko{constructor(e){this.comparator=e?(n,r)=>e(n,r)||L.comparator(n.key,r.key):(n,r)=>L.comparator(n.key,r.key),this.keyedMap=Rl(),this.sortedSet=new we(this.comparator)}static emptySet(e){return new Ko(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ko)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Ko;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class N0{constructor(){this.B_=new we(L.comparator)}track(e){const n=e.doc.key,r=this.B_.get(n);r?e.type!==0&&r.type===3?this.B_=this.B_.insert(n,e):e.type===3&&r.type!==1?this.B_=this.B_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.B_=this.B_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.B_=this.B_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.B_=this.B_.remove(n):e.type===1&&r.type===2?this.B_=this.B_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.B_=this.B_.insert(n,{type:2,doc:e.doc}):$():this.B_=this.B_.insert(n,e)}k_(){const e=[];return this.B_.inorderTraversal((n,r)=>{e.push(r)}),e}}class va{constructor(e,n,r,i,s,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new va(e,n,Ko.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&yc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class A${constructor(){this.q_=void 0,this.Q_=[]}K_(){return this.Q_.some(e=>e.U_())}}class P${constructor(){this.queries=new Ji(e=>VP(e),yc),this.onlineState="Unknown",this.W_=new Set}}async function Vv(t,e){const n=F(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.K_()&&e.U_()&&(r=2):(s=new A$,r=e.U_()?0:1);try{switch(r){case 0:s.q_=await n.onListen(i,!0);break;case 1:s.q_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const a=$a(o,`Initialization of query '${_o(e.query)}' failed`);return void e.onError(a)}n.queries.set(i,s),s.Q_.push(e),e.G_(n.onlineState),s.q_&&e.z_(s.q_)&&Mv(n)}async function Lv(t,e){const n=F(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.Q_.indexOf(e);o>=0&&(s.Q_.splice(o,1),s.Q_.length===0?i=e.U_()?0:1:!s.K_()&&e.U_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function C$(t,e){const n=F(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.Q_)a.z_(i)&&(r=!0);o.q_=i}}r&&Mv(n)}function k$(t,e,n){const r=F(t),i=r.queries.get(e);if(i)for(const s of i.Q_)s.onError(n);r.queries.delete(e)}function Mv(t){t.W_.forEach(e=>{e.next()})}var n_,O0;(O0=n_||(n_={})).j_="default",O0.Cache="cache";class Fv{constructor(e,n,r){this.query=e,this.H_=n,this.J_=!1,this.Y_=null,this.onlineState="Unknown",this.options=r||{}}z_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new va(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.J_?this.Z_(e)&&(this.H_.next(e),n=!0):this.X_(e,this.onlineState)&&(this.ea(e),n=!0),this.Y_=e,n}onError(e){this.H_.error(e)}G_(e){this.onlineState=e;let n=!1;return this.Y_&&!this.J_&&this.X_(this.Y_,e)&&(this.ea(this.Y_),n=!0),n}X_(e,n){if(!e.fromCache||!this.U_())return!0;const r=n!=="Offline";return(!this.options.ta||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Z_(e){if(e.docChanges.length>0)return!0;const n=this.Y_&&this.Y_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ea(e){e=va.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.J_=!0,this.H_.next(e)}U_(){return this.options.source!==n_.Cache}}/**
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
 */class b${constructor(e,n){this.na=e,this.byteLength=n}ra(){return"metadata"in this.na}}/**
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
 */class V0{constructor(e){this.serializer=e}Ps(e){return mr(this.serializer,e)}Is(e){return e.metadata.exists?oC(this.serializer,e.document,!1):Te.newNoDocument(this.Ps(e.metadata.name),this.Ts(e.metadata.readTime))}Ts(e){return Ke(e)}}class x${constructor(e,n,r){this.ia=e,this.localStore=n,this.serializer=r,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=$C(e)}sa(e){this.progress.bytesLoaded+=e.byteLength;let n=this.progress.documentsLoaded;if(e.na.namedQuery)this.queries.push(e.na.namedQuery);else if(e.na.documentMetadata){this.documents.push({metadata:e.na.documentMetadata}),e.na.documentMetadata.exists||++n;const r=se.fromString(e.na.documentMetadata.name);this.collectionGroups.add(r.get(r.length-2))}else e.na.document&&(this.documents[this.documents.length-1].document=e.na.document,++n);return n!==this.progress.documentsLoaded?(this.progress.documentsLoaded=n,Object.assign({},this.progress)):null}oa(e){const n=new Map,r=new V0(this.serializer);for(const i of e)if(i.metadata.queries){const s=r.Ps(i.metadata.name);for(const o of i.metadata.queries){const a=(n.get(o)||te()).add(s);n.set(o,a)}}return n}async complete(){const e=await o$(this.localStore,new V0(this.serializer),this.documents,this.ia.id),n=this.oa(this.documents);for(const r of this.queries)await a$(this.localStore,r,n.get(r.name));return this.progress.taskState="Success",{progress:this.progress,_a:this.collectionGroups,aa:e}}}function $C(t){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:t.totalDocuments,totalBytes:t.totalBytes}}/**
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
 */class BC{constructor(e){this.key=e}}class zC{constructor(e){this.key=e}}class jC{constructor(e,n){this.query=e,this.ua=n,this.ca=null,this.hasCachedResults=!1,this.current=!1,this.la=te(),this.mutatedKeys=te(),this.ha=MP(e),this.Pa=new Ko(this.ha)}get Ia(){return this.ua}Ta(e,n){const r=n?n.Ea:new N0,i=n?n.Pa:this.Pa;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,d)=>{const h=i.get(c),f=vc(this.query,d)?d:null,v=!!h&&this.mutatedKeys.has(h.key),y=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let E=!1;h&&f?h.data.isEqual(f.data)?v!==y&&(r.track({type:3,doc:f}),E=!0):this.da(h,f)||(r.track({type:2,doc:f}),E=!0,(l&&this.ha(f,l)>0||u&&this.ha(f,u)<0)&&(a=!0)):!h&&f?(r.track({type:0,doc:f}),E=!0):h&&!f&&(r.track({type:1,doc:h}),E=!0,(l||u)&&(a=!0)),E&&(f?(o=o.add(f),s=y?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{Pa:o,Ea:r,Xi:a,mutatedKeys:s}}da(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Pa;this.Pa=e.Pa,this.mutatedKeys=e.mutatedKeys;const o=e.Ea.k_();o.sort((c,d)=>function(f,v){const y=E=>{switch(E){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return $()}};return y(f)-y(v)}(c.type,d.type)||this.ha(c.doc,d.doc)),this.Aa(r),i=i!=null&&i;const a=n&&!i?this.Ra():[],l=this.la.size===0&&this.current&&!i?1:0,u=l!==this.ca;return this.ca=l,o.length!==0||u?{snapshot:new va(this.query,e.Pa,s,o,e.mutatedKeys,l===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),Va:a}:{Va:a}}G_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Pa:this.Pa,Ea:new N0,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{Va:[]}}ma(e){return!this.ua.has(e)&&!!this.Pa.has(e)&&!this.Pa.get(e).hasLocalMutations}Aa(e){e&&(e.addedDocuments.forEach(n=>this.ua=this.ua.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.ua=this.ua.delete(n)),this.current=e.current)}Ra(){if(!this.current)return[];const e=this.la;this.la=te(),this.Pa.forEach(r=>{this.ma(r.key)&&(this.la=this.la.add(r.key))});const n=[];return e.forEach(r=>{this.la.has(r)||n.push(new zC(r))}),this.la.forEach(r=>{e.has(r)||n.push(new BC(r))}),n}fa(e){this.ua=e.hs,this.la=te();const n=this.Ta(e.documents);return this.applyChanges(n,!0)}ga(){return va.fromInitialDocuments(this.query,this.Pa,this.mutatedKeys,this.ca===0,this.hasCachedResults)}}class D${constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class N${constructor(e){this.key=e,this.pa=!1}}class O${constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.ya={},this.wa=new Ji(a=>VP(a),yc),this.Sa=new Map,this.ba=new Set,this.Da=new we(L.comparator),this.Ca=new Map,this.va=new Rv,this.Fa={},this.Ma=new Map,this.xa=Bs.Ln(),this.onlineState="Unknown",this.Oa=void 0}get isPrimaryClient(){return this.Oa===!0}}async function V$(t,e,n=!0){const r=Wf(t);let i;const s=r.wa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.ga()):i=await qC(r,e,n,!0),i}async function L$(t,e){const n=Wf(t);await qC(n,e,!0,!1)}async function qC(t,e,n,r){const i=await ga(t.localStore,zt(e)),s=i.targetId,o=n?t.sharedClientState.addLocalQueryTarget(s):"not-current";let a;return r&&(a=await Uv(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&qf(t.remoteStore,i),a}async function Uv(t,e,n,r,i){t.Na=(d,h,f)=>async function(y,E,g,p){let m=E.view.Ta(g);m.Xi&&(m=await Nh(y.localStore,E.query,!1).then(({documents:_})=>E.view.Ta(_,m)));const I=p&&p.targetChanges.get(E.targetId),A=p&&p.targetMismatches.get(E.targetId)!=null,C=E.view.applyChanges(m,y.isPrimaryClient,I,A);return r_(y,E.targetId,C.Va),C.snapshot}(t,d,h,f);const s=await Nh(t.localStore,e,!0),o=new jC(e,s.hs),a=o.Ta(s.documents),l=Ec.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=o.applyChanges(a,t.isPrimaryClient,l);r_(t,n,u.Va);const c=new D$(e,n,o);return t.wa.set(e,c),t.Sa.has(n)?t.Sa.get(n).push(e):t.Sa.set(n,[e]),u.snapshot}async function M$(t,e,n){const r=F(t),i=r.wa.get(e),s=r.Sa.get(i.targetId);if(s.length>1)return r.Sa.set(i.targetId,s.filter(o=>!yc(o,e))),void r.wa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await _a(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&ya(r.remoteStore,i.targetId),wa(r,i.targetId)}).catch(Yi)):(wa(r,i.targetId),await _a(r.localStore,i.targetId,!0))}async function F$(t,e){const n=F(t),r=n.wa.get(e),i=n.Sa.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),ya(n.remoteStore,r.targetId))}async function U$(t,e,n){const r=jv(t);try{const i=await function(o,a){const l=F(o),u=xe.now(),c=a.reduce((f,v)=>f.add(v.key),te());let d,h;return l.persistence.runTransaction("Locally write mutations","readwrite",f=>{let v=en(),y=te();return l.os.getEntries(f,c).next(E=>{v=E,v.forEach((g,p)=>{p.isValidDocument()||(y=y.add(g))})}).next(()=>l.localDocuments.getOverlayedDocuments(f,v)).next(E=>{d=E;const g=[];for(const p of a){const m=h4(p,d.get(p.key).overlayedDocument);m!=null&&g.push(new Xr(p.key,m,AP(m.value.mapValue),be.exists(!0)))}return l.mutationQueue.addMutationBatch(f,u,g,a)}).next(E=>{h=E;const g=E.applyToLocalDocumentSet(d,y);return l.documentOverlayCache.saveOverlays(f,E.batchId,g)})}).then(()=>({batchId:h.batchId,changes:UP(d)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,l){let u=o.Fa[o.currentUser.toKey()];u||(u=new we(ee)),u=u.insert(a,l),o.Fa[o.currentUser.toKey()]=u}(r,i.batchId,n),await Jr(r,i.changes),await Fa(r.remoteStore)}catch(i){const s=$a(i,"Failed to persist write");n.reject(s)}}async function WC(t,e){const n=F(t);try{const r=await i$(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Ca.get(s);o&&(j(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.pa=!0:i.modifiedDocuments.size>0?j(o.pa):i.removedDocuments.size>0&&(j(o.pa),o.pa=!1))}),await Jr(n,r,e)}catch(r){await Yi(r)}}function L0(t,e,n){const r=F(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.wa.forEach((s,o)=>{const a=o.view.G_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const l=F(o);l.onlineState=a;let u=!1;l.queries.forEach((c,d)=>{for(const h of d.Q_)h.G_(a)&&(u=!0)}),u&&Mv(l)}(r.eventManager,e),i.length&&r.ya.u_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function $$(t,e,n){const r=F(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Ca.get(e),s=i&&i.key;if(s){let o=new we(L.comparator);o=o.insert(s,Te.newNoDocument(s,G.min()));const a=te().add(s),l=new Ic(G.min(),new Map,new we(ee),o,a);await WC(r,l),r.Da=r.Da.remove(s),r.Ca.delete(e),zv(r)}else await _a(r.localStore,e,!1).then(()=>wa(r,e,n)).catch(Yi)}async function B$(t,e){const n=F(t),r=e.batch.batchId;try{const i=await r$(n.localStore,e);Bv(n,r,null),$v(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Jr(n,i)}catch(i){await Yi(i)}}async function z$(t,e,n){const r=F(t);try{const i=await function(o,a){const l=F(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let c;return l.mutationQueue.lookupMutationBatch(u,a).next(d=>(j(d!==null),c=d.keys(),l.mutationQueue.removeMutationBatch(u,d))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,c,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,c)).next(()=>l.localDocuments.getDocuments(u,c))})}(r.localStore,e);Bv(r,e,n),$v(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Jr(r,i)}catch(i){await Yi(i)}}async function j$(t,e){const n=F(t);Zi(n.remoteStore)||x("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const r=await function(o){const a=F(o);return a.persistence.runTransaction("Get highest unacknowledged batch id","readonly",l=>a.mutationQueue.getHighestUnacknowledgedBatchId(l))}(n.localStore);if(r===-1)return void e.resolve();const i=n.Ma.get(r)||[];i.push(e),n.Ma.set(r,i)}catch(r){const i=$a(r,"Initialization of waitForPendingWrites() operation failed");e.reject(i)}}function $v(t,e){(t.Ma.get(e)||[]).forEach(n=>{n.resolve()}),t.Ma.delete(e)}function Bv(t,e,n){const r=F(t);let i=r.Fa[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Fa[r.currentUser.toKey()]=i}}function wa(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Sa.get(e))t.wa.delete(r),n&&t.ya.La(r,n);t.Sa.delete(e),t.isPrimaryClient&&t.va.Vr(e).forEach(r=>{t.va.containsKey(r)||GC(t,r)})}function GC(t,e){t.ba.delete(e.path.canonicalString());const n=t.Da.get(e);n!==null&&(ya(t.remoteStore,n),t.Da=t.Da.remove(e),t.Ca.delete(n),zv(t))}function r_(t,e,n){for(const r of n)r instanceof BC?(t.va.addReference(r.key,e),q$(t,r)):r instanceof zC?(x("SyncEngine","Document no longer in limbo: "+r.key),t.va.removeReference(r.key,e),t.va.containsKey(r.key)||GC(t,r.key)):$()}function q$(t,e){const n=e.key,r=n.path.canonicalString();t.Da.get(n)||t.ba.has(r)||(x("SyncEngine","New document in limbo: "+n),t.ba.add(r),zv(t))}function zv(t){for(;t.ba.size>0&&t.Da.size<t.maxConcurrentLimboResolutions;){const e=t.ba.values().next().value;t.ba.delete(e);const n=new L(se.fromString(e)),r=t.xa.next();t.Ca.set(r,new N$(n)),t.Da=t.Da.insert(n,r),qf(t.remoteStore,new Or(zt(Oa(n.path)),r,"TargetPurposeLimboResolution",Jt._e))}}async function Jr(t,e,n){const r=F(t),i=[],s=[],o=[];r.wa.isEmpty()||(r.wa.forEach((a,l)=>{o.push(r.Na(l,e,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const c=Cv.Ki(l.targetId,u);s.push(c)}}))}),await Promise.all(o),r.ya.u_(i),await async function(l,u){const c=F(l);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",d=>T.forEach(u,h=>T.forEach(h.qi,f=>c.persistence.referenceDelegate.addReference(d,h.targetId,f)).next(()=>T.forEach(h.Qi,f=>c.persistence.referenceDelegate.removeReference(d,h.targetId,f)))))}catch(d){if(!Xi(d))throw d;x("LocalStore","Failed to update sequence numbers: "+d)}for(const d of u){const h=d.targetId;if(!d.fromCache){const f=c.ns.get(h),v=f.snapshotVersion,y=f.withLastLimboFreeSnapshotVersion(v);c.ns=c.ns.insert(h,y)}}}(r.localStore,s))}async function W$(t,e){const n=F(t);if(!n.currentUser.isEqual(e)){x("SyncEngine","User change. New user:",e.toKey());const r=await AC(n.localStore,e);n.currentUser=e,function(s,o){s.Ma.forEach(a=>{a.forEach(l=>{l.reject(new b(P.CANCELLED,o))})}),s.Ma.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Jr(n,r.us)}}function G$(t,e){const n=F(t),r=n.Ca.get(e);if(r&&r.pa)return te().add(r.key);{let i=te();const s=n.Sa.get(e);if(!s)return i;for(const o of s){const a=n.wa.get(o);i=i.unionWith(a.view.Ia)}return i}}async function H$(t,e){const n=F(t),r=await Nh(n.localStore,e.query,!0),i=e.view.fa(r);return n.isPrimaryClient&&r_(n,e.targetId,i.Va),i}async function K$(t,e){const n=F(t);return bC(n.localStore,e).then(r=>Jr(n,r))}async function Q$(t,e,n,r){const i=F(t),s=await function(a,l){const u=F(a),c=F(u.mutationQueue);return u.persistence.runTransaction("Lookup mutation documents","readonly",d=>c.vn(d,l).next(h=>h?u.localDocuments.getDocuments(d,h):T.resolve(null)))}(i.localStore,e);s!==null?(n==="pending"?await Fa(i.remoteStore):n==="acknowledged"||n==="rejected"?(Bv(i,e,r||null),$v(i,e),function(a,l){F(F(a).mutationQueue).Mn(l)}(i.localStore,e)):$(),await Jr(i,s)):x("SyncEngine","Cannot apply mutation batch with id: "+e)}async function Y$(t,e){const n=F(t);if(Wf(n),jv(n),e===!0&&n.Oa!==!0){const r=n.sharedClientState.getAllActiveQueryTargets(),i=await M0(n,r.toArray());n.Oa=!0,await t_(n.remoteStore,!0);for(const s of i)qf(n.remoteStore,s)}else if(e===!1&&n.Oa!==!1){const r=[];let i=Promise.resolve();n.Sa.forEach((s,o)=>{n.sharedClientState.isLocalQueryTarget(o)?r.push(o):i=i.then(()=>(wa(n,o),_a(n.localStore,o,!0))),ya(n.remoteStore,o)}),await i,await M0(n,r),function(o){const a=F(o);a.Ca.forEach((l,u)=>{ya(a.remoteStore,u)}),a.va.mr(),a.Ca=new Map,a.Da=new we(L.comparator)}(n),n.Oa=!1,await t_(n.remoteStore,!1)}}async function M0(t,e,n){const r=F(t),i=[],s=[];for(const o of e){let a;const l=r.Sa.get(o);if(l&&l.length!==0){a=await ga(r.localStore,zt(l[0]));for(const u of l){const c=r.wa.get(u),d=await H$(r,c);d.snapshot&&s.push(d.snapshot)}}else{const u=await kC(r.localStore,o);a=await ga(r.localStore,u),await Uv(r,HC(u),o,!1,a.resumeToken)}i.push(a)}return r.ya.u_(s),i}function HC(t){return OP(t.path,t.collectionGroup,t.orderBy,t.filters,t.limit,"F",t.startAt,t.endAt)}function X$(t){return function(n){return F(F(n).persistence).Bi()}(F(t).localStore)}async function J$(t,e,n,r){const i=F(t);if(i.Oa)return void x("SyncEngine","Ignoring unexpected query state notification.");const s=i.Sa.get(e);if(s&&s.length>0)switch(n){case"current":case"not-current":{const o=await bC(i.localStore,LP(s[0])),a=Ic.createSynthesizedRemoteEventForCurrentChange(e,n==="current",nt.EMPTY_BYTE_STRING);await Jr(i,o,a);break}case"rejected":await _a(i.localStore,e,!0),wa(i,e,r);break;default:$()}}async function Z$(t,e,n){const r=Wf(t);if(r.Oa){for(const i of e){if(r.Sa.has(i)&&r.sharedClientState.isActiveQueryTarget(i)){x("SyncEngine","Adding an already active target "+i);continue}const s=await kC(r.localStore,i),o=await ga(r.localStore,s);await Uv(r,HC(s),o.targetId,!1,o.resumeToken),qf(r.remoteStore,o)}for(const i of n)r.Sa.has(i)&&await _a(r.localStore,i,!1).then(()=>{ya(r.remoteStore,i),wa(r,i)}).catch(Yi)}}function Wf(t){const e=F(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=WC.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=G$.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=$$.bind(null,e),e.ya.u_=C$.bind(null,e.eventManager),e.ya.La=k$.bind(null,e.eventManager),e}function jv(t){const e=F(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=B$.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=z$.bind(null,e),e}function eB(t,e,n){const r=F(t);(async function(s,o,a){try{const l=await o.getMetadata();if(await function(f,v){const y=F(f),E=Ke(v.createTime);return y.persistence.runTransaction("hasNewerBundle","readonly",g=>y.$r.getBundleMetadata(g,v.id)).then(g=>!!g&&g.createTime.compareTo(E)>=0)}(s.localStore,l))return await o.close(),a._completeWith(function(f){return{taskState:"Success",documentsLoaded:f.totalDocuments,bytesLoaded:f.totalBytes,totalDocuments:f.totalDocuments,totalBytes:f.totalBytes}}(l)),Promise.resolve(new Set);a._updateProgress($C(l));const u=new x$(l,s.localStore,o.serializer);let c=await o.Ba();for(;c;){const h=await u.sa(c);h&&a._updateProgress(h),c=await o.Ba()}const d=await u.complete();return await Jr(s,d.aa,void 0),await function(f,v){const y=F(f);return y.persistence.runTransaction("Save bundle","readwrite",E=>y.$r.saveBundleMetadata(E,v))}(s.localStore,l),a._completeWith(d.progress),Promise.resolve(d._a)}catch(l){return Gn("SyncEngine",`Loading bundle failed with ${l}`),a._failWith(l),Promise.resolve(new Set)}})(r,e,n).then(i=>{r.sharedClientState.notifyBundleLoaded(i)})}class i_{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Tc(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return RC(this.persistence,new SC,e.initialUser,this.serializer)}createPersistence(e){return new TC(jf.Hr,this.serializer)}createSharedClientState(e){return new DC}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class KC extends i_{constructor(e,n,r){super(),this.ka=e,this.cacheSizeBytes=n,this.forceOwnership=r,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.ka.initialize(this,e),await jv(this.ka.syncEngine),await Fa(this.ka.remoteStore),await this.persistence.fi(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}createLocalStore(e){return RC(this.persistence,new SC,e.initialUser,this.serializer)}createGarbageCollectionScheduler(e,n){const r=this.persistence.referenceDelegate.garbageCollector;return new $4(r,e.asyncQueue,n)}createIndexBackfillerScheduler(e,n){const r=new TU(n,this.persistence);return new EU(e.asyncQueue,r)}createPersistence(e){const n=Pv(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?Qt.withCacheSize(this.cacheSizeBytes):Qt.DEFAULT;return new Av(this.synchronizeTabs,n,e.clientId,r,e.asyncQueue,NC(),Fd(),this.serializer,this.sharedClientState,!!this.forceOwnership)}createSharedClientState(e){return new DC}}class tB extends KC{constructor(e,n){super(e,n,!1),this.ka=e,this.cacheSizeBytes=n,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const n=this.ka.syncEngine;this.sharedClientState instanceof hm&&(this.sharedClientState.syncEngine={Zs:Q$.bind(null,n),Xs:J$.bind(null,n),eo:Z$.bind(null,n),Bi:X$.bind(null,n),Ys:K$.bind(null,n)},await this.sharedClientState.start()),await this.persistence.fi(async r=>{await Y$(this.ka.syncEngine,r),this.gcScheduler&&(r&&!this.gcScheduler.started?this.gcScheduler.start():r||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(r&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():r||this.indexBackfillerScheduler.stop())})}createSharedClientState(e){const n=NC();if(!hm.D(n))throw new b(P.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const r=Pv(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new hm(n,e.asyncQueue,r,e.clientId,e.initialUser)}}class qv{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>L0(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=W$.bind(null,this.syncEngine),await t_(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new P$}()}createDatastore(e){const n=Tc(e.databaseInfo.databaseId),r=function(s){return new d$(s)}(e.databaseInfo);return function(s,o,a,l){return new p$(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new g$(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>L0(this.syncEngine,n,0),function(){return x0.D()?new x0:new l$}())}createSyncEngine(e,n){return function(i,s,o,a,l,u,c){const d=new O$(i,s,o,a,l,u);return c&&(d.Oa=!0),d}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e;await async function(r){const i=F(r);x("RemoteStore","RemoteStore shutting down."),i.v_.add(5),await Ma(i),i.M_.shutdown(),i.x_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate()}}/**
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
 */function F0(t,e=10240){let n=0;return{async read(){if(n<t.byteLength){const r={value:t.slice(n,n+e),done:!1};return n+=e,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}/**
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
 */class Gf{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.qa(this.observer.next,e)}error(e){this.observer.error?this.qa(this.observer.error,e):He("Uncaught Error in snapshot listener:",e.toString())}Qa(){this.muted=!0}qa(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class nB{constructor(e,n){this.Ka=e,this.serializer=n,this.metadata=new ut,this.buffer=new Uint8Array,this.$a=function(){return new TextDecoder("utf-8")}(),this.Ua().then(r=>{r&&r.ra()?this.metadata.resolve(r.na.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(r==null?void 0:r.na)}`))},r=>this.metadata.reject(r))}close(){return this.Ka.cancel()}async getMetadata(){return this.metadata.promise}async Ba(){return await this.getMetadata(),this.Ua()}async Ua(){const e=await this.Wa();if(e===null)return null;const n=this.$a.decode(e),r=Number(n);isNaN(r)&&this.Ga(`length string (${n}) is not valid number`);const i=await this.za(r);return new b$(JSON.parse(i),e.length+r)}ja(){return this.buffer.findIndex(e=>e==="{".charCodeAt(0))}async Wa(){for(;this.ja()<0&&!await this.Ha(););if(this.buffer.length===0)return null;const e=this.ja();e<0&&this.Ga("Reached the end of bundle when a length string is expected.");const n=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),n}async za(e){for(;this.buffer.length<e;)await this.Ha()&&this.Ga("Reached the end of bundle when more is expected.");const n=this.$a.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),n}Ga(e){throw this.Ka.cancel(),new Error(`Invalid bundle format: ${e}`)}async Ha(){const e=await this.Ka.read();if(!e.done){const n=new Uint8Array(this.buffer.length+e.value.length);n.set(this.buffer),n.set(e.value,this.buffer.length),this.buffer=n}return e.done}}/**
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
 */class rB{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new b(P.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;const n=await async function(i,s){const o=F(i),a={documents:s.map(d=>Fu(o.serializer,d))},l=await o.vo("BatchGetDocuments",o.serializer.databaseId,se.emptyPath(),a,s.length),u=new Map;l.forEach(d=>{const h=I4(o.serializer,d);u.set(h.key.toString(),h)});const c=[];return s.forEach(d=>{const h=u.get(d.toString());j(!!h),c.push(h)}),c}(this.datastore,e);return n.forEach(r=>this.recordVersion(r)),n}set(e,n){this.write(n.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,n){try{this.write(n.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastTransactionError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new La(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;const e=this.readVersions;this.mutations.forEach(n=>{e.delete(n.key.toString())}),e.forEach((n,r)=>{const i=L.fromPath(r);this.mutations.push(new gv(i,this.precondition(i)))}),await async function(r,i){const s=F(r),o={writes:i.map(a=>Uu(s.serializer,a))};await s.So("Commit",s.serializer.databaseId,se.emptyPath(),o)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let n;if(e.isFoundDocument())n=e.version;else{if(!e.isNoDocument())throw $();n=G.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!n.isEqual(r))throw new b(P.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),n)}precondition(e){const n=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&n?n.isEqual(G.min())?be.exists(!1):be.updateTime(n):be.none()}preconditionForUpdate(e){const n=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&n){if(n.isEqual(G.min()))throw new b(P.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return be.updateTime(n)}return be.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
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
 */class iB{constructor(e,n,r,i,s){this.asyncQueue=e,this.datastore=n,this.options=r,this.updateFunction=i,this.deferred=s,this.Ja=r.maxAttempts,this.jo=new bv(this.asyncQueue,"transaction_retry")}Ya(){this.Ja-=1,this.Za()}Za(){this.jo.qo(async()=>{const e=new rB(this.datastore),n=this.Xa(e);n&&n.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(i=>{this.eu(i)}))}).catch(r=>{this.eu(r)})})}Xa(e){try{const n=this.updateFunction(e);return!gc(n)&&n.catch&&n.then?n:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(n){return this.deferred.reject(n),null}}eu(e){this.Ja>0&&this.tu(e)?(this.Ja-=1,this.asyncQueue.enqueueAndForget(()=>(this.Za(),Promise.resolve()))):this.deferred.reject(e)}tu(e){if(e.name==="FirebaseError"){const n=e.code;return n==="aborted"||n==="failed-precondition"||n==="already-exists"||!YP(n)}return!1}}/**
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
 */class sB{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=st.UNAUTHENTICATED,this.clientId=hP.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{x("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(x("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new b(P.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ut;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=$a(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Ud(t,e){t.asyncQueue.verifyOperationInProgress(),x("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await AC(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function s_(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Wv(t);x("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>D0(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>D0(e.remoteStore,i)),t._onlineComponents=e}function QC(t){return t.name==="FirebaseError"?t.code===P.FAILED_PRECONDITION||t.code===P.UNIMPLEMENTED:!(typeof DOMException!="undefined"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function Wv(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){x("FirestoreClient","Using user provided OfflineComponentProvider");try{await Ud(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!QC(n))throw n;Gn("Error using user provided cache. Falling back to memory cache: "+n),await Ud(t,new i_)}}else x("FirestoreClient","Using default OfflineComponentProvider"),await Ud(t,new i_);return t._offlineComponents}async function Hf(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(x("FirestoreClient","Using user provided OnlineComponentProvider"),await s_(t,t._uninitializedComponentsProvider._online)):(x("FirestoreClient","Using default OnlineComponentProvider"),await s_(t,new qv))),t._onlineComponents}function YC(t){return Wv(t).then(e=>e.persistence)}function Gv(t){return Wv(t).then(e=>e.localStore)}function XC(t){return Hf(t).then(e=>e.remoteStore)}function Hv(t){return Hf(t).then(e=>e.syncEngine)}function oB(t){return Hf(t).then(e=>e.datastore)}async function Ia(t){const e=await Hf(t),n=e.eventManager;return n.onListen=V$.bind(null,e.syncEngine),n.onUnlisten=M$.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=L$.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=F$.bind(null,e.syncEngine),n}function aB(t){return t.asyncQueue.enqueue(async()=>{const e=await YC(t),n=await XC(t);return e.setNetworkEnabled(!0),function(i){const s=F(i);return s.v_.delete(0),Sc(s)}(n)})}function lB(t){return t.asyncQueue.enqueue(async()=>{const e=await YC(t),n=await XC(t);return e.setNetworkEnabled(!1),async function(i){const s=F(i);s.v_.add(0),await Ma(s),s.x_.set("Offline")}(n)})}function uB(t,e){const n=new ut;return t.asyncQueue.enqueueAndForget(async()=>async function(i,s,o){try{const a=await function(u,c){const d=F(u);return d.persistence.runTransaction("read document","readonly",h=>d.localDocuments.getDocument(h,c))}(i,s);a.isFoundDocument()?o.resolve(a):a.isNoDocument()?o.resolve(null):o.reject(new b(P.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(a){const l=$a(a,`Failed to get document '${s} from cache`);o.reject(l)}}(await Gv(t),e,n)),n.promise}function JC(t,e,n={}){const r=new ut;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,u){const c=new Gf({next:h=>{o.enqueueAndForget(()=>Lv(s,d));const f=h.docs.has(a);!f&&h.fromCache?u.reject(new b(P.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&h.fromCache&&l&&l.source==="server"?u.reject(new b(P.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(h)},error:h=>u.reject(h)}),d=new Fv(Oa(a.path),c,{includeMetadataChanges:!0,ta:!0});return Vv(s,d)}(await Ia(t),t.asyncQueue,e,n,r)),r.promise}function cB(t,e){const n=new ut;return t.asyncQueue.enqueueAndForget(async()=>async function(i,s,o){try{const a=await Nh(i,s,!0),l=new jC(s,a.hs),u=l.Ta(a.documents),c=l.applyChanges(u,!1);o.resolve(c.snapshot)}catch(a){const l=$a(a,`Failed to execute query '${s} against cache`);o.reject(l)}}(await Gv(t),e,n)),n.promise}function ZC(t,e,n={}){const r=new ut;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,u){const c=new Gf({next:h=>{o.enqueueAndForget(()=>Lv(s,d)),h.fromCache&&l.source==="server"?u.reject(new b(P.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(h)},error:h=>u.reject(h)}),d=new Fv(a,c,{includeMetadataChanges:!0,ta:!0});return Vv(s,d)}(await Ia(t),t.asyncQueue,e,n,r)),r.promise}function dB(t,e){const n=new Gf(e);return t.asyncQueue.enqueueAndForget(async()=>function(i,s){F(i).W_.add(s),s.next()}(await Ia(t),n)),()=>{n.Qa(),t.asyncQueue.enqueueAndForget(async()=>function(i,s){F(i).W_.delete(s)}(await Ia(t),n))}}function hB(t,e,n,r){const i=function(o,a){let l;return l=typeof o=="string"?JP().encode(o):o,function(c,d){return new nB(c,d)}(function(c,d){if(c instanceof Uint8Array)return F0(c,d);if(c instanceof ArrayBuffer)return F0(new Uint8Array(c),d);if(c instanceof ReadableStream)return c.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(l),a)}(n,Tc(e));t.asyncQueue.enqueueAndForget(async()=>{eB(await Hv(t),i,r)})}function fB(t,e){return t.asyncQueue.enqueue(async()=>function(r,i){const s=F(r);return s.persistence.runTransaction("Get named query","readonly",o=>s.$r.getNamedQuery(o,i))}(await Gv(t),e))}/**
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
 */function ek(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const U0=new Map;/**
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
 */function Kv(t,e,n){if(!n)throw new b(P.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function tk(t,e,n,r){if(e===!0&&r===!0)throw new b(P.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function $0(t){if(!L.isDocumentKey(t))throw new b(P.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function B0(t){if(L.isDocumentKey(t))throw new b(P.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Kf(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":$()}function he(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new b(P.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Kf(t);throw new b(P.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function nk(t,e){if(e<=0)throw new b(P.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
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
 */class z0{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new b(P.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new b(P.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}tk("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=ek((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new b(P.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new b(P.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new b(P.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Rc{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new z0({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new b(P.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new b(P.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new z0(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new dU;switch(r.type){case"firstParty":return new mU(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new b(P.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=U0.get(n);r&&(x("ComponentProvider","Removing Datastore"),U0.delete(n),r.terminate())}(this),Promise.resolve()}}function pB(t,e,n,r={}){var i;const s=(t=he(t,Rc))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Gn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=st.MOCK_USER;else{a=HR(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new b(P.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new st(u)}t._authCredentials=new hU(new dP(a,l))}}/**
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
 */class Tt{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Tt(this.firestore,e,this._query)}}class Re{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new gr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Re(this.firestore,e,this._key)}}class gr extends Tt{constructor(e,n,r){super(e,n,Oa(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Re(this.firestore,null,new L(e))}withConverter(e){return new gr(this.firestore,e,this._path)}}function rk(t,e,...n){if(t=z(t),Kv("collection","path",e),t instanceof Rc){const r=se.fromString(e,...n);return B0(r),new gr(t,null,r)}{if(!(t instanceof Re||t instanceof gr))throw new b(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(se.fromString(e,...n));return B0(r),new gr(t.firestore,null,r)}}function mB(t,e){if(t=he(t,Rc),Kv("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new b(P.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new Tt(t,null,function(r){return new Yr(se.emptyPath(),r)}(e))}function $u(t,e,...n){if(t=z(t),arguments.length===1&&(e=hP.newId()),Kv("doc","path",e),t instanceof Rc){const r=se.fromString(e,...n);return $0(r),new Re(t,null,new L(r))}{if(!(t instanceof Re||t instanceof gr))throw new b(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(se.fromString(e,...n));return $0(r),new Re(t.firestore,t instanceof gr?t.converter:null,new L(r))}}function ik(t,e){return t=z(t),e=z(e),(t instanceof Re||t instanceof gr)&&(e instanceof Re||e instanceof gr)&&t.firestore===e.firestore&&t.path===e.path&&t.converter===e.converter}function sk(t,e){return t=z(t),e=z(e),t instanceof Tt&&e instanceof Tt&&t.firestore===e.firestore&&yc(t._query,e._query)&&t.converter===e.converter}/**
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
 */class gB{constructor(){this.nu=Promise.resolve(),this.ru=[],this.iu=!1,this.su=[],this.ou=null,this._u=!1,this.au=!1,this.uu=[],this.jo=new bv(this,"async_queue_retry"),this.cu=()=>{const n=Fd();n&&x("AsyncQueue","Visibility state changed to "+n.visibilityState),this.jo.Ko()};const e=Fd();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.cu)}get isShuttingDown(){return this.iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.lu(),this.hu(e)}enterRestrictedMode(e){if(!this.iu){this.iu=!0,this.au=e||!1;const n=Fd();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.cu)}}enqueue(e){if(this.lu(),this.iu)return new Promise(()=>{});const n=new ut;return this.hu(()=>this.iu&&this.au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.ru.push(e),this.Pu()))}async Pu(){if(this.ru.length!==0){try{await this.ru[0](),this.ru.shift(),this.jo.reset()}catch(e){if(!Xi(e))throw e;x("AsyncQueue","Operation failed with retryable error: "+e)}this.ru.length>0&&this.jo.qo(()=>this.Pu())}}hu(e){const n=this.nu.then(()=>(this._u=!0,e().catch(r=>{this.ou=r,this._u=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw He("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this._u=!1,r))));return this.nu=n,n}enqueueAfterDelay(e,n,r){this.lu(),this.uu.indexOf(e)>-1&&(n=0);const i=Ov.createAndSchedule(this,e,n,r,s=>this.Iu(s));return this.su.push(i),i}lu(){this.ou&&$()}verifyOperationInProgress(){}async Tu(){let e;do e=this.nu,await e;while(e!==this.nu)}Eu(e){for(const n of this.su)if(n.timerId===e)return!0;return!1}du(e){return this.Tu().then(()=>{this.su.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.su)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tu()})}Au(e){this.uu.push(e)}Iu(e){const n=this.su.indexOf(e);this.su.splice(n,1)}}function o_(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class _B{constructor(){this._progressObserver={},this._taskCompletionResolver=new ut,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,n,r){this._progressObserver={next:e,error:n,complete:r}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,n){return this._taskCompletionResolver.promise.then(e,n)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
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
 */const yB=-1;class ze extends Rc{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new gB}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||ok(this),this._firestoreClient.terminate()}}function ft(t){return t._firestoreClient||ok(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function ok(t){var e,n,r;const i=t._freezeSettings(),s=function(a,l,u,c){return new qU(a,l,u,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,ek(c.experimentalLongPollingOptions),c.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new sB(t._authCredentials,t._appCheckCredentials,t._queue,s),((n=i.localCache)===null||n===void 0?void 0:n._offlineComponentProvider)&&((r=i.localCache)===null||r===void 0?void 0:r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}function vB(t,e){lk(t=he(t,ze));const n=ft(t);if(n._uninitializedComponentsProvider)throw new b(P.FAILED_PRECONDITION,"SDK cache is already specified.");Gn("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const r=t._freezeSettings(),i=new qv;return ak(n,i,new KC(i,r.cacheSizeBytes,e==null?void 0:e.forceOwnership))}function wB(t){lk(t=he(t,ze));const e=ft(t);if(e._uninitializedComponentsProvider)throw new b(P.FAILED_PRECONDITION,"SDK cache is already specified.");Gn("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const n=t._freezeSettings(),r=new qv;return ak(e,r,new tB(r,n.cacheSizeBytes))}function ak(t,e,n){const r=new ut;return t.asyncQueue.enqueue(async()=>{try{await Ud(t,n),await s_(t,e),r.resolve()}catch(i){const s=i;if(!QC(s))throw s;Gn("Error enabling indexeddb cache. Falling back to memory cache: "+s),r.reject(s)}}).then(()=>r.promise)}function IB(t){if(t._initialized&&!t._terminated)throw new b(P.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new ut;return t._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(r){if(!Rn.D())return Promise.resolve();const i=r+"main";await Rn.delete(i)}(Pv(t._databaseId,t._persistenceKey)),e.resolve()}catch(n){e.reject(n)}}),e.promise}function EB(t){return function(n){const r=new ut;return n.asyncQueue.enqueueAndForget(async()=>j$(await Hv(n),r)),r.promise}(ft(t=he(t,ze)))}function TB(t){return aB(ft(t=he(t,ze)))}function SB(t){return lB(ft(t=he(t,ze)))}function RB(t,e){const n=ft(t=he(t,ze)),r=new _B;return hB(n,t._databaseId,e,r),r}function AB(t,e){return fB(ft(t=he(t,ze)),e).then(n=>n?new Tt(t,null,n.query):null)}function lk(t){if(t._initialized||t._terminated)throw new b(P.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}/**
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
 */class wr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new wr(nt.fromBase64String(e))}catch(n){throw new b(P.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new wr(nt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class zi{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new b(P.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ke(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Ys{constructor(e){this._methodName=e}}/**
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
 */class Qf{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new b(P.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new b(P.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ee(this._lat,e._lat)||ee(this._long,e._long)}}/**
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
 */const PB=/^__.*__$/;class CB{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Xr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Va(e,this.data,n,this.fieldTransforms)}}class uk{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Xr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function ck(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw $()}}class Yf{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Ru(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Vu(){return this.settings.Vu}mu(e){return new Yf(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}fu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.mu({path:r,gu:!1});return i.pu(e),i}yu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.mu({path:r,gu:!1});return i.Ru(),i}wu(e){return this.mu({path:void 0,gu:!0})}Su(e){return Mh(e,this.settings.methodName,this.settings.bu||!1,this.path,this.settings.Du)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Ru(){if(this.path)for(let e=0;e<this.path.length;e++)this.pu(this.path.get(e))}pu(e){if(e.length===0)throw this.Su("Document fields must not be empty");if(ck(this.Vu)&&PB.test(e))throw this.Su('Document fields cannot begin and end with "__"')}}class kB{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Tc(e)}Cu(e,n,r,i=!1){return new Yf({Vu:e,methodName:n,Du:r,path:ke.emptyPath(),gu:!1,bu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Xs(t){const e=t._freezeSettings(),n=Tc(t._databaseId);return new kB(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Xf(t,e,n,r,i,s={}){const o=t.Cu(s.merge||s.mergeFields?2:0,e,n,i);tw("Data must be an object, but it was:",o,r);const a=fk(r,o);let l,u;if(s.merge)l=new Zt(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const d of s.mergeFields){const h=a_(e,d,n);if(!o.contains(h))throw new b(P.INVALID_ARGUMENT,`Field '${h}' is specified in your field mask but missing from your input data.`);mk(c,h)||c.push(h)}l=new Zt(c),u=o.fieldTransforms.filter(d=>l.covers(d.field))}else l=null,u=o.fieldTransforms;return new CB(new yt(a),l,u)}class Ac extends Ys{_toFieldTransform(e){if(e.Vu!==2)throw e.Vu===1?e.Su(`${this._methodName}() can only appear at the top level of your update data`):e.Su(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Ac}}function dk(t,e,n){return new Yf({Vu:3,Du:e.settings.Du,methodName:t._methodName,gu:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class Qv extends Ys{_toFieldTransform(e){return new wc(e.path,new fa)}isEqual(e){return e instanceof Qv}}class Yv extends Ys{constructor(e,n){super(e),this.vu=n}_toFieldTransform(e){const n=dk(this,e,!0),r=this.vu.map(s=>Js(s,n)),i=new Ms(r);return new wc(e.path,i)}isEqual(e){return e instanceof Yv&&mu(this.vu,e.vu)}}class Xv extends Ys{constructor(e,n){super(e),this.vu=n}_toFieldTransform(e){const n=dk(this,e,!0),r=this.vu.map(s=>Js(s,n)),i=new Fs(r);return new wc(e.path,i)}isEqual(e){return e instanceof Xv&&mu(this.vu,e.vu)}}class Jv extends Ys{constructor(e,n){super(e),this.Fu=n}_toFieldTransform(e){const n=new pa(e.serializer,jP(e.serializer,this.Fu));return new wc(e.path,n)}isEqual(e){return e instanceof Jv&&this.Fu===e.Fu}}function Zv(t,e,n,r){const i=t.Cu(1,e,n);tw("Data must be an object, but it was:",i,r);const s=[],o=yt.empty();Qs(r,(l,u)=>{const c=nw(e,l,n);u=z(u);const d=i.yu(c);if(u instanceof Ac)s.push(c);else{const h=Js(u,d);h!=null&&(s.push(c),o.set(c,h))}});const a=new Zt(s);return new uk(o,a,i.fieldTransforms)}function ew(t,e,n,r,i,s){const o=t.Cu(1,e,n),a=[a_(e,r,n)],l=[i];if(s.length%2!=0)throw new b(P.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let h=0;h<s.length;h+=2)a.push(a_(e,s[h])),l.push(s[h+1]);const u=[],c=yt.empty();for(let h=a.length-1;h>=0;--h)if(!mk(u,a[h])){const f=a[h];let v=l[h];v=z(v);const y=o.yu(f);if(v instanceof Ac)u.push(f);else{const E=Js(v,y);E!=null&&(u.push(f),c.set(f,E))}}const d=new Zt(u);return new uk(c,d,o.fieldTransforms)}function hk(t,e,n,r=!1){return Js(n,t.Cu(r?4:3,e))}function Js(t,e){if(pk(t=z(t)))return tw("Unsupported field value:",e,t),fk(t,e);if(t instanceof Ys)return function(r,i){if(!ck(i.Vu))throw i.Su(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Su(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.gu&&e.Vu!==4)throw e.Su("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let l=Js(a,i.wu(o));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=z(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return jP(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=xe.fromDate(r);return{timestampValue:ma(i.serializer,s)}}if(r instanceof xe){const s=new xe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ma(i.serializer,s)}}if(r instanceof Qf)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof wr)return{bytesValue:tC(i.serializer,r._byteString)};if(r instanceof Re){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Su(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Iv(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.Su(`Unsupported field value: ${Kf(r)}`)}(t,e)}function fk(t,e){const n={};return TP(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Qs(t,(r,i)=>{const s=Js(i,e.fu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function pk(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof xe||t instanceof Qf||t instanceof wr||t instanceof Re||t instanceof Ys)}function tw(t,e,n){if(!pk(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Kf(n);throw r==="an object"?e.Su(t+" a custom object"):e.Su(t+" "+r)}}function a_(t,e,n){if((e=z(e))instanceof zi)return e._internalPath;if(typeof e=="string")return nw(t,e);throw Mh("Field path arguments must be of type string or ",t,!1,void 0,n)}const bB=new RegExp("[~\\*/\\[\\]]");function nw(t,e,n){if(e.search(bB)>=0)throw Mh(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new zi(...e.split("."))._internalPath}catch{throw Mh(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Mh(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new b(P.INVALID_ARGUMENT,a+t+l)}function mk(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class Bu{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Re(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new xB(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Jf("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class xB extends Bu{data(){return super.data()}}function Jf(t,e){return typeof e=="string"?nw(t,e):e instanceof zi?e._internalPath:e._delegate._internalPath}/**
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
 */function gk(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new b(P.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class rw{}class Pc extends rw{}function li(t,e,...n){let r=[];e instanceof rw&&r.push(e),r=r.concat(n),function(s){const o=s.filter(l=>l instanceof iw).length,a=s.filter(l=>l instanceof Zf).length;if(o>1||o>0&&a>0)throw new b(P.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class Zf extends Pc{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Zf(e,n,r)}_apply(e){const n=this._parse(e);return yk(e._query,n),new Tt(e.firestore,e.converter,Gg(e._query,n))}_parse(e){const n=Xs(e.firestore);return function(s,o,a,l,u,c,d){let h;if(u.isKeyField()){if(c==="array-contains"||c==="array-contains-any")throw new b(P.INVALID_ARGUMENT,`Invalid Query. You can't perform '${c}' queries on documentId().`);if(c==="in"||c==="not-in"){q0(d,c);const f=[];for(const v of d)f.push(j0(l,s,v));h={arrayValue:{values:f}}}else h=j0(l,s,d)}else c!=="in"&&c!=="not-in"&&c!=="array-contains-any"||q0(d,c),h=hk(a,o,d,c==="in"||c==="not-in");return oe.create(u,c,h)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function DB(t,e,n){const r=e,i=Jf("where",t);return Zf._create(i,r,n)}class iw extends rw{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new iw(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:fe.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const l of a)yk(o,l),o=Gg(o,l)}(e._query,n),new Tt(e.firestore,e.converter,Gg(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class sw extends Pc{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new sw(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new b(P.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new b(P.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Mu(s,o)}(e._query,this._field,this._direction);return new Tt(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new Yr(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function NB(t,e="asc"){const n=e,r=Jf("orderBy",t);return sw._create(r,n)}class ep extends Pc{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new ep(e,n,r)}_apply(e){return new Tt(e.firestore,e.converter,kh(e._query,this._limit,this._limitType))}}function OB(t){return nk("limit",t),ep._create("limit",t,"F")}function VB(t){return nk("limitToLast",t),ep._create("limitToLast",t,"L")}class tp extends Pc{constructor(e,n,r){super(),this.type=e,this._docOrFields=n,this._inclusive=r}static _create(e,n,r){return new tp(e,n,r)}_apply(e){const n=_k(e,this.type,this._docOrFields,this._inclusive);return new Tt(e.firestore,e.converter,function(i,s){return new Yr(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,s,i.endAt)}(e._query,n))}}function LB(...t){return tp._create("startAt",t,!0)}function MB(...t){return tp._create("startAfter",t,!1)}class np extends Pc{constructor(e,n,r){super(),this.type=e,this._docOrFields=n,this._inclusive=r}static _create(e,n,r){return new np(e,n,r)}_apply(e){const n=_k(e,this.type,this._docOrFields,this._inclusive);return new Tt(e.firestore,e.converter,function(i,s){return new Yr(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,i.startAt,s)}(e._query,n))}}function FB(...t){return np._create("endBefore",t,!1)}function UB(...t){return np._create("endAt",t,!0)}function _k(t,e,n,r){if(n[0]=z(n[0]),n[0]instanceof Bu)return function(s,o,a,l,u){if(!l)throw new b(P.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${a}().`);const c=[];for(const d of Ho(s))if(d.field.isKeyField())c.push(Vs(o,l.key));else{const h=l.data.field(d.field);if(Ff(h))throw new b(P.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+d.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(h===null){const f=d.field.canonicalString();throw new b(P.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${f}' (used as the orderBy) does not exist.`)}c.push(h)}return new $i(c,u)}(t._query,t.firestore._databaseId,e,n[0]._document,r);{const i=Xs(t.firestore);return function(o,a,l,u,c,d){const h=o.explicitOrderBy;if(c.length>h.length)throw new b(P.INVALID_ARGUMENT,`Too many arguments provided to ${u}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const f=[];for(let v=0;v<c.length;v++){const y=c[v];if(h[v].field.isKeyField()){if(typeof y!="string")throw new b(P.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${u}(), but got a ${typeof y}`);if(!pv(o)&&y.indexOf("/")!==-1)throw new b(P.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${u}() must be a plain document ID, but '${y}' contains a slash.`);const E=o.path.child(se.fromString(y));if(!L.isDocumentKey(E))throw new b(P.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${u}() must result in a valid document path, but '${E}' is not because it contains an odd number of segments.`);const g=new L(E);f.push(Vs(a,g))}else{const E=hk(l,u,y);f.push(E)}}return new $i(f,d)}(t._query,t.firestore._databaseId,i,e,n,r)}}function j0(t,e,n){if(typeof(n=z(n))=="string"){if(n==="")throw new b(P.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!pv(e)&&n.indexOf("/")!==-1)throw new b(P.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(se.fromString(n));if(!L.isDocumentKey(r))throw new b(P.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Vs(t,new L(r))}if(n instanceof Re)return Vs(t,n._key);throw new b(P.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Kf(n)}.`)}function q0(t,e){if(!Array.isArray(t)||t.length===0)throw new b(P.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function yk(t,e){const n=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new b(P.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new b(P.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class ow{convertValue(e,n="none"){switch(Os(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Fe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Mi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw $()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Qs(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new Qf(Fe(e.latitude),Fe(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=hv(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Ou(e));default:return null}}convertTimestamp(e){const n=Li(e);return new xe(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=se.fromString(e);j(hC(r));const i=new Fi(r.get(1),r.get(3)),s=new L(r.popFirst(5));return i.isEqual(n)||He(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function rp(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class $B extends ow{constructor(e){super(),this.firestore=e}convertBytes(e){return new wr(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Re(this.firestore,null,n)}}/**
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
 */class _s{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Wr extends Bu{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Gl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Jf("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Gl extends Wr{data(e={}){return super.data(e)}}class ji{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new _s(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Gl(this._firestore,this._userDataWriter,r.key,r,new _s(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new b(P.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const l=new Gl(i._firestore,i._userDataWriter,a.doc.key,a.doc,new _s(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const l=new Gl(i._firestore,i._userDataWriter,a.doc.key,a.doc,new _s(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let u=-1,c=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),c=o.indexOf(a.doc.key)),{type:BB(a.type),doc:l,oldIndex:u,newIndex:c}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function BB(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return $()}}function vk(t,e){return t instanceof Wr&&e instanceof Wr?t._firestore===e._firestore&&t._key.isEqual(e._key)&&(t._document===null?e._document===null:t._document.isEqual(e._document))&&t._converter===e._converter:t instanceof ji&&e instanceof ji&&t._firestore===e._firestore&&sk(t.query,e.query)&&t.metadata.isEqual(e.metadata)&&t._snapshot.isEqual(e._snapshot)}/**
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
 */function zB(t){t=he(t,Re);const e=he(t.firestore,ze);return JC(ft(e),t._key).then(n=>aw(e,t,n))}class Zs extends ow{constructor(e){super(),this.firestore=e}convertBytes(e){return new wr(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Re(this.firestore,null,n)}}function jB(t){t=he(t,Re);const e=he(t.firestore,ze),n=ft(e),r=new Zs(e);return uB(n,t._key).then(i=>new Wr(e,r,t._key,i,new _s(i!==null&&i.hasLocalMutations,!0),t.converter))}function qB(t){t=he(t,Re);const e=he(t.firestore,ze);return JC(ft(e),t._key,{source:"server"}).then(n=>aw(e,t,n))}function WB(t){t=he(t,Tt);const e=he(t.firestore,ze),n=ft(e),r=new Zs(e);return gk(t._query),ZC(n,t._query).then(i=>new ji(e,r,t,i))}function GB(t){t=he(t,Tt);const e=he(t.firestore,ze),n=ft(e),r=new Zs(e);return cB(n,t._query).then(i=>new ji(e,r,t,i))}function HB(t){t=he(t,Tt);const e=he(t.firestore,ze),n=ft(e),r=new Zs(e);return ZC(n,t._query,{source:"server"}).then(i=>new ji(e,r,t,i))}function l_(t,e,n){t=he(t,Re);const r=he(t.firestore,ze),i=rp(t.converter,e,n);return Cc(r,[Xf(Xs(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,be.none())])}function W0(t,e,n,...r){t=he(t,Re);const i=he(t.firestore,ze),s=Xs(i);let o;return o=typeof(e=z(e))=="string"||e instanceof zi?ew(s,"updateDoc",t._key,e,n,r):Zv(s,"updateDoc",t._key,e),Cc(i,[o.toMutation(t._key,be.exists(!0))])}function KB(t){return Cc(he(t.firestore,ze),[new La(t._key,be.none())])}function QB(t,e){const n=he(t.firestore,ze),r=$u(t),i=rp(t.converter,e);return Cc(n,[Xf(Xs(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,be.exists(!1))]).then(()=>r)}function wk(t,...e){var n,r,i;t=z(t);let s={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||o_(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(o_(e[o])){const d=e[o];e[o]=(n=d.next)===null||n===void 0?void 0:n.bind(d),e[o+1]=(r=d.error)===null||r===void 0?void 0:r.bind(d),e[o+2]=(i=d.complete)===null||i===void 0?void 0:i.bind(d)}let l,u,c;if(t instanceof Re)u=he(t.firestore,ze),c=Oa(t._key.path),l={next:d=>{e[o]&&e[o](aw(u,t,d))},error:e[o+1],complete:e[o+2]};else{const d=he(t,Tt);u=he(d.firestore,ze),c=d._query;const h=new Zs(u);l={next:f=>{e[o]&&e[o](new ji(u,h,d,f))},error:e[o+1],complete:e[o+2]},gk(t._query)}return function(h,f,v,y){const E=new Gf(y),g=new Fv(f,E,v);return h.asyncQueue.enqueueAndForget(async()=>Vv(await Ia(h),g)),()=>{E.Qa(),h.asyncQueue.enqueueAndForget(async()=>Lv(await Ia(h),g))}}(ft(u),c,a,l)}function YB(t,e){return dB(ft(t=he(t,ze)),o_(e)?e:{next:e})}function Cc(t,e){return function(r,i){const s=new ut;return r.asyncQueue.enqueueAndForget(async()=>U$(await Hv(r),i,s)),s.promise}(ft(t),e)}function aw(t,e,n){const r=n.docs.get(e._key),i=new Zs(t);return new Wr(t,i,e._key,r,new _s(n.hasPendingWrites,n.fromCache),e.converter)}/**
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
 */const XB={maxAttempts:5};/**
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
 */class JB{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=Xs(e)}set(e,n,r){this._verifyNotCommitted();const i=gi(e,this._firestore),s=rp(i.converter,n,r),o=Xf(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,r);return this._mutations.push(o.toMutation(i._key,be.none())),this}update(e,n,r,...i){this._verifyNotCommitted();const s=gi(e,this._firestore);let o;return o=typeof(n=z(n))=="string"||n instanceof zi?ew(this._dataReader,"WriteBatch.update",s._key,n,r,i):Zv(this._dataReader,"WriteBatch.update",s._key,n),this._mutations.push(o.toMutation(s._key,be.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=gi(e,this._firestore);return this._mutations=this._mutations.concat(new La(n._key,be.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new b(P.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function gi(t,e){if((t=z(t)).firestore!==e)throw new b(P.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
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
 */class ZB extends class{constructor(n,r){this._firestore=n,this._transaction=r,this._dataReader=Xs(n)}get(n){const r=gi(n,this._firestore),i=new $B(this._firestore);return this._transaction.lookup([r._key]).then(s=>{if(!s||s.length!==1)return $();const o=s[0];if(o.isFoundDocument())return new Bu(this._firestore,i,o.key,o,r.converter);if(o.isNoDocument())return new Bu(this._firestore,i,r._key,null,r.converter);throw $()})}set(n,r,i){const s=gi(n,this._firestore),o=rp(s.converter,r,i),a=Xf(this._dataReader,"Transaction.set",s._key,o,s.converter!==null,i);return this._transaction.set(s._key,a),this}update(n,r,i,...s){const o=gi(n,this._firestore);let a;return a=typeof(r=z(r))=="string"||r instanceof zi?ew(this._dataReader,"Transaction.update",o._key,r,i,s):Zv(this._dataReader,"Transaction.update",o._key,r),this._transaction.update(o._key,a),this}delete(n){const r=gi(n,this._firestore);return this._transaction.delete(r._key),this}}{constructor(e,n){super(e,n),this._firestore=e}get(e){const n=gi(e,this._firestore),r=new Zs(this._firestore);return super.get(e).then(i=>new Wr(this._firestore,r,n._key,i._document,new _s(!1,!1),n.converter))}}function ez(t,e,n){t=he(t,ze);const r=Object.assign(Object.assign({},XB),n);return function(s){if(s.maxAttempts<1)throw new b(P.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(s,o,a){const l=new ut;return s.asyncQueue.enqueueAndForget(async()=>{const u=await oB(s);new iB(s.asyncQueue,u,a,o,l).Ya()}),l.promise}(ft(t),i=>e(new ZB(t,i)),r)}/**
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
 */function tz(){return new Ac("deleteField")}function Ik(){return new Qv("serverTimestamp")}function nz(...t){return new Yv("arrayUnion",t)}function rz(...t){return new Xv("arrayRemove",t)}function iz(t){return new Jv("increment",t)}(function(e,n=!0){(function(i){Na=i})(Hr),zr(new Dn("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new ze(new fU(r.getProvider("auth-internal")),new _U(r.getProvider("app-check-internal")),function(u,c){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new b(P.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Fi(u.options.projectId,c)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),fn(UE,"4.5.1",e),fn(UE,"4.5.1","esm2017")})();const sz="@firebase/firestore-compat",oz="0.3.28";/**
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
 */function lw(t,e){if(e===void 0)return{merge:!1};if(e.mergeFields!==void 0&&e.merge!==void 0)throw new b("invalid-argument",`Invalid options passed to function ${t}(): You cannot specify both "merge" and "mergeFields".`);return e}/**
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
 */function G0(){if(typeof Uint8Array=="undefined")throw new b("unimplemented","Uint8Arrays are not available in this environment.")}function H0(){if(!zU())throw new b("unimplemented","Blobs are unavailable in Firestore in this environment.")}class zu{constructor(e){this._delegate=e}static fromBase64String(e){return H0(),new zu(wr.fromBase64String(e))}static fromUint8Array(e){return G0(),new zu(wr.fromUint8Array(e))}toBase64(){return H0(),this._delegate.toBase64()}toUint8Array(){return G0(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}/**
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
 */function u_(t){return az(t,["next","error","complete"])}function az(t,e){if(typeof t!="object"||t===null)return!1;const n=t;for(const r of e)if(r in n&&typeof n[r]=="function")return!0;return!1}/**
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
 */class lz{enableIndexedDbPersistence(e,n){return vB(e._delegate,{forceOwnership:n})}enableMultiTabIndexedDbPersistence(e){return wB(e._delegate)}clearIndexedDbPersistence(e){return IB(e._delegate)}}class Ek{constructor(e,n,r){this._delegate=n,this._persistenceProvider=r,this.INTERNAL={delete:()=>this.terminate()},e instanceof Fi||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const n=this._delegate._getSettings();!e.merge&&n.host!==e.host&&Gn("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},n),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,n,r={}){pB(this._delegate,e,n,r)}enableNetwork(){return TB(this._delegate)}disableNetwork(){return SB(this._delegate)}enablePersistence(e){let n=!1,r=!1;return e&&(n=!!e.synchronizeTabs,r=!!e.experimentalForceOwningTab,tk("synchronizeTabs",n,"experimentalForceOwningTab",r)),n?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,r)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return EB(this._delegate)}onSnapshotsInSync(e){return YB(this._delegate,e)}get app(){if(!this._appCompat)throw new b("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new Ea(this,rk(this._delegate,e))}catch(n){throw Mt(n,"collection()","Firestore.collection()")}}doc(e){try{return new An(this,$u(this._delegate,e))}catch(n){throw Mt(n,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new Lt(this,mB(this._delegate,e))}catch(n){throw Mt(n,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return ez(this._delegate,n=>e(new Tk(this,n)))}batch(){return ft(this._delegate),new Sk(new JB(this._delegate,e=>Cc(this._delegate,e)))}loadBundle(e){return RB(this._delegate,e)}namedQuery(e){return AB(this._delegate,e).then(n=>n?new Lt(this,n):null)}}class ip extends ow{constructor(e){super(),this.firestore=e}convertBytes(e){return new zu(new wr(e))}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return An.forKey(n,this.firestore,null)}}function uz(t){uU(t)}class Tk{constructor(e,n){this._firestore=e,this._delegate=n,this._userDataWriter=new ip(e)}get(e){const n=ys(e);return this._delegate.get(n).then(r=>new ju(this._firestore,new Wr(this._firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,n.converter)))}set(e,n,r){const i=ys(e);return r?(lw("Transaction.set",r),this._delegate.set(i,n,r)):this._delegate.set(i,n),this}update(e,n,r,...i){const s=ys(e);return arguments.length===2?this._delegate.update(s,n):this._delegate.update(s,n,r,...i),this}delete(e){const n=ys(e);return this._delegate.delete(n),this}}class Sk{constructor(e){this._delegate=e}set(e,n,r){const i=ys(e);return r?(lw("WriteBatch.set",r),this._delegate.set(i,n,r)):this._delegate.set(i,n),this}update(e,n,r,...i){const s=ys(e);return arguments.length===2?this._delegate.update(s,n):this._delegate.update(s,n,r,...i),this}delete(e){const n=ys(e);return this._delegate.delete(n),this}commit(){return this._delegate.commit()}}class zs{constructor(e,n,r){this._firestore=e,this._userDataWriter=n,this._delegate=r}fromFirestore(e,n){const r=new Gl(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new qu(this._firestore,r),n!=null?n:{})}toFirestore(e,n){return n?this._delegate.toFirestore(e,n):this._delegate.toFirestore(e)}static getInstance(e,n){const r=zs.INSTANCES;let i=r.get(e);i||(i=new WeakMap,r.set(e,i));let s=i.get(n);return s||(s=new zs(e,new ip(e),n),i.set(n,s)),s}}zs.INSTANCES=new WeakMap;class An{constructor(e,n){this.firestore=e,this._delegate=n,this._userDataWriter=new ip(e)}static forPath(e,n,r){if(e.length%2!==0)throw new b("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new An(n,new Re(n._delegate,r,new L(e)))}static forKey(e,n,r){return new An(n,new Re(n._delegate,r,e))}get id(){return this._delegate.id}get parent(){return new Ea(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new Ea(this.firestore,rk(this._delegate,e))}catch(n){throw Mt(n,"collection()","DocumentReference.collection()")}}isEqual(e){return e=z(e),e instanceof Re?ik(this._delegate,e):!1}set(e,n){n=lw("DocumentReference.set",n);try{return n?l_(this._delegate,e,n):l_(this._delegate,e)}catch(r){throw Mt(r,"setDoc()","DocumentReference.set()")}}update(e,n,...r){try{return arguments.length===1?W0(this._delegate,e):W0(this._delegate,e,n,...r)}catch(i){throw Mt(i,"updateDoc()","DocumentReference.update()")}}delete(){return KB(this._delegate)}onSnapshot(...e){const n=Rk(e),r=Ak(e,i=>new ju(this.firestore,new Wr(this.firestore._delegate,this._userDataWriter,i._key,i._document,i.metadata,this._delegate.converter)));return wk(this._delegate,n,r)}get(e){let n;return(e==null?void 0:e.source)==="cache"?n=jB(this._delegate):(e==null?void 0:e.source)==="server"?n=qB(this._delegate):n=zB(this._delegate),n.then(r=>new ju(this.firestore,new Wr(this.firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,this._delegate.converter)))}withConverter(e){return new An(this.firestore,e?this._delegate.withConverter(zs.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function Mt(t,e,n){return t.message=t.message.replace(e,n),t}function Rk(t){for(const e of t)if(typeof e=="object"&&!u_(e))return e;return{}}function Ak(t,e){var n,r;let i;return u_(t[0])?i=t[0]:u_(t[1])?i=t[1]:typeof t[0]=="function"?i={next:t[0],error:t[1],complete:t[2]}:i={next:t[1],error:t[2],complete:t[3]},{next:s=>{i.next&&i.next(e(s))},error:(n=i.error)===null||n===void 0?void 0:n.bind(i),complete:(r=i.complete)===null||r===void 0?void 0:r.bind(i)}}class ju{constructor(e,n){this._firestore=e,this._delegate=n}get ref(){return new An(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,n){return this._delegate.get(e,n)}isEqual(e){return vk(this._delegate,e._delegate)}}class qu extends ju{data(e){const n=this._delegate.data(e);return this._delegate._converter||cU(n!==void 0),n}}class Lt{constructor(e,n){this.firestore=e,this._delegate=n,this._userDataWriter=new ip(e)}where(e,n,r){try{return new Lt(this.firestore,li(this._delegate,DB(e,n,r)))}catch(i){throw Mt(i,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,n){try{return new Lt(this.firestore,li(this._delegate,NB(e,n)))}catch(r){throw Mt(r,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new Lt(this.firestore,li(this._delegate,OB(e)))}catch(n){throw Mt(n,"limit()","Query.limit()")}}limitToLast(e){try{return new Lt(this.firestore,li(this._delegate,VB(e)))}catch(n){throw Mt(n,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new Lt(this.firestore,li(this._delegate,LB(...e)))}catch(n){throw Mt(n,"startAt()","Query.startAt()")}}startAfter(...e){try{return new Lt(this.firestore,li(this._delegate,MB(...e)))}catch(n){throw Mt(n,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new Lt(this.firestore,li(this._delegate,FB(...e)))}catch(n){throw Mt(n,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new Lt(this.firestore,li(this._delegate,UB(...e)))}catch(n){throw Mt(n,"endAt()","Query.endAt()")}}isEqual(e){return sk(this._delegate,e._delegate)}get(e){let n;return(e==null?void 0:e.source)==="cache"?n=GB(this._delegate):(e==null?void 0:e.source)==="server"?n=HB(this._delegate):n=WB(this._delegate),n.then(r=>new c_(this.firestore,new ji(this.firestore._delegate,this._userDataWriter,this._delegate,r._snapshot)))}onSnapshot(...e){const n=Rk(e),r=Ak(e,i=>new c_(this.firestore,new ji(this.firestore._delegate,this._userDataWriter,this._delegate,i._snapshot)));return wk(this._delegate,n,r)}withConverter(e){return new Lt(this.firestore,e?this._delegate.withConverter(zs.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class cz{constructor(e,n){this._firestore=e,this._delegate=n}get type(){return this._delegate.type}get doc(){return new qu(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class c_{constructor(e,n){this._firestore=e,this._delegate=n}get query(){return new Lt(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new qu(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(n=>new cz(this._firestore,n))}forEach(e,n){this._delegate.forEach(r=>{e.call(n,new qu(this._firestore,r))})}isEqual(e){return vk(this._delegate,e._delegate)}}class Ea extends Lt{constructor(e,n){super(e,n),this.firestore=e,this._delegate=n}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new An(this.firestore,e):null}doc(e){try{return e===void 0?new An(this.firestore,$u(this._delegate)):new An(this.firestore,$u(this._delegate,e))}catch(n){throw Mt(n,"doc()","CollectionReference.doc()")}}add(e){return QB(this._delegate,e).then(n=>new An(this.firestore,n))}isEqual(e){return ik(this._delegate,e._delegate)}withConverter(e){return new Ea(this.firestore,e?this._delegate.withConverter(zs.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function ys(t){return he(t,Re)}/**
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
 */class uw{constructor(...e){this._delegate=new zi(...e)}static documentId(){return new uw(ke.keyField().canonicalString())}isEqual(e){return e=z(e),e instanceof zi?this._delegate._internalPath.isEqual(e._internalPath):!1}}/**
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
 */class cs{constructor(e){this._delegate=e}static serverTimestamp(){const e=Ik();return e._methodName="FieldValue.serverTimestamp",new cs(e)}static delete(){const e=tz();return e._methodName="FieldValue.delete",new cs(e)}static arrayUnion(...e){const n=nz(...e);return n._methodName="FieldValue.arrayUnion",new cs(n)}static arrayRemove(...e){const n=rz(...e);return n._methodName="FieldValue.arrayRemove",new cs(n)}static increment(e){const n=iz(e);return n._methodName="FieldValue.increment",new cs(n)}isEqual(e){return this._delegate.isEqual(e._delegate)}}/**
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
 */const dz={Firestore:Ek,GeoPoint:Qf,Timestamp:xe,Blob:zu,Transaction:Tk,WriteBatch:Sk,DocumentReference:An,DocumentSnapshot:ju,Query:Lt,QueryDocumentSnapshot:qu,QuerySnapshot:c_,CollectionReference:Ea,FieldPath:uw,FieldValue:cs,setLogLevel:uz,CACHE_SIZE_UNLIMITED:yB};function hz(t,e){t.INTERNAL.registerComponent(new Dn("firestore-compat",n=>{const r=n.getProvider("app-compat").getImmediate(),i=n.getProvider("firestore").getImmediate();return e(r,i)},"PUBLIC").setServiceProps(Object.assign({},dz)))}/**
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
 */function fz(t){hz(t,(e,n)=>new Ek(e,n,new lz)),t.registerVersion(sz,oz)}fz(pr);/**
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
 */const Pk="firebasestorage.googleapis.com",Ck="storageBucket",pz=2*60*1e3,mz=10*60*1e3,gz=1e3;/**
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
 */class Le extends kt{constructor(e,n,r=0){super(pm(e),`Firebase Storage: ${n} (${pm(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Le.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return pm(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Ae;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Ae||(Ae={}));function pm(t){return"storage/"+t}function cw(){const t="An unknown error occurred, please check the error payload for server response.";return new Le(Ae.UNKNOWN,t)}function _z(t){return new Le(Ae.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function yz(t){return new Le(Ae.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function vz(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Le(Ae.UNAUTHENTICATED,t)}function wz(){return new Le(Ae.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function Iz(t){return new Le(Ae.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function kk(){return new Le(Ae.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function bk(){return new Le(Ae.CANCELED,"User canceled the upload/download.")}function Ez(t){return new Le(Ae.INVALID_URL,"Invalid URL '"+t+"'.")}function Tz(t){return new Le(Ae.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function Sz(){return new Le(Ae.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Ck+"' property when initializing the app?")}function xk(){return new Le(Ae.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function Rz(){return new Le(Ae.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function Az(){return new Le(Ae.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function Pz(t){return new Le(Ae.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Qo(t){return new Le(Ae.INVALID_ARGUMENT,t)}function Dk(){return new Le(Ae.APP_DELETED,"The Firebase app was deleted.")}function Nk(t){return new Le(Ae.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Hl(t,e){return new Le(Ae.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function ml(t){throw new Le(Ae.INTERNAL_ERROR,"Internal error: "+t)}/**
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
 */class Ct{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Ct.makeFromUrl(e,n)}catch{return new Ct(e,"")}if(r.path==="")return r;throw Tz(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(I){I.path.charAt(I.path.length-1)==="/"&&(I.path_=I.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function u(I){I.path_=decodeURIComponent(I.path)}const c="v[A-Za-z0-9_]+",d=n.replace(/[.]/g,"\\."),h="(/([^?#]*).*)?$",f=new RegExp(`^https?://${d}/${c}/b/${i}/o${h}`,"i"),v={bucket:1,path:3},y=n===Pk?"(?:storage.googleapis.com|storage.cloud.google.com)":n,E="([^?#]*)",g=new RegExp(`^https?://${y}/${i}/${E}`,"i"),m=[{regex:a,indices:l,postModify:s},{regex:f,indices:v,postModify:u},{regex:g,indices:{bucket:1,path:2},postModify:u}];for(let I=0;I<m.length;I++){const A=m[I],C=A.regex.exec(e);if(C){const _=C[A.indices.bucket];let w=C[A.indices.path];w||(w=""),r=new Ct(_,w),A.postModify(r);break}}if(r==null)throw Ez(e);return r}}class Cz{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function kz(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function l(){return a===2}let u=!1;function c(...E){u||(u=!0,e.apply(null,E))}function d(E){i=setTimeout(()=>{i=null,t(f,l())},E)}function h(){s&&clearTimeout(s)}function f(E,...g){if(u){h();return}if(E){h(),c.call(null,E,...g);return}if(l()||o){h(),c.call(null,E,...g);return}r<64&&(r*=2);let m;a===1?(a=2,m=0):m=(r+Math.random())*1e3,d(m)}let v=!1;function y(E){v||(v=!0,h(),!u&&(i!==null?(E||(a=2),clearTimeout(i),d(0)):E||(a=1)))}return d(0),s=setTimeout(()=>{o=!0,y(!0)},n),y}function bz(t){t(!1)}/**
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
 */function xz(t){return t!==void 0}function Dz(t){return typeof t=="function"}function Nz(t){return typeof t=="object"&&!Array.isArray(t)}function sp(t){return typeof t=="string"||t instanceof String}function K0(t){return dw()&&t instanceof Blob}function dw(){return typeof Blob!="undefined"}function d_(t,e,n,r){if(r<e)throw Qo(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Qo(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function es(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function Ok(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
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
 */var Rs;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Rs||(Rs={}));/**
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
 */function Vk(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
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
 */class Oz{constructor(e,n,r,i,s,o,a,l,u,c,d,h=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=c,this.connectionFactory_=d,this.retry=h,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((f,v)=>{this.resolve_=f,this.reject_=v,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new hd(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===Rs.NO_ERROR,l=s.getStatus();if(!a||Vk(l,this.additionalRetryCodes_)&&this.retry){const c=s.getErrorCode()===Rs.ABORT;r(!1,new hd(!1,null,c));return}const u=this.successCodes_.indexOf(l)!==-1;r(!0,new hd(u,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());xz(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=cw();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?Dk():bk();o(l)}else{const l=kk();o(l)}};this.canceled_?n(!1,new hd(!1,null,!0)):this.backoffId_=kz(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&bz(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class hd{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function Vz(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function Lz(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e!=null?e:"AppManager")}function Mz(t,e){e&&(t["X-Firebase-GMPID"]=e)}function Fz(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function Uz(t,e,n,r,i,s,o=!0){const a=Ok(t.urlParams),l=t.url+a,u=Object.assign({},t.headers);return Mz(u,e),Vz(u,n),Lz(u,s),Fz(u,r),new Oz(l,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
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
 */function $z(){return typeof BlobBuilder!="undefined"?BlobBuilder:typeof WebKitBlobBuilder!="undefined"?WebKitBlobBuilder:void 0}function Bz(...t){const e=$z();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(dw())return new Blob(t);throw new Le(Ae.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function zz(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function jz(t){if(typeof atob=="undefined")throw Pz("base-64");return atob(t)}/**
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
 */const Pn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class mm{constructor(e,n){this.data=e,this.contentType=n||null}}function Lk(t,e){switch(t){case Pn.RAW:return new mm(Mk(e));case Pn.BASE64:case Pn.BASE64URL:return new mm(Fk(t,e));case Pn.DATA_URL:return new mm(Wz(e),Gz(e))}throw cw()}function Mk(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function qz(t){let e;try{e=decodeURIComponent(t)}catch{throw Hl(Pn.DATA_URL,"Malformed data URL.")}return Mk(e)}function Fk(t,e){switch(t){case Pn.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw Hl(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case Pn.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw Hl(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=jz(e)}catch(i){throw i.message.includes("polyfill")?i:Hl(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class Uk{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Hl(Pn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=Hz(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function Wz(t){const e=new Uk(t);return e.base64?Fk(Pn.BASE64,e.rest):qz(e.rest)}function Gz(t){return new Uk(t).contentType}function Hz(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class Pr{constructor(e,n){let r=0,i="";K0(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(K0(this.data_)){const r=this.data_,i=zz(r,e,n);return i===null?null:new Pr(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new Pr(r,!0)}}static getBlob(...e){if(dw()){const n=e.map(r=>r instanceof Pr?r.data_:r);return new Pr(Bz.apply(null,n))}else{const n=e.map(o=>sp(o)?Lk(Pn.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[s++]=o[a]}),new Pr(i,!0)}}uploadData(){return this.data_}}/**
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
 */function hw(t){let e;try{e=JSON.parse(t)}catch{return null}return Nz(e)?e:null}/**
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
 */function Kz(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function Qz(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function $k(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function Yz(t,e){return e}class Ot{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||Yz}}let fd=null;function Xz(t){return!sp(t)||t.length<2?t:$k(t)}function op(){if(fd)return fd;const t=[];t.push(new Ot("bucket")),t.push(new Ot("generation")),t.push(new Ot("metageneration")),t.push(new Ot("name","fullPath",!0));function e(s,o){return Xz(o)}const n=new Ot("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new Ot("size");return i.xform=r,t.push(i),t.push(new Ot("timeCreated")),t.push(new Ot("updated")),t.push(new Ot("md5Hash",null,!0)),t.push(new Ot("cacheControl",null,!0)),t.push(new Ot("contentDisposition",null,!0)),t.push(new Ot("contentEncoding",null,!0)),t.push(new Ot("contentLanguage",null,!0)),t.push(new Ot("contentType",null,!0)),t.push(new Ot("metadata","customMetadata",!0)),fd=t,fd}function Jz(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new Ct(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function Zz(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return Jz(r,t),r}function Bk(t,e,n){const r=hw(e);return r===null?null:Zz(t,r,n)}function e9(t,e,n,r){const i=hw(e);if(i===null||!sp(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(u=>{const c=t.bucket,d=t.fullPath,h="/b/"+o(c)+"/o/"+o(d),f=es(h,n,r),v=Ok({alt:"media",token:u});return f+v})[0]}function fw(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}/**
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
 */const Q0="prefixes",Y0="items";function t9(t,e,n){const r={prefixes:[],items:[],nextPageToken:n.nextPageToken};if(n[Q0])for(const i of n[Q0]){const s=i.replace(/\/$/,""),o=t._makeStorageReference(new Ct(e,s));r.prefixes.push(o)}if(n[Y0])for(const i of n[Y0]){const s=t._makeStorageReference(new Ct(e,i.name));r.items.push(s)}return r}function n9(t,e,n){const r=hw(n);return r===null?null:t9(t,e,r)}class Zr{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function _r(t){if(!t)throw cw()}function ap(t,e){function n(r,i){const s=Bk(t,i,e);return _r(s!==null),s}return n}function r9(t,e){function n(r,i){const s=n9(t,e,i);return _r(s!==null),s}return n}function i9(t,e){function n(r,i){const s=Bk(t,i,e);return _r(s!==null),e9(s,i,t.host,t._protocol)}return n}function Ba(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=wz():i=vz():n.getStatus()===402?i=yz(t.bucket):n.getStatus()===403?i=Iz(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function lp(t){const e=Ba(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=_z(t.path)),s.serverResponse=i.serverResponse,s}return n}function zk(t,e,n){const r=e.fullServerUrl(),i=es(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new Zr(i,s,ap(t,n),o);return a.errorHandler=lp(e),a}function s9(t,e,n,r,i){const s={};e.isRoot?s.prefix="":s.prefix=e.path+"/",n&&n.length>0&&(s.delimiter=n),r&&(s.pageToken=r),i&&(s.maxResults=i);const o=e.bucketOnlyServerUrl(),a=es(o,t.host,t._protocol),l="GET",u=t.maxOperationRetryTime,c=new Zr(a,l,r9(t,e.bucket),u);return c.urlParams=s,c.errorHandler=Ba(e),c}function o9(t,e,n){const r=e.fullServerUrl(),i=es(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new Zr(i,s,i9(t,n),o);return a.errorHandler=lp(e),a}function a9(t,e,n,r){const i=e.fullServerUrl(),s=es(i,t.host,t._protocol),o="PATCH",a=fw(n,r),l={"Content-Type":"application/json; charset=utf-8"},u=t.maxOperationRetryTime,c=new Zr(s,o,ap(t,r),u);return c.headers=l,c.body=a,c.errorHandler=lp(e),c}function l9(t,e){const n=e.fullServerUrl(),r=es(n,t.host,t._protocol),i="DELETE",s=t.maxOperationRetryTime;function o(l,u){}const a=new Zr(r,i,o,s);return a.successCodes=[200,204],a.errorHandler=lp(e),a}function u9(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function jk(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=u9(null,e)),r}function c9(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let m="";for(let I=0;I<2;I++)m=m+Math.random().toString().slice(2);return m}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const u=jk(e,r,i),c=fw(u,n),d="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+c+`\r
--`+l+`\r
Content-Type: `+u.contentType+`\r
\r
`,h=`\r
--`+l+"--",f=Pr.getBlob(d,r,h);if(f===null)throw xk();const v={name:u.fullPath},y=es(s,t.host,t._protocol),E="POST",g=t.maxUploadRetryTime,p=new Zr(y,E,ap(t,n),g);return p.urlParams=v,p.headers=o,p.body=f.uploadData(),p.errorHandler=Ba(e),p}class Fh{constructor(e,n,r,i){this.current=e,this.total=n,this.finalized=!!r,this.metadata=i||null}}function pw(t,e){let n=null;try{n=t.getResponseHeader("X-Goog-Upload-Status")}catch{_r(!1)}return _r(!!n&&(e||["active"]).indexOf(n)!==-1),n}function d9(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o=jk(e,r,i),a={name:o.fullPath},l=es(s,t.host,t._protocol),u="POST",c={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${r.size()}`,"X-Goog-Upload-Header-Content-Type":o.contentType,"Content-Type":"application/json; charset=utf-8"},d=fw(o,n),h=t.maxUploadRetryTime;function f(y){pw(y);let E;try{E=y.getResponseHeader("X-Goog-Upload-URL")}catch{_r(!1)}return _r(sp(E)),E}const v=new Zr(l,u,f,h);return v.urlParams=a,v.headers=c,v.body=d,v.errorHandler=Ba(e),v}function h9(t,e,n,r){const i={"X-Goog-Upload-Command":"query"};function s(u){const c=pw(u,["active","final"]);let d=null;try{d=u.getResponseHeader("X-Goog-Upload-Size-Received")}catch{_r(!1)}d||_r(!1);const h=Number(d);return _r(!isNaN(h)),new Fh(h,r.size(),c==="final")}const o="POST",a=t.maxUploadRetryTime,l=new Zr(n,o,s,a);return l.headers=i,l.errorHandler=Ba(e),l}const X0=256*1024;function f9(t,e,n,r,i,s,o,a){const l=new Fh(0,0);if(o?(l.current=o.current,l.total=o.total):(l.current=0,l.total=r.size()),r.size()!==l.total)throw Rz();const u=l.total-l.current;let c=u;i>0&&(c=Math.min(c,i));const d=l.current,h=d+c;let f="";c===0?f="finalize":u===c?f="upload, finalize":f="upload";const v={"X-Goog-Upload-Command":f,"X-Goog-Upload-Offset":`${l.current}`},y=r.slice(d,h);if(y===null)throw xk();function E(I,A){const C=pw(I,["active","final"]),_=l.current+c,w=r.size();let R;return C==="final"?R=ap(e,s)(I,A):R=null,new Fh(_,w,C==="final",R)}const g="POST",p=e.maxUploadRetryTime,m=new Zr(n,g,E,p);return m.headers=v,m.body=y.uploadData(),m.progressCallback=a||null,m.errorHandler=Ba(t),m}/**
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
 */const p9={STATE_CHANGED:"state_changed"},Ft={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function gm(t){switch(t){case"running":case"pausing":case"canceling":return Ft.RUNNING;case"paused":return Ft.PAUSED;case"success":return Ft.SUCCESS;case"canceled":return Ft.CANCELED;case"error":return Ft.ERROR;default:return Ft.ERROR}}/**
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
 */class m9{constructor(e,n,r){if(Dz(e)||n!=null||r!=null)this.next=e,this.error=n!=null?n:void 0,this.complete=r!=null?r:void 0;else{const s=e;this.next=s.next,this.error=s.error,this.complete=s.complete}}}/**
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
 */function po(t){return(...e)=>{Promise.resolve().then(()=>t(...e))}}class g9{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Rs.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Rs.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Rs.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw ml("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw ml("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw ml("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw ml("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw ml("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class _9 extends g9{initXhr(){this.xhr_.responseType="text"}}function sr(){return new _9}/**
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
 */class qk{constructor(e,n,r=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=n,this._metadata=r,this._mappings=op(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=i=>{if(this._request=void 0,this._chunkMultiplier=1,i._codeEquals(Ae.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const s=this.isExponentialBackoffExpired();if(Vk(i.status,[]))if(s)i=kk();else{this.sleepTime=Math.max(this.sleepTime*2,gz),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=i,this._transition("error")}},this._metadataErrorHandler=i=>{this._request=void 0,i._codeEquals(Ae.CANCELED)?this.completeTransitions_():(this._error=i,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((i,s)=>{this._resolve=i,this._reject=s,this._start()}),this._promise.then(null,()=>{})}isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}_makeProgressCallback(){const e=this._transferred;return n=>this._updateProgress(e+n)}_shouldDoResumable(e){return e.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([n,r])=>{switch(this._state){case"running":e(n,r);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,n)=>{const r=d9(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,sr,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._uploadUrl=s,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((n,r)=>{const i=h9(this._ref.storage,this._ref._location,e,this._blob),s=this._ref.storage._makeRequest(i,sr,n,r);this._request=s,s.getPromise().then(o=>{o=o,this._request=void 0,this._updateProgress(o.current),this._needToFetchStatus=!1,o.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=X0*this._chunkMultiplier,n=new Fh(this._transferred,this._blob.size()),r=this._uploadUrl;this._resolveToken((i,s)=>{let o;try{o=f9(this._ref._location,this._ref.storage,r,this._blob,e,this._mappings,n,this._makeProgressCallback())}catch(l){this._error=l,this._transition("error");return}const a=this._ref.storage._makeRequest(o,sr,i,s,!1);this._request=a,a.getPromise().then(l=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(l.current),l.finalized?(this._metadata=l.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){X0*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,n)=>{const r=zk(this._ref.storage,this._ref._location,this._mappings),i=this._ref.storage._makeRequest(r,sr,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._metadata=s,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,n)=>{const r=c9(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,sr,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._metadata=s,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const n=this._transferred;this._transferred=e,this._transferred!==n&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const n=this._state==="paused";this._state=e,n&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=bk(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=gm(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,n,r,i){const s=new m9(n||void 0,r||void 0,i||void 0);return this._addObserver(s),()=>{this._removeObserver(s)}}then(e,n){return this._promise.then(e,n)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const n=this._observers.indexOf(e);n!==-1&&this._observers.splice(n,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(n=>{this._notifyObserver(n)})}_finishPromise(){if(this._resolve!==void 0){let e=!0;switch(gm(this._state)){case Ft.SUCCESS:po(this._resolve.bind(null,this.snapshot))();break;case Ft.CANCELED:case Ft.ERROR:const n=this._reject;po(n.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(gm(this._state)){case Ft.RUNNING:case Ft.PAUSED:e.next&&po(e.next.bind(e,this.snapshot))();break;case Ft.SUCCESS:e.complete&&po(e.complete.bind(e))();break;case Ft.CANCELED:case Ft.ERROR:e.error&&po(e.error.bind(e,this._error))();break;default:e.error&&po(e.error.bind(e,this._error))()}}resume(){const e=this._state==="paused"||this._state==="pausing";return e&&this._transition("running"),e}pause(){const e=this._state==="running";return e&&this._transition("pausing"),e}cancel(){const e=this._state==="running"||this._state==="pausing";return e&&this._transition("canceling"),e}}/**
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
 */class js{constructor(e,n){this._service=e,n instanceof Ct?this._location=n:this._location=Ct.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new js(e,n)}get root(){const e=new Ct(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return $k(this._location.path)}get storage(){return this._service}get parent(){const e=Kz(this._location.path);if(e===null)return null;const n=new Ct(this._location.bucket,e);return new js(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw Nk(e)}}function y9(t,e,n){return t._throwIfRoot("uploadBytesResumable"),new qk(t,new Pr(e),n)}function v9(t){const e={prefixes:[],items:[]};return Wk(t,e).then(()=>e)}async function Wk(t,e,n){const i=await Gk(t,{pageToken:n});e.prefixes.push(...i.prefixes),e.items.push(...i.items),i.nextPageToken!=null&&await Wk(t,e,i.nextPageToken)}function Gk(t,e){e!=null&&typeof e.maxResults=="number"&&d_("options.maxResults",1,1e3,e.maxResults);const n=e||{},r=s9(t.storage,t._location,"/",n.pageToken,n.maxResults);return t.storage.makeRequestWithTokens(r,sr)}function w9(t){t._throwIfRoot("getMetadata");const e=zk(t.storage,t._location,op());return t.storage.makeRequestWithTokens(e,sr)}function I9(t,e){t._throwIfRoot("updateMetadata");const n=a9(t.storage,t._location,e,op());return t.storage.makeRequestWithTokens(n,sr)}function E9(t){t._throwIfRoot("getDownloadURL");const e=o9(t.storage,t._location,op());return t.storage.makeRequestWithTokens(e,sr).then(n=>{if(n===null)throw Az();return n})}function T9(t){t._throwIfRoot("deleteObject");const e=l9(t.storage,t._location);return t.storage.makeRequestWithTokens(e,sr)}function Hk(t,e){const n=Qz(t._location.path,e),r=new Ct(t._location.bucket,n);return new js(t.storage,r)}/**
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
 */function S9(t){return/^[A-Za-z]+:\/\//.test(t)}function R9(t,e){return new js(t,e)}function Kk(t,e){if(t instanceof mw){const n=t;if(n._bucket==null)throw Sz();const r=new js(n,n._bucket);return e!=null?Kk(r,e):r}else return e!==void 0?Hk(t,e):t}function A9(t,e){if(e&&S9(e)){if(t instanceof mw)return R9(t,e);throw Qo("To use ref(service, url), the first argument must be a Storage instance.")}else return Kk(t,e)}function J0(t,e){const n=e==null?void 0:e[Ck];return n==null?null:Ct.makeFromBucketSpec(n,t)}function P9(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:HR(i,t.app.options.projectId))}class mw{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=Pk,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=pz,this._maxUploadRetryTime=mz,this._requests=new Set,i!=null?this._bucket=Ct.makeFromBucketSpec(i,this._host):this._bucket=J0(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Ct.makeFromBucketSpec(this._url,e):this._bucket=J0(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){d_("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){d_("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new js(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new Cz(Dk());{const o=Uz(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const Z0="@firebase/storage",eT="0.12.3";/**
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
 */const C9="storage";function k9(t,e,n){return t=z(t),y9(t,e,n)}function b9(t){return t=z(t),w9(t)}function x9(t,e){return t=z(t),I9(t,e)}function D9(t,e){return t=z(t),Gk(t,e)}function N9(t){return t=z(t),v9(t)}function O9(t){return t=z(t),E9(t)}function V9(t){return t=z(t),T9(t)}function tT(t,e){return t=z(t),A9(t,e)}function L9(t,e){return Hk(t,e)}function M9(t,e,n,r={}){P9(t,e,n,r)}function F9(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new mw(n,r,i,e,Hr)}function U9(){zr(new Dn(C9,F9,"PUBLIC").setMultipleInstances(!0)),fn(Z0,eT,""),fn(Z0,eT,"esm2017")}U9();/**
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
 */class pd{constructor(e,n,r){this._delegate=e,this.task=n,this.ref=r}get bytesTransferred(){return this._delegate.bytesTransferred}get metadata(){return this._delegate.metadata}get state(){return this._delegate.state}get totalBytes(){return this._delegate.totalBytes}}/**
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
 */class nT{constructor(e,n){this._delegate=e,this._ref=n,this.cancel=this._delegate.cancel.bind(this._delegate),this.catch=this._delegate.catch.bind(this._delegate),this.pause=this._delegate.pause.bind(this._delegate),this.resume=this._delegate.resume.bind(this._delegate)}get snapshot(){return new pd(this._delegate.snapshot,this,this._ref)}then(e,n){return this._delegate.then(r=>{if(e)return e(new pd(r,this,this._ref))},n)}on(e,n,r,i){let s;return n&&(typeof n=="function"?s=o=>n(new pd(o,this,this._ref)):s={next:n.next?o=>n.next(new pd(o,this,this._ref)):void 0,complete:n.complete||void 0,error:n.error||void 0}),this._delegate.on(e,s,r||void 0,i||void 0)}}class rT{constructor(e,n){this._delegate=e,this._service=n}get prefixes(){return this._delegate.prefixes.map(e=>new Mr(e,this._service))}get items(){return this._delegate.items.map(e=>new Mr(e,this._service))}get nextPageToken(){return this._delegate.nextPageToken||null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr{constructor(e,n){this._delegate=e,this.storage=n}get name(){return this._delegate.name}get bucket(){return this._delegate.bucket}get fullPath(){return this._delegate.fullPath}toString(){return this._delegate.toString()}child(e){const n=L9(this._delegate,e);return new Mr(n,this.storage)}get root(){return new Mr(this._delegate.root,this.storage)}get parent(){const e=this._delegate.parent;return e==null?null:new Mr(e,this.storage)}put(e,n){return this._throwIfRoot("put"),new nT(k9(this._delegate,e,n),this)}putString(e,n=Pn.RAW,r){this._throwIfRoot("putString");const i=Lk(n,e),s=Object.assign({},r);return s.contentType==null&&i.contentType!=null&&(s.contentType=i.contentType),new nT(new qk(this._delegate,new Pr(i.data,!0),s),this)}listAll(){return N9(this._delegate).then(e=>new rT(e,this.storage))}list(e){return D9(this._delegate,e||void 0).then(n=>new rT(n,this.storage))}getMetadata(){return b9(this._delegate)}updateMetadata(e){return x9(this._delegate,e)}getDownloadURL(){return O9(this._delegate)}delete(){return this._throwIfRoot("delete"),V9(this._delegate)}_throwIfRoot(e){if(this._delegate._location.path==="")throw Nk(e)}}/**
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
 */class Qk{constructor(e,n){this.app=e,this._delegate=n}get maxOperationRetryTime(){return this._delegate.maxOperationRetryTime}get maxUploadRetryTime(){return this._delegate.maxUploadRetryTime}ref(e){if(iT(e))throw Qo("ref() expected a child path but got a URL, use refFromURL instead.");return new Mr(tT(this._delegate,e),this)}refFromURL(e){if(!iT(e))throw Qo("refFromURL() expected a full URL but got a child path, use ref() instead.");try{Ct.makeFromUrl(e,this._delegate.host)}catch{throw Qo("refFromUrl() expected a valid full URL but got an invalid one.")}return new Mr(tT(this._delegate,e),this)}setMaxUploadRetryTime(e){this._delegate.maxUploadRetryTime=e}setMaxOperationRetryTime(e){this._delegate.maxOperationRetryTime=e}useEmulator(e,n,r={}){M9(this._delegate,e,n,r)}}function iT(t){return/^[A-Za-z]+:\/\//.test(t)}const $9="@firebase/storage-compat",B9="0.3.6";/**
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
 */const z9="storage-compat";function j9(t,{instanceIdentifier:e}){const n=t.getProvider("app-compat").getImmediate(),r=t.getProvider("storage").getImmediate({identifier:e});return new Qk(n,r)}function q9(t){const e={TaskState:Ft,TaskEvent:p9,StringFormat:Pn,Storage:Qk,Reference:Mr};t.INTERNAL.registerComponent(new Dn(z9,j9,"PUBLIC").setServiceProps(e).setMultipleInstances(!0)),t.registerVersion($9,B9)}q9(pr);const W9={apiKey:"AIzaSyCZfl35W4mAXoVlNpoeHJo9MKbS1QzPz74",authDomain:"bookger-f7294.firebaseapp.com",projectId:"bookger-f7294",storageBucket:"bookger-f7294.appspot.com",messagingSenderId:"547274838685",appId:"1:547274838685:web:e5f4b5a3ba12a7dd417a74"};let Uh;pr.apps.length==0?Uh=pr.initializeApp(W9):Uh=pr.app();const G9=Uh.firestore();pr.auth();Uh.storage();function H9(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return S.exports.useMemo(()=>r=>{e.forEach(i=>i(r))},e)}const up=typeof window!="undefined"&&typeof window.document!="undefined"&&typeof window.document.createElement!="undefined";function za(t){const e=Object.prototype.toString.call(t);return e==="[object Window]"||e==="[object global]"}function gw(t){return"nodeType"in t}function sn(t){var e,n;return t?za(t)?t:gw(t)&&(e=(n=t.ownerDocument)==null?void 0:n.defaultView)!=null?e:window:window}function _w(t){const{Document:e}=sn(t);return t instanceof e}function kc(t){return za(t)?!1:t instanceof sn(t).HTMLElement}function K9(t){return t instanceof sn(t).SVGElement}function ja(t){return t?za(t)?t.document:gw(t)?_w(t)?t:kc(t)?t.ownerDocument:document:document:document}const Hn=up?S.exports.useLayoutEffect:S.exports.useEffect;function yw(t){const e=S.exports.useRef(t);return Hn(()=>{e.current=t}),S.exports.useCallback(function(){for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return e.current==null?void 0:e.current(...r)},[])}function Q9(){const t=S.exports.useRef(null),e=S.exports.useCallback((r,i)=>{t.current=setInterval(r,i)},[]),n=S.exports.useCallback(()=>{t.current!==null&&(clearInterval(t.current),t.current=null)},[]);return[e,n]}function Wu(t,e){e===void 0&&(e=[t]);const n=S.exports.useRef(t);return Hn(()=>{n.current!==t&&(n.current=t)},e),n}function bc(t,e){const n=S.exports.useRef();return S.exports.useMemo(()=>{const r=t(n.current);return n.current=r,r},[...e])}function $h(t){const e=yw(t),n=S.exports.useRef(null),r=S.exports.useCallback(i=>{i!==n.current&&(e==null||e(i,n.current)),n.current=i},[]);return[n,r]}function h_(t){const e=S.exports.useRef();return S.exports.useEffect(()=>{e.current=t},[t]),e.current}let _m={};function xc(t,e){return S.exports.useMemo(()=>{if(e)return e;const n=_m[t]==null?0:_m[t]+1;return _m[t]=n,t+"-"+n},[t,e])}function Yk(t){return function(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];return r.reduce((s,o)=>{const a=Object.entries(o);for(const[l,u]of a){const c=s[l];c!=null&&(s[l]=c+t*u)}return s},{...e})}}const Yo=Yk(1),Gu=Yk(-1);function Y9(t){return"clientX"in t&&"clientY"in t}function vw(t){if(!t)return!1;const{KeyboardEvent:e}=sn(t.target);return e&&t instanceof e}function X9(t){if(!t)return!1;const{TouchEvent:e}=sn(t.target);return e&&t instanceof e}function f_(t){if(X9(t)){if(t.touches&&t.touches.length){const{clientX:e,clientY:n}=t.touches[0];return{x:e,y:n}}else if(t.changedTouches&&t.changedTouches.length){const{clientX:e,clientY:n}=t.changedTouches[0];return{x:e,y:n}}}return Y9(t)?{x:t.clientX,y:t.clientY}:null}const Hu=Object.freeze({Translate:{toString(t){if(!t)return;const{x:e,y:n}=t;return"translate3d("+(e?Math.round(e):0)+"px, "+(n?Math.round(n):0)+"px, 0)"}},Scale:{toString(t){if(!t)return;const{scaleX:e,scaleY:n}=t;return"scaleX("+e+") scaleY("+n+")"}},Transform:{toString(t){if(!!t)return[Hu.Translate.toString(t),Hu.Scale.toString(t)].join(" ")}},Transition:{toString(t){let{property:e,duration:n,easing:r}=t;return e+" "+n+"ms "+r}}}),sT="a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]";function J9(t){return t.matches(sT)?t:t.querySelector(sT)}const Z9={display:"none"};function e3(t){let{id:e,value:n}=t;return M("div",{id:e,style:Z9,children:n})}const t3={position:"fixed",width:1,height:1,margin:-1,border:0,padding:0,overflow:"hidden",clip:"rect(0 0 0 0)",clipPath:"inset(100%)",whiteSpace:"nowrap"};function n3(t){let{id:e,announcement:n}=t;return M("div",{id:e,style:t3,role:"status","aria-live":"assertive","aria-atomic":!0,children:n})}function r3(){const[t,e]=S.exports.useState("");return{announce:S.exports.useCallback(r=>{r!=null&&e(r)},[]),announcement:t}}const Xk=S.exports.createContext(null);function i3(t){const e=S.exports.useContext(Xk);S.exports.useEffect(()=>{if(!e)throw new Error("useDndMonitor must be used within a children of <DndContext>");return e(t)},[t,e])}function s3(){const[t]=S.exports.useState(()=>new Set),e=S.exports.useCallback(r=>(t.add(r),()=>t.delete(r)),[t]);return[S.exports.useCallback(r=>{let{type:i,event:s}=r;t.forEach(o=>{var a;return(a=o[i])==null?void 0:a.call(o,s)})},[t]),e]}const o3={draggable:`
    To pick up a draggable item, press the space bar.
    While dragging, use the arrow keys to move the item.
    Press space again to drop the item in its new position, or press escape to cancel.
  `},a3={onDragStart(t){let{active:e}=t;return"Picked up draggable item "+e.id+"."},onDragOver(t){let{active:e,over:n}=t;return n?"Draggable item "+e.id+" was moved over droppable area "+n.id+".":"Draggable item "+e.id+" is no longer over a droppable area."},onDragEnd(t){let{active:e,over:n}=t;return n?"Draggable item "+e.id+" was dropped over droppable area "+n.id:"Draggable item "+e.id+" was dropped."},onDragCancel(t){let{active:e}=t;return"Dragging was cancelled. Draggable item "+e.id+" was dropped."}};function l3(t){let{announcements:e=a3,container:n,hiddenTextDescribedById:r,screenReaderInstructions:i=o3}=t;const{announce:s,announcement:o}=r3(),a=xc("DndLiveRegion"),[l,u]=S.exports.useState(!1);if(S.exports.useEffect(()=>{u(!0)},[]),i3(S.exports.useMemo(()=>({onDragStart(d){let{active:h}=d;s(e.onDragStart({active:h}))},onDragMove(d){let{active:h,over:f}=d;e.onDragMove&&s(e.onDragMove({active:h,over:f}))},onDragOver(d){let{active:h,over:f}=d;s(e.onDragOver({active:h,over:f}))},onDragEnd(d){let{active:h,over:f}=d;s(e.onDragEnd({active:h,over:f}))},onDragCancel(d){let{active:h,over:f}=d;s(e.onDragCancel({active:h,over:f}))}}),[s,e])),!l)return null;const c=ne(NR,{children:[M(e3,{id:r,value:i.draggable}),M(n3,{id:a,announcement:o})]});return n?hi.exports.createPortal(c,n):c}var Ze;(function(t){t.DragStart="dragStart",t.DragMove="dragMove",t.DragEnd="dragEnd",t.DragCancel="dragCancel",t.DragOver="dragOver",t.RegisterDroppable="registerDroppable",t.SetDroppableDisabled="setDroppableDisabled",t.UnregisterDroppable="unregisterDroppable"})(Ze||(Ze={}));function Bh(){}function oT(t,e){return S.exports.useMemo(()=>({sensor:t,options:e!=null?e:{}}),[t,e])}function u3(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return S.exports.useMemo(()=>[...e].filter(r=>r!=null),[...e])}const Kn=Object.freeze({x:0,y:0});function Jk(t,e){return Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2))}function Zk(t,e){let{data:{value:n}}=t,{data:{value:r}}=e;return n-r}function c3(t,e){let{data:{value:n}}=t,{data:{value:r}}=e;return r-n}function aT(t){let{left:e,top:n,height:r,width:i}=t;return[{x:e,y:n},{x:e+i,y:n},{x:e,y:n+r},{x:e+i,y:n+r}]}function eb(t,e){if(!t||t.length===0)return null;const[n]=t;return e?n[e]:n}function lT(t,e,n){return e===void 0&&(e=t.left),n===void 0&&(n=t.top),{x:e+t.width*.5,y:n+t.height*.5}}const d3=t=>{let{collisionRect:e,droppableRects:n,droppableContainers:r}=t;const i=lT(e,e.left,e.top),s=[];for(const o of r){const{id:a}=o,l=n.get(a);if(l){const u=Jk(lT(l),i);s.push({id:a,data:{droppableContainer:o,value:u}})}}return s.sort(Zk)},h3=t=>{let{collisionRect:e,droppableRects:n,droppableContainers:r}=t;const i=aT(e),s=[];for(const o of r){const{id:a}=o,l=n.get(a);if(l){const u=aT(l),c=i.reduce((h,f,v)=>h+Jk(u[v],f),0),d=Number((c/4).toFixed(4));s.push({id:a,data:{droppableContainer:o,value:d}})}}return s.sort(Zk)};function f3(t,e){const n=Math.max(e.top,t.top),r=Math.max(e.left,t.left),i=Math.min(e.left+e.width,t.left+t.width),s=Math.min(e.top+e.height,t.top+t.height),o=i-r,a=s-n;if(r<i&&n<s){const l=e.width*e.height,u=t.width*t.height,c=o*a,d=c/(l+u-c);return Number(d.toFixed(4))}return 0}const p3=t=>{let{collisionRect:e,droppableRects:n,droppableContainers:r}=t;const i=[];for(const s of r){const{id:o}=s,a=n.get(o);if(a){const l=f3(a,e);l>0&&i.push({id:o,data:{droppableContainer:s,value:l}})}}return i.sort(c3)};function m3(t,e,n){return{...t,scaleX:e&&n?e.width/n.width:1,scaleY:e&&n?e.height/n.height:1}}function tb(t,e){return t&&e?{x:t.left-e.left,y:t.top-e.top}:Kn}function g3(t){return function(n){for(var r=arguments.length,i=new Array(r>1?r-1:0),s=1;s<r;s++)i[s-1]=arguments[s];return i.reduce((o,a)=>({...o,top:o.top+t*a.y,bottom:o.bottom+t*a.y,left:o.left+t*a.x,right:o.right+t*a.x}),{...n})}}const _3=g3(1);function y3(t){if(t.startsWith("matrix3d(")){const e=t.slice(9,-1).split(/, /);return{x:+e[12],y:+e[13],scaleX:+e[0],scaleY:+e[5]}}else if(t.startsWith("matrix(")){const e=t.slice(7,-1).split(/, /);return{x:+e[4],y:+e[5],scaleX:+e[0],scaleY:+e[3]}}return null}function v3(t,e,n){const r=y3(e);if(!r)return t;const{scaleX:i,scaleY:s,x:o,y:a}=r,l=t.left-o-(1-i)*parseFloat(n),u=t.top-a-(1-s)*parseFloat(n.slice(n.indexOf(" ")+1)),c=i?t.width/i:t.width,d=s?t.height/s:t.height;return{width:c,height:d,top:u,right:l+c,bottom:u+d,left:l}}const w3={ignoreTransform:!1};function qa(t,e){e===void 0&&(e=w3);let n=t.getBoundingClientRect();if(e.ignoreTransform){const{getComputedStyle:u}=sn(t),{transform:c,transformOrigin:d}=u(t);c&&(n=v3(n,c,d))}const{top:r,left:i,width:s,height:o,bottom:a,right:l}=n;return{top:r,left:i,width:s,height:o,bottom:a,right:l}}function uT(t){return qa(t,{ignoreTransform:!0})}function I3(t){const e=t.innerWidth,n=t.innerHeight;return{top:0,left:0,right:e,bottom:n,width:e,height:n}}function E3(t,e){return e===void 0&&(e=sn(t).getComputedStyle(t)),e.position==="fixed"}function T3(t,e){e===void 0&&(e=sn(t).getComputedStyle(t));const n=/(auto|scroll|overlay)/;return["overflow","overflowX","overflowY"].some(i=>{const s=e[i];return typeof s=="string"?n.test(s):!1})}function cp(t,e){const n=[];function r(i){if(e!=null&&n.length>=e||!i)return n;if(_w(i)&&i.scrollingElement!=null&&!n.includes(i.scrollingElement))return n.push(i.scrollingElement),n;if(!kc(i)||K9(i)||n.includes(i))return n;const{getComputedStyle:s}=sn(i),o=s(i);return i!==t&&T3(i,o)&&n.push(i),E3(i,o)?n:r(i.parentNode)}return t?r(t):n}function nb(t){const[e]=cp(t,1);return e!=null?e:null}function ym(t){return!up||!t?null:za(t)?t:gw(t)?_w(t)||t===ja(t).scrollingElement?window:kc(t)?t:null:null}function rb(t){return za(t)?t.scrollX:t.scrollLeft}function ib(t){return za(t)?t.scrollY:t.scrollTop}function p_(t){return{x:rb(t),y:ib(t)}}var ot;(function(t){t[t.Forward=1]="Forward",t[t.Backward=-1]="Backward"})(ot||(ot={}));function sb(t){return!up||!t?!1:t===document.scrollingElement}function ob(t){const e={x:0,y:0},n=sb(t)?{height:window.innerHeight,width:window.innerWidth}:{height:t.clientHeight,width:t.clientWidth},r={x:t.scrollWidth-n.width,y:t.scrollHeight-n.height},i=t.scrollTop<=e.y,s=t.scrollLeft<=e.x,o=t.scrollTop>=r.y,a=t.scrollLeft>=r.x;return{isTop:i,isLeft:s,isBottom:o,isRight:a,maxScroll:r,minScroll:e}}const S3={x:.2,y:.2};function R3(t,e,n,r,i){let{top:s,left:o,right:a,bottom:l}=n;r===void 0&&(r=10),i===void 0&&(i=S3);const{isTop:u,isBottom:c,isLeft:d,isRight:h}=ob(t),f={x:0,y:0},v={x:0,y:0},y={height:e.height*i.y,width:e.width*i.x};return!u&&s<=e.top+y.height?(f.y=ot.Backward,v.y=r*Math.abs((e.top+y.height-s)/y.height)):!c&&l>=e.bottom-y.height&&(f.y=ot.Forward,v.y=r*Math.abs((e.bottom-y.height-l)/y.height)),!h&&a>=e.right-y.width?(f.x=ot.Forward,v.x=r*Math.abs((e.right-y.width-a)/y.width)):!d&&o<=e.left+y.width&&(f.x=ot.Backward,v.x=r*Math.abs((e.left+y.width-o)/y.width)),{direction:f,speed:v}}function A3(t){if(t===document.scrollingElement){const{innerWidth:s,innerHeight:o}=window;return{top:0,left:0,right:s,bottom:o,width:s,height:o}}const{top:e,left:n,right:r,bottom:i}=t.getBoundingClientRect();return{top:e,left:n,right:r,bottom:i,width:t.clientWidth,height:t.clientHeight}}function ab(t){return t.reduce((e,n)=>Yo(e,p_(n)),Kn)}function P3(t){return t.reduce((e,n)=>e+rb(n),0)}function C3(t){return t.reduce((e,n)=>e+ib(n),0)}function k3(t,e){if(e===void 0&&(e=qa),!t)return;const{top:n,left:r,bottom:i,right:s}=e(t);!nb(t)||(i<=0||s<=0||n>=window.innerHeight||r>=window.innerWidth)&&t.scrollIntoView({block:"center",inline:"center"})}const b3=[["x",["left","right"],P3],["y",["top","bottom"],C3]];class ww{constructor(e,n){this.rect=void 0,this.width=void 0,this.height=void 0,this.top=void 0,this.bottom=void 0,this.right=void 0,this.left=void 0;const r=cp(n),i=ab(r);this.rect={...e},this.width=e.width,this.height=e.height;for(const[s,o,a]of b3)for(const l of o)Object.defineProperty(this,l,{get:()=>{const u=a(r),c=i[s]-u;return this.rect[l]+c},enumerable:!0});Object.defineProperty(this,"rect",{enumerable:!1})}}class Kl{constructor(e){this.target=void 0,this.listeners=[],this.removeAll=()=>{this.listeners.forEach(n=>{var r;return(r=this.target)==null?void 0:r.removeEventListener(...n)})},this.target=e}add(e,n,r){var i;(i=this.target)==null||i.addEventListener(e,n,r),this.listeners.push([e,n,r])}}function x3(t){const{EventTarget:e}=sn(t);return t instanceof e?t:ja(t)}function vm(t,e){const n=Math.abs(t.x),r=Math.abs(t.y);return typeof e=="number"?Math.sqrt(n**2+r**2)>e:"x"in e&&"y"in e?n>e.x&&r>e.y:"x"in e?n>e.x:"y"in e?r>e.y:!1}var wn;(function(t){t.Click="click",t.DragStart="dragstart",t.Keydown="keydown",t.ContextMenu="contextmenu",t.Resize="resize",t.SelectionChange="selectionchange",t.VisibilityChange="visibilitychange"})(wn||(wn={}));function cT(t){t.preventDefault()}function D3(t){t.stopPropagation()}var ce;(function(t){t.Space="Space",t.Down="ArrowDown",t.Right="ArrowRight",t.Left="ArrowLeft",t.Up="ArrowUp",t.Esc="Escape",t.Enter="Enter"})(ce||(ce={}));const lb={start:[ce.Space,ce.Enter],cancel:[ce.Esc],end:[ce.Space,ce.Enter]},N3=(t,e)=>{let{currentCoordinates:n}=e;switch(t.code){case ce.Right:return{...n,x:n.x+25};case ce.Left:return{...n,x:n.x-25};case ce.Down:return{...n,y:n.y+25};case ce.Up:return{...n,y:n.y-25}}};class Iw{constructor(e){this.props=void 0,this.autoScrollEnabled=!1,this.referenceCoordinates=void 0,this.listeners=void 0,this.windowListeners=void 0,this.props=e;const{event:{target:n}}=e;this.props=e,this.listeners=new Kl(ja(n)),this.windowListeners=new Kl(sn(n)),this.handleKeyDown=this.handleKeyDown.bind(this),this.handleCancel=this.handleCancel.bind(this),this.attach()}attach(){this.handleStart(),this.windowListeners.add(wn.Resize,this.handleCancel),this.windowListeners.add(wn.VisibilityChange,this.handleCancel),setTimeout(()=>this.listeners.add(wn.Keydown,this.handleKeyDown))}handleStart(){const{activeNode:e,onStart:n}=this.props,r=e.node.current;r&&k3(r),n(Kn)}handleKeyDown(e){if(vw(e)){const{active:n,context:r,options:i}=this.props,{keyboardCodes:s=lb,coordinateGetter:o=N3,scrollBehavior:a="smooth"}=i,{code:l}=e;if(s.end.includes(l)){this.handleEnd(e);return}if(s.cancel.includes(l)){this.handleCancel(e);return}const{collisionRect:u}=r.current,c=u?{x:u.left,y:u.top}:Kn;this.referenceCoordinates||(this.referenceCoordinates=c);const d=o(e,{active:n,context:r.current,currentCoordinates:c});if(d){const h=Gu(d,c),f={x:0,y:0},{scrollableAncestors:v}=r.current;for(const y of v){const E=e.code,{isTop:g,isRight:p,isLeft:m,isBottom:I,maxScroll:A,minScroll:C}=ob(y),_=A3(y),w={x:Math.min(E===ce.Right?_.right-_.width/2:_.right,Math.max(E===ce.Right?_.left:_.left+_.width/2,d.x)),y:Math.min(E===ce.Down?_.bottom-_.height/2:_.bottom,Math.max(E===ce.Down?_.top:_.top+_.height/2,d.y))},R=E===ce.Right&&!p||E===ce.Left&&!m,k=E===ce.Down&&!I||E===ce.Up&&!g;if(R&&w.x!==d.x){const O=y.scrollLeft+h.x,q=E===ce.Right&&O<=A.x||E===ce.Left&&O>=C.x;if(q&&!h.y){y.scrollTo({left:O,behavior:a});return}q?f.x=y.scrollLeft-O:f.x=E===ce.Right?y.scrollLeft-A.x:y.scrollLeft-C.x,f.x&&y.scrollBy({left:-f.x,behavior:a});break}else if(k&&w.y!==d.y){const O=y.scrollTop+h.y,q=E===ce.Down&&O<=A.y||E===ce.Up&&O>=C.y;if(q&&!h.x){y.scrollTo({top:O,behavior:a});return}q?f.y=y.scrollTop-O:f.y=E===ce.Down?y.scrollTop-A.y:y.scrollTop-C.y,f.y&&y.scrollBy({top:-f.y,behavior:a});break}}this.handleMove(e,Yo(Gu(d,this.referenceCoordinates),f))}}}handleMove(e,n){const{onMove:r}=this.props;e.preventDefault(),r(n)}handleEnd(e){const{onEnd:n}=this.props;e.preventDefault(),this.detach(),n()}handleCancel(e){const{onCancel:n}=this.props;e.preventDefault(),this.detach(),n()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll()}}Iw.activators=[{eventName:"onKeyDown",handler:(t,e,n)=>{let{keyboardCodes:r=lb,onActivation:i}=e,{active:s}=n;const{code:o}=t.nativeEvent;if(r.start.includes(o)){const a=s.activatorNode.current;return a&&t.target!==a?!1:(t.preventDefault(),i==null||i({event:t.nativeEvent}),!0)}return!1}}];function dT(t){return Boolean(t&&"distance"in t)}function hT(t){return Boolean(t&&"delay"in t)}class Ew{constructor(e,n,r){var i;r===void 0&&(r=x3(e.event.target)),this.props=void 0,this.events=void 0,this.autoScrollEnabled=!0,this.document=void 0,this.activated=!1,this.initialCoordinates=void 0,this.timeoutId=null,this.listeners=void 0,this.documentListeners=void 0,this.windowListeners=void 0,this.props=e,this.events=n;const{event:s}=e,{target:o}=s;this.props=e,this.events=n,this.document=ja(o),this.documentListeners=new Kl(this.document),this.listeners=new Kl(r),this.windowListeners=new Kl(sn(o)),this.initialCoordinates=(i=f_(s))!=null?i:Kn,this.handleStart=this.handleStart.bind(this),this.handleMove=this.handleMove.bind(this),this.handleEnd=this.handleEnd.bind(this),this.handleCancel=this.handleCancel.bind(this),this.handleKeydown=this.handleKeydown.bind(this),this.removeTextSelection=this.removeTextSelection.bind(this),this.attach()}attach(){const{events:e,props:{options:{activationConstraint:n}}}=this;if(this.listeners.add(e.move.name,this.handleMove,{passive:!1}),this.listeners.add(e.end.name,this.handleEnd),this.windowListeners.add(wn.Resize,this.handleCancel),this.windowListeners.add(wn.DragStart,cT),this.windowListeners.add(wn.VisibilityChange,this.handleCancel),this.windowListeners.add(wn.ContextMenu,cT),this.documentListeners.add(wn.Keydown,this.handleKeydown),n){if(dT(n))return;if(hT(n)){this.timeoutId=setTimeout(this.handleStart,n.delay);return}}this.handleStart()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll(),setTimeout(this.documentListeners.removeAll,50),this.timeoutId!==null&&(clearTimeout(this.timeoutId),this.timeoutId=null)}handleStart(){const{initialCoordinates:e}=this,{onStart:n}=this.props;e&&(this.activated=!0,this.documentListeners.add(wn.Click,D3,{capture:!0}),this.removeTextSelection(),this.documentListeners.add(wn.SelectionChange,this.removeTextSelection),n(e))}handleMove(e){var n;const{activated:r,initialCoordinates:i,props:s}=this,{onMove:o,options:{activationConstraint:a}}=s;if(!i)return;const l=(n=f_(e))!=null?n:Kn,u=Gu(i,l);if(!r&&a){if(hT(a))return vm(u,a.tolerance)?this.handleCancel():void 0;if(dT(a))return a.tolerance!=null&&vm(u,a.tolerance)?this.handleCancel():vm(u,a.distance)?this.handleStart():void 0}e.cancelable&&e.preventDefault(),o(l)}handleEnd(){const{onEnd:e}=this.props;this.detach(),e()}handleCancel(){const{onCancel:e}=this.props;this.detach(),e()}handleKeydown(e){e.code===ce.Esc&&this.handleCancel()}removeTextSelection(){var e;(e=this.document.getSelection())==null||e.removeAllRanges()}}const O3={move:{name:"pointermove"},end:{name:"pointerup"}};class Tw extends Ew{constructor(e){const{event:n}=e,r=ja(n.target);super(e,O3,r)}}Tw.activators=[{eventName:"onPointerDown",handler:(t,e)=>{let{nativeEvent:n}=t,{onActivation:r}=e;return!n.isPrimary||n.button!==0?!1:(r==null||r({event:n}),!0)}}];const V3={move:{name:"mousemove"},end:{name:"mouseup"}};var m_;(function(t){t[t.RightClick=2]="RightClick"})(m_||(m_={}));class L3 extends Ew{constructor(e){super(e,V3,ja(e.event.target))}}L3.activators=[{eventName:"onMouseDown",handler:(t,e)=>{let{nativeEvent:n}=t,{onActivation:r}=e;return n.button===m_.RightClick?!1:(r==null||r({event:n}),!0)}}];const wm={move:{name:"touchmove"},end:{name:"touchend"}};class M3 extends Ew{constructor(e){super(e,wm)}static setup(){return window.addEventListener(wm.move.name,e,{capture:!1,passive:!1}),function(){window.removeEventListener(wm.move.name,e)};function e(){}}}M3.activators=[{eventName:"onTouchStart",handler:(t,e)=>{let{nativeEvent:n}=t,{onActivation:r}=e;const{touches:i}=n;return i.length>1?!1:(r==null||r({event:n}),!0)}}];var Ql;(function(t){t[t.Pointer=0]="Pointer",t[t.DraggableRect=1]="DraggableRect"})(Ql||(Ql={}));var zh;(function(t){t[t.TreeOrder=0]="TreeOrder",t[t.ReversedTreeOrder=1]="ReversedTreeOrder"})(zh||(zh={}));function F3(t){let{acceleration:e,activator:n=Ql.Pointer,canScroll:r,draggingRect:i,enabled:s,interval:o=5,order:a=zh.TreeOrder,pointerCoordinates:l,scrollableAncestors:u,scrollableAncestorRects:c,delta:d,threshold:h}=t;const f=$3({delta:d,disabled:!s}),[v,y]=Q9(),E=S.exports.useRef({x:0,y:0}),g=S.exports.useRef({x:0,y:0}),p=S.exports.useMemo(()=>{switch(n){case Ql.Pointer:return l?{top:l.y,bottom:l.y,left:l.x,right:l.x}:null;case Ql.DraggableRect:return i}},[n,i,l]),m=S.exports.useRef(null),I=S.exports.useCallback(()=>{const C=m.current;if(!C)return;const _=E.current.x*g.current.x,w=E.current.y*g.current.y;C.scrollBy(_,w)},[]),A=S.exports.useMemo(()=>a===zh.TreeOrder?[...u].reverse():u,[a,u]);S.exports.useEffect(()=>{if(!s||!u.length||!p){y();return}for(const C of A){if((r==null?void 0:r(C))===!1)continue;const _=u.indexOf(C),w=c[_];if(!w)continue;const{direction:R,speed:k}=R3(C,w,p,e,h);for(const O of["x","y"])f[O][R[O]]||(k[O]=0,R[O]=0);if(k.x>0||k.y>0){y(),m.current=C,v(I,o),E.current=k,g.current=R;return}}E.current={x:0,y:0},g.current={x:0,y:0},y()},[e,I,r,y,s,o,JSON.stringify(p),JSON.stringify(f),v,u,A,c,JSON.stringify(h)])}const U3={x:{[ot.Backward]:!1,[ot.Forward]:!1},y:{[ot.Backward]:!1,[ot.Forward]:!1}};function $3(t){let{delta:e,disabled:n}=t;const r=h_(e);return bc(i=>{if(n||!r||!i)return U3;const s={x:Math.sign(e.x-r.x),y:Math.sign(e.y-r.y)};return{x:{[ot.Backward]:i.x[ot.Backward]||s.x===-1,[ot.Forward]:i.x[ot.Forward]||s.x===1},y:{[ot.Backward]:i.y[ot.Backward]||s.y===-1,[ot.Forward]:i.y[ot.Forward]||s.y===1}}},[n,e,r])}function B3(t,e){const n=e!==null?t.get(e):void 0,r=n?n.node.current:null;return bc(i=>{var s;return e===null?null:(s=r!=null?r:i)!=null?s:null},[r,e])}function z3(t,e){return S.exports.useMemo(()=>t.reduce((n,r)=>{const{sensor:i}=r,s=i.activators.map(o=>({eventName:o.eventName,handler:e(o.handler,r)}));return[...n,...s]},[]),[t,e])}var Ku;(function(t){t[t.Always=0]="Always",t[t.BeforeDragging=1]="BeforeDragging",t[t.WhileDragging=2]="WhileDragging"})(Ku||(Ku={}));var g_;(function(t){t.Optimized="optimized"})(g_||(g_={}));const fT=new Map;function j3(t,e){let{dragging:n,dependencies:r,config:i}=e;const[s,o]=S.exports.useState(null),{frequency:a,measure:l,strategy:u}=i,c=S.exports.useRef(t),d=E(),h=Wu(d),f=S.exports.useCallback(function(g){g===void 0&&(g=[]),!h.current&&o(p=>p===null?g:p.concat(g.filter(m=>!p.includes(m))))},[h]),v=S.exports.useRef(null),y=bc(g=>{if(d&&!n)return fT;if(!g||g===fT||c.current!==t||s!=null){const p=new Map;for(let m of t){if(!m)continue;if(s&&s.length>0&&!s.includes(m.id)&&m.rect.current){p.set(m.id,m.rect.current);continue}const I=m.node.current,A=I?new ww(l(I),I):null;m.rect.current=A,A&&p.set(m.id,A)}return p}return g},[t,s,n,d,l]);return S.exports.useEffect(()=>{c.current=t},[t]),S.exports.useEffect(()=>{d||f()},[n,d]),S.exports.useEffect(()=>{s&&s.length>0&&o(null)},[JSON.stringify(s)]),S.exports.useEffect(()=>{d||typeof a!="number"||v.current!==null||(v.current=setTimeout(()=>{f(),v.current=null},a))},[a,d,f,...r]),{droppableRects:y,measureDroppableContainers:f,measuringScheduled:s!=null};function E(){switch(u){case Ku.Always:return!1;case Ku.BeforeDragging:return n;default:return!n}}}function ub(t,e){return bc(n=>t?n||(typeof e=="function"?e(t):t):null,[e,t])}function q3(t,e){return ub(t,e)}function W3(t){let{callback:e,disabled:n}=t;const r=yw(e),i=S.exports.useMemo(()=>{if(n||typeof window=="undefined"||typeof window.MutationObserver=="undefined")return;const{MutationObserver:s}=window;return new s(r)},[r,n]);return S.exports.useEffect(()=>()=>i==null?void 0:i.disconnect(),[i]),i}function dp(t){let{callback:e,disabled:n}=t;const r=yw(e),i=S.exports.useMemo(()=>{if(n||typeof window=="undefined"||typeof window.ResizeObserver=="undefined")return;const{ResizeObserver:s}=window;return new s(r)},[n]);return S.exports.useEffect(()=>()=>i==null?void 0:i.disconnect(),[i]),i}function G3(t){return new ww(qa(t),t)}function pT(t,e,n){e===void 0&&(e=G3);const[r,i]=S.exports.useReducer(a,null),s=W3({callback(l){if(!!t)for(const u of l){const{type:c,target:d}=u;if(c==="childList"&&d instanceof HTMLElement&&d.contains(t)){i();break}}}}),o=dp({callback:i});return Hn(()=>{i(),t?(o==null||o.observe(t),s==null||s.observe(document.body,{childList:!0,subtree:!0})):(o==null||o.disconnect(),s==null||s.disconnect())},[t]),r;function a(l){if(!t)return null;if(t.isConnected===!1){var u;return(u=l!=null?l:n)!=null?u:null}const c=e(t);return JSON.stringify(l)===JSON.stringify(c)?l:c}}function H3(t){const e=ub(t);return tb(t,e)}const mT=[];function K3(t){const e=S.exports.useRef(t),n=bc(r=>t?r&&r!==mT&&t&&e.current&&t.parentNode===e.current.parentNode?r:cp(t):mT,[t]);return S.exports.useEffect(()=>{e.current=t},[t]),n}function Q3(t){const[e,n]=S.exports.useState(null),r=S.exports.useRef(t),i=S.exports.useCallback(s=>{const o=ym(s.target);!o||n(a=>a?(a.set(o,p_(o)),new Map(a)):null)},[]);return S.exports.useEffect(()=>{const s=r.current;if(t!==s){o(s);const a=t.map(l=>{const u=ym(l);return u?(u.addEventListener("scroll",i,{passive:!0}),[u,p_(u)]):null}).filter(l=>l!=null);n(a.length?new Map(a):null),r.current=t}return()=>{o(t),o(s)};function o(a){a.forEach(l=>{const u=ym(l);u==null||u.removeEventListener("scroll",i)})}},[i,t]),S.exports.useMemo(()=>t.length?e?Array.from(e.values()).reduce((s,o)=>Yo(s,o),Kn):ab(t):Kn,[t,e])}function gT(t,e){e===void 0&&(e=[]);const n=S.exports.useRef(null);return S.exports.useEffect(()=>{n.current=null},e),S.exports.useEffect(()=>{const r=t!==Kn;r&&!n.current&&(n.current=t),!r&&n.current&&(n.current=null)},[t]),n.current?Gu(t,n.current):Kn}function Y3(t){S.exports.useEffect(()=>{if(!up)return;const e=t.map(n=>{let{sensor:r}=n;return r.setup==null?void 0:r.setup()});return()=>{for(const n of e)n==null||n()}},t.map(e=>{let{sensor:n}=e;return n}))}function X3(t,e){return S.exports.useMemo(()=>t.reduce((n,r)=>{let{eventName:i,handler:s}=r;return n[i]=o=>{s(o,e)},n},{}),[t,e])}function cb(t){return S.exports.useMemo(()=>t?I3(t):null,[t])}const Im=[];function J3(t,e){e===void 0&&(e=qa);const[n]=t,r=cb(n?sn(n):null),[i,s]=S.exports.useReducer(a,Im),o=dp({callback:s});return t.length>0&&i===Im&&s(),Hn(()=>{t.length?t.forEach(l=>o==null?void 0:o.observe(l)):(o==null||o.disconnect(),s())},[t]),i;function a(){return t.length?t.map(l=>sb(l)?r:new ww(e(l),l)):Im}}function Z3(t){if(!t)return null;if(t.children.length>1)return t;const e=t.children[0];return kc(e)?e:t}function e6(t){let{measure:e}=t;const[n,r]=S.exports.useState(null),i=S.exports.useCallback(u=>{for(const{target:c}of u)if(kc(c)){r(d=>{const h=e(c);return d?{...d,width:h.width,height:h.height}:h});break}},[e]),s=dp({callback:i}),o=S.exports.useCallback(u=>{const c=Z3(u);s==null||s.disconnect(),c&&(s==null||s.observe(c)),r(c?e(c):null)},[e,s]),[a,l]=$h(o);return S.exports.useMemo(()=>({nodeRef:a,rect:n,setRef:l}),[n,a,l])}const t6=[{sensor:Tw,options:{}},{sensor:Iw,options:{}}],n6={current:{}},$d={draggable:{measure:uT},droppable:{measure:uT,strategy:Ku.WhileDragging,frequency:g_.Optimized},dragOverlay:{measure:qa}};class Yl extends Map{get(e){var n;return e!=null&&(n=super.get(e))!=null?n:void 0}toArray(){return Array.from(this.values())}getEnabled(){return this.toArray().filter(e=>{let{disabled:n}=e;return!n})}getNodeFor(e){var n,r;return(n=(r=this.get(e))==null?void 0:r.node.current)!=null?n:void 0}}const r6={activatorEvent:null,active:null,activeNode:null,activeNodeRect:null,collisions:null,containerNodeRect:null,draggableNodes:new Map,droppableRects:new Map,droppableContainers:new Yl,over:null,dragOverlay:{nodeRef:{current:null},rect:null,setRef:Bh},scrollableAncestors:[],scrollableAncestorRects:[],measuringConfiguration:$d,measureDroppableContainers:Bh,windowRect:null,measuringScheduled:!1},i6={activatorEvent:null,activators:[],active:null,activeNodeRect:null,ariaDescribedById:{draggable:""},dispatch:Bh,draggableNodes:new Map,over:null,measureDroppableContainers:Bh},hp=S.exports.createContext(i6),db=S.exports.createContext(r6);function s6(){return{draggable:{active:null,initialCoordinates:{x:0,y:0},nodes:new Map,translate:{x:0,y:0}},droppable:{containers:new Yl}}}function o6(t,e){switch(e.type){case Ze.DragStart:return{...t,draggable:{...t.draggable,initialCoordinates:e.initialCoordinates,active:e.active}};case Ze.DragMove:return t.draggable.active?{...t,draggable:{...t.draggable,translate:{x:e.coordinates.x-t.draggable.initialCoordinates.x,y:e.coordinates.y-t.draggable.initialCoordinates.y}}}:t;case Ze.DragEnd:case Ze.DragCancel:return{...t,draggable:{...t.draggable,active:null,initialCoordinates:{x:0,y:0},translate:{x:0,y:0}}};case Ze.RegisterDroppable:{const{element:n}=e,{id:r}=n,i=new Yl(t.droppable.containers);return i.set(r,n),{...t,droppable:{...t.droppable,containers:i}}}case Ze.SetDroppableDisabled:{const{id:n,key:r,disabled:i}=e,s=t.droppable.containers.get(n);if(!s||r!==s.key)return t;const o=new Yl(t.droppable.containers);return o.set(n,{...s,disabled:i}),{...t,droppable:{...t.droppable,containers:o}}}case Ze.UnregisterDroppable:{const{id:n,key:r}=e,i=t.droppable.containers.get(n);if(!i||r!==i.key)return t;const s=new Yl(t.droppable.containers);return s.delete(n),{...t,droppable:{...t.droppable,containers:s}}}default:return t}}function a6(t){let{disabled:e}=t;const{active:n,activatorEvent:r,draggableNodes:i}=S.exports.useContext(hp),s=h_(r),o=h_(n==null?void 0:n.id);return S.exports.useEffect(()=>{if(!e&&!r&&s&&o!=null){if(!vw(s)||document.activeElement===s.target)return;const a=i.get(o);if(!a)return;const{activatorNode:l,node:u}=a;if(!l.current&&!u.current)return;requestAnimationFrame(()=>{for(const c of[l.current,u.current]){if(!c)continue;const d=J9(c);if(d){d.focus();break}}})}},[r,e,i,o,s]),null}function l6(t,e){let{transform:n,...r}=e;return t!=null&&t.length?t.reduce((i,s)=>s({transform:i,...r}),n):n}function u6(t){return S.exports.useMemo(()=>({draggable:{...$d.draggable,...t==null?void 0:t.draggable},droppable:{...$d.droppable,...t==null?void 0:t.droppable},dragOverlay:{...$d.dragOverlay,...t==null?void 0:t.dragOverlay}}),[t==null?void 0:t.draggable,t==null?void 0:t.droppable,t==null?void 0:t.dragOverlay])}function c6(t){let{activeNode:e,measure:n,initialRect:r,config:i=!0}=t;const s=S.exports.useRef(!1),{x:o,y:a}=typeof i=="boolean"?{x:i,y:i}:i;Hn(()=>{if(!o&&!a||!e){s.current=!1;return}if(s.current||!r)return;const u=e==null?void 0:e.node.current;if(!u||u.isConnected===!1)return;const c=n(u),d=tb(c,r);if(o||(d.x=0),a||(d.y=0),s.current=!0,Math.abs(d.x)>0||Math.abs(d.y)>0){const h=nb(u);h&&h.scrollBy({top:d.y,left:d.x})}},[e,o,a,r,n])}const hb=S.exports.createContext({...Kn,scaleX:1,scaleY:1});var di;(function(t){t[t.Uninitialized=0]="Uninitialized",t[t.Initializing=1]="Initializing",t[t.Initialized=2]="Initialized"})(di||(di={}));const d6=S.exports.memo(function(e){var n,r,i,s;let{id:o,accessibility:a,autoScroll:l=!0,children:u,sensors:c=t6,collisionDetection:d=p3,measuring:h,modifiers:f,...v}=e;const y=S.exports.useReducer(o6,void 0,s6),[E,g]=y,[p,m]=s3(),[I,A]=S.exports.useState(di.Uninitialized),C=I===di.Initialized,{draggable:{active:_,nodes:w,translate:R},droppable:{containers:k}}=E,O=_?w.get(_):null,q=S.exports.useRef({initial:null,translated:null}),Y=S.exports.useMemo(()=>{var pt;return _!=null?{id:_,data:(pt=O==null?void 0:O.data)!=null?pt:n6,rect:q}:null},[_,O]),Pe=S.exports.useRef(null),[W,J]=S.exports.useState(null),[X,V]=S.exports.useState(null),H=Wu(v,Object.values(v)),K=xc("DndDescribedBy",o),le=S.exports.useMemo(()=>k.getEnabled(),[k]),re=u6(h),{droppableRects:Gt,measureDroppableContainers:Nt,measuringScheduled:Ir}=j3(le,{dragging:C,dependencies:[R.x,R.y],config:re.droppable}),We=B3(w,_),Er=S.exports.useMemo(()=>X?f_(X):null,[X]),ei=bb(),Tr=q3(We,re.draggable.measure);c6({activeNode:_?w.get(_):null,config:ei.layoutShiftCompensation,initialRect:Tr,measure:re.draggable.measure});const ge=pT(We,re.draggable.measure,Tr),Wa=pT(We?We.parentElement:null),Qn=S.exports.useRef({activatorEvent:null,active:null,activeNode:We,collisionRect:null,collisions:null,droppableRects:Gt,draggableNodes:w,draggingNode:null,draggingNodeRect:null,droppableContainers:k,over:null,scrollableAncestors:[],scrollAdjustedTranslate:null}),eo=k.getNodeFor((n=Qn.current.over)==null?void 0:n.id),Sr=e6({measure:re.dragOverlay.measure}),to=(r=Sr.nodeRef.current)!=null?r:We,no=C?(i=Sr.rect)!=null?i:ge:null,Aw=Boolean(Sr.nodeRef.current&&Sr.rect),Pw=H3(Aw?null:ge),fp=cb(to?sn(to):null),ti=K3(C?eo!=null?eo:We:null),Dc=J3(ti),Nc=l6(f,{transform:{x:R.x-Pw.x,y:R.y-Pw.y,scaleX:1,scaleY:1},activatorEvent:X,active:Y,activeNodeRect:ge,containerNodeRect:Wa,draggingNodeRect:no,over:Qn.current.over,overlayNodeRect:Sr.rect,scrollableAncestors:ti,scrollableAncestorRects:Dc,windowRect:fp}),Cw=Er?Yo(Er,R):null,kw=Q3(ti),Tb=gT(kw),Sb=gT(kw,[ge]),ro=Yo(Nc,Tb),io=no?_3(no,Nc):null,Ga=Y&&io?d({active:Y,collisionRect:io,droppableRects:Gt,droppableContainers:le,pointerCoordinates:Cw}):null,bw=eb(Ga,"id"),[ni,xw]=S.exports.useState(null),Rb=Aw?Nc:Yo(Nc,Sb),Ab=m3(Rb,(s=ni==null?void 0:ni.rect)!=null?s:null,ge),Dw=S.exports.useCallback((pt,on)=>{let{sensor:an,options:ri}=on;if(Pe.current==null)return;const vn=w.get(Pe.current);if(!vn)return;const On=pt.nativeEvent,Yn=new an({active:Pe.current,activeNode:vn,event:On,options:ri,context:Qn,onStart(Vn){const Ha=Pe.current;if(Ha==null)return;const Ka=w.get(Ha);if(!Ka)return;const{onDragStart:Oc}=H.current,Vc={active:{id:Ha,data:Ka.data,rect:q}};hi.exports.unstable_batchedUpdates(()=>{Oc==null||Oc(Vc),A(di.Initializing),g({type:Ze.DragStart,initialCoordinates:Vn,active:Ha}),p({type:"onDragStart",event:Vc})})},onMove(Vn){g({type:Ze.DragMove,coordinates:Vn})},onEnd:so(Ze.DragEnd),onCancel:so(Ze.DragCancel)});hi.exports.unstable_batchedUpdates(()=>{J(Yn),V(pt.nativeEvent)});function so(Vn){return async function(){const{active:Ka,collisions:Oc,over:Vc,scrollAdjustedTranslate:Ow}=Qn.current;let Qa=null;if(Ka&&Ow){const{cancelDrop:Ya}=H.current;Qa={activatorEvent:On,active:Ka,collisions:Oc,delta:Ow,over:Vc},Vn===Ze.DragEnd&&typeof Ya=="function"&&await Promise.resolve(Ya(Qa))&&(Vn=Ze.DragCancel)}Pe.current=null,hi.exports.unstable_batchedUpdates(()=>{g({type:Vn}),A(di.Uninitialized),xw(null),J(null),V(null);const Ya=Vn===Ze.DragEnd?"onDragEnd":"onDragCancel";if(Qa){const pp=H.current[Ya];pp==null||pp(Qa),p({type:Ya,event:Qa})}})}}},[w]),Pb=S.exports.useCallback((pt,on)=>(an,ri)=>{const vn=an.nativeEvent,On=w.get(ri);if(Pe.current!==null||!On||vn.dndKit||vn.defaultPrevented)return;const Yn={active:On};pt(an,on.options,Yn)===!0&&(vn.dndKit={capturedBy:on.sensor},Pe.current=ri,Dw(an,on))},[w,Dw]),Nw=z3(c,Pb);Y3(c),Hn(()=>{ge&&I===di.Initializing&&A(di.Initialized)},[ge,I]),S.exports.useEffect(()=>{const{onDragMove:pt}=H.current,{active:on,activatorEvent:an,collisions:ri,over:vn}=Qn.current;if(!on||!an)return;const On={active:on,activatorEvent:an,collisions:ri,delta:{x:ro.x,y:ro.y},over:vn};hi.exports.unstable_batchedUpdates(()=>{pt==null||pt(On),p({type:"onDragMove",event:On})})},[ro.x,ro.y]),S.exports.useEffect(()=>{const{active:pt,activatorEvent:on,collisions:an,droppableContainers:ri,scrollAdjustedTranslate:vn}=Qn.current;if(!pt||Pe.current==null||!on||!vn)return;const{onDragOver:On}=H.current,Yn=ri.get(bw),so=Yn&&Yn.rect.current?{id:Yn.id,rect:Yn.rect.current,data:Yn.data,disabled:Yn.disabled}:null,Vn={active:pt,activatorEvent:on,collisions:an,delta:{x:vn.x,y:vn.y},over:so};hi.exports.unstable_batchedUpdates(()=>{xw(so),On==null||On(Vn),p({type:"onDragOver",event:Vn})})},[bw]),Hn(()=>{Qn.current={activatorEvent:X,active:Y,activeNode:We,collisionRect:io,collisions:Ga,droppableRects:Gt,draggableNodes:w,draggingNode:to,draggingNodeRect:no,droppableContainers:k,over:ni,scrollableAncestors:ti,scrollAdjustedTranslate:ro},q.current={initial:no,translated:io}},[Y,We,Ga,io,w,to,no,Gt,k,ni,ti,ro]),F3({...ei,delta:R,draggingRect:io,pointerCoordinates:Cw,scrollableAncestors:ti,scrollableAncestorRects:Dc});const Cb=S.exports.useMemo(()=>({active:Y,activeNode:We,activeNodeRect:ge,activatorEvent:X,collisions:Ga,containerNodeRect:Wa,dragOverlay:Sr,draggableNodes:w,droppableContainers:k,droppableRects:Gt,over:ni,measureDroppableContainers:Nt,scrollableAncestors:ti,scrollableAncestorRects:Dc,measuringConfiguration:re,measuringScheduled:Ir,windowRect:fp}),[Y,We,ge,X,Ga,Wa,Sr,w,k,Gt,ni,Nt,ti,Dc,re,Ir,fp]),kb=S.exports.useMemo(()=>({activatorEvent:X,activators:Nw,active:Y,activeNodeRect:ge,ariaDescribedById:{draggable:K},dispatch:g,draggableNodes:w,over:ni,measureDroppableContainers:Nt}),[X,Nw,Y,ge,g,K,w,ni,Nt]);return ne(Xk.Provider,{value:m,children:[ne(hp.Provider,{value:kb,children:[M(db.Provider,{value:Cb,children:M(hb.Provider,{value:Ab,children:u})}),M(a6,{disabled:(a==null?void 0:a.restoreFocus)===!1})]}),M(l3,{...a,hiddenTextDescribedById:K})]});function bb(){const pt=(W==null?void 0:W.autoScrollEnabled)===!1,on=typeof l=="object"?l.enabled===!1:l===!1,an=C&&!pt&&!on;return typeof l=="object"?{...l,enabled:an}:{enabled:an}}}),h6=S.exports.createContext(null),_T="button",f6="Droppable";function p6(t){let{id:e,data:n,disabled:r=!1,attributes:i}=t;const s=xc(f6),{activators:o,activatorEvent:a,active:l,activeNodeRect:u,ariaDescribedById:c,draggableNodes:d,over:h}=S.exports.useContext(hp),{role:f=_T,roleDescription:v="draggable",tabIndex:y=0}=i!=null?i:{},E=(l==null?void 0:l.id)===e,g=S.exports.useContext(E?hb:h6),[p,m]=$h(),[I,A]=$h(),C=X3(o,e),_=Wu(n);Hn(()=>(d.set(e,{id:e,key:s,node:p,activatorNode:I,data:_}),()=>{const R=d.get(e);R&&R.key===s&&d.delete(e)}),[d,e]);const w=S.exports.useMemo(()=>({role:f,tabIndex:y,"aria-disabled":r,"aria-pressed":E&&f===_T?!0:void 0,"aria-roledescription":v,"aria-describedby":c.draggable}),[r,f,y,E,v,c.draggable]);return{active:l,activatorEvent:a,activeNodeRect:u,attributes:w,isDragging:E,listeners:r?void 0:C,node:p,over:h,setNodeRef:m,setActivatorNodeRef:A,transform:g}}function m6(){return S.exports.useContext(db)}const g6="Droppable",_6={timeout:25};function y6(t){let{data:e,disabled:n=!1,id:r,resizeObserverConfig:i}=t;const s=xc(g6),{active:o,dispatch:a,over:l,measureDroppableContainers:u}=S.exports.useContext(hp),c=S.exports.useRef({disabled:n}),d=S.exports.useRef(!1),h=S.exports.useRef(null),f=S.exports.useRef(null),{disabled:v,updateMeasurementsFor:y,timeout:E}={..._6,...i},g=Wu(y!=null?y:r),p=S.exports.useCallback(()=>{if(!d.current){d.current=!0;return}f.current!=null&&clearTimeout(f.current),f.current=setTimeout(()=>{u(Array.isArray(g.current)?g.current:[g.current]),f.current=null},E)},[E]),m=dp({callback:p,disabled:v||!o}),I=S.exports.useCallback((w,R)=>{!m||(R&&(m.unobserve(R),d.current=!1),w&&m.observe(w))},[m]),[A,C]=$h(I),_=Wu(e);return S.exports.useEffect(()=>{!m||!A.current||(m.disconnect(),d.current=!1,m.observe(A.current))},[A,m]),Hn(()=>(a({type:Ze.RegisterDroppable,element:{id:r,key:s,disabled:n,node:A,rect:h,data:_}}),()=>a({type:Ze.UnregisterDroppable,key:s,id:r})),[r]),S.exports.useEffect(()=>{n!==c.current.disabled&&(a({type:Ze.SetDroppableDisabled,id:r,key:s,disabled:n}),c.current.disabled=n)},[r,s,n,a]),{active:o,rect:h,isOver:(l==null?void 0:l.id)===r,node:A,over:l,setNodeRef:C}}function Sw(t,e,n){const r=t.slice();return r.splice(n<0?r.length+n:n,0,r.splice(e,1)[0]),r}function v6(t,e){return t.reduce((n,r,i)=>{const s=e.get(r);return s&&(n[i]=s),n},Array(t.length))}function md(t){return t!==null&&t>=0}function w6(t,e){if(t===e)return!0;if(t.length!==e.length)return!1;for(let n=0;n<t.length;n++)if(t[n]!==e[n])return!1;return!0}function I6(t){return typeof t=="boolean"?{draggable:t,droppable:t}:t}const fb=t=>{let{rects:e,activeIndex:n,overIndex:r,index:i}=t;const s=Sw(e,r,n),o=e[i],a=s[i];return!a||!o?null:{x:a.left-o.left,y:a.top-o.top,scaleX:a.width/o.width,scaleY:a.height/o.height}},gd={scaleX:1,scaleY:1},E6=t=>{var e;let{activeIndex:n,activeNodeRect:r,index:i,rects:s,overIndex:o}=t;const a=(e=s[n])!=null?e:r;if(!a)return null;if(i===n){const u=s[o];return u?{x:0,y:n<o?u.top+u.height-(a.top+a.height):u.top-a.top,...gd}:null}const l=T6(s,i,n);return i>n&&i<=o?{x:0,y:-a.height-l,...gd}:i<n&&i>=o?{x:0,y:a.height+l,...gd}:{x:0,y:0,...gd}};function T6(t,e,n){const r=t[e],i=t[e-1],s=t[e+1];return r?n<e?i?r.top-(i.top+i.height):s?s.top-(r.top+r.height):0:s?s.top-(r.top+r.height):i?r.top-(i.top+i.height):0:0}const pb="Sortable",mb=dr.createContext({activeIndex:-1,containerId:pb,disableTransforms:!1,items:[],overIndex:-1,useDragOverlay:!1,sortedRects:[],strategy:fb,disabled:{draggable:!1,droppable:!1}});function S6(t){let{children:e,id:n,items:r,strategy:i=fb,disabled:s=!1}=t;const{active:o,dragOverlay:a,droppableRects:l,over:u,measureDroppableContainers:c}=m6(),d=xc(pb,n),h=Boolean(a.rect!==null),f=S.exports.useMemo(()=>r.map(C=>typeof C=="object"&&"id"in C?C.id:C),[r]),v=o!=null,y=o?f.indexOf(o.id):-1,E=u?f.indexOf(u.id):-1,g=S.exports.useRef(f),p=!w6(f,g.current),m=E!==-1&&y===-1||p,I=I6(s);Hn(()=>{p&&v&&c(f)},[p,f,v,c]),S.exports.useEffect(()=>{g.current=f},[f]);const A=S.exports.useMemo(()=>({activeIndex:y,containerId:d,disabled:I,disableTransforms:m,items:f,overIndex:E,useDragOverlay:h,sortedRects:v6(f,l),strategy:i}),[y,d,I.draggable,I.droppable,m,f,E,l,h,i]);return M(mb.Provider,{value:A,children:e})}const R6=t=>{let{id:e,items:n,activeIndex:r,overIndex:i}=t;return Sw(n,r,i).indexOf(e)},A6=t=>{let{containerId:e,isSorting:n,wasDragging:r,index:i,items:s,newIndex:o,previousItems:a,previousContainerId:l,transition:u}=t;return!u||!r||a!==s&&i===o?!1:n?!0:o!==i&&e===l},P6={duration:200,easing:"ease"},gb="transform",C6=Hu.Transition.toString({property:gb,duration:0,easing:"linear"}),k6={roleDescription:"sortable"};function b6(t){let{disabled:e,index:n,node:r,rect:i}=t;const[s,o]=S.exports.useState(null),a=S.exports.useRef(n);return Hn(()=>{if(!e&&n!==a.current&&r.current){const l=i.current;if(l){const u=qa(r.current,{ignoreTransform:!0}),c={x:l.left-u.left,y:l.top-u.top,scaleX:l.width/u.width,scaleY:l.height/u.height};(c.x||c.y)&&o(c)}}n!==a.current&&(a.current=n)},[e,n,r,i]),S.exports.useEffect(()=>{s&&o(null)},[s]),s}function x6(t){let{animateLayoutChanges:e=A6,attributes:n,disabled:r,data:i,getNewIndex:s=R6,id:o,strategy:a,resizeObserverConfig:l,transition:u=P6}=t;const{items:c,containerId:d,activeIndex:h,disabled:f,disableTransforms:v,sortedRects:y,overIndex:E,useDragOverlay:g,strategy:p}=S.exports.useContext(mb),m=D6(r,f),I=c.indexOf(o),A=S.exports.useMemo(()=>({sortable:{containerId:d,index:I,items:c},...i}),[d,i,I,c]),C=S.exports.useMemo(()=>c.slice(c.indexOf(o)),[c,o]),{rect:_,node:w,isOver:R,setNodeRef:k}=y6({id:o,data:A,disabled:m.droppable,resizeObserverConfig:{updateMeasurementsFor:C,...l}}),{active:O,activatorEvent:q,activeNodeRect:Y,attributes:Pe,setNodeRef:W,listeners:J,isDragging:X,over:V,setActivatorNodeRef:H,transform:K}=p6({id:o,data:A,attributes:{...k6,...n},disabled:m.draggable}),le=H9(k,W),re=Boolean(O),Gt=re&&!v&&md(h)&&md(E),Nt=!g&&X,Ir=Nt&&Gt?K:null,We=a!=null?a:p,Er=Gt?Ir!=null?Ir:We({rects:y,activeNodeRect:Y,activeIndex:h,overIndex:E,index:I}):null,ei=md(h)&&md(E)?s({id:o,items:c,activeIndex:h,overIndex:E}):I,Tr=O==null?void 0:O.id,ge=S.exports.useRef({activeId:Tr,items:c,newIndex:ei,containerId:d}),Wa=c!==ge.current.items,Qn=e({active:O,containerId:d,isDragging:X,isSorting:re,id:o,index:I,items:c,newIndex:ge.current.newIndex,previousItems:ge.current.items,previousContainerId:ge.current.containerId,transition:u,wasDragging:ge.current.activeId!=null}),eo=b6({disabled:!Qn,index:I,node:w,rect:_});return S.exports.useEffect(()=>{re&&ge.current.newIndex!==ei&&(ge.current.newIndex=ei),d!==ge.current.containerId&&(ge.current.containerId=d),c!==ge.current.items&&(ge.current.items=c)},[re,ei,d,c]),S.exports.useEffect(()=>{if(Tr===ge.current.activeId)return;if(Tr&&!ge.current.activeId){ge.current.activeId=Tr;return}const to=setTimeout(()=>{ge.current.activeId=Tr},50);return()=>clearTimeout(to)},[Tr]),{active:O,activeIndex:h,attributes:Pe,data:A,rect:_,index:I,newIndex:ei,items:c,isOver:R,isSorting:re,isDragging:X,listeners:J,node:w,overIndex:E,over:V,setNodeRef:le,setActivatorNodeRef:H,setDroppableNodeRef:k,setDraggableNodeRef:W,transform:eo!=null?eo:Er,transition:Sr()};function Sr(){if(eo||Wa&&ge.current.newIndex===I)return C6;if(!(Nt&&!vw(q)||!u)&&(re||Qn))return Hu.Transition.toString({...u,property:gb})}}function D6(t,e){var n,r;return typeof t=="boolean"?{draggable:t,droppable:!1}:{draggable:(n=t==null?void 0:t.draggable)!=null?n:e.draggable,droppable:(r=t==null?void 0:t.droppable)!=null?r:e.droppable}}function jh(t){if(!t)return!1;const e=t.data.current;return!!(e&&"sortable"in e&&typeof e.sortable=="object"&&"containerId"in e.sortable&&"items"in e.sortable&&"index"in e.sortable)}const N6=[ce.Down,ce.Right,ce.Up,ce.Left],O6=(t,e)=>{let{context:{active:n,collisionRect:r,droppableRects:i,droppableContainers:s,over:o,scrollableAncestors:a}}=e;if(N6.includes(t.code)){if(t.preventDefault(),!n||!r)return;const l=[];s.getEnabled().forEach(d=>{if(!d||d!=null&&d.disabled)return;const h=i.get(d.id);if(!!h)switch(t.code){case ce.Down:r.top<h.top&&l.push(d);break;case ce.Up:r.top>h.top&&l.push(d);break;case ce.Left:r.left>h.left&&l.push(d);break;case ce.Right:r.left<h.left&&l.push(d);break}});const u=h3({active:n,collisionRect:r,droppableRects:i,droppableContainers:l,pointerCoordinates:null});let c=eb(u,"id");if(c===(o==null?void 0:o.id)&&u.length>1&&(c=u[1].id),c!=null){const d=s.get(n.id),h=s.get(c),f=h?i.get(h.id):null,v=h==null?void 0:h.node.current;if(v&&f&&d&&h){const E=cp(v).some((C,_)=>a[_]!==C),g=_b(d,h),p=V6(d,h),m=E||!g?{x:0,y:0}:{x:p?r.width-f.width:0,y:p?r.height-f.height:0},I={x:f.left,y:f.top};return m.x&&m.y?I:Gu(I,m)}}}};function _b(t,e){return!jh(t)||!jh(e)?!1:t.data.current.sortable.containerId===e.data.current.sortable.containerId}function V6(t,e){return!jh(t)||!jh(e)||!_b(t,e)?!1:t.data.current.sortable.index<e.data.current.sortable.index}const L6="_window_1ghap_1",M6="_folder_1ghap_25",F6="_expand_1ghap_61",U6="_link_1ghap_87",$6="_header_1ghap_139",B6="_crumbs_1ghap_169",z6="_crumb_1ghap_169",j6="_titleBar_1ghap_221",q6="_titleBtns_1ghap_235",W6="_icon_1ghap_273",G6="_outline_1ghap_287",H6="_opacity_1ghap_295",K6="_wide_1ghap_303";var Ht={window:L6,folder:M6,expand:F6,link:U6,header:$6,crumbs:B6,crumb:z6,titleBar:j6,titleBtns:q6,icon:W6,outline:G6,opacity:H6,wide:K6},yb={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},yT=dr.createContext&&dr.createContext(yb),bi=globalThis&&globalThis.__assign||function(){return bi=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t},bi.apply(this,arguments)},Q6=globalThis&&globalThis.__rest||function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n};function vb(t){return t&&t.map(function(e,n){return dr.createElement(e.tag,bi({key:n},e.attr),vb(e.child))})}function Wt(t){return function(e){return dr.createElement(Y6,bi({attr:bi({},t.attr)},e),vb(t.child))}}function Y6(t){var e=function(n){var r=t.attr,i=t.size,s=t.title,o=Q6(t,["attr","size","title"]),a=i||n.size||"1em",l;return n.className&&(l=n.className),t.className&&(l=(l?l+" ":"")+t.className),dr.createElement("svg",bi({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,o,{className:l,style:bi(bi({color:t.color||n.color},n.style),t.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),s&&dr.createElement("title",null,s),t.children)};return yT!==void 0?dr.createElement(yT.Consumer,null,function(n){return e(n)}):e(yb)}function X6(t){return Wt({tag:"svg",attr:{viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"desc",attr:{},child:[]},{tag:"path",attr:{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}},{tag:"path",attr:{d:"M18 15l-6 -6l-6 6h12",transform:"rotate(90 12 12)"}}]})(t)}function J6(t){return Wt({tag:"svg",attr:{viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"desc",attr:{},child:[]},{tag:"path",attr:{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}},{tag:"rect",attr:{x:"8",y:"8",width:"12",height:"12",rx:"2"}},{tag:"path",attr:{d:"M16 8v-2a2 2 0 0 0 -2 -2h-8a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h2"}}]})(t)}function vT(t){return Wt({tag:"svg",attr:{viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"desc",attr:{},child:[]},{tag:"path",attr:{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}},{tag:"path",attr:{d:"M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1"}},{tag:"path",attr:{d:"M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z"}},{tag:"path",attr:{d:"M16 5l3 3"}}]})(t)}function wT(t){return Wt({tag:"svg",attr:{viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"desc",attr:{},child:[]},{tag:"path",attr:{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}},{tag:"path",attr:{d:"M11 7h-5a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-5"}},{tag:"line",attr:{x1:"10",y1:"14",x2:"20",y2:"4"}},{tag:"polyline",attr:{points:"15 4 20 4 20 9"}}]})(t)}function Z6(t){return Wt({tag:"svg",attr:{viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"desc",attr:{},child:[]},{tag:"path",attr:{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}},{tag:"path",attr:{d:"M10 14a3.5 3.5 0 0 0 5 0l4 -4a3.5 3.5 0 0 0 -5 -5l-.5 .5"}},{tag:"path",attr:{d:"M14 10a3.5 3.5 0 0 0 -5 0l-4 4a3.5 3.5 0 0 0 5 5l.5 -.5"}}]})(t)}function ej(t){return Wt({tag:"svg",attr:{viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"desc",attr:{},child:[]},{tag:"path",attr:{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}},{tag:"line",attr:{x1:"4",y1:"7",x2:"20",y2:"7"}},{tag:"line",attr:{x1:"10",y1:"11",x2:"10",y2:"17"}},{tag:"line",attr:{x1:"14",y1:"11",x2:"14",y2:"17"}},{tag:"path",attr:{d:"M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"}},{tag:"path",attr:{d:"M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"}}]})(t)}function tj(t){return Wt({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"44",d:"M102 256h308m-308-80h308M102 336h308"}}]})(t)}function IT(t){return Wt({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"}},{tag:"path",attr:{d:"M11 18c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm-2-8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}}]})(t)}function wb(t){return Wt({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M572.694 292.093L500.27 416.248A63.997 63.997 0 0 1 444.989 448H45.025c-18.523 0-30.064-20.093-20.731-36.093l72.424-124.155A64 64 0 0 1 152 256h399.964c18.523 0 30.064 20.093 20.73 36.093zM152 224h328v-48c0-26.51-21.49-48-48-48H272l-64-64H48C21.49 64 0 85.49 0 112v278.046l69.077-118.418C86.214 242.25 117.989 224 152 224z"}}]})(t)}function Ib(t){return Wt({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M464,128H272L208,64H48A48,48,0,0,0,0,112V400a48,48,0,0,0,48,48H464a48,48,0,0,0,48-48V176A48,48,0,0,0,464,128ZM359.5,296a16,16,0,0,1-16,16h-64v64a16,16,0,0,1-16,16h-16a16,16,0,0,1-16-16V312h-64a16,16,0,0,1-16-16V280a16,16,0,0,1,16-16h64V200a16,16,0,0,1,16-16h16a16,16,0,0,1,16,16v64h64a16,16,0,0,1,16,16Z"}}]})(t)}function nj(t){return Wt({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M464 128H272l-64-64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V176c0-26.51-21.49-48-48-48z"}}]})(t)}function ET(t){const[e]=Q(UR),{attributes:n,listeners:r,setNodeRef:i,transform:s,transition:o}=x6({id:t.id,data:{parentId:t.parentId},disabled:!e}),a={transform:Hu.Transform.toString(s),transition:o};return M("div",{ref:i,style:a,...n,...r,children:t.children})}function rj({bookmarksCb:t}){const[,e]=Q(lf),[n]=Q(LR),[r]=Q(MR),[,i]=Q(ec),[,s]=Q(uf),[,o]=Q(ia),[,a]=Q(tc),[l,u]=Q(UR),[c,d]=Q($R),{id:h,title:f,children:v}=n,[y,E]=Q(hN),g=u3(oT(Tw),oT(Iw,{coordinateGetter:O6}));S.exports.useEffect(()=>{if(v!==void 0){const _=v.map(w=>w.id);E(_)}},[v]);function p(_,w,R){_.preventDefault(),_.stopPropagation(),i(!0),o(w),s(R),a({x:_.clientX,y:_.clientY})}function m(_){!l&&e(_)}function I(_,w,R){chrome.bookmarks.move(_,{index:w,parentId:R},()=>{console.log("moved bookmark: ",_," to index: ",w," in folder: ",R),t()})}function A(_,w,R,k){try{if(w>R){const O=w+1;I(_,O,k)}else I(_,w,k)}catch(O){console.log(O)}}if(v==null)return M("div",{children:"Loading..."});return ne("div",{className:Ht.window,children:[ne("div",{className:Ht.header,children:[M("div",{className:Ht.crumbs,children:r.map((_,w)=>ne("div",{className:Ht.crumb,children:[w!==r.length-1&&M(X6,{}),M("p",{onClick:()=>m(_.id),children:_.title},_.id)]}))}),ne("div",{className:Ht.titleBar,children:[ne("h2",{onContextMenu:_=>{p(_,h,!0)},children:[M(wb,{}),f]}),ne("div",{className:Ht.titleBtns,children:[ne("button",{onClick:()=>d(!c),children:[M(Ib,{size:"1rem"})," New Folder"]}),ne("button",{onClick:()=>u(!l),children:[M(tj,{size:"1.25rem"})," Reorder Items"]})]})]})]}),M(d6,{sensors:g,collisionDetection:d3,onDragEnd:C,children:M(S6,{items:y,strategy:E6,children:v&&y.map(_=>{const w=v.find(R=>R.id===_);if(w!=null)return w.children?M(ET,{id:_,children:M("div",{className:`${Ht.folder} ${l&&Ht.outline}`,children:ne("h3",{onContextMenu:k=>p(k,w.id,!0),onClick:()=>m(w.id),children:[ne("div",{className:`${Ht.icon} ${l&&Ht.wide}`,children:[l&&M(IT,{size:"1rem",color:"var(--clr-primary-hover)"}),M(nj,{size:".75rem"})]}),w.title]})})},_):M(ET,{id:_,parentId:w.parentId,children:M("div",{onContextMenu:k=>p(k,w.id,!1),className:`${Ht.link} ${l&&Ht.outline}`,children:ne("a",{href:!l&&w.url,target:"_blank",rel:"noopener noreferrer",children:[ne("div",{className:`${Ht.icon} ${l&&Ht.wide}`,children:[l&&M(IT,{size:"1rem",color:"var(--clr-primary-hover)"}),M(Z6,{})]}),w.title]})})},_)})})})]});function C(_){const{active:w,over:R}=_;if(w.id!==R.id){E(q=>{const Y=q.indexOf(w.id),Pe=q.indexOf(R.id);return Sw(q,Y,Pe)});const k=y.indexOf(R.id),O=y.indexOf(w.id);A(w.id,k,O,w.data.current.parentId)}}}function ij(t){return Wt({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"}}]})(t)}function sj(t){return Wt({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M715.8 493.5L335 165.1c-14.2-12.2-35-1.2-35 18.5v656.8c0 19.7 20.8 30.7 35 18.5l380.8-328.4c10.9-9.4 10.9-27.6 0-37z"}}]})(t)}function oj(t){return Wt({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"m10 15.586-3.293-3.293-1.414 1.414L10 18.414l9.707-9.707-1.414-1.414z"}}]})(t)}const aj="_child_zvdhr_1",lj="_sidebar_zvdhr_9",uj="_logo_zvdhr_19",cj="_list_zvdhr_45",dj="_folder_zvdhr_65",hj="_title_zvdhr_97",fj="_caret_zvdhr_109",pj="_rename_zvdhr_131";var vs={child:aj,sidebar:lj,logo:uj,list:cj,folder:dj,title:hj,caret:fj,rename:pj};function Eb({bookmark:t,onRename:e}){const n=S.exports.useMemo(()=>t.id==="1"?ye(!0):ye(!1),[t.id]),r=S.exports.useMemo(()=>ye(t.title),[t.title]),[i,s]=Q(n),[,o]=Q(lf),[a]=Q(ia),[,l]=Q(ec),[,u]=Q(ia),[,c]=Q(tc),[d,h]=Q(FR),[f,v]=Q(r),[,y]=Q(uf),{id:E,title:g,children:p}=t,m=S.exports.useRef(null);S.exports.useEffect(()=>{m.current&&m.current.focus()},[d]),wl(m,()=>h(!1));function I(R){R.stopPropagation(),o(E)}function A(R){R.stopPropagation(),s(!i)}function C(R){R.preventDefault(),R.stopPropagation(),y(!0),l(!0),u(R.currentTarget.id),c({x:R.clientX,y:R.clientY})}function _(R){R.preventDefault(),console.log(f),e(f),h(!1)}const w=d&&a===E;return ne("div",{className:vs.folder,children:[ne("div",{id:E,onContextMenu:C,onClick:w?void 0:I,className:vs.title,children:[t.hasFolders&&M("div",{children:M("div",{onClick:A,className:vs.caret,children:i?M(ij,{}):M(sj,{})})}),w?ne("form",{ref:m,onSubmit:_,className:vs.rename,children:[M("input",{autoFocus:!0,onChange:R=>v(R.target.value),value:f,type:"text"}),M("button",{onClick:_,type:"submit",children:M(oj,{size:"2rem"})})]}):M("h2",{children:g})]}),i&&p.map(R=>{if(R.children)return M(Eb,{onRename:e,bookmark:R},R.id)})]})}function mj({onRename:t}){const[e]=Q(VR);return ne("div",{className:vs.sidebar,children:[M("div",{className:vs.logo,children:M("h1",{children:"Bookger"})}),M("div",{className:vs.list,children:e.map(n=>{if(n.children)return M(Eb,{onRename:t,bookmark:n},n.id)})})]})}const gj="_container_cyo60_1",_j="_wrapper_cyo60_13",yj="_rule_cyo60_55",vj="_edit_cyo60_63";var mo={container:gj,wrapper:_j,rule:yj,edit:vj};function wj(t){return Wt({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{fillRule:"nonzero",d:"M17 13a4 4 0 1 1-4 4h-2a4 4 0 1 1-.535-2h3.07A3.998 3.998 0 0 1 17 13zM7 15a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm10 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zM16 3a4 4 0 0 1 4 4v3h2v2H2v-2h2V7a4 4 0 0 1 4-4h8zm0 2H8c-1.054 0-2 .95-2 2v3h12V7c0-1.054-.95-2-2-2z"}}]}]})(t)}const Ij=ye({x:0,y:0}),Ej=S.exports.forwardRef(function({onEdit:e},n){const[r]=Q(tc),[,i]=Q(FR),[s,o]=Q(dy),[,a]=Q(lf),[l]=Q(ia),[,u]=Q(ec),[c]=Q(uf),[d,h]=Q(fN),[f,v]=Q(pN),[,y]=Q(zR),[E,g]=Q(Ij);S.exports.useEffect(()=>{h(!1),y(!1)},[]),S.exports.useEffect(()=>{chrome.bookmarks.get(l,w=>{w[0]&&v(w[0])})},[]),S.exports.useLayoutEffect(()=>{const{x:w,y:R}=r,{width:k,height:O}=n.current.getBoundingClientRect(),{innerWidth:q,innerHeight:Y}=window,Pe=w+k>q?q-k:w,W=R+O>Y?Y-O:R;g({x:Pe,y:W})},[]);function p(){o(!0)}function m(){i(!0),u(!1)}function I(w){w.preventDefault(),e({title:f.title,url:f.url})}function A(){navigator.clipboard.writeText(f.url),u(!1)}function C(w){chrome.bookmarks.get(l,R=>{R[0].url&&(w=="tab"?chrome.tabs.create({url:R[0].url,active:!1}):w=="window"?chrome.windows.create({url:R[0].url,focused:!0}):w=="incognito"&&chrome.windows.create({url:R[0].url,focused:!0,incognito:!0})),u(!1)})}const _=s?"none":"block";return M("div",{ref:n,style:{top:E.y,left:E.x},className:mo.wrapper,children:M("div",{style:{display:_},className:mo.container,children:d?M("div",{className:mo.edit,children:ne("form",{children:[ne("div",{children:[M("label",{htmlFor:"title",children:"Title"}),M("input",{type:"text",name:"title",id:"title",value:f.title,onChange:w=>v({...f,title:w.target.value})})]}),ne("div",{children:[M("label",{htmlFor:"url",children:"URL"}),M("input",{type:"url",name:"url",id:"url",value:f.url,onChange:w=>v({...f,url:w.target.value}),pattern:"https://.*"})]}),M("button",{onClick:I,children:"Done"})]})}):ne("div",{children:[c?ne("span",{onClick:m,children:[M(vT,{})," Rename"]}):ne("span",{onClick:()=>h(!0),children:[M(vT,{})," Edit info"]}),ne("span",{onClick:p,children:[M(ej,{})," Delete"]}),M("span",{className:mo.rule}),c?ne("span",{onClick:()=>a(l),children:[M(wb,{})," Explore"]}):ne(NR,{children:[M("span",{className:mo.rule}),ne("span",{onClick:()=>C("tab"),children:[M(wT,{})," Open in new tab"]}),ne("span",{onClick:()=>C("window"),children:[M(wT,{})," Open in new window"]}),ne("span",{onClick:()=>C("incognito"),children:[M(wj,{})," Open incognito"]}),M("span",{className:mo.rule}),ne("span",{onClick:A,children:[M(J6,{})," Copy URL"]})]})]})})})}),Tj="_wrapper_1kojm_1";var Sj={wrapper:Tj};const Rj=S.exports.forwardRef(function(e,n){const[,r]=Q(BR);return M("div",{ref:n,className:Sj.wrapper,children:ne("form",{children:[ne("h3",{children:[M(Ib,{})," New Folder"]}),ne("div",{children:[M("label",{htmlFor:"title",children:"New Folder Name"}),M("input",{type:"text",name:"title",id:"title",onChange:i=>r(i.target.value)})]}),M("button",{onClick:e.onNewFolder,children:"Done"})]})})}),Aj="_container_16xwf_1",Pj="_wrapper_16xwf_13",Cj="_btns_16xwf_73";var Em={container:Aj,wrapper:Pj,btns:Cj};const kj=ye(""),bj=ye({x:0,y:0}),xj=S.exports.forwardRef(function({onDelete:e},n){const[r]=Q(tc),[i]=Q(ia),[s,o]=Q(kj),[,a]=Q(dy),[,l]=Q(ec),[u,c]=Q(bj);S.exports.useEffect(()=>{chrome.bookmarks.get(i,f=>{o(f[0].title)})},[]),S.exports.useLayoutEffect(()=>{const{x:f,y:v}=r,{width:y,height:E}=n.current.getBoundingClientRect(),{innerWidth:g,innerHeight:p}=window,m=f+y>g?g-y:f,I=v+E>p?p-E:v;c({x:m,y:I})},[]);function d(){console.log("from delete confirm: "+i),e()}function h(){l(!1),a(!1)}return M("div",{ref:n,style:{top:u.y,left:u.x},className:Em.wrapper,children:ne("div",{className:Em.container,children:[M("h3",{children:"Are you sure you want to delete the item"}),ne("h3",{children:[s," ?"]}),M("p",{children:"Warning: This action is not reversible!"}),ne("div",{className:Em.btns,children:[M("button",{onClick:d,children:"Yes"}),M("button",{onClick:h,children:"No"})]})]})})});function Dj(){const[t,e]=Q(dy),[n,r]=Q(VR),[i]=Q(lf),[s]=Q(BR),[,o]=Q(LR),[,a]=Q(MR),[l]=Q(ia),[u,c]=Q(ec),[d]=Q(uf),[h,f]=Q($R),[v,y]=Q(zR),E=S.exports.useRef(null),g=S.exports.useRef(null),p=S.exports.useRef(null),m=S.exports.useRef(null);wl(E,()=>c(!1)),wl(g,()=>e(!1)),wl(p,()=>f(!1)),wl(m,()=>y(!1));const I=S.exports.useCallback(()=>{chrome.bookmarks.getTree(W=>{Y(W),r(W[0].children),_(W[0].children)})}),A=S.exports.useCallback(()=>{chrome.bookmarks.getSubTree(i,W=>{console.log("subTree",W),o(W[0])})},[i]),C=S.exports.useCallback((W,J)=>{for(let X=0;X<W.length;X++){if(W[X].id==J)return console.log("bookmarks[i]",W[X]),W[X];if(W[X].children!=null){let V=C(W[X].children,J);if(V!=null)return console.log("result",V),V}}return null});S.exports.useEffect(()=>{I(),A(),R(i)},[i]);function _(W){try{W.forEach(J=>{J.children&&(J.children.some(X=>X.children)?J.hasFolders=!0:J.hasFolders=!1,_(J.children))})}catch(J){console.error(J)}}S.exports.useEffect(()=>{_(n)},[n]);const w=[];function R(W){const J=C(n,W);J!=null&&J.id&&(w.push({id:J.id,title:J.title}),a(w),R(J.parentId)),console.log("parentsArr",w)}function k(){console.log(l),d?chrome.bookmarks.removeTree(l,()=>{e(!1),c(!1),I(),A()}):chrome.bookmarks.remove(l,()=>{e(!1),c(!1),I(),A()})}function O(W){chrome.bookmarks.update(l,{title:W},()=>{c(!1),I(),A()})}function q(W){chrome.bookmarks.update(l,{title:W.title,url:W.url},()=>{c(!1),I(),A()})}async function Y(W){console.log("sendBookmarkDataToFirestore",W);try{const J=[];W.forEach(async X=>{const V={URL:X.url||"",title:X.title||"",folderCategory:X.parentId||"",timestamp:Ik()};if(console.log("bookmarkData",V),J.push(l_($u(G9,"bookmarks",X.id),V)),X.children&&X.children.length>0){const H=await Y(X.children);J.push(...H)}}),await Promise.all(J),console.log("Bookmark data successfully sent to Firestore.")}catch(J){console.error("Error sending bookmark data to Firestore: ",J)}}function Pe(){f(!0),chrome.bookmarks.create({parentId:i,title:s!==""?s:"New Folder"},W=>{I(),A()})}return ne("div",{className:qI.main,children:[ne("div",{className:qI.container,children:[M(mj,{onRename:O}),M(rj,{bookmarksCb:I,onRename:O})]}),u&&M(Ej,{onEdit:q,ref:E}),t&&M(xj,{onDelete:k,ref:g}),h&&M(Rj,{onNewFolder:Pe,ref:p})]})}const Rw=document.createElement("div");Rw.id="crx-root";document.body.append(Rw);Tm.createRoot(Rw).render(M(dr.StrictMode,{children:M(Dj,{})}));
