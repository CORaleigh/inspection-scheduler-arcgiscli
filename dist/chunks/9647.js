(self.webpackChunkinspection_scheduler=self.webpackChunkinspection_scheduler||[]).push([[9647],{19647:(i,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>m});var s=t(56140),r=(t(95830),t(59472)),l=(t(36544),t(68055),t(65575)),o=t(79881),a=t(87566),h=t(60538),n=(t(10923),t(57002),t(86035),t(39105)),y=t(1721),b=t(87837),d=t(56700),v=t(90921),c=t(16137),p=t(43072),u=t(78910),_=t(57407),f=t(33716);let w=class extends((0,_.h)((0,u.q)((0,f.I)((0,c.Q)((0,v.K)((0,p.R)(d.Z))))))){constructor(i){super(i),this._visibilityHandles={},this.fullExtent=void 0,this.operationalLayerType="GroupLayer",this.spatialReference=void 0,this.type="group",this._visibilityWatcher=this._visibilityWatcher.bind(this)}initialize(){this._enforceVisibility(this.visibilityMode,this.visible),this.watch("visible",this._visibleWatcher.bind(this),!0)}_writeLayers(i,e,t,s){const l=[];if(!i)return l;i.forEach((i=>{const e=(0,b.Nw)(i,s.webmap?s.webmap.getLayerJSONFromResourceInfo(i):null,s);(0,r.pC)(e)&&e.layerType&&l.push(e)})),e.layers=l}set portalItem(i){this._set("portalItem",i)}set visibilityMode(i){const e=this._get("visibilityMode")!==i;this._set("visibilityMode",i),e&&this._enforceVisibility(i,this.visible)}load(i){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Feature Service","Feature Collection","Scene Service"]},i)),(0,n.DB)(this)}loadAll(){return(0,y.GZ)(this,(i=>{i(this.layers)}))}layerAdded(i){i.visible&&"exclusive"===this.visibilityMode?this._turnOffOtherLayers(i):"inherited"===this.visibilityMode&&(i.visible=this.visible),this._visibilityHandles[i.uid]=i.watch("visible",this._visibilityWatcher,!0)}layerRemoved(i){const e=this._visibilityHandles[i.uid];e&&(e.remove(),delete this._visibilityHandles[i.uid]),this._enforceVisibility(this.visibilityMode,this.visible)}_turnOffOtherLayers(i){this.layers.forEach((e=>{e!==i&&(e.visible=!1)}))}_enforceVisibility(i,e){if(!(0,l.vw)(this).initialized)return;const t=this.layers;let s=t.find((i=>i.visible));switch(i){case"exclusive":t.length&&!s&&(s=t.getItemAt(0),s.visible=!0),this._turnOffOtherLayers(s);break;case"inherited":t.forEach((i=>{i.visible=e}))}}_visibleWatcher(i){"inherited"===this.visibilityMode&&this.layers.forEach((e=>{e.visible=i}))}_visibilityWatcher(i,e,t,s){const r=s;switch(this.visibilityMode){case"exclusive":i?this._turnOffOtherLayers(r):this._isAnyLayerVisible()||(r.visible=!0);break;case"inherited":r.visible=this.visible}}_isAnyLayerVisible(){return this.layers.some((i=>i.visible))}};(0,s._)([(0,o.Cb)()],w.prototype,"fullExtent",void 0),(0,s._)([(0,o.Cb)({json:{read:!1,write:{ignoreOrigin:!0}}})],w.prototype,"layers",void 0),(0,s._)([(0,h.c)("layers")],w.prototype,"_writeLayers",null),(0,s._)([(0,o.Cb)({type:["GroupLayer"]})],w.prototype,"operationalLayerType",void 0),(0,s._)([(0,o.Cb)({json:{origins:{"web-document":{read:!1,write:!1}}}})],w.prototype,"portalItem",null),(0,s._)([(0,o.Cb)()],w.prototype,"spatialReference",void 0),(0,s._)([(0,o.Cb)({json:{read:!1},readOnly:!0,value:"group"})],w.prototype,"type",void 0),(0,s._)([(0,o.Cb)({type:["independent","inherited","exclusive"],value:"independent",json:{write:!0,origins:{"web-map":{read:!1,write:!1}}}})],w.prototype,"visibilityMode",null),w=(0,s._)([(0,a.j)("esri.layers.GroupLayer")],w);const m=w}}]);
//# sourceMappingURL=9647.js.map