import{l as t,a8 as e}from"./p-dc4230e0.js";
/*!
 * @esri/arcgis-html-sanitizer - v2.5.0 - Mon Nov 09 2020 11:08:35 GMT-0500 (Eastern Standard Time)
 * Copyright (c) 2020 - Environmental Systems Research Institute, Inc.
 * Apache-2.0
 * 
 * js-xss
 * Copyright (c) 2012-2017 Zongmin Lei(雷宗民) <leizongmin@gmail.com>
 * http://ucdok.com
 * MIT License, see https://github.com/leizongmin/js-xss/blob/master/LICENSE for details
 * 
 * Lodash/isPlainObject
 * Copyright (c) JS Foundation and other contributors <https://js.foundation/>
 * MIT License, see https://raw.githubusercontent.com/lodash/lodash/4.17.10-npm/LICENSE for details
 */var i,r,o=Object.prototype,n=Function.prototype.toString,a=o.hasOwnProperty,s=n.call(Object),l=o.toString,c=(i=Object.getPrototypeOf,r=Object,function(t){return i(r(t))});function u(t,e,i){return t(i={path:e,exports:{},require:function(){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}()}},i.exports),i.exports}function d(){return{"align-content":!1,"align-items":!1,"align-self":!1,"alignment-adjust":!1,"alignment-baseline":!1,all:!1,"anchor-point":!1,animation:!1,"animation-delay":!1,"animation-direction":!1,"animation-duration":!1,"animation-fill-mode":!1,"animation-iteration-count":!1,"animation-name":!1,"animation-play-state":!1,"animation-timing-function":!1,azimuth:!1,"backface-visibility":!1,background:!0,"background-attachment":!0,"background-clip":!0,"background-color":!0,"background-image":!0,"background-origin":!0,"background-position":!0,"background-repeat":!0,"background-size":!0,"baseline-shift":!1,binding:!1,bleed:!1,"bookmark-label":!1,"bookmark-level":!1,"bookmark-state":!1,border:!0,"border-bottom":!0,"border-bottom-color":!0,"border-bottom-left-radius":!0,"border-bottom-right-radius":!0,"border-bottom-style":!0,"border-bottom-width":!0,"border-collapse":!0,"border-color":!0,"border-image":!0,"border-image-outset":!0,"border-image-repeat":!0,"border-image-slice":!0,"border-image-source":!0,"border-image-width":!0,"border-left":!0,"border-left-color":!0,"border-left-style":!0,"border-left-width":!0,"border-radius":!0,"border-right":!0,"border-right-color":!0,"border-right-style":!0,"border-right-width":!0,"border-spacing":!0,"border-style":!0,"border-top":!0,"border-top-color":!0,"border-top-left-radius":!0,"border-top-right-radius":!0,"border-top-style":!0,"border-top-width":!0,"border-width":!0,bottom:!1,"box-decoration-break":!0,"box-shadow":!0,"box-sizing":!0,"box-snap":!0,"box-suppress":!0,"break-after":!0,"break-before":!0,"break-inside":!0,"caption-side":!1,chains:!1,clear:!0,clip:!1,"clip-path":!1,"clip-rule":!1,color:!0,"color-interpolation-filters":!0,"column-count":!1,"column-fill":!1,"column-gap":!1,"column-rule":!1,"column-rule-color":!1,"column-rule-style":!1,"column-rule-width":!1,"column-span":!1,"column-width":!1,columns:!1,contain:!1,content:!1,"counter-increment":!1,"counter-reset":!1,"counter-set":!1,crop:!1,cue:!1,"cue-after":!1,"cue-before":!1,cursor:!1,direction:!1,display:!0,"display-inside":!0,"display-list":!0,"display-outside":!0,"dominant-baseline":!1,elevation:!1,"empty-cells":!1,filter:!1,flex:!1,"flex-basis":!1,"flex-direction":!1,"flex-flow":!1,"flex-grow":!1,"flex-shrink":!1,"flex-wrap":!1,float:!1,"float-offset":!1,"flood-color":!1,"flood-opacity":!1,"flow-from":!1,"flow-into":!1,font:!0,"font-family":!0,"font-feature-settings":!0,"font-kerning":!0,"font-language-override":!0,"font-size":!0,"font-size-adjust":!0,"font-stretch":!0,"font-style":!0,"font-synthesis":!0,"font-variant":!0,"font-variant-alternates":!0,"font-variant-caps":!0,"font-variant-east-asian":!0,"font-variant-ligatures":!0,"font-variant-numeric":!0,"font-variant-position":!0,"font-weight":!0,grid:!1,"grid-area":!1,"grid-auto-columns":!1,"grid-auto-flow":!1,"grid-auto-rows":!1,"grid-column":!1,"grid-column-end":!1,"grid-column-start":!1,"grid-row":!1,"grid-row-end":!1,"grid-row-start":!1,"grid-template":!1,"grid-template-areas":!1,"grid-template-columns":!1,"grid-template-rows":!1,"hanging-punctuation":!1,height:!0,hyphens:!1,icon:!1,"image-orientation":!1,"image-resolution":!1,"ime-mode":!1,"initial-letters":!1,"inline-box-align":!1,"justify-content":!1,"justify-items":!1,"justify-self":!1,left:!1,"letter-spacing":!0,"lighting-color":!0,"line-box-contain":!1,"line-break":!1,"line-grid":!1,"line-height":!1,"line-snap":!1,"line-stacking":!1,"line-stacking-ruby":!1,"line-stacking-shift":!1,"line-stacking-strategy":!1,"list-style":!0,"list-style-image":!0,"list-style-position":!0,"list-style-type":!0,margin:!0,"margin-bottom":!0,"margin-left":!0,"margin-right":!0,"margin-top":!0,"marker-offset":!1,"marker-side":!1,marks:!1,mask:!1,"mask-box":!1,"mask-box-outset":!1,"mask-box-repeat":!1,"mask-box-slice":!1,"mask-box-source":!1,"mask-box-width":!1,"mask-clip":!1,"mask-image":!1,"mask-origin":!1,"mask-position":!1,"mask-repeat":!1,"mask-size":!1,"mask-source-type":!1,"mask-type":!1,"max-height":!0,"max-lines":!1,"max-width":!0,"min-height":!0,"min-width":!0,"move-to":!1,"nav-down":!1,"nav-index":!1,"nav-left":!1,"nav-right":!1,"nav-up":!1,"object-fit":!1,"object-position":!1,opacity:!1,order:!1,orphans:!1,outline:!1,"outline-color":!1,"outline-offset":!1,"outline-style":!1,"outline-width":!1,overflow:!1,"overflow-wrap":!1,"overflow-x":!1,"overflow-y":!1,padding:!0,"padding-bottom":!0,"padding-left":!0,"padding-right":!0,"padding-top":!0,page:!1,"page-break-after":!1,"page-break-before":!1,"page-break-inside":!1,"page-policy":!1,pause:!1,"pause-after":!1,"pause-before":!1,perspective:!1,"perspective-origin":!1,pitch:!1,"pitch-range":!1,"play-during":!1,position:!1,"presentation-level":!1,quotes:!1,"region-fragment":!1,resize:!1,rest:!1,"rest-after":!1,"rest-before":!1,richness:!1,right:!1,rotation:!1,"rotation-point":!1,"ruby-align":!1,"ruby-merge":!1,"ruby-position":!1,"shape-image-threshold":!1,"shape-outside":!1,"shape-margin":!1,size:!1,speak:!1,"speak-as":!1,"speak-header":!1,"speak-numeral":!1,"speak-punctuation":!1,"speech-rate":!1,stress:!1,"string-set":!1,"tab-size":!1,"table-layout":!1,"text-align":!0,"text-align-last":!0,"text-combine-upright":!0,"text-decoration":!0,"text-decoration-color":!0,"text-decoration-line":!0,"text-decoration-skip":!0,"text-decoration-style":!0,"text-emphasis":!0,"text-emphasis-color":!0,"text-emphasis-position":!0,"text-emphasis-style":!0,"text-height":!0,"text-indent":!0,"text-justify":!0,"text-orientation":!0,"text-overflow":!0,"text-shadow":!0,"text-space-collapse":!0,"text-transform":!0,"text-underline-position":!0,"text-wrap":!0,top:!1,transform:!1,"transform-origin":!1,"transform-style":!1,transition:!1,"transition-delay":!1,"transition-duration":!1,"transition-property":!1,"transition-timing-function":!1,"unicode-bidi":!1,"vertical-align":!1,visibility:!1,"voice-balance":!1,"voice-duration":!1,"voice-family":!1,"voice-pitch":!1,"voice-range":!1,"voice-rate":!1,"voice-stress":!1,"voice-volume":!1,volume:!1,"white-space":!1,widows:!1,width:!0,"will-change":!1,"word-break":!0,"word-spacing":!0,"word-wrap":!0,"wrap-flow":!1,"wrap-through":!1,"writing-mode":!1,"z-index":!1}}var f=/javascript\s*\:/gim,p={whiteList:{"align-content":!1,"align-items":!1,"align-self":!1,"alignment-adjust":!1,"alignment-baseline":!1,all:!1,"anchor-point":!1,animation:!1,"animation-delay":!1,"animation-direction":!1,"animation-duration":!1,"animation-fill-mode":!1,"animation-iteration-count":!1,"animation-name":!1,"animation-play-state":!1,"animation-timing-function":!1,azimuth:!1,"backface-visibility":!1,background:!0,"background-attachment":!0,"background-clip":!0,"background-color":!0,"background-image":!0,"background-origin":!0,"background-position":!0,"background-repeat":!0,"background-size":!0,"baseline-shift":!1,binding:!1,bleed:!1,"bookmark-label":!1,"bookmark-level":!1,"bookmark-state":!1,border:!0,"border-bottom":!0,"border-bottom-color":!0,"border-bottom-left-radius":!0,"border-bottom-right-radius":!0,"border-bottom-style":!0,"border-bottom-width":!0,"border-collapse":!0,"border-color":!0,"border-image":!0,"border-image-outset":!0,"border-image-repeat":!0,"border-image-slice":!0,"border-image-source":!0,"border-image-width":!0,"border-left":!0,"border-left-color":!0,"border-left-style":!0,"border-left-width":!0,"border-radius":!0,"border-right":!0,"border-right-color":!0,"border-right-style":!0,"border-right-width":!0,"border-spacing":!0,"border-style":!0,"border-top":!0,"border-top-color":!0,"border-top-left-radius":!0,"border-top-right-radius":!0,"border-top-style":!0,"border-top-width":!0,"border-width":!0,bottom:!1,"box-decoration-break":!0,"box-shadow":!0,"box-sizing":!0,"box-snap":!0,"box-suppress":!0,"break-after":!0,"break-before":!0,"break-inside":!0,"caption-side":!1,chains:!1,clear:!0,clip:!1,"clip-path":!1,"clip-rule":!1,color:!0,"color-interpolation-filters":!0,"column-count":!1,"column-fill":!1,"column-gap":!1,"column-rule":!1,"column-rule-color":!1,"column-rule-style":!1,"column-rule-width":!1,"column-span":!1,"column-width":!1,columns:!1,contain:!1,content:!1,"counter-increment":!1,"counter-reset":!1,"counter-set":!1,crop:!1,cue:!1,"cue-after":!1,"cue-before":!1,cursor:!1,direction:!1,display:!0,"display-inside":!0,"display-list":!0,"display-outside":!0,"dominant-baseline":!1,elevation:!1,"empty-cells":!1,filter:!1,flex:!1,"flex-basis":!1,"flex-direction":!1,"flex-flow":!1,"flex-grow":!1,"flex-shrink":!1,"flex-wrap":!1,float:!1,"float-offset":!1,"flood-color":!1,"flood-opacity":!1,"flow-from":!1,"flow-into":!1,font:!0,"font-family":!0,"font-feature-settings":!0,"font-kerning":!0,"font-language-override":!0,"font-size":!0,"font-size-adjust":!0,"font-stretch":!0,"font-style":!0,"font-synthesis":!0,"font-variant":!0,"font-variant-alternates":!0,"font-variant-caps":!0,"font-variant-east-asian":!0,"font-variant-ligatures":!0,"font-variant-numeric":!0,"font-variant-position":!0,"font-weight":!0,grid:!1,"grid-area":!1,"grid-auto-columns":!1,"grid-auto-flow":!1,"grid-auto-rows":!1,"grid-column":!1,"grid-column-end":!1,"grid-column-start":!1,"grid-row":!1,"grid-row-end":!1,"grid-row-start":!1,"grid-template":!1,"grid-template-areas":!1,"grid-template-columns":!1,"grid-template-rows":!1,"hanging-punctuation":!1,height:!0,hyphens:!1,icon:!1,"image-orientation":!1,"image-resolution":!1,"ime-mode":!1,"initial-letters":!1,"inline-box-align":!1,"justify-content":!1,"justify-items":!1,"justify-self":!1,left:!1,"letter-spacing":!0,"lighting-color":!0,"line-box-contain":!1,"line-break":!1,"line-grid":!1,"line-height":!1,"line-snap":!1,"line-stacking":!1,"line-stacking-ruby":!1,"line-stacking-shift":!1,"line-stacking-strategy":!1,"list-style":!0,"list-style-image":!0,"list-style-position":!0,"list-style-type":!0,margin:!0,"margin-bottom":!0,"margin-left":!0,"margin-right":!0,"margin-top":!0,"marker-offset":!1,"marker-side":!1,marks:!1,mask:!1,"mask-box":!1,"mask-box-outset":!1,"mask-box-repeat":!1,"mask-box-slice":!1,"mask-box-source":!1,"mask-box-width":!1,"mask-clip":!1,"mask-image":!1,"mask-origin":!1,"mask-position":!1,"mask-repeat":!1,"mask-size":!1,"mask-source-type":!1,"mask-type":!1,"max-height":!0,"max-lines":!1,"max-width":!0,"min-height":!0,"min-width":!0,"move-to":!1,"nav-down":!1,"nav-index":!1,"nav-left":!1,"nav-right":!1,"nav-up":!1,"object-fit":!1,"object-position":!1,opacity:!1,order:!1,orphans:!1,outline:!1,"outline-color":!1,"outline-offset":!1,"outline-style":!1,"outline-width":!1,overflow:!1,"overflow-wrap":!1,"overflow-x":!1,"overflow-y":!1,padding:!0,"padding-bottom":!0,"padding-left":!0,"padding-right":!0,"padding-top":!0,page:!1,"page-break-after":!1,"page-break-before":!1,"page-break-inside":!1,"page-policy":!1,pause:!1,"pause-after":!1,"pause-before":!1,perspective:!1,"perspective-origin":!1,pitch:!1,"pitch-range":!1,"play-during":!1,position:!1,"presentation-level":!1,quotes:!1,"region-fragment":!1,resize:!1,rest:!1,"rest-after":!1,"rest-before":!1,richness:!1,right:!1,rotation:!1,"rotation-point":!1,"ruby-align":!1,"ruby-merge":!1,"ruby-position":!1,"shape-image-threshold":!1,"shape-outside":!1,"shape-margin":!1,size:!1,speak:!1,"speak-as":!1,"speak-header":!1,"speak-numeral":!1,"speak-punctuation":!1,"speech-rate":!1,stress:!1,"string-set":!1,"tab-size":!1,"table-layout":!1,"text-align":!0,"text-align-last":!0,"text-combine-upright":!0,"text-decoration":!0,"text-decoration-color":!0,"text-decoration-line":!0,"text-decoration-skip":!0,"text-decoration-style":!0,"text-emphasis":!0,"text-emphasis-color":!0,"text-emphasis-position":!0,"text-emphasis-style":!0,"text-height":!0,"text-indent":!0,"text-justify":!0,"text-orientation":!0,"text-overflow":!0,"text-shadow":!0,"text-space-collapse":!0,"text-transform":!0,"text-underline-position":!0,"text-wrap":!0,top:!1,transform:!1,"transform-origin":!1,"transform-style":!1,transition:!1,"transition-delay":!1,"transition-duration":!1,"transition-property":!1,"transition-timing-function":!1,"unicode-bidi":!1,"vertical-align":!1,visibility:!1,"voice-balance":!1,"voice-duration":!1,"voice-family":!1,"voice-pitch":!1,"voice-range":!1,"voice-rate":!1,"voice-stress":!1,"voice-volume":!1,volume:!1,"white-space":!1,widows:!1,width:!0,"will-change":!1,"word-break":!0,"word-spacing":!0,"word-wrap":!0,"wrap-flow":!1,"wrap-through":!1,"writing-mode":!1,"z-index":!1},getDefaultWhiteList:d,onAttr:function(){},onIgnoreAttr:function(){},safeAttrValue:function(t,e){return f.test(e)?"":e}},g=function(t){return String.prototype.trim?t.trim():t.replace(/(^\s*)|(\s*$)/g,"")},m=function(t,e){var i;";"!==(i=t,t=String.prototype.trimRight?i.trimRight():i.replace(/(\s*$)/g,""))[t.length-1]&&(t+=";");var r=t.length,o=!1,n=0,a=0,s="";function l(){if(!o){var i=g(t.slice(n,a)),r=i.indexOf(":");if(-1!==r){var l=g(i.slice(0,r)),c=g(i.slice(r+1));if(l){var u=e(n,s.length,l,c,i);u&&(s+=u+"; ")}}}n=a+1}for(;a<r;a++){var c=t[a];if("/"===c&&"*"===t[a+1]){var u=t.indexOf("*/",a+2);if(-1===u)break;n=(a=u+1)+1,o=!1}else"("===c?o=!0:")"===c?o=!1:";"===c?o||l():"\n"===c&&l()}return g(s)};function h(t){return null==t}function b(t){(t=function(t){var e={};for(var i in t)e[i]=t[i];return e}(t||{})).whiteList=t.whiteList||p.whiteList,t.onAttr=t.onAttr||p.onAttr,t.onIgnoreAttr=t.onIgnoreAttr||p.onIgnoreAttr,t.safeAttrValue=t.safeAttrValue||p.safeAttrValue,this.options=t}b.prototype.process=function(t){if(!(t=(t=t||"").toString()))return"";var e=this.options,i=e.whiteList,r=e.onAttr,o=e.onIgnoreAttr,n=e.safeAttrValue;return m(t,(function(t,e,a,s,l){var c=i[a],u=!1;if(!0===c?u=c:"function"==typeof c?u=c(s):c instanceof RegExp&&(u=c.test(s)),!0!==u&&(u=!1),s=n(a,s)){var d,f={position:e,sourcePosition:t,source:l,isWhite:u};return u?h(d=r(a,s,f))?a+":"+s:d:h(d=o(a,s,f))?void 0:d}}))};var v=b,w=u((function(t,e){for(var i in(e=t.exports=function(t,e){return new v(e).process(t)}).FilterCSS=v,p)e[i]=p[i]})),y=function(t,e){var i,r;if(Array.prototype.indexOf)return t.indexOf(e);for(i=0,r=t.length;i<r;i++)if(t[i]===e)return i;return-1},k=function(t){return String.prototype.trim?t.trim():t.replace(/(^\s*)|(\s*$)/g,"")},x=function(t){var e=/\s|\n|\t/.exec(t);return e?e.index:-1},j=w.getDefaultWhiteList;var A=new(0,w.FilterCSS);function z(t){return t.replace(T,"&lt;").replace(O,"&gt;")}var T=/</g,O=/>/g,S=/"/g,E=/&quot;/g,q=/&#([a-zA-Z0-9]*);?/gim,I=/&colon;?/gim,N=/&newline;?/gim,L=/((j\s*a\s*v\s*a|v\s*b|l\s*i\s*v\s*e)\s*s\s*c\s*r\s*i\s*p\s*t\s*|m\s*o\s*c\s*h\s*a)\:/gi,$=/e\s*x\s*p\s*r\s*e\s*s\s*s\s*i\s*o\s*n\s*\(.*/gi,D=/u\s*r\s*l\s*\(.*/gi;function C(t){return t.replace(S,"&quot;")}function F(t){return t.replace(E,'"')}function W(t){return t.replace(q,(function(t,e){return String.fromCharCode("x"===e[0]||"X"===e[0]?parseInt(e.substr(1),16):parseInt(e,10))}))}function V(t){return t.replace(I,":").replace(N," ")}function H(t){for(var e="",i=0,r=t.length;i<r;i++)e+=t.charCodeAt(i)<32?" ":t.charAt(i);return k(e)}function P(t){return H(t=V(t=W(t=F(t))))}function B(t){return z(t=C(t))}var M=/<!--[\s\S]*?-->/g,R={whiteList:{a:["target","href","title"],abbr:["title"],address:[],area:["shape","coords","href","alt"],article:[],aside:[],audio:["autoplay","controls","loop","preload","src"],b:[],bdi:["dir"],bdo:["dir"],big:[],blockquote:["cite"],br:[],caption:[],center:[],cite:[],code:[],col:["align","valign","span","width"],colgroup:["align","valign","span","width"],dd:[],del:["datetime"],details:["open"],div:[],dl:[],dt:[],em:[],font:["color","size","face"],footer:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],header:[],hr:[],i:[],img:["src","alt","title","width","height"],ins:["datetime"],li:[],mark:[],nav:[],ol:[],p:[],pre:[],s:[],section:[],small:[],span:[],sub:[],sup:[],strong:[],table:["width","border","align","valign"],tbody:["align","valign"],td:["width","rowspan","colspan","align","valign"],tfoot:["align","valign"],th:["width","rowspan","colspan","align","valign"],thead:["align","valign"],tr:["rowspan","align","valign"],tt:[],u:[],ul:[],video:["autoplay","controls","loop","preload","src","height","width"]},getDefaultWhiteList:function(){return{a:["target","href","title"],abbr:["title"],address:[],area:["shape","coords","href","alt"],article:[],aside:[],audio:["autoplay","controls","loop","preload","src"],b:[],bdi:["dir"],bdo:["dir"],big:[],blockquote:["cite"],br:[],caption:[],center:[],cite:[],code:[],col:["align","valign","span","width"],colgroup:["align","valign","span","width"],dd:[],del:["datetime"],details:["open"],div:[],dl:[],dt:[],em:[],font:["color","size","face"],footer:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],header:[],hr:[],i:[],img:["src","alt","title","width","height"],ins:["datetime"],li:[],mark:[],nav:[],ol:[],p:[],pre:[],s:[],section:[],small:[],span:[],sub:[],sup:[],strong:[],table:["width","border","align","valign"],tbody:["align","valign"],td:["width","rowspan","colspan","align","valign"],tfoot:["align","valign"],th:["width","rowspan","colspan","align","valign"],thead:["align","valign"],tr:["rowspan","align","valign"],tt:[],u:[],ul:[],video:["autoplay","controls","loop","preload","src","height","width"]}},onTag:function(){},onIgnoreTag:function(){},onTagAttr:function(){},onIgnoreTagAttr:function(){},safeAttrValue:function(t,e,i,r){if(i=P(i),"href"===e||"src"===e){if("#"===(i=k(i)))return"#";if("http://"!==i.substr(0,7)&&"https://"!==i.substr(0,8)&&"mailto:"!==i.substr(0,7)&&"tel:"!==i.substr(0,4)&&"data:image/"!==i.substr(0,11)&&"ftp://"!==i.substr(0,6)&&"./"!==i.substr(0,2)&&"../"!==i.substr(0,3)&&"#"!==i[0]&&"/"!==i[0])return""}else if("background"===e){if(L.lastIndex=0,L.test(i))return""}else if("style"===e){if($.lastIndex=0,$.test(i))return"";if(D.lastIndex=0,D.test(i)&&(L.lastIndex=0,L.test(i)))return"";!1!==r&&(i=(r=r||A).process(i))}return B(i)},escapeHtml:z,escapeQuote:C,unescapeQuote:F,escapeHtmlEntities:W,escapeDangerHtml5Entities:V,clearNonPrintableCharacter:H,friendlyAttrValue:P,escapeAttrValue:B,onIgnoreTagStripAll:function(){return""},StripTagBody:function(t,e){"function"!=typeof e&&(e=function(){});var i=!Array.isArray(t),r=[],o=!1;return{onIgnoreTag:function(n,a,s){if(function(e){return!!i||-1!==y(t,e)}(n)){if(s.isClosing){var l="[/removed]";return r.push([!1!==o?o:s.position,s.position+l.length]),o=!1,l}return o||(o=s.position),"[removed]"}return e(n,a,s)},remove:function(t){var e="",i=0;return function(t,e,i){var r,o;if(Array.prototype.forEach)return t.forEach(e,i);for(r=0,o=t.length;r<o;r++)e.call(i,t[r],r,t)}(r,(function(r){e+=t.slice(i,r[0]),i=r[1]})),e+=t.slice(i)}}},stripCommentTag:function(t){return t.replace(M,"")},stripBlankChar:function(t){var e=t.split("");return(e=e.filter((function(t){var e=t.charCodeAt(0);return!(127===e||e<=31&&10!==e&&13!==e)}))).join("")},cssFilter:A,getDefaultCSSWhiteList:j};function G(t){var e=x(t);if(-1===e)var i=t.slice(1,-1);else i=t.slice(1,e+1);return"/"===(i=k(i).toLowerCase()).slice(0,1)&&(i=i.slice(1)),"/"===i.slice(-1)&&(i=i.slice(0,-1)),i}function Q(t){return"</"===t.slice(0,2)}var Y=/[^a-zA-Z0-9_:\.\-]/gim;function Z(t,e){for(;e<t.length;e++){var i=t[e];if(" "!==i)return"="===i?e:-1}}function U(t,e){for(;e>0;e--){var i=t[e];if(" "!==i)return"="===i?e:-1}}function X(t){return function(t){return'"'===t[0]&&'"'===t[t.length-1]||"'"===t[0]&&"'"===t[t.length-1]}(t)?t.substr(1,t.length-2):t}var _={parseTag:function(t,e,i){var r="",o=0,n=!1,a=!1,s=0,l=t.length,c="",u="";t:for(s=0;s<l;s++){var d=t.charAt(s);if(!1===n){if("<"===d){n=s;continue}}else if(!1===a){if("<"===d){r+=i(t.slice(o,s)),n=s,o=s;continue}if(">"===d){r+=i(t.slice(o,n)),c=G(u=t.slice(n,s+1)),r+=e(n,r.length,c,u,Q(u)),o=s+1,n=!1;continue}if('"'===d||"'"===d)for(var f=1,p=t.charAt(s-f);" "===p||"="===p;){if("="===p){a=d;continue t}p=t.charAt(s-++f)}}else if(d===a){a=!1;continue}}return o<t.length&&(r+=i(t.substr(o))),r},parseAttr:function(t,e){var i=0,r=[],o=!1,n=t.length;function a(t,i){if(!((t=(t=k(t)).replace(Y,"").toLowerCase()).length<1)){var o=e(t,i||"");o&&r.push(o)}}for(var s=0;s<n;s++){var l,c=t.charAt(s);if(!1!==o||"="!==c)if(!1===o||s!==i||'"'!==c&&"'"!==c||"="!==t.charAt(s-1)){if(/\s|\n|\t/.test(c)){if(t=t.replace(/\s|\n|\t/g," "),!1===o){if(-1===(l=Z(t,s))){a(k(t.slice(i,s))),o=!1,i=s+1;continue}s=l-1;continue}if(-1===(l=U(t,s-1))){a(o,X(k(t.slice(i,s)))),o=!1,i=s+1;continue}}}else{if(-1===(l=t.indexOf(c,s+1)))break;a(o,k(t.slice(i+1,l))),o=!1,i=(s=l)+1}else o=t.slice(i,s),i=s+1}return i<t.length&&(!1===o?a(t.slice(i)):a(o,X(k(t.slice(i))))),k(r.join(" "))}},J=w.FilterCSS,K=_.parseTag,tt=_.parseAttr;function et(t){return null==t}function it(t){(t=function(t){var e={};for(var i in t)e[i]=t[i];return e}(t||{})).stripIgnoreTag&&(t.onIgnoreTag&&console.error('Notes: cannot use these two options "stripIgnoreTag" and "onIgnoreTag" at the same time'),t.onIgnoreTag=R.onIgnoreTagStripAll),t.whiteList=t.whiteList||R.whiteList,t.onTag=t.onTag||R.onTag,t.onTagAttr=t.onTagAttr||R.onTagAttr,t.onIgnoreTag=t.onIgnoreTag||R.onIgnoreTag,t.onIgnoreTagAttr=t.onIgnoreTagAttr||R.onIgnoreTagAttr,t.safeAttrValue=t.safeAttrValue||R.safeAttrValue,t.escapeHtml=t.escapeHtml||R.escapeHtml,this.options=t,!1===t.css?this.cssFilter=!1:(t.css=t.css||{},this.cssFilter=new J(t.css))}it.prototype.process=function(t){if(!(t=(t=t||"").toString()))return"";var e=this.options,i=e.whiteList,r=e.onTag,o=e.onIgnoreTag,n=e.onTagAttr,a=e.onIgnoreTagAttr,s=e.safeAttrValue,l=e.escapeHtml,c=this.cssFilter;e.stripBlankChar&&(t=R.stripBlankChar(t)),e.allowCommentTag||(t=R.stripCommentTag(t));var u=!1;e.stripIgnoreTagBody&&(u=R.StripTagBody(e.stripIgnoreTagBody,o),o=u.onIgnoreTag);var d=K(t,(function(t,e,u,d,f){var p,g={sourcePosition:t,position:e,isClosing:f,isWhite:i.hasOwnProperty(u)};if(!et(p=r(u,d,g)))return p;if(g.isWhite){if(g.isClosing)return"</"+u+">";var m=function(t){var e=x(t);if(-1===e)return{html:"",closing:"/"===t[t.length-2]};var i="/"===(t=k(t.slice(e+1,-1)))[t.length-1];return i&&(t=k(t.slice(0,-1))),{html:t,closing:i}}(d),h=i[u],b=tt(m.html,(function(t,e){var i,r=-1!==y(h,t);return et(i=n(u,t,e,r))?r?(e=s(u,t,e,c))?t+'="'+e+'"':t:et(i=a(u,t,e,r))?void 0:i:i}));return d="<"+u,b&&(d+=" "+b),m.closing&&(d+=" /"),d+">"}return et(p=o(u,d,g))?l(d):p}),l);return u&&(d=u.remove(d)),d};var rt,ot,nt=it,at=u((function(t,e){function i(t,e){return new nt(e).process(t)}for(var r in(e=t.exports=i).filterXSS=i,e.FilterXSS=nt,R)e[r]=R[r];for(var r in _)e[r]=_[r];"undefined"!=typeof self&&"undefined"!=typeof DedicatedWorkerGlobalScope&&self instanceof DedicatedWorkerGlobalScope&&(self.filterXSS=t.exports)})),st=function(){function t(t,e){var i,r=this;this.arcgisWhiteList={a:["href","target","style"],img:["src","width","height","border","alt","style"],video:["autoplay","controls","height","loop","muted","poster","preload","width"],audio:["autoplay","controls","loop","muted","preload"],source:["media","src","type"],span:["style"],table:["width","height","cellpadding","cellspacing","border","style"],div:["style","align"],font:["size","color","style"],tr:["height","valign","align","style"],td:["height","width","valign","align","colspan","rowspan","nowrap","style"],th:["height","width","valign","align","colspan","rowspan","nowrap","style"],p:["style"],b:[],strong:[],i:[],em:[],u:[],br:[],li:[],ul:[],ol:[],hr:[],tbody:[]},this.allowedProtocols=["http","https","mailto","iform","tel","flow","lfmobile","arcgis-navigator","arcgis-appstudio-player","arcgis-survey123","arcgis-collector","arcgis-workforce","arcgis-explorer","arcgis-trek2there","mspbi","comgooglemaps","pdfefile","pdfehttp","pdfehttps","boxapp","boxemm","awb","awbs","gropen","radarscope"],this.arcgisFilterOptions={allowCommentTag:!0,safeAttrValue:function(t,e,i,o){return"a"===t&&"href"===e||("img"===t||"source"===t)&&"src"===e?r.sanitizeUrl(i):at.safeAttrValue(t,e,i,o)}},t&&!e?i=t:t&&e?(i=Object.create(this.arcgisFilterOptions),Object.keys(t).forEach((function(e){"whiteList"===e?i.whiteList=r._extendObjectOfArrays([r.arcgisWhiteList,t.whiteList||{}]):i[e]=t[e]}))):(i=Object.create(this.arcgisFilterOptions)).whiteList=this.arcgisWhiteList,this.xssFilterOptions=i,this._xssFilter=new at.FilterXSS(i)}return t.prototype.sanitize=function(t,e){switch(void 0===e&&(e={}),typeof t){case"number":return isNaN(t)||!isFinite(t)?null:t;case"boolean":return t;case"string":return this._xssFilter.process(t);case"object":return this._iterateOverObject(t,e);default:if(e.allowUndefined&&void 0===t)return;return null}},t.prototype.sanitizeUrl=function(t){var e=this._trim(t.substring(0,t.indexOf(":")));return"/"===t||"#"===t||"#"===t[0]||this.allowedProtocols.indexOf(e.toLowerCase())>-1?at.escapeAttrValue(t):""},t.prototype.sanitizeHTMLAttribute=function(t,e,i,r){return"function"==typeof this.xssFilterOptions.safeAttrValue?this.xssFilterOptions.safeAttrValue(t,e,i,r):at.safeAttrValue(t,e,i,r)},t.prototype.validate=function(t,e){void 0===e&&(e={});var i=this.sanitize(t,e);return{isValid:t===i,sanitized:i}},t.prototype._extendObjectOfArrays=function(t){var e={};return t.forEach((function(t){Object.keys(t).forEach((function(i){e[i]=Array.isArray(t[i])&&Array.isArray(e[i])?e[i].concat(t[i]):t[i]}))})),e},t.prototype._iterateOverObject=function(t,e){var i=this;void 0===e&&(e={});try{var r=!1,o=void 0;if(Array.isArray(t))o=t.reduce((function(t,o){var n=i.validate(o,e);return n.isValid?t.concat([o]):(r=!0,t.concat([n.sanitized]))}),[]);else{if(!function(t){if(!function(t){return!!t&&"object"==typeof t}(t)||"[object Object]"!=l.call(t)||function(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}(t))return!1;var e=c(t);if(null===e)return!0;var i=a.call(e,"constructor")&&e.constructor;return"function"==typeof i&&i instanceof i&&n.call(i)==s}(t)){if(e.allowUndefined&&void 0===t)return;return null}o=Object.keys(t).reduce((function(o,n){var a=t[n],s=i.validate(a,e);return s.isValid?o[n]=a:(r=!0,o[n]=s.sanitized),o}),{})}return r?o:t}catch(t){return null}},t.prototype._trim=function(t){return String.prototype.trim?t.trim():t.replace(/(^\s*)|(\s*$)/g,"")},t}(),lt=function(t){rt||function(t){if("WebkitTransition"in t.style)rt="webkitTransitionEnd",ot="webkitAnimationEnd";else{if(!("transition"in t.style))throw new Error("Your browser is not supported!");rt="transitionend",ot="animationend"}}(t)},ct=function(t,e){return void 0===e&&(e=t+"-active"),function(i){lt(i);var r=!1,o=function(){r||(r=!0,i.removeEventListener(rt,o),i.removeEventListener(ot,o),i.classList.remove(t),i.classList.remove(e))};i.classList.add(t),i.addEventListener(rt,o),i.addEventListener(ot,o),requestAnimationFrame((function(){i.classList.add(e)}))}},ut=function(t,e){return void 0===e&&(e=t+"-active"),function(i,r){lt(i);var o=!1,n=function(){o||(o=!0,i.removeEventListener(rt,n),i.removeEventListener(ot,n),r())};i.classList.add(t),i.addEventListener(rt,n),i.addEventListener(ot,n),requestAnimationFrame((function(){i.classList.add(e)}))}};function dt(t){const i=e.acquire();for(let t=0;t<arguments.length;t++){const e=arguments[t],r=typeof e;if("string"===r)i.push(e);else if(Array.isArray(e))i.push.apply(i,e);else if("object"===r)for(const t in e)e[t]&&i.push(t)}const r=i.join(" ");return e.release(i),r}function ft(){return"rtl"===document.dir}function pt(t){this[t.getAttribute("data-node-ref")]=null}function gt(t){this[t.getAttribute("data-node-ref")]=t}function mt(t,e){return("enter"===t?ct:ut)(e)}t.getLogger("esri.widgets.support.widgetUtils");const ht=["h1","h2","h3","h4","h5","h6","sub","sup","animate","animatetransform","circle","clippath","defs","ellipse","g","image","line","lineargradient","marker","mask","path","pattern","polygon","polyline","radialgradient","rect","stop","svg","switch","symbol","text","textpath","tspan","use"].reduce(((t,e)=>(t[e]=[],t)),{}),bt=["align","alink","alt","bgcolor","border","cellpadding","cellspacing","class","color","cols","colspan","coords","dir","face","height","hspace","ismap","lang","marginheight","marginwidth","multiple","nohref","noresize","noshade","nowrap","ref","rel","rev","rows","rowspan","scrolling","shape","span","summary","tabindex","title","usemap","valign","value","vlink","vspace","width"],vt=new st({whiteList:ht,onTagAttr:(t,e,i)=>{const r=`${e}="${i}"`;if(bt.includes(e))return r},stripIgnoreTag:!0,stripIgnoreTagBody:["script","style"]},!0);function wt(){var t;return-1!==(null==(t=getComputedStyle(document.body).getPropertyValue("--esri-calcite-theme-name"))?void 0:t.indexOf("dark"))}var yt=function(t,e){for(var i=0,r=t.length;i<r;i++){var o=t[i];Array.isArray(o)?yt(o,e):null!=o&&!1!==o&&(o.hasOwnProperty("vnodeSelector")||(o={vnodeSelector:"",properties:void 0,children:void 0,text:o.toString(),domNode:null}),e.push(o))}},kt=function(t,e){for(var i=[],r=2;r<arguments.length;r++)i[r-2]=arguments[r];if(1===i.length&&"string"==typeof i[0])return{vnodeSelector:t,properties:e||void 0,children:void 0,text:i[0],domNode:null};var o=[];return yt(i,o),{vnodeSelector:t,properties:e||void 0,children:o,text:void 0,domNode:null}};const xt="http://www.w3.org/2000/svg",jt=[];let At=(t,e)=>{const i={};return Object.keys(t).forEach((e=>{i[e]=t[e]})),e&&Object.keys(e).forEach((t=>{i[t]=e[t]})),i};const zt=(t,e)=>t.vnodeSelector===e.vnodeSelector&&(t.properties&&e.properties?t.properties.key===e.properties.key&&t.properties.bind===e.properties.bind:!t.properties&&!e.properties),Tt=t=>{if("string"!=typeof t)throw new Error("Style values must be strings")},Ot=(t,e,i)=>{if(""!==e.vnodeSelector)for(let r=i;r<t.length;r++)if(zt(t[r],e))return r;return-1},St=(t,e,i,r)=>{const o=t[e];if(""===o.vnodeSelector)return;const n=o.properties;if(!(n?void 0===n.key?n.bind:n.key:void 0))for(let n=0;n<t.length;n++)if(n!==e&&zt(t[n],o))throw new Error(`${i.vnodeSelector} had a ${o.vnodeSelector} child ${"added"===r?r:"removed"}, but there is now more than one. You must add unique key properties to make them distinguishable.`)},Et=t=>{if(t.properties){const e=t.properties.enterAnimation;e&&e(t.domNode,t.properties)}},qt=[];let It=!1;const Nt=t=>{(t.children||[]).forEach(Nt),t.properties&&t.properties.afterRemoved&&t.properties.afterRemoved.apply(t.properties.bind||t.properties,[t.domNode])},Lt=()=>{It=!1,qt.forEach(Nt),qt.length=0},$t=t=>{qt.push(t),It||(It=!0,"undefined"!=typeof window&&"requestIdleCallback"in window?window.requestIdleCallback(Lt,{timeout:16}):setTimeout(Lt,16))},Dt=t=>{const e=t.domNode;if(t.properties){const i=t.properties.exitAnimation;if(i){e.style.pointerEvents="none";const r=()=>{e.parentNode&&(e.parentNode.removeChild(e),$t(t))};return void i(e,r,t.properties)}}e.parentNode&&(e.parentNode.removeChild(e),$t(t))},Ct=(t,e,i)=>{if(!e)return;const r=i.eventHandlerInterceptor,o=Object.keys(e),n=o.length;for(let a=0;a<n;a++){const n=o[a];let s=e[n];if("className"===n)throw new Error('Property "className" is not supported, use "class".');if("class"===n)Ht(t,s,!0);else if("classes"===n){const e=Object.keys(s),i=e.length;for(let r=0;r<i;r++){const i=e[r];s[i]&&t.classList.add(i)}}else if("styles"===n){const e=Object.keys(s),r=e.length;for(let o=0;o<r;o++){const r=e[o],n=s[r];n&&(Tt(n),i.styleApplyer(t,r,n))}}else if("key"!==n&&null!=s){const o=typeof s;"function"===o?0===n.lastIndexOf("on",0)&&(r&&(s=r(n,s,t,e)),"oninput"===n&&function(){const t=s;s=function(e){t.apply(this,[e]),e.target["oninput-value"]=e.target.value}}(),t[n]=s):i.namespace===xt?"href"===n?t.setAttributeNS("http://www.w3.org/1999/xlink",n,s):t.setAttribute(n,s):"string"===o&&"value"!==n?"innerHTML"===n?t[n]=vt.sanitize(s):t.setAttribute(n,s):t[n]=s}}};let Ft,Wt=(t,e,i)=>{((t,e,i)=>{if(e)for(const r of e)Vt(r,t,void 0,i)})(t,e.children,i),e.text&&(t.textContent=e.text),Ct(t,e.properties,i),e.properties&&e.properties.afterCreate&&e.properties.afterCreate.apply(e.properties.bind||e.properties,[t,i,e.vnodeSelector,e.properties,e.children])},Vt=(t,e,i,r)=>{let o,n=0;const a=t.vnodeSelector,s=e.ownerDocument;if(""===a)o=t.domNode=s.createTextNode(t.text),void 0!==i?e.insertBefore(o,i):e.appendChild(o);else{for(let l=0;l<=a.length;++l){const c=a.charAt(l);if(l===a.length||"."===c||"#"===c){const c=a.charAt(n-1),u=a.slice(n,l);"."===c?o.classList.add(u):"#"===c?o.id=u:("svg"===u&&(r=At(r,{namespace:xt})),void 0!==r.namespace?o=t.domNode=s.createElementNS(r.namespace,u):(o=t.domNode=t.domNode||s.createElement(u),"input"===u&&t.properties&&void 0!==t.properties.type&&o.setAttribute("type",t.properties.type)),void 0!==i?e.insertBefore(o,i):o.parentNode!==e&&e.appendChild(o)),n=l+1}}Wt(o,t,r)}};const Ht=(t,e,i)=>{e&&e.split(" ").forEach((e=>{e&&t.classList.toggle(e,i)}))};Ft=(t,e,i)=>{const r=t.domNode;let o=!1;if(t===e)return!1;let n=!1;if(""===e.vnodeSelector){if(e.text!==t.text){const t=r.ownerDocument.createTextNode(e.text);return r.parentNode.replaceChild(t,r),e.domNode=t,o=!0,o}e.domNode=r}else 0===e.vnodeSelector.lastIndexOf("svg",0)&&(i=At(i,{namespace:xt})),t.text!==e.text&&(n=!0,void 0===e.text?r.removeChild(r.firstChild):r.textContent=e.text),e.domNode=r,n=((t,e,i,r,o)=>{if(i===r)return!1;const n=(i=i||jt).length,a=(r=r||jt).length;let s,l=0,c=0,u=!1;for(;c<a;){const a=l<n?i[l]:void 0,d=r[c];if(void 0!==a&&zt(a,d))u=Ft(a,d,o)||u,l++;else{const a=Ot(i,d,l+1);if(a>=0){for(s=l;s<a;s++)Dt(i[s]),St(i,s,t,"removed");u=Ft(i[a],d,o)||u,l=a+1}else Vt(d,e,l<n?i[l].domNode:void 0,o),Et(d),St(r,c,t,"added")}c++}if(n>l)for(s=l;s<n;s++)Dt(i[s]),St(i,s,t,"removed");return u})(e,r,t.children,e.children,i)||n,n=((t,e,i,r)=>{if(!i)return;let o=!1;const n=Object.keys(i),a=n.length;for(let s=0;s<a;s++){const a=n[s];let l=i[a];const c=e[a];if("class"===a)c!==l&&(Ht(t,c,!1),Ht(t,l,!0));else if("classes"===a){const e=t.classList,i=Object.keys(l),r=i.length;for(let t=0;t<r;t++){const r=i[t],n=!!l[r];n!==!!c[r]&&(o=!0,n?e.add(r):e.remove(r))}}else if("styles"===a){const e=Object.keys(l),i=e.length;for(let n=0;n<i;n++){const i=e[n],a=l[i];a!==c[i]&&(o=!0,a?(Tt(a),r.styleApplyer(t,i,a)):r.styleApplyer(t,i,""))}}else if(l||"string"!=typeof c||(l=""),"value"===a){const e=t[a];e!==l&&(t["oninput-value"]?e===t["oninput-value"]:l!==c)&&(t[a]=l,t["oninput-value"]=void 0),l!==c&&(o=!0)}else if(l!==c){const e=typeof l;"function"===e&&r.eventHandlerInterceptor||(r.namespace===xt?"href"===a?t.setAttributeNS("http://www.w3.org/1999/xlink",a,l):t.setAttribute(a,l):"string"===e?"innerHTML"===a?t[a]=vt.sanitize(l):"role"===a&&""===l?t.removeAttribute(a):t.setAttribute(a,l):t[a]!==l&&(t[a]=l),o=!0)}}return o})(r,t.properties,e.properties,i)||n,e.properties&&e.properties.afterUpdate&&e.properties.afterUpdate.apply(e.properties.bind||e.properties,[r,i,e.vnodeSelector,e.properties,e.children]);return n&&e.properties&&e.properties.updateAnimation&&e.properties.updateAnimation(r,e.properties,t.properties),o};let Pt=(t,e)=>({getLastRender:()=>t,update:i=>{if(t.vnodeSelector!==i.vnodeSelector)throw new Error("The selector for the root VNode may not be changed. (consider using dom.merge and add one extra level to the virtual DOM)");const r=t;t=i,Ft(r,i,e)},domNode:t.domNode});const Bt={namespace:void 0,performanceLogger:()=>{},eventHandlerInterceptor:void 0,styleApplyer:(t,e,i)=>{t.style[e]=i}};let Mt=t=>At(Bt,t),Rt=(t,e,i)=>(i=Mt(i),Vt(e,t,void 0,i),Pt(e,i)),Gt=(t,e,i)=>(i=Mt(i),Vt(e,t.parentNode,t,i),Pt(e,i)),Qt=(t,e,i)=>(i=Mt(i),e.domNode=t,Wt(t,e,i),Pt(e,i)),Yt=(t,e,i)=>(i=Mt(i),Vt(e,t.parentNode,t,i),t.parentNode.removeChild(t),Pt(e,i));const Zt=(t,e)=>{const i=[];for(;t!==e;)i.push(t),t=t.parentNode;return i};let Ut;Ut=Array.prototype.find?(t,e)=>t.find(e):(t,e)=>t.filter(e)[0];const Xt=(t,e)=>{let i=t;return e.forEach((t=>{i=i&&i.children?Ut(i.children,(e=>e.domNode===t)):void 0})),i},_t=(t,e,i)=>{const r=function(r){i("domEvent",r);const o=e(),n=Zt(r.currentTarget,o.domNode);n.reverse();const a=Xt(o.getLastRender(),n);let s;return t.scheduleRender(),a&&(s=a.properties[`on${r.type}`].apply(a.properties.bind||this,arguments)),i("domEventProcessed",r),s};return()=>r};let Jt=t=>{let e;const i=Mt(t),r=i.performanceLogger;let o,n=!0,a=!1;const s=[],l=[],c=(t,o,n)=>{let a;i.eventHandlerInterceptor=_t(e,(()=>a),r),a=t(o,n(),i),s.push(a),l.push(n)},u=()=>{if(o=void 0,n){n=!1,r("renderStart",void 0);for(let t=0;t<s.length;t++){const e=l[t]();r("rendered",void 0),s[t].update(e),r("patched",void 0)}r("renderDone",void 0),n=!0}};return e={renderNow:u,scheduleRender:()=>{o||a||(o=requestAnimationFrame(u))},stop:()=>{o&&(cancelAnimationFrame(o),o=void 0),a=!0},resume:()=>{a=!1,n=!0,e.scheduleRender()},append:(t,e)=>{c(Rt,t,e)},insertBefore:(t,e)=>{c(Gt,t,e)},merge:(t,e)=>{c(Qt,t,e)},replace:(t,e)=>{c(Yt,t,e)},detach:t=>{for(let e=0;e<l.length;e++)if(l[e]===t)return l.splice(e,1),s.splice(e,1)[0];throw new Error("renderFunction was not found")}},e};export{dt as c,pt as d,ft as l,mt as p,kt as r,Jt as s,gt as u,wt as w}