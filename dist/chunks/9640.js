(self.webpackChunkinspection_scheduler=self.webpackChunkinspection_scheduler||[]).push([[9640],{69640:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>V});var o,r=i(56140),s=(i(95830),i(59472)),n=(i(36544),i(68055),i(79881)),a=i(30590),p=i(87566),l=i(32656),d=i(37704),y=i(24862),c=i(59691),h=i(56700),u=i(43072),f=i(80621),m=i(18152),g=i(78910),v=i(48899),_=i(33716),w=i(10113),S=i(54209),b=i(61393),C=i(10923),T=(i(57002),i(86035),i(58385)),O=i(83477),N=i(54721),M=i(82550),R=i(15307),x=i(60538),I=i(53817),L=(i(36348),i(55162));let U=o=class extends T.wq{constructor(e){super(e),this.geometry=null,this.type="clip"}writeGeometry(e,t,i,o){if(o.layer&&o.layer.spatialReference&&!o.layer.spatialReference.equals(this.geometry.spatialReference)){if(!(0,L.Up)(e.spatialReference,o.layer.spatialReference))return void(o&&o.messages&&o.messages.push(new R.Z("scenemodification:unsupported","Scene modifications with incompatible spatial references are not supported",{modification:this,spatialReference:o.layer.spatialReference,context:o})));const r=new I.Z;(0,L.Wt)(e,r,o.layer.spatialReference),t[i]=r.toJSON(o)}else t[i]=e.toJSON(o);delete t[i].spatialReference}clone(){return new o({geometry:(0,M.d9)(this.geometry),type:this.type})}};(0,r._)([(0,n.Cb)({type:I.Z}),(0,y.B)()],U.prototype,"geometry",void 0),(0,r._)([(0,x.c)(["web-scene","portal-item"],"geometry")],U.prototype,"writeGeometry",null),(0,r._)([(0,n.Cb)({type:["clip","mask","replace"],nonNullable:!0}),(0,y.B)()],U.prototype,"type",void 0),U=o=(0,r._)([(0,p.j)("esri.layers.support.SceneModification")],U);const Z=U;var j;let J=j=class extends((0,T.eC)(O.Z.ofType(Z))){constructor(e){super(e),this.url=null}toJSON(e){return this.toArray().map((t=>t.toJSON(e))).filter((e=>!!e.geometry))}clone(){return new j({url:this.url,items:this.items.map((e=>e.clone()))})}_readModifications(e,t){for(const i of e)this.add(Z.fromJSON(i,t))}static fromJSON(e,t){const i=new j;return i._readModifications(e,t),i}static async fromUrl(e,t,i){const o={url:(0,C.mN)(e),origin:"service"},r=await(0,N.default)(e,{responseType:"json",signal:(0,s.U2)(i,"signal")}),n=t.toJSON(),a=[];for(const e of r.data)a.push(Z.fromJSON({...e,geometry:{...e.geometry,spatialReference:n}},o));return new j({url:e,items:a})}};(0,r._)([(0,n.Cb)({type:String})],J.prototype,"url",void 0),J=j=(0,r._)([(0,p.j)("esri.layers.support.SceneModifications")],J);const D=J;let P=class extends((0,b.V)((0,v.Y)((0,g.q)((0,_.I)((0,w.M)((0,u.R)(h.Z))))))){constructor(...e){super(...e),this.handles=new c.Z,this.geometryType="mesh",this.operationalLayerType="IntegratedMeshLayer",this.type="integrated-mesh",this.nodePages=null,this.materialDefinitions=null,this.textureSetDefinitions=null,this.geometryDefinitions=null,this.serviceUpdateTimeStamp=null,this.profile="mesh-pyramids",this.modifications=null,this._modificationsSource=null,this.elevationInfo=null,this.path=null}destroy(){this.handles.destroy()}initialize(){this.handles.add((0,f.on)(this,"modifications","after-changes",(()=>this.modifications=this.modifications),null,null,!0))}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}readModifications(e,t,i){this._modificationsSource={url:(0,d.f)(e,i),context:i}}async load(e){return this.addResolvingPromise(this._doLoad(e)),this}async _doLoad(e){const t=(0,s.U2)(e,"signal");try{await this.loadFromPortal({supportedTypes:["Scene Service"]},e)}catch(e){}if(await this._fetchService(t),(0,s.pC)(this._modificationsSource)){const t=await D.fromUrl(this._modificationsSource.url,this.spatialReference,e);this.setAtOrigin("modifications",t,this._modificationsSource.context.origin),this._modificationsSource=null}await this._verifyRootNodeAndUpdateExtent(this.nodePages,t)}beforeSave(){if(!(0,s.Wi)(this._modificationsSource))return this.load().then((()=>{}),(()=>{}))}async saveAs(e,t){return this._debouncedSaveOperations(1,{...t,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"integrated-mesh"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"integrated-mesh"};return this._debouncedSaveOperations(0,e)}validateLayer(e){if(e.layerType&&"IntegratedMesh"!==e.layerType)throw new l.Z("integrated-mesh-layer:layer-type-not-supported","IntegratedMeshLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new l.Z("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"});if(this.version.major>1)throw new l.Z("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"})}_getTypeKeywords(){return["IntegratedMeshLayer"]}};(0,r._)([(0,n.Cb)({type:String,readOnly:!0})],P.prototype,"geometryType",void 0),(0,r._)([(0,n.Cb)({type:["show","hide"]})],P.prototype,"listMode",void 0),(0,r._)([(0,n.Cb)({type:["IntegratedMeshLayer"]})],P.prototype,"operationalLayerType",void 0),(0,r._)([(0,n.Cb)({json:{read:!1},readOnly:!0})],P.prototype,"type",void 0),(0,r._)([(0,n.Cb)({type:S.U4,readOnly:!0})],P.prototype,"nodePages",void 0),(0,r._)([(0,n.Cb)({type:[S.QI],readOnly:!0})],P.prototype,"materialDefinitions",void 0),(0,r._)([(0,n.Cb)({type:[S.Yh],readOnly:!0})],P.prototype,"textureSetDefinitions",void 0),(0,r._)([(0,n.Cb)({type:[S.H3],readOnly:!0})],P.prototype,"geometryDefinitions",void 0),(0,r._)([(0,n.Cb)({readOnly:!0})],P.prototype,"serviceUpdateTimeStamp",void 0),(0,r._)([(0,n.Cb)({type:D}),(0,y.B)({origins:["web-scene","portal-item"],type:"resource",prefix:"modifications"})],P.prototype,"modifications",void 0),(0,r._)([(0,a.r)(["web-scene","portal-item"],"modifications")],P.prototype,"readModifications",null),(0,r._)([(0,n.Cb)(m.PV)],P.prototype,"elevationInfo",void 0),(0,r._)([(0,n.Cb)({type:String,json:{origins:{"web-scene":{read:!0,write:!0},"portal-item":{read:!0,write:!0}},read:!1}})],P.prototype,"path",void 0),P=(0,r._)([(0,p.j)("esri.layers.IntegratedMeshLayer")],P);const V=P}}]);
//# sourceMappingURL=9640.js.map