parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"en75":[function(require,module,exports) {

},{}],"uwKA":[function(require,module,exports) {
"use strict";require("../css/common.css");var t=["Secretariat","Eclipse","West Australian","Flying Fox","Seabiscuit"],e=0,n={startBtn:document.querySelector(".js-start-race"),winnerField:document.querySelector(".js-winner"),progressField:document.querySelector(".js-progress"),tableBody:document.querySelector(".js-results-table > tbody")};function r(){e+=1;var n=t.map(u);i(""),s("🤖 Заезд начался, ставки не принимаются!"),o(n),c(n)}function o(t){Promise.race(t).then(function(t){var n=t.horse,r=t.time;i("🎉 Победил ".concat(n,", финишировав за ").concat(r)),a({horse:n,time:r,raceCounter:e})})}function c(t){Promise.all(t).then(function(){s("📝 Заезд окончен, принимаются ставки")})}function i(t){n.progressField.textContent=t}function s(t){n.winnerField.textContent=t}function a(t){var e=t.horse,r=t.time,o=t.raceCounter,c="<tr><td>".concat(o,"</td><td>").concat(e,"</td><td>").concat(r,"</td></tr>");n.tableBody.insertAdjacentHTML("beforeend",c)}function u(t){return new Promise(function(e){var n=d(2e3,3500);setTimeout(function(){e({horse:t,time:n})},n)})}function d(t,e){return Math.floor(Math.random()*(e-t+1)+t)}n.startBtn.addEventListener("click",r);
},{"../css/common.css":"en75"}]},{},["uwKA"], null)
//# sourceMappingURL=/03-racetrack.e3c7b0aa.js.map