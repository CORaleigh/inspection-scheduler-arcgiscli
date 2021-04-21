(self.webpackChunkinspection_scheduler=self.webpackChunkinspection_scheduler||[]).push([[6304],{5698:(e,r,i)=>{"use strict";i.d(r,{O:()=>c});var t=i(56140),s=(i(95830),i(36544),i(68055),i(79881)),l=i(30590),a=i(87566),o=i(10923),n=(i(57002),i(86035),i(39105)),y=i(73032),u=i(52937),d=i(54721),p=i(18152);const c=e=>{let r=class extends e{constructor(){super(...arguments),this.capabilities=void 0,this.copyright=null,this.fullExtent=null,this.legendEnabled=!0,this.spatialReference=null,this.version=null}readCapabilities(e,r){const i=r.capabilities&&r.capabilities.split(",").map((e=>e.toLowerCase().trim()));if(!i)return{operations:{supportsQuery:!1,supportsExportMap:!1,supportsExportTiles:!1,supportsTileMap:!1},exportMap:null,exportTiles:null};const t=this.type,s=-1!==i.indexOf("query"),l=-1!==i.indexOf("map"),a=!!r.exportTilesAllowed,o=-1!==i.indexOf("tilemap"),n="tile"!==t&&!!r.supportsDynamicLayers,y="tile"!==t&&(!r.tileInfo||n),u="tile"!==t&&(!r.tileInfo||n);return{operations:{supportsQuery:s,supportsExportMap:l,supportsExportTiles:a,supportsTileMap:o},exportMap:l?{supportsSublayersChanges:"tile"!==t,supportsDynamicLayers:n,supportsSublayerVisibility:y,supportsSublayerDefinitionExpression:u}:null,exportTiles:a?{maxExportTilesCount:+r.maxExportTilesCount}:null}}readVersion(e,r){let i=r.currentVersion;return i||(i=r.hasOwnProperty("capabilities")||r.hasOwnProperty("tables")?10:r.hasOwnProperty("supportedImageFormatTypes")?9.31:9.3),i}async fetchSublayerInfo(e,r){return await this.fetchAllLayersAndTables(r),this._allLayersAndTablesMap.get(e)}async fetchAllLayersAndTables(e){await this.load(e),this._allLayersAndTablesPromise||(this._allLayersAndTablesPromise=(0,d.default)((0,o.mN)(this.url).path+"/layers",{responseType:"json",query:{f:"json",...this.customParameters}}).then((e=>{this._allLayersAndTablesMap=new Map;for(const r of e.data.layers)this._allLayersAndTablesMap.set(r.id,r);return{result:e.data}}),(e=>({error:e}))));const r=await this._allLayersAndTablesPromise;if((0,n.throwIfAborted)(e),"result"in r)return r.result;throw r.error}};return(0,t._)([(0,s.Cb)({readOnly:!0})],r.prototype,"capabilities",void 0),(0,t._)([(0,l.r)("service","capabilities",["capabilities","exportTilesAllowed","maxExportTilesCount","supportsDynamicLayers","tileInfo"])],r.prototype,"readCapabilities",null),(0,t._)([(0,s.Cb)({json:{read:{source:"copyrightText"}}})],r.prototype,"copyright",void 0),(0,t._)([(0,s.Cb)({type:u.default})],r.prototype,"fullExtent",void 0),(0,t._)([(0,s.Cb)({json:{origins:{service:{read:!1},"portal-item":{read:!1}}}})],r.prototype,"id",void 0),(0,t._)([(0,s.Cb)({type:Boolean,json:{origins:{service:{read:{enabled:!1}}},read:{source:"showLegend"},write:{target:"showLegend"}}})],r.prototype,"legendEnabled",void 0),(0,t._)([(0,s.Cb)(p.C_)],r.prototype,"popupEnabled",void 0),(0,t._)([(0,s.Cb)({type:y.Z})],r.prototype,"spatialReference",void 0),(0,t._)([(0,s.Cb)()],r.prototype,"version",void 0),(0,t._)([(0,l.r)("version",["currentVersion","capabilities","tables","supportedImageFormatTypes"])],r.prototype,"readVersion",null),r=(0,t._)([(0,a.j)("esri.layers.mixins.ArcGISMapService")],r),r}},49708:(e,r,i)=>{"use strict";i.d(r,{x:()=>g});var t=i(56140),s=(i(95830),i(36544)),l=(i(68055),i(65575)),a=i(79881),o=i(87566),n=i(32656),y=(i(10923),i(57002),i(9678)),u=(i(86035),i(83477)),d=i(78452),p=i(41452),c=i(24681);const b=s.Z.getLogger("esri.layers.TileLayer"),f=u.Z.ofType(p.Z);function h(e,r){e&&e.forEach((e=>{r(e),e.sublayers&&e.sublayers.length&&h(e.sublayers,r)}))}const g=e=>{let r=class extends e{constructor(...e){super(...e),this.allSublayers=new d.Z({root:this,rootCollectionNames:["sublayers"],getChildrenFunction:e=>e.sublayers}),this.sublayersSourceJSON={2:{},3:{},4:{},5:{}},this.watch("sublayers",((e,r)=>this._handleSublayersChange(e,r)),!0)}readSublayers(e,r){if(!r||!e)return;const{sublayersSourceJSON:i}=this,t=(0,y.M9)(r.origin);if(t<2)return;if(i[t]={context:r,visibleLayers:e.visibleLayers||i[t].visibleLayers,layers:e.layers||i[t].layers},t>2)return;this._set("serviceSublayers",this.createSublayersForOrigin("service").sublayers);const{sublayers:s,origin:a}=this.createSublayersForOrigin("web-document"),o=(0,l.vw)(this);o.setDefaultOrigin(a),this._set("sublayers",new f(s)),o.setDefaultOrigin("user")}findSublayerById(e){return this.allSublayers.find((r=>r.id===e))}createServiceSublayers(){return this.createSublayersForOrigin("service").sublayers}createSublayersForOrigin(e){const r=(0,y.M9)("web-document"===e?"web-map":e);let i=2,t=this.sublayersSourceJSON[2].layers,s=this.sublayersSourceJSON[2].context,l=null;const a=[3,4,5].filter((e=>e<=r));for(const e of a){const r=this.sublayersSourceJSON[e];(0,c.ac)(r.layers)&&(i=e,t=r.layers,s=r.context,r.visibleLayers&&(l={visibleLayers:r.visibleLayers,context:r.context}))}const o=[3,4,5].filter((e=>e>i&&e<=r));let n=null;for(const e of o){const{layers:r,visibleLayers:i,context:t}=this.sublayersSourceJSON[e];r&&(n={layers:r,context:t}),i&&(l={visibleLayers:i,context:t})}const u=function(e,r){const i=[],t={};return e?(e.forEach((e=>{const s=new p.Z;if(s.read(e,r),t[s.id]=s,null!=e.parentLayerId&&-1!==e.parentLayerId){const r=t[e.parentLayerId];r.sublayers||(r.sublayers=[]),r.sublayers.unshift(s)}else i.unshift(s)})),i):i}(t,s),d=new Map,b=new Set;if(n)for(const e of n.layers)d.set(e.id,e);if(l)for(const e of l.visibleLayers)b.add(e);return h(u,(e=>{n&&e.read(d.get(e.id),n.context),l&&e.read({defaultVisibility:b.has(e.id)},l.context)})),{origin:(0,y.x3)(i),sublayers:new f({items:u})}}read(e,r){super.read(e,r),this.readSublayers(e,r)}_handleSublayersChange(e,r){r&&(r.forEach((e=>{e.parent=null,e.layer=null})),this.handles.remove("sublayers-owner")),e&&(e.forEach((e=>{e.parent=this,e.layer=this})),this.handles.add([e.on("after-add",(({item:e})=>{e.parent=this,e.layer=this})),e.on("after-remove",(({item:e})=>{e.parent=null,e.layer=null}))],"sublayers-owner"),"tile"===this.type&&this.handles.add(e.on("before-changes",(e=>{b.error(new n.Z("tilelayer:sublayers-non-modifiable","Sublayer can't be added, moved, or removed from the layer's sublayers",{layer:this})),e.preventDefault()})),"sublayers-owner"))}};return(0,t._)([(0,a.Cb)({readOnly:!0})],r.prototype,"allSublayers",void 0),(0,t._)([(0,a.Cb)({readOnly:!0,type:u.Z.ofType(p.Z)})],r.prototype,"serviceSublayers",void 0),(0,t._)([(0,a.Cb)({value:null,type:f,json:{read:!1,write:{allowNull:!0,ignoreOrigin:!0}}})],r.prototype,"sublayers",void 0),(0,t._)([(0,a.Cb)({readOnly:!0})],r.prototype,"sublayersSourceJSON",void 0),r=(0,t._)([(0,o.j)("esri.layers.mixins.SublayersOwner")],r),r}},41452:(e,r,i)=>{"use strict";i.d(r,{Z:()=>R});var t,s=i(56140),l=(i(95830),i(82550)),a=i(36544),o=i(68055),n=i(65575),y=i(79881),u=i(60263),d=i(30590),p=i(87566),c=i(60538),b=i(32656),f=i(10923),h=(i(57002),i(9678)),g=(i(86035),i(39105)),m=i(52937),v=(i(36348),i(83477)),S=i(4665),I=i(35326),w=i(58484),_=i(54721),O=i(809),x=i(54734),L=i(43072),C=(i(71598),i(38474),i(42952),i(43925),i(3642),i(57415),i(4037),i(89772)),D=(i(142),i(70834)),E=i(61121),P=i(26360),T=i(21872),F=i(90013),M=i(60853),j=i(43551),N=i(31518),V=i(77204);function A(e){return e&&"esriSMS"===e.type}function Z(e,r,i){var t;return{ignoreOrigin:!0,enabled:!!i&&"map-image"===(null==(t=i.layer)?void 0:t.type)&&(i.writeSublayerStructure||this.originIdOf(r)>=(0,h.M9)(i.origin))}}function k(e,r,i){var t;return{enabled:!!i&&"tile"===(null==(t=i.layer)?void 0:t.type)&&this._isOverridden(r)}}function J(e,r,i){return{ignoreOrigin:!0,enabled:i&&i.writeSublayerStructure||!1}}function q(e,r,i){return{ignoreOrigin:!0,enabled:!!i&&(i.writeSublayerStructure||this.originIdOf(r)>=(0,h.M9)(i.origin))}}const $=a.Z.getLogger("esri.layers.support.Sublayer");let B=0;const U=new Set;U.add("layer"),U.add("parent"),U.add("loaded"),U.add("loadStatus"),U.add("loadError"),U.add("loadWarnings");let Q=t=class extends((0,V.p)((0,L.R)((0,I.I)(O.Z)))){constructor(e){super(e),this.capabilities=void 0,this.fields=null,this.fullExtent=null,this.globalIdField=null,this.legendEnabled=!0,this.objectIdField=null,this.popupEnabled=!0,this.popupTemplate=null,this.sourceJSON=null,this.title=null,this.typeIdField=null,this.types=null}async load(e){return this.addResolvingPromise((async()=>{var r;if(!this.layer&&!this.url)throw new b.Z("sublayer:missing-layer","Sublayer can't be loaded without being part of a layer",{sublayer:this});let i=null;if(!this.layer||this.originIdOf("url")>2||"data-layer"===(null==(r=this.source)?void 0:r.type))i=(await(0,_.default)(this.url,{responseType:"json",query:{f:"json"},...e})).data;else{var t;let r=this.id;"map-layer"===(null==(t=this.source)?void 0:t.type)&&(r=this.source.mapLayerId),i=await this.layer.fetchSublayerInfo(r,e)}i&&(this.sourceJSON=i,this.read({layerDefinition:i},{origin:"service"}))})()),this}readCapabilities(e,r){const i=(e=(r=r.layerDefinition||r).capabilities||e)?e.toLowerCase().split(",").map((e=>e.trim())):[];return{exportMap:{supportsModification:!!r.canModifyLayer},operations:{supportsQuery:-1!==i.indexOf("query")}}}set definitionExpression(e){this._setAndNotifyLayer("definitionExpression",e)}get fieldsIndex(){return new E.Z(this.fields||[])}readGlobalIdFieldFromService(e,r){if((r=r.layerDefinition||r).globalIdField)return r.globalIdField;if(r.fields)for(const e of r.fields)if("esriFieldTypeGlobalID"===e.type)return e.name}get id(){const e=this._get("id");return null==e?B++:e}set id(e){this._get("id")!==e&&(!1!==this.get("layer.capabilities.exportMap.supportsDynamicLayers")?this._set("id",e):this._logLockedError("id","capability not available 'layer.capabilities.exportMap.supportsDynamicLayers'"))}set labelingInfo(e){this._setAndNotifyLayer("labelingInfo",e)}writeLabelingInfo(e,r,i,t){e&&e.length&&(r.layerDefinition={drawingInfo:{labelingInfo:e.map((e=>e.write({},t)))}})}set labelsVisible(e){this._setAndNotifyLayer("labelsVisible",e)}set layer(e){this._set("layer",e),this.sublayers&&this.sublayers.forEach((r=>r.layer=e))}set listMode(e){this._set("listMode",e)}set minScale(e){this._setAndNotifyLayer("minScale",e)}readMinScale(e,r){return r.minScale||r.layerDefinition&&r.layerDefinition.minScale||0}set maxScale(e){this._setAndNotifyLayer("maxScale",e)}readMaxScale(e,r){return r.maxScale||r.layerDefinition&&r.layerDefinition.maxScale||0}readObjectIdFieldFromService(e,r){if((r=r.layerDefinition||r).objectIdField)return r.objectIdField;if(r.fields)for(const e of r.fields)if("esriFieldTypeOID"===e.type)return e.name}set opacity(e){this._setAndNotifyLayer("opacity",e)}readOpacity(e,r){const i=r.layerDefinition;return 1-.01*(null!=i.transparency?i.transparency:i.drawingInfo.transparency)}writeOpacity(e,r,i,t){r.layerDefinition={drawingInfo:{transparency:100-100*e}}}writeParent(e,r){this.parent&&this.parent!==this.layer?r.parentLayerId=(0,o.vU)(this.parent.id):r.parentLayerId=-1}get defaultPopupTemplate(){return this.createPopupTemplate()}set renderer(e){if(e)for(const r of e.getSymbols())if((0,x.i)(r)){$.warn("Sublayer renderer should use 2D symbols");break}this._setAndNotifyLayer("renderer",e)}get source(){return this._get("source")||new F.R({mapLayerId:this.id})}set source(e){this._setAndNotifyLayer("source",e)}set sublayers(e){this._handleSublayersChange(e,this._get("sublayers")),this._set("sublayers",e)}castSublayers(e){return(0,o.se)(v.Z.ofType(t),e)}writeSublayers(e,r,i){this.get("sublayers.length")&&(r[i]=this.sublayers.map((e=>e.id)).toArray().reverse())}readTypeIdField(e,r){const i=(r=r.layerDefinition||r).typeIdField;if(i){const e=(0,S.rz)(r.fields,i);if(e)return e.name}return null}get url(){var e,r;const i=null!=(e=null==(r=this.layer)?void 0:r.parsedUrl)?e:this._lastParsedUrl,t=this.source;if(!i)return null;if(this._lastParsedUrl=i,"map-layer"===(null==t?void 0:t.type))return`${i.path}/${t.mapLayerId}`;const s={layer:JSON.stringify({source:this.source})};return`${i.path}/dynamicLayer?${(0,f.B7)(s)}`}set url(e){e?this._override("url",e):this._clearOverride("url")}set visible(e){this._setAndNotifyLayer("visible",e)}writeVisible(e,r,i,t){r[i]=this.getAtOrigin("defaultVisibility","service")||e}clone(){const{store:e}=(0,n.vw)(this),r=new t;return(0,n.vw)(r).store=e.clone(U),this.url,r._lastParsedUrl=this._lastParsedUrl,r}createPopupTemplate(e){return(0,j.eZ)(this,e)}createQuery(){return new N.Z({returnGeometry:!0,where:this.definitionExpression||"1=1"})}async createFeatureLayer(){var e,r;if(this.hasOwnProperty("sublayers"))return null;const t=null==(e=this.layer)?void 0:e.parsedUrl,s=new(0,(await Promise.resolve().then(i.bind(i,76603))).default)({url:t.path});return t&&this.source&&("map-layer"===this.source.type?s.layerId=this.source.mapLayerId:s.dynamicDataSource=this.source),null!=this.layer.refreshInterval&&(s.refreshInterval=this.layer.refreshInterval),this.definitionExpression&&(s.definitionExpression=this.definitionExpression),this.originIdOf("labelingInfo")>2&&(s.labelingInfo=(0,l.d9)(this.labelingInfo)),this.originIdOf("labelsVisible")>0&&(s.labelsVisible=this.labelsVisible),this.originIdOf("legendEnabled")>0&&(s.legendEnabled=this.legendEnabled),this.originIdOf("visible")>0&&(s.visible=this.visible),this.originIdOf("minScale")>0&&(s.minScale=this.minScale),this.originIdOf("maxScale")>0&&(s.maxScale=this.maxScale),this.originIdOf("opacity")>0&&(s.opacity=this.opacity),this.originIdOf("popupTemplate")>0&&(s.popupTemplate=(0,l.d9)(this.popupTemplate)),this.originIdOf("renderer")>2&&(s.renderer=(0,l.d9)(this.renderer)),"data-layer"===(null==(r=this.source)?void 0:r.type)&&(s.dynamicDataSource=this.source.clone()),this.originIdOf("title")>0&&(s.title=this.title),"map-image"===this.layer.type&&this.layer.originIdOf("customParameters")>0&&(s.customParameters=this.layer.customParameters),"tile"===this.layer.type&&this.layer.originIdOf("customParameters")>0&&(s.customParameters=this.layer.customParameters),s}getFeatureType(e){const{typeIdField:r,types:i}=this;if(!r||!e)return null;const t=e.attributes?e.attributes[r]:void 0;if(null==t)return null;let s=null;return i.some((e=>{const{id:r}=e;return null!=r&&(r.toString()===t.toString()&&(s=e),!!s)})),s}getFieldDomain(e,r){const i=r&&r.feature,t=this.getFeatureType(i);if(t){const r=t.domains&&t.domains[e];if(r&&"inherited"!==r.type)return r}return this._getLayerDomain(e)}queryFeatures(e=this.createQuery(),r){return this.load().then((()=>{if(!this.get("capabilities.operations.supportsQuery"))throw new b.Z("Sublayer.queryFeatures","this layer doesn't support queries.");return(0,g.all)([Promise.resolve().then(i.bind(i,21561)),Promise.resolve().then(i.bind(i,76194))])})).then((([{executeQuery:i},{default:t}])=>i(this.url,N.Z.from(e),this.layer?this.layer.spatialReference:null,{...r,query:{...this.layer.customParameters}}).then((e=>t.fromJSON(e.data))))).then((e=>(e&&e.features&&e.features.forEach((e=>{e.sourceLayer=this})),e)))}toExportImageJSON(){var e;const r={id:this.id,source:(null==(e=this.source)?void 0:e.toJSON())||{mapLayerId:this.id,type:"mapLayer"}};this.definitionExpression&&(r.definitionExpression=this.definitionExpression);const i=["renderer","labelingInfo","opacity","labelsVisible"].reduce(((e,r)=>(e[r]=this.originIdOf(r),e)),{});if(Object.keys(i).some((e=>i[e]>2))){const e=r.drawingInfo={};i.renderer>2&&(e.renderer=this.renderer?this.renderer.toJSON():null),i.labelsVisible>2&&(e.showLabels=this.labelsVisible),this.labelsVisible&&i.labelingInfo>2&&(e.labelingInfo=this.labelingInfo?this.labelingInfo.map((e=>e.write({},{origin:"service"}))):null,e.showLabels=!0),i.opacity>2&&(e.transparency=100-100*this.opacity),this._assignDefaultSymbolColors(e.renderer)}return r}_assignDefaultSymbolColors(e){this._forEachSimpleMarkerSymbols(e,(e=>{e.color||"esriSMSX"!==e.style&&"esriSMSCross"!==e.style||(e.outline&&e.outline.color?e.color=e.outline.color:e.color=[0,0,0,0])}))}_forEachSimpleMarkerSymbols(e,r){if(e){const i="uniqueValueInfos"in e?e.uniqueValueInfos:"classBreakInfos"in e?e.classBreakInfos:[];for(const e of i)A(e.symbol)&&r(e.symbol);"symbol"in e&&A(e.symbol)&&r(e.symbol),"defaultSymbol"in e&&A(e.defaultSymbol)&&r(e.defaultSymbol)}}_setAndNotifyLayer(e,r){const i=this.layer,t=this._get(e);let s,l;switch(e){case"definitionExpression":s="supportsSublayerDefinitionExpression";case"minScale":case"maxScale":case"visible":s="supportsSublayerVisibility";break;case"labelingInfo":case"labelsVisible":case"opacity":case"renderer":case"source":s="supportsDynamicLayers",l="supportsModification"}const a=(0,n.vw)(this).getDefaultOrigin();if("service"!==a){if(s&&!1===this.get(`layer.capabilities.exportMap.${s}`))return void this._logLockedError(e,`capability not available 'layer.capabilities.exportMap.${s}'`);if(l&&!1===this.get(`capabilities.exportMap.${l}`))return void this._logLockedError(e,`capability not available 'capabilities.exportMap.${l}'`)}"source"!==e||"not-loaded"===this.loadStatus?(this._set(e,r),"service"!==a&&t!==r&&i&&i.emit&&i.emit("sublayer-update",{propertyName:e,target:this})):this._logLockedError(e,"'source' can't be changed after calling sublayer.load()")}_handleSublayersChange(e,r){r&&(r.forEach((e=>{e.parent=null,e.layer=null})),this.handles.removeAll()),e&&(e.forEach((e=>{e.parent=this,e.layer=this.layer})),this.handles.add([e.on("after-add",(({item:e})=>{e.parent=this,e.layer=this.layer})),e.on("after-remove",(({item:e})=>{e.parent=null,e.layer=null})),e.on("before-changes",(e=>{const r=this.get("layer.capabilities.exportMap.supportsSublayersChanges");null==r||r||($.error(new b.Z("sublayer:sublayers-non-modifiable","Sublayer can't be added, moved, or removed from the layer's sublayers",{sublayer:this,layer:this.layer})),e.preventDefault())}))]))}_logLockedError(e,r){$.error(new b.Z("sublayer:locked",`Property '${e}' can't be changed on Sublayer from the layer '${this.layer.id}'`,{reason:r,sublayer:this,layer:this.layer}))}_getLayerDomain(e){const r=this.fieldsIndex.get(e);return r?r.domain:null}};Q.test={isMapImageLayerOverridePolicy:e=>e===J||e===Z,isTileImageLayerOverridePolicy:e=>e===k},(0,s._)([(0,y.Cb)({readOnly:!0})],Q.prototype,"capabilities",void 0),(0,s._)([(0,d.r)("service","capabilities",["layerDefinition.canModifyLayer","layerDefinition.capabilities"])],Q.prototype,"readCapabilities",null),(0,s._)([(0,y.Cb)({type:String,value:null,json:{read:{source:"layerDefinition.definitionExpression"},write:{target:"layerDefinition.definitionExpression",overridePolicy:Z}}})],Q.prototype,"definitionExpression",null),(0,s._)([(0,y.Cb)({type:[D.Z],json:{origins:{service:{read:{source:"layerDefinition.fields"}}}}})],Q.prototype,"fields",void 0),(0,s._)([(0,y.Cb)({readOnly:!0,dependsOn:["fields"]})],Q.prototype,"fieldsIndex",null),(0,s._)([(0,y.Cb)({type:m.default,json:{read:{source:"layerDefinition.extent"}}})],Q.prototype,"fullExtent",void 0),(0,s._)([(0,y.Cb)({type:String})],Q.prototype,"globalIdField",void 0),(0,s._)([(0,d.r)("service","globalIdField",["layerDefinition.globalIdField","layerDefinition.fields"])],Q.prototype,"readGlobalIdFieldFromService",null),(0,s._)([(0,y.Cb)({type:o.z8,json:{write:{ignoreOrigin:!0}}})],Q.prototype,"id",null),(0,s._)([(0,y.Cb)({value:null,type:[P.Z],json:{read:{source:"layerDefinition.drawingInfo.labelingInfo"},write:{target:"layerDefinition.drawingInfo.labelingInfo",overridePolicy:J}}})],Q.prototype,"labelingInfo",null),(0,s._)([(0,c.c)("labelingInfo")],Q.prototype,"writeLabelingInfo",null),(0,s._)([(0,y.Cb)({type:Boolean,value:!0,json:{read:{source:"layerDefinition.drawingInfo.showLabels"},write:{target:"layerDefinition.drawingInfo.showLabels",overridePolicy:J}}})],Q.prototype,"labelsVisible",null),(0,s._)([(0,y.Cb)({value:null})],Q.prototype,"layer",null),(0,s._)([(0,y.Cb)({type:Boolean,value:!0,json:{origins:{service:{read:{enabled:!1}}},read:{source:"showLegend"},write:{target:"showLegend",overridePolicy:q}}})],Q.prototype,"legendEnabled",void 0),(0,s._)([(0,y.Cb)({type:["show","hide","hide-children"],value:"show",json:{read:!1,write:!1,origins:{"web-scene":{read:!0,write:!0}}}})],Q.prototype,"listMode",null),(0,s._)([(0,y.Cb)({type:Number,value:0,json:{write:{overridePolicy:J}}})],Q.prototype,"minScale",null),(0,s._)([(0,d.r)("minScale",["minScale","layerDefinition.minScale"])],Q.prototype,"readMinScale",null),(0,s._)([(0,y.Cb)({type:Number,value:0,json:{write:{overridePolicy:J}}})],Q.prototype,"maxScale",null),(0,s._)([(0,d.r)("maxScale",["maxScale","layerDefinition.maxScale"])],Q.prototype,"readMaxScale",null),(0,s._)([(0,y.Cb)({type:String})],Q.prototype,"objectIdField",void 0),(0,s._)([(0,d.r)("service","objectIdField",["layerDefinition.objectIdField","layerDefinition.fields"])],Q.prototype,"readObjectIdFieldFromService",null),(0,s._)([(0,y.Cb)({type:Number,value:1,json:{write:{target:"layerDefinition.drawingInfo.transparency",overridePolicy:J}}})],Q.prototype,"opacity",null),(0,s._)([(0,d.r)("opacity",["layerDefinition.drawingInfo.transparency","layerDefinition.transparency"])],Q.prototype,"readOpacity",null),(0,s._)([(0,c.c)("opacity")],Q.prototype,"writeOpacity",null),(0,s._)([(0,y.Cb)({json:{type:o.z8,write:{target:"parentLayerId",allowNull:!0,overridePolicy:J}}})],Q.prototype,"parent",void 0),(0,s._)([(0,c.c)("parent")],Q.prototype,"writeParent",null),(0,s._)([(0,y.Cb)({type:Boolean,value:!0,json:{read:{source:"disablePopup",reader:(e,r)=>!r.disablePopup},write:{target:"disablePopup",overridePolicy:q,writer(e,r,i){r[i]=!e}}}})],Q.prototype,"popupEnabled",void 0),(0,s._)([(0,y.Cb)({type:w.default,json:{read:{source:"popupInfo"},write:{target:"popupInfo",overridePolicy:q}}})],Q.prototype,"popupTemplate",void 0),(0,s._)([(0,y.Cb)({readOnly:!0,dependsOn:["fields","title"]})],Q.prototype,"defaultPopupTemplate",null),(0,s._)([(0,y.Cb)({types:C.A,value:null,json:{name:"layerDefinition.drawingInfo.renderer",write:{overridePolicy:J},origins:{"web-scene":{types:C.o,name:"layerDefinition.drawingInfo.renderer",write:{overridePolicy:J}}}}})],Q.prototype,"renderer",null),(0,s._)([(0,y.Cb)({types:{key:"type",base:null,typeMap:{"data-layer":M.D,"map-layer":F.R}},cast(e){if(e){if("mapLayerId"in e)return(0,o.TJ)(F.R,e);if("dataSource"in e)return(0,o.TJ)(M.D,e)}return e},json:{name:"layerDefinition.source",write:{overridePolicy:J}}})],Q.prototype,"source",null),(0,s._)([(0,y.Cb)()],Q.prototype,"sourceJSON",void 0),(0,s._)([(0,y.Cb)({value:null,json:{type:[o.z8],write:{target:"subLayerIds",allowNull:!0,overridePolicy:J}}})],Q.prototype,"sublayers",null),(0,s._)([(0,u.p)("sublayers")],Q.prototype,"castSublayers",null),(0,s._)([(0,c.c)("sublayers")],Q.prototype,"writeSublayers",null),(0,s._)([(0,y.Cb)({type:String,json:{read:{source:"name"},write:{target:"name",allowNull:!0,overridePolicy:q}}})],Q.prototype,"title",void 0),(0,s._)([(0,y.Cb)({type:String})],Q.prototype,"typeIdField",void 0),(0,s._)([(0,d.r)("typeIdField",["layerDefinition.typeIdField"])],Q.prototype,"readTypeIdField",null),(0,s._)([(0,y.Cb)({type:[T.Z],json:{origins:{service:{read:{source:"layerDefinition.types"}}}}})],Q.prototype,"types",void 0),(0,s._)([(0,y.Cb)({type:String,dependsOn:["layer","source"],json:{read:{source:"layerUrl"},write:{target:"layerUrl",overridePolicy:k}}})],Q.prototype,"url",null),(0,s._)([(0,y.Cb)({type:Boolean,value:!0,json:{read:{source:"defaultVisibility"},write:{target:"defaultVisibility",overridePolicy:J}}})],Q.prototype,"visible",null),(0,s._)([(0,c.c)("visible")],Q.prototype,"writeVisible",null),Q=t=(0,s._)([(0,p.j)("esri.layers.support.Sublayer")],Q);const R=Q},24681:(e,r,i)=>{"use strict";function t(e,r,i){return r.flatten((({sublayers:e})=>e)).length!==e.length||(!!e.some((e=>e.originIdOf("minScale")>i||e.originIdOf("maxScale")>i||e.originIdOf("renderer")>i||e.originIdOf("labelingInfo")>i||e.originIdOf("opacity")>i||e.originIdOf("labelsVisible")>i||e.originIdOf("source")>i))||!l(e,r))}function s(e,r,i){return!!e.some((e=>{const r=e.source;return!(!r||"map-layer"===r.type&&r.mapLayerId===e.id&&(!r.gdbVersion||r.gdbVersion===i.gdbVersion))||e.originIdOf("renderer")>2||e.originIdOf("labelingInfo")>2||e.originIdOf("opacity")>2||e.originIdOf("labelsVisible")>2}))||!l(e,r)}function l(e,r){if(!e||!e.length)return!0;const i=r.slice().reverse().flatten((({sublayers:e})=>e&&e.toArray().reverse())).map((e=>e.id)).toArray();if(e.length>i.length)return!1;let t=0;const s=i.length;for(const{id:r}of e){for(;t<s&&i[t]!==r;)t++;if(t>=s)return!1}return!0}function a(e){return!!e&&e.some((e=>null!=e.minScale||e.layerDefinition&&null!=e.layerDefinition.minScale))}i.d(r,{FN:()=>s,ac:()=>a,QV:()=>t})}}]);
//# sourceMappingURL=6304.js.map