var __awaiter=this&&this.__awaiter||function(e,t,i,a){function n(e){return e instanceof i?e:new i((function(t){t(e)}))}return new(i||(i=Promise))((function(i,r){function o(e){try{c(a.next(e))}catch(e){r(e)}}function s(e){try{c(a.throw(e))}catch(e){r(e)}}function c(e){e.done?i(e.value):n(e.value).then(o,s)}c((a=a.apply(e,t||[])).next())}))},__generator=this&&this.__generator||function(e,t){var i,a,n,r,o={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return r={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function s(e){return function(t){return c([e,t])}}function c(r){if(i)throw new TypeError("Generator is already executing.");for(;o;)try{if(i=1,a&&(n=2&r[0]?a.return:r[0]?a.throw||((n=a.return)&&n.call(a),0):a.next)&&!(n=n.call(a,r[1])).done)return n;switch(a=0,n&&(r=[2&r[0],n.value]),r[0]){case 0:case 1:n=r;break;case 4:return o.label++,{value:r[1],done:!1};case 5:o.label++,a=r[1],r=[0];continue;case 7:r=o.ops.pop(),o.trys.pop();continue;default:if(!(n=o.trys,(n=n.length>0&&n[n.length-1])||6!==r[0]&&2!==r[0])){o=0;continue}if(3===r[0]&&(!n||r[1]>n[0]&&r[1]<n[3])){o.label=r[1];break}if(6===r[0]&&o.label<n[1]){o.label=n[1],n=r;break}if(n&&o.label<n[2]){o.label=n[2],o.ops.push(r);break}n[2]&&o.ops.pop(),o.trys.pop();continue}r=t.call(e,o)}catch(e){r=[6,e],a=0}finally{i=n=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}};System.register(["./p-4105a996.system.js","./p-466a0799.system.js","./p-94d2ed32.system.js","./p-65ed6f67.system.js"],(function(e){"use strict";var t,i,a,n,r,o,s,c,l,u,f;return{setters:[function(e){t=e.r,i=e.c,a=e.h,n=e.H,r=e.g},function(e){o=e.c},function(e){s=e.I},function(e){c=e.T,l=e.I,u=e.C,f=e.S}],execute:function(){e("calcite_pick_list_item",function(){function e(e){var a=this;t(this,e),this.calciteListItemChange=i(this,"calciteListItemChange",7),this.calciteListItemRemove=i(this,"calciteListItemRemove",7),this.calciteListItemPropsChange=i(this,"calciteListItemPropsChange",7),this.calciteListItemValueChange=i(this,"calciteListItemValueChange",7),this.disabled=!1,this.disableDeselect=!1,this.icon=null,this.removable=!1,this.selected=!1,this.intlRemove=c.remove,this.pickListClickHandler=function(e){a.disabled||a.disableDeselect&&a.selected||(a.shiftPressed=e.shiftKey,a.selected=!a.selected)},this.pickListKeyDownHandler=function(e){if(" "===e.key){if(e.preventDefault(),a.disableDeselect&&a.selected)return;a.selected=!a.selected}},this.removeClickHandler=function(){a.calciteListItemRemove.emit()}}return e.prototype.descriptionWatchHandler=function(){this.calciteListItemPropsChange.emit()},e.prototype.labelWatchHandler=function(){this.calciteListItemPropsChange.emit()},e.prototype.metadataWatchHandler=function(){this.calciteListItemPropsChange.emit()},e.prototype.selectedWatchHandler=function(){this.calciteListItemChange.emit({item:this.el,value:this.value,selected:this.selected,shiftPressed:this.shiftPressed}),this.shiftPressed=!1},e.prototype.valueWatchHandler=function(e,t){this.calciteListItemValueChange.emit({oldValue:t,newValue:e})},e.prototype.toggleSelected=function(e){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){return this.disabled||(this.selected="boolean"==typeof e?e:!this.selected),[2]}))}))},e.prototype.setFocus=function(){return __awaiter(this,void 0,void 0,(function(){var e;return __generator(this,(function(t){return null===(e=this.focusEl)||void 0===e||e.focus(),[2]}))}))},e.prototype.renderIcon=function(){var e,t=this.icon;return t?a("span",{class:(e={},e[u.icon]=!0,e[u.iconDot]=t===s.circle,e)},t===s.square?a("calcite-icon",{icon:l.checked,scale:"s"}):null):null},e.prototype.renderRemoveAction=function(){return this.removable?a("calcite-action",{class:u.remove,icon:l.remove,onClick:this.removeClickHandler,slot:f.actionsEnd,text:this.intlRemove}):null},e.prototype.renderActionsStart=function(){var e,t=this.el;return o(t,f.actionsStart)?a("div",{class:(e={},e[u.actions]=!0,e[u.actionsStart]=!0,e)},a("slot",{name:f.actionsStart})):null},e.prototype.renderActionsEnd=function(){var e,t=this.el,i=this.removable;return o(t,f.actionsEnd)||i?a("div",{class:(e={},e[u.actions]=!0,e[u.actionsEnd]=!0,e)},a("slot",{name:f.actionsEnd}),this.renderRemoveAction()):null},e.prototype.render=function(){var e=this,t=this.description,i=this.label;return a(n,{"aria-checked":this.selected.toString(),role:"menuitemcheckbox"},this.renderIcon(),this.renderActionsStart(),a("label",{"aria-label":i,class:u.label,onClick:this.pickListClickHandler,onKeyDown:this.pickListKeyDownHandler,ref:function(t){return e.focusEl=t},tabIndex:0},a("div",{class:u.textContainer},a("span",{class:u.title},i),t?a("span",{class:u.description},t):null)),this.renderActionsEnd())},Object.defineProperty(e.prototype,"el",{get:function(){return r(this)},enumerable:!1,configurable:!0}),Object.defineProperty(e,"watchers",{get:function(){return{description:["descriptionWatchHandler"],label:["labelWatchHandler"],metadata:["metadataWatchHandler"],selected:["selectedWatchHandler"],value:["valueWatchHandler"]}},enumerable:!1,configurable:!0}),e}()).style='@charset "UTF-8";@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:host{-webkit-box-sizing:border-box;box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size--1)}:host *{-webkit-box-sizing:border-box;box-sizing:border-box}:host{--calcite-icon-size:1rem;--calcite-spacing-quarter:0.25rem;--calcite-spacing-half:0.5rem;--calcite-spacing-three-quarters:0.75rem;--calcite-spacing:1rem;--calcite-spacing-plus-quarter:1.25rem;--calcite-spacing-plus-half:1.5rem;--calcite-spacing-double:2rem;--calcite-menu-min-width:10rem;--calcite-header-min-height:3rem;--calcite-footer-min-height:3rem}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{-ms-flex-align:stretch;align-items:stretch;display:-ms-flexbox;display:flex;margin:0 0 1px 0;color:var(--calcite-ui-text-1);-webkit-transition:background-color 150ms ease-in-out;transition:background-color 150ms ease-in-out;-webkit-animation:calcite-fade-in 150ms ease-in-out;animation:calcite-fade-in 150ms ease-in-out;-webkit-box-shadow:0 1px 0 var(--calcite-ui-border-3);box-shadow:0 1px 0 var(--calcite-ui-border-3);--calcite-icon-dot-size:16px}:host(:hover){background-color:var(--calcite-ui-foreground-2)}.icon{-ms-flex-align:center;align-items:center;color:var(--calcite-ui-brand);display:-ms-flexbox;display:flex;-ms-flex:0 0 auto;flex:0 0 auto;line-height:0;margin:0 var(--calcite-spacing-half);opacity:0}.icon-dot{width:calc(var(--calcite-icon-dot-size) / 2);margin:calc(var(--calcite-icon-dot-size) / 2)}.icon-dot:before{content:"•"}:host([selected]) .icon{-webkit-transition:opacity 150ms ease-in-out;transition:opacity 150ms ease-in-out;opacity:1}.label{background-color:transparent;display:-ms-flexbox;display:flex;-ms-flex:1 1 auto;flex:1 1 auto;padding:var(--calcite-spacing-three-quarters);-ms-flex-align:center;align-items:center;cursor:pointer;outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out}.label:focus{outline:2px solid var(--calcite-ui-brand);outline-offset:-2px}.text-container{display:-ms-flexbox;display:flex;-ms-flex-flow:column nowrap;flex-flow:column nowrap;overflow:hidden;pointer-events:none;padding:0 var(--calcite-spacing-quarter)}.title{font-size:0.75rem;line-height:1.5;word-wrap:break-word;word-break:break-word;color:var(--calcite-ui-text-1)}.description{color:var(--calcite-ui-text-3);font-family:var(--calcite-code-family);margin-top:var(--calcite-spacing-quarter);font-size:0.75rem;line-height:1.5;word-wrap:break-word;word-break:break-word}.actions{-ms-flex-align:stretch;align-items:stretch;display:-ms-flexbox;display:flex;-ms-flex:0 0 auto;flex:0 0 auto;justify-self:flex-end;margin:0}.actions--start~.label{padding-left:var(--calcite-spacing-quarter)}.calcite--rtl .actions--start~.label{padding-left:unset;padding-right:var(--calcite-spacing-quarter)}'}}}));