!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=6)}([function(e,t){e.exports=React},function(e,t,n){var r=n(3),o=n(4);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var a={insert:"head",singleton:!1},c=(r(o,a),o.locals?o.locals:{});e.exports=c},function(e,t){e.exports=ReactDOM},function(e,t,n){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},a=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),c=[];function i(e){for(var t=-1,n=0;n<c.length;n++)if(c[n].identifier===e){t=n;break}return t}function u(e,t){for(var n={},r=[],o=0;o<e.length;o++){var a=e[o],u=t.base?a[0]+t.base:a[0],l=n[u]||0,s="".concat(u," ").concat(l);n[u]=l+1;var f=i(s),p={css:a[1],media:a[2],sourceMap:a[3]};-1!==f?(c[f].references++,c[f].updater(p)):c.push({identifier:s,updater:y(p,t),references:1}),r.push(s)}return r}function l(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var o=n.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var c=a(e.insert||"head");if(!c)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");c.appendChild(t)}return t}var s,f=(s=[],function(e,t){return s[e]=t,s.filter(Boolean).join("\n")});function p(e,t,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=f(t,o);else{var a=document.createTextNode(o),c=e.childNodes;c[t]&&e.removeChild(c[t]),c.length?e.insertBefore(a,c[t]):e.appendChild(a)}}function m(e,t,n){var r=n.css,o=n.media,a=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),a&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var d=null,v=0;function y(e,t){var n,r,o;if(t.singleton){var a=v++;n=d||(d=l(t)),r=p.bind(null,n,a,!1),o=p.bind(null,n,a,!0)}else n=l(t),r=m.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o());var n=u(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var o=i(n[r]);c[o].references--}for(var a=u(e,t),l=0;l<n.length;l++){var s=i(n[l]);0===c[s].references&&(c[s].updater(),c.splice(s,1))}n=a}}}},function(e,t,n){(t=n(5)(!1)).push([e.i,"._32FnJCAPAsJEd1wZG6U1So{padding:0.1rem 1.25rem}._1GfraOFNFlZ-vTQUKmhGI2{display:flex;flex-direction:column}\n",""]),t.locals={statContainer:"_32FnJCAPAsJEd1wZG6U1So",statDetails:"_1GfraOFNFlZ-vTQUKmhGI2"},e.exports=t},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=(c=r,i=btoa(unescape(encodeURIComponent(JSON.stringify(c)))),u="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(i),"/*# ".concat(u," */")),a=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[n].concat(a).concat([o]).join("\n")}var c,i,u;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var a=0;a<this.length;a++){var c=this[a][0];null!=c&&(o[c]=!0)}for(var i=0;i<e.length;i++){var u=[].concat(e[i]);r&&o[u[0]]||(n&&(u[2]?u[2]="".concat(n," and ").concat(u[2]):u[2]=n),t.push(u))}},t}},function(e,t,n){"use strict";n.r(t);var r=n(2),o=n.n(r),a=n(0),c=n.n(a),i=window;i.items=items;var u=i,l=n(1),s=n.n(l);function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(e,t,n){return t&&m(e.prototype,t),n&&m(e,n),e}function v(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(e){return function(){var t,n=g(e);if(O()){var r=g(this).constructor;t=Reflect.construct(n,arguments,r)}else t=n.apply(this,arguments);return h(this,t)}}function h(e,t){return!t||"object"!==f(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function O(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var j=function(e){v(n,e);var t=b(n);function n(){return p(this,n),t.apply(this,arguments)}return d(n,[{key:"render",value:function(){var e=this.props.id,t=this.props.value;if(0===t)return null;var n=Math.floor(60*t*60),r=null,o=u.skillLevel[e];if(o<99){var a=(u.exp.level_to_xp(o+1)-u.skillXP[e])/t,i=Math.floor(a/60/60),l=Math.floor(a/60)%60,f=Math.floor(a)%60;r=c.a.createElement("small",null,"".concat(i>0?i+"h":"","\n                    ").concat(l>0?l+"m":"","\n                    ").concat(i+l>0?"":f+"s","\n                    till next level"))}var p=u.skillName[e],m=p.toLowerCase(),d="assets/media/skills/".concat(m,"/").concat(m,".svg");return c.a.createElement("div",{className:"nav-main-item"},c.a.createElement("a",{className:"nav-main-link "+s.a.statContainer},c.a.createElement("img",{className:"nav-img",src:d}),c.a.createElement("div",{className:s.a.statDetails},c.a.createElement("span",{className:"nav-main-link-name"},p),c.a.createElement("small",null,"".concat(u.numberWithCommas(n)," exp/hr")),r)))}}]),n}(a.Component),w=function(e){v(n,e);var t=b(n);function n(){return p(this,n),t.apply(this,arguments)}return d(n,[{key:"render",value:function(){var e=this.props.id,t=this.props.value;if(0===t)return null;var n=Math.floor(60*t*60),r=u.items[e],o=r.sellsFor*n;return c.a.createElement("div",{className:"nav-main-item"},c.a.createElement("a",{className:"nav-main-link "+s.a.statContainer},c.a.createElement("img",{className:"nav-img",src:r.media}),c.a.createElement("div",{className:s.a.statDetails},c.a.createElement("span",{className:"nav-main-link-name"},r.name),c.a.createElement("small",null,"".concat(u.numberWithCommas(n)," items/hr")),c.a.createElement("small",null,"".concat(u.numberWithCommas(o)," gold/hr")))))}}]),n}(a.Component);function k(e){return(k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function E(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function S(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function _(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function P(e,t){return(P=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function C(e,t){return!t||"object"!==k(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function x(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function T(e){return(T=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var N,R=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&P(e,t)}(i,e);var t,n,r,o,a=(t=i,function(){var e,n=T(t);if(x()){var r=T(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return C(this,e)});function i(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),(t=a.call(this,e)).state={trackedObjects:[]},t}return n=i,(r=[{key:"trackObject",value:function(e,t,n){var r=(new Date).getTime(),o=this.state.trackedObjects.find((function(n){return n.type===e&&n.id===t}));if(void 0!==o){var a={},c=(r-o.lastTime)/1e3,i=n/c;a.lastTime=r,0===o.value?a.value=i:c>0&&(a.value=(9*o.value+i)/10),this.setState((function(e){return{trackedObjects:e.trackedObjects.map((function(e){return e.key===o.key?function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?E(Object(n),!0).forEach((function(t){S(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):E(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e,{},a):e}))}}))}else this.setState((function(n){return{trackedObjects:n.trackedObjects.concat([{type:e,key:"".concat(e,"-").concat(t),id:t,value:0,lastTime:r}])}}))}},{key:"reset",value:function(){this.setState({trackedObjects:[]})}},{key:"render",value:function(){return[c.a.createElement("div",{key:"app",className:"nav-main-heading"},"Statistics Tracker",c.a.createElement("a",{onClick:this.reset.bind(this)},c.a.createElement("span",{className:"fas fa-undo-alt text-muted ml-1",style:{cursor:"pointer"}})))].concat(this.state.trackedObjects.slice().sort((function(e,t){return t.lastTime-e.lastTime})).map((function(e){switch(e.type){case"skill":return c.a.createElement(j,e);case"item":return c.a.createElement(w,e)}})))}}])&&_(n.prototype,r),o&&_(n,o),i}(a.Component),M=window;var D=document.getElementById("stat-tracker-container");if(!D){var I=document.getElementById("nav-menu-show");if(!I)throw"Unable to find #nav-menu-show. Cannot create ".concat("stat-tracker-container");(D=document.createElement("div")).id="stat-tracker-container",I.prepend(D)}var U=function(e){for(var t in e){e[t].__injected=!0,M[t]=e[t]}return{}}({addXP:function(e,t){try{N.trackObject("skill",e,t)}catch(e){console.error(e)}return U.addXP(e,t)},addItemToBank:function(e,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],r=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];try{N.trackObject("item",e,t)}catch(e){console.error(e)}return U.addItemToBank(e,t,n,r)}});N=o.a.render(c.a.createElement(R),D)}]);