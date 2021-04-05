import{r as t,c as i,h as e,H as a,g as s}from"./p-f8f51224.js";import{h as n,g as r}from"./p-cd8015fa.js";import{g as o}from"./p-a4e6e35b.js";const l=class{constructor(e){t(this,e),this.calciteRatingChange=i(this,"calciteRatingChange",7),this.scale="m",this.value=0,this.readOnly=!1,this.disabled=!1,this.showChip=!1,this.intlRating="Rating",this.intlStars="stars: ${num}",this.guid=`calcite-ratings-${o()}`}handleLabelFocus(t){n(t.detail.labelEl,this.el)&&t.detail.interactedEl!==this.el&&!this.el.contains(t.detail.interactedEl)&&this.setFocus()}blurHandler(){this.hasFocus=!1}renderStars(){return[1,2,3,4,5].map((t=>{const i=this.value>=t,a=this.average&&!this.value&&t<=this.average,s=t<=this.hoverValue,n=this.average&&this.average+1-t,r=!this.value&&!s&&n>0&&n<1;return e("span",{class:{wrapper:!0}},e("label",{class:{star:!0,focused:this.hasFocus&&this.focusValue===t,selected:i,average:a,hovered:s,partial:r},htmlFor:`${this.guid}-${t}`,onMouseOver:()=>{this.hoverValue=t}},e("calcite-icon",{"aria-hidden":"true",class:"icon",icon:i||a||this.readOnly?"star-f":"star",scale:this.scale}),r&&e("div",{class:"fraction",style:{width:100*n+"%"}},e("calcite-icon",{icon:"star-f",scale:this.scale,theme:this.theme})),e("span",{class:"visually-hidden"},this.intlStars.replace("${num}",`${t}`))),e("input",{checked:t===this.value,class:"visually-hidden",disabled:this.disabled||this.readOnly,id:`${this.guid}-${t}`,name:this.guid,onChange:()=>this.updateValue(t),onFocus:()=>{this.hasFocus=!0,this.focusValue=t},ref:i=>(1===t||t===this.value)&&(this.inputFocusRef=i),type:"radio",value:t}))}))}render(){const{intlRating:t,showChip:i,scale:s,theme:n,count:o,average:l}=this,c=r(this.el);return e(a,{dir:c},e("fieldset",{class:"fieldset",onBlur:()=>this.hoverValue=null,onMouseLeave:()=>this.hoverValue=null,onTouchEnd:()=>this.hoverValue=null},e("legend",{class:"visually-hidden"},t),this.renderStars()),(o||l)&&i?e("calcite-chip",{dir:c,scale:s,theme:n,value:null==o?void 0:o.toString()},!!l&&e("span",{class:"number--average"},l.toString()),!!o&&e("span",{class:"number--count"},"(",null==o?void 0:o.toString(),")")):null)}updateValue(t){this.value=t,this.calciteRatingChange.emit({value:t})}async setFocus(){this.inputFocusRef.focus()}get el(){return s(this)}};l.style="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{--calcite-rating-spacing-unit:0.5rem;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;position:relative;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}:host([scale=s]){--calcite-rating-spacing-unit:0.25rem}:host([scale=l]){--calcite-rating-spacing-unit:0.75rem}:host([disabled]){pointer-events:none;opacity:0.5}:host([read-only]){pointer-events:none}.fieldset{padding:0;margin:0;border-width:0;display:inline-block}.wrapper{display:inline-block;margin-right:var(--calcite-rating-spacing-unit)}:host([dir=rtl]) .wrapper{margin-right:0;margin-left:var(--calcite-rating-spacing-unit)}.star{outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;position:relative;display:inline-block;cursor:pointer;color:var(--calcite-ui-border-1);-webkit-transition:150ms ease-in-out;transition:150ms ease-in-out;-webkit-transform:scale(1);transform:scale(1)}.star:active{-webkit-transform:scale(1.1);transform:scale(1.1)}.focused{outline:2px solid var(--calcite-ui-brand);outline-offset:2px}.average,.fraction{color:var(--calcite-ui-warning)}.hovered,.selected,:host([read-only]) .average,:host([read-only]) .fraction{color:var(--calcite-ui-brand)}.hovered:not(.selected){-webkit-transform:scale(0.9);transform:scale(0.9)}:host .fraction{position:absolute;overflow:hidden;pointer-events:none;top:0;left:0;-webkit-transition:150ms ease-in-out;transition:150ms ease-in-out}:host([dir=rtl]) .fraction{right:0;left:auto}calcite-chip{cursor:default;pointer-events:none}.number--average{font-weight:var(--calcite-font-weight-bold)}.number--count{color:var(--calcite-ui-text-2);font-style:italic}.number--count:not(:first-child){margin-left:var(--calcite-rating-spacing-unit)}:host([dir=rtl]) .number--count:not(:first-child){margin-left:0;margin-right:var(--calcite-rating-spacing-unit)}.visually-hidden{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}";export{l as calcite_rating}