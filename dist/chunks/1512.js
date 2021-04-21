(self.webpackChunkinspection_scheduler=self.webpackChunkinspection_scheduler||[]).push([[1512],{47977:(e,t,r)=>{"use strict";r.d(t,{E:()=>o});class s{constructor(e={}){this._options=e}toQueryParams(e){if(!e)return null;const t=e.toJSON(),r={};return Object.keys(t).forEach((e=>{const s=this._options[e];if(s){const o="boolean"!=typeof s&&s.name?s.name:e,i="boolean"!=typeof s&&s.getter?s.getter(t):t[e];null!=i&&(r[o]=(e=>{if(!Array.isArray(e))return!1;const[t]=e;return"number"==typeof t||"string"==typeof t})(i)?i.join(","):"object"==typeof i?JSON.stringify(i):i)}else r[e]=t[e]}),this),r}}function o(e){return new s(e)}},31512:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>N});var s=r(56140),o=(r(95830),r(36544),r(68055),r(79881)),i=r(87566),n=(r(10923),r(57002),r(86035),r(39105)),a=r(54721),l=r(91535),p=r(95986),u=r(47977),c=r(10532),d=r(59472),y=r(30590),f=r(58385),m=r(73032),h=r(61106),g=r(53817),v=r(93833),_=(r(36348),r(15988)),b=r(76194),T=r(69489),w=r(36405);function C(e){return b.default.fromJSON(e).features.map((e=>e.geometry))}let M=class extends f.wq{constructor(e){super(e),this.directions=null,this.facilities=null,this.incidents=null,this.messages=null,this.pointBarriers=null,this.polylineBarriers=null,this.polygonBarriers=null,this.routes=null}readFacilities(e){return C(e)}readIncidents(e){return C(e)}readPointBarriers(e,t){return C(t.barriers)}readPolylineBarriers(e){return C(e)}readPolygonBarriers(e){return C(e)}readRoutes(e){return function(e){return e.features.map((t=>{const r=m.Z.fromJSON(e.spatialReference),s=_.default.fromJSON(t);return(0,d.pC)(s.geometry)&&(s.geometry.spatialReference=r),s}))}(e)}};(0,s._)([(0,o.Cb)({type:[T.Z]})],M.prototype,"directions",void 0),(0,s._)([(0,o.Cb)({type:[h.Z]})],M.prototype,"facilities",void 0),(0,s._)([(0,y.r)("facilities")],M.prototype,"readFacilities",null),(0,s._)([(0,o.Cb)({type:[h.Z]})],M.prototype,"incidents",void 0),(0,s._)([(0,y.r)("incidents")],M.prototype,"readIncidents",null),(0,s._)([(0,o.Cb)({type:[w.Z]})],M.prototype,"messages",void 0),(0,s._)([(0,o.Cb)({type:[h.Z]})],M.prototype,"pointBarriers",void 0),(0,s._)([(0,y.r)("pointBarriers",["barriers"])],M.prototype,"readPointBarriers",null),(0,s._)([(0,o.Cb)({type:[v.Z]})],M.prototype,"polylineBarriers",void 0),(0,s._)([(0,y.r)("polylineBarriers")],M.prototype,"readPolylineBarriers",null),(0,s._)([(0,o.Cb)({type:[g.Z]})],M.prototype,"polygonBarriers",void 0),(0,s._)([(0,y.r)("polygonBarriers")],M.prototype,"readPolygonBarriers",null),(0,s._)([(0,o.Cb)({type:[_.default]})],M.prototype,"routes",void 0),(0,s._)([(0,y.r)("routes")],M.prototype,"readRoutes",null),M=(0,s._)([(0,i.j)("esri.tasks.support.ClosestFacilitySolveResult")],M);const S=M,B=(0,u.E)({accumulateAttributes:{name:"accumulateAttributeNames"},attributeParameterValues:!0,directionsTimeAttribute:{name:"directionsTimeAttributeName"},impedanceAttribute:{name:"impedanceAttributeName"},facilities:!0,incidents:!0,outSpatialReference:{name:"outSR",getter:e=>e.outSpatialReference.wkid},pointBarriers:{name:"barriers"},polylineBarriers:!0,polygonBarriers:!0,restrictionAttributes:{name:"restrictionAttributeNames"},returnPointBarriers:{name:"returnBarriers"},returnRoutes:{name:"returnCFRoutes"},travelMode:!0});let Z=class extends((0,c.Y)(p.Z)){constructor(e){super(e),this.url=null}solve(e,t){const r=[],s=[],o={},i={};return e.incidents&&e.incidents.features&&this._collectGeometries(e.incidents.features,s,"incidents.features",o),e.facilities&&e.facilities.features&&this._collectGeometries(e.facilities.features,s,"facilities.features",o),e.pointBarriers&&e.pointBarriers.features&&this._collectGeometries(e.pointBarriers.features,s,"pointBarriers.features",o),e.polylineBarriers&&e.polylineBarriers.features&&this._collectGeometries(e.polylineBarriers.features,s,"polylineBarriers.features",o),e.polygonBarriers&&e.polygonBarriers.features&&this._collectGeometries(e.polygonBarriers.features,s,"polygonBarriers.features",o),(0,l.aX)(s).then((e=>{for(const t in o){const s=o[t];r.push(t),i[t]=e.slice(s[0],s[1])}return this._isInputGeometryZAware(i,r)?this.getServiceDescription():(0,n.resolve)({dontCheck:!0})})).then((s=>{("dontCheck"in s?s.dontCheck:s.hasZ)||this._dropZValuesOffInputGeometry(i,r);for(const t in i)i[t].forEach(((r,s)=>{e.get(t)[s].geometry=r}));let o={query:{...this.parsedUrl.query,f:"json",...B.toQueryParams(e)}};return(this.requestOptions||t)&&(o={...this.requestOptions,...t,...o}),(0,a.default)(`${this.parsedUrl.path}/solveClosestFacility`,o)})).then((e=>S.fromJSON(e.data)))}_collectGeometries(e,t,r,s){s[r]=[t.length,t.length+e.length],e.forEach((e=>{t.push(e.geometry)}))}};(0,s._)([(0,o.Cb)()],Z.prototype,"url",void 0),Z=(0,s._)([(0,i.j)("esri.tasks.ClosestFacilityTask")],Z);const N=Z},10532:(e,t,r)=>{"use strict";r.d(t,{Y:()=>c});var s=r(56140),o=(r(95830),r(10103)),i=r(59472),n=(r(36544),r(68055),r(79881),r(87566)),a=r(32656),l=r(10923),p=(r(57002),r(86035),r(54721)),u=r(95986);const c=e=>{let t=class extends e{async getServiceDescription(){return this._serviceDescriptionPromise||(this._serviceDescriptionPromise=this._fetchServiceDescription()),this._serviceDescriptionPromise}async _fetchServiceDescription(){if(!this.url||!this.parsedUrl)throw new a.Z("network-service:missing-url","Url to Network service is missing");const e=this.url,{data:t}=await(0,p.default)(e,{query:{f:"json"}});t.supportedTravelModes||(t.supportedTravelModes=[]);for(let e=0;e<t.supportedTravelModes.length;e++)t.supportedTravelModes[e].id||(t.supportedTravelModes[e].id=t.supportedTravelModes[e].itemId);const r=t.currentVersion>=10.4?async function(e){try{const{data:{supportedTravelModes:t,defaultTravelMode:r}}=await(0,p.default)(e+("/"===e[e.length-1]?"":"/")+"retrieveTravelModes",{query:{f:"json"}});return{supportedTravelModes:t,defaultTravelMode:r}}catch(e){throw new a.Z("network-service:retrieveTravelModes","Could not get to the NAServer's retrieveTravelModes.",{error:e})}}(e):async function(e){const{data:t}=await(0,p.default)(e.substring(0,e.indexOf("/rest/")+6)+"info",{query:{f:"json"}});if(!t||!t.owningSystemUrl)return{supportedTravelModes:[],defaultTravelMode:null};e=t.owningSystemUrl;const{data:r}=await(0,p.default)(e+("/"===e[e.length-1]?"":"/")+"sharing/rest/portals/self",{query:{f:"json"}}),s=(0,o.hS)("helperServices.routingUtilities.url",r);if(!s)return{supportedTravelModes:[],defaultTravelMode:null};const i=(0,l.mN)(e),n=/\/solveClosestFacility$/.test(i.path)?"Route":/\/solveClosestFacility$/.test(i.path)?"ClosestFacility":"ServiceAreas",a=await(0,p.default)(s+("/"===s[s.length-1]?"":"/")+"GetTravelModes/execute",{query:{f:"json",serviceName:n}}),u=[];let c=null;if(a&&a.data&&a.data.results&&a.data.results.length){const e=a.data.results;for(const t of e)if("supportedTravelModes"===t.paramName){if(t.value&&t.value.features)for(const{attributes:e}of t.value.features)if(e){const t=JSON.parse(e.TravelMode);u.push(t)}}else"defaultTravelMode"===t.paramName&&(c=t.value)}return{supportedTravelModes:u,defaultTravelMode:c}}(e),{defaultTravelMode:s,supportedTravelModes:i}=await r;return t.defaultTravelMode=s,t.supportedTravelModes=i,t}_isInputGeometryZAware(e,t){for(let r=0;r<t.length;r++){const s=e[t[r]];if(s&&s.length)for(const e of s)if((0,i.pC)(e)&&e.hasZ)return!0}return!1}_dropZValuesOffInputGeometry(e,t){for(let r=0;r<t.length;r++){const s=e[t[r]];if(s&&s.length)for(const e of s)e.z=void 0}console.log("The remote Network Analysis service is powered by a network dataset which is not Z-aware.\nZ-coordinates of the input geometry are ignored.")}};return t=(0,s._)([(0,n.j)("esri.tasks.mixins.NAServiceDescription")],t),t};let d=class extends(c(u.Z)){};d=(0,s._)([(0,n.j)("esri.tasks.mixins.NAServiceDescription")],d)},69489:(e,t,r)=>{"use strict";r.d(t,{Z:()=>m});var s=r(56140),o=(r(95830),r(59472)),i=(r(36544),r(68055),r(79881)),n=r(30590),a=r(87566),l=(r(10923),r(57002),r(86035),r(73032)),p=r(61106),u=r(52937),c=r(93833),d=(r(36348),r(15988)),y=r(76194);let f=class extends y.default{constructor(e){super(e),this.extent=null,this.features=null,this.geometryType="polyline",this.routeId=null,this.routeName=null,this.totalDriveTime=null,this.totalLength=null,this.totalTime=null}readFeatures(e,t){(e||[]).forEach((e=>{this._decompressFeatureGeometry(e,t.summary.envelope.spatialReference)}));const r=l.Z.fromJSON(t.spatialReference);return e.map((e=>{const t=d.default.fromJSON(e),s=e.geometry&&e.geometry.spatialReference;return t.geometry&&!s&&((0,o.Wg)(t.geometry).spatialReference=r),t.strings=e.strings,t.events=(e.events||[]).map((t=>{const r=new d.default({geometry:new p.Z({x:t.point.x,y:t.point.y,z:t.point.z,hasZ:void 0!==t.point.z,spatialReference:e.geometry&&e.geometry.spatialReference}),attributes:{ETA:t.ETA,arriveTimeUTC:t.arriveTimeUTC}});return r.strings=t.strings,r})),t}))}get mergedGeometry(){if(!this.features)return null;const e=this.features.map((({geometry:e})=>(0,o.Wg)(e))),t=this.get("extent.spatialReference");return this._mergePolylinesToSinglePath(e,t)}get strings(){return this.features.map((({strings:e})=>e))}_decompressFeatureGeometry(e,t){e.geometry=this._decompressGeometry(e.compressedGeometry,t)}_decompressGeometry(e,t){let r=0,s=0,o=0,i=0;const n=[];let a,l,p,u,c,d,y,f,m=0,h=0,g=0;if(c=e.match(/((\+|\-)[^\+\-\|]+|\|)/g),c||(c=[]),0===parseInt(c[m],32)){m=2;const e=parseInt(c[m],32);m++,d=parseInt(c[m],32),m++,1&e&&(h=c.indexOf("|")+1,y=parseInt(c[h],32),h++),2&e&&(g=c.indexOf("|",h)+1,f=parseInt(c[g],32),g++)}else d=parseInt(c[m],32),m++;for(;m<c.length&&"|"!==c[m];){a=parseInt(c[m],32)+r,m++,r=a,l=parseInt(c[m],32)+s,m++,s=l;const e=[a/d,l/d];h&&(u=parseInt(c[h],32)+o,h++,o=u,e.push(u/y)),g&&(p=parseInt(c[g],32)+i,g++,i=p,e.push(p/f)),n.push(e)}return{paths:[n],hasZ:h>0,hasM:g>0,spatialReference:t}}_mergePolylinesToSinglePath(e,t){let r=[];(e||[]).forEach((e=>{e.paths.forEach((e=>{r=r.concat(e)}))}));const s=[];let o=[0,0];return r.forEach((e=>{e[0]===o[0]&&e[1]===o[1]||(s.push(e),o=e)})),new c.Z({paths:[s]},t)}};(0,s._)([(0,i.Cb)({type:u.default,json:{read:{source:"summary.envelope"}}})],f.prototype,"extent",void 0),(0,s._)([(0,i.Cb)()],f.prototype,"features",void 0),(0,s._)([(0,n.r)("features")],f.prototype,"readFeatures",null),(0,s._)([(0,i.Cb)()],f.prototype,"geometryType",void 0),(0,s._)([(0,i.Cb)({readOnly:!0,dependsOn:["features","extent.spatialReference"]})],f.prototype,"mergedGeometry",null),(0,s._)([(0,i.Cb)()],f.prototype,"routeId",void 0),(0,s._)([(0,i.Cb)()],f.prototype,"routeName",void 0),(0,s._)([(0,i.Cb)({value:null,readOnly:!0,dependsOn:["features"]})],f.prototype,"strings",null),(0,s._)([(0,i.Cb)({json:{read:{source:"summary.totalDriveTime"}}})],f.prototype,"totalDriveTime",void 0),(0,s._)([(0,i.Cb)({json:{read:{source:"summary.totalLength"}}})],f.prototype,"totalLength",void 0),(0,s._)([(0,i.Cb)({json:{read:{source:"summary.totalTime"}}})],f.prototype,"totalTime",void 0),f=(0,s._)([(0,a.j)("esri.tasks.support.DirectionsFeatureSet")],f);const m=f},21544:(e,t,r)=>{"use strict";r.d(t,{Z:()=>u});var s=r(56140),o=(r(95830),r(36544),r(68055),r(79881)),i=r(56274),n=r(87566),a=(r(10923),r(57002),r(86035),r(58385));const l=new i.Xn({esriJobMessageTypeInformative:"informative",esriJobMessageTypeProcessDefinition:"process-definition",esriJobMessageTypeProcessStart:"process-start",esriJobMessageTypeProcessStop:"process-stop",esriJobMessageTypeWarning:"warning",esriJobMessageTypeError:"error",esriJobMessageTypeEmpty:"empty",esriJobMessageTypeAbort:"abort"});let p=class extends a.wq{constructor(e){super(e),this.description=null,this.type=null}};(0,s._)([(0,o.Cb)({type:String,json:{write:!0}})],p.prototype,"description",void 0),(0,s._)([(0,o.Cb)({type:String,json:{read:l.read,write:l.write}})],p.prototype,"type",void 0),p=(0,s._)([(0,n.j)("esri.tasks.support.GPMessage")],p);const u=p},36405:(e,t,r)=>{"use strict";r.d(t,{Z:()=>u});var s=r(56140),o=(r(95830),r(36544),r(68055),r(79881)),i=r(56274),n=r(87566),a=(r(10923),r(57002),r(86035),r(21544));const l=new i.Xn({0:"informative",1:"process-definition",2:"process-start",3:"process-stop",50:"warning",100:"error",101:"empty",200:"abort"});let p=class extends a.Z{constructor(e){super(e),this.type=null}};(0,s._)([(0,o.Cb)({type:String,json:{read:l.read,write:l.write}})],p.prototype,"type",void 0),p=(0,s._)([(0,n.j)("esri.tasks.support.NAMessage")],p);const u=p}}]);
//# sourceMappingURL=1512.js.map