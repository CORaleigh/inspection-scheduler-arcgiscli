import{r as t,c as s,h as e,g as a}from"./p-f8f51224.js";import{I as i}from"./p-39515aa9.js";import{m as r,d as o,s as n,h as c,g as l,k as m,i as p,a as h,c as f,r as b,b as d,e as k,f as x,j as y,L as g}from"./p-56af5eea.js";import"./p-cd8015fa.js";import"./p-0ae16e31.js";import"./p-58421494.js";const w=class{constructor(e){t(this,e),this.calciteListChange=s(this,"calciteListChange",7),this.disabled=!1,this.filterEnabled=!1,this.loading=!1,this.multiple=!1,this.selectedValues=new Map,this.dataForFilter=[],this.lastSelectedItem=null,this.observer=new MutationObserver(r.bind(this)),this.setFilterEl=t=>{this.filterEl=t},this.deselectSiblingItems=o.bind(this),this.selectSiblings=n.bind(this),this.handleFilter=c.bind(this),this.getItemData=l.bind(this),this.keyDownHandler=m.bind(this)}connectedCallback(){p.call(this),h.call(this)}disconnectedCallback(){f.call(this)}calciteListItemRemoveHandler(t){b.call(this,t)}calciteListItemChangeHandler(t){d.call(this,t)}calciteListItemPropsChangeHandler(t){t.stopPropagation(),this.setUpFilter()}calciteListItemValueChangeHandler(t){k.call(this,t)}setUpItems(){x.call(this,"calcite-pick-list-item")}setUpFilter(){this.filterEnabled&&(this.dataForFilter=this.getItemData())}async getSelectedItems(){return this.selectedValues}async setFocus(t){return y.call(this,t)}getIconType(){return this.multiple?i.square:i.circle}render(){return e(g,{onKeyDown:this.keyDownHandler,props:this})}get el(){return a(this)}};w.style="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:host{-webkit-box-sizing:border-box;box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size--1)}:host *{-webkit-box-sizing:border-box;box-sizing:border-box}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{-ms-flex-align:stretch;align-items:stretch;background-color:transparent;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;position:relative;padding-bottom:0;-ms-flex-positive:1;flex-grow:1;-ms-flex-negative:0;flex-shrink:0}:host([filter-enabled]) header{background-color:var(--calcite-ui-foreground-1);display:-ms-flexbox;display:flex;-ms-flex-pack:end;justify-content:flex-end;-ms-flex-align:stretch;align-items:stretch;margin-bottom:0.25rem;-webkit-box-shadow:0 1px 0 var(--calcite-ui-border-3);box-shadow:0 1px 0 var(--calcite-ui-border-3)}:host([filter-enabled]) header.sticky{position:-webkit-sticky;position:sticky;top:0;z-index:1}calcite-filter{margin-bottom:1px}:host([loading][disabled]){min-height:2rem}";export{w as calcite_pick_list}