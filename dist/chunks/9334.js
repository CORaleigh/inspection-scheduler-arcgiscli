(self.webpackChunkinspection_scheduler=self.webpackChunkinspection_scheduler||[]).push([[9334],{79334:(e,t,s)=>{"use strict";s.d(t,{Z:()=>he});var i=s(56140),r=s(95830),n=s(59472),a=(s(36544),s(68055),s(79881)),o=s(87566),h=(s(10923),s(57002),s(86035),s(39105)),c=s(79152),l=s(27780),d=s(73032),p=s(92232),u=s(53817),g=s(56885),m=s(96071),y=s(50897),_=s(5684),f=s(77204),b=s(71951),x=s(71286),w=s(43129),v=s(84767),S=s(79265),I=s(18671),G=s(96781),T=s(36933),M=s(44055),C=s(10321),U=s(29342),z=s(28487),F=s(27191),A=s(31036),P=s(45386),R=s(46639);class k extends R.i{constructor(e,t){super(e,t,null)}static from(e){const t=P.s.createInstance(),s=[],i=e.filter((e=>!!e.geometry));for(const e of i){const t=(0,g.Ji)(e.geometry);(0,A.E7)(s,[e],t,!1,!1,"uid")}return new k(t,s)}get geometryType(){const e=this._current;return e?e.geometryType:null}readGraphic(){return this._current}getCursor(){return this.copy()}copy(){const e=new k(this.instance,this._features);return this.copyInto(e),e}}var q=s(55407),H=s(31514),B=s(41571);const Z=class extends B.T{get hasLabels(){return!1}get labelsVisible(){return!1}renderChildren(e){this.attributeView.bindTextures(e.context),this.children.some((e=>e.hasData))&&(super.renderChildren(e),e.drawPhase===H.jx.MAP&&this._renderChildren(e),e.drawPhase===H.jx.HIGHLIGHT&&this._renderHighlight(e))}_renderChildren(e,t){for(const s of this.children)s.isReady&&s.hasData&&(s.commitChanges(e),e.context.setStencilFunction(514,s.stencilRef,255),s._displayList.replay(e,s,t))}_renderHighlight(e){const{painter:t}=e,s=t.effects.highlight;s.bind(e),this._renderChildren(e,s.defines),s.draw(e),s.unbind()}};var D=s(53379),O=s(47005),L=s(59933),X=s(93533),W=s(91535),V=s(96233),N=s(88998),j=s(73127),E=s(78712);const Y=new j.Z,Q=new j.Z;function J(e){e.coords.length=0,e.lengths.length=0}class ${constructor(){this.bounds=(0,y.Ue)(),this.graphic=null,this.size=[0,0,0,0]}static acquire(e=null,t,s,i,r,n){let a;return 0===$._pool.length?a=new $:(a=$._pool.pop(),this._set.delete(a)),a.acquire(e,t,s,i,r,n),a}static release(e){e&&!this._set.has(e)&&(e.release(),this._pool.push(e),this._set.add(e))}static getCentroidQuantized(e,t){if((0,g.oU)(e.geometry)){const s=e.symbol;if((0,n.Wi)(s))return null;if((0,D.yA)(s.type)){const s=(0,N.tO)(e.geometry);return(0,E.RF)(t,{},{x:s[0],y:s[1]},!1,!1)}}return null}acquire(e=null,t,s,i,r,n){e&&this.set(e,t,s,i,r,n)}release(){this.graphic=null,this.symbolResource=null,this.geometry=null}get symbol(){return this.symbolResource.symbol}set(e,t,s,i,r,n){this.graphic=e,this.geometry=s,this.symbolResource=t,this.updateBounds(i,r,n)}updateBounds(e,t,s){(0,D.zX)(this.bounds,this.size,this.symbolResource,this.geometry,e,t,s)}getGeometryQuantized(e){if((0,g.oU)(this.geometry)){const t=this.geometry.rings;if(1===t.length&&2===t[0].length)return(0,E.ym)(e,{paths:[[t[0][0],t[0][1]]]})}else if((0,g.l9)(this.geometry))return J(Y),J(Q),(0,A.u0)(Y,this.geometry),(0,A.zj)(Q,Y,this.geometry.hasZ,this.geometry.hasM,"esriGeometryPolyline",e.scale[0]),(0,A.Nh)(Y,Q,this.geometry.hasZ,this.geometry.hasM,"esriGeometryPolyline",e),(0,A.J6)(Y,this.geometry.hasZ,this.geometry.hasM);return(0,E.ym)(e,this.geometry)}}$._pool=[],$._set=new Set;const K=$,ee={minX:0,minY:0,maxX:0,maxY:0},te=(0,y.Ue)(),se=[];function ie(e,t,s,i,r){return ee.minX=t,ee.minY=s,ee.maxX=i,ee.maxY=r,e.search(ee)}var re=s(35326);const ne=e=>{let t=class extends((0,re.I)(e)){constructor(){super(...arguments),this.graphics=null,this.renderer=null,this.view=null}};return(0,i._)([(0,a.Cb)()],t.prototype,"graphics",void 0),(0,i._)([(0,a.Cb)()],t.prototype,"renderer",void 0),(0,i._)([(0,a.Cb)()],t.prototype,"updating",void 0),(0,i._)([(0,a.Cb)()],t.prototype,"view",void 0),t=(0,i._)([(0,o.j)("esri.views.layers.GraphicsView")],t),t};function ae(e,t,s){if(s.has(e))return s.get(e);const i={tile:t,addedOrModified:[],removed:[]};return s.set(e,i),i}let oe=class extends(ne((0,f.p)(c.default))){constructor(e){super(e),this._storage=new F.O,this._displayIds=new Map,this._tiles=new Map,this._graphicStoreUpdate=!1,this._graphicsSet=new Set,this._matcher=(0,h.resolve)(null),this._tileUpdateSet=new Set,this._tilesToUpdate=new Map,this._graphicIdToAbortController=new Map,this._attached=!1,this._highlightIds=new Map,this._updatingGraphicsTimer=null,this._processing=!1,this._needsProcessing=!1,this._pendingUpdate={added:new Set,updated:new Set,removed:new Set},this.lastUpdateId=-1,this.updateRequested=!1,this.graphicUpdateHandler=this.graphicUpdateHandler.bind(this),this._processAnalyzedGraphics=this._processAnalyzedGraphics.bind(this),this._graphicsChangeHandler=this._graphicsChangeHandler.bind(this)}_createMatcher(e,t){if(e){const s=(0,T.MD)({indexCount:0,fields:{}},"feature",e);this._matcher=(0,M.f)(s,t,null)}}_createDisplayId(e){return this._displayIds.has(e)||this._displayIds.set(e,this._storage.createDisplayId()),this._displayIds.get(e)}initialize(){this._tileStore=new q.Z(this.view.featuresTilingScheme),this.container=new Z(this.view.featuresTilingScheme),this._attributeStore=new z.ZP({type:"local",initialize:e=>(0,h.resolve)(this.container.attributeView.initialize(e)),update:e=>this.container.attributeView.requestUpdate(e),render:()=>this.container.requestRender()},(0,w.Z)()),this._graphicStore=new class{constructor(e,t,s,i,n,a){this._graphics=i,this._onAdd=n,this._onRemove=a,this._index=(0,V.r)(9,(0,r.Z)("csp-restrictions")?e=>({minX:e.bounds[0],minY:e.bounds[1],maxX:e.bounds[2],maxY:e.bounds[3]}):[".bounds[0]",".bounds[1]",".bounds[2]",".bounds[3]"]),this._itemByGraphic=new Map,this._currentLevel=-1/0,this._tileInfoView=e,this._uidFieldName=s;const o=e.getClosestInfoForScale(t);o&&(this._currentLevel=o.level,this._resolution=this._tileInfoView.getTileResolution(o.level)),this._metersPerUnit=(0,X.Z7)(e.spatialReference)}hitTest(e,t,s,i,r){e=(0,W.or)(e,this._tileInfoView.spatialReference);const n=.5*i*s;te[0]=e-n,te[1]=t-n,te[2]=e+n,te[3]=t+n;const a=.5*i*(s+50),o=ie(this._index,e-a,t-a,e+a,t+a);if(!o||0===o.length)return[];const h={x:e,y:t},c=[];let l;for(const s of o)if(s.graphic.visible)switch((0,g.Ji)(s.geometry)){case"esriGeometryPoint":{const e=s.symbol;if(!e)continue;const t=s.geometry,{x:n,y:a}=t,o=i*this._metersPerUnit;let l;switch(e.type){case"esriTS":l=(0,D.Zw)(n,a,e,s.size,i,r);break;case"expanded-cim":l=(0,D.oD)(n,a,e,i,o,r);break;case"esriSMS":case"esriPMS":l=(0,D.Il)(n,a,e,i,o,r)}(0,O.CI)(l,h)&&c.push(s)}break;case"esriGeometryPolyline":{const r=s.symbol;if(!r||!r.layers.length)continue;const n=r.layers[0];l=1.5*i*window.devicePixelRatio*(0,m.F2)(n.width),(0,D.nl)(s.geometry,e,t,l)&&c.push(s)}break;case"esriGeometryEnvelope":{const e=s.geometry,t=(0,y.al)(e.xmin,e.ymin,e.xmax,e.ymax);(0,y.kK)(t,te)&&c.push(s);break}case"esriGeometryPolygon":{if((0,O.CI)(s.geometry,h)){c.push(s);break}const e=(0,L._w)(s.geometry);if(Math.abs(e.ymax-e.ymin)<5*i||Math.abs(e.xmax-e.xmin)<5*i){const t=(0,y.al)(e.xmin,e.ymin,e.xmax,e.ymax);(0,y.kK)(t,te)&&c.push(s)}break}case"esriGeometryMultipoint":{const e=s.symbol;if(!e)continue;const t=s.geometry.points;let n;for(let a=0;a<t.length;a++)if(n="esriTS"===e.type?(0,D.Zw)(t[a][0],t[a][1],e,s.size,i,r):(0,D.Il)(t[a][0],t[a][1],e,i,i*this._metersPerUnit,r),(0,O.CI)(n,h)){c.push(s);break}break}}return c.sort(((e,t)=>{const s=(0,D.eT)(e.graphic),i=(0,D.eT)(t.graphic);return s===i?t.zorder-e.zorder:s-i})),c.map((e=>e.graphic))}getGraphicsData(e,t,s){const i=ie(this._index,t.bounds[0],t.bounds[1],t.bounds[2],t.bounds[3]);if(0===i.length||0===s.length)return[];i.sort(((e,t)=>e.zorder-t.zorder)),i[0].insertAfter=-1;for(let e=1;e<i.length;e++)i[e].insertAfter=i[e-1].graphic.uid;i.sort(((e,t)=>e.graphic.uid-t.graphic.uid)),s.sort(((e,t)=>e.uid-t.uid));let r,n=0,a=0;const o=[],h={originPosition:"upperLeft",scale:[t.resolution,t.resolution],translate:[t.bounds[0],t.bounds[3]]};for(const t of s){for(a=-2;n<i.length;)if(r=i[n],n++,t.uid===r.graphic.uid){a=r.insertAfter;break}if(!r.geometry||-2===a)continue;const s=r.getGeometryQuantized(h),c={...r.graphic.attributes};c[this._uidFieldName]=t.uid,null==r.groupId&&(r.groupId=e.createTemplateGroup(r.symbol,null)),o.push({centroid:K.getCentroidQuantized(r,h),geometry:s,attributes:c,symbol:r.symbol,groupId:r.groupId,insertAfter:a,zorder:r.zorder})}return o.sort(((e,t)=>e.zorder-t.zorder)),o}queryTileData(e,t){const s=50*t.resolution,i=(0,y.vk)(t.bounds,s,(0,y.Ue)()),r=ie(this._index,i[0],i[1],i[2],i[3]),n=[];return this._createTileGraphics(n,e,r,{originPosition:"upperLeft",scale:[t.resolution,t.resolution],translate:[t.bounds[0],t.bounds[3]]}),n}has(e){return this._itemByGraphic.has(e)}getBounds(e){return this._itemByGraphic.has(e)?this._itemByGraphic.get(e).bounds:null}addOrModify(e,t,s){if(!e)return;this.has(e)&&this.remove(e),this._onAdd(e);const i=K.acquire(e,t,s,this._resolution,this._resolution*this._metersPerUnit,this._tileInfoView.spatialReference);return this._itemByGraphic.set(e,i),s&&this._index.insert(i),i.bounds}remove(e){if(!this._itemByGraphic.has(e))return;this._onRemove(e);const t=this._itemByGraphic.get(e);this._index.remove(t),this._itemByGraphic.delete(e)}updateZ(){const e=this._graphics.items;let t,s;for(let i=0;i<e.length;i++)s=e[i],t=this._itemByGraphic.get(s),t&&(t.zorder=i)}update(e,t,s){const i=this._itemByGraphic.get(e);i.groupId=null;const r=(0,y.d9)(i.bounds);return i.size[0]=i.size[1]=0,this._index.remove(i),i.set(e,t,s,this._resolution,this._resolution*this._metersPerUnit,this._tileInfoView.spatialReference),s&&this._index.insert(i),{oldBounds:r,newBounds:i.bounds}}updateLevel(e){if(this._currentLevel===e)return;this._currentLevel=e;const t=this._tileInfoView.getTileResolution(e);this._resolution=t,this._index.clear(),se.length=0,this._itemByGraphic.forEach((e=>{e.updateBounds(this._resolution,this._resolution*this._metersPerUnit,this._tileInfoView.spatialReference),e.geometry&&se.push(e)})),this._index.load(se)}clear(){this._itemByGraphic.clear(),this._index.clear()}_createTileGraphics(e,t,s,i){const r=this._uidFieldName;let n,a,o,h;s.sort(((e,t)=>e.zorder-t.zorder));for(let c=0;c<s.length;c++){o=s[c],n=o.graphic,a=o.getGeometryQuantized(i),h=0===c?-1:s[c-1].graphic.uid;const l={...o.graphic.attributes};l[r]=n.uid,null==o.groupId&&(o.groupId=t.createTemplateGroup(o.symbol,null)),e.push({centroid:K.getCentroidQuantized(o,i),geometry:a,attributes:l,symbol:o.symbol,groupId:o.groupId,insertAfter:h,zorder:o.zorder})}}}(this.view.featuresTilingScheme,this.view.state.scale,this.uid,this.graphics,(e=>{this._createDisplayId(e.uid),this._setFilterState(e.uid,e.visible)}),(e=>{const t=this._displayIds.get(e.uid);this._displayIds.delete(e.uid),this._storage.releaseDisplayId(t)}));const e=new C.W(this.container.getMaterialItems.bind(this.container),!0);this._createMatcher(this.renderer,e),this._meshFactory=new U.j(null,this.uid,e),this._templateStore=e,this.watch("renderer",(t=>{this._createMatcher(t,e);for(const e of this.graphics)this._pendingUpdate.updated.add(e);this.requestUpdate()})),this._tileStore.on("update",this._onTileUpdate.bind(this)),this.container.on("attach",(()=>{this.graphics.items.length>0&&this._graphicsChangeHandler({target:this.graphics,added:this.graphics.items,removed:[],moved:[]}),this.handles.add(this.graphics.on("change",this._graphicsChangeHandler),"graphics"),this._attached=!0,this.notifyChange("updating")}))}destroy(){this._updatingGraphicsTimer&&(clearTimeout(this._updatingGraphicsTimer),this._updatingGraphicsTimer=null,this.notifyChange("updating")),this.container.destroy(),this._set("graphics",null),this._graphicStore.clear(),this._tileStore.destroy(),this._attributeStore=null}get updating(){return!this._attached||null!==this._updatingGraphicsTimer||this._tileUpdateSet.size>0||this._tilesToUpdate.size>0}hitTest(e,t){if(!this.view||!this.view.position)return(0,h.resolve)();const s=this.view.toMap((0,m.vW)(e,t));return this.searchFeatures(s).then((e=>e&&e.length?e[0]:null))}async searchFeatures(e,t=2){return this._graphicStore.hitTest(e.x,e.y,t,this.view.state.resolution,this.view.state.rotation)}update(e){const t=e.state,s=this.view.featuresTilingScheme.getClosestInfoForScale(t.scale).level;if(this._graphicStore.updateLevel(s),this._tileStore.setViewState(t),this._graphicStoreUpdate=!0,this.updateRequested=!1,this._pendingUpdate.updated.size>0){if(!this._processing)return void this._updateGraphics();this._needsProcessing=!0}}viewChange(){this.requestUpdate()}requestUpdate(){this.updateRequested||(this.updateRequested=!0,this.requestUpdateCallback())}processUpdate(e){this.updateRequested&&(this.updateRequested=!1,this.update(e))}graphicUpdateHandler(e){const{graphic:t,property:s,newValue:i}=e,r=t;switch(s){case"attributes":break;case"geometry":case"symbol":this._pendingUpdate.updated.add(r),this.requestUpdate();break;case"visible":this._setFilterState(r.uid,i),this._attributeStore.sendUpdates()}}addHighlight(e){for(const t of e)if(this._highlightIds.has(t)){const e=this._highlightIds.get(t);this._highlightIds.set(t,e+1)}else this._highlightIds.set(t,1);this._updateHighlight()}removeHighlight(e){for(const t of e)if(this._highlightIds.has(t)){const e=this._highlightIds.get(t)-1;0===e?this._highlightIds.delete(t):this._highlightIds.set(t,e)}this._updateHighlight()}_updateHighlight(){const e=Array.from(this._highlightIds.keys()),t=e.map((e=>this._displayIds.get(e)));this._attributeStore.setHighlight(e,t)}_getIntersectingTiles(e){const t=this._graphicStore.getBounds(e);return t&&0!==(0,y.bf)(t)&&0!==(0,y.Cb)(t)?this._tileStore.boundsIntersections(t):[]}_updateTile(e){const t=e.tile,s=this._getGraphicsData(this._templateStore,t,e.addedOrModified);return this._processGraphics(s).then((s=>(this._patchTile(t.key,{type:"update",addOrUpdate:s,remove:e.removed,end:!0}),s)))}_patchTile(e,t){if(!this._tiles.has(e))return;const s=this._tiles.get(e);this.container.onTileData(s,t),this.container.requestRender()}_graphicsChangeHandler(e){for(const t of e.added)this._pendingUpdate.added.add(t);for(const t of e.moved)this._pendingUpdate.added.add(t);for(const t of e.removed)this._pendingUpdate.added.has(t)?this._pendingUpdate.added.delete(t):this._pendingUpdate.removed.add(t);this._processing?this._needsProcessing=!0:this._updateGraphics()}_getGraphicsToUpdate(){const e={added:[],removed:[],updated:[]},t=this._pendingUpdate;for(const s of this.graphics.items)t.added.has(s)?e.added.push(s):t.updated.has(s)&&e.updated.push(s);for(const s of t.removed)this._graphicStore.has(s)&&e.removed.push(s);return t.added.clear(),t.removed.clear(),t.updated.clear(),e}async _updateGraphics(){this._processing=!0;const{added:e,removed:t,updated:s}=this._getGraphicsToUpdate(),i=this._tilesToUpdate;let r;try{if(!this._graphicStoreUpdate){const e=this.view.state,t=this.view.featuresTilingScheme.getClosestInfoForScale(e.scale).level;this._graphicStore.updateLevel(t),this._tileStore.setViewState(e)}const n=[],a=new Array(e.length+t.length);for(let e=0;e<s.length;e++){const t=s[e],o=this._getIntersectingTiles(t);for(const e of o)r=e.id,ae(r,e,i).removed.push(this._displayIds.get(t.uid));n.push(this._updateGraphic(t,null)),a[e]=t}const o=s.length;for(let t=0;t<e.length;t++){const s=e[t];a[o+t]=s,this._graphicsSet.add(s),n.push(this.addGraphic(s))}for(const e of t){this._abortProcessingGraphic(e.uid);const t=this._getIntersectingTiles(e);for(const s of t)r=s.id,ae(r,s,i).removed.push(this._displayIds.get(e.uid));this._graphicsSet.delete(e),this._graphicStore.remove(e)}let c;this._flipUpdatingGraphics(),await(0,h.all)(n);for(let e=0;e<a.length;e++){c=a[e];const t=this._getIntersectingTiles(c);for(const e of t)r=e.id,ae(r,e,i).addedOrModified.push(c)}this._graphicStore.updateZ();const l=[];for(const[e,t]of i)l.push(this._updateTile(t));await(0,h.all)(l)}catch(e){}i.clear(),this.notifyChange("updating"),this._processing=!1,this._needsProcessing&&(this._needsProcessing=!1,this._updateGraphics())}_getArcadeInfo(e){const t=(e.attributes?Object.keys(e.attributes):[]).map((t=>({name:t,alias:t,type:"string"==typeof e.attributes[t]?"esriFieldTypeString":"esriFieldTypeDouble"})));return(0,n.Wi)(e.geometry)?null:{geometryType:(0,g.Ji)(e.geometry),spatialReference:d.Z.fromJSON(e.geometry.spatialReference),fields:t}}async _getSymbolForGraphic(e,t){return(0,n.pC)(e.symbol)?e.symbol:(0,n.pC)(this.renderer)?this.renderer.getSymbolAsync(e,{scale:this.view.scale,abortOptions:t}):this._getNullSymbol(e)}async _getSymbolResources(e,t){if(!this.container.stage)return(0,h.resolve)(null);const s=this._getArcadeInfo(e),i=await this._getSymbolForGraphic(e,t),r=(0,T.PY)(i),n=await(0,S.B)(r,s,t);if("esriTS"===n.type){const e=[],[t]=(0,v.E)(n.text);for(let s=0;s<t.length;s++)e.push(t.charCodeAt(s));const s={symbol:n,id:0,glyphIds:e},[{mosaicItem:i}]=await this.container.getMaterialItems([s]);return{symbol:n,mosaicItem:i}}return{symbol:n,mosaicItem:null}}async _projectAndNormalizeGeometry(e){if((0,n.Wi)(e.geometry))return(0,h.resolve)(null);let t=e.geometry;if((0,g.oU)(t)){const e=t.rings;t.rings=e}else if((0,g.l9)(t)){const e=t.paths;t.paths=e}else(0,g.YX)(t)&&(t=u.Z.fromExtent(t));return(0,b._W)(t.spatialReference,this.view.spatialReference).then((()=>{const e=(0,D.aX)(t),s=(0,b.iV)(e,t.spatialReference,this.view.spatialReference);return(0,p.pW)(s),s}))}_onTileUpdate(e){const t=(0,l.C5)(this.view.spatialReference);if(e.added&&e.added.length>0)for(const s of e.added)this._addNewTile(s,t);if(e.removed&&e.removed.length>0)for(const t of e.removed)this._removeTile(t.key)}addGraphic(e){this._abortProcessingGraphic(e.uid);const t=(0,h.createAbortController)();this._graphicIdToAbortController.set(e.uid,t);const s={signal:t.signal};return this._addOrUpdateGraphic(e,s).then((()=>{this._graphicIdToAbortController.delete(e.uid)})).catch((t=>{if(this._graphicIdToAbortController.delete(e.uid),!(0,h.isAbortError)(t))throw t}))}async _updateGraphic(e,t){const s=this._projectAndNormalizeGeometry(e),i=this._getSymbolResources(e,t),[r,n]=await(0,h.all)([s,i]);this._graphicStore.addOrModify(e,n,r)}async _addOrUpdateGraphic(e,t){const s=this._projectAndNormalizeGeometry(e),i=this._getSymbolResources(e,t);try{const[t,r]=await(0,h.all)([s,i]);this._addProjectedGraphic(e,r,t)}catch(e){if(!(0,h.isAbortError)(e))throw e}}_addProjectedGraphic(e,t,s){this._graphicsSet.has(e)&&this._graphicStore.addOrModify(e,t,s)}_addTile(e){const t=(0,y.Ue)();this.view.featuresTilingScheme.getTileBounds(t,e);const s=new G.o(e,t,!0);return this._tiles.set(e,s),this.container.addChild(s),s}_addNewTile(e,t){const s=this._addTile(e.key),i=this._graphicStore.queryTileData(this._templateStore,e);if(t){const s=Math.round((t.valid[1]-t.valid[0])/e.resolution);for(const e of i)e.geometry&&(0,g.wp)(e.geometry)&&this._wrapPoints(e,s)}const r=e.key;this._tileUpdateSet.add(e.key),this.notifyChange("updating"),this._processGraphics(i).then((e=>{const t={type:"update",clear:!0,addOrUpdate:e,remove:[],end:!0};s.setData(t),this._tileUpdateSet.delete(r),this.notifyChange("updating")})).catch((e=>{if(this._tileUpdateSet.delete(r),this.notifyChange("updating"),!(0,h.isAbortError)(e))throw e}))}_removeTile(e){if(!this._tiles.has(e))return;const t=this._tiles.get(e);this.container.removeChild(t),t.destroy(),this._tiles.delete(e)}_setFilterState(e,t){const s=this._displayIds.get(e),i=this._attributeStore.getHighlightFlag(e);this._attributeStore.setData(s,0,0,i|(t?x.Zd:0))}_getGraphicsData(e,t,s){const i=(0,l.C5)(this.view.spatialReference),r=this._graphicStore.getGraphicsData(e,t,s);if(i){const e=Math.round((i.valid[1]-i.valid[0])/t.resolution);for(const t of r)t.geometry&&(0,g.wp)(t.geometry)&&this._wrapPoints(t,e)}return r}_wrapPoints(e,t){const s=e.geometry;512===t?s.x<20?e.geometry={points:[[s.x,s.y],[t,0]]}:s.x>492&&(e.geometry={points:[[s.x,s.y],[-t,0]]}):s.x<-20?e.geometry={points:[[s.x,s.y],[t,0]]}:s.x>532&&(e.geometry={points:[[s.x,s.y],[-t,0]]})}async _processGraphics(e,t){if(!e||!e.length||!this._meshFactory)return null;const s=k.from(e),i=this._meshFactory;return await i.analyzeGraphics(s,await this._matcher,null,null,t),this._attributeStore.sendUpdates(),this._processAnalyzedGraphics(s)}_processAnalyzedGraphics(e){const t=this._meshFactory,s=t.createMeshData(e.getApproximateSize()),i=e.getCursor();for(;i.next();){const e=i.readGraphic();e.insertAfter=-1===e.insertAfter?-1:this._displayIds.get(e.insertAfter),e.displayId=this._displayIds.get(e.attributes[this.uid]),t.writeGraphic(s,i)}const r={};return s.encode(r,[]),I.M.decode(r)}_abortProcessingGraphic(e){this._graphicIdToAbortController.has(e)&&this._graphicIdToAbortController.get(e).abort()}_getNullSymbol(e){const t=e.geometry;return(0,g.l9)(t)?_.mW:(0,g.oU)(t)||(0,g.YX)(t)?_.kD:_.G}_flipUpdatingGraphics(){this._updatingGraphicsTimer&&clearTimeout(this._updatingGraphicsTimer),this._updatingGraphicsTimer=setTimeout((()=>{this._updatingGraphicsTimer=null,this.notifyChange("updating")}),160),this.notifyChange("updating")}};(0,i._)([(0,a.Cb)({constructOnly:!0})],oe.prototype,"requestUpdateCallback",void 0),(0,i._)([(0,a.Cb)({constructOnly:!0})],oe.prototype,"graphics",void 0),(0,i._)([(0,a.Cb)()],oe.prototype,"updating",null),(0,i._)([(0,a.Cb)()],oe.prototype,"view",void 0),(0,i._)([(0,a.Cb)()],oe.prototype,"updateRequested",void 0),oe=(0,i._)([(0,o.j)("esri.views.2d.layers.support.GraphicsView2D")],oe);const he=oe},53379:(e,t,s)=>{"use strict";s.d(t,{zX:()=>I,oD:()=>q,Il:()=>k,Zw:()=>H,Q2:()=>D,eT:()=>T,yA:()=>G,nl:()=>R,aX:()=>B});s(95830);var i=s(59472),r=s(27780),n=s(73032),a=s(80685),o=s(6513),h=s(56885),c=s(96071),l=s(50897),d=s(91535),p=s(14286),u=s(42738),g=s(87561),m=s(27851),y=s(32651),_=s(17134),f=s(84767),b=s(36889);const x=Math.PI/180,w=(0,g.c)(),v=(0,m.c)(),S=(0,l.Ue)();function I(e,t,s,i,n,a,c){if(!i||!s.symbol)return e[0]=e[1]=e[2]=e[3]=0,t[0]=t[1]=t[2]=t[3]=0,e;const l=i;if(!(0,h.wp)(l)){(0,o.$P)(e,l);let i=t[0];0===i&&(i=Z(s),t[0]=i);const r=n*i/2;return e[0]-=r,e[1]-=r,e[2]+=r,e[3]+=r,e}{const i=l.x,o=l.y;"esriTS"===s.symbol.type&&0===t[2]&&0===t[3]&&D(t,s.symbol,s.mosaicItem),function(e,t,s,i,n,a,o,h){let c;switch(i.type){case"esriSMS":case"esriPMS":c=k(t,s,i,a,o,0);break;case"esriTS":c=H(t,s,i,n,a,0);break;case"cim":case"CIMSymbolReference":case"expanded-cim":c=q(t,s,i,a,o,0)}let l,p,u=0;for(let e=0;e<c.rings[0].length-1;e++)p=c.rings[0][e],l=(t-p[0])*(t-p[0])+(s-p[1])*(s-p[1]),u=Math.max(u,l);u=Math.sqrt(u);let g=(0,d.or)(t-u,h),m=(0,d.or)(t+u,h);if(g>m){const e=(0,r.C5)(h);if(e){const[t,s]=e.valid;g=t,m=s}}e[0]=g,e[1]=s-u,e[2]=m,e[3]=s+u}(e,i,o,s.symbol,t,n,a,c)}return e}function G(e){return"simple-marker"===e||"picture-marker"===e||"text"===e}function T(e){switch((0,i.Wg)(e.geometry).type){case"point":case"multipoint":return 0;case"polyline":return 1;case"polygon":case"extent":return 2}return 0}const M=(0,m.c)(),C=(0,m.c)(),U=(0,m.c)(),z=(0,m.c)(),F=(0,m.c)(),A=(0,m.c)(),P=(0,m.c)();function R(e,t,s,i){(0,p.s)(U,t,s);const r=e.paths;let n,a,o,h,c,l,d,u,g,m=1/0;for(let e=0;e<r.length;e++){const y=r[e];if(!(y.length<2))for(let e=1;e<y.length;e++)n=y[e-1][0],o=y[e-1][1],a=y[e][0],h=y[e][1],c=Math.min(n,a)-i,l=Math.min(o,h)-i,d=Math.max(n,a)+i,u=Math.max(o,h)+i,t<c||t>d||s<l||s>u||((0,p.s)(M,n,o),(0,p.s)(C,a,h),(0,p.d)(z,C,M),(0,p.d)(F,M,U),(0,p.a)(A,z,(0,p.g)(z,F)/(0,p.g)(z,z)),(0,p.d)(P,F,A),g=(0,p.g)(P,P),m>g&&(m=g))}return Math.sqrt(m)<=i}function k(e,t,s,i,r,n){let a,o;const h=(0,c.F2)(s.xoffset),l=(0,c.F2)(s.yoffset),d=x*s.angle,g=x*n;switch(s.type){case"esriSMS":a=o=(0,c.F2)(s.size);break;case"esriPMS":a=(0,c.F2)(s.width),o=(0,c.F2)(s.height)}r<.04&&(i=.04*i/r);const m=(0,u.i)(w);(0,u.t)(m,m,(0,p.s)(v,e,t)),(0,u.r)(m,m,g-d),(0,u.s)(m,m,(0,p.s)(v,i,-i)),(0,u.t)(m,m,(0,p.s)(v,h,-l));const y=[0,0];(0,p.t)(y,(0,p.s)(v,-.5*a,-.5*o),m);const _=[0,0];(0,p.t)(_,(0,p.s)(v,-.5*a,.5*o),m);const f=[0,0];(0,p.t)(f,(0,p.s)(v,.5*a,-.5*o),m);const b=[0,0];return(0,p.t)(b,(0,p.s)(v,.5*a,.5*o),m),{rings:[[y,f,b,_,y]]}}function q(e,t,s,i,r,n){const a=b.B$.getEnvelope(s.data);if(!a)return null;r<.04&&(i=.04*i/r);const o=(0,c.F2)(a.width),h=(0,c.F2)(a.height),l=(0,c.F2)(a.x),d=(0,c.F2)(a.y),g=0*x,m=x*n,y=(0,u.i)(w);(0,u.t)(y,y,(0,p.s)(v,e,t)),(0,u.r)(y,y,m-g),(0,u.s)(y,y,(0,p.s)(v,i,i));const _=[0,0];(0,p.t)(_,(0,p.s)(v,l,d+h),y);const f=[0,0];(0,p.t)(f,(0,p.s)(v,l,d),y);const S=[0,0];(0,p.t)(S,(0,p.s)(v,l+o,d+h),y);const I=[0,0];return(0,p.t)(I,(0,p.s)(v,l+o,d),y),{rings:[[_,S,I,f,_]]}}function H(e,t,s,i,r,n){const a=(0,c.F2)(s.xoffset),o=(0,c.F2)(s.yoffset),h=x*s.angle,l=x*n,d=(0,u.i)(w);(0,u.t)(d,d,(0,p.s)(v,e,t)),(0,u.r)(d,d,l),(0,u.s)(d,d,(0,p.s)(v,r,-r));const g=i[0]+i[2]/2,m=i[1]+i[3]/2;(0,u.t)(d,d,(0,p.s)(v,a,-o)),(0,u.t)(d,d,(0,p.s)(v,g,m)),(0,u.r)(d,d,h),(0,u.t)(d,d,(0,p.s)(v,-g,-m));const y=[0,0];(0,p.t)(y,(0,p.s)(v,i[0],i[1]),d);const _=[0,0];(0,p.t)(_,(0,p.s)(v,i[0],i[1]+i[3]),d);const f=[0,0];(0,p.t)(f,(0,p.s)(v,i[0]+i[2],i[1]),d);const b=[0,0];return(0,p.t)(b,(0,p.s)(v,i[0]+i[2],i[1]+i[3]),d),{rings:[[y,f,b,_,y]]}}function B(e){let t,s,i,n,c,l,d,p,u,g=null;if(!e)return null;if("mesh"===e.type)return e.toJSON();if(t=e.spatialReference,s=(0,r.C5)(t),!s)return e.toJSON();i=t.isWebMercator,l=i?102100:4326,n=O[l].maxX,c=O[l].minX,d=O[l].plus180Line,p=O[l].minus180Line;const m=e.toJSON();if((0,h.wp)(m))u=N(m,n,c);else if((0,h.aW)(m))m.points=m.points.map((e=>N(e,n,c))),u=m;else if((0,h.YX)(m))u=function(e,t){if(!t)return e;const s=function(e,t){const s=[],{ymin:i,ymax:r}=e,n=e.xmax-e.xmin,a=e.xmin,o=e.xmax;let h;const[c,l]=t.valid;h=X(e.xmin,t);const d=h.x,p=h.frameId;h=X(e.xmax,t);const u=h.x,g=h.frameId,m=d===u&&n>0;if(n>2*l){const e={xmin:a<o?d:u,ymin:i,xmax:l,ymax:r},t={xmin:c,ymin:i,xmax:a<o?u:d,ymax:r},n={xmin:0,ymin:i,xmax:l,ymax:r},h={xmin:c,ymin:i,xmax:0,ymax:r},m=[],y=[];W(e,n)&&m.push(p),W(e,h)&&y.push(p),W(t,n)&&m.push(g),W(t,h)&&y.push(g);for(let e=p+1;e<g;e++)m.push(e),y.push(e);s.push({extent:e,frameIds:[p]},{extent:t,frameIds:[g]},{extent:n,frameIds:m},{extent:h,frameIds:y})}else d>u||m?s.push({extent:{xmin:d,ymin:i,xmax:l,ymax:r},frameIds:[p]},{extent:{xmin:c,ymin:i,xmax:u,ymax:r},frameIds:[g]}):s.push({extent:{xmin:d,ymin:i,xmax:u,ymax:r},frameIds:[p]});return s}(e,t).map((e=>e.extent));return s.length<2?s[0]||e:s.length>2?(e.xmin=t.valid[0],e.xmax=t.valid[1],e):{rings:s.map((e=>[[e.xmin,e.ymin],[e.xmin,e.ymax],[e.xmax,e.ymax],[e.xmax,e.ymin],[e.xmin,e.ymin]]))}}(m,s);else if((0,h.oU)(m)||(0,h.l9)(m)){const e=S;(0,o.$P)(e,m);const t={xmin:e[0],ymin:e[1],xmax:e[2],ymax:e[3]},s=L(t.xmin,c)*(2*n),i=0===s?m:function(e,t){const s=function(e){return(0,h.oU)(e)?e.rings:e.paths}(e);for(const e of s)for(const s of e)s[0]+=t;return e}(m,s);t.xmin+=s,t.xmax+=s,(0,a.jQ)(t,d)&&t.xmax!==n||(0,a.jQ)(t,p)&&t.xmin!==c?g=i:u=i}else u=e.clone();return null!==g?(new j).cut(g,n):u}function Z(e){switch(e.symbol.type){case"esriSFS":case"esriPFS":{const t=e.symbol.outline;return t?t.width:0}case"esriSLS":return(0,c.F2)(e.symbol.width);case"esriSMS":return(0,c.F2)(e.symbol.size);case"esriPMS":return(0,c.F2)(Math.max(e.symbol.width,e.symbol.height));case"esriTS":{const t=[0,0,0,0];D(t,e.symbol,e.mosaicItem);const s=Math.max(Math.abs(t[0]),Math.abs(t[1]));return Math.max(t[2],t[3])+s}case"expanded-cim":{const t=b.B$.getEnvelope(e.symbol.data);return(0,c.F2)(Math.sqrt(t.width*t.width+t.height*t.height))}case"composite-symbol":{if(!e.symbol.layers.length)return 0;const t=e.symbol.layers.length-1;return Z({symbol:e.symbol.layers[t],mosaicItem:null})}case"label":default:return 0}}function D(e,t,s){if(!s||0===s.glyphMosaicItems.length)return e;const i=(0,f.E)(t.text)[1],r=s.glyphMosaicItems,n=(0,_.Nr)(r,i,{scale:(0,c.F2)(t.font.size)/24,angle:t.angle,xOffset:t.xoffset,yOffset:t.yoffset,hAlign:(0,y.kH)(t.horizontalAlignment||"center"),vAlign:(0,y.b7)(t.verticalAlignment||"baseline"),maxLineWidth:Math.max(32,Math.min(t.lineWidth||512,512)),lineHeight:30*Math.max(.25,Math.min(t.lineHeight||1,4)),decoration:t.font.decoration||"none",isCIM:!1}).bounds;return e[0]=(0,c.F2)(n.x-n.halfWidth),e[1]=(0,c.F2)(n.y-n.halfHeight),e[2]=(0,c.F2)(n.width),e[3]=(0,c.F2)(n.height),e}const O={102100:{maxX:20037508.342788905,minX:-20037508.342788905,plus180Line:{paths:[[[20037508.342788905,-20037508.342788905],[20037508.342788905,20037508.342788905]]],spatialReference:n.Z.WebMercator},minus180Line:{paths:[[[-20037508.342788905,-20037508.342788905],[-20037508.342788905,20037508.342788905]]],spatialReference:n.Z.WebMercator}},4326:{maxX:180,minX:-180,plus180Line:{paths:[[[180,-180],[180,180]]],spatialReference:n.Z.WGS84},minus180Line:{paths:[[[-180,-180],[-180,180]]],spatialReference:n.Z.WGS84}}};function L(e,t){return Math.ceil((e-t)/(2*t))}function X(e,t){const[s,i]=t.valid,r=2*i;let n,a=0;return e>i?(n=Math.ceil(Math.abs(e-i)/r),e-=n*r,a=n):e<s&&(n=Math.ceil(Math.abs(e-s)/r),e+=n*r,a=-n),{x:e,frameId:a}}function W(e,t){const{xmin:s,ymin:i,xmax:r,ymax:n}=t;return V(e,s,i)&&V(e,s,n)&&V(e,r,n)&&V(e,r,i)}function V(e,t,s){return t>=e.xmin&&t<=e.xmax&&s>=e.ymin&&s<=e.ymax}function N(e,t,s){if(Array.isArray(e)){const i=e[0];if(i>t){const s=L(i,t);e[0]=i+s*(-2*t)}else if(i<s){const t=L(i,s);e[0]=i+t*(-2*s)}}else{const i=e.x;if(i>t){const s=L(i,t);e.x+=s*(-2*t)}else if(i<s){const t=L(i,s);e.x+=t*(-2*s)}}return e}class j{cut(e,t){let s;if(e.rings)this.closed=!0,s=e.rings,this.minPts=4;else{if(!e.paths)return null;this.closed=!1,s=e.paths,this.minPts=2}const i=s.length,r=-2*t;for(let e=0;e<i;e++){const t=s[e];if(t&&t.length>=this.minPts){const e=[];for(const s of t)e.push([s[0]+r,s[1]]);s.push(e)}}return this.closed?e.rings=s:e.paths=s,e}}}}]);
//# sourceMappingURL=9334.js.map