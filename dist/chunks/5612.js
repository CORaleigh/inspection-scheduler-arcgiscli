(self.webpackChunkinspection_scheduler=self.webpackChunkinspection_scheduler||[]).push([[5612],{66002:(e,t,r)=>{"use strict";r.d(t,{yZ:()=>s});var n=r(93533);function s(e,t){const r=t||e.extent,s=e.width,i=(0,n.c9)(r&&r.spatialReference);return r&&s?r.width/s*i*n.hd*96:0}},5612:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>G});var n,s=r(56140),i=(r(95830),r(82550)),a=r(34926),l=r(59472),o=(r(36544),r(68055)),u=r(79881),p=r(56274),d=r(30590),c=r(87566),y=r(60538),h=r(10923),m=(r(57002),r(86035),r(39105)),f=r(65131),b=r(27780),g=r(73032),x=r(52937),_=r(83477),v=r(58484),w=r(54721),E=r(15988),S=r(59691),C=r(78452),N=r(56700),O=r(43072),I=r(97849),R=r(18152),U=r(78910),F=r(57407),L=r(33716),M=r(2194),P=r(10113),A=r(2584),q=r(66002),T=r(48609),j=r(58807),Z=r(60263);let W=0,H=n=class extends O.w{constructor(e){super(e),this._sublayersHandles=new S.Z,this.dimensions=null,this.fullExtents=null,this.featureInfoFormat=null,this.featureInfoUrl=null,this.legendUrl=null,this.legendEnabled=!0,this.maxScale=0,this.minScale=0,this.popupEnabled=!1,this.queryable=!1,this.spatialReferences=null}get description(){return this._get("description")}set description(e){this._set("description",e)}get fullExtent(){return this._get("fullExtent")}set fullExtent(e){this._set("fullExtent",e)}readExtent(e,t){return(e=t.extent)?x.Z.fromJSON(e):null}get id(){const e=this._get("id");return null==e?W++:e}set id(e){this._set("id",e)}readLegendUrl(e,t){return t?t.legendUrl||t.legendURL:null}set layer(e){this._set("layer",e),this.sublayers&&this.sublayers.forEach((t=>t.layer=e))}get name(){return this._get("name")}set name(e){this._set("name",e)}set sublayers(e){const t=this._get("sublayers");t&&(t.forEach((e=>{e.layer=null})),this._sublayersHandles.removeAll(),this._sublayersHandles=null),e&&(e.forEach((e=>{e.parent=this,e.layer=this.layer})),this._sublayersHandles.add([e.on("after-add",(({item:e})=>{e.parent=this,e.layer=this.layer})),e.on("after-remove",(({item:e})=>{e.parent=null,e.layer=null}))])),this._set("sublayers",e)}castSublayers(e){return(0,o.se)(_.Z.ofType(n),e)}get title(){return this._get("title")}set title(e){this._set("title",e)}get visible(){return this._get("visible")}set visible(e){this._setAndNotifyLayer("visible",e)}clone(){const e=new n;return this.hasOwnProperty("description")&&(e.description=this.description),this.hasOwnProperty("fullExtent")&&(e.fullExtent=this.fullExtent.clone()),this.hasOwnProperty("fullExtents")&&(e.fullExtents=this.fullExtents.map((e=>e.clone()))),this.hasOwnProperty("featureInfoFormat")&&(e.featureInfoFormat=this.featureInfoFormat),this.hasOwnProperty("featureInfoUrl")&&(e.featureInfoUrl=this.featureInfoUrl),this.hasOwnProperty("legendUrl")&&(e.legendUrl=this.legendUrl),this.hasOwnProperty("legendEnabled")&&(e.legendEnabled=this.legendEnabled),this.hasOwnProperty("layer")&&(e.layer=this.layer),this.hasOwnProperty("name")&&(e.name=this.name),this.hasOwnProperty("parent")&&(e.parent=this.parent),this.hasOwnProperty("queryable")&&(e.queryable=this.queryable),this.hasOwnProperty("sublayers")&&(e.sublayers=this.sublayers&&this.sublayers.map((e=>e.clone()))),this.hasOwnProperty("spatialReferences")&&(e.spatialReferences=this.spatialReferences.map((e=>e))),this.hasOwnProperty("visible")&&(e.visible=this.visible),this.hasOwnProperty("title")&&(e.title=this.title),e}_setAndNotifyLayer(e,t){const r=this.layer;this._get(e)!==t&&(this._set(e,t),r&&r.emit("wms-sublayer-update",{propertyName:e,id:this.id}))}};(0,s._)([(0,u.Cb)()],H.prototype,"description",null),(0,s._)([(0,u.Cb)({readOnly:!0})],H.prototype,"dimensions",void 0),(0,s._)([(0,u.Cb)({value:null})],H.prototype,"fullExtent",null),(0,s._)([(0,d.r)("fullExtent",["extent"])],H.prototype,"readExtent",null),(0,s._)([(0,u.Cb)()],H.prototype,"fullExtents",void 0),(0,s._)([(0,u.Cb)()],H.prototype,"featureInfoFormat",void 0),(0,s._)([(0,u.Cb)()],H.prototype,"featureInfoUrl",void 0),(0,s._)([(0,u.Cb)({type:Number,json:{write:{enabled:!1,overridePolicy:()=>({ignoreOrigin:!0,enabled:!0})}}})],H.prototype,"id",null),(0,s._)([(0,u.Cb)({type:String,json:{origins:{"web-document":{read:{source:["legendUrl","legendURL"]},write:{target:"legendUrl",ignoreOrigin:!0}}},read:{source:"legendURL"},write:{ignoreOrigin:!0}}})],H.prototype,"legendUrl",void 0),(0,s._)([(0,d.r)(["web-document"],"legendUrl")],H.prototype,"readLegendUrl",null),(0,s._)([(0,u.Cb)({value:!0,type:Boolean,json:{read:{source:"showLegend"},write:{target:"showLegend"},origins:{"web-map":{read:!1,write:!1},"web-scene":{read:!1,write:!1}}}})],H.prototype,"legendEnabled",void 0),(0,s._)([(0,u.Cb)({value:null})],H.prototype,"layer",null),(0,s._)([(0,u.Cb)()],H.prototype,"maxScale",void 0),(0,s._)([(0,u.Cb)()],H.prototype,"minScale",void 0),(0,s._)([(0,u.Cb)({type:String,value:null,json:{read:{source:"name"},write:{ignoreOrigin:!0}}})],H.prototype,"name",null),(0,s._)([(0,u.Cb)()],H.prototype,"parent",void 0),(0,s._)([(0,u.Cb)({type:Boolean,json:{read:{source:"showPopup"},write:{ignoreOrigin:!0,target:"showPopup"}}})],H.prototype,"popupEnabled",void 0),(0,s._)([(0,u.Cb)({type:Boolean,json:{write:{ignoreOrigin:!0}}})],H.prototype,"queryable",void 0),(0,s._)([(0,u.Cb)()],H.prototype,"sublayers",null),(0,s._)([(0,Z.p)("sublayers")],H.prototype,"castSublayers",null),(0,s._)([(0,u.Cb)({type:[Number],json:{read:{source:"spatialReferences"}}})],H.prototype,"spatialReferences",void 0),(0,s._)([(0,u.Cb)({type:String,value:null,json:{write:{ignoreOrigin:!0}}})],H.prototype,"title",null),(0,s._)([(0,u.Cb)({type:Boolean,value:!0,json:{read:{source:"defaultVisibility"}}})],H.prototype,"visible",null),H=n=(0,s._)([(0,c.j)("esri.layers.support.WMSSublayer")],H);const V=H,k=new p.Xn({bmp:"image/bmp",gif:"image/gif",jpg:"image/jpeg",png:"image/png",svg:"image/svg+xml"},{ignoreUnknown:!1});let B=class extends((0,F.h)((0,A.n)((0,M.Q)((0,P.M)((0,U.q)((0,L.I)((0,O.R)(N.Z)))))))){constructor(...e){super(...e),this._sublayersHandles=new S.Z,this.allSublayers=new C.Z({root:this,rootCollectionNames:["sublayers"],getChildrenFunction:e=>e.sublayers}),this.customParameters=null,this.customLayerParameters=null,this.copyright=null,this.description=null,this.dimensions=null,this.fullExtent=null,this.fullExtents=null,this.featureInfoFormat=null,this.featureInfoUrl=null,this.imageFormat=null,this.imageMaxHeight=2048,this.imageMaxWidth=2048,this.imageTransparency=!0,this.legendEnabled=!0,this.mapUrl=null,this.isReference=null,this.operationalLayerType="WMS",this.spatialReference=null,this.spatialReferences=null,this.sublayers=null,this.type="wms",this.url=null,this.version=null,this.watch("sublayers",((e,t)=>{t&&(t.forEach((e=>{e.layer=null})),this._sublayersHandles.removeAll(),this._sublayersHandles=null),e&&(e.forEach((e=>{e.parent=this,e.layer=this})),this._sublayersHandles||(this._sublayersHandles=new S.Z),this._sublayersHandles.add([e.on("after-add",(({item:e})=>{e.parent=this,e.layer=this})),e.on("after-remove",(({item:e})=>{e.parent=null,e.layer=null}))]))}),!0)}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}destroy(){var e;null==(e=this._exportWMSImageParameters)||e.destroy()}load(e){const t=(0,l.pC)(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["WMS"]},e).then((()=>this._fetchService(t)),(()=>this._fetchService(t)))),(0,m.DB)(this)}readFullExtentFromItemOrMap(e,t){const r=t.extent;return new x.Z({xmin:r[0][0],ymin:r[0][1],xmax:r[1][0],ymax:r[1][1]})}writeFullExtent(e,t){t.extent=[[e.xmin,e.ymin],[e.xmax,e.ymax]]}readImageFormat(e,t){const r=t.supportedImageFormatTypes;return r&&r.indexOf("image/png")>-1?"image/png":r&&r[0]}readSpatialReferenceFromItemOrDocument(e,t){return new g.Z(t.spatialReferences[0])}writeSpatialReferences(e,t){const r=this.spatialReference&&this.spatialReference.wkid;e&&r?(t.spatialReferences=e.filter((e=>e!==r)),t.spatialReferences.unshift(r)):t.spatialReferences=e}readSublayersFromItemOrMap(e,t,r){return D(t.layers,r,t.visibleLayers)}readSublayers(e,t,r){return D(t.layers,r)}writeSublayers(e,t,r,n){t.layers=[];const s=new Map,i=e.flatten((({sublayers:e})=>e&&e.toArray())).toArray();i.forEach((e=>{"number"==typeof e.parent.id&&(s.has(e.parent.id)?s.get(e.parent.id).push(e.id):s.set(e.parent.id,[e.id]))})),i.forEach((e=>{const r={sublayer:e,...n},i=e.write({parentLayerId:"number"==typeof e.parent.id?e.parent.id:-1},r);if(s.has(e.id)&&(i.sublayerIds=s.get(e.id)),!e.sublayers&&e.name){const n=e.write({},r);delete n.id,t.layers.push(n)}})),t.visibleLayers=i.filter((e=>e.visible&&!e.sublayers)).map((e=>e.name))}createExportImageParameters(e,t,r,n){var s;const i=n&&n.pixelRatio||1,a=(0,q.yZ)({extent:e,width:t})*i;return null==(s=this._exportWMSImageParameters)||s.destroy(),this._exportWMSImageParameters=new j.Z({layer:this,extent:e,scale:a}),this._exportWMSImageParameters.toJSON()}async fetchImage(e,t,r,n){var s,i;const a=this.mapUrl,l=this.createExportImageParameters(e,t,r,n);if(!l.layers){const e=document.createElement("canvas");return e.width=t,e.height=r,e}const o=null==n||null==(s=n.timeExtent)?void 0:s.start,u=null==n||null==(i=n.timeExtent)?void 0:i.end,p=o&&u?o.getTime()===u.getTime()?(0,T.Y6)(o):`${(0,T.Y6)(o)}/${(0,T.Y6)(u)}`:void 0,d={responseType:"image",query:this._mixCustomParameters({width:t,height:r,...l,time:p}),signal:null==n?void 0:n.signal};return null!=n&&n.timestamp&&(d.query={_ts:n.timestamp,...d.query}),(0,w.default)(a,d).then((e=>e.data))}fetchFeatureInfo(e,t,r,n,s){const i=(0,T.xX)(this._exportWMSImageParameters.visibleSublayers);if(!this.featureInfoUrl||!i)return null;const a="1.3.0"===this.version?{I:n,J:s}:{x:n,y:s},l={query_layers:i,request:"GetFeatureInfo",info_format:this.featureInfoFormat,feature_count:25,width:t,height:r,...a};let o={...this.createExportImageParameters(e,t,r),...l};return o=this._mixCustomParameters(o),(0,w.default)(this.featureInfoUrl,{query:o,responseType:"text"}).then((e=>{let t=this.featureInfoUrl;t+=-1===t.indexOf("?")?"?":"";for(const e in o)t+="?"===t.substring(t.length-1,t.length)?"":"&",t+=e+"="+o[e];const r=document.createElement("iframe");return r.src=t,r.frameBorder="0",r.marginHeight="0",r.marginWidth="0",r.innerHTML=e.data,r.style.width="100%",new E.default({sourceLayer:this,popupTemplate:new v.Z({title:this.title,content:r})})}))}findSublayerById(e){return this.allSublayers.find((t=>t.id===e))}findSublayerByName(e){return this.allSublayers.find((t=>t.name===e))}supportsSpatialReference(e){return(0,I.G)(this.url)||this.spatialReferences.some((t=>{const r=900913===t?g.Z.WebMercator:new g.Z({wkid:t});return(0,b.fS)(r,e)}))}async _fetchService(e){if(!this.resourceInfo){this.parsedUrl.query&&this.parsedUrl.query.service&&(this.parsedUrl.query.SERVICE=this.parsedUrl.query.service,delete this.parsedUrl.query.service),this.parsedUrl.query&&this.parsedUrl.query.request&&(this.parsedUrl.query.REQUEST=this.parsedUrl.query.request,delete this.parsedUrl.query.request);const t=await(0,w.default)(this.parsedUrl.path,{query:{SERVICE:"WMS",REQUEST:"GetCapabilities",...this.parsedUrl.query,...this.customParameters},responseType:"xml",signal:e});this.resourceInfo=(0,T.V4)(t.data)}if(this.parsedUrl){const e=new h.R9(this.parsedUrl.path);"https"!==e.scheme||e.port&&"443"!==e.port||-1!==a.Z.request.httpsDomains.indexOf(e.host)||a.Z.request.httpsDomains.push(e.host)}this.read(this.resourceInfo,{origin:"service"})}_mixCustomParameters(e){if(!this.customLayerParameters&&!this.customParameters)return e;const t={...this.customParameters,...this.customLayerParameters};for(const r in t)e[r.toLowerCase()]=t[r];return e}};function D(e,t,r){const n=new Map;e.every((e=>null==e.id))&&(e=(0,i.d9)(e)).forEach(((e,t)=>e.id=t));for(const s of e){const e=new V;e.read(s,t),-1===(null==r?void 0:r.indexOf(e.name))&&(e.visible=!1),n.set(e.id,e)}const s=[];for(const t of e){const e=n.get(t.id);if(null!=t.parentLayerId&&t.parentLayerId>=0){const r=n.get(t.parentLayerId);r.sublayers||(r.sublayers=new _.Z),r.sublayers.unshift(e)}else s.unshift(e)}return s}(0,s._)([(0,u.Cb)({readOnly:!0})],B.prototype,"allSublayers",void 0),(0,s._)([(0,u.Cb)({json:{type:Object,write:!0}})],B.prototype,"customParameters",void 0),(0,s._)([(0,u.Cb)({json:{type:Object,write:!0}})],B.prototype,"customLayerParameters",void 0),(0,s._)([(0,u.Cb)({type:String,json:{write:!0}})],B.prototype,"copyright",void 0),(0,s._)([(0,u.Cb)()],B.prototype,"description",void 0),(0,s._)([(0,u.Cb)({readOnly:!0})],B.prototype,"dimensions",void 0),(0,s._)([(0,u.Cb)({json:{type:[[Number]],read:{source:"extent"},write:{target:"extent"},origins:{service:{read:{source:"extent"}}}}})],B.prototype,"fullExtent",void 0),(0,s._)([(0,d.r)(["web-document","portal-item"],"fullExtent",["extent"])],B.prototype,"readFullExtentFromItemOrMap",null),(0,s._)([(0,y.c)(["web-document","portal-item"],"fullExtent",{extent:{type:[[Number]]}})],B.prototype,"writeFullExtent",null),(0,s._)([(0,u.Cb)()],B.prototype,"fullExtents",void 0),(0,s._)([(0,u.Cb)({type:String,json:{write:{ignoreOrigin:!0}}})],B.prototype,"featureInfoFormat",void 0),(0,s._)([(0,u.Cb)({type:String,json:{write:{ignoreOrigin:!0}}})],B.prototype,"featureInfoUrl",void 0),(0,s._)([(0,u.Cb)({type:String,json:{origins:{"web-document":{default:"image/png",type:k.jsonValues,read:{reader:k.read,source:"format"},write:{writer:k.write,target:"format"}}}}})],B.prototype,"imageFormat",void 0),(0,s._)([(0,d.r)("imageFormat",["supportedImageFormatTypes"])],B.prototype,"readImageFormat",null),(0,s._)([(0,u.Cb)({type:Number,json:{read:{source:"maxHeight"},write:{target:"maxHeight"}}})],B.prototype,"imageMaxHeight",void 0),(0,s._)([(0,u.Cb)({type:Number,json:{read:{source:"maxWidth"},write:{target:"maxWidth"}}})],B.prototype,"imageMaxWidth",void 0),(0,s._)([(0,u.Cb)()],B.prototype,"imageTransparency",void 0),(0,s._)([(0,u.Cb)(R.rn)],B.prototype,"legendEnabled",void 0),(0,s._)([(0,u.Cb)({type:["show","hide","hide-children"]})],B.prototype,"listMode",void 0),(0,s._)([(0,u.Cb)({type:String,json:{write:{ignoreOrigin:!0}}})],B.prototype,"mapUrl",void 0),(0,s._)([(0,u.Cb)({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],B.prototype,"isReference",void 0),(0,s._)([(0,u.Cb)({type:["WMS"]})],B.prototype,"operationalLayerType",void 0),(0,s._)([(0,u.Cb)({type:g.Z,json:{origins:{service:{read:{source:"extent.spatialReference"}}},write:!1}})],B.prototype,"spatialReference",void 0),(0,s._)([(0,d.r)(["web-document","portal-item"],"spatialReference",["spatialReferences"])],B.prototype,"readSpatialReferenceFromItemOrDocument",null),(0,s._)([(0,u.Cb)({type:[o.z8],json:{read:{source:"spatialReferences"},write:{ignoreOrigin:!0}}})],B.prototype,"spatialReferences",void 0),(0,s._)([(0,y.c)(["web-document","portal-item"],"spatialReferences")],B.prototype,"writeSpatialReferences",null),(0,s._)([(0,u.Cb)({type:_.Z.ofType(V),json:{write:{target:"layers",overridePolicy(e,t,r){if(function(e,t){return e.some((e=>{for(const r in e)if((0,f.df)(e,r,null,t))return!0;return!1}))}(this.allSublayers,r))return{ignoreOrigin:!0}}}}})],B.prototype,"sublayers",void 0),(0,s._)([(0,d.r)(["web-document","portal-item"],"sublayers",["layers","visibleLayers"])],B.prototype,"readSublayersFromItemOrMap",null),(0,s._)([(0,d.r)("service","sublayers",["layers"])],B.prototype,"readSublayers",null),(0,s._)([(0,y.c)("sublayers",{layers:{type:[V]},visibleLayers:{type:[String]}})],B.prototype,"writeSublayers",null),(0,s._)([(0,u.Cb)({json:{read:!1},readOnly:!0,value:"wms"})],B.prototype,"type",void 0),(0,s._)([(0,u.Cb)(R.HQ)],B.prototype,"url",void 0),(0,s._)([(0,u.Cb)({type:String,json:{write:{ignoreOrigin:!0}}})],B.prototype,"version",void 0),B=(0,s._)([(0,c.j)("esri.layers.WMSLayer")],B);const G=B},58807:(e,t,r)=>{"use strict";r.d(t,{Z:()=>h});var n=r(56140),s=(r(95830),r(36544),r(68055),r(79881)),i=r(87566),a=(r(10923),r(57002),r(86035),r(79152)),l=r(59691),o=r(18152),u=r(48609);const p={visible:"visibleSublayers"},d=[102100,3857,102113,900913],c=[3395,54004];let y=class extends a.default{constructor(){super(...arguments),this._layerHandles=new l.Z,this.extent=null,this._scale=null,this.view=null}set layer(e){this._get("layer")!==e&&(this._set("layer",e),this._layerHandles&&(this._layerHandles.removeAll(),this._layerHandles=null),e&&(this._layerHandles||(this._layerHandles=new l.Z),this._layerHandles.add([e.sublayers.on("change",(()=>this.notifyChange("visibleSublayers"))),e.on("wms-sublayer-update",(e=>this.notifyChange(p[e.propertyName])))])))}get layers(){const{visibleSublayers:e}=this;return e.filter((e=>e.name)).map((e=>e.name)).join(",")}get scale(){return null!=this._scale?this._scale:this.view&&this.view.scale||0}set scale(e){this.view||(this._scale=e,this.notifyChange("scale"))}get version(){return(this._get("version")||0)+1}get visibleSublayers(){const{layer:e,scale:t}=this,{sublayers:r}=e,n=[],s=e=>{const{minScale:r,maxScale:i,sublayers:a,visible:l}=e;l&&(0===t||(0===r||t<=r)&&(0===i||t>=i))&&(a?a.forEach(s):n.unshift(e))};return null==r||r.forEach(s),n}get wkid(){const{extent:e,layer:t}=this,r=t.spatialReferences;let n=e.spatialReference&&e.spatialReference.wkid;r&&-1===r.indexOf(n)&&e.spatialReference.latestWkid&&(n=e.spatialReference.latestWkid);const s=d.some((e=>e===n));if(!r)return n;if(s){const e=[];r.forEach((t=>{d.indexOf(t)>-1&&e.push(t)})),e.length||r.forEach((t=>{c.indexOf(t)>-1&&e.push(t)})),n=e.length>0?e[0]:d[0]}return n}toJSON(){const{extent:e,layer:t,layers:r}=this,{imageFormat:n,imageTransparency:s,spatialReferences:i,version:a}=t;let{wkid:l}=this;i&&-1===i.indexOf(l)&&e.spatialReference.latestWkid&&(l=e.spatialReference.latestWkid);const{xmin:o,ymin:p,xmax:d,ymax:c}=e,y={bbox:"1.3.0"===t.version&&(0,u.QZ)(l)?`${p},${o},${c},${d}`:`${o},${p},${d},${c}`,format:n,request:"GetMap",service:"WMS",styles:"",transparent:s,version:a};return isNaN(l)||("1.3.0"===a?y.crs="EPSG:"+l:y.srs="EPSG:"+l),{...y,layers:r}}};(0,n._)([(0,s.Cb)()],y.prototype,"extent",void 0),(0,n._)([(0,s.Cb)()],y.prototype,"layer",null),(0,n._)([(0,s.Cb)({readOnly:!0,dependsOn:["visibleSublayers"]})],y.prototype,"layers",null),(0,n._)([(0,s.Cb)({type:Number,dependsOn:["view.scale"]})],y.prototype,"scale",null),(0,n._)([(0,s.Cb)(o.qG)],y.prototype,"timeExtent",void 0),(0,n._)([(0,s.Cb)({type:Number,dependsOn:["layers","layer.imageTransparency","timeExtent"],readOnly:!0})],y.prototype,"version",null),(0,n._)([(0,s.Cb)()],y.prototype,"view",void 0),(0,n._)([(0,s.Cb)({readOnly:!0,dependsOn:["layer.sublayers","scale"]})],y.prototype,"visibleSublayers",null),(0,n._)([(0,s.Cb)({dependsOn:[],autoTracked:!1})],y.prototype,"wkid",null),y=(0,n._)([(0,i.j)("esri.layers.support.ExportWMSImageParameters")],y);const h=y},48609:(e,t,r)=>{"use strict";r.d(t,{QZ:()=>p,xX:()=>d,V4:()=>u,Y6:()=>R});var n=r(32656),s=r(10923),i=r(73032),a=r(52937);const l=[[4001,4999],[2044,2045],[2081,2083],[2085,2086],[2093,2093],[2096,2098],[2105,2132],[2169,2170],[2176,2180],[2193,2193],[2200,2200],[2206,2212],[2319,2319],[2320,2462],[2523,2549],[2551,2735],[2738,2758],[2935,2941],[2953,2953],[3006,3030],[3034,3035],[3058,3059],[3068,3068],[3114,3118],[3126,3138],[3300,3301],[3328,3335],[3346,3346],[3350,3352],[3366,3366],[3416,3416],[20004,20032],[20064,20092],[21413,21423],[21473,21483],[21896,21899],[22171,22177],[22181,22187],[22191,22197],[25884,25884],[27205,27232],[27391,27398],[27492,27492],[28402,28432],[28462,28492],[30161,30179],[30800,30800],[31251,31259],[31275,31279],[31281,31290],[31466,31700]],o={84:4326,83:4269,27:4267};function u(e){if(!e)return null;const t={idCounter:-1};"string"==typeof e&&(e=(new DOMParser).parseFromString(e,"text/xml"));const r=e.documentElement;if("ServiceExceptionReport"===r.nodeName){const e=Array.prototype.slice.call(r.childNodes).map((e=>e.textContent)).join("\r\n");throw new n.Z("wmslayer:wms-capabilities-xml-is-not-valid","The server returned errors when the WMS capabilities were requested.",e)}const s=h("Capability",r),i=h("Service",r),l=h("Request",s);if(!s||!i||!l)return null;const o=h("Layer",s);if(!o)return null;const u="WMS_Capabilities"===r.nodeName||"WMT_MS_Capabilities"===r.nodeName?r.getAttribute("version"):"1.3.0",p=f("Title",i,"")||f("Name",i,""),d=f("AccessConstraints",i,""),y=f("Abstract",i,""),m=parseInt(f("MaxWidth",i,"5000"),10),b=parseInt(f("MaxHeight",i,"5000"),10),_=x(l,"GetMap"),w=g(l,"GetMap"),S=v(o,u,t);let C,N,O,I,R=0;if(Array.prototype.slice.call(s.childNodes).forEach((e=>{"Layer"===e.nodeName&&(0===R?C=e:1===R?(S.name&&(S.name="",S.sublayers.push(v(C,u,t))),S.sublayers.push(v(e,u,t))):S.sublayers.push(v(e,u,t)),R++)})),!S)return null;const U=S.fullExtents;if(N=S.sublayers,N||(N=[]),0===N.length&&N.push(S),O=S.extent,!O){const e=new a.Z(N[0].extent);S.extent=e.toJSON(),O=S.extent}if(I=S.spatialReferences,!I.length&&N.length>0){const e=t=>{let r=[];return t.sublayers.forEach((t=>{!r.length&&t.spatialReferences.length&&(r=t.spatialReferences||e(t))})),r};N.forEach((t=>{I.length||(I=t.spatialReferences||e(t))}))}const F=g(l,"GetFeatureInfo");let L;if(F){const e=x(l,"GetFeatureInfo");e.indexOf("text/html")>-1?L="text/html":e.indexOf("text/plain")>-1&&(L="text/plain")}if(!L){const e=function(t){t&&(t.queryable=!1,t.sublayers&&t.sublayers.forEach((t=>{e(t)})))};e(S)}const M=c(N),P=S.minScale||0,A=S.maxScale||0,q=S.dimensions,T=M.reduce(((e,t)=>e.concat(t.dimensions)),[]),j=q.concat(T).filter(E);let Z=null;if(j.length>0){let e=Number.POSITIVE_INFINITY,t=Number.NEGATIVE_INFINITY;j.forEach((r=>{const{extent:n}=r;var s;s=n,Array.isArray(s)&&s.length>0&&s[0]instanceof Date?n.forEach((r=>{e=Math.min(e,r.getTime()),t=Math.max(t,r.getTime())})):n.forEach((r=>{e=Math.min(e,r.min.getTime()),t=Math.max(t,r.max.getTime())}))})),Z={startTimeField:null,endTimeField:null,trackIdField:null,timeExtent:[e,t]}}return{copyright:d,description:y,dimensions:q,extent:O,fullExtents:U,featureInfoFormat:L,featureInfoUrl:F,mapUrl:w,maxWidth:m,maxHeight:b,maxScale:A,minScale:P,layers:M,spatialReferences:I,supportedImageFormatTypes:_,timeInfo:Z,title:p,version:u}}function p(e){return l.some((t=>{const r=t[0],n=t[1];return e>=r&&e<=n}))}function d(e){return e.length?e.filter((e=>e.popupEnabled&&e.name&&e.queryable)).map((e=>e.name)).join(","):""}function c(e){let t=[];return e.forEach((e=>{t.push(e),e.sublayers&&e.sublayers.length&&(t=t.concat(c(e.sublayers)),delete e.sublayers)})),t}function y(e,t,r){var n;return null!=(n=t.getAttribute(e))?n:r}function h(e,t){for(let r=0;r<t.childNodes.length;r++){const n=t.childNodes[r];if(w(n)&&n.nodeName===e)return n}return null}function m(e,t){const r=[];for(let n=0;n<t.childNodes.length;n++){const s=t.childNodes[n];w(s)&&s.nodeName===e&&r.push(s)}return r}function f(e,t,r){const n=h(e,t);return n?n.textContent:r}function b(e,t,r){if(!e)return null;const n=parseFloat(e.getAttribute("minx")),s=parseFloat(e.getAttribute("miny")),l=parseFloat(e.getAttribute("maxx")),o=parseFloat(e.getAttribute("maxy"));let u,p,d,c;r?(u=isNaN(s)?-Number.MAX_VALUE:s,p=isNaN(n)?-Number.MAX_VALUE:n,d=isNaN(o)?Number.MAX_VALUE:o,c=isNaN(l)?Number.MAX_VALUE:l):(u=isNaN(n)?-Number.MAX_VALUE:n,p=isNaN(s)?-Number.MAX_VALUE:s,d=isNaN(l)?Number.MAX_VALUE:l,c=isNaN(o)?Number.MAX_VALUE:o);const y=new i.Z({wkid:t});return new a.Z({xmin:u,ymin:p,xmax:d,ymax:c,spatialReference:y})}function g(e,t){const r=h(t,e);if(r){const e=h("DCPType",r);if(e){const t=h("HTTP",e);if(t){const e=h("Get",t);if(e){let t=function(e,t,r,n){const s=h("OnlineResource",r);return s?y("xlink:href",s,null):null}(0,0,e);if(t)return t.indexOf("&")===t.length-1&&(t=t.substring(0,t.length-1)),function(e,t){const r=[],n=(0,s.mN)(e);for(const e in n.query)n.query.hasOwnProperty(e)&&-1===t.indexOf(e.toLowerCase())&&r.push(e+"="+n.query[e]);return n.path+(r.length?"?"+r.join("&"):"")}(t,["service","request"])}}}}return null}function x(e,t){const r=m("Operation",e);if(0===r.length)return m("Format",h(t,e)).map((e=>e.textContent));const n=[];return r.forEach((e=>{e.getAttribute("name")===t&&m("Format",e).forEach((e=>{n.push(e.textContent)}))})),n}function _(e,t,r){const n=h(t,e);if(!n)return r;const{textContent:s}=n;if(null==s||""===s)return r;const i=Number(s);return isNaN(i)?r:i}function v(e,t,r){var n;if(!e)return null;const s={id:r.idCounter++,fullExtents:[],parentLayerId:null,queryable:"1"===e.getAttribute("queryable"),spatialReferences:[],sublayers:null},l=h("LatLonBoundingBox",e),u=h("EX_GeographicBoundingBox",e);let d=null;l&&(d=b(l,4326)),u&&(d=new a.Z(0,0,0,0,new i.Z({wkid:4326})),d.xmin=parseFloat(f("westBoundLongitude",u,"0")),d.ymin=parseFloat(f("southBoundLatitude",u,"0")),d.xmax=parseFloat(f("eastBoundLongitude",u,"0")),d.ymax=parseFloat(f("northBoundLatitude",u,"0"))),l||u||(d=new a.Z(-180,-90,180,90,new i.Z({wkid:4326}))),s.minScale=_(e,"MaxScaleDenominator",0),s.maxScale=_(e,"MinScaleDenominator",0);const c=["1.0.0","1.1.0","1.1.1"].indexOf(t)>-1?"SRS":"CRS";return Array.prototype.slice.call(e.childNodes).forEach((e=>{if("Name"===e.nodeName)s.name=e.textContent||"";else if("Title"===e.nodeName)s.title=e.textContent||"";else if("Abstract"===e.nodeName)s.description=e.textContent||"";else if("BoundingBox"===e.nodeName){const r=e.getAttribute(c);if(r&&0===r.indexOf("EPSG:")){const n=parseInt(r.substring(5),10);0===n||isNaN(n)||d||(d="1.3.0"===t?b(e,n,p(n)):b(e,n))}const n=r&&r.indexOf(":");if(n&&n>-1){let i=parseInt(r.substring(n+1,r.length),10);0===i||isNaN(i)||(i=o[i]?o[i]:i);const a="1.3.0"===t?b(e,i,p(i)):b(e,i);s.fullExtents.push(a)}}else if(e.nodeName===c)e.textContent.split(" ").forEach((e=>{0===(e=e.indexOf(":")>-1?parseInt(e.split(":")[1],10):parseInt(e,10))||isNaN(e)||(o[e]&&(e=o[e]),-1===s.spatialReferences.indexOf(e)&&s.spatialReferences.push(e))}));else if("Style"!==e.nodeName||s.legendURL){if("Layer"===e.nodeName){const n=v(e,t,r);n&&(n.parentLayerId=s.id,s.sublayers||(s.sublayers=[]),s.sublayers.push(n))}}else{const t=h("LegendURL",e);if(t){const e=h("OnlineResource",t);e&&(s.legendURL=e.getAttribute("xlink:href"))}}})),s.extent=null==(n=d)?void 0:n.toJSON(),s.dimensions=m("Dimension",e).filter((e=>e.getAttribute("name")&&e.getAttribute("units")&&e.textContent)).map((e=>{const t=e.getAttribute("name"),r=e.getAttribute("units"),n=e.textContent,s=e.getAttribute("unitSymbol"),i=e.getAttribute("default"),a="0"!==y("default",e,"0"),l="0"!==y("nearestValue",e,"0"),o="0"!==y("current",e,"0");return/^time$/i.test(t)&&/^ISO8601$/i.test(r)?{name:"time",units:"ISO8601",extent:N(n),default:N(i),multipleValues:a,nearestValue:l,current:o}:/^elevation$/i.test(t)?{name:"elevation",units:r,extent:S(n),unitSymbol:s,default:S(i),multipleValues:a,nearestValue:l}:{name:t,units:r,extent:C(n),unitSymbol:s,default:C(i),multipleValues:a,nearestValue:l}})),s}function w(e){return e.nodeType===Node.ELEMENT_NODE}function E(e){return"time"===e.name}function S(e){if(!e)return null;const t=-1!==e.indexOf("/"),r=e.split(",");return t?r.map((e=>{const t=e.split("/");return t.length<2?null:{min:parseFloat(t[0]),max:parseFloat(t[1]),resolution:t.length>=3&&"0"!==t[2]?parseFloat(t[2]):void 0}})).filter((e=>e)):r.map((e=>parseFloat(e)))}function C(e){if(!e)return null;const t=-1!==e.indexOf("/"),r=e.split(",");return t?r.map((e=>{const t=e.split("/");return t.length<2?null:{min:t[0],max:t[1],resolution:t.length>=3&&"0"!==t[2]?t[2]:void 0}})).filter((e=>e)):r}function N(e){if(!e)return null;const t=-1!==e.indexOf("/"),r=e.split(",");return t?r.map((e=>{const t=e.split("/");return t.length<2?null:{min:new Date(t[0]),max:new Date(t[1]),resolution:t.length>=3&&"0"!==t[2]?O(t[2]):void 0}})).filter((e=>e)):r.map((e=>new Date(e)))}function O(e){const t=e.match(/(?:p(\d+y|\d+(?:.|,)\d+y)?(\d+m|\d+(?:.|,)\d+m)?(\d+d|\d+(?:.|,)\d+d)?)?(?:t(\d+h|\d+(?:.|,)\d+h)?(\d+m|\d+(?:.|,)\d+m)?(\d+s|\d+(?:.|,)\d+s)?)?/i);return t?{years:I(t[1]),months:I(t[2]),days:I(t[3]),hours:I(t[4]),minutes:I(t[5]),seconds:I(t[6])}:null}function I(e){if(!e)return 0;const t=e.match(/(?:\d+(?:.|,)\d+|\d+)/);if(!t)return 0;const r=t[0].replace(",",".");return Number(r)}function R(e){return e.toISOString().replace(/\.[0-9]{3}/,"")}}}]);
//# sourceMappingURL=5612.js.map