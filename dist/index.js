"use strict";var n=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var u=n(function(q,t){
var p=require('@stdlib/math-base-assert-is-nan/dist'),s=require('@stdlib/math-base-special-log1p/dist'),i=require('@stdlib/math-base-special-exp/dist');function a(r){return p(r)?NaN:r<=-37?i(r):r<=18?s(i(r)):r<=33.3?r+i(-r):r}t.exports=a
});var o=u();module.exports=o;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
