import{r as t,c as i,h as o,H as e,g as c}from"./p-f8f51224.js";import{g as a}from"./p-e75286c4.js";import{b as r,g as n}from"./p-cd8015fa.js";const s=class{constructor(o){t(this,o),this.calciteAccordionChange=i(this,"calciteAccordionChange",7),this.appearance="default",this.iconPosition="end",this.iconType="chevron",this.scale="m",this.selectionMode="multi",this.items=[],this.sorted=!1,this.sortItems=t=>t.sort(((t,i)=>t.position-i.position)).map((t=>t.item))}componentDidLoad(){this.sorted||(this.items=this.sortItems(this.items),this.sorted=!0)}render(){return o(e,null,o("slot",null))}calciteAccordionItemKeyEvent(t){if(this.el===t.detail.parent){const i=a(t.detail.item.key),o=t.target,e=0===this.itemIndex(o),c=this.itemIndex(o)===this.items.length-1;switch(i){case"ArrowDown":c?this.focusFirstItem():this.focusNextItem(o);break;case"ArrowUp":e?this.focusLastItem():this.focusPrevItem(o);break;case"Home":this.focusFirstItem();break;case"End":this.focusLastItem()}}}registerCalciteAccordionItem(t){const i={item:t.target,parent:t.detail.parent,position:t.detail.position};this.el===i.parent&&this.items.push(i)}updateActiveItemOnChange(t){this.requestedAccordionItem=t.detail.requestedAccordionItem,this.calciteAccordionChange.emit({requestedAccordionItem:this.requestedAccordionItem})}focusFirstItem(){this.focusElement(this.items[0])}focusLastItem(){this.focusElement(this.items[this.items.length-1])}focusNextItem(t){const i=this.itemIndex(t);this.focusElement(this.items[i+1]||this.items[0])}focusPrevItem(t){const i=this.itemIndex(t);this.focusElement(this.items[i-1]||this.items[this.items.length-1])}itemIndex(t){return this.items.indexOf(t)}focusElement(t){t.focus()}get el(){return c(this)}};s.style="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host([scale=s]){--calcite-accordion-item-spacing-unit:0.25rem;--calcite-accordion-item-padding:var(--calcite-accordion-item-spacing-unit) 0.5rem;font-size:var(--calcite-font-size--2);line-height:1rem}:host([scale=m]){--calcite-accordion-item-spacing-unit:0.5rem;--calcite-accordion-item-padding:var(--calcite-accordion-item-spacing-unit) 0.75rem;font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale=l]){--calcite-accordion-item-spacing-unit:0.75rem;--calcite-accordion-item-padding:var(--calcite-accordion-item-spacing-unit) 1rem;font-size:var(--calcite-font-size-1);line-height:1.5rem}:host{display:block;position:relative;max-width:100%;border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-2);border-bottom-width:0;line-height:1.5rem;--calcite-accordion-item-background:var(--calcite-ui-foreground-1)}:host([appearance=minimal]){--calcite-accordion-item-padding:var(--calcite-accordion-item-spacing-unit) 0;border-color:transparent}:host([appearance=transparent]){border-color:transparent;--calcite-accordion-item-border:transparent;--calcite-accordion-item-background:transparent}";const l=class{constructor(o){t(this,o),this.calciteAccordionItemKeyEvent=i(this,"calciteAccordionItemKeyEvent",7),this.calciteAccordionItemSelect=i(this,"calciteAccordionItemSelect",7),this.calciteAccordionItemClose=i(this,"calciteAccordionItemClose",7),this.calciteAccordionItemRegister=i(this,"calciteAccordionItemRegister",7),this.active=!1,this.itemHeaderClickHandler=()=>this.emitRequestedItem()}connectedCallback(){this.parent=this.el.parentElement,this.selectionMode=r(this.el,"selection-mode","multi"),this.iconType=r(this.el,"icon-type","chevron"),this.iconPosition=r(this.el,"icon-position","end"),this.scale=r(this.el,"scale","m")}componentDidLoad(){this.itemPosition=this.getItemPosition(),this.calciteAccordionItemRegister.emit({parent:this.parent,position:this.itemPosition})}render(){const t=n(this.el),i=o("calcite-icon",{class:"accordion-item-icon",icon:this.icon,scale:"l"!==this.scale?"s":"m"});return o(e,{"aria-expanded":this.active.toString(),dir:t,"icon-position":this.iconPosition,tabindex:"0"},o("div",{class:"accordion-item-header",onClick:this.itemHeaderClickHandler},this.icon?i:null,o("div",{class:"accordion-item-header-text"},o("span",{class:"accordion-item-title"},this.itemTitle),this.itemSubtitle?o("span",{class:"accordion-item-subtitle"},this.itemSubtitle):null),o("calcite-icon",{class:"accordion-item-expand-icon",icon:"chevron"===this.iconType?"chevronUp":"caret"===this.iconType?"caretUp":this.active?"minus":"plus",scale:"s"})),o("div",{class:"accordion-item-content"},o("slot",null)))}keyDownHandler(t){if(t.target===this.el)switch(a(t.key)){case" ":case"Enter":this.emitRequestedItem(),t.preventDefault();break;case"ArrowUp":case"ArrowDown":case"Home":case"End":this.calciteAccordionItemKeyEvent.emit({parent:this.parent,item:t}),t.preventDefault()}}updateActiveItemOnChange(t){this.requestedAccordionItem=t.detail.requestedAccordionItem,this.determineActiveItem()}determineActiveItem(){switch(this.selectionMode){case"multi":this.el===this.requestedAccordionItem&&(this.active=!this.active);break;case"single":this.active=this.el===this.requestedAccordionItem&&!this.active;break;case"single-persist":this.active=this.el===this.requestedAccordionItem}}emitRequestedItem(){this.calciteAccordionItemSelect.emit({requestedAccordionItem:this.el})}getItemPosition(){return Array.prototype.indexOf.call(this.parent.querySelectorAll("calcite-accordion-item"),this.el)}get el(){return c(this)}};l.style="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host([icon-position=start]){--calcite-accordion-item-flex-direction:row-reverse;--calcite-accordion-item-icon-rotation:90deg;--calcite-accordion-item-active-icon-rotation:180deg;--calcite-accordion-item-icon-rotation-rtl:-90deg;--calcite-accordion-item-active-icon-rotation-rtl:-180deg;--calcite-accordion-item-icon-spacing-start:0;--calcite-accordion-item-icon-spacing-end:var(--calcite-accordion-item-spacing-unit)}:host([icon-position=end]){--calcite-accordion-item-flex-direction:row;--calcite-accordion-item-icon-rotation:-90deg;--calcite-accordion-item-active-icon-rotation:0;--calcite-accordion-item-icon-rotation-rtl:90deg;--calcite-accordion-item-active-icon-rotation-rtl:0;--calcite-accordion-item-icon-spacing-start:var(--calcite-accordion-item-spacing-unit);--calcite-accordion-item-icon-spacing-end:0}:host([icon-position=end]:not([icon-type=plus-minus])){--calcite-accordion-item-icon-rotation:0;--calcite-accordion-item-active-icon-rotation:180deg;--calcite-accordion-item-icon-rotation-rtl:0;--calcite-accordion-item-active-icon-rotation-rtl:-180deg}:host{--calcite-accordion-item-background:var(--calcite-ui-foreground-1)}:host-context([appearance=minimal]){--calcite-accordion-item-padding:var(--calcite-accordion-item-spacing-unit) 0}:host-context([appearance=transparent]){--calcite-accordion-item-border:transparent;--calcite-accordion-item-background:transparent}:host{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;text-decoration:none;outline:2px solid transparent;outline-offset:2px;position:relative;color:var(--calcite-ui-text-3);background-color:var(--calcite-accordion-item-background);--calcite-accordion-item-border:var(--calcite-ui-border-2)}:host .accordion-item-header{outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out}:host(:focus) .accordion-item-header{outline:2px solid var(--calcite-ui-brand);outline-offset:-2px}:host([active]){color:var(--calcite-ui-text-1)}:host([active]) .accordion-item-content{display:block;color:var(--calcite-ui-text-1)}:host([active]) .accordion-item-header{border-bottom-color:transparent}:host .accordion-item-header{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;cursor:pointer;-ms-flex-direction:var(--calcite-accordion-item-flex-direction);flex-direction:var(--calcite-accordion-item-flex-direction)}:host .accordion-item-icon{display:-ms-inline-flexbox;display:inline-flex;position:relative;margin:0;color:var(--calcite-ui-text-3);-webkit-transition-duration:150ms;transition-duration:150ms;-webkit-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);margin-right:var(--calcite-accordion-item-icon-spacing-start);margin-left:var(--calcite-accordion-item-icon-spacing-end)}:host([dir=rtl]) .accordion-item-icon{margin-left:var(--calcite-accordion-item-icon-spacing-start);margin-right:var(--calcite-accordion-item-icon-spacing-end)}:host .accordion-item-content,:host .accordion-item-header{padding:var(--calcite-accordion-item-padding);border-bottom:1px solid var(--calcite-accordion-item-border)}:host .accordion-item-header *{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;-webkit-transition-duration:150ms;transition-duration:150ms;-webkit-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}:host .accordion-item-content{display:none;color:var(--calcite-ui-text-3);padding-top:0;text-align:initial}:host .accordion-item-expand-icon{color:var(--calcite-ui-text-3);margin-left:var(--calcite-accordion-item-icon-spacing-start);margin-right:var(--calcite-accordion-item-icon-spacing-end);-webkit-transform:rotate(var(--calcite-accordion-item-icon-rotation));transform:rotate(var(--calcite-accordion-item-icon-rotation))}:host([dir=rtl]) .accordion-item-expand-icon{margin-left:var(--calcite-accordion-item-icon-spacing-end);margin-right:var(--calcite-accordion-item-icon-spacing-start);-webkit-transform:rotate(var(--calcite-accordion-item-icon-rotation-rtl));transform:rotate(var(--calcite-accordion-item-icon-rotation-rtl))}:host([active]) .accordion-item-expand-icon{color:var(--calcite-ui-text-1);-webkit-transform:rotate(var(--calcite-accordion-item-active-icon-rotation));transform:rotate(var(--calcite-accordion-item-active-icon-rotation))}:host([active][dir=rtl]) .accordion-item-expand-icon{-webkit-transform:rotate(var(--calcite-accordion-item-active-icon-rotation-rtl));transform:rotate(var(--calcite-accordion-item-active-icon-rotation-rtl))}:host .accordion-item-header-text{-ms-flex-direction:column;flex-direction:column;-ms-flex-positive:1;flex-grow:1;margin-top:0;margin-bottom:0;padding-top:0;padding-bottom:0;margin-right:auto;text-align:initial}:host([dir=rtl]) .accordion-item-header-text{margin-right:0;margin-left:auto}:host .accordion-item-title,:host .accordion-item-subtitle{display:-ms-flexbox;display:flex;width:100%}:host .accordion-item-title{color:var(--calcite-ui-text-2);font-weight:var(--calcite-font-weight-medium)}:host .accordion-item-subtitle{color:var(--calcite-ui-text-3);margin-top:0.25rem;line-height:1.375}:host([dir=rtl]) .accordion-item-title{margin-right:0;margin-left:auto}:host(:focus) .accordion-item-title,:host(:hover) .accordion-item-title{color:var(--calcite-ui-text-1)}:host(:focus) .accordion-item-icon,:host(:hover) .accordion-item-icon{color:var(--calcite-ui-text-1)}:host(:focus) .accordion-item-expand-icon,:host(:hover) .accordion-item-expand-icon{color:var(--calcite-ui-text-1)}:host(:focus) .accordion-item-subtitle,:host(:hover) .accordion-item-subtitle{color:var(--calcite-ui-text-2)}:host(:focus) .accordion-item-title,:host(:active) .accordion-item-title,:host([active]) .accordion-item-title{color:var(--calcite-ui-text-1)}:host(:focus) .accordion-item-icon,:host(:active) .accordion-item-icon,:host([active]) .accordion-item-icon{color:var(--calcite-ui-text-1)}:host(:focus) .accordion-item-expand-icon,:host(:active) .accordion-item-expand-icon,:host([active]) .accordion-item-expand-icon{color:var(--calcite-ui-text-1)}:host(:focus) .accordion-item-subtitle,:host(:active) .accordion-item-subtitle,:host([active]) .accordion-item-subtitle{color:var(--calcite-ui-text-2)}";export{s as calcite_accordion,l as calcite_accordion_item}