(self.webpackChunkinspection_scheduler=self.webpackChunkinspection_scheduler||[]).push([[3296],{29720:(e,t,i)=>{"use strict";i.d(t,{e:()=>l});i(95830);var s=i(98501),r=i(55955),n=i(27851),a=(i(5627),i(8634)),o=(i(84570),i(89930),i(56291)),h=i(64796);function d(e,t,i){const s={target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071};return t&&i&&(s.width=t,s.height=i),new a.Z(e,s)}class l extends o.s{constructor(e=null,t=!0){super(),this.requestRenderOnSourceChangedEnabled=t,this._textureInvalidated=!0,this.stencilRef=0,this.coordScale=[1,1],this._height=void 0,this.pixelRatio=1,this.resolution=0,this.rotation=0,this._source=null,this._width=void 0,this.x=0,this.y=0,this.transforms={dvs:(0,r.c)()},this.source=e,this.requestRender=this.requestRender.bind(this)}destroy(){this._texture&&(this._texture.dispose(),this._texture=null)}get isSourceScaled(){return this.width!==this.sourceWidth||this.height!==this.sourceHeight}get height(){return void 0!==this._height?this._height:this.sourceHeight}set height(e){this._height=e}get source(){return this._source}set source(e){this._source=e,this.invalidateTexture()}get sourceHeight(){return this._source instanceof HTMLImageElement?this._source.naturalHeight:this._source.height}get sourceWidth(){return this._source instanceof HTMLImageElement?this._source.naturalWidth:this._source.width}get width(){return void 0!==this._width?this._width:this.sourceWidth}set width(e){this._width=e}beforeRender(e){super.beforeRender(e),this.updateTexture(e)}invalidateTexture(){this._textureInvalidated||(this._textureInvalidated=!0,this.requestRenderOnSourceChangedEnabled&&this.requestRender())}setTransform(e){const t=(0,s.i)(this.transforms.dvs),[i,r]=e.toScreenNoRotation([0,0],this.x,this.y),a=this.resolution/this.pixelRatio/e.resolution,o=a*this.width,h=a*this.height,d=Math.PI*this.rotation/180;(0,s.a)(t,t,(0,n.f)(i,r)),(0,s.a)(t,t,(0,n.f)(o/2,h/2)),(0,s.r)(t,t,-d),(0,s.a)(t,t,(0,n.f)(-o/2,-h/2)),(0,s.j)(t,t,(0,n.f)(o,h)),(0,s.m)(this.transforms.dvs,e.displayViewMat3,t)}setSamplingProfile(e){this._texture&&(e.mips&&!this._texture.descriptor.hasMipmap&&this._texture.generateMipmap(),this._texture.setSamplingMode(e.samplingMode))}bind({context:e},t){this._texture&&e.bindTexture(this._texture,t)}updateTexture({context:e}){var t;if(!this.stage)return null==(t=this._texture)||t.dispose(),void(this._texture=null);if(!this._textureInvalidated)return;this._textureInvalidated=!1,this._texture||(this.source?this._texture=d(e,this.sourceWidth,this.sourceHeight):this._texture=d(e));const i=this.source;if(i){if(this._texture.resize(this.sourceWidth,this.sourceHeight),function(e){return e&&"render"in e}(i))if(i instanceof h.Z){const e=i.getRenderedRasterPixels();this._texture.setData(e.renderedRasterPixels)}else this._texture.setData(function(e){const t=document.createElement("canvas");return t.width=e.width,t.height=e.height,e.render(t.getContext("2d")),t}(i));else(function(e){return e&&!("render"in e)})(i)&&this._texture.setData(i);this.ready()}else this._texture.setData(null)}onAttach(){this.invalidateTexture()}onDetach(){this.invalidateTexture()}}},28511:(e,t,i)=>{"use strict";i.d(t,{c:()=>a});var s=i(31514),r=i(32825),n=i(23956);class a extends n.Z{prepareRenderPasses(e){const t=e.registerRenderPass({name:"bitmap",brushes:[r.U.bitmap],target:()=>this.children,drawPhase:s.jx.MAP});return[...super.prepareRenderPasses(e),t]}}},64796:(e,t,i)=>{"use strict";i.d(t,{Z:()=>s});const s=class{constructor(e,t,i){this.pixelBlock=e,this.extent=t,this.originalPixelBlock=i}get width(){return this.pixelBlock?this.pixelBlock.width:0}get height(){return this.pixelBlock?this.pixelBlock.height:0}render(e){const t=this.pixelBlock;if(!t)return;const i=this.filter({pixelBlock:t}),s=i.pixelBlock.getAsRGBA(),r=e.createImageData(i.pixelBlock.width,i.pixelBlock.height);r.data.set(s),e.putImageData(r,0,0)}getRenderedRasterPixels(){const e=this.filter({pixelBlock:this.pixelBlock});return{width:e.pixelBlock.width,height:e.pixelBlock.height,renderedRasterPixels:new Uint8Array(e.pixelBlock.getAsRGBA().buffer)}}}},81558:(e,t,i)=>{"use strict";i.d(t,{y:()=>O});var s=i(56140),r=(i(95830),i(36544),i(68055),i(79881)),n=i(87566),a=(i(10923),i(57002),i(86035),i(83477)),o=i(32105),h=i(80621),d=i(58385);let l=class extends d.wq{};l=(0,s._)([(0,n.j)("esri.views.layers.support.ClipArea")],l);const p=l;var u;let c=u=class extends p{constructor(){super(...arguments),this.type="rect",this.left=null,this.right=null,this.top=null,this.bottom=null}clone(){return new u({left:this.left,right:this.right,top:this.top,bottom:this.bottom})}get version(){return(this._get("version")||0)+1}};(0,s._)([(0,r.Cb)({type:[Number,String],json:{write:!0}})],c.prototype,"left",void 0),(0,s._)([(0,r.Cb)({type:[Number,String],json:{write:!0}})],c.prototype,"right",void 0),(0,s._)([(0,r.Cb)({type:[Number,String],json:{write:!0}})],c.prototype,"top",void 0),(0,s._)([(0,r.Cb)({type:[Number,String],json:{write:!0}})],c.prototype,"bottom",void 0),(0,s._)([(0,r.Cb)({readOnly:!0,dependsOn:["left","right","top","bottom"]})],c.prototype,"version",null),c=u=(0,s._)([(0,n.j)("esri.views.layers.support.ClipRect")],c);const g=c;var y,v=i(17149),_=i(39718),x=i(52937),m=i(53817),b=i(56885);i(36348);const f={base:_.Z,key:"type",typeMap:{extent:x.Z,polygon:m.Z}};let w=y=class extends p{constructor(){super(...arguments),this.type="geometry",this.geometry=null}get version(){return(this._get("version")||0)+1}clone(){return new y({geometry:this.geometry.clone()})}};(0,s._)([(0,r.Cb)({types:f,json:{read:b.im,write:!0}})],w.prototype,"geometry",void 0),(0,s._)([(0,r.Cb)({readOnly:!0,dependsOn:["geometry"]})],w.prototype,"version",null),w=y=(0,s._)([(0,n.j)("esri.views.layers.support.Geometry")],w);const R=w;let C=class extends p{constructor(){super(...arguments),this.type="path",this.path=[]}get version(){return(this._get("version")||0)+1}};(0,s._)([(0,r.Cb)({type:[[[Number]]],json:{write:!0}})],C.prototype,"path",void 0),(0,s._)([(0,r.Cb)({readOnly:!0,dependsOn:["path"]})],C.prototype,"version",null),C=(0,s._)([(0,n.j)("esri.views.layers.support.Path")],C);const M=C,S=a.Z.ofType({key:"type",base:p,typeMap:{rect:g,path:M,geometry:R}}),O=e=>{let t=class extends e{constructor(){super(...arguments),this.clips=new S,this.moving=!1,this.attached=!1,this.lastUpdateId=-1,this.updateRequested=!1}initialize(){var e;this.container||(this.container=new v.W),this.container.fadeTransitionEnabled=!0,this.container.opacity=0,this.container.clips=this.clips,this.handles.add([(0,h.init)(this,"suspended",(e=>{this.container&&(this.container.visible=!e),this.view&&!e&&this.updateRequested&&this.view.requestUpdate()}),!0),(0,h.init)(this,["layer.opacity","container"],(()=>{var e,t;this.container&&(this.container.opacity=null!=(e=null==(t=this.layer)?void 0:t.opacity)?e:1)}),!0),(0,h.init)(this,["layer.blendMode"],(e=>{this.container&&(this.container.blendMode=e)}),!0),(0,h.init)(this,["layer.effect"],(e=>{this.container&&(this.container.effect=e)}),!0),this.clips.on("change",(()=>{this.container.clips=this.clips,this.notifyChange("clips")}))]),null!=(e=this.view)&&e.whenLayerView?this.view.whenLayerView(this.layer).then((e=>{e!==this||this.attached||this.destroyed||(this.attach(),this.requestUpdate(),this.attached=!0)}),(()=>{})):this.when().then((()=>{this.attached||this.destroyed||(this.attach(),this.requestUpdate(),this.attached=!0)}),(()=>{}))}destroy(){this.attached&&(this.detach(),this.attached=!1),this.handles.remove("initialize"),this.updateRequested=!1}get updating(){return!this.attached||!this.suspended&&(this.updateRequested||this.isUpdating())}isVisibleAtScale(e){let t=!0;const i=this.layer,s=i.minScale,r=i.maxScale;if(null!=s&&null!=r){let i=!s,n=!r;!i&&e<=s&&(i=!0),!n&&e>=r&&(n=!0),t=i&&n}return t}requestUpdate(){this.updateRequested||(this.updateRequested=!0,this.suspended||this.view.requestUpdate())}processUpdate(e){!this.isFulfilled()||this.isResolved()?(this._set("updateParameters",e),this.updateRequested&&!this.suspended&&(this.updateRequested=!1,this.update(e))):this.updateRequested=!1}isUpdating(){return!1}isRendering(){return!1}canResume(){return!!super.canResume()&&this.isVisibleAtScale(this.view.scale)}};return(0,s._)([(0,r.Cb)({type:S,set(e){const t=(0,o.Z)(e,this._get("clips"),S);this._set("clips",t)}})],t.prototype,"clips",void 0),(0,s._)([(0,r.Cb)()],t.prototype,"moving",void 0),(0,s._)([(0,r.Cb)()],t.prototype,"attached",void 0),(0,s._)([(0,r.Cb)()],t.prototype,"container",void 0),(0,s._)([(0,r.Cb)({dependsOn:["view.scale","layer.minScale","layer.maxScale"]})],t.prototype,"suspended",void 0),(0,s._)([(0,r.Cb)({readOnly:!0})],t.prototype,"updateParameters",void 0),(0,s._)([(0,r.Cb)()],t.prototype,"updateRequested",void 0),(0,s._)([(0,r.Cb)({dependsOn:["attached","updateRequested","suspended"]})],t.prototype,"updating",null),(0,s._)([(0,r.Cb)()],t.prototype,"view",void 0),t=(0,s._)([(0,n.j)("esri.views.2d.layers.LayerView2D")],t),t}},81186:(e,t,i)=>{"use strict";i.d(t,{Z:()=>f});var s=i(56140),r=(i(95830),i(36544),i(68055),i(79881)),n=i(87566),a=(i(10923),i(57002),i(86035),i(39105)),o=i(79152),h=i(27780),d=i(52937),l=i(50897),p=i(40920),u=i(5201),c=i(46666);const g=Math.PI/180;function y(e,t){const i=t.rotation*g,s=Math.abs(Math.cos(i)),r=Math.abs(Math.sin(i)),[n,a]=t.size;return e[0]=Math.round(a*r+n*s),e[1]=Math.round(a*s+n*r),e}var v=i(29720);const _=(0,l.Ue)(),x=[0,0],m=new u.Z(0,0,0,0);let b=class extends o.default{constructor(e){super(e),this._imagePromise=null,this.hidpi=false,this.imageMaxWidth=2048,this.imageMaxHeight=2048,this.imageRotationSupported=false,this.imageNormalizationSupported=false,this.update=(0,a.Ds)((async(e,t)=>{const i=e.state,s=(0,h.C5)(i.spatialReference),r=this.hidpi?e.pixelRatio:1;if(!e.stationary||this.destroyed)return;this.imageRotationSupported?(x[0]=i.size[0],x[1]=i.size[1]):y(x,i);const n=Math.floor(x[0]*r)>this.imageMaxWidth||Math.floor(x[1]*r)>this.imageMaxHeight,a=s&&(i.extent.xmin<s.valid[0]||i.extent.xmax>s.valid[1]),o=!this.imageNormalizationSupported&&a,d=!n&&!o,l=this.imageRotationSupported?i.rotation:0;if(d)this._imagePromise=this._singleExport(i,x,l,r,t);else{let e=Math.min(this.imageMaxWidth,this.imageMaxHeight);o&&(e=Math.min(i.worldScreenWidth,e)),this._imagePromise=this._tiledExport(i,e,l,r,t)}return this._imagePromise.then((async e=>{this._imagePromise=null,await Promise.all(e.map((e=>(this.container.addChild(e),e.fadeIn()))));for(const t of this.container.children)e.includes(t)||t.fadeOut().then((()=>{this.container.removeChild(t)}))})).catch((e=>{throw this._imagePromise=null,e}))}),5e3)}destroy(){}get updating(){return null!==this._imagePromise}updateExports(e){for(const t of this.container.children){if(!t.visible||!t.stage)return;e(t)?console.error("ExportStrategy.updateExports doesn't support promise yet"):(t.invalidateTexture(),t.requestRender())}}_export(e,t,i,s,r,n){return(0,a.DB)().then((()=>this.fetchSource(e,Math.floor(t*r),Math.floor(i*r),{rotation:s,pixelRatio:r,signal:n}))).then((i=>{const n=new v.e(i);return n.x=e.xmin,n.y=e.ymax,n.resolution=e.width/t,n.rotation=s,n.pixelRatio=r,n}))}_singleExport(e,t,i,s,r){!function(e,t,i,s){const[r,n]=t,[a,o]=s,h=.5*i;e[0]=r-h*a,e[1]=n-h*o,e[2]=r+h*a,e[3]=n+h*o}(_,e.center,e.resolution,t);const n=new d.Z(_[0],_[1],_[2],_[3],e.spatialReference);return this._export(n,t[0],t[1],i,s,r).then((e=>[e]))}_tiledExport(e,t,i,s,r){const n=p.Z.create({size:t,spatialReference:e.spatialReference,scales:[e.scale]}),o=new c.Z(n),h=o.getTileCoverage(e);if(!h)return null;const l=[];return h.forEach(((n,a,h,p)=>{m.set(n,a,h,p),o.getTileBounds(_,m);const u=new d.Z(_[0],_[1],_[2],_[3],e.spatialReference);l.push(this._export(u,t,t,i,s,r))})),(0,a.$6)(l)}};(0,s._)([(0,r.Cb)()],b.prototype,"_imagePromise",void 0),(0,s._)([(0,r.Cb)()],b.prototype,"container",void 0),(0,s._)([(0,r.Cb)()],b.prototype,"fetchSource",void 0),(0,s._)([(0,r.Cb)()],b.prototype,"hidpi",void 0),(0,s._)([(0,r.Cb)()],b.prototype,"imageMaxWidth",void 0),(0,s._)([(0,r.Cb)()],b.prototype,"imageMaxHeight",void 0),(0,s._)([(0,r.Cb)()],b.prototype,"imageRotationSupported",void 0),(0,s._)([(0,r.Cb)()],b.prototype,"imageNormalizationSupported",void 0),(0,s._)([(0,r.Cb)()],b.prototype,"requestUpdate",void 0),(0,s._)([(0,r.Cb)({dependsOn:["_imagePromise"]})],b.prototype,"updating",null),b=(0,s._)([(0,n.j)("esri.views.2d.layers.support.ExportStrategy")],b);const f=b},48164:(e,t,i)=>{"use strict";i.d(t,{Z:()=>c});var s=i(56140),r=(i(95830),i(36544)),n=(i(68055),i(79881)),a=i(87566),o=(i(10923),i(57002),i(86035),i(79152)),h=i(35470),d=i(35326),l=i(75044),p=i(77204);let u=class extends((0,p.p)((0,d.I)((0,l.v)(h.Z.EventedMixin(o.default))))){constructor(e){super(e),this.layer=null,this.parent=null}initialize(){this.when().catch((e=>{if("layerview:create-error"!==e.name){const t=this.layer&&this.layer.id||"no id",i=this.layer&&this.layer.title||"no title";throw r.Z.getLogger(this.declaredClass).error("#resolve()",`Failed to resolve layer view (layer title: '${i}', id: '${t}')`,e),e}}))}get fullOpacity(){const e=e=>null==e?1:e;return e(this.get("layer.opacity"))*e(this.get("parent.fullOpacity"))}get suspended(){return!this.canResume()}get suspendInfo(){return this.getSuspendInfo()}get legendEnabled(){return!this.suspended&&!0===this.layer.legendEnabled}get updating(){return!!(this.updatingHandles&&this.updatingHandles.updating||this.isUpdating())}get visible(){return!0===this.get("layer.visible")}set visible(e){void 0!==e?this._override("visible",e):this._clearOverride("visible")}canResume(){return!this.get("parent.suspended")&&this.get("view.ready")&&this.get("layer.loaded")&&this.visible||!1}getSuspendInfo(){const e=this.parent&&this.parent.suspended?this.parent.suspendInfo:{};return this.view&&this.view.ready||(e.viewNotReady=!0),this.layer&&this.layer.loaded||(e.layerNotLoaded=!0),this.visible||(e.layerInvisible=!0),e}isUpdating(){return!1}};(0,s._)([(0,n.Cb)({dependsOn:["layer.opacity","parent.fullOpacity"]})],u.prototype,"fullOpacity",null),(0,s._)([(0,n.Cb)()],u.prototype,"layer",void 0),(0,s._)([(0,n.Cb)()],u.prototype,"parent",void 0),(0,s._)([(0,n.Cb)({readOnly:!0,dependsOn:["visible","layer.loaded","parent.suspended","view?.ready"]})],u.prototype,"suspended",null),(0,s._)([(0,n.Cb)({readOnly:!0,dependsOn:["visible","layer.loaded","parent.suspended","view?.ready"]})],u.prototype,"suspendInfo",null),(0,s._)([(0,n.Cb)({readOnly:!0,dependsOn:["suspended","layer.legendEnabled?"]})],u.prototype,"legendEnabled",null),(0,s._)([(0,n.Cb)({type:Boolean,dependsOn:["updatingHandles.updating"],readOnly:!0})],u.prototype,"updating",null),(0,s._)([(0,n.Cb)({dependsOn:["layer.visible"]})],u.prototype,"visible",null),u=(0,s._)([(0,a.j)("esri.views.layers.LayerView")],u);const c=u}}]);
//# sourceMappingURL=3296.js.map