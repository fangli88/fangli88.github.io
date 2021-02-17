import"./p-476cf7c4.js";import{dw as e,U as t,M as s,aI as i,D as r,E as o,F as l,K as a,cv as n,cn as p,en as c,cO as d,co as u,b as m}from"./p-dc4230e0.js";import"./p-540c739d.js";import{l as y,b as h}from"./p-05aa0405.js";import"./p-6e5ff36c.js";import{l as S,c as v,p as f}from"./p-5e52b0f8.js";import{d as j}from"./p-536a38f2.js";import{t as b}from"./p-4cc1d148.js";import{o as g}from"./p-3ce6769f.js";import{s as C}from"./p-3a5e7221.js";const F=["atom","xml"],w={base:n,key:"type",typeMap:{"simple-line":p},errorContext:"symbol"},x={base:n,key:"type",typeMap:{"picture-marker":c,"simple-marker":d},errorContext:"symbol"},M={base:n,key:"type",typeMap:{"simple-fill":u},errorContext:"symbol"};let R=class extends(b(g(S(j(C(y(h))))))){constructor(...e){super(...e),this.description=null,this.legendEnabled=!0,this.lineSymbol=null,this.pointSymbol=null,this.polygonSymbol=null,this.operationalLayerType="GeoRSS",this.outSpatialReference=null,this.url=null,this.type="geo-rss"}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}get title(){const t=this._get("title");return t&&"defaults"!==this.originOf("title")?t:this.url?e(this.url,F)||"GeoRSS":t||""}set title(e){this._set("title",e)}readFeatureCollections(e,t){return t.featureCollection.layers.forEach((e=>{const t=e.layerDefinition.drawingInfo.renderer.symbol;t&&"esriSFS"===t.type&&t.outline&&-1!==t.outline.style.indexOf("esriSFS")&&(t.outline.style="esriSLSSolid")})),t.featureCollection.layers}load(e){const s=m(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service","Feature Service","Feature Collection","Scene Service"]},e).then((()=>this._fetchService(s)),(()=>this._fetchService(s)))),t(this)}async _fetchService(e){const{data:t}=await s(i.geoRSSServiceUrl,{query:{url:this.url,refresh:!!this.loaded||void 0,outSR:this.outSpatialReference?JSON.stringify(this.outSpatialReference.toJSON()):void 0},signal:e});this.read(t,{origin:"service"})}};r([o()],R.prototype,"description",void 0),r([o({dependsOn:["url"],json:{origins:{service:{read:{source:"name",reader:e=>e||void 0}}}}})],R.prototype,"title",null),r([o()],R.prototype,"featureCollections",void 0),r([l("service","featureCollections",["featureCollection.layers"])],R.prototype,"readFeatureCollections",null),r([o(v)],R.prototype,"legendEnabled",void 0),r([o({types:w,json:{write:!0}})],R.prototype,"lineSymbol",void 0),r([o({type:["show","hide"]})],R.prototype,"listMode",void 0),r([o({types:x,json:{write:!0}})],R.prototype,"pointSymbol",void 0),r([o({types:M,json:{write:!0}})],R.prototype,"polygonSymbol",void 0),r([o({type:["GeoRSS"]})],R.prototype,"operationalLayerType",void 0),r([o()],R.prototype,"outSpatialReference",void 0),r([o(f)],R.prototype,"url",void 0),r([o({readOnly:!0,json:{read:!1},value:"geo-rss"})],R.prototype,"type",void 0),R=r([a("esri.layers.GeoRSSLayer")],R);var k=R;export default k;