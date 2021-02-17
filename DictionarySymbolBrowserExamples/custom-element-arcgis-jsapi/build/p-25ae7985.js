import{D as e,E as t,K as i,L as l,F as n,b9 as r,s,cb as a}from"./p-dc4230e0.js";import{r as o,i as u,m as d}from"./p-6e5ff36c.js";var m;let v=m=class extends l{constructor(e){super(e),this.value=0,this.unit="milliseconds"}toMilliseconds(){return this.value*u[this.unit]}clone(){return new m({value:this.value,unit:this.unit})}};e([t({type:Number,json:{write:!0},nonNullable:!0})],v.prototype,"value",void 0),e([t({type:o.apiValues,json:{type:o.jsonValues,read:o.read,write:o.write},nonNullable:!0})],v.prototype,"unit",void 0),v=m=e([i("esri.TimeInterval")],v);var c,p=v;let w=c=class extends l{constructor(e){super(e),this.respectsDaylightSaving=!1,this.timezone=null}readRespectsDaylightSaving(e,t){return void 0!==t.respectsDaylightSaving?t.respectsDaylightSaving:void 0!==t.respectDaylightSaving&&t.respectDaylightSaving}clone(){const{respectsDaylightSaving:e,timezone:t}=this;return new c({respectsDaylightSaving:e,timezone:t})}};e([t({type:Boolean,json:{write:!0}})],w.prototype,"respectsDaylightSaving",void 0),e([n("respectsDaylightSaving",["respectsDaylightSaving","respectDaylightSaving"])],w.prototype,"readRespectsDaylightSaving",null),e([t({type:String,json:{read:{source:"timeZone"},write:{target:"timeZone"}}})],w.prototype,"timezone",void 0),w=c=e([i("esri.layers.support.TimeReference")],w);var h,f=w;let y=h=class extends l{constructor(e){super(e),this.cumulative=!1,this.endField=null,this.fullTimeExtent=null,this.hasLiveData=!1,this.interval=null,this.startField=null,this.timeReference=null,this.trackIdField=null,this.useTime=!0}readFullTimeExtent(e,t){if(!t.timeExtent||!Array.isArray(t.timeExtent)||2!==t.timeExtent.length)return null;const i=new Date(t.timeExtent[0]),l=new Date(t.timeExtent[1]);return new d({start:i,end:l})}writeFullTimeExtent(e,t){t.timeExtent=e&&e.start&&e.end?[e.start.getTime(),e.end.getTime()]:null}readInterval(e,t){return t.timeInterval&&t.timeIntervalUnits?new p({value:t.timeInterval,unit:o.fromJSON(t.timeIntervalUnits)}):t.defaultTimeInterval&&t.defaultTimeIntervalUnits?new p({value:t.defaultTimeInterval,unit:o.fromJSON(t.defaultTimeIntervalUnits)}):null}writeInterval(e,t){if(e){const i=e.toJSON();t.timeInterval=i.value,t.timeIntervalUnits=i.unit}else t.timeInterval=null,t.timeIntervalUnits=null}clone(){const{cumulative:e,endField:t,hasLiveData:i,interval:l,startField:n,timeReference:r,fullTimeExtent:a,trackIdField:o,useTime:u}=this;return new h({cumulative:e,endField:t,hasLiveData:i,interval:l,startField:n,timeReference:s(r),fullTimeExtent:s(a),trackIdField:o,useTime:u})}};e([t({type:Boolean,json:{read:{source:"exportOptions.timeDataCumulative"},write:{target:"exportOptions.timeDataCumulative"}}})],y.prototype,"cumulative",void 0),e([t({type:String,json:{read:{source:"endTimeField"},write:{target:"endTimeField",allowNull:!0}}})],y.prototype,"endField",void 0),e([t({type:d,json:{write:{enabled:!0,allowNull:!0}}})],y.prototype,"fullTimeExtent",void 0),e([n("fullTimeExtent",["timeExtent"])],y.prototype,"readFullTimeExtent",null),e([r("fullTimeExtent")],y.prototype,"writeFullTimeExtent",null),e([t({type:Boolean,json:{write:!0}})],y.prototype,"hasLiveData",void 0),e([t({type:p,json:{write:{enabled:!0,allowNull:!0}}})],y.prototype,"interval",void 0),e([n("interval",["timeInterval","timeIntervalUnits","defaultTimeInterval","defaultTimeIntervalUnits"])],y.prototype,"readInterval",null),e([r("interval")],y.prototype,"writeInterval",null),e([t({type:String,json:{read:{source:"startTimeField"},write:{target:"startTimeField",allowNull:!0}}})],y.prototype,"startField",void 0),e([t({type:f,json:{write:{enabled:!0,allowNull:!0}}})],y.prototype,"timeReference",void 0),e([t({type:String,json:{write:{enabled:!0,allowNull:!0}}})],y.prototype,"trackIdField",void 0),e([t({type:Boolean,json:{read:{source:"exportOptions.useTime"},write:{target:"exportOptions.useTime"}}})],y.prototype,"useTime",void 0),y=h=e([i("esri.layers.support.TimeInfo")],y);var g=y;const T=l=>{let r=class extends l{constructor(){super(...arguments),this.timeExtent=null,this.timeOffset=null,this.useViewTime=!0}readOffset(e,t){const i=t.timeInfo.exportOptions;if(!i)return null;const l=i.timeOffset,n=o.fromJSON(i.timeOffsetUnits);return l&&n?new p({value:l,unit:n}):null}set timeInfo(e){a(e,this.fields),this._set("timeInfo",e)}};return e([t({type:d,json:{write:!1}})],r.prototype,"timeExtent",void 0),e([t({type:p})],r.prototype,"timeOffset",void 0),e([n("service","timeOffset",["timeInfo.exportOptions"])],r.prototype,"readOffset",null),e([t({value:null,type:g,json:{write:!0,origins:{"web-document":{read:!1,write:!1}}}})],r.prototype,"timeInfo",null),e([t({type:Boolean,json:{read:{source:"timeAnimation"},write:{target:"timeAnimation"},origins:{"web-scene":{read:!1,write:!1}}}})],r.prototype,"useViewTime",void 0),r=e([i("esri.layers.mixins.TemporalLayer")],r),r};export{g as c,T as f}