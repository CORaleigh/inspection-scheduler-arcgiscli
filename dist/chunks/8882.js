(self.webpackChunkinspection_scheduler=self.webpackChunkinspection_scheduler||[]).push([[8882],{1427:(e,t,i)=>{"use strict";i.d(t,{d:()=>d});const n=new Float32Array(1);function a(e){return l(Math.max(-s,Math.min(e,s)))}function l(e){return n[0]=e,n[0]}const s=l(34028234663852886e22);var r={};r.defaultNoDataValue=a(-1/0),r.decode=function(e,t){var i=(t=t||{}).encodedMaskData||null===t.encodedMaskData,n=m(e,t.inputOffset||0,i),l=null!=t.noDataValue?a(t.noDataValue):r.defaultNoDataValue,s=o(n,t.pixelType||Float32Array,t.encodedMaskData,l,t.returnMask),c={width:n.width,height:n.height,pixelData:s.resultPixels,minValue:n.pixels.minValue,maxValue:n.pixels.maxValue,noDataValue:l};return s.resultMask&&(c.maskData=s.resultMask),t.returnEncodedMask&&n.mask&&(c.encodedMaskData=n.mask.bitset?n.mask.bitset:null),t.returnFileInfo&&(c.fileInfo=f(n,l),t.computeUsedBitDepths&&(c.fileInfo.bitDepths=u(n))),c};var o=function(e,t,i,n,a){var l,s,r=0,o=e.pixels.numBlocksX,f=e.pixels.numBlocksY,u=Math.floor(e.width/o),m=Math.floor(e.height/f),d=2*e.maxZError;i=i||(e.mask?e.mask.bitset:null),l=new t(e.width*e.height),a&&i&&(s=new Uint8Array(e.width*e.height));for(var h,g,k=new Float32Array(u*m),x=0;x<=f;x++){var p=x!==f?m:e.height%f;if(0!==p)for(var w=0;w<=o;w++){var y=w!==o?u:e.width%o;if(0!==y){var B,V,v,U,D=x*e.width*m+w*u,M=e.width-y,b=e.pixels.blocks[r];if(b.encoding<2?(0===b.encoding?B=b.rawData:(c(b.stuffedData,b.bitsPerPixel,b.numValidPixels,b.offset,d,k,e.pixels.maxValue),B=k),V=0):v=2===b.encoding?0:b.offset,i)for(g=0;g<p;g++){for(7&D&&(U=i[D>>3],U<<=7&D),h=0;h<y;h++)7&D||(U=i[D>>3]),128&U?(s&&(s[D]=1),l[D++]=b.encoding<2?B[V++]:v):(s&&(s[D]=0),l[D++]=n),U<<=1;D+=M}else if(b.encoding<2)for(g=0;g<p;g++){for(h=0;h<y;h++)l[D++]=B[V++];D+=M}else for(g=0;g<p;g++)if(l.fill)l.fill(v,D,D+y),D+=y+M;else{for(h=0;h<y;h++)l[D++]=v;D+=M}if(1===b.encoding&&V!==b.numValidPixels)throw"Block and Mask do not match";r++}}}return{resultPixels:l,resultMask:s}},f=function(e,t){return{fileIdentifierString:e.fileIdentifierString,fileVersion:e.fileVersion,imageType:e.imageType,height:e.height,width:e.width,maxZError:e.maxZError,eofOffset:e.eofOffset,mask:e.mask?{numBlocksX:e.mask.numBlocksX,numBlocksY:e.mask.numBlocksY,numBytes:e.mask.numBytes,maxValue:e.mask.maxValue}:null,pixels:{numBlocksX:e.pixels.numBlocksX,numBlocksY:e.pixels.numBlocksY,numBytes:e.pixels.numBytes,maxValue:e.pixels.maxValue,minValue:e.pixels.minValue,noDataValue:t}}},u=function(e){for(var t=e.pixels.numBlocksX*e.pixels.numBlocksY,i={},n=0;n<t;n++){var a=e.pixels.blocks[n];0===a.encoding?i.float32=!0:1===a.encoding?i[a.bitsPerPixel]=!0:i[0]=!0}return Object.keys(i)},m=function(e,t,i){var n={},a=new Uint8Array(e,t,10);if(n.fileIdentifierString=String.fromCharCode.apply(null,a),"CntZImage"!=n.fileIdentifierString.trim())throw"Unexpected file identifier string: "+n.fileIdentifierString;t+=10;var l=new DataView(e,t,24);if(n.fileVersion=l.getInt32(0,!0),n.imageType=l.getInt32(4,!0),n.height=l.getUint32(8,!0),n.width=l.getUint32(12,!0),n.maxZError=l.getFloat64(16,!0),t+=24,!i)if(l=new DataView(e,t,16),n.mask={},n.mask.numBlocksY=l.getUint32(0,!0),n.mask.numBlocksX=l.getUint32(4,!0),n.mask.numBytes=l.getUint32(8,!0),n.mask.maxValue=l.getFloat32(12,!0),t+=16,n.mask.numBytes>0){var s=new Uint8Array(Math.ceil(n.width*n.height/8)),r=(l=new DataView(e,t,n.mask.numBytes)).getInt16(0,!0),o=2,f=0;do{if(r>0)for(;r--;)s[f++]=l.getUint8(o++);else{var u=l.getUint8(o++);for(r=-r;r--;)s[f++]=u}r=l.getInt16(o,!0),o+=2}while(o<n.mask.numBytes);if(-32768!==r||f<s.length)throw"Unexpected end of mask RLE encoding";n.mask.bitset=s,t+=n.mask.numBytes}else 0==(n.mask.numBytes|n.mask.numBlocksY|n.mask.maxValue)&&(s=new Uint8Array(Math.ceil(n.width*n.height/8)),n.mask.bitset=s);l=new DataView(e,t,16),n.pixels={},n.pixels.numBlocksY=l.getUint32(0,!0),n.pixels.numBlocksX=l.getUint32(4,!0),n.pixels.numBytes=l.getUint32(8,!0),n.pixels.maxValue=l.getFloat32(12,!0),t+=16;var m=n.pixels.numBlocksX,c=n.pixels.numBlocksY,d=m+(n.width%m>0?1:0),h=c+(n.height%c>0?1:0);n.pixels.blocks=new Array(d*h);for(var g=1e9,k=0,x=0;x<h;x++)for(var p=0;p<d;p++){var w=0,y=e.byteLength-t;l=new DataView(e,t,Math.min(10,y));var B={};n.pixels.blocks[k++]=B;var V=l.getUint8(0);if(w++,B.encoding=63&V,B.encoding>3)throw"Invalid block encoding ("+B.encoding+")";if(2!==B.encoding){if(0!==V&&2!==V){if(V>>=6,B.offsetType=V,2===V)B.offset=l.getInt8(1),w++;else if(1===V)B.offset=l.getInt16(1,!0),w+=2;else{if(0!==V)throw"Invalid block offset type";B.offset=l.getFloat32(1,!0),w+=4}if(g=Math.min(B.offset,g),1===B.encoding)if(V=l.getUint8(w),w++,B.bitsPerPixel=63&V,V>>=6,B.numValidPixelsType=V,2===V)B.numValidPixels=l.getUint8(w),w++;else if(1===V)B.numValidPixels=l.getUint16(w,!0),w+=2;else{if(0!==V)throw"Invalid valid pixel count type";B.numValidPixels=l.getUint32(w,!0),w+=4}}var v;if(t+=w,3!=B.encoding)if(0===B.encoding){var U=(n.pixels.numBytes-1)/4;if(U!==Math.floor(U))throw"uncompressed block has invalid length";v=new ArrayBuffer(4*U),new Uint8Array(v).set(new Uint8Array(e,t,4*U));for(var D=new Float32Array(v),M=0;M<D.length;M++)g=Math.min(g,D[M]);B.rawData=D,t+=4*U}else if(1===B.encoding){var b=Math.ceil(B.numValidPixels*B.bitsPerPixel/8),I=Math.ceil(b/4);v=new ArrayBuffer(4*I),new Uint8Array(v).set(new Uint8Array(e,t,b)),B.stuffedData=new Uint32Array(v),t+=b}}else t++,g=Math.min(g,0)}return n.pixels.minValue=g,n.eofOffset=t,n},c=function(e,t,i,n,a,l,s){var r,o,f,u=(1<<t)-1,m=0,c=0,d=Math.ceil((s-n)/a),h=4*e.length-Math.ceil(t*i/8);for(e[e.length-1]<<=8*h,r=0;r<i;r++){if(0===c&&(f=e[m++],c=32),c>=t)o=f>>>c-t&u,c-=t;else{var g=t-c;o=(f&u)<<g&u,o+=(f=e[m++])>>>(c=32-g)}l[r]=o<d?n+o*a:s}return l};const d=r.decode},98882:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>s});var n=i(39105),a=i(1427);class l{_decode(e){const t=(0,a.d)(e.buffer,e.options);return(0,n.DB)({result:t,transferList:[t.pixelData.buffer]})}}const s=function(){return new l}}}]);
//# sourceMappingURL=8882.js.map