(self.webpackChunkinspection_scheduler=self.webpackChunkinspection_scheduler||[]).push([[4005],{11555:(e,t,a)=>{"use strict";a.d(t,{R:()=>h});var s=a(56140),i=(a(95830),a(36544),a(68055),a(79881)),r=a(87566),n=(a(10923),a(57002),a(86035),a(79152)),l=a(18152),o=a(77204),u=a(24681),y=a(75675);const p={visible:"visibleSublayers",definitionExpression:"layerDefs",labelingInfo:"hasDynamicLayers",labelsVisible:"hasDynamicLayers",opacity:"hasDynamicLayers",minScale:"visibleSublayers",maxScale:"visibleSublayers",renderer:"hasDynamicLayers",source:"hasDynamicLayers"};let h=class extends((0,o.p)(n.Z)){constructor(){super(...arguments),this._scale=null,this.view=null}destroy(){this.layer=this.view=null}get dynamicLayers(){if(!this.hasDynamicLayers)return null;const e=this.visibleSublayers.map((e=>e.toExportImageJSON()));return e.length?JSON.stringify(e):null}get hasDynamicLayers(){return this.layer&&(0,u.FN)(this.visibleSublayers,this.layer.serviceSublayers,this.layer)}set layer(e){this._get("layer")!==e&&(this._set("layer",e),this.handles.remove("layer"),e&&this.handles.add([e.allSublayers.on("change",(()=>this.notifyChange("visibleSublayers"))),e.on("sublayer-update",(e=>this.notifyChange(p[e.propertyName])))],"layer"))}get layers(){const e=this.visibleSublayers;return e?e.length?"show:"+e.map((e=>e.id)).join(","):"show:-1":null}get layerDefs(){const e=this.visibleSublayers.filter((e=>null!=e.definitionExpression));return e.length?JSON.stringify(e.reduce(((e,t)=>(e[t.id]=t.definitionExpression,e)),{})):null}get scale(){return null!=this._scale?this._scale:this.view&&this.view.scale||0}set scale(e){this.view||(this._scale=e,this.notifyChange("scale"))}get version(){const e=this;e.layers,e.layerDefs,e.dynamicLayers,e.timeExtent;const t=e.layer;return t&&(t.dpi,t.imageFormat,t.imageTransparency,t.gdbVersion),(this._get("version")||0)+1}set version(e){this._set("version",e)}get visibleSublayers(){const e=[];if(!this.layer)return e;const t=this.layer.sublayers,a=t=>{const s=this.scale,i=0===s,r=0===t.minScale||s<=t.minScale,n=0===t.maxScale||s>=t.maxScale;t.visible&&(i||r&&n)&&(t.sublayers?t.sublayers.forEach(a):e.unshift(t))};t&&t.forEach(a);const s=this._get("visibleSublayers");return!s||s.length!==e.length||s.some(((t,a)=>e[a]!==t))?e:s}toJSON(){const e=this.layer;let t={dpi:e.dpi,format:e.imageFormat,transparent:e.imageTransparency,gdbVersion:e.gdbVersion||null};return this.hasDynamicLayers&&this.dynamicLayers?t.dynamicLayers=this.dynamicLayers:t={...t,layers:this.layers,layerDefs:this.layerDefs},t}};(0,s._)([(0,i.Cb)({readOnly:!0,dependsOn:["hasDynamicLayers","visibleSublayers"]})],h.prototype,"dynamicLayers",null),(0,s._)([(0,i.Cb)({readOnly:!0,dependsOn:["visibleSublayers","layer.serviceSublayers","layer.capabilities"]})],h.prototype,"hasDynamicLayers",null),(0,s._)([(0,i.Cb)()],h.prototype,"layer",null),(0,s._)([(0,i.Cb)({readOnly:!0,dependsOn:["visibleSublayers"]})],h.prototype,"layers",null),(0,s._)([(0,i.Cb)({readOnly:!0,dependsOn:["visibleSublayers"]})],h.prototype,"layerDefs",null),(0,s._)([(0,i.Cb)({type:Number,dependsOn:["view.scale"]})],h.prototype,"scale",null),(0,s._)([(0,i.Cb)(l.qG)],h.prototype,"timeExtent",void 0),(0,s._)([(0,i.Cb)({dependsOn:["layers","layerDefs","dynamicLayers","layer.dpi","layer.imageFormat","layer.imageTransparency","layer.gdbVersion","timeExtent"]})],h.prototype,"version",null),(0,s._)([(0,i.Cb)({type:y.Z})],h.prototype,"view",void 0),(0,s._)([(0,i.Cb)({readOnly:!0,dependsOn:["layer.sublayers","scale"]})],h.prototype,"visibleSublayers",null),h=(0,s._)([(0,r.j)("esri.layers.mixins.ExportImageParameters")],h)},83873:(e,t,a)=>{"use strict";function s(e,t){return t?"xoffset"in t&&t.xoffset?Math.max(e,Math.abs(t.xoffset)):"yoffset"in t&&t.yoffset?Math.max(e,Math.abs(t.yoffset||0)):e:e}function i(e,t){return"number"==typeof e?e:e&&e.stops&&e.stops.length?function(e){let t=0,a=0;for(let s=0;s<e.length;s++){const i=e[s].size;"number"==typeof i&&(t+=i,a++)}return t/a}(e.stops):t}function r(e){const t=e&&e.renderer,a="touch"===(e&&e.event&&e.event.pointerType)?9:6;if(!t)return a;const r="visualVariables"in t?function(e,t){if(!t)return e;const a=t.filter((e=>"size"===e.type)).map((t=>{const{maxSize:a,minSize:s}=t;return(i(a,e)+i(s,e))/2}));let s=0;const r=a.length;if(0===r)return e;for(let e=0;e<r;e++)s+=a[e];const n=Math.floor(s/r);return Math.max(n,e)}(a,t.visualVariables):a;if("simple"===t.type)return s(r,t.symbol);if("unique-value"===t.type){let e=r;return t.uniqueValueInfos.forEach((t=>{e=s(e,t.symbol)})),e}if("class-breaks"===t.type){let e=r;return t.classBreakInfos.forEach((t=>{e=s(e,t.symbol)})),e}return t.type,r}a.d(t,{k:()=>r})},94005:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>C});var s=a(56140),i=(a(95830),a(36544)),r=(a(68055),a(79881)),n=a(87566),l=(a(10923),a(57002),a(86035),a(39105)),o=a(80621),u=a(12421),y=a(11555),p=a(48164),h=a(37694),c=a(59472),d=a(32656),m=a(30927),f=a(83873),b=a(21707);const g=e=>{let t=class extends e{async fetchPopupFeatures(e,t){const{layer:a}=this;if(!e)return(0,l.d1)(new d.Z("mapimagelayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:a}));const s=this.get("view.scale"),i=[],r=async e=>{const a=0===e.minScale||s<=e.minScale,n=0===e.maxScale||s>=e.maxScale;if(e.visible&&a&&n)if(e.sublayers)e.sublayers.forEach(r);else if(e.popupEnabled){const a=(0,b.V)(e,{...t,defaultPopupTemplateEnabled:!1});(0,c.pC)(a)&&i.push({sublayer:e,popupTemplate:a})}},n=a.sublayers.toArray().map(r);await(0,l.$6)(n);const o=i.map((async({sublayer:a,popupTemplate:s})=>{await a.load().catch((()=>{}));const i=a.createQuery(),r=(0,c.pC)(t)?t.event:null,n=(0,f.k)({renderer:a.renderer,event:r}),l=this.createFetchPopupFeaturesQueryGeometry(e,n);i.geometry=l,i.outFields=await(0,b.e)(a,s);const o=await this._loadArcadeModules(s);return o&&o.arcadeUtils.hasGeometryOperations(s)||(i.maxAllowableOffset=l.width/n),(await a.queryFeatures(i)).features}));return(await(0,l.as)(o)).reduce(((e,t)=>t.value?[...e,...t.value]:e),[]).filter((e=>null!=e))}canResume(){var e,t;return!(!super.canResume()||null!=(e=this.imageParameters)&&null!=(t=e.timeExtent)&&t.isEmpty)}_loadArcadeModules(e){if(e.get("expressionInfos.length"))return(0,m.LC)()}};return(0,s._)([(0,r.Cb)()],t.prototype,"imageParameters",void 0),(0,s._)([(0,r.Cb)()],t.prototype,"layer",void 0),(0,s._)([(0,r.Cb)({dependsOn:["imageParameters.timeExtent"]})],t.prototype,"suspended",void 0),t=(0,s._)([(0,n.j)("esri.views.layers.MapImageLayerView")],t),t};var v=a(28511),x=a(81558),w=a(81186);const _=i.Z.getLogger("esri.views.2d.layers.MapImageLayerView2D");let S=class extends(g((0,u.y)((0,x.y)(p.Z)))){constructor(){super(...arguments),this._exportImageVersion=-1}hitTest(){return null}update(e){this.strategy.update(e).catch((e=>{(0,l.D_)(e)||_.error(e)}))}attach(){const{imageMaxWidth:e,imageMaxHeight:t,version:a}=this.layer,s=a>=10.3,i=a>=10;this._bitmapContainer=new v.c,this.container.addChild(this._bitmapContainer),this.strategy=new w.Z({container:this._bitmapContainer,fetchSource:this.fetchImage.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxWidth:e,imageMaxHeight:t,imageRotationSupported:s,imageNormalizationSupported:i,hidpi:!0}),this.imageParameters=new y.R({view:this.view,layer:this.layer}),this.handles.add((0,o.init)(this.imageParameters,"version",(e=>{this._exportImageVersion!==e&&(this._exportImageVersion=e,this.requestUpdate())})),"mapimagelayerview-update")}detach(){this.strategy.destroy(),this.handles.remove("mapimagelayerview-update"),this.imageParameters.destroy(),this.imageParameters=null,this._exportImageVersion=-1,this.container.removeChild(this._bitmapContainer),this._bitmapContainer.removeAllChildren()}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}createFetchPopupFeaturesQueryGeometry(e,t){return(0,h.K)(e,t,this.view)}async doRefresh(){this.requestUpdate()}isUpdating(){return this.strategy.updating||this.updateRequested}fetchImage(e,t,a,s){return this.layer.fetchImage(e,t,a,{timeExtent:this.imageParameters.timeExtent,timestamp:this.refreshTimestamp,...s})}};(0,s._)([(0,r.Cb)()],S.prototype,"strategy",void 0),(0,s._)([(0,r.Cb)({dependsOn:["strategy.updating"]})],S.prototype,"updating",void 0),S=(0,s._)([(0,n.j)("esri.views.2d.layers.MapImageLayerView2D")],S);const C=S},21707:(e,t,a)=>{"use strict";a.d(t,{V:()=>n,e:()=>r});var s=a(59472),i=a(4665);async function r(e,t=e.popupTemplate){if(!(0,s.pC)(t))return[];const a=await t.getRequiredFields(e.fields),{lastEditInfoEnabled:r}=t,{objectIdField:n,typeIdField:l,globalIdField:o,relationships:u}=e;if(a.includes("*"))return["*"];const y=r?await(0,i.CH)(e):[],p=(0,i.Q0)(e.fields,[...a,...y]);return l&&p.push(l),p&&n&&(0,i.cT)(e.fields,n)&&-1===p.indexOf(n)&&p.push(n),p&&o&&(0,i.cT)(e.fields,o)&&-1===p.indexOf(o)&&p.push(o),u&&u.forEach((t=>{const{keyField:a}=t;p&&a&&(0,i.cT)(e.fields,a)&&-1===p.indexOf(a)&&p.push(a)})),p}function n(e,t){return e.popupTemplate?e.popupTemplate:(0,s.pC)(t)&&t.defaultPopupTemplateEnabled&&(0,s.pC)(e.defaultPopupTemplate)?e.defaultPopupTemplate:null}},37694:(e,t,a)=>{"use strict";a.d(t,{K:()=>n});var s=a(59472),i=a(52937),r=(a(36348),a(93533));function n(e,t,a,n=new i.Z){let l;if("2d"===a.type)l=t*a.resolution;else if("3d"===a.type){const i=a.overlayPixelSizeInMapUnits(e),n=a.basemapSpatialReference;l=(0,s.pC)(n)&&!n.equals(a.spatialReference)?(0,r.c9)(n)/(0,r.c9)(a.spatialReference):t*i}const o=e.x-l,u=e.y-l,y=e.x+l,p=e.y+l,{spatialReference:h}=a;return n.xmin=Math.min(o,y),n.ymin=Math.min(u,p),n.xmax=Math.max(o,y),n.ymax=Math.max(u,p),n.spatialReference=h,n}new i.Z}}]);
//# sourceMappingURL=4005.js.map