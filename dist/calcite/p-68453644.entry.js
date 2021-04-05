import{r as t,c as e,h as s,g as i}from"./p-f8f51224.js";import{S as a}from"./p-b5f138bd.js";import{m as r,d as o,s as n,h as l,g as c,k as h,i as m,a as p,c as f,r as d,b,e as u,f as x,j as k,L as y}from"./p-56af5eea.js";import{g as w}from"./p-0ae16e31.js";import"./p-cd8015fa.js";import"./p-58421494.js";import"./p-39515aa9.js";var g;!function(t){t.grip="grip"}(g||(g={}));const D=class{constructor(s){t(this,s),this.calciteListChange=e(this,"calciteListChange",7),this.calciteListOrderChange=e(this,"calciteListOrderChange",7),this.disabled=!1,this.dragEnabled=!1,this.filterEnabled=!1,this.loading=!1,this.multiple=!1,this.selectedValues=new Map,this.dataForFilter=[],this.lastSelectedItem=null,this.observer=new MutationObserver(r.bind(this)),this.setFilterEl=t=>{this.filterEl=t},this.deselectSiblingItems=o.bind(this),this.selectSiblings=n.bind(this),this.handleFilter=l.bind(this),this.getItemData=c.bind(this),this.keyDownHandler=t=>{const e=t.composedPath().find((t=>{var e;return void 0!==(null===(e=t.dataset)||void 0===e?void 0:e.jsHandle)})),s=t.composedPath().find((t=>{var e;return"calcite-value-list-item"===(null===(e=t.tagName)||void 0===e?void 0:e.toLowerCase())}));if(!e||!s.handleActivated)return void h.call(this,t);if("ArrowUp"!==t.key&&"ArrowDown"!==t.key)return;t.preventDefault();const{el:i,items:a}=this,r="ArrowDown"===t.key?1:-1,o=a.indexOf(s),n=w(o+r,a.length);if(n===a.length-1)i.appendChild(s);else{const t=i.children[n];i.insertBefore(s,t===s.nextElementSibling?t.nextElementSibling:t)}requestAnimationFrame((()=>e.focus())),s.handleActivated=!0}}connectedCallback(){m.call(this),p.call(this)}componentDidLoad(){this.setUpDragAndDrop()}disconnectedCallback(){f.call(this),this.cleanUpDragAndDrop()}calciteListItemRemoveHandler(t){d.call(this,t)}calciteListItemChangeHandler(t){b.call(this,t)}calciteListItemPropsChangeHandler(t){t.stopPropagation(),this.setUpFilter()}calciteListItemValueChangeHandler(t){u.call(this,t)}setUpItems(){x.call(this,"calcite-value-list-item")}setUpFilter(){this.filterEnabled&&(this.dataForFilter=this.getItemData())}setUpDragAndDrop(){this.dragEnabled&&(this.sortable=a.create(this.el,{handle:".handle",draggable:"calcite-value-list-item",group:this.group,onSort:()=>{this.items=Array.from(this.el.querySelectorAll("calcite-value-list-item"));const t=this.items.map((t=>t.value));this.calciteListOrderChange.emit(t)}}))}cleanUpDragAndDrop(){this.dragEnabled&&this.sortable.destroy()}async getSelectedItems(){return this.selectedValues}async setFocus(t){return k.call(this,t)}getIconType(){let t=null;return this.dragEnabled&&(t=g.grip),t}render(){return s(y,{onKeyDown:this.keyDownHandler,props:this})}get el(){return i(this)}};D.style="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:host{-webkit-box-sizing:border-box;box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size--1)}:host *{-webkit-box-sizing:border-box;box-sizing:border-box}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{-ms-flex-align:stretch;align-items:stretch;background-color:transparent;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;position:relative;-ms-flex-negative:0;flex-shrink:0;-ms-flex-positive:0;flex-grow:0}calcite-value-list-item:last-of-type{-webkit-box-shadow:none;box-shadow:none}:host([filter-enabled]) header{background-color:var(--calcite-ui-foreground-1);display:-ms-flexbox;display:flex;-ms-flex-pack:end;justify-content:flex-end;-ms-flex-align:center;align-items:center;margin-bottom:0.25rem;-webkit-box-shadow:0 1px 0 var(--calcite-ui-border-3);box-shadow:0 1px 0 var(--calcite-ui-border-3)}:host([filter-enabled]) header.sticky{position:-webkit-sticky;position:sticky;top:0;z-index:10}calcite-filter{margin-bottom:1px}";export{D as calcite_value_list}