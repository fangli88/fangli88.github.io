import{D as e,E as t,K as s}from"./p-dc4230e0.js";import{d as r}from"./p-6c319af5.js";let l=class extends r{initialize(){}destroy(){}get supportsTileUpdates(){return!1}get spatialReference(){const e=this.get("tileStore.tileScheme.spatialReference");return e&&e.toJSON()||null}};e([t({readOnly:!0})],l.prototype,"supportsTileUpdates",null),e([t({constructOnly:!0})],l.prototype,"remoteClient",void 0),e([t({constructOnly:!0})],l.prototype,"service",void 0),e([t({dependsOn:["tileStore.tileScheme.spatialReference"]})],l.prototype,"spatialReference",null),e([t({constructOnly:!0})],l.prototype,"tileInfo",void 0),e([t({constructOnly:!0})],l.prototype,"tileStore",void 0),l=e([s("esri.views.2d.layers.features.processors.BaseProcessor")],l);var i=l;export{i as p}