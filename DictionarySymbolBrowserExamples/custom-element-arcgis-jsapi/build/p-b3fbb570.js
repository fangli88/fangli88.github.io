import{o}from"./p-725a886f.js";function f(f,r,t){if(!t||!t.features||!t.hasZ)return;const n=o(t.geometryType,r,f.outSpatialReference);if(n)for(const o of t.features)n(o.geometry)}export{f as t}