// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-log1p@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-exp@esm/index.mjs";var i=s,a=t,m=e;var r=function(s){return i(s)?NaN:s<=-37?m(s):s<=18?a(m(s)):s<=33.3?s+m(-s):s};export{r as default};
//# sourceMappingURL=index.mjs.map
