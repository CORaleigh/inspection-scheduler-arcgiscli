import{r as t,c as e,h as a,H as i,g as n}from"./p-f8f51224.js";import{c as s,g as r}from"./p-cd8015fa.js";import{C as o,a as l}from"./p-4bca9d1b.js";const c=class{constructor(a){t(this,a),this.calciteTipDismiss=e(this,"calciteTipDismiss",7),this.dismissed=!1,this.nonDismissible=!1,this.headingLevel=3,this.hideTip=()=>{this.dismissed=!0,this.calciteTipDismiss.emit()}}renderHeader(){const{heading:t,headingLevel:e}=this;return t?a("header",{class:"header"},a(o,{class:"heading",level:e},t)):null}renderDismissButton(){const{nonDismissible:t,hideTip:e,intlClose:i}=this;return t?null:a("calcite-action",{class:"close",icon:"x",onClick:e,scale:"l",text:i||"Close"})}renderImageFrame(){const{el:t}=this;return s(t,"thumbnail")?a("div",{class:"image-frame"},a("slot",{name:"thumbnail"})):null}renderInfoNode(){return a("div",{class:"info"},a("slot",null))}renderContent(){return a("div",{class:"content"},this.renderImageFrame(),this.renderInfoNode())}render(){return a(i,null,a("article",{class:"container"},this.renderHeader(),this.renderContent()),this.renderDismissButton())}get el(){return n(this)}};c.style="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:host{-webkit-box-sizing:border-box;box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size--1)}:host *{-webkit-box-sizing:border-box;box-sizing:border-box}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{position:relative;display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;margin:1rem;border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-2)}.container{padding:1rem}:host([dismissed]),:host([dismissed]) .container{display:none}:host([selected]) .container{border-style:none;margin:0;padding:0}.header{margin:0;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;color:var(--calcite-ui-text-2);fill:var(--calcite-ui-text-2)}.heading{padding:0;margin:0;font-weight:var(--calcite-font-weight-medium);line-height:1.5}.header .heading{-ms-flex:1 0 auto;flex:1 0 auto;padding:var(--calcite-spacing-half) var(--calcite-spacing-half)}h1.heading{font-size:var(--calcite-font-size-2)}h2.heading{font-size:var(--calcite-font-size-1)}h3.heading{font-size:var(--calcite-font-size-0)}h4.heading,h5.heading{font-size:var(--calcite-font-size--1)}.header{margin-bottom:0.5rem}.header .heading{color:var(--calcite-ui-text-2);padding:0}.container[hidden]{display:none}.content{display:-ms-flexbox;display:flex}.info{padding-top:0;padding-bottom:0;padding-left:1rem;padding-right:1rem;width:70%}.info:only-child{width:100%;padding-left:0;padding-right:0}::slotted(p){margin-top:0}::slotted(a){outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;color:var(--calcite-ui-brand)}::slotted(a:focus){outline:2px solid var(--calcite-ui-brand);outline-offset:2px}.image-frame{width:25%}.image-frame img{max-width:100%}::slotted(img){max-width:100%}";const d=class{constructor(e){t(this,e)}render(){return a("slot",null)}};d.style="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:host{-webkit-box-sizing:border-box;box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size--1)}:host *{-webkit-box-sizing:border-box;box-sizing:border-box}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}::slotted(calcite-tip){border-style:none;max-width:34rem}";const m=class{constructor(a){t(this,a),this.calciteTipManagerToggle=e(this,"calciteTipManagerToggle",7),this.closed=!1,this.headingLevel=2,this.observer=new MutationObserver((()=>this.setUpTips())),this.hideTipManager=()=>{this.closed=!0,this.calciteTipManagerToggle.emit()},this.previousClicked=()=>{this.previousTip()},this.nextClicked=()=>{this.nextTip()},this.tipManagerKeyUpHandler=t=>{if(t.target===this.container)switch(t.key){case"ArrowRight":t.preventDefault(),this.nextTip();break;case"ArrowLeft":t.preventDefault(),this.previousTip();break;case"Home":t.preventDefault(),this.selectedIndex=0;break;case"End":t.preventDefault(),this.selectedIndex=this.total-1}},this.storeContainerRef=t=>{this.container=t}}closedChangeHandler(){this.direction=null,this.calciteTipManagerToggle.emit()}selectedChangeHandler(){this.showSelectedTip(),this.updateGroupTitle()}connectedCallback(){this.setUpTips(),this.observer.observe(this.el,{childList:!0,subtree:!0})}disconnectedCallback(){this.observer.disconnect()}async nextTip(){this.direction="advancing",this.selectedIndex=(this.selectedIndex+1+this.total)%this.total}async previousTip(){this.direction="retreating",this.selectedIndex=(this.selectedIndex-1+this.total)%this.total}setUpTips(){const t=Array.from(this.el.querySelectorAll("calcite-tip"));if(this.total=t.length,0===this.total)return;const e=this.el.querySelector("calcite-tip[selected]");this.tips=t,this.selectedIndex=e?t.indexOf(e):0,t.forEach((t=>{t.headingLevel=l(this.headingLevel+1),t.nonDismissible=!0})),this.showSelectedTip(),this.updateGroupTitle()}showSelectedTip(){this.tips.forEach(((t,e)=>{const a=this.selectedIndex===e;t.selected=a,t.hidden=!a}))}updateGroupTitle(){const t=this.tips[this.selectedIndex].closest("calcite-tip-group");this.groupTitle=(null==t?void 0:t.groupTitle)||this.intlDefaultTitle||"Tips"}renderPagination(){const t=r(this.el),{selectedIndex:e,tips:i,total:n,intlNext:s,intlPrevious:o,intlPaginationLabel:l}=this,c=s||"Next",d=l||"Tip";return i.length>1?a("footer",{class:"pagination"},a("calcite-action",{class:"page-previous",icon:"ltr"===t?"chevron-left":"chevron-right",onClick:this.previousClicked,text:o||"Previous"}),a("span",{class:"page-position"},`${d} ${e+1}/${n}`),a("calcite-action",{class:"page-next",icon:"ltr"===t?"chevron-right":"chevron-left",onClick:this.nextClicked,text:c})):null}render(){const{closed:t,direction:e,headingLevel:n,groupTitle:s,selectedIndex:r,intlClose:l,total:c}=this,d=l||"Close";return 0===c?a(i,null):a(i,null,a("section",{"aria-hidden":t.toString(),class:"container",hidden:t,onKeyUp:this.tipManagerKeyUpHandler,ref:this.storeContainerRef,tabIndex:0},a("header",{class:"header"},a(o,{class:"heading",level:n},s),a("calcite-action",{class:"close",icon:"x",onClick:this.hideTipManager,text:d})),a("div",{class:{"tip-container":!0,"tip-container--advancing":!t&&"advancing"===e,"tip-container--retreating":!t&&"retreating"===e},key:r,tabIndex:0},a("slot",null)),this.renderPagination()))}get el(){return n(this)}static get watchers(){return{closed:["closedChangeHandler"],selectedIndex:["selectedChangeHandler"]}}};m.style="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:host{-webkit-box-sizing:border-box;box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size--1)}:host *{-webkit-box-sizing:border-box;box-sizing:border-box}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{display:block;--calcite-tip-manager-height:18vh;--calcite-tip-max-width:540px}:host([closed]){display:none}.header{margin:0;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;color:var(--calcite-ui-text-2);fill:var(--calcite-ui-text-2)}.heading{padding:0;margin:0;font-weight:var(--calcite-font-weight-medium);line-height:1.5}.header .heading{-ms-flex:1 0 auto;flex:1 0 auto;padding:var(--calcite-spacing-half) var(--calcite-spacing-half)}h1.heading{font-size:var(--calcite-font-size-2)}h2.heading{font-size:var(--calcite-font-size-1)}h3.heading{font-size:var(--calcite-font-size-0)}h4.heading,h5.heading{font-size:var(--calcite-font-size--1)}.header .heading{padding-left:0.5rem;padding-right:0.5rem}.container{overflow:hidden;position:relative;padding-top:0.5rem;padding-left:0.5rem;padding-right:0.5rem;padding-bottom:0;outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;min-height:150px}.container:focus{outline:2px solid var(--calcite-ui-brand);outline-offset:2px}.tip-container{margin-top:0.25rem;overflow:auto;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:start;align-items:flex-start;outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;-webkit-animation-name:none;animation-name:none;-webkit-animation-duration:150ms;animation-duration:150ms;-webkit-animation-timing-function:cubic-bezier(0.215, 0.44, 0.42, 0.88);animation-timing-function:cubic-bezier(0.215, 0.44, 0.42, 0.88);height:var(--calcite-tip-manager-height)}.tip-container:focus{outline:2px solid var(--calcite-ui-brand);outline-offset:2px}::slotted(calcite-tip){border-style:none;max-width:var(--calcite-tip-max-width)}.tip-container--advancing{-webkit-animation-name:tip-advance;animation-name:tip-advance}.tip-container--retreating{-webkit-animation-name:tip-retreat;animation-name:tip-retreat}.pagination{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;padding-top:0.25rem;padding-bottom:0.25rem;padding-left:0;padding-right:0}.page-position{font-size:var(--calcite-font-size--2);line-height:1rem;margin-top:0;margin-bottom:0;margin-left:0.5rem;margin-right:0.5rem}@-webkit-keyframes tip-advance{0%{opacity:0;-webkit-transform:translate3d(50px, 0, 0) scale(0.99);transform:translate3d(50px, 0, 0) scale(0.99)}100%{opacity:1;-webkit-transform:translate3d(0, 0, 0) scale(1);transform:translate3d(0, 0, 0) scale(1)}}@keyframes tip-advance{0%{opacity:0;-webkit-transform:translate3d(50px, 0, 0) scale(0.99);transform:translate3d(50px, 0, 0) scale(0.99)}100%{opacity:1;-webkit-transform:translate3d(0, 0, 0) scale(1);transform:translate3d(0, 0, 0) scale(1)}}@-webkit-keyframes tip-retreat{0%{opacity:0;-webkit-transform:translate3d(-50px, 0, 0) scale(0.99);transform:translate3d(-50px, 0, 0) scale(0.99)}100%{opacity:1;-webkit-transform:translate3d(0, 0, 0) scale(1);transform:translate3d(0, 0, 0) scale(1)}}@keyframes tip-retreat{0%{opacity:0;-webkit-transform:translate3d(-50px, 0, 0) scale(0.99);transform:translate3d(-50px, 0, 0) scale(0.99)}100%{opacity:1;-webkit-transform:translate3d(0, 0, 0) scale(1);transform:translate3d(0, 0, 0) scale(1)}}";export{c as calcite_tip,d as calcite_tip_group,m as calcite_tip_manager}