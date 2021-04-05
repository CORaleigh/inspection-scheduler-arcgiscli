var __awaiter=this&&this.__awaiter||function(t,e,i,n){function o(t){return t instanceof i?t:new i((function(e){e(t)}))}return new(i||(i=Promise))((function(i,a){function r(t){try{c(n.next(t))}catch(e){a(e)}}function s(t){try{c(n["throw"](t))}catch(e){a(e)}}function c(t){t.done?i(t.value):o(t.value).then(r,s)}c((n=n.apply(t,e||[])).next())}))};var __generator=this&&this.__generator||function(t,e){var i={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},n,o,a,r;return r={next:s(0),throw:s(1),return:s(2)},typeof Symbol==="function"&&(r[Symbol.iterator]=function(){return this}),r;function s(t){return function(e){return c([t,e])}}function c(r){if(n)throw new TypeError("Generator is already executing.");while(i)try{if(n=1,o&&(a=r[0]&2?o["return"]:r[0]?o["throw"]||((a=o["return"])&&a.call(o),0):o.next)&&!(a=a.call(o,r[1])).done)return a;if(o=0,a)r=[r[0]&2,a.value];switch(r[0]){case 0:case 1:a=r;break;case 4:i.label++;return{value:r[1],done:false};case 5:i.label++;o=r[1];r=[0];continue;case 7:r=i.ops.pop();i.trys.pop();continue;default:if(!(a=i.trys,a=a.length>0&&a[a.length-1])&&(r[0]===6||r[0]===2)){i=0;continue}if(r[0]===3&&(!a||r[1]>a[0]&&r[1]<a[3])){i.label=r[1];break}if(r[0]===6&&i.label<a[1]){i.label=a[1];a=r;break}if(a&&i.label<a[2]){i.label=a[2];i.ops.push(r);break}if(a[2])i.ops.pop();i.trys.pop();continue}r=e.call(t,i)}catch(s){r=[6,s];o=0}finally{n=a=0}if(r[0]&5)throw r[1];return{value:r[0]?r[1]:void 0,done:true}}};var __spreadArray=this&&this.__spreadArray||function(t,e){for(var i=0,n=e.length,o=t.length;i<n;i++,o++)t[o]=e[i];return t};System.register(["./p-6d15c15c.system.js","./p-53caa311.system.js","./p-2a9b4a25.system.js","./p-cd85029f.system.js","./p-f1259a9b.system.js","./p-0323c346.system.js","./p-2c235db8.system.js"],(function(t){"use strict";var e,i,n,o,a,r,s,c,l,p,u,m,d,f,h,b,v,x;return{setters:[function(t){e=t.r;i=t.c;n=t.h;o=t.H;a=t.g},function(t){r=t.a;s=t.S;c=t.d},function(t){l=t.i;p=t.f},function(t){u=t.n;m=t.g;d=t.b},function(t){f=t.g},function(t){h=t.u;b=t.c;v=t.C},function(t){x=t.g}],execute:function(){function g(t,e){var i=-1,n=t==null?0:t.length,o=Array(n);while(++i<n){o[i]=e(t[i],i,t)}return o}var y=1/0;var w=s?s.prototype:undefined,I=w?w.toString:undefined;function k(t){if(typeof t=="string"){return t}if(l(t)){return g(t,k)+""}if(r(t)){return I?I.call(t):""}var e=t+"";return e=="0"&&1/t==-y?"-0":e}function C(t){return t==null?"":k(t)}var D=/[\\^$.*+?()[\]{}|]/g,S=RegExp(D.source);function A(t){t=C(t);return t&&S.test(t)?t.replace(D,"\\$&"):t}var E=function(t,e){var i=A(e);var n=new RegExp(i,"ig");if(t.length===0){console.warn("No data was passed to the filter function.\n    The data argument should be an array of objects")}var o=function(t,e){var i;if((i=t)===null||i===void 0?void 0:i.constant){return true}var n=false;p(t,(function(t){if(typeof t==="function"){return}if(Array.isArray(t)||typeof t==="object"&&t!==null){if(o(t,e)){n=true}}else if(e.test(t)){n=true}}));return n};var a=t.filter((function(t){return o(t,n)}));return a};var H="CALCITE-COMBOBOX-ITEM";var _="CALCITE-COMBOBOX-ITEM-GROUP";var M=H+", "+_;var L="bottom-leading";var z=150;function T(t){var e,i;var n=(e=t.parentElement)===null||e===void 0?void 0:e.closest(M);var o=(i=n===null||n===void 0?void 0:n.parentElement)===null||i===void 0?void 0:i.closest(M);return[n,o].filter((function(t){return t}))}function F(t){var e;return((e=t.ancestors)===null||e===void 0?void 0:e.filter((function(t){return t.nodeName==="CALCITE-COMBOBOX-ITEM"})))||[]}function O(t){return u(t.querySelectorAll("calcite-combobox-item"))}function P(t){var e=u(t.querySelectorAll("calcite-combobox-item"));return e.filter((function(t){return t.selected})).length>0}function j(t){var e=T(t),i=e[0],n=e[1];if(!i){return 0}if(!n){return 1}return 2}var B="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{display:block;position:relative}:host([disabled]){pointer-events:none;-webkit-user-select:none;-ms-user-select:none;-moz-user-select:none;user-select:none;opacity:0.5}:host([scale=s]){font-size:var(--calcite-font-size--2);--calcite-combobox-item-spacing-unit-l:0.75rem;--calcite-combobox-item-spacing-unit-m:0.5rem;--calcite-combobox-item-spacing-unit-s:0.25rem;--calcite-combobox-input-height:1.25rem}:host([scale=m]){font-size:var(--calcite-font-size--1);--calcite-combobox-item-spacing-unit-l:1rem;--calcite-combobox-item-spacing-unit-m:0.75rem;--calcite-combobox-item-spacing-unit-s:0.5rem;--calcite-combobox-input-height:2rem}:host([scale=l]){font-size:var(--calcite-font-size-0);--calcite-combobox-item-spacing-unit-l:1.25rem;--calcite-combobox-item-spacing-unit-m:1rem;--calcite-combobox-item-spacing-unit-s:0.75rem;--calcite-combobox-input-height:2.5rem}.wrapper{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;background-color:var(--calcite-ui-foreground-1);border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-input);color:var(--calcite-ui-text-1);outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;padding:var(--calcite-combobox-item-spacing-unit-m) var(--calcite-combobox-item-spacing-unit-l) 0 var(--calcite-combobox-item-spacing-unit-l)}.wrapper--active{outline:2px solid var(--calcite-ui-brand);outline-offset:-2px}.wrapper--single{cursor:pointer;padding:var(--calcite-combobox-item-spacing-unit-s) var(--calcite-combobox-item-spacing-unit-m)}.input{-ms-flex-positive:1;flex-grow:1;font-family:inherit;padding:0;background-color:transparent;border-style:none;color:var(--calcite-ui-text-1);-webkit-appearance:none;-moz-appearance:none;appearance:none;margin-top:1px;font-size:inherit;height:var(--calcite-combobox-input-height);line-height:var(--calcite-combobox-input-height);min-width:120px;margin-bottom:var(--calcite-combobox-item-spacing-unit-m)}.input:focus{outline:2px solid transparent;outline-offset:2px}.input--transparent{opacity:0}.input--single{margin-bottom:0;margin-top:0;cursor:pointer;padding:0}.wrapper--active .input-single{cursor:text}.input--hidden{width:0;min-width:0;opacity:0;pointer-events:none}.input--icon{padding:0 var(--calcite-combobox-item-spacing-unit-m)}.input-wrap{display:-ms-flexbox;display:flex}.input-wrap--single{-ms-flex:1 1 auto;flex:1 1 auto}.label{padding:0;display:block;-ms-flex:1 1 auto;flex:1 1 auto;pointer-events:none;height:var(--calcite-combobox-input-height);line-height:var(--calcite-combobox-input-height)}.label--spaced{padding-top:0;padding-bottom:0;padding-left:var(--calcite-combobox-item-spacing-unit-m);padding-right:var(--calcite-combobox-item-spacing-unit-m)}.icon-end,.icon-start{cursor:pointer;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;width:var(--calcite-combobox-item-spacing-unit-l)}.popper-container{width:100%;display:block;position:absolute;z-index:900;-webkit-transform:scale(0);transform:scale(0);visibility:hidden;pointer-events:none}.popper-container .calcite-popper-anim{position:relative;z-index:1;-webkit-transition:var(--calcite-popper-transition);transition:var(--calcite-popper-transition);visibility:hidden;-webkit-transition-property:visibility, opacity, -webkit-transform;transition-property:visibility, opacity, -webkit-transform;transition-property:transform, visibility, opacity;transition-property:transform, visibility, opacity, -webkit-transform;opacity:0;-webkit-box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.16);box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.16);border-radius:0.25rem}.popper-container[data-popper-placement^=bottom] .calcite-popper-anim{-webkit-transform:translateY(-5px);transform:translateY(-5px)}.popper-container[data-popper-placement^=top] .calcite-popper-anim{-webkit-transform:translateY(5px);transform:translateY(5px)}.popper-container[data-popper-placement^=left] .calcite-popper-anim{-webkit-transform:translateX(5px);transform:translateX(5px)}.popper-container[data-popper-placement^=right] .calcite-popper-anim{-webkit-transform:translateX(-5px);transform:translateX(-5px)}.popper-container[data-popper-placement] .calcite-popper-anim--active{opacity:1;visibility:visible;-webkit-transform:translate(0);transform:translate(0)}:host([active]) .popper-container{pointer-events:initial;visibility:visible}.screen-readers-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.list-container{overflow-y:auto;max-height:100vh;background-color:var(--calcite-ui-foreground-1);width:var(--calcite-dropdown-width)}.list{display:block;margin:0;padding:0}.list--hide{height:0;overflow:hidden}.chip{margin-right:var(--calcite-combobox-item-spacing-unit-s);margin-bottom:var(--calcite-combobox-item-spacing-unit-s)}.chip--active{background-color:var(--calcite-ui-foreground-3)}.chip:last-child{margin-right:0}:host([dir=rtl]) .chip{margin-right:unset;margin-left:var(--calcite-combobox-item-spacing-unit-m)}:host([dir=rtl]) .chip:last-child{margin-left:0}.item{display:block}";var N=t("calcite_combobox",function(){function t(t){var n=this;e(this,t);this.calciteLookupChange=i(this,"calciteLookupChange",7);this.calciteComboboxFilterChange=i(this,"calciteComboboxFilterChange",7);this.calciteComboboxChipDismiss=i(this,"calciteComboboxChipDismiss",7);this.active=false;this.disabled=false;this.maxItems=0;this.selectionMode="multi";this.scale="m";this.items=[];this.groupItems=[];this.selectedItems=[];this.visibleItems=[];this.hideList=!this.active;this.activeItemIndex=-1;this.activeChipIndex=-1;this.activeDescendant="";this.text="";this.maxScrollerHeight=0;this.textInput=null;this.observer=null;this.guid=x();this.inputHeight=0;this.setMaxScrollerHeight=function(){if(n.active){n.maxScrollerHeight=n.getMaxScrollerHeight(n.getCombinedItems())}};this.calciteChipDismissHandler=function(t,e){n.active=false;var i=n.items.find((function(t){return t===e}));if(i){n.toggleSelection(i,false)}n.calciteComboboxChipDismiss.emit(t.detail)};this.setFocusClick=function(){n.setFocus()};this.setInactiveIfNotContained=function(t){var e=t.composedPath();if(!n.active||e.includes(n.el)||e.includes(n.referenceEl)){return}if(n.selectionMode==="single"){if(n.textInput){n.textInput.value=""}n.text="";n.filterItems("");n.updateActiveItemIndex(-1)}n.active=false};this.setMenuEl=function(t){n.menuEl=t};this.setListContainerEl=function(t){n.listContainerEl=t};this.setReferenceEl=function(t){n.referenceEl=t};this.inputHandler=function(t){var e=t.target.value;n.text=e;n.filterItems(e);if(e){n.activeChipIndex=-1}};this.getTextValue=function(t){return t?t.tagName===_?t.label:t.value:null};this.filterItems=c((function(t){var e=E(n.data,t);var i=e.map((function(t){return t.value}));var o=n.getCombinedItems();o.forEach((function(t){var e=!i.includes(n.getTextValue(t));t.hidden=e;var o=t.ancestors,a=o[0],r=o[1];if((a||r)&&(i.includes(n.getTextValue(a))||i.includes(n.getTextValue(r)))){t.hidden=false}if(!e){t.ancestors.forEach((function(t){return t.hidden=false}))}}));n.visibleItems=n.getVisibleItems();n.calciteComboboxFilterChange.emit({visibleItems:__spreadArray([],n.visibleItems),text:t})}),100);this.updateItems=function(){n.items=n.getItems();n.groupItems=n.getGroupItems();n.data=n.getData();n.selectedItems=n.getSelectedItems();n.visibleItems=n.getVisibleItems();n.needsIcon=n.getNeedsIcon();if(n.selectionMode==="single"&&n.selectedItems.length){n.selectedItem=n.selectedItems[0]}n.setMaxScrollerHeight()};this.comboboxFocusHandler=function(){n.active=true;n.textInput.focus()};this.comboboxBlurHandler=function(t){n.setInactiveIfNotContained(t)}}t.prototype.activeHandler=function(t,e){var i=this;clearTimeout(this.hideListTimeout);if(e&&!t){this.hideListTimeout=window.setTimeout((function(){i.hideList=true}),z)}else if(!e&&t){this.hideList=false}this.reposition();this.setMaxScrollerHeight()};t.prototype.maxItemsHandler=function(){this.setMaxScrollerHeight()};t.prototype.documentClickHandler=function(t){this.setInactiveIfNotContained(t)};t.prototype.calciteComboboxItemChangeHandler=function(t){this.toggleSelection(t.detail)};t.prototype.keydownHandler=function(t){var e=f(t.key,m(this.el));switch(e){case"Tab":this.activeChipIndex=-1;this.activeItemIndex=-1;this.active=false;break;case"ArrowLeft":this.previousChip();break;case"ArrowRight":this.nextChip();break;case"ArrowUp":t.preventDefault();this.active=true;this.shiftActiveItemIndex(-1);break;case"ArrowDown":t.preventDefault();this.active=true;this.shiftActiveItemIndex(1);break;case"Home":this.active=true;this.updateActiveItemIndex(0);break;case"End":this.active=true;this.updateActiveItemIndex(this.visibleItems.length-1);break;case"Escape":this.active=false;break;case"Enter":if(this.activeItemIndex>-1){this.toggleSelection(this.visibleItems[this.activeItemIndex])}else if(this.activeChipIndex>-1){this.removeActiveChip()}else if(this.allowCustomValues&&this.text){this.addCustomChip(this.text)}break;case"Delete":case"Backspace":if(this.activeChipIndex>-1){this.removeActiveChip()}else if(!this.text&&this.isMulti()){this.removeLastChip()}break;default:if(!this.active){this.setFocus()}break}};t.prototype.reposition=function(){return __awaiter(this,void 0,void 0,(function(){var t,e,i,n;return __generator(this,(function(o){t=this,e=t.popper,i=t.menuEl;n=this.getModifiers();e?h({el:i,modifiers:n,placement:L,popper:e}):this.createPopper();return[2]}))}))};t.prototype.setFocus=function(){return __awaiter(this,void 0,void 0,(function(){var t;return __generator(this,(function(e){this.active=true;(t=this.textInput)===null||t===void 0?void 0:t.focus();this.activeChipIndex=-1;this.activeItemIndex=-1;return[2]}))}))};t.prototype.connectedCallback=function(){{this.observer=new MutationObserver(this.updateItems)}this.createPopper()};t.prototype.componentWillLoad=function(){this.updateItems()};t.prototype.componentDidLoad=function(){var t;(t=this.observer)===null||t===void 0?void 0:t.observe(this.el,{childList:true,subtree:true})};t.prototype.componentDidRender=function(){if(this.el.offsetHeight!==this.inputHeight){this.reposition();this.inputHeight=this.el.offsetHeight}};t.prototype.disconnectedCallback=function(){var t;(t=this.observer)===null||t===void 0?void 0:t.disconnect();this.destroyPopper()};t.prototype.textHandler=function(){this.updateActiveItemIndex(-1)};t.prototype.getModifiers=function(){var t={name:"flip",enabled:true};t.options={fallbackPlacements:["top-start","top","top-end","bottom-start","bottom","bottom-end"]};return[t]};t.prototype.createPopper=function(){this.destroyPopper();var t=this,e=t.menuEl,i=t.referenceEl;var n=this.getModifiers();this.popper=b({el:e,modifiers:n,placement:L,referenceEl:i})};t.prototype.destroyPopper=function(){var t=this.popper;if(t){t.destroy()}this.popper=null};t.prototype.getMaxScrollerHeight=function(t){var e=this;var i=this.maxItems;var n=0;var o=0;t.forEach((function(t){if(n<i&&i>0){o+=e.calculateSingleItemHeight(t);n++}}));return o};t.prototype.calculateSingleItemHeight=function(t){var e=t.offsetHeight;var i=t.querySelectorAll(M);i.forEach((function(t){e-=t.offsetHeight}));return e};t.prototype.getCombinedItems=function(){return __spreadArray(__spreadArray([],this.groupItems),this.items)};t.prototype.toggleSelection=function(t,e){if(e===void 0){e=!t.selected}if(!t){return}if(this.isMulti()){t.selected=e;this.updateAncestors(t);this.selectedItems=this.getSelectedItems();this.calciteLookupChange.emit(this.selectedItems);this.resetText();this.textInput.focus();this.filterItems("")}else{this.items.forEach((function(t){return t.toggleSelected(false)}));t.toggleSelected(true);this.selectedItem=t;this.textInput.value=t.textLabel;this.active=false;this.updateActiveItemIndex(-1);this.resetText();this.filterItems("")}};t.prototype.updateAncestors=function(t){if(this.selectionMode!=="ancestors"){return}var e=F(t);var i=O(t);if(t.selected){e.forEach((function(t){t.selected=true}))}else{i.forEach((function(t){return t.selected=false}));__spreadArray([],e).forEach((function(t){if(!P(t)){t.selected=false}}))}};t.prototype.getVisibleItems=function(){return this.items.filter((function(t){return!t.hidden}))};t.prototype.getSelectedItems=function(){var t=this;return this.items.filter((function(e){return e.selected&&(t.selectionMode!=="ancestors"||!P(e))})).sort((function(e,i){var n=t.selectedItems.indexOf(e);var o=t.selectedItems.indexOf(i);if(n>-1&&o>-1){return n-o}return o-n}))};t.prototype.getData=function(){return this.items.map((function(t){return{constant:t.constant,value:t.value,label:t.textLabel,guid:t.guid}}))};t.prototype.getNeedsIcon=function(){return this.selectionMode==="single"&&this.items.some((function(t){return t.icon}))};t.prototype.resetText=function(){this.textInput.value="";this.text=""};t.prototype.getItems=function(){var t=Array.from(this.el.querySelectorAll(H));return t.filter((function(t){return!t.disabled}))};t.prototype.getGroupItems=function(){return Array.from(this.el.querySelectorAll(_))};t.prototype.addCustomChip=function(t){var e=this.items.find((function(e){return e.value===t||e.textLabel===t}));if(e){this.toggleSelection(e,true)}else{var i=document.createElement(H);i.value=t;i.textLabel=t;i.guid=x();i.selected=true;this.el.appendChild(i);this.resetText();this.setFocus();this.updateItems();this.filterItems("")}};t.prototype.removeActiveChip=function(){this.toggleSelection(this.selectedItems[this.activeChipIndex],false);this.setFocus()};t.prototype.removeLastChip=function(){this.toggleSelection(this.selectedItems[this.selectedItems.length-1],false);this.setFocus()};t.prototype.previousChip=function(){if(this.text){return}var t=this.selectedItems.length-1;var e=this.activeChipIndex;this.activeChipIndex=e===-1?t:Math.max(e-1,0);this.updateActiveItemIndex(-1);this.focusChip()};t.prototype.nextChip=function(){if(this.text||this.activeChipIndex===-1){return}var t=this.selectedItems.length-1;var e=this.activeChipIndex+1;if(e>t){this.activeChipIndex=-1;this.setFocus()}else{this.activeChipIndex=e;this.focusChip()}this.updateActiveItemIndex(-1)};t.prototype.focusChip=function(){var t;var e=(t=this.selectedItems[this.activeChipIndex])===null||t===void 0?void 0:t.guid;var i=this.referenceEl.querySelector("#chip-"+e);i===null||i===void 0?void 0:i.setFocus()};t.prototype.shiftActiveItemIndex=function(t){var e=this.visibleItems.length;var i=(this.activeItemIndex+e+t)%e;this.updateActiveItemIndex(i);var n=this.visibleItems[this.activeItemIndex];var o=this.calculateSingleItemHeight(n);var a=this.listContainerEl,r=a.offsetHeight,s=a.scrollTop;if(r+s<n.offsetTop+o){this.listContainerEl.scrollTop=n.offsetTop-r+o}else if(n.offsetTop<s){this.listContainerEl.scrollTop=n.offsetTop}};t.prototype.updateActiveItemIndex=function(t){this.activeItemIndex=t;var e=null;this.visibleItems.forEach((function(i,n){if(n===t){i.active=true;e=i.guid}else{i.active=false}}));this.activeDescendant=e;if(this.activeItemIndex>-1){this.activeChipIndex=-1;this.textInput.focus()}};t.prototype.isMulti=function(){return this.selectionMode==="multi"||this.selectionMode==="ancestors"};t.prototype.renderChips=function(){var t=this;var e=this,i=e.activeChipIndex,o=e.scale,a=e.selectionMode;return this.selectedItems.map((function(e,r){var s={chip:true,"chip--active":i===r};var c=__spreadArray([],F(e)).reverse();var l=__spreadArray(__spreadArray([],c),[e]).map((function(t){return t.textLabel}));var p=a!=="ancestors"?e.textLabel:l.join(" / ");return n("calcite-chip",{class:s,dismissLabel:"remove tag",dismissible:true,icon:e.icon,id:"chip-"+e.guid,key:e.value,onCalciteChipDismiss:function(i){return t.calciteChipDismissHandler(i,e)},scale:o,value:e.value},p)}))};t.prototype.renderInput=function(){var t=this;var e=this,i=e.active,o=e.disabled,a=e.placeholder,r=e.selectionMode,s=e.needsIcon,c=e.label;var l=r==="single";var p=!i&&l&&!!this.selectedItem;return n("span",{class:{"input-wrap":true,"input-wrap--single":l}},p&&n("span",{class:{label:true,"label--spaced":s},key:"label",onFocus:this.comboboxFocusHandler,tabindex:"0"},this.selectedItem.textLabel),n("input",{"aria-activedescendant":this.activeDescendant,"aria-autocomplete":"list","aria-controls":x,"aria-label":c,class:{input:true,"input--transparent":this.activeChipIndex>-1,"input--single":l,"input--hidden":p,"input--icon":l&&s},disabled:o,id:x+"-input",key:"input",onBlur:this.comboboxBlurHandler,onFocus:this.comboboxFocusHandler,onInput:this.inputHandler,placeholder:a,ref:function(e){return t.textInput=e},type:"text"}))};t.prototype.renderListBoxOptions=function(){return this.visibleItems.map((function(t){return n("li",{"aria-selected":(!!t.selected).toString(),id:t.guid,role:"option",tabindex:"-1"},t.textLabel||t.value)}))};t.prototype.renderPopperContainer=function(){var t;var e=this,i=e.active,o=e.maxScrollerHeight,a=e.setMenuEl,r=e.setListContainerEl,s=e.hideList;var c=(t={"list-container":true},t[v.animation]=true,t[v.animationActive]=i,t);var l={maxHeight:o>0?o+"px":""};return n("div",{"aria-hidden":"true",class:"popper-container",ref:a},n("div",{class:c,ref:r,style:l},n("ul",{class:{list:true,"list--hide":s}},n("slot",null))))};t.prototype.renderIconStart=function(){var t=this,e=t.selectionMode,i=t.needsIcon,o=t.selectedItem;var a=this.scale==="l"?"m":"s";return e==="single"&&i&&n("span",{class:"icon-start"},(o===null||o===void 0?void 0:o.icon)&&n("calcite-icon",{class:"selected-icon",icon:o===null||o===void 0?void 0:o.icon,scale:a}))};t.prototype.renderIconEnd=function(){var t=this.scale==="l"?"m":"s";return this.selectionMode==="single"&&n("span",{class:"icon-end"},n("calcite-icon",{icon:"chevron-down",scale:t}))};t.prototype.render=function(){var t=this,e=t.guid,i=t.active,a=t.el,r=t.label;var s=this.selectionMode==="single";var c=m(a);var l=e+"-label";return n(o,{active:i,dir:c},n("div",{"aria-autocomplete":"list","aria-expanded":i.toString(),"aria-haspopup":"listbox","aria-labelledby":l,"aria-owns":e,class:{wrapper:true,"wrapper--active":i,"wrapper--single":s},onClick:this.setFocusClick,ref:this.setReferenceEl,role:"combobox"},this.renderIconStart(),!s&&this.renderChips(),n("label",{class:"screen-readers-only",htmlFor:e+"-input",id:l},r),this.renderInput(),this.renderIconEnd()),n("ul",{"aria-labelledby":l,"aria-multiselectable":"true",class:"screen-readers-only",id:e,role:"listbox",tabIndex:-1},this.renderListBoxOptions()),this.renderPopperContainer())};Object.defineProperty(t.prototype,"el",{get:function(){return a(this)},enumerable:false,configurable:true});Object.defineProperty(t,"watchers",{get:function(){return{active:["activeHandler"],maxItems:["maxItemsHandler"],text:["textHandler"]}},enumerable:false,configurable:true});return t}());N.style=B;var V={icon:"icon",iconActive:"icon--active",custom:"icon--custom",dot:"icon--dot",single:"label--single",label:"label",active:"label--active",selected:"label--selected",title:"title",textContainer:"text-container"};var q='@charset "UTF-8";@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host([scale=s]){font-size:var(--calcite-font-size--2);--calcite-combobox-item-spacing-unit-l:0.75rem;--calcite-combobox-item-spacing-unit-s:0.5rem;--calcite-combobox-item-spacing-indent-1:0.5rem;--calcite-combobox-item-spacing-indent-2:1rem}:host([scale=m]){font-size:var(--calcite-font-size--1);--calcite-combobox-item-spacing-unit-l:1rem;--calcite-combobox-item-spacing-unit-s:0.75rem;--calcite-combobox-item-spacing-indent-1:0.75rem;--calcite-combobox-item-spacing-indent-2:1.5rem}:host([scale=l]){font-size:var(--calcite-font-size-0);--calcite-combobox-item-spacing-unit-l:1.25rem;--calcite-combobox-item-spacing-unit-s:1rem;--calcite-combobox-item-spacing-indent-1:1rem;--calcite-combobox-item-spacing-indent-2:2rem}:host{--calcite-combobox-item-indent-start-1:var(--calcite-combobox-item-spacing-indent-1);--calcite-combobox-item-indent-end-1:unset;--calcite-combobox-item-indent-start-2:var(--calcite-combobox-item-spacing-indent-2);--calcite-combobox-item-indent-end-2:unset}:host([dir=rtl]){--calcite-combobox-item-indent-start-1:unset;--calcite-combobox-item-indent-end-1:var(--calcite-combobox-item-spacing-indent-1);--calcite-combobox-item-indent-start-2:unset;--calcite-combobox-item-indent-end-2:var(--calcite-combobox-item-spacing-indent-2)}:host(:focus){-webkit-box-shadow:none;box-shadow:none}:host,ul{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;margin:0;padding:0;outline:2px solid transparent;outline-offset:2px}.label{display:-ms-flexbox;display:flex;-webkit-box-sizing:border-box;box-sizing:border-box;width:100%;min-width:100%;-ms-flex-align:center;align-items:center;color:var(--calcite-ui-text-3);cursor:pointer;position:relative;-webkit-transition-duration:150ms;transition-duration:150ms;-webkit-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;text-decoration:none;padding:var(--calcite-combobox-item-spacing-unit-s)}:host([disabled]) .label{cursor:default}.label--selected{color:var(--calcite-ui-text-1);font-weight:var(--calcite-font-weight-medium)}.label--active{outline:2px solid var(--calcite-ui-brand);outline-offset:-2px}.label:hover,.label:active{color:var(--calcite-ui-text-1);background-color:var(--calcite-ui-foreground-2);-webkit-box-shadow:none;box-shadow:none;text-decoration:none}.title{padding:0 var(--calcite-combobox-item-spacing-unit-s)}.icon{display:-ms-inline-flexbox;display:inline-flex;opacity:0;-webkit-transition-duration:150ms;transition-duration:150ms;-webkit-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);}.icon--indent-1{padding-left:var(--calcite-combobox-item-indent-start-1);padding-right:var(--calcite-combobox-item-indent-end-1)}.icon--indent-2{padding-left:var(--calcite-combobox-item-indent-start-2);padding-right:var(--calcite-combobox-item-indent-end-2)}.icon--custom{margin-top:-1px;color:var(--calcite-ui-text-3)}.icon--active{color:var(--calcite-ui-text-1)}.icon--dot{display:-ms-flexbox;display:flex;-ms-flex-pack:end;justify-content:flex-end;width:var(--calcite-combobox-item-spacing-unit-l)}.icon--dot:before{content:"•"}:host([dir=rtl]) .icon--dot:before{text-align:right}.label--active .icon{opacity:1}.label--selected .icon{opacity:1;color:var(--calcite-ui-brand)}:host(:hover[disabled]) .icon{opacity:1}';var R=t("calcite_combobox_item",function(){function t(t){var n=this;e(this,t);this.calciteComboboxItemChange=i(this,"calciteComboboxItemChange",7);this.disabled=false;this.selected=false;this.active=false;this.guid=x();this.isSelected=this.selected;this.itemClickHandler=function(t){t.preventDefault();if(n.disabled){return}n.isSelected=!n.isSelected;n.calciteComboboxItemChange.emit(n.el)}}t.prototype.selectedWatchHandler=function(t){this.isSelected=t};t.prototype.componentWillLoad=function(){this.ancestors=T(this.el);this.hasDefaultSlot=this.el.querySelector(":not([slot])")!==null};t.prototype.toggleSelected=function(t){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){if(this.disabled){return[2]}this.isSelected=typeof t==="boolean"?t:!this.isSelected;return[2]}))}))};t.prototype.renderIcon=function(t,e){var i,o;var a=this,r=a.icon,s=a.el,c=a.disabled,l=a.isSelected;var p=V.icon+"--indent-"+j(s);var u=t!=="l"?"s":"m";var m=e?"dot":"check";var d=c?"circle-disallowed":m;var f=e&&!r&&!c;return f?n("span",{class:(i={},i[V.icon]=true,i[V.dot]=true,i[p]=true,i)}):n("calcite-icon",{class:(o={},o[V.icon]=!r,o[V.custom]=!!r,o[V.iconActive]=r&&l,o[p]=true,o),icon:r||d,scale:u})};t.prototype.renderChildren=function(){if(!this.hasDefaultSlot){return null}return n("ul",null,n("slot",null))};t.prototype.render=function(){var t;var e=this;var i=d(this.el,"selection-mode","multi")==="single";var a=(t={},t[V.label]=true,t[V.selected]=this.isSelected,t[V.active]=this.active,t[V.single]=i,t);var r=d(this.el,"scale","m");var s=m(this.el);return n(o,{"aria-hidden":true,dir:s,disabled:this.disabled,scale:r,tabIndex:-1},n("li",{class:a,id:this.guid,onClick:this.itemClickHandler,ref:function(t){return e.comboboxItemEl=t},tabIndex:-1},this.renderIcon(r,i),n("span",{class:V.title},this.textLabel)),this.renderChildren())};Object.defineProperty(t.prototype,"el",{get:function(){return a(this)},enumerable:false,configurable:true});Object.defineProperty(t,"watchers",{get:function(){return{selected:["selectedWatchHandler"]}},enumerable:false,configurable:true});return t}());R.style=q;var X={list:"list",label:"label",title:"title"};var W="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host([scale=s]){font-size:var(--calcite-font-size--2);--calcite-combobox-item-spacing-unit-l:0.75rem;--calcite-combobox-item-spacing-unit-s:0.5rem;--calcite-combobox-item-spacing-indent-1:0.5rem;--calcite-combobox-item-spacing-indent-2:1rem}:host([scale=m]){font-size:var(--calcite-font-size--1);--calcite-combobox-item-spacing-unit-l:1rem;--calcite-combobox-item-spacing-unit-s:0.75rem;--calcite-combobox-item-spacing-indent-1:0.75rem;--calcite-combobox-item-spacing-indent-2:1.5rem}:host([scale=l]){font-size:var(--calcite-font-size-0);--calcite-combobox-item-spacing-unit-l:1.25rem;--calcite-combobox-item-spacing-unit-s:1rem;--calcite-combobox-item-spacing-indent-1:1rem;--calcite-combobox-item-spacing-indent-2:2rem}:host{--calcite-combobox-item-indent-start-1:var(--calcite-combobox-item-spacing-indent-1);--calcite-combobox-item-indent-end-1:unset;--calcite-combobox-item-indent-start-2:var(--calcite-combobox-item-spacing-indent-2);--calcite-combobox-item-indent-end-2:unset}:host([dir=rtl]){--calcite-combobox-item-indent-start-1:unset;--calcite-combobox-item-indent-end-1:var(--calcite-combobox-item-spacing-indent-1);--calcite-combobox-item-indent-start-2:unset;--calcite-combobox-item-indent-end-2:var(--calcite-combobox-item-spacing-indent-2)}:host,.list{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;margin:0;padding:0;outline:2px solid transparent;outline-offset:2px}.label{-webkit-box-sizing:border-box;box-sizing:border-box;width:100%;max-width:100%;min-width:0;color:var(--calcite-ui-text-3);display:-ms-flexbox;display:flex}.label--indent-1{padding-left:var(--calcite-combobox-item-indent-start-1);padding-right:var(--calcite-combobox-item-indent-end-1)}.label--indent-2{padding-left:var(--calcite-combobox-item-indent-start-2);padding-right:var(--calcite-combobox-item-indent-end-2)}.title{border:0 solid;display:block;-ms-flex:1 1 0%;flex:1 1 0%;border-bottom-color:var(--calcite-ui-border-3);border-bottom-width:1px;margin-bottom:-1px;color:var(--calcite-ui-text-2);font-weight:var(--calcite-font-weight-bold);word-wrap:break-word;word-break:break-word;padding:var(--calcite-combobox-item-spacing-unit-s) 0;margin-left:var(--calcite-combobox-item-spacing-unit-s);margin-right:var(--calcite-combobox-item-spacing-unit-s)}";var G=t("calcite_combobox_item_group",function(){function t(t){e(this,t);this.guid=x()}t.prototype.componentWillLoad=function(){this.ancestors=T(this.el)};t.prototype.render=function(){var t;var e=this.el;var i=d(e,"scale","m");var a=m(e);var r=X.label+"--indent-"+j(e);return n(o,{dir:a,scale:i},n("ul",{"aria-labelledby":this.guid,class:X.list,role:"group"},n("li",{class:(t={},t[X.label]=true,t[r]=true,t),id:this.guid,role:"presentation"},n("span",{class:X.title},this.label)),n("slot",null)))};Object.defineProperty(t.prototype,"el",{get:function(){return a(this)},enumerable:false,configurable:true});return t}());G.style=W}}}));