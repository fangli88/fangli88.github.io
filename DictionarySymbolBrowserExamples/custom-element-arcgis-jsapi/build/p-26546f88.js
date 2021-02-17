import{D as e,E as t,I as s,K as i,L as r,C as l,w as n,F as o,b9 as a,y as c,bJ as h,bK as u,bL as p,bM as d,bN as f,bh as v}from"./p-dc4230e0.js";import{t as y}from"./p-7fc65112.js";var w;let m=w=class extends r{constructor(e){super(e),this.level=0,this.levelValue=null,this.resolution=0,this.scale=0}clone(){return new w({level:this.level,levelValue:this.levelValue,resolution:this.resolution,scale:this.scale})}};e([t({type:s,json:{write:!0}})],m.prototype,"level",void 0),e([t({type:String,json:{write:!0}})],m.prototype,"levelValue",void 0),e([t({type:Number,json:{write:!0}})],m.prototype,"resolution",void 0),e([t({type:Number,json:{write:!0}})],m.prototype,"scale",void 0),m=w=e([i("esri.layers.support.LOD")],m);var g,b=m;const M=new l({PNG:"png",PNG8:"png8",PNG24:"png24",PNG32:"png32",JPEG:"jpg",JPG:"jpg",DIB:"dib",TIFF:"tiff",EMF:"emf",PS:"ps",PDF:"pdf",GIF:"gif",SVG:"svg",SVGZ:"svgz",Mixed:"mixed",MIXED:"mixed",LERC:"lerc",LERC2D:"lerc2d",RAW:"raw",pbf:"pbf"});let S=g=class extends r{constructor(e){super(e),this.dpi=96,this.format=null,this.origin=null,this.minScale=0,this.maxScale=0,this.size=null,this.spatialReference=null}static create(e={size:256,spatialReference:c.WebMercator}){const t=e.resolutionFactor||1,s=e.scales,i=e.size||256,r=e.spatialReference||c.WebMercator;if(!h(r)){const e=[];if(s)for(let t=0;t<s.length;t++){const i=s[t];e.push({level:t,scale:i,resolution:i})}else{let t=5e-4;for(let s=23;s>=0;s--)e.unshift({level:s,scale:t,resolution:t}),t*=2}return new g({dpi:96,lods:e,origin:new n(0,0,r),size:[i,i],spatialReference:r})}const l=v(r),o=new n(e.origin?{x:e.origin.x,y:e.origin.y,spatialReference:r}:l?{x:l.origin[0],y:l.origin[1],spatialReference:r}:{x:0,y:0,spatialReference:r}),a=1/(39.37*u(r)*96),d=[];if(s)for(let e=0;e<s.length;e++){const t=s[e];d.push({level:e,scale:t,resolution:t*a})}else{let e=p(r)?512/i*591657527.5917094:256/i*591657527.591555;const s=Math.ceil(24/t);d.push({level:0,scale:e,resolution:e*a});for(let i=1;i<s;i++){const s=e/Math.pow(2,t);d.push({level:i,scale:s,resolution:s*a}),e=s}}return new g({dpi:96,lods:d,origin:o,size:[i,i],spatialReference:r})}get isWrappable(){const{spatialReference:e,origin:t}=this;if(e&&t){const s=v(e);return e.isWrappable&&Math.abs(s.origin[0]-t.x)<=s.dx}return!1}readOrigin(e,t){return n.fromJSON({spatialReference:t.spatialReference,...e})}set lods(e){let t=0,s=0;const i=[];this._levelToLOD={},e&&(t=-1/0,s=1/0,e.forEach((e=>{i.push(e.scale),t=e.scale>t?e.scale:t,s=e.scale<s?e.scale:s,this._levelToLOD[e.level]=e}))),this._set("scales",i),this._set("minScale",t),this._set("maxScale",s),this._set("lods",e),this._initializeUpsampleLevels()}readSize(e,t){return[t.cols,t.rows]}writeSize(e,t){t.cols=e[0],t.rows=e[0]}zoomToScale(e){const t=this.scales;if(e<=0)return t[0];if(e>=t.length)return t[t.length-1];{const s=Math.round(e-.5),i=Math.round(e);return t[i]+(i-e)*(t[s]-t[i])}}scaleToZoom(e){const t=this.scales,s=t.length-1;let i=0;for(;i<s;i++){const s=t[i],r=t[i+1];if(s<=e)return i;if(r===e)return i+1;if(s>e&&r<e)return i+1-(e-r)/(s-r)}return i}snapScale(e,t=.95){const s=this.scaleToZoom(e);return s%Math.floor(s)>=t?this.zoomToScale(Math.ceil(s)):this.zoomToScale(Math.floor(s))}tileAt(e,t,s,i){const r=this.lodAt(e);if(!r)return null;let l,n;if("number"==typeof t)l=t,n=s;else if(d(t.spatialReference,this.spatialReference))l=t.x,n=t.y,i=s;else{const e=f(t,this.spatialReference);if(!e)return null;l=e.x,n=e.y,i=s}const o=r.resolution*this.size[0],a=r.resolution*this.size[1];return i||(i={id:null,level:0,row:0,col:0,extent:y()}),i.level=e,i.row=Math.floor((this.origin.y-n)/a+.001),i.col=Math.floor((l-this.origin.x)/o+.001),this.updateTileInfo(i),i}updateTileInfo(e){const t=this.lodAt(e.level);if(!t)return;const s=t.resolution*this.size[0],i=t.resolution*this.size[1];e.id=`${e.level}/${e.row}/${e.col}`,e.extent||(e.extent=y()),e.extent[0]=this.origin.x+e.col*s,e.extent[1]=this.origin.y-(e.row+1)*i,e.extent[2]=e.extent[0]+s,e.extent[3]=e.extent[1]+i}upsampleTile(e){const t=this._upsampleLevels[e.level];return!(!t||-1===t.parentLevel||(e.level=t.parentLevel,e.row=Math.floor(e.row/t.factor+.001),e.col=Math.floor(e.col/t.factor+.001),this.updateTileInfo(e),0))}getTileBounds(e,t){const{resolution:s}=this.lodAt(t.level),i=s*this.size[0],r=s*this.size[1];return e[0]=this.origin.x+t.col*i,e[1]=this.origin.y-(t.row+1)*r,e[2]=e[0]+i,e[3]=e[1]+r,e}lodAt(e){return this._levelToLOD&&this._levelToLOD[e]||null}clone(){return g.fromJSON(this.write({}))}_initializeUpsampleLevels(){const e=this.lods;this._upsampleLevels=[];let t=null;for(let s=0;s<e.length;s++){const i=e[s];this._upsampleLevels[i.level]={parentLevel:t?t.level:-1,factor:t?t.resolution/i.resolution:0},t=i}}};e([t({type:Number,json:{write:!0}})],S.prototype,"compressionQuality",void 0),e([t({type:Number,json:{write:!0}})],S.prototype,"dpi",void 0),e([t({type:String,json:{read:M.read,write:M.write,origins:{"web-scene":{read:!1,write:!1}}}})],S.prototype,"format",void 0),e([t({readOnly:!0,dependsOn:["spatialReference","origin"]})],S.prototype,"isWrappable",null),e([t({type:n,json:{write:!0}})],S.prototype,"origin",void 0),e([o("origin")],S.prototype,"readOrigin",null),e([t({type:[b],value:null,json:{write:!0}})],S.prototype,"lods",null),e([t({readOnly:!0})],S.prototype,"minScale",void 0),e([t({readOnly:!0})],S.prototype,"maxScale",void 0),e([t({readOnly:!0})],S.prototype,"scales",void 0),e([t({cast:e=>Array.isArray(e)?e:"number"==typeof e?[e,e]:[256,256]})],S.prototype,"size",void 0),e([o("size",["rows","cols"])],S.prototype,"readSize",null),e([a("size",{cols:{type:s},rows:{type:s}})],S.prototype,"writeSize",null),e([t({type:c,json:{write:!0}})],S.prototype,"spatialReference",void 0),S=g=e([i("esri.layers.support.TileInfo")],S);var j=S;export{b as i,j as x}