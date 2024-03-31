const Lb=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}};Lb();var S={exports:{}},ae={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yu=Symbol.for("react.element"),Mb=Symbol.for("react.portal"),Fb=Symbol.for("react.fragment"),Ub=Symbol.for("react.strict_mode"),$b=Symbol.for("react.profiler"),Bb=Symbol.for("react.provider"),zb=Symbol.for("react.context"),jb=Symbol.for("react.forward_ref"),qb=Symbol.for("react.suspense"),Wb=Symbol.for("react.memo"),Gb=Symbol.for("react.lazy"),$w=Symbol.iterator;function Hb(t){return t===null||typeof t!="object"?null:(t=$w&&t[$w]||t["@@iterator"],typeof t=="function"?t:null)}var CT={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},kT=Object.assign,bT={};function Sa(t,e,n){this.props=t,this.context=e,this.refs=bT,this.updater=n||CT}Sa.prototype.isReactComponent={};Sa.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Sa.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function xT(){}xT.prototype=Sa.prototype;function w_(t,e,n){this.props=t,this.context=e,this.refs=bT,this.updater=n||CT}var I_=w_.prototype=new xT;I_.constructor=w_;kT(I_,Sa.prototype);I_.isPureReactComponent=!0;var Bw=Array.isArray,DT=Object.prototype.hasOwnProperty,E_={current:null},NT={key:!0,ref:!0,__self:!0,__source:!0};function OT(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)DT.call(e,r)&&!NT.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Yu,type:t,key:s,ref:o,props:i,_owner:E_.current}}function Kb(t,e){return{$$typeof:Yu,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function T_(t){return typeof t=="object"&&t!==null&&t.$$typeof===Yu}function Qb(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var zw=/\/+/g;function _p(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Qb(""+t.key):e.toString(36)}function vd(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Yu:case Mb:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+_p(o,0):r,Bw(i)?(n="",t!=null&&(n=t.replace(zw,"$&/")+"/"),vd(i,e,n,"",function(u){return u})):i!=null&&(T_(i)&&(i=Kb(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(zw,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Bw(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+_p(s,a);o+=vd(s,e,n,l,i)}else if(l=Hb(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+_p(s,a++),o+=vd(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Mc(t,e,n){if(t==null)return t;var r=[],i=0;return vd(t,r,"","",function(s){return e.call(n,s,i++)}),r}function Yb(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Wt={current:null},wd={transition:null},Xb={ReactCurrentDispatcher:Wt,ReactCurrentBatchConfig:wd,ReactCurrentOwner:E_};ae.Children={map:Mc,forEach:function(t,e,n){Mc(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Mc(t,function(){e++}),e},toArray:function(t){return Mc(t,function(e){return e})||[]},only:function(t){if(!T_(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ae.Component=Sa;ae.Fragment=Fb;ae.Profiler=$b;ae.PureComponent=w_;ae.StrictMode=Ub;ae.Suspense=qb;ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Xb;ae.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=kT({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=E_.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)DT.call(e,l)&&!NT.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Yu,type:t.type,key:i,ref:s,props:r,_owner:o}};ae.createContext=function(t){return t={$$typeof:zb,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Bb,_context:t},t.Consumer=t};ae.createElement=OT;ae.createFactory=function(t){var e=OT.bind(null,t);return e.type=t,e};ae.createRef=function(){return{current:null}};ae.forwardRef=function(t){return{$$typeof:jb,render:t}};ae.isValidElement=T_;ae.lazy=function(t){return{$$typeof:Gb,_payload:{_status:-1,_result:t},_init:Yb}};ae.memo=function(t,e){return{$$typeof:Wb,type:t,compare:e===void 0?null:e}};ae.startTransition=function(t){var e=wd.transition;wd.transition={};try{t()}finally{wd.transition=e}};ae.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};ae.useCallback=function(t,e){return Wt.current.useCallback(t,e)};ae.useContext=function(t){return Wt.current.useContext(t)};ae.useDebugValue=function(){};ae.useDeferredValue=function(t){return Wt.current.useDeferredValue(t)};ae.useEffect=function(t,e){return Wt.current.useEffect(t,e)};ae.useId=function(){return Wt.current.useId()};ae.useImperativeHandle=function(t,e,n){return Wt.current.useImperativeHandle(t,e,n)};ae.useInsertionEffect=function(t,e){return Wt.current.useInsertionEffect(t,e)};ae.useLayoutEffect=function(t,e){return Wt.current.useLayoutEffect(t,e)};ae.useMemo=function(t,e){return Wt.current.useMemo(t,e)};ae.useReducer=function(t,e,n){return Wt.current.useReducer(t,e,n)};ae.useRef=function(t){return Wt.current.useRef(t)};ae.useState=function(t){return Wt.current.useState(t)};ae.useSyncExternalStore=function(t,e,n){return Wt.current.useSyncExternalStore(t,e,n)};ae.useTransition=function(){return Wt.current.useTransition()};ae.version="18.2.0";S.exports=ae;var hr=S.exports,Rm={},fi={exports:{}},yn={},VT={exports:{}},LT={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(N,G){var Q=N.length;N.push(G);e:for(;0<Q;){var le=Q-1>>>1,re=N[le];if(0<i(re,G))N[le]=G,N[Q]=re,Q=le;else break e}}function n(N){return N.length===0?null:N[0]}function r(N){if(N.length===0)return null;var G=N[0],Q=N.pop();if(Q!==G){N[0]=Q;e:for(var le=0,re=N.length,Ht=re>>>1;le<Ht;){var Vt=2*(le+1)-1,Er=N[Vt],Ge=Vt+1,Tr=N[Ge];if(0>i(Er,Q))Ge<re&&0>i(Tr,Er)?(N[le]=Tr,N[Ge]=Q,le=Ge):(N[le]=Er,N[Vt]=Q,le=Vt);else if(Ge<re&&0>i(Tr,Q))N[le]=Tr,N[Ge]=Q,le=Ge;else break e}}return G}function i(N,G){var Q=N.sortIndex-G.sortIndex;return Q!==0?Q:N.id-G.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,h=null,f=3,p=!1,w=!1,v=!1,E=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate!="undefined"?setImmediate:null;typeof navigator!="undefined"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(N){for(var G=n(u);G!==null;){if(G.callback===null)r(u);else if(G.startTime<=N)r(u),G.sortIndex=G.expirationTime,e(l,G);else break;G=n(u)}}function T(N){if(v=!1,g(N),!w)if(n(l)!==null)w=!0,X(P);else{var G=n(u);G!==null&&K(T,G.startTime-N)}}function P(N,G){w=!1,v&&(v=!1,_(I),I=-1),p=!0;var Q=f;try{for(g(G),h=n(l);h!==null&&(!(h.expirationTime>G)||N&&!M());){var le=h.callback;if(typeof le=="function"){h.callback=null,f=h.priorityLevel;var re=le(h.expirationTime<=G);G=t.unstable_now(),typeof re=="function"?h.callback=re:h===n(l)&&r(l),g(G)}else r(l);h=n(l)}if(h!==null)var Ht=!0;else{var Vt=n(u);Vt!==null&&K(T,Vt.startTime-G),Ht=!1}return Ht}finally{h=null,f=Q,p=!1}}var C=!1,y=null,I=-1,A=5,b=-1;function M(){return!(t.unstable_now()-b<A)}function q(){if(y!==null){var N=t.unstable_now();b=N;var G=!0;try{G=y(!0,N)}finally{G?J():(C=!1,y=null)}}else C=!1}var J;if(typeof m=="function")J=function(){m(q)};else if(typeof MessageChannel!="undefined"){var Ee=new MessageChannel,de=Ee.port2;Ee.port1.onmessage=q,J=function(){de.postMessage(null)}}else J=function(){E(q,0)};function X(N){y=N,C||(C=!0,J())}function K(N,G){I=E(function(){N(t.unstable_now())},G)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(N){N.callback=null},t.unstable_continueExecution=function(){w||p||(w=!0,X(P))},t.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<N?Math.floor(1e3/N):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(N){switch(f){case 1:case 2:case 3:var G=3;break;default:G=f}var Q=f;f=G;try{return N()}finally{f=Q}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(N,G){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var Q=f;f=N;try{return G()}finally{f=Q}},t.unstable_scheduleCallback=function(N,G,Q){var le=t.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?le+Q:le):Q=le,N){case 1:var re=-1;break;case 2:re=250;break;case 5:re=1073741823;break;case 4:re=1e4;break;default:re=5e3}return re=Q+re,N={id:c++,callback:G,priorityLevel:N,startTime:Q,expirationTime:re,sortIndex:-1},Q>le?(N.sortIndex=Q,e(u,N),n(l)===null&&N===n(u)&&(v?(_(I),I=-1):v=!0,K(T,Q-le))):(N.sortIndex=re,e(l,N),w||p||(w=!0,X(P))),N},t.unstable_shouldYield=M,t.unstable_wrapCallback=function(N){var G=f;return function(){var Q=f;f=G;try{return N.apply(this,arguments)}finally{f=Q}}}})(LT);VT.exports=LT;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var MT=S.exports,mn=VT.exports;function O(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var FT=new Set,Jl={};function Ws(t,e){Jo(t,e),Jo(t+"Capture",e)}function Jo(t,e){for(Jl[t]=e,t=0;t<e.length;t++)FT.add(e[t])}var Ur=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"),Am=Object.prototype.hasOwnProperty,Jb=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,jw={},qw={};function Zb(t){return Am.call(qw,t)?!0:Am.call(jw,t)?!1:Jb.test(t)?qw[t]=!0:(jw[t]=!0,!1)}function ex(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function tx(t,e,n,r){if(e===null||typeof e=="undefined"||ex(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Gt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Et={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Et[t]=new Gt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Et[e]=new Gt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Et[t]=new Gt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Et[t]=new Gt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Et[t]=new Gt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Et[t]=new Gt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Et[t]=new Gt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Et[t]=new Gt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Et[t]=new Gt(t,5,!1,t.toLowerCase(),null,!1,!1)});var S_=/[\-:]([a-z])/g;function R_(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(S_,R_);Et[e]=new Gt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(S_,R_);Et[e]=new Gt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(S_,R_);Et[e]=new Gt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Et[t]=new Gt(t,1,!1,t.toLowerCase(),null,!1,!1)});Et.xlinkHref=new Gt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Et[t]=new Gt(t,1,!1,t.toLowerCase(),null,!0,!0)});function A_(t,e,n,r){var i=Et.hasOwnProperty(e)?Et[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(tx(e,n,i,r)&&(n=null),r||i===null?Zb(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Hr=MT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Fc=Symbol.for("react.element"),Eo=Symbol.for("react.portal"),To=Symbol.for("react.fragment"),P_=Symbol.for("react.strict_mode"),Pm=Symbol.for("react.profiler"),UT=Symbol.for("react.provider"),$T=Symbol.for("react.context"),C_=Symbol.for("react.forward_ref"),Cm=Symbol.for("react.suspense"),km=Symbol.for("react.suspense_list"),k_=Symbol.for("react.memo"),ci=Symbol.for("react.lazy"),BT=Symbol.for("react.offscreen"),Ww=Symbol.iterator;function Ja(t){return t===null||typeof t!="object"?null:(t=Ww&&t[Ww]||t["@@iterator"],typeof t=="function"?t:null)}var Le=Object.assign,yp;function _l(t){if(yp===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);yp=e&&e[1]||""}return`
`+yp+t}var vp=!1;function wp(t,e){if(!t||vp)return"";vp=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{vp=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?_l(t):""}function nx(t){switch(t.tag){case 5:return _l(t.type);case 16:return _l("Lazy");case 13:return _l("Suspense");case 19:return _l("SuspenseList");case 0:case 2:case 15:return t=wp(t.type,!1),t;case 11:return t=wp(t.type.render,!1),t;case 1:return t=wp(t.type,!0),t;default:return""}}function bm(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case To:return"Fragment";case Eo:return"Portal";case Pm:return"Profiler";case P_:return"StrictMode";case Cm:return"Suspense";case km:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case $T:return(t.displayName||"Context")+".Consumer";case UT:return(t._context.displayName||"Context")+".Provider";case C_:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case k_:return e=t.displayName||null,e!==null?e:bm(t.type)||"Memo";case ci:e=t._payload,t=t._init;try{return bm(t(e))}catch{}}return null}function rx(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return bm(e);case 8:return e===P_?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Di(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function zT(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function ix(t){var e=zT(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n!="undefined"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Uc(t){t._valueTracker||(t._valueTracker=ix(t))}function jT(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=zT(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function jd(t){if(t=t||(typeof document!="undefined"?document:void 0),typeof t=="undefined")return null;try{return t.activeElement||t.body}catch{return t.body}}function xm(t,e){var n=e.checked;return Le({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:t._wrapperState.initialChecked})}function Gw(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Di(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function qT(t,e){e=e.checked,e!=null&&A_(t,"checked",e,!1)}function Dm(t,e){qT(t,e);var n=Di(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Nm(t,e.type,n):e.hasOwnProperty("defaultValue")&&Nm(t,e.type,Di(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Hw(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Nm(t,e,n){(e!=="number"||jd(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var yl=Array.isArray;function Lo(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Di(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Om(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(O(91));return Le({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Kw(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(O(92));if(yl(n)){if(1<n.length)throw Error(O(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Di(n)}}function WT(t,e){var n=Di(e.value),r=Di(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Qw(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function GT(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Vm(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?GT(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var $c,HT=function(t){return typeof MSApp!="undefined"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for($c=$c||document.createElement("div"),$c.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=$c.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Zl(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var kl={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},sx=["Webkit","ms","Moz","O"];Object.keys(kl).forEach(function(t){sx.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),kl[e]=kl[t]})});function KT(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||kl.hasOwnProperty(t)&&kl[t]?(""+e).trim():e+"px"}function QT(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=KT(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var ox=Le({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Lm(t,e){if(e){if(ox[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(O(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(O(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(O(61))}if(e.style!=null&&typeof e.style!="object")throw Error(O(62))}}function Mm(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Fm=null;function b_(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Um=null,Mo=null,Fo=null;function Yw(t){if(t=Zu(t)){if(typeof Um!="function")throw Error(O(280));var e=t.stateNode;e&&(e=Yh(e),Um(t.stateNode,t.type,e))}}function YT(t){Mo?Fo?Fo.push(t):Fo=[t]:Mo=t}function XT(){if(Mo){var t=Mo,e=Fo;if(Fo=Mo=null,Yw(t),e)for(t=0;t<e.length;t++)Yw(e[t])}}function JT(t,e){return t(e)}function ZT(){}var Ip=!1;function eS(t,e,n){if(Ip)return t(e,n);Ip=!0;try{return JT(t,e,n)}finally{Ip=!1,(Mo!==null||Fo!==null)&&(ZT(),XT())}}function eu(t,e){var n=t.stateNode;if(n===null)return null;var r=Yh(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(O(231,e,typeof n));return n}var $m=!1;if(Ur)try{var Za={};Object.defineProperty(Za,"passive",{get:function(){$m=!0}}),window.addEventListener("test",Za,Za),window.removeEventListener("test",Za,Za)}catch{$m=!1}function ax(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var bl=!1,qd=null,Wd=!1,Bm=null,lx={onError:function(t){bl=!0,qd=t}};function ux(t,e,n,r,i,s,o,a,l){bl=!1,qd=null,ax.apply(lx,arguments)}function cx(t,e,n,r,i,s,o,a,l){if(ux.apply(this,arguments),bl){if(bl){var u=qd;bl=!1,qd=null}else throw Error(O(198));Wd||(Wd=!0,Bm=u)}}function Gs(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function tS(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Xw(t){if(Gs(t)!==t)throw Error(O(188))}function dx(t){var e=t.alternate;if(!e){if(e=Gs(t),e===null)throw Error(O(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Xw(i),t;if(s===r)return Xw(i),e;s=s.sibling}throw Error(O(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(O(189))}}if(n.alternate!==r)throw Error(O(190))}if(n.tag!==3)throw Error(O(188));return n.stateNode.current===n?t:e}function nS(t){return t=dx(t),t!==null?rS(t):null}function rS(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=rS(t);if(e!==null)return e;t=t.sibling}return null}var iS=mn.unstable_scheduleCallback,Jw=mn.unstable_cancelCallback,hx=mn.unstable_shouldYield,fx=mn.unstable_requestPaint,He=mn.unstable_now,px=mn.unstable_getCurrentPriorityLevel,x_=mn.unstable_ImmediatePriority,sS=mn.unstable_UserBlockingPriority,Gd=mn.unstable_NormalPriority,mx=mn.unstable_LowPriority,oS=mn.unstable_IdlePriority,Gh=null,fr=null;function gx(t){if(fr&&typeof fr.onCommitFiberRoot=="function")try{fr.onCommitFiberRoot(Gh,t,void 0,(t.current.flags&128)===128)}catch{}}var Bn=Math.clz32?Math.clz32:vx,_x=Math.log,yx=Math.LN2;function vx(t){return t>>>=0,t===0?32:31-(_x(t)/yx|0)|0}var Bc=64,zc=4194304;function vl(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Hd(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=vl(a):(s&=o,s!==0&&(r=vl(s)))}else o=n&~i,o!==0?r=vl(o):s!==0&&(r=vl(s));if(r===0)return 0;if(e!==0&&e!==r&&(e&i)===0&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if((r&4)!==0&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Bn(e),i=1<<n,r|=t[n],e&=~i;return r}function wx(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ix(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Bn(s),a=1<<o,l=i[o];l===-1?((a&n)===0||(a&r)!==0)&&(i[o]=wx(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function zm(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function aS(){var t=Bc;return Bc<<=1,(Bc&4194240)===0&&(Bc=64),t}function Ep(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Xu(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Bn(e),t[e]=n}function Ex(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Bn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function D_(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Bn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var me=0;function lS(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var uS,N_,cS,dS,hS,jm=!1,jc=[],Ei=null,Ti=null,Si=null,tu=new Map,nu=new Map,pi=[],Tx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Zw(t,e){switch(t){case"focusin":case"focusout":Ei=null;break;case"dragenter":case"dragleave":Ti=null;break;case"mouseover":case"mouseout":Si=null;break;case"pointerover":case"pointerout":tu.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":nu.delete(e.pointerId)}}function el(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Zu(e),e!==null&&N_(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function Sx(t,e,n,r,i){switch(e){case"focusin":return Ei=el(Ei,t,e,n,r,i),!0;case"dragenter":return Ti=el(Ti,t,e,n,r,i),!0;case"mouseover":return Si=el(Si,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return tu.set(s,el(tu.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,nu.set(s,el(nu.get(s)||null,t,e,n,r,i)),!0}return!1}function fS(t){var e=hs(t.target);if(e!==null){var n=Gs(e);if(n!==null){if(e=n.tag,e===13){if(e=tS(n),e!==null){t.blockedOn=e,hS(t.priority,function(){cS(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Id(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=qm(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Fm=r,n.target.dispatchEvent(r),Fm=null}else return e=Zu(n),e!==null&&N_(e),t.blockedOn=n,!1;e.shift()}return!0}function e0(t,e,n){Id(t)&&n.delete(e)}function Rx(){jm=!1,Ei!==null&&Id(Ei)&&(Ei=null),Ti!==null&&Id(Ti)&&(Ti=null),Si!==null&&Id(Si)&&(Si=null),tu.forEach(e0),nu.forEach(e0)}function tl(t,e){t.blockedOn===e&&(t.blockedOn=null,jm||(jm=!0,mn.unstable_scheduleCallback(mn.unstable_NormalPriority,Rx)))}function ru(t){function e(i){return tl(i,t)}if(0<jc.length){tl(jc[0],t);for(var n=1;n<jc.length;n++){var r=jc[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Ei!==null&&tl(Ei,t),Ti!==null&&tl(Ti,t),Si!==null&&tl(Si,t),tu.forEach(e),nu.forEach(e),n=0;n<pi.length;n++)r=pi[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<pi.length&&(n=pi[0],n.blockedOn===null);)fS(n),n.blockedOn===null&&pi.shift()}var Uo=Hr.ReactCurrentBatchConfig,Kd=!0;function Ax(t,e,n,r){var i=me,s=Uo.transition;Uo.transition=null;try{me=1,O_(t,e,n,r)}finally{me=i,Uo.transition=s}}function Px(t,e,n,r){var i=me,s=Uo.transition;Uo.transition=null;try{me=4,O_(t,e,n,r)}finally{me=i,Uo.transition=s}}function O_(t,e,n,r){if(Kd){var i=qm(t,e,n,r);if(i===null)Dp(t,e,r,Qd,n),Zw(t,r);else if(Sx(i,t,e,n,r))r.stopPropagation();else if(Zw(t,r),e&4&&-1<Tx.indexOf(t)){for(;i!==null;){var s=Zu(i);if(s!==null&&uS(s),s=qm(t,e,n,r),s===null&&Dp(t,e,r,Qd,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Dp(t,e,r,null,n)}}var Qd=null;function qm(t,e,n,r){if(Qd=null,t=b_(r),t=hs(t),t!==null)if(e=Gs(t),e===null)t=null;else if(n=e.tag,n===13){if(t=tS(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Qd=t,null}function pS(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(px()){case x_:return 1;case sS:return 4;case Gd:case mx:return 16;case oS:return 536870912;default:return 16}default:return 16}}var yi=null,V_=null,Ed=null;function mS(){if(Ed)return Ed;var t,e=V_,n=e.length,r,i="value"in yi?yi.value:yi.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Ed=i.slice(t,1<r?1-r:void 0)}function Td(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function qc(){return!0}function t0(){return!1}function vn(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?qc:t0,this.isPropagationStopped=t0,this}return Le(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=qc)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=qc)},persist:function(){},isPersistent:qc}),e}var Ra={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},L_=vn(Ra),Ju=Le({},Ra,{view:0,detail:0}),Cx=vn(Ju),Tp,Sp,nl,Hh=Le({},Ju,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:M_,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==nl&&(nl&&t.type==="mousemove"?(Tp=t.screenX-nl.screenX,Sp=t.screenY-nl.screenY):Sp=Tp=0,nl=t),Tp)},movementY:function(t){return"movementY"in t?t.movementY:Sp}}),n0=vn(Hh),kx=Le({},Hh,{dataTransfer:0}),bx=vn(kx),xx=Le({},Ju,{relatedTarget:0}),Rp=vn(xx),Dx=Le({},Ra,{animationName:0,elapsedTime:0,pseudoElement:0}),Nx=vn(Dx),Ox=Le({},Ra,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Vx=vn(Ox),Lx=Le({},Ra,{data:0}),r0=vn(Lx),Mx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Fx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ux={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function $x(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Ux[t])?!!e[t]:!1}function M_(){return $x}var Bx=Le({},Ju,{key:function(t){if(t.key){var e=Mx[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Td(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Fx[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:M_,charCode:function(t){return t.type==="keypress"?Td(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Td(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),zx=vn(Bx),jx=Le({},Hh,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),i0=vn(jx),qx=Le({},Ju,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:M_}),Wx=vn(qx),Gx=Le({},Ra,{propertyName:0,elapsedTime:0,pseudoElement:0}),Hx=vn(Gx),Kx=Le({},Hh,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Qx=vn(Kx),Yx=[9,13,27,32],F_=Ur&&"CompositionEvent"in window,xl=null;Ur&&"documentMode"in document&&(xl=document.documentMode);var Xx=Ur&&"TextEvent"in window&&!xl,gS=Ur&&(!F_||xl&&8<xl&&11>=xl),s0=String.fromCharCode(32),o0=!1;function _S(t,e){switch(t){case"keyup":return Yx.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function yS(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var So=!1;function Jx(t,e){switch(t){case"compositionend":return yS(e);case"keypress":return e.which!==32?null:(o0=!0,s0);case"textInput":return t=e.data,t===s0&&o0?null:t;default:return null}}function Zx(t,e){if(So)return t==="compositionend"||!F_&&_S(t,e)?(t=mS(),Ed=V_=yi=null,So=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return gS&&e.locale!=="ko"?null:e.data;default:return null}}var eD={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function a0(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!eD[t.type]:e==="textarea"}function vS(t,e,n,r){YT(r),e=Yd(e,"onChange"),0<e.length&&(n=new L_("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Dl=null,iu=null;function tD(t){bS(t,0)}function Kh(t){var e=Po(t);if(jT(e))return t}function nD(t,e){if(t==="change")return e}var wS=!1;if(Ur){var Ap;if(Ur){var Pp="oninput"in document;if(!Pp){var l0=document.createElement("div");l0.setAttribute("oninput","return;"),Pp=typeof l0.oninput=="function"}Ap=Pp}else Ap=!1;wS=Ap&&(!document.documentMode||9<document.documentMode)}function u0(){Dl&&(Dl.detachEvent("onpropertychange",IS),iu=Dl=null)}function IS(t){if(t.propertyName==="value"&&Kh(iu)){var e=[];vS(e,iu,t,b_(t)),eS(tD,e)}}function rD(t,e,n){t==="focusin"?(u0(),Dl=e,iu=n,Dl.attachEvent("onpropertychange",IS)):t==="focusout"&&u0()}function iD(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Kh(iu)}function sD(t,e){if(t==="click")return Kh(e)}function oD(t,e){if(t==="input"||t==="change")return Kh(e)}function aD(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var qn=typeof Object.is=="function"?Object.is:aD;function su(t,e){if(qn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Am.call(e,i)||!qn(t[i],e[i]))return!1}return!0}function c0(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function d0(t,e){var n=c0(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=c0(n)}}function ES(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?ES(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function TS(){for(var t=window,e=jd();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=jd(t.document)}return e}function U_(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function lD(t){var e=TS(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&ES(n.ownerDocument.documentElement,n)){if(r!==null&&U_(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=d0(n,s);var o=d0(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var uD=Ur&&"documentMode"in document&&11>=document.documentMode,Ro=null,Wm=null,Nl=null,Gm=!1;function h0(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Gm||Ro==null||Ro!==jd(r)||(r=Ro,"selectionStart"in r&&U_(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Nl&&su(Nl,r)||(Nl=r,r=Yd(Wm,"onSelect"),0<r.length&&(e=new L_("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Ro)))}function Wc(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ao={animationend:Wc("Animation","AnimationEnd"),animationiteration:Wc("Animation","AnimationIteration"),animationstart:Wc("Animation","AnimationStart"),transitionend:Wc("Transition","TransitionEnd")},Cp={},SS={};Ur&&(SS=document.createElement("div").style,"AnimationEvent"in window||(delete Ao.animationend.animation,delete Ao.animationiteration.animation,delete Ao.animationstart.animation),"TransitionEvent"in window||delete Ao.transitionend.transition);function Qh(t){if(Cp[t])return Cp[t];if(!Ao[t])return t;var e=Ao[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in SS)return Cp[t]=e[n];return t}var RS=Qh("animationend"),AS=Qh("animationiteration"),PS=Qh("animationstart"),CS=Qh("transitionend"),kS=new Map,f0="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Wi(t,e){kS.set(t,e),Ws(e,[t])}for(var kp=0;kp<f0.length;kp++){var bp=f0[kp],cD=bp.toLowerCase(),dD=bp[0].toUpperCase()+bp.slice(1);Wi(cD,"on"+dD)}Wi(RS,"onAnimationEnd");Wi(AS,"onAnimationIteration");Wi(PS,"onAnimationStart");Wi("dblclick","onDoubleClick");Wi("focusin","onFocus");Wi("focusout","onBlur");Wi(CS,"onTransitionEnd");Jo("onMouseEnter",["mouseout","mouseover"]);Jo("onMouseLeave",["mouseout","mouseover"]);Jo("onPointerEnter",["pointerout","pointerover"]);Jo("onPointerLeave",["pointerout","pointerover"]);Ws("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ws("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ws("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ws("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ws("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ws("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var wl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),hD=new Set("cancel close invalid load scroll toggle".split(" ").concat(wl));function p0(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,cx(r,e,void 0,t),t.currentTarget=null}function bS(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;p0(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;p0(i,a,u),s=l}}}if(Wd)throw t=Bm,Wd=!1,Bm=null,t}function Te(t,e){var n=e[Xm];n===void 0&&(n=e[Xm]=new Set);var r=t+"__bubble";n.has(r)||(xS(e,t,2,!1),n.add(r))}function xp(t,e,n){var r=0;e&&(r|=4),xS(n,t,r,e)}var Gc="_reactListening"+Math.random().toString(36).slice(2);function ou(t){if(!t[Gc]){t[Gc]=!0,FT.forEach(function(n){n!=="selectionchange"&&(hD.has(n)||xp(n,!1,t),xp(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Gc]||(e[Gc]=!0,xp("selectionchange",!1,e))}}function xS(t,e,n,r){switch(pS(e)){case 1:var i=Ax;break;case 4:i=Px;break;default:i=O_}n=i.bind(null,e,n,t),i=void 0,!$m||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Dp(t,e,n,r,i){var s=r;if((e&1)===0&&(e&2)===0&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=hs(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}eS(function(){var u=s,c=b_(n),h=[];e:{var f=kS.get(t);if(f!==void 0){var p=L_,w=t;switch(t){case"keypress":if(Td(n)===0)break e;case"keydown":case"keyup":p=zx;break;case"focusin":w="focus",p=Rp;break;case"focusout":w="blur",p=Rp;break;case"beforeblur":case"afterblur":p=Rp;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=n0;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=bx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=Wx;break;case RS:case AS:case PS:p=Nx;break;case CS:p=Hx;break;case"scroll":p=Cx;break;case"wheel":p=Qx;break;case"copy":case"cut":case"paste":p=Vx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=i0}var v=(e&4)!==0,E=!v&&t==="scroll",_=v?f!==null?f+"Capture":null:f;v=[];for(var m=u,g;m!==null;){g=m;var T=g.stateNode;if(g.tag===5&&T!==null&&(g=T,_!==null&&(T=eu(m,_),T!=null&&v.push(au(m,T,g)))),E)break;m=m.return}0<v.length&&(f=new p(f,w,null,n,c),h.push({event:f,listeners:v}))}}if((e&7)===0){e:{if(f=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",f&&n!==Fm&&(w=n.relatedTarget||n.fromElement)&&(hs(w)||w[$r]))break e;if((p||f)&&(f=c.window===c?c:(f=c.ownerDocument)?f.defaultView||f.parentWindow:window,p?(w=n.relatedTarget||n.toElement,p=u,w=w?hs(w):null,w!==null&&(E=Gs(w),w!==E||w.tag!==5&&w.tag!==6)&&(w=null)):(p=null,w=u),p!==w)){if(v=n0,T="onMouseLeave",_="onMouseEnter",m="mouse",(t==="pointerout"||t==="pointerover")&&(v=i0,T="onPointerLeave",_="onPointerEnter",m="pointer"),E=p==null?f:Po(p),g=w==null?f:Po(w),f=new v(T,m+"leave",p,n,c),f.target=E,f.relatedTarget=g,T=null,hs(c)===u&&(v=new v(_,m+"enter",w,n,c),v.target=g,v.relatedTarget=E,T=v),E=T,p&&w)t:{for(v=p,_=w,m=0,g=v;g;g=ao(g))m++;for(g=0,T=_;T;T=ao(T))g++;for(;0<m-g;)v=ao(v),m--;for(;0<g-m;)_=ao(_),g--;for(;m--;){if(v===_||_!==null&&v===_.alternate)break t;v=ao(v),_=ao(_)}v=null}else v=null;p!==null&&m0(h,f,p,v,!1),w!==null&&E!==null&&m0(h,E,w,v,!0)}}e:{if(f=u?Po(u):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var P=nD;else if(a0(f))if(wS)P=oD;else{P=iD;var C=rD}else(p=f.nodeName)&&p.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(P=sD);if(P&&(P=P(t,u))){vS(h,P,n,c);break e}C&&C(t,f,u),t==="focusout"&&(C=f._wrapperState)&&C.controlled&&f.type==="number"&&Nm(f,"number",f.value)}switch(C=u?Po(u):window,t){case"focusin":(a0(C)||C.contentEditable==="true")&&(Ro=C,Wm=u,Nl=null);break;case"focusout":Nl=Wm=Ro=null;break;case"mousedown":Gm=!0;break;case"contextmenu":case"mouseup":case"dragend":Gm=!1,h0(h,n,c);break;case"selectionchange":if(uD)break;case"keydown":case"keyup":h0(h,n,c)}var y;if(F_)e:{switch(t){case"compositionstart":var I="onCompositionStart";break e;case"compositionend":I="onCompositionEnd";break e;case"compositionupdate":I="onCompositionUpdate";break e}I=void 0}else So?_S(t,n)&&(I="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(I="onCompositionStart");I&&(gS&&n.locale!=="ko"&&(So||I!=="onCompositionStart"?I==="onCompositionEnd"&&So&&(y=mS()):(yi=c,V_="value"in yi?yi.value:yi.textContent,So=!0)),C=Yd(u,I),0<C.length&&(I=new r0(I,t,null,n,c),h.push({event:I,listeners:C}),y?I.data=y:(y=yS(n),y!==null&&(I.data=y)))),(y=Xx?Jx(t,n):Zx(t,n))&&(u=Yd(u,"onBeforeInput"),0<u.length&&(c=new r0("onBeforeInput","beforeinput",null,n,c),h.push({event:c,listeners:u}),c.data=y))}bS(h,e)})}function au(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Yd(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=eu(t,n),s!=null&&r.unshift(au(t,s,i)),s=eu(t,e),s!=null&&r.push(au(t,s,i))),t=t.return}return r}function ao(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function m0(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=eu(n,s),l!=null&&o.unshift(au(n,l,a))):i||(l=eu(n,s),l!=null&&o.push(au(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var fD=/\r\n?/g,pD=/\u0000|\uFFFD/g;function g0(t){return(typeof t=="string"?t:""+t).replace(fD,`
`).replace(pD,"")}function Hc(t,e,n){if(e=g0(e),g0(t)!==e&&n)throw Error(O(425))}function Xd(){}var Hm=null,Km=null;function Qm(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Ym=typeof setTimeout=="function"?setTimeout:void 0,mD=typeof clearTimeout=="function"?clearTimeout:void 0,_0=typeof Promise=="function"?Promise:void 0,gD=typeof queueMicrotask=="function"?queueMicrotask:typeof _0!="undefined"?function(t){return _0.resolve(null).then(t).catch(_D)}:Ym;function _D(t){setTimeout(function(){throw t})}function Np(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),ru(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ru(e)}function Ri(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function y0(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Aa=Math.random().toString(36).slice(2),er="__reactFiber$"+Aa,lu="__reactProps$"+Aa,$r="__reactContainer$"+Aa,Xm="__reactEvents$"+Aa,yD="__reactListeners$"+Aa,vD="__reactHandles$"+Aa;function hs(t){var e=t[er];if(e)return e;for(var n=t.parentNode;n;){if(e=n[$r]||n[er]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=y0(t);t!==null;){if(n=t[er])return n;t=y0(t)}return e}t=n,n=t.parentNode}return null}function Zu(t){return t=t[er]||t[$r],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Po(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(O(33))}function Yh(t){return t[lu]||null}var Jm=[],Co=-1;function Gi(t){return{current:t}}function Ae(t){0>Co||(t.current=Jm[Co],Jm[Co]=null,Co--)}function we(t,e){Co++,Jm[Co]=t.current,t.current=e}var Ni={},Nt=Gi(Ni),nn=Gi(!1),Ps=Ni;function Zo(t,e){var n=t.type.contextTypes;if(!n)return Ni;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function rn(t){return t=t.childContextTypes,t!=null}function Jd(){Ae(nn),Ae(Nt)}function v0(t,e,n){if(Nt.current!==Ni)throw Error(O(168));we(Nt,e),we(nn,n)}function DS(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(O(108,rx(t)||"Unknown",i));return Le({},n,r)}function Zd(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Ni,Ps=Nt.current,we(Nt,t),we(nn,nn.current),!0}function w0(t,e,n){var r=t.stateNode;if(!r)throw Error(O(169));n?(t=DS(t,e,Ps),r.__reactInternalMemoizedMergedChildContext=t,Ae(nn),Ae(Nt),we(Nt,t)):Ae(nn),we(nn,n)}var Pr=null,Xh=!1,Op=!1;function NS(t){Pr===null?Pr=[t]:Pr.push(t)}function wD(t){Xh=!0,NS(t)}function Hi(){if(!Op&&Pr!==null){Op=!0;var t=0,e=me;try{var n=Pr;for(me=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Pr=null,Xh=!1}catch(i){throw Pr!==null&&(Pr=Pr.slice(t+1)),iS(x_,Hi),i}finally{me=e,Op=!1}}return null}var ko=[],bo=0,eh=null,th=0,En=[],Tn=0,Cs=null,kr=1,br="";function rs(t,e){ko[bo++]=th,ko[bo++]=eh,eh=t,th=e}function OS(t,e,n){En[Tn++]=kr,En[Tn++]=br,En[Tn++]=Cs,Cs=t;var r=kr;t=br;var i=32-Bn(r)-1;r&=~(1<<i),n+=1;var s=32-Bn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,kr=1<<32-Bn(e)+i|n<<i|r,br=s+t}else kr=1<<s|n<<i|r,br=t}function $_(t){t.return!==null&&(rs(t,1),OS(t,1,0))}function B_(t){for(;t===eh;)eh=ko[--bo],ko[bo]=null,th=ko[--bo],ko[bo]=null;for(;t===Cs;)Cs=En[--Tn],En[Tn]=null,br=En[--Tn],En[Tn]=null,kr=En[--Tn],En[Tn]=null}var fn=null,dn=null,ke=!1,$n=null;function VS(t,e){var n=Rn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function I0(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,fn=t,dn=Ri(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,fn=t,dn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Cs!==null?{id:kr,overflow:br}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Rn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,fn=t,dn=null,!0):!1;default:return!1}}function Zm(t){return(t.mode&1)!==0&&(t.flags&128)===0}function eg(t){if(ke){var e=dn;if(e){var n=e;if(!I0(t,e)){if(Zm(t))throw Error(O(418));e=Ri(n.nextSibling);var r=fn;e&&I0(t,e)?VS(r,n):(t.flags=t.flags&-4097|2,ke=!1,fn=t)}}else{if(Zm(t))throw Error(O(418));t.flags=t.flags&-4097|2,ke=!1,fn=t}}}function E0(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;fn=t}function Kc(t){if(t!==fn)return!1;if(!ke)return E0(t),ke=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Qm(t.type,t.memoizedProps)),e&&(e=dn)){if(Zm(t))throw LS(),Error(O(418));for(;e;)VS(t,e),e=Ri(e.nextSibling)}if(E0(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(O(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){dn=Ri(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}dn=null}}else dn=fn?Ri(t.stateNode.nextSibling):null;return!0}function LS(){for(var t=dn;t;)t=Ri(t.nextSibling)}function ea(){dn=fn=null,ke=!1}function z_(t){$n===null?$n=[t]:$n.push(t)}var ID=Hr.ReactCurrentBatchConfig;function Fn(t,e){if(t&&t.defaultProps){e=Le({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var nh=Gi(null),rh=null,xo=null,j_=null;function q_(){j_=xo=rh=null}function W_(t){var e=nh.current;Ae(nh),t._currentValue=e}function tg(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function $o(t,e){rh=t,j_=xo=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&e)!==0&&(Jt=!0),t.firstContext=null)}function xn(t){var e=t._currentValue;if(j_!==t)if(t={context:t,memoizedValue:e,next:null},xo===null){if(rh===null)throw Error(O(308));xo=t,rh.dependencies={lanes:0,firstContext:t}}else xo=xo.next=t;return e}var fs=null;function G_(t){fs===null?fs=[t]:fs.push(t)}function MS(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,G_(e)):(n.next=i.next,i.next=n),e.interleaved=n,Br(t,r)}function Br(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var di=!1;function H_(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function FS(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Lr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Ai(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,(he&2)!==0){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Br(t,n)}return i=r.interleaved,i===null?(e.next=e,G_(r)):(e.next=i.next,i.next=e),r.interleaved=e,Br(t,n)}function Sd(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,D_(t,n)}}function T0(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function ih(t,e,n,r){var i=t.updateQueue;di=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var h=i.baseState;o=0,c=u=l=null,a=s;do{var f=a.lane,p=a.eventTime;if((r&f)===f){c!==null&&(c=c.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var w=t,v=a;switch(f=e,p=n,v.tag){case 1:if(w=v.payload,typeof w=="function"){h=w.call(p,h,f);break e}h=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=v.payload,f=typeof w=="function"?w.call(p,h,f):w,f==null)break e;h=Le({},h,f);break e;case 2:di=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=i.effects,f===null?i.effects=[a]:f.push(a))}else p={eventTime:p,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=p,l=h):c=c.next=p,o|=f;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;f=a,a=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(1);if(c===null&&(l=h),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);bs|=o,t.lanes=o,t.memoizedState=h}}function S0(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(O(191,i));i.call(r)}}}var US=new MT.Component().refs;function ng(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Le({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Jh={isMounted:function(t){return(t=t._reactInternals)?Gs(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=zt(),i=Ci(t),s=Lr(r,i);s.payload=e,n!=null&&(s.callback=n),e=Ai(t,s,i),e!==null&&(zn(e,t,i,r),Sd(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=zt(),i=Ci(t),s=Lr(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Ai(t,s,i),e!==null&&(zn(e,t,i,r),Sd(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=zt(),r=Ci(t),i=Lr(n,r);i.tag=2,e!=null&&(i.callback=e),e=Ai(t,i,r),e!==null&&(zn(e,t,r,n),Sd(e,t,r))}};function R0(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!su(n,r)||!su(i,s):!0}function $S(t,e,n){var r=!1,i=Ni,s=e.contextType;return typeof s=="object"&&s!==null?s=xn(s):(i=rn(e)?Ps:Nt.current,r=e.contextTypes,s=(r=r!=null)?Zo(t,i):Ni),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Jh,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function A0(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Jh.enqueueReplaceState(e,e.state,null)}function rg(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=US,H_(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=xn(s):(s=rn(e)?Ps:Nt.current,i.context=Zo(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(ng(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Jh.enqueueReplaceState(i,i.state,null),ih(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function rl(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(O(309));var r=n.stateNode}if(!r)throw Error(O(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===US&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(O(284));if(!n._owner)throw Error(O(290,t))}return t}function Qc(t,e){throw t=Object.prototype.toString.call(e),Error(O(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function P0(t){var e=t._init;return e(t._payload)}function BS(t){function e(_,m){if(t){var g=_.deletions;g===null?(_.deletions=[m],_.flags|=16):g.push(m)}}function n(_,m){if(!t)return null;for(;m!==null;)e(_,m),m=m.sibling;return null}function r(_,m){for(_=new Map;m!==null;)m.key!==null?_.set(m.key,m):_.set(m.index,m),m=m.sibling;return _}function i(_,m){return _=ki(_,m),_.index=0,_.sibling=null,_}function s(_,m,g){return _.index=g,t?(g=_.alternate,g!==null?(g=g.index,g<m?(_.flags|=2,m):g):(_.flags|=2,m)):(_.flags|=1048576,m)}function o(_){return t&&_.alternate===null&&(_.flags|=2),_}function a(_,m,g,T){return m===null||m.tag!==6?(m=Bp(g,_.mode,T),m.return=_,m):(m=i(m,g),m.return=_,m)}function l(_,m,g,T){var P=g.type;return P===To?c(_,m,g.props.children,T,g.key):m!==null&&(m.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===ci&&P0(P)===m.type)?(T=i(m,g.props),T.ref=rl(_,m,g),T.return=_,T):(T=bd(g.type,g.key,g.props,null,_.mode,T),T.ref=rl(_,m,g),T.return=_,T)}function u(_,m,g,T){return m===null||m.tag!==4||m.stateNode.containerInfo!==g.containerInfo||m.stateNode.implementation!==g.implementation?(m=zp(g,_.mode,T),m.return=_,m):(m=i(m,g.children||[]),m.return=_,m)}function c(_,m,g,T,P){return m===null||m.tag!==7?(m=Es(g,_.mode,T,P),m.return=_,m):(m=i(m,g),m.return=_,m)}function h(_,m,g){if(typeof m=="string"&&m!==""||typeof m=="number")return m=Bp(""+m,_.mode,g),m.return=_,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Fc:return g=bd(m.type,m.key,m.props,null,_.mode,g),g.ref=rl(_,null,m),g.return=_,g;case Eo:return m=zp(m,_.mode,g),m.return=_,m;case ci:var T=m._init;return h(_,T(m._payload),g)}if(yl(m)||Ja(m))return m=Es(m,_.mode,g,null),m.return=_,m;Qc(_,m)}return null}function f(_,m,g,T){var P=m!==null?m.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return P!==null?null:a(_,m,""+g,T);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Fc:return g.key===P?l(_,m,g,T):null;case Eo:return g.key===P?u(_,m,g,T):null;case ci:return P=g._init,f(_,m,P(g._payload),T)}if(yl(g)||Ja(g))return P!==null?null:c(_,m,g,T,null);Qc(_,g)}return null}function p(_,m,g,T,P){if(typeof T=="string"&&T!==""||typeof T=="number")return _=_.get(g)||null,a(m,_,""+T,P);if(typeof T=="object"&&T!==null){switch(T.$$typeof){case Fc:return _=_.get(T.key===null?g:T.key)||null,l(m,_,T,P);case Eo:return _=_.get(T.key===null?g:T.key)||null,u(m,_,T,P);case ci:var C=T._init;return p(_,m,g,C(T._payload),P)}if(yl(T)||Ja(T))return _=_.get(g)||null,c(m,_,T,P,null);Qc(m,T)}return null}function w(_,m,g,T){for(var P=null,C=null,y=m,I=m=0,A=null;y!==null&&I<g.length;I++){y.index>I?(A=y,y=null):A=y.sibling;var b=f(_,y,g[I],T);if(b===null){y===null&&(y=A);break}t&&y&&b.alternate===null&&e(_,y),m=s(b,m,I),C===null?P=b:C.sibling=b,C=b,y=A}if(I===g.length)return n(_,y),ke&&rs(_,I),P;if(y===null){for(;I<g.length;I++)y=h(_,g[I],T),y!==null&&(m=s(y,m,I),C===null?P=y:C.sibling=y,C=y);return ke&&rs(_,I),P}for(y=r(_,y);I<g.length;I++)A=p(y,_,I,g[I],T),A!==null&&(t&&A.alternate!==null&&y.delete(A.key===null?I:A.key),m=s(A,m,I),C===null?P=A:C.sibling=A,C=A);return t&&y.forEach(function(M){return e(_,M)}),ke&&rs(_,I),P}function v(_,m,g,T){var P=Ja(g);if(typeof P!="function")throw Error(O(150));if(g=P.call(g),g==null)throw Error(O(151));for(var C=P=null,y=m,I=m=0,A=null,b=g.next();y!==null&&!b.done;I++,b=g.next()){y.index>I?(A=y,y=null):A=y.sibling;var M=f(_,y,b.value,T);if(M===null){y===null&&(y=A);break}t&&y&&M.alternate===null&&e(_,y),m=s(M,m,I),C===null?P=M:C.sibling=M,C=M,y=A}if(b.done)return n(_,y),ke&&rs(_,I),P;if(y===null){for(;!b.done;I++,b=g.next())b=h(_,b.value,T),b!==null&&(m=s(b,m,I),C===null?P=b:C.sibling=b,C=b);return ke&&rs(_,I),P}for(y=r(_,y);!b.done;I++,b=g.next())b=p(y,_,I,b.value,T),b!==null&&(t&&b.alternate!==null&&y.delete(b.key===null?I:b.key),m=s(b,m,I),C===null?P=b:C.sibling=b,C=b);return t&&y.forEach(function(q){return e(_,q)}),ke&&rs(_,I),P}function E(_,m,g,T){if(typeof g=="object"&&g!==null&&g.type===To&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Fc:e:{for(var P=g.key,C=m;C!==null;){if(C.key===P){if(P=g.type,P===To){if(C.tag===7){n(_,C.sibling),m=i(C,g.props.children),m.return=_,_=m;break e}}else if(C.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===ci&&P0(P)===C.type){n(_,C.sibling),m=i(C,g.props),m.ref=rl(_,C,g),m.return=_,_=m;break e}n(_,C);break}else e(_,C);C=C.sibling}g.type===To?(m=Es(g.props.children,_.mode,T,g.key),m.return=_,_=m):(T=bd(g.type,g.key,g.props,null,_.mode,T),T.ref=rl(_,m,g),T.return=_,_=T)}return o(_);case Eo:e:{for(C=g.key;m!==null;){if(m.key===C)if(m.tag===4&&m.stateNode.containerInfo===g.containerInfo&&m.stateNode.implementation===g.implementation){n(_,m.sibling),m=i(m,g.children||[]),m.return=_,_=m;break e}else{n(_,m);break}else e(_,m);m=m.sibling}m=zp(g,_.mode,T),m.return=_,_=m}return o(_);case ci:return C=g._init,E(_,m,C(g._payload),T)}if(yl(g))return w(_,m,g,T);if(Ja(g))return v(_,m,g,T);Qc(_,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,m!==null&&m.tag===6?(n(_,m.sibling),m=i(m,g),m.return=_,_=m):(n(_,m),m=Bp(g,_.mode,T),m.return=_,_=m),o(_)):n(_,m)}return E}var ta=BS(!0),zS=BS(!1),ec={},pr=Gi(ec),uu=Gi(ec),cu=Gi(ec);function ps(t){if(t===ec)throw Error(O(174));return t}function K_(t,e){switch(we(cu,e),we(uu,t),we(pr,ec),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Vm(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Vm(e,t)}Ae(pr),we(pr,e)}function na(){Ae(pr),Ae(uu),Ae(cu)}function jS(t){ps(cu.current);var e=ps(pr.current),n=Vm(e,t.type);e!==n&&(we(uu,t),we(pr,n))}function Q_(t){uu.current===t&&(Ae(pr),Ae(uu))}var Oe=Gi(0);function sh(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Vp=[];function Y_(){for(var t=0;t<Vp.length;t++)Vp[t]._workInProgressVersionPrimary=null;Vp.length=0}var Rd=Hr.ReactCurrentDispatcher,Lp=Hr.ReactCurrentBatchConfig,ks=0,Ve=null,Ze=null,st=null,oh=!1,Ol=!1,du=0,ED=0;function Rt(){throw Error(O(321))}function X_(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!qn(t[n],e[n]))return!1;return!0}function J_(t,e,n,r,i,s){if(ks=s,Ve=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Rd.current=t===null||t.memoizedState===null?AD:PD,t=n(r,i),Ol){s=0;do{if(Ol=!1,du=0,25<=s)throw Error(O(301));s+=1,st=Ze=null,e.updateQueue=null,Rd.current=CD,t=n(r,i)}while(Ol)}if(Rd.current=ah,e=Ze!==null&&Ze.next!==null,ks=0,st=Ze=Ve=null,oh=!1,e)throw Error(O(300));return t}function Z_(){var t=du!==0;return du=0,t}function Zn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return st===null?Ve.memoizedState=st=t:st=st.next=t,st}function Dn(){if(Ze===null){var t=Ve.alternate;t=t!==null?t.memoizedState:null}else t=Ze.next;var e=st===null?Ve.memoizedState:st.next;if(e!==null)st=e,Ze=t;else{if(t===null)throw Error(O(310));Ze=t,t={memoizedState:Ze.memoizedState,baseState:Ze.baseState,baseQueue:Ze.baseQueue,queue:Ze.queue,next:null},st===null?Ve.memoizedState=st=t:st=st.next=t}return st}function hu(t,e){return typeof e=="function"?e(t):e}function Mp(t){var e=Dn(),n=e.queue;if(n===null)throw Error(O(311));n.lastRenderedReducer=t;var r=Ze,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((ks&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var h={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,o=r):l=l.next=h,Ve.lanes|=c,bs|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,qn(r,e.memoizedState)||(Jt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Ve.lanes|=s,bs|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Fp(t){var e=Dn(),n=e.queue;if(n===null)throw Error(O(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);qn(s,e.memoizedState)||(Jt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function qS(){}function WS(t,e){var n=Ve,r=Dn(),i=e(),s=!qn(r.memoizedState,i);if(s&&(r.memoizedState=i,Jt=!0),r=r.queue,ey(KS.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||st!==null&&st.memoizedState.tag&1){if(n.flags|=2048,fu(9,HS.bind(null,n,r,i,e),void 0,null),lt===null)throw Error(O(349));(ks&30)!==0||GS(n,e,i)}return i}function GS(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ve.updateQueue,e===null?(e={lastEffect:null,stores:null},Ve.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function HS(t,e,n,r){e.value=n,e.getSnapshot=r,QS(e)&&YS(t)}function KS(t,e,n){return n(function(){QS(e)&&YS(t)})}function QS(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!qn(t,n)}catch{return!0}}function YS(t){var e=Br(t,1);e!==null&&zn(e,t,1,-1)}function C0(t){var e=Zn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:hu,lastRenderedState:t},e.queue=t,t=t.dispatch=RD.bind(null,Ve,t),[e.memoizedState,t]}function fu(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Ve.updateQueue,e===null?(e={lastEffect:null,stores:null},Ve.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function XS(){return Dn().memoizedState}function Ad(t,e,n,r){var i=Zn();Ve.flags|=t,i.memoizedState=fu(1|e,n,void 0,r===void 0?null:r)}function Zh(t,e,n,r){var i=Dn();r=r===void 0?null:r;var s=void 0;if(Ze!==null){var o=Ze.memoizedState;if(s=o.destroy,r!==null&&X_(r,o.deps)){i.memoizedState=fu(e,n,s,r);return}}Ve.flags|=t,i.memoizedState=fu(1|e,n,s,r)}function k0(t,e){return Ad(8390656,8,t,e)}function ey(t,e){return Zh(2048,8,t,e)}function JS(t,e){return Zh(4,2,t,e)}function ZS(t,e){return Zh(4,4,t,e)}function e1(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function t1(t,e,n){return n=n!=null?n.concat([t]):null,Zh(4,4,e1.bind(null,e,t),n)}function ty(){}function n1(t,e){var n=Dn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&X_(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function r1(t,e){var n=Dn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&X_(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function i1(t,e,n){return(ks&21)===0?(t.baseState&&(t.baseState=!1,Jt=!0),t.memoizedState=n):(qn(n,e)||(n=aS(),Ve.lanes|=n,bs|=n,t.baseState=!0),e)}function TD(t,e){var n=me;me=n!==0&&4>n?n:4,t(!0);var r=Lp.transition;Lp.transition={};try{t(!1),e()}finally{me=n,Lp.transition=r}}function s1(){return Dn().memoizedState}function SD(t,e,n){var r=Ci(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},o1(t))a1(e,n);else if(n=MS(t,e,n,r),n!==null){var i=zt();zn(n,t,r,i),l1(n,e,r)}}function RD(t,e,n){var r=Ci(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(o1(t))a1(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,qn(a,o)){var l=e.interleaved;l===null?(i.next=i,G_(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=MS(t,e,i,r),n!==null&&(i=zt(),zn(n,t,r,i),l1(n,e,r))}}function o1(t){var e=t.alternate;return t===Ve||e!==null&&e===Ve}function a1(t,e){Ol=oh=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function l1(t,e,n){if((n&4194240)!==0){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,D_(t,n)}}var ah={readContext:xn,useCallback:Rt,useContext:Rt,useEffect:Rt,useImperativeHandle:Rt,useInsertionEffect:Rt,useLayoutEffect:Rt,useMemo:Rt,useReducer:Rt,useRef:Rt,useState:Rt,useDebugValue:Rt,useDeferredValue:Rt,useTransition:Rt,useMutableSource:Rt,useSyncExternalStore:Rt,useId:Rt,unstable_isNewReconciler:!1},AD={readContext:xn,useCallback:function(t,e){return Zn().memoizedState=[t,e===void 0?null:e],t},useContext:xn,useEffect:k0,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ad(4194308,4,e1.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ad(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ad(4,2,t,e)},useMemo:function(t,e){var n=Zn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Zn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=SD.bind(null,Ve,t),[r.memoizedState,t]},useRef:function(t){var e=Zn();return t={current:t},e.memoizedState=t},useState:C0,useDebugValue:ty,useDeferredValue:function(t){return Zn().memoizedState=t},useTransition:function(){var t=C0(!1),e=t[0];return t=TD.bind(null,t[1]),Zn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Ve,i=Zn();if(ke){if(n===void 0)throw Error(O(407));n=n()}else{if(n=e(),lt===null)throw Error(O(349));(ks&30)!==0||GS(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,k0(KS.bind(null,r,s,t),[t]),r.flags|=2048,fu(9,HS.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Zn(),e=lt.identifierPrefix;if(ke){var n=br,r=kr;n=(r&~(1<<32-Bn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=du++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=ED++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},PD={readContext:xn,useCallback:n1,useContext:xn,useEffect:ey,useImperativeHandle:t1,useInsertionEffect:JS,useLayoutEffect:ZS,useMemo:r1,useReducer:Mp,useRef:XS,useState:function(){return Mp(hu)},useDebugValue:ty,useDeferredValue:function(t){var e=Dn();return i1(e,Ze.memoizedState,t)},useTransition:function(){var t=Mp(hu)[0],e=Dn().memoizedState;return[t,e]},useMutableSource:qS,useSyncExternalStore:WS,useId:s1,unstable_isNewReconciler:!1},CD={readContext:xn,useCallback:n1,useContext:xn,useEffect:ey,useImperativeHandle:t1,useInsertionEffect:JS,useLayoutEffect:ZS,useMemo:r1,useReducer:Fp,useRef:XS,useState:function(){return Fp(hu)},useDebugValue:ty,useDeferredValue:function(t){var e=Dn();return Ze===null?e.memoizedState=t:i1(e,Ze.memoizedState,t)},useTransition:function(){var t=Fp(hu)[0],e=Dn().memoizedState;return[t,e]},useMutableSource:qS,useSyncExternalStore:WS,useId:s1,unstable_isNewReconciler:!1};function ra(t,e){try{var n="",r=e;do n+=nx(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Up(t,e,n){return{value:t,source:null,stack:n!=null?n:null,digest:e!=null?e:null}}function ig(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var kD=typeof WeakMap=="function"?WeakMap:Map;function u1(t,e,n){n=Lr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){uh||(uh=!0,pg=r),ig(t,e)},n}function c1(t,e,n){n=Lr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){ig(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){ig(t,e),typeof r!="function"&&(Pi===null?Pi=new Set([this]):Pi.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function b0(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new kD;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=jD.bind(null,t,e,n),e.then(t,t))}function x0(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function D0(t,e,n,r,i){return(t.mode&1)===0?(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Lr(-1,1),e.tag=2,Ai(n,e,1))),n.lanes|=1),t):(t.flags|=65536,t.lanes=i,t)}var bD=Hr.ReactCurrentOwner,Jt=!1;function Mt(t,e,n,r){e.child=t===null?zS(e,null,n,r):ta(e,t.child,n,r)}function N0(t,e,n,r,i){n=n.render;var s=e.ref;return $o(e,i),r=J_(t,e,n,r,s,i),n=Z_(),t!==null&&!Jt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,zr(t,e,i)):(ke&&n&&$_(e),e.flags|=1,Mt(t,e,r,i),e.child)}function O0(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!uy(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,d1(t,e,s,r,i)):(t=bd(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,(t.lanes&i)===0){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:su,n(o,r)&&t.ref===e.ref)return zr(t,e,i)}return e.flags|=1,t=ki(s,r),t.ref=e.ref,t.return=e,e.child=t}function d1(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(su(s,r)&&t.ref===e.ref)if(Jt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)(t.flags&131072)!==0&&(Jt=!0);else return e.lanes=t.lanes,zr(t,e,i)}return sg(t,e,n,r,i)}function h1(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if((e.mode&1)===0)e.memoizedState={baseLanes:0,cachePool:null,transitions:null},we(No,un),un|=n;else{if((n&1073741824)===0)return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,we(No,un),un|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,we(No,un),un|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,we(No,un),un|=r;return Mt(t,e,i,n),e.child}function f1(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function sg(t,e,n,r,i){var s=rn(n)?Ps:Nt.current;return s=Zo(e,s),$o(e,i),n=J_(t,e,n,r,s,i),r=Z_(),t!==null&&!Jt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,zr(t,e,i)):(ke&&r&&$_(e),e.flags|=1,Mt(t,e,n,i),e.child)}function V0(t,e,n,r,i){if(rn(n)){var s=!0;Zd(e)}else s=!1;if($o(e,i),e.stateNode===null)Pd(t,e),$S(e,n,r),rg(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=xn(u):(u=rn(n)?Ps:Nt.current,u=Zo(e,u));var c=n.getDerivedStateFromProps,h=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&A0(e,o,r,u),di=!1;var f=e.memoizedState;o.state=f,ih(e,r,o,i),l=e.memoizedState,a!==r||f!==l||nn.current||di?(typeof c=="function"&&(ng(e,n,c,r),l=e.memoizedState),(a=di||R0(e,n,a,r,f,l,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,FS(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:Fn(e.type,a),o.props=u,h=e.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=xn(l):(l=rn(n)?Ps:Nt.current,l=Zo(e,l));var p=n.getDerivedStateFromProps;(c=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||f!==l)&&A0(e,o,r,l),di=!1,f=e.memoizedState,o.state=f,ih(e,r,o,i);var w=e.memoizedState;a!==h||f!==w||nn.current||di?(typeof p=="function"&&(ng(e,n,p,r),w=e.memoizedState),(u=di||R0(e,n,u,r,f,w,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,w,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,w,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=w),o.props=r,o.state=w,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),r=!1)}return og(t,e,n,r,s,i)}function og(t,e,n,r,i,s){f1(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&w0(e,n,!1),zr(t,e,s);r=e.stateNode,bD.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=ta(e,t.child,null,s),e.child=ta(e,null,a,s)):Mt(t,e,a,s),e.memoizedState=r.state,i&&w0(e,n,!0),e.child}function p1(t){var e=t.stateNode;e.pendingContext?v0(t,e.pendingContext,e.pendingContext!==e.context):e.context&&v0(t,e.context,!1),K_(t,e.containerInfo)}function L0(t,e,n,r,i){return ea(),z_(i),e.flags|=256,Mt(t,e,n,r),e.child}var ag={dehydrated:null,treeContext:null,retryLane:0};function lg(t){return{baseLanes:t,cachePool:null,transitions:null}}function m1(t,e,n){var r=e.pendingProps,i=Oe.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),we(Oe,i&1),t===null)return eg(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((e.mode&1)===0?e.lanes=1:t.data==="$!"?e.lanes=8:e.lanes=1073741824,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},(r&1)===0&&s!==null?(s.childLanes=0,s.pendingProps=o):s=nf(o,r,0,null),t=Es(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=lg(n),e.memoizedState=ag,t):ny(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return xD(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return(o&1)===0&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=ki(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=ki(a,s):(s=Es(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?lg(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=ag,r}return s=t.child,t=s.sibling,r=ki(s,{mode:"visible",children:r.children}),(e.mode&1)===0&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function ny(t,e){return e=nf({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Yc(t,e,n,r){return r!==null&&z_(r),ta(e,t.child,null,n),t=ny(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function xD(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Up(Error(O(422))),Yc(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=nf({mode:"visible",children:r.children},i,0,null),s=Es(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,(e.mode&1)!==0&&ta(e,t.child,null,o),e.child.memoizedState=lg(o),e.memoizedState=ag,s);if((e.mode&1)===0)return Yc(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(O(419)),r=Up(s,r,void 0),Yc(t,e,o,r)}if(a=(o&t.childLanes)!==0,Jt||a){if(r=lt,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(r.suspendedLanes|o))!==0?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Br(t,i),zn(r,t,i,-1))}return ly(),r=Up(Error(O(421))),Yc(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=qD.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,dn=Ri(i.nextSibling),fn=e,ke=!0,$n=null,t!==null&&(En[Tn++]=kr,En[Tn++]=br,En[Tn++]=Cs,kr=t.id,br=t.overflow,Cs=e),e=ny(e,r.children),e.flags|=4096,e)}function M0(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),tg(t.return,e,n)}function $p(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function g1(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Mt(t,e,r.children,n),r=Oe.current,(r&2)!==0)r=r&1|2,e.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&M0(t,n,e);else if(t.tag===19)M0(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(we(Oe,r),(e.mode&1)===0)e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&sh(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),$p(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&sh(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}$p(e,!0,n,null,s);break;case"together":$p(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Pd(t,e){(e.mode&1)===0&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function zr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),bs|=e.lanes,(n&e.childLanes)===0)return null;if(t!==null&&e.child!==t.child)throw Error(O(153));if(e.child!==null){for(t=e.child,n=ki(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=ki(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function DD(t,e,n){switch(e.tag){case 3:p1(e),ea();break;case 5:jS(e);break;case 1:rn(e.type)&&Zd(e);break;case 4:K_(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;we(nh,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(we(Oe,Oe.current&1),e.flags|=128,null):(n&e.child.childLanes)!==0?m1(t,e,n):(we(Oe,Oe.current&1),t=zr(t,e,n),t!==null?t.sibling:null);we(Oe,Oe.current&1);break;case 19:if(r=(n&e.childLanes)!==0,(t.flags&128)!==0){if(r)return g1(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),we(Oe,Oe.current),r)break;return null;case 22:case 23:return e.lanes=0,h1(t,e,n)}return zr(t,e,n)}var _1,ug,y1,v1;_1=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ug=function(){};y1=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,ps(pr.current);var s=null;switch(n){case"input":i=xm(t,i),r=xm(t,r),s=[];break;case"select":i=Le({},i,{value:void 0}),r=Le({},r,{value:void 0}),s=[];break;case"textarea":i=Om(t,i),r=Om(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Xd)}Lm(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Jl.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Jl.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&Te("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};v1=function(t,e,n,r){n!==r&&(e.flags|=4)};function il(t,e){if(!ke)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function At(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function ND(t,e,n){var r=e.pendingProps;switch(B_(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return At(e),null;case 1:return rn(e.type)&&Jd(),At(e),null;case 3:return r=e.stateNode,na(),Ae(nn),Ae(Nt),Y_(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Kc(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,$n!==null&&(_g($n),$n=null))),ug(t,e),At(e),null;case 5:Q_(e);var i=ps(cu.current);if(n=e.type,t!==null&&e.stateNode!=null)y1(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(O(166));return At(e),null}if(t=ps(pr.current),Kc(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[er]=e,r[lu]=s,t=(e.mode&1)!==0,n){case"dialog":Te("cancel",r),Te("close",r);break;case"iframe":case"object":case"embed":Te("load",r);break;case"video":case"audio":for(i=0;i<wl.length;i++)Te(wl[i],r);break;case"source":Te("error",r);break;case"img":case"image":case"link":Te("error",r),Te("load",r);break;case"details":Te("toggle",r);break;case"input":Gw(r,s),Te("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Te("invalid",r);break;case"textarea":Kw(r,s),Te("invalid",r)}Lm(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Hc(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Hc(r.textContent,a,t),i=["children",""+a]):Jl.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Te("scroll",r)}switch(n){case"input":Uc(r),Hw(r,s,!0);break;case"textarea":Uc(r),Qw(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Xd)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=GT(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[er]=e,t[lu]=r,_1(t,e,!1,!1),e.stateNode=t;e:{switch(o=Mm(n,r),n){case"dialog":Te("cancel",t),Te("close",t),i=r;break;case"iframe":case"object":case"embed":Te("load",t),i=r;break;case"video":case"audio":for(i=0;i<wl.length;i++)Te(wl[i],t);i=r;break;case"source":Te("error",t),i=r;break;case"img":case"image":case"link":Te("error",t),Te("load",t),i=r;break;case"details":Te("toggle",t),i=r;break;case"input":Gw(t,r),i=xm(t,r),Te("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Le({},r,{value:void 0}),Te("invalid",t);break;case"textarea":Kw(t,r),i=Om(t,r),Te("invalid",t);break;default:i=r}Lm(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?QT(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&HT(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Zl(t,l):typeof l=="number"&&Zl(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Jl.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Te("scroll",t):l!=null&&A_(t,s,l,o))}switch(n){case"input":Uc(t),Hw(t,r,!1);break;case"textarea":Uc(t),Qw(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Di(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Lo(t,!!r.multiple,s,!1):r.defaultValue!=null&&Lo(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Xd)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return At(e),null;case 6:if(t&&e.stateNode!=null)v1(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(O(166));if(n=ps(cu.current),ps(pr.current),Kc(e)){if(r=e.stateNode,n=e.memoizedProps,r[er]=e,(s=r.nodeValue!==n)&&(t=fn,t!==null))switch(t.tag){case 3:Hc(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Hc(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[er]=e,e.stateNode=r}return At(e),null;case 13:if(Ae(Oe),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ke&&dn!==null&&(e.mode&1)!==0&&(e.flags&128)===0)LS(),ea(),e.flags|=98560,s=!1;else if(s=Kc(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(O(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(O(317));s[er]=e}else ea(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;At(e),s=!1}else $n!==null&&(_g($n),$n=null),s=!0;if(!s)return e.flags&65536?e:null}return(e.flags&128)!==0?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,(e.mode&1)!==0&&(t===null||(Oe.current&1)!==0?tt===0&&(tt=3):ly())),e.updateQueue!==null&&(e.flags|=4),At(e),null);case 4:return na(),ug(t,e),t===null&&ou(e.stateNode.containerInfo),At(e),null;case 10:return W_(e.type._context),At(e),null;case 17:return rn(e.type)&&Jd(),At(e),null;case 19:if(Ae(Oe),s=e.memoizedState,s===null)return At(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)il(s,!1);else{if(tt!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(o=sh(t),o!==null){for(e.flags|=128,il(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return we(Oe,Oe.current&1|2),e.child}t=t.sibling}s.tail!==null&&He()>ia&&(e.flags|=128,r=!0,il(s,!1),e.lanes=4194304)}else{if(!r)if(t=sh(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),il(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ke)return At(e),null}else 2*He()-s.renderingStartTime>ia&&n!==1073741824&&(e.flags|=128,r=!0,il(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=He(),e.sibling=null,n=Oe.current,we(Oe,r?n&1|2:n&1),e):(At(e),null);case 22:case 23:return ay(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&(e.mode&1)!==0?(un&1073741824)!==0&&(At(e),e.subtreeFlags&6&&(e.flags|=8192)):At(e),null;case 24:return null;case 25:return null}throw Error(O(156,e.tag))}function OD(t,e){switch(B_(e),e.tag){case 1:return rn(e.type)&&Jd(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return na(),Ae(nn),Ae(Nt),Y_(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 5:return Q_(e),null;case 13:if(Ae(Oe),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(O(340));ea()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Ae(Oe),null;case 4:return na(),null;case 10:return W_(e.type._context),null;case 22:case 23:return ay(),null;case 24:return null;default:return null}}var Xc=!1,Ct=!1,VD=typeof WeakSet=="function"?WeakSet:Set,z=null;function Do(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Fe(t,e,r)}else n.current=null}function cg(t,e,n){try{n()}catch(r){Fe(t,e,r)}}var F0=!1;function LD(t,e){if(Hm=Kd,t=TS(),U_(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,h=t,f=null;t:for(;;){for(var p;h!==n||i!==0&&h.nodeType!==3||(a=o+i),h!==s||r!==0&&h.nodeType!==3||(l=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(p=h.firstChild)!==null;)f=h,h=p;for(;;){if(h===t)break t;if(f===n&&++u===i&&(a=o),f===s&&++c===r&&(l=o),(p=h.nextSibling)!==null)break;h=f,f=h.parentNode}h=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Km={focusedElem:t,selectionRange:n},Kd=!1,z=e;z!==null;)if(e=z,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,z=t;else for(;z!==null;){e=z;try{var w=e.alternate;if((e.flags&1024)!==0)switch(e.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var v=w.memoizedProps,E=w.memoizedState,_=e.stateNode,m=_.getSnapshotBeforeUpdate(e.elementType===e.type?v:Fn(e.type,v),E);_.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(O(163))}}catch(T){Fe(e,e.return,T)}if(t=e.sibling,t!==null){t.return=e.return,z=t;break}z=e.return}return w=F0,F0=!1,w}function Vl(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&cg(e,n,s)}i=i.next}while(i!==r)}}function ef(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function dg(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function w1(t){var e=t.alternate;e!==null&&(t.alternate=null,w1(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[er],delete e[lu],delete e[Xm],delete e[yD],delete e[vD])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function I1(t){return t.tag===5||t.tag===3||t.tag===4}function U0(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||I1(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function hg(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Xd));else if(r!==4&&(t=t.child,t!==null))for(hg(t,e,n),t=t.sibling;t!==null;)hg(t,e,n),t=t.sibling}function fg(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(fg(t,e,n),t=t.sibling;t!==null;)fg(t,e,n),t=t.sibling}var gt=null,Un=!1;function si(t,e,n){for(n=n.child;n!==null;)E1(t,e,n),n=n.sibling}function E1(t,e,n){if(fr&&typeof fr.onCommitFiberUnmount=="function")try{fr.onCommitFiberUnmount(Gh,n)}catch{}switch(n.tag){case 5:Ct||Do(n,e);case 6:var r=gt,i=Un;gt=null,si(t,e,n),gt=r,Un=i,gt!==null&&(Un?(t=gt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):gt.removeChild(n.stateNode));break;case 18:gt!==null&&(Un?(t=gt,n=n.stateNode,t.nodeType===8?Np(t.parentNode,n):t.nodeType===1&&Np(t,n),ru(t)):Np(gt,n.stateNode));break;case 4:r=gt,i=Un,gt=n.stateNode.containerInfo,Un=!0,si(t,e,n),gt=r,Un=i;break;case 0:case 11:case 14:case 15:if(!Ct&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&((s&2)!==0||(s&4)!==0)&&cg(n,e,o),i=i.next}while(i!==r)}si(t,e,n);break;case 1:if(!Ct&&(Do(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Fe(n,e,a)}si(t,e,n);break;case 21:si(t,e,n);break;case 22:n.mode&1?(Ct=(r=Ct)||n.memoizedState!==null,si(t,e,n),Ct=r):si(t,e,n);break;default:si(t,e,n)}}function $0(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new VD),e.forEach(function(r){var i=WD.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Mn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:gt=a.stateNode,Un=!1;break e;case 3:gt=a.stateNode.containerInfo,Un=!0;break e;case 4:gt=a.stateNode.containerInfo,Un=!0;break e}a=a.return}if(gt===null)throw Error(O(160));E1(s,o,i),gt=null,Un=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){Fe(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)T1(e,t),e=e.sibling}function T1(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Mn(e,t),Jn(t),r&4){try{Vl(3,t,t.return),ef(3,t)}catch(v){Fe(t,t.return,v)}try{Vl(5,t,t.return)}catch(v){Fe(t,t.return,v)}}break;case 1:Mn(e,t),Jn(t),r&512&&n!==null&&Do(n,n.return);break;case 5:if(Mn(e,t),Jn(t),r&512&&n!==null&&Do(n,n.return),t.flags&32){var i=t.stateNode;try{Zl(i,"")}catch(v){Fe(t,t.return,v)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&qT(i,s),Mm(a,o);var u=Mm(a,s);for(o=0;o<l.length;o+=2){var c=l[o],h=l[o+1];c==="style"?QT(i,h):c==="dangerouslySetInnerHTML"?HT(i,h):c==="children"?Zl(i,h):A_(i,c,h,u)}switch(a){case"input":Dm(i,s);break;case"textarea":WT(i,s);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Lo(i,!!s.multiple,p,!1):f!==!!s.multiple&&(s.defaultValue!=null?Lo(i,!!s.multiple,s.defaultValue,!0):Lo(i,!!s.multiple,s.multiple?[]:"",!1))}i[lu]=s}catch(v){Fe(t,t.return,v)}}break;case 6:if(Mn(e,t),Jn(t),r&4){if(t.stateNode===null)throw Error(O(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(v){Fe(t,t.return,v)}}break;case 3:if(Mn(e,t),Jn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ru(e.containerInfo)}catch(v){Fe(t,t.return,v)}break;case 4:Mn(e,t),Jn(t);break;case 13:Mn(e,t),Jn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(sy=He())),r&4&&$0(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(Ct=(u=Ct)||c,Mn(e,t),Ct=u):Mn(e,t),Jn(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&(t.mode&1)!==0)for(z=t,c=t.child;c!==null;){for(h=z=c;z!==null;){switch(f=z,p=f.child,f.tag){case 0:case 11:case 14:case 15:Vl(4,f,f.return);break;case 1:Do(f,f.return);var w=f.stateNode;if(typeof w.componentWillUnmount=="function"){r=f,n=f.return;try{e=r,w.props=e.memoizedProps,w.state=e.memoizedState,w.componentWillUnmount()}catch(v){Fe(r,n,v)}}break;case 5:Do(f,f.return);break;case 22:if(f.memoizedState!==null){z0(h);continue}}p!==null?(p.return=f,z=p):z0(h)}c=c.sibling}e:for(c=null,h=t;;){if(h.tag===5){if(c===null){c=h;try{i=h.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=KT("display",o))}catch(v){Fe(t,t.return,v)}}}else if(h.tag===6){if(c===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(v){Fe(t,t.return,v)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Mn(e,t),Jn(t),r&4&&$0(t);break;case 21:break;default:Mn(e,t),Jn(t)}}function Jn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(I1(n)){var r=n;break e}n=n.return}throw Error(O(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Zl(i,""),r.flags&=-33);var s=U0(t);fg(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=U0(t);hg(t,a,o);break;default:throw Error(O(161))}}catch(l){Fe(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function MD(t,e,n){z=t,S1(t)}function S1(t,e,n){for(var r=(t.mode&1)!==0;z!==null;){var i=z,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Xc;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Ct;a=Xc;var u=Ct;if(Xc=o,(Ct=l)&&!u)for(z=i;z!==null;)o=z,l=o.child,o.tag===22&&o.memoizedState!==null?j0(i):l!==null?(l.return=o,z=l):j0(i);for(;s!==null;)z=s,S1(s),s=s.sibling;z=i,Xc=a,Ct=u}B0(t)}else(i.subtreeFlags&8772)!==0&&s!==null?(s.return=i,z=s):B0(t)}}function B0(t){for(;z!==null;){var e=z;if((e.flags&8772)!==0){var n=e.alternate;try{if((e.flags&8772)!==0)switch(e.tag){case 0:case 11:case 15:Ct||ef(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Ct)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Fn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&S0(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}S0(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&ru(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(O(163))}Ct||e.flags&512&&dg(e)}catch(f){Fe(e,e.return,f)}}if(e===t){z=null;break}if(n=e.sibling,n!==null){n.return=e.return,z=n;break}z=e.return}}function z0(t){for(;z!==null;){var e=z;if(e===t){z=null;break}var n=e.sibling;if(n!==null){n.return=e.return,z=n;break}z=e.return}}function j0(t){for(;z!==null;){var e=z;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{ef(4,e)}catch(l){Fe(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){Fe(e,i,l)}}var s=e.return;try{dg(e)}catch(l){Fe(e,s,l)}break;case 5:var o=e.return;try{dg(e)}catch(l){Fe(e,o,l)}}}catch(l){Fe(e,e.return,l)}if(e===t){z=null;break}var a=e.sibling;if(a!==null){a.return=e.return,z=a;break}z=e.return}}var FD=Math.ceil,lh=Hr.ReactCurrentDispatcher,ry=Hr.ReactCurrentOwner,kn=Hr.ReactCurrentBatchConfig,he=0,lt=null,Je=null,wt=0,un=0,No=Gi(0),tt=0,pu=null,bs=0,tf=0,iy=0,Ll=null,Xt=null,sy=0,ia=1/0,Ar=null,uh=!1,pg=null,Pi=null,Jc=!1,vi=null,ch=0,Ml=0,mg=null,Cd=-1,kd=0;function zt(){return(he&6)!==0?He():Cd!==-1?Cd:Cd=He()}function Ci(t){return(t.mode&1)===0?1:(he&2)!==0&&wt!==0?wt&-wt:ID.transition!==null?(kd===0&&(kd=aS()),kd):(t=me,t!==0||(t=window.event,t=t===void 0?16:pS(t.type)),t)}function zn(t,e,n,r){if(50<Ml)throw Ml=0,mg=null,Error(O(185));Xu(t,n,r),((he&2)===0||t!==lt)&&(t===lt&&((he&2)===0&&(tf|=n),tt===4&&mi(t,wt)),sn(t,r),n===1&&he===0&&(e.mode&1)===0&&(ia=He()+500,Xh&&Hi()))}function sn(t,e){var n=t.callbackNode;Ix(t,e);var r=Hd(t,t===lt?wt:0);if(r===0)n!==null&&Jw(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Jw(n),e===1)t.tag===0?wD(q0.bind(null,t)):NS(q0.bind(null,t)),gD(function(){(he&6)===0&&Hi()}),n=null;else{switch(lS(r)){case 1:n=x_;break;case 4:n=sS;break;case 16:n=Gd;break;case 536870912:n=oS;break;default:n=Gd}n=D1(n,R1.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function R1(t,e){if(Cd=-1,kd=0,(he&6)!==0)throw Error(O(327));var n=t.callbackNode;if(Bo()&&t.callbackNode!==n)return null;var r=Hd(t,t===lt?wt:0);if(r===0)return null;if((r&30)!==0||(r&t.expiredLanes)!==0||e)e=dh(t,r);else{e=r;var i=he;he|=2;var s=P1();(lt!==t||wt!==e)&&(Ar=null,ia=He()+500,Is(t,e));do try{BD();break}catch(a){A1(t,a)}while(1);q_(),lh.current=s,he=i,Je!==null?e=0:(lt=null,wt=0,e=tt)}if(e!==0){if(e===2&&(i=zm(t),i!==0&&(r=i,e=gg(t,i))),e===1)throw n=pu,Is(t,0),mi(t,r),sn(t,He()),n;if(e===6)mi(t,r);else{if(i=t.current.alternate,(r&30)===0&&!UD(i)&&(e=dh(t,r),e===2&&(s=zm(t),s!==0&&(r=s,e=gg(t,s))),e===1))throw n=pu,Is(t,0),mi(t,r),sn(t,He()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(O(345));case 2:is(t,Xt,Ar);break;case 3:if(mi(t,r),(r&130023424)===r&&(e=sy+500-He(),10<e)){if(Hd(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){zt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Ym(is.bind(null,t,Xt,Ar),e);break}is(t,Xt,Ar);break;case 4:if(mi(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Bn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=He()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*FD(r/1960))-r,10<r){t.timeoutHandle=Ym(is.bind(null,t,Xt,Ar),r);break}is(t,Xt,Ar);break;case 5:is(t,Xt,Ar);break;default:throw Error(O(329))}}}return sn(t,He()),t.callbackNode===n?R1.bind(null,t):null}function gg(t,e){var n=Ll;return t.current.memoizedState.isDehydrated&&(Is(t,e).flags|=256),t=dh(t,e),t!==2&&(e=Xt,Xt=n,e!==null&&_g(e)),t}function _g(t){Xt===null?Xt=t:Xt.push.apply(Xt,t)}function UD(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!qn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function mi(t,e){for(e&=~iy,e&=~tf,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Bn(e),r=1<<n;t[n]=-1,e&=~r}}function q0(t){if((he&6)!==0)throw Error(O(327));Bo();var e=Hd(t,0);if((e&1)===0)return sn(t,He()),null;var n=dh(t,e);if(t.tag!==0&&n===2){var r=zm(t);r!==0&&(e=r,n=gg(t,r))}if(n===1)throw n=pu,Is(t,0),mi(t,e),sn(t,He()),n;if(n===6)throw Error(O(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,is(t,Xt,Ar),sn(t,He()),null}function oy(t,e){var n=he;he|=1;try{return t(e)}finally{he=n,he===0&&(ia=He()+500,Xh&&Hi())}}function xs(t){vi!==null&&vi.tag===0&&(he&6)===0&&Bo();var e=he;he|=1;var n=kn.transition,r=me;try{if(kn.transition=null,me=1,t)return t()}finally{me=r,kn.transition=n,he=e,(he&6)===0&&Hi()}}function ay(){un=No.current,Ae(No)}function Is(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,mD(n)),Je!==null)for(n=Je.return;n!==null;){var r=n;switch(B_(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Jd();break;case 3:na(),Ae(nn),Ae(Nt),Y_();break;case 5:Q_(r);break;case 4:na();break;case 13:Ae(Oe);break;case 19:Ae(Oe);break;case 10:W_(r.type._context);break;case 22:case 23:ay()}n=n.return}if(lt=t,Je=t=ki(t.current,null),wt=un=e,tt=0,pu=null,iy=tf=bs=0,Xt=Ll=null,fs!==null){for(e=0;e<fs.length;e++)if(n=fs[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}fs=null}return t}function A1(t,e){do{var n=Je;try{if(q_(),Rd.current=ah,oh){for(var r=Ve.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}oh=!1}if(ks=0,st=Ze=Ve=null,Ol=!1,du=0,ry.current=null,n===null||n.return===null){tt=1,pu=e,Je=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=wt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,h=c.tag;if((c.mode&1)===0&&(h===0||h===11||h===15)){var f=c.alternate;f?(c.updateQueue=f.updateQueue,c.memoizedState=f.memoizedState,c.lanes=f.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=x0(o);if(p!==null){p.flags&=-257,D0(p,o,a,s,e),p.mode&1&&b0(s,u,e),e=p,l=u;var w=e.updateQueue;if(w===null){var v=new Set;v.add(l),e.updateQueue=v}else w.add(l);break e}else{if((e&1)===0){b0(s,u,e),ly();break e}l=Error(O(426))}}else if(ke&&a.mode&1){var E=x0(o);if(E!==null){(E.flags&65536)===0&&(E.flags|=256),D0(E,o,a,s,e),z_(ra(l,a));break e}}s=l=ra(l,a),tt!==4&&(tt=2),Ll===null?Ll=[s]:Ll.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var _=u1(s,l,e);T0(s,_);break e;case 1:a=l;var m=s.type,g=s.stateNode;if((s.flags&128)===0&&(typeof m.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Pi===null||!Pi.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var T=c1(s,a,e);T0(s,T);break e}}s=s.return}while(s!==null)}k1(n)}catch(P){e=P,Je===n&&n!==null&&(Je=n=n.return);continue}break}while(1)}function P1(){var t=lh.current;return lh.current=ah,t===null?ah:t}function ly(){(tt===0||tt===3||tt===2)&&(tt=4),lt===null||(bs&268435455)===0&&(tf&268435455)===0||mi(lt,wt)}function dh(t,e){var n=he;he|=2;var r=P1();(lt!==t||wt!==e)&&(Ar=null,Is(t,e));do try{$D();break}catch(i){A1(t,i)}while(1);if(q_(),he=n,lh.current=r,Je!==null)throw Error(O(261));return lt=null,wt=0,tt}function $D(){for(;Je!==null;)C1(Je)}function BD(){for(;Je!==null&&!hx();)C1(Je)}function C1(t){var e=x1(t.alternate,t,un);t.memoizedProps=t.pendingProps,e===null?k1(t):Je=e,ry.current=null}function k1(t){var e=t;do{var n=e.alternate;if(t=e.return,(e.flags&32768)===0){if(n=ND(n,e,un),n!==null){Je=n;return}}else{if(n=OD(n,e),n!==null){n.flags&=32767,Je=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{tt=6,Je=null;return}}if(e=e.sibling,e!==null){Je=e;return}Je=e=t}while(e!==null);tt===0&&(tt=5)}function is(t,e,n){var r=me,i=kn.transition;try{kn.transition=null,me=1,zD(t,e,n,r)}finally{kn.transition=i,me=r}return null}function zD(t,e,n,r){do Bo();while(vi!==null);if((he&6)!==0)throw Error(O(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(O(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Ex(t,s),t===lt&&(Je=lt=null,wt=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||Jc||(Jc=!0,D1(Gd,function(){return Bo(),null})),s=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||s){s=kn.transition,kn.transition=null;var o=me;me=1;var a=he;he|=4,ry.current=null,LD(t,n),T1(n,t),lD(Km),Kd=!!Hm,Km=Hm=null,t.current=n,MD(n),fx(),he=a,me=o,kn.transition=s}else t.current=n;if(Jc&&(Jc=!1,vi=t,ch=i),s=t.pendingLanes,s===0&&(Pi=null),gx(n.stateNode),sn(t,He()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(uh)throw uh=!1,t=pg,pg=null,t;return(ch&1)!==0&&t.tag!==0&&Bo(),s=t.pendingLanes,(s&1)!==0?t===mg?Ml++:(Ml=0,mg=t):Ml=0,Hi(),null}function Bo(){if(vi!==null){var t=lS(ch),e=kn.transition,n=me;try{if(kn.transition=null,me=16>t?16:t,vi===null)var r=!1;else{if(t=vi,vi=null,ch=0,(he&6)!==0)throw Error(O(331));var i=he;for(he|=4,z=t.current;z!==null;){var s=z,o=s.child;if((z.flags&16)!==0){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(z=u;z!==null;){var c=z;switch(c.tag){case 0:case 11:case 15:Vl(8,c,s)}var h=c.child;if(h!==null)h.return=c,z=h;else for(;z!==null;){c=z;var f=c.sibling,p=c.return;if(w1(c),c===u){z=null;break}if(f!==null){f.return=p,z=f;break}z=p}}}var w=s.alternate;if(w!==null){var v=w.child;if(v!==null){w.child=null;do{var E=v.sibling;v.sibling=null,v=E}while(v!==null)}}z=s}}if((s.subtreeFlags&2064)!==0&&o!==null)o.return=s,z=o;else e:for(;z!==null;){if(s=z,(s.flags&2048)!==0)switch(s.tag){case 0:case 11:case 15:Vl(9,s,s.return)}var _=s.sibling;if(_!==null){_.return=s.return,z=_;break e}z=s.return}}var m=t.current;for(z=m;z!==null;){o=z;var g=o.child;if((o.subtreeFlags&2064)!==0&&g!==null)g.return=o,z=g;else e:for(o=m;z!==null;){if(a=z,(a.flags&2048)!==0)try{switch(a.tag){case 0:case 11:case 15:ef(9,a)}}catch(P){Fe(a,a.return,P)}if(a===o){z=null;break e}var T=a.sibling;if(T!==null){T.return=a.return,z=T;break e}z=a.return}}if(he=i,Hi(),fr&&typeof fr.onPostCommitFiberRoot=="function")try{fr.onPostCommitFiberRoot(Gh,t)}catch{}r=!0}return r}finally{me=n,kn.transition=e}}return!1}function W0(t,e,n){e=ra(n,e),e=u1(t,e,1),t=Ai(t,e,1),e=zt(),t!==null&&(Xu(t,1,e),sn(t,e))}function Fe(t,e,n){if(t.tag===3)W0(t,t,n);else for(;e!==null;){if(e.tag===3){W0(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Pi===null||!Pi.has(r))){t=ra(n,t),t=c1(e,t,1),e=Ai(e,t,1),t=zt(),e!==null&&(Xu(e,1,t),sn(e,t));break}}e=e.return}}function jD(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=zt(),t.pingedLanes|=t.suspendedLanes&n,lt===t&&(wt&n)===n&&(tt===4||tt===3&&(wt&130023424)===wt&&500>He()-sy?Is(t,0):iy|=n),sn(t,e)}function b1(t,e){e===0&&((t.mode&1)===0?e=1:(e=zc,zc<<=1,(zc&130023424)===0&&(zc=4194304)));var n=zt();t=Br(t,e),t!==null&&(Xu(t,e,n),sn(t,n))}function qD(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),b1(t,n)}function WD(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(O(314))}r!==null&&r.delete(e),b1(t,n)}var x1;x1=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||nn.current)Jt=!0;else{if((t.lanes&n)===0&&(e.flags&128)===0)return Jt=!1,DD(t,e,n);Jt=(t.flags&131072)!==0}else Jt=!1,ke&&(e.flags&1048576)!==0&&OS(e,th,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Pd(t,e),t=e.pendingProps;var i=Zo(e,Nt.current);$o(e,n),i=J_(null,e,r,t,i,n);var s=Z_();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,rn(r)?(s=!0,Zd(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,H_(e),i.updater=Jh,e.stateNode=i,i._reactInternals=e,rg(e,r,t,n),e=og(null,e,r,!0,s,n)):(e.tag=0,ke&&s&&$_(e),Mt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Pd(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=HD(r),t=Fn(r,t),i){case 0:e=sg(null,e,r,t,n);break e;case 1:e=V0(null,e,r,t,n);break e;case 11:e=N0(null,e,r,t,n);break e;case 14:e=O0(null,e,r,Fn(r.type,t),n);break e}throw Error(O(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Fn(r,i),sg(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Fn(r,i),V0(t,e,r,i,n);case 3:e:{if(p1(e),t===null)throw Error(O(387));r=e.pendingProps,s=e.memoizedState,i=s.element,FS(t,e),ih(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=ra(Error(O(423)),e),e=L0(t,e,r,n,i);break e}else if(r!==i){i=ra(Error(O(424)),e),e=L0(t,e,r,n,i);break e}else for(dn=Ri(e.stateNode.containerInfo.firstChild),fn=e,ke=!0,$n=null,n=zS(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ea(),r===i){e=zr(t,e,n);break e}Mt(t,e,r,n)}e=e.child}return e;case 5:return jS(e),t===null&&eg(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Qm(r,i)?o=null:s!==null&&Qm(r,s)&&(e.flags|=32),f1(t,e),Mt(t,e,o,n),e.child;case 6:return t===null&&eg(e),null;case 13:return m1(t,e,n);case 4:return K_(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=ta(e,null,r,n):Mt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Fn(r,i),N0(t,e,r,i,n);case 7:return Mt(t,e,e.pendingProps,n),e.child;case 8:return Mt(t,e,e.pendingProps.children,n),e.child;case 12:return Mt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,we(nh,r._currentValue),r._currentValue=o,s!==null)if(qn(s.value,o)){if(s.children===i.children&&!nn.current){e=zr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Lr(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),tg(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(O(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),tg(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Mt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,$o(e,n),i=xn(i),r=r(i),e.flags|=1,Mt(t,e,r,n),e.child;case 14:return r=e.type,i=Fn(r,e.pendingProps),i=Fn(r.type,i),O0(t,e,r,i,n);case 15:return d1(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Fn(r,i),Pd(t,e),e.tag=1,rn(r)?(t=!0,Zd(e)):t=!1,$o(e,n),$S(e,r,i),rg(e,r,i,n),og(null,e,r,!0,t,n);case 19:return g1(t,e,n);case 22:return h1(t,e,n)}throw Error(O(156,e.tag))};function D1(t,e){return iS(t,e)}function GD(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Rn(t,e,n,r){return new GD(t,e,n,r)}function uy(t){return t=t.prototype,!(!t||!t.isReactComponent)}function HD(t){if(typeof t=="function")return uy(t)?1:0;if(t!=null){if(t=t.$$typeof,t===C_)return 11;if(t===k_)return 14}return 2}function ki(t,e){var n=t.alternate;return n===null?(n=Rn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function bd(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")uy(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case To:return Es(n.children,i,s,e);case P_:o=8,i|=8;break;case Pm:return t=Rn(12,n,e,i|2),t.elementType=Pm,t.lanes=s,t;case Cm:return t=Rn(13,n,e,i),t.elementType=Cm,t.lanes=s,t;case km:return t=Rn(19,n,e,i),t.elementType=km,t.lanes=s,t;case BT:return nf(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case UT:o=10;break e;case $T:o=9;break e;case C_:o=11;break e;case k_:o=14;break e;case ci:o=16,r=null;break e}throw Error(O(130,t==null?t:typeof t,""))}return e=Rn(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Es(t,e,n,r){return t=Rn(7,t,r,e),t.lanes=n,t}function nf(t,e,n,r){return t=Rn(22,t,r,e),t.elementType=BT,t.lanes=n,t.stateNode={isHidden:!1},t}function Bp(t,e,n){return t=Rn(6,t,null,e),t.lanes=n,t}function zp(t,e,n){return e=Rn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function KD(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ep(0),this.expirationTimes=Ep(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ep(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function cy(t,e,n,r,i,s,o,a,l){return t=new KD(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Rn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},H_(s),t}function QD(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Eo,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function N1(t){if(!t)return Ni;t=t._reactInternals;e:{if(Gs(t)!==t||t.tag!==1)throw Error(O(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(rn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(O(171))}if(t.tag===1){var n=t.type;if(rn(n))return DS(t,n,e)}return e}function O1(t,e,n,r,i,s,o,a,l){return t=cy(n,r,!0,t,i,s,o,a,l),t.context=N1(null),n=t.current,r=zt(),i=Ci(n),s=Lr(r,i),s.callback=e!=null?e:null,Ai(n,s,i),t.current.lanes=i,Xu(t,i,r),sn(t,r),t}function rf(t,e,n,r){var i=e.current,s=zt(),o=Ci(i);return n=N1(n),e.context===null?e.context=n:e.pendingContext=n,e=Lr(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Ai(i,e,o),t!==null&&(zn(t,i,o,s),Sd(t,i,o)),o}function hh(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function G0(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function dy(t,e){G0(t,e),(t=t.alternate)&&G0(t,e)}function YD(){return null}var V1=typeof reportError=="function"?reportError:function(t){console.error(t)};function hy(t){this._internalRoot=t}sf.prototype.render=hy.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(O(409));rf(t,e,null,null)};sf.prototype.unmount=hy.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;xs(function(){rf(null,t,null,null)}),e[$r]=null}};function sf(t){this._internalRoot=t}sf.prototype.unstable_scheduleHydration=function(t){if(t){var e=dS();t={blockedOn:null,target:t,priority:e};for(var n=0;n<pi.length&&e!==0&&e<pi[n].priority;n++);pi.splice(n,0,t),n===0&&fS(t)}};function fy(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function of(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function H0(){}function XD(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=hh(o);s.call(u)}}var o=O1(e,r,t,0,null,!1,!1,"",H0);return t._reactRootContainer=o,t[$r]=o.current,ou(t.nodeType===8?t.parentNode:t),xs(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=hh(l);a.call(u)}}var l=cy(t,0,!1,null,null,!1,!1,"",H0);return t._reactRootContainer=l,t[$r]=l.current,ou(t.nodeType===8?t.parentNode:t),xs(function(){rf(e,l,n,r)}),l}function af(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=hh(o);a.call(l)}}rf(e,o,t,i)}else o=XD(n,e,t,i,r);return hh(o)}uS=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=vl(e.pendingLanes);n!==0&&(D_(e,n|1),sn(e,He()),(he&6)===0&&(ia=He()+500,Hi()))}break;case 13:xs(function(){var r=Br(t,1);if(r!==null){var i=zt();zn(r,t,1,i)}}),dy(t,1)}};N_=function(t){if(t.tag===13){var e=Br(t,134217728);if(e!==null){var n=zt();zn(e,t,134217728,n)}dy(t,134217728)}};cS=function(t){if(t.tag===13){var e=Ci(t),n=Br(t,e);if(n!==null){var r=zt();zn(n,t,e,r)}dy(t,e)}};dS=function(){return me};hS=function(t,e){var n=me;try{return me=t,e()}finally{me=n}};Um=function(t,e,n){switch(e){case"input":if(Dm(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Yh(r);if(!i)throw Error(O(90));jT(r),Dm(r,i)}}}break;case"textarea":WT(t,n);break;case"select":e=n.value,e!=null&&Lo(t,!!n.multiple,e,!1)}};JT=oy;ZT=xs;var JD={usingClientEntryPoint:!1,Events:[Zu,Po,Yh,YT,XT,oy]},sl={findFiberByHostInstance:hs,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},ZD={bundleType:sl.bundleType,version:sl.version,rendererPackageName:sl.rendererPackageName,rendererConfig:sl.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Hr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=nS(t),t===null?null:t.stateNode},findFiberByHostInstance:sl.findFiberByHostInstance||YD,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!="undefined"){var Zc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Zc.isDisabled&&Zc.supportsFiber)try{Gh=Zc.inject(ZD),fr=Zc}catch{}}yn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=JD;yn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!fy(e))throw Error(O(200));return QD(t,e,null,n)};yn.createRoot=function(t,e){if(!fy(t))throw Error(O(299));var n=!1,r="",i=V1;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=cy(t,1,!1,null,null,n,!1,r,i),t[$r]=e.current,ou(t.nodeType===8?t.parentNode:t),new hy(e)};yn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(O(188)):(t=Object.keys(t).join(","),Error(O(268,t)));return t=nS(e),t=t===null?null:t.stateNode,t};yn.flushSync=function(t){return xs(t)};yn.hydrate=function(t,e,n){if(!of(e))throw Error(O(200));return af(null,t,e,!0,n)};yn.hydrateRoot=function(t,e,n){if(!fy(t))throw Error(O(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=V1;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=O1(e,null,t,1,n!=null?n:null,i,!1,s,o),t[$r]=e.current,ou(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new sf(e)};yn.render=function(t,e,n){if(!of(e))throw Error(O(200));return af(null,t,e,!1,n)};yn.unmountComponentAtNode=function(t){if(!of(t))throw Error(O(40));return t._reactRootContainer?(xs(function(){af(null,null,t,!1,function(){t._reactRootContainer=null,t[$r]=null})}),!0):!1};yn.unstable_batchedUpdates=oy;yn.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!of(n))throw Error(O(200));if(t==null||t._reactInternals===void 0)throw Error(O(38));return af(t,e,n,!1,r)};yn.version="18.2.0-next-9e3b772b8-20220608";function L1(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(L1)}catch(t){console.error(t)}}L1(),fi.exports=yn;var K0=fi.exports;Rm.createRoot=K0.createRoot,Rm.hydrateRoot=K0.hydrateRoot;const eN="_container_p31t9_1",tN="_main_p31t9_17";var Q0={container:eN,main:tN};let nN=0;function ye(t,e){const n=`atom${++nN}`,r={toString:()=>n};return typeof t=="function"?r.read=t:(r.init=t,r.read=i=>i(r),r.write=(i,s,o)=>s(r,typeof o=="function"?o(i(r)):o)),e&&(r.write=e),r}const jp=t=>"init"in t,qp=t=>!!t.write,fh=new WeakMap,rN=(t,e)=>{fh.set(t,e),t.catch(()=>{}).finally(()=>fh.delete(t))},Y0=(t,e)=>{const n=fh.get(t);n&&(fh.delete(t),n(e))},X0=(t,e)=>{t.status="fulfilled",t.value=e},J0=(t,e)=>{t.status="rejected",t.reason=e},ed=(t,e)=>"v"in t&&"v"in e&&Object.is(t.v,e.v),Z0=(t,e)=>"e"in t&&"e"in e&&Object.is(t.e,e.e),Wp=t=>"v"in t&&t.v instanceof Promise,td=t=>{if("e"in t)throw t.e;return t.v},iN=()=>{const t=new WeakMap,e=new WeakMap,n=new Map;let r,i;({BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}&&"production")!=="production"&&(r=new Set,i=new Set);const s=y=>t.get(y),o=(y,I)=>{({BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}&&"production")!=="production"&&Object.freeze(I);const A=t.get(y);if(t.set(y,I),n.has(y)||n.set(y,A),A&&Wp(A)){const b="v"in I?I.v instanceof Promise?I.v:Promise.resolve(I.v):Promise.reject(I.e);Y0(A.v,b)}},a=(y,I,A)=>{const b=new Map;let M=!1;A.forEach(q=>{const J=q===y?I:s(q);J?(b.set(q,J),I.d.get(q)!==J&&(M=!0)):({BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}&&"production")!=="production"&&console.warn("[Bug] atom state not found")}),(M||I.d.size!==b.size)&&(I.d=b)},l=(y,I,A)=>{const b=s(y),M={d:(b==null?void 0:b.d)||new Map,v:I};return A&&a(y,M,A),b&&ed(b,M)&&b.d===M.d?b:(o(y,M),M)},u=(y,I,A)=>{const b=s(y),M={d:(b==null?void 0:b.d)||new Map,e:I};return A&&a(y,M,A),b&&Z0(b,M)&&b.d===M.d?b:(o(y,M),M)},c=y=>{const I=s(y);if(I&&(I.d.forEach((de,X)=>{X!==y&&!e.has(X)&&c(X)}),Array.from(I.d).every(([de,X])=>de===y||s(de)===X)))return I;const A=new Set;let b=!0;const M=de=>{if(A.add(de),de===y){const K=s(de);if(K)return td(K);if(jp(de))return de.init;throw new Error("no atom init")}const X=c(de);return td(X)};let q,J;const Ee={get signal(){return q||(q=new AbortController),q.signal},get setSelf(){return({BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}&&"production")!=="production"&&!qp(y)&&console.warn("setSelf function cannot be used with read-only atom"),!J&&qp(y)&&(J=(...de)=>{if(({BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}&&"production")!=="production"&&b&&console.warn("setSelf function cannot be called in sync"),!b)return _(y,...de)}),J}};try{const de=y.read(M,Ee);if(de instanceof Promise){let X;const K=new Promise((N,G)=>{let Q=!1;de.then(le=>{Q||(X0(K,le),N(le))},le=>{Q||(J0(K,le),G(le))}).finally(()=>{Q||(Q=!0,l(y,K,A))}),X=le=>{Q||(Q=!0,le.then(re=>X0(K,re),re=>J0(K,re)),N(le))}});return K.status="pending",rN(K,N=>{N&&X(N),q==null||q.abort()}),l(y,K,A)}return l(y,de,A)}catch(de){return u(y,de,A)}finally{b=!1}},h=y=>td(c(y)),f=y=>{let I=e.get(y);return I||(I=m(y)),I},p=(y,I)=>!I.l.size&&(!I.t.size||I.t.size===1&&I.t.has(y)),w=y=>{const I=e.get(y);I&&p(y,I)&&g(y)},v=y=>{const I=e.get(y);I==null||I.t.forEach(A=>{if(A!==y){const b=s(A),M=c(A);(!b||!ed(b,M))&&v(A)}})},E=(y,...I)=>{let A=!0;const b=J=>td(c(J)),M=(J,...Ee)=>{let de;if(J===y){if(!jp(J))throw new Error("atom not writable");const X=s(J),K=l(J,Ee[0]);(!X||!ed(X,K))&&v(J)}else de=E(J,...Ee);return A||P(),de},q=y.write(b,M,...I);return A=!1,q},_=(y,...I)=>{const A=E(y,...I);return P(),A},m=(y,I)=>{const A={t:new Set(I&&[I]),l:new Set};if(e.set(y,A),({BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}&&"production")!=="production"&&i.add(y),c(y).d.forEach((b,M)=>{const q=e.get(M);q?q.t.add(y):M!==y&&m(M,y)}),c(y),qp(y)&&y.onMount){const b=y.onMount((...M)=>_(y,...M));b&&(A.u=b)}return A},g=y=>{var I;const A=(I=e.get(y))==null?void 0:I.u;A&&A(),e.delete(y),({BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}&&"production")!=="production"&&i.delete(y);const b=s(y);b?(Wp(b)&&Y0(b.v),b.d.forEach((M,q)=>{if(q!==y){const J=e.get(q);J&&(J.t.delete(y),p(q,J)&&g(q))}})):({BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}&&"production")!=="production"&&console.warn("[Bug] could not find atom state to unmount",y)},T=(y,I,A)=>{const b=new Set(I.d.keys());A==null||A.forEach((M,q)=>{if(b.has(q)){b.delete(q);return}const J=e.get(q);J&&(J.t.delete(y),p(q,J)&&g(q))}),b.forEach(M=>{const q=e.get(M);q?q.t.add(y):e.has(y)&&m(M,y)})},P=()=>{for(;n.size;){const y=Array.from(n);n.clear(),y.forEach(([I,A])=>{const b=s(I);if(b){b.d!==(A==null?void 0:A.d)&&T(I,b,A==null?void 0:A.d);const M=e.get(I);M&&!(A&&!Wp(A)&&(ed(A,b)||Z0(A,b)))&&M.l.forEach(q=>q())}else({BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}&&"production")!=="production"&&console.warn("[Bug] no atom state to flush")})}({BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}&&"production")!=="production"&&r.forEach(y=>y())},C=(y,I)=>{const A=f(y);P();const b=A.l;return b.add(I),()=>{b.delete(I),w(y)}};return({BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}&&"production")!=="production"?{get:h,set:_,sub:C,dev_subscribe_state:y=>(r.add(y),()=>{r.delete(y)}),dev_get_mounted_atoms:()=>i.values(),dev_get_atom_state:y=>t.get(y),dev_get_mounted:y=>e.get(y),dev_restore_atoms:y=>{for(const[I,A]of y)jp(I)&&(l(I,A),v(I));P()}}:{get:h,set:_,sub:C}};let Gp;const sN=()=>(Gp||(Gp=iN()),Gp);var lf={exports:{}},uf={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var oN=S.exports,aN=Symbol.for("react.element"),lN=Symbol.for("react.fragment"),uN=Object.prototype.hasOwnProperty,cN=oN.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,dN={key:!0,ref:!0,__self:!0,__source:!0};function M1(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)uN.call(e,r)&&!dN.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:aN,type:t,key:s,ref:o,props:i,_owner:cN.current}}uf.Fragment=lN;uf.jsx=M1;uf.jsxs=M1;lf.exports=uf;const L=lf.exports.jsx,ee=lf.exports.jsxs,py=lf.exports.Fragment,hN=S.exports.createContext(void 0),F1=t=>{const e=S.exports.useContext(hN);return(t==null?void 0:t.store)||e||sN()},fN=t=>t instanceof Promise,pN=hr.use||(t=>{if(t.status==="pending")throw t;if(t.status==="fulfilled")return t.value;throw t.status==="rejected"?t.reason:(t.status="pending",t.then(e=>{t.status="fulfilled",t.value=e},e=>{t.status="rejected",t.reason=e}),t)});function mN(t,e){const n=F1(e),[[r,i,s],o]=S.exports.useReducer(u=>{const c=n.get(t);return Object.is(u[0],c)&&u[1]===n&&u[2]===t?u:[c,n,t]},void 0,()=>[n.get(t),n,t]);let a=r;(i!==n||s!==t)&&(o(),a=n.get(t));const l=e==null?void 0:e.delay;return S.exports.useEffect(()=>{const u=n.sub(t,()=>{if(typeof l=="number"){setTimeout(o,l);return}o()});return o(),u},[n,t,l]),S.exports.useDebugValue(a),fN(a)?pN(a):a}function gN(t,e){const n=F1(e);return S.exports.useCallback((...i)=>{if(({BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}&&"production")!=="production"&&!("write"in t))throw new Error("not writable atom");return n.set(t,...i)},[n,t])}function Y(t,e){return[mN(t,e),gN(t,e)]}const U1=ye([]),cf=ye("1"),$1=ye([]),B1=ye([]),sa=ye("");ye(!1);const tc=ye(!1),nc=ye({x:0,y:0});ye(null);const my=ye(!1),z1=ye(!1),yg=ye(!1);ye(!1);const _N=ye([]),j1=ye(!1),df=ye(!1),yN=ye(!1),vN=ye({}),q1=ye(!1),W1=ye("");ye({});const G1=ye(!1);function Il(t,e){const[,n]=Y(nc),r=i=>{t.current&&!t.current.contains(i.target)&&(e(),n({x:0,y:0}))};S.exports.useEffect(()=>(document.addEventListener("click",r,!0),()=>{document.removeEventListener("click",r,!0)}),[t,e])}/**
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
 */const H1=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},wN=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},K1={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,h=(s&3)<<4|a>>4;let f=(a&15)<<2|u>>6,p=u&63;l||(p=64,o||(f=64)),r.push(n[c],n[h],n[f],n[p])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(H1(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):wN(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw new IN;const f=s<<2|a>>4;if(r.push(f),u!==64){const p=a<<4&240|u>>2;if(r.push(p),h!==64){const w=u<<6&192|h;r.push(w)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class IN extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const EN=function(t){const e=H1(t);return K1.encodeByteArray(e,!0)},ph=function(t){return EN(t).replace(/\./g,"")},Q1=function(t){try{return K1.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function mh(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!TN(n)||(t[n]=mh(t[n],e[n]));return t}function TN(t){return t!=="__proto__"}/**
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
 */function SN(){if(typeof self!="undefined")return self;if(typeof window!="undefined")return window;if(typeof global!="undefined")return global;throw new Error("Unable to locate global object.")}/**
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
 */const RN=()=>SN().__FIREBASE_DEFAULTS__,AN=()=>{if(typeof process=="undefined"||typeof process.env=="undefined")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},PN=()=>{if(typeof document=="undefined")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Q1(t[1]);return e&&JSON.parse(e)},gy=()=>{try{return RN()||AN()||PN()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Y1=()=>{var t;return(t=gy())===null||t===void 0?void 0:t.config},CN=t=>{var e;return(e=gy())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class kN{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function X1(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[ph(JSON.stringify(n)),ph(JSON.stringify(o)),a].join(".")}/**
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
 */function Ne(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function bN(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ne())}function _y(){var t;const e=(t=gy())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function J1(){return typeof self=="object"&&self.self===self}function Z1(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function yy(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function eR(){const t=Ne();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function tR(){return!_y()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function mu(){try{return typeof indexedDB=="object"}catch{return!1}}function xN(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const DN="FirebaseError";class bt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=DN,Object.setPrototypeOf(this,bt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Hs.prototype.create)}}class Hs{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?NN(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new bt(i,a,r)}}function NN(t,e){return t.replace(ON,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const ON=/\{\$([^}]+)}/g;/**
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
 */function eI(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function VN(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function gu(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(tI(s)&&tI(o)){if(!gu(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function tI(t){return t!==null&&typeof t=="object"}/**
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
 */function Pa(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Oo(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function El(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function nR(t,e){const n=new LN(t,e);return n.subscribe.bind(n)}class LN{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");MN(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Hp),i.error===void 0&&(i.error=Hp),i.complete===void 0&&(i.complete=Hp);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console!="undefined"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function MN(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Hp(){}/**
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
 */function j(t){return t&&t._delegate?t._delegate:t}class Nn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ss="[DEFAULT]";/**
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
 */class FN{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new kN;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if($N(e))try{this.getOrInitializeService({instanceIdentifier:ss})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=ss){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ss){return this.instances.has(e)}getOptions(e=ss){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:UN(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ss){return this.component?this.component.multipleInstances?e:ss:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function UN(t){return t===ss?void 0:t}function $N(t){return t.instantiationMode==="EAGER"}/**
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
 */class rR{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new FN(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */const vy=[];var ie;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ie||(ie={}));const iR={debug:ie.DEBUG,verbose:ie.VERBOSE,info:ie.INFO,warn:ie.WARN,error:ie.ERROR,silent:ie.SILENT},BN=ie.INFO,zN={[ie.DEBUG]:"log",[ie.VERBOSE]:"log",[ie.INFO]:"info",[ie.WARN]:"warn",[ie.ERROR]:"error"},jN=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=zN[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class hf{constructor(e){this.name=e,this._logLevel=BN,this._logHandler=jN,this._userLogHandler=null,vy.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ie))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?iR[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ie.DEBUG,...e),this._logHandler(this,ie.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ie.VERBOSE,...e),this._logHandler(this,ie.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ie.INFO,...e),this._logHandler(this,ie.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ie.WARN,...e),this._logHandler(this,ie.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ie.ERROR,...e),this._logHandler(this,ie.ERROR,...e)}}function qN(t){vy.forEach(e=>{e.setLogLevel(t)})}function WN(t,e){for(const n of vy){let r=null;e&&e.level&&(r=iR[e.level]),t===null?n.userLogHandler=null:n.userLogHandler=(i,s,...o)=>{const a=o.map(l=>{if(l==null)return null;if(typeof l=="string")return l;if(typeof l=="number"||typeof l=="boolean")return l.toString();if(l instanceof Error)return l.message;try{return JSON.stringify(l)}catch{return null}}).filter(l=>l).join(" ");s>=(r!=null?r:i.logLevel)&&t({level:ie[s].toLowerCase(),message:a,args:o,type:i.name})}}}const GN=(t,e)=>e.some(n=>t instanceof n);let nI,rI;function HN(){return nI||(nI=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function KN(){return rI||(rI=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const sR=new WeakMap,vg=new WeakMap,oR=new WeakMap,Kp=new WeakMap,wy=new WeakMap;function QN(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(bi(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&sR.set(n,t)}).catch(()=>{}),wy.set(e,t),e}function YN(t){if(vg.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});vg.set(t,e)}let wg={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return vg.get(t);if(e==="objectStoreNames")return t.objectStoreNames||oR.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return bi(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function XN(t){wg=t(wg)}function JN(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Qp(this),e,...n);return oR.set(r,e.sort?e.sort():[e]),bi(r)}:KN().includes(t)?function(...e){return t.apply(Qp(this),e),bi(sR.get(this))}:function(...e){return bi(t.apply(Qp(this),e))}}function ZN(t){return typeof t=="function"?JN(t):(t instanceof IDBTransaction&&YN(t),GN(t,HN())?new Proxy(t,wg):t)}function bi(t){if(t instanceof IDBRequest)return QN(t);if(Kp.has(t))return Kp.get(t);const e=ZN(t);return e!==t&&(Kp.set(t,e),wy.set(e,t)),e}const Qp=t=>wy.get(t);function eO(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=bi(o);return r&&o.addEventListener("upgradeneeded",l=>{r(bi(o.result),l.oldVersion,l.newVersion,bi(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const tO=["get","getKey","getAll","getAllKeys","count"],nO=["put","add","delete","clear"],Yp=new Map;function iI(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Yp.get(e))return Yp.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=nO.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||tO.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Yp.set(e,s),s}XN(t=>({...t,get:(e,n,r)=>iI(e,n)||t.get(e,n,r),has:(e,n)=>!!iI(e,n)||t.has(e,n)}));/**
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
 */class rO{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(iO(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function iO(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const gh="@firebase/app",Ig="0.10.0";/**
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
 */const Ds=new hf("@firebase/app"),sO="@firebase/app-compat",oO="@firebase/analytics-compat",aO="@firebase/analytics",lO="@firebase/app-check-compat",uO="@firebase/app-check",cO="@firebase/auth",dO="@firebase/auth-compat",hO="@firebase/database",fO="@firebase/database-compat",pO="@firebase/functions",mO="@firebase/functions-compat",gO="@firebase/installations",_O="@firebase/installations-compat",yO="@firebase/messaging",vO="@firebase/messaging-compat",wO="@firebase/performance",IO="@firebase/performance-compat",EO="@firebase/remote-config",TO="@firebase/remote-config-compat",SO="@firebase/storage",RO="@firebase/storage-compat",AO="@firebase/firestore",PO="@firebase/firestore-compat",CO="firebase",kO="10.10.0";/**
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
 */const Oi="[DEFAULT]",bO={[gh]:"fire-core",[sO]:"fire-core-compat",[aO]:"fire-analytics",[oO]:"fire-analytics-compat",[uO]:"fire-app-check",[lO]:"fire-app-check-compat",[cO]:"fire-auth",[dO]:"fire-auth-compat",[hO]:"fire-rtdb",[fO]:"fire-rtdb-compat",[pO]:"fire-fn",[mO]:"fire-fn-compat",[gO]:"fire-iid",[_O]:"fire-iid-compat",[yO]:"fire-fcm",[vO]:"fire-fcm-compat",[wO]:"fire-perf",[IO]:"fire-perf-compat",[EO]:"fire-rc",[TO]:"fire-rc-compat",[SO]:"fire-gcs",[RO]:"fire-gcs-compat",[AO]:"fire-fst",[PO]:"fire-fst-compat","fire-js":"fire-js",[CO]:"fire-js-all"};/**
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
 */const Vi=new Map,oa=new Map,aa=new Map;function _u(t,e){try{t.container.addComponent(e)}catch(n){Ds.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function aR(t,e){t.container.addOrOverwriteComponent(e)}function jr(t){const e=t.name;if(aa.has(e))return Ds.debug(`There were multiple attempts to register component ${e}.`),!1;aa.set(e,t);for(const n of Vi.values())_u(n,t);for(const n of oa.values())_u(n,t);return!0}function lR(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function xO(t,e,n=Oi){lR(t,e).clearInstance(n)}function uR(t){return t.options!==void 0}function $e(t){return t.settings!==void 0}function DO(){aa.clear()}/**
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
 */const NO={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}'",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["server-app-deleted"]:"Firebase Server App has been deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.",["finalization-registry-not-supported"]:"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.",["invalid-server-app-environment"]:"FirebaseServerApp is not for use in browser environments."},bn=new Hs("app","Firebase",NO);/**
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
 */class cR{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Nn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw bn.create("app-deleted",{appName:this._name})}}/**
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
 */class OO extends cR{constructor(e,n,r,i){const s=n.automaticDataCollectionEnabled!==void 0?n.automaticDataCollectionEnabled:!1,o={name:r,automaticDataCollectionEnabled:s};if(e.apiKey!==void 0)super(e,o,i);else{const a=e;super(a.options,o,i)}this._serverConfig=Object.assign({automaticDataCollectionEnabled:s},n),this._finalizationRegistry=new FinalizationRegistry(()=>{this.automaticCleanup()}),this._refCount=0,this.incRefCount(this._serverConfig.releaseOnDeref),this._serverConfig.releaseOnDeref=void 0,n.releaseOnDeref=void 0,pn(gh,Ig,"serverapp")}get refCount(){return this._refCount}incRefCount(e){this.isDeleted||(this._refCount++,e!==void 0&&this._finalizationRegistry.register(e,this))}decRefCount(){return this.isDeleted?0:--this._refCount}automaticCleanup(){Ey(this)}get settings(){return this.checkDestroyed(),this._serverConfig}checkDestroyed(){if(this.isDeleted)throw bn.create("server-app-deleted")}}/**
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
 */const Kr=kO;function Iy(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Oi,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw bn.create("bad-app-name",{appName:String(i)});if(n||(n=Y1()),!n)throw bn.create("no-options");const s=Vi.get(i);if(s){if(gu(n,s.options)&&gu(r,s.config))return s;throw bn.create("duplicate-app",{appName:i})}const o=new rR(i);for(const l of aa.values())o.addComponent(l);const a=new cR(n,r,o);return Vi.set(i,a),a}function VO(t,e){if(J1())throw bn.create("invalid-server-app-environment");e.automaticDataCollectionEnabled===void 0&&(e.automaticDataCollectionEnabled=!1);let n;uR(t)?n=t.options:n=t;const r=Object.assign(Object.assign({},e),n);r.releaseOnDeref!==void 0&&delete r.releaseOnDeref;const i=u=>[...u].reduce((c,h)=>Math.imul(31,c)+h.charCodeAt(0)|0,0);if(e.releaseOnDeref!==void 0&&typeof FinalizationRegistry=="undefined")throw bn.create("finalization-registry-not-supported",{});const s=""+i(JSON.stringify(r)),o=oa.get(s);if(o)return o.incRefCount(e.releaseOnDeref),o;const a=new rR(s);for(const u of aa.values())a.addComponent(u);const l=new OO(n,e,s,a);return oa.set(s,l),l}function LO(t=Oi){const e=Vi.get(t);if(!e&&t===Oi&&Y1())return Iy();if(!e)throw bn.create("no-app",{appName:t});return e}function MO(){return Array.from(Vi.values())}async function Ey(t){let e=!1;const n=t.name;Vi.has(n)?(e=!0,Vi.delete(n)):oa.has(n)&&t.decRefCount()<=0&&(oa.delete(n),e=!0),e&&(await Promise.all(t.container.getProviders().map(r=>r.delete())),t.isDeleted=!0)}function pn(t,e,n){var r;let i=(r=bO[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ds.warn(a.join(" "));return}jr(new Nn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}function dR(t,e){if(t!==null&&typeof t!="function")throw bn.create("invalid-log-argument");WN(t,e)}function hR(t){qN(t)}/**
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
 */const FO="firebase-heartbeat-database",UO=1,yu="firebase-heartbeat-store";let Xp=null;function fR(){return Xp||(Xp=eO(FO,UO,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(yu)}catch(n){console.warn(n)}}}}).catch(t=>{throw bn.create("idb-open",{originalErrorMessage:t.message})})),Xp}async function $O(t){try{const n=(await fR()).transaction(yu),r=await n.objectStore(yu).get(pR(t));return await n.done,r}catch(e){if(e instanceof bt)Ds.warn(e.message);else{const n=bn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ds.warn(n.message)}}}async function sI(t,e){try{const r=(await fR()).transaction(yu,"readwrite");await r.objectStore(yu).put(e,pR(t)),await r.done}catch(n){if(n instanceof bt)Ds.warn(n.message);else{const r=bn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ds.warn(r.message)}}}function pR(t){return`${t.name}!${t.options.appId}`}/**
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
 */const BO=1024,zO=30*24*60*60*1e3;class jO{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new WO(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=oI();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=zO}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=oI(),{heartbeatsToSend:r,unsentEntries:i}=qO(this._heartbeatsCache.heartbeats),s=ph(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function oI(){return new Date().toISOString().substring(0,10)}function qO(t,e=BO){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),aI(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),aI(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class WO{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return mu()?xN().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await $O(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return sI(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return sI(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function aI(t){return ph(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function GO(t){jr(new Nn("platform-logger",e=>new rO(e),"PRIVATE")),jr(new Nn("heartbeat",e=>new jO(e),"PRIVATE")),pn(gh,Ig,t),pn(gh,Ig,"esm2017"),pn("fire-js","")}GO("");var HO=Object.freeze(Object.defineProperty({__proto__:null,SDK_VERSION:Kr,_DEFAULT_ENTRY_NAME:Oi,_addComponent:_u,_addOrOverwriteComponent:aR,_apps:Vi,_clearComponents:DO,_components:aa,_getProvider:lR,_isFirebaseApp:uR,_isFirebaseServerApp:$e,_registerComponent:jr,_removeServiceInstance:xO,_serverApps:oa,deleteApp:Ey,getApp:LO,getApps:MO,initializeApp:Iy,initializeServerApp:VO,onLog:dR,registerVersion:pn,setLogLevel:hR,FirebaseError:bt},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KO{constructor(e,n){this._delegate=e,this.firebase=n,_u(e,new Nn("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),Ey(this._delegate)))}_getService(e,n=Oi){var r;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(e);return!i.isInitialized()&&((r=i.getComponent())===null||r===void 0?void 0:r.instantiationMode)==="EXPLICIT"&&i.initialize(),i.getImmediate({identifier:n})}_removeServiceInstance(e,n=Oi){this._delegate.container.getProvider(e).clearInstance(n)}_addComponent(e){_u(this._delegate,e)}_addOrOverwriteComponent(e){aR(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
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
 */const QO={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance."},lI=new Hs("app-compat","Firebase",QO);/**
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
 */function YO(t){const e={},n={__esModule:!0,initializeApp:s,app:i,registerVersion:pn,setLogLevel:hR,onLog:dR,apps:null,SDK_VERSION:Kr,INTERNAL:{registerComponent:a,removeApp:r,useAsService:l,modularAPIs:HO}};n.default=n,Object.defineProperty(n,"apps",{get:o});function r(u){delete e[u]}function i(u){if(u=u||Oi,!eI(e,u))throw lI.create("no-app",{appName:u});return e[u]}i.App=t;function s(u,c={}){const h=Iy(u,c);if(eI(e,h.name))return e[h.name];const f=new t(h,n);return e[h.name]=f,f}function o(){return Object.keys(e).map(u=>e[u])}function a(u){const c=u.name,h=c.replace("-compat","");if(jr(u)&&u.type==="PUBLIC"){const f=(p=i())=>{if(typeof p[h]!="function")throw lI.create("invalid-app-argument",{appName:c});return p[h]()};u.serviceProps!==void 0&&mh(f,u.serviceProps),n[h]=f,t.prototype[h]=function(...p){return this._getService.bind(this,c).apply(this,u.multipleInstances?p:[])}}return u.type==="PUBLIC"?n[h]:null}function l(u,c){return c==="serverAuth"?null:c}return n}/**
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
 */function mR(){const t=YO(KO);t.INTERNAL=Object.assign(Object.assign({},t.INTERNAL),{createFirebaseNamespace:mR,extendNamespace:e,createSubscribe:nR,ErrorFactory:Hs,deepExtend:mh});function e(n){mh(t,n)}return t}const XO=mR();/**
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
 */const uI=new hf("@firebase/app-compat"),JO="@firebase/app-compat",ZO="0.2.30";/**
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
 */function eV(t){pn(JO,ZO,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */if(J1()&&self.firebase!==void 0){uI.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);const t=self.firebase.SDK_VERSION;t&&t.indexOf("LITE")>=0&&uI.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}const mr=XO;eV();var tV="firebase",nV="10.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */mr.registerVersion(tV,nV,"app-compat");function Ty(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}const ol={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},lo={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rV(){return{["admin-restricted-operation"]:"This operation is restricted to administrators only.",["argument-error"]:"",["app-not-authorized"]:"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",["app-not-installed"]:"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",["captcha-check-failed"]:"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",["code-expired"]:"The SMS code has expired. Please re-send the verification code to try again.",["cordova-not-ready"]:"Cordova framework is not ready.",["cors-unsupported"]:"This browser is not supported.",["credential-already-in-use"]:"This credential is already associated with a different user account.",["custom-token-mismatch"]:"The custom token corresponds to a different audience.",["requires-recent-login"]:"This operation is sensitive and requires recent authentication. Log in again before retrying this request.",["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",["dynamic-link-not-activated"]:"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",["email-change-needs-verification"]:"Multi-factor users must always have a verified email.",["email-already-in-use"]:"The email address is already in use by another account.",["emulator-config-failed"]:'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',["expired-action-code"]:"The action code has expired.",["cancelled-popup-request"]:"This operation has been cancelled due to another conflicting popup being opened.",["internal-error"]:"An internal AuthError has occurred.",["invalid-app-credential"]:"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",["invalid-app-id"]:"The mobile app identifier is not registed for the current project.",["invalid-user-token"]:"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",["invalid-auth-event"]:"An internal AuthError has occurred.",["invalid-verification-code"]:"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.",["invalid-continue-uri"]:"The continue URL provided in the request is invalid.",["invalid-cordova-configuration"]:"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",["invalid-custom-token"]:"The custom token format is incorrect. Please check the documentation.",["invalid-dynamic-link-domain"]:"The provided dynamic link domain is not configured or authorized for the current project.",["invalid-email"]:"The email address is badly formatted.",["invalid-emulator-scheme"]:"Emulator URL must start with a valid scheme (http:// or https://).",["invalid-api-key"]:"Your API key is invalid, please check you have copied it correctly.",["invalid-cert-hash"]:"The SHA-1 certificate hash provided is invalid.",["invalid-credential"]:"The supplied auth credential is incorrect, malformed or has expired.",["invalid-message-payload"]:"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-multi-factor-session"]:"The request does not contain a valid proof of first factor successful sign-in.",["invalid-oauth-provider"]:"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",["invalid-oauth-client-id"]:"The OAuth client ID provided is either invalid or does not match the specified API key.",["unauthorized-domain"]:"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",["invalid-action-code"]:"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",["wrong-password"]:"The password is invalid or the user does not have a password.",["invalid-persistence-type"]:"The specified persistence type is invalid. It can only be local, session or none.",["invalid-phone-number"]:"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",["invalid-provider-id"]:"The specified provider ID is invalid.",["invalid-recipient-email"]:"The email corresponding to this action failed to send as the provided recipient email address is invalid.",["invalid-sender"]:"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-verification-id"]:"The verification ID used to create the phone auth credential is invalid.",["invalid-tenant-id"]:"The Auth instance's tenant ID is invalid.",["login-blocked"]:"Login blocked by user-provided method: {$originalMessage}",["missing-android-pkg-name"]:"An Android Package Name must be provided if the Android App is required to be installed.",["auth-domain-config-required"]:"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",["missing-app-credential"]:"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.",["missing-verification-code"]:"The phone auth credential was created with an empty SMS verification code.",["missing-continue-uri"]:"A continue URL must be provided in the request.",["missing-iframe-start"]:"An internal AuthError has occurred.",["missing-ios-bundle-id"]:"An iOS Bundle ID must be provided if an App Store ID is provided.",["missing-or-invalid-nonce"]:"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.",["missing-password"]:"A non-empty password must be provided",["missing-multi-factor-info"]:"No second factor identifier is provided.",["missing-multi-factor-session"]:"The request is missing proof of first factor successful sign-in.",["missing-phone-number"]:"To send verification codes, provide a phone number for the recipient.",["missing-verification-id"]:"The phone auth credential was created with an empty verification ID.",["app-deleted"]:"This instance of FirebaseApp has been deleted.",["multi-factor-info-not-found"]:"The user does not have a second factor matching the identifier provided.",["multi-factor-auth-required"]:"Proof of ownership of a second factor is required to complete sign-in.",["account-exists-with-different-credential"]:"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",["network-request-failed"]:"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.",["no-auth-event"]:"An internal AuthError has occurred.",["no-such-provider"]:"User was not linked to an account with the given provider.",["null-user"]:"A null user object was provided as the argument for an operation which requires a non-null user object.",["operation-not-allowed"]:"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",["operation-not-supported-in-this-environment"]:'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',["popup-blocked"]:"Unable to establish a connection with the popup. It may have been blocked by the browser.",["popup-closed-by-user"]:"The popup has been closed by the user before finalizing the operation.",["provider-already-linked"]:"User can only be linked to one identity for the given provider.",["quota-exceeded"]:"The project's quota for this operation has been exceeded.",["redirect-cancelled-by-user"]:"The redirect operation has been cancelled by the user before finalizing.",["redirect-operation-pending"]:"A redirect sign-in operation is already pending.",["rejected-credential"]:"The request contains malformed or mismatching credentials.",["second-factor-already-in-use"]:"The second factor is already enrolled on this account.",["maximum-second-factor-count-exceeded"]:"The maximum allowed number of second factors on a user has been exceeded.",["tenant-id-mismatch"]:"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.",["user-token-expired"]:"The user's credential is no longer valid. The user must sign in again.",["too-many-requests"]:"We have blocked all requests from this device due to unusual activity. Try again later.",["unauthorized-continue-uri"]:"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.",["unsupported-first-factor"]:"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.",["unsupported-persistence-type"]:"The current environment does not support the specified persistence type.",["unsupported-tenant-operation"]:"This operation is not supported in a multi-tenant context.",["unverified-email"]:"The operation requires a verified email.",["user-cancelled"]:"The user did not grant your application the permissions it requested.",["user-not-found"]:"There is no user record corresponding to this identifier. The user may have been deleted.",["user-disabled"]:"The user account has been disabled by an administrator.",["user-mismatch"]:"The supplied credentials do not correspond to the previously signed in user.",["user-signed-out"]:"",["weak-password"]:"The password must be 6 characters long or more.",["web-storage-unsupported"]:"This browser is not supported or 3rd party cookies and data may be disabled.",["already-initialized"]:"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.",["missing-recaptcha-token"]:"The reCAPTCHA token is missing when sending request to the backend.",["invalid-recaptcha-token"]:"The reCAPTCHA token is invalid when sending request to the backend.",["invalid-recaptcha-action"]:"The reCAPTCHA action is invalid when sending request to the backend.",["recaptcha-not-enabled"]:"reCAPTCHA Enterprise integration is not enabled for this project.",["missing-client-type"]:"The reCAPTCHA client type is missing when sending request to the backend.",["missing-recaptcha-version"]:"The reCAPTCHA version is missing when sending request to the backend.",["invalid-req-type"]:"Invalid request parameters.",["invalid-recaptcha-version"]:"The reCAPTCHA version is invalid when sending request to the backend.",["unsupported-password-policy-schema-version"]:"The password policy received from the backend uses a schema version that is not supported by this version of the Firebase SDK.",["password-does-not-meet-requirements"]:"The password does not meet the requirements."}}function gR(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const iV=rV,sV=gR,_R=new Hs("auth","Firebase",gR());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _h=new hf("@firebase/auth");function oV(t,...e){_h.logLevel<=ie.WARN&&_h.warn(`Auth (${Kr}): ${t}`,...e)}function xd(t,...e){_h.logLevel<=ie.ERROR&&_h.error(`Auth (${Kr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tt(t,...e){throw Ry(t,...e)}function nt(t,...e){return Ry(t,...e)}function Sy(t,e,n){const r=Object.assign(Object.assign({},sV()),{[e]:n});return new Hs("auth","Firebase",r).create(e,{appName:t.name})}function ut(t){return Sy(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Ca(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Tt(t,"argument-error"),Sy(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Ry(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return _R.create(t,...e)}function V(t,e,...n){if(!t)throw Ry(e,...n)}function ar(t){const e="INTERNAL ASSERTION FAILED: "+t;throw xd(e),new Error(e)}function Wn(t,e){t||ar(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vu(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Ay(){return cI()==="http:"||cI()==="https:"}function cI(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aV(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Ay()||Z1()||"connection"in navigator)?navigator.onLine:!0}function lV(){if(typeof navigator=="undefined")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rc{constructor(e,n){this.shortDelay=e,this.longDelay=n,Wn(n>e,"Short delay should be less than long delay!"),this.isMobile=bN()||yy()}get(){return aV()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Py(t,e){Wn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yR{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;if(typeof globalThis!="undefined"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch!="undefined")return fetch;ar("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;if(typeof globalThis!="undefined"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers!="undefined")return Headers;ar("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;if(typeof globalThis!="undefined"&&globalThis.Response)return globalThis.Response;if(typeof Response!="undefined")return Response;ar("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uV={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cV=new rc(3e4,6e4);function qe(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function We(t,e,n,r,i={}){return vR(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Pa(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),yR.fetch()(wR(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function vR(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},uV),e);try{const i=new hV(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Tl(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Tl(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Tl(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Tl(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Sy(t,c,u);Tt(t,c)}}catch(i){if(i instanceof bt)throw i;Tt(t,"network-request-failed",{message:String(i)})}}async function Qr(t,e,n,r,i={}){const s=await We(t,e,n,r,i);return"mfaPendingCredential"in s&&Tt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function wR(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Py(t.config,i):`${t.config.apiScheme}://${i}`}function dV(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class hV{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(nt(this.auth,"network-request-failed")),cV.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Tl(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=nt(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dI(t){return t!==void 0&&t.getResponse!==void 0}function hI(t){return t!==void 0&&t.enterprise!==void 0}class fV{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return dV(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pV(t){return(await We(t,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function mV(t,e){return We(t,"GET","/v2/recaptchaConfig",qe(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gV(t,e){return We(t,"POST","/v1/accounts:delete",e)}async function _V(t,e){return We(t,"POST","/v1/accounts:update",e)}async function IR(t,e){return We(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fl(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function yV(t,e=!1){const n=j(t),r=await n.getIdToken(e),i=ff(r);V(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Fl(Jp(i.auth_time)),issuedAtTime:Fl(Jp(i.iat)),expirationTime:Fl(Jp(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Jp(t){return Number(t)*1e3}function ff(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return xd("JWT malformed, contained fewer than 3 sections"),null;try{const i=Q1(n);return i?JSON.parse(i):(xd("Failed to decode base64 JWT payload"),null)}catch(i){return xd("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function fI(t){const e=ff(t);return V(e,"internal-error"),V(typeof e.exp!="undefined","internal-error"),V(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qr(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof bt&&vV(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function vV({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wV{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eg{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Fl(this.lastLoginAt),this.creationTime=Fl(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function wu(t){var e;const n=t.auth,r=await t.getIdToken(),i=await qr(t,IR(n,{idToken:r}));V(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?ER(s.providerUserInfo):[],a=EV(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Eg(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,h)}async function IV(t){const e=j(t);await wu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function EV(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function ER(t){return t.map(e=>{var{providerId:n}=e,r=Ty(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function TV(t,e){const n=await vR(t,{},async()=>{const r=Pa({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=wR(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",yR.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function SV(t,e){return We(t,"POST","/v2/accounts:revokeToken",qe(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){V(e.idToken,"internal-error"),V(typeof e.idToken!="undefined","internal-error"),V(typeof e.refreshToken!="undefined","internal-error");const n="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):fI(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){V(e.length!==0,"internal-error");const n=fI(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(V(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await TV(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new zo;return r&&(V(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(V(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(V(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new zo,this.toJSON())}_performRefresh(){return ar("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oi(t,e){V(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class xr{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Ty(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new wV(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Eg(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await qr(this,this.stsTokenManager.getToken(this.auth,e));return V(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return yV(this,e)}reload(){return IV(this)}_assign(e){this!==e&&(V(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new xr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){V(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await wu(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if($e(this.auth.app))return Promise.reject(ut(this.auth));const e=await this.getIdToken();return await qr(this,gV(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(i=n.email)!==null&&i!==void 0?i:void 0,p=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,w=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,E=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,_=(u=n.createdAt)!==null&&u!==void 0?u:void 0,m=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:g,emailVerified:T,isAnonymous:P,providerData:C,stsTokenManager:y}=n;V(g&&y,e,"internal-error");const I=zo.fromJSON(this.name,y);V(typeof g=="string",e,"internal-error"),oi(h,e.name),oi(f,e.name),V(typeof T=="boolean",e,"internal-error"),V(typeof P=="boolean",e,"internal-error"),oi(p,e.name),oi(w,e.name),oi(v,e.name),oi(E,e.name),oi(_,e.name),oi(m,e.name);const A=new xr({uid:g,auth:e,email:f,emailVerified:T,displayName:h,isAnonymous:P,photoURL:w,phoneNumber:p,tenantId:v,stsTokenManager:I,createdAt:_,lastLoginAt:m});return C&&Array.isArray(C)&&(A.providerData=C.map(b=>Object.assign({},b))),E&&(A._redirectEventId=E),A}static async _fromIdTokenResponse(e,n,r=!1){const i=new zo;i.updateFromServerResponse(n);const s=new xr({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await wu(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];V(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?ER(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new zo;a.updateFromIdToken(r);const l=new xr({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Eg(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(l,u),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pI=new Map;function hn(t){Wn(t instanceof Function,"Expected a class definition");let e=pI.get(t);return e?(Wn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,pI.set(t,e),e)}/**
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
 */class TR{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}TR.type="NONE";const la=TR;/**
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
 */function Ts(t,e,n){return`firebase:${t}:${e}:${n}`}class jo{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Ts(this.userKey,i.apiKey,s),this.fullPersistenceKey=Ts("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?xr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new jo(hn(la),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||hn(la);const o=Ts(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const h=xr._fromJSON(e,c);u!==s&&(a=h),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new jo(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new jo(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mI(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(AR(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(SR(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(PR(e))return"Blackberry";if(CR(e))return"Webos";if(Cy(e))return"Safari";if((e.includes("chrome/")||RR(e))&&!e.includes("edge/"))return"Chrome";if(ic(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function SR(t=Ne()){return/firefox\//i.test(t)}function Cy(t=Ne()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function RR(t=Ne()){return/crios\//i.test(t)}function AR(t=Ne()){return/iemobile/i.test(t)}function ic(t=Ne()){return/android/i.test(t)}function PR(t=Ne()){return/blackberry/i.test(t)}function CR(t=Ne()){return/webos/i.test(t)}function ka(t=Ne()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function RV(t=Ne()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(t)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(t)}function AV(t=Ne()){var e;return ka(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function PV(){return eR()&&document.documentMode===10}function kR(t=Ne()){return ka(t)||ic(t)||CR(t)||PR(t)||/windows phone/i.test(t)||AR(t)}function CV(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bR(t,e=[]){let n;switch(t){case"Browser":n=mI(Ne());break;case"Worker":n=`${mI(Ne())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Kr}/${r}`}/**
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
 */class kV{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function bV(t,e={}){return We(t,"GET","/v2/passwordPolicy",qe(t,e))}/**
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
 */const xV=6;class DV{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:xV,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NV{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new gI(this),this.idTokenSubscription=new gI(this),this.beforeStateQueue=new kV(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=_R,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=hn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await jo.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await IR(this,{idToken:e}),r=await xr._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if($e(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l==null?void 0:l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return V(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await wu(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=lV()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if($e(this.app))return Promise.reject(ut(this));const n=e?j(e):null;return n&&V(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&V(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return $e(this.app)?Promise.reject(ut(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return $e(this.app)?Promise.reject(ut(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(hn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await bV(this),n=new DV(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Hs("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await SV(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&hn(e)||this._popupRedirectResolver;V(n,this,"argument-error"),this.redirectPersistenceManager=await jo.create(this,[hn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(V(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return V(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=bR(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&oV(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Be(t){return j(t)}class gI{constructor(e){this.auth=e,this.observer=null,this.addObserver=nR(n=>this.observer=n)}get next(){return V(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function OV(t){sc=t}function ky(t){return sc.loadJS(t)}function VV(){return sc.recaptchaV2Script}function LV(){return sc.recaptchaEnterpriseScript}function MV(){return sc.gapiScript}function xR(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const FV="recaptcha-enterprise",UV="NO_RECAPTCHA";class $V{constructor(e){this.type=FV,this.auth=Be(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{mV(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new fV(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;hI(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(UV)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&hI(window.grecaptcha))i(a,s,o);else{if(typeof window=="undefined"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=LV();l.length!==0&&(l+=a),ky(l).then(()=>{i(a,s,o)}).catch(u=>{o(u)})}}).catch(a=>{o(a)})})}}async function _I(t,e,n,r=!1){const i=new $V(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Iu(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await _I(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await _I(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}function BV(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(hn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function zV(t,e,n){const r=Be(t);V(r._canInitEmulator,r,"emulator-config-failed"),V(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=DR(e),{host:o,port:a}=jV(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||qV()}function DR(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function jV(t){const e=DR(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:yI(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:yI(o)}}}function yI(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function qV(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console!="undefined"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window!="undefined"&&typeof document!="undefined"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ba{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return ar("not implemented")}_getIdTokenResponse(e){return ar("not implemented")}_linkToIdToken(e,n){return ar("not implemented")}_getReauthenticationResolver(e){return ar("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function NR(t,e){return We(t,"POST","/v1/accounts:resetPassword",qe(t,e))}async function WV(t,e){return We(t,"POST","/v1/accounts:update",e)}async function GV(t,e){return We(t,"POST","/v1/accounts:signUp",e)}async function HV(t,e){return We(t,"POST","/v1/accounts:update",qe(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function KV(t,e){return Qr(t,"POST","/v1/accounts:signInWithPassword",qe(t,e))}async function pf(t,e){return We(t,"POST","/v1/accounts:sendOobCode",qe(t,e))}async function QV(t,e){return pf(t,e)}async function YV(t,e){return pf(t,e)}async function XV(t,e){return pf(t,e)}async function JV(t,e){return pf(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ZV(t,e){return Qr(t,"POST","/v1/accounts:signInWithEmailLink",qe(t,e))}async function e2(t,e){return Qr(t,"POST","/v1/accounts:signInWithEmailLink",qe(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eu extends ba{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Eu(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Eu(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Iu(e,n,"signInWithPassword",KV);case"emailLink":return ZV(e,{email:this._email,oobCode:this._password});default:Tt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Iu(e,r,"signUpPassword",GV);case"emailLink":return e2(e,{idToken:n,email:this._email,oobCode:this._password});default:Tt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mr(t,e){return Qr(t,"POST","/v1/accounts:signInWithIdp",qe(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t2="http://localhost";class vr extends ba{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new vr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Tt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Ty(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new vr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Mr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Mr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Mr(e,n)}buildRequest(){const e={requestUri:t2,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Pa(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function n2(t,e){return We(t,"POST","/v1/accounts:sendVerificationCode",qe(t,e))}async function r2(t,e){return Qr(t,"POST","/v1/accounts:signInWithPhoneNumber",qe(t,e))}async function i2(t,e){const n=await Qr(t,"POST","/v1/accounts:signInWithPhoneNumber",qe(t,e));if(n.temporaryProof)throw Tl(t,"account-exists-with-different-credential",n);return n}const s2={USER_NOT_FOUND:"user-not-found"};async function o2(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return Qr(t,"POST","/v1/accounts:signInWithPhoneNumber",qe(t,n),s2)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ss extends ba{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,n){return new Ss({verificationId:e,verificationCode:n})}static _fromTokenResponse(e,n){return new Ss({phoneNumber:e,temporaryProof:n})}_getIdTokenResponse(e){return r2(e,this._makeVerificationRequest())}_linkToIdToken(e,n){return i2(e,Object.assign({idToken:n},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return o2(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:n,verificationId:r,verificationCode:i}=this.params;return e&&n?{temporaryProof:e,phoneNumber:n}:{sessionInfo:r,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s}=e;return!r&&!n&&!i&&!s?null:new Ss({verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function a2(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function l2(t){const e=Oo(El(t)).link,n=e?Oo(El(e)).deep_link_id:null,r=Oo(El(t)).deep_link_id;return(r?Oo(El(r)).link:null)||r||n||e||t}class mf{constructor(e){var n,r,i,s,o,a;const l=Oo(El(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,h=a2((i=l.mode)!==null&&i!==void 0?i:null);V(u&&c&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=c,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=l2(e);try{return new mf(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ki{constructor(){this.providerId=Ki.PROVIDER_ID}static credential(e,n){return Eu._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=mf.parseLink(n);return V(r,"argument-error"),Eu._fromEmailAndCode(e,r.code,r.tenantId)}}Ki.PROVIDER_ID="password";Ki.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ki.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class xa extends Yr{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class qo extends xa{static credentialFromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;return V("providerId"in n&&"signInMethod"in n,"argument-error"),vr._fromParams(n)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return V(e.idToken||e.accessToken,"argument-error"),vr._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return qo.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return qo.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r,oauthTokenSecret:i,pendingToken:s,nonce:o,providerId:a}=e;if(!r&&!i&&!n&&!s||!a)return null;try{return new qo(a)._credential({idToken:n,accessToken:r,nonce:o,pendingToken:s})}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr extends xa{constructor(){super("facebook.com")}static credential(e){return vr._fromParams({providerId:tr.PROVIDER_ID,signInMethod:tr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return tr.credentialFromTaggedObject(e)}static credentialFromError(e){return tr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return tr.credential(e.oauthAccessToken)}catch{return null}}}tr.FACEBOOK_SIGN_IN_METHOD="facebook.com";tr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr extends xa{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return vr._fromParams({providerId:nr.PROVIDER_ID,signInMethod:nr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return nr.credentialFromTaggedObject(e)}static credentialFromError(e){return nr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return nr.credential(n,r)}catch{return null}}}nr.GOOGLE_SIGN_IN_METHOD="google.com";nr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr extends xa{constructor(){super("github.com")}static credential(e){return vr._fromParams({providerId:rr.PROVIDER_ID,signInMethod:rr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return rr.credentialFromTaggedObject(e)}static credentialFromError(e){return rr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return rr.credential(e.oauthAccessToken)}catch{return null}}}rr.GITHUB_SIGN_IN_METHOD="github.com";rr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u2="http://localhost";class ua extends ba{constructor(e,n){super(e,e),this.pendingToken=n}_getIdTokenResponse(e){const n=this.buildRequest();return Mr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Mr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Mr(e,n)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,pendingToken:s}=n;return!r||!i||!s||r!==i?null:new ua(r,s)}static _create(e,n){return new ua(e,n)}buildRequest(){return{requestUri:u2,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c2="saml.";class yh extends Yr{constructor(e){V(e.startsWith(c2),"argument-error"),super(e)}static credentialFromResult(e){return yh.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return yh.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const n=ua.fromJSON(e);return V(n,"argument-error"),n}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:n,providerId:r}=e;if(!n||!r)return null;try{return ua._create(r,n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir extends xa{constructor(){super("twitter.com")}static credential(e,n){return vr._fromParams({providerId:ir.PROVIDER_ID,signInMethod:ir.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return ir.credentialFromTaggedObject(e)}static credentialFromError(e){return ir.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return ir.credential(n,r)}catch{return null}}}ir.TWITTER_SIGN_IN_METHOD="twitter.com";ir.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function OR(t,e){return Qr(t,"POST","/v1/accounts:signUp",qe(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await xr._fromIdTokenResponse(e,r,i),o=vI(r);return new On({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=vI(r);return new On({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function vI(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function d2(t){var e;if($e(t.app))return Promise.reject(ut(t));const n=Be(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new On({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await OR(n,{returnSecureToken:!0}),i=await On._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vh extends bt{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,vh.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new vh(e,n,r,i)}}function VR(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?vh._fromErrorAndOperation(t,s,e,r):s})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LR(t){return new Set(t.map(({providerId:e})=>e).filter(e=>!!e))}/**
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
 */async function h2(t,e){const n=j(t);await gf(!0,n,e);const{providerUserInfo:r}=await _V(n.auth,{idToken:await n.getIdToken(),deleteProvider:[e]}),i=LR(r||[]);return n.providerData=n.providerData.filter(s=>i.has(s.providerId)),i.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function by(t,e,n=!1){const r=await qr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return On._forOperation(t,"link",r)}async function gf(t,e,n){await wu(e);const r=LR(e.providerData),i=t===!1?"provider-already-linked":"no-such-provider";V(r.has(n)===t,e.auth,i)}/**
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
 */async function MR(t,e,n=!1){const{auth:r}=t;if($e(r.app))return Promise.reject(ut(r));const i="reauthenticate";try{const s=await qr(t,VR(r,i,e,t),n);V(s.idToken,r,"internal-error");const o=ff(s.idToken);V(o,r,"internal-error");const{sub:a}=o;return V(t.uid===a,r,"user-mismatch"),On._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Tt(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function FR(t,e,n=!1){if($e(t.app))return Promise.reject(ut(t));const r="signIn",i=await VR(t,r,e),s=await On._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function _f(t,e){return FR(Be(t),e)}async function UR(t,e){const n=j(t);return await gf(!1,n,e.providerId),by(n,e)}async function $R(t,e){return MR(j(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function f2(t,e){return Qr(t,"POST","/v1/accounts:signInWithCustomToken",qe(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function p2(t,e){if($e(t.app))return Promise.reject(ut(t));const n=Be(t),r=await f2(n,{token:e,returnSecureToken:!0}),i=await On._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oc{constructor(e,n){this.factorId=e,this.uid=n.mfaEnrollmentId,this.enrollmentTime=new Date(n.enrolledAt).toUTCString(),this.displayName=n.displayName}static _fromServerResponse(e,n){return"phoneInfo"in n?xy._fromServerResponse(e,n):"totpInfo"in n?Dy._fromServerResponse(e,n):Tt(e,"internal-error")}}class xy extends oc{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,n){return new xy(n)}}class Dy extends oc{constructor(e){super("totp",e)}static _fromServerResponse(e,n){return new Dy(n)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yf(t,e,n){var r;V(((r=n.url)===null||r===void 0?void 0:r.length)>0,t,"invalid-continue-uri"),V(typeof n.dynamicLinkDomain=="undefined"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(V(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(V(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ny(t){const e=Be(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function m2(t,e,n){const r=Be(t),i={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};n&&yf(r,i,n),await Iu(r,i,"getOobCode",YV)}async function g2(t,e,n){await NR(j(t),{oobCode:e,newPassword:n}).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Ny(t),r})}async function _2(t,e){await HV(j(t),{oobCode:e})}async function BR(t,e){const n=j(t),r=await NR(n,{oobCode:e}),i=r.requestType;switch(V(i,n,"internal-error"),i){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":V(r.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":V(r.mfaInfo,n,"internal-error");default:V(r.email,n,"internal-error")}let s=null;return r.mfaInfo&&(s=oc._fromServerResponse(Be(n),r.mfaInfo)),{data:{email:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.newEmail:r.email)||null,previousEmail:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.email:r.newEmail)||null,multiFactorInfo:s},operation:i}}async function y2(t,e){const{data:n}=await BR(j(t),e);return n.email}async function v2(t,e,n){if($e(t.app))return Promise.reject(ut(t));const r=Be(t),o=await Iu(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",OR).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&Ny(t),l}),a=await On._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function zR(t,e,n){return $e(t.app)?Promise.reject(ut(t)):_f(j(t),Ki.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Ny(t),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function w2(t,e,n){const r=Be(t),i={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function s(o,a){V(a.handleCodeInApp,r,"argument-error"),a&&yf(r,o,a)}s(i,n),await Iu(r,i,"getOobCode",XV)}function I2(t,e){const n=mf.parseLink(e);return(n==null?void 0:n.operation)==="EMAIL_SIGNIN"}async function E2(t,e,n){if($e(t.app))return Promise.reject(ut(t));const r=j(t),i=Ki.credentialWithLink(e,n||vu());return V(i._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),_f(r,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function T2(t,e){return We(t,"POST","/v1/accounts:createAuthUri",qe(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function S2(t,e){const n=Ay()?vu():"http://localhost",r={identifier:e,continueUri:n},{signinMethods:i}=await T2(j(t),r);return i||[]}async function R2(t,e){const n=j(t),r=await t.getIdToken(),i={requestType:"VERIFY_EMAIL",idToken:r};e&&yf(n.auth,i,e);const{email:s}=await QV(n.auth,i);s!==t.email&&await t.reload()}async function A2(t,e,n){const r=j(t),i=await t.getIdToken(),s={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:i,newEmail:e};n&&yf(r.auth,s,n);const{email:o}=await JV(r.auth,s);o!==t.email&&await t.reload()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function P2(t,e){return We(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function C2(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=j(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await qr(r,P2(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function k2(t,e){const n=j(t);return $e(n.auth.app)?Promise.reject(ut(n.auth)):jR(n,e,null)}function b2(t,e){return jR(j(t),null,e)}async function jR(t,e,n){const{auth:r}=t,s={idToken:await t.getIdToken(),returnSecureToken:!0};e&&(s.email=e),n&&(s.password=n);const o=await qr(t,WV(r,s));await t._updateTokensIfNecessary(o,!0)}/**
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
 */function x2(t){var e,n;if(!t)return null;const{providerId:r}=t,i=t.rawUserInfo?JSON.parse(t.rawUserInfo):{},s=t.isNewUser||t.kind==="identitytoolkit#SignupNewUserResponse";if(!r&&(t==null?void 0:t.idToken)){const o=(n=(e=ff(t.idToken))===null||e===void 0?void 0:e.firebase)===null||n===void 0?void 0:n.sign_in_provider;if(o){const a=o!=="anonymous"&&o!=="custom"?o:null;return new Wo(s,a)}}if(!r)return null;switch(r){case"facebook.com":return new D2(s,i);case"github.com":return new N2(s,i);case"google.com":return new O2(s,i);case"twitter.com":return new V2(s,i,t.screenName||null);case"custom":case"anonymous":return new Wo(s,null);default:return new Wo(s,r,i)}}class Wo{constructor(e,n,r={}){this.isNewUser=e,this.providerId=n,this.profile=r}}class qR extends Wo{constructor(e,n,r,i){super(e,n,r),this.username=i}}class D2 extends Wo{constructor(e,n){super(e,"facebook.com",n)}}class N2 extends qR{constructor(e,n){super(e,"github.com",n,typeof(n==null?void 0:n.login)=="string"?n==null?void 0:n.login:null)}}class O2 extends Wo{constructor(e,n){super(e,"google.com",n)}}class V2 extends qR{constructor(e,n,r){super(e,"twitter.com",n,r)}}function L2(t){const{user:e,_tokenResponse:n}=t;return e.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:x2(n)}function M2(t,e,n,r){return j(t).onAuthStateChanged(e,n,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms{constructor(e,n,r){this.type=e,this.credential=n,this.user=r}static _fromIdtoken(e,n){return new ms("enroll",e,n)}static _fromMfaPendingCredential(e){return new ms("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var n,r;if(e!=null&&e.multiFactorSession){if(!((n=e.multiFactorSession)===null||n===void 0)&&n.pendingCredential)return ms._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(!((r=e.multiFactorSession)===null||r===void 0)&&r.idToken)return ms._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oy{constructor(e,n,r){this.session=e,this.hints=n,this.signInResolver=r}static _fromError(e,n){const r=Be(e),i=n.customData._serverResponse,s=(i.mfaInfo||[]).map(a=>oc._fromServerResponse(r,a));V(i.mfaPendingCredential,r,"internal-error");const o=ms._fromMfaPendingCredential(i.mfaPendingCredential);return new Oy(o,s,async a=>{const l=await a._process(r,o);delete i.mfaInfo,delete i.mfaPendingCredential;const u=Object.assign(Object.assign({},i),{idToken:l.idToken,refreshToken:l.refreshToken});switch(n.operationType){case"signIn":const c=await On._fromIdTokenResponse(r,n.operationType,u);return await r._updateCurrentUser(c.user),c;case"reauthenticate":return V(n.user,r,"internal-error"),On._forOperation(n.user,n.operationType,u);default:Tt(r,"internal-error")}})}async resolveSignIn(e){const n=e;return this.signInResolver(n)}}function F2(t,e){var n;const r=j(t),i=e;return V(e.customData.operationType,r,"argument-error"),V((n=i.customData._serverResponse)===null||n===void 0?void 0:n.mfaPendingCredential,r,"argument-error"),Oy._fromError(r,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U2(t,e){return We(t,"POST","/v2/accounts/mfaEnrollment:start",qe(t,e))}function $2(t,e){return We(t,"POST","/v2/accounts/mfaEnrollment:finalize",qe(t,e))}function B2(t,e){return We(t,"POST","/v2/accounts/mfaEnrollment:withdraw",qe(t,e))}class Vy{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(n=>{n.mfaInfo&&(this.enrolledFactors=n.mfaInfo.map(r=>oc._fromServerResponse(e.auth,r)))})}static _fromUser(e){return new Vy(e)}async getSession(){return ms._fromIdtoken(await this.user.getIdToken(),this.user)}async enroll(e,n){const r=e,i=await this.getSession(),s=await qr(this.user,r._process(this.user.auth,i,n));return await this.user._updateTokensIfNecessary(s),this.user.reload()}async unenroll(e){const n=typeof e=="string"?e:e.uid,r=await this.user.getIdToken();try{const i=await qr(this.user,B2(this.user.auth,{idToken:r,mfaEnrollmentId:n}));this.enrolledFactors=this.enrolledFactors.filter(({uid:s})=>s!==n),await this.user._updateTokensIfNecessary(i),await this.user.reload()}catch(i){throw i}}}const Zp=new WeakMap;function z2(t){const e=j(t);return Zp.has(e)||Zp.set(e,Vy._fromUser(e)),Zp.get(e)}const wh="__sak";/**
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
 */class WR{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(wh,"1"),this.storage.removeItem(wh),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j2(){const t=Ne();return Cy(t)||ka(t)}const q2=1e3,W2=10;class GR extends WR{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=j2()&&CV(),this.fallbackToPolling=kR(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);PV()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,W2):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},q2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}GR.type="LOCAL";const Ly=GR;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HR extends WR{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}HR.type="SESSION";const Ns=HR;/**
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
 */function G2(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class vf{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new vf(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await G2(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}vf.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ac(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class H2{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=ac("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const f=h;if(f.data.eventId===u)switch(f.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(f.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xe(){return window}function K2(t){Xe().location.href=t}/**
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
 */function My(){return typeof Xe().WorkerGlobalScope!="undefined"&&typeof Xe().importScripts=="function"}async function Q2(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Y2(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function X2(){return My()?self:null}/**
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
 */const KR="firebaseLocalStorageDb",J2=1,Ih="firebaseLocalStorage",QR="fbase_key";class lc{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function wf(t,e){return t.transaction([Ih],e?"readwrite":"readonly").objectStore(Ih)}function Z2(){const t=indexedDB.deleteDatabase(KR);return new lc(t).toPromise()}function Tg(){const t=indexedDB.open(KR,J2);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Ih,{keyPath:QR})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Ih)?e(r):(r.close(),await Z2(),e(await Tg()))})})}async function wI(t,e,n){const r=wf(t,!0).put({[QR]:e,value:n});return new lc(r).toPromise()}async function eL(t,e){const n=wf(t,!1).get(e),r=await new lc(n).toPromise();return r===void 0?null:r.value}function II(t,e){const n=wf(t,!0).delete(e);return new lc(n).toPromise()}const tL=800,nL=3;class YR{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Tg(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>nL)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return My()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=vf._getInstance(X2()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Q2(),!this.activeServiceWorker)return;this.sender=new H2(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Y2()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Tg();return await wI(e,wh,"1"),await II(e,wh),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>wI(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>eL(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>II(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=wf(i,!1).getAll();return new lc(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),tL)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}YR.type="LOCAL";const Tu=YR;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rL(t,e){return We(t,"POST","/v2/accounts/mfaSignIn:start",qe(t,e))}function iL(t,e){return We(t,"POST","/v2/accounts/mfaSignIn:finalize",qe(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sL=500,oL=6e4,nd=1e12;class aL{constructor(e){this.auth=e,this.counter=nd,this._widgets=new Map}render(e,n){const r=this.counter;return this._widgets.set(r,new lL(e,this.auth.name,n||{})),this.counter++,r}reset(e){var n;const r=e||nd;(n=this._widgets.get(r))===null||n===void 0||n.delete(),this._widgets.delete(r)}getResponse(e){var n;const r=e||nd;return((n=this._widgets.get(r))===null||n===void 0?void 0:n.getResponse())||""}async execute(e){var n;const r=e||nd;return(n=this._widgets.get(r))===null||n===void 0||n.execute(),""}}class lL{constructor(e,n,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof e=="string"?document.getElementById(e):e;V(i,"argument-error",{appName:n}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=uL(50);const{callback:e,"expired-callback":n}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,n)try{n()}catch{}this.isVisible&&this.execute()},oL)},sL))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function uL(t){const e=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<t;r++)e.push(n.charAt(Math.floor(Math.random()*n.length)));return e.join("")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const em=xR("rcb"),cL=new rc(3e4,6e4);class dL{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((e=Xe().grecaptcha)===null||e===void 0)&&e.render)}load(e,n=""){return V(hL(n),e,"argument-error"),this.shouldResolveImmediately(n)&&dI(Xe().grecaptcha)?Promise.resolve(Xe().grecaptcha):new Promise((r,i)=>{const s=Xe().setTimeout(()=>{i(nt(e,"network-request-failed"))},cL.get());Xe()[em]=()=>{Xe().clearTimeout(s),delete Xe()[em];const a=Xe().grecaptcha;if(!a||!dI(a)){i(nt(e,"internal-error"));return}const l=a.render;a.render=(u,c)=>{const h=l(u,c);return this.counter++,h},this.hostLanguage=n,r(a)};const o=`${VV()}?${Pa({onload:em,render:"explicit",hl:n})}`;ky(o).catch(()=>{clearTimeout(s),i(nt(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var n;return!!(!((n=Xe().grecaptcha)===null||n===void 0)&&n.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function hL(t){return t.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(t)}class fL{async load(e){return new aL(e)}clearedOneInstance(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XR="recaptcha",pL={theme:"light",type:"image"};class mL{constructor(e,n,r=Object.assign({},pL)){this.parameters=r,this.type=XR,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=Be(e),this.isInvisible=this.parameters.size==="invisible",V(typeof document!="undefined",this.auth,"operation-not-supported-in-this-environment");const i=typeof n=="string"?document.getElementById(n):n;V(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new fL:new dL,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),n=this.getAssertedRecaptcha(),r=n.getResponse(e);return r||new Promise(i=>{const s=o=>{!o||(this.tokenChangeListeners.delete(s),i(o))};this.tokenChangeListeners.add(s),this.isInvisible&&n.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){V(!this.parameters.sitekey,this.auth,"argument-error"),V(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),V(typeof document!="undefined",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return n=>{if(this.tokenChangeListeners.forEach(r=>r(n)),typeof e=="function")e(n);else if(typeof e=="string"){const r=Xe()[e];typeof r=="function"&&r(n)}}}assertNotDestroyed(){V(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const n=document.createElement("div");e.appendChild(n),e=n}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){V(Ay()&&!My(),this.auth,"internal-error"),await gL(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await pV(this.auth);V(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return V(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function gL(){let t=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}t=()=>e(),window.addEventListener("load",t)}).catch(e=>{throw t&&window.removeEventListener("load",t),e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fy{constructor(e,n){this.verificationId=e,this.onConfirmation=n}confirm(e){const n=Ss._fromVerification(this.verificationId,e);return this.onConfirmation(n)}}async function _L(t,e,n){if($e(t.app))return Promise.reject(ut(t));const r=Be(t),i=await If(r,e,j(n));return new Fy(i,s=>_f(r,s))}async function yL(t,e,n){const r=j(t);await gf(!1,r,"phone");const i=await If(r.auth,e,j(n));return new Fy(i,s=>UR(r,s))}async function vL(t,e,n){const r=j(t);if($e(r.auth.app))return Promise.reject(ut(r.auth));const i=await If(r.auth,e,j(n));return new Fy(i,s=>$R(r,s))}async function If(t,e,n){var r;const i=await n.verify();try{V(typeof i=="string",t,"argument-error"),V(n.type===XR,t,"argument-error");let s;if(typeof e=="string"?s={phoneNumber:e}:s=e,"session"in s){const o=s.session;if("phoneNumber"in s)return V(o.type==="enroll",t,"internal-error"),(await U2(t,{idToken:o.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}})).phoneSessionInfo.sessionInfo;{V(o.type==="signin",t,"internal-error");const a=((r=s.multiFactorHint)===null||r===void 0?void 0:r.uid)||s.multiFactorUid;return V(a,t,"missing-multi-factor-info"),(await rL(t,{mfaPendingCredential:o.credential,mfaEnrollmentId:a,phoneSignInInfo:{recaptchaToken:i}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:o}=await n2(t,{phoneNumber:s.phoneNumber,recaptchaToken:i});return o}}finally{n._reset()}}async function wL(t,e){const n=j(t);if($e(n.auth.app))return Promise.reject(ut(n.auth));await by(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn{constructor(e){this.providerId=jn.PROVIDER_ID,this.auth=Be(e)}verifyPhoneNumber(e,n){return If(this.auth,e,j(n))}static credential(e,n){return Ss._fromVerification(e,n)}static credentialFromResult(e){const n=e;return jn.credentialFromTaggedObject(n)}static credentialFromError(e){return jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:n,temporaryProof:r}=e;return n&&r?Ss._fromTokenResponse(n,r):null}}jn.PROVIDER_ID="phone";jn.PHONE_SIGN_IN_METHOD="phone";/**
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
 */function Ks(t,e){return e?hn(e):(V(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Uy extends ba{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Mr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Mr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Mr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function IL(t){return FR(t.auth,new Uy(t),t.bypassAuthState)}function EL(t){const{auth:e,user:n}=t;return V(n,e,"internal-error"),MR(n,new Uy(t),t.bypassAuthState)}async function TL(t){const{auth:e,user:n}=t;return V(n,e,"internal-error"),by(n,new Uy(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JR{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return IL;case"linkViaPopup":case"linkViaRedirect":return TL;case"reauthViaPopup":case"reauthViaRedirect":return EL;default:Tt(this.auth,"internal-error")}}resolve(e){Wn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Wn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SL=new rc(2e3,1e4);async function RL(t,e,n){if($e(t.app))return Promise.reject(nt(t,"operation-not-supported-in-this-environment"));const r=Be(t);Ca(t,e,Yr);const i=Ks(r,n);return new Dr(r,"signInViaPopup",e,i).executeNotNull()}async function AL(t,e,n){const r=j(t);if($e(r.auth.app))return Promise.reject(nt(r.auth,"operation-not-supported-in-this-environment"));Ca(r.auth,e,Yr);const i=Ks(r.auth,n);return new Dr(r.auth,"reauthViaPopup",e,i,r).executeNotNull()}async function PL(t,e,n){const r=j(t);Ca(r.auth,e,Yr);const i=Ks(r.auth,n);return new Dr(r.auth,"linkViaPopup",e,i,r).executeNotNull()}class Dr extends JR{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Dr.currentPopupAction&&Dr.currentPopupAction.cancel(),Dr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return V(e,this.auth,"internal-error"),e}async onExecution(){Wn(this.filter.length===1,"Popup operations only handle one event");const e=ac();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(nt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(nt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Dr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(nt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,SL.get())};e()}}Dr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CL="pendingRedirect",Ul=new Map;class kL extends JR{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Ul.get(this.auth._key());if(!e){try{const r=await bL(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Ul.set(this.auth._key(),e)}return this.bypassAuthState||Ul.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function bL(t,e){const n=eA(e),r=ZR(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}async function $y(t,e){return ZR(t)._set(eA(e),"true")}function xL(){Ul.clear()}function By(t,e){Ul.set(t._key(),e)}function ZR(t){return hn(t._redirectPersistence)}function eA(t){return Ts(CL,t.config.apiKey,t.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DL(t,e,n){return NL(t,e,n)}async function NL(t,e,n){if($e(t.app))return Promise.reject(ut(t));const r=Be(t);Ca(t,e,Yr),await r._initializationPromise;const i=Ks(r,n);return await $y(i,r),i._openRedirect(r,e,"signInViaRedirect")}function OL(t,e,n){return VL(t,e,n)}async function VL(t,e,n){const r=j(t);if(Ca(r.auth,e,Yr),$e(r.auth.app))return Promise.reject(ut(r.auth));await r.auth._initializationPromise;const i=Ks(r.auth,n);await $y(i,r.auth);const s=await tA(r);return i._openRedirect(r.auth,e,"reauthViaRedirect",s)}function LL(t,e,n){return ML(t,e,n)}async function ML(t,e,n){const r=j(t);Ca(r.auth,e,Yr),await r.auth._initializationPromise;const i=Ks(r.auth,n);await gf(!1,r,e.providerId),await $y(i,r.auth);const s=await tA(r);return i._openRedirect(r.auth,e,"linkViaRedirect",s)}async function FL(t,e){return await Be(t)._initializationPromise,Ef(t,e,!1)}async function Ef(t,e,n=!1){if($e(t.app))return Promise.reject(ut(t));const r=Be(t),i=Ks(r,e),o=await new kL(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}async function tA(t){const e=ac(`${t.uid}:::`);return t._redirectEventId=e,await t.auth._setRedirectUser(t),await t.auth._persistUserIfCurrent(t),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UL=10*60*1e3;class nA{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!$L(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!rA(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(nt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=UL&&this.cachedEventUids.clear(),this.cachedEventUids.has(EI(e))}saveEventToCache(e){this.cachedEventUids.add(EI(e)),this.lastProcessedEventTime=Date.now()}}function EI(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function rA({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function $L(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return rA(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iA(t,e={}){return We(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BL=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,zL=/^https?/;async function jL(t){if(t.config.emulator)return;const{authorizedDomains:e}=await iA(t);for(const n of e)try{if(qL(n))return}catch{}Tt(t,"unauthorized-domain")}function qL(t){const e=vu(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!zL.test(n))return!1;if(BL.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const WL=new rc(3e4,6e4);function TI(){const t=Xe().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function GL(t){return new Promise((e,n)=>{var r,i,s;function o(){TI(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{TI(),n(nt(t,"network-request-failed"))},timeout:WL.get()})}if(!((i=(r=Xe().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Xe().gapi)===null||s===void 0)&&s.load)o();else{const a=xR("iframefcb");return Xe()[a]=()=>{gapi.load?o():n(nt(t,"network-request-failed"))},ky(`${MV()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Dd=null,e})}let Dd=null;function HL(t){return Dd=Dd||GL(t),Dd}/**
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
 */const KL=new rc(5e3,15e3),QL="__/auth/iframe",YL="emulator/auth/iframe",XL={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},JL=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ZL(t){const e=t.config;V(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Py(e,YL):`https://${t.config.authDomain}/${QL}`,r={apiKey:e.apiKey,appName:t.name,v:Kr},i=JL.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Pa(r).slice(1)}`}async function eM(t){const e=await HL(t),n=Xe().gapi;return V(n,t,"internal-error"),e.open({where:document.body,url:ZL(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:XL,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=nt(t,"network-request-failed"),a=Xe().setTimeout(()=>{s(o)},KL.get());function l(){Xe().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const tM={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},nM=500,rM=600,iM="_blank",sM="http://localhost";class SI{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function oM(t,e,n,r=nM,i=rM){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},tM),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Ne().toLowerCase();n&&(a=RR(u)?iM:n),SR(u)&&(e=e||sM,l.scrollbars="yes");const c=Object.entries(l).reduce((f,[p,w])=>`${f}${p}=${w},`,"");if(AV(u)&&a!=="_self")return aM(e||"",a),new SI(null);const h=window.open(e||"",a,c);V(h,t,"popup-blocked");try{h.focus()}catch{}return new SI(h)}function aM(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const lM="__/auth/handler",uM="emulator/auth/handler",cM=encodeURIComponent("fac");async function Sg(t,e,n,r,i,s){V(t.config.authDomain,t,"auth-domain-config-required"),V(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Kr,eventId:i};if(e instanceof Yr){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",VN(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,h]of Object.entries(s||{}))o[c]=h}if(e instanceof xa){const c=e.getScopes().filter(h=>h!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await t._getAppCheckToken(),u=l?`#${cM}=${encodeURIComponent(l)}`:"";return`${dM(t)}?${Pa(a).slice(1)}${u}`}function dM({config:t}){return t.emulator?Py(t,uM):`https://${t.authDomain}/${lM}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tm="webStorageSupport";class hM{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ns,this._completeRedirectFn=Ef,this._overrideRedirectResult=By}async _openPopup(e,n,r,i){var s;Wn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Sg(e,n,r,vu(),i);return oM(e,o,ac())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Sg(e,n,r,vu(),i);return K2(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Wn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await eM(e),r=new nA(e);return n.register("authEvent",i=>(V(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(tm,{type:tm},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[tm];o!==void 0&&n(!!o),Tt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=jL(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return kR()||Cy()||ka()}}const fM=hM;class pM{constructor(e){this.factorId=e}_process(e,n,r){switch(n.type){case"enroll":return this._finalizeEnroll(e,n.credential,r);case"signin":return this._finalizeSignIn(e,n.credential);default:return ar("unexpected MultiFactorSessionType")}}}class zy extends pM{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new zy(e)}_finalizeEnroll(e,n,r){return $2(e,{idToken:n,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,n){return iL(e,{mfaPendingCredential:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class sA{constructor(){}static assertion(e){return zy._fromCredential(e)}}sA.FACTOR_ID="phone";var RI="@firebase/auth",AI="1.7.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mM{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){V(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gM(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function _M(t){jr(new Nn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;V(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:bR(t)},u=new NV(r,i,s,l);return BV(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),jr(new Nn("auth-internal",e=>{const n=Be(e.getProvider("auth").getImmediate());return(r=>new mM(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),pn(RI,AI,gM(t)),pn(RI,AI,"esm2017")}/**
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
 */const yM=5*60;CN("authIdTokenMaxAge");function vM(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}OV({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=nt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",vM().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});_M("Browser");/**
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
 */function Os(){return window}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wM=2e3;async function IM(t,e,n){var r;const{BuildInfo:i}=Os();Wn(e.sessionId,"AuthEvent did not contain a session ID");const s=await AM(e.sessionId),o={};return ka()?o.ibi=i.packageName:ic()?o.apn=i.packageName:Tt(t,"operation-not-supported-in-this-environment"),i.displayName&&(o.appDisplayName=i.displayName),o.sessionId=s,Sg(t,n,e.type,void 0,(r=e.eventId)!==null&&r!==void 0?r:void 0,o)}async function EM(t){const{BuildInfo:e}=Os(),n={};ka()?n.iosBundleId=e.packageName:ic()?n.androidPackageName=e.packageName:Tt(t,"operation-not-supported-in-this-environment"),await iA(t,n)}function TM(t){const{cordova:e}=Os();return new Promise(n=>{e.plugins.browsertab.isAvailable(r=>{let i=null;r?e.plugins.browsertab.openUrl(t):i=e.InAppBrowser.open(t,RV()?"_blank":"_system","location=yes"),n(i)})})}async function SM(t,e,n){const{cordova:r}=Os();let i=()=>{};try{await new Promise((s,o)=>{let a=null;function l(){var h;s();const f=(h=r.plugins.browsertab)===null||h===void 0?void 0:h.close;typeof f=="function"&&f(),typeof(n==null?void 0:n.close)=="function"&&n.close()}function u(){a||(a=window.setTimeout(()=>{o(nt(t,"redirect-cancelled-by-user"))},wM))}function c(){(document==null?void 0:document.visibilityState)==="visible"&&u()}e.addPassiveListener(l),document.addEventListener("resume",u,!1),ic()&&document.addEventListener("visibilitychange",c,!1),i=()=>{e.removePassiveListener(l),document.removeEventListener("resume",u,!1),document.removeEventListener("visibilitychange",c,!1),a&&window.clearTimeout(a)}})}finally{i()}}function RM(t){var e,n,r,i,s,o,a,l,u,c;const h=Os();V(typeof((e=h==null?void 0:h.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),V(typeof((n=h==null?void 0:h.BuildInfo)===null||n===void 0?void 0:n.packageName)!="undefined",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),V(typeof((s=(i=(r=h==null?void 0:h.cordova)===null||r===void 0?void 0:r.plugins)===null||i===void 0?void 0:i.browsertab)===null||s===void 0?void 0:s.openUrl)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),V(typeof((l=(a=(o=h==null?void 0:h.cordova)===null||o===void 0?void 0:o.plugins)===null||a===void 0?void 0:a.browsertab)===null||l===void 0?void 0:l.isAvailable)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),V(typeof((c=(u=h==null?void 0:h.cordova)===null||u===void 0?void 0:u.InAppBrowser)===null||c===void 0?void 0:c.open)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function AM(t){const e=PM(t),n=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(n)).map(i=>i.toString(16).padStart(2,"0")).join("")}function PM(t){if(Wn(/[0-9a-zA-Z]+/.test(t),"Can only convert alpha-numeric strings"),typeof TextEncoder!="undefined")return new TextEncoder().encode(t);const e=new ArrayBuffer(t.length),n=new Uint8Array(e);for(let r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CM=20;class kM extends nA{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach(n=>n(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function bM(t,e,n=null){return{type:e,eventId:n,urlResponse:null,sessionId:NM(),postBody:null,tenantId:t.tenantId,error:nt(t,"no-auth-event")}}function xM(t,e){return Rg()._set(Ag(t),e)}async function PI(t){const e=await Rg()._get(Ag(t));return e&&await Rg()._remove(Ag(t)),e}function DM(t,e){var n,r;const i=VM(e);if(i.includes("/__/auth/callback")){const s=Nd(i),o=s.firebaseError?OM(decodeURIComponent(s.firebaseError)):null,a=(r=(n=o==null?void 0:o.code)===null||n===void 0?void 0:n.split("auth/"))===null||r===void 0?void 0:r[1],l=a?nt(a):null;return l?{type:t.type,eventId:t.eventId,tenantId:t.tenantId,error:l,urlResponse:null,sessionId:null,postBody:null}:{type:t.type,eventId:t.eventId,tenantId:t.tenantId,sessionId:t.sessionId,urlResponse:i,postBody:null}}return null}function NM(){const t=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<CM;n++){const r=Math.floor(Math.random()*e.length);t.push(e.charAt(r))}return t.join("")}function Rg(){return hn(Ly)}function Ag(t){return Ts("authEvent",t.config.apiKey,t.name)}function OM(t){try{return JSON.parse(t)}catch{return null}}function VM(t){const e=Nd(t),n=e.link?decodeURIComponent(e.link):void 0,r=Nd(n).link,i=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return Nd(i).link||i||r||n||t}function Nd(t){if(!(t!=null&&t.includes("?")))return{};const[e,...n]=t.split("?");return Oo(n.join("?"))}/**
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
 */const LM=500;class MM{constructor(){this._redirectPersistence=Ns,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=Ef,this._overrideRedirectResult=By}async _initialize(e){const n=e._key();let r=this.eventManagers.get(n);return r||(r=new kM(e),this.eventManagers.set(n,r),this.attachCallbackListeners(e,r)),r}_openPopup(e){Tt(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,n,r,i){RM(e);const s=await this._initialize(e);await s.initialized(),s.resetRedirect(),xL(),await this._originValidation(e);const o=bM(e,r,i);await xM(e,o);const a=await IM(e,o,n),l=await TM(a);return SM(e,s,l)}_isIframeWebStorageSupported(e,n){throw new Error("Method not implemented.")}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=EM(e)),this.originValidationPromises[n]}attachCallbackListeners(e,n){const{universalLinks:r,handleOpenURL:i,BuildInfo:s}=Os(),o=setTimeout(async()=>{await PI(e),n.onEvent(CI())},LM),a=async c=>{clearTimeout(o);const h=await PI(e);let f=null;h&&(c==null?void 0:c.url)&&(f=DM(h,c.url)),n.onEvent(f||CI())};typeof r!="undefined"&&typeof r.subscribe=="function"&&r.subscribe(null,a);const l=i,u=`${s.packageName.toLowerCase()}://`;Os().handleOpenURL=async c=>{if(c.toLowerCase().startsWith(u)&&a({url:c}),typeof l=="function")try{l(c)}catch(h){console.error(h)}}}}const FM=MM;function CI(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:nt("no-auth-event")}}/**
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
 */function UM(t,e){Be(t)._logFramework(e)}var $M="@firebase/auth-compat",BM="0.5.5";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zM=1e3;function $l(){var t;return((t=self==null?void 0:self.location)===null||t===void 0?void 0:t.protocol)||null}function jM(){return $l()==="http:"||$l()==="https:"}function oA(t=Ne()){return!!(($l()==="file:"||$l()==="ionic:"||$l()==="capacitor:")&&t.toLowerCase().match(/iphone|ipad|ipod|android/))}function qM(){return yy()||_y()}function WM(){return eR()&&(document==null?void 0:document.documentMode)===11}function GM(t=Ne()){return/Edge\/\d+/.test(t)}function HM(t=Ne()){return WM()||GM(t)}function aA(){try{const t=self.localStorage,e=ac();if(t)return t.setItem(e,"1"),t.removeItem(e),HM()?mu():!0}catch{return jy()&&mu()}return!1}function jy(){return typeof global!="undefined"&&"WorkerGlobalScope"in global&&"importScripts"in global}function nm(){return(jM()||Z1()||oA())&&!qM()&&aA()&&!jy()}function lA(){return oA()&&typeof document!="undefined"}async function KM(){return lA()?new Promise(t=>{const e=setTimeout(()=>{t(!1)},zM);document.addEventListener("deviceready",()=>{clearTimeout(e),t(!0)})}):!1}function QM(){return typeof window!="undefined"?window:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cn={LOCAL:"local",NONE:"none",SESSION:"session"},al=V,uA="persistence";function YM(t,e){if(al(Object.values(cn).includes(e),t,"invalid-persistence-type"),yy()){al(e!==cn.SESSION,t,"unsupported-persistence-type");return}if(_y()){al(e===cn.NONE,t,"unsupported-persistence-type");return}if(jy()){al(e===cn.NONE||e===cn.LOCAL&&mu(),t,"unsupported-persistence-type");return}al(e===cn.NONE||aA(),t,"unsupported-persistence-type")}async function Pg(t){await t._initializationPromise;const e=cA(),n=Ts(uA,t.config.apiKey,t.name);e&&e.setItem(n,t._getPersistence())}function XM(t,e){const n=cA();if(!n)return[];const r=Ts(uA,t,e);switch(n.getItem(r)){case cn.NONE:return[la];case cn.LOCAL:return[Tu,Ns];case cn.SESSION:return[Ns];default:return[]}}function cA(){var t;try{return((t=QM())===null||t===void 0?void 0:t.sessionStorage)||null}catch{return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JM=V;class wi{constructor(){this.browserResolver=hn(fM),this.cordovaResolver=hn(FM),this.underlyingResolver=null,this._redirectPersistence=Ns,this._completeRedirectFn=Ef,this._overrideRedirectResult=By}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,n,r,i)}async _openRedirect(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,n,r,i)}_isIframeWebStorageSupported(e,n){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,n)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return lA()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return JM(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await KM();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dA(t){return t.unwrap()}function ZM(t){return t.wrapped()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eF(t){return hA(t)}function tF(t,e){var n;const r=(n=e.customData)===null||n===void 0?void 0:n._tokenResponse;if((e==null?void 0:e.code)==="auth/multi-factor-auth-required"){const i=e;i.resolver=new nF(t,F2(t,e))}else if(r){const i=hA(e),s=e;i&&(s.credential=i,s.tenantId=r.tenantId||void 0,s.email=r.email||void 0,s.phoneNumber=r.phoneNumber||void 0)}}function hA(t){const{_tokenResponse:e}=t instanceof bt?t.customData:t;if(!e)return null;if(!(t instanceof bt)&&"temporaryProof"in e&&"phoneNumber"in e)return jn.credentialFromResult(t);const n=e.providerId;if(!n||n===ol.PASSWORD)return null;let r;switch(n){case ol.GOOGLE:r=nr;break;case ol.FACEBOOK:r=tr;break;case ol.GITHUB:r=rr;break;case ol.TWITTER:r=ir;break;default:const{oauthIdToken:i,oauthAccessToken:s,oauthTokenSecret:o,pendingToken:a,nonce:l}=e;return!s&&!o&&!i&&!a?null:a?n.startsWith("saml.")?ua._create(n,a):vr._fromParams({providerId:n,signInMethod:n,pendingToken:a,idToken:i,accessToken:s}):new qo(n).credential({idToken:i,accessToken:s,rawNonce:l})}return t instanceof bt?r.credentialFromError(t):r.credentialFromResult(t)}function Qt(t,e){return e.catch(n=>{throw n instanceof bt&&tF(t,n),n}).then(n=>{const r=n.operationType,i=n.user;return{operationType:r,credential:eF(n),additionalUserInfo:L2(n),user:Nr.getOrCreate(i)}})}async function Cg(t,e){const n=await e;return{verificationId:n.verificationId,confirm:r=>Qt(t,n.confirm(r))}}class nF{constructor(e,n){this.resolver=n,this.auth=ZM(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return Qt(dA(this.auth),this.resolver.resolveSignIn(e))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr{constructor(e){this._delegate=e,this.multiFactor=z2(e)}static getOrCreate(e){return Nr.USER_MAP.has(e)||Nr.USER_MAP.set(e,new Nr(e)),Nr.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return Qt(this.auth,UR(this._delegate,e))}async linkWithPhoneNumber(e,n){return Cg(this.auth,yL(this._delegate,e,n))}async linkWithPopup(e){return Qt(this.auth,PL(this._delegate,e,wi))}async linkWithRedirect(e){return await Pg(Be(this.auth)),LL(this._delegate,e,wi)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return Qt(this.auth,$R(this._delegate,e))}reauthenticateWithPhoneNumber(e,n){return Cg(this.auth,vL(this._delegate,e,n))}reauthenticateWithPopup(e){return Qt(this.auth,AL(this._delegate,e,wi))}async reauthenticateWithRedirect(e){return await Pg(Be(this.auth)),OL(this._delegate,e,wi)}sendEmailVerification(e){return R2(this._delegate,e)}async unlink(e){return await h2(this._delegate,e),this}updateEmail(e){return k2(this._delegate,e)}updatePassword(e){return b2(this._delegate,e)}updatePhoneNumber(e){return wL(this._delegate,e)}updateProfile(e){return C2(this._delegate,e)}verifyBeforeUpdateEmail(e,n){return A2(this._delegate,e,n)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}Nr.USER_MAP=new WeakMap;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ll=V;class kg{constructor(e,n){if(this.app=e,n.isInitialized()){this._delegate=n.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:r}=e.options;ll(r,"invalid-api-key",{appName:e.name}),ll(r,"invalid-api-key",{appName:e.name});const i=typeof window!="undefined"?wi:void 0;this._delegate=n.initialize({options:{persistence:rF(r,e.name),popupRedirectResolver:i}}),this._delegate._updateErrorMap(iV),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?Nr.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,n){zV(this._delegate,e,n)}applyActionCode(e){return _2(this._delegate,e)}checkActionCode(e){return BR(this._delegate,e)}confirmPasswordReset(e,n){return g2(this._delegate,e,n)}async createUserWithEmailAndPassword(e,n){return Qt(this._delegate,v2(this._delegate,e,n))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return S2(this._delegate,e)}isSignInWithEmailLink(e){return I2(this._delegate,e)}async getRedirectResult(){ll(nm(),this._delegate,"operation-not-supported-in-this-environment");const e=await FL(this._delegate,wi);return e?Qt(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){UM(this._delegate,e)}onAuthStateChanged(e,n,r){const{next:i,error:s,complete:o}=kI(e,n,r);return this._delegate.onAuthStateChanged(i,s,o)}onIdTokenChanged(e,n,r){const{next:i,error:s,complete:o}=kI(e,n,r);return this._delegate.onIdTokenChanged(i,s,o)}sendSignInLinkToEmail(e,n){return w2(this._delegate,e,n)}sendPasswordResetEmail(e,n){return m2(this._delegate,e,n||void 0)}async setPersistence(e){YM(this._delegate,e);let n;switch(e){case cn.SESSION:n=Ns;break;case cn.LOCAL:n=await hn(Tu)._isAvailable()?Tu:Ly;break;case cn.NONE:n=la;break;default:return Tt("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(n)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return Qt(this._delegate,d2(this._delegate))}signInWithCredential(e){return Qt(this._delegate,_f(this._delegate,e))}signInWithCustomToken(e){return Qt(this._delegate,p2(this._delegate,e))}signInWithEmailAndPassword(e,n){return Qt(this._delegate,zR(this._delegate,e,n))}signInWithEmailLink(e,n){return Qt(this._delegate,E2(this._delegate,e,n))}signInWithPhoneNumber(e,n){return Cg(this._delegate,_L(this._delegate,e,n))}async signInWithPopup(e){return ll(nm(),this._delegate,"operation-not-supported-in-this-environment"),Qt(this._delegate,RL(this._delegate,e,wi))}async signInWithRedirect(e){return ll(nm(),this._delegate,"operation-not-supported-in-this-environment"),await Pg(this._delegate),DL(this._delegate,e,wi)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return y2(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}kg.Persistence=cn;function kI(t,e,n){let r=t;typeof t!="function"&&({next:r,error:e,complete:n}=t);const i=r;return{next:o=>i(o&&Nr.getOrCreate(o)),error:e,complete:n}}function rF(t,e){const n=XM(t,e);if(typeof self!="undefined"&&!n.includes(Tu)&&n.push(Tu),typeof window!="undefined")for(const r of[Ly,Ns])n.includes(r)||n.push(r);return n.includes(la)||n.push(la),n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qy{constructor(){this.providerId="phone",this._delegate=new jn(dA(mr.auth()))}static credential(e,n){return jn.credential(e,n)}verifyPhoneNumber(e,n){return this._delegate.verifyPhoneNumber(e,n)}unwrap(){return this._delegate}}qy.PHONE_SIGN_IN_METHOD=jn.PHONE_SIGN_IN_METHOD;qy.PROVIDER_ID=jn.PROVIDER_ID;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iF=V;class sF{constructor(e,n,r=mr.app()){var i;iF((i=r.options)===null||i===void 0?void 0:i.apiKey,"invalid-api-key",{appName:r.name}),this._delegate=new mL(r.auth(),e,n),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oF="auth-compat";function aF(t){t.INTERNAL.registerComponent(new Nn(oF,e=>{const n=e.getProvider("app-compat").getImmediate(),r=e.getProvider("auth");return new kg(n,r)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:lo.EMAIL_SIGNIN,PASSWORD_RESET:lo.PASSWORD_RESET,RECOVER_EMAIL:lo.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:lo.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:lo.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:lo.VERIFY_EMAIL}},EmailAuthProvider:Ki,FacebookAuthProvider:tr,GithubAuthProvider:rr,GoogleAuthProvider:nr,OAuthProvider:qo,SAMLAuthProvider:yh,PhoneAuthProvider:qy,PhoneMultiFactorGenerator:sA,RecaptchaVerifier:sF,TwitterAuthProvider:ir,Auth:kg,AuthCredential:ba,Error:bt}).setInstantiationMode("LAZY").setMultipleInstances(!1)),t.registerVersion($M,BM)}aF(mr);var lF=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},$,Wy=Wy||{},Z=lF||self;function Tf(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function uc(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function uF(t){return Object.prototype.hasOwnProperty.call(t,rm)&&t[rm]||(t[rm]=++cF)}var rm="closure_uid_"+(1e9*Math.random()>>>0),cF=0;function dF(t,e,n){return t.call.apply(t.bind,arguments)}function hF(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function xt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?xt=dF:xt=hF,xt.apply(null,arguments)}function rd(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function ht(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function Qi(){this.s=this.s,this.o=this.o}var fF=0;Qi.prototype.s=!1;Qi.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),fF!=0)&&uF(this)};Qi.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const fA=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Gy(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function bI(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Tf(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function Dt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Dt.prototype.h=function(){this.defaultPrevented=!0};var pF=function(){if(!Z.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const n=()=>{};Z.addEventListener("test",n,e),Z.removeEventListener("test",n,e)}catch{}return t}();function Su(t){return/^[\s\xa0]*$/.test(t)}function Sf(){var t=Z.navigator;return t&&(t=t.userAgent)?t:""}function sr(t){return Sf().indexOf(t)!=-1}function Hy(t){return Hy[" "](t),t}Hy[" "]=function(){};function mF(t,e){var n=aU;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var gF=sr("Opera"),ca=sr("Trident")||sr("MSIE"),pA=sr("Edge"),bg=pA||ca,mA=sr("Gecko")&&!(Sf().toLowerCase().indexOf("webkit")!=-1&&!sr("Edge"))&&!(sr("Trident")||sr("MSIE"))&&!sr("Edge"),_F=Sf().toLowerCase().indexOf("webkit")!=-1&&!sr("Edge");function gA(){var t=Z.document;return t?t.documentMode:void 0}var xg;e:{var im="",sm=function(){var t=Sf();if(mA)return/rv:([^\);]+)(\)|;)/.exec(t);if(pA)return/Edge\/([\d\.]+)/.exec(t);if(ca)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(_F)return/WebKit\/(\S+)/.exec(t);if(gF)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(sm&&(im=sm?sm[1]:""),ca){var om=gA();if(om!=null&&om>parseFloat(im)){xg=String(om);break e}}xg=im}var Dg;if(Z.document&&ca){var xI=gA();Dg=xI||parseInt(xg,10)||void 0}else Dg=void 0;var yF=Dg;function Ru(t,e){if(Dt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(mA){e:{try{Hy(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:vF[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Ru.$.h.call(this)}}ht(Ru,Dt);var vF={2:"touch",3:"pen",4:"mouse"};Ru.prototype.h=function(){Ru.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var cc="closure_listenable_"+(1e6*Math.random()|0),wF=0;function IF(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=i,this.key=++wF,this.fa=this.ia=!1}function Rf(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function Ky(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function EF(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function _A(t){const e={};for(const n in t)e[n]=t[n];return e}const DI="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function yA(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<DI.length;s++)n=DI[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Af(t){this.src=t,this.g={},this.h=0}Af.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=Og(t,e,r,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new IF(e,this.src,s,!!r,i),e.ia=n,t.push(e)),e};function Ng(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=fA(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(Rf(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Og(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==r)return i}return-1}var Qy="closure_lm_"+(1e6*Math.random()|0),am={};function vA(t,e,n,r,i){if(r&&r.once)return IA(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)vA(t,e[s],n,r,i);return null}return n=Jy(n),t&&t[cc]?t.O(e,n,uc(r)?!!r.capture:!!r,i):wA(t,e,n,!1,r,i)}function wA(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=uc(i)?!!i.capture:!!i,a=Xy(t);if(a||(t[Qy]=a=new Af(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=TF(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)pF||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(TA(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function TF(){function t(n){return e.call(t.src,t.listener,n)}const e=SF;return t}function IA(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)IA(t,e[s],n,r,i);return null}return n=Jy(n),t&&t[cc]?t.P(e,n,uc(r)?!!r.capture:!!r,i):wA(t,e,n,!0,r,i)}function EA(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)EA(t,e[s],n,r,i);else r=uc(r)?!!r.capture:!!r,n=Jy(n),t&&t[cc]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=Og(s,n,r,i),-1<n&&(Rf(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=Xy(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Og(e,n,r,i)),(n=-1<t?e[t]:null)&&Yy(n))}function Yy(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[cc])Ng(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(TA(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Xy(e))?(Ng(n,t),n.h==0&&(n.src=null,e[Qy]=null)):Rf(t)}}}function TA(t){return t in am?am[t]:am[t]="on"+t}function SF(t,e){if(t.fa)t=!0;else{e=new Ru(e,this);var n=t.listener,r=t.la||t.src;t.ia&&Yy(t),t=n.call(r,e)}return t}function Xy(t){return t=t[Qy],t instanceof Af?t:null}var lm="__closure_events_fn_"+(1e9*Math.random()>>>0);function Jy(t){return typeof t=="function"?t:(t[lm]||(t[lm]=function(e){return t.handleEvent(e)}),t[lm])}function dt(){Qi.call(this),this.i=new Af(this),this.S=this,this.J=null}ht(dt,Qi);dt.prototype[cc]=!0;dt.prototype.removeEventListener=function(t,e,n,r){EA(this,t,e,n,r)};function It(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new Dt(e,t);else if(e instanceof Dt)e.target=e.target||t;else{var i=e;e=new Dt(r,t),yA(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=id(o,r,!0,e)&&i}if(o=e.g=t,i=id(o,r,!0,e)&&i,i=id(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=id(o,r,!1,e)&&i}dt.prototype.N=function(){if(dt.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Rf(n[r]);delete t.g[e],t.h--}}this.J=null};dt.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};dt.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function id(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&Ng(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var Zy=Z.JSON.stringify;class RF{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function AF(){var t=ev;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class PF{constructor(){this.h=this.g=null}add(e,n){const r=SA.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var SA=new RF(()=>new CF,t=>t.reset());class CF{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function kF(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function bF(t){Z.setTimeout(()=>{throw t},0)}let Au,Pu=!1,ev=new PF,RA=()=>{const t=Z.Promise.resolve(void 0);Au=()=>{t.then(xF)}};var xF=()=>{for(var t;t=AF();){try{t.h.call(t.g)}catch(n){bF(n)}var e=SA;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Pu=!1};function Pf(t,e){dt.call(this),this.h=t||1,this.g=e||Z,this.j=xt(this.qb,this),this.l=Date.now()}ht(Pf,dt);$=Pf.prototype;$.ga=!1;$.T=null;$.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),It(this,"tick"),this.ga&&(tv(this),this.start()))}};$.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function tv(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}$.N=function(){Pf.$.N.call(this),tv(this),delete this.g};function nv(t,e,n){if(typeof t=="function")n&&(t=xt(t,n));else if(t&&typeof t.handleEvent=="function")t=xt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:Z.setTimeout(t,e||0)}function AA(t){t.g=nv(()=>{t.g=null,t.i&&(t.i=!1,AA(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class DF extends Qi{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:AA(this)}N(){super.N(),this.g&&(Z.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Cu(t){Qi.call(this),this.h=t,this.g={}}ht(Cu,Qi);var NI=[];function PA(t,e,n,r){Array.isArray(n)||(n&&(NI[0]=n.toString()),n=NI);for(var i=0;i<n.length;i++){var s=vA(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function CA(t){Ky(t.g,function(e,n){this.g.hasOwnProperty(n)&&Yy(e)},t),t.g={}}Cu.prototype.N=function(){Cu.$.N.call(this),CA(this)};Cu.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Cf(){this.g=!0}Cf.prototype.Ea=function(){this.g=!1};function NF(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function OF(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function Vo(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+LF(t,n)+(r?" "+r:"")})}function VF(t,e){t.info(function(){return"TIMEOUT: "+e})}Cf.prototype.info=function(){};function LF(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Zy(n)}catch{return e}}var Qs={},OI=null;function kf(){return OI=OI||new dt}Qs.Ta="serverreachability";function kA(t){Dt.call(this,Qs.Ta,t)}ht(kA,Dt);function ku(t){const e=kf();It(e,new kA(e))}Qs.STAT_EVENT="statevent";function bA(t,e){Dt.call(this,Qs.STAT_EVENT,t),this.stat=e}ht(bA,Dt);function Bt(t){const e=kf();It(e,new bA(e,t))}Qs.Ua="timingevent";function xA(t,e){Dt.call(this,Qs.Ua,t),this.size=e}ht(xA,Dt);function dc(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return Z.setTimeout(function(){t()},e)}var bf={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},DA={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function rv(){}rv.prototype.h=null;function VI(t){return t.h||(t.h=t.i())}function NA(){}var hc={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function iv(){Dt.call(this,"d")}ht(iv,Dt);function sv(){Dt.call(this,"c")}ht(sv,Dt);var Vg;function xf(){}ht(xf,rv);xf.prototype.g=function(){return new XMLHttpRequest};xf.prototype.i=function(){return{}};Vg=new xf;function fc(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new Cu(this),this.P=MF,t=bg?125:void 0,this.V=new Pf(t),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new OA}function OA(){this.i=null,this.g="",this.h=!1}var MF=45e3,VA={},Lg={};$=fc.prototype;$.setTimeout=function(t){this.P=t};function Mg(t,e,n){t.L=1,t.A=Nf(Wr(e)),t.u=n,t.S=!0,LA(t,null)}function LA(t,e){t.G=Date.now(),pc(t),t.B=Wr(t.A);var n=t.B,r=t.W;Array.isArray(r)||(r=[String(r)]),qA(n.i,"t",r),t.o=0,n=t.l.J,t.h=new OA,t.g=dP(t.l,n?e:null,!t.u),0<t.O&&(t.M=new DF(xt(t.Pa,t,t.g),t.O)),PA(t.U,t.g,"readystatechange",t.nb),e=t.I?_A(t.I):{},t.u?(t.v||(t.v="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.B,t.v,t.u,e)):(t.v="GET",t.g.ha(t.B,t.v,null,e)),ku(),NF(t.j,t.v,t.B,t.m,t.W,t.u)}$.nb=function(t){t=t.target;const e=this.M;e&&lr(t)==3?e.l():this.Pa(t)};$.Pa=function(t){try{if(t==this.g)e:{const c=lr(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>c)&&(c!=3||bg||this.g&&(this.h.h||this.g.ja()||UI(this.g)))){this.J||c!=4||e==7||(e==8||0>=h?ku(3):ku(2)),Df(this);var n=this.g.da();this.ca=n;t:if(MA(this)){var r=UI(this.g);t="";var i=r.length,s=lr(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){gs(this),Bl(this);var o="";break t}this.h.i=new Z.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.length=0,this.h.g+=t,this.o=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,OF(this.j,this.v,this.B,this.m,this.W,c,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Su(a)){var u=a;break t}}u=null}if(n=u)Vo(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Fg(this,n);else{this.i=!1,this.s=3,Bt(12),gs(this),Bl(this);break e}}this.S?(FA(this,c,o),bg&&this.i&&c==3&&(PA(this.U,this.V,"tick",this.mb),this.V.start())):(Vo(this.j,this.m,o,null),Fg(this,o)),c==4&&gs(this),this.i&&!this.J&&(c==4?aP(this.l,this):(this.i=!1,pc(this)))}else iU(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.s=3,Bt(12)):(this.s=0,Bt(13)),gs(this),Bl(this)}}}catch{}finally{}};function MA(t){return t.g?t.v=="GET"&&t.L!=2&&t.l.Ha:!1}function FA(t,e,n){let r=!0,i;for(;!t.J&&t.o<n.length;)if(i=FF(t,n),i==Lg){e==4&&(t.s=4,Bt(14),r=!1),Vo(t.j,t.m,null,"[Incomplete Response]");break}else if(i==VA){t.s=4,Bt(15),Vo(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Vo(t.j,t.m,i,null),Fg(t,i);MA(t)&&t.o!=0&&(t.h.g=t.h.g.slice(t.o),t.o=0),e!=4||n.length!=0||t.h.h||(t.s=1,Bt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),dv(e),e.M=!0,Bt(11))):(Vo(t.j,t.m,n,"[Invalid Chunked Response]"),gs(t),Bl(t))}$.mb=function(){if(this.g){var t=lr(this.g),e=this.g.ja();this.o<e.length&&(Df(this),FA(this,t,e),this.i&&t!=4&&pc(this))}};function FF(t,e){var n=t.o,r=e.indexOf(`
`,n);return r==-1?Lg:(n=Number(e.substring(n,r)),isNaN(n)?VA:(r+=1,r+n>e.length?Lg:(e=e.slice(r,r+n),t.o=r+n,e)))}$.cancel=function(){this.J=!0,gs(this)};function pc(t){t.Y=Date.now()+t.P,UA(t,t.P)}function UA(t,e){if(t.C!=null)throw Error("WatchDog timer not null");t.C=dc(xt(t.lb,t),e)}function Df(t){t.C&&(Z.clearTimeout(t.C),t.C=null)}$.lb=function(){this.C=null;const t=Date.now();0<=t-this.Y?(VF(this.j,this.B),this.L!=2&&(ku(),Bt(17)),gs(this),this.s=2,Bl(this)):UA(this,this.Y-t)};function Bl(t){t.l.H==0||t.J||aP(t.l,t)}function gs(t){Df(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,tv(t.V),CA(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function Fg(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||Ug(n.i,t))){if(!t.K&&Ug(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)Sh(n),Mf(n);else break e;cv(n),Bt(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=dc(xt(n.ib,n),6e3));if(1>=HA(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else _s(n,11)}else if((t.K||n.g==t)&&Sh(n),!Su(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.K=u[1],n.pa=u[2];const c=u[3];c!=null&&(n.ra=c,n.l.info("VER="+n.ra));const h=u[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const f=u[5];f!=null&&typeof f=="number"&&0<f&&(r=1.5*f,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const p=t.g;if(p){const w=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(w){var s=r.i;s.g||w.indexOf("spdy")==-1&&w.indexOf("quic")==-1&&w.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(ov(s,s.h),s.h=null))}if(r.F){const v=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(r.Da=v,Se(r.I,r.F,v))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=cP(r,r.J?r.pa:null,r.Y),o.K){KA(r.i,o);var a=o,l=r.L;l&&a.setTimeout(l),a.C&&(Df(a),pc(a)),r.g=o}else sP(r);0<n.j.length&&Ff(n)}else u[0]!="stop"&&u[0]!="close"||_s(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?_s(n,7):uv(n):u[0]!="noop"&&n.h&&n.h.Aa(u),n.A=0)}}ku(4)}catch{}}function UF(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map!="undefined"&&t instanceof Map||typeof Set!="undefined"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Tf(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function $F(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map!="undefined"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set!="undefined"&&t instanceof Set)){if(Tf(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function $A(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Tf(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=$F(t),r=UF(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var BA=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function BF(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Rs(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Rs){this.h=t.h,Eh(this,t.j),this.s=t.s,this.g=t.g,Th(this,t.m),this.l=t.l;var e=t.i,n=new bu;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),LI(this,n),this.o=t.o}else t&&(e=String(t).match(BA))?(this.h=!1,Eh(this,e[1]||"",!0),this.s=Sl(e[2]||""),this.g=Sl(e[3]||"",!0),Th(this,e[4]),this.l=Sl(e[5]||"",!0),LI(this,e[6]||"",!0),this.o=Sl(e[7]||"")):(this.h=!1,this.i=new bu(null,this.h))}Rs.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Rl(e,MI,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Rl(e,MI,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Rl(n,n.charAt(0)=="/"?qF:jF,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Rl(n,GF)),t.join("")};function Wr(t){return new Rs(t)}function Eh(t,e,n){t.j=n?Sl(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Th(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function LI(t,e,n){e instanceof bu?(t.i=e,HF(t.i,t.h)):(n||(e=Rl(e,WF)),t.i=new bu(e,t.h))}function Se(t,e,n){t.i.set(e,n)}function Nf(t){return Se(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Sl(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Rl(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,zF),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function zF(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var MI=/[#\/\?@]/g,jF=/[#\?:]/g,qF=/[#\?]/g,WF=/[#\?@]/g,GF=/#/g;function bu(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Yi(t){t.g||(t.g=new Map,t.h=0,t.i&&BF(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}$=bu.prototype;$.add=function(t,e){Yi(this),this.i=null,t=Da(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function zA(t,e){Yi(t),e=Da(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function jA(t,e){return Yi(t),e=Da(t,e),t.g.has(e)}$.forEach=function(t,e){Yi(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};$.ta=function(){Yi(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};$.Z=function(t){Yi(this);let e=[];if(typeof t=="string")jA(this,t)&&(e=e.concat(this.g.get(Da(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};$.set=function(t,e){return Yi(this),this.i=null,t=Da(this,t),jA(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};$.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function qA(t,e,n){zA(t,e),0<n.length&&(t.i=null,t.g.set(Da(t,e),Gy(n)),t.h+=n.length)}$.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function Da(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function HF(t,e){e&&!t.j&&(Yi(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(zA(this,r),qA(this,i,n))},t)),t.j=e}var KF=class{constructor(t,e){this.g=t,this.map=e}};function WA(t){this.l=t||QF,Z.PerformanceNavigationTiming?(t=Z.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(Z.g&&Z.g.Ka&&Z.g.Ka()&&Z.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var QF=10;function GA(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function HA(t){return t.h?1:t.g?t.g.size:0}function Ug(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function ov(t,e){t.g?t.g.add(e):t.h=e}function KA(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}WA.prototype.cancel=function(){if(this.i=QA(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function QA(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return Gy(t.i)}var YF=class{stringify(t){return Z.JSON.stringify(t,void 0)}parse(t){return Z.JSON.parse(t,void 0)}};function XF(){this.g=new YF}function JF(t,e,n){const r=n||"";try{$A(t,function(i,s){let o=i;uc(i)&&(o=Zy(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function ZF(t,e){const n=new Cf;if(Z.Image){const r=new Image;r.onload=rd(sd,n,r,"TestLoadImage: loaded",!0,e),r.onerror=rd(sd,n,r,"TestLoadImage: error",!1,e),r.onabort=rd(sd,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=rd(sd,n,r,"TestLoadImage: timeout",!1,e),Z.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function sd(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function Of(t){this.l=t.ec||null,this.j=t.ob||!1}ht(Of,rv);Of.prototype.g=function(){return new Vf(this.l,this.j)};Of.prototype.i=function(t){return function(){return t}}({});function Vf(t,e){dt.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=av,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}ht(Vf,dt);var av=0;$=Vf.prototype;$.open=function(t,e){if(this.readyState!=av)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,xu(this)};$.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||Z).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};$.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,mc(this)),this.readyState=av};$.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,xu(this)),this.g&&(this.readyState=3,xu(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof Z.ReadableStream!="undefined"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;YA(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function YA(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}$.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?mc(this):xu(this),this.readyState==3&&YA(this)}};$.Za=function(t){this.g&&(this.response=this.responseText=t,mc(this))};$.Ya=function(t){this.g&&(this.response=t,mc(this))};$.ka=function(){this.g&&mc(this)};function mc(t){t.readyState=4,t.l=null,t.j=null,t.A=null,xu(t)}$.setRequestHeader=function(t,e){this.v.append(t,e)};$.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};$.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function xu(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Vf.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var eU=Z.JSON.parse;function ze(t){dt.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=XA,this.L=this.M=!1}ht(ze,dt);var XA="",tU=/^https?$/i,nU=["POST","PUT"];$=ze.prototype;$.Oa=function(t){this.M=t};$.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Vg.g(),this.C=this.u?VI(this.u):VI(Vg),this.g.onreadystatechange=xt(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(s){FI(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=Z.FormData&&t instanceof Z.FormData,!(0<=fA(nU,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{eP(this),0<this.B&&((this.L=rU(this.g))?(this.g.timeout=this.B,this.g.ontimeout=xt(this.ua,this)):this.A=nv(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){FI(this,s)}};function rU(t){return ca&&typeof t.timeout=="number"&&t.ontimeout!==void 0}$.ua=function(){typeof Wy!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,It(this,"timeout"),this.abort(8))};function FI(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,JA(t),Lf(t)}function JA(t){t.F||(t.F=!0,It(t,"complete"),It(t,"error"))}$.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,It(this,"complete"),It(this,"abort"),Lf(this))};$.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Lf(this,!0)),ze.$.N.call(this)};$.La=function(){this.s||(this.G||this.v||this.l?ZA(this):this.kb())};$.kb=function(){ZA(this)};function ZA(t){if(t.h&&typeof Wy!="undefined"&&(!t.C[1]||lr(t)!=4||t.da()!=2)){if(t.v&&lr(t)==4)nv(t.La,0,t);else if(It(t,"readystatechange"),lr(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var i=String(t.I).match(BA)[1]||null;!i&&Z.self&&Z.self.location&&(i=Z.self.location.protocol.slice(0,-1)),r=!tU.test(i?i.toLowerCase():"")}n=r}if(n)It(t,"complete"),It(t,"success");else{t.m=6;try{var s=2<lr(t)?t.g.statusText:""}catch{s=""}t.j=s+" ["+t.da()+"]",JA(t)}}finally{Lf(t)}}}}function Lf(t,e){if(t.g){eP(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||It(t,"ready");try{n.onreadystatechange=r}catch{}}}function eP(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(Z.clearTimeout(t.A),t.A=null)}$.isActive=function(){return!!this.g};function lr(t){return t.g?t.g.readyState:0}$.da=function(){try{return 2<lr(this)?this.g.status:-1}catch{return-1}};$.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};$.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),eU(e)}};function UI(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case XA:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function iU(t){const e={};t=(t.g&&2<=lr(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(Su(t[r]))continue;var n=kF(t[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=e[i]||[];e[i]=s,s.push(n)}EF(e,function(r){return r.join(", ")})}$.Ia=function(){return this.m};$.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function tP(t){let e="";return Ky(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function lv(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=tP(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Se(t,e,n))}function ul(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function nP(t){this.Ga=0,this.j=[],this.l=new Cf,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=ul("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=ul("baseRetryDelayMs",5e3,t),this.hb=ul("retryDelaySeedMs",1e4,t),this.eb=ul("forwardChannelMaxRetries",2,t),this.xa=ul("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new WA(t&&t.concurrentRequestLimit),this.Ja=new XF,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}$=nP.prototype;$.ra=8;$.H=1;function uv(t){if(rP(t),t.H==3){var e=t.W++,n=Wr(t.I);if(Se(n,"SID",t.K),Se(n,"RID",e),Se(n,"TYPE","terminate"),gc(t,n),e=new fc(t,t.l,e),e.L=2,e.A=Nf(Wr(n)),n=!1,Z.navigator&&Z.navigator.sendBeacon)try{n=Z.navigator.sendBeacon(e.A.toString(),"")}catch{}!n&&Z.Image&&(new Image().src=e.A,n=!0),n||(e.g=dP(e.l,null),e.g.ha(e.A)),e.G=Date.now(),pc(e)}uP(t)}function Mf(t){t.g&&(dv(t),t.g.cancel(),t.g=null)}function rP(t){Mf(t),t.u&&(Z.clearTimeout(t.u),t.u=null),Sh(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&Z.clearTimeout(t.m),t.m=null)}function Ff(t){if(!GA(t.i)&&!t.m){t.m=!0;var e=t.Na;Au||RA(),Pu||(Au(),Pu=!0),ev.add(e,t),t.C=0}}function sU(t,e){return HA(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=dc(xt(t.Na,t,e),lP(t,t.C)),t.C++,!0)}$.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new fc(this,this.l,t);let s=this.s;if(this.U&&(s?(s=_A(s),yA(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=iP(this,i,e),n=Wr(this.I),Se(n,"RID",t),Se(n,"CVER",22),this.F&&Se(n,"X-HTTP-Session-Id",this.F),gc(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(tP(s)))+"&"+e:this.o&&lv(n,this.o,s)),ov(this.i,i),this.bb&&Se(n,"TYPE","init"),this.P?(Se(n,"$req",e),Se(n,"SID","null"),i.aa=!0,Mg(i,n,null)):Mg(i,n,e),this.H=2}}else this.H==3&&(t?$I(this,t):this.j.length==0||GA(this.i)||$I(this))};function $I(t,e){var n;e?n=e.m:n=t.W++;const r=Wr(t.I);Se(r,"SID",t.K),Se(r,"RID",n),Se(r,"AID",t.V),gc(t,r),t.o&&t.s&&lv(r,t.o,t.s),n=new fc(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=iP(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),ov(t.i,n),Mg(n,r,e)}function gc(t,e){t.na&&Ky(t.na,function(n,r){Se(e,r,n)}),t.h&&$A({},function(n,r){Se(e,r,n)})}function iP(t,e,n){n=Math.min(t.j.length,n);var r=t.h?xt(t.h.Va,t.h,t):null;e:{var i=t.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].g;const c=i[l].map;if(u-=s,0>u)s=Math.max(0,i[l].g-100),a=!1;else try{JF(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function sP(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;Au||RA(),Pu||(Au(),Pu=!0),ev.add(e,t),t.A=0}}function cv(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=dc(xt(t.Ma,t),lP(t,t.A)),t.A++,!0)}$.Ma=function(){if(this.u=null,oP(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=dc(xt(this.jb,this),t)}};$.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,Bt(10),Mf(this),oP(this))};function dv(t){t.B!=null&&(Z.clearTimeout(t.B),t.B=null)}function oP(t){t.g=new fc(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=Wr(t.wa);Se(e,"RID","rpc"),Se(e,"SID",t.K),Se(e,"AID",t.V),Se(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&Se(e,"TO",t.qa),Se(e,"TYPE","xmlhttp"),gc(t,e),t.o&&t.s&&lv(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.A=Nf(Wr(e)),n.u=null,n.S=!0,LA(n,t)}$.ib=function(){this.v!=null&&(this.v=null,Mf(this),cv(this),Bt(19))};function Sh(t){t.v!=null&&(Z.clearTimeout(t.v),t.v=null)}function aP(t,e){var n=null;if(t.g==e){Sh(t),dv(t),t.g=null;var r=2}else if(Ug(t.i,e))n=e.F,KA(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.u?e.u.length:0,e=Date.now()-e.G;var i=t.C;r=kf(),It(r,new xA(r,n)),Ff(t)}else sP(t);else if(i=e.s,i==3||i==0&&0<e.ca||!(r==1&&sU(t,e)||r==2&&cv(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:_s(t,5);break;case 4:_s(t,10);break;case 3:_s(t,6);break;default:_s(t,2)}}}function lP(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function _s(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=xt(t.pb,t);n||(n=new Rs("//www.google.com/images/cleardot.gif"),Z.location&&Z.location.protocol=="http"||Eh(n,"https"),Nf(n)),ZF(n.toString(),r)}else Bt(2);t.H=0,t.h&&t.h.za(e),uP(t),rP(t)}$.pb=function(t){t?(this.l.info("Successfully pinged google.com"),Bt(2)):(this.l.info("Failed to ping google.com"),Bt(1))};function uP(t){if(t.H=0,t.ma=[],t.h){const e=QA(t.i);(e.length!=0||t.j.length!=0)&&(bI(t.ma,e),bI(t.ma,t.j),t.i.i.length=0,Gy(t.j),t.j.length=0),t.h.ya()}}function cP(t,e,n){var r=n instanceof Rs?Wr(n):new Rs(n);if(r.g!="")e&&(r.g=e+"."+r.g),Th(r,r.m);else{var i=Z.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new Rs(null);r&&Eh(s,r),e&&(s.g=e),i&&Th(s,i),n&&(s.l=n),r=s}return n=t.F,e=t.Da,n&&e&&Se(r,n,e),Se(r,"VER",t.ra),gc(t,r),r}function dP(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=t.Ha&&!t.va?new ze(new Of({ob:n})):new ze(t.va),e.Oa(t.J),e}$.isActive=function(){return!!this.h&&this.h.isActive(this)};function hP(){}$=hP.prototype;$.Ba=function(){};$.Aa=function(){};$.za=function(){};$.ya=function(){};$.isActive=function(){return!0};$.Va=function(){};function Rh(){if(ca&&!(10<=Number(yF)))throw Error("Environmental error: no available transport.")}Rh.prototype.g=function(t,e){return new gn(t,e)};function gn(t,e){dt.call(this),this.g=new nP(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!Su(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Su(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Na(this)}ht(gn,dt);gn.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;Bt(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=cP(t,null,t.Y),Ff(t)};gn.prototype.close=function(){uv(this.g)};gn.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Zy(t),t=n);e.j.push(new KF(e.fb++,t)),e.H==3&&Ff(e)};gn.prototype.N=function(){this.g.h=null,delete this.j,uv(this.g),delete this.g,gn.$.N.call(this)};function fP(t){iv.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}ht(fP,iv);function pP(){sv.call(this),this.status=1}ht(pP,sv);function Na(t){this.g=t}ht(Na,hP);Na.prototype.Ba=function(){It(this.g,"a")};Na.prototype.Aa=function(t){It(this.g,new fP(t))};Na.prototype.za=function(t){It(this.g,new pP)};Na.prototype.ya=function(){It(this.g,"b")};function oU(){this.blockSize=-1}function Gn(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}ht(Gn,oU);Gn.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function um(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var s=t.g[3],o=e+(s^n&(i^s))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(n^i))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^s)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~s))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+s&4294967295}Gn.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(i==0)for(;s<=n;)um(this,t,s),s+=this.blockSize;if(typeof t=="string"){for(;s<e;)if(r[i++]=t.charCodeAt(s++),i==this.blockSize){um(this,r),i=0;break}}else for(;s<e;)if(r[i++]=t[s++],i==this.blockSize){um(this,r),i=0;break}}this.h=i,this.i+=e};Gn.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function ge(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var s=t[i]|0;r&&s==e||(n[i]=s,r=!1)}this.g=n}var aU={};function hv(t){return-128<=t&&128>t?mF(t,function(e){return new ge([e|0],0>e?-1:0)}):new ge([t|0],0>t?-1:0)}function ur(t){if(isNaN(t)||!isFinite(t))return Go;if(0>t)return yt(ur(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=$g;return new ge(e,0)}function mP(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return yt(mP(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=ur(Math.pow(e,8)),r=Go,i=0;i<t.length;i+=8){var s=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+s),e);8>s?(s=ur(Math.pow(e,s)),r=r.R(s).add(ur(o))):(r=r.R(n),r=r.add(ur(o)))}return r}var $g=4294967296,Go=hv(0),Bg=hv(1),BI=hv(16777216);$=ge.prototype;$.ea=function(){if(Sn(this))return-yt(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:$g+r)*e,e*=$g}return t};$.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(Or(this))return"0";if(Sn(this))return"-"+yt(this).toString(t);for(var e=ur(Math.pow(t,6)),n=this,r="";;){var i=Ph(n,e).g;n=Ah(n,i.R(e));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,Or(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};$.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function Or(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function Sn(t){return t.h==-1}$.X=function(t){return t=Ah(this,t),Sn(t)?-1:Or(t)?0:1};function yt(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new ge(n,~t.h).add(Bg)}$.abs=function(){return Sn(this)?yt(this):this};$.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var s=r+(this.D(i)&65535)+(t.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new ge(n,n[n.length-1]&-2147483648?-1:0)};function Ah(t,e){return t.add(yt(e))}$.R=function(t){if(Or(this)||Or(t))return Go;if(Sn(this))return Sn(t)?yt(this).R(yt(t)):yt(yt(this).R(t));if(Sn(t))return yt(this.R(yt(t)));if(0>this.X(BI)&&0>t.X(BI))return ur(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(i)>>>16,l=t.D(i)&65535;n[2*r+2*i]+=o*l,od(n,2*r+2*i),n[2*r+2*i+1]+=s*l,od(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,od(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,od(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new ge(n,0)};function od(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function cl(t,e){this.g=t,this.h=e}function Ph(t,e){if(Or(e))throw Error("division by zero");if(Or(t))return new cl(Go,Go);if(Sn(t))return e=Ph(yt(t),e),new cl(yt(e.g),yt(e.h));if(Sn(e))return e=Ph(t,yt(e)),new cl(yt(e.g),e.h);if(30<t.g.length){if(Sn(t)||Sn(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Bg,r=e;0>=r.X(t);)n=zI(n),r=zI(r);var i=uo(n,1),s=uo(r,1);for(r=uo(r,2),n=uo(n,2);!Or(r);){var o=s.add(r);0>=o.X(t)&&(i=i.add(n),s=o),r=uo(r,1),n=uo(n,1)}return e=Ah(t,i.R(e)),new cl(i,e)}for(i=Go;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=ur(n),o=s.R(e);Sn(o)||0<o.X(t);)n-=r,s=ur(n),o=s.R(e);Or(s)&&(s=Bg),i=i.add(s),t=Ah(t,o)}return new cl(i,t)}$.gb=function(t){return Ph(this,t).h};$.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new ge(n,this.h&t.h)};$.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new ge(n,this.h|t.h)};$.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new ge(n,this.h^t.h)};function zI(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new ge(n,t.h)}function uo(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],s=0;s<r;s++)i[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new ge(i,t.h)}Rh.prototype.createWebChannel=Rh.prototype.g;gn.prototype.send=gn.prototype.u;gn.prototype.open=gn.prototype.m;gn.prototype.close=gn.prototype.close;bf.NO_ERROR=0;bf.TIMEOUT=8;bf.HTTP_ERROR=6;DA.COMPLETE="complete";NA.EventType=hc;hc.OPEN="a";hc.CLOSE="b";hc.ERROR="c";hc.MESSAGE="d";dt.prototype.listen=dt.prototype.O;ze.prototype.listenOnce=ze.prototype.P;ze.prototype.getLastError=ze.prototype.Sa;ze.prototype.getLastErrorCode=ze.prototype.Ia;ze.prototype.getStatus=ze.prototype.da;ze.prototype.getResponseJson=ze.prototype.Wa;ze.prototype.getResponseText=ze.prototype.ja;ze.prototype.send=ze.prototype.ha;ze.prototype.setWithCredentials=ze.prototype.Oa;Gn.prototype.digest=Gn.prototype.l;Gn.prototype.reset=Gn.prototype.reset;Gn.prototype.update=Gn.prototype.j;ge.prototype.add=ge.prototype.add;ge.prototype.multiply=ge.prototype.R;ge.prototype.modulo=ge.prototype.gb;ge.prototype.compare=ge.prototype.X;ge.prototype.toNumber=ge.prototype.ea;ge.prototype.toString=ge.prototype.toString;ge.prototype.getBits=ge.prototype.D;ge.fromNumber=ur;ge.fromString=mP;var lU=function(){return new Rh},uU=function(){return kf()},cm=bf,cU=DA,dU=Qs,jI={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},ad=NA,hU=ze,fU=Gn,Ho=ge;const qI="@firebase/firestore";/**
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
 */class ot{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ot.UNAUTHENTICATED=new ot(null),ot.GOOGLE_CREDENTIALS=new ot("google-credentials-uid"),ot.FIRST_PARTY=new ot("first-party-uid"),ot.MOCK_USER=new ot("mock-user");/**
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
 */let Oa="10.10.0";/**
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
 */const Li=new hf("@firebase/firestore");function _o(){return Li.logLevel}function pU(t){Li.setLogLevel(t)}function D(t,...e){if(Li.logLevel<=ie.DEBUG){const n=e.map(fv);Li.debug(`Firestore (${Oa}): ${t}`,...n)}}function Ke(t,...e){if(Li.logLevel<=ie.ERROR){const n=e.map(fv);Li.error(`Firestore (${Oa}): ${t}`,...n)}}function Hn(t,...e){if(Li.logLevel<=ie.WARN){const n=e.map(fv);Li.warn(`Firestore (${Oa}): ${t}`,...n)}}function fv(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function B(t="Unexpected state"){const e=`FIRESTORE (${Oa}) INTERNAL ASSERTION FAILED: `+t;throw Ke(e),new Error(e)}function W(t,e){t||B()}function mU(t,e){t||B()}function U(t,e){return t}/**
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
 */const k={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class x extends bt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class ct{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class gP{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class gU{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ot.UNAUTHENTICATED))}shutdown(){}}class _U{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class yU{constructor(e){this.t=e,this.currentUser=ot.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new ct;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new ct,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{D("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(D("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new ct)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(D("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(W(typeof r.accessToken=="string"),new gP(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return W(e===null||typeof e=="string"),new ot(e)}}class vU{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=ot.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class wU{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new vU(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(ot.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class IU{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class EU{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=s=>{s.error!=null&&D("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,D("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{D("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):D("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(W(typeof n.token=="string"),this.R=n.token,new IU(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TU(t){const e=typeof self!="undefined"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class _P{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=TU(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function te(t,e){return t<e?-1:t>e?1:0}function da(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}function yP(t){return t+"\0"}/**
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
 */class De{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new x(k.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new x(k.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new x(k.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new x(k.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return De.fromMillis(Date.now())}static fromDate(e){return De.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new De(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?te(this.nanoseconds,e.nanoseconds):te(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class H{constructor(e){this.timestamp=e}static fromTimestamp(e){return new H(e)}static min(){return new H(new De(0,0))}static max(){return new H(new De(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Du{constructor(e,n,r){n===void 0?n=0:n>e.length&&B(),r===void 0?r=e.length-n:r>e.length-n&&B(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Du.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Du?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class se extends Du{construct(e,n,r){return new se(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new x(k.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new se(n)}static emptyPath(){return new se([])}}const SU=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class be extends Du{construct(e,n,r){return new be(e,n,r)}static isValidIdentifier(e){return SU.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),be.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new be(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new x(k.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new x(k.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new x(k.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new x(k.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new be(n)}static emptyPath(){return new be([])}}/**
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
 */class F{constructor(e){this.path=e}static fromPath(e){return new F(se.fromString(e))}static fromName(e){return new F(se.fromString(e).popFirst(5))}static empty(){return new F(se.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&se.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return se.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new F(new se(e.slice()))}}/**
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
 */class Ch{constructor(e,n,r,i){this.indexId=e,this.collectionGroup=n,this.fields=r,this.indexState=i}}function zg(t){return t.fields.find(e=>e.kind===2)}function os(t){return t.fields.filter(e=>e.kind!==2)}Ch.UNKNOWN_ID=-1;class Od{constructor(e,n){this.fieldPath=e,this.kind=n}}class Nu{constructor(e,n){this.sequenceNumber=e,this.offset=n}static empty(){return new Nu(0,_n.min())}}function vP(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=H.fromTimestamp(r===1e9?new De(n+1,0):new De(n,r));return new _n(i,F.empty(),e)}function wP(t){return new _n(t.readTime,t.key,-1)}class _n{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new _n(H.min(),F.empty(),-1)}static max(){return new _n(H.max(),F.empty(),-1)}}function pv(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=F.comparator(t.documentKey,e.documentKey),n!==0?n:te(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IP="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class EP{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Xi(t){if(t.code!==k.FAILED_PRECONDITION||t.message!==IP)throw t;D("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class R{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&B(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new R((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof R?n:R.resolve(n)}catch(n){return R.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):R.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):R.reject(n)}static resolve(e){return new R((n,r)=>{n(e)})}static reject(e){return new R((n,r)=>{r(e)})}static waitFor(e){return new R((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=R.resolve(!1);for(const r of e)n=n.next(i=>i?R.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new R((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(e[u]).next(c=>{o[u]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(e,n){return new R((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}/**
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
 */class Uf{constructor(e,n){this.action=e,this.transaction=n,this.aborted=!1,this.V=new ct,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{n.error?this.V.reject(new zl(e,n.error)):this.V.resolve()},this.transaction.onerror=r=>{const i=mv(r.target.error);this.V.reject(new zl(e,i))}}static open(e,n,r,i){try{return new Uf(n,e.transaction(i,r))}catch(s){throw new zl(n,s)}}get m(){return this.V.promise}abort(e){e&&this.V.reject(e),this.aborted||(D("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const n=this.transaction.objectStore(e);return new AU(n)}}class An{constructor(e,n,r){this.name=e,this.version=n,this.p=r,An.S(Ne())===12.2&&Ke("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return D("SimpleDb","Removing database:",e),as(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!mu())return!1;if(An.C())return!0;const e=Ne(),n=An.S(e),r=0<n&&n<10,i=An.v(e),s=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||s)}static C(){var e;return typeof process!="undefined"&&((e=process.__PRIVATE_env)===null||e===void 0?void 0:e.F)==="YES"}static M(e,n){return e.store(n)}static S(e){const n=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=n?n[1].split("_").slice(0,2).join("."):"-1";return Number(r)}static v(e){const n=e.match(/Android ([\d.]+)/i),r=n?n[1].split(".").slice(0,2).join("."):"-1";return Number(r)}async O(e){return this.db||(D("SimpleDb","Opening database:",this.name),this.db=await new Promise((n,r)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const o=s.target.result;n(o)},i.onblocked=()=>{r(new zl(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const o=s.target.error;o.name==="VersionError"?r(new x(k.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new x(k.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new zl(e,o))},i.onupgradeneeded=s=>{D("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const o=s.target.result;this.p.N(o,i.transaction,s.oldVersion,this.version).next(()=>{D("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.L&&(this.db.onversionchange=n=>this.L(n)),this.db}B(e){this.L=e,this.db&&(this.db.onversionchange=n=>e(n))}async runTransaction(e,n,r,i){const s=n==="readonly";let o=0;for(;;){++o;try{this.db=await this.O(e);const a=Uf.open(this.db,e,s?"readonly":"readwrite",r),l=i(a).next(u=>(a.g(),u)).catch(u=>(a.abort(u),R.reject(u))).toPromise();return l.catch(()=>{}),await a.m,l}catch(a){const l=a,u=l.name!=="FirebaseError"&&o<3;if(D("SimpleDb","Transaction failed with error:",l.message,"Retrying:",u),this.close(),!u)return Promise.reject(l)}}}close(){this.db&&this.db.close(),this.db=void 0}}class RU{constructor(e){this.k=e,this.q=!1,this.K=null}get isDone(){return this.q}get $(){return this.K}set cursor(e){this.k=e}done(){this.q=!0}U(e){this.K=e}delete(){return as(this.k.delete())}}class zl extends x{constructor(e,n){super(k.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${n}`),this.name="IndexedDbTransactionError"}}function Ji(t){return t.name==="IndexedDbTransactionError"}class AU{constructor(e){this.store=e}put(e,n){let r;return n!==void 0?(D("SimpleDb","PUT",this.store.name,e,n),r=this.store.put(n,e)):(D("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),as(r)}add(e){return D("SimpleDb","ADD",this.store.name,e,e),as(this.store.add(e))}get(e){return as(this.store.get(e)).next(n=>(n===void 0&&(n=null),D("SimpleDb","GET",this.store.name,e,n),n))}delete(e){return D("SimpleDb","DELETE",this.store.name,e),as(this.store.delete(e))}count(){return D("SimpleDb","COUNT",this.store.name),as(this.store.count())}W(e,n){const r=this.options(e,n),i=r.index?this.store.index(r.index):this.store;if(typeof i.getAll=="function"){const s=i.getAll(r.range);return new R((o,a)=>{s.onerror=l=>{a(l.target.error)},s.onsuccess=l=>{o(l.target.result)}})}{const s=this.cursor(r),o=[];return this.G(s,(a,l)=>{o.push(l)}).next(()=>o)}}j(e,n){const r=this.store.getAll(e,n===null?void 0:n);return new R((i,s)=>{r.onerror=o=>{s(o.target.error)},r.onsuccess=o=>{i(o.target.result)}})}H(e,n){D("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,n);r.J=!1;const i=this.cursor(r);return this.G(i,(s,o,a)=>a.delete())}Y(e,n){let r;n?r=e:(r={},n=e);const i=this.cursor(r);return this.G(i,n)}Z(e){const n=this.cursor({});return new R((r,i)=>{n.onerror=s=>{const o=mv(s.target.error);i(o)},n.onsuccess=s=>{const o=s.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}G(e,n){const r=[];return new R((i,s)=>{e.onerror=o=>{s(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void i();const l=new RU(a),u=n(a.primaryKey,a.value,l);if(u instanceof R){const c=u.catch(h=>(l.done(),R.reject(h)));r.push(c)}l.isDone?i():l.$===null?a.continue():a.continue(l.$)}}).next(()=>R.waitFor(r))}options(e,n){let r;return e!==void 0&&(typeof e=="string"?r=e:n=e),{index:r,range:n}}cursor(e){let n="next";if(e.reverse&&(n="prev"),e.index){const r=this.store.index(e.index);return e.J?r.openKeyCursor(e.range,n):r.openCursor(e.range,n)}return this.store.openCursor(e.range,n)}}function as(t){return new R((e,n)=>{t.onsuccess=r=>{const i=r.target.result;e(i)},t.onerror=r=>{const i=mv(r.target.error);n(i)}})}let WI=!1;function mv(t){const e=An.S(Ne());if(e>=12.2&&e<13){const n="An internal error was encountered in the Indexed Database server";if(t.message.indexOf(n)>=0){const r=new x("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${n}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return WI||(WI=!0,setTimeout(()=>{throw r},0)),r}}return t}class PU{constructor(e,n){this.asyncQueue=e,this.X=n,this.task=null}start(){this.ee(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}ee(e){D("IndexBackfiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{D("IndexBackfiller",`Documents written: ${await this.X.te()}`)}catch(n){Ji(n)?D("IndexBackfiller","Ignoring IndexedDB error during index backfill: ",n):await Xi(n)}await this.ee(6e4)})}}class CU{constructor(e,n){this.localStore=e,this.persistence=n}async te(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",n=>this.ne(n,e))}ne(e,n){const r=new Set;let i=n,s=!0;return R.doWhile(()=>s===!0&&i>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!r.has(o))return D("IndexBackfiller",`Processing collection: ${o}`),this.re(e,o,i).next(a=>{i-=a,r.add(o)});s=!1})).next(()=>n-i)}re(e,n,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,n).next(i=>this.localStore.localDocuments.getNextDocuments(e,n,i,r).next(s=>{const o=s.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.ie(i,s)).next(a=>(D("IndexBackfiller",`Updating offset: ${a}`),this.localStore.indexManager.updateCollectionGroup(e,n,a))).next(()=>o.size)}))}ie(e,n){let r=e;return n.changes.forEach((i,s)=>{const o=wP(s);pv(o,r)>0&&(r=o)}),new _n(r.readTime,r.documentKey,Math.max(n.batchId,e.largestBatchId))}}/**
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
 */class Zt{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.se(r),this.oe=r=>n.writeSequenceNumber(r))}se(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.oe&&this.oe(e),e}}Zt._e=-1;function _c(t){return t==null}function Ou(t){return t===0&&1/t==-1/0}function TP(t){return typeof t=="number"&&Number.isInteger(t)&&!Ou(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function jt(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=GI(e)),e=kU(t.get(n),e);return GI(e)}function kU(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case"":n+="";break;default:n+=s}}return n}function GI(t){return t+""}function cr(t){const e=t.length;if(W(e>=2),e===2)return W(t.charAt(0)===""&&t.charAt(1)===""),se.emptyPath();const n=e-2,r=[];let i="";for(let s=0;s<e;){const o=t.indexOf("",s);switch((o<0||o>n)&&B(),t.charAt(o+1)){case"":const a=t.substring(s,o);let l;i.length===0?l=a:(i+=a,l=i,i=""),r.push(l);break;case"":i+=t.substring(s,o),i+="\0";break;case"":i+=t.substring(s,o+1);break;default:B()}s=o+2}return new se(r)}/**
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
 */const HI=["userId","batchId"];/**
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
 */function Vd(t,e){return[t,jt(e)]}function SP(t,e,n){return[t,jt(e),n]}const bU={},xU=["prefixPath","collectionGroup","readTime","documentId"],DU=["prefixPath","collectionGroup","documentId"],NU=["collectionGroup","readTime","prefixPath","documentId"],OU=["canonicalId","targetId"],VU=["targetId","path"],LU=["path","targetId"],MU=["collectionId","parent"],FU=["indexId","uid"],UU=["uid","sequenceNumber"],$U=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],BU=["indexId","uid","orderedDocumentKey"],zU=["userId","collectionPath","documentId"],jU=["userId","collectionPath","largestBatchId"],qU=["userId","collectionGroup","largestBatchId"],RP=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],WU=[...RP,"documentOverlays"],AP=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],PP=AP,GU=[...PP,"indexConfiguration","indexState","indexEntries"];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jg extends EP{constructor(e,n){super(),this.ae=e,this.currentSequenceNumber=n}}function ft(t,e){const n=U(t);return An.M(n.ae,e)}/**
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
 */function KI(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ys(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function CP(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Ie{constructor(e,n){this.comparator=e,this.root=n||_t.EMPTY}insert(e,n){return new Ie(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,_t.BLACK,null,null))}remove(e){return new Ie(this.comparator,this.root.remove(e,this.comparator).copy(null,null,_t.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ld(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ld(this.root,e,this.comparator,!1)}getReverseIterator(){return new ld(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ld(this.root,e,this.comparator,!0)}}class ld{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class _t{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r!=null?r:_t.RED,this.left=i!=null?i:_t.EMPTY,this.right=s!=null?s:_t.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new _t(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,i!=null?i:this.left,s!=null?s:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return _t.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return _t.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,_t.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,_t.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw B();const e=this.left.check();if(e!==this.right.check())throw B();return e+(this.isRed()?0:1)}}_t.EMPTY=null,_t.RED=!0,_t.BLACK=!1;_t.EMPTY=new class{constructor(){this.size=0}get key(){throw B()}get value(){throw B()}get color(){throw B()}get left(){throw B()}get right(){throw B()}copy(e,n,r,i,s){return this}insert(e,n,r){return new _t(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class ve{constructor(e){this.comparator=e,this.data=new Ie(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new QI(this.data.getIterator())}getIteratorFrom(e){return new QI(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof ve)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ve(this.comparator);return n.data=e,n}}class QI{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function co(t){return t.hasNext()?t.getNext():void 0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en{constructor(e){this.fields=e,e.sort(be.comparator)}static empty(){return new en([])}unionWith(e){let n=new ve(be.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new en(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return da(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class kP extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HU(){return typeof atob!="undefined"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException!="undefined"&&s instanceof DOMException?new kP("Invalid base64 string: "+s):s}}(e);return new rt(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new rt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return te(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}rt.EMPTY_BYTE_STRING=new rt("");const KU=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Mi(t){if(W(!!t),typeof t=="string"){let e=0;const n=KU.exec(t);if(W(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ue(t.seconds),nanos:Ue(t.nanos)}}function Ue(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Fi(t){return typeof t=="string"?rt.fromBase64String(t):rt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $f(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function gv(t){const e=t.mapValue.fields.__previous_value__;return $f(e)?gv(e):e}function Vu(t){const e=Mi(t.mapValue.fields.__local_write_time__.timestampValue);return new De(e.seconds,e.nanos)}/**
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
 */class QU{constructor(e,n,r,i,s,o,a,l,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u}}class Ui{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Ui("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ui&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ii={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},Ld={nullValue:"NULL_VALUE"};function Vs(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?$f(t)?4:bP(t)?9007199254740991:10:B()}function wr(t,e){if(t===e)return!0;const n=Vs(t);if(n!==Vs(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Vu(t).isEqual(Vu(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Mi(i.timestampValue),a=Mi(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Fi(i.bytesValue).isEqual(Fi(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Ue(i.geoPointValue.latitude)===Ue(s.geoPointValue.latitude)&&Ue(i.geoPointValue.longitude)===Ue(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Ue(i.integerValue)===Ue(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Ue(i.doubleValue),a=Ue(s.doubleValue);return o===a?Ou(o)===Ou(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return da(t.arrayValue.values||[],e.arrayValue.values||[],wr);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(KI(o)!==KI(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!wr(o[l],a[l])))return!1;return!0}(t,e);default:return B()}}function Lu(t,e){return(t.values||[]).find(n=>wr(n,e))!==void 0}function $i(t,e){if(t===e)return 0;const n=Vs(t),r=Vs(e);if(n!==r)return te(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return te(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=Ue(s.integerValue||s.doubleValue),l=Ue(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return YI(t.timestampValue,e.timestampValue);case 4:return YI(Vu(t),Vu(e));case 5:return te(t.stringValue,e.stringValue);case 6:return function(s,o){const a=Fi(s),l=Fi(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),l=o.split("/");for(let u=0;u<a.length&&u<l.length;u++){const c=te(a[u],l[u]);if(c!==0)return c}return te(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=te(Ue(s.latitude),Ue(o.latitude));return a!==0?a:te(Ue(s.longitude),Ue(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,o){const a=s.values||[],l=o.values||[];for(let u=0;u<a.length&&u<l.length;++u){const c=$i(a[u],l[u]);if(c)return c}return te(a.length,l.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===Ii.mapValue&&o===Ii.mapValue)return 0;if(s===Ii.mapValue)return 1;if(o===Ii.mapValue)return-1;const a=s.fields||{},l=Object.keys(a),u=o.fields||{},c=Object.keys(u);l.sort(),c.sort();for(let h=0;h<l.length&&h<c.length;++h){const f=te(l[h],c[h]);if(f!==0)return f;const p=$i(a[l[h]],u[c[h]]);if(p!==0)return p}return te(l.length,c.length)}(t.mapValue,e.mapValue);default:throw B()}}function YI(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return te(t,e);const n=Mi(t),r=Mi(e),i=te(n.seconds,r.seconds);return i!==0?i:te(n.nanos,r.nanos)}function ha(t){return qg(t)}function qg(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Mi(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Fi(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return F.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=qg(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${qg(n.fields[o])}`;return i+"}"}(t.mapValue):B()}function Ls(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Wg(t){return!!t&&"integerValue"in t}function Mu(t){return!!t&&"arrayValue"in t}function XI(t){return!!t&&"nullValue"in t}function JI(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Md(t){return!!t&&"mapValue"in t}function jl(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Ys(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=jl(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=jl(t.arrayValue.values[n]);return e}return Object.assign({},t)}function bP(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}function YU(t){return"nullValue"in t?Ld:"booleanValue"in t?{booleanValue:!1}:"integerValue"in t||"doubleValue"in t?{doubleValue:NaN}:"timestampValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in t?{stringValue:""}:"bytesValue"in t?{bytesValue:""}:"referenceValue"in t?Ls(Ui.empty(),F.empty()):"geoPointValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in t?{arrayValue:{}}:"mapValue"in t?{mapValue:{}}:B()}function XU(t){return"nullValue"in t?{booleanValue:!1}:"booleanValue"in t?{doubleValue:NaN}:"integerValue"in t||"doubleValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in t?{stringValue:""}:"stringValue"in t?{bytesValue:""}:"bytesValue"in t?Ls(Ui.empty(),F.empty()):"referenceValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in t?{arrayValue:{}}:"arrayValue"in t?{mapValue:{}}:"mapValue"in t?Ii:B()}function ZI(t,e){const n=$i(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?-1:!t.inclusive&&e.inclusive?1:0}function eE(t,e){const n=$i(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?1:!t.inclusive&&e.inclusive?-1:0}/**
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
 */class vt{constructor(e){this.value=e}static empty(){return new vt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Md(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=jl(n)}setAll(e){let n=be.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=jl(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Md(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return wr(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Md(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Ys(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new vt(jl(this.value))}}function xP(t){const e=[];return Ys(t.fields,(n,r)=>{const i=new be([n]);if(Md(r)){const s=xP(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new en(e)}/**
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
 */class Re{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Re(e,0,H.min(),H.min(),H.min(),vt.empty(),0)}static newFoundDocument(e,n,r,i){return new Re(e,1,n,H.min(),r,i,0)}static newNoDocument(e,n){return new Re(e,2,n,H.min(),H.min(),vt.empty(),0)}static newUnknownDocument(e,n){return new Re(e,3,n,H.min(),H.min(),vt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(H.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=vt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=vt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=H.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Re&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Re(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Bi{constructor(e,n){this.position=e,this.inclusive=n}}function tE(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=F.comparator(F.fromName(o.referenceValue),n.key):r=$i(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function nE(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!wr(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Fu{constructor(e,n="asc"){this.field=e,this.dir=n}}function JU(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class DP{}class oe extends DP{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new ZU(e,n,r):n==="array-contains"?new n4(e,r):n==="in"?new FP(e,r):n==="not-in"?new r4(e,r):n==="array-contains-any"?new i4(e,r):new oe(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new e4(e,r):new t4(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison($i(n,this.value)):n!==null&&Vs(this.value)===Vs(n)&&this.matchesComparison($i(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return B()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class pe extends DP{constructor(e,n){super(),this.filters=e,this.op=n,this.ue=null}static create(e,n){return new pe(e,n)}matches(e){return fa(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ue!==null||(this.ue=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function fa(t){return t.op==="and"}function Gg(t){return t.op==="or"}function _v(t){return NP(t)&&fa(t)}function NP(t){for(const e of t.filters)if(e instanceof pe)return!1;return!0}function Hg(t){if(t instanceof oe)return t.field.canonicalString()+t.op.toString()+ha(t.value);if(_v(t))return t.filters.map(e=>Hg(e)).join(",");{const e=t.filters.map(n=>Hg(n)).join(",");return`${t.op}(${e})`}}function OP(t,e){return t instanceof oe?function(r,i){return i instanceof oe&&r.op===i.op&&r.field.isEqual(i.field)&&wr(r.value,i.value)}(t,e):t instanceof pe?function(r,i){return i instanceof pe&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&OP(o,i.filters[a]),!0):!1}(t,e):void B()}function VP(t,e){const n=t.filters.concat(e);return pe.create(n,t.op)}function LP(t){return t instanceof oe?function(n){return`${n.field.canonicalString()} ${n.op} ${ha(n.value)}`}(t):t instanceof pe?function(n){return n.op.toString()+" {"+n.getFilters().map(LP).join(" ,")+"}"}(t):"Filter"}class ZU extends oe{constructor(e,n,r){super(e,n,r),this.key=F.fromName(r.referenceValue)}matches(e){const n=F.comparator(e.key,this.key);return this.matchesComparison(n)}}class e4 extends oe{constructor(e,n){super(e,"in",n),this.keys=MP("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class t4 extends oe{constructor(e,n){super(e,"not-in",n),this.keys=MP("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function MP(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>F.fromName(r.referenceValue))}class n4 extends oe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Mu(n)&&Lu(n.arrayValue,this.value)}}class FP extends oe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Lu(this.value.arrayValue,n)}}class r4 extends oe{constructor(e,n){super(e,"not-in",n)}matches(e){if(Lu(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Lu(this.value.arrayValue,n)}}class i4 extends oe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Mu(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Lu(this.value.arrayValue,r))}}/**
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
 */class s4{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ce=null}}function Kg(t,e=null,n=[],r=[],i=null,s=null,o=null){return new s4(t,e,n,r,i,s,o)}function Ms(t){const e=U(t);if(e.ce===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Hg(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),_c(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ha(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ha(r)).join(",")),e.ce=n}return e.ce}function yc(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!JU(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!OP(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!nE(t.startAt,e.startAt)&&nE(t.endAt,e.endAt)}function kh(t){return F.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function bh(t,e){return t.filters.filter(n=>n instanceof oe&&n.field.isEqual(e))}function rE(t,e,n){let r=Ld,i=!0;for(const s of bh(t,e)){let o=Ld,a=!0;switch(s.op){case"<":case"<=":o=YU(s.value);break;case"==":case"in":case">=":o=s.value;break;case">":o=s.value,a=!1;break;case"!=":case"not-in":o=Ld}ZI({value:r,inclusive:i},{value:o,inclusive:a})<0&&(r=o,i=a)}if(n!==null){for(let s=0;s<t.orderBy.length;++s)if(t.orderBy[s].field.isEqual(e)){const o=n.position[s];ZI({value:r,inclusive:i},{value:o,inclusive:n.inclusive})<0&&(r=o,i=n.inclusive);break}}return{value:r,inclusive:i}}function iE(t,e,n){let r=Ii,i=!0;for(const s of bh(t,e)){let o=Ii,a=!0;switch(s.op){case">=":case">":o=XU(s.value),a=!1;break;case"==":case"in":case"<=":o=s.value;break;case"<":o=s.value,a=!1;break;case"!=":case"not-in":o=Ii}eE({value:r,inclusive:i},{value:o,inclusive:a})>0&&(r=o,i=a)}if(n!==null){for(let s=0;s<t.orderBy.length;++s)if(t.orderBy[s].field.isEqual(e)){const o=n.position[s];eE({value:r,inclusive:i},{value:o,inclusive:n.inclusive})>0&&(r=o,i=n.inclusive);break}}return{value:r,inclusive:i}}/**
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
 */class Xr{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function UP(t,e,n,r,i,s,o,a){return new Xr(t,e,n,r,i,s,o,a)}function Va(t){return new Xr(t)}function sE(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function yv(t){return t.collectionGroup!==null}function Ko(t){const e=U(t);if(e.le===null){e.le=[];const n=new Set;for(const s of e.explicitOrderBy)e.le.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new ve(be.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(u=>{u.isInequality()&&(a=a.add(u.field))})}),a})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.le.push(new Fu(s,r))}),n.has(be.keyField().canonicalString())||e.le.push(new Fu(be.keyField(),r))}return e.le}function qt(t){const e=U(t);return e.he||(e.he=o4(e,Ko(t))),e.he}function o4(t,e){if(t.limitType==="F")return Kg(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Fu(i.field,s)});const n=t.endAt?new Bi(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Bi(t.startAt.position,t.startAt.inclusive):null;return Kg(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Qg(t,e){const n=t.filters.concat([e]);return new Xr(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function xh(t,e,n){return new Xr(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function vc(t,e){return yc(qt(t),qt(e))&&t.limitType===e.limitType}function $P(t){return`${Ms(qt(t))}|lt:${t.limitType}`}function yo(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>LP(i)).join(", ")}]`),_c(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>ha(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>ha(i)).join(",")),`Target(${r})`}(qt(t))}; limitType=${t.limitType})`}function wc(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):F.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of Ko(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,l){const u=tE(o,a,l);return o.inclusive?u<=0:u<0}(r.startAt,Ko(r),i)||r.endAt&&!function(o,a,l){const u=tE(o,a,l);return o.inclusive?u>=0:u>0}(r.endAt,Ko(r),i))}(t,e)}function BP(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function zP(t){return(e,n)=>{let r=!1;for(const i of Ko(t)){const s=a4(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function a4(t,e,n){const r=t.field.isKeyField()?F.comparator(e.key,n.key):function(s,o,a){const l=o.data.field(s),u=a.data.field(s);return l!==null&&u!==null?$i(l,u):B()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return B()}}/**
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
 */class Zi{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Ys(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return CP(this.inner)}size(){return this.innerSize}}/**
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
 */const l4=new Ie(F.comparator);function tn(){return l4}const jP=new Ie(F.comparator);function Al(...t){let e=jP;for(const n of t)e=e.insert(n.key,n);return e}function qP(t){let e=jP;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function dr(){return ql()}function WP(){return ql()}function ql(){return new Zi(t=>t.toString(),(t,e)=>t.isEqual(e))}const u4=new Ie(F.comparator),c4=new ve(F.comparator);function ne(...t){let e=c4;for(const n of t)e=e.add(n);return e}const d4=new ve(te);function vv(){return d4}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GP(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ou(e)?"-0":e}}function HP(t){return{integerValue:""+t}}function KP(t,e){return TP(e)?HP(e):GP(t,e)}/**
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
 */class Bf{constructor(){this._=void 0}}function h4(t,e,n){return t instanceof pa?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&$f(s)&&(s=gv(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof Fs?YP(t,e):t instanceof Us?XP(t,e):function(i,s){const o=QP(i,s),a=oE(o)+oE(i.Ie);return Wg(o)&&Wg(i.Ie)?HP(a):GP(i.serializer,a)}(t,e)}function f4(t,e,n){return t instanceof Fs?YP(t,e):t instanceof Us?XP(t,e):n}function QP(t,e){return t instanceof ma?function(r){return Wg(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class pa extends Bf{}class Fs extends Bf{constructor(e){super(),this.elements=e}}function YP(t,e){const n=JP(e);for(const r of t.elements)n.some(i=>wr(i,r))||n.push(r);return{arrayValue:{values:n}}}class Us extends Bf{constructor(e){super(),this.elements=e}}function XP(t,e){let n=JP(e);for(const r of t.elements)n=n.filter(i=>!wr(i,r));return{arrayValue:{values:n}}}class ma extends Bf{constructor(e,n){super(),this.serializer=e,this.Ie=n}}function oE(t){return Ue(t.integerValue||t.doubleValue)}function JP(t){return Mu(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class Ic{constructor(e,n){this.field=e,this.transform=n}}function p4(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Fs&&i instanceof Fs||r instanceof Us&&i instanceof Us?da(r.elements,i.elements,wr):r instanceof ma&&i instanceof ma?wr(r.Ie,i.Ie):r instanceof pa&&i instanceof pa}(t.transform,e.transform)}class m4{constructor(e,n){this.version=e,this.transformResults=n}}class xe{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new xe}static exists(e){return new xe(void 0,e)}static updateTime(e){return new xe(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Fd(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class zf{}function ZP(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Ma(t.key,xe.none()):new La(t.key,t.data,xe.none());{const n=t.data,r=vt.empty();let i=new ve(be.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Jr(t.key,r,new en(i.toArray()),xe.none())}}function g4(t,e,n){t instanceof La?function(i,s,o){const a=i.value.clone(),l=lE(i.fieldTransforms,s,o.transformResults);a.setAll(l),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof Jr?function(i,s,o){if(!Fd(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=lE(i.fieldTransforms,s,o.transformResults),l=s.data;l.setAll(eC(i)),l.setAll(a),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Wl(t,e,n,r){return t instanceof La?function(s,o,a,l){if(!Fd(s.precondition,o))return a;const u=s.value.clone(),c=uE(s.fieldTransforms,l,o);return u.setAll(c),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof Jr?function(s,o,a,l){if(!Fd(s.precondition,o))return a;const u=uE(s.fieldTransforms,l,o),c=o.data;return c.setAll(eC(s)),c.setAll(u),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(h=>h.field))}(t,e,n,r):function(s,o,a){return Fd(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function _4(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=QP(r.transform,i||null);s!=null&&(n===null&&(n=vt.empty()),n.set(r.field,s))}return n||null}function aE(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&da(r,i,(s,o)=>p4(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class La extends zf{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Jr extends zf{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function eC(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function lE(t,e,n){const r=new Map;W(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,f4(o,a,n[i]))}return r}function uE(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,h4(s,o,e))}return r}class Ma extends zf{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class wv extends zf{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Iv{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&g4(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Wl(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Wl(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=WP();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=ZP(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(H.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ne())}isEqual(e){return this.batchId===e.batchId&&da(this.mutations,e.mutations,(n,r)=>aE(n,r))&&da(this.baseMutations,e.baseMutations,(n,r)=>aE(n,r))}}class Ev{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){W(e.mutations.length===r.length);let i=function(){return u4}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Ev(e,n,r,i)}}/**
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
 */class Tv{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class y4{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Ye,ue;function tC(t){switch(t){default:return B();case k.CANCELLED:case k.UNKNOWN:case k.DEADLINE_EXCEEDED:case k.RESOURCE_EXHAUSTED:case k.INTERNAL:case k.UNAVAILABLE:case k.UNAUTHENTICATED:return!1;case k.INVALID_ARGUMENT:case k.NOT_FOUND:case k.ALREADY_EXISTS:case k.PERMISSION_DENIED:case k.FAILED_PRECONDITION:case k.ABORTED:case k.OUT_OF_RANGE:case k.UNIMPLEMENTED:case k.DATA_LOSS:return!0}}function nC(t){if(t===void 0)return Ke("GRPC error has no .code"),k.UNKNOWN;switch(t){case Ye.OK:return k.OK;case Ye.CANCELLED:return k.CANCELLED;case Ye.UNKNOWN:return k.UNKNOWN;case Ye.DEADLINE_EXCEEDED:return k.DEADLINE_EXCEEDED;case Ye.RESOURCE_EXHAUSTED:return k.RESOURCE_EXHAUSTED;case Ye.INTERNAL:return k.INTERNAL;case Ye.UNAVAILABLE:return k.UNAVAILABLE;case Ye.UNAUTHENTICATED:return k.UNAUTHENTICATED;case Ye.INVALID_ARGUMENT:return k.INVALID_ARGUMENT;case Ye.NOT_FOUND:return k.NOT_FOUND;case Ye.ALREADY_EXISTS:return k.ALREADY_EXISTS;case Ye.PERMISSION_DENIED:return k.PERMISSION_DENIED;case Ye.FAILED_PRECONDITION:return k.FAILED_PRECONDITION;case Ye.ABORTED:return k.ABORTED;case Ye.OUT_OF_RANGE:return k.OUT_OF_RANGE;case Ye.UNIMPLEMENTED:return k.UNIMPLEMENTED;case Ye.DATA_LOSS:return k.DATA_LOSS;default:return B()}}(ue=Ye||(Ye={}))[ue.OK=0]="OK",ue[ue.CANCELLED=1]="CANCELLED",ue[ue.UNKNOWN=2]="UNKNOWN",ue[ue.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ue[ue.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ue[ue.NOT_FOUND=5]="NOT_FOUND",ue[ue.ALREADY_EXISTS=6]="ALREADY_EXISTS",ue[ue.PERMISSION_DENIED=7]="PERMISSION_DENIED",ue[ue.UNAUTHENTICATED=16]="UNAUTHENTICATED",ue[ue.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ue[ue.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ue[ue.ABORTED=10]="ABORTED",ue[ue.OUT_OF_RANGE=11]="OUT_OF_RANGE",ue[ue.UNIMPLEMENTED=12]="UNIMPLEMENTED",ue[ue.INTERNAL=13]="INTERNAL",ue[ue.UNAVAILABLE=14]="UNAVAILABLE",ue[ue.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function rC(){return new TextEncoder}/**
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
 */const v4=new Ho([4294967295,4294967295],0);function cE(t){const e=rC().encode(t),n=new fU;return n.update(e),new Uint8Array(n.digest())}function dE(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Ho([n,r],0),new Ho([i,s],0)]}class Sv{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Pl(`Invalid padding: ${n}`);if(r<0)throw new Pl(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Pl(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Pl(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*e.length-n,this.Ee=Ho.fromNumber(this.Te)}de(e,n,r){let i=e.add(n.multiply(Ho.fromNumber(r)));return i.compare(v4)===1&&(i=new Ho([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Ee).toNumber()}Ae(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const n=cE(e),[r,i]=dE(n);for(let s=0;s<this.hashCount;s++){const o=this.de(r,i,s);if(!this.Ae(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Sv(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Te===0)return;const n=cE(e),[r,i]=dE(n);for(let s=0;s<this.hashCount;s++){const o=this.de(r,i,s);this.Re(o)}}Re(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Pl extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Ec{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Tc.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Ec(H.min(),i,new Ie(te),tn(),ne())}}class Tc{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Tc(r,n,ne(),ne(),ne())}}/**
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
 */class Ud{constructor(e,n,r,i){this.Ve=e,this.removedTargetIds=n,this.key=r,this.me=i}}class iC{constructor(e,n){this.targetId=e,this.fe=n}}class sC{constructor(e,n,r=rt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class hE{constructor(){this.ge=0,this.pe=pE(),this.ye=rt.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return this.ge!==0}get De(){return this.Se}Ce(e){e.approximateByteSize()>0&&(this.Se=!0,this.ye=e)}ve(){let e=ne(),n=ne(),r=ne();return this.pe.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:B()}}),new Tc(this.ye,this.we,e,n,r)}Fe(){this.Se=!1,this.pe=pE()}Me(e,n){this.Se=!0,this.pe=this.pe.insert(e,n)}xe(e){this.Se=!0,this.pe=this.pe.remove(e)}Oe(){this.ge+=1}Ne(){this.ge-=1,W(this.ge>=0)}Le(){this.Se=!0,this.we=!0}}class w4{constructor(e){this.Be=e,this.ke=new Map,this.qe=tn(),this.Qe=fE(),this.Ke=new Ie(te)}$e(e){for(const n of e.Ve)e.me&&e.me.isFoundDocument()?this.Ue(n,e.me):this.We(n,e.key,e.me);for(const n of e.removedTargetIds)this.We(n,e.key,e.me)}Ge(e){this.forEachTarget(e,n=>{const r=this.ze(n);switch(e.state){case 0:this.je(n)&&r.Ce(e.resumeToken);break;case 1:r.Ne(),r.be||r.Fe(),r.Ce(e.resumeToken);break;case 2:r.Ne(),r.be||this.removeTarget(n);break;case 3:this.je(n)&&(r.Le(),r.Ce(e.resumeToken));break;case 4:this.je(n)&&(this.He(n),r.Ce(e.resumeToken));break;default:B()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ke.forEach((r,i)=>{this.je(i)&&n(i)})}Je(e){const n=e.targetId,r=e.fe.count,i=this.Ye(n);if(i){const s=i.target;if(kh(s))if(r===0){const o=new F(s.path);this.We(n,o,Re.newNoDocument(o,H.min()))}else W(r===1);else{const o=this.Ze(n);if(o!==r){const a=this.Xe(e),l=a?this.et(a,e,o):1;if(l!==0){this.He(n);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,u)}}}}}Xe(e){const n=e.fe.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=Fi(r).toUint8Array()}catch(l){if(l instanceof kP)return Hn("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new Sv(o,i,s)}catch(l){return Hn(l instanceof Pl?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Te===0?null:a}et(e,n,r){return n.fe.count===r-this.rt(e,n.targetId)?0:2}rt(e,n){const r=this.Be.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Be.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.We(n,s,null),i++)}),i}it(e){const n=new Map;this.ke.forEach((s,o)=>{const a=this.Ye(o);if(a){if(s.current&&kh(a.target)){const l=new F(a.target.path);this.qe.get(l)!==null||this.st(o,l)||this.We(o,l,Re.newNoDocument(l,e))}s.De&&(n.set(o,s.ve()),s.Fe())}});let r=ne();this.Qe.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.Ye(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.qe.forEach((s,o)=>o.setReadTime(e));const i=new Ec(e,n,this.Ke,this.qe,r);return this.qe=tn(),this.Qe=fE(),this.Ke=new Ie(te),i}Ue(e,n){if(!this.je(e))return;const r=this.st(e,n.key)?2:0;this.ze(e).Me(n.key,r),this.qe=this.qe.insert(n.key,n),this.Qe=this.Qe.insert(n.key,this.ot(n.key).add(e))}We(e,n,r){if(!this.je(e))return;const i=this.ze(e);this.st(e,n)?i.Me(n,1):i.xe(n),this.Qe=this.Qe.insert(n,this.ot(n).delete(e)),r&&(this.qe=this.qe.insert(n,r))}removeTarget(e){this.ke.delete(e)}Ze(e){const n=this.ze(e).ve();return this.Be.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Oe(e){this.ze(e).Oe()}ze(e){let n=this.ke.get(e);return n||(n=new hE,this.ke.set(e,n)),n}ot(e){let n=this.Qe.get(e);return n||(n=new ve(te),this.Qe=this.Qe.insert(e,n)),n}je(e){const n=this.Ye(e)!==null;return n||D("WatchChangeAggregator","Detected inactive target",e),n}Ye(e){const n=this.ke.get(e);return n&&n.be?null:this.Be._t(e)}He(e){this.ke.set(e,new hE),this.Be.getRemoteKeysForTarget(e).forEach(n=>{this.We(e,n,null)})}st(e,n){return this.Be.getRemoteKeysForTarget(e).has(n)}}function fE(){return new Ie(F.comparator)}function pE(){return new Ie(F.comparator)}const I4=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),E4=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),T4=(()=>({and:"AND",or:"OR"}))();class S4{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Yg(t,e){return t.useProto3Json||_c(e)?e:{value:e}}function ga(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function oC(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function R4(t,e){return ga(t,e.toTimestamp())}function Qe(t){return W(!!t),H.fromTimestamp(function(n){const r=Mi(n);return new De(r.seconds,r.nanos)}(t))}function Rv(t,e){return Xg(t,e).canonicalString()}function Xg(t,e){const n=function(i){return new se(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function aC(t){const e=se.fromString(t);return W(_C(e)),e}function Uu(t,e){return Rv(t.databaseId,e.path)}function gr(t,e){const n=aC(e);if(n.get(1)!==t.databaseId.projectId)throw new x(k.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new x(k.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new F(cC(n))}function lC(t,e){return Rv(t.databaseId,e)}function uC(t){const e=aC(t);return e.length===4?se.emptyPath():cC(e)}function Jg(t){return new se(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function cC(t){return W(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function mE(t,e,n){return{name:Uu(t,e),fields:n.value.mapValue.fields}}function dC(t,e,n){const r=gr(t,e.name),i=Qe(e.updateTime),s=e.createTime?Qe(e.createTime):H.min(),o=new vt({mapValue:{fields:e.fields}}),a=Re.newFoundDocument(r,i,s,o);return n&&a.setHasCommittedMutations(),n?a.setHasCommittedMutations():a}function A4(t,e){return"found"in e?function(r,i){W(!!i.found),i.found.name,i.found.updateTime;const s=gr(r,i.found.name),o=Qe(i.found.updateTime),a=i.found.createTime?Qe(i.found.createTime):H.min(),l=new vt({mapValue:{fields:i.found.fields}});return Re.newFoundDocument(s,o,a,l)}(t,e):"missing"in e?function(r,i){W(!!i.missing),W(!!i.readTime);const s=gr(r,i.missing),o=Qe(i.readTime);return Re.newNoDocument(s,o)}(t,e):B()}function P4(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:B()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(u,c){return u.useProto3Json?(W(c===void 0||typeof c=="string"),rt.fromBase64String(c||"")):(W(c===void 0||c instanceof Uint8Array),rt.fromUint8Array(c||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const c=u.code===void 0?k.UNKNOWN:nC(u.code);return new x(c,u.message||"")}(o);n=new sC(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=gr(t,r.document.name),s=Qe(r.document.updateTime),o=r.document.createTime?Qe(r.document.createTime):H.min(),a=new vt({mapValue:{fields:r.document.fields}}),l=Re.newFoundDocument(i,s,o,a),u=r.targetIds||[],c=r.removedTargetIds||[];n=new Ud(u,c,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=gr(t,r.document),s=r.readTime?Qe(r.readTime):H.min(),o=Re.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Ud([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=gr(t,r.document),s=r.removedTargetIds||[];n=new Ud([],s,i,null)}else{if(!("filter"in e))return B();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new y4(i,s),a=r.targetId;n=new iC(a,o)}}return n}function $u(t,e){let n;if(e instanceof La)n={update:mE(t,e.key,e.value)};else if(e instanceof Ma)n={delete:Uu(t,e.key)};else if(e instanceof Jr)n={update:mE(t,e.key,e.data),updateMask:N4(e.fieldMask)};else{if(!(e instanceof wv))return B();n={verify:Uu(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof pa)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Fs)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Us)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof ma)return{fieldPath:o.field.canonicalString(),increment:a.Ie};throw B()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:R4(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:B()}(t,e.precondition)),n}function Zg(t,e){const n=e.currentDocument?function(s){return s.updateTime!==void 0?xe.updateTime(Qe(s.updateTime)):s.exists!==void 0?xe.exists(s.exists):xe.none()}(e.currentDocument):xe.none(),r=e.updateTransforms?e.updateTransforms.map(i=>function(o,a){let l=null;if("setToServerValue"in a)W(a.setToServerValue==="REQUEST_TIME"),l=new pa;else if("appendMissingElements"in a){const c=a.appendMissingElements.values||[];l=new Fs(c)}else if("removeAllFromArray"in a){const c=a.removeAllFromArray.values||[];l=new Us(c)}else"increment"in a?l=new ma(o,a.increment):B();const u=be.fromServerFormat(a.fieldPath);return new Ic(u,l)}(t,i)):[];if(e.update){e.update.name;const i=gr(t,e.update.name),s=new vt({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(l){const u=l.fieldPaths||[];return new en(u.map(c=>be.fromServerFormat(c)))}(e.updateMask);return new Jr(i,s,o,n,r)}return new La(i,s,n,r)}if(e.delete){const i=gr(t,e.delete);return new Ma(i,n)}if(e.verify){const i=gr(t,e.verify);return new wv(i,n)}return B()}function C4(t,e){return t&&t.length>0?(W(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?Qe(i.updateTime):Qe(s);return o.isEqual(H.min())&&(o=Qe(s)),new m4(o,i.transformResults||[])}(n,e))):[]}function hC(t,e){return{documents:[lC(t,e.path)]}}function fC(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=lC(t,i);const s=function(u){if(u.length!==0)return gC(pe.create(u,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(u){if(u.length!==0)return u.map(c=>function(f){return{field:vo(f.field),direction:b4(f.dir)}}(c))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=Yg(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{ut:n,parent:i}}function pC(t){let e=uC(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){W(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=function(h){const f=mC(h);return f instanceof pe&&_v(f)?f.getFilters():[f]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(f=>function(w){return new Fu(wo(w.field),function(E){switch(E){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(w.direction))}(f))}(n.orderBy));let a=null;n.limit&&(a=function(h){let f;return f=typeof h=="object"?h.value:h,_c(f)?null:f}(n.limit));let l=null;n.startAt&&(l=function(h){const f=!!h.before,p=h.values||[];return new Bi(p,f)}(n.startAt));let u=null;return n.endAt&&(u=function(h){const f=!h.before,p=h.values||[];return new Bi(p,f)}(n.endAt)),UP(e,i,o,s,a,"F",l,u)}function k4(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return B()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function mC(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=wo(n.unaryFilter.field);return oe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=wo(n.unaryFilter.field);return oe.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=wo(n.unaryFilter.field);return oe.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=wo(n.unaryFilter.field);return oe.create(o,"!=",{nullValue:"NULL_VALUE"});default:return B()}}(t):t.fieldFilter!==void 0?function(n){return oe.create(wo(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return B()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return pe.create(n.compositeFilter.filters.map(r=>mC(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return B()}}(n.compositeFilter.op))}(t):B()}function b4(t){return I4[t]}function x4(t){return E4[t]}function D4(t){return T4[t]}function vo(t){return{fieldPath:t.canonicalString()}}function wo(t){return be.fromServerFormat(t.fieldPath)}function gC(t){return t instanceof oe?function(n){if(n.op==="=="){if(JI(n.value))return{unaryFilter:{field:vo(n.field),op:"IS_NAN"}};if(XI(n.value))return{unaryFilter:{field:vo(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(JI(n.value))return{unaryFilter:{field:vo(n.field),op:"IS_NOT_NAN"}};if(XI(n.value))return{unaryFilter:{field:vo(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:vo(n.field),op:x4(n.op),value:n.value}}}(t):t instanceof pe?function(n){const r=n.getFilters().map(i=>gC(i));return r.length===1?r[0]:{compositeFilter:{op:D4(n.op),filters:r}}}(t):B()}function N4(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function _C(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class Vr{constructor(e,n,r,i,s=H.min(),o=H.min(),a=rt.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new Vr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Vr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Vr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Vr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class yC{constructor(e){this.ct=e}}function O4(t,e){let n;if(e.document)n=dC(t.ct,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=F.fromSegments(e.noDocument.path),i=Bs(e.noDocument.readTime);n=Re.newNoDocument(r,i),e.hasCommittedMutations&&n.setHasCommittedMutations()}else{if(!e.unknownDocument)return B();{const r=F.fromSegments(e.unknownDocument.path),i=Bs(e.unknownDocument.version);n=Re.newUnknownDocument(r,i)}}return e.readTime&&n.setReadTime(function(i){const s=new De(i[0],i[1]);return H.fromTimestamp(s)}(e.readTime)),n}function gE(t,e){const n=e.key,r={prefixPath:n.getCollectionPath().popLast().toArray(),collectionGroup:n.collectionGroup,documentId:n.path.lastSegment(),readTime:Dh(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=function(s,o){return{name:Uu(s,o.key),fields:o.data.value.mapValue.fields,updateTime:ga(s,o.version.toTimestamp()),createTime:ga(s,o.createTime.toTimestamp())}}(t.ct,e);else if(e.isNoDocument())r.noDocument={path:n.path.toArray(),readTime:$s(e.version)};else{if(!e.isUnknownDocument())return B();r.unknownDocument={path:n.path.toArray(),version:$s(e.version)}}return r}function Dh(t){const e=t.toTimestamp();return[e.seconds,e.nanoseconds]}function $s(t){const e=t.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function Bs(t){const e=new De(t.seconds,t.nanoseconds);return H.fromTimestamp(e)}function ls(t,e){const n=(e.baseMutations||[]).map(s=>Zg(t.ct,s));for(let s=0;s<e.mutations.length-1;++s){const o=e.mutations[s];if(s+1<e.mutations.length&&e.mutations[s+1].transform!==void 0){const a=e.mutations[s+1];o.updateTransforms=a.transform.fieldTransforms,e.mutations.splice(s+1,1),++s}}const r=e.mutations.map(s=>Zg(t.ct,s)),i=De.fromMillis(e.localWriteTimeMs);return new Iv(e.batchId,i,n,r)}function Cl(t){const e=Bs(t.readTime),n=t.lastLimboFreeSnapshotVersion!==void 0?Bs(t.lastLimboFreeSnapshotVersion):H.min();let r;return r=function(s){return s.documents!==void 0}(t.query)?function(s){return W(s.documents.length===1),qt(Va(uC(s.documents[0])))}(t.query):function(s){return qt(pC(s))}(t.query),new Vr(r,t.targetId,"TargetPurposeListen",t.lastListenSequenceNumber,e,n,rt.fromBase64String(t.resumeToken))}function vC(t,e){const n=$s(e.snapshotVersion),r=$s(e.lastLimboFreeSnapshotVersion);let i;i=kh(e.target)?hC(t.ct,e.target):fC(t.ct,e.target).ut;const s=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:Ms(e.target),readTime:n,resumeToken:s,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:i}}function Av(t){const e=pC({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?xh(e,e.limit,"L"):e}function dm(t,e){return new Tv(e.largestBatchId,Zg(t.ct,e.overlayMutation))}function _E(t,e){const n=e.path.lastSegment();return[t,jt(e.path.popLast()),n]}function yE(t,e,n,r){return{indexId:t,uid:e,sequenceNumber:n,readTime:$s(r.readTime),documentKey:jt(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V4{getBundleMetadata(e,n){return vE(e).get(n).next(r=>{if(r)return function(s){return{id:s.bundleId,createTime:Bs(s.createTime),version:s.version}}(r)})}saveBundleMetadata(e,n){return vE(e).put(function(i){return{bundleId:i.id,createTime:$s(Qe(i.createTime)),version:i.version}}(n))}getNamedQuery(e,n){return wE(e).get(n).next(r=>{if(r)return function(s){return{name:s.name,query:Av(s.bundledQuery),readTime:Bs(s.readTime)}}(r)})}saveNamedQuery(e,n){return wE(e).put(function(i){return{name:i.name,readTime:$s(Qe(i.readTime)),bundledQuery:i.bundledQuery}}(n))}}function vE(t){return ft(t,"bundles")}function wE(t){return ft(t,"namedQueries")}/**
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
 */class jf{constructor(e,n){this.serializer=e,this.userId=n}static lt(e,n){const r=n.uid||"";return new jf(e,r)}getOverlay(e,n){return dl(e).get(_E(this.userId,n)).next(r=>r?dm(this.serializer,r):null)}getOverlays(e,n){const r=dr();return R.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){const i=[];return r.forEach((s,o)=>{const a=new Tv(n,o);i.push(this.ht(e,a))}),R.waitFor(i)}removeOverlaysForBatchId(e,n,r){const i=new Set;n.forEach(o=>i.add(jt(o.getCollectionPath())));const s=[];return i.forEach(o=>{const a=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,r+1],!1,!0);s.push(dl(e).H("collectionPathOverlayIndex",a))}),R.waitFor(s)}getOverlaysForCollection(e,n,r){const i=dr(),s=jt(n),o=IDBKeyRange.bound([this.userId,s,r],[this.userId,s,Number.POSITIVE_INFINITY],!0);return dl(e).W("collectionPathOverlayIndex",o).next(a=>{for(const l of a){const u=dm(this.serializer,l);i.set(u.getKey(),u)}return i})}getOverlaysForCollectionGroup(e,n,r,i){const s=dr();let o;const a=IDBKeyRange.bound([this.userId,n,r],[this.userId,n,Number.POSITIVE_INFINITY],!0);return dl(e).Y({index:"collectionGroupOverlayIndex",range:a},(l,u,c)=>{const h=dm(this.serializer,u);s.size()<i||h.largestBatchId===o?(s.set(h.getKey(),h),o=h.largestBatchId):c.done()}).next(()=>s)}ht(e,n){return dl(e).put(function(i,s,o){const[a,l,u]=_E(s,o.mutation.key);return{userId:s,collectionPath:l,documentId:u,collectionGroup:o.mutation.key.getCollectionGroup(),largestBatchId:o.largestBatchId,overlayMutation:$u(i.ct,o.mutation)}}(this.serializer,this.userId,n))}}function dl(t){return ft(t,"documentOverlays")}/**
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
 */class us{constructor(){}Pt(e,n){this.It(e,n),n.Tt()}It(e,n){if("nullValue"in e)this.Et(n,5);else if("booleanValue"in e)this.Et(n,10),n.dt(e.booleanValue?1:0);else if("integerValue"in e)this.Et(n,15),n.dt(Ue(e.integerValue));else if("doubleValue"in e){const r=Ue(e.doubleValue);isNaN(r)?this.Et(n,13):(this.Et(n,15),Ou(r)?n.dt(0):n.dt(r))}else if("timestampValue"in e){const r=e.timestampValue;this.Et(n,20),typeof r=="string"?n.At(r):(n.At(`${r.seconds||""}`),n.dt(r.nanos||0))}else if("stringValue"in e)this.Rt(e.stringValue,n),this.Vt(n);else if("bytesValue"in e)this.Et(n,30),n.ft(Fi(e.bytesValue)),this.Vt(n);else if("referenceValue"in e)this.gt(e.referenceValue,n);else if("geoPointValue"in e){const r=e.geoPointValue;this.Et(n,45),n.dt(r.latitude||0),n.dt(r.longitude||0)}else"mapValue"in e?bP(e)?this.Et(n,Number.MAX_SAFE_INTEGER):(this.yt(e.mapValue,n),this.Vt(n)):"arrayValue"in e?(this.wt(e.arrayValue,n),this.Vt(n)):B()}Rt(e,n){this.Et(n,25),this.St(e,n)}St(e,n){n.At(e)}yt(e,n){const r=e.fields||{};this.Et(n,55);for(const i of Object.keys(r))this.Rt(i,n),this.It(r[i],n)}wt(e,n){const r=e.values||[];this.Et(n,50);for(const i of r)this.It(i,n)}gt(e,n){this.Et(n,37),F.fromName(e).path.forEach(r=>{this.Et(n,60),this.St(r,n)})}Et(e,n){e.dt(n)}Vt(e){e.dt(2)}}us.bt=new us;function L4(t){if(t===0)return 8;let e=0;return t>>4==0&&(e+=4,t<<=4),t>>6==0&&(e+=2,t<<=2),t>>7==0&&(e+=1),e}function IE(t){const e=64-function(r){let i=0;for(let s=0;s<8;++s){const o=L4(255&r[s]);if(i+=o,o!==8)break}return i}(t);return Math.ceil(e/8)}class M4{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Dt(e){const n=e[Symbol.iterator]();let r=n.next();for(;!r.done;)this.Ct(r.value),r=n.next();this.vt()}Ft(e){const n=e[Symbol.iterator]();let r=n.next();for(;!r.done;)this.Mt(r.value),r=n.next();this.xt()}Ot(e){for(const n of e){const r=n.charCodeAt(0);if(r<128)this.Ct(r);else if(r<2048)this.Ct(960|r>>>6),this.Ct(128|63&r);else if(n<"\uD800"||"\uDBFF"<n)this.Ct(480|r>>>12),this.Ct(128|63&r>>>6),this.Ct(128|63&r);else{const i=n.codePointAt(0);this.Ct(240|i>>>18),this.Ct(128|63&i>>>12),this.Ct(128|63&i>>>6),this.Ct(128|63&i)}}this.vt()}Nt(e){for(const n of e){const r=n.charCodeAt(0);if(r<128)this.Mt(r);else if(r<2048)this.Mt(960|r>>>6),this.Mt(128|63&r);else if(n<"\uD800"||"\uDBFF"<n)this.Mt(480|r>>>12),this.Mt(128|63&r>>>6),this.Mt(128|63&r);else{const i=n.codePointAt(0);this.Mt(240|i>>>18),this.Mt(128|63&i>>>12),this.Mt(128|63&i>>>6),this.Mt(128|63&i)}}this.xt()}Lt(e){const n=this.Bt(e),r=IE(n);this.kt(1+r),this.buffer[this.position++]=255&r;for(let i=n.length-r;i<n.length;++i)this.buffer[this.position++]=255&n[i]}qt(e){const n=this.Bt(e),r=IE(n);this.kt(1+r),this.buffer[this.position++]=~(255&r);for(let i=n.length-r;i<n.length;++i)this.buffer[this.position++]=~(255&n[i])}Qt(){this.Kt(255),this.Kt(255)}$t(){this.Ut(255),this.Ut(255)}reset(){this.position=0}seed(e){this.kt(e.length),this.buffer.set(e,this.position),this.position+=e.length}Wt(){return this.buffer.slice(0,this.position)}Bt(e){const n=function(s){const o=new DataView(new ArrayBuffer(8));return o.setFloat64(0,s,!1),new Uint8Array(o.buffer)}(e),r=(128&n[0])!=0;n[0]^=r?255:128;for(let i=1;i<n.length;++i)n[i]^=r?255:0;return n}Ct(e){const n=255&e;n===0?(this.Kt(0),this.Kt(255)):n===255?(this.Kt(255),this.Kt(0)):this.Kt(n)}Mt(e){const n=255&e;n===0?(this.Ut(0),this.Ut(255)):n===255?(this.Ut(255),this.Ut(0)):this.Ut(e)}vt(){this.Kt(0),this.Kt(1)}xt(){this.Ut(0),this.Ut(1)}Kt(e){this.kt(1),this.buffer[this.position++]=e}Ut(e){this.kt(1),this.buffer[this.position++]=~e}kt(e){const n=e+this.position;if(n<=this.buffer.length)return;let r=2*this.buffer.length;r<n&&(r=n);const i=new Uint8Array(r);i.set(this.buffer),this.buffer=i}}class F4{constructor(e){this.Gt=e}ft(e){this.Gt.Dt(e)}At(e){this.Gt.Ot(e)}dt(e){this.Gt.Lt(e)}Tt(){this.Gt.Qt()}}class U4{constructor(e){this.Gt=e}ft(e){this.Gt.Ft(e)}At(e){this.Gt.Nt(e)}dt(e){this.Gt.qt(e)}Tt(){this.Gt.$t()}}class hl{constructor(){this.Gt=new M4,this.zt=new F4(this.Gt),this.jt=new U4(this.Gt)}seed(e){this.Gt.seed(e)}Ht(e){return e===0?this.zt:this.jt}Wt(){return this.Gt.Wt()}reset(){this.Gt.reset()}}/**
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
 */class cs{constructor(e,n,r,i){this.indexId=e,this.documentKey=n,this.arrayValue=r,this.directionalValue=i}Jt(){const e=this.directionalValue.length,n=e===0||this.directionalValue[e-1]===255?e+1:e,r=new Uint8Array(n);return r.set(this.directionalValue,0),n!==e?r.set([0],this.directionalValue.length):++r[r.length-1],new cs(this.indexId,this.documentKey,this.arrayValue,r)}}function ai(t,e){let n=t.indexId-e.indexId;return n!==0?n:(n=EE(t.arrayValue,e.arrayValue),n!==0?n:(n=EE(t.directionalValue,e.directionalValue),n!==0?n:F.comparator(t.documentKey,e.documentKey)))}function EE(t,e){for(let n=0;n<t.length&&n<e.length;++n){const r=t[n]-e[n];if(r!==0)return r}return t.length-e.length}/**
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
 */class TE{constructor(e){this.Yt=new ve((n,r)=>be.comparator(n.field,r.field)),this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.Zt=e.orderBy,this.Xt=[];for(const n of e.filters){const r=n;r.isInequality()?this.Yt=this.Yt.add(r):this.Xt.push(r)}}get en(){return this.Yt.size>1}tn(e){if(W(e.collectionGroup===this.collectionId),this.en)return!1;const n=zg(e);if(n!==void 0&&!this.nn(n))return!1;const r=os(e);let i=new Set,s=0,o=0;for(;s<r.length&&this.nn(r[s]);++s)i=i.add(r[s].fieldPath.canonicalString());if(s===r.length)return!0;if(this.Yt.size>0){const a=this.Yt.getIterator().getNext();if(!i.has(a.field.canonicalString())){const l=r[s];if(!this.rn(a,l)||!this.sn(this.Zt[o++],l))return!1}++s}for(;s<r.length;++s){const a=r[s];if(o>=this.Zt.length||!this.sn(this.Zt[o++],a))return!1}return!0}on(){if(this.en)return null;let e=new ve(be.comparator);const n=[];for(const r of this.Xt)if(!r.field.isKeyField())if(r.op==="array-contains"||r.op==="array-contains-any")n.push(new Od(r.field,2));else{if(e.has(r.field))continue;e=e.add(r.field),n.push(new Od(r.field,0))}for(const r of this.Zt)r.field.isKeyField()||e.has(r.field)||(e=e.add(r.field),n.push(new Od(r.field,r.dir==="asc"?0:1)));return new Ch(Ch.UNKNOWN_ID,this.collectionId,n,Nu.empty())}nn(e){for(const n of this.Xt)if(this.rn(n,e))return!0;return!1}rn(e,n){if(e===void 0||!e.field.isEqual(n.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return n.kind===2===r}sn(e,n){return!!e.field.isEqual(n.fieldPath)&&(n.kind===0&&e.dir==="asc"||n.kind===1&&e.dir==="desc")}}/**
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
 */function wC(t){var e,n;if(W(t instanceof oe||t instanceof pe),t instanceof oe){if(t instanceof FP){const i=((n=(e=t.value.arrayValue)===null||e===void 0?void 0:e.values)===null||n===void 0?void 0:n.map(s=>oe.create(t.field,"==",s)))||[];return pe.create(i,"or")}return t}const r=t.filters.map(i=>wC(i));return pe.create(r,t.op)}function $4(t){if(t.getFilters().length===0)return[];const e=n_(wC(t));return W(IC(e)),e_(e)||t_(e)?[e]:e.getFilters()}function e_(t){return t instanceof oe}function t_(t){return t instanceof pe&&_v(t)}function IC(t){return e_(t)||t_(t)||function(n){if(n instanceof pe&&Gg(n)){for(const r of n.getFilters())if(!e_(r)&&!t_(r))return!1;return!0}return!1}(t)}function n_(t){if(W(t instanceof oe||t instanceof pe),t instanceof oe)return t;if(t.filters.length===1)return n_(t.filters[0]);const e=t.filters.map(r=>n_(r));let n=pe.create(e,t.op);return n=Nh(n),IC(n)?n:(W(n instanceof pe),W(fa(n)),W(n.filters.length>1),n.filters.reduce((r,i)=>Pv(r,i)))}function Pv(t,e){let n;return W(t instanceof oe||t instanceof pe),W(e instanceof oe||e instanceof pe),n=t instanceof oe?e instanceof oe?function(i,s){return pe.create([i,s],"and")}(t,e):SE(t,e):e instanceof oe?SE(e,t):function(i,s){if(W(i.filters.length>0&&s.filters.length>0),fa(i)&&fa(s))return VP(i,s.getFilters());const o=Gg(i)?i:s,a=Gg(i)?s:i,l=o.filters.map(u=>Pv(u,a));return pe.create(l,"or")}(t,e),Nh(n)}function SE(t,e){if(fa(e))return VP(e,t.getFilters());{const n=e.filters.map(r=>Pv(t,r));return pe.create(n,"or")}}function Nh(t){if(W(t instanceof oe||t instanceof pe),t instanceof oe)return t;const e=t.getFilters();if(e.length===1)return Nh(e[0]);if(NP(t))return t;const n=e.map(i=>Nh(i)),r=[];return n.forEach(i=>{i instanceof oe?r.push(i):i instanceof pe&&(i.op===t.op?r.push(...i.filters):r.push(i))}),r.length===1?r[0]:pe.create(r,t.op)}/**
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
 */class B4{constructor(){this._n=new Cv}addToCollectionParentIndex(e,n){return this._n.add(n),R.resolve()}getCollectionParents(e,n){return R.resolve(this._n.getEntries(n))}addFieldIndex(e,n){return R.resolve()}deleteFieldIndex(e,n){return R.resolve()}deleteAllFieldIndexes(e){return R.resolve()}createTargetIndexes(e,n){return R.resolve()}getDocumentsMatchingTarget(e,n){return R.resolve(null)}getIndexType(e,n){return R.resolve(0)}getFieldIndexes(e,n){return R.resolve([])}getNextCollectionGroupToUpdate(e){return R.resolve(null)}getMinOffset(e,n){return R.resolve(_n.min())}getMinOffsetFromCollectionGroup(e,n){return R.resolve(_n.min())}updateCollectionGroup(e,n,r){return R.resolve()}updateIndexEntries(e,n){return R.resolve()}}class Cv{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new ve(se.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new ve(se.comparator)).toArray()}}/**
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
 */const ud=new Uint8Array(0);class z4{constructor(e,n){this.databaseId=n,this.an=new Cv,this.un=new Zi(r=>Ms(r),(r,i)=>yc(r,i)),this.uid=e.uid||""}addToCollectionParentIndex(e,n){if(!this.an.has(n)){const r=n.lastSegment(),i=n.popLast();e.addOnCommittedListener(()=>{this.an.add(n)});const s={collectionId:r,parent:jt(i)};return RE(e).put(s)}return R.resolve()}getCollectionParents(e,n){const r=[],i=IDBKeyRange.bound([n,""],[yP(n),""],!1,!0);return RE(e).W(i).next(s=>{for(const o of s){if(o.collectionId!==n)break;r.push(cr(o.parent))}return r})}addFieldIndex(e,n){const r=fl(e),i=function(a){return{indexId:a.indexId,collectionGroup:a.collectionGroup,fields:a.fields.map(l=>[l.fieldPath.canonicalString(),l.kind])}}(n);delete i.indexId;const s=r.add(i);if(n.indexState){const o=fo(e);return s.next(a=>{o.put(yE(a,this.uid,n.indexState.sequenceNumber,n.indexState.offset))})}return s.next()}deleteFieldIndex(e,n){const r=fl(e),i=fo(e),s=ho(e);return r.delete(n.indexId).next(()=>i.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0))).next(()=>s.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0)))}deleteAllFieldIndexes(e){const n=fl(e),r=ho(e),i=fo(e);return n.H().next(()=>r.H()).next(()=>i.H())}createTargetIndexes(e,n){return R.forEach(this.cn(n),r=>this.getIndexType(e,r).next(i=>{if(i===0||i===1){const s=new TE(r).on();if(s!=null)return this.addFieldIndex(e,s)}}))}getDocumentsMatchingTarget(e,n){const r=ho(e);let i=!0;const s=new Map;return R.forEach(this.cn(n),o=>this.ln(e,o).next(a=>{i&&(i=!!a),s.set(o,a)})).next(()=>{if(i){let o=ne();const a=[];return R.forEach(s,(l,u)=>{D("IndexedDbIndexManager",`Using index ${function(g){return`id=${g.indexId}|cg=${g.collectionGroup}|f=${g.fields.map(T=>`${T.fieldPath}:${T.kind}`).join(",")}`}(l)} to execute ${Ms(n)}`);const c=function(g,T){const P=zg(T);if(P===void 0)return null;for(const C of bh(g,P.fieldPath))switch(C.op){case"array-contains-any":return C.value.arrayValue.values||[];case"array-contains":return[C.value]}return null}(u,l),h=function(g,T){const P=new Map;for(const C of os(T))for(const y of bh(g,C.fieldPath))switch(y.op){case"==":case"in":P.set(C.fieldPath.canonicalString(),y.value);break;case"not-in":case"!=":return P.set(C.fieldPath.canonicalString(),y.value),Array.from(P.values())}return null}(u,l),f=function(g,T){const P=[];let C=!0;for(const y of os(T)){const I=y.kind===0?rE(g,y.fieldPath,g.startAt):iE(g,y.fieldPath,g.startAt);P.push(I.value),C&&(C=I.inclusive)}return new Bi(P,C)}(u,l),p=function(g,T){const P=[];let C=!0;for(const y of os(T)){const I=y.kind===0?iE(g,y.fieldPath,g.endAt):rE(g,y.fieldPath,g.endAt);P.push(I.value),C&&(C=I.inclusive)}return new Bi(P,C)}(u,l),w=this.hn(l,u,f),v=this.hn(l,u,p),E=this.Pn(l,u,h),_=this.In(l.indexId,c,w,f.inclusive,v,p.inclusive,E);return R.forEach(_,m=>r.j(m,n.limit).next(g=>{g.forEach(T=>{const P=F.fromSegments(T.documentKey);o.has(P)||(o=o.add(P),a.push(P))})}))}).next(()=>a)}return R.resolve(null)})}cn(e){let n=this.un.get(e);return n||(e.filters.length===0?n=[e]:n=$4(pe.create(e.filters,"and")).map(r=>Kg(e.path,e.collectionGroup,e.orderBy,r.getFilters(),e.limit,e.startAt,e.endAt)),this.un.set(e,n),n)}In(e,n,r,i,s,o,a){const l=(n!=null?n.length:1)*Math.max(r.length,s.length),u=l/(n!=null?n.length:1),c=[];for(let h=0;h<l;++h){const f=n?this.Tn(n[h/u]):ud,p=this.En(e,f,r[h%u],i),w=this.dn(e,f,s[h%u],o),v=a.map(E=>this.En(e,f,E,!0));c.push(...this.createRange(p,w,v))}return c}En(e,n,r,i){const s=new cs(e,F.empty(),n,r);return i?s:s.Jt()}dn(e,n,r,i){const s=new cs(e,F.empty(),n,r);return i?s.Jt():s}ln(e,n){const r=new TE(n),i=n.collectionGroup!=null?n.collectionGroup:n.path.lastSegment();return this.getFieldIndexes(e,i).next(s=>{let o=null;for(const a of s)r.tn(a)&&(!o||a.fields.length>o.fields.length)&&(o=a);return o})}getIndexType(e,n){let r=2;const i=this.cn(n);return R.forEach(i,s=>this.ln(e,s).next(o=>{o?r!==0&&o.fields.length<function(l){let u=new ve(be.comparator),c=!1;for(const h of l.filters)for(const f of h.getFlattenedFilters())f.field.isKeyField()||(f.op==="array-contains"||f.op==="array-contains-any"?c=!0:u=u.add(f.field));for(const h of l.orderBy)h.field.isKeyField()||(u=u.add(h.field));return u.size+(c?1:0)}(s)&&(r=1):r=0})).next(()=>function(o){return o.limit!==null}(n)&&i.length>1&&r===2?1:r)}An(e,n){const r=new hl;for(const i of os(e)){const s=n.data.field(i.fieldPath);if(s==null)return null;const o=r.Ht(i.kind);us.bt.Pt(s,o)}return r.Wt()}Tn(e){const n=new hl;return us.bt.Pt(e,n.Ht(0)),n.Wt()}Rn(e,n){const r=new hl;return us.bt.Pt(Ls(this.databaseId,n),r.Ht(function(s){const o=os(s);return o.length===0?0:o[o.length-1].kind}(e))),r.Wt()}Pn(e,n,r){if(r===null)return[];let i=[];i.push(new hl);let s=0;for(const o of os(e)){const a=r[s++];for(const l of i)if(this.Vn(n,o.fieldPath)&&Mu(a))i=this.mn(i,o,a);else{const u=l.Ht(o.kind);us.bt.Pt(a,u)}}return this.fn(i)}hn(e,n,r){return this.Pn(e,n,r.position)}fn(e){const n=[];for(let r=0;r<e.length;++r)n[r]=e[r].Wt();return n}mn(e,n,r){const i=[...e],s=[];for(const o of r.arrayValue.values||[])for(const a of i){const l=new hl;l.seed(a.Wt()),us.bt.Pt(o,l.Ht(n.kind)),s.push(l)}return s}Vn(e,n){return!!e.filters.find(r=>r instanceof oe&&r.field.isEqual(n)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(e,n){const r=fl(e),i=fo(e);return(n?r.W("collectionGroupIndex",IDBKeyRange.bound(n,n)):r.W()).next(s=>{const o=[];return R.forEach(s,a=>i.get([a.indexId,this.uid]).next(l=>{o.push(function(c,h){const f=h?new Nu(h.sequenceNumber,new _n(Bs(h.readTime),new F(cr(h.documentKey)),h.largestBatchId)):Nu.empty(),p=c.fields.map(([w,v])=>new Od(be.fromServerFormat(w),v));return new Ch(c.indexId,c.collectionGroup,p,f)}(a,l))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(n=>n.length===0?null:(n.sort((r,i)=>{const s=r.indexState.sequenceNumber-i.indexState.sequenceNumber;return s!==0?s:te(r.collectionGroup,i.collectionGroup)}),n[0].collectionGroup))}updateCollectionGroup(e,n,r){const i=fl(e),s=fo(e);return this.gn(e).next(o=>i.W("collectionGroupIndex",IDBKeyRange.bound(n,n)).next(a=>R.forEach(a,l=>s.put(yE(l.indexId,this.uid,o,r)))))}updateIndexEntries(e,n){const r=new Map;return R.forEach(n,(i,s)=>{const o=r.get(i.collectionGroup);return(o?R.resolve(o):this.getFieldIndexes(e,i.collectionGroup)).next(a=>(r.set(i.collectionGroup,a),R.forEach(a,l=>this.pn(e,i,l).next(u=>{const c=this.yn(s,l);return u.isEqual(c)?R.resolve():this.wn(e,s,l,u,c)}))))})}Sn(e,n,r,i){return ho(e).put({indexId:i.indexId,uid:this.uid,arrayValue:i.arrayValue,directionalValue:i.directionalValue,orderedDocumentKey:this.Rn(r,n.key),documentKey:n.key.path.toArray()})}bn(e,n,r,i){return ho(e).delete([i.indexId,this.uid,i.arrayValue,i.directionalValue,this.Rn(r,n.key),n.key.path.toArray()])}pn(e,n,r){const i=ho(e);let s=new ve(ai);return i.Y({index:"documentKeyIndex",range:IDBKeyRange.only([r.indexId,this.uid,this.Rn(r,n)])},(o,a)=>{s=s.add(new cs(r.indexId,n,a.arrayValue,a.directionalValue))}).next(()=>s)}yn(e,n){let r=new ve(ai);const i=this.An(n,e);if(i==null)return r;const s=zg(n);if(s!=null){const o=e.data.field(s.fieldPath);if(Mu(o))for(const a of o.arrayValue.values||[])r=r.add(new cs(n.indexId,e.key,this.Tn(a),i))}else r=r.add(new cs(n.indexId,e.key,ud,i));return r}wn(e,n,r,i,s){D("IndexedDbIndexManager","Updating index entries for document '%s'",n.key);const o=[];return function(l,u,c,h,f){const p=l.getIterator(),w=u.getIterator();let v=co(p),E=co(w);for(;v||E;){let _=!1,m=!1;if(v&&E){const g=c(v,E);g<0?m=!0:g>0&&(_=!0)}else v!=null?m=!0:_=!0;_?(h(E),E=co(w)):m?(f(v),v=co(p)):(v=co(p),E=co(w))}}(i,s,ai,a=>{o.push(this.Sn(e,n,r,a))},a=>{o.push(this.bn(e,n,r,a))}),R.waitFor(o)}gn(e){let n=1;return fo(e).Y({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,i,s)=>{s.done(),n=i.sequenceNumber+1}).next(()=>n)}createRange(e,n,r){r=r.sort((o,a)=>ai(o,a)).filter((o,a,l)=>!a||ai(o,l[a-1])!==0);const i=[];i.push(e);for(const o of r){const a=ai(o,e),l=ai(o,n);if(a===0)i[0]=e.Jt();else if(a>0&&l<0)i.push(o),i.push(o.Jt());else if(l>0)break}i.push(n);const s=[];for(let o=0;o<i.length;o+=2){if(this.Dn(i[o],i[o+1]))return[];const a=[i[o].indexId,this.uid,i[o].arrayValue,i[o].directionalValue,ud,[]],l=[i[o+1].indexId,this.uid,i[o+1].arrayValue,i[o+1].directionalValue,ud,[]];s.push(IDBKeyRange.bound(a,l))}return s}Dn(e,n){return ai(e,n)>0}getMinOffsetFromCollectionGroup(e,n){return this.getFieldIndexes(e,n).next(AE)}getMinOffset(e,n){return R.mapArray(this.cn(n),r=>this.ln(e,r).next(i=>i||B())).next(AE)}}function RE(t){return ft(t,"collectionParents")}function ho(t){return ft(t,"indexEntries")}function fl(t){return ft(t,"indexConfiguration")}function fo(t){return ft(t,"indexState")}function AE(t){W(t.length!==0);let e=t[0].indexState.offset,n=e.largestBatchId;for(let r=1;r<t.length;r++){const i=t[r].indexState.offset;pv(i,e)<0&&(e=i),n<i.largestBatchId&&(n=i.largestBatchId)}return new _n(e.readTime,e.documentKey,n)}/**
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
 */const PE={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Yt{constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new Yt(e,Yt.DEFAULT_COLLECTION_PERCENTILE,Yt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EC(t,e,n){const r=t.store("mutations"),i=t.store("documentMutations"),s=[],o=IDBKeyRange.only(n.batchId);let a=0;const l=r.Y({range:o},(c,h,f)=>(a++,f.delete()));s.push(l.next(()=>{W(a===1)}));const u=[];for(const c of n.mutations){const h=SP(e,c.key.path,n.batchId);s.push(i.delete(h)),u.push(c.key)}return R.waitFor(s).next(()=>u)}function Oh(t){if(!t)return 0;let e;if(t.document)e=t.document;else if(t.unknownDocument)e=t.unknownDocument;else{if(!t.noDocument)throw B();e=t.noDocument}return JSON.stringify(e).length}/**
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
 */Yt.DEFAULT_COLLECTION_PERCENTILE=10,Yt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Yt.DEFAULT=new Yt(41943040,Yt.DEFAULT_COLLECTION_PERCENTILE,Yt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Yt.DISABLED=new Yt(-1,0,0);class qf{constructor(e,n,r,i){this.userId=e,this.serializer=n,this.indexManager=r,this.referenceDelegate=i,this.Cn={}}static lt(e,n,r,i){W(e.uid!=="");const s=e.isAuthenticated()?e.uid:"";return new qf(s,n,r,i)}checkEmpty(e){let n=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return li(e).Y({index:"userMutationsIndex",range:r},(i,s,o)=>{n=!1,o.done()}).next(()=>n)}addMutationBatch(e,n,r,i){const s=Io(e),o=li(e);return o.add({}).next(a=>{W(typeof a=="number");const l=new Iv(a,n,r,i),u=function(p,w,v){const E=v.baseMutations.map(m=>$u(p.ct,m)),_=v.mutations.map(m=>$u(p.ct,m));return{userId:w,batchId:v.batchId,localWriteTimeMs:v.localWriteTime.toMillis(),baseMutations:E,mutations:_}}(this.serializer,this.userId,l),c=[];let h=new ve((f,p)=>te(f.canonicalString(),p.canonicalString()));for(const f of i){const p=SP(this.userId,f.key.path,a);h=h.add(f.key.path.popLast()),c.push(o.put(u)),c.push(s.put(p,bU))}return h.forEach(f=>{c.push(this.indexManager.addToCollectionParentIndex(e,f))}),e.addOnCommittedListener(()=>{this.Cn[a]=l.keys()}),R.waitFor(c).next(()=>l)})}lookupMutationBatch(e,n){return li(e).get(n).next(r=>r?(W(r.userId===this.userId),ls(this.serializer,r)):null)}vn(e,n){return this.Cn[n]?R.resolve(this.Cn[n]):this.lookupMutationBatch(e,n).next(r=>{if(r){const i=r.keys();return this.Cn[n]=i,i}return null})}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=IDBKeyRange.lowerBound([this.userId,r]);let s=null;return li(e).Y({index:"userMutationsIndex",range:i},(o,a,l)=>{a.userId===this.userId&&(W(a.batchId>=r),s=ls(this.serializer,a)),l.done()}).next(()=>s)}getHighestUnacknowledgedBatchId(e){const n=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=-1;return li(e).Y({index:"userMutationsIndex",range:n,reverse:!0},(i,s,o)=>{r=s.batchId,o.done()}).next(()=>r)}getAllMutationBatches(e){const n=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return li(e).W("userMutationsIndex",n).next(r=>r.map(i=>ls(this.serializer,i)))}getAllMutationBatchesAffectingDocumentKey(e,n){const r=Vd(this.userId,n.path),i=IDBKeyRange.lowerBound(r),s=[];return Io(e).Y({range:i},(o,a,l)=>{const[u,c,h]=o,f=cr(c);if(u===this.userId&&n.path.isEqual(f))return li(e).get(h).next(p=>{if(!p)throw B();W(p.userId===this.userId),s.push(ls(this.serializer,p))});l.done()}).next(()=>s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new ve(te);const i=[];return n.forEach(s=>{const o=Vd(this.userId,s.path),a=IDBKeyRange.lowerBound(o),l=Io(e).Y({range:a},(u,c,h)=>{const[f,p,w]=u,v=cr(p);f===this.userId&&s.path.isEqual(v)?r=r.add(w):h.done()});i.push(l)}),R.waitFor(i).next(()=>this.Fn(e,r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1,s=Vd(this.userId,r),o=IDBKeyRange.lowerBound(s);let a=new ve(te);return Io(e).Y({range:o},(l,u,c)=>{const[h,f,p]=l,w=cr(f);h===this.userId&&r.isPrefixOf(w)?w.length===i&&(a=a.add(p)):c.done()}).next(()=>this.Fn(e,a))}Fn(e,n){const r=[],i=[];return n.forEach(s=>{i.push(li(e).get(s).next(o=>{if(o===null)throw B();W(o.userId===this.userId),r.push(ls(this.serializer,o))}))}),R.waitFor(i).next(()=>r)}removeMutationBatch(e,n){return EC(e.ae,this.userId,n).next(r=>(e.addOnCommittedListener(()=>{this.Mn(n.batchId)}),R.forEach(r,i=>this.referenceDelegate.markPotentiallyOrphaned(e,i))))}Mn(e){delete this.Cn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(n=>{if(!n)return R.resolve();const r=IDBKeyRange.lowerBound(function(o){return[o]}(this.userId)),i=[];return Io(e).Y({range:r},(s,o,a)=>{if(s[0]===this.userId){const l=cr(s[1]);i.push(l)}else a.done()}).next(()=>{W(i.length===0)})})}containsKey(e,n){return TC(e,this.userId,n)}xn(e){return SC(e).get(this.userId).next(n=>n||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function TC(t,e,n){const r=Vd(e,n.path),i=r[1],s=IDBKeyRange.lowerBound(r);let o=!1;return Io(t).Y({range:s,J:!0},(a,l,u)=>{const[c,h,f]=a;c===e&&h===i&&(o=!0),u.done()}).next(()=>o)}function li(t){return ft(t,"mutations")}function Io(t){return ft(t,"documentMutations")}function SC(t){return ft(t,"mutationQueues")}/**
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
 */class zs{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new zs(0)}static Ln(){return new zs(-1)}}/**
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
 */class j4{constructor(e,n){this.referenceDelegate=e,this.serializer=n}allocateTargetId(e){return this.Bn(e).next(n=>{const r=new zs(n.highestTargetId);return n.highestTargetId=r.next(),this.kn(e,n).next(()=>n.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.Bn(e).next(n=>H.fromTimestamp(new De(n.lastRemoteSnapshotVersion.seconds,n.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.Bn(e).next(n=>n.highestListenSequenceNumber)}setTargetsMetadata(e,n,r){return this.Bn(e).next(i=>(i.highestListenSequenceNumber=n,r&&(i.lastRemoteSnapshotVersion=r.toTimestamp()),n>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=n),this.kn(e,i)))}addTargetData(e,n){return this.qn(e,n).next(()=>this.Bn(e).next(r=>(r.targetCount+=1,this.Qn(n,r),this.kn(e,r))))}updateTargetData(e,n){return this.qn(e,n)}removeTargetData(e,n){return this.removeMatchingKeysForTargetId(e,n.targetId).next(()=>po(e).delete(n.targetId)).next(()=>this.Bn(e)).next(r=>(W(r.targetCount>0),r.targetCount-=1,this.kn(e,r)))}removeTargets(e,n,r){let i=0;const s=[];return po(e).Y((o,a)=>{const l=Cl(a);l.sequenceNumber<=n&&r.get(l.targetId)===null&&(i++,s.push(this.removeTargetData(e,l)))}).next(()=>R.waitFor(s)).next(()=>i)}forEachTarget(e,n){return po(e).Y((r,i)=>{const s=Cl(i);n(s)})}Bn(e){return CE(e).get("targetGlobalKey").next(n=>(W(n!==null),n))}kn(e,n){return CE(e).put("targetGlobalKey",n)}qn(e,n){return po(e).put(vC(this.serializer,n))}Qn(e,n){let r=!1;return e.targetId>n.highestTargetId&&(n.highestTargetId=e.targetId,r=!0),e.sequenceNumber>n.highestListenSequenceNumber&&(n.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.Bn(e).next(n=>n.targetCount)}getTargetData(e,n){const r=Ms(n),i=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let s=null;return po(e).Y({range:i,index:"queryTargetsIndex"},(o,a,l)=>{const u=Cl(a);yc(n,u.target)&&(s=u,l.done())}).next(()=>s)}addMatchingKeys(e,n,r){const i=[],s=gi(e);return n.forEach(o=>{const a=jt(o.path);i.push(s.put({targetId:r,path:a})),i.push(this.referenceDelegate.addReference(e,r,o))}),R.waitFor(i)}removeMatchingKeys(e,n,r){const i=gi(e);return R.forEach(n,s=>{const o=jt(s.path);return R.waitFor([i.delete([r,o]),this.referenceDelegate.removeReference(e,r,s)])})}removeMatchingKeysForTargetId(e,n){const r=gi(e),i=IDBKeyRange.bound([n],[n+1],!1,!0);return r.delete(i)}getMatchingKeysForTargetId(e,n){const r=IDBKeyRange.bound([n],[n+1],!1,!0),i=gi(e);let s=ne();return i.Y({range:r,J:!0},(o,a,l)=>{const u=cr(o[1]),c=new F(u);s=s.add(c)}).next(()=>s)}containsKey(e,n){const r=jt(n.path),i=IDBKeyRange.bound([r],[yP(r)],!1,!0);let s=0;return gi(e).Y({index:"documentTargetsIndex",J:!0,range:i},([o,a],l,u)=>{o!==0&&(s++,u.done())}).next(()=>s>0)}_t(e,n){return po(e).get(n).next(r=>r?Cl(r):null)}}function po(t){return ft(t,"targets")}function CE(t){return ft(t,"targetGlobal")}function gi(t){return ft(t,"targetDocuments")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kE([t,e],[n,r]){const i=te(t,n);return i===0?te(e,r):i}class q4{constructor(e){this.Kn=e,this.buffer=new ve(kE),this.$n=0}Un(){return++this.$n}Wn(e){const n=[e,this.Un()];if(this.buffer.size<this.Kn)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();kE(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class W4{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Gn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.zn(6e4)}stop(){this.Gn&&(this.Gn.cancel(),this.Gn=null)}get started(){return this.Gn!==null}zn(e){D("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Gn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Gn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Ji(n)?D("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",n):await Xi(n)}await this.zn(3e5)})}}class G4{constructor(e,n){this.jn=e,this.params=n}calculateTargetCount(e,n){return this.jn.Hn(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return R.resolve(Zt._e);const r=new q4(n);return this.jn.forEachTarget(e,i=>r.Wn(i.sequenceNumber)).next(()=>this.jn.Jn(e,i=>r.Wn(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.jn.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.jn.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(D("LruGarbageCollector","Garbage collection skipped; disabled"),R.resolve(PE)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(D("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),PE):this.Yn(e,n))}getCacheSize(e){return this.jn.getCacheSize(e)}Yn(e,n){let r,i,s,o,a,l,u;const c=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(h=>(h>this.params.maximumSequenceNumbersToCollect?(D("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${h}`),i=this.params.maximumSequenceNumbersToCollect):i=h,o=Date.now(),this.nthSequenceNumber(e,i))).next(h=>(r=h,a=Date.now(),this.removeTargets(e,r,n))).next(h=>(s=h,l=Date.now(),this.removeOrphanedDocuments(e,r))).next(h=>(u=Date.now(),_o()<=ie.DEBUG&&D("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-c}ms
	Determined least recently used ${i} in `+(a-o)+`ms
	Removed ${s} targets in `+(l-a)+`ms
	Removed ${h} documents in `+(u-l)+`ms
Total Duration: ${u-c}ms`),R.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:h})))}}function H4(t,e){return new G4(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K4{constructor(e,n){this.db=e,this.garbageCollector=H4(this,n)}Hn(e){const n=this.Zn(e);return this.db.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}Zn(e){let n=0;return this.Jn(e,r=>{n++}).next(()=>n)}forEachTarget(e,n){return this.db.getTargetCache().forEachTarget(e,n)}Jn(e,n){return this.Xn(e,(r,i)=>n(i))}addReference(e,n,r){return cd(e,r)}removeReference(e,n,r){return cd(e,r)}removeTargets(e,n,r){return this.db.getTargetCache().removeTargets(e,n,r)}markPotentiallyOrphaned(e,n){return cd(e,n)}er(e,n){return function(i,s){let o=!1;return SC(i).Z(a=>TC(i,a,s).next(l=>(l&&(o=!0),R.resolve(!l)))).next(()=>o)}(e,n)}removeOrphanedDocuments(e,n){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[];let s=0;return this.Xn(e,(o,a)=>{if(a<=n){const l=this.er(e,o).next(u=>{if(!u)return s++,r.getEntry(e,o).next(()=>(r.removeEntry(o,H.min()),gi(e).delete(function(h){return[0,jt(h.path)]}(o))))});i.push(l)}}).next(()=>R.waitFor(i)).next(()=>r.apply(e)).next(()=>s)}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,n){return cd(e,n)}Xn(e,n){const r=gi(e);let i,s=Zt._e;return r.Y({index:"documentTargetsIndex"},([o,a],{path:l,sequenceNumber:u})=>{o===0?(s!==Zt._e&&n(new F(cr(i)),s),s=u,i=l):s=Zt._e}).next(()=>{s!==Zt._e&&n(new F(cr(i)),s)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function cd(t,e){return gi(t).put(function(r,i){return{targetId:0,path:jt(r.path),sequenceNumber:i}}(e,t.currentSequenceNumber))}/**
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
 */class RC{constructor(){this.changes=new Zi(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Re.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?R.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class Q4{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,n,r){return ns(e).put(r)}removeEntry(e,n,r){return ns(e).delete(function(s,o){const a=s.path.toArray();return[a.slice(0,a.length-2),a[a.length-2],Dh(o),a[a.length-1]]}(n,r))}updateMetadata(e,n){return this.getMetadata(e).next(r=>(r.byteSize+=n,this.tr(e,r)))}getEntry(e,n){let r=Re.newInvalidDocument(n);return ns(e).Y({index:"documentKeyIndex",range:IDBKeyRange.only(pl(n))},(i,s)=>{r=this.nr(n,s)}).next(()=>r)}rr(e,n){let r={size:0,document:Re.newInvalidDocument(n)};return ns(e).Y({index:"documentKeyIndex",range:IDBKeyRange.only(pl(n))},(i,s)=>{r={document:this.nr(n,s),size:Oh(s)}}).next(()=>r)}getEntries(e,n){let r=tn();return this.ir(e,n,(i,s)=>{const o=this.nr(i,s);r=r.insert(i,o)}).next(()=>r)}sr(e,n){let r=tn(),i=new Ie(F.comparator);return this.ir(e,n,(s,o)=>{const a=this.nr(s,o);r=r.insert(s,a),i=i.insert(s,Oh(o))}).next(()=>({documents:r,_r:i}))}ir(e,n,r){if(n.isEmpty())return R.resolve();let i=new ve(DE);n.forEach(l=>i=i.add(l));const s=IDBKeyRange.bound(pl(i.first()),pl(i.last())),o=i.getIterator();let a=o.getNext();return ns(e).Y({index:"documentKeyIndex",range:s},(l,u,c)=>{const h=F.fromSegments([...u.prefixPath,u.collectionGroup,u.documentId]);for(;a&&DE(a,h)<0;)r(a,null),a=o.getNext();a&&a.isEqual(h)&&(r(a,u),a=o.hasNext()?o.getNext():null),a?c.U(pl(a)):c.done()}).next(()=>{for(;a;)r(a,null),a=o.hasNext()?o.getNext():null})}getDocumentsMatchingQuery(e,n,r,i,s){const o=n.path,a=[o.popLast().toArray(),o.lastSegment(),Dh(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],l=[o.popLast().toArray(),o.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return ns(e).W(IDBKeyRange.bound(a,l,!0)).next(u=>{s==null||s.incrementDocumentReadCount(u.length);let c=tn();for(const h of u){const f=this.nr(F.fromSegments(h.prefixPath.concat(h.collectionGroup,h.documentId)),h);f.isFoundDocument()&&(wc(n,f)||i.has(f.key))&&(c=c.insert(f.key,f))}return c})}getAllFromCollectionGroup(e,n,r,i){let s=tn();const o=xE(n,r),a=xE(n,_n.max());return ns(e).Y({index:"collectionGroupIndex",range:IDBKeyRange.bound(o,a,!0)},(l,u,c)=>{const h=this.nr(F.fromSegments(u.prefixPath.concat(u.collectionGroup,u.documentId)),u);s=s.insert(h.key,h),s.size===i&&c.done()}).next(()=>s)}newChangeBuffer(e){return new Y4(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(n=>n.byteSize)}getMetadata(e){return bE(e).get("remoteDocumentGlobalKey").next(n=>(W(!!n),n))}tr(e,n){return bE(e).put("remoteDocumentGlobalKey",n)}nr(e,n){if(n){const r=O4(this.serializer,n);if(!(r.isNoDocument()&&r.version.isEqual(H.min())))return r}return Re.newInvalidDocument(e)}}function AC(t){return new Q4(t)}class Y4 extends RC{constructor(e,n){super(),this.ar=e,this.trackRemovals=n,this.ur=new Zi(r=>r.toString(),(r,i)=>r.isEqual(i))}applyChanges(e){const n=[];let r=0,i=new ve((s,o)=>te(s.canonicalString(),o.canonicalString()));return this.changes.forEach((s,o)=>{const a=this.ur.get(s);if(n.push(this.ar.removeEntry(e,s,a.readTime)),o.isValidDocument()){const l=gE(this.ar.serializer,o);i=i.add(s.path.popLast()),r+=Oh(l)-a.size,n.push(this.ar.addEntry(e,s,l))}else if(r-=a.size,this.trackRemovals){const l=gE(this.ar.serializer,o.convertToNoDocument(H.min()));n.push(this.ar.addEntry(e,s,l))}}),i.forEach(s=>{n.push(this.ar.indexManager.addToCollectionParentIndex(e,s))}),n.push(this.ar.updateMetadata(e,r)),R.waitFor(n)}getFromCache(e,n){return this.ar.rr(e,n).next(r=>(this.ur.set(n,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(e,n){return this.ar.sr(e,n).next(({documents:r,_r:i})=>(i.forEach((s,o)=>{this.ur.set(s,{size:o,readTime:r.get(s).readTime})}),r))}}function bE(t){return ft(t,"remoteDocumentGlobal")}function ns(t){return ft(t,"remoteDocumentsV14")}function pl(t){const e=t.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function xE(t,e){const n=e.documentKey.path.toArray();return[t,Dh(e.readTime),n.slice(0,n.length-2),n.length>0?n[n.length-1]:""]}function DE(t,e){const n=t.path.toArray(),r=e.path.toArray();let i=0;for(let s=0;s<n.length-2&&s<r.length-2;++s)if(i=te(n[s],r[s]),i)return i;return i=te(n.length,r.length),i||(i=te(n[n.length-2],r[r.length-2]),i||te(n[n.length-1],r[r.length-1]))}/**
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
 */class X4{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class PC{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Wl(r.mutation,i,en.empty(),De.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ne()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ne()){const i=dr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Al();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=dr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ne()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=tn();const o=ql(),a=function(){return ql()}();return n.forEach((l,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof Jr)?s=s.insert(u.key,u):c!==void 0?(o.set(u.key,c.mutation.getFieldMask()),Wl(c.mutation,u,c.mutation.getFieldMask(),De.now())):o.set(u.key,en.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var h;return a.set(u,new X4(c,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=ql();let i=new Ie((o,a)=>o-a),s=ne();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=r.get(l)||en.empty();c=a.applyToLocalView(u,c),r.set(l,c);const h=(i.get(a.batchId)||ne()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,h=WP();c.forEach(f=>{if(!s.has(f)){const p=ZP(n.get(f),r.get(f));p!==null&&h.set(f,p),s=s.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return R.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return F.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):yv(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):R.resolve(dr());let a=-1,l=s;return o.next(u=>R.forEach(u,(c,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(c)?R.resolve():this.remoteDocumentCache.getEntry(e,c).next(f=>{l=l.insert(c,f)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,l,u,ne())).next(c=>({batchId:a,changes:qP(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new F(n)).next(r=>{let i=Al();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=Al();return this.indexManager.getCollectionParents(e,s).next(a=>R.forEach(a,l=>{const u=function(h,f){return new Xr(f,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,l.child(s));return this.getDocumentsMatchingCollectionQuery(e,u,r,i).next(c=>{c.forEach((h,f)=>{o=o.insert(h,f)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((l,u)=>{const c=u.getKey();o.get(c)===null&&(o=o.insert(c,Re.newInvalidDocument(c)))});let a=Al();return o.forEach((l,u)=>{const c=s.get(l);c!==void 0&&Wl(c.mutation,u,en.empty(),De.now()),wc(n,u)&&(a=a.insert(l,u))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J4{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,n){return R.resolve(this.cr.get(n))}saveBundleMetadata(e,n){return this.cr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Qe(i.createTime)}}(n)),R.resolve()}getNamedQuery(e,n){return R.resolve(this.lr.get(n))}saveNamedQuery(e,n){return this.lr.set(n.name,function(i){return{name:i.name,query:Av(i.bundledQuery),readTime:Qe(i.readTime)}}(n)),R.resolve()}}/**
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
 */class Z4{constructor(){this.overlays=new Ie(F.comparator),this.hr=new Map}getOverlay(e,n){return R.resolve(this.overlays.get(n))}getOverlays(e,n){const r=dr();return R.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),R.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.hr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.hr.delete(r)),R.resolve()}getOverlaysForCollection(e,n,r){const i=dr(),s=n.length+1,o=new F(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return R.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Ie((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=dr(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=dr(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return R.resolve(a)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.hr.get(i.largestBatchId).delete(r.key);this.hr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Tv(n,r));let s=this.hr.get(n);s===void 0&&(s=ne(),this.hr.set(n,s)),this.hr.set(n,s.add(r.key))}}/**
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
 */class kv{constructor(){this.Pr=new ve(it.Ir),this.Tr=new ve(it.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,n){const r=new it(e,n);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Ar(new it(e,n))}Rr(e,n){e.forEach(r=>this.removeReference(r,n))}Vr(e){const n=new F(new se([])),r=new it(n,e),i=new it(n,e+1),s=[];return this.Tr.forEachInRange([r,i],o=>{this.Ar(o),s.push(o.key)}),s}mr(){this.Pr.forEach(e=>this.Ar(e))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){const n=new F(new se([])),r=new it(n,e),i=new it(n,e+1);let s=ne();return this.Tr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new it(e,0),r=this.Pr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class it{constructor(e,n){this.key=e,this.pr=n}static Ir(e,n){return F.comparator(e.key,n.key)||te(e.pr,n.pr)}static Er(e,n){return te(e.pr,n.pr)||F.comparator(e.key,n.key)}}/**
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
 */class e${constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.yr=1,this.wr=new ve(it.Ir)}checkEmpty(e){return R.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Iv(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.wr=this.wr.add(new it(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return R.resolve(o)}lookupMutationBatch(e,n){return R.resolve(this.Sr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.br(r),s=i<0?0:i;return R.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return R.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(e){return R.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new it(n,0),i=new it(n,Number.POSITIVE_INFINITY),s=[];return this.wr.forEachInRange([r,i],o=>{const a=this.Sr(o.pr);s.push(a)}),R.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new ve(te);return n.forEach(i=>{const s=new it(i,0),o=new it(i,Number.POSITIVE_INFINITY);this.wr.forEachInRange([s,o],a=>{r=r.add(a.pr)})}),R.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;F.isDocumentKey(s)||(s=s.child(""));const o=new it(new F(s),0);let a=new ve(te);return this.wr.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l.pr)),!0)},o),R.resolve(this.Dr(a))}Dr(e){const n=[];return e.forEach(r=>{const i=this.Sr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){W(this.Cr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return R.forEach(n.mutations,i=>{const s=new it(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.wr=r})}Mn(e){}containsKey(e,n){const r=new it(n,0),i=this.wr.firstAfterOrEqual(r);return R.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,R.resolve()}Cr(e,n){return this.br(e)}br(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Sr(e){const n=this.br(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class t${constructor(e){this.vr=e,this.docs=function(){return new Ie(F.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.vr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return R.resolve(r?r.document.mutableCopy():Re.newInvalidDocument(n))}getEntries(e,n){let r=tn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Re.newInvalidDocument(i))}),R.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=tn();const o=n.path,a=new F(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:c}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||pv(wP(c),r)<=0||(i.has(c.key)||wc(n,c))&&(s=s.insert(c.key,c.mutableCopy()))}return R.resolve(s)}getAllFromCollectionGroup(e,n,r,i){B()}Fr(e,n){return R.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new n$(this)}getSize(e){return R.resolve(this.size)}}class n$ extends RC{constructor(e){super(),this.ar=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.ar.addEntry(e,i)):this.ar.removeEntry(r)}),R.waitFor(n)}getFromCache(e,n){return this.ar.getEntry(e,n)}getAllFromCache(e,n){return this.ar.getEntries(e,n)}}/**
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
 */class r${constructor(e){this.persistence=e,this.Mr=new Zi(n=>Ms(n),yc),this.lastRemoteSnapshotVersion=H.min(),this.highestTargetId=0,this.Or=0,this.Nr=new kv,this.targetCount=0,this.Lr=zs.Nn()}forEachTarget(e,n){return this.Mr.forEach((r,i)=>n(i)),R.resolve()}getLastRemoteSnapshotVersion(e){return R.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return R.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Lr.next(),R.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Or&&(this.Or=n),R.resolve()}qn(e){this.Mr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Lr=new zs(n),this.highestTargetId=n),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,n){return this.qn(n),this.targetCount+=1,R.resolve()}updateTargetData(e,n){return this.qn(n),R.resolve()}removeTargetData(e,n){return this.Mr.delete(n.target),this.Nr.Vr(n.targetId),this.targetCount-=1,R.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Mr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Mr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),R.waitFor(s).next(()=>i)}getTargetCount(e){return R.resolve(this.targetCount)}getTargetData(e,n){const r=this.Mr.get(n)||null;return R.resolve(r)}addMatchingKeys(e,n,r){return this.Nr.dr(n,r),R.resolve()}removeMatchingKeys(e,n,r){this.Nr.Rr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),R.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Nr.Vr(n),R.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Nr.gr(n);return R.resolve(r)}containsKey(e,n){return R.resolve(this.Nr.containsKey(n))}}/**
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
 */class CC{constructor(e,n){this.Br={},this.overlays={},this.kr=new Zt(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new r$(this),this.indexManager=new B4,this.remoteDocumentCache=function(i){return new t$(i)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new yC(n),this.$r=new J4(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new Z4,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Br[e.toKey()];return r||(r=new e$(n,this.referenceDelegate),this.Br[e.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,n,r){D("MemoryPersistence","Starting transaction:",e);const i=new i$(this.kr.next());return this.referenceDelegate.Ur(),r(i).next(s=>this.referenceDelegate.Wr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Gr(e,n){return R.or(Object.values(this.Br).map(r=>()=>r.containsKey(e,n)))}}class i$ extends EP{constructor(e){super(),this.currentSequenceNumber=e}}class Wf{constructor(e){this.persistence=e,this.zr=new kv,this.jr=null}static Hr(e){return new Wf(e)}get Jr(){if(this.jr)return this.jr;throw B()}addReference(e,n,r){return this.zr.addReference(r,n),this.Jr.delete(r.toString()),R.resolve()}removeReference(e,n,r){return this.zr.removeReference(r,n),this.Jr.add(r.toString()),R.resolve()}markPotentiallyOrphaned(e,n){return this.Jr.add(n.toString()),R.resolve()}removeTarget(e,n){this.zr.Vr(n.targetId).forEach(i=>this.Jr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Jr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ur(){this.jr=new Set}Wr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return R.forEach(this.Jr,r=>{const i=F.fromPath(r);return this.Yr(e,i).next(s=>{s||n.removeEntry(i,H.min())})}).next(()=>(this.jr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Yr(e,n).next(r=>{r?this.Jr.delete(n.toString()):this.Jr.add(n.toString())})}Kr(e){return 0}Yr(e,n){return R.or([()=>R.resolve(this.zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gr(e,n)])}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s${constructor(e){this.serializer=e}N(e,n,r,i){const s=new Uf("createOrUpgrade",n);r<1&&i>=1&&(function(l){l.createObjectStore("owner")}(e),function(l){l.createObjectStore("mutationQueues",{keyPath:"userId"}),l.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",HI,{unique:!0}),l.createObjectStore("documentMutations")}(e),NE(e),function(l){l.createObjectStore("remoteDocuments")}(e));let o=R.resolve();return r<3&&i>=3&&(r!==0&&(function(l){l.deleteObjectStore("targetDocuments"),l.deleteObjectStore("targets"),l.deleteObjectStore("targetGlobal")}(e),NE(e)),o=o.next(()=>function(l){const u=l.store("targetGlobal"),c={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:H.min().toTimestamp(),targetCount:0};return u.put("targetGlobalKey",c)}(s))),r<4&&i>=4&&(r!==0&&(o=o.next(()=>function(l,u){return u.store("mutations").W().next(c=>{l.deleteObjectStore("mutations"),l.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",HI,{unique:!0});const h=u.store("mutations"),f=c.map(p=>h.put(p));return R.waitFor(f)})}(e,s))),o=o.next(()=>{(function(l){l.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),r<5&&i>=5&&(o=o.next(()=>this.Xr(s))),r<6&&i>=6&&(o=o.next(()=>(function(l){l.createObjectStore("remoteDocumentGlobal")}(e),this.ei(s)))),r<7&&i>=7&&(o=o.next(()=>this.ti(s))),r<8&&i>=8&&(o=o.next(()=>this.ni(e,s))),r<9&&i>=9&&(o=o.next(()=>{(function(l){l.objectStoreNames.contains("remoteDocumentChanges")&&l.deleteObjectStore("remoteDocumentChanges")})(e)})),r<10&&i>=10&&(o=o.next(()=>this.ri(s))),r<11&&i>=11&&(o=o.next(()=>{(function(l){l.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(l){l.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),r<12&&i>=12&&(o=o.next(()=>{(function(l){const u=l.createObjectStore("documentOverlays",{keyPath:zU});u.createIndex("collectionPathOverlayIndex",jU,{unique:!1}),u.createIndex("collectionGroupOverlayIndex",qU,{unique:!1})})(e)})),r<13&&i>=13&&(o=o.next(()=>function(l){const u=l.createObjectStore("remoteDocumentsV14",{keyPath:xU});u.createIndex("documentKeyIndex",DU),u.createIndex("collectionGroupIndex",NU)}(e)).next(()=>this.ii(e,s)).next(()=>e.deleteObjectStore("remoteDocuments"))),r<14&&i>=14&&(o=o.next(()=>this.si(e,s))),r<15&&i>=15&&(o=o.next(()=>function(l){l.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),l.createObjectStore("indexState",{keyPath:FU}).createIndex("sequenceNumberIndex",UU,{unique:!1}),l.createObjectStore("indexEntries",{keyPath:$U}).createIndex("documentKeyIndex",BU,{unique:!1})}(e))),o}ei(e){let n=0;return e.store("remoteDocuments").Y((r,i)=>{n+=Oh(i)}).next(()=>{const r={byteSize:n};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",r)})}Xr(e){const n=e.store("mutationQueues"),r=e.store("mutations");return n.W().next(i=>R.forEach(i,s=>{const o=IDBKeyRange.bound([s.userId,-1],[s.userId,s.lastAcknowledgedBatchId]);return r.W("userMutationsIndex",o).next(a=>R.forEach(a,l=>{W(l.userId===s.userId);const u=ls(this.serializer,l);return EC(e,s.userId,u).next(()=>{})}))}))}ti(e){const n=e.store("targetDocuments"),r=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(i=>{const s=[];return r.Y((o,a)=>{const l=new se(o),u=function(h){return[0,jt(h)]}(l);s.push(n.get(u).next(c=>c?R.resolve():(h=>n.put({targetId:0,path:jt(h),sequenceNumber:i.highestListenSequenceNumber}))(l)))}).next(()=>R.waitFor(s))})}ni(e,n){e.createObjectStore("collectionParents",{keyPath:MU});const r=n.store("collectionParents"),i=new Cv,s=o=>{if(i.add(o)){const a=o.lastSegment(),l=o.popLast();return r.put({collectionId:a,parent:jt(l)})}};return n.store("remoteDocuments").Y({J:!0},(o,a)=>{const l=new se(o);return s(l.popLast())}).next(()=>n.store("documentMutations").Y({J:!0},([o,a,l],u)=>{const c=cr(a);return s(c.popLast())}))}ri(e){const n=e.store("targets");return n.Y((r,i)=>{const s=Cl(i),o=vC(this.serializer,s);return n.put(o)})}ii(e,n){const r=n.store("remoteDocuments"),i=[];return r.Y((s,o)=>{const a=n.store("remoteDocumentsV14"),l=function(h){return h.document?new F(se.fromString(h.document.name).popFirst(5)):h.noDocument?F.fromSegments(h.noDocument.path):h.unknownDocument?F.fromSegments(h.unknownDocument.path):B()}(o).path.toArray(),u={prefixPath:l.slice(0,l.length-2),collectionGroup:l[l.length-2],documentId:l[l.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};i.push(a.put(u))}).next(()=>R.waitFor(i))}si(e,n){const r=n.store("mutations"),i=AC(this.serializer),s=new CC(Wf.Hr,this.serializer.ct);return r.W().next(o=>{const a=new Map;return o.forEach(l=>{var u;let c=(u=a.get(l.userId))!==null&&u!==void 0?u:ne();ls(this.serializer,l).keys().forEach(h=>c=c.add(h)),a.set(l.userId,c)}),R.forEach(a,(l,u)=>{const c=new ot(u),h=jf.lt(this.serializer,c),f=s.getIndexManager(c),p=qf.lt(c,this.serializer,f,s.referenceDelegate);return new PC(i,p,h,f).recalculateAndSaveOverlaysForDocumentKeys(new jg(n,Zt._e),l).next()})})}}function NE(t){t.createObjectStore("targetDocuments",{keyPath:VU}).createIndex("documentTargetsIndex",LU,{unique:!0}),t.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",OU,{unique:!0}),t.createObjectStore("targetGlobal")}const hm="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class bv{constructor(e,n,r,i,s,o,a,l,u,c,h=15){if(this.allowTabSynchronization=e,this.persistenceKey=n,this.clientId=r,this.oi=s,this.window=o,this.document=a,this._i=u,this.ai=c,this.ui=h,this.kr=null,this.qr=!1,this.isPrimary=!1,this.networkEnabled=!0,this.ci=null,this.inForeground=!1,this.li=null,this.hi=null,this.Pi=Number.NEGATIVE_INFINITY,this.Ii=f=>Promise.resolve(),!bv.D())throw new x(k.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new K4(this,i),this.Ti=n+"main",this.serializer=new yC(l),this.Ei=new An(this.Ti,this.ui,new s$(this.serializer)),this.Qr=new j4(this.referenceDelegate,this.serializer),this.remoteDocumentCache=AC(this.serializer),this.$r=new V4,this.window&&this.window.localStorage?this.di=this.window.localStorage:(this.di=null,c===!1&&Ke("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.Ai().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new x(k.FAILED_PRECONDITION,hm);return this.Ri(),this.Vi(),this.mi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Qr.getHighestSequenceNumber(e))}).then(e=>{this.kr=new Zt(e,this._i)}).then(()=>{this.qr=!0}).catch(e=>(this.Ei&&this.Ei.close(),Promise.reject(e)))}fi(e){return this.Ii=async n=>{if(this.started)return e(n)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.Ei.B(async n=>{n.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.oi.enqueueAndForget(async()=>{this.started&&await this.Ai()}))}Ai(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>dd(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.gi(e).next(n=>{n||(this.isPrimary=!1,this.oi.enqueueRetryable(()=>this.Ii(!1)))})}).next(()=>this.pi(e)).next(n=>this.isPrimary&&!n?this.yi(e).next(()=>!1):!!n&&this.wi(e).next(()=>!0))).catch(e=>{if(Ji(e))return D("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return D("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.oi.enqueueRetryable(()=>this.Ii(e)),this.isPrimary=e})}gi(e){return ml(e).get("owner").next(n=>R.resolve(this.Si(n)))}bi(e){return dd(e).delete(this.clientId)}async Di(){if(this.isPrimary&&!this.Ci(this.Pi,18e5)){this.Pi=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",n=>{const r=ft(n,"clientMetadata");return r.W().next(i=>{const s=this.vi(i,18e5),o=i.filter(a=>s.indexOf(a)===-1);return R.forEach(o,a=>r.delete(a.clientId)).next(()=>o)})}).catch(()=>[]);if(this.di)for(const n of e)this.di.removeItem(this.Fi(n.clientId))}}mi(){this.hi=this.oi.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.Ai().then(()=>this.Di()).then(()=>this.mi()))}Si(e){return!!e&&e.ownerId===this.clientId}pi(e){return this.ai?R.resolve(!0):ml(e).get("owner").next(n=>{if(n!==null&&this.Ci(n.leaseTimestampMs,5e3)&&!this.Mi(n.ownerId)){if(this.Si(n)&&this.networkEnabled)return!0;if(!this.Si(n)){if(!n.allowTabSynchronization)throw new x(k.FAILED_PRECONDITION,hm);return!1}}return!(!this.networkEnabled||!this.inForeground)||dd(e).W().next(r=>this.vi(r,5e3).find(i=>{if(this.clientId!==i.clientId){const s=!this.networkEnabled&&i.networkEnabled,o=!this.inForeground&&i.inForeground,a=this.networkEnabled===i.networkEnabled;if(s||o&&a)return!0}return!1})===void 0)}).next(n=>(this.isPrimary!==n&&D("IndexedDbPersistence",`Client ${n?"is":"is not"} eligible for a primary lease.`),n))}async shutdown(){this.qr=!1,this.xi(),this.hi&&(this.hi.cancel(),this.hi=null),this.Oi(),this.Ni(),await this.Ei.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const n=new jg(e,Zt._e);return this.yi(n).next(()=>this.bi(n))}),this.Ei.close(),this.Li()}vi(e,n){return e.filter(r=>this.Ci(r.updateTimeMs,n)&&!this.Mi(r.clientId))}Bi(){return this.runTransaction("getActiveClients","readonly",e=>dd(e).W().next(n=>this.vi(n,18e5).map(r=>r.clientId)))}get started(){return this.qr}getMutationQueue(e,n){return qf.lt(e,this.serializer,n,this.referenceDelegate)}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new z4(e,this.serializer.ct.databaseId)}getDocumentOverlayCache(e){return jf.lt(this.serializer,e)}getBundleCache(){return this.$r}runTransaction(e,n,r){D("IndexedDbPersistence","Starting transaction:",e);const i=n==="readonly"?"readonly":"readwrite",s=function(l){return l===15?GU:l===14?PP:l===13?AP:l===12?WU:l===11?RP:void B()}(this.ui);let o;return this.Ei.runTransaction(e,i,s,a=>(o=new jg(a,this.kr?this.kr.next():Zt._e),n==="readwrite-primary"?this.gi(o).next(l=>!!l||this.pi(o)).next(l=>{if(!l)throw Ke(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.oi.enqueueRetryable(()=>this.Ii(!1)),new x(k.FAILED_PRECONDITION,IP);return r(o)}).next(l=>this.wi(o).next(()=>l)):this.ki(o).next(()=>r(o)))).then(a=>(o.raiseOnCommittedEvent(),a))}ki(e){return ml(e).get("owner").next(n=>{if(n!==null&&this.Ci(n.leaseTimestampMs,5e3)&&!this.Mi(n.ownerId)&&!this.Si(n)&&!(this.ai||this.allowTabSynchronization&&n.allowTabSynchronization))throw new x(k.FAILED_PRECONDITION,hm)})}wi(e){const n={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return ml(e).put("owner",n)}static D(){return An.D()}yi(e){const n=ml(e);return n.get("owner").next(r=>this.Si(r)?(D("IndexedDbPersistence","Releasing primary lease."),n.delete("owner")):R.resolve())}Ci(e,n){const r=Date.now();return!(e<r-n)&&(!(e>r)||(Ke(`Detected an update time that is in the future: ${e} > ${r}`),!1))}Ri(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.li=()=>{this.oi.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.Ai()))},this.document.addEventListener("visibilitychange",this.li),this.inForeground=this.document.visibilityState==="visible")}Oi(){this.li&&(this.document.removeEventListener("visibilitychange",this.li),this.li=null)}Vi(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.ci=()=>{this.xi();const n=/(?:Version|Mobile)\/1[456]/;tR()&&(navigator.appVersion.match(n)||navigator.userAgent.match(n))&&this.oi.enterRestrictedMode(!0),this.oi.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.ci))}Ni(){this.ci&&(this.window.removeEventListener("pagehide",this.ci),this.ci=null)}Mi(e){var n;try{const r=((n=this.di)===null||n===void 0?void 0:n.getItem(this.Fi(e)))!==null;return D("IndexedDbPersistence",`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return Ke("IndexedDbPersistence","Failed to get zombied client id.",r),!1}}xi(){if(this.di)try{this.di.setItem(this.Fi(this.clientId),String(Date.now()))}catch(e){Ke("Failed to set zombie client id.",e)}}Li(){if(this.di)try{this.di.removeItem(this.Fi(this.clientId))}catch{}}Fi(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function ml(t){return ft(t,"owner")}function dd(t){return ft(t,"clientMetadata")}function xv(t,e){let n=t.projectId;return t.isDefaultDatabase||(n+="."+t.database),"firestore/"+e+"/"+n+"/"}/**
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
 */class Dv{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.qi=r,this.Qi=i}static Ki(e,n){let r=ne(),i=ne();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Dv(e,n.fromCache,r,i)}}/**
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
 */class o${constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class kC{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return tR()?8:An.v(Ne())>0?6:4}()}initialize(e,n){this.zi=e,this.indexManager=n,this.$i=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.ji(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Hi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new o$;return this.Ji(e,n,o).next(a=>{if(s.result=a,this.Ui)return this.Yi(e,n,o,a.size)})}).next(()=>s.result)}Yi(e,n,r,i){return r.documentReadCount<this.Wi?(_o()<=ie.DEBUG&&D("QueryEngine","SDK will not create cache indexes for query:",yo(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),R.resolve()):(_o()<=ie.DEBUG&&D("QueryEngine","Query:",yo(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Gi*i?(_o()<=ie.DEBUG&&D("QueryEngine","The SDK decides to create cache indexes for query:",yo(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,qt(n))):R.resolve())}ji(e,n){if(sE(n))return R.resolve(null);let r=qt(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=xh(n,null,"F"),r=qt(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=ne(...s);return this.zi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.Zi(n,a);return this.Xi(n,u,o,l.readTime)?this.ji(e,xh(n,null,"F")):this.es(e,u,n,l)}))})))}Hi(e,n,r,i){return sE(n)||i.isEqual(H.min())?R.resolve(null):this.zi.getDocuments(e,r).next(s=>{const o=this.Zi(n,s);return this.Xi(n,o,r,i)?R.resolve(null):(_o()<=ie.DEBUG&&D("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),yo(n)),this.es(e,o,n,vP(i,-1)).next(a=>a))})}Zi(e,n){let r=new ve(zP(e));return n.forEach((i,s)=>{wc(e,s)&&(r=r.add(s))}),r}Xi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Ji(e,n,r){return _o()<=ie.DEBUG&&D("QueryEngine","Using full collection scan to execute query:",yo(n)),this.zi.getDocumentsMatchingQuery(e,n,_n.min(),r)}es(e,n,r,i){return this.zi.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a${constructor(e,n,r,i){this.persistence=e,this.ts=n,this.serializer=i,this.ns=new Ie(te),this.rs=new Zi(s=>Ms(s),yc),this.ss=new Map,this.os=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this._s(r)}_s(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new PC(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ns))}}function bC(t,e,n,r){return new a$(t,e,n,r)}async function xC(t,e){const n=U(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n._s(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=ne();for(const u of i){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(r,l).next(u=>({us:u,removedBatchIds:o,addedBatchIds:a}))})})}function l$(t,e){const n=U(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.os.newChangeBuffer({trackRemovals:!0});return function(a,l,u,c){const h=u.batch,f=h.keys();let p=R.resolve();return f.forEach(w=>{p=p.next(()=>c.getEntry(l,w)).next(v=>{const E=u.docVersions.get(w);W(E!==null),v.version.compareTo(E)<0&&(h.applyToRemoteDocument(v,u),v.isValidDocument()&&(v.setReadTime(u.commitVersion),c.addEntry(v)))})}),p.next(()=>a.mutationQueue.removeMutationBatch(l,h))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=ne();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(l=l.add(a.batch.mutations[u].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function DC(t){const e=U(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Qr.getLastRemoteSnapshotVersion(n))}function u$(t,e){const n=U(t),r=e.snapshotVersion;let i=n.ns;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.os.newChangeBuffer({trackRemovals:!0});i=n.ns;const a=[];e.targetChanges.forEach((c,h)=>{const f=i.get(h);if(!f)return;a.push(n.Qr.removeMatchingKeys(s,c.removedDocuments,h).next(()=>n.Qr.addMatchingKeys(s,c.addedDocuments,h)));let p=f.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(h)!==null?p=p.withResumeToken(rt.EMPTY_BYTE_STRING,H.min()).withLastLimboFreeSnapshotVersion(H.min()):c.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(c.resumeToken,r)),i=i.insert(h,p),function(v,E,_){return v.resumeToken.approximateByteSize()===0||E.snapshotVersion.toMicroseconds()-v.snapshotVersion.toMicroseconds()>=3e8?!0:_.addedDocuments.size+_.modifiedDocuments.size+_.removedDocuments.size>0}(f,p,c)&&a.push(n.Qr.updateTargetData(s,p))});let l=tn(),u=ne();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(NC(s,o,e.documentUpdates).next(c=>{l=c.cs,u=c.ls})),!r.isEqual(H.min())){const c=n.Qr.getLastRemoteSnapshotVersion(s).next(h=>n.Qr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return R.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.ns=i,s))}function NC(t,e,n){let r=ne(),i=ne();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=tn();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(H.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):D("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{cs:o,ls:i}})}function c$(t,e){const n=U(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function _a(t,e){const n=U(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Qr.getTargetData(r,e).next(s=>s?(i=s,R.resolve(i)):n.Qr.allocateTargetId(r).next(o=>(i=new Vr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Qr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.ns.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.ns=n.ns.insert(r.targetId,r),n.rs.set(e,r.targetId)),r})}async function ya(t,e,n){const r=U(t),i=r.ns.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Ji(o))throw o;D("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ns=r.ns.remove(e),r.rs.delete(i.target)}function Vh(t,e,n){const r=U(t);let i=H.min(),s=ne();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,u,c){const h=U(l),f=h.rs.get(c);return f!==void 0?R.resolve(h.ns.get(f)):h.Qr.getTargetData(u,c)}(r,o,qt(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.ts.getDocumentsMatchingQuery(o,e,n?i:H.min(),n?s:ne())).next(a=>(LC(r,BP(e),a),{documents:a,hs:s})))}function OC(t,e){const n=U(t),r=U(n.Qr),i=n.ns.get(e);return i?Promise.resolve(i.target):n.persistence.runTransaction("Get target data","readonly",s=>r._t(s,e).next(o=>o?o.target:null))}function VC(t,e){const n=U(t),r=n.ss.get(e)||H.min();return n.persistence.runTransaction("Get new document changes","readonly",i=>n.os.getAllFromCollectionGroup(i,e,vP(r,-1),Number.MAX_SAFE_INTEGER)).then(i=>(LC(n,e,i),i))}function LC(t,e,n){let r=t.ss.get(e)||H.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.ss.set(e,r)}async function d$(t,e,n,r){const i=U(t);let s=ne(),o=tn();for(const u of n){const c=e.Ps(u.metadata.name);u.document&&(s=s.add(c));const h=e.Is(u);h.setReadTime(e.Ts(u.metadata.readTime)),o=o.insert(c,h)}const a=i.os.newChangeBuffer({trackRemovals:!0}),l=await _a(i,function(c){return qt(Va(se.fromString(`__bundle__/docs/${c}`)))}(r));return i.persistence.runTransaction("Apply bundle documents","readwrite",u=>NC(u,a,o).next(c=>(a.apply(u),c)).next(c=>i.Qr.removeMatchingKeysForTargetId(u,l.targetId).next(()=>i.Qr.addMatchingKeys(u,s,l.targetId)).next(()=>i.localDocuments.getLocalViewOfDocuments(u,c.cs,c.ls)).next(()=>c.cs)))}async function h$(t,e,n=ne()){const r=await _a(t,qt(Av(e.bundledQuery))),i=U(t);return i.persistence.runTransaction("Save named query","readwrite",s=>{const o=Qe(e.readTime);if(r.snapshotVersion.compareTo(o)>=0)return i.$r.saveNamedQuery(s,e);const a=r.withResumeToken(rt.EMPTY_BYTE_STRING,o);return i.ns=i.ns.insert(a.targetId,a),i.Qr.updateTargetData(s,a).next(()=>i.Qr.removeMatchingKeysForTargetId(s,r.targetId)).next(()=>i.Qr.addMatchingKeys(s,n,r.targetId)).next(()=>i.$r.saveNamedQuery(s,e))})}function OE(t,e){return`firestore_clients_${t}_${e}`}function VE(t,e,n){let r=`firestore_mutations_${t}_${n}`;return e.isAuthenticated()&&(r+=`_${e.uid}`),r}function fm(t,e){return`firestore_targets_${t}_${e}`}class Lh{constructor(e,n,r,i){this.user=e,this.batchId=n,this.state=r,this.error=i}static Es(e,n,r){const i=JSON.parse(r);let s,o=typeof i=="object"&&["pending","acknowledged","rejected"].indexOf(i.state)!==-1&&(i.error===void 0||typeof i.error=="object");return o&&i.error&&(o=typeof i.error.message=="string"&&typeof i.error.code=="string",o&&(s=new x(i.error.code,i.error.message))),o?new Lh(e,n,i.state,s):(Ke("SharedClientState",`Failed to parse mutation state for ID '${n}': ${r}`),null)}ds(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Gl{constructor(e,n,r){this.targetId=e,this.state=n,this.error=r}static Es(e,n){const r=JSON.parse(n);let i,s=typeof r=="object"&&["not-current","current","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return s&&r.error&&(s=typeof r.error.message=="string"&&typeof r.error.code=="string",s&&(i=new x(r.error.code,r.error.message))),s?new Gl(e,r.state,i):(Ke("SharedClientState",`Failed to parse target state for ID '${e}': ${n}`),null)}ds(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Mh{constructor(e,n){this.clientId=e,this.activeTargetIds=n}static Es(e,n){const r=JSON.parse(n);let i=typeof r=="object"&&r.activeTargetIds instanceof Array,s=vv();for(let o=0;i&&o<r.activeTargetIds.length;++o)i=TP(r.activeTargetIds[o]),s=s.add(r.activeTargetIds[o]);return i?new Mh(e,s):(Ke("SharedClientState",`Failed to parse client data for instance '${e}': ${n}`),null)}}class Nv{constructor(e,n){this.clientId=e,this.onlineState=n}static Es(e){const n=JSON.parse(e);return typeof n=="object"&&["Unknown","Online","Offline"].indexOf(n.onlineState)!==-1&&typeof n.clientId=="string"?new Nv(n.clientId,n.onlineState):(Ke("SharedClientState",`Failed to parse online state: ${e}`),null)}}class r_{constructor(){this.activeTargetIds=vv()}As(e){this.activeTargetIds=this.activeTargetIds.add(e)}Rs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ds(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class pm{constructor(e,n,r,i,s){this.window=e,this.oi=n,this.persistenceKey=r,this.Vs=i,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.fs=this.gs.bind(this),this.ps=new Ie(te),this.started=!1,this.ys=[];const o=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=s,this.ws=OE(this.persistenceKey,this.Vs),this.Ss=function(l){return`firestore_sequence_number_${l}`}(this.persistenceKey),this.ps=this.ps.insert(this.Vs,new r_),this.bs=new RegExp(`^firestore_clients_${o}_([^_]*)$`),this.Ds=new RegExp(`^firestore_mutations_${o}_(\\d+)(?:_(.*))?$`),this.Cs=new RegExp(`^firestore_targets_${o}_(\\d+)$`),this.vs=function(l){return`firestore_online_state_${l}`}(this.persistenceKey),this.Fs=function(l){return`firestore_bundle_loaded_v2_${l}`}(this.persistenceKey),this.window.addEventListener("storage",this.fs)}static D(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.Bi();for(const r of e){if(r===this.Vs)continue;const i=this.getItem(OE(this.persistenceKey,r));if(i){const s=Mh.Es(r,i);s&&(this.ps=this.ps.insert(s.clientId,s))}}this.Ms();const n=this.storage.getItem(this.vs);if(n){const r=this.xs(n);r&&this.Os(r)}for(const r of this.ys)this.gs(r);this.ys=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.Ss,JSON.stringify(e))}getAllActiveQueryTargets(){return this.Ns(this.ps)}isActiveQueryTarget(e){let n=!1;return this.ps.forEach((r,i)=>{i.activeTargetIds.has(e)&&(n=!0)}),n}addPendingMutation(e){this.Ls(e,"pending")}updateMutationState(e,n,r){this.Ls(e,n,r),this.Bs(e)}addLocalQueryTarget(e){let n="not-current";if(this.isActiveQueryTarget(e)){const r=this.storage.getItem(fm(this.persistenceKey,e));if(r){const i=Gl.Es(e,r);i&&(n=i.state)}}return this.ks.As(e),this.Ms(),n}removeLocalQueryTarget(e){this.ks.Rs(e),this.Ms()}isLocalQueryTarget(e){return this.ks.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(fm(this.persistenceKey,e))}updateQueryState(e,n,r){this.qs(e,n,r)}handleUserChange(e,n,r){n.forEach(i=>{this.Bs(i)}),this.currentUser=e,r.forEach(i=>{this.addPendingMutation(i)})}setOnlineState(e){this.Qs(e)}notifyBundleLoaded(e){this.Ks(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.fs),this.removeItem(this.ws),this.started=!1)}getItem(e){const n=this.storage.getItem(e);return D("SharedClientState","READ",e,n),n}setItem(e,n){D("SharedClientState","SET",e,n),this.storage.setItem(e,n)}removeItem(e){D("SharedClientState","REMOVE",e),this.storage.removeItem(e)}gs(e){const n=e;if(n.storageArea===this.storage){if(D("SharedClientState","EVENT",n.key,n.newValue),n.key===this.ws)return void Ke("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.oi.enqueueRetryable(async()=>{if(this.started){if(n.key!==null){if(this.bs.test(n.key)){if(n.newValue==null){const r=this.$s(n.key);return this.Us(r,null)}{const r=this.Ws(n.key,n.newValue);if(r)return this.Us(r.clientId,r)}}else if(this.Ds.test(n.key)){if(n.newValue!==null){const r=this.Gs(n.key,n.newValue);if(r)return this.zs(r)}}else if(this.Cs.test(n.key)){if(n.newValue!==null){const r=this.js(n.key,n.newValue);if(r)return this.Hs(r)}}else if(n.key===this.vs){if(n.newValue!==null){const r=this.xs(n.newValue);if(r)return this.Os(r)}}else if(n.key===this.Ss){const r=function(s){let o=Zt._e;if(s!=null)try{const a=JSON.parse(s);W(typeof a=="number"),o=a}catch(a){Ke("SharedClientState","Failed to read sequence number from WebStorage",a)}return o}(n.newValue);r!==Zt._e&&this.sequenceNumberHandler(r)}else if(n.key===this.Fs){const r=this.Js(n.newValue);await Promise.all(r.map(i=>this.syncEngine.Ys(i)))}}}else this.ys.push(n)})}}get ks(){return this.ps.get(this.Vs)}Ms(){this.setItem(this.ws,this.ks.ds())}Ls(e,n,r){const i=new Lh(this.currentUser,e,n,r),s=VE(this.persistenceKey,this.currentUser,e);this.setItem(s,i.ds())}Bs(e){const n=VE(this.persistenceKey,this.currentUser,e);this.removeItem(n)}Qs(e){const n={clientId:this.Vs,onlineState:e};this.storage.setItem(this.vs,JSON.stringify(n))}qs(e,n,r){const i=fm(this.persistenceKey,e),s=new Gl(e,n,r);this.setItem(i,s.ds())}Ks(e){const n=JSON.stringify(Array.from(e));this.setItem(this.Fs,n)}$s(e){const n=this.bs.exec(e);return n?n[1]:null}Ws(e,n){const r=this.$s(e);return Mh.Es(r,n)}Gs(e,n){const r=this.Ds.exec(e),i=Number(r[1]),s=r[2]!==void 0?r[2]:null;return Lh.Es(new ot(s),i,n)}js(e,n){const r=this.Cs.exec(e),i=Number(r[1]);return Gl.Es(i,n)}xs(e){return Nv.Es(e)}Js(e){return JSON.parse(e)}async zs(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.Zs(e.batchId,e.state,e.error);D("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}Hs(e){return this.syncEngine.Xs(e.targetId,e.state,e.error)}Us(e,n){const r=n?this.ps.insert(e,n):this.ps.remove(e),i=this.Ns(this.ps),s=this.Ns(r),o=[],a=[];return s.forEach(l=>{i.has(l)||o.push(l)}),i.forEach(l=>{s.has(l)||a.push(l)}),this.syncEngine.eo(o,a).then(()=>{this.ps=r})}Os(e){this.ps.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}Ns(e){let n=vv();return e.forEach((r,i)=>{n=n.unionWith(i.activeTargetIds)}),n}}class MC{constructor(){this.no=new r_,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.no.As(e),this.ro[e]||"not-current"}updateQueryState(e,n,r){this.ro[e]=n}removeLocalQueryTarget(e){this.no.Rs(e)}isLocalQueryTarget(e){return this.no.activeTargetIds.has(e)}clearQueryState(e){delete this.ro[e]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(e){return this.no.activeTargetIds.has(e)}start(){return this.no=new r_,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class f${io(e){}shutdown(){}}/**
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
 */class LE{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(e){this.uo.push(e)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){D("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.uo)e(0)}ao(){D("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.uo)e(1)}static D(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let hd=null;function mm(){return hd===null?hd=function(){return 268435456+Math.round(2147483648*Math.random())}():hd++,"0x"+hd.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p$={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class m${constructor(e){this.lo=e.lo,this.ho=e.ho}Po(e){this.Io=e}To(e){this.Eo=e}onMessage(e){this.Ao=e}close(){this.ho()}send(e){this.lo(e)}Ro(){this.Io()}Vo(e){this.Eo(e)}mo(e){this.Ao(e)}}/**
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
 */const Pt="WebChannelConnection";class g$ extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.fo=r+"://"+n.host,this.po=`projects/${i}/databases/${s}`,this.yo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get wo(){return!1}So(n,r,i,s,o){const a=mm(),l=this.bo(n,r.toUriEncodedString());D("RestConnection",`Sending RPC '${n}' ${a}:`,l,i);const u={"google-cloud-resource-prefix":this.po,"x-goog-request-params":this.yo};return this.Do(u,s,o),this.Co(n,l,u,i).then(c=>(D("RestConnection",`Received RPC '${n}' ${a}: `,c),c),c=>{throw Hn("RestConnection",`RPC '${n}' ${a} failed with error: `,c,"url: ",l,"request:",i),c})}vo(n,r,i,s,o,a){return this.So(n,r,i,s,o)}Do(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Oa}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}bo(n,r){const i=p$[n];return`${this.fo}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Co(e,n,r,i){const s=mm();return new Promise((o,a)=>{const l=new hU;l.setWithCredentials(!0),l.listenOnce(cU.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case cm.NO_ERROR:const c=l.getResponseJson();D(Pt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(c)),o(c);break;case cm.TIMEOUT:D(Pt,`RPC '${e}' ${s} timed out`),a(new x(k.DEADLINE_EXCEEDED,"Request time out"));break;case cm.HTTP_ERROR:const h=l.getStatus();if(D(Pt,`RPC '${e}' ${s} failed with status:`,h,"response text:",l.getResponseText()),h>0){let f=l.getResponseJson();Array.isArray(f)&&(f=f[0]);const p=f==null?void 0:f.error;if(p&&p.status&&p.message){const w=function(E){const _=E.toLowerCase().replace(/_/g,"-");return Object.values(k).indexOf(_)>=0?_:k.UNKNOWN}(p.status);a(new x(w,p.message))}else a(new x(k.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new x(k.UNAVAILABLE,"Connection failed."));break;default:B()}}finally{D(Pt,`RPC '${e}' ${s} completed.`)}});const u=JSON.stringify(i);D(Pt,`RPC '${e}' ${s} sending request:`,i),l.send(n,"POST",u,r,15)})}Fo(e,n,r){const i=mm(),s=[this.fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=lU(),a=uU(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Do(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const c=s.join("");D(Pt,`Creating RPC '${e}' stream ${i}: ${c}`,l);const h=o.createWebChannel(c,l);let f=!1,p=!1;const w=new m$({lo:E=>{p?D(Pt,`Not sending because RPC '${e}' stream ${i} is closed:`,E):(f||(D(Pt,`Opening RPC '${e}' stream ${i} transport.`),h.open(),f=!0),D(Pt,`RPC '${e}' stream ${i} sending:`,E),h.send(E))},ho:()=>h.close()}),v=(E,_,m)=>{E.listen(_,g=>{try{m(g)}catch(T){setTimeout(()=>{throw T},0)}})};return v(h,ad.EventType.OPEN,()=>{p||D(Pt,`RPC '${e}' stream ${i} transport opened.`)}),v(h,ad.EventType.CLOSE,()=>{p||(p=!0,D(Pt,`RPC '${e}' stream ${i} transport closed`),w.Vo())}),v(h,ad.EventType.ERROR,E=>{p||(p=!0,Hn(Pt,`RPC '${e}' stream ${i} transport errored:`,E),w.Vo(new x(k.UNAVAILABLE,"The operation could not be completed")))}),v(h,ad.EventType.MESSAGE,E=>{var _;if(!p){const m=E.data[0];W(!!m);const g=m,T=g.error||((_=g[0])===null||_===void 0?void 0:_.error);if(T){D(Pt,`RPC '${e}' stream ${i} received error:`,T);const P=T.status;let C=function(A){const b=Ye[A];if(b!==void 0)return nC(b)}(P),y=T.message;C===void 0&&(C=k.INTERNAL,y="Unknown error status: "+P+" with message "+T.message),p=!0,w.Vo(new x(C,y)),h.close()}else D(Pt,`RPC '${e}' stream ${i} received:`,m),w.mo(m)}}),v(a,dU.STAT_EVENT,E=>{E.stat===jI.PROXY?D(Pt,`RPC '${e}' stream ${i} detected buffering proxy`):E.stat===jI.NOPROXY&&D(Pt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{w.Ro()},0),w}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function FC(){return typeof window!="undefined"?window:null}function $d(){return typeof document!="undefined"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sc(t){return new S4(t,!0)}/**
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
 */class Ov{constructor(e,n,r=1e3,i=1.5,s=6e4){this.oi=e,this.timerId=n,this.Mo=r,this.xo=i,this.Oo=s,this.No=0,this.Lo=null,this.Bo=Date.now(),this.reset()}reset(){this.No=0}ko(){this.No=this.Oo}qo(e){this.cancel();const n=Math.floor(this.No+this.Qo()),r=Math.max(0,Date.now()-this.Bo),i=Math.max(0,n-r);i>0&&D("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.No} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Lo=this.oi.enqueueAfterDelay(this.timerId,i,()=>(this.Bo=Date.now(),e())),this.No*=this.xo,this.No<this.Mo&&(this.No=this.Mo),this.No>this.Oo&&(this.No=this.Oo)}Ko(){this.Lo!==null&&(this.Lo.skipDelay(),this.Lo=null)}cancel(){this.Lo!==null&&(this.Lo.cancel(),this.Lo=null)}Qo(){return(Math.random()-.5)*this.No}}/**
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
 */class UC{constructor(e,n,r,i,s,o,a,l){this.oi=e,this.$o=r,this.Uo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Wo=0,this.Go=null,this.zo=null,this.stream=null,this.jo=new Ov(e,n)}Ho(){return this.state===1||this.state===5||this.Jo()}Jo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Yo()}async stop(){this.Ho()&&await this.close(0)}Zo(){this.state=0,this.jo.reset()}Xo(){this.Jo()&&this.Go===null&&(this.Go=this.oi.enqueueAfterDelay(this.$o,6e4,()=>this.e_()))}t_(e){this.n_(),this.stream.send(e)}async e_(){if(this.Jo())return this.close(0)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}r_(){this.zo&&(this.zo.cancel(),this.zo=null)}async close(e,n){this.n_(),this.r_(),this.jo.cancel(),this.Wo++,e!==4?this.jo.reset():n&&n.code===k.RESOURCE_EXHAUSTED?(Ke(n.toString()),Ke("Using maximum backoff delay to prevent overloading the backend."),this.jo.ko()):n&&n.code===k.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.i_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.To(n)}i_(){}auth(){this.state=1;const e=this.s_(this.Wo),n=this.Wo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Wo===n&&this.o_(r,i)},r=>{e(()=>{const i=new x(k.UNKNOWN,"Fetching auth token failed: "+r.message);return this.__(i)})})}o_(e,n){const r=this.s_(this.Wo);this.stream=this.a_(e,n),this.stream.Po(()=>{r(()=>(this.state=2,this.zo=this.oi.enqueueAfterDelay(this.Uo,1e4,()=>(this.Jo()&&(this.state=3),Promise.resolve())),this.listener.Po()))}),this.stream.To(i=>{r(()=>this.__(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Yo(){this.state=5,this.jo.qo(async()=>{this.state=0,this.start()})}__(e){return D("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}s_(e){return n=>{this.oi.enqueueAndForget(()=>this.Wo===e?n():(D("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class _$ extends UC{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}a_(e,n){return this.connection.Fo("Listen",e,n)}onMessage(e){this.jo.reset();const n=P4(this.serializer,e),r=function(s){if(!("targetChange"in s))return H.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?H.min():o.readTime?Qe(o.readTime):H.min()}(e);return this.listener.u_(n,r)}c_(e){const n={};n.database=Jg(this.serializer),n.addTarget=function(s,o){let a;const l=o.target;if(a=kh(l)?{documents:hC(s,l)}:{query:fC(s,l).ut},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=oC(s,o.resumeToken);const u=Yg(s,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(H.min())>0){a.readTime=ga(s,o.snapshotVersion.toTimestamp());const u=Yg(s,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,e);const r=k4(this.serializer,e);r&&(n.labels=r),this.t_(n)}l_(e){const n={};n.database=Jg(this.serializer),n.removeTarget=e,this.t_(n)}}class y$ extends UC{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.h_=!1}get P_(){return this.h_}start(){this.h_=!1,this.lastStreamToken=void 0,super.start()}i_(){this.h_&&this.I_([])}a_(e,n){return this.connection.Fo("Write",e,n)}onMessage(e){if(W(!!e.streamToken),this.lastStreamToken=e.streamToken,this.h_){this.jo.reset();const n=C4(e.writeResults,e.commitTime),r=Qe(e.commitTime);return this.listener.T_(r,n)}return W(!e.writeResults||e.writeResults.length===0),this.h_=!0,this.listener.E_()}d_(){const e={};e.database=Jg(this.serializer),this.t_(e)}I_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>$u(this.serializer,r))};this.t_(n)}}/**
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
 */class v$ extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.A_=!1}R_(){if(this.A_)throw new x(k.FAILED_PRECONDITION,"The client has already been terminated.")}So(e,n,r,i){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.So(e,Xg(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new x(k.UNKNOWN,s.toString())})}vo(e,n,r,i,s){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.vo(e,Xg(n,r),i,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new x(k.UNKNOWN,o.toString())})}terminate(){this.A_=!0,this.connection.terminate()}}class w${constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.m_=0,this.f_=null,this.g_=!0}p_(){this.m_===0&&(this.y_("Unknown"),this.f_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.f_=null,this.w_("Backend didn't respond within 10 seconds."),this.y_("Offline"),Promise.resolve())))}S_(e){this.state==="Online"?this.y_("Unknown"):(this.m_++,this.m_>=1&&(this.b_(),this.w_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.y_("Offline")))}set(e){this.b_(),this.m_=0,e==="Online"&&(this.g_=!1),this.y_(e)}y_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}w_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.g_?(Ke(n),this.g_=!1):D("OnlineStateTracker",n)}b_(){this.f_!==null&&(this.f_.cancel(),this.f_=null)}}/**
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
 */class I${constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.D_=[],this.C_=new Map,this.v_=new Set,this.F_=[],this.M_=s,this.M_.io(o=>{r.enqueueAndForget(async()=>{es(this)&&(D("RemoteStore","Restarting streams for network reachability change."),await async function(l){const u=U(l);u.v_.add(4),await Fa(u),u.x_.set("Unknown"),u.v_.delete(4),await Rc(u)}(this))})}),this.x_=new w$(r,i)}}async function Rc(t){if(es(t))for(const e of t.F_)await e(!0)}async function Fa(t){for(const e of t.F_)await e(!1)}function Gf(t,e){const n=U(t);n.C_.has(e.targetId)||(n.C_.set(e.targetId,e),Mv(n)?Lv(n):$a(n).Jo()&&Vv(n,e))}function va(t,e){const n=U(t),r=$a(n);n.C_.delete(e),r.Jo()&&$C(n,e),n.C_.size===0&&(r.Jo()?r.Xo():es(n)&&n.x_.set("Unknown"))}function Vv(t,e){if(t.O_.Oe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(H.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}$a(t).c_(e)}function $C(t,e){t.O_.Oe(e),$a(t).l_(e)}function Lv(t){t.O_=new w4({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),_t:e=>t.C_.get(e)||null,nt:()=>t.datastore.serializer.databaseId}),$a(t).start(),t.x_.p_()}function Mv(t){return es(t)&&!$a(t).Ho()&&t.C_.size>0}function es(t){return U(t).v_.size===0}function BC(t){t.O_=void 0}async function E$(t){t.C_.forEach((e,n)=>{Vv(t,e)})}async function T$(t,e){BC(t),Mv(t)?(t.x_.S_(e),Lv(t)):t.x_.set("Unknown")}async function S$(t,e,n){if(t.x_.set("Online"),e instanceof sC&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.C_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.C_.delete(a),i.O_.removeTarget(a))}(t,e)}catch(r){D("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Fh(t,r)}else if(e instanceof Ud?t.O_.$e(e):e instanceof iC?t.O_.Je(e):t.O_.Ge(e),!n.isEqual(H.min()))try{const r=await DC(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.O_.it(o);return a.targetChanges.forEach((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const c=s.C_.get(u);c&&s.C_.set(u,c.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,u)=>{const c=s.C_.get(l);if(!c)return;s.C_.set(l,c.withResumeToken(rt.EMPTY_BYTE_STRING,c.snapshotVersion)),$C(s,l);const h=new Vr(c.target,l,u,c.sequenceNumber);Vv(s,h)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){D("RemoteStore","Failed to raise snapshot:",r),await Fh(t,r)}}async function Fh(t,e,n){if(!Ji(e))throw e;t.v_.add(1),await Fa(t),t.x_.set("Offline"),n||(n=()=>DC(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{D("RemoteStore","Retrying IndexedDB access"),await n(),t.v_.delete(1),await Rc(t)})}function zC(t,e){return e().catch(n=>Fh(t,n,e))}async function Ua(t){const e=U(t),n=zi(e);let r=e.D_.length>0?e.D_[e.D_.length-1].batchId:-1;for(;R$(e);)try{const i=await c$(e.localStore,r);if(i===null){e.D_.length===0&&n.Xo();break}r=i.batchId,A$(e,i)}catch(i){await Fh(e,i)}jC(e)&&qC(e)}function R$(t){return es(t)&&t.D_.length<10}function A$(t,e){t.D_.push(e);const n=zi(t);n.Jo()&&n.P_&&n.I_(e.mutations)}function jC(t){return es(t)&&!zi(t).Ho()&&t.D_.length>0}function qC(t){zi(t).start()}async function P$(t){zi(t).d_()}async function C$(t){const e=zi(t);for(const n of t.D_)e.I_(n.mutations)}async function k$(t,e,n){const r=t.D_.shift(),i=Ev.from(r,e,n);await zC(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Ua(t)}async function b$(t,e){e&&zi(t).P_&&await async function(r,i){if(function(o){return tC(o)&&o!==k.ABORTED}(i.code)){const s=r.D_.shift();zi(r).Zo(),await zC(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Ua(r)}}(t,e),jC(t)&&qC(t)}async function ME(t,e){const n=U(t);n.asyncQueue.verifyOperationInProgress(),D("RemoteStore","RemoteStore received new credentials");const r=es(n);n.v_.add(3),await Fa(n),r&&n.x_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.v_.delete(3),await Rc(n)}async function i_(t,e){const n=U(t);e?(n.v_.delete(2),await Rc(n)):e||(n.v_.add(2),await Fa(n),n.x_.set("Unknown"))}function $a(t){return t.N_||(t.N_=function(n,r,i){const s=U(n);return s.R_(),new _$(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Po:E$.bind(null,t),To:T$.bind(null,t),u_:S$.bind(null,t)}),t.F_.push(async e=>{e?(t.N_.Zo(),Mv(t)?Lv(t):t.x_.set("Unknown")):(await t.N_.stop(),BC(t))})),t.N_}function zi(t){return t.L_||(t.L_=function(n,r,i){const s=U(n);return s.R_(),new y$(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Po:P$.bind(null,t),To:b$.bind(null,t),E_:C$.bind(null,t),T_:k$.bind(null,t)}),t.F_.push(async e=>{e?(t.L_.Zo(),await Ua(t)):(await t.L_.stop(),t.D_.length>0&&(D("RemoteStore",`Stopping write stream with ${t.D_.length} pending writes`),t.D_=[]))})),t.L_}/**
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
 */class Fv{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new ct,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new Fv(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new x(k.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ba(t,e){if(Ke("AsyncQueue",`${e}: ${t}`),Ji(t))return new x(k.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Qo{constructor(e){this.comparator=e?(n,r)=>e(n,r)||F.comparator(n.key,r.key):(n,r)=>F.comparator(n.key,r.key),this.keyedMap=Al(),this.sortedSet=new Ie(this.comparator)}static emptySet(e){return new Qo(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Qo)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Qo;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class FE{constructor(){this.B_=new Ie(F.comparator)}track(e){const n=e.doc.key,r=this.B_.get(n);r?e.type!==0&&r.type===3?this.B_=this.B_.insert(n,e):e.type===3&&r.type!==1?this.B_=this.B_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.B_=this.B_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.B_=this.B_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.B_=this.B_.remove(n):e.type===1&&r.type===2?this.B_=this.B_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.B_=this.B_.insert(n,{type:2,doc:e.doc}):B():this.B_=this.B_.insert(n,e)}k_(){const e=[];return this.B_.inorderTraversal((n,r)=>{e.push(r)}),e}}class wa{constructor(e,n,r,i,s,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new wa(e,n,Qo.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&vc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class x${constructor(){this.q_=void 0,this.Q_=[]}K_(){return this.Q_.some(e=>e.U_())}}class D${constructor(){this.queries=new Zi(e=>$P(e),vc),this.onlineState="Unknown",this.W_=new Set}}async function Uv(t,e){const n=U(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.K_()&&e.U_()&&(r=2):(s=new x$,r=e.U_()?0:1);try{switch(r){case 0:s.q_=await n.onListen(i,!0);break;case 1:s.q_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const a=Ba(o,`Initialization of query '${yo(e.query)}' failed`);return void e.onError(a)}n.queries.set(i,s),s.Q_.push(e),e.G_(n.onlineState),s.q_&&e.z_(s.q_)&&Bv(n)}async function $v(t,e){const n=U(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.Q_.indexOf(e);o>=0&&(s.Q_.splice(o,1),s.Q_.length===0?i=e.U_()?0:1:!s.K_()&&e.U_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function N$(t,e){const n=U(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.Q_)a.z_(i)&&(r=!0);o.q_=i}}r&&Bv(n)}function O$(t,e,n){const r=U(t),i=r.queries.get(e);if(i)for(const s of i.Q_)s.onError(n);r.queries.delete(e)}function Bv(t){t.W_.forEach(e=>{e.next()})}var s_,UE;(UE=s_||(s_={})).j_="default",UE.Cache="cache";class zv{constructor(e,n,r){this.query=e,this.H_=n,this.J_=!1,this.Y_=null,this.onlineState="Unknown",this.options=r||{}}z_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new wa(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.J_?this.Z_(e)&&(this.H_.next(e),n=!0):this.X_(e,this.onlineState)&&(this.ea(e),n=!0),this.Y_=e,n}onError(e){this.H_.error(e)}G_(e){this.onlineState=e;let n=!1;return this.Y_&&!this.J_&&this.X_(this.Y_,e)&&(this.ea(this.Y_),n=!0),n}X_(e,n){if(!e.fromCache||!this.U_())return!0;const r=n!=="Offline";return(!this.options.ta||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Z_(e){if(e.docChanges.length>0)return!0;const n=this.Y_&&this.Y_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ea(e){e=wa.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.J_=!0,this.H_.next(e)}U_(){return this.options.source!==s_.Cache}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V${constructor(e,n){this.na=e,this.byteLength=n}ra(){return"metadata"in this.na}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $E{constructor(e){this.serializer=e}Ps(e){return gr(this.serializer,e)}Is(e){return e.metadata.exists?dC(this.serializer,e.document,!1):Re.newNoDocument(this.Ps(e.metadata.name),this.Ts(e.metadata.readTime))}Ts(e){return Qe(e)}}class L${constructor(e,n,r){this.ia=e,this.localStore=n,this.serializer=r,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=WC(e)}sa(e){this.progress.bytesLoaded+=e.byteLength;let n=this.progress.documentsLoaded;if(e.na.namedQuery)this.queries.push(e.na.namedQuery);else if(e.na.documentMetadata){this.documents.push({metadata:e.na.documentMetadata}),e.na.documentMetadata.exists||++n;const r=se.fromString(e.na.documentMetadata.name);this.collectionGroups.add(r.get(r.length-2))}else e.na.document&&(this.documents[this.documents.length-1].document=e.na.document,++n);return n!==this.progress.documentsLoaded?(this.progress.documentsLoaded=n,Object.assign({},this.progress)):null}oa(e){const n=new Map,r=new $E(this.serializer);for(const i of e)if(i.metadata.queries){const s=r.Ps(i.metadata.name);for(const o of i.metadata.queries){const a=(n.get(o)||ne()).add(s);n.set(o,a)}}return n}async complete(){const e=await d$(this.localStore,new $E(this.serializer),this.documents,this.ia.id),n=this.oa(this.documents);for(const r of this.queries)await h$(this.localStore,r,n.get(r.name));return this.progress.taskState="Success",{progress:this.progress,_a:this.collectionGroups,aa:e}}}function WC(t){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:t.totalDocuments,totalBytes:t.totalBytes}}/**
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
 */class GC{constructor(e){this.key=e}}class HC{constructor(e){this.key=e}}class KC{constructor(e,n){this.query=e,this.ua=n,this.ca=null,this.hasCachedResults=!1,this.current=!1,this.la=ne(),this.mutatedKeys=ne(),this.ha=zP(e),this.Pa=new Qo(this.ha)}get Ia(){return this.ua}Ta(e,n){const r=n?n.Ea:new FE,i=n?n.Pa:this.Pa;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,h)=>{const f=i.get(c),p=wc(this.query,h)?h:null,w=!!f&&this.mutatedKeys.has(f.key),v=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let E=!1;f&&p?f.data.isEqual(p.data)?w!==v&&(r.track({type:3,doc:p}),E=!0):this.da(f,p)||(r.track({type:2,doc:p}),E=!0,(l&&this.ha(p,l)>0||u&&this.ha(p,u)<0)&&(a=!0)):!f&&p?(r.track({type:0,doc:p}),E=!0):f&&!p&&(r.track({type:1,doc:f}),E=!0,(l||u)&&(a=!0)),E&&(p?(o=o.add(p),s=v?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{Pa:o,Ea:r,Xi:a,mutatedKeys:s}}da(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Pa;this.Pa=e.Pa,this.mutatedKeys=e.mutatedKeys;const o=e.Ea.k_();o.sort((c,h)=>function(p,w){const v=E=>{switch(E){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return B()}};return v(p)-v(w)}(c.type,h.type)||this.ha(c.doc,h.doc)),this.Aa(r),i=i!=null&&i;const a=n&&!i?this.Ra():[],l=this.la.size===0&&this.current&&!i?1:0,u=l!==this.ca;return this.ca=l,o.length!==0||u?{snapshot:new wa(this.query,e.Pa,s,o,e.mutatedKeys,l===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),Va:a}:{Va:a}}G_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Pa:this.Pa,Ea:new FE,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{Va:[]}}ma(e){return!this.ua.has(e)&&!!this.Pa.has(e)&&!this.Pa.get(e).hasLocalMutations}Aa(e){e&&(e.addedDocuments.forEach(n=>this.ua=this.ua.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.ua=this.ua.delete(n)),this.current=e.current)}Ra(){if(!this.current)return[];const e=this.la;this.la=ne(),this.Pa.forEach(r=>{this.ma(r.key)&&(this.la=this.la.add(r.key))});const n=[];return e.forEach(r=>{this.la.has(r)||n.push(new HC(r))}),this.la.forEach(r=>{e.has(r)||n.push(new GC(r))}),n}fa(e){this.ua=e.hs,this.la=ne();const n=this.Ta(e.documents);return this.applyChanges(n,!0)}ga(){return wa.fromInitialDocuments(this.query,this.Pa,this.mutatedKeys,this.ca===0,this.hasCachedResults)}}class M${constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class F${constructor(e){this.key=e,this.pa=!1}}class U${constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.ya={},this.wa=new Zi(a=>$P(a),vc),this.Sa=new Map,this.ba=new Set,this.Da=new Ie(F.comparator),this.Ca=new Map,this.va=new kv,this.Fa={},this.Ma=new Map,this.xa=zs.Ln(),this.onlineState="Unknown",this.Oa=void 0}get isPrimaryClient(){return this.Oa===!0}}async function $$(t,e,n=!0){const r=Hf(t);let i;const s=r.wa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.ga()):i=await QC(r,e,n,!0),i}async function B$(t,e){const n=Hf(t);await QC(n,e,!0,!1)}async function QC(t,e,n,r){const i=await _a(t.localStore,qt(e)),s=i.targetId,o=n?t.sharedClientState.addLocalQueryTarget(s):"not-current";let a;return r&&(a=await jv(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&Gf(t.remoteStore,i),a}async function jv(t,e,n,r,i){t.Na=(h,f,p)=>async function(v,E,_,m){let g=E.view.Ta(_);g.Xi&&(g=await Vh(v.localStore,E.query,!1).then(({documents:y})=>E.view.Ta(y,g)));const T=m&&m.targetChanges.get(E.targetId),P=m&&m.targetMismatches.get(E.targetId)!=null,C=E.view.applyChanges(g,v.isPrimaryClient,T,P);return o_(v,E.targetId,C.Va),C.snapshot}(t,h,f,p);const s=await Vh(t.localStore,e,!0),o=new KC(e,s.hs),a=o.Ta(s.documents),l=Tc.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=o.applyChanges(a,t.isPrimaryClient,l);o_(t,n,u.Va);const c=new M$(e,n,o);return t.wa.set(e,c),t.Sa.has(n)?t.Sa.get(n).push(e):t.Sa.set(n,[e]),u.snapshot}async function z$(t,e,n){const r=U(t),i=r.wa.get(e),s=r.Sa.get(i.targetId);if(s.length>1)return r.Sa.set(i.targetId,s.filter(o=>!vc(o,e))),void r.wa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await ya(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&va(r.remoteStore,i.targetId),Ia(r,i.targetId)}).catch(Xi)):(Ia(r,i.targetId),await ya(r.localStore,i.targetId,!0))}async function j$(t,e){const n=U(t),r=n.wa.get(e),i=n.Sa.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),va(n.remoteStore,r.targetId))}async function q$(t,e,n){const r=Hv(t);try{const i=await function(o,a){const l=U(o),u=De.now(),c=a.reduce((p,w)=>p.add(w.key),ne());let h,f;return l.persistence.runTransaction("Locally write mutations","readwrite",p=>{let w=tn(),v=ne();return l.os.getEntries(p,c).next(E=>{w=E,w.forEach((_,m)=>{m.isValidDocument()||(v=v.add(_))})}).next(()=>l.localDocuments.getOverlayedDocuments(p,w)).next(E=>{h=E;const _=[];for(const m of a){const g=_4(m,h.get(m.key).overlayedDocument);g!=null&&_.push(new Jr(m.key,g,xP(g.value.mapValue),xe.exists(!0)))}return l.mutationQueue.addMutationBatch(p,u,_,a)}).next(E=>{f=E;const _=E.applyToLocalDocumentSet(h,v);return l.documentOverlayCache.saveOverlays(p,E.batchId,_)})}).then(()=>({batchId:f.batchId,changes:qP(h)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,l){let u=o.Fa[o.currentUser.toKey()];u||(u=new Ie(te)),u=u.insert(a,l),o.Fa[o.currentUser.toKey()]=u}(r,i.batchId,n),await Zr(r,i.changes),await Ua(r.remoteStore)}catch(i){const s=Ba(i,"Failed to persist write");n.reject(s)}}async function YC(t,e){const n=U(t);try{const r=await u$(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Ca.get(s);o&&(W(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.pa=!0:i.modifiedDocuments.size>0?W(o.pa):i.removedDocuments.size>0&&(W(o.pa),o.pa=!1))}),await Zr(n,r,e)}catch(r){await Xi(r)}}function BE(t,e,n){const r=U(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.wa.forEach((s,o)=>{const a=o.view.G_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const l=U(o);l.onlineState=a;let u=!1;l.queries.forEach((c,h)=>{for(const f of h.Q_)f.G_(a)&&(u=!0)}),u&&Bv(l)}(r.eventManager,e),i.length&&r.ya.u_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function W$(t,e,n){const r=U(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Ca.get(e),s=i&&i.key;if(s){let o=new Ie(F.comparator);o=o.insert(s,Re.newNoDocument(s,H.min()));const a=ne().add(s),l=new Ec(H.min(),new Map,new Ie(te),o,a);await YC(r,l),r.Da=r.Da.remove(s),r.Ca.delete(e),Gv(r)}else await ya(r.localStore,e,!1).then(()=>Ia(r,e,n)).catch(Xi)}async function G$(t,e){const n=U(t),r=e.batch.batchId;try{const i=await l$(n.localStore,e);Wv(n,r,null),qv(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Zr(n,i)}catch(i){await Xi(i)}}async function H$(t,e,n){const r=U(t);try{const i=await function(o,a){const l=U(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let c;return l.mutationQueue.lookupMutationBatch(u,a).next(h=>(W(h!==null),c=h.keys(),l.mutationQueue.removeMutationBatch(u,h))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,c,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,c)).next(()=>l.localDocuments.getDocuments(u,c))})}(r.localStore,e);Wv(r,e,n),qv(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Zr(r,i)}catch(i){await Xi(i)}}async function K$(t,e){const n=U(t);es(n.remoteStore)||D("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const r=await function(o){const a=U(o);return a.persistence.runTransaction("Get highest unacknowledged batch id","readonly",l=>a.mutationQueue.getHighestUnacknowledgedBatchId(l))}(n.localStore);if(r===-1)return void e.resolve();const i=n.Ma.get(r)||[];i.push(e),n.Ma.set(r,i)}catch(r){const i=Ba(r,"Initialization of waitForPendingWrites() operation failed");e.reject(i)}}function qv(t,e){(t.Ma.get(e)||[]).forEach(n=>{n.resolve()}),t.Ma.delete(e)}function Wv(t,e,n){const r=U(t);let i=r.Fa[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Fa[r.currentUser.toKey()]=i}}function Ia(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Sa.get(e))t.wa.delete(r),n&&t.ya.La(r,n);t.Sa.delete(e),t.isPrimaryClient&&t.va.Vr(e).forEach(r=>{t.va.containsKey(r)||XC(t,r)})}function XC(t,e){t.ba.delete(e.path.canonicalString());const n=t.Da.get(e);n!==null&&(va(t.remoteStore,n),t.Da=t.Da.remove(e),t.Ca.delete(n),Gv(t))}function o_(t,e,n){for(const r of n)r instanceof GC?(t.va.addReference(r.key,e),Q$(t,r)):r instanceof HC?(D("SyncEngine","Document no longer in limbo: "+r.key),t.va.removeReference(r.key,e),t.va.containsKey(r.key)||XC(t,r.key)):B()}function Q$(t,e){const n=e.key,r=n.path.canonicalString();t.Da.get(n)||t.ba.has(r)||(D("SyncEngine","New document in limbo: "+n),t.ba.add(r),Gv(t))}function Gv(t){for(;t.ba.size>0&&t.Da.size<t.maxConcurrentLimboResolutions;){const e=t.ba.values().next().value;t.ba.delete(e);const n=new F(se.fromString(e)),r=t.xa.next();t.Ca.set(r,new F$(n)),t.Da=t.Da.insert(n,r),Gf(t.remoteStore,new Vr(qt(Va(n.path)),r,"TargetPurposeLimboResolution",Zt._e))}}async function Zr(t,e,n){const r=U(t),i=[],s=[],o=[];r.wa.isEmpty()||(r.wa.forEach((a,l)=>{o.push(r.Na(l,e,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const c=Dv.Ki(l.targetId,u);s.push(c)}}))}),await Promise.all(o),r.ya.u_(i),await async function(l,u){const c=U(l);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>R.forEach(u,f=>R.forEach(f.qi,p=>c.persistence.referenceDelegate.addReference(h,f.targetId,p)).next(()=>R.forEach(f.Qi,p=>c.persistence.referenceDelegate.removeReference(h,f.targetId,p)))))}catch(h){if(!Ji(h))throw h;D("LocalStore","Failed to update sequence numbers: "+h)}for(const h of u){const f=h.targetId;if(!h.fromCache){const p=c.ns.get(f),w=p.snapshotVersion,v=p.withLastLimboFreeSnapshotVersion(w);c.ns=c.ns.insert(f,v)}}}(r.localStore,s))}async function Y$(t,e){const n=U(t);if(!n.currentUser.isEqual(e)){D("SyncEngine","User change. New user:",e.toKey());const r=await xC(n.localStore,e);n.currentUser=e,function(s,o){s.Ma.forEach(a=>{a.forEach(l=>{l.reject(new x(k.CANCELLED,o))})}),s.Ma.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Zr(n,r.us)}}function X$(t,e){const n=U(t),r=n.Ca.get(e);if(r&&r.pa)return ne().add(r.key);{let i=ne();const s=n.Sa.get(e);if(!s)return i;for(const o of s){const a=n.wa.get(o);i=i.unionWith(a.view.Ia)}return i}}async function J$(t,e){const n=U(t),r=await Vh(n.localStore,e.query,!0),i=e.view.fa(r);return n.isPrimaryClient&&o_(n,e.targetId,i.Va),i}async function Z$(t,e){const n=U(t);return VC(n.localStore,e).then(r=>Zr(n,r))}async function eB(t,e,n,r){const i=U(t),s=await function(a,l){const u=U(a),c=U(u.mutationQueue);return u.persistence.runTransaction("Lookup mutation documents","readonly",h=>c.vn(h,l).next(f=>f?u.localDocuments.getDocuments(h,f):R.resolve(null)))}(i.localStore,e);s!==null?(n==="pending"?await Ua(i.remoteStore):n==="acknowledged"||n==="rejected"?(Wv(i,e,r||null),qv(i,e),function(a,l){U(U(a).mutationQueue).Mn(l)}(i.localStore,e)):B(),await Zr(i,s)):D("SyncEngine","Cannot apply mutation batch with id: "+e)}async function tB(t,e){const n=U(t);if(Hf(n),Hv(n),e===!0&&n.Oa!==!0){const r=n.sharedClientState.getAllActiveQueryTargets(),i=await zE(n,r.toArray());n.Oa=!0,await i_(n.remoteStore,!0);for(const s of i)Gf(n.remoteStore,s)}else if(e===!1&&n.Oa!==!1){const r=[];let i=Promise.resolve();n.Sa.forEach((s,o)=>{n.sharedClientState.isLocalQueryTarget(o)?r.push(o):i=i.then(()=>(Ia(n,o),ya(n.localStore,o,!0))),va(n.remoteStore,o)}),await i,await zE(n,r),function(o){const a=U(o);a.Ca.forEach((l,u)=>{va(a.remoteStore,u)}),a.va.mr(),a.Ca=new Map,a.Da=new Ie(F.comparator)}(n),n.Oa=!1,await i_(n.remoteStore,!1)}}async function zE(t,e,n){const r=U(t),i=[],s=[];for(const o of e){let a;const l=r.Sa.get(o);if(l&&l.length!==0){a=await _a(r.localStore,qt(l[0]));for(const u of l){const c=r.wa.get(u),h=await J$(r,c);h.snapshot&&s.push(h.snapshot)}}else{const u=await OC(r.localStore,o);a=await _a(r.localStore,u),await jv(r,JC(u),o,!1,a.resumeToken)}i.push(a)}return r.ya.u_(s),i}function JC(t){return UP(t.path,t.collectionGroup,t.orderBy,t.filters,t.limit,"F",t.startAt,t.endAt)}function nB(t){return function(n){return U(U(n).persistence).Bi()}(U(t).localStore)}async function rB(t,e,n,r){const i=U(t);if(i.Oa)return void D("SyncEngine","Ignoring unexpected query state notification.");const s=i.Sa.get(e);if(s&&s.length>0)switch(n){case"current":case"not-current":{const o=await VC(i.localStore,BP(s[0])),a=Ec.createSynthesizedRemoteEventForCurrentChange(e,n==="current",rt.EMPTY_BYTE_STRING);await Zr(i,o,a);break}case"rejected":await ya(i.localStore,e,!0),Ia(i,e,r);break;default:B()}}async function iB(t,e,n){const r=Hf(t);if(r.Oa){for(const i of e){if(r.Sa.has(i)&&r.sharedClientState.isActiveQueryTarget(i)){D("SyncEngine","Adding an already active target "+i);continue}const s=await OC(r.localStore,i),o=await _a(r.localStore,s);await jv(r,JC(s),o.targetId,!1,o.resumeToken),Gf(r.remoteStore,o)}for(const i of n)r.Sa.has(i)&&await ya(r.localStore,i,!1).then(()=>{va(r.remoteStore,i),Ia(r,i)}).catch(Xi)}}function Hf(t){const e=U(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=YC.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=X$.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=W$.bind(null,e),e.ya.u_=N$.bind(null,e.eventManager),e.ya.La=O$.bind(null,e.eventManager),e}function Hv(t){const e=U(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=G$.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=H$.bind(null,e),e}function sB(t,e,n){const r=U(t);(async function(s,o,a){try{const l=await o.getMetadata();if(await function(p,w){const v=U(p),E=Qe(w.createTime);return v.persistence.runTransaction("hasNewerBundle","readonly",_=>v.$r.getBundleMetadata(_,w.id)).then(_=>!!_&&_.createTime.compareTo(E)>=0)}(s.localStore,l))return await o.close(),a._completeWith(function(p){return{taskState:"Success",documentsLoaded:p.totalDocuments,bytesLoaded:p.totalBytes,totalDocuments:p.totalDocuments,totalBytes:p.totalBytes}}(l)),Promise.resolve(new Set);a._updateProgress(WC(l));const u=new L$(l,s.localStore,o.serializer);let c=await o.Ba();for(;c;){const f=await u.sa(c);f&&a._updateProgress(f),c=await o.Ba()}const h=await u.complete();return await Zr(s,h.aa,void 0),await function(p,w){const v=U(p);return v.persistence.runTransaction("Save bundle","readwrite",E=>v.$r.saveBundleMetadata(E,w))}(s.localStore,l),a._completeWith(h.progress),Promise.resolve(h._a)}catch(l){return Hn("SyncEngine",`Loading bundle failed with ${l}`),a._failWith(l),Promise.resolve(new Set)}})(r,e,n).then(i=>{r.sharedClientState.notifyBundleLoaded(i)})}class a_{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Sc(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return bC(this.persistence,new kC,e.initialUser,this.serializer)}createPersistence(e){return new CC(Wf.Hr,this.serializer)}createSharedClientState(e){return new MC}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class ZC extends a_{constructor(e,n,r){super(),this.ka=e,this.cacheSizeBytes=n,this.forceOwnership=r,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.ka.initialize(this,e),await Hv(this.ka.syncEngine),await Ua(this.ka.remoteStore),await this.persistence.fi(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}createLocalStore(e){return bC(this.persistence,new kC,e.initialUser,this.serializer)}createGarbageCollectionScheduler(e,n){const r=this.persistence.referenceDelegate.garbageCollector;return new W4(r,e.asyncQueue,n)}createIndexBackfillerScheduler(e,n){const r=new CU(n,this.persistence);return new PU(e.asyncQueue,r)}createPersistence(e){const n=xv(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?Yt.withCacheSize(this.cacheSizeBytes):Yt.DEFAULT;return new bv(this.synchronizeTabs,n,e.clientId,r,e.asyncQueue,FC(),$d(),this.serializer,this.sharedClientState,!!this.forceOwnership)}createSharedClientState(e){return new MC}}class oB extends ZC{constructor(e,n){super(e,n,!1),this.ka=e,this.cacheSizeBytes=n,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const n=this.ka.syncEngine;this.sharedClientState instanceof pm&&(this.sharedClientState.syncEngine={Zs:eB.bind(null,n),Xs:rB.bind(null,n),eo:iB.bind(null,n),Bi:nB.bind(null,n),Ys:Z$.bind(null,n)},await this.sharedClientState.start()),await this.persistence.fi(async r=>{await tB(this.ka.syncEngine,r),this.gcScheduler&&(r&&!this.gcScheduler.started?this.gcScheduler.start():r||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(r&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():r||this.indexBackfillerScheduler.stop())})}createSharedClientState(e){const n=FC();if(!pm.D(n))throw new x(k.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const r=xv(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new pm(n,e.asyncQueue,r,e.clientId,e.initialUser)}}class Kv{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>BE(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Y$.bind(null,this.syncEngine),await i_(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new D$}()}createDatastore(e){const n=Sc(e.databaseInfo.databaseId),r=function(s){return new g$(s)}(e.databaseInfo);return function(s,o,a,l){return new v$(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new I$(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>BE(this.syncEngine,n,0),function(){return LE.D()?new LE:new f$}())}createSyncEngine(e,n){return function(i,s,o,a,l,u,c){const h=new U$(i,s,o,a,l,u);return c&&(h.Oa=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e;await async function(r){const i=U(r);D("RemoteStore","RemoteStore shutting down."),i.v_.add(5),await Fa(i),i.M_.shutdown(),i.x_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jE(t,e=10240){let n=0;return{async read(){if(n<t.byteLength){const r={value:t.slice(n,n+e),done:!1};return n+=e,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Kf{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.qa(this.observer.next,e)}error(e){this.observer.error?this.qa(this.observer.error,e):Ke("Uncaught Error in snapshot listener:",e.toString())}Qa(){this.muted=!0}qa(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aB{constructor(e,n){this.Ka=e,this.serializer=n,this.metadata=new ct,this.buffer=new Uint8Array,this.$a=function(){return new TextDecoder("utf-8")}(),this.Ua().then(r=>{r&&r.ra()?this.metadata.resolve(r.na.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(r==null?void 0:r.na)}`))},r=>this.metadata.reject(r))}close(){return this.Ka.cancel()}async getMetadata(){return this.metadata.promise}async Ba(){return await this.getMetadata(),this.Ua()}async Ua(){const e=await this.Wa();if(e===null)return null;const n=this.$a.decode(e),r=Number(n);isNaN(r)&&this.Ga(`length string (${n}) is not valid number`);const i=await this.za(r);return new V$(JSON.parse(i),e.length+r)}ja(){return this.buffer.findIndex(e=>e==="{".charCodeAt(0))}async Wa(){for(;this.ja()<0&&!await this.Ha(););if(this.buffer.length===0)return null;const e=this.ja();e<0&&this.Ga("Reached the end of bundle when a length string is expected.");const n=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),n}async za(e){for(;this.buffer.length<e;)await this.Ha()&&this.Ga("Reached the end of bundle when more is expected.");const n=this.$a.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),n}Ga(e){throw this.Ka.cancel(),new Error(`Invalid bundle format: ${e}`)}async Ha(){const e=await this.Ka.read();if(!e.done){const n=new Uint8Array(this.buffer.length+e.value.length);n.set(this.buffer),n.set(e.value,this.buffer.length),this.buffer=n}return e.done}}/**
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
 */class lB{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new x(k.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;const n=await async function(i,s){const o=U(i),a={documents:s.map(h=>Uu(o.serializer,h))},l=await o.vo("BatchGetDocuments",o.serializer.databaseId,se.emptyPath(),a,s.length),u=new Map;l.forEach(h=>{const f=A4(o.serializer,h);u.set(f.key.toString(),f)});const c=[];return s.forEach(h=>{const f=u.get(h.toString());W(!!f),c.push(f)}),c}(this.datastore,e);return n.forEach(r=>this.recordVersion(r)),n}set(e,n){this.write(n.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,n){try{this.write(n.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastTransactionError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new Ma(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;const e=this.readVersions;this.mutations.forEach(n=>{e.delete(n.key.toString())}),e.forEach((n,r)=>{const i=F.fromPath(r);this.mutations.push(new wv(i,this.precondition(i)))}),await async function(r,i){const s=U(r),o={writes:i.map(a=>$u(s.serializer,a))};await s.So("Commit",s.serializer.databaseId,se.emptyPath(),o)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let n;if(e.isFoundDocument())n=e.version;else{if(!e.isNoDocument())throw B();n=H.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!n.isEqual(r))throw new x(k.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),n)}precondition(e){const n=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&n?n.isEqual(H.min())?xe.exists(!1):xe.updateTime(n):xe.none()}preconditionForUpdate(e){const n=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&n){if(n.isEqual(H.min()))throw new x(k.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return xe.updateTime(n)}return xe.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
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
 */class uB{constructor(e,n,r,i,s){this.asyncQueue=e,this.datastore=n,this.options=r,this.updateFunction=i,this.deferred=s,this.Ja=r.maxAttempts,this.jo=new Ov(this.asyncQueue,"transaction_retry")}Ya(){this.Ja-=1,this.Za()}Za(){this.jo.qo(async()=>{const e=new lB(this.datastore),n=this.Xa(e);n&&n.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(i=>{this.eu(i)}))}).catch(r=>{this.eu(r)})})}Xa(e){try{const n=this.updateFunction(e);return!_c(n)&&n.catch&&n.then?n:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(n){return this.deferred.reject(n),null}}eu(e){this.Ja>0&&this.tu(e)?(this.Ja-=1,this.asyncQueue.enqueueAndForget(()=>(this.Za(),Promise.resolve()))):this.deferred.reject(e)}tu(e){if(e.name==="FirebaseError"){const n=e.code;return n==="aborted"||n==="failed-precondition"||n==="already-exists"||!tC(n)}return!1}}/**
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
 */class cB{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=ot.UNAUTHENTICATED,this.clientId=_P.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{D("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(D("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new x(k.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ct;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Ba(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Bd(t,e){t.asyncQueue.verifyOperationInProgress(),D("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await xC(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function l_(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Qv(t);D("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>ME(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>ME(e.remoteStore,i)),t._onlineComponents=e}function ek(t){return t.name==="FirebaseError"?t.code===k.FAILED_PRECONDITION||t.code===k.UNIMPLEMENTED:!(typeof DOMException!="undefined"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function Qv(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){D("FirestoreClient","Using user provided OfflineComponentProvider");try{await Bd(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!ek(n))throw n;Hn("Error using user provided cache. Falling back to memory cache: "+n),await Bd(t,new a_)}}else D("FirestoreClient","Using default OfflineComponentProvider"),await Bd(t,new a_);return t._offlineComponents}async function Qf(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(D("FirestoreClient","Using user provided OnlineComponentProvider"),await l_(t,t._uninitializedComponentsProvider._online)):(D("FirestoreClient","Using default OnlineComponentProvider"),await l_(t,new Kv))),t._onlineComponents}function tk(t){return Qv(t).then(e=>e.persistence)}function Yv(t){return Qv(t).then(e=>e.localStore)}function nk(t){return Qf(t).then(e=>e.remoteStore)}function Xv(t){return Qf(t).then(e=>e.syncEngine)}function dB(t){return Qf(t).then(e=>e.datastore)}async function Ea(t){const e=await Qf(t),n=e.eventManager;return n.onListen=$$.bind(null,e.syncEngine),n.onUnlisten=z$.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=B$.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=j$.bind(null,e.syncEngine),n}function hB(t){return t.asyncQueue.enqueue(async()=>{const e=await tk(t),n=await nk(t);return e.setNetworkEnabled(!0),function(i){const s=U(i);return s.v_.delete(0),Rc(s)}(n)})}function fB(t){return t.asyncQueue.enqueue(async()=>{const e=await tk(t),n=await nk(t);return e.setNetworkEnabled(!1),async function(i){const s=U(i);s.v_.add(0),await Fa(s),s.x_.set("Offline")}(n)})}function pB(t,e){const n=new ct;return t.asyncQueue.enqueueAndForget(async()=>async function(i,s,o){try{const a=await function(u,c){const h=U(u);return h.persistence.runTransaction("read document","readonly",f=>h.localDocuments.getDocument(f,c))}(i,s);a.isFoundDocument()?o.resolve(a):a.isNoDocument()?o.resolve(null):o.reject(new x(k.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(a){const l=Ba(a,`Failed to get document '${s} from cache`);o.reject(l)}}(await Yv(t),e,n)),n.promise}function rk(t,e,n={}){const r=new ct;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,u){const c=new Kf({next:f=>{o.enqueueAndForget(()=>$v(s,h));const p=f.docs.has(a);!p&&f.fromCache?u.reject(new x(k.UNAVAILABLE,"Failed to get document because the client is offline.")):p&&f.fromCache&&l&&l.source==="server"?u.reject(new x(k.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(f)},error:f=>u.reject(f)}),h=new zv(Va(a.path),c,{includeMetadataChanges:!0,ta:!0});return Uv(s,h)}(await Ea(t),t.asyncQueue,e,n,r)),r.promise}function mB(t,e){const n=new ct;return t.asyncQueue.enqueueAndForget(async()=>async function(i,s,o){try{const a=await Vh(i,s,!0),l=new KC(s,a.hs),u=l.Ta(a.documents),c=l.applyChanges(u,!1);o.resolve(c.snapshot)}catch(a){const l=Ba(a,`Failed to execute query '${s} against cache`);o.reject(l)}}(await Yv(t),e,n)),n.promise}function ik(t,e,n={}){const r=new ct;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,u){const c=new Kf({next:f=>{o.enqueueAndForget(()=>$v(s,h)),f.fromCache&&l.source==="server"?u.reject(new x(k.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(f)},error:f=>u.reject(f)}),h=new zv(a,c,{includeMetadataChanges:!0,ta:!0});return Uv(s,h)}(await Ea(t),t.asyncQueue,e,n,r)),r.promise}function gB(t,e){const n=new Kf(e);return t.asyncQueue.enqueueAndForget(async()=>function(i,s){U(i).W_.add(s),s.next()}(await Ea(t),n)),()=>{n.Qa(),t.asyncQueue.enqueueAndForget(async()=>function(i,s){U(i).W_.delete(s)}(await Ea(t),n))}}function _B(t,e,n,r){const i=function(o,a){let l;return l=typeof o=="string"?rC().encode(o):o,function(c,h){return new aB(c,h)}(function(c,h){if(c instanceof Uint8Array)return jE(c,h);if(c instanceof ArrayBuffer)return jE(new Uint8Array(c),h);if(c instanceof ReadableStream)return c.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(l),a)}(n,Sc(e));t.asyncQueue.enqueueAndForget(async()=>{sB(await Xv(t),i,r)})}function yB(t,e){return t.asyncQueue.enqueue(async()=>function(r,i){const s=U(r);return s.persistence.runTransaction("Get named query","readonly",o=>s.$r.getNamedQuery(o,i))}(await Yv(t),e))}/**
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
 */function sk(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qE=new Map;/**
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
 */function Jv(t,e,n){if(!n)throw new x(k.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function ok(t,e,n,r){if(e===!0&&r===!0)throw new x(k.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function WE(t){if(!F.isDocumentKey(t))throw new x(k.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function GE(t){if(F.isDocumentKey(t))throw new x(k.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Yf(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":B()}function fe(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new x(k.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Yf(t);throw new x(k.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function ak(t,e){if(e<=0)throw new x(k.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HE{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new x(k.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new x(k.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}ok("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=sk((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new x(k.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new x(k.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new x(k.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ac{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new HE({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new x(k.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new x(k.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new HE(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new gU;switch(r.type){case"firstParty":return new wU(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new x(k.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=qE.get(n);r&&(D("ComponentProvider","Removing Datastore"),qE.delete(n),r.terminate())}(this),Promise.resolve()}}function vB(t,e,n,r={}){var i;const s=(t=fe(t,Ac))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Hn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=ot.MOCK_USER;else{a=X1(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new x(k.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new ot(u)}t._authCredentials=new _U(new gP(a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new St(this.firestore,e,this._query)}}class Pe{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new _r(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Pe(this.firestore,e,this._key)}}class _r extends St{constructor(e,n,r){super(e,n,Va(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Pe(this.firestore,null,new F(e))}withConverter(e){return new _r(this.firestore,e,this._path)}}function lk(t,e,...n){if(t=j(t),Jv("collection","path",e),t instanceof Ac){const r=se.fromString(e,...n);return GE(r),new _r(t,null,r)}{if(!(t instanceof Pe||t instanceof _r))throw new x(k.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(se.fromString(e,...n));return GE(r),new _r(t.firestore,null,r)}}function wB(t,e){if(t=fe(t,Ac),Jv("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new x(k.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new St(t,null,function(r){return new Xr(se.emptyPath(),r)}(e))}function Bu(t,e,...n){if(t=j(t),arguments.length===1&&(e=_P.newId()),Jv("doc","path",e),t instanceof Ac){const r=se.fromString(e,...n);return WE(r),new Pe(t,null,new F(r))}{if(!(t instanceof Pe||t instanceof _r))throw new x(k.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(se.fromString(e,...n));return WE(r),new Pe(t.firestore,t instanceof _r?t.converter:null,new F(r))}}function uk(t,e){return t=j(t),e=j(e),(t instanceof Pe||t instanceof _r)&&(e instanceof Pe||e instanceof _r)&&t.firestore===e.firestore&&t.path===e.path&&t.converter===e.converter}function ck(t,e){return t=j(t),e=j(e),t instanceof St&&e instanceof St&&t.firestore===e.firestore&&vc(t._query,e._query)&&t.converter===e.converter}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IB{constructor(){this.nu=Promise.resolve(),this.ru=[],this.iu=!1,this.su=[],this.ou=null,this._u=!1,this.au=!1,this.uu=[],this.jo=new Ov(this,"async_queue_retry"),this.cu=()=>{const n=$d();n&&D("AsyncQueue","Visibility state changed to "+n.visibilityState),this.jo.Ko()};const e=$d();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.cu)}get isShuttingDown(){return this.iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.lu(),this.hu(e)}enterRestrictedMode(e){if(!this.iu){this.iu=!0,this.au=e||!1;const n=$d();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.cu)}}enqueue(e){if(this.lu(),this.iu)return new Promise(()=>{});const n=new ct;return this.hu(()=>this.iu&&this.au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.ru.push(e),this.Pu()))}async Pu(){if(this.ru.length!==0){try{await this.ru[0](),this.ru.shift(),this.jo.reset()}catch(e){if(!Ji(e))throw e;D("AsyncQueue","Operation failed with retryable error: "+e)}this.ru.length>0&&this.jo.qo(()=>this.Pu())}}hu(e){const n=this.nu.then(()=>(this._u=!0,e().catch(r=>{this.ou=r,this._u=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw Ke("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this._u=!1,r))));return this.nu=n,n}enqueueAfterDelay(e,n,r){this.lu(),this.uu.indexOf(e)>-1&&(n=0);const i=Fv.createAndSchedule(this,e,n,r,s=>this.Iu(s));return this.su.push(i),i}lu(){this.ou&&B()}verifyOperationInProgress(){}async Tu(){let e;do e=this.nu,await e;while(e!==this.nu)}Eu(e){for(const n of this.su)if(n.timerId===e)return!0;return!1}du(e){return this.Tu().then(()=>{this.su.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.su)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tu()})}Au(e){this.uu.push(e)}Iu(e){const n=this.su.indexOf(e);this.su.splice(n,1)}}function u_(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class EB{constructor(){this._progressObserver={},this._taskCompletionResolver=new ct,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,n,r){this._progressObserver={next:e,error:n,complete:r}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,n){return this._taskCompletionResolver.promise.then(e,n)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TB=-1;class je extends Ac{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new IB}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||dk(this),this._firestoreClient.terminate()}}function pt(t){return t._firestoreClient||dk(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function dk(t){var e,n,r;const i=t._freezeSettings(),s=function(a,l,u,c){return new QU(a,l,u,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,sk(c.experimentalLongPollingOptions),c.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new cB(t._authCredentials,t._appCheckCredentials,t._queue,s),((n=i.localCache)===null||n===void 0?void 0:n._offlineComponentProvider)&&((r=i.localCache)===null||r===void 0?void 0:r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}function SB(t,e){fk(t=fe(t,je));const n=pt(t);if(n._uninitializedComponentsProvider)throw new x(k.FAILED_PRECONDITION,"SDK cache is already specified.");Hn("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const r=t._freezeSettings(),i=new Kv;return hk(n,i,new ZC(i,r.cacheSizeBytes,e==null?void 0:e.forceOwnership))}function RB(t){fk(t=fe(t,je));const e=pt(t);if(e._uninitializedComponentsProvider)throw new x(k.FAILED_PRECONDITION,"SDK cache is already specified.");Hn("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const n=t._freezeSettings(),r=new Kv;return hk(e,r,new oB(r,n.cacheSizeBytes))}function hk(t,e,n){const r=new ct;return t.asyncQueue.enqueue(async()=>{try{await Bd(t,n),await l_(t,e),r.resolve()}catch(i){const s=i;if(!ek(s))throw s;Hn("Error enabling indexeddb cache. Falling back to memory cache: "+s),r.reject(s)}}).then(()=>r.promise)}function AB(t){if(t._initialized&&!t._terminated)throw new x(k.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new ct;return t._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(r){if(!An.D())return Promise.resolve();const i=r+"main";await An.delete(i)}(xv(t._databaseId,t._persistenceKey)),e.resolve()}catch(n){e.reject(n)}}),e.promise}function PB(t){return function(n){const r=new ct;return n.asyncQueue.enqueueAndForget(async()=>K$(await Xv(n),r)),r.promise}(pt(t=fe(t,je)))}function CB(t){return hB(pt(t=fe(t,je)))}function kB(t){return fB(pt(t=fe(t,je)))}function bB(t,e){const n=pt(t=fe(t,je)),r=new EB;return _B(n,t._databaseId,e,r),r}function xB(t,e){return yB(pt(t=fe(t,je)),e).then(n=>n?new St(t,null,n.query):null)}function fk(t){if(t._initialized||t._terminated)throw new x(k.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ir(rt.fromBase64String(e))}catch(n){throw new x(k.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Ir(rt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new x(k.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new be(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xs{constructor(e){this._methodName=e}}/**
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
 */class Xf{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new x(k.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new x(k.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return te(this._lat,e._lat)||te(this._long,e._long)}}/**
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
 */const DB=/^__.*__$/;class NB{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Jr(e,this.data,this.fieldMask,n,this.fieldTransforms):new La(e,this.data,n,this.fieldTransforms)}}class pk{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Jr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function mk(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw B()}}class Jf{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Ru(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Vu(){return this.settings.Vu}mu(e){return new Jf(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}fu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.mu({path:r,gu:!1});return i.pu(e),i}yu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.mu({path:r,gu:!1});return i.Ru(),i}wu(e){return this.mu({path:void 0,gu:!0})}Su(e){return Uh(e,this.settings.methodName,this.settings.bu||!1,this.path,this.settings.Du)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Ru(){if(this.path)for(let e=0;e<this.path.length;e++)this.pu(this.path.get(e))}pu(e){if(e.length===0)throw this.Su("Document fields must not be empty");if(mk(this.Vu)&&DB.test(e))throw this.Su('Document fields cannot begin and end with "__"')}}class OB{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Sc(e)}Cu(e,n,r,i=!1){return new Jf({Vu:e,methodName:n,Du:r,path:be.emptyPath(),gu:!1,bu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Js(t){const e=t._freezeSettings(),n=Sc(t._databaseId);return new OB(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Zf(t,e,n,r,i,s={}){const o=t.Cu(s.merge||s.mergeFields?2:0,e,n,i);sw("Data must be an object, but it was:",o,r);const a=yk(r,o);let l,u;if(s.merge)l=new en(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const h of s.mergeFields){const f=c_(e,h,n);if(!o.contains(f))throw new x(k.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);wk(c,f)||c.push(f)}l=new en(c),u=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,u=o.fieldTransforms;return new NB(new vt(a),l,u)}class Pc extends Xs{_toFieldTransform(e){if(e.Vu!==2)throw e.Vu===1?e.Su(`${this._methodName}() can only appear at the top level of your update data`):e.Su(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Pc}}function gk(t,e,n){return new Jf({Vu:3,Du:e.settings.Du,methodName:t._methodName,gu:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class Zv extends Xs{_toFieldTransform(e){return new Ic(e.path,new pa)}isEqual(e){return e instanceof Zv}}class ew extends Xs{constructor(e,n){super(e),this.vu=n}_toFieldTransform(e){const n=gk(this,e,!0),r=this.vu.map(s=>Zs(s,n)),i=new Fs(r);return new Ic(e.path,i)}isEqual(e){return e instanceof ew&&gu(this.vu,e.vu)}}class tw extends Xs{constructor(e,n){super(e),this.vu=n}_toFieldTransform(e){const n=gk(this,e,!0),r=this.vu.map(s=>Zs(s,n)),i=new Us(r);return new Ic(e.path,i)}isEqual(e){return e instanceof tw&&gu(this.vu,e.vu)}}class nw extends Xs{constructor(e,n){super(e),this.Fu=n}_toFieldTransform(e){const n=new ma(e.serializer,KP(e.serializer,this.Fu));return new Ic(e.path,n)}isEqual(e){return e instanceof nw&&this.Fu===e.Fu}}function rw(t,e,n,r){const i=t.Cu(1,e,n);sw("Data must be an object, but it was:",i,r);const s=[],o=vt.empty();Ys(r,(l,u)=>{const c=ow(e,l,n);u=j(u);const h=i.yu(c);if(u instanceof Pc)s.push(c);else{const f=Zs(u,h);f!=null&&(s.push(c),o.set(c,f))}});const a=new en(s);return new pk(o,a,i.fieldTransforms)}function iw(t,e,n,r,i,s){const o=t.Cu(1,e,n),a=[c_(e,r,n)],l=[i];if(s.length%2!=0)throw new x(k.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let f=0;f<s.length;f+=2)a.push(c_(e,s[f])),l.push(s[f+1]);const u=[],c=vt.empty();for(let f=a.length-1;f>=0;--f)if(!wk(u,a[f])){const p=a[f];let w=l[f];w=j(w);const v=o.yu(p);if(w instanceof Pc)u.push(p);else{const E=Zs(w,v);E!=null&&(u.push(p),c.set(p,E))}}const h=new en(u);return new pk(c,h,o.fieldTransforms)}function _k(t,e,n,r=!1){return Zs(n,t.Cu(r?4:3,e))}function Zs(t,e){if(vk(t=j(t)))return sw("Unsupported field value:",e,t),yk(t,e);if(t instanceof Xs)return function(r,i){if(!mk(i.Vu))throw i.Su(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Su(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.gu&&e.Vu!==4)throw e.Su("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let l=Zs(a,i.wu(o));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=j(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return KP(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=De.fromDate(r);return{timestampValue:ga(i.serializer,s)}}if(r instanceof De){const s=new De(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ga(i.serializer,s)}}if(r instanceof Xf)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ir)return{bytesValue:oC(i.serializer,r._byteString)};if(r instanceof Pe){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Su(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Rv(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.Su(`Unsupported field value: ${Yf(r)}`)}(t,e)}function yk(t,e){const n={};return CP(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ys(t,(r,i)=>{const s=Zs(i,e.fu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function vk(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof De||t instanceof Xf||t instanceof Ir||t instanceof Pe||t instanceof Xs)}function sw(t,e,n){if(!vk(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Yf(n);throw r==="an object"?e.Su(t+" a custom object"):e.Su(t+" "+r)}}function c_(t,e,n){if((e=j(e))instanceof ji)return e._internalPath;if(typeof e=="string")return ow(t,e);throw Uh("Field path arguments must be of type string or ",t,!1,void 0,n)}const VB=new RegExp("[~\\*/\\[\\]]");function ow(t,e,n){if(e.search(VB)>=0)throw Uh(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new ji(...e.split("."))._internalPath}catch{throw Uh(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Uh(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new x(k.INVALID_ARGUMENT,a+t+l)}function wk(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zu{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Pe(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new LB(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(ep("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class LB extends zu{data(){return super.data()}}function ep(t,e){return typeof e=="string"?ow(t,e):e instanceof ji?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ik(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new x(k.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class aw{}class Cc extends aw{}function ui(t,e,...n){let r=[];e instanceof aw&&r.push(e),r=r.concat(n),function(s){const o=s.filter(l=>l instanceof lw).length,a=s.filter(l=>l instanceof tp).length;if(o>1||o>0&&a>0)throw new x(k.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class tp extends Cc{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new tp(e,n,r)}_apply(e){const n=this._parse(e);return Tk(e._query,n),new St(e.firestore,e.converter,Qg(e._query,n))}_parse(e){const n=Js(e.firestore);return function(s,o,a,l,u,c,h){let f;if(u.isKeyField()){if(c==="array-contains"||c==="array-contains-any")throw new x(k.INVALID_ARGUMENT,`Invalid Query. You can't perform '${c}' queries on documentId().`);if(c==="in"||c==="not-in"){QE(h,c);const p=[];for(const w of h)p.push(KE(l,s,w));f={arrayValue:{values:p}}}else f=KE(l,s,h)}else c!=="in"&&c!=="not-in"&&c!=="array-contains-any"||QE(h,c),f=_k(a,o,h,c==="in"||c==="not-in");return oe.create(u,c,f)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function MB(t,e,n){const r=e,i=ep("where",t);return tp._create(i,r,n)}class lw extends aw{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new lw(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:pe.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const l of a)Tk(o,l),o=Qg(o,l)}(e._query,n),new St(e.firestore,e.converter,Qg(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class uw extends Cc{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new uw(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new x(k.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new x(k.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Fu(s,o)}(e._query,this._field,this._direction);return new St(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new Xr(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function FB(t,e="asc"){const n=e,r=ep("orderBy",t);return uw._create(r,n)}class np extends Cc{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new np(e,n,r)}_apply(e){return new St(e.firestore,e.converter,xh(e._query,this._limit,this._limitType))}}function UB(t){return ak("limit",t),np._create("limit",t,"F")}function $B(t){return ak("limitToLast",t),np._create("limitToLast",t,"L")}class rp extends Cc{constructor(e,n,r){super(),this.type=e,this._docOrFields=n,this._inclusive=r}static _create(e,n,r){return new rp(e,n,r)}_apply(e){const n=Ek(e,this.type,this._docOrFields,this._inclusive);return new St(e.firestore,e.converter,function(i,s){return new Xr(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,s,i.endAt)}(e._query,n))}}function BB(...t){return rp._create("startAt",t,!0)}function zB(...t){return rp._create("startAfter",t,!1)}class ip extends Cc{constructor(e,n,r){super(),this.type=e,this._docOrFields=n,this._inclusive=r}static _create(e,n,r){return new ip(e,n,r)}_apply(e){const n=Ek(e,this.type,this._docOrFields,this._inclusive);return new St(e.firestore,e.converter,function(i,s){return new Xr(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,i.startAt,s)}(e._query,n))}}function jB(...t){return ip._create("endBefore",t,!1)}function qB(...t){return ip._create("endAt",t,!0)}function Ek(t,e,n,r){if(n[0]=j(n[0]),n[0]instanceof zu)return function(s,o,a,l,u){if(!l)throw new x(k.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${a}().`);const c=[];for(const h of Ko(s))if(h.field.isKeyField())c.push(Ls(o,l.key));else{const f=l.data.field(h.field);if($f(f))throw new x(k.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+h.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(f===null){const p=h.field.canonicalString();throw new x(k.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${p}' (used as the orderBy) does not exist.`)}c.push(f)}return new Bi(c,u)}(t._query,t.firestore._databaseId,e,n[0]._document,r);{const i=Js(t.firestore);return function(o,a,l,u,c,h){const f=o.explicitOrderBy;if(c.length>f.length)throw new x(k.INVALID_ARGUMENT,`Too many arguments provided to ${u}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const p=[];for(let w=0;w<c.length;w++){const v=c[w];if(f[w].field.isKeyField()){if(typeof v!="string")throw new x(k.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${u}(), but got a ${typeof v}`);if(!yv(o)&&v.indexOf("/")!==-1)throw new x(k.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${u}() must be a plain document ID, but '${v}' contains a slash.`);const E=o.path.child(se.fromString(v));if(!F.isDocumentKey(E))throw new x(k.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${u}() must result in a valid document path, but '${E}' is not because it contains an odd number of segments.`);const _=new F(E);p.push(Ls(a,_))}else{const E=_k(l,u,v);p.push(E)}}return new Bi(p,h)}(t._query,t.firestore._databaseId,i,e,n,r)}}function KE(t,e,n){if(typeof(n=j(n))=="string"){if(n==="")throw new x(k.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!yv(e)&&n.indexOf("/")!==-1)throw new x(k.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(se.fromString(n));if(!F.isDocumentKey(r))throw new x(k.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Ls(t,new F(r))}if(n instanceof Pe)return Ls(t,n._key);throw new x(k.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Yf(n)}.`)}function QE(t,e){if(!Array.isArray(t)||t.length===0)throw new x(k.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Tk(t,e){const n=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new x(k.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new x(k.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class cw{convertValue(e,n="none"){switch(Vs(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ue(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Fi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw B()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Ys(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new Xf(Ue(e.latitude),Ue(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=gv(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Vu(e));default:return null}}convertTimestamp(e){const n=Mi(e);return new De(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=se.fromString(e);W(_C(r));const i=new Ui(r.get(1),r.get(3)),s=new F(r.popFirst(5));return i.isEqual(n)||Ke(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sp(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class WB extends cw{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ir(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Pe(this.firestore,null,n)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ys{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Gr extends zu{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Hl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(ep("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Hl extends Gr{data(e={}){return super.data(e)}}class qi{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new ys(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Hl(this._firestore,this._userDataWriter,r.key,r,new ys(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new x(k.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const l=new Hl(i._firestore,i._userDataWriter,a.doc.key,a.doc,new ys(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const l=new Hl(i._firestore,i._userDataWriter,a.doc.key,a.doc,new ys(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let u=-1,c=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),c=o.indexOf(a.doc.key)),{type:GB(a.type),doc:l,oldIndex:u,newIndex:c}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function GB(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return B()}}function Sk(t,e){return t instanceof Gr&&e instanceof Gr?t._firestore===e._firestore&&t._key.isEqual(e._key)&&(t._document===null?e._document===null:t._document.isEqual(e._document))&&t._converter===e._converter:t instanceof qi&&e instanceof qi&&t._firestore===e._firestore&&ck(t.query,e.query)&&t.metadata.isEqual(e.metadata)&&t._snapshot.isEqual(e._snapshot)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HB(t){t=fe(t,Pe);const e=fe(t.firestore,je);return rk(pt(e),t._key).then(n=>dw(e,t,n))}class eo extends cw{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ir(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Pe(this.firestore,null,n)}}function KB(t){t=fe(t,Pe);const e=fe(t.firestore,je),n=pt(e),r=new eo(e);return pB(n,t._key).then(i=>new Gr(e,r,t._key,i,new ys(i!==null&&i.hasLocalMutations,!0),t.converter))}function QB(t){t=fe(t,Pe);const e=fe(t.firestore,je);return rk(pt(e),t._key,{source:"server"}).then(n=>dw(e,t,n))}function YB(t){t=fe(t,St);const e=fe(t.firestore,je),n=pt(e),r=new eo(e);return Ik(t._query),ik(n,t._query).then(i=>new qi(e,r,t,i))}function XB(t){t=fe(t,St);const e=fe(t.firestore,je),n=pt(e),r=new eo(e);return mB(n,t._query).then(i=>new qi(e,r,t,i))}function JB(t){t=fe(t,St);const e=fe(t.firestore,je),n=pt(e),r=new eo(e);return ik(n,t._query,{source:"server"}).then(i=>new qi(e,r,t,i))}function d_(t,e,n){t=fe(t,Pe);const r=fe(t.firestore,je),i=sp(t.converter,e,n);return kc(r,[Zf(Js(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,xe.none())])}function YE(t,e,n,...r){t=fe(t,Pe);const i=fe(t.firestore,je),s=Js(i);let o;return o=typeof(e=j(e))=="string"||e instanceof ji?iw(s,"updateDoc",t._key,e,n,r):rw(s,"updateDoc",t._key,e),kc(i,[o.toMutation(t._key,xe.exists(!0))])}function ZB(t){return kc(fe(t.firestore,je),[new Ma(t._key,xe.none())])}function ez(t,e){const n=fe(t.firestore,je),r=Bu(t),i=sp(t.converter,e);return kc(n,[Zf(Js(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,xe.exists(!1))]).then(()=>r)}function Rk(t,...e){var n,r,i;t=j(t);let s={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||u_(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(u_(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let l,u,c;if(t instanceof Pe)u=fe(t.firestore,je),c=Va(t._key.path),l={next:h=>{e[o]&&e[o](dw(u,t,h))},error:e[o+1],complete:e[o+2]};else{const h=fe(t,St);u=fe(h.firestore,je),c=h._query;const f=new eo(u);l={next:p=>{e[o]&&e[o](new qi(u,f,h,p))},error:e[o+1],complete:e[o+2]},Ik(t._query)}return function(f,p,w,v){const E=new Kf(v),_=new zv(p,E,w);return f.asyncQueue.enqueueAndForget(async()=>Uv(await Ea(f),_)),()=>{E.Qa(),f.asyncQueue.enqueueAndForget(async()=>$v(await Ea(f),_))}}(pt(u),c,a,l)}function tz(t,e){return gB(pt(t=fe(t,je)),u_(e)?e:{next:e})}function kc(t,e){return function(r,i){const s=new ct;return r.asyncQueue.enqueueAndForget(async()=>q$(await Xv(r),i,s)),s.promise}(pt(t),e)}function dw(t,e,n){const r=n.docs.get(e._key),i=new eo(t);return new Gr(t,i,e._key,r,new ys(n.hasPendingWrites,n.fromCache),e.converter)}/**
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
 */const nz={maxAttempts:5};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rz{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=Js(e)}set(e,n,r){this._verifyNotCommitted();const i=_i(e,this._firestore),s=sp(i.converter,n,r),o=Zf(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,r);return this._mutations.push(o.toMutation(i._key,xe.none())),this}update(e,n,r,...i){this._verifyNotCommitted();const s=_i(e,this._firestore);let o;return o=typeof(n=j(n))=="string"||n instanceof ji?iw(this._dataReader,"WriteBatch.update",s._key,n,r,i):rw(this._dataReader,"WriteBatch.update",s._key,n),this._mutations.push(o.toMutation(s._key,xe.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=_i(e,this._firestore);return this._mutations=this._mutations.concat(new Ma(n._key,xe.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new x(k.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function _i(t,e){if((t=j(t)).firestore!==e)throw new x(k.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class iz extends class{constructor(n,r){this._firestore=n,this._transaction=r,this._dataReader=Js(n)}get(n){const r=_i(n,this._firestore),i=new WB(this._firestore);return this._transaction.lookup([r._key]).then(s=>{if(!s||s.length!==1)return B();const o=s[0];if(o.isFoundDocument())return new zu(this._firestore,i,o.key,o,r.converter);if(o.isNoDocument())return new zu(this._firestore,i,r._key,null,r.converter);throw B()})}set(n,r,i){const s=_i(n,this._firestore),o=sp(s.converter,r,i),a=Zf(this._dataReader,"Transaction.set",s._key,o,s.converter!==null,i);return this._transaction.set(s._key,a),this}update(n,r,i,...s){const o=_i(n,this._firestore);let a;return a=typeof(r=j(r))=="string"||r instanceof ji?iw(this._dataReader,"Transaction.update",o._key,r,i,s):rw(this._dataReader,"Transaction.update",o._key,r),this._transaction.update(o._key,a),this}delete(n){const r=_i(n,this._firestore);return this._transaction.delete(r._key),this}}{constructor(e,n){super(e,n),this._firestore=e}get(e){const n=_i(e,this._firestore),r=new eo(this._firestore);return super.get(e).then(i=>new Gr(this._firestore,r,n._key,i._document,new ys(!1,!1),n.converter))}}function sz(t,e,n){t=fe(t,je);const r=Object.assign(Object.assign({},nz),n);return function(s){if(s.maxAttempts<1)throw new x(k.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(s,o,a){const l=new ct;return s.asyncQueue.enqueueAndForget(async()=>{const u=await dB(s);new uB(s.asyncQueue,u,a,o,l).Ya()}),l.promise}(pt(t),i=>e(new iz(t,i)),r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oz(){return new Pc("deleteField")}function Ak(){return new Zv("serverTimestamp")}function az(...t){return new ew("arrayUnion",t)}function lz(...t){return new tw("arrayRemove",t)}function uz(t){return new nw("increment",t)}(function(e,n=!0){(function(i){Oa=i})(Kr),jr(new Nn("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new je(new yU(r.getProvider("auth-internal")),new EU(r.getProvider("app-check-internal")),function(u,c){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new x(k.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ui(u.options.projectId,c)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),pn(qI,"4.5.1",e),pn(qI,"4.5.1","esm2017")})();const cz="@firebase/firestore-compat",dz="0.3.28";/**
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
 */function hw(t,e){if(e===void 0)return{merge:!1};if(e.mergeFields!==void 0&&e.merge!==void 0)throw new x("invalid-argument",`Invalid options passed to function ${t}(): You cannot specify both "merge" and "mergeFields".`);return e}/**
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
 */function XE(){if(typeof Uint8Array=="undefined")throw new x("unimplemented","Uint8Arrays are not available in this environment.")}function JE(){if(!HU())throw new x("unimplemented","Blobs are unavailable in Firestore in this environment.")}class ju{constructor(e){this._delegate=e}static fromBase64String(e){return JE(),new ju(Ir.fromBase64String(e))}static fromUint8Array(e){return XE(),new ju(Ir.fromUint8Array(e))}toBase64(){return JE(),this._delegate.toBase64()}toUint8Array(){return XE(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}/**
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
 */function h_(t){return hz(t,["next","error","complete"])}function hz(t,e){if(typeof t!="object"||t===null)return!1;const n=t;for(const r of e)if(r in n&&typeof n[r]=="function")return!0;return!1}/**
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
 */class fz{enableIndexedDbPersistence(e,n){return SB(e._delegate,{forceOwnership:n})}enableMultiTabIndexedDbPersistence(e){return RB(e._delegate)}clearIndexedDbPersistence(e){return AB(e._delegate)}}class Pk{constructor(e,n,r){this._delegate=n,this._persistenceProvider=r,this.INTERNAL={delete:()=>this.terminate()},e instanceof Ui||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const n=this._delegate._getSettings();!e.merge&&n.host!==e.host&&Hn("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},n),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,n,r={}){vB(this._delegate,e,n,r)}enableNetwork(){return CB(this._delegate)}disableNetwork(){return kB(this._delegate)}enablePersistence(e){let n=!1,r=!1;return e&&(n=!!e.synchronizeTabs,r=!!e.experimentalForceOwningTab,ok("synchronizeTabs",n,"experimentalForceOwningTab",r)),n?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,r)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return PB(this._delegate)}onSnapshotsInSync(e){return tz(this._delegate,e)}get app(){if(!this._appCompat)throw new x("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new Ta(this,lk(this._delegate,e))}catch(n){throw Ut(n,"collection()","Firestore.collection()")}}doc(e){try{return new Pn(this,Bu(this._delegate,e))}catch(n){throw Ut(n,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new Ft(this,wB(this._delegate,e))}catch(n){throw Ut(n,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return sz(this._delegate,n=>e(new Ck(this,n)))}batch(){return pt(this._delegate),new kk(new rz(this._delegate,e=>kc(this._delegate,e)))}loadBundle(e){return bB(this._delegate,e)}namedQuery(e){return xB(this._delegate,e).then(n=>n?new Ft(this,n):null)}}class op extends cw{constructor(e){super(),this.firestore=e}convertBytes(e){return new ju(new Ir(e))}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return Pn.forKey(n,this.firestore,null)}}function pz(t){pU(t)}class Ck{constructor(e,n){this._firestore=e,this._delegate=n,this._userDataWriter=new op(e)}get(e){const n=vs(e);return this._delegate.get(n).then(r=>new qu(this._firestore,new Gr(this._firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,n.converter)))}set(e,n,r){const i=vs(e);return r?(hw("Transaction.set",r),this._delegate.set(i,n,r)):this._delegate.set(i,n),this}update(e,n,r,...i){const s=vs(e);return arguments.length===2?this._delegate.update(s,n):this._delegate.update(s,n,r,...i),this}delete(e){const n=vs(e);return this._delegate.delete(n),this}}class kk{constructor(e){this._delegate=e}set(e,n,r){const i=vs(e);return r?(hw("WriteBatch.set",r),this._delegate.set(i,n,r)):this._delegate.set(i,n),this}update(e,n,r,...i){const s=vs(e);return arguments.length===2?this._delegate.update(s,n):this._delegate.update(s,n,r,...i),this}delete(e){const n=vs(e);return this._delegate.delete(n),this}commit(){return this._delegate.commit()}}class js{constructor(e,n,r){this._firestore=e,this._userDataWriter=n,this._delegate=r}fromFirestore(e,n){const r=new Hl(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new Wu(this._firestore,r),n!=null?n:{})}toFirestore(e,n){return n?this._delegate.toFirestore(e,n):this._delegate.toFirestore(e)}static getInstance(e,n){const r=js.INSTANCES;let i=r.get(e);i||(i=new WeakMap,r.set(e,i));let s=i.get(n);return s||(s=new js(e,new op(e),n),i.set(n,s)),s}}js.INSTANCES=new WeakMap;class Pn{constructor(e,n){this.firestore=e,this._delegate=n,this._userDataWriter=new op(e)}static forPath(e,n,r){if(e.length%2!==0)throw new x("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new Pn(n,new Pe(n._delegate,r,new F(e)))}static forKey(e,n,r){return new Pn(n,new Pe(n._delegate,r,e))}get id(){return this._delegate.id}get parent(){return new Ta(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new Ta(this.firestore,lk(this._delegate,e))}catch(n){throw Ut(n,"collection()","DocumentReference.collection()")}}isEqual(e){return e=j(e),e instanceof Pe?uk(this._delegate,e):!1}set(e,n){n=hw("DocumentReference.set",n);try{return n?d_(this._delegate,e,n):d_(this._delegate,e)}catch(r){throw Ut(r,"setDoc()","DocumentReference.set()")}}update(e,n,...r){try{return arguments.length===1?YE(this._delegate,e):YE(this._delegate,e,n,...r)}catch(i){throw Ut(i,"updateDoc()","DocumentReference.update()")}}delete(){return ZB(this._delegate)}onSnapshot(...e){const n=bk(e),r=xk(e,i=>new qu(this.firestore,new Gr(this.firestore._delegate,this._userDataWriter,i._key,i._document,i.metadata,this._delegate.converter)));return Rk(this._delegate,n,r)}get(e){let n;return(e==null?void 0:e.source)==="cache"?n=KB(this._delegate):(e==null?void 0:e.source)==="server"?n=QB(this._delegate):n=HB(this._delegate),n.then(r=>new qu(this.firestore,new Gr(this.firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,this._delegate.converter)))}withConverter(e){return new Pn(this.firestore,e?this._delegate.withConverter(js.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function Ut(t,e,n){return t.message=t.message.replace(e,n),t}function bk(t){for(const e of t)if(typeof e=="object"&&!h_(e))return e;return{}}function xk(t,e){var n,r;let i;return h_(t[0])?i=t[0]:h_(t[1])?i=t[1]:typeof t[0]=="function"?i={next:t[0],error:t[1],complete:t[2]}:i={next:t[1],error:t[2],complete:t[3]},{next:s=>{i.next&&i.next(e(s))},error:(n=i.error)===null||n===void 0?void 0:n.bind(i),complete:(r=i.complete)===null||r===void 0?void 0:r.bind(i)}}class qu{constructor(e,n){this._firestore=e,this._delegate=n}get ref(){return new Pn(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,n){return this._delegate.get(e,n)}isEqual(e){return Sk(this._delegate,e._delegate)}}class Wu extends qu{data(e){const n=this._delegate.data(e);return this._delegate._converter||mU(n!==void 0),n}}class Ft{constructor(e,n){this.firestore=e,this._delegate=n,this._userDataWriter=new op(e)}where(e,n,r){try{return new Ft(this.firestore,ui(this._delegate,MB(e,n,r)))}catch(i){throw Ut(i,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,n){try{return new Ft(this.firestore,ui(this._delegate,FB(e,n)))}catch(r){throw Ut(r,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new Ft(this.firestore,ui(this._delegate,UB(e)))}catch(n){throw Ut(n,"limit()","Query.limit()")}}limitToLast(e){try{return new Ft(this.firestore,ui(this._delegate,$B(e)))}catch(n){throw Ut(n,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new Ft(this.firestore,ui(this._delegate,BB(...e)))}catch(n){throw Ut(n,"startAt()","Query.startAt()")}}startAfter(...e){try{return new Ft(this.firestore,ui(this._delegate,zB(...e)))}catch(n){throw Ut(n,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new Ft(this.firestore,ui(this._delegate,jB(...e)))}catch(n){throw Ut(n,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new Ft(this.firestore,ui(this._delegate,qB(...e)))}catch(n){throw Ut(n,"endAt()","Query.endAt()")}}isEqual(e){return ck(this._delegate,e._delegate)}get(e){let n;return(e==null?void 0:e.source)==="cache"?n=XB(this._delegate):(e==null?void 0:e.source)==="server"?n=JB(this._delegate):n=YB(this._delegate),n.then(r=>new f_(this.firestore,new qi(this.firestore._delegate,this._userDataWriter,this._delegate,r._snapshot)))}onSnapshot(...e){const n=bk(e),r=xk(e,i=>new f_(this.firestore,new qi(this.firestore._delegate,this._userDataWriter,this._delegate,i._snapshot)));return Rk(this._delegate,n,r)}withConverter(e){return new Ft(this.firestore,e?this._delegate.withConverter(js.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class mz{constructor(e,n){this._firestore=e,this._delegate=n}get type(){return this._delegate.type}get doc(){return new Wu(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class f_{constructor(e,n){this._firestore=e,this._delegate=n}get query(){return new Ft(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new Wu(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(n=>new mz(this._firestore,n))}forEach(e,n){this._delegate.forEach(r=>{e.call(n,new Wu(this._firestore,r))})}isEqual(e){return Sk(this._delegate,e._delegate)}}class Ta extends Ft{constructor(e,n){super(e,n),this.firestore=e,this._delegate=n}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new Pn(this.firestore,e):null}doc(e){try{return e===void 0?new Pn(this.firestore,Bu(this._delegate)):new Pn(this.firestore,Bu(this._delegate,e))}catch(n){throw Ut(n,"doc()","CollectionReference.doc()")}}add(e){return ez(this._delegate,e).then(n=>new Pn(this.firestore,n))}isEqual(e){return uk(this._delegate,e._delegate)}withConverter(e){return new Ta(this.firestore,e?this._delegate.withConverter(js.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function vs(t){return fe(t,Pe)}/**
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
 */class fw{constructor(...e){this._delegate=new ji(...e)}static documentId(){return new fw(be.keyField().canonicalString())}isEqual(e){return e=j(e),e instanceof ji?this._delegate._internalPath.isEqual(e._internalPath):!1}}/**
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
 */class ds{constructor(e){this._delegate=e}static serverTimestamp(){const e=Ak();return e._methodName="FieldValue.serverTimestamp",new ds(e)}static delete(){const e=oz();return e._methodName="FieldValue.delete",new ds(e)}static arrayUnion(...e){const n=az(...e);return n._methodName="FieldValue.arrayUnion",new ds(n)}static arrayRemove(...e){const n=lz(...e);return n._methodName="FieldValue.arrayRemove",new ds(n)}static increment(e){const n=uz(e);return n._methodName="FieldValue.increment",new ds(n)}isEqual(e){return this._delegate.isEqual(e._delegate)}}/**
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
 */const gz={Firestore:Pk,GeoPoint:Xf,Timestamp:De,Blob:ju,Transaction:Ck,WriteBatch:kk,DocumentReference:Pn,DocumentSnapshot:qu,Query:Ft,QueryDocumentSnapshot:Wu,QuerySnapshot:f_,CollectionReference:Ta,FieldPath:fw,FieldValue:ds,setLogLevel:pz,CACHE_SIZE_UNLIMITED:TB};function _z(t,e){t.INTERNAL.registerComponent(new Nn("firestore-compat",n=>{const r=n.getProvider("app-compat").getImmediate(),i=n.getProvider("firestore").getImmediate();return e(r,i)},"PUBLIC").setServiceProps(Object.assign({},gz)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yz(t){_z(t,(e,n)=>new Pk(e,n,new fz)),t.registerVersion(cz,dz)}yz(mr);/**
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
 */const Dk="firebasestorage.googleapis.com",Nk="storageBucket",vz=2*60*1e3,wz=10*60*1e3,Iz=1e3;/**
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
 */class Me extends bt{constructor(e,n,r=0){super(gm(e),`Firebase Storage: ${n} (${gm(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Me.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return gm(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Ce;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Ce||(Ce={}));function gm(t){return"storage/"+t}function pw(){const t="An unknown error occurred, please check the error payload for server response.";return new Me(Ce.UNKNOWN,t)}function Ez(t){return new Me(Ce.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function Tz(t){return new Me(Ce.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function Sz(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Me(Ce.UNAUTHENTICATED,t)}function Rz(){return new Me(Ce.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function Az(t){return new Me(Ce.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function Ok(){return new Me(Ce.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Vk(){return new Me(Ce.CANCELED,"User canceled the upload/download.")}function Pz(t){return new Me(Ce.INVALID_URL,"Invalid URL '"+t+"'.")}function Cz(t){return new Me(Ce.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function kz(){return new Me(Ce.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Nk+"' property when initializing the app?")}function Lk(){return new Me(Ce.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function bz(){return new Me(Ce.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function xz(){return new Me(Ce.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function Dz(t){return new Me(Ce.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Yo(t){return new Me(Ce.INVALID_ARGUMENT,t)}function Mk(){return new Me(Ce.APP_DELETED,"The Firebase app was deleted.")}function Fk(t){return new Me(Ce.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Kl(t,e){return new Me(Ce.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function gl(t){throw new Me(Ce.INTERNAL_ERROR,"Internal error: "+t)}/**
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
 */class kt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=kt.makeFromUrl(e,n)}catch{return new kt(e,"")}if(r.path==="")return r;throw Cz(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(T){T.path.charAt(T.path.length-1)==="/"&&(T.path_=T.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function u(T){T.path_=decodeURIComponent(T.path)}const c="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",p=new RegExp(`^https?://${h}/${c}/b/${i}/o${f}`,"i"),w={bucket:1,path:3},v=n===Dk?"(?:storage.googleapis.com|storage.cloud.google.com)":n,E="([^?#]*)",_=new RegExp(`^https?://${v}/${i}/${E}`,"i"),g=[{regex:a,indices:l,postModify:s},{regex:p,indices:w,postModify:u},{regex:_,indices:{bucket:1,path:2},postModify:u}];for(let T=0;T<g.length;T++){const P=g[T],C=P.regex.exec(e);if(C){const y=C[P.indices.bucket];let I=C[P.indices.path];I||(I=""),r=new kt(y,I),P.postModify(r);break}}if(r==null)throw Pz(e);return r}}class Nz{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function Oz(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function l(){return a===2}let u=!1;function c(...E){u||(u=!0,e.apply(null,E))}function h(E){i=setTimeout(()=>{i=null,t(p,l())},E)}function f(){s&&clearTimeout(s)}function p(E,..._){if(u){f();return}if(E){f(),c.call(null,E,..._);return}if(l()||o){f(),c.call(null,E,..._);return}r<64&&(r*=2);let g;a===1?(a=2,g=0):g=(r+Math.random())*1e3,h(g)}let w=!1;function v(E){w||(w=!0,f(),!u&&(i!==null?(E||(a=2),clearTimeout(i),h(0)):E||(a=1)))}return h(0),s=setTimeout(()=>{o=!0,v(!0)},n),v}function Vz(t){t(!1)}/**
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
 */function Lz(t){return t!==void 0}function Mz(t){return typeof t=="function"}function Fz(t){return typeof t=="object"&&!Array.isArray(t)}function ap(t){return typeof t=="string"||t instanceof String}function ZE(t){return mw()&&t instanceof Blob}function mw(){return typeof Blob!="undefined"}function p_(t,e,n,r){if(r<e)throw Yo(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Yo(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function ts(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function Uk(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
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
 */var As;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(As||(As={}));/**
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
 */function $k(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
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
 */class Uz{constructor(e,n,r,i,s,o,a,l,u,c,h,f=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=c,this.connectionFactory_=h,this.retry=f,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((p,w)=>{this.resolve_=p,this.reject_=w,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new fd(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===As.NO_ERROR,l=s.getStatus();if(!a||$k(l,this.additionalRetryCodes_)&&this.retry){const c=s.getErrorCode()===As.ABORT;r(!1,new fd(!1,null,c));return}const u=this.successCodes_.indexOf(l)!==-1;r(!0,new fd(u,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());Lz(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=pw();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?Mk():Vk();o(l)}else{const l=Ok();o(l)}};this.canceled_?n(!1,new fd(!1,null,!0)):this.backoffId_=Oz(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&Vz(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class fd{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function $z(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function Bz(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e!=null?e:"AppManager")}function zz(t,e){e&&(t["X-Firebase-GMPID"]=e)}function jz(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function qz(t,e,n,r,i,s,o=!0){const a=Uk(t.urlParams),l=t.url+a,u=Object.assign({},t.headers);return zz(u,e),$z(u,n),Bz(u,s),jz(u,r),new Uz(l,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
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
 */function Wz(){return typeof BlobBuilder!="undefined"?BlobBuilder:typeof WebKitBlobBuilder!="undefined"?WebKitBlobBuilder:void 0}function Gz(...t){const e=Wz();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(mw())return new Blob(t);throw new Me(Ce.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function Hz(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function Kz(t){if(typeof atob=="undefined")throw Dz("base-64");return atob(t)}/**
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
 */const Cn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class _m{constructor(e,n){this.data=e,this.contentType=n||null}}function Bk(t,e){switch(t){case Cn.RAW:return new _m(zk(e));case Cn.BASE64:case Cn.BASE64URL:return new _m(jk(t,e));case Cn.DATA_URL:return new _m(Yz(e),Xz(e))}throw pw()}function zk(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function Qz(t){let e;try{e=decodeURIComponent(t)}catch{throw Kl(Cn.DATA_URL,"Malformed data URL.")}return zk(e)}function jk(t,e){switch(t){case Cn.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw Kl(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case Cn.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw Kl(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=Kz(e)}catch(i){throw i.message.includes("polyfill")?i:Kl(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class qk{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Kl(Cn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=Jz(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function Yz(t){const e=new qk(t);return e.base64?jk(Cn.BASE64,e.rest):Qz(e.rest)}function Xz(t){return new qk(t).contentType}function Jz(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class Cr{constructor(e,n){let r=0,i="";ZE(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(ZE(this.data_)){const r=this.data_,i=Hz(r,e,n);return i===null?null:new Cr(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new Cr(r,!0)}}static getBlob(...e){if(mw()){const n=e.map(r=>r instanceof Cr?r.data_:r);return new Cr(Gz.apply(null,n))}else{const n=e.map(o=>ap(o)?Bk(Cn.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[s++]=o[a]}),new Cr(i,!0)}}uploadData(){return this.data_}}/**
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
 */function gw(t){let e;try{e=JSON.parse(t)}catch{return null}return Fz(e)?e:null}/**
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
 */function Zz(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function e3(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function Wk(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function t3(t,e){return e}class Lt{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||t3}}let pd=null;function n3(t){return!ap(t)||t.length<2?t:Wk(t)}function lp(){if(pd)return pd;const t=[];t.push(new Lt("bucket")),t.push(new Lt("generation")),t.push(new Lt("metageneration")),t.push(new Lt("name","fullPath",!0));function e(s,o){return n3(o)}const n=new Lt("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new Lt("size");return i.xform=r,t.push(i),t.push(new Lt("timeCreated")),t.push(new Lt("updated")),t.push(new Lt("md5Hash",null,!0)),t.push(new Lt("cacheControl",null,!0)),t.push(new Lt("contentDisposition",null,!0)),t.push(new Lt("contentEncoding",null,!0)),t.push(new Lt("contentLanguage",null,!0)),t.push(new Lt("contentType",null,!0)),t.push(new Lt("metadata","customMetadata",!0)),pd=t,pd}function r3(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new kt(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function i3(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return r3(r,t),r}function Gk(t,e,n){const r=gw(e);return r===null?null:i3(t,r,n)}function s3(t,e,n,r){const i=gw(e);if(i===null||!ap(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(u=>{const c=t.bucket,h=t.fullPath,f="/b/"+o(c)+"/o/"+o(h),p=ts(f,n,r),w=Uk({alt:"media",token:u});return p+w})[0]}function _w(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}/**
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
 */const eT="prefixes",tT="items";function o3(t,e,n){const r={prefixes:[],items:[],nextPageToken:n.nextPageToken};if(n[eT])for(const i of n[eT]){const s=i.replace(/\/$/,""),o=t._makeStorageReference(new kt(e,s));r.prefixes.push(o)}if(n[tT])for(const i of n[tT]){const s=t._makeStorageReference(new kt(e,i.name));r.items.push(s)}return r}function a3(t,e,n){const r=gw(n);return r===null?null:o3(t,e,r)}class ei{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function yr(t){if(!t)throw pw()}function up(t,e){function n(r,i){const s=Gk(t,i,e);return yr(s!==null),s}return n}function l3(t,e){function n(r,i){const s=a3(t,e,i);return yr(s!==null),s}return n}function u3(t,e){function n(r,i){const s=Gk(t,i,e);return yr(s!==null),s3(s,i,t.host,t._protocol)}return n}function za(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=Rz():i=Sz():n.getStatus()===402?i=Tz(t.bucket):n.getStatus()===403?i=Az(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function cp(t){const e=za(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=Ez(t.path)),s.serverResponse=i.serverResponse,s}return n}function Hk(t,e,n){const r=e.fullServerUrl(),i=ts(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new ei(i,s,up(t,n),o);return a.errorHandler=cp(e),a}function c3(t,e,n,r,i){const s={};e.isRoot?s.prefix="":s.prefix=e.path+"/",n&&n.length>0&&(s.delimiter=n),r&&(s.pageToken=r),i&&(s.maxResults=i);const o=e.bucketOnlyServerUrl(),a=ts(o,t.host,t._protocol),l="GET",u=t.maxOperationRetryTime,c=new ei(a,l,l3(t,e.bucket),u);return c.urlParams=s,c.errorHandler=za(e),c}function d3(t,e,n){const r=e.fullServerUrl(),i=ts(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new ei(i,s,u3(t,n),o);return a.errorHandler=cp(e),a}function h3(t,e,n,r){const i=e.fullServerUrl(),s=ts(i,t.host,t._protocol),o="PATCH",a=_w(n,r),l={"Content-Type":"application/json; charset=utf-8"},u=t.maxOperationRetryTime,c=new ei(s,o,up(t,r),u);return c.headers=l,c.body=a,c.errorHandler=cp(e),c}function f3(t,e){const n=e.fullServerUrl(),r=ts(n,t.host,t._protocol),i="DELETE",s=t.maxOperationRetryTime;function o(l,u){}const a=new ei(r,i,o,s);return a.successCodes=[200,204],a.errorHandler=cp(e),a}function p3(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function Kk(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=p3(null,e)),r}function m3(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let g="";for(let T=0;T<2;T++)g=g+Math.random().toString().slice(2);return g}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const u=Kk(e,r,i),c=_w(u,n),h="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+c+`\r
--`+l+`\r
Content-Type: `+u.contentType+`\r
\r
`,f=`\r
--`+l+"--",p=Cr.getBlob(h,r,f);if(p===null)throw Lk();const w={name:u.fullPath},v=ts(s,t.host,t._protocol),E="POST",_=t.maxUploadRetryTime,m=new ei(v,E,up(t,n),_);return m.urlParams=w,m.headers=o,m.body=p.uploadData(),m.errorHandler=za(e),m}class $h{constructor(e,n,r,i){this.current=e,this.total=n,this.finalized=!!r,this.metadata=i||null}}function yw(t,e){let n=null;try{n=t.getResponseHeader("X-Goog-Upload-Status")}catch{yr(!1)}return yr(!!n&&(e||["active"]).indexOf(n)!==-1),n}function g3(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o=Kk(e,r,i),a={name:o.fullPath},l=ts(s,t.host,t._protocol),u="POST",c={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${r.size()}`,"X-Goog-Upload-Header-Content-Type":o.contentType,"Content-Type":"application/json; charset=utf-8"},h=_w(o,n),f=t.maxUploadRetryTime;function p(v){yw(v);let E;try{E=v.getResponseHeader("X-Goog-Upload-URL")}catch{yr(!1)}return yr(ap(E)),E}const w=new ei(l,u,p,f);return w.urlParams=a,w.headers=c,w.body=h,w.errorHandler=za(e),w}function _3(t,e,n,r){const i={"X-Goog-Upload-Command":"query"};function s(u){const c=yw(u,["active","final"]);let h=null;try{h=u.getResponseHeader("X-Goog-Upload-Size-Received")}catch{yr(!1)}h||yr(!1);const f=Number(h);return yr(!isNaN(f)),new $h(f,r.size(),c==="final")}const o="POST",a=t.maxUploadRetryTime,l=new ei(n,o,s,a);return l.headers=i,l.errorHandler=za(e),l}const nT=256*1024;function y3(t,e,n,r,i,s,o,a){const l=new $h(0,0);if(o?(l.current=o.current,l.total=o.total):(l.current=0,l.total=r.size()),r.size()!==l.total)throw bz();const u=l.total-l.current;let c=u;i>0&&(c=Math.min(c,i));const h=l.current,f=h+c;let p="";c===0?p="finalize":u===c?p="upload, finalize":p="upload";const w={"X-Goog-Upload-Command":p,"X-Goog-Upload-Offset":`${l.current}`},v=r.slice(h,f);if(v===null)throw Lk();function E(T,P){const C=yw(T,["active","final"]),y=l.current+c,I=r.size();let A;return C==="final"?A=up(e,s)(T,P):A=null,new $h(y,I,C==="final",A)}const _="POST",m=e.maxUploadRetryTime,g=new ei(n,_,E,m);return g.headers=w,g.body=v.uploadData(),g.progressCallback=a||null,g.errorHandler=za(t),g}/**
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
 */const v3={STATE_CHANGED:"state_changed"},$t={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function ym(t){switch(t){case"running":case"pausing":case"canceling":return $t.RUNNING;case"paused":return $t.PAUSED;case"success":return $t.SUCCESS;case"canceled":return $t.CANCELED;case"error":return $t.ERROR;default:return $t.ERROR}}/**
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
 */class w3{constructor(e,n,r){if(Mz(e)||n!=null||r!=null)this.next=e,this.error=n!=null?n:void 0,this.complete=r!=null?r:void 0;else{const s=e;this.next=s.next,this.error=s.error,this.complete=s.complete}}}/**
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
 */function mo(t){return(...e)=>{Promise.resolve().then(()=>t(...e))}}class I3{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=As.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=As.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=As.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw gl("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw gl("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw gl("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw gl("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw gl("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class E3 extends I3{initXhr(){this.xhr_.responseType="text"}}function or(){return new E3}/**
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
 */class Qk{constructor(e,n,r=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=n,this._metadata=r,this._mappings=lp(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=i=>{if(this._request=void 0,this._chunkMultiplier=1,i._codeEquals(Ce.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const s=this.isExponentialBackoffExpired();if($k(i.status,[]))if(s)i=Ok();else{this.sleepTime=Math.max(this.sleepTime*2,Iz),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=i,this._transition("error")}},this._metadataErrorHandler=i=>{this._request=void 0,i._codeEquals(Ce.CANCELED)?this.completeTransitions_():(this._error=i,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((i,s)=>{this._resolve=i,this._reject=s,this._start()}),this._promise.then(null,()=>{})}isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}_makeProgressCallback(){const e=this._transferred;return n=>this._updateProgress(e+n)}_shouldDoResumable(e){return e.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([n,r])=>{switch(this._state){case"running":e(n,r);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,n)=>{const r=g3(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,or,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._uploadUrl=s,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((n,r)=>{const i=_3(this._ref.storage,this._ref._location,e,this._blob),s=this._ref.storage._makeRequest(i,or,n,r);this._request=s,s.getPromise().then(o=>{o=o,this._request=void 0,this._updateProgress(o.current),this._needToFetchStatus=!1,o.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=nT*this._chunkMultiplier,n=new $h(this._transferred,this._blob.size()),r=this._uploadUrl;this._resolveToken((i,s)=>{let o;try{o=y3(this._ref._location,this._ref.storage,r,this._blob,e,this._mappings,n,this._makeProgressCallback())}catch(l){this._error=l,this._transition("error");return}const a=this._ref.storage._makeRequest(o,or,i,s,!1);this._request=a,a.getPromise().then(l=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(l.current),l.finalized?(this._metadata=l.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){nT*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,n)=>{const r=Hk(this._ref.storage,this._ref._location,this._mappings),i=this._ref.storage._makeRequest(r,or,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._metadata=s,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,n)=>{const r=m3(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,or,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._metadata=s,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const n=this._transferred;this._transferred=e,this._transferred!==n&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const n=this._state==="paused";this._state=e,n&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=Vk(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=ym(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,n,r,i){const s=new w3(n||void 0,r||void 0,i||void 0);return this._addObserver(s),()=>{this._removeObserver(s)}}then(e,n){return this._promise.then(e,n)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const n=this._observers.indexOf(e);n!==-1&&this._observers.splice(n,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(n=>{this._notifyObserver(n)})}_finishPromise(){if(this._resolve!==void 0){let e=!0;switch(ym(this._state)){case $t.SUCCESS:mo(this._resolve.bind(null,this.snapshot))();break;case $t.CANCELED:case $t.ERROR:const n=this._reject;mo(n.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(ym(this._state)){case $t.RUNNING:case $t.PAUSED:e.next&&mo(e.next.bind(e,this.snapshot))();break;case $t.SUCCESS:e.complete&&mo(e.complete.bind(e))();break;case $t.CANCELED:case $t.ERROR:e.error&&mo(e.error.bind(e,this._error))();break;default:e.error&&mo(e.error.bind(e,this._error))()}}resume(){const e=this._state==="paused"||this._state==="pausing";return e&&this._transition("running"),e}pause(){const e=this._state==="running";return e&&this._transition("pausing"),e}cancel(){const e=this._state==="running"||this._state==="pausing";return e&&this._transition("canceling"),e}}/**
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
 */class qs{constructor(e,n){this._service=e,n instanceof kt?this._location=n:this._location=kt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new qs(e,n)}get root(){const e=new kt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Wk(this._location.path)}get storage(){return this._service}get parent(){const e=Zz(this._location.path);if(e===null)return null;const n=new kt(this._location.bucket,e);return new qs(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw Fk(e)}}function T3(t,e,n){return t._throwIfRoot("uploadBytesResumable"),new Qk(t,new Cr(e),n)}function S3(t){const e={prefixes:[],items:[]};return Yk(t,e).then(()=>e)}async function Yk(t,e,n){const i=await Xk(t,{pageToken:n});e.prefixes.push(...i.prefixes),e.items.push(...i.items),i.nextPageToken!=null&&await Yk(t,e,i.nextPageToken)}function Xk(t,e){e!=null&&typeof e.maxResults=="number"&&p_("options.maxResults",1,1e3,e.maxResults);const n=e||{},r=c3(t.storage,t._location,"/",n.pageToken,n.maxResults);return t.storage.makeRequestWithTokens(r,or)}function R3(t){t._throwIfRoot("getMetadata");const e=Hk(t.storage,t._location,lp());return t.storage.makeRequestWithTokens(e,or)}function A3(t,e){t._throwIfRoot("updateMetadata");const n=h3(t.storage,t._location,e,lp());return t.storage.makeRequestWithTokens(n,or)}function P3(t){t._throwIfRoot("getDownloadURL");const e=d3(t.storage,t._location,lp());return t.storage.makeRequestWithTokens(e,or).then(n=>{if(n===null)throw xz();return n})}function C3(t){t._throwIfRoot("deleteObject");const e=f3(t.storage,t._location);return t.storage.makeRequestWithTokens(e,or)}function Jk(t,e){const n=e3(t._location.path,e),r=new kt(t._location.bucket,n);return new qs(t.storage,r)}/**
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
 */function k3(t){return/^[A-Za-z]+:\/\//.test(t)}function b3(t,e){return new qs(t,e)}function Zk(t,e){if(t instanceof vw){const n=t;if(n._bucket==null)throw kz();const r=new qs(n,n._bucket);return e!=null?Zk(r,e):r}else return e!==void 0?Jk(t,e):t}function x3(t,e){if(e&&k3(e)){if(t instanceof vw)return b3(t,e);throw Yo("To use ref(service, url), the first argument must be a Storage instance.")}else return Zk(t,e)}function rT(t,e){const n=e==null?void 0:e[Nk];return n==null?null:kt.makeFromBucketSpec(n,t)}function D3(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:X1(i,t.app.options.projectId))}class vw{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=Dk,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=vz,this._maxUploadRetryTime=wz,this._requests=new Set,i!=null?this._bucket=kt.makeFromBucketSpec(i,this._host):this._bucket=rT(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=kt.makeFromBucketSpec(this._url,e):this._bucket=rT(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){p_("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){p_("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new qs(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new Nz(Mk());{const o=qz(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const iT="@firebase/storage",sT="0.12.3";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N3="storage";function O3(t,e,n){return t=j(t),T3(t,e,n)}function V3(t){return t=j(t),R3(t)}function L3(t,e){return t=j(t),A3(t,e)}function M3(t,e){return t=j(t),Xk(t,e)}function F3(t){return t=j(t),S3(t)}function U3(t){return t=j(t),P3(t)}function $3(t){return t=j(t),C3(t)}function oT(t,e){return t=j(t),x3(t,e)}function B3(t,e){return Jk(t,e)}function z3(t,e,n,r={}){D3(t,e,n,r)}function j3(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new vw(n,r,i,e,Kr)}function q3(){jr(new Nn(N3,j3,"PUBLIC").setMultipleInstances(!0)),pn(iT,sT,""),pn(iT,sT,"esm2017")}q3();/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class md{constructor(e,n,r){this._delegate=e,this.task=n,this.ref=r}get bytesTransferred(){return this._delegate.bytesTransferred}get metadata(){return this._delegate.metadata}get state(){return this._delegate.state}get totalBytes(){return this._delegate.totalBytes}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aT{constructor(e,n){this._delegate=e,this._ref=n,this.cancel=this._delegate.cancel.bind(this._delegate),this.catch=this._delegate.catch.bind(this._delegate),this.pause=this._delegate.pause.bind(this._delegate),this.resume=this._delegate.resume.bind(this._delegate)}get snapshot(){return new md(this._delegate.snapshot,this,this._ref)}then(e,n){return this._delegate.then(r=>{if(e)return e(new md(r,this,this._ref))},n)}on(e,n,r,i){let s;return n&&(typeof n=="function"?s=o=>n(new md(o,this,this._ref)):s={next:n.next?o=>n.next(new md(o,this,this._ref)):void 0,complete:n.complete||void 0,error:n.error||void 0}),this._delegate.on(e,s,r||void 0,i||void 0)}}class lT{constructor(e,n){this._delegate=e,this._service=n}get prefixes(){return this._delegate.prefixes.map(e=>new Fr(e,this._service))}get items(){return this._delegate.items.map(e=>new Fr(e,this._service))}get nextPageToken(){return this._delegate.nextPageToken||null}}/**
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
 */class Fr{constructor(e,n){this._delegate=e,this.storage=n}get name(){return this._delegate.name}get bucket(){return this._delegate.bucket}get fullPath(){return this._delegate.fullPath}toString(){return this._delegate.toString()}child(e){const n=B3(this._delegate,e);return new Fr(n,this.storage)}get root(){return new Fr(this._delegate.root,this.storage)}get parent(){const e=this._delegate.parent;return e==null?null:new Fr(e,this.storage)}put(e,n){return this._throwIfRoot("put"),new aT(O3(this._delegate,e,n),this)}putString(e,n=Cn.RAW,r){this._throwIfRoot("putString");const i=Bk(n,e),s=Object.assign({},r);return s.contentType==null&&i.contentType!=null&&(s.contentType=i.contentType),new aT(new Qk(this._delegate,new Cr(i.data,!0),s),this)}listAll(){return F3(this._delegate).then(e=>new lT(e,this.storage))}list(e){return M3(this._delegate,e||void 0).then(n=>new lT(n,this.storage))}getMetadata(){return V3(this._delegate)}updateMetadata(e){return L3(this._delegate,e)}getDownloadURL(){return U3(this._delegate)}delete(){return this._throwIfRoot("delete"),$3(this._delegate)}_throwIfRoot(e){if(this._delegate._location.path==="")throw Fk(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eb{constructor(e,n){this.app=e,this._delegate=n}get maxOperationRetryTime(){return this._delegate.maxOperationRetryTime}get maxUploadRetryTime(){return this._delegate.maxUploadRetryTime}ref(e){if(uT(e))throw Yo("ref() expected a child path but got a URL, use refFromURL instead.");return new Fr(oT(this._delegate,e),this)}refFromURL(e){if(!uT(e))throw Yo("refFromURL() expected a full URL but got a child path, use ref() instead.");try{kt.makeFromUrl(e,this._delegate.host)}catch{throw Yo("refFromUrl() expected a valid full URL but got an invalid one.")}return new Fr(oT(this._delegate,e),this)}setMaxUploadRetryTime(e){this._delegate.maxUploadRetryTime=e}setMaxOperationRetryTime(e){this._delegate.maxOperationRetryTime=e}useEmulator(e,n,r={}){z3(this._delegate,e,n,r)}}function uT(t){return/^[A-Za-z]+:\/\//.test(t)}const W3="@firebase/storage-compat",G3="0.3.6";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H3="storage-compat";function K3(t,{instanceIdentifier:e}){const n=t.getProvider("app-compat").getImmediate(),r=t.getProvider("storage").getImmediate({identifier:e});return new eb(n,r)}function Q3(t){const e={TaskState:$t,TaskEvent:v3,StringFormat:Cn,Storage:eb,Reference:Fr};t.INTERNAL.registerComponent(new Nn(H3,K3,"PUBLIC").setServiceProps(e).setMultipleInstances(!0)),t.registerVersion(W3,G3)}Q3(mr);const Y3={apiKey:"AIzaSyCZfl35W4mAXoVlNpoeHJo9MKbS1QzPz74",authDomain:"bookger-f7294.firebaseapp.com",projectId:"bookger-f7294",storageBucket:"bookger-f7294.appspot.com",messagingSenderId:"547274838685",appId:"1:547274838685:web:e5f4b5a3ba12a7dd417a74"};let Bh;mr.apps.length==0?Bh=mr.initializeApp(Y3):Bh=mr.app();const X3=Bh.firestore(),ww=mr.auth();Bh.storage();function J3(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return S.exports.useMemo(()=>r=>{e.forEach(i=>i(r))},e)}const dp=typeof window!="undefined"&&typeof window.document!="undefined"&&typeof window.document.createElement!="undefined";function ja(t){const e=Object.prototype.toString.call(t);return e==="[object Window]"||e==="[object global]"}function Iw(t){return"nodeType"in t}function on(t){var e,n;return t?ja(t)?t:Iw(t)&&(e=(n=t.ownerDocument)==null?void 0:n.defaultView)!=null?e:window:window}function Ew(t){const{Document:e}=on(t);return t instanceof e}function bc(t){return ja(t)?!1:t instanceof on(t).HTMLElement}function Z3(t){return t instanceof on(t).SVGElement}function qa(t){return t?ja(t)?t.document:Iw(t)?Ew(t)?t:bc(t)?t.ownerDocument:document:document:document}const Kn=dp?S.exports.useLayoutEffect:S.exports.useEffect;function Tw(t){const e=S.exports.useRef(t);return Kn(()=>{e.current=t}),S.exports.useCallback(function(){for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return e.current==null?void 0:e.current(...r)},[])}function e6(){const t=S.exports.useRef(null),e=S.exports.useCallback((r,i)=>{t.current=setInterval(r,i)},[]),n=S.exports.useCallback(()=>{t.current!==null&&(clearInterval(t.current),t.current=null)},[]);return[e,n]}function Gu(t,e){e===void 0&&(e=[t]);const n=S.exports.useRef(t);return Kn(()=>{n.current!==t&&(n.current=t)},e),n}function xc(t,e){const n=S.exports.useRef();return S.exports.useMemo(()=>{const r=t(n.current);return n.current=r,r},[...e])}function zh(t){const e=Tw(t),n=S.exports.useRef(null),r=S.exports.useCallback(i=>{i!==n.current&&(e==null||e(i,n.current)),n.current=i},[]);return[n,r]}function m_(t){const e=S.exports.useRef();return S.exports.useEffect(()=>{e.current=t},[t]),e.current}let vm={};function Dc(t,e){return S.exports.useMemo(()=>{if(e)return e;const n=vm[t]==null?0:vm[t]+1;return vm[t]=n,t+"-"+n},[t,e])}function tb(t){return function(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];return r.reduce((s,o)=>{const a=Object.entries(o);for(const[l,u]of a){const c=s[l];c!=null&&(s[l]=c+t*u)}return s},{...e})}}const Xo=tb(1),Hu=tb(-1);function t6(t){return"clientX"in t&&"clientY"in t}function Sw(t){if(!t)return!1;const{KeyboardEvent:e}=on(t.target);return e&&t instanceof e}function n6(t){if(!t)return!1;const{TouchEvent:e}=on(t.target);return e&&t instanceof e}function g_(t){if(n6(t)){if(t.touches&&t.touches.length){const{clientX:e,clientY:n}=t.touches[0];return{x:e,y:n}}else if(t.changedTouches&&t.changedTouches.length){const{clientX:e,clientY:n}=t.changedTouches[0];return{x:e,y:n}}}return t6(t)?{x:t.clientX,y:t.clientY}:null}const Ku=Object.freeze({Translate:{toString(t){if(!t)return;const{x:e,y:n}=t;return"translate3d("+(e?Math.round(e):0)+"px, "+(n?Math.round(n):0)+"px, 0)"}},Scale:{toString(t){if(!t)return;const{scaleX:e,scaleY:n}=t;return"scaleX("+e+") scaleY("+n+")"}},Transform:{toString(t){if(!!t)return[Ku.Translate.toString(t),Ku.Scale.toString(t)].join(" ")}},Transition:{toString(t){let{property:e,duration:n,easing:r}=t;return e+" "+n+"ms "+r}}}),cT="a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]";function r6(t){return t.matches(cT)?t:t.querySelector(cT)}const i6={display:"none"};function s6(t){let{id:e,value:n}=t;return L("div",{id:e,style:i6,children:n})}const o6={position:"fixed",width:1,height:1,margin:-1,border:0,padding:0,overflow:"hidden",clip:"rect(0 0 0 0)",clipPath:"inset(100%)",whiteSpace:"nowrap"};function a6(t){let{id:e,announcement:n}=t;return L("div",{id:e,style:o6,role:"status","aria-live":"assertive","aria-atomic":!0,children:n})}function l6(){const[t,e]=S.exports.useState("");return{announce:S.exports.useCallback(r=>{r!=null&&e(r)},[]),announcement:t}}const nb=S.exports.createContext(null);function u6(t){const e=S.exports.useContext(nb);S.exports.useEffect(()=>{if(!e)throw new Error("useDndMonitor must be used within a children of <DndContext>");return e(t)},[t,e])}function c6(){const[t]=S.exports.useState(()=>new Set),e=S.exports.useCallback(r=>(t.add(r),()=>t.delete(r)),[t]);return[S.exports.useCallback(r=>{let{type:i,event:s}=r;t.forEach(o=>{var a;return(a=o[i])==null?void 0:a.call(o,s)})},[t]),e]}const d6={draggable:`
    To pick up a draggable item, press the space bar.
    While dragging, use the arrow keys to move the item.
    Press space again to drop the item in its new position, or press escape to cancel.
  `},h6={onDragStart(t){let{active:e}=t;return"Picked up draggable item "+e.id+"."},onDragOver(t){let{active:e,over:n}=t;return n?"Draggable item "+e.id+" was moved over droppable area "+n.id+".":"Draggable item "+e.id+" is no longer over a droppable area."},onDragEnd(t){let{active:e,over:n}=t;return n?"Draggable item "+e.id+" was dropped over droppable area "+n.id:"Draggable item "+e.id+" was dropped."},onDragCancel(t){let{active:e}=t;return"Dragging was cancelled. Draggable item "+e.id+" was dropped."}};function f6(t){let{announcements:e=h6,container:n,hiddenTextDescribedById:r,screenReaderInstructions:i=d6}=t;const{announce:s,announcement:o}=l6(),a=Dc("DndLiveRegion"),[l,u]=S.exports.useState(!1);if(S.exports.useEffect(()=>{u(!0)},[]),u6(S.exports.useMemo(()=>({onDragStart(h){let{active:f}=h;s(e.onDragStart({active:f}))},onDragMove(h){let{active:f,over:p}=h;e.onDragMove&&s(e.onDragMove({active:f,over:p}))},onDragOver(h){let{active:f,over:p}=h;s(e.onDragOver({active:f,over:p}))},onDragEnd(h){let{active:f,over:p}=h;s(e.onDragEnd({active:f,over:p}))},onDragCancel(h){let{active:f,over:p}=h;s(e.onDragCancel({active:f,over:p}))}}),[s,e])),!l)return null;const c=ee(py,{children:[L(s6,{id:r,value:i.draggable}),L(a6,{id:a,announcement:o})]});return n?fi.exports.createPortal(c,n):c}var et;(function(t){t.DragStart="dragStart",t.DragMove="dragMove",t.DragEnd="dragEnd",t.DragCancel="dragCancel",t.DragOver="dragOver",t.RegisterDroppable="registerDroppable",t.SetDroppableDisabled="setDroppableDisabled",t.UnregisterDroppable="unregisterDroppable"})(et||(et={}));function jh(){}function dT(t,e){return S.exports.useMemo(()=>({sensor:t,options:e!=null?e:{}}),[t,e])}function p6(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return S.exports.useMemo(()=>[...e].filter(r=>r!=null),[...e])}const Qn=Object.freeze({x:0,y:0});function rb(t,e){return Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2))}function ib(t,e){let{data:{value:n}}=t,{data:{value:r}}=e;return n-r}function m6(t,e){let{data:{value:n}}=t,{data:{value:r}}=e;return r-n}function hT(t){let{left:e,top:n,height:r,width:i}=t;return[{x:e,y:n},{x:e+i,y:n},{x:e,y:n+r},{x:e+i,y:n+r}]}function sb(t,e){if(!t||t.length===0)return null;const[n]=t;return e?n[e]:n}function fT(t,e,n){return e===void 0&&(e=t.left),n===void 0&&(n=t.top),{x:e+t.width*.5,y:n+t.height*.5}}const g6=t=>{let{collisionRect:e,droppableRects:n,droppableContainers:r}=t;const i=fT(e,e.left,e.top),s=[];for(const o of r){const{id:a}=o,l=n.get(a);if(l){const u=rb(fT(l),i);s.push({id:a,data:{droppableContainer:o,value:u}})}}return s.sort(ib)},_6=t=>{let{collisionRect:e,droppableRects:n,droppableContainers:r}=t;const i=hT(e),s=[];for(const o of r){const{id:a}=o,l=n.get(a);if(l){const u=hT(l),c=i.reduce((f,p,w)=>f+rb(u[w],p),0),h=Number((c/4).toFixed(4));s.push({id:a,data:{droppableContainer:o,value:h}})}}return s.sort(ib)};function y6(t,e){const n=Math.max(e.top,t.top),r=Math.max(e.left,t.left),i=Math.min(e.left+e.width,t.left+t.width),s=Math.min(e.top+e.height,t.top+t.height),o=i-r,a=s-n;if(r<i&&n<s){const l=e.width*e.height,u=t.width*t.height,c=o*a,h=c/(l+u-c);return Number(h.toFixed(4))}return 0}const v6=t=>{let{collisionRect:e,droppableRects:n,droppableContainers:r}=t;const i=[];for(const s of r){const{id:o}=s,a=n.get(o);if(a){const l=y6(a,e);l>0&&i.push({id:o,data:{droppableContainer:s,value:l}})}}return i.sort(m6)};function w6(t,e,n){return{...t,scaleX:e&&n?e.width/n.width:1,scaleY:e&&n?e.height/n.height:1}}function ob(t,e){return t&&e?{x:t.left-e.left,y:t.top-e.top}:Qn}function I6(t){return function(n){for(var r=arguments.length,i=new Array(r>1?r-1:0),s=1;s<r;s++)i[s-1]=arguments[s];return i.reduce((o,a)=>({...o,top:o.top+t*a.y,bottom:o.bottom+t*a.y,left:o.left+t*a.x,right:o.right+t*a.x}),{...n})}}const E6=I6(1);function T6(t){if(t.startsWith("matrix3d(")){const e=t.slice(9,-1).split(/, /);return{x:+e[12],y:+e[13],scaleX:+e[0],scaleY:+e[5]}}else if(t.startsWith("matrix(")){const e=t.slice(7,-1).split(/, /);return{x:+e[4],y:+e[5],scaleX:+e[0],scaleY:+e[3]}}return null}function S6(t,e,n){const r=T6(e);if(!r)return t;const{scaleX:i,scaleY:s,x:o,y:a}=r,l=t.left-o-(1-i)*parseFloat(n),u=t.top-a-(1-s)*parseFloat(n.slice(n.indexOf(" ")+1)),c=i?t.width/i:t.width,h=s?t.height/s:t.height;return{width:c,height:h,top:u,right:l+c,bottom:u+h,left:l}}const R6={ignoreTransform:!1};function Wa(t,e){e===void 0&&(e=R6);let n=t.getBoundingClientRect();if(e.ignoreTransform){const{getComputedStyle:u}=on(t),{transform:c,transformOrigin:h}=u(t);c&&(n=S6(n,c,h))}const{top:r,left:i,width:s,height:o,bottom:a,right:l}=n;return{top:r,left:i,width:s,height:o,bottom:a,right:l}}function pT(t){return Wa(t,{ignoreTransform:!0})}function A6(t){const e=t.innerWidth,n=t.innerHeight;return{top:0,left:0,right:e,bottom:n,width:e,height:n}}function P6(t,e){return e===void 0&&(e=on(t).getComputedStyle(t)),e.position==="fixed"}function C6(t,e){e===void 0&&(e=on(t).getComputedStyle(t));const n=/(auto|scroll|overlay)/;return["overflow","overflowX","overflowY"].some(i=>{const s=e[i];return typeof s=="string"?n.test(s):!1})}function hp(t,e){const n=[];function r(i){if(e!=null&&n.length>=e||!i)return n;if(Ew(i)&&i.scrollingElement!=null&&!n.includes(i.scrollingElement))return n.push(i.scrollingElement),n;if(!bc(i)||Z3(i)||n.includes(i))return n;const{getComputedStyle:s}=on(i),o=s(i);return i!==t&&C6(i,o)&&n.push(i),P6(i,o)?n:r(i.parentNode)}return t?r(t):n}function ab(t){const[e]=hp(t,1);return e!=null?e:null}function wm(t){return!dp||!t?null:ja(t)?t:Iw(t)?Ew(t)||t===qa(t).scrollingElement?window:bc(t)?t:null:null}function lb(t){return ja(t)?t.scrollX:t.scrollLeft}function ub(t){return ja(t)?t.scrollY:t.scrollTop}function __(t){return{x:lb(t),y:ub(t)}}var at;(function(t){t[t.Forward=1]="Forward",t[t.Backward=-1]="Backward"})(at||(at={}));function cb(t){return!dp||!t?!1:t===document.scrollingElement}function db(t){const e={x:0,y:0},n=cb(t)?{height:window.innerHeight,width:window.innerWidth}:{height:t.clientHeight,width:t.clientWidth},r={x:t.scrollWidth-n.width,y:t.scrollHeight-n.height},i=t.scrollTop<=e.y,s=t.scrollLeft<=e.x,o=t.scrollTop>=r.y,a=t.scrollLeft>=r.x;return{isTop:i,isLeft:s,isBottom:o,isRight:a,maxScroll:r,minScroll:e}}const k6={x:.2,y:.2};function b6(t,e,n,r,i){let{top:s,left:o,right:a,bottom:l}=n;r===void 0&&(r=10),i===void 0&&(i=k6);const{isTop:u,isBottom:c,isLeft:h,isRight:f}=db(t),p={x:0,y:0},w={x:0,y:0},v={height:e.height*i.y,width:e.width*i.x};return!u&&s<=e.top+v.height?(p.y=at.Backward,w.y=r*Math.abs((e.top+v.height-s)/v.height)):!c&&l>=e.bottom-v.height&&(p.y=at.Forward,w.y=r*Math.abs((e.bottom-v.height-l)/v.height)),!f&&a>=e.right-v.width?(p.x=at.Forward,w.x=r*Math.abs((e.right-v.width-a)/v.width)):!h&&o<=e.left+v.width&&(p.x=at.Backward,w.x=r*Math.abs((e.left+v.width-o)/v.width)),{direction:p,speed:w}}function x6(t){if(t===document.scrollingElement){const{innerWidth:s,innerHeight:o}=window;return{top:0,left:0,right:s,bottom:o,width:s,height:o}}const{top:e,left:n,right:r,bottom:i}=t.getBoundingClientRect();return{top:e,left:n,right:r,bottom:i,width:t.clientWidth,height:t.clientHeight}}function hb(t){return t.reduce((e,n)=>Xo(e,__(n)),Qn)}function D6(t){return t.reduce((e,n)=>e+lb(n),0)}function N6(t){return t.reduce((e,n)=>e+ub(n),0)}function O6(t,e){if(e===void 0&&(e=Wa),!t)return;const{top:n,left:r,bottom:i,right:s}=e(t);!ab(t)||(i<=0||s<=0||n>=window.innerHeight||r>=window.innerWidth)&&t.scrollIntoView({block:"center",inline:"center"})}const V6=[["x",["left","right"],D6],["y",["top","bottom"],N6]];class Rw{constructor(e,n){this.rect=void 0,this.width=void 0,this.height=void 0,this.top=void 0,this.bottom=void 0,this.right=void 0,this.left=void 0;const r=hp(n),i=hb(r);this.rect={...e},this.width=e.width,this.height=e.height;for(const[s,o,a]of V6)for(const l of o)Object.defineProperty(this,l,{get:()=>{const u=a(r),c=i[s]-u;return this.rect[l]+c},enumerable:!0});Object.defineProperty(this,"rect",{enumerable:!1})}}class Ql{constructor(e){this.target=void 0,this.listeners=[],this.removeAll=()=>{this.listeners.forEach(n=>{var r;return(r=this.target)==null?void 0:r.removeEventListener(...n)})},this.target=e}add(e,n,r){var i;(i=this.target)==null||i.addEventListener(e,n,r),this.listeners.push([e,n,r])}}function L6(t){const{EventTarget:e}=on(t);return t instanceof e?t:qa(t)}function Im(t,e){const n=Math.abs(t.x),r=Math.abs(t.y);return typeof e=="number"?Math.sqrt(n**2+r**2)>e:"x"in e&&"y"in e?n>e.x&&r>e.y:"x"in e?n>e.x:"y"in e?r>e.y:!1}var In;(function(t){t.Click="click",t.DragStart="dragstart",t.Keydown="keydown",t.ContextMenu="contextmenu",t.Resize="resize",t.SelectionChange="selectionchange",t.VisibilityChange="visibilitychange"})(In||(In={}));function mT(t){t.preventDefault()}function M6(t){t.stopPropagation()}var ce;(function(t){t.Space="Space",t.Down="ArrowDown",t.Right="ArrowRight",t.Left="ArrowLeft",t.Up="ArrowUp",t.Esc="Escape",t.Enter="Enter"})(ce||(ce={}));const fb={start:[ce.Space,ce.Enter],cancel:[ce.Esc],end:[ce.Space,ce.Enter]},F6=(t,e)=>{let{currentCoordinates:n}=e;switch(t.code){case ce.Right:return{...n,x:n.x+25};case ce.Left:return{...n,x:n.x-25};case ce.Down:return{...n,y:n.y+25};case ce.Up:return{...n,y:n.y-25}}};class Aw{constructor(e){this.props=void 0,this.autoScrollEnabled=!1,this.referenceCoordinates=void 0,this.listeners=void 0,this.windowListeners=void 0,this.props=e;const{event:{target:n}}=e;this.props=e,this.listeners=new Ql(qa(n)),this.windowListeners=new Ql(on(n)),this.handleKeyDown=this.handleKeyDown.bind(this),this.handleCancel=this.handleCancel.bind(this),this.attach()}attach(){this.handleStart(),this.windowListeners.add(In.Resize,this.handleCancel),this.windowListeners.add(In.VisibilityChange,this.handleCancel),setTimeout(()=>this.listeners.add(In.Keydown,this.handleKeyDown))}handleStart(){const{activeNode:e,onStart:n}=this.props,r=e.node.current;r&&O6(r),n(Qn)}handleKeyDown(e){if(Sw(e)){const{active:n,context:r,options:i}=this.props,{keyboardCodes:s=fb,coordinateGetter:o=F6,scrollBehavior:a="smooth"}=i,{code:l}=e;if(s.end.includes(l)){this.handleEnd(e);return}if(s.cancel.includes(l)){this.handleCancel(e);return}const{collisionRect:u}=r.current,c=u?{x:u.left,y:u.top}:Qn;this.referenceCoordinates||(this.referenceCoordinates=c);const h=o(e,{active:n,context:r.current,currentCoordinates:c});if(h){const f=Hu(h,c),p={x:0,y:0},{scrollableAncestors:w}=r.current;for(const v of w){const E=e.code,{isTop:_,isRight:m,isLeft:g,isBottom:T,maxScroll:P,minScroll:C}=db(v),y=x6(v),I={x:Math.min(E===ce.Right?y.right-y.width/2:y.right,Math.max(E===ce.Right?y.left:y.left+y.width/2,h.x)),y:Math.min(E===ce.Down?y.bottom-y.height/2:y.bottom,Math.max(E===ce.Down?y.top:y.top+y.height/2,h.y))},A=E===ce.Right&&!m||E===ce.Left&&!g,b=E===ce.Down&&!T||E===ce.Up&&!_;if(A&&I.x!==h.x){const M=v.scrollLeft+f.x,q=E===ce.Right&&M<=P.x||E===ce.Left&&M>=C.x;if(q&&!f.y){v.scrollTo({left:M,behavior:a});return}q?p.x=v.scrollLeft-M:p.x=E===ce.Right?v.scrollLeft-P.x:v.scrollLeft-C.x,p.x&&v.scrollBy({left:-p.x,behavior:a});break}else if(b&&I.y!==h.y){const M=v.scrollTop+f.y,q=E===ce.Down&&M<=P.y||E===ce.Up&&M>=C.y;if(q&&!f.x){v.scrollTo({top:M,behavior:a});return}q?p.y=v.scrollTop-M:p.y=E===ce.Down?v.scrollTop-P.y:v.scrollTop-C.y,p.y&&v.scrollBy({top:-p.y,behavior:a});break}}this.handleMove(e,Xo(Hu(h,this.referenceCoordinates),p))}}}handleMove(e,n){const{onMove:r}=this.props;e.preventDefault(),r(n)}handleEnd(e){const{onEnd:n}=this.props;e.preventDefault(),this.detach(),n()}handleCancel(e){const{onCancel:n}=this.props;e.preventDefault(),this.detach(),n()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll()}}Aw.activators=[{eventName:"onKeyDown",handler:(t,e,n)=>{let{keyboardCodes:r=fb,onActivation:i}=e,{active:s}=n;const{code:o}=t.nativeEvent;if(r.start.includes(o)){const a=s.activatorNode.current;return a&&t.target!==a?!1:(t.preventDefault(),i==null||i({event:t.nativeEvent}),!0)}return!1}}];function gT(t){return Boolean(t&&"distance"in t)}function _T(t){return Boolean(t&&"delay"in t)}class Pw{constructor(e,n,r){var i;r===void 0&&(r=L6(e.event.target)),this.props=void 0,this.events=void 0,this.autoScrollEnabled=!0,this.document=void 0,this.activated=!1,this.initialCoordinates=void 0,this.timeoutId=null,this.listeners=void 0,this.documentListeners=void 0,this.windowListeners=void 0,this.props=e,this.events=n;const{event:s}=e,{target:o}=s;this.props=e,this.events=n,this.document=qa(o),this.documentListeners=new Ql(this.document),this.listeners=new Ql(r),this.windowListeners=new Ql(on(o)),this.initialCoordinates=(i=g_(s))!=null?i:Qn,this.handleStart=this.handleStart.bind(this),this.handleMove=this.handleMove.bind(this),this.handleEnd=this.handleEnd.bind(this),this.handleCancel=this.handleCancel.bind(this),this.handleKeydown=this.handleKeydown.bind(this),this.removeTextSelection=this.removeTextSelection.bind(this),this.attach()}attach(){const{events:e,props:{options:{activationConstraint:n}}}=this;if(this.listeners.add(e.move.name,this.handleMove,{passive:!1}),this.listeners.add(e.end.name,this.handleEnd),this.windowListeners.add(In.Resize,this.handleCancel),this.windowListeners.add(In.DragStart,mT),this.windowListeners.add(In.VisibilityChange,this.handleCancel),this.windowListeners.add(In.ContextMenu,mT),this.documentListeners.add(In.Keydown,this.handleKeydown),n){if(gT(n))return;if(_T(n)){this.timeoutId=setTimeout(this.handleStart,n.delay);return}}this.handleStart()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll(),setTimeout(this.documentListeners.removeAll,50),this.timeoutId!==null&&(clearTimeout(this.timeoutId),this.timeoutId=null)}handleStart(){const{initialCoordinates:e}=this,{onStart:n}=this.props;e&&(this.activated=!0,this.documentListeners.add(In.Click,M6,{capture:!0}),this.removeTextSelection(),this.documentListeners.add(In.SelectionChange,this.removeTextSelection),n(e))}handleMove(e){var n;const{activated:r,initialCoordinates:i,props:s}=this,{onMove:o,options:{activationConstraint:a}}=s;if(!i)return;const l=(n=g_(e))!=null?n:Qn,u=Hu(i,l);if(!r&&a){if(_T(a))return Im(u,a.tolerance)?this.handleCancel():void 0;if(gT(a))return a.tolerance!=null&&Im(u,a.tolerance)?this.handleCancel():Im(u,a.distance)?this.handleStart():void 0}e.cancelable&&e.preventDefault(),o(l)}handleEnd(){const{onEnd:e}=this.props;this.detach(),e()}handleCancel(){const{onCancel:e}=this.props;this.detach(),e()}handleKeydown(e){e.code===ce.Esc&&this.handleCancel()}removeTextSelection(){var e;(e=this.document.getSelection())==null||e.removeAllRanges()}}const U6={move:{name:"pointermove"},end:{name:"pointerup"}};class Cw extends Pw{constructor(e){const{event:n}=e,r=qa(n.target);super(e,U6,r)}}Cw.activators=[{eventName:"onPointerDown",handler:(t,e)=>{let{nativeEvent:n}=t,{onActivation:r}=e;return!n.isPrimary||n.button!==0?!1:(r==null||r({event:n}),!0)}}];const $6={move:{name:"mousemove"},end:{name:"mouseup"}};var y_;(function(t){t[t.RightClick=2]="RightClick"})(y_||(y_={}));class B6 extends Pw{constructor(e){super(e,$6,qa(e.event.target))}}B6.activators=[{eventName:"onMouseDown",handler:(t,e)=>{let{nativeEvent:n}=t,{onActivation:r}=e;return n.button===y_.RightClick?!1:(r==null||r({event:n}),!0)}}];const Em={move:{name:"touchmove"},end:{name:"touchend"}};class z6 extends Pw{constructor(e){super(e,Em)}static setup(){return window.addEventListener(Em.move.name,e,{capture:!1,passive:!1}),function(){window.removeEventListener(Em.move.name,e)};function e(){}}}z6.activators=[{eventName:"onTouchStart",handler:(t,e)=>{let{nativeEvent:n}=t,{onActivation:r}=e;const{touches:i}=n;return i.length>1?!1:(r==null||r({event:n}),!0)}}];var Yl;(function(t){t[t.Pointer=0]="Pointer",t[t.DraggableRect=1]="DraggableRect"})(Yl||(Yl={}));var qh;(function(t){t[t.TreeOrder=0]="TreeOrder",t[t.ReversedTreeOrder=1]="ReversedTreeOrder"})(qh||(qh={}));function j6(t){let{acceleration:e,activator:n=Yl.Pointer,canScroll:r,draggingRect:i,enabled:s,interval:o=5,order:a=qh.TreeOrder,pointerCoordinates:l,scrollableAncestors:u,scrollableAncestorRects:c,delta:h,threshold:f}=t;const p=W6({delta:h,disabled:!s}),[w,v]=e6(),E=S.exports.useRef({x:0,y:0}),_=S.exports.useRef({x:0,y:0}),m=S.exports.useMemo(()=>{switch(n){case Yl.Pointer:return l?{top:l.y,bottom:l.y,left:l.x,right:l.x}:null;case Yl.DraggableRect:return i}},[n,i,l]),g=S.exports.useRef(null),T=S.exports.useCallback(()=>{const C=g.current;if(!C)return;const y=E.current.x*_.current.x,I=E.current.y*_.current.y;C.scrollBy(y,I)},[]),P=S.exports.useMemo(()=>a===qh.TreeOrder?[...u].reverse():u,[a,u]);S.exports.useEffect(()=>{if(!s||!u.length||!m){v();return}for(const C of P){if((r==null?void 0:r(C))===!1)continue;const y=u.indexOf(C),I=c[y];if(!I)continue;const{direction:A,speed:b}=b6(C,I,m,e,f);for(const M of["x","y"])p[M][A[M]]||(b[M]=0,A[M]=0);if(b.x>0||b.y>0){v(),g.current=C,w(T,o),E.current=b,_.current=A;return}}E.current={x:0,y:0},_.current={x:0,y:0},v()},[e,T,r,v,s,o,JSON.stringify(m),JSON.stringify(p),w,u,P,c,JSON.stringify(f)])}const q6={x:{[at.Backward]:!1,[at.Forward]:!1},y:{[at.Backward]:!1,[at.Forward]:!1}};function W6(t){let{delta:e,disabled:n}=t;const r=m_(e);return xc(i=>{if(n||!r||!i)return q6;const s={x:Math.sign(e.x-r.x),y:Math.sign(e.y-r.y)};return{x:{[at.Backward]:i.x[at.Backward]||s.x===-1,[at.Forward]:i.x[at.Forward]||s.x===1},y:{[at.Backward]:i.y[at.Backward]||s.y===-1,[at.Forward]:i.y[at.Forward]||s.y===1}}},[n,e,r])}function G6(t,e){const n=e!==null?t.get(e):void 0,r=n?n.node.current:null;return xc(i=>{var s;return e===null?null:(s=r!=null?r:i)!=null?s:null},[r,e])}function H6(t,e){return S.exports.useMemo(()=>t.reduce((n,r)=>{const{sensor:i}=r,s=i.activators.map(o=>({eventName:o.eventName,handler:e(o.handler,r)}));return[...n,...s]},[]),[t,e])}var Qu;(function(t){t[t.Always=0]="Always",t[t.BeforeDragging=1]="BeforeDragging",t[t.WhileDragging=2]="WhileDragging"})(Qu||(Qu={}));var v_;(function(t){t.Optimized="optimized"})(v_||(v_={}));const yT=new Map;function K6(t,e){let{dragging:n,dependencies:r,config:i}=e;const[s,o]=S.exports.useState(null),{frequency:a,measure:l,strategy:u}=i,c=S.exports.useRef(t),h=E(),f=Gu(h),p=S.exports.useCallback(function(_){_===void 0&&(_=[]),!f.current&&o(m=>m===null?_:m.concat(_.filter(g=>!m.includes(g))))},[f]),w=S.exports.useRef(null),v=xc(_=>{if(h&&!n)return yT;if(!_||_===yT||c.current!==t||s!=null){const m=new Map;for(let g of t){if(!g)continue;if(s&&s.length>0&&!s.includes(g.id)&&g.rect.current){m.set(g.id,g.rect.current);continue}const T=g.node.current,P=T?new Rw(l(T),T):null;g.rect.current=P,P&&m.set(g.id,P)}return m}return _},[t,s,n,h,l]);return S.exports.useEffect(()=>{c.current=t},[t]),S.exports.useEffect(()=>{h||p()},[n,h]),S.exports.useEffect(()=>{s&&s.length>0&&o(null)},[JSON.stringify(s)]),S.exports.useEffect(()=>{h||typeof a!="number"||w.current!==null||(w.current=setTimeout(()=>{p(),w.current=null},a))},[a,h,p,...r]),{droppableRects:v,measureDroppableContainers:p,measuringScheduled:s!=null};function E(){switch(u){case Qu.Always:return!1;case Qu.BeforeDragging:return n;default:return!n}}}function pb(t,e){return xc(n=>t?n||(typeof e=="function"?e(t):t):null,[e,t])}function Q6(t,e){return pb(t,e)}function Y6(t){let{callback:e,disabled:n}=t;const r=Tw(e),i=S.exports.useMemo(()=>{if(n||typeof window=="undefined"||typeof window.MutationObserver=="undefined")return;const{MutationObserver:s}=window;return new s(r)},[r,n]);return S.exports.useEffect(()=>()=>i==null?void 0:i.disconnect(),[i]),i}function fp(t){let{callback:e,disabled:n}=t;const r=Tw(e),i=S.exports.useMemo(()=>{if(n||typeof window=="undefined"||typeof window.ResizeObserver=="undefined")return;const{ResizeObserver:s}=window;return new s(r)},[n]);return S.exports.useEffect(()=>()=>i==null?void 0:i.disconnect(),[i]),i}function X6(t){return new Rw(Wa(t),t)}function vT(t,e,n){e===void 0&&(e=X6);const[r,i]=S.exports.useReducer(a,null),s=Y6({callback(l){if(!!t)for(const u of l){const{type:c,target:h}=u;if(c==="childList"&&h instanceof HTMLElement&&h.contains(t)){i();break}}}}),o=fp({callback:i});return Kn(()=>{i(),t?(o==null||o.observe(t),s==null||s.observe(document.body,{childList:!0,subtree:!0})):(o==null||o.disconnect(),s==null||s.disconnect())},[t]),r;function a(l){if(!t)return null;if(t.isConnected===!1){var u;return(u=l!=null?l:n)!=null?u:null}const c=e(t);return JSON.stringify(l)===JSON.stringify(c)?l:c}}function J6(t){const e=pb(t);return ob(t,e)}const wT=[];function Z6(t){const e=S.exports.useRef(t),n=xc(r=>t?r&&r!==wT&&t&&e.current&&t.parentNode===e.current.parentNode?r:hp(t):wT,[t]);return S.exports.useEffect(()=>{e.current=t},[t]),n}function e9(t){const[e,n]=S.exports.useState(null),r=S.exports.useRef(t),i=S.exports.useCallback(s=>{const o=wm(s.target);!o||n(a=>a?(a.set(o,__(o)),new Map(a)):null)},[]);return S.exports.useEffect(()=>{const s=r.current;if(t!==s){o(s);const a=t.map(l=>{const u=wm(l);return u?(u.addEventListener("scroll",i,{passive:!0}),[u,__(u)]):null}).filter(l=>l!=null);n(a.length?new Map(a):null),r.current=t}return()=>{o(t),o(s)};function o(a){a.forEach(l=>{const u=wm(l);u==null||u.removeEventListener("scroll",i)})}},[i,t]),S.exports.useMemo(()=>t.length?e?Array.from(e.values()).reduce((s,o)=>Xo(s,o),Qn):hb(t):Qn,[t,e])}function IT(t,e){e===void 0&&(e=[]);const n=S.exports.useRef(null);return S.exports.useEffect(()=>{n.current=null},e),S.exports.useEffect(()=>{const r=t!==Qn;r&&!n.current&&(n.current=t),!r&&n.current&&(n.current=null)},[t]),n.current?Hu(t,n.current):Qn}function t9(t){S.exports.useEffect(()=>{if(!dp)return;const e=t.map(n=>{let{sensor:r}=n;return r.setup==null?void 0:r.setup()});return()=>{for(const n of e)n==null||n()}},t.map(e=>{let{sensor:n}=e;return n}))}function n9(t,e){return S.exports.useMemo(()=>t.reduce((n,r)=>{let{eventName:i,handler:s}=r;return n[i]=o=>{s(o,e)},n},{}),[t,e])}function mb(t){return S.exports.useMemo(()=>t?A6(t):null,[t])}const Tm=[];function r9(t,e){e===void 0&&(e=Wa);const[n]=t,r=mb(n?on(n):null),[i,s]=S.exports.useReducer(a,Tm),o=fp({callback:s});return t.length>0&&i===Tm&&s(),Kn(()=>{t.length?t.forEach(l=>o==null?void 0:o.observe(l)):(o==null||o.disconnect(),s())},[t]),i;function a(){return t.length?t.map(l=>cb(l)?r:new Rw(e(l),l)):Tm}}function i9(t){if(!t)return null;if(t.children.length>1)return t;const e=t.children[0];return bc(e)?e:t}function s9(t){let{measure:e}=t;const[n,r]=S.exports.useState(null),i=S.exports.useCallback(u=>{for(const{target:c}of u)if(bc(c)){r(h=>{const f=e(c);return h?{...h,width:f.width,height:f.height}:f});break}},[e]),s=fp({callback:i}),o=S.exports.useCallback(u=>{const c=i9(u);s==null||s.disconnect(),c&&(s==null||s.observe(c)),r(c?e(c):null)},[e,s]),[a,l]=zh(o);return S.exports.useMemo(()=>({nodeRef:a,rect:n,setRef:l}),[n,a,l])}const o9=[{sensor:Cw,options:{}},{sensor:Aw,options:{}}],a9={current:{}},zd={draggable:{measure:pT},droppable:{measure:pT,strategy:Qu.WhileDragging,frequency:v_.Optimized},dragOverlay:{measure:Wa}};class Xl extends Map{get(e){var n;return e!=null&&(n=super.get(e))!=null?n:void 0}toArray(){return Array.from(this.values())}getEnabled(){return this.toArray().filter(e=>{let{disabled:n}=e;return!n})}getNodeFor(e){var n,r;return(n=(r=this.get(e))==null?void 0:r.node.current)!=null?n:void 0}}const l9={activatorEvent:null,active:null,activeNode:null,activeNodeRect:null,collisions:null,containerNodeRect:null,draggableNodes:new Map,droppableRects:new Map,droppableContainers:new Xl,over:null,dragOverlay:{nodeRef:{current:null},rect:null,setRef:jh},scrollableAncestors:[],scrollableAncestorRects:[],measuringConfiguration:zd,measureDroppableContainers:jh,windowRect:null,measuringScheduled:!1},u9={activatorEvent:null,activators:[],active:null,activeNodeRect:null,ariaDescribedById:{draggable:""},dispatch:jh,draggableNodes:new Map,over:null,measureDroppableContainers:jh},pp=S.exports.createContext(u9),gb=S.exports.createContext(l9);function c9(){return{draggable:{active:null,initialCoordinates:{x:0,y:0},nodes:new Map,translate:{x:0,y:0}},droppable:{containers:new Xl}}}function d9(t,e){switch(e.type){case et.DragStart:return{...t,draggable:{...t.draggable,initialCoordinates:e.initialCoordinates,active:e.active}};case et.DragMove:return t.draggable.active?{...t,draggable:{...t.draggable,translate:{x:e.coordinates.x-t.draggable.initialCoordinates.x,y:e.coordinates.y-t.draggable.initialCoordinates.y}}}:t;case et.DragEnd:case et.DragCancel:return{...t,draggable:{...t.draggable,active:null,initialCoordinates:{x:0,y:0},translate:{x:0,y:0}}};case et.RegisterDroppable:{const{element:n}=e,{id:r}=n,i=new Xl(t.droppable.containers);return i.set(r,n),{...t,droppable:{...t.droppable,containers:i}}}case et.SetDroppableDisabled:{const{id:n,key:r,disabled:i}=e,s=t.droppable.containers.get(n);if(!s||r!==s.key)return t;const o=new Xl(t.droppable.containers);return o.set(n,{...s,disabled:i}),{...t,droppable:{...t.droppable,containers:o}}}case et.UnregisterDroppable:{const{id:n,key:r}=e,i=t.droppable.containers.get(n);if(!i||r!==i.key)return t;const s=new Xl(t.droppable.containers);return s.delete(n),{...t,droppable:{...t.droppable,containers:s}}}default:return t}}function h9(t){let{disabled:e}=t;const{active:n,activatorEvent:r,draggableNodes:i}=S.exports.useContext(pp),s=m_(r),o=m_(n==null?void 0:n.id);return S.exports.useEffect(()=>{if(!e&&!r&&s&&o!=null){if(!Sw(s)||document.activeElement===s.target)return;const a=i.get(o);if(!a)return;const{activatorNode:l,node:u}=a;if(!l.current&&!u.current)return;requestAnimationFrame(()=>{for(const c of[l.current,u.current]){if(!c)continue;const h=r6(c);if(h){h.focus();break}}})}},[r,e,i,o,s]),null}function f9(t,e){let{transform:n,...r}=e;return t!=null&&t.length?t.reduce((i,s)=>s({transform:i,...r}),n):n}function p9(t){return S.exports.useMemo(()=>({draggable:{...zd.draggable,...t==null?void 0:t.draggable},droppable:{...zd.droppable,...t==null?void 0:t.droppable},dragOverlay:{...zd.dragOverlay,...t==null?void 0:t.dragOverlay}}),[t==null?void 0:t.draggable,t==null?void 0:t.droppable,t==null?void 0:t.dragOverlay])}function m9(t){let{activeNode:e,measure:n,initialRect:r,config:i=!0}=t;const s=S.exports.useRef(!1),{x:o,y:a}=typeof i=="boolean"?{x:i,y:i}:i;Kn(()=>{if(!o&&!a||!e){s.current=!1;return}if(s.current||!r)return;const u=e==null?void 0:e.node.current;if(!u||u.isConnected===!1)return;const c=n(u),h=ob(c,r);if(o||(h.x=0),a||(h.y=0),s.current=!0,Math.abs(h.x)>0||Math.abs(h.y)>0){const f=ab(u);f&&f.scrollBy({top:h.y,left:h.x})}},[e,o,a,r,n])}const _b=S.exports.createContext({...Qn,scaleX:1,scaleY:1});var hi;(function(t){t[t.Uninitialized=0]="Uninitialized",t[t.Initializing=1]="Initializing",t[t.Initialized=2]="Initialized"})(hi||(hi={}));const g9=S.exports.memo(function(e){var n,r,i,s;let{id:o,accessibility:a,autoScroll:l=!0,children:u,sensors:c=o9,collisionDetection:h=v6,measuring:f,modifiers:p,...w}=e;const v=S.exports.useReducer(d9,void 0,c9),[E,_]=v,[m,g]=c6(),[T,P]=S.exports.useState(hi.Uninitialized),C=T===hi.Initialized,{draggable:{active:y,nodes:I,translate:A},droppable:{containers:b}}=E,M=y?I.get(y):null,q=S.exports.useRef({initial:null,translated:null}),J=S.exports.useMemo(()=>{var mt;return y!=null?{id:y,data:(mt=M==null?void 0:M.data)!=null?mt:a9,rect:q}:null},[y,M]),Ee=S.exports.useRef(null),[de,X]=S.exports.useState(null),[K,N]=S.exports.useState(null),G=Gu(w,Object.values(w)),Q=Dc("DndDescribedBy",o),le=S.exports.useMemo(()=>b.getEnabled(),[b]),re=p9(f),{droppableRects:Ht,measureDroppableContainers:Vt,measuringScheduled:Er}=K6(le,{dragging:C,dependencies:[A.x,A.y],config:re.droppable}),Ge=G6(I,y),Tr=S.exports.useMemo(()=>K?g_(K):null,[K]),ti=Vb(),Sr=Q6(Ge,re.draggable.measure);m9({activeNode:y?I.get(y):null,config:ti.layoutShiftCompensation,initialRect:Sr,measure:re.draggable.measure});const _e=vT(Ge,re.draggable.measure,Sr),Ga=vT(Ge?Ge.parentElement:null),Yn=S.exports.useRef({activatorEvent:null,active:null,activeNode:Ge,collisionRect:null,collisions:null,droppableRects:Ht,draggableNodes:I,draggingNode:null,draggingNodeRect:null,droppableContainers:b,over:null,scrollableAncestors:[],scrollAdjustedTranslate:null}),to=b.getNodeFor((n=Yn.current.over)==null?void 0:n.id),Rr=s9({measure:re.dragOverlay.measure}),no=(r=Rr.nodeRef.current)!=null?r:Ge,ro=C?(i=Rr.rect)!=null?i:_e:null,xw=Boolean(Rr.nodeRef.current&&Rr.rect),Dw=J6(xw?null:_e),mp=mb(no?on(no):null),ni=Z6(C?to!=null?to:Ge:null),Nc=r9(ni),Oc=f9(p,{transform:{x:A.x-Dw.x,y:A.y-Dw.y,scaleX:1,scaleY:1},activatorEvent:K,active:J,activeNodeRect:_e,containerNodeRect:Ga,draggingNodeRect:ro,over:Yn.current.over,overlayNodeRect:Rr.rect,scrollableAncestors:ni,scrollableAncestorRects:Nc,windowRect:mp}),Nw=Tr?Xo(Tr,A):null,Ow=e9(ni),Cb=IT(Ow),kb=IT(Ow,[_e]),io=Xo(Oc,Cb),so=ro?E6(ro,Oc):null,Ha=J&&so?h({active:J,collisionRect:so,droppableRects:Ht,droppableContainers:le,pointerCoordinates:Nw}):null,Vw=sb(Ha,"id"),[ri,Lw]=S.exports.useState(null),bb=xw?Oc:Xo(Oc,kb),xb=w6(bb,(s=ri==null?void 0:ri.rect)!=null?s:null,_e),Mw=S.exports.useCallback((mt,an)=>{let{sensor:ln,options:ii}=an;if(Ee.current==null)return;const wn=I.get(Ee.current);if(!wn)return;const Vn=mt.nativeEvent,Xn=new ln({active:Ee.current,activeNode:wn,event:Vn,options:ii,context:Yn,onStart(Ln){const Ka=Ee.current;if(Ka==null)return;const Qa=I.get(Ka);if(!Qa)return;const{onDragStart:Vc}=G.current,Lc={active:{id:Ka,data:Qa.data,rect:q}};fi.exports.unstable_batchedUpdates(()=>{Vc==null||Vc(Lc),P(hi.Initializing),_({type:et.DragStart,initialCoordinates:Ln,active:Ka}),m({type:"onDragStart",event:Lc})})},onMove(Ln){_({type:et.DragMove,coordinates:Ln})},onEnd:oo(et.DragEnd),onCancel:oo(et.DragCancel)});fi.exports.unstable_batchedUpdates(()=>{X(Xn),N(mt.nativeEvent)});function oo(Ln){return async function(){const{active:Qa,collisions:Vc,over:Lc,scrollAdjustedTranslate:Uw}=Yn.current;let Ya=null;if(Qa&&Uw){const{cancelDrop:Xa}=G.current;Ya={activatorEvent:Vn,active:Qa,collisions:Vc,delta:Uw,over:Lc},Ln===et.DragEnd&&typeof Xa=="function"&&await Promise.resolve(Xa(Ya))&&(Ln=et.DragCancel)}Ee.current=null,fi.exports.unstable_batchedUpdates(()=>{_({type:Ln}),P(hi.Uninitialized),Lw(null),X(null),N(null);const Xa=Ln===et.DragEnd?"onDragEnd":"onDragCancel";if(Ya){const gp=G.current[Xa];gp==null||gp(Ya),m({type:Xa,event:Ya})}})}}},[I]),Db=S.exports.useCallback((mt,an)=>(ln,ii)=>{const wn=ln.nativeEvent,Vn=I.get(ii);if(Ee.current!==null||!Vn||wn.dndKit||wn.defaultPrevented)return;const Xn={active:Vn};mt(ln,an.options,Xn)===!0&&(wn.dndKit={capturedBy:an.sensor},Ee.current=ii,Mw(ln,an))},[I,Mw]),Fw=H6(c,Db);t9(c),Kn(()=>{_e&&T===hi.Initializing&&P(hi.Initialized)},[_e,T]),S.exports.useEffect(()=>{const{onDragMove:mt}=G.current,{active:an,activatorEvent:ln,collisions:ii,over:wn}=Yn.current;if(!an||!ln)return;const Vn={active:an,activatorEvent:ln,collisions:ii,delta:{x:io.x,y:io.y},over:wn};fi.exports.unstable_batchedUpdates(()=>{mt==null||mt(Vn),m({type:"onDragMove",event:Vn})})},[io.x,io.y]),S.exports.useEffect(()=>{const{active:mt,activatorEvent:an,collisions:ln,droppableContainers:ii,scrollAdjustedTranslate:wn}=Yn.current;if(!mt||Ee.current==null||!an||!wn)return;const{onDragOver:Vn}=G.current,Xn=ii.get(Vw),oo=Xn&&Xn.rect.current?{id:Xn.id,rect:Xn.rect.current,data:Xn.data,disabled:Xn.disabled}:null,Ln={active:mt,activatorEvent:an,collisions:ln,delta:{x:wn.x,y:wn.y},over:oo};fi.exports.unstable_batchedUpdates(()=>{Lw(oo),Vn==null||Vn(Ln),m({type:"onDragOver",event:Ln})})},[Vw]),Kn(()=>{Yn.current={activatorEvent:K,active:J,activeNode:Ge,collisionRect:so,collisions:Ha,droppableRects:Ht,draggableNodes:I,draggingNode:no,draggingNodeRect:ro,droppableContainers:b,over:ri,scrollableAncestors:ni,scrollAdjustedTranslate:io},q.current={initial:ro,translated:so}},[J,Ge,Ha,so,I,no,ro,Ht,b,ri,ni,io]),j6({...ti,delta:A,draggingRect:so,pointerCoordinates:Nw,scrollableAncestors:ni,scrollableAncestorRects:Nc});const Nb=S.exports.useMemo(()=>({active:J,activeNode:Ge,activeNodeRect:_e,activatorEvent:K,collisions:Ha,containerNodeRect:Ga,dragOverlay:Rr,draggableNodes:I,droppableContainers:b,droppableRects:Ht,over:ri,measureDroppableContainers:Vt,scrollableAncestors:ni,scrollableAncestorRects:Nc,measuringConfiguration:re,measuringScheduled:Er,windowRect:mp}),[J,Ge,_e,K,Ha,Ga,Rr,I,b,Ht,ri,Vt,ni,Nc,re,Er,mp]),Ob=S.exports.useMemo(()=>({activatorEvent:K,activators:Fw,active:J,activeNodeRect:_e,ariaDescribedById:{draggable:Q},dispatch:_,draggableNodes:I,over:ri,measureDroppableContainers:Vt}),[K,Fw,J,_e,_,Q,I,ri,Vt]);return ee(nb.Provider,{value:g,children:[ee(pp.Provider,{value:Ob,children:[L(gb.Provider,{value:Nb,children:L(_b.Provider,{value:xb,children:u})}),L(h9,{disabled:(a==null?void 0:a.restoreFocus)===!1})]}),L(f6,{...a,hiddenTextDescribedById:Q})]});function Vb(){const mt=(de==null?void 0:de.autoScrollEnabled)===!1,an=typeof l=="object"?l.enabled===!1:l===!1,ln=C&&!mt&&!an;return typeof l=="object"?{...l,enabled:ln}:{enabled:ln}}}),_9=S.exports.createContext(null),ET="button",y9="Droppable";function v9(t){let{id:e,data:n,disabled:r=!1,attributes:i}=t;const s=Dc(y9),{activators:o,activatorEvent:a,active:l,activeNodeRect:u,ariaDescribedById:c,draggableNodes:h,over:f}=S.exports.useContext(pp),{role:p=ET,roleDescription:w="draggable",tabIndex:v=0}=i!=null?i:{},E=(l==null?void 0:l.id)===e,_=S.exports.useContext(E?_b:_9),[m,g]=zh(),[T,P]=zh(),C=n9(o,e),y=Gu(n);Kn(()=>(h.set(e,{id:e,key:s,node:m,activatorNode:T,data:y}),()=>{const A=h.get(e);A&&A.key===s&&h.delete(e)}),[h,e]);const I=S.exports.useMemo(()=>({role:p,tabIndex:v,"aria-disabled":r,"aria-pressed":E&&p===ET?!0:void 0,"aria-roledescription":w,"aria-describedby":c.draggable}),[r,p,v,E,w,c.draggable]);return{active:l,activatorEvent:a,activeNodeRect:u,attributes:I,isDragging:E,listeners:r?void 0:C,node:m,over:f,setNodeRef:g,setActivatorNodeRef:P,transform:_}}function w9(){return S.exports.useContext(gb)}const I9="Droppable",E9={timeout:25};function T9(t){let{data:e,disabled:n=!1,id:r,resizeObserverConfig:i}=t;const s=Dc(I9),{active:o,dispatch:a,over:l,measureDroppableContainers:u}=S.exports.useContext(pp),c=S.exports.useRef({disabled:n}),h=S.exports.useRef(!1),f=S.exports.useRef(null),p=S.exports.useRef(null),{disabled:w,updateMeasurementsFor:v,timeout:E}={...E9,...i},_=Gu(v!=null?v:r),m=S.exports.useCallback(()=>{if(!h.current){h.current=!0;return}p.current!=null&&clearTimeout(p.current),p.current=setTimeout(()=>{u(Array.isArray(_.current)?_.current:[_.current]),p.current=null},E)},[E]),g=fp({callback:m,disabled:w||!o}),T=S.exports.useCallback((I,A)=>{!g||(A&&(g.unobserve(A),h.current=!1),I&&g.observe(I))},[g]),[P,C]=zh(T),y=Gu(e);return S.exports.useEffect(()=>{!g||!P.current||(g.disconnect(),h.current=!1,g.observe(P.current))},[P,g]),Kn(()=>(a({type:et.RegisterDroppable,element:{id:r,key:s,disabled:n,node:P,rect:f,data:y}}),()=>a({type:et.UnregisterDroppable,key:s,id:r})),[r]),S.exports.useEffect(()=>{n!==c.current.disabled&&(a({type:et.SetDroppableDisabled,id:r,key:s,disabled:n}),c.current.disabled=n)},[r,s,n,a]),{active:o,rect:f,isOver:(l==null?void 0:l.id)===r,node:P,over:l,setNodeRef:C}}function kw(t,e,n){const r=t.slice();return r.splice(n<0?r.length+n:n,0,r.splice(e,1)[0]),r}function S9(t,e){return t.reduce((n,r,i)=>{const s=e.get(r);return s&&(n[i]=s),n},Array(t.length))}function gd(t){return t!==null&&t>=0}function R9(t,e){if(t===e)return!0;if(t.length!==e.length)return!1;for(let n=0;n<t.length;n++)if(t[n]!==e[n])return!1;return!0}function A9(t){return typeof t=="boolean"?{draggable:t,droppable:t}:t}const yb=t=>{let{rects:e,activeIndex:n,overIndex:r,index:i}=t;const s=kw(e,r,n),o=e[i],a=s[i];return!a||!o?null:{x:a.left-o.left,y:a.top-o.top,scaleX:a.width/o.width,scaleY:a.height/o.height}},_d={scaleX:1,scaleY:1},P9=t=>{var e;let{activeIndex:n,activeNodeRect:r,index:i,rects:s,overIndex:o}=t;const a=(e=s[n])!=null?e:r;if(!a)return null;if(i===n){const u=s[o];return u?{x:0,y:n<o?u.top+u.height-(a.top+a.height):u.top-a.top,..._d}:null}const l=C9(s,i,n);return i>n&&i<=o?{x:0,y:-a.height-l,..._d}:i<n&&i>=o?{x:0,y:a.height+l,..._d}:{x:0,y:0,..._d}};function C9(t,e,n){const r=t[e],i=t[e-1],s=t[e+1];return r?n<e?i?r.top-(i.top+i.height):s?s.top-(r.top+r.height):0:s?s.top-(r.top+r.height):i?r.top-(i.top+i.height):0:0}const vb="Sortable",wb=hr.createContext({activeIndex:-1,containerId:vb,disableTransforms:!1,items:[],overIndex:-1,useDragOverlay:!1,sortedRects:[],strategy:yb,disabled:{draggable:!1,droppable:!1}});function k9(t){let{children:e,id:n,items:r,strategy:i=yb,disabled:s=!1}=t;const{active:o,dragOverlay:a,droppableRects:l,over:u,measureDroppableContainers:c}=w9(),h=Dc(vb,n),f=Boolean(a.rect!==null),p=S.exports.useMemo(()=>r.map(C=>typeof C=="object"&&"id"in C?C.id:C),[r]),w=o!=null,v=o?p.indexOf(o.id):-1,E=u?p.indexOf(u.id):-1,_=S.exports.useRef(p),m=!R9(p,_.current),g=E!==-1&&v===-1||m,T=A9(s);Kn(()=>{m&&w&&c(p)},[m,p,w,c]),S.exports.useEffect(()=>{_.current=p},[p]);const P=S.exports.useMemo(()=>({activeIndex:v,containerId:h,disabled:T,disableTransforms:g,items:p,overIndex:E,useDragOverlay:f,sortedRects:S9(p,l),strategy:i}),[v,h,T.draggable,T.droppable,g,p,E,l,f,i]);return L(wb.Provider,{value:P,children:e})}const b9=t=>{let{id:e,items:n,activeIndex:r,overIndex:i}=t;return kw(n,r,i).indexOf(e)},x9=t=>{let{containerId:e,isSorting:n,wasDragging:r,index:i,items:s,newIndex:o,previousItems:a,previousContainerId:l,transition:u}=t;return!u||!r||a!==s&&i===o?!1:n?!0:o!==i&&e===l},D9={duration:200,easing:"ease"},Ib="transform",N9=Ku.Transition.toString({property:Ib,duration:0,easing:"linear"}),O9={roleDescription:"sortable"};function V9(t){let{disabled:e,index:n,node:r,rect:i}=t;const[s,o]=S.exports.useState(null),a=S.exports.useRef(n);return Kn(()=>{if(!e&&n!==a.current&&r.current){const l=i.current;if(l){const u=Wa(r.current,{ignoreTransform:!0}),c={x:l.left-u.left,y:l.top-u.top,scaleX:l.width/u.width,scaleY:l.height/u.height};(c.x||c.y)&&o(c)}}n!==a.current&&(a.current=n)},[e,n,r,i]),S.exports.useEffect(()=>{s&&o(null)},[s]),s}function L9(t){let{animateLayoutChanges:e=x9,attributes:n,disabled:r,data:i,getNewIndex:s=b9,id:o,strategy:a,resizeObserverConfig:l,transition:u=D9}=t;const{items:c,containerId:h,activeIndex:f,disabled:p,disableTransforms:w,sortedRects:v,overIndex:E,useDragOverlay:_,strategy:m}=S.exports.useContext(wb),g=M9(r,p),T=c.indexOf(o),P=S.exports.useMemo(()=>({sortable:{containerId:h,index:T,items:c},...i}),[h,i,T,c]),C=S.exports.useMemo(()=>c.slice(c.indexOf(o)),[c,o]),{rect:y,node:I,isOver:A,setNodeRef:b}=T9({id:o,data:P,disabled:g.droppable,resizeObserverConfig:{updateMeasurementsFor:C,...l}}),{active:M,activatorEvent:q,activeNodeRect:J,attributes:Ee,setNodeRef:de,listeners:X,isDragging:K,over:N,setActivatorNodeRef:G,transform:Q}=v9({id:o,data:P,attributes:{...O9,...n},disabled:g.draggable}),le=J3(b,de),re=Boolean(M),Ht=re&&!w&&gd(f)&&gd(E),Vt=!_&&K,Er=Vt&&Ht?Q:null,Ge=a!=null?a:m,Tr=Ht?Er!=null?Er:Ge({rects:v,activeNodeRect:J,activeIndex:f,overIndex:E,index:T}):null,ti=gd(f)&&gd(E)?s({id:o,items:c,activeIndex:f,overIndex:E}):T,Sr=M==null?void 0:M.id,_e=S.exports.useRef({activeId:Sr,items:c,newIndex:ti,containerId:h}),Ga=c!==_e.current.items,Yn=e({active:M,containerId:h,isDragging:K,isSorting:re,id:o,index:T,items:c,newIndex:_e.current.newIndex,previousItems:_e.current.items,previousContainerId:_e.current.containerId,transition:u,wasDragging:_e.current.activeId!=null}),to=V9({disabled:!Yn,index:T,node:I,rect:y});return S.exports.useEffect(()=>{re&&_e.current.newIndex!==ti&&(_e.current.newIndex=ti),h!==_e.current.containerId&&(_e.current.containerId=h),c!==_e.current.items&&(_e.current.items=c)},[re,ti,h,c]),S.exports.useEffect(()=>{if(Sr===_e.current.activeId)return;if(Sr&&!_e.current.activeId){_e.current.activeId=Sr;return}const no=setTimeout(()=>{_e.current.activeId=Sr},50);return()=>clearTimeout(no)},[Sr]),{active:M,activeIndex:f,attributes:Ee,data:P,rect:y,index:T,newIndex:ti,items:c,isOver:A,isSorting:re,isDragging:K,listeners:X,node:I,overIndex:E,over:N,setNodeRef:le,setActivatorNodeRef:G,setDroppableNodeRef:b,setDraggableNodeRef:de,transform:to!=null?to:Tr,transition:Rr()};function Rr(){if(to||Ga&&_e.current.newIndex===T)return N9;if(!(Vt&&!Sw(q)||!u)&&(re||Yn))return Ku.Transition.toString({...u,property:Ib})}}function M9(t,e){var n,r;return typeof t=="boolean"?{draggable:t,droppable:!1}:{draggable:(n=t==null?void 0:t.draggable)!=null?n:e.draggable,droppable:(r=t==null?void 0:t.droppable)!=null?r:e.droppable}}function Wh(t){if(!t)return!1;const e=t.data.current;return!!(e&&"sortable"in e&&typeof e.sortable=="object"&&"containerId"in e.sortable&&"items"in e.sortable&&"index"in e.sortable)}const F9=[ce.Down,ce.Right,ce.Up,ce.Left],U9=(t,e)=>{let{context:{active:n,collisionRect:r,droppableRects:i,droppableContainers:s,over:o,scrollableAncestors:a}}=e;if(F9.includes(t.code)){if(t.preventDefault(),!n||!r)return;const l=[];s.getEnabled().forEach(h=>{if(!h||h!=null&&h.disabled)return;const f=i.get(h.id);if(!!f)switch(t.code){case ce.Down:r.top<f.top&&l.push(h);break;case ce.Up:r.top>f.top&&l.push(h);break;case ce.Left:r.left>f.left&&l.push(h);break;case ce.Right:r.left<f.left&&l.push(h);break}});const u=_6({active:n,collisionRect:r,droppableRects:i,droppableContainers:l,pointerCoordinates:null});let c=sb(u,"id");if(c===(o==null?void 0:o.id)&&u.length>1&&(c=u[1].id),c!=null){const h=s.get(n.id),f=s.get(c),p=f?i.get(f.id):null,w=f==null?void 0:f.node.current;if(w&&p&&h&&f){const E=hp(w).some((C,y)=>a[y]!==C),_=Eb(h,f),m=$9(h,f),g=E||!_?{x:0,y:0}:{x:m?r.width-p.width:0,y:m?r.height-p.height:0},T={x:p.left,y:p.top};return g.x&&g.y?T:Hu(T,g)}}}};function Eb(t,e){return!Wh(t)||!Wh(e)?!1:t.data.current.sortable.containerId===e.data.current.sortable.containerId}function $9(t,e){return!Wh(t)||!Wh(e)||!Eb(t,e)?!1:t.data.current.sortable.index<e.data.current.sortable.index}const B9="_window_1ghap_1",z9="_folder_1ghap_25",j9="_expand_1ghap_61",q9="_link_1ghap_87",W9="_header_1ghap_139",G9="_crumbs_1ghap_169",H9="_crumb_1ghap_169",K9="_titleBar_1ghap_221",Q9="_titleBtns_1ghap_235",Y9="_icon_1ghap_273",X9="_outline_1ghap_287",J9="_opacity_1ghap_295",Z9="_wide_1ghap_303";var Kt={window:B9,folder:z9,expand:j9,link:q9,header:W9,crumbs:G9,crumb:H9,titleBar:K9,titleBtns:Q9,icon:Y9,outline:X9,opacity:J9,wide:Z9},Tb={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},TT=hr.createContext&&hr.createContext(Tb),xi=globalThis&&globalThis.__assign||function(){return xi=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t},xi.apply(this,arguments)},e5=globalThis&&globalThis.__rest||function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n};function Sb(t){return t&&t.map(function(e,n){return hr.createElement(e.tag,xi({key:n},e.attr),Sb(e.child))})}function Ot(t){return function(e){return hr.createElement(t5,xi({attr:xi({},t.attr)},e),Sb(t.child))}}function t5(t){var e=function(n){var r=t.attr,i=t.size,s=t.title,o=e5(t,["attr","size","title"]),a=i||n.size||"1em",l;return n.className&&(l=n.className),t.className&&(l=(l?l+" ":"")+t.className),hr.createElement("svg",xi({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,o,{className:l,style:xi(xi({color:t.color||n.color},n.style),t.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),s&&hr.createElement("title",null,s),t.children)};return TT!==void 0?hr.createElement(TT.Consumer,null,function(n){return e(n)}):e(Tb)}function n5(t){return Ot({tag:"svg",attr:{viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"desc",attr:{},child:[]},{tag:"path",attr:{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}},{tag:"path",attr:{d:"M18 15l-6 -6l-6 6h12",transform:"rotate(90 12 12)"}}]})(t)}function r5(t){return Ot({tag:"svg",attr:{viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"desc",attr:{},child:[]},{tag:"path",attr:{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}},{tag:"rect",attr:{x:"8",y:"8",width:"12",height:"12",rx:"2"}},{tag:"path",attr:{d:"M16 8v-2a2 2 0 0 0 -2 -2h-8a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h2"}}]})(t)}function ST(t){return Ot({tag:"svg",attr:{viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"desc",attr:{},child:[]},{tag:"path",attr:{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}},{tag:"path",attr:{d:"M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1"}},{tag:"path",attr:{d:"M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z"}},{tag:"path",attr:{d:"M16 5l3 3"}}]})(t)}function RT(t){return Ot({tag:"svg",attr:{viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"desc",attr:{},child:[]},{tag:"path",attr:{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}},{tag:"path",attr:{d:"M11 7h-5a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-5"}},{tag:"line",attr:{x1:"10",y1:"14",x2:"20",y2:"4"}},{tag:"polyline",attr:{points:"15 4 20 4 20 9"}}]})(t)}function i5(t){return Ot({tag:"svg",attr:{viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"desc",attr:{},child:[]},{tag:"path",attr:{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}},{tag:"path",attr:{d:"M10 14a3.5 3.5 0 0 0 5 0l4 -4a3.5 3.5 0 0 0 -5 -5l-.5 .5"}},{tag:"path",attr:{d:"M14 10a3.5 3.5 0 0 0 -5 0l-4 4a3.5 3.5 0 0 0 5 5l.5 -.5"}}]})(t)}function s5(t){return Ot({tag:"svg",attr:{viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"desc",attr:{},child:[]},{tag:"path",attr:{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}},{tag:"line",attr:{x1:"4",y1:"7",x2:"20",y2:"7"}},{tag:"line",attr:{x1:"10",y1:"11",x2:"10",y2:"17"}},{tag:"line",attr:{x1:"14",y1:"11",x2:"14",y2:"17"}},{tag:"path",attr:{d:"M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"}},{tag:"path",attr:{d:"M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"}}]})(t)}function o5(t){return Ot({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"44",d:"M102 256h308m-308-80h308M102 336h308"}}]})(t)}function AT(t){return Ot({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"}},{tag:"path",attr:{d:"M11 18c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm-2-8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}}]})(t)}function Rb(t){return Ot({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M572.694 292.093L500.27 416.248A63.997 63.997 0 0 1 444.989 448H45.025c-18.523 0-30.064-20.093-20.731-36.093l72.424-124.155A64 64 0 0 1 152 256h399.964c18.523 0 30.064 20.093 20.73 36.093zM152 224h328v-48c0-26.51-21.49-48-48-48H272l-64-64H48C21.49 64 0 85.49 0 112v278.046l69.077-118.418C86.214 242.25 117.989 224 152 224z"}}]})(t)}function Ab(t){return Ot({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M464,128H272L208,64H48A48,48,0,0,0,0,112V400a48,48,0,0,0,48,48H464a48,48,0,0,0,48-48V176A48,48,0,0,0,464,128ZM359.5,296a16,16,0,0,1-16,16h-64v64a16,16,0,0,1-16,16h-16a16,16,0,0,1-16-16V312h-64a16,16,0,0,1-16-16V280a16,16,0,0,1,16-16h64V200a16,16,0,0,1,16-16h16a16,16,0,0,1,16,16v64h64a16,16,0,0,1,16,16Z"}}]})(t)}function a5(t){return Ot({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M464 128H272l-64-64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V176c0-26.51-21.49-48-48-48z"}}]})(t)}function PT(t){const[e]=Y(j1),{attributes:n,listeners:r,setNodeRef:i,transform:s,transition:o}=L9({id:t.id,data:{parentId:t.parentId},disabled:!e}),a={transform:Ku.Transform.toString(s),transition:o};return L("div",{ref:i,style:a,...n,...r,children:t.children})}function l5({bookmarksCb:t}){const[,e]=Y(cf),[n]=Y($1),[r]=Y(B1),[,i]=Y(tc);S.exports.useState(""),S.exports.useState("");const[,s]=Y(df),[,o]=Y(sa),[,a]=Y(nc),[l,u]=Y(j1),[c,h]=Y(q1),{id:f,title:p,children:w}=n,[v,E]=Y(_N),_=p6(dT(Cw),dT(Aw,{coordinateGetter:U9}));S.exports.useEffect(()=>{if(w!==void 0){const y=w.map(I=>I.id);E(y)}},[w]);function m(y,I,A){y.preventDefault(),y.stopPropagation(),i(!0),o(I),s(A),a({x:y.clientX,y:y.clientY})}function g(y){!l&&e(y)}function T(y,I,A){chrome.bookmarks.move(y,{index:I,parentId:A},()=>{console.log("moved bookmark: ",y," to index: ",I," in folder: ",A),t()})}function P(y,I,A,b){try{if(I>A){const M=I+1;T(y,M,b)}else T(y,I,b)}catch(M){console.log(M)}}if(w==null)return L("div",{children:"Loading..."});return ee("div",{className:Kt.window,children:[ee("div",{className:Kt.header,children:[L("div",{className:Kt.crumbs,children:r.map((y,I)=>ee("div",{className:Kt.crumb,children:[I!==r.length-1&&L(n5,{}),L("p",{onClick:()=>g(y.id),children:y.title},y.id)]}))}),ee("div",{className:Kt.titleBar,children:[ee("h2",{onContextMenu:y=>{m(y,f,!0)},children:[L(Rb,{}),p]}),ee("div",{className:Kt.titleBtns,children:[ee("button",{onClick:()=>h(!c),children:[L(Ab,{size:"1rem"})," New Folder"]}),ee("button",{onClick:()=>u(!l),children:[L(o5,{size:"1.25rem"})," Reorder Items"]})]})]})]}),L(g9,{sensors:_,collisionDetection:g6,onDragEnd:C,children:L(k9,{items:v,strategy:P9,children:w&&v.map(y=>{const I=w.find(A=>A.id===y);if(I!=null)return I.children?L(PT,{id:y,children:L("div",{className:`${Kt.folder} ${l&&Kt.outline}`,children:ee("h3",{onContextMenu:b=>m(b,I.id,!0),onClick:()=>g(I.id),children:[ee("div",{className:`${Kt.icon} ${l&&Kt.wide}`,children:[l&&L(AT,{size:"1rem",color:"var(--clr-primary-hover)"}),L(a5,{size:".75rem"})]}),I.title]})})},y):L(PT,{id:y,parentId:I.parentId,children:L("div",{onContextMenu:b=>m(b,I.id,!1),className:`${Kt.link} ${l&&Kt.outline}`,children:ee("a",{href:!l&&I.url,target:"_blank",rel:"noopener noreferrer",children:[ee("div",{className:`${Kt.icon} ${l&&Kt.wide}`,children:[l&&L(AT,{size:"1rem",color:"var(--clr-primary-hover)"}),L(i5,{})]}),I.title]})})},y)})})})]});function C(y){const{active:I,over:A}=y;if(I.id!==A.id){E(q=>{const J=q.indexOf(I.id),Ee=q.indexOf(A.id);return kw(q,J,Ee)});const b=v.indexOf(A.id),M=v.indexOf(I.id);P(I.id,b,M,I.data.current.parentId)}}}function u5(t){return Ot({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"}}]})(t)}function c5(t){return Ot({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M715.8 493.5L335 165.1c-14.2-12.2-35-1.2-35 18.5v656.8c0 19.7 20.8 30.7 35 18.5l380.8-328.4c10.9-9.4 10.9-27.6 0-37z"}}]})(t)}function d5(t){return Ot({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"m10 15.586-3.293-3.293-1.414 1.414L10 18.414l9.707-9.707-1.414-1.414z"}}]})(t)}function h5(t){return Ot({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{id:"Logout"},child:[{tag:"g",attr:{},child:[{tag:"path",attr:{d:"M20.968,18.448a2.577,2.577,0,0,1-2.73,2.5c-2.153.012-4.306,0-6.459,0a.5.5,0,0,1,0-1c2.2,0,4.4.032,6.6,0,1.107-.016,1.589-.848,1.589-1.838V5.647A1.546,1.546,0,0,0,19,4.175a3.023,3.023,0,0,0-1.061-.095H11.779a.5.5,0,0,1,0-1c2.224,0,4.465-.085,6.687,0a2.567,2.567,0,0,1,2.5,2.67Z"}},{tag:"path",attr:{d:"M3.176,11.663a.455.455,0,0,0-.138.311c0,.015,0,.028-.006.043s0,.027.006.041a.457.457,0,0,0,.138.312l3.669,3.669a.5.5,0,0,0,.707-.707L4.737,12.516H15.479a.5.5,0,0,0,0-1H4.737L7.552,8.7a.5.5,0,0,0-.707-.707Z"}}]}]}]})(t)}const f5="_child_zvdhr_1",p5="_sidebar_zvdhr_9",m5="_logo_zvdhr_19",g5="_list_zvdhr_45",_5="_folder_zvdhr_65",y5="_title_zvdhr_97",v5="_caret_zvdhr_109",w5="_rename_zvdhr_131";var ws={child:f5,sidebar:p5,logo:m5,list:g5,folder:_5,title:y5,caret:v5,rename:w5};function Pb({bookmark:t,onRename:e}){const n=S.exports.useMemo(()=>t.id==="1"?ye(!0):ye(!1),[t.id]),r=S.exports.useMemo(()=>ye(t.title),[t.title]),[i,s]=Y(n),[,o]=Y(cf),[a]=Y(sa),[,l]=Y(tc);Y(yg);const[,u]=Y(sa),[,c]=Y(nc),[h,f]=Y(z1),[p,w]=Y(r),[,v]=Y(df),{id:E,title:_,children:m}=t,g=S.exports.useRef(null);S.exports.useEffect(()=>{g.current&&g.current.focus()},[h]),Il(g,()=>f(!1));function T(A){A.stopPropagation(),o(E)}function P(A){A.stopPropagation(),s(!i)}function C(A){A.preventDefault(),A.stopPropagation(),v(!0),l(!0),u(A.currentTarget.id),c({x:A.clientX,y:A.clientY})}function y(A){A.preventDefault(),console.log(p),e(p),f(!1)}const I=h&&a===E;return ee("div",{className:ws.folder,children:[ee("div",{id:E,onContextMenu:C,onClick:I?void 0:T,className:ws.title,children:[t.hasFolders&&L("div",{children:L("div",{onClick:P,className:ws.caret,children:i?L(u5,{}):L(c5,{})})}),I?ee("form",{ref:g,onSubmit:y,className:ws.rename,children:[L("input",{autoFocus:!0,onChange:A=>w(A.target.value),value:p,type:"text"}),L("button",{onClick:y,type:"submit",children:L(d5,{size:"2rem"})})]}):L("h2",{children:_})]}),i&&m.map(A=>{if(A.children)return L(Pb,{onRename:e,bookmark:A},A.id)})]})}function I5({onRename:t}){const[e]=Y(U1);return ee("div",{className:ws.sidebar,children:[L("div",{className:ws.logo,children:L("h1",{children:"Bookger"})}),ee("div",{className:ws.list,children:[e.map(n=>{if(n.children)return L(Pb,{onRename:t,bookmark:n},n.id)}),L("div",{children:L(h5,{color:"white",size:30,style:{margin:"10px",cursor:"pointer"},onClick:()=>{ww.signOut(),d()}})})]})]})}const E5="_container_cyo60_1",T5="_wrapper_cyo60_13",S5="_rule_cyo60_55",R5="_edit_cyo60_63";var go={container:E5,wrapper:T5,rule:S5,edit:R5};function A5(t){return Ot({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{fillRule:"nonzero",d:"M17 13a4 4 0 1 1-4 4h-2a4 4 0 1 1-.535-2h3.07A3.998 3.998 0 0 1 17 13zM7 15a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm10 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zM16 3a4 4 0 0 1 4 4v3h2v2H2v-2h2V7a4 4 0 0 1 4-4h8zm0 2H8c-1.054 0-2 .95-2 2v3h12V7c0-1.054-.95-2-2-2z"}}]}]})(t)}const P5=ye({x:0,y:0}),C5=S.exports.forwardRef(function({onEdit:e},n){const[r]=Y(nc),[,i]=Y(z1),[s,o]=Y(my),[,a]=Y(cf),[l]=Y(sa),[,u]=Y(tc),[c]=Y(df),[h,f]=Y(yN),[p,w]=Y(vN),[,v]=Y(G1),[E,_]=Y(P5);S.exports.useEffect(()=>{f(!1),v(!1)},[]),S.exports.useEffect(()=>{chrome.bookmarks.get(l,I=>{I[0]&&w(I[0])})},[]),S.exports.useLayoutEffect(()=>{const{x:I,y:A}=r,{width:b,height:M}=n.current.getBoundingClientRect(),{innerWidth:q,innerHeight:J}=window,Ee=I+b>q?q-b:I,de=A+M>J?J-M:A;_({x:Ee,y:de})},[]);function m(){o(!0)}function g(){i(!0),u(!1)}function T(I){I.preventDefault(),e({title:p.title,url:p.url})}function P(){navigator.clipboard.writeText(p.url),u(!1)}function C(I){chrome.bookmarks.get(l,A=>{A[0].url&&(I=="tab"?chrome.tabs.create({url:A[0].url,active:!1}):I=="window"?chrome.windows.create({url:A[0].url,focused:!0}):I=="incognito"&&chrome.windows.create({url:A[0].url,focused:!0,incognito:!0})),u(!1)})}const y=s?"none":"block";return L("div",{ref:n,style:{top:E.y,left:E.x},className:go.wrapper,children:L("div",{style:{display:y},className:go.container,children:h?L("div",{className:go.edit,children:ee("form",{children:[ee("div",{children:[L("label",{htmlFor:"title",children:"Title"}),L("input",{type:"text",name:"title",id:"title",value:p.title,onChange:I=>w({...p,title:I.target.value})})]}),ee("div",{children:[L("label",{htmlFor:"url",children:"URL"}),L("input",{type:"url",name:"url",id:"url",value:p.url,onChange:I=>w({...p,url:I.target.value}),pattern:"https://.*"})]}),L("button",{onClick:T,children:"Done"})]})}):ee("div",{children:[c?ee("span",{onClick:g,children:[L(ST,{})," Rename"]}):ee("span",{onClick:()=>f(!0),children:[L(ST,{})," Edit info"]}),ee("span",{onClick:m,children:[L(s5,{})," Delete"]}),L("span",{className:go.rule}),c?ee("span",{onClick:()=>a(l),children:[L(Rb,{})," Explore"]}):ee(py,{children:[L("span",{className:go.rule}),ee("span",{onClick:()=>C("tab"),children:[L(RT,{})," Open in new tab"]}),ee("span",{onClick:()=>C("window"),children:[L(RT,{})," Open in new window"]}),ee("span",{onClick:()=>C("incognito"),children:[L(A5,{})," Open incognito"]}),L("span",{className:go.rule}),ee("span",{onClick:P,children:[L(r5,{})," Copy URL"]})]})]})})})}),k5="_wrapper_1kojm_1";var b5={wrapper:k5};const x5=S.exports.forwardRef(function(e,n){const[,r]=Y(W1);return L("div",{ref:n,className:b5.wrapper,children:ee("form",{children:[ee("h3",{children:[L(Ab,{})," New Folder"]}),ee("div",{children:[L("label",{htmlFor:"title",children:"New Folder Name"}),L("input",{type:"text",name:"title",id:"title",onChange:i=>r(i.target.value)})]}),L("button",{onClick:e.onNewFolder,children:"Done"})]})})}),D5="_container_16xwf_1",N5="_wrapper_16xwf_13",O5="_btns_16xwf_73";var Sm={container:D5,wrapper:N5,btns:O5};const V5=ye(""),L5=ye({x:0,y:0}),M5=S.exports.forwardRef(function({onDelete:e},n){const[r]=Y(nc),[i]=Y(sa),[s,o]=Y(V5),[,a]=Y(my),[,l]=Y(tc),[u,c]=Y(L5);S.exports.useEffect(()=>{chrome.bookmarks.get(i,p=>{o(p[0].title)})},[]),S.exports.useLayoutEffect(()=>{const{x:p,y:w}=r,{width:v,height:E}=n.current.getBoundingClientRect(),{innerWidth:_,innerHeight:m}=window,g=p+v>_?_-v:p,T=w+E>m?m-E:w;c({x:g,y:T})},[]);function h(){console.log("from delete confirm: "+i),e()}function f(){l(!1),a(!1)}return L("div",{ref:n,style:{top:u.y,left:u.x},className:Sm.wrapper,children:ee("div",{className:Sm.container,children:[L("h3",{children:"Are you sure you want to delete the item"}),ee("h3",{children:[s," ?"]}),L("p",{children:"Warning: This action is not reversible!"}),ee("div",{className:Sm.btns,children:[L("button",{onClick:h,children:"Yes"}),L("button",{onClick:f,children:"No"})]})]})})}),F5="_loginDiv_1j8jf_63",U5="_login_1j8jf_63",$5="_password_1j8jf_1",B5="_username_1j8jf_1",z5="_error_1j8jf_267",j5="_inputField_1j8jf_275",q5="_modal_1j8jf_307",W5="_smile_1j8jf_1",G5="_shake_1j8jf_1";var yd={loginDiv:F5,login:U5,password:$5,username:B5,error:z5,inputField:j5,modal:q5,"modal-content":"_modal-content_1j8jf_327",smile:W5,shake:G5};const H5=()=>{const[t,e]=S.exports.useState(""),[n,r]=S.exports.useState("");S.exports.useState("");const i=()=>{zR(ww,t,n).then(s=>{s.user}).catch(s=>{s.code,s.message})};return L(py,{children:ee("div",{className:yd.loginDiv,id:"loginDiv",children:[L("h1",{children:"Login"}),ee("div",{className:yd.inputField,children:[L("input",{type:"text",id:"username",onChange:s=>e(s.target.value),required:"","aria-invalid":"false"}),L("label",{children:"Email or Username"})]}),ee("div",{className:yd.inputField,children:[L("input",{type:"password",id:"password",required:"","aria-invalid":"false",onChange:s=>r(s.target.value)}),L("label",{children:"Password"})]}),L("div",{className:"error","aria-errormessage":"Invalid username or password.",id:"error"}),L("button",{onClick:i,id:"login",className:yd.login,children:"Login"})]})})};function K5(){const[t,e]=Y(my),[n,r]=Y(U1),[i]=Y(cf),[,s]=Y(yg),[o]=Y(W1),[,a]=Y($1),[,l]=Y(B1),[u]=Y(sa),[c,h]=Y(tc),[f]=Y(df),[p,w]=Y(q1),[v,E]=Y(G1),_=S.exports.useRef(null),m=S.exports.useRef(null),g=S.exports.useRef(null),T=S.exports.useRef(null);Il(_,()=>h(!1)),Il(m,()=>e(!1)),Il(g,()=>w(!1)),Il(T,()=>E(!1));const P=S.exports.useCallback(()=>{chrome.bookmarks.getTree(X=>{Ee(X),r(X[0].children),I(X[0].children)})}),C=S.exports.useCallback(()=>{chrome.bookmarks.getSubTree(i,X=>{console.log("subTree",X),a(X[0])})},[i]),y=S.exports.useCallback((X,K)=>{for(let N=0;N<X.length;N++){if(X[N].id==K)return console.log("bookmarks[i]",X[N]),X[N];if(X[N].children!=null){let G=y(X[N].children,K);if(G!=null)return console.log("result",G),G}}return null});S.exports.useEffect(()=>{P(),C(),b(i)},[i]);function I(X){try{X.forEach(K=>{K.children&&(K.children.some(N=>N.children)?K.hasFolders=!0:K.hasFolders=!1,I(K.children))})}catch(K){console.error(K)}}S.exports.useEffect(()=>{I(n)},[n]);const A=[];function b(X){const K=y(n,X);K!=null&&K.id&&(A.push({id:K.id,title:K.title}),l(A),b(K.parentId)),console.log("parentsArr",A)}S.exports.useEffect(()=>{M2(ww,X=>{X&&(s(!0),X.uid)})},[]);function M(){console.log(u),f?chrome.bookmarks.removeTree(u,()=>{e(!1),h(!1),P(),C()}):chrome.bookmarks.remove(u,()=>{e(!1),h(!1),P(),C()})}function q(X){chrome.bookmarks.update(u,{title:X},()=>{h(!1),P(),C()})}function J(X){chrome.bookmarks.update(u,{title:X.title,url:X.url},()=>{h(!1),P(),C()})}async function Ee(X){console.log("sendBookmarkDataToFirestore",X);try{const K=[];X.forEach(async N=>{const G={URL:N.url||"",title:N.title||"",folderCategory:N.parentId||"",timestamp:Ak()};if(console.log("bookmarkData",G),K.push(d_(Bu(X3,"bookmarks",N.id),G)),N.children&&N.children.length>0){const Q=await Ee(N.children);K.push(...Q)}}),await Promise.all(K),console.log("Bookmark data successfully sent to Firestore.")}catch(K){console.error("Error sending bookmark data to Firestore: ",K)}}function de(){w(!0),chrome.bookmarks.create({parentId:i,title:o!==""?o:"New Folder"},X=>{P(),C()})}return ee("div",{className:Q0.main,children:[yg?ee("div",{className:Q0.container,children:[L(I5,{onRename:q}),L(l5,{bookmarksCb:P,onRename:q})]}):L(H5,{}),c&&L(C5,{onEdit:J,ref:_}),t&&L(M5,{onDelete:M,ref:m}),p&&L(x5,{onNewFolder:de,ref:g})]})}const bw=document.createElement("div");bw.id="crx-root";document.body.append(bw);Rm.createRoot(bw).render(L(hr.StrictMode,{children:L(K5,{})}));
