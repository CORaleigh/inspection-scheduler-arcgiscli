(self.webpackChunkinspection_scheduler=self.webpackChunkinspection_scheduler||[]).push([[2933],{66002:(e,t,s)=>{"use strict";s.d(t,{yZ:()=>i});var r=s(93533);function i(e,t){const s=t||e.extent,i=e.width,a=(0,r.c9)(s&&s.spatialReference);return s&&i?s.width/i*a*r.hd*96:0}},62933:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>F});var r=s(56140),i=(s(95830),s(59472)),a=(s(36544),s(68055)),l=s(79881),n=s(30590),o=s(87566),y=s(60538),p=s(32656),c=(s(10923),s(57002),s(9678)),h=(s(86035),s(39105)),u=s(52937),d=s(54721),m=s(1721),b=s(56700),g=s(87864),v=s(43072),f=s(18152),S=s(78910),_=s(48899),x=s(57407),w=s(63795),O=s(33716),C=s(2194),L=s(10113),D=s(2584),E=s(77204),N=s(66002),I=s(5698),q=s(41452),M=s(24681),J=s(49708),R=s(11555);let j=class extends((0,x.h)((0,D.n)((0,L.M)((0,C.Q)((0,J.x)((0,I.O)((0,_.Y)((0,S.q)((0,O.I)((0,v.R)((0,w.N)((0,E.p)(b.Z))))))))))))){constructor(...e){super(...e),this.alwaysRefetch=!1,this.dpi=96,this.gdbVersion=null,this.imageFormat="png24",this.imageMaxHeight=2048,this.imageMaxWidth=2048,this.imageTransparency=!0,this.labelsVisible=!1,this.isReference=null,this.operationalLayerType="ArcGISMapServiceLayer",this.sourceJSON=null,this.sublayers=null,this.type="map-image",this.url=null}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}load(e){const t=(0,i.pC)(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service"]},e).then((()=>this._fetchService(t)),(()=>this._fetchService(t)))),(0,h.DB)(this)}readImageFormat(e,t){const s=t.supportedImageFormatTypes;return s&&s.indexOf("PNG32")>-1?"png32":"png24"}writeSublayers(e,t,s,r){if(!this.loaded||!e)return;const i=e.slice().reverse().flatten((({sublayers:e})=>e&&e.toArray().reverse())).toArray();let a=!1;if(this.capabilities&&this.capabilities.operations.supportsExportMap&&this.capabilities.exportMap.supportsDynamicLayers){const e=(0,c.M9)(r.origin);if(3===e){const e=this.createSublayersForOrigin("service").sublayers;a=(0,M.QV)(i,e,2)}else if(e>3){const e=this.createSublayersForOrigin("portal-item");a=(0,M.QV)(i,e.sublayers,(0,c.M9)(e.origin))}}const l=[],n={writeSublayerStructure:a,...r};let o=a;i.forEach((e=>{const t=e.write({},n);l.push(t),o=o||"user"===e.originOf("visible")})),l.some((e=>Object.keys(e).length>1))&&(t.layers=l),o&&(t.visibleLayers=i.filter((e=>e.visible)).map((e=>e.id)))}createExportImageParameters(e,t,s,r){const i=r&&r.pixelRatio||1;e&&this.version>=10&&(e=e.clone().shiftCentralMeridian());const a=new R.R({layer:this,scale:(0,N.yZ)({extent:e,width:t})*i}),l=a.toJSON();a.destroy();const n=!r||!r.rotation||this.version<10.3?{}:{rotation:-r.rotation},o=e&&e.spatialReference,y=o.wkid||JSON.stringify(o.toJSON());l.dpi*=i;const p={};if(null!=r&&r.timeExtent){const{start:e,end:t}=r.timeExtent.toJSON();p.time=e&&t&&e===t?""+e:`${null==e?"null":e},${null==t?"null":t}`}else this.timeInfo&&!this.timeInfo.hasLiveData&&(p.time="null,null");return{bbox:e&&e.xmin+","+e.ymin+","+e.xmax+","+e.ymax,bboxSR:y,imageSR:y,size:t+","+s,...l,...n,...p}}async fetchImage(e,t,s,r){const i={responseType:"image"};r&&r.timestamp&&(i.query={...i.query,_ts:r.timestamp}),r&&r.signal&&(i.signal=r.signal),this.customParameters&&Object.keys(this.customParameters).length&&(i.query={...this.customParameters,...i.query});const a=this.parsedUrl.path+"/export",l={...this.parsedUrl.query,...this.createExportImageParameters(e,t,s,r),f:"image",_ts:this.alwaysRefetch?Date.now():null};return null==l.dynamicLayers||this.capabilities.exportMap.supportsDynamicLayers?(i.query?i.query={...l,...i.query}:i.query=l,(0,d.default)(a,i).then((e=>e.data)).catch((e=>{if((0,h.D_)(e))throw e;throw new p.Z("mapimagelayer:image-fetch-error",`Unable to load image: ${a}`,{error:e})}))):(0,h.d1)(new p.Z("mapimagelayer:dynamiclayer-not-supported",`service ${this.url} doesn't support dynamic layers, which is required to be able to change the sublayer's order, rendering, labeling or source.`,{query:l}))}async fetchRecomputedExtents(e={}){const t={...e,query:{returnUpdates:!0,f:"json"}},{data:s}=await(0,d.default)(this.url,t),{extent:r,fullExtent:i,timeExtent:a}=s,l=r||i;return{fullExtent:l&&u.Z.fromJSON(l),timeExtent:a&&g.Z.fromJSON({start:a[0],end:a[1]})}}loadAll(){return(0,m.GZ)(this,(e=>{e(this.allSublayers)}))}async _fetchService(e){if(this.sourceJSON)return void this.read(this.sourceJSON,{origin:"service",url:this.parsedUrl});const{data:t,ssl:s}=await(0,d.default)(this.parsedUrl.path,{query:{f:"json",...this.parsedUrl.query,...this.customParameters},signal:e});s&&(this.url=this.url.replace(/^http:/i,"https:")),this.sourceJSON=t,this.read(t,{origin:"service",url:this.parsedUrl})}};(0,r._)([(0,l.Cb)()],j.prototype,"alwaysRefetch",void 0),(0,r._)([(0,l.Cb)()],j.prototype,"dpi",void 0),(0,r._)([(0,l.Cb)()],j.prototype,"gdbVersion",void 0),(0,r._)([(0,l.Cb)({json:{read:!1,write:!1}})],j.prototype,"popupEnabled",void 0),(0,r._)([(0,l.Cb)()],j.prototype,"imageFormat",void 0),(0,r._)([(0,n.r)("imageFormat",["supportedImageFormatTypes"])],j.prototype,"readImageFormat",null),(0,r._)([(0,l.Cb)({json:{origins:{service:{read:{source:"maxImageHeight"}}}}})],j.prototype,"imageMaxHeight",void 0),(0,r._)([(0,l.Cb)({json:{origins:{service:{read:{source:"maxImageWidth"}}}}})],j.prototype,"imageMaxWidth",void 0),(0,r._)([(0,l.Cb)()],j.prototype,"imageTransparency",void 0),(0,r._)([(0,l.Cb)({json:{read:!1,write:!1}})],j.prototype,"labelsVisible",void 0),(0,r._)([(0,l.Cb)({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],j.prototype,"isReference",void 0),(0,r._)([(0,l.Cb)({type:["ArcGISMapServiceLayer"]})],j.prototype,"operationalLayerType",void 0),(0,r._)([(0,l.Cb)()],j.prototype,"sourceJSON",void 0),(0,r._)([(0,l.Cb)({json:{write:{ignoreOrigin:!0}}})],j.prototype,"sublayers",void 0),(0,r._)([(0,y.c)("sublayers",{layers:{type:[q.Z]},visibleLayers:{type:[a.z8]}})],j.prototype,"writeSublayers",null),(0,r._)([(0,l.Cb)({type:["show","hide","hide-children"]})],j.prototype,"listMode",void 0),(0,r._)([(0,l.Cb)({json:{read:!1},readOnly:!0,value:"map-image"})],j.prototype,"type",void 0),(0,r._)([(0,l.Cb)(f.HQ)],j.prototype,"url",void 0),j=(0,r._)([(0,o.j)("esri.layers.MapImageLayer")],j);const F=j},11555:(e,t,s)=>{"use strict";s.d(t,{R:()=>h});var r=s(56140),i=(s(95830),s(36544),s(68055),s(79881)),a=s(87566),l=(s(10923),s(57002),s(86035),s(79152)),n=s(18152),o=s(77204),y=s(24681),p=s(75675);const c={visible:"visibleSublayers",definitionExpression:"layerDefs",labelingInfo:"hasDynamicLayers",labelsVisible:"hasDynamicLayers",opacity:"hasDynamicLayers",minScale:"visibleSublayers",maxScale:"visibleSublayers",renderer:"hasDynamicLayers",source:"hasDynamicLayers"};let h=class extends((0,o.p)(l.Z)){constructor(){super(...arguments),this._scale=null,this.view=null}destroy(){this.layer=this.view=null}get dynamicLayers(){if(!this.hasDynamicLayers)return null;const e=this.visibleSublayers.map((e=>e.toExportImageJSON()));return e.length?JSON.stringify(e):null}get hasDynamicLayers(){return this.layer&&(0,y.FN)(this.visibleSublayers,this.layer.serviceSublayers,this.layer)}set layer(e){this._get("layer")!==e&&(this._set("layer",e),this.handles.remove("layer"),e&&this.handles.add([e.allSublayers.on("change",(()=>this.notifyChange("visibleSublayers"))),e.on("sublayer-update",(e=>this.notifyChange(c[e.propertyName])))],"layer"))}get layers(){const e=this.visibleSublayers;return e?e.length?"show:"+e.map((e=>e.id)).join(","):"show:-1":null}get layerDefs(){const e=this.visibleSublayers.filter((e=>null!=e.definitionExpression));return e.length?JSON.stringify(e.reduce(((e,t)=>(e[t.id]=t.definitionExpression,e)),{})):null}get scale(){return null!=this._scale?this._scale:this.view&&this.view.scale||0}set scale(e){this.view||(this._scale=e,this.notifyChange("scale"))}get version(){const e=this;e.layers,e.layerDefs,e.dynamicLayers,e.timeExtent;const t=e.layer;return t&&(t.dpi,t.imageFormat,t.imageTransparency,t.gdbVersion),(this._get("version")||0)+1}set version(e){this._set("version",e)}get visibleSublayers(){const e=[];if(!this.layer)return e;const t=this.layer.sublayers,s=t=>{const r=this.scale,i=0===r,a=0===t.minScale||r<=t.minScale,l=0===t.maxScale||r>=t.maxScale;t.visible&&(i||a&&l)&&(t.sublayers?t.sublayers.forEach(s):e.unshift(t))};t&&t.forEach(s);const r=this._get("visibleSublayers");return!r||r.length!==e.length||r.some(((t,s)=>e[s]!==t))?e:r}toJSON(){const e=this.layer;let t={dpi:e.dpi,format:e.imageFormat,transparent:e.imageTransparency,gdbVersion:e.gdbVersion||null};return this.hasDynamicLayers&&this.dynamicLayers?t.dynamicLayers=this.dynamicLayers:t={...t,layers:this.layers,layerDefs:this.layerDefs},t}};(0,r._)([(0,i.Cb)({readOnly:!0,dependsOn:["hasDynamicLayers","visibleSublayers"]})],h.prototype,"dynamicLayers",null),(0,r._)([(0,i.Cb)({readOnly:!0,dependsOn:["visibleSublayers","layer.serviceSublayers","layer.capabilities"]})],h.prototype,"hasDynamicLayers",null),(0,r._)([(0,i.Cb)()],h.prototype,"layer",null),(0,r._)([(0,i.Cb)({readOnly:!0,dependsOn:["visibleSublayers"]})],h.prototype,"layers",null),(0,r._)([(0,i.Cb)({readOnly:!0,dependsOn:["visibleSublayers"]})],h.prototype,"layerDefs",null),(0,r._)([(0,i.Cb)({type:Number,dependsOn:["view.scale"]})],h.prototype,"scale",null),(0,r._)([(0,i.Cb)(n.qG)],h.prototype,"timeExtent",void 0),(0,r._)([(0,i.Cb)({dependsOn:["layers","layerDefs","dynamicLayers","layer.dpi","layer.imageFormat","layer.imageTransparency","layer.gdbVersion","timeExtent"]})],h.prototype,"version",null),(0,r._)([(0,i.Cb)({type:p.Z})],h.prototype,"view",void 0),(0,r._)([(0,i.Cb)({readOnly:!0,dependsOn:["layer.sublayers","scale"]})],h.prototype,"visibleSublayers",null),h=(0,r._)([(0,a.j)("esri.layers.mixins.ExportImageParameters")],h)}}]);
//# sourceMappingURL=2933.js.map