// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function r(r){return r!=r}var t="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var n=Object.prototype.toString;var e=Object.prototype.hasOwnProperty;var o="function"==typeof Symbol?Symbol.toStringTag:"";var a=t&&"symbol"==typeof Symbol.toStringTag?function(r){var t,a,i,u,f;if(null==r)return n.call(r);a=r[o],f=o,t=null!=(u=r)&&e.call(u,f);try{r[o]=void 0}catch(t){return n.call(r)}return i=n.call(r),t?r[o]=a:delete r[o],i}:function(r){return n.call(r)},i="function"==typeof Uint32Array;var u="function"==typeof Uint32Array?Uint32Array:null;var f,c="function"==typeof Uint32Array?Uint32Array:void 0;f=function(){var r,t,n;if("function"!=typeof u)return!1;try{t=new u(t=[1,3.14,-3.14,4294967296,4294967297]),n=t,r=(i&&n instanceof Uint32Array||"[object Uint32Array]"===a(n))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?c:function(){throw new Error("not implemented")};var l=f,y="function"==typeof Float64Array;var v="function"==typeof Float64Array?Float64Array:null;var p,b="function"==typeof Float64Array?Float64Array:void 0;p=function(){var r,t,n;if("function"!=typeof v)return!1;try{t=new v([1,3.14,-3.14,NaN]),n=t,r=(y&&n instanceof Float64Array||"[object Float64Array]"===a(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?b:function(){throw new Error("not implemented")};var w=p,A="function"==typeof Uint8Array;var _="function"==typeof Uint8Array?Uint8Array:null;var s,m="function"==typeof Uint8Array?Uint8Array:void 0;s=function(){var r,t,n;if("function"!=typeof _)return!1;try{t=new _(t=[1,3.14,-3.14,256,257]),n=t,r=(A&&n instanceof Uint8Array||"[object Uint8Array]"===a(n))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?m:function(){throw new Error("not implemented")};var d=s,U="function"==typeof Uint16Array;var h="function"==typeof Uint16Array?Uint16Array:null;var g,j="function"==typeof Uint16Array?Uint16Array:void 0;g=function(){var r,t,n;if("function"!=typeof h)return!1;try{t=new h(t=[1,3.14,-3.14,65536,65537]),n=t,r=(U&&n instanceof Uint16Array||"[object Uint16Array]"===a(n))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?j:function(){throw new Error("not implemented")};var I,N={uint16:g,uint8:d};(I=new N.uint16(1))[0]=4660;var O=52===new N.uint8(I.buffer)[0],S=!0===O?1:0,E=new w(1),F=new l(E.buffer);function H(r){return E[0]=r,F[S]}var T=!0===O?1:0,G=new w(1),P=new l(G.buffer);function L(r,t){return G[0]=r,P[T]=t>>>0,G[0]}var V=Number.POSITIVE_INFINITY,W=Number.NEGATIVE_INFINITY;var M=.6931471803691238,k=1.9082149292705877e-10;var x=Math.floor,Y=Math.ceil;function C(r){return r<0?Y(r):x(r)}function q(r){return r===V||r===W}var z="function"==typeof Object.defineProperty?Object.defineProperty:null;var B=Object.defineProperty,D=Object.prototype,J=D.toString,K=D.__defineGetter__,Q=D.__defineSetter__,R=D.__lookupGetter__,X=D.__lookupSetter__;var Z,$,rr=function(){try{return z({},"x",{}),!0}catch(r){return!1}}()?B:function(r,t,n){var e,o,a,i;if("object"!=typeof r||null===r||"[object Array]"===J.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof n||null===n||"[object Array]"===J.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((o="value"in n)&&(R.call(r,t)||X.call(r,t)?(e=r.__proto__,r.__proto__=D,delete r[t],r[t]=n.value,r.__proto__=e):r[t]=n.value),a="get"in n,i="set"in n,o&&(a||i))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&K&&K.call(r,t,n.get),i&&Q&&Q.call(r,t,n.set),r};function tr(r,t,n){rr(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}!0===O?(Z=1,$=0):(Z=0,$=1);var nr,er,or={HIGH:Z,LOW:$},ar=new w(1),ir=new l(ar.buffer),ur=or.HIGH,fr=or.LOW;function cr(r,t,n,e){return ar[0]=r,t[e]=ir[ur],t[e+n]=ir[fr],t}function lr(r){return cr(r,[0,0],1,0)}tr(lr,"assign",cr),!0===O?(nr=1,er=0):(nr=0,er=1);var yr={HIGH:nr,LOW:er},vr=new w(1),pr=new l(vr.buffer),br=yr.HIGH,wr=yr.LOW;function Ar(r,t){return pr[br]=r,pr[wr]=t,vr[0]}var _r=[0,0];function sr(t,n,e,o){return r(t)||q(t)?(n[o]=t,n[o+e]=0,n):0!==t&&function(r){return Math.abs(r)}(t)<22250738585072014e-324?(n[o]=4503599627370496*t,n[o+e]=-52,n):(n[o]=t,n[o+e]=0,n)}tr((function(r){return sr(r,[0,0],1,0)}),"assign",sr);var mr=[0,0],dr=[0,0];function Ur(t,n){var e,o,a,i,u,f;return 0===n||0===t||r(t)||q(t)?t:(sr(t,mr,1,0),n+=mr[1],n+=function(r){var t=H(r);return(t=(2146435072&t)>>>20)-1023|0}(t=mr[0]),n<-1074?(a=0,i=t,lr.assign(a,_r,1,0),u=_r[0],u&=2147483647,f=H(i),Ar(u|=f&=2147483648,_r[1])):n>1023?t<0?W:V:(n<=-1023?(n+=52,o=2220446049250313e-31):o=1,lr.assign(t,dr,1,0),e=dr[0],e&=2148532223,o*Ar(e|=n+1023<<20,dr[1])))}function hr(t){var n;return r(t)||t===V?t:t===W?0:t>709.782712893384?V:t<-745.1332191019411?0:t>-3.725290298461914e-9&&t<3.725290298461914e-9?1+t:function(r,t,n){var e,o,a,i;return Ur(1-(t-(e=r-t)*(a=e-(o=e*e)*(0===(i=o)?.16666666666666602:.16666666666666602+i*(i*(6613756321437934e-20+i*(4.1381367970572385e-8*i-16533902205465252e-22))-.0027777777777015593)))/(2-a)-r),n)}(t-.6931471803691238*(n=C(t<0?1.4426950408889634*t-.5:1.4426950408889634*t+.5)),1.9082149292705877e-10*n,n)}function gr(t){return r(t)?NaN:t<=-37?hr(t):t<=18?function(t){var n,e,o,a,i,u,f,c,l,y;if(t<-1||r(t))return NaN;if(-1===t)return W;if(t===V)return t;if(0===t)return t;if(y=1,(o=t<0?-t:t)<.41421356237309503){if(o<1.862645149230957e-9)return o<5551115123125783e-32?t:t-t*t*.5;t>-.2928932188134525&&(y=0,a=t,e=1)}return 0!==y&&(o<9007199254740992?(i=(y=((e=H(l=1+t))>>20)-1023)>0?1-(l-t):t-(l-1),i/=l):(y=((e=H(l=t))>>20)-1023,i=0),(e&=1048575)<434334?l=L(l,1072693248|e):(y+=1,l=L(l,1071644672|e),e=1048576-e>>2),a=l-1),n=.5*a*a,0===e?0===a?y*M+(i+=y*k):y*M-((c=n*(1-.6666666666666666*a))-(y*k+i)-a):(c=(f=(u=a/(2+a))*u)*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+.14798198605116586*r)))))}(f),0===y?a-(n-u*(n+c)):y*M-(n-(u*(n+c)+(y*k+i))-a))}(hr(t)):t<=33.3?t+hr(-t):t}export{gr as default};
//# sourceMappingURL=mod.js.map