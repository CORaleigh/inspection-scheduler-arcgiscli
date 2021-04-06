(self.webpackChunkinspection_scheduler=self.webpackChunkinspection_scheduler||[]).push([[8152],{10510:(e,t,r)=>{"use strict";r.d(t,{D:()=>I,b:()=>P});var i=r(85461),o=r(62213),n=r(51219),a=r(61514),s=r(8681),c=r(34658),l=r(17811),u=r(11823),d=r(71613),f=r(31777),h=r(87023),m=r(84530),p=r(82094),v=r(44624),g=r(7261),b=r(74681),x=r(6838),y=r(31163),_=r(34074),w=r(20829),S=r(10832),T=r(72582),M=r(72884),C=r(52369),O=r(62734),A=r(50230);function P(e){const t=new n.kG,r=t.vertex.code,P=t.fragment.code;return t.include(O.a,{name:"Default Material Shader",output:e.output}),t.vertex.uniforms.add("proj","mat4").add("view","mat4").add("camPos","vec3").add("localOrigin","vec3"),t.include(x.f),t.varyings.add("vpos","vec3"),t.include(s.k,e),t.include(m.f,e),t.include(l.L,e),0!==e.output&&7!==e.output||(t.include(b.O,e),t.include(o.w,{linearDepth:!1}),0===e.normalType&&e.offsetBackfaces&&t.include(g.w),t.include(S.Q,e),t.include(_.B,e),e.instancedColor&&t.attributes.add("instanceColor","vec4"),t.varyings.add("localvpos","vec3"),t.include(p.D,e),t.include(f.q,e),t.include(y.R,e),t.include(u.c,e),t.vertex.uniforms.add("externalColor","vec4"),t.varyings.add("vcolorExt","vec4"),r.add(i.H`
      void main(void) {
        forwardNormalizedVertexColor();
        vcolorExt = externalColor;
        ${e.instancedColor?"vcolorExt *= instanceColor;":""}
        vcolorExt *= vvColor();
        vcolorExt *= getSymbolColor();
        forwardColorMixMode();

        if (vcolorExt.a < ${i.H.float(c.bf)}) {
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        }
        else {
          vpos = calculateVPos();
          localvpos = vpos - view[3].xyz;
          vpos = subtractOrigin(vpos);
          ${0===e.normalType?i.H`
          vNormalWorld = dpNormal(vvLocalNormal(normalModel()));`:""}
          vpos = addVerticalOffset(vpos, localOrigin);
          ${e.vertexTangets?"vTangent = dpTransformVertexTangent(tangent);":""}
          gl_Position = transformPosition(proj, view, vpos);
          ${0===e.normalType&&e.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, camPos);":""}
        }
        forwardLinearDepth();
        forwardTextureCoordinates();
      }
    `)),7===e.output&&(t.include(a.p,e),t.include(c.sj,e),t.fragment.uniforms.add("camPos","vec3").add("localOrigin","vec3").add("opacity","float").add("layerOpacity","float"),e.hasColorTexture&&t.fragment.uniforms.add("tex","sampler2D"),t.fragment.include(A.y),P.add(i.H`
      void main() {
        discardBySlice(vpos);
        ${e.hasColorTexture?i.H`
        vec4 texColor = texture2D(tex, vuv0);
        ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:i.H`vec4 texColor = vec4(1.0);`}
        ${e.attributeColor?i.H`
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:i.H`
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}
        gl_FragColor = vec4(opacity_);
      }
    `)),0===e.output&&(t.include(a.p,e),t.include(M.X,e),t.include(T.K,e),t.include(c.sj,e),e.receiveShadows&&t.include(d.h,e),t.fragment.uniforms.add("camPos","vec3").add("localOrigin","vec3").add("ambient","vec3").add("diffuse","vec3").add("opacity","float").add("layerOpacity","float"),e.hasColorTexture&&t.fragment.uniforms.add("tex","sampler2D"),t.include(v.j,e),t.include(h.T,e),t.fragment.include(A.y),t.include(C.k,e),P.add(i.H`
      void main() {
        discardBySlice(vpos);
        ${e.hasColorTexture?i.H`
        vec4 texColor = texture2D(tex, vuv0);
        ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:i.H`vec4 texColor = vec4(1.0);`}
        shadingParams.viewDirection = normalize(vpos - camPos);
        ${3===e.normalType?i.H`
        vec3 normal = screenDerivativeNormal(localvpos);`:i.H`
        shadingParams.normalView = vNormalWorld;
        vec3 normal = shadingNormal(shadingParams);`}
        ${1===e.pbrMode?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = _oldHeuristicLighting(vpos + localOrigin);
        vec3 additionalLight = ssao * lightingMainIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${e.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":1===e.viewingMode?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${e.attributeColor?i.H`
        vec3 albedo_ = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:i.H`
        vec3 albedo_ = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}
        ${e.hasNormalTexture?i.H`
              mat3 tangentSpace = ${e.vertexTangets?"computeTangentSpace(normal);":"computeTangentSpace(normal, vpos, vuv0);"}
              vec3 shadedNormal = computeTextureNormal(tangentSpace, vuv0);`:"vec3 shadedNormal = normal;"}
        ${1===e.pbrMode||2===e.pbrMode?1===e.viewingMode?i.H`vec3 normalGround = normalize(vpos + localOrigin);`:i.H`vec3 normalGround = vec3(0.0, 0.0, 1.0);`:i.H``}
        ${1===e.pbrMode||2===e.pbrMode?i.H`
            float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * lightingMainIntensity[2];
            vec3 shadedColor = evaluateSceneLightingPBR(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:"vec3 shadedColor = evaluateSceneLighting(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight);"}
        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${e.OITEnabled?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}
      }
    `)),t.include(w.s,e),t}var I=Object.freeze({__proto__:null,build:P})},79733:(e,t,r)=>{"use strict";r.d(t,{R:()=>C,b:()=>M});var i=r(85461),o=r(62213),n=r(51219),a=r(61514),s=r(8681),c=r(34658),l=r(17811),u=r(11823),d=r(71613),f=r(31777),h=r(87023),m=r(84530),p=r(82094),v=r(44624),g=r(7261),b=r(74681),x=r(6838),y=r(31163),_=r(20829),w=r(72582),S=r(72884),T=r(50230);function M(e){const t=new n.kG,r=t.vertex.code,M=t.fragment.code;return t.vertex.uniforms.add("proj","mat4").add("view","mat4").add("camPos","vec3").add("localOrigin","vec3"),t.include(x.f),t.varyings.add("vpos","vec3"),t.include(s.k,e),t.include(m.f,e),t.include(l.L,e),0!==e.output&&7!==e.output||(t.include(b.O,e),t.include(o.w,{linearDepth:!1}),e.offsetBackfaces&&t.include(g.w),e.instancedColor&&t.attributes.add("instanceColor","vec4"),t.varyings.add("vNormalWorld","vec3"),t.varyings.add("localvpos","vec3"),t.include(p.D,e),t.include(f.q,e),t.include(y.R,e),t.include(u.c,e),t.vertex.uniforms.add("externalColor","vec4"),t.varyings.add("vcolorExt","vec4"),r.add(i.H`
        void main(void) {
          forwardNormalizedVertexColor();
          vcolorExt = externalColor;
          ${e.instancedColor?"vcolorExt *= instanceColor;":""}
          vcolorExt *= vvColor();
          vcolorExt *= getSymbolColor();
          forwardColorMixMode();

          if (vcolorExt.a < ${i.H.float(c.bf)}) {
            gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          }
          else {
            vpos = calculateVPos();
            localvpos = vpos - view[3].xyz;
            vpos = subtractOrigin(vpos);
            vNormalWorld = dpNormal(vvLocalNormal(normalModel()));
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, vpos);
            ${e.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, camPos);":""}
          }
          forwardLinearDepth();
          forwardTextureCoordinates();
        }
      `)),7===e.output&&(t.include(a.p,e),t.include(c.sj,e),t.fragment.uniforms.add("camPos","vec3").add("localOrigin","vec3").add("opacity","float").add("layerOpacity","float"),t.fragment.uniforms.add("view","mat4"),e.hasColorTexture&&t.fragment.uniforms.add("tex","sampler2D"),t.fragment.include(T.y),M.add(i.H`
      void main() {
        discardBySlice(vpos);
        ${e.hasColorTexture?i.H`
        vec4 texColor = texture2D(tex, vuv0);
        ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:i.H`vec4 texColor = vec4(1.0);`}
        ${e.attributeColor?i.H`
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:i.H`
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}

        gl_FragColor = vec4(opacity_);
      }
    `)),0===e.output&&(t.include(a.p,e),t.include(S.X,e),t.include(w.K,e),t.include(c.sj,e),e.receiveShadows&&t.include(d.h,e),t.fragment.uniforms.add("camPos","vec3").add("localOrigin","vec3").add("ambient","vec3").add("diffuse","vec3").add("opacity","float").add("layerOpacity","float"),t.fragment.uniforms.add("view","mat4"),e.hasColorTexture&&t.fragment.uniforms.add("tex","sampler2D"),t.include(v.j,e),t.include(h.T,e),t.fragment.include(T.y),M.add(i.H`
      void main() {
        discardBySlice(vpos);
        ${e.hasColorTexture?i.H`
        vec4 texColor = texture2D(tex, vuv0);
        ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:i.H`vec4 texColor = vec4(1.0);`}
        vec3 viewDirection = normalize(vpos - camPos);
        ${1===e.pbrMode?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = _oldHeuristicLighting(vpos + localOrigin);
        vec3 additionalLight = ssao * lightingMainIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${e.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":1===e.viewingMode?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${e.attributeColor?i.H`
        vec3 albedo_ = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:i.H`
        vec3 albedo_ = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}
        ${i.H`
        vec3 shadedNormal = normalize(vNormalWorld);
        albedo_ *= 1.2;
        vec3 viewForward = - vec3(view[0][2], view[1][2], view[2][2]);
        float alignmentLightView = clamp(dot(-viewForward, lightingMainDirection), 0.0, 1.0);
        float transmittance = 1.0 - clamp(dot(-viewForward, shadedNormal), 0.0, 1.0);
        float treeRadialFalloff = vColor.r;
        float backLightFactor = 0.5 * treeRadialFalloff * alignmentLightView * transmittance * (1.0 - shadow);
        additionalLight += backLightFactor * lightingMainIntensity;`}
        ${1===e.pbrMode||2===e.pbrMode?1===e.viewingMode?i.H`vec3 normalGround = normalize(vpos + localOrigin);`:i.H`vec3 normalGround = vec3(0.0, 0.0, 1.0);`:i.H``}
        ${1===e.pbrMode||2===e.pbrMode?i.H`
            float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * lightingMainIntensity[2];
            vec3 shadedColor = evaluateSceneLightingPBR(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight, viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:"vec3 shadedColor = evaluateSceneLighting(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight);"}
        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${e.OITEnabled?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}
      }
    `)),t.include(_.s,e),t}var C=Object.freeze({__proto__:null,build:M})},30663:(e,t,r)=>{"use strict";function i(){return[1,0,0,0,1,0,0,0,1]}function o(e,t){return new Float64Array(e,t,9)}r.d(t,{a:()=>i,c:()=>o});Object.freeze({__proto__:null,create:i,clone:function(e){return[e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8]]},fromValues:function(e,t,r,i,o,n,a,s,c){return[e,t,r,i,o,n,a,s,c]},createView:o})},6897:(e,t,r)=>{"use strict";function i(){const e=new Float32Array(16);return e[0]=1,e[5]=1,e[10]=1,e[15]=1,e}r.d(t,{c:()=>i});const o=i();Object.freeze({__proto__:null,create:i,clone:function(e){const t=new Float32Array(16);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t},fromValues:function(e,t,r,i,o,n,a,s,c,l,u,d,f,h,m,p){const v=new Float32Array(16);return v[0]=e,v[1]=t,v[2]=r,v[3]=i,v[4]=o,v[5]=n,v[6]=a,v[7]=s,v[8]=c,v[9]=l,v[10]=u,v[11]=d,v[12]=f,v[13]=h,v[14]=m,v[15]=p,v},createView:function(e,t){return new Float32Array(e,t,16)},IDENTITY:o})},12811:(e,t,r)=>{"use strict";function i(){return[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}function o(e){return[e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8],e[9],e[10],e[11],e[12],e[13],e[14],e[15]]}function n(e,t){return new Float64Array(e,t,16)}r.d(t,{I:()=>a,a:()=>i,b:()=>o,c:()=>n});const a=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];Object.freeze({__proto__:null,create:i,clone:o,fromValues:function(e,t,r,i,o,n,a,s,c,l,u,d,f,h,m,p){return[e,t,r,i,o,n,a,s,c,l,u,d,f,h,m,p]},createView:n,IDENTITY:a})},2847:(e,t,r)=>{"use strict";r.d(t,{c:()=>h,g:()=>u});var i=r(77625),o=r(60418),n=r(17387),a=r(30663),s=r(32232),c=r(34353);function l(e,t,r){r*=.5;const i=Math.sin(r);return e[0]=i*t[0],e[1]=i*t[1],e[2]=i*t[2],e[3]=Math.cos(r),e}function u(e,t){const r=2*Math.acos(t[3]),i=Math.sin(r/2);return i>o.E?(e[0]=t[0]/i,e[1]=t[1]/i,e[2]=t[2]/i):(e[0]=1,e[1]=0,e[2]=0),r}function d(e,t,r){const i=t[0],o=t[1],n=t[2],a=t[3],s=r[0],c=r[1],l=r[2],u=r[3];return e[0]=i*u+a*s+o*l-n*c,e[1]=o*u+a*c+n*s-i*l,e[2]=n*u+a*l+i*c-o*s,e[3]=a*u-i*s-o*c-n*l,e}function f(e,t,r,i){const n=t[0],a=t[1],s=t[2],c=t[3];let l,u,d,f,h,m=r[0],p=r[1],v=r[2],g=r[3];return u=n*m+a*p+s*v+c*g,u<0&&(u=-u,m=-m,p=-p,v=-v,g=-g),1-u>o.E?(l=Math.acos(u),d=Math.sin(l),f=Math.sin((1-i)*l)/d,h=Math.sin(i*l)/d):(f=1-i,h=i),e[0]=f*n+h*m,e[1]=f*a+h*p,e[2]=f*s+h*v,e[3]=f*c+h*g,e}function h(e,t){return e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e[3]=t[3],e}function m(e,t){const r=t[0]+t[4]+t[8];let i;if(r>0)i=Math.sqrt(r+1),e[3]=.5*i,i=.5/i,e[0]=(t[5]-t[7])*i,e[1]=(t[6]-t[2])*i,e[2]=(t[1]-t[3])*i;else{let r=0;t[4]>t[0]&&(r=1),t[8]>t[3*r+r]&&(r=2);const o=(r+1)%3,n=(r+2)%3;i=Math.sqrt(t[3*r+r]-t[3*o+o]-t[3*n+n]+1),e[r]=.5*i,i=.5/i,e[3]=(t[3*o+n]-t[3*n+o])*i,e[o]=(t[3*o+r]+t[3*r+o])*i,e[n]=(t[3*n+r]+t[3*r+n])*i}return e}const p=c.c,v=c.s,g=c.a,b=d,x=c.b,y=c.d,_=c.l,w=c.e,S=w,T=c.f,M=T,C=c.n,O=c.g,A=c.h;const P=(0,i.c)(),I=(0,i.f)(1,0,0),R=(0,i.f)(0,1,0);const F=(0,s.a)(),L=(0,s.a)();const B=(0,a.a)();Object.freeze({__proto__:null,identity:function(e){return e[0]=0,e[1]=0,e[2]=0,e[3]=1,e},setAxisAngle:l,getAxisAngle:u,multiply:d,rotateX:function(e,t,r){r*=.5;const i=t[0],o=t[1],n=t[2],a=t[3],s=Math.sin(r),c=Math.cos(r);return e[0]=i*c+a*s,e[1]=o*c+n*s,e[2]=n*c-o*s,e[3]=a*c-i*s,e},rotateY:function(e,t,r){r*=.5;const i=t[0],o=t[1],n=t[2],a=t[3],s=Math.sin(r),c=Math.cos(r);return e[0]=i*c-n*s,e[1]=o*c+a*s,e[2]=n*c+i*s,e[3]=a*c-o*s,e},rotateZ:function(e,t,r){r*=.5;const i=t[0],o=t[1],n=t[2],a=t[3],s=Math.sin(r),c=Math.cos(r);return e[0]=i*c+o*s,e[1]=o*c-i*s,e[2]=n*c+a*s,e[3]=a*c-n*s,e},calculateW:function(e,t){const r=t[0],i=t[1],o=t[2];return e[0]=r,e[1]=i,e[2]=o,e[3]=Math.sqrt(Math.abs(1-r*r-i*i-o*o)),e},slerp:f,random:function(e){const t=(0,o.R)(),r=(0,o.R)(),i=(0,o.R)(),n=Math.sqrt(1-t),a=Math.sqrt(t);return e[0]=n*Math.sin(2*Math.PI*r),e[1]=n*Math.cos(2*Math.PI*r),e[2]=a*Math.sin(2*Math.PI*i),e[3]=a*Math.cos(2*Math.PI*i),e},invert:function(e,t){const r=t[0],i=t[1],o=t[2],n=t[3],a=r*r+i*i+o*o+n*n,s=a?1/a:0;return e[0]=-r*s,e[1]=-i*s,e[2]=-o*s,e[3]=n*s,e},conjugate:h,fromMat3:m,fromEuler:function(e,t,r,i){const o=.5*Math.PI/180;t*=o,r*=o,i*=o;const n=Math.sin(t),a=Math.cos(t),s=Math.sin(r),c=Math.cos(r),l=Math.sin(i),u=Math.cos(i);return e[0]=n*c*u-a*s*l,e[1]=a*s*u+n*c*l,e[2]=a*c*l-n*s*u,e[3]=a*c*u+n*s*l,e},str:function(e){return"quat("+e[0]+", "+e[1]+", "+e[2]+", "+e[3]+")"},copy:p,set:v,add:g,mul:b,scale:x,dot:y,lerp:_,length:w,len:S,squaredLength:T,sqrLen:M,normalize:C,exactEquals:O,equals:A,rotationTo:function(e,t,r){const i=(0,n.d)(t,r);return i<-.999999?((0,n.c)(P,I,t),(0,n.j)(P)<1e-6&&(0,n.c)(P,R,t),(0,n.n)(P,P),l(e,P,Math.PI),e):i>.999999?(e[0]=0,e[1]=0,e[2]=0,e[3]=1,e):((0,n.c)(P,t,r),e[0]=P[0],e[1]=P[1],e[2]=P[2],e[3]=1+i,C(e,e))},sqlerp:function(e,t,r,i,o,n){return f(F,t,o,n),f(L,r,i,n),f(e,F,L,2*n*(1-n)),e},setAxes:function(e,t,r,i){const o=B;return o[0]=r[0],o[3]=r[1],o[6]=r[2],o[1]=i[0],o[4]=i[1],o[7]=i[2],o[2]=-t[0],o[5]=-t[1],o[8]=-t[2],C(e,m(e,o))}})},32232:(e,t,r)=>{"use strict";function i(){return[0,0,0,1]}function o(e,t){return new Float64Array(e,t,4)}r.d(t,{a:()=>i,c:()=>o});Object.freeze({__proto__:null,create:i,clone:function(e){return[e[0],e[1],e[2],e[3]]},fromValues:function(e,t,r,i){return[e,t,r,i]},createView:o,IDENTITY:[0,0,0,1]})},69236:(e,t,r)=>{"use strict";function i(){return new Float32Array(3)}function o(e,t,r){const i=new Float32Array(3);return i[0]=e,i[1]=t,i[2]=r,i}function n(){return i()}function a(){return o(1,1,1)}function s(){return o(1,0,0)}function c(){return o(0,1,0)}function l(){return o(0,0,1)}r.d(t,{c:()=>i,f:()=>o});const u=n(),d=a(),f=s(),h=c(),m=l();Object.freeze({__proto__:null,create:i,clone:function(e){const t=new Float32Array(3);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t},fromValues:o,createView:function(e,t){return new Float32Array(e,t,3)},zeros:n,ones:a,unitX:s,unitY:c,unitZ:l,ZEROS:u,ONES:d,UNIT_X:f,UNIT_Y:h,UNIT_Z:m})},38256:(e,t,r)=>{"use strict";function i(){return[0,0,0,0]}function o(e,t,r,i){return[e,t,r,i]}function n(e,t){return new Float64Array(e,t,4)}function a(){return o(1,1,1,1)}function s(){return o(1,0,0,0)}function c(){return o(0,1,0,0)}function l(){return o(0,0,1,0)}function u(){return o(0,0,0,1)}r.d(t,{a:()=>i,b:()=>o,c:()=>n});const d=a(),f=s(),h=c(),m=l(),p=u();Object.freeze({__proto__:null,create:i,clone:function(e){return[e[0],e[1],e[2],e[3]]},fromValues:o,fromArray:function(e){const t=[0,0,0,0],r=Math.min(4,e.length);for(let i=0;i<r;++i)t[i]=e[i];return t},createView:n,zeros:function(){return[0,0,0,0]},ones:a,unitX:s,unitY:c,unitZ:l,unitW:u,ZEROS:[0,0,0,0],ONES:d,UNIT_X:f,UNIT_Y:h,UNIT_Z:m,UNIT_W:p})},41419:(e,t,r)=>{"use strict";r.d(t,{t:()=>o});var i=r(54721);async function o(e,t){const{data:r}=await(0,i.default)(e,{responseType:"image",...t});return r}},68152:(e,t,r)=>{"use strict";r.r(t),r.d(t,{fetch:()=>Xo,gltfToEngineResources:()=>Ko,parseUrl:()=>Zo});var i=r(59472),o=r(77625),n=r(17387),a=r(67128),s=r(37969),c=r(30663),l=r(12811),u=r(98501),d=r(12608),f=r(36544);const h=f.Z.getLogger("esri.views.3d.support.buffer.math");function m(e,t,r){if(e.count!==t.count)return void h.error("source and destination buffers need to have the same number of elements");const i=e.count,o=r[0],n=r[1],a=r[2],s=r[4],c=r[5],l=r[6],u=r[8],d=r[9],f=r[10],m=r[12],p=r[13],v=r[14],g=e.typedBuffer,b=e.typedBufferStride,x=t.typedBuffer,y=t.typedBufferStride;for(let e=0;e<i;e++){const t=e*b,r=e*y,i=x[r],h=x[r+1],_=x[r+2];g[t]=o*i+s*h+u*_+m,g[t+1]=n*i+c*h+d*_+p,g[t+2]=a*i+l*h+f*_+v}}function p(e,t,r){if(e.count!==t.count)return void h.error("source and destination buffers need to have the same number of elements");const i=e.count,o=r[0],n=r[1],a=r[2],s=r[3],c=r[4],l=r[5],u=r[6],d=r[7],f=r[8],m=e.typedBuffer,p=e.typedBufferStride,v=t.typedBuffer,g=t.typedBufferStride;for(let e=0;e<i;e++){const t=e*p,r=e*g,i=v[r],h=v[r+1],b=v[r+2];m[t]=o*i+s*h+u*b,m[t+1]=n*i+c*h+d*b,m[t+2]=a*i+l*h+f*b}}function v(e,t,r){const i=Math.min(e.count,t.count),o=e.typedBuffer,n=e.typedBufferStride,a=t.typedBuffer,s=t.typedBufferStride;for(let e=0;e<i;e++){const t=e*n,i=e*s;o[t]=r*a[i],o[t+1]=r*a[i+1],o[t+2]=r*a[i+2]}}Object.freeze({__proto__:null,transformMat4:m,transformMat3:p,scale:v,shiftRight:function(e,t,r){const i=Math.min(e.count,t.count),o=e.typedBuffer,n=e.typedBufferStride,a=t.typedBuffer,s=t.typedBufferStride;for(let e=0;e<i;e++){const t=e*n,i=e*s;o[t]=a[i]>>r,o[t+1]=a[i+1]>>r,o[t+2]=a[i+2]>>r}}});var g=r(69996),b=r(33469);class x{constructor(e){this.allocator=e,this.items=[],this.itemsPtr=0,this.tickHandle=b.Z.before((()=>this.reset())),this.grow()}destroy(){this.tickHandle&&(this.tickHandle.remove(),this.tickHandle=(0,i.Bd)(this.tickHandle)),this.items=(0,i.Bd)(this.items)}get(){return 0===this.itemsPtr&&(0,b.Z)((()=>{})),this.itemsPtr===this.items.length&&this.grow(),this.items[this.itemsPtr++]}reset(){const e=Math.min(3*Math.max(8,this.itemsPtr),this.itemsPtr+3*y);this.items.length=Math.min(e,this.items.length),this.itemsPtr=0}grow(){for(let e=0;e<Math.max(8,Math.min(this.items.length,y));e++)this.items.push(this.allocator())}}const y=1024;var _=r(14286),w=r(32232),S=r(55735),T=r(38256);class M{constructor(e,t,r){this.itemByteSize=e,this.itemCreate=t,this.buffers=[],this.items=[],this.itemsPerBuffer=0,this.itemsPtr=0,this.itemsPerBuffer=Math.ceil(r/this.itemByteSize),this.tickHandle=b.Z.before((()=>this.reset()))}destroy(){this.tickHandle&&(this.tickHandle.remove(),this.tickHandle=(0,i.Bd)(this.tickHandle)),this.itemsPtr=0,this.items=(0,i.Bd)(this.items),this.buffers=(0,i.Bd)(this.buffers)}get(){0===this.itemsPtr&&(0,b.Z)((()=>{}));const e=Math.floor(this.itemsPtr/this.itemsPerBuffer);for(;this.buffers.length<=e;){const e=new ArrayBuffer(this.itemsPerBuffer*this.itemByteSize);for(let t=0;t<this.itemsPerBuffer;++t)this.items.push(this.itemCreate(e,t*this.itemByteSize));this.buffers.push(e)}return this.items[this.itemsPtr++]}reset(){const e=2*(Math.floor(this.itemsPtr/this.itemsPerBuffer)+1);for(;this.buffers.length>e;)this.buffers.pop(),this.items.length=this.buffers.length*this.itemsPerBuffer;this.itemsPtr=0}static createVec2f64(e=C){return new M(16,S.c,e)}static createVec3f64(e=C){return new M(24,o.a,e)}static createVec4f64(e=C){return new M(32,T.c,e)}static createMat3f64(e=C){return new M(72,c.c,e)}static createMat4f64(e=C){return new M(128,l.c,e)}static createQuatf64(e=C){return new M(32,w.c,e)}get test(){return{size:this.buffers.length*this.itemsPerBuffer*this.itemByteSize}}}const C=4096,O=(M.createVec2f64(),M.createVec3f64()),A=M.createVec4f64(),P=(M.createMat3f64(),M.createMat4f64());M.createQuatf64();var I=r(33655);function R(e){return e?{origin:(0,o.b)(e.origin),vector:(0,o.b)(e.vector)}:{origin:(0,o.c)(),vector:(0,o.c)()}}function F(e,t){const r=N.get();return r.origin=e,r.vector=t,r}function L(e,t,r=R()){return(0,n.g)(r.origin,e),(0,n.g)(r.vector,t),r}function B(e,t){const r=(0,n.f)(O.get(),t,e.origin),i=(0,n.d)(e.vector,r),o=(0,n.d)(e.vector,e.vector),a=(0,I.uZ)(i/o,0,1),s=(0,n.f)(O.get(),(0,n.a)(O.get(),e.vector,a),r);return(0,n.d)(s,s)}function z(e,t,r,i,o){const{vector:a,origin:s}=e,c=(0,n.f)(O.get(),t,s),l=(0,n.l)(a),u=(0,n.d)(a,c)/l;return(0,n.a)(o,a,(0,I.uZ)(u,r,i)),(0,n.b)(o,o,e.origin)}function H(e,t,r,i){const o=1e-6,a=e.origin,s=(0,n.b)(O.get(),a,e.vector),c=t.origin,l=(0,n.b)(O.get(),c,t.vector),u=O.get(),d=O.get();if(u[0]=a[0]-c[0],u[1]=a[1]-c[1],u[2]=a[2]-c[2],d[0]=l[0]-c[0],d[1]=l[1]-c[1],d[2]=l[2]-c[2],Math.abs(d[0])<o&&Math.abs(d[1])<o&&Math.abs(d[2])<o)return!1;const f=O.get();if(f[0]=s[0]-a[0],f[1]=s[1]-a[1],f[2]=s[2]-a[2],Math.abs(f[0])<o&&Math.abs(f[1])<o&&Math.abs(f[2])<o)return!1;const h=u[0]*d[0]+u[1]*d[1]+u[2]*d[2],m=d[0]*f[0]+d[1]*f[1]+d[2]*f[2],p=u[0]*f[0]+u[1]*f[1]+u[2]*f[2],v=d[0]*d[0]+d[1]*d[1]+d[2]*d[2],g=(f[0]*f[0]+f[1]*f[1]+f[2]*f[2])*v-m*m;if(Math.abs(g)<o)return!1;let b=(h*m-p*v)/g,x=(h+m*b)/v;r&&(b=(0,I.uZ)(b,0,1),x=(0,I.uZ)(x,0,1));const y=O.get(),_=O.get();return y[0]=a[0]+b*f[0],y[1]=a[1]+b*f[1],y[2]=a[2]+b*f[2],_[0]=c[0]+x*d[0],_[1]=c[1]+x*d[1],_[2]=c[2]+x*d[2],i.tA=b,i.tB=x,i.pA=y,i.pB=_,i.distance2=(0,n.h)(y,_),!0}const D={tA:0,tB:0,pA:(0,o.c)(),pB:(0,o.c)(),distance2:0},N=new x((()=>({origin:null,vector:null})));Object.freeze({__proto__:null,create:R,wrap:F,copy:function(e,t=R()){return L(e.origin,e.vector,t)},fromValues:L,fromPoints:function(e,t,r=R()){return(0,n.g)(r.origin,e),(0,n.f)(r.vector,t,e),r},distance2:B,distance:function(e,t){return Math.sqrt(B(e,t))},projectPoint:function(e,t,r){return z(e,t,0,1,r)},pointAt:function(e,t,r){return(0,n.b)(r,e.origin,(0,n.a)(r,e.vector,t))},projectPointClamp:z,closestRayDistance2:function(e,t){if(H(e,F(t.origin,t.direction),!1,D)){const{tA:t,pB:r,distance2:i}=D;if(t>=0&&t<=1)return i;if(t<0)return(0,n.h)(e.origin,r);if(t>1)return(0,n.h)((0,n.b)(O.get(),e.origin,e.vector),r)}return null},closestLineSegmentPoint:function(e,t,r){return!!H(e,t,!0,D)&&((0,n.g)(r,D.pA),!0)},closestLineSegmentDistance2:function(e,t){return H(e,t,!0,D)?D.distance2:null}});function E(e){return e?{p0:(0,o.b)(e.p0),p1:(0,o.b)(e.p1),p2:(0,o.b)(e.p2)}:{p0:(0,o.c)(),p1:(0,o.c)(),p2:(0,o.c)()}}function V(e,t,r,i=E()){return(0,n.g)(i.p0,e),(0,n.g)(i.p1,t),(0,n.g)(i.p2,r),i}function U(e,t,r){const i=(0,_.i)(e,t),o=(0,_.i)(t,r),n=(0,_.i)(r,e),a=(i+o+n)/2,s=a*(a-i)*(a-o)*(a-n);return s<=0?0:Math.sqrt(s)}function G(e,t,r){return(0,n.f)(q,t,e),(0,n.f)(W,r,e),(0,n.l)((0,n.c)(q,q,W))/2}const k=new x(R),j=new x((()=>({p0:null,p1:null,p2:null}))),q=(0,o.c)(),W=(0,o.c)();Object.freeze({__proto__:null,create:E,wrap:function(e,t,r){const i=j.get();return i.p0=e,i.p1=t,i.p2=r,i},copy:function(e,t=E()){return V(e.p0,e.p1,e.p2,t)},fromValues:V,distance2:function(e,t){const r=e.p0,i=e.p1,o=e.p2,a=(0,n.f)(O.get(),i,r),s=(0,n.f)(O.get(),o,i),c=(0,n.f)(O.get(),r,o),l=(0,n.f)(O.get(),t,r),u=(0,n.f)(O.get(),t,i),d=(0,n.f)(O.get(),t,o),f=(0,n.c)(a,a,c),h=(0,n.d)((0,n.c)(O.get(),a,f),l),m=(0,n.d)((0,n.c)(O.get(),s,f),u),p=(0,n.d)((0,n.c)(O.get(),c,f),d);if(h>0&&m>0&&p>0){const e=(0,n.d)(f,l);return e*e/(0,n.d)(f,f)}const v=B(L(r,a,k.get()),t),g=B(L(i,s,k.get()),t),b=B(L(o,c,k.get()),t);return Math.min(v,g,b)},intersectRay:function(e,t,r){const i=1e-5,{direction:o,origin:a}=t,{p0:s,p1:c,p2:l}=e,u=c[0]-s[0],d=c[1]-s[1],f=c[2]-s[2],h=l[0]-s[0],m=l[1]-s[1],p=l[2]-s[2],v=o[1]*p-m*o[2],g=o[2]*h-p*o[0],b=o[0]*m-h*o[1],x=u*v+d*g+f*b;if(x>-i&&x<i)return!1;const y=1/x,_=a[0]-s[0],w=a[1]-s[1],S=a[2]-s[2],T=y*(_*v+w*g+S*b);if(T<0||T>1)return!1;const M=w*f-d*S,C=S*u-f*_,O=_*d-u*w,A=y*(o[0]*M+o[1]*C+o[2]*O);return!(A<0||T+A>1)&&(r&&((0,n.a)(r,o,y*(h*M+m*C+p*O)),(0,n.b)(r,a,r)),!0)},areaPoints2d:U,area2d:function(e){return U(e.p0,e.p1,e.p2)},areaPoints3d:G});let $=1,X=null;const Z=new Uint32Array([0]);function K(e){if(1===e)return Z;if(e>$||null==X){for(;e>$;)$*=2;X=new Uint32Array($);for(let e=0;e<$;e++)X[e]=e}return new Uint32Array(X.buffer,0,e)}let Y=0;const Q=(0,o.c)(),J=(0,o.c)(),ee=(0,o.c)(),te=(0,o.c)();var re=r(56469);class ie{constructor(e,t=ie.DefaultIndices,r="triangle"){this.initialize(e,t,r)}get id(){return this._id}get vertexAttributes(){return this._vertexAttributes}get indices(){return this._indices}get indexCount(){const e=(0,re.kV)(this._indices);return null==e?0:e.length}get primitiveType(){return this._primitiveType}getVertexAttr(){return this.vertexAttributes}initialize(e,t=ie.DefaultIndices,r="triangle"){const i={};for(const t in e){const{data:r,size:o}=e[t];i[t]={data:r,size:o,offsetIdx:0,strideIdx:o}}if(t===ie.DefaultIndices){const e=K(function(e){const t=(0,re.kV)(e);return null==t?0:t.data.length/t.size}(i));t={};for(const r in i)t[r]=e}this._id=Y++,this._vertexAttributes=i,this._indices=t,this._primitiveType=r}toRenderData(){return{id:this._id.toString(),indices:this._indices,vertexAttr:this._vertexAttributes}}getIndices(e){return this._indices[e]}getAttribute(e){return this._vertexAttributes[e]}estimateGpuMemoryUsage(){let e=0;if(this._indices[re.Xt.POSITION]){const t=3;e+=this._indices[re.Xt.POSITION].length*t*4}if(this._indices[re.Xt.NORMAL]){const t=3;e+=this._indices[re.Xt.NORMAL].length*t*4}if(this._indices[re.Xt.UV0]){const t=2;e+=this._indices[re.Xt.UV0].length*t*4}if(this._indices[re.Xt.COLOR]){const t=1;e+=this._indices[re.Xt.COLOR].length*t*4}return e}}ie.DefaultIndices={};class oe{constructor(){this._count=0}gen(e){return null==e&&(e="a"),e+"_"+this._count++}}var ne=r(62698);class ae{constructor(e,t,r,i){this.primitiveIndices=e,this._numIndexPerPrimitive=t,this.indices=r,this._position=i,this.center=(0,o.c)(),(0,re.hu)(e.length>=1),(0,re.hu)(r.length%this._numIndexPerPrimitive==0),(0,re.hu)(r.length>=e.length*this._numIndexPerPrimitive),(0,re.hu)(3===this._position.size||4===this._position.size);const{data:a,offsetIdx:s,strideIdx:c}=this._position;let l=0;const u=e.length;let d=s+c*r[this._numIndexPerPrimitive*e[l]];for(ae.tmpIndices.clear(),ae.tmpIndices.push(d),this.bbMin=(0,o.f)(a[d],a[d+1],a[d+2]),this.bbMax=(0,o.b)(this.bbMin);l<u;++l){const t=this._numIndexPerPrimitive*e[l];for(let e=0;e<this._numIndexPerPrimitive;++e){d=s+c*r[t+e],ae.tmpIndices.push(d);let i=a[d];this.bbMin[0]=Math.min(i,this.bbMin[0]),this.bbMax[0]=Math.max(i,this.bbMax[0]),i=a[d+1],this.bbMin[1]=Math.min(i,this.bbMin[1]),this.bbMax[1]=Math.max(i,this.bbMax[1]),i=a[d+2],this.bbMin[2]=Math.min(i,this.bbMin[2]),this.bbMax[2]=Math.max(i,this.bbMax[2])}}(0,n.e)(this.center,this.bbMin,this.bbMax,.5),this.bsRadius=.5*Math.max(Math.max(this.bbMax[0]-this.bbMin[0],this.bbMax[1]-this.bbMin[1]),this.bbMax[2]-this.bbMin[2]);let f=this.bsRadius*this.bsRadius;for(l=0;l<ae.tmpIndices.length;++l){d=ae.tmpIndices.data[l];const e=a[d]-this.center[0],t=a[d+1]-this.center[1],r=a[d+2]-this.center[2],i=e*e+t*t+r*r;if(i<=f)continue;const o=Math.sqrt(i),n=.5*(o-this.bsRadius);this.bsRadius=this.bsRadius+n,f=this.bsRadius*this.bsRadius;const s=n/o;this.center[0]+=e*s,this.center[1]+=t*s,this.center[2]+=r*s}ae.tmpIndices.clear()}getCenter(){return this.center}getBSRadius(){return this.bsRadius}getBBMin(){return this.bbMin}getBBMax(){return this.bbMax}getPrimitiveIndices(){return this.primitiveIndices}getIndices(){return this.indices}getPosition(){return this._position}getChildren(){if(this._children)return this._children;if((0,n.h)(this.bbMin,this.bbMax)>1){const e=(0,n.e)((0,o.c)(),this.bbMin,this.bbMax,.5),t=this.primitiveIndices.length,r=new Uint8Array(t),i=new Array(8);for(let e=0;e<8;++e)i[e]=0;const{data:a,offsetIdx:s,strideIdx:c}=this._position;for(let o=0;o<t;++o){let t=0;const n=this._numIndexPerPrimitive*this.primitiveIndices[o];let l=s+c*this.indices[n],u=a[l],d=a[l+1],f=a[l+2];for(let e=1;e<this._numIndexPerPrimitive;++e){l=s+c*this.indices[n+e];const t=a[l],r=a[l+1],i=a[l+2];t<u&&(u=t),r<d&&(d=r),i<f&&(f=i)}u<e[0]&&(t|=1),d<e[1]&&(t|=2),f<e[2]&&(t|=4),r[o]=t,++i[t]}let l=0;for(let e=0;e<8;++e)i[e]>0&&++l;if(l<2)return;const u=new Array(8);for(let e=0;e<8;++e)u[e]=i[e]>0?new Uint32Array(i[e]):void 0;for(let e=0;e<8;++e)i[e]=0;for(let e=0;e<t;++e){const t=r[e];u[t][i[t]++]=this.primitiveIndices[e]}this._children=new Array(8);for(let e=0;e<8;++e)void 0!==u[e]&&(this._children[e]=new ae(u[e],this._numIndexPerPrimitive,this.indices,this._position))}return this._children}}!function(e){e.tmpIndices=new ne.Z({deallocator:null})}(ae||(ae={}));const se=ae;class ce{constructor(e,t){this._boundingInfo=null,this._id=ce.__idGen.gen(t),this._data=e}get id(){return this._id}get data(){return this._data}getIndices(e){return this.data.getIndices(e)}get indexCount(){return this.data.indexCount}getAttribute(e){return this.data.getAttribute(e)}get vertexCount(){return this.data.indexCount}get faceCount(){return this.data.indexCount/3}get boundingInfo(){return(0,i.Wi)(this._boundingInfo)&&(this._boundingInfo=this._calculateBoundingInfo()),this._boundingInfo}computeAttachmentOrigin(e){return"triangle"===this.data.primitiveType?this.computeAttachmentOriginTriangles(e):this.computeAttachmentOriginPoints(e)}computeAttachmentOriginTriangles(e){const t=this.getIndices(re.Xt.POSITION);return function(e,t,r){if(!e)return!1;const{strideIdx:i,offsetIdx:o,data:a}=e;(0,n.s)(r,0,0,0),(0,n.s)(te,0,0,0);let s=0,c=0;for(let e=0;e<t.length-2;e+=3){const l=t[e+0]*i+o,u=t[e+1]*i+o,d=t[e+2]*i+o;(0,n.s)(Q,a[l+0],a[l+1],a[l+2]),(0,n.s)(J,a[u+0],a[u+1],a[u+2]),(0,n.s)(ee,a[d+0],a[d+1],a[d+2]);const f=G(Q,J,ee);f?((0,n.b)(Q,Q,J),(0,n.b)(Q,Q,ee),(0,n.a)(Q,Q,1/3*f),(0,n.b)(r,r,Q),s+=f):((0,n.b)(te,te,Q),(0,n.b)(te,te,J),(0,n.b)(te,te,ee),c+=3)}return!(0===c&&0===s||(0!==s?((0,n.a)(r,r,1/s),0):0===c||((0,n.a)(r,te,1/c),0)))}(this.getAttribute(re.Xt.POSITION),t,e)}computeAttachmentOriginPoints(e){const t=this.getIndices(re.Xt.POSITION);return function(e,t,r){if(!e||!t)return!1;const{strideIdx:i,offsetIdx:o,data:a}=e;(0,n.s)(r,0,0,0);let s=-1,c=0;for(let e=0;e<t.length;e++){const n=t[e]*i+o;s!==n&&(r[0]+=a[n+0],r[1]+=a[n+1],r[2]+=a[n+2],c++),s=n}return c>1&&(0,n.a)(r,r,1/c),c>0}(this.getAttribute(re.Xt.POSITION),t,e)}invalidateBoundingInfo(){this._boundingInfo=null}_calculateBoundingInfo(){let e=this.data.getIndices(re.Xt.POSITION);const t=this.data.getAttribute(re.Xt.POSITION),r="triangle"===this.data.primitiveType?3:1;if(0===e.length){e=new Uint32Array(r);for(let t=0;t<r;++t)e[t]=t}const i=e.length;(0,re.hu)(i%r==0,"Indexing error: "+i.toFixed(0)+" not divisible by "+r.toFixed(0));const o=K(i/r);return new se(o,r,e,t)}}ce.__idGen=new oe;const le=ce;var ue=r(80905),de=r(34353),fe=r(2847),he=r(69236),me=(r(95830),r(17154));function pe(e,t){return(0,n.d)(e,t)/(0,n.l)(e)}function ve(e,t){const r=(0,n.d)(e,t)/((0,n.l)(e)*(0,n.l)(t));return-(0,I.ZF)(r)}const ge=(0,o.c)(),be=(0,o.c)();Object.freeze({__proto__:null,projectPoint:function(e,t,r){const i=(0,n.d)(e,t)/(0,n.d)(e,e);return(0,n.a)(r,e,i)},projectPointSignedLength:pe,angle:ve,angleAroundAxis:function(e,t,r){(0,n.n)(ge,e),(0,n.n)(be,t);const i=(0,n.d)(ge,be),o=(0,I.ZF)(i),a=(0,n.c)(ge,ge,be);return(0,n.d)(a,r)<0?2*Math.PI-o:o}});function xe(e=$e){return[e[0],e[1],e[2],e[3]]}function ye(e,t,r,i){return we(e,t,r,i,A.get())}function _e(e,t=xe()){return we(e[0],e[1],e[2],e[3],t)}function we(e,t,r,i,o=xe()){return o[0]=e,o[1]=t,o[2]=r,o[3]=i,o}function Se(e,t,r=xe()){(0,n.g)(r,t);const i=(0,n.d)(t,t);return Math.abs(i-1)>1e-5&&i>1e-12&&(0,n.a)(r,r,1/Math.sqrt(i)),Fe(r,e,r),r}function Te(e,t,r,i=xe()){return Le((0,n.f)(O.get(),e,t),(0,n.f)(O.get(),r,t),e,i)}function Me(e,t,r,i,o){if(e.count<3)return!1;e.getVec(r,Oe);let a=i,s=!1;for(;a<e.count-1&&!s;)e.getVec(a,Ae),a++,s=!(0,n.m)(Oe,Ae);if(!s)return!1;for(a=Math.max(a,o),s=!1;a<e.count&&!s;)e.getVec(a,Pe),a++,(0,n.f)(Ie,Oe,Ae),(0,n.n)(Ie,Ie),(0,n.f)(Re,Ae,Pe),(0,n.n)(Re,Re),s=!(0,n.m)(Oe,Pe)&&!(0,n.m)(Ae,Pe)&&Math.abs((0,n.d)(Ie,Re))<Ce;return s?(Te(Oe,Ae,Pe,t),!0):(0!==r||1!==i||2!==o)&&Me(e,t,0,1,2)}const Ce=.99619469809,Oe=(0,o.c)(),Ae=(0,o.c)(),Pe=(0,o.c)(),Ie=(0,o.c)(),Re=(0,o.c)();function Fe(e,t,r){return e!==r&&_e(e,r),r[3]=-(0,n.d)(r,t),r}function Le(e,t,r,i=xe()){return Se(r,(0,n.c)(O.get(),t,e),i)}function Be(e,t,r){return!!(0,i.pC)(t)&&qe(e,t.origin,t.direction,!0,!1,r)}function ze(e,t,r){return qe(e,t.origin,t.vector,!1,!1,r)}function He(e,t,r){return qe(e,t.origin,t.vector,!1,!0,r)}function De(e,t){const{center:r,radius:i}=t;return je(e,r)-i>=0}function Ne(e,t){return je(e,t)>=0}function Ee(e,t){const r=t[0],i=t[1],o=t[2],n=t[3],a=t[4],s=t[5];return e[0]*(e[0]>0?r:n)+e[1]*(e[1]>0?i:a)+e[2]*(e[2]>0?o:s)+e[3]>=0}function Ve(e,t){const r=(0,n.d)(e,t.ray.direction),i=-je(e,t.ray.origin);if(i<0&&r>=0)return!1;if(r>-1e-6&&r<1e-6)return i>0;if((i<0||r<0)&&!(i<0&&r<0))return!0;const o=i/r;return r>0?o<t.c1&&(t.c1=o):o>t.c0&&(t.c0=o),t.c0<=t.c1}function Ue(e,t){const r=(0,n.d)(e,t.ray.direction),i=-je(e,t.ray.origin);if(r>-1e-6&&r<1e-6)return i>0;const o=i/r;return r>0?o<t.c1&&(t.c1=o):o>t.c0&&(t.c0=o),t.c0<=t.c1}function Ge(e,t,r){const i=(0,n.a)(O.get(),e,-e[3]),o=ke(e,(0,n.f)(O.get(),t,i),O.get());return(0,n.b)(r,o,i),r}function ke(e,t,r){const i=(0,n.a)(O.get(),e,(0,n.d)(e,t));return(0,n.f)(r,t,i),r}function je(e,t){return(0,n.d)(e,t)+e[3]}function qe(e,t,r,i,o,a){const s=(0,n.d)(e,r);if(0===s)return!1;let c=-((0,n.d)(e,t)+e[3])/s;return o&&(c=i?Math.max(0,c):(0,I.uZ)(c,0,1)),!(c<0||!i&&c>1||((0,n.b)(a,t,(0,n.a)(a,r,c)),0))}function We(e){return e}const $e=[0,0,1,0];Object.freeze({__proto__:null,create:xe,wrap:ye,copy:_e,fromValues:we,fromNormalAndOffset:function(e,t,r=xe()){return(0,n.g)(r,e),r[3]=t,r},fromPositionAndNormal:Se,fromPoints:Te,fromManyPoints:function(e,t){return Me(e,t,0,1,2)},fromManyPointsSampleAt:Me,setOffsetFromPoint:Fe,negate:function(e,t){return t[0]=-e[0],t[1]=-e[1],t[2]=-e[2],t[3]=-e[3],t},fromVectorsAndPoint:Le,intersectRay:Be,intersectLineSegment:ze,intersectLineSegmentClamp:He,isSphereFullyInside:De,isSphereFullyOutside:function(e,t){const{center:r,radius:i}=t;return je(e,r)+i<0},isPointInside:Ne,isPointOutside:function(e,t){return je(e,t)<0},isAABBFullyInside:Ee,clip:Ve,clipInfinite:Ue,projectPoint:Ge,projectVector:ke,distance:function(e,t){return Math.abs(je(e,t))},signedDistance:je,normal:We,UP:$e});var Xe=r(96071);function Ze(e){return e?{origin:(0,o.b)(e.origin),direction:(0,o.b)(e.direction)}:{origin:(0,o.c)(),direction:(0,o.c)()}}function Ke(e,t=Ze()){return Ye(e.origin,e.direction,t)}function Ye(e,t,r=Ze()){return(0,n.g)(r.origin,e),(0,n.g)(r.direction,t),r}function Qe(e,t,r=Ze()){const o=(0,Xe.Wv)((0,_.c)(O.get(),t));if(o[2]=0,!e.unprojectFromRenderScreen(o,r.origin))return null;const a=(0,Xe.Wv)((0,_.c)(O.get(),t));a[2]=1;const s=e.unprojectFromRenderScreen(a,O.get());return(0,i.Wi)(s)?null:((0,n.f)(r.direction,s,r.origin),r)}function Je(e,t,r=Ze()){return et(e,e.screenToRender(t,(0,Xe.Wv)(O.get())),r)}function et(e,t,r=Ze()){(0,n.g)(r.origin,e.eye);const o=(0,n.s)(O.get(),t[0],t[1],1),a=e.unprojectFromRenderScreen(o,O.get());return(0,i.Wi)(a)?null:((0,n.f)(r.direction,a,r.origin),r)}function tt(e,t){const r=(0,n.c)(O.get(),(0,n.n)(O.get(),e.direction),(0,n.f)(O.get(),t,e.origin));return(0,n.d)(r,r)}function rt(e,t,r){const i=(0,n.d)(e.direction,(0,n.f)(r,t,e.origin));return(0,n.b)(r,e.origin,(0,n.a)(r,e.direction,i)),r}function it(){return{origin:null,direction:null}}const ot=new x(it);Object.freeze({__proto__:null,create:Ze,wrap:function(e,t){const r=ot.get();return r.origin=e,r.direction=t,r},copy:Ke,fromPoints:function(e,t,r=Ze()){return(0,n.g)(r.origin,e),(0,n.f)(r.direction,t,e),r},fromValues:Ye,fromScreen:function(e,t,r=Ze()){return Qe(e,e.screenToRender(t,(0,Xe.Wv)(O.get())),r)},fromRender:Qe,fromScreenAtEye:Je,fromRenderAtEye:et,distance2:tt,distance:function(e,t){return Math.sqrt(tt(e,t))},closestPoint:rt,createWrapper:it});const nt=f.Z.getLogger("esri.views.3d.support.geometryUtils.boundedPlane");function at(e=Tt){return{plane:xe(e.plane),origin:(0,o.b)(e.origin),basis1:(0,o.b)(e.basis1),basis2:(0,o.b)(e.basis2)}}function st(e,t=at()){return ct(e.origin,e.basis1,e.basis2,t)}function ct(e,t,r,i=at()){return(0,n.g)(i.origin,e),(0,n.g)(i.basis1,t),(0,n.g)(i.basis2,r),lt(i),function(e,t){Math.abs((0,n.d)(e.basis1,e.basis2)/((0,n.l)(e.basis1)*(0,n.l)(e.basis2)))>1e-6&&nt.warn(t,"Provided basis vectors are not perpendicular"),Math.abs((0,n.d)(e.basis1,xt(e)))>1e-6&&nt.warn(t,"Basis vectors and plane normal are not perpendicular"),Math.abs(-(0,n.d)(xt(e),e.origin)-e.plane[3])>1e-6&&nt.warn(t,"Plane offset is not consistent with plane origin")}(i,"fromValues()"),i}function lt(e){Le(e.basis2,e.basis1,e.origin,e.plane)}function ut(e,t,r){e!==r&&st(e,r);const i=(0,n.a)(O.get(),xt(e),t);return(0,n.b)(r.origin,r.origin,i),r.plane[3]-=t,r}function dt(e,t=at()){const r=(e[2]-e[0])/2,i=(e[3]-e[1])/2;return(0,n.s)(t.origin,e[0]+r,e[1]+i,0),(0,n.s)(t.basis1,r,0,0),(0,n.s)(t.basis2,0,i,0),we(0,0,1,0,t.plane),t}function ft(e,t,r){return!!Be(e.plane,t,r)&&yt(e,r)}function ht(e,t,r){const i=Mt.get();St(e,t,i,Mt.get());let o=Number.POSITIVE_INFINITY;for(const a of Pt){const s=wt(e,a,Ct.get()),c=O.get();if(ze(i,s,c)){const e=(0,me.tB)(O.get(),t.origin,c),i=Math.abs((0,I.ZF)((0,n.d)(t.direction,e)));i<o&&(o=i,(0,n.g)(r,c))}}return o===Number.POSITIVE_INFINITY?mt(e,t,r):r}function mt(e,t,r){if(ft(e,t,r))return r;const i=Mt.get(),o=Mt.get();St(e,t,i,o);let a=Number.POSITIVE_INFINITY;for(const s of Pt){const c=wt(e,s,Ct.get()),l=O.get();if(He(i,c,l)){const e=tt(t,l);if(!Ne(o,l))continue;e<a&&(a=e,(0,n.g)(r,l))}}return gt(e,t.origin)<a&&pt(e,t.origin,r),r}function pt(e,t,r){const i=Ge(e.plane,t,O.get()),o=z(_t(e,e.basis1),i,-1,1,O.get()),a=z(_t(e,e.basis2),i,-1,1,O.get());return(0,n.f)(r,(0,n.b)(O.get(),o,a),e.origin),r}function vt(e,t,r){const{origin:i,basis1:o,basis2:a}=e,s=(0,n.f)(O.get(),t,i),c=pe(o,s),l=pe(a,s),u=pe(xt(e),s);return(0,n.s)(r,c,l,u)}function gt(e,t){const r=vt(e,t,O.get()),{basis1:i,basis2:o}=e,a=(0,n.l)(i),s=(0,n.l)(o),c=Math.max(Math.abs(r[0])-a,0),l=Math.max(Math.abs(r[1])-s,0),u=r[2];return c*c+l*l+u*u}function bt(e,t){const r=-e.plane[3];return pe(xt(e),t)-r}function xt(e){return e.plane}function yt(e,t){const r=(0,n.f)(O.get(),t,e.origin),i=(0,n.o)(e.basis1),o=(0,n.o)(e.basis2),a=(0,n.d)(e.basis1,r),s=(0,n.d)(e.basis2,r);return-a-i<0&&a-i<0&&-s-o<0&&s-o<0}function _t(e,t){const r=Ct.get();return(0,n.g)(r.origin,e.origin),(0,n.g)(r.vector,t),r}function wt(e,t,r){const{basis1:i,basis2:o,origin:a}=e,s=(0,n.a)(O.get(),i,t.origin[0]),c=(0,n.a)(O.get(),o,t.origin[1]);(0,n.b)(r.origin,s,c),(0,n.b)(r.origin,r.origin,a);const l=(0,n.a)(O.get(),i,t.direction[0]),u=(0,n.a)(O.get(),o,t.direction[1]);return(0,n.a)(r.vector,(0,n.b)(l,l,u),2),r}function St(e,t,r,i){const o=xt(e);Le(o,t.direction,t.origin,r),Le(r,o,t.origin,i)}const Tt={plane:xe(),origin:(0,o.f)(0,0,0),basis1:(0,o.f)(1,0,0),basis2:(0,o.f)(0,1,0)},Mt=new x(xe),Ct=new x(R),Ot=(0,o.c)(),At=new x((()=>({origin:null,basis1:null,basis2:null,plane:null}))),Pt=[{origin:[-1,-1],direction:[1,0]},{origin:[1,-1],direction:[0,1]},{origin:[1,1],direction:[-1,0]},{origin:[-1,1],direction:[0,-1]}],It=(0,l.a)(),Rt=(0,l.a)();Object.freeze({__proto__:null,BoundedPlaneClass:class{constructor(){this.plane=xe(),this.origin=(0,o.c)(),this.basis1=(0,o.c)(),this.basis2=(0,o.c)()}},create:at,wrap:function(e,t,r){const i=At.get();return i.origin=e,i.basis1=t,i.basis2=r,i.plane=ye(0,0,0,0),lt(i),i},copy:st,fromValues:ct,updateUnboundedPlane:lt,elevate:ut,setExtent:function(e,t,r){return dt(t,r),ut(r,bt(e,e.origin),r),r},fromAABoundingRect:dt,intersectRay:ft,intersectRayClosestSilhouette:function(e,t,r){if(ft(e,t,r))return r;const i=ht(e,t,O.get());return(0,n.b)(r,t.origin,(0,n.a)(O.get(),t.direction,(0,n.k)(t.origin,i)/(0,n.l)(t.direction))),r},closestPointOnSilhouette:ht,closestPoint:mt,projectPoint:pt,projectPointLocal:vt,distance2:gt,distance:function(e,t){return Math.sqrt(gt(e,t))},distanceToSilhouette:function(e,t){let r=Number.NEGATIVE_INFINITY;for(const i of Pt){const o=B(wt(e,i,Ct.get()),t);o>r&&(r=o)}return Math.sqrt(r)},extrusionContainsPoint:function(e,t){return Ne(e.plane,t)&&yt(e,t)},axisAt:function(e,t,r,i){return function(e,t,r){switch(t){case 0:(0,n.g)(r,e.basis1),(0,n.n)(r,r);break;case 1:(0,n.g)(r,e.basis2),(0,n.n)(r,r);break;case 2:(0,n.g)(r,xt(e))}return r}(e,r,i)},altitudeAt:bt,setAltitudeAt:function(e,t,r,i){const o=bt(e,t),a=(0,n.a)(Ot,xt(e),r-o);return(0,n.b)(i,t,a),i},equals:function(e,t){return(0,n.m)(e.basis1,t.basis1)&&(0,n.m)(e.basis2,t.basis2)&&(0,n.m)(e.origin,t.origin)},transform:function(e,t,r){return e!==r&&st(e,r),(0,a.a)(It,t),(0,a.b)(It,It),(0,n.i)(r.basis1,e.basis1,It),(0,n.i)(r.basis2,e.basis2,It),(0,n.i)(r.plane,e.plane,It),(0,n.i)(r.origin,e.origin,t),Fe(r.plane,r.origin,r.plane),r},rotate:function(e,t,r,i){return e!==i&&st(e,i),(0,a.r)(Rt,(0,a.i)(Rt),t,r),(0,n.i)(i.basis1,e.basis1,Rt),(0,n.i)(i.basis2,e.basis2,Rt),lt(i),i},normal:xt,UP:Tt});const Ft=f.Z.getLogger("esri.views.3d.support.geometryUtils.sphere");function Lt(e){return e?{radius:e.radius,center:(0,o.b)(e.center)}:{radius:1,center:(0,o.c)()}}function Bt(e,t=Lt()){return zt(e.radius,e.center,t)}function zt(e,t,r=Lt()){return(0,n.g)(r.center,t),r.radius=e,r}function Ht(e,t,r){if((0,i.Wi)(t))return!1;const o=(0,n.f)(O.get(),t.origin,e.center),a=(0,n.d)(t.direction,t.direction),s=2*(0,n.d)(t.direction,o),c=s*s-4*a*((0,n.d)(o,o)-e.radius*e.radius);if(c<0)return!1;const l=Math.sqrt(c);let u=(-s-l)/(2*a);const d=(-s+l)/(2*a);return(u<0||d<u&&d>0)&&(u=d),!(u<0||(r&&(0,n.b)(r,t.origin,(0,n.a)(O.get(),t.direction,u)),0))}function Dt(e,t,r){const i=O.get(),o=P.get();(0,n.c)(i,t.origin,t.direction),(0,n.c)(r,i,t.origin),(0,n.a)(r,r,1/(0,n.l)(r)*e.radius);const s=Et(e,t.origin),c=ve(t.origin,r);return(0,a.i)(o),(0,a.r)(o,o,c+s,i),(0,n.i)(r,r,o),r}function Nt(e,t,r){const i=(0,n.f)(O.get(),t,e.center),o=(0,n.a)(O.get(),i,e.radius/(0,n.l)(i));return(0,n.b)(r,o,e.center)}function Et(e,t){const r=(0,n.f)(O.get(),t,e.center),i=(0,n.l)(r),o=e.radius+Math.abs(e.radius-i);return(0,I.ZF)(e.radius/o)}const Vt=(0,o.c)();function Ut(e,t,r,i){const o=(0,n.f)(Vt,t,e.center);switch(r){case 0:{const e=(0,me.jE)(o,Vt)[2];return(0,n.s)(i,-Math.sin(e),Math.cos(e),0)}case 1:{const e=(0,me.jE)(o,Vt),t=e[1],r=e[2],a=Math.sin(t);return(0,n.s)(i,-a*Math.cos(r),-a*Math.sin(r),Math.cos(t))}case 2:return(0,n.n)(i,o);default:return}}function Gt(e,t){const r=(0,n.f)(Wt,t,e.center);return(0,n.l)(r)-e.radius}const kt=new x((()=>({center:null,radius:0}))),jt=Ze(),qt=(0,o.c)(),Wt=(0,o.c)();Object.freeze(qt);Object.freeze({__proto__:null,create:Lt,wrap:function(e,t){const r=kt.get();return r.radius=e,r.center=t||qt,r},copy:Bt,fromValues:zt,elevate:function(e,t,r){return e!==r&&(0,n.g)(r.center,e.center),r.radius=e.radius+t,r},setExtent:function(e,t,r){return Ft.error("sphere.setExtent is not yet supported"),e===r?r:Bt(e,r)},intersectRay:Ht,intersectScreen:function(e,t,r,i){return Ht(e,Je(t,r,jt),i)},intersectsRay:function(e,t){return Ht(e,t,null)},intersectRayClosestSilhouette:function(e,t,r){if(Ht(e,t,r))return r;const i=Dt(e,t,O.get());return(0,n.b)(r,t.origin,(0,n.a)(O.get(),t.direction,(0,n.k)(t.origin,i)/(0,n.l)(t.direction))),r},closestPointOnSilhouette:Dt,closestPoint:function(e,t,r){return Ht(e,t,r)?r:(rt(t,e.center,r),Nt(e,r,r))},projectPoint:Nt,distanceToSilhouette:function(e,t){const r=(0,n.f)(O.get(),t,e.center),i=(0,n.o)(r),o=e.radius*e.radius;return Math.sqrt(Math.abs(i-o))},angleToSilhouette:Et,axisAt:Ut,altitudeAt:Gt,setAltitudeAt:function(e,t,r,i){const o=Gt(e,t),a=Ut(e,t,2,Wt),s=(0,n.a)(Wt,a,r-o);return(0,n.b)(i,t,s),i}});function $t(e=Zt){return[e[0],e[1],e[2],e[3]]}function Xt(e,t,r,i,o=$t()){return o[0]=e,o[1]=t,o[2]=r,o[3]=i,o}const Zt=[0,0,1,0];Object.freeze({__proto__:null,create:$t,wrap:function(e,t,r,i){return Xt(e,t,r,i,A.get())},wrapAxisAngle:function(e,t){return Xt(e[0],e[1],e[2],t,A.get())},copy:function(e,t=$t()){return Xt(e[0],e[1],e[2],e[3],t)},fromValues:Xt,fromAxisAndAngle:function(e,t,r=$t()){return(0,n.g)(r,e),r[3]=t,r},fromPoints:function(e,t,r=$t()){return(0,n.c)(r,e,t),(0,n.n)(r,r),r[3]=ve(e,t),r},axis:function(e){return e},UP:Zt});function Kt(e){return e?{ray:Ze(e.ray),c0:e.c0,c1:e.c1}:{ray:Ze(),c0:0,c1:Number.MAX_VALUE}}function Yt(e,t,r,i=Kt()){return Ke(e,i.ray),i.c0=t,i.c1=r,i}function Qt(e,t=Kt()){return Ke(e,t.ray),t.c0=0,t.c1=Number.MAX_VALUE,t}function Jt(e,t,r=Kt()){const i=(0,n.l)(e.vector);return Ye(e.origin,t,r.ray),r.c0=0,r.c1=i,r}function er(e,t,r){return(0,n.b)(r,e.ray.origin,(0,n.a)(r,e.ray.direction,t))}const tr=new x((()=>({c0:0,c1:0,ray:null})));Object.freeze({__proto__:null,create:Kt,wrap:function(e,t,r){const i=tr.get();return i.ray=e,i.c0=t,i.c1=r,i},copy:function(e,t=Kt()){return Yt(e.ray,e.c0,e.c1,t)},fromValues:Yt,fromRay:Qt,fromLineSegment:function(e,t=Kt()){return Jt(e,(0,n.n)(O.get(),e.vector),t)},fromLineSegmentAndDirection:Jt,getStart:function(e,t){return er(e,e.c0,t)},getEnd:function(e,t){return er(e,e.c1,t)},getAt:er});function rr(e){if(e){const{planes:t,points:r}=e;return{planes:[xe(t[0]),xe(t[1]),xe(t[2]),xe(t[3]),xe(t[4]),xe(t[5])],points:[(0,o.b)(r[0]),(0,o.b)(r[1]),(0,o.b)(r[2]),(0,o.b)(r[3]),(0,o.b)(r[4]),(0,o.b)(r[5]),(0,o.b)(r[6]),(0,o.b)(r[7])]}}return{planes:[xe(),xe(),xe(),xe(),xe(),xe()],points:[(0,o.c)(),(0,o.c)(),(0,o.c)(),(0,o.c)(),(0,o.c)(),(0,o.c)(),(0,o.c)(),(0,o.c)()]}}function ir(e,t,r=rr()){for(let t=0;t<6;t++)_e(e[t],r.planes[t]);for(let e=0;e<8;e++)(0,n.g)(r.points[e],t[e]);return r}function or(e){const{planes:t,points:r}=e;Te(r[4],r[0],r[3],t[0]),Te(r[1],r[5],r[6],t[1]),Te(r[4],r[5],r[1],t[2]),Te(r[3],r[2],r[6],t[3]),Te(r[0],r[1],r[2],t[4]),Te(r[5],r[4],r[7],t[5])}function nr(e,t){for(let r=0;r<6;r++)if(!Ve(e[r],t))return!1;return!0}const ar=[(0,T.b)(-1,-1,-1,1),(0,T.b)(1,-1,-1,1),(0,T.b)(1,1,-1,1),(0,T.b)(-1,1,-1,1),(0,T.b)(-1,-1,1,1),(0,T.b)(1,-1,1,1),(0,T.b)(1,1,1,1),(0,T.b)(-1,1,1,1)],sr=new x(Kt);Object.freeze({__proto__:null,create:rr,copy:function(e,t=rr()){return ir(e.planes,e.points,t)},fromValues:ir,fromMatrix:function(e,t,r=rr()){const{points:i}=r,o=(0,a.m)(P.get(),t,e);(0,a.a)(o,o);for(let e=0;e<8;++e){const t=(0,de.t)(A.get(),ar[e],o);(0,n.s)(i[e],t[0]/t[3],t[1]/t[3],t[2]/t[3])}return or(r),r},recomputePlanes:or,intersectsSphere:function(e,t){for(let r=0;r<6;r++)if(De(e[r],t))return!1;return!0},intersectsRay:function(e,t){return nr(e,Qt(t,sr.get()))},intersectClipRay:function(e,t){for(let r=0;r<6;r++){if(!Ue(e[r],t))return!1}return!0},intersectsLineSegment:function(e,t,r){return nr(e,Jt(t,r,sr.get()))},intersectsPoint:function(e,t){for(let r=0;r<6;r++)if(je(e[r],t)>0)return!1;return!0},intersectsAABB:function(e,t){for(let r=0;r<6;r++)if(Ee(e[r],t))return!1;return!0},planePointIndices:{bottom:[5,1,0,4],near:[0,1,2,3],far:[5,4,7,6],right:[1,5,6,2],left:[4,0,3,7],top:[7,3,2,6]}});var cr=r(38035);class lr{acquire(e,t,r,i,o,n){this.id=lr._idGen.gen(e&&e.id),this.geometry=e,this.material=t,this.transformation=r,this.instanceParameters=i,this.origin=o,this.shaderTransformation=n}getStaticTransformation(){return this.transformation}getShaderTransformation(){return this.shaderTransformation?this.shaderTransformation(this.transformation):this.transformation}computeAttachmentOrigin(e){return!!(this.material.computeAttachmentOrigin?this.material.computeAttachmentOrigin(this.geometry,e):this.geometry.computeAttachmentOrigin(e))&&((0,n.i)(e,e,this.getStaticTransformation()),!0)}}lr._idGen=new oe,lr.pool=new cr.Z(lr);const ur=lr,dr=new oe;function fr(e){const t=0===e?"highlight":"occludee";return{id:dr.gen(t),channel:e}}var hr=r(49366);class mr{constructor(e={}){this._objectTransformation=(0,l.a)(),this._bvObjectSpace=new vr,this._bvWorldSpace=new vr,this._bvDirty=!0,this._hasVolatileTransformation=!1,this._visible=!0,this.id=mr._idGen.gen(e.idHint),this.castShadow=null==e.castShadow||e.castShadow,this.metadata=e.metadata,this.metadata&&this.metadata.isElevationSource&&(this.metadata.lastValidElevationBB=new pr),this.objectTransformation=(0,l.a)(),this._initializeGeometryRecords(e.geometries,e.materials,e.transformations,e.origins)}get geometryRecords(){return this._geometryRecords}get geometries(){return this._geometries}get objectTransformation(){return this._objectTransformation}set objectTransformation(e){(0,a.c)(this._objectTransformation,e),this._invalidateBoundingVolume(),this._notifyDirty("objTransformation")}dispose(){for(const e of this._geometryRecords)ur.pool.release(e);this._geometryRecords=null,this._geometries=null}_initializeGeometryRecords(e,t,r,i){if(!Array.isArray(e))return this._geometryRecords=[],void(this._geometries=[]);(0,re.hu)(t.length===e.length,"Object3D: materials don't match geometries"),(0,re.hu)(r.length===e.length,"Object3D: transformations don't match geometries"),this._geometryRecords=new Array(e.length),this._geometries=e.slice();for(let o=0;o<e.length;o++){const n={highlights:null,occludees:null,visible:!0};this._geometryRecords[o]=ur.pool.acquire(e[o],t[o],(0,l.b)(r[o]),n,i&&i[o])}this._hasVolatileTransformation=!1}get parentLayer(){return this._parentLayer}set parentLayer(e){(0,re.hu)(null==this._parentLayer||null==e,"Object3D can only be added to a single Layer"),this._parentLayer=e}getNumGeometryRecords(){return this._geometryRecords.length}getGeometryRecord(e){return(0,re.hu)(e>=0&&e<this._geometryRecords.length,"Object3d.getGeometryDataByIndex: index out of range"),this._geometryRecords[e]}addGeometry(e,t,r,i,o,n){r=r||l.I,this._geometries.push(e);const a=ur.pool.acquire(e,t,r,i||{highlights:null,occludees:null,visible:!0},o,n);return this._geometryRecords.push(a),this._hasVolatileTransformation=this._geometryRecords.some((e=>!!e.shaderTransformation)),this._notifyDirty("objGeometryAdded",a),this._invalidateBoundingVolume(),a}removeGeometry(e){const t=this._geometryRecords.splice(e,1)[0];return ur.pool.release(t),this._hasVolatileTransformation=this._geometryRecords.some((e=>!!e.shaderTransformation)),this._geometries.splice(e,1),this._notifyDirty("objGeometryRemoved",t),this._invalidateBoundingVolume(),t}removeAllGeometries(){for(;this.getNumGeometryRecords()>0;)this.removeGeometry(0)}geometryVertexAttrsUpdated(e){this._notifyDirty("vertexAttrsUpdated",this._geometryRecords[e]),this._invalidateBoundingVolume()}get isVisible(){return this._visible}setVisible(e){this._visible=e;for(const e of this._geometryRecords)e.instanceParameters.visible=this._visible;this._notifyDirty("visibilityChanged")}maskOccludee(){const e=fr(1);for(const t of this._geometryRecords)t.instanceParameters.occludees=(0,hr.lr)(t.instanceParameters.occludees,e);return this._notifyDirty("occlusionChanged"),e}removeOcclude(e){for(const t of this._geometryRecords)t.instanceParameters.occludees=(0,hr.U_)(t.instanceParameters.occludees,e);this._notifyDirty("occlusionChanged")}highlight(){const e=fr(0);for(const t of this._geometryRecords)t.instanceParameters.highlights=(0,hr.lr)(t.instanceParameters.highlights,e);return this._notifyDirty("highlightChanged"),e}removeHighlight(e){for(const t of this._geometryRecords)t.instanceParameters.highlights=(0,hr.U_)(t.instanceParameters.highlights,e);this._notifyDirty("highlightChanged")}getCombinedStaticTransformation(e,t){return(0,a.m)((0,i.Pt)(t,(0,l.a)()),this.objectTransformation,e.getStaticTransformation())}getCombinedShaderTransformation(e,t){return t=t||(0,l.a)(),(0,a.m)(t,this.objectTransformation,e.getShaderTransformation()),t}hasVolativeTransformation(){return this._hasVolatileTransformation}getBBMin(e){return this._validateBoundingVolume(),e?this._bvObjectSpace.bbMin:this._bvWorldSpace.bbMin}getBBMax(e){return this._validateBoundingVolume(),e?this._bvObjectSpace.bbMax:this._bvWorldSpace.bbMax}getCenter(e){return this._validateBoundingVolume(),e?this._bvObjectSpace.center:this._bvWorldSpace.center}getBSRadius(e){return this._validateBoundingVolume(),e?this._bvObjectSpace.bsRadius:this._bvWorldSpace.bsRadius}_validateBoundingVolume(){if(!this._bvDirty&&!this._hasVolatileTransformation)return;this._bvObjectSpace.init(),this._bvWorldSpace.init();for(let e=0;e<this._geometryRecords.length;++e){const t=this._geometries[e],r=this._geometryRecords[e],i=t.boundingInfo;this._calculateTransformedBoundingVolume(i,this._bvObjectSpace,r.getShaderTransformation()),this._calculateTransformedBoundingVolume(i,this._bvWorldSpace,this.getCombinedShaderTransformation(r))}(0,n.e)(this._bvObjectSpace.center,this._bvObjectSpace.bbMin,this._bvObjectSpace.bbMax,.5),(0,n.e)(this._bvWorldSpace.center,this._bvWorldSpace.bbMin,this._bvWorldSpace.bbMax,.5);const e=(0,o.c)(),t=(0,o.c)(),r=(0,me.u1)(this.objectTransformation);for(let i=0;i<this._geometryRecords.length;++i){const o=this._geometries[i],a=this._geometryRecords[i].getShaderTransformation(),s=(0,me.u1)(a),c=o.boundingInfo;(0,n.i)(e,c.getCenter(),a);const l=(0,n.k)(e,this._bvObjectSpace.center),u=c.getBSRadius()*s;this._bvObjectSpace.bsRadius=Math.max(this._bvObjectSpace.bsRadius,l+u),(0,n.i)(t,e,this.objectTransformation);const d=(0,n.k)(t,this._bvWorldSpace.center),f=u*r;this._bvWorldSpace.bsRadius=Math.max(this._bvWorldSpace.bsRadius,d+f)}this._bvDirty=!1}_calculateTransformedBoundingVolume(e,t,r){const i=e.getBBMin(),a=e.getBBMax(),s=(0,o.b)(i),c=(0,o.b)(a);(0,n.i)(s,s,r),(0,n.i)(c,c,r);for(let e=0;e<3;++e)t.bbMin[e]=Math.min(t.bbMin[e],s[e],c[e]),t.bbMax[e]=Math.max(t.bbMax[e],s[e],c[e]);for(let e=0;e<3;++e){(0,n.g)(s,i),(0,n.g)(c,a),s[e]=a[e],c[e]=i[e],(0,n.i)(s,s,r),(0,n.i)(c,c,r);for(let e=0;e<3;++e)t.bbMin[e]=Math.min(t.bbMin[e],s[e],c[e]),t.bbMax[e]=Math.max(t.bbMax[e],s[e],c[e])}}_invalidateBoundingVolume(){this._bvDirty=!0,this._parentLayer&&this._parentLayer.notifyObjectBBChanged(this,{center:this._bvWorldSpace.center,radius:this._bvWorldSpace.bsRadius})}_notifyDirty(e,t,r,i){if(this._parentLayer){r=r||1;const o=i||this;this._parentLayer.notifyDirty(e,t,r,o)}}get test(){const e=this;return{hasGeometry:t=>e._geometries.indexOf(t)>-1,getGeometryIndex:t=>e._geometries.indexOf(t)}}}mr._idGen=new oe;class pr{constructor(){this.bbMin=(0,o.f)(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),this.bbMax=(0,o.f)(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE)}isEmpty(){return this.bbMax[0]<this.bbMin[0]&&this.bbMax[1]<this.bbMin[1]&&this.bbMax[2]<this.bbMin[2]}}class vr extends pr{constructor(){super(),this.center=(0,o.c)(),this.bsRadius=0}init(){(0,n.s)(this.bbMin,Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),(0,n.s)(this.bbMax,-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE),(0,n.s)(this.center,0,0,0),this.bsRadius=0}getCenter(){return this.center}getBSRadius(){return this.bsRadius}}const gr=new class{constructor(e=0){this.offset=e,this.sphere=Lt(),this.tmpVertex=(0,o.c)()}applyToVertex(e,t,r){const i=this.objectTransform.transform;let o=i[0]*e+i[4]*t+i[8]*r+i[12],n=i[1]*e+i[5]*t+i[9]*r+i[13],a=i[2]*e+i[6]*t+i[10]*r+i[14];const s=this.offset/Math.sqrt(o*o+n*n+a*a);o+=o*s,n+=n*s,a+=a*s;const c=this.objectTransform.inverse;return this.tmpVertex[0]=c[0]*o+c[4]*n+c[8]*a+c[12],this.tmpVertex[1]=c[1]*o+c[5]*n+c[9]*a+c[13],this.tmpVertex[2]=c[2]*o+c[6]*n+c[10]*a+c[14],this.tmpVertex}applyToMinMax(e,t){const r=this.offset/Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]);e[0]+=e[0]*r,e[1]+=e[1]*r,e[2]+=e[2]*r;const i=this.offset/Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]);t[0]+=t[0]*i,t[1]+=t[1]*i,t[2]+=t[2]*i}applyToAabb(e){const t=this.offset/Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]);e[0]+=e[0]*t,e[1]+=e[1]*t,e[2]+=e[2]*t;const r=this.offset/Math.sqrt(e[3]*e[3]+e[4]*e[4]+e[5]*e[5]);return e[3]+=e[3]*r,e[4]+=e[4]*r,e[5]+=e[5]*r,e}applyToBoundingSphere(e,t){const r=Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]),i=this.offset/r;return this.sphere.center[0]=t[0]+t[0]*i,this.sphere.center[1]=t[1]+t[1]*i,this.sphere.center[2]=t[2]+t[2]*i,this.sphere.radius=e+e*this.offset/r,this.sphere}};new class{constructor(e=0){this.offset=e,this.componentLocalOriginLength=0,this.tmpVertex=(0,o.c)(),this.mbs=(0,T.a)(),this.obb={center:(0,o.c)(),halfSize:(0,he.c)(),quaternion:null}}set localOrigin(e){this.componentLocalOriginLength=Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])}applyToVertex(e,t,r){const i=e,o=t,n=r+this.componentLocalOriginLength,a=this.offset/Math.sqrt(i*i+o*o+n*n);return this.tmpVertex[0]=e+i*a,this.tmpVertex[1]=t+o*a,this.tmpVertex[2]=r+n*a,this.tmpVertex}applyToAabb(e){const t=e[0],r=e[1],i=e[2]+this.componentLocalOriginLength,o=e[3],n=e[4],a=e[5]+this.componentLocalOriginLength,s=this.offset/Math.sqrt(t*t+r*r+i*i);e[0]+=t*s,e[1]+=r*s,e[2]+=i*s;const c=this.offset/Math.sqrt(o*o+n*n+a*a);return e[3]+=o*c,e[4]+=n*c,e[5]+=a*c,e}applyToMbs(e){const t=Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]),r=this.offset/t;return this.mbs[0]=e[0]+e[0]*r,this.mbs[1]=e[1]+e[1]*r,this.mbs[2]=e[2]+e[2]*r,this.mbs[3]=e[3]+e[3]*this.offset/t,this.mbs}applyToObb(e){const t=e.center,r=this.offset/Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]);this.obb.center[0]=t[0]+t[0]*r,this.obb.center[1]=t[1]+t[1]*r,this.obb.center[2]=t[2]+t[2]*r,(0,n.q)(this.obb.halfSize,e.halfSize,e.quaternion),(0,n.b)(this.obb.halfSize,this.obb.halfSize,e.center);const i=this.offset/Math.sqrt(this.obb.halfSize[0]*this.obb.halfSize[0]+this.obb.halfSize[1]*this.obb.halfSize[1]+this.obb.halfSize[2]*this.obb.halfSize[2]);return this.obb.halfSize[0]+=this.obb.halfSize[0]*i,this.obb.halfSize[1]+=this.obb.halfSize[1]*i,this.obb.halfSize[2]+=this.obb.halfSize[2]*i,(0,n.f)(this.obb.halfSize,this.obb.halfSize,e.center),(0,fe.c)(br,e.quaternion),(0,n.q)(this.obb.halfSize,this.obb.halfSize,br),this.obb.halfSize[0]*=this.obb.halfSize[0]<0?-1:1,this.obb.halfSize[1]*=this.obb.halfSize[1]<0?-1:1,this.obb.halfSize[2]*=this.obb.halfSize[2]<0?-1:1,this.obb.quaternion=e.quaternion,this.obb}};new class{constructor(e=0){this.offset=e,this.tmpVertex=(0,o.c)()}applyToVertex(e,t,r){const i=e+this.localOrigin[0],o=t+this.localOrigin[1],n=r+this.localOrigin[2],a=this.offset/Math.sqrt(i*i+o*o+n*n);return this.tmpVertex[0]=e+i*a,this.tmpVertex[1]=t+o*a,this.tmpVertex[2]=r+n*a,this.tmpVertex}applyToAabb(e){const t=e[0]+this.localOrigin[0],r=e[1]+this.localOrigin[1],i=e[2]+this.localOrigin[2],o=e[3]+this.localOrigin[0],n=e[4]+this.localOrigin[1],a=e[5]+this.localOrigin[2],s=this.offset/Math.sqrt(t*t+r*r+i*i);e[0]+=t*s,e[1]+=r*s,e[2]+=i*s;const c=this.offset/Math.sqrt(o*o+n*n+a*a);return e[3]+=o*c,e[4]+=n*c,e[5]+=a*c,e}};(0,o.c)(),(0,o.c)(),(0,T.a)();const br=(0,w.a)(),xr=0,yr=1,_r=2,wr=3,Sr=4,Tr=e=>class extends e{constructor(){super(...arguments),this._isDisposed=!1}dispose(){for(const t of null!=(e=this._managedDisposables)?e:[]){var e;const r=this[t];this[t]=null,r&&"function"==typeof r.dispose&&r.dispose()}this._isDisposed=!0}get isDisposed(){return this._isDisposed}};class Mr extends(Tr(class{})){}const Cr=class extends Mr{constructor(e){super(),this.material=e.material,this.techniqueRep=e.techniqueRep,this.output=e.output}getTechnique(){return this.technique}getPipelineState(e,t){return this.getTechnique().pipeline}ensureResources(e){return 2}ensureParameters(e){}},Or=class extends Cr{constructor(e){super(e),this._textureIDs=new Set,this._textureRepository=e.textureRep,this._textureId=e.textureId,this._initTransparent=!!e.initTextureTransparent,this._texture=this._acquireIfNotUndefined(this._textureId),this._textureNormal=this._acquireIfNotUndefined(e.normalTextureId),this._textureEmissive=this._acquireIfNotUndefined(e.emissiveTextureId),this._textureOcclusion=this._acquireIfNotUndefined(e.occlusionTextureId),this._textureMetallicRoughness=this._acquireIfNotUndefined(e.metallicRoughnessTextureId)}dispose(){this._textureIDs.forEach((e=>this._textureRepository.release(e))),this._textureIDs.clear()}updateTexture(e){e!==this._textureId&&(this._releaseIfNotUndefined(this._textureId),this._textureId=e,this._texture=this._acquireIfNotUndefined(this._textureId))}bindTexture(e,t){(0,i.pC)(this._texture)&&(t.setUniform1i("tex",xr),e.bindTexture(this._texture.glTexture,xr)),(0,i.pC)(this._textureNormal)&&(t.setUniform1i("normalTexture",yr),e.bindTexture(this._textureNormal.glTexture,yr)),(0,i.pC)(this._textureEmissive)&&(t.setUniform1i("texEmission",_r),e.bindTexture(this._textureEmissive.glTexture,_r)),(0,i.pC)(this._textureOcclusion)&&(t.setUniform1i("texOcclusion",wr),e.bindTexture(this._textureOcclusion.glTexture,wr)),(0,i.pC)(this._textureMetallicRoughness)&&(t.setUniform1i("texMetallicRoughness",Sr),e.bindTexture(this._textureMetallicRoughness.glTexture,Sr))}bindTextureScale(e,t){const r=(0,i.pC)(this._texture)&&this._texture.glTexture;r&&r.descriptor.textureCoordinateScaleFactor?t.setUniform2fv("textureCoordinateScaleFactor",r.descriptor.textureCoordinateScaleFactor):t.setUniform2f("textureCoordinateScaleFactor",1,1)}_acquireIfNotUndefined(e){if(!(0,i.Wi)(e))return this._textureIDs.add(e),this._textureRepository.acquire(e,this._initTransparent)}_releaseIfNotUndefined(e){void 0!==e&&(this._textureIDs.delete(e),this._textureRepository.release(e))}};var Ar=r(48775);const Pr={position:0,normal:1,uv0:2,color:3,size:4,tangent:4,uvMapSpace:4,auxpos1:5,symbolColor:5,auxpos2:6,featureAttribute:6,instanceFeatureAttribute:6,instanceColor:7,bound1:5,bound2:6,bound3:7,model:8,modelNormal:12,modelOriginHi:11,modelOriginLo:15};class Ir{constructor(e,t,r){this.supportsEdges=!1,this._visible=!0,this._renderPriority=0,this._insertOrder=0,this._vertexAttributeLocations=Pr,this.id=Ir._idGen.gen(e),this._params=(0,Ar.Uf)(t,r),this.validateParameterValues(this._params)}dispose(){}get params(){return this._params}update(){return!1}setParameterValues(e){(0,Ar.LO)(this._params,e)&&(this.validateParameterValues(this._params),this.parametersChanged())}validateParameterValues(){}get visible(){return this._visible}set visible(e){e!==this._visible&&(this._visible=e,this.parametersChanged())}isVisibleInPass(e){return!0}get renderOccluded(){return this.params.renderOccluded}get renderPriority(){return this._renderPriority}set renderPriority(e){e!==this._renderPriority&&(this._renderPriority=e,this.parametersChanged())}get insertOrder(){return this._insertOrder}set insertOrder(e){e!==this._insertOrder&&(this._insertOrder=e,this.parametersChanged())}get vertexAttributeLocations(){return this._vertexAttributeLocations}isVisible(){return this._visible}parametersChanged(){(0,i.pC)(this.materialRepository)&&this.materialRepository.materialChanged(this)}}Ir._idGen=new oe;function Rr(e,t,r,i,o){const n=r.typedBuffer,a=r.typedBufferStride,s=e.length;if(i*=a,null==o||1===o)for(let r=0;r<s;++r){const o=2*e[r];n[i]=t[o],n[i+1]=t[o+1],i+=a}else for(let r=0;r<s;++r){const s=2*e[r];for(let e=0;e<o;++e)n[i]=t[s],n[i+1]=t[s+1],i+=a}}function Fr(e,t,r,i,o){const n=r.typedBuffer,a=r.typedBufferStride,s=e.length;if(i*=a,null==o||1===o)for(let r=0;r<s;++r){const o=3*e[r];n[i]=t[o],n[i+1]=t[o+1],n[i+2]=t[o+2],i+=a}else for(let r=0;r<s;++r){const s=3*e[r];for(let e=0;e<o;++e)n[i]=t[s],n[i+1]=t[s+1],n[i+2]=t[s+2],i+=a}}function Lr(e,t,r,i,o){const n=r.typedBuffer,a=r.typedBufferStride,s=e.length;if(i*=a,null==o||1===o)for(let r=0;r<s;++r){const o=4*e[r];n[i]=t[o],n[i+1]=t[o+1],n[i+2]=t[o+2],n[i+3]=t[o+3],i+=a}else for(let r=0;r<s;++r){const s=4*e[r];for(let e=0;e<o;++e)n[i]=t[s],n[i+1]=t[s+1],n[i+2]=t[s+2],n[i+3]=t[s+3],i+=a}}function Br(e,t,r,i,o,n){if(r){const a=r,s=i.typedBuffer,c=i.typedBufferStride,l=e.length;if(o*=c,null==n||1===n)for(let r=0;r<l;++r){const i=3*e[r],n=t[i],l=t[i+1],u=t[i+2];s[o]=a[0]*n+a[4]*l+a[8]*u+a[12],s[o+1]=a[1]*n+a[5]*l+a[9]*u+a[13],s[o+2]=a[2]*n+a[6]*l+a[10]*u+a[14],o+=c}else for(let r=0;r<l;++r){const i=3*e[r],l=t[i],u=t[i+1],d=t[i+2],f=a[0]*l+a[4]*u+a[8]*d+a[12],h=a[1]*l+a[5]*u+a[9]*d+a[13],m=a[2]*l+a[6]*u+a[10]*d+a[14];for(let e=0;e<n;++e)s[o]=f,s[o+1]=h,s[o+2]=m,o+=c}}else Fr(e,t,i,o,n)}function zr(e,t,r,i,o,n){if(r){const a=r,s=i.typedBuffer,c=i.typedBufferStride,l=e.length,u=a[0],d=a[1],f=a[2],h=a[4],m=a[5],p=a[6],v=a[8],g=a[9],b=a[10],x=Math.abs(1-u*u+h*h+v*v)>1e-5||Math.abs(1-d*d+m*m+g*g)>1e-5||Math.abs(1-f*f+p*p+b*b)>1e-5;if(o*=c,null==n||1===n)for(let r=0;r<l;++r){const i=3*e[r],n=t[i],a=t[i+1],l=t[i+2];let y=u*n+h*a+v*l,_=d*n+m*a+g*l,w=f*n+p*a+b*l;if(x){const e=y*y+_*_+w*w;if(e<.999999&&e>1e-6){const t=Math.sqrt(e);y/=t,_/=t,w/=t}}s[o+0]=y,s[o+1]=_,s[o+2]=w,o+=c}else for(let r=0;r<l;++r){const i=3*e[r],a=t[i],l=t[i+1],y=t[i+2];let _=u*a+h*l+v*y,w=d*a+m*l+g*y,S=f*a+p*l+b*y;if(x){const e=_*_+w*w+S*S;if(e<.999999&&e>1e-6){const t=Math.sqrt(e);_/=t,w/=t,S/=t}}for(let e=0;e<n;++e)s[o+0]=_,s[o+1]=w,s[o+2]=S,o+=c}}else Fr(e,t,i,o,n)}function Hr(e,t,r,i,o,n){const a=i.typedBuffer,s=i.typedBufferStride,c=e.length;if(o*=s,null==n||1===n){if(4===r)for(let r=0;r<c;++r){const i=4*e[r];a[o]=t[i],a[o+1]=t[i+1],a[o+2]=t[i+2],a[o+3]=t[i+3],o+=s}else if(3===r)for(let r=0;r<c;++r){const i=3*e[r];a[o]=t[i],a[o+1]=t[i+1],a[o+2]=t[i+2],a[o+3]=255,o+=s}}else if(4===r)for(let r=0;r<c;++r){const i=4*e[r];for(let e=0;e<n;++e)a[o]=t[i],a[o+1]=t[i+1],a[o+2]=t[i+2],a[o+3]=t[i+3],o+=s}else if(3===r)for(let r=0;r<c;++r){const i=3*e[r];for(let e=0;e<n;++e)a[o]=t[i],a[o+1]=t[i+1],a[o+2]=t[i+2],a[o+3]=255,o+=s}}var Dr=r(34658),Nr=r(36904);const Er=(0,Nr.wK)(770,1,771,771),Vr=(0,Nr.if)(1,1),Ur=(0,Nr.if)(0,771);function Gr(e){return 2===e?null:1===e?Ur:Vr}const kr={factor:-1,units:-2};function jr(e){return e?kr:null}function qr(e){return 3===e||2===e?513:515}var Wr=r(56140);class $r{constructor(e,t){this._module=e,this._loadModule=t}get(){return this._module}async reload(){return this._module=await this._loadModule(),this._module}}function Xr(e={}){return(t,r)=>{var i,o;t._parameterNames=null!=(i=t._parameterNames)?i:[],t._parameterNames.push(r);const n=t._parameterNames.length-1,a=e.count||2,s=Math.ceil((0,I.k3)(a)),c=null!=(o=t._parameterBits)?o:[0];let l=0;for(;c[l]+s>16;)l++,l>=c.length&&c.push(0);t._parameterBits=c;const u=c[l],d=(1<<s)-1<<u;c[l]+=s,Object.defineProperty(t,r,{get(){return this[n]},set(e){if(this[n]!==e&&(this[n]=e,this._keyDirty=!0,this._parameterBits[l]=this._parameterBits[l]&~d|+e<<u&d,"number"!=typeof e&&"boolean"!=typeof e))throw"Configuration values must be booleans or numbers!"}})}}var Zr,Kr=r(51007),Yr=r(6897);!function(e){function t(e,t,r){(0,a.t)(Qr,r,t),e.setUniform3fv("localOrigin",t),e.setUniformMatrix4fv("view",Qr)}e.bindCamPosition=function(e,t,r){e.setUniform3f("camPos",r[3]-t[0],r[7]-t[1],r[11]-t[2])},e.bindProjectionMatrix=function(e,t){e.setUniformMatrix4fv("proj",t)},e.bindNearFar=function(e,t){e.setUniform2fv("nearFar",t)},e.bindViewCustomOrigin=t,e.bindView=function(e,r){t(e,r.origin,r.camera.viewMatrix)},e.bindViewport=function(e,t){e.setUniform4fv("viewport",t.camera.fullViewport)}}(Zr||(Zr={}));const Qr=(0,Yr.c)();var Jr=r(61514),ei=r(72023),ti=r(8681),ri=r(17811);const ii={mask:255},oi={function:{func:519,ref:2,mask:2},operation:{fail:7680,zFail:7680,zPass:0}},ni={function:{func:519,ref:2,mask:2},operation:{fail:7680,zFail:7680,zPass:7681}};var ai=r(71613),si=r(25117),ci=r(84530),li=r(44624),ui=r(10510);class di extends class{constructor(e,t){t&&(this._config=t.snapshot()),this._program=this.initializeProgram(e),e.commonUniformStore&&(this._commonUniformStore=e.commonUniformStore,this._commonUniformStore.subscribeProgram(this._program)),this._pipeline=this.initializePipeline(e)}dispose(){this._program&&(this._commonUniformStore&&this._commonUniformStore.unsubscribeProgram(this._program),this._program.dispose(),this._program=null)}reload(e){this._program&&(this._commonUniformStore&&this._commonUniformStore.unsubscribeProgram(this._program),this._program.dispose()),this._program=this.initializeProgram(e),this._commonUniformStore&&this._commonUniformStore.subscribeProgram(this._program)}get program(){return this._program}get pipeline(){return this._pipeline}get key(){return this._config.key}get configuration(){return this._config}bindPass(e,t,r){}bindMaterial(e,t,r){}bindDraw(e,t,r){}bindPipelineState(e){e.setPipelineState(this.pipeline)}ensureAttributeLocations(e){this.program.assertCompatibleVertexAttributeLocations(e)}get primitiveType(){return 4}}{initializeProgram(e){const t=di.shader.get(),r=this.configuration,i=t.build({OITEnabled:0===r.transparencyPassType,output:r.output,viewingMode:e.viewingMode,receiveShadows:r.receiveShadows,slicePlaneEnabled:r.slicePlaneEnabled,sliceHighlightDisabled:r.sliceHighlightDisabled,sliceEnabledForVertexPrograms:!1,symbolColor:r.symbolColors,vvSize:r.vvSize,vvColor:r.vvColor,vvInstancingEnabled:!0,instanced:r.instanced,instancedColor:r.instancedColor,instancedDoublePrecision:r.instancedDoublePrecision,useOldSceneLightInterface:!1,pbrMode:r.usePBR?r.isSchematic?2:1:0,hasMetalnessAndRoughnessTexture:r.hasMetalnessAndRoughnessTexture,hasEmissionTexture:r.hasEmissionTexture,hasOcclusionTexture:r.hasOcclusionTexture,hasNormalTexture:r.hasNormalTexture,hasColorTexture:r.hasColorTexture,receiveAmbientOcclusion:r.receiveAmbientOcclusion,useCustomDTRExponentForWater:!1,normalType:r.normalsTypeDerivate?3:0,doubleSidedMode:r.doubleSidedMode,vertexTangets:r.vertexTangents,attributeTextureCoordinates:r.hasMetalnessAndRoughnessTexture||r.hasEmissionTexture||r.hasOcclusionTexture||r.hasNormalTexture||r.hasColorTexture?1:0,textureAlphaPremultiplied:r.textureAlphaPremultiplied,attributeColor:r.vertexColors,screenSizePerspectiveEnabled:r.screenSizePerspective,verticalOffsetEnabled:r.verticalOffset,offsetBackfaces:r.offsetBackfaces,doublePrecisionRequiresObfuscation:(0,si.I)(e.rctx),alphaDiscardMode:r.alphaDiscardMode,supportsTextureAtlas:!1});return new Kr.Z(e.rctx,i.generateSource("vertex"),i.generateSource("fragment"),Pr)}bindPass(e,t,r){Zr.bindProjectionMatrix(this.program,r.camera.projectionMatrix);const i=this.configuration.output;7===i&&(this.program.setUniform1f("opacity",t.opacity),this.program.setUniform1f("layerOpacity",t.layerOpacity),this.program.setUniform4fv("externalColor",t.externalColor),this.program.setUniform1i("colorMixMode",Ar.FZ[t.colorMixMode])),0===i?(r.lighting.setUniforms(this.program,!1),this.program.setUniform3fv("ambient",t.ambient),this.program.setUniform3fv("diffuse",t.diffuse),this.program.setUniform4fv("externalColor",t.externalColor),this.program.setUniform1i("colorMixMode",Ar.FZ[t.colorMixMode]),this.program.setUniform1f("opacity",t.opacity),this.program.setUniform1f("layerOpacity",t.layerOpacity),this.configuration.usePBR&&li.j.bindUniforms(this.program,t,this.configuration.isSchematic)):1===i||3===i?this.program.setUniform2fv("nearFar",r.camera.nearFar):4===i&&ei.b.bindOutputHighlight(e,this.program,r),ti.k.bindUniformsForSymbols(this.program,t),ri.L.bindUniforms(this.program,t,r),(0,Ar.bj)(t.screenSizePerspective,this.program,"screenSizePerspectiveAlignment"),2!==t.textureAlphaMode&&3!==t.textureAlphaMode||this.program.setUniform1f("textureAlphaCutoff",t.textureAlphaCutoff)}bindDraw(e){const t=this.configuration.instancedDoublePrecision?(0,o.f)(e.camera.viewInverseTransposeMatrix[3],e.camera.viewInverseTransposeMatrix[7],e.camera.viewInverseTransposeMatrix[11]):e.origin;Zr.bindViewCustomOrigin(this.program,t,e.camera.viewMatrix),(0===this.configuration.output||7===this.configuration.output||1===this.configuration.output&&this.configuration.screenSizePerspective||2===this.configuration.output&&this.configuration.screenSizePerspective||4===this.configuration.output&&this.configuration.screenSizePerspective)&&Zr.bindCamPosition(this.program,t,e.camera.viewInverseTransposeMatrix),2===this.configuration.output&&this.program.setUniformMatrix4fv("viewNormal",e.camera.viewInverseTransposeMatrix),this.configuration.instancedDoublePrecision&&ci.f.bindCustomOrigin(this.program,t),Jr.p.bindUniforms(this.program,this.configuration,e.slicePlane,t),0===this.configuration.output&&ai.h.bindViewCustomOrigin(this.program,e,t)}setPipeline(e,t){const r=this.configuration,i=3===e,o=2===e;return(0,Nr.sm)({blending:0!==r.output&&7!==r.output||!r.transparent?null:i?Er:Gr(e),culling:fi(r),depthTest:{func:qr(e)},depthWrite:i||o?r.writeDepth&&Nr.LZ:null,colorWrite:Nr.BK,stencilWrite:r.sceneHasOcludees?ii:null,stencilTest:r.sceneHasOcludees?t?ni:oi:null,polygonOffset:i||o?null:jr(r.enableOffset)})}initializePipeline(){return this._occludeePipelineState=this.setPipeline(this.configuration.transparencyPassType,!0),this.setPipeline(this.configuration.transparencyPassType,!1)}getPipelineState(e){return e?this._occludeePipelineState:this.pipeline}}di.shader=new $r(ui.D,(()=>r.e(2186).then(r.bind(r,72186))));const fi=e=>function(e){return e.cullFace?0!==e.cullFace:!e.slicePlaneEnabled&&!e.transparent&&!e.doubleSidedMode}(e)&&{face:1===e.cullFace?1028:1029,mode:2305};class hi extends class{constructor(){this._key="",this._keyDirty=!1,this._parameterBits=this._parameterBits.map((()=>0))}get key(){return this._keyDirty&&(this._keyDirty=!1,this._key=String.fromCharCode.apply(String,this._parameterBits)),this._key}snapshot(){const e=this._parameterNames,t={key:this.key};for(const r of e)t[r]=this[r];return t}}{constructor(){super(...arguments),this.output=0,this.alphaDiscardMode=1,this.doubleSidedMode=0,this.isSchematic=!1,this.vertexColors=!1,this.offsetBackfaces=!1,this.symbolColors=!1,this.vvSize=!1,this.vvColor=!1,this.verticalOffset=!1,this.receiveShadows=!1,this.slicePlaneEnabled=!1,this.sliceHighlightDisabled=!1,this.receiveAmbientOcclusion=!1,this.screenSizePerspective=!1,this.textureAlphaPremultiplied=!1,this.hasColorTexture=!1,this.usePBR=!1,this.hasMetalnessAndRoughnessTexture=!1,this.hasEmissionTexture=!1,this.hasOcclusionTexture=!1,this.hasNormalTexture=!1,this.instanced=!1,this.instancedColor=!1,this.instancedDoublePrecision=!1,this.vertexTangents=!1,this.normalsTypeDerivate=!1,this.writeDepth=!0,this.sceneHasOcludees=!1,this.transparent=!1,this.enableOffset=!0,this.cullFace=0,this.transparencyPassType=3}}(0,Wr._)([Xr({count:8})],hi.prototype,"output",void 0),(0,Wr._)([Xr({count:4})],hi.prototype,"alphaDiscardMode",void 0),(0,Wr._)([Xr({count:3})],hi.prototype,"doubleSidedMode",void 0),(0,Wr._)([Xr()],hi.prototype,"isSchematic",void 0),(0,Wr._)([Xr()],hi.prototype,"vertexColors",void 0),(0,Wr._)([Xr()],hi.prototype,"offsetBackfaces",void 0),(0,Wr._)([Xr()],hi.prototype,"symbolColors",void 0),(0,Wr._)([Xr()],hi.prototype,"vvSize",void 0),(0,Wr._)([Xr()],hi.prototype,"vvColor",void 0),(0,Wr._)([Xr()],hi.prototype,"verticalOffset",void 0),(0,Wr._)([Xr()],hi.prototype,"receiveShadows",void 0),(0,Wr._)([Xr()],hi.prototype,"slicePlaneEnabled",void 0),(0,Wr._)([Xr()],hi.prototype,"sliceHighlightDisabled",void 0),(0,Wr._)([Xr()],hi.prototype,"receiveAmbientOcclusion",void 0),(0,Wr._)([Xr()],hi.prototype,"screenSizePerspective",void 0),(0,Wr._)([Xr()],hi.prototype,"textureAlphaPremultiplied",void 0),(0,Wr._)([Xr()],hi.prototype,"hasColorTexture",void 0),(0,Wr._)([Xr()],hi.prototype,"usePBR",void 0),(0,Wr._)([Xr()],hi.prototype,"hasMetalnessAndRoughnessTexture",void 0),(0,Wr._)([Xr()],hi.prototype,"hasEmissionTexture",void 0),(0,Wr._)([Xr()],hi.prototype,"hasOcclusionTexture",void 0),(0,Wr._)([Xr()],hi.prototype,"hasNormalTexture",void 0),(0,Wr._)([Xr()],hi.prototype,"instanced",void 0),(0,Wr._)([Xr()],hi.prototype,"instancedColor",void 0),(0,Wr._)([Xr()],hi.prototype,"instancedDoublePrecision",void 0),(0,Wr._)([Xr()],hi.prototype,"vertexTangents",void 0),(0,Wr._)([Xr()],hi.prototype,"normalsTypeDerivate",void 0),(0,Wr._)([Xr()],hi.prototype,"writeDepth",void 0),(0,Wr._)([Xr()],hi.prototype,"sceneHasOcludees",void 0),(0,Wr._)([Xr()],hi.prototype,"transparent",void 0),(0,Wr._)([Xr()],hi.prototype,"enableOffset",void 0),(0,Wr._)([Xr({count:3})],hi.prototype,"cullFace",void 0),(0,Wr._)([Xr({count:4})],hi.prototype,"transparencyPassType",void 0);var mi=r(79733);class pi extends di{initializeProgram(e){const t=pi.shader.get(),r=this.configuration,i=t.build({OITEnabled:0===r.transparencyPassType,output:r.output,viewingMode:e.viewingMode,receiveShadows:r.receiveShadows,slicePlaneEnabled:r.slicePlaneEnabled,sliceHighlightDisabled:r.sliceHighlightDisabled,sliceEnabledForVertexPrograms:!1,symbolColor:r.symbolColors,vvSize:r.vvSize,vvColor:r.vvColor,vvInstancingEnabled:!0,instanced:r.instanced,instancedColor:r.instancedColor,instancedDoublePrecision:r.instancedDoublePrecision,useOldSceneLightInterface:!1,pbrMode:r.usePBR?1:0,hasMetalnessAndRoughnessTexture:!1,hasEmissionTexture:!1,hasOcclusionTexture:!1,hasNormalTexture:!1,hasColorTexture:r.hasColorTexture,receiveAmbientOcclusion:r.receiveAmbientOcclusion,useCustomDTRExponentForWater:!1,normalType:0,doubleSidedMode:2,vertexTangets:!1,attributeTextureCoordinates:r.hasColorTexture?1:0,textureAlphaPremultiplied:r.textureAlphaPremultiplied,attributeColor:r.vertexColors,screenSizePerspectiveEnabled:r.screenSizePerspective,verticalOffsetEnabled:r.verticalOffset,offsetBackfaces:r.offsetBackfaces,doublePrecisionRequiresObfuscation:(0,si.I)(e.rctx),alphaDiscardMode:r.alphaDiscardMode,supportsTextureAtlas:!1});return new Kr.Z(e.rctx,i.generateSource("vertex"),i.generateSource("fragment"),Pr)}}pi.shader=new $r(mi.R,(()=>r.e(1343).then(r.bind(r,41343))));class vi extends Ir{constructor(e,t){super(t,e,bi),this.supportsEdges=!0,this.techniqueConfig=new hi,this.vertexBufferLayout=vi.getVertexBufferLayout(this.params),this.instanceBufferLayout=e.instanced?vi.getInstanceBufferLayout(this.params):null}isVisibleInPass(e){return 4!==e||this.params.castShadows}isVisible(){const e=this.params;if(!super.isVisible()||0===e.layerOpacity)return!1;const t=e.instanced,r=e.vertexColors,i=e.symbolColors,o=!!t&&t.indexOf("color")>-1,n=e.vvColorEnabled,a="replace"===e.colorMixMode,s=e.opacity>0,c=e.externalColor&&e.externalColor[3]>0;return r&&(o||n||i)?!!a||s:r?a?c:s:o||n||i?!!a||s:a?c:s}getTechniqueConfig(e,t){return this.techniqueConfig.output=e,this.techniqueConfig.hasNormalTexture=!!this.params.normalTextureId,this.techniqueConfig.hasColorTexture=!!this.params.textureId,this.techniqueConfig.vertexTangents=this.params.vertexTangents,this.techniqueConfig.instanced=!!this.params.instanced,this.techniqueConfig.instancedDoublePrecision=this.params.instancedDoublePrecision,this.techniqueConfig.vvSize=this.params.vvSizeEnabled,this.techniqueConfig.verticalOffset=null!==this.params.verticalOffset,this.techniqueConfig.screenSizePerspective=null!==this.params.screenSizePerspective,this.techniqueConfig.slicePlaneEnabled=this.params.slicePlaneEnabled,this.techniqueConfig.sliceHighlightDisabled=this.params.sliceHighlightDisabled,this.techniqueConfig.alphaDiscardMode=this.params.textureAlphaMode,this.techniqueConfig.normalsTypeDerivate="screenDerivative"===this.params.normals,this.techniqueConfig.transparent=this.params.transparent,this.techniqueConfig.writeDepth=this.params.writeDepth,this.techniqueConfig.sceneHasOcludees=this.params.sceneHasOcludees,this.techniqueConfig.cullFace=null!=this.params.cullFace?this.params.cullFace:0,0!==e&&7!==e||(this.techniqueConfig.vertexColors=this.params.vertexColors,this.techniqueConfig.symbolColors=this.params.symbolColors,this.params.treeRendering?this.techniqueConfig.doubleSidedMode=2:this.techniqueConfig.doubleSidedMode=this.params.doubleSided&&"normal"===this.params.doubleSidedType?1:this.params.doubleSided&&"winding-order"===this.params.doubleSidedType?2:0,this.techniqueConfig.instancedColor=!!this.params.instanced&&this.params.instanced.indexOf("color")>-1,this.techniqueConfig.receiveShadows=this.params.receiveShadows&&this.params.shadowMappingEnabled,this.techniqueConfig.receiveAmbientOcclusion=this.params.receiveSSAO,this.techniqueConfig.vvColor=this.params.vvColorEnabled,this.techniqueConfig.textureAlphaPremultiplied=!!this.params.textureAlphaPremultiplied,this.techniqueConfig.usePBR=this.params.usePBR,this.techniqueConfig.hasMetalnessAndRoughnessTexture=!!this.params.metallicRoughnessTextureId,this.techniqueConfig.hasEmissionTexture=!!this.params.emissiveTextureId,this.techniqueConfig.hasOcclusionTexture=!!this.params.occlusionTextureId,this.techniqueConfig.offsetBackfaces=!(!this.params.transparent||!this.params.offsetTransparentBackfaces),this.techniqueConfig.isSchematic=this.params.usePBR&&this.params.isSchematic,this.techniqueConfig.transparencyPassType=t?t.transparencyPassType:3,this.techniqueConfig.enableOffset=!t||t.camera.relativeElevation<5e5),this.techniqueConfig}intersect(e,t,r,o,a,s,c){if(null!==this.params.verticalOffset){const e=o.camera;(0,n.s)(Mi,r[12],r[13],r[14]);let t=null;switch(o.viewingMode){case 1:t=(0,n.n)(Si,Mi);break;case 2:t=(0,n.g)(Si,wi)}let i=0;if(null!==this.params.verticalOffset){const r=(0,n.f)(Ci,Mi,e.eye),o=(0,n.l)(r),a=(0,n.a)(r,r,1/o);let s=null;this.params.screenSizePerspective&&(s=(0,n.d)(t,a)),i+=(0,Ar.Hx)(e,o,this.params.verticalOffset,s,this.params.screenSizePerspective)}(0,n.a)(t,t,i),(0,n.t)(Ti,t,o.transform.inverseRotation),a=(0,n.f)(yi,a,Ti),s=(0,n.f)(_i,s,Ti)}(0,Ar.Bw)(e,t,o,a,s,function(e){return(0,i.pC)(e)?(gr.offset=e,gr):null}(o.verticalOffset),c)}getGLMaterial(e){if(0===e.output||7===e.output||1===e.output||2===e.output||3===e.output||4===e.output)return new gi(e)}createBufferWriter(){return new xi(this.vertexBufferLayout,this.instanceBufferLayout)}static getVertexBufferLayout(e){const t=e.textureId||e.normalTextureId||e.metallicRoughnessTextureId||e.emissiveTextureId||e.occlusionTextureId,r=(0,ue.U$)().vec3f("position").vec3f("normal");return e.vertexTangents&&r.vec4f("tangent"),t&&r.vec2f("uv0"),e.vertexColors&&r.vec4u8("color"),e.symbolColors&&r.vec4u8("symbolColor"),r}static getInstanceBufferLayout(e){let t=(0,ue.U$)();return t=e.instancedDoublePrecision?t.vec3f("modelOriginHi").vec3f("modelOriginLo").mat3f("model").mat3f("modelNormal"):t.mat4f("model").mat4f("modelNormal"),e.instanced&&e.instanced.indexOf("color")>-1&&(t=t.vec4f("instanceColor")),e.instanced&&e.instanced.indexOf("featureAttribute")>-1&&(t=t.vec4f("instanceFeatureAttribute")),t}}class gi extends Or{constructor(e){const t=e.material;super({...e,...t.params}),this.updateParameters()}updateParameters(e){const t=this.material.params;this.updateTexture(t.textureId),this.technique=t.treeRendering?this.techniqueRep.acquireAndReleaseExisting(pi,this.material.getTechniqueConfig(this.output,e),this.technique):this.techniqueRep.acquireAndReleaseExisting(di,this.material.getTechniqueConfig(this.output,e),this.technique)}selectPipelines(){}_updateShadowState(e){e.shadowMappingEnabled!==this.material.params.shadowMappingEnabled&&this.material.setParameterValues({shadowMappingEnabled:e.shadowMappingEnabled})}_updateOccludeeState(e){e.hasOccludees!==this.material.params.sceneHasOcludees&&this.material.setParameterValues({sceneHasOcludees:e.hasOccludees})}ensureParameters(e){0!==this.output&&7!==this.output||(this._updateShadowState(e),this._updateOccludeeState(e)),this.updateParameters(e)}bind(e,t){e.bindProgram(this.technique.program),this.technique.bindPass(e,this.material.params,t),this.bindTexture(e,this.technique.program)}beginSlot(e){return e===(this.material.params.transparent?this.material.params.writeDepth?5:8:3)}getPipelineState(e,t){return this.technique.getPipelineState(t)}}const bi={textureId:void 0,initTextureTransparent:!1,isSchematic:!1,usePBR:!1,normalTextureId:void 0,vertexTangents:!1,occlusionTextureId:void 0,emissiveTextureId:void 0,metallicRoughnessTextureId:void 0,emissiveFactor:[0,0,0],mrrFactors:[0,1,.5],ambient:[.2,.2,.2],diffuse:[.8,.8,.8],externalColor:[1,1,1,1],colorMixMode:"multiply",opacity:1,layerOpacity:1,vertexColors:!1,symbolColors:!1,doubleSided:!1,doubleSidedType:"normal",cullFace:void 0,instanced:void 0,instancedDoublePrecision:!1,normals:"default",receiveSSAO:!0,receiveShadows:!0,castShadows:!0,shadowMappingEnabled:!1,verticalOffset:null,screenSizePerspective:null,slicePlaneEnabled:!1,sliceHighlightDisabled:!1,offsetTransparentBackfaces:!1,vvSizeEnabled:!1,vvSizeMinSize:[1,1,1],vvSizeMaxSize:[100,100,100],vvSizeOffset:[0,0,0],vvSizeFactor:[1,1,1],vvSizeValue:[1,1,1],vvColorEnabled:!1,vvColorValues:[0,0,0,0,0,0,0,0],vvColorColors:[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0],vvSymbolAnchor:[0,0,0],vvSymbolRotationMatrix:(0,c.a)(),transparent:!1,writeDepth:!0,textureAlphaMode:0,textureAlphaCutoff:Dr.F,textureAlphaPremultiplied:!1,sceneHasOcludees:!1,renderOccluded:1};class xi{constructor(e,t){this.vertexBufferLayout=e,this.instanceBufferLayout=t}allocate(e){return this.vertexBufferLayout.createBuffer(e)}elementCount(e){return e.indices.position.length}write(e,t,r,i){!function(e,t,r,i,o,n){for(const a of t.fieldNames){const t=e.vertexAttr[a],s=e.indices[a];if(t&&s)switch(a){case re.Xt.POSITION:{(0,re.hu)(3===t.size);const e=o.getField(a,d.ct);e&&Br(s,t.data,r,e,n);break}case re.Xt.NORMAL:{(0,re.hu)(3===t.size);const e=o.getField(a,d.ct);e&&zr(s,t.data,i,e,n);break}case re.Xt.UV0:{(0,re.hu)(2===t.size);const e=o.getField(a,d.Eu);e&&Rr(s,t.data,e,n);break}case re.Xt.UVMAPSPACE:{(0,re.hu)(4===t.size);const e=o.getField(a,d.ek);e&&Lr(s,t.data,e,n);break}case re.Xt.MEANVERTEXPOSITION:{(0,re.hu)(3===t.size);const e=o.getField(a,d.ct);e&&Br(s,t.data,r,e,n);break}case re.Xt.BOUND1:case re.Xt.BOUND2:case re.Xt.BOUND3:{(0,re.hu)(3===t.size);const e=o.getField(a,d.ct);e&&Br(s,t.data,r,e,n);break}case re.Xt.COLOR:{(0,re.hu)(3===t.size||4===t.size);const e=o.getField(a,d.mc);e&&Hr(s,t.data,t.size,e,n);break}case re.Xt.SYMBOLCOLOR:{(0,re.hu)(3===t.size||4===t.size);const e=o.getField(a,d.mc);e&&Hr(s,t.data,t.size,e,n);break}case re.Xt.TANGENT:{(0,re.hu)(4===t.size);const e=o.getField(a,d.ek);e&&Lr(s,t.data,e,n);break}}}}(t,this.vertexBufferLayout,e.transformation,e.invTranspTransformation,r,i)}}const yi=(0,o.c)(),_i=(0,o.c)(),wi=(0,o.f)(0,0,1),Si=(0,o.c)(),Ti=(0,o.c)(),Mi=(0,o.c)(),Ci=(0,o.c)();var Oi=r(94588),Ai=r(6962),Pi=r(32656),Ii=r(10923),Ri=r(39105),Fi=r(35470),Li=r(4094),Bi=r(41419),zi=r(8634),Hi=r(57319),Di=r(69595),Ni=r(74038);const Ei=[{name:"position",count:2,type:5126,offset:0,stride:8,normalized:!1}],Vi=[{name:"position",count:2,type:5126,offset:0,stride:16,normalized:!1},{name:"uv0",count:2,type:5126,offset:8,stride:16,normalized:!1}];var Ui=r(84570),Gi=r(6091);const ki=f.Z.getLogger("esri.views.3d.webgl-engine.lib.DDSUtil");function ji(e){return e.charCodeAt(0)+(e.charCodeAt(1)<<8)+(e.charCodeAt(2)<<16)+(e.charCodeAt(3)<<24)}const qi=ji("DXT1"),Wi=ji("DXT3"),$i=ji("DXT5");function Xi(e,t,r,i){const{textureData:o,internalFormat:n,width:a,height:s}=function(e,t){const r=new Int32Array(e,0,31);if(542327876!==r[0])return ki.error("Invalid magic number in DDS header"),null;if(!(4&r[20]))return ki.error("Unsupported format, must contain a FourCC code"),null;const i=r[21];let o,n;switch(i){case qi:o=8,n=33776;break;case Wi:o=16,n=33778;break;case $i:o=16,n=33779;break;default:return ki.error("Unsupported FourCC code:",(a=i,String.fromCharCode(255&a,a>>8&255,a>>16&255,a>>24&255))),null}var a;let s=1,c=r[4],l=r[3];0==(3&c)&&0==(3&l)||(ki.warn("Rounding up compressed texture size to nearest multiple of 4."),c=c+3&-4,l=l+3&-4);const u=c,d=l;let f,h;131072&r[2]&&!1!==t&&(s=Math.max(1,r[7])),1===s||(0,I.wt)(c)&&(0,I.wt)(l)||(ki.warn("Ignoring mipmaps of non power of two sized compressed texture."),s=1);let m=r[1]+4;const p=[];for(let t=0;t<s;++t)h=(c+3>>2)*(l+3>>2)*o,f=new Uint8Array(e,m,h),p.push(f),m+=h,c=Math.max(1,c>>1),l=Math.max(1,l>>1);return{textureData:{type:"compressed",levels:p},internalFormat:n,width:u,height:d}}(r,i);t.samplingMode=o.levels.length>1?9987:9729,t.hasMipmap=o.levels.length>1,t.internalFormat=n,t.width=a,t.height=s;const c=new zi.Z(e,t,o);return e.bindTexture(c,0),c}class Zi{constructor(e,t,r){this.data=e,this.glTexture=null,this.powerOfTwoStretchInfo=null,this.loadingPromise=null,this.loadingController=null,this.events=new Fi.Z,this.data=e,this.id=Zi.idGen.gen(t),this.params=r||{},this.params.mipmap=!1!==this.params.mipmap,this.params.noUnpackFlip=this.params.noUnpackFlip||!1,this.params.preMultiplyAlpha=this.params.preMultiplyAlpha||!1,this.params.wrap=this.params.wrap||{s:10497,t:10497},this.params.powerOfTwoResizeMode=this.params.powerOfTwoResizeMode||1,this.estimatedTexMemRequired=Zi.estimateTexMemRequired(this.data,this.params),this.startPreload()}startPreload(){const e=this.data;(0,i.Wi)(e)||(e instanceof HTMLVideoElement?this.startPreloadVideoElement(e):e instanceof HTMLImageElement&&this.startPreloadImageElement(e))}startPreloadVideoElement(e){(0,Ii.jc)(e.src)||"auto"===e.preload&&e.crossOrigin||(e.preload="auto",e.crossOrigin="anonymous",e.src=e.src)}startPreloadImageElement(e){(0,Ii.HK)(e.src)||(0,Ii.jc)(e.src)||e.crossOrigin||(e.crossOrigin="anonymous",e.src=e.src)}static getDataDimensions(e){return e instanceof HTMLVideoElement?{width:e.videoWidth,height:e.videoHeight}:e}static estimateTexMemRequired(e,t){if((0,i.Wi)(e))return 0;if((0,Ai.eP)(e)||(0,Ai.lq)(e))return e.byteLength;const{width:r,height:o}=e instanceof Image||e instanceof ImageData||e instanceof HTMLCanvasElement||e instanceof HTMLVideoElement?Zi.getDataDimensions(e):t;return(t.mipmap?4/3:1)*r*o*(t.components||4)||0}dispose(){this.data=void 0}get width(){return this.params.width}get height(){return this.params.height}createDescriptor(e){const t=this.params.mipmap&&!this.params.disableAnisotropy;return{target:3553,pixelFormat:6408,dataType:5121,wrapMode:this.params.wrap,flipped:!this.params.noUnpackFlip,samplingMode:this.params.mipmap?9987:9729,hasMipmap:this.params.mipmap,preMultiplyAlpha:this.params.preMultiplyAlpha,maxAnisotropy:t?e.parameters.maxMaxAnisotropy:void 0}}load(e,t){if((0,i.pC)(this.glTexture))return this.glTexture;if((0,i.pC)(this.loadingPromise))return this.loadingPromise;const r=this.data;return(0,i.Wi)(r)?(this.glTexture=new zi.Z(e,this.createDescriptor(e),null),e.bindTexture(this.glTexture,0),this.glTexture):"string"==typeof r?this.loadFromURL(e,t,r):r instanceof Image?this.loadFromImageElement(e,t,r):r instanceof HTMLVideoElement?this.loadFromVideoElement(e,t,r):r instanceof ImageData||r instanceof HTMLCanvasElement?this.loadFromImage(e,r,t):((0,Ai.eP)(r)||(0,Ai.lq)(r))&&this.params.encoding===Zi.DDS_ENCODING?this.loadFromDDSData(e,r):(0,Ai.lq)(r)?this.loadFromPixelData(e,r):(0,Ai.eP)(r)?this.loadFromPixelData(e,new Uint8Array(r)):null}get requiresFrameUpdates(){return this.data instanceof HTMLVideoElement}frameUpdate(e,t,r){if(!(this.data instanceof HTMLVideoElement)||(0,i.Wi)(this.glTexture))return r;if(this.data.readyState<2||r===this.data.currentTime)return r;if((0,i.pC)(this.powerOfTwoStretchInfo)){const{framebuffer:r,vao:i,sourceTexture:o}=this.powerOfTwoStretchInfo;o.setData(this.data),this.drawStretchedTexture(e,t,r,i,o,this.glTexture)}else{const{width:e,height:t}=this.data,{width:r,height:i}=this.glTexture.descriptor;e!==r||t!==i?this.glTexture.updateData(0,0,0,Math.min(e,r),Math.min(t,i),this.data):this.glTexture.setData(this.data)}return this.glTexture.descriptor.hasMipmap&&this.glTexture.generateMipmap(),this.data.currentTime}loadFromDDSData(e,t){return this.glTexture=Xi(e,this.createDescriptor(e),t,this.params.mipmap),e.bindTexture(this.glTexture,0),this.glTexture}loadFromPixelData(e,t){(0,re.hu)(this.params.width>0&&this.params.height>0);const r=this.createDescriptor(e);return r.pixelFormat=1===this.params.components?6409:3===this.params.components?6407:6408,r.width=this.params.width,r.height=this.params.height,this.glTexture=new zi.Z(e,r,t),e.bindTexture(this.glTexture,0),this.glTexture}async loadAsync(e){const t=(0,Ri.createAbortController)();this.loadingController=t;const r=e(t.signal);this.loadingPromise=r;const i=()=>{this.loadingController===t&&(this.loadingController=null),this.loadingPromise===r&&(this.loadingPromise=null)};return r.then(i,i),r}loadFromURL(e,t,r){return this.loadAsync((async i=>{const o=await(0,Bi.t)(r,{signal:i});return this.loadFromImage(e,o,t)}))}loadFromImageElement(e,t,r){return r.complete?this.loadFromImage(e,r,t):this.loadAsync((async i=>{const o=await(0,Li.f)(r,r.src,!1,i);return this.loadFromImage(e,o,t)}))}loadFromVideoElement(e,t,r){return r.readyState>=2?this.loadFromImage(e,r,t):this.loadFromVideoElementAsync(e,t,r)}loadFromVideoElementAsync(e,t,r){return this.loadAsync((o=>(0,Ri.create)(((n,a)=>{const s=()=>{r.removeEventListener("loadeddata",c),r.removeEventListener("error",l),(0,i.pC)(u)&&u.remove()},c=()=>{r.readyState>=2&&(s(),n(this.loadFromImage(e,r,t)))},l=e=>{s(),a(e||new Pi.Z("Failed to load video"))};r.addEventListener("loadeddata",c),r.addEventListener("error",l);const u=(0,Ri.onAbort)(o,(()=>l((0,Ri.createAbortError)())))}))))}loadFromImage(e,t,r){const i=Zi.getDataDimensions(t);this.params.width=i.width,this.params.height=i.height;const o=this.createDescriptor(e);return o.pixelFormat=3===this.params.components?6407:6408,!this.requiresPowerOfTwo(e,o)||(0,I.wt)(i.width)&&(0,I.wt)(i.height)?(o.width=i.width,o.height=i.height,this.glTexture=new zi.Z(e,o,t),e.bindTexture(this.glTexture,0),this.glTexture):(this.glTexture=this.makePowerOfTwoTexture(e,t,i,o,r),e.bindTexture(this.glTexture,0),this.glTexture)}requiresPowerOfTwo(e,t){const r=33071,i="number"==typeof t.wrapMode?t.wrapMode===r:t.wrapMode.s===r&&t.wrapMode.t===r;return!(0,Gi.Z)(e.gl)&&(t.hasMipmap||!i)}makePowerOfTwoTexture(e,t,r,i,o){const{width:n,height:a}=r,s=(0,I.Sf)(n),c=(0,I.Sf)(a);let l;switch(i.width=s,i.height=c,this.params.powerOfTwoResizeMode){case 2:i.textureCoordinateScaleFactor=[n/s,a/c],l=new zi.Z(e,i),l.updateData(0,0,0,n,a,t);break;case 1:case null:case void 0:l=this.stretchToPowerOfTwo(e,t,i,o);break;default:(0,Oi.Bg)(this.params.powerOfTwoResizeMode)}return i.hasMipmap&&l.generateMipmap(),l}stretchToPowerOfTwo(e,t,r,i){const o=new zi.Z(e,r),n=new Ui.Z(e,{colorTarget:0,depthStencilTarget:0},o),a=new zi.Z(e,{target:3553,pixelFormat:r.pixelFormat,dataType:5121,wrapMode:33071,samplingMode:9729,flipped:!!r.flipped,maxAnisotropy:8,preMultiplyAlpha:r.preMultiplyAlpha},t),s=function(e,t=Ei,r=Pr,i=-1,o=1){let n=null;switch(t){case Vi:n=new Float32Array([i,i,0,0,o,i,1,0,i,o,0,1,o,o,1,1]);break;case Ei:default:n=new Float32Array([i,i,o,i,i,o,o,o])}return new Ni.Z(e,r,{geometry:t},{geometry:Di.Z.createVertex(e,35044,n)})}(e);return this.drawStretchedTexture(e,i,n,s,a,o),this.requiresFrameUpdates?this.powerOfTwoStretchInfo={vao:s,sourceTexture:a,framebuffer:n}:(s.dispose(!0),a.dispose(),n.detachColorTexture(),e.bindFramebuffer(null),n.dispose()),o}drawStretchedTexture(e,t,r,i,o,n){e.bindFramebuffer(r);const a=e.getViewport();e.setViewport(0,0,n.descriptor.width,n.descriptor.height);const s=t.program;e.bindProgram(s),s.setUniform4f("color",1,1,1,1),s.setUniform1i("tex",0),e.bindTexture(o,0),e.bindVAO(i),e.setPipelineState(t.pipeline),e.drawArrays(5,0,(0,Hi._V)(i,"geometry")),e.bindFramebuffer(null),e.setViewport(a.x,a.y,a.width,a.height)}unload(){if((0,i.pC)(this.powerOfTwoStretchInfo)){const{framebuffer:e,vao:t,sourceTexture:r}=this.powerOfTwoStretchInfo;t.dispose(!0),r.dispose(),e.dispose(),this.glTexture=null,this.powerOfTwoStretchInfo=null}if((0,i.pC)(this.glTexture)&&(this.glTexture.dispose(),this.glTexture=null),(0,i.pC)(this.loadingController)){const e=this.loadingController;this.loadingController=null,this.loadingPromise=null,e.abort()}this.events.emit("unloaded")}}Zi.idGen=new oe,Zi.DDS_ENCODING="image/vnd-ms.dds";const Ki=Zi;var Yi=r(54721),Qi=r(59351);class Ji{constructor(e){this.streamDataRequester=e}async loadJSON(e,t){return this.load("json",e,t)}async loadBinary(e,t){return(0,Ii.HK)(e)?((0,Ri.throwIfAborted)(t),(0,Ii.AH)(e)):this.load("binary",e,t)}async loadImage(e,t){return this.load("image",e,t)}async load(e,t,r){if((0,i.Wi)(this.streamDataRequester))return(await(0,Yi.default)(t,{responseType:eo[e]})).data;const o=await(0,Qi.q6)(this.streamDataRequester.request(t,e,r));if(!0===o.ok)return o.value;throw(0,Ri.throwIfAbortError)(o.error),new Pi.Z("",`Request for resource failed: ${o.error}`)}}const eo={image:"image",binary:"array-buffer",json:"json"};var to=r(45072);function ro(e,t,r){const i=e.typedBuffer,o=e.typedBufferStride,n=t.typedBuffer,a=t.typedBufferStride,s=r?r.count:t.count;let c=(r&&r.dstIndex?r.dstIndex:0)*o,l=(r&&r.srcIndex?r.srcIndex:0)*a;for(let e=0;e<s;++e)i[c]=n[l],i[c+1]=n[l+1],c+=o,l+=a}function io(e,t,r){const i=e.typedBuffer,o=e.typedBufferStride,n=t.typedBuffer,a=t.typedBufferStride,s=r?r.count:t.count;let c=(r&&r.dstIndex?r.dstIndex:0)*o,l=(r&&r.srcIndex?r.srcIndex:0)*a;if((0,to.U)(t.elementType)){const e=(0,to.Op)(t.elementType);if((0,to.B3)(t.elementType))for(let t=0;t<s;++t)i[c]=Math.max(n[l]/e,-1),i[c+1]=Math.max(n[l+1]/e,-1),c+=o,l+=a;else for(let t=0;t<s;++t)i[c]=n[l]/e,i[c+1]=n[l+1]/e,c+=o,l+=a}else ro(e,t,r);return e}Object.freeze({__proto__:null,copy:ro,normalizeIntegerBuffer:io});function oo(e,t,r){const i=e.typedBuffer,o=e.typedBufferStride,n=t.typedBuffer,a=t.typedBufferStride,s=r?r.count:t.count;let c=(r&&r.dstIndex?r.dstIndex:0)*o,l=(r&&r.srcIndex?r.srcIndex:0)*a;for(let e=0;e<s;++e)i[c]=n[l],i[c+1]=n[l+1],i[c+2]=n[l+2],c+=o,l+=a}Object.freeze({__proto__:null,copy:oo});function no(e,t,r){const i=e.typedBuffer,o=e.typedBufferStride,n=t.typedBuffer,a=t.typedBufferStride,s=r?r.count:t.count;let c=(r&&r.dstIndex?r.dstIndex:0)*o,l=(r&&r.srcIndex?r.srcIndex:0)*a;for(let e=0;e<s;++e)i[c]=n[l],i[c+1]=n[l+1],i[c+2]=n[l+2],i[c+3]=n[l+3],c+=o,l+=a}function ao(e,t,r,i,o,n){const a=e.typedBuffer,s=e.typedBufferStride,c=n?n.count:e.count;let l=(n&&n.dstIndex?n.dstIndex:0)*s;for(let e=0;e<c;++e)a[l]=t,a[l+1]=r,a[l+2]=i,a[l+3]=o,l+=s}Object.freeze({__proto__:null,copy:no,fill:ao});Object.freeze({__proto__:null,copy:function(e,t,r){const i=e.typedBuffer,o=e.typedBufferStride,n=t.typedBuffer,a=t.typedBufferStride,s=r?r.count:t.count;let c=(r&&r.dstIndex?r.dstIndex:0)*o,l=(r&&r.srcIndex?r.srcIndex:0)*a;for(let e=0;e<s;++e){for(let e=0;e<9;++e)i[c+e]=n[l+e];c+=o,l+=a}}});Object.freeze({__proto__:null,copy:function(e,t,r){const i=e.typedBuffer,o=e.typedBufferStride,n=t.typedBuffer,a=t.typedBufferStride,s=r?r.count:t.count;let c=(r&&r.dstIndex?r.dstIndex:0)*o,l=(r&&r.srcIndex?r.srcIndex:0)*a;for(let e=0;e<s;++e){for(let e=0;e<16;++e)i[c+e]=n[l+e];c+=o,l+=a}}});function so(e,t){const r=e.count;t||(t=new e.TypedArrayConstructor(r));for(let i=0;i<r;i++)t[i]=e.get(i);return t}Object.freeze({__proto__:null,copy:function(e,t,r){const i=e.typedBuffer,o=e.typedBufferStride,n=t.typedBuffer,a=t.typedBufferStride,s=r?r.count:t.count;let c=(r&&r.dstIndex?r.dstIndex:0)*o,l=(r&&r.srcIndex?r.srcIndex:0)*a;for(let e=0;e<s;++e)i[c]=n[l],c+=o,l+=a},makeDense:so});function co(e,t){return new e(new ArrayBuffer(t*e.ElementCount*(0,to.n1)(e.ElementType)))}const lo=f.Z.getLogger("esri.views.3d.glTF");class uo{constructor(e,t,r=""){this.major=e,this.minor=t,this._context=r}lessThan(e,t){return this.major<e||e===this.major&&this.minor<t}since(e,t){return!this.lessThan(e,t)}validate(e){if(this.major!==e.major){const t=this._context&&this._context+":",r=this._context&&this._context+" ";throw new Pi.Z(t+"unsupported-version",`Required major ${r}version is '${this.major}', but got '\${version.major}.\${version.minor}'`,{version:e})}}clone(){return new uo(this.major,this.minor,this._context)}static parse(e,t=""){const[r,i]=e.split("."),o=/^\s*\d+\s*$/;if(!r||!r.match||!r.match(o))throw new Pi.Z((t&&t+":")+"invalid-version","Expected major version to be a number, but got '${version}'",{version:e});if(!i||!i.match||!i.match(o))throw new Pi.Z((t&&t+":")+"invalid-version","Expected minor version to be a number, but got '${version}'",{version:e});const n=parseInt(r,10),a=parseInt(i,10);return new uo(n,a,t)}}class fo{constructor(e){this.data=e,this.offset4=0,this.dataUint32=new Uint32Array(this.data,0,Math.floor(this.data.byteLength/4))}readUint32(){const e=this.offset4;return this.offset4+=1,this.dataUint32[e]}readUint8Array(e){const t=4*this.offset4;return this.offset4+=e/4,new Uint8Array(this.data,t,e)}remainingBytes(){return this.data.byteLength-4*this.offset4}}const ho={baseColorFactor:[1,1,1,1],metallicFactor:1,roughnessFactor:1},mo={pbrMetallicRoughness:ho,emissiveFactor:[0,0,0],alphaMode:"OPAQUE",alphaCutoff:.5,doubleSided:!1},po={ESRI_externalColorMixMode:"tint"},vo=(e={})=>{const t={...ho,...e.pbrMetallicRoughness},r=function(e){switch(e.ESRI_externalColorMixMode){case"multiply":case"tint":case"ignore":case"replace":break;default:(0,Oi.Bg)(e.ESRI_externalColorMixMode),e.ESRI_externalColorMixMode="tint"}return e}({...po,...e.extras});return{...mo,...e,pbrMetallicRoughness:t,extras:r}},go={magFilter:9729,minFilter:9987,wrapS:10497,wrapT:10497};const bo=1179937895;class xo{constructor(e,t,r,i,o){this.context=e,this.errorContext=t,this.uri=r,this.json=i,this.glbBuffer=o,this.bufferCache=new Map,this.textureCache=new Map,this.materialCache=new Map,this.nodeParentMap=new Map,this.nodeTransformCache=new Map,this.baseUri=function(e){let t,r;return e.replace(/^(.*\/)?([^/]*)$/,((e,i,o)=>(t=i||"",r=o||"",""))),{dirPart:t,filePart:r}}(this.uri).dirPart,this.checkVersionSupported(),this.checkRequiredExtensionsSupported(),t.errorUnsupportedIf(null==i.scenes,"Scenes must be defined."),t.errorUnsupportedIf(null==i.meshes,"Meshes must be defined"),t.errorUnsupportedIf(null==i.nodes,"Nodes must be defined."),this.computeNodeParents()}static async load(e,t,r,i){if((0,Ii.HK)(r)){const i=(0,Ii.sJ)(r);if("model/gltf-binary"!==i.mediaType)try{const o=JSON.parse(i.isBase64?atob(i.data):i.data);return new xo(e,t,r,o)}catch{}const o=(0,Ii.AH)(r);if(xo.isGLBData(o))return this.fromGLBData(e,t,r,o)}if(r.endsWith(".gltf")){const o=await e.loadJSON(r,i);return new xo(e,t,r,o)}const o=await e.loadBinary(r,i);if(xo.isGLBData(o))return this.fromGLBData(e,t,r,o);const n=await e.loadJSON(r,i);return new xo(e,t,r,n)}static isGLBData(e){const t=new fo(e);return t.remainingBytes()>=4&&t.readUint32()===bo}static async fromGLBData(e,t,r,i){const o=await xo.parseGLBData(t,i);return new xo(e,t,r,o.json,o.binaryData)}static async parseGLBData(e,t){const r=new fo(t);e.assert(r.remainingBytes()>=12,"GLB binary data is insufficiently large.");const i=r.readUint32(),o=r.readUint32(),n=r.readUint32();e.assert(i===bo,"Magic first 4 bytes do not fit to expected GLB value."),e.assert(t.byteLength>=n,"GLB binary data is smaller than header specifies."),e.errorUnsupportedIf(2!==o,"An unsupported GLB container version was detected. Only version 2 is supported.");let a,s,c=0;for(;r.remainingBytes()>=8;){const t=r.readUint32(),i=r.readUint32();0===c?(e.assert(1313821514===i,"First GLB chunk must be JSON."),e.assert(t>=0,"No JSON data found."),a=await Mo(r.readUint8Array(t))):1===c?(e.errorUnsupportedIf(5130562!==i,"Second GLB chunk expected to be BIN."),s=r.readUint8Array(t)):e.warnUnsupported("More than 2 GLB chunks detected. Skipping."),c+=1}return a||e.error("No GLB JSON chunk detected."),{json:a,binaryData:s}}async getBuffer(e,t){const r=this.json.buffers[e],i=this.errorContext;if(null==r.uri)return i.assert(null!=this.glbBuffer,"GLB buffer not present"),this.glbBuffer;let o=this.bufferCache.get(e);if(!o){const n=await this.context.loadBinary(this.resolveUri(r.uri),t);o=new Uint8Array(n),this.bufferCache.set(e,o),i.assert(o.byteLength===r.byteLength,"Buffer byte lengths should match.")}return o}async getAccessor(e,t){const r=this.json.accessors[e],i=this.errorContext;i.errorUnsupportedIf(null==r.bufferView,"Some accessor does not specify a bufferView."),i.errorUnsupportedIf(r.type in["MAT2","MAT3","MAT4"],`AttributeType ${r.type} is not supported`);const o=this.json.bufferViews[r.bufferView],n=await this.getBuffer(o.buffer,t),a=So[r.type],s=To[r.componentType],c=a*s,l=o.byteStride||c;return{raw:n.buffer,byteStride:l,byteOffset:n.byteOffset+(o.byteOffset||0)+(r.byteOffset||0),entryCount:r.count,isDenselyPacked:l===c,componentCount:a,componentByteSize:s,componentType:r.componentType,min:r.min,max:r.max,normalized:!!r.normalized}}async getIndexData(e,t){if(null==e.indices)return null;const r=await this.getAccessor(e.indices,t);if(r.isDenselyPacked)switch(r.componentType){case 5121:return new Uint8Array(r.raw,r.byteOffset,r.entryCount);case 5123:return new Uint16Array(r.raw,r.byteOffset,r.entryCount);case 5125:return new Uint32Array(r.raw,r.byteOffset,r.entryCount)}else switch(r.componentType){case 5121:return so(this.wrapAccessor(d.D_,r));case 5123:return so(this.wrapAccessor(d.av,r));case 5125:return so(this.wrapAccessor(d.Nu,r))}}async getPositionData(e,t){const r=this.errorContext;r.errorUnsupportedIf(null==e.attributes.POSITION,"No POSITION vertex data found.");const i=await this.getAccessor(e.attributes.POSITION,t);return r.errorUnsupportedIf(5126!==i.componentType,"Expected type FLOAT for POSITION vertex attribute, but found "+Co[i.componentType]),r.errorUnsupportedIf(3!==i.componentCount,"POSITION vertex attribute must have 3 components, but found "+i.componentCount.toFixed()),this.wrapAccessor(d.ct,i)}async getNormalData(e,t){const r=this.errorContext;r.assert(null!=e.attributes.NORMAL,"No NORMAL vertex data found.");const i=await this.getAccessor(e.attributes.NORMAL,t);return r.errorUnsupportedIf(5126!==i.componentType,"Expected type FLOAT for NORMAL vertex attribute, but found "+Co[i.componentType]),r.errorUnsupportedIf(3!==i.componentCount,"NORMAL vertex attribute must have 3 components, but found "+i.componentCount.toFixed()),this.wrapAccessor(d.ct,i)}async getTangentData(e,t){const r=this.errorContext;r.assert(null!=e.attributes.TANGENT,"No TANGENT vertex data found.");const i=await this.getAccessor(e.attributes.TANGENT,t);return r.errorUnsupportedIf(5126!==i.componentType,"Expected type FLOAT for TANGENT vertex attribute, but found "+Co[i.componentType]),r.errorUnsupportedIf(4!==i.componentCount,"TANGENT vertex attribute must have 4 components, but found "+i.componentCount.toFixed()),new d.ek(i.raw,i.byteOffset,i.byteStride,i.byteOffset+i.byteStride*i.entryCount)}async getTextureCoordinates(e,t){const r=this.errorContext;r.assert(null!=e.attributes.TEXCOORD_0,"No TEXCOORD_0 vertex data found.");const i=await this.getAccessor(e.attributes.TEXCOORD_0,t);return r.errorUnsupportedIf(2!==i.componentCount,"TEXCOORD_0 vertex attribute must have 2 components, but found "+i.componentCount.toFixed()),5126===i.componentType?this.wrapAccessor(d.Eu,i):(r.errorUnsupportedIf(!i.normalized,"Integer component types are only supported for a normalized accessor for TEXCOORD_0."),function(e){switch(e.componentType){case 5120:return new d.Vs(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);case 5121:return new d.xA(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);case 5122:return new d.or(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);case 5123:return new d.TS(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);case 5125:return new d.qt(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);case 5126:return new d.Eu(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);default:return void(0,Oi.Bg)(e.componentType)}}(i))}async getVertexColors(e,t){const r=this.errorContext;r.assert(null!=e.attributes.COLOR_0,"No COLOR_0 vertex data found.");const i=await this.getAccessor(e.attributes.COLOR_0,t);if(r.errorUnsupportedIf(4!==i.componentCount&&3!==i.componentCount,"COLOR_0 attribute must have 3 or 4 components, but found "+i.componentCount.toFixed()),4===i.componentCount){if(5126===i.componentType)return this.wrapAccessor(d.ek,i);if(5121===i.componentType)return this.wrapAccessor(d.mc,i);if(5123===i.componentType)return this.wrapAccessor(d.v6,i)}else if(3===i.componentCount){if(5126===i.componentType)return this.wrapAccessor(d.ct,i);if(5121===i.componentType)return this.wrapAccessor(d.ne,i);if(5123===i.componentType)return this.wrapAccessor(d.mw,i)}r.errorUnsupported("Unsupported component type for COLOR_0 attribute: "+Co[i.componentType])}hasPositions(e){return void 0!==e.attributes.POSITION}hasNormals(e){return void 0!==e.attributes.NORMAL}hasVertexColors(e){return void 0!==e.attributes.COLOR_0}hasTextureCoordinates(e){return void 0!==e.attributes.TEXCOORD_0}hasTangents(e){return void 0!==e.attributes.TANGENT}async getMaterial(e,t){const r=this.errorContext;let i=this.materialCache.get(e.material);if(!i){const o=null!=e.material?vo(this.json.materials[e.material]):vo(),n=o.pbrMetallicRoughness,a=this.hasVertexColors(e);let s,c,l,u,d;n.baseColorTexture&&(r.errorUnsupportedIf(0!==(n.baseColorTexture.texCoord||0),"Only TEXCOORD with index 0 is supported."),s=await this.getTexture(n.baseColorTexture.index,t)),o.normalTexture&&(0!==(o.normalTexture.texCoord||0)?r.warnUnsupported("Only TEXCOORD with index 0 is supported for the normal map texture."):c=await this.getTexture(o.normalTexture.index,t)),o.occlusionTexture&&(0!==(o.occlusionTexture.texCoord||0)?r.warnUnsupported("Only TEXCOORD with index 0 is supported for the occlusion texture."):l=await this.getTexture(o.occlusionTexture.index,t)),o.emissiveTexture&&(0!==(o.emissiveTexture.texCoord||0)?r.warnUnsupported("Only TEXCOORD with index 0 is supported for the emissive texture."):u=await this.getTexture(o.emissiveTexture.index,t)),n.metallicRoughnessTexture&&(0!==(n.metallicRoughnessTexture.texCoord||0)?r.warnUnsupported("Only TEXCOORD with index 0 is supported for the metallicRoughness texture."):d=await this.getTexture(n.metallicRoughnessTexture.index,t));const f=null!=e.material?e.material:-1;i={alphaMode:o.alphaMode,alphaCutoff:o.alphaCutoff,color:n.baseColorFactor,doubleSided:!!o.doubleSided,colorTexture:s,normalTexture:c,name:o.name,id:f,occlusionTexture:l,emissiveTexture:u,emissiveFactor:o.emissiveFactor,metallicFactor:n.metallicFactor,roughnessFactor:n.roughnessFactor,metallicRoughnessTexture:d,vertexColors:a,ESRI_externalColorMixMode:o.extras.ESRI_externalColorMixMode}}return i}async getTexture(e,t){const r=this.errorContext,i=this.json.textures[e],o=(e=>({...go,...e}))(null!=i.sampler?this.json.samplers[i.sampler]:{});r.errorUnsupportedIf(null==i.source,"Source is expected to be defined for a texture.");const n=this.json.images[i.source];let a=this.textureCache.get(e);if(!a){let i;if(n.uri)i=await this.context.loadImage(this.resolveUri(n.uri),t);else{r.errorUnsupportedIf(null==n.bufferView,"Image bufferView must be defined."),r.errorUnsupportedIf(null==n.mimeType,"Image mimeType must be defined.");const e=this.json.bufferViews[n.bufferView],o=await this.getBuffer(e.buffer,t);r.errorUnsupportedIf(null!=e.byteStride,"byteStride not supported for image buffer"),i=await async function(e,t){return(0,Ri.create)(((r,i)=>{const o=new Blob([e],{type:t}),n=URL.createObjectURL(o),a=new Image;a.addEventListener("load",(()=>{URL.revokeObjectURL(n),"decode"in a?a.decode().then((()=>r(a)),(()=>r(a))):r(a)})),a.addEventListener("error",(e=>{URL.revokeObjectURL(n),i(e)})),a.src=n}))}(new Uint8Array(o.buffer,o.byteOffset+(e.byteOffset||0),e.byteLength),n.mimeType)}a={data:i,wrapS:o.wrapS,wrapT:o.wrapT,minFilter:o.minFilter,name:n.name,id:e},this.textureCache.set(e,a)}return a}getNodeTransform(e){if(void 0===e)return _o;let t=this.nodeTransformCache.get(e);if(!t){const r=this.getNodeTransform(this.getNodeParent(e)),i=this.json.nodes[e];i.matrix?t=(0,a.m)((0,l.a)(),r,i.matrix):i.translation||i.rotation||i.scale?(t=(0,l.b)(r),i.translation&&(0,a.t)(t,t,i.translation),i.rotation&&(wo[3]=(0,fe.g)(wo,i.rotation),(0,a.r)(t,t,wo[3],wo)),i.scale&&(0,a.s)(t,t,i.scale)):t=r,this.nodeTransformCache.set(e,t)}return t}wrapAccessor(e,t){return new e(t.raw,t.byteOffset,t.byteStride,t.byteOffset+t.byteStride*(t.entryCount-1)+t.componentByteSize*t.componentCount)}resolveUri(e){return(0,Ii.hF)(e,this.baseUri)}getNodeParent(e){return this.nodeParentMap.get(e)}checkVersionSupported(){const e=uo.parse(this.json.asset.version,"glTF");yo.validate(e)}checkRequiredExtensionsSupported(){const e=this.json,t=this.errorContext;e.extensionsRequired&&0!==e.extensionsRequired.length&&t.errorUnsupported("gltf loader was not able to load unsupported feature. Required extensions: "+e.extensionsRequired.join(", "))}computeNodeParents(){this.json.nodes.forEach(((e,t)=>{e.children&&e.children.forEach((e=>{this.nodeParentMap.set(e,t)}))}))}}const yo=new uo(2,0,"glTF"),_o=(0,a.k)((0,l.a)(),Math.PI/2),wo=(0,w.a)(),So={SCALAR:1,VEC2:2,VEC3:3,VEC4:4},To={5120:1,5121:1,5122:2,5123:2,5126:4,5125:4};async function Mo(e){return(0,Ri.create)(((t,r)=>{const i=new Blob([e]),o=new FileReader;o.onload=()=>{const e=o.result;t(JSON.parse(e))},o.onerror=e=>{r(e)},o.readAsText(i)}))}const Co={5120:"BYTE",5121:"UNSIGNED_BYTE",5122:"SHORT",5123:"UNSIGNED_SHORT",5125:"UNSIGNED_INT",5126:"FLOAT"};let Oo=0;function Ao(e){const t=e.json;let r=null;return t.nodes.forEach((e=>{const t=e.extras;(0,i.pC)(t)&&(t.ESRI_proxyEllipsoid||t.ESRI_lod)&&(r=t)})),r}function Po(e){return e.extensions&&e.extensions.MSFT_lod&&Array.isArray(e.extensions.MSFT_lod.ids)}function Io(e,t,r){const i=t=>{const i=`${r}_tex_${t&&t.id}${t&&t.name?"_"+t.name:""}`;if(t&&!e.textures.has(i)){const r=function(e,t={}){return{data:e,parameters:{wrap:{s:10497,t:10497,...t.wrap},noUnpackFlip:!0,mipmap:!1,...t}}}(t.data,{wrap:{s:Ro(t.wrapS),t:Ro(t.wrapT)},mipmap:Lo.some((e=>e===t.minFilter)),noUnpackFlip:!0});e.textures.set(i,r)}return i},o=`${r}_mat_${t.id}_${t.name}`;if(!e.materials.has(o)){const r=function(e={}){return{color:[1,1,1],opacity:1,alphaMode:"OPAQUE",alphaCutoff:.5,doubleSided:!1,castShadows:!0,receiveShadows:!0,receiveAmbientOcclustion:!0,textureColor:null,textureNormal:null,textureOcclusion:null,textureEmissive:null,textureMetallicRoughness:null,emissiveFactor:[0,0,0],metallicFactor:1,roughnessFactor:1,colorMixMode:"multiply",...e}}({color:[t.color[0],t.color[1],t.color[2]],opacity:t.color[3],alphaMode:t.alphaMode,alphaCutoff:t.alphaCutoff,doubleSided:t.doubleSided,colorMixMode:t.ESRI_externalColorMixMode,textureColor:t.colorTexture?i(t.colorTexture):void 0,textureNormal:t.normalTexture?i(t.normalTexture):void 0,textureOcclusion:t.occlusionTexture?i(t.occlusionTexture):void 0,textureEmissive:t.emissiveTexture?i(t.emissiveTexture):void 0,textureMetallicRoughness:t.metallicRoughnessTexture?i(t.metallicRoughnessTexture):void 0,emissiveFactor:[t.emissiveFactor[0],t.emissiveFactor[1],t.emissiveFactor[2]],metallicFactor:t.metallicFactor,roughnessFactor:t.roughnessFactor});e.materials.set(o,r)}return o}function Ro(e){if(33071===e||33648===e||10497===e)return e;Fo.error(`Unexpected TextureSampler WrapMode: ${e}`)}const Fo=new class{error(e){throw new Pi.Z("gltf-loader-error",e)}errorUnsupported(e){throw new Pi.Z("gltf-loader-unsupported-feature",e)}errorUnsupportedIf(e,t){e&&this.errorUnsupported(t)}assert(e,t){e||this.error(t)}warn(e){lo.warn(e)}warnUnsupported(e){this.warn("[Unsupported Feature] "+e)}warnUnsupportedIf(e,t){e&&this.warnUnsupported(t)}},Lo=[9987,9985],Bo=["POINTS","LINES","LINE_LOOP","LINE_STRIP","TRIANGLES","TRIANGLE_STRIP","TRIANGLE_FAN"];function zo(e){return"number"==typeof e?function(e){return K(e)}(e):(0,Ai.Uc)(e)||(0,Ai.lq)(e)?new Uint32Array(e):e}var Ho=r(82550);const Do=f.Z.getLogger("esri.views.3d.layers.graphics.objectResourceUtils");function No(e){throw new Pi.Z("",`Request for object resource failed: ${e}`)}function Eo(e){const t=e.params,r=t.topology;let i=!0;switch(t.vertexAttributes||(Do.warn("Geometry must specify vertex attributes"),i=!1),t.topology){case"PerAttributeArray":break;case"Indexed":case null:case void 0:{const e=t.faces;if(e){if(t.vertexAttributes)for(const r in t.vertexAttributes){const t=e[r];t&&t.values?(null!=t.valueType&&"UInt32"!==t.valueType&&(Do.warn(`Unsupported indexed geometry indices type '${t.valueType}', only UInt32 is currently supported`),i=!1),null!=t.valuesPerElement&&1!==t.valuesPerElement&&(Do.warn(`Unsupported indexed geometry values per element '${t.valuesPerElement}', only 1 is currently supported`),i=!1)):(Do.warn(`Indexed geometry does not specify face indices for '${r}' attribute`),i=!1)}}else Do.warn("Indexed geometries must specify faces"),i=!1;break}default:Do.warn(`Unsupported topology '${r}'`),i=!1}e.params.material||(Do.warn("Geometry requires material"),i=!1);const o=e.params.vertexAttributes;for(const e in o)o[e].values||(Do.warn("Geometries with externally defined attributes are not yet supported"),i=!1);return i}function Vo(e){const t=(0,g.cS)();return e.forEach((e=>{const r=e.boundingInfo;(0,g.pp)(t,r.getBBMin()),(0,g.pp)(t,r.getBBMax())})),t}async function Uo(e,t){const r=[];for(const o in e){const n=e[o],a=n.images[0].data;if(!a){Do.warn("Externally referenced texture data is not yet supported");continue}const s=n.encoding+";base64,"+a,c="/textureDefinitions/"+o,l={noUnpackFlip:!0,wrap:{s:10497,t:10497},preMultiplyAlpha:!0},u=(0,i.pC)(t)&&t.disableTextures?(0,Ri.resolve)(null):(0,Bi.t)(s,t);r.push(u.then((e=>({refId:c,image:e,params:l,alphaChannelUsage:"rgba"===n.channels?n.alphaChannelUsage||"transparency":"none"}))))}const o=await(0,Ri.all)(r),n={};for(const e of o)n[e.refId]=e;return n}function Go(e){switch(e){case"mask":return 2;case"maskAndTransparency":return 3;case"none":return 1;case"transparency":default:return 0}}function ko(e){const t=e.params;return{id:1,material:t.material,texture:t.texture,region:t.texture}}function jo(e){const t=new Uint32Array(e);for(let r=0;r<e;r++)t[r]=r;return t}const qo=new uo(1,2,"wosr");function Wo(e,t,r){if(e.count!==t.count)return void h.error("source and destination buffers need to have the same number of elements");const i=e.count,o=r[0],n=r[1],a=r[2],s=r[3],c=r[4],l=r[5],u=r[6],d=r[7],f=r[8],m=e.typedBuffer,p=e.typedBufferStride,v=t.typedBuffer,g=t.typedBufferStride;for(let e=0;e<i;e++){const t=e*p,r=e*g,i=v[r],h=v[r+1],b=v[r+2],x=v[r+3];m[t]=o*i+s*h+u*b,m[t+1]=n*i+c*h+d*b,m[t+2]=a*i+l*h+f*b,m[t+3]=x}}function $o(e,t,r){const i=Math.min(e.count,t.count),o=e.typedBuffer,n=e.typedBufferStride,a=t.typedBuffer,s=t.typedBufferStride;for(let e=0;e<i;e++){const t=e*n,i=e*s;o[t]=r*a[i],o[t+1]=r*a[i+1],o[t+2]=r*a[i+2],o[t+3]=r*a[i+3]}}Object.freeze({__proto__:null,transformMat4:function(e,t,r){if(e.count!==t.count)return void h.error("source and destination buffers need to have the same number of elements");const i=e.count,o=r[0],n=r[1],a=r[2],s=r[3],c=r[4],l=r[5],u=r[6],d=r[7],f=r[8],m=r[9],p=r[10],v=r[11],g=r[12],b=r[13],x=r[14],y=r[15],_=e.typedBuffer,w=e.typedBufferStride,S=t.typedBuffer,T=t.typedBufferStride;for(let e=0;e<i;e++){const t=e*w,r=e*T,i=S[r],h=S[r+1],M=S[r+2],C=S[r+3];_[t]=o*i+c*h+f*M+g*C,_[t+1]=n*i+l*h+m*M+b*C,_[t+2]=a*i+u*h+p*M+x*C,_[t+3]=s*i+d*h+v*M+y*C}},transformMat3:Wo,scale:$o,shiftRight:function(e,t,r){const i=Math.min(e.count,t.count),o=e.typedBuffer,n=e.typedBufferStride,a=t.typedBuffer,s=t.typedBufferStride;for(let e=0;e<i;e++){const t=e*n,i=e*s;o[t]=a[i]>>r,o[t+1]=a[i+1]>>r,o[t+2]=a[i+2]>>r,o[t+3]=a[i+3]>>r}}});async function Xo(e,t){const r=Zo((0,s.pJ)(e));if("wosr"===r.fileType){const e=await(t.cache?t.cache.loadWOSR(r.url,t):async function(e,t){const r=await async function(e,t){const r=(0,i.pC)(t)&&t.streamDataRequester;if(r)return async function(e,t,r){const i=await(0,Qi.q6)(t.request(e,"json",r));return!0===i.ok?i.value:((0,Ri.throwIfAbortError)(i.error),void No(i.error.details.url))}(e,r,t);const o=await(0,Qi.q6)((0,Yi.default)(e,(0,i.Wg)(t)));return!0===o.ok?o.value.data:((0,Ri.throwIfAbortError)(o.error),void No(o.error))}(e,t);return{resource:r,textures:await Uo(r.textureDefinitions,t)}}(r.url,t)),n=function(e,t){const r=[],n=[],a=[],s=[],c=e.resource,l=uo.parse(c.version||"1.0","wosr");qo.validate(l);const u=c.model.name,d=c.model.geometries,f=c.materialDefinitions,h=e.textures;let m=0;const p=new Map;for(let e=0;e<d.length;e++){const c=d[e];if(!Eo(c))continue;const l=ko(c),v=c.params.vertexAttributes,g={};for(const e in v){const t=v[e],r=t.values;g[e]={data:r,size:t.valuesPerElement}}const b={};if("PerAttributeArray"===c.params.topology){const e=jo(g.position.data.length/g.position.size);for(const t in g)b[t]=e}else{const e=c.params.faces;for(const t in e)b[t]=new Uint32Array(e[t].values)}const x=h&&h[l.texture];if(x&&!p.has(l.texture)){const{image:e,params:t}=x,r=new Ki(e,u,t);s.push(r),p.set(l.texture,r)}const y=p.get(l.texture),_=y?y.id:void 0;let w=a[l.material]?a[l.material][l.texture]:null;if(!w){const e=f[l.material.substring(l.material.lastIndexOf("/")+1)].params;1===e.transparency&&(e.transparency=0);const r=x&&x.alphaChannelUsage,n=e.transparency>0||"transparency"===r||"maskAndTransparency"===r,s={ambient:(0,o.d)(e.diffuse),diffuse:(0,o.d)(e.diffuse),opacity:1-(e.transparency||0),transparent:n,textureAlphaMode:x?Go(x.alphaChannelUsage):void 0,textureAlphaCutoff:.33,textureId:_,initTextureTransparent:!0,doubleSided:!0,cullFace:0,colorMixMode:e.externalColorMixMode||"tint",textureAlphaPremultiplied:!0};(0,i.pC)(t)&&t.materialParamsMixin&&(0,Ho.jB)(s,t.materialParamsMixin),w=new vi(s,u),a[l.material]||(a[l.material]={}),a[l.material][l.texture]=w}n.push(w);const S=new le(new ie(g,b),u);m+=b.position?b.position.length:0,r.push(S)}return{name:u,stageResources:{textures:s,materials:n,geometries:r},pivotOffset:c.model.pivotOffset,boundingBox:Vo(r),numberOfVertices:m,lodThreshold:null}}(e,t);return{lods:[n],referenceBoundingBox:n.boundingBox,isEsriSymbolResource:!1,isWosr:!0,remove:e.remove}}const c=await(t.cache?t.cache.loadGLTF(r.url,t):async function(e,t,r={}){const o=await xo.load(e,Fo,t,r),n="gltf_"+Oo++,a={lods:[],materials:new Map,textures:new Map,meta:Ao(o)},s=!(!o.json.asset.extras||"symbolResource"!==o.json.asset.extras.ESRI_type);return await async function(e,t){const r=e.json,i=r.scenes[r.scene||0].nodes,o=i.length>1;for(const e of i){const t=r.nodes[e],i=[n(e,0)];if(Po(t)&&!o){const e=t.extensions.MSFT_lod.ids;i.push(...e.map(((e,t)=>n(e,t+1))))}await(0,Ri.all)(i)}async function n(i,o){const a=r.nodes[i],s=e.getNodeTransform(i);if(Fo.warnUnsupportedIf(null!=a.weights,"Morph targets are not supported."),null!=a.mesh){const e=r.meshes[a.mesh];for(const r of e.primitives)await t(r,s,o,e.name)}for(const e of a.children||[])await n(e,o)}}(o,(async(e,t,s,c)=>{const u=void 0!==e.mode?e.mode:4,d=function(e){switch(e){case 4:case 5:case 6:return e;default:return null}}(u);if((0,i.Wi)(d))return void Fo.warnUnsupported("Unsupported primitive mode ("+Bo[u]+"). Skipping primitive.");if(!o.hasPositions(e))return void Fo.warn("Skipping primitive without POSITION vertex attribute.");const f=await o.getMaterial(e,r),h={transform:(0,l.b)(t),attributes:{position:await o.getPositionData(e,r),normal:null,texCoord0:null,color:null,tangent:null},indices:await o.getIndexData(e,r),primitiveType:d,material:Io(a,f,n)};o.hasNormals(e)&&(h.attributes.normal=await o.getNormalData(e,r)),o.hasTangents(e)&&(h.attributes.tangent=await o.getTangentData(e,r)),o.hasTextureCoordinates(e)&&(h.attributes.texCoord0=await o.getTextureCoordinates(e,r)),o.hasVertexColors(e)&&(h.attributes.color=await o.getVertexColors(e,r));let m=null;(0,i.pC)(a.meta)&&(0,i.pC)(a.meta.ESRI_lod)&&"screenSpaceRadius"===a.meta.ESRI_lod.metric&&(m=a.meta.ESRI_lod.thresholds[s]),a.lods[s]=a.lods[s]||{parts:[],name:c,lodThreshold:m},a.lods[s].parts.push(h)})),{model:a,meta:{isEsriSymbolResource:s,uri:o.uri},customMeta:{}}}(new Ji(t.streamDataRequester),r.url,t)),u=(0,i.U2)(c.model.meta,"ESRI_proxyEllipsoid");c.meta.isEsriSymbolResource&&(0,i.pC)(u)&&-1!==c.meta.uri.indexOf("/RealisticTrees/")&&function(e,t){for(let r=0;r<e.model.lods.length;++r){const s=e.model.lods[r];e.customMeta.esriTreeRendering=!0;for(const c of s.parts){const s=c.attributes.normal;if((0,i.Wi)(s))return;const u=c.attributes.position,f=u.count,h=(0,o.c)(),m=(0,o.c)(),p=(0,o.c)(),v=co(d.mc,f),g=co(d.ct,f),b=(0,a.a)((0,l.a)(),c.transform);for(let i=0;i<f;i++){u.getVec(i,m),s.getVec(i,h),(0,n.i)(m,m,c.transform),(0,n.f)(p,m,t.center),(0,n.C)(p,p,t.radius);const o=p[2],a=(0,n.l)(p),l=Math.min(.45+.55*a*a,1);(0,n.C)(p,p,t.radius),(0,n.i)(p,p,b),(0,n.n)(p,p),r+1!==e.model.lods.length&&e.model.lods.length>1&&(0,n.e)(p,p,h,o>-1?.2:Math.min(-4*o-3.8,1)),g.setVec(i,p),v.set(i,0,255*l),v.set(i,1,255*l),v.set(i,2,255*l),v.set(i,3,255)}c.attributes.normal=g,c.attributes.color=v}}}(c,u);const f=c.meta.isEsriSymbolResource?{usePBR:t.usePBR,isSchematic:!1,treeRendering:c.customMeta.esriTreeRendering,mrrFactors:[0,1,.2]}:{usePBR:!0,isSchematic:!1,mrrFactors:[0,1,.5]},h={...t.materialParamsMixin,treeRendering:c.customMeta.esriTreeRendering};if(null!=r.specifiedLodIndex){const e=Ko(c,f,h,r.specifiedLodIndex);let t=e[0].boundingBox;return 0!==r.specifiedLodIndex&&(t=Ko(c,f,h,0)[0].boundingBox),{lods:e,referenceBoundingBox:t,isEsriSymbolResource:c.meta.isEsriSymbolResource,isWosr:!1,remove:c.remove}}const m=Ko(c,f,h);return{lods:m,referenceBoundingBox:m[0].boundingBox,isEsriSymbolResource:c.meta.isEsriSymbolResource,isWosr:!1,remove:c.remove}}function Zo(e){const t=e.match(/(.*\.(gltf|glb))(\?lod=([0-9]+))?$/);return t?{fileType:"gltf",url:t[1],specifiedLodIndex:null!=t[4]?Number(t[4]):null}:e.match(/(.*\.(json|json\.gz))$/)?{fileType:"wosr",url:e,specifiedLodIndex:null}:{fileType:"unknown",url:e,specifiedLodIndex:null}}function Ko(e,t,r,o){const n=e.model,a=(0,c.a)(),s=new Array,l=new Map,f=new Map;return n.lods.forEach(((e,c)=>{if(void 0!==o&&c!==o)return;let h=0;const b={name:e.name,stageResources:{textures:new Array,materials:new Array,geometries:new Array},lodThreshold:(0,i.pC)(e.lodThreshold)?e.lodThreshold:null,pivotOffset:[0,0,0],numberOfVertices:0,boundingBox:(0,g.cS)()};s.push(b),e.parts.forEach((o=>{const s=o.material+(o.attributes.normal?"_normal":"")+(o.attributes.color?"_color":"")+(o.attributes.texCoord0?"_texCoord0":"")+(o.attributes.tangent?"_tangent":""),c=n.materials.get(o.material),x=(0,i.pC)(o.attributes.texCoord0),y=(0,i.pC)(o.attributes.normal);if(!l.has(s)){if(x){if((0,i.pC)(c.textureColor)&&!f.has(c.textureColor)){const e=n.textures.get(c.textureColor),t={...e.parameters,preMultiplyAlpha:!0};f.set(c.textureColor,new Ki(e.data,c.textureColor,t))}if((0,i.pC)(c.textureNormal)&&!f.has(c.textureNormal)){const e=n.textures.get(c.textureNormal),t={...e.parameters,preMultiplyAlpha:!0};f.set(c.textureNormal,new Ki(e.data,c.textureNormal,t))}if((0,i.pC)(c.textureOcclusion)&&!f.has(c.textureOcclusion)){const e=n.textures.get(c.textureOcclusion),t={...e.parameters,preMultiplyAlpha:!0};f.set(c.textureOcclusion,new Ki(e.data,c.textureOcclusion,t))}if((0,i.pC)(c.textureEmissive)&&!f.has(c.textureEmissive)){const e=n.textures.get(c.textureEmissive),t={...e.parameters,preMultiplyAlpha:!0};f.set(c.textureEmissive,new Ki(e.data,c.textureEmissive,t))}if((0,i.pC)(c.textureMetallicRoughness)&&!f.has(c.textureMetallicRoughness)){const e=n.textures.get(c.textureMetallicRoughness),t={...e.parameters,preMultiplyAlpha:!0};f.set(c.textureMetallicRoughness,new Ki(e.data,c.textureMetallicRoughness,t))}}const e=Math.pow(c.color[0],.47619047619047616),a=Math.pow(c.color[1],.47619047619047616),u=Math.pow(c.color[2],.47619047619047616),d=Math.pow(c.emissiveFactor[0],.47619047619047616),h=Math.pow(c.emissiveFactor[1],.47619047619047616),m=Math.pow(c.emissiveFactor[2],.47619047619047616);l.set(s,new vi({...t,transparent:"BLEND"===c.alphaMode,textureAlphaMode:Yo(c.alphaMode),textureAlphaCutoff:c.alphaCutoff,diffuse:[e,a,u],ambient:[e,a,u],opacity:c.opacity,doubleSided:c.doubleSided,doubleSidedType:"winding-order",cullFace:c.doubleSided?0:2,vertexColors:!!o.attributes.color,vertexTangents:!!o.attributes.tangent,normals:y?"default":"screenDerivative",castShadows:!0,receiveSSAO:!0,textureId:(0,i.pC)(c.textureColor)&&x?f.get(c.textureColor).id:void 0,colorMixMode:c.colorMixMode,normalTextureId:(0,i.pC)(c.textureNormal)&&x?f.get(c.textureNormal).id:void 0,textureAlphaPremultiplied:!0,occlusionTextureId:(0,i.pC)(c.textureOcclusion)&&x?f.get(c.textureOcclusion).id:void 0,emissiveTextureId:(0,i.pC)(c.textureEmissive)&&x?f.get(c.textureEmissive).id:void 0,metallicRoughnessTextureId:(0,i.pC)(c.textureMetallicRoughness)&&x?f.get(c.textureMetallicRoughness).id:void 0,emissiveFactor:[d,h,m],mrrFactors:[c.metallicFactor,c.roughnessFactor,t.mrrFactors[2]],isSchematic:!1,...r},s))}const _=function(e,t){switch(t){case 4:return zo(e);case 5:return function(e){const t="number"==typeof e?e:e.length;if(t<3)return new Uint32Array(0);const r=t-2,i=new Uint32Array(3*r);if("number"==typeof e){let e=0;for(let t=0;t<r;t+=1)t%2==0?(i[e++]=t,i[e++]=t+1,i[e++]=t+2):(i[e++]=t+1,i[e++]=t,i[e++]=t+2)}else{let t=0;for(let o=0;o<r;o+=1)if(o%2==0){const r=e[o],n=e[o+1],a=e[o+2];i[t++]=r,i[t++]=n,i[t++]=a}else{const r=e[o+1],n=e[o],a=e[o+2];i[t++]=r,i[t++]=n,i[t++]=a}}return i}(e);case 6:return function(e){const t="number"==typeof e?e:e.length;if(t<3)return new Uint32Array(0);const r=t-2,i=new Uint32Array(3*r);if("number"==typeof e){let e=0;for(let t=0;t<r;++t)i[e++]=0,i[e++]=t+1,i[e++]=t+2;return i}{const t=e[0];let o=e[1],n=0;for(let a=0;a<r;++a){const r=e[a+2];i[n++]=t,i[n++]=o,i[n++]=r,o=r}return i}}(e)}}(o.indices||o.attributes.position.count,o.primitiveType),w={},S={},T=o.attributes.position.count,M=co(d.ct,T);if(m(M,o.attributes.position,o.transform),S.position={data:M.typedBuffer,size:M.elementCount},w.position=_,(0,i.pC)(o.attributes.normal)){const e=co(d.ct,T);(0,u.n)(a,o.transform),p(e,o.attributes.normal,a),S.normal={data:e.typedBuffer,size:e.elementCount},w.normal=_}if((0,i.pC)(o.attributes.tangent)){const e=co(d.ek,T);(0,u.n)(a,o.transform),Wo(e,o.attributes.tangent,a),S.tangent={data:e.typedBuffer,size:e.elementCount},w.tangent=_}if((0,i.pC)(o.attributes.texCoord0)){const e=co(d.Eu,T);io(e,o.attributes.texCoord0),S.uv0={data:e.typedBuffer,size:e.elementCount},w.uv0=_}if((0,i.pC)(o.attributes.color)){const e=co(d.mc,T);if(4===o.attributes.color.elementCount)o.attributes.color instanceof d.ek?$o(e,o.attributes.color,255):o.attributes.color instanceof d.mc?no(e,o.attributes.color):o.attributes.color instanceof d.v6&&$o(e,o.attributes.color,1/256);else{ao(e,255,255,255,255);const t=new d.ne(e.buffer,0,4);o.attributes.color instanceof d.ct?v(t,o.attributes.color,255):o.attributes.color instanceof d.ne?oo(t,o.attributes.color):o.attributes.color instanceof d.mw&&v(t,o.attributes.color,1/256)}S.color={data:e.typedBuffer,size:e.elementCount},w.color=_}const C=new le(new ie(S,w),`gltf_${e.name}_${h++}`);b.stageResources.geometries.push(C),b.stageResources.materials.push(l.get(s)),x&&((0,i.pC)(c.textureColor)&&b.stageResources.textures.push(f.get(c.textureColor)),(0,i.pC)(c.textureNormal)&&b.stageResources.textures.push(f.get(c.textureNormal)),(0,i.pC)(c.textureOcclusion)&&b.stageResources.textures.push(f.get(c.textureOcclusion)),(0,i.pC)(c.textureEmissive)&&b.stageResources.textures.push(f.get(c.textureEmissive)),(0,i.pC)(c.textureMetallicRoughness)&&b.stageResources.textures.push(f.get(c.textureMetallicRoughness))),b.numberOfVertices+=T;const O=C.boundingInfo;(0,g.pp)(b.boundingBox,O.getBBMin()),(0,g.pp)(b.boundingBox,O.getBBMax())}))})),s}function Yo(e){switch(e){case"BLEND":return 0;case"MASK":return 2;case"OPAQUE":return 1;default:return 0}}},31777:(e,t,r)=>{"use strict";r.d(t,{q:()=>o});var i=r(85461);function o(e,t){0===t.output&&t.receiveShadows?(e.varyings.add("linearDepth","float"),e.vertex.code.add(i.H`
      void forwardLinearDepth() { linearDepth = gl_Position.w; }
    `)):1===t.output||3===t.output?(e.varyings.add("linearDepth","float"),e.vertex.uniforms.add("uCameraNearFar","vec2"),e.vertex.code.add(i.H`
      void forwardLinearDepth() {
        linearDepth = (-position_view().z - uCameraNearFar[0]) / (uCameraNearFar[1] - uCameraNearFar[0]);
      }
    `)):e.vertex.code.add(i.H`
      void forwardLinearDepth() {}
    `)}},7261:(e,t,r)=>{"use strict";r.d(t,{w:()=>o});var i=r(85461);function o(e){e.vertex.code.add(i.H`
    vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
      vec3 camToVert = posWorld - camPosWorld;

      bool isBackface = dot(camToVert, normalWorld) > 0.0;
      if (isBackface) {
        posClip.z += 0.0000003 * posClip.w;
      }
      return posClip;
    }
  `)}},61514:(e,t,r)=>{"use strict";r.d(t,{p:()=>s});var i=r(59472),o=r(77625),n=r(17387),a=r(85461);function s(e,t){if(t.slicePlaneEnabled){e.extensions.add("GL_OES_standard_derivatives"),t.sliceEnabledForVertexPrograms&&(e.vertex.uniforms.add("slicePlaneOrigin","vec3"),e.vertex.uniforms.add("slicePlaneBasis1","vec3"),e.vertex.uniforms.add("slicePlaneBasis2","vec3")),e.fragment.uniforms.add("slicePlaneOrigin","vec3"),e.fragment.uniforms.add("slicePlaneBasis1","vec3"),e.fragment.uniforms.add("slicePlaneBasis2","vec3");const r=a.H`
      struct SliceFactors {
        float front;
        float side0;
        float side1;
        float side2;
        float side3;
      };

      SliceFactors calculateSliceFactors(vec3 pos) {
        vec3 rel = pos - slicePlaneOrigin;

        vec3 slicePlaneNormal = -cross(slicePlaneBasis1, slicePlaneBasis2);
        float slicePlaneW = -dot(slicePlaneNormal, slicePlaneOrigin);

        float basis1Len2 = dot(slicePlaneBasis1, slicePlaneBasis1);
        float basis2Len2 = dot(slicePlaneBasis2, slicePlaneBasis2);

        float basis1Dot = dot(slicePlaneBasis1, rel);
        float basis2Dot = dot(slicePlaneBasis2, rel);

        return SliceFactors(
          dot(slicePlaneNormal, pos) + slicePlaneW,
          -basis1Dot - basis1Len2,
          basis1Dot - basis1Len2,
          -basis2Dot - basis2Len2,
          basis2Dot - basis2Len2
        );
      }

      bool sliceByFactors(SliceFactors factors) {
        return factors.front < 0.0
          && factors.side0 < 0.0
          && factors.side1 < 0.0
          && factors.side2 < 0.0
          && factors.side3 < 0.0;
      }

      bool sliceEnabled() {
        // a slicePlaneBasis1 vector of zero length is used to disable slicing in the shader during draped rendering.
        return dot(slicePlaneBasis1, slicePlaneBasis1) != 0.0;
      }

      bool sliceByPlane(vec3 pos) {
        return sliceEnabled() && sliceByFactors(calculateSliceFactors(pos));
      }

      #define rejectBySlice(_pos_) sliceByPlane(_pos_)
      #define discardBySlice(_pos_) { if (sliceByPlane(_pos_)) discard; }
    `,i=a.H`
      vec4 applySliceHighlight(vec4 color, vec3 pos) {
        SliceFactors factors = calculateSliceFactors(pos);

        if (sliceByFactors(factors)) {
          return color;
        }

        const float HIGHLIGHT_WIDTH = 1.0;
        const vec4 HIGHLIGHT_COLOR = vec4(0.0, 0.0, 0.0, 0.3);

        factors.front /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.front);
        factors.side0 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side0);
        factors.side1 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side1);
        factors.side2 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side2);
        factors.side3 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side3);

        float highlightFactor = (1.0 - step(0.5, factors.front))
          * (1.0 - step(0.5, factors.side0))
          * (1.0 - step(0.5, factors.side1))
          * (1.0 - step(0.5, factors.side2))
          * (1.0 - step(0.5, factors.side3));

        return mix(color, vec4(HIGHLIGHT_COLOR.rgb, color.a), highlightFactor * HIGHLIGHT_COLOR.a);
      }
    `,o=t.sliceHighlightDisabled?a.H`#define highlightSlice(_color_, _pos_) (_color_)`:a.H`
        ${i}
        #define highlightSlice(_color_, _pos_) (sliceEnabled() ? applySliceHighlight(_color_, _pos_) : (_color_))
      `;t.sliceEnabledForVertexPrograms&&e.vertex.code.add(r),e.fragment.code.add(r),e.fragment.code.add(o)}else{const r=a.H`
      #define rejectBySlice(_pos_) false
      #define discardBySlice(_pos_) {}
      #define highlightSlice(_color_, _pos_) (_color_)
    `;t.sliceEnabledForVertexPrograms&&e.vertex.code.add(r),e.fragment.code.add(r)}}!function(e){e.bindUniformsWithOrigin=function(t,r,i){e.bindUniforms(t,r,i.slicePlane,i.origin)},e.bindUniforms=function(e,t,r,a){t.slicePlaneEnabled&&((0,i.pC)(r)?(a?((0,n.f)(c,r.origin,a),e.setUniform3fv("slicePlaneOrigin",c)):e.setUniform3fv("slicePlaneOrigin",r.origin),e.setUniform3fv("slicePlaneBasis1",r.basis1),e.setUniform3fv("slicePlaneBasis2",r.basis2)):(e.setUniform3fv("slicePlaneBasis1",o.Z),e.setUniform3fv("slicePlaneBasis2",o.Z),e.setUniform3fv("slicePlaneOrigin",o.Z)))}}(s||(s={}));const c=(0,o.c)()},62213:(e,t,r)=>{"use strict";r.d(t,{w:()=>o});var i=r(85461);function o(e,t){t.linearDepth?e.vertex.code.add(i.H`
    vec4 transformPositionWithDepth(mat4 proj, mat4 view, vec3 pos, vec2 nearFar, out float depth) {
      vec4 eye = view * vec4(pos, 1.0);
      depth = (-eye.z - nearFar[0]) / (nearFar[1] - nearFar[0]) ;
      return proj * eye;
    }
    `):e.vertex.code.add(i.H`
    vec4 transformPosition(mat4 proj, mat4 view, vec3 pos) {
      // Make sure the order of operations is the same as in transformPositionWithDepth.
      return proj * (view * vec4(pos, 1.0));
    }
    `)}},84530:(e,t,r)=>{"use strict";r.d(t,{f:()=>s});var i=r(77625),o=r(85461),n=r(71061),a=r(25117);function s(e,t){t.instanced&&t.instancedDoublePrecision&&(e.attributes.add("modelOriginHi","vec3"),e.attributes.add("modelOriginLo","vec3"),e.attributes.add("model","mat3"),e.attributes.add("modelNormal","mat3")),t.instancedDoublePrecision&&(e.vertex.include(a.$,t),e.vertex.uniforms.add("viewOriginHi","vec3"),e.vertex.uniforms.add("viewOriginLo","vec3"));const r=[o.H`
    vec3 calculateVPos() {
      ${t.instancedDoublePrecision?"return model * localPosition().xyz;":"return localPosition().xyz;"}
    }
    `,o.H`
    vec3 subtractOrigin(vec3 _pos) {
      ${t.instancedDoublePrecision?o.H`
          vec3 originDelta = dpAdd(viewOriginHi, viewOriginLo, -modelOriginHi, -modelOriginLo);
          return _pos - originDelta;`:"return vpos;"}
    }
    `,o.H`
    vec3 dpNormal(vec4 _normal) {
      ${t.instancedDoublePrecision?"return normalize(modelNormal * _normal.xyz);":"return normalize(_normal.xyz);"}
    }
    `,o.H`
    vec3 dpNormalView(vec4 _normal) {
      ${t.instancedDoublePrecision?"return normalize((viewNormal * vec4(modelNormal * _normal.xyz, 1.0)).xyz);":"return normalize((viewNormal * _normal).xyz);"}
    }
    `,t.vertexTangets?o.H`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${t.instancedDoublePrecision?"return vec4(modelNormal * _tangent.xyz, _tangent.w);":"return _tangent;"}

    }
    `:o.H``];e.vertex.code.add(r[0]),e.vertex.code.add(r[1]),e.vertex.code.add(r[2]),2===t.output&&e.vertex.code.add(r[3]),e.vertex.code.add(r[4])}!function(e){e.Uniforms=class{},e.bindCustomOrigin=function(e,t){(0,n.po)(t,c,l,3),e.setUniform3fv("viewOriginHi",c),e.setUniform3fv("viewOriginLo",l)}}(s||(s={}));const c=(0,i.c)(),l=(0,i.c)()},74681:(e,t,r)=>{"use strict";r.d(t,{O:()=>n});var i=r(85461);function o(e){const t=i.H`
    vec3 decodeNormal(vec2 f) {
      float z = 1.0 - abs(f.x) - abs(f.y);
      return vec3(f + sign(f) * min(z, 0.0), z);
    }
  `;e.fragment.code.add(t),e.vertex.code.add(t)}function n(e,t){0===t.normalType&&(e.attributes.add("normal","vec3"),e.vertex.code.add(i.H`
      vec3 normalModel() {
        return normal;
      }
    `)),1===t.normalType&&(e.include(o),e.attributes.add("normalCompressed","vec2"),e.vertex.code.add(i.H`
      vec3 normalModel() {
        return decodeNormal(normalCompressed);
      }
    `)),3===t.normalType&&(e.extensions.add("GL_OES_standard_derivatives"),e.fragment.code.add(i.H`
      vec3 screenDerivativeNormal(vec3 positionView) {
        return normalize(cross(dFdx(positionView), dFdy(positionView)));
      }
    `))}},6838:(e,t,r)=>{"use strict";r.d(t,{f:()=>o});var i=r(85461);function o(e){e.attributes.add("position","vec3"),e.vertex.code.add(i.H`
    vec3 positionModel() { return position; }
  `)}},31163:(e,t,r)=>{"use strict";r.d(t,{R:()=>n});var i=r(85461);function o(e){e.vertex.code.add(i.H`
    vec4 decodeSymbolColor(vec4 symbolColor, out int colorMixMode) {
      float symbolAlpha = 0.0;

      const float maxTint = 85.0;
      const float maxReplace = 170.0;
      const float scaleAlpha = 3.0;

      if (symbolColor.a > maxReplace) {
        colorMixMode = ${i.H.int(1)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxReplace);
      } else if (symbolColor.a > maxTint) {
        colorMixMode = ${i.H.int(3)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxTint);
      } else if (symbolColor.a > 0.0) {
        colorMixMode = ${i.H.int(4)};
        symbolAlpha = scaleAlpha * symbolColor.a;
      } else {
        colorMixMode = ${i.H.int(1)};
        symbolAlpha = 0.0;
      }

      return vec4(symbolColor.r, symbolColor.g, symbolColor.b, symbolAlpha);
    }
  `)}function n(e,t){t.symbolColor?(e.include(o),e.attributes.add("symbolColor","vec4"),e.varyings.add("colorMixMode","mediump float")):e.fragment.uniforms.add("colorMixMode","int"),t.symbolColor?e.vertex.code.add(i.H`
    int symbolColorMixMode;

    vec4 getSymbolColor() {
      return decodeSymbolColor(symbolColor, symbolColorMixMode) * 0.003921568627451;
    }

    void forwardColorMixMode() {
      colorMixMode = float(symbolColorMixMode) + 0.5;
    }
  `):e.vertex.code.add(i.H`
    vec4 getSymbolColor() { return vec4(1.0); }
    void forwardColorMixMode() {}
    `)}},82094:(e,t,r)=>{"use strict";r.d(t,{D:()=>o});var i=r(85461);function o(e,t){1===t.attributeTextureCoordinates&&(e.attributes.add("uv0","vec2"),e.varyings.add("vuv0","vec2"),e.vertex.code.add(i.H`
      void forwardTextureCoordinates() {
        vuv0 = uv0;
      }
    `)),2===t.attributeTextureCoordinates&&(e.attributes.add("uv0","vec2"),e.varyings.add("vuv0","vec2"),e.attributes.add("uvRegion","vec4"),e.varyings.add("vuvRegion","vec4"),e.vertex.code.add(i.H`
      void forwardTextureCoordinates() {
        vuv0 = uv0;
        vuvRegion = uvRegion;
      }
    `)),0===t.attributeTextureCoordinates&&e.vertex.code.add(i.H`
      void forwardTextureCoordinates() {}
    `)}},11823:(e,t,r)=>{"use strict";r.d(t,{c:()=>o});var i=r(85461);function o(e,t){t.attributeColor?(e.attributes.add("color","vec4"),e.varyings.add("vColor","vec4"),e.vertex.code.add(i.H`
      void forwardVertexColor() { vColor = color; }
    `),e.vertex.code.add(i.H`
      void forwardNormalizedVertexColor() { vColor = color * 0.003921568627451; }
    `)):e.vertex.code.add(i.H`
      void forwardVertexColor() {}
      void forwardNormalizedVertexColor() {}
    `)}},34074:(e,t,r)=>{"use strict";r.d(t,{B:()=>d});var i=r(85461),o=r(74681),n=r(77625),a=r(30663),s=r(12811),c=r(25117),l=r(6838);function u(e,t){e.include(l.f),e.vertex.include(c.$,t),e.varyings.add("vPositionWorldCameraRelative","vec3"),e.varyings.add("vPosition_view","vec3"),e.vertex.uniforms.add("uTransform_WorldFromModel_RS","mat3"),e.vertex.uniforms.add("uTransform_WorldFromModel_TH","vec3"),e.vertex.uniforms.add("uTransform_WorldFromModel_TL","vec3"),e.vertex.uniforms.add("uTransform_WorldFromView_TH","vec3"),e.vertex.uniforms.add("uTransform_WorldFromView_TL","vec3"),e.vertex.uniforms.add("uTransform_ViewFromCameraRelative_RS","mat3"),e.vertex.uniforms.add("uTransform_ProjFromView","mat4"),e.vertex.code.add(i.H`
    // compute position in world space orientation, but relative to the camera position
    vec3 positionWorldCameraRelative() {
      vec3 rotatedModelPosition = uTransform_WorldFromModel_RS * positionModel();

      vec3 transform_CameraRelativeFromModel = dpAdd(
        uTransform_WorldFromModel_TL,
        uTransform_WorldFromModel_TH,
        -uTransform_WorldFromView_TL,
        -uTransform_WorldFromView_TH
      );

      return transform_CameraRelativeFromModel + rotatedModelPosition;
    }

    // position in view space, that is relative to the camera position and orientation
    vec3 position_view() {
      return uTransform_ViewFromCameraRelative_RS * positionWorldCameraRelative();
    }

    // compute gl_Position and forward related varyings to fragment shader
    void forwardPosition() {
      vPositionWorldCameraRelative = positionWorldCameraRelative();
      vPosition_view = position_view();
      gl_Position = uTransform_ProjFromView * vec4(vPosition_view, 1.0);
    }

    vec3 positionWorld() {
      return uTransform_WorldFromView_TL + vPositionWorldCameraRelative;
    }
  `),e.fragment.uniforms.add("uTransform_WorldFromView_TL","vec3"),e.fragment.code.add(i.H`
    vec3 positionWorld() {
      return uTransform_WorldFromView_TL + vPositionWorldCameraRelative;
    }
  `)}function d(e,t){0===t.normalType||1===t.normalType?(e.include(o.O,t),e.varyings.add("vNormalWorld","vec3"),e.varyings.add("vNormalView","vec3"),e.vertex.uniforms.add("uTransformNormal_GlobalFromModel","mat3"),e.vertex.uniforms.add("uTransformNormal_ViewFromGlobal","mat3"),e.vertex.code.add(i.H`
      void forwardNormal() {
        vNormalWorld = uTransformNormal_GlobalFromModel * normalModel();
        vNormalView = uTransformNormal_ViewFromGlobal * vNormalWorld;
      }
    `)):2===t.normalType?(e.include(u,t),e.varyings.add("vNormalWorld","vec3"),e.vertex.code.add(i.H`
    void forwardNormal() {
      vNormalWorld = ${1===t.viewingMode?i.H`normalize(vPositionWorldCameraRelative);`:i.H`vec3(0.0, 0.0, 1.0);`}
    }
    `)):e.vertex.code.add(i.H`
      void forwardNormal() {}
    `)}!function(e){e.ModelTransform=class{constructor(){this.worldFromModel_RS=(0,a.a)(),this.worldFromModel_TH=(0,n.c)(),this.worldFromModel_TL=(0,n.c)()}},e.ViewProjectionTransform=class{constructor(){this.worldFromView_TH=(0,n.c)(),this.worldFromView_TL=(0,n.c)(),this.viewFromCameraRelative_RS=(0,a.a)(),this.projFromView=(0,s.a)()}},e.bindModelTransform=function(e,t){e.setUniformMatrix3fv("uTransform_WorldFromModel_RS",t.worldFromModel_RS),e.setUniform3fv("uTransform_WorldFromModel_TH",t.worldFromModel_TH),e.setUniform3fv("uTransform_WorldFromModel_TL",t.worldFromModel_TL)},e.bindViewProjTransform=function(e,t){e.setUniform3fv("uTransform_WorldFromView_TH",t.worldFromView_TH),e.setUniform3fv("uTransform_WorldFromView_TL",t.worldFromView_TL),e.setUniformMatrix4fv("uTransform_ProjFromView",t.projFromView),e.setUniformMatrix3fv("uTransform_ViewFromCameraRelative_RS",t.viewFromCameraRelative_RS)}}(u||(u={})),function(e){e.bindUniforms=function(e,t){e.setUniformMatrix4fv("viewNormal",t)}}(d||(d={}))},51206:(e,t,r)=>{"use strict";r.d(t,{i:()=>a});var i=r(85461),o=r(82094);function n(e){e.extensions.add("GL_EXT_shader_texture_lod"),e.extensions.add("GL_OES_standard_derivatives"),e.fragment.code.add(i.H`
    #ifndef GL_EXT_shader_texture_lod
      float calcMipMapLevel(const vec2 ddx, const vec2 ddy) {
        float deltaMaxSqr = max(dot(ddx, ddx), dot(ddy, ddy));
        return max(0.0, 0.5 * log2(deltaMaxSqr));
      }
    #endif

    vec4 textureAtlasLookup(sampler2D texture, vec2 textureSize, vec2 textureCoordinates, vec4 atlasRegion) {
      //[umin, vmin, umax, vmax]
      vec2 atlasScale = atlasRegion.zw - atlasRegion.xy;
      vec2 uvAtlas = fract(textureCoordinates) * atlasScale + atlasRegion.xy;

      // calculate derivative of continuous texture coordinate
      // to avoid mipmapping artifacts caused by manual wrapping in shader
      vec2 dUVdx = dFdx(textureCoordinates) * atlasScale;
      vec2 dUVdy = dFdy(textureCoordinates) * atlasScale;

      #ifdef GL_EXT_shader_texture_lod
        return texture2DGradEXT(texture, uvAtlas, dUVdx, dUVdy);
      #else
        // use bias to compensate for difference in automatic vs desired mipmap level
        vec2 dUVdxAuto = dFdx(uvAtlas);
        vec2 dUVdyAuto = dFdy(uvAtlas);
        float mipMapLevel = calcMipMapLevel(dUVdx * textureSize, dUVdy * textureSize);
        float autoMipMapLevel = calcMipMapLevel(dUVdxAuto * textureSize, dUVdyAuto * textureSize);

        return texture2D(texture, uvAtlas, mipMapLevel - autoMipMapLevel);
      #endif
    }
  `)}function a(e,t){e.include(o.D,t),e.fragment.code.add(i.H`
  struct TextureLookupParameter {
    vec2 uv;
    ${t.supportsTextureAtlas?"vec2 size;":""}
  } vtc;
  `),1===t.attributeTextureCoordinates&&e.fragment.code.add(i.H`
      vec4 textureLookup(sampler2D tex, TextureLookupParameter params) {
        return texture2D(tex, params.uv);
      }
    `),2===t.attributeTextureCoordinates&&(e.include(n),e.fragment.code.add(i.H`
    vec4 textureLookup(sampler2D tex, TextureLookupParameter params) {
        return textureAtlasLookup(tex, params.size, params.uv, vuvRegion);
      }
    `))}},17811:(e,t,r)=>{"use strict";r.d(t,{L:()=>a});var i=r(85461),o=r(48775);function n(e){e.vertex.code.add(i.H`
    float screenSizePerspectiveMinSize(float size, vec4 factor) {
      float nonZeroSize = 1.0 - step(size, 0.0);

      return (
        factor.z * (
          1.0 +
          // Multiply by nzs ensures if size is 0, then we ignore proportionally scaled padding
          nonZeroSize *
          2.0 * factor.w / (
            size + (1.0 - nonZeroSize) // Adding 1 - nzs ensures we divide either by size, or by 1
          )
        )
      );
    }
  `),e.vertex.code.add(i.H`
    float screenSizePerspectiveViewAngleDependentFactor(float absCosAngle) {
      return absCosAngle * absCosAngle * absCosAngle;
    }
  `),e.vertex.code.add(i.H`
    vec4 screenSizePerspectiveScaleFactor(float absCosAngle, float distanceToCamera, vec4 params) {
      return vec4(
        min(params.x / (distanceToCamera - params.y), 1.0),
        screenSizePerspectiveViewAngleDependentFactor(absCosAngle),
        params.z,
        params.w
      );
    }
  `),e.vertex.code.add(i.H`
    float applyScreenSizePerspectiveScaleFactorFloat(float size, vec4 factor) {
      return max(mix(size * factor.x, size, factor.y), screenSizePerspectiveMinSize(size, factor));
    }
  `),e.vertex.code.add(i.H`
    float screenSizePerspectiveScaleFloat(float size, float absCosAngle, float distanceToCamera, vec4 params) {
      return applyScreenSizePerspectiveScaleFactorFloat(
        size,
        screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params)
      );
    }
  `),e.vertex.code.add(i.H`
    vec2 applyScreenSizePerspectiveScaleFactorVec2(vec2 size, vec4 factor) {
      return mix(size * clamp(factor.x, screenSizePerspectiveMinSize(size.y, factor) / size.y, 1.0), size, factor.y);
    }
  `),e.vertex.code.add(i.H`
    vec2 screenSizePerspectiveScaleVec2(vec2 size, float absCosAngle, float distanceToCamera, vec4 params) {
      return applyScreenSizePerspectiveScaleFactorVec2(size, screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params));
    }
  `)}function a(e,t){const r=e.vertex.code;t.verticalOffsetEnabled?(e.vertex.uniforms.add("verticalOffset","vec4"),t.screenSizePerspectiveEnabled&&(e.include(n),e.vertex.uniforms.add("screenSizePerspectiveAlignment","vec4")),r.add(i.H`
    vec3 calculateVerticalOffset(vec3 worldPos, vec3 localOrigin) {
      float viewDistance = length((view * vec4(worldPos, 1.0)).xyz);
      ${1===t.viewingMode?i.H`vec3 worldNormal = normalize(worldPos + localOrigin);`:i.H`vec3 worldNormal = vec3(0.0, 0.0, 1.0);`}
      ${t.screenSizePerspectiveEnabled?i.H`
          float cosAngle = dot(worldNormal, normalize(worldPos - camPos));
          float verticalOffsetScreenHeight = screenSizePerspectiveScaleFloat(verticalOffset.x, abs(cosAngle), viewDistance, screenSizePerspectiveAlignment);`:i.H`
          float verticalOffsetScreenHeight = verticalOffset.x;`}
      // Screen sized offset in world space, used for example for line callouts
      float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * viewDistance, verticalOffset.z, verticalOffset.w);
      return worldNormal * worldOffset;
    }

    vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) {
      return worldPos + calculateVerticalOffset(worldPos, localOrigin);
    }
    `)):r.add(i.H`
    vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) { return worldPos; }
    `)}function s(e,t,r,i=c){return i.screenLength=e.screenLength,i.perDistance=Math.tan(.5*t)/(.5*r),i.minWorldLength=e.minWorldLength,i.maxWorldLength=e.maxWorldLength,i}!function(e){e.bindUniforms=function(e,t){if(t.screenSizePerspective){(0,o.bj)(t.screenSizePerspective,e,"screenSizePerspective");const r=t.screenSizePerspectiveAlignment||t.screenSizePerspective;(0,o.bj)(r,e,"screenSizePerspectiveAlignment")}}}(n||(n={})),function(e){e.bindUniforms=function(e,t,r){if(!t.verticalOffset)return;const i=s(t.verticalOffset,r.camera.fovY,r.camera.fullViewport[3]),o=r.camera.pixelRatio||1;e.setUniform4f("verticalOffset",i.screenLength*o,i.perDistance,i.minWorldLength,i.maxWorldLength)}}(a||(a={}));const c={screenLength:0,perDistance:0,minWorldLength:0,maxWorldLength:0}},20829:(e,t,r)=>{"use strict";r.d(t,{s:()=>m});var i=r(85461),o=r(62213),n=r(61514),a=r(72023),s=r(8681),c=r(34658),l=r(61017);function u(e,t){e.fragment.include(l.n),3===t.output?(e.extensions.add("GL_OES_standard_derivatives"),e.fragment.code.add(i.H`
      float _calculateFragDepth(const in float depth) {
        // calc polygon offset
        const float SLOPE_SCALE = 2.0;
        const float BIAS = 2.0 * .000015259;    // 1 / (2^16 - 1)
        float m = max(abs(dFdx(depth)), abs(dFdy(depth)));
        float result = depth + SLOPE_SCALE * m + BIAS;
        return clamp(result, .0, .999999);
      }

      void outputDepth(float _linearDepth) {
        gl_FragColor = float2rgba(_calculateFragDepth(_linearDepth));
      }
    `)):1===t.output&&e.fragment.code.add(i.H`
      void outputDepth(float _linearDepth) {
        gl_FragColor = float2rgba(_linearDepth);
      }
    `)}var d=r(82094),f=r(74681),h=r(34074);function m(e,t){const r=e.vertex.code,l=e.fragment.code;1!==t.output&&3!==t.output||(e.include(o.w,{linearDepth:!0}),e.include(d.D,t),e.include(s.k,t),e.include(u,t),e.include(n.p,t),e.vertex.uniforms.add("nearFar","vec2"),e.varyings.add("depth","float"),t.hasColorTexture&&e.fragment.uniforms.add("tex","sampler2D"),r.add(i.H`
      void main(void) {
        vpos = calculateVPos();
        vpos = subtractOrigin(vpos);
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPositionWithDepth(proj, view, vpos, nearFar, depth);
        forwardTextureCoordinates();
      }
    `),e.include(c.sj,t),l.add(i.H`
      void main(void) {
        discardBySlice(vpos);
        ${t.hasColorTexture?i.H`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}
        outputDepth(depth);
      }
    `)),2===t.output&&(e.include(o.w,{linearDepth:!1}),e.include(f.O,t),e.include(h.B,t),e.include(d.D,t),e.include(s.k,t),t.hasColorTexture&&e.fragment.uniforms.add("tex","sampler2D"),e.vertex.uniforms.add("viewNormal","mat4"),e.varyings.add("vPositionView","vec3"),r.add(i.H`
      void main(void) {
        vpos = calculateVPos();
        vpos = subtractOrigin(vpos);
        ${0===t.normalType?i.H`
        vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));`:""}
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPosition(proj, view, vpos);
        forwardTextureCoordinates();
      }
    `),e.include(n.p,t),e.include(c.sj,t),l.add(i.H`
      void main() {
        discardBySlice(vpos);
        ${t.hasColorTexture?i.H`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}

        ${3===t.normalType?i.H`
            vec3 normal = screenDerivativeNormal(vPositionView);`:i.H`
            vec3 normal = normalize(vNormalWorld);
            if (gl_FrontFacing == false) normal = -normal;`}
        gl_FragColor = vec4(vec3(0.5) + 0.5 * normal, 1.0);
      }
    `)),4===t.output&&(e.include(o.w,{linearDepth:!1}),e.include(d.D,t),e.include(s.k,t),t.hasColorTexture&&e.fragment.uniforms.add("tex","sampler2D"),r.add(i.H`
      void main(void) {
        vpos = calculateVPos();
        vpos = subtractOrigin(vpos);
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPosition(proj, view, vpos);
        forwardTextureCoordinates();
      }
    `),e.include(n.p,t),e.include(c.sj,t),e.include(a.b),l.add(i.H`
      void main() {
        discardBySlice(vpos);
        ${t.hasColorTexture?i.H`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}
        outputHighlight();
      }
    `))}},72023:(e,t,r)=>{"use strict";r.d(t,{b:()=>o});var i=r(85461);function o(e){e.fragment.uniforms.add("depthTex","sampler2D"),e.fragment.uniforms.add("highlightViewportPixelSz","vec4"),e.fragment.code.add(i.H`
    void outputHighlight() {
      vec4 fragCoord = gl_FragCoord;

      float sceneDepth = texture2D(depthTex, (fragCoord.xy - highlightViewportPixelSz.xy) * highlightViewportPixelSz.zw).r;
      if (fragCoord.z > sceneDepth + 5e-7) {
        gl_FragColor = vec4(1.0, 1.0, 0.0, 1.0);
      }
      else {
        gl_FragColor = vec4(1.0, 0.0, 1.0, 1.0);
      }
    }
  `)}!function(e){e.bindOutputHighlight=function(e,t,r){e.bindTexture(r.highlightDepthTexture,5),t.setUniform1i("depthTex",5),t.setUniform4f("highlightViewportPixelSz",0,0,r.inverseViewport[0],r.inverseViewport[1])}}(o||(o={}))},10832:(e,t,r)=>{"use strict";r.d(t,{Q:()=>n});var i=r(85461),o=r(51206);function n(e,t){const r=e.fragment;r.uniforms.add("normalTexture","sampler2D"),r.uniforms.add("normalTextureSize","vec2"),t.vertexTangets?(e.attributes.add("tangent","vec4"),e.varyings.add("vTangent","vec4"),2===t.doubleSidedMode?r.code.add(i.H`
      mat3 computeTangentSpace(vec3 normal) {
        float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;
        vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);
        vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
        return mat3(tangent, bitangent, normal);
      }
    `):r.code.add(i.H`
      mat3 computeTangentSpace(vec3 normal) {
        float tangentHeadedness = vTangent.w;
        vec3 tangent = normalize(vTangent.xyz);
        vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
        return mat3(tangent, bitangent, normal);
      }
    `)):(e.extensions.add("GL_OES_standard_derivatives"),r.code.add(i.H`
    mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {

      vec3 Q1 = dFdx(pos);
      vec3 Q2 = dFdy(pos);

      vec2 stx = dFdx(st);
      vec2 sty = dFdy(st);

      float det = stx.t * sty.s - sty.t * stx.s;

      vec3 T = stx.t * Q2 - sty.t * Q1; // compute tangent
      T = T - normal * dot(normal, T); // orthogonalize tangent
      T *= inversesqrt(max(dot(T,T), 1.e-10)); // "soft" normalize - goes to 0 when T goes to 0
      vec3 B = sign(det) * cross(normal, T); // assume normal is normalized, B has the same lenght as B
      return mat3(T, B, normal); // T and B go to 0 when the tangent space is not well defined by the uv coordinates
    }
  `)),0!==t.attributeTextureCoordinates&&(e.include(o.i,t),r.code.add(i.H`
    vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
      vtc.uv = uv;
      ${t.supportsTextureAtlas?"vtc.size = normalTextureSize;":""}
      vec3 rawNormal = textureLookup(normalTexture, vtc).rgb * 2.0 - 1.0;
      return tangentSpace * rawNormal;
    }
  `))}},72582:(e,t,r)=>{"use strict";r.d(t,{K:()=>o});var i=r(85461);function o(e,t){const r=e.fragment;t.receiveAmbientOcclusion?(r.uniforms.add("ssaoTex","sampler2D"),r.uniforms.add("viewportPixelSz","vec4"),r.code.add(i.H`
      float evaluateAmbientOcclusion() {
        return 1.0 - texture2D(ssaoTex, (gl_FragCoord.xy - viewportPixelSz.xy) * viewportPixelSz.zw).a;
      }

      float evaluateAmbientOcclusionInverse() {
        float ssao = texture2D(ssaoTex, (gl_FragCoord.xy - viewportPixelSz.xy) * viewportPixelSz.zw).a;
        return viewportPixelSz.z < 0.0 ? 1.0 : ssao;
      }
    `)):r.code.add(i.H`
      float evaluateAmbientOcclusion() { return 0.0; } // no occlusion
      float evaluateAmbientOcclusionInverse() { return 1.0; }
    `)}},72884:(e,t,r)=>{"use strict";r.d(t,{X:()=>u});var i=r(85461),o=r(9295),n=r(71613),a=r(87023),s=r(72582);function c(e,t){const r=e.fragment,o=void 0!==t.lightingSphericalHarmonicsOrder?t.lightingSphericalHarmonicsOrder:2;0===o?(r.uniforms.add("lightingAmbientSH0","vec3"),r.code.add(i.H`
      vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
        vec3 ambientLight = 0.282095 * lightingAmbientSH0;
        return ambientLight * (1.0 - ambientOcclusion);
      }
    `)):1===o?(r.uniforms.add("lightingAmbientSH_R","vec4"),r.uniforms.add("lightingAmbientSH_G","vec4"),r.uniforms.add("lightingAmbientSH_B","vec4"),r.code.add(i.H`
      vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
        vec4 sh0 = vec4(
          0.282095,
          0.488603 * normal.x,
          0.488603 * normal.z,
          0.488603 * normal.y
        );
        vec3 ambientLight = vec3(
          dot(lightingAmbientSH_R, sh0),
          dot(lightingAmbientSH_G, sh0),
          dot(lightingAmbientSH_B, sh0)
        );
        return ambientLight * (1.0 - ambientOcclusion);
      }
    `)):2===o&&(r.uniforms.add("lightingAmbientSH0","vec3"),r.uniforms.add("lightingAmbientSH_R1","vec4"),r.uniforms.add("lightingAmbientSH_G1","vec4"),r.uniforms.add("lightingAmbientSH_B1","vec4"),r.uniforms.add("lightingAmbientSH_R2","vec4"),r.uniforms.add("lightingAmbientSH_G2","vec4"),r.uniforms.add("lightingAmbientSH_B2","vec4"),r.code.add(i.H`
      vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
        vec3 ambientLight = 0.282095 * lightingAmbientSH0;

        vec4 sh1 = vec4(
          0.488603 * normal.x,
          0.488603 * normal.z,
          0.488603 * normal.y,
          1.092548 * normal.x * normal.y
        );
        vec4 sh2 = vec4(
          1.092548 * normal.y * normal.z,
          0.315392 * (3.0 * normal.z * normal.z - 1.0),
          1.092548 * normal.x * normal.z,
          0.546274 * (normal.x * normal.x - normal.y * normal.y)
        );
        ambientLight += vec3(
          dot(lightingAmbientSH_R1, sh1),
          dot(lightingAmbientSH_G1, sh1),
          dot(lightingAmbientSH_B1, sh1)
        );
        ambientLight += vec3(
          dot(lightingAmbientSH_R2, sh2),
          dot(lightingAmbientSH_G2, sh2),
          dot(lightingAmbientSH_B2, sh2)
        );
        return ambientLight * (1.0 - ambientOcclusion);
      }
    `),1!==t.pbrMode&&2!==t.pbrMode||r.code.add(i.H`
        const vec3 skyTransmittance = vec3(0.9, 0.9, 1.0);

        vec3 calculateAmbientRadiance(float ambientOcclusion)
        {
          vec3 ambientLight = 1.2 * (0.282095 * lightingAmbientSH0) - 0.2;
          return ambientLight *= (1.0 - ambientOcclusion) * skyTransmittance;
        }
      `))}function l(e){const t=e.fragment;t.uniforms.add("lightingMainDirection","vec3"),t.uniforms.add("lightingMainIntensity","vec3"),t.uniforms.add("lightingFixedFactor","float"),t.code.add(i.H`
    vec3 evaluateMainLighting(vec3 normal_global, float shadowing) {
      float dotVal = clamp(-dot(normal_global, lightingMainDirection), 0.0, 1.0);

      // move lighting towards (1.0, 1.0, 1.0) if requested
      dotVal = mix(dotVal, 1.0, lightingFixedFactor);

      return lightingMainIntensity * ((1.0 - shadowing) * dotVal);
    }
  `)}function u(e,t){const r=e.fragment;e.include(l),e.include(s.K,t),0!==t.pbrMode&&e.include(a.T,t),e.include(c,t),t.receiveShadows&&e.include(n.h,t),r.uniforms.add("lightingGlobalFactor","float"),r.uniforms.add("ambientBoostFactor","float"),e.include(o.e),r.code.add(i.H`
    const float GAMMA_SRGB = 2.1;
    const float INV_GAMMA_SRGB = 0.4761904;
    ${0===t.pbrMode?"":"const vec3 GROUND_REFLECTANCE = vec3(0.2);"}
  `),t.useOldSceneLightInterface?r.code.add(i.H`
    vec3 evaluateSceneLightingExt(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight) {
      // evaluate the main light
      #if defined(TREE_RENDERING)
        // Special case for tree rendering:
        // We shift the Lambert lobe to the back, allowing it to reach part of the hemisphere
        // facing away from the light. The idea is to get an effect where light is transmitted
        // through the tree.
        float minDot = -0.5;
        float dotRange = 1.0 - minDot;
        float dotNormalization = 0.66; // guessed & hand tweaked value, for an exact value we could precompute an integral over the sphere

        float dotVal = dotNormalization * (clamp(-dot(normal, lightingMainDirection), 1.0 - dotRange, 1.0) - minDot) * (1.0 / dotRange);
      #else
        float dotVal = clamp(-dot(normal, lightingMainDirection), 0.0, 1.0);
      #endif

      // move lighting towards (1.0, 1.0, 1.0) if requested
      dotVal = mix(dotVal, 1.0, lightingFixedFactor);

      vec3 mainLight = (1.0 - shadow) * lightingMainIntensity * dotVal;
      vec3 ambientLight = calculateAmbientIrradiance(normal, ssao);

      // inverse gamma correction on the albedo color
      vec3 albedoGammaC = pow(albedo, vec3(GAMMA_SRGB));

      // physically correct BRDF normalizes by PI
      vec3 totalLight = mainLight + ambientLight + additionalLight;
      totalLight = min(totalLight, vec3(PI));
      vec3 outColor = vec3((albedoGammaC / PI) * (totalLight));

      // apply gamma correction to the computed color
      outColor = pow(outColor, vec3(INV_GAMMA_SRGB));

      return outColor;
    }
  `):(1===t.viewingMode?r.code.add(i.H`
      float _oldHeuristicLighting(vec3 vPosWorld) {
        vec3 shadingNormalWorld = normalize(vPosWorld);
        float vndl = -dot(shadingNormalWorld, lightingMainDirection);

        return smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));
      }
    `):r.code.add(i.H`
      float _oldHeuristicLighting(vec3 vPosWorld) {
        float vndl = -dot(vec3(0.0, 0.0, 1.0), lightingMainDirection);
        return smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));
      }
    `),r.code.add(i.H`
      vec3 evaluateAdditionalLighting(float ambientOcclusion, vec3 vPosWorld) {
        float additionalAmbientScale = _oldHeuristicLighting(vPosWorld);
        return (1.0 - ambientOcclusion) * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor * lightingMainIntensity;
      }
    `),0===t.pbrMode||4===t.pbrMode?r.code.add(i.H`
      vec3 evaluateSceneLighting(vec3 normalWorld, vec3 baseColor, float mainLightShadow, float ambientOcclusion, vec3 additionalLight)
      {
        vec3 mainLighting = evaluateMainLighting(normalWorld, mainLightShadow);
        vec3 ambientLighting = calculateAmbientIrradiance(normalWorld, ambientOcclusion);
        // inverse gamma correction on the base color
        vec3 baseColorLinear = pow(baseColor, vec3(GAMMA_SRGB));

        // physically correct BRDF normalizes by PI
        vec3 totalLight = mainLighting + ambientLighting + additionalLight;
        totalLight = min(totalLight, vec3(PI));
        vec3 outColor = vec3((baseColorLinear / PI) * totalLight);

        // apply gamma correction to the computed color
        outColor = pow(outColor, vec3(INV_GAMMA_SRGB));

        return outColor;
      }
      `):1!==t.pbrMode&&2!==t.pbrMode||(r.code.add(i.H`
      const float fillLightIntensity = 0.25;
      const float horizonLightDiffusion = 0.4;
      const float additionalAmbientIrradianceFactor = 0.02;

      vec3 evaluateSceneLightingPBR(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight, vec3 viewDir, vec3 normalGround, vec3 mrr, vec3 _emission, float additionalAmbientIrradiance)
      {
        // Calculate half vector between view and light direction
        vec3 viewDirection = -viewDir;
        vec3 mainLightDirection = -lightingMainDirection;
        vec3 h = normalize(viewDirection + mainLightDirection);

        PBRShadingInfo inputs;
        inputs.NdotL = clamp(dot(normal, mainLightDirection), 0.001, 1.0);
        inputs.NdotV = clamp(abs(dot(normal, viewDirection)), 0.001, 1.0);
        inputs.NdotH = clamp(dot(normal, h), 0.0, 1.0);
        inputs.VdotH = clamp(dot(viewDirection, h), 0.0, 1.0);
        inputs.NdotNG = clamp(dot(normal, normalGround), -1.0, 1.0);
        vec3 reflectedView = normalize(reflect(viewDirection, normal));
        inputs.RdotNG = clamp(dot(reflectedView, normalGround), -1.0, 1.0);

        inputs.albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
        inputs.ssao = ssao;

        inputs.metalness = mrr[0];
        inputs.roughness = clamp(mrr[1] * mrr[1], 0.001, 0.99);
      `),r.code.add(i.H`
        inputs.f0 = (0.16 * mrr[2] * mrr[2]) * (1.0 - inputs.metalness) + inputs.albedoLinear * inputs.metalness;
        inputs.f90 = vec3(clamp(dot(inputs.f0, vec3(50.0 * 0.33)), 0.0, 1.0)); // more accurate then using  f90 = 1.0
        inputs.diffuseColor = inputs.albedoLinear * (vec3(1.0) - inputs.f0) * (1.0 - inputs.metalness);
      `),r.code.add(i.H`
        vec3 ambientDir = vec3(5.0 * normalGround[1] - normalGround[0] * normalGround[2], - 5.0 * normalGround[0] - normalGround[2] * normalGround[1], normalGround[1] * normalGround[1] + normalGround[0] * normalGround[0]);
        ambientDir = ambientDir != vec3(0.0)? normalize(ambientDir) : normalize(vec3(5.0, -1.0, 0.0));

        inputs.NdotAmbDir = abs(dot(normal, ambientDir));

        // Calculate the irradiance components: sun, fill lights and the sky.
        vec3 mainLightIrradianceComponent  = inputs.NdotL * (1.0 - shadow) * lightingMainIntensity;
        vec3 fillLightsIrradianceComponent = inputs.NdotAmbDir * lightingMainIntensity * fillLightIntensity;
        // calculateAmbientIrradiance for localView and additionalLight for gloabalView
        vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(normal, ssao) + additionalLight;

        // Assemble the overall irradiance of the sky that illuminates the surface
        inputs.skyIrradianceToSurface    = ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
        // Assemble the overall irradiance of the ground that illuminates the surface. for this we use the simple model that changes only the sky irradiance by the groundReflectance
        inputs.groundIrradianceToSurface = GROUND_REFLECTANCE * ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
      `),r.code.add(i.H`
        vec3 horizonRingDir = inputs.RdotNG * normalGround - reflectedView;
        vec3 horizonRingH = normalize(viewDirection + horizonRingDir);
        inputs.NdotH_Horizon = dot(normal, horizonRingH);

        vec3 mainLightRadianceComponent  = normalDistribution(inputs.NdotH, inputs.roughness) * lightingMainIntensity * (1.0 - shadow);
        vec3 horizonLightRadianceComponent = normalDistribution(inputs.NdotH_Horizon, min(inputs.roughness + horizonLightDiffusion, 1.0)) * lightingMainIntensity * fillLightIntensity;
        vec3 ambientLightRadianceComponent = calculateAmbientRadiance(ssao) + additionalLight; // calculateAmbientRadiance for localView and additionalLight for gloabalView

        // Assemble the overall radiance of the sky that illuminates the surface
        inputs.skyRadianceToSurface    =  ambientLightRadianceComponent + mainLightRadianceComponent + horizonLightRadianceComponent;
        // Assemble the overall radiance of the ground that illuminates the surface. for this we use the simple model that changes only the sky radince by the groundReflectance
        inputs.groundRadianceToSurface = GROUND_REFLECTANCE * (ambientLightRadianceComponent + horizonLightRadianceComponent) + mainLightRadianceComponent;

        // Calculate average ambient radiance - this is used int the gamut mapping part to deduce the black level that is soft compressed
        inputs.averageAmbientRadiance = ambientLightIrradianceComponent[1] * (1.0 + GROUND_REFLECTANCE[1]);
        `),r.code.add(i.H`
        vec3 reflectedColorComponent = evaluateEnvironmentIllumination(inputs);
        vec3 additionalMaterialReflectanceComponent = inputs.albedoLinear * additionalAmbientIrradiance;
        vec3 emissionComponent = pow(_emission, vec3(GAMMA_SRGB));
        vec3 outColorLinear = reflectedColorComponent + additionalMaterialReflectanceComponent + emissionComponent;
        ${2===t.pbrMode?i.H`vec3 outColor = pow(max(vec3(0.0), outColorLinear - 0.005 * inputs.averageAmbientRadiance), vec3(INV_GAMMA_SRGB));`:i.H`vec3 outColor = pow(blackLevelSoftCompression(outColorLinear, inputs), vec3(INV_GAMMA_SRGB));`}
        return outColor;
      }
    `)))}},52369:(e,t,r)=>{"use strict";r.d(t,{k:()=>o});var i=r(85461);function o(e,t){const r=e.fragment;r.code.add(i.H`
    struct ShadingNormalParameters {
      vec3 normalView;
      vec3 viewDirection;
    } shadingParams;
    `),1===t.doubleSidedMode?r.code.add(i.H`
      vec3 shadingNormal(ShadingNormalParameters params) {
        return dot(params.normalView, params.viewDirection) > 0.0 ? normalize(-params.normalView) : normalize(params.normalView);
      }
    `):2===t.doubleSidedMode?r.code.add(i.H`
      vec3 shadingNormal(ShadingNormalParameters params) {
        return gl_FrontFacing ? normalize(params.normalView) : normalize(-params.normalView);
      }
    `):r.code.add(i.H`
      vec3 shadingNormal(ShadingNormalParameters params) {
        return normalize(params.normalView);
      }
    `)}},87023:(e,t,r)=>{"use strict";r.d(t,{T:()=>a});var i=r(85461),o=r(9295);function n(e){const t=e.fragment.code;t.add(i.H`
    vec3 evaluateDiffuseIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float NdotNG)
    {
      return ((1.0 - NdotNG) * ambientGround + (1.0 + NdotNG) * ambientSky) * 0.5;
    }
    `),t.add(i.H`
    float integratedRadiance(float cosTheta2, float roughness)
    {
      return (cosTheta2 - 1.0) / (cosTheta2 * (1.0 - roughness * roughness) - 1.0);
    }
    `),t.add(i.H`
    vec3 evaluateSpecularIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float RdotNG, float roughness)
    {
      float cosTheta2 = 1.0 - RdotNG * RdotNG;
      float intRadTheta = integratedRadiance(cosTheta2, roughness);

      // Calculate the integrated directional radiance of the ground and the sky
      float ground = RdotNG < 0.0 ? 1.0 - intRadTheta : 1.0 + intRadTheta;
      float sky = 2.0 - ground;
      return (ground * ambientGround + sky * ambientSky) * 0.5;
    }
    `)}function a(e,t){const r=e.fragment.code;e.include(o.e),3===t.pbrMode||4===t.pbrMode?(r.add(i.H`
    struct PBRShadingWater
    {
        float NdotL;   // cos angle between normal and light direction
        float NdotV;   // cos angle between normal and view direction
        float NdotH;   // cos angle between normal and half vector
        float VdotH;   // cos angle between view direction and half vector
        float LdotH;   // cos angle between light direction and half vector
        float VdotN;   // cos angle between view direction and normal vector
    };

    float dtrExponent = ${t.useCustomDTRExponentForWater?"2.2":"2.0"};
    `),r.add(i.H`
    vec3 fresnelReflection(float angle, vec3 f0, float f90) {
      return f0 + (f90 - f0) * pow(1.0 - angle, 5.0);
    }
    `),r.add(i.H`
    float normalDistributionWater(float NdotH, float roughness)
    {
      float r2 = roughness * roughness;
      float NdotH2 = NdotH * NdotH;
      float denom = pow((NdotH2 * (r2 - 1.0) + 1.0), dtrExponent) * PI;
      return r2 / denom;
    }
    `),r.add(i.H`
    float geometricOcclusionKelemen(float LoH)
    {
        return 0.25 / (LoH * LoH);
    }
    `),r.add(i.H`
    vec3 brdfSpecularWater(in PBRShadingWater props, float roughness, vec3 F0, float F0Max)
    {
      vec3  F = fresnelReflection(props.VdotH, F0, F0Max);
      float dSun = normalDistributionWater(props.NdotH, roughness);
      float V = geometricOcclusionKelemen(props.LdotH);

      float diffusionSunHaze = mix(roughness + 0.045, roughness + 0.385, 1.0 - props.VdotH);
      float strengthSunHaze  = 1.2;
      float dSunHaze = normalDistributionWater(props.NdotH, diffusionSunHaze)*strengthSunHaze;

      return ((dSun + dSunHaze) * V) * F;
    }

    vec3 tonemapACES(const vec3 x) {
      return (x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14);
    }
    `)):1!==t.pbrMode&&2!==t.pbrMode||(e.include(n),r.add(i.H`
    struct PBRShadingInfo
    {
        float NdotL;                  // cos angle between normal and light direction
        float NdotV;                  // cos angle between normal and view direction
        float NdotH;                  // cos angle between normal and half vector
        float VdotH;                  // cos angle between view direction and half vector
        float LdotH;                  // cos angle between view light direction and half vector
        float NdotNG;                 // cos angle between normal and normal of the ground
        float RdotNG;                 // cos angle between view direction reflected of the normal and normal of the ground
        float NdotAmbDir;             // cos angle between view direction and the fill light in ambient illumination
        float NdotH_Horizon;          // cos angle between normal and half vector defined with horizon illumination
        vec3 skyRadianceToSurface;         // integrated radiance of the sky based on the surface roughness (used for specular reflection)
        vec3 groundRadianceToSurface;      // integrated radiance of the ground based on the surface roughness (used for specular reflection)
        vec3 skyIrradianceToSurface;       // irradiance of the sky (used for diffuse reflection)
        vec3 groundIrradianceToSurface;    // irradiance of the ground (used for diffuse reflection)

        float averageAmbientRadiance;      // average ambient radiance used to deduce black level in gamut mapping
        float ssao;                   // ssao coefficient
        vec3 albedoLinear;            // linear color of the albedo
        vec3 f0;                      // fresnel value at normal incident light
        vec3 f90;                     // fresnel value at 90o of incident light

        vec3 diffuseColor;            // diffuse color of the material used in environment illumination
        float metalness;              // metalness of the material
        float roughness;              // roughness of the material
    };
    `),r.add(i.H`
    float normalDistribution(float NdotH, float roughness)
    {
        float a = NdotH * roughness;
        float b = roughness / (1.0 - NdotH * NdotH + a * a);
        return b * b * INV_PI;
    }
    `),r.add(i.H`
    const vec4 c0 = vec4(-1.0, -0.0275, -0.572,  0.022);
    const vec4 c1 = vec4( 1.0,  0.0425,  1.040, -0.040);
    const vec2 c2 = vec2(-1.04, 1.04);

    vec2 prefilteredDFGAnalytical(float roughness, float NdotV) {
        vec4 r = roughness * c0 + c1;
        float a004 = min(r.x * r.x, exp2(-9.28 * NdotV)) * r.x + r.y;
        return c2 * a004 + r.zw;
    }
    `),r.add(i.H`
    vec3 evaluateEnvironmentIllumination(PBRShadingInfo inputs) {
      vec3 indirectDiffuse = evaluateDiffuseIlluminationHemisphere(inputs.groundIrradianceToSurface, inputs.skyIrradianceToSurface, inputs.NdotNG);
      vec3 indirectSpecular = evaluateSpecularIlluminationHemisphere(inputs.groundRadianceToSurface, inputs.skyRadianceToSurface, inputs.RdotNG, inputs.roughness);

      // From diffuse illumination calculate reflected color
      vec3 diffuseComponent = inputs.diffuseColor * indirectDiffuse * INV_PI;

      // From specular illumination calculate reflected color
      vec2 dfg = prefilteredDFGAnalytical(inputs.roughness, inputs.NdotV);
      vec3 specularColor = inputs.f0 * dfg.x + inputs.f90 * dfg.y;
      vec3 specularComponent = specularColor * indirectSpecular;

      return (diffuseComponent + specularComponent);
    }
    `),r.add(i.H`
    float gamutMapChanel(float x, vec2 p){
      return (x < p.x) ? mix(0.0, p.y, x/p.x) : mix(p.y, 1.0, (x - p.x) / (1.0 - p.x) );
    }`),r.add(i.H`
    vec3 blackLevelSoftCompression(vec3 inColor, PBRShadingInfo inputs){
      vec3 outColor;
      vec2 p = vec2(0.02 * (inputs.averageAmbientRadiance), 0.0075 * (inputs.averageAmbientRadiance));
      outColor.x = gamutMapChanel(inColor.x, p) ;
      outColor.y = gamutMapChanel(inColor.y, p) ;
      outColor.z = gamutMapChanel(inColor.z, p) ;
      return outColor;
    }
    `))}},44624:(e,t,r)=>{"use strict";r.d(t,{j:()=>a});var i=r(85461),o=r(69236),n=r(51206);(0,o.f)(0,.6,.2);function a(e,t){const r=e.fragment,o=t.hasMetalnessAndRoughnessTexture||t.hasEmissionTexture||t.hasOcclusionTexture;1===t.pbrMode&&o&&e.include(n.i,t),2!==t.pbrMode?(0===t.pbrMode&&r.code.add(i.H`
      float getBakedOcclusion() { return 1.0; }
  `),1===t.pbrMode&&(r.uniforms.add("emissionFactor","vec3"),r.uniforms.add("mrrFactors","vec3"),r.code.add(i.H`
      vec3 mrr;
      vec3 emission;
      float occlusion;
    `),t.hasMetalnessAndRoughnessTexture&&(r.uniforms.add("texMetallicRoughness","sampler2D"),t.supportsTextureAtlas&&r.uniforms.add("texMetallicRoughnessSize","vec2"),r.code.add(i.H`
      void applyMetallnessAndRoughness(TextureLookupParameter params) {
        vec3 metallicRoughness = textureLookup(texMetallicRoughness, params).rgb;

        mrr[0] *= metallicRoughness.b;
        mrr[1] *= metallicRoughness.g;
      }`)),t.hasEmissionTexture&&(r.uniforms.add("texEmission","sampler2D"),t.supportsTextureAtlas&&r.uniforms.add("texEmissionSize","vec2"),r.code.add(i.H`
      void applyEmission(TextureLookupParameter params) {
        emission *= textureLookup(texEmission, params).rgb;
      }`)),t.hasOcclusionTexture?(r.uniforms.add("texOcclusion","sampler2D"),t.supportsTextureAtlas&&r.uniforms.add("texOcclusionSize","vec2"),r.code.add(i.H`
      void applyOcclusion(TextureLookupParameter params) {
        occlusion *= textureLookup(texOcclusion, params).r;
      }

      float getBakedOcclusion() {
        return occlusion;
      }
      `)):r.code.add(i.H`
      float getBakedOcclusion() { return 1.0; }
      `),r.code.add(i.H`
    void applyPBRFactors() {
      mrr = mrrFactors;
      emission = emissionFactor;
      occlusion = 1.0;
      ${o?"vtc.uv = vuv0;":""}
      ${t.hasMetalnessAndRoughnessTexture?t.supportsTextureAtlas?"vtc.size = texMetallicRoughnessSize; applyMetallnessAndRoughness(vtc);":"applyMetallnessAndRoughness(vtc);":""}
      ${t.hasEmissionTexture?t.supportsTextureAtlas?"vtc.size = texEmissionSize; applyEmission(vtc);":"applyEmission(vtc);":""}
      ${t.hasOcclusionTexture?t.supportsTextureAtlas?"vtc.size = texOcclusionSize; applyOcclusion(vtc);":"applyOcclusion(vtc);":""}
    }
  `))):r.code.add(i.H`
      const vec3 mrr = vec3(0.0, 0.6, 0.2);
      const vec3 emission = vec3(0.0);
      float occlusion = 1.0;

      void applyPBRFactors() {}

      float getBakedOcclusion() { return 1.0; }
    `)}!function(e){e.bindUniforms=function(e,t,r=!1){r||(e.setUniform3fv("mrrFactors",t.mrrFactors),e.setUniform3fv("emissionFactor",t.emissiveFactor))}}(a||(a={}))},9295:(e,t,r)=>{"use strict";r.d(t,{e:()=>o});var i=r(85461);function o(e){e.vertex.code.add(i.H`
    const float PI = 3.141592653589793;
  `),e.fragment.code.add(i.H`
    const float PI = 3.141592653589793;
    const float LIGHT_NORMALIZATION = 1.0 / PI;
    const float INV_PI = 0.3183098861837907;
    const float HALF_PI = 1.570796326794897;
    `)}},71613:(e,t,r)=>{"use strict";r.d(t,{h:()=>n});var i=r(85461),o=r(61017);function n(e){e.fragment.include(o.n),e.fragment.uniforms.add("depthTex","sampler2D"),e.fragment.uniforms.add("shadowMapNum","int"),e.fragment.uniforms.add("shadowMapDistance","vec4"),e.fragment.uniforms.add("shadowMapMatrix","mat4",4),e.fragment.uniforms.add("depthHalfPixelSz","float"),e.fragment.code.add(i.H`
    float readShadowMap(const in vec3 _vpos, float _linearDepth) {
      float halfPixelSize = depthHalfPixelSz;
      vec4 distance = shadowMapDistance;
      float depth = _linearDepth;

      //choose correct cascade
      int i = depth < distance[1] ? 0 : depth < distance[2] ? 1 : depth < distance[3] ? 2 : 3;

      if (i >= shadowMapNum) { return 0.0; }

      mat4 mat = i == 0 ? shadowMapMatrix[0] : i == 1 ? shadowMapMatrix[1] : i == 2 ? shadowMapMatrix[2] : shadowMapMatrix[3];

      vec4 lv = mat * vec4(_vpos, 1.0);
      lv.xy /= lv.w;

      // vertex completely outside? -> no shadow
      vec3 lvpos = 0.5 * lv.xyz + vec3(0.5);
      if (lvpos.z >= 1.0) { return 0.0; }
      if (lvpos.x < 0.0 || lvpos.x > 1.0 || lvpos.y < 0.0 || lvpos.y > 1.0) { return 0.0; }

      // calc coord in cascade texture
      vec2 uv = vec2(float(i - 2 * (i / 2)) * 0.5, float(i / 2) * 0.5) + 0.5 * lvpos.xy;

      float texSize = 0.5 / halfPixelSize;

      // filter, offset by half pixels
      vec2 st = fract((vec2(halfPixelSize) + uv) * texSize);

      float s00 = rgba2float(texture2D(depthTex, uv + vec2(-halfPixelSize, -halfPixelSize))) < lvpos.z ? 1.0 : 0.0;
      float s10 = rgba2float(texture2D(depthTex, uv + vec2(halfPixelSize, -halfPixelSize))) < lvpos.z ? 1.0 : 0.0;
      float s11 = rgba2float(texture2D(depthTex, uv + vec2(halfPixelSize, halfPixelSize))) < lvpos.z ? 1.0 : 0.0;
      float s01 = rgba2float(texture2D(depthTex, uv + vec2(-halfPixelSize, halfPixelSize))) < lvpos.z ? 1.0 : 0.0;

      return mix(mix(s00, s10, st.x), mix(s01, s11, st.x), st.y);
    }
  `)}!function(e){e.bindUniforms=function(e,t,r){t.shadowMappingEnabled&&(t.shadowMap.bind(e,r),t.shadowMap.bindView(e,t.origin))},e.bindViewCustomOrigin=function(e,t,r){t.shadowMappingEnabled&&t.shadowMap.bindView(e,r)},e.bindView=function(e,t){t.shadowMappingEnabled&&t.shadowMap.bindView(e,t.origin)}}(n||(n={}))},8681:(e,t,r)=>{"use strict";r.d(t,{k:()=>o});var i=r(85461);function o(e,t){t.vvInstancingEnabled&&(t.vvSize||t.vvColor)&&e.attributes.add("instanceFeatureAttribute","vec4"),t.vvSize?(e.vertex.uniforms.add("vvSizeMinSize","vec3"),e.vertex.uniforms.add("vvSizeMaxSize","vec3"),e.vertex.uniforms.add("vvSizeOffset","vec3"),e.vertex.uniforms.add("vvSizeFactor","vec3"),e.vertex.uniforms.add("vvSymbolRotationMatrix","mat3"),e.vertex.uniforms.add("vvSymbolAnchor","vec3"),e.vertex.code.add(i.H`
      vec3 vvScale(vec4 _featureAttribute) {
        return clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize);
      }

      vec4 vvTransformPosition(vec3 position, vec4 _featureAttribute) {
        return vec4(vvSymbolRotationMatrix * ( vvScale(_featureAttribute) * (position + vvSymbolAnchor)), 1.0);
      }
    `),e.vertex.code.add(i.H`
      const float eps = 1.192092896e-07;
      vec4 vvTransformNormal(vec3 _normal, vec4 _featureAttribute) {
        vec3 vvScale = clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize + eps, vvSizeMaxSize);
        return vec4(vvSymbolRotationMatrix * _normal / vvScale, 1.0);
      }

      ${t.vvInstancingEnabled?i.H`
      vec4 vvLocalNormal(vec3 _normal) {
        return vvTransformNormal(_normal, instanceFeatureAttribute);
      }

      vec4 localPosition() {
        return vvTransformPosition(position, instanceFeatureAttribute);
      }`:""}
    `)):e.vertex.code.add(i.H`
      vec4 localPosition() { return vec4(position, 1.0); }

      vec4 vvLocalNormal(vec3 _normal) { return vec4(_normal, 1.0); }
    `),t.vvColor?(e.vertex.defines.addInt("VV_COLOR_N",8),e.vertex.code.add(i.H`
      uniform float vvColorValues[VV_COLOR_N];
      uniform vec4 vvColorColors[VV_COLOR_N];

      vec4 vvGetColor(vec4 featureAttribute, float values[VV_COLOR_N], vec4 colors[VV_COLOR_N]) {
        float value = featureAttribute.y;
        if (value <= values[0]) {
          return colors[0];
        }

        for (int i = 1; i < VV_COLOR_N; ++i) {
          if (values[i] >= value) {
            float f = (value - values[i-1]) / (values[i] - values[i-1]);
            return mix(colors[i-1], colors[i], f);
          }
        }
        return colors[VV_COLOR_N - 1];
      }

      ${t.vvInstancingEnabled?i.H`
      vec4 vvColor() {
        return vvGetColor(instanceFeatureAttribute, vvColorValues, vvColorColors);
      }`:""}
    `)):e.vertex.code.add(i.H`
      vec4 vvColor() { return vec4(1.0); }
    `)}!function(e){function t(e,t){t.vvSizeEnabled&&(e.setUniform3fv("vvSizeMinSize",t.vvSizeMinSize),e.setUniform3fv("vvSizeMaxSize",t.vvSizeMaxSize),e.setUniform3fv("vvSizeOffset",t.vvSizeOffset),e.setUniform3fv("vvSizeFactor",t.vvSizeFactor)),t.vvColorEnabled&&(e.setUniform1fv("vvColorValues",t.vvColorValues),e.setUniform4fv("vvColorColors",t.vvColorColors))}e.bindUniforms=t,e.bindUniformsWithOpacity=function(e,r){t(e,r),r.vvOpacityEnabled&&(e.setUniform1fv("vvOpacityValues",r.vvOpacityValues),e.setUniform1fv("vvOpacityOpacities",r.vvOpacityOpacities))},e.bindUniformsForSymbols=function(e,r){t(e,r),r.vvSizeEnabled&&(e.setUniform3fv("vvSymbolAnchor",r.vvSymbolAnchor),e.setUniformMatrix3fv("vvSymbolRotationMatrix",r.vvSymbolRotationMatrix))}}(o||(o={}))},34658:(e,t,r)=>{"use strict";r.d(t,{sj:()=>a,F:()=>o,bf:()=>n});var i=r(85461);const o=.1,n=.001;function a(e,t){const r=e.fragment;switch(t.alphaDiscardMode){case 0:r.code.add(i.H`
        #define discardOrAdjustAlpha(color) { if (color.a < ${i.H.float(.001)}) { discard; } }
      `);break;case 1:r.code.add(i.H`
        void discardOrAdjustAlpha(inout vec4 color) {
          color.a = 1.0;
        }
      `);break;case 2:r.uniforms.add("textureAlphaCutoff","float"),r.code.add(i.H`
        #define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } else { color.a = 1.0; } }
      `);break;case 3:e.fragment.uniforms.add("textureAlphaCutoff","float"),e.fragment.code.add(i.H`
        #define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } }
      `)}}},25117:(e,t,r)=>{"use strict";r.d(t,{$:()=>v,I:()=>g});var i=r(95830),o=r(85461),n=r(59472),a=(r(33655),r(77625)),s=r(51007),c=r(56469),l=r(69595),u=r(74038),d=r(71061),f=r(84570);r(89930);class h{constructor(e){this.context=e,this._doublePrecisionRequiresObfuscation=null}get doublePrecisionRequiresObfuscation(){if((0,n.Wi)(this._doublePrecisionRequiresObfuscation)){const e=p(this.context,!1),t=p(this.context,!0);this._doublePrecisionRequiresObfuscation=0!==e&&(0===t||e/t>5)}return this._doublePrecisionRequiresObfuscation}}let m=null;function p(e,t){const r=new f.Z(e,{colorTarget:0,depthStencilTarget:0},{target:3553,wrapMode:33071,pixelFormat:6408,dataType:5121,samplingMode:9728,width:1,height:1}),i=l.Z.createVertex(e,35044,new Uint16Array([0,0,1,0,0,1,1,1])),o=new u.Z(e,{a_pos:0},{geometry:[{name:"a_pos",count:2,type:5123,offset:0,stride:4,normalized:!1}]},{geometry:i}),n=(0,a.f)(5633261.287538229,2626832.878767164,1434988.0495278358),h=(0,a.f)(5633271.46742708,2626873.6381334523,1434963.231608387),m=function(r,i){const o=new s.Z(e,`\n\n  precision highp float;\n\n  attribute vec2 a_pos;\n\n  uniform vec3 u_highA;\n  uniform vec3 u_lowA;\n  uniform vec3 u_highB;\n  uniform vec3 u_lowB;\n\n  varying vec4 v_color;\n\n  ${t?"#define DOUBLE_PRECISION_REQUIRES_OBFUSCATION":""}\n\n  #ifdef DOUBLE_PRECISION_REQUIRES_OBFUSCATION\n\n  vec3 dpPlusFrc(vec3 a, vec3 b) {\n    return mix(a, a + b, vec3(notEqual(b, vec3(0))));\n  }\n\n  vec3 dpMinusFrc(vec3 a, vec3 b) {\n    return mix(vec3(0), a - b, vec3(notEqual(a, b)));\n  }\n\n  vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {\n    vec3 t1 = dpPlusFrc(hiA, hiB);\n    vec3 e = dpMinusFrc(t1, hiA);\n    vec3 t2 = dpMinusFrc(hiB, e) + dpMinusFrc(hiA, dpMinusFrc(t1, e)) + loA + loB;\n    return t1 + t2;\n  }\n\n  #else\n\n  vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {\n    vec3 t1 = hiA + hiB;\n    vec3 e = t1 - hiA;\n    vec3 t2 = ((hiB - e) + (hiA - (t1 - e))) + loA + loB;\n    return t1 + t2;\n  }\n\n  #endif\n\n  const float MAX_RGBA_FLOAT =\n    255.0 / 256.0 +\n    255.0 / 256.0 / 256.0 +\n    255.0 / 256.0 / 256.0 / 256.0 +\n    255.0 / 256.0 / 256.0 / 256.0 / 256.0;\n\n  const vec4 FIXED_POINT_FACTORS = vec4(1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0);\n\n  vec4 float2rgba(const float value) {\n    // Make sure value is in the domain we can represent\n    float valueInValidDomain = clamp(value, 0.0, MAX_RGBA_FLOAT);\n\n    // Decompose value in 32bit fixed point parts represented as\n    // uint8 rgba components. Decomposition uses the fractional part after multiplying\n    // by a power of 256 (this removes the bits that are represented in the previous\n    // component) and then converts the fractional part to 8bits.\n    vec4 fixedPointU8 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS) * 256.0);\n\n    // Convert uint8 values (from 0 to 255) to floating point representation for\n    // the shader\n    const float toU8AsFloat = 1.0 / 255.0;\n\n    return fixedPointU8 * toU8AsFloat;\n  }\n\n  void main() {\n    vec3 val = dpAdd(u_highA, u_lowA, -u_highB, -u_lowB);\n\n    v_color = float2rgba(val.z / 25.0);\n\n    gl_Position = vec4(a_pos * 2.0 - 1.0, 0.0, 1.0);\n  }\n  `,"\n  precision highp float;\n\n  varying vec4 v_color;\n\n  void main() {\n    gl_FragColor = v_color;\n  }\n  ",{a_pos:0}),n=new Float32Array(6);(0,d.LF)(r,n,3);const a=new Float32Array(6);return(0,d.LF)(i,a,3),e.bindProgram(o),o.setUniform3f("u_highA",n[0],n[2],n[4]),o.setUniform3f("u_lowA",n[1],n[3],n[5]),o.setUniform3f("u_highB",a[0],a[2],a[4]),o.setUniform3f("u_lowB",a[1],a[3],a[5]),o}(n,h),p=e.getBoundFramebufferObject(),{x:v,y:g,width:b,height:x}=e.getViewport();e.bindFramebuffer(r),e.setViewport(0,0,1,1),e.bindVAO(o),e.drawArrays(5,0,4);const y=new Uint8Array(4);r.readPixels(0,0,1,1,6408,5121,y),m.dispose(),o.dispose(!1),i.dispose(),r.dispose(),e.setViewport(v,g,b,x),e.bindFramebuffer(p);const _=(n[2]-h[2])/25,w=(0,c.vP)(y);return Math.abs(_-w)}function v({code:e},t){t.doublePrecisionRequiresObfuscation?e.add(o.H`
      vec3 dpPlusFrc(vec3 a, vec3 b) {
        return mix(a, a + b, vec3(notEqual(b, vec3(0))));
      }

      vec3 dpMinusFrc(vec3 a, vec3 b) {
        return mix(vec3(0), a - b, vec3(notEqual(a, b)));
      }

      // based on https://www.thasler.com/blog/blog/glsl-part2-emu
      vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
        vec3 t1 = dpPlusFrc(hiA, hiB);
        vec3 e = dpMinusFrc(t1, hiA);
        vec3 t2 = dpMinusFrc(hiB, e) + dpMinusFrc(hiA, dpMinusFrc(t1, e)) + loA + loB;
        return t1 + t2;
      }
    `):e.add(o.H`
      vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
        vec3 t1 = hiA + hiB;
        vec3 e = t1 - hiA;
        vec3 t2 = ((hiB - e) + (hiA - (t1 - e))) + loA + loB;
        return t1 + t2;
      }
    `)}function g(e){return!!(0,i.Z)("force-double-precision-obfuscation")||function(e){return((0,n.Wi)(m)||m.context!==e)&&(m=new h(e)),m}(e).doublePrecisionRequiresObfuscation}},62734:(e,t,r)=>{"use strict";r.d(t,{a:()=>o});r(95830);var i=r(85461);function o(e,t){i.H`
  /*
  *  ${t.name}
  *  ${0===t.output?"RenderOutput: Color":1===t.output?"RenderOutput: Depth":3===t.output?"RenderOutput: Shadow":2===t.output?"RenderOutput: Normal":4===t.output?"RenderOutput: Highlight":""}
  */
  `}},50230:(e,t,r)=>{"use strict";r.d(t,{y:()=>n});var i=r(85461);function o(e){e.code.add(i.H`
    vec4 premultiplyAlpha(vec4 v) {
      return vec4(v.rgb * v.a, v.a);
    }

    // Note: the min in the last line has been added to fix an instability in chrome.
    // See https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/23911
    // With proper floating point handling, the value could never be >1.
    vec3 rgb2hsv(vec3 c) {
      vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
      vec4 p = c.g < c.b ? vec4(c.bg, K.wz) : vec4(c.gb, K.xy);
      vec4 q = c.r < p.x ? vec4(p.xyw, c.r) : vec4(c.r, p.yzx);

      float d = q.x - min(q.w, q.y);
      float e = 1.0e-10;
      return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), min(d / (q.x + e), 1.0), q.x);
    }

    vec3 hsv2rgb(vec3 c) {
      vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
      vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
      return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
    }

    float rgb2v(vec3 c) {
      return max(c.x, max(c.y, c.z));
    }
  `)}function n(e){e.include(o),e.code.add(i.H`
    vec3 mixExternalColor(vec3 internalColor, vec3 textureColor, vec3 externalColor, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      vec3 internalMixed = internalColor * textureColor;
      vec3 allMixed = internalMixed * externalColor;

      if (mode == ${i.H.int(1)}) {
        return allMixed;
      }
      else if (mode == ${i.H.int(2)}) {
        return internalMixed;
      }
      else if (mode == ${i.H.int(3)}) {
        return externalColor;
      }
      else {
        // tint (or something invalid)
        float vIn = rgb2v(internalMixed);
        vec3 hsvTint = rgb2hsv(externalColor);
        vec3 hsvOut = vec3(hsvTint.x, hsvTint.y, vIn * hsvTint.z);
        return hsv2rgb(hsvOut);
      }
    }

    float mixExternalOpacity(float internalOpacity, float textureOpacity, float externalOpacity, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      float internalMixed = internalOpacity * textureOpacity;
      float allMixed = internalMixed * externalOpacity;

      if (mode == ${i.H.int(2)}) {
        return internalMixed;
      }
      else if (mode == ${i.H.int(3)}) {
        return externalOpacity;
      }
      else {
        // multiply or tint (or something invalid)
        return allMixed;
      }
    }
  `)}},61017:(e,t,r)=>{"use strict";r.d(t,{n:()=>o});var i=r(85461);function o(e){e.code.add(i.H`
    // This is the maximum float value representable as 32bit fixed point,
    // it is rgba2float(vec4(1)) inlined.
    const float MAX_RGBA_FLOAT =
      255.0 / 256.0 +
      255.0 / 256.0 / 256.0 +
      255.0 / 256.0 / 256.0 / 256.0 +
      255.0 / 256.0 / 256.0 / 256.0 / 256.0;

    // Factors to convert to fixed point, i.e. factors (256^0, 256^1, 256^2, 256^3)
    const vec4 FIXED_POINT_FACTORS = vec4(1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0);

    vec4 float2rgba(const float value) {
      // Make sure value is in the domain we can represent
      float valueInValidDomain = clamp(value, 0.0, MAX_RGBA_FLOAT);

      // Decompose value in 32bit fixed point parts represented as
      // uint8 rgba components. Decomposition uses the fractional part after multiplying
      // by a power of 256 (this removes the bits that are represented in the previous
      // component) and then converts the fractional part to 8bits.
      vec4 fixedPointU8 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS) * 256.0);

      // Convert uint8 values (from 0 to 255) to floating point representation for
      // the shader
      const float toU8AsFloat = 1.0 / 255.0;

      return fixedPointU8 * toU8AsFloat;
    }

    // Factors to convert rgba back to float
    const vec4 RGBA_2_FLOAT_FACTORS = vec4(
      255.0 / (256.0),
      255.0 / (256.0 * 256.0),
      255.0 / (256.0 * 256.0 * 256.0),
      255.0 / (256.0 * 256.0 * 256.0 * 256.0)
    );

    float rgba2float(vec4 rgba) {
      // Convert components from 0->1 back to 0->255 and then
      // add the components together with their corresponding
      // fixed point factors, i.e. (256^1, 256^2, 256^3, 256^4)
      return dot(rgba, RGBA_2_FLOAT_FACTORS);
    }
  `)}},51219:(e,t,r)=>{"use strict";r.d(t,{kG:()=>n});const i=r(36544).Z.getLogger("esri.views.3d.webgl-engine.core.shaderModules.shaderBuilder");class o{constructor(){this.includedModules=new Map}include(e,t){this.includedModules.has(e)?this.includedModules.get(e)!==t&&i.error("Trying to include shader module multiple times with different sets of options."):(this.includedModules.set(e,t),e(this.builder,t))}}class n extends o{constructor(){super(...arguments),this.vertex=new c,this.fragment=new c,this.attributes=new l,this.varyings=new u,this.extensions=new d,this.defines=new f}get builder(){return this}generateSource(e){const t=this.extensions.generateSource(e),r=this.attributes.generateSource(e),i=this.varyings.generateSource(),o="vertex"===e?this.vertex:this.fragment,n=o.uniforms.generateSource(),a=o.code.generateSource(),s="vertex"===e?m:h,c=this.defines.generateSource().concat(o.defines.generateSource());return`\n${t.join("\n")}\n\n${c.join("\n")}\n\n${s}\n\n${n.join("\n")}\n\n${r.join("\n")}\n\n${i.join("\n")}\n\n${a.join("\n")}`}}class a{constructor(){this._entries=new Array,this._set=new Set}add(e,t,r){const i=`${e}_${t}_${r}`;return this._set.has(i)||(this._entries.push([e,t,r]),this._set.add(i)),this}generateSource(){return this._entries.map((e=>{return`uniform ${e[1]} ${e[0]}${t=e[2],t?`[${t}]`:""};`;var t}))}}class s{constructor(){this._entries=new Array}add(e){this._entries.push(e)}generateSource(){return this._entries}}class c extends o{constructor(){super(...arguments),this.uniforms=new a,this.code=new s,this.defines=new f}get builder(){return this}}class l{constructor(){this._entries=new Array}add(e,t){this._entries.push([e,t])}generateSource(e){return"fragment"===e?[]:this._entries.map((e=>`attribute ${e[1]} ${e[0]};`))}}class u{constructor(){this._entries=new Array}add(e,t){this._entries.push([e,t])}generateSource(){return this._entries.map((e=>`varying ${e[1]} ${e[0]};`))}}class d{constructor(){this._entries=new Set}add(e){this._entries.add(e)}generateSource(e){const t="vertex"===e?d.ALLOWLIST_VERTEX:d.ALLOWLIST_FRAGMENT;return Array.from(this._entries).filter((e=>t.includes(e))).map((e=>`#extension ${e} : enable`))}}d.ALLOWLIST_FRAGMENT=["GL_EXT_shader_texture_lod","GL_OES_standard_derivatives"],d.ALLOWLIST_VERTEX=[];class f{constructor(){this._entries=new Map}addInt(e,t){const r=t%1==0?t.toFixed(0):t.toString();this._entries.set(e,r)}addFloat(e,t){const r=t%1==0?t.toFixed(1):t.toString();this._entries.set(e,r)}generateSource(){return Array.from(this._entries,(([e,t])=>`#define ${e} ${t}`))}}const h="#ifdef GL_FRAGMENT_PRECISION_HIGH\n  precision highp float;\n  precision highp sampler2D;\n#else\n  precision mediump float;\n  precision mediump sampler2D;\n#endif",m="precision highp float;\nprecision highp sampler2D;"},85461:(e,t,r)=>{"use strict";function i(e,...t){let r="";for(let i=0;i<t.length;i++)r+=e[i]+t[i];return r+=e[e.length-1],r}r.d(t,{H:()=>i}),function(e){e.int=function(e){return Math.round(e).toString()},e.float=function(e){return e.toPrecision(8)}}(i||(i={}))},56469:(e,t,r)=>{"use strict";r.d(t,{Xt:()=>n,hu:()=>a,kV:()=>s,vP:()=>c});r(33655),r(77625),r(67128),r(55735);var i=r(38256);r(14286),r(34353);(0,i.a)();class o{constructor(e){this.message=e}toString(){return`AssertException: ${this.message}`}}const n={POSITION:"position",NORMAL:"normal",UV0:"uv0",UVMAPSPACE:"uvMapSpace",MEANVERTEXPOSITION:"meanVertexPosition",AUXPOS1:"auxpos1",AUXPOS2:"auxpos2",BOUND1:"bound1",BOUND2:"bound2",BOUND3:"bound3",COLOR:"color",SYMBOLCOLOR:"symbolColor",SIZE:"size",TANGENT:"tangent"};function a(e,t){if(!e){t=t||"assert";const e=new Error(t);throw e.stack&&console.log(e.stack),new o(t)}}function s(e){return e[function(e){for(const t in e)return t}(e)]}function c(e,t=0){let r=0;for(let i=0;i<4;i++)r+=e[t+i]*l[i];return r}const l=[1/256,1/65536,1/16777216,1/4294967296];c(new Uint8ClampedArray([255,255,255,255]))},71061:(e,t,r)=>{"use strict";function i(e,t,r){for(let i=0;i<r;++i)t[2*i]=e[i],t[2*i+1]=e[i]-t[2*i]}function o(e,t,r,o){for(let s=0;s<o;++s)n[0]=e[s],i(n,a,1),t[s]=a[0],r[s]=a[1]}r.d(t,{LF:()=>i,po:()=>o});const n=new Float64Array(1),a=new Float32Array(2)},48775:(e,t,r)=>{"use strict";r.d(t,{bj:()=>O,FZ:()=>R,Uf:()=>A,Bw:()=>g,LO:()=>P,Hx:()=>C});var i=r(59472),o=r(33655),n=r(77625),a=r(17387),s=r(69996),c=r(56469),l=r(49366);function u(e,t,r){const i=r.parameters,o=r.paddingPixelsOverride;return m.scale=Math.min(i.divisor/(t-i.offset),1),m.factor=function(e){return Math.abs(e*e*e)}(e),m.minPixelSize=i.minPixelSize,m.paddingPixels=o,m}function d(e,t){return 0===e?t.minPixelSize:t.minPixelSize*(1+2*t.paddingPixels/e)}function f(e,t){return Math.max((0,o.t7)(e*t.scale,e,t.factor),d(e,t))}function h(e,t,r,i){return f(e,u(t,r,i))}(0,o.Vl)(10),(0,o.Vl)(12),(0,o.Vl)(70),(0,o.Vl)(40);const m={scale:0,factor:0,minPixelSize:0,paddingPixels:0},p=(0,s.Ue)(),v=c.Xt;function g(e,t,r,i,o,n,a){const s=(0,l.PD)(t),u=r.tolerance;if(!s)if(e.boundingInfo)(0,c.hu)("triangle"===e.data.primitiveType),x(e.boundingInfo,i,o,u,n,a);else{const t=e.getIndices(v.POSITION),r=e.getAttribute(v.POSITION);w(i,o,0,t.length/3,t,r,void 0,n,a)}}const b=(0,n.c)();function x(e,t,r,o,n,c){const l=function(e,t,r){return(0,a.s)(r,1/(t[0]-e[0]),1/(t[1]-e[1]),1/(t[2]-e[2]))}(t,r,b);if((0,s.op)(p,e.getBBMin()),(0,s.Tn)(p,e.getBBMax()),(0,i.pC)(n)&&n.applyToAabb(p),function(e,t,r,i){return function(e,t,r,i,o){const n=(e[0]-i-t[0])*r[0],a=(e[3]+i-t[0])*r[0];let s=Math.min(n,a),c=Math.max(n,a);const l=(e[1]-i-t[1])*r[1],u=(e[4]+i-t[1])*r[1];if(c=Math.min(c,Math.max(l,u)),c<0)return!1;if(s=Math.max(s,Math.min(l,u)),s>c)return!1;const d=(e[2]-i-t[2])*r[2],f=(e[5]+i-t[2])*r[2];return c=Math.min(c,Math.max(d,f)),!(c<0)&&(s=Math.max(s,Math.min(d,f)),!(s>c)&&s<o)}(e,t,r,i,1/0)}(p,t,l,o)){const i=e.getPrimitiveIndices(),a=e.getIndices(),s=e.getPosition(),l=i?i.length:a.length/3;if(l>F){const i=e.getChildren();if(void 0!==i){for(let e=0;e<8;++e)void 0!==i[e]&&x(i[e],t,r,o,n,c);return}}w(t,r,0,l,a,s,i,n,c)}}const y=2**-52,_=(0,n.c)();function w(e,t,r,o,n,a,s,c,l){if(s)return function(e,t,r,o,n,a,s,c,l){const{data:u,offsetIdx:d,strideIdx:f}=a,h=e[0],m=e[1],p=e[2],v=t[0]-h,g=t[1]-m,b=t[2]-p;for(let e=r;e<o;++e){const t=s[e];let r=3*t,o=d+f*n[r++],a=u[o++],x=u[o++],w=u[o];o=d+f*n[r++];let S=u[o++],T=u[o++],C=u[o];o=d+f*n[r];let O=u[o++],A=u[o++],P=u[o];(0,i.pC)(c)&&([a,x,w]=c.applyToVertex(a,x,w,e),[S,T,C]=c.applyToVertex(S,T,C,e),[O,A,P]=c.applyToVertex(O,A,P,e));const I=S-a,R=T-x,F=C-w,L=O-a,B=A-x,z=P-w,H=g*z-B*b,D=b*L-z*v,N=v*B-L*g,E=I*H+R*D+F*N;if(Math.abs(E)<=y)continue;const V=h-a,U=m-x,G=p-w,k=V*H+U*D+G*N;if(E>0){if(k<0||k>E)continue}else if(k>0||k<E)continue;const j=U*F-R*G,q=G*I-F*V,W=V*R-I*U,$=v*j+g*q+b*W;if(E>0){if($<0||k+$>E)continue}else if($>0||k+$<E)continue;const X=(L*j+B*q+z*W)/E;X>=0&&l(X,M(I,R,F,L,B,z,_),t)}}(e,t,r,o,n,a,s,c,l);const{data:u,offsetIdx:d,strideIdx:f}=a,h=e[0],m=e[1],p=e[2],v=t[0]-h,g=t[1]-m,b=t[2]-p;for(let e=r,t=3*r;e<o;++e){let r=d+f*n[t++],o=u[r++],a=u[r++],s=u[r];r=d+f*n[t++];let x=u[r++],w=u[r++],S=u[r];r=d+f*n[t++];let T=u[r++],C=u[r++],O=u[r];(0,i.pC)(c)&&([o,a,s]=c.applyToVertex(o,a,s,e),[x,w,S]=c.applyToVertex(x,w,S,e),[T,C,O]=c.applyToVertex(T,C,O,e));const A=x-o,P=w-a,I=S-s,R=T-o,F=C-a,L=O-s,B=g*L-F*b,z=b*R-L*v,H=v*F-R*g,D=A*B+P*z+I*H;if(Math.abs(D)<=y)continue;const N=h-o,E=m-a,V=p-s,U=N*B+E*z+V*H;if(D>0){if(U<0||U>D)continue}else if(U>0||U<D)continue;const G=E*I-P*V,k=V*A-I*N,j=N*P-A*E,q=v*G+g*k+b*j;if(D>0){if(q<0||U+q>D)continue}else if(q>0||U+q<D)continue;const W=(R*G+F*k+L*j)/D;W>=0&&l(W,M(A,P,I,R,F,L,_),e)}}const S=(0,n.c)(),T=(0,n.c)();function M(e,t,r,i,o,n,s){return(0,a.s)(S,e,t,r),(0,a.s)(T,i,o,n),(0,a.c)(s,S,T),(0,a.n)(s,s),s}function C(e,t,r,i,n){let a=(r.screenLength||0)*e.pixelRatio;n&&(a=h(a,i,t,n));const s=a*Math.tan(.5*e.fovY)/(.5*e.fullHeight);return(0,o.YU)(s*t,r.minWorldLength||0,null!=r.maxWorldLength?r.maxWorldLength:1/0)}function O(e,t,r){if(!e)return;const i=e.parameters,o=e.paddingPixelsOverride;t.setUniform4f(r,i.divisor,i.offset,i.minPixelSize,o)}function A(e,t){const r=t?A(t):{};for(const t in e){let i=e[t];i&&i.forEach&&(i=I(i)),null==i&&t in r||(r[t]=i)}return r}function P(e,t){let r=!1;for(const i in t){const o=t[i];void 0!==o&&(r=!0,Array.isArray(o)?e[i]=o.slice():e[i]=o)}return r}function I(e){const t=[];return e.forEach((e=>t.push(e))),t}const R={multiply:1,ignore:2,replace:3,tint:4},F=1e3},49366:(e,t,r)=>{"use strict";r.d(t,{lr:()=>n,PD:()=>s,U_:()=>a});var i=r(59472),o=(r(67128),r(12811));r(56469),r(71061);function n(e,t){return(0,i.Wi)(e)&&(e=[]),e.push(t),e}function a(e,t){if((0,i.Wi)(e))return e;const r=e.filter((e=>e!==t));return 0===r.length?null:r}function s(e){return!!(0,i.pC)(e)&&!e.visible}new Float64Array(3),new Float32Array(6),(0,o.a)()}}]);
//# sourceMappingURL=8152.js.map