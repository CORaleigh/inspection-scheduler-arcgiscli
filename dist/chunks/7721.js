(self.webpackChunkinspection_scheduler=self.webpackChunkinspection_scheduler||[]).push([[7721],{7721:(n,r,t)=>{"use strict";t.r(r),t.d(r,{registerFunctions:()=>A});var e=t(39718),i=t(61106),u=t(52937),o=t(3470),l=t(53817),c=t(93833),a=t(56885),f=t(23838),s=t(45674),g=t(3181),w=t(28022),h=t(18136);function d(n){return 0===f.i8.indexOf("4.")?l.Z.fromExtent(n):new l.Z({spatialReference:n.spatialReference,rings:[[[n.xmin,n.ymin],[n.xmin,n.ymax],[n.xmax,n.ymax],[n.xmax,n.ymin],[n.xmin,n.ymin]]]})}function p(n){if((0,s.p)(n,2,2),n[0]instanceof e.Z&&n[1]instanceof e.Z);else if(n[0]instanceof e.Z&&null===n[1]);else if(n[1]instanceof e.Z&&null===n[0]);else if(null!==n[0]||null!==n[1])throw new Error("Illegal Argument")}function A(n){"async"===n.mode&&(n.functions.disjoint=function(r,t){return n.standardFunctionAsync(r,t,(function(n,r,t){return p(t=(0,s.J)(t)),null===t[0]||null===t[1]||(0,h.ED)(t[0],t[1])}))},n.functions.intersects=function(r,t){return n.standardFunctionAsync(r,t,(function(n,r,t){return p(t=(0,s.J)(t)),null!==t[0]&&null!==t[1]&&(0,h.kK)(t[0],t[1])}))},n.functions.touches=function(r,t){return n.standardFunctionAsync(r,t,(function(n,r,t){return p(t=(0,s.J)(t)),null!==t[0]&&null!==t[1]&&(0,h.W4)(t[0],t[1])}))},n.functions.crosses=function(r,t){return n.standardFunctionAsync(r,t,(function(n,r,t){return p(t=(0,s.J)(t)),null!==t[0]&&null!==t[1]&&(0,h.jU)(t[0],t[1])}))},n.functions.within=function(r,t){return n.standardFunctionAsync(r,t,(function(n,r,t){return p(t=(0,s.J)(t)),null!==t[0]&&null!==t[1]&&(0,h.uh)(t[0],t[1])}))},n.functions.contains=function(r,t){return n.standardFunctionAsync(r,t,(function(n,r,t){return p(t=(0,s.J)(t)),null!==t[0]&&null!==t[1]&&(0,h.r3)(t[0],t[1])}))},n.functions.overlaps=function(r,t){return n.standardFunctionAsync(r,t,(function(n,r,t){return p(t=(0,s.J)(t)),null!==t[0]&&null!==t[1]&&(0,h.Nm)(t[0],t[1])}))},n.functions.equals=function(r,t){return n.standardFunctionAsync(r,t,(function(n,r,t){return(0,s.p)(t,2,2),t[0]===t[1]||(t[0]instanceof e.Z&&t[1]instanceof e.Z?(0,h.fS)(t[0],t[1]):!(!(0,s.f)(t[0])||!(0,s.f)(t[1]))&&t[0].getTime()===t[1].getTime())}))},n.functions.relate=function(r,t){return n.standardFunctionAsync(r,t,(function(n,r,t){if(t=(0,s.J)(t),(0,s.p)(t,3,3),t[0]instanceof e.Z&&t[1]instanceof e.Z)return(0,h.LV)(t[0],t[1],(0,s.e)(t[2]));if(t[0]instanceof e.Z&&null===t[1])return!1;if(t[1]instanceof e.Z&&null===t[0])return!1;if(null===t[0]&&null===t[1])return!1;throw new Error("Illegal Argument")}))},n.functions.intersection=function(r,t){return n.standardFunctionAsync(r,t,(function(n,r,t){return p(t=(0,s.J)(t)),null===t[0]||null===t[1]?null:(0,h.wf)(t[0],t[1])}))},n.functions.union=function(r,t){return n.standardFunctionAsync(r,t,(function(n,t,i){const u=[];if(0===(i=(0,s.J)(i)).length)throw new Error("Function called with wrong number of Parameters");if(1===i.length)if((0,s.h)(i[0])){const n=(0,s.J)(i[0]);for(let r=0;r<n.length;r++)if(null!==n[r]){if(!(n[r]instanceof e.Z))throw new Error("Illegal Argument");u.push(n[r])}}else{if(!(0,s.o)(i[0])){if(i[0]instanceof e.Z)return(0,s.r)((0,w.r1)(i[0]),r.spatialReference);if(null===i[0])return null;throw new Error("Illegal Argument")}{const n=(0,s.J)(i[0].toArray());for(let r=0;r<n.length;r++)if(null!==n[r]){if(!(n[r]instanceof e.Z))throw new Error("Illegal Argument");u.push(n[r])}}}else for(let n=0;n<i.length;n++)if(null!==i[n]){if(!(i[n]instanceof e.Z))throw new Error("Illegal Argument");u.push(i[n])}return 0===u.length?null:(0,h.G0)(u)}))},n.functions.difference=function(r,t){return n.standardFunctionAsync(r,t,(function(n,r,t){return p(t=(0,s.J)(t)),null!==t[0]&&null===t[1]?(0,w.r1)(t[0]):null===t[0]?null:(0,h.e5)(t[0],t[1])}))},n.functions.symmetricdifference=function(r,t){return n.standardFunctionAsync(r,t,(function(n,r,t){return p(t=(0,s.J)(t)),null===t[0]&&null===t[1]?null:null===t[0]?(0,w.r1)(t[1]):null===t[1]?(0,w.r1)(t[0]):(0,h.Sp)(t[0],t[1])}))},n.functions.clip=function(r,t){return n.standardFunctionAsync(r,t,(function(n,r,t){if(t=(0,s.J)(t),(0,s.p)(t,2,2),!(t[1]instanceof u.Z)&&null!==t[1])throw new Error("Illegal Argument");if(null===t[0])return null;if(!(t[0]instanceof e.Z))throw new Error("Illegal Argument");return null===t[1]?null:(0,h.oq)(t[0],t[1])}))},n.functions.cut=function(r,t){return n.standardFunctionAsync(r,t,(function(n,r,t){if(t=(0,s.J)(t),(0,s.p)(t,2,2),!(t[1]instanceof c.Z)&&null!==t[1])throw new Error("Illegal Argument");if(null===t[0])return[];if(!(t[0]instanceof e.Z))throw new Error("Illegal Argument");return null===t[1]?[(0,w.r1)(t[0])]:(0,h.z7)(t[0],t[1])}))},n.functions.area=function(r,t){return n.standardFunctionAsync(r,t,(function(n,t,i){if((0,s.p)(i,1,2),null===(i=(0,s.J)(i))[0])return 0;if((0,s.z)(i[0]))return i[0].sumArea((0,w.EI)((0,s.C)(i[1],-1)),!1,r.abortSignal).then((n=>{if(r.abortSignal.aborted)throw new Error("Operation has been cancelled.");return n}));if((0,s.h)(i[0])||(0,s.o)(i[0])){const n=(0,s.L)(i[0],r.spatialReference);return null===n?0:(0,h.CJ)(n,(0,w.EI)((0,s.C)(i[1],-1)))}if(!(i[0]instanceof e.Z))throw new Error("Illegal Argument");return(0,h.CJ)(i[0],(0,w.EI)((0,s.C)(i[1],-1)))}))},n.functions.areageodetic=function(r,t){return n.standardFunctionAsync(r,t,(function(n,t,i){if((0,s.p)(i,1,2),null===(i=(0,s.J)(i))[0])return 0;if((0,s.z)(i[0]))return i[0].sumArea((0,w.EI)((0,s.C)(i[1],-1)),!0,r.abortSignal).then((n=>{if(r.abortSignal.aborted)throw new Error("Operation has been cancelled.");return n}));if((0,s.h)(i[0])||(0,s.o)(i[0])){const n=(0,s.L)(i[0],r.spatialReference);return null===n?0:(0,h.Y4)(n,(0,w.EI)((0,s.C)(i[1],-1)))}if(!(i[0]instanceof e.Z))throw new Error("Illegal Argument");return(0,h.Y4)(i[0],(0,w.EI)((0,s.C)(i[1],-1)))}))},n.functions.length=function(r,t){return n.standardFunctionAsync(r,t,(function(n,t,i){if((0,s.p)(i,1,2),null===(i=(0,s.J)(i))[0])return 0;if((0,s.z)(i[0]))return i[0].sumLength((0,w.Lz)((0,s.C)(i[1],-1)),!1,r.abortSignal).then((n=>{if(r.abortSignal.aborted)throw new Error("Operation has been cancelled.");return n}));if((0,s.h)(i[0])||(0,s.o)(i[0])){const n=(0,s.K)(i[0],r.spatialReference);return null===n?0:(0,h.sz)(n,(0,w.Lz)((0,s.C)(i[1],-1)))}if(!(i[0]instanceof e.Z))throw new Error("Illegal Argument");return(0,h.sz)(i[0],(0,w.Lz)((0,s.C)(i[1],-1)))}))},n.functions.lengthgeodetic=function(r,t){return n.standardFunctionAsync(r,t,(function(n,t,i){if((0,s.p)(i,1,2),null===(i=(0,s.J)(i))[0])return 0;if((0,s.z)(i[0]))return i[0].sumLength((0,w.Lz)((0,s.C)(i[1],-1)),!0,r.abortSignal).then((n=>{if(r.abortSignal.aborted)throw new Error("Operation has been cancelled.");return n}));if((0,s.h)(i[0])||(0,s.o)(i[0])){const n=(0,s.K)(i[0],r.spatialReference);return null===n?0:(0,h.kQ)(n,(0,w.Lz)((0,s.C)(i[1],-1)))}if(!(i[0]instanceof e.Z))throw new Error("Illegal Argument");return(0,h.kQ)(i[0],(0,w.Lz)((0,s.C)(i[1],-1)))}))},n.functions.distance=function(r,t){return n.standardFunctionAsync(r,t,(function(n,t,i){i=(0,s.J)(i),(0,s.p)(i,2,3);let u=i[0];((0,s.h)(i[0])||(0,s.o)(i[0]))&&(u=(0,s.O)(i[0],r.spatialReference));let o=i[1];if(((0,s.h)(i[1])||(0,s.o)(i[1]))&&(o=(0,s.O)(i[1],r.spatialReference)),!(u instanceof e.Z))throw new Error("Illegal Argument");if(!(o instanceof e.Z))throw new Error("Illegal Argument");return(0,h.TE)(u,o,(0,w.Lz)((0,s.C)(i[2],-1)))}))},n.functions.distancegeodetic=function(r,t){return n.standardFunctionAsync(r,t,(function(n,r,t){t=(0,s.J)(t),(0,s.p)(t,2,3);const e=t[0],u=t[1];if(!(e instanceof i.Z))throw new Error("Illegal Argument");if(!(u instanceof i.Z))throw new Error("Illegal Argument");const o=new c.Z({paths:[],spatialReference:e.spatialReference});return o.addPath([e,u]),(0,h.kQ)(o,(0,w.Lz)((0,s.C)(t[2],-1)))}))},n.functions.densify=function(r,t){return n.standardFunctionAsync(r,t,(function(n,r,t){if(t=(0,s.J)(t),(0,s.p)(t,2,3),null===t[0])return null;if(!(t[0]instanceof e.Z))throw new Error("Illegal Argument");const i=(0,s.c)(t[1]);if(isNaN(i))throw new Error("Illegal Argument");if(i<=0)throw new Error("Illegal Argument");return t[0]instanceof l.Z||t[0]instanceof c.Z?(0,h.Cz)(t[0],i,(0,w.Lz)((0,s.C)(t[2],-1))):t[0]instanceof u.Z?(0,h.Cz)(d(t[0]),i,(0,w.Lz)((0,s.C)(t[2],-1))):t[0]}))},n.functions.densifygeodetic=function(r,t){return n.standardFunctionAsync(r,t,(function(n,r,t){if(t=(0,s.J)(t),(0,s.p)(t,2,3),null===t[0])return null;if(!(t[0]instanceof e.Z))throw new Error("Illegal Argument");const i=(0,s.c)(t[1]);if(isNaN(i))throw new Error("Illegal Argument");if(i<=0)throw new Error("Illegal Argument");return t[0]instanceof l.Z||t[0]instanceof c.Z?(0,h.j2)(t[0],i,(0,w.Lz)((0,s.C)(t[2],-1))):t[0]instanceof u.Z?(0,h.j2)(d(t[0]),i,(0,w.Lz)((0,s.C)(t[2],-1))):t[0]}))},n.functions.generalize=function(r,t){return n.standardFunctionAsync(r,t,(function(n,r,t){if(t=(0,s.J)(t),(0,s.p)(t,2,4),null===t[0])return null;if(!(t[0]instanceof e.Z))throw new Error("Illegal Argument");const i=(0,s.c)(t[1]);if(isNaN(i))throw new Error("Illegal Argument");return(0,h.D$)(t[0],i,(0,s.d)((0,s.C)(t[2],!0)),(0,w.Lz)((0,s.C)(t[3],-1)))}))},n.functions.buffer=function(r,t){return n.standardFunctionAsync(r,t,(function(n,r,t){if(t=(0,s.J)(t),(0,s.p)(t,2,3),null===t[0])return null;if(!(t[0]instanceof e.Z))throw new Error("Illegal Argument");const i=(0,s.c)(t[1]);if(isNaN(i))throw new Error("Illegal Argument");return 0===i?(0,w.r1)(t[0]):(0,h.f3)(t[0],i,(0,w.Lz)((0,s.C)(t[2],-1)))}))},n.functions.buffergeodetic=function(r,t){return n.standardFunctionAsync(r,t,(function(n,r,t){if(t=(0,s.J)(t),(0,s.p)(t,2,3),null===t[0])return null;if(!(t[0]instanceof e.Z))throw new Error("Illegal Argument");const i=(0,s.c)(t[1]);if(isNaN(i))throw new Error("Illegal Argument");return 0===i?(0,w.r1)(t[0]):(0,h.rd)(t[0],i,(0,w.Lz)((0,s.C)(t[2],-1)))}))},n.functions.offset=function(r,t){return n.standardFunctionAsync(r,t,(function(n,r,t){if(t=(0,s.J)(t),(0,s.p)(t,2,6),null===t[0])return null;if(!(t[0]instanceof l.Z||t[0]instanceof c.Z))throw new Error("Illegal Argument");const e=(0,s.c)(t[1]);if(isNaN(e))throw new Error("Illegal Argument");const i=(0,s.c)((0,s.C)(t[4],10));if(isNaN(i))throw new Error("Illegal Argument");const u=(0,s.c)((0,s.C)(t[5],0));if(isNaN(u))throw new Error("Illegal Argument");return(0,h.cv)(t[0],e,(0,w.Lz)((0,s.C)(t[2],-1)),(0,s.e)((0,s.C)(t[3],"round")).toLowerCase(),i,u)}))},n.functions.rotate=function(r,t){return n.standardFunctionAsync(r,t,(function(n,r,t){t=(0,s.J)(t),(0,s.p)(t,2,3);let o=t[0];if(null===o)return null;if(!(o instanceof e.Z))throw new Error("Illegal Argument");o instanceof u.Z&&(o=l.Z.fromExtent(o));const c=(0,s.c)(t[1]);if(isNaN(c))throw new Error("Illegal Argument");const a=(0,s.C)(t[2],null);if(null===a)return(0,h.U1)(o,c);if(a instanceof i.Z)return(0,h.U1)(o,c,a);throw new Error("Illegal Argument")}))},n.functions.centroid=function(r,t){return n.standardFunctionAsync(r,t,(function(n,t,a){if(a=(0,s.J)(a),(0,s.p)(a,1,1),null===a[0])return null;let f=a[0];if(((0,s.h)(a[0])||(0,s.o)(a[0]))&&(f=(0,s.O)(a[0],r.spatialReference)),null===f)return null;if(!(f instanceof e.Z))throw new Error("Illegal Argument");return f instanceof i.Z?(0,s.r)((0,w.r1)(a[0]),r.spatialReference):f instanceof l.Z?f.centroid:f instanceof c.Z?(0,g.s9)(f):f instanceof o.Z?(0,g.Ay)(f):f instanceof u.Z?f.center:null}))},n.functions.multiparttosinglepart=function(r,t){return n.standardFunctionAsync(r,t,(function(n,t,f){f=(0,s.J)(f),(0,s.p)(f,1,1);const g=[];if(null===f[0])return null;if(!(f[0]instanceof e.Z))throw new Error("Illegal Argument");return f[0]instanceof i.Z||f[0]instanceof u.Z?[(0,s.r)((0,w.r1)(f[0]),r.spatialReference)]:(0,h.og)(f[0]).then((n=>{if(n instanceof l.Z){const r=[],t=[];for(let e=0;e<n.rings.length;e++)if(n.isClockwise(n.rings[e])){const t=(0,a.im)({rings:[n.rings[e]],hasZ:!0===n.hasZ,hazM:!0===n.hasM,spatialReference:n.spatialReference.toJSON()});r.push(t)}else t.push({ring:n.rings[e],pt:n.getPoint(e,0)});for(let n=0;n<t.length;n++)for(let e=0;e<r.length;e++)if(r[e].contains(t[n].pt)){r[e].addRing(t[n].ring);break}return r}if(n instanceof c.Z){const r=[];for(let t=0;t<n.paths.length;t++){const e=(0,a.im)({paths:[n.paths[t]],hasZ:!0===n.hasZ,hazM:!0===n.hasM,spatialReference:n.spatialReference.toJSON()});r.push(e)}return r}if(f[0]instanceof o.Z){const n=(0,s.r)((0,w.r1)(f[0]),r.spatialReference);for(let r=0;r<n.points.length;r++)g.push(n.getPoint(r));return g}return null}))}))},n.functions.issimple=function(r,t){return n.standardFunctionAsync(r,t,(function(n,r,t){if(t=(0,s.J)(t),(0,s.p)(t,1,1),null===t[0])return!0;if(!(t[0]instanceof e.Z))throw new Error("Illegal Argument");return(0,h.Gg)(t[0])}))},n.functions.simplify=function(r,t){return n.standardFunctionAsync(r,t,(function(n,r,t){if(t=(0,s.J)(t),(0,s.p)(t,1,1),null===t[0])return null;if(!(t[0]instanceof e.Z))throw new Error("Illegal Argument");return(0,h.og)(t[0])}))})}},18136:(n,r,t)=>{"use strict";t.d(r,{f3:()=>N,oq:()=>f,r3:()=>g,jU:()=>w,z7:()=>s,Cz:()=>O,e5:()=>C,ED:()=>y,TE:()=>h,fS:()=>d,D$:()=>k,Y4:()=>G,rd:()=>R,j2:()=>v,kQ:()=>U,wf:()=>z,kK:()=>p,Gg:()=>I,cv:()=>L,Nm:()=>Z,CJ:()=>j,sz:()=>D,LV:()=>E,U1:()=>x,og:()=>J,Sp:()=>F,W4:()=>A,G0:()=>b,uh:()=>m});t(61106);var e=t(56885),i=(t(36348),t(46627));function u(n){var r;return Array.isArray(n)?null==(r=n[0])?void 0:r.spatialReference:null==n?void 0:n.spatialReference}function o(n){return n?Array.isArray(n)?n.map(o):n.toJSON?n.toJSON():n:n}function l(n){return Array.isArray(n)?n.map((n=>(0,e.im)(n))):(0,e.im)(n)}let c;async function a(n,r){return(await async function(){return c||(c=(0,i.bA)("geometryEngineWorker",{strategy:"distributed"})),c}()).invoke("executeGEOperation",{operation:n,parameters:o(r)})}async function f(n,r){return l(await a("clip",[u(n),n,r]))}async function s(n,r){return l(await a("cut",[u(n),n,r]))}function g(n,r){return a("contains",[u(n),n,r])}function w(n,r){return a("crosses",[u(n),n,r])}function h(n,r,t){return a("distance",[u(n),n,r,t])}function d(n,r){return a("equals",[u(n),n,r])}function p(n,r){return a("intersects",[u(n),n,r])}function A(n,r){return a("touches",[u(n),n,r])}function m(n,r){return a("within",[u(n),n,r])}function y(n,r){return a("disjoint",[u(n),n,r])}function Z(n,r){return a("overlaps",[u(n),n,r])}function E(n,r,t){return a("relate",[u(n),n,r,t])}function I(n){return a("isSimple",[u(n),n])}async function J(n){return l(await a("simplify",[u(n),n]))}async function C(n,r){return l(await a("difference",[u(n),n,r]))}async function F(n,r){return l(await a("symmetricDifference",[u(n),n,r]))}async function z(n,r){return l(await a("intersect",[u(n),n,r]))}async function b(n,r=null){const t=function(n,r){let t;return Array.isArray(n)?t=n:(t=[],t.push(n),null!=r&&t.push(r)),t}(n,r);return l(await a("union",[u(t),t]))}async function L(n,r,t,e,i,o){return l(await a("offset",[u(n),n,r,t,e,i,o]))}async function N(n,r,t,e=!1){const i=[u(n),n,r,t,e];return l(await a("buffer",i))}async function R(n,r,t,e,i,o){const c=[u(n),n,r,t,e,i,o];return l(await a("geodesicBuffer",c))}function S(n){return"xmin"in n?n.center:"x"in n?n:n.extent.center}async function x(n,r,t){var e;if(null==n)throw new Error("Illegal Argument Exception");const i=n.spatialReference;t=null!=(e=t)?e:S(n);const u=n.constructor.fromJSON(await a("rotate",[i,n,r,t]));return u.spatialReference=i,u}async function k(n,r,t,e){return l(await a("generalize",[u(n),n,r,t,e]))}async function O(n,r,t){return l(await a("densify",[u(n),n,r,t]))}async function v(n,r,t,e=0){return l(await a("geodesicDensify",[u(n),n,r,t,e]))}function j(n,r){return a("planarArea",[u(n),n,r])}function D(n,r){return a("planarLength",[u(n),n,r])}function G(n,r,t){return a("geodesicArea",[u(n),n,r,t])}function U(n,r,t){return a("geodesicLength",[u(n),n,r,t])}}}]);
//# sourceMappingURL=7721.js.map