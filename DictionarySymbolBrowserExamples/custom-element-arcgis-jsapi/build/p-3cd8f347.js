import{ah as r}from"./p-ab028778.js";function n(n,o,t){return r(n.map(((r,n)=>o.apply(t,[r,n]))))}function o(n,o,t){return r(n.map(((r,n)=>o.apply(t,[r,n])))).then((r=>r.map((r=>r.value))))}function t(r){return r.then((r=>({ok:!0,value:r}))).catch((r=>({ok:!1,error:r})))}export{o as e,n,t as o}