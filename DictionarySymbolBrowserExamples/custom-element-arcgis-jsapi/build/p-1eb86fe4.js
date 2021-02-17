import"./p-476cf7c4.js";import{m as e,z as t,a3 as n,y as i,D as s,E as r,K as l,aW as a,F as o,aU as u,bV as c,aS as d,C as h,U as m,M as p,bd as f,cc as y,bM as g,aF as b,aI as v,s as w,b9 as x,I as S,bn as N,b as F}from"./p-dc4230e0.js";import{u as j}from"./p-365c5902.js";import"./p-540c739d.js";import{O as I,l as O,b as E}from"./p-05aa0405.js";import"./p-6e5ff36c.js";import{m as M,l as R,c as L,p as T}from"./p-5e52b0f8.js";import{O as U}from"./p-6a7ee25c.js";import{d as B}from"./p-536a38f2.js";import{t as W}from"./p-4cc1d148.js";import{o as P}from"./p-3ce6769f.js";import{s as C}from"./p-3a5e7221.js";import{f as q}from"./p-25ae7985.js";import{e as $}from"./p-cc293e3c.js";import{l as k}from"./p-dabedd67.js";const D=[[4001,4999],[2044,2045],[2081,2083],[2085,2086],[2093,2093],[2096,2098],[2105,2132],[2169,2170],[2176,2180],[2193,2193],[2200,2200],[2206,2212],[2319,2319],[2320,2462],[2523,2549],[2551,2735],[2738,2758],[2935,2941],[2953,2953],[3006,3030],[3034,3035],[3058,3059],[3068,3068],[3114,3118],[3126,3138],[3300,3301],[3328,3335],[3346,3346],[3350,3352],[3366,3366],[3416,3416],[20004,20032],[20064,20092],[21413,21423],[21473,21483],[21896,21899],[22171,22177],[22181,22187],[22191,22197],[25884,25884],[27205,27232],[27391,27398],[27492,27492],[28402,28432],[28462,28492],[30161,30179],[30800,30800],[31251,31259],[31275,31279],[31281,31290],[31466,31700]],G={84:4326,83:4269,27:4267};function _(n){if(!n)return null;const i={idCounter:-1};"string"==typeof n&&(n=(new DOMParser).parseFromString(n,"text/xml"));const s=n.documentElement;if("ServiceExceptionReport"===s.nodeName){const t=Array.prototype.slice.call(s.childNodes).map((e=>e.textContent)).join("\r\n");throw new e("wmslayer:wms-capabilities-xml-is-not-valid","The server returned errors when the WMS capabilities were requested.",t)}const r=J("Capability",s),l=J("Service",s),a=J("Request",r);if(!r||!l||!a)return null;const o=J("Layer",r);if(!o)return null;const u="WMS_Capabilities"===s.nodeName||"WMT_MS_Capabilities"===s.nodeName?s.getAttribute("version"):"1.3.0",c=K("Title",l,"")||K("Name",l,""),d=K("AccessConstraints",l,""),h=K("Abstract",l,""),m=parseInt(K("MaxWidth",l,"5000"),10),p=parseInt(K("MaxHeight",l,"5000"),10),f=Y(a,"GetMap"),y=X(a,"GetMap"),g=ee(o,u,i);let b,v,w,x,S=0;if(Array.prototype.slice.call(r.childNodes).forEach((e=>{"Layer"===e.nodeName&&(0===S?b=e:1===S?(g.name&&(g.name="",g.sublayers.push(ee(b,u,i))),g.sublayers.push(ee(e,u,i))):g.sublayers.push(ee(e,u,i)),S++)})),!g)return null;const N=g.fullExtents;if(v=g.sublayers,v||(v=[]),0===v.length&&v.push(g),w=g.extent,!w){const e=new t(v[0].extent);g.extent=e.toJSON(),w=g.extent}if(x=g.spatialReferences,!x.length&&v.length>0){const e=t=>{let n=[];return t.sublayers.forEach((t=>{!n.length&&t.spatialReferences.length&&(n=t.spatialReferences||e(t))})),n};v.forEach((t=>{x.length||(x=t.spatialReferences||e(t))}))}const F=X(a,"GetFeatureInfo");let j;if(F){const e=Y(a,"GetFeatureInfo");e.indexOf("text/html")>-1?j="text/html":e.indexOf("text/plain")>-1&&(j="text/plain")}if(!j){const e=function(t){t&&(t.queryable=!1,t.sublayers&&t.sublayers.forEach((t=>{e(t)})))};e(g)}const I=A(v),O=g.minScale||0,E=g.maxScale||0,M=g.dimensions,R=I.reduce(((e,t)=>e.concat(t.dimensions)),[]),L=M.concat(R).filter(ne);let T=null;if(L.length>0){let e=Number.POSITIVE_INFINITY,t=Number.NEGATIVE_INFINITY;L.forEach((n=>{const{extent:i}=n;var s;s=i,Array.isArray(s)&&s.length>0&&s[0]instanceof Date?i.forEach((n=>{e=Math.min(e,n.getTime()),t=Math.max(t,n.getTime())})):i.forEach((n=>{e=Math.min(e,n.min.getTime()),t=Math.max(t,n.max.getTime())}))})),T={startTimeField:null,endTimeField:null,trackIdField:null,timeExtent:[e,t]}}return{copyright:d,description:h,dimensions:M,extent:w,fullExtents:N,featureInfoFormat:j,featureInfoUrl:F,mapUrl:y,maxWidth:m,maxHeight:p,maxScale:E,minScale:O,layers:I,spatialReferences:x,supportedImageFormatTypes:f,timeInfo:T,title:c,version:u}}function V(e){return D.some((t=>e>=t[0]&&e<=t[1]))}function A(e){let t=[];return e.forEach((e=>{t.push(e),e.sublayers&&e.sublayers.length&&(t=t.concat(A(e.sublayers)),delete e.sublayers)})),t}function H(e,t,n){var i;return null!=(i=t.getAttribute(e))?i:n}function J(e,t){for(let n=0;n<t.childNodes.length;n++){const i=t.childNodes[n];if(te(i)&&i.nodeName===e)return i}return null}function z(e,t){const n=[];for(let i=0;i<t.childNodes.length;i++){const s=t.childNodes[i];te(s)&&s.nodeName===e&&n.push(s)}return n}function K(e,t,n){const i=J(e,t);return i?i.textContent:n}function Q(e,n,s){if(!e)return null;const r=parseFloat(e.getAttribute("minx")),l=parseFloat(e.getAttribute("miny")),a=parseFloat(e.getAttribute("maxx")),o=parseFloat(e.getAttribute("maxy"));let u,c,d,h;s?(u=isNaN(l)?-Number.MAX_VALUE:l,c=isNaN(r)?-Number.MAX_VALUE:r,d=isNaN(o)?Number.MAX_VALUE:o,h=isNaN(a)?Number.MAX_VALUE:a):(u=isNaN(r)?-Number.MAX_VALUE:r,c=isNaN(l)?-Number.MAX_VALUE:l,d=isNaN(a)?Number.MAX_VALUE:a,h=isNaN(o)?Number.MAX_VALUE:o);const m=new i({wkid:n});return new t({xmin:u,ymin:c,xmax:d,ymax:h,spatialReference:m})}function X(e,t){const i=J(t,e);if(i){const e=J("DCPType",i);if(e){const t=J("HTTP",e);if(t){const e=J("Get",t);if(e){let t=function(e,t,n){const i=J("OnlineResource",n);return i?H("xlink:href",i,null):null}(0,0,e);if(t)return t.indexOf("&")===t.length-1&&(t=t.substring(0,t.length-1)),function(e,t){const i=[],s=n(e);for(const e in s.query)s.query.hasOwnProperty(e)&&-1===t.indexOf(e.toLowerCase())&&i.push(e+"="+s.query[e]);return s.path+(i.length?"?"+i.join("&"):"")}(t,["service","request"])}}}}return null}function Y(e,t){const n=z("Operation",e);if(0===n.length)return z("Format",J(t,e)).map((e=>e.textContent));const i=[];return n.forEach((e=>{e.getAttribute("name")===t&&z("Format",e).forEach((e=>{i.push(e.textContent)}))})),i}function Z(e,t,n){const i=J(t,e);if(!i)return n;const{textContent:s}=i;if(null==s||""===s)return n;const r=Number(s);return isNaN(r)?n:r}function ee(e,n,s){var r;if(!e)return null;const l={id:s.idCounter++,fullExtents:[],parentLayerId:null,queryable:"1"===e.getAttribute("queryable"),spatialReferences:[],sublayers:null},a=J("LatLonBoundingBox",e),o=J("EX_GeographicBoundingBox",e);let u=null;a&&(u=Q(a,4326)),o&&(u=new t(0,0,0,0,new i({wkid:4326})),u.xmin=parseFloat(K("westBoundLongitude",o,"0")),u.ymin=parseFloat(K("southBoundLatitude",o,"0")),u.xmax=parseFloat(K("eastBoundLongitude",o,"0")),u.ymax=parseFloat(K("northBoundLatitude",o,"0"))),a||o||(u=new t(-180,-90,180,90,new i({wkid:4326}))),l.minScale=Z(e,"MaxScaleDenominator",0),l.maxScale=Z(e,"MinScaleDenominator",0);const c=["1.0.0","1.1.0","1.1.1"].indexOf(n)>-1?"SRS":"CRS";return Array.prototype.slice.call(e.childNodes).forEach((e=>{if("Name"===e.nodeName)l.name=e.textContent||"";else if("Title"===e.nodeName)l.title=e.textContent||"";else if("Abstract"===e.nodeName)l.description=e.textContent||"";else if("BoundingBox"===e.nodeName){const t=e.getAttribute(c);if(t&&0===t.indexOf("EPSG:")){const i=parseInt(t.substring(5),10);0===i||isNaN(i)||u||(u="1.3.0"===n?Q(e,i,V(i)):Q(e,i))}const i=t&&t.indexOf(":");if(i&&i>-1){let s=parseInt(t.substring(i+1,t.length),10);0===s||isNaN(s)||(s=G[s]?G[s]:s);const r="1.3.0"===n?Q(e,s,V(s)):Q(e,s);l.fullExtents.push(r)}}else if(e.nodeName===c)e.textContent.split(" ").forEach((e=>{0===(e=e.indexOf(":")>-1?parseInt(e.split(":")[1],10):parseInt(e,10))||isNaN(e)||(G[e]&&(e=G[e]),-1===l.spatialReferences.indexOf(e)&&l.spatialReferences.push(e))}));else if("Style"!==e.nodeName||l.legendURL){if("Layer"===e.nodeName){const t=ee(e,n,s);t&&(t.parentLayerId=l.id,l.sublayers||(l.sublayers=[]),l.sublayers.push(t))}}else{const t=J("LegendURL",e);if(t){const e=J("OnlineResource",t);e&&(l.legendURL=e.getAttribute("xlink:href"))}}})),l.extent=null==(r=u)?void 0:r.toJSON(),l.dimensions=z("Dimension",e).filter((e=>e.getAttribute("name")&&e.getAttribute("units")&&e.textContent)).map((e=>{const t=e.getAttribute("name"),n=e.getAttribute("units"),i=e.textContent,s=e.getAttribute("unitSymbol"),r=e.getAttribute("default"),l="0"!==H("default",e,"0"),a="0"!==H("nearestValue",e,"0"),o="0"!==H("current",e,"0");return/^time$/i.test(t)&&/^ISO8601$/i.test(n)?{name:"time",units:"ISO8601",extent:re(i),default:re(r),multipleValues:l,nearestValue:a,current:o}:/^elevation$/i.test(t)?{name:"elevation",units:n,extent:ie(i),unitSymbol:s,default:ie(r),multipleValues:l,nearestValue:a}:{name:t,units:n,extent:se(i),unitSymbol:s,default:se(r),multipleValues:l,nearestValue:a}})),l}function te(e){return e.nodeType===Node.ELEMENT_NODE}function ne(e){return"time"===e.name}function ie(e){if(!e)return null;const t=-1!==e.indexOf("/"),n=e.split(",");return t?n.map((e=>{const t=e.split("/");return t.length<2?null:{min:parseFloat(t[0]),max:parseFloat(t[1]),resolution:t.length>=3&&"0"!==t[2]?parseFloat(t[2]):void 0}})).filter((e=>e)):n.map((e=>parseFloat(e)))}function se(e){if(!e)return null;const t=-1!==e.indexOf("/"),n=e.split(",");return t?n.map((e=>{const t=e.split("/");return t.length<2?null:{min:t[0],max:t[1],resolution:t.length>=3&&"0"!==t[2]?t[2]:void 0}})).filter((e=>e)):n}function re(e){if(!e)return null;const t=-1!==e.indexOf("/"),n=e.split(",");return t?n.map((e=>{const t=e.split("/");return t.length<2?null:{min:new Date(t[0]),max:new Date(t[1]),resolution:t.length>=3&&"0"!==t[2]?le(t[2]):void 0}})).filter((e=>e)):n.map((e=>new Date(e)))}function le(e){const t=e.match(/(?:p(\d+y|\d+(?:.|,)\d+y)?(\d+m|\d+(?:.|,)\d+m)?(\d+d|\d+(?:.|,)\d+d)?)?(?:t(\d+h|\d+(?:.|,)\d+h)?(\d+m|\d+(?:.|,)\d+m)?(\d+s|\d+(?:.|,)\d+s)?)?/i);return t?{years:ae(t[1]),months:ae(t[2]),days:ae(t[3]),hours:ae(t[4]),minutes:ae(t[5]),seconds:ae(t[6])}:null}function ae(e){if(!e)return 0;const t=e.match(/(?:\d+(?:.|,)\d+|\d+)/);if(!t)return 0;const n=t[0].replace(",",".");return Number(n)}function oe(e){return e.toISOString().replace(/\.[0-9]{3}/,"")}const ue={visible:"visibleSublayers"},ce=[102100,3857,102113,900913],de=[3395,54004];let he=class extends a{constructor(){super(...arguments),this._layerHandles=new j,this.extent=null,this._scale=null,this.view=null}set layer(e){this._get("layer")!==e&&(this._set("layer",e),this._layerHandles&&(this._layerHandles.removeAll(),this._layerHandles=null),e&&(this._layerHandles||(this._layerHandles=new j),this._layerHandles.add([e.sublayers.on("change",(()=>this.notifyChange("visibleSublayers"))),e.on("wms-sublayer-update",(e=>this.notifyChange(ue[e.propertyName])))])))}get layers(){const{visibleSublayers:e}=this;return e.filter((e=>e.name)).map((e=>e.name)).join(",")}get scale(){return null!=this._scale?this._scale:this.view&&this.view.scale||0}set scale(e){this.view||(this._scale=e,this.notifyChange("scale"))}get version(){return(this._get("version")||0)+1}get visibleSublayers(){const{layer:e,scale:t}=this,{sublayers:n}=e,i=[],s=e=>{const{minScale:n,maxScale:r,sublayers:l,visible:a}=e;a&&(0===t||(0===n||t<=n)&&(0===r||t>=r))&&(l?l.forEach(s):i.unshift(e))};return null==n||n.forEach(s),i}get wkid(){const{extent:e,layer:t}=this,n=t.spatialReferences;let i=e.spatialReference&&e.spatialReference.wkid;n&&-1===n.indexOf(i)&&e.spatialReference.latestWkid&&(i=e.spatialReference.latestWkid);const s=ce.some((e=>e===i));if(!n)return i;if(s){const e=[];n.forEach((t=>{ce.indexOf(t)>-1&&e.push(t)})),e.length||n.forEach((t=>{de.indexOf(t)>-1&&e.push(t)})),i=e.length>0?e[0]:ce[0]}return i}toJSON(){const{extent:e,layer:t,layers:n}=this,{imageFormat:i,imageTransparency:s,spatialReferences:r,version:l}=t;let{wkid:a}=this;r&&-1===r.indexOf(a)&&e.spatialReference.latestWkid&&(a=e.spatialReference.latestWkid);const{xmin:o,ymin:u,xmax:c,ymax:d}=e,h={bbox:"1.3.0"===t.version&&V(a)?`${u},${o},${d},${c}`:`${o},${u},${c},${d}`,format:i,request:"GetMap",service:"WMS",styles:"",transparent:s,version:l};return isNaN(a)||("1.3.0"===l?h.crs="EPSG:"+a:h.srs="EPSG:"+a),{...h,layers:n}}};s([r()],he.prototype,"extent",void 0),s([r()],he.prototype,"layer",null),s([r({readOnly:!0,dependsOn:["visibleSublayers"]})],he.prototype,"layers",null),s([r({type:Number,dependsOn:["view.scale"]})],he.prototype,"scale",null),s([r(M)],he.prototype,"timeExtent",void 0),s([r({type:Number,dependsOn:["layers","layer.imageTransparency","timeExtent"],readOnly:!0})],he.prototype,"version",null),s([r()],he.prototype,"view",void 0),s([r({readOnly:!0,dependsOn:["layer.sublayers","scale"]})],he.prototype,"visibleSublayers",null),s([r({dependsOn:[],autoTracked:!1})],he.prototype,"wkid",null),he=s([l("esri.layers.support.ExportWMSImageParameters")],he);var me,pe=he;let fe=0,ye=me=class extends I{constructor(e){super(e),this._sublayersHandles=new j,this.dimensions=null,this.fullExtents=null,this.featureInfoFormat=null,this.featureInfoUrl=null,this.legendUrl=null,this.legendEnabled=!0,this.maxScale=0,this.minScale=0,this.popupEnabled=!1,this.queryable=!1,this.spatialReferences=null}get description(){return this._get("description")}set description(e){this._set("description",e)}get fullExtent(){return this._get("fullExtent")}set fullExtent(e){this._set("fullExtent",e)}readExtent(e,n){return(e=n.extent)?t.fromJSON(e):null}get id(){const e=this._get("id");return null==e?fe++:e}set id(e){this._set("id",e)}readLegendUrl(e,t){return t?t.legendUrl||t.legendURL:null}set layer(e){this._set("layer",e),this.sublayers&&this.sublayers.forEach((t=>t.layer=e))}get name(){return this._get("name")}set name(e){this._set("name",e)}set sublayers(e){const t=this._get("sublayers");t&&(t.forEach((e=>{e.layer=null})),this._sublayersHandles.removeAll(),this._sublayersHandles=null),e&&(e.forEach((e=>{e.parent=this,e.layer=this.layer})),this._sublayersHandles.add([e.on("after-add",(({item:e})=>{e.parent=this,e.layer=this.layer})),e.on("after-remove",(({item:e})=>{e.parent=null,e.layer=null}))])),this._set("sublayers",e)}castSublayers(e){return c(d.ofType(me),e)}get title(){return this._get("title")}set title(e){this._set("title",e)}get visible(){return this._get("visible")}set visible(e){this._setAndNotifyLayer("visible",e)}clone(){const e=new me;return this.hasOwnProperty("description")&&(e.description=this.description),this.hasOwnProperty("fullExtent")&&(e.fullExtent=this.fullExtent.clone()),this.hasOwnProperty("fullExtents")&&(e.fullExtents=this.fullExtents.map((e=>e.clone()))),this.hasOwnProperty("featureInfoFormat")&&(e.featureInfoFormat=this.featureInfoFormat),this.hasOwnProperty("featureInfoUrl")&&(e.featureInfoUrl=this.featureInfoUrl),this.hasOwnProperty("legendUrl")&&(e.legendUrl=this.legendUrl),this.hasOwnProperty("legendEnabled")&&(e.legendEnabled=this.legendEnabled),this.hasOwnProperty("layer")&&(e.layer=this.layer),this.hasOwnProperty("name")&&(e.name=this.name),this.hasOwnProperty("parent")&&(e.parent=this.parent),this.hasOwnProperty("queryable")&&(e.queryable=this.queryable),this.hasOwnProperty("sublayers")&&(e.sublayers=this.sublayers&&this.sublayers.map((e=>e.clone()))),this.hasOwnProperty("spatialReferences")&&(e.spatialReferences=this.spatialReferences.map((e=>e))),this.hasOwnProperty("visible")&&(e.visible=this.visible),this.hasOwnProperty("title")&&(e.title=this.title),e}_setAndNotifyLayer(e,t){const n=this.layer;this._get(e)!==t&&(this._set(e,t),n&&n.emit("wms-sublayer-update",{propertyName:e,id:this.id}))}};s([r()],ye.prototype,"description",null),s([r({readOnly:!0})],ye.prototype,"dimensions",void 0),s([r({value:null})],ye.prototype,"fullExtent",null),s([o("fullExtent",["extent"])],ye.prototype,"readExtent",null),s([r()],ye.prototype,"fullExtents",void 0),s([r()],ye.prototype,"featureInfoFormat",void 0),s([r()],ye.prototype,"featureInfoUrl",void 0),s([r({type:Number,json:{write:{enabled:!1,overridePolicy:()=>({ignoreOrigin:!0,enabled:!0})}}})],ye.prototype,"id",null),s([r({type:String,json:{origins:{"web-document":{read:{source:["legendUrl","legendURL"]},write:{target:"legendUrl",ignoreOrigin:!0}}},read:{source:"legendURL"},write:{ignoreOrigin:!0}}})],ye.prototype,"legendUrl",void 0),s([o(["web-document"],"legendUrl")],ye.prototype,"readLegendUrl",null),s([r({value:!0,type:Boolean,json:{read:{source:"showLegend"},write:{target:"showLegend"},origins:{"web-map":{read:!1,write:!1},"web-scene":{read:!1,write:!1}}}})],ye.prototype,"legendEnabled",void 0),s([r({value:null})],ye.prototype,"layer",null),s([r()],ye.prototype,"maxScale",void 0),s([r()],ye.prototype,"minScale",void 0),s([r({type:String,value:null,json:{read:{source:"name"},write:{ignoreOrigin:!0}}})],ye.prototype,"name",null),s([r()],ye.prototype,"parent",void 0),s([r({type:Boolean,json:{read:{source:"showPopup"},write:{ignoreOrigin:!0,target:"showPopup"}}})],ye.prototype,"popupEnabled",void 0),s([r({type:Boolean,json:{write:{ignoreOrigin:!0}}})],ye.prototype,"queryable",void 0),s([r()],ye.prototype,"sublayers",null),s([u("sublayers")],ye.prototype,"castSublayers",null),s([r({type:[Number],json:{read:{source:"spatialReferences"}}})],ye.prototype,"spatialReferences",void 0),s([r({type:String,value:null,json:{write:{ignoreOrigin:!0}}})],ye.prototype,"title",null),s([r({type:Boolean,value:!0,json:{read:{source:"defaultVisibility"}}})],ye.prototype,"visible",null),ye=me=s([l("esri.layers.support.WMSSublayer")],ye);var ge=ye;const be=new h({bmp:"image/bmp",gif:"image/gif",jpg:"image/jpeg",png:"image/png",svg:"image/svg+xml"},{ignoreUnknown:!1});let ve=class extends(W(q(P(C(R(B(O(E)))))))){constructor(...e){super(...e),this._sublayersHandles=new j,this.allSublayers=new k({root:this,rootCollectionNames:["sublayers"],getChildrenFunction:e=>e.sublayers}),this.customParameters=null,this.customLayerParameters=null,this.copyright=null,this.description=null,this.dimensions=null,this.fullExtent=null,this.fullExtents=null,this.featureInfoFormat=null,this.featureInfoUrl=null,this.imageFormat=null,this.imageMaxHeight=2048,this.imageMaxWidth=2048,this.imageTransparency=!0,this.legendEnabled=!0,this.mapUrl=null,this.isReference=null,this.operationalLayerType="WMS",this.spatialReference=null,this.spatialReferences=null,this.sublayers=null,this.type="wms",this.url=null,this.version=null,this.watch("sublayers",((e,t)=>{t&&(t.forEach((e=>{e.layer=null})),this._sublayersHandles.removeAll(),this._sublayersHandles=null),e&&(e.forEach((e=>{e.parent=this,e.layer=this})),this._sublayersHandles||(this._sublayersHandles=new j),this._sublayersHandles.add([e.on("after-add",(({item:e})=>{e.parent=this,e.layer=this})),e.on("after-remove",(({item:e})=>{e.parent=null,e.layer=null}))]))}),!0)}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}destroy(){var e;null==(e=this._exportWMSImageParameters)||e.destroy()}load(e){const t=F(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["WMS"]},e).then((()=>this._fetchService(t)),(()=>this._fetchService(t)))),m(this)}readFullExtentFromItemOrMap(e,n){const i=n.extent;return new t({xmin:i[0][0],ymin:i[0][1],xmax:i[1][0],ymax:i[1][1]})}writeFullExtent(e,t){t.extent=[[e.xmin,e.ymin],[e.xmax,e.ymax]]}readImageFormat(e,t){const n=t.supportedImageFormatTypes;return n&&n.indexOf("image/png")>-1?"image/png":n&&n[0]}readSpatialReferenceFromItemOrDocument(e,t){return new i(t.spatialReferences[0])}writeSpatialReferences(e,t){const n=this.spatialReference&&this.spatialReference.wkid;e&&n?(t.spatialReferences=e.filter((e=>e!==n)),t.spatialReferences.unshift(n)):t.spatialReferences=e}readSublayersFromItemOrMap(e,t,n){return we(t.layers,n,t.visibleLayers)}readSublayers(e,t,n){return we(t.layers,n)}writeSublayers(e,t,n,i){t.layers=[];const s=new Map,r=e.flatten((({sublayers:e})=>e&&e.toArray())).toArray();r.forEach((e=>{"number"==typeof e.parent.id&&(s.has(e.parent.id)?s.get(e.parent.id).push(e.id):s.set(e.parent.id,[e.id]))})),r.forEach((e=>{const n={sublayer:e,...i},r=e.write({parentLayerId:"number"==typeof e.parent.id?e.parent.id:-1},n);if(s.has(e.id)&&(r.sublayerIds=s.get(e.id)),!e.sublayers&&e.name){const i=e.write({},n);delete i.id,t.layers.push(i)}})),t.visibleLayers=r.filter((e=>e.visible&&!e.sublayers)).map((e=>e.name))}createExportImageParameters(e,t,n,i){var s;const r=i&&i.pixelRatio||1,l=$({extent:e,width:t})*r;return null==(s=this._exportWMSImageParameters)||s.destroy(),this._exportWMSImageParameters=new pe({layer:this,extent:e,scale:l}),this._exportWMSImageParameters.toJSON()}async fetchImage(e,t,n,i){var s,r;const l=this.mapUrl,a=this.createExportImageParameters(e,t,n,i);if(!a.layers){const e=document.createElement("canvas");return e.width=t,e.height=n,e}const o=null==i||null==(s=i.timeExtent)?void 0:s.start,u=null==i||null==(r=i.timeExtent)?void 0:r.end,c=o&&u?o.getTime()===u.getTime()?oe(o):`${oe(o)}/${oe(u)}`:void 0,d={responseType:"image",query:this._mixCustomParameters({width:t,height:n,...a,time:c}),signal:null==i?void 0:i.signal};return null!=i&&i.timestamp&&(d.query={_ts:i.timestamp,...d.query}),p(l,d).then((e=>e.data))}fetchFeatureInfo(e,t,n,i,s){const r=function(e){return e.length?e.filter((e=>e.popupEnabled&&e.name&&e.queryable)).map((e=>e.name)).join(","):""}(this._exportWMSImageParameters.visibleSublayers);if(!this.featureInfoUrl||!r)return null;const l={query_layers:r,request:"GetFeatureInfo",info_format:this.featureInfoFormat,feature_count:25,width:t,height:n,..."1.3.0"===this.version?{I:i,J:s}:{x:i,y:s}};let a={...this.createExportImageParameters(e,t,n),...l};return a=this._mixCustomParameters(a),p(this.featureInfoUrl,{query:a,responseType:"text"}).then((e=>{let t=this.featureInfoUrl;t+=-1===t.indexOf("?")?"?":"";for(const e in a)t+="?"===t.substring(t.length-1,t.length)?"":"&",t+=e+"="+a[e];const n=document.createElement("iframe");return n.src=t,n.frameBorder="0",n.marginHeight="0",n.marginWidth="0",n.innerHTML=e.data,n.style.width="100%",new f({sourceLayer:this,popupTemplate:new y({title:this.title,content:n})})}))}findSublayerById(e){return this.allSublayers.find((t=>t.id===e))}findSublayerByName(e){return this.allSublayers.find((t=>t.name===e))}supportsSpatialReference(e){return U(this.url)||this.spatialReferences.some((t=>{const n=900913===t?i.WebMercator:new i({wkid:t});return g(n,e)}))}async _fetchService(e){if(!this.resourceInfo){this.parsedUrl.query&&this.parsedUrl.query.service&&(this.parsedUrl.query.SERVICE=this.parsedUrl.query.service,delete this.parsedUrl.query.service),this.parsedUrl.query&&this.parsedUrl.query.request&&(this.parsedUrl.query.REQUEST=this.parsedUrl.query.request,delete this.parsedUrl.query.request);const t=await p(this.parsedUrl.path,{query:{SERVICE:"WMS",REQUEST:"GetCapabilities",...this.parsedUrl.query,...this.customParameters},responseType:"xml",signal:e});this.resourceInfo=_(t.data)}if(this.parsedUrl){const e=new b(this.parsedUrl.path);"https"!==e.scheme||e.port&&"443"!==e.port||-1!==v.request.httpsDomains.indexOf(e.host)||v.request.httpsDomains.push(e.host)}this.read(this.resourceInfo,{origin:"service"})}_mixCustomParameters(e){if(!this.customLayerParameters&&!this.customParameters)return e;const t={...this.customParameters,...this.customLayerParameters};for(const n in t)e[n.toLowerCase()]=t[n];return e}};function we(e,t,n){const i=new Map;e.every((e=>null==e.id))&&(e=w(e)).forEach(((e,t)=>e.id=t));for(const s of e){const e=new ge;e.read(s,t),-1===(null==n?void 0:n.indexOf(e.name))&&(e.visible=!1),i.set(e.id,e)}const s=[];for(const t of e){const e=i.get(t.id);if(null!=t.parentLayerId&&t.parentLayerId>=0){const n=i.get(t.parentLayerId);n.sublayers||(n.sublayers=new d),n.sublayers.unshift(e)}else s.unshift(e)}return s}s([r({readOnly:!0})],ve.prototype,"allSublayers",void 0),s([r({json:{type:Object,write:!0}})],ve.prototype,"customParameters",void 0),s([r({json:{type:Object,write:!0}})],ve.prototype,"customLayerParameters",void 0),s([r({type:String,json:{write:!0}})],ve.prototype,"copyright",void 0),s([r()],ve.prototype,"description",void 0),s([r({readOnly:!0})],ve.prototype,"dimensions",void 0),s([r({json:{type:[[Number]],read:{source:"extent"},write:{target:"extent"},origins:{service:{read:{source:"extent"}}}}})],ve.prototype,"fullExtent",void 0),s([o(["web-document","portal-item"],"fullExtent",["extent"])],ve.prototype,"readFullExtentFromItemOrMap",null),s([x(["web-document","portal-item"],"fullExtent",{extent:{type:[[Number]]}})],ve.prototype,"writeFullExtent",null),s([r()],ve.prototype,"fullExtents",void 0),s([r({type:String,json:{write:{ignoreOrigin:!0}}})],ve.prototype,"featureInfoFormat",void 0),s([r({type:String,json:{write:{ignoreOrigin:!0}}})],ve.prototype,"featureInfoUrl",void 0),s([r({type:String,json:{origins:{"web-document":{default:"image/png",type:be.jsonValues,read:{reader:be.read,source:"format"},write:{writer:be.write,target:"format"}}}}})],ve.prototype,"imageFormat",void 0),s([o("imageFormat",["supportedImageFormatTypes"])],ve.prototype,"readImageFormat",null),s([r({type:Number,json:{read:{source:"maxHeight"},write:{target:"maxHeight"}}})],ve.prototype,"imageMaxHeight",void 0),s([r({type:Number,json:{read:{source:"maxWidth"},write:{target:"maxWidth"}}})],ve.prototype,"imageMaxWidth",void 0),s([r()],ve.prototype,"imageTransparency",void 0),s([r(L)],ve.prototype,"legendEnabled",void 0),s([r({type:["show","hide","hide-children"]})],ve.prototype,"listMode",void 0),s([r({type:String,json:{write:{ignoreOrigin:!0}}})],ve.prototype,"mapUrl",void 0),s([r({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],ve.prototype,"isReference",void 0),s([r({type:["WMS"]})],ve.prototype,"operationalLayerType",void 0),s([r({type:i,json:{origins:{service:{read:{source:"extent.spatialReference"}}},write:!1}})],ve.prototype,"spatialReference",void 0),s([o(["web-document","portal-item"],"spatialReference",["spatialReferences"])],ve.prototype,"readSpatialReferenceFromItemOrDocument",null),s([r({type:[S],json:{read:{source:"spatialReferences"},write:{ignoreOrigin:!0}}})],ve.prototype,"spatialReferences",void 0),s([x(["web-document","portal-item"],"spatialReferences")],ve.prototype,"writeSpatialReferences",null),s([r({type:d.ofType(ge),json:{write:{target:"layers",overridePolicy(e,t,n){if(function(e,t){return e.some((e=>{for(const n in e)if(N(e,n,null,t))return!0;return!1}))}(this.allSublayers,n))return{ignoreOrigin:!0}}}}})],ve.prototype,"sublayers",void 0),s([o(["web-document","portal-item"],"sublayers",["layers","visibleLayers"])],ve.prototype,"readSublayersFromItemOrMap",null),s([o("service","sublayers",["layers"])],ve.prototype,"readSublayers",null),s([x("sublayers",{layers:{type:[ge]},visibleLayers:{type:[String]}})],ve.prototype,"writeSublayers",null),s([r({json:{read:!1},readOnly:!0,value:"wms"})],ve.prototype,"type",void 0),s([r(T)],ve.prototype,"url",void 0),s([r({type:String,json:{write:{ignoreOrigin:!0}}})],ve.prototype,"version",void 0),ve=s([l("esri.layers.WMSLayer")],ve);var xe=ve;export default xe;