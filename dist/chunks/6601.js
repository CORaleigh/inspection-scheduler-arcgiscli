(self.webpackChunkinspection_scheduler=self.webpackChunkinspection_scheduler||[]).push([[6601],{16601:(e,t,l)=>{"use strict";l.r(t),l.d(t,{default:()=>x});var r=l(56140),s=(l(95830),l(82550)),i=l(88263),o=(l(36544),l(68055),l(79881)),n=l(30590),a=l(87566),p=l(60538),u=l(32656),c=l(10923),y=(l(57002),l(86035),l(39105)),d=l(73032),h=l(61106),m=l(52937),f=(l(36348),l(54721)),v=l(56700),w=l(43072),b=l(78910),g=l(57407),Z=l(33716),T=l(2194),_=l(10113),C=l(18897),R=l(40920),j=l(33611);let S=class extends((0,g.h)((0,T.Q)((0,_.M)((0,b.q)((0,Z.I)((0,w.R)(v.Z))))))){constructor(...e){super(...e),this.copyright="",this.fullExtent=new m.default(-20037508.342787,-20037508.34278,20037508.34278,20037508.342787,d.Z.WebMercator),this.legendEnabled=!1,this.isReference=null,this.popupEnabled=!1,this.spatialReference=d.Z.WebMercator,this.subDomains=null,this.tileInfo=new R.Z({size:[256,256],dpi:96,format:"png8",compressionQuality:0,origin:new h.Z({x:-20037508.342787,y:20037508.342787,spatialReference:d.Z.WebMercator}),spatialReference:d.Z.WebMercator,lods:[new C.Z({level:0,scale:591657527.591555,resolution:156543.033928}),new C.Z({level:1,scale:295828763.795777,resolution:78271.5169639999}),new C.Z({level:2,scale:147914381.897889,resolution:39135.7584820001}),new C.Z({level:3,scale:73957190.948944,resolution:19567.8792409999}),new C.Z({level:4,scale:36978595.474472,resolution:9783.93962049996}),new C.Z({level:5,scale:18489297.737236,resolution:4891.96981024998}),new C.Z({level:6,scale:9244648.868618,resolution:2445.98490512499}),new C.Z({level:7,scale:4622324.434309,resolution:1222.99245256249}),new C.Z({level:8,scale:2311162.217155,resolution:611.49622628138}),new C.Z({level:9,scale:1155581.108577,resolution:305.748113140558}),new C.Z({level:10,scale:577790.554289,resolution:152.874056570411}),new C.Z({level:11,scale:288895.277144,resolution:76.4370282850732}),new C.Z({level:12,scale:144447.638572,resolution:38.2185141425366}),new C.Z({level:13,scale:72223.819286,resolution:19.1092570712683}),new C.Z({level:14,scale:36111.909643,resolution:9.55462853563415}),new C.Z({level:15,scale:18055.954822,resolution:4.77731426794937}),new C.Z({level:16,scale:9027.977411,resolution:2.38865713397468}),new C.Z({level:17,scale:4513.988705,resolution:1.19432856685505}),new C.Z({level:18,scale:2256.994353,resolution:.597164283559817}),new C.Z({level:19,scale:1128.497176,resolution:.298582141647617})]}),this.type="web-tile",this.urlTemplate=null,this.wmtsInfo=null}normalizeCtorArgs(e,t){return"string"==typeof e?(0,s.jB)({urlTemplate:e},t||{}):e}load(e){const t=this.loadFromPortal({supportedTypes:["WMTS"]},e).then((()=>{let e="";if(this.urlTemplate)if(this.spatialReference.equals(this.tileInfo.spatialReference)){const t=new c.R9(this.urlTemplate);this.subDomains&&this.subDomains.length>0||-1===t.authority.indexOf("{subDomain}")||(e="is missing 'subDomains' property")}else e="spatialReference must match tileInfo.spatialReference";else e="is missing the required 'urlTemplate' property value";if(e)throw new u.Z("web-tile-layer:load",`WebTileLayer (title: '${this.title}', id: '${this.id}') ${e}`)}));return this.addResolvingPromise(t),(0,y.resolve)(this)}get levelValues(){const e=[];if(!this.tileInfo)return null;for(const t of this.tileInfo.lods)e[t.level]=t.levelValue||t.level;return e}readSpatialReference(e,t){return e||t.fullExtent&&t.fullExtent.spatialReference&&d.Z.fromJSON(t.fullExtent.spatialReference)}get tileServers(){if(!this.urlTemplate)return null;const e=[],{urlTemplate:t,subDomains:l}=this,r=new c.R9(t),s=r.scheme?r.scheme+"://":"//",i=s+r.authority+"/";if(-1===r.authority.indexOf("{subDomain}"))e.push(i);else if(l&&l.length>0&&r.authority.split(".").length>1)for(const t of l)e.push(s+r.authority.replace(/\{subDomain\}/gi,t)+"/");return e.map((e=>("/"!==e.charAt(e.length-1)&&(e+="/"),e)))}get urlPath(){if(!this.urlTemplate)return null;const e=this.urlTemplate,t=new c.R9(e),l=(t.scheme?t.scheme+"://":"//")+t.authority+"/";return e.substring(l.length)}readUrlTemplate(e,t){return e||t.templateUrl}writeUrlTemplate(e,t){e&&(0,c.oC)(e)&&(e="https:"+e),e&&(e=e.replace(/\{z\}/gi,"{level}").replace(/\{x\}/gi,"{col}").replace(/\{y\}/gi,"{row}"),e=(0,c.Fv)(e)),t.templateUrl=e}fetchTile(e,t,l,r={}){const{signal:s,timestamp:i}=r,o=this.getTileUrl(e,t,l),n={responseType:"image",signal:s};return null!=i&&(n.query={_ts:r.timestamp}),(0,f.default)(o,n).then((e=>e.data))}getTileUrl(e,t,l){const r=this.levelValues[e];return this.tileServers[t%this.tileServers.length]+(0,i.gx)(this.urlPath,{level:r,z:r,col:l,x:l,row:t,y:t})}};(0,r._)([(0,o.Cb)({type:String,value:"",json:{write:!0}})],S.prototype,"copyright",void 0),(0,r._)([(0,o.Cb)({type:m.default,json:{write:!0}})],S.prototype,"fullExtent",void 0),(0,r._)([(0,o.Cb)({readOnly:!0,json:{read:!1,write:!1}})],S.prototype,"legendEnabled",void 0),(0,r._)([(0,o.Cb)({type:["show","hide"]})],S.prototype,"listMode",void 0),(0,r._)([(0,o.Cb)({dependsOn:["tileInfo"]})],S.prototype,"levelValues",null),(0,r._)([(0,o.Cb)({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],S.prototype,"isReference",void 0),(0,r._)([(0,o.Cb)({type:["WebTiledLayer"],value:"WebTiledLayer"})],S.prototype,"operationalLayerType",void 0),(0,r._)([(0,o.Cb)({readOnly:!0,json:{read:!1,write:!1}})],S.prototype,"popupEnabled",void 0),(0,r._)([(0,o.Cb)({type:d.Z})],S.prototype,"spatialReference",void 0),(0,r._)([(0,n.r)("spatialReference",["spatialReference","fullExtent.spatialReference"])],S.prototype,"readSpatialReference",null),(0,r._)([(0,o.Cb)({type:[String],json:{write:!0}})],S.prototype,"subDomains",void 0),(0,r._)([(0,o.Cb)({type:R.Z,json:{write:!0}})],S.prototype,"tileInfo",void 0),(0,r._)([(0,o.Cb)({readOnly:!0,dependsOn:["urlTemplate","subDomains"]})],S.prototype,"tileServers",null),(0,r._)([(0,o.Cb)({json:{read:!1}})],S.prototype,"type",void 0),(0,r._)([(0,o.Cb)({dependsOn:["urlTemplate"]})],S.prototype,"urlPath",null),(0,r._)([(0,o.Cb)({type:String,json:{origins:{"portal-item":{read:{source:"url"}}}}})],S.prototype,"urlTemplate",void 0),(0,r._)([(0,n.r)("urlTemplate",["urlTemplate","templateUrl"])],S.prototype,"readUrlTemplate",null),(0,r._)([(0,p.c)("urlTemplate",{templateUrl:{type:String}})],S.prototype,"writeUrlTemplate",null),(0,r._)([(0,o.Cb)({type:j.Z,json:{write:!0}})],S.prototype,"wmtsInfo",void 0),S=(0,r._)([(0,a.j)("esri.layers.WebTileLayer")],S);const x=S},33611:(e,t,l)=>{"use strict";l.d(t,{Z:()=>u});var r,s=l(56140),i=(l(95830),l(82550)),o=(l(36544),l(68055),l(79881)),n=l(87566),a=(l(10923),l(57002),l(86035),l(58385));let p=r=class extends a.wq{constructor(e){super(e)}clone(){return new r({customLayerParameters:(0,i.d9)(this.customLayerParameters),customParameters:(0,i.d9)(this.customParameters),layerIdentifier:this.layerIdentifier,tileMatrixSet:this.tileMatrixSet,url:this.url})}};(0,s._)([(0,o.Cb)({json:{type:Object,write:!0}})],p.prototype,"customLayerParameters",void 0),(0,s._)([(0,o.Cb)({json:{type:Object,write:!0}})],p.prototype,"customParameters",void 0),(0,s._)([(0,o.Cb)({type:String,json:{write:!0}})],p.prototype,"layerIdentifier",void 0),(0,s._)([(0,o.Cb)({type:String,json:{write:!0}})],p.prototype,"tileMatrixSet",void 0),(0,s._)([(0,o.Cb)({type:String,json:{write:!0}})],p.prototype,"url",void 0),p=r=(0,s._)([(0,n.j)("esri.layer.support.WMTSLayerInfo")],p);const u=p}}]);
//# sourceMappingURL=6601.js.map