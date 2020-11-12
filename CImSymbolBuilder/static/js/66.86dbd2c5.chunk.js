(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[66],{579:function(e,t,n){"use strict";var i=n(6),s=n(4),r=n(14),o=n(85),a=n(99),d=n(425),u=n(479),l=n(5),c=n(447);const h={minX:0,minY:0,maxX:0,maxY:0};class f{constructor(){this._indexInvalid=!1,this._boundsToLoad=[],this._boundsById=new Map,this._idByBounds=new Map,this._index=Object(c.a)(9,Object(l.a)("csp-restrictions")?e=>({minX:e[0],minY:e[1],maxX:e[2],maxY:e[3]}):["[0]","[1]","[2]","[3]"]),this._loadIndex=()=>{if(this._indexInvalid){const e=new Array(this._idByBounds.size);let t=0;this._idByBounds.forEach((n,i)=>{e[t++]=i}),this._indexInvalid=!1,this._index.clear(),this._index.load(e)}else this._boundsToLoad.length&&(this._index.load(this._boundsToLoad.filter(e=>this._idByBounds.has(e))),this._boundsToLoad.length=0)}}clear(){this._indexInvalid=!1,this._boundsToLoad.length=0,this._boundsById.clear(),this._idByBounds.clear(),this._index.clear()}delete(e){const t=this._boundsById.get(e);this._boundsById.delete(e),t&&(this._idByBounds.delete(t),this._indexInvalid||this._index.remove(t))}forEachInBounds(e,t){this._loadIndex();for(const n of function(e,t){return h.minX=t[0],h.minY=t[1],h.maxX=t[2],h.maxY=t[3],e.search(h)}(this._index,e))t(this._idByBounds.get(n))}get(e){return this._boundsById.get(e)}has(e){return this._boundsById.has(e)}invalidateIndex(){this._indexInvalid||(this._indexInvalid=!0,this._boundsToLoad.length=0)}set(e,t){if(!this._indexInvalid){const t=this._boundsById.get(e);t&&(this._index.remove(t),this._idByBounds.delete(t))}this._boundsById.set(e,t),t&&(this._idByBounds.set(t,e),this._indexInvalid||(this._boundsToLoad.push(t),this._boundsToLoad.length>5e4&&this._loadIndex()))}}var y=n(504),p=n(435),g=n(472);const m={getObjectId:e=>e.objectId,getAttributes:e=>e.attributes,getAttribute:(e,t)=>e.attributes[t],cloneWithGeometry:(e,t)=>new y.a(t,e.attributes,null,e.objectId),getGeometry:e=>e.geometry,getCentroid:(e,t)=>(e.centroid||(e.centroid=Object(g.a)(new p.a,e.geometry,t.hasZ,t.hasM)),e.centroid)};t.a=class{constructor(e){this.geometryInfo=e,this._boundsStore=new f,this._featuresById=new Map,this._markedIds=new Set,this.events=new o.a,this.featureAdapter=m}get geometryType(){return this.geometryInfo.geometryType}get hasM(){return this.geometryInfo.hasM}get hasZ(){return this.geometryInfo.hasZ}get numFeatures(){return this._featuresById.size}get fullBounds(){if(!this.numFeatures)return null;const e=Object(a.d)(a.a);return this._featuresById.forEach(t=>{const n=this._boundsStore.get(t.objectId);n&&(e[0]=Math.min(n[0],e[0]),e[1]=Math.min(n[1],e[1]),e[2]=Math.max(n[2],e[2]),e[3]=Math.max(n[3],e[3]))}),e}get storeStatistics(){let e=0;return this._featuresById.forEach(t=>{t.geometry&&t.geometry.coords&&(e+=t.geometry.coords.length)}),{featureCount:this._featuresById.size,vertexCount:e/(this.hasZ?this.hasM?4:3:this.hasM?3:2)}}add(e){this._add(e),this._emitChanged()}addMany(e){for(const t of e)this._add(t);this._emitChanged()}clear(){this._featuresById.clear(),this._boundsStore.clear(),this._emitChanged()}removeById(e){const t=this._featuresById.get(e);return t?(this._remove(t),this._emitChanged(),t):null}removeManyById(e){this._boundsStore.invalidateIndex();for(const t of e){const e=this._featuresById.get(t);e&&this._remove(e)}this._emitChanged()}forEachBounds(e,t,n){for(const i of e){const e=this._boundsStore.get(i.objectId);e&&t(Object(u.g)(n,e))}}getFeature(e){return this._featuresById.get(e)}has(e){return this._featuresById.has(e)}forEach(e){this._featuresById.forEach(t=>e(t))}forEachInBounds(e,t){this._boundsStore.forEachInBounds(e,e=>{t(this._featuresById.get(e))})}startMarkingUsedFeatures(){this._boundsStore.invalidateIndex(),this._markedIds.clear()}sweep(){let e=!1;this._featuresById.forEach((t,n)=>{this._markedIds.has(n)||(e=!0,this._remove(t))}),this._markedIds.clear(),e&&this._emitChanged()}_emitChanged(){this.events.emit("changed",void 0)}_add(e){if(!e)return;const t=e.objectId;if(null==t)return void s.a.getLogger("esri.layers.graphics.data.FeatureStore").error(new r.a("featurestore:invalid-feature","feature id is missing",{feature:e}));const n=this._featuresById.get(t);let o;if(this._markedIds.add(t),n?(e.displayId=n.displayId,o=this._boundsStore.get(t),this._boundsStore.delete(t)):Object(i.h)(this.onFeatureAdd)&&this.onFeatureAdd(e),!e.geometry||!e.geometry.coords||!e.geometry.coords.length)return this._boundsStore.set(t,null),void this._featuresById.set(t,e);o=Object(d.r)(o||Object(a.d)(),e.geometry,this.geometryInfo.hasZ,this.geometryInfo.hasM),this._boundsStore.set(t,o),this._featuresById.set(t,e)}_remove(e){return Object(i.h)(this.onFeatureRemove)&&this.onFeatureRemove(e),this._markedIds.delete(e.objectId),this._boundsStore.delete(e.objectId),this._featuresById.delete(e.objectId),e}}},656:function(e,t,n){"use strict";n.d(t,"a",(function(){return F})),n.d(t,"b",(function(){return j})),n.d(t,"c",(function(){return I}));var i=n(14),s=n(504),r=n(435);function o(e){const t=[];return e.forEach(e=>t.push(e)),t}const a={LineString:"esriGeometryPolyline",MultiLineString:"esriGeometryPolyline",MultiPoint:"esriGeometryMultipoint",Point:"esriGeometryPoint",Polygon:"esriGeometryPolygon",MultiPolygon:"esriGeometryPolygon"};function*d(e){switch(e.type){case"Feature":yield e;break;case"FeatureCollection":for(const t of e.features)t&&(yield t)}}function*u(e){if(!e)return null;switch(e.type){case"Point":yield e.coordinates;break;case"LineString":case"MultiPoint":yield*e.coordinates;break;case"MultiLineString":case"Polygon":for(const t of e.coordinates)yield*t;break;case"MultiPolygon":for(const t of e.coordinates)for(const e of t)yield*e}}function l(e){for(;;){const{value:t,done:n}=e.next();if(n)return!1;if(t.length>2)return!0}}function c(e){let t=0;for(let n=0;n<e.length;n++){const i=e[n],s=e[(n+1)%e.length];t+=i[0]*s[1]-s[0]*i[1]}return t<=0}function h(e){const t=e[0],n=e[e.length-1];return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]||e.push(t),e}function f(e,t,n){switch(t.type){case"LineString":return function(e,t,n){return g(e,t.coordinates,n),e}(e,t,n);case"MultiLineString":return function(e,t,n){for(const i of t.coordinates)g(e,i,n);return e}(e,t,n);case"MultiPoint":return function(e,t,n){return g(e,t.coordinates,n),e}(e,t,n);case"MultiPolygon":return function(e,t,n){for(const i of t.coordinates){y(e,i[0],n);for(let t=1;t<i.length;t++)p(e,i[t],n)}return e}(e,t,n);case"Point":return function(e,t,n){return b(e,t.coordinates,n),e}(e,t,n);case"Polygon":return function(e,t,n){const i=t.coordinates;y(e,i[0],n);for(let s=1;s<i.length;s++)p(e,i[s],n);return e}(e,t,n)}}function y(e,t,n){const i=h(t);c(i)?g(e,i,n):m(e,i,n)}function p(e,t,n){const i=h(t);c(i)?m(e,i,n):g(e,i,n)}function g(e,t,n){for(const i of t)b(e,i,n);e.lengths.push(t.length)}function m(e,t,n){for(let i=t.length-1;i>=0;i--)b(e,t[i],n);e.lengths.push(t.length)}function b(e,t,n){const[i,s,r]=t;e.coords.push(i,s),n.hasZ&&e.coords.push(r||0)}function _(e){switch(typeof e){case"string":return"esriFieldTypeString";case"number":return"esriFieldTypeDouble";default:return"unknown"}}function I(e){if(!e)throw new i.a("geojson-layer:empty","GeoJSON data is empty");if("Feature"!==e.type&&"FeatureCollection"!==e.type)throw new i.a("geojson-layer:unsupported-geojson-object","missing or not supported GeoJSON object type",{data:e});const{crs:t}=e;if(!t)return;const n="string"==typeof t?t:"name"===t.type?t.properties.name:null,s=new RegExp(".*(CRS84H?|4326)$","i");if(!n||!s.test(n))throw new i.a("geojson-layer:unsupported-crs","unsupported GeoJSON 'crs' member",{crs:t})}function j(e,t={}){const n=d(e),i=[],s=new Set,r=new Set;let c=!1,h=Number.NEGATIVE_INFINITY,f=null,y=!1,p=void 0,{geometryType:g=null}=t,m=!1;for(;;){const{value:e,done:t}=n.next();if(t){const e=f&&1===f.length&&f[0]||null;if(e)for(const t of i)t.name===e&&(t.type="esriFieldTypeOID");return{fields:i,geometryType:g,hasZ:c,maxObjectId:Math.max(0,h),objectIdFieldName:e,objectIdFieldType:p,unknownFields:o(r)}}const{geometry:d,properties:b,id:I}=e;if((!d||(g||(g=a[d.type]),a[d.type]===g))&&(c||(c=l(u(d))),y||(y=null!=I,y&&(p=typeof I,"number"===p&&(f=Object.keys(b).filter(e=>b[e]===I)))),y&&"number"===p&&null!=I&&(h=Math.max(h,I),f.length>1?f=f.filter(e=>b[e]===I):1===f.length&&(f=b[f[0]]===I?f:[])),!m&&b)){let e=!0;for(const t in b){if(s.has(t))continue;const n=b[t];if(null==n){e=!1,r.add(t);continue}const o=_(n);"unknown"!==o?(r.delete(t),s.add(t),i.push({name:t,alias:t,type:o})):r.add(t)}m=e}}}function F(e,t){return function(e){const t=[];for(;;){const{value:n,done:i}=e.next();if(i)return t;t.push(n)}}(function*(e,t={}){const{geometryType:n,objectIdFieldName:i}=t;for(;;){const{value:o,done:d}=e.next();if(d)return;const{geometry:u,properties:l,id:c}=o;if(u&&a[u.type]!==n)continue;const h=l||{};i&&null!=c&&!h[i]&&(h[i]=c);const y=new s.a(u?f(new r.a,u,t):null,h);yield y}}(d(e),t))}},657:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return p})),n.d(t,"d",(function(){return c})),n.d(t,"e",(function(){return y}));var i=n(31),s=n(40);class r{constructor(){this.code=null,this.description=null}}class o{constructor(e){this.error=new r,this.globalId=null,this.objectId=null,this.success=!1,this.uniqueId=null,this.error.description=e}}function a(e){return new o(e)}class d{constructor(e){this.globalId=null,this.success=!0,this.objectId=this.uniqueId=e}}function u(e){return new d(e)}const l=new Set;function c(e,t,n,i,r=!1,o){l.clear();for(const d in i){const t=e.get(d);if(!t)continue;const u=i[d],c=h(t,u);if(c!==u&&o&&o.push({name:"invalid-value-type",message:"attribute value was converted to match the field type",details:{field:t,originalValue:u,sanitizedValue:c}}),l.add(t.name),t&&(r||t.editable)){const e=Object(s.u)(t,c);if(e)return a(Object(s.v)(e,t,c));n[t.name]=c}}for(const s of t)if(!l.has(s.name))return a(`missing required field "${s.name}"`);return null}function h(e,t){let n=t;return"string"==typeof t&&Object(s.q)(e)?n=parseFloat(t):null!=t&&Object(s.r)(e)&&"string"!=typeof t&&(n=String(t)),Object(s.s)(n)}let f;function y(e,t){if(!e||!Object(i.h)(t))return e;if("rings"in e||"paths"in e){if(!f)throw new TypeError("geometry engine not loaded");return f.simplify(t,e)}return e}async function p(e,t){!Object(i.h)(e)||"esriGeometryPolygon"!==t&&"esriGeometryPolyline"!==t||await async function(){return f||(f=await Promise.all([n.e(6),n.e(28)]).then(n.bind(null,713)),f)}()}},735:function(e,t,n){"use strict";n.r(t);var i=n(14),s=n(8),r=n(31),o=n(21),a=n(40),d=n(50),u=n(331),l=n(425),c=n(305),h=n(463),f=n(656),y=n(589),p=n(579),g=n(624),m=n(657);const b={hasAttachments:!1,capabilities:"query, editing, create, delete, update",useStandardizedQueries:!0,supportsCoordinatesQuantization:!0,supportsReturningQueryGeometry:!0,advancedQueryCapabilities:{supportsQueryAttachments:!1,supportsStatistics:!0,supportsPercentileStatistics:!0,supportsReturningGeometryCentroid:!0,supportsQueryWithDistance:!0,supportsDistinct:!0,supportsReturningQueryExtent:!0,supportsReturningGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQueryWithResultType:!1,supportsSqlExpression:!0,supportsDisjointSpatialRel:!0}};t.default=class{constructor(){this._queryEngine=null}destroy(){this._queryEngine&&this._queryEngine&&this._queryEngine.destroy(),this._queryEngine=this._requiredFields=this._fieldsIndex=this._createDefaultAttributes=null}async load(e){const t=[];await this._checkProjection(e.spatialReference);let n=null;e.url&&(n=(await Object(d.default)(e.url,{responseType:"json"})).data,await Object(f.c)(n));const s=Object(f.b)(n,{geometryType:e.geometryType}),o=e.fields||s.fields||[],m=null!=e.hasZ?e.hasZ:s.hasZ,_=s.geometryType,I=e.objectIdField||("number"===s.objectIdFieldType?s.objectIdFieldName:"OBJECTID")||"OBJECTID",j=e.spatialReference||r.a;let F=e.timeInfo;if(!_)throw new i.a("geojson-layer:missing-property","geometryType not set and couldn't be inferred from the provided features");if("string"===s.objectIdFieldType&&t.push({name:"geojson-layer:unsupported-id-type",message:"Feature ids are of type string and can't be honored."}),o===s.fields&&s.unknownFields.length>0&&t.push({name:"geojson-layer:unknown-field-types",message:"Some fields types couldn't be inferred from the features and were dropped",details:{unknownFields:s.unknownFields}}),I){let e=null;o.some(t=>t.name===I&&(e=t,!0))?(e.type="esriFieldTypeOID",e.editable=!1,e.nullable=!1):o.unshift({alias:I,name:I,type:"esriFieldTypeOID",editable:!1,nullable:!1})}for(const r of o){if(null==r.name&&(r.name=r.alias),null==r.alias&&(r.alias=r.name),!r.name)throw new i.a("geojson-layer:invalid-field-name","field name is missing",{field:r});if(r.name===I&&(r.type="esriFieldTypeOID"),-1===u.a.jsonValues.indexOf(r.type))throw new i.a("geojson-layer:invalid-field-type",`invalid type for field "${r.name}"`,{field:r})}const O={};this._requiredFields=[];for(const i of o)if("esriFieldTypeOID"!==i.type&&"esriFieldTypeGlobalID"!==i.type){i.editable=null==i.editable||!!i.editable,i.nullable=null==i.nullable||!!i.nullable;const e=Object(a.o)(i);i.nullable||void 0!==e?O[i.name]=e:this._requiredFields.push(i)}if(this._fieldsIndex=new c.a(o),F){if(F.startTimeField){const e=this._fieldsIndex.get(F.startTimeField);e?(F.startTimeField=e.name,e.type="esriFieldTypeDate"):F.startTimeField=null}if(F.endTimeField){const e=this._fieldsIndex.get(F.endTimeField);e?(F.endTimeField=e.name,e.type="esriFieldTypeDate"):F.endTimeField=null}if(F.trackIdField){const e=this._fieldsIndex.get(F.trackIdField);e?F.trackIdField=e.name:(F.trackIdField=null,t.push({name:"geojson-layer:invalid-timeInfo-trackIdField",message:"trackIdField is missing",details:{timeInfo:F}}))}F.startTimeField||F.endTimeField||(t.push({name:"geojson-layer:invalid-timeInfo",message:"startTimeField and endTimeField are missing",details:{timeInfo:F}}),F=null)}const x={warnings:t,featureErrors:[],layerDefinition:{...b,drawingInfo:Object(y.c)(_),templates:Object(y.b)(O),extent:null,geometryType:_,objectIdField:I,fields:o,hasZ:!!m,timeInfo:F}};this._queryEngine=new g.a({fields:o,geometryType:_,hasM:!1,hasZ:m,objectIdField:I,spatialReference:j,timeInfo:F,featureStore:new p.a({geometryType:_,hasM:!1,hasZ:m})}),this._createDefaultAttributes=Object(y.a)(O,I),this._nextObjectId=s.maxObjectId+1;const w=Object(f.a)(n,{geometryType:_,hasZ:m,objectIdFieldName:"number"===s.objectIdFieldType?I:null});if(!Object(r.c)(j,r.a))for(const i of w)i.geometry&&(i.geometry=Object(l.d)(Object(h.b)(Object(l.k)(i.geometry,_,m,!1),r.a,j)));return this._loadInitialFeatures(x,w),x}async applyEdits(e){const{spatialReference:t,geometryType:n}=this._queryEngine;return await Object(s.b)([Object(m.c)(t,n),Object(h.a)(e.adds,t),Object(h.a)(e.updates,t)]),this._applyEdits(e)}async queryFeatures(e={},t={}){return this._queryEngine.executeQuery(e,t.signal)}async queryFeatureCount(e={},t={}){return this._queryEngine.executeQueryForCount(e,t.signal)}async queryObjectIds(e={},t={}){return this._queryEngine.executeQueryForIds(e,t.signal)}async queryExtent(e={},t={}){return this._queryEngine.executeQueryForExtent(e,t.signal)}_loadInitialFeatures(e,t){const{featureStore:n,objectIdField:i}=this._queryEngine,s=[];for(const r of t){const t=this._createDefaultAttributes(),n=Object(m.d)(this._fieldsIndex,this._requiredFields,t,r.attributes,!0,e.warnings);n?e.featureErrors.push(n):(this._assignObjectId(t,r.attributes,!0),r.attributes=t,r.objectId=t[i],s.push(r))}if(n.addMany(s),e.layerDefinition.extent=this._queryEngine.fullExtent,e.layerDefinition.timeInfo){const{start:t,end:n}=this._queryEngine.timeExtent;e.layerDefinition.timeInfo.timeExtent=[t,n]}return e}_applyEdits(e){const{adds:t,updates:n,deletes:i}=e,s={addResults:[],deleteResults:[],updateResults:[],uidToObjectId:{}};if(t&&t.length&&this._applyAddEdits(s,t),n&&n.length&&this._applyUpdateEdits(s,n),i&&i.length){for(const e of i)s.deleteResults.push(Object(m.b)(e));this._queryEngine.featureStore.removeManyById(i)}return{fullExtent:this._queryEngine.fullExtent,timeExtent:this._queryEngine.timeExtent,featureEditResults:s}}_applyAddEdits(e,t){const{addResults:n}=e,{geometryType:i,hasM:s,hasZ:r,objectIdField:a,spatialReference:d,featureStore:u}=this._queryEngine,c=[];for(const l of t){if(l.geometry&&i!==Object(o.c)(l.geometry)){n.push(Object(m.a)("Incorrect geometry type."));continue}const t=this._createDefaultAttributes(),s=Object(m.d)(this._fieldsIndex,this._requiredFields,t,l.attributes);if(s)n.push(s);else{if(this._assignObjectId(t,l.attributes),l.attributes=t,null!=l.uid){const t=l.attributes[a];e.uidToObjectId[l.uid]=t}l.geometry&&(l.geometry=Object(h.b)(Object(m.e)(l.geometry,d),l.geometry.spatialReference,d)),c.push(l),n.push(Object(m.b)(l.attributes[a]))}}u.addMany(Object(l.c)([],c,i,r,s,a))}_applyUpdateEdits({updateResults:e},t){const{geometryType:n,hasM:i,hasZ:s,objectIdField:r,spatialReference:a,featureStore:d}=this._queryEngine;for(const u of t){const{attributes:t,geometry:c}=u,f=t&&t[r];if(null==f){e.push(Object(m.a)(`Identifier field ${r} missing`));continue}if(!d.has(f)){e.push(Object(m.a)(`Feature with object id ${f} missing`));continue}const y=Object(l.i)(d.getFeature(f),n,s,i);if(c){if(n!==Object(o.c)(c)){e.push(Object(m.a)("Incorrect geometry type."));continue}y.geometry=Object(h.b)(Object(m.e)(c,a),c.spatialReference,a)}if(t){const n=Object(m.d)(this._fieldsIndex,this._requiredFields,y.attributes,t);if(n){e.push(n);continue}}d.add(Object(l.a)(y,n,s,i,r)),e.push(Object(m.b)(f))}}_assignObjectId(e,t,n=!1){const i=this._queryEngine.objectIdField;n&&isFinite(t[i])?e[i]=t[i]:e[i]=this._nextObjectId++}async _checkProjection(e){try{await Object(h.a)(r.a,e)}catch{throw new i.a("geojson-layer","Projection not supported")}}}}}]);
//# sourceMappingURL=66.86dbd2c5.chunk.js.map