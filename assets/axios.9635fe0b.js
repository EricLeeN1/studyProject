import{v as e}from"./index.4db4bd0a.js";import{d as t,V as r,c as n}from"./vendor.16553afa.js";var o=function(e,t){return function(){for(var r=new Array(arguments.length),n=0;n<r.length;n++)r[n]=arguments[n];return e.apply(t,r)}},s=Object.prototype.toString;function a(e){return"[object Array]"===s.call(e)}function i(e){return void 0===e}function u(e){return null!==e&&"object"==typeof e}function c(e){if("[object Object]"!==s.call(e))return!1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}function f(e){return"[object Function]"===s.call(e)}function p(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),a(e))for(var r=0,n=e.length;r<n;r++)t.call(null,e[r],r,e);else for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(null,e[o],o,e)}var d={isArray:a,isArrayBuffer:function(e){return"[object ArrayBuffer]"===s.call(e)},isBuffer:function(e){return null!==e&&!i(e)&&null!==e.constructor&&!i(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:u,isPlainObject:c,isUndefined:i,isDate:function(e){return"[object Date]"===s.call(e)},isFile:function(e){return"[object File]"===s.call(e)},isBlob:function(e){return"[object Blob]"===s.call(e)},isFunction:f,isStream:function(e){return u(e)&&f(e.pipe)},isURLSearchParams:function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)},forEach:p,merge:function e(){var t={};function r(r,n){c(t[n])&&c(r)?t[n]=e(t[n],r):c(r)?t[n]=e({},r):a(r)?t[n]=r.slice():t[n]=r}for(var n=0,o=arguments.length;n<o;n++)p(arguments[n],r);return t},extend:function(e,t,r){return p(t,(function(t,n){e[n]=r&&"function"==typeof t?o(t,r):t})),e},trim:function(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")},stripBOM:function(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e}};function l(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var h=function(e,t,r){if(!t)return e;var n;if(r)n=r(t);else if(d.isURLSearchParams(t))n=t.toString();else{var o=[];d.forEach(t,(function(e,t){null!=e&&(d.isArray(e)?t+="[]":e=[e],d.forEach(e,(function(e){d.isDate(e)?e=e.toISOString():d.isObject(e)&&(e=JSON.stringify(e)),o.push(l(t)+"="+l(e))})))})),n=o.join("&")}if(n){var s=e.indexOf("#");-1!==s&&(e=e.slice(0,s)),e+=(-1===e.indexOf("?")?"?":"&")+n}return e};function m(){this.handlers=[]}m.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},m.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},m.prototype.forEach=function(e){d.forEach(this.handlers,(function(t){null!==t&&e(t)}))};var g=m,y=function(e,t,r){return d.forEach(r,(function(r){e=r(e,t)})),e},v=function(e){return!(!e||!e.__CANCEL__)},w=function(e,t){d.forEach(e,(function(r,n){n!==t&&n.toUpperCase()===t.toUpperCase()&&(e[t]=r,delete e[n])}))},b=function(e,t,r,n,o){return function(e,t,r,n,o){return e.config=t,r&&(e.code=r),e.request=n,e.response=o,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e}(new Error(e),t,r,n,o)},E=d.isStandardBrowserEnv()?{write:function(e,t,r,n,o,s){var a=[];a.push(e+"="+encodeURIComponent(t)),d.isNumber(r)&&a.push("expires="+new Date(r).toGMTString()),d.isString(n)&&a.push("path="+n),d.isString(o)&&a.push("domain="+o),!0===s&&a.push("secure"),document.cookie=a.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}},x=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"],j=d.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a");function n(e){var n=e;return t&&(r.setAttribute("href",n),n=r.href),r.setAttribute("href",n),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:"/"===r.pathname.charAt(0)?r.pathname:"/"+r.pathname}}return e=n(window.location.href),function(t){var r=d.isString(t)?n(t):t;return r.protocol===e.protocol&&r.host===e.host}}():function(){return!0},C=function(e){return new Promise((function(t,r){var n=e.data,o=e.headers;d.isFormData(n)&&delete o["Content-Type"];var s=new XMLHttpRequest;if(e.auth){var a=e.auth.username||"",i=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.Authorization="Basic "+btoa(a+":"+i)}var u,c,f=(u=e.baseURL,c=e.url,u&&!/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(c)?function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}(u,c):c);if(s.open(e.method.toUpperCase(),h(f,e.params,e.paramsSerializer),!0),s.timeout=e.timeout,s.onreadystatechange=function(){if(s&&4===s.readyState&&(0!==s.status||s.responseURL&&0===s.responseURL.indexOf("file:"))){var n,o,a,i,u,c="getAllResponseHeaders"in s?(n=s.getAllResponseHeaders(),u={},n?(d.forEach(n.split("\n"),(function(e){if(i=e.indexOf(":"),o=d.trim(e.substr(0,i)).toLowerCase(),a=d.trim(e.substr(i+1)),o){if(u[o]&&x.indexOf(o)>=0)return;u[o]="set-cookie"===o?(u[o]?u[o]:[]).concat([a]):u[o]?u[o]+", "+a:a}})),u):u):null,f={data:e.responseType&&"text"!==e.responseType?s.response:s.responseText,status:s.status,statusText:s.statusText,headers:c,config:e,request:s};!function(e,t,r){var n=r.config.validateStatus;r.status&&n&&!n(r.status)?t(b("Request failed with status code "+r.status,r.config,null,r.request,r)):e(r)}(t,r,f),s=null}},s.onabort=function(){s&&(r(b("Request aborted",e,"ECONNABORTED",s)),s=null)},s.onerror=function(){r(b("Network Error",e,null,s)),s=null},s.ontimeout=function(){var t="timeout of "+e.timeout+"ms exceeded";e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),r(b(t,e,"ECONNABORTED",s)),s=null},d.isStandardBrowserEnv()){var p=(e.withCredentials||j(f))&&e.xsrfCookieName?E.read(e.xsrfCookieName):void 0;p&&(o[e.xsrfHeaderName]=p)}if("setRequestHeader"in s&&d.forEach(o,(function(e,t){void 0===n&&"content-type"===t.toLowerCase()?delete o[t]:s.setRequestHeader(t,e)})),d.isUndefined(e.withCredentials)||(s.withCredentials=!!e.withCredentials),e.responseType)try{s.responseType=e.responseType}catch(l){if("json"!==e.responseType)throw l}"function"==typeof e.onDownloadProgress&&s.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&s.upload&&s.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then((function(e){s&&(s.abort(),r(e),s=null)})),n||(n=null),s.send(n)}))},R={"Content-Type":"application/x-www-form-urlencoded"};function S(e,t){!d.isUndefined(e)&&d.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var A,O={adapter:(("undefined"!=typeof XMLHttpRequest||"undefined"!=typeof process&&"[object process]"===Object.prototype.toString.call(process))&&(A=C),A),transformRequest:[function(e,t){return w(t,"Accept"),w(t,"Content-Type"),d.isFormData(e)||d.isArrayBuffer(e)||d.isBuffer(e)||d.isStream(e)||d.isFile(e)||d.isBlob(e)?e:d.isArrayBufferView(e)?e.buffer:d.isURLSearchParams(e)?(S(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):d.isObject(e)?(S(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(t){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300}};O.headers={common:{Accept:"application/json, text/plain, */*"}},d.forEach(["delete","get","head"],(function(e){O.headers[e]={}})),d.forEach(["post","put","patch"],(function(e){O.headers[e]=d.merge(R)}));var N=O;function U(e){e.cancelToken&&e.cancelToken.throwIfRequested()}var B=function(e){return U(e),e.headers=e.headers||{},e.data=y(e.data,e.headers,e.transformRequest),e.headers=d.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),d.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||N.adapter)(e).then((function(t){return U(e),t.data=y(t.data,t.headers,e.transformResponse),t}),(function(t){return v(t)||(U(e),t&&t.response&&(t.response.data=y(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))},T=function(e,t){t=t||{};var r={},n=["url","method","data"],o=["headers","auth","proxy","params"],s=["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","timeoutMessage","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","decompress","maxContentLength","maxBodyLength","maxRedirects","transport","httpAgent","httpsAgent","cancelToken","socketPath","responseEncoding"],a=["validateStatus"];function i(e,t){return d.isPlainObject(e)&&d.isPlainObject(t)?d.merge(e,t):d.isPlainObject(t)?d.merge({},t):d.isArray(t)?t.slice():t}function u(n){d.isUndefined(t[n])?d.isUndefined(e[n])||(r[n]=i(void 0,e[n])):r[n]=i(e[n],t[n])}d.forEach(n,(function(e){d.isUndefined(t[e])||(r[e]=i(void 0,t[e]))})),d.forEach(o,u),d.forEach(s,(function(n){d.isUndefined(t[n])?d.isUndefined(e[n])||(r[n]=i(void 0,e[n])):r[n]=i(void 0,t[n])})),d.forEach(a,(function(n){n in t?r[n]=i(e[n],t[n]):n in e&&(r[n]=i(void 0,e[n]))}));var c=n.concat(o).concat(s).concat(a),f=Object.keys(e).concat(Object.keys(t)).filter((function(e){return-1===c.indexOf(e)}));return d.forEach(f,u),r};function P(e){this.defaults=e,this.interceptors={request:new g,response:new g}}P.prototype.request=function(e){"string"==typeof e?(e=arguments[1]||{}).url=arguments[0]:e=e||{},(e=T(this.defaults,e)).method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var t=[B,void 0],r=Promise.resolve(e);for(this.interceptors.request.forEach((function(e){t.unshift(e.fulfilled,e.rejected)})),this.interceptors.response.forEach((function(e){t.push(e.fulfilled,e.rejected)}));t.length;)r=r.then(t.shift(),t.shift());return r},P.prototype.getUri=function(e){return e=T(this.defaults,e),h(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},d.forEach(["delete","get","head","options"],(function(e){P.prototype[e]=function(t,r){return this.request(T(r||{},{method:e,url:t,data:(r||{}).data}))}})),d.forEach(["post","put","patch"],(function(e){P.prototype[e]=function(t,r,n){return this.request(T(n||{},{method:e,url:t,data:r}))}}));var L=P;function q(e){this.message=e}q.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},q.prototype.__CANCEL__=!0;var k=q;function D(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var r=this;e((function(e){r.reason||(r.reason=new k(e),t(r.reason))}))}D.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},D.source=function(){var e;return{token:new D((function(t){e=t})),cancel:e}};var F=D;function H(e){var t=new L(e),r=o(L.prototype.request,t);return d.extend(r,L.prototype,t),d.extend(r,t),r}var z=H(N);z.Axios=L,z.create=function(e){return H(T(z.defaults,e))},z.Cancel=k,z.CancelToken=F,z.isCancel=v,z.all=function(e){return Promise.all(e)},z.spread=function(e){return function(t){return e.apply(null,t)}},z.isAxiosError=function(e){return"object"==typeof e&&!0===e.isAxiosError};var M=z,_=z;M.default=_;var I=M;const $="https://api.github.com";console.log($);const X=I.create({baseURL:$,timeout:2e4});X.interceptors.request.use((e=>e),(e=>Promise.reject(e))),X.interceptors.response.use((e=>e),(t=>{if(t.response&&t.response.data){const r=t.response.status,n=t.response.data.message;e.error(`Code: ${r}, Message: ${n}`),console.error("[Axios Error]",t.response)}else e.error(`${t}`);return Promise.reject(t)}));const V=t({setup:()=>(X.get("/users/XPoet").then((e=>{console.log("res",e)})).catch((e=>{console.log("err",err)})),{})});V.render=function(e,t,o,s,a,i){return r(),n("div")};export default V;