import"./p-476cf7c4.js";import{i as e,m as t,a2 as i,Z as n,cN as s,R as r,k as o,bg as l,cB as a,cO as c,y as u,cP as f}from"./p-ab028778.js";import{l as d}from"./p-f75d073f.js";import{t as p,a as m}from"./p-ebb65ba7.js";import"./p-fd91cc88.js";import"./p-43d5e67f.js";import"./p-babdd7a5.js";import"./p-098cc742.js";import"./p-e07a8dfe.js";import"./p-c6c7c9c2.js";import"./p-f3cc8f75.js";import{s as y}from"./p-a1a69fdc.js";import"./p-311069c2.js";import{t as b}from"./p-02a4b6c8.js";import"./p-abda1e64.js";import"./p-a8e713de.js";import"./p-fb40af74.js";import{Q as h}from"./p-4f43bb64.js";import{b as g,f as N}from"./p-2b439a2e.js";import{i as j}from"./p-1a30c941.js";import"./p-4561de0e.js";import"./p-3db2569b.js";import{h as F}from"./p-7f2db87b.js";import"./p-a6dff060.js";import"./p-920b2088.js";const w=/^\s*"([\S\s]*)"\s*$/,v=/""/g,T=[","," ",";","|","\t"];function I(e,t){const i={},n=e.length;for(let s=0;s<n;s++)i[e[s]]=t[s];return i}function*x(e,t,i){let n=0;for(;n<=e.length;){const s=e.indexOf(t,n),r=e.substring(n,s>-1?s:void 0);n+=r.length+1,i&&!r.trim()||(yield r)}}function D(e){const t=e.includes("\r\n")?"\r\n":"\n";return x(e,t,!0)}function _(e,t){return x(e,t,!1)}function S(e){const t=e.trim();let i=0,n="";for(const e of T){const s=t.split(e).length;s>i&&(i=s,n=e)}return""===n?null:n}function*k(e,t,i){let n="",s="",r=0,o=[];e:for(;;){const{value:l,done:a}=e.next();if(a)return;const c=_(l,i);t:for(;;){const{value:e,done:t}=c.next();if(t)break t;if(n+=s+e,s="",r+=E(e),r%2==0){if(r>0){const e=w.exec(n);if(!e){o=[],n="",r=0;continue e}o.push(e[1].replace(v,'"'))}else o.push(n);n="",r=0}else s=i}0===r?(yield I(t,o),o=[]):s="\n"}}function E(e){let t=0,i=0;for(i=e.indexOf('"',i);i>=0;)t++,i=e.indexOf('"',i+1);return t}const C=j("esriGeometryPoint"),O=["esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble","esriFieldTypeLong"],P=["lat","latitude","latitude83","latdecdeg","lat_dd","y","ycenter","point-y"],V=["lon","lng","long","longitude","longitude83","longdecdeg","long_dd","x","xcenter","point-x"],q=/^((jan(uary)?)|(feb(ruary)?)|(mar(ch)?)|(apr(il)?)|(may)|(jun(e)?)|(jul(y)?)|(aug(ust)?)|(sep(tember)?)|(oct(ober)?)|(nov(ember)?)|(dec(ember)?)|(am)|(pm)|(gmt)|(utc))$/i,L=["csv"],M=[0,0];class R{constructor(e,t){this.x=e,this.y=t}}const $=function(){const e=d(),t=new RegExp("^"+e.regexp+"$"),i=new RegExp("["+e.group+"\\s\\xa0]","g"),n=e.factor;return function(s){const r=t.exec(s);if(e.factor=n,!r)return NaN;let o=r[1];if(!r[1]){if(!r[2])return NaN;o=r[2],e.factor*=-1}return o=o.replace(i,"").replace(e.decimal,"."),+o*e.factor}}(),G="isInteger"in Number?Number.isInteger:e=>"number"==typeof e&&isFinite(e)&&Math.floor(e)===e;export default class{constructor(){this._fieldsIndex=null,this._queryEngine=null}destroy(){this._queryEngine&&this._queryEngine&&this._queryEngine.destroy(),this._queryEngine=null,this._fieldsIndex=null}async load(t,i={}){const[n]=await e([this._fetch(t.url,i),this._checkProjection(i&&t.parsing&&t.parsing.spatialReference)]),s=this._parse(n,t);if(this._queryEngine=this._createQueryEngine(n,s),s.layerDefinition.extent=this._queryEngine.fullExtent,s.layerDefinition.timeInfo){const{start:e,end:t}=this._queryEngine.timeExtent;s.layerDefinition.timeInfo.timeExtent=[e,t]}return s}async applyEdits(){throw new t("csv-source:editing-not-supported","applyEdits() is not supported on CSVLayer")}async queryFeatures(e={},t={}){return this._queryEngine.executeQuery(e,t.signal)}async queryFeatureCount(e={},t={}){return this._queryEngine.executeQueryForCount(e,t.signal)}async queryObjectIds(e={},t={}){return this._queryEngine.executeQueryForIds(e,t.signal)}async queryExtent(e={},t={}){return this._queryEngine.executeQueryForExtent(e,t.signal)}async _fetch(e,s){if(!e)throw new t("csv-source:invalid-source","url not defined");const r=i(e);return(await n(r.path,{query:r.query,responseType:"text",signal:s.signal})).data}_parse(e,i){const n=i.parsing||{},o={columnDelimiter:n.columnDelimiter,layerDefinition:null,locationInfo:{latitudeFieldName:n.latitudeField,longitudeFieldName:n.longitudeField}},l=D(e);let{value:a}=l.next();if(!a)throw new t("csv","CSV is empty",{csv:e});if(a=a.trim(),!n.columnDelimiter){const e=S(a);if(!e)throw new t("csv-source:invalid-delimiter","Unable to detect the delimiter from CSV");o.columnDelimiter=e}const c=a.split(o.columnDelimiter),u=o.layerDefinition={name:s(i.url,L)||"csv",drawingInfo:C,geometryType:"esriGeometryPoint",objectIdField:null,fields:[],timeInfo:n.timeInfo,extent:{xmin:Number.POSITIVE_INFINITY,ymin:Number.POSITIVE_INFINITY,xmax:Number.NEGATIVE_INFINITY,ymax:Number.NEGATIVE_INFINITY,spatialReference:n.spatialReference||{wkid:102100}}};if(!n.latitudeField||!n.longitudeField){const e=this._inferLocationInfo(c);if(!n.longitudeField&&!e.longitudeFieldName||!n.latitudeField&&!e.latitudeFieldName)throw new t("csv","Unable to identify latitudeField and/or longitudeField from CSV");o.locationInfo={longitudeFieldName:n.longitudeField||e.longitudeFieldName,latitudeFieldName:n.latitudeField||e.latitudeFieldName}}const f=this._inferFields(l,o.columnDelimiter,c,o.locationInfo);if(n.fields&&n.fields.length){const e=new Map;for(const t of n.fields)e.set(t.name.toLowerCase(),t);for(const t of f){const i=e.get(t.name.toLowerCase());if(i){const e=t.name;r(t,i),t.name=e}}}if(u.fields=f,!u.fields.some((e=>"esriFieldTypeOID"===e.type&&(u.objectIdField=e.name,!0)))){const e={name:"__OBJECTID",alias:"__OBJECTID",type:"esriFieldTypeOID",editable:!1,nullable:!1};u.objectIdField=e.name,u.fields.unshift(e)}if(this._fieldsIndex=new y(u.fields),u.timeInfo){const e=u.timeInfo;if(e.startTimeField){const t=this._fieldsIndex.get(e.startTimeField);t?(e.startTimeField=t.name,t.type="esriFieldTypeDate"):e.startTimeField=null}if(e.endTimeField){const t=this._fieldsIndex.get(e.endTimeField);t?(e.endTimeField=t.name,t.type="esriFieldTypeDate"):e.endTimeField=null}if(e.trackIdField){const t=this._fieldsIndex.get(e.trackIdField);e.trackIdField=t?t.name:null}e.startTimeField||e.endTimeField||(u.timeInfo=null)}return o}_inferLocationInfo(e){let t=null,i=null;const n=t=>e.find((e=>e.toLowerCase()===t));return V.some((e=>(t=n(e),!!t))),P.some((e=>(i=n(e),!!i))),{longitudeFieldName:t,latitudeFieldName:i}}_inferFields(e,t,i,n){const s=[],r=k(e,i,t),o=[];e:for(;o.length<10;){const{value:e,done:t}=r.next();if(t)break e;o.push(e)}for(const e of i)if(e===n.longitudeFieldName||e===n.latitudeFieldName)s.push({name:e,type:"esriFieldTypeDouble",alias:e});else{const t=o.map((t=>t[e])),i=this._inferFieldType(t),n={name:e,type:null,alias:e};switch(i){case"integer":n.type="esriFieldTypeInteger";break;case"double":n.type="esriFieldTypeDouble";break;case"date":n.type="esriFieldTypeDate",n.length=36;break;default:n.type="esriFieldTypeString",n.length=255}s.push(n)}return s}_inferFieldType(e){if(!e.length)return"string";const t=/[^+-.,0-9]/;return e.map((e=>{let i=!1;if(""!==e){if(t.test(e))i=!0;else{let t=$(e);if(!isNaN(t))return/[.,]/.test(e)||!G(t)||t>214783647||t<-214783648?"double":"integer";if(-1===e.indexOf("E"))i=!0;else{if(t=Number(e),!isNaN(t))return"double";if(-1===e.indexOf(","))i=!0;else{if(e=e.replace(",","."),t=Number(e),!isNaN(t))return"double";i=!0}}}if(i){if(!/^[-]?\d*[.,]?\d*$/.test(e)){const t=new Date(e);return this._isValidDate(t,e)?"date":"string"}return"string"}return"string"}})).reduce(((e,t)=>void 0===e||e===t?t:"string"===e||"string"===t?"string":"double"===e||"double"===t?"double":void 0))}_isValidDate(e,t){if(!e||"[object Date]"!==Object.prototype.toString.call(e)||isNaN(e.getTime()))return!1;let i=!0;if(o("chrome")&&/\d+\W*$/.test(t)){const e=t.match(/[a-zA-Z]{2,}/);if(e){let t=!1,n=0;for(;!t&&n<=e.length;)t=!q.test(e[n]),n++;i=!t}}return i}_createQueryEngine(e,t){const{latitudeFieldName:i,longitudeFieldName:n}=t.locationInfo,{objectIdField:s,fields:r,extent:o,timeInfo:f}=t.layerDefinition;let d=[];const y=[],N=new Set,j=new Set,w=[];for(const{name:e,type:t}of r)"esriFieldTypeDate"===t?N.add(e):O.indexOf(t)>-1&&j.add(e),e!==s&&w.push(e);let v=0;const T=D(e);T.next();const I=k(T,w,t.columnDelimiter);e:for(;;){const{value:e,done:t}=I.next();if(t)break e;const r=this._parseCoordinateValue(e[i]),o=this._parseCoordinateValue(e[n]);if(null!=o&&null!=r&&!isNaN(r)&&!isNaN(o)){e[i]=r,e[n]=o;for(const t in e)if(t!==i&&t!==n)if(N.has(t)){const i=new Date(e[t]);e[t]=this._isValidDate(i,e[t])?i.getTime():null}else if(j.has(t)){const i=$(e[t]);e[t]=isNaN(i)?null:i}e[s]=v,v++,d.push(new R(o,r)),y.push(e)}}if(!l({wkid:4326},o.spatialReference))if(a(o.spatialReference))for(const e of d)[e.x,e.y]=c(e.x,e.y,M);else d=h(b,d,u.WGS84,o.spatialReference,null);const x=new F({geometryType:"esriGeometryPoint",hasM:!1,hasZ:!1}),_=new g({fields:t.layerDefinition.fields,geometryType:"esriGeometryPoint",hasM:!1,hasZ:!1,timeInfo:f,objectIdField:s,spatialReference:o.spatialReference||{wkid:4326},cacheSpatialQueries:!0,featureStore:x}),S=[];for(let e=0;e<d.length;e++){const{x:t,y:i}=d[e],n=y[e];n[s]=e+1,S.push(new p(new m([],[t,i]),n,null,n[s]))}return x.addMany(S),_}_parseCoordinateValue(e){if(null==e||""===e)return null;let t=$(e);return(isNaN(t)||Math.abs(t)>181)&&(t=parseFloat(e)),t}async _checkProjection(e){try{await N(f,e)}catch{throw new t("csv-layer","Projection not supported")}}}export{P as csvLatitudeFieldNames,V as csvLongitudeFieldNames}