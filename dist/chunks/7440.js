(self.webpackChunkinspection_scheduler=self.webpackChunkinspection_scheduler||[]).push([[7440],{37440:(e,t,n)=>{"use strict";n.r(t),n.d(t,{destroyContext:()=>m,dracoDecompressPointCloudData:()=>b,filterObbsForModifications:()=>y,filterObbsForModificationsSync:()=>w,initialize:()=>A,interpretObbModificationResults:()=>g,process:()=>l,setLegacySchema:()=>h,setModifications:()=>d,setModificationsSync:()=>E,test:()=>L});var r=n(6962),o=n(59472),s=n(39105),i=n(12973);function f(e){return(0,i.V)(`esri/libs/i3s/${e}`)}let a,c,u;async function l(e){await A();const t=[e.geometryBuffer];return{result:p(e,t),transferList:t}}async function b(e){var t;await A();const n=[e.geometryBuffer],{geometryBuffer:o}=e,s=o.byteLength,i=u._malloc(s),f=new Uint8Array(u.HEAPU8.buffer,i,s);f.set(new Uint8Array(o));const a=u.dracoDecompressPointCloudData(i,f.byteLength);if(u._free(i),a.error.length>0)throw`i3s.wasm: ${a.error}`;const c=(null==(t=a.featureIds)?void 0:t.length)>0?(0,r.tP)(a.featureIds):null,l=(0,r.tP)(a.positions);return c&&n.push(c.buffer),n.push(l.buffer),{result:{positions:l,featureIds:c},transferList:n}}async function y(e){await A(),w(e);const t={buffer:e.buffer};return{result:t,transferList:[t.buffer]}}async function d(e){await A(),E(e)}async function h(e){await A(),u.setLegacySchema(e.context,e.jsonSchema)}function m(e){P(e)}function E(e){const t=e.modifications,n=u._malloc(8*t.length),r=new Float64Array(u.HEAPU8.buffer,n,t.length);for(let e=0;e<t.length;++e)r[e]=t[e];u.setModifications(e.context,n,t.length,e.isGeodetic),u._free(n)}function p(e,t){if(!u)return null;const{context:n,localOrigin:s,globalTrafo:i,mbs:f,obb:a,elevationOffset:c,geometryBuffer:l,geometryDescriptor:b,indexToVertexProjector:y,vertexToRenderProjector:d}=e,h=u._malloc(l.byteLength),m=u._malloc(33*Float64Array.BYTES_PER_ELEMENT),E=new Uint8Array(u.HEAPU8.buffer,h,l.byteLength);E.set(new Uint8Array(l));const p=new Float64Array(u.HEAPU8.buffer,m,33);_(p,s);let g=p.byteOffset+3*p.BYTES_PER_ELEMENT,w=new Float64Array(p.buffer,g);_(w,i),g+=16*p.BYTES_PER_ELEMENT,w=new Float64Array(p.buffer,g),_(w,f),g+=4*p.BYTES_PER_ELEMENT,(0,o.pC)(a)&&(w=new Float64Array(p.buffer,g),_(w,a.center),g+=3*p.BYTES_PER_ELEMENT,w=new Float64Array(p.buffer,g),_(w,a.halfSize),g+=3*p.BYTES_PER_ELEMENT,w=new Float64Array(p.buffer,g),_(w,a.quaternion));const P=b,A={isDraco:!1,isLegacy:!1,color:e.layouts.some((e=>e.some((e=>"color"===e.name)))),normal:e.needNormals&&e.layouts.some((e=>e.some((e=>"normalCompressed"===e.name)))),uv0:e.layouts.some((e=>e.some((e=>"uv0"===e.name)))),uvRegion:e.layouts.some((e=>e.some((e=>"uvRegion"===e.name)))),featureIndex:P.featureIndex},L=u.process(n,!!e.obb,h,E.byteLength,P,A,m,c,y,d,e.normalReferenceFrame);if(u._free(m),u._free(h),L.error.length>0)throw`i3s.wasm: ${L.error}`;if(L.discarded)return null;const T=L.componentOffsets.length>0?(0,r.tP)(L.componentOffsets):null,I=L.featureIds.length>0?(0,r.tP)(L.featureIds):null,F=(0,r.tP)(L.interleavedVertedData).buffer,M=1===L.indicesType?(0,r.tP)(new Uint16Array(L.indices.buffer,L.indices.byteOffset,L.indices.byteLength/2)):(0,r.tP)(new Uint32Array(L.indices.buffer,L.indices.byteOffset,L.indices.byteLength/4)),O=(0,r.tP)(L.positions),B=1===L.positionIndicesType?(0,r.tP)(new Uint16Array(L.positionIndices.buffer,L.positionIndices.byteOffset,L.positionIndices.byteLength/2)):(0,r.tP)(new Uint32Array(L.positionIndices.buffer,L.positionIndices.byteOffset,L.positionIndices.byteLength/4)),R={layout:e.layouts[0],interleavedVertexData:F,indices:M,hasColors:L.hasColors,hasModifications:L.hasModifications,positionData:{data:O,indices:B}};return I&&t.push(I.buffer),T&&t.push(T.buffer),t.push(F),t.push(M.buffer),t.push(O.buffer),t.push(B.buffer),{componentOffsets:T,featureIds:I,transformedGeometry:R,obb:L.obb}}function g(e){return 0===e?0:1===e?1:2===e?2:3}function w(e){const{context:t,buffer:n}=e,r=u._malloc(n.byteLength),o=n.byteLength/Float64Array.BYTES_PER_ELEMENT,s=new Float64Array(u.HEAPU8.buffer,r,o),i=new Float64Array(n);s.set(i),u.filterOBBs(t,r,o),i.set(s),u._free(r)}function P(e){u&&u.destroy(e)}function _(e,t){for(let n=0;n<t.length;++n)e[n]=t[n]}function A(){return u?(0,s.resolve)():(c||(c=(a||(a=(0,s.create)((e=>n.e(3155).then(n.bind(n,23155)).then((function(e){return e.i})).then((({default:t})=>{const n=t({locateFile:f,onRuntimeInitialized:()=>e(n)});delete n.then})))).catch((e=>(0,s.reject)(e)))),a).then((e=>{u=e,c=null}))),c)}const L={transform:p,destroy:P}}}]);
//# sourceMappingURL=7440.js.map