(self.webpackChunkinspection_scheduler=self.webpackChunkinspection_scheduler||[]).push([[4199],{30663:(e,t,n)=>{"use strict";function r(){return[1,0,0,0,1,0,0,0,1]}function o(e,t){return new Float64Array(e,t,9)}n.d(t,{a:()=>r,c:()=>o});Object.freeze({__proto__:null,create:r,clone:function(e){return[e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8]]},fromValues:function(e,t,n,r,o,i,s,l,a){return[e,t,n,r,o,i,s,l,a]},createView:o})},2847:(e,t,n)=>{"use strict";n.d(t,{c:()=>p,g:()=>c});var r=n(77625),o=n(60418),i=n(17387),s=n(30663),l=n(32232),a=n(34353);function u(e,t,n){n*=.5;const r=Math.sin(n);return e[0]=r*t[0],e[1]=r*t[1],e[2]=r*t[2],e[3]=Math.cos(n),e}function c(e,t){const n=2*Math.acos(t[3]),r=Math.sin(n/2);return r>o.E?(e[0]=t[0]/r,e[1]=t[1]/r,e[2]=t[2]/r):(e[0]=1,e[1]=0,e[2]=0),n}function f(e,t,n){const r=t[0],o=t[1],i=t[2],s=t[3],l=n[0],a=n[1],u=n[2],c=n[3];return e[0]=r*c+s*l+o*u-i*a,e[1]=o*c+s*a+i*l-r*u,e[2]=i*c+s*u+r*a-o*l,e[3]=s*c-r*l-o*a-i*u,e}function d(e,t,n,r){const i=t[0],s=t[1],l=t[2],a=t[3];let u,c,f,d,p,h=n[0],b=n[1],y=n[2],w=n[3];return c=i*h+s*b+l*y+a*w,c<0&&(c=-c,h=-h,b=-b,y=-y,w=-w),1-c>o.E?(u=Math.acos(c),f=Math.sin(u),d=Math.sin((1-r)*u)/f,p=Math.sin(r*u)/f):(d=1-r,p=r),e[0]=d*i+p*h,e[1]=d*s+p*b,e[2]=d*l+p*y,e[3]=d*a+p*w,e}function p(e,t){return e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e[3]=t[3],e}function h(e,t){const n=t[0]+t[4]+t[8];let r;if(n>0)r=Math.sqrt(n+1),e[3]=.5*r,r=.5/r,e[0]=(t[5]-t[7])*r,e[1]=(t[6]-t[2])*r,e[2]=(t[1]-t[3])*r;else{let n=0;t[4]>t[0]&&(n=1),t[8]>t[3*n+n]&&(n=2);const o=(n+1)%3,i=(n+2)%3;r=Math.sqrt(t[3*n+n]-t[3*o+o]-t[3*i+i]+1),e[n]=.5*r,r=.5/r,e[3]=(t[3*o+i]-t[3*i+o])*r,e[o]=(t[3*o+n]+t[3*n+o])*r,e[i]=(t[3*i+n]+t[3*n+i])*r}return e}const b=a.c,y=a.s,w=a.a,g=f,m=a.b,C=a.d,v=a.l,M=a.e,_=M,T=a.f,A=T,U=a.n,I=a.g,Z=a.h;const S=(0,r.c)(),j=(0,r.f)(1,0,0),x=(0,r.f)(0,1,0);const V=(0,l.a)(),z=(0,l.a)();const O=(0,s.a)();Object.freeze({__proto__:null,identity:function(e){return e[0]=0,e[1]=0,e[2]=0,e[3]=1,e},setAxisAngle:u,getAxisAngle:c,multiply:f,rotateX:function(e,t,n){n*=.5;const r=t[0],o=t[1],i=t[2],s=t[3],l=Math.sin(n),a=Math.cos(n);return e[0]=r*a+s*l,e[1]=o*a+i*l,e[2]=i*a-o*l,e[3]=s*a-r*l,e},rotateY:function(e,t,n){n*=.5;const r=t[0],o=t[1],i=t[2],s=t[3],l=Math.sin(n),a=Math.cos(n);return e[0]=r*a-i*l,e[1]=o*a+s*l,e[2]=i*a+r*l,e[3]=s*a-o*l,e},rotateZ:function(e,t,n){n*=.5;const r=t[0],o=t[1],i=t[2],s=t[3],l=Math.sin(n),a=Math.cos(n);return e[0]=r*a+o*l,e[1]=o*a-r*l,e[2]=i*a+s*l,e[3]=s*a-i*l,e},calculateW:function(e,t){const n=t[0],r=t[1],o=t[2];return e[0]=n,e[1]=r,e[2]=o,e[3]=Math.sqrt(Math.abs(1-n*n-r*r-o*o)),e},slerp:d,random:function(e){const t=(0,o.R)(),n=(0,o.R)(),r=(0,o.R)(),i=Math.sqrt(1-t),s=Math.sqrt(t);return e[0]=i*Math.sin(2*Math.PI*n),e[1]=i*Math.cos(2*Math.PI*n),e[2]=s*Math.sin(2*Math.PI*r),e[3]=s*Math.cos(2*Math.PI*r),e},invert:function(e,t){const n=t[0],r=t[1],o=t[2],i=t[3],s=n*n+r*r+o*o+i*i,l=s?1/s:0;return e[0]=-n*l,e[1]=-r*l,e[2]=-o*l,e[3]=i*l,e},conjugate:p,fromMat3:h,fromEuler:function(e,t,n,r){const o=.5*Math.PI/180;t*=o,n*=o,r*=o;const i=Math.sin(t),s=Math.cos(t),l=Math.sin(n),a=Math.cos(n),u=Math.sin(r),c=Math.cos(r);return e[0]=i*a*c-s*l*u,e[1]=s*l*c+i*a*u,e[2]=s*a*u-i*l*c,e[3]=s*a*c+i*l*u,e},str:function(e){return"quat("+e[0]+", "+e[1]+", "+e[2]+", "+e[3]+")"},copy:b,set:y,add:w,mul:g,scale:m,dot:C,lerp:v,length:M,len:_,squaredLength:T,sqrLen:A,normalize:U,exactEquals:I,equals:Z,rotationTo:function(e,t,n){const r=(0,i.d)(t,n);return r<-.999999?((0,i.c)(S,j,t),(0,i.j)(S)<1e-6&&(0,i.c)(S,x,t),(0,i.n)(S,S),u(e,S,Math.PI),e):r>.999999?(e[0]=0,e[1]=0,e[2]=0,e[3]=1,e):((0,i.c)(S,t,n),e[0]=S[0],e[1]=S[1],e[2]=S[2],e[3]=1+r,U(e,e))},sqlerp:function(e,t,n,r,o,i){return d(V,t,o,i),d(z,n,r,i),d(e,V,z,2*i*(1-i)),e},setAxes:function(e,t,n,r){const o=O;return o[0]=n[0],o[3]=n[1],o[6]=n[2],o[1]=r[0],o[4]=r[1],o[7]=r[2],o[2]=-t[0],o[5]=-t[1],o[8]=-t[2],U(e,h(e,o))}})},32232:(e,t,n)=>{"use strict";function r(){return[0,0,0,1]}function o(e,t){return new Float64Array(e,t,4)}n.d(t,{a:()=>r,c:()=>o});Object.freeze({__proto__:null,create:r,clone:function(e){return[e[0],e[1],e[2],e[3]]},fromValues:function(e,t,n,r){return[e,t,n,r]},createView:o,IDENTITY:[0,0,0,1]})},69236:(e,t,n)=>{"use strict";function r(){return new Float32Array(3)}function o(e,t,n){const r=new Float32Array(3);return r[0]=e,r[1]=t,r[2]=n,r}function i(){return r()}function s(){return o(1,1,1)}function l(){return o(1,0,0)}function a(){return o(0,1,0)}function u(){return o(0,0,1)}n.d(t,{c:()=>r,f:()=>o});const c=i(),f=s(),d=l(),p=a(),h=u();Object.freeze({__proto__:null,create:r,clone:function(e){const t=new Float32Array(3);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t},fromValues:o,createView:function(e,t){return new Float32Array(e,t,3)},zeros:i,ones:s,unitX:l,unitY:a,unitZ:u,ZEROS:c,ONES:f,UNIT_X:d,UNIT_Y:p,UNIT_Z:h})},34353:(e,t,n)=>{"use strict";n.d(t,{a:()=>s,b:()=>c,c:()=>o,d:()=>y,e:()=>p,f:()=>h,g:()=>m,h:()=>C,l:()=>w,n:()=>b,s:()=>i,t:()=>g});var r=n(60418);function o(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e}function i(e,t,n,r,o){return e[0]=t,e[1]=n,e[2]=r,e[3]=o,e}function s(e,t,n){return e[0]=t[0]+n[0],e[1]=t[1]+n[1],e[2]=t[2]+n[2],e[3]=t[3]+n[3],e}function l(e,t,n){return e[0]=t[0]-n[0],e[1]=t[1]-n[1],e[2]=t[2]-n[2],e[3]=t[3]-n[3],e}function a(e,t,n){return e[0]=t[0]*n[0],e[1]=t[1]*n[1],e[2]=t[2]*n[2],e[3]=t[3]*n[3],e}function u(e,t,n){return e[0]=t[0]/n[0],e[1]=t[1]/n[1],e[2]=t[2]/n[2],e[3]=t[3]/n[3],e}function c(e,t,n){return e[0]=t[0]*n,e[1]=t[1]*n,e[2]=t[2]*n,e[3]=t[3]*n,e}function f(e,t){const n=t[0]-e[0],r=t[1]-e[1],o=t[2]-e[2],i=t[3]-e[3];return Math.sqrt(n*n+r*r+o*o+i*i)}function d(e,t){const n=t[0]-e[0],r=t[1]-e[1],o=t[2]-e[2],i=t[3]-e[3];return n*n+r*r+o*o+i*i}function p(e){const t=e[0],n=e[1],r=e[2],o=e[3];return Math.sqrt(t*t+n*n+r*r+o*o)}function h(e){const t=e[0],n=e[1],r=e[2],o=e[3];return t*t+n*n+r*r+o*o}function b(e,t){const n=t[0],r=t[1],o=t[2],i=t[3];let s=n*n+r*r+o*o+i*i;return s>0&&(s=1/Math.sqrt(s),e[0]=n*s,e[1]=r*s,e[2]=o*s,e[3]=i*s),e}function y(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]+e[3]*t[3]}function w(e,t,n,r){const o=t[0],i=t[1],s=t[2],l=t[3];return e[0]=o+r*(n[0]-o),e[1]=i+r*(n[1]-i),e[2]=s+r*(n[2]-s),e[3]=l+r*(n[3]-l),e}function g(e,t,n){const r=t[0],o=t[1],i=t[2],s=t[3];return e[0]=n[0]*r+n[4]*o+n[8]*i+n[12]*s,e[1]=n[1]*r+n[5]*o+n[9]*i+n[13]*s,e[2]=n[2]*r+n[6]*o+n[10]*i+n[14]*s,e[3]=n[3]*r+n[7]*o+n[11]*i+n[15]*s,e}function m(e,t){return e[0]===t[0]&&e[1]===t[1]&&e[2]===t[2]&&e[3]===t[3]}function C(e,t){const n=e[0],o=e[1],i=e[2],s=e[3],l=t[0],a=t[1],u=t[2],c=t[3];return Math.abs(n-l)<=r.E*Math.max(1,Math.abs(n),Math.abs(l))&&Math.abs(o-a)<=r.E*Math.max(1,Math.abs(o),Math.abs(a))&&Math.abs(i-u)<=r.E*Math.max(1,Math.abs(i),Math.abs(u))&&Math.abs(s-c)<=r.E*Math.max(1,Math.abs(s),Math.abs(c))}let v=l,M=a,_=u,T=f,A=d,U=p,I=h;Object.freeze({__proto__:null,copy:o,set:i,add:s,subtract:l,multiply:a,divide:u,ceil:function(e,t){return e[0]=Math.ceil(t[0]),e[1]=Math.ceil(t[1]),e[2]=Math.ceil(t[2]),e[3]=Math.ceil(t[3]),e},floor:function(e,t){return e[0]=Math.floor(t[0]),e[1]=Math.floor(t[1]),e[2]=Math.floor(t[2]),e[3]=Math.floor(t[3]),e},min:function(e,t,n){return e[0]=Math.min(t[0],n[0]),e[1]=Math.min(t[1],n[1]),e[2]=Math.min(t[2],n[2]),e[3]=Math.min(t[3],n[3]),e},max:function(e,t,n){return e[0]=Math.max(t[0],n[0]),e[1]=Math.max(t[1],n[1]),e[2]=Math.max(t[2],n[2]),e[3]=Math.max(t[3],n[3]),e},round:function(e,t){return e[0]=Math.round(t[0]),e[1]=Math.round(t[1]),e[2]=Math.round(t[2]),e[3]=Math.round(t[3]),e},scale:c,scaleAndAdd:function(e,t,n,r){return e[0]=t[0]+n[0]*r,e[1]=t[1]+n[1]*r,e[2]=t[2]+n[2]*r,e[3]=t[3]+n[3]*r,e},distance:f,squaredDistance:d,length:p,squaredLength:h,negate:function(e,t){return e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e[3]=-t[3],e},inverse:function(e,t){return e[0]=1/t[0],e[1]=1/t[1],e[2]=1/t[2],e[3]=1/t[3],e},normalize:b,dot:y,lerp:w,random:function(e,t){let n,o,i,s,l,a;t=t||1;do{n=2*(0,r.R)()-1,o=2*(0,r.R)()-1,l=n*n+o*o}while(l>=1);do{i=2*(0,r.R)()-1,s=2*(0,r.R)()-1,a=i*i+s*s}while(a>=1);const u=Math.sqrt((1-l)/a);return e[0]=t*n,e[1]=t*o,e[2]=t*i*u,e[3]=t*s*u,e},transformMat4:g,transformQuat:function(e,t,n){const r=t[0],o=t[1],i=t[2],s=n[0],l=n[1],a=n[2],u=n[3],c=u*r+l*i-a*o,f=u*o+a*r-s*i,d=u*i+s*o-l*r,p=-s*r-l*o-a*i;return e[0]=c*u+p*-s+f*-a-d*-l,e[1]=f*u+p*-l+d*-s-c*-a,e[2]=d*u+p*-a+c*-l-f*-s,e[3]=t[3],e},str:function(e){return"vec4("+e[0]+", "+e[1]+", "+e[2]+", "+e[3]+")"},exactEquals:m,equals:C,sub:v,mul:M,div:_,dist:T,sqrDist:A,len:U,sqrLen:I})},1434:(e,t,n)=>{"use strict";n.d(t,{Z:()=>g});var r,o=n(56140),i=(n(95830),n(82550)),s=(n(36544),n(68055)),l=n(79881),a=n(9870),u=n(87566),c=(n(10923),n(57002),n(86035),n(92768)),f=n(50560),d=n(58385),p=n(78745);let h=r=class extends d.wq{constructor(){super(...arguments),this.description=null,this.label=null,this.minValue=0,this.maxValue=0,this.color=null}clone(){return new r({description:this.description,label:this.label,minValue:this.minValue,maxValue:this.maxValue,color:(0,i.d9)(this.color)})}};(0,o._)([(0,l.Cb)({type:String,json:{write:!0}})],h.prototype,"description",void 0),(0,o._)([(0,l.Cb)({type:String,json:{write:!0}})],h.prototype,"label",void 0),(0,o._)([(0,l.Cb)({type:Number,json:{read:{source:"classMinValue"},write:{target:"classMinValue"}}})],h.prototype,"minValue",void 0),(0,o._)([(0,l.Cb)({type:Number,json:{read:{source:"classMaxValue"},write:{target:"classMaxValue"}}})],h.prototype,"maxValue",void 0),(0,o._)([(0,l.Cb)({type:p.Z,json:{type:[s.z8],write:!0}})],h.prototype,"color",void 0),h=r=(0,o._)([(0,u.j)("esri.renderers.support.pointCloud.ColorClassBreakInfo")],h);const b=h;var y;let w=y=class extends c.Z{constructor(e){super(e),this.type="point-cloud-class-breaks",this.field=null,this.legendOptions=null,this.fieldTransformType=null,this.colorClassBreakInfos=null}clone(){return new y({...this.cloneProperties(),field:this.field,fieldTransformType:this.fieldTransformType,colorClassBreakInfos:(0,i.d9)(this.colorClassBreakInfos),legendOptions:(0,i.d9)(this.legendOptions)})}};(0,o._)([(0,a.J)({pointCloudClassBreaksRenderer:"point-cloud-class-breaks"})],w.prototype,"type",void 0),(0,o._)([(0,l.Cb)({json:{write:!0},type:String})],w.prototype,"field",void 0),(0,o._)([(0,l.Cb)({type:f.Z,json:{write:!0}})],w.prototype,"legendOptions",void 0),(0,o._)([(0,l.Cb)({type:c.Z.fieldTransformTypeKebabDict.apiValues,json:{type:c.Z.fieldTransformTypeKebabDict.jsonValues,read:c.Z.fieldTransformTypeKebabDict.read,write:c.Z.fieldTransformTypeKebabDict.write}})],w.prototype,"fieldTransformType",void 0),(0,o._)([(0,l.Cb)({type:[b],json:{write:!0}})],w.prototype,"colorClassBreakInfos",void 0),w=y=(0,o._)([(0,u.j)("esri.renderers.PointCloudClassBreaksRenderer")],w);const g=w},92768:(e,t,n)=>{"use strict";n.d(t,{Z:()=>T});var r,o=n(56140),i=(n(95830),n(82550)),s=(n(36544),n(68055),n(79881)),l=n(56274),a=n(87566),u=(n(10923),n(57002),n(86035),n(58385));let c=r=class extends u.wq{constructor(){super(...arguments),this.field=null,this.minValue=0,this.maxValue=255}clone(){return new r({field:this.field,minValue:this.minValue,maxValue:this.maxValue})}};(0,o._)([(0,s.Cb)({type:String,json:{write:!0}})],c.prototype,"field",void 0),(0,o._)([(0,s.Cb)({type:Number,nonNullable:!0,json:{write:!0}})],c.prototype,"minValue",void 0),(0,o._)([(0,s.Cb)({type:Number,nonNullable:!0,json:{write:!0}})],c.prototype,"maxValue",void 0),c=r=(0,o._)([(0,a.j)("esri.renderers.support.pointCloud.ColorModulation")],c);const f=c,d=new l.Xn({pointCloudFixedSizeAlgorithm:"fixed-size",pointCloudSplatAlgorithm:"splat"});let p=class extends u.wq{};(0,o._)([(0,s.Cb)({type:d.apiValues,readOnly:!0,nonNullable:!0,json:{type:d.jsonValues,read:!1,write:d.write}})],p.prototype,"type",void 0),p=(0,o._)([(0,a.j)("esri.renderers.support.pointCloud.PointSizeAlgorithm")],p);const h=p;var b,y=n(9870);let w=b=class extends h{constructor(){super(...arguments),this.type="fixed-size",this.size=0,this.useRealWorldSymbolSizes=null}clone(){return new b({size:this.size,useRealWorldSymbolSizes:this.useRealWorldSymbolSizes})}};(0,o._)([(0,y.J)({pointCloudFixedSizeAlgorithm:"fixed-size"})],w.prototype,"type",void 0),(0,o._)([(0,s.Cb)({type:Number,nonNullable:!0,json:{write:!0}})],w.prototype,"size",void 0),(0,o._)([(0,s.Cb)({type:Boolean,json:{write:!0}})],w.prototype,"useRealWorldSymbolSizes",void 0),w=b=(0,o._)([(0,a.j)("esri.renderers.support.pointCloud.PointSizeFixedSizeAlgorithm")],w);const g=w;var m;let C=m=class extends h{constructor(){super(...arguments),this.type="splat",this.scaleFactor=1}clone(){return new m({scaleFactor:this.scaleFactor})}};(0,o._)([(0,y.J)({pointCloudSplatAlgorithm:"splat"})],C.prototype,"type",void 0),(0,o._)([(0,s.Cb)({type:Number,value:1,nonNullable:!0,json:{write:!0}})],C.prototype,"scaleFactor",void 0),C=m=(0,o._)([(0,a.j)("esri.renderers.support.pointCloud.PointSizeSplatAlgorithm")],C);const v={key:"type",base:h,typeMap:{"fixed-size":g,splat:C}},M=(0,l.wY)()({pointCloudClassBreaksRenderer:"point-cloud-class-breaks",pointCloudRGBRenderer:"point-cloud-rgb",pointCloudStretchRenderer:"point-cloud-stretch",pointCloudUniqueValueRenderer:"point-cloud-unique-value"});let _=class extends u.wq{constructor(e){super(e),this.type=void 0,this.pointSizeAlgorithm=null,this.colorModulation=null,this.pointsPerInch=10}clone(){return console.warn(".clone() is not implemented for "+this.declaredClass),null}cloneProperties(){return{pointSizeAlgorithm:(0,i.d9)(this.pointSizeAlgorithm),colorModulation:(0,i.d9)(this.colorModulation),pointsPerInch:(0,i.d9)(this.pointsPerInch)}}};(0,o._)([(0,s.Cb)({type:M.apiValues,readOnly:!0,nonNullable:!0,json:{type:M.jsonValues,read:!1,write:M.write}})],_.prototype,"type",void 0),(0,o._)([(0,s.Cb)({types:v,json:{write:!0}})],_.prototype,"pointSizeAlgorithm",void 0),(0,o._)([(0,s.Cb)({type:f,json:{write:!0}})],_.prototype,"colorModulation",void 0),(0,o._)([(0,s.Cb)({json:{write:!0},nonNullable:!0,type:Number})],_.prototype,"pointsPerInch",void 0),_=(0,o._)([(0,a.j)("esri.renderers.PointCloudRenderer")],_),(_||(_={})).fieldTransformTypeKebabDict=new l.Xn({none:"none",lowFourBit:"low-four-bit",highFourBit:"high-four-bit",absoluteValue:"absolute-value",moduloTen:"modulo-ten"});const T=_},81751:(e,t,n)=>{"use strict";n.d(t,{Z:()=>g});var r,o=n(56140),i=(n(95830),n(82550)),s=(n(36544),n(68055)),l=n(79881),a=n(9870),u=n(87566),c=(n(10923),n(57002),n(86035),n(92768)),f=n(50560),d=n(58385),p=n(78745);let h=r=class extends d.wq{constructor(){super(...arguments),this.label=null,this.value=0,this.color=null}clone(){return new r({label:this.label,value:this.value,color:(0,i.d9)(this.color)})}};(0,o._)([(0,l.Cb)({type:String,json:{write:!0}})],h.prototype,"label",void 0),(0,o._)([(0,l.Cb)({type:Number,nonNullable:!0,json:{write:!0}})],h.prototype,"value",void 0),(0,o._)([(0,l.Cb)({type:p.Z,json:{type:[s.z8],write:!0}})],h.prototype,"color",void 0),h=r=(0,o._)([(0,u.j)("esri.renderers.support.pointCloud.StopInfo")],h);const b=h;var y;let w=y=class extends c.Z{constructor(e){super(e),this.type="point-cloud-stretch",this.field=null,this.legendOptions=null,this.fieldTransformType=null,this.stops=null}clone(){return new y({...this.cloneProperties(),field:(0,i.d9)(this.field),fieldTransformType:(0,i.d9)(this.fieldTransformType),stops:(0,i.d9)(this.stops),legendOptions:(0,i.d9)(this.legendOptions)})}};(0,o._)([(0,a.J)({pointCloudStretchRenderer:"point-cloud-stretch"})],w.prototype,"type",void 0),(0,o._)([(0,l.Cb)({json:{write:!0},type:String})],w.prototype,"field",void 0),(0,o._)([(0,l.Cb)({type:f.Z,json:{write:!0}})],w.prototype,"legendOptions",void 0),(0,o._)([(0,l.Cb)({type:c.Z.fieldTransformTypeKebabDict.apiValues,json:{type:c.Z.fieldTransformTypeKebabDict.jsonValues,read:c.Z.fieldTransformTypeKebabDict.read,write:c.Z.fieldTransformTypeKebabDict.write}})],w.prototype,"fieldTransformType",void 0),(0,o._)([(0,l.Cb)({type:[b],json:{write:!0}})],w.prototype,"stops",void 0),w=y=(0,o._)([(0,u.j)("esri.renderers.PointCloudStretchRenderer")],w);const g=w},5041:(e,t,n)=>{"use strict";n.d(t,{Z:()=>g});var r,o=n(56140),i=(n(95830),n(82550)),s=(n(36544),n(68055)),l=n(79881),a=n(9870),u=n(87566),c=(n(10923),n(57002),n(86035),n(92768)),f=n(50560),d=n(58385),p=n(78745);let h=r=class extends d.wq{constructor(){super(...arguments),this.description=null,this.label=null,this.values=null,this.color=null}clone(){return new r({description:this.description,label:this.label,values:(0,i.d9)(this.values),color:(0,i.d9)(this.color)})}};(0,o._)([(0,l.Cb)({type:String,json:{write:!0}})],h.prototype,"description",void 0),(0,o._)([(0,l.Cb)({type:String,json:{write:!0}})],h.prototype,"label",void 0),(0,o._)([(0,l.Cb)({type:[String],json:{write:!0}})],h.prototype,"values",void 0),(0,o._)([(0,l.Cb)({type:p.Z,json:{type:[s.z8],write:!0}})],h.prototype,"color",void 0),h=r=(0,o._)([(0,u.j)("esri.renderers.support.pointCloud.ColorUniqueValueInfo")],h);const b=h;var y;let w=y=class extends c.Z{constructor(e){super(e),this.type="point-cloud-unique-value",this.field=null,this.fieldTransformType=null,this.colorUniqueValueInfos=null,this.legendOptions=null}clone(){return new y({...this.cloneProperties(),field:(0,i.d9)(this.field),fieldTransformType:(0,i.d9)(this.fieldTransformType),colorUniqueValueInfos:(0,i.d9)(this.colorUniqueValueInfos),legendOptions:(0,i.d9)(this.legendOptions)})}};(0,o._)([(0,a.J)({pointCloudUniqueValueRenderer:"point-cloud-unique-value"})],w.prototype,"type",void 0),(0,o._)([(0,l.Cb)({json:{write:!0},type:String})],w.prototype,"field",void 0),(0,o._)([(0,l.Cb)({type:c.Z.fieldTransformTypeKebabDict.apiValues,json:{type:c.Z.fieldTransformTypeKebabDict.jsonValues,read:c.Z.fieldTransformTypeKebabDict.read,write:c.Z.fieldTransformTypeKebabDict.write}})],w.prototype,"fieldTransformType",void 0),(0,o._)([(0,l.Cb)({type:[b],json:{write:!0}})],w.prototype,"colorUniqueValueInfos",void 0),(0,o._)([(0,l.Cb)({type:f.Z,json:{write:!0}})],w.prototype,"legendOptions",void 0),w=y=(0,o._)([(0,u.j)("esri.renderers.PointCloudUniqueValueRenderer")],w);const g=w},74199:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>q});var r=n(6962),o=n(59472),i=n(39105),s=n(73032),l=n(17387),a=n(55162),u=n(2847),c=n(69236);function f(){const e=new Float32Array(4);return e[3]=1,e}Object.freeze({__proto__:null,create:f,clone:function(e){const t=new Float32Array(4);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t},fromValues:function(e,t,n,r){const o=new Float32Array(4);return o[0]=e,o[1]=t,o[2]=n,o[3]=r,o},createView:function(e,t){return new Float32Array(e,t,4)}});var d=n(1434),p=n(81751),h=n(5041),b=n(32656);function y(e,t,n){return{identifier:String.fromCharCode.apply(null,new Uint8Array(e,n+0,10)),version:t.getUint16(n+10,!0),checksum:t.getUint32(n+12,!0)}}function w(e,t,n){const r=[];t=g(e,t,r);const o=[];for(let i=0;i<r.length;i++){o.length=0,t=g(e,t,o);for(let e=0;e<o.length;e++)n.push(o[e]+r[i])}return t}function g(e,t,n){const r=new DataView(e,t),o=r.getUint8(0),i=31&o,s=!!(32&o),l=(192&o)>>6;let a=0;if(0===l)a=r.getUint32(1,!0),t+=5;else if(1===l)a=r.getUint16(1,!0),t+=3;else{if(2!==l)throw new b.Z("lepcc-decode-error","Bad count type");a=r.getUint8(1),t+=2}if(s)throw new b.Z("lepcc-decode-error","LUT not implemented");const u=Math.ceil(a*i/8),c=new Uint8Array(e,t,u);let f=0,d=0,p=0;const h=-1>>>32-i;for(let e=0;e<a;e++){for(;d<i;)f|=c[p]<<d,d+=8,p+=1;n[e]=f&h,f>>>=i,d-=i,d+i>32&&(f|=c[p-1]>>8-d)}return t+p}var m=n(82550);const C=n(36544).Z.getLogger("esri.views.3d.layers.i3s.I3SBinaryReader");function v(e,t,n){let r="",o=0;for(;o<n;){const i=e[t+o];if(i<128)r+=String.fromCharCode(i),o++;else if(i>=192&&i<224){if(o+1>=n)throw new b.Z("utf8-decode-error","UTF-8 Decode failed. Two byte character was truncated.");const s=(31&i)<<6|63&e[t+o+1];r+=String.fromCharCode(s),o+=2}else if(i>=224&&i<240){if(o+2>=n)throw new b.Z("utf8-decode-error","UTF-8 Decode failed. Multi byte character was truncated.");const s=(15&i)<<12|(63&e[t+o+1])<<6|63&e[t+o+2];r+=String.fromCharCode(s),o+=3}else{if(!(i>=240&&i<248))throw new b.Z("utf8-decode-error","UTF-8 Decode failed. Invalid multi byte sequence.");{if(o+3>=n)throw new b.Z("utf8-decode-error","UTF-8 Decode failed. Multi byte character was truncated.");const s=(7&i)<<18|(63&e[t+o+1])<<12|(63&e[t+o+2])<<6|63&e[t+o+3];if(s>=65536){const e=55296+(s-65536>>10),t=56320+(1023&s);r+=String.fromCharCode(e,t)}else r+=String.fromCharCode(s);o+=4}}}return r}function M(e,t){const n={byteOffset:0,byteCount:0,fields:Object.create(null)};let r=0;for(let o=0;o<t.length;o++){const i=t[o],s=i.valueType||i.type,l=Z[s];n.fields[i.property]=l(e,r),r+=I[s].BYTES_PER_ELEMENT}return n.byteCount=r,n}function _(e,t){return new(0,I[t.valueType])(e,t.byteOffset,t.count*t.valuesPerElement)}function T(e,t,n){if(t!==e&&C.error(`Invalid ${n} buffer size\n expected: ${e}, actual: ${t})`),t<e)throw new b.Z("buffer-too-small","Binary buffer is too small",{expectedSize:e,actualSize:t})}const A={position:"position",normal:"normal",color:"color",uv0:"uv0",region:"uvRegion"};function U(e,t,n){if("lepcc-rgb"===e.encoding)return function(e){const t=new DataView(e,0);let n=0;const{identifier:r,version:o}=y(e,t,n);if(n+=16,"ClusterRGB"!==r)throw new b.Z("lepcc-decode-error","Bad identifier");if(o>1)throw new b.Z("lepcc-decode-error","Unknown version");const i=function(e,t){return{sizeLo:e.getUint32(t+0,!0),sizeHi:e.getUint32(t+4,!0),count:e.getUint32(t+8,!0),colorMapCount:e.getUint16(t+12,!0),lookupMethod:e.getUint8(t+14),compressionMethod:e.getUint8(t+15)}}(t,n);if(n+=16,i.sizeHi*Math.pow(2,32)+i.sizeLo!==e.byteLength)throw new b.Z("lepcc-decode-error","Bad size");if((2===i.lookupMethod||1===i.lookupMethod)&&0===i.compressionMethod){if(3*i.colorMapCount+i.count+n!==e.byteLength||i.colorMapCount>256)throw new b.Z("lepcc-decode-error","Bad count");const t=new Uint8Array(e,n,3*i.colorMapCount),r=new Uint8Array(e,n+3*i.colorMapCount,i.count),o=new Uint8Array(3*i.count);for(let e=0;e<i.count;e++){const n=r[e];o[3*e]=t[3*n],o[3*e+1]=t[3*n+1],o[3*e+2]=t[3*n+2]}return o}if(0===i.lookupMethod&&0===i.compressionMethod){if(3*i.count+n!==e.byteLength||0!==i.colorMapCount)throw new b.Z("lepcc-decode-error","Bad count");return new Uint8Array(e,n).slice()}if(i.lookupMethod<=2&&1===i.compressionMethod){if(n+3!==e.byteLength||1!==i.colorMapCount)throw new b.Z("lepcc-decode-error","Bad count");const r=t.getUint8(n),o=t.getUint8(n+1),s=t.getUint8(n+2),l=new Uint8Array(3*i.count);for(let e=0;e<i.count;e++)l[3*e]=r,l[3*e+1]=o,l[3*e+2]=s;return l}throw new b.Z("lepcc-decode-error","Bad method "+i.lookupMethod+","+i.compressionMethod)}(t);if("lepcc-intensity"===e.encoding)return function(e){const t=new DataView(e,0);let n=0;const{identifier:r,version:o}=y(e,t,n);if(n+=16,"Intensity "!==r)throw new b.Z("lepcc-decode-error","Bad identifier");if(o>1)throw new b.Z("lepcc-decode-error","Unknown version");const i=function(e,t){return{sizeLo:e.getUint32(t+0,!0),sizeHi:e.getUint32(t+4,!0),count:e.getUint32(t+8,!0),scaleFactor:e.getUint16(t+12,!0),bitsPerPoint:e.getUint8(t+14),reserved:e.getUint8(t+15)}}(t,n);if(n+=16,i.sizeHi*Math.pow(2,32)+i.sizeLo!==e.byteLength)throw new b.Z("lepcc-decode-error","Bad size");const s=new Uint16Array(i.count);if(8===i.bitsPerPoint){if(i.count+n!==e.byteLength)throw new b.Z("lepcc-decode-error","Bad size");const t=new Uint8Array(e,n,i.count);for(let e=0;e<i.count;e++)s[e]=t[e]*i.scaleFactor}else if(16===i.bitsPerPoint){if(2*i.count+n!==e.byteLength)throw new b.Z("lepcc-decode-error","Bad size");const t=new Uint16Array(e,n,i.count);for(let e=0;e<i.count;e++)s[e]=t[e]*i.scaleFactor}else{const t=[];if(g(e,n,t)!==e.byteLength)throw new b.Z("lepcc-decode-error","Bad size");for(let e=0;e<i.count;e++)s[e]=t[e]*i.scaleFactor}return s}(t);if(null!=e.encoding&&""!==e.encoding)throw new b.Z("unknown-attribute-storage-info-encoding","Unknown Attribute Storage Info Encoding");e["attributeByteCounts "]&&!e.attributeByteCounts&&(C.warn("Warning: Trailing space in 'attributeByteCounts '."),e.attributeByteCounts=e["attributeByteCounts "]),"ObjectIds"===e.ordering[0]&&e.hasOwnProperty("objectIds")&&(C.warn("Warning: Case error in objectIds"),e.ordering[0]="objectIds");const r=function(e,t,n){const r=null!=t.header?M(e,t.header):{byteOffset:0,byteCount:0,fields:{count:n}},o={header:r,byteOffset:r.byteCount,byteCount:0,entries:Object.create(null)};let i=r.byteCount;for(let e=0;e<t.ordering.length;e++){const n=t.ordering[e],s=(0,m.d9)(t[n]);if(s.count=r.fields.count,"String"===s.valueType){if(s.byteOffset=i,s.byteCount=r.fields[n+"ByteCount"],"UTF-8"!==s.encoding)throw new b.Z("unsupported-encoding","Unsupported String encoding.",{encoding:s.encoding})}else{if(!S(s.valueType))throw new b.Z("unsupported-value-type","Unsupported binary valueType",{valueType:s.valueType});{const e=j(s.valueType);i+=i%e!=0?e-i%e:0,s.byteOffset=i,s.byteCount=e*s.valuesPerElement*s.count}}i+=s.byteCount,o.entries[n]=s}return o.byteCount=i-o.byteOffset,o}(t,e,n);T(r.byteOffset+r.byteCount,t.byteLength,"attribute");const o=r.entries.attributeValues||r.entries.objectIds;if(o){if("String"===o.valueType){const e=r.entries.attributeByteCounts,n=_(t,e),i=function(e,t){return new Uint8Array(e,t.byteOffset,t.byteCount)}(t,o);return function(e,t,n){const r=[];let o,i,s=0;for(i=0;i<e;i+=1){if(o=t[i],o>0){if(r.push(v(n,s,o-1)),0!==n[s+o-1])throw new b.Z("string-array-error","Invalid string array: missing null termination.")}else r.push(null);s+=o}return r}(e.count,n,i)}return _(t,o)}throw new b.Z("bad-attribute-storage-info","Bad attributeStorageInfo specification.")}const I={Float32:Float32Array,Float64:Float64Array,UInt8:Uint8Array,Int8:Int8Array,UInt16:Uint16Array,Int16:Int16Array,UInt32:Uint32Array,Int32:Int32Array},Z={Float32:(e,t)=>new DataView(e,0).getFloat32(t,!0),Float64:(e,t)=>new DataView(e,0).getFloat64(t,!0),UInt8:(e,t)=>new DataView(e,0).getUint8(t),Int8:(e,t)=>new DataView(e,0).getInt8(t),UInt16:(e,t)=>new DataView(e,0).getUint16(t,!0),Int16:(e,t)=>new DataView(e,0).getInt16(t,!0),UInt32:(e,t)=>new DataView(e,0).getUint32(t,!0),Int32:(e,t)=>new DataView(e,0).getInt32(t,!0)};function S(e){return I.hasOwnProperty(e)}function j(e){return S(e)?I[e].BYTES_PER_ELEMENT:0}function x(e,t){if(null==e.encoding||""===e.encoding){const n=function(e,t){const n=M(e,t&&t.header);let r=n.byteCount;const o={isDraco:!1,header:n,byteOffset:n.byteCount,byteCount:0,vertexAttributes:{}},i=n.fields,s=null!=i.vertexCount?i.vertexCount:i.count;for(const e of t.ordering){if(!t.vertexAttributes[e])continue;const n={...t.vertexAttributes[e],byteOffset:r,count:s},i=A[e]?A[e]:"_"+e;o.vertexAttributes[i]=n,r+=j(n.valueType)*n.valuesPerElement*s}const l=i.faceCount;if(t.faces&&l){o.faces={};for(const e of t.ordering){if(!t.faces[e])continue;const n={...t.faces[e],byteOffset:r,count:l};o.faces[e]=n,r+=j(n.valueType)*n.valuesPerElement*l}}const a=i.featureCount;if(t.featureAttributes&&t.featureAttributeOrder&&a){o.featureAttributes={};for(const e of t.featureAttributeOrder){if(!t.featureAttributes[e])continue;const n={...t.featureAttributes[e],byteOffset:r,count:a};o.featureAttributes[e]=n,r+=("UInt64"===n.valueType?8:j(n.valueType))*n.valuesPerElement*a}}return T(r,e.byteLength,"geometry"),o.byteCount=r-o.byteOffset,o}(t,e);if((0,o.Wi)(n.vertexAttributes.position))return;const r=_(t,n.vertexAttributes.position),i=n.header.fields,s=[i.offsetX,i.offsetY,i.offsetZ],l=[i.scaleX,i.scaleY,i.scaleZ],a=r.length/3,u=new Float64Array(3*a);for(let e=0;e<a;e++)u[3*e]=r[3*e]*l[0]+s[0],u[3*e+1]=r[3*e+1]*l[1]+s[1],u[3*e+2]=r[3*e+2]*l[2]+s[2];return u}if("lepcc-xyz"===e.encoding)return function(e){const t=new DataView(e,0);let n=0;const{identifier:r,version:o}=y(e,t,n);if(n+=16,"LEPCC     "!==r)throw new b.Z("lepcc-decode-error","Bad identifier");if(o>1)throw new b.Z("lepcc-decode-error","Unknown version");const i=function(e,t){return{sizeLo:e.getUint32(t+0,!0),sizeHi:e.getUint32(t+4,!0),minX:e.getFloat64(t+8,!0),minY:e.getFloat64(t+16,!0),minZ:e.getFloat64(t+24,!0),maxX:e.getFloat64(t+32,!0),maxY:e.getFloat64(t+40,!0),maxZ:e.getFloat64(t+48,!0),errorX:e.getFloat64(t+56,!0),errorY:e.getFloat64(t+64,!0),errorZ:e.getFloat64(t+72,!0),count:e.getUint32(t+80,!0),reserved:e.getUint32(t+84,!0)}}(t,n);if(n+=88,i.sizeHi*Math.pow(2,32)+i.sizeLo!==e.byteLength)throw new b.Z("lepcc-decode-error","Bad size");const s=new Float64Array(3*i.count),l=[],a=[],u=[],c=[];if(n=w(e,n,l),n=w(e,n,a),n=w(e,n,u),n=w(e,n,c),n!==e.byteLength)throw new b.Z("lepcc-decode-error","Bad length");let f=0,d=0;for(let e=0;e<l.length;e++){d+=l[e];let t=0;for(let n=0;n<a[e];n++){t+=u[f];const e=c[f];s[3*f]=Math.min(i.maxX,i.minX+2*i.errorX*t),s[3*f+1]=Math.min(i.maxY,i.minY+2*i.errorY*d),s[3*f+2]=Math.min(i.maxZ,i.minZ+2*i.errorZ*e),f++}}return{errorX:i.errorX,errorY:i.errorY,errorZ:i.errorZ,result:s}}(t).result}function V(e,t,n){return(0,o.pC)(e)&&e.attributeInfo.useElevation?function(e,t){const n=new Float64Array(t);for(let r=0;r<t;r++)n[r]=e[3*r+2];return n}(t,n):(0,o.pC)(e)?U(e.attributeInfo.storageInfo,e.buffer,n):null}function z(e){return null==e||"none"===e?null:"low-four-bit"===e?e=>15&e:"high-four-bit"===e?e=>(240&e)>>4:"absolute-value"===e?e=>Math.abs(e):"modulo-ten"===e?e=>e%10:null}function O(e){let t=0;for(const n of e||[])t|=1<<n;return t}class F{transform(e){const t=this._transform(e),n=[t.points.buffer,t.rgb.buffer];(0,o.pC)(t.pointIdFilterMap)&&n.push(t.pointIdFilterMap.buffer);for(const e of t.attributes)"buffer"in e.values&&(0,r.eP)(e.values.buffer)&&e.values.buffer!==t.rgb.buffer&&n.push(e.values.buffer);return(0,i.DB)({result:t,transferList:n})}_transform(e){const t=x(e.schema,e.geometryBuffer);let n=t.length/3,r=null;const i=[],l=V(e.primaryAttributeData,t,n);(0,o.pC)(e.primaryAttributeData)&&l&&i.push({attributeInfo:e.primaryAttributeData.attributeInfo,values:l});const a=V(e.modulationAttributeData,t,n);(0,o.pC)(e.modulationAttributeData)&&a&&i.push({attributeInfo:e.modulationAttributeData.attributeInfo,values:a});let u=function(e,t,n,r){const{rendererJSON:o,isRGBRenderer:i}=e;let s=null,l=null;if(t&&i)s=t;else if(t&&"pointCloudUniqueValueRenderer"===o.type){l=h.Z.fromJSON(o);const e=l.colorUniqueValueInfos;s=new Uint8Array(3*r);const n=z(l.fieldTransformType);for(let o=0;o<r;o++){const r=(n?n(t[o]):t[o])+"";for(let t=0;t<e.length;t++)if(e[t].values.indexOf(r)>=0){s[3*o]=e[t].color.r,s[3*o+1]=e[t].color.g,s[3*o+2]=e[t].color.b;break}}}else if(t&&"pointCloudStretchRenderer"===o.type){l=p.Z.fromJSON(o);const e=l.stops;s=new Uint8Array(3*r);const n=z(l.fieldTransformType);for(let o=0;o<r;o++){const r=n?n(t[o]):t[o],i=e.length-1;if(r<e[0].value)s[3*o]=e[0].color.r,s[3*o+1]=e[0].color.g,s[3*o+2]=e[0].color.b;else if(r>=e[i].value)s[3*o]=e[i].color.r,s[3*o+1]=e[i].color.g,s[3*o+2]=e[i].color.b;else for(let t=1;t<e.length;t++)if(r<e[t].value){const n=(r-e[t-1].value)/(e[t].value-e[t-1].value);s[3*o]=e[t].color.r*n+e[t-1].color.r*(1-n),s[3*o+1]=e[t].color.g*n+e[t-1].color.g*(1-n),s[3*o+2]=e[t].color.b*n+e[t-1].color.b*(1-n);break}}}else if(t&&"pointCloudClassBreaksRenderer"===o.type){l=d.Z.fromJSON(o);const e=l.colorClassBreakInfos;s=new Uint8Array(3*r);const n=z(l.fieldTransformType);for(let o=0;o<r;o++){const r=n?n(t[o]):t[o];for(let t=0;t<e.length;t++)if(r>=e[t].minValue&&r<=e[t].maxValue){s[3*o]=e[t].color.r,s[3*o+1]=e[t].color.g,s[3*o+2]=e[t].color.b;break}}}else{s=new Uint8Array(3*r);for(let e=0;e<s.length;e++)s[e]=255}if(n&&l&&l.colorModulation){const e=l.colorModulation.minValue,t=l.colorModulation.maxValue,o=.3;for(let i=0;i<r;i++){const r=n[i],l=r>=t?1:r<=e?o:o+(1-o)*(r-e)/(t-e);s[3*i]=l*s[3*i],s[3*i+1]=l*s[3*i+1],s[3*i+2]=l*s[3*i+2]}}return s}(e.rendererInfo,l,a,n);if(e.filterInfo&&e.filterInfo.length>0&&(0,o.pC)(e.filterAttributesData)){const o=e.filterAttributesData.map((e=>{const r=V(e,t,n),o={attributeInfo:e.attributeInfo,values:r};return i.push(o),o}));r=new Uint32Array(n),n=function(e,t,n,r,o){const i=e.length/3;let s=0;for(let l=0;l<i;l++){let i=!0;for(let e=0;e<r.length&&i;e++){const{filterJSON:t}=r[e],n=o[e].values[l];switch(t.type){case"pointCloudValueFilter":{const e="exclude"===t.mode;-1!==t.values.indexOf(n)===e&&(i=!1);break}case"pointCloudBitfieldFilter":{const e=O(t.requiredSetBits),r=O(t.requiredClearBits);(n&e)===e&&0==(n&r)||(i=!1);break}case"pointCloudReturnFilter":{const e=15&n,r=n>>>4&15,o=r>1,s=1===e,l=e===r;let a=!1;for(const e of t.includedReturns)if("last"===e&&l||"firstOfMany"===e&&s&&o||"lastOfMany"===e&&l&&o||"single"===e&&!o){a=!0;break}a||(i=!1);break}}}i&&(n[s]=l,e[3*s]=e[3*l],e[3*s+1]=e[3*l+1],e[3*s+2]=e[3*l+2],t[3*s]=t[3*l],t[3*s+1]=t[3*l+1],t[3*s+2]=t[3*l+2],s++)}return s}(t,u,r,e.filterInfo,o)}for(const r of e.userAttributesData){const e=V(r,t,n);i.push({attributeInfo:r.attributeInfo,values:e})}3*n<u.length&&(u=new Uint8Array(u.buffer.slice(0,3*n))),this._applyElevationOffsetInPlace(t,n,e.elevationOffset);const c=this._transformCoordinates(t,n,e.obb,s.Z.fromJSON(e.inSR),s.Z.fromJSON(e.outSR));return{obb:e.obb,points:c,rgb:u,attributes:i,pointIdFilterMap:r}}_transformCoordinates(e,t,n,r,o){if(!(0,a.CM)(e,r,0,e,o,0,t))throw Error("Can't reproject");const i=(0,c.f)(n.center[0],n.center[1],n.center[2]),s=(0,c.c)(),f=(0,c.c)();(0,u.c)(B,n.quaternion);const d=new Float32Array(3*t);for(let r=0;r<t;r++)s[0]=e[3*r]-i[0],s[1]=e[3*r+1]-i[1],s[2]=e[3*r+2]-i[2],(0,l.q)(f,s,B),n.halfSize[0]=Math.max(n.halfSize[0],Math.abs(f[0])),n.halfSize[1]=Math.max(n.halfSize[1],Math.abs(f[1])),n.halfSize[2]=Math.max(n.halfSize[2],Math.abs(f[2])),d[3*r]=s[0],d[3*r+1]=s[1],d[3*r+2]=s[2];return d}_applyElevationOffsetInPlace(e,t,n){if(0!==n)for(let r=0;r<t;r++)e[3*r+2]+=n}}const B=f();const q=function(){return new F}}}]);
//# sourceMappingURL=4199.js.map