import{C as s,D as e,E as r,K as o,L as t}from"./p-ab028778.js";const i=new s({esriJobMessageTypeInformative:"informative",esriJobMessageTypeProcessDefinition:"process-definition",esriJobMessageTypeProcessStart:"process-start",esriJobMessageTypeProcessStop:"process-stop",esriJobMessageTypeWarning:"warning",esriJobMessageTypeError:"error",esriJobMessageTypeEmpty:"empty",esriJobMessageTypeAbort:"abort"});let a=class extends t{constructor(s){super(s),this.description=null,this.type=null}};e([r({type:String,json:{write:!0}})],a.prototype,"description",void 0),e([r({type:String,json:{read:i.read,write:i.write}})],a.prototype,"type",void 0),a=e([o("esri.tasks.support.GPMessage")],a);var p=a;export{p as a}