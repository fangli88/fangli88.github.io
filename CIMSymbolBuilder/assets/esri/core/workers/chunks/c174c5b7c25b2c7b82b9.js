self.webpackChunkRemoteClient([50],{118:function(t,n,e){"use strict";e.d(n,"a",(function(){return r})),e.d(n,"b",(function(){return o})),e.d(n,"c",(function(){return a})),e.d(n,"d",(function(){return u}));const r=1e-6,o=Math.random,i=Math.PI/180,c=180/Math.PI;function u(t){return t*i}function a(t){return t*c}Object.freeze({__proto__:null,EPSILON:1e-6,RANDOM:o,toRadian:u,toDegree:a,equals:function(t,n){return Math.abs(t-n)<=1e-6*Math.max(1,Math.abs(t),Math.abs(n))}})},665:function(t,n,e){"use strict";e.r(n),e.d(n,"work",(function(){return Z})),e.d(n,"wrappedWork",(function(){return R}));var r=e(70);function o(t,n,e){const o=t.byteLength/(4*n),s=new Uint32Array(t,0,o*n);let f=new Uint32Array(o);const l=e&&e.minReduction||0,d=e&&e.originalIndices||null,h=e&&e.componentOffsets||null;let g=0;if(h)for(let t=0;t<h.length-1;t++){const n=h[t+1]-h[t];n>g&&(g=n)}else g=o;const m=Math.floor(1.1*g)+1;(null==a||a.length<2*m)&&(a=new Uint32Array(Object(r.i)(2*m)));for(let t=0;t<2*m;t++)a[t]=0;let b=0;const M=!!h&&!!d,p=M?d.length:o,w=M?new Uint32Array(d.length):null,O=1.96;let v=0!==l?Math.ceil(7.84*O/(l*l)*l*(1-l)):p,j=1,y=h?h[1]:p;for(let t=0;t<p;t++){if(t===v){const n=1-b/t;if(n+O*Math.sqrt(n*(1-n)/t)<l)return null;v*=2}if(t===y){for(let t=0;t<2*m;t++)a[t]=0;if(d)for(let t=h[j-1];t<h[j];t++)w[t]=f[d[t]];y=h[++j]}const e=M?d[t]:t,r=e*n,o=u(s,r,n);let c=o%m,g=b;for(;0!==a[2*c+1];){if(a[2*c]===o){const t=a[2*c+1]-1;if(i(s,r,t*n,n)){g=f[t];break}}c++,c>=m&&(c-=m)}g===b&&(a[2*c]=o,a[2*c+1]=e+1,b++),f[e]=g}if(0!==l&&1-b/o<l)return null;if(M){for(let t=h[j-1];t<w.length;t++)w[t]=f[d[t]];f=w}const A=new Uint32Array(n*b);b=0;for(let t=0;t<p;t++)f[t]===b&&(c(s,(M?d[t]:t)*n,A,b*n,n),b++);if(d&&!M){const t=new Uint32Array(d.length);for(let n=0;n<t.length;n++)t[n]=f[d[n]];f=t}return{buffer:A.buffer,indices:f,uniqueCount:b}}function i(t,n,e,r){for(let o=0;o<r;o++)if(t[n+o]!==t[e+o])return!1;return!0}function c(t,n,e,r,o){for(let i=0;i<o;i++)e[r+i]=t[n+i]}function u(t,n,e){let r=0;for(let o=0;o<e;o++)r=t[n+o]+r|0,r=r+(r<<11)+(r>>>2)|0;return r>>>0}let a=null;const s={divisor:0};function f(t,n={}){n={...s,...n};const e=t.stride;return t.fieldNames.filter(n=>{const e=t.fields.get(n).optional;return!(e&&e.glPadding)}).map(r=>{const o=t.fields.get(r),i=o.constructor.ElementCount,c=function(t){const n=l[t];if(n)return n;throw new Error("BufferType not supported in WebGL")}(o.constructor.ElementType),u=o.offset,a=!(!o.optional||!o.optional.glNormalized);return{name:r,stride:e,count:i,type:c,offset:u,normalized:a,divisor:n.divisor}})}const l={u8:5121,u16:5123,u32:5125,i8:5120,i16:5122,i32:5124,f32:5126};var d=e(372);const h=Object(d.a)().vec3f("position").u16("componentIndex").u16("_padding"),g=(f(Object(d.a)().vec2u8("sideness")),Object(d.a)().vec3f("position0").vec3f("position1").u16("componentIndex").u8("variantOffset",{glNormalized:!0}).u8("variantStroke").u8("variantExtension",{glNormalized:!0}).u8("_padding",{glPadding:!0}).u16("_padding2",{glPadding:!0})),m=g.clone().vec3f("normal"),b=g.clone().vec3f("normalA").vec3f("normalB");var M=e(44),p=e(73),w=e(76);class O{updateSettings(t){this.settings=t}write(t,n,e){const r=function(t){const n=v;n[0]=t.position0[0],n[1]=t.position0[1],n[2]=t.position0[2],n[3]=t.position1[0],n[4]=t.position1[1],n[5]=t.position1[2],y[0]=5381;for(let t=0;t<j.length;t++)y[0]=31*y[0]+j[t];return y[0]}(e);A.seed=r;const o=A.getIntRange(0,255),i=A.getIntRange(0,this.settings.variants-1),c=A.getFloat(),u=255*(.5*function(t,n){const e=t<0?-1:1;return Math.pow(Math.abs(t),1.2)*e}(-(1-Math.min(c/.7,1))+Math.max(0,c-.7)/(1-.7))+.5);t.position0.setVec(n,e.position0),t.position1.setVec(n,e.position1),t.componentIndex.set(n,e.componentIndex),t.variantOffset.set(n,o),t.variantStroke.set(n,i),t.variantExtension.set(n,u)}trim(t,n){return t.slice(0,n)}}const v=new Float32Array(6),j=new Uint32Array(v.buffer),y=new Uint32Array(1),A=new M.a;class I{constructor(){this.commonWriter=new O}updateSettings(t){this.commonWriter.updateSettings(t)}allocate(t){return m.createBuffer(t)}write(t,n,e){this.commonWriter.write(t,n,e),Object(w.c)(x,e.faceNormal0,e.faceNormal1),Object(w.o)(x,x),t.normal.setVec(n,x)}trim(t,n){return this.commonWriter.trim(t,n)}}I.Layout=m,I.glLayout=f(m,{divisor:1});class N{constructor(){this.commonWriter=new O}updateSettings(t){this.commonWriter.updateSettings(t)}allocate(t){return b.createBuffer(t)}write(t,n,e){this.commonWriter.write(t,n,e),t.normalA.setVec(n,e.faceNormal0),t.normalB.setVec(n,e.faceNormal1)}trim(t,n){return this.commonWriter.trim(t,n)}}N.Layout=b,N.glLayout=f(b,{divisor:1});const x=Object(p.e)();var E=e(274);function _(t,n){return n.push(t.buffer),{buffer:t.buffer,layout:S(t.layout)}}function S(t){const n=new Array;return t.fields.forEach((t,e)=>{const r={...t,constructor:q(t.constructor)};n.push([e,r])}),{stride:t.stride,fields:n,fieldNames:t.fieldNames}}const U=[E.a,E.m,E.u,E.C,E.f,E.h,E.b,E.n,E.v,E.D,E.g,E.i,E.l,E.t,E.B,E.J,E.j,E.r,E.z,E.H,E.k,E.s,E.A,E.I,E.e,E.q,E.y,E.G,E.c,E.o,E.w,E.E,E.d,E.p,E.x,E.F];function q(t){return`${t.ElementType}_${t.ElementCount}`}const V=new Map;function D(t,n){const e=t.length/3,r=new Uint32Array(n+1),o=new Uint32Array(n+1),i=(t,n)=>{t<n?r[t+1]++:o[n+1]++};for(let n=0;n<e;n++){const e=t[3*n],r=t[3*n+1],o=t[3*n+2];i(e,r),i(r,o),i(o,e)}let c=0,u=0;for(let t=0;t<n;t++){const n=r[t+1],e=o[t+1];r[t+1]=c,o[t+1]=u,c+=n,u+=e}const a=new Uint32Array(6*e),s=r[n],f=(t,n,e)=>{if(t<n){const o=r[t+1]++;a[2*o]=n,a[2*o+1]=e}else{const r=o[n+1]++;a[2*s+2*r]=t,a[2*s+2*r+1]=e}};for(let n=0;n<e;n++){const e=t[3*n],r=t[3*n+1],o=t[3*n+2];f(e,r,n),f(r,o,n),f(o,e,n)}const l=(t,n)=>{const e=2*t,r=n-t;for(let t=1;t<r;t++){const n=a[e+2*t],r=a[e+2*t+1];let o=t-1;for(;o>=0&&a[e+2*o]>n;o--)a[e+2*o+2]=a[e+2*o],a[e+2*o+3]=a[e+2*o+1];a[e+2*o+2]=n,a[e+2*o+3]=r}};for(let t=0;t<n;t++)l(r[t],r[t+1]),l(s+o[t],s+o[t+1]);const d=new Int32Array(3*e),h=(n,e)=>n===t[3*e]?0:n===t[3*e+1]?1:n===t[3*e+2]?2:-1,g=(t,n)=>{const e=h(t,n);d[3*n+e]=-1},m=(t,n,e,r)=>{const o=h(t,n);d[3*n+o]=r;const i=h(e,r);d[3*r+i]=n};for(let t=0;t<n;t++){let n=r[t];const e=r[t+1];let i=o[t];const c=o[t+1];for(;n<e&&i<c;){const e=a[2*n],r=a[2*s+2*i];e===r?(m(t,a[2*n+1],r,a[2*s+2*i+1]),n++,i++):e<r?(g(t,a[2*n+1]),n++):(g(r,a[2*s+2*i+1]),i++)}for(;n<e;)g(t,a[2*n+1]),n++;for(;i<c;)g(a[2*s+2*i],a[2*s+2*i+1]),i++}return d}U.forEach(t=>V.set(q(t),t));var L=e(13),k=e(22),P=e(211);function z(t,n){return t.cosAngle<n}function F(t,n){return t.cosAngle>n}function W(t,n){const e=Object(r.a)(t.cosAngle),o=B.fwd,i=B.ortho;return Object(P.c)(o,t.position1,t.position0),e*(Object(w.e)(Object(w.d)(i,t.faceNormal0,t.faceNormal1),o)>0?-1:1)>n}const B={edge:{position0:Object(p.e)(),position1:Object(p.e)(),faceNormal0:Object(p.e)(),faceNormal1:Object(p.e)(),componentIndex:0,cosAngle:0},ortho:Object(p.e)(),fwd:Object(p.e)()},T={v0:Object(p.e)(),v1:Object(p.e)(),v2:Object(p.e)()},C={anglePlanar:4,angleSignificantEdge:35};async function R(t){const n=function(t){return{data:h.createView(t.dataBuffer),originalIndices:"Uint32Array"===t.originalIndicesType?new Uint32Array(t.originalIndicesBuffer):"Uint16Array"===t.originalIndicesType?new Uint16Array(t.originalIndicesBuffer):void 0,writerSettings:t.writerSettings,skipDeduplicate:t.skipDeduplicate}}(t),e=Z(n),r=[n.data.buffer];return{result:function(t,n){return n.push(t.regular.lodInfo.lengths.buffer),n.push(t.silhouette.lodInfo.lengths.buffer),{regular:{instancesData:_(t.regular.instancesData,n),lodInfo:{lengths:t.regular.lodInfo.lengths.buffer}},silhouette:{instancesData:_(t.silhouette.instancesData,n),lodInfo:{lengths:t.silhouette.lodInfo.lengths.buffer}},averageEdgeLength:t.averageEdgeLength}}(e,r),transferList:r}}function Z(t){const n=function(t,n,e){if(n&&e)return{faces:e,neighbors:D(e,t.count),vertices:t};{const n=o(t.buffer,t.stride/4,{originalIndices:e}),r=D(n.indices,n.uniqueCount);return{faces:n.indices,neighbors:r,vertices:h.createView(n.buffer)}}}(t.data,t.skipDeduplicate,t.originalIndices);return X.updateSettings(t.writerSettings),Y.updateSettings(t.writerSettings),function(t,n,e,o=C){const i=t.vertices.position,c=t.vertices.componentIndex,u=Object(r.d)(o.anglePlanar),a=Object(r.d)(o.angleSignificantEdge),s=Math.cos(a),f=Math.cos(u),l=B.edge,d=l.position0,h=l.position1,g=l.faceNormal0,m=l.faceNormal1,b=function(t){const n=t.faces.length/3,e=t.vertices.position,r=t.faces,o=T.v0,i=T.v1,c=T.v2,u=new Float32Array(3*n);for(let t=0;t<n;t++){const n=r[3*t+0],a=r[3*t+1],s=r[3*t+2];e.getVec(n,o),e.getVec(a,i),e.getVec(s,c),Object(w.g)(i,i,o),Object(w.g)(c,c,o),Object(w.d)(o,i,c),Object(w.o)(o,o),u[3*t+0]=o[0],u[3*t+1]=o[1],u[3*t+2]=o[2]}return u}(t),M=function(t){const n=t.faces.length/3,e=t.faces,r=t.neighbors;let o=0;for(let t=0;t<n;t++){const n=r[3*t+0],i=r[3*t+1],c=r[3*t+2],u=e[3*t+0],a=e[3*t+1],s=e[3*t+2];o+=-1===n||u<a?1:0,o+=-1===i||a<s?1:0,o+=-1===c||s<u?1:0}const i=new Int32Array(4*o);let c=0;for(let t=0;t<n;t++){const n=r[3*t+0],o=r[3*t+1],u=r[3*t+2],a=e[3*t+0],s=e[3*t+1],f=e[3*t+2];(-1===n||a<s)&&(i[c++]=a,i[c++]=s,i[c++]=t,i[c++]=n),(-1===o||s<f)&&(i[c++]=s,i[c++]=f,i[c++]=t,i[c++]=o),(-1===u||f<a)&&(i[c++]=f,i[c++]=a,i[c++]=t,i[c++]=u)}return i}(t),p=M.length/4,O=n.allocate(p);let v=0;const j=p,y=e.allocate(j);let A=0,I=0,N=0;const x=Object(k.f)(0,p),E=new Float32Array(p);Object(L.b)(E,(t,n,e)=>{i.getVec(M[4*n+0],d),i.getVec(M[4*n+1],h),e[n]=Object(w.l)(d,h)}),x.sort((t,n)=>E[n]-E[t]);const _=new Array,S=new Array;for(let t=0;t<p;t++){const r=x[t],o=E[r],a=M[4*r+0],p=M[4*r+1],j=M[4*r+2],U=M[4*r+3],q=-1===U;if(i.getVec(a,d),i.getVec(p,h),q)Object(w.r)(g,b[3*j+0],b[3*j+1],b[3*j+2]),Object(w.h)(m,g),l.componentIndex=c.get(a),l.cosAngle=Object(w.e)(g,m);else{if(Object(w.r)(g,b[3*j+0],b[3*j+1],b[3*j+2]),Object(w.r)(m,b[3*U+0],b[3*U+1],b[3*U+2]),l.componentIndex=c.get(a),l.cosAngle=Object(w.e)(g,m),F(l,f))continue;l.cosAngle<-.9999&&Object(w.h)(m,g)}I+=o,N++,q||z(l,s)?(n.write(O,v++,l),_.push(o)):W(l,u)&&(e.write(y,A++,l),S.push(o))}const U=new Float32Array(_.reverse()),q=new Float32Array(S.reverse());return{regular:{instancesData:n.trim(O,v),lodInfo:{lengths:U}},silhouette:{instancesData:e.trim(y,A),lodInfo:{lengths:q}},averageEdgeLength:I/N}}(n,X,Y)}const X=new I,Y=new N},70:function(t,n,e){"use strict";e.d(n,"a",(function(){return h})),e.d(n,"b",(function(){return g})),e.d(n,"c",(function(){return i})),e.d(n,"d",(function(){return l})),e.d(n,"e",(function(){return c})),e.d(n,"f",(function(){return u})),e.d(n,"g",(function(){return f})),e.d(n,"h",(function(){return s})),e.d(n,"i",(function(){return o})),e.d(n,"j",(function(){return a})),e.d(n,"k",(function(){return d}));const r=new Float32Array(1);Number.isFinite,Number.isNaN;function o(t){--t;for(let n=1;n<32;n<<=1)t|=t>>n;return t+1}function i(t,n,e){return t<n?n:t>e?e:t}function c(t,n,e){return Math.min(Math.max(t,n),e)}function u(t){return 0==(t&t-1)}function a(t){return t--,t|=t>>1,t|=t>>2,t|=t>>4,t|=t>>8,t|=t>>16,++t}Math.sign;const s=Math.log2||function(t){return Math.log(t)/Math.LN2};function f(t,n,e){return t+(n-t)*e}function l(t){return t*Math.PI/180}function d(t){return 180*t/Math.PI}function h(t){return Math.acos(i(t,-1,1))}function g(t){return Math.asin(i(t,-1,1))}function m(t){return r[0]=t,r[0]}m(34028234663852886e22)},73:function(t,n,e){"use strict";function r(){return[0,0,0]}function o(t){return[t[0],t[1],t[2]]}function i(t,n,e){return[t,n,e]}function c(t){const n=[0,0,0],e=Math.min(3,t.length);for(let r=0;r<e;++r)n[r]=t[r];return n}function u(t,n){return new Float64Array(t,n,3)}function a(){return i(1,1,1)}function s(){return i(1,0,0)}function f(){return i(0,1,0)}function l(){return i(0,0,1)}e.d(n,"a",(function(){return h})),e.d(n,"b",(function(){return d})),e.d(n,"c",(function(){return u})),e.d(n,"d",(function(){return o})),e.d(n,"e",(function(){return r})),e.d(n,"f",(function(){return c})),e.d(n,"g",(function(){return i}));const d=[0,0,0],h=a(),g=s(),m=f(),b=l();Object.freeze({__proto__:null,create:r,clone:o,fromValues:i,fromArray:c,createView:u,zeros:function(){return[0,0,0]},ones:a,unitX:s,unitY:f,unitZ:l,ZEROS:d,ONES:h,UNIT_X:g,UNIT_Y:m,UNIT_Z:b})},76:function(t,n,e){"use strict";e.d(n,"a",(function(){return l})),e.d(n,"b",(function(){return d})),e.d(n,"c",(function(){return a})),e.d(n,"d",(function(){return p})),e.d(n,"e",(function(){return M})),e.d(n,"f",(function(){return w})),e.d(n,"g",(function(){return s})),e.d(n,"h",(function(){return c})),e.d(n,"i",(function(){return g})),e.d(n,"j",(function(){return O})),e.d(n,"k",(function(){return U})),e.d(n,"l",(function(){return h})),e.d(n,"m",(function(){return i})),e.d(n,"n",(function(){return I})),e.d(n,"o",(function(){return b})),e.d(n,"p",(function(){return m})),e.d(n,"q",(function(){return j})),e.d(n,"r",(function(){return u})),e.d(n,"s",(function(){return v})),e.d(n,"t",(function(){return _}));var r=e(73),o=e(118);function i(t){const n=t[0],e=t[1],r=t[2];return Math.sqrt(n*n+e*e+r*r)}function c(t,n){return t[0]=n[0],t[1]=n[1],t[2]=n[2],t}function u(t,n,e,r){return t[0]=n,t[1]=e,t[2]=r,t}function a(t,n,e){return t[0]=n[0]+e[0],t[1]=n[1]+e[1],t[2]=n[2]+e[2],t}function s(t,n,e){return t[0]=n[0]-e[0],t[1]=n[1]-e[1],t[2]=n[2]-e[2],t}function f(t,n,e){return t[0]=n[0]*e[0],t[1]=n[1]*e[1],t[2]=n[2]*e[2],t}function l(t,n,e){return t[0]=n[0]/e[0],t[1]=n[1]/e[1],t[2]=n[2]/e[2],t}function d(t,n,e){return t[0]=n[0]*e,t[1]=n[1]*e,t[2]=n[2]*e,t}function h(t,n){const e=n[0]-t[0],r=n[1]-t[1],o=n[2]-t[2];return Math.sqrt(e*e+r*r+o*o)}function g(t,n){const e=n[0]-t[0],r=n[1]-t[1],o=n[2]-t[2];return e*e+r*r+o*o}function m(t){const n=t[0],e=t[1],r=t[2];return n*n+e*e+r*r}function b(t,n){const e=n[0],r=n[1],o=n[2];let i=e*e+r*r+o*o;return i>0&&(i=1/Math.sqrt(i),t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i),t}function M(t,n){return t[0]*n[0]+t[1]*n[1]+t[2]*n[2]}function p(t,n,e){const r=n[0],o=n[1],i=n[2],c=e[0],u=e[1],a=e[2];return t[0]=o*a-i*u,t[1]=i*c-r*a,t[2]=r*u-o*c,t}function w(t,n,e,r){const o=n[0],i=n[1],c=n[2];return t[0]=o+r*(e[0]-o),t[1]=i+r*(e[1]-i),t[2]=c+r*(e[2]-c),t}function O(t,n,e){const r=n[0],o=n[1],i=n[2];return t[0]=e[0]*r+e[4]*o+e[8]*i+e[12],t[1]=e[1]*r+e[5]*o+e[9]*i+e[13],t[2]=e[2]*r+e[6]*o+e[10]*i+e[14],t}function v(t,n,e){const r=n[0],o=n[1],i=n[2];return t[0]=r*e[0]+o*e[3]+i*e[6],t[1]=r*e[1]+o*e[4]+i*e[7],t[2]=r*e[2]+o*e[5]+i*e[8],t}function j(t,n,e){const r=e[0],o=e[1],i=e[2],c=e[3],u=n[0],a=n[1],s=n[2];let f=o*s-i*a,l=i*u-r*s,d=r*a-o*u,h=o*d-i*l,g=i*f-r*d,m=r*l-o*f;const b=2*c;return f*=b,l*=b,d*=b,h*=2,g*=2,m*=2,t[0]=u+f+h,t[1]=a+l+g,t[2]=s+d+m,t}const y=Object(r.e)(),A=Object(r.e)();function I(t,n){return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]}let N=s,x=f,E=l,_=h,S=g,U=i,q=m;Object.freeze({__proto__:null,length:i,copy:c,set:u,add:a,subtract:s,multiply:f,divide:l,ceil:function(t,n){return t[0]=Math.ceil(n[0]),t[1]=Math.ceil(n[1]),t[2]=Math.ceil(n[2]),t},floor:function(t,n){return t[0]=Math.floor(n[0]),t[1]=Math.floor(n[1]),t[2]=Math.floor(n[2]),t},min:function(t,n,e){return t[0]=Math.min(n[0],e[0]),t[1]=Math.min(n[1],e[1]),t[2]=Math.min(n[2],e[2]),t},max:function(t,n,e){return t[0]=Math.max(n[0],e[0]),t[1]=Math.max(n[1],e[1]),t[2]=Math.max(n[2],e[2]),t},round:function(t,n){return t[0]=Math.round(n[0]),t[1]=Math.round(n[1]),t[2]=Math.round(n[2]),t},scale:d,scaleAndAdd:function(t,n,e,r){return t[0]=n[0]+e[0]*r,t[1]=n[1]+e[1]*r,t[2]=n[2]+e[2]*r,t},distance:h,squaredDistance:g,squaredLength:m,negate:function(t,n){return t[0]=-n[0],t[1]=-n[1],t[2]=-n[2],t},inverse:function(t,n){return t[0]=1/n[0],t[1]=1/n[1],t[2]=1/n[2],t},normalize:b,dot:M,cross:p,lerp:w,hermite:function(t,n,e,r,o,i){const c=i*i,u=c*(2*i-3)+1,a=c*(i-2)+i,s=c*(i-1),f=c*(3-2*i);return t[0]=n[0]*u+e[0]*a+r[0]*s+o[0]*f,t[1]=n[1]*u+e[1]*a+r[1]*s+o[1]*f,t[2]=n[2]*u+e[2]*a+r[2]*s+o[2]*f,t},bezier:function(t,n,e,r,o,i){const c=1-i,u=c*c,a=i*i,s=u*c,f=3*i*u,l=3*a*c,d=a*i;return t[0]=n[0]*s+e[0]*f+r[0]*l+o[0]*d,t[1]=n[1]*s+e[1]*f+r[1]*l+o[1]*d,t[2]=n[2]*s+e[2]*f+r[2]*l+o[2]*d,t},random:function(t,n){n=n||1;const e=2*Object(o.b)()*Math.PI,r=2*Object(o.b)()-1,i=Math.sqrt(1-r*r)*n;return t[0]=Math.cos(e)*i,t[1]=Math.sin(e)*i,t[2]=r*n,t},transformMat4:O,transformMat3:v,transformQuat:j,rotateX:function(t,n,e,r){const o=[],i=[];return o[0]=n[0]-e[0],o[1]=n[1]-e[1],o[2]=n[2]-e[2],i[0]=o[0],i[1]=o[1]*Math.cos(r)-o[2]*Math.sin(r),i[2]=o[1]*Math.sin(r)+o[2]*Math.cos(r),t[0]=i[0]+e[0],t[1]=i[1]+e[1],t[2]=i[2]+e[2],t},rotateY:function(t,n,e,r){const o=[],i=[];return o[0]=n[0]-e[0],o[1]=n[1]-e[1],o[2]=n[2]-e[2],i[0]=o[2]*Math.sin(r)+o[0]*Math.cos(r),i[1]=o[1],i[2]=o[2]*Math.cos(r)-o[0]*Math.sin(r),t[0]=i[0]+e[0],t[1]=i[1]+e[1],t[2]=i[2]+e[2],t},rotateZ:function(t,n,e,r){const o=[],i=[];return o[0]=n[0]-e[0],o[1]=n[1]-e[1],o[2]=n[2]-e[2],i[0]=o[0]*Math.cos(r)-o[1]*Math.sin(r),i[1]=o[0]*Math.sin(r)+o[1]*Math.cos(r),i[2]=o[2],t[0]=i[0]+e[0],t[1]=i[1]+e[1],t[2]=i[2]+e[2],t},angle:function(t,n){c(y,t),c(A,n),b(y,y),b(A,A);const e=M(y,A);return e>1?0:e<-1?Math.PI:Math.acos(e)},str:function(t){return"vec3("+t[0]+", "+t[1]+", "+t[2]+")"},exactEquals:I,equals:function(t,n){const e=t[0],r=t[1],i=t[2],c=n[0],u=n[1],a=n[2];return Math.abs(e-c)<=o.a*Math.max(1,Math.abs(e),Math.abs(c))&&Math.abs(r-u)<=o.a*Math.max(1,Math.abs(r),Math.abs(u))&&Math.abs(i-a)<=o.a*Math.max(1,Math.abs(i),Math.abs(a))},sub:N,mul:x,div:E,dist:_,sqrDist:S,len:U,sqrLen:q})}});