(self.webpackChunkinspection_scheduler=self.webpackChunkinspection_scheduler||[]).push([[2573],{85987:(e,t,r)=>{"use strict";r.d(t,{QM:()=>o,hy:()=>i,uI:()=>s});var n=r(7584),a=r(33655);const s=(()=>{if(!("document"in n.Z))return()=>null;const e=document.createElement("canvas"),t=e.getContext("2d");return e.height=512,e.width=1,r=>{t.clearRect(0,0,1,e.height);const n=t.createLinearGradient(0,0,0,e.height);for(const{ratio:e,color:t}of r.colorStops)n.addColorStop(Math.max(e,.001),`rgba(${t[0]}, ${t[1]}, ${t[2]}, ${t[3]})`);return t.fillStyle=n,t.fillRect(0,0,1,e.height),t.getImageData(0,0,1,e.height).data}})();function o(e,t,r,n){const{blurRadius:a,fieldOffset:s,field:o}=t,i=new Float64Array(r*n),c=l(a),d=Math.round(3*a);let u,h=Number.NEGATIVE_INFINITY;const p=function(e,t){return null!=e?"string"==typeof t?t=>-1*+t.readAttribute(e):r=>+r.readAttribute(e)+t:e=>1}(o,s),f=new Set;for(const t of e){const e=t.getCursor();for(;e.next();){const t=e.getObjectId();if(f.has(t))continue;f.add(t);const a=e.readLegacyPointGeometry(),s=+p(e),o=a.x-d,l=a.y-d,y=Math.max(0,o),m=Math.max(0,l),g=Math.min(n,a.y+d),b=Math.min(r,a.x+d);for(let e=m;e<g;e++){const t=c[e-l];for(let n=y;n<b;n++){const a=c[n-o];u=i[e*r+n]+=t*a*s,u>h&&(h=u)}}}}return{matrix:i.buffer,max:h}}function i(e,t,r,n,s,o){e.canvas.width=e.canvas.height=t,e.clearRect(0,0,t,t);const i=e.getImageData(0,0,t,t);r&&n&&i.data.set(new Uint8ClampedArray(function(e,t,r,n,s){const o=new Uint32Array(e*e),i="buffer"in t?t:new Float64Array(t),l="buffer"in r?new Uint32Array(r.buffer):new Uint32Array(new Uint8Array(r).buffer),c=l.length/(s-n);for(let e=0;e<i.length;e++){const t=i[e],r=Math.floor((t-n)*c);o[e]=l[(0,a.uZ)(r,0,l.length-1)]}return o.buffer}(t,r,n,s,o))),e.putImageData(i,0,0)}function l(e){const t=Math.round(3*e),r=2*e*e,n=new Float64Array(2*t+1);for(let a=0;a<=n.length;a++)n[a]=Math.exp(-Math.pow(a-t,2)/r)/Math.sqrt(2*Math.PI)*(e/2);return n}},31887:(e,t,r)=>{"use strict";r.d(t,{Z:()=>l});var n=r(56140),a=(r(95830),r(36544),r(68055),r(79881)),s=r(87566),o=(r(10923),r(57002),r(86035),r(77204));let i=class extends o.r{initialize(){}destroy(){}get supportsTileUpdates(){return!1}get spatialReference(){const e=this.get("tileStore.tileScheme.spatialReference");return e&&e.toJSON()||null}};(0,n._)([(0,a.Cb)({readOnly:!0})],i.prototype,"supportsTileUpdates",null),(0,n._)([(0,a.Cb)({constructOnly:!0})],i.prototype,"remoteClient",void 0),(0,n._)([(0,a.Cb)({constructOnly:!0})],i.prototype,"service",void 0),(0,n._)([(0,a.Cb)({dependsOn:["tileStore.tileScheme.spatialReference"]})],i.prototype,"spatialReference",null),(0,n._)([(0,a.Cb)({constructOnly:!0})],i.prototype,"tileInfo",void 0),(0,n._)([(0,a.Cb)({constructOnly:!0})],i.prototype,"tileStore",void 0),i=(0,n._)([(0,s.j)("esri.views.2d.layers.features.processors.BaseProcessor")],i);const l=i},2573:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>d});var n=r(56140),a=(r(95830),r(59472)),s=(r(36544),r(68055),r(79881),r(87566)),o=(r(10923),r(57002),r(86035),r(23229)),i=r(85987),l=r(31887);let c=class extends l.Z{constructor(){super(...arguments),this.type="heatmap",this._tileKeyToFeatureSets=new Map}initialize(){this.handles.add([this.tileStore.on("update",this.onTileUpdate.bind(this))])}async update(e,t){const r=t.schema.processors[0];"heatmap"===r.type&&(0,o.Hg)(this._schema,r)&&(e.mesh=!0,this._schema=r)}onTileUpdate(e){for(const t of e.removed)this._tileKeyToFeatureSets.delete(t.key.id)}async onTileData(e,t,r){this._tileKeyToFeatureSets.has(e.key.id)&&"replace"!==t.type||this._tileKeyToFeatureSets.set(e.key.id,new Map);const n=this._tileKeyToFeatureSets.get(e.key.id);(0,a.pC)(t.addOrUpdate)&&n.set(t.addOrUpdate.instance,t);let s=t.end;if(n.forEach((e=>s=s||e.end)),!s)return;const o=[];n.forEach((e=>{(0,a.pC)(e.addOrUpdate)&&o.push(e.addOrUpdate)}));const l=(0,i.QM)(o,this._schema.mesh,512,512),c={tileKey:e.key.id,intensityInfo:l},d=[l.matrix];return this.remoteClient.invoke("tileRenderer.onTileData",c,{...r,transferList:d})}onTileError(e,t,r){return this.remoteClient.invoke("tileRenderer.onTileError",{tileKey:e.id,error:t},r)}};c=(0,n._)([(0,s.j)("esri.views.2d.layers.features.processors.HeatmapProcessor")],c);const d=c}}]);
//# sourceMappingURL=2573.js.map