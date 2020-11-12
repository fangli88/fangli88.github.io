(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[24,75],{411:function(e,a,r){"use strict";r.r(a),r.d(a,"fromItem",(function(){return o})),r.d(a,"selectLayerClassPath",(function(){return s}));var t=r(6),n=r(14),l=r(8),i=r(50),y=r(207),c=r(587),u=r(526);function o(e){return!e.portalItem||e.portalItem instanceof y.default||(e={...e,portalItem:new y.default(e.portalItem)}),(a=e.portalItem,a.load().then(s).then(L)).then(a=>{const r={portalItem:e.portalItem,...a.properties},t=a.constructor;return Object(l.u)(new t(r))});var a}function s(e){switch(e.type){case"Map Service":return function(e){return function(e){return m(e.url).then(e=>e.tileInfo)}(e).then(e=>e?{className:"TileLayer"}:{className:"MapImageLayer"})}(e);case"Feature Service":return function(e){return d(e).then(e=>{if("object"==typeof e){const a={};return null!=e.id&&(a.layerId=e.id),{className:"FeatureLayer",properties:a}}return{className:"GroupLayer"}})}(e);case"Feature Collection":return async function(e){return await e.load(),Object(c.a)(e,"Map Notes")?{className:"MapNotesLayer"}:Object(c.a)(e,"Route Layer")?{className:"RouteLayer"}:1===S(await e.fetchData())?{className:"FeatureLayer"}:{className:"GroupLayer"}}(e);case"Scene Service":return function(e){return d(e).then(a=>{if("object"==typeof a){const r={};let t;if(null!=a.id?(r.layerId=a.id,t=`${e.url}/layers/${a.id}`):t=e.url,Array.isArray(e.typeKeywords)&&e.typeKeywords.length>0){const a={IntegratedMesh:"IntegratedMeshLayer","3DObject":"SceneLayer",Point:"SceneLayer",PointCloud:"PointCloudLayer",Building:"BuildingSceneLayer"};for(const r of Object.keys(a))if(-1!==e.typeKeywords.indexOf(r))return{className:a[r]}}return m(t).then(e=>{let a="SceneLayer";const t={Point:"SceneLayer","3DObject":"SceneLayer",IntegratedMesh:"IntegratedMeshLayer",PointCloud:"PointCloudLayer",Building:"BuildingSceneLayer"};return e&&e.layerType&&t[e.layerType]&&(a=t[e.layerType]),{className:a,properties:r}})}return{className:"GroupLayer"}})}(e);case"Image Service":return async function(e){var a,r,t;await e.load();const n=null!=(a=null==(r=e.typeKeywords)?void 0:r.map(e=>e.toLowerCase()))?a:[];if(n.indexOf("elevation 3d layer")>-1)return{className:"ElevationLayer"};if(n.indexOf("tiled imagery")>-1)return{className:"ImageryTileLayer"};const l=await e.fetchData(),i=null==l?void 0:l.layerType;if("ArcGISTiledImageServiceLayer"===i)return{className:"ImageryTileLayer"};if("ArcGISImageServiceLayer"===i)return{className:"ImageryLayer"};return"map"===(null==(t=(await m(e.url)).cacheType)?void 0:t.toLowerCase())?{className:"ImageryTileLayer"}:{className:"ImageryLayer"}}(e);case"Stream Service":return{className:"StreamLayer"};case"Vector Tile Service":return{className:"VectorTileLayer"};case"KML":return{className:"KMLLayer"};case"WMTS":return{className:"WMTSLayer"};case"WMS":return{className:"WMSLayer"};default:return Object(l.t)(new n.a("portal:unknown-item-type","Unknown item type '${type}'",{type:e.type}))}}function L(e){return(0,u.a[e.className])().then(a=>({constructor:a,properties:e.properties}))}function d(e){return!e.url||e.url.match(/\/\d+$/)?Object(l.u)({}):e.load().then(()=>e.fetchData()).then(a=>S(a)>0?p(a):m(e.url).then(p))}function p(e){return 1===S(e)&&{id:Object(t.n)(f(e))}}function f(e){const a=e.layers;if(a&&a.length)return a[0].id;const r=e.tables;return r&&r.length?r[0].id:null}function S(e){var a,r,t,n;return(null!=(a=null==e||null==(r=e.layers)?void 0:r.length)?a:0)+(null!=(t=null==e||null==(n=e.tables)?void 0:n.length)?t:0)}function m(e){return Object(i.default)(e,{responseType:"json",query:{f:"json"}}).then(e=>e.data)}},418:function(e,a,r){"use strict";r.r(a),r.d(a,"populateOperationalLayers",(function(){return s}));r(5);var t=r(8),n=r(23),l=r(207),i=r(326),y=r(526),c=r(587);async function u(e,a,r,t){if(!e.layerType||"ArcGISFeatureLayer"!==e.layerType)return!1;if(e.url)return!1;if(e.featureCollectionType&&e.featureCollectionType===r)return!0;if(e.itemId){const r=new l.default({id:e.itemId,portal:a});return await r.load(),"Feature Collection"===r.type&&Object(c.a)(r,t)}return!1}var o=r(411);async function s(e,a,r){if(!a)return;const n=[];for(const t of a){const e=I(t,r);"GroupLayer"===t.layerType?n.push(g(e,t,r)):n.push(e)}const l=await Object(t.j)(n);for(const t of l)!t.value||r.filter&&!r.filter(t.value)||e.add(t.value)}const L={ArcGISFeatureLayer:"FeatureLayer",ArcGISImageServiceLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",PointCloudLayer:"PointCloudLayer",ArcGISSceneServiceLayer:"SceneLayer",IntegratedMeshLayer:"IntegratedMeshLayer",BuildingSceneLayer:"BuildingSceneLayer",ArcGISTiledElevationServiceLayer:"ElevationLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",GroupLayer:"GroupLayer",WebTiledLayer:"WebTileLayer",CSV:"CSVLayer",VectorTileLayer:"VectorTileLayer",WMS:"WMSLayer",DefaultTileLayer:"TileLayer",KML:"KMLLayer",RasterDataLayer:"UnsupportedLayer"},d={ArcGISTiledElevationServiceLayer:"ElevationLayer",DefaultTileLayer:"ElevationLayer",RasterDataElevationLayer:"UnsupportedLayer"},p={ArcGISTiledMapServiceLayer:"TileLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",OpenStreetMap:"OpenStreetMapLayer",WebTiledLayer:"WebTileLayer",VectorTileLayer:"VectorTileLayer",ArcGISImageServiceLayer:"UnsupportedLayer",WMS:"UnsupportedLayer",ArcGISMapServiceLayer:"UnsupportedLayer",DefaultTileLayer:"TileLayer"},f={ArcGISFeatureLayer:"FeatureLayer",ArcGISImageServiceLayer:"ImageryLayer",ArcGISImageServiceVectorLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",ArcGISStreamLayer:"StreamLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",VectorTileLayer:"VectorTileLayer",GroupLayer:"GroupLayer",WebTiledLayer:"WebTileLayer",CSV:"CSVLayer",GeoRSS:"GeoRSSLayer",KML:"KMLLayer",WFS:"UnsupportedLayer",SubtypeGroupLayer:"UnsupportedLayer",WMS:"WMSLayer",BingMapsAerial:"BingMapsLayer",BingMapsRoad:"BingMapsLayer",BingMapsHybrid:"BingMapsLayer",DefaultTileLayer:"TileLayer"},S={ArcGISFeatureLayer:"FeatureLayer"},m={ArcGISImageServiceLayer:"ImageryLayer",ArcGISImageServiceVectorLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",OpenStreetMap:"OpenStreetMapLayer",VectorTileLayer:"VectorTileLayer",WebTiledLayer:"WebTileLayer",BingMapsAerial:"BingMapsLayer",BingMapsRoad:"BingMapsLayer",BingMapsHybrid:"BingMapsLayer",WMS:"WMSLayer",DefaultTileLayer:"TileLayer"};async function I(e,a){return async function(e,a,r){const t=new e;return t.read(a,r.context),"group"===t.type&&w(a)&&await async function(e,a,r){const t=y.a.FeatureLayer,n=await t(),l=a.featureCollection,i=l.showLegend,c=l.layers.map(e=>{const a=new n;return a.read(e,r),null!=i&&a.read({showLegend:i},r),a});e.layers.addMany(c)}(t,a,r.context),await Object(i.a)(t,r.context),t}(await async function(e,a){const r=a.context,t=function(e){let a;switch(e.origin){case"web-scene":switch(e.layerContainerType){case"basemap":a=p;break;case"ground":a=d;break;default:a=L}break;default:switch(e.layerContainerType){case"basemap":a=m;break;case"tables":a=S;break;default:a=f}}return a}(r);let n=e.layerType||e.type;!n&&a&&a.defaultLayerType&&(n=a.defaultLayerType);const i=t[n];let c=i?y.a[i]:y.a.UnknownLayer;const s=r&&r.portal;if(T(e)){if(e.itemId){const a=new l.default({id:e.itemId,portal:s});await a.load();const r=(await Object(o.selectLayerClassPath)(a)).className||"UnknownLayer";c=y.a[r]}}else"ArcGISFeatureLayer"===n&&(await function(e,a){return u(e,a,"notes","Map Notes")}(e,s)?c=y.a.MapNotesLayer:await function(e,a){return u(e,a,"route","Route Layer")}(e,s)?c=y.a.RouteLayer:w(e)&&(c=y.a.GroupLayer));return e.wmtsInfo&&e.wmtsInfo.url&&e.wmtsInfo.layerIdentifier&&(c=y.a.WMTSLayer),c()}(e,a),e,a)}function w(e){if("ArcGISFeatureLayer"!==e.layerType||T(e))return!1;const a=e.featureCollection;return!!(a&&a.layers&&a.layers.length>1)}function T(e){return"Feature Collection"===e.type}async function g(e,a,r){const t=new n.a,l=s(t,Array.isArray(a.layers)?a.layers:[],r),i=await e;if(await l,"group"===i.type)return i.layers.addMany(t),i}},526:function(e,a,r){"use strict";r.d(a,"a",(function(){return t}));const t={BingMapsLayer:async()=>(await r.e(140).then(r.bind(null,630))).default,BuildingSceneLayer:async()=>(await Promise.all([r.e(20),r.e(141)]).then(r.bind(null,617))).default,CSVLayer:async()=>(await r.e(86).then(r.bind(null,631))).default,ElevationLayer:async()=>(await r.e(23).then(r.bind(null,628))).default,FeatureLayer:async()=>(await Promise.resolve().then(r.bind(null,313))).default,GroupLayer:async()=>(await r.e(30).then(r.bind(null,572))).default,GeoRSSLayer:async()=>(await r.e(142).then(r.bind(null,600))).default,ImageryLayer:async()=>(await Promise.all([r.e(9),r.e(17),r.e(87)]).then(r.bind(null,619))).default,ImageryTileLayer:async()=>(await Promise.all([r.e(9),r.e(17),r.e(62)]).then(r.bind(null,618))).default,IntegratedMeshLayer:async()=>(await r.e(60).then(r.bind(null,625))).default,KMLLayer:async()=>(await r.e(70).then(r.bind(null,632))).default,MapImageLayer:async()=>(await Promise.all([r.e(12),r.e(26)]).then(r.bind(null,604))).default,MapNotesLayer:async()=>(await r.e(143).then(r.bind(null,605))).default,OpenStreetMapLayer:async()=>(await r.e(71).then(r.bind(null,606))).default,PointCloudLayer:async()=>(await r.e(52).then(r.bind(null,620))).default,RouteLayer:async()=>(await r.e(144).then(r.bind(null,607))).default,SceneLayer:async()=>(await Promise.all([r.e(20),r.e(145)]).then(r.bind(null,633))).default,StreamLayer:async()=>(await r.e(146).then(r.bind(null,634))).default,TileLayer:async()=>(await Promise.all([r.e(12),r.e(65)]).then(r.bind(null,608))).default,UnknownLayer:async()=>(await r.e(147).then(r.bind(null,609))).default,UnsupportedLayer:async()=>(await r.e(148).then(r.bind(null,610))).default,VectorTileLayer:async()=>(await Promise.all([r.e(27),r.e(55)]).then(r.bind(null,621))).default,WebTileLayer:async()=>(await r.e(88).then(r.bind(null,534))).default,WMSLayer:async()=>(await r.e(64).then(r.bind(null,635))).default,WMTSLayer:async()=>(await r.e(72).then(r.bind(null,623))).default}},587:function(e,a,r){"use strict";function t(e,a){return!!e.typeKeywords&&e.typeKeywords.indexOf(a)>-1}r.d(a,"a",(function(){return t}))}}]);
//# sourceMappingURL=24.bf0d9a40.chunk.js.map