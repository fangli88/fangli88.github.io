(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[158],{863:function(t,e,i){"use strict";i.r(e),i.d(e,"DropShadow",(function(){return u}));i(5);var r=i(22),s=(i(429),i(438)),o=i(426),a=(i(428),i(521));const n=[1,0],l=[0,1];class u{constructor(){this._horizontalBlurFBO=null,this._verticalBlurFBO=null,this._size=[0,0],this._programDesc={blur:{vsPath:"post-processing/drop-shadow",fsPath:"post-processing/blur/gaussianBlur",attributes:{a_position:0}},composite:{vsPath:"post-processing/pp",fsPath:"post-processing/drop-shadow/composite",attributes:{a_position:0}},blit:{vsPath:"post-processing/pp",fsPath:"post-processing/blit",attributes:{a_position:0}}}}dispose(){this._layerFBOTexture&&(this._layerFBOTexture.dispose(),this._layerFBOTexture=null),this._horizontalBlurFBO&&(this._horizontalBlurFBO.dispose(),this._horizontalBlurFBO=null),this._verticalBlurFBO&&(this._verticalBlurFBO.dispose(),this._verticalBlurFBO=null)}draw(t,e,i){const{context:s,state:o,painter:u,pixelRatio:h}=t,{size:d}=o,{materialManager:p}=u,c=this._programDesc,_=Math.round(h*d[0]),B=Math.round(h*d[1]),f=[Math.round(_/2),Math.round(B/2)],{blurRadius:m,offsetX:F,offsetY:b,color:g}=i,T=[h*Object(r.d)(F/2),h*Object(r.d)(b/2)];this._createOrResizeResources(t,f);const x=this._horizontalBlurFBO,O=this._verticalBlurFBO;s.setStencilWriteMask(0),s.setStencilTestEnabled(!1),s.setDepthWriteEnabled(!1),s.setDepthTestEnabled(!1);const w=this._layerFBOTexture;e.copyToTexture(0,0,_,B,0,0,w),this._quad||(this._quad=new a.a(s,[-1,-1,1,-1,-1,1,1,1])),s.setViewport(0,0,f[0],f[1]);const z=this._quad;z.bind(),s.setBlendingEnabled(!1);const v=p.getProgram(t,c.blur,[{name:"radius",value:Math.ceil(m)}]);s.bindProgram(v),s.bindFramebuffer(x),s.bindTexture(e.colorTexture,4),v.setUniformMatrix3fv("u_displayViewMat3",o.displayMat3),v.setUniform2fv("u_offset",T),v.setUniform1i("u_colorTexture",4),v.setUniform2fv("u_texSize",f),v.setUniform2fv("u_direction",n),v.setUniform1f("u_sigma",m),z.draw(),s.bindFramebuffer(O),s.bindTexture(x.colorTexture,5),v.setUniformMatrix3fv("u_displayViewMat3",o.displayMat3),v.setUniform2fv("u_offset",[0,0]),v.setUniform1i("u_colorTexture",5),v.setUniform2fv("u_direction",l),z.draw(),s.bindFramebuffer(e),s.setViewport(0,0,_,B);const M=p.getProgram(t,c.composite);s.bindProgram(M),s.bindTexture(O.colorTexture,2),M.setUniform1i("u_blurTexture",2),s.bindTexture(w,3),M.setUniform1i("u_layerFBOTexture",3),M.setUniform4fv("u_shadowColor",[g[3]*(g[0]/255),g[3]*(g[1]/255),g[3]*(g[2]/255),g[3]]),z.draw(),s.setBlendingEnabled(!0),s.setStencilTestEnabled(!0),s.setBlendFunction(1,771),z.unbind()}_createOrResizeResources(t,e){const{context:i,pixelRatio:r,state:a}=t,{size:n}=a,l=Math.round(r*n[0]),u=Math.round(r*n[1]);this._horizontalBlurFBO&&this._size[0]===l&&this._size[1]===u||(this._size[0]=l,this._size[1]=u,this._horizontalBlurFBO?this._horizontalBlurFBO.resize(e[0],e[1]):this._horizontalBlurFBO=new o.a(i,{colorTarget:0,depthStencilTarget:0,width:e[0],height:e[1]},{target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071,samplingMode:9729,flipped:!1,width:e[0],height:e[1]}),this._verticalBlurFBO?this._verticalBlurFBO.resize(e[0],e[1]):this._verticalBlurFBO=new o.a(i,{colorTarget:0,depthStencilTarget:0,width:e[0],height:e[1]},{target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071,samplingMode:9729,flipped:!1,width:e[0],height:e[1]}),this._layerFBOTexture?this._layerFBOTexture.resize(l,u):this._layerFBOTexture=new s.a(i,{target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071,samplingMode:9729,flipped:!1,width:l,height:u}))}}}}]);
//# sourceMappingURL=158.e054e5a7.chunk.js.map