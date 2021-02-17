import{A as n,j as t}from"./p-dc4230e0.js";const e={ar:[".",","],bs:[",","."],ca:[",","."],cs:[","," "],da:[",","."],de:[",","."],"de-ch":[".","’"],el:[",","."],en:[".",","],"en-au":[".",","],es:[",","."],"es-mx":[".",","],et:[","," "],fi:[","," "],fr:[","," "],"fr-ch":[","," "],he:[".",","],hi:[".",",","#,##,##0.###"],hr:[",","."],hu:[","," "],id:[",","."],it:[",","."],"it-ch":[".","’"],ja:[".",","],ko:[".",","],lt:[","," "],lv:[","," "],mk:[",","."],nb:[","," "],nl:[",","."],pl:[","," "],pt:[",","."],"pt-pt":[","," "],ro:[",","."],ru:[","," "],sk:[","," "],sl:[",","."],sr:[",","."],sv:[","," "],th:[".",","],tr:[",","."],uk:[","," "],vi:[",","."],zh:[".",","]};function r(n){n||(n=t());let r=n in e;if(!r){const t=n.split("-");t.length>1&&t[0]in e&&(n=t[0],r=!0),r||(n="en")}const[o,i,c="#,##0.###"]=e[n];return{decimal:o,group:i,pattern:c}}function o(n,t){const e=r((t={...t}).locale);t.customs=e;const o=t.pattern||e.pattern;return isNaN(n)||Math.abs(n)===1/0?null:function(n,t,e){const r=(e=e||{}).customs.group,o=e.customs.decimal,c=t.split(";"),s=c[0];if(-1!==(t=c[n<0?1:0]||"-"+s).indexOf("%"))n*=100;else if(-1!==t.indexOf("‰"))n*=1e3;else{if(-1!==t.indexOf("¤"))throw new Error("currency notation not supported");if(-1!==t.indexOf("E"))throw new Error("exponential notation not supported")}const u=i,f=s.match(u);if(!f)throw new Error("unable to find a number expression in pattern: "+t);return!1===e.fractional&&(e.places=0),t.replace(u,function(n,t,e){!0===(e=e||{}).places&&(e.places=0),e.places===1/0&&(e.places=6);const r=t.split("."),o="string"==typeof e.places&&e.places.indexOf(",");let i=e.places;o?i=e.places.substring(o+1):i>=0||(i=(r[1]||[]).length),e.round<0||(n=Number(n.toFixed(Number(i))));const c=String(Math.abs(n)).split("."),s=c[1]||"";if(r[1]||e.places){o&&(e.places=e.places.substring(0,o));const n=void 0!==e.places?e.places:r[1]&&r[1].lastIndexOf("0")+1;n>s.length&&(c[1]=s.padEnd(Number(n),"0")),i<s.length&&(c[1]=s.substr(0,Number(i)))}else c[1]&&c.pop();const u=r[0].replace(",","");let f=u.indexOf("0");-1!==f&&(f=u.length-f,f>c[0].length&&(c[0]=c[0].padStart(f,"0")),-1===u.indexOf("#")&&(c[0]=c[0].substr(c[0].length-f)));let a,l,p=r[0].lastIndexOf(",");if(-1!==p){a=r[0].length-p-1;const n=r[0].substr(0,p);p=n.lastIndexOf(","),-1!==p&&(l=n.length-p-1)}const d=[];for(let n=c[0];n;){const t=n.length-a;d.push(t>0?n.substr(t):n),n=t>0?n.slice(0,t):"",l&&(a=l,l=void 0)}return c[0]=d.reverse().join(e.group||","),c.join(e.decimal||".")}(n,f[0],{decimal:o,group:r,places:e.places,round:e.round}))}(n,o,t)}const i=/[#0,]*[#0](?:\.0*#*)?/;function c(t){const e=r((t=t||{}).locale),o=t.pattern||e.pattern,c=e.group,s=e.decimal;let a=1;if(-1!==o.indexOf("%"))a/=100;else if(-1!==o.indexOf("‰"))a/=1e3;else if(-1!==o.indexOf("¤"))throw new Error("currency notation not supported");const l=o.split(";");return 1===l.length&&l.push("-"+l[0]),{regexp:f(l,(function(e){return(e="(?:"+n(e,".")+")").replace(i,(function(n){const e={signed:!1,separator:t.strict?c:[c,""],fractional:t.fractional,decimal:s,exponent:!1},r=n.split(".");let o=t.places;1===r.length&&1!==a&&(r[1]="###"),1===r.length||0===o?e.fractional=!1:(void 0===o&&(o=t.pattern?r[1].lastIndexOf("0")+1:1/0),o&&null==t.fractional&&(e.fractional=!0),!t.places&&o<r[1].length&&(o+=","+r[1].length),e.places=o);const i=r[0].split(",");return i.length>1&&(e.groupSize=i.pop().length,i.length>1&&(e.groupSize2=i.pop().length)),"("+function(n){"places"in(n=n||{})||(n.places=1/0),"string"!=typeof n.decimal&&(n.decimal="."),"fractional"in n&&!/^0/.test(String(n.places))||(n.fractional=[!0,!1]),"exponent"in n||(n.exponent=[!0,!1]),"eSigned"in n||(n.eSigned=[!0,!1]);const t=u(n),e=f(n.fractional,(function(t){let e="";return t&&0!==n.places&&(e="\\"+n.decimal,n.places===1/0?e="(?:"+e+"\\d+)?":e+="\\d{"+n.places+"}"),e}),!0);let r=t+e;return e&&(r="(?:(?:"+r+")|(?:"+e+"))"),r+f(n.exponent,(function(t){return t?"([eE]"+u({signed:n.eSigned})+")":""}))}(e)+")"}))}),!0).replace(/[\xa0 ]/g,"[\\s\\xa0]"),group:c,decimal:s,factor:a}}function s(n,t){const e=c(t),r=new RegExp("^"+e.regexp+"$").exec(n);if(!r)return NaN;let o=r[1];if(!r[1]){if(!r[2])return NaN;o=r[2],e.factor*=-1}return o=o.replace(new RegExp("["+e.group+"\\s\\xa0]","g"),"").replace(e.decimal,"."),Number(o)*e.factor}function u(t){return"signed"in(t=t||{})||(t.signed=[!0,!1]),"separator"in t?"groupSize"in t||(t.groupSize=3):t.separator="",f(t.signed,(function(n){return n?"[-+]":""}),!0)+f(t.separator,(function(e){if(!e)return"(?:\\d+)";" "===(e=n(e))?e="\\s":" "===e&&(e="\\s\\xa0");const r=t.groupSize,o=t.groupSize2;if(o){const n="(?:0|[1-9]\\d{0,"+(o-1)+"}(?:["+e+"]\\d{"+o+"})*["+e+"]\\d{"+r+"})";return r-o>0?"(?:"+n+"|(?:0|[1-9]\\d{0,"+(r-1)+"}))":n}return"(?:0|[1-9]\\d{0,"+(r-1)+"}(?:["+e+"]\\d{"+r+"})*)"}),!0)}const f=function(n,t,e){if(!(n instanceof Array))return t(n);const r=[];for(let e=0;e<n.length;e++)r.push(t(n[e]));return a(r.join("|"),e)},a=function(n,t){return"("+(t?"?:":"")+n+")"};export{s as c,c as l,o}