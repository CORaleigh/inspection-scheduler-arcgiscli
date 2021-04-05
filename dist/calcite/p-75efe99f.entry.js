import{r as a,c as r,h as o,H as e,g as t}from"./p-f8f51224.js";import{g as c}from"./p-cd8015fa.js";import{g as i}from"./p-a4e6e35b.js";const n=class{constructor(o){a(this,o),this.calciteChipDismiss=r(this,"calciteChipDismiss",7),this.appearance="solid",this.color="grey",this.dismissible=!1,this.dismissLabel="close",this.scale="m",this.closeClickHandler=a=>{a.preventDefault(),this.calciteChipDismiss.emit(this.el)},this.guid=i()}async setFocus(){var a;null===(a=this.closeButton)||void 0===a||a.focus()}render(){const a=c(this.el),r="l"!==this.scale?"s":"m",t=o("calcite-icon",{class:"calcite-chip--icon",dir:a,flipRtl:this.iconFlipRtl,icon:this.icon,scale:r}),i=o("button",{"aria-describedby":this.guid,"aria-label":this.dismissLabel,class:"close",onClick:this.closeClickHandler,ref:a=>this.closeButton=a},o("calcite-icon",{icon:"x",scale:r}));return o(e,{dir:a},o("slot",{name:"chip-image"}),this.icon?t:null,o("span",{id:this.guid},o("slot",null)),this.dismissible?i:null)}get el(){return t(this)}};n.style="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{--calcite-chip-transparent-hover:rgba(0, 0, 0, 0.05);--calcite-chip-transparent-press:rgba(0, 0, 0, 0.08)}:host([theme=dark]){--calcite-chip-transparent-hover:rgba(255, 255, 255, 0.05);--calcite-chip-transparent-press:rgba(255, 255, 255, 0.08)}:host([scale=s]){height:1.25rem;font-size:var(--calcite-font-size--3);--calcite-chip-spacing-unit-l:0.5rem;--calcite-chip-spacing-unit-s:0.25rem}:host([scale=s]) slot[name=chip-image]::slotted(*){height:1.25rem;width:1.25rem}:host([scale=m]){height:2rem;font-size:var(--calcite-font-size--2);--calcite-chip-spacing-unit-l:0.75rem;--calcite-chip-spacing-unit-s:6px}:host([scale=m]) slot[name=chip-image]::slotted(*){height:1.5rem;width:1.5rem;padding-left:0.25rem}:host([scale=l]){height:2.5rem;font-size:var(--calcite-font-size--1);--calcite-chip-spacing-unit-l:1rem;--calcite-chip-spacing-unit-s:0.5rem}:host([scale=l]) slot[name=chip-image]::slotted(*){height:2rem;width:2rem;padding-left:0.25rem}:host([dir=rtl][scale=m]) slot[name=chip-image]::slotted(*){padding-left:0;padding-right:0.25rem}:host([dir=rtl][scale=l]) slot[name=chip-image]::slotted(*){padding-left:0;padding-right:0.25rem}:host{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;background-color:var(--calcite-ui-foreground-2);border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-1);color:var(--calcite-ui-text-1);font-weight:var(--calcite-font-weight-medium);cursor:default;border-radius:9999px;--calcite-chip-button-border-radius:0 50px 50px 0}:host button{outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out}:host button:focus{outline:2px solid var(--calcite-ui-brand);outline-offset:-2px}:host([dir=rtl]){text-align:right;--calcite-chip-button-border-radius:50px 0 0 50px}:host span{padding:var(--calcite-chip-spacing-unit-s) var(--calcite-chip-spacing-unit-l)}:host([dismissible]) span{padding:var(--calcite-chip-spacing-unit-s) var(--calcite-chip-spacing-unit-s) var(--calcite-chip-spacing-unit-s) var(--calcite-chip-spacing-unit-l)}:host([dir=rtl][dismissible]) span{padding:var(--calcite-chip-spacing-unit-s) var(--calcite-chip-spacing-unit-l) var(--calcite-chip-spacing-unit-s) var(--calcite-chip-spacing-unit-s)}:host([icon]:not([dismissible])) span{padding:var(--calcite-chip-spacing-unit-s) var(--calcite-chip-spacing-unit-l) var(--calcite-chip-spacing-unit-s) var(--calcite-chip-spacing-unit-s)}:host([dir=rtl][icon]:not([dismissible])) span{padding:var(--calcite-chip-spacing-unit-s) var(--calcite-chip-spacing-unit-s) var(--calcite-chip-spacing-unit-s) var(--calcite-chip-spacing-unit-l)}:host button{margin:0;padding:0;display:-ms-inline-flexbox;display:inline-flex;-ms-flex-item-align:stretch;align-self:stretch;-ms-flex-align:center;align-items:center;border-style:none;cursor:pointer;background-color:transparent;-webkit-transition-duration:150ms;transition-duration:150ms;-webkit-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);color:var(--calcite-ui-text-1);-webkit-appearance:none;border-radius:var(--calcite-chip-button-border-radius);padding:var(--calcite-chip-spacing-unit-s)}:host button:hover,:host button:focus{background-color:var(--calcite-ui-foreground-2);border-color:var(--calcite-ui-border-2)}:host button:active{background-color:var(--calcite-ui-foreground-3)}:host slot[name=chip-image]::slotted(*){border-radius:50%;overflow:hidden;display:-ms-inline-flexbox;display:inline-flex}.calcite-chip--icon{display:-ms-inline-flexbox;display:inline-flex;position:relative;margin-top:0;margin-bottom:0;margin-right:0;-webkit-transition-duration:150ms;transition-duration:150ms;-webkit-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);margin-left:var(--calcite-chip-spacing-unit-l);border-radius:var(--calcite-chip-button-border-radius)}:host([dir=rtl]) .calcite-chip--icon{margin-top:0;margin-bottom:0;margin-left:0;margin-right:var(--calcite-chip-spacing-unit-l)}:host([color=blue][appearance=solid]),:host([color=blue][appearance=solid]) button{border-color:var(--calcite-ui-brand);background-color:var(--calcite-ui-brand);color:var(--calcite-ui-foreground-1)}:host([appearance=solid]) button:hover,:host([appearance=solid]) button:focus{background-color:rgba(255, 255, 255, 0.1)}:host([appearance=solid]) button:active{background-color:rgba(0, 0, 0, 0.1)}:host([theme=dark][color=blue][appearance=solid]:not([color=grey])),:host([theme=dark][color=blue][appearance=solid]:not([color=grey])) button{color:var(--calcite-ui-background)}:host([color=blue][appearance=clear]){color:var(--calcite-ui-text-1);background-color:transparent;border-color:var(--calcite-ui-brand-press)}:host([color=blue][appearance=clear]) .calcite-chip--icon{color:var(--calcite-ui-brand-press)}:host([theme=dark][color=blue][appearance=clear]){border-color:var(--calcite-ui-brand-hover)}:host([color=blue][appearance=clear]) button:hover,:host([color=blue][appearance=clear]) button:focus{background-color:var(--calcite-chip-transparent-hover)}:host([color=blue][appearance=clear]) button:active{background-color:var(--calcite-chip-transparent-press)}:host([color=red][appearance=solid]),:host([color=red][appearance=solid]) button{border-color:var(--calcite-ui-danger);background-color:var(--calcite-ui-danger);color:var(--calcite-ui-foreground-1)}:host([appearance=solid]) button:hover,:host([appearance=solid]) button:focus{background-color:rgba(255, 255, 255, 0.1)}:host([appearance=solid]) button:active{background-color:rgba(0, 0, 0, 0.1)}:host([theme=dark][color=red][appearance=solid]:not([color=grey])),:host([theme=dark][color=red][appearance=solid]:not([color=grey])) button{color:var(--calcite-ui-background)}:host([color=red][appearance=clear]){color:var(--calcite-ui-text-1);background-color:transparent;border-color:var(--calcite-ui-danger-press)}:host([color=red][appearance=clear]) .calcite-chip--icon{color:var(--calcite-ui-danger-press)}:host([theme=dark][color=red][appearance=clear]){border-color:var(--calcite-ui-danger-hover)}:host([color=red][appearance=clear]) button:hover,:host([color=red][appearance=clear]) button:focus{background-color:var(--calcite-chip-transparent-hover)}:host([color=red][appearance=clear]) button:active{background-color:var(--calcite-chip-transparent-press)}:host([color=yellow][appearance=solid]),:host([color=yellow][appearance=solid]) button{border-color:var(--calcite-ui-warning);background-color:var(--calcite-ui-warning);color:var(--calcite-ui-text-1)}:host([appearance=solid]) button:hover,:host([appearance=solid]) button:focus{background-color:rgba(255, 255, 255, 0.1)}:host([appearance=solid]) button:active{background-color:rgba(0, 0, 0, 0.1)}:host([theme=dark][color=yellow][appearance=solid]:not([color=grey])),:host([theme=dark][color=yellow][appearance=solid]:not([color=grey])) button{color:var(--calcite-ui-background)}:host([color=yellow][appearance=clear]){color:var(--calcite-ui-text-1);background-color:transparent;border-color:var(--calcite-ui-warning)}:host([color=yellow][appearance=clear]) .calcite-chip--icon{color:var(--calcite-ui-warning)}:host([theme=dark][color=yellow][appearance=clear]){border-color:var(--calcite-ui-warning)}:host([color=yellow][appearance=clear]) button:hover,:host([color=yellow][appearance=clear]) button:focus{background-color:var(--calcite-chip-transparent-hover)}:host([color=yellow][appearance=clear]) button:active{background-color:var(--calcite-chip-transparent-press)}:host([color=green][appearance=solid]),:host([color=green][appearance=solid]) button{border-color:var(--calcite-ui-success);background-color:var(--calcite-ui-success);color:var(--calcite-ui-text-1)}:host([appearance=solid]) button:hover,:host([appearance=solid]) button:focus{background-color:rgba(255, 255, 255, 0.1)}:host([appearance=solid]) button:active{background-color:rgba(0, 0, 0, 0.1)}:host([theme=dark][color=green][appearance=solid]:not([color=grey])),:host([theme=dark][color=green][appearance=solid]:not([color=grey])) button{color:var(--calcite-ui-background)}:host([color=green][appearance=clear]){color:var(--calcite-ui-text-1);background-color:transparent;border-color:var(--calcite-ui-success)}:host([color=green][appearance=clear]) .calcite-chip--icon{color:var(--calcite-ui-success)}:host([theme=dark][color=green][appearance=clear]){border-color:var(--calcite-ui-success)}:host([color=green][appearance=clear]) button:hover,:host([color=green][appearance=clear]) button:focus{background-color:var(--calcite-chip-transparent-hover)}:host([color=green][appearance=clear]) button:active{background-color:var(--calcite-chip-transparent-press)}:host([color=grey][appearance=solid]),:host([color=grey][appearance=solid]) button{border-color:var(--calcite-ui-foreground-2);background-color:var(--calcite-ui-foreground-2);color:var(--calcite-ui-text-1)}:host([appearance=solid]) button:hover,:host([appearance=solid]) button:focus{background-color:rgba(255, 255, 255, 0.1)}:host([appearance=solid]) button:active{background-color:rgba(0, 0, 0, 0.1)}:host([theme=dark][color=grey][appearance=solid]:not([color=grey])),:host([theme=dark][color=grey][appearance=solid]:not([color=grey])) button{color:var(--calcite-ui-background)}:host([color=grey][appearance=clear]){color:var(--calcite-ui-text-1);background-color:transparent;border-color:var(--calcite-ui-border-1)}:host([color=grey][appearance=clear]) .calcite-chip--icon{color:var(--calcite-ui-text-1)}:host([theme=dark][color=grey][appearance=clear]){border-color:var(--calcite-ui-text-3-dark)}:host([color=grey][appearance=clear]) button:hover,:host([color=grey][appearance=clear]) button:focus{background-color:var(--calcite-chip-transparent-hover)}:host([color=grey][appearance=clear]) button:active{background-color:var(--calcite-chip-transparent-press)}";export{n as calcite_chip}