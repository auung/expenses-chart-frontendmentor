(()=>{"use strict";var r={61:(r,n,e)=>{e.d(n,{Z:()=>i});var o=e(537),t=e.n(o),a=e(645),A=e.n(a)()(t());A.push([r.id,':root{--soft-red: hsl(10, 79%, 65%);--cyan: hsl(186, 34%, 60%);--dark-brown: hsl(25, 47%, 15%);--medium-brown: hsl(28, 10%, 53%);--cream: hsl(27, 66%, 92%);--very-pale-orange: hsl(33, 100%, 98%);--color-primary: var(--soft-red);--color-secondary: var(--cyan);--color-light: var(--very-pale-orange);--color-dark: var(--dark-brown);--color-dark-secondary: var(--medium-brown);--color-bg: var(--cream);--fs-x-large: 2.75rem;--fs-large: 1.875rem;--fs-body: 1rem;--fs-small: 0.875rem}*{margin:0;padding:0;box-sizing:border-box}html{font-size:18px}body{font-family:"DM Sans",sans-serif;font-size:var(--fs-body);background-color:var(--color-bg);width:100vw;height:100svh}main{width:clamp(320px,93%,30em);display:flex;flex-direction:column;gap:24px}section{border-radius:1em}section.top{padding:28px 34px;background-color:var(--color-primary);color:var(--color-light);display:flex;justify-content:space-between;padding:28px 34px}section.top .container-balance{display:flex;flex-direction:column;gap:6px}section.top .container-balance .title{color:var(--color-bg)}section.top .container-balance .balance{font-size:var(--fs-large);font-weight:700}section.bottom{background-color:var(--color-light);padding:32px 34px}section.bottom .container-chart .title{font-size:var(--fs-large)}section.bottom .container-chart .chart{display:flex;justify-content:space-between;align-items:flex-end;gap:12px;padding:1.75em 0;border-bottom:var(--color-bg) 2px solid}section.bottom .container-chart .chart .container-column{display:flex;flex-direction:column;align-items:center;gap:.5em;padding-top:56px;position:relative}section.bottom .container-chart .chart .container-column .data{background-color:var(--color-dark);color:var(--color-light);padding:.625em;border-radius:6px;position:absolute;top:0;z-index:2;opacity:0;transition:opacity 250ms ease-in-out}section.bottom .container-chart .chart .container-column .column{background-color:var(--color-primary);width:clamp(1.833rem,.036rem + 8.629vw,2.778rem);border-radius:4px}section.bottom .container-chart .chart .container-column .column:hover{cursor:pointer}section.bottom .container-chart .chart .container-column .column:hover~.data{opacity:100%}section.bottom .container-chart .chart .container-column .label{font-size:var(--fs-small);color:var(--color-dark-secondary)}section.bottom .container-chart .chart .container-column.highlight .column{background-color:var(--color-secondary)}section.bottom .container-summary{display:flex;justify-content:space-between;padding-top:1.75em}section.bottom .container-summary .title{color:var(--color-dark-secondary)}section.bottom .container-summary>div{display:flex;flex-direction:column}section.bottom .container-summary .container-expenses .expenses{font-size:var(--fs-x-large);font-weight:700}section.bottom .container-summary .container-comparison{align-self:flex-end;align-items:flex-end;gap:4px}section.bottom .container-summary .container-comparison .percentage{font-weight:700}@media screen and (max-width: 512px){:root{--fs-x-large: 2rem;--fs-large: 1.5rem;--fs-body: 0.875rem;--fs-small: 0.75rem}html{font-size:16px}section.top{padding:20px}section.top img{width:60px}section.bottom{padding:20px 24px}section.bottom .container-summary .container-comparison{gap:2px}}',"",{version:3,sources:["webpack://./src/styles/index.scss"],names:[],mappings:"AAAA,MACE,6BAAA,CACA,0BAAA,CACA,+BAAA,CACA,iCAAA,CACA,0BAAA,CACA,sCAAA,CAEA,gCAAA,CACA,8BAAA,CACA,sCAAA,CACA,+BAAA,CACA,2CAAA,CACA,wBAAA,CAEA,qBAAA,CACA,oBAAA,CACA,eAAA,CACA,oBAAA,CAGF,EACE,QAAA,CACA,SAAA,CACA,qBAAA,CAGF,KACE,cAAA,CAGF,KACE,gCAAA,CACA,wBAAA,CACA,gCAAA,CACA,WAAA,CACA,aAAA,CAGF,KACE,2BAAA,CACA,YAAA,CACA,qBAAA,CACA,QAAA,CAGF,QACE,iBAAA,CAEA,YACE,iBAAA,CACA,qCAAA,CACA,wBAAA,CACA,YAAA,CACA,6BAAA,CACA,iBAAA,CAEA,+BACE,YAAA,CACA,qBAAA,CACA,OAAA,CAEA,sCACE,qBAAA,CAGF,wCACE,yBAAA,CACA,eAAA,CAKN,eACE,mCAAA,CACA,iBAAA,CAGE,uCACE,yBAAA,CAGF,uCACE,YAAA,CACA,6BAAA,CACA,oBAAA,CACA,QAAA,CACA,gBAAA,CACA,uCAAA,CAEA,yDACE,YAAA,CACA,qBAAA,CACA,kBAAA,CACA,QAAA,CACA,gBAAA,CACA,iBAAA,CAEA,+DACE,kCAAA,CACA,wBAAA,CACA,cAAA,CACA,iBAAA,CACA,iBAAA,CACA,KAAA,CACA,SAAA,CACA,SAAA,CACA,oCAAA,CAGF,iEACE,qCAAA,CACA,gDAAA,CACA,iBAAA,CAEA,uEACE,cAAA,CAEA,6EACE,YAAA,CAKN,gEACE,yBAAA,CACA,iCAAA,CAIA,2EACE,uCAAA,CAOV,kCACE,YAAA,CACA,6BAAA,CACA,kBAAA,CAEA,yCACE,iCAAA,CAGF,sCACE,YAAA,CACA,qBAAA,CAIA,gEACE,2BAAA,CACA,eAAA,CAIJ,wDACE,mBAAA,CACA,oBAAA,CACA,OAAA,CAEA,oEACE,eAAA,CAOV,qCACE,MACE,kBAAA,CACA,kBAAA,CACA,mBAAA,CACA,mBAAA,CAGF,KACE,cAAA,CAKA,YACE,YAAA,CAEA,gBACE,UAAA,CAIJ,eACE,iBAAA,CAGE,wDACE,OAAA,CAAA",sourcesContent:[":root {\r\n  --soft-red: hsl(10, 79%, 65%);\r\n  --cyan: hsl(186, 34%, 60%);\r\n  --dark-brown: hsl(25, 47%, 15%);\r\n  --medium-brown: hsl(28, 10%, 53%);\r\n  --cream: hsl(27, 66%, 92%);\r\n  --very-pale-orange: hsl(33, 100%, 98%);\r\n\r\n  --color-primary: var(--soft-red);\r\n  --color-secondary: var(--cyan);\r\n  --color-light: var(--very-pale-orange);\r\n  --color-dark: var(--dark-brown);\r\n  --color-dark-secondary: var(--medium-brown);\r\n  --color-bg: var(--cream);\r\n\r\n  --fs-x-large: 2.75rem;\r\n  --fs-large: 1.875rem;\r\n  --fs-body: 1rem;\r\n  --fs-small: 0.875rem;\r\n}\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nhtml {\r\n  font-size: 18px;\r\n}\r\n\r\nbody {\r\n  font-family: 'DM Sans', sans-serif;\r\n  font-size: var(--fs-body);\r\n  background-color: var(--color-bg);\r\n  width: 100vw;\r\n  height: 100svh;\r\n}\r\n\r\nmain {\r\n  width: clamp(320px, 93%,30em);\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 24px;\r\n}\r\n\r\nsection {\r\n  border-radius: 1em;\r\n\r\n  &.top {\r\n    padding: 28px 34px;\r\n    background-color: var(--color-primary);\r\n    color: var(--color-light);\r\n    display: flex;\r\n    justify-content: space-between;\r\n    padding: 28px 34px;\r\n  \r\n    .container-balance {\r\n      display: flex;\r\n      flex-direction: column;\r\n      gap: 6px;\r\n\r\n      .title {\r\n        color: var(--color-bg);\r\n      }\r\n  \r\n      .balance {\r\n        font-size: var(--fs-large);\r\n        font-weight: 700;\r\n      }\r\n    }\r\n  }\r\n  \r\n  &.bottom {\r\n    background-color: var(--color-light);\r\n    padding: 32px 34px;\r\n\r\n    .container-chart {\r\n      .title {\r\n        font-size: var(--fs-large);\r\n      }\r\n\r\n      .chart {\r\n        display: flex;\r\n        justify-content: space-between;\r\n        align-items: flex-end;\r\n        gap: 12px;\r\n        padding: 1.75em 0;\r\n        border-bottom: var(--color-bg) 2px solid;\r\n\r\n        .container-column {\r\n          display: flex;\r\n          flex-direction: column;\r\n          align-items: center;\r\n          gap: 0.5em;\r\n          padding-top: 56px;\r\n          position: relative;\r\n\r\n          .data {\r\n            background-color: var(--color-dark);\r\n            color: var(--color-light);\r\n            padding: 0.625em;\r\n            border-radius: 6px;\r\n            position: absolute;\r\n            top: 0;\r\n            z-index: 2;\r\n            opacity: 0;\r\n            transition: opacity 250ms ease-in-out;\r\n          }\r\n\r\n          .column {\r\n            background-color: var(--color-primary);\r\n            width: clamp(1.833rem, 0.036rem + 8.629vw, 2.778rem);\r\n            border-radius: 4px;\r\n\r\n            &:hover {\r\n              cursor: pointer;\r\n\r\n              & ~ .data {\r\n                opacity: 100%;\r\n              }\r\n            }\r\n          }\r\n\r\n          .label {\r\n            font-size: var(--fs-small);\r\n            color: var(--color-dark-secondary);\r\n          }\r\n          \r\n          &.highlight {\r\n            .column {\r\n              background-color: var(--color-secondary);\r\n            }\r\n          }\r\n        }\r\n      }\r\n    }\r\n\r\n    .container-summary {\r\n      display: flex;\r\n      justify-content: space-between;\r\n      padding-top: 1.75em;\r\n\r\n      .title {\r\n        color: var(--color-dark-secondary);\r\n      }\r\n\r\n      > div {\r\n        display: flex;\r\n        flex-direction: column;\r\n      }\r\n\r\n      .container-expenses {\r\n        .expenses {\r\n          font-size: var(--fs-x-large);\r\n          font-weight: 700;\r\n        }\r\n      }\r\n\r\n      .container-comparison {\r\n        align-self: flex-end;\r\n        align-items: flex-end;\r\n        gap: 4px;\r\n\r\n        .percentage {\r\n          font-weight: 700;\r\n        }\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 512px) {\r\n  :root {\r\n    --fs-x-large: 2rem;\r\n    --fs-large: 1.5rem;\r\n    --fs-body: 0.875rem;\r\n    --fs-small: 0.75rem;\r\n  }\r\n\r\n  html {\r\n    font-size: 16px;\r\n  }\r\n\r\n  section {\r\n\r\n    &.top {\r\n      padding: 20px;\r\n\r\n      img {\r\n        width: 60px;\r\n      }\r\n    }\r\n\r\n    &.bottom {\r\n      padding: 20px 24px;\r\n\r\n      .container-summary {\r\n        .container-comparison {\r\n          gap: 2px;\r\n        }\r\n      }\r\n    }\r\n  }\r\n}"],sourceRoot:""}]);const i=A},953:(r,n,e)=>{e.d(n,{Z:()=>i});var o=e(537),t=e.n(o),a=e(645),A=e.n(a)()(t());A.push([r.id,".flex-center{display:flex;justify-content:center;align-items:center}","",{version:3,sources:["webpack://./src/styles/utils.scss"],names:[],mappings:"AAAA,aACE,YAAA,CACA,sBAAA,CACA,kBAAA",sourcesContent:[".flex-center {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}"],sourceRoot:""}]);const i=A},645:r=>{r.exports=function(r){var n=[];return n.toString=function(){return this.map((function(n){var e="",o=void 0!==n[5];return n[4]&&(e+="@supports (".concat(n[4],") {")),n[2]&&(e+="@media ".concat(n[2]," {")),o&&(e+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),e+=r(n),o&&(e+="}"),n[2]&&(e+="}"),n[4]&&(e+="}"),e})).join("")},n.i=function(r,e,o,t,a){"string"==typeof r&&(r=[[null,r,void 0]]);var A={};if(o)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(A[c]=!0)}for(var s=0;s<r.length;s++){var l=[].concat(r[s]);o&&A[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),e&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=e):l[2]=e),t&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=t):l[4]="".concat(t)),n.push(l))}},n}},537:r=>{r.exports=function(r){var n=r[1],e=r[3];if(!e)return n;if("function"==typeof btoa){var o=btoa(unescape(encodeURIComponent(JSON.stringify(e)))),t="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(o),a="/*# ".concat(t," */");return[n].concat([a]).join("\n")}return[n].join("\n")}},379:r=>{var n=[];function e(r){for(var e=-1,o=0;o<n.length;o++)if(n[o].identifier===r){e=o;break}return e}function o(r,o){for(var a={},A=[],i=0;i<r.length;i++){var c=r[i],s=o.base?c[0]+o.base:c[0],l=a[s]||0,d="".concat(s," ").concat(l);a[s]=l+1;var p=e(d),C={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)n[p].references++,n[p].updater(C);else{var m=t(C,o);o.byIndex=i,n.splice(i,0,{identifier:d,updater:m,references:1})}A.push(d)}return A}function t(r,n){var e=n.domAPI(n);return e.update(r),function(n){if(n){if(n.css===r.css&&n.media===r.media&&n.sourceMap===r.sourceMap&&n.supports===r.supports&&n.layer===r.layer)return;e.update(r=n)}else e.remove()}}r.exports=function(r,t){var a=o(r=r||[],t=t||{});return function(r){r=r||[];for(var A=0;A<a.length;A++){var i=e(a[A]);n[i].references--}for(var c=o(r,t),s=0;s<a.length;s++){var l=e(a[s]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}a=c}}},569:r=>{var n={};r.exports=function(r,e){var o=function(r){if(void 0===n[r]){var e=document.querySelector(r);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(r){e=null}n[r]=e}return n[r]}(r);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(e)}},216:r=>{r.exports=function(r){var n=document.createElement("style");return r.setAttributes(n,r.attributes),r.insert(n,r.options),n}},565:(r,n,e)=>{r.exports=function(r){var n=e.nc;n&&r.setAttribute("nonce",n)}},795:r=>{r.exports=function(r){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=r.insertStyleElement(r);return{update:function(e){!function(r,n,e){var o="";e.supports&&(o+="@supports (".concat(e.supports,") {")),e.media&&(o+="@media ".concat(e.media," {"));var t=void 0!==e.layer;t&&(o+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),o+=e.css,t&&(o+="}"),e.media&&(o+="}"),e.supports&&(o+="}");var a=e.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(o,r,n.options)}(n,r,e)},remove:function(){!function(r){if(null===r.parentNode)return!1;r.parentNode.removeChild(r)}(n)}}}},589:r=>{r.exports=function(r,n){if(n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}}},n={};function e(o){var t=n[o];if(void 0!==t)return t.exports;var a=n[o]={id:o,exports:{}};return r[o](a,a.exports,e),a.exports}e.n=r=>{var n=r&&r.__esModule?()=>r.default:()=>r;return e.d(n,{a:n}),n},e.d=(r,n)=>{for(var o in n)e.o(n,o)&&!e.o(r,o)&&Object.defineProperty(r,o,{enumerable:!0,get:n[o]})},e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(r){if("object"==typeof window)return window}}(),e.o=(r,n)=>Object.prototype.hasOwnProperty.call(r,n),(()=>{var r;e.g.importScripts&&(r=e.g.location+"");var n=e.g.document;if(!r&&n&&(n.currentScript&&(r=n.currentScript.src),!r)){var o=n.getElementsByTagName("script");if(o.length)for(var t=o.length-1;t>-1&&!r;)r=o[t--].src}if(!r)throw new Error("Automatic publicPath is not supported in this browser");r=r.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=r})(),e.nc=void 0,(()=>{var r=e(379),n=e.n(r),o=e(795),t=e.n(o),a=e(569),A=e.n(a),i=e(565),c=e.n(i),s=e(216),l=e.n(s),d=e(589),p=e.n(d),C=e(61),m={};m.styleTagTransform=p(),m.setAttributes=c(),m.insert=A().bind(null,"head"),m.domAPI=t(),m.insertStyleElement=l(),n()(C.Z,m),C.Z&&C.Z.locals&&C.Z.locals;var u=e(953),f={};f.styleTagTransform=p(),f.setAttributes=c(),f.insert=A().bind(null,"head"),f.domAPI=t(),f.insertStyleElement=l(),n()(u.Z,f),u.Z&&u.Z.locals&&u.Z.locals;const g=e.p+"logo.svg";var y=[{day:"mon",amount:17.45},{day:"tue",amount:34.91},{day:"wed",amount:52.36},{day:"thu",amount:31.07},{day:"fri",amount:23.39},{day:"sat",amount:43.28},{day:"sun",amount:25.48}];document.getElementsByClassName("column"),window.addEventListener("load",(function(){document.getElementById("logo").src=g,function(r){for(var n,e=document.getElementsByClassName("container-column"),o=0,t=0;t<e.length;t++){var a=r[t].amount,A=Math.floor(3*a),i=r[t].day;e[t].querySelector(".data").textContent="$".concat(a),e[t].querySelector(".column").style.height="".concat(A,"px"),e[t].querySelector(".label").textContent=i,A>o&&(o=A,n=t)}e[n].classList.add("highlight")}(y)}))})()})();
//# sourceMappingURL=bundle.d3ae5fd81548635f311a.js.map