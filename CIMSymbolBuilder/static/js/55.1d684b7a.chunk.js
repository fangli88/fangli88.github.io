(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[55],{419:function(e,t,i){"use strict";i.d(t,"a",(function(){return x})),i.d(t,"b",(function(){return T})),i.d(t,"c",(function(){return y})),i.d(t,"d",(function(){return s})),i.d(t,"e",(function(){return u})),i.d(t,"f",(function(){return c})),i.d(t,"g",(function(){return o})),i.d(t,"h",(function(){return L})),i.d(t,"i",(function(){return R})),i.d(t,"j",(function(){return h})),i.d(t,"k",(function(){return p})),i.d(t,"l",(function(){return U})),i.d(t,"m",(function(){return C})),i.d(t,"n",(function(){return n})),i.d(t,"o",(function(){return I})),i.d(t,"p",(function(){return r})),i.d(t,"q",(function(){return l})),i.d(t,"r",(function(){return z})),i.d(t,"s",(function(){return O})),i.d(t,"t",(function(){return g})),i.d(t,"u",(function(){return v})),i.d(t,"v",(function(){return S})),i.d(t,"w",(function(){return m})),i.d(t,"x",(function(){return b})),i.d(t,"y",(function(){return j})),i.d(t,"z",(function(){return A})),i.d(t,"A",(function(){return w})),i.d(t,"B",(function(){return _})),i.d(t,"C",(function(){return f})),i.d(t,"D",(function(){return d})),i.d(t,"E",(function(){return N})),i.d(t,"F",(function(){return a})),i.d(t,"G",(function(){return E})),i.d(t,"H",(function(){return D})),i.d(t,"I",(function(){return P}));const r=1e-30,l=4294967295,a=512,s=128,o=8,n=29,c=1,u=16,p=50,h=10,d=8,y={metrics:{width:15,height:17,left:0,top:-7,advance:14}},f=0,b=0,m=0,O=1,g=2,v=3,S=4,j=5,A=6,w=5,_=6,x=1,T=2,I=2,U=1,R=2,L=4,N=2.5,C=24,P=5,D=6,E=1.15,z=2},514:function(e,t,i){"use strict";i.d(t,"a",(function(){return w}));var r=i(0),l=(i(5),i(4)),a=i(1),s=i(32),o=i(2),n=i(14),c=i(3),u=(i(9),i(10),i(136)),p=i(8),h=i(63),d=i(18),y=i(50),f=i(45),b=i(314),m=i(19),O=i(11),g=i(95);class v{constructor(){this.location={left:0,top:0,width:0,height:0},this._allAvailability="unknown",this.byteSize=40}getAvailability(e,t){if("unknown"!==this._allAvailability)return this._allAvailability;const i=(e-this.location.top)*this.location.width+(t-this.location.left),r=i%8,l=i>>3,a=this._tileAvailabilityBitSet;return l<0||l>a.length?"unknown":a[l]&1<<r?"available":"unavailable"}_updateFromData(e){const t=this.location.width,i=this.location.height;let r=!0,l=!0;const a=Math.ceil(t*i/8),s=new Uint8Array(a);let o=0;for(let n=0;n<e.length;n++){const t=n%8;e[n]?(l=!1,s[o]|=1<<t):r=!1,7===t&&++o}l?this._allAvailability="unavailable":r?this._allAvailability="available":(this._allAvailability="unknown",this._tileAvailabilityBitSet=s,this.byteSize+=s.length)}static fromDefinition(e,t){const i=e.service.request||y.default,{row:r,col:l,width:a,height:s}=e,o={query:{f:"json"}};return t=t?{...o,...t}:o,i(function(e){let t;if("vector-tile"===e.service.type)t=`${e.service.url}/tilemap/${e.level}/${e.row}/${e.col}/${e.width}/${e.height}`;else{const i=e.service.tileServers;t=`${i&&i.length?i[e.row%i.length]:e.service.url}/tilemap/${e.level}/${e.row}/${e.col}/${e.width}/${e.height}`}const i=e.service.query;return i&&(t=`${t}?${i}`),t}(e),t).then(e=>e.data).catch(e=>{if(e&&e.details&&422===e.details.httpStatus)return{location:{top:r,left:l,width:a,height:s},valid:!0,data:Object(g.b)(a*s,0)};throw e}).then(e=>{if(e.location&&(e.location.top!==r||e.location.left!==l||e.location.width!==a||e.location.height!==s))throw new n.a("tilemap:location-mismatch","Tilemap response for different location than requested",{response:e,definition:{top:r,left:l,width:a,height:s}});return v.fromJSON(e)})}static fromJSON(e){v.validateJSON(e);const t=new v;return t.location=Object.freeze(Object(O.a)(e.location)),t._updateFromData(e.data),Object.freeze(t)}static validateJSON(e){if(!e||!e.location)throw new n.a("tilemap:missing-location","Location missing from tilemap response");if(!1===e.valid)throw new n.a("tilemap:invalid","Tilemap response was marked as invalid");if(!e.data)throw new n.a("tilemap:missing-data","Data missing from tilemap response");if(!Array.isArray(e.data))throw new n.a("tilemap:data-mismatch","Data must be an array of numbers");if(e.data.length!==e.location.width*e.location.height)throw new n.a("tilemap:data-mismatch","Number of data items does not match width/height of tilemap")}}function S(e){return`${e.level}/${e.row}/${e.col}/${e.width}/${e.height}`}var j;const A=l.a.getLogger("esri.layers.support.TilemapCache");let w=j=class extends d.a{constructor(e){super(e),this._handles=new f.a,this._pendingTilemapRequests={},this._availableLevels={},this.levels=5,this.cacheByteSize=2097152,this.request=y.default,this._prefetchingEnabled=!0}initialize(){this._tilemapCache=new b.a(this.cacheByteSize),this._handles.add([this.watch(["layer.parsedUrl","layer.tileServers?"],()=>this._initializeTilemapDefinition()),Object(m.a)(this,"layer.tileInfo.lods",e=>this._initializeAvailableLevels(e),!0)]),this._initializeTilemapDefinition()}destroy(){this._handles&&(this._handles.destroy(),this._handles=null)}castLevels(e){return e<=2?(A.error("Minimum levels for Tilemap is 3, but got ",e),3):e}get size(){return 1<<this.levels}fetchTilemap(e,t,i,r){if(!this._availableLevels[e])return Object(p.t)(new n.a("tilemap-cache:level-unavailable",`Level ${e} is unavailable in the service`));const l=this._tmpTilemapDefinition,a=this._tilemapFromCache(e,t,i,l);if(a)return Object(p.u)(a);const s=r&&r.signal;return r={...r,signal:null},Object(p.c)((e,t)=>{Object(p.r)(s,()=>t(Object(p.e)()));const i=S(l);let a=this._pendingTilemapRequests[i];if(!a){a=v.fromDefinition(l,r).then(e=>(this._tilemapCache.put(i,e,e.byteSize),e));const e=()=>delete this._pendingTilemapRequests[i];this._pendingTilemapRequests[i]=a,a.then(e,e)}a.then(e,t)})}getAvailability(e,t,i){if(!this._availableLevels[e])return"unavailable";const r=this._tilemapFromCache(e,t,i,this._tmpTilemapDefinition);return r?r.getAvailability(t,i):"unknown"}getAvailabilityUpsample(e,t,i,r){r.level=e,r.row=t,r.col=i;const l=this.layer.tileInfo;for(l.updateTileInfo(r);;){const e=this.getAvailability(r.level,r.row,r.col);if("unavailable"!==e)return e;if(!l.upsampleTile(r))return"unavailable"}}fetchAvailability(e,t,i,r){return this._availableLevels[e]?this.fetchTilemap(e,t,i,r).catch(e=>e).then(r=>{if(r instanceof v){const l=r.getAvailability(t,i);return"unavailable"===l?Object(p.t)(new n.a("tile-map:tile-unavailable","Tile is not available",{level:e,row:t,col:i})):l}if(Object(p.n)(r))throw r;return"unknown"}):Object(p.t)(new n.a("tilemap-cache:level-unavailable",`Level ${e} is unavailable in the service`))}fetchAvailabilityUpsample(e,t,i,r,l){r.level=e,r.row=t,r.col=i;const a=this.layer.tileInfo;a.updateTileInfo(r);const s=this.fetchAvailability(e,t,i,l).catch(e=>{if(Object(p.n)(e))throw e;if(a.upsampleTile(r))return this.fetchAvailabilityUpsample(r.level,r.row,r.col,r);throw e});return this._fetchAvailabilityUpsamplePrefetch(r.id,e,t,i,l,s),s}async _fetchAvailabilityUpsamplePrefetch(e,t,i,r,l,a){if(!this._prefetchingEnabled)return;const s="prefetch-"+e;if(this._handles.has(s))return;const o=Object(p.d)();a.then(()=>o.abort(),()=>o.abort());let n=!1;const c={remove(){n||(n=!0,o.abort())}};this._handles.add(c,s);try{await Object(h.c)(10,o.signal)}catch{}if(n||(n=!0,this._handles.remove(s)),Object(p.o)(o))return;const u={id:e,level:t,row:i,col:r},d={...l,signal:o.signal},y=this.layer.tileInfo;for(let p=0;j._prefetches.length<j._maxPrefetch&&y.upsampleTile(u);++p){const e=this.fetchAvailability(u.level,u.row,u.col,d);j._prefetches.push(e);const t=()=>{j._prefetches.removeUnordered(e)};e.then(t,t)}}_initializeTilemapDefinition(){if(!this.layer.parsedUrl)return;const e=this.layer.parsedUrl,t=e.query;this._tilemapCache.clear(),this._tmpTilemapDefinition={service:{url:e.path,query:t?Object(c.B)(t):null,tileServers:this.layer.tileServers,request:this.request,type:this.layer.type},width:this.size,height:this.size,level:0,row:0,col:0}}_tilemapFromCache(e,t,i,r){r.level=e,r.row=t-t%this.size,r.col=i-i%this.size;const l=S(r);return this._tilemapCache.get(l)}_initializeAvailableLevels(e){this._availableLevels={},e&&e.forEach(e=>this._availableLevels[e.level]=!0)}get test(){const e=this;return{get prefetchingEnabled(){return e._prefetchingEnabled},set prefetchingEnabled(t){e._prefetchingEnabled=t},hasTilemap:(t,i,r)=>!!e._tilemapFromCache(t,i,r,e._tmpTilemapDefinition)}}};w._maxPrefetch=4,w._prefetches=new u.a({initialSize:j._maxPrefetch}),Object(r.a)([Object(a.b)({constructOnly:!0,type:Number})],w.prototype,"levels",void 0),Object(r.a)([Object(s.a)("levels")],w.prototype,"castLevels",null),Object(r.a)([Object(a.b)({readOnly:!0,dependsOn:["levels"],type:Number})],w.prototype,"size",null),Object(r.a)([Object(a.b)({constructOnly:!0,type:Number})],w.prototype,"cacheByteSize",void 0),Object(r.a)([Object(a.b)({constructOnly:!0})],w.prototype,"layer",void 0),Object(r.a)([Object(a.b)({constructOnly:!0})],w.prototype,"request",void 0),w=j=Object(r.a)([Object(o.a)("esri.layers.support.TilemapCache")],w)},528:function(e,t,i){"use strict";i.d(t,"a",(function(){return a})),i.d(t,"b",(function(){return l}));var r=i(302);const l={type:r.a,json:{origins:{service:{read:{source:["tileInfo","minScale","maxScale","minLOD","maxLOD"],reader:a}}}}};function a(e,t,i,l){if(!e)return null;const{minScale:a,maxScale:s,minLOD:o,maxLOD:n}=t;if(null!=o&&null!=n)return l&&l.ignoreMinMaxLOD?r.a.fromJSON(e):r.a.fromJSON({...e,lods:e.lods.filter(({level:e})=>null!=e&&e>=o&&e<=n)});if(0!==a&&0!==s){const t=e=>Math.round(1e4*e)/1e4,i=a?t(a):1/0,l=s?t(s):-1/0;return r.a.fromJSON({...e,lods:e.lods.filter(e=>{const r=t(e.scale);return r<=i&&r>=l})})}return r.a.fromJSON(e)}},569:function(e,t,i){"use strict";i.d(t,"a",(function(){return u}));var r=i(0),l=(i(5),i(4),i(7),i(1)),a=i(17),s=i(2),o=(i(3),i(9),i(10),i(29)),n=(i(59),i(528)),c=i(514);const u=e=>{let t=class extends e{constructor(){super(...arguments),this.copyright=null,this.minScale=0,this.maxScale=0,this.spatialReference=null,this.tileInfo=null,this.tilemapCache=null}readMinScale(e,t){return null!=t.minLOD&&null!=t.maxLOD?e:0}readMaxScale(e,t){return null!=t.minLOD&&null!=t.maxLOD?e:0}get supportsBlankTile(){return this.version>=10.2}readTilemapCache(e,t){return t.capabilities&&t.capabilities.indexOf("Tilemap")>-1?new c.a({layer:this}):null}};return Object(r.a)([Object(l.b)({json:{read:{source:"copyrightText"}}})],t.prototype,"copyright",void 0),Object(r.a)([Object(l.b)()],t.prototype,"minScale",void 0),Object(r.a)([Object(a.a)("service","minScale")],t.prototype,"readMinScale",null),Object(r.a)([Object(l.b)()],t.prototype,"maxScale",void 0),Object(r.a)([Object(a.a)("service","maxScale")],t.prototype,"readMaxScale",null),Object(r.a)([Object(l.b)({type:o.a})],t.prototype,"spatialReference",void 0),Object(r.a)([Object(l.b)({readOnly:!0,dependsOn:["version"]})],t.prototype,"supportsBlankTile",null),Object(r.a)([Object(l.b)(n.b)],t.prototype,"tileInfo",void 0),Object(r.a)([Object(l.b)()],t.prototype,"tilemapCache",void 0),Object(r.a)([Object(a.a)("service","tilemapCache",["capabilities"])],t.prototype,"readTilemapCache",null),Object(r.a)([Object(l.b)()],t.prototype,"version",void 0),t=Object(r.a)([Object(s.a)("esri.layers.mixins.ArcGISCachedService")],t),t}},621:function(e,t,i){"use strict";i.r(t);var r=i(0),l=i(27),a=(i(5),i(11)),s=i(4),o=(i(7),i(1)),n=i(17),c=i(2),u=i(16),p=i(14),h=i(3),d=(i(9),i(10),i(8)),y=i(29),f=i(37),b=i(50),m=i(180),O=i(303),g=i(316),v=i(310),S=i(307),j=i(306),A=i(308),w=i(302),_=i(514),x=i(569);const T=s.a.getLogger("esri.layers.support.SpriteSource");var I=i(51),U=i(528),R=i(666);const L=I.a.defaults&&I.a.defaults.io.corsEnabledServers;function N(e){if(!e)return;const t=Object(h.l)(e);L&&-1===L.indexOf(t)&&L.push(t)}function C(...e){let t=void 0;for(let i=0;i<e.length;++i)if(Object(h.u)(e[i])){if(t){const r=t.split("://")[0];t=r+":"+e[i].trim()}}else t=Object(h.r)(e[i])?e[i]:Object(h.w)(t,e[i]);return Object(h.F)(t)}async function P(e,t,i,r,l){let a,s,o;if(Object(d.w)(l),"string"==typeof i){const e=Object(h.A)(i);N(e);const t=Object(h.H)(e);o=await Object(b.default)(t.path,{query:{f:"json"},responseType:"json",...l}),a=e,s=e}else o={data:i},a=i.jsonUrl||null,s=r;const n=o.data;return o.ssl&&(a&&(a=a.replace(/^http:/i,"https:")),s&&(s=s.replace(/^http:/i,"https:"))),D(n)?(e.styleUrl=a||null,async function(e,t,i,r){const l=i?Object(h.D)(i):h.f;e.styleBase=l,e.style=t,e.styleUrl&&N(e.styleUrl),t["sprite-format"]&&"webp"===t["sprite-format"].toLowerCase()&&(e.spriteFormat="webp");const a=[];if(t.sources&&t.sources.esri){const i=t.sources.esri;i.url?await P(e,"esri",C(l,i.url),void 0,r):a.push(P(e,"esri",i,l,r))}for(const s of Object.keys(t.sources))"esri"!==s&&"vector"===t.sources[s].type&&(t.sources[s].url?a.push(P(e,s,C(l,t.sources[s].url),void 0,r)):a.push(P(e,s,t.sources[s],l,r)));await Object(d.b)(a)}(e,n,s,l)):D(n)?Object(d.t)("You must specify the URL or the JSON for a service or for a style."):e.sourceUrl?E(e,n,s,!1,t,l):(e.sourceUrl=a||null,E(e,n,s,!0,t,l))}function D(e){return!!e.sources}async function E(e,t,i,r,l,s){const o=i?Object(h.F)(i)+"/":h.f,n=function(e,t){if(e.hasOwnProperty("tileInfo"))return e;const i={xmin:-20037507.067161843,ymin:-20037507.067161843,xmax:20037507.067161843,ymax:20037507.067161843,spatialReference:{wkid:102100}};let r=78271.51696400007,l=295828763.7957775;const a=[],s=e.hasOwnProperty("minzoom")?parseFloat(e.minzoom):0,o=e.hasOwnProperty("maxzoom")?parseFloat(e.maxzoom):22;for(let n=0;n<=o;n++)n>=s&&a.push({level:n,scale:l,resolution:r}),r/=2,l/=2;for(const n of e.tiles)N(C(t,n));return{capabilities:"TilesOnly",initialExtent:i,fullExtent:i,minScale:0,maxScale:0,tiles:e.tiles,tileInfo:{rows:512,cols:512,dpi:96,format:"pbf",origin:{x:-20037508.342787,y:20037508.342787},lods:a,spatialReference:{wkid:102100}}}}(t,o),c=new class{constructor(e,t,i){this.tileMapURL="",this.tilemapCache=null,this.parsedUrl=null,this.tileInfo=null,this.capabilities=null,this.tileIndex=null,this.fullExtent=null,this.name=e,this.sourceUrl=t,t&&(this.parsedUrl=Object(h.H)(this.sourceUrl));const r=Object(a.a)(i),l=r.tiles;t&&l.forEach((e,i)=>{Object(h.r)(e)||(l[i]=Object(h.w)(t,e))}),this.tileServers=l,i.tileMap&&(this.tileMapURL=Object(h.w)(t,i.tileMap));const s=i.capabilities&&i.capabilities.split(",").map(e=>e.toLowerCase().trim()),o=!!i.exportTilesAllowed,n=!!s&&-1!==s.indexOf("tilemap"),c=o&&i.hasOwnProperty("maxExportTilesCount")?i.maxExportTilesCount:0;this.capabilities={operations:{supportsExportTiles:o,supportsTileMap:n},exportTiles:o?{maxExportTilesCount:+c}:null},this.tileInfo=Object(U.a)(r.tileInfo,r,null,{ignoreMinMaxLOD:!0}),n&&(this.type="vector-tile",this.tilemapCache=new _.a({layer:this}),this.tilemapCache&&(this.tileIndex=new R.a(this.tilemapCache))),this.fullExtent=f.a.fromJSON(i.fullExtent)}getRefKey(e,t){return this.tileIndex?this.tileIndex.dataKey(e,t):Object(d.u)(e)}getSourceTileUrl(e,t,i){let r=this.tileServers[t%this.tileServers.length];return r=r.replace(/\{z\}/gi,e.toString()).replace(/\{y\}/gi,t.toString()).replace(/\{x\}/gi,i.toString()),r}isCompatibleWith(e){const t=this.tileInfo,i=e.tileInfo;if(!t.spatialReference.equals(i.spatialReference))return!1;if(!t.origin.equals(i.origin))return!1;if(Math.round(t.dpi)!==Math.round(i.dpi))return!1;const r=t.lods,l=i.lods,a=Math.min(r.length,l.length);for(let s=0;s<a;s++){const e=r[s],t=l[s];if(e.level!==t.level||Math.round(e.scale)!==Math.round(t.scale))return!1}return!0}}(l,o,n);if(!r&&e.primarySourceName in e.sourceNameToSource){const t=e.sourceNameToSource[e.primarySourceName];if(!t.isCompatibleWith(c))return Object(d.u)();null!=c.fullExtent&&(null!=t.fullExtent?t.fullExtent.union(c.fullExtent):t.fullExtent=c.fullExtent.clone()),t.tileInfo.lods.length<c.tileInfo.lods.length&&(t.tileInfo=c.tileInfo)}if(r?(e.sourceBase=o,e.source=t,e.validatedSource=n,e.primarySourceName=l,e.sourceUrl&&N(e.sourceUrl)):N(o),e.sourceNameToSource[l]=c,!e.style)return null==t.defaultStyles?Object(d.t)():"string"==typeof t.defaultStyles?P(e,"",C(o,t.defaultStyles,"root.json"),void 0,s):P(e,"",t.defaultStyles,C(o,"root.json"),s)}var z=i(662),M=i(186),B=class{constructor(e,t){this.lockedSchemaPixelSize=e,this.isGCS=t}getLevelRowColumn(e){return this.isGCS?[e[0],e[1]>>1,e[2]>>1]:256===this.lockedSchemaPixelSize&&e[0]>0?[e[0]-1,e[1]>>1,e[2]>>1]:e}adjustLevel(e){return this.isGCS?e:256===this.lockedSchemaPixelSize?e>0?e-1:0:e}getShift(e,t){let i=0,r=0;return(256===this.lockedSchemaPixelSize||this.isGCS)&&(e[2]%2&&(i=t),e[1]%2&&(r=t)),[i,r]}getScale(e){if(this.isGCS){if(512===this.lockedSchemaPixelSize)return 4}else if(256===this.lockedSchemaPixelSize&&0===e)return 1;return 2}static create256x256CompatibleTileInfo(e){if(!e)return null;if(256===e.size[0]&&256===e.size[1])return e;const t=e.spatialReference.isGeographic,i=[],r=e.lods.length;for(let l=0;l<r;l++){const r=e.lods[l],a=t?r.resolution:2*r.resolution;i.push(new M.a({level:r.level,scale:r.scale,resolution:a}))}return new w.a({size:[256,256],dpi:e.dpi,format:e.format,compressionQuality:e.compressionQuality,origin:e.origin,spatialReference:e.spatialReference,lods:i})}static create512x512CompatibleTileInfo(e){if(!e)return null;if(256===e.size[0]||256===e.size[1])return null;const t=[],i=e.lods.length;for(let r=0;r<i;r++){const i=e.lods[r],l=.5*i.resolution;t.push(new M.a({level:i.level,scale:i.scale,resolution:l}))}return new w.a({size:[512,512],dpi:e.dpi,format:e.format,compressionQuality:e.compressionQuality,origin:e.origin,spatialReference:e.spatialReference,lods:t})}};function k(e,t){if(e===t)return!0;if(!e&&null!=t)return!1;if(null!=e&&!t)return!1;if(!e.spatialReference.equals(t.spatialReference)||e.dpi!==t.dpi)return!1;const i=e.origin,r=t.origin;if(Math.abs(i.x-r.x)>=1e-6||Math.abs(i.y-r.y)>=1e-6)return!1;let l,a;e.lods[0].scale>t.lods[0].scale?(l=e,a=t):(a=e,l=t);for(let s=l.lods[0].scale;s>=a.lods[a.lods.length-1].scale-1e-6;s/=2)if(Math.abs(s-a.lods[0].scale)<1e-6)return!0;return!1}function $(e,t){if(e===t)return e;if(!e&&null!=t)return t;if(null!=e&&!t)return e;const i=e.size[0],r=e.format,l=e.dpi,a={x:e.origin.x,y:e.origin.y},s=e.spatialReference.toJSON(),o=e.lods[0].scale>t.lods[0].scale?e.lods[0]:t.lods[0],n=e.lods[e.lods.length-1].scale<=t.lods[t.lods.length-1].scale?e.lods[e.lods.length-1]:t.lods[t.lods.length-1],c=o.scale,u=o.resolution,p=n.scale,h=[];let d=c,y=u,f=0;for(;d>p;)h.push({level:f,resolution:y,scale:d}),f++,d/=2,y/=2;return new w.a({size:[i,i],dpi:l,format:r||"pbf",origin:a,lods:h,spatialReference:s})}var F=i(596),Q=i(309);let J=class extends(Object(v.a)(Object(A.a)(Object(x.a)(Object(g.a)(Object(S.a)(Object(j.a)(Object(O.a)(m.a)))))))){constructor(...e){super(...e),this._spriteSourceMap=new Map,this.currentStyleInfo=null,this.style=null,this.isReference=null,this.operationalLayerType="VectorTileLayer",this.type="vector-tile",this.url=null}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}destroy(){this._spriteSourceMap.clear()}async prefetchResources(e){await this.loadSpriteSource(l.a.devicePixelRatio||1,e)}load(e){const t=this.loadFromPortal({supportedTypes:["Vector Tile Service"],supportsData:!1},e).then(async()=>{if(!this.portalItem||!this.portalItem.id)return;const t=this.portalItem.itemUrl+"/resources/styles/root.json";(await Object(b.default)(t,{...e,query:{f:"json"}})).data&&this.read({url:t},Object(z.a)(this.portalItem))}).then(()=>this._loadStyle(e),()=>this._loadStyle(e));return this.addResolvingPromise(t),Object(d.u)(this)}get attributionDataUrl(){const e=this.currentStyleInfo,t=e&&e.serviceUrl&&Object(h.H)(e.serviceUrl);return t?this._getDefaultAttribution(t.path):null}get capabilities(){const e=this._getPrimarySource();return e?e.capabilities:{operations:{supportsExportTiles:!1,supportsTileMap:!1},exportTiles:null}}get fullExtent(){const e=this._getPrimarySource();return e?e.fullExtent:null}get parsedUrl(){return this.serviceUrl?Object(h.H)(this.serviceUrl):null}get serviceUrl(){return this.currentStyleInfo&&this.currentStyleInfo.serviceUrl||null}get spatialReference(){return this.tileInfo&&this.tileInfo.spatialReference||null}get styleUrl(){return this.currentStyleInfo&&this.currentStyleInfo.styleUrl||null}writeStyleUrl(e,t){e&&Object(h.u)(e)&&(e="https:"+e),t.styleUrl=e}get tileIndexType(){const e=this._getPrimarySource();return e?e.type:""}get tileIndexUrl(){const e=this._getPrimarySource();return e?e.tileMapURL:""}get tileInfo(){var e;const t=[];for(const r in this.sourceNameToSource)t.push(this.sourceNameToSource[r]);let i=(null==(e=this._getPrimarySource())?void 0:e.tileInfo)||new w.a;if(t.length>1)for(let r=0;r<t.length;r++)k(i,t[r].tileInfo)&&(i=$(i,t[r].tileInfo));return i}get tilemapCache(){const e=this._getPrimarySource();return e&&e.capabilities.operations.supportsTileMap?e.tilemapCache:null}get tileServers(){const e=this._getPrimarySource();return e?e.tileServers:[]}readVersion(e,t){return t.version?parseFloat(t.version):parseFloat(t.currentVersion)}get compatibleTileInfo256(){return B.create256x256CompatibleTileInfo(this.tileInfo)}get compatibleTileInfo512(){return B.create512x512CompatibleTileInfo(this.tileInfo)}async loadSpriteSource(e=1,t){if(!this._spriteSourceMap.has(e)){const i=Object(Q.a)(),r=new class{constructor(e,t,i,r){this.baseURL=e,this.devicePixelRatio=t,this.maxTextureSize=i,this._spriteImageFormat=r,this._isRetina=!1,this._spritesData={},this.image=null,this.width=null,this.height=null,this.loadStatus="not-loaded"}get spriteNames(){const e=[];for(const t in this._spritesData)e.push(t);return e.sort(),e}getSpriteInfo(e){return this._spritesData[e]}async load(e){if(this.baseURL){this.loadStatus="loading";try{await this._loadSprites(e),this.loadStatus="loaded"}catch{this.loadStatus="failed"}}else this.loadStatus="failed"}_loadSprites(e){this._isRetina=this.devicePixelRatio>1.15;const t=this.baseURL,i=this._isRetina?"@2x":"",r=`${t}${i}.${this._spriteImageFormat}`;return Object(d.b)([Object(b.default)(t+i+".json",e),Object(b.default)(r,{responseType:"image",...e})]).then(([e,i])=>{const r=Object.keys(e.data);if(!r||0===r.length||1===r.length&&"_ssl"===r[0]||!i||!i.data)return this._spritesData=this.image=null,this.width=this.height=0,Object(d.u)(null);this._spritesData=e.data;const l=i.data,a=Math.max(this.maxTextureSize,4096);if(l.width>a||l.height>a){const e=`Sprite resource for style ${t} is bigger than the maximum allowed of ${a} pixels}`;throw T.error(e),new p.a("SpriteSource",e)}this.width=l.width,this.height=l.height;const s=document.createElement("canvas"),o=s.getContext("2d");s.width=l.width,s.height=l.height,o.drawImage(l,0,0,l.width,l.height);const n=o.getImageData(0,0,l.width,l.height),c=new Uint8Array(n.data);let u;for(let t=0;t<c.length;t+=4)u=c[t+3]/255,c[t]=c[t]*u,c[t+1]=c[t+1]*u,c[t+2]=c[t+2]*u;this.image=c})}}(this.styleRepository.sprite,e,i.maxTextureSize,this.currentStyleInfo.spriteFormat);await r.load(t),this._spriteSourceMap.set(e,r)}return Object(d.u)(this._spriteSourceMap.get(e))}async loadStyle(e,t){const i=e||this.style||this.url;if(this._loadingPromise&&"string"==typeof i&&this.url===i&&!Object(d.o)(this._abortController))return this._loadingPromise;const r=this._abortController;r&&r.abort();const l=Object(d.d)();return this._loadingPromise=Object(d.c)((e,r)=>{const a={signal:l.signal};this._spriteSourceMap.clear(),this._getSourceAndStyle(i,a).then(e,r),Object(d.r)(t,()=>{l.abort()})}),this._abortController=l,this._loadingPromise}getStyleLayerId(e){return this.styleRepository.getStyleLayerId(e)}getStyleLayerIndex(e){return this.styleRepository.getStyleLayerIndex(e)}getPaintProperties(e){return Object(a.a)(this.styleRepository.getPaintProperties(e))}setPaintProperties(e,t){const i=this.styleRepository.isPainterDataDriven(e);this.styleRepository.setPaintProperties(e,t);const r=this.styleRepository.isPainterDataDriven(e);this.emit("paint-change",{layerName:e,paint:t,isDataDriven:i||r})}getStyleLayer(e){return Object(a.a)(this.styleRepository.getStyleLayer(e))}setStyleLayer(e,t){this.styleRepository.setStyleLayer(e,t),this.emit("style-layer-change",{layer:e,index:t})}deleteStyleLayer(e){this.styleRepository.deleteStyleLayer(e),this.emit("delete-style-layer",{layerName:e})}getLayoutProperties(e){return Object(a.a)(this.styleRepository.getLayoutProperties(e))}setLayoutProperties(e,t){this.styleRepository.setLayoutProperties(e,t),this.emit("layout-change",{layer:e,layout:t})}setStyleLayerVisibility(e,t){this.styleRepository.setStyleLayerVisibility(e,t),this.emit("style-layer-visibility-change",{layer:e,visibility:t})}getStyleLayerVisibility(e){return this.styleRepository.getStyleLayerVisibility(e)}getTileUrl(e,t,i){let r=this.tileServers[t%this.tileServers.length];return r=r.replace(/\{z\}/gi,e.toString()).replace(/\{y\}/gi,t.toString()).replace(/\{x\}/gi,i.toString()),r}write(e,t){return t&&t.origin&&!this.styleUrl?(t.messages&&t.messages.push(new p.a("vectortilelayer:unsupported",`VectorTileLayer (${this.title}, ${this.id}) with style defined by JSON only are not supported`,{layer:this})),null):super.write(e,t)}async _getSourceAndStyle(e,t){if(!e)throw new Error("invalid style!");const i=await async function(e,t){const i={source:null,sourceBase:null,sourceUrl:null,validatedSource:null,style:null,styleBase:null,styleUrl:null,sourceNameToSource:{},primarySourceName:"",spriteFormat:"png"},[r,l]="string"==typeof e?[e,null]:[null,e.jsonUrl],a=r?Object(h.H)(r):null;await P(i,"esri",e,l,t);const s={layerDefinition:i.validatedSource,url:r,parsedUrl:a,serviceUrl:i.sourceUrl,style:i.style,styleUrl:i.styleUrl,spriteUrl:i.style.sprite&&C(i.styleBase,i.style.sprite),spriteFormat:i.spriteFormat,glyphsUrl:i.style.glyphs&&C(i.styleBase,i.style.glyphs),sourceNameToSource:i.sourceNameToSource,primarySourceName:i.primarySourceName};return N(s.spriteUrl),N(s.glyphsUrl),s}(e,t);"webp"===i.spriteFormat&&(await function(e){const t={lossy:"UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",lossless:"UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==",alpha:"UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAARBxAR/Q9ERP8DAABWUDggGAAAABQBAJ0BKgEAAQAAAP4AAA3AAP7mtQAAAA==",animation:"UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA"};return new Promise(i=>{const r=new Image;r.onload=()=>{r.onload=r.onerror=null,i(r.width>0&&r.height>0)},r.onerror=()=>{r.onload=r.onerror=null,i(!1)},r.src="data:image/webp;base64,"+t[e]})}("lossy")||(i.spriteFormat="png")),this._set("currentStyleInfo",{...i}),"string"==typeof e?(this.url=e,this.style=null):(this.url=null,this.style=e),this._set("sourceNameToSource",i.sourceNameToSource),this._set("primarySourceName",i.primarySourceName),this._set("styleRepository",new F.a(i.style,i)),this.read(i.layerDefinition,{origin:"service"}),this.emit("load-style",{})}_getDefaultAttribution(e){const t=e.match(/^https?:\/\/(basemaps|basemapsbeta|basemapsdev)\.arcgis\.com(\/[^\/]+)?\/arcgis\/rest\/services\/([^\/]+(\/[^\/]+)*)\/vectortileserver/i),i=["OpenStreetMap_v2","OpenStreetMap_Export_v2","OpenStreetMap_FTS_v2","OpenStreetMap_GCS_v2","World_Basemap","World_Basemap_v2","World_Basemap_Export_v2","World_Basemap_GCS_v2","World_Basemap_WGS84"];if(!t)return;const r=t[3]&&t[3].toLowerCase();if(!r)return;const l=t[2]||"";for(const a of i)if(a.toLowerCase().indexOf(r)>-1)return Object(h.A)(`//static.arcgis.com/attribution/Vector${l}/${a}`)}_getPrimarySource(){return this.sourceNameToSource&&this.primarySourceName in this.sourceNameToSource?this.sourceNameToSource[this.primarySourceName]:null}async _loadStyle(e){return this._loadingPromise?this._loadingPromise:this.loadStyle(null,e)}};Object(r.a)([Object(o.b)({readOnly:!0,dependsOn:["currentStyleInfo"]})],J.prototype,"attributionDataUrl",null),Object(r.a)([Object(o.b)({type:["show","hide"]})],J.prototype,"listMode",void 0),Object(r.a)([Object(o.b)({readOnly:!0,dependsOn:["sourceNameToSource","primarySourceName"],autoTracked:!1,json:{read:!1}})],J.prototype,"capabilities",null),Object(r.a)([Object(o.b)({readOnly:!0})],J.prototype,"currentStyleInfo",void 0),Object(r.a)([Object(o.b)({json:{read:!1},readOnly:!0,type:f.a,dependsOn:["sourceNameToSource","primarySourceName"]})],J.prototype,"fullExtent",null),Object(r.a)([Object(o.b)()],J.prototype,"style",void 0),Object(r.a)([Object(o.b)({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],J.prototype,"isReference",void 0),Object(r.a)([Object(o.b)({type:["VectorTileLayer"]})],J.prototype,"operationalLayerType",void 0),Object(r.a)([Object(o.b)({readOnly:!0,dependsOn:["serviceUrl"]})],J.prototype,"parsedUrl",null),Object(r.a)([Object(o.b)({readOnly:!0,dependsOn:["currentStyleInfo"]})],J.prototype,"serviceUrl",null),Object(r.a)([Object(o.b)({type:y.a,dependsOn:["tileInfo"],readOnly:!0})],J.prototype,"spatialReference",null),Object(r.a)([Object(o.b)({readOnly:!0})],J.prototype,"styleRepository",void 0),Object(r.a)([Object(o.b)({readOnly:!0})],J.prototype,"sourceNameToSource",void 0),Object(r.a)([Object(o.b)({readOnly:!0})],J.prototype,"primarySourceName",void 0),Object(r.a)([Object(o.b)({type:String,readOnly:!0,dependsOn:["currentStyleInfo"],json:{write:{ignoreOrigin:!0},origins:{"web-document":{write:{ignoreOrigin:!0,isRequired:!0}}}}})],J.prototype,"styleUrl",null),Object(r.a)([Object(u.a)(["portal-item","web-document"],"styleUrl")],J.prototype,"writeStyleUrl",null),Object(r.a)([Object(o.b)({json:{read:!1},readOnly:!0,dependsOn:["sourceNameToSource","primarySourceName"]})],J.prototype,"tileIndexType",null),Object(r.a)([Object(o.b)({json:{read:!1},readOnly:!0,dependsOn:["sourceNameToSource","primarySourceName"]})],J.prototype,"tileIndexUrl",null),Object(r.a)([Object(o.b)({json:{read:!1,origins:{service:{read:!1}}},readOnly:!0,type:w.a,dependsOn:["sourceNameToSource","primarySourceName"]})],J.prototype,"tileInfo",null),Object(r.a)([Object(o.b)({json:{read:!1},readOnly:!0,type:_.a,dependsOn:["sourceNameToSource","primarySourceName"]})],J.prototype,"tilemapCache",null),Object(r.a)([Object(o.b)({json:{read:!1},readOnly:!0,dependsOn:["sourceNameToSource","primarySourceName"]})],J.prototype,"tileServers",null),Object(r.a)([Object(o.b)({json:{read:!1},readOnly:!0,value:"vector-tile"})],J.prototype,"type",void 0),Object(r.a)([Object(o.b)({json:{origins:{"web-document":{read:{source:"styleUrl"}},"portal-item":{read:{source:"url"}}},write:!1,read:!1}})],J.prototype,"url",void 0),Object(r.a)([Object(o.b)({readOnly:!0})],J.prototype,"version",void 0),Object(r.a)([Object(n.a)("version",["version","currentVersion"])],J.prototype,"readVersion",null),Object(r.a)([Object(o.b)({readOnly:!0,dependsOn:["tileInfo"]})],J.prototype,"compatibleTileInfo256",null),Object(r.a)([Object(o.b)({readOnly:!0,dependsOn:["tileInfo"]})],J.prototype,"compatibleTileInfo512",null),J=Object(r.a)([Object(c.a)("esri.layers.VectorTileLayer")],J);var q=J;t.default=q},662:function(e,t,i){"use strict";i.d(t,"a",(function(){return a}));var r=i(3),l=i(67);function a(e){return{origin:"portal-item",url:Object(r.H)(e.itemUrl),portal:e.portal||l.a.getDefault(),portalItem:e,readResourcePaths:[]}}},666:function(e,t,i){"use strict";var r=i(8),l=i(514),a=i(160);t.a=class{constructor(e){if(e instanceof l.a)this._tilemapCache=e;else{if(!e||!("index"in e))throw new Error("Invalid tilemap!");this._tilemap=e.index}}dataKey(e,t){if(this._tilemapCache){const{level:i,row:l,col:s}=e,o=new a.a(e);return this._tilemapCache.fetchAvailabilityUpsample(i,l,s,o,t).then(()=>(o.world=e.world,o)).catch(e=>{if(Object(r.n)(e))throw e;return null})}return this._getIndexedDataKey(e)}forEach(e,t,i,r,l){this._callback=l,this._maxLevel=t+e,this._forEach(this._tilemap,t,i,r)}_forEach(e,t,i,r){0!==e&&(this._callback(t,i,r),t!==this._maxLevel&&"object"==typeof e&&(this._forEach(e[0],t+1,2*i,2*r),this._forEach(e[1],t+1,2*i,2*r+1),this._forEach(e[2],t+1,2*i+1,2*r),this._forEach(e[3],t+1,2*i+1,2*r+1)))}_getIndexedDataKey(e){const t=[e];if(e.level<0||e.row<0||e.col<0||e.row>>e.level>0||e.col>>e.level>0)return Object(r.u)(null);let i=e;for(;0!==i.level;)i=new a.a(i.level-1,i.row>>1,i.col>>1,i.world),t.push(i);let l,s,o=this._tilemap,n=t.pop();if(1===o)return Object(r.u)(n);for(;t.length;)if(l=t.pop(),s=(1&l.col)+((1&l.row)<<1),o){if(0===o[s]){n=null;break}if(1===o[s]){n=l;break}n=l,o=o[s]}return Object(r.u)(n)}}}}]);
//# sourceMappingURL=55.1d684b7a.chunk.js.map