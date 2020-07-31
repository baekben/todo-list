!function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=4)}([function(e,n,t){var r=t(1),o=t(2);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var i={insert:"head",singleton:!1};r(o,i);e.exports=o.locals||{}},function(e,n,t){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},i=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),a=[];function c(e){for(var n=-1,t=0;t<a.length;t++)if(a[t].identifier===e){n=t;break}return n}function d(e,n){for(var t={},r=[],o=0;o<e.length;o++){var i=e[o],d=n.base?i[0]+n.base:i[0],l=t[d]||0,u="".concat(d," ").concat(l);t[d]=l+1;var s=c(u),p={css:i[1],media:i[2],sourceMap:i[3]};-1!==s?(a[s].references++,a[s].updater(p)):a.push({identifier:u,updater:v(p,n),references:1}),r.push(u)}return r}function l(e){var n=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var o=t.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(e){n.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(n);else{var a=i(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}return n}var u,s=(u=[],function(e,n){return u[e]=n,u.filter(Boolean).join("\n")});function p(e,n,t,r){var o=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=s(n,o);else{var i=document.createTextNode(o),a=e.childNodes;a[n]&&e.removeChild(a[n]),a.length?e.insertBefore(i,a[n]):e.appendChild(i)}}function f(e,n,t){var r=t.css,o=t.media,i=t.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var m=null,h=0;function v(e,n){var t,r,o;if(n.singleton){var i=h++;t=m||(m=l(n)),r=p.bind(null,t,i,!1),o=p.bind(null,t,i,!0)}else t=l(n),r=f.bind(null,t,n),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return r(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;r(e=n)}else o()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=o());var t=d(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<t.length;r++){var o=c(t[r]);a[o].references--}for(var i=d(e,n),l=0;l<t.length;l++){var u=c(t[l]);0===a[u].references&&(a[u].updater(),a.splice(u,1))}t=i}}}},function(e,n,t){(n=t(3)(!1)).push([e.i,"* {\n  margin: 0;\n  padding: 0;\n}\nhtml,\nbody {\n  width: 100%;\n  height: 100%;\n  overflow-y: hidden;\n  overflow-x: hidden;\n}\n\n#site-body {\n  display: flex;\n  flex-direction: column;\n}\n\n#site-main {\n  flex-grow: 1;\n  display: grid;\n  grid-template-areas: 'projects';\n  grid-template-columns: 1fr 2fr;\n  grid-template-rows: 1fr;\n  background-color: orange;\n}\n\n#site-main > div {\n  display: flex;\n  flex-direction: column;\n}\n\n#site-main > #projects {\n  grid-area: projects;\n  background-color: bisque;\n  align-content: flex-start;\n  justify-content: flex-start;\n}\n#projects > #projectsHeader {\n  height: 50px;\n  background-color: blueviolet;\n}\n#projectHeader > #addProject {\n  margin-top: 5px;\n}\n\n#content {\n  height: 800px;\n  overflow-y: auto;\n}\n\n.projectContainer {\n  width: 80%;\n  display: block;\n  height: 100px;\n  margin: auto;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  padding: 5px;\n  background-color: aquamarine;\n  border-radius: 5px;\n}\n",""]),e.exports=n},function(e,n,t){"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=function(e,n){var t=e[1]||"",r=e[3];if(!r)return t;if(n&&"function"==typeof btoa){var o=(a=r,c=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),d="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(d," */")),i=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[t].concat(i).concat([o]).join("\n")}var a,c,d;return[t].join("\n")}(n,e);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var c=0;c<e.length;c++){var d=[].concat(e[c]);r&&o[d[0]]||(t&&(d[2]?d[2]="".concat(t," and ").concat(d[2]):d[2]=t),n.push(d))}},n}},function(e,n,t){"use strict";t.r(n),t.d(n,"Index",(function(){return o}));t(0);const r=(()=>{const e=document.body,n=document.createElement("div"),t=document.createElement("main"),r=document.createElement("div"),i=document.createElement("div"),a=document.createElement("div"),c=document.createElement("div"),d=document.createElement("footer"),l=()=>{let e=document.createElement("button");if(e.innerHTML="ADD PROJECT",e.className="button",e.id="addProjectButton",e.addEventListener("click",o.createNewProject,!1),r.appendChild(e))return!0};return{start:()=>{a.appendChild(r),a.appendChild(i),t.appendChild(a),t.appendChild(c),n.appendChild(t),n.appendChild(d),e.appendChild(n),l(),e.id="site-body",n.id="content",t.id="site-main",r.id="projectsHeader",i.id="projectsContent",a.id="projects",c.id="tasks",d.id="site-footer"},projectRendering:e=>{for(let n=0;n<e.length;n++){let t=document.createElement("span");t.className="projectContainer";let r=document.createElement("h2");r.className="projectTitle";let o=document.createElement("h4");o.className="projectDescription",r.innerHTML=e[n].getTitle(),o.innerHTML=e[n].getDescription(),t.appendChild(r),t.appendChild(o),i.appendChild(t)}}}})(),o=(()=>{let e=[];return{render:()=>{r.start()},createNewProject:()=>{let n=(t="Default Title",o="Default Description",i=[],{setTitle:e=>t=e,setDescription:e=>o=e,getTitle:()=>t,getDescription:()=>o,getTasks:()=>i,addTask:e=>{i.push(e)},deleteTask:e=>{i.splice(e,1)}});var t,o,i;e.push(n),r.projectRendering(e)}}})();o.render()}]);