"use strict";var p=function(r,e){return function(){try{return e||r((e={exports:{}}).exports,e),e.exports}catch(n){throw (e=0, n)}};};var u=p(function(v,t){
var s=require('@stdlib/math-base-assert-is-nan/dist'),a=require('@stdlib/math-base-special-log1p/dist'),i=require('@stdlib/math-base-special-exp/dist');function o(r){return s(r)?NaN:r<=-37?i(r):r<=18?a(i(r)):r<=33.3?r+i(-r):r}t.exports=o
});var f=u();module.exports=f;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
