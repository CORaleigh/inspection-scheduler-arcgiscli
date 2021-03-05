import{r as t,h as a,g as n}from"./p-0f61cfe6.js";import{g as r}from"./p-a4e6e35b.js";function s(t){return t<0?-1:1}function i(t,a,n){const s=a[0]-t[0];return s?(3*(a[1]-t[1])/s-n)/2:n}function e(t,a,n,s,r){const[e,i]=t,[o,h]=a,c=(o-e)/3;return`C ${r([e+c,i+c*n]).join(",")} ${r([o-c,h-c*s]).join(",")} ${r([o,h]).join(",")}`}const o=class{constructor(a){t(this,a),this.data=[],this.width=300,this.height=100,this.maskId=`calcite-graph-mask-${r()}`}render(){const{data:t,width:n,height:r,highlightMax:o,highlightMin:h}=this,c=this.maskId;if(!t||0===t.length)return a("svg",{class:"svg",height:r,preserveAspectRatio:"none",viewBox:`0 0 ${n} ${r}`,width:n});const{min:m,max:l}=function(t){const[a,n]=t[0];return t.reduce((({min:t,max:a},[n,s])=>({min:[Math.min(t[0],n),Math.min(t[1],s)],max:[Math.max(a[0],n),Math.max(a[1],s)]})),{min:[a,n],max:[a,n]})}(t),p=function({width:t,height:a,min:n,max:s}){const r=s[0]-n[0],e=s[1]-n[1];return n=>[n[0]/r*t,a-n[1]/e*a]}({min:m,max:l,width:n,height:r}),[f]=p([h,l[1]]),[$]=p([o,l[1]]),d=function({data:t,min:a,max:n,t:r}){if(0===t.length)return"";const[o,h]=r(t[0]),[c,m]=r(a),[l]=r(n);let p,f,$;const d=t.reduce(((a,n,o)=>{if(f=t[o-2],$=t[o-1],o>1){const t=function(t,a,n){const r=a[0]-t[0],e=n[0]-a[0],i=(a[1]-t[1])/(r||e<0&&0),o=(n[1]-a[1])/(e||r<0&&0),h=(i*e+o*r)/(r+e);return(s(i)+s(o))*Math.min(Math.abs(i),Math.abs(o),.5*Math.abs(h))||0}(f,$,n),o=void 0===p?i(f,$,t):p,h=e(f,$,o,t,r);return p=t,`${a} ${h}`}return a}),`M ${c},${m} L ${c},${h} L ${o},${h}`),g=t[t.length-1];return`${d} ${e($,g,p,i($,g,p),r)} L ${l},${m} Z`}({data:t,min:m,max:l,t:p});return a("svg",{class:"svg",height:r,preserveAspectRatio:"none",viewBox:`0 0 ${n} ${r}`,width:n},void 0!==h?a("svg",{class:"svg",height:r,preserveAspectRatio:"none",viewBox:`0 0 ${n} ${r}`,width:n},a("mask",{height:"100%",id:`${c}1`,width:"100%",x:"0%",y:"0%"},a("path",{d:`\n              M 0,0\n              L ${f-1},0\n              L ${f-1},${r}\n              L 0,${r}\n              Z\n            `,fill:"white"})),a("mask",{height:"100%",id:`${c}2`,width:"100%",x:"0%",y:"0%"},a("path",{d:`\n              M ${f+1},0\n              L ${$-1},0\n              L ${$-1},${r}\n              L ${f+1}, ${r}\n              Z\n            `,fill:"white"})),a("mask",{height:"100%",id:`${c}3`,width:"100%",x:"0%",y:"0%"},a("path",{d:`\n                  M ${$+1},0\n                  L ${n},0\n                  L ${n},${r}\n                  L ${$+1}, ${r}\n                  Z\n                `,fill:"white"})),a("path",{class:"graph-path",d,mask:`url(#${c}1)`}),a("path",{class:"graph-path--highlight",d,mask:`url(#${c}2)`}),a("path",{class:"graph-path",d,mask:`url(#${c}3)`})):a("path",{class:"graph-path",d}))}get el(){return n(this)}};o.style="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}.svg{fill:currentColor;stroke:transparent;margin:0;padding:0;display:block}";export{o as calcite_graph};