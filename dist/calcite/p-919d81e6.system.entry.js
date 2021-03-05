var __awaiter=this&&this.__awaiter||function(t,e,i,o){function r(t){return t instanceof i?t:new i((function(e){e(t)}))}return new(i||(i=Promise))((function(i,n){function a(t){try{c(o.next(t))}catch(t){n(t)}}function s(t){try{c(o.throw(t))}catch(t){n(t)}}function c(t){t.done?i(t.value):r(t.value).then(a,s)}c((o=o.apply(t,e||[])).next())}))},__generator=this&&this.__generator||function(t,e){var i,o,r,n,a={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return n={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(n[Symbol.iterator]=function(){return this}),n;function s(t){return function(e){return c([t,e])}}function c(n){if(i)throw new TypeError("Generator is already executing.");for(;a;)try{if(i=1,o&&(r=2&n[0]?o.return:n[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,n[1])).done)return r;switch(o=0,r&&(n=[2&n[0],r.value]),n[0]){case 0:case 1:r=n;break;case 4:return a.label++,{value:n[1],done:!1};case 5:a.label++,o=n[1],n=[0];continue;case 7:n=a.ops.pop(),a.trys.pop();continue;default:if(!(r=a.trys,(r=r.length>0&&r[r.length-1])||6!==n[0]&&2!==n[0])){a=0;continue}if(3===n[0]&&(!r||n[1]>r[0]&&n[1]<r[3])){a.label=n[1];break}if(6===n[0]&&a.label<r[1]){a.label=r[1],r=n;break}if(r&&a.label<r[2]){a.label=r[2],a.ops.push(n);break}r[2]&&a.ops.pop(),a.trys.pop();continue}n=e.call(t,a)}catch(t){n=[6,t],o=0}finally{i=r=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}},__spreadArrays=this&&this.__spreadArrays||function(){for(var t=0,e=0,i=arguments.length;e<i;e++)t+=arguments[e].length;var o=Array(t),r=0;for(e=0;e<i;e++)for(var n=arguments[e],a=0,s=n.length;a<s;a++,r++)o[r]=n[a];return o};System.register(["./p-4105a996.system.js","./p-466a0799.system.js","./p-f1259a9b.system.js","./p-9b59fbd8.system.js"],(function(t){"use strict";var e,i,o,r,n,a,s,c,l,p,d,m;return{setters:[function(t){e=t.r,i=t.c,o=t.h,r=t.H,n=t.g},function(t){a=t.g,s=t.f,c=t.b},function(t){l=t.g},function(t){p=t.C,d=t.u,m=t.c}],execute:function(){t("calcite_dropdown",function(){function t(t){var o=this;e(this,t),this.calciteDropdownSelect=i(this,"calciteDropdownSelect",7),this.calciteDropdownOpen=i(this,"calciteDropdownOpen",7),this.calciteDropdownClose=i(this,"calciteDropdownClose",7),this.active=!1,this.alignment="start",this.disableCloseOnSelect=!1,this.maxItems=0,this.scale="m",this.selectedItems=[],this.type="click",this.width="m",this.items=[],this.maxScrollerHeight=0,this.sorted=!1,this.setReferenceEl=function(t){o.referenceEl=t},this.setMenuEl=function(t){o.menuEl=t},this.openDropdown=function(t){var e=t.target;(o.triggers.includes(e)||o.triggers.some((function(t){return t.contains(e)})))&&(t.preventDefault(),t.stopPropagation(),o.openCalciteDropdown())},this.keyDownHandler=function(t){var e=t.target,i=l(t.key);if(o.triggers.includes(e)||o.triggers.some((function(t){return t.contains(e)})))if("BUTTON"!==e.nodeName&&"CALCITE-BUTTON"!==e.nodeName)switch(i){case" ":case"Enter":o.openCalciteDropdown();break;case"Escape":o.closeCalciteDropdown()}else o.active&&("Escape"===i||t.shiftKey&&"Tab"===i)&&o.closeCalciteDropdown()}}return t.prototype.activeHandler=function(){this.reposition()},t.prototype.alignmentHandler=function(){this.reposition()},t.prototype.connectedCallback=function(){this.createPopper()},t.prototype.componentWillLoad=function(){this.updateSelectedItems()},t.prototype.componentDidLoad=function(){if(this.triggers=Array.from(this.el.querySelectorAll("[slot=dropdown-trigger]")),!this.sorted){var t=this.items.sort((function(t,e){return t.position-e.position}));this.maxScrollerHeight=this.getMaxScrollerHeight(t),this.items=t.reduce((function(t,e){return __spreadArrays(t,e.items)}),[]),this.sorted=!0}},t.prototype.disconnectedCallback=function(){this.destroyPopper()},t.prototype.render=function(){var t,e=this.active,i=this.maxScrollerHeight,n=a(this.el);return o(r,{dir:n,tabIndex:this.disabled?-1:null},o("div",{class:"calcite-dropdown-trigger-container",onClick:this.openDropdown,onKeyDown:this.keyDownHandler,ref:this.setReferenceEl},o("slot",{"aria-expanded":e.toString(),"aria-haspopup":"true",name:"dropdown-trigger"})),o("div",{"aria-hidden":(!e).toString(),class:"calcite-dropdown-wrapper",ref:this.setMenuEl},o("div",{class:(t={},t["calcite-dropdown-content"]=!0,t[p.animation]=!0,t[p.animationActive]=e,t),style:{maxHeight:i>0?i+"px":""}},o("slot",null))))},t.prototype.reposition=function(){return __awaiter(this,void 0,void 0,(function(){var t,e,i,o,r;return __generator(this,(function(n){return e=(t=this).popper,i=t.menuEl,o=this.getModifiers(),r=this.getPlacement(),e?d({el:i,modifiers:o,placement:r,popper:e}):this.createPopper(),[2]}))}))},t.prototype.closeCalciteDropdownOnClick=function(t){var e=t.target;this.active&&"CALCITE-DROPDOWN-ITEM"!==e.nodeName&&"CALCITE-DROPDOWN-GROUP"!==e.nodeName&&this.closeCalciteDropdown()},t.prototype.closeCalciteDropdownOnEvent=function(){this.closeCalciteDropdown()},t.prototype.closeCalciteDropdownOnOpenEvent=function(t){t.target!==this.el&&(this.active=!1)},t.prototype.mouseEnterHandler=function(){"hover"===this.type&&this.openCalciteDropdown()},t.prototype.mouseLeaveHandler=function(){"hover"===this.type&&this.closeCalciteDropdown()},t.prototype.calciteDropdownItemKeyEvent=function(t){var e=t.detail.keyboardEvent,i=e.target,o="A"!==i.nodeName?i:i.parentNode,r=0===this.itemIndex(o),n=this.itemIndex(o)===this.items.length-1;switch(l(e.key)){case"Tab":n&&!e.shiftKey||r&&e.shiftKey?this.closeCalciteDropdown():e.shiftKey?this.focusPrevItem(o):this.focusNextItem(o);break;case"ArrowDown":this.focusNextItem(o);break;case"ArrowUp":this.focusPrevItem(o);break;case"Home":this.focusFirstItem();break;case"End":this.focusLastItem()}t.stopPropagation()},t.prototype.handleItemSelect=function(t){this.updateSelectedItems(),t.stopPropagation(),this.calciteDropdownSelect.emit(),this.disableCloseOnSelect&&"none"!==t.detail.requestedDropdownGroup.selectionMode||this.closeCalciteDropdown()},t.prototype.registerCalciteDropdownGroup=function(t){var e=t.detail,i=e.items,o=e.position,r=e.titleEl,n=e.separatorEl;this.items.push({items:i,position:o,titleEl:r,separatorEl:n}),t.stopPropagation(),this.updateSelectedItems()},t.prototype.getModifiers=function(){var t={name:"flip",enabled:!0,options:{fallbackPlacements:["top-start","top","top-end","bottom-start","bottom","bottom-end"]}};return[t]},t.prototype.getPlacement=function(){var t=this.alignment;return"center"===t?"bottom":"end"===t?"bottom-end":"bottom-start"},t.prototype.createPopper=function(){this.destroyPopper();var t=this.menuEl,e=this.referenceEl,i=this.getModifiers(),o=this.getPlacement();this.popper=m({el:t,modifiers:i,placement:o,referenceEl:e})},t.prototype.destroyPopper=function(){var t=this.popper;t&&t.destroy(),this.popper=null},t.prototype.updateSelectedItems=function(){var t=Array.from(this.el.querySelectorAll("calcite-dropdown-item"));this.selectedItems=t.filter((function(t){return t.active}))},t.prototype.getMaxScrollerHeight=function(t){var e=this.maxItems,i=0,o=0;return t.forEach((function(t){var r,n;e>0&&i<e&&(o+=(null===(r=null==t?void 0:t.titleEl)||void 0===r?void 0:r.offsetHeight)||0,o+=(null===(n=null==t?void 0:t.separatorEl)||void 0===n?void 0:n.offsetHeight)||0,t.items.forEach((function(t){i<e&&(o+=t.offsetHeight,i+=1)})))})),o},t.prototype.closeCalciteDropdown=function(){this.calciteDropdownClose.emit(),this.active=!1,s(this.triggers[0])},t.prototype.focusOnFirstActiveOrFirstItem=function(){this.getFocusableElement(this.items.find((function(t){return t.active}))||this.items[0])},t.prototype.focusFirstItem=function(){var t=this.items[0];this.getFocusableElement(t)},t.prototype.focusLastItem=function(){var t=this.items[this.items.length-1];this.getFocusableElement(t)},t.prototype.focusNextItem=function(t){var e=this.itemIndex(t),i=this.items[e+1]||this.items[0];this.getFocusableElement(i)},t.prototype.focusPrevItem=function(t){var e=this.itemIndex(t),i=this.items[e-1]||this.items[this.items.length-1];this.getFocusableElement(i)},t.prototype.itemIndex=function(t){return this.items.indexOf(t)},t.prototype.getFocusableElement=function(t){if(t){var e=t.attributes.isLink?t.shadowRoot.querySelector("a"):t;s(e)}},t.prototype.openCalciteDropdown=function(){var t=this;this.calciteDropdownOpen.emit(),this.active=!this.active;this.active?setTimeout((function(){return t.focusOnFirstActiveOrFirstItem()}),50):this.calciteDropdownClose.emit()},Object.defineProperty(t.prototype,"el",{get:function(){return n(this)},enumerable:!1,configurable:!0}),Object.defineProperty(t,"watchers",{get:function(){return{active:["activeHandler"],alignment:["alignmentHandler"]}},enumerable:!1,configurable:!0}),t}()).style="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host-context([theme=dark]){--calcite-ui-brand:#009AF2;--calcite-ui-brand-hover:#007AC2;--calcite-ui-brand-press:#00619B;--calcite-ui-background:#353535;--calcite-ui-foreground-1:#2b2b2b;--calcite-ui-foreground-2:#202020;--calcite-ui-foreground-3:#151515;--calcite-ui-text-1:#ffffff;--calcite-ui-text-2:#bfbfbf;--calcite-ui-text-3:#9f9f9f;--calcite-ui-text-inverse:#151515;--calcite-ui-text-link:#00A0FF;--calcite-ui-border-1:#4a4a4a;--calcite-ui-border-2:#404040;--calcite-ui-border-3:#353535;--calcite-ui-border-input:#757575;--calcite-ui-info:#00A0FF;--calcite-ui-success:#36DA43;--calcite-ui-warning:#FFC900;--calcite-ui-danger:#FE583E;--calcite-ui-danger-hover:#FF0015;--calcite-ui-danger-press:#D90012}:host{position:relative;display:-ms-inline-flexbox;display:inline-flex;-ms-flex-positive:1;flex-grow:1}:host([disabled]){pointer-events:none;opacity:var(--calcite-ui-opacity-disabled)}:host .calcite-dropdown-wrapper{display:block;position:absolute;z-index:999;-webkit-transform:scale(0);transform:scale(0);visibility:hidden;pointer-events:none}.calcite-dropdown-wrapper .calcite-popper-anim{position:relative;z-index:1;-webkit-transition:var(--calcite-popper-transition);transition:var(--calcite-popper-transition);visibility:hidden;-webkit-transition-property:visibility, opacity, -webkit-transform;transition-property:visibility, opacity, -webkit-transform;transition-property:transform, visibility, opacity;transition-property:transform, visibility, opacity, -webkit-transform;opacity:0;-webkit-box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.16);box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.16);border-radius:var(--calcite-border-radius)}.calcite-dropdown-wrapper[data-popper-placement^=bottom] .calcite-popper-anim{-webkit-transform:translateY(-5px);transform:translateY(-5px)}.calcite-dropdown-wrapper[data-popper-placement^=top] .calcite-popper-anim{-webkit-transform:translateY(5px);transform:translateY(5px)}.calcite-dropdown-wrapper[data-popper-placement^=left] .calcite-popper-anim{-webkit-transform:translateX(5px);transform:translateX(5px)}.calcite-dropdown-wrapper[data-popper-placement^=right] .calcite-popper-anim{-webkit-transform:translateX(-5px);transform:translateX(-5px)}.calcite-dropdown-wrapper[data-popper-placement] .calcite-popper-anim--active{opacity:1;visibility:visible;-webkit-transform:translate(0);transform:translate(0)}:host([active]) .calcite-dropdown-wrapper{pointer-events:initial;visibility:visible}:host .calcite-dropdown-content{background:var(--calcite-ui-foreground-1);max-height:90vh;overflow:hidden;overflow-y:auto;width:auto;width:var(--calcite-dropdown-width)}.calcite-dropdown-trigger-container{position:relative;width:100%}:host([width=s]){--calcite-dropdown-width:12.5em}:host([width=m]){--calcite-dropdown-width:15em}:host([width=l]){--calcite-dropdown-width:20em}:host([scale=s]){--calcite-dropdown-group-padding:0.5rem 0;--calcite-dropdown-item-padding:0.3rem 1rem 0.3rem 2.25rem}:host([scale=m]){--calcite-dropdown-group-padding:0.75rem 0;--calcite-dropdown-item-padding:0.5rem 1rem 0.5rem 2.25rem}:host([scale=l]){--calcite-dropdown-group-padding:1rem 0;--calcite-dropdown-item-padding:0.75rem 1rem 0.75rem 2.25rem}:host([dir=rtl][scale=s]){--calcite-dropdown-item-padding:0.3rem 2.25rem 0.3rem 1rem}:host([dir=rtl][scale=m]){--calcite-dropdown-item-padding:0.5rem 2.25rem 0.5rem 1rem}:host([dir=rtl][scale=l]){--calcite-dropdown-item-padding:0.75rem 2.25rem 0.75rem 1rem}";t("calcite_dropdown_group",function(){function t(t){var o=this;e(this,t),this.calciteDropdownGroupRegister=i(this,"calciteDropdownGroupRegister",7),this.calciteDropdownItemChange=i(this,"calciteDropdownItemChange",7),this.selectionMode="single",this.setDropdownTitleRef=function(t){o.titleEl=t},this.setDropdownSeparatorRef=function(t){o.separatorEl=t},this.items=[],this.separatorEl=null,this.titleEl=null,this.sortItems=function(t){return t.sort((function(t,e){return t.position-e.position})).map((function(t){return t.item}))}}return t.prototype.componentWillLoad=function(){this.groupPosition=this.getGroupPosition()},t.prototype.componentDidLoad=function(){this.items=this.sortItems(this.items),this.calciteDropdownGroupRegister.emit({items:this.items,position:this.groupPosition,group:this.el,titleEl:this.titleEl,separatorEl:this.separatorEl})},t.prototype.render=function(){var t=a(this.el),e=c(this.el,"scale","m"),i=this.groupTitle?o("span",{"aria-hidden":"true",class:"dropdown-title",ref:this.setDropdownTitleRef},this.groupTitle):null,n=this.groupPosition>0?o("div",{class:"dropdown-separator",ref:this.setDropdownSeparatorRef,role:"separator"}):null;return o(r,{dir:t,role:"menu",scale:e,title:this.groupTitle},n,i,o("slot",null))},t.prototype.registerCalciteDropdownItem=function(t){var e=t.target;"none"===this.selectionMode&&(e.active=!1),this.items.push({item:e,position:t.detail.position}),t.stopPropagation()},t.prototype.updateActiveItemOnChange=function(t){this.requestedDropdownGroup=t.detail.requestedDropdownGroup,this.requestedDropdownItem=t.detail.requestedDropdownItem,this.calciteDropdownItemChange.emit({requestedDropdownGroup:this.requestedDropdownGroup,requestedDropdownItem:this.requestedDropdownItem})},t.prototype.getGroupPosition=function(){return Array.prototype.indexOf.call(this.el.parentElement.querySelectorAll("calcite-dropdown-group"),this.el)},Object.defineProperty(t.prototype,"el",{get:function(){return n(this)},enumerable:!1,configurable:!0}),t}()).style="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host-context([theme=dark]){--calcite-ui-brand:#009AF2;--calcite-ui-brand-hover:#007AC2;--calcite-ui-brand-press:#00619B;--calcite-ui-background:#353535;--calcite-ui-foreground-1:#2b2b2b;--calcite-ui-foreground-2:#202020;--calcite-ui-foreground-3:#151515;--calcite-ui-text-1:#ffffff;--calcite-ui-text-2:#bfbfbf;--calcite-ui-text-3:#9f9f9f;--calcite-ui-text-inverse:#151515;--calcite-ui-text-link:#00A0FF;--calcite-ui-border-1:#4a4a4a;--calcite-ui-border-2:#404040;--calcite-ui-border-3:#353535;--calcite-ui-border-input:#757575;--calcite-ui-info:#00A0FF;--calcite-ui-success:#36DA43;--calcite-ui-warning:#FFC900;--calcite-ui-danger:#FE583E;--calcite-ui-danger-hover:#FF0015;--calcite-ui-danger-press:#D90012}:host([scale=s]){font-size:var(--calcite-font-size--2)}:host([scale=s]) .dropdown-title{padding-top:0.75rem;padding-bottom:0.75rem;margin-top:0;margin-left:0.75rem;margin-right:0.75rem}:host([scale=m]){font-size:var(--calcite-font-size--1)}:host([scale=m]) .dropdown-title{padding-top:1rem;padding-bottom:1rem;margin-top:0;margin-left:1rem;margin-right:1rem}:host([scale=l]){font-size:var(--calcite-font-size-1)}:host([scale=l]) .dropdown-title{padding-top:1.25rem;padding-bottom:1.25rem;margin-top:0;margin-left:1.25rem;margin-right:1.25rem}.dropdown-title{display:block;margin-bottom:-1px;border-bottom:1px solid var(--calcite-ui-border-3);color:var(--calcite-ui-text-2);font-weight:600;word-wrap:break-word;cursor:default}.dropdown-separator{display:block;height:1px;background-color:var(--calcite-ui-border-3)}";t("calcite_dropdown_item",function(){function t(t){e(this,t),this.calciteDropdownItemSelect=i(this,"calciteDropdownItemSelect",7),this.calciteDropdownItemKeyEvent=i(this,"calciteDropdownItemKeyEvent",7),this.calciteDropdownItemRegister=i(this,"calciteDropdownItemRegister",7),this.calciteDropdownCloseRequest=i(this,"calciteDropdownCloseRequest",7),this.active=!1}return t.prototype.setFocus=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){return this.el.focus(),[2]}))}))},t.prototype.connectedCallback=function(){this.selectionMode=c(this.el,"selection-mode","single"),this.parentDropdownGroupEl=this.el.closest("calcite-dropdown-group"),"none"===this.selectionMode&&(this.active=!1)},t.prototype.componentWillLoad=function(){this.itemPosition=this.getItemPosition(),this.calciteDropdownItemRegister.emit({position:this.itemPosition})},t.prototype.render=function(){var t=this,e=this.getAttributes(),i=a(this.el),n=c(this.el,"scale","m"),s="l"===n?"m":"s",l=o("calcite-icon",{class:"dropdown-item-icon-start",dir:i,flipRtl:"start"===this.iconFlipRtl||"both"===this.iconFlipRtl,icon:this.iconStart,scale:s}),p=o("span",{class:"dropdown-item-content"},o("slot",null)),d=o("calcite-icon",{class:"dropdown-item-icon-end",dir:i,flipRtl:"end"===this.iconFlipRtl||"both"===this.iconFlipRtl,icon:this.iconEnd,scale:s}),m=this.iconStart&&this.iconEnd?[l,p,d]:this.iconStart?[l,o("slot",null)]:this.iconEnd?[p,d]:p,u=this.href?o("a",Object.assign({},e,{class:"dropdown-link",ref:function(e){return t.childLink=e}}),m):m,h=this.href?null:"single"===this.selectionMode?"menuitemradio":"multi"===this.selectionMode?"menuitemcheckbox":"menuitem",f="none"!==this.selectionMode?this.active.toString():null;return o(r,{"aria-checked":f,dir:i,isLink:this.href,role:h,scale:n,"selection-mode":this.selectionMode,tabindex:"0"},"multi"===this.selectionMode?o("calcite-icon",{class:"dropdown-item-check-icon",icon:"check",scale:"s"}):null,u)},t.prototype.onClick=function(){this.emitRequestedItem()},t.prototype.keyDownHandler=function(t){switch(l(t.key)){case" ":this.emitRequestedItem(),this.href&&(t.preventDefault(),this.childLink.click());break;case"Enter":this.emitRequestedItem(),this.href&&this.childLink.click();break;case"Escape":this.calciteDropdownCloseRequest.emit();break;case"Tab":case"ArrowUp":case"ArrowDown":case"Home":case"End":this.calciteDropdownItemKeyEvent.emit({keyboardEvent:t})}t.preventDefault()},t.prototype.updateActiveItemOnChange=function(t){t.composedPath().includes(this.parentDropdownGroupEl)&&(this.requestedDropdownGroup=t.detail.requestedDropdownGroup,this.requestedDropdownItem=t.detail.requestedDropdownItem,this.determineActiveItem())},t.prototype.determineActiveItem=function(){switch(this.selectionMode){case"multi":this.el===this.requestedDropdownItem&&(this.active=!this.active);break;case"single":this.el===this.requestedDropdownItem?this.active=!0:this.requestedDropdownGroup===this.parentDropdownGroupEl&&(this.active=!1);break;case"none":this.active=!1}},t.prototype.emitRequestedItem=function(){this.calciteDropdownItemSelect.emit({requestedDropdownItem:this.el,requestedDropdownGroup:this.parentDropdownGroupEl})},t.prototype.getAttributes=function(){var t=["icon-start","icon-end","active","hasText","isLink","dir","id","theme"];return Array.from(this.el.attributes).filter((function(e){return e&&!t.includes(e.name)})).reduce((function(t,e){var i,o=e.name,r=e.value;return Object.assign(Object.assign({},t),((i={})[o]=r,i))}),{})},t.prototype.getItemPosition=function(){var t=this.el.closest("calcite-dropdown-group");return t?Array.prototype.indexOf.call(t.querySelectorAll("calcite-dropdown-item"),this.el):1},Object.defineProperty(t.prototype,"el",{get:function(){return n(this)},enumerable:!1,configurable:!0}),t}()).style='@charset "UTF-8";@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host-context([theme=dark]){--calcite-ui-brand:#009AF2;--calcite-ui-brand-hover:#007AC2;--calcite-ui-brand-press:#00619B;--calcite-ui-background:#353535;--calcite-ui-foreground-1:#2b2b2b;--calcite-ui-foreground-2:#202020;--calcite-ui-foreground-3:#151515;--calcite-ui-text-1:#ffffff;--calcite-ui-text-2:#bfbfbf;--calcite-ui-text-3:#9f9f9f;--calcite-ui-text-inverse:#151515;--calcite-ui-text-link:#00A0FF;--calcite-ui-border-1:#4a4a4a;--calcite-ui-border-2:#404040;--calcite-ui-border-3:#353535;--calcite-ui-border-input:#757575;--calcite-ui-info:#00A0FF;--calcite-ui-success:#36DA43;--calcite-ui-warning:#FFC900;--calcite-ui-danger:#FE583E;--calcite-ui-danger-hover:#FF0015;--calcite-ui-danger-press:#D90012}:host([scale=s]){font-size:var(--calcite-font-size--2);padding-right:0.75rem;padding-left:1.5rem;padding-top:0.5rem;padding-bottom:0.5rem}:host([scale=m]){font-size:var(--calcite-font-size--1);padding-right:1rem;padding-left:2rem;padding-top:0.75rem;padding-bottom:0.75rem}:host([scale=l]){font-size:var(--calcite-font-size-1);padding-right:1.25rem;padding-left:2.5rem;padding-top:1rem;padding-bottom:1rem}:host([dir=rtl][scale=s]){padding-right:1.5rem;padding-left:0.75rem}:host([dir=rtl][scale=m]){padding-right:2rem;padding-left:1rem}:host([dir=rtl][scale=l]){padding-right:2.5rem;padding-left:1.25rem}:host{display:-ms-flexbox;display:flex;-ms-flex-positive:1;flex-grow:1;-ms-flex-align:center;align-items:center;color:var(--calcite-ui-text-3);-webkit-transition:150ms ease-in-out;transition:150ms ease-in-out;cursor:pointer;text-decoration:none;outline:none;position:relative}:host:before{content:"•";position:absolute;opacity:0;color:var(--calcite-ui-border-1);-webkit-transition:150ms ease-in-out;transition:150ms ease-in-out}.dropdown-item-content{margin-right:auto}:host([dir=rtl]) .dropdown-item-content{margin-right:unset;margin-left:auto}:host,:host([islink]) a{outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out}:host(:focus),:host([islink]) a:focus{outline:2px solid var(--calcite-ui-brand);outline-offset:-2px}:host([islink]){padding:0}:host([islink]) a{display:-ms-flexbox;display:flex;-ms-flex-positive:1;flex-grow:1;-ms-flex-align:center;align-items:center;color:var(--calcite-ui-text-3);-webkit-transition:150ms ease-in-out;transition:150ms ease-in-out;cursor:pointer;text-decoration:none;outline:none;position:relative}:host([islink]) a:before{content:"•";position:absolute;opacity:0;color:var(--calcite-ui-border-1);-webkit-transition:150ms ease-in-out;transition:150ms ease-in-out}:host([scale=s]) .dropdown-link{padding-left:0.75rem;padding-right:0.75rem;padding-top:0.5rem;padding-bottom:0.5rem}:host([scale=m]) .dropdown-link{padding-left:1rem;padding-right:1rem;padding-top:0.75rem;padding-bottom:0.75rem}:host([scale=l]) .dropdown-link{padding-left:1.25rem;padding-right:1.25rem;padding-top:1rem;padding-bottom:1rem}:host(:hover),:host(:active){background-color:var(--calcite-ui-foreground-2);color:var(--calcite-ui-text-1);text-decoration:none}:host(:focus){color:var(--calcite-ui-text-1);text-decoration:none}:host(:active){background-color:var(--calcite-ui-foreground-3)}:host(:hover):before,:host(:active):before,:host(:focus):before{opacity:1}:host([dir=rtl]):before{left:unset;right:1rem}:host([active]:not([selection-mode=none])){color:var(--calcite-ui-text-1);font-weight:500}:host([active]:not([selection-mode=none])):before{opacity:1;color:var(--calcite-ui-brand)}:host([active]:not([selection-mode=none])) calcite-icon{color:var(--calcite-ui-brand)}:host([selection-mode=multi]):before,:host([selection-mode=none]):before{display:none}:host([scale=s]):before{left:0.5rem}:host([scale=m]):before{left:0.75rem}:host([scale=l]):before{left:1rem}:host([dir=rtl]):before{left:unset}:host([dir=rtl][scale=s]):before{right:0.5rem}:host([dir=rtl][scale=m]):before{right:0.75rem}:host([dir=rtl][scale=l]):before{right:1rem}:host .dropdown-item-check-icon{position:absolute;opacity:0;-webkit-transform:scale(0.9);transform:scale(0.9);-webkit-transition:150ms ease-in-out;transition:150ms ease-in-out}:host([scale=s]) .dropdown-item-check-icon{left:0.25rem}:host([scale=m]) .dropdown-item-check-icon{left:0.5rem}:host([scale=l]) .dropdown-item-check-icon{left:0.75rem}:host([dir=rtl]) .dropdown-item-check-icon{left:unset;margin-left:0}:host([dir=rtl][scale=s]) .dropdown-item-check-icon{right:0.25rem}:host([dir=rtl][scale=m]) .dropdown-item-check-icon{right:0.5rem}:host([dir=rtl][scale=l]) .dropdown-item-check-icon{right:0.75rem}:host(:hover) .dropdown-item-check-icon{color:var(--calcite-ui-border-1);opacity:1}:host([active]) .dropdown-item-check-icon{color:var(--calcite-ui-brand);opacity:1}:host([scale=s]) .dropdown-item-icon-start{margin-right:0.5rem}:host([scale=s]) .dropdown-item-icon-end{margin-left:0.5rem}:host([scale=m]) .dropdown-item-icon-start{margin-right:0.75rem}:host([scale=m]) .dropdown-item-icon-end{margin-left:0.75rem}:host([scale=l]) .dropdown-item-icon-start{margin-right:1rem}:host([scale=l]) .dropdown-item-icon-end{margin-left:1rem}:host([dir=rtl]) .dropdown-item-icon-start{margin-right:0}:host([dir=rtl]) .dropdown-item-icon-end{margin-left:0}:host([dir=rtl][scale=s]) .dropdown-item-icon-start{margin-left:0.5rem}:host([dir=rtl][scale=s]) .dropdown-item-icon-end{margin-right:0.5rem}:host([dir=rtl][scale=m]) .dropdown-item-icon-start{margin-left:0.75rem}:host([dir=rtl][scale=m]) .dropdown-item-icon-end{margin-right:0.75rem}:host([dir=rtl][scale=l]) .dropdown-item-icon-start{margin-left:1rem}:host([dir=rtl][scale=l]) .dropdown-item-icon-end{margin-right:1rem}:host([dir=rtl]) calcite-icon{margin-right:0;margin-left:1rem}'}}}));