(self.webpackChunkinspection_scheduler=self.webpackChunkinspection_scheduler||[]).push([[9334],{79334:(e,t,i)=>{"use strict";i.d(t,{Z:()=>he});var s=i(56140),r=i(95830),n=i(59472),a=(i(36544),i(68055),i(79881)),o=i(87566),h=(i(10923),i(57002),i(86035),i(39105)),c=i(79152),d=i(27780),l=i(73032),p=i(92232),u=i(53817),g=i(56885),m=i(96071),y=i(50897),_=i(5684),f=i(77204),x=i(71951),b=i(71286),w=i(43129),S=i(84767),v=i(79265),I=i(18671),G=i(96781),T=i(36933),M=i(44055),C=i(10321),U=i(29342),z=i(28487),F=i(27191),P=i(31036),R=i(45386),A=i(46639);class k extends A.i{constructor(e,t){super(e,t,null)}static from(e){const t=R.s.createInstance(),i=[],s=e.filter((e=>!!e.geometry));for(const e of s){const t=(0,g.Ji)(e.geometry);(0,P.E7)(i,[e],t,!1,!1,"uid")}return new k(t,i)}get geometryType(){const e=this._current;return e?e.geometryType:null}readGraphic(){return this._current}getCursor(){return this.copy()}copy(){const e=new k(this.instance,this._features);return this.copyInto(e),e}}var D=i(55407),B=i(31514),q=i(41571);const H=class extends q.T{get hasLabels(){return!1}get labelsVisible(){return!1}renderChildren(e){this.attributeView.bindTextures(e.context),this.children.some((e=>e.hasData))&&(super.renderChildren(e),e.drawPhase===B.jx.MAP&&this._renderChildren(e),e.drawPhase===B.jx.HIGHLIGHT&&this._renderHighlight(e))}_renderChildren(e,t){for(const i of this.children)i.isReady&&i.hasData&&(i.commitChanges(e),e.context.setStencilFunction(514,i.stencilRef,255),i._displayList.replay(e,i,t))}_renderHighlight(e){const{painter:t}=e,i=t.effects.highlight;i.bind(e),this._renderChildren(e,i.defines),i.draw(e),i.unbind()}};var Z=i(53379),O=i(47005),L=i(59933),X=i(93533),W=i(91535),V=i(96233),N=i(88998),j=i(73127),Y=i(78712);const Q=new j.Z,E=new j.Z;function J(e){e.coords.length=0,e.lengths.length=0}class ${constructor(){this.bounds=(0,y.Ue)(),this.graphic=null,this.size=[0,0,0,0]}static acquire(e=null,t,i,s,r,n){let a;return 0===$._pool.length?a=new $:(a=$._pool.pop(),this._set.delete(a)),a.acquire(e,t,i,s,r,n),a}static release(e){e&&!this._set.has(e)&&(e.release(),this._pool.push(e),this._set.add(e))}static getCentroidQuantized(e,t){if((0,g.oU)(e.geometry)){const i=e.symbol;if((0,n.Wi)(i))return null;if((0,Z.yA)(i.type)){const i=(0,N.tO)(e.geometry);return(0,Y.RF)(t,{},{x:i[0],y:i[1]},!1,!1)}}return null}acquire(e=null,t,i,s,r,n){e&&this.set(e,t,i,s,r,n)}release(){this.graphic=null,this.symbolResource=null,this.geometry=null}get symbol(){return this.symbolResource.symbol}set(e,t,i,s,r,n){this.graphic=e,this.geometry=i,this.symbolResource=t,this.updateBounds(s,r,n)}updateBounds(e,t,i){(0,Z.zX)(this.bounds,this.size,this.symbolResource,this.geometry,e,t,i)}getGeometryQuantized(e){if((0,g.oU)(this.geometry)){const t=this.geometry.rings;if(1===t.length&&2===t[0].length)return(0,Y.ym)(e,{paths:[[t[0][0],t[0][1]]]})}else if((0,g.l9)(this.geometry))return J(Q),J(E),(0,P.u0)(Q,this.geometry),(0,P.zj)(E,Q,this.geometry.hasZ,this.geometry.hasM,"esriGeometryPolyline",e.scale[0]),(0,P.Nh)(Q,E,this.geometry.hasZ,this.geometry.hasM,"esriGeometryPolyline",e),(0,P.J6)(Q,this.geometry.hasZ,this.geometry.hasM);return(0,Y.ym)(e,this.geometry)}}$._pool=[],$._set=new Set;const K=$,ee={minX:0,minY:0,maxX:0,maxY:0},te=(0,y.Ue)(),ie=[];function se(e,t,i,s,r){return ee.minX=t,ee.minY=i,ee.maxX=s,ee.maxY=r,e.search(ee)}var re=i(35326);const ne=e=>{let t=class extends((0,re.I)(e)){constructor(){super(...arguments),this.graphics=null,this.renderer=null,this.view=null}};return(0,s._)([(0,a.Cb)()],t.prototype,"graphics",void 0),(0,s._)([(0,a.Cb)()],t.prototype,"renderer",void 0),(0,s._)([(0,a.Cb)()],t.prototype,"updating",void 0),(0,s._)([(0,a.Cb)()],t.prototype,"view",void 0),t=(0,s._)([(0,o.j)("esri.views.layers.GraphicsView")],t),t};function ae(e,t,i){if(i.has(e))return i.get(e);const s={tile:t,addedOrModified:[],removed:[]};return i.set(e,s),s}let oe=class extends(ne((0,f.p)(c.Z))){constructor(e){super(e),this._storage=new F.O,this._displayIds=new Map,this._tiles=new Map,this._graphicStoreUpdate=!1,this._graphicsSet=new Set,this._matcher=(0,h.DB)(null),this._tileUpdateSet=new Set,this._tilesToUpdate=new Map,this._graphicIdToAbortController=new Map,this._attached=!1,this._highlightIds=new Map,this._updatingGraphicsTimer=null,this._processing=!1,this._needsProcessing=!1,this._pendingUpdate={added:new Set,updated:new Set,removed:new Set},this.lastUpdateId=-1,this.updateRequested=!1,this.graphicUpdateHandler=this.graphicUpdateHandler.bind(this),this._processAnalyzedGraphics=this._processAnalyzedGraphics.bind(this),this._graphicsChangeHandler=this._graphicsChangeHandler.bind(this)}_createMatcher(e,t){if(e){const i=(0,T.MD)({indexCount:0,fields:{}},"feature",e);this._matcher=(0,M.f)(i,t,null)}}_createDisplayId(e){return this._displayIds.has(e)||this._displayIds.set(e,this._storage.createDisplayId()),this._displayIds.get(e)}initialize(){this._tileStore=new D.Z(this.view.featuresTilingScheme),this.container=new H(this.view.featuresTilingScheme),this._attributeStore=new z.ZP({type:"local",initialize:e=>(0,h.DB)(this.container.attributeView.initialize(e)),update:e=>this.container.attributeView.requestUpdate(e),render:()=>this.container.requestRender()},(0,w.Z)()),this._graphicStore=new class{constructor(e,t,i,s,n,a){this._graphics=s,this._onAdd=n,this._onRemove=a,this._index=(0,V.r)(9,(0,r.Z)("csp-restrictions")?e=>({minX:e.bounds[0],minY:e.bounds[1],maxX:e.bounds[2],maxY:e.bounds[3]}):[".bounds[0]",".bounds[1]",".bounds[2]",".bounds[3]"]),this._itemByGraphic=new Map,this._currentLevel=-1/0,this._tileInfoView=e,this._uidFieldName=i;const o=e.getClosestInfoForScale(t);o&&(this._currentLevel=o.level,this._resolution=this._tileInfoView.getTileResolution(o.level)),this._metersPerUnit=(0,X.Z7)(e.spatialReference)}hitTest(e,t,i,s,r){e=(0,W.or)(e,this._tileInfoView.spatialReference);const n=.5*s*i;te[0]=e-n,te[1]=t-n,te[2]=e+n,te[3]=t+n;const a=.5*s*(i+50),o=se(this._index,e-a,t-a,e+a,t+a);if(!o||0===o.length)return[];const h={x:e,y:t},c=[];let d;for(const i of o)if(i.graphic.visible)switch((0,g.Ji)(i.geometry)){case"esriGeometryPoint":{const e=i.symbol;if(!e)continue;const t=i.geometry,{x:n,y:a}=t,o=s*this._metersPerUnit;let d;switch(e.type){case"esriTS":d=(0,Z.Zw)(n,a,e,i.size,s,r);break;case"expanded-cim":d=(0,Z.oD)(n,a,e,s,o,r);break;case"esriSMS":case"esriPMS":d=(0,Z.Il)(n,a,e,s,o,r)}(0,O.CI)(d,h)&&c.push(i)}break;case"esriGeometryPolyline":{const r=i.symbol;if(!r||!r.layers.length)continue;const n=r.layers[0];d=1.5*s*window.devicePixelRatio*(0,m.F2)(n.width),(0,Z.nl)(i.geometry,e,t,d)&&c.push(i)}break;case"esriGeometryEnvelope":{const e=i.geometry,t=(0,y.al)(e.xmin,e.ymin,e.xmax,e.ymax);(0,y.kK)(t,te)&&c.push(i);break}case"esriGeometryPolygon":{if((0,O.CI)(i.geometry,h)){c.push(i);break}const e=(0,L._w)(i.geometry);if(Math.abs(e.ymax-e.ymin)<5*s||Math.abs(e.xmax-e.xmin)<5*s){const t=(0,y.al)(e.xmin,e.ymin,e.xmax,e.ymax);(0,y.kK)(t,te)&&c.push(i)}break}case"esriGeometryMultipoint":{const e=i.symbol;if(!e)continue;const t=i.geometry.points;let n;for(let a=0;a<t.length;a++)if(n="esriTS"===e.type?(0,Z.Zw)(t[a][0],t[a][1],e,i.size,s,r):(0,Z.Il)(t[a][0],t[a][1],e,s,s*this._metersPerUnit,r),(0,O.CI)(n,h)){c.push(i);break}break}}return c.sort(((e,t)=>{const i=(0,Z.eT)(e.graphic),s=(0,Z.eT)(t.graphic);return i===s?t.zorder-e.zorder:i-s})),c.map((e=>e.graphic))}getGraphicsData(e,t,i){const s=se(this._index,t.bounds[0],t.bounds[1],t.bounds[2],t.bounds[3]);if(0===s.length||0===i.length)return[];s.sort(((e,t)=>e.zorder-t.zorder)),s[0].insertAfter=-1;for(let e=1;e<s.length;e++)s[e].insertAfter=s[e-1].graphic.uid;s.sort(((e,t)=>e.graphic.uid-t.graphic.uid)),i.sort(((e,t)=>e.uid-t.uid));let r,n=0,a=0;const o=[],h={originPosition:"upperLeft",scale:[t.resolution,t.resolution],translate:[t.bounds[0],t.bounds[3]]};for(const t of i){for(a=-2;n<s.length;)if(r=s[n],n++,t.uid===r.graphic.uid){a=r.insertAfter;break}if(!r.geometry||-2===a)continue;const i=r.getGeometryQuantized(h),c={...r.graphic.attributes};c[this._uidFieldName]=t.uid,null==r.groupId&&(r.groupId=e.createTemplateGroup(r.symbol,null)),o.push({centroid:K.getCentroidQuantized(r,h),geometry:i,attributes:c,symbol:r.symbol,groupId:r.groupId,insertAfter:a,zorder:r.zorder})}return o.sort(((e,t)=>e.zorder-t.zorder)),o}queryTileData(e,t){const i=50*t.resolution,s=(0,y.vk)(t.bounds,i,(0,y.Ue)()),r=se(this._index,s[0],s[1],s[2],s[3]),n=[];return this._createTileGraphics(n,e,r,{originPosition:"upperLeft",scale:[t.resolution,t.resolution],translate:[t.bounds[0],t.bounds[3]]}),n}has(e){return this._itemByGraphic.has(e)}getBounds(e){return this._itemByGraphic.has(e)?this._itemByGraphic.get(e).bounds:null}addOrModify(e,t,i){if(!e)return;this.has(e)&&this.remove(e),this._onAdd(e);const s=K.acquire(e,t,i,this._resolution,this._resolution*this._metersPerUnit,this._tileInfoView.spatialReference);return this._itemByGraphic.set(e,s),i&&this._index.insert(s),s.bounds}remove(e){if(!this._itemByGraphic.has(e))return;this._onRemove(e);const t=this._itemByGraphic.get(e);this._index.remove(t),this._itemByGraphic.delete(e)}updateZ(){const e=this._graphics.items;let t,i;for(let s=0;s<e.length;s++)i=e[s],t=this._itemByGraphic.get(i),t&&(t.zorder=s)}update(e,t,i){const s=this._itemByGraphic.get(e);s.groupId=null;const r=(0,y.d9)(s.bounds);return s.size[0]=s.size[1]=0,this._index.remove(s),s.set(e,t,i,this._resolution,this._resolution*this._metersPerUnit,this._tileInfoView.spatialReference),i&&this._index.insert(s),{oldBounds:r,newBounds:s.bounds}}updateLevel(e){if(this._currentLevel===e)return;this._currentLevel=e;const t=this._tileInfoView.getTileResolution(e);this._resolution=t,this._index.clear(),ie.length=0,this._itemByGraphic.forEach((e=>{e.updateBounds(this._resolution,this._resolution*this._metersPerUnit,this._tileInfoView.spatialReference),e.geometry&&ie.push(e)})),this._index.load(ie)}clear(){this._itemByGraphic.clear(),this._index.clear()}_createTileGraphics(e,t,i,s){const r=this._uidFieldName;let n,a,o,h;i.sort(((e,t)=>e.zorder-t.zorder));for(let c=0;c<i.length;c++){o=i[c],n=o.graphic,a=o.getGeometryQuantized(s),h=0===c?-1:i[c-1].graphic.uid;const d={...o.graphic.attributes};d[r]=n.uid,null==o.groupId&&(o.groupId=t.createTemplateGroup(o.symbol,null)),e.push({centroid:K.getCentroidQuantized(o,s),geometry:a,attributes:d,symbol:o.symbol,groupId:o.groupId,insertAfter:h,zorder:o.zorder})}}}(this.view.featuresTilingScheme,this.view.state.scale,this.uid,this.graphics,(e=>{this._createDisplayId(e.uid),this._setFilterState(e.uid,e.visible)}),(e=>{const t=this._displayIds.get(e.uid);this._displayIds.delete(e.uid),this._storage.releaseDisplayId(t)}));const e=new C.W(this.container.getMaterialItems.bind(this.container),!0);this._createMatcher(this.renderer,e),this._meshFactory=new U.j(null,this.uid,e),this._templateStore=e,this.watch("renderer",(t=>{this._createMatcher(t,e);for(const e of this.graphics)this._pendingUpdate.updated.add(e);this.requestUpdate()})),this._tileStore.on("update",this._onTileUpdate.bind(this)),this.container.on("attach",(()=>{this.graphics.items.length>0&&this._graphicsChangeHandler({target:this.graphics,added:this.graphics.items,removed:[],moved:[]}),this.handles.add(this.graphics.on("change",this._graphicsChangeHandler),"graphics"),this._attached=!0,this.notifyChange("updating")}))}destroy(){this._updatingGraphicsTimer&&(clearTimeout(this._updatingGraphicsTimer),this._updatingGraphicsTimer=null,this.notifyChange("updating")),this.container.destroy(),this._set("graphics",null),this._graphicStore.clear(),this._tileStore.destroy(),this._attributeStore=null}get updating(){return!this._attached||null!==this._updatingGraphicsTimer||this._tileUpdateSet.size>0||this._tilesToUpdate.size>0}hitTest(e,t){if(!this.view||!this.view.position)return(0,h.DB)();const i=this.view.toMap((0,m.vW)(e,t));return this.searchFeatures(i).then((e=>e&&e.length?e[0]:null))}async searchFeatures(e,t=2){return this._graphicStore.hitTest(e.x,e.y,t,this.view.state.resolution,this.view.state.rotation)}update(e){const t=e.state,i=this.view.featuresTilingScheme.getClosestInfoForScale(t.scale).level;if(this._graphicStore.updateLevel(i),this._tileStore.setViewState(t),this._graphicStoreUpdate=!0,this.updateRequested=!1,this._pendingUpdate.updated.size>0){if(!this._processing)return void this._updateGraphics();this._needsProcessing=!0}}viewChange(){this.requestUpdate()}requestUpdate(){this.updateRequested||(this.updateRequested=!0,this.requestUpdateCallback())}processUpdate(e){this.updateRequested&&(this.updateRequested=!1,this.update(e))}graphicUpdateHandler(e){const{graphic:t,property:i,newValue:s}=e,r=t;switch(i){case"attributes":break;case"geometry":case"symbol":this._pendingUpdate.updated.add(r),this.requestUpdate();break;case"visible":this._setFilterState(r.uid,s),this._attributeStore.sendUpdates()}}addHighlight(e){for(const t of e)if(this._highlightIds.has(t)){const e=this._highlightIds.get(t);this._highlightIds.set(t,e+1)}else this._highlightIds.set(t,1);this._updateHighlight()}removeHighlight(e){for(const t of e)if(this._highlightIds.has(t)){const e=this._highlightIds.get(t)-1;0===e?this._highlightIds.delete(t):this._highlightIds.set(t,e)}this._updateHighlight()}_updateHighlight(){const e=Array.from(this._highlightIds.keys()),t=e.map((e=>this._displayIds.get(e)));this._attributeStore.setHighlight(e,t)}_getIntersectingTiles(e){const t=this._graphicStore.getBounds(e);return t&&0!==(0,y.bf)(t)&&0!==(0,y.Cb)(t)?this._tileStore.boundsIntersections(t):[]}_updateTile(e){const t=e.tile,i=this._getGraphicsData(this._templateStore,t,e.addedOrModified);return this._processGraphics(i).then((i=>(this._patchTile(t.key,{type:"update",addOrUpdate:i,remove:e.removed,end:!0}),i)))}_patchTile(e,t){if(!this._tiles.has(e))return;const i=this._tiles.get(e);this.container.onTileData(i,t),this.container.requestRender()}_graphicsChangeHandler(e){for(const t of e.added)this._pendingUpdate.added.add(t);for(const t of e.moved)this._pendingUpdate.added.add(t);for(const t of e.removed)this._pendingUpdate.added.has(t)?this._pendingUpdate.added.delete(t):this._pendingUpdate.removed.add(t);this._processing?this._needsProcessing=!0:this._updateGraphics()}_getGraphicsToUpdate(){const e={added:[],removed:[],updated:[]},t=this._pendingUpdate;for(const i of this.graphics.items)t.added.has(i)?e.added.push(i):t.updated.has(i)&&e.updated.push(i);for(const i of t.removed)this._graphicStore.has(i)&&e.removed.push(i);return t.added.clear(),t.removed.clear(),t.updated.clear(),e}async _updateGraphics(){this._processing=!0;const{added:e,removed:t,updated:i}=this._getGraphicsToUpdate(),s=this._tilesToUpdate;let r;try{if(!this._graphicStoreUpdate){const e=this.view.state,t=this.view.featuresTilingScheme.getClosestInfoForScale(e.scale).level;this._graphicStore.updateLevel(t),this._tileStore.setViewState(e)}const n=[],a=new Array(e.length+t.length);for(let e=0;e<i.length;e++){const t=i[e],o=this._getIntersectingTiles(t);for(const e of o)r=e.id,ae(r,e,s).removed.push(this._displayIds.get(t.uid));n.push(this._updateGraphic(t,null)),a[e]=t}const o=i.length;for(let t=0;t<e.length;t++){const i=e[t];a[o+t]=i,this._graphicsSet.add(i),n.push(this.addGraphic(i))}for(const e of t){this._abortProcessingGraphic(e.uid);const t=this._getIntersectingTiles(e);for(const i of t)r=i.id,ae(r,i,s).removed.push(this._displayIds.get(e.uid));this._graphicsSet.delete(e),this._graphicStore.remove(e)}let c;this._flipUpdatingGraphics(),await(0,h.$6)(n);for(let e=0;e<a.length;e++){c=a[e];const t=this._getIntersectingTiles(c);for(const e of t)r=e.id,ae(r,e,s).addedOrModified.push(c)}this._graphicStore.updateZ();const d=[];for(const[e,t]of s)d.push(this._updateTile(t));await(0,h.$6)(d)}catch(e){}s.clear(),this.notifyChange("updating"),this._processing=!1,this._needsProcessing&&(this._needsProcessing=!1,this._updateGraphics())}_getArcadeInfo(e){const t=(e.attributes?Object.keys(e.attributes):[]).map((t=>({name:t,alias:t,type:"string"==typeof e.attributes[t]?"esriFieldTypeString":"esriFieldTypeDouble"})));return(0,n.Wi)(e.geometry)?null:{geometryType:(0,g.Ji)(e.geometry),spatialReference:l.Z.fromJSON(e.geometry.spatialReference),fields:t}}async _getSymbolForGraphic(e,t){return(0,n.pC)(e.symbol)?e.symbol:(0,n.pC)(this.renderer)?this.renderer.getSymbolAsync(e,{scale:this.view.scale,abortOptions:t}):this._getNullSymbol(e)}async _getSymbolResources(e,t){if(!this.container.stage)return(0,h.DB)(null);const i=this._getArcadeInfo(e),s=await this._getSymbolForGraphic(e,t),r=(0,T.PY)(s),n=await(0,v.B)(r,i,t);if("esriTS"===n.type){const e=[],[t]=(0,S.E)(n.text);for(let i=0;i<t.length;i++)e.push(t.charCodeAt(i));const i={symbol:n,id:0,glyphIds:e},[{mosaicItem:s}]=await this.container.getMaterialItems([i]);return{symbol:n,mosaicItem:s}}return{symbol:n,mosaicItem:null}}async _projectAndNormalizeGeometry(e){if((0,n.Wi)(e.geometry))return(0,h.DB)(null);let t=e.geometry;if((0,g.oU)(t)){const e=t.rings;t.rings=e}else if((0,g.l9)(t)){const e=t.paths;t.paths=e}else(0,g.YX)(t)&&(t=u.Z.fromExtent(t));return(0,x._W)(t.spatialReference,this.view.spatialReference).then((()=>{const e=(0,Z.aX)(t),i=(0,x.iV)(e,t.spatialReference,this.view.spatialReference);return(0,p.pW)(i),i}))}_onTileUpdate(e){const t=(0,d.C5)(this.view.spatialReference);if(e.added&&e.added.length>0)for(const i of e.added)this._addNewTile(i,t);if(e.removed&&e.removed.length>0)for(const t of e.removed)this._removeTile(t.key)}addGraphic(e){this._abortProcessingGraphic(e.uid);const t=(0,h.yi)();this._graphicIdToAbortController.set(e.uid,t);const i={signal:t.signal};return this._addOrUpdateGraphic(e,i).then((()=>{this._graphicIdToAbortController.delete(e.uid)})).catch((t=>{if(this._graphicIdToAbortController.delete(e.uid),!(0,h.D_)(t))throw t}))}async _updateGraphic(e,t){const i=this._projectAndNormalizeGeometry(e),s=this._getSymbolResources(e,t),[r,n]=await(0,h.$6)([i,s]);this._graphicStore.addOrModify(e,n,r)}async _addOrUpdateGraphic(e,t){const i=this._projectAndNormalizeGeometry(e),s=this._getSymbolResources(e,t);try{const[t,r]=await(0,h.$6)([i,s]);this._addProjectedGraphic(e,r,t)}catch(e){if(!(0,h.D_)(e))throw e}}_addProjectedGraphic(e,t,i){this._graphicsSet.has(e)&&this._graphicStore.addOrModify(e,t,i)}_addTile(e){const t=(0,y.Ue)();this.view.featuresTilingScheme.getTileBounds(t,e);const i=new G.o(e,t,!0);return this._tiles.set(e,i),this.container.addChild(i),i}_addNewTile(e,t){const i=this._addTile(e.key),s=this._graphicStore.queryTileData(this._templateStore,e);if(t){const i=Math.round((t.valid[1]-t.valid[0])/e.resolution);for(const e of s)e.geometry&&(0,g.wp)(e.geometry)&&this._wrapPoints(e,i)}const r=e.key;this._tileUpdateSet.add(e.key),this.notifyChange("updating"),this._processGraphics(s).then((e=>{const t={type:"update",clear:!0,addOrUpdate:e,remove:[],end:!0};i.setData(t),this._tileUpdateSet.delete(r),this.notifyChange("updating")})).catch((e=>{if(this._tileUpdateSet.delete(r),this.notifyChange("updating"),!(0,h.D_)(e))throw e}))}_removeTile(e){if(!this._tiles.has(e))return;const t=this._tiles.get(e);this.container.removeChild(t),t.destroy(),this._tiles.delete(e)}_setFilterState(e,t){const i=this._displayIds.get(e),s=this._attributeStore.getHighlightFlag(e);this._attributeStore.setData(i,0,0,s|(t?b.Zd:0))}_getGraphicsData(e,t,i){const s=(0,d.C5)(this.view.spatialReference),r=this._graphicStore.getGraphicsData(e,t,i);if(s){const e=Math.round((s.valid[1]-s.valid[0])/t.resolution);for(const t of r)t.geometry&&(0,g.wp)(t.geometry)&&this._wrapPoints(t,e)}return r}_wrapPoints(e,t){const i=e.geometry;512===t?i.x<20?e.geometry={points:[[i.x,i.y],[t,0]]}:i.x>492&&(e.geometry={points:[[i.x,i.y],[-t,0]]}):i.x<-20?e.geometry={points:[[i.x,i.y],[t,0]]}:i.x>532&&(e.geometry={points:[[i.x,i.y],[-t,0]]})}async _processGraphics(e,t){if(!e||!e.length||!this._meshFactory)return null;const i=k.from(e),s=this._meshFactory;return await s.analyzeGraphics(i,await this._matcher,null,null,t),this._attributeStore.sendUpdates(),this._processAnalyzedGraphics(i)}_processAnalyzedGraphics(e){const t=this._meshFactory,i=t.createMeshData(e.getApproximateSize()),s=e.getCursor();for(;s.next();){const e=s.readGraphic();e.insertAfter=-1===e.insertAfter?-1:this._displayIds.get(e.insertAfter),e.displayId=this._displayIds.get(e.attributes[this.uid]),t.writeGraphic(i,s)}const r={};return i.encode(r,[]),I.M.decode(r)}_abortProcessingGraphic(e){this._graphicIdToAbortController.has(e)&&this._graphicIdToAbortController.get(e).abort()}_getNullSymbol(e){const t=e.geometry;return(0,g.l9)(t)?_.mW:(0,g.oU)(t)||(0,g.YX)(t)?_.kD:_.G}_flipUpdatingGraphics(){this._updatingGraphicsTimer&&clearTimeout(this._updatingGraphicsTimer),this._updatingGraphicsTimer=setTimeout((()=>{this._updatingGraphicsTimer=null,this.notifyChange("updating")}),160),this.notifyChange("updating")}};(0,s._)([(0,a.Cb)({constructOnly:!0})],oe.prototype,"requestUpdateCallback",void 0),(0,s._)([(0,a.Cb)({constructOnly:!0})],oe.prototype,"graphics",void 0),(0,s._)([(0,a.Cb)()],oe.prototype,"updating",null),(0,s._)([(0,a.Cb)()],oe.prototype,"view",void 0),(0,s._)([(0,a.Cb)()],oe.prototype,"updateRequested",void 0),oe=(0,s._)([(0,o.j)("esri.views.2d.layers.support.GraphicsView2D")],oe);const he=oe},53379:(e,t,i)=>{"use strict";i.d(t,{zX:()=>I,oD:()=>D,Il:()=>k,Zw:()=>B,Q2:()=>Z,eT:()=>T,yA:()=>G,nl:()=>A,aX:()=>q});i(95830);var s=i(59472),r=i(27780),n=i(73032),a=i(80685),o=i(6513),h=i(56885),c=i(96071),d=i(50897),l=i(91535),p=i(14286),u=i(42738),g=i(87561),m=i(27851),y=i(32651),_=i(17134),f=i(84767),x=i(36889);const b=Math.PI/180,w=(0,g.c)(),S=(0,m.c)(),v=(0,d.Ue)();function I(e,t,i,s,n,a,c){if(!s||!i.symbol)return e[0]=e[1]=e[2]=e[3]=0,t[0]=t[1]=t[2]=t[3]=0,e;const d=s;if(!(0,h.wp)(d)){(0,o.$P)(e,d);let s=t[0];0===s&&(s=H(i),t[0]=s);const r=n*s/2;return e[0]-=r,e[1]-=r,e[2]+=r,e[3]+=r,e}{const s=d.x,o=d.y;"esriTS"===i.symbol.type&&0===t[2]&&0===t[3]&&Z(t,i.symbol,i.mosaicItem),function(e,t,i,s,n,a,o,h){let c;switch(s.type){case"esriSMS":case"esriPMS":c=k(t,i,s,a,o,0);break;case"esriTS":c=B(t,i,s,n,a,0);break;case"cim":case"CIMSymbolReference":case"expanded-cim":c=D(t,i,s,a,o,0)}let d,p,u=0;for(let e=0;e<c.rings[0].length-1;e++)p=c.rings[0][e],d=(t-p[0])*(t-p[0])+(i-p[1])*(i-p[1]),u=Math.max(u,d);u=Math.sqrt(u);let g=(0,l.or)(t-u,h),m=(0,l.or)(t+u,h);if(g>m){const e=(0,r.C5)(h);if(e){const[t,i]=e.valid;g=t,m=i}}e[0]=g,e[1]=i-u,e[2]=m,e[3]=i+u}(e,s,o,i.symbol,t,n,a,c)}return e}function G(e){return"simple-marker"===e||"picture-marker"===e||"text"===e}function T(e){switch((0,s.Wg)(e.geometry).type){case"point":case"multipoint":return 0;case"polyline":return 1;case"polygon":case"extent":return 2}return 0}const M=(0,m.c)(),C=(0,m.c)(),U=(0,m.c)(),z=(0,m.c)(),F=(0,m.c)(),P=(0,m.c)(),R=(0,m.c)();function A(e,t,i,s){(0,p.s)(U,t,i);const r=e.paths;let n,a,o,h,c,d,l,u,g,m=1/0;for(let e=0;e<r.length;e++){const y=r[e];if(!(y.length<2))for(let e=1;e<y.length;e++)n=y[e-1][0],o=y[e-1][1],a=y[e][0],h=y[e][1],c=Math.min(n,a)-s,d=Math.min(o,h)-s,l=Math.max(n,a)+s,u=Math.max(o,h)+s,t<c||t>l||i<d||i>u||((0,p.s)(M,n,o),(0,p.s)(C,a,h),(0,p.d)(z,C,M),(0,p.d)(F,M,U),(0,p.a)(P,z,(0,p.g)(z,F)/(0,p.g)(z,z)),(0,p.d)(R,F,P),g=(0,p.g)(R,R),m>g&&(m=g))}return Math.sqrt(m)<=s}function k(e,t,i,s,r,n){let a,o;const h=(0,c.F2)(i.xoffset),d=(0,c.F2)(i.yoffset),l=b*i.angle,g=b*n;switch(i.type){case"esriSMS":a=o=(0,c.F2)(i.size);break;case"esriPMS":a=(0,c.F2)(i.width),o=(0,c.F2)(i.height)}r<.04&&(s=.04*s/r);const m=(0,u.i)(w);(0,u.t)(m,m,(0,p.s)(S,e,t)),(0,u.r)(m,m,g-l),(0,u.s)(m,m,(0,p.s)(S,s,-s)),(0,u.t)(m,m,(0,p.s)(S,h,-d));const y=[0,0];(0,p.t)(y,(0,p.s)(S,-.5*a,-.5*o),m);const _=[0,0];(0,p.t)(_,(0,p.s)(S,-.5*a,.5*o),m);const f=[0,0];(0,p.t)(f,(0,p.s)(S,.5*a,-.5*o),m);const x=[0,0];return(0,p.t)(x,(0,p.s)(S,.5*a,.5*o),m),{rings:[[y,f,x,_,y]]}}function D(e,t,i,s,r,n){const a=x.B$.getEnvelope(i.data);if(!a)return null;r<.04&&(s=.04*s/r);const o=(0,c.F2)(a.width),h=(0,c.F2)(a.height),d=(0,c.F2)(a.x),l=(0,c.F2)(a.y),g=0*b,m=b*n,y=(0,u.i)(w);(0,u.t)(y,y,(0,p.s)(S,e,t)),(0,u.r)(y,y,m-g),(0,u.s)(y,y,(0,p.s)(S,s,s));const _=[0,0];(0,p.t)(_,(0,p.s)(S,d,l+h),y);const f=[0,0];(0,p.t)(f,(0,p.s)(S,d,l),y);const v=[0,0];(0,p.t)(v,(0,p.s)(S,d+o,l+h),y);const I=[0,0];return(0,p.t)(I,(0,p.s)(S,d+o,l),y),{rings:[[_,v,I,f,_]]}}function B(e,t,i,s,r,n){const a=(0,c.F2)(i.xoffset),o=(0,c.F2)(i.yoffset),h=b*i.angle,d=b*n,l=(0,u.i)(w);(0,u.t)(l,l,(0,p.s)(S,e,t)),(0,u.r)(l,l,d),(0,u.s)(l,l,(0,p.s)(S,r,-r));const g=s[0]+s[2]/2,m=s[1]+s[3]/2;(0,u.t)(l,l,(0,p.s)(S,a,-o)),(0,u.t)(l,l,(0,p.s)(S,g,m)),(0,u.r)(l,l,h),(0,u.t)(l,l,(0,p.s)(S,-g,-m));const y=[0,0];(0,p.t)(y,(0,p.s)(S,s[0],s[1]),l);const _=[0,0];(0,p.t)(_,(0,p.s)(S,s[0],s[1]+s[3]),l);const f=[0,0];(0,p.t)(f,(0,p.s)(S,s[0]+s[2],s[1]),l);const x=[0,0];return(0,p.t)(x,(0,p.s)(S,s[0]+s[2],s[1]+s[3]),l),{rings:[[y,f,x,_,y]]}}function q(e){let t,i,s,n,c,d,l,p,u,g=null;if(!e)return null;if("mesh"===e.type)return e.toJSON();if(t=e.spatialReference,i=(0,r.C5)(t),!i)return e.toJSON();s=t.isWebMercator,d=s?102100:4326,n=O[d].maxX,c=O[d].minX,l=O[d].plus180Line,p=O[d].minus180Line;const m=e.toJSON();if((0,h.wp)(m))u=N(m,n,c);else if((0,h.aW)(m))m.points=m.points.map((e=>N(e,n,c))),u=m;else if((0,h.YX)(m))u=function(e,t){if(!t)return e;const i=function(e,t){const i=[],{ymin:s,ymax:r}=e,n=e.xmax-e.xmin,a=e.xmin,o=e.xmax;let h;const[c,d]=t.valid;h=X(e.xmin,t);const l=h.x,p=h.frameId;h=X(e.xmax,t);const u=h.x,g=h.frameId,m=l===u&&n>0;if(n>2*d){const e={xmin:a<o?l:u,ymin:s,xmax:d,ymax:r},t={xmin:c,ymin:s,xmax:a<o?u:l,ymax:r},n={xmin:0,ymin:s,xmax:d,ymax:r},h={xmin:c,ymin:s,xmax:0,ymax:r},m=[],y=[];W(e,n)&&m.push(p),W(e,h)&&y.push(p),W(t,n)&&m.push(g),W(t,h)&&y.push(g);for(let e=p+1;e<g;e++)m.push(e),y.push(e);i.push({extent:e,frameIds:[p]},{extent:t,frameIds:[g]},{extent:n,frameIds:m},{extent:h,frameIds:y})}else l>u||m?i.push({extent:{xmin:l,ymin:s,xmax:d,ymax:r},frameIds:[p]},{extent:{xmin:c,ymin:s,xmax:u,ymax:r},frameIds:[g]}):i.push({extent:{xmin:l,ymin:s,xmax:u,ymax:r},frameIds:[p]});return i}(e,t).map((e=>e.extent));return i.length<2?i[0]||e:i.length>2?(e.xmin=t.valid[0],e.xmax=t.valid[1],e):{rings:i.map((e=>[[e.xmin,e.ymin],[e.xmin,e.ymax],[e.xmax,e.ymax],[e.xmax,e.ymin],[e.xmin,e.ymin]]))}}(m,i);else if((0,h.oU)(m)||(0,h.l9)(m)){const e=v;(0,o.$P)(e,m);const t={xmin:e[0],ymin:e[1],xmax:e[2],ymax:e[3]},i=L(t.xmin,c)*(2*n),s=0===i?m:function(e,t){const i=function(e){return(0,h.oU)(e)?e.rings:e.paths}(e);for(const e of i)for(const i of e)i[0]+=t;return e}(m,i);t.xmin+=i,t.xmax+=i,(0,a.jQ)(t,l)&&t.xmax!==n||(0,a.jQ)(t,p)&&t.xmin!==c?g=s:u=s}else u=e.clone();return null!==g?(new j).cut(g,n):u}function H(e){switch(e.symbol.type){case"esriSFS":case"esriPFS":{const t=e.symbol.outline;return t?t.width:0}case"esriSLS":return(0,c.F2)(e.symbol.width);case"esriSMS":return(0,c.F2)(e.symbol.size);case"esriPMS":return(0,c.F2)(Math.max(e.symbol.width,e.symbol.height));case"esriTS":{const t=[0,0,0,0];Z(t,e.symbol,e.mosaicItem);const i=Math.max(Math.abs(t[0]),Math.abs(t[1]));return Math.max(t[2],t[3])+i}case"expanded-cim":{const t=x.B$.getEnvelope(e.symbol.data);return(0,c.F2)(Math.sqrt(t.width*t.width+t.height*t.height))}case"composite-symbol":{if(!e.symbol.layers.length)return 0;const t=e.symbol.layers.length-1;return H({symbol:e.symbol.layers[t],mosaicItem:null})}case"label":default:return 0}}function Z(e,t,i){if(!i||0===i.glyphMosaicItems.length)return e;const s=(0,f.E)(t.text)[1],r=i.glyphMosaicItems,n=(0,_.Nr)(r,s,{scale:(0,c.F2)(t.font.size)/24,angle:t.angle,xOffset:t.xoffset,yOffset:t.yoffset,hAlign:(0,y.kH)(t.horizontalAlignment||"center"),vAlign:(0,y.b7)(t.verticalAlignment||"baseline"),maxLineWidth:Math.max(32,Math.min(t.lineWidth||512,512)),lineHeight:30*Math.max(.25,Math.min(t.lineHeight||1,4)),decoration:t.font.decoration||"none",isCIM:!1}).bounds;return e[0]=(0,c.F2)(n.x-n.halfWidth),e[1]=(0,c.F2)(n.y-n.halfHeight),e[2]=(0,c.F2)(n.width),e[3]=(0,c.F2)(n.height),e}const O={102100:{maxX:20037508.342788905,minX:-20037508.342788905,plus180Line:{paths:[[[20037508.342788905,-20037508.342788905],[20037508.342788905,20037508.342788905]]],spatialReference:n.Z.WebMercator},minus180Line:{paths:[[[-20037508.342788905,-20037508.342788905],[-20037508.342788905,20037508.342788905]]],spatialReference:n.Z.WebMercator}},4326:{maxX:180,minX:-180,plus180Line:{paths:[[[180,-180],[180,180]]],spatialReference:n.Z.WGS84},minus180Line:{paths:[[[-180,-180],[-180,180]]],spatialReference:n.Z.WGS84}}};function L(e,t){return Math.ceil((e-t)/(2*t))}function X(e,t){const[i,s]=t.valid,r=2*s;let n,a=0;return e>s?(n=Math.ceil(Math.abs(e-s)/r),e-=n*r,a=n):e<i&&(n=Math.ceil(Math.abs(e-i)/r),e+=n*r,a=-n),{x:e,frameId:a}}function W(e,t){const{xmin:i,ymin:s,xmax:r,ymax:n}=t;return V(e,i,s)&&V(e,i,n)&&V(e,r,n)&&V(e,r,s)}function V(e,t,i){return t>=e.xmin&&t<=e.xmax&&i>=e.ymin&&i<=e.ymax}function N(e,t,i){if(Array.isArray(e)){const s=e[0];if(s>t){const i=L(s,t);e[0]=s+i*(-2*t)}else if(s<i){const t=L(s,i);e[0]=s+t*(-2*i)}}else{const s=e.x;if(s>t){const i=L(s,t);e.x+=i*(-2*t)}else if(s<i){const t=L(s,i);e.x+=t*(-2*i)}}return e}class j{cut(e,t){let i;if(e.rings)this.closed=!0,i=e.rings,this.minPts=4;else{if(!e.paths)return null;this.closed=!1,i=e.paths,this.minPts=2}const s=i.length,r=-2*t;for(let e=0;e<s;e++){const t=i[e];if(t&&t.length>=this.minPts){const e=[];for(const i of t)e.push([i[0]+r,i[1]]);i.push(e)}}return this.closed?e.rings=i:e.paths=i,e}}}}]);
//# sourceMappingURL=9334.js.map