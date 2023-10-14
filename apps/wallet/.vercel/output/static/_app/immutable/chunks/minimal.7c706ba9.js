var commonjsGlobal=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function getDefaultExportFromCjs(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function getAugmentedNamespace(e){if(e.__esModule)return e;var t=e.default;if(typeof t=="function"){var r=function f(){return this instanceof f?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};r.prototype=t.prototype}else r={};return Object.defineProperty(r,"__esModule",{value:!0}),Object.keys(e).forEach(function(f){var i=Object.getOwnPropertyDescriptor(e,f);Object.defineProperty(r,f,i.get?i:{enumerable:!0,get:function(){return e[f]}})}),r}function commonjsRequire(e){throw new Error('Could not dynamically require "'+e+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var indexMinimal={},minimal$1={},aspromise=asPromise;function asPromise(e,t){for(var r=new Array(arguments.length-1),f=0,i=2,u=!0;i<arguments.length;)r[f++]=arguments[i++];return new Promise(function(a,s){r[f]=function(l){if(u)if(u=!1,l)s(l);else{for(var h=new Array(arguments.length-1),c=0;c<h.length;)h[c++]=arguments[c];a.apply(null,h)}};try{e.apply(t||null,r)}catch(o){u&&(u=!1,s(o))}})}var base64$1={};(function(e){var t=e;t.length=function(a){var s=a.length;if(!s)return 0;for(var o=0;--s%4>1&&a.charAt(s)==="=";)++o;return Math.ceil(a.length*3)/4-o};for(var r=new Array(64),f=new Array(123),i=0;i<64;)f[r[i]=i<26?i+65:i<52?i+71:i<62?i-4:i-59|43]=i++;t.encode=function(a,s,o){for(var l=null,h=[],c=0,p=0,d;s<o;){var y=a[s++];switch(p){case 0:h[c++]=r[y>>2],d=(y&3)<<4,p=1;break;case 1:h[c++]=r[d|y>>4],d=(y&15)<<2,p=2;break;case 2:h[c++]=r[d|y>>6],h[c++]=r[y&63],p=0;break}c>8191&&((l||(l=[])).push(String.fromCharCode.apply(String,h)),c=0)}return p&&(h[c++]=r[d],h[c++]=61,p===1&&(h[c++]=61)),l?(c&&l.push(String.fromCharCode.apply(String,h.slice(0,c))),l.join("")):String.fromCharCode.apply(String,h.slice(0,c))};var u="invalid encoding";t.decode=function(a,s,o){for(var l=o,h=0,c,p=0;p<a.length;){var d=a.charCodeAt(p++);if(d===61&&h>1)break;if((d=f[d])===void 0)throw Error(u);switch(h){case 0:c=d,h=1;break;case 1:s[o++]=c<<2|(d&48)>>4,c=d,h=2;break;case 2:s[o++]=(c&15)<<4|(d&60)>>2,c=d,h=3;break;case 3:s[o++]=(c&3)<<6|d,h=0;break}}if(h===1)throw Error(u);return o-l},t.test=function(a){return/^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(a)}})(base64$1);var eventemitter=EventEmitter;function EventEmitter(){this._listeners={}}EventEmitter.prototype.on=function(t,r,f){return(this._listeners[t]||(this._listeners[t]=[])).push({fn:r,ctx:f||this}),this};EventEmitter.prototype.off=function(t,r){if(t===void 0)this._listeners={};else if(r===void 0)this._listeners[t]=[];else for(var f=this._listeners[t],i=0;i<f.length;)f[i].fn===r?f.splice(i,1):++i;return this};EventEmitter.prototype.emit=function(t){var r=this._listeners[t];if(r){for(var f=[],i=1;i<arguments.length;)f.push(arguments[i++]);for(i=0;i<r.length;)r[i].fn.apply(r[i++].ctx,f)}return this};var float=factory(factory);function factory(e){return typeof Float32Array<"u"?function(){var t=new Float32Array([-0]),r=new Uint8Array(t.buffer),f=r[3]===128;function i(s,o,l){t[0]=s,o[l]=r[0],o[l+1]=r[1],o[l+2]=r[2],o[l+3]=r[3]}function u(s,o,l){t[0]=s,o[l]=r[3],o[l+1]=r[2],o[l+2]=r[1],o[l+3]=r[0]}e.writeFloatLE=f?i:u,e.writeFloatBE=f?u:i;function n(s,o){return r[0]=s[o],r[1]=s[o+1],r[2]=s[o+2],r[3]=s[o+3],t[0]}function a(s,o){return r[3]=s[o],r[2]=s[o+1],r[1]=s[o+2],r[0]=s[o+3],t[0]}e.readFloatLE=f?n:a,e.readFloatBE=f?a:n}():function(){function t(f,i,u,n){var a=i<0?1:0;if(a&&(i=-i),i===0)f(1/i>0?0:2147483648,u,n);else if(isNaN(i))f(2143289344,u,n);else if(i>34028234663852886e22)f((a<<31|2139095040)>>>0,u,n);else if(i<11754943508222875e-54)f((a<<31|Math.round(i/1401298464324817e-60))>>>0,u,n);else{var s=Math.floor(Math.log(i)/Math.LN2),o=Math.round(i*Math.pow(2,-s)*8388608)&8388607;f((a<<31|s+127<<23|o)>>>0,u,n)}}e.writeFloatLE=t.bind(null,writeUintLE),e.writeFloatBE=t.bind(null,writeUintBE);function r(f,i,u){var n=f(i,u),a=(n>>31)*2+1,s=n>>>23&255,o=n&8388607;return s===255?o?NaN:a*(1/0):s===0?a*1401298464324817e-60*o:a*Math.pow(2,s-150)*(o+8388608)}e.readFloatLE=r.bind(null,readUintLE),e.readFloatBE=r.bind(null,readUintBE)}(),typeof Float64Array<"u"?function(){var t=new Float64Array([-0]),r=new Uint8Array(t.buffer),f=r[7]===128;function i(s,o,l){t[0]=s,o[l]=r[0],o[l+1]=r[1],o[l+2]=r[2],o[l+3]=r[3],o[l+4]=r[4],o[l+5]=r[5],o[l+6]=r[6],o[l+7]=r[7]}function u(s,o,l){t[0]=s,o[l]=r[7],o[l+1]=r[6],o[l+2]=r[5],o[l+3]=r[4],o[l+4]=r[3],o[l+5]=r[2],o[l+6]=r[1],o[l+7]=r[0]}e.writeDoubleLE=f?i:u,e.writeDoubleBE=f?u:i;function n(s,o){return r[0]=s[o],r[1]=s[o+1],r[2]=s[o+2],r[3]=s[o+3],r[4]=s[o+4],r[5]=s[o+5],r[6]=s[o+6],r[7]=s[o+7],t[0]}function a(s,o){return r[7]=s[o],r[6]=s[o+1],r[5]=s[o+2],r[4]=s[o+3],r[3]=s[o+4],r[2]=s[o+5],r[1]=s[o+6],r[0]=s[o+7],t[0]}e.readDoubleLE=f?n:a,e.readDoubleBE=f?a:n}():function(){function t(f,i,u,n,a,s){var o=n<0?1:0;if(o&&(n=-n),n===0)f(0,a,s+i),f(1/n>0?0:2147483648,a,s+u);else if(isNaN(n))f(0,a,s+i),f(2146959360,a,s+u);else if(n>17976931348623157e292)f(0,a,s+i),f((o<<31|2146435072)>>>0,a,s+u);else{var l;if(n<22250738585072014e-324)l=n/5e-324,f(l>>>0,a,s+i),f((o<<31|l/4294967296)>>>0,a,s+u);else{var h=Math.floor(Math.log(n)/Math.LN2);h===1024&&(h=1023),l=n*Math.pow(2,-h),f(l*4503599627370496>>>0,a,s+i),f((o<<31|h+1023<<20|l*1048576&1048575)>>>0,a,s+u)}}}e.writeDoubleLE=t.bind(null,writeUintLE,0,4),e.writeDoubleBE=t.bind(null,writeUintBE,4,0);function r(f,i,u,n,a){var s=f(n,a+i),o=f(n,a+u),l=(o>>31)*2+1,h=o>>>20&2047,c=4294967296*(o&1048575)+s;return h===2047?c?NaN:l*(1/0):h===0?l*5e-324*c:l*Math.pow(2,h-1075)*(c+4503599627370496)}e.readDoubleLE=r.bind(null,readUintLE,0,4),e.readDoubleBE=r.bind(null,readUintBE,4,0)}(),e}function writeUintLE(e,t,r){t[r]=e&255,t[r+1]=e>>>8&255,t[r+2]=e>>>16&255,t[r+3]=e>>>24}function writeUintBE(e,t,r){t[r]=e>>>24,t[r+1]=e>>>16&255,t[r+2]=e>>>8&255,t[r+3]=e&255}function readUintLE(e,t){return(e[t]|e[t+1]<<8|e[t+2]<<16|e[t+3]<<24)>>>0}function readUintBE(e,t){return(e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3])>>>0}var inquire_1=inquire;function inquire(moduleName){try{var mod=eval("quire".replace(/^/,"re"))(moduleName);if(mod&&(mod.length||Object.keys(mod).length))return mod}catch(e){}return null}var utf8$2={};(function(e){var t=e;t.length=function(f){for(var i=0,u=0,n=0;n<f.length;++n)u=f.charCodeAt(n),u<128?i+=1:u<2048?i+=2:(u&64512)===55296&&(f.charCodeAt(n+1)&64512)===56320?(++n,i+=4):i+=3;return i},t.read=function(f,i,u){var n=u-i;if(n<1)return"";for(var a=null,s=[],o=0,l;i<u;)l=f[i++],l<128?s[o++]=l:l>191&&l<224?s[o++]=(l&31)<<6|f[i++]&63:l>239&&l<365?(l=((l&7)<<18|(f[i++]&63)<<12|(f[i++]&63)<<6|f[i++]&63)-65536,s[o++]=55296+(l>>10),s[o++]=56320+(l&1023)):s[o++]=(l&15)<<12|(f[i++]&63)<<6|f[i++]&63,o>8191&&((a||(a=[])).push(String.fromCharCode.apply(String,s)),o=0);return a?(o&&a.push(String.fromCharCode.apply(String,s.slice(0,o))),a.join("")):String.fromCharCode.apply(String,s.slice(0,o))},t.write=function(f,i,u){for(var n=u,a,s,o=0;o<f.length;++o)a=f.charCodeAt(o),a<128?i[u++]=a:a<2048?(i[u++]=a>>6|192,i[u++]=a&63|128):(a&64512)===55296&&((s=f.charCodeAt(o+1))&64512)===56320?(a=65536+((a&1023)<<10)+(s&1023),++o,i[u++]=a>>18|240,i[u++]=a>>12&63|128,i[u++]=a>>6&63|128,i[u++]=a&63|128):(i[u++]=a>>12|224,i[u++]=a>>6&63|128,i[u++]=a&63|128);return u-n}})(utf8$2);var pool_1=pool;function pool(e,t,r){var f=r||8192,i=f>>>1,u=null,n=f;return function(s){if(s<1||s>i)return e(s);n+s>f&&(u=e(f),n=0);var o=t.call(u,n,n+=s);return n&7&&(n=(n|7)+1),o}}var longbits,hasRequiredLongbits;function requireLongbits(){if(hasRequiredLongbits)return longbits;hasRequiredLongbits=1,longbits=t;var e=requireMinimal();function t(u,n){this.lo=u>>>0,this.hi=n>>>0}var r=t.zero=new t(0,0);r.toNumber=function(){return 0},r.zzEncode=r.zzDecode=function(){return this},r.length=function(){return 1};var f=t.zeroHash="\0\0\0\0\0\0\0\0";t.fromNumber=function(n){if(n===0)return r;var a=n<0;a&&(n=-n);var s=n>>>0,o=(n-s)/4294967296>>>0;return a&&(o=~o>>>0,s=~s>>>0,++s>4294967295&&(s=0,++o>4294967295&&(o=0))),new t(s,o)},t.from=function(n){if(typeof n=="number")return t.fromNumber(n);if(e.isString(n))if(e.Long)n=e.Long.fromString(n);else return t.fromNumber(parseInt(n,10));return n.low||n.high?new t(n.low>>>0,n.high>>>0):r},t.prototype.toNumber=function(n){if(!n&&this.hi>>>31){var a=~this.lo+1>>>0,s=~this.hi>>>0;return a||(s=s+1>>>0),-(a+s*4294967296)}return this.lo+this.hi*4294967296},t.prototype.toLong=function(n){return e.Long?new e.Long(this.lo|0,this.hi|0,!!n):{low:this.lo|0,high:this.hi|0,unsigned:!!n}};var i=String.prototype.charCodeAt;return t.fromHash=function(n){return n===f?r:new t((i.call(n,0)|i.call(n,1)<<8|i.call(n,2)<<16|i.call(n,3)<<24)>>>0,(i.call(n,4)|i.call(n,5)<<8|i.call(n,6)<<16|i.call(n,7)<<24)>>>0)},t.prototype.toHash=function(){return String.fromCharCode(this.lo&255,this.lo>>>8&255,this.lo>>>16&255,this.lo>>>24,this.hi&255,this.hi>>>8&255,this.hi>>>16&255,this.hi>>>24)},t.prototype.zzEncode=function(){var n=this.hi>>31;return this.hi=((this.hi<<1|this.lo>>>31)^n)>>>0,this.lo=(this.lo<<1^n)>>>0,this},t.prototype.zzDecode=function(){var n=-(this.lo&1);return this.lo=((this.lo>>>1|this.hi<<31)^n)>>>0,this.hi=(this.hi>>>1^n)>>>0,this},t.prototype.length=function(){var n=this.lo,a=(this.lo>>>28|this.hi<<4)>>>0,s=this.hi>>>24;return s===0?a===0?n<16384?n<128?1:2:n<2097152?3:4:a<16384?a<128?5:6:a<2097152?7:8:s<128?9:10},longbits}var hasRequiredMinimal;function requireMinimal(){return hasRequiredMinimal||(hasRequiredMinimal=1,function(e){var t=e;t.asPromise=aspromise,t.base64=base64$1,t.EventEmitter=eventemitter,t.float=float,t.inquire=inquire_1,t.utf8=utf8$2,t.pool=pool_1,t.LongBits=requireLongbits(),t.isNode=!!(typeof commonjsGlobal<"u"&&commonjsGlobal&&commonjsGlobal.process&&commonjsGlobal.process.versions&&commonjsGlobal.process.versions.node),t.global=t.isNode&&commonjsGlobal||typeof window<"u"&&window||typeof self<"u"&&self||commonjsGlobal,t.emptyArray=Object.freeze?Object.freeze([]):[],t.emptyObject=Object.freeze?Object.freeze({}):{},t.isInteger=Number.isInteger||function(u){return typeof u=="number"&&isFinite(u)&&Math.floor(u)===u},t.isString=function(u){return typeof u=="string"||u instanceof String},t.isObject=function(u){return u&&typeof u=="object"},t.isset=t.isSet=function(u,n){var a=u[n];return a!=null&&u.hasOwnProperty(n)?typeof a!="object"||(Array.isArray(a)?a.length:Object.keys(a).length)>0:!1},t.Buffer=function(){try{var i=t.inquire("buffer").Buffer;return i.prototype.utf8Write?i:null}catch{return null}}(),t._Buffer_from=null,t._Buffer_allocUnsafe=null,t.newBuffer=function(u){return typeof u=="number"?t.Buffer?t._Buffer_allocUnsafe(u):new t.Array(u):t.Buffer?t._Buffer_from(u):typeof Uint8Array>"u"?u:new Uint8Array(u)},t.Array=typeof Uint8Array<"u"?Uint8Array:Array,t.Long=t.global.dcodeIO&&t.global.dcodeIO.Long||t.global.Long||t.inquire("long"),t.key2Re=/^true|false|0|1$/,t.key32Re=/^-?(?:0|[1-9][0-9]*)$/,t.key64Re=/^(?:[\\x00-\\xff]{8}|-?(?:0|[1-9][0-9]*))$/,t.longToHash=function(u){return u?t.LongBits.from(u).toHash():t.LongBits.zeroHash},t.longFromHash=function(u,n){var a=t.LongBits.fromHash(u);return t.Long?t.Long.fromBits(a.lo,a.hi,n):a.toNumber(!!n)};function r(i,u,n){for(var a=Object.keys(u),s=0;s<a.length;++s)(i[a[s]]===void 0||!n)&&(i[a[s]]=u[a[s]]);return i}t.merge=r,t.lcFirst=function(u){return u.charAt(0).toLowerCase()+u.substring(1)};function f(i){function u(n,a){if(!(this instanceof u))return new u(n,a);Object.defineProperty(this,"message",{get:function(){return n}}),Error.captureStackTrace?Error.captureStackTrace(this,u):Object.defineProperty(this,"stack",{value:new Error().stack||""}),a&&r(this,a)}return(u.prototype=Object.create(Error.prototype)).constructor=u,Object.defineProperty(u.prototype,"name",{get:function(){return i}}),u.prototype.toString=function(){return this.name+": "+this.message},u}t.newError=f,t.ProtocolError=f("ProtocolError"),t.oneOfGetter=function(u){for(var n={},a=0;a<u.length;++a)n[u[a]]=1;return function(){for(var s=Object.keys(this),o=s.length-1;o>-1;--o)if(n[s[o]]===1&&this[s[o]]!==void 0&&this[s[o]]!==null)return s[o]}},t.oneOfSetter=function(u){return function(n){for(var a=0;a<u.length;++a)u[a]!==n&&delete this[u[a]]}},t.toJSONOptions={longs:String,enums:String,bytes:String,json:!0},t._configure=function(){var i=t.Buffer;if(!i){t._Buffer_from=t._Buffer_allocUnsafe=null;return}t._Buffer_from=i.from!==Uint8Array.from&&i.from||function(n,a){return new i(n,a)},t._Buffer_allocUnsafe=i.allocUnsafe||function(n){return new i(n)}}}(minimal$1)),minimal$1}var writer=Writer$1,util$4=requireMinimal(),BufferWriter$1,LongBits$1=util$4.LongBits,base64=util$4.base64,utf8$1=util$4.utf8;function Op(e,t,r){this.fn=e,this.len=t,this.next=void 0,this.val=r}function noop(){}function State(e){this.head=e.head,this.tail=e.tail,this.len=e.len,this.next=e.states}function Writer$1(){this.len=0,this.head=new Op(noop,0,0),this.tail=this.head,this.states=null}var create$1=function e(){return util$4.Buffer?function(){return(Writer$1.create=function(){return new BufferWriter$1})()}:function(){return new Writer$1}};Writer$1.create=create$1();Writer$1.alloc=function e(t){return new util$4.Array(t)};util$4.Array!==Array&&(Writer$1.alloc=util$4.pool(Writer$1.alloc,util$4.Array.prototype.subarray));Writer$1.prototype._push=function e(t,r,f){return this.tail=this.tail.next=new Op(t,r,f),this.len+=r,this};function writeByte(e,t,r){t[r]=e&255}function writeVarint32(e,t,r){for(;e>127;)t[r++]=e&127|128,e>>>=7;t[r]=e}function VarintOp(e,t){this.len=e,this.next=void 0,this.val=t}VarintOp.prototype=Object.create(Op.prototype);VarintOp.prototype.fn=writeVarint32;Writer$1.prototype.uint32=function e(t){return this.len+=(this.tail=this.tail.next=new VarintOp((t=t>>>0)<128?1:t<16384?2:t<2097152?3:t<268435456?4:5,t)).len,this};Writer$1.prototype.int32=function e(t){return t<0?this._push(writeVarint64,10,LongBits$1.fromNumber(t)):this.uint32(t)};Writer$1.prototype.sint32=function e(t){return this.uint32((t<<1^t>>31)>>>0)};function writeVarint64(e,t,r){for(;e.hi;)t[r++]=e.lo&127|128,e.lo=(e.lo>>>7|e.hi<<25)>>>0,e.hi>>>=7;for(;e.lo>127;)t[r++]=e.lo&127|128,e.lo=e.lo>>>7;t[r++]=e.lo}Writer$1.prototype.uint64=function e(t){var r=LongBits$1.from(t);return this._push(writeVarint64,r.length(),r)};Writer$1.prototype.int64=Writer$1.prototype.uint64;Writer$1.prototype.sint64=function e(t){var r=LongBits$1.from(t).zzEncode();return this._push(writeVarint64,r.length(),r)};Writer$1.prototype.bool=function e(t){return this._push(writeByte,1,t?1:0)};function writeFixed32(e,t,r){t[r]=e&255,t[r+1]=e>>>8&255,t[r+2]=e>>>16&255,t[r+3]=e>>>24}Writer$1.prototype.fixed32=function e(t){return this._push(writeFixed32,4,t>>>0)};Writer$1.prototype.sfixed32=Writer$1.prototype.fixed32;Writer$1.prototype.fixed64=function e(t){var r=LongBits$1.from(t);return this._push(writeFixed32,4,r.lo)._push(writeFixed32,4,r.hi)};Writer$1.prototype.sfixed64=Writer$1.prototype.fixed64;Writer$1.prototype.float=function e(t){return this._push(util$4.float.writeFloatLE,4,t)};Writer$1.prototype.double=function e(t){return this._push(util$4.float.writeDoubleLE,8,t)};var writeBytes=util$4.Array.prototype.set?function e(t,r,f){r.set(t,f)}:function e(t,r,f){for(var i=0;i<t.length;++i)r[f+i]=t[i]};Writer$1.prototype.bytes=function e(t){var r=t.length>>>0;if(!r)return this._push(writeByte,1,0);if(util$4.isString(t)){var f=Writer$1.alloc(r=base64.length(t));base64.decode(t,f,0),t=f}return this.uint32(r)._push(writeBytes,r,t)};Writer$1.prototype.string=function e(t){var r=utf8$1.length(t);return r?this.uint32(r)._push(utf8$1.write,r,t):this._push(writeByte,1,0)};Writer$1.prototype.fork=function e(){return this.states=new State(this),this.head=this.tail=new Op(noop,0,0),this.len=0,this};Writer$1.prototype.reset=function e(){return this.states?(this.head=this.states.head,this.tail=this.states.tail,this.len=this.states.len,this.states=this.states.next):(this.head=this.tail=new Op(noop,0,0),this.len=0),this};Writer$1.prototype.ldelim=function e(){var t=this.head,r=this.tail,f=this.len;return this.reset().uint32(f),f&&(this.tail.next=t.next,this.tail=r,this.len+=f),this};Writer$1.prototype.finish=function e(){for(var t=this.head.next,r=this.constructor.alloc(this.len),f=0;t;)t.fn(t.val,r,f),f+=t.len,t=t.next;return r};Writer$1._configure=function(e){BufferWriter$1=e,Writer$1.create=create$1(),BufferWriter$1._configure()};var writer_buffer=BufferWriter,Writer=writer;(BufferWriter.prototype=Object.create(Writer.prototype)).constructor=BufferWriter;var util$3=requireMinimal();function BufferWriter(){Writer.call(this)}BufferWriter._configure=function(){BufferWriter.alloc=util$3._Buffer_allocUnsafe,BufferWriter.writeBytesBuffer=util$3.Buffer&&util$3.Buffer.prototype instanceof Uint8Array&&util$3.Buffer.prototype.set.name==="set"?function(t,r,f){r.set(t,f)}:function(t,r,f){if(t.copy)t.copy(r,f,0,t.length);else for(var i=0;i<t.length;)r[f++]=t[i++]}};BufferWriter.prototype.bytes=function e(t){util$3.isString(t)&&(t=util$3._Buffer_from(t,"base64"));var r=t.length>>>0;return this.uint32(r),r&&this._push(BufferWriter.writeBytesBuffer,r,t),this};function writeStringBuffer(e,t,r){e.length<40?util$3.utf8.write(e,t,r):t.utf8Write?t.utf8Write(e,r):t.write(e,r)}BufferWriter.prototype.string=function e(t){var r=util$3.Buffer.byteLength(t);return this.uint32(r),r&&this._push(writeStringBuffer,r,t),this};BufferWriter._configure();var reader=Reader$1,util$2=requireMinimal(),BufferReader$1,LongBits=util$2.LongBits,utf8=util$2.utf8;function indexOutOfRange(e,t){return RangeError("index out of range: "+e.pos+" + "+(t||1)+" > "+e.len)}function Reader$1(e){this.buf=e,this.pos=0,this.len=e.length}var create_array=typeof Uint8Array<"u"?function e(t){if(t instanceof Uint8Array||Array.isArray(t))return new Reader$1(t);throw Error("illegal buffer")}:function e(t){if(Array.isArray(t))return new Reader$1(t);throw Error("illegal buffer")},create=function e(){return util$2.Buffer?function(r){return(Reader$1.create=function(i){return util$2.Buffer.isBuffer(i)?new BufferReader$1(i):create_array(i)})(r)}:create_array};Reader$1.create=create();Reader$1.prototype._slice=util$2.Array.prototype.subarray||util$2.Array.prototype.slice;Reader$1.prototype.uint32=function e(){var t=4294967295;return function(){if(t=(this.buf[this.pos]&127)>>>0,this.buf[this.pos++]<128||(t=(t|(this.buf[this.pos]&127)<<7)>>>0,this.buf[this.pos++]<128)||(t=(t|(this.buf[this.pos]&127)<<14)>>>0,this.buf[this.pos++]<128)||(t=(t|(this.buf[this.pos]&127)<<21)>>>0,this.buf[this.pos++]<128)||(t=(t|(this.buf[this.pos]&15)<<28)>>>0,this.buf[this.pos++]<128))return t;if((this.pos+=5)>this.len)throw this.pos=this.len,indexOutOfRange(this,10);return t}}();Reader$1.prototype.int32=function e(){return this.uint32()|0};Reader$1.prototype.sint32=function e(){var t=this.uint32();return t>>>1^-(t&1)|0};function readLongVarint(){var e=new LongBits(0,0),t=0;if(this.len-this.pos>4){for(;t<4;++t)if(e.lo=(e.lo|(this.buf[this.pos]&127)<<t*7)>>>0,this.buf[this.pos++]<128)return e;if(e.lo=(e.lo|(this.buf[this.pos]&127)<<28)>>>0,e.hi=(e.hi|(this.buf[this.pos]&127)>>4)>>>0,this.buf[this.pos++]<128)return e;t=0}else{for(;t<3;++t){if(this.pos>=this.len)throw indexOutOfRange(this);if(e.lo=(e.lo|(this.buf[this.pos]&127)<<t*7)>>>0,this.buf[this.pos++]<128)return e}return e.lo=(e.lo|(this.buf[this.pos++]&127)<<t*7)>>>0,e}if(this.len-this.pos>4){for(;t<5;++t)if(e.hi=(e.hi|(this.buf[this.pos]&127)<<t*7+3)>>>0,this.buf[this.pos++]<128)return e}else for(;t<5;++t){if(this.pos>=this.len)throw indexOutOfRange(this);if(e.hi=(e.hi|(this.buf[this.pos]&127)<<t*7+3)>>>0,this.buf[this.pos++]<128)return e}throw Error("invalid varint encoding")}Reader$1.prototype.bool=function e(){return this.uint32()!==0};function readFixed32_end(e,t){return(e[t-4]|e[t-3]<<8|e[t-2]<<16|e[t-1]<<24)>>>0}Reader$1.prototype.fixed32=function e(){if(this.pos+4>this.len)throw indexOutOfRange(this,4);return readFixed32_end(this.buf,this.pos+=4)};Reader$1.prototype.sfixed32=function e(){if(this.pos+4>this.len)throw indexOutOfRange(this,4);return readFixed32_end(this.buf,this.pos+=4)|0};function readFixed64(){if(this.pos+8>this.len)throw indexOutOfRange(this,8);return new LongBits(readFixed32_end(this.buf,this.pos+=4),readFixed32_end(this.buf,this.pos+=4))}Reader$1.prototype.float=function e(){if(this.pos+4>this.len)throw indexOutOfRange(this,4);var t=util$2.float.readFloatLE(this.buf,this.pos);return this.pos+=4,t};Reader$1.prototype.double=function e(){if(this.pos+8>this.len)throw indexOutOfRange(this,4);var t=util$2.float.readDoubleLE(this.buf,this.pos);return this.pos+=8,t};Reader$1.prototype.bytes=function e(){var t=this.uint32(),r=this.pos,f=this.pos+t;if(f>this.len)throw indexOutOfRange(this,t);return this.pos+=t,Array.isArray(this.buf)?this.buf.slice(r,f):r===f?new this.buf.constructor(0):this._slice.call(this.buf,r,f)};Reader$1.prototype.string=function e(){var t=this.bytes();return utf8.read(t,0,t.length)};Reader$1.prototype.skip=function e(t){if(typeof t=="number"){if(this.pos+t>this.len)throw indexOutOfRange(this,t);this.pos+=t}else do if(this.pos>=this.len)throw indexOutOfRange(this);while(this.buf[this.pos++]&128);return this};Reader$1.prototype.skipType=function(e){switch(e){case 0:this.skip();break;case 1:this.skip(8);break;case 2:this.skip(this.uint32());break;case 3:for(;(e=this.uint32()&7)!==4;)this.skipType(e);break;case 5:this.skip(4);break;default:throw Error("invalid wire type "+e+" at offset "+this.pos)}return this};Reader$1._configure=function(e){BufferReader$1=e,Reader$1.create=create(),BufferReader$1._configure();var t=util$2.Long?"toLong":"toNumber";util$2.merge(Reader$1.prototype,{int64:function(){return readLongVarint.call(this)[t](!1)},uint64:function(){return readLongVarint.call(this)[t](!0)},sint64:function(){return readLongVarint.call(this).zzDecode()[t](!1)},fixed64:function(){return readFixed64.call(this)[t](!0)},sfixed64:function(){return readFixed64.call(this)[t](!1)}})};var reader_buffer=BufferReader,Reader=reader;(BufferReader.prototype=Object.create(Reader.prototype)).constructor=BufferReader;var util$1=requireMinimal();function BufferReader(e){Reader.call(this,e)}BufferReader._configure=function(){util$1.Buffer&&(BufferReader.prototype._slice=util$1.Buffer.prototype.slice)};BufferReader.prototype.string=function e(){var t=this.uint32();return this.buf.utf8Slice?this.buf.utf8Slice(this.pos,this.pos=Math.min(this.pos+t,this.len)):this.buf.toString("utf-8",this.pos,this.pos=Math.min(this.pos+t,this.len))};BufferReader._configure();var rpc={},service=Service,util=requireMinimal();(Service.prototype=Object.create(util.EventEmitter.prototype)).constructor=Service;function Service(e,t,r){if(typeof e!="function")throw TypeError("rpcImpl must be a function");util.EventEmitter.call(this),this.rpcImpl=e,this.requestDelimited=!!t,this.responseDelimited=!!r}Service.prototype.rpcCall=function e(t,r,f,i,u){if(!i)throw TypeError("request must be specified");var n=this;if(!u)return util.asPromise(e,n,t,r,f,i);if(!n.rpcImpl){setTimeout(function(){u(Error("already ended"))},0);return}try{return n.rpcImpl(t,r[n.requestDelimited?"encodeDelimited":"encode"](i).finish(),function(s,o){if(s)return n.emit("error",s,t),u(s);if(o===null){n.end(!0);return}if(!(o instanceof f))try{o=f[n.responseDelimited?"decodeDelimited":"decode"](o)}catch(l){return n.emit("error",l,t),u(l)}return n.emit("data",o,t),u(null,o)})}catch(a){n.emit("error",a,t),setTimeout(function(){u(a)},0);return}};Service.prototype.end=function e(t){return this.rpcImpl&&(t||this.rpcImpl(null,null,null),this.rpcImpl=null,this.emit("end").off()),this};(function(e){var t=e;t.Service=service})(rpc);var roots={};(function(e){var t=e;t.build="minimal",t.Writer=writer,t.BufferWriter=writer_buffer,t.Reader=reader,t.BufferReader=reader_buffer,t.util=requireMinimal(),t.rpc=rpc,t.roots=roots,t.configure=r;function r(){t.util._configure(),t.Writer._configure(t.BufferWriter),t.Reader._configure(t.BufferReader)}r()})(indexMinimal);var minimal=indexMinimal;const $protobuf=getDefaultExportFromCjs(minimal);export{$protobuf as $,commonjsGlobal as a,getDefaultExportFromCjs as b,commonjsRequire as c,getAugmentedNamespace as g,minimal as m};
