import{o as t}from"./p-098cc742.js";var r=t((function(t){var r;void 0!==(r=function(){function t(n,o,a,f,i){for(;f>a;){if(f-a>600){var c=f-a+1,u=o-a+1,h=Math.log(c),M=.5*Math.exp(2*h/3),v=.5*Math.sqrt(h*M*(c-M)/c)*(u-c/2<0?-1:1);t(n,o,Math.max(a,Math.floor(o-u*M/c+v)),Math.min(f,Math.floor(o+(c-u)*M/c+v)),i)}var e=n[o],p=a,m=f;for(r(n,a,o),i(n[f],e)>0&&r(n,a,f);p<m;){for(r(n,p,m),p++,m--;i(n[p],e)<0;)p++;for(;i(n[m],e)>0;)m--}0===i(n[a],e)?r(n,a,m):r(n,++m,f),m<=o&&(a=m+1),o<=m&&(f=m-1)}}function r(t,r,n){var o=t[r];t[r]=t[n],t[n]=o}function n(t,r){return t<r?-1:t>r?1:0}return function(r,o,a,f,i){t(r,o,a||0,f||r.length-1,i||n)}}())&&(t.exports=r)}));export{r}