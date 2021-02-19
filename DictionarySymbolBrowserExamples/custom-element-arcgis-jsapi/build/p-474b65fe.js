import{l as t,el as e,em as i,cL as n,b7 as o,t as r,d5 as s,b as a,en as c,cp as l,eo as u,ep as h,ed as d,eq as f,er as m,k as v,D as p,Z as g,dr as x,Q as b,e1 as w,aB as y,ds as _,es as S,T as A,et as M,h as C,W as T,al as O,m as P,d1 as L,aF as F,eu as D,cw as z,bz as R,a5 as I,i as N,d as E,R as B,U as V,aw as G}from"./p-ab028778.js";import{n as H}from"./p-90b773f8.js";import{o as k}from"./p-3cd8f347.js";import{t as U}from"./p-dc697c54.js";import{u as $,r as j,n as W,t as q,f as X,e as K}from"./p-abda1e64.js";import{r as Q,c as Z,d as Y,z as J,u as tt,x as et,s as it,_ as nt,o as ot,y as rt,j as st,F as at,q as ct,I as lt,p as ut,L as ht,i as dt}from"./p-a8e713de.js";import{h as ft,r as mt,f as vt,o as pt,u as gt,c as xt,q as bt,i as wt}from"./p-fb40af74.js";import{d as yt,q as _t,i as St,h as At,A as Mt}from"./p-4561de0e.js";import{p as Ct,x as Tt,a as Ot,u as Pt,A as Lt,n as Ft,r as Dt,s as zt,t as Rt,F as It,g as Nt,h as Et,I as Bt,w as Vt,v as Gt,e as Ht,M as kt,L as Ut,O as $t,E as jt}from"./p-a8cda886.js";import{d as Wt,a as qt,w as Xt,q as Kt}from"./p-fa359158.js";import{y as Qt}from"./p-749423b3.js";import{a as Zt,t as Yt,b as Jt,o as te,c as ee,d as ie,y as ne}from"./p-82888562.js";import{a as oe,b as re,t as se,e as ae,I as ce,c as le}from"./p-99dce4fa.js";function ue(t,e,i=32774,n=[0,0,0,0]){return{srcRgb:t,srcAlpha:t,dstRgb:e,dstAlpha:e,opRgb:i,opAlpha:i,color:{r:n[0],g:n[1],b:n[2],a:n[3]}}}const he={zNear:0,zFar:1},de={r:!0,g:!0,b:!0,a:!0};function fe(t){return Se.intern(t)}function me(t){return Me.intern(t)}function ve(t){return Te.intern(t)}function pe(t){return Pe.intern(t)}function ge(t){return Fe.intern(t)}function xe(t){return ze.intern(t)}function be(t){return Ie.intern(t)}function we(t){return Ee.intern(t)}class ye{constructor(t,e){this.makeKey=t,this.makeRef=e,this.interns=new Map}intern(t){if(!t)return null;const e=this.makeKey(t),i=this.interns;return i.has(e)||i.set(e,this.makeRef(t)),i.get(e)}}function _e(t){return"["+t.join(",")+"]"}const Se=new ye(Ae,(t=>({__tag:"Blending",...t})));function Ae(t){return t?_e([t.srcRgb,t.srcAlpha,t.dstRgb,t.dstAlpha,t.opRgb,t.opAlpha,t.color.r,t.color.g,t.color.b,t.color.a]):null}const Me=new ye(Ce,(t=>({__tag:"Culling",...t})));function Ce(t){return t?_e([t.face,t.mode]):null}const Te=new ye(Oe,(t=>({__tag:"PolygonOffset",...t})));function Oe(t){return t?_e([t.factor,t.units]):null}const Pe=new ye(Le,(t=>({__tag:"DepthTest",...t})));function Le(t){return t?_e([t.func]):null}const Fe=new ye(De,(t=>({__tag:"StencilTest",...t})));function De(t){return t?_e([t.function.func,t.function.ref,t.function.mask,t.operation.fail,t.operation.zFail,t.operation.zPass]):null}const ze=new ye(Re,(t=>({__tag:"DepthWrite",...t})));function Re(t){return t?_e([t.zNear,t.zFar]):null}const Ie=new ye(Ne,(t=>({__tag:"ColorWrite",...t})));function Ne(t){return t?_e([t.r,t.g,t.b,t.a]):null}const Ee=new ye(Be,(t=>({__tag:"StencilWrite",...t})));function Be(t){return t?_e([t.mask]):null}const Ve=new ye((function(t){return t?_e([Ae(t.blending),Ce(t.culling),Oe(t.polygonOffset),Le(t.depthTest),De(t.stencilTest),Re(t.depthWrite),Ne(t.colorWrite),Be(t.stencilWrite)]):null}),(t=>({blending:fe(t.blending),culling:me(t.culling),polygonOffset:ve(t.polygonOffset),depthTest:pe(t.depthTest),stencilTest:ge(t.stencilTest),depthWrite:xe(t.depthWrite),colorWrite:be(t.colorWrite),stencilWrite:we(t.stencilWrite)})));function Ge(t){return[t[0],t[1],t[2],t[3],t[4],t[5],t[6],t[7],t[8],t[9],t[10],t[11],t[12],t[13],t[14],t[15]]}function He(t,e){return new Float64Array(t,e,16)}Object.freeze({__proto__:null,create:function(){return[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]},clone:Ge,fromValues:function(t,e,i,n,o,r,s,a,c,l,u,h,d,f,m,v){return[t,e,i,n,o,r,s,a,c,l,u,h,d,f,m,v]},createView:He,IDENTITY:[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]});const ke=t.getLogger("esri.views.3d.support.buffer.math");function Ue(t,e,i){if(t.count!==e.count)return void ke.error("source and destination buffers need to have the same number of elements");const n=t.count,o=i[0],r=i[1],s=i[2],a=i[4],c=i[5],l=i[6],u=i[8],h=i[9],d=i[10],f=i[12],m=i[13],v=i[14],p=t.typedBuffer,g=t.typedBufferStride,x=e.typedBuffer,b=e.typedBufferStride;for(let t=0;t<n;t++){const e=t*g,i=t*b,n=x[i],w=x[i+1],y=x[i+2];p[e]=o*n+a*w+u*y+f,p[e+1]=r*n+c*w+h*y+m,p[e+2]=s*n+l*w+d*y+v}}function $e(t,e,i){if(t.count!==e.count)return void ke.error("source and destination buffers need to have the same number of elements");const n=t.count,o=i[0],r=i[1],s=i[2],a=i[3],c=i[4],l=i[5],u=i[6],h=i[7],d=i[8],f=t.typedBuffer,m=t.typedBufferStride,v=e.typedBuffer,p=e.typedBufferStride;for(let t=0;t<n;t++){const e=t*m,i=t*p,n=v[i],g=v[i+1],x=v[i+2];f[e]=o*n+a*g+u*x,f[e+1]=r*n+c*g+h*x,f[e+2]=s*n+l*g+d*x}}function je(t,e,i){const n=Math.min(t.count,e.count),o=t.typedBuffer,r=t.typedBufferStride,s=e.typedBuffer,a=e.typedBufferStride;for(let t=0;t<n;t++){const e=t*r,n=t*a;o[e]=i*s[n],o[e+1]=i*s[n+1],o[e+2]=i*s[n+2]}}Object.freeze({__proto__:null,transformMat4:Ue,transformMat3:$e,scale:je,shiftRight:function(t,e,i){const n=Math.min(t.count,e.count),o=t.typedBuffer,r=t.typedBufferStride,s=e.typedBuffer,a=e.typedBufferStride;for(let t=0;t<n;t++){const e=t*r,n=t*a;o[e]=s[n]>>i,o[e+1]=s[n+1]>>i,o[e+2]=s[n+2]>>i}}});class We{constructor(t){this.allocator=t,this.items=[],this.itemsPtr=0,this.tickHandle=e.before((()=>this.reset())),this.grow()}destroy(){this.tickHandle&&(this.tickHandle.remove(),this.tickHandle=i()),this.items=i()}get(){return 0===this.itemsPtr&&e((()=>{})),this.itemsPtr===this.items.length&&this.grow(),this.items[this.itemsPtr++]}reset(){const t=Math.min(3*Math.max(8,this.itemsPtr),this.itemsPtr+3*qe);this.items.length=Math.min(t,this.items.length),this.itemsPtr=0}grow(){for(let t=0;t<Math.max(8,Math.min(this.items.length,qe));t++)this.items.push(this.allocator())}}const qe=1024;function Xe(t,e,i,n){return[t,e,i,n]}function Ke(t,e){return new Float64Array(t,e,4)}function Qe(){return Xe(1,1,1,1)}function Ze(){return Xe(1,0,0,0)}function Ye(){return Xe(0,1,0,0)}function Je(){return Xe(0,0,1,0)}function ti(){return Xe(0,0,0,1)}const ei=Qe(),ii=Ze(),ni=Ye(),oi=Je(),ri=ti();Object.freeze({__proto__:null,create:function(){return[0,0,0,0]},clone:function(t){return[t[0],t[1],t[2],t[3]]},fromValues:Xe,fromArray:function(t){const e=[0,0,0,0],i=Math.min(4,t.length);for(let n=0;n<i;++n)e[n]=t[n];return e},createView:Ke,zeros:function(){return[0,0,0,0]},ones:Qe,unitX:Ze,unitY:Ye,unitZ:Je,unitW:ti,ZEROS:[0,0,0,0],ONES:ei,UNIT_X:ii,UNIT_Y:ni,UNIT_Z:oi,UNIT_W:ri});class si{constructor(t,i,n){this.itemByteSize=t,this.itemCreate=i,this.buffers=[],this.items=[],this.itemsPerBuffer=0,this.itemsPtr=0,this.itemsPerBuffer=Math.ceil(n/this.itemByteSize),this.tickHandle=e.before((()=>this.reset()))}destroy(){this.tickHandle&&(this.tickHandle.remove(),this.tickHandle=i()),this.itemsPtr=0,this.items=i(),this.buffers=i()}get(){0===this.itemsPtr&&e((()=>{}));const t=Math.floor(this.itemsPtr/this.itemsPerBuffer);for(;this.buffers.length<=t;){const t=new ArrayBuffer(this.itemsPerBuffer*this.itemByteSize);for(let e=0;e<this.itemsPerBuffer;++e)this.items.push(this.itemCreate(t,e*this.itemByteSize));this.buffers.push(t)}return this.items[this.itemsPtr++]}reset(){const t=2*(Math.floor(this.itemsPtr/this.itemsPerBuffer)+1);for(;this.buffers.length>t;)this.buffers.pop(),this.items.length=this.buffers.length*this.itemsPerBuffer;this.itemsPtr=0}static createVec2f64(t=ai){return new si(16,Zt,t)}static createVec3f64(t=ai){return new si(24,$,t)}static createVec4f64(t=ai){return new si(32,Ke,t)}static createMat3f64(t=ai){return new si(72,oe,t)}static createMat4f64(t=ai){return new si(128,He,t)}static createQuatf64(t=ai){return new si(32,re,t)}get test(){return{size:this.buffers.length*this.itemsPerBuffer*this.itemByteSize}}}const ai=4096,ci=(si.createVec2f64(),si.createVec3f64()),li=si.createVec4f64(),ui=(si.createMat3f64(),si.createMat4f64());function hi(t){return t?{origin:j(t.origin),vector:j(t.vector)}:{origin:W(),vector:W()}}function di(t,e){const i=xi.get();return i.origin=t,i.vector=e,i}function fi(t,e,i=hi()){return Q(i.origin,t),Q(i.vector,e),i}function mi(t,e){const i=Z(ci.get(),e,t.origin),o=J(t.vector,i),r=J(t.vector,t.vector),s=n(o/r,0,1),a=Z(ci.get(),Y(ci.get(),t.vector,s),i);return J(a,a)}function vi(t,e,i,o,r){const{vector:s,origin:a}=t,c=Z(ci.get(),e,a),l=it(s),u=J(s,c)/l;return Y(r,s,n(u,i,o)),tt(r,r,t.origin)}function pi(t,e,i,o){const r=1e-6,s=t.origin,a=tt(ci.get(),s,t.vector),c=e.origin,l=tt(ci.get(),c,e.vector),u=ci.get(),h=ci.get();if(u[0]=s[0]-c[0],u[1]=s[1]-c[1],u[2]=s[2]-c[2],h[0]=l[0]-c[0],h[1]=l[1]-c[1],h[2]=l[2]-c[2],Math.abs(h[0])<r&&Math.abs(h[1])<r&&Math.abs(h[2])<r)return!1;const d=ci.get();if(d[0]=a[0]-s[0],d[1]=a[1]-s[1],d[2]=a[2]-s[2],Math.abs(d[0])<r&&Math.abs(d[1])<r&&Math.abs(d[2])<r)return!1;const f=u[0]*h[0]+u[1]*h[1]+u[2]*h[2],m=h[0]*d[0]+h[1]*d[1]+h[2]*d[2],v=u[0]*d[0]+u[1]*d[1]+u[2]*d[2],p=h[0]*h[0]+h[1]*h[1]+h[2]*h[2],g=(d[0]*d[0]+d[1]*d[1]+d[2]*d[2])*p-m*m;if(Math.abs(g)<r)return!1;let x=(f*m-v*p)/g,b=(f+m*x)/p;i&&(x=n(x,0,1),b=n(b,0,1));const w=ci.get(),y=ci.get();return w[0]=s[0]+x*d[0],w[1]=s[1]+x*d[1],w[2]=s[2]+x*d[2],y[0]=c[0]+b*h[0],y[1]=c[1]+b*h[1],y[2]=c[2]+b*h[2],o.tA=x,o.tB=b,o.pA=w,o.pB=y,o.distance2=et(w,y),!0}si.createQuatf64();const gi={tA:0,tB:0,pA:W(),pB:W(),distance2:0},xi=new We((()=>({origin:null,vector:null})));function bi(t){return t?{p0:j(t.p0),p1:j(t.p1),p2:j(t.p2)}:{p0:W(),p1:W(),p2:W()}}function wi(t,e,i,n=bi()){return Q(n.p0,t),Q(n.p1,e),Q(n.p2,i),n}function yi(t,e,i){const n=Wt(t,e),o=Wt(e,i),r=Wt(i,t),s=(n+o+r)/2,a=s*(s-n)*(s-o)*(s-r);return a<=0?0:Math.sqrt(a)}function _i(t,e,i){return Z(Mi,e,t),Z(Ci,i,t),it(nt(Mi,Mi,Ci))/2}Object.freeze({__proto__:null,create:hi,wrap:di,copy:function(t,e=hi()){return fi(t.origin,t.vector,e)},fromValues:fi,fromPoints:function(t,e,i=hi()){return Q(i.origin,t),Z(i.vector,e,t),i},distance2:mi,distance:function(t,e){return Math.sqrt(mi(t,e))},projectPoint:function(t,e,i){return vi(t,e,0,1,i)},pointAt:function(t,e,i){return tt(i,t.origin,Y(i,t.vector,e))},projectPointClamp:vi,closestRayDistance2:function(t,e){if(pi(t,di(e.origin,e.direction),!1,gi)){const{tA:e,pB:i,distance2:n}=gi;if(e>=0&&e<=1)return n;if(e<0)return et(t.origin,i);if(e>1)return et(tt(ci.get(),t.origin,t.vector),i)}return null},closestLineSegmentPoint:function(t,e,i){return!!pi(t,e,!0,gi)&&(Q(i,gi.pA),!0)},closestLineSegmentDistance2:function(t,e){return pi(t,e,!0,gi)?gi.distance2:null}});const Si=new We(hi),Ai=new We((()=>({p0:null,p1:null,p2:null}))),Mi=W(),Ci=W();Object.freeze({__proto__:null,create:bi,wrap:function(t,e,i){const n=Ai.get();return n.p0=t,n.p1=e,n.p2=i,n},copy:function(t,e=bi()){return wi(t.p0,t.p1,t.p2,e)},fromValues:wi,distance2:function(t,e){const i=t.p0,n=t.p1,o=t.p2,r=Z(ci.get(),n,i),s=Z(ci.get(),o,n),a=Z(ci.get(),i,o),c=Z(ci.get(),e,i),l=Z(ci.get(),e,n),u=Z(ci.get(),e,o),h=nt(r,r,a),d=J(nt(ci.get(),r,h),c),f=J(nt(ci.get(),s,h),l),m=J(nt(ci.get(),a,h),u);if(d>0&&f>0&&m>0){const t=J(h,c);return t*t/J(h,h)}const v=mi(fi(i,r,Si.get()),e),p=mi(fi(n,s,Si.get()),e),g=mi(fi(o,a,Si.get()),e);return Math.min(v,p,g)},intersectRay:function(t,e,i){const n=1e-5,{direction:o,origin:r}=e,{p0:s,p1:a,p2:c}=t,l=a[0]-s[0],u=a[1]-s[1],h=a[2]-s[2],d=c[0]-s[0],f=c[1]-s[1],m=c[2]-s[2],v=o[1]*m-f*o[2],p=o[2]*d-m*o[0],g=o[0]*f-d*o[1],x=l*v+u*p+h*g;if(x>-n&&x<n)return!1;const b=1/x,w=r[0]-s[0],y=r[1]-s[1],_=r[2]-s[2],S=b*(w*v+y*p+_*g);if(S<0||S>1)return!1;const A=y*h-u*_,M=_*l-h*w,C=w*u-l*y,T=b*(o[0]*A+o[1]*M+o[2]*C);return!(T<0||S+T>1||(i&&(Y(i,o,b*(d*A+f*M+m*C)),tt(i,r,i)),0))},areaPoints2d:yi,area2d:function(t){return yi(t.p0,t.p1,t.p2)},areaPoints3d:_i});let Ti=1,Oi=null;const Pi=new Uint32Array([0]);function Li(t){if(1===t)return Pi;if(t>Ti||null==Oi){for(;t>Ti;)Ti*=2;Oi=new Uint32Array(Ti);for(let t=0;t<Ti;t++)Oi[t]=t}return new Uint32Array(Oi.buffer,0,t)}let Fi=0;const Di=W(),zi=W(),Ri=W(),Ii=W();class Ni{constructor(t){this.message=t}toString(){return`AssertException: ${this.message}`}}const Ei={POSITION:"position",NORMAL:"normal",UV0:"uv0",UVMAPSPACE:"uvMapSpace",MEANVERTEXPOSITION:"meanVertexPosition",AUXPOS1:"auxpos1",AUXPOS2:"auxpos2",BOUND1:"bound1",BOUND2:"bound2",BOUND3:"bound3",COLOR:"color",SYMBOLCOLOR:"symbolColor",SIZE:"size",TANGENT:"tangent"};function Bi(t,e){if(!t){e=e||"assert";const t=new Error(e);throw t.stack&&console.log(t.stack),new Ni(e)}}function Vi(t){return t[function(t){for(const e in t)return e}(t)]}function Gi(t,e=0){let i=0;for(let n=0;n<4;n++)i+=t[e+n]*Hi[n];return i}const Hi=[1/256,1/65536,1/16777216,1/4294967296];Gi(new Uint8ClampedArray([255,255,255,255]));class ki{constructor(t,e=ki.DefaultIndices,i="triangle"){this.initialize(t,e,i)}get id(){return this._id}get vertexAttributes(){return this._vertexAttributes}get indices(){return this._indices}get indexCount(){const t=Vi(this._indices);return null==t?0:t.length}get primitiveType(){return this._primitiveType}getVertexAttr(){return this.vertexAttributes}initialize(t,e=ki.DefaultIndices,i="triangle"){const n={};for(const e in t){const{data:i,size:o}=t[e];n[e]={data:i,size:o,offsetIdx:0,strideIdx:o}}if(e===ki.DefaultIndices){const t=Li(function(t){const e=Vi(t);return null==e?0:e.data.length/e.size}(n));e={};for(const i in n)e[i]=t}this._id=Fi++,this._vertexAttributes=n,this._indices=e,this._primitiveType=i}toRenderData(){return{id:this._id.toString(),indices:this._indices,vertexAttr:this._vertexAttributes}}getIndices(t){return this._indices[t]}getAttribute(t){return this._vertexAttributes[t]}estimateGpuMemoryUsage(){let t=0;return this._indices[Ei.POSITION]&&(t+=3*this._indices[Ei.POSITION].length*4),this._indices[Ei.NORMAL]&&(t+=3*this._indices[Ei.NORMAL].length*4),this._indices[Ei.UV0]&&(t+=2*this._indices[Ei.UV0].length*4),this._indices[Ei.COLOR]&&(t+=1*this._indices[Ei.COLOR].length*4),t}}ki.DefaultIndices={};class Ui{constructor(){this._count=0}gen(t){return null==t&&(t="a"),t+"_"+this._count++}}class $i{constructor(t,e,i,n){this.primitiveIndices=t,this._numIndexPerPrimitive=e,this.indices=i,this._position=n,this.center=W(),Bi(t.length>=1),Bi(i.length%this._numIndexPerPrimitive==0),Bi(i.length>=t.length*this._numIndexPerPrimitive),Bi(3===this._position.size||4===this._position.size);const{data:o,offsetIdx:r,strideIdx:s}=this._position;let a=0;const c=t.length;let l=r+s*i[this._numIndexPerPrimitive*t[a]];for($i.tmpIndices.clear(),$i.tmpIndices.push(l),this.bbMin=q(o[l],o[l+1],o[l+2]),this.bbMax=j(this.bbMin);a<c;++a){const e=this._numIndexPerPrimitive*t[a];for(let t=0;t<this._numIndexPerPrimitive;++t){l=r+s*i[e+t],$i.tmpIndices.push(l);let n=o[l];this.bbMin[0]=Math.min(n,this.bbMin[0]),this.bbMax[0]=Math.max(n,this.bbMax[0]),n=o[l+1],this.bbMin[1]=Math.min(n,this.bbMin[1]),this.bbMax[1]=Math.max(n,this.bbMax[1]),n=o[l+2],this.bbMin[2]=Math.min(n,this.bbMin[2]),this.bbMax[2]=Math.max(n,this.bbMax[2])}}rt(this.center,this.bbMin,this.bbMax,.5),this.bsRadius=.5*Math.max(Math.max(this.bbMax[0]-this.bbMin[0],this.bbMax[1]-this.bbMin[1]),this.bbMax[2]-this.bbMin[2]);let u=this.bsRadius*this.bsRadius;for(a=0;a<$i.tmpIndices.length;++a){l=$i.tmpIndices.data[a];const t=o[l]-this.center[0],e=o[l+1]-this.center[1],i=o[l+2]-this.center[2],n=t*t+e*e+i*i;if(n<=u)continue;const r=Math.sqrt(n),s=.5*(r-this.bsRadius);this.bsRadius=this.bsRadius+s,u=this.bsRadius*this.bsRadius;const c=s/r;this.center[0]+=t*c,this.center[1]+=e*c,this.center[2]+=i*c}$i.tmpIndices.clear()}getCenter(){return this.center}getBSRadius(){return this.bsRadius}getBBMin(){return this.bbMin}getBBMax(){return this.bbMax}getPrimitiveIndices(){return this.primitiveIndices}getIndices(){return this.indices}getPosition(){return this._position}getChildren(){if(this._children)return this._children;if(et(this.bbMin,this.bbMax)>1){const t=rt(W(),this.bbMin,this.bbMax,.5),e=this.primitiveIndices.length,i=new Uint8Array(e),n=new Array(8);for(let t=0;t<8;++t)n[t]=0;const{data:o,offsetIdx:r,strideIdx:s}=this._position;for(let a=0;a<e;++a){let e=0;const c=this._numIndexPerPrimitive*this.primitiveIndices[a];let l=r+s*this.indices[c],u=o[l],h=o[l+1],d=o[l+2];for(let t=1;t<this._numIndexPerPrimitive;++t){l=r+s*this.indices[c+t];const e=o[l],i=o[l+1],n=o[l+2];e<u&&(u=e),i<h&&(h=i),n<d&&(d=n)}u<t[0]&&(e|=1),h<t[1]&&(e|=2),d<t[2]&&(e|=4),i[a]=e,++n[e]}let a=0;for(let t=0;t<8;++t)n[t]>0&&++a;if(a<2)return;const c=new Array(8);for(let t=0;t<8;++t)c[t]=n[t]>0?new Uint32Array(n[t]):void 0;for(let t=0;t<8;++t)n[t]=0;for(let t=0;t<e;++t){const e=i[t];c[e][n[e]++]=this.primitiveIndices[t]}this._children=new Array(8);for(let t=0;t<8;++t)void 0!==c[t]&&(this._children[t]=new $i(c[t],this._numIndexPerPrimitive,this.indices,this._position))}return this._children}}($i||($i={})).tmpIndices=new o({deallocator:null});var ji=$i;class Wi{constructor(t,e){this._boundingInfo=null,this._id=Wi.__idGen.gen(e),this._data=t}get id(){return this._id}get data(){return this._data}getIndices(t){return this.data.getIndices(t)}get indexCount(){return this.data.indexCount}getAttribute(t){return this.data.getAttribute(t)}get vertexCount(){return this.data.indexCount}get faceCount(){return this.data.indexCount/3}get boundingInfo(){return r(this._boundingInfo)&&(this._boundingInfo=this._calculateBoundingInfo()),this._boundingInfo}computeAttachmentOrigin(t){return"triangle"===this.data.primitiveType?this.computeAttachmentOriginTriangles(t):this.computeAttachmentOriginPoints(t)}computeAttachmentOriginTriangles(t){const e=this.getIndices(Ei.POSITION);return function(t,e,i){if(!t)return!1;const{strideIdx:n,offsetIdx:o,data:r}=t;ot(i,0,0,0),ot(Ii,0,0,0);let s=0,a=0;for(let t=0;t<e.length-2;t+=3){const c=e[t+0]*n+o,l=e[t+1]*n+o,u=e[t+2]*n+o;ot(Di,r[c+0],r[c+1],r[c+2]),ot(zi,r[l+0],r[l+1],r[l+2]),ot(Ri,r[u+0],r[u+1],r[u+2]);const h=_i(Di,zi,Ri);h?(tt(Di,Di,zi),tt(Di,Di,Ri),Y(Di,Di,1/3*h),tt(i,i,Di),s+=h):(tt(Ii,Ii,Di),tt(Ii,Ii,zi),tt(Ii,Ii,Ri),a+=3)}return!(0===a&&0===s||(0!==s?(Y(i,i,1/s),0):0===a||(Y(i,Ii,1/a),0)))}(this.getAttribute(Ei.POSITION),e,t)}computeAttachmentOriginPoints(t){const e=this.getIndices(Ei.POSITION);return function(t,e,i){if(!t||!e)return!1;const{strideIdx:n,offsetIdx:o,data:r}=t;ot(i,0,0,0);let s=-1,a=0;for(let t=0;t<e.length;t++){const c=e[t]*n+o;s!==c&&(i[0]+=r[c+0],i[1]+=r[c+1],i[2]+=r[c+2],a++),s=c}return a>1&&Y(i,i,1/a),a>0}(this.getAttribute(Ei.POSITION),e,t)}invalidateBoundingInfo(){this._boundingInfo=null}_calculateBoundingInfo(){let t=this.data.getIndices(Ei.POSITION);const e=this.data.getAttribute(Ei.POSITION),i="triangle"===this.data.primitiveType?3:1;if(0===t.length){t=new Uint32Array(i);for(let e=0;e<i;++e)t[e]=e}const n=t.length;Bi(n%i==0,"Indexing error: "+n.toFixed(0)+" not divisible by "+i.toFixed(0));const o=Li(n/i);return new ji(o,i,t,e)}}function qi(t,e){return J(t,e)/it(t)}function Xi(t,e){const i=J(t,e)/(it(t)*it(e));return-s(i)}Wi.__idGen=new Ui;const Ki=W(),Qi=W();function Zi(t=Mn){return[t[0],t[1],t[2],t[3]]}function Yi(t,e,i,n){return tn(t,e,i,n,li.get())}function Ji(t,e=Zi()){return tn(t[0],t[1],t[2],t[3],e)}function tn(t,e,i,n,o=Zi()){return o[0]=t,o[1]=e,o[2]=i,o[3]=n,o}function en(t,e,i=Zi()){Q(i,e);const n=J(e,e);return Math.abs(n-1)>1e-5&&n>1e-12&&Y(i,i,1/Math.sqrt(n)),hn(i,t,i),i}function nn(t,e,i,n=Zi()){return dn(Z(ci.get(),t,e),Z(ci.get(),i,e),t,n)}function on(t,e,i,n,o){if(t.count<3)return!1;t.getVec(i,sn);let r=n,s=!1;for(;r<t.count-1&&!s;)t.getVec(r,an),r++,s=!at(sn,an);if(!s)return!1;for(r=Math.max(r,o),s=!1;r<t.count&&!s;)t.getVec(r,cn),r++,Z(ln,sn,an),st(ln,ln),Z(un,an,cn),st(un,un),s=!at(sn,cn)&&!at(an,cn)&&Math.abs(J(ln,un))<rn;return s?(nn(sn,an,cn,e),!0):(0!==i||1!==n||2!==o)&&on(t,e,0,1,2)}Object.freeze({__proto__:null,projectPoint:function(t,e,i){const n=J(t,e)/J(t,t);return Y(i,t,n)},projectPointSignedLength:qi,angle:Xi,angleAroundAxis:function(t,e,i){st(Ki,t),st(Qi,e);const n=J(Ki,Qi),o=s(n),r=nt(Ki,Ki,Qi);return J(r,i)<0?2*Math.PI-o:o}});const rn=.99619469809,sn=W(),an=W(),cn=W(),ln=W(),un=W();function hn(t,e,i){return t!==i&&Ji(t,i),i[3]=-J(i,e),i}function dn(t,e,i,n=Zi()){return en(i,nt(ci.get(),e,t),n)}function fn(t,e,i){return!!a(e)&&An(t,e.origin,e.direction,!0,!1,i)}function mn(t,e,i){return An(t,e.origin,e.vector,!1,!1,i)}function vn(t,e,i){return An(t,e.origin,e.vector,!1,!0,i)}function pn(t,e){const{center:i,radius:n}=e;return Sn(t,i)-n>=0}function gn(t,e){return Sn(t,e)>=0}function xn(t,e){return t[0]*(t[0]>0?e[0]:e[3])+t[1]*(t[1]>0?e[1]:e[4])+t[2]*(t[2]>0?e[2]:e[5])+t[3]>=0}function bn(t,e){const i=J(t,e.ray.direction),n=-Sn(t,e.ray.origin);if(n<0&&i>=0)return!1;if(i>-1e-6&&i<1e-6)return n>0;if((n<0||i<0)&&!(n<0&&i<0))return!0;const o=n/i;return i>0?o<e.c1&&(e.c1=o):o>e.c0&&(e.c0=o),e.c0<=e.c1}function wn(t,e){const i=J(t,e.ray.direction),n=-Sn(t,e.ray.origin);if(i>-1e-6&&i<1e-6)return n>0;const o=n/i;return i>0?o<e.c1&&(e.c1=o):o>e.c0&&(e.c0=o),e.c0<=e.c1}function yn(t,e,i){const n=Y(ci.get(),t,-t[3]),o=_n(t,Z(ci.get(),e,n),ci.get());return tt(i,o,n),i}function _n(t,e,i){const n=Y(ci.get(),t,J(t,e));return Z(i,e,n),i}function Sn(t,e){return J(t,e)+t[3]}function An(t,e,i,o,r,s){const a=J(t,i);if(0===a)return!1;let c=-(J(t,e)+t[3])/a;return r&&(c=o?Math.max(0,c):n(c,0,1)),!(c<0||!o&&c>1||(tt(s,e,Y(s,i,c)),0))}const Mn=[0,0,1,0];function Cn(t){return t?{origin:j(t.origin),direction:j(t.direction)}:{origin:W(),direction:W()}}function Tn(t,e=Cn()){return On(t.origin,t.direction,e)}function On(t,e,i=Cn()){return Q(i.origin,t),Q(i.direction,e),i}function Pn(t,e,i=Cn()){const n=c(qt(ci.get(),e));if(n[2]=0,!t.unprojectFromRenderScreen(n,i.origin))return null;const o=c(qt(ci.get(),e));o[2]=1;const s=t.unprojectFromRenderScreen(o,ci.get());return r(s)?null:(Z(i.direction,s,i.origin),i)}function Ln(t,e,i=Cn()){return Fn(t,t.screenToRender(e,c(ci.get())),i)}function Fn(t,e,i=Cn()){Q(i.origin,t.eye);const n=ot(ci.get(),e[0],e[1],1),o=t.unprojectFromRenderScreen(n,ci.get());return r(o)?null:(Z(i.direction,o,i.origin),i)}function Dn(t,e){const i=nt(ci.get(),st(ci.get(),t.direction),Z(ci.get(),e,t.origin));return J(i,i)}function zn(t,e,i){const n=J(t.direction,Z(i,e,t.origin));return tt(i,t.origin,Y(i,t.direction,n)),i}function Rn(){return{origin:null,direction:null}}Object.freeze({__proto__:null,create:Zi,wrap:Yi,copy:Ji,fromValues:tn,fromNormalAndOffset:function(t,e,i=Zi()){return Q(i,t),i[3]=e,i},fromPositionAndNormal:en,fromPoints:nn,fromManyPoints:function(t,e){return on(t,e,0,1,2)},fromManyPointsSampleAt:on,setOffsetFromPoint:hn,negate:function(t,e){return e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e[3]=-t[3],e},fromVectorsAndPoint:dn,intersectRay:fn,intersectLineSegment:mn,intersectLineSegmentClamp:vn,isSphereFullyInside:pn,isSphereFullyOutside:function(t,e){const{center:i,radius:n}=e;return Sn(t,i)+n<0},isPointInside:gn,isPointOutside:function(t,e){return Sn(t,e)<0},isAABBFullyInside:xn,clip:bn,clipInfinite:wn,projectPoint:yn,projectVector:_n,distance:function(t,e){return Math.abs(Sn(t,e))},signedDistance:Sn,normal:function(t){return t},UP:Mn});const In=new We(Rn);Object.freeze({__proto__:null,create:Cn,wrap:function(t,e){const i=In.get();return i.origin=t,i.direction=e,i},copy:Tn,fromPoints:function(t,e,i=Cn()){return Q(i.origin,t),Z(i.direction,e,t),i},fromValues:On,fromScreen:function(t,e,i=Cn()){return Pn(t,t.screenToRender(e,c(ci.get())),i)},fromRender:Pn,fromScreenAtEye:Ln,fromRenderAtEye:Fn,distance2:Dn,distance:function(t,e){return Math.sqrt(Dn(t,e))},closestPoint:zn,createWrapper:Rn});const Nn=t.getLogger("esri.views.3d.support.geometryUtils.boundedPlane");function En(t=eo){return{plane:Zi(t.plane),origin:j(t.origin),basis1:j(t.basis1),basis2:j(t.basis2)}}function Bn(t,e=En()){return Vn(t.origin,t.basis1,t.basis2,e)}function Vn(t,e,i,n=En()){return Q(n.origin,t),Q(n.basis1,e),Q(n.basis2,i),Gn(n),function(t,e){Math.abs(J(t.basis1,t.basis2)/(it(t.basis1)*it(t.basis2)))>1e-6&&Nn.warn(e,"Provided basis vectors are not perpendicular"),Math.abs(J(t.basis1,Qn(t)))>1e-6&&Nn.warn(e,"Basis vectors and plane normal are not perpendicular"),Math.abs(-J(Qn(t),t.origin)-t.plane[3])>1e-6&&Nn.warn(e,"Plane offset is not consistent with plane origin")}(n,"fromValues()"),n}function Gn(t){dn(t.basis2,t.basis1,t.origin,t.plane)}function Hn(t,e,i){t!==i&&Bn(t,i);const n=Y(ci.get(),Qn(t),e);return tt(i.origin,i.origin,n),i.plane[3]-=e,i}function kn(t,e=En()){const i=(t[2]-t[0])/2,n=(t[3]-t[1])/2;return ot(e.origin,t[0]+i,t[1]+n,0),ot(e.basis1,i,0,0),ot(e.basis2,0,n,0),tn(0,0,1,0,e.plane),e}function Un(t,e,i){return!!fn(t.plane,e,i)&&Zn(t,i)}function $n(t,e,i){const n=io.get();to(t,e,n,io.get());let o=Number.POSITIVE_INFINITY;for(const r of so){const a=Jn(t,r,no.get()),c=ci.get();if(mn(n,a,c)){const t=Xt(ci.get(),e.origin,c),n=Math.abs(s(J(e.direction,t)));n<o&&(o=n,Q(i,c))}}return o===Number.POSITIVE_INFINITY?jn(t,e,i):i}function jn(t,e,i){if(Un(t,e,i))return i;const n=io.get(),o=io.get();to(t,e,n,o);let r=Number.POSITIVE_INFINITY;for(const s of so){const a=Jn(t,s,no.get()),c=ci.get();if(vn(n,a,c)){const t=Dn(e,c);if(!gn(o,c))continue;t<r&&(r=t,Q(i,c))}}return Xn(t,e.origin)<r&&Wn(t,e.origin,i),i}function Wn(t,e,i){const n=yn(t.plane,e,ci.get()),o=vi(Yn(t,t.basis1),n,-1,1,ci.get()),r=vi(Yn(t,t.basis2),n,-1,1,ci.get());return Z(i,tt(ci.get(),o,r),t.origin),i}function qn(t,e,i){const{origin:n,basis1:o,basis2:r}=t,s=Z(ci.get(),e,n),a=qi(o,s),c=qi(r,s),l=qi(Qn(t),s);return ot(i,a,c,l)}function Xn(t,e){const i=qn(t,e,ci.get()),{basis1:n,basis2:o}=t,r=it(n),s=it(o),a=Math.max(Math.abs(i[0])-r,0),c=Math.max(Math.abs(i[1])-s,0),l=i[2];return a*a+c*c+l*l}function Kn(t,e){const i=-t.plane[3];return qi(Qn(t),e)-i}function Qn(t){return t.plane}function Zn(t,e){const i=Z(ci.get(),e,t.origin),n=ut(t.basis1),o=ut(t.basis2),r=J(t.basis1,i),s=J(t.basis2,i);return-r-n<0&&r-n<0&&-s-o<0&&s-o<0}function Yn(t,e){const i=no.get();return Q(i.origin,t.origin),Q(i.vector,e),i}function Jn(t,e,i){const{basis1:n,basis2:o,origin:r}=t,s=Y(ci.get(),n,e.origin[0]),a=Y(ci.get(),o,e.origin[1]);tt(i.origin,s,a),tt(i.origin,i.origin,r);const c=Y(ci.get(),n,e.direction[0]),l=Y(ci.get(),o,e.direction[1]);return Y(i.vector,tt(c,c,l),2),i}function to(t,e,i,n){const o=Qn(t);dn(o,e.direction,e.origin,i),dn(i,o,e.origin,n)}const eo={plane:Zi(),origin:q(0,0,0),basis1:q(1,0,0),basis2:q(0,1,0)},io=new We(Zi),no=new We(hi),oo=W(),ro=new We((()=>({origin:null,basis1:null,basis2:null,plane:null}))),so=[{origin:[-1,-1],direction:[1,0]},{origin:[1,-1],direction:[0,1]},{origin:[1,1],direction:[-1,0]},{origin:[-1,1],direction:[0,-1]}],ao=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],co=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];Object.freeze({__proto__:null,BoundedPlaneClass:class{constructor(){this.plane=Zi(),this.origin=W(),this.basis1=W(),this.basis2=W()}},create:En,wrap:function(t,e,i){const n=ro.get();return n.origin=t,n.basis1=e,n.basis2=i,n.plane=Yi(0,0,0,0),Gn(n),n},copy:Bn,fromValues:Vn,updateUnboundedPlane:Gn,elevate:Hn,setExtent:function(t,e,i){return kn(e,i),Hn(i,Kn(t,t.origin),i),i},fromAABoundingRect:kn,intersectRay:Un,intersectRayClosestSilhouette:function(t,e,i){if(Un(t,e,i))return i;const n=$n(t,e,ci.get());return tt(i,e.origin,Y(ci.get(),e.direction,ct(e.origin,n)/it(e.direction))),i},closestPointOnSilhouette:$n,closestPoint:jn,projectPoint:Wn,projectPointLocal:qn,distance2:Xn,distance:function(t,e){return Math.sqrt(Xn(t,e))},distanceToSilhouette:function(t,e){let i=Number.NEGATIVE_INFINITY;for(const n of so){const o=mi(Jn(t,n,no.get()),e);o>i&&(i=o)}return Math.sqrt(i)},extrusionContainsPoint:function(t,e){return gn(t.plane,e)&&Zn(t,e)},axisAt:function(t,e,i,n){return function(t,e,i){switch(e){case 0:Q(i,t.basis1),st(i,i);break;case 1:Q(i,t.basis2),st(i,i);break;case 2:Q(i,Qn(t))}return i}(t,i,n)},altitudeAt:Kn,setAltitudeAt:function(t,e,i,n){const o=Kn(t,e),r=Y(oo,Qn(t),i-o);return tt(n,e,r),n},equals:function(t,e){return at(t.basis1,e.basis1)&&at(t.basis2,e.basis2)&&at(t.origin,e.origin)},transform:function(t,e,i){return t!==i&&Bn(t,i),ft(ao,e),mt(ao,ao),lt(i.basis1,t.basis1,ao),lt(i.basis2,t.basis2,ao),lt(i.plane,t.plane,ao),lt(i.origin,t.origin,e),hn(i.plane,i.origin,i.plane),i},rotate:function(t,e,i,n){return t!==n&&Bn(t,n),vt(co,pt(co),e,i),lt(n.basis1,t.basis1,co),lt(n.basis2,t.basis2,co),Gn(n),n},normal:Qn,UP:eo});const lo=t.getLogger("esri.views.3d.support.geometryUtils.sphere");function uo(t){return t?{radius:t.radius,center:j(t.center)}:{radius:1,center:W()}}function ho(t,e=uo()){return fo(t.radius,t.center,e)}function fo(t,e,i=uo()){return Q(i.center,e),i.radius=t,i}function mo(t,e,i){if(r(e))return!1;const n=Z(ci.get(),e.origin,t.center),o=J(e.direction,e.direction),s=2*J(e.direction,n),a=s*s-4*o*(J(n,n)-t.radius*t.radius);if(a<0)return!1;const c=Math.sqrt(a);let l=(-s-c)/(2*o);const u=(-s+c)/(2*o);return(l<0||u<l&&u>0)&&(l=u),!(l<0||(i&&tt(i,e.origin,Y(ci.get(),e.direction,l)),0))}function vo(t,e,i){const n=ci.get(),o=ui.get();nt(n,e.origin,e.direction),nt(i,n,e.origin),Y(i,i,1/it(i)*t.radius);const r=go(t,e.origin),s=Xi(e.origin,i);return pt(o),vt(o,o,s+r,n),lt(i,i,o),i}function po(t,e,i){const n=Z(ci.get(),e,t.center),o=Y(ci.get(),n,t.radius/it(n));return tt(i,o,t.center)}function go(t,e){const i=Z(ci.get(),e,t.center),n=it(i),o=t.radius+Math.abs(t.radius-n);return s(t.radius/o)}const xo=W();function bo(t,e,i,n){const o=Z(xo,e,t.center);switch(i){case 0:{const t=Kt(o,xo)[2];return ot(n,-Math.sin(t),Math.cos(t),0)}case 1:{const t=Kt(o,xo),e=t[1],i=t[2],r=Math.sin(e);return ot(n,-r*Math.cos(i),-r*Math.sin(i),Math.cos(e))}case 2:return st(n,o);default:return}}function wo(t,e){const i=Z(Ao,e,t.center);return it(i)-t.radius}const yo=new We((()=>({center:null,radius:0}))),_o=Cn(),So=W(),Ao=W();function Mo(t=To){return[t[0],t[1],t[2],t[3]]}function Co(t,e,i,n,o=Mo()){return o[0]=t,o[1]=e,o[2]=i,o[3]=n,o}Object.freeze(So),Object.freeze({__proto__:null,create:uo,wrap:function(t,e){const i=yo.get();return i.radius=t,i.center=e||So,i},copy:ho,fromValues:fo,elevate:function(t,e,i){return t!==i&&Q(i.center,t.center),i.radius=t.radius+e,i},setExtent:function(t,e,i){return lo.error("sphere.setExtent is not yet supported"),t===i?i:ho(t,i)},intersectRay:mo,intersectScreen:function(t,e,i,n){return mo(t,Ln(e,i,_o),n)},intersectsRay:function(t,e){return mo(t,e,null)},intersectRayClosestSilhouette:function(t,e,i){if(mo(t,e,i))return i;const n=vo(t,e,ci.get());return tt(i,e.origin,Y(ci.get(),e.direction,ct(e.origin,n)/it(e.direction))),i},closestPointOnSilhouette:vo,closestPoint:function(t,e,i){return mo(t,e,i)?i:(zn(e,t.center,i),po(t,i,i))},projectPoint:po,distanceToSilhouette:function(t,e){const i=Z(ci.get(),e,t.center),n=ut(i);return Math.sqrt(Math.abs(n-t.radius*t.radius))},angleToSilhouette:go,axisAt:bo,altitudeAt:wo,setAltitudeAt:function(t,e,i,n){const o=wo(t,e),r=bo(t,e,2,Ao),s=Y(Ao,r,i-o);return tt(n,e,s),n}});const To=[0,0,1,0];function Oo(t){return t?{ray:Cn(t.ray),c0:t.c0,c1:t.c1}:{ray:Cn(),c0:0,c1:Number.MAX_VALUE}}function Po(t,e,i,n=Oo()){return Tn(t,n.ray),n.c0=e,n.c1=i,n}function Lo(t,e=Oo()){return Tn(t,e.ray),e.c0=0,e.c1=Number.MAX_VALUE,e}function Fo(t,e,i=Oo()){const n=it(t.vector);return On(t.origin,e,i.ray),i.c0=0,i.c1=n,i}function Do(t,e,i){return tt(i,t.ray.origin,Y(i,t.ray.direction,e))}Object.freeze({__proto__:null,create:Mo,wrap:function(t,e,i,n){return Co(t,e,i,n,li.get())},wrapAxisAngle:function(t,e){return Co(t[0],t[1],t[2],e,li.get())},copy:function(t,e=Mo()){return Co(t[0],t[1],t[2],t[3],e)},fromValues:Co,fromAxisAndAngle:function(t,e,i=Mo()){return Q(i,t),i[3]=e,i},fromPoints:function(t,e,i=Mo()){return nt(i,t,e),st(i,i),i[3]=Xi(t,e),i},axis:function(t){return t},UP:To});const zo=new We((()=>({c0:0,c1:0,ray:null})));function Ro(t){if(t){const{planes:e,points:i}=t;return{planes:[Zi(e[0]),Zi(e[1]),Zi(e[2]),Zi(e[3]),Zi(e[4]),Zi(e[5])],points:[j(i[0]),j(i[1]),j(i[2]),j(i[3]),j(i[4]),j(i[5]),j(i[6]),j(i[7])]}}return{planes:[Zi(),Zi(),Zi(),Zi(),Zi(),Zi()],points:[W(),W(),W(),W(),W(),W(),W(),W()]}}function Io(t,e,i=Ro()){for(let e=0;e<6;e++)Ji(t[e],i.planes[e]);for(let t=0;t<8;t++)Q(i.points[t],e[t]);return i}function No(t){const{planes:e,points:i}=t;nn(i[4],i[0],i[3],e[0]),nn(i[1],i[5],i[6],e[1]),nn(i[4],i[5],i[1],e[2]),nn(i[3],i[2],i[6],e[3]),nn(i[0],i[1],i[2],e[4]),nn(i[5],i[4],i[7],e[5])}function Eo(t,e){for(let i=0;i<6;i++)if(!bn(t[i],e))return!1;return!0}Object.freeze({__proto__:null,create:Oo,wrap:function(t,e,i){const n=zo.get();return n.ray=t,n.c0=e,n.c1=i,n},copy:function(t,e=Oo()){return Po(t.ray,t.c0,t.c1,e)},fromValues:Po,fromRay:Lo,fromLineSegment:function(t,e=Oo()){return Fo(t,st(ci.get(),t.vector),e)},fromLineSegmentAndDirection:Fo,getStart:function(t,e){return Do(t,t.c0,e)},getEnd:function(t,e){return Do(t,t.c1,e)},getAt:Do});const Bo=[Xe(-1,-1,-1,1),Xe(1,-1,-1,1),Xe(1,1,-1,1),Xe(-1,1,-1,1),Xe(-1,-1,1,1),Xe(1,-1,1,1),Xe(1,1,1,1),Xe(-1,1,1,1)],Vo=new We(Oo);Object.freeze({__proto__:null,create:Ro,copy:function(t,e=Ro()){return Io(t.planes,t.points,e)},fromValues:Io,fromMatrix:function(t,e,i=Ro()){const{points:n}=i,o=gt(ui.get(),e,t);ft(o,o);for(let t=0;t<8;++t){const e=Qt(li.get(),Bo[t],o);ot(n[t],e[0]/e[3],e[1]/e[3],e[2]/e[3])}return No(i),i},recomputePlanes:No,intersectsSphere:function(t,e){for(let i=0;i<6;i++)if(pn(t[i],e))return!1;return!0},intersectsRay:function(t,e){return Eo(t,Lo(e,Vo.get()))},intersectClipRay:function(t,e){for(let i=0;i<6;i++)if(!wn(t[i],e))return!1;return!0},intersectsLineSegment:function(t,e,i){return Eo(t,Fo(e,i,Vo.get()))},intersectsPoint:function(t,e){for(let i=0;i<6;i++)if(Sn(t[i],e)>0)return!1;return!0},intersectsAABB:function(t,e){for(let i=0;i<6;i++)if(xn(t[i],e))return!1;return!0},planePointIndices:{bottom:[5,1,0,4],near:[0,1,2,3],far:[5,4,7,6],right:[1,5,6,2],left:[4,0,3,7],top:[7,3,2,6]}});class Go{acquire(t,e,i,n,o,r){this.id=Go._idGen.gen(t&&t.id),this.geometry=t,this.material=e,this.transformation=i,this.instanceParameters=n,this.origin=o,this.shaderTransformation=r}getStaticTransformation(){return this.transformation}getShaderTransformation(){return this.shaderTransformation?this.shaderTransformation(this.transformation):this.transformation}computeAttachmentOrigin(t){return!!(this.material.computeAttachmentOrigin?this.material.computeAttachmentOrigin(this.geometry,t):this.geometry.computeAttachmentOrigin(t))&&(lt(t,t,this.getStaticTransformation()),!0)}}function Ho(t,e,i){for(let n=0;n<i;++n)e[2*n]=t[n],e[2*n+1]=t[n]-e[2*n]}Go._idGen=new Ui,Go.pool=new l(Go);const ko=new Float64Array(1),Uo=new Float32Array(2),$o=new class{constructor(t=0){this.offset=t,this.sphere=uo(),this.tmpVertex=W()}applyToVertex(t,e,i){const n=this.objectTransform.transform;let o=n[0]*t+n[4]*e+n[8]*i+n[12],r=n[1]*t+n[5]*e+n[9]*i+n[13],s=n[2]*t+n[6]*e+n[10]*i+n[14];const a=this.offset/Math.sqrt(o*o+r*r+s*s);o+=o*a,r+=r*a,s+=s*a;const c=this.objectTransform.inverse;return this.tmpVertex[0]=c[0]*o+c[4]*r+c[8]*s+c[12],this.tmpVertex[1]=c[1]*o+c[5]*r+c[9]*s+c[13],this.tmpVertex[2]=c[2]*o+c[6]*r+c[10]*s+c[14],this.tmpVertex}applyToMinMax(t,e){const i=this.offset/Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]);t[0]+=t[0]*i,t[1]+=t[1]*i,t[2]+=t[2]*i;const n=this.offset/Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]);e[0]+=e[0]*n,e[1]+=e[1]*n,e[2]+=e[2]*n}applyToAabb(t){const e=this.offset/Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]);t[0]+=t[0]*e,t[1]+=t[1]*e,t[2]+=t[2]*e;const i=this.offset/Math.sqrt(t[3]*t[3]+t[4]*t[4]+t[5]*t[5]);return t[3]+=t[3]*i,t[4]+=t[4]*i,t[5]+=t[5]*i,t}applyToBoundingSphere(t,e){const i=Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]),n=this.offset/i;return this.sphere.center[0]=e[0]+e[0]*n,this.sphere.center[1]=e[1]+e[1]*n,this.sphere.center[2]=e[2]+e[2]*n,this.sphere.radius=t+t*this.offset/i,this.sphere}},jo=t=>class extends t{constructor(){super(...arguments),this._isDisposed=!1}dispose(){for(const e of null!=(t=this._managedDisposables)?t:[]){var t;const i=this[e];this[e]=null,i&&"function"==typeof i.dispose&&i.dispose()}this._isDisposed=!0}get isDisposed(){return this._isDisposed}};class Wo extends(jo(class{})){}class qo extends Wo{constructor(t){super(),this.material=t.material,this.techniqueRep=t.techniqueRep,this.output=t.output}getTechnique(){return this.technique}getPipelineState(t,e){return this.getTechnique().pipeline}ensureResources(t){return 2}ensureParameters(t){}}class Xo extends qo{constructor(t){super(t),this._textureIDs=new Set,this._textureRepository=t.textureRep,this._textureId=t.textureId,this._initTransparent=!!t.initTextureTransparent,this._texture=this._acquireIfNotUndefined(this._textureId),this._textureNormal=this._acquireIfNotUndefined(t.normalTextureId),this._textureEmissive=this._acquireIfNotUndefined(t.emissiveTextureId),this._textureOcclusion=this._acquireIfNotUndefined(t.occlusionTextureId),this._textureMetallicRoughness=this._acquireIfNotUndefined(t.metallicRoughnessTextureId)}dispose(){this._textureIDs.forEach((t=>this._textureRepository.release(t))),this._textureIDs.clear()}updateTexture(t){t!==this._textureId&&(this._releaseIfNotUndefined(this._textureId),this._textureId=t,this._texture=this._acquireIfNotUndefined(this._textureId))}bindTexture(t,e){a(this._texture)&&(e.setUniform1i("tex",0),t.bindTexture(this._texture.glTexture,0)),a(this._textureNormal)&&(e.setUniform1i("normalTexture",1),t.bindTexture(this._textureNormal.glTexture,1)),a(this._textureEmissive)&&(e.setUniform1i("texEmission",2),t.bindTexture(this._textureEmissive.glTexture,2)),a(this._textureOcclusion)&&(e.setUniform1i("texOcclusion",3),t.bindTexture(this._textureOcclusion.glTexture,3)),a(this._textureMetallicRoughness)&&(e.setUniform1i("texMetallicRoughness",4),t.bindTexture(this._textureMetallicRoughness.glTexture,4))}bindTextureScale(t,e){const i=a(this._texture)&&this._texture.glTexture;i&&i.descriptor.textureCoordinateScaleFactor?e.setUniform2fv("textureCoordinateScaleFactor",i.descriptor.textureCoordinateScaleFactor):e.setUniform2f("textureCoordinateScaleFactor",1,1)}_acquireIfNotUndefined(t){if(!r(t))return this._textureIDs.add(t),this._textureRepository.acquire(t,this._initTransparent)}_releaseIfNotUndefined(t){void 0!==t&&(this._textureIDs.delete(t),this._textureRepository.release(t))}}const Ko={scale:0,factor:0,minPixelSize:0,paddingPixels:0},Qo=St(),Zo=Ei;function Yo(t,e,i,n,o,r,s){const c=function(t){return!!a(t)&&!t.visible}(e),l=i.tolerance;if(!c)if(t.boundingInfo)Bi("triangle"===t.data.primitiveType),tr(t.boundingInfo,n,o,l,r,s);else{const e=t.getIndices(Zo.POSITION),i=t.getAttribute(Zo.POSITION);nr(n,o,0,e.length/3,e,i,void 0,r,s)}}const Jo=W();function tr(t,e,i,n,o,r){const s=function(t,e){return ot(Jo,1/(e[0]-t[0]),1/(e[1]-t[1]),1/(e[2]-t[2]))}(e,i);if(yt(Qo,t.getBBMin()),_t(Qo,t.getBBMax()),a(o)&&o.applyToAabb(Qo),function(t,e,i,n){return function(t,e,i,n){const o=(t[0]-n-e[0])*i[0],r=(t[3]+n-e[0])*i[0];let s=Math.min(o,r),a=Math.max(o,r);const c=(t[1]-n-e[1])*i[1],l=(t[4]+n-e[1])*i[1];if(a=Math.min(a,Math.max(c,l)),a<0)return!1;if(s=Math.max(s,Math.min(c,l)),s>a)return!1;const u=(t[2]-n-e[2])*i[2],h=(t[5]+n-e[2])*i[2];return a=Math.min(a,Math.max(u,h)),!(a<0)&&(s=Math.max(s,Math.min(u,h)),!(s>a)&&s<1/0)}(Qo,e,i,n)}(0,e,s,n)){const s=t.getPrimitiveIndices(),a=t.getIndices(),c=t.getPosition(),l=s?s.length:a.length/3;if(l>hr){const s=t.getChildren();if(void 0!==s){for(let t=0;t<8;++t)void 0!==s[t]&&tr(s[t],e,i,n,o,r);return}}nr(e,i,0,l,a,c,s,o,r)}}const er=2**-52,ir=W();function nr(t,e,i,n,o,r,s,c,l){if(s)return function(t,e,i,n,o,r,s,c,l){const{data:u,offsetIdx:h,strideIdx:d}=r,f=t[0],m=t[1],v=t[2],p=e[0]-f,g=e[1]-m,x=e[2]-v;for(let t=i;t<n;++t){const e=s[t];let i=3*e,n=h+d*o[i++],r=u[n++],b=u[n++],w=u[n];n=h+d*o[i++];let y=u[n++],_=u[n++],S=u[n];n=h+d*o[i];let A=u[n++],M=u[n++],C=u[n];a(c)&&([r,b,w]=c.applyToVertex(r,b,w,t),[y,_,S]=c.applyToVertex(y,_,S,t),[A,M,C]=c.applyToVertex(A,M,C,t));const T=y-r,O=_-b,P=S-w,L=A-r,F=M-b,D=C-w,z=g*D-F*x,R=x*L-D*p,I=p*F-L*g,N=T*z+O*R+P*I;if(Math.abs(N)<=er)continue;const E=f-r,B=m-b,V=v-w,G=E*z+B*R+V*I;if(N>0){if(G<0||G>N)continue}else if(G>0||G<N)continue;const H=B*P-O*V,k=V*T-P*E,U=E*O-T*B,$=p*H+g*k+x*U;if(N>0){if($<0||G+$>N)continue}else if($>0||G+$<N)continue;const j=(L*H+F*k+D*U)/N;j>=0&&l(j,sr(T,O,P,L,F,D,ir),e)}}(t,e,i,n,o,r,s,c,l);const{data:u,offsetIdx:h,strideIdx:d}=r,f=t[0],m=t[1],v=t[2],p=e[0]-f,g=e[1]-m,x=e[2]-v;for(let t=i,e=3*i;t<n;++t){let i=h+d*o[e++],n=u[i++],r=u[i++],s=u[i];i=h+d*o[e++];let b=u[i++],w=u[i++],y=u[i];i=h+d*o[e++];let _=u[i++],S=u[i++],A=u[i];a(c)&&([n,r,s]=c.applyToVertex(n,r,s,t),[b,w,y]=c.applyToVertex(b,w,y,t),[_,S,A]=c.applyToVertex(_,S,A,t));const M=b-n,C=w-r,T=y-s,O=_-n,P=S-r,L=A-s,F=g*L-P*x,D=x*O-L*p,z=p*P-O*g,R=M*F+C*D+T*z;if(Math.abs(R)<=er)continue;const I=f-n,N=m-r,E=v-s,B=I*F+N*D+E*z;if(R>0){if(B<0||B>R)continue}else if(B>0||B<R)continue;const V=N*T-C*E,G=E*M-T*I,H=I*C-M*N,k=p*V+g*G+x*H;if(R>0){if(k<0||B+k>R)continue}else if(k>0||B+k<R)continue;const U=(O*V+P*G+L*H)/R;U>=0&&l(U,sr(M,C,T,O,P,L,ir),t)}}const or=W(),rr=W();function sr(t,e,i,n,o,r,s){return ot(or,t,e,i),ot(rr,n,o,r),nt(s,or,rr),st(s,s),s}function ar(t,e,i){if(!t)return;const n=t.parameters;e.setUniform4f(i,n.divisor,n.offset,n.minPixelSize,t.paddingPixelsOverride)}function cr(t,e){const i=e?cr(e):{};for(const e in t){let n=t[e];n&&n.forEach&&(n=lr(n)),null==n&&e in i||(i[e]=n)}return i}function lr(t){const e=[];return t.forEach((t=>e.push(t))),e}const ur={multiply:1,ignore:2,replace:3,tint:4},hr=1e3,dr={position:0,normal:1,uv0:2,color:3,size:4,tangent:4,uvMapSpace:4,auxpos1:5,symbolColor:5,auxpos2:6,featureAttribute:6,instanceFeatureAttribute:6,instanceColor:7,bound1:5,bound2:6,bound3:7,model:8,modelNormal:12,modelOriginHi:11,modelOriginLo:15};class fr{constructor(t,e,i){this.supportsEdges=!1,this._visible=!0,this._renderPriority=0,this._insertOrder=0,this._vertexAttributeLocations=dr,this.id=fr._idGen.gen(t),this._params=cr(e,i),this.validateParameterValues(this._params)}dispose(){}get params(){return this._params}update(){return!1}setParameterValues(t){(function(t,e){let i=!1;for(const n in e){const o=e[n];void 0!==o&&(i=!0,t[n]=Array.isArray(o)?o.slice():o)}return i})(this._params,t)&&(this.validateParameterValues(this._params),this.parametersChanged())}validateParameterValues(){}get visible(){return this._visible}set visible(t){t!==this._visible&&(this._visible=t,this.parametersChanged())}isVisibleInPass(t){return!0}get renderOccluded(){return this.params.renderOccluded}get renderPriority(){return this._renderPriority}set renderPriority(t){t!==this._renderPriority&&(this._renderPriority=t,this.parametersChanged())}get insertOrder(){return this._insertOrder}set insertOrder(t){t!==this._insertOrder&&(this._insertOrder=t,this.parametersChanged())}get vertexAttributeLocations(){return this._vertexAttributeLocations}isVisible(){return this._visible}parametersChanged(){a(this.materialRepository)&&this.materialRepository.materialChanged(this)}}function mr(t,e,i,n,o){const r=i.typedBuffer,s=i.typedBufferStride,a=t.length;if(n*=s,null==o||1===o)for(let i=0;i<a;++i){const o=2*t[i];r[n]=e[o],r[n+1]=e[o+1],n+=s}else for(let i=0;i<a;++i){const a=2*t[i];for(let t=0;t<o;++t)r[n]=e[a],r[n+1]=e[a+1],n+=s}}function vr(t,e,i,n,o){const r=i.typedBuffer,s=i.typedBufferStride,a=t.length;if(n*=s,null==o||1===o)for(let i=0;i<a;++i){const o=3*t[i];r[n]=e[o],r[n+1]=e[o+1],r[n+2]=e[o+2],n+=s}else for(let i=0;i<a;++i){const a=3*t[i];for(let t=0;t<o;++t)r[n]=e[a],r[n+1]=e[a+1],r[n+2]=e[a+2],n+=s}}function pr(t,e,i,n,o){const r=i.typedBuffer,s=i.typedBufferStride,a=t.length;if(n*=s,null==o||1===o)for(let i=0;i<a;++i){const o=4*t[i];r[n]=e[o],r[n+1]=e[o+1],r[n+2]=e[o+2],r[n+3]=e[o+3],n+=s}else for(let i=0;i<a;++i){const a=4*t[i];for(let t=0;t<o;++t)r[n]=e[a],r[n+1]=e[a+1],r[n+2]=e[a+2],r[n+3]=e[a+3],n+=s}}function gr(t,e,i,n,o,r){if(i){const s=i,a=n.typedBuffer,c=n.typedBufferStride,l=t.length;if(o*=c,null==r||1===r)for(let i=0;i<l;++i){const n=3*t[i],r=e[n],l=e[n+1],u=e[n+2];a[o]=s[0]*r+s[4]*l+s[8]*u+s[12],a[o+1]=s[1]*r+s[5]*l+s[9]*u+s[13],a[o+2]=s[2]*r+s[6]*l+s[10]*u+s[14],o+=c}else for(let i=0;i<l;++i){const n=3*t[i],l=e[n],u=e[n+1],h=e[n+2],d=s[0]*l+s[4]*u+s[8]*h+s[12],f=s[1]*l+s[5]*u+s[9]*h+s[13],m=s[2]*l+s[6]*u+s[10]*h+s[14];for(let t=0;t<r;++t)a[o]=d,a[o+1]=f,a[o+2]=m,o+=c}}else vr(t,e,n,o,r)}function xr(t,e,i,n,o,r){if(i){const s=n.typedBuffer,a=n.typedBufferStride,c=t.length,l=i[0],u=i[1],h=i[2],d=i[4],f=i[5],m=i[6],v=i[8],p=i[9],g=i[10],x=Math.abs(1-l*l+d*d+v*v)>1e-5||Math.abs(1-u*u+f*f+p*p)>1e-5||Math.abs(1-h*h+m*m+g*g)>1e-5;if(o*=a,null==r||1===r)for(let i=0;i<c;++i){const n=3*t[i],r=e[n],c=e[n+1],b=e[n+2];let w=l*r+d*c+v*b,y=u*r+f*c+p*b,_=h*r+m*c+g*b;if(x){const t=w*w+y*y+_*_;if(t<.999999&&t>1e-6){const e=Math.sqrt(t);w/=e,y/=e,_/=e}}s[o+0]=w,s[o+1]=y,s[o+2]=_,o+=a}else for(let i=0;i<c;++i){const n=3*t[i],c=e[n],b=e[n+1],w=e[n+2];let y=l*c+d*b+v*w,_=u*c+f*b+p*w,S=h*c+m*b+g*w;if(x){const t=y*y+_*_+S*S;if(t<.999999&&t>1e-6){const e=Math.sqrt(t);y/=e,_/=e,S/=e}}for(let t=0;t<r;++t)s[o+0]=y,s[o+1]=_,s[o+2]=S,o+=a}}else vr(t,e,n,o,r)}function br(t,e,i,n,o,r){const s=n.typedBuffer,a=n.typedBufferStride,c=t.length;if(o*=a,null==r||1===r){if(4===i)for(let i=0;i<c;++i){const n=4*t[i];s[o]=e[n],s[o+1]=e[n+1],s[o+2]=e[n+2],s[o+3]=e[n+3],o+=a}else if(3===i)for(let i=0;i<c;++i){const n=3*t[i];s[o]=e[n],s[o+1]=e[n+1],s[o+2]=e[n+2],s[o+3]=255,o+=a}}else if(4===i)for(let i=0;i<c;++i){const n=4*t[i];for(let t=0;t<r;++t)s[o]=e[n],s[o+1]=e[n+1],s[o+2]=e[n+2],s[o+3]=e[n+3],o+=a}else if(3===i)for(let i=0;i<c;++i){const n=3*t[i];for(let t=0;t<r;++t)s[o]=e[n],s[o+1]=e[n+1],s[o+2]=e[n+2],s[o+3]=255,o+=a}}function wr(t,...e){let i="";for(let n=0;n<e.length;n++)i+=t[n]+e[n];return i+=t[t.length-1],i}function yr(t,e){const i=t.fragment;switch(e.alphaDiscardMode){case 0:i.code.add(wr`
        #define discardOrAdjustAlpha(color) { if (color.a < ${wr.float(.001)}) { discard; } }
      `);break;case 1:i.code.add(wr`
        void discardOrAdjustAlpha(inout vec4 color) {
          color.a = 1.0;
        }
      `);break;case 2:i.uniforms.add("textureAlphaCutoff","float"),i.code.add(wr`
        #define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } else { color.a = 1.0; } }
      `);break;case 3:t.fragment.uniforms.add("textureAlphaCutoff","float"),t.fragment.code.add(wr`
        #define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } }
      `)}}fr._idGen=new Ui,function(t){t.int=function(t){return Math.round(t).toString()},t.float=function(t){return t.toPrecision(8)}}(wr||(wr={}));const _r=function(t,e,i,n,o=32774,r=32774,s=[0,0,0,0]){return{srcRgb:770,srcAlpha:1,dstRgb:771,dstAlpha:771,opRgb:o,opAlpha:r,color:{r:s[0],g:s[1],b:s[2],a:s[3]}}}(),Sr=ue(1,1),Ar=ue(0,771);function Mr(t){return 2===t?null:1===t?Ar:Sr}const Cr={factor:-1,units:-2};function Tr(t){return t?Cr:null}function Or(t){return 3===t||2===t?513:515}class Pr{constructor(t,e){this._module=t,this._loadModule=e}get(){return this._module}async reload(){return this._module=await this._loadModule(),this._module}}function Lr(t={}){return(e,i)=>{var n,o;e._parameterNames=null!=(n=e._parameterNames)?n:[],e._parameterNames.push(i);const r=e._parameterNames.length-1,s=Math.ceil(d(t.count||2)),a=null!=(o=e._parameterBits)?o:[0];let c=0;for(;a[c]+s>16;)c++,c>=a.length&&a.push(0);e._parameterBits=a;const l=a[c],u=(1<<s)-1<<l;a[c]+=s,Object.defineProperty(e,i,{get(){return this[r]},set(t){if(this[r]!==t&&(this[r]=t,this._keyDirty=!0,this._parameterBits[c]=this._parameterBits[c]&~u|+t<<l&u,"number"!=typeof t&&"boolean"!=typeof t))throw"Configuration values must be booleans or numbers!"}})}}const Fr=["layout","centroid","smooth","case","mat2x2","mat2x3","mat2x4","mat3x2","mat3x3","mat3x4","mat4x2","mat4x3","mat4x4","uint","uvec2","uvec3","uvec4","samplerCubeShadow","sampler2DArray","sampler2DArrayShadow","isampler2D","isampler3D","isamplerCube","isampler2DArray","usampler2D","usampler3D","usamplerCube","usampler2DArray","coherent","restrict","readonly","writeonly","resource","atomic_uint","noperspective","patch","sample","subroutine","common","partition","active","filter","image1D","image2D","image3D","imageCube","iimage1D","iimage2D","iimage3D","iimageCube","uimage1D","uimage2D","uimage3D","uimageCube","image1DArray","image2DArray","iimage1DArray","iimage2DArray","uimage1DArray","uimage2DArray","image1DShadow","image2DShadow","image1DArrayShadow","image2DArrayShadow","imageBuffer","iimageBuffer","uimageBuffer","sampler1DArray","sampler1DArrayShadow","isampler1D","isampler1DArray","usampler1D","usampler1DArray","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","trunc","round","roundEven","isnan","isinf","floatBitsToInt","floatBitsToUint","intBitsToFloat","uintBitsToFloat","packSnorm2x16","unpackSnorm2x16","packUnorm2x16","unpackUnorm2x16","packHalf2x16","unpackHalf2x16","outerProduct","transpose","determinant","inverse","texture","textureSize","textureProj","textureLod","textureOffset","texelFetch","texelFetchOffset","textureProjOffset","textureLodOffset","textureProjLod","textureProjLodOffset","textureGrad","textureGradOffset","textureProjGrad","textureProjGradOffset"];var Dr=["block-comment","line-comment","preprocessor","operator","integer","float","ident","builtin","keyword","whitespace","eof","integer"];const zr=["GL_OES_standard_derivatives","GL_EXT_frag_depth","GL_EXT_draw_buffers","GL_EXT_shader_texture_lod"];function Rr(t,e){for(let i=e-1;i>=0;i--){const e=t[i];if("whitespace"!==e.type&&"block-comment"!==e.type){if("keyword"!==e.type)break;if("attribute"===e.data||"in"===e.data)return!0}}return!1}function Ir(t,e,i,n){n=n||i;for(const o of t)if("ident"===o.type&&o.data===i)return n in e?e[n]++:e[n]=0,Ir(t,e,n+"_"+e[n],n);return i}function Nr(t,e,i="afterVersion"){function n(t,e){for(let i=e;i<t.length;i++){const e=t[i];if("operator"===e.type&&";"===e.data)return i}return null}const o={data:"\n",type:"whitespace"},r=e=>e<t.length&&/[^\r\n]$/.test(t[e].data);let s=function(t){let e=-1,o=0,r=-1;for(let s=0;s<t.length;s++){const a=t[s];if("preprocessor"===a.type&&(a.data.match(/\#(if|ifdef|ifndef)\s+.+/)?++o:a.data.match(/\#endif\s*.*/)&&--o),"afterVersion"!==i&&"afterPrecision"!==i||"preprocessor"===a.type&&/^#version/.test(a.data)&&(r=Math.max(r,s)),"afterPrecision"===i&&"keyword"===a.type&&"precision"===a.data){const e=n(t,s);if(null===e)throw new Error("precision statement not followed by any semicolons!");r=Math.max(r,e)}e<r&&0===o&&(e=s)}return e+1}(t);r(s-1)&&t.splice(s++,0,o);for(const i of e)t.splice(s++,0,i);r(s-1)&&r(s)&&t.splice(s,0,o)}function Er(t,e,i,n="lowp"){Nr(t,[{type:"keyword",data:"out"},{type:"whitespace",data:" "},{type:"keyword",data:n},{type:"whitespace",data:" "},{type:"keyword",data:i},{type:"whitespace",data:" "},{type:"ident",data:e},{type:"operator",data:";"}],"afterPrecision")}function Br(t,e,i,n,o="lowp"){Nr(t,[{type:"keyword",data:"layout"},{type:"operator",data:"("},{type:"keyword",data:"location"},{type:"whitespace",data:" "},{type:"operator",data:"="},{type:"whitespace",data:" "},{type:"integer",data:n.toString()},{type:"operator",data:")"},{type:"whitespace",data:" "},{type:"keyword",data:"out"},{type:"whitespace",data:" "},{type:"keyword",data:o},{type:"whitespace",data:" "},{type:"keyword",data:i},{type:"whitespace",data:" "},{type:"ident",data:e},{type:"operator",data:";"}],"afterPrecision")}function Vr(t,e){let i,n,o=-1;for(let r=e;r<t.length;r++){const e=t[r];if("operator"===e.type&&("["===e.data&&(i=r),"]"===e.data)){n=r;break}"integer"===e.type&&(o=parseInt(e.data,10))}return i&&n&&t.splice(i,n-i+1),o}class Gr{constructor(t,e,i,n,o={}){if(this._context=null,this._glName=null,this._locations={},this.id=kr++,this._initialized=!1,this._vShader=null,this._fShader=null,this._defines={},this._nameToUniformLocation={},this._nameToAttribLocation={},this._nameToUniform1={},this._nameToUniform1v={},this._nameToUniform2={},this._nameToUniform3={},this._nameToUniform4={},this._nameToUniformMatrix3={},this._nameToUniformMatrix4={},t||console.error("RenderingContext isn't initialized!"),0===e.length&&console.error("Shaders source should not be empty!"),t.instanceCounter.increment(3,this),this._context=t,this._vertexShaderSource=e,this._fragmentShaderSource=i,Array.isArray(o))for(const t of o)this._defines[t]="1";else this._defines=o;this._locations=n}get glName(){return this._glName}get locations(){return this._locations}getDefine(t){return this._defines[t]}dispose(){if(!this._context)return;const t=this._context.gl;this._vShader&&(t.deleteShader(this._vShader),this._vShader=null),this._fShader&&(t.deleteShader(this._fShader),this._fShader=null),this._glName&&(t.deleteProgram(this._glName),this._glName=null),this._context.instanceCounter.decrement(3,this),this._context=null}initialize(){if(this._initialized)return;this._vShader=this._loadShader(35633),this._fShader=this._loadShader(35632),this._vShader&&this._fShader||console.error("Error loading shaders!");const t=this._context.gl,e=t.createProgram();t.attachShader(e,this._vShader),t.attachShader(e,this._fShader);for(const i in this._locations)t.bindAttribLocation(e,this._locations[i],i);t.linkProgram(e),this._glName=e,this._initialized=!0}getUniformLocation(t){return this.initialize(),void 0===this._nameToUniformLocation[t]&&(this._nameToUniformLocation[t]=this._context.gl.getUniformLocation(this._glName,t)),this._nameToUniformLocation[t]}hasUniform(t){return null!==this.getUniformLocation(t)}getAttribLocation(t){return this.initialize(),void 0===this._nameToAttribLocation[t]&&(this._nameToAttribLocation[t]=this._context.gl.getAttribLocation(this._glName,t)),this._nameToAttribLocation[t]}setUniform1i(t,e){const i=this._nameToUniform1[t];void 0!==i&&e===i||(this._context.bindProgram(this),this._context.gl.uniform1i(this.getUniformLocation(t),e),this._nameToUniform1[t]=e)}setUniform1iv(t,e){const i=this._nameToUniform1v[t];Hr(i,e)&&(this._context.bindProgram(this),this._context.gl.uniform1iv(this.getUniformLocation(t),e),void 0===i?this._nameToUniform1v[t]=Gr._arrayCopy(e):Gr._arrayAssign(e,i))}setUniform2iv(t,e){const i=this._nameToUniform2[t];Hr(i,e)&&(this._context.bindProgram(this),this._context.gl.uniform2iv(this.getUniformLocation(t),e),void 0===i?this._nameToUniform2[t]=Gr._arrayCopy(e):Gr._arrayAssign(e,i))}setUniform3iv(t,e){const i=this._nameToUniform3[t];Hr(i,e)&&(this._context.bindProgram(this),this._context.gl.uniform3iv(this.getUniformLocation(t),e),void 0===i?this._nameToUniform3[t]=Gr._arrayCopy(e):Gr._arrayAssign(e,i))}setUniform4iv(t,e){const i=this._nameToUniform4[t];Hr(i,e)&&(this._context.bindProgram(this),this._context.gl.uniform4iv(this.getUniformLocation(t),e),void 0===i?this._nameToUniform4[t]=Gr._arrayCopy(e):Gr._arrayAssign(e,i))}setUniform1f(t,e){const i=this._nameToUniform1[t];void 0!==i&&e===i||(this._context.bindProgram(this),this._context.gl.uniform1f(this.getUniformLocation(t),e),this._nameToUniform1[t]=e)}setUniform1fv(t,e){const i=this._nameToUniform1v[t];Hr(i,e)&&(this._context.bindProgram(this),this._context.gl.uniform1fv(this.getUniformLocation(t),e),void 0===i?this._nameToUniform1v[t]=Gr._arrayCopy(e):Gr._arrayAssign(e,i))}setUniform2f(t,e,i){const n=this._nameToUniform2[t];void 0!==n&&e===n[0]&&i===n[1]||(this._context.bindProgram(this),this._context.gl.uniform2f(this.getUniformLocation(t),e,i),void 0===n?this._nameToUniform2[t]=[e,i]:(n[0]=e,n[1]=i))}setUniform2fv(t,e){const i=this._nameToUniform2[t];Hr(i,e)&&(this._context.bindProgram(this),this._context.gl.uniform2fv(this.getUniformLocation(t),e),void 0===i?this._nameToUniform2[t]=Gr._arrayCopy(e):Gr._arrayAssign(e,i))}setUniform3f(t,e,i,n){const o=this._nameToUniform3[t];void 0!==o&&e===o[0]&&i===o[1]&&n===o[2]||(this._context.bindProgram(this),this._context.gl.uniform3f(this.getUniformLocation(t),e,i,n),void 0===o?this._nameToUniform3[t]=[e,i,n]:(o[0]=e,o[1]=i,o[2]=n))}setUniform3fv(t,e){const i=this._nameToUniform3[t];Hr(i,e)&&(this._context.bindProgram(this),this._context.gl.uniform3fv(this.getUniformLocation(t),e),void 0===i?this._nameToUniform3[t]=Gr._arrayCopy(e):Gr._arrayAssign(e,i))}setUniform4f(t,e,i,n,o){const r=this._nameToUniform4[t];void 0!==r&&e===r[0]&&i===r[1]&&n===r[2]&&o===r[3]||(this._context.bindProgram(this),this._context.gl.uniform4f(this.getUniformLocation(t),e,i,n,o),void 0===r?this._nameToUniform4[t]=[e,i,n,o]:(r[0]=e,r[1]=i,r[2]=n,r[3]=o))}setUniform4fv(t,e){const i=this._nameToUniform4[t];Hr(i,e)&&(this._context.bindProgram(this),this._context.gl.uniform4fv(this.getUniformLocation(t),e),void 0===i?this._nameToUniform4[t]=Gr._arrayCopy(e):Gr._arrayAssign(e,i))}setUniformMatrix3fv(t,e,i=!1){const n=this._nameToUniformMatrix3[t];(function(t,e){return!!r(t)||(9!==t.length?Hr(t,e):9!==t.length||t[0]!==e[0]||t[1]!==e[1]||t[2]!==e[2]||t[3]!==e[3]||t[4]!==e[4]||t[5]!==e[5]||t[6]!==e[6]||t[7]!==e[7]||t[8]!==e[8])})(n,e)&&(this._context.bindProgram(this),this._context.gl.uniformMatrix3fv(this.getUniformLocation(t),i,e),void 0===n?this._nameToUniformMatrix3[t]=Gr._arrayCopy(e):Gr._arrayAssign(e,n))}setUniformMatrix4fv(t,e,i=!1){const n=this._nameToUniformMatrix4[t];(function(t,e){return!!r(t)||(16!==t.length?Hr(t,e):16!==t.length||t[0]!==e[0]||t[1]!==e[1]||t[2]!==e[2]||t[3]!==e[3]||t[4]!==e[4]||t[5]!==e[5]||t[6]!==e[6]||t[7]!==e[7]||t[8]!==e[8]||t[9]!==e[9]||t[10]!==e[10]||t[11]!==e[11]||t[12]!==e[12]||t[13]!==e[13]||t[14]!==e[14]||t[15]!==e[15])})(n,e)&&(this._context.bindProgram(this),this._context.gl.uniformMatrix4fv(this.getUniformLocation(t),i,e),void 0===n?this._nameToUniformMatrix4[t]=Gr._arrayCopy(e):Gr._arrayAssign(e,n))}assertCompatibleVertexAttributeLocations(t){const e=t.locations===this.locations;return e||console.error("VertexAttributeLocations are incompatible"),e}static _padToThree(t){let e=t.toString();return t<1e3&&(e=("  "+t).slice(-3)),e}_addLineNumbers(t){let e=2;return t.replace(/\n/g,(()=>"\n"+Gr._padToThree(e++)+":"))}_loadShader(t){const e=35633===t;let i=e?this._vertexShaderSource:this._fragmentShaderSource,n="";for(const t in this._defines)n+=`#define ${t} ${this._defines[t]}\n`;i=n+i,"webgl2"===this._context.contextVersion&&(i=function(t,e){const i=function(t){return e=t,i=function(){var t,e,i,n=0,o=0,r=999,s=[],a=[],c=1,l=0,u=0,h=!1,d=!1,f="";return function(p){return a=[],null!==p?function(p){var x;for(n=0,i=(f+=p).length;t=f[n],n<i;){switch(x=n,r){case 0:n="/"===t&&"*"===e?(s.push(t),m(s.join("")),r=999,n+1):(s.push(t),e=t,n+1);break;case 1:case 2:n="\r"!==t&&"\n"!==t||"\\"===e?(s.push(t),e=t,n+1):(m(s.join("")),r=999,n);break;case 3:n=v();break;case 4:n="."===t||/[eE]/.test(t)?(s.push(t),r=5,e=t,n+1):"x"===t&&1===s.length&&"0"===s[0]?(r=11,s.push(t),e=t,n+1):/[^\d]/.test(t)?(m(s.join("")),r=999,n):(s.push(t),e=t,n+1);break;case 11:n=/[^a-fA-F0-9]/.test(t)?(m(s.join("")),r=999,n):(s.push(t),e=t,n+1);break;case 5:"f"===t&&(s.push(t),e=t,n+=1),n=/[eE]/.test(t)||"-"===t&&/[eE]/.test(e)?(s.push(t),e=t,n+1):/[^\d]/.test(t)?(m(s.join("")),r=999,n):(s.push(t),e=t,n+1);break;case 9999:n=g();break;case 9:n=/[^\s]/g.test(t)?(m(s.join("")),r=999,n):(s.push(t),e=t,n+1);break;case 999:s=s.length?[]:s,n="/"===e&&"*"===t?(u=o+n-1,r=0,e=t,n+1):"/"===e&&"/"===t?(u=o+n-1,r=1,e=t,n+1):"#"===t?(r=2,u=o+n,n):/\s/.test(t)?(r=9,u=o+n,n):(h=/\d/.test(t),d=/[^\w_]/.test(t),u=o+n,r=h?4:d?3:9999,n)}if(x!==n)switch(f[x]){case"\n":l=0,++c;break;default:++l}}return o+=n,f=f.slice(n),a}(p.replace?p.replace(/\r\n/g,"\n"):p):(s.length&&m(s.join("")),r=10,m("(eof)"),a)};function m(t){t.length&&a.push({type:Dr[r],data:t,position:u,line:c,column:l})}function v(){if("."===e&&/\d/.test(t))return r=5,n;if("/"===e&&"*"===t)return r=0,n;if("/"===e&&"/"===t)return r=1,n;if("."===t&&s.length){for(;p(s););return r=5,n}if(";"===t||")"===t||"("===t){if(s.length)for(;p(s););return m(t),r=999,n+1}var i=2===s.length&&"="!==t;if(/[\w_\d\s]/.test(t)||i){for(;p(s););return r=999,n}return s.push(t),e=t,n+1}function p(t){for(var e,i,n=0;;){if(e=Yt.indexOf(t.slice(0,t.length+n).join("")),i=Yt[e],-1===e){if(n--+t.length>0)continue;i=t.slice(0,1).join("")}return m(i),u+=i.length,(s=s.slice(i.length)).length}}function g(){if(/[^\d\w_]/.test(t)){var i=s.join("");return r=Jt.indexOf(i)>-1?8:te.indexOf(i)>-1?7:6,m(s.join("")),r=999,n}return s.push(t),e=t,n+1}}(),[].concat(i(e)).concat(i(null));var e,i}(t);if("300 es"===function(t,e="100",i="300 es"){const n=/^\s*\#version\s+([0-9]+(\s+[a-zA-Z]+)?)\s*/;for(const o of t)if("preprocessor"===o.type){const t=n.exec(o.data);if(t){const n=t[1].replace(/\s\s+/g," ");if(n===i)return n;if(n===e)return o.data="#version "+i,e;throw new Error("unknown glsl version: "+n)}}return t.splice(0,0,{type:"preprocessor",data:"#version "+i},{type:"whitespace",data:"\n"}),null}(i,"100","300 es"))throw new Error("shader is already glsl 300 es");let n=null,o=null;const r={},s={};for(let t=0;t<i.length;++t){const a=i[t];switch(a.type){case"keyword":"vertex"===e&&"attribute"===a.data?a.data="in":"varying"===a.data&&(a.data="vertex"===e?"out":"in");break;case"builtin":if(/^texture(2D|Cube)(Proj)?(Lod|Grad)?(EXT)?$/.test(a.data.trim())&&(a.data=a.data.replace(/(2D|Cube|EXT)/g,"")),"fragment"===e&&"gl_FragColor"===a.data&&(n||(n=Ir(i,r,"fragColor"),Er(i,n,"vec4")),a.data=n),"fragment"===e&&"gl_FragData"===a.data){const e=Vr(i,t+1),n=Ir(i,r,"fragData");Br(i,n,"vec4",e,"mediump"),a.data=n}else"fragment"===e&&"gl_FragDepthEXT"===a.data&&(o||(o=Ir(i,r,"gl_FragDepth")),a.data=o);break;case"ident":if(Fr.indexOf(a.data)>=0){if("vertex"===e&&Rr(i,t))throw new Error("attribute in vertex shader uses a name that is a reserved word in glsl 300 es");a.data in s||(s[a.data]=Ir(i,r,a.data)),a.data=s[a.data]}}}for(let t=i.length-1;t>=0;--t){const e=i[t];if("preprocessor"===e.type){const n=e.data.match(/\#extension\s+(.*)\:/);if(n&&n[1]&&zr.indexOf(n[1].trim())>=0){const e=i[t+1];i.splice(t,e&&"whitespace"===e.type?2:1)}const o=e.data.match(/\#ifdef\s+(.*)/);o&&o[1]&&zr.indexOf(o[1].trim())>=0&&(e.data="#if 1");const r=e.data.match(/\#ifndef\s+(.*)/);r&&r[1]&&zr.indexOf(r[1].trim())>=0&&(e.data="#if 0")}}return function(t){return t.map((t=>"eof"!==t.type?t.data:"")).join("")}(i)}(i,e?"vertex":"fragment"));const o=this._context.gl,r=o.createShader(t);return o.shaderSource(r,i),o.compileShader(r),r}static _arrayCopy(t){const e=[];for(let i=0;i<t.length;++i)e.push(t[i]);return e}static _arrayAssign(t,e){for(let i=0;i<t.length;++i)e[i]=t[i]}}function Hr(t,e){if(r(t)||t.length!==e.length)return!0;for(let i=0;i<t.length;++i)if(t[i]!==e[i])return!0;return!1}let kr=0;function Ur(){const t=new Float32Array(16);return t[0]=1,t[5]=1,t[10]=1,t[15]=1,t}const $r=Ur();var jr;Object.freeze({__proto__:null,create:Ur,clone:function(t){const e=new Float32Array(16);return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],e},fromValues:function(t,e,i,n,o,r,s,a,c,l,u,h,d,f,m,v){const p=new Float32Array(16);return p[0]=t,p[1]=e,p[2]=i,p[3]=n,p[4]=o,p[5]=r,p[6]=s,p[7]=a,p[8]=c,p[9]=l,p[10]=u,p[11]=h,p[12]=d,p[13]=f,p[14]=m,p[15]=v,p},createView:function(t,e){return new Float32Array(t,e,16)},IDENTITY:$r}),function(t){function e(t,e,i){xt(Wr,i,e),t.setUniform3fv("localOrigin",e),t.setUniformMatrix4fv("view",Wr)}t.bindCamPosition=function(t,e,i){t.setUniform3f("camPos",i[3]-e[0],i[7]-e[1],i[11]-e[2])},t.bindProjectionMatrix=function(t,e){t.setUniformMatrix4fv("proj",e)},t.bindNearFar=function(t,e){t.setUniform2fv("nearFar",e)},t.bindViewCustomOrigin=e,t.bindView=function(t,i){e(t,i.origin,i.camera.viewMatrix)},t.bindViewport=function(t,e){t.setUniform4fv("viewport",e.camera.fullViewport)}}(jr||(jr={}));const Wr=Ur();function qr(t,e){if(e.slicePlaneEnabled){t.extensions.add("GL_OES_standard_derivatives"),e.sliceEnabledForVertexPrograms&&(t.vertex.uniforms.add("slicePlaneOrigin","vec3"),t.vertex.uniforms.add("slicePlaneBasis1","vec3"),t.vertex.uniforms.add("slicePlaneBasis2","vec3")),t.fragment.uniforms.add("slicePlaneOrigin","vec3"),t.fragment.uniforms.add("slicePlaneBasis1","vec3"),t.fragment.uniforms.add("slicePlaneBasis2","vec3");const i=wr`
      struct SliceFactors {
        float front;
        float side0;
        float side1;
        float side2;
        float side3;
      };

      SliceFactors calculateSliceFactors(vec3 pos) {
        vec3 rel = pos - slicePlaneOrigin;

        vec3 slicePlaneNormal = -cross(slicePlaneBasis1, slicePlaneBasis2);
        float slicePlaneW = -dot(slicePlaneNormal, slicePlaneOrigin);

        float basis1Len2 = dot(slicePlaneBasis1, slicePlaneBasis1);
        float basis2Len2 = dot(slicePlaneBasis2, slicePlaneBasis2);

        float basis1Dot = dot(slicePlaneBasis1, rel);
        float basis2Dot = dot(slicePlaneBasis2, rel);

        return SliceFactors(
          dot(slicePlaneNormal, pos) + slicePlaneW,
          -basis1Dot - basis1Len2,
          basis1Dot - basis1Len2,
          -basis2Dot - basis2Len2,
          basis2Dot - basis2Len2
        );
      }

      bool sliceByFactors(SliceFactors factors) {
        return factors.front < 0.0
          && factors.side0 < 0.0
          && factors.side1 < 0.0
          && factors.side2 < 0.0
          && factors.side3 < 0.0;
      }

      bool sliceEnabled() {
        // a slicePlaneBasis1 vector of zero length is used to disable slicing in the shader during draped rendering.
        return dot(slicePlaneBasis1, slicePlaneBasis1) != 0.0;
      }

      bool sliceByPlane(vec3 pos) {
        return sliceEnabled() && sliceByFactors(calculateSliceFactors(pos));
      }

      #define rejectBySlice(_pos_) sliceByPlane(_pos_)
      #define discardBySlice(_pos_) { if (sliceByPlane(_pos_)) discard; }
    `,n=wr`
      vec4 applySliceHighlight(vec4 color, vec3 pos) {
        SliceFactors factors = calculateSliceFactors(pos);

        if (sliceByFactors(factors)) {
          return color;
        }

        const float HIGHLIGHT_WIDTH = 1.0;
        const vec4 HIGHLIGHT_COLOR = vec4(0.0, 0.0, 0.0, 0.3);

        factors.front /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.front);
        factors.side0 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side0);
        factors.side1 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side1);
        factors.side2 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side2);
        factors.side3 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side3);

        float highlightFactor = (1.0 - step(0.5, factors.front))
          * (1.0 - step(0.5, factors.side0))
          * (1.0 - step(0.5, factors.side1))
          * (1.0 - step(0.5, factors.side2))
          * (1.0 - step(0.5, factors.side3));

        return mix(color, vec4(HIGHLIGHT_COLOR.rgb, color.a), highlightFactor * HIGHLIGHT_COLOR.a);
      }
    `,o=e.sliceHighlightDisabled?wr`#define highlightSlice(_color_, _pos_) (_color_)`:wr`
        ${n}
        #define highlightSlice(_color_, _pos_) (sliceEnabled() ? applySliceHighlight(_color_, _pos_) : (_color_))
      `;e.sliceEnabledForVertexPrograms&&t.vertex.code.add(i),t.fragment.code.add(i),t.fragment.code.add(o)}else{const i=wr`
      #define rejectBySlice(_pos_) false
      #define discardBySlice(_pos_) {}
      #define highlightSlice(_color_, _pos_) (_color_)
    `;e.sliceEnabledForVertexPrograms&&t.vertex.code.add(i),t.fragment.code.add(i)}}!function(t){t.bindUniformsWithOrigin=function(e,i,n){t.bindUniforms(e,i,n.slicePlane,n.origin)},t.bindUniforms=function(t,e,i,n){e.slicePlaneEnabled&&(a(i)?(n?(Z(Xr,i.origin,n),t.setUniform3fv("slicePlaneOrigin",Xr)):t.setUniform3fv("slicePlaneOrigin",i.origin),t.setUniform3fv("slicePlaneBasis1",i.basis1),t.setUniform3fv("slicePlaneBasis2",i.basis2)):(t.setUniform3fv("slicePlaneBasis1",X),t.setUniform3fv("slicePlaneBasis2",X),t.setUniform3fv("slicePlaneOrigin",X)))}}(qr||(qr={}));const Xr=W();function Kr(t){t.fragment.uniforms.add("depthTex","sampler2D"),t.fragment.uniforms.add("highlightViewportPixelSz","vec4"),t.fragment.code.add(wr`
    void outputHighlight() {
      vec4 fragCoord = gl_FragCoord;

      float sceneDepth = texture2D(depthTex, (fragCoord.xy - highlightViewportPixelSz.xy) * highlightViewportPixelSz.zw).r;
      if (fragCoord.z > sceneDepth + 5e-7) {
        gl_FragColor = vec4(1.0, 1.0, 0.0, 1.0);
      }
      else {
        gl_FragColor = vec4(1.0, 0.0, 1.0, 1.0);
      }
    }
  `)}function Qr(t,e){e.vvInstancingEnabled&&(e.vvSize||e.vvColor)&&t.attributes.add("instanceFeatureAttribute","vec4"),e.vvSize?(t.vertex.uniforms.add("vvSizeMinSize","vec3"),t.vertex.uniforms.add("vvSizeMaxSize","vec3"),t.vertex.uniforms.add("vvSizeOffset","vec3"),t.vertex.uniforms.add("vvSizeFactor","vec3"),t.vertex.uniforms.add("vvSymbolRotationMatrix","mat3"),t.vertex.uniforms.add("vvSymbolAnchor","vec3"),t.vertex.code.add(wr`
      vec3 vvScale(vec4 _featureAttribute) {
        return clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize);
      }

      vec4 vvTransformPosition(vec3 position, vec4 _featureAttribute) {
        return vec4(vvSymbolRotationMatrix * ( vvScale(_featureAttribute) * (position + vvSymbolAnchor)), 1.0);
      }
    `),t.vertex.code.add(wr`
      const float eps = 1.192092896e-07;
      vec4 vvTransformNormal(vec3 _normal, vec4 _featureAttribute) {
        vec3 vvScale = clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize + eps, vvSizeMaxSize);
        return vec4(vvSymbolRotationMatrix * _normal / vvScale, 1.0);
      }

      ${e.vvInstancingEnabled?wr`
      vec4 vvLocalNormal(vec3 _normal) {
        return vvTransformNormal(_normal, instanceFeatureAttribute);
      }

      vec4 localPosition() {
        return vvTransformPosition(position, instanceFeatureAttribute);
      }`:""}
    `)):t.vertex.code.add(wr`
      vec4 localPosition() { return vec4(position, 1.0); }

      vec4 vvLocalNormal(vec3 _normal) { return vec4(_normal, 1.0); }
    `),e.vvColor?(t.vertex.defines.addInt("VV_COLOR_N",8),t.vertex.code.add(wr`
      uniform float vvColorValues[VV_COLOR_N];
      uniform vec4 vvColorColors[VV_COLOR_N];

      vec4 vvGetColor(vec4 featureAttribute, float values[VV_COLOR_N], vec4 colors[VV_COLOR_N]) {
        float value = featureAttribute.y;
        if (value <= values[0]) {
          return colors[0];
        }

        for (int i = 1; i < VV_COLOR_N; ++i) {
          if (values[i] >= value) {
            float f = (value - values[i-1]) / (values[i] - values[i-1]);
            return mix(colors[i-1], colors[i], f);
          }
        }
        return colors[VV_COLOR_N - 1];
      }

      ${e.vvInstancingEnabled?wr`
      vec4 vvColor() {
        return vvGetColor(instanceFeatureAttribute, vvColorValues, vvColorColors);
      }`:""}
    `)):t.vertex.code.add(wr`
      vec4 vvColor() { return vec4(1.0); }
    `)}function Zr(t){t.vertex.code.add(wr`
    float screenSizePerspectiveMinSize(float size, vec4 factor) {
      float nonZeroSize = 1.0 - step(size, 0.0);

      return (
        factor.z * (
          1.0 +
          // Multiply by nzs ensures if size is 0, then we ignore proportionally scaled padding
          nonZeroSize *
          2.0 * factor.w / (
            size + (1.0 - nonZeroSize) // Adding 1 - nzs ensures we divide either by size, or by 1
          )
        )
      );
    }
  `),t.vertex.code.add(wr`
    float screenSizePerspectiveViewAngleDependentFactor(float absCosAngle) {
      return absCosAngle * absCosAngle * absCosAngle;
    }
  `),t.vertex.code.add(wr`
    vec4 screenSizePerspectiveScaleFactor(float absCosAngle, float distanceToCamera, vec4 params) {
      return vec4(
        min(params.x / (distanceToCamera - params.y), 1.0),
        screenSizePerspectiveViewAngleDependentFactor(absCosAngle),
        params.z,
        params.w
      );
    }
  `),t.vertex.code.add(wr`
    float applyScreenSizePerspectiveScaleFactorFloat(float size, vec4 factor) {
      return max(mix(size * factor.x, size, factor.y), screenSizePerspectiveMinSize(size, factor));
    }
  `),t.vertex.code.add(wr`
    float screenSizePerspectiveScaleFloat(float size, float absCosAngle, float distanceToCamera, vec4 params) {
      return applyScreenSizePerspectiveScaleFactorFloat(
        size,
        screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params)
      );
    }
  `),t.vertex.code.add(wr`
    vec2 applyScreenSizePerspectiveScaleFactorVec2(vec2 size, vec4 factor) {
      return mix(size * clamp(factor.x, screenSizePerspectiveMinSize(size.y, factor) / size.y, 1.0), size, factor.y);
    }
  `),t.vertex.code.add(wr`
    vec2 screenSizePerspectiveScaleVec2(vec2 size, float absCosAngle, float distanceToCamera, vec4 params) {
      return applyScreenSizePerspectiveScaleFactorVec2(size, screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params));
    }
  `)}function Yr(t,e){const i=t.vertex.code;e.verticalOffsetEnabled?(t.vertex.uniforms.add("verticalOffset","vec4"),e.screenSizePerspectiveEnabled&&(t.include(Zr),t.vertex.uniforms.add("screenSizePerspectiveAlignment","vec4")),i.add(wr`
    vec3 calculateVerticalOffset(vec3 worldPos, vec3 localOrigin) {
      float viewDistance = length((view * vec4(worldPos, 1.0)).xyz);
      ${1===e.viewingMode?wr`vec3 worldNormal = normalize(worldPos + localOrigin);`:wr`vec3 worldNormal = vec3(0.0, 0.0, 1.0);`}
      ${e.screenSizePerspectiveEnabled?wr`
          float cosAngle = dot(worldNormal, normalize(worldPos - camPos));
          float verticalOffsetScreenHeight = screenSizePerspectiveScaleFloat(verticalOffset.x, abs(cosAngle), viewDistance, screenSizePerspectiveAlignment);`:wr`
          float verticalOffsetScreenHeight = verticalOffset.x;`}
      // Screen sized offset in world space, used for example for line callouts
      float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * viewDistance, verticalOffset.z, verticalOffset.w);
      return worldNormal * worldOffset;
    }

    vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) {
      return worldPos + calculateVerticalOffset(worldPos, localOrigin);
    }
    `)):i.add(wr`
    vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) { return worldPos; }
    `)}(Kr||(Kr={})).bindOutputHighlight=function(t,e,i){t.bindTexture(i.highlightDepthTexture,5),e.setUniform1i("depthTex",5),e.setUniform4f("highlightViewportPixelSz",0,0,i.inverseViewport[0],i.inverseViewport[1])},function(t){function e(t,e){e.vvSizeEnabled&&(t.setUniform3fv("vvSizeMinSize",e.vvSizeMinSize),t.setUniform3fv("vvSizeMaxSize",e.vvSizeMaxSize),t.setUniform3fv("vvSizeOffset",e.vvSizeOffset),t.setUniform3fv("vvSizeFactor",e.vvSizeFactor)),e.vvColorEnabled&&(t.setUniform1fv("vvColorValues",e.vvColorValues),t.setUniform4fv("vvColorColors",e.vvColorColors))}t.bindUniforms=e,t.bindUniformsWithOpacity=function(t,i){e(t,i),i.vvOpacityEnabled&&(t.setUniform1fv("vvOpacityValues",i.vvOpacityValues),t.setUniform1fv("vvOpacityOpacities",i.vvOpacityOpacities))},t.bindUniformsForSymbols=function(t,i){e(t,i),i.vvSizeEnabled&&(t.setUniform3fv("vvSymbolAnchor",i.vvSymbolAnchor),t.setUniformMatrix3fv("vvSymbolRotationMatrix",i.vvSymbolRotationMatrix))}}(Qr||(Qr={})),(Zr||(Zr={})).bindUniforms=function(t,e){e.screenSizePerspective&&(ar(e.screenSizePerspective,t,"screenSizePerspective"),ar(e.screenSizePerspectiveAlignment||e.screenSizePerspective,t,"screenSizePerspectiveAlignment"))},(Yr||(Yr={})).bindUniforms=function(t,e,i){if(!e.verticalOffset)return;const n=function(t,e,i,n=Jr){return n.screenLength=t.screenLength,n.perDistance=Math.tan(.5*e)/(.5*i),n.minWorldLength=t.minWorldLength,n.maxWorldLength=t.maxWorldLength,n}(e.verticalOffset,i.camera.fovY,i.camera.fullViewport[3]);t.setUniform4f("verticalOffset",n.screenLength*(i.camera.pixelRatio||1),n.perDistance,n.minWorldLength,n.maxWorldLength)};const Jr={screenLength:0,perDistance:0,minWorldLength:0,maxWorldLength:0},ts={mask:255},es={function:{func:519,ref:2,mask:2},operation:{fail:7680,zFail:7680,zPass:0}},is={function:{func:519,ref:2,mask:2},operation:{fail:7680,zFail:7680,zPass:7681}};function ns(t){t.code.add(wr`
    // This is the maximum float value representable as 32bit fixed point,
    // it is rgba2float(vec4(1)) inlined.
    const float MAX_RGBA_FLOAT =
      255.0 / 256.0 +
      255.0 / 256.0 / 256.0 +
      255.0 / 256.0 / 256.0 / 256.0 +
      255.0 / 256.0 / 256.0 / 256.0 / 256.0;

    // Factors to convert to fixed point, i.e. factors (256^0, 256^1, 256^2, 256^3)
    const vec4 FIXED_POINT_FACTORS = vec4(1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0);

    vec4 float2rgba(const float value) {
      // Make sure value is in the domain we can represent
      float valueInValidDomain = clamp(value, 0.0, MAX_RGBA_FLOAT);

      // Decompose value in 32bit fixed point parts represented as
      // uint8 rgba components. Decomposition uses the fractional part after multiplying
      // by a power of 256 (this removes the bits that are represented in the previous
      // component) and then converts the fractional part to 8bits.
      vec4 fixedPointU8 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS) * 256.0);

      // Convert uint8 values (from 0 to 255) to floating point representation for
      // the shader
      const float toU8AsFloat = 1.0 / 255.0;

      return fixedPointU8 * toU8AsFloat;
    }

    // Factors to convert rgba back to float
    const vec4 RGBA_2_FLOAT_FACTORS = vec4(
      255.0 / (256.0),
      255.0 / (256.0 * 256.0),
      255.0 / (256.0 * 256.0 * 256.0),
      255.0 / (256.0 * 256.0 * 256.0 * 256.0)
    );

    float rgba2float(vec4 rgba) {
      // Convert components from 0->1 back to 0->255 and then
      // add the components together with their corresponding
      // fixed point factors, i.e. (256^1, 256^2, 256^3, 256^4)
      return dot(rgba, RGBA_2_FLOAT_FACTORS);
    }
  `)}function os(t){t.fragment.include(ns),t.fragment.uniforms.add("depthTex","sampler2D"),t.fragment.uniforms.add("shadowMapNum","int"),t.fragment.uniforms.add("shadowMapDistance","vec4"),t.fragment.uniforms.add("shadowMapMatrix","mat4",4),t.fragment.uniforms.add("depthHalfPixelSz","float"),t.fragment.code.add(wr`
    float readShadowMap(const in vec3 _vpos, float _linearDepth) {
      float halfPixelSize = depthHalfPixelSz;
      vec4 distance = shadowMapDistance;
      float depth = _linearDepth;

      //choose correct cascade
      int i = depth < distance[1] ? 0 : depth < distance[2] ? 1 : depth < distance[3] ? 2 : 3;

      if (i >= shadowMapNum) { return 0.0; }

      mat4 mat = i == 0 ? shadowMapMatrix[0] : i == 1 ? shadowMapMatrix[1] : i == 2 ? shadowMapMatrix[2] : shadowMapMatrix[3];

      vec4 lv = mat * vec4(_vpos, 1.0);
      lv.xy /= lv.w;

      // vertex completely outside? -> no shadow
      vec3 lvpos = 0.5 * lv.xyz + vec3(0.5);
      if (lvpos.z >= 1.0) { return 0.0; }
      if (lvpos.x < 0.0 || lvpos.x > 1.0 || lvpos.y < 0.0 || lvpos.y > 1.0) { return 0.0; }

      // calc coord in cascade texture
      vec2 uv = vec2(float(i - 2 * (i / 2)) * 0.5, float(i / 2) * 0.5) + 0.5 * lvpos.xy;

      float texSize = 0.5 / halfPixelSize;

      // filter, offset by half pixels
      vec2 st = fract((vec2(halfPixelSize) + uv) * texSize);

      float s00 = rgba2float(texture2D(depthTex, uv + vec2(-halfPixelSize, -halfPixelSize))) < lvpos.z ? 1.0 : 0.0;
      float s10 = rgba2float(texture2D(depthTex, uv + vec2(halfPixelSize, -halfPixelSize))) < lvpos.z ? 1.0 : 0.0;
      float s11 = rgba2float(texture2D(depthTex, uv + vec2(halfPixelSize, halfPixelSize))) < lvpos.z ? 1.0 : 0.0;
      float s01 = rgba2float(texture2D(depthTex, uv + vec2(-halfPixelSize, halfPixelSize))) < lvpos.z ? 1.0 : 0.0;

      return mix(mix(s00, s10, st.x), mix(s01, s11, st.x), st.y);
    }
  `)}var rs;(rs=os||(os={})).bindUniforms=function(t,e,i){e.shadowMappingEnabled&&(e.shadowMap.bind(t,i),e.shadowMap.bindView(t,e.origin))},rs.bindViewCustomOrigin=function(t,e,i){e.shadowMappingEnabled&&e.shadowMap.bindView(t,i)},rs.bindView=function(t,e){e.shadowMappingEnabled&&e.shadowMap.bindView(t,e.origin)};class ss{constructor(t,e,i,n,o){this._context=null,this._glName=null,this._bufferType=void 0,this._usage=35044,this._size=-1,this._indexType=void 0,this.id=as++,t.instanceCounter.increment(1,this),this._context=t,this._bufferType=e,this._usage=i,this._glName=this._context.gl.createBuffer(),n&&this.setData(n,o)}static createIndex(t,e,i,n){return new ss(t,34963,e,i,n)}static createVertex(t,e,i){return new ss(t,34962,e,i)}get glName(){return this._glName}get size(){return this._size}get usage(){return this._usage}get bufferType(){return this._bufferType}get indexType(){return this._indexType}get byteSize(){return 34962===this._bufferType?this._size:5125===this._indexType?4*this._size:2*this._size}dispose(){this._context&&(this._glName&&(this._context.gl.deleteBuffer(this._glName),this._glName=null),this._context.instanceCounter.decrement(1,this),this._context=null)}setData(t,e){if(!t)return;if("number"==typeof t){if(t<0&&console.error("Buffer size cannot be negative!"),34963===this._bufferType&&e)switch(this._indexType=e,this._size=t,e){case 5123:t*=2;break;case 5125:t*=4}}else{let e=t.byteLength;f(t)&&(e/=2,this._indexType=5123),m(t)&&(e/=4,this._indexType=5125),this._size=e}const i=this._context.getBoundVAO();this._context.bindVAO(null),this._context.bindBuffer(this),this._context.gl.bufferData(this._bufferType,t,this._usage),this._context.bindVAO(i)}setSubData(t,e=0,i=0,n){if(!t)return;(e<0||e>=this._size)&&console.error("offset is out of range!");let o=e,r=i,s=n,a=t.byteLength;f(t)&&(a/=2,o*=2,r*=2,s*=2),m(t)&&(a/=4,o*=4,r*=4,s*=4),void 0===n&&(n=a-1),i>=n&&console.error("end must be bigger than start!"),e+i-n>this._size&&console.error("An attempt to write beyond the end of the buffer!");const c=this._context.getBoundVAO();this._context.bindVAO(null),this._context.bindBuffer(this);const l=this._context.gl,u=ArrayBuffer.isView(t)?t.buffer:t;l.bufferSubData(this._bufferType,o,u.slice(r,s)),this._context.bindVAO(c)}}let as=0;function cs(t,e,i,n,o){const r=t.gl,s=t.capabilities.instancing;t.bindBuffer(i);for(const t of n){const i=e[t.name],n=(o||(0+t.baseInstance?t.baseInstance:0))*t.stride;if(void 0===i&&console.error(`There is no location for vertex attribute '${t.name}' defined.`),t.baseInstance&&!t.divisor&&console.error(`Vertex attribute '${t.name}' uses baseInstanceOffset without divisor.`),t.count<=4)r.vertexAttribPointer(i,t.count,t.type,t.normalized,t.stride,t.offset+n),r.enableVertexAttribArray(i),t.divisor&&t.divisor>0&&s&&s.vertexAttribDivisor(i,t.divisor);else if(9===t.count)for(let e=0;e<3;e++)r.vertexAttribPointer(i+e,3,t.type,t.normalized,t.stride,t.offset+12*e+n),r.enableVertexAttribArray(i+e),t.divisor&&t.divisor>0&&s&&s.vertexAttribDivisor(i+e,t.divisor);else if(16===t.count)for(let e=0;e<4;e++)r.vertexAttribPointer(i+e,4,t.type,t.normalized,t.stride,t.offset+16*e+n),r.enableVertexAttribArray(i+e),t.divisor&&t.divisor>0&&s&&s.vertexAttribDivisor(i+e,t.divisor);else console.error("Unsupported vertex attribute element count: "+t.count)}}function ls(t,e,i,n){const o=t.gl,r=t.capabilities.instancing;t.bindBuffer(i);for(const t of n){const i=e[t.name];if(t.count<=4)o.disableVertexAttribArray(i),t.divisor&&t.divisor>0&&r&&r.vertexAttribDivisor(i,0);else if(9===t.count)for(let e=0;e<3;e++)o.disableVertexAttribArray(i+e),t.divisor&&t.divisor>0&&r&&r.vertexAttribDivisor(i+e,0);else if(16===t.count)for(let e=0;e<4;e++)o.disableVertexAttribArray(i+e),t.divisor&&t.divisor>0&&r&&r.vertexAttribDivisor(i+e,0);else console.error("Unsupported vertex attribute element count: "+t.count)}t.unbindBuffer(34962)}let us=0;class hs{constructor(t,e,i,n,o){this._context=t,this._locations=e,this._layout=i,this._buffers=n,this._indexBuffer=o,this._glName=null,this.id=us++,this._initialized=!1,t.instanceCounter.increment(2,this)}get glName(){return this._glName}get vertexBuffers(){return this._buffers}get indexBuffer(){return this._indexBuffer}get size(){return Object.keys(this._buffers).reduce(((t,e)=>t+this._buffers[e].size),this._indexBuffer?this._indexBuffer.size:0)}get layout(){return this._layout}get locations(){return this._locations}dispose(t=!0){if(!this._context)return;const e=this._context.capabilities.vao;if(e&&this._glName&&(e.deleteVertexArray(this._glName),this._glName=null),this._context.getBoundVAO()===this&&this._context.bindVAO(null),t){for(const t in this._buffers)this._buffers[t].dispose(),delete this._buffers[t];this._indexBuffer&&(this._indexBuffer.dispose(),this._indexBuffer=null)}this._context.instanceCounter.decrement(2,this),this._context=null}initialize(){if(this._initialized)return;const t=this._context.capabilities.vao;if(t){const e=t.createVertexArray();t.bindVertexArray(e),this._bindLayout(),t.bindVertexArray(null),this._glName=e}this._initialized=!0}bind(){this.initialize();const t=this._context.capabilities.vao;t?t.bindVertexArray(this.glName):(this._context.bindVAO(null),this._bindLayout())}_bindLayout(){const t=this._buffers,e=!!this._context.capabilities.vao,i=this._layout,n=this._indexBuffer;t||console.error("Vertex buffer dictionary is empty!");const o=this._context.gl;for(const e in t){const n=t[e];n||console.error("Vertex buffer is uninitialized!");const o=i[e];o||console.error("Vertex element descriptor is empty!"),cs(this._context,this._locations,n,o)}n&&(e?o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,n.glName):this._context.bindBuffer(n))}unbind(){this.initialize();const t=this._context.capabilities.vao;t?t.bindVertexArray(null):this._unbindLayout()}_unbindLayout(){const t=this._buffers,e=this._layout;t||console.error("Vertex buffer dictionary is empty!");for(const i in t){const n=t[i];n||console.error("Vertex buffer is uninitialized!"),ls(this._context,this._locations,n,e[i])}const i=this._indexBuffer;i&&this._context.unbindBuffer(i.bufferType)}}class ds{constructor(t){this.context=t,this._doublePrecisionRequiresObfuscation=null}get doublePrecisionRequiresObfuscation(){if(r(this._doublePrecisionRequiresObfuscation)){const t=ms(this.context,!1),e=ms(this.context,!0);this._doublePrecisionRequiresObfuscation=0!==t&&(0===e||t/e>5)}return this._doublePrecisionRequiresObfuscation}}let fs=null;function ms(t,e){const i=new ee(t,{colorTarget:0,depthStencilTarget:0},{target:3553,wrapMode:33071,pixelFormat:6408,dataType:5121,samplingMode:9728,width:1,height:1}),n=ss.createVertex(t,35044,new Uint16Array([0,0,1,0,0,1,1,1])),o=new hs(t,{a_pos:0},{geometry:[{name:"a_pos",count:2,type:5123,offset:0,stride:4,normalized:!1}]},{geometry:n}),r=q(5633261.287538229,2626832.878767164,1434988.0495278358),s=q(5633271.46742708,2626873.6381334523,1434963.231608387),a=function(i,n){const o=new Gr(t,`\n\n  precision highp float;\n\n  attribute vec2 a_pos;\n\n  uniform vec3 u_highA;\n  uniform vec3 u_lowA;\n  uniform vec3 u_highB;\n  uniform vec3 u_lowB;\n\n  varying vec4 v_color;\n\n  ${e?"#define DOUBLE_PRECISION_REQUIRES_OBFUSCATION":""}\n\n  #ifdef DOUBLE_PRECISION_REQUIRES_OBFUSCATION\n\n  vec3 dpPlusFrc(vec3 a, vec3 b) {\n    return mix(a, a + b, vec3(notEqual(b, vec3(0))));\n  }\n\n  vec3 dpMinusFrc(vec3 a, vec3 b) {\n    return mix(vec3(0), a - b, vec3(notEqual(a, b)));\n  }\n\n  vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {\n    vec3 t1 = dpPlusFrc(hiA, hiB);\n    vec3 e = dpMinusFrc(t1, hiA);\n    vec3 t2 = dpMinusFrc(hiB, e) + dpMinusFrc(hiA, dpMinusFrc(t1, e)) + loA + loB;\n    return t1 + t2;\n  }\n\n  #else\n\n  vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {\n    vec3 t1 = hiA + hiB;\n    vec3 e = t1 - hiA;\n    vec3 t2 = ((hiB - e) + (hiA - (t1 - e))) + loA + loB;\n    return t1 + t2;\n  }\n\n  #endif\n\n  const float MAX_RGBA_FLOAT =\n    255.0 / 256.0 +\n    255.0 / 256.0 / 256.0 +\n    255.0 / 256.0 / 256.0 / 256.0 +\n    255.0 / 256.0 / 256.0 / 256.0 / 256.0;\n\n  const vec4 FIXED_POINT_FACTORS = vec4(1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0);\n\n  vec4 float2rgba(const float value) {\n    // Make sure value is in the domain we can represent\n    float valueInValidDomain = clamp(value, 0.0, MAX_RGBA_FLOAT);\n\n    // Decompose value in 32bit fixed point parts represented as\n    // uint8 rgba components. Decomposition uses the fractional part after multiplying\n    // by a power of 256 (this removes the bits that are represented in the previous\n    // component) and then converts the fractional part to 8bits.\n    vec4 fixedPointU8 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS) * 256.0);\n\n    // Convert uint8 values (from 0 to 255) to floating point representation for\n    // the shader\n    const float toU8AsFloat = 1.0 / 255.0;\n\n    return fixedPointU8 * toU8AsFloat;\n  }\n\n  void main() {\n    vec3 val = dpAdd(u_highA, u_lowA, -u_highB, -u_lowB);\n\n    v_color = float2rgba(val.z / 25.0);\n\n    gl_Position = vec4(a_pos * 2.0 - 1.0, 0.0, 1.0);\n  }\n  `,"\n  precision highp float;\n\n  varying vec4 v_color;\n\n  void main() {\n    gl_FragColor = v_color;\n  }\n  ",{a_pos:0}),r=new Float32Array(6);Ho(i,r,3);const s=new Float32Array(6);return Ho(n,s,3),t.bindProgram(o),o.setUniform3f("u_highA",r[0],r[2],r[4]),o.setUniform3f("u_lowA",r[1],r[3],r[5]),o.setUniform3f("u_highB",s[0],s[2],s[4]),o.setUniform3f("u_lowB",s[1],s[3],s[5]),o}(r,s),c=t.getBoundFramebufferObject(),{x:l,y:u,width:h,height:d}=t.getViewport();t.bindFramebuffer(i),t.setViewport(0,0,1,1),t.bindVAO(o),t.drawArrays(5,0,4);const f=new Uint8Array(4);i.readPixels(0,0,1,1,6408,5121,f),a.dispose(),o.dispose(!1),n.dispose(),i.dispose(),t.setViewport(l,u,h,d),t.bindFramebuffer(c);const m=(r[2]-s[2])/25,v=Gi(f);return Math.abs(m-v)}function vs({code:t},e){t.add(e.doublePrecisionRequiresObfuscation?wr`
      vec3 dpPlusFrc(vec3 a, vec3 b) {
        return mix(a, a + b, vec3(notEqual(b, vec3(0))));
      }

      vec3 dpMinusFrc(vec3 a, vec3 b) {
        return mix(vec3(0), a - b, vec3(notEqual(a, b)));
      }

      // based on https://www.thasler.com/blog/blog/glsl-part2-emu
      vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
        vec3 t1 = dpPlusFrc(hiA, hiB);
        vec3 e = dpMinusFrc(t1, hiA);
        vec3 t2 = dpMinusFrc(hiB, e) + dpMinusFrc(hiA, dpMinusFrc(t1, e)) + loA + loB;
        return t1 + t2;
      }
    `:wr`
      vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
        vec3 t1 = hiA + hiB;
        vec3 e = t1 - hiA;
        vec3 t2 = ((hiB - e) + (hiA - (t1 - e))) + loA + loB;
        return t1 + t2;
      }
    `)}function ps(t){return!!v("force-double-precision-obfuscation")||function(t){return(r(fs)||fs.context!==t)&&(fs=new ds(t)),fs}(t).doublePrecisionRequiresObfuscation}function gs(t,e){e.instanced&&e.instancedDoublePrecision&&(t.attributes.add("modelOriginHi","vec3"),t.attributes.add("modelOriginLo","vec3"),t.attributes.add("model","mat3"),t.attributes.add("modelNormal","mat3")),e.instancedDoublePrecision&&(t.vertex.include(vs,e),t.vertex.uniforms.add("viewOriginHi","vec3"),t.vertex.uniforms.add("viewOriginLo","vec3"));const i=[wr`
    vec3 calculateVPos() {
      ${e.instancedDoublePrecision?"return model * localPosition().xyz;":"return localPosition().xyz;"}
    }
    `,wr`
    vec3 subtractOrigin(vec3 _pos) {
      ${e.instancedDoublePrecision?wr`
          vec3 originDelta = dpAdd(viewOriginHi, viewOriginLo, -modelOriginHi, -modelOriginLo);
          return _pos - originDelta;`:"return vpos;"}
    }
    `,wr`
    vec3 dpNormal(vec4 _normal) {
      ${e.instancedDoublePrecision?"return normalize(modelNormal * _normal.xyz);":"return normalize(_normal.xyz);"}
    }
    `,wr`
    vec3 dpNormalView(vec4 _normal) {
      ${e.instancedDoublePrecision?"return normalize((viewNormal * vec4(modelNormal * _normal.xyz, 1.0)).xyz);":"return normalize((viewNormal * _normal).xyz);"}
    }
    `,e.vertexTangets?wr`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${e.instancedDoublePrecision?"return vec4(modelNormal * _tangent.xyz, _tangent.w);":"return _tangent;"}

    }
    `:wr``];t.vertex.code.add(i[0]),t.vertex.code.add(i[1]),t.vertex.code.add(i[2]),2===e.output&&t.vertex.code.add(i[3]),t.vertex.code.add(i[4])}!function(t){t.Uniforms=class{},t.bindCustomOrigin=function(t,e){(function(t,e,i){for(let n=0;n<3;++n)ko[0]=t[n],Ho(ko,Uo,1),e[n]=Uo[0],i[n]=Uo[1]})(e,xs,bs),t.setUniform3fv("viewOriginHi",xs),t.setUniform3fv("viewOriginLo",bs)}}(gs||(gs={}));const xs=W(),bs=W();function ws(t,e){1===e.attributeTextureCoordinates&&(t.attributes.add("uv0","vec2"),t.varyings.add("vuv0","vec2"),t.vertex.code.add(wr`
      void forwardTextureCoordinates() {
        vuv0 = uv0;
      }
    `)),2===e.attributeTextureCoordinates&&(t.attributes.add("uv0","vec2"),t.varyings.add("vuv0","vec2"),t.attributes.add("uvRegion","vec4"),t.varyings.add("vuvRegion","vec4"),t.vertex.code.add(wr`
      void forwardTextureCoordinates() {
        vuv0 = uv0;
        vuvRegion = uvRegion;
      }
    `)),0===e.attributeTextureCoordinates&&t.vertex.code.add(wr`
      void forwardTextureCoordinates() {}
    `)}function ys(t){t.extensions.add("GL_EXT_shader_texture_lod"),t.extensions.add("GL_OES_standard_derivatives"),t.fragment.code.add(wr`
    #ifndef GL_EXT_shader_texture_lod
      float calcMipMapLevel(const vec2 ddx, const vec2 ddy) {
        float deltaMaxSqr = max(dot(ddx, ddx), dot(ddy, ddy));
        return max(0.0, 0.5 * log2(deltaMaxSqr));
      }
    #endif

    vec4 textureAtlasLookup(sampler2D texture, vec2 textureSize, vec2 textureCoordinates, vec4 atlasRegion) {
      //[umin, vmin, umax, vmax]
      vec2 atlasScale = atlasRegion.zw - atlasRegion.xy;
      vec2 uvAtlas = fract(textureCoordinates) * atlasScale + atlasRegion.xy;

      // calculate derivative of continuous texture coordinate
      // to avoid mipmapping artifacts caused by manual wrapping in shader
      vec2 dUVdx = dFdx(textureCoordinates) * atlasScale;
      vec2 dUVdy = dFdy(textureCoordinates) * atlasScale;

      #ifdef GL_EXT_shader_texture_lod
        return texture2DGradEXT(texture, uvAtlas, dUVdx, dUVdy);
      #else
        // use bias to compensate for difference in automatic vs desired mipmap level
        vec2 dUVdxAuto = dFdx(uvAtlas);
        vec2 dUVdyAuto = dFdy(uvAtlas);
        float mipMapLevel = calcMipMapLevel(dUVdx * textureSize, dUVdy * textureSize);
        float autoMipMapLevel = calcMipMapLevel(dUVdxAuto * textureSize, dUVdyAuto * textureSize);

        return texture2D(texture, uvAtlas, mipMapLevel - autoMipMapLevel);
      #endif
    }
  `)}function _s(t,e){t.include(ws,e),t.fragment.code.add(wr`
  struct TextureLookupParameter {
    vec2 uv;
    ${e.supportsTextureAtlas?"vec2 size;":""}
  } vtc;
  `),1===e.attributeTextureCoordinates&&t.fragment.code.add(wr`
      vec4 textureLookup(sampler2D tex, TextureLookupParameter params) {
        return texture2D(tex, params.uv);
      }
    `),2===e.attributeTextureCoordinates&&(t.include(ys),t.fragment.code.add(wr`
    vec4 textureLookup(sampler2D tex, TextureLookupParameter params) {
        return textureAtlasLookup(tex, params.size, params.uv, vuvRegion);
      }
    `))}function Ss(t,e){const i=t.fragment,n=e.hasMetalnessAndRoughnessTexture||e.hasEmissionTexture||e.hasOcclusionTexture;1===e.pbrMode&&n&&t.include(_s,e),2!==e.pbrMode?(0===e.pbrMode&&i.code.add(wr`
      float getBakedOcclusion() { return 1.0; }
  `),1===e.pbrMode&&(i.uniforms.add("emissionFactor","vec3"),i.uniforms.add("mrrFactors","vec3"),i.code.add(wr`
      vec3 mrr;
      vec3 emission;
      float occlusion;
    `),e.hasMetalnessAndRoughnessTexture&&(i.uniforms.add("texMetallicRoughness","sampler2D"),e.supportsTextureAtlas&&i.uniforms.add("texMetallicRoughnessSize","vec2"),i.code.add(wr`
      void applyMetallnessAndRoughness(TextureLookupParameter params) {
        vec3 metallicRoughness = textureLookup(texMetallicRoughness, params).rgb;

        mrr[0] *= metallicRoughness.b;
        mrr[1] *= metallicRoughness.g;
      }`)),e.hasEmissionTexture&&(i.uniforms.add("texEmission","sampler2D"),e.supportsTextureAtlas&&i.uniforms.add("texEmissionSize","vec2"),i.code.add(wr`
      void applyEmission(TextureLookupParameter params) {
        emission *= textureLookup(texEmission, params).rgb;
      }`)),e.hasOcclusionTexture?(i.uniforms.add("texOcclusion","sampler2D"),e.supportsTextureAtlas&&i.uniforms.add("texOcclusionSize","vec2"),i.code.add(wr`
      void applyOcclusion(TextureLookupParameter params) {
        occlusion *= textureLookup(texOcclusion, params).r;
      }

      float getBakedOcclusion() {
        return occlusion;
      }
      `)):i.code.add(wr`
      float getBakedOcclusion() { return 1.0; }
      `),i.code.add(wr`
    void applyPBRFactors() {
      mrr = mrrFactors;
      emission = emissionFactor;
      occlusion = 1.0;
      ${n?"vtc.uv = vuv0;":""}
      ${e.hasMetalnessAndRoughnessTexture?e.supportsTextureAtlas?"vtc.size = texMetallicRoughnessSize; applyMetallnessAndRoughness(vtc);":"applyMetallnessAndRoughness(vtc);":""}
      ${e.hasEmissionTexture?e.supportsTextureAtlas?"vtc.size = texEmissionSize; applyEmission(vtc);":"applyEmission(vtc);":""}
      ${e.hasOcclusionTexture?e.supportsTextureAtlas?"vtc.size = texOcclusionSize; applyOcclusion(vtc);":"applyOcclusion(vtc);":""}
    }
  `))):i.code.add(wr`
      const vec3 mrr = vec3(0.0, 0.6, 0.2);
      const vec3 emission = vec3(0.0);
      float occlusion = 1.0;

      void applyPBRFactors() {}

      float getBakedOcclusion() { return 1.0; }
    `)}function As(t,e){t.vertex.code.add(e.linearDepth?wr`
    vec4 transformPositionWithDepth(mat4 proj, mat4 view, vec3 pos, vec2 nearFar, out float depth) {
      vec4 eye = view * vec4(pos, 1.0);
      depth = (-eye.z - nearFar[0]) / (nearFar[1] - nearFar[0]) ;
      return proj * eye;
    }
    `:wr`
    vec4 transformPosition(mat4 proj, mat4 view, vec3 pos) {
      // Make sure the order of operations is the same as in transformPositionWithDepth.
      return proj * (view * vec4(pos, 1.0));
    }
    `)}se(0,.6,.2),(Ss||(Ss={})).bindUniforms=function(t,e,i=!1){i||(t.setUniform3fv("mrrFactors",e.mrrFactors),t.setUniform3fv("emissionFactor",e.emissiveFactor))};const Ms=t.getLogger("esri.views.3d.webgl-engine.core.shaderModules.shaderBuilder");class Cs{constructor(){this.includedModules=new Map}include(t,e){this.includedModules.has(t)?this.includedModules.get(t)!==e&&Ms.error("Trying to include shader module multiple times with different sets of options."):(this.includedModules.set(t,e),t(this.builder,e))}}class Ts extends Cs{constructor(){super(...arguments),this.vertex=new Ls,this.fragment=new Ls,this.attributes=new Fs,this.varyings=new Ds,this.extensions=new zs,this.defines=new Rs}get builder(){return this}generateSource(t){const e=this.extensions.generateSource(t),i=this.attributes.generateSource(t),n=this.varyings.generateSource(),o="vertex"===t?this.vertex:this.fragment,r=o.uniforms.generateSource(),s=o.code.generateSource(),a="vertex"===t?Ns:Is,c=this.defines.generateSource().concat(o.defines.generateSource());return`\n${e.join("\n")}\n\n${c.join("\n")}\n\n${a}\n\n${r.join("\n")}\n\n${i.join("\n")}\n\n${n.join("\n")}\n\n${s.join("\n")}`}}class Os{constructor(){this._entries=new Array,this._set=new Set}add(t,e,i){const n=`${t}_${e}_${i}`;return this._set.has(n)||(this._entries.push([t,e,i]),this._set.add(n)),this}generateSource(){return this._entries.map((t=>{return`uniform ${t[1]} ${t[0]}${e=t[2],e?`[${e}]`:""};`;var e}))}}class Ps{constructor(){this._entries=new Array}add(t){this._entries.push(t)}generateSource(){return this._entries}}class Ls extends Cs{constructor(){super(...arguments),this.uniforms=new Os,this.code=new Ps,this.defines=new Rs}get builder(){return this}}class Fs{constructor(){this._entries=new Array}add(t,e){this._entries.push([t,e])}generateSource(t){return"fragment"===t?[]:this._entries.map((t=>`attribute ${t[1]} ${t[0]};`))}}class Ds{constructor(){this._entries=new Array}add(t,e){this._entries.push([t,e])}generateSource(){return this._entries.map((t=>`varying ${t[1]} ${t[0]};`))}}class zs{constructor(){this._entries=new Set}add(t){this._entries.add(t)}generateSource(t){const e="vertex"===t?zs.ALLOWLIST_VERTEX:zs.ALLOWLIST_FRAGMENT;return Array.from(this._entries).filter((t=>e.includes(t))).map((t=>`#extension ${t} : enable`))}}zs.ALLOWLIST_FRAGMENT=["GL_EXT_shader_texture_lod","GL_OES_standard_derivatives"],zs.ALLOWLIST_VERTEX=[];class Rs{constructor(){this._entries=new Map}addInt(t,e){const i=e%1==0?e.toFixed(0):e.toString();this._entries.set(t,i)}addFloat(t,e){const i=e%1==0?e.toFixed(1):e.toString();this._entries.set(t,i)}generateSource(){return Array.from(this._entries,(([t,e])=>`#define ${t} ${e}`))}}const Is="#ifdef GL_FRAGMENT_PRECISION_HIGH\n  precision highp float;\n  precision highp sampler2D;\n#else\n  precision mediump float;\n  precision mediump sampler2D;\n#endif",Ns="precision highp float;\nprecision highp sampler2D;";function Es(t,e){e.attributeColor?(t.attributes.add("color","vec4"),t.varyings.add("vColor","vec4"),t.vertex.code.add(wr`
      void forwardVertexColor() { vColor = color; }
    `),t.vertex.code.add(wr`
      void forwardNormalizedVertexColor() { vColor = color * 0.003921568627451; }
    `)):t.vertex.code.add(wr`
      void forwardVertexColor() {}
      void forwardNormalizedVertexColor() {}
    `)}function Bs(t,e){0===e.output&&e.receiveShadows?(t.varyings.add("linearDepth","float"),t.vertex.code.add(wr`
      void forwardLinearDepth() { linearDepth = gl_Position.w; }
    `)):1===e.output||3===e.output?(t.varyings.add("linearDepth","float"),t.vertex.uniforms.add("uCameraNearFar","vec2"),t.vertex.code.add(wr`
      void forwardLinearDepth() {
        linearDepth = (-position_view().z - uCameraNearFar[0]) / (uCameraNearFar[1] - uCameraNearFar[0]);
      }
    `)):t.vertex.code.add(wr`
      void forwardLinearDepth() {}
    `)}function Vs(t){t.vertex.code.add(wr`
    const float PI = 3.141592653589793;
  `),t.fragment.code.add(wr`
    const float PI = 3.141592653589793;
    const float LIGHT_NORMALIZATION = 1.0 / PI;
    const float INV_PI = 0.3183098861837907;
    const float HALF_PI = 1.570796326794897;
    `)}function Gs(t){const e=t.fragment.code;e.add(wr`
    vec3 evaluateDiffuseIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float NdotNG)
    {
      return ((1.0 - NdotNG) * ambientGround + (1.0 + NdotNG) * ambientSky) * 0.5;
    }
    `),e.add(wr`
    float integratedRadiance(float cosTheta2, float roughness)
    {
      return (cosTheta2 - 1.0) / (cosTheta2 * (1.0 - roughness * roughness) - 1.0);
    }
    `),e.add(wr`
    vec3 evaluateSpecularIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float RdotNG, float roughness)
    {
      float cosTheta2 = 1.0 - RdotNG * RdotNG;
      float intRadTheta = integratedRadiance(cosTheta2, roughness);

      // Calculate the integrated directional radiance of the ground and the sky
      float ground = RdotNG < 0.0 ? 1.0 - intRadTheta : 1.0 + intRadTheta;
      float sky = 2.0 - ground;
      return (ground * ambientGround + sky * ambientSky) * 0.5;
    }
    `)}function Hs(t,e){const i=t.fragment.code;t.include(Vs),3===e.pbrMode||4===e.pbrMode?(i.add(wr`
    struct PBRShadingWater
    {
        float NdotL;   // cos angle between normal and light direction
        float NdotV;   // cos angle between normal and view direction
        float NdotH;   // cos angle between normal and half vector
        float VdotH;   // cos angle between view direction and half vector
        float LdotH;   // cos angle between light direction and half vector
        float VdotN;   // cos angle between view direction and normal vector
    };

    float dtrExponent = ${e.useCustomDTRExponentForWater?"2.2":"2.0"};
    `),i.add(wr`
    vec3 fresnelReflection(float angle, vec3 f0, float f90) {
      return f0 + (f90 - f0) * pow(1.0 - angle, 5.0);
    }
    `),i.add(wr`
    float normalDistributionWater(float NdotH, float roughness)
    {
      float r2 = roughness * roughness;
      float NdotH2 = NdotH * NdotH;
      float denom = pow((NdotH2 * (r2 - 1.0) + 1.0), dtrExponent) * PI;
      return r2 / denom;
    }
    `),i.add(wr`
    float geometricOcclusionKelemen(float LoH)
    {
        return 0.25 / (LoH * LoH);
    }
    `),i.add(wr`
    vec3 brdfSpecularWater(in PBRShadingWater props, float roughness, vec3 F0, float F0Max)
    {
      vec3  F = fresnelReflection(props.VdotH, F0, F0Max);
      float dSun = normalDistributionWater(props.NdotH, roughness);
      float V = geometricOcclusionKelemen(props.LdotH);

      float diffusionSunHaze = mix(roughness + 0.045, roughness + 0.385, 1.0 - props.VdotH);
      float strengthSunHaze  = 1.2;
      float dSunHaze = normalDistributionWater(props.NdotH, diffusionSunHaze)*strengthSunHaze;

      return ((dSun + dSunHaze) * V) * F;
    }

    vec3 tonemapACES(const vec3 x) {
      return (x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14);
    }
    `)):1!==e.pbrMode&&2!==e.pbrMode||(t.include(Gs),i.add(wr`
    struct PBRShadingInfo
    {
        float NdotL;                  // cos angle between normal and light direction
        float NdotV;                  // cos angle between normal and view direction
        float NdotH;                  // cos angle between normal and half vector
        float VdotH;                  // cos angle between view direction and half vector
        float LdotH;                  // cos angle between view light direction and half vector
        float NdotNG;                 // cos angle between normal and normal of the ground
        float RdotNG;                 // cos angle between view direction reflected of the normal and normal of the ground
        float NdotAmbDir;             // cos angle between view direction and the fill light in ambient illumination
        float NdotH_Horizon;          // cos angle between normal and half vector defined with horizon illumination
        vec3 skyRadianceToSurface;         // integrated radiance of the sky based on the surface roughness (used for specular reflection)
        vec3 groundRadianceToSurface;      // integrated radiance of the ground based on the surface roughness (used for specular reflection)
        vec3 skyIrradianceToSurface;       // irradiance of the sky (used for diffuse reflection)
        vec3 groundIrradianceToSurface;    // irradiance of the ground (used for diffuse reflection)

        float averageAmbientRadiance;      // average ambient radiance used to deduce black level in gamut mapping
        float ssao;                   // ssao coefficient
        vec3 albedoLinear;            // linear color of the albedo
        vec3 f0;                      // fresnel value at normal incident light
        vec3 f90;                     // fresnel value at 90o of incident light

        vec3 diffuseColor;            // diffuse color of the material used in environment illumination
        float metalness;              // metalness of the material
        float roughness;              // roughness of the material
    };
    `),i.add(wr`
    float normalDistribution(float NdotH, float roughness)
    {
        float a = NdotH * roughness;
        float b = roughness / (1.0 - NdotH * NdotH + a * a);
        return b * b * INV_PI;
    }
    `),i.add(wr`
    const vec4 c0 = vec4(-1.0, -0.0275, -0.572,  0.022);
    const vec4 c1 = vec4( 1.0,  0.0425,  1.040, -0.040);
    const vec2 c2 = vec2(-1.04, 1.04);

    vec2 prefilteredDFGAnalytical(float roughness, float NdotV) {
        vec4 r = roughness * c0 + c1;
        float a004 = min(r.x * r.x, exp2(-9.28 * NdotV)) * r.x + r.y;
        return c2 * a004 + r.zw;
    }
    `),i.add(wr`
    vec3 evaluateEnvironmentIllumination(PBRShadingInfo inputs) {
      vec3 indirectDiffuse = evaluateDiffuseIlluminationHemisphere(inputs.groundIrradianceToSurface, inputs.skyIrradianceToSurface, inputs.NdotNG);
      vec3 indirectSpecular = evaluateSpecularIlluminationHemisphere(inputs.groundRadianceToSurface, inputs.skyRadianceToSurface, inputs.RdotNG, inputs.roughness);

      // From diffuse illumination calculate reflected color
      vec3 diffuseComponent = inputs.diffuseColor * indirectDiffuse * INV_PI;

      // From specular illumination calculate reflected color
      vec2 dfg = prefilteredDFGAnalytical(inputs.roughness, inputs.NdotV);
      vec3 specularColor = inputs.f0 * dfg.x + inputs.f90 * dfg.y;
      vec3 specularComponent = specularColor * indirectSpecular;

      return (diffuseComponent + specularComponent);
    }
    `),i.add(wr`
    float gamutMapChanel(float x, vec2 p){
      return (x < p.x) ? mix(0.0, p.y, x/p.x) : mix(p.y, 1.0, (x - p.x) / (1.0 - p.x) );
    }`),i.add(wr`
    vec3 blackLevelSoftCompression(vec3 inColor, PBRShadingInfo inputs){
      vec3 outColor;
      vec2 p = vec2(0.02 * (inputs.averageAmbientRadiance), 0.0075 * (inputs.averageAmbientRadiance));
      outColor.x = gamutMapChanel(inColor.x, p) ;
      outColor.y = gamutMapChanel(inColor.y, p) ;
      outColor.z = gamutMapChanel(inColor.z, p) ;
      return outColor;
    }
    `))}function ks(t){t.vertex.code.add(wr`
    vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
      vec3 camToVert = posWorld - camPosWorld;

      bool isBackface = dot(camToVert, normalWorld) > 0.0;
      if (isBackface) {
        posClip.z += 0.0000003 * posClip.w;
      }
      return posClip;
    }
  `)}function Us(t){const e=wr`
    vec3 decodeNormal(vec2 f) {
      float z = 1.0 - abs(f.x) - abs(f.y);
      return vec3(f + sign(f) * min(z, 0.0), z);
    }
  `;t.fragment.code.add(e),t.vertex.code.add(e)}function $s(t,e){0===e.normalType&&(t.attributes.add("normal","vec3"),t.vertex.code.add(wr`
      vec3 normalModel() {
        return normal;
      }
    `)),1===e.normalType&&(t.include(Us),t.attributes.add("normalCompressed","vec2"),t.vertex.code.add(wr`
      vec3 normalModel() {
        return decodeNormal(normalCompressed);
      }
    `)),3===e.normalType&&(t.extensions.add("GL_OES_standard_derivatives"),t.fragment.code.add(wr`
      vec3 screenDerivativeNormal(vec3 positionView) {
        return normalize(cross(dFdx(positionView), dFdy(positionView)));
      }
    `))}function js(t){t.attributes.add("position","vec3"),t.vertex.code.add(wr`
    vec3 positionModel() { return position; }
  `)}function Ws(t){t.vertex.code.add(wr`
    vec4 decodeSymbolColor(vec4 symbolColor, out int colorMixMode) {
      float symbolAlpha = 0.0;

      const float maxTint = 85.0;
      const float maxReplace = 170.0;
      const float scaleAlpha = 3.0;

      if (symbolColor.a > maxReplace) {
        colorMixMode = ${wr.int(1)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxReplace);
      } else if (symbolColor.a > maxTint) {
        colorMixMode = ${wr.int(3)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxTint);
      } else if (symbolColor.a > 0.0) {
        colorMixMode = ${wr.int(4)};
        symbolAlpha = scaleAlpha * symbolColor.a;
      } else {
        colorMixMode = ${wr.int(1)};
        symbolAlpha = 0.0;
      }

      return vec4(symbolColor.r, symbolColor.g, symbolColor.b, symbolAlpha);
    }
  `)}function qs(t,e){e.symbolColor?(t.include(Ws),t.attributes.add("symbolColor","vec4"),t.varyings.add("colorMixMode","mediump float")):t.fragment.uniforms.add("colorMixMode","int"),t.vertex.code.add(e.symbolColor?wr`
    int symbolColorMixMode;

    vec4 getSymbolColor() {
      return decodeSymbolColor(symbolColor, symbolColorMixMode) * 0.003921568627451;
    }

    void forwardColorMixMode() {
      colorMixMode = float(symbolColorMixMode) + 0.5;
    }
  `:wr`
    vec4 getSymbolColor() { return vec4(1.0); }
    void forwardColorMixMode() {}
    `)}function Xs(t,e){t.include(js),t.vertex.include(vs,e),t.varyings.add("vPositionWorldCameraRelative","vec3"),t.varyings.add("vPosition_view","vec3"),t.vertex.uniforms.add("uTransform_WorldFromModel_RS","mat3"),t.vertex.uniforms.add("uTransform_WorldFromModel_TH","vec3"),t.vertex.uniforms.add("uTransform_WorldFromModel_TL","vec3"),t.vertex.uniforms.add("uTransform_WorldFromView_TH","vec3"),t.vertex.uniforms.add("uTransform_WorldFromView_TL","vec3"),t.vertex.uniforms.add("uTransform_ViewFromCameraRelative_RS","mat3"),t.vertex.uniforms.add("uTransform_ProjFromView","mat4"),t.vertex.code.add(wr`
    // compute position in world space orientation, but relative to the camera position
    vec3 positionWorldCameraRelative() {
      vec3 rotatedModelPosition = uTransform_WorldFromModel_RS * positionModel();

      vec3 transform_CameraRelativeFromModel = dpAdd(
        uTransform_WorldFromModel_TL,
        uTransform_WorldFromModel_TH,
        -uTransform_WorldFromView_TL,
        -uTransform_WorldFromView_TH
      );

      return transform_CameraRelativeFromModel + rotatedModelPosition;
    }

    // position in view space, that is relative to the camera position and orientation
    vec3 position_view() {
      return uTransform_ViewFromCameraRelative_RS * positionWorldCameraRelative();
    }

    // compute gl_Position and forward related varyings to fragment shader
    void forwardPosition() {
      vPositionWorldCameraRelative = positionWorldCameraRelative();
      vPosition_view = position_view();
      gl_Position = uTransform_ProjFromView * vec4(vPosition_view, 1.0);
    }

    vec3 positionWorld() {
      return uTransform_WorldFromView_TL + vPositionWorldCameraRelative;
    }
  `),t.fragment.uniforms.add("uTransform_WorldFromView_TL","vec3"),t.fragment.code.add(wr`
    vec3 positionWorld() {
      return uTransform_WorldFromView_TL + vPositionWorldCameraRelative;
    }
  `)}function Ks(t,e){0===e.normalType||1===e.normalType?(t.include($s,e),t.varyings.add("vNormalWorld","vec3"),t.varyings.add("vNormalView","vec3"),t.vertex.uniforms.add("uTransformNormal_GlobalFromModel","mat3"),t.vertex.uniforms.add("uTransformNormal_ViewFromGlobal","mat3"),t.vertex.code.add(wr`
      void forwardNormal() {
        vNormalWorld = uTransformNormal_GlobalFromModel * normalModel();
        vNormalView = uTransformNormal_ViewFromGlobal * vNormalWorld;
      }
    `)):2===e.normalType?(t.include(Xs,e),t.varyings.add("vNormalWorld","vec3"),t.vertex.code.add(wr`
    void forwardNormal() {
      vNormalWorld = ${1===e.viewingMode?wr`normalize(vPositionWorldCameraRelative);`:wr`vec3(0.0, 0.0, 1.0);`}
    }
    `)):t.vertex.code.add(wr`
      void forwardNormal() {}
    `)}function Qs(t,e){t.fragment.include(ns),3===e.output?(t.extensions.add("GL_OES_standard_derivatives"),t.fragment.code.add(wr`
      float _calculateFragDepth(const in float depth) {
        // calc polygon offset
        const float SLOPE_SCALE = 2.0;
        const float BIAS = 2.0 * .000015259;    // 1 / (2^16 - 1)
        float m = max(abs(dFdx(depth)), abs(dFdy(depth)));
        float result = depth + SLOPE_SCALE * m + BIAS;
        return clamp(result, .0, .999999);
      }

      void outputDepth(float _linearDepth) {
        gl_FragColor = float2rgba(_calculateFragDepth(_linearDepth));
      }
    `)):1===e.output&&t.fragment.code.add(wr`
      void outputDepth(float _linearDepth) {
        gl_FragColor = float2rgba(_linearDepth);
      }
    `)}function Zs(t,e){const i=t.vertex.code,n=t.fragment.code;1!==e.output&&3!==e.output||(t.include(As,{linearDepth:!0}),t.include(ws,e),t.include(Qr,e),t.include(Qs,e),t.include(qr,e),t.vertex.uniforms.add("nearFar","vec2"),t.varyings.add("depth","float"),e.hasColorTexture&&t.fragment.uniforms.add("tex","sampler2D"),i.add(wr`
      void main(void) {
        vpos = calculateVPos();
        vpos = subtractOrigin(vpos);
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPositionWithDepth(proj, view, vpos, nearFar, depth);
        forwardTextureCoordinates();
      }
    `),t.include(yr,e),n.add(wr`
      void main(void) {
        discardBySlice(vpos);
        ${e.hasColorTexture?wr`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}
        outputDepth(depth);
      }
    `)),2===e.output&&(t.include(As,{linearDepth:!1}),t.include($s,e),t.include(Ks,e),t.include(ws,e),t.include(Qr,e),e.hasColorTexture&&t.fragment.uniforms.add("tex","sampler2D"),t.vertex.uniforms.add("viewNormal","mat4"),t.varyings.add("vPositionView","vec3"),i.add(wr`
      void main(void) {
        vpos = calculateVPos();
        vpos = subtractOrigin(vpos);
        ${0===e.normalType?wr`
        vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));`:""}
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPosition(proj, view, vpos);
        forwardTextureCoordinates();
      }
    `),t.include(qr,e),t.include(yr,e),n.add(wr`
      void main() {
        discardBySlice(vpos);
        ${e.hasColorTexture?wr`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}

        ${3===e.normalType?wr`
            vec3 normal = screenDerivativeNormal(vPositionView);`:wr`
            vec3 normal = normalize(vNormalWorld);
            if (gl_FrontFacing == false) normal = -normal;`}
        gl_FragColor = vec4(vec3(0.5) + 0.5 * normal, 1.0);
      }
    `)),4===e.output&&(t.include(As,{linearDepth:!1}),t.include(ws,e),t.include(Qr,e),e.hasColorTexture&&t.fragment.uniforms.add("tex","sampler2D"),i.add(wr`
      void main(void) {
        vpos = calculateVPos();
        vpos = subtractOrigin(vpos);
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPosition(proj, view, vpos);
        forwardTextureCoordinates();
      }
    `),t.include(qr,e),t.include(yr,e),t.include(Kr),n.add(wr`
      void main() {
        discardBySlice(vpos);
        ${e.hasColorTexture?wr`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}
        outputHighlight();
      }
    `))}function Ys(t,e){const i=t.fragment;i.uniforms.add("normalTexture","sampler2D"),i.uniforms.add("normalTextureSize","vec2"),e.vertexTangets?(t.attributes.add("tangent","vec4"),t.varyings.add("vTangent","vec4"),i.code.add(2===e.doubleSidedMode?wr`
      mat3 computeTangentSpace(vec3 normal) {
        float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;
        vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);
        vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
        return mat3(tangent, bitangent, normal);
      }
    `:wr`
      mat3 computeTangentSpace(vec3 normal) {
        float tangentHeadedness = vTangent.w;
        vec3 tangent = normalize(vTangent.xyz);
        vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
        return mat3(tangent, bitangent, normal);
      }
    `)):(t.extensions.add("GL_OES_standard_derivatives"),i.code.add(wr`
    mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {

      vec3 Q1 = dFdx(pos);
      vec3 Q2 = dFdy(pos);

      vec2 stx = dFdx(st);
      vec2 sty = dFdy(st);

      float det = stx.t * sty.s - sty.t * stx.s;

      vec3 T = stx.t * Q2 - sty.t * Q1; // compute tangent
      T = T - normal * dot(normal, T); // orthogonalize tangent
      T *= inversesqrt(max(dot(T,T), 1.e-10)); // "soft" normalize - goes to 0 when T goes to 0
      vec3 B = sign(det) * cross(normal, T); // assume normal is normalized, B has the same lenght as B
      return mat3(T, B, normal); // T and B go to 0 when the tangent space is not well defined by the uv coordinates
    }
  `)),0!==e.attributeTextureCoordinates&&(t.include(_s,e),i.code.add(wr`
    vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
      vtc.uv = uv;
      ${e.supportsTextureAtlas?"vtc.size = normalTextureSize;":""}
      vec3 rawNormal = textureLookup(normalTexture, vtc).rgb * 2.0 - 1.0;
      return tangentSpace * rawNormal;
    }
  `))}function Js(t,e){const i=t.fragment;e.receiveAmbientOcclusion?(i.uniforms.add("ssaoTex","sampler2D"),i.uniforms.add("viewportPixelSz","vec4"),i.code.add(wr`
      float evaluateAmbientOcclusion() {
        return 1.0 - texture2D(ssaoTex, (gl_FragCoord.xy - viewportPixelSz.xy) * viewportPixelSz.zw).a;
      }

      float evaluateAmbientOcclusionInverse() {
        float ssao = texture2D(ssaoTex, (gl_FragCoord.xy - viewportPixelSz.xy) * viewportPixelSz.zw).a;
        return viewportPixelSz.z < 0.0 ? 1.0 : ssao;
      }
    `)):i.code.add(wr`
      float evaluateAmbientOcclusion() { return 0.0; } // no occlusion
      float evaluateAmbientOcclusionInverse() { return 1.0; }
    `)}function ta(t,e){const i=t.fragment,n=void 0!==e.lightingSphericalHarmonicsOrder?e.lightingSphericalHarmonicsOrder:2;0===n?(i.uniforms.add("lightingAmbientSH0","vec3"),i.code.add(wr`
      vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
        vec3 ambientLight = 0.282095 * lightingAmbientSH0;
        return ambientLight * (1.0 - ambientOcclusion);
      }
    `)):1===n?(i.uniforms.add("lightingAmbientSH_R","vec4"),i.uniforms.add("lightingAmbientSH_G","vec4"),i.uniforms.add("lightingAmbientSH_B","vec4"),i.code.add(wr`
      vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
        vec4 sh0 = vec4(
          0.282095,
          0.488603 * normal.x,
          0.488603 * normal.z,
          0.488603 * normal.y
        );
        vec3 ambientLight = vec3(
          dot(lightingAmbientSH_R, sh0),
          dot(lightingAmbientSH_G, sh0),
          dot(lightingAmbientSH_B, sh0)
        );
        return ambientLight * (1.0 - ambientOcclusion);
      }
    `)):2===n&&(i.uniforms.add("lightingAmbientSH0","vec3"),i.uniforms.add("lightingAmbientSH_R1","vec4"),i.uniforms.add("lightingAmbientSH_G1","vec4"),i.uniforms.add("lightingAmbientSH_B1","vec4"),i.uniforms.add("lightingAmbientSH_R2","vec4"),i.uniforms.add("lightingAmbientSH_G2","vec4"),i.uniforms.add("lightingAmbientSH_B2","vec4"),i.code.add(wr`
      vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
        vec3 ambientLight = 0.282095 * lightingAmbientSH0;

        vec4 sh1 = vec4(
          0.488603 * normal.x,
          0.488603 * normal.z,
          0.488603 * normal.y,
          1.092548 * normal.x * normal.y
        );
        vec4 sh2 = vec4(
          1.092548 * normal.y * normal.z,
          0.315392 * (3.0 * normal.z * normal.z - 1.0),
          1.092548 * normal.x * normal.z,
          0.546274 * (normal.x * normal.x - normal.y * normal.y)
        );
        ambientLight += vec3(
          dot(lightingAmbientSH_R1, sh1),
          dot(lightingAmbientSH_G1, sh1),
          dot(lightingAmbientSH_B1, sh1)
        );
        ambientLight += vec3(
          dot(lightingAmbientSH_R2, sh2),
          dot(lightingAmbientSH_G2, sh2),
          dot(lightingAmbientSH_B2, sh2)
        );
        return ambientLight * (1.0 - ambientOcclusion);
      }
    `),1!==e.pbrMode&&2!==e.pbrMode||i.code.add(wr`
        const vec3 skyTransmittance = vec3(0.9, 0.9, 1.0);

        vec3 calculateAmbientRadiance(float ambientOcclusion)
        {
          vec3 ambientLight = 1.2 * (0.282095 * lightingAmbientSH0) - 0.2;
          return ambientLight *= (1.0 - ambientOcclusion) * skyTransmittance;
        }
      `))}function ea(t){const e=t.fragment;e.uniforms.add("lightingMainDirection","vec3"),e.uniforms.add("lightingMainIntensity","vec3"),e.uniforms.add("lightingFixedFactor","float"),e.code.add(wr`
    vec3 evaluateMainLighting(vec3 normal_global, float shadowing) {
      float dotVal = clamp(-dot(normal_global, lightingMainDirection), 0.0, 1.0);

      // move lighting towards (1.0, 1.0, 1.0) if requested
      dotVal = mix(dotVal, 1.0, lightingFixedFactor);

      return lightingMainIntensity * ((1.0 - shadowing) * dotVal);
    }
  `)}function ia(t,e){const i=t.fragment;t.include(ea),t.include(Js,e),0!==e.pbrMode&&t.include(Hs,e),t.include(ta,e),e.receiveShadows&&t.include(os,e),i.uniforms.add("lightingGlobalFactor","float"),i.uniforms.add("ambientBoostFactor","float"),t.include(Vs),i.code.add(wr`
    const float GAMMA_SRGB = 2.1;
    const float INV_GAMMA_SRGB = 0.4761904;
    ${0===e.pbrMode?"":"const vec3 GROUND_REFLECTANCE = vec3(0.2);"}
  `),e.useOldSceneLightInterface?i.code.add(wr`
    vec3 evaluateSceneLightingExt(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight) {
      // evaluate the main light
      #if defined(TREE_RENDERING)
        // Special case for tree rendering:
        // We shift the Lambert lobe to the back, allowing it to reach part of the hemisphere
        // facing away from the light. The idea is to get an effect where light is transmitted
        // through the tree.
        float minDot = -0.5;
        float dotRange = 1.0 - minDot;
        float dotNormalization = 0.66; // guessed & hand tweaked value, for an exact value we could precompute an integral over the sphere

        float dotVal = dotNormalization * (clamp(-dot(normal, lightingMainDirection), 1.0 - dotRange, 1.0) - minDot) * (1.0 / dotRange);
      #else
        float dotVal = clamp(-dot(normal, lightingMainDirection), 0.0, 1.0);
      #endif

      // move lighting towards (1.0, 1.0, 1.0) if requested
      dotVal = mix(dotVal, 1.0, lightingFixedFactor);

      vec3 mainLight = (1.0 - shadow) * lightingMainIntensity * dotVal;
      vec3 ambientLight = calculateAmbientIrradiance(normal, ssao);

      // inverse gamma correction on the albedo color
      vec3 albedoGammaC = pow(albedo, vec3(GAMMA_SRGB));

      // physically correct BRDF normalizes by PI
      vec3 totalLight = mainLight + ambientLight + additionalLight;
      totalLight = min(totalLight, vec3(PI));
      vec3 outColor = vec3((albedoGammaC / PI) * (totalLight));

      // apply gamma correction to the computed color
      outColor = pow(outColor, vec3(INV_GAMMA_SRGB));

      return outColor;
    }
  `):(i.code.add(1===e.viewingMode?wr`
      float _oldHeuristicLighting(vec3 vPosWorld) {
        vec3 shadingNormalWorld = normalize(vPosWorld);
        float vndl = -dot(shadingNormalWorld, lightingMainDirection);

        return smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));
      }
    `:wr`
      float _oldHeuristicLighting(vec3 vPosWorld) {
        float vndl = -dot(vec3(0.0, 0.0, 1.0), lightingMainDirection);
        return smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));
      }
    `),i.code.add(wr`
      vec3 evaluateAdditionalLighting(float ambientOcclusion, vec3 vPosWorld) {
        float additionalAmbientScale = _oldHeuristicLighting(vPosWorld);
        return (1.0 - ambientOcclusion) * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor * lightingMainIntensity;
      }
    `),0===e.pbrMode||4===e.pbrMode?i.code.add(wr`
      vec3 evaluateSceneLighting(vec3 normalWorld, vec3 baseColor, float mainLightShadow, float ambientOcclusion, vec3 additionalLight)
      {
        vec3 mainLighting = evaluateMainLighting(normalWorld, mainLightShadow);
        vec3 ambientLighting = calculateAmbientIrradiance(normalWorld, ambientOcclusion);
        // inverse gamma correction on the base color
        vec3 baseColorLinear = pow(baseColor, vec3(GAMMA_SRGB));

        // physically correct BRDF normalizes by PI
        vec3 totalLight = mainLighting + ambientLighting + additionalLight;
        totalLight = min(totalLight, vec3(PI));
        vec3 outColor = vec3((baseColorLinear / PI) * totalLight);

        // apply gamma correction to the computed color
        outColor = pow(outColor, vec3(INV_GAMMA_SRGB));

        return outColor;
      }
      `):1!==e.pbrMode&&2!==e.pbrMode||(i.code.add(wr`
      const float fillLightIntensity = 0.25;
      const float horizonLightDiffusion = 0.4;
      const float additionalAmbientIrradianceFactor = 0.02;

      vec3 evaluateSceneLightingPBR(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight, vec3 viewDir, vec3 normalGround, vec3 mrr, vec3 _emission, float additionalAmbientIrradiance)
      {
        // Calculate half vector between view and light direction
        vec3 viewDirection = -viewDir;
        vec3 mainLightDirection = -lightingMainDirection;
        vec3 h = normalize(viewDirection + mainLightDirection);

        PBRShadingInfo inputs;
        inputs.NdotL = clamp(dot(normal, mainLightDirection), 0.001, 1.0);
        inputs.NdotV = clamp(abs(dot(normal, viewDirection)), 0.001, 1.0);
        inputs.NdotH = clamp(dot(normal, h), 0.0, 1.0);
        inputs.VdotH = clamp(dot(viewDirection, h), 0.0, 1.0);
        inputs.NdotNG = clamp(dot(normal, normalGround), -1.0, 1.0);
        vec3 reflectedView = normalize(reflect(viewDirection, normal));
        inputs.RdotNG = clamp(dot(reflectedView, normalGround), -1.0, 1.0);

        inputs.albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
        inputs.ssao = ssao;

        inputs.metalness = mrr[0];
        inputs.roughness = clamp(mrr[1] * mrr[1], 0.001, 0.99);
      `),i.code.add(wr`
        inputs.f0 = (0.16 * mrr[2] * mrr[2]) * (1.0 - inputs.metalness) + inputs.albedoLinear * inputs.metalness;
        inputs.f90 = vec3(clamp(dot(inputs.f0, vec3(50.0 * 0.33)), 0.0, 1.0)); // more accurate then using  f90 = 1.0
        inputs.diffuseColor = inputs.albedoLinear * (vec3(1.0) - inputs.f0) * (1.0 - inputs.metalness);
      `),i.code.add(wr`
        vec3 ambientDir = vec3(5.0 * normalGround[1] - normalGround[0] * normalGround[2], - 5.0 * normalGround[0] - normalGround[2] * normalGround[1], normalGround[1] * normalGround[1] + normalGround[0] * normalGround[0]);
        ambientDir = ambientDir != vec3(0.0)? normalize(ambientDir) : normalize(vec3(5.0, -1.0, 0.0));

        inputs.NdotAmbDir = abs(dot(normal, ambientDir));

        // Calculate the irradiance components: sun, fill lights and the sky.
        vec3 mainLightIrradianceComponent  = inputs.NdotL * (1.0 - shadow) * lightingMainIntensity;
        vec3 fillLightsIrradianceComponent = inputs.NdotAmbDir * lightingMainIntensity * fillLightIntensity;
        // calculateAmbientIrradiance for localView and additionalLight for gloabalView
        vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(normal, ssao) + additionalLight;

        // Assemble the overall irradiance of the sky that illuminates the surface
        inputs.skyIrradianceToSurface    = ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
        // Assemble the overall irradiance of the ground that illuminates the surface. for this we use the simple model that changes only the sky irradiance by the groundReflectance
        inputs.groundIrradianceToSurface = GROUND_REFLECTANCE * ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
      `),i.code.add(wr`
        vec3 horizonRingDir = inputs.RdotNG * normalGround - reflectedView;
        vec3 horizonRingH = normalize(viewDirection + horizonRingDir);
        inputs.NdotH_Horizon = dot(normal, horizonRingH);

        vec3 mainLightRadianceComponent  = normalDistribution(inputs.NdotH, inputs.roughness) * lightingMainIntensity * (1.0 - shadow);
        vec3 horizonLightRadianceComponent = normalDistribution(inputs.NdotH_Horizon, min(inputs.roughness + horizonLightDiffusion, 1.0)) * lightingMainIntensity * fillLightIntensity;
        vec3 ambientLightRadianceComponent = calculateAmbientRadiance(ssao) + additionalLight; // calculateAmbientRadiance for localView and additionalLight for gloabalView

        // Assemble the overall radiance of the sky that illuminates the surface
        inputs.skyRadianceToSurface    =  ambientLightRadianceComponent + mainLightRadianceComponent + horizonLightRadianceComponent;
        // Assemble the overall radiance of the ground that illuminates the surface. for this we use the simple model that changes only the sky radince by the groundReflectance
        inputs.groundRadianceToSurface = GROUND_REFLECTANCE * (ambientLightRadianceComponent + horizonLightRadianceComponent) + mainLightRadianceComponent;

        // Calculate average ambient radiance - this is used int the gamut mapping part to deduce the black level that is soft compressed
        inputs.averageAmbientRadiance = ambientLightIrradianceComponent[1] * (1.0 + GROUND_REFLECTANCE[1]);
        `),i.code.add(wr`
        vec3 reflectedColorComponent = evaluateEnvironmentIllumination(inputs);
        vec3 additionalMaterialReflectanceComponent = inputs.albedoLinear * additionalAmbientIrradiance;
        vec3 emissionComponent = pow(_emission, vec3(GAMMA_SRGB));
        vec3 outColorLinear = reflectedColorComponent + additionalMaterialReflectanceComponent + emissionComponent;
        ${2===e.pbrMode?wr`vec3 outColor = pow(max(vec3(0.0), outColorLinear - 0.005 * inputs.averageAmbientRadiance), vec3(INV_GAMMA_SRGB));`:wr`vec3 outColor = pow(blackLevelSoftCompression(outColorLinear, inputs), vec3(INV_GAMMA_SRGB));`}
        return outColor;
      }
    `)))}function na(t,e){const i=t.fragment;i.code.add(wr`
    struct ShadingNormalParameters {
      vec3 normalView;
      vec3 viewDirection;
    } shadingParams;
    `),i.code.add(1===e.doubleSidedMode?wr`
      vec3 shadingNormal(ShadingNormalParameters params) {
        return dot(params.normalView, params.viewDirection) > 0.0 ? normalize(-params.normalView) : normalize(params.normalView);
      }
    `:2===e.doubleSidedMode?wr`
      vec3 shadingNormal(ShadingNormalParameters params) {
        return gl_FrontFacing ? normalize(params.normalView) : normalize(-params.normalView);
      }
    `:wr`
      vec3 shadingNormal(ShadingNormalParameters params) {
        return normalize(params.normalView);
      }
    `)}function oa(t,e){wr`
  /*
  *  ${e.name}
  *  ${0===e.output?"RenderOutput: Color":1===e.output?"RenderOutput: Depth":3===e.output?"RenderOutput: Shadow":2===e.output?"RenderOutput: Normal":4===e.output?"RenderOutput: Highlight":""}
  */
  `}function ra(t){t.code.add(wr`
    vec4 premultiplyAlpha(vec4 v) {
      return vec4(v.rgb * v.a, v.a);
    }

    // Note: the min in the last line has been added to fix an instability in chrome.
    // See https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/23911
    // With proper floating point handling, the value could never be >1.
    vec3 rgb2hsv(vec3 c) {
      vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
      vec4 p = c.g < c.b ? vec4(c.bg, K.wz) : vec4(c.gb, K.xy);
      vec4 q = c.r < p.x ? vec4(p.xyw, c.r) : vec4(c.r, p.yzx);

      float d = q.x - min(q.w, q.y);
      float e = 1.0e-10;
      return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), min(d / (q.x + e), 1.0), q.x);
    }

    vec3 hsv2rgb(vec3 c) {
      vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
      vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
      return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
    }

    float rgb2v(vec3 c) {
      return max(c.x, max(c.y, c.z));
    }
  `)}function sa(t){t.include(ra),t.code.add(wr`
    vec3 mixExternalColor(vec3 internalColor, vec3 textureColor, vec3 externalColor, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      vec3 internalMixed = internalColor * textureColor;
      vec3 allMixed = internalMixed * externalColor;

      if (mode == ${wr.int(1)}) {
        return allMixed;
      }
      else if (mode == ${wr.int(2)}) {
        return internalMixed;
      }
      else if (mode == ${wr.int(3)}) {
        return externalColor;
      }
      else {
        // tint (or something invalid)
        float vIn = rgb2v(internalMixed);
        vec3 hsvTint = rgb2hsv(externalColor);
        vec3 hsvOut = vec3(hsvTint.x, hsvTint.y, vIn * hsvTint.z);
        return hsv2rgb(hsvOut);
      }
    }

    float mixExternalOpacity(float internalOpacity, float textureOpacity, float externalOpacity, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      float internalMixed = internalOpacity * textureOpacity;
      float allMixed = internalMixed * externalOpacity;

      if (mode == ${wr.int(2)}) {
        return internalMixed;
      }
      else if (mode == ${wr.int(3)}) {
        return externalOpacity;
      }
      else {
        // multiply or tint (or something invalid)
        return allMixed;
      }
    }
  `)}function aa(t){const e=new Ts,i=e.vertex.code,n=e.fragment.code;return e.include(oa,{name:"Default Material Shader",output:t.output}),e.vertex.uniforms.add("proj","mat4").add("view","mat4").add("camPos","vec3").add("localOrigin","vec3"),e.include(js),e.varyings.add("vpos","vec3"),e.include(Qr,t),e.include(gs,t),e.include(Yr,t),0!==t.output&&7!==t.output||(e.include($s,t),e.include(As,{linearDepth:!1}),0===t.normalType&&t.offsetBackfaces&&e.include(ks),e.include(Ys,t),e.include(Ks,t),t.instancedColor&&e.attributes.add("instanceColor","vec4"),e.varyings.add("localvpos","vec3"),e.include(ws,t),e.include(Bs,t),e.include(qs,t),e.include(Es,t),e.vertex.uniforms.add("externalColor","vec4"),e.varyings.add("vcolorExt","vec4"),i.add(wr`
      void main(void) {
        forwardNormalizedVertexColor();
        vcolorExt = externalColor;
        ${t.instancedColor?"vcolorExt *= instanceColor;":""}
        vcolorExt *= vvColor();
        vcolorExt *= getSymbolColor();
        forwardColorMixMode();

        if (vcolorExt.a < ${wr.float(.001)}) {
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        }
        else {
          vpos = calculateVPos();
          localvpos = vpos - view[3].xyz;
          vpos = subtractOrigin(vpos);
          ${0===t.normalType?wr`
          vNormalWorld = dpNormal(vvLocalNormal(normalModel()));`:""}
          vpos = addVerticalOffset(vpos, localOrigin);
          ${t.vertexTangets?"vTangent = dpTransformVertexTangent(tangent);":""}
          gl_Position = transformPosition(proj, view, vpos);
          ${0===t.normalType&&t.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, camPos);":""}
        }
        forwardLinearDepth();
        forwardTextureCoordinates();
      }
    `)),7===t.output&&(e.include(qr,t),e.include(yr,t),e.fragment.uniforms.add("camPos","vec3").add("localOrigin","vec3").add("opacity","float").add("layerOpacity","float"),t.hasColorTexture&&e.fragment.uniforms.add("tex","sampler2D"),e.fragment.include(sa),n.add(wr`
      void main() {
        discardBySlice(vpos);
        ${t.hasColorTexture?wr`
        vec4 texColor = texture2D(tex, vuv0);
        ${t.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:wr`vec4 texColor = vec4(1.0);`}
        ${t.attributeColor?wr`
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:wr`
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}
        gl_FragColor = vec4(opacity_);
      }
    `)),0===t.output&&(e.include(qr,t),e.include(ia,t),e.include(Js,t),e.include(yr,t),t.receiveShadows&&e.include(os,t),e.fragment.uniforms.add("camPos","vec3").add("localOrigin","vec3").add("ambient","vec3").add("diffuse","vec3").add("opacity","float").add("layerOpacity","float"),t.hasColorTexture&&e.fragment.uniforms.add("tex","sampler2D"),e.include(Ss,t),e.include(Hs,t),e.fragment.include(sa),e.include(na,t),n.add(wr`
      void main() {
        discardBySlice(vpos);
        ${t.hasColorTexture?wr`
        vec4 texColor = texture2D(tex, vuv0);
        ${t.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:wr`vec4 texColor = vec4(1.0);`}
        shadingParams.viewDirection = normalize(vpos - camPos);
        ${3===t.normalType?wr`
        vec3 normal = screenDerivativeNormal(localvpos);`:wr`
        shadingParams.normalView = vNormalWorld;
        vec3 normal = shadingNormal(shadingParams);`}
        ${1===t.pbrMode?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = _oldHeuristicLighting(vpos + localOrigin);
        vec3 additionalLight = ssao * lightingMainIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${t.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":1===t.viewingMode?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${t.attributeColor?wr`
        vec3 albedo_ = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:wr`
        vec3 albedo_ = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}
        ${t.hasNormalTexture?wr`
              mat3 tangentSpace = ${t.vertexTangets?"computeTangentSpace(normal);":"computeTangentSpace(normal, vpos, vuv0);"}
              vec3 shadedNormal = computeTextureNormal(tangentSpace, vuv0);`:"vec3 shadedNormal = normal;"}
        ${1===t.pbrMode||2===t.pbrMode?1===t.viewingMode?wr`vec3 normalGround = normalize(vpos + localOrigin);`:wr`vec3 normalGround = vec3(0.0, 0.0, 1.0);`:wr``}
        ${1===t.pbrMode||2===t.pbrMode?wr`
            float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * lightingMainIntensity[2];
            vec3 shadedColor = evaluateSceneLightingPBR(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:"vec3 shadedColor = evaluateSceneLighting(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight);"}
        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${t.OITEnabled?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}
      }
    `)),e.include(Zs,t),e}!function(t){t.ModelTransform=class{constructor(){this.worldFromModel_RS=ae(),this.worldFromModel_TH=W(),this.worldFromModel_TL=W()}},t.ViewProjectionTransform=class{constructor(){this.worldFromView_TH=W(),this.worldFromView_TL=W(),this.viewFromCameraRelative_RS=ae(),this.projFromView=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}},t.bindModelTransform=function(t,e){t.setUniformMatrix3fv("uTransform_WorldFromModel_RS",e.worldFromModel_RS),t.setUniform3fv("uTransform_WorldFromModel_TH",e.worldFromModel_TH),t.setUniform3fv("uTransform_WorldFromModel_TL",e.worldFromModel_TL)},t.bindViewProjTransform=function(t,e){t.setUniform3fv("uTransform_WorldFromView_TH",e.worldFromView_TH),t.setUniform3fv("uTransform_WorldFromView_TL",e.worldFromView_TL),t.setUniformMatrix4fv("uTransform_ProjFromView",e.projFromView),t.setUniformMatrix3fv("uTransform_ViewFromCameraRelative_RS",e.viewFromCameraRelative_RS)}}(Xs||(Xs={})),(Ks||(Ks={})).bindUniforms=function(t,e){t.setUniformMatrix4fv("viewNormal",e)};var ca=Object.freeze({__proto__:null,build:aa});class la extends class{constructor(t,e){e&&(this._config=e.snapshot()),this._program=this.initializeProgram(t),t.commonUniformStore&&(this._commonUniformStore=t.commonUniformStore,this._commonUniformStore.subscribeProgram(this._program)),this._pipeline=this.initializePipeline(t)}dispose(){this._program&&(this._commonUniformStore&&this._commonUniformStore.unsubscribeProgram(this._program),this._program.dispose(),this._program=null)}reload(t){this._program&&(this._commonUniformStore&&this._commonUniformStore.unsubscribeProgram(this._program),this._program.dispose()),this._program=this.initializeProgram(t),this._commonUniformStore&&this._commonUniformStore.subscribeProgram(this._program)}get program(){return this._program}get pipeline(){return this._pipeline}get key(){return this._config.key}get configuration(){return this._config}bindPass(t,e,i){}bindMaterial(t,e,i){}bindDraw(t,e,i){}bindPipelineState(t){t.setPipelineState(this.pipeline)}ensureAttributeLocations(t){this.program.assertCompatibleVertexAttributeLocations(t)}get primitiveType(){return 4}}{initializeProgram(t){const e=la.shader.get(),i=this.configuration,n=e.build({OITEnabled:0===i.transparencyPassType,output:i.output,viewingMode:t.viewingMode,receiveShadows:i.receiveShadows,slicePlaneEnabled:i.slicePlaneEnabled,sliceHighlightDisabled:i.sliceHighlightDisabled,sliceEnabledForVertexPrograms:!1,symbolColor:i.symbolColors,vvSize:i.vvSize,vvColor:i.vvColor,vvInstancingEnabled:!0,instanced:i.instanced,instancedColor:i.instancedColor,instancedDoublePrecision:i.instancedDoublePrecision,useOldSceneLightInterface:!1,pbrMode:i.usePBR?i.isSchematic?2:1:0,hasMetalnessAndRoughnessTexture:i.hasMetalnessAndRoughnessTexture,hasEmissionTexture:i.hasEmissionTexture,hasOcclusionTexture:i.hasOcclusionTexture,hasNormalTexture:i.hasNormalTexture,hasColorTexture:i.hasColorTexture,receiveAmbientOcclusion:i.receiveAmbientOcclusion,useCustomDTRExponentForWater:!1,normalType:i.normalsTypeDerivate?3:0,doubleSidedMode:i.doubleSidedMode,vertexTangets:i.vertexTangents,attributeTextureCoordinates:i.hasMetalnessAndRoughnessTexture||i.hasEmissionTexture||i.hasOcclusionTexture||i.hasNormalTexture||i.hasColorTexture?1:0,textureAlphaPremultiplied:i.textureAlphaPremultiplied,attributeColor:i.vertexColors,screenSizePerspectiveEnabled:i.screenSizePerspective,verticalOffsetEnabled:i.verticalOffset,offsetBackfaces:i.offsetBackfaces,doublePrecisionRequiresObfuscation:ps(t.rctx),alphaDiscardMode:i.alphaDiscardMode,supportsTextureAtlas:!1});return new Gr(t.rctx,n.generateSource("vertex"),n.generateSource("fragment"),dr)}bindPass(t,e,i){jr.bindProjectionMatrix(this.program,i.camera.projectionMatrix);const n=this.configuration.output;7===n&&(this.program.setUniform1f("opacity",e.opacity),this.program.setUniform1f("layerOpacity",e.layerOpacity),this.program.setUniform4fv("externalColor",e.externalColor),this.program.setUniform1i("colorMixMode",ur[e.colorMixMode])),0===n?(i.lighting.setUniforms(this.program,!1),this.program.setUniform3fv("ambient",e.ambient),this.program.setUniform3fv("diffuse",e.diffuse),this.program.setUniform4fv("externalColor",e.externalColor),this.program.setUniform1i("colorMixMode",ur[e.colorMixMode]),this.program.setUniform1f("opacity",e.opacity),this.program.setUniform1f("layerOpacity",e.layerOpacity),this.configuration.usePBR&&Ss.bindUniforms(this.program,e,this.configuration.isSchematic)):1===n||3===n?this.program.setUniform2fv("nearFar",i.camera.nearFar):4===n&&Kr.bindOutputHighlight(t,this.program,i),Qr.bindUniformsForSymbols(this.program,e),Yr.bindUniforms(this.program,e,i),ar(e.screenSizePerspective,this.program,"screenSizePerspectiveAlignment"),2!==e.textureAlphaMode&&3!==e.textureAlphaMode||this.program.setUniform1f("textureAlphaCutoff",e.textureAlphaCutoff)}bindDraw(t){const e=this.configuration.instancedDoublePrecision?q(t.camera.viewInverseTransposeMatrix[3],t.camera.viewInverseTransposeMatrix[7],t.camera.viewInverseTransposeMatrix[11]):t.origin;jr.bindViewCustomOrigin(this.program,e,t.camera.viewMatrix),(0===this.configuration.output||7===this.configuration.output||1===this.configuration.output&&this.configuration.screenSizePerspective||2===this.configuration.output&&this.configuration.screenSizePerspective||4===this.configuration.output&&this.configuration.screenSizePerspective)&&jr.bindCamPosition(this.program,e,t.camera.viewInverseTransposeMatrix),2===this.configuration.output&&this.program.setUniformMatrix4fv("viewNormal",t.camera.viewInverseTransposeMatrix),this.configuration.instancedDoublePrecision&&gs.bindCustomOrigin(this.program,e),qr.bindUniforms(this.program,this.configuration,t.slicePlane,e),0===this.configuration.output&&os.bindViewCustomOrigin(this.program,t,e)}setPipeline(t,e){const i=this.configuration,n=3===t,o=2===t;return function(t){return Ve.intern(t)}({blending:0!==i.output&&7!==i.output||!i.transparent?null:n?_r:Mr(t),culling:ua(i),depthTest:{func:Or(t)},depthWrite:n||o?i.writeDepth&&he:null,colorWrite:de,stencilWrite:i.sceneHasOcludees?ts:null,stencilTest:i.sceneHasOcludees?e?is:es:null,polygonOffset:n||o?null:Tr(i.enableOffset)})}initializePipeline(){return this._occludeePipelineState=this.setPipeline(this.configuration.transparencyPassType,!0),this.setPipeline(this.configuration.transparencyPassType,!1)}getPipelineState(t){return t?this._occludeePipelineState:this.pipeline}}la.shader=new Pr(ca,(()=>import("./p-0ae28c09.js")));const ua=t=>function(t){return t.cullFace?0!==t.cullFace:!t.slicePlaneEnabled&&!t.transparent&&!t.doubleSidedMode}(t)&&{face:1===t.cullFace?1028:1029,mode:2305};class ha extends class{constructor(){this._key="",this._keyDirty=!1,this._parameterBits=this._parameterBits.map((()=>0))}get key(){return this._keyDirty&&(this._keyDirty=!1,this._key=String.fromCharCode.apply(String,this._parameterBits)),this._key}snapshot(){const t=this._parameterNames,e={key:this.key};for(const i of t)e[i]=this[i];return e}}{constructor(){super(...arguments),this.output=0,this.alphaDiscardMode=1,this.doubleSidedMode=0,this.isSchematic=!1,this.vertexColors=!1,this.offsetBackfaces=!1,this.symbolColors=!1,this.vvSize=!1,this.vvColor=!1,this.verticalOffset=!1,this.receiveShadows=!1,this.slicePlaneEnabled=!1,this.sliceHighlightDisabled=!1,this.receiveAmbientOcclusion=!1,this.screenSizePerspective=!1,this.textureAlphaPremultiplied=!1,this.hasColorTexture=!1,this.usePBR=!1,this.hasMetalnessAndRoughnessTexture=!1,this.hasEmissionTexture=!1,this.hasOcclusionTexture=!1,this.hasNormalTexture=!1,this.instanced=!1,this.instancedColor=!1,this.instancedDoublePrecision=!1,this.vertexTangents=!1,this.normalsTypeDerivate=!1,this.writeDepth=!0,this.sceneHasOcludees=!1,this.transparent=!1,this.enableOffset=!0,this.cullFace=0,this.transparencyPassType=3}}function da(t){const e=new Ts,i=e.vertex.code,n=e.fragment.code;return e.vertex.uniforms.add("proj","mat4").add("view","mat4").add("camPos","vec3").add("localOrigin","vec3"),e.include(js),e.varyings.add("vpos","vec3"),e.include(Qr,t),e.include(gs,t),e.include(Yr,t),0!==t.output&&7!==t.output||(e.include($s,t),e.include(As,{linearDepth:!1}),t.offsetBackfaces&&e.include(ks),t.instancedColor&&e.attributes.add("instanceColor","vec4"),e.varyings.add("vNormalWorld","vec3"),e.varyings.add("localvpos","vec3"),e.include(ws,t),e.include(Bs,t),e.include(qs,t),e.include(Es,t),e.vertex.uniforms.add("externalColor","vec4"),e.varyings.add("vcolorExt","vec4"),i.add(wr`
        void main(void) {
          forwardNormalizedVertexColor();
          vcolorExt = externalColor;
          ${t.instancedColor?"vcolorExt *= instanceColor;":""}
          vcolorExt *= vvColor();
          vcolorExt *= getSymbolColor();
          forwardColorMixMode();

          if (vcolorExt.a < ${wr.float(.001)}) {
            gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          }
          else {
            vpos = calculateVPos();
            localvpos = vpos - view[3].xyz;
            vpos = subtractOrigin(vpos);
            vNormalWorld = dpNormal(vvLocalNormal(normalModel()));
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, vpos);
            ${t.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, camPos);":""}
          }
          forwardLinearDepth();
          forwardTextureCoordinates();
        }
      `)),7===t.output&&(e.include(qr,t),e.include(yr,t),e.fragment.uniforms.add("camPos","vec3").add("localOrigin","vec3").add("opacity","float").add("layerOpacity","float"),e.fragment.uniforms.add("view","mat4"),t.hasColorTexture&&e.fragment.uniforms.add("tex","sampler2D"),e.fragment.include(sa),n.add(wr`
      void main() {
        discardBySlice(vpos);
        ${t.hasColorTexture?wr`
        vec4 texColor = texture2D(tex, vuv0);
        ${t.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:wr`vec4 texColor = vec4(1.0);`}
        ${t.attributeColor?wr`
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:wr`
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}

        gl_FragColor = vec4(opacity_);
      }
    `)),0===t.output&&(e.include(qr,t),e.include(ia,t),e.include(Js,t),e.include(yr,t),t.receiveShadows&&e.include(os,t),e.fragment.uniforms.add("camPos","vec3").add("localOrigin","vec3").add("ambient","vec3").add("diffuse","vec3").add("opacity","float").add("layerOpacity","float"),e.fragment.uniforms.add("view","mat4"),t.hasColorTexture&&e.fragment.uniforms.add("tex","sampler2D"),e.include(Ss,t),e.include(Hs,t),e.fragment.include(sa),n.add(wr`
      void main() {
        discardBySlice(vpos);
        ${t.hasColorTexture?wr`
        vec4 texColor = texture2D(tex, vuv0);
        ${t.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:wr`vec4 texColor = vec4(1.0);`}
        vec3 viewDirection = normalize(vpos - camPos);
        ${1===t.pbrMode?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = _oldHeuristicLighting(vpos + localOrigin);
        vec3 additionalLight = ssao * lightingMainIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${t.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":1===t.viewingMode?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${t.attributeColor?wr`
        vec3 albedo_ = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:wr`
        vec3 albedo_ = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}
        ${wr`
        vec3 shadedNormal = normalize(vNormalWorld);
        albedo_ *= 1.2;
        vec3 viewForward = - vec3(view[0][2], view[1][2], view[2][2]);
        float alignmentLightView = clamp(dot(-viewForward, lightingMainDirection), 0.0, 1.0);
        float transmittance = 1.0 - clamp(dot(-viewForward, shadedNormal), 0.0, 1.0);
        float treeRadialFalloff = vColor.r;
        float backLightFactor = 0.5 * treeRadialFalloff * alignmentLightView * transmittance * (1.0 - shadow);
        additionalLight += backLightFactor * lightingMainIntensity;`}
        ${1===t.pbrMode||2===t.pbrMode?1===t.viewingMode?wr`vec3 normalGround = normalize(vpos + localOrigin);`:wr`vec3 normalGround = vec3(0.0, 0.0, 1.0);`:wr``}
        ${1===t.pbrMode||2===t.pbrMode?wr`
            float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * lightingMainIntensity[2];
            vec3 shadedColor = evaluateSceneLightingPBR(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight, viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:"vec3 shadedColor = evaluateSceneLighting(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight);"}
        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${t.OITEnabled?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}
      }
    `)),e.include(Zs,t),e}p([Lr({count:8})],ha.prototype,"output",void 0),p([Lr({count:4})],ha.prototype,"alphaDiscardMode",void 0),p([Lr({count:3})],ha.prototype,"doubleSidedMode",void 0),p([Lr()],ha.prototype,"isSchematic",void 0),p([Lr()],ha.prototype,"vertexColors",void 0),p([Lr()],ha.prototype,"offsetBackfaces",void 0),p([Lr()],ha.prototype,"symbolColors",void 0),p([Lr()],ha.prototype,"vvSize",void 0),p([Lr()],ha.prototype,"vvColor",void 0),p([Lr()],ha.prototype,"verticalOffset",void 0),p([Lr()],ha.prototype,"receiveShadows",void 0),p([Lr()],ha.prototype,"slicePlaneEnabled",void 0),p([Lr()],ha.prototype,"sliceHighlightDisabled",void 0),p([Lr()],ha.prototype,"receiveAmbientOcclusion",void 0),p([Lr()],ha.prototype,"screenSizePerspective",void 0),p([Lr()],ha.prototype,"textureAlphaPremultiplied",void 0),p([Lr()],ha.prototype,"hasColorTexture",void 0),p([Lr()],ha.prototype,"usePBR",void 0),p([Lr()],ha.prototype,"hasMetalnessAndRoughnessTexture",void 0),p([Lr()],ha.prototype,"hasEmissionTexture",void 0),p([Lr()],ha.prototype,"hasOcclusionTexture",void 0),p([Lr()],ha.prototype,"hasNormalTexture",void 0),p([Lr()],ha.prototype,"instanced",void 0),p([Lr()],ha.prototype,"instancedColor",void 0),p([Lr()],ha.prototype,"instancedDoublePrecision",void 0),p([Lr()],ha.prototype,"vertexTangents",void 0),p([Lr()],ha.prototype,"normalsTypeDerivate",void 0),p([Lr()],ha.prototype,"writeDepth",void 0),p([Lr()],ha.prototype,"sceneHasOcludees",void 0),p([Lr()],ha.prototype,"transparent",void 0),p([Lr()],ha.prototype,"enableOffset",void 0),p([Lr({count:3})],ha.prototype,"cullFace",void 0),p([Lr({count:4})],ha.prototype,"transparencyPassType",void 0);var fa=Object.freeze({__proto__:null,build:da});class ma extends la{initializeProgram(t){const e=ma.shader.get(),i=this.configuration,n=e.build({OITEnabled:0===i.transparencyPassType,output:i.output,viewingMode:t.viewingMode,receiveShadows:i.receiveShadows,slicePlaneEnabled:i.slicePlaneEnabled,sliceHighlightDisabled:i.sliceHighlightDisabled,sliceEnabledForVertexPrograms:!1,symbolColor:i.symbolColors,vvSize:i.vvSize,vvColor:i.vvColor,vvInstancingEnabled:!0,instanced:i.instanced,instancedColor:i.instancedColor,instancedDoublePrecision:i.instancedDoublePrecision,useOldSceneLightInterface:!1,pbrMode:i.usePBR?1:0,hasMetalnessAndRoughnessTexture:!1,hasEmissionTexture:!1,hasOcclusionTexture:!1,hasNormalTexture:!1,hasColorTexture:i.hasColorTexture,receiveAmbientOcclusion:i.receiveAmbientOcclusion,useCustomDTRExponentForWater:!1,normalType:0,doubleSidedMode:2,vertexTangets:!1,attributeTextureCoordinates:i.hasColorTexture?1:0,textureAlphaPremultiplied:i.textureAlphaPremultiplied,attributeColor:i.vertexColors,screenSizePerspectiveEnabled:i.screenSizePerspective,verticalOffsetEnabled:i.verticalOffset,offsetBackfaces:i.offsetBackfaces,doublePrecisionRequiresObfuscation:ps(t.rctx),alphaDiscardMode:i.alphaDiscardMode,supportsTextureAtlas:!1});return new Gr(t.rctx,n.generateSource("vertex"),n.generateSource("fragment"),dr)}}ma.shader=new Pr(fa,(()=>import("./p-314145f7.js")));class va extends fr{constructor(t,e){super(e,t,ga),this.supportsEdges=!0,this.techniqueConfig=new ha,this.vertexBufferLayout=va.getVertexBufferLayout(this.params),this.instanceBufferLayout=t.instanced?va.getInstanceBufferLayout(this.params):null}isVisibleInPass(t){return 4!==t||this.params.castShadows}isVisible(){const t=this.params;if(!super.isVisible()||0===t.layerOpacity)return!1;const e=t.instanced,i=t.vertexColors,n=t.symbolColors,o=!!e&&e.indexOf("color")>-1,r=t.vvColorEnabled,s="replace"===t.colorMixMode,a=t.opacity>0,c=t.externalColor&&t.externalColor[3]>0;return i&&(o||r||n)?!!s||a:i?s?c:a:o||r||n?!!s||a:s?c:a}getTechniqueConfig(t,e){return this.techniqueConfig.output=t,this.techniqueConfig.hasNormalTexture=!!this.params.normalTextureId,this.techniqueConfig.hasColorTexture=!!this.params.textureId,this.techniqueConfig.vertexTangents=this.params.vertexTangents,this.techniqueConfig.instanced=!!this.params.instanced,this.techniqueConfig.instancedDoublePrecision=this.params.instancedDoublePrecision,this.techniqueConfig.vvSize=this.params.vvSizeEnabled,this.techniqueConfig.verticalOffset=null!==this.params.verticalOffset,this.techniqueConfig.screenSizePerspective=null!==this.params.screenSizePerspective,this.techniqueConfig.slicePlaneEnabled=this.params.slicePlaneEnabled,this.techniqueConfig.sliceHighlightDisabled=this.params.sliceHighlightDisabled,this.techniqueConfig.alphaDiscardMode=this.params.textureAlphaMode,this.techniqueConfig.normalsTypeDerivate="screenDerivative"===this.params.normals,this.techniqueConfig.transparent=this.params.transparent,this.techniqueConfig.writeDepth=this.params.writeDepth,this.techniqueConfig.sceneHasOcludees=this.params.sceneHasOcludees,this.techniqueConfig.cullFace=null!=this.params.cullFace?this.params.cullFace:0,0!==t&&7!==t||(this.techniqueConfig.vertexColors=this.params.vertexColors,this.techniqueConfig.symbolColors=this.params.symbolColors,this.techniqueConfig.doubleSidedMode=this.params.treeRendering?2:this.params.doubleSided&&"normal"===this.params.doubleSidedType?1:this.params.doubleSided&&"winding-order"===this.params.doubleSidedType?2:0,this.techniqueConfig.instancedColor=!!this.params.instanced&&this.params.instanced.indexOf("color")>-1,this.techniqueConfig.receiveShadows=this.params.receiveShadows&&this.params.shadowMappingEnabled,this.techniqueConfig.receiveAmbientOcclusion=this.params.receiveSSAO,this.techniqueConfig.vvColor=this.params.vvColorEnabled,this.techniqueConfig.textureAlphaPremultiplied=!!this.params.textureAlphaPremultiplied,this.techniqueConfig.usePBR=this.params.usePBR,this.techniqueConfig.hasMetalnessAndRoughnessTexture=!!this.params.metallicRoughnessTextureId,this.techniqueConfig.hasEmissionTexture=!!this.params.emissiveTextureId,this.techniqueConfig.hasOcclusionTexture=!!this.params.occlusionTextureId,this.techniqueConfig.offsetBackfaces=!(!this.params.transparent||!this.params.offsetTransparentBackfaces),this.techniqueConfig.isSchematic=this.params.usePBR&&this.params.isSchematic,this.techniqueConfig.transparencyPassType=e?e.transparencyPassType:3,this.techniqueConfig.enableOffset=!e||e.camera.relativeElevation<5e5),this.techniqueConfig}intersect(t,e,i,n,o,r,s){if(null!==this.params.verticalOffset){const t=n.camera;ot(Aa,i[12],i[13],i[14]);let e=null;switch(n.viewingMode){case 1:e=st(_a,Aa);break;case 2:e=Q(_a,ya)}let s=0;if(null!==this.params.verticalOffset){const i=Z(Ma,Aa,t.eye),n=it(i),o=Y(i,i,1/n);let r=null;this.params.screenSizePerspective&&(r=J(e,o)),s+=function(t,e,i,n,o){let r=(i.screenLength||0)*t.pixelRatio;o&&(r=function(t,e,i,n){return function(t,e){return Math.max(u(t*e.scale,t,e.factor),function(t,e){return 0===t?e.minPixelSize:e.minPixelSize*(1+2*e.paddingPixels/t)}(t,e))}(t,function(t,e,i){const n=i.parameters,o=i.paddingPixelsOverride;return Ko.scale=Math.min(n.divisor/(e-n.offset),1),Ko.factor=function(t){return Math.abs(t*t*t)}(t),Ko.minPixelSize=n.minPixelSize,Ko.paddingPixels=o,Ko}(e,i,n))}(r,n,e,o));const s=r*Math.tan(.5*t.fovY)/(.5*t.fullHeight);return h(s*e,i.minWorldLength||0,null!=i.maxWorldLength?i.maxWorldLength:1/0)}(t,n,this.params.verticalOffset,r,this.params.screenSizePerspective)}Y(e,e,s),ht(Sa,e,n.transform.inverseRotation),o=Z(ba,o,Sa),r=Z(wa,r,Sa)}Yo(t,e,n,o,r,function(t){return a(t)?($o.offset=t,$o):null}(n.verticalOffset),s)}getGLMaterial(t){if(0===t.output||7===t.output||1===t.output||2===t.output||3===t.output||4===t.output)return new pa(t)}createBufferWriter(){return new xa(this.vertexBufferLayout,this.instanceBufferLayout)}static getVertexBufferLayout(t){const e=t.textureId||t.normalTextureId||t.metallicRoughnessTextureId||t.emissiveTextureId||t.occlusionTextureId,i=Lt().vec3f("position").vec3f("normal");return t.vertexTangents&&i.vec4f("tangent"),e&&i.vec2f("uv0"),t.vertexColors&&i.vec4u8("color"),t.symbolColors&&i.vec4u8("symbolColor"),i}static getInstanceBufferLayout(t){let e=Lt();return e=t.instancedDoublePrecision?e.vec3f("modelOriginHi").vec3f("modelOriginLo").mat3f("model").mat3f("modelNormal"):e.mat4f("model").mat4f("modelNormal"),t.instanced&&t.instanced.indexOf("color")>-1&&(e=e.vec4f("instanceColor")),t.instanced&&t.instanced.indexOf("featureAttribute")>-1&&(e=e.vec4f("instanceFeatureAttribute")),e}}class pa extends Xo{constructor(t){const e=t.material;super({...t,...e.params}),this.updateParameters()}updateParameters(t){const e=this.material.params;this.updateTexture(e.textureId),this.technique=this.techniqueRep.acquireAndReleaseExisting(e.treeRendering?ma:la,this.material.getTechniqueConfig(this.output,t),this.technique)}selectPipelines(){}_updateShadowState(t){t.shadowMappingEnabled!==this.material.params.shadowMappingEnabled&&this.material.setParameterValues({shadowMappingEnabled:t.shadowMappingEnabled})}_updateOccludeeState(t){t.hasOccludees!==this.material.params.sceneHasOcludees&&this.material.setParameterValues({sceneHasOcludees:t.hasOccludees})}ensureParameters(t){0!==this.output&&7!==this.output||(this._updateShadowState(t),this._updateOccludeeState(t)),this.updateParameters(t)}bind(t,e){t.bindProgram(this.technique.program),this.technique.bindPass(t,this.material.params,e),this.bindTexture(t,this.technique.program)}beginSlot(t){return t===(this.material.params.transparent?this.material.params.writeDepth?5:8:3)}getPipelineState(t,e){return this.technique.getPipelineState(e)}}const ga={textureId:void 0,initTextureTransparent:!1,isSchematic:!1,usePBR:!1,normalTextureId:void 0,vertexTangents:!1,occlusionTextureId:void 0,emissiveTextureId:void 0,metallicRoughnessTextureId:void 0,emissiveFactor:[0,0,0],mrrFactors:[0,1,.5],ambient:[.2,.2,.2],diffuse:[.8,.8,.8],externalColor:[1,1,1,1],colorMixMode:"multiply",opacity:1,layerOpacity:1,vertexColors:!1,symbolColors:!1,doubleSided:!1,doubleSidedType:"normal",cullFace:void 0,instanced:void 0,instancedDoublePrecision:!1,normals:"default",receiveSSAO:!0,receiveShadows:!0,castShadows:!0,shadowMappingEnabled:!1,verticalOffset:null,screenSizePerspective:null,slicePlaneEnabled:!1,sliceHighlightDisabled:!1,offsetTransparentBackfaces:!1,vvSizeEnabled:!1,vvSizeMinSize:[1,1,1],vvSizeMaxSize:[100,100,100],vvSizeOffset:[0,0,0],vvSizeFactor:[1,1,1],vvSizeValue:[1,1,1],vvColorEnabled:!1,vvColorValues:[0,0,0,0,0,0,0,0],vvColorColors:[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0],vvSymbolAnchor:[0,0,0],vvSymbolRotationMatrix:ae(),transparent:!1,writeDepth:!0,textureAlphaMode:0,textureAlphaCutoff:.1,textureAlphaPremultiplied:!1,sceneHasOcludees:!1,renderOccluded:1};class xa{constructor(t,e){this.vertexBufferLayout=t,this.instanceBufferLayout=e}allocate(t){return this.vertexBufferLayout.createBuffer(t)}elementCount(t){return t.indices.position.length}write(t,e,i,n){!function(t,e,i,n,o,r){for(const s of e.fieldNames){const e=t.vertexAttr[s],a=t.indices[s];if(e&&a)switch(s){case Ei.POSITION:{Bi(3===e.size);const t=o.getField(s,Ot);t&&gr(a,e.data,i,t,r);break}case Ei.NORMAL:{Bi(3===e.size);const t=o.getField(s,Ot);t&&xr(a,e.data,n,t,r);break}case Ei.UV0:{Bi(2===e.size);const t=o.getField(s,Pt);t&&mr(a,e.data,t,r);break}case Ei.UVMAPSPACE:{Bi(4===e.size);const t=o.getField(s,Ct);t&&pr(a,e.data,t,r);break}case Ei.MEANVERTEXPOSITION:{Bi(3===e.size);const t=o.getField(s,Ot);t&&gr(a,e.data,i,t,r);break}case Ei.BOUND1:case Ei.BOUND2:case Ei.BOUND3:{Bi(3===e.size);const t=o.getField(s,Ot);t&&gr(a,e.data,i,t,r);break}case Ei.COLOR:{Bi(3===e.size||4===e.size);const t=o.getField(s,Tt);t&&br(a,e.data,e.size,t,r);break}case Ei.SYMBOLCOLOR:{Bi(3===e.size||4===e.size);const t=o.getField(s,Tt);t&&br(a,e.data,e.size,t,r);break}case Ei.TANGENT:{Bi(4===e.size);const t=o.getField(s,Ct);t&&pr(a,e.data,t,r);break}}}}(e,this.vertexBufferLayout,t.transformation,t.invTranspTransformation,i,n)}}const ba=W(),wa=W(),ya=q(0,0,1),_a=W(),Sa=W(),Aa=W(),Ma=W();async function Ca(t,e){const{data:i}=await g(t,{responseType:"image",...e});return i}const Ta=[{name:"position",count:2,type:5126,offset:0,stride:8,normalized:!1}],Oa=[{name:"position",count:2,type:5126,offset:0,stride:16,normalized:!1},{name:"uv0",count:2,type:5126,offset:8,stride:16,normalized:!1}],Pa=t.getLogger("esri.views.3d.webgl-engine.lib.DDSUtil");function La(t){return t.charCodeAt(0)+(t.charCodeAt(1)<<8)+(t.charCodeAt(2)<<16)+(t.charCodeAt(3)<<24)}const Fa=La("DXT1"),Da=La("DXT3"),za=La("DXT5");class Ra{constructor(t,e,i){this.data=t,this.glTexture=null,this.powerOfTwoStretchInfo=null,this.loadingPromise=null,this.loadingController=null,this.events=new b,this.data=t,this.id=Ra.idGen.gen(e),this.params=i||{},this.params.mipmap=!1!==this.params.mipmap,this.params.noUnpackFlip=this.params.noUnpackFlip||!1,this.params.preMultiplyAlpha=this.params.preMultiplyAlpha||!1,this.params.wrap=this.params.wrap||{s:10497,t:10497},this.params.powerOfTwoResizeMode=this.params.powerOfTwoResizeMode||1,this.estimatedTexMemRequired=Ra.estimateTexMemRequired(this.data,this.params),this.startPreload()}startPreload(){const t=this.data;r(t)||(t instanceof HTMLVideoElement?this.startPreloadVideoElement(t):t instanceof HTMLImageElement&&this.startPreloadImageElement(t))}startPreloadVideoElement(t){w(t.src)||"auto"===t.preload&&t.crossOrigin||(t.preload="auto",t.crossOrigin="anonymous",t.src=t.src)}startPreloadImageElement(t){y(t.src)||w(t.src)||t.crossOrigin||(t.crossOrigin="anonymous",t.src=t.src)}static getDataDimensions(t){return t instanceof HTMLVideoElement?{width:t.videoWidth,height:t.videoHeight}:t}static estimateTexMemRequired(t,e){if(r(t))return 0;if(_(t)||S(t))return t.byteLength;const{width:i,height:n}=t instanceof Image||t instanceof ImageData||t instanceof HTMLCanvasElement||t instanceof HTMLVideoElement?Ra.getDataDimensions(t):e;return(e.mipmap?4/3:1)*i*n*(e.components||4)||0}dispose(){this.data=void 0}get width(){return this.params.width}get height(){return this.params.height}createDescriptor(t){return{target:3553,pixelFormat:6408,dataType:5121,wrapMode:this.params.wrap,flipped:!this.params.noUnpackFlip,samplingMode:this.params.mipmap?9987:9729,hasMipmap:this.params.mipmap,preMultiplyAlpha:this.params.preMultiplyAlpha,maxAnisotropy:this.params.mipmap&&!this.params.disableAnisotropy?t.parameters.maxMaxAnisotropy:void 0}}load(t,e){if(a(this.glTexture))return this.glTexture;if(a(this.loadingPromise))return this.loadingPromise;const i=this.data;return r(i)?(this.glTexture=new ie(t,this.createDescriptor(t),null),t.bindTexture(this.glTexture,0),this.glTexture):"string"==typeof i?this.loadFromURL(t,e,i):i instanceof Image?this.loadFromImageElement(t,e,i):i instanceof HTMLVideoElement?this.loadFromVideoElement(t,e,i):i instanceof ImageData||i instanceof HTMLCanvasElement?this.loadFromImage(t,i,e):(_(i)||S(i))&&this.params.encoding===Ra.DDS_ENCODING?this.loadFromDDSData(t,i):S(i)?this.loadFromPixelData(t,i):_(i)?this.loadFromPixelData(t,new Uint8Array(i)):null}get requiresFrameUpdates(){return this.data instanceof HTMLVideoElement}frameUpdate(t,e,i){if(!(this.data instanceof HTMLVideoElement)||r(this.glTexture))return i;if(this.data.readyState<2||i===this.data.currentTime)return i;if(a(this.powerOfTwoStretchInfo)){const{framebuffer:i,vao:n,sourceTexture:o}=this.powerOfTwoStretchInfo;o.setData(this.data),this.drawStretchedTexture(t,e,i,n,o,this.glTexture)}else{const{width:t,height:e}=this.data,{width:i,height:n}=this.glTexture.descriptor;t!==i||e!==n?this.glTexture.updateData(0,0,0,Math.min(t,i),Math.min(e,n),this.data):this.glTexture.setData(this.data)}return this.glTexture.descriptor.hasMipmap&&this.glTexture.generateMipmap(),this.data.currentTime}loadFromDDSData(t,e){return this.glTexture=function(t,e,i,n){const{textureData:o,internalFormat:r,width:s,height:a}=function(t,e){const i=new Int32Array(t,0,31);if(542327876!==i[0])return Pa.error("Invalid magic number in DDS header"),null;if(!(4&i[20]))return Pa.error("Unsupported format, must contain a FourCC code"),null;const n=i[21];let o,r;switch(n){case Fa:o=8,r=33776;break;case Da:o=16,r=33778;break;case za:o=16,r=33779;break;default:return Pa.error("Unsupported FourCC code:",(s=n,String.fromCharCode(255&s,s>>8&255,s>>16&255,s>>24&255))),null}var s;let a=1,c=i[4],l=i[3];0==(3&c)&&0==(3&l)||(Pa.warn("Rounding up compressed texture size to nearest multiple of 4."),c=c+3&-4,l=l+3&-4);const u=c,h=l;let d,f;131072&i[2]&&!1!==e&&(a=Math.max(1,i[7])),1===a||x(c)&&x(l)||(Pa.warn("Ignoring mipmaps of non power of two sized compressed texture."),a=1);let m=i[1]+4;const v=[];for(let e=0;e<a;++e)f=(c+3>>2)*(l+3>>2)*o,d=new Uint8Array(t,m,f),v.push(d),m+=f,c=Math.max(1,c>>1),l=Math.max(1,l>>1);return{textureData:{type:"compressed",levels:v},internalFormat:r,width:u,height:h}}(i,n);e.samplingMode=o.levels.length>1?9987:9729,e.hasMipmap=o.levels.length>1,e.internalFormat=r,e.width=s,e.height=a;const c=new ie(t,e,o);return t.bindTexture(c,0),c}(t,this.createDescriptor(t),e,this.params.mipmap),t.bindTexture(this.glTexture,0),this.glTexture}loadFromPixelData(t,e){Bi(this.params.width>0&&this.params.height>0);const i=this.createDescriptor(t);return i.pixelFormat=1===this.params.components?6409:3===this.params.components?6407:6408,i.width=this.params.width,i.height=this.params.height,this.glTexture=new ie(t,i,e),t.bindTexture(this.glTexture,0),this.glTexture}async loadAsync(t){const e=A();this.loadingController=e;const i=t(e.signal);this.loadingPromise=i;const n=()=>{this.loadingController===e&&(this.loadingController=null),this.loadingPromise===i&&(this.loadingPromise=null)};return i.then(n,n),i}loadFromURL(t,e,i){return this.loadAsync((async n=>{const o=await Ca(i,{signal:n});return this.loadFromImage(t,o,e)}))}loadFromImageElement(t,e,i){return i.complete?this.loadFromImage(t,i,e):this.loadAsync((async n=>{const o=await M(i,i.src,!1,n);return this.loadFromImage(t,o,e)}))}loadFromVideoElement(t,e,i){return i.readyState>=2?this.loadFromImage(t,i,e):this.loadFromVideoElementAsync(t,e,i)}loadFromVideoElementAsync(t,e,i){return this.loadAsync((n=>C(((o,r)=>{const s=()=>{i.removeEventListener("loadeddata",c),i.removeEventListener("error",l),a(u)&&u.remove()},c=()=>{i.readyState>=2&&(s(),o(this.loadFromImage(t,i,e)))},l=t=>{s(),r(t||new P("Failed to load video"))};i.addEventListener("loadeddata",c),i.addEventListener("error",l);const u=T(n,(()=>l(O())))}))))}loadFromImage(t,e,i){const n=Ra.getDataDimensions(e);this.params.width=n.width,this.params.height=n.height;const o=this.createDescriptor(t);return o.pixelFormat=3===this.params.components?6407:6408,!this.requiresPowerOfTwo(t,o)||x(n.width)&&x(n.height)?(o.width=n.width,o.height=n.height,this.glTexture=new ie(t,o,e),t.bindTexture(this.glTexture,0),this.glTexture):(this.glTexture=this.makePowerOfTwoTexture(t,e,n,o,i),t.bindTexture(this.glTexture,0),this.glTexture)}requiresPowerOfTwo(t,e){const i=33071,n="number"==typeof e.wrapMode?e.wrapMode===i:e.wrapMode.s===i&&e.wrapMode.t===i;return!function(t){return window.WebGL2RenderingContext&&t instanceof window.WebGL2RenderingContext}(t.gl)&&(e.hasMipmap||!n)}makePowerOfTwoTexture(t,e,i,n,o){const{width:r,height:s}=i,a=L(r),c=L(s);let l;switch(n.width=a,n.height=c,this.params.powerOfTwoResizeMode){case 2:n.textureCoordinateScaleFactor=[r/a,s/c],l=new ie(t,n),l.updateData(0,0,0,r,s,e);break;case 1:case null:case void 0:l=this.stretchToPowerOfTwo(t,e,n,o)}return n.hasMipmap&&l.generateMipmap(),l}stretchToPowerOfTwo(t,e,i,n){const o=new ie(t,i),r=new ee(t,{colorTarget:0,depthStencilTarget:0},o),s=new ie(t,{target:3553,pixelFormat:i.pixelFormat,dataType:5121,wrapMode:33071,samplingMode:9729,flipped:!!i.flipped,maxAnisotropy:8,preMultiplyAlpha:i.preMultiplyAlpha},e),a=function(t,e=Ta,i=dr,n=-1,o=1){let r=null;switch(e){case Oa:r=new Float32Array([n,n,0,0,o,n,1,0,n,o,0,1,o,o,1,1]);break;case Ta:default:r=new Float32Array([n,n,o,n,n,o,o,o])}return new hs(t,i,{geometry:e},{geometry:ss.createVertex(t,35044,r)})}(t);return this.drawStretchedTexture(t,n,r,a,s,o),this.requiresFrameUpdates?this.powerOfTwoStretchInfo={vao:a,sourceTexture:s,framebuffer:r}:(a.dispose(!0),s.dispose(),r.detachColorTexture(),t.bindFramebuffer(null),r.dispose()),o}drawStretchedTexture(t,e,i,n,o,r){t.bindFramebuffer(i);const s=t.getViewport();t.setViewport(0,0,r.descriptor.width,r.descriptor.height);const a=e.program;t.bindProgram(a),a.setUniform4f("color",1,1,1,1),a.setUniform1i("tex",0),t.bindTexture(o,0),t.bindVAO(n),t.setPipelineState(e.pipeline),t.drawArrays(5,0,function(t,e){return t.vertexBuffers[e].size/function(t){return t[0].stride}(t.layout[e])}(n,"geometry")),t.bindFramebuffer(null),t.setViewport(s.x,s.y,s.width,s.height)}unload(){if(a(this.powerOfTwoStretchInfo)){const{framebuffer:t,vao:e,sourceTexture:i}=this.powerOfTwoStretchInfo;e.dispose(!0),i.dispose(),t.dispose(),this.glTexture=null,this.powerOfTwoStretchInfo=null}if(a(this.glTexture)&&(this.glTexture.dispose(),this.glTexture=null),a(this.loadingController)){const t=this.loadingController;this.loadingController=null,this.loadingPromise=null,t.abort()}this.events.emit("unloaded")}}Ra.idGen=new Ui,Ra.DDS_ENCODING="image/vnd-ms.dds";class Ia{constructor(t){this.streamDataRequester=t}async loadJSON(t,e){return this.load("json",t,e)}async loadBinary(t,e){return y(t)?(F(e),D(t)):this.load("binary",t,e)}async loadImage(t,e){return this.load("image",t,e)}async load(t,e,i){if(r(this.streamDataRequester))return(await g(e,{responseType:Na[t]})).data;const n=await k(this.streamDataRequester.request(e,t,i));if(!0===n.ok)return n.value;throw z(n.error),new P("",`Request for resource failed: ${n.error}`)}}const Na={image:"image",binary:"array-buffer",json:"json"};function Ea(t,e,i){const n=t.typedBuffer,o=t.typedBufferStride,r=e.typedBuffer,s=e.typedBufferStride,a=i?i.count:e.count;let c=(i&&i.dstIndex?i.dstIndex:0)*o,l=(i&&i.srcIndex?i.srcIndex:0)*s;for(let t=0;t<a;++t)n[c]=r[l],n[c+1]=r[l+1],c+=o,l+=s}function Ba(t,e,i){const n=t.typedBuffer,o=t.typedBufferStride,r=e.typedBuffer,s=e.typedBufferStride,a=i?i.count:e.count;let c=(i&&i.dstIndex?i.dstIndex:0)*o,l=(i&&i.srcIndex?i.srcIndex:0)*s;if(Ft(e.elementType)){const t=zt(e.elementType);if(Dt(e.elementType))for(let e=0;e<a;++e)n[c]=Math.max(r[l]/t,-1),n[c+1]=Math.max(r[l+1]/t,-1),c+=o,l+=s;else for(let e=0;e<a;++e)n[c]=r[l]/t,n[c+1]=r[l+1]/t,c+=o,l+=s}else Ea(t,e,i);return t}function Va(t,e,i){const n=t.typedBuffer,o=t.typedBufferStride,r=e.typedBuffer,s=e.typedBufferStride,a=i?i.count:e.count;let c=(i&&i.dstIndex?i.dstIndex:0)*o,l=(i&&i.srcIndex?i.srcIndex:0)*s;for(let t=0;t<a;++t)n[c]=r[l],n[c+1]=r[l+1],n[c+2]=r[l+2],c+=o,l+=s}function Ga(t,e,i){const n=t.typedBuffer,o=t.typedBufferStride,r=e.typedBuffer,s=e.typedBufferStride,a=i?i.count:e.count;let c=(i&&i.dstIndex?i.dstIndex:0)*o,l=(i&&i.srcIndex?i.srcIndex:0)*s;for(let t=0;t<a;++t)n[c]=r[l],n[c+1]=r[l+1],n[c+2]=r[l+2],n[c+3]=r[l+3],c+=o,l+=s}function Ha(t,e,i,n,o,r){const s=t.typedBuffer,a=t.typedBufferStride,c=r?r.count:t.count;let l=(r&&r.dstIndex?r.dstIndex:0)*a;for(let t=0;t<c;++t)s[l]=e,s[l+1]=i,s[l+2]=n,s[l+3]=o,l+=a}function ka(t,e){const i=t.count;e||(e=new t.TypedArrayConstructor(i));for(let n=0;n<i;n++)e[n]=t.get(n);return e}function Ua(t,e){return new t(new ArrayBuffer(e*t.ElementCount*Rt(t.ElementType)))}Object.freeze({__proto__:null,copy:Ea,normalizeIntegerBuffer:Ba}),Object.freeze({__proto__:null,copy:Va}),Object.freeze({__proto__:null,copy:Ga,fill:Ha}),Object.freeze({__proto__:null,copy:function(t,e,i){const n=t.typedBuffer,o=t.typedBufferStride,r=e.typedBuffer,s=e.typedBufferStride,a=i?i.count:e.count;let c=(i&&i.dstIndex?i.dstIndex:0)*o,l=(i&&i.srcIndex?i.srcIndex:0)*s;for(let t=0;t<a;++t){for(let t=0;t<9;++t)n[c+t]=r[l+t];c+=o,l+=s}}}),Object.freeze({__proto__:null,copy:function(t,e,i){const n=t.typedBuffer,o=t.typedBufferStride,r=e.typedBuffer,s=e.typedBufferStride,a=i?i.count:e.count;let c=(i&&i.dstIndex?i.dstIndex:0)*o,l=(i&&i.srcIndex?i.srcIndex:0)*s;for(let t=0;t<a;++t){for(let t=0;t<16;++t)n[c+t]=r[l+t];c+=o,l+=s}}}),Object.freeze({__proto__:null,copy:function(t,e,i){const n=t.typedBuffer,o=t.typedBufferStride,r=e.typedBuffer,s=e.typedBufferStride,a=i?i.count:e.count;let c=(i&&i.dstIndex?i.dstIndex:0)*o,l=(i&&i.srcIndex?i.srcIndex:0)*s;for(let t=0;t<a;++t)n[c]=r[l],c+=o,l+=s},makeDense:ka});const $a=t.getLogger("esri.views.3d.glTF");class ja{constructor(t,e,i=""){this.major=t,this.minor=e,this._context=i}lessThan(t,e){return this.major<t||t===this.major&&this.minor<e}since(t,e){return!this.lessThan(t,e)}validate(t){if(this.major!==t.major)throw new P((this._context&&this._context+":")+"unsupported-version",`Required major ${this._context&&this._context+" "}version is '${this.major}', but got '\${version.major}.\${version.minor}'`,{version:t})}clone(){return new ja(this.major,this.minor,this._context)}static parse(t,e=""){const[i,n]=t.split("."),o=/^\s*\d+\s*$/;if(!i||!i.match||!i.match(o))throw new P((e&&e+":")+"invalid-version","Expected major version to be a number, but got '${version}'",{version:t});if(!n||!n.match||!n.match(o))throw new P((e&&e+":")+"invalid-version","Expected minor version to be a number, but got '${version}'",{version:t});const r=parseInt(i,10),s=parseInt(n,10);return new ja(r,s,e)}}class Wa{constructor(t){this.data=t,this.offset4=0,this.dataUint32=new Uint32Array(this.data,0,Math.floor(this.data.byteLength/4))}readUint32(){const t=this.offset4;return this.offset4+=1,this.dataUint32[t]}readUint8Array(t){const e=4*this.offset4;return this.offset4+=t/4,new Uint8Array(this.data,e,t)}remainingBytes(){return this.data.byteLength-4*this.offset4}}const qa={baseColorFactor:[1,1,1,1],metallicFactor:1,roughnessFactor:1},Xa={pbrMetallicRoughness:qa,emissiveFactor:[0,0,0],alphaMode:"OPAQUE",alphaCutoff:.5,doubleSided:!1},Ka={ESRI_externalColorMixMode:"tint"},Qa=(t={})=>{const e={...qa,...t.pbrMetallicRoughness},i=function(t){switch(t.ESRI_externalColorMixMode){case"multiply":case"tint":case"ignore":case"replace":break;default:t.ESRI_externalColorMixMode="tint"}return t}({...Ka,...t.extras});return{...Xa,...t,pbrMetallicRoughness:e,extras:i}},Za={magFilter:9729,minFilter:9987,wrapS:10497,wrapT:10497};class Ya{constructor(t,e,i,n,o){this.context=t,this.errorContext=e,this.uri=i,this.json=n,this.glbBuffer=o,this.bufferCache=new Map,this.textureCache=new Map,this.materialCache=new Map,this.nodeParentMap=new Map,this.nodeTransformCache=new Map,this.baseUri=function(t){let e,i;return t.replace(/^(.*\/)?([^/]*)$/,((t,n,o)=>(e=n||"",i=o||"",""))),{dirPart:e,filePart:i}}(this.uri).dirPart,this.checkVersionSupported(),this.checkRequiredExtensionsSupported(),e.errorUnsupportedIf(null==n.scenes,"Scenes must be defined."),e.errorUnsupportedIf(null==n.meshes,"Meshes must be defined"),e.errorUnsupportedIf(null==n.nodes,"Nodes must be defined."),this.computeNodeParents()}static async load(t,e,i,n){if(y(i)){const n=R(i);if("model/gltf-binary"!==n.mediaType)try{const o=JSON.parse(n.isBase64?atob(n.data):n.data);return new Ya(t,e,i,o)}catch{}const o=D(i);if(Ya.isGLBData(o))return this.fromGLBData(t,e,i,o)}if(i.endsWith(".gltf")){const o=await t.loadJSON(i,n);return new Ya(t,e,i,o)}const o=await t.loadBinary(i,n);if(Ya.isGLBData(o))return this.fromGLBData(t,e,i,o);const r=await t.loadJSON(i,n);return new Ya(t,e,i,r)}static isGLBData(t){const e=new Wa(t);return e.remainingBytes()>=4&&1179937895===e.readUint32()}static async fromGLBData(t,e,i,n){const o=await Ya.parseGLBData(e,n);return new Ya(t,e,i,o.json,o.binaryData)}static async parseGLBData(t,e){const i=new Wa(e);t.assert(i.remainingBytes()>=12,"GLB binary data is insufficiently large.");const n=i.readUint32(),o=i.readUint32(),r=i.readUint32();t.assert(1179937895===n,"Magic first 4 bytes do not fit to expected GLB value."),t.assert(e.byteLength>=r,"GLB binary data is smaller than header specifies."),t.errorUnsupportedIf(2!==o,"An unsupported GLB container version was detected. Only version 2 is supported.");let s,a,c=0;for(;i.remainingBytes()>=8;){const e=i.readUint32(),n=i.readUint32();0===c?(t.assert(1313821514===n,"First GLB chunk must be JSON."),t.assert(e>=0,"No JSON data found."),s=await oc(i.readUint8Array(e))):1===c?(t.errorUnsupportedIf(5130562!==n,"Second GLB chunk expected to be BIN."),a=i.readUint8Array(e)):t.warnUnsupported("More than 2 GLB chunks detected. Skipping."),c+=1}return s||t.error("No GLB JSON chunk detected."),{json:s,binaryData:a}}async getBuffer(t,e){const i=this.json.buffers[t],n=this.errorContext;if(null==i.uri)return n.assert(null!=this.glbBuffer,"GLB buffer not present"),this.glbBuffer;let o=this.bufferCache.get(t);if(!o){const r=await this.context.loadBinary(this.resolveUri(i.uri),e);o=new Uint8Array(r),this.bufferCache.set(t,o),n.assert(o.byteLength===i.byteLength,"Buffer byte lengths should match.")}return o}async getAccessor(t,e){const i=this.json.accessors[t],n=this.errorContext;n.errorUnsupportedIf(null==i.bufferView,"Some accessor does not specify a bufferView."),n.errorUnsupportedIf(i.type in["MAT2","MAT3","MAT4"],`AttributeType ${i.type} is not supported`);const o=this.json.bufferViews[i.bufferView],r=await this.getBuffer(o.buffer,e),s=ic[i.type],a=nc[i.componentType],c=s*a,l=o.byteStride||c;return{raw:r.buffer,byteStride:l,byteOffset:r.byteOffset+(o.byteOffset||0)+(i.byteOffset||0),entryCount:i.count,isDenselyPacked:l===c,componentCount:s,componentByteSize:a,componentType:i.componentType,min:i.min,max:i.max,normalized:!!i.normalized}}async getIndexData(t,e){if(null==t.indices)return null;const i=await this.getAccessor(t.indices,e);if(i.isDenselyPacked)switch(i.componentType){case 5121:return new Uint8Array(i.raw,i.byteOffset,i.entryCount);case 5123:return new Uint16Array(i.raw,i.byteOffset,i.entryCount);case 5125:return new Uint32Array(i.raw,i.byteOffset,i.entryCount)}else switch(i.componentType){case 5121:return ka(this.wrapAccessor(Et,i));case 5123:return ka(this.wrapAccessor(Nt,i));case 5125:return ka(this.wrapAccessor(It,i))}}async getPositionData(t,e){const i=this.errorContext;i.errorUnsupportedIf(null==t.attributes.POSITION,"No POSITION vertex data found.");const n=await this.getAccessor(t.attributes.POSITION,e);return i.errorUnsupportedIf(5126!==n.componentType,"Expected type FLOAT for POSITION vertex attribute, but found "+rc[n.componentType]),i.errorUnsupportedIf(3!==n.componentCount,"POSITION vertex attribute must have 3 components, but found "+n.componentCount.toFixed()),this.wrapAccessor(Ot,n)}async getNormalData(t,e){const i=this.errorContext;i.assert(null!=t.attributes.NORMAL,"No NORMAL vertex data found.");const n=await this.getAccessor(t.attributes.NORMAL,e);return i.errorUnsupportedIf(5126!==n.componentType,"Expected type FLOAT for NORMAL vertex attribute, but found "+rc[n.componentType]),i.errorUnsupportedIf(3!==n.componentCount,"NORMAL vertex attribute must have 3 components, but found "+n.componentCount.toFixed()),this.wrapAccessor(Ot,n)}async getTangentData(t,e){const i=this.errorContext;i.assert(null!=t.attributes.TANGENT,"No TANGENT vertex data found.");const n=await this.getAccessor(t.attributes.TANGENT,e);return i.errorUnsupportedIf(5126!==n.componentType,"Expected type FLOAT for TANGENT vertex attribute, but found "+rc[n.componentType]),i.errorUnsupportedIf(4!==n.componentCount,"TANGENT vertex attribute must have 4 components, but found "+n.componentCount.toFixed()),new Ct(n.raw,n.byteOffset,n.byteStride,n.byteOffset+n.byteStride*n.entryCount)}async getTextureCoordinates(t,e){const i=this.errorContext;i.assert(null!=t.attributes.TEXCOORD_0,"No TEXCOORD_0 vertex data found.");const n=await this.getAccessor(t.attributes.TEXCOORD_0,e);return i.errorUnsupportedIf(2!==n.componentCount,"TEXCOORD_0 vertex attribute must have 2 components, but found "+n.componentCount.toFixed()),5126===n.componentType?this.wrapAccessor(Pt,n):(i.errorUnsupportedIf(!n.normalized,"Integer component types are only supported for a normalized accessor for TEXCOORD_0."),function(t){switch(t.componentType){case 5120:return new kt(t.raw,t.byteOffset,t.byteStride,t.byteOffset+t.byteStride*t.entryCount);case 5121:return new Ht(t.raw,t.byteOffset,t.byteStride,t.byteOffset+t.byteStride*t.entryCount);case 5122:return new Gt(t.raw,t.byteOffset,t.byteStride,t.byteOffset+t.byteStride*t.entryCount);case 5123:return new Vt(t.raw,t.byteOffset,t.byteStride,t.byteOffset+t.byteStride*t.entryCount);case 5125:return new Bt(t.raw,t.byteOffset,t.byteStride,t.byteOffset+t.byteStride*t.entryCount);case 5126:return new Pt(t.raw,t.byteOffset,t.byteStride,t.byteOffset+t.byteStride*t.entryCount);default:return void H()}}(n))}async getVertexColors(t,e){const i=this.errorContext;i.assert(null!=t.attributes.COLOR_0,"No COLOR_0 vertex data found.");const n=await this.getAccessor(t.attributes.COLOR_0,e);if(i.errorUnsupportedIf(4!==n.componentCount&&3!==n.componentCount,"COLOR_0 attribute must have 3 or 4 components, but found "+n.componentCount.toFixed()),4===n.componentCount){if(5126===n.componentType)return this.wrapAccessor(Ct,n);if(5121===n.componentType)return this.wrapAccessor(Tt,n);if(5123===n.componentType)return this.wrapAccessor(Ut,n)}else if(3===n.componentCount){if(5126===n.componentType)return this.wrapAccessor(Ot,n);if(5121===n.componentType)return this.wrapAccessor($t,n);if(5123===n.componentType)return this.wrapAccessor(jt,n)}i.errorUnsupported("Unsupported component type for COLOR_0 attribute: "+rc[n.componentType])}hasPositions(t){return void 0!==t.attributes.POSITION}hasNormals(t){return void 0!==t.attributes.NORMAL}hasVertexColors(t){return void 0!==t.attributes.COLOR_0}hasTextureCoordinates(t){return void 0!==t.attributes.TEXCOORD_0}hasTangents(t){return void 0!==t.attributes.TANGENT}async getMaterial(t,e){const i=this.errorContext;let n=this.materialCache.get(t.material);if(!n){const o=null!=t.material?Qa(this.json.materials[t.material]):Qa(),r=o.pbrMetallicRoughness,s=this.hasVertexColors(t);let a,c,l,u,h;r.baseColorTexture&&(i.errorUnsupportedIf(0!==(r.baseColorTexture.texCoord||0),"Only TEXCOORD with index 0 is supported."),a=await this.getTexture(r.baseColorTexture.index,e)),o.normalTexture&&(0!==(o.normalTexture.texCoord||0)?i.warnUnsupported("Only TEXCOORD with index 0 is supported for the normal map texture."):c=await this.getTexture(o.normalTexture.index,e)),o.occlusionTexture&&(0!==(o.occlusionTexture.texCoord||0)?i.warnUnsupported("Only TEXCOORD with index 0 is supported for the occlusion texture."):l=await this.getTexture(o.occlusionTexture.index,e)),o.emissiveTexture&&(0!==(o.emissiveTexture.texCoord||0)?i.warnUnsupported("Only TEXCOORD with index 0 is supported for the emissive texture."):u=await this.getTexture(o.emissiveTexture.index,e)),r.metallicRoughnessTexture&&(0!==(r.metallicRoughnessTexture.texCoord||0)?i.warnUnsupported("Only TEXCOORD with index 0 is supported for the metallicRoughness texture."):h=await this.getTexture(r.metallicRoughnessTexture.index,e)),n={alphaMode:o.alphaMode,alphaCutoff:o.alphaCutoff,color:r.baseColorFactor,doubleSided:!!o.doubleSided,colorTexture:a,normalTexture:c,name:o.name,id:null!=t.material?t.material:-1,occlusionTexture:l,emissiveTexture:u,emissiveFactor:o.emissiveFactor,metallicFactor:r.metallicFactor,roughnessFactor:r.roughnessFactor,metallicRoughnessTexture:h,vertexColors:s,ESRI_externalColorMixMode:o.extras.ESRI_externalColorMixMode}}return n}async getTexture(t,e){const i=this.errorContext,n=this.json.textures[t],o=(t=>({...Za,...t}))(null!=n.sampler?this.json.samplers[n.sampler]:{});i.errorUnsupportedIf(null==n.source,"Source is expected to be defined for a texture.");const r=this.json.images[n.source];let s=this.textureCache.get(t);if(!s){let n;if(r.uri)n=await this.context.loadImage(this.resolveUri(r.uri),e);else{i.errorUnsupportedIf(null==r.bufferView,"Image bufferView must be defined."),i.errorUnsupportedIf(null==r.mimeType,"Image mimeType must be defined.");const t=this.json.bufferViews[r.bufferView],o=await this.getBuffer(t.buffer,e);i.errorUnsupportedIf(null!=t.byteStride,"byteStride not supported for image buffer"),n=await async function(t,e){return C(((i,n)=>{const o=new Blob([t],{type:e}),r=URL.createObjectURL(o),s=new Image;s.addEventListener("load",(()=>{URL.revokeObjectURL(r),"decode"in s?s.decode().then((()=>i(s)),(()=>i(s))):i(s)})),s.addEventListener("error",(t=>{URL.revokeObjectURL(r),n(t)})),s.src=r}))}(new Uint8Array(o.buffer,o.byteOffset+(t.byteOffset||0),t.byteLength),r.mimeType)}s={data:n,wrapS:o.wrapS,wrapT:o.wrapT,minFilter:o.minFilter,name:r.name,id:t},this.textureCache.set(t,s)}return s}getNodeTransform(t){if(void 0===t)return tc;let e=this.nodeTransformCache.get(t);if(!e){const i=this.getNodeTransform(this.getNodeParent(t)),n=this.json.nodes[t];n.matrix?e=gt([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],i,n.matrix):n.translation||n.rotation||n.scale?(e=Ge(i),n.translation&&xt(e,e,n.translation),n.rotation&&(ec[3]=ce(ec,n.rotation),vt(e,e,ec[3],ec)),n.scale&&wt(e,e,n.scale)):e=i,this.nodeTransformCache.set(t,e)}return e}wrapAccessor(t,e){return new t(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*(e.entryCount-1)+e.componentByteSize*e.componentCount)}resolveUri(t){return I(t,this.baseUri)}getNodeParent(t){return this.nodeParentMap.get(t)}checkVersionSupported(){const t=ja.parse(this.json.asset.version,"glTF");Ja.validate(t)}checkRequiredExtensionsSupported(){const t=this.json;t.extensionsRequired&&0!==t.extensionsRequired.length&&this.errorContext.errorUnsupported("gltf loader was not able to load unsupported feature. Required extensions: "+t.extensionsRequired.join(", "))}computeNodeParents(){this.json.nodes.forEach(((t,e)=>{t.children&&t.children.forEach((t=>{this.nodeParentMap.set(t,e)}))}))}}const Ja=new ja(2,0,"glTF"),tc=bt([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],Math.PI/2),ec=le(),ic={SCALAR:1,VEC2:2,VEC3:3,VEC4:4},nc={5120:1,5121:1,5122:2,5123:2,5126:4,5125:4};async function oc(t){return C(((e,i)=>{const n=new Blob([t]),o=new FileReader;o.onload=()=>{e(JSON.parse(o.result))},o.onerror=t=>{i(t)},o.readAsText(n)}))}const rc={5120:"BYTE",5121:"UNSIGNED_BYTE",5122:"SHORT",5123:"UNSIGNED_SHORT",5125:"UNSIGNED_INT",5126:"FLOAT"};let sc=0;function ac(t){let e=null;return t.json.nodes.forEach((t=>{const i=t.extras;a(i)&&(i.ESRI_proxyEllipsoid||i.ESRI_lod)&&(e=i)})),e}function cc(t){return t.extensions&&t.extensions.MSFT_lod&&Array.isArray(t.extensions.MSFT_lod.ids)}function lc(t,e,i){const n=e=>{const n=`${i}_tex_${e&&e.id}${e&&e.name?"_"+e.name:""}`;if(e&&!t.textures.has(n)){const i=function(t,e={}){return{data:t,parameters:{wrap:{s:10497,t:10497,...e.wrap},noUnpackFlip:!0,mipmap:!1,...e}}}(e.data,{wrap:{s:uc(e.wrapS),t:uc(e.wrapT)},mipmap:dc.some((t=>t===e.minFilter)),noUnpackFlip:!0});t.textures.set(n,i)}return n},o=`${i}_mat_${e.id}_${e.name}`;if(!t.materials.has(o)){const i=function(t={}){return{color:[1,1,1],opacity:1,alphaMode:"OPAQUE",alphaCutoff:.5,doubleSided:!1,castShadows:!0,receiveShadows:!0,receiveAmbientOcclustion:!0,textureColor:null,textureNormal:null,textureOcclusion:null,textureEmissive:null,textureMetallicRoughness:null,emissiveFactor:[0,0,0],metallicFactor:1,roughnessFactor:1,colorMixMode:"multiply",...t}}({color:[e.color[0],e.color[1],e.color[2]],opacity:e.color[3],alphaMode:e.alphaMode,alphaCutoff:e.alphaCutoff,doubleSided:e.doubleSided,colorMixMode:e.ESRI_externalColorMixMode,textureColor:e.colorTexture?n(e.colorTexture):void 0,textureNormal:e.normalTexture?n(e.normalTexture):void 0,textureOcclusion:e.occlusionTexture?n(e.occlusionTexture):void 0,textureEmissive:e.emissiveTexture?n(e.emissiveTexture):void 0,textureMetallicRoughness:e.metallicRoughnessTexture?n(e.metallicRoughnessTexture):void 0,emissiveFactor:[e.emissiveFactor[0],e.emissiveFactor[1],e.emissiveFactor[2]],metallicFactor:e.metallicFactor,roughnessFactor:e.roughnessFactor});t.materials.set(o,i)}return o}function uc(t){if(33071===t||33648===t||10497===t)return t;hc.error(`Unexpected TextureSampler WrapMode: ${t}`)}const hc=new class{error(t){throw new P("gltf-loader-error",t)}errorUnsupported(t){throw new P("gltf-loader-unsupported-feature",t)}errorUnsupportedIf(t,e){t&&this.errorUnsupported(e)}assert(t,e){t||this.error(e)}warn(t){$a.warn(t)}warnUnsupported(t){this.warn("[Unsupported Feature] "+t)}warnUnsupportedIf(t,e){t&&this.warnUnsupported(e)}},dc=[9987,9985],fc=["POINTS","LINES","LINE_LOOP","LINE_STRIP","TRIANGLES","TRIANGLE_STRIP","TRIANGLE_FAN"];const mc=t.getLogger("esri.views.3d.layers.graphics.objectResourceUtils");function vc(t){throw new P("",`Request for object resource failed: ${t}`)}function pc(t){const e=t.params,i=e.topology;let n=!0;switch(e.vertexAttributes||(mc.warn("Geometry must specify vertex attributes"),n=!1),e.topology){case"PerAttributeArray":break;case"Indexed":case null:case void 0:{const t=e.faces;if(t){if(e.vertexAttributes)for(const i in e.vertexAttributes){const e=t[i];e&&e.values?(null!=e.valueType&&"UInt32"!==e.valueType&&(mc.warn(`Unsupported indexed geometry indices type '${e.valueType}', only UInt32 is currently supported`),n=!1),null!=e.valuesPerElement&&1!==e.valuesPerElement&&(mc.warn(`Unsupported indexed geometry values per element '${e.valuesPerElement}', only 1 is currently supported`),n=!1)):(mc.warn(`Indexed geometry does not specify face indices for '${i}' attribute`),n=!1)}}else mc.warn("Indexed geometries must specify faces"),n=!1;break}default:mc.warn(`Unsupported topology '${i}'`),n=!1}t.params.material||(mc.warn("Geometry requires material"),n=!1);const o=t.params.vertexAttributes;for(const t in o)o[t].values||(mc.warn("Geometries with externally defined attributes are not yet supported"),n=!1);return n}function gc(t){const e=Mt();return t.forEach((t=>{const i=t.boundingInfo;At(e,i.getBBMin()),At(e,i.getBBMax())})),e}async function xc(t,e){const i=[];for(const n in t){const o=t[n],r=o.images[0].data;if(!r){mc.warn("Externally referenced texture data is not yet supported");continue}const s=o.encoding+";base64,"+r,c="/textureDefinitions/"+n,l={noUnpackFlip:!0,wrap:{s:10497,t:10497},preMultiplyAlpha:!0},u=a(e)&&e.disableTextures?V(null):Ca(s,e);i.push(u.then((t=>({refId:c,image:t,params:l,alphaChannelUsage:"rgba"===o.channels?o.alphaChannelUsage||"transparency":"none"}))))}const n=await N(i),o={};for(const t of n)o[t.refId]=t;return o}function bc(t){switch(t){case"mask":return 2;case"maskAndTransparency":return 3;case"none":return 1;case"transparency":default:return 0}}function wc(t){const e=t.params;return{id:1,material:e.material,texture:e.texture,region:e.texture}}function yc(t){const e=new Uint32Array(t);for(let i=0;i<t;i++)e[i]=i;return e}const _c=new ja(1,2,"wosr");function Sc(t,e,i){if(t.count!==e.count)return void ke.error("source and destination buffers need to have the same number of elements");const n=t.count,o=i[0],r=i[1],s=i[2],a=i[3],c=i[4],l=i[5],u=i[6],h=i[7],d=i[8],f=t.typedBuffer,m=t.typedBufferStride,v=e.typedBuffer,p=e.typedBufferStride;for(let t=0;t<n;t++){const e=t*m,i=t*p,n=v[i],g=v[i+1],x=v[i+2],b=v[i+3];f[e]=o*n+a*g+u*x,f[e+1]=r*n+c*g+h*x,f[e+2]=s*n+l*g+d*x,f[e+3]=b}}function Ac(t,e,i){const n=Math.min(t.count,e.count),o=t.typedBuffer,r=t.typedBufferStride,s=e.typedBuffer,a=e.typedBufferStride;for(let t=0;t<n;t++){const e=t*r,n=t*a;o[e]=i*s[n],o[e+1]=i*s[n+1],o[e+2]=i*s[n+2],o[e+3]=i*s[n+3]}}function Mc(t){const e=t.match(/(.*\.(gltf|glb))(\?lod=([0-9]+))?$/);return e?{fileType:"gltf",url:e[1],specifiedLodIndex:null!=e[4]?Number(e[4]):null}:t.match(/(.*\.(json|json\.gz))$/)?{fileType:"wosr",url:t,specifiedLodIndex:null}:{fileType:"unknown",url:t,specifiedLodIndex:null}}function Cc(t,e,i,n){const o=t.model,r=ae(),s=new Array,c=new Map,l=new Map;return o.lods.forEach(((t,u)=>{if(void 0!==n&&u!==n)return;let h=0;const d={name:t.name,stageResources:{textures:new Array,materials:new Array,geometries:new Array},lodThreshold:a(t.lodThreshold)?t.lodThreshold:null,pivotOffset:[0,0,0],numberOfVertices:0,boundingBox:Mt()};s.push(d),t.parts.forEach((n=>{const s=n.material+(n.attributes.normal?"_normal":"")+(n.attributes.color?"_color":"")+(n.attributes.texCoord0?"_texCoord0":"")+(n.attributes.tangent?"_tangent":""),u=o.materials.get(n.material),m=a(n.attributes.texCoord0),v=a(n.attributes.normal);if(!c.has(s)){if(m){if(a(u.textureColor)&&!l.has(u.textureColor)){const t=o.textures.get(u.textureColor),e={...t.parameters,preMultiplyAlpha:!0};l.set(u.textureColor,new Ra(t.data,u.textureColor,e))}if(a(u.textureNormal)&&!l.has(u.textureNormal)){const t=o.textures.get(u.textureNormal),e={...t.parameters,preMultiplyAlpha:!0};l.set(u.textureNormal,new Ra(t.data,u.textureNormal,e))}if(a(u.textureOcclusion)&&!l.has(u.textureOcclusion)){const t=o.textures.get(u.textureOcclusion),e={...t.parameters,preMultiplyAlpha:!0};l.set(u.textureOcclusion,new Ra(t.data,u.textureOcclusion,e))}if(a(u.textureEmissive)&&!l.has(u.textureEmissive)){const t=o.textures.get(u.textureEmissive),e={...t.parameters,preMultiplyAlpha:!0};l.set(u.textureEmissive,new Ra(t.data,u.textureEmissive,e))}if(a(u.textureMetallicRoughness)&&!l.has(u.textureMetallicRoughness)){const t=o.textures.get(u.textureMetallicRoughness),e={...t.parameters,preMultiplyAlpha:!0};l.set(u.textureMetallicRoughness,new Ra(t.data,u.textureMetallicRoughness,e))}}const t=Math.pow(u.color[0],1/2.1),r=Math.pow(u.color[1],1/2.1),h=Math.pow(u.color[2],1/2.1),d=Math.pow(u.emissiveFactor[0],1/2.1),f=Math.pow(u.emissiveFactor[1],1/2.1),p=Math.pow(u.emissiveFactor[2],1/2.1);c.set(s,new va({...e,transparent:"BLEND"===u.alphaMode,textureAlphaMode:Tc(u.alphaMode),textureAlphaCutoff:u.alphaCutoff,diffuse:[t,r,h],ambient:[t,r,h],opacity:u.opacity,doubleSided:u.doubleSided,doubleSidedType:"winding-order",cullFace:u.doubleSided?0:2,vertexColors:!!n.attributes.color,vertexTangents:!!n.attributes.tangent,normals:v?"default":"screenDerivative",castShadows:!0,receiveSSAO:!0,textureId:a(u.textureColor)&&m?l.get(u.textureColor).id:void 0,colorMixMode:u.colorMixMode,normalTextureId:a(u.textureNormal)&&m?l.get(u.textureNormal).id:void 0,textureAlphaPremultiplied:!0,occlusionTextureId:a(u.textureOcclusion)&&m?l.get(u.textureOcclusion).id:void 0,emissiveTextureId:a(u.textureEmissive)&&m?l.get(u.textureEmissive).id:void 0,metallicRoughnessTextureId:a(u.textureMetallicRoughness)&&m?l.get(u.textureMetallicRoughness).id:void 0,emissiveFactor:[d,f,p],mrrFactors:[u.metallicFactor,u.roughnessFactor,e.mrrFactors[2]],isSchematic:!1,...i},s))}const p=function(t,e){switch(e){case 4:return function(t){return"number"==typeof t?function(t){return Li(t)}(t):f(t)||S(t)?new Uint32Array(t):t}(t);case 5:return function(t){const e="number"==typeof t?t:t.length;if(e<3)return new Uint32Array(0);const i=e-2,n=new Uint32Array(3*i);if("number"==typeof t){let t=0;for(let e=0;e<i;e+=1)e%2==0?(n[t++]=e,n[t++]=e+1,n[t++]=e+2):(n[t++]=e+1,n[t++]=e,n[t++]=e+2)}else{let e=0;for(let o=0;o<i;o+=1)if(o%2==0){const i=t[o+1],r=t[o+2];n[e++]=t[o],n[e++]=i,n[e++]=r}else{const i=t[o],r=t[o+2];n[e++]=t[o+1],n[e++]=i,n[e++]=r}}return n}(t);case 6:return function(t){const e="number"==typeof t?t:t.length;if(e<3)return new Uint32Array(0);const i=e-2,n=new Uint32Array(3*i);if("number"==typeof t){let t=0;for(let e=0;e<i;++e)n[t++]=0,n[t++]=e+1,n[t++]=e+2;return n}{const e=t[0];let o=t[1],r=0;for(let s=0;s<i;++s){const i=t[s+2];n[r++]=e,n[r++]=o,n[r++]=i,o=i}return n}}(t)}}(n.indices||n.attributes.position.count,n.primitiveType),g={},x={},b=n.attributes.position.count,w=Ua(Ot,b);if(Ue(w,n.attributes.position,n.transform),x.position={data:w.typedBuffer,size:w.elementCount},g.position=p,a(n.attributes.normal)){const t=Ua(Ot,b);ne(r,n.transform),$e(t,n.attributes.normal,r),x.normal={data:t.typedBuffer,size:t.elementCount},g.normal=p}if(a(n.attributes.tangent)){const t=Ua(Ct,b);ne(r,n.transform),Sc(t,n.attributes.tangent,r),x.tangent={data:t.typedBuffer,size:t.elementCount},g.tangent=p}if(a(n.attributes.texCoord0)){const t=Ua(Pt,b);Ba(t,n.attributes.texCoord0),x.uv0={data:t.typedBuffer,size:t.elementCount},g.uv0=p}if(a(n.attributes.color)){const t=Ua(Tt,b);if(4===n.attributes.color.elementCount)n.attributes.color instanceof Ct?Ac(t,n.attributes.color,255):n.attributes.color instanceof Tt?Ga(t,n.attributes.color):n.attributes.color instanceof Ut&&Ac(t,n.attributes.color,1/256);else{Ha(t,255,255,255,255);const e=new $t(t.buffer,0,4);n.attributes.color instanceof Ot?je(e,n.attributes.color,255):n.attributes.color instanceof $t?Va(e,n.attributes.color):n.attributes.color instanceof jt&&je(e,n.attributes.color,1/256)}x.color={data:t.typedBuffer,size:t.elementCount},g.color=p}const y=new Wi(new ki(x,g),`gltf_${t.name}_${h++}`);d.stageResources.geometries.push(y),d.stageResources.materials.push(c.get(s)),m&&(a(u.textureColor)&&d.stageResources.textures.push(l.get(u.textureColor)),a(u.textureNormal)&&d.stageResources.textures.push(l.get(u.textureNormal)),a(u.textureOcclusion)&&d.stageResources.textures.push(l.get(u.textureOcclusion)),a(u.textureEmissive)&&d.stageResources.textures.push(l.get(u.textureEmissive)),a(u.textureMetallicRoughness)&&d.stageResources.textures.push(l.get(u.textureMetallicRoughness))),d.numberOfVertices+=b;const _=y.boundingInfo;At(d.boundingBox,_.getBBMin()),At(d.boundingBox,_.getBBMax())}))})),s}function Tc(t){switch(t){case"BLEND":return 0;case"MASK":return 2;case"OPAQUE":return 1;default:return 0}}Object.freeze({__proto__:null,transformMat4:function(t,e,i){if(t.count!==e.count)return void ke.error("source and destination buffers need to have the same number of elements");const n=t.count,o=i[0],r=i[1],s=i[2],a=i[3],c=i[4],l=i[5],u=i[6],h=i[7],d=i[8],f=i[9],m=i[10],v=i[11],p=i[12],g=i[13],x=i[14],b=i[15],w=t.typedBuffer,y=t.typedBufferStride,_=e.typedBuffer,S=e.typedBufferStride;for(let t=0;t<n;t++){const e=t*y,i=t*S,n=_[i],A=_[i+1],M=_[i+2],C=_[i+3];w[e]=o*n+c*A+d*M+p*C,w[e+1]=r*n+l*A+f*M+g*C,w[e+2]=s*n+u*A+m*M+x*C,w[e+3]=a*n+h*A+v*M+b*C}},transformMat3:Sc,scale:Ac,shiftRight:function(t,e,i){const n=Math.min(t.count,e.count),o=t.typedBuffer,r=t.typedBufferStride,s=e.typedBuffer,a=e.typedBufferStride;for(let t=0;t<n;t++){const e=t*r,n=t*a;o[e]=s[n]>>i,o[e+1]=s[n+1]>>i,o[e+2]=s[n+2]>>i,o[e+3]=s[n+3]>>i}}});const Oc=Object.freeze({__proto__:null,fetch:async function(t,e){const i=Mc(U(t));if("wosr"===i.fileType){const t=await(e.cache?e.cache.loadWOSR(i.url,e):async function(t,e){const i=await async function(t,e){const i=a(e)&&e.streamDataRequester;if(i)return async function(t,e,i){const n=await k(e.request(t,"json",i));return!0===n.ok?n.value:(z(n.error),void vc(n.error.details.url))}(t,i,e);const n=await k(g(t,E(e)));return!0===n.ok?n.value.data:(z(n.error),void vc(n.error))}(t,e);return{resource:i,textures:await xc(i.textureDefinitions,e)}}(i.url,e)),n=function(t,e){const i=[],n=[],o=[],r=[],s=t.resource,c=ja.parse(s.version||"1.0","wosr");_c.validate(c);const l=s.model.name,u=s.model.geometries,h=s.materialDefinitions,d=t.textures;let f=0;const m=new Map;for(let t=0;t<u.length;t++){const s=u[t];if(!pc(s))continue;const c=wc(s),v=s.params.vertexAttributes,p={};for(const t in v){const e=v[t];p[t]={data:e.values,size:e.valuesPerElement}}const g={};if("PerAttributeArray"===s.params.topology){const t=yc(p.position.data.length/p.position.size);for(const e in p)g[e]=t}else{const t=s.params.faces;for(const e in t)g[e]=new Uint32Array(t[e].values)}const x=d&&d[c.texture];if(x&&!m.has(c.texture)){const{image:t,params:e}=x,i=new Ra(t,l,e);r.push(i),m.set(c.texture,i)}const b=m.get(c.texture),w=b?b.id:void 0;let y=o[c.material]?o[c.material][c.texture]:null;if(!y){const t=h[c.material.substring(c.material.lastIndexOf("/")+1)].params;1===t.transparency&&(t.transparency=0);const i=x&&x.alphaChannelUsage,n=t.transparency>0||"transparency"===i||"maskAndTransparency"===i,r={ambient:K(t.diffuse),diffuse:K(t.diffuse),opacity:1-(t.transparency||0),transparent:n,textureAlphaMode:x?bc(x.alphaChannelUsage):void 0,textureAlphaCutoff:.33,textureId:w,initTextureTransparent:!0,doubleSided:!0,cullFace:0,colorMixMode:t.externalColorMixMode||"tint",textureAlphaPremultiplied:!0};a(e)&&e.materialParamsMixin&&B(r,e.materialParamsMixin),y=new va(r,l),o[c.material]||(o[c.material]={}),o[c.material][c.texture]=y}n.push(y);const _=new Wi(new ki(p,g),l);f+=g.position?g.position.length:0,i.push(_)}return{name:l,stageResources:{textures:r,materials:n,geometries:i},pivotOffset:s.model.pivotOffset,boundingBox:gc(i),numberOfVertices:f,lodThreshold:null}}(t,e);return{lods:[n],referenceBoundingBox:n.boundingBox,isEsriSymbolResource:!1,isWosr:!0,remove:t.remove}}const n=await(e.cache?e.cache.loadGLTF(i.url,e):async function(t,e,i={}){const n=await Ya.load(t,hc,e,i),o="gltf_"+sc++,s={lods:[],materials:new Map,textures:new Map,meta:ac(n)},c=!(!n.json.asset.extras||"symbolResource"!==n.json.asset.extras.ESRI_type);return await async function(t,e){const i=t.json,n=i.scenes[i.scene||0].nodes,o=n.length>1;for(const t of n){const e=i.nodes[t],n=[r(t,0)];cc(e)&&!o&&n.push(...e.extensions.MSFT_lod.ids.map(((t,e)=>r(t,e+1)))),await N(n)}async function r(n,o){const s=i.nodes[n],a=t.getNodeTransform(n);if(hc.warnUnsupportedIf(null!=s.weights,"Morph targets are not supported."),null!=s.mesh){const t=i.meshes[s.mesh];for(const i of t.primitives)await e(i,a,o,t.name)}for(const t of s.children||[])await r(t,o)}}(n,(async(t,e,c,l)=>{const u=void 0!==t.mode?t.mode:4,h=function(t){switch(t){case 4:case 5:case 6:return t;default:return null}}(u);if(r(h))return void hc.warnUnsupported("Unsupported primitive mode ("+fc[u]+"). Skipping primitive.");if(!n.hasPositions(t))return void hc.warn("Skipping primitive without POSITION vertex attribute.");const d=await n.getMaterial(t,i),f={transform:Ge(e),attributes:{position:await n.getPositionData(t,i),normal:null,texCoord0:null,color:null,tangent:null},indices:await n.getIndexData(t,i),primitiveType:h,material:lc(s,d,o)};n.hasNormals(t)&&(f.attributes.normal=await n.getNormalData(t,i)),n.hasTangents(t)&&(f.attributes.tangent=await n.getTangentData(t,i)),n.hasTextureCoordinates(t)&&(f.attributes.texCoord0=await n.getTextureCoordinates(t,i)),n.hasVertexColors(t)&&(f.attributes.color=await n.getVertexColors(t,i));let m=null;a(s.meta)&&a(s.meta.ESRI_lod)&&"screenSpaceRadius"===s.meta.ESRI_lod.metric&&(m=s.meta.ESRI_lod.thresholds[c]),s.lods[c]=s.lods[c]||{parts:[],name:l,lodThreshold:m},s.lods[c].parts.push(f)})),{model:s,meta:{isEsriSymbolResource:c,uri:n.uri},customMeta:{}}}(new Ia(e.streamDataRequester),i.url,e)),o=G(n.model.meta,"ESRI_proxyEllipsoid");n.meta.isEsriSymbolResource&&a(o)&&-1!==n.meta.uri.indexOf("/RealisticTrees/")&&function(t,e){for(let i=0;i<t.model.lods.length;++i){const n=t.model.lods[i];t.customMeta.esriTreeRendering=!0;for(const o of n.parts){const n=o.attributes.normal;if(r(n))return;const s=o.attributes.position,a=s.count,c=W(),l=W(),u=W(),h=Ua(Tt,a),d=Ua(Ot,a),f=ft([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],o.transform);for(let r=0;r<a;r++){s.getVec(r,l),n.getVec(r,c),lt(l,l,o.transform),Z(u,l,e.center),dt(u,u,e.radius);const a=u[2],m=it(u),v=Math.min(.45+.55*m*m,1);dt(u,u,e.radius),lt(u,u,f),st(u,u),i+1!==t.model.lods.length&&t.model.lods.length>1&&rt(u,u,c,a>-1?.2:Math.min(-4*a-3.8,1)),d.setVec(r,u),h.set(r,0,255*v),h.set(r,1,255*v),h.set(r,2,255*v),h.set(r,3,255)}o.attributes.normal=d,o.attributes.color=h}}}(n,o);const s=n.meta.isEsriSymbolResource?{usePBR:e.usePBR,isSchematic:!1,treeRendering:n.customMeta.esriTreeRendering,mrrFactors:[0,1,.2]}:{usePBR:!0,isSchematic:!1,mrrFactors:[0,1,.5]},c={...e.materialParamsMixin,treeRendering:n.customMeta.esriTreeRendering};if(null!=i.specifiedLodIndex){const t=Cc(n,s,c,i.specifiedLodIndex);let e=t[0].boundingBox;return 0!==i.specifiedLodIndex&&(e=Cc(n,s,c,0)[0].boundingBox),{lods:t,referenceBoundingBox:e,isEsriSymbolResource:n.meta.isEsriSymbolResource,isWosr:!1,remove:n.remove}}const l=Cc(n,s,c);return{lods:l,referenceBoundingBox:l[0].boundingBox,isEsriSymbolResource:n.meta.isEsriSymbolResource,isWosr:!1,remove:n.remove}},gltfToEngineResources:Cc,parseUrl:Mc});export{da as L,aa as P,Oc as o}