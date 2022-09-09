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
var s,a,l=i(),u=function(){var t,e=arguments[this],n=this+1
if(null==e?e={}:("object"!=typeof e||null!=e.tag||Array.isArray(e))&&(e={},n=this),
arguments.length===n+1)t=arguments[n],Array.isArray(t)||(t=[t])
else for(t=[];n<arguments.length;)t.push(arguments[n++])
return l("",e.key,e,t)}
function c(){return a?s:(a=1,s={}.hasOwnProperty)}
var f=i(),h=u,p=c(),d=/(?:(^|#|\.)([^#\.\[\]]+))|(\[(.+?)(?:\s*=\s*("|'|)((?:\\["'\]]|.)*?)\5)?\])/g,v={}
function m(t){for(var e in t)if(p.call(t,e))return!1
return!0}function g(t){for(var e,n="div",o=[],r={};e=d.exec(t);){
var i=e[1],s=e[2]
if(""===i&&""!==s)n=s
else if("#"===i)r.id=s
else if("."===i)o.push(s)
else if("["===e[3][0]){var a=e[6]
a&&(a=a.replace(/\\(["'])/g,"$1").replace(/\\\\/g,"\\")),"class"===e[4]?o.push(a):r[e[4]]=""===a?a:a||!0
}}return o.length>0&&(r.className=o.join(" ")),v[t]={tag:n,attrs:r}}
function y(t,e){var n=e.attrs,o=p.call(n,"class"),r=o?n.class:n.className
if(e.tag=t.tag,e.attrs={},!m(t.attrs)&&!m(n)){var i={}
for(var s in n)p.call(n,s)&&(i[s]=n[s])
n=i}
for(var s in t.attrs)p.call(t.attrs,s)&&"className"!==s&&!p.call(n,s)&&(n[s]=t.attrs[s])
for(var s in null==r&&null==t.attrs.className||(n.className=null!=r?null!=t.attrs.className?String(t.attrs.className)+" "+String(r):r:null!=t.attrs.className?t.attrs.className:null),
o&&(n.class=null),n)if(p.call(n,s)&&"key"!==s){e.attrs=n
break}return e}var b=function(t){
if(null==t||"string"!=typeof t&&"function"!=typeof t&&"function"!=typeof t.view)throw Error("The selector must be either a string or a component.")
var e=h.apply(1,arguments)
return"string"==typeof t&&(e.children=f.normalizeChildren(e.children),"["!==t)?y(v[t]||g(t),e):(e.tag=t,
e)},w=i(),x=i(),S=u,E=b
E.trust=function(t){return null==t&&(t=""),w("<",void 0,void 0,t,void 0,void 0)
},E.fragment=function(){var t=S.apply(0,arguments)
return t.tag="[",t.children=x.normalizeChildren(t.children),t}
var C,k,M=E,z={exports:{}}
function A(){if(k)return C
k=1
var t=function(e){
if(!(this instanceof t))throw new Error("Promise must be called with 'new'.")
if("function"!=typeof e)throw new TypeError("executor must be a function.")
var n=this,o=[],r=[],i=u(o,!0),s=u(r,!1),a=n._instance={resolvers:o,rejectors:r
},l="function"==typeof setImmediate?setImmediate:setTimeout
function u(t,e){return function i(u){var f
try{
if(!e||null==u||"object"!=typeof u&&"function"!=typeof u||"function"!=typeof(f=u.then))l((function(){
e||0!==t.length||console.error("Possible unhandled promise rejection:",u)
for(var n=0;n<t.length;n++)t[n](u)
o.length=0,r.length=0,a.state=e,a.retry=function(){i(u)}}))
else{if(u===n)throw new TypeError("Promise can't be resolved with itself.")
c(f.bind(u))}}catch(t){s(t)}}}function c(t){var e=0
function n(t){return function(n){e++>0||t(n)}}var o=n(s)
try{t(n(i),o)}catch(t){o(t)}}c(e)}
return t.prototype.then=function(e,n){var o,r,i=this._instance
function s(t,e,n,s){e.push((function(e){if("function"!=typeof t)n(e)
else try{o(t(e))}catch(t){r&&r(t)}
})),"function"==typeof i.retry&&s===i.state&&i.retry()}
var a=new t((function(t,e){o=t,r=e}))
return s(e,i.resolvers,o,!0),s(n,i.rejectors,r,!1),a
},t.prototype.catch=function(t){return this.then(null,t)
},t.prototype.finally=function(e){return this.then((function(n){
return t.resolve(e()).then((function(){return n}))}),(function(n){
return t.resolve(e()).then((function(){return t.reject(n)}))}))
},t.resolve=function(e){return e instanceof t?e:new t((function(t){t(e)}))
},t.reject=function(e){return new t((function(t,n){n(e)}))},t.all=function(e){
return new t((function(t,n){var o=e.length,r=0,i=[]
if(0===e.length)t([])
else for(var s=0;s<e.length;s++)!function(s){function a(e){
r++,i[s]=e,r===o&&t(i)}
null==e[s]||"object"!=typeof e[s]&&"function"!=typeof e[s]||"function"!=typeof e[s].then?a(e[s]):e[s].then(a,n)
}(s)}))},t.race=function(e){return new t((function(t,n){
for(var o=0;o<e.length;o++)e[o].then(t,n)}))},C=t}var P,N,T,Z,O=A()
function I(){if(N)return P
N=1
var t=i()
return P=function(e){var n,o=e&&e.document,r={svg:"http://www.w3.org/2000/svg",
math:"http://www.w3.org/1998/Math/MathML"}
function i(t){return t.attrs&&t.attrs.xmlns||r[t.tag]}function s(t,e){
if(t.state!==e)throw new Error("'vnode.state' must not be modified.")}
function a(t){var e=t.state
try{return this.apply(e,arguments)}finally{s(t,e)}}function l(){try{
return o.activeElement}catch(t){return null}}function u(t,e,n,o,r,i,s){
for(var a=n;a<o;a++){var l=e[a]
null!=l&&c(t,l,r,s,i)}}function c(e,n,r,s,l){var f=n.tag
if("string"==typeof f)switch(n.state={},null!=n.attrs&&j(n.attrs,n,r),f){
case"#":!function(t,e,n){e.dom=o.createTextNode(e.children),w(t,e.dom,n)}(e,n,l)
break
case"<":h(e,n,s,l)
break
case"[":!function(t,e,n,r,i){var s=o.createDocumentFragment()
if(null!=e.children){var a=e.children
u(s,a,0,a.length,n,null,r)}
e.dom=s.firstChild,e.domSize=s.childNodes.length,w(t,s,i)}(e,n,r,s,l)
break
default:!function(t,e,n,r,s){
var a=e.tag,l=e.attrs,c=l&&l.is,f=(r=i(e)||r)?c?o.createElementNS(r,a,{is:c
}):o.createElementNS(r,a):c?o.createElement(a,{is:c}):o.createElement(a)
e.dom=f,null!=l&&function(t,e,n){
"input"===t.tag&&null!=e.type&&t.dom.setAttribute("type",e.type)
var o=null!=e&&"input"===t.tag&&"file"===e.type
for(var r in e)z(t,r,null,e[r],n,o)}(e,l,r)
if(w(t,f,s),!x(e)&&null!=e.children){var h=e.children
u(f,h,0,h.length,n,null,r),"select"===e.tag&&null!=l&&function(t,e){
if("value"in e)if(null===e.value)-1!==t.dom.selectedIndex&&(t.dom.value=null)
else{var n=""+e.value
t.dom.value===n&&-1!==t.dom.selectedIndex||(t.dom.value=n)}
"selectedIndex"in e&&z(t,"selectedIndex",null,e.selectedIndex,void 0)}(e,l)}
}(e,n,r,s,l)}else!function(e,n,o,r,i){(function(e,n){var o
if("function"==typeof e.tag.view){
if(e.state=Object.create(e.tag),null!=(o=e.state.view).$$reentrantLock$$)return
o.$$reentrantLock$$=!0}else{
if(e.state=void 0,null!=(o=e.tag).$$reentrantLock$$)return
o.$$reentrantLock$$=!0,e.state=null!=e.tag.prototype&&"function"==typeof e.tag.prototype.view?new e.tag(e):e.tag(e)
}j(e.state,e,n),null!=e.attrs&&j(e.attrs,e,n)
if(e.instance=t.normalize(a.call(e.state.view,e)),e.instance===e)throw Error("A view cannot return the vnode it received as argument")
o.$$reentrantLock$$=null
})(n,o),null!=n.instance?(c(e,n.instance,o,r,i),n.dom=n.instance.dom,
n.domSize=null!=n.dom?n.instance.domSize:0):n.domSize=0}(e,n,r,s,l)}var f={
caption:"table",thead:"table",tbody:"table",tfoot:"table",tr:"tbody",th:"tr",
td:"tr",colgroup:"table",col:"colgroup"}
function h(t,e,n,r){
var i=e.children.match(/^\s*?<(\w+)/im)||[],s=o.createElement(f[i[1]]||"div")
"http://www.w3.org/2000/svg"===n?(s.innerHTML='<svg xmlns="http://www.w3.org/2000/svg">'+e.children+"</svg>",
s=s.firstChild):s.innerHTML=e.children,
e.dom=s.firstChild,e.domSize=s.childNodes.length,e.instance=[]
for(var a,l=o.createDocumentFragment();a=s.firstChild;)e.instance.push(a),l.appendChild(a)
w(t,l,r)}function p(t,e,n,o,r,i){
if(e!==n&&(null!=e||null!=n))if(null==e||0===e.length)u(t,n,0,n.length,o,r,i)
else if(null==n||0===n.length)S(t,e,0,e.length)
else{var s=null!=e[0]&&null!=e[0].key,a=null!=n[0]&&null!=n[0].key,l=0,f=0
if(!s)for(;f<e.length&&null==e[f];)f++
if(!a)for(;l<n.length&&null==n[l];)l++
if(s!==a)S(t,e,f,e.length),u(t,n,l,n.length,o,r,i)
else if(a){
for(var h,p,b,w,x,C=e.length-1,k=n.length-1;C>=f&&k>=l&&(b=e[C],w=n[k],
b.key===w.key);)b!==w&&d(t,b,w,o,r,i),null!=w.dom&&(r=w.dom),C--,k--
for(;C>=f&&k>=l&&(h=e[f],p=n[l],h.key===p.key);)f++,l++,h!==p&&d(t,h,p,o,g(e,f,r),i)
for(;C>=f&&k>=l&&l!==k&&h.key===w.key&&b.key===p.key;)y(t,b,x=g(e,f,r)),b!==p&&d(t,b,p,o,x,i),
++l<=--k&&y(t,h,r),
h!==w&&d(t,h,w,o,r,i),null!=w.dom&&(r=w.dom),f++,b=e[--C],w=n[k],h=e[f],p=n[l]
for(;C>=f&&k>=l&&b.key===w.key;)b!==w&&d(t,b,w,o,r,i),null!=w.dom&&(r=w.dom),k--,
b=e[--C],w=n[k]
if(l>k)S(t,e,f,C+1)
else if(f>C)u(t,n,l,k+1,o,r,i)
else{var M,z,A=r,P=k-l+1,N=new Array(P),T=0,Z=0,O=2147483647,I=0
for(Z=0;Z<P;Z++)N[Z]=-1
for(Z=k;Z>=l;Z--){null==M&&(M=v(e,f,C+1))
var B=M[(w=n[Z]).key]
null!=B&&(O=B<O?B:-1,N[Z-l]=B,b=e[B],e[B]=null,b!==w&&d(t,b,w,o,r,i),null!=w.dom&&(r=w.dom),
I++)}if(r=A,I!==C-f+1&&S(t,e,f,C+1),0===I)u(t,n,l,k+1,o,r,i)
else if(-1===O)for(z=function(t){var e=[0],n=0,o=0,r=0,i=m.length=t.length
for(r=0;r<i;r++)m[r]=t[r]
for(r=0;r<i;++r)if(-1!==t[r]){var s=e[e.length-1]
if(t[s]<t[r])m[r]=s,e.push(r)
else{for(n=0,o=e.length-1;n<o;){var a=(n>>>1)+(o>>>1)+(n&o&1)
t[e[a]]<t[r]?n=a+1:o=a}t[r]<t[e[n]]&&(n>0&&(m[r]=e[n-1]),e[n]=r)}}
n=e.length,o=e[n-1]
for(;n-- >0;)e[n]=o,o=m[o]
return m.length=0,e
}(N),T=z.length-1,Z=k;Z>=l;Z--)p=n[Z],-1===N[Z-l]?c(t,p,o,i,r):z[T]===Z-l?T--:y(t,p,r),
null!=p.dom&&(r=n[Z].dom)
else for(Z=k;Z>=l;Z--)p=n[Z],-1===N[Z-l]&&c(t,p,o,i,r),null!=p.dom&&(r=n[Z].dom)
}}else{var D=e.length<n.length?e.length:n.length
for(l=l<f?l:f;l<D;l++)(h=e[l])===(p=n[l])||null==h&&null==p||(null==h?c(t,p,o,i,g(e,l+1,r)):null==p?E(t,h):d(t,h,p,o,g(e,l+1,r),i))
e.length>D&&S(t,e,l,e.length),n.length>D&&u(t,n,l,n.length,o,r,i)}}}
function d(e,n,o,r,s,l){var u=n.tag
if(u===o.tag){if(o.state=n.state,o.events=n.events,function(t,e){do{var n
if(null!=t.attrs&&"function"==typeof t.attrs.onbeforeupdate)if(void 0!==(n=a.call(t.attrs.onbeforeupdate,t,e))&&!n)break
if("string"!=typeof t.tag&&"function"==typeof t.state.onbeforeupdate)if(void 0!==(n=a.call(t.state.onbeforeupdate,t,e))&&!n)break
return!1}while(0)
return t.dom=e.dom,t.domSize=e.domSize,t.instance=e.instance,t.attrs=e.attrs,t.children=e.children,
t.text=e.text,!0}(o,n))return
if("string"==typeof u)switch(null!=o.attrs&&q(o.attrs,o,r),u){case"#":
!function(t,e){
t.children.toString()!==e.children.toString()&&(t.dom.nodeValue=e.children)
e.dom=t.dom}(n,o)
break
case"<":!function(t,e,n,o,r){
e.children!==n.children?(C(t,e),h(t,n,o,r)):(n.dom=e.dom,
n.domSize=e.domSize,n.instance=e.instance)}(e,n,o,l,s)
break
case"[":!function(t,e,n,o,r,i){p(t,e.children,n.children,o,r,i)
var s=0,a=n.children
if(n.dom=null,null!=a){for(var l=0;l<a.length;l++){var u=a[l]
null!=u&&null!=u.dom&&(null==n.dom&&(n.dom=u.dom),s+=u.domSize||1)}
1!==s&&(n.domSize=s)}}(e,n,o,r,s,l)
break
default:!function(t,e,n,o){var r=e.dom=t.dom
o=i(e)||o,"textarea"===e.tag&&null==e.attrs&&(e.attrs={});(function(t,e,n,o){
e&&e===n&&console.warn("Don't reuse attrs object, use new object for every redraw, this will throw in next major")
if(null!=n){"input"===t.tag&&null!=n.type&&t.dom.setAttribute("type",n.type)
var r="input"===t.tag&&"file"===n.type
for(var i in n)z(t,i,e&&e[i],n[i],o,r)}var s
if(null!=e)for(var i in e)null==(s=e[i])||null!=n&&null!=n[i]||A(t,i,s,o)
})(e,t.attrs,e.attrs,o),x(e)||p(r,t.children,e.children,n,null,o)}(n,o,r,l)
}else!function(e,n,o,r,i,s){
if(o.instance=t.normalize(a.call(o.state.view,o)),o.instance===o)throw Error("A view cannot return the vnode it received as argument")
q(o.state,o,r),null!=o.attrs&&q(o.attrs,o,r)
null!=o.instance?(null==n.instance?c(e,o.instance,r,s,i):d(e,n.instance,o.instance,r,i,s),
o.dom=o.instance.dom,
o.domSize=o.instance.domSize):null!=n.instance?(E(e,n.instance),
o.dom=void 0,o.domSize=0):(o.dom=n.dom,o.domSize=n.domSize)}(e,n,o,r,s,l)
}else E(e,n),c(e,o,r,l,s)}function v(t,e,n){
for(var o=Object.create(null);e<n;e++){var r=t[e]
if(null!=r){var i=r.key
null!=i&&(o[i]=e)}}return o}var m=[]
function g(t,e,n){
for(;e<t.length;e++)if(null!=t[e]&&null!=t[e].dom)return t[e].dom
return n}function y(t,e,n){var r=o.createDocumentFragment()
b(t,r,e),w(t,r,n)}function b(t,e,n){for(;null!=n.dom&&n.dom.parentNode===t;){
if("string"!=typeof n.tag){if(null!=(n=n.instance))continue
}else if("<"===n.tag)for(var o=0;o<n.instance.length;o++)e.appendChild(n.instance[o])
else if("["!==n.tag)e.appendChild(n.dom)
else if(1===n.children.length){if(null!=(n=n.children[0]))continue
}else for(o=0;o<n.children.length;o++){var r=n.children[o]
null!=r&&b(t,e,r)}break}}function w(t,e,n){
null!=n?t.insertBefore(e,n):t.appendChild(e)}function x(t){
if(null==t.attrs||null==t.attrs.contenteditable&&null==t.attrs.contentEditable)return!1
var e=t.children
if(null!=e&&1===e.length&&"<"===e[0].tag){var n=e[0].children
t.dom.innerHTML!==n&&(t.dom.innerHTML=n)
}else if(null!=e&&0!==e.length)throw new Error("Child node of a contenteditable must be trusted.")
return!0}function S(t,e,n,o){for(var r=n;r<o;r++){var i=e[r]
null!=i&&E(t,i)}}function E(t,e){var n,o,r,i=0,l=e.state
"string"!=typeof e.tag&&"function"==typeof e.state.onbeforeremove&&(null!=(r=a.call(e.state.onbeforeremove,e))&&"function"==typeof r.then&&(i=1,
n=r))
e.attrs&&"function"==typeof e.attrs.onbeforeremove&&(null!=(r=a.call(e.attrs.onbeforeremove,e))&&"function"==typeof r.then&&(i|=2,
o=r))
if(s(e,l),i){if(null!=n){var u=function(){1&i&&((i&=2)||c())}
n.then(u,u)}if(null!=o){u=function(){2&i&&((i&=1)||c())}
o.then(u,u)}}else M(e),k(t,e)
function c(){s(e,l),M(e),k(t,e)}}function C(t,e){
for(var n=0;n<e.instance.length;n++)t.removeChild(e.instance[n])}
function k(t,e){for(;null!=e.dom&&e.dom.parentNode===t;){
if("string"!=typeof e.tag){if(null!=(e=e.instance))continue
}else if("<"===e.tag)C(t,e)
else{if("["!==e.tag&&(t.removeChild(e.dom),!Array.isArray(e.children)))break
if(1===e.children.length){if(null!=(e=e.children[0]))continue
}else for(var n=0;n<e.children.length;n++){var o=e.children[n]
null!=o&&k(t,o)}}break}}function M(t){
if("string"!=typeof t.tag&&"function"==typeof t.state.onremove&&a.call(t.state.onremove,t),
t.attrs&&"function"==typeof t.attrs.onremove&&a.call(t.attrs.onremove,t),
"string"!=typeof t.tag)null!=t.instance&&M(t.instance)
else{var e=t.children
if(Array.isArray(e))for(var n=0;n<e.length;n++){var o=e[n]
null!=o&&M(o)}}}function z(t,e,n,r,i,s){
if(!("key"===e||"is"===e||null==r||P(e)||n===r&&!function(t,e){
return"value"===e||"checked"===e||"selectedIndex"===e||"selected"===e&&t.dom===l()||"option"===t.tag&&t.dom.parentNode===o.activeElement
}(t,e)&&"object"!=typeof r||"type"===e&&"input"===t.tag)){
if("o"===e[0]&&"n"===e[1])return L(t,e,r)
if("xlink:"===e.slice(0,6))t.dom.setAttributeNS("http://www.w3.org/1999/xlink",e.slice(6),r)
else if("style"===e)B(t.dom,n,r)
else if(N(t,e,i)){if("value"===e){
if(("input"===t.tag||"textarea"===t.tag)&&t.dom.value===""+r&&(s||t.dom===l()))return
if("select"===t.tag&&null!==n&&t.dom.value===""+r)return
if("option"===t.tag&&null!==n&&t.dom.value===""+r)return
if(s&&""+r!="")return void console.error("`value` is read-only on file inputs!")
}t.dom[e]=r
}else"boolean"==typeof r?r?t.dom.setAttribute(e,""):t.dom.removeAttribute(e):t.dom.setAttribute("className"===e?"class":e,r)
}}function A(t,e,n,o){
if("key"!==e&&"is"!==e&&null!=n&&!P(e))if("o"===e[0]&&"n"===e[1])L(t,e,void 0)
else if("style"===e)B(t.dom,n,null)
else if(!N(t,e,o)||"className"===e||"title"===e||"value"===e&&("option"===t.tag||"select"===t.tag&&-1===t.dom.selectedIndex&&t.dom===l())||"input"===t.tag&&"type"===e){
var r=e.indexOf(":")
;-1!==r&&(e=e.slice(r+1)),!1!==n&&t.dom.removeAttribute("className"===e?"class":e)
}else t.dom[e]=null}function P(t){
return"oninit"===t||"oncreate"===t||"onupdate"===t||"onremove"===t||"onbeforeremove"===t||"onbeforeupdate"===t
}function N(t,e,n){
return void 0===n&&(t.tag.indexOf("-")>-1||null!=t.attrs&&t.attrs.is||"href"!==e&&"list"!==e&&"form"!==e&&"width"!==e&&"height"!==e)&&e in t.dom
}var T,Z=/[A-Z]/g
function O(t){return"-"+t.toLowerCase()}function I(t){
return"-"===t[0]&&"-"===t[1]?t:"cssFloat"===t?"float":t.replace(Z,O)}
function B(t,e,n){if(e===n);else if(null==n)t.style.cssText=""
else if("object"!=typeof n)t.style.cssText=n
else if(null==e||"object"!=typeof e)for(var o in t.style.cssText="",n){
null!=(r=n[o])&&t.style.setProperty(I(o),String(r))}else{for(var o in n){var r
null!=(r=n[o])&&(r=String(r))!==String(e[o])&&t.style.setProperty(I(o),r)}
for(var o in e)null!=e[o]&&null==n[o]&&t.style.removeProperty(I(o))}}
function D(){this._=n}function L(t,e,o){if(null!=t.events){
if(t.events._=n,t.events[e]===o)return
null==o||"function"!=typeof o&&"object"!=typeof o?(null!=t.events[e]&&t.dom.removeEventListener(e.slice(2),t.events,!1),
t.events[e]=void 0):(null==t.events[e]&&t.dom.addEventListener(e.slice(2),t.events,!1),
t.events[e]=o)
}else null==o||"function"!=typeof o&&"object"!=typeof o||(t.events=new D,
t.dom.addEventListener(e.slice(2),t.events,!1),t.events[e]=o)}function j(t,e,n){
"function"==typeof t.oninit&&a.call(t.oninit,e),
"function"==typeof t.oncreate&&n.push(a.bind(t.oncreate,e))}function q(t,e,n){
"function"==typeof t.onupdate&&n.push(a.bind(t.onupdate,e))}
return D.prototype=Object.create(null),D.prototype.handleEvent=function(t){
var e,n=this["on"+t.type]
"function"==typeof n?e=n.call(t.currentTarget,t):"function"==typeof n.handleEvent&&n.handleEvent(t),
this._&&!1!==t.redraw&&(0,
this._)(),!1===e&&(t.preventDefault(),t.stopPropagation())},function(e,o,r){
if(!e)throw new TypeError("DOM element being rendered to does not exist.")
if(null!=T&&e.contains(T))throw new TypeError("Node is currently being rendered to and thus is locked.")
var i=n,s=T,a=[],u=l(),c=e.namespaceURI
T=e,n="function"==typeof r?r:void 0
try{
null==e.vnodes&&(e.textContent=""),o=t.normalizeChildren(Array.isArray(o)?o:[o]),
p(e,e.vnodes,o,a,null,"http://www.w3.org/1999/xhtml"===c?void 0:c),
e.vnodes=o,null!=u&&l()!==u&&"function"==typeof u.focus&&u.focus()
for(var f=0;f<a.length;f++)a[f]()}finally{n=i,T=s}}},P}function B(){
return Z?T:(Z=1,T=I()("undefined"!=typeof window?window:null))}
"undefined"!=typeof window?(void 0===window.Promise?window.Promise=O:window.Promise.prototype.finally||(window.Promise.prototype.finally=O.prototype.finally),
z.exports=window.Promise):void 0!==t?(void 0===t.Promise?t.Promise=O:t.Promise.prototype.finally||(t.Promise.prototype.finally=O.prototype.finally),
z.exports=t.Promise):z.exports=O
var D,L,j,q,R,_,V=i(),U=function(t,e,n){var o=[],r=!1,i=-1
function s(){for(i=0;i<o.length;i+=2)try{t(o[i],V(o[i+1]),a)}catch(t){n.error(t)
}i=-1}function a(){r||(r=!0,e((function(){r=!1,s()})))}return a.sync=s,{
mount:function(e,n){
if(null!=n&&null==n.view&&"function"!=typeof n)throw new TypeError("m.mount expects a component, not a vnode.")
var r=o.indexOf(e)
r>=0&&(o.splice(r,2),r<=i&&(i-=2),t(e,[])),null!=n&&(o.push(e,n),t(e,V(n),a))},
redraw:a}
}(B(),"undefined"!=typeof requestAnimationFrame?requestAnimationFrame:null,"undefined"!=typeof console?console:null)
function $(){return L?D:(L=1,D=function(t){
if("[object Object]"!==Object.prototype.toString.call(t))return""
var e=[]
for(var n in t)o(n,t[n])
return e.join("&")
function o(t,n){
if(Array.isArray(n))for(var r=0;r<n.length;r++)o(t+"["+r+"]",n[r])
else if("[object Object]"===Object.prototype.toString.call(n))for(var r in n)o(t+"["+r+"]",n[r])
else e.push(encodeURIComponent(t)+(null!=n&&""!==n?"="+encodeURIComponent(n):""))
}})}function W(){if(q)return j
q=1
var t=c()
return j=Object.assign||function(e,n){for(var o in n)t.call(n,o)&&(e[o]=n[o])}}
function F(){if(_)return R
_=1
var t=$(),e=W()
return R=function(n,o){
if(/:([^\/\.-]+)(\.{3})?:/.test(n))throw new SyntaxError("Template parameter names must be separated by either a '/', '-', or '.'.")
if(null==o)return n
var r=n.indexOf("?"),i=n.indexOf("#"),s=i<0?n.length:i,a=r<0?s:r,l=n.slice(0,a),u={}
e(u,o)
var c=l.replace(/:([^\/\.-]+)(\.{3})?/g,(function(t,e,n){
return delete u[e],null==o[e]?t:n?o[e]:encodeURIComponent(String(o[e]))
})),f=c.indexOf("?"),h=c.indexOf("#"),p=h<0?c.length:h,d=f<0?p:f,v=c.slice(0,d)
r>=0&&(v+=n.slice(r,s)),f>=0&&(v+=(r<0?"?":"&")+c.slice(f,p))
var m=t(u)
return m&&(v+=(r<0&&f<0?"?":"&")+m),i>=0&&(v+=n.slice(i)),h>=0&&(v+=(i<0?"":"&")+c.slice(h)),
v},R}
var G,X,H,Y,K,J,Q,tt,et,nt,ot,rt,it=F(),st=c(),at=z.exports,lt=function(t,e,n){
var o=0
function r(t){return new e(t)}function i(t){return function(o,i){
"string"!=typeof o?(i=o,o=o.url):null==i&&(i={})
var s=new e((function(e,n){t(it(o,i.params),i,(function(t){
if("function"==typeof i.type)if(Array.isArray(t))for(var n=0;n<t.length;n++)t[n]=new i.type(t[n])
else t=new i.type(t)
e(t)}),n)}))
if(!0===i.background)return s
var a=0
function l(){0==--a&&"function"==typeof n&&n()}return function t(e){var n=e.then
return e.constructor=r,e.then=function(){a++
var o=n.apply(e,arguments)
return o.then(l,(function(t){if(l(),0===a)throw t})),t(o)},e}(s)}}
function s(t,e){
for(var n in t.headers)if(st.call(t.headers,n)&&n.toLowerCase()===e)return!0
return!1}return r.prototype=e.prototype,r.__proto__=e,{
request:i((function(e,n,o,r){
var i,a=null!=n.method?n.method.toUpperCase():"GET",l=n.body,u=(null==n.serialize||n.serialize===JSON.serialize)&&!(l instanceof t.FormData||l instanceof t.URLSearchParams),c=n.responseType||("function"==typeof n.extract?"":"json"),f=new t.XMLHttpRequest,h=!1,p=!1,d=f,v=f.abort
for(var m in f.abort=function(){h=!0,v.call(this)
},f.open(a,e,!1!==n.async,"string"==typeof n.user?n.user:void 0,"string"==typeof n.password?n.password:void 0),
u&&null!=l&&!s(n,"content-type")&&f.setRequestHeader("Content-Type","application/json; charset=utf-8"),
"function"==typeof n.deserialize||s(n,"accept")||f.setRequestHeader("Accept","application/json, text/*"),
n.withCredentials&&(f.withCredentials=n.withCredentials),
n.timeout&&(f.timeout=n.timeout),
f.responseType=c,n.headers)st.call(n.headers,m)&&f.setRequestHeader(m,n.headers[m])
f.onreadystatechange=function(t){if(!h&&4===t.target.readyState)try{
var i,s=t.target.status>=200&&t.target.status<300||304===t.target.status||/^file:\/\//i.test(e),a=t.target.response
if("json"===c){if(!t.target.responseType&&"function"!=typeof n.extract)try{
a=JSON.parse(t.target.responseText)}catch(t){a=null}
}else c&&"text"!==c||null==a&&(a=t.target.responseText)
if("function"==typeof n.extract?(a=n.extract(t.target,n),s=!0):"function"==typeof n.deserialize&&(a=n.deserialize(a)),
s)o(a)
else{var l=function(){try{i=t.target.responseText}catch(t){i=a}
var e=new Error(i)
e.code=t.target.status,e.response=a,r(e)}
0===f.status?setTimeout((function(){p||l()})):l()}}catch(t){r(t)}
},f.ontimeout=function(t){p=!0
var e=new Error("Request timed out")
e.code=t.target.status,r(e)
},"function"==typeof n.config&&(f=n.config(f,n,e)||f)!==d&&(i=f.abort,
f.abort=function(){h=!0,i.call(this)
}),null==l?f.send():"function"==typeof n.serialize?f.send(n.serialize(l)):l instanceof t.FormData||l instanceof t.URLSearchParams?f.send(l):f.send(JSON.stringify(l))
})),jsonp:i((function(e,n,r,i){
var s=n.callbackName||"_mithril_"+Math.round(1e16*Math.random())+"_"+o++,a=t.document.createElement("script")
t[s]=function(e){delete t[s],a.parentNode.removeChild(a),r(e)
},a.onerror=function(){
delete t[s],a.parentNode.removeChild(a),i(new Error("JSONP request failed"))
},a.src=e+(e.indexOf("?")<0?"?":"&")+encodeURIComponent(n.callbackKey||"callback")+"="+encodeURIComponent(s),
t.document.documentElement.appendChild(a)}))}
}("undefined"!=typeof window?window:null,at,U.redraw)
function ut(){if(X)return G
function t(t){try{return decodeURIComponent(t)}catch(e){return t}}
return X=1,G=function(e){if(""===e||null==e)return{}
"?"===e.charAt(0)&&(e=e.slice(1))
for(var n=e.split("&"),o={},r={},i=0;i<n.length;i++){
var s=n[i].split("="),a=t(s[0]),l=2===s.length?t(s[1]):""
"true"===l?l=!0:"false"===l&&(l=!1)
var u=a.split(/\]\[?|\[/),c=r
a.indexOf("[")>-1&&u.pop()
for(var f=0;f<u.length;f++){var h=u[f],p=u[f+1],d=""==p||!isNaN(parseInt(p,10))
if(""===h)null==o[a=u.slice(0,f).join()]&&(o[a]=Array.isArray(c)?c.length:0),h=o[a]++
else if("__proto__"===h)break
if(f===u.length-1)c[h]=l
else{var v=Object.getOwnPropertyDescriptor(c,h)
null!=v&&(v=v.value),null==v&&(c[h]=v=d?[]:{}),c=v}}}return r}}function ct(){
if(Y)return H
Y=1
var t=ut()
return H=function(e){
var n=e.indexOf("?"),o=e.indexOf("#"),r=o<0?e.length:o,i=n<0?r:n,s=e.slice(0,i).replace(/\/{2,}/g,"/")
return s?("/"!==s[0]&&(s="/"+s),s.length>1&&"/"===s[s.length-1]&&(s=s.slice(0,-1))):s="/",
{path:s,params:n<0?{}:t(e.slice(n+1,r))}}}function ft(){if(J)return K
J=1
var t=ct()
return K=function(e){
var n=t(e),o=Object.keys(n.params),r=[],i=new RegExp("^"+n.path.replace(/:([^\/.-]+)(\.{3}|\.(?!\.)|-)?|[\\^$*+.()|\[\]{}]/g,(function(t,e,n){
return null==e?"\\"+t:(r.push({k:e,r:"..."===n
}),"..."===n?"(.*)":"."===n?"([^/]+)\\.":"([^/]+)"+(n||""))}))+"$")
return function(t){
for(var e=0;e<o.length;e++)if(n.params[o[e]]!==t.params[o[e]])return!1
if(!r.length)return i.test(t.path)
var s=i.exec(t.path)
if(null==s)return!1
for(e=0;e<r.length;e++)t.params[r[e].k]=r[e].r?s[e+1]:decodeURIComponent(s[e+1])
return!0}},K}function ht(){if(tt)return Q
tt=1
var t=c(),e=new RegExp("^(?:key|oninit|oncreate|onbeforeupdate|onupdate|onbeforeremove|onremove)$")
return Q=function(n,o){var r={}
if(null!=o)for(var i in n)t.call(n,i)&&!e.test(i)&&o.indexOf(i)<0&&(r[i]=n[i])
else for(var i in n)t.call(n,i)&&!e.test(i)&&(r[i]=n[i])
return r}}var pt=M,dt=lt,vt=U,mt=function(){return pt.apply(this,arguments)}
mt.m=pt,mt.trust=pt.trust,mt.fragment=pt.fragment,mt.Fragment="[",mt.mount=vt.mount,
mt.route=function(){if(rt)return ot
rt=1
var t=U
return ot=function(){if(nt)return et
nt=1
var t=i(),e=b,n=z.exports,o=F(),r=ct(),s=ft(),a=W(),l=ht(),u={}
function c(t){try{return decodeURIComponent(t)}catch(e){return t}}
return et=function(i,f){
var h,p,d,v,m,g,y=null==i?null:"function"==typeof i.setImmediate?i.setImmediate:i.setTimeout,b=n.resolve(),w=!1,x=!1,S=0,E=u,C={
onbeforeupdate:function(){return!(!(S=S?2:1)||u===E)},onremove:function(){
i.removeEventListener("popstate",z,!1),i.removeEventListener("hashchange",M,!1)
},view:function(){if(S&&u!==E){var e=[t(d,v.key,v)]
return E&&(e=E.render(e[0])),e}}},k=P.SKIP={}
function M(){w=!1
var t=i.location.hash
"#"!==P.prefix[0]&&(t=i.location.search+t,"?"!==P.prefix[0]&&"/"!==(t=i.location.pathname+t)[0]&&(t="/"+t))
var e=t.concat().replace(/(?:%[a-f89][a-f0-9])+/gim,c).slice(P.prefix.length),n=r(e)
function o(t){console.error(t),A(p,null,{replace:!0})}
a(n.params,i.history.state),function t(r){for(;r<h.length;r++)if(h[r].check(n)){
var i=h[r].component,s=h[r].route,a=i,l=g=function(o){if(l===g){
if(o===k)return t(r+1)
d=null==o||"function"!=typeof o.view&&"function"!=typeof o?"div":o,v=n.params,m=e,
g=null,E=i.render?i:null,2===S?f.redraw():(S=2,f.redraw.sync())}}
return void(i.view||"function"==typeof i?(i={},l(a)):i.onmatch?b.then((function(){
return i.onmatch(n.params,e,s)})).then(l,e===p?null:o):l("div"))}
if(e===p)throw new Error("Could not resolve default route "+p+".")
A(p,null,{replace:!0})}(0)}function z(){w||(w=!0,y(M))}function A(t,e,n){
if(t=o(t,e),x){z()
var r=n?n.state:null,s=n?n.title:null
n&&n.replace?i.history.replaceState(r,s,P.prefix+t):i.history.pushState(r,s,P.prefix+t)
}else i.location.href=P.prefix+t}function P(t,e,n){
if(!t)throw new TypeError("DOM element being rendered to does not exist.")
if(h=Object.keys(n).map((function(t){
if("/"!==t[0])throw new SyntaxError("Routes must start with a '/'.")
if(/:([^\/\.-]+)(\.{3})?:/.test(t))throw new SyntaxError("Route parameter names must be separated with either '/', '.', or '-'.")
return{route:t,component:n[t],check:s(t)}})),p=e,null!=e){var o=r(e)
if(!h.some((function(t){return t.check(o)
})))throw new ReferenceError("Default route doesn't match any known routes.")}
"function"==typeof i.history.pushState?i.addEventListener("popstate",z,!1):"#"===P.prefix[0]&&i.addEventListener("hashchange",M,!1),
x=!0,f.mount(t,C),M()}return P.set=function(t,e,n){
null!=g&&((n=n||{}).replace=!0),g=null,A(t,e,n)},P.get=function(){return m
},P.prefix="#!",P.Link={view:function(t){
var n,r,i,s=e(t.attrs.selector||"a",l(t.attrs,["options","params","selector","onclick"]),t.children)
return(s.attrs.disabled=Boolean(s.attrs.disabled))?(s.attrs.href=null,s.attrs["aria-disabled"]="true"):(n=t.attrs.options,
r=t.attrs.onclick,
i=o(s.attrs.href,t.attrs.params),s.attrs.href=P.prefix+i,s.attrs.onclick=function(t){
var e
"function"==typeof r?e=r.call(t.currentTarget,t):null==r||"object"!=typeof r||"function"==typeof r.handleEvent&&r.handleEvent(t),
!1===e||t.defaultPrevented||0!==t.button&&0!==t.which&&1!==t.which||t.currentTarget.target&&"_self"!==t.currentTarget.target||t.ctrlKey||t.metaKey||t.shiftKey||t.altKey||(t.preventDefault(),
t.redraw=!1,P.set(i,null,n))}),s}},P.param=function(t){return v&&null!=t?v[t]:v
},P},et}()("undefined"!=typeof window?window:null,t),ot
}(),mt.render=B(),mt.redraw=vt.redraw,
mt.request=dt.request,mt.jsonp=dt.jsonp,mt.parseQueryString=ut(),
mt.buildQueryString=$(),mt.parsePathname=ct(),mt.buildPathname=F(),mt.vnode=i(),
mt.PromisePolyfill=A(),mt.censor=ht(),r.exports=mt
var gt={},yt=[],bt=[]
var wt,xt,St="body,html{height:100%;margin:0}h1{margin-block-start:0;text-align:center}form{padding:1ex}.hidden{display:none}h2{border-top:1px dashed #000}svg{box-sizing:border-box;height:100%;left:0;padding:0;position:absolute;top:0;width:100%}.kte-1{stroke:navy}.kte-2{stroke:green}.kte-3{stroke:red}g.ktes>path{stroke-width:1px;vector-effect:non-scaling-stroke;fill-rule:evenodd;stroke-linecap:round;stroke-linejoin:round}g.ktes>path.kte{stroke-width:5px;fill:none}g.ktes>path.kte:hover{stroke-dasharray:1%;animation:dash 1s linear infinite}g.ktes>path.axis{stroke:#000;stroke-dasharray:3% 1% .3% 1%}@-moz-keyframes dash{0%{stroke-dashoffset:0%}to{stroke-dashoffset:-2%}}@-webkit-keyframes dash{0%{stroke-dashoffset:0%}to{stroke-dashoffset:-2%}}@-o-keyframes dash{0%{stroke-dashoffset:0%}to{stroke-dashoffset:-2%}}@keyframes dash{0%{stroke-dashoffset:0%}to{stroke-dashoffset:-2%}}"
!function(t,e){if(t&&"undefined"!=typeof document){
var n,o=!0===e.prepend?"prepend":"append",r=!0===e.singleTag,i="string"==typeof e.container?document.querySelector(e.container):document.getElementsByTagName("head")[0]
if(r){var s=yt.indexOf(i)
;-1===s&&(s=yt.push(i)-1,bt[s]={}),n=bt[s]&&bt[s][o]?bt[s][o]:bt[s][o]=a()
}else n=a()
65279===t.charCodeAt(0)&&(t=t.substring(1)),n.styleSheet?n.styleSheet.cssText+=t:n.appendChild(document.createTextNode(t))
}function a(){var t=document.createElement("style")
if(t.setAttribute("type","text/css"),e.attributes)for(var n=Object.keys(e.attributes),r=0;r<n.length;r++)t.setAttribute(n[r],e.attributes[n[r]])
var s="prepend"===o?"afterbegin":"beforeend"
return i.insertAdjacentElement(s,t),t}}(St,{}),wt=r.exports,xt=e(Object.freeze({
__proto__:null,css:St,default:St})),gt.view=function(){
return wt.fragment(wt("style",xt.css))}
var Et={},Ct={},kt=function(){if(!this)return null
var t,e,n,o,r,i,s=At,a=At,l=At,u=At,c=At,f=!1,h=!1,p=!1,d=!1,v=!1,m=!1,g=null,y=!1,b={
xmlns:undefined},w=""
this.on=function(r,i){if("function"==typeof i||null===i)switch(r){
case"startNode":a=i||At
break
case"textNode":s=i||At
break
case"endNode":l=i||At
break
case"error":c=i||At
break
case"cdata":u=i||At
break
case"unknownNS":o=i,d=!!i
break
case"attention":n=i,p=!!i
break
case"question":e=i,h=!!i
break
case"comment":t=i,f=!!i}},this.ns=function(t,e){
if(!t||"string"!=typeof t||!e)return this
var n,o,s,a={}
for(s in e)"string"==typeof(o=e[s])&&(t===o&&(n=!0),a[s]=o)
return n&&(r=t,m=!0,i=a),this},this.parse=function(t){
if("string"==typeof t)return g=null,w=t,m?(b={xmlns:r
},A(),b=!1):A(),y=!1,x=!0,w="",g},this.stop=function(){y=!0}
var x,S=0,E=0,C="",k=0
function M(){if(null!==x)return x
for(var t,e,n,r,s,a,l,u,c,f,h=m&&v?[]:null,p=k,g=C,y=g.length,w={};p<y;p++)if(!(32===(c=g.charCodeAt(p))||c<14&&c>8)){
if((c<65||c>122||c>90&&c<97)&&95!==c&&58!==c)return x=!1
for(f=p+1;f<y;f++)if(!((c=g.charCodeAt(f))>96&&c<123||c>64&&c<91||c>47&&c<59||45===c||95===c)){
if(61!==c)return x=!1
break}if(u=!0,"xmlns:xmlns"===(l=g.substring(p,f)))return x=!1
if(34===(c=g.charCodeAt(f+1)))f=g.indexOf('"',p=f+2)
else{if(39!==c)return x=!1
f=g.indexOf("'",p=f+2)}if(-1===f)return x=!1
if(f+1<y&&((c=g.charCodeAt(f+1))>32||c<9||c<32&&c>13))return x=!1
if(s=g.substring(p,f),p=f+1,m)if(v){
if(null!==(r="xmlns"!==l?120===l.charCodeAt(0)&&"xmlns:"===l.substr(0,6)?l.substr(6):null:"xmlns")){
a=i[Nt(s)],
d&&!a&&(a=o(s)),a?b[r]!==a&&(n||(b=Tt(b),n=!0),b[r]=a):b[r]&&(n||(b=Tt(b),n=!0),
b[r]=!1),w[l]=s
continue}h.push(l,s)
}else-1!==(c=l.indexOf(":"))?(e=b[l.substring(0,c)])&&(w[(e=b.xmlns===e?l.substr(c+1):e+l.substr(c))+l.substr(c)]=s):w[l]=s
else w[l]=s}if(!u)return x=!0
if(v)for(t=b.xmlns,p=0,y=h.length;p<y;p++)-1===(c=(l=h[p++]).indexOf(":"))?w[l]=h[p]:(e=b[l.substring(0,c)])&&(w[e=t===e?l.substr(c+1):e+l.substr(c)]=h[p])
return x=w}function z(){return w.substring(S,E+1)}function A(){
for(var o,r,i,d,A,P,N,T,Z=[],O=[],I=!1,B=!1,D=0,L=0,j=0;-1!==D;){
if(T=j>0,-1===(L=60===w.charCodeAt(D)?D:w.indexOf("<",D)))return O.length?void c(g="end file"):void 0
if(D!==L&&!T&&(s(w.substring(D,L),Nt),y))return
if(33!==(d=w.charCodeAt(L+1)))if(63!==d){
if(-1==(D=w.indexOf(">",L+1)))return void c(g="...>")
if(x=!0,47===d){
if(I=!1,B=!0,!O.length)return void c(g="close tag, requires open tag")
if(i=L+2+(o=N=O.pop()).length,w.substring(L+2,i)!==o)return void c(g="close tag, not equal to the open tag")
for(;i<D;i++)if(!(32===(d=w.charCodeAt(i))||d>8&&d<14))return void c(g="close tag")
}else{
if(47===w.charCodeAt(D-1)?(o=N=w.substring(L+1,D-1),I=!0,B=!0):(o=N=w.substring(L+1,D),
I=!0,
B=!1),!(d>96&&d<123||d>64&&d<91||95===d||58===d))return void c(g="first char nodeName")
for(i=1,r=o.length;i<r;i++)if(!((d=o.charCodeAt(i))>96&&d<123||d>64&&d<91||d>47&&d<59||45===d||95===d)){
if(32===d||d<14&&d>8){N=o.substring(0,i),x=null
break}return void c(g="invalid nodeName")}B||O.push(N)}if(m){if(T){
B?I||0==--j&&(b=Z.pop()):j+=1,D+=1
continue}if(A=b,B||Z.push(b),I&&!0!==x&&(v=-1!==o.indexOf("xmlns",i))&&(k=i,C=o,
M(),
v=!1),-1!==(d=N.indexOf(":"))?(P=b[N.substring(0,d)],N=N.substr(d+1)):P=b.xmlns,
!P){B?b=I?A:Z.pop():(j=1,x=!0),D+=1
continue}N=P+":"+N}if(S=L,E=D,I){if(k=i,C=o,a(N,M,Nt,B,z),y)return
x=!0}if(B){if(l(N,Nt,I,z),y)return
m&&(b=I?A:Z.pop())}D+=1}else{
if(-1===(D=w.indexOf("?>",L)))return void c(g="...?>")
if(h&&(e(w.substring(L,D+2)),y))return
D+=2}else{if(91===(d=w.charCodeAt(L+2))&&"CDATA["===w.substr(L+3,6)){
if(-1===(D=w.indexOf("]]>",L)))return void c(g="cdata")
if(!T&&(u(w.substring(L+9,D),!1),y))return
D+=3
continue}if(45===d&&45===w.charCodeAt(L+3)){
if(-1===(D=w.indexOf("--\x3e",L)))return void c(g="expected --\x3e")
if(f&&!T&&(t(w.substring(L+4,D),Nt),y))return
D+=3
continue}if(-1===(D=w.indexOf(">",L+1)))return void c(g='expected ">"')
if(p&&!T&&(n(w.substring(L,D+1),Nt),y))return
D+=1}}}},Mt=String.fromCharCode,zt={constructor:!1,propertyIsEnumerable:!1,
toLocaleString:!1,hasOwnProperty:!1,isPrototypeOf:!1,toString:!1,valueOf:!1,
quot:'"',QUOT:'"',amp:"&",AMP:"&",nbsp:" ",apos:"'",lt:"<",LT:"<",gt:">",GT:">",
copy:"©",laquo:"«",raquo:"»",reg:"®",deg:"°",plusmn:"±",sup2:"²",sup3:"³",
micro:"µ",para:"¶"}
function At(){}function Pt(t,e,n,o){return o?zt[o]||"":Mt(e||parseInt(n,16))}
function Nt(t){
return(t=""+t).length>3&&-1!==t.indexOf("&")&&(-1!==t.indexOf("&quot;")&&(t=t.replace(/&quot;/g,'"')),
-1!==t.indexOf("&gt;")&&(t=t.replace(/&gt;/g,">")),
-1!==t.indexOf("&lt;")&&(t=t.replace(/&lt;/g,"<")),
-1!==t.indexOf("&")&&(t=t.replace(/&#(\d+);|&#x([0123456789abcdef]+);|&(\w+);/gi,Pt))),
t}function Tt(t){var e={}
for(var n in t)e[n]=t[n]
return e}var Zt=function(t,e){var n,o,r=[]
for(n=0;n<2;++n)o=n,r.push(t[o]-e[o])
return r}
var Ot,It=function(t,e){var n,o,r
for(n=0,o=0;o<2;++o)n+=t[r=o]*e[r]
return n}
Ot=It
var Bt=function(t){return Math.sqrt(Ot(t,t))}
var Dt,Lt,jt,qt,Rt=function(t){return[-t[1],+t[0]]}
Dt=Zt,Lt=It,jt=Bt,qt=Rt
var _t,Vt=function(t){var e,n,o,r,i,s,a,l,u,c,f,h=[]
for(e=0,n=t.length;e<n;++e){
for(s in o=t[e],r=[null!=(i=o.Z)?i:f?f[0]:0,null!=(i=o.X)?i:f?f[1]:0,0],
o)a=o[s],0>"GXZIK".indexOf(s)&&(r[s]=a)
f&&o.G>=2&&null!=o.I&&null!=o.K&&(l=Dt(r,f),u=jt(l),(c=[Lt([o.K,o.I],qt(l))/u,u/2])[0]<0&&(c[0]=-c[0],
c[1]=-c[1]),c[0]+=jt(c),c[1]>0!=(3===o.G)&&(c=qt(c)),f[2]=c[1]/c[0]),h.push(f=r)
}return h}
_t=Vt
var Ut,$t,Wt,Ft,Gt=function(t){var e,n,o,r,i,s,a,l
for(e=[],n=0,r=(o=t.split(/\s*((?!E)[A-Z])\s*/i)).length;n<r;++n)i=n,s=o[n],i%2?"G"===(a=s.toUpperCase())&&e.push(l={}):l&&(l[a]=parseFloat(s))
return _t(e)}
Ut=kt,$t=Gt,Wt=function(t){var e,n
if(!t.length)throw RangeError("No KTEs found")
for(e=0,n=t.length;e<n;++e)if(!t[e].$)throw TypeError("Found KTE without attributes")
for(e=0,n=t.length;e<n;++e)if(t[e]._)return t
throw Error("No geometry information found")}
var Xt=function(t){var e,n,o,r
function i(){var t,n,r,i
if(o=0,!(e.length>Ft.length)){
for(t=0,r=(n=e).length;t<r;++t)if(i=t,n[t]!==Ft[i])return
o=e.length}}return e=[],n=[],(r=new Ut).on("error",(function(t){
throw SyntaxError("Mal-formed XML: "+t)})),r.on("startNode",(function(t,r){
e.push(t),i(),2===o&&n.push({$:r()})})),r.on("endNode",(function(t){
e.length&&e[e.length-1]===t&&(e.pop(),i())})),r.on("textNode",(function(t,e){
var r
3===o&&null==(r=n[n.length-1])._&&(r._=$t(e(t).trim()))})),r.parse(t),Wt(n)}
Ft=["recognition_result","kte","contour"]
var Ht={},Yt=function(){var t,e,n,o="",r=[],i={passive:!0}
function s(e,s,a,l){var u
u="wheel"===n?a:function(t,e){var o=function(t){!t&&(t=window.event)
var o={originalEvent:t,target:t.target||t.srcElement,type:"wheel",
deltaMode:"MozMousePixelScroll"==t.type?0:1,deltaX:0,delatZ:0,
preventDefault:function(){t.preventDefault?t.preventDefault():t.returnValue=!1}}
return"mousewheel"==n?(o.deltaY=-1/40*t.wheelDelta,t.wheelDeltaX&&(o.deltaX=-1/40*t.wheelDeltaX)):o.deltaY=t.detail,
e(o)}
return r.push({element:t,fn:o}),o}(e,a),e[t](o+s,u,!!l&&i)}function a(t,s,a,l){
var u
u="wheel"===n?a:function(t){
for(var e=0;e<r.length;e++)if(r[e].element===t)return r[e].fn
return function(){}}(t),t[e](o+s,u,!!l&&i),function(t){
for(var e=0;e<r.length;e++)if(r[e].element===t)return r.splice(e,1)}(t)}
return window.addEventListener?(t="addEventListener",
e="removeEventListener"):(t="attachEvent",
e="detachEvent",o="on"),n="onwheel"in document.createElement("div")?"wheel":void 0!==document.onmousewheel?"mousewheel":"DOMMouseScroll",
{on:function(t,e,o){
s(t,n,e,o),"DOMMouseScroll"==n&&s(t,"MozMousePixelScroll",e,o)},
off:function(t,e,o){
a(t,n,e,o),"DOMMouseScroll"==n&&a(t,"MozMousePixelScroll",e,o)}}}(),Kt={
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
},throttle:function(t,e,n){var o,r,i,s=this,a=null,l=0
n||(n={})
var u=function(){l=!1===n.leading?0:s.now(),a=null,i=t.apply(o,r),a||(o=r=null)}
return function(){var c=s.now()
l||!1!==n.leading||(l=c)
var f=e-(c-l)
return o=this,r=arguments,f<=0||f>e?(clearTimeout(a),a=null,l=c,i=t.apply(o,r),a||(o=r=null)):a||!1===n.trailing||(a=setTimeout(u,f)),
i}},createRequestAnimationFrame:function(t){var e=null
return"auto"!==t&&t<60&&t>1&&(e=Math.floor(1e3/t)),null===e?window.requestAnimationFrame||Jt(33):Jt(e)
}}
function Jt(t){return function(e){window.setTimeout(e,t)}}var Qt=Kt,te="unknown"
document.documentMode&&(te="ie")
var ee={svgNS:"http://www.w3.org/2000/svg",
xmlNS:"http://www.w3.org/XML/1998/namespace",
xmlnsNS:"http://www.w3.org/2000/xmlns/",xlinkNS:"http://www.w3.org/1999/xlink",
evNS:"http://www.w3.org/2001/xml-events",
getBoundingClientRectNormalized:function(t){
if(t.clientWidth&&t.clientHeight)return{width:t.clientWidth,
height:t.clientHeight}
if(t.getBoundingClientRect())return t.getBoundingClientRect()
throw new Error("Cannot get BoundingClientRect for SVG.")},
getOrCreateViewport:function(t,e){var n=null
if(!(n=Qt.isElement(e)?e:t.querySelector(e))){
var o=Array.prototype.slice.call(t.childNodes||t.children).filter((function(t){
return"defs"!==t.nodeName&&"#text"!==t.nodeName}))
1===o.length&&"g"===o[0].nodeName&&null===o[0].getAttribute("transform")&&(n=o[0])
}if(!n){var r="viewport-"+(new Date).toISOString().replace(/\D/g,"")
;(n=document.createElementNS(this.svgNS,"g")).setAttribute("id",r)
var i=t.childNodes||t.children
if(i&&i.length>0)for(var s=i.length;s>0;s--)"defs"!==i[i.length-s].nodeName&&n.appendChild(i[i.length-s])
t.appendChild(n)}var a=[]
return n.getAttribute("class")&&(a=n.getAttribute("class").split(" ")),~a.indexOf("svg-pan-zoom_viewport")||(a.push("svg-pan-zoom_viewport"),
n.setAttribute("class",a.join(" "))),n},setupSvgAttributes:function(t){
if(t.setAttribute("xmlns",this.svgNS),
t.setAttributeNS(this.xmlnsNS,"xmlns:xlink",this.xlinkNS),
t.setAttributeNS(this.xmlnsNS,"xmlns:ev",this.evNS),null!==t.parentNode){
var e=t.getAttribute("style")||""
;-1===e.toLowerCase().indexOf("overflow")&&t.setAttribute("style","overflow: hidden; "+e)
}},internetExplorerRedisplayInterval:300,
refreshDefsGlobal:Qt.throttle((function(){
for(var t=document.querySelectorAll("defs"),e=t.length,n=0;n<e;n++){var o=t[n]
o.parentNode.insertBefore(o,o)}}),t?t.internetExplorerRedisplayInterval:null),
setCTM:function(t,e,n){
var o=this,r="matrix("+e.a+","+e.b+","+e.c+","+e.d+","+e.e+","+e.f+")"
t.setAttributeNS(null,"transform",r),"transform"in t.style?t.style.transform=r:"-ms-transform"in t.style?t.style["-ms-transform"]=r:"-webkit-transform"in t.style&&(t.style["-webkit-transform"]=r),
"ie"===te&&n&&(n.parentNode.insertBefore(n,n),window.setTimeout((function(){
o.refreshDefsGlobal()}),o.internetExplorerRedisplayInterval))},
getEventPoint:function(t,e){var n=e.createSVGPoint()
return Qt.mouseAndTouchNormalize(t,e),n.x=t.clientX,n.y=t.clientY,n},
getSvgCenterPoint:function(t,e,n){return this.createSVGPoint(t,e/2,n/2)},
createSVGPoint:function(t,e,n){var o=t.createSVGPoint()
return o.x=e,o.y=n,o}},ne=ee,oe={enable:function(t){
var e=t.svg.querySelector("defs")
if(e||(e=document.createElementNS(ne.svgNS,"defs"),t.svg.appendChild(e)),!e.querySelector("style#svg-pan-zoom-controls-styles")){
var n=document.createElementNS(ne.svgNS,"style")
n.setAttribute("id","svg-pan-zoom-controls-styles"),n.setAttribute("type","text/css"),
n.textContent=".svg-pan-zoom-control { cursor: pointer; fill: black; fill-opacity: 0.333; } .svg-pan-zoom-control:hover { fill-opacity: 0.8; } .svg-pan-zoom-control-background { fill: white; fill-opacity: 0.5; } .svg-pan-zoom-control-background { fill-opacity: 0.8; }",
e.appendChild(n)}var o=document.createElementNS(ne.svgNS,"g")
o.setAttribute("id","svg-pan-zoom-controls"),o.setAttribute("transform","translate("+(t.width-70)+" "+(t.height-76)+") scale(0.75)"),
o.setAttribute("class","svg-pan-zoom-control"),
o.appendChild(this._createZoomIn(t)),
o.appendChild(this._createZoomReset(t)),o.appendChild(this._createZoomOut(t)),
t.svg.appendChild(o),t.controlIcons=o},_createZoomIn:function(t){
var e=document.createElementNS(ne.svgNS,"g")
e.setAttribute("id","svg-pan-zoom-zoom-in"),e.setAttribute("transform","translate(30.5 5) scale(0.015)"),
e.setAttribute("class","svg-pan-zoom-control"),
e.addEventListener("click",(function(){t.getPublicInstance().zoomIn()
}),!1),e.addEventListener("touchstart",(function(){
t.getPublicInstance().zoomIn()}),!1)
var n=document.createElementNS(ne.svgNS,"rect")
n.setAttribute("x","0"),n.setAttribute("y","0"),n.setAttribute("width","1500"),n.setAttribute("height","1400"),
n.setAttribute("class","svg-pan-zoom-control-background"),e.appendChild(n)
var o=document.createElementNS(ne.svgNS,"path")
return o.setAttribute("d","M1280 576v128q0 26 -19 45t-45 19h-320v320q0 26 -19 45t-45 19h-128q-26 0 -45 -19t-19 -45v-320h-320q-26 0 -45 -19t-19 -45v-128q0 -26 19 -45t45 -19h320v-320q0 -26 19 -45t45 -19h128q26 0 45 19t19 45v320h320q26 0 45 19t19 45zM1536 1120v-960 q0 -119 -84.5 -203.5t-203.5 -84.5h-960q-119 0 -203.5 84.5t-84.5 203.5v960q0 119 84.5 203.5t203.5 84.5h960q119 0 203.5 -84.5t84.5 -203.5z"),
o.setAttribute("class","svg-pan-zoom-control-element"),e.appendChild(o),e},
_createZoomReset:function(t){var e=document.createElementNS(ne.svgNS,"g")
e.setAttribute("id","svg-pan-zoom-reset-pan-zoom"),e.setAttribute("transform","translate(5 35) scale(0.4)"),
e.setAttribute("class","svg-pan-zoom-control"),
e.addEventListener("click",(function(){t.getPublicInstance().reset()
}),!1),e.addEventListener("touchstart",(function(){t.getPublicInstance().reset()
}),!1)
var n=document.createElementNS(ne.svgNS,"rect")
n.setAttribute("x","2"),n.setAttribute("y","2"),n.setAttribute("width","182"),n.setAttribute("height","58"),
n.setAttribute("class","svg-pan-zoom-control-background"),e.appendChild(n)
var o=document.createElementNS(ne.svgNS,"path")
o.setAttribute("d","M33.051,20.632c-0.742-0.406-1.854-0.609-3.338-0.609h-7.969v9.281h7.769c1.543,0,2.701-0.188,3.473-0.562c1.365-0.656,2.048-1.953,2.048-3.891C35.032,22.757,34.372,21.351,33.051,20.632z"),
o.setAttribute("class","svg-pan-zoom-control-element"),e.appendChild(o)
var r=document.createElementNS(ne.svgNS,"path")
return r.setAttribute("d","M170.231,0.5H15.847C7.102,0.5,0.5,5.708,0.5,11.84v38.861C0.5,56.833,7.102,61.5,15.847,61.5h154.384c8.745,0,15.269-4.667,15.269-10.798V11.84C185.5,5.708,178.976,0.5,170.231,0.5z M42.837,48.569h-7.969c-0.219-0.766-0.375-1.383-0.469-1.852c-0.188-0.969-0.289-1.961-0.305-2.977l-0.047-3.211c-0.03-2.203-0.41-3.672-1.142-4.406c-0.732-0.734-2.103-1.102-4.113-1.102h-7.05v13.547h-7.055V14.022h16.524c2.361,0.047,4.178,0.344,5.45,0.891c1.272,0.547,2.351,1.352,3.234,2.414c0.731,0.875,1.31,1.844,1.737,2.906s0.64,2.273,0.64,3.633c0,1.641-0.414,3.254-1.242,4.84s-2.195,2.707-4.102,3.363c1.594,0.641,2.723,1.551,3.387,2.73s0.996,2.98,0.996,5.402v2.32c0,1.578,0.063,2.648,0.19,3.211c0.19,0.891,0.635,1.547,1.333,1.969V48.569z M75.579,48.569h-26.18V14.022h25.336v6.117H56.454v7.336h16.781v6H56.454v8.883h19.125V48.569z M104.497,46.331c-2.44,2.086-5.887,3.129-10.34,3.129c-4.548,0-8.125-1.027-10.731-3.082s-3.909-4.879-3.909-8.473h6.891c0.224,1.578,0.662,2.758,1.316,3.539c1.196,1.422,3.246,2.133,6.15,2.133c1.739,0,3.151-0.188,4.236-0.562c2.058-0.719,3.087-2.055,3.087-4.008c0-1.141-0.504-2.023-1.512-2.648c-1.008-0.609-2.607-1.148-4.796-1.617l-3.74-0.82c-3.676-0.812-6.201-1.695-7.576-2.648c-2.328-1.594-3.492-4.086-3.492-7.477c0-3.094,1.139-5.664,3.417-7.711s5.623-3.07,10.036-3.07c3.685,0,6.829,0.965,9.431,2.895c2.602,1.93,3.966,4.73,4.093,8.402h-6.938c-0.128-2.078-1.057-3.555-2.787-4.43c-1.154-0.578-2.587-0.867-4.301-0.867c-1.907,0-3.428,0.375-4.565,1.125c-1.138,0.75-1.706,1.797-1.706,3.141c0,1.234,0.561,2.156,1.682,2.766c0.721,0.406,2.25,0.883,4.589,1.43l6.063,1.43c2.657,0.625,4.648,1.461,5.975,2.508c2.059,1.625,3.089,3.977,3.089,7.055C108.157,41.624,106.937,44.245,104.497,46.331z M139.61,48.569h-26.18V14.022h25.336v6.117h-18.281v7.336h16.781v6h-16.781v8.883h19.125V48.569z M170.337,20.14h-10.336v28.43h-7.266V20.14h-10.383v-6.117h27.984V20.14z"),
r.setAttribute("class","svg-pan-zoom-control-element"),e.appendChild(r),e},
_createZoomOut:function(t){var e=document.createElementNS(ne.svgNS,"g")
e.setAttribute("id","svg-pan-zoom-zoom-out"),e.setAttribute("transform","translate(30.5 70) scale(0.015)"),
e.setAttribute("class","svg-pan-zoom-control"),
e.addEventListener("click",(function(){t.getPublicInstance().zoomOut()
}),!1),e.addEventListener("touchstart",(function(){
t.getPublicInstance().zoomOut()}),!1)
var n=document.createElementNS(ne.svgNS,"rect")
n.setAttribute("x","0"),n.setAttribute("y","0"),n.setAttribute("width","1500"),n.setAttribute("height","1400"),
n.setAttribute("class","svg-pan-zoom-control-background"),e.appendChild(n)
var o=document.createElementNS(ne.svgNS,"path")
return o.setAttribute("d","M1280 576v128q0 26 -19 45t-45 19h-896q-26 0 -45 -19t-19 -45v-128q0 -26 19 -45t45 -19h896q26 0 45 19t19 45zM1536 1120v-960q0 -119 -84.5 -203.5t-203.5 -84.5h-960q-119 0 -203.5 84.5t-84.5 203.5v960q0 119 84.5 203.5t203.5 84.5h960q119 0 203.5 -84.5 t84.5 -203.5z"),
o.setAttribute("class","svg-pan-zoom-control-element"),e.appendChild(o),e},
disable:function(t){
t.controlIcons&&(t.controlIcons.parentNode.removeChild(t.controlIcons),
t.controlIcons=null)}},re=ee,ie=Kt,se=function(t,e){this.init(t,e)}
se.prototype.init=function(t,e){
this.viewport=t,this.options=e,this.originalState={zoom:1,x:0,y:0
},this.activeState={zoom:1,x:0,y:0
},this.updateCTMCached=ie.proxy(this.updateCTM,this),
this.requestAnimationFrame=ie.createRequestAnimationFrame(this.options.refreshRate),
this.viewBox={x:0,y:0,width:0,height:0},this.cacheViewBox()
var n=this.processCTM()
this.setCTM(n),this.updateCTM()},se.prototype.cacheViewBox=function(){
var t=this.options.svg.getAttribute("viewBox")
if(t){var e=t.split(/[\s\,]/).filter((function(t){return t})).map(parseFloat)
this.viewBox.x=e[0],this.viewBox.y=e[1],this.viewBox.width=e[2],this.viewBox.height=e[3]
var n=Math.min(this.options.width/this.viewBox.width,this.options.height/this.viewBox.height)
this.activeState.zoom=n,this.activeState.x=(this.options.width-this.viewBox.width*n)/2,
this.activeState.y=(this.options.height-this.viewBox.height*n)/2,
this.updateCTMOnNextFrame(),this.options.svg.removeAttribute("viewBox")
}else this.simpleViewBoxCache()},se.prototype.simpleViewBoxCache=function(){
var t=this.viewport.getBBox()
this.viewBox.x=t.x,this.viewBox.y=t.y,this.viewBox.width=t.width,this.viewBox.height=t.height
},se.prototype.getViewBox=function(){return ie.extend({},this.viewBox)
},se.prototype.processCTM=function(){var t,e=this.getCTM()
;(this.options.fit||this.options.contain)&&(t=this.options.fit?Math.min(this.options.width/this.viewBox.width,this.options.height/this.viewBox.height):Math.max(this.options.width/this.viewBox.width,this.options.height/this.viewBox.height),
e.a=t,e.d=t,e.e=-this.viewBox.x*t,e.f=-this.viewBox.y*t)
if(this.options.center){
var n=.5*(this.options.width-(this.viewBox.width+2*this.viewBox.x)*e.a),o=.5*(this.options.height-(this.viewBox.height+2*this.viewBox.y)*e.a)
e.e=n,e.f=o}
return this.originalState.zoom=e.a,this.originalState.x=e.e,this.originalState.y=e.f,
e},se.prototype.getOriginalState=function(){
return ie.extend({},this.originalState)},se.prototype.getState=function(){
return ie.extend({},this.activeState)},se.prototype.getZoom=function(){
return this.activeState.zoom},se.prototype.getRelativeZoom=function(){
return this.activeState.zoom/this.originalState.zoom
},se.prototype.computeRelativeZoom=function(t){return t/this.originalState.zoom
},se.prototype.getPan=function(){return{x:this.activeState.x,
y:this.activeState.y}},se.prototype.getCTM=function(){
var t=this.options.svg.createSVGMatrix()
return t.a=this.activeState.zoom,t.b=0,t.c=0,t.d=this.activeState.zoom,t.e=this.activeState.x,
t.f=this.activeState.y,t},se.prototype.setCTM=function(t){
var e=this.isZoomDifferent(t),n=this.isPanDifferent(t)
if(e||n){
if(e&&(!1===this.options.beforeZoom(this.getRelativeZoom(),this.computeRelativeZoom(t.a))?(t.a=t.d=this.activeState.zoom,
e=!1):(this.updateCache(t),this.options.onZoom(this.getRelativeZoom()))),n){
var o=this.options.beforePan(this.getPan(),{x:t.e,y:t.f}),r=!1,i=!1
!1===o?(t.e=this.getPan().x,t.f=this.getPan().y,r=i=!0):ie.isObject(o)&&(!1===o.x?(t.e=this.getPan().x,
r=!0):ie.isNumber(o.x)&&(t.e=o.x),
!1===o.y?(t.f=this.getPan().y,i=!0):ie.isNumber(o.y)&&(t.f=o.y)),
r&&i||!this.isPanDifferent(t)?n=!1:(this.updateCache(t),
this.options.onPan(this.getPan()))}(e||n)&&this.updateCTMOnNextFrame()}
},se.prototype.isZoomDifferent=function(t){return this.activeState.zoom!==t.a
},se.prototype.isPanDifferent=function(t){
return this.activeState.x!==t.e||this.activeState.y!==t.f
},se.prototype.updateCache=function(t){
this.activeState.zoom=t.a,this.activeState.x=t.e,this.activeState.y=t.f
},se.prototype.pendingUpdate=!1,se.prototype.updateCTMOnNextFrame=function(){
this.pendingUpdate||(this.pendingUpdate=!0,
this.requestAnimationFrame.call(window,this.updateCTMCached))
},se.prototype.updateCTM=function(){var t=this.getCTM()
re.setCTM(this.viewport,t,this.defs),this.pendingUpdate=!1,this.options.onUpdatedCTM&&this.options.onUpdatedCTM(t)
}
var ae=Yt,le=oe,ue=Kt,ce=ee,fe=function(t,e){return new se(t,e)
},he=function(t,e){this.init(t,e)},pe={
viewportSelector:".svg-pan-zoom_viewport",panEnabled:!0,controlIconsEnabled:!1,
zoomEnabled:!0,dblClickZoomEnabled:!0,mouseWheelZoomEnabled:!0,
preventMouseEventsDefault:!0,zoomScaleSensitivity:.1,minZoom:.5,maxZoom:10,
fit:!0,contain:!1,center:!0,refreshRate:"auto",beforeZoom:null,onZoom:null,
beforePan:null,onPan:null,customEventsHandler:null,eventsListenerElement:null,
onUpdatedCTM:null},de={passive:!0}
he.prototype.init=function(t,e){var n=this
this.svg=t,this.defs=t.querySelector("defs"),ce.setupSvgAttributes(this.svg),this.options=ue.extend(ue.extend({},pe),e),
this.state="none"
var o=ce.getBoundingClientRectNormalized(t)
this.width=o.width,this.height=o.height,this.viewport=fe(ce.getOrCreateViewport(this.svg,this.options.viewportSelector),{
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
r.setOnUpdatedCTM(this.options.onUpdatedCTM),this.options.controlIconsEnabled&&le.enable(this),
this.lastMouseWheelEventTime=Date.now(),this.setupHandlers()
},he.prototype.setupHandlers=function(){var t=this,e=null
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
for(var r in this.eventListeners)(this.options.eventsListenerElement||this.svg).addEventListener(r,this.eventListeners[r],!this.options.preventMouseEventsDefault&&de)
this.options.mouseWheelZoomEnabled&&(this.options.mouseWheelZoomEnabled=!1,this.enableMouseWheelZoom())
},he.prototype.enableMouseWheelZoom=function(){
if(!this.options.mouseWheelZoomEnabled){var t=this
this.wheelListener=function(e){return t.handleMouseWheel(e)}
var e=!this.options.preventMouseEventsDefault
ae.on(this.options.eventsListenerElement||this.svg,this.wheelListener,e),this.options.mouseWheelZoomEnabled=!0
}},he.prototype.disableMouseWheelZoom=function(){
if(this.options.mouseWheelZoomEnabled){
var t=!this.options.preventMouseEventsDefault
ae.off(this.options.eventsListenerElement||this.svg,this.wheelListener,t),this.options.mouseWheelZoomEnabled=!1
}},he.prototype.handleMouseWheel=function(t){
if(this.options.zoomEnabled&&"none"===this.state){
this.options.preventMouseEventsDefault&&(t.preventDefault?t.preventDefault():t.returnValue=!1)
var e=t.deltaY||1,n=Date.now()-this.lastMouseWheelEventTime,o=3+Math.max(0,30-n)
this.lastMouseWheelEventTime=Date.now(),"deltaMode"in t&&0===t.deltaMode&&t.wheelDelta&&(e=0===t.deltaY?0:Math.abs(t.wheelDelta)/t.deltaY),
e=-.3<e&&e<.3?e:(e>0?1:-1)*Math.log(Math.abs(e)+10)/o
var r=this.svg.getScreenCTM().inverse(),i=ce.getEventPoint(t,this.svg).matrixTransform(r),s=Math.pow(1+this.options.zoomScaleSensitivity,-1*e)
this.zoomAtPoint(s,i)}},he.prototype.zoomAtPoint=function(t,e,n){
var o=this.viewport.getOriginalState()
n?(t=Math.max(this.options.minZoom*o.zoom,Math.min(this.options.maxZoom*o.zoom,t)),
t/=this.getZoom()):this.getZoom()*t<this.options.minZoom*o.zoom?t=this.options.minZoom*o.zoom/this.getZoom():this.getZoom()*t>this.options.maxZoom*o.zoom&&(t=this.options.maxZoom*o.zoom/this.getZoom())
var r=this.viewport.getCTM(),i=e.matrixTransform(r.inverse()),s=this.svg.createSVGMatrix().translate(i.x,i.y).scale(t).translate(-i.x,-i.y),a=r.multiply(s)
a.a!==r.a&&this.viewport.setCTM(a)},he.prototype.zoom=function(t,e){
this.zoomAtPoint(t,ce.getSvgCenterPoint(this.svg,this.width,this.height),e)
},he.prototype.publicZoom=function(t,e){
e&&(t=this.computeFromRelativeZoom(t)),this.zoom(t,e)
},he.prototype.publicZoomAtPoint=function(t,e,n){
if(n&&(t=this.computeFromRelativeZoom(t)),"SVGPoint"!==ue.getType(e)){
if(!("x"in e)||!("y"in e))throw new Error("Given point is invalid")
e=ce.createSVGPoint(this.svg,e.x,e.y)}this.zoomAtPoint(t,e,n)
},he.prototype.getZoom=function(){return this.viewport.getZoom()
},he.prototype.getRelativeZoom=function(){return this.viewport.getRelativeZoom()
},he.prototype.computeFromRelativeZoom=function(t){
return t*this.viewport.getOriginalState().zoom
},he.prototype.resetZoom=function(){var t=this.viewport.getOriginalState()
this.zoom(t.zoom,!0)},he.prototype.resetPan=function(){
this.pan(this.viewport.getOriginalState())},he.prototype.reset=function(){
this.resetZoom(),this.resetPan()},he.prototype.handleDblClick=function(t){var e
if((this.options.preventMouseEventsDefault&&(t.preventDefault?t.preventDefault():t.returnValue=!1),
this.options.controlIconsEnabled)&&(t.target.getAttribute("class")||"").indexOf("svg-pan-zoom-control")>-1)return!1
e=t.shiftKey?1/(2*(1+this.options.zoomScaleSensitivity)):2*(1+this.options.zoomScaleSensitivity)
var n=ce.getEventPoint(t,this.svg).matrixTransform(this.svg.getScreenCTM().inverse())
this.zoomAtPoint(e,n)},he.prototype.handleMouseDown=function(t,e){
this.options.preventMouseEventsDefault&&(t.preventDefault?t.preventDefault():t.returnValue=!1),
ue.mouseAndTouchNormalize(t,this.svg),
this.options.dblClickZoomEnabled&&ue.isDblClick(t,e)?this.handleDblClick(t):(this.state="pan",
this.firstEventCTM=this.viewport.getCTM(),
this.stateOrigin=ce.getEventPoint(t,this.svg).matrixTransform(this.firstEventCTM.inverse()))
},he.prototype.handleMouseMove=function(t){
if(this.options.preventMouseEventsDefault&&(t.preventDefault?t.preventDefault():t.returnValue=!1),
"pan"===this.state&&this.options.panEnabled){
var e=ce.getEventPoint(t,this.svg).matrixTransform(this.firstEventCTM.inverse()),n=this.firstEventCTM.translate(e.x-this.stateOrigin.x,e.y-this.stateOrigin.y)
this.viewport.setCTM(n)}},he.prototype.handleMouseUp=function(t){
this.options.preventMouseEventsDefault&&(t.preventDefault?t.preventDefault():t.returnValue=!1),
"pan"===this.state&&(this.state="none")},he.prototype.fit=function(){
var t=this.viewport.getViewBox(),e=Math.min(this.width/t.width,this.height/t.height)
this.zoom(e,!0)},he.prototype.contain=function(){
var t=this.viewport.getViewBox(),e=Math.max(this.width/t.width,this.height/t.height)
this.zoom(e,!0)},he.prototype.center=function(){
var t=this.viewport.getViewBox(),e=.5*(this.width-(t.width+2*t.x)*this.getZoom()),n=.5*(this.height-(t.height+2*t.y)*this.getZoom())
this.getPublicInstance().pan({x:e,y:n})},he.prototype.updateBBox=function(){
this.viewport.simpleViewBoxCache()},he.prototype.pan=function(t){
var e=this.viewport.getCTM()
e.e=t.x,e.f=t.y,this.viewport.setCTM(e)},he.prototype.panBy=function(t){
var e=this.viewport.getCTM()
e.e+=t.x,e.f+=t.y,this.viewport.setCTM(e)},he.prototype.getPan=function(){
var t=this.viewport.getState()
return{x:t.x,y:t.y}},he.prototype.resize=function(){
var t=ce.getBoundingClientRectNormalized(this.svg)
this.width=t.width,this.height=t.height
var e=this.viewport
e.options.width=this.width,e.options.height=this.height,e.processCTM(),this.options.controlIconsEnabled&&(this.getPublicInstance().disableControlIcons(),
this.getPublicInstance().enableControlIcons())},he.prototype.destroy=function(){
var t=this
for(var e in this.beforeZoom=null,this.onZoom=null,this.beforePan=null,this.onPan=null,
this.onUpdatedCTM=null,
null!=this.options.customEventsHandler&&this.options.customEventsHandler.destroy({
svgElement:this.svg,eventsListenerElement:this.options.eventsListenerElement,
instance:this.getPublicInstance()
}),this.eventListeners)(this.options.eventsListenerElement||this.svg).removeEventListener(e,this.eventListeners[e],!this.options.preventMouseEventsDefault&&de)
this.disableMouseWheelZoom(),this.getPublicInstance().disableControlIcons(),this.reset(),
ve=ve.filter((function(e){return e.svg!==t.svg
})),delete this.options,delete this.viewport,
delete this.publicInstance,delete this.pi,this.getPublicInstance=function(){
return null}},he.prototype.getPublicInstance=function(){var t=this
return this.publicInstance||(this.publicInstance=this.pi={enablePan:function(){
return t.options.panEnabled=!0,t.pi},disablePan:function(){
return t.options.panEnabled=!1,t.pi},isPanEnabled:function(){
return!!t.options.panEnabled},pan:function(e){return t.pan(e),t.pi},
panBy:function(e){return t.panBy(e),t.pi},getPan:function(){return t.getPan()},
setBeforePan:function(e){
return t.options.beforePan=null===e?null:ue.proxy(e,t.publicInstance),t.pi},
setOnPan:function(e){
return t.options.onPan=null===e?null:ue.proxy(e,t.publicInstance),t.pi},
enableZoom:function(){return t.options.zoomEnabled=!0,t.pi},
disableZoom:function(){return t.options.zoomEnabled=!1,t.pi},
isZoomEnabled:function(){return!!t.options.zoomEnabled},
enableControlIcons:function(){
return t.options.controlIconsEnabled||(t.options.controlIconsEnabled=!0,
le.enable(t)),t.pi},disableControlIcons:function(){
return t.options.controlIconsEnabled&&(t.options.controlIconsEnabled=!1,
le.disable(t)),t.pi},isControlIconsEnabled:function(){
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
return t.options.beforeZoom=null===e?null:ue.proxy(e,t.publicInstance),t.pi},
setOnZoom:function(e){
return t.options.onZoom=null===e?null:ue.proxy(e,t.publicInstance),t.pi},
zoom:function(e){return t.publicZoom(e,!0),t.pi},zoomBy:function(e){
return t.publicZoom(e,!1),t.pi},zoomAtPoint:function(e,n){
return t.publicZoomAtPoint(e,n,!0),t.pi},zoomAtPointBy:function(e,n){
return t.publicZoomAtPoint(e,n,!1),t.pi},zoomIn:function(){
return this.zoomBy(1+t.options.zoomScaleSensitivity),t.pi},zoomOut:function(){
return this.zoomBy(1/(1+t.options.zoomScaleSensitivity)),t.pi},
getZoom:function(){return t.getRelativeZoom()},setOnUpdatedCTM:function(e){
return t.options.onUpdatedCTM=null===e?null:ue.proxy(e,t.publicInstance),t.pi},
resetZoom:function(){return t.resetZoom(),t.pi},resetPan:function(){
return t.resetPan(),t.pi},reset:function(){return t.reset(),t.pi},
fit:function(){return t.fit(),t.pi},contain:function(){return t.contain(),t.pi},
center:function(){return t.center(),t.pi},updateBBox:function(){
return t.updateBBox(),t.pi},resize:function(){return t.resize(),t.pi},
getSizes:function(){return{width:t.width,height:t.height,realZoom:t.getZoom(),
viewBox:t.viewport.getViewBox()}},destroy:function(){return t.destroy(),t.pi}}),
this.publicInstance}
var ve=[],me=function(t,e){var n=ue.getSvg(t)
if(null===n)return null
for(var o=ve.length-1;o>=0;o--)if(ve[o].svg===n)return ve[o].instance.getPublicInstance()
return ve.push({svg:n,instance:new he(n,e)
}),ve[ve.length-1].instance.getPublicInstance()}
var ge=function(t){var e,n=[]
for(e=0;e<2;++e)n.push(t.slice(0,2))
return n}
var ye,be=function(t,e){var n,o,r=[]
if("number"==typeof e){for(n=0;n<2;++n)o=n,r.push(t[o]*e)
return r}return[t[0]*e[0]-t[1]*e[1],t[0]*e[1]+t[1]*e[0]]}
ye=ge
var we,xe=function(t,e){var n,o,r
if(!t)return ye(e)
for(n=[[],[]],o=0;o<2;++o)r=o,n[0].push(Math.min(t[0][r],e[r])),n[1].push(Math.max(t[1][r],e[r]))
return n}
we=Zt
var Se,Ee=function(t){return we(t.z,t.a)}
Se=It
var Ce,ke=function(t){return Se(t,t)}
Ce=ke
var Me,ze,Ae,Pe,Ne,Te,Ze,Oe=function(t,e){var n,o,r=[]
for(n=0;n<2;++n)o=n,r.push(t[o]+e[o])
return r}
Me=function(t,e){var n,o,r=[]
"number"!=typeof e&&(t=[t[0]*e[0]-t[1]*e[1],t[0]*e[1]+t[1]*e[0]],e=Ce(e))
for(n=0;n<2;++n)o=n,r.push(t[o]/e)
return r},ze=Oe,Ae=be,Pe=Ee,Ne=function(t,e){
return Me(ze(ze(t.a,t.z),Ae(Pe(t),e)),2)},Te=Zt,Ze=Bt
var Ie,Be,De,Le,je,qe,Re,_e,Ve=function(t,e){return Ze(Te(t,e))}
Ie=Ve,Be=ge,De=be,Le=xe,je=Ee,qe=function(t){return Ne(t,[0,(1/t.b-t.b)/2])
},Re=function(t){return Math.abs(1/t.b+t.b)/4*Ie(t.a,t.z)},_e=xe
var Ue,$e,We,Fe=function(t,e){if(!t)return e
if(!e)return t
return _e(_e(t,e[0]),e[1])}
Ue=function(t,e){var n,o,r,i
for(n=0,o=t.length;n<o;++n)r=t[n],i&&e({a:i,b:i[2],z:r}),i=r},$e=function(t){
var e,n,o,r,i,s,a,l,u,c,f
if(e=Le(Be(t.a),t.z),!t.b)return e
for(n=je(t),o=[1,-t.b],o=De(o,o),r=De(n,o),o[0]=-o[0],r.push.apply(r,De(n,o)),r.push.apply(r,n),
r.push(-n[0],-n[1]),i=0,s=r.length;i<s;++i)a=i,l=r[i],r[a]=l?l>0?1:-1:0
for(u=0,i=0;i<=3;++i)r[a=i]&&r[a]!==r[a+4]&&(u|=1<<a%2+r[a]+1)
if(!u)return e
for(c=qe(t),f=Re(t),i=0;i<=3;++i)2===(a=i)&&(f=-f),u&1<<a&&(e[a>>1][1&a]=c[1&a]-f)
return e},We=Fe
var Ge,Xe=function(t){var e
return Ue(t,(function(t){e=We(e,$e(t))})),e}
Ge=Zt
var He,Ye,Ke,Je,Qe,tn,en,nn=function(t){if(t)return Ge(t[1],t[0])}
He=Ht,Ye=Xe,Ke=nn,Je=Bt,Qe=function(t,e){var n,o
for(n=0;n<2;++n)if(t[o=n]!==e[o])return!1
return!0},tn=Ve,en=function(t){return t&&t.length>0&&Qe(t[0],t[t.length-1])}
var on,rn,sn,an,ln,un,cn,fn,hn,pn,dn,vn,mn,gn,yn,bn=function(t){var e,n,o,r,i,s
for(e="",n=0,o=t.length;n<o;++n)r=t[n],e&&(e+=" "),s?s[2]?(i=Math.abs(1/s[2]+s[2])/4*tn(r,s),
e+="A "+i+" "+i+" 0 "+Number(1<Math.abs(s[2]))+" "+Number(s[2]>0)):e+="L":e+="M",
e+=" "+r[0]+" "+r[1],s=r
en(t)&&(e+=" Z")
return e}
on=be,rn=Oe,sn=Zt,an=nn,ln=nn,un=me,cn=r.exports,fn=Ht,hn=function(){
var t,e,n,o,r
for(t=0,n=(e=He.ktes).length;t<n;++t)o=t,(r=e[t]).i=o,r.W=Je(Ke(Ye(r._)))
He.ktes.sort((function(t,e){return e.W-t.W})),console.log(He.ktes)},pn=bn,dn=Fe,
vn=function(t,e){var n
if(t)return n=on(an(t),e-1),[sn(t[0],n),rn(t[1],n)]},mn=function(t){
return[t[0][0],-t[1][1]].concat(ln(t)).join(" ")},gn=Xe
var wn,xn,Sn,En,Cn=function(){hn(),cn.mount(document.body,yn)}
yn={oncreate:function(t){var e
history.pushState({},"View "+fn.name),document.title=document.title.replace(/:.*/,""),
document.title+=": "+fn.name,e=window.onpopstate,window.onpopstate=function(){
window.onpopstate=e,fn.home()},un(t.dom,{controlIconsEnabled:!0})},
view:function(){var t,e,n,o,r,i,s
for(t=0,n=(e=fn.ktes).length;t<n;++t)(o=e[t])._&&(r=dn(r,gn(o._)))
return i=vn(r,1.01),r=dn(r,gn(s=[[i[0][0],0,0],[i[1][0],0,0]])),r=vn(r,1.01),cn("svg",{
xmlns:"http://www.w3.org/2000/svg",viewBox:mn(r)},cn("g",cn("g",{class:"ktes",
transform:"scale(1, -1)"},function(){var t,e,n,r,i,s,a=[]
for(t=0,n=(e=fn.ktes).length;t<n;++t)o=e[t],a.push(cn("path.kte",{
class:"kte-"+(o.i%3+1),d:pn(o._)
},cn("title",(r=o.$,i=void 0,s=void 0,function(){var t,e=[]
for(i in t=r)s=t[i],e.push(i+": "+s)
return e}().join("\n")))))
return a}(),cn("path.axis",{d:pn(s)},cn("title","Axis")))))}},wn=Xt,xn=Ht,Sn=Cn,
En=r.exports
var kn,Mn,zn=async function(t){var e,n,o,r
for(xn.name=null,xn.errors=null,e=0,n=t.length;e<n;++e){o=t[e]
try{return xn.ktes=wn(await o.text()),xn.name=o.name,void setTimeout(Sn)
}catch(t){r=t,null==xn.errors&&(xn.errors={}),xn.errors[o.name]=r.message}}
En.redraw()}
function An(){return!1}kn=r.exports,Mn=zn,Ct.oncreate=function(){var t
;(t=document.body).ondragenter=An,
t.ondragleave=An,t.ondragover=An,t.ondrop=function(t){
return Mn(t.dataTransfer.files),!1}},Ct.view=function(){var t
return t=this,kn.fragment(kn("input.hidden",{type:"file",accept:".xml",
oncreate:function(e){(t.uploadButton=e.dom).onchange=function(){Mn(this.files)}}
}),kn("button",{type:"button",onclick:function(){t.uploadButton.click()}
},"Загрузить результат распознавания!")," ...или перетащите XML-файл в это окно...")
}
var Pn,Nn,Tn,Zn,On,In,Bn,Dn,Ln,jn,qn={}
Pn=r.exports,Nn=e(Object.freeze({__proto__:null,
homepage:"https://github.com/ukoloff/kte"})),Tn=Ht,qn.view=function(){var t
return Pn.fragment(Tn.errors?Pn(Zn):void 0,Pn("h2","Во время просмотра"),Pn("ul",Pn("li","Двигайте изображение мышкой"),Pn("li","Масштабируйте колёсиком мыши"),Pn("li","Наведите мышь на КТЭ, чтобы увидеть дополнительную информацию"),Pn("li","Для возврата из просмотра, обновите страницу (F5) или вернитесь назад (Alt+Left)")),Pn("h3","Примечания"),Pn("ul",Pn("li",Pn("a",{
href:Nn.homepage,target:"_blank"
},"Исходный код"),"@GitHub"),Pn("li","Замечания и предложения по работе визуализатора КТЕ: ",Pn("a",{
href:t=Nn.homepage+"/issues",target:"_blank"},t)),Pn("li",Pn("a",{
href:Nn.homepage+"/tree/main/data",target:"_blank"},"Примеры")," XML-файлов")))
},Zn={view:function(){var t,e
return Pn.fragment(Pn("h3","Ошибки"),Pn("ul",function(){var n,o=[]
for(t in n=Tn.errors)e=n[t],o.push(Pn("li",Pn("b",t),": ",e))
return o}()))}},On=r.exports,In=Ct,Bn=qn,Et.view=function(){
return On.fragment(On("h1",document.title="Визуализация КТЭ"),On("form",On(In)),On(Bn))
},Dn=r.exports,Ln=gt,jn=Et,setTimeout(Ht.home=function(){
Dn.mount(document.head,Ln),Dn.mount(document.body,jn)})}()
//# sourceMappingURL=view.js.map
