(self.webpackChunkinspection_scheduler=self.webpackChunkinspection_scheduler||[]).push([[4136,1012,995],{71012:(t,e,r)=>{"use strict";r.d(e,{b:()=>i,c:()=>s,g:()=>n});"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self&&self;function n(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function s(t,e,r){return t(r={path:e,exports:{},require:function(t,e){return i(null==e&&r.path)}},r.exports),r.exports}function i(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}},6897:(t,e,r)=>{"use strict";function n(){const t=new Float32Array(16);return t[0]=1,t[5]=1,t[10]=1,t[15]=1,t}r.d(e,{c:()=>n});const s=n();Object.freeze({__proto__:null,create:n,clone:function(t){const e=new Float32Array(16);return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],e},fromValues:function(t,e,r,n,s,i,a,o,c,u,l,h,f,d,p,v){const g=new Float32Array(16);return g[0]=t,g[1]=e,g[2]=r,g[3]=n,g[4]=s,g[5]=i,g[6]=a,g[7]=o,g[8]=c,g[9]=u,g[10]=l,g[11]=h,g[12]=f,g[13]=d,g[14]=p,g[15]=v,g},createView:function(t,e){return new Float32Array(t,e,16)},IDENTITY:s})},17149:(t,e,r)=>{"use strict";r.d(e,{W:()=>o});var n=r(95830),s=r(56291),i=r(7369);const a=(0,n.Z)("mapview-transitions-duration");class o extends s.s{constructor(){super(...arguments),this._childrenSet=new Set,this.children=[],this._effectList=null}get blendMode(){return this._blendMode}set blendMode(t){this._blendMode=t,this.requestRender()}get clips(){return this._clips}set clips(t){this._clips=t,this.children.forEach((e=>e.clips=t))}get computedEffects(){var t,e;return null!=(t=null==(e=this._effectList)?void 0:e.effects)?t:null}get effect(){var t,e;return null!=(t=null==(e=this._effectList)?void 0:e.effect)?t:""}set effect(t){(this._effectList||t)&&(this._effectList||(this._effectList=new i.ZP(a)),this._effectList.effect=t,this.requestRender())}updateTransitionProperties(t,e){super.updateTransitionProperties(t,e),this._effectList&&(this._effectList.transitionStep(t,e),this._effectList.transitioning&&this.requestRender())}doRender(t){const e=this.createRenderParams(t);this.renderChildren(e)}addChild(t){return this.addChildAt(t,this.children.length)}addChildAt(t,e=this.children.length){if(!t)return t;if(this.contains(t))return t;const r=t.parent;return r&&r!==this&&r.removeChild(t),e>=this.children.length?this.children.push(t):this.children.splice(e,0,t),this._childrenSet.add(t),t.parent=this,t.stage=this.stage,this!==this.stage&&(t.clips=this.clips),this.requestRender(),t}contains(t){return this._childrenSet.has(t)}removeAllChildren(){this._childrenSet.clear();for(const t of this.children)this!==this.stage&&(t.clips=null),t.stage=null,t.parent=null;this.children.length=0}removeChild(t){return this.contains(t)?this.removeChildAt(this.children.indexOf(t)):t}removeChildAt(t){let e;return t<0||t>=this.children.length?null:(e=this.children.splice(t,1)[0],this._childrenSet.delete(e),this!==this.stage&&(e.clips=null),e.stage=null,e.parent=null,e)}sortChildren(t){return this.children.sort(t)}onAttach(){super.onAttach();const t=this.stage;for(const e of this.children)e.stage=t}onDetach(){super.onDetach();for(const t of this.children)t.stage=null}renderChildren(t){for(const e of this.children)e.beforeRender(t);for(const e of this.children)e.processRender(t);for(const e of this.children)e.afterRender(t)}createRenderParams(t){return{...t,blendMode:this.blendMode,effects:this.computedEffects,globalOpacity:t.globalOpacity*this.computedOpacity,inFadeTransition:this.inFadeTransition}}}},56291:(t,e,r)=>{"use strict";r.d(e,{s:()=>o});var n=r(95830),s=r(39105),i=r(35470);const a=1/(0,n.Z)("mapview-transitions-duration");class o extends i.Z{constructor(){super(...arguments),this._fadeOutResolver=null,this._fadeInResolver=null,this._clips=null,this.computedVisible=!0,this.computedOpacity=1,this.fadeTransitionEnabled=!1,this.inFadeTransition=!1,this._isReady=!1,this._opacity=1,this._stage=null,this._visible=!0}get clips(){return this._clips}set clips(t){this._clips=t,this.requestRender()}get isReady(){return this._isReady}get opacity(){return this._opacity}set opacity(t){this._opacity!==t&&(this._opacity=Math.min(1,Math.max(t,0)),this.requestRender())}get stage(){return this._stage}set stage(t){if(this._stage===t)return;const e=this._stage;this._stage=t,t?this._stage.untrashDisplayObject(this)||(this.onAttach(),this.emit("attach")):e.trashDisplayObject(this)}get visible(){return this._visible}set visible(t){this._visible!==t&&(this._visible=t,this.requestRender())}fadeIn(){return this._fadeInResolver||(this._fadeOutResolver&&(this._fadeOutResolver(),this._fadeOutResolver=null),this.computedOpacity=0,this.fadeTransitionEnabled=!0,this._fadeInResolver=(0,s.hh)(),this.requestRender()),this._fadeInResolver.promise}fadeOut(){return this._fadeOutResolver||(this._fadeInResolver&&(this._fadeInResolver(),this._fadeInResolver=null),this.fadeTransitionEnabled=!0,this._fadeOutResolver=(0,s.hh)(),this.requestRender()),this._fadeOutResolver.promise}beforeRender(t){this.updateTransitionProperties(t.deltaTime,t.state.scale)}afterRender(t){this._fadeInResolver&&this.computedOpacity===this.opacity?(this._fadeInResolver(),this._fadeInResolver=null):this._fadeOutResolver&&0===this.computedOpacity&&(this._fadeOutResolver(),this._fadeOutResolver=null)}setTransform(t){}processRender(t){this.stage&&this.computedVisible&&this.doRender(t)}requestRender(){this.stage&&this.stage.requestRender()}processDetach(){this.onDetach(),this.emit("detach")}updateTransitionProperties(t,e){if(this.fadeTransitionEnabled){const e=this._fadeOutResolver||!this.visible?0:this.opacity,r=this.computedOpacity;if(r===e)this.computedVisible=this.visible;else{const n=t*a;this.computedOpacity=r>e?Math.max(e,r-n):Math.min(e,r+n),this.computedVisible=this.computedOpacity>0;const s=e===this.computedOpacity;this.inFadeTransition=!s,s||this.requestRender()}}else this.computedOpacity=this.opacity,this.computedVisible=this.visible}onAttach(){}onDetach(){}doRender(t){}ready(){this._isReady||(this._isReady=!0,this.emit("isReady"),this.requestRender())}}},83302:(t,e,r)=>{"use strict";r.d(e,{mR:()=>V,C$:()=>w,e2:()=>T,wO:()=>x,Mk:()=>C,cM:()=>Z,ws:()=>R,xV:()=>M,UK:()=>U,Yw:()=>F,$_:()=>g,nU:()=>O,$K:()=>b,hj:()=>I,Y8:()=>L});r(95830);var n=r(36544),s=r(32656),i=(r(33655),r(5627),r(8634),r(84570),r(89930),r(31514)),a=(r(51482),r(38035));class o{constructor(){this.color=[0,0,0,0],this.haloColor=[0,0,0,0],this.haloSize=0,this.size=12,this.angle=0,this.offsetX=0,this.offsetY=0,this.hAnchor=0,this.vAnchor=0}acquire(t,e,r,n,s,i,a,o,c){this.color=t,this.haloColor=e,this.haloSize=r,this.size=n,this.angle=s,this.offsetX=i,this.offsetY=a,this.hAnchor=o,this.vAnchor=c}release(){this.color[0]=this.color[1]=this.color[2]=this.color[3]=0,this.haloColor[0]=this.haloColor[1]=this.haloColor[2]=this.haloColor[3]=0,this.haloSize=0,this.size=0,this.angle=0,this.offsetX=0,this.offsetY=0,this.hAnchor=0,this.vAnchor=0}}o.pool=new a.Z(o);const c=n.Z.getLogger("esri.views.2d.engine.webgl.Utils");function u(t){const e={};for(const r of t)e[r.name]=r.strideInBytes;return e}const l=u([{name:"geometry",strideInBytes:32,divisor:0}]),h=u([{name:"geometry",strideInBytes:32,divisor:0}]),f=u([{name:"geometry",strideInBytes:12,divisor:0}]),d=u([{name:"geometry",strideInBytes:36,divisor:0}]),p=u([{name:"geometry",strideInBytes:32,divisor:0}]),v=u([{name:"geometry",strideInBytes:36,divisor:0}]);function g(t,e){switch(t){case i.LW.MARKER:return l;case i.LW.FILL:return e?f:h;case i.LW.LINE:return d;case i.LW.TEXT:return p;case i.LW.LABEL:return v}}const m=["geometry"],_=["geometry"],y=["geometry"],A=["geometry"],S=["geometry"];function E(t){switch(t){case i.LW.MARKER:return m;case i.LW.FILL:return _;case i.LW.LINE:return y;case i.LW.TEXT:return A;case i.LW.LABEL:return S}}function L(t){switch(t%4){case 0:case 2:return 4;case 1:case 3:return 1}}function w(t,e){switch(e%4){case 0:case 2:return new Uint32Array(Math.floor(t*e/4));case 1:case 3:return new Uint8Array(t*e)}}function T(t,e){switch(e%4){case 0:case 2:return new Uint32Array(t);case 1:case 3:return new Uint8Array(t)}}function b(t){return null!=t}function I(t){return"number"==typeof t}function R(t,e){switch(t){case"butt":return 0;case"round":return e?2:1;case"square":return 2;default:return c.error(new s.Z("mapview-invalid-type",`Cap type ${t} is not a valid option. Defaulting to round`)),1}}function M(t){switch(t){case"miter":return 2;case"bevel":return 0;case"round":return 1;default:return c.error(new s.Z("mapview-invalid-type",`Join type ${t} is not a valid option. Defaulting to round`)),1}}function O(t){switch(t){case"opacity":return i.pc.OPACITY;case"color":return i.pc.COLOR;case"rotation":return i.pc.ROTATION;case"size":return i.pc.SIZE;default:return c.error(`Cannot interpret unknown vv: ${t}`),null}}function x(t,e,r,n,s,i,a){for(const e in i){const n=i[e].stride,a=L(n),o=i[e].data,c=r[e].data,u=n*s.vertexCount/a,l=n*t/a,h=n*s.vertexFrom/a;for(let t=0;t<u;++t)c[t+l]=o[t+h]}const o=s.indexCount;for(let r=0;r<o;++r)n[r+e]=a[r+s.indexFrom]-s.vertexFrom+t}const V={geometry:35044};function C(t,e){const r=[];for(let n=0;n<5;++n){const s=E(n),i={};for(const t of s)i[t]={data:e(n,t)};r.push({data:t(n),buffers:i})}return r}function z(t){switch(t){case 5120:case 5121:return 1;case 5122:case 5123:return 2;case 5126:case 5124:case 5125:return 4}}function F(t){switch(t){case 5121:return 1;case 32819:return 2;case 5126:return 4;default:return void c.error(new s.Z("webgl-utils",`Unable to handle type ${t}`))}}function U(t){switch(t){case 5121:return Uint8Array;case 32819:return Uint16Array;case 5126:return Float32Array;default:return void c.error(new s.Z("webgl-utils",`Unable to handle type ${t}`))}}const N=new Map,Z=(t,e)=>{if(!N.has(t)){const r=function(t){const e={};for(const r in t){const n=t[r];let s=0;e[r]=n.map((t=>{const e={...t,normalized:t.normalized||!1,divisor:t.divisor||0,offset:s,stride:0};return s+=t.count*z(t.type),e})),e[r].forEach((t=>t.stride=s))}return e}(e),n={strides:(t=>{const e={};for(const r in t){const n=t[r];e[r]=n.length?n[0].stride:0}return e})(r),bufferLayouts:r,attributes:(t=>{const e={};for(const r in t)for(const n of t[r])e[n.name]=n.location;return e})(e)};N.set(t,n)}return N.get(t)}},51482:(t,e,r)=>{"use strict";r.d(e,{pr:()=>s,t2:()=>i,aH:()=>a});var n=r(53986);function s(t,e=0,r=!1){const n=t[e+3];return t[e+0]*=n,t[e+1]*=n,t[e+2]*=n,r||(t[e+3]*=255),t}function i(t){if(!t)return 0;const{r:e,g:r,b:s,a:i}=t;return(0,n.Jz)(e*i,r*i,s*i,255*i)}function a(t){if(!t)return 0;const[e,r,s,i]=t;return(0,n.Jz)(e*(i/255),r*(i/255),s*(i/255),i)}},31514:(t,e,r)=>{"use strict";var n,s,i,a,o,c,u;r.d(e,{Un:()=>u,pc:()=>a,jx:()=>i,LW:()=>n,X:()=>o,mf:()=>c}),function(t){t[t.FILL=0]="FILL",t[t.LINE=1]="LINE",t[t.MARKER=2]="MARKER",t[t.TEXT=3]="TEXT",t[t.LABEL=4]="LABEL"}(n||(n={})),function(t){t[t.SUCCEEDED=0]="SUCCEEDED",t[t.FAILED_OUT_OF_MEMORY=1]="FAILED_OUT_OF_MEMORY"}(s||(s={})),function(t){t[t.NONE=0]="NONE",t[t.MAP=1]="MAP",t[t.LABEL=2]="LABEL",t[t.LABEL_ALPHA=4]="LABEL_ALPHA",t[t.HITTEST=8]="HITTEST",t[t.HIGHLIGHT=16]="HIGHLIGHT",t[t.CLIP=32]="CLIP",t[t.DEBUG=64]="DEBUG",t[t.NUM_DRAW_PHASES=9]="NUM_DRAW_PHASES"}(i||(i={})),function(t){t[t.SIZE=0]="SIZE",t[t.COLOR=1]="COLOR",t[t.OPACITY=2]="OPACITY",t[t.ROTATION=3]="ROTATION"}(a||(a={})),function(t){t[t.NONE=0]="NONE",t[t.OPACITY=1]="OPACITY",t[t.COLOR=2]="COLOR",t[t.ROTATION=4]="ROTATION",t[t.SIZE_MINMAX_VALUE=8]="SIZE_MINMAX_VALUE",t[t.SIZE_SCALE_STOPS=16]="SIZE_SCALE_STOPS",t[t.SIZE_FIELD_STOPS=32]="SIZE_FIELD_STOPS",t[t.SIZE_UNIT_VALUE=64]="SIZE_UNIT_VALUE"}(o||(o={})),function(t){t[t.MINMAX_TARGETS_OUTLINE=128]="MINMAX_TARGETS_OUTLINE",t[t.SCALE_TARGETS_OUTLINE=256]="SCALE_TARGETS_OUTLINE",t[t.FIELD_TARGETS_OUTLINE=512]="FIELD_TARGETS_OUTLINE",t[t.UNIT_TARGETS_OUTLINE=1024]="UNIT_TARGETS_OUTLINE"}(c||(c={})),function(t){t[t.SPRITE=0]="SPRITE",t[t.GLYPH=1]="GLYPH"}(u||(u={}))},9709:(t,e,r)=>{"use strict";r.d(e,{dk:()=>p,Gq:()=>_,a:()=>g,mE:()=>v,m2:()=>u,qr:()=>m,jj:()=>o,hF:()=>c});var n=r(32656),s=r(31514),i=r(49269);function a(t,e=!1){const r=s.X.SIZE_FIELD_STOPS|s.X.SIZE_MINMAX_VALUE|s.X.SIZE_SCALE_STOPS|s.X.SIZE_UNIT_VALUE,n=(t&(s.mf.FIELD_TARGETS_OUTLINE|s.mf.MINMAX_TARGETS_OUTLINE|s.mf.SCALE_TARGETS_OUTLINE|s.mf.UNIT_TARGETS_OUTLINE))>>>4;return e?r&n:r&~n}function o(t,e,r,n,i){switch(t){case s.LW.FILL:return p.from(e,n);case s.LW.LINE:return g.from(e,r);case s.LW.MARKER:return v.from(e);case s.LW.TEXT:return m.from(e);case s.LW.LABEL:return _.from(e,i);default:throw new Error(`Unable to createMaterialKey for unknown geometryType ${t}`)}}function c(t){switch(u.load(t).geometryType){case s.LW.MARKER:return new v(t);case s.LW.FILL:return new p(t);case s.LW.LINE:return new g(t);case s.LW.TEXT:return new m(t);case s.LW.LABEL:return new _(t)}}class u{constructor(t){this._data=0,this._data=t}static load(t){const e=this.shared;return e.data=t,e}set data(t){this._data=t}get data(){return this._data}get geometryType(){return this.bits(8,11)}set geometryType(t){this.setBits(t,8,11)}get mapAligned(){return!!this.bit(20)}set mapAligned(t){this.setBit(20,t)}get sdf(){return!!this.bit(11)}set sdf(t){this.setBit(11,t)}get pattern(){return!!this.bit(12)}set pattern(t){this.setBit(12,t)}get textureBinding(){return this.bits(0,8)}set textureBinding(t){this.setBits(t,0,8)}get geometryTypeString(){switch(this.geometryType){case s.LW.FILL:return"fill";case s.LW.MARKER:return"marker";case s.LW.LINE:return"line";case s.LW.TEXT:return"text";case s.LW.LABEL:return"label";default:throw new n.Z(`Unable to handle unknown geometryType: ${this.geometryType}`)}}setBit(t,e){const r=1<<t;e?this._data|=r:this._data&=~r}bit(t){return(this._data&1<<t)>>t}setBits(t,e,r){for(let n=e,s=0;n<r;n++,s++)this.setBit(n,0!=(t&1<<s))}bits(t,e){let r=0;for(let n=t,s=0;n<e;n++,s++)r|=this.bit(n)<<s;return r}hasVV(){return!1}setVV(t,e){}getVariation(){return{mapAligned:this.mapAligned,pattern:this.pattern,sdf:this.sdf}}getVariationHash(){return this._data&~(7&this.textureBinding)}}u.shared=new u(0);const l=t=>class extends t{get vvSizeMinMaxValue(){return 0!==this.bit(16)}set vvSizeMinMaxValue(t){this.setBit(16,t)}get vvSizeScaleStops(){return 0!==this.bit(17)}set vvSizeScaleStops(t){this.setBit(17,t)}get vvSizeFieldStops(){return 0!==this.bit(18)}set vvSizeFieldStops(t){this.setBit(18,t)}get vvSizeUnitValue(){return 0!==this.bit(19)}set vvSizeUnitValue(t){this.setBit(19,t)}hasVV(){return super.hasVV()||this.vvSizeMinMaxValue||this.vvSizeScaleStops||this.vvSizeFieldStops||this.vvSizeUnitValue}setVV(t,e){super.setVV(t,e);const r=a(t,e)&t;this.vvSizeMinMaxValue=!!(r&s.X.SIZE_MINMAX_VALUE),this.vvSizeFieldStops=!!(r&s.X.SIZE_FIELD_STOPS),this.vvSizeUnitValue=!!(r&s.X.SIZE_UNIT_VALUE),this.vvSizeScaleStops=!!(r&s.X.SIZE_SCALE_STOPS)}},h=t=>class extends t{get vvRotation(){return 0!==this.bit(15)}set vvRotation(t){this.setBit(15,t)}hasVV(){return super.hasVV()||this.vvRotation}setVV(t,e){super.setVV(t,e),this.vvRotation=!e&&!!(t&s.X.ROTATION)}},f=t=>class extends t{get vvColor(){return 0!==this.bit(13)}set vvColor(t){this.setBit(13,t)}hasVV(){return super.hasVV()||this.vvColor}setVV(t,e){super.setVV(t,e),this.vvColor=!e&&!!(t&s.X.COLOR)}},d=t=>class extends t{get vvOpacity(){return 0!==this.bit(14)}set vvOpacity(t){this.setBit(14,t)}hasVV(){return super.hasVV()||this.vvOpacity}setVV(t,e){super.setVV(t,e),this.vvOpacity=!e&&!!(t&s.X.OPACITY)}};class p extends(f(d(u))){static load(t){const e=this.shared;return e.data=t,e}static from(t,e){const r=this.load(0);return r.geometryType=s.LW.FILL,e?r.dotDensity=!0:r.setVV(t,!1),r.data}getVariation(){return{...super.getVariation(),dotDensity:this.dotDensity,vvColor:this.vvColor,vvOpacity:this.vvOpacity}}get dotDensity(){return!!this.bit(15)}set dotDensity(t){this.setBit(15,t)}}p.shared=new p(0);class v extends(f(d(h(l(u))))){static load(t){const e=this.shared;return e.data=t,e}static from(t){const e=this.load(0);return e.geometryType=s.LW.MARKER,e.setVV(t,!1),e.data}getVariation(){return{...super.getVariation(),vvColor:this.vvColor,vvRotation:this.vvRotation,vvOpacity:this.vvOpacity,vvSizeFieldStops:this.vvSizeFieldStops,vvSizeMinMaxValue:this.vvSizeMinMaxValue,vvSizeScaleStops:this.vvSizeScaleStops,vvSizeUnitValue:this.vvSizeUnitValue}}}v.shared=new v(0);class g extends(f(d(l(u)))){static load(t){const e=this.shared;return e.data=t,e}static from(t,e){const r=this.load(0);return r.geometryType=s.LW.LINE,r.setVV(t,e),r.data}getVariation(){return{...super.getVariation(),vvColor:this.vvColor,vvOpacity:this.vvOpacity,vvSizeFieldStops:this.vvSizeFieldStops,vvSizeMinMaxValue:this.vvSizeMinMaxValue,vvSizeScaleStops:this.vvSizeScaleStops,vvSizeUnitValue:this.vvSizeUnitValue}}}g.shared=new g(0);class m extends(f(d(h(l(u))))){static load(t){const e=this.shared;return e.data=t,e}static from(t){const e=this.load(t);return e.geometryType=s.LW.TEXT,e.setVV(t,!1),e.data}getVariation(){return{...super.getVariation(),vvColor:this.vvColor,vvOpacity:this.vvOpacity,vvRotation:this.vvRotation,vvSizeFieldStops:this.vvSizeFieldStops,vvSizeMinMaxValue:this.vvSizeMinMaxValue,vvSizeScaleStops:this.vvSizeScaleStops,vvSizeUnitValue:this.vvSizeUnitValue}}}m.shared=new m(0);class _ extends(l(u)){static load(t){const e=this.shared;return e.data=t,e}static from(t,e){const r=this.load(0);return r.geometryType=s.LW.LABEL,r.setVV(t,!1),r.mapAligned=!!(0,i.N)(e),r.data}getVariation(){return{...super.getVariation(),vvSizeFieldStops:this.vvSizeFieldStops,vvSizeMinMaxValue:this.vvSizeMinMaxValue,vvSizeScaleStops:this.vvSizeScaleStops,vvSizeUnitValue:this.vvSizeUnitValue}}}_.shared=new _(0)},49269:(t,e,r)=>{"use strict";function n(t){switch(t){case"above-along":case"below-along":case"center-along":return 1;default:return 0}}r.d(e,{N:()=>n})},53986:(t,e,r)=>{"use strict";r.d(e,{UJ:()=>i,Jz:()=>a,Au:()=>s});const n=new Float32Array(1);new Uint32Array(n.buffer);function s(t){return[255&t,(65280&t)>>>8,(16711680&t)>>>16,(4278190080&t)>>>24]}function i(t,e){return 65535&t|e<<16}function a(t,e,r,n){return 255&t|(255&e)<<8|(255&r)<<16|n<<24}},7369:(t,e,r)=>{"use strict";r.d(e,{ZP:()=>z});var n=r(82550),s=r(36544),i=r(32656),a=r(66039),o=r(6897),c=r(67128);class u{constructor(t,e,r){this.strength=t,this.radius=e,this.threshold=r,this.type="bloom"}interpolate(t,e,r){this.strength=v(t.strength,e.strength,r),this.radius=v(t.radius,e.radius,r),this.threshold=v(t.threshold,e.threshold,r)}clone(){return new u(this.strength,this.radius,this.threshold)}}class l{constructor(t){this.radius=t,this.type="blur"}interpolate(t,e,r){this.radius=Math.round(v(t.radius,e.radius,r))}clone(){return new l(this.radius)}}class h{constructor(t,e){this.type=t,this.amount=e,"invert"!==this.type&&"grayscale"!==this.type&&"sepia"!==this.type||(this.amount=Math.min(this.amount,1))}get colorMatrix(){return this._colorMatrix||this._updateMatrix(),this._colorMatrix}interpolate(t,e,r){this.amount=v(t.amount,e.amount,r),this._updateMatrix()}clone(){return new h(this.type,this.amount)}_updateMatrix(){const t=this._colorMatrix||(0,o.c)();switch(this.type){case"brightness":this._colorMatrix=((t,e)=>{const r=(0,c.d)(t,e,0,0,0,0,e,0,0,0,0,e,0,0,0,0,1);return(0,c.b)(r,r)})(t,this.amount);break;case"contrast":this._colorMatrix=((t,e)=>{const r=(0,c.d)(t,e,0,0,.5-.5*e,0,e,0,.5-.5*e,0,0,e,.5-.5*e,0,0,0,1);return(0,c.b)(r,r)})(t,this.amount);break;case"grayscale":this._colorMatrix=((t,e)=>{const r=1-e,n=(0,c.d)(t,.2126+.7874*r,.7152-.7152*r,.0722-.0722*r,0,.2126-.2126*r,.7152+.2848*r,.0722-.0722*r,0,.2126-.2126*r,.7152-.7152*r,.0722+.9278*r,0,0,0,0,1);return(0,c.b)(n,n)})(t,this.amount);break;case"invert":this._colorMatrix=((t,e)=>{const r=1-2*e,n=(0,c.d)(t,r,0,0,e,0,r,0,e,0,0,r,e,0,0,0,1);return(0,c.b)(n,n)})(t,this.amount);break;case"saturate":this._colorMatrix=((t,e)=>{const r=(0,c.d)(t,.213+.787*e,.715-.715*e,.072-.072*e,0,.213-.213*e,.715+.285*e,.072-.072*e,0,.213-.213*e,.715-.715*e,.072+.928*e,0,0,0,0,1);return(0,c.b)(r,r)})(t,this.amount);break;case"sepia":this._colorMatrix=((t,e)=>{const r=1-e,n=(0,c.d)(t,.393+.607*r,.769-.769*r,.189-.189*r,0,.349-.349*r,.686+.314*r,.168-.168*r,0,.272-.272*r,.534-.534*r,.131+.869*r,0,0,0,0,1);return(0,c.b)(n,n)})(t,this.amount)}}}class f{constructor(t,e,r,n){this.offsetX=t,this.offsetY=e,this.blurRadius=r,this.color=n,this.type="drop-shadow"}interpolate(t,e,r){this.offsetX=v(t.offsetX,e.offsetX,r),this.offsetY=v(t.offsetY,e.offsetY,r),this.blurRadius=v(t.blurRadius,e.blurRadius,r),this.color[0]=Math.round(v(t.color[0],e.color[0],r)),this.color[1]=Math.round(v(t.color[1],e.color[1],r)),this.color[2]=Math.round(v(t.color[2],e.color[2],r)),this.color[3]=v(t.color[3],e.color[3],r)}clone(){return new f(this.offsetX,this.offsetY,this.blurRadius,[...this.color])}}class d{constructor(t){this.angle=t,this.type="hue-rotate"}get colorMatrix(){return this._colorMatrix||this._updateMatrix(),this._colorMatrix}interpolate(t,e,r){this.angle=v(t.angle,e.angle,r),this._updateMatrix()}clone(){return new d(this.angle)}_updateMatrix(){const t=this._colorMatrix||(0,o.c)();this._colorMatrix=((t,e)=>{const r=Math.sin(e*Math.PI/180),n=Math.cos(e*Math.PI/180),s=(0,c.d)(t,.213+.787*n-.213*r,.715-.715*n-.715*r,.072-.072*n+.928*r,0,.213-.213*n+.143*r,.715+.285*n+.14*r,.072-.072*n-.283*r,0,.213-.213*n-.787*r,.715-.715*n+.715*r,.072+.928*n+.072*r,0,0,0,0,1);return(0,c.b)(s,s)})(t,this.angle)}}class p{constructor(t){this.amount=t,this.type="opacity",this.amount=Math.min(this.amount,1)}interpolate(t,e,r){this.amount=v(t.amount,e.amount,r)}clone(){return new p(this.amount)}}function v(t,e,r){return t+(e-t)*r}var g=(0,r(71012).c)((function(t){t.exports&&(t.exports=function(){function t(e,r,n,s){this.message=e,this.expected=r,this.found=n,this.location=s,this.name="SyntaxError","function"==typeof Error.captureStackTrace&&Error.captureStackTrace(this,t)}return function(t,e){function r(){this.constructor=t}r.prototype=e.prototype,t.prototype=new r}(t,Error),t.buildMessage=function(t,e){var r={literal:function(t){return'"'+s(t.text)+'"'},class:function(t){var e,r="";for(e=0;e<t.parts.length;e++)r+=t.parts[e]instanceof Array?i(t.parts[e][0])+"-"+i(t.parts[e][1]):i(t.parts[e]);return"["+(t.inverted?"^":"")+r+"]"},any:function(t){return"any character"},end:function(t){return"end of input"},other:function(t){return t.description}};function n(t){return t.charCodeAt(0).toString(16).toUpperCase()}function s(t){return t.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,(function(t){return"\\x0"+n(t)})).replace(/[\x10-\x1F\x7F-\x9F]/g,(function(t){return"\\x"+n(t)}))}function i(t){return t.replace(/\\/g,"\\\\").replace(/\]/g,"\\]").replace(/\^/g,"\\^").replace(/-/g,"\\-").replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,(function(t){return"\\x0"+n(t)})).replace(/[\x10-\x1F\x7F-\x9F]/g,(function(t){return"\\x"+n(t)}))}function a(t){return r[t.type](t)}return"Expected "+function(t){var e,r,n=new Array(t.length);for(e=0;e<t.length;e++)n[e]=a(t[e]);if(n.sort(),n.length>0){for(e=1,r=1;e<n.length;e++)n[e-1]!==n[e]&&(n[r]=n[e],r++);n.length=r}switch(n.length){case 1:return n[0];case 2:return n[0]+" or "+n[1];default:return n.slice(0,-1).join(", ")+", or "+n[n.length-1]}}(t)+" but "+function(t){return t?'"'+s(t)+'"':"end of input"}(e)+" found."},{SyntaxError:t,parse:function(e,r){r=void 0!==r?r:{};var n,s={},i={start:ct},a=ct,o=st("none"),c="none",u=rt("none",!1),l=rt(")",!1),h=",",f=rt(",",!1),d=function(t,e){return e.length>0?function(t,e,r){return[t].concat(function(t,e){return t.map((function(t){return t[e]}))}(e,r))}(t,e,3):[t]},p=st("whitespace"),v=/^[ \t\n\r]/,g=nt([" ","\t","\n","\r"],!1,!1),m=st("function"),_=rt("(",!1),y=st("identifier"),A=/^[a-z\-]/,S=nt([["a","z"],"-"],!1,!1),E=st("percentage"),L=rt("%",!1),w=st("length"),T=rt("px",!1),b=rt("cm",!1),I=rt("mm",!1),R=rt("in",!1),M=rt("pt",!1),O=rt("pc",!1),x=st("angle"),V=rt("deg",!1),C=rt("rad",!1),z="grad",F=rt("grad",!1),U="turn",N=rt("turn",!1),Z=st("number"),B=st("color"),P=rt("#",!1),W=/^[0-9a-fA-F]/,X=nt([["0","9"],["a","f"],["A","F"]],!1,!1),D=/^[+\-]/,q=nt(["+","-"],!1,!1),$=/^[0-9]/,k=nt([["0","9"]],!1,!1),G=rt(".",!1),Y=rt("e",!1),H=0,j=0,K=[{line:1,column:1}],J=0,Q=[],tt=0;if("startRule"in r){if(!(r.startRule in i))throw new Error("Can't start parsing from rule \""+r.startRule+'".');a=i[r.startRule]}function et(){return e.substring(j,H)}function rt(t,e){return{type:"literal",text:t,ignoreCase:e}}function nt(t,e,r){return{type:"class",parts:t,inverted:e,ignoreCase:r}}function st(t){return{type:"other",description:t}}function it(t){var r,n=K[t];if(n)return n;for(r=t-1;!K[r];)r--;for(n={line:(n=K[r]).line,column:n.column};r<t;)10===e.charCodeAt(r)?(n.line++,n.column=1):n.column++,r++;return K[t]=n,n}function at(t,e){var r=it(t),n=it(e);return{start:{offset:t,line:r.line,column:r.column},end:{offset:e,line:n.line,column:n.column}}}function ot(t){H<J||(H>J&&(J=H,Q=[]),Q.push(t))}function ct(){var t;return(t=ut())===s&&(t=function(){var t,e;if(t=[],(e=lt())!==s)for(;e!==s;)t.push(e),e=lt();else t=s;return t}()),t}function ut(){var t,r;return tt++,t=H,ft()!==s?(e.substr(H,4)===c?(r=c,H+=4):(r=s,0===tt&&ot(u)),r!==s&&ft()!==s?(j=t,t=[]):(H=t,t=s)):(H=t,t=s),tt--,t===s&&0===tt&&ot(o),t}function lt(){var t,r,n,i;return t=H,ft()!==s&&(r=function(){var t,r,n;return tt++,t=H,(r=dt())!==s?(40===e.charCodeAt(H)?(n="(",H++):(n=s,0===tt&&ot(_)),n!==s?(j=t,t=r=r):(H=t,t=s)):(H=t,t=s),tt--,t===s&&(r=s,0===tt&&ot(m)),t}())!==s&&ft()!==s?((n=function(){var t,r,n,i,a,o,c,u;if(t=H,(r=ht())!==s){for(n=[],i=H,(a=ft())!==s?(44===e.charCodeAt(H)?(o=h,H++):(o=s,0===tt&&ot(f)),o===s&&(o=null),o!==s&&(c=ft())!==s&&(u=ht())!==s?i=a=[a,o,c,u]:(H=i,i=s)):(H=i,i=s);i!==s;)n.push(i),i=H,(a=ft())!==s?(44===e.charCodeAt(H)?(o=h,H++):(o=s,0===tt&&ot(f)),o===s&&(o=null),o!==s&&(c=ft())!==s&&(u=ht())!==s?i=a=[a,o,c,u]:(H=i,i=s)):(H=i,i=s);n!==s?(j=t,t=r=d(r,n)):(H=t,t=s)}else H=t,t=s;return t}())===s&&(n=null),n!==s&&ft()!==s?(41===e.charCodeAt(H)?(i=")",H++):(i=s,0===tt&&ot(l)),i!==s&&ft()!==s?(j=t,t=function(t,e){return{type:"function",name:t,parameters:e||[]}}(r,n)):(H=t,t=s)):(H=t,t=s)):(H=t,t=s),t}function ht(){var t,e;return t=H,(e=pt())===s&&(e=vt())===s&&(e=gt())===s&&(e=function(){var t,e;return tt++,t=H,ft()!==s&&(e=_t())!==s?(j=t,t=function(t){return{value:t,unit:null}}(e)):(H=t,t=s),tt--,t===s&&0===tt&&ot(Z),t}()),e!==s&&(j=t,e=function(t){return{type:"quantity",value:t.value,unit:t.unit}}(e)),(t=e)===s&&(t=H,(e=mt())!==s&&(j=t,e=function(t){return{type:"color",colorType:t.type,value:t.value}}(e)),t=e),t}function ft(){var t,r;for(tt++,t=[],v.test(e.charAt(H))?(r=e.charAt(H),H++):(r=s,0===tt&&ot(g));r!==s;)t.push(r),v.test(e.charAt(H))?(r=e.charAt(H),H++):(r=s,0===tt&&ot(g));return tt--,t===s&&(r=s,0===tt&&ot(p)),t}function dt(){var t,r,n;if(tt++,t=H,r=[],A.test(e.charAt(H))?(n=e.charAt(H),H++):(n=s,0===tt&&ot(S)),n!==s)for(;n!==s;)r.push(n),A.test(e.charAt(H))?(n=e.charAt(H),H++):(n=s,0===tt&&ot(S));else r=s;return r!==s&&(j=t,r=et()),tt--,(t=r)===s&&(r=s,0===tt&&ot(y)),t}function pt(){var t,r,n;return tt++,t=H,ft()!==s&&(r=_t())!==s?(37===e.charCodeAt(H)?(n="%",H++):(n=s,0===tt&&ot(L)),n!==s?(j=t,t=function(t){return{value:t,unit:"%"}}(r)):(H=t,t=s)):(H=t,t=s),tt--,t===s&&0===tt&&ot(E),t}function vt(){var t,r,n;return tt++,t=H,ft()!==s&&(r=_t())!==s?("px"===e.substr(H,2)?(n="px",H+=2):(n=s,0===tt&&ot(T)),n!==s?(j=t,t=function(t){return{value:t,unit:"px"}}(r)):(H=t,t=s)):(H=t,t=s),t===s&&(t=H,ft()!==s&&(r=_t())!==s?("cm"===e.substr(H,2)?(n="cm",H+=2):(n=s,0===tt&&ot(b)),n!==s?(j=t,t=function(t){return{value:t,unit:"cm"}}(r)):(H=t,t=s)):(H=t,t=s),t===s&&(t=H,ft()!==s&&(r=_t())!==s?("mm"===e.substr(H,2)?(n="mm",H+=2):(n=s,0===tt&&ot(I)),n!==s?(j=t,t=function(t){return{value:t,unit:"mm"}}(r)):(H=t,t=s)):(H=t,t=s),t===s&&(t=H,ft()!==s&&(r=_t())!==s?("in"===e.substr(H,2)?(n="in",H+=2):(n=s,0===tt&&ot(R)),n!==s?(j=t,t=function(t){return{value:t,unit:"in"}}(r)):(H=t,t=s)):(H=t,t=s),t===s&&(t=H,ft()!==s&&(r=_t())!==s?("pt"===e.substr(H,2)?(n="pt",H+=2):(n=s,0===tt&&ot(M)),n!==s?(j=t,t=function(t){return{value:t,unit:"pt"}}(r)):(H=t,t=s)):(H=t,t=s),t===s&&(t=H,ft()!==s&&(r=_t())!==s?("pc"===e.substr(H,2)?(n="pc",H+=2):(n=s,0===tt&&ot(O)),n!==s?(j=t,t=function(t){return{value:t,unit:"pc"}}(r)):(H=t,t=s)):(H=t,t=s)))))),tt--,t===s&&0===tt&&ot(w),t}function gt(){var t,r,n;return tt++,t=H,(r=_t())!==s?("deg"===e.substr(H,3)?(n="deg",H+=3):(n=s,0===tt&&ot(V)),n!==s?(j=t,t=r=function(t){return{value:t,unit:"deg"}}(r)):(H=t,t=s)):(H=t,t=s),t===s&&(t=H,(r=_t())!==s?("rad"===e.substr(H,3)?(n="rad",H+=3):(n=s,0===tt&&ot(C)),n!==s?(j=t,t=r=function(t){return{value:t,unit:"rad"}}(r)):(H=t,t=s)):(H=t,t=s),t===s&&(t=H,(r=_t())!==s?(e.substr(H,4)===z?(n=z,H+=4):(n=s,0===tt&&ot(F)),n!==s?(j=t,t=r=function(t){return{value:t,unit:"grad"}}(r)):(H=t,t=s)):(H=t,t=s),t===s&&(t=H,(r=_t())!==s?(e.substr(H,4)===U?(n=U,H+=4):(n=s,0===tt&&ot(N)),n!==s?(j=t,t=r=function(t){return{value:t,unit:"turn"}}(r)):(H=t,t=s)):(H=t,t=s)))),tt--,t===s&&(r=s,0===tt&&ot(x)),t}function mt(){var t,r,n,i;if(tt++,t=H,35===e.charCodeAt(H)?(r="#",H++):(r=s,0===tt&&ot(P)),r!==s){if(n=[],W.test(e.charAt(H))?(i=e.charAt(H),H++):(i=s,0===tt&&ot(X)),i!==s)for(;i!==s;)n.push(i),W.test(e.charAt(H))?(i=e.charAt(H),H++):(i=s,0===tt&&ot(X));else n=s;n!==s?(j=t,t=r={type:"hex",value:et()}):(H=t,t=s)}else H=t,t=s;return t===s&&(t=H,(r=lt())!==s&&(j=t,r=function(t){return{type:"function",value:t}}(r)),(t=r)===s&&(t=H,(r=dt())!==s&&(j=t,r={type:"named",value:et()}),t=r)),tt--,t===s&&(r=s,0===tt&&ot(B)),t}function _t(){var t,r,n,i,a,o,c,u;if(t=H,D.test(e.charAt(H))?(r=e.charAt(H),H++):(r=s,0===tt&&ot(q)),r===s&&(r=null),r!==s){for(n=H,i=[],$.test(e.charAt(H))?(a=e.charAt(H),H++):(a=s,0===tt&&ot(k));a!==s;)i.push(a),$.test(e.charAt(H))?(a=e.charAt(H),H++):(a=s,0===tt&&ot(k));if(i!==s)if(46===e.charCodeAt(H)?(a=".",H++):(a=s,0===tt&&ot(G)),a!==s){if(o=[],$.test(e.charAt(H))?(c=e.charAt(H),H++):(c=s,0===tt&&ot(k)),c!==s)for(;c!==s;)o.push(c),$.test(e.charAt(H))?(c=e.charAt(H),H++):(c=s,0===tt&&ot(k));else o=s;o!==s?n=i=[i,a,o]:(H=n,n=s)}else H=n,n=s;else H=n,n=s;if(n===s)if(n=[],$.test(e.charAt(H))?(i=e.charAt(H),H++):(i=s,0===tt&&ot(k)),i!==s)for(;i!==s;)n.push(i),$.test(e.charAt(H))?(i=e.charAt(H),H++):(i=s,0===tt&&ot(k));else n=s;if(n!==s){if(i=H,101===e.charCodeAt(H)?(a="e",H++):(a=s,0===tt&&ot(Y)),a!==s)if(D.test(e.charAt(H))?(o=e.charAt(H),H++):(o=s,0===tt&&ot(q)),o===s&&(o=null),o!==s){if(c=[],$.test(e.charAt(H))?(u=e.charAt(H),H++):(u=s,0===tt&&ot(k)),u!==s)for(;u!==s;)c.push(u),$.test(e.charAt(H))?(u=e.charAt(H),H++):(u=s,0===tt&&ot(k));else c=s;c!==s?i=a=[a,o,c]:(H=i,i=s)}else H=i,i=s;else H=i,i=s;i===s&&(i=null),i!==s?(j=t,t=r=parseFloat(et())):(H=t,t=s)}else H=t,t=s}else H=t,t=s;return t}if((n=a())!==s&&H===e.length)return n;throw n!==s&&H<e.length&&ot({type:"end"}),function(e,r,n){return new t(t.buildMessage(e,r),e,r,n)}(Q,J<e.length?e.charAt(J):null,J<e.length?at(J,J+1):at(J,J))}}}())}));function m(t){let e;try{e=t?g.parse(t):[]}catch(e){return{input:t,parsedFunctions:[],effects:[],error:new i.Z("effect:invalid-syntax","Invalid effect syntax",{input:t,error:e})}}const r={input:t,parsedFunctions:e,effects:[],error:null};try{for(const t of e)r.effects.push(_(t))}catch(t){r.effects.length=0,r.error=t}return r}function _(t){try{switch(t.name){case"grayscale":case"sepia":case"saturate":case"invert":case"brightness":case"contrast":return function(t){let e=1;return y(t.parameters,1),1===t.parameters.length&&(e=w(t.parameters[0])),new h(t.name,e)}(t);case"opacity":return function(t){let e=1;return y(t.parameters,1),1===t.parameters.length&&(e=w(t.parameters[0])),new p(e)}(t);case"hue-rotate":return function(t){let e=0;var r;return y(t.parameters,1),1===t.parameters.length&&(function(t){if("quantity"!==t.type||(0!==t.value||null!==t.unit)&&null==E[t.unit])throw new i.Z("effect:type-error",`Expected <angle>, Actual: ${A(t)}`,{term:t})}(r=t.parameters[0]),e=r.value*E[r.unit]||0),new d(e)}(t);case"blur":return function(t){let e=0;return y(t.parameters,1),1===t.parameters.length&&(e=T(t.parameters[0]),S(e,t.parameters[0])),new l(e)}(t);case"drop-shadow":return function(t){const e=[];let r;for(const n of t.parameters)if("color"===n.type){if(e.length&&Object.freeze(e),r)throw new i.Z("effect:type-error","Accepts only one color",{});r=b(n)}else{const t=T(n);if(Object.isFrozen(e))throw new i.Z("effect:type-error","<length> parameters not consecutive",{lengths:e});e.push(t),3===e.length&&S(t,n)}if(e.length<2||e.length>3)throw new i.Z("effect:type-error",`Expected <length>{2,3}, Actual: <length>{${e.length}}`,{lengths:e});return new f(e[0],e[1],e[2]||0,r||I("black"))}(t);case"bloom":return function(t){let e=1,r=0,n=0;return y(t.parameters,3),t.parameters[0]&&(e=w(t.parameters[0])),t.parameters[1]&&(r=T(t.parameters[1]),S(r,t.parameters[1])),t.parameters[2]&&(n=w(t.parameters[2])),new u(e,r,n)}(t)}}catch(e){throw e.details.filter=t,e}throw new i.Z("effect:unknown-effect",`Effect '${t.name}' is not supported`,{effect:t})}function y(t,e){if(t.length>e)throw new i.Z("effect:type-error",`Function supports up to ${e} parameters, Actual: ${t.length}`,{parameters:t})}function A(t){return"color"===t.type?"<color>":L[t.unit]?"<length>":E[t.unit]?"<angle>":"%"===t.unit?"<percentage>":"<double>"}function S(t,e){if(t<0)throw new i.Z("effect:type-error",`Negative values are not allowed, Actual: ${t}`,{term:e})}const E={deg:1,grad:.9,rad:180/Math.PI,turn:360},L={px:1,cm:96/2.54,mm:96/2.54/10,in:96,pc:16,pt:96/73};function w(t){!function(t){if("quantity"!==t.type||null!==t.unit&&"%"!==t.unit)throw new i.Z("effect:type-error",`Expected <double> or <percentage>, Actual: ${A(t)}`,{term:t})}(t);const e=t.value;return S(e,t),"%"===t.unit?.01*e:e}function T(t){return function(t){if("quantity"!==t.type||(0!==t.value||null!==t.unit)&&null==L[t.unit])throw new i.Z("effect:type-error",`Expected <length>, Actual: ${A(t)}`,{term:t})}(t),t.value*L[t.unit]||0}function b(t){switch(t.colorType){case"hex":return(0,a.rW)(t.value);case"named":return I(t.value);case"function":return function(t){if(y(t.parameters,4),R.test(t.name))return[w(t.parameters[0]),w(t.parameters[1]),w(t.parameters[2]),t.parameters[3]?w(t.parameters[3]):1];if(M.test(t.name))return(0,a.B7)(function(t){return function(t){if("quantity"!==t.type||null!==t.unit)throw new i.Z("effect:type-error",`Expected <double>, Actual: ${A(t)}`,{term:t})}(t),S(t.value,t),t.value}(t.parameters[0]),w(t.parameters[1]),w(t.parameters[2]),t.parameters[3]?w(t.parameters[3]):1);throw new i.Z("effect:syntax-error",`Invalid color function '${t.name}'`,{colorFunction:t})}(t.value)}}function I(t){const e=(0,a.VL)(t);if(!e)throw new i.Z("effect:unknown-color",`color '${t}' isn't valid`,{namedColor:t});return e}const R=/^rgba?/i,M=/^hsla?/i;function O(t){switch(t.type){case"grayscale":case"sepia":case"invert":return new h(t.type,0);case"saturate":case"brightness":case"contrast":return new h(t.type,1);case"opacity":return new p(1);case"hue-rotate":return new d(0);case"blur":return new l(0);case"drop-shadow":return new f(0,0,0,[...(0,a.h$)("transparent")]);case"bloom":return new u(0,0,0)}}function x(t,e){const r=t.length>e.length?t:e;return(t.length>e.length?e:t).every(((t,e)=>t.type===r[e].type))}function V(t,e){const r=t.length>e.length?t:e,n=t.length>e.length?e:t;for(let t=n.length;t<r.length;t++)n.push(O(r[t]))}function C(t,e,r){return t+(e-t)*r}const z=class{constructor(t=200){this.duration=t,this._from=null,this._to=null,this._final=null,this._current=[],this._time=0,this._effect="",this._effects=[],this._scale=0}get effect(){return this._effect}set effect(t){if(t=t||"",this._effect===t)return;this._effect=t;const e=function(t){if(!t)return[];if("string"==typeof t){const e=m(t);return e.error?e.error:[{scale:-1,effects:e.effects}]}const e=[];for(const r of t){if(!isFinite(r.scale)||r.scale<=0)return new i.Z("effect:invalid-scale","scale must be finite and greater than 0",{stop:r});const t=m(r.value);if(t.error)return t.error;e.push({scale:r.scale,effects:t.effects})}e.sort(((t,e)=>e.effects.length-t.effects.length));for(let t=0;t<e.length-1;t++){if(!x(e[t].effects,e[t+1].effects))return new i.Z("effect:interpolation-impossible","Cannot interpolate by scale between 2 lists of mixed effects",{a:e[t].effects,b:e[t+1].effects});V(e[t].effects,e[t+1].effects)}return e.sort(((t,e)=>e.scale-t.scale)),e}(t);Array.isArray(e)?this._transitionTo(e):(this._transitionTo([]),s.Z.getLogger("esri.views.layers.effects.EffectList").warn("Invalid Effect",{effect:t,error:e}))}get hasEffects(){return this.transitioning||!!this._effects.length}get effects(){return this._effects}get scale(){return this._scale}get transitioning(){return null!==this._to}transitionStep(t,e){this._applyTimeTransition(t),this._updateForScale(e)}_transitionTo(t){this.scale>0&&function(t,e,r){var n,s,i,a;return null==(n=t[0])||!n.effects||null==(s=e[0])||!s.effects||!((-1===(null==(i=t[0])?void 0:i.scale)||-1===(null==(a=e[0])?void 0:a.scale))&&(t.length>1||e.length>1)&&r<=0)&&x(t[0].effects,e[0].effects)}(this._current,t,this.scale)?(this._final=t,this._to=(0,n.d9)(t),function(t,e,r){var n,s;const i=t.length>e.length?t:e,a=t.length>e.length?e:t,o=a[a.length-1],c=null!=(n=null==o?void 0:o.scale)?n:r,u=null!=(s=null==o?void 0:o.effects)?s:[];for(let t=a.length;t<i.length;t++)a.push({scale:c,effects:[...u]});for(let t=0;t<i.length;t++)a[t].scale=-1===a[t].scale?r:a[t].scale,i[t].scale=-1===i[t].scale?r:i[t].scale,V(a[t].effects,i[t].effects)}(this._current,this._to,this.scale),this._from=(0,n.d9)(this._current),this._time=0):(this._from=this._to=this._final=null,this._current=t),this._effects=this._current[0]?(0,n.d9)(this._current[0].effects):[]}_applyTimeTransition(t){if(!this._to)return;this._time+=t;const e=Math.min(1,this._time/this.duration);for(let t=0;t<this._current.length;t++){const r=this._current[t],n=this._from[t],s=this._to[t];r.scale=C(n.scale,s.scale,e);for(let t=0;t<r.effects.length;t++){const i=r.effects[t],a=n.effects[t],o=s.effects[t];i.interpolate(a,o,e)}}1===e&&(this._current=this._final,this._effects=this._current[0]?(0,n.d9)(this._current[0].effects):[],this._from=this._to=this._final=null)}_updateForScale(t){if(0===this._current.length)return;this._scale=t;const e=this._current,r=this._current.length-1;let n,s,i=1;if(1===e.length||t>=e[0].scale)s=n=e[0].effects;else if(t<=e[r].scale)s=n=e[r].effects;else for(let a=0;a<r;a++){const r=e[a],o=e[a+1];if(r.scale>=t&&o.scale<=t){i=(t-r.scale)/(o.scale-r.scale),n=r.effects,s=o.effects;break}}for(let t=0;t<this._effects.length;t++)this._effects[t].interpolate(n[t],s[t],i)}}}}]);
//# sourceMappingURL=4136.js.map