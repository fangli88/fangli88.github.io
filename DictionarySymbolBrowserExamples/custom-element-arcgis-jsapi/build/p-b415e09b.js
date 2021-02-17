import"./p-476cf7c4.js";import{C as e,D as t,E as o,bd as r,F as n,b9 as i,bi as s,y as l,K as a,L as u,b as y,p,d as c,q as f}from"./p-dc4230e0.js";import"./p-643e1e47.js";import{y as d}from"./p-66f366a9.js";const m=new e({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryEnvelope:"extent",mesh:"mesh","":null});let h=class extends u{constructor(e){super(e),this.displayFieldName=null,this.exceededTransferLimit=!1,this.features=[],this.fields=null,this.geometryType=null,this.hasM=!1,this.hasZ=!1,this.queryGeometry=null,this.spatialReference=null}readFeatures(e,t){const o=l.fromJSON(t.spatialReference),n=[];for(let t=0;t<e.length;t++){const i=e[t],s=r.fromJSON(i),l=i.geometry&&i.geometry.spatialReference;y(s.geometry)&&!l&&(s.geometry.spatialReference=o),n.push(s)}return n}writeGeometryType(e,t,o,r){if(e)return void m.write(e,t,o,r);const{features:n}=this;if(n)for(const e of n)if(e&&y(e.geometry))return void m.write(e.geometry.type,t,o,r)}readQueryGeometry(e,t){if(!e)return null;const o=!!e.spatialReference,r=p(e);return!o&&t.spatialReference&&(r.spatialReference=l.fromJSON(t.spatialReference)),r}writeSpatialReference(e,t){if(e)return void(t.spatialReference=e.toJSON());const{features:o}=this;if(o)for(const e of o)e&&y(e.geometry)&&e.geometry.spatialReference&&(t.spatialReference=e.geometry.spatialReference.toJSON())}toJSON(e){const t=this.write(null);if(t.features&&Array.isArray(e)&&e.length>0)for(let o=0;o<t.features.length;o++){const r=t.features[o];if(r.geometry){const t=e&&e[o];r.geometry=t&&t.toJSON()||r.geometry}}return t}quantize(e){const{scale:[t,o],translate:[r,n]}=e,i=this.features,s=this._getQuantizationFunction(this.geometryType,(e=>Math.round((e-r)/t)),(e=>Math.round((n-e)/o)));for(let e=0,t=i.length;e<t;e++)s(c(i[e].geometry))||(i.splice(e,1),e--,t--);return this.transform=e,this}unquantize(){const{geometryType:e,features:t,transform:o}=this;if(!o)return this;const{translate:[r,n],scale:[i,s]}=o,l=this._getHydrationFunction(e,(e=>e*i+r),(e=>n-e*s));for(const{geometry:e}of t)y(e)&&l(e);return this.transform=null,this}_quantizePoints(e,t,o){let r,n;const i=[];for(let s=0,l=e.length;s<l;s++){const l=e[s];if(s>0){const e=t(l[0]),s=o(l[1]);e===r&&s===n||(i.push([e-r,s-n]),r=e,n=s)}else r=t(l[0]),n=o(l[1]),i.push([r,n])}return i.length>0?i:null}_getQuantizationFunction(e,t,o){return"point"===e?e=>(e.x=t(e.x),e.y=o(e.y),e):"polyline"===e||"polygon"===e?e=>{const r=f(e)?e.rings:e.paths,n=[];for(let e=0,i=r.length;e<i;e++){const i=this._quantizePoints(r[e],t,o);i&&n.push(i)}return n.length>0?(f(e)?e.rings=n:e.paths=n,e):null}:"multipoint"===e?e=>{let r;return r=this._quantizePoints(e.points,t,o),r.length>0?(e.points=r,e):null}:"extent"===e?e=>e:null}_getHydrationFunction(e,t,o){return"point"===e?e=>{e.x=t(e.x),e.y=o(e.y)}:"polyline"===e||"polygon"===e?e=>{const r=f(e)?e.rings:e.paths;let n,i;for(let e=0,s=r.length;e<s;e++){const s=r[e];for(let e=0,r=s.length;e<r;e++){const r=s[e];e>0?(n+=r[0],i+=r[1]):(n=r[0],i=r[1]),r[0]=t(n),r[1]=o(i)}}}:"extent"===e?e=>{e.xmin=t(e.xmin),e.ymin=o(e.ymin),e.xmax=t(e.xmax),e.ymax=o(e.ymax)}:"multipoint"===e?e=>{const r=e.points;let n,i;for(let e=0,s=r.length;e<s;e++){const s=r[e];e>0?(n+=s[0],i+=s[1]):(n=s[0],i=s[1]),s[0]=t(n),s[1]=o(i)}}:void 0}};t([o({type:String,json:{write:!0}})],h.prototype,"displayFieldName",void 0),t([o({type:Boolean,json:{write:{overridePolicy:e=>({enabled:e})}}})],h.prototype,"exceededTransferLimit",void 0),t([o({type:[r],json:{write:!0}})],h.prototype,"features",void 0),t([n("features")],h.prototype,"readFeatures",null),t([o({type:[d],json:{write:!0}})],h.prototype,"fields",void 0),t([o({type:["point","multipoint","polyline","polygon","extent","mesh"],json:{read:{reader:m.read}}})],h.prototype,"geometryType",void 0),t([i("geometryType")],h.prototype,"writeGeometryType",null),t([o({type:Boolean,json:{write:{overridePolicy:e=>({enabled:e})}}})],h.prototype,"hasM",void 0),t([o({type:Boolean,json:{write:{overridePolicy:e=>({enabled:e})}}})],h.prototype,"hasZ",void 0),t([o({types:s,json:{write:!0}})],h.prototype,"queryGeometry",void 0),t([n("queryGeometry")],h.prototype,"readQueryGeometry",null),t([o({type:l,json:{write:!0}})],h.prototype,"spatialReference",void 0),t([i("spatialReference")],h.prototype,"writeSpatialReference",null),t([o({json:{write:!0}})],h.prototype,"transform",void 0),h=t([a("esri.tasks.support.FeatureSet")],h),h.prototype.toJSON.isDefaultToJSON=!0,h||(h={});var v=h;export default v;