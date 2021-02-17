import"./p-476cf7c4.js";import{l as t,m as s,i,ap as e,b as r}from"./p-dc4230e0.js";import"./p-643e1e47.js";import"./p-66f366a9.js";import"./p-ebb65ba7.js";import"./p-78c83631.js";import"./p-43d5e67f.js";import"./p-7b4a37d3.js";import"./p-544c9aeb.js";import"./p-098cc742.js";import"./p-365c5902.js";import"./p-76e49c46.js";import"./p-00eed204.js";import"./p-b415e09b.js";import"./p-6e5ff36c.js";import"./p-6a7ee25c.js";import{t as p}from"./p-7fc65112.js";import"./p-26546f88.js";import"./p-5f01bb6f.js";import{R as o}from"./p-aedb886e.js";import"./p-78ce4926.js";import"./p-eb53cb9f.js";import"./p-dfd483d8.js";import"./p-a1a69fdc.js";import"./p-1f2c53c6.js";import"./p-725a886f.js";import"./p-b3fbb570.js";import"./p-0e87baef.js";import"./p-80a59d87.js";import"./p-90bfedb8.js";import"./p-02a4b6c8.js";import"./p-8f2b0eee.js";import"./p-f66098c1.js";import"./p-364b7145.js";import{W as a,Y as n,n as h}from"./p-592ab3f4.js";import"./p-3db2569b.js";import"./p-a6dff060.js";import"./p-c855175e.js";import"./p-f2688ff7.js";import"./p-6c319af5.js";import{d as m}from"./p-4ff94bea.js";import"./p-28285148.js";import"./p-5dd47a31.js";import"./p-42ae9f69.js";import"./p-f6aca36e.js";const c=t.getLogger("esri.views.2d.layers.features.support.whereUtils"),l={getAttribute:(t,s)=>t.field(s)};async function f(t,i){const e=await import("./p-544c9aeb.js");try{const r=e.WhereClause.create(t,i);if(!r.isStandardized){const t=new s("mapview - bad input","Unable to apply filter's definition expression, as expression is not standardized.",r);c.error(t)}return t=>{const s=t.readArcadeFeature();return r.testFeature(s,l)}}catch(s){return c.warn("mapview-bad-where-clause","Encountered an error when evaluating where clause",t),()=>!0}}const j=t.getLogger("esri.views.2d.layers.features.controllers.FeatureFilter");export default class{constructor(t){this._geometryBounds=p(),this._idToVisibility=new Map,this._serviceInfo=t}get hash(){return this._hash}check(t){return this._applyFilter(t)}clear(){const t=this._resetAllHiddenIds();return this.update(),{show:t,hide:[]}}invalidate(){this._idToVisibility.forEach(((t,s)=>{this._idToVisibility.set(s,0)}))}setKnownIds(t){for(const s of t)this._idToVisibility.set(s,1)}setTrue(t){const s=[],i=[],e=new Set(t);return this._idToVisibility.forEach(((t,r)=>{const p=!!(1&this._idToVisibility.get(r)),o=e.has(r);!p&&o?s.push(r):p&&!o&&i.push(r),this._idToVisibility.set(r,o?3:0)})),{show:s,hide:i}}createQuery(){const{geometry:t,spatialRel:s,where:i,timeExtent:e,objectIds:r}=this;return o.fromJSON({geometry:t,spatialRel:s,where:i,timeExtent:e,objectIds:r})}async update(t,s){this._hash=JSON.stringify(t);const e=await a(t,null,s);await i([this._setGeometryFilter(e),this._setIdFilter(e),this._setAttributeFilter(e),this._setTimeFilter(e)])}async _setAttributeFilter(t){if(!t||!t.where)return this._clause=null,void(this.where=null);this._clause=await f(t.where,this._serviceInfo.fieldsIndex),this.where=t.where}_setIdFilter(t){this._idsToShow=t&&t.objectIds&&new Set(t.objectIds),this._idsToHide=t&&t.hiddenIds&&new Set(t.hiddenIds),this.objectIds=t&&t.objectIds}async _setGeometryFilter(t){if(!t||!t.geometry)return this._spatialQueryOperator=null,this.geometry=null,void(this.spatialRel=null);const s=t.geometry,i=t.spatialRel||"esriSpatialRelIntersects",r=await n(i,s,this._serviceInfo.geometryType,this._serviceInfo.hasZ,this._serviceInfo.hasM);e(this._geometryBounds,s),this._spatialQueryOperator=r,this.geometry=s,this.spatialRel=i}_setTimeFilter(t){if(this.timeExtent=this._timeOperator=null,t&&t.timeExtent)if(this._serviceInfo.timeInfo)this.timeExtent=t.timeExtent,this._timeOperator=h(this._serviceInfo.timeInfo,t.timeExtent,m);else{const i=new s("feature-layer-view:time-filter-not-available","Unable to apply time filter, as layer doesn't have time metadata.",t.timeExtent);j.error(i)}}_applyFilter(t){return this._filterByGeometry(t)&&this._filterById(t)&&this._filterByTime(t)&&this._filterByExpression(t)}_filterByExpression(t){return!this.where||this._clause(t)}_filterById(t){return(!this._idsToHide||!this._idsToHide.size||!this._idsToHide.has(t.getObjectId()))&&(!this._idsToShow||!this._idsToShow.size||this._idsToShow.has(t.getObjectId()))}_filterByGeometry(t){if(!this.geometry)return!0;const s=t.readHydratedGeometry();return!!s&&this._spatialQueryOperator(s)}_filterByTime(t){return!r(this._timeOperator)||this._timeOperator(t)}_resetAllHiddenIds(){const t=[];return this._idToVisibility.forEach(((s,i)=>{1&s||(this._idToVisibility.set(i,1),t.push(i))})),t}}