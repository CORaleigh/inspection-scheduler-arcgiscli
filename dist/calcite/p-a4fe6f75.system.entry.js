System.register(["./p-6d15c15c.system.js","./p-cd85029f.system.js"],(function(e){"use strict";var t,a,l,c,i,s,r;return{setters:[function(e){t=e.r;a=e.c;l=e.h;c=e.H;i=e.g},function(e){s=e.a;r=e.g}],execute:function(){var n="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}.sc-calcite-label:root{--calcite-popper-transition:150ms ease-in-out}[hidden].sc-calcite-label-h{display:none}[alignment=start].sc-calcite-label-h,[alignment=end][dir=rtl].sc-calcite-label-h{text-align:left}[alignment=end].sc-calcite-label-h,[alignment=start][dir=rtl].sc-calcite-label-h{text-align:right}[alignment=center].sc-calcite-label-h{text-align:center}[scale=s].sc-calcite-label-h label.sc-calcite-label{font-size:var(--calcite-font-size--2);line-height:1rem;margin-bottom:0.5rem}[scale=m].sc-calcite-label-h label.sc-calcite-label{font-size:var(--calcite-font-size--1);line-height:1rem;margin-bottom:0.75rem}[scale=l].sc-calcite-label-h label.sc-calcite-label{font-size:var(--calcite-font-size-1);line-height:1.5rem;margin-bottom:1rem}.sc-calcite-label-h label.sc-calcite-label{cursor:pointer;width:100%;margin-top:0;margin-right:0;margin-left:0;line-height:1.375}[layout=default].sc-calcite-label-h label.sc-calcite-label{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;grid-gap:0.25rem;gap:0.25rem}[layout=inline].sc-calcite-label-h label.sc-calcite-label,[layout=inline-space-between].sc-calcite-label-h label.sc-calcite-label{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-direction:row;flex-direction:row;grid-gap:0.5rem;gap:0.5rem}[layout=inline-space-between].sc-calcite-label-h label.sc-calcite-label{-ms-flex-pack:justify;justify-content:space-between}[disabled].sc-calcite-label-h>label.sc-calcite-label{pointer-events:none;opacity:0.5}.sc-calcite-label-h[disabled] .sc-calcite-label-s>*{pointer-events:none}.sc-calcite-label-h[disabled] .sc-calcite-label-s>*[disabled],.sc-calcite-label-h[disabled] .sc-calcite-label-s>*[disabled] *{--bg-opacity:1}.sc-calcite-label-h[disabled] .sc-calcite-label-s>calcite-input-message:not([active]){--bg-opacity:0}[status=invalid].sc-calcite-label-h label.sc-calcite-label{color:var(--calcite-ui-danger)}[status=valid].sc-calcite-label-h label.sc-calcite-label{color:var(--calcite-ui-text-2)}[status=idle].sc-calcite-label-h label.sc-calcite-label{color:var(--calcite-ui-text-2)}[disable-spacing].sc-calcite-label-h label.sc-calcite-label{grid-gap:0;gap:0;margin:0}";var o=e("calcite_label",function(){function e(e){var l=this;t(this,e);this.calciteLabelFocus=a(this,"calciteLabelFocus",7);this.alignment="start";this.status="idle";this.scale="m";this.layout="default";this.handleCalciteHtmlForClicks=function(e){if(!l.for){return}var t=document.getElementById(l.for);if(!t){return}if(!t.localName.startsWith("calcite")){return}if(e===t){return}var a=["button","input","meter","output","progress","select","textarea"];if(a.includes(e.localName)){return}var c=["calcite-button","calcite-checkbox","calcite-date","calcite-inline-editable","calcite-input","calcite-radio","calcite-radio-button","calcite-radio-button-group","calcite-radio-group","calcite-rating","calcite-select","calcite-slider","calcite-switch"];if(c.includes(e.localName)){return}for(var i=0;i<c.length;i++){if(e.closest(c[i])){return}}t.click()}}e.prototype.onClick=function(e){var t=e.target;this.calciteLabelFocus.emit({labelEl:this.el,interactedEl:t,requestedInput:this.for});this.handleCalciteHtmlForClicks(t)};e.prototype.render=function(){var e=s(this.el,["disabled","id","layout","scale","status","theme"]);var t=r(this.el);return l(c,{dir:t},l("label",Object.assign({},e),l("slot",null)))};Object.defineProperty(e.prototype,"el",{get:function(){return i(this)},enumerable:false,configurable:true});return e}());o.style=n}}}));