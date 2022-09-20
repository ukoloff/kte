!function(){"use strict"
var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{}
function e(t){var e=t.default
if("function"==typeof e){var n=function(){return e.apply(this,arguments)}
n.prototype=e.prototype}else n={}
return Object.defineProperty(n,"__esModule",{value:!0
}),Object.keys(t).forEach((function(e){
var o=Object.getOwnPropertyDescriptor(t,e)
Object.defineProperty(n,e,o.get?o:{enumerable:!0,get:function(){return t[e]}})
})),n}var n,o,r={exports:{}}
function i(){if(o)return n
function t(t,e,n,o,r,i){return{tag:t,key:e,attrs:n,children:o,text:r,dom:i,
domSize:void 0,state:void 0,events:void 0,instance:void 0}}
return o=1,t.normalize=function(e){
return Array.isArray(e)?t("[",void 0,void 0,t.normalizeChildren(e),void 0,void 0):null==e||"boolean"==typeof e?null:"object"==typeof e?e:t("#",void 0,void 0,String(e),void 0,void 0)
},t.normalizeChildren=function(e){var n=[]
if(e.length){
for(var o=null!=e[0]&&null!=e[0].key,r=1;r<e.length;r++)if((null!=e[r]&&null!=e[r].key)!==o)throw new TypeError(!o||null==e[r]&&"boolean"!=typeof e[r]?"In fragments, vnodes must either all have keys or none have keys.":"In fragments, vnodes must either all have keys or none have keys. You may wish to consider using an explicit keyed empty fragment, m.fragment({key: ...}), instead of a hole.")
for(r=0;r<e.length;r++)n[r]=t.normalize(e[r])}return n},n=t}
var a,s,l=i(),u=function(){var t,e=arguments[this],n=this+1
if(null==e?e={}:("object"!=typeof e||null!=e.tag||Array.isArray(e))&&(e={},n=this),
arguments.length===n+1)t=arguments[n],Array.isArray(t)||(t=[t])
else for(t=[];n<arguments.length;)t.push(arguments[n++])
return l("",e.key,e,t)}
function c(){return s?a:(s=1,a={}.hasOwnProperty)}
var f=i(),h=u,p=c(),d=/(?:(^|#|\.)([^#\.\[\]]+))|(\[(.+?)(?:\s*=\s*("|'|)((?:\\["'\]]|.)*?)\5)?\])/g,v={}
function m(t){for(var e in t)if(p.call(t,e))return!1
return!0}function g(t){for(var e,n="div",o=[],r={};e=d.exec(t);){
var i=e[1],a=e[2]
if(""===i&&""!==a)n=a
else if("#"===i)r.id=a
else if("."===i)o.push(a)
else if("["===e[3][0]){var s=e[6]
s&&(s=s.replace(/\\(["'])/g,"$1").replace(/\\\\/g,"\\")),"class"===e[4]?o.push(s):r[e[4]]=""===s?s:s||!0
}}return o.length>0&&(r.className=o.join(" ")),v[t]={tag:n,attrs:r}}
function b(t,e){var n=e.attrs,o=p.call(n,"class"),r=o?n.class:n.className
if(e.tag=t.tag,e.attrs={},!m(t.attrs)&&!m(n)){var i={}
for(var a in n)p.call(n,a)&&(i[a]=n[a])
n=i}
for(var a in t.attrs)p.call(t.attrs,a)&&"className"!==a&&!p.call(n,a)&&(n[a]=t.attrs[a])
for(var a in null==r&&null==t.attrs.className||(n.className=null!=r?null!=t.attrs.className?String(t.attrs.className)+" "+String(r):r:null!=t.attrs.className?t.attrs.className:null),
o&&(n.class=null),n)if(p.call(n,a)&&"key"!==a){e.attrs=n
break}return e}var y=function(t){
if(null==t||"string"!=typeof t&&"function"!=typeof t&&"function"!=typeof t.view)throw Error("The selector must be either a string or a component.")
var e=h.apply(1,arguments)
return"string"==typeof t&&(e.children=f.normalizeChildren(e.children),"["!==t)?b(v[t]||g(t),e):(e.tag=t,
e)},w=i(),x=i(),k=u,E=y
E.trust=function(t){return null==t&&(t=""),w("<",void 0,void 0,t,void 0,void 0)
},E.fragment=function(){var t=k.apply(0,arguments)
return t.tag="[",t.children=x.normalizeChildren(t.children),t}
var S,C,M=E,z={exports:{}}
function A(){if(C)return S
C=1
var t=function(e){
if(!(this instanceof t))throw new Error("Promise must be called with 'new'.")
if("function"!=typeof e)throw new TypeError("executor must be a function.")
var n=this,o=[],r=[],i=u(o,!0),a=u(r,!1),s=n._instance={resolvers:o,rejectors:r
},l="function"==typeof setImmediate?setImmediate:setTimeout
function u(t,e){return function i(u){var f
try{
if(!e||null==u||"object"!=typeof u&&"function"!=typeof u||"function"!=typeof(f=u.then))l((function(){
e||0!==t.length||console.error("Possible unhandled promise rejection:",u)
for(var n=0;n<t.length;n++)t[n](u)
o.length=0,r.length=0,s.state=e,s.retry=function(){i(u)}}))
else{if(u===n)throw new TypeError("Promise can't be resolved with itself.")
c(f.bind(u))}}catch(t){a(t)}}}function c(t){var e=0
function n(t){return function(n){e++>0||t(n)}}var o=n(a)
try{t(n(i),o)}catch(t){o(t)}}c(e)}
return t.prototype.then=function(e,n){var o,r,i=this._instance
function a(t,e,n,a){e.push((function(e){if("function"!=typeof t)n(e)
else try{o(t(e))}catch(t){r&&r(t)}
})),"function"==typeof i.retry&&a===i.state&&i.retry()}
var s=new t((function(t,e){o=t,r=e}))
return a(e,i.resolvers,o,!0),a(n,i.rejectors,r,!1),s
},t.prototype.catch=function(t){return this.then(null,t)
},t.prototype.finally=function(e){return this.then((function(n){
return t.resolve(e()).then((function(){return n}))}),(function(n){
return t.resolve(e()).then((function(){return t.reject(n)}))}))
},t.resolve=function(e){return e instanceof t?e:new t((function(t){t(e)}))
},t.reject=function(e){return new t((function(t,n){n(e)}))},t.all=function(e){
return new t((function(t,n){var o=e.length,r=0,i=[]
if(0===e.length)t([])
else for(var a=0;a<e.length;a++)!function(a){function s(e){
r++,i[a]=e,r===o&&t(i)}
null==e[a]||"object"!=typeof e[a]&&"function"!=typeof e[a]||"function"!=typeof e[a].then?s(e[a]):e[a].then(s,n)
}(a)}))},t.race=function(e){return new t((function(t,n){
for(var o=0;o<e.length;o++)e[o].then(t,n)}))},S=t}var N,P,T,Z,O=A()
function I(){if(P)return N
P=1
var t=i()
return N=function(e){var n,o=e&&e.document,r={svg:"http://www.w3.org/2000/svg",
math:"http://www.w3.org/1998/Math/MathML"}
function i(t){return t.attrs&&t.attrs.xmlns||r[t.tag]}function a(t,e){
if(t.state!==e)throw new Error("'vnode.state' must not be modified.")}
function s(t){var e=t.state
try{return this.apply(e,arguments)}finally{a(t,e)}}function l(){try{
return o.activeElement}catch(t){return null}}function u(t,e,n,o,r,i,a){
for(var s=n;s<o;s++){var l=e[s]
null!=l&&c(t,l,r,a,i)}}function c(e,n,r,a,l){var f=n.tag
if("string"==typeof f)switch(n.state={},null!=n.attrs&&j(n.attrs,n,r),f){
case"#":!function(t,e,n){e.dom=o.createTextNode(e.children),w(t,e.dom,n)}(e,n,l)
break
case"<":h(e,n,a,l)
break
case"[":!function(t,e,n,r,i){var a=o.createDocumentFragment()
if(null!=e.children){var s=e.children
u(a,s,0,s.length,n,null,r)}
e.dom=a.firstChild,e.domSize=a.childNodes.length,w(t,a,i)}(e,n,r,a,l)
break
default:!function(t,e,n,r,a){
var s=e.tag,l=e.attrs,c=l&&l.is,f=(r=i(e)||r)?c?o.createElementNS(r,s,{is:c
}):o.createElementNS(r,s):c?o.createElement(s,{is:c}):o.createElement(s)
e.dom=f,null!=l&&function(t,e,n){
"input"===t.tag&&null!=e.type&&t.dom.setAttribute("type",e.type)
var o=null!=e&&"input"===t.tag&&"file"===e.type
for(var r in e)z(t,r,null,e[r],n,o)}(e,l,r)
if(w(t,f,a),!x(e)&&null!=e.children){var h=e.children
u(f,h,0,h.length,n,null,r),"select"===e.tag&&null!=l&&function(t,e){
if("value"in e)if(null===e.value)-1!==t.dom.selectedIndex&&(t.dom.value=null)
else{var n=""+e.value
t.dom.value===n&&-1!==t.dom.selectedIndex||(t.dom.value=n)}
"selectedIndex"in e&&z(t,"selectedIndex",null,e.selectedIndex,void 0)}(e,l)}
}(e,n,r,a,l)}else!function(e,n,o,r,i){(function(e,n){var o
if("function"==typeof e.tag.view){
if(e.state=Object.create(e.tag),null!=(o=e.state.view).$$reentrantLock$$)return
o.$$reentrantLock$$=!0}else{
if(e.state=void 0,null!=(o=e.tag).$$reentrantLock$$)return
o.$$reentrantLock$$=!0,e.state=null!=e.tag.prototype&&"function"==typeof e.tag.prototype.view?new e.tag(e):e.tag(e)
}j(e.state,e,n),null!=e.attrs&&j(e.attrs,e,n)
if(e.instance=t.normalize(s.call(e.state.view,e)),e.instance===e)throw Error("A view cannot return the vnode it received as argument")
o.$$reentrantLock$$=null
})(n,o),null!=n.instance?(c(e,n.instance,o,r,i),n.dom=n.instance.dom,
n.domSize=null!=n.dom?n.instance.domSize:0):n.domSize=0}(e,n,r,a,l)}var f={
caption:"table",thead:"table",tbody:"table",tfoot:"table",tr:"tbody",th:"tr",
td:"tr",colgroup:"table",col:"colgroup"}
function h(t,e,n,r){
var i=e.children.match(/^\s*?<(\w+)/im)||[],a=o.createElement(f[i[1]]||"div")
"http://www.w3.org/2000/svg"===n?(a.innerHTML='<svg xmlns="http://www.w3.org/2000/svg">'+e.children+"</svg>",
a=a.firstChild):a.innerHTML=e.children,
e.dom=a.firstChild,e.domSize=a.childNodes.length,e.instance=[]
for(var s,l=o.createDocumentFragment();s=a.firstChild;)e.instance.push(s),l.appendChild(s)
w(t,l,r)}function p(t,e,n,o,r,i){
if(e!==n&&(null!=e||null!=n))if(null==e||0===e.length)u(t,n,0,n.length,o,r,i)
else if(null==n||0===n.length)k(t,e,0,e.length)
else{var a=null!=e[0]&&null!=e[0].key,s=null!=n[0]&&null!=n[0].key,l=0,f=0
if(!a)for(;f<e.length&&null==e[f];)f++
if(!s)for(;l<n.length&&null==n[l];)l++
if(a!==s)k(t,e,f,e.length),u(t,n,l,n.length,o,r,i)
else if(s){
for(var h,p,y,w,x,S=e.length-1,C=n.length-1;S>=f&&C>=l&&(y=e[S],w=n[C],
y.key===w.key);)y!==w&&d(t,y,w,o,r,i),null!=w.dom&&(r=w.dom),S--,C--
for(;S>=f&&C>=l&&(h=e[f],p=n[l],h.key===p.key);)f++,l++,h!==p&&d(t,h,p,o,g(e,f,r),i)
for(;S>=f&&C>=l&&l!==C&&h.key===w.key&&y.key===p.key;)b(t,y,x=g(e,f,r)),y!==p&&d(t,y,p,o,x,i),
++l<=--C&&b(t,h,r),
h!==w&&d(t,h,w,o,r,i),null!=w.dom&&(r=w.dom),f++,y=e[--S],w=n[C],h=e[f],p=n[l]
for(;S>=f&&C>=l&&y.key===w.key;)y!==w&&d(t,y,w,o,r,i),null!=w.dom&&(r=w.dom),C--,
y=e[--S],w=n[C]
if(l>C)k(t,e,f,S+1)
else if(f>S)u(t,n,l,C+1,o,r,i)
else{var M,z,A=r,N=C-l+1,P=new Array(N),T=0,Z=0,O=2147483647,I=0
for(Z=0;Z<N;Z++)P[Z]=-1
for(Z=C;Z>=l;Z--){null==M&&(M=v(e,f,S+1))
var D=M[(w=n[Z]).key]
null!=D&&(O=D<O?D:-1,P[Z-l]=D,y=e[D],e[D]=null,y!==w&&d(t,y,w,o,r,i),null!=w.dom&&(r=w.dom),
I++)}if(r=A,I!==S-f+1&&k(t,e,f,S+1),0===I)u(t,n,l,C+1,o,r,i)
else if(-1===O)for(z=function(t){var e=[0],n=0,o=0,r=0,i=m.length=t.length
for(r=0;r<i;r++)m[r]=t[r]
for(r=0;r<i;++r)if(-1!==t[r]){var a=e[e.length-1]
if(t[a]<t[r])m[r]=a,e.push(r)
else{for(n=0,o=e.length-1;n<o;){var s=(n>>>1)+(o>>>1)+(n&o&1)
t[e[s]]<t[r]?n=s+1:o=s}t[r]<t[e[n]]&&(n>0&&(m[r]=e[n-1]),e[n]=r)}}
n=e.length,o=e[n-1]
for(;n-- >0;)e[n]=o,o=m[o]
return m.length=0,e
}(P),T=z.length-1,Z=C;Z>=l;Z--)p=n[Z],-1===P[Z-l]?c(t,p,o,i,r):z[T]===Z-l?T--:b(t,p,r),
null!=p.dom&&(r=n[Z].dom)
else for(Z=C;Z>=l;Z--)p=n[Z],-1===P[Z-l]&&c(t,p,o,i,r),null!=p.dom&&(r=n[Z].dom)
}}else{var L=e.length<n.length?e.length:n.length
for(l=l<f?l:f;l<L;l++)(h=e[l])===(p=n[l])||null==h&&null==p||(null==h?c(t,p,o,i,g(e,l+1,r)):null==p?E(t,h):d(t,h,p,o,g(e,l+1,r),i))
e.length>L&&k(t,e,l,e.length),n.length>L&&u(t,n,l,n.length,o,r,i)}}}
function d(e,n,o,r,a,l){var u=n.tag
if(u===o.tag){if(o.state=n.state,o.events=n.events,function(t,e){do{var n
if(null!=t.attrs&&"function"==typeof t.attrs.onbeforeupdate)if(void 0!==(n=s.call(t.attrs.onbeforeupdate,t,e))&&!n)break
if("string"!=typeof t.tag&&"function"==typeof t.state.onbeforeupdate)if(void 0!==(n=s.call(t.state.onbeforeupdate,t,e))&&!n)break
return!1}while(0)
return t.dom=e.dom,t.domSize=e.domSize,t.instance=e.instance,t.attrs=e.attrs,t.children=e.children,
t.text=e.text,!0}(o,n))return
if("string"==typeof u)switch(null!=o.attrs&&R(o.attrs,o,r),u){case"#":
!function(t,e){
t.children.toString()!==e.children.toString()&&(t.dom.nodeValue=e.children)
e.dom=t.dom}(n,o)
break
case"<":!function(t,e,n,o,r){
e.children!==n.children?(S(t,e),h(t,n,o,r)):(n.dom=e.dom,
n.domSize=e.domSize,n.instance=e.instance)}(e,n,o,l,a)
break
case"[":!function(t,e,n,o,r,i){p(t,e.children,n.children,o,r,i)
var a=0,s=n.children
if(n.dom=null,null!=s){for(var l=0;l<s.length;l++){var u=s[l]
null!=u&&null!=u.dom&&(null==n.dom&&(n.dom=u.dom),a+=u.domSize||1)}
1!==a&&(n.domSize=a)}}(e,n,o,r,a,l)
break
default:!function(t,e,n,o){var r=e.dom=t.dom
o=i(e)||o,"textarea"===e.tag&&null==e.attrs&&(e.attrs={});(function(t,e,n,o){
e&&e===n&&console.warn("Don't reuse attrs object, use new object for every redraw, this will throw in next major")
if(null!=n){"input"===t.tag&&null!=n.type&&t.dom.setAttribute("type",n.type)
var r="input"===t.tag&&"file"===n.type
for(var i in n)z(t,i,e&&e[i],n[i],o,r)}var a
if(null!=e)for(var i in e)null==(a=e[i])||null!=n&&null!=n[i]||A(t,i,a,o)
})(e,t.attrs,e.attrs,o),x(e)||p(r,t.children,e.children,n,null,o)}(n,o,r,l)
}else!function(e,n,o,r,i,a){
if(o.instance=t.normalize(s.call(o.state.view,o)),o.instance===o)throw Error("A view cannot return the vnode it received as argument")
R(o.state,o,r),null!=o.attrs&&R(o.attrs,o,r)
null!=o.instance?(null==n.instance?c(e,o.instance,r,a,i):d(e,n.instance,o.instance,r,i,a),
o.dom=o.instance.dom,
o.domSize=o.instance.domSize):null!=n.instance?(E(e,n.instance),
o.dom=void 0,o.domSize=0):(o.dom=n.dom,o.domSize=n.domSize)}(e,n,o,r,a,l)
}else E(e,n),c(e,o,r,l,a)}function v(t,e,n){
for(var o=Object.create(null);e<n;e++){var r=t[e]
if(null!=r){var i=r.key
null!=i&&(o[i]=e)}}return o}var m=[]
function g(t,e,n){
for(;e<t.length;e++)if(null!=t[e]&&null!=t[e].dom)return t[e].dom
return n}function b(t,e,n){var r=o.createDocumentFragment()
y(t,r,e),w(t,r,n)}function y(t,e,n){for(;null!=n.dom&&n.dom.parentNode===t;){
if("string"!=typeof n.tag){if(null!=(n=n.instance))continue
}else if("<"===n.tag)for(var o=0;o<n.instance.length;o++)e.appendChild(n.instance[o])
else if("["!==n.tag)e.appendChild(n.dom)
else if(1===n.children.length){if(null!=(n=n.children[0]))continue
}else for(o=0;o<n.children.length;o++){var r=n.children[o]
null!=r&&y(t,e,r)}break}}function w(t,e,n){
null!=n?t.insertBefore(e,n):t.appendChild(e)}function x(t){
if(null==t.attrs||null==t.attrs.contenteditable&&null==t.attrs.contentEditable)return!1
var e=t.children
if(null!=e&&1===e.length&&"<"===e[0].tag){var n=e[0].children
t.dom.innerHTML!==n&&(t.dom.innerHTML=n)
}else if(null!=e&&0!==e.length)throw new Error("Child node of a contenteditable must be trusted.")
return!0}function k(t,e,n,o){for(var r=n;r<o;r++){var i=e[r]
null!=i&&E(t,i)}}function E(t,e){var n,o,r,i=0,l=e.state
"string"!=typeof e.tag&&"function"==typeof e.state.onbeforeremove&&(null!=(r=s.call(e.state.onbeforeremove,e))&&"function"==typeof r.then&&(i=1,
n=r))
e.attrs&&"function"==typeof e.attrs.onbeforeremove&&(null!=(r=s.call(e.attrs.onbeforeremove,e))&&"function"==typeof r.then&&(i|=2,
o=r))
if(a(e,l),i){if(null!=n){var u=function(){1&i&&((i&=2)||c())}
n.then(u,u)}if(null!=o){u=function(){2&i&&((i&=1)||c())}
o.then(u,u)}}else M(e),C(t,e)
function c(){a(e,l),M(e),C(t,e)}}function S(t,e){
for(var n=0;n<e.instance.length;n++)t.removeChild(e.instance[n])}
function C(t,e){for(;null!=e.dom&&e.dom.parentNode===t;){
if("string"!=typeof e.tag){if(null!=(e=e.instance))continue
}else if("<"===e.tag)S(t,e)
else{if("["!==e.tag&&(t.removeChild(e.dom),!Array.isArray(e.children)))break
if(1===e.children.length){if(null!=(e=e.children[0]))continue
}else for(var n=0;n<e.children.length;n++){var o=e.children[n]
null!=o&&C(t,o)}}break}}function M(t){
if("string"!=typeof t.tag&&"function"==typeof t.state.onremove&&s.call(t.state.onremove,t),
t.attrs&&"function"==typeof t.attrs.onremove&&s.call(t.attrs.onremove,t),
"string"!=typeof t.tag)null!=t.instance&&M(t.instance)
else{var e=t.children
if(Array.isArray(e))for(var n=0;n<e.length;n++){var o=e[n]
null!=o&&M(o)}}}function z(t,e,n,r,i,a){
if(!("key"===e||"is"===e||null==r||N(e)||n===r&&!function(t,e){
return"value"===e||"checked"===e||"selectedIndex"===e||"selected"===e&&t.dom===l()||"option"===t.tag&&t.dom.parentNode===o.activeElement
}(t,e)&&"object"!=typeof r||"type"===e&&"input"===t.tag)){
if("o"===e[0]&&"n"===e[1])return B(t,e,r)
if("xlink:"===e.slice(0,6))t.dom.setAttributeNS("http://www.w3.org/1999/xlink",e.slice(6),r)
else if("style"===e)D(t.dom,n,r)
else if(P(t,e,i)){if("value"===e){
if(("input"===t.tag||"textarea"===t.tag)&&t.dom.value===""+r&&(a||t.dom===l()))return
if("select"===t.tag&&null!==n&&t.dom.value===""+r)return
if("option"===t.tag&&null!==n&&t.dom.value===""+r)return
if(a&&""+r!="")return void console.error("`value` is read-only on file inputs!")
}t.dom[e]=r
}else"boolean"==typeof r?r?t.dom.setAttribute(e,""):t.dom.removeAttribute(e):t.dom.setAttribute("className"===e?"class":e,r)
}}function A(t,e,n,o){
if("key"!==e&&"is"!==e&&null!=n&&!N(e))if("o"===e[0]&&"n"===e[1])B(t,e,void 0)
else if("style"===e)D(t.dom,n,null)
else if(!P(t,e,o)||"className"===e||"title"===e||"value"===e&&("option"===t.tag||"select"===t.tag&&-1===t.dom.selectedIndex&&t.dom===l())||"input"===t.tag&&"type"===e){
var r=e.indexOf(":")
;-1!==r&&(e=e.slice(r+1)),!1!==n&&t.dom.removeAttribute("className"===e?"class":e)
}else t.dom[e]=null}function N(t){
return"oninit"===t||"oncreate"===t||"onupdate"===t||"onremove"===t||"onbeforeremove"===t||"onbeforeupdate"===t
}function P(t,e,n){
return void 0===n&&(t.tag.indexOf("-")>-1||null!=t.attrs&&t.attrs.is||"href"!==e&&"list"!==e&&"form"!==e&&"width"!==e&&"height"!==e)&&e in t.dom
}var T,Z=/[A-Z]/g
function O(t){return"-"+t.toLowerCase()}function I(t){
return"-"===t[0]&&"-"===t[1]?t:"cssFloat"===t?"float":t.replace(Z,O)}
function D(t,e,n){if(e===n);else if(null==n)t.style.cssText=""
else if("object"!=typeof n)t.style.cssText=n
else if(null==e||"object"!=typeof e)for(var o in t.style.cssText="",n){
null!=(r=n[o])&&t.style.setProperty(I(o),String(r))}else{for(var o in n){var r
null!=(r=n[o])&&(r=String(r))!==String(e[o])&&t.style.setProperty(I(o),r)}
for(var o in e)null!=e[o]&&null==n[o]&&t.style.removeProperty(I(o))}}
function L(){this._=n}function B(t,e,o){if(null!=t.events){
if(t.events._=n,t.events[e]===o)return
null==o||"function"!=typeof o&&"object"!=typeof o?(null!=t.events[e]&&t.dom.removeEventListener(e.slice(2),t.events,!1),
t.events[e]=void 0):(null==t.events[e]&&t.dom.addEventListener(e.slice(2),t.events,!1),
t.events[e]=o)
}else null==o||"function"!=typeof o&&"object"!=typeof o||(t.events=new L,
t.dom.addEventListener(e.slice(2),t.events,!1),t.events[e]=o)}function j(t,e,n){
"function"==typeof t.oninit&&s.call(t.oninit,e),
"function"==typeof t.oncreate&&n.push(s.bind(t.oncreate,e))}function R(t,e,n){
"function"==typeof t.onupdate&&n.push(s.bind(t.onupdate,e))}
return L.prototype=Object.create(null),L.prototype.handleEvent=function(t){
var e,n=this["on"+t.type]
"function"==typeof n?e=n.call(t.currentTarget,t):"function"==typeof n.handleEvent&&n.handleEvent(t),
this._&&!1!==t.redraw&&(0,
this._)(),!1===e&&(t.preventDefault(),t.stopPropagation())},function(e,o,r){
if(!e)throw new TypeError("DOM element being rendered to does not exist.")
if(null!=T&&e.contains(T))throw new TypeError("Node is currently being rendered to and thus is locked.")
var i=n,a=T,s=[],u=l(),c=e.namespaceURI
T=e,n="function"==typeof r?r:void 0
try{
null==e.vnodes&&(e.textContent=""),o=t.normalizeChildren(Array.isArray(o)?o:[o]),
p(e,e.vnodes,o,s,null,"http://www.w3.org/1999/xhtml"===c?void 0:c),
e.vnodes=o,null!=u&&l()!==u&&"function"==typeof u.focus&&u.focus()
for(var f=0;f<s.length;f++)s[f]()}finally{n=i,T=a}}},N}function D(){
return Z?T:(Z=1,T=I()("undefined"!=typeof window?window:null))}
"undefined"!=typeof window?(void 0===window.Promise?window.Promise=O:window.Promise.prototype.finally||(window.Promise.prototype.finally=O.prototype.finally),
z.exports=window.Promise):void 0!==t?(void 0===t.Promise?t.Promise=O:t.Promise.prototype.finally||(t.Promise.prototype.finally=O.prototype.finally),
z.exports=t.Promise):z.exports=O
var L,B,j,R,q,_,V=i(),X=function(t,e,n){var o=[],r=!1,i=-1
function a(){for(i=0;i<o.length;i+=2)try{t(o[i],V(o[i+1]),s)}catch(t){n.error(t)
}i=-1}function s(){r||(r=!0,e((function(){r=!1,a()})))}return s.sync=a,{
mount:function(e,n){
if(null!=n&&null==n.view&&"function"!=typeof n)throw new TypeError("m.mount expects a component, not a vnode.")
var r=o.indexOf(e)
r>=0&&(o.splice(r,2),r<=i&&(i-=2),t(e,[])),null!=n&&(o.push(e,n),t(e,V(n),s))},
redraw:s}
}(D(),"undefined"!=typeof requestAnimationFrame?requestAnimationFrame:null,"undefined"!=typeof console?console:null)
function F(){return B?L:(B=1,L=function(t){
if("[object Object]"!==Object.prototype.toString.call(t))return""
var e=[]
for(var n in t)o(n,t[n])
return e.join("&")
function o(t,n){
if(Array.isArray(n))for(var r=0;r<n.length;r++)o(t+"["+r+"]",n[r])
else if("[object Object]"===Object.prototype.toString.call(n))for(var r in n)o(t+"["+r+"]",n[r])
else e.push(encodeURIComponent(t)+(null!=n&&""!==n?"="+encodeURIComponent(n):""))
}})}function U(){if(R)return j
R=1
var t=c()
return j=Object.assign||function(e,n){for(var o in n)t.call(n,o)&&(e[o]=n[o])}}
function $(){if(_)return q
_=1
var t=F(),e=U()
return q=function(n,o){
if(/:([^\/\.-]+)(\.{3})?:/.test(n))throw new SyntaxError("Template parameter names must be separated by either a '/', '-', or '.'.")
if(null==o)return n
var r=n.indexOf("?"),i=n.indexOf("#"),a=i<0?n.length:i,s=r<0?a:r,l=n.slice(0,s),u={}
e(u,o)
var c=l.replace(/:([^\/\.-]+)(\.{3})?/g,(function(t,e,n){
return delete u[e],null==o[e]?t:n?o[e]:encodeURIComponent(String(o[e]))
})),f=c.indexOf("?"),h=c.indexOf("#"),p=h<0?c.length:h,d=f<0?p:f,v=c.slice(0,d)
r>=0&&(v+=n.slice(r,a)),f>=0&&(v+=(r<0?"?":"&")+c.slice(f,p))
var m=t(u)
return m&&(v+=(r<0&&f<0?"?":"&")+m),i>=0&&(v+=n.slice(i)),h>=0&&(v+=(i<0?"":"&")+c.slice(h)),
v},q}
var G,W,H,Y,K,Q,J,tt,et,nt,ot,rt,it=$(),at=c(),st=z.exports,lt=function(t,e,n){
var o=0
function r(t){return new e(t)}function i(t){return function(o,i){
"string"!=typeof o?(i=o,o=o.url):null==i&&(i={})
var a=new e((function(e,n){t(it(o,i.params),i,(function(t){
if("function"==typeof i.type)if(Array.isArray(t))for(var n=0;n<t.length;n++)t[n]=new i.type(t[n])
else t=new i.type(t)
e(t)}),n)}))
if(!0===i.background)return a
var s=0
function l(){0==--s&&"function"==typeof n&&n()}return function t(e){var n=e.then
return e.constructor=r,e.then=function(){s++
var o=n.apply(e,arguments)
return o.then(l,(function(t){if(l(),0===s)throw t})),t(o)},e}(a)}}
function a(t,e){
for(var n in t.headers)if(at.call(t.headers,n)&&n.toLowerCase()===e)return!0
return!1}return r.prototype=e.prototype,r.__proto__=e,{
request:i((function(e,n,o,r){
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
a)o(s)
else{var l=function(){try{i=t.target.responseText}catch(t){i=s}
var e=new Error(i)
e.code=t.target.status,e.response=s,r(e)}
0===f.status?setTimeout((function(){p||l()})):l()}}catch(t){r(t)}
},f.ontimeout=function(t){p=!0
var e=new Error("Request timed out")
e.code=t.target.status,r(e)
},"function"==typeof n.config&&(f=n.config(f,n,e)||f)!==d&&(i=f.abort,
f.abort=function(){h=!0,i.call(this)
}),null==l?f.send():"function"==typeof n.serialize?f.send(n.serialize(l)):l instanceof t.FormData||l instanceof t.URLSearchParams?f.send(l):f.send(JSON.stringify(l))
})),jsonp:i((function(e,n,r,i){
var a=n.callbackName||"_mithril_"+Math.round(1e16*Math.random())+"_"+o++,s=t.document.createElement("script")
t[a]=function(e){delete t[a],s.parentNode.removeChild(s),r(e)
},s.onerror=function(){
delete t[a],s.parentNode.removeChild(s),i(new Error("JSONP request failed"))
},s.src=e+(e.indexOf("?")<0?"?":"&")+encodeURIComponent(n.callbackKey||"callback")+"="+encodeURIComponent(a),
t.document.documentElement.appendChild(s)}))}
}("undefined"!=typeof window?window:null,st,X.redraw)
function ut(){if(W)return G
function t(t){try{return decodeURIComponent(t)}catch(e){return t}}
return W=1,G=function(e){if(""===e||null==e)return{}
"?"===e.charAt(0)&&(e=e.slice(1))
for(var n=e.split("&"),o={},r={},i=0;i<n.length;i++){
var a=n[i].split("="),s=t(a[0]),l=2===a.length?t(a[1]):""
"true"===l?l=!0:"false"===l&&(l=!1)
var u=s.split(/\]\[?|\[/),c=r
s.indexOf("[")>-1&&u.pop()
for(var f=0;f<u.length;f++){var h=u[f],p=u[f+1],d=""==p||!isNaN(parseInt(p,10))
if(""===h)null==o[s=u.slice(0,f).join()]&&(o[s]=Array.isArray(c)?c.length:0),h=o[s]++
else if("__proto__"===h)break
if(f===u.length-1)c[h]=l
else{var v=Object.getOwnPropertyDescriptor(c,h)
null!=v&&(v=v.value),null==v&&(c[h]=v=d?[]:{}),c=v}}}return r}}function ct(){
if(Y)return H
Y=1
var t=ut()
return H=function(e){
var n=e.indexOf("?"),o=e.indexOf("#"),r=o<0?e.length:o,i=n<0?r:n,a=e.slice(0,i).replace(/\/{2,}/g,"/")
return a?("/"!==a[0]&&(a="/"+a),a.length>1&&"/"===a[a.length-1]&&(a=a.slice(0,-1))):a="/",
{path:a,params:n<0?{}:t(e.slice(n+1,r))}}}function ft(){if(Q)return K
Q=1
var t=ct()
return K=function(e){
var n=t(e),o=Object.keys(n.params),r=[],i=new RegExp("^"+n.path.replace(/:([^\/.-]+)(\.{3}|\.(?!\.)|-)?|[\\^$*+.()|\[\]{}]/g,(function(t,e,n){
return null==e?"\\"+t:(r.push({k:e,r:"..."===n
}),"..."===n?"(.*)":"."===n?"([^/]+)\\.":"([^/]+)"+(n||""))}))+"$")
return function(t){
for(var e=0;e<o.length;e++)if(n.params[o[e]]!==t.params[o[e]])return!1
if(!r.length)return i.test(t.path)
var a=i.exec(t.path)
if(null==a)return!1
for(e=0;e<r.length;e++)t.params[r[e].k]=r[e].r?a[e+1]:decodeURIComponent(a[e+1])
return!0}},K}function ht(){if(tt)return J
tt=1
var t=c(),e=new RegExp("^(?:key|oninit|oncreate|onbeforeupdate|onupdate|onbeforeremove|onremove)$")
return J=function(n,o){var r={}
if(null!=o)for(var i in n)t.call(n,i)&&!e.test(i)&&o.indexOf(i)<0&&(r[i]=n[i])
else for(var i in n)t.call(n,i)&&!e.test(i)&&(r[i]=n[i])
return r}}var pt=M,dt=lt,vt=X,mt=function(){return pt.apply(this,arguments)}
mt.m=pt,mt.trust=pt.trust,mt.fragment=pt.fragment,mt.Fragment="[",mt.mount=vt.mount,
mt.route=function(){if(rt)return ot
rt=1
var t=X
return ot=function(){if(nt)return et
nt=1
var t=i(),e=y,n=z.exports,o=$(),r=ct(),a=ft(),s=U(),l=ht(),u={}
function c(t){try{return decodeURIComponent(t)}catch(e){return t}}
return et=function(i,f){
var h,p,d,v,m,g,b=null==i?null:"function"==typeof i.setImmediate?i.setImmediate:i.setTimeout,y=n.resolve(),w=!1,x=!1,k=0,E=u,S={
onbeforeupdate:function(){return!(!(k=k?2:1)||u===E)},onremove:function(){
i.removeEventListener("popstate",z,!1),i.removeEventListener("hashchange",M,!1)
},view:function(){if(k&&u!==E){var e=[t(d,v.key,v)]
return E&&(e=E.render(e[0])),e}}},C=N.SKIP={}
function M(){w=!1
var t=i.location.hash
"#"!==N.prefix[0]&&(t=i.location.search+t,"?"!==N.prefix[0]&&"/"!==(t=i.location.pathname+t)[0]&&(t="/"+t))
var e=t.concat().replace(/(?:%[a-f89][a-f0-9])+/gim,c).slice(N.prefix.length),n=r(e)
function o(t){console.error(t),A(p,null,{replace:!0})}
s(n.params,i.history.state),function t(r){for(;r<h.length;r++)if(h[r].check(n)){
var i=h[r].component,a=h[r].route,s=i,l=g=function(o){if(l===g){
if(o===C)return t(r+1)
d=null==o||"function"!=typeof o.view&&"function"!=typeof o?"div":o,v=n.params,m=e,
g=null,E=i.render?i:null,2===k?f.redraw():(k=2,f.redraw.sync())}}
return void(i.view||"function"==typeof i?(i={},l(s)):i.onmatch?y.then((function(){
return i.onmatch(n.params,e,a)})).then(l,e===p?null:o):l("div"))}
if(e===p)throw new Error("Could not resolve default route "+p+".")
A(p,null,{replace:!0})}(0)}function z(){w||(w=!0,b(M))}function A(t,e,n){
if(t=o(t,e),x){z()
var r=n?n.state:null,a=n?n.title:null
n&&n.replace?i.history.replaceState(r,a,N.prefix+t):i.history.pushState(r,a,N.prefix+t)
}else i.location.href=N.prefix+t}function N(t,e,n){
if(!t)throw new TypeError("DOM element being rendered to does not exist.")
if(h=Object.keys(n).map((function(t){
if("/"!==t[0])throw new SyntaxError("Routes must start with a '/'.")
if(/:([^\/\.-]+)(\.{3})?:/.test(t))throw new SyntaxError("Route parameter names must be separated with either '/', '.', or '-'.")
return{route:t,component:n[t],check:a(t)}})),p=e,null!=e){var o=r(e)
if(!h.some((function(t){return t.check(o)
})))throw new ReferenceError("Default route doesn't match any known routes.")}
"function"==typeof i.history.pushState?i.addEventListener("popstate",z,!1):"#"===N.prefix[0]&&i.addEventListener("hashchange",M,!1),
x=!0,f.mount(t,S),M()}return N.set=function(t,e,n){
null!=g&&((n=n||{}).replace=!0),g=null,A(t,e,n)},N.get=function(){return m
},N.prefix="#!",N.Link={view:function(t){
var n,r,i,a=e(t.attrs.selector||"a",l(t.attrs,["options","params","selector","onclick"]),t.children)
return(a.attrs.disabled=Boolean(a.attrs.disabled))?(a.attrs.href=null,a.attrs["aria-disabled"]="true"):(n=t.attrs.options,
r=t.attrs.onclick,
i=o(a.attrs.href,t.attrs.params),a.attrs.href=N.prefix+i,a.attrs.onclick=function(t){
var e
"function"==typeof r?e=r.call(t.currentTarget,t):null==r||"object"!=typeof r||"function"==typeof r.handleEvent&&r.handleEvent(t),
!1===e||t.defaultPrevented||0!==t.button&&0!==t.which&&1!==t.which||t.currentTarget.target&&"_self"!==t.currentTarget.target||t.ctrlKey||t.metaKey||t.shiftKey||t.altKey||(t.preventDefault(),
t.redraw=!1,N.set(i,null,n))}),a}},N.param=function(t){return v&&null!=t?v[t]:v
},N},et}()("undefined"!=typeof window?window:null,t),ot
}(),mt.render=D(),mt.redraw=vt.redraw,
mt.request=dt.request,mt.jsonp=dt.jsonp,mt.parseQueryString=ut(),
mt.buildQueryString=F(),mt.parsePathname=ct(),mt.buildPathname=$(),mt.vnode=i(),
mt.PromisePolyfill=A(),mt.censor=ht(),r.exports=mt
var gt={},bt=[],yt=[]
var wt,xt,kt='body,html{height:100%;margin:0}h1{margin-block-start:0;text-align:center}form{padding:1ex}.hidden{display:none}h2{border-top:1px dashed #000}svg{box-sizing:border-box;height:100%;left:0;padding:0;position:absolute;top:0;width:100%}.kte-1{stroke:navy}.kte-2{stroke:green}.kte-3{stroke:red}g.ktes>path{stroke-width:1px;vector-effect:non-scaling-stroke;fill-rule:evenodd;stroke-linecap:round;stroke-linejoin:round}g.ktes>path.kte{stroke-width:5px;fill:none}g.ktes>path.kte:hover{stroke-dasharray:1%;animation:dash 1s linear infinite}g.ktes>path.axis{stroke:#000;stroke-dasharray:3% 1% .3% 1%}@-moz-keyframes dash{0%{stroke-dashoffset:0%}to{stroke-dashoffset:-2%}}@-webkit-keyframes dash{0%{stroke-dashoffset:0%}to{stroke-dashoffset:-2%}}@-o-keyframes dash{0%{stroke-dashoffset:0%}to{stroke-dashoffset:-2%}}@keyframes dash{0%{stroke-dashoffset:0%}to{stroke-dashoffset:-2%}}body>div{bottom:0;box-sizing:border-box;padding:1ex;position:absolute;top:0;width:50%}body>div:first-child{border-right:1px solid #000;left:0}body>div:last-child{right:0}.tabs{border-bottom:1px solid #000;white-space:nowrap}.tabs>label{border:1px solid #000;border-radius:1ex 1ex 0 0;display:inline-block;padding:1ex;position:relative;top:1px}.tabs>label.active{border-bottom:1px solid #fff;font-weight:700;padding-top:1.618ex}.tabs>span{padding:1ex}sup.popover{position:relative}sup.popover>div{box-shadow:1ex 1ex 1ex silver;display:none;position:absolute;right:0;top:0}sup.popover:hover>div{display:block}input:invalid+span:after{color:red;content:"?!"}g.DXF{fill:none;stroke:navy;stroke-width:5px;fill-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;transform:scaleY(-1)}g.DXF path{vector-effect:non-scaling-stroke}g.DXF path.axis{stroke-width:1px;stroke:red}g.DXF .active{stroke:red;stroke-width:10px;animation:RYG 1s infinite alternate}@-moz-keyframes RYG{0%{stroke:red}50%{stroke:#ff0}to{stroke:green}}@-webkit-keyframes RYG{0%{stroke:red}50%{stroke:#ff0}to{stroke:green}}@-o-keyframes RYG{0%{stroke:red}50%{stroke:#ff0}to{stroke:green}}@keyframes RYG{0%{stroke:red}50%{stroke:#ff0}to{stroke:green}}'
!function(t,e){if(t&&"undefined"!=typeof document){
var n,o=!0===e.prepend?"prepend":"append",r=!0===e.singleTag,i="string"==typeof e.container?document.querySelector(e.container):document.getElementsByTagName("head")[0]
if(r){var a=bt.indexOf(i)
;-1===a&&(a=bt.push(i)-1,yt[a]={}),n=yt[a]&&yt[a][o]?yt[a][o]:yt[a][o]=s()
}else n=s()
65279===t.charCodeAt(0)&&(t=t.substring(1)),n.styleSheet?n.styleSheet.cssText+=t:n.appendChild(document.createTextNode(t))
}function s(){var t=document.createElement("style")
if(t.setAttribute("type","text/css"),e.attributes)for(var n=Object.keys(e.attributes),r=0;r<n.length;r++)t.setAttribute(n[r],e.attributes[n[r]])
var a="prepend"===o?"afterbegin":"beforeend"
return i.insertAdjacentElement(a,t),t}}(kt,{}),wt=r.exports,xt=e({
__proto__:null,css:kt,default:kt}),gt.view=function(){return wt("style",xt.css)}
var Et,St,Ct,Mt,zt={},At={},Nt={}
Et=r.exports,St=e({__proto__:null,_:"https://github.com/ukoloff/kte"
}),Nt.view=function(){var t
return[Et("h2","Примечания"),Et("ul",Et("li",Et("a",{href:St._,target:"_blank"
},"Исходный код"),"@GitHub"),Et("li","Замечания и предложения по работе утилит КТЕ: ",Et("a",{
href:t=St._+"/issues",target:"_blank"},t)),Et("li",Et("a",{
href:St._+"/tree/main/data",target:"_blank"},"Примеры")," DXF и XML-файлов"))]},
Ct=r.exports,Mt=Nt,At.view=function(){
return[Ct("h1",document.title="Automatic CAM for Turning"),Ct("ul",Ct("li",Ct("a",{
href:"#!/dxf"
},"Импорт DXF и настройка технологических параметров")),Ct("li",Ct("a",{
href:"#!/kte"},"Просмотр результатов распознавания КТЭ"))),Ct(Mt)]}
var Pt={},Tt={},Zt={},Ot=function(){if(!this)return null
var t,e,n,o,r,i,a=Lt,s=Lt,l=Lt,u=Lt,c=Lt,f=!1,h=!1,p=!1,d=!1,v=!1,m=!1,g=null,b=!1,y={
xmlns:undefined},w=""
this.on=function(r,i){if("function"==typeof i||null===i)switch(r){
case"startNode":s=i||Lt
break
case"textNode":a=i||Lt
break
case"endNode":l=i||Lt
break
case"error":c=i||Lt
break
case"cdata":u=i||Lt
break
case"unknownNS":o=i,d=!!i
break
case"attention":n=i,p=!!i
break
case"question":e=i,h=!!i
break
case"comment":t=i,f=!!i}},this.ns=function(t,e){
if(!t||"string"!=typeof t||!e)return this
var n,o,a,s={}
for(a in e)"string"==typeof(o=e[a])&&(t===o&&(n=!0),s[a]=o)
return n&&(r=t,m=!0,i=s),this},this.parse=function(t){
if("string"==typeof t)return g=null,w=t,m?(y={xmlns:r
},A(),y=!1):A(),b=!1,x=!0,w="",g},this.stop=function(){b=!0}
var x,k=0,E=0,S="",C=0
function M(){if(null!==x)return x
for(var t,e,n,r,a,s,l,u,c,f,h=m&&v?[]:null,p=C,g=S,b=g.length,w={};p<b;p++)if(!(32===(c=g.charCodeAt(p))||c<14&&c>8)){
if((c<65||c>122||c>90&&c<97)&&95!==c&&58!==c)return x=!1
for(f=p+1;f<b;f++)if(!((c=g.charCodeAt(f))>96&&c<123||c>64&&c<91||c>47&&c<59||45===c||95===c)){
if(61!==c)return x=!1
break}if(u=!0,"xmlns:xmlns"===(l=g.substring(p,f)))return x=!1
if(34===(c=g.charCodeAt(f+1)))f=g.indexOf('"',p=f+2)
else{if(39!==c)return x=!1
f=g.indexOf("'",p=f+2)}if(-1===f)return x=!1
if(f+1<b&&((c=g.charCodeAt(f+1))>32||c<9||c<32&&c>13))return x=!1
if(a=g.substring(p,f),p=f+1,m)if(v){
if(null!==(r="xmlns"!==l?120===l.charCodeAt(0)&&"xmlns:"===l.substr(0,6)?l.substr(6):null:"xmlns")){
s=i[jt(a)],
d&&!s&&(s=o(a)),s?y[r]!==s&&(n||(y=Rt(y),n=!0),y[r]=s):y[r]&&(n||(y=Rt(y),n=!0),
y[r]=!1),w[l]=a
continue}h.push(l,a)
}else-1!==(c=l.indexOf(":"))?(e=y[l.substring(0,c)])&&(w[(e=y.xmlns===e?l.substr(c+1):e+l.substr(c))+l.substr(c)]=a):w[l]=a
else w[l]=a}if(!u)return x=!0
if(v)for(t=y.xmlns,p=0,b=h.length;p<b;p++)-1===(c=(l=h[p++]).indexOf(":"))?w[l]=h[p]:(e=y[l.substring(0,c)])&&(w[e=t===e?l.substr(c+1):e+l.substr(c)]=h[p])
return x=w}function z(){return w.substring(k,E+1)}function A(){
for(var o,r,i,d,A,N,P,T,Z=[],O=[],I=!1,D=!1,L=0,B=0,j=0;-1!==L;){
if(T=j>0,-1===(B=60===w.charCodeAt(L)?L:w.indexOf("<",L)))return O.length?void c(g="end file"):void 0
if(L!==B&&!T&&(a(w.substring(L,B),jt),b))return
if(33!==(d=w.charCodeAt(B+1)))if(63!==d){
if(-1==(L=w.indexOf(">",B+1)))return void c(g="...>")
if(x=!0,47===d){
if(I=!1,D=!0,!O.length)return void c(g="close tag, requires open tag")
if(i=B+2+(o=P=O.pop()).length,w.substring(B+2,i)!==o)return void c(g="close tag, not equal to the open tag")
for(;i<L;i++)if(!(32===(d=w.charCodeAt(i))||d>8&&d<14))return void c(g="close tag")
}else{
if(47===w.charCodeAt(L-1)?(o=P=w.substring(B+1,L-1),I=!0,D=!0):(o=P=w.substring(B+1,L),
I=!0,
D=!1),!(d>96&&d<123||d>64&&d<91||95===d||58===d))return void c(g="first char nodeName")
for(i=1,r=o.length;i<r;i++)if(!((d=o.charCodeAt(i))>96&&d<123||d>64&&d<91||d>47&&d<59||45===d||95===d)){
if(32===d||d<14&&d>8){P=o.substring(0,i),x=null
break}return void c(g="invalid nodeName")}D||O.push(P)}if(m){if(T){
D?I||0==--j&&(y=Z.pop()):j+=1,L+=1
continue}if(A=y,D||Z.push(y),I&&!0!==x&&(v=-1!==o.indexOf("xmlns",i))&&(C=i,S=o,
M(),
v=!1),-1!==(d=P.indexOf(":"))?(N=y[P.substring(0,d)],P=P.substr(d+1)):N=y.xmlns,
!N){D?y=I?A:Z.pop():(j=1,x=!0),L+=1
continue}P=N+":"+P}if(k=B,E=L,I){if(C=i,S=o,s(P,M,jt,D,z),b)return
x=!0}if(D){if(l(P,jt,I,z),b)return
m&&(y=I?A:Z.pop())}L+=1}else{
if(-1===(L=w.indexOf("?>",B)))return void c(g="...?>")
if(h&&(e(w.substring(B,L+2)),b))return
L+=2}else{if(91===(d=w.charCodeAt(B+2))&&"CDATA["===w.substr(B+3,6)){
if(-1===(L=w.indexOf("]]>",B)))return void c(g="cdata")
if(!T&&(u(w.substring(B+9,L),!1),b))return
L+=3
continue}if(45===d&&45===w.charCodeAt(B+3)){
if(-1===(L=w.indexOf("--\x3e",B)))return void c(g="expected --\x3e")
if(f&&!T&&(t(w.substring(B+4,L),jt),b))return
L+=3
continue}if(-1===(L=w.indexOf(">",B+1)))return void c(g='expected ">"')
if(p&&!T&&(n(w.substring(B,L+1),jt),b))return
L+=1}}}},It=String.fromCharCode,Dt={constructor:!1,propertyIsEnumerable:!1,
toLocaleString:!1,hasOwnProperty:!1,isPrototypeOf:!1,toString:!1,valueOf:!1,
quot:'"',QUOT:'"',amp:"&",AMP:"&",nbsp:" ",apos:"'",lt:"<",LT:"<",gt:">",GT:">",
copy:"©",laquo:"«",raquo:"»",reg:"®",deg:"°",plusmn:"±",sup2:"²",sup3:"³",
micro:"µ",para:"¶"}
function Lt(){}function Bt(t,e,n,o){return o?Dt[o]||"":It(e||parseInt(n,16))}
function jt(t){
return(t=""+t).length>3&&-1!==t.indexOf("&")&&(-1!==t.indexOf("&quot;")&&(t=t.replace(/&quot;/g,'"')),
-1!==t.indexOf("&gt;")&&(t=t.replace(/&gt;/g,">")),
-1!==t.indexOf("&lt;")&&(t=t.replace(/&lt;/g,"<")),
-1!==t.indexOf("&")&&(t=t.replace(/&#(\d+);|&#x([0123456789abcdef]+);|&(\w+);/gi,Bt))),
t}function Rt(t){var e={}
for(var n in t)e[n]=t[n]
return e}var qt=function(t,e){var n,o,r=[]
for(n=0;n<2;++n)o=n,r.push(t[o]-e[o])
return r}
var _t,Vt=function(t,e){var n,o,r
for(n=0,o=0;o<2;++o)n+=t[r=o]*e[r]
return n}
_t=Vt
var Xt=function(t){return Math.sqrt(_t(t,t))}
var Ft,Ut,$t,Gt,Wt=function(t){return[-t[1],+t[0]]}
Ft=qt,Ut=Vt,$t=Xt,Gt=Wt
var Ht,Yt=function(t){var e,n,o,r,i,a,s,l,u,c,f,h=[]
for(e=0,n=t.length;e<n;++e){
for(a in o=t[e],r=[null!=(i=o.Z)?i:f?f[0]:0,null!=(i=o.X)?i:f?f[1]:0,0],
o)s=o[a],0>"GXZIK".indexOf(a)&&(r[a]=s)
f&&o.G>=2&&null!=o.I&&null!=o.K&&(l=Ft(r,f),u=$t(l),(c=[Ut([o.K,o.I],Gt(l))/u,u/2])[0]<0&&(c[0]=-c[0],
c[1]=-c[1]),c[0]+=$t(c),c[1]>0!=(3===o.G)&&(c=Gt(c)),f[2]=c[1]/c[0]),h.push(f=r)
}return h}
Ht=Yt
var Kt,Qt,Jt,te,ee=function(t){var e,n,o,r,i,a,s,l
for(e=[],n=0,r=(o=t.split(/\s*((?!E)[A-Z])\s*/i)).length;n<r;++n)i=n,a=o[n],i%2?"G"===(s=a.toUpperCase())&&e.push(l={}):l&&(l[s]=parseFloat(a))
return Ht(e)}
Kt=Ot,Qt=ee,Jt=function(t){var e,n
if(!t.length)throw RangeError("No KTEs found")
for(e=0,n=t.length;e<n;++e)if(!t[e].$)throw TypeError("Found KTE without attributes")
for(e=0,n=t.length;e<n;++e)if(t[e]._)return t
throw Error("No geometry information found")}
var ne,oe,re,ie=function(t){var e,n,o,r
function i(){var t,n,r,i
if(o=0,!(e.length>te.length)){
for(t=0,r=(n=e).length;t<r;++t)if(i=t,n[t]!==te[i])return
o=e.length}}return e=[],n=[],(r=new Kt).on("error",(function(t){
throw SyntaxError("Mal-formed XML: "+t)})),r.on("startNode",(function(t,r){
e.push(t),i(),2===o&&n.push({$:r()})})),r.on("endNode",(function(t){
e.length&&e[e.length-1]===t&&(e.pop(),i())})),r.on("textNode",(function(t,e){
var r
3===o&&null==(r=n[n.length-1])._&&(r._=Qt(e(t).trim()))})),r.parse(t),Jt(n)}
te=["recognition_result","kte","contour"],ne=ie,oe=Tt,re=r.exports
var ae=async function(t){var e,n,o,r
for(delete oe.errors,e=0,n=t.length;e<n;++e){o=t[e]
try{oe.KTEs=ne(await o.text()),oe.name=o.name,location.hash="#!/kte/show"
break}catch(t){r=t,(oe.errors||(oe.errors={}))[o.name]=r.message}}re.redraw()}
var se=function(t,e){t.oncreate=function(){var t
;(t=document.body).ondragenter=le,
t.ondragleave=le,t.ondragover=le,t.ondrop=function(t){
return e(t.dataTransfer.files),!1}},t.onremove=function(){var t
;(t=document.body).ondragenter=null,
t.ondragleave=null,t.ondragover=null,t.ondrop=null}}
function le(){return!1}!function(t){var e,n,o
e=r.exports,n=ae,o=se,t.view=function(){var t
return t=this,[e("input.hidden",{type:"file",accept:".xml",oncreate:function(e){
(t.uploadButton=e.dom).onchange=function(){n(this.files)}}}),e("button",{
type:"button",onclick:function(){t.uploadButton.click()}
},"Загрузить результат распознавания!")," ...или перетащите XML-файл в это окно..."]
},o(t,n)}(Zt)
var ue,ce={}
ue=r.exports,ce.view=function(t){var e,n,o
if(e=t.attrs.errors)return[ue("h3","Ошибки"),ue("ul",function(){var t,r=[]
for(n in t=e)o=t[n],r.push(ue("li",ue("b",n),": ",o))
return r}())]}
var fe,he,pe,de,ve,me,ge={}
fe=r.exports,ge.view=function(){
return[fe("h2","Во время просмотра"),fe("ul",fe("li","Двигайте изображение мышкой"),fe("li","Масштабируйте колёсиком мыши"),fe("li","Наведите мышь на КТЭ, чтобы увидеть дополнительную информацию"))]
},he=r.exports,pe=Tt,de=Zt,ve=ce,me=ge,Pt.view=function(){
return[he("h1",document.title="Визуализация КТЭ"),he("form",he(de)),he(ve,pe),he(me)]
}
var be={},ye=function(){var t,e,n,o="",r=[],i={passive:!0}
function a(e,a,s,l){var u
u="wheel"===n?s:function(t,e){var o=function(t){!t&&(t=window.event)
var o={originalEvent:t,target:t.target||t.srcElement,type:"wheel",
deltaMode:"MozMousePixelScroll"==t.type?0:1,deltaX:0,delatZ:0,
preventDefault:function(){t.preventDefault?t.preventDefault():t.returnValue=!1}}
return"mousewheel"==n?(o.deltaY=-1/40*t.wheelDelta,t.wheelDeltaX&&(o.deltaX=-1/40*t.wheelDeltaX)):o.deltaY=t.detail,
e(o)}
return r.push({element:t,fn:o}),o}(e,s),e[t](o+a,u,!!l&&i)}function s(t,a,s,l){
var u
u="wheel"===n?s:function(t){
for(var e=0;e<r.length;e++)if(r[e].element===t)return r[e].fn
return function(){}}(t),t[e](o+a,u,!!l&&i),function(t){
for(var e=0;e<r.length;e++)if(r[e].element===t)return r.splice(e,1)}(t)}
return window.addEventListener?(t="addEventListener",
e="removeEventListener"):(t="attachEvent",
e="detachEvent",o="on"),n="onwheel"in document.createElement("div")?"wheel":void 0!==document.onmousewheel?"mousewheel":"DOMMouseScroll",
{on:function(t,e,o){
a(t,n,e,o),"DOMMouseScroll"==n&&a(t,"MozMousePixelScroll",e,o)},
off:function(t,e,o){
s(t,n,e,o),"DOMMouseScroll"==n&&s(t,"MozMousePixelScroll",e,o)}}}(),we={
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
var n=t.timeStamp-e.timeStamp,o=Math.sqrt(Math.pow(t.clientX-e.clientX,2)+Math.pow(t.clientY-e.clientY,2))
return n<250&&o<10}return!1},now:Date.now||function(){return(new Date).getTime()
},throttle:function(t,e,n){var o,r,i,a=this,s=null,l=0
n||(n={})
var u=function(){l=!1===n.leading?0:a.now(),s=null,i=t.apply(o,r),s||(o=r=null)}
return function(){var c=a.now()
l||!1!==n.leading||(l=c)
var f=e-(c-l)
return o=this,r=arguments,f<=0||f>e?(clearTimeout(s),s=null,l=c,i=t.apply(o,r),s||(o=r=null)):s||!1===n.trailing||(s=setTimeout(u,f)),
i}},createRequestAnimationFrame:function(t){var e=null
return"auto"!==t&&t<60&&t>1&&(e=Math.floor(1e3/t)),null===e?window.requestAnimationFrame||xe(33):xe(e)
}}
function xe(t){return function(e){window.setTimeout(e,t)}}var ke=we,Ee="unknown"
document.documentMode&&(Ee="ie")
var Se={svgNS:"http://www.w3.org/2000/svg",
xmlNS:"http://www.w3.org/XML/1998/namespace",
xmlnsNS:"http://www.w3.org/2000/xmlns/",xlinkNS:"http://www.w3.org/1999/xlink",
evNS:"http://www.w3.org/2001/xml-events",
getBoundingClientRectNormalized:function(t){
if(t.clientWidth&&t.clientHeight)return{width:t.clientWidth,
height:t.clientHeight}
if(t.getBoundingClientRect())return t.getBoundingClientRect()
throw new Error("Cannot get BoundingClientRect for SVG.")},
getOrCreateViewport:function(t,e){var n=null
if(!(n=ke.isElement(e)?e:t.querySelector(e))){
var o=Array.prototype.slice.call(t.childNodes||t.children).filter((function(t){
return"defs"!==t.nodeName&&"#text"!==t.nodeName}))
1===o.length&&"g"===o[0].nodeName&&null===o[0].getAttribute("transform")&&(n=o[0])
}if(!n){var r="viewport-"+(new Date).toISOString().replace(/\D/g,"")
;(n=document.createElementNS(this.svgNS,"g")).setAttribute("id",r)
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
refreshDefsGlobal:ke.throttle((function(){
for(var t=document.querySelectorAll("defs"),e=t.length,n=0;n<e;n++){var o=t[n]
o.parentNode.insertBefore(o,o)}}),t?t.internetExplorerRedisplayInterval:null),
setCTM:function(t,e,n){
var o=this,r="matrix("+e.a+","+e.b+","+e.c+","+e.d+","+e.e+","+e.f+")"
t.setAttributeNS(null,"transform",r),"transform"in t.style?t.style.transform=r:"-ms-transform"in t.style?t.style["-ms-transform"]=r:"-webkit-transform"in t.style&&(t.style["-webkit-transform"]=r),
"ie"===Ee&&n&&(n.parentNode.insertBefore(n,n),window.setTimeout((function(){
o.refreshDefsGlobal()}),o.internetExplorerRedisplayInterval))},
getEventPoint:function(t,e){var n=e.createSVGPoint()
return ke.mouseAndTouchNormalize(t,e),n.x=t.clientX,n.y=t.clientY,n},
getSvgCenterPoint:function(t,e,n){return this.createSVGPoint(t,e/2,n/2)},
createSVGPoint:function(t,e,n){var o=t.createSVGPoint()
return o.x=e,o.y=n,o}},Ce=Se,Me={enable:function(t){
var e=t.svg.querySelector("defs")
if(e||(e=document.createElementNS(Ce.svgNS,"defs"),t.svg.appendChild(e)),!e.querySelector("style#svg-pan-zoom-controls-styles")){
var n=document.createElementNS(Ce.svgNS,"style")
n.setAttribute("id","svg-pan-zoom-controls-styles"),n.setAttribute("type","text/css"),
n.textContent=".svg-pan-zoom-control { cursor: pointer; fill: black; fill-opacity: 0.333; } .svg-pan-zoom-control:hover { fill-opacity: 0.8; } .svg-pan-zoom-control-background { fill: white; fill-opacity: 0.5; } .svg-pan-zoom-control-background { fill-opacity: 0.8; }",
e.appendChild(n)}var o=document.createElementNS(Ce.svgNS,"g")
o.setAttribute("id","svg-pan-zoom-controls"),o.setAttribute("transform","translate("+(t.width-70)+" "+(t.height-76)+") scale(0.75)"),
o.setAttribute("class","svg-pan-zoom-control"),
o.appendChild(this._createZoomIn(t)),
o.appendChild(this._createZoomReset(t)),o.appendChild(this._createZoomOut(t)),
t.svg.appendChild(o),t.controlIcons=o},_createZoomIn:function(t){
var e=document.createElementNS(Ce.svgNS,"g")
e.setAttribute("id","svg-pan-zoom-zoom-in"),e.setAttribute("transform","translate(30.5 5) scale(0.015)"),
e.setAttribute("class","svg-pan-zoom-control"),
e.addEventListener("click",(function(){t.getPublicInstance().zoomIn()
}),!1),e.addEventListener("touchstart",(function(){
t.getPublicInstance().zoomIn()}),!1)
var n=document.createElementNS(Ce.svgNS,"rect")
n.setAttribute("x","0"),n.setAttribute("y","0"),n.setAttribute("width","1500"),n.setAttribute("height","1400"),
n.setAttribute("class","svg-pan-zoom-control-background"),e.appendChild(n)
var o=document.createElementNS(Ce.svgNS,"path")
return o.setAttribute("d","M1280 576v128q0 26 -19 45t-45 19h-320v320q0 26 -19 45t-45 19h-128q-26 0 -45 -19t-19 -45v-320h-320q-26 0 -45 -19t-19 -45v-128q0 -26 19 -45t45 -19h320v-320q0 -26 19 -45t45 -19h128q26 0 45 19t19 45v320h320q26 0 45 19t19 45zM1536 1120v-960 q0 -119 -84.5 -203.5t-203.5 -84.5h-960q-119 0 -203.5 84.5t-84.5 203.5v960q0 119 84.5 203.5t203.5 84.5h960q119 0 203.5 -84.5t84.5 -203.5z"),
o.setAttribute("class","svg-pan-zoom-control-element"),e.appendChild(o),e},
_createZoomReset:function(t){var e=document.createElementNS(Ce.svgNS,"g")
e.setAttribute("id","svg-pan-zoom-reset-pan-zoom"),e.setAttribute("transform","translate(5 35) scale(0.4)"),
e.setAttribute("class","svg-pan-zoom-control"),
e.addEventListener("click",(function(){t.getPublicInstance().reset()
}),!1),e.addEventListener("touchstart",(function(){t.getPublicInstance().reset()
}),!1)
var n=document.createElementNS(Ce.svgNS,"rect")
n.setAttribute("x","2"),n.setAttribute("y","2"),n.setAttribute("width","182"),n.setAttribute("height","58"),
n.setAttribute("class","svg-pan-zoom-control-background"),e.appendChild(n)
var o=document.createElementNS(Ce.svgNS,"path")
o.setAttribute("d","M33.051,20.632c-0.742-0.406-1.854-0.609-3.338-0.609h-7.969v9.281h7.769c1.543,0,2.701-0.188,3.473-0.562c1.365-0.656,2.048-1.953,2.048-3.891C35.032,22.757,34.372,21.351,33.051,20.632z"),
o.setAttribute("class","svg-pan-zoom-control-element"),e.appendChild(o)
var r=document.createElementNS(Ce.svgNS,"path")
return r.setAttribute("d","M170.231,0.5H15.847C7.102,0.5,0.5,5.708,0.5,11.84v38.861C0.5,56.833,7.102,61.5,15.847,61.5h154.384c8.745,0,15.269-4.667,15.269-10.798V11.84C185.5,5.708,178.976,0.5,170.231,0.5z M42.837,48.569h-7.969c-0.219-0.766-0.375-1.383-0.469-1.852c-0.188-0.969-0.289-1.961-0.305-2.977l-0.047-3.211c-0.03-2.203-0.41-3.672-1.142-4.406c-0.732-0.734-2.103-1.102-4.113-1.102h-7.05v13.547h-7.055V14.022h16.524c2.361,0.047,4.178,0.344,5.45,0.891c1.272,0.547,2.351,1.352,3.234,2.414c0.731,0.875,1.31,1.844,1.737,2.906s0.64,2.273,0.64,3.633c0,1.641-0.414,3.254-1.242,4.84s-2.195,2.707-4.102,3.363c1.594,0.641,2.723,1.551,3.387,2.73s0.996,2.98,0.996,5.402v2.32c0,1.578,0.063,2.648,0.19,3.211c0.19,0.891,0.635,1.547,1.333,1.969V48.569z M75.579,48.569h-26.18V14.022h25.336v6.117H56.454v7.336h16.781v6H56.454v8.883h19.125V48.569z M104.497,46.331c-2.44,2.086-5.887,3.129-10.34,3.129c-4.548,0-8.125-1.027-10.731-3.082s-3.909-4.879-3.909-8.473h6.891c0.224,1.578,0.662,2.758,1.316,3.539c1.196,1.422,3.246,2.133,6.15,2.133c1.739,0,3.151-0.188,4.236-0.562c2.058-0.719,3.087-2.055,3.087-4.008c0-1.141-0.504-2.023-1.512-2.648c-1.008-0.609-2.607-1.148-4.796-1.617l-3.74-0.82c-3.676-0.812-6.201-1.695-7.576-2.648c-2.328-1.594-3.492-4.086-3.492-7.477c0-3.094,1.139-5.664,3.417-7.711s5.623-3.07,10.036-3.07c3.685,0,6.829,0.965,9.431,2.895c2.602,1.93,3.966,4.73,4.093,8.402h-6.938c-0.128-2.078-1.057-3.555-2.787-4.43c-1.154-0.578-2.587-0.867-4.301-0.867c-1.907,0-3.428,0.375-4.565,1.125c-1.138,0.75-1.706,1.797-1.706,3.141c0,1.234,0.561,2.156,1.682,2.766c0.721,0.406,2.25,0.883,4.589,1.43l6.063,1.43c2.657,0.625,4.648,1.461,5.975,2.508c2.059,1.625,3.089,3.977,3.089,7.055C108.157,41.624,106.937,44.245,104.497,46.331z M139.61,48.569h-26.18V14.022h25.336v6.117h-18.281v7.336h16.781v6h-16.781v8.883h19.125V48.569z M170.337,20.14h-10.336v28.43h-7.266V20.14h-10.383v-6.117h27.984V20.14z"),
r.setAttribute("class","svg-pan-zoom-control-element"),e.appendChild(r),e},
_createZoomOut:function(t){var e=document.createElementNS(Ce.svgNS,"g")
e.setAttribute("id","svg-pan-zoom-zoom-out"),e.setAttribute("transform","translate(30.5 70) scale(0.015)"),
e.setAttribute("class","svg-pan-zoom-control"),
e.addEventListener("click",(function(){t.getPublicInstance().zoomOut()
}),!1),e.addEventListener("touchstart",(function(){
t.getPublicInstance().zoomOut()}),!1)
var n=document.createElementNS(Ce.svgNS,"rect")
n.setAttribute("x","0"),n.setAttribute("y","0"),n.setAttribute("width","1500"),n.setAttribute("height","1400"),
n.setAttribute("class","svg-pan-zoom-control-background"),e.appendChild(n)
var o=document.createElementNS(Ce.svgNS,"path")
return o.setAttribute("d","M1280 576v128q0 26 -19 45t-45 19h-896q-26 0 -45 -19t-19 -45v-128q0 -26 19 -45t45 -19h896q26 0 45 19t19 45zM1536 1120v-960q0 -119 -84.5 -203.5t-203.5 -84.5h-960q-119 0 -203.5 84.5t-84.5 203.5v960q0 119 84.5 203.5t203.5 84.5h960q119 0 203.5 -84.5 t84.5 -203.5z"),
o.setAttribute("class","svg-pan-zoom-control-element"),e.appendChild(o),e},
disable:function(t){
t.controlIcons&&(t.controlIcons.parentNode.removeChild(t.controlIcons),
t.controlIcons=null)}},ze=Se,Ae=we,Ne=function(t,e){this.init(t,e)}
Ne.prototype.init=function(t,e){
this.viewport=t,this.options=e,this.originalState={zoom:1,x:0,y:0
},this.activeState={zoom:1,x:0,y:0
},this.updateCTMCached=Ae.proxy(this.updateCTM,this),
this.requestAnimationFrame=Ae.createRequestAnimationFrame(this.options.refreshRate),
this.viewBox={x:0,y:0,width:0,height:0},this.cacheViewBox()
var n=this.processCTM()
this.setCTM(n),this.updateCTM()},Ne.prototype.cacheViewBox=function(){
var t=this.options.svg.getAttribute("viewBox")
if(t){var e=t.split(/[\s\,]/).filter((function(t){return t})).map(parseFloat)
this.viewBox.x=e[0],this.viewBox.y=e[1],this.viewBox.width=e[2],this.viewBox.height=e[3]
var n=Math.min(this.options.width/this.viewBox.width,this.options.height/this.viewBox.height)
this.activeState.zoom=n,this.activeState.x=(this.options.width-this.viewBox.width*n)/2,
this.activeState.y=(this.options.height-this.viewBox.height*n)/2,
this.updateCTMOnNextFrame(),this.options.svg.removeAttribute("viewBox")
}else this.simpleViewBoxCache()},Ne.prototype.simpleViewBoxCache=function(){
var t=this.viewport.getBBox()
this.viewBox.x=t.x,this.viewBox.y=t.y,this.viewBox.width=t.width,this.viewBox.height=t.height
},Ne.prototype.getViewBox=function(){return Ae.extend({},this.viewBox)
},Ne.prototype.processCTM=function(){var t,e=this.getCTM()
;(this.options.fit||this.options.contain)&&(t=this.options.fit?Math.min(this.options.width/this.viewBox.width,this.options.height/this.viewBox.height):Math.max(this.options.width/this.viewBox.width,this.options.height/this.viewBox.height),
e.a=t,e.d=t,e.e=-this.viewBox.x*t,e.f=-this.viewBox.y*t)
if(this.options.center){
var n=.5*(this.options.width-(this.viewBox.width+2*this.viewBox.x)*e.a),o=.5*(this.options.height-(this.viewBox.height+2*this.viewBox.y)*e.a)
e.e=n,e.f=o}
return this.originalState.zoom=e.a,this.originalState.x=e.e,this.originalState.y=e.f,
e},Ne.prototype.getOriginalState=function(){
return Ae.extend({},this.originalState)},Ne.prototype.getState=function(){
return Ae.extend({},this.activeState)},Ne.prototype.getZoom=function(){
return this.activeState.zoom},Ne.prototype.getRelativeZoom=function(){
return this.activeState.zoom/this.originalState.zoom
},Ne.prototype.computeRelativeZoom=function(t){return t/this.originalState.zoom
},Ne.prototype.getPan=function(){return{x:this.activeState.x,
y:this.activeState.y}},Ne.prototype.getCTM=function(){
var t=this.options.svg.createSVGMatrix()
return t.a=this.activeState.zoom,t.b=0,t.c=0,t.d=this.activeState.zoom,t.e=this.activeState.x,
t.f=this.activeState.y,t},Ne.prototype.setCTM=function(t){
var e=this.isZoomDifferent(t),n=this.isPanDifferent(t)
if(e||n){
if(e&&(!1===this.options.beforeZoom(this.getRelativeZoom(),this.computeRelativeZoom(t.a))?(t.a=t.d=this.activeState.zoom,
e=!1):(this.updateCache(t),this.options.onZoom(this.getRelativeZoom()))),n){
var o=this.options.beforePan(this.getPan(),{x:t.e,y:t.f}),r=!1,i=!1
!1===o?(t.e=this.getPan().x,t.f=this.getPan().y,r=i=!0):Ae.isObject(o)&&(!1===o.x?(t.e=this.getPan().x,
r=!0):Ae.isNumber(o.x)&&(t.e=o.x),
!1===o.y?(t.f=this.getPan().y,i=!0):Ae.isNumber(o.y)&&(t.f=o.y)),
r&&i||!this.isPanDifferent(t)?n=!1:(this.updateCache(t),
this.options.onPan(this.getPan()))}(e||n)&&this.updateCTMOnNextFrame()}
},Ne.prototype.isZoomDifferent=function(t){return this.activeState.zoom!==t.a
},Ne.prototype.isPanDifferent=function(t){
return this.activeState.x!==t.e||this.activeState.y!==t.f
},Ne.prototype.updateCache=function(t){
this.activeState.zoom=t.a,this.activeState.x=t.e,this.activeState.y=t.f
},Ne.prototype.pendingUpdate=!1,Ne.prototype.updateCTMOnNextFrame=function(){
this.pendingUpdate||(this.pendingUpdate=!0,
this.requestAnimationFrame.call(window,this.updateCTMCached))
},Ne.prototype.updateCTM=function(){var t=this.getCTM()
ze.setCTM(this.viewport,t,this.defs),this.pendingUpdate=!1,this.options.onUpdatedCTM&&this.options.onUpdatedCTM(t)
}
var Pe=ye,Te=Me,Ze=we,Oe=Se,Ie=function(t,e){return new Ne(t,e)
},De=function(t,e){this.init(t,e)},Le={
viewportSelector:".svg-pan-zoom_viewport",panEnabled:!0,controlIconsEnabled:!1,
zoomEnabled:!0,dblClickZoomEnabled:!0,mouseWheelZoomEnabled:!0,
preventMouseEventsDefault:!0,zoomScaleSensitivity:.1,minZoom:.5,maxZoom:10,
fit:!0,contain:!1,center:!0,refreshRate:"auto",beforeZoom:null,onZoom:null,
beforePan:null,onPan:null,customEventsHandler:null,eventsListenerElement:null,
onUpdatedCTM:null},Be={passive:!0}
De.prototype.init=function(t,e){var n=this
this.svg=t,this.defs=t.querySelector("defs"),Oe.setupSvgAttributes(this.svg),this.options=Ze.extend(Ze.extend({},Le),e),
this.state="none"
var o=Oe.getBoundingClientRectNormalized(t)
this.width=o.width,this.height=o.height,this.viewport=Ie(Oe.getOrCreateViewport(this.svg,this.options.viewportSelector),{
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
var r=this.getPublicInstance()
r.setBeforeZoom(this.options.beforeZoom),r.setOnZoom(this.options.onZoom),r.setBeforePan(this.options.beforePan),
r.setOnPan(this.options.onPan),
r.setOnUpdatedCTM(this.options.onUpdatedCTM),this.options.controlIconsEnabled&&Te.enable(this),
this.lastMouseWheelEventTime=Date.now(),this.setupHandlers()
},De.prototype.setupHandlers=function(){var t=this,e=null
if(this.eventListeners={mousedown:function(n){var o=t.handleMouseDown(n,e)
return e=n,o},touchstart:function(n){var o=t.handleMouseDown(n,e)
return e=n,o},mouseup:function(e){return t.handleMouseUp(e)},
touchend:function(e){return t.handleMouseUp(e)},mousemove:function(e){
return t.handleMouseMove(e)},touchmove:function(e){return t.handleMouseMove(e)},
mouseleave:function(e){return t.handleMouseUp(e)},touchleave:function(e){
return t.handleMouseUp(e)},touchcancel:function(e){return t.handleMouseUp(e)}
},null!=this.options.customEventsHandler){
this.options.customEventsHandler.init({svgElement:this.svg,
eventsListenerElement:this.options.eventsListenerElement,
instance:this.getPublicInstance()})
var n=this.options.customEventsHandler.haltEventListeners
if(n&&n.length)for(var o=n.length-1;o>=0;o--)this.eventListeners.hasOwnProperty(n[o])&&delete this.eventListeners[n[o]]
}
for(var r in this.eventListeners)(this.options.eventsListenerElement||this.svg).addEventListener(r,this.eventListeners[r],!this.options.preventMouseEventsDefault&&Be)
this.options.mouseWheelZoomEnabled&&(this.options.mouseWheelZoomEnabled=!1,this.enableMouseWheelZoom())
},De.prototype.enableMouseWheelZoom=function(){
if(!this.options.mouseWheelZoomEnabled){var t=this
this.wheelListener=function(e){return t.handleMouseWheel(e)}
var e=!this.options.preventMouseEventsDefault
Pe.on(this.options.eventsListenerElement||this.svg,this.wheelListener,e),this.options.mouseWheelZoomEnabled=!0
}},De.prototype.disableMouseWheelZoom=function(){
if(this.options.mouseWheelZoomEnabled){
var t=!this.options.preventMouseEventsDefault
Pe.off(this.options.eventsListenerElement||this.svg,this.wheelListener,t),this.options.mouseWheelZoomEnabled=!1
}},De.prototype.handleMouseWheel=function(t){
if(this.options.zoomEnabled&&"none"===this.state){
this.options.preventMouseEventsDefault&&(t.preventDefault?t.preventDefault():t.returnValue=!1)
var e=t.deltaY||1,n=Date.now()-this.lastMouseWheelEventTime,o=3+Math.max(0,30-n)
this.lastMouseWheelEventTime=Date.now(),"deltaMode"in t&&0===t.deltaMode&&t.wheelDelta&&(e=0===t.deltaY?0:Math.abs(t.wheelDelta)/t.deltaY),
e=-.3<e&&e<.3?e:(e>0?1:-1)*Math.log(Math.abs(e)+10)/o
var r=this.svg.getScreenCTM().inverse(),i=Oe.getEventPoint(t,this.svg).matrixTransform(r),a=Math.pow(1+this.options.zoomScaleSensitivity,-1*e)
this.zoomAtPoint(a,i)}},De.prototype.zoomAtPoint=function(t,e,n){
var o=this.viewport.getOriginalState()
n?(t=Math.max(this.options.minZoom*o.zoom,Math.min(this.options.maxZoom*o.zoom,t)),
t/=this.getZoom()):this.getZoom()*t<this.options.minZoom*o.zoom?t=this.options.minZoom*o.zoom/this.getZoom():this.getZoom()*t>this.options.maxZoom*o.zoom&&(t=this.options.maxZoom*o.zoom/this.getZoom())
var r=this.viewport.getCTM(),i=e.matrixTransform(r.inverse()),a=this.svg.createSVGMatrix().translate(i.x,i.y).scale(t).translate(-i.x,-i.y),s=r.multiply(a)
s.a!==r.a&&this.viewport.setCTM(s)},De.prototype.zoom=function(t,e){
this.zoomAtPoint(t,Oe.getSvgCenterPoint(this.svg,this.width,this.height),e)
},De.prototype.publicZoom=function(t,e){
e&&(t=this.computeFromRelativeZoom(t)),this.zoom(t,e)
},De.prototype.publicZoomAtPoint=function(t,e,n){
if(n&&(t=this.computeFromRelativeZoom(t)),"SVGPoint"!==Ze.getType(e)){
if(!("x"in e)||!("y"in e))throw new Error("Given point is invalid")
e=Oe.createSVGPoint(this.svg,e.x,e.y)}this.zoomAtPoint(t,e,n)
},De.prototype.getZoom=function(){return this.viewport.getZoom()
},De.prototype.getRelativeZoom=function(){return this.viewport.getRelativeZoom()
},De.prototype.computeFromRelativeZoom=function(t){
return t*this.viewport.getOriginalState().zoom
},De.prototype.resetZoom=function(){var t=this.viewport.getOriginalState()
this.zoom(t.zoom,!0)},De.prototype.resetPan=function(){
this.pan(this.viewport.getOriginalState())},De.prototype.reset=function(){
this.resetZoom(),this.resetPan()},De.prototype.handleDblClick=function(t){var e
if((this.options.preventMouseEventsDefault&&(t.preventDefault?t.preventDefault():t.returnValue=!1),
this.options.controlIconsEnabled)&&(t.target.getAttribute("class")||"").indexOf("svg-pan-zoom-control")>-1)return!1
e=t.shiftKey?1/(2*(1+this.options.zoomScaleSensitivity)):2*(1+this.options.zoomScaleSensitivity)
var n=Oe.getEventPoint(t,this.svg).matrixTransform(this.svg.getScreenCTM().inverse())
this.zoomAtPoint(e,n)},De.prototype.handleMouseDown=function(t,e){
this.options.preventMouseEventsDefault&&(t.preventDefault?t.preventDefault():t.returnValue=!1),
Ze.mouseAndTouchNormalize(t,this.svg),
this.options.dblClickZoomEnabled&&Ze.isDblClick(t,e)?this.handleDblClick(t):(this.state="pan",
this.firstEventCTM=this.viewport.getCTM(),
this.stateOrigin=Oe.getEventPoint(t,this.svg).matrixTransform(this.firstEventCTM.inverse()))
},De.prototype.handleMouseMove=function(t){
if(this.options.preventMouseEventsDefault&&(t.preventDefault?t.preventDefault():t.returnValue=!1),
"pan"===this.state&&this.options.panEnabled){
var e=Oe.getEventPoint(t,this.svg).matrixTransform(this.firstEventCTM.inverse()),n=this.firstEventCTM.translate(e.x-this.stateOrigin.x,e.y-this.stateOrigin.y)
this.viewport.setCTM(n)}},De.prototype.handleMouseUp=function(t){
this.options.preventMouseEventsDefault&&(t.preventDefault?t.preventDefault():t.returnValue=!1),
"pan"===this.state&&(this.state="none")},De.prototype.fit=function(){
var t=this.viewport.getViewBox(),e=Math.min(this.width/t.width,this.height/t.height)
this.zoom(e,!0)},De.prototype.contain=function(){
var t=this.viewport.getViewBox(),e=Math.max(this.width/t.width,this.height/t.height)
this.zoom(e,!0)},De.prototype.center=function(){
var t=this.viewport.getViewBox(),e=.5*(this.width-(t.width+2*t.x)*this.getZoom()),n=.5*(this.height-(t.height+2*t.y)*this.getZoom())
this.getPublicInstance().pan({x:e,y:n})},De.prototype.updateBBox=function(){
this.viewport.simpleViewBoxCache()},De.prototype.pan=function(t){
var e=this.viewport.getCTM()
e.e=t.x,e.f=t.y,this.viewport.setCTM(e)},De.prototype.panBy=function(t){
var e=this.viewport.getCTM()
e.e+=t.x,e.f+=t.y,this.viewport.setCTM(e)},De.prototype.getPan=function(){
var t=this.viewport.getState()
return{x:t.x,y:t.y}},De.prototype.resize=function(){
var t=Oe.getBoundingClientRectNormalized(this.svg)
this.width=t.width,this.height=t.height
var e=this.viewport
e.options.width=this.width,e.options.height=this.height,e.processCTM(),this.options.controlIconsEnabled&&(this.getPublicInstance().disableControlIcons(),
this.getPublicInstance().enableControlIcons())},De.prototype.destroy=function(){
var t=this
for(var e in this.beforeZoom=null,this.onZoom=null,this.beforePan=null,this.onPan=null,
this.onUpdatedCTM=null,
null!=this.options.customEventsHandler&&this.options.customEventsHandler.destroy({
svgElement:this.svg,eventsListenerElement:this.options.eventsListenerElement,
instance:this.getPublicInstance()
}),this.eventListeners)(this.options.eventsListenerElement||this.svg).removeEventListener(e,this.eventListeners[e],!this.options.preventMouseEventsDefault&&Be)
this.disableMouseWheelZoom(),this.getPublicInstance().disableControlIcons(),this.reset(),
je=je.filter((function(e){return e.svg!==t.svg
})),delete this.options,delete this.viewport,
delete this.publicInstance,delete this.pi,this.getPublicInstance=function(){
return null}},De.prototype.getPublicInstance=function(){var t=this
return this.publicInstance||(this.publicInstance=this.pi={enablePan:function(){
return t.options.panEnabled=!0,t.pi},disablePan:function(){
return t.options.panEnabled=!1,t.pi},isPanEnabled:function(){
return!!t.options.panEnabled},pan:function(e){return t.pan(e),t.pi},
panBy:function(e){return t.panBy(e),t.pi},getPan:function(){return t.getPan()},
setBeforePan:function(e){
return t.options.beforePan=null===e?null:Ze.proxy(e,t.publicInstance),t.pi},
setOnPan:function(e){
return t.options.onPan=null===e?null:Ze.proxy(e,t.publicInstance),t.pi},
enableZoom:function(){return t.options.zoomEnabled=!0,t.pi},
disableZoom:function(){return t.options.zoomEnabled=!1,t.pi},
isZoomEnabled:function(){return!!t.options.zoomEnabled},
enableControlIcons:function(){
return t.options.controlIconsEnabled||(t.options.controlIconsEnabled=!0,
Te.enable(t)),t.pi},disableControlIcons:function(){
return t.options.controlIconsEnabled&&(t.options.controlIconsEnabled=!1,
Te.disable(t)),t.pi},isControlIconsEnabled:function(){
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
return t.options.beforeZoom=null===e?null:Ze.proxy(e,t.publicInstance),t.pi},
setOnZoom:function(e){
return t.options.onZoom=null===e?null:Ze.proxy(e,t.publicInstance),t.pi},
zoom:function(e){return t.publicZoom(e,!0),t.pi},zoomBy:function(e){
return t.publicZoom(e,!1),t.pi},zoomAtPoint:function(e,n){
return t.publicZoomAtPoint(e,n,!0),t.pi},zoomAtPointBy:function(e,n){
return t.publicZoomAtPoint(e,n,!1),t.pi},zoomIn:function(){
return this.zoomBy(1+t.options.zoomScaleSensitivity),t.pi},zoomOut:function(){
return this.zoomBy(1/(1+t.options.zoomScaleSensitivity)),t.pi},
getZoom:function(){return t.getRelativeZoom()},setOnUpdatedCTM:function(e){
return t.options.onUpdatedCTM=null===e?null:Ze.proxy(e,t.publicInstance),t.pi},
resetZoom:function(){return t.resetZoom(),t.pi},resetPan:function(){
return t.resetPan(),t.pi},reset:function(){return t.reset(),t.pi},
fit:function(){return t.fit(),t.pi},contain:function(){return t.contain(),t.pi},
center:function(){return t.center(),t.pi},updateBBox:function(){
return t.updateBBox(),t.pi},resize:function(){return t.resize(),t.pi},
getSizes:function(){return{width:t.width,height:t.height,realZoom:t.getZoom(),
viewBox:t.viewport.getViewBox()}},destroy:function(){return t.destroy(),t.pi}}),
this.publicInstance}
var je=[],Re=function(t,e){var n=Ze.getSvg(t)
if(null===n)return null
for(var o=je.length-1;o>=0;o--)if(je[o].svg===n)return je[o].instance.getPublicInstance()
return je.push({svg:n,instance:new De(n,e)
}),je[je.length-1].instance.getPublicInstance()},qe=function(t,e){var n,o,r,i
for(n=0,o=t.length;n<o;++n)r=t[n],i&&e({a:i,b:i[2],z:r}),i=r}
var _e,Ve,Xe,Fe,Ue,$e=function(t){var e,n=[]
for(e=0;e<2;++e)n.push(t.slice(0,2))
return n}
function Ge(){if(Ve)return _e
return Ve=1,_e=function(t,e){var n,o,r=[]
if("number"==typeof e){for(n=0;n<2;++n)o=n,r.push(t[o]*e)
return r}return[t[0]*e[0]-t[1]*e[1],t[0]*e[1]+t[1]*e[0]]}}function We(){
if(Fe)return Xe
var t
return Fe=1,t=$e,Xe=function(e,n){var o,r,i
if(!e)return t(n)
for(o=[[],[]],r=0;r<2;++r)i=r,o[0].push(Math.min(e[0][i],n[i])),o[1].push(Math.max(e[1][i],n[i]))
return o}}Ue=qt
var He,Ye,Ke,Qe,Je,tn,en,nn,on,rn=function(t){return Ue(t.z,t.a)}
function an(){if(Ye)return He
var t
return Ye=1,t=Vt,He=function(e){return t(e,e)},He}function sn(){if(Je)return Qe
return Je=1,Qe=function(t,e){var n,o,r=[]
for(n=0;n<2;++n)o=n,r.push(t[o]+e[o])
return r}}Ke=an(),tn=function(t,e){var n,o,r=[]
"number"!=typeof e&&(t=[t[0]*e[0]+t[1]*e[1],t[1]*e[0]-t[0]*e[1]],e=Ke(e))
for(n=0;n<2;++n)o=n,r.push(t[o]/e)
return r},en=sn(),nn=Ge(),on=rn
var ln,un=function(t,e){return tn(en(en(t.a,t.z),nn(on(t),e)),2)}
ln=un
var cn,fn,hn,pn=function(t){return ln(t,[0,(1/t.b-t.b)/2])}
function dn(){if(fn)return cn
var t,e
return fn=1,t=qt,e=Xt,cn=function(n,o){return e(t(n,o))}}hn=dn()
var vn,mn,gn,bn,yn,wn,xn=function(t){return Math.abs(1/t.b+t.b)/4*hn(t.a,t.z)}
vn=$e,mn=Ge(),gn=We(),bn=rn,yn=pn,wn=xn
var kn,En,Sn,Cn,Mn,zn=function(t){var e,n,o,r,i,a,s,l,u,c,f
if(e=gn(vn(t.a),t.z),!t.b)return e
for(n=bn(t),o=[1,-t.b],o=mn(o,o),r=mn(n,o),o[0]=-o[0],r.push.apply(r,mn(n,o)),r.push.apply(r,n),
r.push(-n[0],-n[1]),i=0,a=r.length;i<a;++i)s=i,l=r[i],r[s]=l?l>0?1:-1:0
for(u=0,i=0;i<=3;++i)r[s=i]&&r[s]!==r[s+4]&&(u|=1<<s%2+r[s]+1)
if(!u)return e
for(c=yn(t),f=wn(t),i=0;i<=3;++i)2===(s=i)&&(f=-f),u&1<<s&&(e[s>>1][1&s]=c[1&s]-f)
return e}
function An(){if(En)return kn
var t
return En=1,t=We(),kn=function(e,n){if(!e)return n
if(!n)return e
return t(t(e,n[0]),n[1])}}Sn=qe,Cn=zn,Mn=An()
var Nn,Pn=function(t){var e
return Sn(t,(function(t){e=Mn(e,Cn(t))})),e}
Nn=qt
var Tn,Zn,On,In,Dn=function(t){if(t)return Nn(t[1],t[0])}
Tn=Tt,Zn=Pn,On=Dn,In=Xt
var Ln,Bn,jn,Rn,qn,_n,Vn,Xn,Fn,Un,$n,Gn,Wn=function(){var t,e,n,o,r
for(t=0,n=(e=Tn.ktes).length;t<n;++t)o=t,(r=e[t]).i=o,r.W=In(On(Zn(r._)))
Tn.ktes.sort((function(t,e){return e.W-t.W}))}
function Hn(){if(Rn)return jn
return Rn=1,jn=function(t){var e,n,o,r,i,a,s,l,u
for(e=An(),n=function(){
return Bn?Ln:(Bn=1,t=Ge(),e=sn(),n=qt,o=Dn,Ln=function(r,i){var a
if(r)return a=t(o(r),i-1),[n(r[0],a),e(r[1],a)]})
var t,e,n,o}(),o=Pn,r=0,i=t.length;r<i;++r)a=t[r],s=e(s,o(a))
return l=n(s,1.01),s=e(s,o(u=[[l[0][0],0,0],[l[1][0],0,0]])),u.bounds=n(s,1.01),
u},jn}function Yn(){if(Xn)return Vn
var t
return Xn=1,t=_n?qn:(_n=1,qn=function(t,e){var n,o
for(n=0;n<2;++n)if(t[o=n]!==e[o])return!1
return!0}),Vn=function(e){return e&&e.length>0&&t(e[0],e[e.length-1])}}
function Kn(){if(Un)return Fn
var t,e
return Un=1,t=dn(),e=Yn(),Fn=function(n){var o,r,i,a,s,l
for(o="",r=0,i=n.length;r<i;++r)a=n[r],o&&(o+=" "),l?l[2]?(s=Math.abs(1/l[2]+l[2])/4*t(a,l),
o+="A "+s+" "+s+" 0 "+Number(1<Math.abs(l[2]))+" "+Number(l[2]>0)):o+="L":o+="M",
o+=" "+a[0]+" "+a[1],l=a
e(n)&&(o+=" Z")
return o},Fn}function Qn(){if(Gn)return $n
var t
return Gn=1,t=Dn,$n=function(e){return[e[0][0],-e[1][1]].concat(t(e)).join(" ")}
}!function(t){var e,n,o,i
e=Re,n=r.exports,o=Tt,i=Wn,se(t,ae),t.view=function(){var t,r,a,s,l
return t=Hn(),r=Kn(),a=Qn(),o.KTEs?n("",{oncreate:function(){
document.title="Просмотр КТЭ: "+o.name,
o.ktes=o.KTEs,delete o.KTEs,i(),n.redraw()}}):o.ktes?(s=t(function(){
var t,e,n,r=[]
for(t=0,n=(e=o.ktes).length;t<n;++t)(l=e[t])._&&r.push(l._)
return r}()),n("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:a(s.bounds),
oncreate:function(t){e(t.dom,{controlIconsEnabled:!0})}},n("g",n("g.ktes",{
transform:"scale(1, -1)"},function(){var t,e,i,a,s,u,c=[]
for(t=0,i=(e=o.ktes).length;t<i;++t)l=e[t],c.push(n("path.kte",{
class:"kte-"+(l.i%3+1),d:r(l._)},n("title",(a=l.$,s=void 0,u=void 0,function(){
var t,e=[]
for(s in t=a)u=t[s],e.push(s+": "+u)
return e}().join("\n")))))
return c}(),n("path.axis",{d:r(s)
},n("title","Ось вращения")))))):void location.replace("#!/kte")}}(be)
var Jn,to,eo,no,oo,ro,io,ao,so,lo,uo,co,fo,ho,po,vo,mo,go,bo,yo,wo,xo,ko,Eo,So,Co,Mo,zo,Ao,No,Po,To,Zo,Oo,Io,Do,Lo,Bo,jo,Ro,qo={},_o={},Vo={}
function Xo(){if(to)return Jn
return to=1,Jn=function(t,e){
return e?[e[0][0]*t[0]+e[1][0]*t[1]+e[2][0],e[0][1]*t[0]+e[1][1]*t[1]+e[2][1]]:t.slice(0,2)
}}function Fo(){if(no)return eo
return no=1,eo=function(t){var e,n
return t*=Math.PI/180,e=Math.cos(t),n=Math.sin(t),[[e,n],[-n,e],[0,0]]}}
function Uo(){if(lo)return so
return lo=1,so=function(t){var e,n,o,r=[]
for(e=t.length-1;e>=0;--e)n=e,o=t[e],r.push(o.slice(0,2).concat(n?-t[n-1][2]:0))
return r}}function $o(){if(vo)return po
return vo=1,po=function(t){return[[1,0],[0,1],t.slice(0,2)]}}function Go(){
if(yo)return bo
var t,e
return yo=1,t=Xo(),e=go?mo:(go=1,mo=function(t){
return t[0][0]*t[1][1]-t[1][0]*t[0][1]}),bo=function(n,o){var r,i,a,s,l
for(i=[],a=0,s=n.length;a<s;++a)l=n[a],i.push(t(l,o).concat(l[2]||0))
if(r=i,o&&0>e(o))for(a=0,s=r.length;a<s;++a)(l=r[a])[2]=-l[2]
return r}}function Wo(){if(xo)return wo
var t,e,n,o
return xo=1,t=function(){if(co)return uo
var t,e
function n(t,e){return t.x-e.x}return co=1,t=Xt,e=Uo(),uo=function(o){
var r,i,a,s,l,u,c,f,h,p,d,v,m
for(r=[],i=0,a=o.length;i<a;++i)s=i,l=o[i],r.push(u={id:s,path:l,last:!1,
x:l[0][0],y:l[0][1]}),c=l[l.length-1],r.push(u.peer={id:s,path:l,last:!0,x:c[0],
y:c[1],peer:u})
for(r.sort(n),f=0,i=0,a=r.length;i<a;++i){
for(s=i,p=(h=r[i]).x-.1;f<s&&r[f].x<p;)f++
for(p=h.x+.1,s=f;(d=r[s++])&&d.x<p;)d.id===h.id||.1<Math.abs(d.y-h.y)||(v=t([h.x-d.x,h.y-d.y]),
h.next&&h.distance<v||(h.next=d,h.distance=v))}
for(i=0,a=r.length;i<a;++i)s=i,(h=r[i]).next&&h.next.next!==h&&(h.next=!1)
function g(t){var n,o
for(n=t,m.push(o=[]);;){
if(n.done=n.peer.done=!0,o.length&&o.pop(),o.push.apply(o,n.last?e(n.path):n.path),
!(n=n.peer.next))return
if(n===t)return o.pop(),void o.push(o[0].slice(0,2).concat(0))}}
for(m=[],i=0,a=r.length;i<a;++i)if(!(h=r[i]).done){
if(h.next&&(h=h.peer).next)continue
g(h)}for(i=0,a=r.length;i<a;++i)(h=r[i]).done||g(h)
return m.reverse(),m},uo}(),e=function(){if(ho)return fo
function t(o){var r
return"function"!=typeof(r=t.mode)&&(r=r?e:n),r(o)}function e(t){var e
return[(e=t.controls)[0].concat(0),e[e.length-1].concat(0)]}function n(){
throw TypeError("SPLINE found!")}return ho=1,fo=t,t.mode=!1,fo}(),n=$o(),o=Go(),
wo=function(r){var i,a,s,l,u
for(a={},s=0,l=r.length;s<l;++s)(u=r[s]).name&&(a[u.name]=u)
return i=a,function r(a){var s,l,u,c,f,h,p,d,v,m,g,b,y
if(a.paths)return
for(a.paths=[],s=a.closed.concat(t(a.nonClosed.concat(function(){var t,n,o,r=[]
for(t=0,o=(n=a.splines).length;t<o;++t)l=n[t],r.push(e(l))
return r
}()))),u=0,f=(c=a.edges).length;u<f;++u)if(h=c[u],p=i[h.name])for(r(p),d=n(h.origin),
v=0,g=(m=p.paths).length;v<g;++v)b=m[v],s.push(o(b,d))
for(d=n(a.base),u=0,f=s.length;u<f;++u)y=u,b=s[u],s[y]=o(b,d)
a.paths=s}(r[0]),r[0].paths}}function Ho(){if(Eo)return ko
var t,e,n
return Eo=1,t=function(){return ro||(ro=1,t=sn(),e=Xo(),n=Fo(),oo=function(o){
var r,i,a,s
function l(){r.push(i={id:r.length,base:[0,0],closed:[],nonClosed:[],splines:[],
edges:[]})}function u(){var t
if(!/^\d+$/.test(t=o().trim()))throw Error("Invalid DXF file")
a={id:+t,val:o().trim()}}function c(){for(var t,e,n,o;;)switch(u(),a.id){case 0:
return void i.nonClosed.push([[t,e,0],[n,o,0]])
case 10:t=+a.val
break
case 20:e=+a.val
break
case 11:n=+a.val
break
case 21:o=+a.val}}function f(){for(var o,r,s,l,c,f,h,p,d,v;!o;)switch(u(),a.id){
case 0:o=!0
break
case 10:r=+a.val
break
case 20:s=+a.val
break
case 40:l=+a.val
break
case 50:c=+a.val
break
case 51:f=+a.val}
null!=c&&null!=f?(h=[r,s],p=f-c,p-=360*Math.floor(p/360),(d=t(h,e([l,0],n(c))))[2]=Math.tan(p*Math.PI/720),
(v=t(h,e([l,0],n(f))))[2]=0,
i.nonClosed.push([d,v])):i.closed.push([[r-l,s,-1],[r+l,s,-1],[r-l,s,0]])}
function h(t,e){var n
e?(t.push(n=t[0].slice()),n[2]=0,i.closed.push(t)):i.nonClosed.push(t)}
function p(){var t,e,n,o
for(t=[];!e;)switch(u(),a.id){case 0:e=!0
break
case 10:t.push(n=[+a.val,0,0])
break
case 20:n[1]=+a.val
break
case 42:n[2]=+a.val
break
case 70:o=1&+a.val}h(t,o)}function d(){var t,e,n,o
for(t=[];!e;)switch(u(),a.id){case 0:e=!0
break
case 70:n=1&+a.val}for(e=!1;;){switch(a.id){case 0:
(e="VERTEX"!==a.val)||t.push(o=[0,0,0])
break
case 10:o[0]=+a.val
break
case 20:o[1]=+a.val
break
case 42:o[2]=+a.val}if(e)break
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
case 21:n[1]=+a.val}}for(r=[],l(),u();!s;)if(0===a.id)switch(a.val){case"EOF":
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
case"ENDBLK":i=r[0],u()
break
case"INSERT":m()
break
case"SPLINE":g()
break
default:u()}else u()
return r}),oo
var t,e,n}(),e=ao?io:(ao=1,io=function(t){var e
return e=t.split(/\r?\n|\r/),function(){return e.length?e.shift():""}
}),n=Wo(),ko=function(o){"string"==typeof o&&(o=e(o))
return n(t(o))}}function Yo(){if(No)return Ao
var t,e,n
return No=1,t=Yn(),e=qe,n=function(){if(zo)return Mo
var t,e,n,o
function r(t){return t*t}return zo=1,t=Vt,e=Wt,n=an(),o=qt,Mo=function(i){
var a,s
return a=t(i.a,e(i.z))/2,i.b&&(s=r(i.b),a-=(Math.atan(i.b)*r(1+s)-(1-s)*i.b)/s/8*n(o(i.a,i.z))),
a},Mo}(),Ao=function(o){var r
if(!t(o))return 0
return r=0,e(o,(function(t){r+=n(t)})),r}}function Ko(){if(Do)return Io
function t(t){var e,n,o
if(!Yn()(t))for(e=t[0],n=t[t.length-1],o=0;o<2;++o)if(.001>Math.abs(e[o]-n[o]))return o
}function e(t,e){var o,r,i
for(o=0,r=Math.min(t.length,e.length);o<r;++o)if(i=n(t[o],e[o]))return i
return n(t.length,e.length)}function n(t,e){return t===e?0:t>e?1:-1}return Do=1,
Io=function(n){var o,r,i,a,s,l,u,c,f,h,p,d,v,m,g,b,y,w,x,k,E,S,C,M,z
for(o=Xt,r=Dn,i=We(),a=Pn,s=function(){return Co?So:(Co=1,t=Yn(),So=function(e){
e&&e.length&&!t(e)&&(e[e.length-1][2]=0,e.push(e[0].slice(0,2).concat(0)))})
var t}(),l=Yo(),u=Uo(),c=Go(),f=function(){return To?Po:(To=1,Po=function(){
return[[0,-1],[1,0],[0,0]]})}(),h=function(){return Oo?Zo:(Oo=1,Zo=function(){
return[[-1,0],[0,-1],[0,0]]})
}(),p=$o(),m=n.length,g=0,b=1,y=0,w=0,x=n.length;w<x;++w)k=n[w],
E=[k.length,o(r(a(k)))],
(null==d||0<e(E,d))&&(S=k,d=E),null!=(C=t(k))&&(g++,2===k.length&&.001>Math.abs(k[0][2])&&m--,
(!v||0<e(E,v))&&(b=C,y=k[0][C],v=E))
if(!m)throw RangeError("No contour(s) found")
k=S,M=y,b||(M=-M,k=c(k,f()))
k=c(k,p([0,-M])),s(k),0>l(k)&&(k=u(k))
;(z=a(k))[0][1]+z[1][1]<0&&(k=c(k,h()),z=a(k))
return{path:k=c(k,p([-z[0][0],0])),size:r(i(z,[z[0][0],0])),paths:m,axis:y,
dir:b,$dir:"ZX".charAt(b),axles:g}},Io}!function(t){var e,n
async function o(t){var o,r,i,a,s,l
for(o=Ho(),r=Ko(),delete n.errors,i=0,a=t.length;i<a;++i){s=t[i]
try{n.$=r(o(await s.text())),n.name=s.name,location.hash="#!/dxf/edit"
break}catch(t){l=t,(n.errors||(n.errors={}))[s.name]=l.message}}e.redraw()}
e=r.exports,n=Vo,se(t,o),t.view=function(){var t
return t=this,e.fragment(e("input.hidden",{type:"file",accept:".dxf",
oncreate:function(e){(t.uploadButton=e.dom).onchange=function(){o(this.files)}}
}),e("button",{type:"button",onclick:function(){t.uploadButton.click()}
},"Загрузить файл геометрии!")," ...или перетащите DXF-файл в это окно...")}
}(_o),Lo=r.exports,Bo=_o,jo=Vo,Ro=ce,qo.view=function(){
return[Lo("h1",document.title="Импорт геометрии из DXF"),Lo("form",Lo(Bo)),Lo(Ro,jo)]
}
var Qo,Jo,tr={},er={}
Qo=r.exports,Jo=Vo,er.view=function(){var t,e,n,o,r
if(Jo.path)return t=Hn(),e=Qn(),n=Kn(),o=t([Jo.path]),Qo("svg",{
xmlns:"http://www.w3.org/2000/svg",viewBox:e(o.bounds)
},Qo("g",Qo("g.DXF",Qo("defs",function(){var t,e,o=[]
for(t=0,e=Jo.path.length;t<e;++t)(r=t)&&o.push(Qo("path",{id:":"+r,
d:n(Jo.path.slice(r-1,r+1)),"vector-effect":"non-scaling-stroke"}))
return o}()),"span"===Jo.tab?Qo("use",{href:"#:"+Jo.n,class:"active"
}):void 0,function(){var t,e,n=[]
for(t=0,e=Jo.path.length;t<e;++t)(r=t)&&n.push(o.call(this,r))
return n
function o(t){return Qo("use",{href:"#:"+t,onclick:function(){
Jo.n=t,Jo.tab="span"}})}}.call(this),Qo("path.axis",{d:n(o)}))))}
var nr={},or={}
function rr(t){return Math.round(100*t)/100}
or.k="info",or.t="Сводка",or.view=function(){var t,e
return(t=r.exports)("ul",t("li","Файл: "+(e=Vo).name),1!==e.got.paths?t("li","Найдено контуров: "+e.got.paths):void 0,1!==e.got.axles?t("li","Найдено осей: "+e.got.axles):void 0,t("li","Используется ось "+e.got.$dir+"="+rr(e.got.axis)),t("li","Размеры: "+e.got.size.map(rr).join("x")+" (⌀"+rr(2*e.got.size[1])+")"),t("li","Перейдите на вкладку ",t("a",{
href:"#",onclick:function(){return e.tab="text",!1}
},"Результат")," для просмотра / сохранения входного файла для распознавания КТЭ"))
}
var ir,ar,sr,lr,ur={}
ir=r.exports,ar=Vo,ur.k="global",ur.t="Параметры",ur.view=function(){
return null==ar.n&&(ar.n=1),
ir("form",ir("fieldset",ir("legend","Начало обработки"),function(){
var t,e,n,o=[]
for(t=0,n=(e=["Слева","Справа"]).length;t<n;++t)o.push(r.call(this,t,e[t]))
return o
function r(t,e){var n,o
return ir("label",ir("input",{type:"radio",name:"dir",
checked:(null!=(o=(n=ar.global).dir)?o:n.dir=t)===t,onclick:function(){
return ar.global.dir=t}})," ",e,t?ir(lr):" ")}
}.call(this)),ir(sr,"id","Код детали"),ir(sr,"matter","Материал"),ir(sr,"hard","Твёрдость",!0),ir(sr,"D","Диаметр заготовки",!0),ir(sr,"W","Длина заготовки",!0))
},sr={view:function(t){var e,n,o,r,i
return e=ar.global,n=t.children,o=n[0],r=n[1],i=n[2],ir("label",r,ir("br"),ir("input",{
type:i?"number":"text",step:"any",min:0,value:e[o],onchange:function(){
e[o]=this.value.trim()}}),ir("span"),ir("br"))}},lr={view:function(){var t,e
return ir("sup.popover","*",ir("",ir("select",{onchange:function(){
ar.mirror=this.selectedIndex}},function(){var n,o,r,i,a=[]
for(n=0,r=(o=["Установкой флага 0|1","Отражением ±Z <=>"]).length;n<r;++n)t=n,e=o[n],
a.push(ir("option",{selected:(null!=(i=ar.mirror)?i:ar.mirror=t)===t},e))
return a}())))}}
var cr,fr,hr,pr,dr={}
function vr(){return fr.spans[fr.n-1]}
cr=r.exports,fr=Vo,dr.k="span",dr.t="Локально",dr.view=function(){var t,e
return cr("form",cr(pr),cr(hr,"Ra","Шероховатость Ra"),cr(hr,"Q","Квалитет","\\p{Letter}?\\d+"),cr("label",cr("input",{
type:"checkbox",checked:vr().thread,onclick:function(){
vr().thread=Number(this.checked)}})," Резьба"),cr("",{
class:vr().thread?void 0:"hidden",style:{paddingLeft:"1em"}
},cr("label","Тип",cr("br"),cr("select",{onchange:function(){
vr().tx=this.selectedIndex}},function(){var n,o,r,i,a,s=[]
for(n=0,r=(o=["Метрическая","Дюймовая","Трапецеидальная"]).length;n<r;++n)t=n,e=o[n],
s.push(cr("option",{selected:(null!=(a=(i=vr()).tx)?a:i.tx=t)===t},e))
return s}())),cr("br"),cr(hr,"w","Шаг резьбы"),cr(hr,"x","Глубина резьбы")))
},hr={view:function(t){var e,n,o,r
return e=t.children,n=e[0],o=e[1],r=e[2],cr("label",o,cr("br"),cr("input",{
type:r?"text":"number",pattern:r,step:"any",min:0,value:vr()[n],
onchange:function(){vr()[n]=this.value.trim()}}),cr("span"),cr("br"))}},pr={
view:function(){return cr("table",cr("tr",{style:{whiteSpace:"nowrap"}
},cr("td",cr("button",{type:"button",disabled:1===fr.n,onclick:function(){fr.n=1
}},"|<<")),cr("td",cr("button",{type:"button",onclick:function(){
--fr.n||(fr.n=fr.spans.length)}},"<<")),cr("td",{width:"100%",align:"center"
},fr.n+" / "+fr.spans.length),cr("td",cr("button",{type:"button",
onclick:function(){fr.n%=fr.spans.length,fr.n++}},">>")),cr("td",cr("button",{
type:"button",disabled:fr.n===fr.spans.length,onclick:function(){
fr.n=fr.spans.length}},">>|"))))}}
var mr,gr,br,yr,wr,xr,kr,Er,Sr={}
function Cr(){if(gr)return mr
return gr=1,mr=function(){return[[1,0],[0,1],[0,0]]}}function Mr(){
if(Er)return kr
var t,e
function n(t){return Math.round(1e3*t)/1e3}return Er=1,t=pn,e=qt,kr=function(o){
var r,i,a,s,l,u,c,f
for(r="",i=0,a=o.length;i<a;++i)s=i,l=o[i],u=0===s?0:0===f[2]?1:f[2]>0?3:2,r+="G"+u+("X"+n((h=l)[1])+"Z"+n(h[0])),
f&&0!==f[2]&&(c=t({a:f,b:f[2],z:l
}),c=e(c,f),r+="I"+n(c[1])+"K"+n(c[0])),r+="\n",f=l
var h
return r},kr}var zr,Ar,Nr,Pr,Tr,Zr,Or,Ir,Dr,Lr,Br,jr,Rr,qr=function(){
var t,e,n,o,r,i,a,s,l,u,c,f,h
t=Vo,Ge(),e=$o(),n=function(){return yr||(yr=1,br=function(t){var e,n,o
return e=Cr(),t=Number(!!t),n=e(),(o=n[t])[t]=-o[t],n}),br}(),o=function(){
return xr||(xr=1,wr=function(){var t,e,n,o,r,i,a
for(t=Cr(),e=Xo(),n=qt,o=t(),r=arguments.length-1;r>=0;--r)if(i=arguments[r])for(a=0;a<3;++a)o[a]=e(o[a],i)
for(r=0;r<2;++r)o[r]=n(o[r],o[2])
return o}),wr
}(),r=Go(),i=Mr(),a=Uo(),l=(s=t.global).dir,u=t.path,c=t.got.size,f=t.spans,
l&&t.mirror&&(l=Number(!l),u=r(a(u),o(e([c[0],0]),n())),(f=f.slice()).reverse())
return(s.id||42)+"\n"+(s.matter||"STEEL")+"\n"+(s.hard||1)+"\n"+(s.D||Math.ceil(2*c[1]))+"\n"+(s.W||Math.ceil(c[0]))+"\n"+(l||0)+"\n"+t.spans.length+"\n"+function(){
var t,e,n,o=[]
for(t=0,n=(e=f).length;t<n;++t)h=e[t],o.push((h.thread||0)+","+_r(h.Ra)+",,,,,,,"+_r(h.x)+","+_r(h.tx)+","+_r(h.w)+","+_r(h.Q))
return o}().join("\n")+"\n"+i(u)}
function _r(t){
return null==t&&(t=""),/^\s|\s$|"|,/.test(t)?'"'+t.replace(/"/g,'""')+'"':t}
zr=r.exports,Ar=Vo,Nr=qr,Sr.k="text",Sr.t="Результат",Sr.view=function(){var t
return t=this,zr("form",zr("button",{type:"button",style:{width:"100%"},
onclick:function(){!function(t,e){var n,o
;(n=document.createElement("a")).setAttribute("href","data:text/plain;charset=utf-8,"+encodeURIComponent(e)),
n.setAttribute("download",t),
document.createEvent?((o=document.createEvent("MouseEvents")).initEvent("click",!0,!0),
n.dispatchEvent(o)):n.click()}(Ar.name.replace(/[.].*/,".txt"),t.txt.value)}
},"Сохранить файл"),zr("p"),zr("textarea",{style:{width:"100%",
boxSizing:"border-box"},rows:27,readonly:!0,oncreate:function(e){t.txt=e.dom}
},Nr()))},Pr=r.exports,Tr=Vo,Zr=[or,ur,dr,Sr],nr.view=function(){var t
return[Pr(".tabs",function(){var t,e,n,o=[]
for(t=0,n=(e=Zr).length;t<n;++t)o.push(r.call(this,e[t]))
return o
function r(t){var e
return[Pr("span"),Pr("label",{
class:(null!=(e=Tr.tab)?e:Tr.tab=t.k)===t.k?"active":void 0},Pr("input",{
type:"radio",name:"tab",checked:Tr.tab===t.k,onclick:function(){Tr.tab=t.k}
})," ",t.t)]}}.call(this)),function(){var e,n,o,r=[]
for(e=0,o=(n=Zr).length;e<o;++e)t=n[e],r.push(Pr("",{
class:Tr.tab!==t.k?"hidden":void 0},Pr(t)))
return r}()]},Or=r.exports,Ir=Vo,Dr=er,Lr=nr,tr.view=function(){
if(Ir.$&&function(){var t,e,n,o,r
for(t=Ir.$,delete Ir.$,Ir.got=t,Ir.path=t.path,e=t.size,Ir.global={
id:Ir.name.replace(/[.].*/,""),D:Math.ceil(2*e[1]),W:Math.ceil(e[0])
},n=[],o=0,r=Ir.path.length-1;o<r;++o)n.push({})
Ir.spans=n,Ir.n=1,Ir.tab="info"
}(),Ir.path)return document.title="Ввод технологических параметров: "+Ir.name,
[Or("",Or(Dr)),Or("",Or(Lr))]
location.replace("#!/dxf")},function(t){var e,n,o,r,i
e=At,n=Pt,o=be,r=qo,i=tr,t["/"]=e,t["/dxf"]=r,t["/dxf/edit"]=i,t["/kte"]=n,t["/kte/show"]=o
}(zt),
jr=gt,Rr=zt,(Br=r.exports).mount(document.head,jr),Br.route(document.body,"/",Rr)
}()
//# sourceMappingURL=view.js.map
