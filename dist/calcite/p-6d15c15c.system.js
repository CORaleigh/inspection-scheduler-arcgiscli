var __extends=this&&this.__extends||function(){var e=function(t,r){e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)if(Object.prototype.hasOwnProperty.call(t,r))e[r]=t[r]};return e(t,r)};return function(t,r){if(typeof r!=="function"&&r!==null)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");e(t,r);function n(){this.constructor=t}t.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}();var __awaiter=this&&this.__awaiter||function(e,t,r,n){function a(e){return e instanceof r?e:new r((function(t){t(e)}))}return new(r||(r=Promise))((function(r,i){function s(e){try{o(n.next(e))}catch(t){i(t)}}function l(e){try{o(n["throw"](e))}catch(t){i(t)}}function o(e){e.done?r(e.value):a(e.value).then(s,l)}o((n=n.apply(e,t||[])).next())}))};var __generator=this&&this.__generator||function(e,t){var r={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},n,a,i,s;return s={next:l(0),throw:l(1),return:l(2)},typeof Symbol==="function"&&(s[Symbol.iterator]=function(){return this}),s;function l(e){return function(t){return o([e,t])}}function o(s){if(n)throw new TypeError("Generator is already executing.");while(r)try{if(n=1,a&&(i=s[0]&2?a["return"]:s[0]?a["throw"]||((i=a["return"])&&i.call(a),0):a.next)&&!(i=i.call(a,s[1])).done)return i;if(a=0,i)s=[s[0]&2,i.value];switch(s[0]){case 0:case 1:i=s;break;case 4:r.label++;return{value:s[1],done:false};case 5:r.label++;a=s[1];s=[0];continue;case 7:s=r.ops.pop();r.trys.pop();continue;default:if(!(i=r.trys,i=i.length>0&&i[i.length-1])&&(s[0]===6||s[0]===2)){r=0;continue}if(s[0]===3&&(!i||s[1]>i[0]&&s[1]<i[3])){r.label=s[1];break}if(s[0]===6&&r.label<i[1]){r.label=i[1];i=s;break}if(i&&r.label<i[2]){r.label=i[2];r.ops.push(s);break}if(i[2])r.ops.pop();r.trys.pop();continue}s=t.call(e,r)}catch(l){s=[6,l];a=0}finally{n=i=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:true}}};var __spreadArray=this&&this.__spreadArray||function(e,t){for(var r=0,n=t.length,a=e.length;r<n;r++,a++)e[a]=t[r];return e};System.register([],(function(e,t){"use strict";return{execute:function(){var r=this;var n=e("N","calcite");var a;var i;var s;var l=false;var o=false;var $=false;var f=false;var u=false;var c=e("w",typeof window!=="undefined"?window:{});var v=e("C",c.CSS);var d=e("d",c.document||{head:{}});var h=e("p",{$flags$:0,$resourcesUrl$:"",jmp:function(e){return e()},raf:function(e){return requestAnimationFrame(e)},ael:function(e,t,r,n){return e.addEventListener(t,r,n)},rel:function(e,t,r,n){return e.removeEventListener(t,r,n)},ce:function(e,t){return new CustomEvent(e,t)}});var p=function(){return(d.head.attachShadow+"").indexOf("[native")>-1}();var m=e("a",(function(e){return Promise.resolve(e)}));var g=function(){try{new CSSStyleSheet;return typeof(new CSSStyleSheet).replace==="function"}catch(e){}return false}();var y=function(e,t,r,n){if(r){r.map((function(r){var n=r[0],a=r[1],i=r[2];var s=w(e,n);var l=b(t,i);var o=N(n);h.ael(s,a,l,o);(t.$rmListeners$=t.$rmListeners$||[]).push((function(){return h.rel(s,a,l,o)}))}))}};var b=function(e,t){return function(r){try{{if(e.$flags$&256){e.$lazyInstance$[t](r)}else{(e.$queuedListeners$=e.$queuedListeners$||[]).push([t,r])}}}catch(n){tt(n)}}};var w=function(e,t){if(t&4)return d;if(t&8)return c;if(t&16)return d.body;return e};var N=function(e){return(e&2)!==0};var R="r";var x="o";var S="s";var _="t";var k="s-id";var C="sty-id";var T="c-id";var L="{visibility:hidden}[calcite-hydrated]{visibility:inherit}";var A="http://www.w3.org/1999/xlink";var j=function(e,t){if(t===void 0){t=""}{return function(){return}}};var E=function(e,t){{return function(){return}}};var I=new WeakMap;var P=function(e,t,r){var n=at.get(e);if(g&&r){n=n||new CSSStyleSheet;n.replace(t)}else{n=t}at.set(e,n)};var O=function(e,t,r,n){var a=B(t);var i=at.get(a);e=e.nodeType===11?e:d;if(i){if(typeof i==="string"){e=e.head||e;var s=I.get(e);var l=void 0;if(!s){I.set(e,s=new Set)}if(!s.has(a)){if(e.host&&(l=e.querySelector("["+C+'="'+a+'"]'))){l.innerHTML=i}else{if(h.$cssShim$){l=h.$cssShim$.createHostStyle(n,a,i,!!(t.$flags$&10));var o=l["s-sc"];if(o){a=o;s=null}}else{l=d.createElement("style");l.innerHTML=i}e.insertBefore(l,e.querySelector("link"))}if(s){s.add(a)}}}else if(!e.adoptedStyleSheets.includes(i)){e.adoptedStyleSheets=__spreadArray(__spreadArray([],e.adoptedStyleSheets),[i])}}return a};var M=function(e){var t=e.$cmpMeta$;var r=e.$hostElement$;var n=t.$flags$;var a=j("attachStyles",t.$tagName$);var i=O(p&&r.shadowRoot?r.shadowRoot:r.getRootNode(),t,e.$modeName$,r);if(n&10){r["s-sc"]=i;r.classList.add(i+"-h");if(n&2){r.classList.add(i+"-s")}}a()};var B=function(e,t){return"sc-"+e.$tagName$};var z=function(e){return e.replace(/\/\*!@([^\/]+)\*\/[^\{]+\{/g,"$1{")};var q={};var U="http://www.w3.org/2000/svg";var H="http://www.w3.org/1999/xhtml";var V=function(e){return e!=null};var W=function(e){e=typeof e;return e==="object"||e==="function"};var D=e("h",(function(e,t){var r=[];for(var n=2;n<arguments.length;n++){r[n-2]=arguments[n]}var a=null;var i=null;var s=null;var l=false;var o=false;var $=[];var f=function(t){for(var r=0;r<t.length;r++){a=t[r];if(Array.isArray(a)){f(a)}else if(a!=null&&typeof a!=="boolean"){if(l=typeof e!=="function"&&!W(a)){a=String(a)}if(l&&o){$[$.length-1].$text$+=a}else{$.push(l?F(null,a):a)}o=l}}};f(r);if(t){if(t.key){i=t.key}if(t.name){s=t.name}{var u=t.className||t.class;if(u){t.class=typeof u!=="object"?u:Object.keys(u).filter((function(e){return u[e]})).join(" ")}}}if(typeof e==="function"){return e(t===null?{}:t,$,K)}var c=F(e,null);c.$attrs$=t;if($.length>0){c.$children$=$}{c.$key$=i}{c.$name$=s}return c}));var F=function(e,t){var r={$flags$:0,$tag$:e,$text$:t,$elm$:null,$children$:null};{r.$attrs$=null}{r.$key$=null}{r.$name$=null}return r};var G=e("H",{});var J=function(e){return e&&e.$tag$===G};var K={forEach:function(e,t){return e.map(Q).forEach(t)},map:function(e,t){return e.map(Q).map(t).map(X)}};var Q=function(e){return{vattrs:e.$attrs$,vchildren:e.$children$,vkey:e.$key$,vname:e.$name$,vtag:e.$tag$,vtext:e.$text$}};var X=function(e){if(typeof e.vtag==="function"){var t=Object.assign({},e.vattrs);if(e.vkey){t.key=e.vkey}if(e.vname){t.name=e.vname}return D.apply(void 0,__spreadArray([e.vtag,t],e.vchildren||[]))}var r=F(e.vtag,e.vtext);r.$attrs$=e.vattrs;r.$children$=e.vchildren;r.$key$=e.vkey;r.$name$=e.vname;return r};var Y=function(e,t,r,n,a,i){if(r!==n){var s=et(e,t);var l=t.toLowerCase();if(t==="class"){var o=e.classList;var $=ee(r);var f=ee(n);o.remove.apply(o,$.filter((function(e){return e&&!f.includes(e)})));o.add.apply(o,f.filter((function(e){return e&&!$.includes(e)})))}else if(t==="style"){{for(var u in r){if(!n||n[u]==null){if(u.includes("-")){e.style.removeProperty(u)}else{e.style[u]=""}}}}for(var u in n){if(!r||n[u]!==r[u]){if(u.includes("-")){e.style.setProperty(u,n[u])}else{e.style[u]=n[u]}}}}else if(t==="key");else if(t==="ref"){if(n){n(e)}}else if(!s&&t[0]==="o"&&t[1]==="n"){if(t[2]==="-"){t=t.slice(3)}else if(et(c,l)){t=l.slice(2)}else{t=l[2]+t.slice(3)}if(r){h.rel(e,t,r,false)}if(n){h.ael(e,t,n,false)}}else{var v=W(n);if((s||v&&n!==null)&&!a){try{if(!e.tagName.includes("-")){var d=n==null?"":n;if(t==="list"){s=false}else if(r==null||e[t]!=d){e[t]=d}}else{e[t]=n}}catch(m){}}var p=false;{if(l!==(l=l.replace(/^xlink\:?/,""))){t=l;p=true}}if(n==null||n===false){if(n!==false||e.getAttribute(t)===""){if(p){e.removeAttributeNS(A,t)}else{e.removeAttribute(t)}}}else if((!s||i&4||a)&&!v){n=n===true?"":n;if(p){e.setAttributeNS(A,t,n)}else{e.setAttribute(t,n)}}}}};var Z=/\s/;var ee=function(e){return!e?[]:e.split(Z)};var te=function(e,t,r,n){var a=t.$elm$.nodeType===11&&t.$elm$.host?t.$elm$.host:t.$elm$;var i=e&&e.$attrs$||q;var s=t.$attrs$||q;{for(n in i){if(!(n in s)){Y(a,n,i[n],undefined,r,t.$flags$)}}}for(n in s){Y(a,n,i[n],s[n],r,t.$flags$)}};var re=function(e,t,r,n){var o=t.$children$[r];var u=0;var c;var v;var h;if(!l){$=true;if(o.$tag$==="slot"){if(a){n.classList.add(a+"-s")}o.$flags$|=o.$children$?2:1}}if(o.$text$!==null){c=o.$elm$=d.createTextNode(o.$text$)}else if(o.$flags$&1){c=o.$elm$=d.createTextNode("")}else{if(!f){f=o.$tag$==="svg"}c=o.$elm$=d.createElementNS(f?U:H,o.$flags$&2?"slot-fb":o.$tag$);if(f&&o.$tag$==="foreignObject"){f=false}{te(null,o,f)}if(V(a)&&c["s-si"]!==a){c.classList.add(c["s-si"]=a)}if(o.$children$){for(u=0;u<o.$children$.length;++u){v=re(e,o,u,c);if(v){c.appendChild(v)}}}{if(o.$tag$==="svg"){f=false}else if(c.tagName==="foreignObject"){f=true}}}{c["s-hn"]=s;if(o.$flags$&(2|1)){c["s-sr"]=true;c["s-cr"]=i;c["s-sn"]=o.$name$||"";h=e&&e.$children$&&e.$children$[r];if(h&&h.$tag$===o.$tag$&&e.$elm$){ne(e.$elm$,false)}}}return c};var ne=function(e,t){h.$flags$|=1;var r=e.childNodes;for(var n=r.length-1;n>=0;n--){var a=r[n];if(a["s-hn"]!==s&&a["s-ol"]){$e(a).insertBefore(a,oe(a));a["s-ol"].remove();a["s-ol"]=undefined;$=true}if(t){ne(a,t)}}h.$flags$&=~1};var ae=function(e,t,r,n,a,i){var l=e["s-cr"]&&e["s-cr"].parentNode||e;var o;if(l.shadowRoot&&l.tagName===s){l=l.shadowRoot}for(;a<=i;++a){if(n[a]){o=re(null,r,a,e);if(o){n[a].$elm$=o;l.insertBefore(o,oe(t))}}}};var ie=function(e,t,r,n,a){for(;t<=r;++t){if(n=e[t]){a=n.$elm$;he(n);{o=true;if(a["s-ol"]){a["s-ol"].remove()}else{ne(a,true)}}a.remove()}}};var se=function(e,t,r,n){var a=0;var i=0;var s=0;var l=0;var o=t.length-1;var $=t[0];var f=t[o];var u=n.length-1;var c=n[0];var v=n[u];var d;var h;while(a<=o&&i<=u){if($==null){$=t[++a]}else if(f==null){f=t[--o]}else if(c==null){c=n[++i]}else if(v==null){v=n[--u]}else if(le($,c)){fe($,c);$=t[++a];c=n[++i]}else if(le(f,v)){fe(f,v);f=t[--o];v=n[--u]}else if(le($,v)){if($.$tag$==="slot"||v.$tag$==="slot"){ne($.$elm$.parentNode,false)}fe($,v);e.insertBefore($.$elm$,f.$elm$.nextSibling);$=t[++a];v=n[--u]}else if(le(f,c)){if($.$tag$==="slot"||v.$tag$==="slot"){ne(f.$elm$.parentNode,false)}fe(f,c);e.insertBefore(f.$elm$,$.$elm$);f=t[--o];c=n[++i]}else{s=-1;{for(l=a;l<=o;++l){if(t[l]&&t[l].$key$!==null&&t[l].$key$===c.$key$){s=l;break}}}if(s>=0){h=t[s];if(h.$tag$!==c.$tag$){d=re(t&&t[i],r,s,e)}else{fe(h,c);t[s]=undefined;d=h.$elm$}c=n[++i]}else{d=re(t&&t[i],r,i,e);c=n[++i]}if(d){{$e($.$elm$).insertBefore(d,oe($.$elm$))}}}}if(a>o){ae(e,n[u+1]==null?null:n[u+1].$elm$,r,n,i,u)}else if(i>u){ie(t,a,o)}};var le=function(e,t){if(e.$tag$===t.$tag$){if(e.$tag$==="slot"){return e.$name$===t.$name$}{return e.$key$===t.$key$}}return false};var oe=function(e){return e&&e["s-ol"]||e};var $e=function(e){return(e["s-ol"]?e["s-ol"]:e).parentNode};var fe=function(e,t){var r=t.$elm$=e.$elm$;var n=e.$children$;var a=t.$children$;var i=t.$tag$;var s=t.$text$;var l;if(s===null){{f=i==="svg"?true:i==="foreignObject"?false:f}{if(i==="slot");else{te(e,t,f)}}if(n!==null&&a!==null){se(r,n,t,a)}else if(a!==null){if(e.$text$!==null){r.textContent=""}ae(r,null,t,a,0,a.length-1)}else if(n!==null){ie(n,0,n.length-1)}if(f&&i==="svg"){f=false}}else if(l=r["s-cr"]){l.parentNode.textContent=s}else if(e.$text$!==s){r.data=s}};var ue=function(e){var t=e.childNodes;var r;var n;var a;var i;var s;var l;for(n=0,a=t.length;n<a;n++){r=t[n];if(r.nodeType===1){if(r["s-sr"]){s=r["s-sn"];r.hidden=false;for(i=0;i<a;i++){l=t[i].nodeType;if(t[i]["s-hn"]!==r["s-hn"]||s!==""){if(l===1&&s===t[i].getAttribute("slot")){r.hidden=true;break}}else{if(l===1||l===3&&t[i].textContent.trim()!==""){r.hidden=true;break}}}}ue(r)}}};var ce=[];var ve=function(e){var t;var r;var n;var a;var i;var s;var l=0;var $=e.childNodes;var f=$.length;for(;l<f;l++){t=$[l];if(t["s-sr"]&&(r=t["s-cr"])&&r.parentNode){n=r.parentNode.childNodes;a=t["s-sn"];for(s=n.length-1;s>=0;s--){r=n[s];if(!r["s-cn"]&&!r["s-nr"]&&r["s-hn"]!==t["s-hn"]){if(de(r,a)){i=ce.find((function(e){return e.$nodeToRelocate$===r}));o=true;r["s-sn"]=r["s-sn"]||a;if(i){i.$slotRefNode$=t}else{ce.push({$slotRefNode$:t,$nodeToRelocate$:r})}if(r["s-sr"]){ce.map((function(e){if(de(e.$nodeToRelocate$,r["s-sn"])){i=ce.find((function(e){return e.$nodeToRelocate$===r}));if(i&&!e.$slotRefNode$){e.$slotRefNode$=i.$slotRefNode$}}}))}}else if(!ce.some((function(e){return e.$nodeToRelocate$===r}))){ce.push({$nodeToRelocate$:r})}}}}if(t.nodeType===1){ve(t)}}};var de=function(e,t){if(e.nodeType===1){if(e.getAttribute("slot")===null&&t===""){return true}if(e.getAttribute("slot")===t){return true}return false}if(e["s-sn"]===t){return true}return t===""};var he=function(e){{e.$attrs$&&e.$attrs$.ref&&e.$attrs$.ref(null);e.$children$&&e.$children$.map(he)}};var pe=function(e,t){var r=e.$hostElement$;var n=e.$cmpMeta$;var f=e.$vnode$||F(null,null);var u=J(t)?t:D(null,null,t);s=r.tagName;if(n.$attrsToReflect$){u.$attrs$=u.$attrs$||{};n.$attrsToReflect$.map((function(e){var t=e[0],n=e[1];return u.$attrs$[n]=r[t]}))}u.$tag$=null;u.$flags$|=4;e.$vnode$=u;u.$elm$=f.$elm$=r.shadowRoot||r;{a=r["s-sc"]}{i=r["s-cr"];l=p&&(n.$flags$&1)!==0;o=false}fe(f,u);{h.$flags$|=1;if($){ve(u.$elm$);var c=void 0;var v=void 0;var m=void 0;var g=void 0;var y=void 0;var b=void 0;var w=0;for(;w<ce.length;w++){c=ce[w];v=c.$nodeToRelocate$;if(!v["s-ol"]){m=d.createTextNode("");m["s-nr"]=v;v.parentNode.insertBefore(v["s-ol"]=m,v)}}for(w=0;w<ce.length;w++){c=ce[w];v=c.$nodeToRelocate$;if(c.$slotRefNode$){g=c.$slotRefNode$.parentNode;y=c.$slotRefNode$.nextSibling;m=v["s-ol"];while(m=m.previousSibling){b=m["s-nr"];if(b&&b["s-sn"]===v["s-sn"]&&g===b.parentNode){b=b.nextSibling;if(!b||!b["s-nr"]){y=b;break}}}if(!y&&g!==v.parentNode||v.nextSibling!==y){if(v!==y){if(!v["s-hn"]&&v["s-ol"]){v["s-hn"]=v["s-ol"].parentNode.nodeName}g.insertBefore(v,y)}}}else{if(v.nodeType===1){v.hidden=true}}}}if(o){ue(u.$elm$)}h.$flags$&=~1;ce.length=0}};var me=e("g",(function(e){return Xe(e).$hostElement$}));var ge=e("c",(function(e,t,r){var n=me(e);return{emit:function(e){return ye(n,t,{bubbles:!!(r&4),composed:!!(r&2),cancelable:!!(r&1),detail:e})}}}));var ye=function(e,t,r){var n=h.ce(t,r);e.dispatchEvent(n);return n};var be=function(e,t){if(t&&!e.$onRenderResolve$&&t["s-p"]){t["s-p"].push(new Promise((function(t){return e.$onRenderResolve$=t})))}};var we=function(e,t){{e.$flags$|=16}if(e.$flags$&4){e.$flags$|=512;return}be(e,e.$ancestorComponent$);var r=function(){return Ne(e,t)};return ut(r)};var Ne=function(e,t){var r=j("scheduleUpdate",e.$cmpMeta$.$tagName$);var n=e.$lazyInstance$;var a;if(t){{e.$flags$|=256;if(e.$queuedListeners$){e.$queuedListeners$.map((function(e){var t=e[0],r=e[1];return Ce(n,t,r)}));e.$queuedListeners$=null}}{a=Ce(n,"componentWillLoad")}}{a=Te(a,(function(){return Ce(n,"componentWillRender")}))}r();return Te(a,(function(){return Re(e,n,t)}))};var Re=function(e,t,n){return __awaiter(r,void 0,void 0,(function(){var r,a,i,s,l,o;return __generator(this,(function($){r=e.$hostElement$;a=j("update",e.$cmpMeta$.$tagName$);i=r["s-rc"];if(n){M(e)}s=j("render",e.$cmpMeta$.$tagName$);{xe(e,t)}if(h.$cssShim$){h.$cssShim$.updateHost(r)}if(i){i.map((function(e){return e()}));r["s-rc"]=undefined}s();a();{l=r["s-p"];o=function(){return Se(e)};if(l.length===0){o()}else{Promise.all(l).then(o);e.$flags$|=4;l.length=0}}return[2]}))}))};var xe=function(e,t,r){try{t=t.render();{e.$flags$&=~16}{e.$flags$|=2}{{{pe(e,t)}}}}catch(n){tt(n,e.$hostElement$)}return null};var Se=function(e){var t=e.$cmpMeta$.$tagName$;var r=e.$hostElement$;var n=j("postUpdate",t);var a=e.$lazyInstance$;var i=e.$ancestorComponent$;{Ce(a,"componentDidRender")}if(!(e.$flags$&64)){e.$flags$|=64;{Le(r)}{Ce(a,"componentDidLoad")}n();{e.$onReadyResolve$(r);if(!i){ke()}}}else{{Ce(a,"componentDidUpdate")}n()}{e.$onInstanceResolve$(r)}{if(e.$onRenderResolve$){e.$onRenderResolve$();e.$onRenderResolve$=undefined}if(e.$flags$&512){ft((function(){return we(e,false)}))}e.$flags$&=~(4|512)}};var _e=e("f",(function(e){{var t=Xe(e);var r=t.$hostElement$.isConnected;if(r&&(t.$flags$&(2|16))===2){we(t,false)}return r}}));var ke=function(e){{Le(d.documentElement)}ft((function(){return ye(c,"appload",{detail:{namespace:n}})}))};var Ce=function(e,t,r){if(e&&e[t]){try{return e[t](r)}catch(n){tt(n)}}return undefined};var Te=function(e,t){return e&&e.then?e.then(t):t()};var Le=function(e){return e.setAttribute("calcite-hydrated","")};var Ae=function(e,t,r,n){var a=j("hydrateClient",t);var i=e.shadowRoot;var s=[];var l=[];var o=i?[]:null;var $=n.$vnode$=F(t,null);if(!h.$orgLocNodes$){Ee(d.body,h.$orgLocNodes$=new Map)}e[k]=r;e.removeAttribute(k);je($,s,l,o,e,e,r);s.map((function(e){var r=e.$hostId$+"."+e.$nodeId$;var n=h.$orgLocNodes$.get(r);var a=e.$elm$;if(n&&p&&n["s-en"]===""){n.parentNode.insertBefore(a,n.nextSibling)}if(!i){a["s-hn"]=t;if(n){a["s-ol"]=n;a["s-ol"]["s-nr"]=a}}h.$orgLocNodes$.delete(r)}));if(i){o.map((function(e){if(e){i.appendChild(e)}}))}a()};var je=function(e,t,r,n,a,i,s){var l;var o;var $;var f;if(i.nodeType===1){l=i.getAttribute(T);if(l){o=l.split(".");if(o[0]===s||o[0]==="0"){$={$flags$:0,$hostId$:o[0],$nodeId$:o[1],$depth$:o[2],$index$:o[3],$tag$:i.tagName.toLowerCase(),$elm$:i,$attrs$:null,$children$:null,$key$:null,$name$:null,$text$:null};t.push($);i.removeAttribute(T);if(!e.$children$){e.$children$=[]}e.$children$[$.$index$]=$;e=$;if(n&&$.$depth$==="0"){n[$.$index$]=$.$elm$}}}for(f=i.childNodes.length-1;f>=0;f--){je(e,t,r,n,a,i.childNodes[f],s)}if(i.shadowRoot){for(f=i.shadowRoot.childNodes.length-1;f>=0;f--){je(e,t,r,n,a,i.shadowRoot.childNodes[f],s)}}}else if(i.nodeType===8){o=i.nodeValue.split(".");if(o[1]===s||o[1]==="0"){l=o[0];$={$flags$:0,$hostId$:o[1],$nodeId$:o[2],$depth$:o[3],$index$:o[4],$elm$:i,$attrs$:null,$children$:null,$key$:null,$name$:null,$tag$:null,$text$:null};if(l===_){$.$elm$=i.nextSibling;if($.$elm$&&$.$elm$.nodeType===3){$.$text$=$.$elm$.textContent;t.push($);i.remove();if(!e.$children$){e.$children$=[]}e.$children$[$.$index$]=$;if(n&&$.$depth$==="0"){n[$.$index$]=$.$elm$}}}else if($.$hostId$===s){if(l===S){$.$tag$="slot";if(o[5]){i["s-sn"]=$.$name$=o[5]}else{i["s-sn"]=""}i["s-sr"]=true;if(n){$.$elm$=d.createElement($.$tag$);if($.$name$){$.$elm$.setAttribute("name",$.$name$)}i.parentNode.insertBefore($.$elm$,i);i.remove();if($.$depth$==="0"){n[$.$index$]=$.$elm$}}r.push($);if(!e.$children$){e.$children$=[]}e.$children$[$.$index$]=$}else if(l===R){if(n){i.remove()}else{a["s-cr"]=i;i["s-cn"]=true}}}}}else if(e&&e.$tag$==="style"){var u=F(null,i.textContent);u.$elm$=i;u.$index$="0";e.$children$=[u]}};var Ee=function(e,t){if(e.nodeType===1){var r=0;for(;r<e.childNodes.length;r++){Ee(e.childNodes[r],t)}if(e.shadowRoot){for(r=0;r<e.shadowRoot.childNodes.length;r++){Ee(e.shadowRoot.childNodes[r],t)}}}else if(e.nodeType===8){var n=e.nodeValue.split(".");if(n[0]===x){t.set(n[1]+"."+n[2],e);e.nodeValue="";e["s-en"]=n[3]}}};var Ie=function(e,t){if(e!=null&&!W(e)){if(t&4){return e==="false"?false:e===""||!!e}if(t&2){return parseFloat(e)}if(t&1){return String(e)}return e}return e};var Pe=function(e,t){return Xe(e).$instanceValues$.get(t)};var Oe=function(e,t,r,n){var a=Xe(e);var i=a.$hostElement$;var s=a.$instanceValues$.get(t);var l=a.$flags$;var o=a.$lazyInstance$;r=Ie(r,n.$members$[t][0]);if((!(l&8)||s===undefined)&&r!==s){a.$instanceValues$.set(t,r);if(o){if(n.$watchers$&&l&128){var $=n.$watchers$[t];if($){$.map((function(e){try{o[e](r,s,t)}catch(n){tt(n,i)}}))}}if((l&(2|16))===2){we(a,false)}}}};var Me=function(e,t,r){if(t.$members$){if(e.watchers){t.$watchers$=e.watchers}var n=Object.entries(t.$members$);var a=e.prototype;n.map((function(e){var n=e[0],i=e[1][0];if(i&31||r&2&&i&32){Object.defineProperty(a,n,{get:function(){return Pe(this,n)},set:function(e){Oe(this,n,e,t)},configurable:true,enumerable:true})}else if(r&1&&i&64){Object.defineProperty(a,n,{value:function(){var e=[];for(var t=0;t<arguments.length;t++){e[t]=arguments[t]}var r=Xe(this);return r.$onInstancePromise$.then((function(){var t;return(t=r.$lazyInstance$)[n].apply(t,e)}))}})}}));if(r&1){var i=new Map;a.attributeChangedCallback=function(e,t,r){var n=this;h.jmp((function(){var t=i.get(e);n[t]=r===null&&typeof n[t]==="boolean"?false:r}))};e.observedAttributes=n.filter((function(e){var t=e[0],r=e[1];return r[0]&15})).map((function(e){var r=e[0],n=e[1];var a=n[1]||r;i.set(a,r);if(n[0]&512){t.$attrsToReflect$.push([r,a])}return a}))}}return e};var Be=function(e,n,a,i,s){return __awaiter(r,void 0,void 0,(function(){var e,r,i,l,o,$,f;return __generator(this,(function(u){switch(u.label){case 0:if(!((n.$flags$&32)===0))return[3,5];n.$flags$|=32;s=nt(a);if(!s.then)return[3,2];e=E();return[4,s];case 1:s=u.sent();e();u.label=2;case 2:if(!s.isProxied){{a.$watchers$=s.watchers}Me(s,a,2);s.isProxied=true}r=j("createInstance",a.$tagName$);{n.$flags$|=8}try{new s(n)}catch(c){tt(c)}{n.$flags$&=~8}{n.$flags$|=128}r();ze(n.$lazyInstance$);if(!s.style)return[3,5];i=s.style;l=B(a);if(!!at.has(l))return[3,5];o=j("registerStyles",a.$tagName$);if(!(a.$flags$&8))return[3,4];return[4,t.import("./p-cd733818.system.js").then((function(e){return e.scopeCss(i,l,false)}))];case 3:i=u.sent();u.label=4;case 4:P(l,i,!!(a.$flags$&1));o();u.label=5;case 5:$=n.$ancestorComponent$;f=function(){return we(n,true)};if($&&$["s-rc"]){$["s-rc"].push(f)}else{f()}return[2]}}))}))};var ze=function(e){{Ce(e,"connectedCallback")}};var qe=function(e){if((h.$flags$&1)===0){var t=Xe(e);var r=t.$cmpMeta$;var n=j("connectedCallback",r.$tagName$);if(!(t.$flags$&1)){t.$flags$|=1;var a=void 0;{a=e.getAttribute(k);if(a){if(p&&r.$flags$&1){var i=O(e.shadowRoot,r);e.classList.remove(i+"-h",i+"-s")}Ae(e,r.$tagName$,a,t)}}if(!a){if(r.$flags$&(4|8)){Ue(e)}}{var s=e;while(s=s.parentNode||s.host){if(s.nodeType===1&&s.hasAttribute("s-id")&&s["s-p"]||s["s-p"]){be(t,t.$ancestorComponent$=s);break}}}if(r.$members$){Object.entries(r.$members$).map((function(t){var r=t[0],n=t[1][0];if(n&31&&e.hasOwnProperty(r)){var a=e[r];delete e[r];e[r]=a}}))}{Be(e,t,r)}}else{y(e,t,r.$listeners$);ze(t.$lazyInstance$)}n()}};var Ue=function(e){var t=e["s-cr"]=d.createComment("");t["s-cn"]=true;e.insertBefore(t,e.firstChild)};var He=function(e){if((h.$flags$&1)===0){var t=Xe(e);var r=t.$lazyInstance$;{if(t.$rmListeners$){t.$rmListeners$.map((function(e){return e()}));t.$rmListeners$=undefined}}if(h.$cssShim$){h.$cssShim$.removeHost(e)}{Ce(r,"disconnectedCallback")}}};var Ve=function(e){e.__appendChild=e.appendChild;e.appendChild=function(e){var t=e["s-sn"]=De(e);var r=Fe(this.childNodes,t);if(r){var n=Ge(r,t);var a=n[n.length-1];return a.parentNode.insertBefore(e,a.nextSibling)}return this.__appendChild(e)}};var We=function(e,t){var r=function(e){__extends(t,e);function t(){return e!==null&&e.apply(this,arguments)||this}t.prototype.item=function(e){return this[e]};return t}(Array);if(t.$flags$&8){var n=e.__lookupGetter__("childNodes");Object.defineProperty(e,"children",{get:function(){return this.childNodes.map((function(e){return e.nodeType===1}))}});Object.defineProperty(e,"childElementCount",{get:function(){return e.children.length}});Object.defineProperty(e,"childNodes",{get:function(){var e=n.call(this);if((h.$flags$&1)===0&&Xe(this).$flags$&2){var t=new r;for(var a=0;a<e.length;a++){var i=e[a]["s-nr"];if(i){t.push(i)}}return t}return r.from(e)}})}};var De=function(e){return e["s-sn"]||e.nodeType===1&&e.getAttribute("slot")||""};var Fe=function(e,t){var r=0;var n;for(;r<e.length;r++){n=e[r];if(n["s-sr"]&&n["s-sn"]===t){return n}n=Fe(n.childNodes,t);if(n){return n}}return null};var Ge=function(e,t){var r=[e];while((e=e.nextSibling)&&e["s-sn"]===t){r.push(e)}return r};var Je=e("b",(function(e,t){if(t===void 0){t={}}var r=j();var n=[];var a=t.exclude||[];var i=c.customElements;var s=d.head;var l=s.querySelector("meta[charset]");var o=d.createElement("style");var $=[];var f=d.querySelectorAll("["+C+"]");var u;var v=true;var m=0;Object.assign(h,t);h.$resourcesUrl$=new URL(t.resourcesUrl||"./",d.baseURI).href;{h.$flags$|=2}{for(;m<f.length;m++){P(f[m].getAttribute(C),z(f[m].innerHTML),true)}}e.map((function(e){return e[1].map((function(t){var r={$flags$:t[0],$tagName$:t[1],$members$:t[2],$listeners$:t[3]};{r.$members$=t[2]}{r.$listeners$=t[3]}{r.$attrsToReflect$=[]}{r.$watchers$={}}if(!p&&r.$flags$&1){r.$flags$|=8}var s=r.$tagName$;var l=function(e){__extends(t,e);function t(t){var n=e.call(this,t)||this;t=n;Ze(t,r);if(r.$flags$&1){if(p){{t.attachShadow({mode:"open"})}}else if(!("shadowRoot"in t)){t.shadowRoot=t}}{We(t,r)}return n}t.prototype.connectedCallback=function(){var e=this;if(u){clearTimeout(u);u=null}if(v){$.push(this)}else{h.jmp((function(){return qe(e)}))}};t.prototype.disconnectedCallback=function(){var e=this;h.jmp((function(){return He(e)}))};t.prototype.componentOnReady=function(){return Xe(this).$onReadyPromise$};return t}(HTMLElement);{Ve(l.prototype)}r.$lazyBundleId$=e[0];if(!a.includes(s)&&!i.get(s)){n.push(s);i.define(s,Me(l,r,1))}}))}));{o.innerHTML=n+L;o.setAttribute("data-styles","");s.insertBefore(o,l?l.nextSibling:s.firstChild)}v=false;if($.length){$.map((function(e){return e.connectedCallback()}))}else{{h.jmp((function(){return u=setTimeout(ke,30)}))}}r()}));var Ke=e("e",(function(e){var t=new URL(e,h.$resourcesUrl$);return t.origin!==c.location.origin?t.href:t.pathname}));var Qe=new WeakMap;var Xe=function(e){return Qe.get(e)};var Ye=e("r",(function(e,t){return Qe.set(t.$lazyInstance$=e,t)}));var Ze=function(e,t){var r={$flags$:0,$hostElement$:e,$cmpMeta$:t,$instanceValues$:new Map};{r.$onInstancePromise$=new Promise((function(e){return r.$onInstanceResolve$=e}))}{r.$onReadyPromise$=new Promise((function(e){return r.$onReadyResolve$=e}));e["s-p"]=[];e["s-rc"]=[]}y(e,r,t.$listeners$);return Qe.set(e,r)};var et=function(e,t){return t in e};var tt=function(e,t){return(0,console.error)(e,t)};var rt=new Map;var nt=function(e,r,n){var a=e.$tagName$.replace(/-/g,"_");var i=e.$lazyBundleId$;var s=rt.get(i);if(s){return s[a]}return t.import("./"+i+".entry.js"+"").then((function(e){{rt.set(i,e)}return e[a]}),tt)};var at=new Map;var it=[];var st=[];var lt=function(e,t){return function(r){e.push(r);if(!u){u=true;if(t&&h.$flags$&4){ft($t)}else{h.raf($t)}}}};var ot=function(e){for(var t=0;t<e.length;t++){try{e[t](performance.now())}catch(r){tt(r)}}e.length=0};var $t=function(){ot(it);{ot(st);if(u=it.length>0){h.raf($t)}}};var ft=function(e){return m().then(e)};var ut=lt(st,true)}}}));