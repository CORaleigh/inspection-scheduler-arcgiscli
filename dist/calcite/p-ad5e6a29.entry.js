import{r as t,c as e,h as i,H as a,g as r}from"./p-f8f51224.js";import{h as o,g as s,b as n}from"./p-cd8015fa.js";import{g as l}from"./p-e75286c4.js";const c=class{constructor(i){t(this,i),this.calciteRadioGroupChange=e(this,"calciteRadioGroupChange",7),this.appearance="solid",this.layout="horizontal",this.scale="m",this.width="auto",this.hiddenInput=(()=>{const t=document.createElement("input");return t.type="hidden",this.el.appendChild(t),t})()}handleNameChange(t){this.hiddenInput.name=t}handleSelectedItemChange(t,e){if(t===e)return;const i=this.getItems(),a=Array.from(i).filter((e=>e===t)).pop();a?(this.selectItem(a),this.calciteRadioGroupChange.emit(a.value)):i[0]&&(i[0].tabIndex=0)}connectedCallback(){const t=this.getItems(),e=Array.from(t).filter((t=>t.checked)).pop();e?this.selectItem(e):t[0]&&(t[0].tabIndex=0);const{hiddenInput:i,name:a}=this;a&&(i.name=a),e&&(i.value=e.value)}componentDidLoad(){this.hasLoaded=!0}render(){return i(a,{role:"radiogroup",tabIndex:this.disabled?-1:null},i("slot",null))}handleLabelFocus(t){o(t.detail.labelEl,this.el)&&this.setFocus()}handleClick(t){"calcite-radio-group-item"===t.target.localName&&this.selectItem(t.target)}handleSelected(t){this.hasLoaded&&(t.stopPropagation(),t.preventDefault(),this.selectItem(t.target))}handleKeyDown(t){const e=l(t.key),{el:i,selectedItem:a}=this;if(-1===["ArrowLeft","ArrowUp","ArrowRight","ArrowDown"," "].indexOf(e))return;let r=e;"rtl"===s(i)&&("ArrowRight"===e&&(r="ArrowLeft"),"ArrowLeft"===e&&(r="ArrowRight"));const o=this.getItems();let n=-1;switch(o.forEach(((t,e)=>{t===a&&(n=e)})),r){case"ArrowLeft":case"ArrowUp":t.preventDefault();const e=o.item(n<1?o.length-1:n-1);return void this.selectItem(e);case"ArrowRight":case"ArrowDown":t.preventDefault();const i=-1===n?o.item(1):o.item(n+1)||o.item(0);return void this.selectItem(i);case" ":return t.preventDefault(),void this.selectItem(t.target);default:return}}async setFocus(){var t;null===(t=this.selectedItem||this.getItems()[0])||void 0===t||t.focus()}getItems(){return this.el.querySelectorAll("calcite-radio-group-item")}selectItem(t){if(t===this.selectedItem)return;const e=this.getItems();let i=null;e.forEach((e=>{const a=e.value===t.value;(a&&!e.checked||!a&&e.checked)&&(e.checked=a),e.tabIndex=a?0:-1,a&&(i=e)})),this.selectedItem=i,this.syncWithInputProxy(i),i&&i.focus()}syncWithInputProxy(t){this.hiddenInput.value=t?t.value:""}get el(){return r(this)}static get watchers(){return{name:["handleNameChange"],selectedItem:["handleSelectedItemChange"]}}};c.style="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host([scale=s]){min-height:1.5rem}:host([scale=m]){min-height:2rem}:host([scale=l]){min-height:3rem}:host{display:-ms-flexbox;display:flex;background-color:var(--calcite-ui-foreground-1);width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;outline:1px solid var(--calcite-ui-border-input);outline-offset:-1px}:host([layout=vertical]){-ms-flex-direction:column;flex-direction:column;-ms-flex-align:start;align-items:flex-start;-ms-flex-item-align:start;align-self:flex-start}:host([width=full]){width:100%;min-width:-webkit-fit-content;min-width:-moz-fit-content;min-width:fit-content}:host([width=full]) ::slotted(calcite-radio-group-item){-ms-flex:1 1 auto;flex:1 1 auto}:host([width=full][layout=vertical]) ::slotted(calcite-radio-group-item){-ms-flex-pack:start;justify-content:flex-start}::slotted(calcite-radio-group-item[checked]),::slotted(calcite-radio-group-item:focus){z-index:0}:host([disabled]){opacity:0.5;pointer-events:none}";const h=class{constructor(i){t(this,i),this.calciteRadioGroupItemChange=e(this,"calciteRadioGroupItemChange",7),this.checked=!1,this.iconPosition="start",this.mutationObserver=this.getMutationObserver()}handleCheckedChange(){this.calciteRadioGroupItemChange.emit(),this.syncToExternalInput()}connectedCallback(){const t=this.el.querySelector('input[slot="input"]');t&&(this.value=t.value,this.checked=t.checked,this.mutationObserver.observe(t,{attributes:!0})),this.inputProxy=t}disconnectedCallback(){this.mutationObserver.disconnect()}componentWillLoad(){const t=this.el.querySelector("label");this.useFallback=!t||""===t.textContent}render(){const{checked:t,useFallback:e,value:r}=this,o=s(this.el),l=n(this.el,"scale","m"),c=n(this.el,"appearance","solid"),h=n(this.el,"layout","horizontal"),d=i("calcite-icon",{class:"radio-group-item-icon",dir:o,flipRtl:this.iconFlipRtl,icon:this.icon,scale:"s"});return i(a,{appearance:c,"aria-checked":t.toString(),layout:h,role:"radio",scale:l},i("label",null,this.icon&&"start"===this.iconPosition?d:null,i("slot",null,e?r:""),i("slot",{name:"input"}),this.icon&&"end"===this.iconPosition?d:null))}getMutationObserver(){return new MutationObserver((()=>this.syncFromExternalInput()))}syncFromExternalInput(){this.inputProxy&&(this.value=this.inputProxy.value,this.checked=this.inputProxy.checked)}syncToExternalInput(){this.inputProxy&&(this.inputProxy.value=this.value,this.checked?this.inputProxy.setAttribute("checked",""):this.inputProxy.removeAttribute("checked"))}get el(){return r(this)}static get watchers(){return{checked:["handleCheckedChange"]}}};h.style="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{display:-ms-flexbox;display:flex;-ms-flex-item-align:stretch;align-self:stretch;cursor:pointer;-webkit-transition:background-color 0.1s ease-in-out, border-color 0.1s ease-in-out;transition:background-color 0.1s ease-in-out, border-color 0.1s ease-in-out}:host label{display:-ms-flexbox;display:flex;-ms-flex:1 1 0%;flex:1 1 0%;color:var(--calcite-ui-text-3);-webkit-box-sizing:border-box;box-sizing:border-box;pointer-events:none;-ms-flex-align:center;align-items:center;-webkit-transition:background-color 0.1s ease-in-out, border-color 0.1s ease-in-out;transition:background-color 0.1s ease-in-out, border-color 0.1s ease-in-out;margin:2px}:host([layout=horizontal]) label{-ms-flex-pack:center;justify-content:center}:host{outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out}:host(:focus){outline:2px solid var(--calcite-ui-brand);outline-offset:-2px;outline-offset:-1px}:host([scale=s]) label{font-size:var(--calcite-font-size--2);line-height:1rem;padding-left:0.5rem;padding-right:0.5rem;padding-top:0.125rem;padding-bottom:0.125rem}:host([scale=m]) label{font-size:var(--calcite-font-size--1);line-height:1rem;padding-left:0.75rem;padding-right:0.75rem;padding-top:0.375rem;padding-bottom:0.375rem}:host([scale=l]) label{font-size:var(--calcite-font-size-1);line-height:1.5rem;padding-left:1rem;padding-right:1rem;padding-top:0.625rem;padding-bottom:0.625rem}:host(:hover) label{background-color:var(--calcite-ui-foreground-2);color:var(--calcite-ui-text-1)}:host(:active) label{background-color:var(--calcite-ui-foreground-3)}:host([checked]) label{background-color:var(--calcite-ui-brand);border-color:var(--calcite-ui-brand);cursor:default;color:var(--calcite-ui-background)}:host([appearance=outline][checked]) label{background-color:var(--calcite-ui-foreground-1);border-color:var(--calcite-ui-brand);-webkit-box-shadow:inset 0 0 0 1px var(--calcite-ui-brand);box-shadow:inset 0 0 0 1px var(--calcite-ui-brand);color:var(--calcite-ui-brand)}::slotted(input){display:none}.radio-group-item-icon{display:-ms-inline-flexbox;display:inline-flex;position:relative;margin:0;-webkit-transition-property:all;transition-property:all;-webkit-transition-duration:150ms;transition-duration:150ms;-webkit-transition-timing-function:ease-in-out;transition-timing-function:ease-in-out;-webkit-transition-delay:0s;transition-delay:0s;line-height:inherit}:host([icon-position=start]) .radio-group-item-icon{margin-right:0.5rem}:host([icon-position=start][dir=rtl]) .radio-group-item-icon{margin-right:0;margin-left:0.5rem}:host([icon-position=end]) .radio-group-item-icon{margin-left:0.5rem}:host([icon-position=end][dir=rtl]) .radio-group-item-icon{margin-left:0;margin-right:0.5rem}";export{c as calcite_radio_group,h as calcite_radio_group_item}