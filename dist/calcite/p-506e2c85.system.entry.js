var __awaiter=this&&this.__awaiter||function(e,t,r,o){function n(e){return e instanceof r?e:new r((function(t){t(e)}))}return new(r||(r=Promise))((function(r,i){function a(e){try{l(o.next(e))}catch(t){i(t)}}function s(e){try{l(o["throw"](e))}catch(t){i(t)}}function l(e){e.done?r(e.value):n(e.value).then(a,s)}l((o=o.apply(e,t||[])).next())}))};var __generator=this&&this.__generator||function(e,t){var r={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},o,n,i,a;return a={next:s(0),throw:s(1),return:s(2)},typeof Symbol==="function"&&(a[Symbol.iterator]=function(){return this}),a;function s(e){return function(t){return l([e,t])}}function l(a){if(o)throw new TypeError("Generator is already executing.");while(r)try{if(o=1,n&&(i=a[0]&2?n["return"]:a[0]?n["throw"]||((i=n["return"])&&i.call(n),0):n.next)&&!(i=i.call(n,a[1])).done)return i;if(n=0,i)a=[a[0]&2,i.value];switch(a[0]){case 0:case 1:i=a;break;case 4:r.label++;return{value:a[1],done:false};case 5:r.label++;n=a[1];a=[0];continue;case 7:a=r.ops.pop();r.trys.pop();continue;default:if(!(i=r.trys,i=i.length>0&&i[i.length-1])&&(a[0]===6||a[0]===2)){r=0;continue}if(a[0]===3&&(!i||a[1]>i[0]&&a[1]<i[3])){r.label=a[1];break}if(a[0]===6&&r.label<i[1]){r.label=i[1];i=a;break}if(i&&r.label<i[2]){r.label=i[2];r.ops.push(a);break}if(i[2])r.ops.pop();r.trys.pop();continue}a=t.call(e,r)}catch(s){a=[6,s];n=0}finally{o=i=0}if(a[0]&5)throw a[1];return{value:a[0]?a[1]:void 0,done:true}}};System.register(["./p-6d15c15c.system.js","./p-0323c346.system.js","./p-2c235db8.system.js","./p-cd85029f.system.js","./p-50406a6e.system.js"],(function(e){"use strict";var t,r,o,n,i,a,s,l,c,p,f,u,d;return{setters:[function(e){t=e.r;r=e.c;o=e.h;n=e.H;i=e.g},function(e){a=e.d;s=e.u;l=e.c;c=e.C},function(e){p=e.g},function(e){f=e.g;u=e.d},function(e){d=e.C}],execute:function(){var m={container:"container",arrow:"arrow",imageContainer:"image-container",closeButton:"close-button",content:"content"};var h={close:"Close"};var b="data-calcite-popover-reference";var v="aria-controls";var y="aria-expanded";var w='@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{display:block;position:absolute;z-index:900;-webkit-transform:scale(0);transform:scale(0)}.calcite-popper-anim{position:relative;z-index:1;-webkit-transition:var(--calcite-popper-transition);transition:var(--calcite-popper-transition);visibility:hidden;-webkit-transition-property:visibility, opacity, -webkit-transform;transition-property:visibility, opacity, -webkit-transform;transition-property:transform, visibility, opacity;transition-property:transform, visibility, opacity, -webkit-transform;opacity:0;-webkit-box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.16);box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.16);border-radius:0.25rem}:host([data-popper-placement^=bottom]) .calcite-popper-anim{-webkit-transform:translateY(-5px);transform:translateY(-5px)}:host([data-popper-placement^=top]) .calcite-popper-anim{-webkit-transform:translateY(5px);transform:translateY(5px)}:host([data-popper-placement^=left]) .calcite-popper-anim{-webkit-transform:translateX(5px);transform:translateX(5px)}:host([data-popper-placement^=right]) .calcite-popper-anim{-webkit-transform:translateX(-5px);transform:translateX(-5px)}:host([data-popper-placement]) .calcite-popper-anim--active{opacity:1;visibility:visible;-webkit-transform:translate(0);transform:translate(0)}.arrow,.arrow::before{position:absolute;width:8px;height:8px;z-index:-1}.arrow::before{content:"";-webkit-box-shadow:0 4px 8px -1px rgba(0, 0, 0, 0.08), 0 2px 4px -1px rgba(0, 0, 0, 0.04);box-shadow:0 4px 8px -1px rgba(0, 0, 0, 0.08), 0 2px 4px -1px rgba(0, 0, 0, 0.04);-webkit-transform:rotate(45deg);transform:rotate(45deg);background:var(--calcite-ui-foreground-1)}:host([data-popper-placement^=top]) .arrow{bottom:-4px}:host([data-popper-placement^=bottom]) .arrow{top:-4px}:host([data-popper-placement^=left]) .arrow{right:-4px}:host([data-popper-placement^=right]) .arrow{left:-4px}:host{pointer-events:none}:host([open]){pointer-events:initial}.calcite-popper-anim{background-color:var(--calcite-ui-foreground-1);border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-3);border-radius:0.25rem}.arrow::before{outline:1px solid var(--calcite-ui-border-3)}.container{background-color:var(--calcite-ui-foreground-1);position:relative;display:-ms-flexbox;display:flex;overflow:hidden;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-ms-flex-direction:row;flex-direction:row;height:100%;color:var(--calcite-ui-text-1);border-radius:0.25rem}.content{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:nowrap;flex-wrap:nowrap;height:100%}.close-button{outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out}.close-button:focus{outline:2px solid var(--calcite-ui-brand);outline-offset:-2px;border-width:2px;border-style:solid;border-color:var(--calcite-ui-brand);border-radius:0 0.25rem 0.25rem 0}.close-button{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;padding:0.75rem;color:var(--calcite-ui-text-1);cursor:pointer;background-color:var(--calcite-ui-foreground-1);border-width:2px;border-style:solid;border-color:transparent;z-index:1}.close-button:hover{background-color:var(--calcite-ui-foreground-2)}.close-button:active{background-color:var(--calcite-ui-foreground-3)}.calcite--rtl .close-button{border-radius:0.25rem 0 0 0.25rem}::slotted(calcite-panel),::slotted(calcite-flow){height:100%}';var g=e("calcite_popover",function(){function e(e){var o=this;t(this,e);this.calcitePopoverClose=r(this,"calcitePopoverClose",7);this.calcitePopoverOpen=r(this,"calcitePopoverOpen",7);this.closeButton=false;this.disableFlip=false;this.disablePointer=false;this.offsetDistance=a;this.offsetSkidding=0;this.open=false;this.placement="auto";this.intlClose=h.close;this._referenceElement=this.getReferenceElement();this.guid="calcite-popover-"+p();this.getId=function(){return o.el.id||o.guid};this.setExpandedAttr=function(){var e=o,t=e._referenceElement,r=e.open;if(!t){return}t.setAttribute(y,r.toString())};this.addReferences=function(){var e=o._referenceElement;if(!e){return}var t=o.getId();e.setAttribute(b,t);e.setAttribute(v,t);o.setExpandedAttr()};this.removeReferences=function(){var e=o._referenceElement;if(!e){return}e.removeAttribute(b);e.removeAttribute(v);e.removeAttribute(y)};this.hide=function(){o.open=false}}e.prototype.offsetDistanceOffsetHandler=function(){this.reposition()};e.prototype.offsetSkiddingHandler=function(){this.reposition()};e.prototype.openHandler=function(e){this.reposition();this.setExpandedAttr();if(e){this.calcitePopoverOpen.emit()}else{this.calcitePopoverClose.emit()}};e.prototype.placementHandler=function(){this.reposition()};e.prototype.referenceElementHandler=function(){this.removeReferences();this._referenceElement=this.getReferenceElement();this.addReferences();this.createPopper()};e.prototype.componentDidLoad=function(){this.createPopper();this.addReferences()};e.prototype.disconnectedCallback=function(){this.removeReferences();this.destroyPopper()};e.prototype.reposition=function(){return __awaiter(this,void 0,void 0,(function(){var e,t,r,o,n;return __generator(this,(function(i){e=this,t=e.popper,r=e.el,o=e.placement;n=this.getModifiers();t?s({el:r,modifiers:n,placement:o,popper:t}):this.createPopper();return[2]}))}))};e.prototype.setFocus=function(e){return __awaiter(this,void 0,void 0,(function(){var t,r;return __generator(this,(function(o){if(e==="close-button"){(t=this.closeButtonEl)===null||t===void 0?void 0:t.focus();return[2]}(r=this.el)===null||r===void 0?void 0:r.focus();return[2]}))}))};e.prototype.toggle=function(e){if(e===void 0){e=!this.open}return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){this.open=e;return[2]}))}))};e.prototype.getReferenceElement=function(){var e=this.referenceElement;return(typeof e==="string"?document.getElementById(e):e)||null};e.prototype.getModifiers=function(){var e=this,t=e.arrowEl,r=e.flipPlacements,o=e.disableFlip,n=e.disablePointer,i=e.offsetDistance,a=e.offsetSkidding;var s={name:"flip",enabled:!o};if(r){s.options={fallbackPlacements:r}}var l={name:"arrow",enabled:!n};if(t){l.options={element:t}}var c={name:"offset",enabled:true,options:{offset:[a,i]}};return[l,s,c]};e.prototype.createPopper=function(){this.destroyPopper();var e=this,t=e.el,r=e.placement,o=e._referenceElement;var n=this.getModifiers();this.popper=l({el:t,modifiers:n,placement:r,referenceEl:o})};e.prototype.destroyPopper=function(){var e=this.popper;if(e){e.destroy()}this.popper=null};e.prototype.renderCloseButton=function(){var e;var t=this;var r=this,n=r.closeButton,i=r.intlClose;return n?o("button",{"aria-label":i,class:(e={},e[m.closeButton]=true,e),onClick:this.hide,ref:function(e){return t.closeButtonEl=e},title:i},o("calcite-icon",{icon:"x",scale:"m"})):null};e.prototype.render=function(){var e;var t=this;var r=this,i=r._referenceElement,a=r.el,s=r.label,l=r.open,p=r.disablePointer;var u=f(a)==="rtl";var h=i&&l;var b=!h;var v=!p?o("div",{class:m.arrow,ref:function(e){return t.arrowEl=e}}):null;return o(n,{"aria-hidden":b.toString(),"aria-label":s,"calcite-hydrated-hidden":b,id:this.getId(),role:"dialog"},o("div",{class:(e={},e[d.rtl]=u,e[c.animation]=true,e[c.animationActive]=h,e)},v,o("div",{class:m.container},o("div",{class:m.content},o("slot",null)),this.renderCloseButton())))};Object.defineProperty(e.prototype,"el",{get:function(){return i(this)},enumerable:false,configurable:true});Object.defineProperty(e,"watchers",{get:function(){return{offsetDistance:["offsetDistanceOffsetHandler"],offsetSkidding:["offsetSkiddingHandler"],open:["openHandler"],placement:["placementHandler"],referenceElement:["referenceElementHandler"]}},enumerable:false,configurable:true});return e}());g.style=w;var x=e("calcite_popover_manager",function(){function e(e){var r=this;t(this,e);this.selector="["+b+"]";this.getRelatedPopover=function(e){return u(e.closest(r.selector),b)}}e.prototype.render=function(){return o(n,null)};e.prototype.closeOpenPopovers=function(e){var t=e.target;var r=this,o=r.autoClose,n=r.el;var i="calcite-popover";var a=t.closest(i);var s=this.getRelatedPopover(t);if(o&&!a){Array.from(document.body.querySelectorAll(i)).filter((function(e){return e.open&&e!==s})).forEach((function(e){return e.toggle(false)}))}if(!n.contains(t)||!s){return}s.toggle()};Object.defineProperty(e.prototype,"el",{get:function(){return i(this)},enumerable:false,configurable:true});return e}())}}}));