import{D as e,E as t,K as i,L as s,C as o,J as r,aR as l,s as n,bU as u,I as d,c8 as a}from"./p-ab028778.js";var p;let h=p=class extends s{constructor(){super(...arguments),this.field=null,this.minValue=0,this.maxValue=255}clone(){return new p({field:this.field,minValue:this.minValue,maxValue:this.maxValue})}};e([t({type:String,json:{write:!0}})],h.prototype,"field",void 0),e([t({type:Number,nonNullable:!0,json:{write:!0}})],h.prototype,"minValue",void 0),e([t({type:Number,nonNullable:!0,json:{write:!0}})],h.prototype,"maxValue",void 0),h=p=e([i("esri.renderers.support.pointCloud.ColorModulation")],h);var c=h;const y=new o({pointCloudFixedSizeAlgorithm:"fixed-size",pointCloudSplatAlgorithm:"splat"});let v=class extends s{};e([t({type:y.apiValues,readOnly:!0,nonNullable:!0,json:{type:y.jsonValues,read:!1,write:y.write}})],v.prototype,"type",void 0),v=e([i("esri.renderers.support.pointCloud.PointSizeAlgorithm")],v);var w,m=v;let b=w=class extends m{constructor(){super(...arguments),this.type="fixed-size",this.size=0,this.useRealWorldSymbolSizes=null}clone(){return new w({size:this.size,useRealWorldSymbolSizes:this.useRealWorldSymbolSizes})}};e([r({pointCloudFixedSizeAlgorithm:"fixed-size"})],b.prototype,"type",void 0),e([t({type:Number,nonNullable:!0,json:{write:!0}})],b.prototype,"size",void 0),e([t({type:Boolean,json:{write:!0}})],b.prototype,"useRealWorldSymbolSizes",void 0),b=w=e([i("esri.renderers.support.pointCloud.PointSizeFixedSizeAlgorithm")],b);var j,f=b;let C=j=class extends m{constructor(){super(...arguments),this.type="splat",this.scaleFactor=1}clone(){return new j({scaleFactor:this.scaleFactor})}};e([r({pointCloudSplatAlgorithm:"splat"})],C.prototype,"type",void 0),e([t({type:Number,value:1,nonNullable:!0,json:{write:!0}})],C.prototype,"scaleFactor",void 0),C=j=e([i("esri.renderers.support.pointCloud.PointSizeSplatAlgorithm")],C);const g={key:"type",base:m,typeMap:{"fixed-size":f,splat:C}},S=l()({pointCloudClassBreaksRenderer:"point-cloud-class-breaks",pointCloudRGBRenderer:"point-cloud-rgb",pointCloudStretchRenderer:"point-cloud-stretch",pointCloudUniqueValueRenderer:"point-cloud-unique-value"});let x=class extends s{constructor(e){super(e),this.type=void 0,this.pointSizeAlgorithm=null,this.colorModulation=null,this.pointsPerInch=10}clone(){return console.warn(".clone() is not implemented for "+this.declaredClass),null}cloneProperties(){return{pointSizeAlgorithm:n(this.pointSizeAlgorithm),colorModulation:n(this.colorModulation),pointsPerInch:n(this.pointsPerInch)}}};e([t({type:S.apiValues,readOnly:!0,nonNullable:!0,json:{type:S.jsonValues,read:!1,write:S.write}})],x.prototype,"type",void 0),e([t({types:g,json:{write:!0}})],x.prototype,"pointSizeAlgorithm",void 0),e([t({type:c,json:{write:!0}})],x.prototype,"colorModulation",void 0),e([t({json:{write:!0},nonNullable:!0,type:Number})],x.prototype,"pointsPerInch",void 0),x=e([i("esri.renderers.PointCloudRenderer")],x),(x||(x={})).fieldTransformTypeKebabDict=new o({none:"none",lowFourBit:"low-four-bit",highFourBit:"high-four-bit",absoluteValue:"absolute-value",moduloTen:"modulo-ten"});var V,z=x;let N=V=class extends s{constructor(){super(...arguments),this.description=null,this.label=null,this.minValue=0,this.maxValue=0,this.color=null}clone(){return new V({description:this.description,label:this.label,minValue:this.minValue,maxValue:this.maxValue,color:n(this.color)})}};e([t({type:String,json:{write:!0}})],N.prototype,"description",void 0),e([t({type:String,json:{write:!0}})],N.prototype,"label",void 0),e([t({type:Number,json:{read:{source:"classMinValue"},write:{target:"classMinValue"}}})],N.prototype,"minValue",void 0),e([t({type:Number,json:{read:{source:"classMaxValue"},write:{target:"classMaxValue"}}})],N.prototype,"maxValue",void 0),e([t({type:u,json:{type:[d],write:!0}})],N.prototype,"color",void 0),N=V=e([i("esri.renderers.support.pointCloud.ColorClassBreakInfo")],N);var R,T=N;let k=R=class extends z{constructor(e){super(e),this.type="point-cloud-class-breaks",this.field=null,this.legendOptions=null,this.fieldTransformType=null,this.colorClassBreakInfos=null}clone(){return new R({...this.cloneProperties(),field:this.field,fieldTransformType:this.fieldTransformType,colorClassBreakInfos:n(this.colorClassBreakInfos),legendOptions:n(this.legendOptions)})}};e([r({pointCloudClassBreaksRenderer:"point-cloud-class-breaks"})],k.prototype,"type",void 0),e([t({json:{write:!0},type:String})],k.prototype,"field",void 0),e([t({type:a,json:{write:!0}})],k.prototype,"legendOptions",void 0),e([t({type:z.fieldTransformTypeKebabDict.apiValues,json:{type:z.fieldTransformTypeKebabDict.jsonValues,read:z.fieldTransformTypeKebabDict.read,write:z.fieldTransformTypeKebabDict.write}})],k.prototype,"fieldTransformType",void 0),e([t({type:[T],json:{write:!0}})],k.prototype,"colorClassBreakInfos",void 0),k=R=e([i("esri.renderers.PointCloudClassBreaksRenderer")],k);var B,I=k;let P=B=class extends s{constructor(){super(...arguments),this.label=null,this.value=0,this.color=null}clone(){return new B({label:this.label,value:this.value,color:n(this.color)})}};e([t({type:String,json:{write:!0}})],P.prototype,"label",void 0),e([t({type:Number,nonNullable:!0,json:{write:!0}})],P.prototype,"value",void 0),e([t({type:u,json:{type:[d],write:!0}})],P.prototype,"color",void 0),P=B=e([i("esri.renderers.support.pointCloud.StopInfo")],P);var q,A=P;let M=q=class extends z{constructor(e){super(e),this.type="point-cloud-stretch",this.field=null,this.legendOptions=null,this.fieldTransformType=null,this.stops=null}clone(){return new q({...this.cloneProperties(),field:n(this.field),fieldTransformType:n(this.fieldTransformType),stops:n(this.stops),legendOptions:n(this.legendOptions)})}};e([r({pointCloudStretchRenderer:"point-cloud-stretch"})],M.prototype,"type",void 0),e([t({json:{write:!0},type:String})],M.prototype,"field",void 0),e([t({type:a,json:{write:!0}})],M.prototype,"legendOptions",void 0),e([t({type:z.fieldTransformTypeKebabDict.apiValues,json:{type:z.fieldTransformTypeKebabDict.jsonValues,read:z.fieldTransformTypeKebabDict.read,write:z.fieldTransformTypeKebabDict.write}})],M.prototype,"fieldTransformType",void 0),e([t({type:[A],json:{write:!0}})],M.prototype,"stops",void 0),M=q=e([i("esri.renderers.PointCloudStretchRenderer")],M);var O,F=M;let U=O=class extends s{constructor(){super(...arguments),this.description=null,this.label=null,this.values=null,this.color=null}clone(){return new O({description:this.description,label:this.label,values:n(this.values),color:n(this.color)})}};e([t({type:String,json:{write:!0}})],U.prototype,"description",void 0),e([t({type:String,json:{write:!0}})],U.prototype,"label",void 0),e([t({type:[String],json:{write:!0}})],U.prototype,"values",void 0),e([t({type:u,json:{type:[d],write:!0}})],U.prototype,"color",void 0),U=O=e([i("esri.renderers.support.pointCloud.ColorUniqueValueInfo")],U);var W,D=U;let E=W=class extends z{constructor(e){super(e),this.type="point-cloud-unique-value",this.field=null,this.fieldTransformType=null,this.colorUniqueValueInfos=null,this.legendOptions=null}clone(){return new W({...this.cloneProperties(),field:n(this.field),fieldTransformType:n(this.fieldTransformType),colorUniqueValueInfos:n(this.colorUniqueValueInfos),legendOptions:n(this.legendOptions)})}};e([r({pointCloudUniqueValueRenderer:"point-cloud-unique-value"})],E.prototype,"type",void 0),e([t({json:{write:!0},type:String})],E.prototype,"field",void 0),e([t({type:z.fieldTransformTypeKebabDict.apiValues,json:{type:z.fieldTransformTypeKebabDict.jsonValues,read:z.fieldTransformTypeKebabDict.read,write:z.fieldTransformTypeKebabDict.write}})],E.prototype,"fieldTransformType",void 0),e([t({type:[D],json:{write:!0}})],E.prototype,"colorUniqueValueInfos",void 0),e([t({type:a,json:{write:!0}})],E.prototype,"legendOptions",void 0),E=W=e([i("esri.renderers.PointCloudUniqueValueRenderer")],E);var G=E;export{G as a,I as b,F as c,z as d}