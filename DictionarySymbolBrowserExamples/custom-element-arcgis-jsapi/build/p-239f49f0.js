import"./p-476cf7c4.js";import{a9 as e,m as t}from"./p-dc4230e0.js";let s;function r(r,o={}){let n=o.responseType;n?"json"!==n&&"text"!==n&&"blob"!==n&&"array-buffer"!==n&&(n="text"):n="json";const a=o&&o.signal;return delete o.signal,e.invokeStaticMessage("request",{url:r,options:o},{signal:a}).then((e=>{const a=e.data;let l,u,c,i;if(a&&!("json"!==n&&"text"!==n&&"blob"!==n||(l=new Blob([a]),"json"!==n&&"text"!==n||(s||(s=new FileReaderSync),u=s.readAsText(l),"json"!==n)))){try{c=JSON.parse(u||null)}catch(e){const s={...e,url:r,requestOptions:o};throw new t("request:server",e.message,s)}if(c.error){const e={...c.error,url:r,requestOptions:o};throw new t("request:server",c.error.message,e)}}switch(n){case"json":i=c;break;case"text":i=u;break;case"blob":i=l;break;default:i=a}return{data:i,requestOptions:o,ssl:e.ssl,url:r}}))}export{r as execute}