import{s as t,k as e}from"./p-dc4230e0.js";import{l as r,o as n,S as i}from"./p-311069c2.js";function o(t){return{renderer:{type:"simple",symbol:"esriGeometryPoint"===t||"esriGeometryMultipoint"===t?r:"esriGeometryPolyline"===t?n:i}}}function s(t,r){if(e("csp-restrictions"))return()=>({[r]:null,...t});try{let e=`this.${r} = null;`;for(const r in t)e+=`this${r.indexOf(".")?`["${r}"]`:`.${r}`} = ${JSON.stringify(t[r])};`;const n=new Function(e);return()=>new n}catch(e){return()=>({[r]:null,...t})}}function u(e={}){return[{name:"New Feature",description:"",prototype:{attributes:t(e)}}]}export{o as i,s,u}