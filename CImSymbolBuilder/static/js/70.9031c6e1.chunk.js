(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[70],{479:function(e,t,r){"use strict";r.d(t,"a",(function(){return g})),r.d(t,"b",(function(){return i})),r.d(t,"c",(function(){return d})),r.d(t,"d",(function(){return m})),r.d(t,"e",(function(){return o})),r.d(t,"f",(function(){return l})),r.d(t,"g",(function(){return O})),r.d(t,"h",(function(){return a})),r.d(t,"i",(function(){return p})),r.d(t,"j",(function(){return h})),r.d(t,"k",(function(){return f})),r.d(t,"l",(function(){return y}));var n=r(6),s=(r(37),r(99));function i(e=v){return[e[0],e[1],e[2],e[3],e[4],e[5]]}function a(e,t,r,n,s,a,o=i()){return o[0]=e,o[1]=t,o[2]=r,o[3]=n,o[4]=s,o[5]=a,o}function o(e,t,r=e){return j(t)?(r[0]=Math.min(e[0],t[0]),r[1]=Math.min(e[1],t[1]),r[2]=Math.min(e[2],t[2]),r[3]=Math.max(e[3],t[3]),r[4]=Math.max(e[4],t[4]),r[5]=Math.max(e[5],t[5])):Object(s.l)(t)?(r[0]=Math.min(e[0],t[0]),r[1]=Math.min(e[1],t[1]),r[3]=Math.max(e[3],t[2]),r[4]=Math.max(e[4],t[3])):2===t.length?(r[0]=Math.min(e[0],t[0]),r[1]=Math.min(e[1],t[1]),r[3]=Math.max(e[3],t[0]),r[4]=Math.max(e[4],t[1])):3===t.length&&(r[0]=Math.min(e[0],t[0]),r[1]=Math.min(e[1],t[1]),r[2]=Math.min(e[2],t[2]),r[3]=Math.max(e[3],t[0]),r[4]=Math.max(e[4],t[1]),r[5]=Math.max(e[5],t[2])),r}function l(e,t,r,n=e){const s=t.length;let i=e[0],a=e[1],o=e[2],l=e[3],u=e[4],c=e[5];if(r)for(let b=0;b<s;b++){const e=t[b];i=Math.min(i,e[0]),a=Math.min(a,e[1]),o=Math.min(o,e[2]),l=Math.max(l,e[0]),u=Math.max(u,e[1]),c=Math.max(c,e[2])}else for(let b=0;b<s;b++){const e=t[b];i=Math.min(i,e[0]),a=Math.min(a,e[1]),l=Math.max(l,e[0]),u=Math.max(u,e[1])}return n[0]=i,n[1]=a,n[2]=o,n[3]=l,n[4]=u,n[5]=c,n}function u(e){return e[0]>=e[3]?0:e[3]-e[0]}function c(e){return e[1]>=e[4]?0:e[4]-e[1]}function b(e){return e[2]>=e[5]?0:e[5]-e[2]}function y(e,t=[0,0,0]){return t[0]=u(e),t[1]=c(e),t[2]=b(e),t}function f(e,t,r=e){return r[0]=t[0],r[1]=t[1],r[2]=t[2],r!==e&&(r[3]=e[3],r[4]=e[4],r[5]=e[5]),r}function h(e,t,r=e){return r[3]=t[0],r[4]=t[1],r[5]=t[2],r!==e&&(r[0]=e[0],r[1]=e[1],r[2]=e[2]),e}function p(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e}function d(e){return e?p(e,g):i(g)}function O(e,t){return e[0]=t[0],e[1]=t[1],e[2]=Number.NEGATIVE_INFINITY,e[3]=t[2],e[4]=t[3],e[5]=Number.POSITIVE_INFINITY,e}function j(e){return 6===e.length}function m(e,t,r){if(Object(n.g)(e)||Object(n.g)(t))return e===t;if(!j(e)||!j(t))return!1;if(r){for(let n=0;n<e.length;n++)if(!r(e[n],t[n]))return!1}else for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}const g=[1/0,1/0,1/0,-1/0,-1/0,-1/0],v=[0,0,0,0,0,0];i()},597:function(e,t,r){"use strict";r.d(t,"a",(function(){return g})),r.d(t,"b",(function(){return d})),r.d(t,"c",(function(){return m})),r.d(t,"d",(function(){return p})),r.d(t,"e",(function(){return O}));var n=r(11),s=r(51),i=r(3),a=r(29),o=r(104),l=r(148),u=r(64),c=r(50),b=r(240),y=r(162),f=r(479);const h={esriGeometryPoint:"points",esriGeometryPolyline:"polylines",esriGeometryPolygon:"polygons"};function p(e){const t=e.folders||[],r=t.slice(),s=new Map,i=new Map,a=new Map,o=new Map,l=new Map,u={esriGeometryPoint:i,esriGeometryPolyline:a,esriGeometryPolygon:o};(e.featureCollection&&e.featureCollection.layers||[]).forEach(e=>{const t=Object(n.a)(e);t.featureSet.features=[];const r=e.featureSet.geometryType;s.set(r,t);const l=e.layerDefinition.objectIdField;"esriGeometryPoint"===r?j(i,l,e.featureSet.features):"esriGeometryPolyline"===r?j(a,l,e.featureSet.features):"esriGeometryPolygon"===r&&j(o,l,e.featureSet.features)}),e.groundOverlays&&e.groundOverlays.forEach(e=>{l.set(e.id,e)}),t.forEach(t=>{t.networkLinkIds.forEach(n=>{const s=function(e,t,r){const n=function(e,t){let r;return t.some(t=>t.id===e&&(r=t,!0)),r}(e,r);return n&&(n.parentFolderId=t,n.networkLink=n),n}(n,t.id,e.networkLinks);s&&r.push(s)})}),r.forEach(e=>{e.featureInfos&&(e.points=Object(n.a)(s.get("esriGeometryPoint")),e.polylines=Object(n.a)(s.get("esriGeometryPolyline")),e.polygons=Object(n.a)(s.get("esriGeometryPolygon")),e.mapImages=[],e.featureInfos.map(t=>{switch(t.type){case"esriGeometryPoint":case"esriGeometryPolyline":case"esriGeometryPolygon":{const r=u[t.type].get(t.id);r&&e[h[t.type]].featureSet.features.push(r);break}case"GroundOverlay":{const r=l.get(t.id);r&&e.mapImages.push(r);break}}}),e.fullExtent=g([e]))});const c=g(r);return{folders:t,sublayers:r,extent:c}}function d(e,t,r,n){const a=u.b&&u.b.findCredential(e);e=Object(i.e)(e,{token:a&&a.token});const o=s.a.kmlServiceUrl;return Object(c.default)(o,{query:{url:e,model:"simple",folders:"",refresh:0!==r||void 0,outSR:JSON.stringify(t)},responseType:"json",signal:n})}function O(e,t,r=null,n=[]){const s=[],i={},a=t.sublayers,o=t.folders.map(e=>e.id);return a.forEach(t=>{const a=new e;if(r?a.read(t,r):a.read(t),n.length&&o.indexOf(a.id)>-1&&(a.visible=-1!==n.indexOf(a.id)),i[t.id]=a,null!=t.parentFolderId&&-1!==t.parentFolderId){const e=i[t.parentFolderId];e.sublayers||(e.sublayers=[]),e.sublayers.unshift(a)}else s.unshift(a)}),s}function j(e,t,r){r.forEach(r=>{e.set(r.attributes[t],r)})}async function m(e){const t=y.default.fromJSON(e.featureSet).features,r=e.layerDefinition,n=Object(b.a)(r.drawingInfo.renderer),s=l.a.fromJSON(e.popupInfo),i=[];for(const a of t){const e=await n.getSymbolAsync(a);a.symbol=e,a.popupTemplate=s,a.visible=!0,i.push(a)}return i}function g(e){const t=Object(f.b)(),r=Object(f.b)(f.a);for(const n of e){if(n.polygons&&n.polygons.featureSet&&n.polygons.featureSet.features)for(const e of n.polygons.featureSet.features)Object(o.b)(t,e.geometry),Object(f.e)(r,t,r);if(n.polylines&&n.polylines.featureSet&&n.polylines.featureSet.features)for(const e of n.polylines.featureSet.features)Object(o.b)(t,e.geometry),Object(f.e)(r,t,r);if(n.points&&n.points.featureSet&&n.points.featureSet.features)for(const e of n.points.featureSet.features)Object(o.b)(t,e.geometry),Object(f.e)(r,t,r);if(n.mapImages)for(const e of n.mapImages)Object(o.b)(t,e.extent),Object(f.e)(r,t,r)}return Object(f.d)(r,f.a)?null:{xmin:r[0],ymin:r[1],zmin:r[2],xmax:r[3],ymax:r[4],zmax:r[5],spatialReference:a.a.WGS84}}},632:function(e,t,r){"use strict";r.r(t);var n,s=r(0),i=(r(5),r(6)),a=(r(4),r(7)),o=r(1),l=r(17),u=r(2),c=r(16),b=(r(3),r(9),r(10),r(8)),y=r(29),f=r(37),h=(r(59),r(23)),p=r(165),d=r(180),O=r(303),j=r(310),m=r(307),g=r(306),v=r(315),S=r(308),M=r(597),x=r(32),w=r(13),E=r(85),I=r(80),k=r(19);let _=n=class extends(E.a.EventedMixin(Object(w.b)(I.a))){constructor(){super(...arguments),this._sublayersHandles=null,this.description=null,this.id=null,this.networkLink=null,this.title=null,this.sourceJSON=null,this.fullExtent=null}initialize(){Object(k.i)(this,"networkLink").then(()=>Object(k.k)(this,"visible")).then(()=>this.load())}load(e){if(!this.networkLink)return;const t=Object(i.h)(e)?e.signal:null,r=this._fetchService(this._get("networkLink").href,t).then(e=>{const t=Object(M.a)(e.sublayers);this.fullExtent=f.a.fromJSON(t),this.sourceJSON=e;const r=Object(a.m)(h.a.ofType(n),Object(M.e)(n,e));this.sublayers?this.sublayers.addMany(r):this.sublayers=r,this.layer.emit("sublayer-update"),this.layer&&this.layer.notifyChange("visibleSublayers")});return this.addResolvingPromise(r),Object(b.u)(this)}set sublayers(e){const t=this._get("sublayers");t&&(t.forEach(e=>{e.parent=null,e.layer=null}),this._sublayersHandles.forEach(e=>e.remove()),this._sublayersHandles=null),e&&(e.forEach(e=>{e.parent=this,e.layer=this.layer}),this._sublayersHandles=[e.on("after-add",({item:e})=>{e.parent=this,e.layer=this.layer}),e.on("after-remove",({item:e})=>{e.parent=null,e.layer=null})]),this._set("sublayers",e)}castSublayers(e){return Object(a.m)(h.a.ofType(n),e)}get visible(){return this._get("visible")}set visible(e){this._get("visible")!==e&&(this._set("visible",e),this.layer&&this.layer.notifyChange("visibleSublayers"))}readVisible(e,t){return!!t.visibility}set layer(e){this._set("layer",e),this.sublayers&&this.sublayers.forEach(t=>t.layer=e)}_fetchService(e,t){return Object(M.b)(e,this.layer.outSpatialReference,this.layer.refreshInterval,t).then(e=>Object(M.d)(e.data))}};Object(s.a)([Object(o.b)()],_.prototype,"description",void 0),Object(s.a)([Object(o.b)()],_.prototype,"id",void 0),Object(s.a)([Object(o.b)({readOnly:!0,value:null})],_.prototype,"networkLink",void 0),Object(s.a)([Object(o.b)({json:{write:{allowNull:!0}}})],_.prototype,"parent",void 0),Object(s.a)([Object(o.b)({value:null,json:{write:{allowNull:!0}}})],_.prototype,"sublayers",null),Object(s.a)([Object(x.a)("sublayers")],_.prototype,"castSublayers",null),Object(s.a)([Object(o.b)({value:null,json:{read:{source:"name"}}})],_.prototype,"title",void 0),Object(s.a)([Object(o.b)({value:!0})],_.prototype,"visible",null),Object(s.a)([Object(l.a)("visible",["visibility"])],_.prototype,"readVisible",null),Object(s.a)([Object(o.b)()],_.prototype,"sourceJSON",void 0),Object(s.a)([Object(o.b)({value:null})],_.prototype,"layer",null),Object(s.a)([Object(o.b)({type:f.a})],_.prototype,"fullExtent",void 0),_=n=Object(s.a)([Object(u.a)("esri.layers.support.KMLSublayer")],_);var F=_;let G=class extends(Object(j.a)(Object(v.a)(Object(S.a)(Object(m.a)(Object(g.a)(Object(O.a)(d.a))))))){constructor(...e){super(...e),this._visibleFolders=[],this.allSublayers=new p.a({root:this,rootCollectionNames:["sublayers"],getChildrenFunction:e=>e.sublayers}),this.outSpatialReference=y.a.WGS84,this.path=null,this.operationalLayerType="KML",this.sublayers=null,this.type="kml",this.url=null}initialize(){this.watch("sublayers",(e,t)=>{t&&t.forEach(e=>{e.parent=null,e.layer=null}),e&&e.forEach(e=>{e.parent=this,e.layer=this})},!0),this.on("sublayer-update",()=>this.notifyChange("fullExtent"))}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}readSublayersFromItemOrWebMap(e,t){this._visibleFolders=t.visibleFolders}readSublayers(e,t,r){return Object(M.e)(F,t,r,this._visibleFolders)}writeSublayers(e,t){const r=[],n=e.toArray();for(;n.length;){const e=n[0];e.networkLink||(e.visible&&r.push(e.id),e.sublayers&&n.push(...e.sublayers.toArray())),n.shift()}t.visibleFolders=r}get title(){if(this._get("title")&&"defaults"!==this.originOf("title"))return this._get("title");if(this.url){let e=this.url.substring(this.url.lastIndexOf("/")+1,this.parsedUrl.path.lastIndexOf("."));return 0===e.length&&(e="KML"),e}return this._get("title")||""}set title(e){this._set("title",e)}get visibleSublayers(){const e=this.sublayers,t=[],r=e=>{e.visible&&(t.push(e),e.sublayers&&e.sublayers.forEach(r))};return e&&e.forEach(r),t}get fullExtent(){return this._recomputeFullExtent()}load(e){const t=Object(i.h)(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["KML"]},e).then(()=>this._fetchService(t))),Object(b.u)(this)}async _fetchService(e){const t=await Object(b.u)().then(()=>this.resourceInfo?{ssl:!1,data:this.resourceInfo}:Object(M.b)(this.url,this.outSpatialReference,this.refreshInterval,e)),r=Object(M.d)(t.data);r&&this.read(r,{origin:"service"})}_recomputeFullExtent(){let e=null;this.extent&&(e=this.extent.clone());const t=r=>{if(r.sublayers)for(const n of r.sublayers.items)t(n),n.visible&&n.fullExtent&&(e?e.union(n.fullExtent):e=n.fullExtent.clone())};return t(this),e}};Object(s.a)([Object(o.b)({readOnly:!0})],G.prototype,"allSublayers",void 0),Object(s.a)([Object(o.b)({type:y.a})],G.prototype,"outSpatialReference",void 0),Object(s.a)([Object(o.b)({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],G.prototype,"path",void 0),Object(s.a)([Object(o.b)({type:["show","hide","hide-children"]})],G.prototype,"listMode",void 0),Object(s.a)([Object(o.b)({type:["KML"]})],G.prototype,"operationalLayerType",void 0),Object(s.a)([Object(o.b)({type:h.a.ofType(F),json:{write:{ignoreOrigin:!0}}})],G.prototype,"sublayers",void 0),Object(s.a)([Object(l.a)(["web-map","portal-item"],"sublayers",["visibleFolders"])],G.prototype,"readSublayersFromItemOrWebMap",null),Object(s.a)([Object(l.a)("service","sublayers",["sublayers"])],G.prototype,"readSublayers",null),Object(s.a)([Object(c.a)("sublayers")],G.prototype,"writeSublayers",null),Object(s.a)([Object(o.b)({readOnly:!0,json:{read:!1}})],G.prototype,"type",void 0),Object(s.a)([Object(o.b)({json:{origins:{"web-map":{read:{source:"title"}}},write:{ignoreOrigin:!0}},dependsOn:["url","parsedUrl"]})],G.prototype,"title",null),Object(s.a)([Object(o.b)()],G.prototype,"url",void 0),Object(s.a)([Object(o.b)({readOnly:!0,dependsOn:["sublayers"]})],G.prototype,"visibleSublayers",null),Object(s.a)([Object(o.b)({type:f.a})],G.prototype,"extent",void 0),Object(s.a)([Object(o.b)({dependsOn:["extent"]})],G.prototype,"fullExtent",null),G=Object(s.a)([Object(u.a)("esri.layers.KMLLayer")],G);var P=G;t.default=P}}]);
//# sourceMappingURL=70.9031c6e1.chunk.js.map