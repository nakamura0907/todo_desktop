!function(e){var r={};function t(l){if(r[l])return r[l].exports;var o=r[l]={i:l,l:!1,exports:{}};return e[l].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=r,t.d=function(e,r,l){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:l})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var l=Object.create(null);if(t.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var o in e)t.d(l,o,function(r){return e[r]}.bind(null,o));return l},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="",t(t.s=1)}([function(e,r){e.exports=require("electron")},function(e,r,t){"use strict";t.r(r);var l=t(0);l.app.on("ready",e=>{const r=l.Menu.buildFromTemplate([{label:"編集",submenu:[{label:"戻る",accelerator:"Ctrl+Z",role:"undo"},{label:"進む",accelerator:"Ctrl+Y",role:"redo"},{label:"コピー",accelerator:"Ctrl+C",role:"copy"},{label:"貼り付け",accelerator:"Ctrl+V",role:"paste"}]},{label:"表示",submenu:[{label:"ウィンドウ最小化",role:"minimize"},{label:"ウィンドウを閉じる",role:"close"},{label:"フルスクリーン",role:"togglefullscreen"},{label:"再読み込み",accelerator:"F5",role:"reload"}]}]);l.Menu.setApplicationMenu(r);const t=new l.BrowserWindow({window:800,height:600});t.loadFile("public/index.html"),t.webContents.openDevTools()}),l.app.on("window-all-closed",()=>{"darwin"!==process.platform&&l.app.quit()})}]);