import{r as t,h as a,H as e,g as i}from"./p-f8f51224.js";import{s,b as n,g as o}from"./p-cd8015fa.js";var r;!function(t){t.valid="check-circle",t.invalid="exclamation-mark-triangle",t.idle="information"}(r||(r={}));const c=class{constructor(a){t(this,a),this.active=!1,this.scale="m",this.status="idle",this.type="default"}handleIconEl(){this.requestedIcon=s(r,this.icon,this.status)}connectedCallback(){this.status=n(this.el,"status",this.status),this.scale=n(this.el,"scale",this.scale),this.requestedIcon=s(r,this.icon,this.status)}render(){const t=o(this.el);return a(e,{"calcite-hydrated-hidden":!this.active,dir:t,theme:this.theme},this.renderIcon(this.requestedIcon),a("slot",null))}renderIcon(t){if(t)return a("calcite-icon",{class:"calcite-input-message-icon",icon:t,scale:"s"})}get el(){return i(this)}static get watchers(){return{status:["handleIconEl"],icon:["handleIconEl"]}}};c.style="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host([scale=s]){--calcite-input-message-spacing-value:4px}:host([scale=s]) .calcite-input-message-icon{margin-top:-2px}:host([scale=m]){--calcite-input-message-spacing-value:8px}:host([scale=l]){--calcite-input-message-spacing-value:12px}:host{--calcite-input-message-floating-background:rgba(255, 255, 255, 0.96)}:host([theme=dark]){--calcite-input-message-floating-background:rgba(43, 43, 43, 0.96)}:host{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box;color:var(--calcite-ui-text-2);font-weight:500;line-height:1.25;-webkit-transition:150ms ease-in-out;transition:150ms ease-in-out;visibility:hidden;opacity:0;height:0;pointer-events:none}:host([active]){opacity:1;height:auto;visibility:visible;margin-top:var(--calcite-input-message-spacing-value)}:host([type=floating]){-webkit-transform:translate3d(0, -1.5rem, 0);transform:translate3d(0, -1.5rem, 0);background-color:var(--calcite-input-message-floating-background);position:absolute;width:100%;top:100%;left:0;right:0;height:auto;margin-top:-1.5rem;border-radius:var(--calcite-border-radius);-webkit-box-shadow:var(--calcite-shadow-2);box-shadow:var(--calcite-shadow-2);padding:var(--calcite-input-message-spacing-value);z-index:101}:host([type=floating][active]){-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0)}.calcite-input-message-icon{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-negative:0;flex-shrink:0;pointer-events:none;-webkit-transition:150ms ease-in-out;transition:150ms ease-in-out;margin:-1px 0.75rem 0 0;transition:150ms ease-in-out}:host([dir=rtl]) .calcite-input-message-icon{margin:-1px 0 0 0.75rem}:host([status=invalid]) .calcite-input-message-icon{color:var(--calcite-ui-danger)}:host([status=valid]) .calcite-input-message-icon{color:var(--calcite-ui-success)}:host([status=idle]) .calcite-input-message-icon{color:var(--calcite-ui-brand)}:host([type=floating][active]){-webkit-animation:floatingMessagePulse 0.5s ease-in-out;animation:floatingMessagePulse 0.5s ease-in-out;-webkit-animation-iteration-count:1;animation-iteration-count:1}@-webkit-keyframes floatingMessagePulse{0%{top:100%}25%{top:110%}50%{top:100%}75%{top:105%}100%{top:100%}}@keyframes floatingMessagePulse{0%{top:100%}25%{top:110%}50%{top:100%}75%{top:105%}100%{top:100%}}";export{c as calcite_input_message}