!function(){"use strict"
var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{}
function e(t){var e=t.default
if("function"==typeof e){var n=function(){return e.apply(this,arguments)}
n.prototype=e.prototype}else n={}
return Object.defineProperty(n,"__esModule",{value:!0
}),Object.keys(t).forEach((function(e){
var r=Object.getOwnPropertyDescriptor(t,e)
Object.defineProperty(n,e,r.get?r:{enumerable:!0,get:function(){return t[e]}})
})),n}var n,r,o={exports:{}}
function i(){if(r)return n
function t(t,e,n,r,o,i){return{tag:t,key:e,attrs:n,children:r,text:o,dom:i,
domSize:void 0,state:void 0,events:void 0,instance:void 0}}
return r=1,t.normalize=function(e){
return Array.isArray(e)?t("[",void 0,void 0,t.normalizeChildren(e),void 0,void 0):null==e||"boolean"==typeof e?null:"object"==typeof e?e:t("#",void 0,void 0,String(e),void 0,void 0)
},t.normalizeChildren=function(e){var n=[]
if(e.length){
for(var r=null!=e[0]&&null!=e[0].key,o=1;o<e.length;o++)if((null!=e[o]&&null!=e[o].key)!==r)throw new TypeError(!r||null==e[o]&&"boolean"!=typeof e[o]?"In fragments, vnodes must either all have keys or none have keys.":"In fragments, vnodes must either all have keys or none have keys. You may wish to consider using an explicit keyed empty fragment, m.fragment({key: ...}), instead of a hole.")
for(o=0;o<e.length;o++)n[o]=t.normalize(e[o])}return n},n=t}
var a,s,l=i(),u=function(){var t,e=arguments[this],n=this+1
if(null==e?e={}:("object"!=typeof e||null!=e.tag||Array.isArray(e))&&(e={},n=this),
arguments.length===n+1)t=arguments[n],Array.isArray(t)||(t=[t])
else for(t=[];n<arguments.length;)t.push(arguments[n++])
return l("",e.key,e,t)}
function c(){return s?a:(s=1,a={}.hasOwnProperty)}
var f=i(),h=u,p=c(),d=/(?:(^|#|\.)([^#\.\[\]]+))|(\[(.+?)(?:\s*=\s*("|'|)((?:\\["'\]]|.)*?)\5)?\])/g,v={}
function m(t){for(var e in t)if(p.call(t,e))return!1
return!0}function g(t){for(var e,n="div",r=[],o={};e=d.exec(t);){
var i=e[1],a=e[2]
if(""===i&&""!==a)n=a
else if("#"===i)o.id=a
else if("."===i)r.push(a)
else if("["===e[3][0]){var s=e[6]
s&&(s=s.replace(/\\(["'])/g,"$1").replace(/\\\\/g,"\\")),"class"===e[4]?r.push(s):o[e[4]]=""===s?s:s||!0
}}return r.length>0&&(o.className=r.join(" ")),v[t]={tag:n,attrs:o}}
function b(t,e){var n=e.attrs,r=p.call(n,"class"),o=r?n.class:n.className
if(e.tag=t.tag,e.attrs={},!m(t.attrs)&&!m(n)){var i={}
for(var a in n)p.call(n,a)&&(i[a]=n[a])
n=i}
for(var a in t.attrs)p.call(t.attrs,a)&&"className"!==a&&!p.call(n,a)&&(n[a]=t.attrs[a])
for(var a in null==o&&null==t.attrs.className||(n.className=null!=o?null!=t.attrs.className?String(t.attrs.className)+" "+String(o):o:null!=t.attrs.className?t.attrs.className:null),
r&&(n.class=null),n)if(p.call(n,a)&&"key"!==a){e.attrs=n
break}return e}var y=function(t){
if(null==t||"string"!=typeof t&&"function"!=typeof t&&"function"!=typeof t.view)throw Error("The selector must be either a string or a component.")
var e=h.apply(1,arguments)
return"string"==typeof t&&(e.children=f.normalizeChildren(e.children),"["!==t)?b(v[t]||g(t),e):(e.tag=t,
e)},w=i(),x=i(),k=u,E=y
E.trust=function(t){return null==t&&(t=""),w("<",void 0,void 0,t,void 0,void 0)
},E.fragment=function(){var t=k.apply(0,arguments)
return t.tag="[",t.children=x.normalizeChildren(t.children),t}
var S,M,C=E,z={exports:{}}
function A(){if(M)return S
M=1
var t=function(e){
if(!(this instanceof t))throw new Error("Promise must be called with 'new'.")
if("function"!=typeof e)throw new TypeError("executor must be a function.")
var n=this,r=[],o=[],i=u(r,!0),a=u(o,!1),s=n._instance={resolvers:r,rejectors:o
},l="function"==typeof setImmediate?setImmediate:setTimeout
function u(t,e){return function i(u){var f
try{
if(!e||null==u||"object"!=typeof u&&"function"!=typeof u||"function"!=typeof(f=u.then))l((function(){
e||0!==t.length||console.error("Possible unhandled promise rejection:",u)
for(var n=0;n<t.length;n++)t[n](u)
r.length=0,o.length=0,s.state=e,s.retry=function(){i(u)}}))
else{if(u===n)throw new TypeError("Promise can't be resolved with itself.")
c(f.bind(u))}}catch(t){a(t)}}}function c(t){var e=0
function n(t){return function(n){e++>0||t(n)}}var r=n(a)
try{t(n(i),r)}catch(t){r(t)}}c(e)}
return t.prototype.then=function(e,n){var r,o,i=this._instance
function a(t,e,n,a){e.push((function(e){if("function"!=typeof t)n(e)
else try{r(t(e))}catch(t){o&&o(t)}
})),"function"==typeof i.retry&&a===i.state&&i.retry()}
var s=new t((function(t,e){r=t,o=e}))
return a(e,i.resolvers,r,!0),a(n,i.rejectors,o,!1),s
},t.prototype.catch=function(t){return this.then(null,t)
},t.prototype.finally=function(e){return this.then((function(n){
return t.resolve(e()).then((function(){return n}))}),(function(n){
return t.resolve(e()).then((function(){return t.reject(n)}))}))
},t.resolve=function(e){return e instanceof t?e:new t((function(t){t(e)}))
},t.reject=function(e){return new t((function(t,n){n(e)}))},t.all=function(e){
return new t((function(t,n){var r=e.length,o=0,i=[]
if(0===e.length)t([])
else for(var a=0;a<e.length;a++)!function(a){function s(e){
o++,i[a]=e,o===r&&t(i)}
null==e[a]||"object"!=typeof e[a]&&"function"!=typeof e[a]||"function"!=typeof e[a].then?s(e[a]):e[a].then(s,n)
}(a)}))},t.race=function(e){return new t((function(t,n){
for(var r=0;r<e.length;r++)e[r].then(t,n)}))},S=t}var N,P,T,Z,O=A()
function I(){if(P)return N
P=1
var t=i()
return N=function(e){var n,r=e&&e.document,o={svg:"http://www.w3.org/2000/svg",
math:"http://www.w3.org/1998/Math/MathML"}
function i(t){return t.attrs&&t.attrs.xmlns||o[t.tag]}function a(t,e){
if(t.state!==e)throw new Error("'vnode.state' must not be modified.")}
function s(t){var e=t.state
try{return this.apply(e,arguments)}finally{a(t,e)}}function l(){try{
return r.activeElement}catch(t){return null}}function u(t,e,n,r,o,i,a){
for(var s=n;s<r;s++){var l=e[s]
null!=l&&c(t,l,o,a,i)}}function c(e,n,o,a,l){var f=n.tag
if("string"==typeof f)switch(n.state={},null!=n.attrs&&j(n.attrs,n,o),f){
case"#":!function(t,e,n){e.dom=r.createTextNode(e.children),w(t,e.dom,n)}(e,n,l)
break
case"<":h(e,n,a,l)
break
case"[":!function(t,e,n,o,i){var a=r.createDocumentFragment()
if(null!=e.children){var s=e.children
u(a,s,0,s.length,n,null,o)}
e.dom=a.firstChild,e.domSize=a.childNodes.length,w(t,a,i)}(e,n,o,a,l)
break
default:!function(t,e,n,o,a){
var s=e.tag,l=e.attrs,c=l&&l.is,f=(o=i(e)||o)?c?r.createElementNS(o,s,{is:c
}):r.createElementNS(o,s):c?r.createElement(s,{is:c}):r.createElement(s)
e.dom=f,null!=l&&function(t,e,n){
"input"===t.tag&&null!=e.type&&t.dom.setAttribute("type",e.type)
var r=null!=e&&"input"===t.tag&&"file"===e.type
for(var o in e)z(t,o,null,e[o],n,r)}(e,l,o)
if(w(t,f,a),!x(e)&&null!=e.children){var h=e.children
u(f,h,0,h.length,n,null,o),"select"===e.tag&&null!=l&&function(t,e){
if("value"in e)if(null===e.value)-1!==t.dom.selectedIndex&&(t.dom.value=null)
else{var n=""+e.value
t.dom.value===n&&-1!==t.dom.selectedIndex||(t.dom.value=n)}
"selectedIndex"in e&&z(t,"selectedIndex",null,e.selectedIndex,void 0)}(e,l)}
}(e,n,o,a,l)}else!function(e,n,r,o,i){(function(e,n){var r
if("function"==typeof e.tag.view){
if(e.state=Object.create(e.tag),null!=(r=e.state.view).$$reentrantLock$$)return
r.$$reentrantLock$$=!0}else{
if(e.state=void 0,null!=(r=e.tag).$$reentrantLock$$)return
r.$$reentrantLock$$=!0,e.state=null!=e.tag.prototype&&"function"==typeof e.tag.prototype.view?new e.tag(e):e.tag(e)
}j(e.state,e,n),null!=e.attrs&&j(e.attrs,e,n)
if(e.instance=t.normalize(s.call(e.state.view,e)),e.instance===e)throw Error("A view cannot return the vnode it received as argument")
r.$$reentrantLock$$=null
})(n,r),null!=n.instance?(c(e,n.instance,r,o,i),n.dom=n.instance.dom,
n.domSize=null!=n.dom?n.instance.domSize:0):n.domSize=0}(e,n,o,a,l)}var f={
caption:"table",thead:"table",tbody:"table",tfoot:"table",tr:"tbody",th:"tr",
td:"tr",colgroup:"table",col:"colgroup"}
function h(t,e,n,o){
var i=e.children.match(/^\s*?<(\w+)/im)||[],a=r.createElement(f[i[1]]||"div")
"http://www.w3.org/2000/svg"===n?(a.innerHTML='<svg xmlns="http://www.w3.org/2000/svg">'+e.children+"</svg>",
a=a.firstChild):a.innerHTML=e.children,
e.dom=a.firstChild,e.domSize=a.childNodes.length,e.instance=[]
for(var s,l=r.createDocumentFragment();s=a.firstChild;)e.instance.push(s),l.appendChild(s)
w(t,l,o)}function p(t,e,n,r,o,i){
if(e!==n&&(null!=e||null!=n))if(null==e||0===e.length)u(t,n,0,n.length,r,o,i)
else if(null==n||0===n.length)k(t,e,0,e.length)
else{var a=null!=e[0]&&null!=e[0].key,s=null!=n[0]&&null!=n[0].key,l=0,f=0
if(!a)for(;f<e.length&&null==e[f];)f++
if(!s)for(;l<n.length&&null==n[l];)l++
if(a!==s)k(t,e,f,e.length),u(t,n,l,n.length,r,o,i)
else if(s){
for(var h,p,y,w,x,S=e.length-1,M=n.length-1;S>=f&&M>=l&&(y=e[S],w=n[M],
y.key===w.key);)y!==w&&d(t,y,w,r,o,i),null!=w.dom&&(o=w.dom),S--,M--
for(;S>=f&&M>=l&&(h=e[f],p=n[l],h.key===p.key);)f++,l++,h!==p&&d(t,h,p,r,g(e,f,o),i)
for(;S>=f&&M>=l&&l!==M&&h.key===w.key&&y.key===p.key;)b(t,y,x=g(e,f,o)),y!==p&&d(t,y,p,r,x,i),
++l<=--M&&b(t,h,o),
h!==w&&d(t,h,w,r,o,i),null!=w.dom&&(o=w.dom),f++,y=e[--S],w=n[M],h=e[f],p=n[l]
for(;S>=f&&M>=l&&y.key===w.key;)y!==w&&d(t,y,w,r,o,i),null!=w.dom&&(o=w.dom),M--,
y=e[--S],w=n[M]
if(l>M)k(t,e,f,S+1)
else if(f>S)u(t,n,l,M+1,r,o,i)
else{var C,z,A=o,N=M-l+1,P=new Array(N),T=0,Z=0,O=2147483647,I=0
for(Z=0;Z<N;Z++)P[Z]=-1
for(Z=M;Z>=l;Z--){null==C&&(C=v(e,f,S+1))
var D=C[(w=n[Z]).key]
null!=D&&(O=D<O?D:-1,P[Z-l]=D,y=e[D],e[D]=null,y!==w&&d(t,y,w,r,o,i),null!=w.dom&&(o=w.dom),
I++)}if(o=A,I!==S-f+1&&k(t,e,f,S+1),0===I)u(t,n,l,M+1,r,o,i)
else if(-1===O)for(z=function(t){var e=[0],n=0,r=0,o=0,i=m.length=t.length
for(o=0;o<i;o++)m[o]=t[o]
for(o=0;o<i;++o)if(-1!==t[o]){var a=e[e.length-1]
if(t[a]<t[o])m[o]=a,e.push(o)
else{for(n=0,r=e.length-1;n<r;){var s=(n>>>1)+(r>>>1)+(n&r&1)
t[e[s]]<t[o]?n=s+1:r=s}t[o]<t[e[n]]&&(n>0&&(m[o]=e[n-1]),e[n]=o)}}
n=e.length,r=e[n-1]
for(;n-- >0;)e[n]=r,r=m[r]
return m.length=0,e
}(P),T=z.length-1,Z=M;Z>=l;Z--)p=n[Z],-1===P[Z-l]?c(t,p,r,i,o):z[T]===Z-l?T--:b(t,p,o),
null!=p.dom&&(o=n[Z].dom)
else for(Z=M;Z>=l;Z--)p=n[Z],-1===P[Z-l]&&c(t,p,r,i,o),null!=p.dom&&(o=n[Z].dom)
}}else{var L=e.length<n.length?e.length:n.length
for(l=l<f?l:f;l<L;l++)(h=e[l])===(p=n[l])||null==h&&null==p||(null==h?c(t,p,r,i,g(e,l+1,o)):null==p?E(t,h):d(t,h,p,r,g(e,l+1,o),i))
e.length>L&&k(t,e,l,e.length),n.length>L&&u(t,n,l,n.length,r,o,i)}}}
function d(e,n,r,o,a,l){var u=n.tag
if(u===r.tag){if(r.state=n.state,r.events=n.events,function(t,e){do{var n
if(null!=t.attrs&&"function"==typeof t.attrs.onbeforeupdate)if(void 0!==(n=s.call(t.attrs.onbeforeupdate,t,e))&&!n)break
if("string"!=typeof t.tag&&"function"==typeof t.state.onbeforeupdate)if(void 0!==(n=s.call(t.state.onbeforeupdate,t,e))&&!n)break
return!1}while(0)
return t.dom=e.dom,t.domSize=e.domSize,t.instance=e.instance,t.attrs=e.attrs,t.children=e.children,
t.text=e.text,!0}(r,n))return
if("string"==typeof u)switch(null!=r.attrs&&R(r.attrs,r,o),u){case"#":
!function(t,e){
t.children.toString()!==e.children.toString()&&(t.dom.nodeValue=e.children)
e.dom=t.dom}(n,r)
break
case"<":!function(t,e,n,r,o){
e.children!==n.children?(S(t,e),h(t,n,r,o)):(n.dom=e.dom,
n.domSize=e.domSize,n.instance=e.instance)}(e,n,r,l,a)
break
case"[":!function(t,e,n,r,o,i){p(t,e.children,n.children,r,o,i)
var a=0,s=n.children
if(n.dom=null,null!=s){for(var l=0;l<s.length;l++){var u=s[l]
null!=u&&null!=u.dom&&(null==n.dom&&(n.dom=u.dom),a+=u.domSize||1)}
1!==a&&(n.domSize=a)}}(e,n,r,o,a,l)
break
default:!function(t,e,n,r){var o=e.dom=t.dom
r=i(e)||r,"textarea"===e.tag&&null==e.attrs&&(e.attrs={});(function(t,e,n,r){
e&&e===n&&console.warn("Don't reuse attrs object, use new object for every redraw, this will throw in next major")
if(null!=n){"input"===t.tag&&null!=n.type&&t.dom.setAttribute("type",n.type)
var o="input"===t.tag&&"file"===n.type
for(var i in n)z(t,i,e&&e[i],n[i],r,o)}var a
if(null!=e)for(var i in e)null==(a=e[i])||null!=n&&null!=n[i]||A(t,i,a,r)
})(e,t.attrs,e.attrs,r),x(e)||p(o,t.children,e.children,n,null,r)}(n,r,o,l)
}else!function(e,n,r,o,i,a){
if(r.instance=t.normalize(s.call(r.state.view,r)),r.instance===r)throw Error("A view cannot return the vnode it received as argument")
R(r.state,r,o),null!=r.attrs&&R(r.attrs,r,o)
null!=r.instance?(null==n.instance?c(e,r.instance,o,a,i):d(e,n.instance,r.instance,o,i,a),
r.dom=r.instance.dom,
r.domSize=r.instance.domSize):null!=n.instance?(E(e,n.instance),
r.dom=void 0,r.domSize=0):(r.dom=n.dom,r.domSize=n.domSize)}(e,n,r,o,a,l)
}else E(e,n),c(e,r,o,l,a)}function v(t,e,n){
for(var r=Object.create(null);e<n;e++){var o=t[e]
if(null!=o){var i=o.key
null!=i&&(r[i]=e)}}return r}var m=[]
function g(t,e,n){
for(;e<t.length;e++)if(null!=t[e]&&null!=t[e].dom)return t[e].dom
return n}function b(t,e,n){var o=r.createDocumentFragment()
y(t,o,e),w(t,o,n)}function y(t,e,n){for(;null!=n.dom&&n.dom.parentNode===t;){
if("string"!=typeof n.tag){if(null!=(n=n.instance))continue
}else if("<"===n.tag)for(var r=0;r<n.instance.length;r++)e.appendChild(n.instance[r])
else if("["!==n.tag)e.appendChild(n.dom)
else if(1===n.children.length){if(null!=(n=n.children[0]))continue
}else for(r=0;r<n.children.length;r++){var o=n.children[r]
null!=o&&y(t,e,o)}break}}function w(t,e,n){
null!=n?t.insertBefore(e,n):t.appendChild(e)}function x(t){
if(null==t.attrs||null==t.attrs.contenteditable&&null==t.attrs.contentEditable)return!1
var e=t.children
if(null!=e&&1===e.length&&"<"===e[0].tag){var n=e[0].children
t.dom.innerHTML!==n&&(t.dom.innerHTML=n)
}else if(null!=e&&0!==e.length)throw new Error("Child node of a contenteditable must be trusted.")
return!0}function k(t,e,n,r){for(var o=n;o<r;o++){var i=e[o]
null!=i&&E(t,i)}}function E(t,e){var n,r,o,i=0,l=e.state
"string"!=typeof e.tag&&"function"==typeof e.state.onbeforeremove&&(null!=(o=s.call(e.state.onbeforeremove,e))&&"function"==typeof o.then&&(i=1,
n=o))
e.attrs&&"function"==typeof e.attrs.onbeforeremove&&(null!=(o=s.call(e.attrs.onbeforeremove,e))&&"function"==typeof o.then&&(i|=2,
r=o))
if(a(e,l),i){if(null!=n){var u=function(){1&i&&((i&=2)||c())}
n.then(u,u)}if(null!=r){u=function(){2&i&&((i&=1)||c())}
r.then(u,u)}}else C(e),M(t,e)
function c(){a(e,l),C(e),M(t,e)}}function S(t,e){
for(var n=0;n<e.instance.length;n++)t.removeChild(e.instance[n])}
function M(t,e){for(;null!=e.dom&&e.dom.parentNode===t;){
if("string"!=typeof e.tag){if(null!=(e=e.instance))continue
}else if("<"===e.tag)S(t,e)
else{if("["!==e.tag&&(t.removeChild(e.dom),!Array.isArray(e.children)))break
if(1===e.children.length){if(null!=(e=e.children[0]))continue
}else for(var n=0;n<e.children.length;n++){var r=e.children[n]
null!=r&&M(t,r)}}break}}function C(t){
if("string"!=typeof t.tag&&"function"==typeof t.state.onremove&&s.call(t.state.onremove,t),
t.attrs&&"function"==typeof t.attrs.onremove&&s.call(t.attrs.onremove,t),
"string"!=typeof t.tag)null!=t.instance&&C(t.instance)
else{var e=t.children
if(Array.isArray(e))for(var n=0;n<e.length;n++){var r=e[n]
null!=r&&C(r)}}}function z(t,e,n,o,i,a){
if(!("key"===e||"is"===e||null==o||N(e)||n===o&&!function(t,e){
return"value"===e||"checked"===e||"selectedIndex"===e||"selected"===e&&t.dom===l()||"option"===t.tag&&t.dom.parentNode===r.activeElement
}(t,e)&&"object"!=typeof o||"type"===e&&"input"===t.tag)){
if("o"===e[0]&&"n"===e[1])return B(t,e,o)
if("xlink:"===e.slice(0,6))t.dom.setAttributeNS("http://www.w3.org/1999/xlink",e.slice(6),o)
else if("style"===e)D(t.dom,n,o)
else if(P(t,e,i)){if("value"===e){
if(("input"===t.tag||"textarea"===t.tag)&&t.dom.value===""+o&&(a||t.dom===l()))return
if("select"===t.tag&&null!==n&&t.dom.value===""+o)return
if("option"===t.tag&&null!==n&&t.dom.value===""+o)return
if(a&&""+o!="")return void console.error("`value` is read-only on file inputs!")
}t.dom[e]=o
}else"boolean"==typeof o?o?t.dom.setAttribute(e,""):t.dom.removeAttribute(e):t.dom.setAttribute("className"===e?"class":e,o)
}}function A(t,e,n,r){
if("key"!==e&&"is"!==e&&null!=n&&!N(e))if("o"===e[0]&&"n"===e[1])B(t,e,void 0)
else if("style"===e)D(t.dom,n,null)
else if(!P(t,e,r)||"className"===e||"title"===e||"value"===e&&("option"===t.tag||"select"===t.tag&&-1===t.dom.selectedIndex&&t.dom===l())||"input"===t.tag&&"type"===e){
var o=e.indexOf(":")
;-1!==o&&(e=e.slice(o+1)),!1!==n&&t.dom.removeAttribute("className"===e?"class":e)
}else t.dom[e]=null}function N(t){
return"oninit"===t||"oncreate"===t||"onupdate"===t||"onremove"===t||"onbeforeremove"===t||"onbeforeupdate"===t
}function P(t,e,n){
return void 0===n&&(t.tag.indexOf("-")>-1||null!=t.attrs&&t.attrs.is||"href"!==e&&"list"!==e&&"form"!==e&&"width"!==e&&"height"!==e)&&e in t.dom
}var T,Z=/[A-Z]/g
function O(t){return"-"+t.toLowerCase()}function I(t){
return"-"===t[0]&&"-"===t[1]?t:"cssFloat"===t?"float":t.replace(Z,O)}
function D(t,e,n){if(e===n);else if(null==n)t.style.cssText=""
else if("object"!=typeof n)t.style.cssText=n
else if(null==e||"object"!=typeof e)for(var r in t.style.cssText="",n){
null!=(o=n[r])&&t.style.setProperty(I(r),String(o))}else{for(var r in n){var o
null!=(o=n[r])&&(o=String(o))!==String(e[r])&&t.style.setProperty(I(r),o)}
for(var r in e)null!=e[r]&&null==n[r]&&t.style.removeProperty(I(r))}}
function L(){this._=n}function B(t,e,r){if(null!=t.events){
if(t.events._=n,t.events[e]===r)return
null==r||"function"!=typeof r&&"object"!=typeof r?(null!=t.events[e]&&t.dom.removeEventListener(e.slice(2),t.events,!1),
t.events[e]=void 0):(null==t.events[e]&&t.dom.addEventListener(e.slice(2),t.events,!1),
t.events[e]=r)
}else null==r||"function"!=typeof r&&"object"!=typeof r||(t.events=new L,
t.dom.addEventListener(e.slice(2),t.events,!1),t.events[e]=r)}function j(t,e,n){
"function"==typeof t.oninit&&s.call(t.oninit,e),
"function"==typeof t.oncreate&&n.push(s.bind(t.oncreate,e))}function R(t,e,n){
"function"==typeof t.onupdate&&n.push(s.bind(t.onupdate,e))}
return L.prototype=Object.create(null),L.prototype.handleEvent=function(t){
var e,n=this["on"+t.type]
"function"==typeof n?e=n.call(t.currentTarget,t):"function"==typeof n.handleEvent&&n.handleEvent(t),
this._&&!1!==t.redraw&&(0,
this._)(),!1===e&&(t.preventDefault(),t.stopPropagation())},function(e,r,o){
if(!e)throw new TypeError("DOM element being rendered to does not exist.")
if(null!=T&&e.contains(T))throw new TypeError("Node is currently being rendered to and thus is locked.")
var i=n,a=T,s=[],u=l(),c=e.namespaceURI
T=e,n="function"==typeof o?o:void 0
try{
null==e.vnodes&&(e.textContent=""),r=t.normalizeChildren(Array.isArray(r)?r:[r]),
p(e,e.vnodes,r,s,null,"http://www.w3.org/1999/xhtml"===c?void 0:c),
e.vnodes=r,null!=u&&l()!==u&&"function"==typeof u.focus&&u.focus()
for(var f=0;f<s.length;f++)s[f]()}finally{n=i,T=a}}},N}function D(){
return Z?T:(Z=1,T=I()("undefined"!=typeof window?window:null))}
"undefined"!=typeof window?(void 0===window.Promise?window.Promise=O:window.Promise.prototype.finally||(window.Promise.prototype.finally=O.prototype.finally),
z.exports=window.Promise):void 0!==t?(void 0===t.Promise?t.Promise=O:t.Promise.prototype.finally||(t.Promise.prototype.finally=O.prototype.finally),
z.exports=t.Promise):z.exports=O
var L,B,j,R,_,q,$=i(),V=function(t,e,n){var r=[],o=!1,i=-1
function a(){for(i=0;i<r.length;i+=2)try{t(r[i],$(r[i+1]),s)}catch(t){n.error(t)
}i=-1}function s(){o||(o=!0,e((function(){o=!1,a()})))}return s.sync=a,{
mount:function(e,n){
if(null!=n&&null==n.view&&"function"!=typeof n)throw new TypeError("m.mount expects a component, not a vnode.")
var o=r.indexOf(e)
o>=0&&(r.splice(o,2),o<=i&&(i-=2),t(e,[])),null!=n&&(r.push(e,n),t(e,$(n),s))},
redraw:s}
}(D(),"undefined"!=typeof requestAnimationFrame?requestAnimationFrame:null,"undefined"!=typeof console?console:null)
function X(){return B?L:(B=1,L=function(t){
if("[object Object]"!==Object.prototype.toString.call(t))return""
var e=[]
for(var n in t)r(n,t[n])
return e.join("&")
function r(t,n){
if(Array.isArray(n))for(var o=0;o<n.length;o++)r(t+"["+o+"]",n[o])
else if("[object Object]"===Object.prototype.toString.call(n))for(var o in n)r(t+"["+o+"]",n[o])
else e.push(encodeURIComponent(t)+(null!=n&&""!==n?"="+encodeURIComponent(n):""))
}})}function U(){if(R)return j
R=1
var t=c()
return j=Object.assign||function(e,n){for(var r in n)t.call(n,r)&&(e[r]=n[r])}}
function F(){if(q)return _
q=1
var t=X(),e=U()
return _=function(n,r){
if(/:([^\/\.-]+)(\.{3})?:/.test(n))throw new SyntaxError("Template parameter names must be separated by either a '/', '-', or '.'.")
if(null==r)return n
var o=n.indexOf("?"),i=n.indexOf("#"),a=i<0?n.length:i,s=o<0?a:o,l=n.slice(0,s),u={}
e(u,r)
var c=l.replace(/:([^\/\.-]+)(\.{3})?/g,(function(t,e,n){
return delete u[e],null==r[e]?t:n?r[e]:encodeURIComponent(String(r[e]))
})),f=c.indexOf("?"),h=c.indexOf("#"),p=h<0?c.length:h,d=f<0?p:f,v=c.slice(0,d)
o>=0&&(v+=n.slice(o,a)),f>=0&&(v+=(o<0?"?":"&")+c.slice(f,p))
var m=t(u)
return m&&(v+=(o<0&&f<0?"?":"&")+m),i>=0&&(v+=n.slice(i)),h>=0&&(v+=(i<0?"":"&")+c.slice(h)),
v},_}
var G,W,H,Y,K,Q,J,tt,et,nt,rt,ot,it=F(),at=c(),st=z.exports,lt=function(t,e,n){
var r=0
function o(t){return new e(t)}function i(t){return function(r,i){
"string"!=typeof r?(i=r,r=r.url):null==i&&(i={})
var a=new e((function(e,n){t(it(r,i.params),i,(function(t){
if("function"==typeof i.type)if(Array.isArray(t))for(var n=0;n<t.length;n++)t[n]=new i.type(t[n])
else t=new i.type(t)
e(t)}),n)}))
if(!0===i.background)return a
var s=0
function l(){0==--s&&"function"==typeof n&&n()}return function t(e){var n=e.then
return e.constructor=o,e.then=function(){s++
var r=n.apply(e,arguments)
return r.then(l,(function(t){if(l(),0===s)throw t})),t(r)},e}(a)}}
function a(t,e){
for(var n in t.headers)if(at.call(t.headers,n)&&n.toLowerCase()===e)return!0
return!1}return o.prototype=e.prototype,o.__proto__=e,{
request:i((function(e,n,r,o){
var i,s=null!=n.method?n.method.toUpperCase():"GET",l=n.body,u=(null==n.serialize||n.serialize===JSON.serialize)&&!(l instanceof t.FormData||l instanceof t.URLSearchParams),c=n.responseType||("function"==typeof n.extract?"":"json"),f=new t.XMLHttpRequest,h=!1,p=!1,d=f,v=f.abort
for(var m in f.abort=function(){h=!0,v.call(this)
},f.open(s,e,!1!==n.async,"string"==typeof n.user?n.user:void 0,"string"==typeof n.password?n.password:void 0),
u&&null!=l&&!a(n,"content-type")&&f.setRequestHeader("Content-Type","application/json; charset=utf-8"),
"function"==typeof n.deserialize||a(n,"accept")||f.setRequestHeader("Accept","application/json, text/*"),
n.withCredentials&&(f.withCredentials=n.withCredentials),
n.timeout&&(f.timeout=n.timeout),
f.responseType=c,n.headers)at.call(n.headers,m)&&f.setRequestHeader(m,n.headers[m])
f.onreadystatechange=function(t){if(!h&&4===t.target.readyState)try{
var i,a=t.target.status>=200&&t.target.status<300||304===t.target.status||/^file:\/\//i.test(e),s=t.target.response
if("json"===c){if(!t.target.responseType&&"function"!=typeof n.extract)try{
s=JSON.parse(t.target.responseText)}catch(t){s=null}
}else c&&"text"!==c||null==s&&(s=t.target.responseText)
if("function"==typeof n.extract?(s=n.extract(t.target,n),a=!0):"function"==typeof n.deserialize&&(s=n.deserialize(s)),
a)r(s)
else{var l=function(){try{i=t.target.responseText}catch(t){i=s}
var e=new Error(i)
e.code=t.target.status,e.response=s,o(e)}
0===f.status?setTimeout((function(){p||l()})):l()}}catch(t){o(t)}
},f.ontimeout=function(t){p=!0
var e=new Error("Request timed out")
e.code=t.target.status,o(e)
},"function"==typeof n.config&&(f=n.config(f,n,e)||f)!==d&&(i=f.abort,
f.abort=function(){h=!0,i.call(this)
}),null==l?f.send():"function"==typeof n.serialize?f.send(n.serialize(l)):l instanceof t.FormData||l instanceof t.URLSearchParams?f.send(l):f.send(JSON.stringify(l))
})),jsonp:i((function(e,n,o,i){
var a=n.callbackName||"_mithril_"+Math.round(1e16*Math.random())+"_"+r++,s=t.document.createElement("script")
t[a]=function(e){delete t[a],s.parentNode.removeChild(s),o(e)
},s.onerror=function(){
delete t[a],s.parentNode.removeChild(s),i(new Error("JSONP request failed"))
},s.src=e+(e.indexOf("?")<0?"?":"&")+encodeURIComponent(n.callbackKey||"callback")+"="+encodeURIComponent(a),
t.document.documentElement.appendChild(s)}))}
}("undefined"!=typeof window?window:null,st,V.redraw)
function ut(){if(W)return G
function t(t){try{return decodeURIComponent(t)}catch(e){return t}}
return W=1,G=function(e){if(""===e||null==e)return{}
"?"===e.charAt(0)&&(e=e.slice(1))
for(var n=e.split("&"),r={},o={},i=0;i<n.length;i++){
var a=n[i].split("="),s=t(a[0]),l=2===a.length?t(a[1]):""
"true"===l?l=!0:"false"===l&&(l=!1)
var u=s.split(/\]\[?|\[/),c=o
s.indexOf("[")>-1&&u.pop()
for(var f=0;f<u.length;f++){var h=u[f],p=u[f+1],d=""==p||!isNaN(parseInt(p,10))
if(""===h)null==r[s=u.slice(0,f).join()]&&(r[s]=Array.isArray(c)?c.length:0),h=r[s]++
else if("__proto__"===h)break
if(f===u.length-1)c[h]=l
else{var v=Object.getOwnPropertyDescriptor(c,h)
null!=v&&(v=v.value),null==v&&(c[h]=v=d?[]:{}),c=v}}}return o}}function ct(){
if(Y)return H
Y=1
var t=ut()
return H=function(e){
var n=e.indexOf("?"),r=e.indexOf("#"),o=r<0?e.length:r,i=n<0?o:n,a=e.slice(0,i).replace(/\/{2,}/g,"/")
return a?("/"!==a[0]&&(a="/"+a),a.length>1&&"/"===a[a.length-1]&&(a=a.slice(0,-1))):a="/",
{path:a,params:n<0?{}:t(e.slice(n+1,o))}}}function ft(){if(Q)return K
Q=1
var t=ct()
return K=function(e){
var n=t(e),r=Object.keys(n.params),o=[],i=new RegExp("^"+n.path.replace(/:([^\/.-]+)(\.{3}|\.(?!\.)|-)?|[\\^$*+.()|\[\]{}]/g,(function(t,e,n){
return null==e?"\\"+t:(o.push({k:e,r:"..."===n
}),"..."===n?"(.*)":"."===n?"([^/]+)\\.":"([^/]+)"+(n||""))}))+"$")
return function(t){
for(var e=0;e<r.length;e++)if(n.params[r[e]]!==t.params[r[e]])return!1
if(!o.length)return i.test(t.path)
var a=i.exec(t.path)
if(null==a)return!1
for(e=0;e<o.length;e++)t.params[o[e].k]=o[e].r?a[e+1]:decodeURIComponent(a[e+1])
return!0}},K}function ht(){if(tt)return J
tt=1
var t=c(),e=new RegExp("^(?:key|oninit|oncreate|onbeforeupdate|onupdate|onbeforeremove|onremove)$")
return J=function(n,r){var o={}
if(null!=r)for(var i in n)t.call(n,i)&&!e.test(i)&&r.indexOf(i)<0&&(o[i]=n[i])
else for(var i in n)t.call(n,i)&&!e.test(i)&&(o[i]=n[i])
return o}}var pt=C,dt=lt,vt=V,mt=function(){return pt.apply(this,arguments)}
mt.m=pt,mt.trust=pt.trust,mt.fragment=pt.fragment,mt.Fragment="[",mt.mount=vt.mount,
mt.route=function(){if(ot)return rt
ot=1
var t=V
return rt=function(){if(nt)return et
nt=1
var t=i(),e=y,n=z.exports,r=F(),o=ct(),a=ft(),s=U(),l=ht(),u={}
function c(t){try{return decodeURIComponent(t)}catch(e){return t}}
return et=function(i,f){
var h,p,d,v,m,g,b=null==i?null:"function"==typeof i.setImmediate?i.setImmediate:i.setTimeout,y=n.resolve(),w=!1,x=!1,k=0,E=u,S={
onbeforeupdate:function(){return!(!(k=k?2:1)||u===E)},onremove:function(){
i.removeEventListener("popstate",z,!1),i.removeEventListener("hashchange",C,!1)
},view:function(){if(k&&u!==E){var e=[t(d,v.key,v)]
return E&&(e=E.render(e[0])),e}}},M=N.SKIP={}
function C(){w=!1
var t=i.location.hash
"#"!==N.prefix[0]&&(t=i.location.search+t,"?"!==N.prefix[0]&&"/"!==(t=i.location.pathname+t)[0]&&(t="/"+t))
var e=t.concat().replace(/(?:%[a-f89][a-f0-9])+/gim,c).slice(N.prefix.length),n=o(e)
function r(t){console.error(t),A(p,null,{replace:!0})}
s(n.params,i.history.state),function t(o){for(;o<h.length;o++)if(h[o].check(n)){
var i=h[o].component,a=h[o].route,s=i,l=g=function(r){if(l===g){
if(r===M)return t(o+1)
d=null==r||"function"!=typeof r.view&&"function"!=typeof r?"div":r,v=n.params,m=e,
g=null,E=i.render?i:null,2===k?f.redraw():(k=2,f.redraw.sync())}}
return void(i.view||"function"==typeof i?(i={},l(s)):i.onmatch?y.then((function(){
return i.onmatch(n.params,e,a)})).then(l,e===p?null:r):l("div"))}
if(e===p)throw new Error("Could not resolve default route "+p+".")
A(p,null,{replace:!0})}(0)}function z(){w||(w=!0,b(C))}function A(t,e,n){
if(t=r(t,e),x){z()
var o=n?n.state:null,a=n?n.title:null
n&&n.replace?i.history.replaceState(o,a,N.prefix+t):i.history.pushState(o,a,N.prefix+t)
}else i.location.href=N.prefix+t}function N(t,e,n){
if(!t)throw new TypeError("DOM element being rendered to does not exist.")
if(h=Object.keys(n).map((function(t){
if("/"!==t[0])throw new SyntaxError("Routes must start with a '/'.")
if(/:([^\/\.-]+)(\.{3})?:/.test(t))throw new SyntaxError("Route parameter names must be separated with either '/', '.', or '-'.")
return{route:t,component:n[t],check:a(t)}})),p=e,null!=e){var r=o(e)
if(!h.some((function(t){return t.check(r)
})))throw new ReferenceError("Default route doesn't match any known routes.")}
"function"==typeof i.history.pushState?i.addEventListener("popstate",z,!1):"#"===N.prefix[0]&&i.addEventListener("hashchange",C,!1),
x=!0,f.mount(t,S),C()}return N.set=function(t,e,n){
null!=g&&((n=n||{}).replace=!0),g=null,A(t,e,n)},N.get=function(){return m
},N.prefix="#!",N.Link={view:function(t){
var n,o,i,a=e(t.attrs.selector||"a",l(t.attrs,["options","params","selector","onclick"]),t.children)
return(a.attrs.disabled=Boolean(a.attrs.disabled))?(a.attrs.href=null,a.attrs["aria-disabled"]="true"):(n=t.attrs.options,
o=t.attrs.onclick,
i=r(a.attrs.href,t.attrs.params),a.attrs.href=N.prefix+i,a.attrs.onclick=function(t){
var e
"function"==typeof o?e=o.call(t.currentTarget,t):null==o||"object"!=typeof o||"function"==typeof o.handleEvent&&o.handleEvent(t),
!1===e||t.defaultPrevented||0!==t.button&&0!==t.which&&1!==t.which||t.currentTarget.target&&"_self"!==t.currentTarget.target||t.ctrlKey||t.metaKey||t.shiftKey||t.altKey||(t.preventDefault(),
t.redraw=!1,N.set(i,null,n))}),a}},N.param=function(t){return v&&null!=t?v[t]:v
},N},et}()("undefined"!=typeof window?window:null,t),rt
}(),mt.render=D(),mt.redraw=vt.redraw,
mt.request=dt.request,mt.jsonp=dt.jsonp,mt.parseQueryString=ut(),
mt.buildQueryString=X(),mt.parsePathname=ct(),mt.buildPathname=F(),mt.vnode=i(),
mt.PromisePolyfill=A(),mt.censor=ht(),o.exports=mt
var gt={},bt=[],yt=[]
var wt,xt,kt='body,html{height:100%;margin:0}h1{margin-block-start:0;text-align:center}form{padding:1ex}.hidden{display:none}h2{border-top:1px dashed #000}svg{box-sizing:border-box;height:100%;left:0;padding:0;position:absolute;top:0;width:100%}.kte-1{stroke:navy}.kte-2{stroke:green}.kte-3{stroke:red}g.ktes>path{stroke-width:1px;vector-effect:non-scaling-stroke;fill-rule:evenodd;stroke-linecap:round;stroke-linejoin:round}g.ktes>path.kte{stroke-width:5px;fill:none}g.ktes>path.kte:hover{stroke-dasharray:1%;animation:dash 1s linear infinite}g.ktes>path.axis{stroke:#000;stroke-dasharray:3% 1% .3% 1%}@-moz-keyframes dash{0%{stroke-dashoffset:0%}to{stroke-dashoffset:-2%}}@-webkit-keyframes dash{0%{stroke-dashoffset:0%}to{stroke-dashoffset:-2%}}@-o-keyframes dash{0%{stroke-dashoffset:0%}to{stroke-dashoffset:-2%}}@keyframes dash{0%{stroke-dashoffset:0%}to{stroke-dashoffset:-2%}}body>div{bottom:0;box-sizing:border-box;padding:1ex;position:absolute;top:0;width:50%}body>div:first-child{border-right:1px solid #000;left:0}body>div:last-child{right:0}.tabs{border-bottom:1px solid #000;white-space:nowrap}.tabs>label{border:1px solid #000;border-radius:1ex 1ex 0 0;display:inline-block;padding:1ex;position:relative;top:1px}.tabs>label.active{border-bottom:1px solid #fff;font-weight:700;padding-top:1.618ex}.tabs>span{padding:1ex}sup.popover{position:relative}sup.popover>div{box-shadow:1ex 1ex 1ex silver;display:none;position:absolute;right:0;top:0}sup.popover:hover>div{display:block}input:invalid+span:after{color:red;content:"?!"}g.DXF{fill:none;stroke:navy;stroke-width:5px;fill-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;transform:scaleY(-1)}g.DXF path{vector-effect:non-scaling-stroke}g.DXF path.axis{stroke-width:1px;stroke:red}g.DXF .active{stroke:red;stroke-width:10px;animation:RYG 1s infinite alternate}@-moz-keyframes RYG{0%{stroke:red}50%{stroke:#ff0}to{stroke:green}}@-webkit-keyframes RYG{0%{stroke:red}50%{stroke:#ff0}to{stroke:green}}@-o-keyframes RYG{0%{stroke:red}50%{stroke:#ff0}to{stroke:green}}@keyframes RYG{0%{stroke:red}50%{stroke:#ff0}to{stroke:green}}'
!function(t,e){if(t&&"undefined"!=typeof document){
var n,r=!0===e.prepend?"prepend":"append",o=!0===e.singleTag,i="string"==typeof e.container?document.querySelector(e.container):document.getElementsByTagName("head")[0]
if(o){var a=bt.indexOf(i)
;-1===a&&(a=bt.push(i)-1,yt[a]={}),n=yt[a]&&yt[a][r]?yt[a][r]:yt[a][r]=s()
}else n=s()
65279===t.charCodeAt(0)&&(t=t.substring(1)),n.styleSheet?n.styleSheet.cssText+=t:n.appendChild(document.createTextNode(t))
}function s(){var t=document.createElement("style")
if(t.setAttribute("type","text/css"),e.attributes)for(var n=Object.keys(e.attributes),o=0;o<n.length;o++)t.setAttribute(n[o],e.attributes[n[o]])
var a="prepend"===r?"afterbegin":"beforeend"
return i.insertAdjacentElement(a,t),t}}(kt,{}),wt=o.exports,xt=e({
__proto__:null,css:kt,default:kt}),gt.view=function(){return wt("style",xt.css)}
var Et,St,Mt,Ct,zt={},At={},Nt={}
Et=o.exports,St=e({__proto__:null,_:"https://github.com/ukoloff/kte"
}),Nt.view=function(){var t
return[Et("h2","Примечания"),Et("ul",Et("li",Et("a",{href:St._,target:"_blank"
},"Исходный код"),"@GitHub"),Et("li","Замечания и предложения по работе утилит КТЕ: ",Et("a",{
href:t=St._+"/issues",target:"_blank"},t)),Et("li",Et("a",{
href:St._+"/tree/main/data",target:"_blank"},"Примеры")," DXF и XML-файлов"))]},
Mt=o.exports,Ct=Nt,At.view=function(){
return[Mt("h1",document.title="Automatic CAM for Turning"),Mt("ul",Mt("li",Mt("a",{
href:"#!/dxf"
},"Импорт DXF и настройка технологических параметров")),Mt("li",Mt("a",{
href:"#!/kte"},"Просмотр результатов распознавания КТЭ"))),Mt(Ct)]}
var Pt,Tt,Zt={},Ot={},It={},Dt=function(){if(!this)return null
var t,e,n,r,o,i,a=jt,s=jt,l=jt,u=jt,c=jt,f=!1,h=!1,p=!1,d=!1,v=!1,m=!1,g=null,b=!1,y={
xmlns:undefined},w=""
this.on=function(o,i){if("function"==typeof i||null===i)switch(o){
case"startNode":s=i||jt
break
case"textNode":a=i||jt
break
case"endNode":l=i||jt
break
case"error":c=i||jt
break
case"cdata":u=i||jt
break
case"unknownNS":r=i,d=!!i
break
case"attention":n=i,p=!!i
break
case"question":e=i,h=!!i
break
case"comment":t=i,f=!!i}},this.ns=function(t,e){
if(!t||"string"!=typeof t||!e)return this
var n,r,a,s={}
for(a in e)"string"==typeof(r=e[a])&&(t===r&&(n=!0),s[a]=r)
return n&&(o=t,m=!0,i=s),this},this.parse=function(t){
if("string"==typeof t)return g=null,w=t,m?(y={xmlns:o
},A(),y=!1):A(),b=!1,x=!0,w="",g},this.stop=function(){b=!0}
var x,k=0,E=0,S="",M=0
function C(){if(null!==x)return x
for(var t,e,n,o,a,s,l,u,c,f,h=m&&v?[]:null,p=M,g=S,b=g.length,w={};p<b;p++)if(!(32===(c=g.charCodeAt(p))||c<14&&c>8)){
if((c<65||c>122||c>90&&c<97)&&95!==c&&58!==c)return x=!1
for(f=p+1;f<b;f++)if(!((c=g.charCodeAt(f))>96&&c<123||c>64&&c<91||c>47&&c<59||45===c||95===c)){
if(61!==c)return x=!1
break}if(u=!0,"xmlns:xmlns"===(l=g.substring(p,f)))return x=!1
if(34===(c=g.charCodeAt(f+1)))f=g.indexOf('"',p=f+2)
else{if(39!==c)return x=!1
f=g.indexOf("'",p=f+2)}if(-1===f)return x=!1
if(f+1<b&&((c=g.charCodeAt(f+1))>32||c<9||c<32&&c>13))return x=!1
if(a=g.substring(p,f),p=f+1,m)if(v){
if(null!==(o="xmlns"!==l?120===l.charCodeAt(0)&&"xmlns:"===l.substr(0,6)?l.substr(6):null:"xmlns")){
s=i[_t(a)],
d&&!s&&(s=r(a)),s?y[o]!==s&&(n||(y=qt(y),n=!0),y[o]=s):y[o]&&(n||(y=qt(y),n=!0),
y[o]=!1),w[l]=a
continue}h.push(l,a)
}else-1!==(c=l.indexOf(":"))?(e=y[l.substring(0,c)])&&(w[(e=y.xmlns===e?l.substr(c+1):e+l.substr(c))+l.substr(c)]=a):w[l]=a
else w[l]=a}if(!u)return x=!0
if(v)for(t=y.xmlns,p=0,b=h.length;p<b;p++)-1===(c=(l=h[p++]).indexOf(":"))?w[l]=h[p]:(e=y[l.substring(0,c)])&&(w[e=t===e?l.substr(c+1):e+l.substr(c)]=h[p])
return x=w}function z(){return w.substring(k,E+1)}function A(){
for(var r,o,i,d,A,N,P,T,Z=[],O=[],I=!1,D=!1,L=0,B=0,j=0;-1!==L;){
if(T=j>0,-1===(B=60===w.charCodeAt(L)?L:w.indexOf("<",L)))return O.length?void c(g="end file"):void 0
if(L!==B&&!T&&(a(w.substring(L,B),_t),b))return
if(33!==(d=w.charCodeAt(B+1)))if(63!==d){
if(-1==(L=w.indexOf(">",B+1)))return void c(g="...>")
if(x=!0,47===d){
if(I=!1,D=!0,!O.length)return void c(g="close tag, requires open tag")
if(i=B+2+(r=P=O.pop()).length,w.substring(B+2,i)!==r)return void c(g="close tag, not equal to the open tag")
for(;i<L;i++)if(!(32===(d=w.charCodeAt(i))||d>8&&d<14))return void c(g="close tag")
}else{
if(47===w.charCodeAt(L-1)?(r=P=w.substring(B+1,L-1),I=!0,D=!0):(r=P=w.substring(B+1,L),
I=!0,
D=!1),!(d>96&&d<123||d>64&&d<91||95===d||58===d))return void c(g="first char nodeName")
for(i=1,o=r.length;i<o;i++)if(!((d=r.charCodeAt(i))>96&&d<123||d>64&&d<91||d>47&&d<59||45===d||95===d)){
if(32===d||d<14&&d>8){P=r.substring(0,i),x=null
break}return void c(g="invalid nodeName")}D||O.push(P)}if(m){if(T){
D?I||0==--j&&(y=Z.pop()):j+=1,L+=1
continue}if(A=y,D||Z.push(y),I&&!0!==x&&(v=-1!==r.indexOf("xmlns",i))&&(M=i,S=r,
C(),
v=!1),-1!==(d=P.indexOf(":"))?(N=y[P.substring(0,d)],P=P.substr(d+1)):N=y.xmlns,
!N){D?y=I?A:Z.pop():(j=1,x=!0),L+=1
continue}P=N+":"+P}if(k=B,E=L,I){if(M=i,S=r,s(P,C,_t,D,z),b)return
x=!0}if(D){if(l(P,_t,I,z),b)return
m&&(y=I?A:Z.pop())}L+=1}else{
if(-1===(L=w.indexOf("?>",B)))return void c(g="...?>")
if(h&&(e(w.substring(B,L+2)),b))return
L+=2}else{if(91===(d=w.charCodeAt(B+2))&&"CDATA["===w.substr(B+3,6)){
if(-1===(L=w.indexOf("]]>",B)))return void c(g="cdata")
if(!T&&(u(w.substring(B+9,L),!1),b))return
L+=3
continue}if(45===d&&45===w.charCodeAt(B+3)){
if(-1===(L=w.indexOf("--\x3e",B)))return void c(g="expected --\x3e")
if(f&&!T&&(t(w.substring(B+4,L),_t),b))return
L+=3
continue}if(-1===(L=w.indexOf(">",B+1)))return void c(g='expected ">"')
if(p&&!T&&(n(w.substring(B,L+1),_t),b))return
L+=1}}}},Lt=String.fromCharCode,Bt={constructor:!1,propertyIsEnumerable:!1,
toLocaleString:!1,hasOwnProperty:!1,isPrototypeOf:!1,toString:!1,valueOf:!1,
quot:'"',QUOT:'"',amp:"&",AMP:"&",nbsp:" ",apos:"'",lt:"<",LT:"<",gt:">",GT:">",
copy:"©",laquo:"«",raquo:"»",reg:"®",deg:"°",plusmn:"±",sup2:"²",sup3:"³",
micro:"µ",para:"¶"}
function jt(){}function Rt(t,e,n,r){return r?Bt[r]||"":Lt(e||parseInt(n,16))}
function _t(t){
return(t=""+t).length>3&&-1!==t.indexOf("&")&&(-1!==t.indexOf("&quot;")&&(t=t.replace(/&quot;/g,'"')),
-1!==t.indexOf("&gt;")&&(t=t.replace(/&gt;/g,">")),
-1!==t.indexOf("&lt;")&&(t=t.replace(/&lt;/g,"<")),
-1!==t.indexOf("&")&&(t=t.replace(/&#(\d+);|&#x([0123456789abcdef]+);|&(\w+);/gi,Rt))),
t}function qt(t){var e={}
for(var n in t)e[n]=t[n]
return e}function $t(){if(Tt)return Pt
return Tt=1,Pt=function(t,e){var n,r,o=[]
for(n=0;n<2;++n)r=n,o.push(t[r]-e[r])
return o}}var Vt,Xt=function(t,e){var n,r,o
for(n=0,r=0;r<2;++r)n+=t[o=r]*e[o]
return n}
Vt=Xt
var Ut=function(t){return Math.sqrt(Vt(t,t))}
var Ft,Gt,Wt,Ht,Yt=function(t){return[-t[1],+t[0]]}
Ft=$t(),Gt=Xt,Wt=Ut,Ht=Yt
var Kt,Qt=function(t){var e,n,r,o,i,a,s,l,u,c,f,h=[]
for(e=0,n=t.length;e<n;++e){
for(a in r=t[e],o=[null!=(i=r.Z)?i:f?f[0]:0,null!=(i=r.X)?i:f?f[1]:0,0],
r)s=r[a],0>"GXZIK".indexOf(a)&&(o[a]=s)
f&&r.G>=2&&null!=r.I&&null!=r.K&&(l=Ft(o,f),u=Wt(l),(c=[Gt([r.K,r.I],Ht(l))/u,u/2])[0]<0&&(c[0]=-c[0],
c[1]=-c[1]),c[0]+=Wt(c),c[1]>0!=(3===r.G)&&(c=Ht(c)),f[2]=c[1]/c[0]),h.push(f=o)
}return h}
Kt=Qt
var Jt,te,ee,ne,re=function(t){var e,n,r,o,i,a,s,l
for(e=[],n=0,o=(r=t.split(/\s*((?!E)[A-Z])\s*/i)).length;n<o;++n)i=n,a=r[n],i%2?"G"===(s=a.toUpperCase())&&e.push(l={}):l&&(l[s]=parseFloat(a))
return Kt(e)}
Jt=Dt,te=re,ee=function(t){var e,n
if(!t.length)throw RangeError("No KTEs found")
for(e=0,n=t.length;e<n;++e)if(!t[e].$)throw TypeError("Found KTE without attributes")
for(e=0,n=t.length;e<n;++e)if(t[e]._)return t
throw Error("No geometry information found")}
var oe,ie,ae,se=function(t){var e,n,r,o
function i(){var t,n,o,i
if(r=0,!(e.length>ne.length)){
for(t=0,o=(n=e).length;t<o;++t)if(i=t,n[t]!==ne[i])return
r=e.length}}return e=[],n=[],(o=new Jt).on("error",(function(t){
throw SyntaxError("Mal-formed XML: "+t)})),o.on("startNode",(function(t,o){
e.push(t),i(),2===r&&n.push({$:o()})})),o.on("endNode",(function(t){
e.length&&e[e.length-1]===t&&(e.pop(),i())})),o.on("textNode",(function(t,e){
var o
3===r&&null==(o=n[n.length-1])._&&(o._=te(e(t).trim()))})),o.parse(t),ee(n)}
ne=["recognition_result","kte","contour"],oe=se,ie=Ot,ae=o.exports
var le=async function(t){var e,n,r,o
for(delete ie.errors,e=0,n=t.length;e<n;++e){r=t[e]
try{ie.KTEs=oe(await r.text()),ie.name=r.name,location.hash="#!/kte/show"
break}catch(t){o=t,(ie.errors||(ie.errors={}))[r.name]=o.message}}ae.redraw()}
var ue=function(t,e){t.oncreate=function(){var t
;(t=document.body).ondragenter=ce,
t.ondragleave=ce,t.ondragover=ce,t.ondrop=function(t){
return e(t.dataTransfer.files),!1}},t.onremove=function(){var t
;(t=document.body).ondragenter=null,
t.ondragleave=null,t.ondragover=null,t.ondrop=null}}
function ce(){return!1}!function(t){var e,n,r
e=o.exports,n=le,r=ue,t.view=function(){var t
return t=this,[e("input.hidden",{type:"file",accept:".xml",oncreate:function(e){
(t.uploadButton=e.dom).onchange=function(){n(this.files)}}}),e("button",{
type:"button",onclick:function(){t.uploadButton.click()}
},"Загрузить результат распознавания!")," ...или перетащите XML-файл в это окно..."]
},r(t,n)}(It)
var fe,he={}
fe=o.exports,he.view=function(t){var e,n,r
if(e=t.attrs.errors)return[fe("h3","Ошибки"),fe("ul",function(){var t,o=[]
for(n in t=e)r=t[n],o.push(fe("li",fe("b",n),": ",r))
return o}())]}
var pe,de,ve,me,ge,be,ye={}
pe=o.exports,ye.view=function(){
return[pe("h2","Во время просмотра"),pe("ul",pe("li","Двигайте изображение мышкой"),pe("li","Масштабируйте колёсиком мыши"),pe("li","Наведите мышь на КТЭ, чтобы увидеть дополнительную информацию"))]
},de=o.exports,ve=Ot,me=It,ge=he,be=ye,Zt.view=function(){
return[de("h1",document.title="Визуализация КТЭ"),de("form",de(me)),de(ge,ve),de(be)]
}
var we={},xe=function(){var t,e,n,r="",o=[],i={passive:!0}
function a(e,a,s,l){var u
u="wheel"===n?s:function(t,e){var r=function(t){!t&&(t=window.event)
var r={originalEvent:t,target:t.target||t.srcElement,type:"wheel",
deltaMode:"MozMousePixelScroll"==t.type?0:1,deltaX:0,delatZ:0,
preventDefault:function(){t.preventDefault?t.preventDefault():t.returnValue=!1}}
return"mousewheel"==n?(r.deltaY=-1/40*t.wheelDelta,t.wheelDeltaX&&(r.deltaX=-1/40*t.wheelDeltaX)):r.deltaY=t.detail,
e(r)}
return o.push({element:t,fn:r}),r}(e,s),e[t](r+a,u,!!l&&i)}function s(t,a,s,l){
var u
u="wheel"===n?s:function(t){
for(var e=0;e<o.length;e++)if(o[e].element===t)return o[e].fn
return function(){}}(t),t[e](r+a,u,!!l&&i),function(t){
for(var e=0;e<o.length;e++)if(o[e].element===t)return o.splice(e,1)}(t)}
return window.addEventListener?(t="addEventListener",
e="removeEventListener"):(t="attachEvent",
e="detachEvent",r="on"),n="onwheel"in document.createElement("div")?"wheel":void 0!==document.onmousewheel?"mousewheel":"DOMMouseScroll",
{on:function(t,e,r){
a(t,n,e,r),"DOMMouseScroll"==n&&a(t,"MozMousePixelScroll",e,r)},
off:function(t,e,r){
s(t,n,e,r),"DOMMouseScroll"==n&&s(t,"MozMousePixelScroll",e,r)}}}(),ke={
extend:function(t,e){
for(var n in t=t||{},e)this.isObject(e[n])?t[n]=this.extend(t[n],e[n]):t[n]=e[n]
return t},isElement:function(t){
return t instanceof HTMLElement||t instanceof SVGElement||t instanceof SVGSVGElement||t&&"object"==typeof t&&null!==t&&1===t.nodeType&&"string"==typeof t.nodeName
},isObject:function(t){
return"[object Object]"===Object.prototype.toString.call(t)},
isNumber:function(t){return!isNaN(parseFloat(t))&&isFinite(t)},
getSvg:function(t){var e,n
if(this.isElement(t))e=t
else{
if(!("string"==typeof t||t instanceof String))throw new Error("Provided selector is not an HTML object nor String")
if(!(e=document.querySelector(t)))throw new Error("Provided selector did not find any elements. Selector: "+t)
}if("svg"===e.tagName.toLowerCase())n=e
else if("object"===e.tagName.toLowerCase())n=e.contentDocument.documentElement
else{
if("embed"!==e.tagName.toLowerCase())throw"img"===e.tagName.toLowerCase()?new Error('Cannot script an SVG in an "img" element. Please use an "object" element or an in-line SVG.'):new Error("Cannot get SVG.")
n=e.getSVGDocument().documentElement}return n},proxy:function(t,e){
return function(){return t.apply(e,arguments)}},getType:function(t){
return Object.prototype.toString.apply(t).replace(/^\[object\s/,"").replace(/\]$/,"")
},mouseAndTouchNormalize:function(t,e){
if(void 0===t.clientX||null===t.clientX)if(t.clientX=0,
t.clientY=0,void 0!==t.touches&&t.touches.length){
if(void 0!==t.touches[0].clientX)t.clientX=t.touches[0].clientX,
t.clientY=t.touches[0].clientY
else if(void 0!==t.touches[0].pageX){var n=e.getBoundingClientRect()
t.clientX=t.touches[0].pageX-n.left,t.clientY=t.touches[0].pageY-n.top}
}else void 0!==t.originalEvent&&void 0!==t.originalEvent.clientX&&(t.clientX=t.originalEvent.clientX,
t.clientY=t.originalEvent.clientY)},isDblClick:function(t,e){
if(2===t.detail)return!0
if(null!=e){
var n=t.timeStamp-e.timeStamp,r=Math.sqrt(Math.pow(t.clientX-e.clientX,2)+Math.pow(t.clientY-e.clientY,2))
return n<250&&r<10}return!1},now:Date.now||function(){return(new Date).getTime()
},throttle:function(t,e,n){var r,o,i,a=this,s=null,l=0
n||(n={})
var u=function(){l=!1===n.leading?0:a.now(),s=null,i=t.apply(r,o),s||(r=o=null)}
return function(){var c=a.now()
l||!1!==n.leading||(l=c)
var f=e-(c-l)
return r=this,o=arguments,f<=0||f>e?(clearTimeout(s),s=null,l=c,i=t.apply(r,o),s||(r=o=null)):s||!1===n.trailing||(s=setTimeout(u,f)),
i}},createRequestAnimationFrame:function(t){var e=null
return"auto"!==t&&t<60&&t>1&&(e=Math.floor(1e3/t)),null===e?window.requestAnimationFrame||Ee(33):Ee(e)
}}
function Ee(t){return function(e){window.setTimeout(e,t)}}var Se=ke,Me="unknown"
document.documentMode&&(Me="ie")
var Ce={svgNS:"http://www.w3.org/2000/svg",
xmlNS:"http://www.w3.org/XML/1998/namespace",
xmlnsNS:"http://www.w3.org/2000/xmlns/",xlinkNS:"http://www.w3.org/1999/xlink",
evNS:"http://www.w3.org/2001/xml-events",
getBoundingClientRectNormalized:function(t){
if(t.clientWidth&&t.clientHeight)return{width:t.clientWidth,
height:t.clientHeight}
if(t.getBoundingClientRect())return t.getBoundingClientRect()
throw new Error("Cannot get BoundingClientRect for SVG.")},
getOrCreateViewport:function(t,e){var n=null
if(!(n=Se.isElement(e)?e:t.querySelector(e))){
var r=Array.prototype.slice.call(t.childNodes||t.children).filter((function(t){
return"defs"!==t.nodeName&&"#text"!==t.nodeName}))
1===r.length&&"g"===r[0].nodeName&&null===r[0].getAttribute("transform")&&(n=r[0])
}if(!n){var o="viewport-"+(new Date).toISOString().replace(/\D/g,"")
;(n=document.createElementNS(this.svgNS,"g")).setAttribute("id",o)
var i=t.childNodes||t.children
if(i&&i.length>0)for(var a=i.length;a>0;a--)"defs"!==i[i.length-a].nodeName&&n.appendChild(i[i.length-a])
t.appendChild(n)}var s=[]
return n.getAttribute("class")&&(s=n.getAttribute("class").split(" ")),~s.indexOf("svg-pan-zoom_viewport")||(s.push("svg-pan-zoom_viewport"),
n.setAttribute("class",s.join(" "))),n},setupSvgAttributes:function(t){
if(t.setAttribute("xmlns",this.svgNS),
t.setAttributeNS(this.xmlnsNS,"xmlns:xlink",this.xlinkNS),
t.setAttributeNS(this.xmlnsNS,"xmlns:ev",this.evNS),null!==t.parentNode){
var e=t.getAttribute("style")||""
;-1===e.toLowerCase().indexOf("overflow")&&t.setAttribute("style","overflow: hidden; "+e)
}},internetExplorerRedisplayInterval:300,
refreshDefsGlobal:Se.throttle((function(){
for(var t=document.querySelectorAll("defs"),e=t.length,n=0;n<e;n++){var r=t[n]
r.parentNode.insertBefore(r,r)}}),t?t.internetExplorerRedisplayInterval:null),
setCTM:function(t,e,n){
var r=this,o="matrix("+e.a+","+e.b+","+e.c+","+e.d+","+e.e+","+e.f+")"
t.setAttributeNS(null,"transform",o),"transform"in t.style?t.style.transform=o:"-ms-transform"in t.style?t.style["-ms-transform"]=o:"-webkit-transform"in t.style&&(t.style["-webkit-transform"]=o),
"ie"===Me&&n&&(n.parentNode.insertBefore(n,n),window.setTimeout((function(){
r.refreshDefsGlobal()}),r.internetExplorerRedisplayInterval))},
getEventPoint:function(t,e){var n=e.createSVGPoint()
return Se.mouseAndTouchNormalize(t,e),n.x=t.clientX,n.y=t.clientY,n},
getSvgCenterPoint:function(t,e,n){return this.createSVGPoint(t,e/2,n/2)},
createSVGPoint:function(t,e,n){var r=t.createSVGPoint()
return r.x=e,r.y=n,r}},ze=Ce,Ae={enable:function(t){
var e=t.svg.querySelector("defs")
if(e||(e=document.createElementNS(ze.svgNS,"defs"),t.svg.appendChild(e)),!e.querySelector("style#svg-pan-zoom-controls-styles")){
var n=document.createElementNS(ze.svgNS,"style")
n.setAttribute("id","svg-pan-zoom-controls-styles"),n.setAttribute("type","text/css"),
n.textContent=".svg-pan-zoom-control { cursor: pointer; fill: black; fill-opacity: 0.333; } .svg-pan-zoom-control:hover { fill-opacity: 0.8; } .svg-pan-zoom-control-background { fill: white; fill-opacity: 0.5; } .svg-pan-zoom-control-background { fill-opacity: 0.8; }",
e.appendChild(n)}var r=document.createElementNS(ze.svgNS,"g")
r.setAttribute("id","svg-pan-zoom-controls"),r.setAttribute("transform","translate("+(t.width-70)+" "+(t.height-76)+") scale(0.75)"),
r.setAttribute("class","svg-pan-zoom-control"),
r.appendChild(this._createZoomIn(t)),
r.appendChild(this._createZoomReset(t)),r.appendChild(this._createZoomOut(t)),
t.svg.appendChild(r),t.controlIcons=r},_createZoomIn:function(t){
var e=document.createElementNS(ze.svgNS,"g")
e.setAttribute("id","svg-pan-zoom-zoom-in"),e.setAttribute("transform","translate(30.5 5) scale(0.015)"),
e.setAttribute("class","svg-pan-zoom-control"),
e.addEventListener("click",(function(){t.getPublicInstance().zoomIn()
}),!1),e.addEventListener("touchstart",(function(){
t.getPublicInstance().zoomIn()}),!1)
var n=document.createElementNS(ze.svgNS,"rect")
n.setAttribute("x","0"),n.setAttribute("y","0"),n.setAttribute("width","1500"),n.setAttribute("height","1400"),
n.setAttribute("class","svg-pan-zoom-control-background"),e.appendChild(n)
var r=document.createElementNS(ze.svgNS,"path")
return r.setAttribute("d","M1280 576v128q0 26 -19 45t-45 19h-320v320q0 26 -19 45t-45 19h-128q-26 0 -45 -19t-19 -45v-320h-320q-26 0 -45 -19t-19 -45v-128q0 -26 19 -45t45 -19h320v-320q0 -26 19 -45t45 -19h128q26 0 45 19t19 45v320h320q26 0 45 19t19 45zM1536 1120v-960 q0 -119 -84.5 -203.5t-203.5 -84.5h-960q-119 0 -203.5 84.5t-84.5 203.5v960q0 119 84.5 203.5t203.5 84.5h960q119 0 203.5 -84.5t84.5 -203.5z"),
r.setAttribute("class","svg-pan-zoom-control-element"),e.appendChild(r),e},
_createZoomReset:function(t){var e=document.createElementNS(ze.svgNS,"g")
e.setAttribute("id","svg-pan-zoom-reset-pan-zoom"),e.setAttribute("transform","translate(5 35) scale(0.4)"),
e.setAttribute("class","svg-pan-zoom-control"),
e.addEventListener("click",(function(){t.getPublicInstance().reset()
}),!1),e.addEventListener("touchstart",(function(){t.getPublicInstance().reset()
}),!1)
var n=document.createElementNS(ze.svgNS,"rect")
n.setAttribute("x","2"),n.setAttribute("y","2"),n.setAttribute("width","182"),n.setAttribute("height","58"),
n.setAttribute("class","svg-pan-zoom-control-background"),e.appendChild(n)
var r=document.createElementNS(ze.svgNS,"path")
r.setAttribute("d","M33.051,20.632c-0.742-0.406-1.854-0.609-3.338-0.609h-7.969v9.281h7.769c1.543,0,2.701-0.188,3.473-0.562c1.365-0.656,2.048-1.953,2.048-3.891C35.032,22.757,34.372,21.351,33.051,20.632z"),
r.setAttribute("class","svg-pan-zoom-control-element"),e.appendChild(r)
var o=document.createElementNS(ze.svgNS,"path")
return o.setAttribute("d","M170.231,0.5H15.847C7.102,0.5,0.5,5.708,0.5,11.84v38.861C0.5,56.833,7.102,61.5,15.847,61.5h154.384c8.745,0,15.269-4.667,15.269-10.798V11.84C185.5,5.708,178.976,0.5,170.231,0.5z M42.837,48.569h-7.969c-0.219-0.766-0.375-1.383-0.469-1.852c-0.188-0.969-0.289-1.961-0.305-2.977l-0.047-3.211c-0.03-2.203-0.41-3.672-1.142-4.406c-0.732-0.734-2.103-1.102-4.113-1.102h-7.05v13.547h-7.055V14.022h16.524c2.361,0.047,4.178,0.344,5.45,0.891c1.272,0.547,2.351,1.352,3.234,2.414c0.731,0.875,1.31,1.844,1.737,2.906s0.64,2.273,0.64,3.633c0,1.641-0.414,3.254-1.242,4.84s-2.195,2.707-4.102,3.363c1.594,0.641,2.723,1.551,3.387,2.73s0.996,2.98,0.996,5.402v2.32c0,1.578,0.063,2.648,0.19,3.211c0.19,0.891,0.635,1.547,1.333,1.969V48.569z M75.579,48.569h-26.18V14.022h25.336v6.117H56.454v7.336h16.781v6H56.454v8.883h19.125V48.569z M104.497,46.331c-2.44,2.086-5.887,3.129-10.34,3.129c-4.548,0-8.125-1.027-10.731-3.082s-3.909-4.879-3.909-8.473h6.891c0.224,1.578,0.662,2.758,1.316,3.539c1.196,1.422,3.246,2.133,6.15,2.133c1.739,0,3.151-0.188,4.236-0.562c2.058-0.719,3.087-2.055,3.087-4.008c0-1.141-0.504-2.023-1.512-2.648c-1.008-0.609-2.607-1.148-4.796-1.617l-3.74-0.82c-3.676-0.812-6.201-1.695-7.576-2.648c-2.328-1.594-3.492-4.086-3.492-7.477c0-3.094,1.139-5.664,3.417-7.711s5.623-3.07,10.036-3.07c3.685,0,6.829,0.965,9.431,2.895c2.602,1.93,3.966,4.73,4.093,8.402h-6.938c-0.128-2.078-1.057-3.555-2.787-4.43c-1.154-0.578-2.587-0.867-4.301-0.867c-1.907,0-3.428,0.375-4.565,1.125c-1.138,0.75-1.706,1.797-1.706,3.141c0,1.234,0.561,2.156,1.682,2.766c0.721,0.406,2.25,0.883,4.589,1.43l6.063,1.43c2.657,0.625,4.648,1.461,5.975,2.508c2.059,1.625,3.089,3.977,3.089,7.055C108.157,41.624,106.937,44.245,104.497,46.331z M139.61,48.569h-26.18V14.022h25.336v6.117h-18.281v7.336h16.781v6h-16.781v8.883h19.125V48.569z M170.337,20.14h-10.336v28.43h-7.266V20.14h-10.383v-6.117h27.984V20.14z"),
o.setAttribute("class","svg-pan-zoom-control-element"),e.appendChild(o),e},
_createZoomOut:function(t){var e=document.createElementNS(ze.svgNS,"g")
e.setAttribute("id","svg-pan-zoom-zoom-out"),e.setAttribute("transform","translate(30.5 70) scale(0.015)"),
e.setAttribute("class","svg-pan-zoom-control"),
e.addEventListener("click",(function(){t.getPublicInstance().zoomOut()
}),!1),e.addEventListener("touchstart",(function(){
t.getPublicInstance().zoomOut()}),!1)
var n=document.createElementNS(ze.svgNS,"rect")
n.setAttribute("x","0"),n.setAttribute("y","0"),n.setAttribute("width","1500"),n.setAttribute("height","1400"),
n.setAttribute("class","svg-pan-zoom-control-background"),e.appendChild(n)
var r=document.createElementNS(ze.svgNS,"path")
return r.setAttribute("d","M1280 576v128q0 26 -19 45t-45 19h-896q-26 0 -45 -19t-19 -45v-128q0 -26 19 -45t45 -19h896q26 0 45 19t19 45zM1536 1120v-960q0 -119 -84.5 -203.5t-203.5 -84.5h-960q-119 0 -203.5 84.5t-84.5 203.5v960q0 119 84.5 203.5t203.5 84.5h960q119 0 203.5 -84.5 t84.5 -203.5z"),
r.setAttribute("class","svg-pan-zoom-control-element"),e.appendChild(r),e},
disable:function(t){
t.controlIcons&&(t.controlIcons.parentNode.removeChild(t.controlIcons),
t.controlIcons=null)}},Ne=Ce,Pe=ke,Te=function(t,e){this.init(t,e)}
Te.prototype.init=function(t,e){
this.viewport=t,this.options=e,this.originalState={zoom:1,x:0,y:0
},this.activeState={zoom:1,x:0,y:0
},this.updateCTMCached=Pe.proxy(this.updateCTM,this),
this.requestAnimationFrame=Pe.createRequestAnimationFrame(this.options.refreshRate),
this.viewBox={x:0,y:0,width:0,height:0},this.cacheViewBox()
var n=this.processCTM()
this.setCTM(n),this.updateCTM()},Te.prototype.cacheViewBox=function(){
var t=this.options.svg.getAttribute("viewBox")
if(t){var e=t.split(/[\s\,]/).filter((function(t){return t})).map(parseFloat)
this.viewBox.x=e[0],this.viewBox.y=e[1],this.viewBox.width=e[2],this.viewBox.height=e[3]
var n=Math.min(this.options.width/this.viewBox.width,this.options.height/this.viewBox.height)
this.activeState.zoom=n,this.activeState.x=(this.options.width-this.viewBox.width*n)/2,
this.activeState.y=(this.options.height-this.viewBox.height*n)/2,
this.updateCTMOnNextFrame(),this.options.svg.removeAttribute("viewBox")
}else this.simpleViewBoxCache()},Te.prototype.simpleViewBoxCache=function(){
var t=this.viewport.getBBox()
this.viewBox.x=t.x,this.viewBox.y=t.y,this.viewBox.width=t.width,this.viewBox.height=t.height
},Te.prototype.getViewBox=function(){return Pe.extend({},this.viewBox)
},Te.prototype.processCTM=function(){var t,e=this.getCTM()
;(this.options.fit||this.options.contain)&&(t=this.options.fit?Math.min(this.options.width/this.viewBox.width,this.options.height/this.viewBox.height):Math.max(this.options.width/this.viewBox.width,this.options.height/this.viewBox.height),
e.a=t,e.d=t,e.e=-this.viewBox.x*t,e.f=-this.viewBox.y*t)
if(this.options.center){
var n=.5*(this.options.width-(this.viewBox.width+2*this.viewBox.x)*e.a),r=.5*(this.options.height-(this.viewBox.height+2*this.viewBox.y)*e.a)
e.e=n,e.f=r}
return this.originalState.zoom=e.a,this.originalState.x=e.e,this.originalState.y=e.f,
e},Te.prototype.getOriginalState=function(){
return Pe.extend({},this.originalState)},Te.prototype.getState=function(){
return Pe.extend({},this.activeState)},Te.prototype.getZoom=function(){
return this.activeState.zoom},Te.prototype.getRelativeZoom=function(){
return this.activeState.zoom/this.originalState.zoom
},Te.prototype.computeRelativeZoom=function(t){return t/this.originalState.zoom
},Te.prototype.getPan=function(){return{x:this.activeState.x,
y:this.activeState.y}},Te.prototype.getCTM=function(){
var t=this.options.svg.createSVGMatrix()
return t.a=this.activeState.zoom,t.b=0,t.c=0,t.d=this.activeState.zoom,t.e=this.activeState.x,
t.f=this.activeState.y,t},Te.prototype.setCTM=function(t){
var e=this.isZoomDifferent(t),n=this.isPanDifferent(t)
if(e||n){
if(e&&(!1===this.options.beforeZoom(this.getRelativeZoom(),this.computeRelativeZoom(t.a))?(t.a=t.d=this.activeState.zoom,
e=!1):(this.updateCache(t),this.options.onZoom(this.getRelativeZoom()))),n){
var r=this.options.beforePan(this.getPan(),{x:t.e,y:t.f}),o=!1,i=!1
!1===r?(t.e=this.getPan().x,t.f=this.getPan().y,o=i=!0):Pe.isObject(r)&&(!1===r.x?(t.e=this.getPan().x,
o=!0):Pe.isNumber(r.x)&&(t.e=r.x),
!1===r.y?(t.f=this.getPan().y,i=!0):Pe.isNumber(r.y)&&(t.f=r.y)),
o&&i||!this.isPanDifferent(t)?n=!1:(this.updateCache(t),
this.options.onPan(this.getPan()))}(e||n)&&this.updateCTMOnNextFrame()}
},Te.prototype.isZoomDifferent=function(t){return this.activeState.zoom!==t.a
},Te.prototype.isPanDifferent=function(t){
return this.activeState.x!==t.e||this.activeState.y!==t.f
},Te.prototype.updateCache=function(t){
this.activeState.zoom=t.a,this.activeState.x=t.e,this.activeState.y=t.f
},Te.prototype.pendingUpdate=!1,Te.prototype.updateCTMOnNextFrame=function(){
this.pendingUpdate||(this.pendingUpdate=!0,
this.requestAnimationFrame.call(window,this.updateCTMCached))
},Te.prototype.updateCTM=function(){var t=this.getCTM()
Ne.setCTM(this.viewport,t,this.defs),this.pendingUpdate=!1,this.options.onUpdatedCTM&&this.options.onUpdatedCTM(t)
}
var Ze=xe,Oe=Ae,Ie=ke,De=Ce,Le=function(t,e){return new Te(t,e)
},Be=function(t,e){this.init(t,e)},je={
viewportSelector:".svg-pan-zoom_viewport",panEnabled:!0,controlIconsEnabled:!1,
zoomEnabled:!0,dblClickZoomEnabled:!0,mouseWheelZoomEnabled:!0,
preventMouseEventsDefault:!0,zoomScaleSensitivity:.1,minZoom:.5,maxZoom:10,
fit:!0,contain:!1,center:!0,refreshRate:"auto",beforeZoom:null,onZoom:null,
beforePan:null,onPan:null,customEventsHandler:null,eventsListenerElement:null,
onUpdatedCTM:null},Re={passive:!0}
Be.prototype.init=function(t,e){var n=this
this.svg=t,this.defs=t.querySelector("defs"),De.setupSvgAttributes(this.svg),this.options=Ie.extend(Ie.extend({},je),e),
this.state="none"
var r=De.getBoundingClientRectNormalized(t)
this.width=r.width,this.height=r.height,this.viewport=Le(De.getOrCreateViewport(this.svg,this.options.viewportSelector),{
svg:this.svg,width:this.width,height:this.height,fit:this.options.fit,
contain:this.options.contain,center:this.options.center,
refreshRate:this.options.refreshRate,beforeZoom:function(t,e){
if(n.viewport&&n.options.beforeZoom)return n.options.beforeZoom(t,e)},
onZoom:function(t){if(n.viewport&&n.options.onZoom)return n.options.onZoom(t)},
beforePan:function(t,e){
if(n.viewport&&n.options.beforePan)return n.options.beforePan(t,e)},
onPan:function(t){if(n.viewport&&n.options.onPan)return n.options.onPan(t)},
onUpdatedCTM:function(t){
if(n.viewport&&n.options.onUpdatedCTM)return n.options.onUpdatedCTM(t)}})
var o=this.getPublicInstance()
o.setBeforeZoom(this.options.beforeZoom),o.setOnZoom(this.options.onZoom),o.setBeforePan(this.options.beforePan),
o.setOnPan(this.options.onPan),
o.setOnUpdatedCTM(this.options.onUpdatedCTM),this.options.controlIconsEnabled&&Oe.enable(this),
this.lastMouseWheelEventTime=Date.now(),this.setupHandlers()
},Be.prototype.setupHandlers=function(){var t=this,e=null
if(this.eventListeners={mousedown:function(n){var r=t.handleMouseDown(n,e)
return e=n,r},touchstart:function(n){var r=t.handleMouseDown(n,e)
return e=n,r},mouseup:function(e){return t.handleMouseUp(e)},
touchend:function(e){return t.handleMouseUp(e)},mousemove:function(e){
return t.handleMouseMove(e)},touchmove:function(e){return t.handleMouseMove(e)},
mouseleave:function(e){return t.handleMouseUp(e)},touchleave:function(e){
return t.handleMouseUp(e)},touchcancel:function(e){return t.handleMouseUp(e)}
},null!=this.options.customEventsHandler){
this.options.customEventsHandler.init({svgElement:this.svg,
eventsListenerElement:this.options.eventsListenerElement,
instance:this.getPublicInstance()})
var n=this.options.customEventsHandler.haltEventListeners
if(n&&n.length)for(var r=n.length-1;r>=0;r--)this.eventListeners.hasOwnProperty(n[r])&&delete this.eventListeners[n[r]]
}
for(var o in this.eventListeners)(this.options.eventsListenerElement||this.svg).addEventListener(o,this.eventListeners[o],!this.options.preventMouseEventsDefault&&Re)
this.options.mouseWheelZoomEnabled&&(this.options.mouseWheelZoomEnabled=!1,this.enableMouseWheelZoom())
},Be.prototype.enableMouseWheelZoom=function(){
if(!this.options.mouseWheelZoomEnabled){var t=this
this.wheelListener=function(e){return t.handleMouseWheel(e)}
var e=!this.options.preventMouseEventsDefault
Ze.on(this.options.eventsListenerElement||this.svg,this.wheelListener,e),this.options.mouseWheelZoomEnabled=!0
}},Be.prototype.disableMouseWheelZoom=function(){
if(this.options.mouseWheelZoomEnabled){
var t=!this.options.preventMouseEventsDefault
Ze.off(this.options.eventsListenerElement||this.svg,this.wheelListener,t),this.options.mouseWheelZoomEnabled=!1
}},Be.prototype.handleMouseWheel=function(t){
if(this.options.zoomEnabled&&"none"===this.state){
this.options.preventMouseEventsDefault&&(t.preventDefault?t.preventDefault():t.returnValue=!1)
var e=t.deltaY||1,n=Date.now()-this.lastMouseWheelEventTime,r=3+Math.max(0,30-n)
this.lastMouseWheelEventTime=Date.now(),"deltaMode"in t&&0===t.deltaMode&&t.wheelDelta&&(e=0===t.deltaY?0:Math.abs(t.wheelDelta)/t.deltaY),
e=-.3<e&&e<.3?e:(e>0?1:-1)*Math.log(Math.abs(e)+10)/r
var o=this.svg.getScreenCTM().inverse(),i=De.getEventPoint(t,this.svg).matrixTransform(o),a=Math.pow(1+this.options.zoomScaleSensitivity,-1*e)
this.zoomAtPoint(a,i)}},Be.prototype.zoomAtPoint=function(t,e,n){
var r=this.viewport.getOriginalState()
n?(t=Math.max(this.options.minZoom*r.zoom,Math.min(this.options.maxZoom*r.zoom,t)),
t/=this.getZoom()):this.getZoom()*t<this.options.minZoom*r.zoom?t=this.options.minZoom*r.zoom/this.getZoom():this.getZoom()*t>this.options.maxZoom*r.zoom&&(t=this.options.maxZoom*r.zoom/this.getZoom())
var o=this.viewport.getCTM(),i=e.matrixTransform(o.inverse()),a=this.svg.createSVGMatrix().translate(i.x,i.y).scale(t).translate(-i.x,-i.y),s=o.multiply(a)
s.a!==o.a&&this.viewport.setCTM(s)},Be.prototype.zoom=function(t,e){
this.zoomAtPoint(t,De.getSvgCenterPoint(this.svg,this.width,this.height),e)
},Be.prototype.publicZoom=function(t,e){
e&&(t=this.computeFromRelativeZoom(t)),this.zoom(t,e)
},Be.prototype.publicZoomAtPoint=function(t,e,n){
if(n&&(t=this.computeFromRelativeZoom(t)),"SVGPoint"!==Ie.getType(e)){
if(!("x"in e)||!("y"in e))throw new Error("Given point is invalid")
e=De.createSVGPoint(this.svg,e.x,e.y)}this.zoomAtPoint(t,e,n)
},Be.prototype.getZoom=function(){return this.viewport.getZoom()
},Be.prototype.getRelativeZoom=function(){return this.viewport.getRelativeZoom()
},Be.prototype.computeFromRelativeZoom=function(t){
return t*this.viewport.getOriginalState().zoom
},Be.prototype.resetZoom=function(){var t=this.viewport.getOriginalState()
this.zoom(t.zoom,!0)},Be.prototype.resetPan=function(){
this.pan(this.viewport.getOriginalState())},Be.prototype.reset=function(){
this.resetZoom(),this.resetPan()},Be.prototype.handleDblClick=function(t){var e
if((this.options.preventMouseEventsDefault&&(t.preventDefault?t.preventDefault():t.returnValue=!1),
this.options.controlIconsEnabled)&&(t.target.getAttribute("class")||"").indexOf("svg-pan-zoom-control")>-1)return!1
e=t.shiftKey?1/(2*(1+this.options.zoomScaleSensitivity)):2*(1+this.options.zoomScaleSensitivity)
var n=De.getEventPoint(t,this.svg).matrixTransform(this.svg.getScreenCTM().inverse())
this.zoomAtPoint(e,n)},Be.prototype.handleMouseDown=function(t,e){
this.options.preventMouseEventsDefault&&(t.preventDefault?t.preventDefault():t.returnValue=!1),
Ie.mouseAndTouchNormalize(t,this.svg),
this.options.dblClickZoomEnabled&&Ie.isDblClick(t,e)?this.handleDblClick(t):(this.state="pan",
this.firstEventCTM=this.viewport.getCTM(),
this.stateOrigin=De.getEventPoint(t,this.svg).matrixTransform(this.firstEventCTM.inverse()))
},Be.prototype.handleMouseMove=function(t){
if(this.options.preventMouseEventsDefault&&(t.preventDefault?t.preventDefault():t.returnValue=!1),
"pan"===this.state&&this.options.panEnabled){
var e=De.getEventPoint(t,this.svg).matrixTransform(this.firstEventCTM.inverse()),n=this.firstEventCTM.translate(e.x-this.stateOrigin.x,e.y-this.stateOrigin.y)
this.viewport.setCTM(n)}},Be.prototype.handleMouseUp=function(t){
this.options.preventMouseEventsDefault&&(t.preventDefault?t.preventDefault():t.returnValue=!1),
"pan"===this.state&&(this.state="none")},Be.prototype.fit=function(){
var t=this.viewport.getViewBox(),e=Math.min(this.width/t.width,this.height/t.height)
this.zoom(e,!0)},Be.prototype.contain=function(){
var t=this.viewport.getViewBox(),e=Math.max(this.width/t.width,this.height/t.height)
this.zoom(e,!0)},Be.prototype.center=function(){
var t=this.viewport.getViewBox(),e=.5*(this.width-(t.width+2*t.x)*this.getZoom()),n=.5*(this.height-(t.height+2*t.y)*this.getZoom())
this.getPublicInstance().pan({x:e,y:n})},Be.prototype.updateBBox=function(){
this.viewport.simpleViewBoxCache()},Be.prototype.pan=function(t){
var e=this.viewport.getCTM()
e.e=t.x,e.f=t.y,this.viewport.setCTM(e)},Be.prototype.panBy=function(t){
var e=this.viewport.getCTM()
e.e+=t.x,e.f+=t.y,this.viewport.setCTM(e)},Be.prototype.getPan=function(){
var t=this.viewport.getState()
return{x:t.x,y:t.y}},Be.prototype.resize=function(){
var t=De.getBoundingClientRectNormalized(this.svg)
this.width=t.width,this.height=t.height
var e=this.viewport
e.options.width=this.width,e.options.height=this.height,e.processCTM(),this.options.controlIconsEnabled&&(this.getPublicInstance().disableControlIcons(),
this.getPublicInstance().enableControlIcons())},Be.prototype.destroy=function(){
var t=this
for(var e in this.beforeZoom=null,this.onZoom=null,this.beforePan=null,this.onPan=null,
this.onUpdatedCTM=null,
null!=this.options.customEventsHandler&&this.options.customEventsHandler.destroy({
svgElement:this.svg,eventsListenerElement:this.options.eventsListenerElement,
instance:this.getPublicInstance()
}),this.eventListeners)(this.options.eventsListenerElement||this.svg).removeEventListener(e,this.eventListeners[e],!this.options.preventMouseEventsDefault&&Re)
this.disableMouseWheelZoom(),this.getPublicInstance().disableControlIcons(),this.reset(),
En=En.filter((function(e){return e.svg!==t.svg
})),delete this.options,delete this.viewport,
delete this.publicInstance,delete this.pi,this.getPublicInstance=function(){
return null}},Be.prototype.getPublicInstance=function(){var t=this
return this.publicInstance||(this.publicInstance=this.pi={enablePan:function(){
return t.options.panEnabled=!0,t.pi},disablePan:function(){
return t.options.panEnabled=!1,t.pi},isPanEnabled:function(){
return!!t.options.panEnabled},pan:function(e){return t.pan(e),t.pi},
panBy:function(e){return t.panBy(e),t.pi},getPan:function(){return t.getPan()},
setBeforePan:function(e){
return t.options.beforePan=null===e?null:Ie.proxy(e,t.publicInstance),t.pi},
setOnPan:function(e){
return t.options.onPan=null===e?null:Ie.proxy(e,t.publicInstance),t.pi},
enableZoom:function(){return t.options.zoomEnabled=!0,t.pi},
disableZoom:function(){return t.options.zoomEnabled=!1,t.pi},
isZoomEnabled:function(){return!!t.options.zoomEnabled},
enableControlIcons:function(){
return t.options.controlIconsEnabled||(t.options.controlIconsEnabled=!0,
Oe.enable(t)),t.pi},disableControlIcons:function(){
return t.options.controlIconsEnabled&&(t.options.controlIconsEnabled=!1,
Oe.disable(t)),t.pi},isControlIconsEnabled:function(){
return!!t.options.controlIconsEnabled},enableDblClickZoom:function(){
return t.options.dblClickZoomEnabled=!0,t.pi},disableDblClickZoom:function(){
return t.options.dblClickZoomEnabled=!1,t.pi},isDblClickZoomEnabled:function(){
return!!t.options.dblClickZoomEnabled},enableMouseWheelZoom:function(){
return t.enableMouseWheelZoom(),t.pi},disableMouseWheelZoom:function(){
return t.disableMouseWheelZoom(),t.pi},isMouseWheelZoomEnabled:function(){
return!!t.options.mouseWheelZoomEnabled},setZoomScaleSensitivity:function(e){
return t.options.zoomScaleSensitivity=e,t.pi},setMinZoom:function(e){
return t.options.minZoom=e,t.pi},setMaxZoom:function(e){
return t.options.maxZoom=e,t.pi},setBeforeZoom:function(e){
return t.options.beforeZoom=null===e?null:Ie.proxy(e,t.publicInstance),t.pi},
setOnZoom:function(e){
return t.options.onZoom=null===e?null:Ie.proxy(e,t.publicInstance),t.pi},
zoom:function(e){return t.publicZoom(e,!0),t.pi},zoomBy:function(e){
return t.publicZoom(e,!1),t.pi},zoomAtPoint:function(e,n){
return t.publicZoomAtPoint(e,n,!0),t.pi},zoomAtPointBy:function(e,n){
return t.publicZoomAtPoint(e,n,!1),t.pi},zoomIn:function(){
return this.zoomBy(1+t.options.zoomScaleSensitivity),t.pi},zoomOut:function(){
return this.zoomBy(1/(1+t.options.zoomScaleSensitivity)),t.pi},
getZoom:function(){return t.getRelativeZoom()},setOnUpdatedCTM:function(e){
return t.options.onUpdatedCTM=null===e?null:Ie.proxy(e,t.publicInstance),t.pi},
resetZoom:function(){return t.resetZoom(),t.pi},resetPan:function(){
return t.resetPan(),t.pi},reset:function(){return t.reset(),t.pi},
fit:function(){return t.fit(),t.pi},contain:function(){return t.contain(),t.pi},
center:function(){return t.center(),t.pi},updateBBox:function(){
return t.updateBBox(),t.pi},resize:function(){return t.resize(),t.pi},
getSizes:function(){return{width:t.width,height:t.height,realZoom:t.getZoom(),
viewBox:t.viewport.getViewBox()}},destroy:function(){return t.destroy(),t.pi}}),
this.publicInstance}
var _e,qe,$e,Ve,Xe,Ue,Fe,Ge,We,He,Ye,Ke,Qe,Je,tn,en,nn,rn,on,an,sn,ln,un,cn,fn,hn,pn,dn,vn,mn,gn,bn,yn,wn,xn,kn,En=[],Sn=function(t,e){
var n=Ie.getSvg(t)
if(null===n)return null
for(var r=En.length-1;r>=0;r--)if(En[r].svg===n)return En[r].instance.getPublicInstance()
return En.push({svg:n,instance:new Be(n,e)
}),En[En.length-1].instance.getPublicInstance()}
function Mn(){if(qe)return _e
return qe=1,_e=function(t,e){var n,r,o,i
for(n=0,r=t.length;n<r;++n)o=t[n],i&&e({a:i,b:i[2],z:o}),i=o}}function Cn(){
if(Ve)return $e
return Ve=1,$e=function(t){var e,n=[]
for(e=0;e<2;++e)n.push(t.slice(0,2))
return n}}function zn(){if(Ue)return Xe
return Ue=1,Xe=function(t,e){var n,r,o=[]
if("number"==typeof e){for(n=0;n<2;++n)r=n,o.push(t[r]*e)
return o}return[t[0]*e[0]-t[1]*e[1],t[0]*e[1]+t[1]*e[0]]}}function An(){
if(Ge)return Fe
var t
return Ge=1,t=Cn(),Fe=function(e,n){var r,o,i
if(!e)return t(n)
for(r=[[],[]],o=0;o<2;++o)i=o,r[0].push(Math.min(e[0][i],n[i])),r[1].push(Math.max(e[1][i],n[i]))
return r}}function Nn(){if(He)return We
var t
return He=1,t=$t(),We=function(e){return t(e.z,e.a)},We}function Pn(){
if(Ke)return Ye
var t
return Ke=1,t=Xt,Ye=function(e){return t(e,e)}}function Tn(){if(en)return tn
return en=1,tn=function(t,e){var n,r,o=[]
for(n=0;n<2;++n)r=n,o.push(t[r]+e[r])
return o}}function Zn(){if(rn)return nn
var t,e,n,r
return rn=1,t=function(){return Je?Qe:(Je=1,t=Pn(),Qe=function(e,n){var r,o,i=[]
for("number"!=typeof n&&(e=[e[0]*n[0]+e[1]*n[1],e[1]*n[0]-e[0]*n[1]],n=t(n)),r=0;r<2;++r)o=r,
i.push(e[o]/n)
return i})
var t}(),e=Tn(),n=zn(),r=Nn(),nn=function(o,i){
return t(e(e(o.a,o.z),n(r(o),i)),2)},nn}function On(){if(an)return on
var t
return an=1,t=Zn(),on=function(e){return t(e,[0,(1/e.b-e.b)/2])},on}
function In(){if(ln)return sn
var t,e
return ln=1,t=$t(),e=Ut,sn=function(n,r){return e(t(n,r))}}function Dn(){
if(hn)return fn
var t,e,n,r,o,i,a
return hn=1,t=Cn(),e=zn(),n=An(),r=Nn(),o=On(),cn||(cn=1,a=In(),un=function(t){
return Math.abs(1/t.b+t.b)/4*a(t.a,t.z)}),i=un,fn=function(a){
var s,l,u,c,f,h,p,d,v,m,g
if(s=n(t(a.a),a.z),!a.b)return s
for(l=r(a),u=[1,-a.b],u=e(u,u),c=e(l,u),u[0]=-u[0],c.push.apply(c,e(l,u)),c.push.apply(c,l),
c.push(-l[0],-l[1]),f=0,h=c.length;f<h;++f)p=f,d=c[f],c[p]=d?d>0?1:-1:0
for(v=0,f=0;f<=3;++f)c[p=f]&&c[p]!==c[p+4]&&(v|=1<<p%2+c[p]+1)
if(!v)return s
for(m=o(a),g=i(a),f=0;f<=3;++f)2===(p=f)&&(g=-g),v&1<<p&&(s[p>>1][1&p]=m[1&p]-g)
return s},fn}function Ln(){if(dn)return pn
var t
return dn=1,t=An(),pn=function(e,n){if(!e)return n
if(!n)return e
return t(t(e,n[0]),n[1])}}function Bn(){if(mn)return vn
var t,e,n
return mn=1,t=Mn(),e=Dn(),n=Ln(),vn=function(r){var o
return t(r,(function(t){o=n(o,e(t))})),o}}function jn(){if(bn)return gn
var t
return bn=1,t=$t(),gn=function(e){if(e)return t(e[1],e[0])}}
yn=Ot,wn=Bn(),xn=jn(),kn=Ut
var Rn,_n,qn,$n,Vn,Xn,Un,Fn,Gn,Wn,Hn,Yn,Kn=function(){var t,e,n,r,o
for(t=0,n=(e=yn.ktes).length;t<n;++t)r=t,(o=e[t]).i=r,o.W=kn(xn(wn(o._)))
yn.ktes.sort((function(t,e){return e.W-t.W}))}
function Qn(){if($n)return qn
return $n=1,qn=function(t){var e,n,r,o,i,a,s,l,u
for(e=Ln(),n=function(){
return _n?Rn:(_n=1,t=zn(),e=Tn(),n=$t(),r=jn(),Rn=function(o,i){var a
if(o)return a=t(r(o),i-1),[n(o[0],a),e(o[1],a)]})
var t,e,n,r}(),r=Bn(),o=0,i=t.length;o<i;++o)a=t[o],s=e(s,r(a))
return l=n(s,1.01),s=e(s,r(u=[[l[0][0],0,0],[l[1][0],0,0]])),u.bounds=n(s,1.01),
u},qn}function Jn(){if(Fn)return Un
var t
return Fn=1,t=Xn?Vn:(Xn=1,Vn=function(t,e){var n,r
for(n=0;n<2;++n)if(t[r=n]!==e[r])return!1
return!0}),Un=function(e){return e&&e.length>0&&t(e[0],e[e.length-1])}}
function tr(){if(Wn)return Gn
var t,e
return Wn=1,t=In(),e=Jn(),Gn=function(n){var r,o,i,a,s,l
for(r="",o=0,i=n.length;o<i;++o)a=n[o],r&&(r+=" "),l?l[2]?(s=Math.abs(1/l[2]+l[2])/4*t(a,l),
r+="A "+s+" "+s+" 0 "+Number(1<Math.abs(l[2]))+" "+Number(l[2]>0)):r+="L":r+="M",
r+=" "+a[0]+" "+a[1],l=a
e(n)&&(r+=" Z")
return r}}function er(){if(Yn)return Hn
var t
return Yn=1,t=jn(),Hn=function(e){
return[e[0][0],-e[1][1]].concat(t(e)).join(" ")}}!function(t){var e,n,r,i
function a(t){var e,n,r,o,i,a,s,l,u,c
for(r in n=[],t)o=t[r],n.push([r.toLowerCase(),r,o])
for((e=n).sort((function(t,e){return t[0]>e[0]?1:-1
})),i=[],a=[],s=[],l=0,u=e.length;l<u;++l)c=e[l],
(/id$/.test(c[0])?i:/^\s*[-+]?[.\d]/.test(c[2])?s:a).push(c)
return i.push.apply(i,a),i.push.apply(i,s),function(){var t,e,n,r=[]
for(t=0,n=(e=i).length;t<n;++t)c=e[t],r.push(c[1]+": "+c[2])
return r}().join("\n")}e=Sn,n=o.exports,r=Ot,i=Kn,ue(t,le),t.view=function(){
var t,o,s,l,u
return t=Qn(),o=tr(),s=er(),r.KTEs?n("",{oncreate:function(){
document.title="Просмотр КТЭ: "+r.name,
r.ktes=r.KTEs,delete r.KTEs,i(),n.redraw()}}):r.ktes?(l=t(function(){
var t,e,n,o=[]
for(t=0,n=(e=r.ktes).length;t<n;++t)(u=e[t])._&&o.push(u._)
return o}()),n("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:s(l.bounds),
oncreate:function(t){e(t.dom,{controlIconsEnabled:!0})}},n("g",n("g.ktes",{
transform:"scale(1, -1)"},function(){var t,e,i,s=[]
for(t=0,i=(e=r.ktes).length;t<i;++t)u=e[t],s.push(n("path.kte",{
class:"kte-"+(u.i%3+1),d:o(u._)},n("title",a(u.$))))
return s}(),n("path.axis",{d:o(l)
},n("title","Ось вращения")))))):void location.replace("#!/kte")}}(we)
var nr,rr,or,ir,ar,sr,lr,ur,cr,fr,hr,pr,dr,vr,mr,gr,br,yr,wr,xr,kr,Er,Sr,Mr,Cr,zr,Ar,Nr,Pr,Tr,Zr,Or,Ir,Dr,Lr,Br,jr,Rr,_r,qr,$r,Vr,Xr,Ur,Fr={},Gr={},Wr={}
function Hr(){if(rr)return nr
return rr=1,nr=function(t,e){
return e?[e[0][0]*t[0]+e[1][0]*t[1]+e[2][0],e[0][1]*t[0]+e[1][1]*t[1]+e[2][1]]:t.slice(0,2)
}}function Yr(){if(ir)return or
return ir=1,or=function(t){var e,n
return t*=Math.PI/180,e=Math.cos(t),n=Math.sin(t),[[e,n],[-n,e],[0,0]]}}
function Kr(){if(fr)return cr
return fr=1,cr=function(t){var e,n,r,o=[]
for(e=t.length-1;e>=0;--e)n=e,r=t[e],o.push(r.slice(0,2).concat(n?-t[n-1][2]:0))
return o}}function Qr(){if(gr)return mr
return gr=1,mr=function(t){return[[1,0],[0,1],t.slice(0,2)]}}function Jr(){
if(xr)return wr
var t,e
return xr=1,t=Hr(),e=yr?br:(yr=1,br=function(t){
return t[0][0]*t[1][1]-t[1][0]*t[0][1]}),wr=function(n,r){var o,i,a,s,l
for(i=[],a=0,s=n.length;a<s;++a)l=n[a],i.push(t(l,r).concat(l[2]||0))
if(o=i,r&&0>e(r))for(a=0,s=o.length;a<s;++a)(l=o[a])[2]=-l[2]
return o}}function to(){if(Er)return kr
var t,e,n,r
return Er=1,t=function(){if(pr)return hr
var t,e
function n(t,e){return t.x-e.x}return pr=1,t=Ut,e=Kr(),hr=function(r){
var o,i,a,s,l,u,c,f,h,p,d,v,m
for(o=[],i=0,a=r.length;i<a;++i)s=i,l=r[i],o.push(u={id:s,path:l,last:!1,
x:l[0][0],y:l[0][1]}),c=l[l.length-1],o.push(u.peer={id:s,path:l,last:!0,x:c[0],
y:c[1],peer:u})
for(o.sort(n),f=0,i=0,a=o.length;i<a;++i){
for(s=i,p=(h=o[i]).x-.1;f<s&&o[f].x<p;)f++
for(p=h.x+.1,s=f;(d=o[s++])&&d.x<p;)d.id===h.id||.1<Math.abs(d.y-h.y)||(v=t([h.x-d.x,h.y-d.y]),
h.next&&h.distance<v||(h.next=d,h.distance=v))}
for(i=0,a=o.length;i<a;++i)s=i,(h=o[i]).next&&h.next.next!==h&&(h.next=!1)
function g(t){var n,r
for(n=t,m.push(r=[]);;){
if(n.done=n.peer.done=!0,r.length&&r.pop(),r.push.apply(r,n.last?e(n.path):n.path),
!(n=n.peer.next))return
if(n===t)return r.pop(),void r.push(r[0].slice(0,2).concat(0))}}
for(m=[],i=0,a=o.length;i<a;++i)if(!(h=o[i]).done){
if(h.next&&(h=h.peer).next)continue
g(h)}for(i=0,a=o.length;i<a;++i)(h=o[i]).done||g(h)
return m.reverse(),m}}(),e=function(){if(vr)return dr
function t(r){var o
return"function"!=typeof(o=t.mode)&&(o=o?e:n),o(r)}function e(t){var e
return[(e=t.controls)[0].concat(0),e[e.length-1].concat(0)]}function n(){
throw TypeError("SPLINE found!")}return vr=1,dr=t,t.mode=!1,dr}(),n=Qr(),r=Jr(),
kr=function(o){var i,a,s,l,u
for(a={},s=0,l=o.length;s<l;++s)(u=o[s]).name&&(a[u.name]=u)
return i=a,function o(a){var s,l,u,c,f,h,p,d,v,m,g,b,y
if(a.paths)return
for(a.paths=[],s=a.closed.concat(t(a.nonClosed.concat(function(){var t,n,r,o=[]
for(t=0,r=(n=a.splines).length;t<r;++t)l=n[t],o.push(e(l))
return o
}()))),u=0,f=(c=a.edges).length;u<f;++u)if(h=c[u],p=i[h.name])for(o(p),d=n(h.origin),
v=0,g=(m=p.paths).length;v<g;++v)b=m[v],s.push(r(b,d))
for(d=n(a.base),u=0,f=s.length;u<f;++u)y=u,b=s[u],s[y]=r(b,d)
a.paths=s}(o[0]),o[0].paths}}function eo(){if(Mr)return Sr
var t,e,n
return Mr=1,t=function(){return sr||(sr=1,t=Tn(),e=Hr(),n=Yr(),ar=function(r){
var o,i,a,s
function l(){o.push(i={id:o.length,base:[0,0],closed:[],nonClosed:[],splines:[],
edges:[]})}function u(){var t
if(!/^\d+$/.test(t=r().trim()))throw Error("Invalid DXF file")
a={id:+t,val:r().trim()}}function c(){for(var t,e,n,r;;)switch(u(),a.id){case 0:
return void i.nonClosed.push([[t,e,0],[n,r,0]])
case 10:t=+a.val
break
case 20:e=+a.val
break
case 11:n=+a.val
break
case 21:r=+a.val}}function f(){for(var r,o,s,l,c,f,h,p,d,v;!r;)switch(u(),a.id){
case 0:r=!0
break
case 10:o=+a.val
break
case 20:s=+a.val
break
case 40:l=+a.val
break
case 50:c=+a.val
break
case 51:f=+a.val}
null!=c&&null!=f?(h=[o,s],p=f-c,p-=360*Math.floor(p/360),(d=t(h,e([l,0],n(c))))[2]=Math.tan(p*Math.PI/720),
(v=t(h,e([l,0],n(f))))[2]=0,
i.nonClosed.push([d,v])):i.closed.push([[o-l,s,-1],[o+l,s,-1],[o-l,s,0]])}
function h(t,e){var n
e?(t.push(n=t[0].slice()),n[2]=0,i.closed.push(t)):i.nonClosed.push(t)}
function p(){var t,e,n,r
for(t=[];!e;)switch(u(),a.id){case 0:e=!0
break
case 10:t.push(n=[+a.val,0,0])
break
case 20:n[1]=+a.val
break
case 42:n[2]=+a.val
break
case 70:r=1&+a.val}h(t,r)}function d(){var t,e,n,r
for(t=[];!e;)switch(u(),a.id){case 0:e=!0
break
case 70:n=1&+a.val}for(e=!1;;){switch(a.id){case 0:
(e="VERTEX"!==a.val)||t.push(r=[0,0,0])
break
case 10:r[0]=+a.val
break
case 20:r[1]=+a.val
break
case 42:r[2]=+a.val}if(e)break
u()}h(t,n)}function v(){if(i.id)throw Error("Nested BLOCK definition")
for(l();;)switch(u(),a.id){case 0:return
case 2:i.name=a.val
break
case 10:i.base[0]=+a.val
break
case 20:i.base[1]=+a.val}}function m(){var t
for(i.edges.push(t={origin:[0,0],scale:[1,1],angle:0,rows:1,columns:1,cell:[0,0]
});;)switch(u(),a.id){case 0:return
case 2:t.name=a.val
break
case 10:t.origin[0]=+a.val
break
case 20:t.origin[1]=+a.val
break
case 41:t.scale[0]=+a.val
break
case 42:t.scale[1]=+a.val
break
case 44:t.cell[0]=+a.val
break
case 45:t.cell[1]=+a.val
break
case 50:t.angle=+a.val
break
case 70:t.columns=+a.val
break
case 71:t.rows=+a.val}}function g(){var t,e,n
for(i.splines.push(t={knots:[],controls:[],fits:[]});;)switch(u(),a.id){case 0:
return
case 71:t.degree=+a.val
break
case 40:t.knots.push(+a.val)
break
case 10:t.controls.push(e=[+a.val,0])
break
case 20:e[1]=+a.val
break
case 11:t.fits.push(n=[+a.val,0])
break
case 21:n[1]=+a.val}}for(o=[],l(),u();!s;)if(0===a.id)switch(a.val){case"EOF":
s=!0
break
case"LINE":c()
break
case"CIRCLE":case"ARC":f()
break
case"POLYLINE":d()
break
case"LWPOLYLINE":p()
break
case"BLOCK":v()
break
case"ENDBLK":i=o[0],u()
break
case"INSERT":m()
break
case"SPLINE":g()
break
default:u()}else u()
return o}),ar
var t,e,n}(),e=ur?lr:(ur=1,lr=function(t){var e
return e=t.split(/\r?\n|\r/),function(){return e.length?e.shift():""}
}),n=to(),Sr=function(r){"string"==typeof r&&(r=e(r))
return n(t(r))}}function no(){if(Tr)return Pr
var t,e,n
return Tr=1,t=Jn(),e=Mn(),n=function(){if(Nr)return Ar
var t,e,n,r
function o(t){return t*t}return Nr=1,t=Xt,e=Yt,n=Pn(),r=$t(),Ar=function(i){
var a,s
return a=t(i.a,e(i.z))/2,i.b&&(s=o(i.b),a-=(Math.atan(i.b)*o(1+s)-(1-s)*i.b)/s/8*n(r(i.a,i.z))),
a},Ar}(),Pr=function(r){var o
if(!t(r))return 0
return o=0,e(r,(function(t){o+=n(t)})),o}}function ro(){if(Br)return Lr
function t(t){var e,n,r
if(!Jn()(t))for(e=t[0],n=t[t.length-1],r=0;r<2;++r)if(.001>Math.abs(e[r]-n[r]))return r
}function e(t,e){var r,o,i
for(r=0,o=Math.min(t.length,e.length);r<o;++r)if(i=n(t[r],e[r]))return i
return n(t.length,e.length)}function n(t,e){return t===e?0:t>e?1:-1}return Br=1,
Lr=function(n){var r,o,i,a,s,l,u,c,f,h,p,d,v,m,g,b,y,w,x,k,E,S,M,C
for(r=Ut,o=Bn(),i=function(){return zr?Cr:(zr=1,t=Jn(),Cr=function(e){
e&&e.length&&!t(e)&&(e[e.length-1][2]=0,e.push(e[0].slice(0,2).concat(0)))})
var t}(),a=no(),s=Kr(),l=Jr(),u=function(){return Or?Zr:(Or=1,Zr=function(){
return[[0,-1],[1,0],[0,0]]})}(),c=function(){return Dr?Ir:(Dr=1,Ir=function(){
return[[-1,0],[0,-1],[0,0]]})
}(),f=Qr(),h=jn(),v=n.length,m=0,g=1,b=0,y=0,w=n.length;y<w;++y)x=n[y],
k=[x.length,r(h(o(x)))],
(null==p||0<e(k,p))&&(E=x,p=k),null!=(S=t(x))&&(m++,2===x.length&&.001>Math.abs(x[0][2])&&v--,
(!d||0<e(k,d))&&(g=S,b=x[0][S],d=k))
if(!v)throw RangeError("No contour(s) found")
x=E,M=b,g||(M=-M,x=l(x,u()))
x=l(x,f([0,-M])),i(x),0>a(x)&&(x=s(x))
C=o(x),M=-C[0][0],C[0][1]+C[1][1]<0&&(x=l(x,c()),M=C[1][0])
return{path:x=l(x,f([M,0])),paths:v,axis:b,dir:g,$dir:"ZX".charAt(g),axles:m}
},Lr}function oo(){if(qr)return _r
function t(t,e,n){n&&(t[e.replace(/^:/,"")]=/^:/.test(e)?n:Number(n))}
return qr=1,_r=function(e){var n,r,o,i,a,s,l,u,c,f,h,p,d,v,m,g
for(e=e.split(/\r?\n|\r/).map((function(t){return t.trim()
})),n=5;n<=6;++n)if(!/^\d+$/.test(e[n]))throw SyntaxError("Incorrect file format @line["+(n+1)+"]!")
for(r=Number(e[6]),n=2;n<=4;++n)if(e[n]&&!/^\d+([.]\d*)?(e[-+]?\d+)?$/i.test(e[n]))throw SyntaxError("Incorrect floating point value @line["+(n+1)+"]!")
for(n=0;n<r;++n)if(!/(,.*?){3}/.test(e[o=7+n]))throw SyntaxError("No technological data @line["+(o+1)+"]!")
for(n=0;n<=r;++n)if(!/G\s*\d/i.test(e[o=7+r+n]))throw SyntaxError("No geometry @line["+(o+1)+"]!")
for(i=function(){return Rr||(Rr=1,jr=function(t){var e,n,r
function o(n){var r
return r=n.exec(t),e+=t.substring(0,r.index),t=t.substring(r.index+r[0].length),
r[0].trim()}for(n=[];;){if(r||(e="",t=t.trim()),2===r)switch(o(/""?|$/)){
case'"':r=1
continue
case'""':e+='"'
continue
default:r=3}else switch(o(/"|\s*,|\s*$/)){case'"':r=2
continue
case"":r=3}if(n.push(e),3===r)return n
r=0}}),jr
}(),a=re(e.slice(7+r,8+2*r).join("\n")),s="thread,Ra,,,,,tstart,xdiameter,depth,t$,pitch,:Q".split(","),
u=[],n=0;n<r;++n){
for(o=i(e[7+n]),c={},f=0,h=s.length;f<h;++f)p=f,(d=s[f])&&t(c,d,o[p])
u.push(c)}
for(l=u,v=":id,:matter,hard,D,W,dir".split(","),m={},n=0,h=v.length;n<h;++n)p=n,
g=v[n],t(m,g,e[p])
return{path:a,global:m,spans:l}},_r}!function(t){var e,n
async function r(t){var r,o,i,a,s,l,u,c,f
for(r=eo(),o=ro(),i=oo(),delete n.errors,a=0,s=t.length;a<s;++a){l=t[a]
try{switch(u=await l.text(),l.name.replace(/.*[.]/,"").toLowerCase()){case"dxf":
c=o(r(u))
break
case"txt":c=i(u)
break
default:throw RangeError("Unknow file type!")}
n._=c,n.name=l.name,location.hash="#!/dxf/edit"
break}catch(t){f=t,(n.errors||(n.errors={}))[l.name]=f.message}}e.redraw()}
e=o.exports,n=Wr,ue(t,r),t.view=function(){var t
return t=this,e.fragment(e("input.hidden",{type:"file",accept:".dxf,.txt",
oncreate:function(e){(t.uploadButton=e.dom).onchange=function(){r(this.files)}}
}),e("button",{type:"button",onclick:function(){t.uploadButton.click()}
},"Загрузить файл геометрии!")," ...или перетащите DXF-файл в это окно...")}
}(Gr),$r=o.exports,Vr=Gr,Xr=Wr,Ur=he,Fr.view=function(){
return[$r("h1",document.title="Импорт геометрии из DXF"),$r("form",$r(Vr)),$r(Ur,Xr)]
}
var io,ao,so={},lo={}
io=o.exports,ao=Wr,lo.view=function(){var t,e,n,r,o
if(ao.path)return t=Qn(),e=er(),n=tr(),r=t([ao.path]),io("svg",{
xmlns:"http://www.w3.org/2000/svg",viewBox:e(r.bounds)
},io("g",io("g.DXF",io("defs",function(){var t,e,r=[]
for(t=0,e=ao.path.length;t<e;++t)(o=t)&&r.push(io("path",{id:":"+o,
d:n(ao.path.slice(o-1,o+1)),"vector-effect":"non-scaling-stroke"}))
return r}()),"span"===ao.tab?io("use",{href:"#:"+ao.n,class:"active"
}):void 0,function(){var t,e,n=[]
for(t=0,e=ao.path.length;t<e;++t)(o=t)&&n.push(r.call(this,o))
return n
function r(t){return io("use",{href:"#:"+t,onclick:function(){
ao.n=t,ao.tab="span"}})}}.call(this),io("path.axis",{d:n(r)}))))}
var uo={},co={}
function fo(t){return Math.round(100*t)/100}
co.k="info",co.t="Сводка",co.view=function(){var t,e
return(t=o.exports)("ul",t("li","Файл: "+(e=Wr).name),t("li","Отрезков: "+e.spans.length),null!=e.$.paths&&1!==e.$.paths?t("li","Найдено контуров: "+e.$.paths):void 0,null!=e.$.axles&&1!==e.$.axles?t("li","Найдено осей: "+e.$.axles):void 0,null!=e.$.$dir?t("li","Используется ось "+e.$.$dir+"="+fo(e.$.axis)):void 0,t("li","Размеры: "+e.size.map(fo).join("x")+" (⌀"+fo(2*e.size[1])+")"),t("li","Перейдите на вкладку ",t("a",{
href:"#",onclick:function(){return e.tab="text",!1}
},"Результат")," для просмотра / сохранения входного файла для распознавания КТЭ"))
}
var ho,po,vo,mo,go={}
ho=o.exports,po=Wr,go.k="global",go.t="Параметры",go.view=function(){
return null==po.n&&(po.n=1),
ho("form",ho("fieldset",ho("legend","Начало обработки"),function(){
var t,e,n,r=[]
for(t=0,n=(e=["Слева","Справа"]).length;t<n;++t)r.push(o.call(this,t,e[t]))
return r
function o(t,e){var n,r
return ho("label",ho("input",{type:"radio",name:"dir",
checked:(null!=(r=(n=po.global).dir)?r:n.dir=t)===t,onclick:function(){
return po.global.dir=t}})," ",e,t?ho(mo):" ")}
}.call(this)),ho(vo,"id","Код детали"),ho(vo,"matter","Материал"),ho(vo,"hard","Твёрдость",!0),ho(vo,"D","Диаметр заготовки",!0),ho(vo,"W","Длина заготовки",!0))
},vo={view:function(t){var e,n,r,o,i
return e=po.global,n=t.children,r=n[0],o=n[1],i=n[2],ho("label",o,ho("br"),ho("input",{
type:i?"number":"text",step:"any",min:0,value:e[r],onchange:function(){
e[r]=this.value.trim()}}),ho("span"),ho("br"))}},mo={view:function(){var t,e
return ho("sup.popover","*",ho("",ho("select",{onchange:function(){
po.mirror=this.selectedIndex}},function(){var n,r,o,i,a=[]
for(n=0,o=(r=["Установкой флага 0|1","Отражением ±Z <=>"]).length;n<o;++n)t=n,e=r[n],
a.push(ho("option",{selected:(null!=(i=po.mirror)?i:po.mirror=t)===t},e))
return a}())))}}
var bo,yo,wo,xo,ko={}
function Eo(){return yo.spans[yo.n-1]}
bo=o.exports,yo=Wr,ko.k="span",ko.t="Локально",ko.view=function(){var t,e
return bo("form",bo(xo),bo(wo,"Ra","Шероховатость Ra"),bo(wo,"Q","Квалитет","\\p{Letter}?\\d+"),bo("label",bo("input",{
type:"checkbox",checked:Eo().thread,onclick:function(){
Eo().thread=Number(this.checked)}})," Резьба"),bo("",{
class:Eo().thread?void 0:"hidden",style:{paddingLeft:"1em"}
},bo("label","Тип",bo("br"),bo("select",{onchange:function(){
Eo().t$=this.selectedIndex}},function(){var n,r,o,i,a,s=[]
for(n=0,o=(r=["Метрическая","Дюймовая","Трапецеидальная"]).length;n<o;++n)t=n,e=r[n],
s.push(bo("option",{selected:(null!=(a=(i=Eo()).t$)?a:i.t$=t)===t},e))
return s
}())),bo("br"),bo(wo,"pitch","Шаг резьбы"),bo(wo,"depth","Глубина резьбы"),bo(wo,"xdiameter","Внешний диаметр (для внутренней резьбы)"),bo(wo,"tstart","Начало резьбы")))
},wo={view:function(t){var e,n,r,o
return e=t.children,n=e[0],r=e[1],o=e[2],bo("label",r,bo("br"),bo("input",{
type:o?"text":"number",pattern:o,step:"any",min:0,value:Eo()[n],
onchange:function(){Eo()[n]=this.value.trim()}}),bo("span"),bo("br"))}},xo={
view:function(){return bo("table",bo("tr",{style:{whiteSpace:"nowrap"}
},bo("td",bo("button",{type:"button",disabled:1===yo.n,onclick:function(){yo.n=1
}},"|<<")),bo("td",bo("button",{type:"button",onclick:function(){
--yo.n||(yo.n=yo.spans.length)}},"<<")),bo("td",{width:"100%",align:"center"
},yo.n+" / "+yo.spans.length),bo("td",bo("button",{type:"button",
onclick:function(){yo.n%=yo.spans.length,yo.n++}},">>")),bo("td",bo("button",{
type:"button",disabled:yo.n===yo.spans.length,onclick:function(){
yo.n=yo.spans.length}},">>|"))))}}
var So,Mo,Co,zo,Ao,No,Po,To,Zo={}
function Oo(){if(Mo)return So
return Mo=1,So=function(){return[[1,0],[0,1],[0,0]]}}function Io(){
if(To)return Po
var t,e
function n(t){return Math.round(1e3*t)/1e3}
return To=1,t=On(),e=$t(),Po=function(r){var o,i,a,s,l,u,c,f
for(o="",i=0,a=r.length;i<a;++i)s=i,l=r[i],u=0===s?0:0===f[2]?1:f[2]>0?3:2,o+="G"+u+("X"+n((h=l)[1])+"Z"+n(h[0])),
f&&0!==f[2]&&(c=t({a:f,b:f[2],z:l
}),c=e(c,f),o+="I"+n(c[1])+"K"+n(c[0])),o+="\n",f=l
var h
return o},Po}var Do,Lo,Bo,jo,Ro,_o,qo,$o,Vo,Xo,Uo,Fo,Go,Wo=function(){
var t,e,n,r,o,i,a,s,l,u,c,f,h
t=Wr,zn(),e=Qr(),n=function(){return zo||(zo=1,Co=function(t){var e,n,r
return e=Oo(),t=Number(!!t),n=e(),(r=n[t])[t]=-r[t],n}),Co}(),r=function(){
return No||(No=1,Ao=function(){var t,e,n,r,o,i,a
for(t=Oo(),e=Hr(),n=$t(),r=t(),o=arguments.length-1;o>=0;--o)if(i=arguments[o])for(a=0;a<3;++a)r[a]=e(r[a],i)
for(o=0;o<2;++o)r[o]=n(r[o],r[2])
return r}),Ao
}(),o=Jr(),i=Io(),a=Kr(),l=(s=t.global).dir,u=t.path,c=t.size,f=t.spans,
l&&t.mirror&&(l=Number(!l),
u=o(a(u),r(e([t.maxZ,0]),n())),(f=f.slice()).reverse())
return(s.id||42)+"\n"+(s.matter||"STEEL")+"\n"+(s.hard||1)+"\n"+(s.D||Math.ceil(2*c[1]))+"\n"+(s.W||Math.ceil(c[0]))+"\n"+(l||0)+"\n"+f.length+"\n"+function(){
var t,e,n,r=[]
for(t=0,n=(e=f).length;t<n;++t)h=e[t],r.push((h.thread||0)+","+Ho(h.Ra)+",,,,,"+Ho(h.tstart)+","+Ho(h.xdiameter)+","+Ho(h.depth)+","+Ho(h.t$)+","+Ho(h.pitch)+","+Ho(h.Q))
return r}().join("\n")+"\n"+i(u)}
function Ho(t){
return null==t&&(t=""),/^\s|\s$|"|,/.test(t)?'"'+t.replace(/"/g,'""')+'"':t}
Do=o.exports,Lo=Wr,Bo=Wo,Zo.k="text",Zo.t="Результат",Zo.view=function(){var t
return t=this,Do("form",Do("button",{type:"button",style:{width:"100%"},
onclick:function(){!function(t,e){var n,r
;(n=document.createElement("a")).setAttribute("href","data:text/plain;charset=utf-8,"+encodeURIComponent(e)),
n.setAttribute("download",t),
document.createEvent?((r=document.createEvent("MouseEvents")).initEvent("click",!0,!0),
n.dispatchEvent(r)):n.click()}(Lo.name.replace(/[.].*/,".txt"),t.txt.value)}
},"Сохранить файл"),Do("p"),Do("textarea",{style:{width:"100%",
boxSizing:"border-box"},rows:27,readonly:!0,oncreate:function(e){t.txt=e.dom}
},Bo()))},jo=o.exports,Ro=Wr,_o=[co,go,ko,Zo],uo.view=function(){var t
return[jo(".tabs",function(){var t,e,n,r=[]
for(t=0,n=(e=_o).length;t<n;++t)r.push(o.call(this,e[t]))
return r
function o(t){var e
return[jo("span"),jo("label",{
class:(null!=(e=Ro.tab)?e:Ro.tab=t.k)===t.k?"active":void 0},jo("input",{
type:"radio",name:"tab",checked:Ro.tab===t.k,onclick:function(){Ro.tab=t.k}
})," ",t.t)]}}.call(this)),function(){var e,n,r,o=[]
for(e=0,r=(n=_o).length;e<r;++e)t=n[e],o.push(jo("",{
class:Ro.tab!==t.k?"hidden":void 0},jo(t)))
return o}()]},qo=o.exports,$o=Wr,Vo=lo,Xo=uo,so.view=function(){
if($o._&&function(){var t,e,n,r,o
t=Bn(),e=jn(),n=$o._,delete $o._,$o.$=n,r=t(n.path),(o=e(r))[1]=Math.max.apply(Math,function(){
var t,e=[]
for(t=0;t<2;++t)e.push(Math.abs(r[t][1]))
return e}()),$o.path=n.path,$o.global=n.global||{id:$o.name.replace(/[.].*/,""),
D:Math.ceil(2*o[1]),W:Math.ceil(o[0])},$o.spans=n.spans||function(){var t,e,n=[]
for(t=0,e=$o.path.length-1;t<e;++t)n.push({})
return n}(),$o.size=o,$o.maxZ=r[1][0],$o.n=1,$o.tab="info"
}(),$o.path)return document.title="Ввод технологических параметров: "+$o.name,
[qo("",qo(Vo)),qo("",qo(Xo))]
location.replace("#!/dxf")},function(t){var e,n,r,o,i
e=At,n=Zt,r=we,o=Fr,i=so,t["/"]=e,t["/dxf"]=o,t["/dxf/edit"]=i,t["/kte"]=n,t["/kte/show"]=r
}(zt),
Fo=gt,Go=zt,(Uo=o.exports).mount(document.head,Fo),Uo.route(document.body,"/",Go)
}()
//# sourceMappingURL=view.js.map
