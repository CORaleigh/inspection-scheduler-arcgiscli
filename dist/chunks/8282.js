(self.webpackChunkinspection_scheduler=self.webpackChunkinspection_scheduler||[]).push([[8282],{68282:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>S});var s=i(56140),l=(i(95830),i(36544),i(68055),i(79881)),r=i(87566),a=(i(10923),i(57002),i(86035),i(39105)),h=i(41241),n=i(59691),u=i(12421),c=i(46666),d=i(13596),o=i(1768),f=i(48164),p=i(81558),y=i(65476);const _=[102113,102100,3857,3785,900913];let w=class extends((0,u.y)((0,y.Y)((0,p.y)(f.Z)))){constructor(){super(...arguments),this._handles=new n.Z,this._tileStrategy=null,this._fetchQueue=null,this._tileRequests=new Map,this.layer=null}get tileMatrixSet(){if(this.layer.activeLayer.tileMatrixSetId)return this.layer.activeLayer.tileMatrixSet;const e=this._getTileMatrixSetBySpatialReference(this.layer.activeLayer);return e?(this.layer.activeLayer.tileMatrixSetId=e.id,e):null}hitTest(){return null}update(e){this._fetchQueue.pause(),this._fetchQueue.state=e.state,this._tileStrategy.update(e),this._fetchQueue.resume(),this.notifyChange("updating")}attach(){const e=this.layer.activeLayer,t=this.tileMatrixSet;if(!t)return;const i=t.tileInfo.spatialReference;let s=e.fullExtent&&e.fullExtent.clone();i.isWebMercator?s=(0,h.$)(s):i.isWGS84||(s=t.fullExtent),this._tileInfoView=new c.Z(t.tileInfo,s),this._fetchQueue=new d.Z({tileInfoView:this._tileInfoView,process:e=>this.fetchTile(e)}),this._tileStrategy=new o.Z({cachePolicy:"keep",acquireTile:e=>this.acquireTile(e),releaseTile:e=>this.releaseTile(e),tileInfoView:this._tileInfoView}),this._handles.add(this.watch(["layer.activeLayer.styleId","tileMatrixSet"],(()=>this._refresh()))),super.attach()}detach(){super.detach(),this._handles.removeAll(),this._tileStrategy.destroy(),this._fetchQueue.clear(),this._fetchQueue=this._tileStrategy=this._tileInfoView=null}moveStart(){this.requestUpdate()}viewChange(){this.requestUpdate()}moveEnd(){this.requestUpdate()}async doRefresh(){this.updateRequested||this.suspended||this._refresh()}isUpdating(){return this._fetchQueue.length>0}acquireTile(e){const t=this._bitmapView.createTile(e),i=t.bitmap;[i.x,i.y]=this._tileInfoView.getTileCoords([0,0],t.key),i.resolution=this._tileInfoView.getTileResolution(t.key),[i.width,i.height]=this._tileInfoView.tileInfo.size,this._tileInfoView.getTileCoords(i,t.key);const s={id:e.id,fulfilled:!1,promise:this._fetchQueue.push(t.key).then((e=>{t.bitmap.source=e,t.once("attach",(()=>this.requestUpdate())),this._bitmapView.addChild(t)})).catch((e=>{(0,a.isAbortError)(e)||(t.bitmap.source=null,t.once("attach",(()=>this.requestUpdate())),this._bitmapView.addChild(t))}))};return s.promise.finally((()=>s.fulfilled=!0)),this._tileRequests.set(t,s),this.requestUpdate(),t}releaseTile(e){const t=this._tileRequests.get(e);t.fulfilled||this._fetchQueue.abort(t.id),this._tileRequests.delete(e),this._bitmapView.removeChild(e),e.once("detach",(()=>e.destroy())),this.requestUpdate()}async fetchTile(e){return this.layer.fetchTile(e.level,e.row,e.col)}canResume(){const e=super.canResume();return e?null!==this.tileMatrixSet:e}_refresh(){this._fetchQueue.reset(),this._tileStrategy.tiles.forEach((e=>{if(!e.bitmap.source)return;e.bitmap.source=null;const t={id:e.key.id,fulfilled:!1,promise:this._fetchQueue.push(e.key).then((t=>{e.bitmap.source=t,e.requestRender(),this.notifyChange("updating")}))};t.promise.then((()=>t.fulfilled=!0),(()=>t.fulfilled=!0)),this._tileRequests.set(e,t)})),this.notifyChange("updating")}_getTileMatrixSetBySpatialReference(e){const t=this.view.spatialReference;if(!e.tileMatrixSets)return null;let i=e.tileMatrixSets.find((e=>e.tileInfo.spatialReference.wkid===t.wkid));return!i&&t.isWebMercator&&(i=e.tileMatrixSets.find((e=>_.indexOf(e.tileInfo.spatialReference.wkid)>-1))),i}};(0,s._)([(0,l.Cb)({dependsOn:["tileMatrixSet"]})],w.prototype,"suspended",void 0),(0,s._)([(0,l.Cb)({readOnly:!0,dependsOn:["view.spatialReference","layer.activeLayer"]})],w.prototype,"tileMatrixSet",null),w=(0,s._)([(0,r.j)("esri.views.2d.layers.WMTSLayerView2D")],w);const S=w}}]);
//# sourceMappingURL=8282.js.map