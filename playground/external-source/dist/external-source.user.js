// ==UserScript==
// @name         external-source
// @namespace    https://github.com/lisonge
// @version      1.0.0
// @author       monkey
// @description  default_description
// @icon         https://vitejs.dev/logo.svg
// @match        https://i.songe.li/
// @require      https://cdn.jsdelivr.net/npm/vue@3.2.45/dist/vue.global.prod.js
// @require      data:application/javascript,window.Vue%3DVue%3B
// @require      https://cdn.jsdelivr.net/npm/element-plus@2.2.26/dist/index.full.min.js
// @resource     animate.css                      https://cdn.bootcdn.net/ajax/libs/animate.css/4.1.1/animate.css
// @resource     base64-img/test/img/car.svg?raw  https://cdn.jsdelivr.net/npm/base64-img@1.0.4/test/img/car.svg
// @resource     base64-img/test/img/car.svg?url  https://cdn.jsdelivr.net/npm/base64-img@1.0.4/test/img/car.svg
// @resource     base64-img/test/img/car.svg      https://unpkg.com/base64-img@1.0.4/test/img/car.svg
// @resource     element-plus/dist/index.css      https://cdn.jsdelivr.net/npm/element-plus@2.2.26/dist/index.css
// @resource     element-plus/dist/index.css?raw  https://cdn.jsdelivr.net/npm/element-plus@2.2.26/dist/index.css
// @resource     element-plus/package.json        https://npm.elemecdn.com/element-plus@2.2.26/package.json
// @grant        GM_getResourceText
// @grant        GM_getResourceURL
// @grant        unsafeWindow
// ==/UserScript==

(function(Vue2, elementPlus) {
  "use strict";
  function _interopNamespaceDefault(e) {
    const n = Object.create(null, { [Symbol.toStringTag]: { value: "Module" } });
    if (e) {
      for (const k in e) {
        if (k !== "default") {
          const d = Object.getOwnPropertyDescriptor(e, k);
          Object.defineProperty(n, k, d.get ? d : {
            enumerable: true,
            get: () => e[k]
          });
        }
      }
    }
    n.default = e;
    return Object.freeze(n);
  }
  const Vue__namespace = /* @__PURE__ */ _interopNamespaceDefault(Vue2);
  const cssLoader = (e) => {
    const t = GM_getResourceText(e), o = document.createElement("style");
    return o.innerText = t, document.head.append(o), t;
  }, jsonLoader = (e) => JSON.parse(GM_getResourceText(e)), urlLoader = (e, t) => GM_getResourceURL(e, false).replace(/^data:application;base64,/, `data:${t};base64,`), rawLoader = (e) => GM_getResourceText(e);
  cssLoader("element-plus/dist/index.css");
  const ElementPlusPkg = jsonLoader("element-plus/package.json");
  cssLoader("animate.css");
  var monkeyWindow = window;
  var unsafeWindow = /* @__PURE__ */ (() => {
    return monkeyWindow.unsafeWindow;
  })();
  const carSvgUrl = urlLoader("base64-img/test/img/car.svg", "image/svg+xml");
  const tUrl = urlLoader("base64-img/test/img/car.svg?url", "image/svg+xml");
  const tRaw = rawLoader("base64-img/test/img/car.svg?raw");
  const cssRaw = rawLoader("element-plus/dist/index.css?raw");
  console.log({
    Vue: Vue__namespace,
    ElDatePicker: elementPlus.ElDatePicker,
    ElButton: elementPlus.ElButton,
    ElementPlusPkg,
    unsafeWindow,
    carSvgUrl,
    tUrl,
    tRaw,
    cssRaw
  });
  document.body.append(
    (() => {
      const img = document.createElement("img");
      img.src = carSvgUrl;
      return img;
    })()
  );
})(Vue, ElementPlus);
