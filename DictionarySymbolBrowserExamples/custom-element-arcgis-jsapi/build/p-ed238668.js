import"./p-476cf7c4.js";import{U as i,bm as e,D as t,E as s,b9 as r,K as o,b as a}from"./p-dc4230e0.js";import"./p-540c739d.js";import{i as h}from"./p-f207db84.js";import{d as l}from"./p-fa146c73.js";import{l as n,b as p}from"./p-05aa0405.js";import"./p-6e5ff36c.js";import{l as d}from"./p-5e52b0f8.js";import{d as c}from"./p-536a38f2.js";import{t as u}from"./p-4cc1d148.js";import{l as m,p as y}from"./p-51852aa1.js";let v=class extends(u(d(c(m(y(n(p))))))){constructor(i){super(i),this._visibilityHandles={},this.fullExtent=void 0,this.operationalLayerType="GroupLayer",this.spatialReference=void 0,this.type="group",this._visibilityWatcher=this._visibilityWatcher.bind(this)}initialize(){this._enforceVisibility(this.visibilityMode,this.visible),this.watch("visible",this._visibleWatcher.bind(this),!0)}_writeLayers(i,e,t,s){const r=[];if(!i)return r;i.forEach((i=>{const e=l(i,s.webmap?s.webmap.getLayerJSONFromResourceInfo(i):null,s);a(e)&&e.layerType&&r.push(e)})),e.layers=r}set portalItem(i){this._set("portalItem",i)}set visibilityMode(i){const e=this._get("visibilityMode")!==i;this._set("visibilityMode",i),e&&this._enforceVisibility(i,this.visible)}load(e){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Feature Service","Feature Collection","Scene Service"]},e)),i(this)}loadAll(){return h(this,(i=>{i(this.layers)}))}layerAdded(i){i.visible&&"exclusive"===this.visibilityMode?this._turnOffOtherLayers(i):"inherited"===this.visibilityMode&&(i.visible=this.visible),this._visibilityHandles[i.uid]=i.watch("visible",this._visibilityWatcher,!0)}layerRemoved(i){const e=this._visibilityHandles[i.uid];e&&(e.remove(),delete this._visibilityHandles[i.uid]),this._enforceVisibility(this.visibilityMode,this.visible)}_turnOffOtherLayers(i){this.layers.forEach((e=>{e!==i&&(e.visible=!1)}))}_enforceVisibility(i,t){if(!e(this).initialized)return;const s=this.layers;let r=s.find((i=>i.visible));switch(i){case"exclusive":s.length&&!r&&(r=s.getItemAt(0),r.visible=!0),this._turnOffOtherLayers(r);break;case"inherited":s.forEach((i=>{i.visible=t}))}}_visibleWatcher(i){"inherited"===this.visibilityMode&&this.layers.forEach((e=>{e.visible=i}))}_visibilityWatcher(i,e,t,s){const r=s;switch(this.visibilityMode){case"exclusive":i?this._turnOffOtherLayers(r):this._isAnyLayerVisible()||(r.visible=!0);break;case"inherited":r.visible=this.visible}}_isAnyLayerVisible(){return this.layers.some((i=>i.visible))}};t([s()],v.prototype,"fullExtent",void 0),t([s({json:{read:!1,write:{ignoreOrigin:!0}}})],v.prototype,"layers",void 0),t([r("layers")],v.prototype,"_writeLayers",null),t([s({type:["GroupLayer"]})],v.prototype,"operationalLayerType",void 0),t([s({json:{origins:{"web-document":{read:!1,write:!1}}}})],v.prototype,"portalItem",null),t([s()],v.prototype,"spatialReference",void 0),t([s({json:{read:!1},readOnly:!0,value:"group"})],v.prototype,"type",void 0),t([s({type:["independent","inherited","exclusive"],value:"independent",json:{write:!0,origins:{"web-map":{read:!1,write:!1}}}})],v.prototype,"visibilityMode",null),v=t([o("esri.layers.GroupLayer")],v);var f=v;export default f;