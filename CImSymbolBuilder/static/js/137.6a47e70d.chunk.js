(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[137],{412:function(e,t,s){"use strict";s.r(t),s.d(t,"execute",(function(){return o}));var r=s(27),n=s(14);let a;function o(e,t={}){let s=t.responseType;s?"json"!==s&&"text"!==s&&"blob"!==s&&"array-buffer"!==s&&(s="text"):s="json";const o=t&&t.signal;return delete t.signal,r.a.invokeStaticMessage("request",{url:e,options:t},{signal:o}).then(r=>{const o=r.data;let u,l,c,i;if(o&&!("json"!==s&&"text"!==s&&"blob"!==s||(u=new Blob([o]),"json"!==s&&"text"!==s||(a||(a=new FileReaderSync),l=a.readAsText(u),"json"!==s)))){try{c=JSON.parse(l||null)}catch(r){const s={...r,url:e,requestOptions:t};throw new n.a("request:server",r.message,s)}if(c.error){const s={...c.error,url:e,requestOptions:t};throw new n.a("request:server",c.error.message,s)}}switch(s){case"json":i=c;break;case"text":i=l;break;case"blob":i=u;break;default:i=o}return{data:i,requestOptions:t,ssl:r.ssl,url:e}})}}}]);
//# sourceMappingURL=137.6a47e70d.chunk.js.map