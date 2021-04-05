import{r as t,c as i,h as s,H as e,g as a}from"./p-f8f51224.js";import{g as r}from"./p-cd8015fa.js";const o=class{constructor(s){t(this,s),this.calcitePaginationUpdate=i(this,"calcitePaginationUpdate",7),this.calcitePaginationChange=i(this,"calcitePaginationChange",7),this.num=20,this.start=1,this.total=0,this.textLabelNext="next",this.textLabelPrevious="previous",this.scale="m",this.previousClicked=()=>{this.previousPage().then(),this.emitUpdate()},this.nextClicked=()=>{this.nextPage(),this.emitUpdate()}}async nextPage(){this.start=Math.min(this.getLastStart(),this.start+this.num)}async previousPage(){this.start=Math.max(1,this.start-this.num)}getLastStart(){const{total:t,num:i}=this;return 1+(t%i==0?t-i:Math.floor(t/i)*i)}showLeftEllipsis(){return Math.floor(this.start/this.num)>3}showRightEllipsis(){return(this.total-this.start)/this.num>3}emitUpdate(){const t={start:this.start,total:this.total,num:this.num};this.calcitePaginationChange.emit(t),this.calcitePaginationUpdate.emit(t)}renderPages(){const t=this.getLastStart();let i,s;this.total/this.num<=5?(s=1+this.num,i=t-this.num):this.start/this.num<4?(s=1+this.num,i=1+4*this.num):this.start+3*this.num>=this.total?(s=t-4*this.num,i=t-this.num):(s=this.start-this.num,i=this.start+this.num);const e=[];for(;s<=i;)e.push(s),s+=this.num;return e.map((t=>this.renderPage(t)))}renderPage(t){const i=Math.floor(t/this.num)+(1===this.num?0:1);return s("button",{class:{page:!0,"is-selected":t===this.start},onClick:()=>{this.start=t,this.emitUpdate()}},i)}renderLeftEllipsis(t){if(this.total/this.num>5&&this.showLeftEllipsis())return s("span",{class:"ellipsis ellipsis--start"},s("calcite-icon",{icon:"ellipsis",scale:t}))}renderRightEllipsis(t){if(this.total/this.num>5&&this.showRightEllipsis())return s("span",{class:"ellipsis ellipsis--end"},s("calcite-icon",{icon:"ellipsis",scale:t}))}render(){const t=r(this.el),{total:i,num:a,start:o}=this,n="l"===this.scale?"m":"s",l=1===a?o<=a:o<a,c=o+a>i;return s(e,{dir:t},s("button",{"aria-label":this.textLabelPrevious,class:{previous:!0,"is-disabled":l},disabled:l,onClick:this.previousClicked},s("calcite-icon",{dir:t,flipRtl:!0,icon:"chevronLeft",scale:n})),i>a?this.renderPage(1):null,this.renderLeftEllipsis(n),this.renderPages(),this.renderRightEllipsis(n),this.renderPage(this.getLastStart()),s("button",{"aria-label":this.textLabelNext,class:{next:!0,"is-disabled":c},disabled:c,onClick:this.nextClicked},s("calcite-icon",{dir:t,flipRtl:!0,icon:"chevronRight",scale:n})))}get el(){return a(this)}};o.style="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host([scale=s]){--calcite-pagination-spacing:0.25rem 0.5rem}:host([scale=s]) .previous,:host([scale=s]) .next,:host([scale=s]) .page{font-size:var(--calcite-font-size--2);line-height:1rem}:host([scale=m]){--calcite-pagination-spacing:0.5rem 0.75rem}:host([scale=m]) .previous,:host([scale=m]) .next,:host([scale=m]) .page{font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale=l]){--calcite-pagination-spacing:0.75rem 1rem}:host([scale=l]) .previous,:host([scale=l]) .next,:host([scale=l]) .page{font-size:var(--calcite-font-size-1);line-height:1.5rem}:host{display:-ms-flexbox;display:flex;-ms-writing-mode:lr-tb;-webkit-writing-mode:horizontal-tb;writing-mode:horizontal-tb}:host button{outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out}:host button:focus{outline:2px solid var(--calcite-ui-brand);outline-offset:-2px}.previous,.next,.page{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;background-color:transparent;border-style:none;--border-opacity:0;font-size:var(--calcite-font-size-0);line-height:1.25rem;color:var(--calcite-ui-text-3);cursor:pointer;font-family:inherit;border-top:2px solid transparent;border-bottom:2px solid transparent}.previous:hover,.next:hover,.page:hover{color:var(--calcite-ui-text-1);-webkit-transition:all 150ms ease-in-out;transition:all 150ms ease-in-out}.page:hover{border-bottom-color:var(--calcite-ui-border-2)}.page.is-selected{font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-1);border-bottom-color:var(--calcite-ui-brand)}.previous,.next{padding:var(--calcite-pagination-spacing)}.previous:hover,.next:hover{background-color:var(--calcite-ui-foreground-2);color:var(--calcite-ui-text-link)}.previous:active,.next:active{background-color:var(--calcite-ui-foreground-3)}.previous.is-disabled,.next.is-disabled{background-color:transparent;pointer-events:none}.previous.is-disabled>calcite-icon,.next.is-disabled>calcite-icon{opacity:0.5}.next{margin-right:0}.page,.ellipsis{padding:var(--calcite-pagination-spacing)}.ellipsis{display:-ms-flexbox;display:flex;-ms-flex-align:end;align-items:flex-end;color:var(--calcite-ui-text-3)}";export{o as calcite_pagination}