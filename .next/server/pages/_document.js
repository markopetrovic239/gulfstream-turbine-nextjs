module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/constants":
/*!*********************************************************!*\
  !*** external "next/dist/next-server/lib/constants.js" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/constants.js");

/***/ }),

/***/ "../next-server/lib/document-context":
/*!****************************************************************!*\
  !*** external "next/dist/next-server/lib/document-context.js" ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/document-context.js");

/***/ }),

/***/ "../next-server/lib/head-manager-context":
/*!********************************************************************!*\
  !*** external "next/dist/next-server/lib/head-manager-context.js" ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/head-manager-context.js");

/***/ }),

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "../next-server/server/get-page-files":
/*!*****************************************************************!*\
  !*** external "next/dist/next-server/server/get-page-files.js" ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/server/get-page-files.js");

/***/ }),

/***/ "../next-server/server/utils":
/*!********************************************************!*\
  !*** external "next/dist/next-server/server/utils.js" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/server/utils.js");

/***/ }),

/***/ "./node_modules/next/dist/client/experimental-script.js":
/*!**************************************************************!*\
  !*** ./node_modules/next/dist/client/experimental-script.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");
var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");
exports.__esModule = true;
exports.initScriptLoader = initScriptLoader;
exports.default = void 0;
var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/next/node_modules/@babel/runtime/helpers/extends.js"));
var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/next/node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));
var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));
var _headManagerContext = __webpack_require__(/*! ../next-server/lib/head-manager-context */ "../next-server/lib/head-manager-context");
var _headManager = __webpack_require__(/*! ./head-manager */ "./node_modules/next/dist/client/head-manager.js");
var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js");
const ScriptCache = new Map();
const LoadCache = new Set();
const ignoreProps = ["onLoad", "dangerouslySetInnerHTML", "children", "onError", "strategy", "preload"];
const loadScript = (props) => {
  const {src, id, onLoad = () => {
  }, dangerouslySetInnerHTML, children = "", onError} = props;
  const cacheKey = id || src;
  if (ScriptCache.has(src)) {
    if (!LoadCache.has(cacheKey)) {
      LoadCache.add(cacheKey);
      ScriptCache.get(src).then(onLoad, onError);
    }
    return;
  }
  const el = document.createElement("script");
  const loadPromise = new Promise((resolve, reject) => {
    el.addEventListener("load", function() {
      resolve();
      if (onLoad) {
        onLoad.call(this);
      }
    });
    el.addEventListener("error", function() {
      reject();
      if (onError) {
        onError();
      }
    });
  });
  if (src) {
    ScriptCache.set(src, loadPromise);
    LoadCache.add(cacheKey);
  }
  if (dangerouslySetInnerHTML) {
    el.innerHTML = dangerouslySetInnerHTML.__html || "";
  } else if (children) {
    el.textContent = typeof children === "string" ? children : Array.isArray(children) ? children.join("") : "";
  } else if (src) {
    el.src = src;
  }
  for (const [k, value] of Object.entries(props)) {
    if (value === void 0 || ignoreProps.includes(k)) {
      continue;
    }
    const attr = _headManager.DOMAttributeNames[k] || k.toLowerCase();
    el.setAttribute(attr, value);
  }
  document.body.appendChild(el);
};
function handleClientScriptLoad(props) {
  const {strategy = "defer"} = props;
  if (strategy === "defer") {
    loadScript(props);
  } else if (strategy === "lazy") {
    window.addEventListener("load", () => {
      (0, _requestIdleCallback.requestIdleCallback)(() => loadScript(props));
    });
  }
}
function loadLazyScript(props) {
  if (document.readyState === "complete") {
    (0, _requestIdleCallback.requestIdleCallback)(() => loadScript(props));
  } else {
    window.addEventListener("load", () => {
      (0, _requestIdleCallback.requestIdleCallback)(() => loadScript(props));
    });
  }
}
function initScriptLoader(scriptLoaderItems) {
  scriptLoaderItems.forEach(handleClientScriptLoad);
}
function Script(props) {
  const {src = "", onLoad = () => {
  }, dangerouslySetInnerHTML, children = "", strategy = "defer", onError, preload = false} = props, restProps = (0, _objectWithoutPropertiesLoose2.default)(props, ["src", "onLoad", "dangerouslySetInnerHTML", "children", "strategy", "onError", "preload"]);
  const {updateScripts, scripts} = (0, _react.useContext)(_headManagerContext.HeadManagerContext);
  (0, _react.useEffect)(() => {
    if (strategy === "defer") {
      loadScript(props);
    } else if (strategy === "lazy") {
      loadLazyScript(props);
    }
  }, [props, strategy]);
  if (true) {
    return null;
  }
  if (strategy === "dangerouslyBlockRendering") {
    const syncProps = (0, _extends2.default)({}, restProps);
    for (const [k, value] of Object.entries({src, onLoad, onError, dangerouslySetInnerHTML, children})) {
      if (!value) {
        continue;
      }
      if (k === "children") {
        syncProps.dangerouslySetInnerHTML = {__html: typeof value === "string" ? value : Array.isArray(value) ? value.join("") : ""};
      } else {
        ;
        syncProps[k] = value;
      }
    }
    return /* @__PURE__ */ _react.default.createElement("script", syncProps);
  } else if (strategy === "defer") {
    if (updateScripts && preload) {
      scripts.defer = (scripts.defer || []).concat([src]);
      updateScripts(scripts);
    }
  } else if (strategy === "eager") {
    if (updateScripts) {
      scripts.eager = (scripts.eager || []).concat([(0, _extends2.default)({src, onLoad, onError}, restProps)]);
      updateScripts(scripts);
    }
  }
  return null;
}
var _default = Script;
exports.default = _default;


/***/ }),

/***/ "./node_modules/next/dist/client/head-manager.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/client/head-manager.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
exports.default = initHeadManager;
exports.DOMAttributeNames = void 0;
const DOMAttributeNames = {acceptCharset: "accept-charset", className: "class", htmlFor: "for", httpEquiv: "http-equiv", noModule: "noModule"};
exports.DOMAttributeNames = DOMAttributeNames;
function reactElementToDOM({type, props}) {
  const el = document.createElement(type);
  for (const p in props) {
    if (!props.hasOwnProperty(p))
      continue;
    if (p === "children" || p === "dangerouslySetInnerHTML")
      continue;
    if (props[p] === void 0)
      continue;
    const attr = DOMAttributeNames[p] || p.toLowerCase();
    if (type === "script" && (attr === "async" || attr === "defer" || attr === "noModule")) {
      ;
      el[attr] = !!props[p];
    } else {
      el.setAttribute(attr, props[p]);
    }
  }
  const {children, dangerouslySetInnerHTML} = props;
  if (dangerouslySetInnerHTML) {
    el.innerHTML = dangerouslySetInnerHTML.__html || "";
  } else if (children) {
    el.textContent = typeof children === "string" ? children : Array.isArray(children) ? children.join("") : "";
  }
  return el;
}
function updateElements(type, components) {
  const headEl = document.getElementsByTagName("head")[0];
  const headCountEl = headEl.querySelector("meta[name=next-head-count]");
  if (true) {
    if (!headCountEl) {
      console.error("Warning: next-head-count is missing. https://nextjs.org/docs/messages/next-head-count-missing");
      return;
    }
  }
  const headCount = Number(headCountEl.content);
  const oldTags = [];
  for (let i = 0, j = headCountEl.previousElementSibling; i < headCount; i++, j = j.previousElementSibling) {
    if (j.tagName.toLowerCase() === type) {
      oldTags.push(j);
    }
  }
  const newTags = components.map(reactElementToDOM).filter((newTag) => {
    for (let k = 0, len = oldTags.length; k < len; k++) {
      const oldTag = oldTags[k];
      if (oldTag.isEqualNode(newTag)) {
        oldTags.splice(k, 1);
        return false;
      }
    }
    return true;
  });
  oldTags.forEach((t) => t.parentNode.removeChild(t));
  newTags.forEach((t) => headEl.insertBefore(t, headCountEl));
  headCountEl.content = (headCount - oldTags.length + newTags.length).toString();
}
function initHeadManager() {
  let updatePromise = null;
  return {mountedInstances: new Set(), updateHead: (head) => {
    const promise = updatePromise = Promise.resolve().then(() => {
      if (promise !== updatePromise)
        return;
      updatePromise = null;
      const tags = {};
      head.forEach((h) => {
        const components = tags[h.type] || [];
        components.push(h);
        tags[h.type] = components;
      });
      const titleComponent = tags.title ? tags.title[0] : null;
      let title = "";
      if (titleComponent) {
        const {children} = titleComponent.props;
        title = typeof children === "string" ? children : Array.isArray(children) ? children.join("") : "";
      }
      if (title !== document.title)
        document.title = title;
      ["meta", "base", "link", "style", "script"].forEach((type) => {
        updateElements(type, tags[type] || []);
      });
    });
  }};
}


/***/ }),

/***/ "./node_modules/next/dist/client/request-idle-callback.js":
/*!****************************************************************!*\
  !*** ./node_modules/next/dist/client/request-idle-callback.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
exports.cancelIdleCallback = exports.requestIdleCallback = void 0;
const requestIdleCallback = typeof self !== "undefined" && self.requestIdleCallback || function(cb) {
  let start = Date.now();
  return setTimeout(function() {
    cb({didTimeout: false, timeRemaining: function() {
      return Math.max(0, 50 - (Date.now() - start));
    }});
  }, 1);
};
exports.requestIdleCallback = requestIdleCallback;
const cancelIdleCallback = typeof self !== "undefined" && self.cancelIdleCallback || function(id) {
  return clearTimeout(id);
};
exports.cancelIdleCallback = cancelIdleCallback;


/***/ }),

/***/ "./node_modules/next/dist/pages/_document.js":
/*!***************************************************!*\
  !*** ./node_modules/next/dist/pages/_document.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __defProp = Object.defineProperty;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, {enumerable: true, configurable: true, writable: true, value}) : obj[key] = value;
var __assign = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __rest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
exports.__esModule = true;
exports.Html = Html;
exports.Main = Main;
exports.NextScript = exports.Head = exports.default = void 0;
var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));
var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));
var _server = _interopRequireDefault(__webpack_require__(/*! styled-jsx/server */ "styled-jsx/server"));
var _constants = __webpack_require__(/*! ../next-server/lib/constants */ "../next-server/lib/constants");
var _documentContext = __webpack_require__(/*! ../next-server/lib/document-context */ "../next-server/lib/document-context");
var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");
exports.DocumentContext = _utils.DocumentContext;
exports.DocumentInitialProps = _utils.DocumentInitialProps;
exports.DocumentProps = _utils.DocumentProps;
var _getPageFiles = __webpack_require__(/*! ../next-server/server/get-page-files */ "../next-server/server/get-page-files");
var _utils2 = __webpack_require__(/*! ../next-server/server/utils */ "../next-server/server/utils");
var _htmlescape = __webpack_require__(/*! ../server/htmlescape */ "./node_modules/next/dist/server/htmlescape.js");
var _experimentalScript = _interopRequireDefault(__webpack_require__(/*! ../client/experimental-script */ "./node_modules/next/dist/client/experimental-script.js"));
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {default: obj};
}
function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function")
    return null;
  var cache = new WeakMap();
  _getRequireWildcardCache = function() {
    return cache;
  };
  return cache;
}
function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }
  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {default: obj};
  }
  var cache = _getRequireWildcardCache();
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj.default = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
}
function dedupe(bundles) {
  const files = new Set();
  const kept = [];
  for (const bundle of bundles) {
    if (files.has(bundle.file))
      continue;
    files.add(bundle.file);
    kept.push(bundle);
  }
  return kept;
}
function getDocumentFiles(buildManifest, pathname, inAmpMode) {
  const sharedFiles = (0, _getPageFiles.getPageFiles)(buildManifest, "/_app");
  const pageFiles = inAmpMode ? [] : (0, _getPageFiles.getPageFiles)(buildManifest, pathname);
  return {sharedFiles, pageFiles, allFiles: [...new Set([...sharedFiles, ...pageFiles])]};
}
class Document extends _react.Component {
  static async getInitialProps(ctx) {
    const enhanceApp = (App) => {
      return (props) => /* @__PURE__ */ _react.default.createElement(App, props);
    };
    const {html, head} = await ctx.renderPage({enhanceApp});
    const styles = [...(0, _server.default)()];
    return {html, head, styles};
  }
  static renderDocument(DocumentComponent, props) {
    return /* @__PURE__ */ _react.default.createElement(_documentContext.DocumentContext.Provider, {value: props}, /* @__PURE__ */ _react.default.createElement(DocumentComponent, props));
  }
  render() {
    return /* @__PURE__ */ _react.default.createElement(Html, null, /* @__PURE__ */ _react.default.createElement(Head, null), /* @__PURE__ */ _react.default.createElement("body", null, /* @__PURE__ */ _react.default.createElement(Main, null), /* @__PURE__ */ _react.default.createElement(NextScript, null)));
  }
}
exports.default = Document;
Document.headTagsMiddleware =  false ? undefined : () => [];
function Html(props) {
  const {inAmpMode, docComponentsRendered, locale} = (0, _react.useContext)(_documentContext.DocumentContext);
  docComponentsRendered.Html = true;
  return /* @__PURE__ */ _react.default.createElement("html", Object.assign({}, props, {lang: props.lang || locale || void 0, amp: inAmpMode ? "" : void 0, "data-ampdevmode": inAmpMode && "development" !== "production" ? "" : void 0}));
}
class Head extends _react.Component {
  constructor(...args) {
    super(...args);
    this.context = void 0;
  }
  getCssLinks(files) {
    const {assetPrefix, devOnlyCacheBusterQueryString, dynamicImports} = this.context;
    const cssFiles = files.allFiles.filter((f) => f.endsWith(".css"));
    const sharedFiles = new Set(files.sharedFiles);
    let unmangedFiles = new Set([]);
    let dynamicCssFiles = dedupe(dynamicImports.filter((f) => f.file.endsWith(".css"))).map((f) => f.file);
    if (dynamicCssFiles.length) {
      const existing = new Set(cssFiles);
      dynamicCssFiles = dynamicCssFiles.filter((f) => !(existing.has(f) || sharedFiles.has(f)));
      unmangedFiles = new Set(dynamicCssFiles);
      cssFiles.push(...dynamicCssFiles);
    }
    let cssLinkElements = [];
    cssFiles.forEach((file) => {
      const isSharedFile = sharedFiles.has(file);
      if (true) {
        cssLinkElements.push(/* @__PURE__ */ _react.default.createElement("link", {key: `${file}-preload`, nonce: this.props.nonce, rel: "preload", href: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`, as: "style", crossOrigin: this.props.crossOrigin || undefined}));
      }
      const isUnmanagedFile = unmangedFiles.has(file);
      cssLinkElements.push(/* @__PURE__ */ _react.default.createElement("link", {key: file, nonce: this.props.nonce, rel: "stylesheet", href: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`, crossOrigin: this.props.crossOrigin || undefined, "data-n-g": isUnmanagedFile ? void 0 : isSharedFile ? "" : void 0, "data-n-p": isUnmanagedFile ? void 0 : isSharedFile ? void 0 : ""}));
    });
    if (false) {}
    return cssLinkElements.length === 0 ? null : cssLinkElements;
  }
  getPreloadDynamicChunks() {
    const {dynamicImports, assetPrefix, devOnlyCacheBusterQueryString} = this.context;
    return dedupe(dynamicImports).map((bundle) => {
      if (!bundle.file.endsWith(".js")) {
        return null;
      }
      return /* @__PURE__ */ _react.default.createElement("link", {rel: "preload", key: bundle.file, href: `${assetPrefix}/_next/${encodeURI(bundle.file)}${devOnlyCacheBusterQueryString}`, as: "script", nonce: this.props.nonce, crossOrigin: this.props.crossOrigin || undefined});
    }).filter(Boolean);
  }
  getPreloadMainLinks(files) {
    const {assetPrefix, devOnlyCacheBusterQueryString, scriptLoader} = this.context;
    const preloadFiles = files.allFiles.filter((file) => {
      return file.endsWith(".js");
    });
    return [...(scriptLoader.eager || []).map((file) => /* @__PURE__ */ _react.default.createElement("link", {key: file.src, nonce: this.props.nonce, rel: "preload", href: file.src, as: "script", crossOrigin: this.props.crossOrigin || undefined})), ...preloadFiles.map((file) => /* @__PURE__ */ _react.default.createElement("link", {key: file, nonce: this.props.nonce, rel: "preload", href: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`, as: "script", crossOrigin: this.props.crossOrigin || undefined})), ...(scriptLoader.defer || []).map((file) => /* @__PURE__ */ _react.default.createElement("link", {key: file, nonce: this.props.nonce, rel: "preload", href: file, as: "script", crossOrigin: this.props.crossOrigin || undefined}))];
  }
  handleDocumentScriptLoaderItems(children) {
    const {scriptLoader} = this.context;
    const scriptLoaderItems = [];
    const filteredChildren = [];
    _react.default.Children.forEach(children, (child) => {
      if (child.type === _experimentalScript.default) {
        if (child.props.strategy === "eager") {
          scriptLoader.eager = (scriptLoader.eager || []).concat([__assign({}, child.props)]);
          return;
        } else if (["lazy", "defer"].includes(child.props.strategy)) {
          scriptLoaderItems.push(child.props);
          return;
        }
      }
      filteredChildren.push(child);
    });
    this.context.__NEXT_DATA__.scriptLoader = scriptLoaderItems;
    return filteredChildren;
  }
  makeStylesheetInert(node) {
    return _react.default.Children.map(node, (c) => {
      if (c.type === "link" && c.props["href"] && _constants.OPTIMIZED_FONT_PROVIDERS.some((url) => c.props["href"].startsWith(url))) {
        const newProps = __assign({}, c.props || {});
        newProps["data-href"] = newProps["href"];
        newProps["href"] = void 0;
        return /* @__PURE__ */ _react.default.cloneElement(c, newProps);
      } else if (c.props && c.props["children"]) {
        c.props["children"] = this.makeStylesheetInert(c.props["children"]);
      }
      return c;
    });
  }
  render() {
    var _this$props$nonce, _this$props$nonce2;
    const {styles, ampPath, inAmpMode, hybridAmp, canonicalBase, __NEXT_DATA__, dangerousAsPath, headTags, unstable_runtimeJS, unstable_JsPreload} = this.context;
    const disableRuntimeJS = unstable_runtimeJS === false;
    const disableJsPreload = unstable_JsPreload === false;
    this.context.docComponentsRendered.Head = true;
    let {head} = this.context;
    let cssPreloads = [];
    let otherHeadElements = [];
    if (head) {
      head.forEach((c) => {
        if (c && c.type === "link" && c.props["rel"] === "preload" && c.props["as"] === "style") {
          cssPreloads.push(c);
        } else {
          c && otherHeadElements.push(c);
        }
      });
      head = cssPreloads.concat(otherHeadElements);
    }
    let children = this.props.children;
    if (true) {
      children = _react.default.Children.map(children, (child) => {
        var _child$props;
        const isReactHelmet = child == null ? void 0 : (_child$props = child.props) == null ? void 0 : _child$props["data-react-helmet"];
        if (!isReactHelmet) {
          var _child$props2;
          if ((child == null ? void 0 : child.type) === "title") {
            console.warn("Warning: <title> should not be used in _document.js's <Head>. https://nextjs.org/docs/messages/no-document-title");
          } else if ((child == null ? void 0 : child.type) === "meta" && (child == null ? void 0 : (_child$props2 = child.props) == null ? void 0 : _child$props2.name) === "viewport") {
            console.warn("Warning: viewport meta tags should not be used in _document.js's <Head>. https://nextjs.org/docs/messages/no-document-viewport-meta");
          }
        }
        return child;
      });
      if (this.props.crossOrigin)
        console.warn("Warning: `Head` attribute `crossOrigin` is deprecated. https://nextjs.org/docs/messages/doc-crossorigin-deprecated");
    }
    if (false) {}
    if (false) {}
    let hasAmphtmlRel = false;
    let hasCanonicalRel = false;
    head = _react.default.Children.map(head || [], (child) => {
      if (!child)
        return child;
      const {type, props} = child;
      if (inAmpMode) {
        let badProp = "";
        if (type === "meta" && props.name === "viewport") {
          badProp = 'name="viewport"';
        } else if (type === "link" && props.rel === "canonical") {
          hasCanonicalRel = true;
        } else if (type === "script") {
          if (props.src && props.src.indexOf("ampproject") < -1 || props.dangerouslySetInnerHTML && (!props.type || props.type === "text/javascript")) {
            badProp = "<script";
            Object.keys(props).forEach((prop) => {
              badProp += ` ${prop}="${props[prop]}"`;
            });
            badProp += "/>";
          }
        }
        if (badProp) {
          console.warn(`Found conflicting amp tag "${child.type}" with conflicting prop ${badProp} in ${__NEXT_DATA__.page}. https://nextjs.org/docs/messages/conflicting-amp-tag`);
          return null;
        }
      } else {
        if (type === "link" && props.rel === "amphtml") {
          hasAmphtmlRel = true;
        }
      }
      return child;
    });
    const curStyles = Array.isArray(styles) ? styles : [];
    if (inAmpMode && styles && styles.props && Array.isArray(styles.props.children)) {
      const hasStyles = (el) => {
        var _el$props, _el$props$dangerously;
        return el == null ? void 0 : (_el$props = el.props) == null ? void 0 : (_el$props$dangerously = _el$props.dangerouslySetInnerHTML) == null ? void 0 : _el$props$dangerously.__html;
      };
      styles.props.children.forEach((child) => {
        if (Array.isArray(child)) {
          child.forEach((el) => hasStyles(el) && curStyles.push(el));
        } else if (hasStyles(child)) {
          curStyles.push(child);
        }
      });
    }
    const files = getDocumentFiles(this.context.buildManifest, this.context.__NEXT_DATA__.page, inAmpMode);
    return /* @__PURE__ */ _react.default.createElement("head", this.props, this.context.isDevelopment && /* @__PURE__ */ _react.default.createElement(_react.default.Fragment, null, /* @__PURE__ */ _react.default.createElement("style", {"data-next-hide-fouc": true, "data-ampdevmode": inAmpMode ? "true" : void 0, dangerouslySetInnerHTML: {__html: `body{display:none}`}}), /* @__PURE__ */ _react.default.createElement("noscript", {"data-next-hide-fouc": true, "data-ampdevmode": inAmpMode ? "true" : void 0}, /* @__PURE__ */ _react.default.createElement("style", {dangerouslySetInnerHTML: {__html: `body{display:block}`}}))), children, head, /* @__PURE__ */ _react.default.createElement("meta", {name: "next-head-count", content: _react.default.Children.count(head || []).toString()}), inAmpMode && /* @__PURE__ */ _react.default.createElement(_react.default.Fragment, null, /* @__PURE__ */ _react.default.createElement("meta", {name: "viewport", content: "width=device-width,minimum-scale=1,initial-scale=1"}), !hasCanonicalRel && /* @__PURE__ */ _react.default.createElement("link", {rel: "canonical", href: canonicalBase + (0, _utils2.cleanAmpPath)(dangerousAsPath)}), /* @__PURE__ */ _react.default.createElement("link", {rel: "preload", as: "script", href: "https://cdn.ampproject.org/v0.js"}), styles && /* @__PURE__ */ _react.default.createElement("style", {"amp-custom": "", dangerouslySetInnerHTML: {__html: curStyles.map((style) => style.props.dangerouslySetInnerHTML.__html).join("").replace(/\/\*# sourceMappingURL=.*\*\//g, "").replace(/\/\*@ sourceURL=.*?\*\//g, "")}}), /* @__PURE__ */ _react.default.createElement("style", {"amp-boilerplate": "", dangerouslySetInnerHTML: {__html: `body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}`}}), /* @__PURE__ */ _react.default.createElement("noscript", null, /* @__PURE__ */ _react.default.createElement("style", {"amp-boilerplate": "", dangerouslySetInnerHTML: {__html: `body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}`}})), /* @__PURE__ */ _react.default.createElement("script", {async: true, src: "https://cdn.ampproject.org/v0.js"})), !inAmpMode && /* @__PURE__ */ _react.default.createElement(_react.default.Fragment, null, !hasAmphtmlRel && hybridAmp && /* @__PURE__ */ _react.default.createElement("link", {rel: "amphtml", href: canonicalBase + getAmpPath(ampPath, dangerousAsPath)}),  true && this.getCssLinks(files),  true && /* @__PURE__ */ _react.default.createElement("noscript", {"data-n-css": (_this$props$nonce = this.props.nonce) != null ? _this$props$nonce : ""}), !disableRuntimeJS && !disableJsPreload && this.getPreloadDynamicChunks(), !disableRuntimeJS && !disableJsPreload && this.getPreloadMainLinks(files),  false && false,  false && /* @__PURE__ */ false, this.context.isDevelopment && /* @__PURE__ */ _react.default.createElement("noscript", {id: "__next_css__DO_NOT_USE__"}), styles || null), /* @__PURE__ */ _react.default.createElement(_react.default.Fragment, {}, ...headTags || []));
  }
}
exports.Head = Head;
Head.contextType = _documentContext.DocumentContext;
Head.propTypes = {nonce: _propTypes.default.string, crossOrigin: _propTypes.default.string};
function Main() {
  const {inAmpMode, html, docComponentsRendered} = (0, _react.useContext)(_documentContext.DocumentContext);
  docComponentsRendered.Main = true;
  if (inAmpMode)
    return /* @__PURE__ */ _react.default.createElement(_react.default.Fragment, null, _constants.AMP_RENDER_TARGET);
  return /* @__PURE__ */ _react.default.createElement("div", {id: "__next", dangerouslySetInnerHTML: {__html: html}});
}
class NextScript extends _react.Component {
  constructor(...args) {
    super(...args);
    this.context = void 0;
  }
  getDynamicChunks(files) {
    const {dynamicImports, assetPrefix, isDevelopment, devOnlyCacheBusterQueryString} = this.context;
    return dedupe(dynamicImports).map((bundle) => {
      if (!bundle.file.endsWith(".js") || files.allFiles.includes(bundle.file))
        return null;
      return /* @__PURE__ */ _react.default.createElement("script", {async: !isDevelopment, key: bundle.file, src: `${assetPrefix}/_next/${encodeURI(bundle.file)}${devOnlyCacheBusterQueryString}`, nonce: this.props.nonce, crossOrigin: this.props.crossOrigin || undefined});
    });
  }
  getPreNextScripts() {
    const {scriptLoader} = this.context;
    return (scriptLoader.eager || []).map((file) => {
      const {strategy} = file, props = __rest(file, ["strategy"]);
      return /* @__PURE__ */ _react.default.createElement("script", Object.assign({}, props, {nonce: this.props.nonce, crossOrigin: this.props.crossOrigin || undefined}));
    });
  }
  getScripts(files) {
    var _buildManifest$lowPri;
    const {assetPrefix, buildManifest, isDevelopment, devOnlyCacheBusterQueryString} = this.context;
    const normalScripts = files.allFiles.filter((file) => file.endsWith(".js"));
    const lowPriorityScripts = (_buildManifest$lowPri = buildManifest.lowPriorityFiles) == null ? void 0 : _buildManifest$lowPri.filter((file) => file.endsWith(".js"));
    return [...normalScripts, ...lowPriorityScripts].map((file) => {
      return /* @__PURE__ */ _react.default.createElement("script", {key: file, src: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`, nonce: this.props.nonce, async: !isDevelopment, crossOrigin: this.props.crossOrigin || undefined});
    });
  }
  getPolyfillScripts() {
    const {assetPrefix, buildManifest, devOnlyCacheBusterQueryString} = this.context;
    return buildManifest.polyfillFiles.filter((polyfill) => polyfill.endsWith(".js") && !polyfill.endsWith(".module.js")).map((polyfill) => /* @__PURE__ */ _react.default.createElement("script", {key: polyfill, nonce: this.props.nonce, crossOrigin: this.props.crossOrigin || undefined, noModule: true, src: `${assetPrefix}/_next/${polyfill}${devOnlyCacheBusterQueryString}`}));
  }
  static getInlineScriptSource(documentProps) {
    const {__NEXT_DATA__} = documentProps;
    try {
      const data = JSON.stringify(__NEXT_DATA__);
      return (0, _htmlescape.htmlEscapeJsonString)(data);
    } catch (err) {
      if (err.message.indexOf("circular structure")) {
        throw new Error(`Circular structure in "getInitialProps" result of page "${__NEXT_DATA__.page}". https://nextjs.org/docs/messages/circular-structure`);
      }
      throw err;
    }
  }
  render() {
    const {assetPrefix, inAmpMode, buildManifest, unstable_runtimeJS, docComponentsRendered, devOnlyCacheBusterQueryString} = this.context;
    const disableRuntimeJS = unstable_runtimeJS === false;
    docComponentsRendered.NextScript = true;
    if (inAmpMode) {
      if (false) {}
      const ampDevFiles = [...buildManifest.devFiles, ...buildManifest.polyfillFiles, ...buildManifest.ampDevFiles];
      return /* @__PURE__ */ _react.default.createElement(_react.default.Fragment, null, disableRuntimeJS ? null : /* @__PURE__ */ _react.default.createElement("script", {id: "__NEXT_DATA__", type: "application/json", nonce: this.props.nonce, crossOrigin: this.props.crossOrigin || undefined, dangerouslySetInnerHTML: {__html: NextScript.getInlineScriptSource(this.context)}, "data-ampdevmode": true}), ampDevFiles.map((file) => /* @__PURE__ */ _react.default.createElement("script", {key: file, src: `${assetPrefix}/_next/${file}${devOnlyCacheBusterQueryString}`, nonce: this.props.nonce, crossOrigin: this.props.crossOrigin || undefined, "data-ampdevmode": true})));
    }
    if (true) {
      if (this.props.crossOrigin)
        console.warn("Warning: `NextScript` attribute `crossOrigin` is deprecated. https://nextjs.org/docs/messages/doc-crossorigin-deprecated");
    }
    const files = getDocumentFiles(this.context.buildManifest, this.context.__NEXT_DATA__.page, inAmpMode);
    return /* @__PURE__ */ _react.default.createElement(_react.default.Fragment, null, !disableRuntimeJS && buildManifest.devFiles ? buildManifest.devFiles.map((file) => /* @__PURE__ */ _react.default.createElement("script", {key: file, src: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`, nonce: this.props.nonce, crossOrigin: this.props.crossOrigin || undefined})) : null, disableRuntimeJS ? null : /* @__PURE__ */ _react.default.createElement("script", {id: "__NEXT_DATA__", type: "application/json", nonce: this.props.nonce, crossOrigin: this.props.crossOrigin || undefined, dangerouslySetInnerHTML: {__html: NextScript.getInlineScriptSource(this.context)}}), !disableRuntimeJS && this.getPolyfillScripts(), !disableRuntimeJS && this.getPreNextScripts(), disableRuntimeJS ? null : this.getDynamicChunks(files), disableRuntimeJS ? null : this.getScripts(files));
  }
}
exports.NextScript = NextScript;
NextScript.contextType = _documentContext.DocumentContext;
NextScript.propTypes = {nonce: _propTypes.default.string, crossOrigin: _propTypes.default.string};
NextScript.safariNomoduleFix = '!function(){var e=document,t=e.createElement("script");if(!("noModule"in t)&&"onbeforeload"in t){var n=!1;e.addEventListener("beforeload",function(e){if(e.target===t)n=!0;else if(!e.target.hasAttribute("nomodule")||!n)return;e.preventDefault()},!0),t.type="module",t.src=".",e.head.appendChild(t),t.remove()}}();';
function getAmpPath(ampPath, asPath) {
  return ampPath || `${asPath}${asPath.includes("?") ? "&" : "?"}amp=1`;
}


/***/ }),

/***/ "./node_modules/next/dist/server/htmlescape.js":
/*!*****************************************************!*\
  !*** ./node_modules/next/dist/server/htmlescape.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.htmlEscapeJsonString=htmlEscapeJsonString;// This utility is based on https://github.com/zertosh/htmlescape
// License: https://github.com/zertosh/htmlescape/blob/0527ca7156a524d256101bb310a9f970f63078ad/LICENSE
const ESCAPE_LOOKUP={'&':'\\u0026','>':'\\u003e','<':'\\u003c','\u2028':'\\u2028','\u2029':'\\u2029'};const ESCAPE_REGEX=/[&><\u2028\u2029]/g;function htmlEscapeJsonString(str){return str.replace(ESCAPE_REGEX,match=>ESCAPE_LOOKUP[match]);}
//# sourceMappingURL=htmlescape.js.map

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/extends.js":
/*!**************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/extends.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js":
/*!*************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ 2:
/*!***************************************!*\
  !*** multi next/dist/pages/_document ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next/dist/pages/_document */"./node_modules/next/dist/pages/_document.js");


/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/server":
/*!************************************!*\
  !*** external "styled-jsx/server" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/server");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9jb25zdGFudHMuanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2RvY3VtZW50LWNvbnRleHQuanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2hlYWQtbWFuYWdlci1jb250ZXh0LmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvZ2V0LXBhZ2UtZmlsZXMuanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvc2VydmVyL3V0aWxzLmpzXCIiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvZXhwZXJpbWVudGFsLXNjcmlwdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9oZWFkLW1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvcmVxdWVzdC1pZGxlLWNhbGxiYWNrLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvcGFnZXMvX2RvY3VtZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3Qvc2VydmVyL2h0bWxlc2NhcGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtanN4L3NlcnZlclwiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FB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O0FBQ0E7QUFDQTs7QUFFQSxhQUFhLHVCQUF1QjtBQUNwQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLCtDOzs7Ozs7Ozs7OztBQ2ZBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSx5Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQkEsdUM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsOEMiLCJmaWxlIjoicGFnZXMvX2RvY3VtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDIpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9jb25zdGFudHMuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9kb2N1bWVudC1jb250ZXh0LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvaGVhZC1tYW5hZ2VyLWNvbnRleHQuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvc2VydmVyL2dldC1wYWdlLWZpbGVzLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvdXRpbHMuanNcIik7IiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkPXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmRcIik7dmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuaW5pdFNjcmlwdExvYWRlcj1pbml0U2NyaXB0TG9hZGVyO2V4cG9ydHMuZGVmYXVsdD12b2lkIDA7dmFyIF9leHRlbmRzMj1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2V4dGVuZHNcIikpO3ZhciBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZTI9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlXCIpKTt2YXIgX3JlYWN0PV9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7dmFyIF9oZWFkTWFuYWdlckNvbnRleHQ9cmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi9oZWFkLW1hbmFnZXItY29udGV4dFwiKTt2YXIgX2hlYWRNYW5hZ2VyPXJlcXVpcmUoXCIuL2hlYWQtbWFuYWdlclwiKTt2YXIgX3JlcXVlc3RJZGxlQ2FsbGJhY2s9cmVxdWlyZShcIi4vcmVxdWVzdC1pZGxlLWNhbGxiYWNrXCIpO2NvbnN0IFNjcmlwdENhY2hlPW5ldyBNYXAoKTtjb25zdCBMb2FkQ2FjaGU9bmV3IFNldCgpO2NvbnN0IGlnbm9yZVByb3BzPVsnb25Mb2FkJywnZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwnLCdjaGlsZHJlbicsJ29uRXJyb3InLCdzdHJhdGVneScsJ3ByZWxvYWQnXTtjb25zdCBsb2FkU2NyaXB0PXByb3BzPT57Y29uc3R7c3JjLGlkLG9uTG9hZD0oKT0+e30sZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwsY2hpbGRyZW49Jycsb25FcnJvcn09cHJvcHM7Y29uc3QgY2FjaGVLZXk9aWR8fHNyYztpZihTY3JpcHRDYWNoZS5oYXMoc3JjKSl7aWYoIUxvYWRDYWNoZS5oYXMoY2FjaGVLZXkpKXtMb2FkQ2FjaGUuYWRkKGNhY2hlS2V5KTsvLyBFeGVjdXRlIG9uTG9hZCBzaW5jZSB0aGUgc2NyaXB0IGxvYWRpbmcgaGFzIGJlZ3VuXG5TY3JpcHRDYWNoZS5nZXQoc3JjKS50aGVuKG9uTG9hZCxvbkVycm9yKTt9cmV0dXJuO31jb25zdCBlbD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtjb25zdCBsb2FkUHJvbWlzZT1uZXcgUHJvbWlzZSgocmVzb2x2ZSxyZWplY3QpPT57ZWwuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsZnVuY3Rpb24oKXtyZXNvbHZlKCk7aWYob25Mb2FkKXtvbkxvYWQuY2FsbCh0aGlzKTt9fSk7ZWwuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLGZ1bmN0aW9uKCl7cmVqZWN0KCk7aWYob25FcnJvcil7b25FcnJvcigpO319KTt9KTtpZihzcmMpe1NjcmlwdENhY2hlLnNldChzcmMsbG9hZFByb21pc2UpO0xvYWRDYWNoZS5hZGQoY2FjaGVLZXkpO31pZihkYW5nZXJvdXNseVNldElubmVySFRNTCl7ZWwuaW5uZXJIVE1MPWRhbmdlcm91c2x5U2V0SW5uZXJIVE1MLl9faHRtbHx8Jyc7fWVsc2UgaWYoY2hpbGRyZW4pe2VsLnRleHRDb250ZW50PXR5cGVvZiBjaGlsZHJlbj09PSdzdHJpbmcnP2NoaWxkcmVuOkFycmF5LmlzQXJyYXkoY2hpbGRyZW4pP2NoaWxkcmVuLmpvaW4oJycpOicnO31lbHNlIGlmKHNyYyl7ZWwuc3JjPXNyYzt9Zm9yKGNvbnN0W2ssdmFsdWVdb2YgT2JqZWN0LmVudHJpZXMocHJvcHMpKXtpZih2YWx1ZT09PXVuZGVmaW5lZHx8aWdub3JlUHJvcHMuaW5jbHVkZXMoaykpe2NvbnRpbnVlO31jb25zdCBhdHRyPV9oZWFkTWFuYWdlci5ET01BdHRyaWJ1dGVOYW1lc1trXXx8ay50b0xvd2VyQ2FzZSgpO2VsLnNldEF0dHJpYnV0ZShhdHRyLHZhbHVlKTt9ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChlbCk7fTtmdW5jdGlvbiBoYW5kbGVDbGllbnRTY3JpcHRMb2FkKHByb3BzKXtjb25zdHtzdHJhdGVneT0nZGVmZXInfT1wcm9wcztpZihzdHJhdGVneT09PSdkZWZlcicpe2xvYWRTY3JpcHQocHJvcHMpO31lbHNlIGlmKHN0cmF0ZWd5PT09J2xhenknKXt3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsKCk9PnsoMCxfcmVxdWVzdElkbGVDYWxsYmFjay5yZXF1ZXN0SWRsZUNhbGxiYWNrKSgoKT0+bG9hZFNjcmlwdChwcm9wcykpO30pO319ZnVuY3Rpb24gbG9hZExhenlTY3JpcHQocHJvcHMpe2lmKGRvY3VtZW50LnJlYWR5U3RhdGU9PT0nY29tcGxldGUnKXsoMCxfcmVxdWVzdElkbGVDYWxsYmFjay5yZXF1ZXN0SWRsZUNhbGxiYWNrKSgoKT0+bG9hZFNjcmlwdChwcm9wcykpO31lbHNle3dpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywoKT0+eygwLF9yZXF1ZXN0SWRsZUNhbGxiYWNrLnJlcXVlc3RJZGxlQ2FsbGJhY2spKCgpPT5sb2FkU2NyaXB0KHByb3BzKSk7fSk7fX1mdW5jdGlvbiBpbml0U2NyaXB0TG9hZGVyKHNjcmlwdExvYWRlckl0ZW1zKXtzY3JpcHRMb2FkZXJJdGVtcy5mb3JFYWNoKGhhbmRsZUNsaWVudFNjcmlwdExvYWQpO31mdW5jdGlvbiBTY3JpcHQocHJvcHMpe2NvbnN0e3NyYz0nJyxvbkxvYWQ9KCk9Pnt9LGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MLGNoaWxkcmVuPScnLHN0cmF0ZWd5PSdkZWZlcicsb25FcnJvcixwcmVsb2FkPWZhbHNlfT1wcm9wcyxyZXN0UHJvcHM9KDAsX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UyLmRlZmF1bHQpKHByb3BzLFtcInNyY1wiLFwib25Mb2FkXCIsXCJkYW5nZXJvdXNseVNldElubmVySFRNTFwiLFwiY2hpbGRyZW5cIixcInN0cmF0ZWd5XCIsXCJvbkVycm9yXCIsXCJwcmVsb2FkXCJdKTsvLyBDb250ZXh0IGlzIGF2YWlsYWJsZSBvbmx5IGR1cmluZyBTU1JcbmNvbnN0e3VwZGF0ZVNjcmlwdHMsc2NyaXB0c309KDAsX3JlYWN0LnVzZUNvbnRleHQpKF9oZWFkTWFuYWdlckNvbnRleHQuSGVhZE1hbmFnZXJDb250ZXh0KTsoMCxfcmVhY3QudXNlRWZmZWN0KSgoKT0+e2lmKHN0cmF0ZWd5PT09J2RlZmVyJyl7bG9hZFNjcmlwdChwcm9wcyk7fWVsc2UgaWYoc3RyYXRlZ3k9PT0nbGF6eScpe2xvYWRMYXp5U2NyaXB0KHByb3BzKTt9fSxbcHJvcHMsc3RyYXRlZ3ldKTtpZighcHJvY2Vzcy5lbnYuX19ORVhUX1NDUklQVF9MT0FERVIpe3JldHVybiBudWxsO31pZihzdHJhdGVneT09PSdkYW5nZXJvdXNseUJsb2NrUmVuZGVyaW5nJyl7Y29uc3Qgc3luY1Byb3BzPSgwLF9leHRlbmRzMi5kZWZhdWx0KSh7fSxyZXN0UHJvcHMpO2Zvcihjb25zdFtrLHZhbHVlXW9mIE9iamVjdC5lbnRyaWVzKHtzcmMsb25Mb2FkLG9uRXJyb3IsZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwsY2hpbGRyZW59KSl7aWYoIXZhbHVlKXtjb250aW51ZTt9aWYoaz09PSdjaGlsZHJlbicpe3N5bmNQcm9wcy5kYW5nZXJvdXNseVNldElubmVySFRNTD17X19odG1sOnR5cGVvZiB2YWx1ZT09PSdzdHJpbmcnP3ZhbHVlOkFycmF5LmlzQXJyYXkodmFsdWUpP3ZhbHVlLmpvaW4oJycpOicnfTt9ZWxzZXs7c3luY1Byb3BzW2tdPXZhbHVlO319cmV0dXJuLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIixzeW5jUHJvcHMpO31lbHNlIGlmKHN0cmF0ZWd5PT09J2RlZmVyJyl7aWYodXBkYXRlU2NyaXB0cyYmcHJlbG9hZCl7c2NyaXB0cy5kZWZlcj0oc2NyaXB0cy5kZWZlcnx8W10pLmNvbmNhdChbc3JjXSk7dXBkYXRlU2NyaXB0cyhzY3JpcHRzKTt9fWVsc2UgaWYoc3RyYXRlZ3k9PT0nZWFnZXInKXtpZih1cGRhdGVTY3JpcHRzKXtzY3JpcHRzLmVhZ2VyPShzY3JpcHRzLmVhZ2VyfHxbXSkuY29uY2F0KFsoMCxfZXh0ZW5kczIuZGVmYXVsdCkoe3NyYyxvbkxvYWQsb25FcnJvcn0scmVzdFByb3BzKV0pO3VwZGF0ZVNjcmlwdHMoc2NyaXB0cyk7fX1yZXR1cm4gbnVsbDt9dmFyIF9kZWZhdWx0PVNjcmlwdDtleHBvcnRzLmRlZmF1bHQ9X2RlZmF1bHQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1leHBlcmltZW50YWwtc2NyaXB0LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZGVmYXVsdD1pbml0SGVhZE1hbmFnZXI7ZXhwb3J0cy5ET01BdHRyaWJ1dGVOYW1lcz12b2lkIDA7Y29uc3QgRE9NQXR0cmlidXRlTmFtZXM9e2FjY2VwdENoYXJzZXQ6J2FjY2VwdC1jaGFyc2V0JyxjbGFzc05hbWU6J2NsYXNzJyxodG1sRm9yOidmb3InLGh0dHBFcXVpdjonaHR0cC1lcXVpdicsbm9Nb2R1bGU6J25vTW9kdWxlJ307ZXhwb3J0cy5ET01BdHRyaWJ1dGVOYW1lcz1ET01BdHRyaWJ1dGVOYW1lcztmdW5jdGlvbiByZWFjdEVsZW1lbnRUb0RPTSh7dHlwZSxwcm9wc30pe2NvbnN0IGVsPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSk7Zm9yKGNvbnN0IHAgaW4gcHJvcHMpe2lmKCFwcm9wcy5oYXNPd25Qcm9wZXJ0eShwKSljb250aW51ZTtpZihwPT09J2NoaWxkcmVuJ3x8cD09PSdkYW5nZXJvdXNseVNldElubmVySFRNTCcpY29udGludWU7Ly8gd2UgZG9uJ3QgcmVuZGVyIHVuZGVmaW5lZCBwcm9wcyB0byB0aGUgRE9NXG5pZihwcm9wc1twXT09PXVuZGVmaW5lZCljb250aW51ZTtjb25zdCBhdHRyPURPTUF0dHJpYnV0ZU5hbWVzW3BdfHxwLnRvTG93ZXJDYXNlKCk7aWYodHlwZT09PSdzY3JpcHQnJiYoYXR0cj09PSdhc3luYyd8fGF0dHI9PT0nZGVmZXInfHxhdHRyPT09J25vTW9kdWxlJykpeztlbFthdHRyXT0hIXByb3BzW3BdO31lbHNle2VsLnNldEF0dHJpYnV0ZShhdHRyLHByb3BzW3BdKTt9fWNvbnN0e2NoaWxkcmVuLGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MfT1wcm9wcztpZihkYW5nZXJvdXNseVNldElubmVySFRNTCl7ZWwuaW5uZXJIVE1MPWRhbmdlcm91c2x5U2V0SW5uZXJIVE1MLl9faHRtbHx8Jyc7fWVsc2UgaWYoY2hpbGRyZW4pe2VsLnRleHRDb250ZW50PXR5cGVvZiBjaGlsZHJlbj09PSdzdHJpbmcnP2NoaWxkcmVuOkFycmF5LmlzQXJyYXkoY2hpbGRyZW4pP2NoaWxkcmVuLmpvaW4oJycpOicnO31yZXR1cm4gZWw7fWZ1bmN0aW9uIHVwZGF0ZUVsZW1lbnRzKHR5cGUsY29tcG9uZW50cyl7Y29uc3QgaGVhZEVsPWRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF07Y29uc3QgaGVhZENvdW50RWw9aGVhZEVsLnF1ZXJ5U2VsZWN0b3IoJ21ldGFbbmFtZT1uZXh0LWhlYWQtY291bnRdJyk7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe2lmKCFoZWFkQ291bnRFbCl7Y29uc29sZS5lcnJvcignV2FybmluZzogbmV4dC1oZWFkLWNvdW50IGlzIG1pc3NpbmcuIGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL25leHQtaGVhZC1jb3VudC1taXNzaW5nJyk7cmV0dXJuO319Y29uc3QgaGVhZENvdW50PU51bWJlcihoZWFkQ291bnRFbC5jb250ZW50KTtjb25zdCBvbGRUYWdzPVtdO2ZvcihsZXQgaT0wLGo9aGVhZENvdW50RWwucHJldmlvdXNFbGVtZW50U2libGluZztpPGhlYWRDb3VudDtpKyssaj1qLnByZXZpb3VzRWxlbWVudFNpYmxpbmcpe2lmKGoudGFnTmFtZS50b0xvd2VyQ2FzZSgpPT09dHlwZSl7b2xkVGFncy5wdXNoKGopO319Y29uc3QgbmV3VGFncz1jb21wb25lbnRzLm1hcChyZWFjdEVsZW1lbnRUb0RPTSkuZmlsdGVyKG5ld1RhZz0+e2ZvcihsZXQgaz0wLGxlbj1vbGRUYWdzLmxlbmd0aDtrPGxlbjtrKyspe2NvbnN0IG9sZFRhZz1vbGRUYWdzW2tdO2lmKG9sZFRhZy5pc0VxdWFsTm9kZShuZXdUYWcpKXtvbGRUYWdzLnNwbGljZShrLDEpO3JldHVybiBmYWxzZTt9fXJldHVybiB0cnVlO30pO29sZFRhZ3MuZm9yRWFjaCh0PT50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodCkpO25ld1RhZ3MuZm9yRWFjaCh0PT5oZWFkRWwuaW5zZXJ0QmVmb3JlKHQsaGVhZENvdW50RWwpKTtoZWFkQ291bnRFbC5jb250ZW50PShoZWFkQ291bnQtb2xkVGFncy5sZW5ndGgrbmV3VGFncy5sZW5ndGgpLnRvU3RyaW5nKCk7fWZ1bmN0aW9uIGluaXRIZWFkTWFuYWdlcigpe2xldCB1cGRhdGVQcm9taXNlPW51bGw7cmV0dXJue21vdW50ZWRJbnN0YW5jZXM6bmV3IFNldCgpLHVwZGF0ZUhlYWQ6aGVhZD0+e2NvbnN0IHByb21pc2U9dXBkYXRlUHJvbWlzZT1Qcm9taXNlLnJlc29sdmUoKS50aGVuKCgpPT57aWYocHJvbWlzZSE9PXVwZGF0ZVByb21pc2UpcmV0dXJuO3VwZGF0ZVByb21pc2U9bnVsbDtjb25zdCB0YWdzPXt9O2hlYWQuZm9yRWFjaChoPT57Y29uc3QgY29tcG9uZW50cz10YWdzW2gudHlwZV18fFtdO2NvbXBvbmVudHMucHVzaChoKTt0YWdzW2gudHlwZV09Y29tcG9uZW50czt9KTtjb25zdCB0aXRsZUNvbXBvbmVudD10YWdzLnRpdGxlP3RhZ3MudGl0bGVbMF06bnVsbDtsZXQgdGl0bGU9Jyc7aWYodGl0bGVDb21wb25lbnQpe2NvbnN0e2NoaWxkcmVufT10aXRsZUNvbXBvbmVudC5wcm9wczt0aXRsZT10eXBlb2YgY2hpbGRyZW49PT0nc3RyaW5nJz9jaGlsZHJlbjpBcnJheS5pc0FycmF5KGNoaWxkcmVuKT9jaGlsZHJlbi5qb2luKCcnKTonJzt9aWYodGl0bGUhPT1kb2N1bWVudC50aXRsZSlkb2N1bWVudC50aXRsZT10aXRsZTtbJ21ldGEnLCdiYXNlJywnbGluaycsJ3N0eWxlJywnc2NyaXB0J10uZm9yRWFjaCh0eXBlPT57dXBkYXRlRWxlbWVudHModHlwZSx0YWdzW3R5cGVdfHxbXSk7fSk7fSk7fX07fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aGVhZC1tYW5hZ2VyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuY2FuY2VsSWRsZUNhbGxiYWNrPWV4cG9ydHMucmVxdWVzdElkbGVDYWxsYmFjaz12b2lkIDA7Y29uc3QgcmVxdWVzdElkbGVDYWxsYmFjaz10eXBlb2Ygc2VsZiE9PSd1bmRlZmluZWQnJiZzZWxmLnJlcXVlc3RJZGxlQ2FsbGJhY2t8fGZ1bmN0aW9uKGNiKXtsZXQgc3RhcnQ9RGF0ZS5ub3coKTtyZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbigpe2NiKHtkaWRUaW1lb3V0OmZhbHNlLHRpbWVSZW1haW5pbmc6ZnVuY3Rpb24oKXtyZXR1cm4gTWF0aC5tYXgoMCw1MC0oRGF0ZS5ub3coKS1zdGFydCkpO319KTt9LDEpO307ZXhwb3J0cy5yZXF1ZXN0SWRsZUNhbGxiYWNrPXJlcXVlc3RJZGxlQ2FsbGJhY2s7Y29uc3QgY2FuY2VsSWRsZUNhbGxiYWNrPXR5cGVvZiBzZWxmIT09J3VuZGVmaW5lZCcmJnNlbGYuY2FuY2VsSWRsZUNhbGxiYWNrfHxmdW5jdGlvbihpZCl7cmV0dXJuIGNsZWFyVGltZW91dChpZCk7fTtleHBvcnRzLmNhbmNlbElkbGVDYWxsYmFjaz1jYW5jZWxJZGxlQ2FsbGJhY2s7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yZXF1ZXN0LWlkbGUtY2FsbGJhY2suanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5IdG1sPUh0bWw7ZXhwb3J0cy5NYWluPU1haW47ZXhwb3J0cy5OZXh0U2NyaXB0PWV4cG9ydHMuSGVhZD1leHBvcnRzLmRlZmF1bHQ9dm9pZCAwO3ZhciBfcHJvcFR5cGVzPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInByb3AtdHlwZXNcIikpO3ZhciBfcmVhY3Q9X2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJlYWN0XCIpKTt2YXIgX3NlcnZlcj1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJzdHlsZWQtanN4L3NlcnZlclwiKSk7dmFyIF9jb25zdGFudHM9cmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi9jb25zdGFudHNcIik7dmFyIF9kb2N1bWVudENvbnRleHQ9cmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi9kb2N1bWVudC1jb250ZXh0XCIpO3ZhciBfdXRpbHM9cmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi91dGlsc1wiKTtleHBvcnRzLkRvY3VtZW50Q29udGV4dD1fdXRpbHMuRG9jdW1lbnRDb250ZXh0O2V4cG9ydHMuRG9jdW1lbnRJbml0aWFsUHJvcHM9X3V0aWxzLkRvY3VtZW50SW5pdGlhbFByb3BzO2V4cG9ydHMuRG9jdW1lbnRQcm9wcz1fdXRpbHMuRG9jdW1lbnRQcm9wczt2YXIgX2dldFBhZ2VGaWxlcz1yZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvc2VydmVyL2dldC1wYWdlLWZpbGVzXCIpO3ZhciBfdXRpbHMyPXJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9zZXJ2ZXIvdXRpbHNcIik7dmFyIF9odG1sZXNjYXBlPXJlcXVpcmUoXCIuLi9zZXJ2ZXIvaHRtbGVzY2FwZVwiKTt2YXIgX2V4cGVyaW1lbnRhbFNjcmlwdD1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9jbGllbnQvZXhwZXJpbWVudGFsLXNjcmlwdFwiKSk7ZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmope3JldHVybiBvYmomJm9iai5fX2VzTW9kdWxlP29iajp7ZGVmYXVsdDpvYmp9O31mdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKXtpZih0eXBlb2YgV2Vha01hcCE9PVwiZnVuY3Rpb25cIilyZXR1cm4gbnVsbDt2YXIgY2FjaGU9bmV3IFdlYWtNYXAoKTtfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGU9ZnVuY3Rpb24oKXtyZXR1cm4gY2FjaGU7fTtyZXR1cm4gY2FjaGU7fWZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iail7aWYob2JqJiZvYmouX19lc01vZHVsZSl7cmV0dXJuIG9iajt9aWYob2JqPT09bnVsbHx8dHlwZW9mIG9iaiE9PVwib2JqZWN0XCImJnR5cGVvZiBvYmohPT1cImZ1bmN0aW9uXCIpe3JldHVybntkZWZhdWx0Om9ian07fXZhciBjYWNoZT1fZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTtpZihjYWNoZSYmY2FjaGUuaGFzKG9iaikpe3JldHVybiBjYWNoZS5nZXQob2JqKTt9dmFyIG5ld09iaj17fTt2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yPU9iamVjdC5kZWZpbmVQcm9wZXJ0eSYmT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtmb3IodmFyIGtleSBpbiBvYmope2lmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosa2V5KSl7dmFyIGRlc2M9aGFzUHJvcGVydHlEZXNjcmlwdG9yP09iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLGtleSk6bnVsbDtpZihkZXNjJiYoZGVzYy5nZXR8fGRlc2Muc2V0KSl7T2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaixrZXksZGVzYyk7fWVsc2V7bmV3T2JqW2tleV09b2JqW2tleV07fX19bmV3T2JqLmRlZmF1bHQ9b2JqO2lmKGNhY2hlKXtjYWNoZS5zZXQob2JqLG5ld09iaik7fXJldHVybiBuZXdPYmo7fWZ1bmN0aW9uIGRlZHVwZShidW5kbGVzKXtjb25zdCBmaWxlcz1uZXcgU2V0KCk7Y29uc3Qga2VwdD1bXTtmb3IoY29uc3QgYnVuZGxlIG9mIGJ1bmRsZXMpe2lmKGZpbGVzLmhhcyhidW5kbGUuZmlsZSkpY29udGludWU7ZmlsZXMuYWRkKGJ1bmRsZS5maWxlKTtrZXB0LnB1c2goYnVuZGxlKTt9cmV0dXJuIGtlcHQ7fWZ1bmN0aW9uIGdldERvY3VtZW50RmlsZXMoYnVpbGRNYW5pZmVzdCxwYXRobmFtZSxpbkFtcE1vZGUpe2NvbnN0IHNoYXJlZEZpbGVzPSgwLF9nZXRQYWdlRmlsZXMuZ2V0UGFnZUZpbGVzKShidWlsZE1hbmlmZXN0LCcvX2FwcCcpO2NvbnN0IHBhZ2VGaWxlcz1pbkFtcE1vZGU/W106KDAsX2dldFBhZ2VGaWxlcy5nZXRQYWdlRmlsZXMpKGJ1aWxkTWFuaWZlc3QscGF0aG5hbWUpO3JldHVybntzaGFyZWRGaWxlcyxwYWdlRmlsZXMsYWxsRmlsZXM6Wy4uLm5ldyBTZXQoWy4uLnNoYXJlZEZpbGVzLC4uLnBhZ2VGaWxlc10pXX07fS8qKlxuICogYERvY3VtZW50YCBjb21wb25lbnQgaGFuZGxlcyB0aGUgaW5pdGlhbCBgZG9jdW1lbnRgIG1hcmt1cCBhbmQgcmVuZGVycyBvbmx5IG9uIHRoZSBzZXJ2ZXIgc2lkZS5cbiAqIENvbW1vbmx5IHVzZWQgZm9yIGltcGxlbWVudGluZyBzZXJ2ZXIgc2lkZSByZW5kZXJpbmcgZm9yIGBjc3MtaW4tanNgIGxpYnJhcmllcy5cbiAqL2NsYXNzIERvY3VtZW50IGV4dGVuZHMgX3JlYWN0LkNvbXBvbmVudHsvKipcbiAgICogYGdldEluaXRpYWxQcm9wc2AgaG9vayByZXR1cm5zIHRoZSBjb250ZXh0IG9iamVjdCB3aXRoIHRoZSBhZGRpdGlvbiBvZiBgcmVuZGVyUGFnZWAuXG4gICAqIGByZW5kZXJQYWdlYCBjYWxsYmFjayBleGVjdXRlcyBgUmVhY3RgIHJlbmRlcmluZyBsb2dpYyBzeW5jaHJvbm91c2x5IHRvIHN1cHBvcnQgc2VydmVyLXJlbmRlcmluZyB3cmFwcGVyc1xuICAgKi9zdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKGN0eCl7Y29uc3QgZW5oYW5jZUFwcD1BcHA9PntyZXR1cm4gcHJvcHM9Pi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KEFwcCxwcm9wcyk7fTtjb25zdHtodG1sLGhlYWR9PWF3YWl0IGN0eC5yZW5kZXJQYWdlKHtlbmhhbmNlQXBwfSk7Y29uc3Qgc3R5bGVzPVsuLi4oMCxfc2VydmVyLmRlZmF1bHQpKCldO3JldHVybntodG1sLGhlYWQsc3R5bGVzfTt9c3RhdGljIHJlbmRlckRvY3VtZW50KERvY3VtZW50Q29tcG9uZW50LHByb3BzKXtyZXR1cm4vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChfZG9jdW1lbnRDb250ZXh0LkRvY3VtZW50Q29udGV4dC5Qcm92aWRlcix7dmFsdWU6cHJvcHN9LC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KERvY3VtZW50Q29tcG9uZW50LHByb3BzKSk7fXJlbmRlcigpe3JldHVybi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KEh0bWwsbnVsbCwvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChIZWFkLG51bGwpLC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiYm9keVwiLG51bGwsLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoTWFpbixudWxsKSwvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChOZXh0U2NyaXB0LG51bGwpKSk7fX1leHBvcnRzLmRlZmF1bHQ9RG9jdW1lbnQ7RG9jdW1lbnQuaGVhZFRhZ3NNaWRkbGV3YXJlPXByb2Nlc3MuZW52Ll9fTkVYVF9QTFVHSU5TP1Byb21pc2UucmVzb2x2ZSgpLnRoZW4oKCk9Pl9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoJ25leHQtcGx1Z2luLWxvYWRlcj9taWRkbGV3YXJlPWRvY3VtZW50LWhlYWQtdGFncy1zZXJ2ZXIhJykpKTooKT0+W107ZnVuY3Rpb24gSHRtbChwcm9wcyl7Y29uc3R7aW5BbXBNb2RlLGRvY0NvbXBvbmVudHNSZW5kZXJlZCxsb2NhbGV9PSgwLF9yZWFjdC51c2VDb250ZXh0KShfZG9jdW1lbnRDb250ZXh0LkRvY3VtZW50Q29udGV4dCk7ZG9jQ29tcG9uZW50c1JlbmRlcmVkLkh0bWw9dHJ1ZTtyZXR1cm4vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImh0bWxcIixPYmplY3QuYXNzaWduKHt9LHByb3BzLHtsYW5nOnByb3BzLmxhbmd8fGxvY2FsZXx8dW5kZWZpbmVkLGFtcDppbkFtcE1vZGU/Jyc6dW5kZWZpbmVkLFwiZGF0YS1hbXBkZXZtb2RlXCI6aW5BbXBNb2RlJiZwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJz8nJzp1bmRlZmluZWR9KSk7fWNsYXNzIEhlYWQgZXh0ZW5kcyBfcmVhY3QuQ29tcG9uZW50e2NvbnN0cnVjdG9yKC4uLmFyZ3Mpe3N1cGVyKC4uLmFyZ3MpO3RoaXMuY29udGV4dD12b2lkIDA7fWdldENzc0xpbmtzKGZpbGVzKXtjb25zdHthc3NldFByZWZpeCxkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZyxkeW5hbWljSW1wb3J0c309dGhpcy5jb250ZXh0O2NvbnN0IGNzc0ZpbGVzPWZpbGVzLmFsbEZpbGVzLmZpbHRlcihmPT5mLmVuZHNXaXRoKCcuY3NzJykpO2NvbnN0IHNoYXJlZEZpbGVzPW5ldyBTZXQoZmlsZXMuc2hhcmVkRmlsZXMpOy8vIFVubWFuYWdlZCBmaWxlcyBhcmUgQ1NTIGZpbGVzIHRoYXQgd2lsbCBiZSBoYW5kbGVkIGRpcmVjdGx5IGJ5IHRoZVxuLy8gd2VicGFjayBydW50aW1lIChgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5gKS5cbmxldCB1bm1hbmdlZEZpbGVzPW5ldyBTZXQoW10pO2xldCBkeW5hbWljQ3NzRmlsZXM9ZGVkdXBlKGR5bmFtaWNJbXBvcnRzLmZpbHRlcihmPT5mLmZpbGUuZW5kc1dpdGgoJy5jc3MnKSkpLm1hcChmPT5mLmZpbGUpO2lmKGR5bmFtaWNDc3NGaWxlcy5sZW5ndGgpe2NvbnN0IGV4aXN0aW5nPW5ldyBTZXQoY3NzRmlsZXMpO2R5bmFtaWNDc3NGaWxlcz1keW5hbWljQ3NzRmlsZXMuZmlsdGVyKGY9PiEoZXhpc3RpbmcuaGFzKGYpfHxzaGFyZWRGaWxlcy5oYXMoZikpKTt1bm1hbmdlZEZpbGVzPW5ldyBTZXQoZHluYW1pY0Nzc0ZpbGVzKTtjc3NGaWxlcy5wdXNoKC4uLmR5bmFtaWNDc3NGaWxlcyk7fWxldCBjc3NMaW5rRWxlbWVudHM9W107Y3NzRmlsZXMuZm9yRWFjaChmaWxlPT57Y29uc3QgaXNTaGFyZWRGaWxlPXNoYXJlZEZpbGVzLmhhcyhmaWxlKTtpZighcHJvY2Vzcy5lbnYuX19ORVhUX09QVElNSVpFX0NTUyl7Y3NzTGlua0VsZW1lbnRzLnB1c2goLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIse2tleTpgJHtmaWxlfS1wcmVsb2FkYCxub25jZTp0aGlzLnByb3BzLm5vbmNlLHJlbDpcInByZWxvYWRcIixocmVmOmAke2Fzc2V0UHJlZml4fS9fbmV4dC8ke2VuY29kZVVSSShmaWxlKX0ke2Rldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nfWAsYXM6XCJzdHlsZVwiLGNyb3NzT3JpZ2luOnRoaXMucHJvcHMuY3Jvc3NPcmlnaW58fHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU59KSk7fWNvbnN0IGlzVW5tYW5hZ2VkRmlsZT11bm1hbmdlZEZpbGVzLmhhcyhmaWxlKTtjc3NMaW5rRWxlbWVudHMucHVzaCgvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImxpbmtcIix7a2V5OmZpbGUsbm9uY2U6dGhpcy5wcm9wcy5ub25jZSxyZWw6XCJzdHlsZXNoZWV0XCIsaHJlZjpgJHthc3NldFByZWZpeH0vX25leHQvJHtlbmNvZGVVUkkoZmlsZSl9JHtkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZ31gLGNyb3NzT3JpZ2luOnRoaXMucHJvcHMuY3Jvc3NPcmlnaW58fHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU4sXCJkYXRhLW4tZ1wiOmlzVW5tYW5hZ2VkRmlsZT91bmRlZmluZWQ6aXNTaGFyZWRGaWxlPycnOnVuZGVmaW5lZCxcImRhdGEtbi1wXCI6aXNVbm1hbmFnZWRGaWxlP3VuZGVmaW5lZDppc1NoYXJlZEZpbGU/dW5kZWZpbmVkOicnfSkpO30pO2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J2RldmVsb3BtZW50JyYmcHJvY2Vzcy5lbnYuX19ORVhUX09QVElNSVpFX0ZPTlRTKXtjc3NMaW5rRWxlbWVudHM9dGhpcy5tYWtlU3R5bGVzaGVldEluZXJ0KGNzc0xpbmtFbGVtZW50cyk7fXJldHVybiBjc3NMaW5rRWxlbWVudHMubGVuZ3RoPT09MD9udWxsOmNzc0xpbmtFbGVtZW50czt9Z2V0UHJlbG9hZER5bmFtaWNDaHVua3MoKXtjb25zdHtkeW5hbWljSW1wb3J0cyxhc3NldFByZWZpeCxkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZ309dGhpcy5jb250ZXh0O3JldHVybiBkZWR1cGUoZHluYW1pY0ltcG9ydHMpLm1hcChidW5kbGU9PntpZighYnVuZGxlLmZpbGUuZW5kc1dpdGgoJy5qcycpKXtyZXR1cm4gbnVsbDt9cmV0dXJuLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIse3JlbDpcInByZWxvYWRcIixrZXk6YnVuZGxlLmZpbGUsaHJlZjpgJHthc3NldFByZWZpeH0vX25leHQvJHtlbmNvZGVVUkkoYnVuZGxlLmZpbGUpfSR7ZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmd9YCxhczpcInNjcmlwdFwiLG5vbmNlOnRoaXMucHJvcHMubm9uY2UsY3Jvc3NPcmlnaW46dGhpcy5wcm9wcy5jcm9zc09yaWdpbnx8cHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTn0pO30pLy8gRmlsdGVyIG91dCBudWxsZWQgc2NyaXB0c1xuLmZpbHRlcihCb29sZWFuKTt9Z2V0UHJlbG9hZE1haW5MaW5rcyhmaWxlcyl7Y29uc3R7YXNzZXRQcmVmaXgsZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmcsc2NyaXB0TG9hZGVyfT10aGlzLmNvbnRleHQ7Y29uc3QgcHJlbG9hZEZpbGVzPWZpbGVzLmFsbEZpbGVzLmZpbHRlcihmaWxlPT57cmV0dXJuIGZpbGUuZW5kc1dpdGgoJy5qcycpO30pO3JldHVyblsuLi4oc2NyaXB0TG9hZGVyLmVhZ2VyfHxbXSkubWFwKGZpbGU9Pi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibGlua1wiLHtrZXk6ZmlsZS5zcmMsbm9uY2U6dGhpcy5wcm9wcy5ub25jZSxyZWw6XCJwcmVsb2FkXCIsaHJlZjpmaWxlLnNyYyxhczpcInNjcmlwdFwiLGNyb3NzT3JpZ2luOnRoaXMucHJvcHMuY3Jvc3NPcmlnaW58fHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU59KSksLi4ucHJlbG9hZEZpbGVzLm1hcChmaWxlPT4vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImxpbmtcIix7a2V5OmZpbGUsbm9uY2U6dGhpcy5wcm9wcy5ub25jZSxyZWw6XCJwcmVsb2FkXCIsaHJlZjpgJHthc3NldFByZWZpeH0vX25leHQvJHtlbmNvZGVVUkkoZmlsZSl9JHtkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZ31gLGFzOlwic2NyaXB0XCIsY3Jvc3NPcmlnaW46dGhpcy5wcm9wcy5jcm9zc09yaWdpbnx8cHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTn0pKSwuLi4oc2NyaXB0TG9hZGVyLmRlZmVyfHxbXSkubWFwKGZpbGU9Pi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibGlua1wiLHtrZXk6ZmlsZSxub25jZTp0aGlzLnByb3BzLm5vbmNlLHJlbDpcInByZWxvYWRcIixocmVmOmZpbGUsYXM6XCJzY3JpcHRcIixjcm9zc09yaWdpbjp0aGlzLnByb3BzLmNyb3NzT3JpZ2lufHxwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOfSkpXTt9aGFuZGxlRG9jdW1lbnRTY3JpcHRMb2FkZXJJdGVtcyhjaGlsZHJlbil7Y29uc3R7c2NyaXB0TG9hZGVyfT10aGlzLmNvbnRleHQ7Y29uc3Qgc2NyaXB0TG9hZGVySXRlbXM9W107Y29uc3QgZmlsdGVyZWRDaGlsZHJlbj1bXTtfcmVhY3QuZGVmYXVsdC5DaGlsZHJlbi5mb3JFYWNoKGNoaWxkcmVuLGNoaWxkPT57aWYoY2hpbGQudHlwZT09PV9leHBlcmltZW50YWxTY3JpcHQuZGVmYXVsdCl7aWYoY2hpbGQucHJvcHMuc3RyYXRlZ3k9PT0nZWFnZXInKXtzY3JpcHRMb2FkZXIuZWFnZXI9KHNjcmlwdExvYWRlci5lYWdlcnx8W10pLmNvbmNhdChbey4uLmNoaWxkLnByb3BzfV0pO3JldHVybjt9ZWxzZSBpZihbJ2xhenknLCdkZWZlciddLmluY2x1ZGVzKGNoaWxkLnByb3BzLnN0cmF0ZWd5KSl7c2NyaXB0TG9hZGVySXRlbXMucHVzaChjaGlsZC5wcm9wcyk7cmV0dXJuO319ZmlsdGVyZWRDaGlsZHJlbi5wdXNoKGNoaWxkKTt9KTt0aGlzLmNvbnRleHQuX19ORVhUX0RBVEFfXy5zY3JpcHRMb2FkZXI9c2NyaXB0TG9hZGVySXRlbXM7cmV0dXJuIGZpbHRlcmVkQ2hpbGRyZW47fW1ha2VTdHlsZXNoZWV0SW5lcnQobm9kZSl7cmV0dXJuIF9yZWFjdC5kZWZhdWx0LkNoaWxkcmVuLm1hcChub2RlLGM9PntpZihjLnR5cGU9PT0nbGluaycmJmMucHJvcHNbJ2hyZWYnXSYmX2NvbnN0YW50cy5PUFRJTUlaRURfRk9OVF9QUk9WSURFUlMuc29tZSh1cmw9PmMucHJvcHNbJ2hyZWYnXS5zdGFydHNXaXRoKHVybCkpKXtjb25zdCBuZXdQcm9wcz17Li4uKGMucHJvcHN8fHt9KX07bmV3UHJvcHNbJ2RhdGEtaHJlZiddPW5ld1Byb3BzWydocmVmJ107bmV3UHJvcHNbJ2hyZWYnXT11bmRlZmluZWQ7cmV0dXJuLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNsb25lRWxlbWVudChjLG5ld1Byb3BzKTt9ZWxzZSBpZihjLnByb3BzJiZjLnByb3BzWydjaGlsZHJlbiddKXtjLnByb3BzWydjaGlsZHJlbiddPXRoaXMubWFrZVN0eWxlc2hlZXRJbmVydChjLnByb3BzWydjaGlsZHJlbiddKTt9cmV0dXJuIGM7fSk7fXJlbmRlcigpe3ZhciBfdGhpcyRwcm9wcyRub25jZSxfdGhpcyRwcm9wcyRub25jZTI7Y29uc3R7c3R5bGVzLGFtcFBhdGgsaW5BbXBNb2RlLGh5YnJpZEFtcCxjYW5vbmljYWxCYXNlLF9fTkVYVF9EQVRBX18sZGFuZ2Vyb3VzQXNQYXRoLGhlYWRUYWdzLHVuc3RhYmxlX3J1bnRpbWVKUyx1bnN0YWJsZV9Kc1ByZWxvYWR9PXRoaXMuY29udGV4dDtjb25zdCBkaXNhYmxlUnVudGltZUpTPXVuc3RhYmxlX3J1bnRpbWVKUz09PWZhbHNlO2NvbnN0IGRpc2FibGVKc1ByZWxvYWQ9dW5zdGFibGVfSnNQcmVsb2FkPT09ZmFsc2U7dGhpcy5jb250ZXh0LmRvY0NvbXBvbmVudHNSZW5kZXJlZC5IZWFkPXRydWU7bGV0e2hlYWR9PXRoaXMuY29udGV4dDtsZXQgY3NzUHJlbG9hZHM9W107bGV0IG90aGVySGVhZEVsZW1lbnRzPVtdO2lmKGhlYWQpe2hlYWQuZm9yRWFjaChjPT57aWYoYyYmYy50eXBlPT09J2xpbmsnJiZjLnByb3BzWydyZWwnXT09PSdwcmVsb2FkJyYmYy5wcm9wc1snYXMnXT09PSdzdHlsZScpe2Nzc1ByZWxvYWRzLnB1c2goYyk7fWVsc2V7YyYmb3RoZXJIZWFkRWxlbWVudHMucHVzaChjKTt9fSk7aGVhZD1jc3NQcmVsb2Fkcy5jb25jYXQob3RoZXJIZWFkRWxlbWVudHMpO31sZXQgY2hpbGRyZW49dGhpcy5wcm9wcy5jaGlsZHJlbjsvLyBzaG93IGEgd2FybmluZyBpZiBIZWFkIGNvbnRhaW5zIDx0aXRsZT4gKG9ubHkgaW4gZGV2ZWxvcG1lbnQpXG5pZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7Y2hpbGRyZW49X3JlYWN0LmRlZmF1bHQuQ2hpbGRyZW4ubWFwKGNoaWxkcmVuLGNoaWxkPT57dmFyIF9jaGlsZCRwcm9wcztjb25zdCBpc1JlYWN0SGVsbWV0PWNoaWxkPT1udWxsP3ZvaWQgMDooX2NoaWxkJHByb3BzPWNoaWxkLnByb3BzKT09bnVsbD92b2lkIDA6X2NoaWxkJHByb3BzWydkYXRhLXJlYWN0LWhlbG1ldCddO2lmKCFpc1JlYWN0SGVsbWV0KXt2YXIgX2NoaWxkJHByb3BzMjtpZigoY2hpbGQ9PW51bGw/dm9pZCAwOmNoaWxkLnR5cGUpPT09J3RpdGxlJyl7Y29uc29sZS53YXJuKFwiV2FybmluZzogPHRpdGxlPiBzaG91bGQgbm90IGJlIHVzZWQgaW4gX2RvY3VtZW50LmpzJ3MgPEhlYWQ+LiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9uby1kb2N1bWVudC10aXRsZVwiKTt9ZWxzZSBpZigoY2hpbGQ9PW51bGw/dm9pZCAwOmNoaWxkLnR5cGUpPT09J21ldGEnJiYoY2hpbGQ9PW51bGw/dm9pZCAwOihfY2hpbGQkcHJvcHMyPWNoaWxkLnByb3BzKT09bnVsbD92b2lkIDA6X2NoaWxkJHByb3BzMi5uYW1lKT09PSd2aWV3cG9ydCcpe2NvbnNvbGUud2FybihcIldhcm5pbmc6IHZpZXdwb3J0IG1ldGEgdGFncyBzaG91bGQgbm90IGJlIHVzZWQgaW4gX2RvY3VtZW50LmpzJ3MgPEhlYWQ+LiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9uby1kb2N1bWVudC12aWV3cG9ydC1tZXRhXCIpO319cmV0dXJuIGNoaWxkO30pO2lmKHRoaXMucHJvcHMuY3Jvc3NPcmlnaW4pY29uc29sZS53YXJuKCdXYXJuaW5nOiBgSGVhZGAgYXR0cmlidXRlIGBjcm9zc09yaWdpbmAgaXMgZGVwcmVjYXRlZC4gaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvZG9jLWNyb3Nzb3JpZ2luLWRlcHJlY2F0ZWQnKTt9aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0nZGV2ZWxvcG1lbnQnJiZwcm9jZXNzLmVudi5fX05FWFRfT1BUSU1JWkVfRk9OVFMmJiFpbkFtcE1vZGUpe2NoaWxkcmVuPXRoaXMubWFrZVN0eWxlc2hlZXRJbmVydChjaGlsZHJlbik7fWlmKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JJUFRfTE9BREVSKXtjaGlsZHJlbj10aGlzLmhhbmRsZURvY3VtZW50U2NyaXB0TG9hZGVySXRlbXMoY2hpbGRyZW4pO31sZXQgaGFzQW1waHRtbFJlbD1mYWxzZTtsZXQgaGFzQ2Fub25pY2FsUmVsPWZhbHNlOy8vIHNob3cgd2FybmluZyBhbmQgcmVtb3ZlIGNvbmZsaWN0aW5nIGFtcCBoZWFkIHRhZ3NcbmhlYWQ9X3JlYWN0LmRlZmF1bHQuQ2hpbGRyZW4ubWFwKGhlYWR8fFtdLGNoaWxkPT57aWYoIWNoaWxkKXJldHVybiBjaGlsZDtjb25zdHt0eXBlLHByb3BzfT1jaGlsZDtpZihpbkFtcE1vZGUpe2xldCBiYWRQcm9wPScnO2lmKHR5cGU9PT0nbWV0YScmJnByb3BzLm5hbWU9PT0ndmlld3BvcnQnKXtiYWRQcm9wPSduYW1lPVwidmlld3BvcnRcIic7fWVsc2UgaWYodHlwZT09PSdsaW5rJyYmcHJvcHMucmVsPT09J2Nhbm9uaWNhbCcpe2hhc0Nhbm9uaWNhbFJlbD10cnVlO31lbHNlIGlmKHR5cGU9PT0nc2NyaXB0Jyl7Ly8gb25seSBibG9jayBpZlxuLy8gMS4gaXQgaGFzIGEgc3JjIGFuZCBpc24ndCBwb2ludGluZyB0byBhbXBwcm9qZWN0J3MgQ0ROXG4vLyAyLiBpdCBpcyB1c2luZyBkYW5nZXJvdXNseVNldElubmVySFRNTCB3aXRob3V0IGEgdHlwZSBvclxuLy8gYSB0eXBlIG9mIHRleHQvamF2YXNjcmlwdFxuaWYocHJvcHMuc3JjJiZwcm9wcy5zcmMuaW5kZXhPZignYW1wcHJvamVjdCcpPC0xfHxwcm9wcy5kYW5nZXJvdXNseVNldElubmVySFRNTCYmKCFwcm9wcy50eXBlfHxwcm9wcy50eXBlPT09J3RleHQvamF2YXNjcmlwdCcpKXtiYWRQcm9wPSc8c2NyaXB0JztPYmplY3Qua2V5cyhwcm9wcykuZm9yRWFjaChwcm9wPT57YmFkUHJvcCs9YCAke3Byb3B9PVwiJHtwcm9wc1twcm9wXX1cImA7fSk7YmFkUHJvcCs9Jy8+Jzt9fWlmKGJhZFByb3Ape2NvbnNvbGUud2FybihgRm91bmQgY29uZmxpY3RpbmcgYW1wIHRhZyBcIiR7Y2hpbGQudHlwZX1cIiB3aXRoIGNvbmZsaWN0aW5nIHByb3AgJHtiYWRQcm9wfSBpbiAke19fTkVYVF9EQVRBX18ucGFnZX0uIGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2NvbmZsaWN0aW5nLWFtcC10YWdgKTtyZXR1cm4gbnVsbDt9fWVsc2V7Ly8gbm9uLWFtcCBtb2RlXG5pZih0eXBlPT09J2xpbmsnJiZwcm9wcy5yZWw9PT0nYW1waHRtbCcpe2hhc0FtcGh0bWxSZWw9dHJ1ZTt9fXJldHVybiBjaGlsZDt9KTsvLyB0cnkgdG8gcGFyc2Ugc3R5bGVzIGZyb20gZnJhZ21lbnQgZm9yIGJhY2t3YXJkcyBjb21wYXRcbmNvbnN0IGN1clN0eWxlcz1BcnJheS5pc0FycmF5KHN0eWxlcyk/c3R5bGVzOltdO2lmKGluQW1wTW9kZSYmc3R5bGVzJiYvLyBAdHMtaWdub3JlIFByb3BlcnR5ICdwcm9wcycgZG9lcyBub3QgZXhpc3Qgb24gdHlwZSBSZWFjdEVsZW1lbnRcbnN0eWxlcy5wcm9wcyYmLy8gQHRzLWlnbm9yZSBQcm9wZXJ0eSAncHJvcHMnIGRvZXMgbm90IGV4aXN0IG9uIHR5cGUgUmVhY3RFbGVtZW50XG5BcnJheS5pc0FycmF5KHN0eWxlcy5wcm9wcy5jaGlsZHJlbikpe2NvbnN0IGhhc1N0eWxlcz1lbD0+e3ZhciBfZWwkcHJvcHMsX2VsJHByb3BzJGRhbmdlcm91c2x5O3JldHVybiBlbD09bnVsbD92b2lkIDA6KF9lbCRwcm9wcz1lbC5wcm9wcyk9PW51bGw/dm9pZCAwOihfZWwkcHJvcHMkZGFuZ2Vyb3VzbHk9X2VsJHByb3BzLmRhbmdlcm91c2x5U2V0SW5uZXJIVE1MKT09bnVsbD92b2lkIDA6X2VsJHByb3BzJGRhbmdlcm91c2x5Ll9faHRtbDt9Oy8vIEB0cy1pZ25vcmUgUHJvcGVydHkgJ3Byb3BzJyBkb2VzIG5vdCBleGlzdCBvbiB0eXBlIFJlYWN0RWxlbWVudFxuc3R5bGVzLnByb3BzLmNoaWxkcmVuLmZvckVhY2goY2hpbGQ9PntpZihBcnJheS5pc0FycmF5KGNoaWxkKSl7Y2hpbGQuZm9yRWFjaChlbD0+aGFzU3R5bGVzKGVsKSYmY3VyU3R5bGVzLnB1c2goZWwpKTt9ZWxzZSBpZihoYXNTdHlsZXMoY2hpbGQpKXtjdXJTdHlsZXMucHVzaChjaGlsZCk7fX0pO31jb25zdCBmaWxlcz1nZXREb2N1bWVudEZpbGVzKHRoaXMuY29udGV4dC5idWlsZE1hbmlmZXN0LHRoaXMuY29udGV4dC5fX05FWFRfREFUQV9fLnBhZ2UsaW5BbXBNb2RlKTtyZXR1cm4vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImhlYWRcIix0aGlzLnByb3BzLHRoaXMuY29udGV4dC5pc0RldmVsb3BtZW50JiYvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChfcmVhY3QuZGVmYXVsdC5GcmFnbWVudCxudWxsLC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIix7XCJkYXRhLW5leHQtaGlkZS1mb3VjXCI6dHJ1ZSxcImRhdGEtYW1wZGV2bW9kZVwiOmluQW1wTW9kZT8ndHJ1ZSc6dW5kZWZpbmVkLGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MOntfX2h0bWw6YGJvZHl7ZGlzcGxheTpub25lfWB9fSksLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJub3NjcmlwdFwiLHtcImRhdGEtbmV4dC1oaWRlLWZvdWNcIjp0cnVlLFwiZGF0YS1hbXBkZXZtb2RlXCI6aW5BbXBNb2RlPyd0cnVlJzp1bmRlZmluZWR9LC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIix7ZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw6e19faHRtbDpgYm9keXtkaXNwbGF5OmJsb2NrfWB9fSkpKSxjaGlsZHJlbixoZWFkLC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibWV0YVwiLHtuYW1lOlwibmV4dC1oZWFkLWNvdW50XCIsY29udGVudDpfcmVhY3QuZGVmYXVsdC5DaGlsZHJlbi5jb3VudChoZWFkfHxbXSkudG9TdHJpbmcoKX0pLGluQW1wTW9kZSYmLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX3JlYWN0LmRlZmF1bHQuRnJhZ21lbnQsbnVsbCwvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcIm1ldGFcIix7bmFtZTpcInZpZXdwb3J0XCIsY29udGVudDpcIndpZHRoPWRldmljZS13aWR0aCxtaW5pbXVtLXNjYWxlPTEsaW5pdGlhbC1zY2FsZT0xXCJ9KSwhaGFzQ2Fub25pY2FsUmVsJiYvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImxpbmtcIix7cmVsOlwiY2Fub25pY2FsXCIsaHJlZjpjYW5vbmljYWxCYXNlKygwLF91dGlsczIuY2xlYW5BbXBQYXRoKShkYW5nZXJvdXNBc1BhdGgpfSksLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIse3JlbDpcInByZWxvYWRcIixhczpcInNjcmlwdFwiLGhyZWY6XCJodHRwczovL2Nkbi5hbXBwcm9qZWN0Lm9yZy92MC5qc1wifSksc3R5bGVzJiYvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIse1wiYW1wLWN1c3RvbVwiOlwiXCIsZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw6e19faHRtbDpjdXJTdHlsZXMubWFwKHN0eWxlPT5zdHlsZS5wcm9wcy5kYW5nZXJvdXNseVNldElubmVySFRNTC5fX2h0bWwpLmpvaW4oJycpLnJlcGxhY2UoL1xcL1xcKiMgc291cmNlTWFwcGluZ1VSTD0uKlxcKlxcLy9nLCcnKS5yZXBsYWNlKC9cXC9cXCpAIHNvdXJjZVVSTD0uKj9cXCpcXC8vZywnJyl9fSksLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiLHtcImFtcC1ib2lsZXJwbGF0ZVwiOlwiXCIsZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw6e19faHRtbDpgYm9keXstd2Via2l0LWFuaW1hdGlvbjotYW1wLXN0YXJ0IDhzIHN0ZXBzKDEsZW5kKSAwcyAxIG5vcm1hbCBib3RoOy1tb3otYW5pbWF0aW9uOi1hbXAtc3RhcnQgOHMgc3RlcHMoMSxlbmQpIDBzIDEgbm9ybWFsIGJvdGg7LW1zLWFuaW1hdGlvbjotYW1wLXN0YXJ0IDhzIHN0ZXBzKDEsZW5kKSAwcyAxIG5vcm1hbCBib3RoO2FuaW1hdGlvbjotYW1wLXN0YXJ0IDhzIHN0ZXBzKDEsZW5kKSAwcyAxIG5vcm1hbCBib3RofUAtd2Via2l0LWtleWZyYW1lcyAtYW1wLXN0YXJ0e2Zyb217dmlzaWJpbGl0eTpoaWRkZW59dG97dmlzaWJpbGl0eTp2aXNpYmxlfX1ALW1vei1rZXlmcmFtZXMgLWFtcC1zdGFydHtmcm9te3Zpc2liaWxpdHk6aGlkZGVufXRve3Zpc2liaWxpdHk6dmlzaWJsZX19QC1tcy1rZXlmcmFtZXMgLWFtcC1zdGFydHtmcm9te3Zpc2liaWxpdHk6aGlkZGVufXRve3Zpc2liaWxpdHk6dmlzaWJsZX19QC1vLWtleWZyYW1lcyAtYW1wLXN0YXJ0e2Zyb217dmlzaWJpbGl0eTpoaWRkZW59dG97dmlzaWJpbGl0eTp2aXNpYmxlfX1Aa2V5ZnJhbWVzIC1hbXAtc3RhcnR7ZnJvbXt2aXNpYmlsaXR5OmhpZGRlbn10b3t2aXNpYmlsaXR5OnZpc2libGV9fWB9fSksLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJub3NjcmlwdFwiLG51bGwsLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiLHtcImFtcC1ib2lsZXJwbGF0ZVwiOlwiXCIsZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw6e19faHRtbDpgYm9keXstd2Via2l0LWFuaW1hdGlvbjpub25lOy1tb3otYW5pbWF0aW9uOm5vbmU7LW1zLWFuaW1hdGlvbjpub25lO2FuaW1hdGlvbjpub25lfWB9fSkpLC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIse2FzeW5jOnRydWUsc3JjOlwiaHR0cHM6Ly9jZG4uYW1wcHJvamVjdC5vcmcvdjAuanNcIn0pKSwhaW5BbXBNb2RlJiYvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChfcmVhY3QuZGVmYXVsdC5GcmFnbWVudCxudWxsLCFoYXNBbXBodG1sUmVsJiZoeWJyaWRBbXAmJi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibGlua1wiLHtyZWw6XCJhbXBodG1sXCIsaHJlZjpjYW5vbmljYWxCYXNlK2dldEFtcFBhdGgoYW1wUGF0aCxkYW5nZXJvdXNBc1BhdGgpfSksIXByb2Nlc3MuZW52Ll9fTkVYVF9PUFRJTUlaRV9DU1MmJnRoaXMuZ2V0Q3NzTGlua3MoZmlsZXMpLCFwcm9jZXNzLmVudi5fX05FWFRfT1BUSU1JWkVfQ1NTJiYvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcIm5vc2NyaXB0XCIse1wiZGF0YS1uLWNzc1wiOihfdGhpcyRwcm9wcyRub25jZT10aGlzLnByb3BzLm5vbmNlKSE9bnVsbD9fdGhpcyRwcm9wcyRub25jZTonJ30pLCFkaXNhYmxlUnVudGltZUpTJiYhZGlzYWJsZUpzUHJlbG9hZCYmdGhpcy5nZXRQcmVsb2FkRHluYW1pY0NodW5rcygpLCFkaXNhYmxlUnVudGltZUpTJiYhZGlzYWJsZUpzUHJlbG9hZCYmdGhpcy5nZXRQcmVsb2FkTWFpbkxpbmtzKGZpbGVzKSxwcm9jZXNzLmVudi5fX05FWFRfT1BUSU1JWkVfQ1NTJiZ0aGlzLmdldENzc0xpbmtzKGZpbGVzKSxwcm9jZXNzLmVudi5fX05FWFRfT1BUSU1JWkVfQ1NTJiYvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcIm5vc2NyaXB0XCIse1wiZGF0YS1uLWNzc1wiOihfdGhpcyRwcm9wcyRub25jZTI9dGhpcy5wcm9wcy5ub25jZSkhPW51bGw/X3RoaXMkcHJvcHMkbm9uY2UyOicnfSksdGhpcy5jb250ZXh0LmlzRGV2ZWxvcG1lbnQmJi8qI19fUFVSRV9fKi8gLy8gdGhpcyBlbGVtZW50IGlzIHVzZWQgdG8gbW91bnQgZGV2ZWxvcG1lbnQgc3R5bGVzIHNvIHRoZVxuLy8gb3JkZXJpbmcgbWF0Y2hlcyBwcm9kdWN0aW9uXG4vLyAoYnkgZGVmYXVsdCwgc3R5bGUtbG9hZGVyIGluamVjdHMgYXQgdGhlIGJvdHRvbSBvZiA8aGVhZCAvPilcbl9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJub3NjcmlwdFwiLHtpZDpcIl9fbmV4dF9jc3NfX0RPX05PVF9VU0VfX1wifSksc3R5bGVzfHxudWxsKSwvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChfcmVhY3QuZGVmYXVsdC5GcmFnbWVudCx7fSwuLi4oaGVhZFRhZ3N8fFtdKSkpO319ZXhwb3J0cy5IZWFkPUhlYWQ7SGVhZC5jb250ZXh0VHlwZT1fZG9jdW1lbnRDb250ZXh0LkRvY3VtZW50Q29udGV4dDtIZWFkLnByb3BUeXBlcz17bm9uY2U6X3Byb3BUeXBlcy5kZWZhdWx0LnN0cmluZyxjcm9zc09yaWdpbjpfcHJvcFR5cGVzLmRlZmF1bHQuc3RyaW5nfTtmdW5jdGlvbiBNYWluKCl7Y29uc3R7aW5BbXBNb2RlLGh0bWwsZG9jQ29tcG9uZW50c1JlbmRlcmVkfT0oMCxfcmVhY3QudXNlQ29udGV4dCkoX2RvY3VtZW50Q29udGV4dC5Eb2N1bWVudENvbnRleHQpO2RvY0NvbXBvbmVudHNSZW5kZXJlZC5NYWluPXRydWU7aWYoaW5BbXBNb2RlKXJldHVybi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9yZWFjdC5kZWZhdWx0LkZyYWdtZW50LG51bGwsX2NvbnN0YW50cy5BTVBfUkVOREVSX1RBUkdFVCk7cmV0dXJuLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIix7aWQ6XCJfX25leHRcIixkYW5nZXJvdXNseVNldElubmVySFRNTDp7X19odG1sOmh0bWx9fSk7fWNsYXNzIE5leHRTY3JpcHQgZXh0ZW5kcyBfcmVhY3QuQ29tcG9uZW50e2NvbnN0cnVjdG9yKC4uLmFyZ3Mpe3N1cGVyKC4uLmFyZ3MpO3RoaXMuY29udGV4dD12b2lkIDA7fWdldER5bmFtaWNDaHVua3MoZmlsZXMpe2NvbnN0e2R5bmFtaWNJbXBvcnRzLGFzc2V0UHJlZml4LGlzRGV2ZWxvcG1lbnQsZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmd9PXRoaXMuY29udGV4dDtyZXR1cm4gZGVkdXBlKGR5bmFtaWNJbXBvcnRzKS5tYXAoYnVuZGxlPT57aWYoIWJ1bmRsZS5maWxlLmVuZHNXaXRoKCcuanMnKXx8ZmlsZXMuYWxsRmlsZXMuaW5jbHVkZXMoYnVuZGxlLmZpbGUpKXJldHVybiBudWxsO3JldHVybi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIse2FzeW5jOiFpc0RldmVsb3BtZW50LGtleTpidW5kbGUuZmlsZSxzcmM6YCR7YXNzZXRQcmVmaXh9L19uZXh0LyR7ZW5jb2RlVVJJKGJ1bmRsZS5maWxlKX0ke2Rldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nfWAsbm9uY2U6dGhpcy5wcm9wcy5ub25jZSxjcm9zc09yaWdpbjp0aGlzLnByb3BzLmNyb3NzT3JpZ2lufHxwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOfSk7fSk7fWdldFByZU5leHRTY3JpcHRzKCl7Y29uc3R7c2NyaXB0TG9hZGVyfT10aGlzLmNvbnRleHQ7cmV0dXJuKHNjcmlwdExvYWRlci5lYWdlcnx8W10pLm1hcChmaWxlPT57Y29uc3R7c3RyYXRlZ3ksLi4ucHJvcHN9PWZpbGU7cmV0dXJuLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIixPYmplY3QuYXNzaWduKHt9LHByb3BzLHtub25jZTp0aGlzLnByb3BzLm5vbmNlLGNyb3NzT3JpZ2luOnRoaXMucHJvcHMuY3Jvc3NPcmlnaW58fHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU59KSk7fSk7fWdldFNjcmlwdHMoZmlsZXMpe3ZhciBfYnVpbGRNYW5pZmVzdCRsb3dQcmk7Y29uc3R7YXNzZXRQcmVmaXgsYnVpbGRNYW5pZmVzdCxpc0RldmVsb3BtZW50LGRldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nfT10aGlzLmNvbnRleHQ7Y29uc3Qgbm9ybWFsU2NyaXB0cz1maWxlcy5hbGxGaWxlcy5maWx0ZXIoZmlsZT0+ZmlsZS5lbmRzV2l0aCgnLmpzJykpO2NvbnN0IGxvd1ByaW9yaXR5U2NyaXB0cz0oX2J1aWxkTWFuaWZlc3QkbG93UHJpPWJ1aWxkTWFuaWZlc3QubG93UHJpb3JpdHlGaWxlcyk9PW51bGw/dm9pZCAwOl9idWlsZE1hbmlmZXN0JGxvd1ByaS5maWx0ZXIoZmlsZT0+ZmlsZS5lbmRzV2l0aCgnLmpzJykpO3JldHVyblsuLi5ub3JtYWxTY3JpcHRzLC4uLmxvd1ByaW9yaXR5U2NyaXB0c10ubWFwKGZpbGU9PntyZXR1cm4vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiLHtrZXk6ZmlsZSxzcmM6YCR7YXNzZXRQcmVmaXh9L19uZXh0LyR7ZW5jb2RlVVJJKGZpbGUpfSR7ZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmd9YCxub25jZTp0aGlzLnByb3BzLm5vbmNlLGFzeW5jOiFpc0RldmVsb3BtZW50LGNyb3NzT3JpZ2luOnRoaXMucHJvcHMuY3Jvc3NPcmlnaW58fHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU59KTt9KTt9Z2V0UG9seWZpbGxTY3JpcHRzKCl7Ly8gcG9seWZpbGxzLmpzIGhhcyB0byBiZSByZW5kZXJlZCBhcyBub21vZHVsZSB3aXRob3V0IGFzeW5jXG4vLyBJdCBhbHNvIGhhcyB0byBiZSB0aGUgZmlyc3Qgc2NyaXB0IHRvIGxvYWRcbmNvbnN0e2Fzc2V0UHJlZml4LGJ1aWxkTWFuaWZlc3QsZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmd9PXRoaXMuY29udGV4dDtyZXR1cm4gYnVpbGRNYW5pZmVzdC5wb2x5ZmlsbEZpbGVzLmZpbHRlcihwb2x5ZmlsbD0+cG9seWZpbGwuZW5kc1dpdGgoJy5qcycpJiYhcG9seWZpbGwuZW5kc1dpdGgoJy5tb2R1bGUuanMnKSkubWFwKHBvbHlmaWxsPT4vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiLHtrZXk6cG9seWZpbGwsbm9uY2U6dGhpcy5wcm9wcy5ub25jZSxjcm9zc09yaWdpbjp0aGlzLnByb3BzLmNyb3NzT3JpZ2lufHxwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOLG5vTW9kdWxlOnRydWUsc3JjOmAke2Fzc2V0UHJlZml4fS9fbmV4dC8ke3BvbHlmaWxsfSR7ZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmd9YH0pKTt9c3RhdGljIGdldElubGluZVNjcmlwdFNvdXJjZShkb2N1bWVudFByb3BzKXtjb25zdHtfX05FWFRfREFUQV9ffT1kb2N1bWVudFByb3BzO3RyeXtjb25zdCBkYXRhPUpTT04uc3RyaW5naWZ5KF9fTkVYVF9EQVRBX18pO3JldHVybigwLF9odG1sZXNjYXBlLmh0bWxFc2NhcGVKc29uU3RyaW5nKShkYXRhKTt9Y2F0Y2goZXJyKXtpZihlcnIubWVzc2FnZS5pbmRleE9mKCdjaXJjdWxhciBzdHJ1Y3R1cmUnKSl7dGhyb3cgbmV3IEVycm9yKGBDaXJjdWxhciBzdHJ1Y3R1cmUgaW4gXCJnZXRJbml0aWFsUHJvcHNcIiByZXN1bHQgb2YgcGFnZSBcIiR7X19ORVhUX0RBVEFfXy5wYWdlfVwiLiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9jaXJjdWxhci1zdHJ1Y3R1cmVgKTt9dGhyb3cgZXJyO319cmVuZGVyKCl7Y29uc3R7YXNzZXRQcmVmaXgsaW5BbXBNb2RlLGJ1aWxkTWFuaWZlc3QsdW5zdGFibGVfcnVudGltZUpTLGRvY0NvbXBvbmVudHNSZW5kZXJlZCxkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZ309dGhpcy5jb250ZXh0O2NvbnN0IGRpc2FibGVSdW50aW1lSlM9dW5zdGFibGVfcnVudGltZUpTPT09ZmFsc2U7ZG9jQ29tcG9uZW50c1JlbmRlcmVkLk5leHRTY3JpcHQ9dHJ1ZTtpZihpbkFtcE1vZGUpe2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WPT09J3Byb2R1Y3Rpb24nKXtyZXR1cm4gbnVsbDt9Y29uc3QgYW1wRGV2RmlsZXM9Wy4uLmJ1aWxkTWFuaWZlc3QuZGV2RmlsZXMsLi4uYnVpbGRNYW5pZmVzdC5wb2x5ZmlsbEZpbGVzLC4uLmJ1aWxkTWFuaWZlc3QuYW1wRGV2RmlsZXNdO3JldHVybi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9yZWFjdC5kZWZhdWx0LkZyYWdtZW50LG51bGwsZGlzYWJsZVJ1bnRpbWVKUz9udWxsOi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIse2lkOlwiX19ORVhUX0RBVEFfX1wiLHR5cGU6XCJhcHBsaWNhdGlvbi9qc29uXCIsbm9uY2U6dGhpcy5wcm9wcy5ub25jZSxjcm9zc09yaWdpbjp0aGlzLnByb3BzLmNyb3NzT3JpZ2lufHxwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOLGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MOntfX2h0bWw6TmV4dFNjcmlwdC5nZXRJbmxpbmVTY3JpcHRTb3VyY2UodGhpcy5jb250ZXh0KX0sXCJkYXRhLWFtcGRldm1vZGVcIjp0cnVlfSksYW1wRGV2RmlsZXMubWFwKGZpbGU9Pi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIse2tleTpmaWxlLHNyYzpgJHthc3NldFByZWZpeH0vX25leHQvJHtmaWxlfSR7ZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmd9YCxub25jZTp0aGlzLnByb3BzLm5vbmNlLGNyb3NzT3JpZ2luOnRoaXMucHJvcHMuY3Jvc3NPcmlnaW58fHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU4sXCJkYXRhLWFtcGRldm1vZGVcIjp0cnVlfSkpKTt9aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe2lmKHRoaXMucHJvcHMuY3Jvc3NPcmlnaW4pY29uc29sZS53YXJuKCdXYXJuaW5nOiBgTmV4dFNjcmlwdGAgYXR0cmlidXRlIGBjcm9zc09yaWdpbmAgaXMgZGVwcmVjYXRlZC4gaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvZG9jLWNyb3Nzb3JpZ2luLWRlcHJlY2F0ZWQnKTt9Y29uc3QgZmlsZXM9Z2V0RG9jdW1lbnRGaWxlcyh0aGlzLmNvbnRleHQuYnVpbGRNYW5pZmVzdCx0aGlzLmNvbnRleHQuX19ORVhUX0RBVEFfXy5wYWdlLGluQW1wTW9kZSk7cmV0dXJuLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX3JlYWN0LmRlZmF1bHQuRnJhZ21lbnQsbnVsbCwhZGlzYWJsZVJ1bnRpbWVKUyYmYnVpbGRNYW5pZmVzdC5kZXZGaWxlcz9idWlsZE1hbmlmZXN0LmRldkZpbGVzLm1hcChmaWxlPT4vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiLHtrZXk6ZmlsZSxzcmM6YCR7YXNzZXRQcmVmaXh9L19uZXh0LyR7ZW5jb2RlVVJJKGZpbGUpfSR7ZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmd9YCxub25jZTp0aGlzLnByb3BzLm5vbmNlLGNyb3NzT3JpZ2luOnRoaXMucHJvcHMuY3Jvc3NPcmlnaW58fHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU59KSk6bnVsbCxkaXNhYmxlUnVudGltZUpTP251bGw6LyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIix7aWQ6XCJfX05FWFRfREFUQV9fXCIsdHlwZTpcImFwcGxpY2F0aW9uL2pzb25cIixub25jZTp0aGlzLnByb3BzLm5vbmNlLGNyb3NzT3JpZ2luOnRoaXMucHJvcHMuY3Jvc3NPcmlnaW58fHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU4sZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw6e19faHRtbDpOZXh0U2NyaXB0LmdldElubGluZVNjcmlwdFNvdXJjZSh0aGlzLmNvbnRleHQpfX0pLCFkaXNhYmxlUnVudGltZUpTJiZ0aGlzLmdldFBvbHlmaWxsU2NyaXB0cygpLCFkaXNhYmxlUnVudGltZUpTJiZ0aGlzLmdldFByZU5leHRTY3JpcHRzKCksZGlzYWJsZVJ1bnRpbWVKUz9udWxsOnRoaXMuZ2V0RHluYW1pY0NodW5rcyhmaWxlcyksZGlzYWJsZVJ1bnRpbWVKUz9udWxsOnRoaXMuZ2V0U2NyaXB0cyhmaWxlcykpO319ZXhwb3J0cy5OZXh0U2NyaXB0PU5leHRTY3JpcHQ7TmV4dFNjcmlwdC5jb250ZXh0VHlwZT1fZG9jdW1lbnRDb250ZXh0LkRvY3VtZW50Q29udGV4dDtOZXh0U2NyaXB0LnByb3BUeXBlcz17bm9uY2U6X3Byb3BUeXBlcy5kZWZhdWx0LnN0cmluZyxjcm9zc09yaWdpbjpfcHJvcFR5cGVzLmRlZmF1bHQuc3RyaW5nfTtOZXh0U2NyaXB0LnNhZmFyaU5vbW9kdWxlRml4PSchZnVuY3Rpb24oKXt2YXIgZT1kb2N1bWVudCx0PWUuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtpZighKFwibm9Nb2R1bGVcImluIHQpJiZcIm9uYmVmb3JlbG9hZFwiaW4gdCl7dmFyIG49ITE7ZS5hZGRFdmVudExpc3RlbmVyKFwiYmVmb3JlbG9hZFwiLGZ1bmN0aW9uKGUpe2lmKGUudGFyZ2V0PT09dCluPSEwO2Vsc2UgaWYoIWUudGFyZ2V0Lmhhc0F0dHJpYnV0ZShcIm5vbW9kdWxlXCIpfHwhbilyZXR1cm47ZS5wcmV2ZW50RGVmYXVsdCgpfSwhMCksdC50eXBlPVwibW9kdWxlXCIsdC5zcmM9XCIuXCIsZS5oZWFkLmFwcGVuZENoaWxkKHQpLHQucmVtb3ZlKCl9fSgpOyc7ZnVuY3Rpb24gZ2V0QW1wUGF0aChhbXBQYXRoLGFzUGF0aCl7cmV0dXJuIGFtcFBhdGh8fGAke2FzUGF0aH0ke2FzUGF0aC5pbmNsdWRlcygnPycpPycmJzonPyd9YW1wPTFgO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPV9kb2N1bWVudC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmh0bWxFc2NhcGVKc29uU3RyaW5nPWh0bWxFc2NhcGVKc29uU3RyaW5nOy8vIFRoaXMgdXRpbGl0eSBpcyBiYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20vemVydG9zaC9odG1sZXNjYXBlXG4vLyBMaWNlbnNlOiBodHRwczovL2dpdGh1Yi5jb20vemVydG9zaC9odG1sZXNjYXBlL2Jsb2IvMDUyN2NhNzE1NmE1MjRkMjU2MTAxYmIzMTBhOWY5NzBmNjMwNzhhZC9MSUNFTlNFXG5jb25zdCBFU0NBUEVfTE9PS1VQPXsnJic6J1xcXFx1MDAyNicsJz4nOidcXFxcdTAwM2UnLCc8JzonXFxcXHUwMDNjJywnXFx1MjAyOCc6J1xcXFx1MjAyOCcsJ1xcdTIwMjknOidcXFxcdTIwMjknfTtjb25zdCBFU0NBUEVfUkVHRVg9L1smPjxcXHUyMDI4XFx1MjAyOV0vZztmdW5jdGlvbiBodG1sRXNjYXBlSnNvblN0cmluZyhzdHIpe3JldHVybiBzdHIucmVwbGFjZShFU0NBUEVfUkVHRVgsbWF0Y2g9PkVTQ0FQRV9MT09LVVBbbWF0Y2hdKTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1odG1sZXNjYXBlLmpzLm1hcCIsImZ1bmN0aW9uIF9leHRlbmRzKCkge1xuICBtb2R1bGUuZXhwb3J0cyA9IF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfTtcblxuICByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZXh0ZW5kczsiLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG5mdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gIGlmICh0eXBlb2YgV2Vha01hcCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbnVsbDtcbiAgdmFyIGNhY2hlID0gbmV3IFdlYWtNYXAoKTtcblxuICBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUgPSBmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gICAgcmV0dXJuIGNhY2hlO1xuICB9O1xuXG4gIHJldHVybiBjYWNoZTtcbn1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7XG4gIGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHtcbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCBfdHlwZW9mKG9iaikgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iaiAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgICB9O1xuICB9XG5cbiAgdmFyIGNhY2hlID0gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7XG5cbiAgaWYgKGNhY2hlICYmIGNhY2hlLmhhcyhvYmopKSB7XG4gICAgcmV0dXJuIGNhY2hlLmdldChvYmopO1xuICB9XG5cbiAgdmFyIG5ld09iaiA9IHt9O1xuICB2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICB2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDtcblxuICAgICAgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3T2JqW2tleV0gPSBvYmpba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqO1xuXG4gIGlmIChjYWNoZSkge1xuICAgIGNhY2hlLnNldChvYmosIG5ld09iaik7XG4gIH1cblxuICByZXR1cm4gbmV3T2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkOyIsImZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpIHtcbiAgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307XG4gIHZhciB0YXJnZXQgPSB7fTtcbiAgdmFyIHNvdXJjZUtleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpO1xuICB2YXIga2V5LCBpO1xuXG4gIGZvciAoaSA9IDA7IGkgPCBzb3VyY2VLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAga2V5ID0gc291cmNlS2V5c1tpXTtcbiAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlO1xuICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1qc3gvc2VydmVyXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=