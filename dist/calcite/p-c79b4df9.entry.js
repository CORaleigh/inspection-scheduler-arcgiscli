import{r as t,c as a,h as e,H as i,g as r}from"./p-0f61cfe6.js";import{g as s}from"./p-fbd3d700.js";import{d as o}from"./p-fc8feabd.js";import{f as c}from"./p-c10ca461.js";import{C as n}from"./p-28355066.js";const l=class{constructor(e){t(this,e),this.calciteFilterChange=a(this,"calciteFilterChange",7),this.empty=!0,this.filter=o((t=>{const e=new RegExp(t,"ig");if(0===this.data.length)return console.warn("No data was passed to calcite-filter.\n      The data property expects an array of objects"),void this.calciteFilterChange.emit([]);const a=(t,e)=>{let i=!1;return c(t,(t=>{"function"!=typeof t&&(Array.isArray(t)||"object"==typeof t&&null!==t?a(t,e)&&(i=!0):e.test(t)&&(i=!0))})),i},i=this.data.filter((t=>a(t,e)));this.calciteFilterChange.emit(i)}),250),this.inputHandler=t=>{const e=t.target;this.empty=""===e.value,this.filter(e.value)},this.clear=()=>{this.textInput.value="",this.empty=!0,this.calciteFilterChange.emit(this.data)}}render(){const t="rtl"===s(this.el);return e(i,null,e("label",{class:t?n.rtl:null},e("input",{"aria-label":this.intlLabel||"filter",onInput:this.inputHandler,placeholder:this.placeholder,ref:t=>{this.textInput=t},type:"text",value:""}),e("div",{class:"search-icon"},e("calcite-icon",{icon:"search",scale:"s"}))),this.empty?null:e("button",{"aria-label":this.intlClear||"Clear filter",class:"clear-button",onClick:this.clear},e("calcite-icon",{icon:"x"})))}get el(){return r(this)}};l.style="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:host{-webkit-box-sizing:border-box;box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size--1)}:host *{-webkit-box-sizing:border-box;box-sizing:border-box}:host{--calcite-icon-size:1rem;--calcite-spacing-quarter:0.25rem;--calcite-spacing-half:0.5rem;--calcite-spacing-three-quarters:0.75rem;--calcite-spacing:1rem;--calcite-spacing-plus-quarter:1.25rem;--calcite-spacing-plus-half:1.5rem;--calcite-spacing-double:2rem;--calcite-menu-min-width:10rem;--calcite-header-min-height:3rem;--calcite-footer-min-height:3rem}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{display:-ms-flexbox;display:flex;padding:var(--calcite-spacing-half) var(--calcite-spacing-half);width:100%}label{-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex;margin:0 var(--calcite-spacing-quarter);overflow:hidden;position:relative;width:100%}input[type=text]{background-color:transparent;border:0;font-family:inherit;font-size:0.875rem;line-height:1.5;margin-bottom:2px;padding:var(--calcite-spacing-quarter) var(--calcite-spacing-quarter) var(--calcite-spacing-quarter) var(--calcite-spacing-plus-half);-webkit-transition:padding 150ms ease-in-out, -webkit-box-shadow 150ms ease-in-out;transition:padding 150ms ease-in-out, -webkit-box-shadow 150ms ease-in-out;transition:padding 150ms ease-in-out, box-shadow 150ms ease-in-out;transition:padding 150ms ease-in-out, box-shadow 150ms ease-in-out, -webkit-box-shadow 150ms ease-in-out;width:100%}input[type=text]::-ms-clear{display:none}.search-icon{color:var(--calcite-ui-text-2);display:-ms-flexbox;display:flex;left:0;position:absolute;-webkit-transition:left 150ms ease-in-out, right 150ms ease-in-out, opacity 150ms ease-in-out;transition:left 150ms ease-in-out, right 150ms ease-in-out, opacity 150ms ease-in-out}.calcite--rtl .search-icon{left:unset;right:0}input[type=text]:focus{border-color:var(--calcite-ui-brand);-webkit-box-shadow:0 2px 0 var(--calcite-ui-brand);box-shadow:0 2px 0 var(--calcite-ui-brand);outline:none;padding-left:var(--calcite-spacing-quarter);padding-right:var(--calcite-spacing-quarter)}input[type=text]:focus~.search-icon{left:calc(var(--calcite-icon-size) * -1);opacity:0}.calcite--rtl input[type=text]{padding-left:var(--calcite-spacing-quarter);padding-right:var(--calcite-spacing-plus-half)}.calcite--rtl input[type=text]:focus{padding-right:var(--calcite-spacing-plus-quarter)}.calcite--rtl input[type=text]:focus~.search-icon{right:calc(var(--calcite-icon-size) * -1)}.clear-button{color:var(--calcite-ui-text-2);background:none;border:0;cursor:pointer}.clear-button:hover,.clear-button:focus{color:var(--calcite-ui-text-1)}";export{l as calcite_filter};