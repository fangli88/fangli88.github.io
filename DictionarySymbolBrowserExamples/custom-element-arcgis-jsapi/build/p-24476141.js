import{D as t,E as e,b9 as i,K as s,bV as r,L as o,s as n,y as a}from"./p-dc4230e0.js";import{D as d}from"./p-aedb886e.js";var h;let l=h=class extends o{constructor(t){super(t),this.attachmentTypes=null,this.attachmentsWhere=null,this.keywords=null,this.globalIds=null,this.name=null,this.num=null,this.objectIds=null,this.returnMetadata=!1,this.size=null,this.start=null,this.where=null}writeStart(t,e){e.resultOffset=this.start,e.resultRecordCount=this.num||10}clone(){return new h(n({attachmentTypes:this.attachmentTypes,attachmentsWhere:this.attachmentsWhere,keywords:this.keywords,where:this.where,globalIds:this.globalIds,name:this.name,num:this.num,objectIds:this.objectIds,returnMetadata:this.returnMetadata,size:this.size,start:this.start}))}};t([e({type:[String],json:{write:!0}})],l.prototype,"attachmentTypes",void 0),t([e({type:String,json:{read:{source:"attachmentsDefinitionExpression"},write:{target:"attachmentsDefinitionExpression"}}})],l.prototype,"attachmentsWhere",void 0),t([e({type:[String],json:{write:!0}})],l.prototype,"keywords",void 0),t([e({type:[Number],json:{write:!0}})],l.prototype,"globalIds",void 0),t([e({json:{write:!0}})],l.prototype,"name",void 0),t([e({type:Number,json:{read:{source:"resultRecordCount"}}})],l.prototype,"num",void 0),t([e({type:[Number],json:{write:!0}})],l.prototype,"objectIds",void 0),t([e({type:Boolean,json:{default:!1,write:!0}})],l.prototype,"returnMetadata",void 0),t([e({type:[Number],json:{write:!0}})],l.prototype,"size",void 0),t([e({type:Number,json:{read:{source:"resultOffset"}}})],l.prototype,"start",void 0),t([i("start"),i("num")],l.prototype,"writeStart",null),t([e({type:String,json:{read:{source:"definitionExpression"},write:{target:"definitionExpression"}}})],l.prototype,"where",void 0),l=h=t([s("esri.tasks.support.AttachmentQuery")],l),l.from=r(l);var u,p=l;let c=u=class extends o{constructor(t){super(t),this.dynamicDataSource=void 0,this.gdbVersion=null,this.geometryPrecision=void 0,this.historicMoment=null,this.maxAllowableOffset=void 0,this.objectIds=null,this.orderByFields=null,this.outFields=null,this.outSpatialReference=null,this.relationshipId=void 0,this.start=void 0,this.num=void 0,this.returnGeometry=!1,this.returnM=void 0,this.returnZ=void 0,this.where=null}_writeHistoricMoment(t,e){e.historicMoment=t&&t.getTime()}writeStart(t,e){e.resultOffset=this.start,e.resultRecordCount=this.num||10,e.where="1=1"}clone(){return new u(n({dynamicDataSource:this.dynamicDataSource,gdbVersion:this.gdbVersion,geometryPrecision:this.geometryPrecision,historicMoment:this.historicMoment&&new Date(this.historicMoment.getTime()),maxAllowableOffset:this.maxAllowableOffset,objectIds:this.objectIds,orderByFields:this.orderByFields,outFields:this.outFields,outSpatialReference:this.outSpatialReference,relationshipId:this.relationshipId,start:this.start,num:this.num,returnGeometry:this.returnGeometry,where:this.where,returnZ:this.returnZ,returnM:this.returnM}))}};t([e({type:d,json:{write:!0}})],c.prototype,"dynamicDataSource",void 0),t([e({type:String,json:{write:!0}})],c.prototype,"gdbVersion",void 0),t([e({type:Number,json:{write:!0}})],c.prototype,"geometryPrecision",void 0),t([e({type:Date})],c.prototype,"historicMoment",void 0),t([i("historicMoment")],c.prototype,"_writeHistoricMoment",null),t([e({type:Number,json:{write:!0}})],c.prototype,"maxAllowableOffset",void 0),t([e({type:[Number],json:{write:!0}})],c.prototype,"objectIds",void 0),t([e({type:[String],json:{write:!0}})],c.prototype,"orderByFields",void 0),t([e({type:[String],json:{write:!0}})],c.prototype,"outFields",void 0),t([e({type:a,json:{read:{source:"outSR"},write:{target:"outSR"}}})],c.prototype,"outSpatialReference",void 0),t([e({json:{write:!0}})],c.prototype,"relationshipId",void 0),t([e({type:Number,json:{read:{source:"resultOffset"}}})],c.prototype,"start",void 0),t([i("start"),i("num")],c.prototype,"writeStart",null),t([e({type:Number,json:{read:{source:"resultRecordCount"}}})],c.prototype,"num",void 0),t([e({json:{write:!0}})],c.prototype,"returnGeometry",void 0),t([e({type:Boolean,json:{write:{overridePolicy:t=>({enabled:t})}}})],c.prototype,"returnM",void 0),t([e({type:Boolean,json:{write:{overridePolicy:t=>({enabled:t})}}})],c.prototype,"returnZ",void 0),t([e({type:String,json:{read:{source:"definitionExpression"},write:{target:"definitionExpression"}}})],c.prototype,"where",void 0),c=u=t([s("esri.tasks.support.RelationshipQuery")],c),c.from=r(c);var m=c;export{m as c,p as u}