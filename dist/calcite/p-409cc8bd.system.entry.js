var __awaiter=this&&this.__awaiter||function(t,e,n,r){function i(t){return t instanceof n?t:new n((function(e){e(t)}))}return new(n||(n=Promise))((function(n,a){function o(t){try{c(r.next(t))}catch(t){a(t)}}function s(t){try{c(r.throw(t))}catch(t){a(t)}}function c(t){t.done?n(t.value):i(t.value).then(o,s)}c((r=r.apply(t,e||[])).next())}))},__generator=this&&this.__generator||function(t,e){var n,r,i,a,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return a={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function s(t){return function(e){return c([t,e])}}function c(a){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,r&&(i=2&a[0]?r.return:a[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,a[1])).done)return i;switch(r=0,i&&(a=[2&a[0],i.value]),a[0]){case 0:case 1:i=a;break;case 4:return o.label++,{value:a[1],done:!1};case 5:o.label++,r=a[1],a=[0];continue;case 7:a=o.ops.pop(),o.trys.pop();continue;default:if(!(i=o.trys,(i=i.length>0&&i[i.length-1])||6!==a[0]&&2!==a[0])){o=0;continue}if(3===a[0]&&(!i||a[1]>i[0]&&a[1]<i[3])){o.label=a[1];break}if(6===a[0]&&o.label<i[1]){o.label=i[1],i=a;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(a);break}i[2]&&o.ops.pop(),o.trys.pop();continue}a=e.call(t,o)}catch(t){a=[6,t],r=0}finally{n=i=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}};System.register(["./p-4105a996.system.js","./p-466a0799.system.js"],(function(t){"use strict";var e,n,r,i,a,o;return{setters:[function(t){e=t.e,n=t.r,r=t.h,i=t.H,a=t.g},function(t){o=t.g}],execute:function(){var s="flip-rtl",c={},l={},u={s:16,m:24,l:32};function f(t){var n=t.icon,r=t.scale;return __awaiter(this,void 0,void 0,(function(){var t,i,a,o,s,f;return __generator(this,(function(h){switch(h.label){case 0:return t=u[r],i=function(t){var e=!isNaN(Number(t.charAt(0))),n=t.split("-");if(1===n.length)return e?"i"+t:t;return n.map((function(t,n){return 0===n?e?"i"+t.toUpperCase():t:t.charAt(0).toUpperCase()+t.slice(1)})).join("")}(n),a="F"===i.charAt(i.length-1),o=a?i.substring(0,i.length-1):i,c[s=""+o+t+(a?"F":"")]?[2,c[s]]:(l[s]||(l[s]=fetch(e("./assets/calcite-icon/"+s+".json")).then((function(t){return t.json()})).catch((function(){return console.error('"'+s+'" is not a valid calcite-ui-icon name'),""}))),[4,l[s]]);case 1:return f=h.sent(),c[s]=f,[2,f]}}))}))}t("calcite_icon",function(){function t(t){n(this,t),this.icon=null,this.flipRtl=!1,this.scale="m",this.visible=!1}return t.prototype.connectedCallback=function(){var t=this;this.waitUntilVisible((function(){t.visible=!0,t.loadIconPathData()}))},t.prototype.disconnectedCallback=function(){this.intersectionObserver&&(this.intersectionObserver.disconnect(),this.intersectionObserver=null)},t.prototype.componentWillLoad=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){return this.loadIconPathData(),[2]}))}))},t.prototype.render=function(){var t,e=this,n=e.el,a=e.flipRtl,c=e.pathData,l=e.scale,f=e.textLabel,h=o(n),p=u[l],m=!!f,b=[].concat(c||"");return r(i,{"aria-hidden":(!m).toString(),"aria-label":m?f:null,role:m?"img":null},r("svg",{class:(t={},t[s]="rtl"===h&&a,t.svg=!0,t),fill:"currentColor",height:"100%",viewBox:"0 0 "+p+" "+p,width:"100%",xmlns:"http://www.w3.org/2000/svg"},b.map((function(t){return r("path","string"==typeof t?{d:t}:{d:t.d,opacity:"opacity"in t?t.opacity:1})}))))},t.prototype.loadIconPathData=function(){return __awaiter(this,void 0,void 0,(function(){var t,e,n,r,i;return __generator(this,(function(a){switch(a.label){case 0:return e=(t=this).icon,n=t.scale,r=t.visible,e&&r?(i=this,[4,f({icon:e,scale:n})]):[2];case 1:return i.pathData=a.sent(),[2]}}))}))},t.prototype.waitUntilVisible=function(t){var e=this;"undefined"!=typeof window&&window.IntersectionObserver?(this.intersectionObserver=new IntersectionObserver((function(n){n.forEach((function(n){n.isIntersecting&&(e.intersectionObserver.disconnect(),e.intersectionObserver=null,t())}))}),{rootMargin:"50px"}),this.intersectionObserver.observe(this.el)):t()},Object.defineProperty(t,"assetsDirs",{get:function(){return["assets"]},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"el",{get:function(){return a(this)},enumerable:!1,configurable:!0}),Object.defineProperty(t,"watchers",{get:function(){return{icon:["loadIconPathData"],scale:["loadIconPathData"]}},enumerable:!1,configurable:!0}),t}()).style="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{display:-ms-inline-flexbox;display:inline-flex}:host([scale=s]){width:1rem;height:1rem;min-width:1rem;min-height:1rem}:host([scale=m]){width:1.5rem;height:1.5rem;min-width:1.5rem;min-height:1.5rem}:host([scale=l]){width:2rem;height:2rem;min-width:2rem;min-height:2rem}.flip-rtl{-webkit-transform:scaleX(-1);transform:scaleX(-1)}.svg{display:block}"}}}));