import{D as e,E as l,F as a,y as i,K as r}from"./p-dc4230e0.js";import{r as s,L as n}from"./p-389b939f.js";const t=t=>{let c=class extends t{constructor(){super(...arguments),this.copyright=null,this.minScale=0,this.maxScale=0,this.spatialReference=null,this.tileInfo=null,this.tilemapCache=null}readMinScale(e,l){return null!=l.minLOD&&null!=l.maxLOD?e:0}readMaxScale(e,l){return null!=l.minLOD&&null!=l.maxLOD?e:0}get supportsBlankTile(){return this.version>=10.2}readTilemapCache(e,l){return l.capabilities&&l.capabilities.indexOf("Tilemap")>-1?new n({layer:this}):null}};return e([l({json:{read:{source:"copyrightText"}}})],c.prototype,"copyright",void 0),e([l()],c.prototype,"minScale",void 0),e([a("service","minScale")],c.prototype,"readMinScale",null),e([l()],c.prototype,"maxScale",void 0),e([a("service","maxScale")],c.prototype,"readMaxScale",null),e([l({type:i})],c.prototype,"spatialReference",void 0),e([l({readOnly:!0,dependsOn:["version"]})],c.prototype,"supportsBlankTile",null),e([l(s)],c.prototype,"tileInfo",void 0),e([l()],c.prototype,"tilemapCache",void 0),e([a("service","tilemapCache",["capabilities"])],c.prototype,"readTilemapCache",null),e([l()],c.prototype,"version",void 0),c=e([r("esri.layers.mixins.ArcGISCachedService")],c),c};export{t as a}