(self.webpackChunkinspection_scheduler=self.webpackChunkinspection_scheduler||[]).push([[9020,1012,995],{71012:(t,e,n)=>{"use strict";n.d(e,{b:()=>s,c:()=>r,g:()=>i});"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self&&self;function i(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function r(t,e,n){return t(n={path:e,exports:{},require:function(t,e){return s(null==e&&n.path)}},n.exports),n.exports}function s(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}},87040:(t,e,n)=>{"use strict";n.d(e,{q:()=>i});var i=(0,n(71012).c)((function(t){var e;void 0!==(e=function(){function t(n,i,r,s,a){for(;s>r;){if(s-r>600){var o=s-r+1,h=i-r+1,l=Math.log(o),c=.5*Math.exp(2*l/3),u=.5*Math.sqrt(l*c*(o-c)/o)*(h-o/2<0?-1:1);t(n,i,Math.max(r,Math.floor(i-h*c/o+u)),Math.min(s,Math.floor(i+(o-h)*c/o+u)),a)}var m=n[i],d=r,f=s;for(e(n,r,i),a(n[s],m)>0&&e(n,r,s);d<f;){for(e(n,d,f),d++,f--;a(n[d],m)<0;)d++;for(;a(n[f],m)>0;)f--}0===a(n[r],m)?e(n,r,f):e(n,++f,s),f<=i&&(r=f+1),i<=f&&(s=f-1)}}function e(t,e,n){var i=t[e];t[e]=t[n],t[n]=i}function n(t,e){return t<e?-1:t>e?1:0}return function(e,i,r,s,a){t(e,i,r||0,s||e.length-1,a||n)}}())&&(t.exports=e)}))},59020:(t,e,n)=>{"use strict";n.r(e),n.d(e,{ElevationSamplerWorker:()=>A,default:()=>E});var i=n(95830),r=n(59472),s=n(19677),a=n(62698),o=n(87040);class h{constructor(t=9,e){this.compareMinX=m,this.compareMinY=d,this.toBBox=function(t){return t},this._maxEntries=Math.max(4,t||9),this._minEntries=Math.max(2,Math.ceil(.4*this._maxEntries)),e&&("function"==typeof e?this.toBBox=e:this._initFormat(e)),this.clear()}destroy(){this.clear(),Y.prune(),_.prune(),B.prune(),w.prune()}all(t){this._all(this.data,t)}search(t,e){let n=this.data;const i=this.toBBox;if(g(t,n))for(Y.clear();n;){for(let r=0,s=n.children.length;r<s;r++){const s=n.children[r],a=n.leaf?i(s):s;g(t,a)&&(n.leaf?e(s):M(t,a)?this._all(s,e):Y.push(s))}n=Y.pop()}}collides(t){let e=this.data;const n=this.toBBox;if(!g(t,e))return!1;for(Y.clear();e;){for(let i=0,r=e.children.length;i<r;i++){const r=e.children[i],s=e.leaf?n(r):r;if(g(t,s)){if(e.leaf||M(t,s))return!0;Y.push(r)}}e=Y.pop()}return!1}load(t,e=t.length){if(!e)return this;if(e<this._minEntries){for(let n=0,i=e;n<i;n++)this.insert(t[n]);return this}let n=this._build(t.slice(0,e),0,e-1,0);if(this.data.children.length)if(this.data.height===n.height)this._splitRoot(this.data,n);else{if(this.data.height<n.height){const t=this.data;this.data=n,n=t}this._insert(n,this.data.height-n.height-1,!0)}else this.data=n;return this}insert(t){return t&&this._insert(t,this.data.height-1),this}clear(){return this.data=new v([]),this}remove(t){if(!t)return this;let e,n=this.data,i=null,a=0,o=!1;const h=this.toBBox(t);for(B.clear(),w.clear();n||B.length>0;){var l;if(n||(n=(0,r.j0)(B.pop()),i=B.data[B.length-1],a=null!=(l=w.pop())?l:0,o=!0),n.leaf&&(e=(0,s.cq)(n.children,t,n.children.length,n.indexHint),-1!==e))return n.children.splice(e,1),B.push(n),this._condense(B),this;o||n.leaf||!M(n,h)?i?(a++,n=i.children[a],o=!1):n=null:(B.push(n),w.push(a),a=0,i=n,n=n.children[0])}return this}toJSON(){return this.data}fromJSON(t){return this.data=t,this}_all(t,e){let n=t;for(_.clear();n;){var i;if(!0===n.leaf)for(const t of n.children)e(t);else _.pushArray(n.children);n=null!=(i=_.pop())?i:null}}_build(t,e,n,i){const r=n-e+1;let s=this._maxEntries;if(r<=s){const i=new v(t.slice(e,n+1));return l(i,this.toBBox),i}i||(i=Math.ceil(Math.log(r)/Math.log(s)),s=Math.ceil(r/Math.pow(s,i-1)));const a=new y([]);a.height=i;const o=Math.ceil(r/s),h=o*Math.ceil(Math.sqrt(s));X(t,e,n,h,this.compareMinX);for(let r=e;r<=n;r+=h){const e=Math.min(r+h-1,n);X(t,r,e,o,this.compareMinY);for(let n=r;n<=e;n+=o){const r=Math.min(n+o-1,e);a.children.push(this._build(t,n,r,i-1))}}return l(a,this.toBBox),a}_chooseSubtree(t,e,n,i){for(;i.push(e),!0!==e.leaf&&i.length-1!==n;){let n,i=1/0,a=1/0;for(let o=0,h=e.children.length;o<h;o++){const h=e.children[o],l=f(h),c=(r=t,s=h,(Math.max(s.maxX,r.maxX)-Math.min(s.minX,r.minX))*(Math.max(s.maxY,r.maxY)-Math.min(s.minY,r.minY))-l);c<a?(a=c,i=l<i?l:i,n=h):c===a&&l<i&&(i=l,n=h)}e=n||e.children[0]}var r,s;return e}_insert(t,e,n){const i=this.toBBox,r=n?t:i(t);B.clear();const s=this._chooseSubtree(r,this.data,e,B);for(s.children.push(t),u(s,r);e>=0&&B.data[e].children.length>this._maxEntries;)this._split(B,e),e--;this._adjustParentBBoxes(r,B,e)}_split(t,e){const n=t.data[e],i=n.children.length,r=this._minEntries;this._chooseSplitAxis(n,r,i);const s=this._chooseSplitIndex(n,r,i);if(!s)return void console.log("  Error: assertion failed at PooledRBush._split: no valid split index");const a=n.children.splice(s,n.children.length-s),o=n.leaf?new v(a):new y(a);o.height=n.height,l(n,this.toBBox),l(o,this.toBBox),e?t.data[e-1].children.push(o):this._splitRoot(n,o)}_splitRoot(t,e){this.data=new y([t,e]),this.data.height=t.height+1,l(this.data,this.toBBox)}_chooseSplitIndex(t,e,n){let i,r,s;i=r=1/0;for(let a=e;a<=n-e;a++){const e=c(t,0,a,this.toBBox),o=c(t,a,n,this.toBBox),h=x(e,o),l=f(e)+f(o);h<i?(i=h,s=a,r=l<r?l:r):h===i&&l<r&&(r=l,s=a)}return s}_chooseSplitAxis(t,e,n){const i=t.leaf?this.compareMinX:m,r=t.leaf?this.compareMinY:d;this._allDistMargin(t,e,n,i)<this._allDistMargin(t,e,n,r)&&t.children.sort(i)}_allDistMargin(t,e,n,i){t.children.sort(i);const r=this.toBBox,s=c(t,0,e,r),a=c(t,n-e,n,r);let o=p(s)+p(a);for(let i=e;i<n-e;i++){const e=t.children[i];u(s,t.leaf?r(e):e),o+=p(s)}for(let i=n-e-1;i>=e;i--){const e=t.children[i];u(a,t.leaf?r(e):e),o+=p(a)}return o}_adjustParentBBoxes(t,e,n){for(let i=n;i>=0;i--)u(e.data[i],t)}_condense(t){for(let e=t.length-1;e>=0;e--){const n=t.data[e];if(0===n.children.length)if(e>0){const i=t.data[e-1],r=i.children;r.splice((0,s.cq)(r,n,r.length,i.indexHint),1)}else this.clear();else l(n,this.toBBox)}}_initFormat(t){const e=["return a"," - b",";"];this.compareMinX=new Function("a","b",e.join(t[0])),this.compareMinY=new Function("a","b",e.join(t[1])),this.toBBox=new Function("a","return {minX: a"+t[0]+", minY: a"+t[1]+", maxX: a"+t[2]+", maxY: a"+t[3]+"};")}}function l(t,e){c(t,0,t.children.length,e,t)}function c(t,e,n,i,r){r||(r=new v([])),r.minX=1/0,r.minY=1/0,r.maxX=-1/0,r.maxY=-1/0;for(let s,a=e;a<n;a++)s=t.children[a],u(r,t.leaf?i(s):s);return r}function u(t,e){t.minX=Math.min(t.minX,e.minX),t.minY=Math.min(t.minY,e.minY),t.maxX=Math.max(t.maxX,e.maxX),t.maxY=Math.max(t.maxY,e.maxY)}function m(t,e){return t.minX-e.minX}function d(t,e){return t.minY-e.minY}function f(t){return(t.maxX-t.minX)*(t.maxY-t.minY)}function p(t){return t.maxX-t.minX+(t.maxY-t.minY)}function x(t,e){const n=Math.max(t.minX,e.minX),i=Math.max(t.minY,e.minY),r=Math.min(t.maxX,e.maxX),s=Math.min(t.maxY,e.maxY);return Math.max(0,r-n)*Math.max(0,s-i)}function M(t,e){return t.minX<=e.minX&&t.minY<=e.minY&&e.maxX<=t.maxX&&e.maxY<=t.maxY}function g(t,e){return e.minX<=t.maxX&&e.minY<=t.maxY&&e.maxX>=t.minX&&e.maxY>=t.minY}function X(t,e,n,i,s){const a=[e,n];for(;a.length;){const e=(0,r.j0)(a.pop()),n=(0,r.j0)(a.pop());if(e-n<=i)continue;const h=n+Math.ceil((e-n)/i/2)*i;(0,o.q)(t,h,n,e,s),a.push(n,h,h,e)}}const Y=new a.Z,_=new a.Z,B=new a.Z,w=new a.Z({deallocator:void 0});class b extends class{constructor(){this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0}}{constructor(){super(...arguments),this.height=1,this.indexHint=new s.SO}}class v extends b{constructor(t){super(),this.children=t,this.leaf=!0}}class y extends b{constructor(t){super(),this.children=t,this.leaf=!1}}class A{async createIndex(t,e){const n=new Array;if(!t.vertexAttributes||!t.vertexAttributes.position)return new h;const i=this.createMeshData(t),s=(0,r.pC)(e)?await e.invoke("createIndexThread",i,{transferList:n}):this.createIndexThread(i).result;return this.createPooledRBush().fromJSON(s)}createIndexThread(t){const e=new Float64Array(t.position),n=this.createPooledRBush();return t.components?this.createIndexComponentsThread(n,e,t.components.map((t=>new Uint32Array(t)))):this.createIndexAllThread(n,e)}createIndexAllThread(t,e){const n=new Array(e.length/9);let i=0;for(let t=0;t<e.length;t+=9)n[i++]=S(e,t+0,t+3,t+6);return t.load(n),{result:t.toJSON()}}createIndexComponentsThread(t,e,n){let i=0;for(const t of n)i+=t.length/3;const r=new Array(i);let s=0;for(const t of n)for(let n=0;n<t.length;n+=3)r[s++]=S(e,3*t[n+0],3*t[n+1],3*t[n+2]);return t.load(r),{result:t.toJSON()}}createMeshData(t){const e=t.vertexAttributes.position.buffer;return!t.components||t.components.some((t=>!t.faces))?{position:e}:{position:e,components:t.components.map((t=>t.faces))}}createPooledRBush(){return new h(9,(0,i.Z)("csp-restrictions")?t=>t:[".minX",".minY",".maxX",".maxY"])}}function S(t,e,n,i){return{minX:Math.min(t[e+0],t[n+0],t[i+0]),maxX:Math.max(t[e+0],t[n+0],t[i+0]),minY:Math.min(t[e+1],t[n+1],t[i+1]),maxY:Math.max(t[e+1],t[n+1],t[i+1]),p0:[t[e+0],t[e+1],t[e+2]],p1:[t[n+0],t[n+1],t[n+2]],p2:[t[i+0],t[i+1],t[i+2]]}}const E=A}}]);
//# sourceMappingURL=9020.js.map