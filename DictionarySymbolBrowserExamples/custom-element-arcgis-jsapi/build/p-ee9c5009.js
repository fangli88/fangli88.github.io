import{o as n}from"./p-098cc742.js";var r=n((function(n){var r,t=(r="undefined"!=typeof document&&document.currentScript?document.currentScript.src:void 0,function(n){var t,e=void 0!==(n=n||{})?n:{},u={};for(t in e)e.hasOwnProperty(t)&&(u[t]=e[t]);var i,o,a="./this.program";i="object"==typeof window,o="function"==typeof importScripts,"object"==typeof process&&"object"==typeof process.versions&&process;var f,c="";(i||o)&&(o?c=self.location.href:document.currentScript&&(c=document.currentScript.src),r&&(c=r),c=0!==c.indexOf("blob:")?c.substr(0,c.lastIndexOf("/")+1):"",o&&(f=function(n){var r=new XMLHttpRequest;return r.open("GET",n,!1),r.responseType="arraybuffer",r.send(null),new Uint8Array(r.response)}));var l,s,v=e.print||console.log.bind(console),d=e.printErr||console.warn.bind(console);for(t in u)u.hasOwnProperty(t)&&(e[t]=u[t]);u=null,e.thisProgram&&(a=e.thisProgram),e.wasmBinary&&(l=e.wasmBinary),"object"!=typeof WebAssembly&&d("no native wasm support detected");var y=new WebAssembly.Table({initial:904,maximum:904,element:"anyfunc"}),m=!1,p="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0;function w(n,r,t){for(var e=r+t,u=r;n[u]&&!(u>=e);)++u;if(u-r>16&&n.subarray&&p)return p.decode(n.subarray(r,u));for(var i="";r<u;){var o=n[r++];if(128&o){var a=63&n[r++];if(192!=(224&o)){var f=63&n[r++];if((o=224==(240&o)?(15&o)<<12|a<<6|f:(7&o)<<18|a<<12|f<<6|63&n[r++])<65536)i+=String.fromCharCode(o);else{var c=o-65536;i+=String.fromCharCode(55296|c>>10,56320|1023&c)}}else i+=String.fromCharCode((31&o)<<6|a)}else i+=String.fromCharCode(o)}return i}function g(n,r){return n?w(T,n,r):""}function _(n,r,t,e){if(!(e>0))return 0;for(var u=t,i=t+e-1,o=0;o<n.length;++o){var a=n.charCodeAt(o);if(a>=55296&&a<=57343&&(a=65536+((1023&a)<<10)|1023&n.charCodeAt(++o)),a<=127){if(t>=i)break;r[t++]=a}else if(a<=2047){if(t+1>=i)break;r[t++]=192|a>>6,r[t++]=128|63&a}else if(a<=65535){if(t+2>=i)break;r[t++]=224|a>>12,r[t++]=128|a>>6&63,r[t++]=128|63&a}else{if(t+3>=i)break;r[t++]=240|a>>18,r[t++]=128|a>>12&63,r[t++]=128|a>>6&63,r[t++]=128|63&a}}return r[t]=0,t-u}function h(n){for(var r=0,t=0;t<n.length;++t){var e=n.charCodeAt(t);e>=55296&&e<=57343&&(e=65536+((1023&e)<<10)|1023&n.charCodeAt(++t)),e<=127?++r:r+=e<=2047?2:e<=65535?3:4}return r}var b,A,T,W,k,E,F,S,M,D="undefined"!=typeof TextDecoder?new TextDecoder("utf-16le"):void 0;function P(n){for(var r=n,t=r>>1;W[t];)++t;if((r=t<<1)-n>32&&D)return D.decode(T.subarray(n,r));for(var e=0,u="";;){var i=W[n+2*e>>1];if(0==i)return u;++e,u+=String.fromCharCode(i)}}function C(n,r,t){if(void 0===t&&(t=2147483647),t<2)return 0;for(var e=r,u=(t-=2)<2*n.length?t/2:n.length,i=0;i<u;++i){var o=n.charCodeAt(i);W[r>>1]=o,r+=2}return W[r>>1]=0,r-e}function O(n){return 2*n.length}function U(n){for(var r=0,t="";;){var e=E[n+4*r>>2];if(0==e)return t;if(++r,e>=65536){var u=e-65536;t+=String.fromCharCode(55296|u>>10,56320|1023&u)}else t+=String.fromCharCode(e)}}function x(n,r,t){if(void 0===t&&(t=2147483647),t<4)return 0;for(var e=r,u=e+t-4,i=0;i<n.length;++i){var o=n.charCodeAt(i);if(o>=55296&&o<=57343&&(o=65536+((1023&o)<<10)|1023&n.charCodeAt(++i)),E[r>>2]=o,(r+=4)+4>u)break}return E[r>>2]=0,r-e}function j(n){for(var r=0,t=0;t<n.length;++t){var e=n.charCodeAt(t);e>=55296&&e<=57343&&++t,r+=4}return r}function I(n){b=n,e.HEAP8=A=new Int8Array(n),e.HEAP16=W=new Int16Array(n),e.HEAP32=E=new Int32Array(n),e.HEAPU8=T=new Uint8Array(n),e.HEAPU16=k=new Uint16Array(n),e.HEAPU32=F=new Uint32Array(n),e.HEAPF32=S=new Float32Array(n),e.HEAPF64=M=new Float64Array(n)}var V=e.INITIAL_MEMORY||16777216;function H(n){for(;n.length>0;){var r=n.shift();if("function"!=typeof r){var t=r.func;"number"==typeof t?void 0===r.arg?e.dynCall_v(t):e.dynCall_vi(t,r.arg):t(void 0===r.arg?null:r.arg)}else r(e)}}(s=e.wasmMemory?e.wasmMemory:new WebAssembly.Memory({initial:V/65536,maximum:32768}))&&(b=s.buffer),V=b.byteLength,I(b),E[12616]=5293504;var R=[],z=[],B=[],N=[],Y=Math.ceil,G=Math.floor,J=0,L=null;function X(n){throw e.onAbort&&e.onAbort(n),v(n+=""),d(n),m=!0,n="abort("+n+"). Build with -s ASSERTIONS=1 for more info.",new WebAssembly.RuntimeError(n)}function q(n){return r=n,t="data:application/octet-stream;base64,",String.prototype.startsWith?r.startsWith(t):0===r.indexOf(t);var r,t}e.preloadedImages={},e.preloadedAudios={};var Z,$="i3s.wasm";function K(){try{if(l)return new Uint8Array(l);if(f)return f($);throw"both async and sync fetching of the wasm failed"}catch(n){X(n)}}function Q(n){return E[Gn()>>2]=n,n}q($)||(Z=$,$=e.locateFile?e.locateFile(Z,c):c+Z),z.push({func:function(){Bn()}});var nn={mappings:{},buffers:[null,[],[]],printChar:function(n,r){var t=nn.buffers[n];0===r||10===r?((1===n?v:d)(w(t,0)),t.length=0):t.push(r)},varargs:void 0,get:function(){return nn.varargs+=4,E[nn.varargs-4>>2]},getStr:function(n){return g(n)},get64:function(n){return n}},rn={};function tn(n){for(;n.length;){var r=n.pop();n.pop()(r)}}function en(n){return this.fromWireType(F[n>>2])}var un={},on={},an={};function fn(n){if(void 0===n)return"_unknown";var r=(n=n.replace(/[^a-zA-Z0-9_]/g,"$")).charCodeAt(0);return r>=48&&r<=57?"_"+n:n}function cn(n,r){return n=fn(n),new Function("body","return function "+n+'() {\n    "use strict";    return body.apply(this, arguments);\n};\n')(r)}function ln(n,r){var t=cn(r,(function(n){this.name=r,this.message=n;var t=new Error(n).stack;void 0!==t&&(this.stack=this.toString()+"\n"+t.replace(/^Error(:[^\n]*)?\n/,""))}));return t.prototype=Object.create(n.prototype),t.prototype.constructor=t,t.prototype.toString=function(){return void 0===this.message?this.name:this.name+": "+this.message},t}var sn=void 0;function vn(n){throw new sn(n)}function dn(n,r,t){function e(r){var e=t(r);e.length!==n.length&&vn("Mismatched type converter count");for(var u=0;u<n.length;++u)_n(n[u],e[u])}n.forEach((function(n){an[n]=r}));var u=new Array(r.length),i=[],o=0;r.forEach((function(n,r){on.hasOwnProperty(n)?u[r]=on[n]:(i.push(n),un.hasOwnProperty(n)||(un[n]=[]),un[n].push((function(){u[r]=on[n],++o===i.length&&e(u)})))})),0===i.length&&e(u)}function yn(n){switch(n){case 1:return 0;case 2:return 1;case 4:return 2;case 8:return 3;default:throw new TypeError("Unknown type size: "+n)}}var mn=void 0;function pn(n){for(var r="",t=n;T[t];)r+=mn[T[t++]];return r}var wn=void 0;function gn(n){throw new wn(n)}function _n(n,r,t){if(t=t||{},!("argPackAdvance"in r))throw new TypeError("registerType registeredInstance requires argPackAdvance");var e=r.name;if(n||gn('type "'+e+'" must have a positive integer typeid pointer'),on.hasOwnProperty(n)){if(t.ignoreDuplicateRegistrations)return;gn("Cannot register type '"+e+"' twice")}if(on[n]=r,delete an[n],un.hasOwnProperty(n)){var u=un[n];delete un[n],u.forEach((function(n){n()}))}}var hn=[],bn=[{},{value:void 0},{value:null},{value:!0},{value:!1}];function An(n){n>4&&0==--bn[n].refcount&&(bn[n]=void 0,hn.push(n))}function Tn(n){switch(n){case void 0:return 1;case null:return 2;case!0:return 3;case!1:return 4;default:var r=hn.length?hn.pop():bn.length;return bn[r]={refcount:1,value:n},r}}function Wn(n){if(null===n)return"null";var r=typeof n;return"object"===r||"array"===r||"function"===r?n.toString():""+n}function kn(n,r){switch(r){case 2:return function(n){return this.fromWireType(S[n>>2])};case 3:return function(n){return this.fromWireType(M[n>>3])};default:throw new TypeError("Unknown float type: "+n)}}function En(n,r){n=pn(n);var t=function(t){for(var e=[],u=1;u<n.length;++u)e.push("a"+u);var i="return function dynCall_"+n+"_"+r+"("+e.join(", ")+") {\n";return i+="    return dynCall(rawFunction"+(e.length?", ":"")+e.join(", ")+");\n",i+="};\n",new Function("dynCall","rawFunction",i)(t,r)}(e["dynCall_"+n]);return"function"!=typeof t&&gn("unknown function pointer with signature "+n+": "+r),t}var Fn=void 0;function Sn(n){var r=Jn(n),t=pn(r);return Yn(r),t}function Mn(n,r,t){switch(r){case 0:return t?function(n){return A[n]}:function(n){return T[n]};case 1:return t?function(n){return W[n>>1]}:function(n){return k[n>>1]};case 2:return t?function(n){return E[n>>2]}:function(n){return F[n>>2]};default:throw new TypeError("Unknown integer type: "+n)}}var Dn={};function Pn(n){try{return s.grow(n-b.byteLength+65535>>>16),I(s.buffer),1}catch(n){}}var Cn={};function On(){if(!On.strings){var n={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:("object"==typeof navigator&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",_:a||"./this.program"};for(var r in Cn)n[r]=Cn[r];var t=[];for(var r in n)t.push(r+"="+n[r]);On.strings=t}return On.strings}function Un(n){return n%4==0&&(n%100!=0||n%400==0)}function xn(n,r){for(var t=0,e=0;e<=r;t+=n[e++]);return t}var jn=[31,29,31,30,31,30,31,31,30,31,30,31],In=[31,28,31,30,31,30,31,31,30,31,30,31];function Vn(n,r){for(var t=new Date(n.getTime());r>0;){var e=Un(t.getFullYear()),u=t.getMonth(),i=(e?jn:In)[u];if(!(r>i-t.getDate()))return t.setDate(t.getDate()+r),t;r-=i-t.getDate()+1,t.setDate(1),u<11?t.setMonth(u+1):(t.setMonth(0),t.setFullYear(t.getFullYear()+1))}return t}sn=e.InternalError=ln(Error,"InternalError"),function(){for(var n=new Array(256),r=0;r<256;++r)n[r]=String.fromCharCode(r);mn=n}(),wn=e.BindingError=ln(Error,"BindingError"),e.count_emval_handles=function(){for(var n=0,r=5;r<bn.length;++r)void 0!==bn[r]&&++n;return n},e.get_first_emval=function(){for(var n=5;n<bn.length;++n)if(void 0!==bn[n])return bn[n];return null},Fn=e.UnboundTypeError=ln(Error,"UnboundTypeError");var Hn={__cxa_allocate_exception:function(n){return Nn(n)},__cxa_atexit:function(){},__cxa_throw:function(n){throw n},__map_file:function(){return Q(63),-1},__sys_munmap:function(n,r){return function(n,r){if(-1==(0|n)||0===r)return-28;var t=nn.mappings[n];return t?(r===t.len&&(nn.mappings[n]=null,t.allocated&&Yn(t.malloc)),0):0}(n,r)},_embind_finalize_value_object:function(n){var r=rn[n];delete rn[n];var t=r.rawConstructor,e=r.rawDestructor,u=r.fields;dn([n],u.map((function(n){return n.getterReturnType})).concat(u.map((function(n){return n.setterArgumentType}))),(function(n){var i={};return u.forEach((function(r,t){var e=n[t],o=r.getter,a=r.getterContext,f=n[t+u.length],c=r.setter,l=r.setterContext;i[r.fieldName]={read:function(n){return e.fromWireType(o(a,n))},write:function(n,r){var t=[];c(l,n,f.toWireType(t,r)),tn(t)}}})),[{name:r.name,fromWireType:function(n){var r={};for(var t in i)r[t]=i[t].read(n);return e(n),r},toWireType:function(n,r){for(var u in i)if(!(u in r))throw new TypeError("Missing field");var o=t();for(u in i)i[u].write(o,r[u]);return null!==n&&n.push(e,o),o},argPackAdvance:8,readValueFromPointer:en,destructorFunction:e}]}))},_embind_register_bool:function(n,r,t,e,u){var i=yn(t);_n(n,{name:r=pn(r),fromWireType:function(n){return!!n},toWireType:function(n,r){return r?e:u},argPackAdvance:8,readValueFromPointer:function(n){var e;if(1===t)e=A;else if(2===t)e=W;else{if(4!==t)throw new TypeError("Unknown boolean type size: "+r);e=E}return this.fromWireType(e[n>>i])},destructorFunction:null})},_embind_register_emval:function(n,r){_n(n,{name:r=pn(r),fromWireType:function(n){var r=bn[n].value;return An(n),r},toWireType:function(n,r){return Tn(r)},argPackAdvance:8,readValueFromPointer:en,destructorFunction:null})},_embind_register_float:function(n,r,t){var e=yn(t);_n(n,{name:r=pn(r),fromWireType:function(n){return n},toWireType:function(n,r){if("number"!=typeof r&&"boolean"!=typeof r)throw new TypeError('Cannot convert "'+Wn(r)+'" to '+this.name);return r},argPackAdvance:8,readValueFromPointer:kn(r,e),destructorFunction:null})},_embind_register_function:function(n,r,t,u,i,o){var a=function(n,r){for(var t=[],e=0;e<n;e++)t.push(E[(r>>2)+e]);return t}(r,t);n=pn(n),i=En(u,i),function(n,r,t){e.hasOwnProperty(n)?((void 0===t||void 0!==e[n].overloadTable&&void 0!==e[n].overloadTable[t])&&gn("Cannot register public name '"+n+"' twice"),function(n,r,t){if(void 0===n[r].overloadTable){var e=n[r];n[r]=function(){return n[r].overloadTable.hasOwnProperty(arguments.length)||gn("Function '"+t+"' called with an invalid number of arguments ("+arguments.length+") - expects one of ("+n[r].overloadTable+")!"),n[r].overloadTable[arguments.length].apply(this,arguments)},n[r].overloadTable=[],n[r].overloadTable[e.argCount]=e}}(e,n,n),e.hasOwnProperty(t)&&gn("Cannot register multiple overloads of a function with the same number of arguments ("+t+")!"),e[n].overloadTable[t]=r):(e[n]=r,void 0!==t&&(e[n].numArguments=t))}(n,(function(){!function(n,r){var t=[],e={};throw r.forEach((function n(r){e[r]||on[r]||(an[r]?an[r].forEach(n):(t.push(r),e[r]=!0))})),new Fn(n+": "+t.map(Sn).join([", "]))}("Cannot call "+n+" due to unbound types",a)}),r-1),dn([],a,(function(t){var u=[t[0],null].concat(t.slice(1));return function(n,r,t){e.hasOwnProperty(n)||vn("Replacing nonexistant public symbol"),void 0!==e[n].overloadTable&&void 0!==t?e[n].overloadTable[t]=r:(e[n]=r,e[n].argCount=t)}(n,function(n,r,t,e,u){var i=r.length;i<2&&gn("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var o=null!==r[1]&&!1,a=!1,f=1;f<r.length;++f)if(null!==r[f]&&void 0===r[f].destructorFunction){a=!0;break}var c="void"!==r[0].name,l="",s="";for(f=0;f<i-2;++f)l+=(0!==f?", ":"")+"arg"+f,s+=(0!==f?", ":"")+"arg"+f+"Wired";var v="return function "+fn(n)+"("+l+") {\nif (arguments.length !== "+(i-2)+") {\nthrowBindingError('function "+n+" called with ' + arguments.length + ' arguments, expected "+(i-2)+" args!');\n}\n";a&&(v+="var destructors = [];\n");var d=a?"destructors":"null",y=["throwBindingError","invoker","fn","runDestructors","retType","classParam"],m=[gn,e,u,tn,r[0],r[1]];for(o&&(v+="var thisWired = classParam.toWireType("+d+", this);\n"),f=0;f<i-2;++f)v+="var arg"+f+"Wired = argType"+f+".toWireType("+d+", arg"+f+"); // "+r[f+2].name+"\n",y.push("argType"+f),m.push(r[f+2]);if(o&&(s="thisWired"+(s.length>0?", ":"")+s),v+=(c?"var rv = ":"")+"invoker(fn"+(s.length>0?", ":"")+s+");\n",a)v+="runDestructors(destructors);\n";else for(f=o?1:2;f<r.length;++f){var p=1===f?"thisWired":"arg"+(f-2)+"Wired";null!==r[f].destructorFunction&&(v+=p+"_dtor("+p+"); // "+r[f].name+"\n",y.push(p+"_dtor"),m.push(r[f].destructorFunction))}return c&&(v+="var ret = retType.fromWireType(rv);\nreturn ret;\n"),y.push(v+="}\n"),function(n,r){if(!(n instanceof Function))throw new TypeError("new_ called with constructor type "+typeof n+" which is not a function");var t=cn(n.name||"unknownFunctionName",(function(){}));t.prototype=n.prototype;var e=new t,u=n.apply(e,r);return u instanceof Object?u:e}(Function,y).apply(null,m)}(n,u,0,i,o),r-1),[]}))},_embind_register_integer:function(n,r,t,e,u){r=pn(r),-1===u&&(u=4294967295);var i=yn(t),o=function(n){return n};if(0===e){var a=32-8*t;o=function(n){return n<<a>>>a}}var f=-1!=r.indexOf("unsigned");_n(n,{name:r,fromWireType:o,toWireType:function(n,t){if("number"!=typeof t&&"boolean"!=typeof t)throw new TypeError('Cannot convert "'+Wn(t)+'" to '+this.name);if(t<e||t>u)throw new TypeError('Passing a number "'+Wn(t)+'" from JS side to C/C++ side to an argument of type "'+r+'", which is outside the valid range ['+e+", "+u+"]!");return f?t>>>0:0|t},argPackAdvance:8,readValueFromPointer:Mn(r,i,0!==e),destructorFunction:null})},_embind_register_memory_view:function(n,r,t){var e=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array][r];function u(n){var r=F[n>>=2];return new e(b,F[n+1],r)}_n(n,{name:t=pn(t),fromWireType:u,argPackAdvance:8,readValueFromPointer:u},{ignoreDuplicateRegistrations:!0})},_embind_register_std_string:function(n,r){var t="std::string"===(r=pn(r));_n(n,{name:r,fromWireType:function(n){var r,e=F[n>>2];if(t){var u=T[n+4+e],i=0;0!=u&&(i=u,T[n+4+e]=0);for(var o=n+4,a=0;a<=e;++a){var f=n+4+a;if(0==T[f]){var c=g(o);void 0===r?r=c:(r+=String.fromCharCode(0),r+=c),o=f+1}}0!=i&&(T[n+4+e]=i)}else{var l=new Array(e);for(a=0;a<e;++a)l[a]=String.fromCharCode(T[n+4+a]);r=l.join("")}return Yn(n),r},toWireType:function(n,r){r instanceof ArrayBuffer&&(r=new Uint8Array(r));var e="string"==typeof r;e||r instanceof Uint8Array||r instanceof Uint8ClampedArray||r instanceof Int8Array||gn("Cannot pass non-string to std::string");var u=(t&&e?function(){return h(r)}:function(){return r.length})(),i=Nn(4+u+1);if(F[i>>2]=u,t&&e)_(r,T,i+4,u+1);else if(e)for(var o=0;o<u;++o){var a=r.charCodeAt(o);a>255&&(Yn(i),gn("String has UTF-16 code units that do not fit in 8 bits")),T[i+4+o]=a}else for(o=0;o<u;++o)T[i+4+o]=r[o];return null!==n&&n.push(Yn,i),i},argPackAdvance:8,readValueFromPointer:en,destructorFunction:function(n){Yn(n)}})},_embind_register_std_wstring:function(n,r,t){var e,u,i,o,a;t=pn(t),2===r?(e=P,u=C,o=O,i=function(){return k},a=1):4===r&&(e=U,u=x,o=j,i=function(){return F},a=2),_n(n,{name:t,fromWireType:function(n){var t,u=F[n>>2],o=i(),f=o[n+4+u*r>>a],c=0;0!=f&&(c=f,o[n+4+u*r>>a]=0);for(var l=n+4,s=0;s<=u;++s){var v=n+4+s*r;if(0==o[v>>a]){var d=e(l);void 0===t?t=d:(t+=String.fromCharCode(0),t+=d),l=v+r}}return 0!=c&&(o[n+4+u*r>>a]=c),Yn(n),t},toWireType:function(n,e){"string"!=typeof e&&gn("Cannot pass non-string to C++ string type "+t);var i=o(e),f=Nn(4+i+r);return F[f>>2]=i>>a,u(e,f+4,i+r),null!==n&&n.push(Yn,f),f},argPackAdvance:8,readValueFromPointer:en,destructorFunction:function(n){Yn(n)}})},_embind_register_value_object:function(n,r,t,e,u,i){rn[n]={name:pn(r),rawConstructor:En(t,e),rawDestructor:En(u,i),fields:[]}},_embind_register_value_object_field:function(n,r,t,e,u,i,o,a,f,c){rn[n].fields.push({fieldName:pn(r),getterReturnType:t,getter:En(e,u),getterContext:i,setterArgumentType:o,setter:En(a,f),setterContext:c})},_embind_register_void:function(n,r){_n(n,{isVoid:!0,name:r=pn(r),argPackAdvance:0,fromWireType:function(){},toWireType:function(){}})},_emval_decref:An,_emval_incref:function(n){n>4&&(bn[n].refcount+=1)},_emval_new_cstring:function(n){return Tn(void 0===(t=Dn[r=n])?pn(r):t);var r,t},_emval_take_value:function(n,r){var t,e;return void 0===(e=on[t=n])&&gn("_emval_take_value has unknown type "+Sn(t)),Tn((n=e).readValueFromPointer(r))},abort:function(){X()},emscripten_get_sbrk_ptr:function(){return 50464},emscripten_memcpy_big:function(n,r,t){T.copyWithin(n,r,r+t)},emscripten_resize_heap:function(n){var r=T.length,t=2147483648;if((n>>>=0)>t)return!1;for(var e,u=1;u<=4;u*=2){var i=r*(1+.2/u);if(i=Math.min(i,n+100663296),Pn(Math.min(t,((e=Math.max(16777216,n,i))%65536>0&&(e+=65536-e%65536),e))))return!0}return!1},environ_get:function(n,r){var t=0;return On().forEach((function(e,u){var i=r+t;E[n+4*u>>2]=i,function(n,r){for(var t=0;t<n.length;++t)A[r++>>0]=n.charCodeAt(t);A[r>>0]=0}(e,i),t+=e.length+1})),0},environ_sizes_get:function(n,r){var t=On();E[n>>2]=t.length;var e=0;return t.forEach((function(n){e+=n.length+1})),E[r>>2]=e,0},fd_close:function(){return 0},fd_seek:function(){},fd_write:function(n,r,t,e){for(var u=0,i=0;i<t;i++){for(var o=E[r+8*i>>2],a=E[r+(8*i+4)>>2],f=0;f<a;f++)nn.printChar(n,T[o+f]);u+=a}return E[e>>2]=u,0},memory:s,raise:function(){return Q(52),-1},round:function(n){return(n=+n)>=0?+G(n+.5):+Y(n-.5)},roundf:function(n){return(n=+n)>=0?+G(n+.5):+Y(n-.5)},setTempRet0:function(){},strftime_l:function(n,r,t,e){return function(n,r,t,e){var u=E[e+40>>2],i={tm_sec:E[e>>2],tm_min:E[e+4>>2],tm_hour:E[e+8>>2],tm_mday:E[e+12>>2],tm_mon:E[e+16>>2],tm_year:E[e+20>>2],tm_wday:E[e+24>>2],tm_yday:E[e+28>>2],tm_isdst:E[e+32>>2],tm_gmtoff:E[e+36>>2],tm_zone:u?g(u):""},o=g(t),a={"%c":"%a %b %d %H:%M:%S %Y","%D":"%m/%d/%y","%F":"%Y-%m-%d","%h":"%b","%r":"%I:%M:%S %p","%R":"%H:%M","%T":"%H:%M:%S","%x":"%m/%d/%y","%X":"%H:%M:%S","%Ec":"%c","%EC":"%C","%Ex":"%m/%d/%y","%EX":"%H:%M:%S","%Ey":"%y","%EY":"%Y","%Od":"%d","%Oe":"%e","%OH":"%H","%OI":"%I","%Om":"%m","%OM":"%M","%OS":"%S","%Ou":"%u","%OU":"%U","%OV":"%V","%Ow":"%w","%OW":"%W","%Oy":"%y"};for(var f in a)o=o.replace(new RegExp(f,"g"),a[f]);var c=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],l=["January","February","March","April","May","June","July","August","September","October","November","December"];function s(n,r,t){for(var e="number"==typeof n?n.toString():n||"";e.length<r;)e=t[0]+e;return e}function v(n,r){return s(n,r,"0")}function d(n,r){function t(n){return n<0?-1:n>0?1:0}var e;return 0===(e=t(n.getFullYear()-r.getFullYear()))&&0===(e=t(n.getMonth()-r.getMonth()))&&(e=t(n.getDate()-r.getDate())),e}function y(n){switch(n.getDay()){case 0:return new Date(n.getFullYear()-1,11,29);case 1:return n;case 2:return new Date(n.getFullYear(),0,3);case 3:return new Date(n.getFullYear(),0,2);case 4:return new Date(n.getFullYear(),0,1);case 5:return new Date(n.getFullYear()-1,11,31);case 6:return new Date(n.getFullYear()-1,11,30)}}function m(n){var r=Vn(new Date(n.tm_year+1900,0,1),n.tm_yday),t=new Date(r.getFullYear(),0,4),e=new Date(r.getFullYear()+1,0,4),u=y(t),i=y(e);return d(u,r)<=0?d(i,r)<=0?r.getFullYear()+1:r.getFullYear():r.getFullYear()-1}var p={"%a":function(n){return c[n.tm_wday].substring(0,3)},"%A":function(n){return c[n.tm_wday]},"%b":function(n){return l[n.tm_mon].substring(0,3)},"%B":function(n){return l[n.tm_mon]},"%C":function(n){return v((n.tm_year+1900)/100|0,2)},"%d":function(n){return v(n.tm_mday,2)},"%e":function(n){return s(n.tm_mday,2," ")},"%g":function(n){return m(n).toString().substring(2)},"%G":function(n){return m(n)},"%H":function(n){return v(n.tm_hour,2)},"%I":function(n){var r=n.tm_hour;return 0==r?r=12:r>12&&(r-=12),v(r,2)},"%j":function(n){return v(n.tm_mday+xn(Un(n.tm_year+1900)?jn:In,n.tm_mon-1),3)},"%m":function(n){return v(n.tm_mon+1,2)},"%M":function(n){return v(n.tm_min,2)},"%n":function(){return"\n"},"%p":function(n){return n.tm_hour>=0&&n.tm_hour<12?"AM":"PM"},"%S":function(n){return v(n.tm_sec,2)},"%t":function(){return"\t"},"%u":function(n){return n.tm_wday||7},"%U":function(n){var r=new Date(n.tm_year+1900,0,1),t=0===r.getDay()?r:Vn(r,7-r.getDay()),e=new Date(n.tm_year+1900,n.tm_mon,n.tm_mday);if(d(t,e)<0){var u=xn(Un(e.getFullYear())?jn:In,e.getMonth()-1)-31,i=31-t.getDate()+u+e.getDate();return v(Math.ceil(i/7),2)}return 0===d(t,r)?"01":"00"},"%V":function(n){var r,t=new Date(n.tm_year+1900,0,4),e=new Date(n.tm_year+1901,0,4),u=y(t),i=y(e),o=Vn(new Date(n.tm_year+1900,0,1),n.tm_yday);return d(o,u)<0?"53":d(i,o)<=0?"01":(r=u.getFullYear()<n.tm_year+1900?n.tm_yday+32-u.getDate():n.tm_yday+1-u.getDate(),v(Math.ceil(r/7),2))},"%w":function(n){return n.tm_wday},"%W":function(n){var r=new Date(n.tm_year,0,1),t=1===r.getDay()?r:Vn(r,0===r.getDay()?1:7-r.getDay()+1),e=new Date(n.tm_year+1900,n.tm_mon,n.tm_mday);if(d(t,e)<0){var u=xn(Un(e.getFullYear())?jn:In,e.getMonth()-1)-31,i=31-t.getDate()+u+e.getDate();return v(Math.ceil(i/7),2)}return 0===d(t,r)?"01":"00"},"%y":function(n){return(n.tm_year+1900).toString().substring(2)},"%Y":function(n){return n.tm_year+1900},"%z":function(n){var r=n.tm_gmtoff,t=r>=0;return r=(r=Math.abs(r)/60)/60*100+r%60,(t?"+":"-")+String("0000"+r).slice(-4)},"%Z":function(n){return n.tm_zone},"%%":function(){return"%"}};for(var f in p)o.indexOf(f)>=0&&(o=o.replace(new RegExp(f,"g"),p[f](i)));var w,b,T,W=(b=h(w=o)+1,_(w,T=new Array(b),0,T.length),T);return W.length>r?0:(function(n,r){A.set(n,r)}(W,n),W.length-1)}(n,r,t,e)},table:y},Rn=function(){var n={env:Hn,wasi_snapshot_preview1:Hn};function r(n){e.asm=n.exports,function(){if(J--,e.monitorRunDependencies&&e.monitorRunDependencies(J),0==J&&L){var n=L;L=null,n()}}()}function t(n){r(n.instance)}function u(r){return(l||!i&&!o||"function"!=typeof fetch?new Promise((function(n){n(K())})):fetch($,{credentials:"same-origin"}).then((function(n){if(!n.ok)throw"failed to load wasm binary file at '"+$+"'";return n.arrayBuffer()})).catch((function(){return K()}))).then((function(r){return WebAssembly.instantiate(r,n)})).then(r,(function(n){d("failed to asynchronously prepare wasm: "+n),X(n)}))}if(J++,e.monitorRunDependencies&&e.monitorRunDependencies(J),e.instantiateWasm)try{return e.instantiateWasm(n,r)}catch(n){return d("Module.instantiateWasm callback failed with error: "+n),!1}return function(){if(l||"function"!=typeof WebAssembly.instantiateStreaming||q($)||"function"!=typeof fetch)return u(t);fetch($,{credentials:"same-origin"}).then((function(r){return WebAssembly.instantiateStreaming(r,n).then(t,(function(n){d("wasm streaming compile failed: "+n),d("falling back to ArrayBuffer instantiation"),u(t)}))}))}(),{}}();e.asm=Rn;var zn,Bn=e.___wasm_call_ctors=function(){return(Bn=e.___wasm_call_ctors=e.asm.__wasm_call_ctors).apply(null,arguments)},Nn=e._malloc=function(){return(Nn=e._malloc=e.asm.malloc).apply(null,arguments)},Yn=e._free=function(){return(Yn=e._free=e.asm.free).apply(null,arguments)},Gn=e.___errno_location=function(){return(Gn=e.___errno_location=e.asm.__errno_location).apply(null,arguments)},Jn=(e._setThrew=function(){return(e._setThrew=e.asm.setThrew).apply(null,arguments)},e.___getTypeName=function(){return(Jn=e.___getTypeName=e.asm.__getTypeName).apply(null,arguments)});function Ln(){function n(){zn||(zn=!0,e.calledRun=!0,m||(H(z),H(B),e.onRuntimeInitialized&&e.onRuntimeInitialized(),function(){if(e.postRun)for("function"==typeof e.postRun&&(e.postRun=[e.postRun]);e.postRun.length;)n=e.postRun.shift(),N.unshift(n);var n;H(N)}()))}J>0||(function(){if(e.preRun)for("function"==typeof e.preRun&&(e.preRun=[e.preRun]);e.preRun.length;)n=e.preRun.shift(),R.unshift(n);var n;H(R)}(),J>0||(e.setStatus?(e.setStatus("Running..."),setTimeout((function(){setTimeout((function(){e.setStatus("")}),1),n()}),1)):n()))}if(e.___embind_register_native_and_builtin_types=function(){return(e.___embind_register_native_and_builtin_types=e.asm.__embind_register_native_and_builtin_types).apply(null,arguments)},e.stackSave=function(){return(e.stackSave=e.asm.stackSave).apply(null,arguments)},e.stackAlloc=function(){return(e.stackAlloc=e.asm.stackAlloc).apply(null,arguments)},e.stackRestore=function(){return(e.stackRestore=e.asm.stackRestore).apply(null,arguments)},e.__growWasmMemory=function(){return(e.__growWasmMemory=e.asm.__growWasmMemory).apply(null,arguments)},e.dynCall_ii=function(){return(e.dynCall_ii=e.asm.dynCall_ii).apply(null,arguments)},e.dynCall_i=function(){return(e.dynCall_i=e.asm.dynCall_i).apply(null,arguments)},e.dynCall_vi=function(){return(e.dynCall_vi=e.asm.dynCall_vi).apply(null,arguments)},e.dynCall_dii=function(){return(e.dynCall_dii=e.asm.dynCall_dii).apply(null,arguments)},e.dynCall_viid=function(){return(e.dynCall_viid=e.asm.dynCall_viid).apply(null,arguments)},e.dynCall_fii=function(){return(e.dynCall_fii=e.asm.dynCall_fii).apply(null,arguments)},e.dynCall_viif=function(){return(e.dynCall_viif=e.asm.dynCall_viif).apply(null,arguments)},e.dynCall_iii=function(){return(e.dynCall_iii=e.asm.dynCall_iii).apply(null,arguments)},e.dynCall_viii=function(){return(e.dynCall_viii=e.asm.dynCall_viii).apply(null,arguments)},e.dynCall_vii=function(){return(e.dynCall_vii=e.asm.dynCall_vii).apply(null,arguments)},e.dynCall_viiiii=function(){return(e.dynCall_viiiii=e.asm.dynCall_viiiii).apply(null,arguments)},e.dynCall_viiii=function(){return(e.dynCall_viiii=e.asm.dynCall_viiii).apply(null,arguments)},e.dynCall_iiiiiiiiidiii=function(){return(e.dynCall_iiiiiiiiidiii=e.asm.dynCall_iiiiiiiiidiii).apply(null,arguments)},e.dynCall_iiiiiiiidiii=function(){return(e.dynCall_iiiiiiiidiii=e.asm.dynCall_iiiiiiiidiii).apply(null,arguments)},e.dynCall_iiii=function(){return(e.dynCall_iiii=e.asm.dynCall_iiii).apply(null,arguments)},e.dynCall_v=function(){return(e.dynCall_v=e.asm.dynCall_v).apply(null,arguments)},e.dynCall_vij=function(){return(e.dynCall_vij=e.asm.dynCall_vij).apply(null,arguments)},e.dynCall_iiiiiiii=function(){return(e.dynCall_iiiiiiii=e.asm.dynCall_iiiiiiii).apply(null,arguments)},e.dynCall_iiiii=function(){return(e.dynCall_iiiii=e.asm.dynCall_iiiii).apply(null,arguments)},e.dynCall_iif=function(){return(e.dynCall_iif=e.asm.dynCall_iif).apply(null,arguments)},e.dynCall_viijii=function(){return(e.dynCall_viijii=e.asm.dynCall_viijii).apply(null,arguments)},e.dynCall_iiiiii=function(){return(e.dynCall_iiiiii=e.asm.dynCall_iiiiii).apply(null,arguments)},e.dynCall_viiiiiiddi=function(){return(e.dynCall_viiiiiiddi=e.asm.dynCall_viiiiiiddi).apply(null,arguments)},e.dynCall_iiiiiii=function(){return(e.dynCall_iiiiiii=e.asm.dynCall_iiiiiii).apply(null,arguments)},e.dynCall_jiji=function(){return(e.dynCall_jiji=e.asm.dynCall_jiji).apply(null,arguments)},e.dynCall_iidiiii=function(){return(e.dynCall_iidiiii=e.asm.dynCall_iidiiii).apply(null,arguments)},e.dynCall_iiiiiiiii=function(){return(e.dynCall_iiiiiiiii=e.asm.dynCall_iiiiiiiii).apply(null,arguments)},e.dynCall_iiiiij=function(){return(e.dynCall_iiiiij=e.asm.dynCall_iiiiij).apply(null,arguments)},e.dynCall_iiiiid=function(){return(e.dynCall_iiiiid=e.asm.dynCall_iiiiid).apply(null,arguments)},e.dynCall_iiiiijj=function(){return(e.dynCall_iiiiijj=e.asm.dynCall_iiiiijj).apply(null,arguments)},e.dynCall_iiiiiijj=function(){return(e.dynCall_iiiiiijj=e.asm.dynCall_iiiiiijj).apply(null,arguments)},e.dynCall_viiiiii=function(){return(e.dynCall_viiiiii=e.asm.dynCall_viiiiii).apply(null,arguments)},e.asm=Rn,e.then=function(n){if(zn)n(e);else{var r=e.onRuntimeInitialized;e.onRuntimeInitialized=function(){r&&r(),n(e)}}return e},L=function n(){zn||Ln(),zn||(L=n)},e.run=Ln,e.preInit)for("function"==typeof e.preInit&&(e.preInit=[e.preInit]);e.preInit.length>0;)e.preInit.pop()();return Ln(),n});n.exports=t})),t=Object.freeze(Object.assign(Object.create(null),r,{default:r}));export{t as i}