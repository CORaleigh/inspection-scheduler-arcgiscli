(self.webpackChunkinspection_scheduler=self.webpackChunkinspection_scheduler||[]).push([[7868],{77868:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>b});var s=i(56140),r=(i(95830),i(36544),i(68055),i(79881),i(87566)),n=(i(10923),i(57002),i(86035),i(39105)),a=i(83477),o=i(58484),l=i(15988),p=i(80621),d=i(4037),h=i(142),y=i(76194),u=i(48164),c=i(79334),g=i(81558);let v=class extends((0,g.y)(u.Z)){constructor(){super(...arguments),this._graphicsViewMap={},this._popupTemplates=new Map,this.graphicsViews=[]}hitTest(e,t){if(this.suspended||!this.graphicsViews.length)return(0,n.resolve)();const i=this.graphicsViews.reverse().map((i=>i.hitTest(e,t)));return(0,n.all)(i).then((e=>e.filter(((e,t)=>(e&&(e.popupTemplate=this._popupTemplates.get(this.graphicsViews[t]),e.layer=this.layer,e.sourceLayer=this.layer),!!e)))[0]||null))}update(e){if(this.graphicsViews)for(const t of this.graphicsViews)t.processUpdate(e)}attach(){this.layer.featureCollections.forEach((e=>{const t=y.default.fromJSON(e.featureSet),i=new(a.Z.ofType(l.default))(t.features);let s;if(this._graphicsViewMap[t.geometryType])s=this._graphicsViewMap[t.geometryType],s.graphics.addMany(i);else{const r=e.layerDefinition.drawingInfo,n=e.popupInfo?o.default.fromJSON(e.popupInfo):null,a=(0,h.im)(r.renderer);s=new c.Z({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:i,renderer:a}),this._graphicsViewMap[t.geometryType]=s,this._popupTemplates.set(s,n),"polygon"!==t.geometryType||this.layer.polygonSymbol?"polyline"!==t.geometryType||this.layer.lineSymbol?"point"!==t.geometryType||this.layer.pointSymbol||(this.layer.pointSymbol=a.symbol):this.layer.lineSymbol=a.symbol:this.layer.polygonSymbol=a.symbol,this.graphicsViews.push(s),this.container.addChild(s.container)}})),this.handles.add([(0,p.init)(this.layer,"polygonSymbol",(e=>{this._graphicsViewMap.polygon.renderer=new d.Z({symbol:e})})),(0,p.init)(this.layer,"lineSymbol",(e=>{this._graphicsViewMap.polyline.renderer=new d.Z({symbol:e})})),(0,p.init)(this.layer,"pointSymbol",(e=>{this._graphicsViewMap.point.renderer=new d.Z({symbol:e})}))])}detach(){this.container.removeAllChildren();for(const e of this.graphicsViews)e.destroy(),e.view=null,e.renderer=null;this.graphicsViews.length=0}moveStart(){}moveEnd(){}viewChange(){for(const e of this.graphicsViews)e.viewChange()}};v=(0,s._)([(0,r.j)("esri.views.2d.layers.GeoRSSLayerView2D")],v);const b=v},81558:(e,t,i)=>{"use strict";i.d(t,{y:()=>q});var s=i(56140),r=(i(95830),i(36544),i(68055),i(79881)),n=i(87566),a=(i(10923),i(57002),i(86035),i(83477)),o=i(32105),l=i(80621),p=i(58385);let d=class extends p.wq{};d=(0,s._)([(0,n.j)("esri.views.layers.support.ClipArea")],d);const h=d;var y;let u=y=class extends h{constructor(){super(...arguments),this.type="rect",this.left=null,this.right=null,this.top=null,this.bottom=null}clone(){return new y({left:this.left,right:this.right,top:this.top,bottom:this.bottom})}get version(){return(this._get("version")||0)+1}};(0,s._)([(0,r.Cb)({type:[Number,String],json:{write:!0}})],u.prototype,"left",void 0),(0,s._)([(0,r.Cb)({type:[Number,String],json:{write:!0}})],u.prototype,"right",void 0),(0,s._)([(0,r.Cb)({type:[Number,String],json:{write:!0}})],u.prototype,"top",void 0),(0,s._)([(0,r.Cb)({type:[Number,String],json:{write:!0}})],u.prototype,"bottom",void 0),(0,s._)([(0,r.Cb)({readOnly:!0,dependsOn:["left","right","top","bottom"]})],u.prototype,"version",null),u=y=(0,s._)([(0,n.j)("esri.views.layers.support.ClipRect")],u);const c=u;var g,v=i(17149),b=i(39718),w=i(52937),m=i(53817),f=i(56885);i(36348);const _={base:b.Z,key:"type",typeMap:{extent:w.default,polygon:m.Z}};let C=g=class extends h{constructor(){super(...arguments),this.type="geometry",this.geometry=null}get version(){return(this._get("version")||0)+1}clone(){return new g({geometry:this.geometry.clone()})}};(0,s._)([(0,r.Cb)({types:_,json:{read:f.im,write:!0}})],C.prototype,"geometry",void 0),(0,s._)([(0,r.Cb)({readOnly:!0,dependsOn:["geometry"]})],C.prototype,"version",null),C=g=(0,s._)([(0,n.j)("esri.views.layers.support.Geometry")],C);const S=C;let O=class extends h{constructor(){super(...arguments),this.type="path",this.path=[]}get version(){return(this._get("version")||0)+1}};(0,s._)([(0,r.Cb)({type:[[[Number]]],json:{write:!0}})],O.prototype,"path",void 0),(0,s._)([(0,r.Cb)({readOnly:!0,dependsOn:["path"]})],O.prototype,"version",null),O=(0,s._)([(0,n.j)("esri.views.layers.support.Path")],O);const V=O,R=a.Z.ofType({key:"type",base:h,typeMap:{rect:c,path:V,geometry:S}}),q=e=>{let t=class extends e{constructor(){super(...arguments),this.clips=new R,this.moving=!1,this.attached=!1,this.lastUpdateId=-1,this.updateRequested=!1}initialize(){var e;this.container||(this.container=new v.W),this.container.fadeTransitionEnabled=!0,this.container.opacity=0,this.container.clips=this.clips,this.handles.add([(0,l.init)(this,"suspended",(e=>{this.container&&(this.container.visible=!e),this.view&&!e&&this.updateRequested&&this.view.requestUpdate()}),!0),(0,l.init)(this,["layer.opacity","container"],(()=>{var e,t;this.container&&(this.container.opacity=null!=(e=null==(t=this.layer)?void 0:t.opacity)?e:1)}),!0),(0,l.init)(this,["layer.blendMode"],(e=>{this.container&&(this.container.blendMode=e)}),!0),(0,l.init)(this,["layer.effect"],(e=>{this.container&&(this.container.effect=e)}),!0),this.clips.on("change",(()=>{this.container.clips=this.clips,this.notifyChange("clips")}))]),null!=(e=this.view)&&e.whenLayerView?this.view.whenLayerView(this.layer).then((e=>{e!==this||this.attached||this.destroyed||(this.attach(),this.requestUpdate(),this.attached=!0)}),(()=>{})):this.when().then((()=>{this.attached||this.destroyed||(this.attach(),this.requestUpdate(),this.attached=!0)}),(()=>{}))}destroy(){this.attached&&(this.detach(),this.attached=!1),this.handles.remove("initialize"),this.updateRequested=!1}get updating(){return!this.attached||!this.suspended&&(this.updateRequested||this.isUpdating())}isVisibleAtScale(e){let t=!0;const i=this.layer,s=i.minScale,r=i.maxScale;if(null!=s&&null!=r){let i=!s,n=!r;!i&&e<=s&&(i=!0),!n&&e>=r&&(n=!0),t=i&&n}return t}requestUpdate(){this.updateRequested||(this.updateRequested=!0,this.suspended||this.view.requestUpdate())}processUpdate(e){!this.isFulfilled()||this.isResolved()?(this._set("updateParameters",e),this.updateRequested&&!this.suspended&&(this.updateRequested=!1,this.update(e))):this.updateRequested=!1}isUpdating(){return!1}isRendering(){return!1}canResume(){return!!super.canResume()&&this.isVisibleAtScale(this.view.scale)}};return(0,s._)([(0,r.Cb)({type:R,set(e){const t=(0,o.Z)(e,this._get("clips"),R);this._set("clips",t)}})],t.prototype,"clips",void 0),(0,s._)([(0,r.Cb)()],t.prototype,"moving",void 0),(0,s._)([(0,r.Cb)()],t.prototype,"attached",void 0),(0,s._)([(0,r.Cb)()],t.prototype,"container",void 0),(0,s._)([(0,r.Cb)({dependsOn:["view.scale","layer.minScale","layer.maxScale"]})],t.prototype,"suspended",void 0),(0,s._)([(0,r.Cb)({readOnly:!0})],t.prototype,"updateParameters",void 0),(0,s._)([(0,r.Cb)()],t.prototype,"updateRequested",void 0),(0,s._)([(0,r.Cb)({dependsOn:["attached","updateRequested","suspended"]})],t.prototype,"updating",null),(0,s._)([(0,r.Cb)()],t.prototype,"view",void 0),t=(0,s._)([(0,n.j)("esri.views.2d.layers.LayerView2D")],t),t}},48164:(e,t,i)=>{"use strict";i.d(t,{Z:()=>u});var s=i(56140),r=(i(95830),i(36544)),n=(i(68055),i(79881)),a=i(87566),o=(i(10923),i(57002),i(86035),i(79152)),l=i(35470),p=i(35326),d=i(75044),h=i(77204);let y=class extends((0,h.p)((0,p.I)((0,d.v)(l.Z.EventedMixin(o.default))))){constructor(e){super(e),this.layer=null,this.parent=null}initialize(){this.when().catch((e=>{if("layerview:create-error"!==e.name){const t=this.layer&&this.layer.id||"no id",i=this.layer&&this.layer.title||"no title";throw r.Z.getLogger(this.declaredClass).error("#resolve()",`Failed to resolve layer view (layer title: '${i}', id: '${t}')`,e),e}}))}get fullOpacity(){const e=e=>null==e?1:e;return e(this.get("layer.opacity"))*e(this.get("parent.fullOpacity"))}get suspended(){return!this.canResume()}get suspendInfo(){return this.getSuspendInfo()}get legendEnabled(){return!this.suspended&&!0===this.layer.legendEnabled}get updating(){return!!(this.updatingHandles&&this.updatingHandles.updating||this.isUpdating())}get visible(){return!0===this.get("layer.visible")}set visible(e){void 0!==e?this._override("visible",e):this._clearOverride("visible")}canResume(){return!this.get("parent.suspended")&&this.get("view.ready")&&this.get("layer.loaded")&&this.visible||!1}getSuspendInfo(){const e=this.parent&&this.parent.suspended?this.parent.suspendInfo:{};return this.view&&this.view.ready||(e.viewNotReady=!0),this.layer&&this.layer.loaded||(e.layerNotLoaded=!0),this.visible||(e.layerInvisible=!0),e}isUpdating(){return!1}};(0,s._)([(0,n.Cb)({dependsOn:["layer.opacity","parent.fullOpacity"]})],y.prototype,"fullOpacity",null),(0,s._)([(0,n.Cb)()],y.prototype,"layer",void 0),(0,s._)([(0,n.Cb)()],y.prototype,"parent",void 0),(0,s._)([(0,n.Cb)({readOnly:!0,dependsOn:["visible","layer.loaded","parent.suspended","view?.ready"]})],y.prototype,"suspended",null),(0,s._)([(0,n.Cb)({readOnly:!0,dependsOn:["visible","layer.loaded","parent.suspended","view?.ready"]})],y.prototype,"suspendInfo",null),(0,s._)([(0,n.Cb)({readOnly:!0,dependsOn:["suspended","layer.legendEnabled?"]})],y.prototype,"legendEnabled",null),(0,s._)([(0,n.Cb)({type:Boolean,dependsOn:["updatingHandles.updating"],readOnly:!0})],y.prototype,"updating",null),(0,s._)([(0,n.Cb)({dependsOn:["layer.visible"]})],y.prototype,"visible",null),y=(0,s._)([(0,a.j)("esri.views.layers.LayerView")],y);const u=y}}]);
//# sourceMappingURL=7868.js.map