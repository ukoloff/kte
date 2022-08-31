!function(){"use strict"
var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{}
function t(e){var t=e.default
if("function"==typeof t){var n=function(){return t.apply(this,arguments)}
n.prototype=t.prototype}else n={}
return Object.defineProperty(n,"__esModule",{value:!0
}),Object.keys(e).forEach((function(t){
var r=Object.getOwnPropertyDescriptor(e,t)
Object.defineProperty(n,t,r.get?r:{enumerable:!0,get:function(){return e[t]}})
})),n}var n,r,o={exports:{}}
function i(){if(r)return n
function e(e,t,n,r,o,i){return{tag:e,key:t,attrs:n,children:r,text:o,dom:i,
domSize:void 0,state:void 0,events:void 0,instance:void 0}}
return r=1,e.normalize=function(t){
return Array.isArray(t)?e("[",void 0,void 0,e.normalizeChildren(t),void 0,void 0):null==t||"boolean"==typeof t?null:"object"==typeof t?t:e("#",void 0,void 0,String(t),void 0,void 0)
},e.normalizeChildren=function(t){var n=[]
if(t.length){
for(var r=null!=t[0]&&null!=t[0].key,o=1;o<t.length;o++)if((null!=t[o]&&null!=t[o].key)!==r)throw new TypeError(!r||null==t[o]&&"boolean"!=typeof t[o]?"In fragments, vnodes must either all have keys or none have keys.":"In fragments, vnodes must either all have keys or none have keys. You may wish to consider using an explicit keyed empty fragment, m.fragment({key: ...}), instead of a hole.")
for(o=0;o<t.length;o++)n[o]=e.normalize(t[o])}return n},n=e}
var l,a,u=i(),s=function(){var e,t=arguments[this],n=this+1
if(null==t?t={}:("object"!=typeof t||null!=t.tag||Array.isArray(t))&&(t={},n=this),
arguments.length===n+1)e=arguments[n],Array.isArray(e)||(e=[e])
else for(e=[];n<arguments.length;)e.push(arguments[n++])
return u("",t.key,t,e)}
function f(){return a?l:(a=1,l={}.hasOwnProperty)}
var c=i(),d=s,p=f(),h=/(?:(^|#|\.)([^#\.\[\]]+))|(\[(.+?)(?:\s*=\s*("|'|)((?:\\["'\]]|.)*?)\5)?\])/g,v={}
function m(e){for(var t in e)if(p.call(e,t))return!1
return!0}function g(e){for(var t,n="div",r=[],o={};t=h.exec(e);){
var i=t[1],l=t[2]
if(""===i&&""!==l)n=l
else if("#"===i)o.id=l
else if("."===i)r.push(l)
else if("["===t[3][0]){var a=t[6]
a&&(a=a.replace(/\\(["'])/g,"$1").replace(/\\\\/g,"\\")),"class"===t[4]?r.push(a):o[t[4]]=""===a?a:a||!0
}}return r.length>0&&(o.className=r.join(" ")),v[e]={tag:n,attrs:o}}
function y(e,t){var n=t.attrs,r=p.call(n,"class"),o=r?n.class:n.className
if(t.tag=e.tag,t.attrs={},!m(e.attrs)&&!m(n)){var i={}
for(var l in n)p.call(n,l)&&(i[l]=n[l])
n=i}
for(var l in e.attrs)p.call(e.attrs,l)&&"className"!==l&&!p.call(n,l)&&(n[l]=e.attrs[l])
for(var l in null==o&&null==e.attrs.className||(n.className=null!=o?null!=e.attrs.className?String(e.attrs.className)+" "+String(o):o:null!=e.attrs.className?e.attrs.className:null),
r&&(n.class=null),n)if(p.call(n,l)&&"key"!==l){t.attrs=n
break}return t}var b=function(e){
if(null==e||"string"!=typeof e&&"function"!=typeof e&&"function"!=typeof e.view)throw Error("The selector must be either a string or a component.")
var t=d.apply(1,arguments)
return"string"==typeof e&&(t.children=c.normalizeChildren(t.children),"["!==e)?y(v[e]||g(e),t):(t.tag=e,
t)},w=i(),x=i(),k=s,O=b
O.trust=function(e){return null==e&&(e=""),w("<",void 0,void 0,e,void 0,void 0)
},O.fragment=function(){var e=k.apply(0,arguments)
return e.tag="[",e.children=x.normalizeChildren(e.children),e}
var C,S,A=O,E={exports:{}}
function j(){if(S)return C
S=1
var e=function(t){
if(!(this instanceof e))throw new Error("Promise must be called with 'new'.")
if("function"!=typeof t)throw new TypeError("executor must be a function.")
var n=this,r=[],o=[],i=s(r,!0),l=s(o,!1),a=n._instance={resolvers:r,rejectors:o
},u="function"==typeof setImmediate?setImmediate:setTimeout
function s(e,t){return function i(s){var c
try{
if(!t||null==s||"object"!=typeof s&&"function"!=typeof s||"function"!=typeof(c=s.then))u((function(){
t||0!==e.length||console.error("Possible unhandled promise rejection:",s)
for(var n=0;n<e.length;n++)e[n](s)
r.length=0,o.length=0,a.state=t,a.retry=function(){i(s)}}))
else{if(s===n)throw new TypeError("Promise can't be resolved with itself.")
f(c.bind(s))}}catch(e){l(e)}}}function f(e){var t=0
function n(e){return function(n){t++>0||e(n)}}var r=n(l)
try{e(n(i),r)}catch(e){r(e)}}f(t)}
return e.prototype.then=function(t,n){var r,o,i=this._instance
function l(e,t,n,l){t.push((function(t){if("function"!=typeof e)n(t)
else try{r(e(t))}catch(e){o&&o(e)}
})),"function"==typeof i.retry&&l===i.state&&i.retry()}
var a=new e((function(e,t){r=e,o=t}))
return l(t,i.resolvers,r,!0),l(n,i.rejectors,o,!1),a
},e.prototype.catch=function(e){return this.then(null,e)
},e.prototype.finally=function(t){return this.then((function(n){
return e.resolve(t()).then((function(){return n}))}),(function(n){
return e.resolve(t()).then((function(){return e.reject(n)}))}))
},e.resolve=function(t){return t instanceof e?t:new e((function(e){e(t)}))
},e.reject=function(t){return new e((function(e,n){n(t)}))},e.all=function(t){
return new e((function(e,n){var r=t.length,o=0,i=[]
if(0===t.length)e([])
else for(var l=0;l<t.length;l++)!function(l){function a(t){
o++,i[l]=t,o===r&&e(i)}
null==t[l]||"object"!=typeof t[l]&&"function"!=typeof t[l]||"function"!=typeof t[l].then?a(t[l]):t[l].then(a,n)
}(l)}))},e.race=function(t){return new e((function(e,n){
for(var r=0;r<t.length;r++)t[r].then(e,n)}))},C=e}var T,N,z,P,_=j()
function L(){if(N)return T
N=1
var e=i()
return T=function(t){var n,r=t&&t.document,o={svg:"http://www.w3.org/2000/svg",
math:"http://www.w3.org/1998/Math/MathML"}
function i(e){return e.attrs&&e.attrs.xmlns||o[e.tag]}function l(e,t){
if(e.state!==t)throw new Error("'vnode.state' must not be modified.")}
function a(e){var t=e.state
try{return this.apply(t,arguments)}finally{l(e,t)}}function u(){try{
return r.activeElement}catch(e){return null}}function s(e,t,n,r,o,i,l){
for(var a=n;a<r;a++){var u=t[a]
null!=u&&f(e,u,o,l,i)}}function f(t,n,o,l,u){var c=n.tag
if("string"==typeof c)switch(n.state={},null!=n.attrs&&q(n.attrs,n,o),c){
case"#":!function(e,t,n){t.dom=r.createTextNode(t.children),w(e,t.dom,n)}(t,n,u)
break
case"<":d(t,n,l,u)
break
case"[":!function(e,t,n,o,i){var l=r.createDocumentFragment()
if(null!=t.children){var a=t.children
s(l,a,0,a.length,n,null,o)}
t.dom=l.firstChild,t.domSize=l.childNodes.length,w(e,l,i)}(t,n,o,l,u)
break
default:!function(e,t,n,o,l){
var a=t.tag,u=t.attrs,f=u&&u.is,c=(o=i(t)||o)?f?r.createElementNS(o,a,{is:f
}):r.createElementNS(o,a):f?r.createElement(a,{is:f}):r.createElement(a)
t.dom=c,null!=u&&function(e,t,n){
"input"===e.tag&&null!=t.type&&e.dom.setAttribute("type",t.type)
var r=null!=t&&"input"===e.tag&&"file"===t.type
for(var o in t)E(e,o,null,t[o],n,r)}(t,u,o)
if(w(e,c,l),!x(t)&&null!=t.children){var d=t.children
s(c,d,0,d.length,n,null,o),"select"===t.tag&&null!=u&&function(e,t){
if("value"in t)if(null===t.value)-1!==e.dom.selectedIndex&&(e.dom.value=null)
else{var n=""+t.value
e.dom.value===n&&-1!==e.dom.selectedIndex||(e.dom.value=n)}
"selectedIndex"in t&&E(e,"selectedIndex",null,t.selectedIndex,void 0)}(t,u)}
}(t,n,o,l,u)}else!function(t,n,r,o,i){(function(t,n){var r
if("function"==typeof t.tag.view){
if(t.state=Object.create(t.tag),null!=(r=t.state.view).$$reentrantLock$$)return
r.$$reentrantLock$$=!0}else{
if(t.state=void 0,null!=(r=t.tag).$$reentrantLock$$)return
r.$$reentrantLock$$=!0,t.state=null!=t.tag.prototype&&"function"==typeof t.tag.prototype.view?new t.tag(t):t.tag(t)
}q(t.state,t,n),null!=t.attrs&&q(t.attrs,t,n)
if(t.instance=e.normalize(a.call(t.state.view,t)),t.instance===t)throw Error("A view cannot return the vnode it received as argument")
r.$$reentrantLock$$=null
})(n,r),null!=n.instance?(f(t,n.instance,r,o,i),n.dom=n.instance.dom,
n.domSize=null!=n.dom?n.instance.domSize:0):n.domSize=0}(t,n,o,l,u)}var c={
caption:"table",thead:"table",tbody:"table",tfoot:"table",tr:"tbody",th:"tr",
td:"tr",colgroup:"table",col:"colgroup"}
function d(e,t,n,o){
var i=t.children.match(/^\s*?<(\w+)/im)||[],l=r.createElement(c[i[1]]||"div")
"http://www.w3.org/2000/svg"===n?(l.innerHTML='<svg xmlns="http://www.w3.org/2000/svg">'+t.children+"</svg>",
l=l.firstChild):l.innerHTML=t.children,
t.dom=l.firstChild,t.domSize=l.childNodes.length,t.instance=[]
for(var a,u=r.createDocumentFragment();a=l.firstChild;)t.instance.push(a),u.appendChild(a)
w(e,u,o)}function p(e,t,n,r,o,i){
if(t!==n&&(null!=t||null!=n))if(null==t||0===t.length)s(e,n,0,n.length,r,o,i)
else if(null==n||0===n.length)k(e,t,0,t.length)
else{var l=null!=t[0]&&null!=t[0].key,a=null!=n[0]&&null!=n[0].key,u=0,c=0
if(!l)for(;c<t.length&&null==t[c];)c++
if(!a)for(;u<n.length&&null==n[u];)u++
if(l!==a)k(e,t,c,t.length),s(e,n,u,n.length,r,o,i)
else if(a){
for(var d,p,b,w,x,C=t.length-1,S=n.length-1;C>=c&&S>=u&&(b=t[C],w=n[S],
b.key===w.key);)b!==w&&h(e,b,w,r,o,i),null!=w.dom&&(o=w.dom),C--,S--
for(;C>=c&&S>=u&&(d=t[c],p=n[u],d.key===p.key);)c++,u++,d!==p&&h(e,d,p,r,g(t,c,o),i)
for(;C>=c&&S>=u&&u!==S&&d.key===w.key&&b.key===p.key;)y(e,b,x=g(t,c,o)),b!==p&&h(e,b,p,r,x,i),
++u<=--S&&y(e,d,o),
d!==w&&h(e,d,w,r,o,i),null!=w.dom&&(o=w.dom),c++,b=t[--C],w=n[S],d=t[c],p=n[u]
for(;C>=c&&S>=u&&b.key===w.key;)b!==w&&h(e,b,w,r,o,i),null!=w.dom&&(o=w.dom),S--,
b=t[--C],w=n[S]
if(u>S)k(e,t,c,C+1)
else if(c>C)s(e,n,u,S+1,r,o,i)
else{var A,E,j=o,T=S-u+1,N=new Array(T),z=0,P=0,_=2147483647,L=0
for(P=0;P<T;P++)N[P]=-1
for(P=S;P>=u;P--){null==A&&(A=v(t,c,C+1))
var I=A[(w=n[P]).key]
null!=I&&(_=I<_?I:-1,N[P-u]=I,b=t[I],t[I]=null,b!==w&&h(e,b,w,r,o,i),null!=w.dom&&(o=w.dom),
L++)}if(o=j,L!==C-c+1&&k(e,t,c,C+1),0===L)s(e,n,u,S+1,r,o,i)
else if(-1===_)for(E=function(e){var t=[0],n=0,r=0,o=0,i=m.length=e.length
for(o=0;o<i;o++)m[o]=e[o]
for(o=0;o<i;++o)if(-1!==e[o]){var l=t[t.length-1]
if(e[l]<e[o])m[o]=l,t.push(o)
else{for(n=0,r=t.length-1;n<r;){var a=(n>>>1)+(r>>>1)+(n&r&1)
e[t[a]]<e[o]?n=a+1:r=a}e[o]<e[t[n]]&&(n>0&&(m[o]=t[n-1]),t[n]=o)}}
n=t.length,r=t[n-1]
for(;n-- >0;)t[n]=r,r=m[r]
return m.length=0,t
}(N),z=E.length-1,P=S;P>=u;P--)p=n[P],-1===N[P-u]?f(e,p,r,i,o):E[z]===P-u?z--:y(e,p,o),
null!=p.dom&&(o=n[P].dom)
else for(P=S;P>=u;P--)p=n[P],-1===N[P-u]&&f(e,p,r,i,o),null!=p.dom&&(o=n[P].dom)
}}else{var $=t.length<n.length?t.length:n.length
for(u=u<c?u:c;u<$;u++)(d=t[u])===(p=n[u])||null==d&&null==p||(null==d?f(e,p,r,i,g(t,u+1,o)):null==p?O(e,d):h(e,d,p,r,g(t,u+1,o),i))
t.length>$&&k(e,t,u,t.length),n.length>$&&s(e,n,u,n.length,r,o,i)}}}
function h(t,n,r,o,l,u){var s=n.tag
if(s===r.tag){if(r.state=n.state,r.events=n.events,function(e,t){do{var n
if(null!=e.attrs&&"function"==typeof e.attrs.onbeforeupdate)if(void 0!==(n=a.call(e.attrs.onbeforeupdate,e,t))&&!n)break
if("string"!=typeof e.tag&&"function"==typeof e.state.onbeforeupdate)if(void 0!==(n=a.call(e.state.onbeforeupdate,e,t))&&!n)break
return!1}while(0)
return e.dom=t.dom,e.domSize=t.domSize,e.instance=t.instance,e.attrs=t.attrs,e.children=t.children,
e.text=t.text,!0}(r,n))return
if("string"==typeof s)switch(null!=r.attrs&&M(r.attrs,r,o),s){case"#":
!function(e,t){
e.children.toString()!==t.children.toString()&&(e.dom.nodeValue=t.children)
t.dom=e.dom}(n,r)
break
case"<":!function(e,t,n,r,o){
t.children!==n.children?(C(e,t),d(e,n,r,o)):(n.dom=t.dom,
n.domSize=t.domSize,n.instance=t.instance)}(t,n,r,u,l)
break
case"[":!function(e,t,n,r,o,i){p(e,t.children,n.children,r,o,i)
var l=0,a=n.children
if(n.dom=null,null!=a){for(var u=0;u<a.length;u++){var s=a[u]
null!=s&&null!=s.dom&&(null==n.dom&&(n.dom=s.dom),l+=s.domSize||1)}
1!==l&&(n.domSize=l)}}(t,n,r,o,l,u)
break
default:!function(e,t,n,r){var o=t.dom=e.dom
r=i(t)||r,"textarea"===t.tag&&null==t.attrs&&(t.attrs={});(function(e,t,n,r){
t&&t===n&&console.warn("Don't reuse attrs object, use new object for every redraw, this will throw in next major")
if(null!=n){"input"===e.tag&&null!=n.type&&e.dom.setAttribute("type",n.type)
var o="input"===e.tag&&"file"===n.type
for(var i in n)E(e,i,t&&t[i],n[i],r,o)}var l
if(null!=t)for(var i in t)null==(l=t[i])||null!=n&&null!=n[i]||j(e,i,l,r)
})(t,e.attrs,t.attrs,r),x(t)||p(o,e.children,t.children,n,null,r)}(n,r,o,u)
}else!function(t,n,r,o,i,l){
if(r.instance=e.normalize(a.call(r.state.view,r)),r.instance===r)throw Error("A view cannot return the vnode it received as argument")
M(r.state,r,o),null!=r.attrs&&M(r.attrs,r,o)
null!=r.instance?(null==n.instance?f(t,r.instance,o,l,i):h(t,n.instance,r.instance,o,i,l),
r.dom=r.instance.dom,
r.domSize=r.instance.domSize):null!=n.instance?(O(t,n.instance),
r.dom=void 0,r.domSize=0):(r.dom=n.dom,r.domSize=n.domSize)}(t,n,r,o,l,u)
}else O(t,n),f(t,r,o,u,l)}function v(e,t,n){
for(var r=Object.create(null);t<n;t++){var o=e[t]
if(null!=o){var i=o.key
null!=i&&(r[i]=t)}}return r}var m=[]
function g(e,t,n){
for(;t<e.length;t++)if(null!=e[t]&&null!=e[t].dom)return e[t].dom
return n}function y(e,t,n){var o=r.createDocumentFragment()
b(e,o,t),w(e,o,n)}function b(e,t,n){for(;null!=n.dom&&n.dom.parentNode===e;){
if("string"!=typeof n.tag){if(null!=(n=n.instance))continue
}else if("<"===n.tag)for(var r=0;r<n.instance.length;r++)t.appendChild(n.instance[r])
else if("["!==n.tag)t.appendChild(n.dom)
else if(1===n.children.length){if(null!=(n=n.children[0]))continue
}else for(r=0;r<n.children.length;r++){var o=n.children[r]
null!=o&&b(e,t,o)}break}}function w(e,t,n){
null!=n?e.insertBefore(t,n):e.appendChild(t)}function x(e){
if(null==e.attrs||null==e.attrs.contenteditable&&null==e.attrs.contentEditable)return!1
var t=e.children
if(null!=t&&1===t.length&&"<"===t[0].tag){var n=t[0].children
e.dom.innerHTML!==n&&(e.dom.innerHTML=n)
}else if(null!=t&&0!==t.length)throw new Error("Child node of a contenteditable must be trusted.")
return!0}function k(e,t,n,r){for(var o=n;o<r;o++){var i=t[o]
null!=i&&O(e,i)}}function O(e,t){var n,r,o,i=0,u=t.state
"string"!=typeof t.tag&&"function"==typeof t.state.onbeforeremove&&(null!=(o=a.call(t.state.onbeforeremove,t))&&"function"==typeof o.then&&(i=1,
n=o))
t.attrs&&"function"==typeof t.attrs.onbeforeremove&&(null!=(o=a.call(t.attrs.onbeforeremove,t))&&"function"==typeof o.then&&(i|=2,
r=o))
if(l(t,u),i){if(null!=n){var s=function(){1&i&&((i&=2)||f())}
n.then(s,s)}if(null!=r){s=function(){2&i&&((i&=1)||f())}
r.then(s,s)}}else A(t),S(e,t)
function f(){l(t,u),A(t),S(e,t)}}function C(e,t){
for(var n=0;n<t.instance.length;n++)e.removeChild(t.instance[n])}
function S(e,t){for(;null!=t.dom&&t.dom.parentNode===e;){
if("string"!=typeof t.tag){if(null!=(t=t.instance))continue
}else if("<"===t.tag)C(e,t)
else{if("["!==t.tag&&(e.removeChild(t.dom),!Array.isArray(t.children)))break
if(1===t.children.length){if(null!=(t=t.children[0]))continue
}else for(var n=0;n<t.children.length;n++){var r=t.children[n]
null!=r&&S(e,r)}}break}}function A(e){
if("string"!=typeof e.tag&&"function"==typeof e.state.onremove&&a.call(e.state.onremove,e),
e.attrs&&"function"==typeof e.attrs.onremove&&a.call(e.attrs.onremove,e),
"string"!=typeof e.tag)null!=e.instance&&A(e.instance)
else{var t=e.children
if(Array.isArray(t))for(var n=0;n<t.length;n++){var r=t[n]
null!=r&&A(r)}}}function E(e,t,n,o,i,l){
if(!("key"===t||"is"===t||null==o||T(t)||n===o&&!function(e,t){
return"value"===t||"checked"===t||"selectedIndex"===t||"selected"===t&&e.dom===u()||"option"===e.tag&&e.dom.parentNode===r.activeElement
}(e,t)&&"object"!=typeof o||"type"===t&&"input"===e.tag)){
if("o"===t[0]&&"n"===t[1])return R(e,t,o)
if("xlink:"===t.slice(0,6))e.dom.setAttributeNS("http://www.w3.org/1999/xlink",t.slice(6),o)
else if("style"===t)I(e.dom,n,o)
else if(N(e,t,i)){if("value"===t){
if(("input"===e.tag||"textarea"===e.tag)&&e.dom.value===""+o&&(l||e.dom===u()))return
if("select"===e.tag&&null!==n&&e.dom.value===""+o)return
if("option"===e.tag&&null!==n&&e.dom.value===""+o)return
if(l&&""+o!="")return void console.error("`value` is read-only on file inputs!")
}e.dom[t]=o
}else"boolean"==typeof o?o?e.dom.setAttribute(t,""):e.dom.removeAttribute(t):e.dom.setAttribute("className"===t?"class":t,o)
}}function j(e,t,n,r){
if("key"!==t&&"is"!==t&&null!=n&&!T(t))if("o"===t[0]&&"n"===t[1])R(e,t,void 0)
else if("style"===t)I(e.dom,n,null)
else if(!N(e,t,r)||"className"===t||"title"===t||"value"===t&&("option"===e.tag||"select"===e.tag&&-1===e.dom.selectedIndex&&e.dom===u())||"input"===e.tag&&"type"===t){
var o=t.indexOf(":")
;-1!==o&&(t=t.slice(o+1)),!1!==n&&e.dom.removeAttribute("className"===t?"class":t)
}else e.dom[t]=null}function T(e){
return"oninit"===e||"oncreate"===e||"onupdate"===e||"onremove"===e||"onbeforeremove"===e||"onbeforeupdate"===e
}function N(e,t,n){
return void 0===n&&(e.tag.indexOf("-")>-1||null!=e.attrs&&e.attrs.is||"href"!==t&&"list"!==t&&"form"!==t&&"width"!==t&&"height"!==t)&&t in e.dom
}var z,P=/[A-Z]/g
function _(e){return"-"+e.toLowerCase()}function L(e){
return"-"===e[0]&&"-"===e[1]?e:"cssFloat"===e?"float":e.replace(P,_)}
function I(e,t,n){if(t===n);else if(null==n)e.style.cssText=""
else if("object"!=typeof n)e.style.cssText=n
else if(null==t||"object"!=typeof t)for(var r in e.style.cssText="",n){
null!=(o=n[r])&&e.style.setProperty(L(r),String(o))}else{for(var r in n){var o
null!=(o=n[r])&&(o=String(o))!==String(t[r])&&e.style.setProperty(L(r),o)}
for(var r in t)null!=t[r]&&null==n[r]&&e.style.removeProperty(L(r))}}
function $(){this._=n}function R(e,t,r){if(null!=e.events){
if(e.events._=n,e.events[t]===r)return
null==r||"function"!=typeof r&&"object"!=typeof r?(null!=e.events[t]&&e.dom.removeEventListener(t.slice(2),e.events,!1),
e.events[t]=void 0):(null==e.events[t]&&e.dom.addEventListener(t.slice(2),e.events,!1),
e.events[t]=r)
}else null==r||"function"!=typeof r&&"object"!=typeof r||(e.events=new $,
e.dom.addEventListener(t.slice(2),e.events,!1),e.events[t]=r)}function q(e,t,n){
"function"==typeof e.oninit&&a.call(e.oninit,t),
"function"==typeof e.oncreate&&n.push(a.bind(e.oncreate,t))}function M(e,t,n){
"function"==typeof e.onupdate&&n.push(a.bind(e.onupdate,t))}
return $.prototype=Object.create(null),$.prototype.handleEvent=function(e){
var t,n=this["on"+e.type]
"function"==typeof n?t=n.call(e.currentTarget,e):"function"==typeof n.handleEvent&&n.handleEvent(e),
this._&&!1!==e.redraw&&(0,
this._)(),!1===t&&(e.preventDefault(),e.stopPropagation())},function(t,r,o){
if(!t)throw new TypeError("DOM element being rendered to does not exist.")
if(null!=z&&t.contains(z))throw new TypeError("Node is currently being rendered to and thus is locked.")
var i=n,l=z,a=[],s=u(),f=t.namespaceURI
z=t,n="function"==typeof o?o:void 0
try{
null==t.vnodes&&(t.textContent=""),r=e.normalizeChildren(Array.isArray(r)?r:[r]),
p(t,t.vnodes,r,a,null,"http://www.w3.org/1999/xhtml"===f?void 0:f),
t.vnodes=r,null!=s&&u()!==s&&"function"==typeof s.focus&&s.focus()
for(var c=0;c<a.length;c++)a[c]()}finally{n=i,z=l}}},T}function I(){
return P?z:(P=1,z=L()("undefined"!=typeof window?window:null))}
"undefined"!=typeof window?(void 0===window.Promise?window.Promise=_:window.Promise.prototype.finally||(window.Promise.prototype.finally=_.prototype.finally),
E.exports=window.Promise):void 0!==e?(void 0===e.Promise?e.Promise=_:e.Promise.prototype.finally||(e.Promise.prototype.finally=_.prototype.finally),
E.exports=e.Promise):E.exports=_
var $,R,q,M,D,U,F=i(),H=function(e,t,n){var r=[],o=!1,i=-1
function l(){for(i=0;i<r.length;i+=2)try{e(r[i],F(r[i+1]),a)}catch(e){n.error(e)
}i=-1}function a(){o||(o=!0,t((function(){o=!1,l()})))}return a.sync=l,{
mount:function(t,n){
if(null!=n&&null==n.view&&"function"!=typeof n)throw new TypeError("m.mount expects a component, not a vnode.")
var o=r.indexOf(t)
o>=0&&(r.splice(o,2),o<=i&&(i-=2),e(t,[])),null!=n&&(r.push(t,n),e(t,F(n),a))},
redraw:a}
}(I(),"undefined"!=typeof requestAnimationFrame?requestAnimationFrame:null,"undefined"!=typeof console?console:null)
function K(){return R?$:(R=1,$=function(e){
if("[object Object]"!==Object.prototype.toString.call(e))return""
var t=[]
for(var n in e)r(n,e[n])
return t.join("&")
function r(e,n){
if(Array.isArray(n))for(var o=0;o<n.length;o++)r(e+"["+o+"]",n[o])
else if("[object Object]"===Object.prototype.toString.call(n))for(var o in n)r(e+"["+o+"]",n[o])
else t.push(encodeURIComponent(e)+(null!=n&&""!==n?"="+encodeURIComponent(n):""))
}})}function B(){if(M)return q
M=1
var e=f()
return q=Object.assign||function(t,n){for(var r in n)e.call(n,r)&&(t[r]=n[r])}}
function G(){if(U)return D
U=1
var e=K(),t=B()
return D=function(n,r){
if(/:([^\/\.-]+)(\.{3})?:/.test(n))throw new SyntaxError("Template parameter names must be separated by either a '/', '-', or '.'.")
if(null==r)return n
var o=n.indexOf("?"),i=n.indexOf("#"),l=i<0?n.length:i,a=o<0?l:o,u=n.slice(0,a),s={}
t(s,r)
var f=u.replace(/:([^\/\.-]+)(\.{3})?/g,(function(e,t,n){
return delete s[t],null==r[t]?e:n?r[t]:encodeURIComponent(String(r[t]))
})),c=f.indexOf("?"),d=f.indexOf("#"),p=d<0?f.length:d,h=c<0?p:c,v=f.slice(0,h)
o>=0&&(v+=n.slice(o,l)),c>=0&&(v+=(o<0?"?":"&")+f.slice(c,p))
var m=e(s)
return m&&(v+=(o<0&&c<0?"?":"&")+m),i>=0&&(v+=n.slice(i)),d>=0&&(v+=(i<0?"":"&")+f.slice(d)),
v},D}
var J,Q,X,Z,V,Y,W,ee,te,ne,re,oe,ie=G(),le=f(),ae=E.exports,ue=function(e,t,n){
var r=0
function o(e){return new t(e)}function i(e){return function(r,i){
"string"!=typeof r?(i=r,r=r.url):null==i&&(i={})
var l=new t((function(t,n){e(ie(r,i.params),i,(function(e){
if("function"==typeof i.type)if(Array.isArray(e))for(var n=0;n<e.length;n++)e[n]=new i.type(e[n])
else e=new i.type(e)
t(e)}),n)}))
if(!0===i.background)return l
var a=0
function u(){0==--a&&"function"==typeof n&&n()}return function e(t){var n=t.then
return t.constructor=o,t.then=function(){a++
var r=n.apply(t,arguments)
return r.then(u,(function(e){if(u(),0===a)throw e})),e(r)},t}(l)}}
function l(e,t){
for(var n in e.headers)if(le.call(e.headers,n)&&n.toLowerCase()===t)return!0
return!1}return o.prototype=t.prototype,o.__proto__=t,{
request:i((function(t,n,r,o){
var i,a=null!=n.method?n.method.toUpperCase():"GET",u=n.body,s=(null==n.serialize||n.serialize===JSON.serialize)&&!(u instanceof e.FormData||u instanceof e.URLSearchParams),f=n.responseType||("function"==typeof n.extract?"":"json"),c=new e.XMLHttpRequest,d=!1,p=!1,h=c,v=c.abort
for(var m in c.abort=function(){d=!0,v.call(this)
},c.open(a,t,!1!==n.async,"string"==typeof n.user?n.user:void 0,"string"==typeof n.password?n.password:void 0),
s&&null!=u&&!l(n,"content-type")&&c.setRequestHeader("Content-Type","application/json; charset=utf-8"),
"function"==typeof n.deserialize||l(n,"accept")||c.setRequestHeader("Accept","application/json, text/*"),
n.withCredentials&&(c.withCredentials=n.withCredentials),
n.timeout&&(c.timeout=n.timeout),
c.responseType=f,n.headers)le.call(n.headers,m)&&c.setRequestHeader(m,n.headers[m])
c.onreadystatechange=function(e){if(!d&&4===e.target.readyState)try{
var i,l=e.target.status>=200&&e.target.status<300||304===e.target.status||/^file:\/\//i.test(t),a=e.target.response
if("json"===f){if(!e.target.responseType&&"function"!=typeof n.extract)try{
a=JSON.parse(e.target.responseText)}catch(e){a=null}
}else f&&"text"!==f||null==a&&(a=e.target.responseText)
if("function"==typeof n.extract?(a=n.extract(e.target,n),l=!0):"function"==typeof n.deserialize&&(a=n.deserialize(a)),
l)r(a)
else{var u=function(){try{i=e.target.responseText}catch(e){i=a}
var t=new Error(i)
t.code=e.target.status,t.response=a,o(t)}
0===c.status?setTimeout((function(){p||u()})):u()}}catch(e){o(e)}
},c.ontimeout=function(e){p=!0
var t=new Error("Request timed out")
t.code=e.target.status,o(t)
},"function"==typeof n.config&&(c=n.config(c,n,t)||c)!==h&&(i=c.abort,
c.abort=function(){d=!0,i.call(this)
}),null==u?c.send():"function"==typeof n.serialize?c.send(n.serialize(u)):u instanceof e.FormData||u instanceof e.URLSearchParams?c.send(u):c.send(JSON.stringify(u))
})),jsonp:i((function(t,n,o,i){
var l=n.callbackName||"_mithril_"+Math.round(1e16*Math.random())+"_"+r++,a=e.document.createElement("script")
e[l]=function(t){delete e[l],a.parentNode.removeChild(a),o(t)
},a.onerror=function(){
delete e[l],a.parentNode.removeChild(a),i(new Error("JSONP request failed"))
},a.src=t+(t.indexOf("?")<0?"?":"&")+encodeURIComponent(n.callbackKey||"callback")+"="+encodeURIComponent(l),
e.document.documentElement.appendChild(a)}))}
}("undefined"!=typeof window?window:null,ae,H.redraw)
function se(){if(Q)return J
function e(e){try{return decodeURIComponent(e)}catch(t){return e}}
return Q=1,J=function(t){if(""===t||null==t)return{}
"?"===t.charAt(0)&&(t=t.slice(1))
for(var n=t.split("&"),r={},o={},i=0;i<n.length;i++){
var l=n[i].split("="),a=e(l[0]),u=2===l.length?e(l[1]):""
"true"===u?u=!0:"false"===u&&(u=!1)
var s=a.split(/\]\[?|\[/),f=o
a.indexOf("[")>-1&&s.pop()
for(var c=0;c<s.length;c++){var d=s[c],p=s[c+1],h=""==p||!isNaN(parseInt(p,10))
if(""===d)null==r[a=s.slice(0,c).join()]&&(r[a]=Array.isArray(f)?f.length:0),d=r[a]++
else if("__proto__"===d)break
if(c===s.length-1)f[d]=u
else{var v=Object.getOwnPropertyDescriptor(f,d)
null!=v&&(v=v.value),null==v&&(f[d]=v=h?[]:{}),f=v}}}return o}}function fe(){
if(Z)return X
Z=1
var e=se()
return X=function(t){
var n=t.indexOf("?"),r=t.indexOf("#"),o=r<0?t.length:r,i=n<0?o:n,l=t.slice(0,i).replace(/\/{2,}/g,"/")
return l?("/"!==l[0]&&(l="/"+l),l.length>1&&"/"===l[l.length-1]&&(l=l.slice(0,-1))):l="/",
{path:l,params:n<0?{}:e(t.slice(n+1,o))}}}function ce(){if(Y)return V
Y=1
var e=fe()
return V=function(t){
var n=e(t),r=Object.keys(n.params),o=[],i=new RegExp("^"+n.path.replace(/:([^\/.-]+)(\.{3}|\.(?!\.)|-)?|[\\^$*+.()|\[\]{}]/g,(function(e,t,n){
return null==t?"\\"+e:(o.push({k:t,r:"..."===n
}),"..."===n?"(.*)":"."===n?"([^/]+)\\.":"([^/]+)"+(n||""))}))+"$")
return function(e){
for(var t=0;t<r.length;t++)if(n.params[r[t]]!==e.params[r[t]])return!1
if(!o.length)return i.test(e.path)
var l=i.exec(e.path)
if(null==l)return!1
for(t=0;t<o.length;t++)e.params[o[t].k]=o[t].r?l[t+1]:decodeURIComponent(l[t+1])
return!0}},V}function de(){if(ee)return W
ee=1
var e=f(),t=new RegExp("^(?:key|oninit|oncreate|onbeforeupdate|onupdate|onbeforeremove|onremove)$")
return W=function(n,r){var o={}
if(null!=r)for(var i in n)e.call(n,i)&&!t.test(i)&&r.indexOf(i)<0&&(o[i]=n[i])
else for(var i in n)e.call(n,i)&&!t.test(i)&&(o[i]=n[i])
return o}}var pe=A,he=ue,ve=H,me=function(){return pe.apply(this,arguments)}
me.m=pe,me.trust=pe.trust,me.fragment=pe.fragment,me.Fragment="[",me.mount=ve.mount,
me.route=function(){if(oe)return re
oe=1
var e=H
return re=function(){if(ne)return te
ne=1
var e=i(),t=b,n=E.exports,r=G(),o=fe(),l=ce(),a=B(),u=de(),s={}
function f(e){try{return decodeURIComponent(e)}catch(t){return e}}
return te=function(i,c){
var d,p,h,v,m,g,y=null==i?null:"function"==typeof i.setImmediate?i.setImmediate:i.setTimeout,b=n.resolve(),w=!1,x=!1,k=0,O=s,C={
onbeforeupdate:function(){return!(!(k=k?2:1)||s===O)},onremove:function(){
i.removeEventListener("popstate",E,!1),i.removeEventListener("hashchange",A,!1)
},view:function(){if(k&&s!==O){var t=[e(h,v.key,v)]
return O&&(t=O.render(t[0])),t}}},S=T.SKIP={}
function A(){w=!1
var e=i.location.hash
"#"!==T.prefix[0]&&(e=i.location.search+e,"?"!==T.prefix[0]&&"/"!==(e=i.location.pathname+e)[0]&&(e="/"+e))
var t=e.concat().replace(/(?:%[a-f89][a-f0-9])+/gim,f).slice(T.prefix.length),n=o(t)
function r(e){console.error(e),j(p,null,{replace:!0})}
a(n.params,i.history.state),function e(o){for(;o<d.length;o++)if(d[o].check(n)){
var i=d[o].component,l=d[o].route,a=i,u=g=function(r){if(u===g){
if(r===S)return e(o+1)
h=null==r||"function"!=typeof r.view&&"function"!=typeof r?"div":r,v=n.params,m=t,
g=null,O=i.render?i:null,2===k?c.redraw():(k=2,c.redraw.sync())}}
return void(i.view||"function"==typeof i?(i={},u(a)):i.onmatch?b.then((function(){
return i.onmatch(n.params,t,l)})).then(u,t===p?null:r):u("div"))}
if(t===p)throw new Error("Could not resolve default route "+p+".")
j(p,null,{replace:!0})}(0)}function E(){w||(w=!0,y(A))}function j(e,t,n){
if(e=r(e,t),x){E()
var o=n?n.state:null,l=n?n.title:null
n&&n.replace?i.history.replaceState(o,l,T.prefix+e):i.history.pushState(o,l,T.prefix+e)
}else i.location.href=T.prefix+e}function T(e,t,n){
if(!e)throw new TypeError("DOM element being rendered to does not exist.")
if(d=Object.keys(n).map((function(e){
if("/"!==e[0])throw new SyntaxError("Routes must start with a '/'.")
if(/:([^\/\.-]+)(\.{3})?:/.test(e))throw new SyntaxError("Route parameter names must be separated with either '/', '.', or '-'.")
return{route:e,component:n[e],check:l(e)}})),p=t,null!=t){var r=o(t)
if(!d.some((function(e){return e.check(r)
})))throw new ReferenceError("Default route doesn't match any known routes.")}
"function"==typeof i.history.pushState?i.addEventListener("popstate",E,!1):"#"===T.prefix[0]&&i.addEventListener("hashchange",A,!1),
x=!0,c.mount(e,C),A()}return T.set=function(e,t,n){
null!=g&&((n=n||{}).replace=!0),g=null,j(e,t,n)},T.get=function(){return m
},T.prefix="#!",T.Link={view:function(e){
var n,o,i,l=t(e.attrs.selector||"a",u(e.attrs,["options","params","selector","onclick"]),e.children)
return(l.attrs.disabled=Boolean(l.attrs.disabled))?(l.attrs.href=null,l.attrs["aria-disabled"]="true"):(n=e.attrs.options,
o=e.attrs.onclick,
i=r(l.attrs.href,e.attrs.params),l.attrs.href=T.prefix+i,l.attrs.onclick=function(e){
var t
"function"==typeof o?t=o.call(e.currentTarget,e):null==o||"object"!=typeof o||"function"==typeof o.handleEvent&&o.handleEvent(e),
!1===t||e.defaultPrevented||0!==e.button&&0!==e.which&&1!==e.which||e.currentTarget.target&&"_self"!==e.currentTarget.target||e.ctrlKey||e.metaKey||e.shiftKey||e.altKey||(e.preventDefault(),
e.redraw=!1,T.set(i,null,n))}),l}},T.param=function(e){return v&&null!=e?v[e]:v
},T},te}()("undefined"!=typeof window?window:null,e),re
}(),me.render=I(),me.redraw=ve.redraw,
me.request=he.request,me.jsonp=he.jsonp,me.parseQueryString=se(),
me.buildQueryString=K(),me.parsePathname=fe(),me.buildPathname=G(),me.vnode=i(),
me.PromisePolyfill=j(),me.censor=de(),o.exports=me
var ge={},ye=[],be=[]
var we,xe,ke="body,html{height:100%;margin:0}h1{margin-block-start:0;text-align:center}form{padding:1ex}.hidden{display:none}h2{border-top:1px dashed #000}"
!function(e,t){if(e&&"undefined"!=typeof document){
var n,r=!0===t.prepend?"prepend":"append",o=!0===t.singleTag,i="string"==typeof t.container?document.querySelector(t.container):document.getElementsByTagName("head")[0]
if(o){var l=ye.indexOf(i)
;-1===l&&(l=ye.push(i)-1,be[l]={}),n=be[l]&&be[l][r]?be[l][r]:be[l][r]=a()
}else n=a()
65279===e.charCodeAt(0)&&(e=e.substring(1)),n.styleSheet?n.styleSheet.cssText+=e:n.appendChild(document.createTextNode(e))
}function a(){var e=document.createElement("style")
if(e.setAttribute("type","text/css"),t.attributes)for(var n=Object.keys(t.attributes),o=0;o<n.length;o++)e.setAttribute(n[o],t.attributes[n[o]])
var l="prepend"===r?"afterbegin":"beforeend"
return i.insertAdjacentElement(l,e),e}}(ke,{}),we=o.exports,xe=t(Object.freeze({
__proto__:null,css:ke,default:ke})),ge.view=function(){
return we.fragment(we("style",xe.css))}
var Oe,Ce,Se,Ae={},Ee={},je=function(){if(!this)return null
var e,t,n,r,o,i,l=ze,a=ze,u=ze,s=ze,f=ze,c=!1,d=!1,p=!1,h=!1,v=!1,m=!1,g=null,y=!1,b={
xmlns:undefined},w=""
this.on=function(o,i){if("function"==typeof i||null===i)switch(o){
case"startNode":a=i||ze
break
case"textNode":l=i||ze
break
case"endNode":u=i||ze
break
case"error":f=i||ze
break
case"cdata":s=i||ze
break
case"unknownNS":r=i,h=!!i
break
case"attention":n=i,p=!!i
break
case"question":t=i,d=!!i
break
case"comment":e=i,c=!!i}},this.ns=function(e,t){
if(!e||"string"!=typeof e||!t)return this
var n,r,l,a={}
for(l in t)"string"==typeof(r=t[l])&&(e===r&&(n=!0),a[l]=r)
return n&&(o=e,m=!0,i=a),this},this.parse=function(e){
if("string"==typeof e)return g=null,w=e,m?(b={xmlns:o
},j(),b=!1):j(),y=!1,x=!0,w="",g},this.stop=function(){y=!0}
var x,k=0,O=0,C="",S=0
function A(){if(null!==x)return x
for(var e,t,n,o,l,a,u,s,f,c,d=m&&v?[]:null,p=S,g=C,y=g.length,w={};p<y;p++)if(!(32===(f=g.charCodeAt(p))||f<14&&f>8)){
if((f<65||f>122||f>90&&f<97)&&95!==f&&58!==f)return x=!1
for(c=p+1;c<y;c++)if(!((f=g.charCodeAt(c))>96&&f<123||f>64&&f<91||f>47&&f<59||45===f||95===f)){
if(61!==f)return x=!1
break}if(s=!0,"xmlns:xmlns"===(u=g.substring(p,c)))return x=!1
if(34===(f=g.charCodeAt(c+1)))c=g.indexOf('"',p=c+2)
else{if(39!==f)return x=!1
c=g.indexOf("'",p=c+2)}if(-1===c)return x=!1
if(c+1<y&&((f=g.charCodeAt(c+1))>32||f<9||f<32&&f>13))return x=!1
if(l=g.substring(p,c),p=c+1,m)if(v){
if(null!==(o="xmlns"!==u?120===u.charCodeAt(0)&&"xmlns:"===u.substr(0,6)?u.substr(6):null:"xmlns")){
a=i[_e(l)],
h&&!a&&(a=r(l)),a?b[o]!==a&&(n||(b=Le(b),n=!0),b[o]=a):b[o]&&(n||(b=Le(b),n=!0),
b[o]=!1),w[u]=l
continue}d.push(u,l)
}else-1!==(f=u.indexOf(":"))?(t=b[u.substring(0,f)])&&(w[(t=b.xmlns===t?u.substr(f+1):t+u.substr(f))+u.substr(f)]=l):w[u]=l
else w[u]=l}if(!s)return x=!0
if(v)for(e=b.xmlns,p=0,y=d.length;p<y;p++)-1===(f=(u=d[p++]).indexOf(":"))?w[u]=d[p]:(t=b[u.substring(0,f)])&&(w[t=e===t?u.substr(f+1):t+u.substr(f)]=d[p])
return x=w}function E(){return w.substring(k,O+1)}function j(){
for(var r,o,i,h,j,T,N,z,P=[],_=[],L=!1,I=!1,$=0,R=0,q=0;-1!==$;){
if(z=q>0,-1===(R=60===w.charCodeAt($)?$:w.indexOf("<",$)))return _.length?void f(g="end file"):void 0
if($!==R&&!z&&(l(w.substring($,R),_e),y))return
if(33!==(h=w.charCodeAt(R+1)))if(63!==h){
if(-1==($=w.indexOf(">",R+1)))return void f(g="...>")
if(x=!0,47===h){
if(L=!1,I=!0,!_.length)return void f(g="close tag, requires open tag")
if(i=R+2+(r=N=_.pop()).length,w.substring(R+2,i)!==r)return void f(g="close tag, not equal to the open tag")
for(;i<$;i++)if(!(32===(h=w.charCodeAt(i))||h>8&&h<14))return void f(g="close tag")
}else{
if(47===w.charCodeAt($-1)?(r=N=w.substring(R+1,$-1),L=!0,I=!0):(r=N=w.substring(R+1,$),
L=!0,
I=!1),!(h>96&&h<123||h>64&&h<91||95===h||58===h))return void f(g="first char nodeName")
for(i=1,o=r.length;i<o;i++)if(!((h=r.charCodeAt(i))>96&&h<123||h>64&&h<91||h>47&&h<59||45===h||95===h)){
if(32===h||h<14&&h>8){N=r.substring(0,i),x=null
break}return void f(g="invalid nodeName")}I||_.push(N)}if(m){if(z){
I?L||0==--q&&(b=P.pop()):q+=1,$+=1
continue}if(j=b,I||P.push(b),L&&!0!==x&&(v=-1!==r.indexOf("xmlns",i))&&(S=i,C=r,
A(),
v=!1),-1!==(h=N.indexOf(":"))?(T=b[N.substring(0,h)],N=N.substr(h+1)):T=b.xmlns,
!T){I?b=L?j:P.pop():(q=1,x=!0),$+=1
continue}N=T+":"+N}if(k=R,O=$,L){if(S=i,C=r,a(N,A,_e,I,E),y)return
x=!0}if(I){if(u(N,_e,L,E),y)return
m&&(b=L?j:P.pop())}$+=1}else{
if(-1===($=w.indexOf("?>",R)))return void f(g="...?>")
if(d&&(t(w.substring(R,$+2)),y))return
$+=2}else{if(91===(h=w.charCodeAt(R+2))&&"CDATA["===w.substr(R+3,6)){
if(-1===($=w.indexOf("]]>",R)))return void f(g="cdata")
if(!z&&(s(w.substring(R+9,$),!1),y))return
$+=3
continue}if(45===h&&45===w.charCodeAt(R+3)){
if(-1===($=w.indexOf("--\x3e",R)))return void f(g="expected --\x3e")
if(c&&!z&&(e(w.substring(R+4,$),_e),y))return
$+=3
continue}if(-1===($=w.indexOf(">",R+1)))return void f(g='expected ">"')
if(p&&!z&&(n(w.substring(R,$+1),_e),y))return
$+=1}}}},Te=String.fromCharCode,Ne={constructor:!1,propertyIsEnumerable:!1,
toLocaleString:!1,hasOwnProperty:!1,isPrototypeOf:!1,toString:!1,valueOf:!1,
quot:'"',QUOT:'"',amp:"&",AMP:"&",nbsp:" ",apos:"'",lt:"<",LT:"<",gt:">",GT:">",
copy:"©",laquo:"«",raquo:"»",reg:"®",deg:"°",plusmn:"±",sup2:"²",sup3:"³",
micro:"µ",para:"¶"}
function ze(){}function Pe(e,t,n,r){return r?Ne[r]||"":Te(t||parseInt(n,16))}
function _e(e){
return(e=""+e).length>3&&-1!==e.indexOf("&")&&(-1!==e.indexOf("&quot;")&&(e=e.replace(/&quot;/g,'"')),
-1!==e.indexOf("&gt;")&&(e=e.replace(/&gt;/g,">")),
-1!==e.indexOf("&lt;")&&(e=e.replace(/&lt;/g,"<")),
-1!==e.indexOf("&")&&(e=e.replace(/&#(\d+);|&#x([0123456789abcdef]+);|&(\w+);/gi,Pe))),
e}function Le(e){var t={}
for(var n in e)t[n]=e[n]
return t}Oe=je,Ce=function(e){var t,n,r,o,i,l,a,u
for(t=[],n=0,o=(r=e.split(/\s*((?!E)[A-Z])\s*/i)).length;n<o;++n)i=n,l=r[n],i%2?"G"===(a=l.toUpperCase())&&t.push(u={}):u&&(u[a]=parseFloat(l))
return t}
var Ie,$e,Re,qe=function(e){var t,n,r,o
function i(){var e,n,o,i
if(r=0,!(t.length>Se.length)){
for(e=0,o=(n=t).length;e<o;++e)if(i=e,n[e]!==Se[i])return
r=t.length}}return t=[],n=[],(o=new Oe).on("error",(function(e){
console.log("ERR",e)})),o.on("startNode",(function(e,o){
t.push(e),i(),2===r&&n.push({$:o()})})),o.on("endNode",(function(e){
t.length&&t[t.length-1]===e&&(t.pop(),i())})),o.on("textNode",(function(e,t){
var o
3===r&&null==(o=n[n.length-1])._&&(o._=Ce(t(e).trim()))})),o.parse(e),n}
function Me(){return!1}
Se=["recognition_result","kte","contour"],Ie=qe,$e=o.exports,Re=function(e){
var t,n,r
for(t=Promise.resolve(),n=0,r=e.length;n<r;++n)o.call(this,e[n])
function o(e){t=t.then((function(){e.text().then((function(e){
return console.log(Ie(e))}))}))}},Ee.oncreate=function(){var e
;(e=document.body).ondragenter=Me,
e.ondragleave=Me,e.ondragover=Me,e.ondrop=function(e){
return Re(e.dataTransfer.files),!1}},Ee.onremove=function(){var e
;(e=document.body).ondragenter=null,
e.ondragleave=null,e.ondragover=null,e.ondrop=null},Ee.view=function(){var e
return e=this,$e.fragment($e("input.hidden",{type:"file",accept:".xml",
oncreate:function(t){(e.uploadButton=t.dom).onchange=function(){Re(this.files)}}
}),$e("button",{type:"button",onclick:function(){e.uploadButton.click()}
},"Загрузить результат распознавания!")," ...или перетащите XML-файл в это окно...")
}
var De,Ue,Fe,He,Ke,Be,Ge,Je,Qe={}
De=o.exports,Ue=t(Object.freeze({__proto__:null,
homepage:"https://github.com/ukoloff/kte"})),Qe.view=function(){var e
return De.fragment(De("h2","Примечания"),De("ul",De("li",De("a",{
href:Ue.homepage,target:"_blank"
},"Исходный код"),"@GitHub"),De("li","Замечания и предложения по работе визуализатора КТЕ: ",De("a",{
href:e=Ue.homepage+"/issues",target:"_blank"},e)),De("li",De("a",{
href:Ue.homepage+"/tree/main/data",target:"_blank"},"Примеры")," XML-файлов")))
},Fe=o.exports,He=Ee,Ke=Qe,Ae.view=function(){
return Fe.fragment(Fe("h1",document.title="Визуализация КТЭ"),Fe("form",Fe(He)),Fe(Ke))
},Be=o.exports,Ge=ge,Je=Ae,setTimeout((function(){
Be.mount(document.head,Ge),Be.mount(document.body,Je)}))}()
//# sourceMappingURL=view.js.map
