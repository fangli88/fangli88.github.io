(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[26],{604:function(e,t,a){"use strict";a.r(t);var s=a(0),r=(a(5),a(6)),i=(a(4),a(7)),l=a(1),n=a(17),o=a(2),c=a(16),y=a(14),b=(a(3),a(9),a(69)),p=(a(10),a(8)),u=a(50),h=a(241),d=a(180),m=a(303),O=a(316),j=a(310),g=a(100),v=a(307),f=a(306),S=a(315),x=a(308),w=a(325),L=a(122),D=a(674),E=a(710),I=a(711),N=a(675),J=a(571),_=a(712),q=a(665);let F=class extends(Object(j.a)(Object(w.a)(Object(x.a)(Object(S.a)(Object(_.a)(Object(E.a)(Object(O.a)(Object(v.a)(Object(f.a)(Object(m.a)(Object(I.a)(Object(L.b)(d.a))))))))))))){constructor(...e){super(...e),this.alwaysRefetch=!1,this.dpi=96,this.gdbVersion=null,this.imageFormat="png24",this.imageMaxHeight=2048,this.imageMaxWidth=2048,this.imageTransparency=!0,this.labelsVisible=!1,this.isReference=null,this.operationalLayerType="ArcGISMapServiceLayer",this.sourceJSON=null,this.sublayers=null,this.type="map-image",this.url=null}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}load(e){const t=Object(r.h)(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service"]},e).then(()=>this._fetchService(t),()=>this._fetchService(t))),Object(p.u)(this)}readImageFormat(e,t){const a=t.supportedImageFormatTypes;return a&&a.indexOf("PNG32")>-1?"png32":"png24"}writeSublayers(e,t,a,s){if(!this.loaded||!e)return;const r=e.slice().reverse().flatten(({sublayers:e})=>e&&e.toArray().reverse()).toArray();let i=!1;if(this.capabilities&&this.capabilities.operations.supportsExportMap&&this.capabilities.exportMap.supportsDynamicLayers){const e=Object(b.d)(s.origin);if(3===e){const e=this.createSublayersForOrigin("service").sublayers;i=Object(J.c)(r,e,2)}else if(e>3){const e=this.createSublayersForOrigin("portal-item");i=Object(J.c)(r,e.sublayers,Object(b.d)(e.origin))}}const l=[],n={writeSublayerStructure:i,...s};let o=i;r.forEach(e=>{const t=e.write({},n);l.push(t),o=o||"user"===e.originOf("visible")}),l.some(e=>Object.keys(e).length>1)&&(t.layers=l),o&&(t.visibleLayers=r.filter(e=>e.visible).map(e=>e.id))}createExportImageParameters(e,t,a,s){const r=s&&s.pixelRatio||1;e&&this.version>=10&&(e=e.clone().shiftCentralMeridian());const i=new q.a({layer:this,scale:Object(D.a)({extent:e,width:t})*r}),l=i.toJSON();i.destroy();const n=!s||!s.rotation||this.version<10.3?{}:{rotation:-s.rotation},o=e&&e.spatialReference,c=o.wkid||JSON.stringify(o.toJSON());l.dpi*=r;const y={};if(null==s?void 0:s.timeExtent){const{start:e,end:t}=s.timeExtent.toJSON();y.time=e&&t&&e===t?""+e:`${null==e?"null":e},${null==t?"null":t}`}else this.timeInfo&&!this.timeInfo.hasLiveData&&(y.time="null,null");return{bbox:e&&e.xmin+","+e.ymin+","+e.xmax+","+e.ymax,bboxSR:c,imageSR:c,size:t+","+a,...l,...n,...y}}async fetchImage(e,t,a,s){const r={responseType:"image"};s&&s.timestamp&&(r.query={...r.query,_ts:s.timestamp}),s&&s.signal&&(r.signal=s.signal),this.customParameters&&Object.keys(this.customParameters).length&&(r.query={...this.customParameters,...r.query});const i=this.parsedUrl.path+"/export",l={...this.parsedUrl.query,...this.createExportImageParameters(e,t,a,s),f:"image",_ts:this.alwaysRefetch?Date.now():null};return null==l.dynamicLayers||this.capabilities.exportMap.supportsDynamicLayers?(r.query?r.query={...l,...r.query}:r.query=l,Object(u.default)(i,r).then(e=>e.data).catch(e=>{if(Object(p.n)(e))throw e;throw new y.a("mapimagelayer:image-fetch-error","Unable to load image: "+i,{error:e})})):Object(p.t)(new y.a("mapimagelayer:dynamiclayer-not-supported",`service ${this.url} doesn't support dynamic layers, which is required to be able to change the sublayer's order, rendering, labeling or source.`,{query:l}))}loadAll(){return Object(h.a)(this,e=>{e(this.allSublayers)})}async _fetchService(e){if(this.sourceJSON)return void this.read(this.sourceJSON,{origin:"service",url:this.parsedUrl});const{data:t,ssl:a}=await Object(u.default)(this.parsedUrl.path,{query:{f:"json",...this.parsedUrl.query,...this.customParameters},signal:e});a&&(this.url=this.url.replace(/^http:/i,"https:")),this.sourceJSON=t,this.read(t,{origin:"service",url:this.parsedUrl})}};Object(s.a)([Object(l.b)()],F.prototype,"alwaysRefetch",void 0),Object(s.a)([Object(l.b)()],F.prototype,"dpi",void 0),Object(s.a)([Object(l.b)()],F.prototype,"gdbVersion",void 0),Object(s.a)([Object(l.b)({json:{read:!1,write:!1}})],F.prototype,"popupEnabled",void 0),Object(s.a)([Object(l.b)()],F.prototype,"imageFormat",void 0),Object(s.a)([Object(n.a)("imageFormat",["supportedImageFormatTypes"])],F.prototype,"readImageFormat",null),Object(s.a)([Object(l.b)({json:{origins:{service:{read:{source:"maxImageHeight"}}}}})],F.prototype,"imageMaxHeight",void 0),Object(s.a)([Object(l.b)({json:{origins:{service:{read:{source:"maxImageWidth"}}}}})],F.prototype,"imageMaxWidth",void 0),Object(s.a)([Object(l.b)()],F.prototype,"imageTransparency",void 0),Object(s.a)([Object(l.b)({json:{read:!1,write:!1}})],F.prototype,"labelsVisible",void 0),Object(s.a)([Object(l.b)({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],F.prototype,"isReference",void 0),Object(s.a)([Object(l.b)({type:["ArcGISMapServiceLayer"]})],F.prototype,"operationalLayerType",void 0),Object(s.a)([Object(l.b)()],F.prototype,"sourceJSON",void 0),Object(s.a)([Object(l.b)({json:{write:{ignoreOrigin:!0}}})],F.prototype,"sublayers",void 0),Object(s.a)([Object(c.a)("sublayers",{layers:{type:[N.a]},visibleLayers:{type:[i.a]}})],F.prototype,"writeSublayers",null),Object(s.a)([Object(l.b)({type:["show","hide","hide-children"]})],F.prototype,"listMode",void 0),Object(s.a)([Object(l.b)({json:{read:!1},readOnly:!0,value:"map-image"})],F.prototype,"type",void 0),Object(s.a)([Object(l.b)(g.j)],F.prototype,"url",void 0),F=Object(s.a)([Object(o.a)("esri.layers.MapImageLayer")],F);var M=F;t.default=M},665:function(e,t,a){"use strict";a.d(t,"a",(function(){return p}));var s=a(0),r=(a(5),a(4),a(7),a(1)),i=a(2),l=(a(3),a(9),a(10),a(18)),n=a(100),o=a(122),c=a(571),y=a(335);const b={visible:"visibleSublayers",definitionExpression:"layerDefs",labelingInfo:"hasDynamicLayers",labelsVisible:"hasDynamicLayers",opacity:"hasDynamicLayers",minScale:"visibleSublayers",maxScale:"visibleSublayers",renderer:"hasDynamicLayers",source:"hasDynamicLayers"};let p=class extends(Object(o.b)(l.a)){constructor(){super(...arguments),this._scale=null,this.view=null}destroy(){this.layer=this.view=null}get dynamicLayers(){if(!this.hasDynamicLayers)return null;const e=this.visibleSublayers.map(e=>e.toExportImageJSON());return e.length?JSON.stringify(e):null}get hasDynamicLayers(){return this.layer&&Object(c.a)(this.visibleSublayers,this.layer.serviceSublayers,this.layer)}set layer(e){this._get("layer")!==e&&(this._set("layer",e),this.handles.remove("layer"),e&&this.handles.add([e.allSublayers.on("change",()=>this.notifyChange("visibleSublayers")),e.on("sublayer-update",e=>this.notifyChange(b[e.propertyName]))],"layer"))}get layers(){const e=this.visibleSublayers;return e?e.length?"show:"+e.map(e=>e.id).join(","):"show:-1":null}get layerDefs(){const e=this.visibleSublayers.filter(e=>null!=e.definitionExpression);return e.length?JSON.stringify(e.reduce((e,t)=>(e[t.id]=t.definitionExpression,e),{})):null}get scale(){return null!=this._scale?this._scale:this.view&&this.view.scale||0}set scale(e){this.view||(this._scale=e,this.notifyChange("scale"))}get version(){const e=this;e.layers,e.layerDefs,e.dynamicLayers,e.timeExtent;const t=e.layer;return t&&(t.dpi,t.imageFormat,t.imageTransparency,t.gdbVersion),(this._get("version")||0)+1}set version(e){this._set("version",e)}get visibleSublayers(){const e=[];if(!this.layer)return e;const t=this.layer.sublayers,a=t=>{const s=this.scale,r=0===s,i=0===t.minScale||s<=t.minScale,l=0===t.maxScale||s>=t.maxScale;t.visible&&(r||i&&l)&&(t.sublayers?t.sublayers.forEach(a):e.unshift(t))};t&&t.forEach(a);const s=this._get("visibleSublayers");return!s||s.length!==e.length||s.some((t,a)=>e[a]!==t)?e:s}toJSON(){const e=this.layer;let t={dpi:e.dpi,format:e.imageFormat,transparent:e.imageTransparency,gdbVersion:e.gdbVersion||null};return this.hasDynamicLayers&&this.dynamicLayers?t.dynamicLayers=this.dynamicLayers:t={...t,layers:this.layers,layerDefs:this.layerDefs},t}};Object(s.a)([Object(r.b)({readOnly:!0,dependsOn:["hasDynamicLayers","visibleSublayers"]})],p.prototype,"dynamicLayers",null),Object(s.a)([Object(r.b)({readOnly:!0,dependsOn:["visibleSublayers","layer.serviceSublayers","layer.capabilities"]})],p.prototype,"hasDynamicLayers",null),Object(s.a)([Object(r.b)()],p.prototype,"layer",null),Object(s.a)([Object(r.b)({readOnly:!0,dependsOn:["visibleSublayers"]})],p.prototype,"layers",null),Object(s.a)([Object(r.b)({readOnly:!0,dependsOn:["visibleSublayers"]})],p.prototype,"layerDefs",null),Object(s.a)([Object(r.b)({type:Number,dependsOn:["view.scale"]})],p.prototype,"scale",null),Object(s.a)([Object(r.b)(n.a)],p.prototype,"timeExtent",void 0),Object(s.a)([Object(r.b)({dependsOn:["layers","layerDefs","dynamicLayers","layer.dpi","layer.imageFormat","layer.imageTransparency","layer.gdbVersion","timeExtent"]})],p.prototype,"version",null),Object(s.a)([Object(r.b)({type:y.a})],p.prototype,"view",void 0),Object(s.a)([Object(r.b)({readOnly:!0,dependsOn:["layer.sublayers","scale"]})],p.prototype,"visibleSublayers",null),p=Object(s.a)([Object(i.a)("esri.layers.mixins.ExportImageParameters")],p)},674:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var s=a(42);function r(e,t){const a=t||e.extent,r=e.width,i=Object(s.c)(a&&a.spatialReference);return a&&r?a.width/r*i*s.g*96:0}}}]);
//# sourceMappingURL=26.6a9c07fa.chunk.js.map