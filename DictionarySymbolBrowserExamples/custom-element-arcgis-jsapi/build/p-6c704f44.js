import{D as e,E as t,K as l,L as s,s as r,z as i,y as n,w as o,R as a,$ as u,m as p,U as c,a1 as d,Z as m,co as v,F as f,aG as w,aE as h}from"./p-ab028778.js";import{l as y,b as g}from"./p-1ff061ae.js";import{l as j}from"./p-1cce98ff.js";import{d as T}from"./p-c5691699.js";import{x as b,i as S}from"./p-8a0d1aa6.js";import{t as R}from"./p-48626aa9.js";import{o as x}from"./p-f53b64f4.js";import{s as L}from"./p-b9c578c1.js";var O;let D=O=class extends s{constructor(e){super(e)}clone(){return new O({customLayerParameters:r(this.customLayerParameters),customParameters:r(this.customParameters),layerIdentifier:this.layerIdentifier,tileMatrixSet:this.tileMatrixSet,url:this.url})}};e([t({json:{type:Object,write:!0}})],D.prototype,"customLayerParameters",void 0),e([t({json:{type:Object,write:!0}})],D.prototype,"customParameters",void 0),e([t({type:String,json:{write:!0}})],D.prototype,"layerIdentifier",void 0),e([t({type:String,json:{write:!0}})],D.prototype,"tileMatrixSet",void 0),e([t({type:String,json:{write:!0}})],D.prototype,"url",void 0),D=O=e([l("esri.layer.support.WMTSLayerInfo")],D);var I=D;let P=class extends(R(x(L(j(T(y(g))))))){constructor(...e){super(...e),this.copyright="",this.fullExtent=new i(-20037508.342787,-20037508.34278,20037508.34278,20037508.342787,n.WebMercator),this.legendEnabled=!1,this.isReference=null,this.popupEnabled=!1,this.spatialReference=n.WebMercator,this.subDomains=null,this.tileInfo=new b({size:[256,256],dpi:96,format:"png8",compressionQuality:0,origin:new o({x:-20037508.342787,y:20037508.342787,spatialReference:n.WebMercator}),spatialReference:n.WebMercator,lods:[new S({level:0,scale:591657527.591555,resolution:156543.033928}),new S({level:1,scale:295828763.795777,resolution:78271.5169639999}),new S({level:2,scale:147914381.897889,resolution:39135.7584820001}),new S({level:3,scale:73957190.948944,resolution:19567.8792409999}),new S({level:4,scale:36978595.474472,resolution:9783.93962049996}),new S({level:5,scale:18489297.737236,resolution:4891.96981024998}),new S({level:6,scale:9244648.868618,resolution:2445.98490512499}),new S({level:7,scale:4622324.434309,resolution:1222.99245256249}),new S({level:8,scale:2311162.217155,resolution:611.49622628138}),new S({level:9,scale:1155581.108577,resolution:305.748113140558}),new S({level:10,scale:577790.554289,resolution:152.874056570411}),new S({level:11,scale:288895.277144,resolution:76.4370282850732}),new S({level:12,scale:144447.638572,resolution:38.2185141425366}),new S({level:13,scale:72223.819286,resolution:19.1092570712683}),new S({level:14,scale:36111.909643,resolution:9.55462853563415}),new S({level:15,scale:18055.954822,resolution:4.77731426794937}),new S({level:16,scale:9027.977411,resolution:2.38865713397468}),new S({level:17,scale:4513.988705,resolution:1.19432856685505}),new S({level:18,scale:2256.994353,resolution:.597164283559817}),new S({level:19,scale:1128.497176,resolution:.298582141647617})]}),this.type="web-tile",this.urlTemplate=null,this.wmtsInfo=null}normalizeCtorArgs(e,t){return"string"==typeof e?a({urlTemplate:e},t||{}):e}load(e){const t=this.loadFromPortal({supportedTypes:["WMTS"]},e).then((()=>{let e="";if(this.urlTemplate)if(this.spatialReference.equals(this.tileInfo.spatialReference)){const t=new u(this.urlTemplate);this.subDomains&&this.subDomains.length>0||-1===t.authority.indexOf("{subDomain}")||(e="is missing 'subDomains' property")}else e="spatialReference must match tileInfo.spatialReference";else e="is missing the required 'urlTemplate' property value";if(e)throw new p("web-tile-layer:load",`WebTileLayer (title: '${this.title}', id: '${this.id}') ${e}`)}));return this.addResolvingPromise(t),c(this)}get levelValues(){const e=[];if(!this.tileInfo)return null;for(const t of this.tileInfo.lods)e[t.level]=t.levelValue||t.level;return e}readSpatialReference(e,t){return e||t.fullExtent&&t.fullExtent.spatialReference&&n.fromJSON(t.fullExtent.spatialReference)}get tileServers(){if(!this.urlTemplate)return null;const e=[],{urlTemplate:t,subDomains:l}=this,s=new u(t),r=s.scheme?s.scheme+"://":"//",i=r+s.authority+"/";if(-1===s.authority.indexOf("{subDomain}"))e.push(i);else if(l&&l.length>0&&s.authority.split(".").length>1)for(const t of l)e.push(r+s.authority.replace(/\{subDomain\}/gi,t)+"/");return e.map((e=>("/"!==e.charAt(e.length-1)&&(e+="/"),e)))}get urlPath(){if(!this.urlTemplate)return null;const e=this.urlTemplate,t=new u(e);return e.substring(((t.scheme?t.scheme+"://":"//")+t.authority+"/").length)}readUrlTemplate(e,t){return e||t.templateUrl}writeUrlTemplate(e,t){e&&h(e)&&(e="https:"+e),e&&(e=e.replace(/\{z\}/gi,"{level}").replace(/\{x\}/gi,"{col}").replace(/\{y\}/gi,"{row}"),e=d(e)),t.templateUrl=e}fetchTile(e,t,l,s={}){const{signal:r,timestamp:i}=s,n=this.getTileUrl(e,t,l),o={responseType:"image",signal:r};return null!=i&&(o.query={_ts:s.timestamp}),m(n,o).then((e=>e.data))}getTileUrl(e,t,l){const s=this.levelValues[e];return this.tileServers[t%this.tileServers.length]+v(this.urlPath,{level:s,z:s,col:l,x:l,row:t,y:t})}};e([t({type:String,value:"",json:{write:!0}})],P.prototype,"copyright",void 0),e([t({type:i,json:{write:!0}})],P.prototype,"fullExtent",void 0),e([t({readOnly:!0,json:{read:!1,write:!1}})],P.prototype,"legendEnabled",void 0),e([t({type:["show","hide"]})],P.prototype,"listMode",void 0),e([t({dependsOn:["tileInfo"]})],P.prototype,"levelValues",null),e([t({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],P.prototype,"isReference",void 0),e([t({type:["WebTiledLayer"],value:"WebTiledLayer"})],P.prototype,"operationalLayerType",void 0),e([t({readOnly:!0,json:{read:!1,write:!1}})],P.prototype,"popupEnabled",void 0),e([t({type:n})],P.prototype,"spatialReference",void 0),e([f("spatialReference",["spatialReference","fullExtent.spatialReference"])],P.prototype,"readSpatialReference",null),e([t({type:[String],json:{write:!0}})],P.prototype,"subDomains",void 0),e([t({type:b,json:{write:!0}})],P.prototype,"tileInfo",void 0),e([t({readOnly:!0,dependsOn:["urlTemplate","subDomains"]})],P.prototype,"tileServers",null),e([t({json:{read:!1}})],P.prototype,"type",void 0),e([t({dependsOn:["urlTemplate"]})],P.prototype,"urlPath",null),e([t({type:String,json:{origins:{"portal-item":{read:{source:"url"}}}}})],P.prototype,"urlTemplate",void 0),e([f("urlTemplate",["urlTemplate","templateUrl"])],P.prototype,"readUrlTemplate",null),e([w("urlTemplate",{templateUrl:{type:String}})],P.prototype,"writeUrlTemplate",null),e([t({type:I,json:{write:!0}})],P.prototype,"wmtsInfo",void 0),P=e([l("esri.layers.WebTileLayer")],P);var U=P;const W=Object.freeze({__proto__:null,default:U});export{U as E,W,I as a}