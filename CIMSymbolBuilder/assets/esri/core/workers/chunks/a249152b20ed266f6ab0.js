self.webpackChunkRemoteClient([65],{355:function(e,t,a){"use strict";a.r(t);var i=a(18),l=(a(7),a(1)),o=(a(3),a(4),a(20)),r=a(52),s=a(19),n=a(14),c=(a(24),a(34),a(35),a(2)),p=a(55),b=a(51),u=a(81),d=a(110),h=a(91),g=a(77),y=a(56),j=a(80),O=a(83),v=a(127),f=a(106);const m={id:"0/0/0",level:0,row:0,col:0,extent:null};let w=class extends(Object(d.a)(Object(f.a)(Object(v.a)(j.a)))){constructor(){super(...arguments),this.tileInfo=g.a.create({spatialReference:p.a.WebMercator,size:256}),this.type="base-tile",this.fullExtent=new y.a(-20037508.342787,-20037508.34278,20037508.34278,20037508.342787,p.a.WebMercator),this.spatialReference=p.a.WebMercator}getTileBounds(e,t,a,i){const l=i||Object(O.c)();return m.level=e,m.row=t,m.col=a,m.extent=l,this.tileInfo.updateTileInfo(m),m.extent=null,l}fetchTile(e,t,a,i={}){const{signal:l,timestamp:o}=i,r=this.getTileUrl(e,t,a),s={responseType:"image",signal:l};return null!=o&&(s.query={_ts:i.timestamp}),Object(b.default)(r,s).then(e=>e.data)}getTileUrl(){throw new n.a("basetilelayer:gettileurl-not-implemented","getTileUrl() is not implemented")}};Object(i.a)([Object(o.b)({type:g.a})],w.prototype,"tileInfo",void 0),Object(i.a)([Object(o.b)({type:["show","hide"]})],w.prototype,"listMode",void 0),Object(i.a)([Object(o.b)({readOnly:!0,value:"base-tile"})],w.prototype,"type",void 0),Object(i.a)([Object(o.b)()],w.prototype,"fullExtent",void 0),Object(i.a)([Object(o.b)()],w.prototype,"spatialReference",void 0),w=Object(i.a)([Object(s.a)("esri.layers.BaseTileLayer")],w);var M=w;const x=new r.a({BingMapsAerial:"aerial",BingMapsRoad:"road",BingMapsHybrid:"hybrid"});let S=class extends(Object(d.a)(Object(h.a)(Object(u.a)(M)))){constructor(e){super(e),this.type="bing-maps",this.tileInfo=new g.a({size:[256,256],dpi:96,origin:{x:-20037508.342787,y:20037508.342787,spatialReference:p.a.WebMercator},spatialReference:p.a.WebMercator,lods:[{level:1,resolution:78271.5169639999,scale:295828763.795777},{level:2,resolution:39135.7584820001,scale:147914381.897889},{level:3,resolution:19567.8792409999,scale:73957190.948944},{level:4,resolution:9783.93962049996,scale:36978595.474472},{level:5,resolution:4891.96981024998,scale:18489297.737236},{level:6,resolution:2445.98490512499,scale:9244648.868618},{level:7,resolution:1222.99245256249,scale:4622324.434309},{level:8,resolution:611.49622628138,scale:2311162.217155},{level:9,resolution:305.748113140558,scale:1155581.108577},{level:10,resolution:152.874056570411,scale:577790.554289},{level:11,resolution:76.4370282850732,scale:288895.277144},{level:12,resolution:38.2185141425366,scale:144447.638572},{level:13,resolution:19.1092570712683,scale:72223.819286},{level:14,resolution:9.55462853563415,scale:36111.909643},{level:15,resolution:4.77731426794937,scale:18055.954822},{level:16,resolution:2.38865713397468,scale:9027.977411},{level:17,resolution:1.19432856685505,scale:4513.988705},{level:18,resolution:.597164283559817,scale:2256.994353},{level:19,resolution:.298582141647617,scale:1128.497176},{level:20,resolution:.1492910708238085,scale:564.248588}]}),this.key=null,this.style="road",this.culture="en-US",this.region=null,this.portalUrl=null,this.hasAttributionData=!0}get bingMetadata(){return this._get("bingMetadata")}set bingMetadata(e){this._set("bingMetadata",e)}get copyright(){return Object(l.g)(this.bingMetadata)?this.bingMetadata.copyright:null}get operationalLayerType(){return x.toJSON(this.style)}get bingLogo(){return Object(l.g)(this.bingMetadata)?this.bingMetadata.brandLogoUri:null}load(e){return this.key?this.addResolvingPromise(this._getMetadata()):this.portalUrl?this.addResolvingPromise(this._getPortalBingKey().then(()=>this._getMetadata())):this.addResolvingPromise(Object(c.r)(new n.a("bingmapslayer:load","Bing layer must have bing key."))),Object(c.s)(this)}getTileUrl(e,t,a){if(!this.loaded||Object(l.f)(this.bingMetadata))return null;const i=this.bingMetadata.resourceSets[0].resources[0],o=i.imageUrlSubdomains[t%i.imageUrlSubdomains.length],r=this._getQuadKey(e,t,a);return i.imageUrl.replace("{subdomain}",o).replace("{quadkey}",r)}async fetchAttributionData(){return this.load().then(()=>Object(l.f)(this.bingMetadata)?null:{contributors:this.bingMetadata.resourceSets[0].resources[0].imageryProviders.map(e=>({attribution:e.attribution,coverageAreas:e.coverageAreas.map(e=>({zoomMin:e.zoomMin,zoomMax:e.zoomMax,score:1,bbox:[e.bbox[0],e.bbox[1],e.bbox[2],e.bbox[3]]}))}))})}_getMetadata(){const e={road:"roadOnDemand",aerial:"aerial",hybrid:"aerialWithLabelsOnDemand"}[this.style];return Object(b.default)("https://dev.virtualearth.net/REST/v1/Imagery/Metadata/"+e,{responseType:"json",query:{include:"ImageryProviders",uriScheme:"https",key:this.key,suppressStatus:!0,output:"json",culture:this.culture,userRegion:this.region}}).then(e=>{const t=e.data;if(200!==t.statusCode)throw new n.a("bingmapslayer:getmetadata",t.statusDescription);if(this.bingMetadata=t,0===this.bingMetadata.resourceSets.length)throw new n.a("bingmapslayer:getmetadata","no bing resourcesets");if(0===this.bingMetadata.resourceSets[0].resources.length)throw new n.a("bingmapslayer:getmetadata","no bing resources")}).catch(e=>{throw new n.a("bingmapslayer:getmetadata",e.message)})}_getPortalBingKey(){return Object(b.default)(this.portalUrl,{responseType:"json",authMode:"no-prompt",query:{f:"json"}}).then(e=>{if(!e.data.bingKey)throw new n.a("bingmapslayer:getportalbingkey","The referenced Portal does not contain a valid bing key");this.key=e.data.bingKey}).catch(e=>{throw new n.a("bingmapslayer:getportalbingkey",e.message)})}_getQuadKey(e,t,a){let i="";for(let l=e;l>0;l--){let e=0;const o=1<<l-1;0!=(a&o)&&(e+=1),0!=(t&o)&&(e+=2),i+=e.toString()}return i}};Object(i.a)([Object(o.b)({json:{read:!1,write:!1},value:null})],S.prototype,"bingMetadata",null),Object(i.a)([Object(o.b)({json:{read:!1,write:!1},value:"bing-maps",readOnly:!0})],S.prototype,"type",void 0),Object(i.a)([Object(o.b)({type:g.a})],S.prototype,"tileInfo",void 0),Object(i.a)([Object(o.b)({type:String,readOnly:!0,dependsOn:["bingMetadata"],json:{read:!1,write:!1}})],S.prototype,"copyright",null),Object(i.a)([Object(o.b)({type:String,json:{write:!1,read:!1}})],S.prototype,"key",void 0),Object(i.a)([Object(o.b)({type:x.apiValues,nonNullable:!0,json:{read:{source:"layerType",reader:x.read}}})],S.prototype,"style",void 0),Object(i.a)([Object(o.b)({type:["BingMapsAerial","BingMapsHybrid","BingMapsRoad"],dependsOn:["style"]})],S.prototype,"operationalLayerType",null),Object(i.a)([Object(o.b)({type:String,json:{write:!1,read:!1}})],S.prototype,"culture",void 0),Object(i.a)([Object(o.b)({type:String,json:{write:!1,read:!1}})],S.prototype,"region",void 0),Object(i.a)([Object(o.b)({type:String,json:{write:!0,read:!0}})],S.prototype,"portalUrl",void 0),Object(i.a)([Object(o.b)({type:Boolean,json:{write:!1,read:!1}})],S.prototype,"hasAttributionData",void 0),Object(i.a)([Object(o.b)({type:String,readOnly:!0,dependsOn:["bingMetadata"]})],S.prototype,"bingLogo",null),S=Object(i.a)([Object(s.a)("esri.layers.BingMapsLayer")],S);var R=S;t.default=R},77:function(e,t,a){"use strict";var i,l=a(18),o=(a(7),a(3),a(4)),r=a(20),s=a(52),n=a(53),c=a(19),p=a(57),b=(a(24),a(34),a(35),a(50)),u=a(71),d=a(55),h=a(92),g=a(60),y=(a(58),a(87)),j=a(83),O=a(99);const v=new s.a({PNG:"png",PNG8:"png8",PNG24:"png24",PNG32:"png32",JPEG:"jpg",JPG:"jpg",DIB:"dib",TIFF:"tiff",EMF:"emf",PS:"ps",PDF:"pdf",GIF:"gif",SVG:"svg",SVGZ:"svgz",Mixed:"mixed",MIXED:"mixed",LERC:"lerc",LERC2D:"lerc2d",RAW:"raw",pbf:"pbf"});let f=i=class extends b.a{constructor(e){super(e),this.dpi=96,this.format=null,this.origin=null,this.minScale=0,this.maxScale=0,this.size=null,this.spatialReference=null}static create(e={size:256,spatialReference:d.a.WebMercator}){const t=e.resolutionFactor||1,a=e.scales,l=e.size||256,o=e.spatialReference||d.a.WebMercator;if(!Object(u.h)(o)){const e=[];if(a)for(let t=0;t<a.length;t++){const i=a[t];e.push({level:t,scale:i,resolution:i})}else{let t=5e-4;for(let a=23;a>=0;a--)e.unshift({level:a,scale:t,resolution:t}),t*=2}return new i({dpi:96,lods:e,origin:new g.a(0,0,o),size:[l,l],spatialReference:o})}const r=Object(u.d)(o),s=e.origin?new g.a({x:e.origin.x,y:e.origin.y,spatialReference:o}):new g.a(r?{x:r.origin[0],y:r.origin[1],spatialReference:o}:{x:0,y:0,spatialReference:o}),n=1/(39.37*Object(y.b)(o)*96),c=[];if(a)for(let e=0;e<a.length;e++){const t=a[e],i=t*n;c.push({level:e,scale:t,resolution:i})}else{let e=Object(u.e)(o)?512/l*591657527.5917094:256/l*591657527.591555;const a=Math.ceil(24/t);c.push({level:0,scale:e,resolution:e*n});for(let i=1;i<a;i++){const a=e/Math.pow(2,t),l=a*n;c.push({level:i,scale:a,resolution:l}),e=a}}return new i({dpi:96,lods:c,origin:s,size:[l,l],spatialReference:o})}get isWrappable(){const{spatialReference:e,origin:t}=this;if(e&&t){const a=Object(u.d)(e);return e.isWrappable&&Math.abs(a.origin[0]-t.x)<=a.dx}return!1}readOrigin(e,t){return g.a.fromJSON({spatialReference:t.spatialReference,...e})}set lods(e){let t=0,a=0;const i=[];this._levelToLOD={},e&&(t=-1/0,a=1/0,e.forEach(e=>{i.push(e.scale),t=e.scale>t?e.scale:t,a=e.scale<a?e.scale:a,this._levelToLOD[e.level]=e})),this._set("scales",i),this._set("minScale",t),this._set("maxScale",a),this._set("lods",e),this._initializeUpsampleLevels()}readSize(e,t){return[t.cols,t.rows]}writeSize(e,t){t.cols=e[0],t.rows=e[0]}zoomToScale(e){const t=this.scales;if(e<=0)return t[0];if(e>=t.length)return t[t.length-1];{const a=Math.round(e-.5),i=Math.round(e);return t[i]+(i-e)*(t[a]-t[i])}}scaleToZoom(e){const t=this.scales,a=t.length-1;let i=0;for(;i<a;i++){const a=t[i],l=t[i+1];if(a<=e)return i;if(l===e)return i+1;if(a>e&&l<e)return i+1-(e-l)/(a-l)}return i}snapScale(e,t=.95){const a=this.scaleToZoom(e);return a%Math.floor(a)>=t?this.zoomToScale(Math.ceil(a)):this.zoomToScale(Math.floor(a))}tileAt(e,t,a,i){const l=this.lodAt(e);if(!l)return null;let o,r;if("number"==typeof t)o=t,r=a;else if(Object(u.c)(t.spatialReference,this.spatialReference))o=t.x,r=t.y,i=a;else{const e=Object(h.d)(t,this.spatialReference);if(!e)return null;o=e.x,r=e.y,i=a}const s=l.resolution*this.size[0],n=l.resolution*this.size[1];return i||(i={id:null,level:0,row:0,col:0,extent:Object(j.c)()}),i.level=e,i.row=Math.floor((this.origin.y-r)/n+.001),i.col=Math.floor((o-this.origin.x)/s+.001),this.updateTileInfo(i),i}updateTileInfo(e){const t=this.lodAt(e.level);if(!t)return;const a=t.resolution*this.size[0],i=t.resolution*this.size[1];e.id=`${e.level}/${e.row}/${e.col}`,e.extent||(e.extent=Object(j.c)()),e.extent[0]=this.origin.x+e.col*a,e.extent[1]=this.origin.y-(e.row+1)*i,e.extent[2]=e.extent[0]+a,e.extent[3]=e.extent[1]+i}upsampleTile(e){const t=this._upsampleLevels[e.level];return!(!t||-1===t.parentLevel||(e.level=t.parentLevel,e.row=Math.floor(e.row/t.factor+.001),e.col=Math.floor(e.col/t.factor+.001),this.updateTileInfo(e),0))}getTileBounds(e,t){const{resolution:a}=this.lodAt(t.level),i=a*this.size[0],l=a*this.size[1];return e[0]=this.origin.x+t.col*i,e[1]=this.origin.y-(t.row+1)*l,e[2]=e[0]+i,e[3]=e[1]+l,e}lodAt(e){return this._levelToLOD&&this._levelToLOD[e]||null}clone(){return i.fromJSON(this.write({}))}_initializeUpsampleLevels(){const e=this.lods;this._upsampleLevels=[];let t=null;for(let a=0;a<e.length;a++){const i=e[a];this._upsampleLevels[i.level]={parentLevel:t?t.level:-1,factor:t?t.resolution/i.resolution:0},t=i}}};Object(l.a)([Object(r.b)({type:Number,json:{write:!0}})],f.prototype,"compressionQuality",void 0),Object(l.a)([Object(r.b)({type:Number,json:{write:!0}})],f.prototype,"dpi",void 0),Object(l.a)([Object(r.b)({type:String,json:{read:v.read,write:v.write,origins:{"web-scene":{read:!1,write:!1}}}})],f.prototype,"format",void 0),Object(l.a)([Object(r.b)({readOnly:!0,dependsOn:["spatialReference","origin"]})],f.prototype,"isWrappable",null),Object(l.a)([Object(r.b)({type:g.a,json:{write:!0}})],f.prototype,"origin",void 0),Object(l.a)([Object(n.a)("origin")],f.prototype,"readOrigin",null),Object(l.a)([Object(r.b)({type:[O.a],value:null,json:{write:!0}})],f.prototype,"lods",null),Object(l.a)([Object(r.b)({readOnly:!0})],f.prototype,"minScale",void 0),Object(l.a)([Object(r.b)({readOnly:!0})],f.prototype,"maxScale",void 0),Object(l.a)([Object(r.b)({readOnly:!0})],f.prototype,"scales",void 0),Object(l.a)([Object(r.b)({cast:e=>Array.isArray(e)?e:"number"==typeof e?[e,e]:[256,256]})],f.prototype,"size",void 0),Object(l.a)([Object(n.a)("size",["rows","cols"])],f.prototype,"readSize",null),Object(l.a)([Object(p.a)("size",{cols:{type:o.a},rows:{type:o.a}})],f.prototype,"writeSize",null),Object(l.a)([Object(r.b)({type:d.a,json:{write:!0}})],f.prototype,"spatialReference",void 0),f=i=Object(l.a)([Object(c.a)("esri.layers.support.TileInfo")],f);var m=f;t.a=m},99:function(e,t,a){"use strict";var i,l=a(18),o=(a(7),a(3),a(4)),r=a(20),s=a(19),n=(a(24),a(34),a(35),a(50));let c=i=class extends n.a{constructor(e){super(e),this.level=0,this.levelValue=null,this.resolution=0,this.scale=0}clone(){return new i({level:this.level,levelValue:this.levelValue,resolution:this.resolution,scale:this.scale})}};Object(l.a)([Object(r.b)({type:o.a,json:{write:!0}})],c.prototype,"level",void 0),Object(l.a)([Object(r.b)({type:String,json:{write:!0}})],c.prototype,"levelValue",void 0),Object(l.a)([Object(r.b)({type:Number,json:{write:!0}})],c.prototype,"resolution",void 0),Object(l.a)([Object(r.b)({type:Number,json:{write:!0}})],c.prototype,"scale",void 0),c=i=Object(l.a)([Object(s.a)("esri.layers.support.LOD")],c);var p=c;t.a=p}});