(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["wallet:entropy"],{"02f4":function(e,n,t){var r=t("4588"),i=t("be13");e.exports=function(e){return function(n,t){var o,u,a=String(i(n)),s=r(t),c=a.length;return s<0||s>=c?e?"":void 0:(o=a.charCodeAt(s),o<55296||o>56319||s+1===c||(u=a.charCodeAt(s+1))<56320||u>57343?e?a.charAt(s):o:e?a.slice(s,s+2):u-56320+(o-55296<<10)+65536)}}},"06e9":function(e,n,t){"use strict";var r=t("0774"),i=t("8707").Buffer;e.exports=function(e){function n(n){var t=e(n);return r.encode(i.concat([n,t],n.length+4))}function t(n){var t=n.slice(0,-4),r=n.slice(-4),i=e(t);if(!(r[0]^i[0]|r[1]^i[1]|r[2]^i[2]|r[3]^i[3]))return t}function o(e){var n=r.decodeUnsafe(e);if(n)return t(n)}function u(n){var i=r.decode(n),o=t(i,e);if(!o)throw new Error("Invalid checksum");return o}return{encode:n,decode:u,decodeUnsafe:o}}},"0774":function(e,n,t){var r=t("42a7"),i="123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";e.exports=r(i)},"1c4c":function(e,n,t){"use strict";var r=t("9b43"),i=t("5ca1"),o=t("4bf8"),u=t("1fa8"),a=t("33a4"),s=t("9def"),c=t("f1ae"),f=t("27ee");i(i.S+i.F*!t("5cc5")(function(e){Array.from(e)}),"Array",{from:function(e){var n,t,i,l,d=o(e),p="function"==typeof this?this:Array,h=arguments.length,v=h>1?arguments[1]:void 0,_=void 0!==v,m=0,g=f(d);if(_&&(v=r(v,h>2?arguments[2]:void 0,2)),void 0==g||p==Array&&a(g))for(n=s(d.length),t=new p(n);n>m;m++)c(t,m,_?v(d[m],m):d[m]);else for(l=g.call(d),t=new p;!(i=l.next()).done;m++)c(t,m,_?u(l,v,[i.value,m],!0):i.value);return t.length=m,t}})},"42a7":function(e,n,t){"use strict";var r=t("8707").Buffer;function i(e){if(e.length>=255)throw new TypeError("Alphabet too long");var n=new Uint8Array(256);n.fill(255);for(var t=0;t<e.length;t++){var i=e.charAt(t),o=i.charCodeAt(0);if(255!==n[o])throw new TypeError(i+" is ambiguous");n[o]=t}var u=e.length,a=e.charAt(0),s=Math.log(u)/Math.log(256),c=Math.log(256)/Math.log(u);function f(n){if(!r.isBuffer(n))throw new TypeError("Expected Buffer");if(0===n.length)return"";var t=0,i=0,o=0,s=n.length;while(o!==s&&0===n[o])o++,t++;var f=(s-o)*c+1>>>0,l=new Uint8Array(f);while(o!==s){for(var d=n[o],p=0,h=f-1;(0!==d||p<i)&&-1!==h;h--,p++)d+=256*l[h]>>>0,l[h]=d%u>>>0,d=d/u>>>0;if(0!==d)throw new Error("Non-zero carry");i=p,o++}var v=f-i;while(v!==f&&0===l[v])v++;for(var _=a.repeat(t);v<f;++v)_+=e.charAt(l[v]);return _}function l(e){if("string"!==typeof e)throw new TypeError("Expected String");if(0===e.length)return r.alloc(0);var t=0;if(" "!==e[t]){var i=0,o=0;while(e[t]===a)i++,t++;var c=(e.length-t)*s+1>>>0,f=new Uint8Array(c);while(e[t]){var l=n[e.charCodeAt(t)];if(255===l)return;for(var d=0,p=c-1;(0!==l||d<o)&&-1!==p;p--,d++)l+=u*f[p]>>>0,f[p]=l%256>>>0,l=l/256>>>0;if(0!==l)throw new Error("Non-zero carry");o=d,t++}if(" "!==e[t]){var h=c-o;while(h!==c&&0===f[h])h++;var v=r.allocUnsafe(i+(c-h));v.fill(0,0,i);var _=i;while(h!==c)v[_++]=f[h++];return v}}}function d(e){var n=l(e);if(n)return n;throw new Error("Non-base"+u+" character")}return{encode:f,decodeUnsafe:l,decode:d}}e.exports=i},"5b7e":function(e,n,t){
/*!
 * vue-simple-spinner v1.2.8 (https://github.com/dzwillia/vue-simple-spinner)
 * (c) 2017 David Z. Williams
 * Released under the MIT License.
 */
(function(n,t){e.exports=t()})(0,function(){return function(e){var n={};function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.VueSimpleSpinner=void 0;var r=t(1),i=o(r);function o(e){return e&&e.__esModule?e:{default:e}}"undefined"!==typeof window&&window.Vue&&Vue.component("vue-simple-spinner",i.default),n.VueSimpleSpinner=i.default,n.default=i.default},function(e,n,t){t(2);var r=t(7)(t(8),t(9),null,null);e.exports=r.exports},function(e,n,t){var r=t(3);"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);t(5)("d89557e4",r,!0)},function(e,n,t){n=e.exports=t(4)(),n.push([e.i,".vue-simple-spinner{transition:all .3s linear}@keyframes vue-simple-spinner-spin{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}",""])},function(e,n){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],n=0;n<this.length;n++){var t=this[n];t[2]?e.push("@media "+t[2]+"{"+t[1]+"}"):e.push(t[1])}return e.join("")},e.i=function(n,t){"string"===typeof n&&(n=[[null,n,""]]);for(var r={},i=0;i<this.length;i++){var o=this[i][0];"number"===typeof o&&(r[o]=!0)}for(i=0;i<n.length;i++){var u=n[i];"number"===typeof u[0]&&r[u[0]]||(t&&!u[2]?u[2]=t:t&&(u[2]="("+u[2]+") and ("+t+")"),e.push(u))}},e}},function(e,n,t){var r="undefined"!==typeof document;if("undefined"!==typeof DEBUG&&DEBUG&&!r)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var i=t(6),o={},u=r&&(document.head||document.getElementsByTagName("head")[0]),a=null,s=0,c=!1,f=function(){},l="undefined"!==typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function d(e){for(var n=0;n<e.length;n++){var t=e[n],r=o[t.id];if(r){r.refs++;for(var i=0;i<r.parts.length;i++)r.parts[i](t.parts[i]);for(;i<t.parts.length;i++)r.parts.push(h(t.parts[i]));r.parts.length>t.parts.length&&(r.parts.length=t.parts.length)}else{var u=[];for(i=0;i<t.parts.length;i++)u.push(h(t.parts[i]));o[t.id]={id:t.id,refs:1,parts:u}}}}function p(){var e=document.createElement("style");return e.type="text/css",u.appendChild(e),e}function h(e){var n,t,r=document.querySelector('style[data-vue-ssr-id~="'+e.id+'"]');if(r){if(c)return f;r.parentNode.removeChild(r)}if(l){var i=s++;r=a||(a=p()),n=_.bind(null,r,i,!1),t=_.bind(null,r,i,!0)}else r=p(),n=m.bind(null,r),t=function(){r.parentNode.removeChild(r)};return n(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;n(e=r)}else t()}}e.exports=function(e,n,t){c=t;var r=i(e,n);return d(r),function(n){for(var t=[],u=0;u<r.length;u++){var a=r[u],s=o[a.id];s.refs--,t.push(s)}n?(r=i(e,n),d(r)):r=[];for(u=0;u<t.length;u++){s=t[u];if(0===s.refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete o[s.id]}}}};var v=function(){var e=[];return function(n,t){return e[n]=t,e.filter(Boolean).join("\n")}}();function _(e,n,t,r){var i=t?"":r.css;if(e.styleSheet)e.styleSheet.cssText=v(n,i);else{var o=document.createTextNode(i),u=e.childNodes;u[n]&&e.removeChild(u[n]),u.length?e.insertBefore(o,u[n]):e.appendChild(o)}}function m(e,n){var t=n.css,r=n.media,i=n.sourceMap;if(r&&e.setAttribute("media",r),i&&(t+="\n/*# sourceURL="+i.sources[0]+" */",t+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),e.styleSheet)e.styleSheet.cssText=t;else{while(e.firstChild)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}},function(e,n){e.exports=function(e,n){for(var t=[],r={},i=0;i<n.length;i++){var o=n[i],u=o[0],a=o[1],s=o[2],c=o[3],f={id:e+":"+i,css:a,media:s,sourceMap:c};r[u]?r[u].parts.push(f):t.push(r[u]={id:u,parts:[f]})}return t}},function(e,n){e.exports=function(e,n,t,r){var i,o=e=e||{},u=typeof e.default;"object"!==u&&"function"!==u||(i=e,o=e.default);var a="function"===typeof o?o.options:o;if(n&&(a.render=n.render,a.staticRenderFns=n.staticRenderFns),t&&(a._scopeId=t),r){var s=Object.create(a.computed||null);Object.keys(r).forEach(function(e){var n=r[e];s[e]=function(){return n}}),a.computed=s}return{esModule:i,exports:o,options:a}}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=function(e){return!isNaN(parseFloat(e))&&isFinite(e)};n.default={name:"vue-simple-spinner",props:{size:{default:32},"line-size":{type:Number,default:3},"line-bg-color":{type:String,default:"#eee"},"line-fg-color":{type:String,default:"#2196f3"},speed:{type:Number,default:.8},spacing:{type:Number,default:4},message:{type:String,default:""},"font-size":{type:Number,default:13},"text-fg-color":{type:String,default:"#555"}},computed:{size_px:function(){switch(this.size){case"tiny":return 12;case"small":return 16;case"medium":return 32;case"large":return 48;case"big":return 64;case"huge":return 96;case"massive":return 128}return r(this.size)?this.size:32},line_size_px:function(){switch(this.size){case"tiny":return 1;case"small":return 2;case"medium":return 3;case"large":return 3;case"big":return 4;case"huge":return 4;case"massive":return 5}return r(this.lineSize)?this.lineSize:4},text_margin_top:function(){switch(this.size){case"tiny":case"small":case"medium":case"large":case"big":case"huge":case"massive":return Math.min(Math.max(Math.ceil(this.size_px/8),3),12)}return r(this.spacing)?this.spacing:4},text_font_size:function(){switch(this.size){case"tiny":case"small":case"medium":case"large":case"big":case"huge":case"massive":return Math.min(Math.max(Math.ceil(.4*this.size_px),11),32)}return r(this.fontSize)?this.fontSize:13},spinner_style:function(){return{margin:"0 auto","border-radius":"100%",border:this.line_size_px+"px solid "+this.lineBgColor,"border-top":this.line_size_px+"px solid "+this.lineFgColor,width:this.size_px+"px",height:this.size_px+"px",animation:"vue-simple-spinner-spin "+this.speed+"s linear infinite"}},text_style:function(){return{"margin-top":this.text_margin_top+"px",color:this.textFgColor,"font-size":this.text_font_size+"px","text-align":"center"}}}}},function(e,n){e.exports={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("div",{staticClass:"vue-simple-spinner",style:e.spinner_style}),e._v(" "),e.message.length>0?t("div",{staticClass:"vue-simple-spinner-text",style:e.text_style},[e._v(e._s(e.message))]):e._e()])},staticRenderFns:[]}}])["default"]})},"5da6":function(e,n,t){(function(){var e,r,i,o,u,a;for(n["const"]=t("9467"),i=[t("8477"),t("aaa1")],u=0,a=i.length;u<a;u++)for(e in r=i[u],r)o=r[e],n[e]=o}).call(this)},"5df3":function(e,n,t){"use strict";var r=t("02f4")(!0);t("01f9")(String,"String",function(e){this._t=String(e),this._i=0},function(){var e,n=this._t,t=this._i;return t>=n.length?{value:void 0,done:!0}:(e=r(n,t),this._i+=e.length,{value:e,done:!1})})},"6f78":function(e,n,t){"use strict";var r=t("98e6"),i=t("06e9");function o(e){var n=r("sha256").update(e).digest();return r("sha256").update(n).digest()}e.exports=i(o)},8477:function(e,n,t){(function(e){(function(){var r,i,o,u,a,s,c,f,l,d,p=[].slice;r=t("9467"),o=function(e,n,t,i,o){var u,a,s,f;for(u in s={},i)f=i[u],s[u]=f;return s[r.lineno]=null!=n?n[r.lineno]:void 0,a=function(){var r,i,u;return r=1<=arguments.length?p.call(arguments,0):[],null!=n&&null!=(u=n.assign_fn)&&u.apply(null,r),e?(i=e,o||(e=null),i._fulfill(t,s)):c("overused deferral at "+d(s))},a[r.trace]=s,a},l=0,a=function(e){return l++,l%e===0&&(l=0,!0)},f=null,d=function(e){var n;return n=e[r.funcname]||"<anonymous>",n+" ("+e[r.filename]+":"+(e[r.lineno]+1)+")"},c=function(e){return"undefined"!==typeof console&&null!==console?console.error("ICED warning: "+e):void 0},n.trampoline=s=function(n){return a(500)?null!=("undefined"!==typeof e&&null!==e?e.nextTick:void 0)?e.nextTick(n):setTimeout(n):n()},n.Deferrals=function(){function e(e,n){this.trace=n,this.continuation=e,this.count=1,this.ret=null}return e.prototype._call=function(e){var n;return this.continuation?(f=e,n=this.continuation,this.continuation=null,n(this.ret)):c("Entered dead await at "+d(e))},e.prototype._fulfill=function(e,n){if(!(--this.count>0))return s(function(e){return function(){return e._call(n)}}(this))},e.prototype.defer=function(e){var n;return this.count++,n=this,o(n,e,null,this.trace)},e}(),n.findDeferral=function(e){var n,t,i;for(t=0,i=e.length;t<i;t++)if(n=e[t],null!=n?n[r.trace]:void 0)return n;return null},n.Rendezvous=function(){var e;function n(){this.completed=[],this.waiters=[],this.defer_id=0}return e=function(){function e(e,n,t){this.rv=e,this.id=n,this.multi=t}return e.prototype.defer=function(e){return this.rv._defer_with_id(this.id,e,this.multi)},e}(),n.prototype.wait=function(e){var n;return this.completed.length?(n=this.completed.shift(),e(n)):this.waiters.push(e)},n.prototype.defer=function(e){var n;return n=this.defer_id++,this._defer_with_id(n,e)},n.prototype.id=function(n,t){return t=!!t,new e(this,n,t)},n.prototype._fulfill=function(e,n){var t;return this.waiters.length?(t=this.waiters.shift(),t(e)):this.completed.push(e)},n.prototype._defer_with_id=function(e,n,t){return this.count++,o(this,n,e,{},t)},n}(),n.stackWalk=u=function(e){var n,t,i,o;t=[],i=e?e[r.trace]:f;while(i)n="   at "+d(i),t.push(n),i=null!=i&&null!=(o=i[r.parent])?o[r.trace]:void 0;return t},n.exceptionHandler=i=function(e,n){var t;if(n||(n=console.error),n(e.stack),t=u(),t.length)return n("Iced 'stack' trace (w/ real line numbers):"),n(t.join("\n"))},n.catchExceptions=function(n){return"undefined"!==typeof e&&null!==e?e.on("uncaughtException",function(t){return i(t,n),e.exit(1)}):void 0}}).call(this)}).call(this,t("f28c"))},9467:function(e,n){(function(){e.exports={k:"__iced_k",k_noop:"__iced_k_noop",param:"__iced_p_",ns:"iced",runtime:"runtime",Deferrals:"Deferrals",deferrals:"__iced_deferrals",fulfill:"_fulfill",b_while:"_break",t_while:"_while",c_while:"_continue",n_while:"_next",n_arg:"__iced_next_arg",defer_method:"defer",slot:"__slot",assign_fn:"assign_fn",autocb:"autocb",retslot:"ret",trace:"__iced_trace",passed_deferral:"__iced_passed_deferral",findDeferral:"findDeferral",lineno:"lineno",parent:"parent",filename:"filename",funcname:"funcname",catchExceptions:"catchExceptions",runtime_modes:["node","inline","window","none","browserify","interp"],trampoline:"trampoline",context:"context",defer_arg:"__iced_defer_"}}).call(this)},a50f:function(e,n,t){(function(n){var r=t("6f78");function i(e,n){if(void 0!==n&&e[0]!==n)throw new Error("Invalid network version");if(33===e.length)return{version:e[0],privateKey:e.slice(1,33),compressed:!1};if(34!==e.length)throw new Error("Invalid WIF length");if(1!==e[33])throw new Error("Invalid compression flag");return{version:e[0],privateKey:e.slice(1,33),compressed:!0}}function o(e,t,r){var i=new n(r?34:33);return i.writeUInt8(e,0),t.copy(i,1),r&&(i[33]=1),i}function u(e,n){return i(r.decode(e),n)}function a(e,n,t){return"number"===typeof e?r.encode(o(e,n,t)):r.encode(o(e.version,e.privateKey,e.compressed))}e.exports={decode:u,decodeRaw:i,encode:a,encodeRaw:o}}).call(this,t("1c35").Buffer)},a78d:function(e,n,t){"use strict";var r=t("f4a2"),i=t.n(r);i.a},aaa1:function(e,n,t){(function(){var e,r,i,o,u,a=[].slice;e=t("9467"),n.iced=r=t("8477"),u=function(e,n,t,i){var o,u,s,c,f;c=r.findDeferral(arguments),u=new r.Rendezvous,i[0]=u.id(!0).defer({assign_fn:function(e){return function(){return function(){return o=a.call(arguments,0)}}}()(),lineno:20,context:f}),setTimeout(u.id(!1).defer({lineno:21,context:f}),n),function(e){return function(e){f=new r.Deferrals(e,{parent:c,filename:"/Users/max/src/iced/iced-runtime/src/library.iced"}),u.wait(f.defer({assign_fn:function(){return function(){return s=arguments[0]}}(),lineno:22})),f._fulfill()}}()(function(n){return function(){return t&&(t[0]=s),e.apply(null,o)}}())},n.timeout=function(e,n,t){var r;return r=[],u(e,n,t,r),r[0]},i=function(e,n,t){var i,o,u;o=r.findDeferral(arguments),function(e){return function(e){u=new r.Deferrals(e,{parent:o,filename:"/Users/max/src/iced/iced-runtime/src/library.iced"}),t[0]=u.defer({assign_fn:function(){return function(){return i=arguments[0]}}(),lineno:39}),u._fulfill()}}()(function(t){return function(){return i||(n[0]=!1),e()}}())},n.iand=function(e,n){var t;return t=[],i(e,n,t),t[0]},o=function(e,n,t){var i,o,u;o=r.findDeferral(arguments),function(e){return function(e){u=new r.Deferrals(e,{parent:o,filename:"/Users/max/src/iced/iced-runtime/src/library.iced"}),t[0]=u.defer({assign_fn:function(){return function(){return i=arguments[0]}}(),lineno:58}),u._fulfill()}}()(function(t){return function(){return i&&(n[0]=!0),e()}}())},n.ior=function(e,n){var t;return t=[],o(e,n,t),t[0]},n.Pipeliner=function(){function n(n,t){this.window=n||1,this.delay=t||0,this.queue=[],this.n_out=0,this.cb=null,this[e.deferrals]=this,this["defer"]=this._defer}return n.prototype.waitInQueue=function(e){var n,t;n=r.findDeferral(arguments),function(e){return function(i){var o;o=function(i){var u,a,s;if(u=i,a=function(){return r.trampoline(function(){return o(i)})},s=a,!(e.n_out>=e.window))return u();(function(i){t=new r.Deferrals(i,{parent:n,filename:"/Users/max/src/iced/iced-runtime/src/library.iced",funcname:"Pipeliner.waitInQueue"}),e.cb=t.defer({lineno:100}),t._fulfill()})(s)},o(i)}}(this)(function(i){return function(){i.n_out++,function(e){if(!i.delay)return e();(function(e){t=new r.Deferrals(e,{parent:n,filename:"/Users/max/src/iced/iced-runtime/src/library.iced",funcname:"Pipeliner.waitInQueue"}),setTimeout(t.defer({lineno:108}),i.delay),t._fulfill()})(e)}(function(){return e()})}}(this))},n.prototype.__defer=function(e,n){var t,i,o,u;o=r.findDeferral(arguments),function(t){return function(t){u=new r.Deferrals(t,{parent:o,filename:"/Users/max/src/iced/iced-runtime/src/library.iced",funcname:"Pipeliner.__defer"}),i=u.defer({lineno:122}),e[0]=function(){var e,t;return e=1<=arguments.length?a.call(arguments,0):[],null!=(t=n.assign_fn)&&t.apply(null,e),i()},u._fulfill()}}()(function(e){return function(){if(e.n_out--,e.cb)return t=e.cb,e.cb=null,t()}}(this))},n.prototype._defer=function(e){var n;return n=[],this.__defer(n,e),n[0]},n.prototype.flush=function(e){var n,t,i;t=e,n=r.findDeferral(arguments),i=function(e){var t;return function(o){var u,a,s;if(u=o,a=function(){return r.trampoline(function(){return i(o)})},s=a,!e.n_out)return u();(function(i){t=new r.Deferrals(i,{parent:n,filename:"/Users/max/src/iced/iced-runtime/src/library.iced",funcname:"Pipeliner.flush"}),e.cb=t.defer({lineno:151}),t._fulfill()})(s)}}(this),i(t)},n}()}).call(this)},b789:function(e,n,t){"use strict";t.r(n);var r=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"wallet-from-entropy mt-5"},[t("div",{staticClass:"relative"},[t("Spinner",{attrs:{size:"100","line-size":5,"line-fg-color":"#444ce7","line-bg-color":"#c4d0e2"}}),t("div",{staticClass:"entropy-container"},[t("div",{staticClass:"entropy-wrapper-outer bg-gray-200 rounded-full h-16 w-16"},[t("div",{staticClass:"entropy-wrapper-inner bg-white rounded-full h-12 w-12"},[t("span",{staticClass:"entropy-title"},[e._v("E"+e._s(e.entropyProgress.title))]),t("span",{staticClass:"entropy-subtitle"},[e._v(e._s(e.entropyProgress.subtitle))])])])])],1)])},i=[],o=(t("6b54"),t("5df3"),t("1c4c"),t("d225")),u=t("b0b4"),a=t("308d"),s=t("6bb5"),c=t("4e2b"),f=t("9ab4"),l=t("2b0e"),d=t("2fe1"),p=t("c079"),h=t("1c46"),v=t("5b7e"),_=t.n(v),m=t("bd81"),g=function(e){function n(){var e;return Object(o["a"])(this,n),e=Object(a["a"])(this,Object(s["a"])(n).apply(this,arguments)),e.entropy=[],e.entropyCurrent=null,e.entropyProgress={},e.entropyTimer=null,e}return Object(c["a"])(n,e),Object(u["a"])(n,[{key:"mounted",value:function(){var e=this;this.entropyTimer=setInterval(this.generateEntropyProgress,100),(new p["Generator"]).generate(2048,function(n){e.entropy=n.concat(Array.from(Object(h["randomBytes"])(256))),e.generateWallet()})}},{key:"generateWallet",value:function(){try{this.$router.push({name:"wallet",params:{wallet:JSON.stringify(Object(m["b"])(this.shuffle(this.entropy).slice(0,16)))}})}catch(e){}finally{clearInterval(this.entropyTimer)}}},{key:"shuffle",value:function(e){for(var n=e.length-1;n>0;n--){var t=Math.floor(Math.random()*(n+1)),r=[e[t],e[n]];e[n]=r[0],e[t]=r[1]}return e}},{key:"generateEntropyProgress",value:function(){var e=this.numberBetween(1,100).toString();while(e.length<3)e="0"+e;this.entropyProgress={title:Object(h["randomBytes"])(20).toString("hex").substring(0,1).toUpperCase(),subtitle:e}}},{key:"numberBetween",value:function(e,n){return Math.floor(Math.random()*(n-e+1)+e)}}]),n}(l["a"]);g=f["a"]([Object(d["b"])({components:{Spinner:_.a}})],g);var y=g,w=y,b=(t("a78d"),t("2877")),x=Object(b["a"])(w,r,i,!1,null,null,null);n["default"]=x.exports},bd81:function(e,n,t){"use strict";t.d(n,"a",function(){return g}),t.d(n,"b",function(){return y});t("6b54");var r=t("29c9"),i=t("2330"),o=t.n(i),u=t("b5ca"),a=t.n(u),s=t("e307"),c=t("1c35"),f=t("a50f"),l=t.n(f),d=t("6f78"),p=t.n(d),h=t("d70b"),v=function(e){var n=c["Buffer"].from((new a.a).update(c["Buffer"].from(e,"hex")).digest("hex"),"hex"),t=c["Buffer"].alloc(21);return t.writeUInt8(h["a"].getAddressPrefix(),0),n.copy(t,1),p.a.encode(t)},_=function(e){return o.a.publicKeyCreate(e).toString("hex")},m=function(e){return l.a.encode(h["a"].getWIF(),e,!0)},g=function(e){var n=c["Buffer"].from(Object(s["sync"])(e),"hex"),t=_(n),i={passphrase:e,address:v(t),publicKey:t,wif:m(n),entropy:void 0};try{i.entropy=Object(r["mnemonicToEntropy"])(e)}catch(o){i.entropy=void 0}return i},y=function(e){return g(Object(r["entropyToMnemonic"])(e))}},c079:function(e,n,t){(function(){n.Generator=t("cc14").Generator}).call(this)},cc14:function(e,n,t){(function(){var e,r,i;r=t("5da6"),i=function(){},e=e=function(){function e(e){e=e||{},this.lazy_loop_delay=e.lazy_loop_delay||30,this.loop_delay=e.loop_delay||5,this.work_min=e.work_min||1,this.auto_stop_bits=e.auto_stop_bits||4096,this.max_bits_per_delta=e.max_bits_per_delta||4,this.auto_stop=!e.auto_stop||e.auto_stop,this.entropies=[],this.running=!0,this.is_generating=!1,this.timer_race_loop()}return e.prototype.generate=function(e,n){var t,i,o,u,a;u=r.findDeferral(arguments),this.is_generating=!0,this.running||this.resume(),i=0,o=[],function(n){return function(s){var c,f;c=[],f=function(s){var l,d,p;if(l=function(){return s(c)},d=function(){return r.trampoline(function(){return f(s)})},p=function(e){return c.push(e),d()},!(i<e))return l();(function(e){if(n.entropies.length)return t=n.entropies.splice(0,1)[0],i+=t[1],e(o.push(t[0]));(function(e){a=new r.Deferrals(e,{parent:u,filename:"/Users/chris/git/more-entropy/src/generator.iced",funcname:"Generator.generate"}),n.delay(a.defer({lineno:28})),a._fulfill()})(e)})(p)},f(s)}}(this)(function(e){return function(){return e.auto_stop&&e.stop(),e.is_generating=!1,n(o)}}(this))},e.prototype.stop=function(){return this.running=!1},e.prototype.resume=function(){return this.running=!0,this.timer_race_loop()},e.prototype.reset=function(){return this.entropies=[],this.total_bits=0},e.prototype.count_unused_bits=function(){var e,n,t,r,i;for(e=0,i=this.entropies,t=0,r=i.length;t<r;t++)n=i[t],e+=n[1];return e},e.prototype.delay=function(e){var n,t,i;t=r.findDeferral(arguments),n=this.is_generating?this.loop_delay:this.lazy_loop_delay,function(e){return function(e){i=new r.Deferrals(e,{parent:t,filename:"/Users/chris/git/more-entropy/src/generator.iced",funcname:"Generator.delay"}),setTimeout(i.defer({lineno:50}),n),i._fulfill()}}()(function(n){return function(){return e()}}())},e.prototype.timer_race_loop=function(){var e,n,t,o;n=i,e=r.findDeferral(arguments),this._last_count=null,t=[],o=function(n){var i,u,a,s,c;return function(f){var l,d,p;if(l=function(){return f(t)},d=function(){return r.trampoline(function(){return o(f)})},p=function(e){return t.push(e),d()},!n.running)return l();n.count_unused_bits()<n.auto_stop_bits&&(i=n.millisecond_count(),null!=n._last_count&&(u=i-n._last_count)&&(a=Math.floor(n.log_2(Math.abs(u))),a=Math.min(n.max_bits_per_delta,a),s=[u,a],n.entropies.push(s)),n._last_count=i),function(t){c=new r.Deferrals(t,{parent:e,filename:"/Users/chris/git/more-entropy/src/generator.iced",funcname:"Generator.timer_race_loop"}),n.delay(c.defer({lineno:64})),c._fulfill()}(p)}}(this),o(n)},e.prototype.log_2=function(e){return Math.log(e)/Math.LN2},e.prototype.millisecond_count=function(){var e,n,t;e=Date.now(),n=t=0;while(Date.now()<e+this.work_min+1)n++,t=Math.sin(Math.sqrt(Math.log(n+t)));return n},e}(),"undefined"!==typeof window&&null!==window&&(window.Generator=e),null!==n&&(n.Generator=e)}).call(this)},f1ae:function(e,n,t){"use strict";var r=t("86cc"),i=t("4630");e.exports=function(e,n,t){n in e?r.f(e,n,i(0,t)):e[n]=t}},f4a2:function(e,n,t){}}]);
//# sourceMappingURL=wallet:entropy.3eb3f328.js.map