(self.webpackChunkinspection_scheduler=self.webpackChunkinspection_scheduler||[]).push([[5155,6601],{65155:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>X});var i,s=r(56140),l=(r(95830),r(82550)),a=r(10103),o=(r(36544),r(68055),r(79881)),n=r(30590),u=r(87566),p=r(60538),c=r(32656),d=r(10923),y=(r(57002),r(86035),r(39105)),m=r(52937),h=r(83477),f=r(54721),g=r(59691),w=r(56700),v=r(43072),b=r(78910),x=r(57407),S=r(33716),I=r(2194),M=r(10113),T=r(40920),_=r(33611),C=r(16601),L=r(58385);let P=i=class extends L.wq{constructor(e){super(e),this.fullExtent=null,this.id=null,this.tileInfo=null}clone(){const e=new i;return this.hasOwnProperty("fullExtent")&&(e.fullExtent=this.fullExtent&&this.fullExtent.clone()),this.hasOwnProperty("id")&&(e.id=this.id),this.hasOwnProperty("tileInfo")&&(e.tileInfo=this.tileInfo&&this.tileInfo.clone()),e}};(0,s._)([(0,o.Cb)({type:m.default,json:{read:{source:"fullExtent"}}})],P.prototype,"fullExtent",void 0),(0,s._)([(0,o.Cb)({type:String,json:{read:{source:"id"}}})],P.prototype,"id",void 0),(0,s._)([(0,o.Cb)({type:T.Z,json:{read:{source:"tileInfo"}}})],P.prototype,"tileInfo",void 0),P=i=(0,s._)([(0,u.j)("esri.layer.support.TileMatrixSet")],P);const E=P;var O;let R=O=class extends L.wq{constructor(e){super(e),this.id=null,this.title=null,this.description=null,this.legendUrl=null}clone(){const e=new O;return this.hasOwnProperty("description")&&(e.description=this.description),this.hasOwnProperty("id")&&(e.id=this.id),this.hasOwnProperty("isDefault")&&(e.isDefault=this.isDefault),this.hasOwnProperty("keywords")&&(e.keywords=this.keywords&&this.keywords.slice()),this.hasOwnProperty("legendUrl")&&(e.legendUrl=this.legendUrl),this.hasOwnProperty("title")&&(e.title=this.title),e}};(0,s._)([(0,o.Cb)({json:{read:{source:"id"}}})],R.prototype,"id",void 0),(0,s._)([(0,o.Cb)({json:{read:{source:"title"}}})],R.prototype,"title",void 0),(0,s._)([(0,o.Cb)({json:{read:{source:"abstract"}}})],R.prototype,"description",void 0),(0,s._)([(0,o.Cb)({json:{read:{source:"legendUrl"}}})],R.prototype,"legendUrl",void 0),(0,s._)([(0,o.Cb)({json:{read:{source:"isDefault"}}})],R.prototype,"isDefault",void 0),(0,s._)([(0,o.Cb)({json:{read:{source:"keywords"}}})],R.prototype,"keywords",void 0),R=O=(0,s._)([(0,u.j)("esri.layer.support.WMTSStyle")],R);const j=R;var Z;let F=Z=class extends L.wq{constructor(e){super(e),this.fullExtent=null,this.imageFormats=null,this.id=null,this.layer=null,this.styles=null,this.tileMatrixSetId=null,this.tileMatrixSets=null}get description(){return this._get("description")}set description(e){this._set("description",e)}readFullExtent(e,t){return(e=t.fullExtent)?m.default.fromJSON(e):null}get imageFormat(){let e=this._get("imageFormat");return e||(e=this.imageFormats&&this.imageFormats.length?this.imageFormats[0]:""),e}set imageFormat(e){const t=this.imageFormats;e&&(e.indexOf("image/")>-1||t&&-1===t.indexOf(e))&&(-1===e.indexOf("image/")&&(e="image/"+e),t&&-1===t.indexOf(e))?console.error("The layer doesn't support the format of "+e):this._set("imageFormat",e)}get styleId(){let e=this._get("styleId");return e||(e=this.styles&&this.styles.length?this.styles.getItemAt(0).id:""),e}set styleId(e){this._set("styleId",e)}get title(){return this._get("title")}set title(e){this._set("title",e)}get tileMatrixSet(){return this.tileMatrixSets?this.tileMatrixSets.find((e=>e.id===this.tileMatrixSetId)):null}clone(){const e=new Z;return this.hasOwnProperty("description")&&(e.description=this.description),this.hasOwnProperty("imageFormats")&&(e.imageFormats=this.imageFormats&&this.imageFormats.slice()),this.hasOwnProperty("imageFormat")&&(e.imageFormat=this.imageFormat),this.hasOwnProperty("fullExtent")&&(e.fullExtent=this.fullExtent&&this.fullExtent.clone()),this.hasOwnProperty("id")&&(e.id=this.id),this.hasOwnProperty("layer")&&(e.layer=this.layer),this.hasOwnProperty("styleId")&&(e.styleId=this.styleId),this.hasOwnProperty("styles")&&(e.styles=this.styles&&this.styles.clone()),this.hasOwnProperty("tileMatrixSetId")&&(e.tileMatrixSetId=this.tileMatrixSetId),this.hasOwnProperty("tileMatrixSets")&&(e.tileMatrixSets=this.tileMatrixSets.clone()),this.hasOwnProperty("title")&&(e.title=this.title),e}};(0,s._)([(0,o.Cb)()],F.prototype,"description",null),(0,s._)([(0,o.Cb)()],F.prototype,"fullExtent",void 0),(0,s._)([(0,n.r)("fullExtent",["fullExtent"])],F.prototype,"readFullExtent",null),(0,s._)([(0,o.Cb)({dependsOn:["imageFormats"]})],F.prototype,"imageFormat",null),(0,s._)([(0,o.Cb)({json:{read:{source:"formats"}}})],F.prototype,"imageFormats",void 0),(0,s._)([(0,o.Cb)()],F.prototype,"id",void 0),(0,s._)([(0,o.Cb)()],F.prototype,"layer",void 0),(0,s._)([(0,o.Cb)({dependsOn:["styles"]})],F.prototype,"styleId",null),(0,s._)([(0,o.Cb)({type:h.Z.ofType(j),json:{read:{source:"styles"}}})],F.prototype,"styles",void 0),(0,s._)([(0,o.Cb)({value:null,json:{write:{ignoreOrigin:!0}}})],F.prototype,"title",null),(0,s._)([(0,o.Cb)()],F.prototype,"tileMatrixSetId",void 0),(0,s._)([(0,o.Cb)({readOnly:!0,dependsOn:["tileMatrixSetId"]})],F.prototype,"tileMatrixSet",null),(0,s._)([(0,o.Cb)({type:h.Z.ofType(E),json:{read:{source:"tileMatrixSets"}}})],F.prototype,"tileMatrixSets",void 0),F=Z=(0,s._)([(0,u.j)("esri.layers.support.WMTSSublayer")],F);const U=F;var V=r(72206),A=r(73032),W=r(61106),D=r(89333);const k=[[3819,3819],[3821,3824],[3889,3889],[3906,3906],[4001,4025],[4027,4036],[4039,4047],[4052,4055],[4074,4075],[4080,4081],[4120,4176],[4178,4185],[4188,4216],[4218,4289],[4291,4304],[4306,4319],[4322,4326],[4463,4463],[4470,4470],[4475,4475],[4483,4483],[4490,4490],[4555,4558],[4600,4646],[4657,4765],[4801,4811],[4813,4821],[4823,4824],[4901,4904],[5013,5013],[5132,5132],[5228,5229],[5233,5233],[5246,5246],[5252,5252],[5264,5264],[5324,5340],[5354,5354],[5360,5360],[5365,5365],[5370,5373],[5381,5381],[5393,5393],[5451,5451],[5464,5464],[5467,5467],[5489,5489],[5524,5524],[5527,5527],[5546,5546],[2044,2045],[2081,2083],[2085,2086],[2093,2093],[2096,2098],[2105,2132],[2169,2170],[2176,2180],[2193,2193],[2200,2200],[2206,2212],[2319,2319],[2320,2462],[2523,2549],[2551,2735],[2738,2758],[2935,2941],[2953,2953],[3006,3030],[3034,3035],[3038,3051],[3058,3059],[3068,3068],[3114,3118],[3126,3138],[3150,3151],[3300,3301],[3328,3335],[3346,3346],[3350,3352],[3366,3366],[3389,3390],[3416,3417],[3833,3841],[3844,3850],[3854,3854],[3873,3885],[3907,3910],[4026,4026],[4037,4038],[4417,4417],[4434,4434],[4491,4554],[4839,4839],[5048,5048],[5105,5130],[5253,5259],[5269,5275],[5343,5349],[5479,5482],[5518,5519],[5520,5520],[20004,20032],[20064,20092],[21413,21423],[21473,21483],[21896,21899],[22171,22177],[22181,22187],[22191,22197],[25884,25884],[27205,27232],[27391,27398],[27492,27492],[28402,28432],[28462,28492],[30161,30179],[30800,30800],[31251,31259],[31275,31279],[31281,31290],[31466,31700]];function N(e,t){const r=t.getElementsByTagName(e);return r&&r.length>0?r[0]:null}function B(e,t){return Array.prototype.slice.call(t.getElementsByTagName(e)).map((e=>e.textContent))}function K(e,t){return e.split(">").forEach((e=>{t&&(t=N(e,t))})),t&&t.textContent}function q(e,t,r,i){let s;return Array.prototype.slice.call(i.childNodes).some((i=>{if(i.nodeName.indexOf(e)>-1){const e=N(t,i),l=e&&e.textContent;if(l===r||r.split(":")&&r.split(":")[1]===l)return s=i,!0}return!1})),s}function H(e,t){const r=[],i=e.layerMap.get(t);if(!i)return;const s=Array.prototype.slice.call(i.getElementsByTagName("ResourceURL")),l=i.getElementsByTagName("Dimension");let a,o,n,u;return l.length&&(a=K("Identifier",l[0]),o=B("Default",l[0])||B("Value",l[0])),l.length>1&&(n=K("Identifier",l[1]),u=B("Default",l[1])||B("Value",l[1])),e.dimensionMap.set(t,{dimensions:o,dimensions2:u}),s.forEach((e=>{let t=e.getAttribute("template");if("tile"===e.getAttribute("resourceType")){if(a&&o.length)if(t.indexOf("{"+a+"}")>-1)t=t.replace("{"+a+"}","{dimensionValue}");else{const e=t.toLowerCase().indexOf("{"+a.toLowerCase()+"}");e>-1&&(t=t.substring(0,e)+"{dimensionValue}"+t.substring(e+a.length+2))}if(n&&u.length)if(t.indexOf("{"+n+"}")>-1)t=t.replace("{"+n+"}","{dimensionValue2}");else{const e=t.toLowerCase().indexOf("{"+n.toLowerCase()+"}");e>-1&&(t=t.substring(0,e)+"{dimensionValue2}"+t.substring(e+n.length+2))}r.push({template:t,format:e.getAttribute("format"),resourceType:"tile"})}})),r}function $(e,t,r,i){const s=K("Identifier",e),l=K("ScaleDenominator",e).split("E").map((e=>Number(e)));let a;a=l.length>1?l[0]*Math.pow(10,l[1]):l[0];const o=z(t,a,i);return a*=1.058267716535433,{level:r,levelValue:s,scale:a,resolution:o}}function z(e,t,r){let i;return i=V.Z.hasOwnProperty(String(e))?V.Z.values[V.Z[e]]:"default028mm"===r?6370997*Math.PI/180:(0,D.e8)(e).metersPerDegree,7*t/25e3/i}const G={"image/png":".png","image/png8":".png","image/png24":".png","image/png32":".png","image/jpg":".jpg","image/jpeg":".jpeg","image/gif":".gif","image/bmp":".bmp","image/tiff":".tif","image/jpgpng":"","image/jpegpng":"","image/unknown":""},J=new Set(["version","service","request","layer","style","format","tilematrixset","tilematrix","tilerow","tilecol"]);let Q=class extends((0,x.h)((0,I.Q)((0,M.M)((0,b.q)((0,S.I)((0,v.R)(w.Z))))))){constructor(...e){super(...e),this._sublayersHandles=new g.Z,this.copyright="",this.customParameters=null,this.customLayerParameters=null,this.fullExtent=null,this.operationalLayerType="WebTiledLayer",this.resourceInfo=null,this.serviceMode="RESTful",this.sublayers=null,this.type="wmts",this.version="1.0.0",this.watch("activeLayer",((e,t)=>{t&&(t.layer=null),e&&(e.layer=this)}),!0),this.watch("sublayers",((e,t)=>{t&&(t.forEach((e=>{e.layer=null})),this._sublayersHandles.removeAll(),this._sublayersHandles=null),e&&(e.forEach((e=>{e.layer=this})),this._sublayersHandles||(this._sublayersHandles=new g.Z),this._sublayersHandles.add([e.on("after-add",(({item:e})=>{e.layer=this})),e.on("after-remove",(({item:e})=>{e.layer=null}))]))}),!0)}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}load(e){if("KVP"===this.serviceMode||"RESTful"===this.serviceMode)return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["WMTS"]},e).then((()=>this._fetchService(e))).catch((e=>{throw new c.Z("wmtslayer:unsupported-service-data","Invalid response from the WMTS service.",{error:e})}))),(0,y.resolve)(this);console.error("WMTS mode could only be 'KVP' or 'RESTful'")}get activeLayer(){return this._get("activeLayer")}set activeLayer(e){this._set("activeLayer",e)}readActiveLayerFromService(e,t,r){let i;return this.activeLayer?t.layers.some((e=>e.id===this.activeLayer.id&&(i=e,!0))):(this.activeLayer=new U,i=t.layers[0]),this.activeLayer.read(i,r),this.activeLayer}readActiveLayerFromItemOrWebDoc(e,t){const{templateUrl:r,wmtsInfo:i}=t,s=r?this._getLowerCasedUrlParams(r):null,l=i&&i.layerIdentifier;let a=null;const o=i&&i.tileMatrixSet;o&&(Array.isArray(o)?o.length&&(a=o[0]):a=o);const n=s&&s.format,u=s&&s.style;return new U({id:l,imageFormat:n,styleId:u,tileMatrixSetId:a})}writeActiveLayer(e,t,r,i){const s=this.activeLayer;t.templateUrl=this.getUrlTemplate(s.id,s.tileMatrixSetId,s.imageFormat,s.styleId);const l=(0,a.hS)("tileMatrixSet.tileInfo",s);t.tileInfo=l?l.toJSON(i):null,t.wmtsInfo={...t.wmtsInfo,layerIdentifier:s.id,tileMatrixSet:s.tileMatrixSetId}}readCustomParameters(e,t){const r=t.wmtsInfo;return r?this._mergeParams(r.customParameters,r.url):null}get fullExtents(){const e=[];return this.activeLayer.tileMatrixSets.forEach((t=>{t.fullExtent&&e.push(t.fullExtent)})),e}readServiceMode(e,t){return t.templateUrl.indexOf("?")>-1?"KVP":"RESTful"}readSublayersFromService(e,t,r){return function(e,t){return e.map((e=>{const r=new U;return r.read(e,t),r}))}(t.layers,r)}get supportedSpatialReferences(){return this.activeLayer.tileMatrixSets.map((e=>e.tileInfo.spatialReference)).toArray()}get title(){var e,t;return null!=(e=null==(t=this.activeLayer)?void 0:t.title)?e:"Layer"}set title(e){e?this._override("title",e):this._clearOverride("title")}get url(){return this._get("url")}set url(e){e&&"/"===e.substr(-1)?this._set("url",e.slice(0,-1)):this._set("url",e)}createWebTileLayer(e){const t=this.getUrlTemplate(this.activeLayer.id,this.activeLayer.tileMatrixSetId,this.activeLayer.imageFormat,this.activeLayer.styleId),r=this._getTileMatrixSetById(e.tileMatrixSetId).tileInfo,i=e.fullExtent,s=new _.Z({layerIdentifier:e.id,tileMatrixSet:e.tileMatrixSetId,url:this.url});return this.customLayerParameters&&(s.customLayerParameters=this.customLayerParameters),this.customParameters&&(s.customParameters=this.customParameters),new C.default({fullExtent:i,urlTemplate:t,tileInfo:r,wmtsInfo:s})}fetchTile(e,t,r){const i=this.getTileUrl(e,t,r);return(0,f.default)(i,{responseType:"image"}).then((e=>e.data))}findSublayerById(e){return this.sublayers.find((t=>t.id===e))}getTileUrl(e,t,r){const i=this._getTileMatrixSetById(this.activeLayer.tileMatrixSetId).tileInfo.lods[e],s=i?i.levelValue?i.levelValue:`${i.level}`:`${e}`;let l=this.resourceInfo?"":function(e,t,r,i,s,l,a,o){const{dimensionMap:n}=e,u=H(e,t),p=n.get(t).dimensions&&n.get(t).dimensions[0],c=n.get(t).dimensions2&&n.get(t).dimensions2[0];let d="";if(u&&u.length>0){let e=null;u.some((t=>t.format===i&&(e=t,!0))),e||(e=u[a%u.length]),d=e.template.replace(/\{Style\}/gi,s).replace(/\{TileMatrixSet\}/gi,r).replace(/\{TileMatrix\}/gi,l).replace(/\{TileRow\}/gi,""+a).replace(/\{TileCol\}/gi,""+o).replace(/\{dimensionValue\}/gi,p).replace(/\{dimensionValue2\}/gi,c)}return d}({dimensionMap:this.dimensionMap,layerMap:this.layerMap},this.activeLayer.id,this.activeLayer.tileMatrixSetId,this.activeLayer.imageFormat,this.activeLayer.styleId,s,t,r);return l||(l=this.getUrlTemplate(this.activeLayer.id,this.activeLayer.tileMatrixSetId,this.activeLayer.imageFormat,this.activeLayer.styleId).replace(/\{level\}/gi,s).replace(/\{row\}/gi,`${t}`).replace(/\{col\}/gi,`${r}`)),l=this._appendCustomLayerParameters(l),l}getUrlTemplate(e,t,r,i){if(!this.resourceInfo){const r=function(e,t,r,i){const{dimensionMap:s}=e,l=H(e,t);let a="";if(l&&l.length>0){const e=s.get(t).dimensions&&s.get(t).dimensions[0],o=s.get(t).dimensions2&&s.get(t).dimensions2[0];a=l[0].template,a.indexOf(".xxx")===a.length-4&&(a=a.slice(0,a.length-4)),a=a.replace(/\{Style\}/gi,i),a=a.replace(/\{TileMatrixSet\}/gi,r),a=a.replace(/\{TileMatrix\}/gi,"{level}"),a=a.replace(/\{TileRow\}/gi,"{row}"),a=a.replace(/\{TileCol\}/gi,"{col}"),a=a.replace(/\{dimensionValue\}/gi,e),a=a.replace(/\{dimensionValue2\}/gi,o)}return a}({dimensionMap:this.dimensionMap,layerMap:this.layerMap},e,t,i);if(r)return r}if("KVP"===this.serviceMode)return this.url+"?SERVICE=WMTS&VERSION="+this.version+"&REQUEST=GetTile&LAYER="+e+"&STYLE="+i+"&FORMAT="+r+"&TILEMATRIXSET="+t+"&TILEMATRIX={level}&TILEROW={row}&TILECOL={col}";if("RESTful"===this.serviceMode){let s="";return G[r.toLowerCase()]&&(s=G[r.toLowerCase()]),this.url+e+"/"+i+"/"+t+"/{level}/{row}/{col}"+s}return""}async _fetchService(e){let t;if(this.resourceInfo)"KVP"===this.resourceInfo.serviceMode&&(this.url+=this.url.indexOf("?")>-1?"":"?"),t={ssl:!1,data:this.resourceInfo};else try{t=await this._getCapabilities(this.serviceMode,e)}catch{const r="KVP"===this.serviceMode?"RESTful":"KVP";try{t=await this._getCapabilities(r,e),this.serviceMode=r}catch(e){throw new c.Z("wmtslayer:unsupported-service-data","Services does not support RESTful or KVP service modes.",{error:e})}}this.resourceInfo?t.data=function(e){return e.layers.forEach((e=>{e.tileMatrixSets.forEach((e=>{const t=e.tileInfo;96!==t.dpi&&(t.lods.forEach((r=>{r.scale=96*r.scale/t.dpi,r.resolution=z(t.spatialReference.wkid,90.71428571428571*r.scale/96,e.id)})),t.dpi=96)}))})),e}(t.data):t.data=function(e,t){e=e.replace(/ows:/gi,"");const r=(new DOMParser).parseFromString(e,"text/xml").documentElement,i=new Map,s=new Map,l=N("Contents",r);if(!l)throw new c.Z("wmtslayer:wmts-capabilities-xml-is-not-valid");const a=N("OperationsMetadata",r),o=a&&a.querySelector("[name='GetTile']"),n=o&&o.getElementsByTagName("Get"),u=n&&Array.prototype.slice.call(n),p=t&&t.url&&t.url.indexOf("https")>-1;let d,y,h=t.serviceMode,f=t&&t.url;if(u&&u.length&&u.some((e=>{const t=N("Constraint",e);return!t||q("AllowedValues","Value",h,t)?(f=e.attributes[0].nodeValue,!0):(!t||q("AllowedValues","Value","RESTful",t)||q("AllowedValues","Value","REST",t)?y=e.attributes[0].nodeValue:t&&!q("AllowedValues","Value","KVP",t)||(d=e.attributes[0].nodeValue),!1)})),!f)if(y)f=y,h="RESTful";else if(d)f=d,h="KVP";else{const e=N("ServiceMetadataURL",r);f=e&&e.getAttribute("xlink:href")}const g=f.indexOf("1.0.0/");return-1===g&&"RESTful"===h?f+="/":g>-1&&(f=f.substring(0,g)),"KVP"===h&&(f+=g>-1?"":"?"),p&&(f=f.replace(/^http:/i,"https:")),{copyright:K("ServiceIdentification>AccessConstraints",r),layers:Array.prototype.slice.call(l.getElementsByTagName("Layer")).map((e=>{const t=K("Identifier",e);return i.set(t,e),function(e,t,r,i){const s=K("Abstract",t),l=B("Format",t),a=function(e){const t=N("WGS84BoundingBox",e),r=t?K("LowerCorner",t).split(" "):["-180","-90"],i=t?K("UpperCorner",t).split(" "):["180","90"];return{xmin:parseFloat(r[0]),ymin:parseFloat(r[1]),xmax:parseFloat(i[0]),ymax:parseFloat(i[1]),spatialReference:{wkid:4326}}}(t),o=function(e,t){return Array.prototype.slice.call(e.getElementsByTagName("Style")).map((e=>{const r=N("LegendURL",e),i=N("Keywords",e),s=i&&B("Keyword",i);let l=r&&r.getAttribute("xlink:href");return t&&(l=l&&l.replace(/^http:/i,"https:")),{abstract:K("Abstract",e),id:K("Identifier",e),isDefault:"true"===e.getAttribute("isDefault"),keywords:s,legendUrl:l,title:K("Title",e)}}))}(t,i),n=K("Title",t),u=function(e,t){return B("TileMatrixSet",e).map((r=>function(e,t,r){const i=B("TileMatrix",q("TileMatrixSetLink","TileMatrixSet",e,t)),s=q("TileMatrixSet","Identifier",e,r),l=function(e){let t=K("SupportedCRS",e);t&&(t=t.toLowerCase());let r=parseInt(t.split(":").pop(),10);900913!==r&&3857!==r||(r=102100);let i=!1;t.indexOf("crs84")>-1||t.indexOf("crs:84")>-1?(r=4326,i=!0):t.indexOf("crs83")>-1||t.indexOf("crs:83")>-1?(r=4269,i=!0):(t.indexOf("crs27")>-1||t.indexOf("crs:27")>-1)&&(r=4267,i=!0);const s=new A.Z({wkid:r}),l=K("TopLeftCorner",N("TileMatrix",e)).split(" "),a=l[0].split("E").map((e=>Number(e))),o=l[1].split("E").map((e=>Number(e)));let n,u=a[0],p=o[0];a.length>1&&(u=a[0]*Math.pow(10,a[1])),o.length>1&&(p=o[0]*Math.pow(10,o[1]));const c=i&&4326===r&&90===u&&-180===p;return k.some(((e,l)=>{const a=Number(t.split(":").pop());return a>=e[0]&&a<=e[1]||4326===r&&(!i||c)?(n=new W.Z(p,u,s),!0):(l===k.length-1&&(n=new W.Z(u,p,s)),!1)})),n}(s),a=l.spatialReference,o=a.wkid,n=N("TileMatrix",s),u=[parseInt(K("TileWidth",n),10),parseInt(K("TileHeight",n),10)],p=[];i.length?i.forEach(((t,r)=>{const i=q("TileMatrix","Identifier",t,s);p.push($(i,o,r,e))})):Array.prototype.slice.call(s.getElementsByTagName("TileMatrix")).forEach(((t,r)=>{p.push($(t,o,r,e))}));const c=function(e,t,r,i){const s=N("BoundingBox",e);let l,a,o,n,u,p;if(s&&(l=K("LowerCorner",s).split(" "),a=K("UpperCorner",s).split(" ")),l&&l.length>1&&a&&a.length>1)o=parseFloat(l[0]),u=parseFloat(l[1]),n=parseFloat(a[0]),p=parseFloat(a[1]);else{const s=N("TileMatrix",e),l=parseFloat(K("MatrixWidth",s)),a=parseFloat(K("MatrixHeight",s));o=t.x,p=t.y,n=o+l*r[0]*i.resolution,u=p-a*r[1]*i.resolution}return new m.default(o,u,n,p,t.spatialReference)}(s,l,u,p[0]);return{id:e,fullExtent:c.toJSON(),tileInfo:new T.Z({dpi:96,spatialReference:a,size:u,origin:l,lods:p}).toJSON()}}(r,e,t)))}(t,r);return{id:e,fullExtent:a,description:s,formats:l,styles:o,title:n,tileMatrixSets:u}}(t,e,l,p)})),tileUrl:f,serviceMode:h,layerMap:i,dimensionMap:s}}(t.data,{serviceMode:this.serviceMode,url:this.url}),t.data&&this.read(t.data,{origin:"service"})}async _getCapabilities(e,t){const r=this._getCapabilitiesUrl(e);return await(0,f.default)(r,{...t,responseType:"text"})}_getTileMatrixSetById(e){return this.findSublayerById(this.activeLayer.id).tileMatrixSets.find((t=>t.id===e))}_appendCustomParameters(e){if(this.customParameters)for(const t in this.customParameters)e+=(-1===e.indexOf("?")?"?":"&")+t+"="+encodeURIComponent(this.customParameters[t]);return e}_appendCustomLayerParameters(e){if(this.customLayerParameters||this.customParameters){const t={...(0,l.d9)(this.customParameters||{}),...this.customLayerParameters};for(const r in t)e+=(-1===e.indexOf("?")?"?":"&")+r+"="+encodeURIComponent(t[r])}return e}_getCapabilitiesUrl(e){let t;return this.url=this.url.split("?")[0],"KVP"===e?t=this.url+"?request=GetCapabilities&service=WMTS&version="+this.version:"RESTful"===e&&(t=this.url+"/"+this.version+"/WMTSCapabilities.xml"),t=this._appendCustomParameters(t),t}_getLowerCasedUrlParams(e){if(!e)return null;const t=(0,d.mN)(e).query;if(!t)return null;const r={};return Object.keys(t).forEach((e=>{r[e.toLowerCase()]=t[e]})),r}_mergeParams(e,t){const r=this._getLowerCasedUrlParams(t);if(r){const t=Object.keys(r);t.length&&(e=e?(0,l.d9)(e):{},t.forEach((t=>{e.hasOwnProperty(t)||J.has(t)||(e[t]=r[t])})))}return e}};(0,s._)([(0,o.Cb)()],Q.prototype,"dimensionMap",void 0),(0,s._)([(0,o.Cb)()],Q.prototype,"layerMap",void 0),(0,s._)([(0,o.Cb)({type:U,dependsOn:["sublayers"],json:{origins:{"web-document":{write:{ignoreOrigin:!0}}}}})],Q.prototype,"activeLayer",null),(0,s._)([(0,n.r)("service","activeLayer",["layers"])],Q.prototype,"readActiveLayerFromService",null),(0,s._)([(0,n.r)(["web-document","portal-item"],"activeLayer",["wmtsInfo"])],Q.prototype,"readActiveLayerFromItemOrWebDoc",null),(0,s._)([(0,p.c)(["web-document","portal-item"],"activeLayer",{templateUrl:{type:String},tileInfo:{type:T.Z},"wmtsInfo.layerIdentifier":{type:String},"wmtsInfo.tileMatrixSet":{type:String}})],Q.prototype,"writeActiveLayer",null),(0,s._)([(0,o.Cb)({type:String,value:"",json:{write:!0}})],Q.prototype,"copyright",void 0),(0,s._)([(0,o.Cb)({type:["show","hide"]})],Q.prototype,"listMode",void 0),(0,s._)([(0,o.Cb)({json:{origins:{"web-document":{read:{source:["wmtsInfo.customParameters","wmtsInfo.url"]},write:{target:"wmtsInfo.customParameters"}},"portal-item":{read:{source:["wmtsInfo.customParameters","wmtsInfo.url"]},write:{target:"wmtsInfo.customParameters"}}}}})],Q.prototype,"customParameters",void 0),(0,s._)([(0,n.r)("web-document","customParameters"),(0,n.r)("portal-item","customParameters")],Q.prototype,"readCustomParameters",null),(0,s._)([(0,o.Cb)({json:{origins:{"web-document":{read:{source:"wmtsInfo.customLayerParameters"},write:{target:"wmtsInfo.customLayerParameters"}},"portal-item":{read:{source:"wmtsInfo.customLayerParameters"},write:{target:"wmtsInfo.customLayerParameters"}}}}})],Q.prototype,"customLayerParameters",void 0),(0,s._)([(0,o.Cb)({type:m.default,json:{write:{ignoreOrigin:!0},origins:{"web-document":{read:{source:"fullExtent"}},"portal-item":{read:{source:"fullExtent"}}}}})],Q.prototype,"fullExtent",void 0),(0,s._)([(0,o.Cb)({readOnly:!0,dependsOn:["activeLayer"]})],Q.prototype,"fullExtents",null),(0,s._)([(0,o.Cb)({type:["WebTiledLayer"]})],Q.prototype,"operationalLayerType",void 0),(0,s._)([(0,o.Cb)()],Q.prototype,"resourceInfo",void 0),(0,s._)([(0,o.Cb)()],Q.prototype,"serviceMode",void 0),(0,s._)([(0,n.r)(["portal-item","web-document"],"serviceMode",["templateUrl"])],Q.prototype,"readServiceMode",null),(0,s._)([(0,o.Cb)({type:h.Z.ofType(U)})],Q.prototype,"sublayers",void 0),(0,s._)([(0,n.r)("service","sublayers",["layers"])],Q.prototype,"readSublayersFromService",null),(0,s._)([(0,o.Cb)({readOnly:!0,dependsOn:["activeLayer"]})],Q.prototype,"supportedSpatialReferences",null),(0,s._)([(0,o.Cb)({dependsOn:["activeLayer"],json:{read:{source:"title"}}})],Q.prototype,"title",null),(0,s._)([(0,o.Cb)({json:{read:!1},readOnly:!0,value:"wmts"})],Q.prototype,"type",void 0),(0,s._)([(0,o.Cb)({json:{origins:{service:{read:{source:"tileUrl"}},"web-document":{read:{source:"wmtsInfo.url"},write:{target:"wmtsInfo.url"}},"portal-item":{read:{source:"wmtsInfo.url"},write:{target:"wmtsInfo.url"}}}}})],Q.prototype,"url",null),(0,s._)([(0,o.Cb)()],Q.prototype,"version",void 0),Q=(0,s._)([(0,u.j)("esri.layers.WMTSLayer")],Q);const X=Q},16601:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>L});var i=r(56140),s=(r(95830),r(82550)),l=r(88263),a=(r(36544),r(68055),r(79881)),o=r(30590),n=r(87566),u=r(60538),p=r(32656),c=r(10923),d=(r(57002),r(86035),r(39105)),y=r(73032),m=r(61106),h=r(52937),f=(r(36348),r(54721)),g=r(56700),w=r(43072),v=r(78910),b=r(57407),x=r(33716),S=r(2194),I=r(10113),M=r(18897),T=r(40920),_=r(33611);let C=class extends((0,b.h)((0,S.Q)((0,I.M)((0,v.q)((0,x.I)((0,w.R)(g.Z))))))){constructor(...e){super(...e),this.copyright="",this.fullExtent=new h.default(-20037508.342787,-20037508.34278,20037508.34278,20037508.342787,y.Z.WebMercator),this.legendEnabled=!1,this.isReference=null,this.popupEnabled=!1,this.spatialReference=y.Z.WebMercator,this.subDomains=null,this.tileInfo=new T.Z({size:[256,256],dpi:96,format:"png8",compressionQuality:0,origin:new m.Z({x:-20037508.342787,y:20037508.342787,spatialReference:y.Z.WebMercator}),spatialReference:y.Z.WebMercator,lods:[new M.Z({level:0,scale:591657527.591555,resolution:156543.033928}),new M.Z({level:1,scale:295828763.795777,resolution:78271.5169639999}),new M.Z({level:2,scale:147914381.897889,resolution:39135.7584820001}),new M.Z({level:3,scale:73957190.948944,resolution:19567.8792409999}),new M.Z({level:4,scale:36978595.474472,resolution:9783.93962049996}),new M.Z({level:5,scale:18489297.737236,resolution:4891.96981024998}),new M.Z({level:6,scale:9244648.868618,resolution:2445.98490512499}),new M.Z({level:7,scale:4622324.434309,resolution:1222.99245256249}),new M.Z({level:8,scale:2311162.217155,resolution:611.49622628138}),new M.Z({level:9,scale:1155581.108577,resolution:305.748113140558}),new M.Z({level:10,scale:577790.554289,resolution:152.874056570411}),new M.Z({level:11,scale:288895.277144,resolution:76.4370282850732}),new M.Z({level:12,scale:144447.638572,resolution:38.2185141425366}),new M.Z({level:13,scale:72223.819286,resolution:19.1092570712683}),new M.Z({level:14,scale:36111.909643,resolution:9.55462853563415}),new M.Z({level:15,scale:18055.954822,resolution:4.77731426794937}),new M.Z({level:16,scale:9027.977411,resolution:2.38865713397468}),new M.Z({level:17,scale:4513.988705,resolution:1.19432856685505}),new M.Z({level:18,scale:2256.994353,resolution:.597164283559817}),new M.Z({level:19,scale:1128.497176,resolution:.298582141647617})]}),this.type="web-tile",this.urlTemplate=null,this.wmtsInfo=null}normalizeCtorArgs(e,t){return"string"==typeof e?(0,s.jB)({urlTemplate:e},t||{}):e}load(e){const t=this.loadFromPortal({supportedTypes:["WMTS"]},e).then((()=>{let e="";if(this.urlTemplate)if(this.spatialReference.equals(this.tileInfo.spatialReference)){const t=new c.R9(this.urlTemplate);this.subDomains&&this.subDomains.length>0||-1===t.authority.indexOf("{subDomain}")||(e="is missing 'subDomains' property")}else e="spatialReference must match tileInfo.spatialReference";else e="is missing the required 'urlTemplate' property value";if(e)throw new p.Z("web-tile-layer:load",`WebTileLayer (title: '${this.title}', id: '${this.id}') ${e}`)}));return this.addResolvingPromise(t),(0,d.resolve)(this)}get levelValues(){const e=[];if(!this.tileInfo)return null;for(const t of this.tileInfo.lods)e[t.level]=t.levelValue||t.level;return e}readSpatialReference(e,t){return e||t.fullExtent&&t.fullExtent.spatialReference&&y.Z.fromJSON(t.fullExtent.spatialReference)}get tileServers(){if(!this.urlTemplate)return null;const e=[],{urlTemplate:t,subDomains:r}=this,i=new c.R9(t),s=i.scheme?i.scheme+"://":"//",l=s+i.authority+"/";if(-1===i.authority.indexOf("{subDomain}"))e.push(l);else if(r&&r.length>0&&i.authority.split(".").length>1)for(const t of r)e.push(s+i.authority.replace(/\{subDomain\}/gi,t)+"/");return e.map((e=>("/"!==e.charAt(e.length-1)&&(e+="/"),e)))}get urlPath(){if(!this.urlTemplate)return null;const e=this.urlTemplate,t=new c.R9(e),r=(t.scheme?t.scheme+"://":"//")+t.authority+"/";return e.substring(r.length)}readUrlTemplate(e,t){return e||t.templateUrl}writeUrlTemplate(e,t){e&&(0,c.oC)(e)&&(e="https:"+e),e&&(e=e.replace(/\{z\}/gi,"{level}").replace(/\{x\}/gi,"{col}").replace(/\{y\}/gi,"{row}"),e=(0,c.Fv)(e)),t.templateUrl=e}fetchTile(e,t,r,i={}){const{signal:s,timestamp:l}=i,a=this.getTileUrl(e,t,r),o={responseType:"image",signal:s};return null!=l&&(o.query={_ts:i.timestamp}),(0,f.default)(a,o).then((e=>e.data))}getTileUrl(e,t,r){const i=this.levelValues[e];return this.tileServers[t%this.tileServers.length]+(0,l.gx)(this.urlPath,{level:i,z:i,col:r,x:r,row:t,y:t})}};(0,i._)([(0,a.Cb)({type:String,value:"",json:{write:!0}})],C.prototype,"copyright",void 0),(0,i._)([(0,a.Cb)({type:h.default,json:{write:!0}})],C.prototype,"fullExtent",void 0),(0,i._)([(0,a.Cb)({readOnly:!0,json:{read:!1,write:!1}})],C.prototype,"legendEnabled",void 0),(0,i._)([(0,a.Cb)({type:["show","hide"]})],C.prototype,"listMode",void 0),(0,i._)([(0,a.Cb)({dependsOn:["tileInfo"]})],C.prototype,"levelValues",null),(0,i._)([(0,a.Cb)({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],C.prototype,"isReference",void 0),(0,i._)([(0,a.Cb)({type:["WebTiledLayer"],value:"WebTiledLayer"})],C.prototype,"operationalLayerType",void 0),(0,i._)([(0,a.Cb)({readOnly:!0,json:{read:!1,write:!1}})],C.prototype,"popupEnabled",void 0),(0,i._)([(0,a.Cb)({type:y.Z})],C.prototype,"spatialReference",void 0),(0,i._)([(0,o.r)("spatialReference",["spatialReference","fullExtent.spatialReference"])],C.prototype,"readSpatialReference",null),(0,i._)([(0,a.Cb)({type:[String],json:{write:!0}})],C.prototype,"subDomains",void 0),(0,i._)([(0,a.Cb)({type:T.Z,json:{write:!0}})],C.prototype,"tileInfo",void 0),(0,i._)([(0,a.Cb)({readOnly:!0,dependsOn:["urlTemplate","subDomains"]})],C.prototype,"tileServers",null),(0,i._)([(0,a.Cb)({json:{read:!1}})],C.prototype,"type",void 0),(0,i._)([(0,a.Cb)({dependsOn:["urlTemplate"]})],C.prototype,"urlPath",null),(0,i._)([(0,a.Cb)({type:String,json:{origins:{"portal-item":{read:{source:"url"}}}}})],C.prototype,"urlTemplate",void 0),(0,i._)([(0,o.r)("urlTemplate",["urlTemplate","templateUrl"])],C.prototype,"readUrlTemplate",null),(0,i._)([(0,u.c)("urlTemplate",{templateUrl:{type:String}})],C.prototype,"writeUrlTemplate",null),(0,i._)([(0,a.Cb)({type:_.Z,json:{write:!0}})],C.prototype,"wmtsInfo",void 0),C=(0,i._)([(0,n.j)("esri.layers.WebTileLayer")],C);const L=C},33611:(e,t,r)=>{"use strict";r.d(t,{Z:()=>p});var i,s=r(56140),l=(r(95830),r(82550)),a=(r(36544),r(68055),r(79881)),o=r(87566),n=(r(10923),r(57002),r(86035),r(58385));let u=i=class extends n.wq{constructor(e){super(e)}clone(){return new i({customLayerParameters:(0,l.d9)(this.customLayerParameters),customParameters:(0,l.d9)(this.customParameters),layerIdentifier:this.layerIdentifier,tileMatrixSet:this.tileMatrixSet,url:this.url})}};(0,s._)([(0,a.Cb)({json:{type:Object,write:!0}})],u.prototype,"customLayerParameters",void 0),(0,s._)([(0,a.Cb)({json:{type:Object,write:!0}})],u.prototype,"customParameters",void 0),(0,s._)([(0,a.Cb)({type:String,json:{write:!0}})],u.prototype,"layerIdentifier",void 0),(0,s._)([(0,a.Cb)({type:String,json:{write:!0}})],u.prototype,"tileMatrixSet",void 0),(0,s._)([(0,a.Cb)({type:String,json:{write:!0}})],u.prototype,"url",void 0),u=i=(0,s._)([(0,o.j)("esri.layer.support.WMTSLayerInfo")],u);const p=u}}]);
//# sourceMappingURL=5155.js.map