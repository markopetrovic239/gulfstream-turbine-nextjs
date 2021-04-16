module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"pages/index": 0
/******/ 	};
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("../" + ({}[chunkId]||chunkId) + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/index.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");
exports.__esModule = true;
exports.default = void 0;
var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));
var _router = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");
var _router2 = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");
var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");
const prefetched = {};
function prefetch(router, href, as, options) {
  if (typeof window === "undefined" || !router)
    return;
  if (!(0, _router.isLocalURL)(href))
    return;
  router.prefetch(href, as, options).catch((err) => {
    if (true) {
      throw err;
    }
  });
  const curLocale = options && typeof options.locale !== "undefined" ? options.locale : router && router.locale;
  prefetched[href + "%" + as + (curLocale ? "%" + curLocale : "")] = true;
}
function isModifiedEvent(event) {
  const {target} = event.currentTarget;
  return target && target !== "_self" || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.nativeEvent && event.nativeEvent.which === 2;
}
function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  const {nodeName} = e.currentTarget;
  if (nodeName === "A" && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    return;
  }
  e.preventDefault();
  if (scroll == null) {
    scroll = as.indexOf("#") < 0;
  }
  router[replace ? "replace" : "push"](href, as, {shallow, locale, scroll});
}
function Link(props) {
  if (true) {
    let createPropError = function(args) {
      return new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + (typeof window !== "undefined" ? "\nOpen your browser's console to view the Component stack trace." : ""));
    };
    const requiredPropsGuard = {href: true};
    const requiredProps = Object.keys(requiredPropsGuard);
    requiredProps.forEach((key) => {
      if (key === "href") {
        if (props[key] == null || typeof props[key] !== "string" && typeof props[key] !== "object") {
          throw createPropError({key, expected: "`string` or `object`", actual: props[key] === null ? "null" : typeof props[key]});
        }
      } else {
        const _ = key;
      }
    });
    const optionalPropsGuard = {as: true, replace: true, scroll: true, shallow: true, passHref: true, prefetch: true, locale: true};
    const optionalProps = Object.keys(optionalPropsGuard);
    optionalProps.forEach((key) => {
      const valType = typeof props[key];
      if (key === "as") {
        if (props[key] && valType !== "string" && valType !== "object") {
          throw createPropError({key, expected: "`string` or `object`", actual: valType});
        }
      } else if (key === "locale") {
        if (props[key] && valType !== "string") {
          throw createPropError({key, expected: "`string`", actual: valType});
        }
      } else if (key === "replace" || key === "scroll" || key === "shallow" || key === "passHref" || key === "prefetch") {
        if (props[key] != null && valType !== "boolean") {
          throw createPropError({key, expected: "`boolean`", actual: valType});
        }
      } else {
        const _ = key;
      }
    });
    const hasWarned = _react.default.useRef(false);
    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn("Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://nextjs.org/docs/messages/prefetch-true-deprecated");
    }
  }
  const p = props.prefetch !== false;
  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || "/";
  const {href, as} = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(pathname, props.href, true);
    return {href: resolvedHref, as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref};
  }, [pathname, props.href, props.as]);
  let {children, replace, shallow, scroll, locale} = props;
  if (typeof children === "string") {
    children = /* @__PURE__ */ _react.default.createElement("a", null, children);
  }
  const child = _react.Children.only(children);
  const childRef = child && typeof child === "object" && child.ref;
  const [setIntersectionRef, isVisible] = (0, _useIntersection.useIntersection)({rootMargin: "200px"});
  const setRef = _react.default.useCallback((el) => {
    setIntersectionRef(el);
    if (childRef) {
      if (typeof childRef === "function")
        childRef(el);
      else if (typeof childRef === "object") {
        childRef.current = el;
      }
    }
  }, [childRef, setIntersectionRef]);
  (0, _react.useEffect)(() => {
    const shouldPrefetch = isVisible && p && (0, _router.isLocalURL)(href);
    const curLocale = typeof locale !== "undefined" ? locale : router && router.locale;
    const isPrefetched = prefetched[href + "%" + as + (curLocale ? "%" + curLocale : "")];
    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {locale: curLocale});
    }
  }, [as, href, isVisible, locale, p, router]);
  const childProps = {ref: setRef, onClick: (e) => {
    if (child.props && typeof child.props.onClick === "function") {
      child.props.onClick(e);
    }
    if (!e.defaultPrevented) {
      linkClicked(e, router, href, as, replace, shallow, scroll, locale);
    }
  }};
  childProps.onMouseEnter = (e) => {
    if (!(0, _router.isLocalURL)(href))
      return;
    if (child.props && typeof child.props.onMouseEnter === "function") {
      child.props.onMouseEnter(e);
    }
    prefetch(router, href, as, {priority: true});
  };
  if (props.passHref || child.type === "a" && !("href" in child.props)) {
    const curLocale = typeof locale !== "undefined" ? locale : router && router.locale;
    const localeDomain = router && router.isLocaleDomain && (0, _router.getDomainLocale)(as, curLocale, router && router.locales, router && router.domainLocales);
    childProps.href = localeDomain || (0, _router.addBasePath)((0, _router.addLocale)(as, curLocale, router && router.defaultLocale));
  }
  return /* @__PURE__ */ _react.default.cloneElement(child, childProps);
}
var _default = Link;
exports.default = _default;


/***/ }),

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
function removePathTrailingSlash(path) {
  return path.endsWith("/") && path !== "/" ? path.slice(0, -1) : path;
}
const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;


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

/***/ "./node_modules/next/dist/client/route-loader.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/client/route-loader.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");
exports.__esModule = true;
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.default = void 0;
var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__(/*! ../next-server/lib/router/utils/get-asset-path-from-route */ "../next-server/lib/router/utils/get-asset-path-from-route"));
var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js");
const MS_MAX_IDLE_DELAY = 3800;
function withFuture(key, map, generator) {
  let entry = map.get(key);
  if (entry) {
    if ("future" in entry) {
      return entry.future;
    }
    return Promise.resolve(entry);
  }
  let resolver;
  const prom = new Promise((resolve) => {
    resolver = resolve;
  });
  map.set(key, entry = {resolve: resolver, future: prom});
  return generator ? generator().then((value) => (resolver(value), value)) : prom;
}
function hasPrefetch(link) {
  try {
    link = document.createElement("link");
    return !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports("prefetch");
  } catch (_unused) {
    return false;
  }
}
const canPrefetch = hasPrefetch();
function prefetchViaDom(href, as, link) {
  return new Promise((res, rej) => {
    if (document.querySelector(`link[rel="prefetch"][href^="${href}"]`)) {
      return res();
    }
    link = document.createElement("link");
    if (as)
      link.as = as;
    link.rel = `prefetch`;
    link.crossOrigin = undefined;
    link.onload = res;
    link.onerror = rej;
    link.href = href;
    document.head.appendChild(link);
  });
}
const ASSET_LOAD_ERROR = Symbol("ASSET_LOAD_ERROR");
function markAssetError(err) {
  return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}
function isAssetError(err) {
  return err && ASSET_LOAD_ERROR in err;
}
function appendScript(src, script) {
  return new Promise((resolve, reject) => {
    script = document.createElement("script");
    script.onload = resolve;
    script.onerror = () => reject(markAssetError(new Error(`Failed to load script: ${src}`)));
    script.crossOrigin = undefined;
    script.src = src;
    document.body.appendChild(script);
  });
}
function resolvePromiseWithTimeout(p, ms, err) {
  return new Promise((resolve, reject) => {
    let cancelled = false;
    p.then((r) => {
      cancelled = true;
      resolve(r);
    }).catch(reject);
    (0, _requestIdleCallback.requestIdleCallback)(() => setTimeout(() => {
      if (!cancelled) {
        reject(err);
      }
    }, ms));
  });
}
function getClientBuildManifest() {
  if (self.__BUILD_MANIFEST) {
    return Promise.resolve(self.__BUILD_MANIFEST);
  }
  const onBuildManifest = new Promise((resolve) => {
    const cb = self.__BUILD_MANIFEST_CB;
    self.__BUILD_MANIFEST_CB = () => {
      resolve(self.__BUILD_MANIFEST);
      cb && cb();
    };
  });
  return resolvePromiseWithTimeout(onBuildManifest, MS_MAX_IDLE_DELAY, markAssetError(new Error("Failed to load client build manifest")));
}
function getFilesForRoute(assetPrefix, route) {
  if (true) {
    return Promise.resolve({
      scripts: [assetPrefix + "/_next/static/chunks/pages" + encodeURI((0, _getAssetPathFromRoute.default)(route, ".js"))],
      css: []
    });
  }
  return getClientBuildManifest().then((manifest) => {
    if (!(route in manifest)) {
      throw markAssetError(new Error(`Failed to lookup route: ${route}`));
    }
    const allFiles = manifest[route].map((entry) => assetPrefix + "/_next/" + encodeURI(entry));
    return {scripts: allFiles.filter((v) => v.endsWith(".js")), css: allFiles.filter((v) => v.endsWith(".css"))};
  });
}
function createRouteLoader(assetPrefix) {
  const entrypoints = new Map();
  const loadedScripts = new Map();
  const styleSheets = new Map();
  const routes = new Map();
  function maybeExecuteScript(src) {
    let prom = loadedScripts.get(src);
    if (prom) {
      return prom;
    }
    if (document.querySelector(`script[src^="${src}"]`)) {
      return Promise.resolve();
    }
    loadedScripts.set(src, prom = appendScript(src));
    return prom;
  }
  function fetchStyleSheet(href) {
    let prom = styleSheets.get(href);
    if (prom) {
      return prom;
    }
    styleSheets.set(href, prom = fetch(href).then((res) => {
      if (!res.ok) {
        throw new Error(`Failed to load stylesheet: ${href}`);
      }
      return res.text().then((text) => ({href, content: text}));
    }).catch((err) => {
      throw markAssetError(err);
    }));
    return prom;
  }
  return {whenEntrypoint(route) {
    return withFuture(route, entrypoints);
  }, onEntrypoint(route, execute) {
    Promise.resolve(execute).then((fn) => fn()).then((exports2) => ({component: exports2 && exports2.default || exports2, exports: exports2}), (err) => ({error: err})).then((input) => {
      const old = entrypoints.get(route);
      entrypoints.set(route, input);
      if (old && "resolve" in old)
        old.resolve(input);
    });
  }, loadRoute(route) {
    return withFuture(route, routes, async () => {
      try {
        const {scripts, css} = await getFilesForRoute(assetPrefix, route);
        const [, styles] = await Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);
        const entrypoint = await resolvePromiseWithTimeout(this.whenEntrypoint(route), MS_MAX_IDLE_DELAY, markAssetError(new Error(`Route did not complete loading: ${route}`)));
        const res = Object.assign({styles}, entrypoint);
        return "error" in entrypoint ? entrypoint : res;
      } catch (err) {
        return {error: err};
      }
    });
  }, prefetch(route) {
    let cn;
    if (cn = navigator.connection) {
      if (cn.saveData || /2g/.test(cn.effectiveType))
        return Promise.resolve();
    }
    return getFilesForRoute(assetPrefix, route).then((output) => Promise.all(canPrefetch ? output.scripts.map((script) => prefetchViaDom(script, "script")) : [])).then(() => {
      (0, _requestIdleCallback.requestIdleCallback)(() => this.loadRoute(route));
    }).catch(() => {
    });
  }};
}
var _default = createRouteLoader;
exports.default = _default;


/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");
var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");
exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;
var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));
var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));
exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;
var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");
var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));
exports.withRouter = _withRouter.default;
const singletonRouter = {
  router: null,
  readyCallbacks: [],
  ready(cb) {
    if (this.router)
      return cb();
    if (typeof window !== "undefined") {
      this.readyCallbacks.push(cb);
    }
  }
};
const urlPropertyFields = ["pathname", "route", "query", "asPath", "components", "isFallback", "basePath", "locale", "locales", "defaultLocale", "isReady", "isPreview", "isLocaleDomain"];
const routerEvents = ["routeChangeStart", "beforeHistoryChange", "routeChangeComplete", "routeChangeError", "hashChangeStart", "hashChangeComplete"];
const coreMethodFields = ["push", "replace", "reload", "back", "prefetch", "beforePopState"];
Object.defineProperty(singletonRouter, "events", {get() {
  return _router2.default.events;
}});
urlPropertyFields.forEach((field) => {
  Object.defineProperty(singletonRouter, field, {get() {
    const router = getRouter();
    return router[field];
  }});
});
coreMethodFields.forEach((field) => {
  ;
  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach((event) => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;
      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}
${err.stack}`);
        }
      }
    });
  });
});
function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\nYou should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }
  return singletonRouter.router;
}
var _default = singletonRouter;
exports.default = _default;
function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
}
const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach((cb) => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
};
exports.createRouter = createRouter;
function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};
  for (const property of urlPropertyFields) {
    if (typeof _router[property] === "object") {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]);
      continue;
    }
    instance[property] = _router[property];
  }
  instance.events = _router2.default.events;
  coreMethodFields.forEach((field) => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}


/***/ }),

/***/ "./node_modules/next/dist/client/use-intersection.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/client/use-intersection.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
exports.useIntersection = useIntersection;
var _react = __webpack_require__(/*! react */ "react");
var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js");
const hasIntersectionObserver = typeof IntersectionObserver !== "undefined";
function useIntersection({rootMargin, disabled}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react.useRef)();
  const [visible, setVisible] = (0, _react.useState)(false);
  const setRef = (0, _react.useCallback)((el) => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = void 0;
    }
    if (isDisabled || visible)
      return;
    if (el && el.tagName) {
      unobserve.current = observe(el, (isVisible) => isVisible && setVisible(isVisible), {rootMargin});
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react.useEffect)(() => {
    if (!hasIntersectionObserver) {
      if (!visible) {
        const idleCallback = (0, _requestIdleCallback.requestIdleCallback)(() => setVisible(true));
        return () => (0, _requestIdleCallback.cancelIdleCallback)(idleCallback);
      }
    }
  }, [visible]);
  return [setRef, visible];
}
function observe(element, callback, options) {
  const {id, observer, elements} = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element);
    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}
const observers = new Map();
function createObserver(options) {
  const id = options.rootMargin || "";
  let instance = observers.get(id);
  if (instance) {
    return instance;
  }
  const elements = new Map();
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;
      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {id, observer, elements});
  return instance;
}


/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");
exports.__esModule = true;
exports.default = withRouter;
var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));
var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");
function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /* @__PURE__ */ _react.default.createElement(ComposedComponent, Object.assign({router: (0, _router.useRouter)()}, props));
  }
  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;
  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || "Unknown";
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }
  return WithRouterWrapper;
}


/***/ }),

/***/ "./node_modules/next/dist/compiled/path-to-regexp/index.js":
/*!*****************************************!*\
  !*** (webpack)/path-to-regexp/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Tokenize input string.
 */
function lexer(str) {
    var tokens = [];
    var i = 0;
    while (i < str.length) {
        var char = str[i];
        if (char === "*" || char === "+" || char === "?") {
            tokens.push({ type: "MODIFIER", index: i, value: str[i++] });
            continue;
        }
        if (char === "\\") {
            tokens.push({ type: "ESCAPED_CHAR", index: i++, value: str[i++] });
            continue;
        }
        if (char === "{") {
            tokens.push({ type: "OPEN", index: i, value: str[i++] });
            continue;
        }
        if (char === "}") {
            tokens.push({ type: "CLOSE", index: i, value: str[i++] });
            continue;
        }
        if (char === ":") {
            var name = "";
            var j = i + 1;
            while (j < str.length) {
                var code = str.charCodeAt(j);
                if (
                // `0-9`
                (code >= 48 && code <= 57) ||
                    // `A-Z`
                    (code >= 65 && code <= 90) ||
                    // `a-z`
                    (code >= 97 && code <= 122) ||
                    // `_`
                    code === 95) {
                    name += str[j++];
                    continue;
                }
                break;
            }
            if (!name)
                throw new TypeError("Missing parameter name at " + i);
            tokens.push({ type: "NAME", index: i, value: name });
            i = j;
            continue;
        }
        if (char === "(") {
            var count = 1;
            var pattern = "";
            var j = i + 1;
            if (str[j] === "?") {
                throw new TypeError("Pattern cannot start with \"?\" at " + j);
            }
            while (j < str.length) {
                if (str[j] === "\\") {
                    pattern += str[j++] + str[j++];
                    continue;
                }
                if (str[j] === ")") {
                    count--;
                    if (count === 0) {
                        j++;
                        break;
                    }
                }
                else if (str[j] === "(") {
                    count++;
                    if (str[j + 1] !== "?") {
                        throw new TypeError("Capturing groups are not allowed at " + j);
                    }
                }
                pattern += str[j++];
            }
            if (count)
                throw new TypeError("Unbalanced pattern at " + i);
            if (!pattern)
                throw new TypeError("Missing pattern at " + i);
            tokens.push({ type: "PATTERN", index: i, value: pattern });
            i = j;
            continue;
        }
        tokens.push({ type: "CHAR", index: i, value: str[i++] });
    }
    tokens.push({ type: "END", index: i, value: "" });
    return tokens;
}
/**
 * Parse a string for the raw tokens.
 */
function parse(str, options) {
    if (options === void 0) { options = {}; }
    var tokens = lexer(str);
    var _a = options.prefixes, prefixes = _a === void 0 ? "./" : _a;
    var defaultPattern = "[^" + escapeString(options.delimiter || "/#?") + "]+?";
    var result = [];
    var key = 0;
    var i = 0;
    var path = "";
    var tryConsume = function (type) {
        if (i < tokens.length && tokens[i].type === type)
            return tokens[i++].value;
    };
    var mustConsume = function (type) {
        var value = tryConsume(type);
        if (value !== undefined)
            return value;
        var _a = tokens[i], nextType = _a.type, index = _a.index;
        throw new TypeError("Unexpected " + nextType + " at " + index + ", expected " + type);
    };
    var consumeText = function () {
        var result = "";
        var value;
        // tslint:disable-next-line
        while ((value = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR"))) {
            result += value;
        }
        return result;
    };
    while (i < tokens.length) {
        var char = tryConsume("CHAR");
        var name = tryConsume("NAME");
        var pattern = tryConsume("PATTERN");
        if (name || pattern) {
            var prefix = char || "";
            if (prefixes.indexOf(prefix) === -1) {
                path += prefix;
                prefix = "";
            }
            if (path) {
                result.push(path);
                path = "";
            }
            result.push({
                name: name || key++,
                prefix: prefix,
                suffix: "",
                pattern: pattern || defaultPattern,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        var value = char || tryConsume("ESCAPED_CHAR");
        if (value) {
            path += value;
            continue;
        }
        if (path) {
            result.push(path);
            path = "";
        }
        var open = tryConsume("OPEN");
        if (open) {
            var prefix = consumeText();
            var name_1 = tryConsume("NAME") || "";
            var pattern_1 = tryConsume("PATTERN") || "";
            var suffix = consumeText();
            mustConsume("CLOSE");
            result.push({
                name: name_1 || (pattern_1 ? key++ : ""),
                pattern: name_1 && !pattern_1 ? defaultPattern : pattern_1,
                prefix: prefix,
                suffix: suffix,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        mustConsume("END");
    }
    return result;
}
exports.parse = parse;
/**
 * Compile a string to a template function for the path.
 */
function compile(str, options) {
    return tokensToFunction(parse(str, options), options);
}
exports.compile = compile;
/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction(tokens, options) {
    if (options === void 0) { options = {}; }
    var reFlags = flags(options);
    var _a = options.encode, encode = _a === void 0 ? function (x) { return x; } : _a, _b = options.validate, validate = _b === void 0 ? true : _b;
    // Compile all the tokens into regexps.
    var matches = tokens.map(function (token) {
        if (typeof token === "object") {
            return new RegExp("^(?:" + token.pattern + ")$", reFlags);
        }
    });
    return function (data) {
        var path = "";
        for (var i = 0; i < tokens.length; i++) {
            var token = tokens[i];
            if (typeof token === "string") {
                path += token;
                continue;
            }
            var value = data ? data[token.name] : undefined;
            var optional = token.modifier === "?" || token.modifier === "*";
            var repeat = token.modifier === "*" || token.modifier === "+";
            if (Array.isArray(value)) {
                if (!repeat) {
                    throw new TypeError("Expected \"" + token.name + "\" to not repeat, but got an array");
                }
                if (value.length === 0) {
                    if (optional)
                        continue;
                    throw new TypeError("Expected \"" + token.name + "\" to not be empty");
                }
                for (var j = 0; j < value.length; j++) {
                    var segment = encode(value[j], token);
                    if (validate && !matches[i].test(segment)) {
                        throw new TypeError("Expected all \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                    }
                    path += token.prefix + segment + token.suffix;
                }
                continue;
            }
            if (typeof value === "string" || typeof value === "number") {
                var segment = encode(String(value), token);
                if (validate && !matches[i].test(segment)) {
                    throw new TypeError("Expected \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                }
                path += token.prefix + segment + token.suffix;
                continue;
            }
            if (optional)
                continue;
            var typeOfMessage = repeat ? "an array" : "a string";
            throw new TypeError("Expected \"" + token.name + "\" to be " + typeOfMessage);
        }
        return path;
    };
}
exports.tokensToFunction = tokensToFunction;
/**
 * Create path match function from `path-to-regexp` spec.
 */
function match(str, options) {
    var keys = [];
    var re = pathToRegexp(str, keys, options);
    return regexpToFunction(re, keys, options);
}
exports.match = match;
/**
 * Create a path match function from `path-to-regexp` output.
 */
function regexpToFunction(re, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.decode, decode = _a === void 0 ? function (x) { return x; } : _a;
    return function (pathname) {
        var m = re.exec(pathname);
        if (!m)
            return false;
        var path = m[0], index = m.index;
        var params = Object.create(null);
        var _loop_1 = function (i) {
            // tslint:disable-next-line
            if (m[i] === undefined)
                return "continue";
            var key = keys[i - 1];
            if (key.modifier === "*" || key.modifier === "+") {
                params[key.name] = m[i].split(key.prefix + key.suffix).map(function (value) {
                    return decode(value, key);
                });
            }
            else {
                params[key.name] = decode(m[i], key);
            }
        };
        for (var i = 1; i < m.length; i++) {
            _loop_1(i);
        }
        return { path: path, index: index, params: params };
    };
}
exports.regexpToFunction = regexpToFunction;
/**
 * Escape a regular expression string.
 */
function escapeString(str) {
    return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
/**
 * Get the flags for a regexp from the options.
 */
function flags(options) {
    return options && options.sensitive ? "" : "i";
}
/**
 * Pull out keys from a regexp.
 */
function regexpToRegexp(path, keys) {
    if (!keys)
        return path;
    // Use a negative lookahead to match only capturing groups.
    var groups = path.source.match(/\((?!\?)/g);
    if (groups) {
        for (var i = 0; i < groups.length; i++) {
            keys.push({
                name: i,
                prefix: "",
                suffix: "",
                modifier: "",
                pattern: ""
            });
        }
    }
    return path;
}
/**
 * Transform an array into a regexp.
 */
function arrayToRegexp(paths, keys, options) {
    var parts = paths.map(function (path) { return pathToRegexp(path, keys, options).source; });
    return new RegExp("(?:" + parts.join("|") + ")", flags(options));
}
/**
 * Create a path regexp from string input.
 */
function stringToRegexp(path, keys, options) {
    return tokensToRegexp(parse(path, options), keys, options);
}
/**
 * Expose a function for taking tokens and returning a RegExp.
 */
function tokensToRegexp(tokens, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.strict, strict = _a === void 0 ? false : _a, _b = options.start, start = _b === void 0 ? true : _b, _c = options.end, end = _c === void 0 ? true : _c, _d = options.encode, encode = _d === void 0 ? function (x) { return x; } : _d;
    var endsWith = "[" + escapeString(options.endsWith || "") + "]|$";
    var delimiter = "[" + escapeString(options.delimiter || "/#?") + "]";
    var route = start ? "^" : "";
    // Iterate over the tokens and create our regexp string.
    for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
        var token = tokens_1[_i];
        if (typeof token === "string") {
            route += escapeString(encode(token));
        }
        else {
            var prefix = escapeString(encode(token.prefix));
            var suffix = escapeString(encode(token.suffix));
            if (token.pattern) {
                if (keys)
                    keys.push(token);
                if (prefix || suffix) {
                    if (token.modifier === "+" || token.modifier === "*") {
                        var mod = token.modifier === "*" ? "?" : "";
                        route += "(?:" + prefix + "((?:" + token.pattern + ")(?:" + suffix + prefix + "(?:" + token.pattern + "))*)" + suffix + ")" + mod;
                    }
                    else {
                        route += "(?:" + prefix + "(" + token.pattern + ")" + suffix + ")" + token.modifier;
                    }
                }
                else {
                    route += "(" + token.pattern + ")" + token.modifier;
                }
            }
            else {
                route += "(?:" + prefix + suffix + ")" + token.modifier;
            }
        }
    }
    if (end) {
        if (!strict)
            route += delimiter + "?";
        route += !options.endsWith ? "$" : "(?=" + endsWith + ")";
    }
    else {
        var endToken = tokens[tokens.length - 1];
        var isEndDelimited = typeof endToken === "string"
            ? delimiter.indexOf(endToken[endToken.length - 1]) > -1
            : // tslint:disable-next-line
                endToken === undefined;
        if (!strict) {
            route += "(?:" + delimiter + "(?=" + endsWith + "))?";
        }
        if (!isEndDelimited) {
            route += "(?=" + delimiter + "|" + endsWith + ")";
        }
    }
    return new RegExp(route, flags(options));
}
exports.tokensToRegexp = tokensToRegexp;
/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 */
function pathToRegexp(path, keys, options) {
    if (path instanceof RegExp)
        return regexpToRegexp(path, keys);
    if (Array.isArray(path))
        return arrayToRegexp(path, keys, options);
    return stringToRegexp(path, keys, options);
}
exports.pathToRegexp = pathToRegexp;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/i18n/detect-domain-locale.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/i18n/detect-domain-locale.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
exports.detectDomainLocale = detectDomainLocale;
function detectDomainLocale(domainItems, hostname, detectedLocale) {
  let domainItem;
  if (domainItems) {
    if (detectedLocale) {
      detectedLocale = detectedLocale.toLowerCase();
    }
    for (const item of domainItems) {
      var _item$domain, _item$locales;
      const domainHostname = (_item$domain = item.domain) == null ? void 0 : _item$domain.split(":")[0].toLowerCase();
      if (hostname === domainHostname || detectedLocale === item.defaultLocale.toLowerCase() || (_item$locales = item.locales) != null && _item$locales.some((locale) => locale.toLowerCase() === detectedLocale)) {
        domainItem = item;
        break;
      }
    }
  }
  return domainItem;
}


/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
exports.normalizeLocalePath = normalizeLocalePath;
function normalizeLocalePath(pathname, locales) {
  let detectedLocale;
  const pathnameParts = pathname.split("/");
  (locales || []).some((locale) => {
    if (pathnameParts[1].toLowerCase() === locale.toLowerCase()) {
      detectedLocale = locale;
      pathnameParts.splice(1, 1);
      pathname = pathnameParts.join("/") || "/";
      return true;
    }
    return false;
  });
  return {pathname, detectedLocale};
}


/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
exports.default = mitt;
function mitt() {
  const all = Object.create(null);
  return {on(type, handler) {
    ;
    (all[type] || (all[type] = [])).push(handler);
  }, off(type, handler) {
    if (all[type]) {
      all[type].splice(all[type].indexOf(handler) >>> 0, 1);
    }
  }, emit(type, ...evts) {
    ;
    (all[type] || []).slice().map((handler) => {
      handler(...evts);
    });
  }};
}


/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
exports.getDomainLocale = getDomainLocale;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.default = void 0;
var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");
var _routeLoader = __webpack_require__(/*! ../../../client/route-loader */ "./node_modules/next/dist/client/route-loader.js");
var _denormalizePagePath = __webpack_require__(/*! ../../server/denormalize-page-path */ "./node_modules/next/dist/next-server/server/denormalize-page-path.js");
var _normalizeLocalePath = __webpack_require__(/*! ../i18n/normalize-locale-path */ "./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js");
var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));
var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");
var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");
var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");
var _querystring = __webpack_require__(/*! ./utils/querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");
var _resolveRewrites = _interopRequireDefault(__webpack_require__(/*! ./utils/resolve-rewrites */ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js"));
var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");
var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {default: obj};
}
let detectDomainLocale;
if (true) {
  detectDomainLocale = __webpack_require__(/*! ../i18n/detect-domain-locale */ "./node_modules/next/dist/next-server/lib/i18n/detect-domain-locale.js").detectDomainLocale;
}
const basePath =  false || "";
function buildCancellationError() {
  return Object.assign(new Error("Route Cancelled"), {cancelled: true});
}
function addPathPrefix(path, prefix) {
  return prefix && path.startsWith("/") ? path === "/" ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${pathNoQueryHash(path) === "/" ? path.substring(1) : path}` : path;
}
function getDomainLocale(path, locale, locales, domainLocales) {
  if (true) {
    locale = locale || (0, _normalizeLocalePath.normalizeLocalePath)(path, locales).detectedLocale;
    const detectedDomain = detectDomainLocale(domainLocales, void 0, locale);
    if (detectedDomain) {
      return `http${detectedDomain.http ? "" : "s"}://${detectedDomain.domain}${basePath || ""}${locale === detectedDomain.defaultLocale ? "" : `/${locale}`}${path}`;
    }
    return false;
  }
  return false;
}
function addLocale(path, locale, defaultLocale) {
  if (true) {
    return locale && locale !== defaultLocale && !path.startsWith("/" + locale + "/") && path !== "/" + locale ? addPathPrefix(path, "/" + locale) : path;
  }
  return path;
}
function delLocale(path, locale) {
  if (true) {
    return locale && (path.startsWith("/" + locale + "/") || path === "/" + locale) ? path.substr(locale.length + 1) || "/" : path;
  }
  return path;
}
function pathNoQueryHash(path) {
  const queryIndex = path.indexOf("?");
  const hashIndex = path.indexOf("#");
  if (queryIndex > -1 || hashIndex > -1) {
    path = path.substring(0, queryIndex > -1 ? queryIndex : hashIndex);
  }
  return path;
}
function hasBasePath(path) {
  path = pathNoQueryHash(path);
  return path === basePath || path.startsWith(basePath + "/");
}
function addBasePath(path) {
  return addPathPrefix(path, basePath);
}
function delBasePath(path) {
  path = path.slice(basePath.length);
  if (!path.startsWith("/"))
    path = `/${path}`;
  return path;
}
function isLocalURL(url) {
  if (url.startsWith("/") || url.startsWith("#"))
    return true;
  try {
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}
function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = "";
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : "") || query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);
  if (!params.every((param) => {
    let value = dynamicMatches[param] || "";
    const {repeat, optional} = dynamicGroups[param];
    let replaced = `[${repeat ? "..." : ""}${param}]`;
    if (optional) {
      replaced = `${!value ? "/" : ""}[${replaced}]`;
    }
    if (repeat && !Array.isArray(value))
      value = [value];
    return (optional || param in dynamicMatches) && (interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map((segment) => encodeURIComponent(segment)).join("/") : encodeURIComponent(value)) || "/");
  })) {
    interpolatedRoute = "";
  }
  return {params, result: interpolatedRoute};
}
function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach((key) => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
function resolveHref(currentPath, href, resolveAs) {
  const base = new URL(currentPath, "http://n");
  const urlAsString = typeof href === "string" ? href : (0, _utils.formatWithValidation)(href);
  if (!isLocalURL(urlAsString)) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = "";
    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {result, params} = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);
      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({pathname: result, hash: finalUrl.hash, query: omitParmsFromQuery(query, params)});
      }
    }
    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}
function stripOrigin(url) {
  const origin = (0, _utils.getLocationOrigin)();
  return url.startsWith(origin) ? url.substring(origin.length) : url;
}
function prepareUrlAs(router, url, as) {
  let [resolvedHref, resolvedAs] = resolveHref(router.pathname, url, true);
  const origin = (0, _utils.getLocationOrigin)();
  const hrefHadOrigin = resolvedHref.startsWith(origin);
  const asHadOrigin = resolvedAs && resolvedAs.startsWith(origin);
  resolvedHref = stripOrigin(resolvedHref);
  resolvedAs = resolvedAs ? stripOrigin(resolvedAs) : resolvedAs;
  const preparedUrl = hrefHadOrigin ? resolvedHref : addBasePath(resolvedHref);
  const preparedAs = as ? stripOrigin(resolveHref(router.pathname, as)) : resolvedAs || resolvedHref;
  return {url: preparedUrl, as: asHadOrigin ? preparedAs : addBasePath(preparedAs)};
}
function resolveDynamicRoute(pathname, pages) {
  const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(pathname));
  if (cleanPathname === "/404" || cleanPathname === "/_error") {
    return pathname;
  }
  if (!pages.includes(cleanPathname)) {
    pages.some((page) => {
      if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
        pathname = page;
        return true;
      }
    });
  }
  return (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
}
const manualScrollRestoration =  false && false;
const SSG_DATA_NOT_FOUND = Symbol("SSG_DATA_NOT_FOUND");
function fetchRetry(url, attempts) {
  return fetch(url, {
    credentials: "same-origin"
  }).then((res) => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }
      if (res.status === 404) {
        return res.json().then((data) => {
          if (data.notFound) {
            return {notFound: SSG_DATA_NOT_FOUND};
          }
          throw new Error(`Failed to load static props`);
        });
      }
      throw new Error(`Failed to load static props`);
    }
    return res.json();
  });
}
function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch((err) => {
    if (!isServerRender) {
      (0, _routeLoader.markAssetError)(err);
    }
    throw err;
  });
}
class Router {
  constructor(_pathname, _query, _as, {initialProps, pageLoader, App, wrapApp, Component, err, subscription, isFallback, locale, locales, defaultLocale, domainLocales, isPreview}) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sdr = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;
    this.domainLocales = void 0;
    this.isReady = void 0;
    this.isPreview = void 0;
    this.isLocaleDomain = void 0;
    this._idx = 0;
    this.onPopState = (e) => {
      const state = e.state;
      if (!state) {
        const {pathname: pathname2, query} = this;
        this.changeState("replaceState", (0, _utils.formatWithValidation)({pathname: addBasePath(pathname2), query}), (0, _utils.getURL)());
        return;
      }
      if (!state.__N) {
        return;
      }
      let forcedScroll;
      const {url, as, options, idx} = state;
      if (false) {}
      this._idx = idx;
      const {pathname} = (0, _parseRelativeUrl.parseRelativeUrl)(url);
      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      }
      if (this._bps && !this._bps(state)) {
        return;
      }
      this.change("replaceState", url, as, Object.assign({}, options, {shallow: options.shallow && this._shallow, locale: options.locale || this.defaultLocale}), forcedScroll);
    };
    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname);
    this.components = {};
    if (_pathname !== "/_error") {
      this.components[this.route] = {Component, initial: true, props: initialProps, err, __N_SSG: initialProps && initialProps.__N_SSG, __N_SSP: initialProps && initialProps.__N_SSP};
    }
    this.components["/_app"] = {Component: App, styleSheets: []};
    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query;
    const autoExportDynamic = (0, _isDynamic.isDynamicRoute)(_pathname) && self.__NEXT_DATA__.autoExport;
    this.asPath = autoExportDynamic ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp;
    this.isSsr = true;
    this.isFallback = isFallback;
    this.isReady = !!(self.__NEXT_DATA__.gssp || self.__NEXT_DATA__.gip || !autoExportDynamic && !self.location.search);
    this.isPreview = !!isPreview;
    this.isLocaleDomain = false;
    if (true) {
      this.locale = locale;
      this.locales = locales;
      this.defaultLocale = defaultLocale;
      this.domainLocales = domainLocales;
      this.isLocaleDomain = !!detectDomainLocale(domainLocales, self.location.hostname);
    }
    if (typeof window !== "undefined") {
      if (_as.substr(0, 2) !== "//") {
        this.changeState("replaceState", (0, _utils.formatWithValidation)({pathname: addBasePath(_pathname), query: _query}), (0, _utils.getURL)(), {locale});
      }
      window.addEventListener("popstate", this.onPopState);
      if (false) {}
    }
  }
  reload() {
    window.location.reload();
  }
  back() {
    window.history.back();
  }
  push(url, as, options = {}) {
    if (false) {}
    ;
    ({url, as} = prepareUrlAs(this, url, as));
    return this.change("pushState", url, as, options);
  }
  replace(url, as, options = {}) {
    ;
    ({url, as} = prepareUrlAs(this, url, as));
    return this.change("replaceState", url, as, options);
  }
  async change(method, url, as, options, forcedScroll) {
    var _options$scroll;
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }
    if (options._h) {
      this.isReady = true;
    }
    options.scroll = !!((_options$scroll = options.scroll) != null ? _options$scroll : true);
    let localeChange = options.locale !== this.locale;
    if (true) {
      this.locale = options.locale === false ? this.defaultLocale : options.locale || this.locale;
      if (typeof options.locale === "undefined") {
        options.locale = this.locale;
      }
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(hasBasePath(as) ? delBasePath(as) : as);
      const localePathResult = (0, _normalizeLocalePath.normalizeLocalePath)(parsedAs.pathname, this.locales);
      if (localePathResult.detectedLocale) {
        this.locale = localePathResult.detectedLocale;
        parsedAs.pathname = addBasePath(parsedAs.pathname);
        as = (0, _utils.formatWithValidation)(parsedAs);
        url = addBasePath((0, _normalizeLocalePath.normalizeLocalePath)(hasBasePath(url) ? delBasePath(url) : url, this.locales).pathname);
      }
      let didNavigate = false;
      if (true) {
        var _this$locales;
        if (!((_this$locales = this.locales) != null && _this$locales.includes(this.locale))) {
          parsedAs.pathname = addLocale(parsedAs.pathname, this.locale);
          window.location.href = (0, _utils.formatWithValidation)(parsedAs);
          didNavigate = true;
        }
      }
      const detectedDomain = detectDomainLocale(this.domainLocales, void 0, this.locale);
      if (true) {
        if (!didNavigate && detectedDomain && this.isLocaleDomain && self.location.hostname !== detectedDomain.domain) {
          const asNoBasePath = delBasePath(as);
          window.location.href = `http${detectedDomain.http ? "" : "s"}://${detectedDomain.domain}${addBasePath(`${this.locale === detectedDomain.defaultLocale ? "" : `/${this.locale}`}${asNoBasePath === "/" ? "" : asNoBasePath}` || "/")}`;
          didNavigate = true;
        }
      }
      if (didNavigate) {
        return new Promise(() => {
        });
      }
    }
    if (!options._h) {
      this.isSsr = false;
    }
    if (_utils.ST) {
      performance.mark("routeChange");
    }
    const {shallow = false} = options;
    const routeProps = {shallow};
    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute, routeProps);
    }
    as = addBasePath(addLocale(hasBasePath(as) ? delBasePath(as) : as, options.locale, this.defaultLocale));
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as;
    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit("hashChangeStart", as, routeProps);
      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route], null);
      Router.events.emit("hashChangeComplete", as, routeProps);
      return true;
    }
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {pathname, query} = parsed;
    let pages, rewrites;
    try {
      pages = await this.pageLoader.getPageList();
      ({__rewrites: rewrites} = await (0, _routeLoader.getClientBuildManifest)());
    } catch (err) {
      window.location.href = as;
      return false;
    }
    if (!this.urlIsNew(cleanedAs) && !localeChange) {
      method = "replaceState";
    }
    let resolvedAs = as;
    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname;
    if (pathname !== "/_error") {
      if ( true && as.startsWith("/")) {
        const rewritesResult = (0, _resolveRewrites.default)(addBasePath(addLocale(delBasePath(as), this.locale)), pages, rewrites, query, (p) => resolveDynamicRoute(p, pages), this.locales);
        resolvedAs = rewritesResult.asPath;
        if (rewritesResult.matchedPage && rewritesResult.resolvedHref) {
          pathname = rewritesResult.resolvedHref;
          parsed.pathname = pathname;
          url = (0, _utils.formatWithValidation)(parsed);
        }
      } else {
        parsed.pathname = resolveDynamicRoute(pathname, pages);
        if (parsed.pathname !== pathname) {
          pathname = parsed.pathname;
          url = (0, _utils.formatWithValidation)(parsed);
        }
      }
    }
    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    if (!isLocalURL(as)) {
      if (true) {
        throw new Error(`Invalid href: "${url}" and as: "${as}", received relative href and external as
See more info: https://nextjs.org/docs/messages/invalid-relative-url-external-as`);
      }
      window.location.href = as;
      return false;
    }
    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);
    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};
      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter((param) => !query[param]);
        if (missingParams.length > 0) {
          if (true) {
            console.warn(`${shouldInterpolate ? `Interpolating href` : `Mismatching \`as\` and \`href\``} failed to manually provide the params: ${missingParams.join(", ")} in the \`href\`'s \`query\``);
          }
          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(", ")}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://nextjs.org/docs/messages/${shouldInterpolate ? "href-interpolation-failed" : "incompatible-href-as"}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {pathname: interpolatedAs.result, query: omitParmsFromQuery(query, interpolatedAs.params)}));
      } else {
        Object.assign(query, routeMatch);
      }
    }
    Router.events.emit("routeChangeStart", as, routeProps);
    try {
      var _self$__NEXT_DATA__$p, _self$__NEXT_DATA__$p2;
      let routeInfo = await this.getRouteInfo(route, pathname, query, as, resolvedAs, routeProps);
      let {error, props, __N_SSG, __N_SSP} = routeInfo;
      if ((__N_SSG || __N_SSP) && props) {
        if (props.pageProps && props.pageProps.__N_REDIRECT) {
          const destination = props.pageProps.__N_REDIRECT;
          if (destination.startsWith("/")) {
            const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);
            parsedHref.pathname = resolveDynamicRoute(parsedHref.pathname, pages);
            if (pages.includes(parsedHref.pathname)) {
              const {url: newUrl, as: newAs} = prepareUrlAs(this, destination, destination);
              return this.change(method, newUrl, newAs, options);
            }
          }
          window.location.href = destination;
          return new Promise(() => {
          });
        }
        this.isPreview = !!props.__N_PREVIEW;
        if (props.notFound === SSG_DATA_NOT_FOUND) {
          let notFoundRoute;
          try {
            await this.fetchComponent("/404");
            notFoundRoute = "/404";
          } catch (_) {
            notFoundRoute = "/_error";
          }
          routeInfo = await this.getRouteInfo(notFoundRoute, notFoundRoute, query, as, resolvedAs, {shallow: false});
        }
      }
      Router.events.emit("beforeHistoryChange", as, routeProps);
      this.changeState(method, url, as, options);
      if (true) {
        const appComp = this.components["/_app"].Component;
        window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
      }
      const isValidShallowRoute = options.shallow && this.route === route;
      if (options._h && pathname === "/_error" && ((_self$__NEXT_DATA__$p = self.__NEXT_DATA__.props) == null ? void 0 : (_self$__NEXT_DATA__$p2 = _self$__NEXT_DATA__$p.pageProps) == null ? void 0 : _self$__NEXT_DATA__$p2.statusCode) === 500 && props != null && props.pageProps) {
        props.pageProps.statusCode = 500;
      }
      await this.set(route, pathname, query, cleanedAs, routeInfo, forcedScroll || (isValidShallowRoute || !options.scroll ? null : {x: 0, y: 0})).catch((e) => {
        if (e.cancelled)
          error = error || e;
        else
          throw e;
      });
      if (error) {
        Router.events.emit("routeChangeError", error, cleanedAs, routeProps);
        throw error;
      }
      if (true) {
        if (this.locale) {
          document.documentElement.lang = this.locale;
        }
      }
      Router.events.emit("routeChangeComplete", as, routeProps);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }
      throw err;
    }
  }
  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === "undefined") {
        console.error(`Warning: window.history is not available.`);
        return;
      }
      if (typeof window.history[method] === "undefined") {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }
    if (method !== "pushState" || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({url, as, options, __N: true, idx: this._idx = method !== "pushState" ? this._idx : this._idx + 1}, "", as);
    }
  }
  async handleRouteInfoError(err, pathname, query, as, routeProps, loadErrorFail) {
    if (err.cancelled) {
      throw err;
    }
    if ((0, _routeLoader.isAssetError)(err) || loadErrorFail) {
      Router.events.emit("routeChangeError", err, as, routeProps);
      window.location.href = as;
      throw buildCancellationError();
    }
    try {
      let Component;
      let styleSheets;
      let props;
      if (typeof Component === "undefined" || typeof styleSheets === "undefined") {
        ;
        ({page: Component, styleSheets} = await this.fetchComponent("/_error"));
      }
      const routeInfo = {props, Component, styleSheets, err, error: err};
      if (!routeInfo.props) {
        try {
          routeInfo.props = await this.getInitialProps(Component, {err, pathname, query});
        } catch (gipErr) {
          console.error("Error in error page `getInitialProps`: ", gipErr);
          routeInfo.props = {};
        }
      }
      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, routeProps, true);
    }
  }
  async getRouteInfo(route, pathname, query, as, resolvedAs, routeProps) {
    try {
      const existingRouteInfo = this.components[route];
      if (routeProps.shallow && existingRouteInfo && this.route === route) {
        return existingRouteInfo;
      }
      const cachedRouteInfo = existingRouteInfo && "initial" in existingRouteInfo ? void 0 : existingRouteInfo;
      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then((res) => ({Component: res.page, styleSheets: res.styleSheets, __N_SSG: res.mod.__N_SSG, __N_SSP: res.mod.__N_SSP}));
      const {Component, __N_SSG, __N_SSP} = routeInfo;
      if (true) {
        const {isValidElementType} = __webpack_require__(/*! react-is */ "react-is");
        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }
      let dataHref;
      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({pathname, query}), resolvedAs, __N_SSG, this.locale);
      }
      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, {pathname, query, asPath: as}));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as, routeProps);
    }
  }
  set(route, pathname, query, as, data, resetScroll) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data, resetScroll);
  }
  beforePopState(cb) {
    this._bps = cb;
  }
  onlyAHashChange(as) {
    if (!this.asPath)
      return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split("#");
    const [newUrlNoHash, newHash] = as.split("#");
    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    }
    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    }
    return oldHash !== newHash;
  }
  scrollToHash(as) {
    const [, hash] = as.split("#");
    if (hash === "" || hash === "top") {
      window.scrollTo(0, 0);
      return;
    }
    const idEl = document.getElementById(hash);
    if (idEl) {
      idEl.scrollIntoView();
      return;
    }
    const nameEl = document.getElementsByName(hash)[0];
    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }
  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {pathname} = parsed;
    if (true) {
      if (options.locale === false) {
        pathname = (0, _normalizeLocalePath.normalizeLocalePath)(pathname, this.locales).pathname;
        parsed.pathname = pathname;
        url = (0, _utils.formatWithValidation)(parsed);
        let parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(asPath);
        const localePathResult = (0, _normalizeLocalePath.normalizeLocalePath)(parsedAs.pathname, this.locales);
        parsedAs.pathname = localePathResult.pathname;
        options.locale = localePathResult.detectedLocale || this.defaultLocale;
        asPath = (0, _utils.formatWithValidation)(parsedAs);
      }
    }
    const pages = await this.pageLoader.getPageList();
    let resolvedAs = asPath;
    if ( true && asPath.startsWith("/")) {
      let rewrites;
      ({__rewrites: rewrites} = await (0, _routeLoader.getClientBuildManifest)());
      const rewritesResult = (0, _resolveRewrites.default)(addBasePath(addLocale(asPath, this.locale)), pages, rewrites, parsed.query, (p) => resolveDynamicRoute(p, pages), this.locales);
      resolvedAs = delLocale(delBasePath(rewritesResult.asPath), this.locale);
      if (rewritesResult.matchedPage && rewritesResult.resolvedHref) {
        pathname = rewritesResult.resolvedHref;
        parsed.pathname = pathname;
        url = (0, _utils.formatWithValidation)(parsed);
      }
    } else {
      parsed.pathname = resolveDynamicRoute(parsed.pathname, pages);
      if (parsed.pathname !== pathname) {
        pathname = parsed.pathname;
        url = (0, _utils.formatWithValidation)(parsed);
      }
    }
    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    if (true) {
      return;
    }
    await Promise.all([this.pageLoader._isSsg(route).then((isSsg) => {
      return isSsg ? this._getStaticData(this.pageLoader.getDataHref(url, resolvedAs, true, typeof options.locale !== "undefined" ? options.locale : this.locale)) : false;
    }), this.pageLoader[options.priority ? "loadPage" : "prefetch"](route)]);
  }
  async fetchComponent(route) {
    let cancelled = false;
    const cancel = this.clc = () => {
      cancelled = true;
    };
    const componentResult = await this.pageLoader.loadPage(route);
    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }
    if (cancel === this.clc) {
      this.clc = null;
    }
    return componentResult;
  }
  _getData(fn) {
    let cancelled = false;
    const cancel = () => {
      cancelled = true;
    };
    this.clc = cancel;
    return fn().then((data) => {
      if (cancel === this.clc) {
        this.clc = null;
      }
      if (cancelled) {
        const err = new Error("Loading initial props cancelled");
        err.cancelled = true;
        throw err;
      }
      return data;
    });
  }
  _getStaticData(dataHref) {
    const {href: cacheKey} = new URL(dataHref, window.location.href);
    if (false) {}
    return fetchNextData(dataHref, this.isSsr).then((data) => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }
  _getServerData(dataHref) {
    const {href: resourceKey} = new URL(dataHref, window.location.href);
    if (this.sdr[resourceKey]) {
      return this.sdr[resourceKey];
    }
    return this.sdr[resourceKey] = fetchNextData(dataHref, this.isSsr).then((data) => {
      delete this.sdr[resourceKey];
      return data;
    }).catch((err) => {
      delete this.sdr[resourceKey];
      throw err;
    });
  }
  getInitialProps(Component, ctx) {
    const {Component: App} = this.components["/_app"];
    const AppTree = this._wrapApp(App);
    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {AppTree, Component, router: this, ctx});
  }
  abortComponentLoad(as, routeProps) {
    if (this.clc) {
      Router.events.emit("routeChangeError", buildCancellationError(), as, routeProps);
      this.clc();
      this.clc = null;
    }
  }
  notify(data, resetScroll) {
    return this.sub(data, this.components["/_app"].Component, resetScroll);
  }
}
exports.default = Router;
Router.events = (0, _mitt.default)();


/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/format-url.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
exports.formatUrl = formatUrl;
var querystring = _interopRequireWildcard(__webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js"));
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
const slashedProtocols = /https?|ftp|gopher|file/;
function formatUrl(urlObj) {
  let {auth, hostname} = urlObj;
  let protocol = urlObj.protocol || "";
  let pathname = urlObj.pathname || "";
  let hash = urlObj.hash || "";
  let query = urlObj.query || "";
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ":") + "@" : "";
  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(":") ? `[${hostname}]` : hostname);
    if (urlObj.port) {
      host += ":" + urlObj.port;
    }
  }
  if (query && typeof query === "object") {
    query = String(querystring.urlQueryToSearchParams(query));
  }
  let search = urlObj.search || query && `?${query}` || "";
  if (protocol && protocol.substr(-1) !== ":")
    protocol += ":";
  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = "//" + (host || "");
    if (pathname && pathname[0] !== "/")
      pathname = "/" + pathname;
  } else if (!host) {
    host = "";
  }
  if (hash && hash[0] !== "#")
    hash = "#" + hash;
  if (search && search[0] !== "?")
    search = "?" + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace("#", "%23");
  return `${protocol}${host}${pathname}${search}${hash}`;
}


/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute;
const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;
function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}


/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;
var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/next/dist/next-server/lib/utils.js");
var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");
function parseRelativeUrl(url, base) {
  const globalBase = new URL(typeof window === "undefined" ? "http://n" : (0, _utils.getLocationOrigin)());
  const resolvedBase = base ? new URL(base, globalBase) : globalBase;
  const {pathname, searchParams, search, hash, href, origin} = new URL(url, resolvedBase);
  if (origin !== globalBase.origin) {
    throw new Error(`invariant: invalid relative URL, router received ${url}`);
  }
  return {pathname, query: (0, _querystring.searchParamsToUrlQuery)(searchParams), search, hash, href: href.slice(globalBase.origin.length)};
}


/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/path-match.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/path-match.js ***!
  \***************************************************************************/
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
exports.__esModule = true;
exports.pathToRegexp = exports.default = exports.customRouteMatcherOptions = exports.matcherOptions = void 0;
var pathToRegexp = _interopRequireWildcard(__webpack_require__(/*! next/dist/compiled/path-to-regexp */ "./node_modules/next/dist/compiled/path-to-regexp/index.js"));
exports.pathToRegexp = pathToRegexp;
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
const matcherOptions = {sensitive: false, delimiter: "/"};
exports.matcherOptions = matcherOptions;
const customRouteMatcherOptions = __assign(__assign({}, matcherOptions), {strict: true});
exports.customRouteMatcherOptions = customRouteMatcherOptions;
var _default = (customRoute = false) => {
  return (path) => {
    const keys = [];
    const matcherRegex = pathToRegexp.pathToRegexp(path, keys, customRoute ? customRouteMatcherOptions : matcherOptions);
    const matcher = pathToRegexp.regexpToFunction(matcherRegex, keys);
    return (pathname, params) => {
      const res = pathname == null ? false : matcher(pathname);
      if (!res) {
        return false;
      }
      if (customRoute) {
        for (const key of keys) {
          if (typeof key.name === "number") {
            delete res.params[key.name];
          }
        }
      }
      return __assign(__assign({}, params), res.params);
    };
  };
};
exports.default = _default;


/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js":
/*!************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js ***!
  \************************************************************************************/
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
exports.__esModule = true;
exports.matchHas = matchHas;
exports.compileNonPath = compileNonPath;
exports.default = prepareDestination;
exports.getSafeParamName = void 0;
var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");
var _parseRelativeUrl = __webpack_require__(/*! ./parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");
var pathToRegexp = _interopRequireWildcard(__webpack_require__(/*! next/dist/compiled/path-to-regexp */ "./node_modules/next/dist/compiled/path-to-regexp/index.js"));
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
const getSafeParamName = (paramName) => {
  let newParamName = "";
  for (let i = 0; i < paramName.length; i++) {
    const charCode = paramName.charCodeAt(i);
    if (charCode > 64 && charCode < 91 || charCode > 96 && charCode < 123) {
      newParamName += paramName[i];
    }
  }
  return newParamName;
};
exports.getSafeParamName = getSafeParamName;
function matchHas(req, has, query) {
  const params = {};
  const allMatch = has.every((hasItem) => {
    let value;
    let key = hasItem.key;
    switch (hasItem.type) {
      case "header": {
        key = key.toLowerCase();
        value = req.headers[key];
        break;
      }
      case "cookie": {
        value = req.cookies[hasItem.key];
        break;
      }
      case "query": {
        value = query[key];
        break;
      }
      case "host": {
        const {host} = (req == null ? void 0 : req.headers) || {};
        const hostname = host == null ? void 0 : host.split(":")[0].toLowerCase();
        value = hostname;
        break;
      }
      default: {
        break;
      }
    }
    if (!hasItem.value && value) {
      params[getSafeParamName(key)] = value;
      return true;
    } else if (value) {
      const matcher = new RegExp(`^${hasItem.value}$`);
      const matches = value.match(matcher);
      if (matches) {
        if (matches.groups) {
          Object.keys(matches.groups).forEach((groupKey) => {
            const safeKey = getSafeParamName(groupKey);
            if (safeKey && matches.groups[groupKey]) {
              params[safeKey] = matches.groups[groupKey];
            }
          });
        } else {
          params[getSafeParamName(key || "host")] = matches[0];
        }
        return true;
      }
    }
    return false;
  });
  if (allMatch) {
    return params;
  }
  return false;
}
function compileNonPath(value, params) {
  if (!value.includes(":")) {
    return value;
  }
  for (const key of Object.keys(params)) {
    if (value.includes(`:${key}`)) {
      value = value.replace(new RegExp(`:${key}\\*`, "g"), `:${key}--ESCAPED_PARAM_ASTERISKS`).replace(new RegExp(`:${key}\\?`, "g"), `:${key}--ESCAPED_PARAM_QUESTION`).replace(new RegExp(`:${key}\\+`, "g"), `:${key}--ESCAPED_PARAM_PLUS`).replace(new RegExp(`:${key}(?!\\w)`, "g"), `--ESCAPED_PARAM_COLON${key}`);
    }
  }
  value = value.replace(/(:|\*|\?|\+|\(|\)|\{|\})/g, "\\$1").replace(/--ESCAPED_PARAM_PLUS/g, "+").replace(/--ESCAPED_PARAM_COLON/g, ":").replace(/--ESCAPED_PARAM_QUESTION/g, "?").replace(/--ESCAPED_PARAM_ASTERISKS/g, "*");
  return pathToRegexp.compile(`/${value}`, {validate: false})(params).substr(1);
}
function prepareDestination(destination, params, query, appendParamsToQuery) {
  let parsedDestination = {};
  query = Object.assign({}, query);
  const hadLocale = query.__nextLocale;
  delete query.__nextLocale;
  delete query.__nextDefaultLocale;
  if (destination.startsWith("/")) {
    parsedDestination = (0, _parseRelativeUrl.parseRelativeUrl)(destination);
  } else {
    const {pathname, searchParams, hash, hostname, port, protocol, search, href} = new URL(destination);
    parsedDestination = {pathname, query: (0, _querystring.searchParamsToUrlQuery)(searchParams), hash, protocol, hostname, port, search, href};
  }
  const destQuery = parsedDestination.query;
  const destPath = `${parsedDestination.pathname}${parsedDestination.hash || ""}`;
  const destPathParamKeys = [];
  pathToRegexp.pathToRegexp(destPath, destPathParamKeys);
  const destPathParams = destPathParamKeys.map((key) => key.name);
  let destinationCompiler = pathToRegexp.compile(destPath, {validate: false});
  let newUrl;
  for (const [key, strOrArray] of Object.entries(destQuery)) {
    let value = Array.isArray(strOrArray) ? strOrArray[0] : strOrArray;
    if (value) {
      value = compileNonPath(value, params);
    }
    destQuery[key] = value;
  }
  let paramKeys = Object.keys(params);
  if (hadLocale) {
    paramKeys = paramKeys.filter((name) => name !== "nextInternalLocale");
  }
  if (appendParamsToQuery && !paramKeys.some((key) => destPathParams.includes(key))) {
    for (const key of paramKeys) {
      if (!(key in destQuery)) {
        destQuery[key] = params[key];
      }
    }
  }
  try {
    newUrl = destinationCompiler(params);
    const [pathname, hash] = newUrl.split("#");
    parsedDestination.pathname = pathname;
    parsedDestination.hash = `${hash ? "#" : ""}${hash || ""}`;
    delete parsedDestination.search;
  } catch (err) {
    if (err.message.match(/Expected .*? to not repeat, but got an array/)) {
      throw new Error(`To use a multi-match in the destination you must add \`*\` at the end of the param name to signify it should repeat. https://nextjs.org/docs/messages/invalid-multi-match`);
    }
    throw err;
  }
  parsedDestination.query = __assign(__assign({}, query), parsedDestination.query);
  return {newUrl, parsedDestination};
}


/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/querystring.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;
function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === "undefined") {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}
function stringifyUrlQueryParam(param) {
  if (typeof param === "string" || typeof param === "number" && !isNaN(param) || typeof param === "boolean") {
    return String(param);
  } else {
    return "";
  }
}
function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach((item) => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}
function assign(target, ...searchParamsList) {
  searchParamsList.forEach((searchParams) => {
    Array.from(searchParams.keys()).forEach((key) => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}


/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
exports.default = resolveRewrites;
var _pathMatch = _interopRequireDefault(__webpack_require__(/*! ./path-match */ "./node_modules/next/dist/next-server/lib/router/utils/path-match.js"));
var _prepareDestination = _interopRequireWildcard(__webpack_require__(/*! ./prepare-destination */ "./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js"));
var _normalizeTrailingSlash = __webpack_require__(/*! ../../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");
var _normalizeLocalePath = __webpack_require__(/*! ../../i18n/normalize-locale-path */ "./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js");
var _parseRelativeUrl = __webpack_require__(/*! ./parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");
var _router = __webpack_require__(/*! ../router */ "./node_modules/next/dist/next-server/lib/router/router.js");
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
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {default: obj};
}
const customRouteMatcher = (0, _pathMatch.default)(true);
function resolveRewrites(asPath, pages, rewrites, query, resolveHref, locales) {
  let matchedPage = false;
  let parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(asPath);
  let fsPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _normalizeLocalePath.normalizeLocalePath)((0, _router.delBasePath)(parsedAs.pathname), locales).pathname);
  let resolvedHref;
  const handleRewrite = (rewrite) => {
    const matcher = customRouteMatcher(rewrite.source);
    let params = matcher(parsedAs.pathname);
    if (rewrite.has && params) {
      const hasParams = (0, _prepareDestination.matchHas)({headers: {host: document.location.hostname}, cookies: Object.fromEntries(document.cookie.split("; ").map((item) => {
        const [key, ...value] = item.split("=");
        return [key, value.join("=")];
      }))}, rewrite.has, parsedAs.query);
      if (hasParams) {
        Object.assign(params, hasParams);
      } else {
        params = false;
      }
    }
    if (params) {
      if (!rewrite.destination) {
        return true;
      }
      const destRes = (0, _prepareDestination.default)(rewrite.destination, params, query, true);
      parsedAs = destRes.parsedDestination;
      asPath = destRes.newUrl;
      Object.assign(query, destRes.parsedDestination.query);
      fsPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _normalizeLocalePath.normalizeLocalePath)((0, _router.delBasePath)(asPath), locales).pathname);
      if (pages.includes(fsPathname)) {
        matchedPage = true;
        resolvedHref = fsPathname;
        return true;
      }
      resolvedHref = resolveHref(fsPathname);
      if (resolvedHref !== asPath && pages.includes(resolvedHref)) {
        matchedPage = true;
        return true;
      }
    }
  };
  let finished = false;
  for (let i = 0; i < rewrites.beforeFiles.length; i++) {
    const rewrite = rewrites.beforeFiles[i];
    if (handleRewrite(rewrite)) {
      finished = true;
      break;
    }
  }
  if (!pages.includes(fsPathname)) {
    if (!finished) {
      for (let i = 0; i < rewrites.afterFiles.length; i++) {
        const rewrite = rewrites.afterFiles[i];
        if (handleRewrite(rewrite)) {
          finished = true;
          break;
        }
      }
    }
    if (!finished) {
      resolvedHref = resolveHref(fsPathname);
      matchedPage = pages.includes(resolvedHref);
      finished = matchedPage;
    }
    if (!finished) {
      for (let i = 0; i < rewrites.fallback.length; i++) {
        const rewrite = rewrites.fallback[i];
        if (handleRewrite(rewrite)) {
          finished = true;
          break;
        }
      }
    }
  }
  return {asPath, parsedAs, matchedPage, resolvedHref};
}


/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;
function getRouteMatcher(routeRegex) {
  const {re, groups} = routeRegex;
  return (pathname) => {
    const routeMatch = re.exec(pathname);
    if (!routeMatch) {
      return false;
    }
    const decode = (param) => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error("failed to decode param");
        err.code = "DECODE_FAILED";
        throw err;
      }
    };
    const params = {};
    Object.keys(groups).forEach((slugName) => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];
      if (m !== void 0) {
        params[slugName] = ~m.indexOf("/") ? m.split("/").map((entry) => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}


/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
exports.getRouteRegex = getRouteRegex;
function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, "\\$&");
}
function parseParameter(param) {
  const optional = param.startsWith("[") && param.endsWith("]");
  if (optional) {
    param = param.slice(1, -1);
  }
  const repeat = param.startsWith("...");
  if (repeat) {
    param = param.slice(3);
  }
  return {key: param, repeat, optional};
}
function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, "") || "/").slice(1).split("/");
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map((segment) => {
    if (segment.startsWith("[") && segment.endsWith("]")) {
      const {key, optional, repeat} = parseParameter(segment.slice(1, -1));
      groups[key] = {pos: groupIndex++, repeat, optional};
      return repeat ? optional ? "(?:/(.+?))?" : "/(.+?)" : "/([^/]+?)";
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join("");
  if (typeof window === "undefined") {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1;
    const getSafeRouteKey = () => {
      let routeKey = "";
      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;
        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }
      return routeKey;
    };
    const routeKeys = {};
    let namedParameterizedRoute = segments.map((segment) => {
      if (segment.startsWith("[") && segment.endsWith("]")) {
        const {key, optional, repeat} = parseParameter(segment.slice(1, -1));
        let cleanedKey = key.replace(/\W/g, "");
        let invalidKey = false;
        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }
        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }
        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }
        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join("");
    return {re: new RegExp(`^${parameterizedRoute}(?:/)?$`), groups, routeKeys, namedRegex: `^${namedParameterizedRoute}(?:/)?$`};
  }
  return {re: new RegExp(`^${parameterizedRoute}(?:/)?$`), groups};
}


/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;
var _formatUrl = __webpack_require__(/*! ./router/utils/format-url */ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js");
function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }
    return result;
  };
}
function getLocationOrigin() {
  const {protocol, hostname, port} = window.location;
  return `${protocol}//${hostname}${port ? ":" + port : ""}`;
}
function getURL() {
  const {href} = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}
function getDisplayName(Component) {
  return typeof Component === "string" ? Component : Component.displayName || Component.name || "Unknown";
}
function isResSent(res) {
  return res.finished || res.headersSent;
}
async function loadGetInitialProps(App, ctx) {
  if (true) {
    var _App$prototype;
    if ((_App$prototype = App.prototype) != null && _App$prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://nextjs.org/docs/messages/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  }
  const res = ctx.res || ctx.ctx && ctx.ctx.res;
  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      return {pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)};
    }
    return {};
  }
  const props = await App.getInitialProps(ctx);
  if (res && isResSent(res)) {
    return props;
  }
  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }
  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://nextjs.org/docs/messages/empty-object-getInitialProps`);
    }
  }
  return props;
}
const urlObjectKeys = ["auth", "hash", "host", "hostname", "href", "path", "pathname", "port", "protocol", "query", "search", "slashes"];
exports.urlObjectKeys = urlObjectKeys;
function formatWithValidation(url) {
  if (true) {
    if (url !== null && typeof url === "object") {
      Object.keys(url).forEach((key) => {
        if (urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }
  return (0, _formatUrl.formatUrl)(url);
}
const SP = typeof performance !== "undefined";
exports.SP = SP;
const ST = SP && typeof performance.mark === "function" && typeof performance.measure === "function";
exports.ST = ST;


/***/ }),

/***/ "./node_modules/next/dist/next-server/server/denormalize-page-path.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/server/denormalize-page-path.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


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

/***/ "./src/components/dom/go.jsx":
/*!***********************************!*\
  !*** ./src/components/dom/go.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(React) {/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_0__);

const Go = () => {
  return /* @__PURE__ */ React.createElement(next_link__WEBPACK_IMPORTED_MODULE_0___default.a, {
    href: "/box",
    as: `/box`
  }, /* @__PURE__ */ React.createElement("a", {
    className: "absolute z-20 p-2 m-2 text-gray-100 focus:outline-none focus:ring"
  }, "Next page"));
};
/* harmony default export */ __webpack_exports__["default"] = (Go);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "react")))

/***/ }),

/***/ "./src/helpers/store.js":
/*!******************************!*\
  !*** ./src/helpers/store.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var zustand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zustand */ "zustand");
/* harmony import */ var zustand__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(zustand__WEBPACK_IMPORTED_MODULE_0__);

const useStore = zustand__WEBPACK_IMPORTED_MODULE_0___default()((set) => {
  return {
    router: {},
    events: null,
    setEvents: (events) => {
      set({events});
    }
  };
});
/* harmony default export */ __webpack_exports__["default"] = (useStore);


/***/ }),

/***/ "./src/pages/index.jsx":
/*!*****************************!*\
  !*** ./src/pages/index.jsx ***!
  \*****************************/
/*! exports provided: default, getStaticProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(React) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return getStaticProps; });
/* harmony import */ var _helpers_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/helpers/store */ "./src/helpers/store.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dynamic */ "next/dynamic");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_dom_go__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/dom/go */ "./src/components/dom/go.jsx");



const TurbineScene = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(() => __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! @/components/canvas/TurbineScene */ "./src/components/canvas/TurbineScene.jsx")), {
  ssr: false
});
const Page = ({title}) => {
  _helpers_store__WEBPACK_IMPORTED_MODULE_0__["default"].setState({title});
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(TurbineScene, {
    r3f: true
  }), /* @__PURE__ */ React.createElement(_components_dom_go__WEBPACK_IMPORTED_MODULE_2__["default"], null));
};
/* harmony default export */ __webpack_exports__["default"] = (Page);
async function getStaticProps() {
  return {
    props: {
      title: "TurbineScene"
    }
  };
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "react")))

/***/ }),

/***/ "@react-spring/three":
/*!**************************************!*\
  !*** external "@react-spring/three" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@react-spring/three");

/***/ }),

/***/ "@react-three/a11y":
/*!************************************!*\
  !*** external "@react-three/a11y" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@react-three/a11y");

/***/ }),

/***/ "@react-three/drei":
/*!************************************!*\
  !*** external "@react-three/drei" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@react-three/drei");

/***/ }),

/***/ "@react-three/fiber":
/*!*************************************!*\
  !*** external "@react-three/fiber" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@react-three/fiber");

/***/ }),

/***/ "next/dynamic":
/*!*******************************!*\
  !*** external "next/dynamic" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dynamic");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "three":
/*!************************!*\
  !*** external "three" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("three");

/***/ }),

/***/ "three/examples/jsm/utils/SkeletonUtils":
/*!*********************************************************!*\
  !*** external "three/examples/jsm/utils/SkeletonUtils" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("three/examples/jsm/utils/SkeletonUtils");

/***/ }),

/***/ "zustand":
/*!**************************!*\
  !*** external "zustand" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("zustand");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9saW5rLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9yZXF1ZXN0LWlkbGUtY2FsbGJhY2suanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvcm91dGUtbG9hZGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3JvdXRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC91c2UtaW50ZXJzZWN0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3dpdGgtcm91dGVyLmpzIiwid2VicGFjazovLy8od2VicGFjaykvcGF0aC10by1yZWdleHAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvaTE4bi9kZXRlY3QtZG9tYWluLWxvY2FsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9pMThuL25vcm1hbGl6ZS1sb2NhbGUtcGF0aC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9taXR0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2Zvcm1hdC11cmwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2lzLWR5bmFtaWMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcGF0aC1tYXRjaC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcHJlcGFyZS1kZXN0aW5hdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcXVlcnlzdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLW1hdGNoZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLXJlZ2V4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9saW5rLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9kb20vZ28uanN4Iiwid2VicGFjazovLy8uL3NyYy9oZWxwZXJzL3N0b3JlLmpzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHJlYWN0LXNwcmluZy90aHJlZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkByZWFjdC10aHJlZS9hMTF5XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHJlYWN0LXRocmVlL2RyZWlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAcmVhY3QtdGhyZWUvZmliZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2R5bmFtaWNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWlzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidGhyZWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0aHJlZS9leGFtcGxlcy9qc20vdXRpbHMvU2tlbGV0b25V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LHdEQUFRLENBQUMsU0FBUyxDQUFFO0FBQ3BCLFNBQ0UsMERBQ0Usb0NBQUMsY0FBRDtBQUFBLElBQWMsS0FBRztBQUFBLE1BQ2pCLG9DQUFDLDBEQUFFLEVBQUg7QUFBQTtBQUtTLG1FQUFJO0FBRVosZ0NBQWdDO0FBQ3JDLFNBQU87QUFBQSxJQUNMLE9BQU87QUFBQSxNQUNMLE9BQU87QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUN2QmIsZ0Q7Ozs7Ozs7Ozs7O0FDQUEsOEM7Ozs7Ozs7Ozs7O0FDQUEsOEM7Ozs7Ozs7Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEscUM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsbUU7Ozs7Ozs7Ozs7O0FDQUEsb0MiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBjaHVua3NcbiBcdC8vIFwiMFwiIG1lYW5zIFwiYWxyZWFkeSBsb2FkZWRcIlxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJwYWdlcy9pbmRleFwiOiAwXG4gXHR9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuIFx0Ly8gVGhpcyBmaWxlIGNvbnRhaW5zIG9ubHkgdGhlIGVudHJ5IGNodW5rLlxuIFx0Ly8gVGhlIGNodW5rIGxvYWRpbmcgZnVuY3Rpb24gZm9yIGFkZGl0aW9uYWwgY2h1bmtzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmUgPSBmdW5jdGlvbiByZXF1aXJlRW5zdXJlKGNodW5rSWQpIHtcbiBcdFx0dmFyIHByb21pc2VzID0gW107XG5cblxuIFx0XHQvLyByZXF1aXJlKCkgY2h1bmsgbG9hZGluZyBmb3IgamF2YXNjcmlwdFxuXG4gXHRcdC8vIFwiMFwiIGlzIHRoZSBzaWduYWwgZm9yIFwiYWxyZWFkeSBsb2FkZWRcIlxuIFx0XHRpZihpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gIT09IDApIHtcbiBcdFx0XHR2YXIgY2h1bmsgPSByZXF1aXJlKFwiLi4vXCIgKyAoe31bY2h1bmtJZF18fGNodW5rSWQpICsgXCIuanNcIik7XG4gXHRcdFx0dmFyIG1vcmVNb2R1bGVzID0gY2h1bmsubW9kdWxlcywgY2h1bmtJZHMgPSBjaHVuay5pZHM7XG4gXHRcdFx0Zm9yKHZhciBtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHRcdGZvcih2YXIgaSA9IDA7IGkgPCBjaHVua0lkcy5sZW5ndGg7IGkrKylcbiBcdFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkc1tpXV0gPSAwO1xuIFx0XHR9XG4gXHRcdHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcyk7XG4gXHR9O1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIHVuY2F1Z2h0IGVycm9yIGhhbmRsZXIgZm9yIHdlYnBhY2sgcnVudGltZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vZSA9IGZ1bmN0aW9uKGVycikge1xuIFx0XHRwcm9jZXNzLm5leHRUaWNrKGZ1bmN0aW9uKCkge1xuIFx0XHRcdHRocm93IGVycjsgLy8gY2F0Y2ggdGhpcyBlcnJvciBieSB1c2luZyBpbXBvcnQoKS5jYXRjaCgpXG4gXHRcdH0pO1xuIFx0fTtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvcGFnZXMvaW5kZXguanN4XCIpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIpOyIsIlwidXNlIHN0cmljdFwiO3ZhciBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkXCIpO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZGVmYXVsdD12b2lkIDA7dmFyIF9yZWFjdD1faW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO3ZhciBfcm91dGVyPXJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlclwiKTt2YXIgX3JvdXRlcjI9cmVxdWlyZShcIi4vcm91dGVyXCIpO3ZhciBfdXNlSW50ZXJzZWN0aW9uPXJlcXVpcmUoXCIuL3VzZS1pbnRlcnNlY3Rpb25cIik7Y29uc3QgcHJlZmV0Y2hlZD17fTtmdW5jdGlvbiBwcmVmZXRjaChyb3V0ZXIsaHJlZixhcyxvcHRpb25zKXtpZih0eXBlb2Ygd2luZG93PT09J3VuZGVmaW5lZCd8fCFyb3V0ZXIpcmV0dXJuO2lmKCEoMCxfcm91dGVyLmlzTG9jYWxVUkwpKGhyZWYpKXJldHVybjsvLyBQcmVmZXRjaCB0aGUgSlNPTiBwYWdlIGlmIGFza2VkIChvbmx5IGluIHRoZSBjbGllbnQpXG4vLyBXZSBuZWVkIHRvIGhhbmRsZSBhIHByZWZldGNoIGVycm9yIGhlcmUgc2luY2Ugd2UgbWF5IGJlXG4vLyBsb2FkaW5nIHdpdGggcHJpb3JpdHkgd2hpY2ggY2FuIHJlamVjdCBidXQgd2UgZG9uJ3Rcbi8vIHdhbnQgdG8gZm9yY2UgbmF2aWdhdGlvbiBzaW5jZSB0aGlzIGlzIG9ubHkgYSBwcmVmZXRjaFxucm91dGVyLnByZWZldGNoKGhyZWYsYXMsb3B0aW9ucykuY2F0Y2goZXJyPT57aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpey8vIHJldGhyb3cgdG8gc2hvdyBpbnZhbGlkIFVSTCBlcnJvcnNcbnRocm93IGVycjt9fSk7Y29uc3QgY3VyTG9jYWxlPW9wdGlvbnMmJnR5cGVvZiBvcHRpb25zLmxvY2FsZSE9PSd1bmRlZmluZWQnP29wdGlvbnMubG9jYWxlOnJvdXRlciYmcm91dGVyLmxvY2FsZTsvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxucHJlZmV0Y2hlZFtocmVmKyclJythcysoY3VyTG9jYWxlPyclJytjdXJMb2NhbGU6JycpXT10cnVlO31mdW5jdGlvbiBpc01vZGlmaWVkRXZlbnQoZXZlbnQpe2NvbnN0e3RhcmdldH09ZXZlbnQuY3VycmVudFRhcmdldDtyZXR1cm4gdGFyZ2V0JiZ0YXJnZXQhPT0nX3NlbGYnfHxldmVudC5tZXRhS2V5fHxldmVudC5jdHJsS2V5fHxldmVudC5zaGlmdEtleXx8ZXZlbnQuYWx0S2V5fHwvLyB0cmlnZ2VycyByZXNvdXJjZSBkb3dubG9hZFxuZXZlbnQubmF0aXZlRXZlbnQmJmV2ZW50Lm5hdGl2ZUV2ZW50LndoaWNoPT09Mjt9ZnVuY3Rpb24gbGlua0NsaWNrZWQoZSxyb3V0ZXIsaHJlZixhcyxyZXBsYWNlLHNoYWxsb3csc2Nyb2xsLGxvY2FsZSl7Y29uc3R7bm9kZU5hbWV9PWUuY3VycmVudFRhcmdldDtpZihub2RlTmFtZT09PSdBJyYmKGlzTW9kaWZpZWRFdmVudChlKXx8ISgwLF9yb3V0ZXIuaXNMb2NhbFVSTCkoaHJlZikpKXsvLyBpZ25vcmUgY2xpY2sgZm9yIGJyb3dzZXLigJlzIGRlZmF1bHQgYmVoYXZpb3JcbnJldHVybjt9ZS5wcmV2ZW50RGVmYXVsdCgpOy8vICBhdm9pZCBzY3JvbGwgZm9yIHVybHMgd2l0aCBhbmNob3IgcmVmc1xuaWYoc2Nyb2xsPT1udWxsKXtzY3JvbGw9YXMuaW5kZXhPZignIycpPDA7fS8vIHJlcGxhY2Ugc3RhdGUgaW5zdGVhZCBvZiBwdXNoIGlmIHByb3AgaXMgcHJlc2VudFxucm91dGVyW3JlcGxhY2U/J3JlcGxhY2UnOidwdXNoJ10oaHJlZixhcyx7c2hhbGxvdyxsb2NhbGUsc2Nyb2xsfSk7fWZ1bmN0aW9uIExpbmsocHJvcHMpe2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXtmdW5jdGlvbiBjcmVhdGVQcm9wRXJyb3IoYXJncyl7cmV0dXJuIG5ldyBFcnJvcihgRmFpbGVkIHByb3AgdHlwZTogVGhlIHByb3AgXFxgJHthcmdzLmtleX1cXGAgZXhwZWN0cyBhICR7YXJncy5leHBlY3RlZH0gaW4gXFxgPExpbms+XFxgLCBidXQgZ290IFxcYCR7YXJncy5hY3R1YWx9XFxgIGluc3RlYWQuYCsodHlwZW9mIHdpbmRvdyE9PSd1bmRlZmluZWQnP1wiXFxuT3BlbiB5b3VyIGJyb3dzZXIncyBjb25zb2xlIHRvIHZpZXcgdGhlIENvbXBvbmVudCBzdGFjayB0cmFjZS5cIjonJykpO30vLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuY29uc3QgcmVxdWlyZWRQcm9wc0d1YXJkPXtocmVmOnRydWV9O2NvbnN0IHJlcXVpcmVkUHJvcHM9T2JqZWN0LmtleXMocmVxdWlyZWRQcm9wc0d1YXJkKTtyZXF1aXJlZFByb3BzLmZvckVhY2goa2V5PT57aWYoa2V5PT09J2hyZWYnKXtpZihwcm9wc1trZXldPT1udWxsfHx0eXBlb2YgcHJvcHNba2V5XSE9PSdzdHJpbmcnJiZ0eXBlb2YgcHJvcHNba2V5XSE9PSdvYmplY3QnKXt0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe2tleSxleHBlY3RlZDonYHN0cmluZ2Agb3IgYG9iamVjdGAnLGFjdHVhbDpwcm9wc1trZXldPT09bnVsbD8nbnVsbCc6dHlwZW9mIHByb3BzW2tleV19KTt9fWVsc2V7Ly8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbmNvbnN0IF89a2V5O319KTsvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuY29uc3Qgb3B0aW9uYWxQcm9wc0d1YXJkPXthczp0cnVlLHJlcGxhY2U6dHJ1ZSxzY3JvbGw6dHJ1ZSxzaGFsbG93OnRydWUscGFzc0hyZWY6dHJ1ZSxwcmVmZXRjaDp0cnVlLGxvY2FsZTp0cnVlfTtjb25zdCBvcHRpb25hbFByb3BzPU9iamVjdC5rZXlzKG9wdGlvbmFsUHJvcHNHdWFyZCk7b3B0aW9uYWxQcm9wcy5mb3JFYWNoKGtleT0+e2NvbnN0IHZhbFR5cGU9dHlwZW9mIHByb3BzW2tleV07aWYoa2V5PT09J2FzJyl7aWYocHJvcHNba2V5XSYmdmFsVHlwZSE9PSdzdHJpbmcnJiZ2YWxUeXBlIT09J29iamVjdCcpe3Rocm93IGNyZWF0ZVByb3BFcnJvcih7a2V5LGV4cGVjdGVkOidgc3RyaW5nYCBvciBgb2JqZWN0YCcsYWN0dWFsOnZhbFR5cGV9KTt9fWVsc2UgaWYoa2V5PT09J2xvY2FsZScpe2lmKHByb3BzW2tleV0mJnZhbFR5cGUhPT0nc3RyaW5nJyl7dGhyb3cgY3JlYXRlUHJvcEVycm9yKHtrZXksZXhwZWN0ZWQ6J2BzdHJpbmdgJyxhY3R1YWw6dmFsVHlwZX0pO319ZWxzZSBpZihrZXk9PT0ncmVwbGFjZSd8fGtleT09PSdzY3JvbGwnfHxrZXk9PT0nc2hhbGxvdyd8fGtleT09PSdwYXNzSHJlZid8fGtleT09PSdwcmVmZXRjaCcpe2lmKHByb3BzW2tleV0hPW51bGwmJnZhbFR5cGUhPT0nYm9vbGVhbicpe3Rocm93IGNyZWF0ZVByb3BFcnJvcih7a2V5LGV4cGVjdGVkOidgYm9vbGVhbmAnLGFjdHVhbDp2YWxUeXBlfSk7fX1lbHNley8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG5jb25zdCBfPWtleTt9fSk7Ly8gVGhpcyBob29rIGlzIGluIGEgY29uZGl0aW9uYWwgYnV0IHRoYXQgaXMgb2sgYmVjYXVzZSBgcHJvY2Vzcy5lbnYuTk9ERV9FTlZgIG5ldmVyIGNoYW5nZXNcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9ydWxlcy1vZi1ob29rc1xuY29uc3QgaGFzV2FybmVkPV9yZWFjdC5kZWZhdWx0LnVzZVJlZihmYWxzZSk7aWYocHJvcHMucHJlZmV0Y2gmJiFoYXNXYXJuZWQuY3VycmVudCl7aGFzV2FybmVkLmN1cnJlbnQ9dHJ1ZTtjb25zb2xlLndhcm4oJ05leHQuanMgYXV0by1wcmVmZXRjaGVzIGF1dG9tYXRpY2FsbHkgYmFzZWQgb24gdmlld3BvcnQuIFRoZSBwcmVmZXRjaCBhdHRyaWJ1dGUgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gTW9yZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvcHJlZmV0Y2gtdHJ1ZS1kZXByZWNhdGVkJyk7fX1jb25zdCBwPXByb3BzLnByZWZldGNoIT09ZmFsc2U7Y29uc3Qgcm91dGVyPSgwLF9yb3V0ZXIyLnVzZVJvdXRlcikoKTtjb25zdCBwYXRobmFtZT1yb3V0ZXImJnJvdXRlci5wYXRobmFtZXx8Jy8nO2NvbnN0e2hyZWYsYXN9PV9yZWFjdC5kZWZhdWx0LnVzZU1lbW8oKCk9Pntjb25zdFtyZXNvbHZlZEhyZWYscmVzb2x2ZWRBc109KDAsX3JvdXRlci5yZXNvbHZlSHJlZikocGF0aG5hbWUscHJvcHMuaHJlZix0cnVlKTtyZXR1cm57aHJlZjpyZXNvbHZlZEhyZWYsYXM6cHJvcHMuYXM/KDAsX3JvdXRlci5yZXNvbHZlSHJlZikocGF0aG5hbWUscHJvcHMuYXMpOnJlc29sdmVkQXN8fHJlc29sdmVkSHJlZn07fSxbcGF0aG5hbWUscHJvcHMuaHJlZixwcm9wcy5hc10pO2xldHtjaGlsZHJlbixyZXBsYWNlLHNoYWxsb3csc2Nyb2xsLGxvY2FsZX09cHJvcHM7Ly8gRGVwcmVjYXRlZC4gV2FybmluZyBzaG93biBieSBwcm9wVHlwZSBjaGVjay4gSWYgdGhlIGNoaWxkcmVuIHByb3ZpZGVkIGlzIGEgc3RyaW5nICg8TGluaz5leGFtcGxlPC9MaW5rPikgd2Ugd3JhcCBpdCBpbiBhbiA8YT4gdGFnXG5pZih0eXBlb2YgY2hpbGRyZW49PT0nc3RyaW5nJyl7Y2hpbGRyZW49LyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJhXCIsbnVsbCxjaGlsZHJlbik7fS8vIFRoaXMgd2lsbCByZXR1cm4gdGhlIGZpcnN0IGNoaWxkLCBpZiBtdWx0aXBsZSBhcmUgcHJvdmlkZWQgaXQgd2lsbCB0aHJvdyBhbiBlcnJvclxuY29uc3QgY2hpbGQ9X3JlYWN0LkNoaWxkcmVuLm9ubHkoY2hpbGRyZW4pO2NvbnN0IGNoaWxkUmVmPWNoaWxkJiZ0eXBlb2YgY2hpbGQ9PT0nb2JqZWN0JyYmY2hpbGQucmVmO2NvbnN0W3NldEludGVyc2VjdGlvblJlZixpc1Zpc2libGVdPSgwLF91c2VJbnRlcnNlY3Rpb24udXNlSW50ZXJzZWN0aW9uKSh7cm9vdE1hcmdpbjonMjAwcHgnfSk7Y29uc3Qgc2V0UmVmPV9yZWFjdC5kZWZhdWx0LnVzZUNhbGxiYWNrKGVsPT57c2V0SW50ZXJzZWN0aW9uUmVmKGVsKTtpZihjaGlsZFJlZil7aWYodHlwZW9mIGNoaWxkUmVmPT09J2Z1bmN0aW9uJyljaGlsZFJlZihlbCk7ZWxzZSBpZih0eXBlb2YgY2hpbGRSZWY9PT0nb2JqZWN0Jyl7Y2hpbGRSZWYuY3VycmVudD1lbDt9fX0sW2NoaWxkUmVmLHNldEludGVyc2VjdGlvblJlZl0pOygwLF9yZWFjdC51c2VFZmZlY3QpKCgpPT57Y29uc3Qgc2hvdWxkUHJlZmV0Y2g9aXNWaXNpYmxlJiZwJiYoMCxfcm91dGVyLmlzTG9jYWxVUkwpKGhyZWYpO2NvbnN0IGN1ckxvY2FsZT10eXBlb2YgbG9jYWxlIT09J3VuZGVmaW5lZCc/bG9jYWxlOnJvdXRlciYmcm91dGVyLmxvY2FsZTtjb25zdCBpc1ByZWZldGNoZWQ9cHJlZmV0Y2hlZFtocmVmKyclJythcysoY3VyTG9jYWxlPyclJytjdXJMb2NhbGU6JycpXTtpZihzaG91bGRQcmVmZXRjaCYmIWlzUHJlZmV0Y2hlZCl7cHJlZmV0Y2gocm91dGVyLGhyZWYsYXMse2xvY2FsZTpjdXJMb2NhbGV9KTt9fSxbYXMsaHJlZixpc1Zpc2libGUsbG9jYWxlLHAscm91dGVyXSk7Y29uc3QgY2hpbGRQcm9wcz17cmVmOnNldFJlZixvbkNsaWNrOmU9PntpZihjaGlsZC5wcm9wcyYmdHlwZW9mIGNoaWxkLnByb3BzLm9uQ2xpY2s9PT0nZnVuY3Rpb24nKXtjaGlsZC5wcm9wcy5vbkNsaWNrKGUpO31pZighZS5kZWZhdWx0UHJldmVudGVkKXtsaW5rQ2xpY2tlZChlLHJvdXRlcixocmVmLGFzLHJlcGxhY2Usc2hhbGxvdyxzY3JvbGwsbG9jYWxlKTt9fX07Y2hpbGRQcm9wcy5vbk1vdXNlRW50ZXI9ZT0+e2lmKCEoMCxfcm91dGVyLmlzTG9jYWxVUkwpKGhyZWYpKXJldHVybjtpZihjaGlsZC5wcm9wcyYmdHlwZW9mIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlcj09PSdmdW5jdGlvbicpe2NoaWxkLnByb3BzLm9uTW91c2VFbnRlcihlKTt9cHJlZmV0Y2gocm91dGVyLGhyZWYsYXMse3ByaW9yaXR5OnRydWV9KTt9Oy8vIElmIGNoaWxkIGlzIGFuIDxhPiB0YWcgYW5kIGRvZXNuJ3QgaGF2ZSBhIGhyZWYgYXR0cmlidXRlLCBvciBpZiB0aGUgJ3Bhc3NIcmVmJyBwcm9wZXJ0eSBpc1xuLy8gZGVmaW5lZCwgd2Ugc3BlY2lmeSB0aGUgY3VycmVudCAnaHJlZicsIHNvIHRoYXQgcmVwZXRpdGlvbiBpcyBub3QgbmVlZGVkIGJ5IHRoZSB1c2VyXG5pZihwcm9wcy5wYXNzSHJlZnx8Y2hpbGQudHlwZT09PSdhJyYmISgnaHJlZidpbiBjaGlsZC5wcm9wcykpe2NvbnN0IGN1ckxvY2FsZT10eXBlb2YgbG9jYWxlIT09J3VuZGVmaW5lZCc/bG9jYWxlOnJvdXRlciYmcm91dGVyLmxvY2FsZTsvLyB3ZSBvbmx5IHJlbmRlciBkb21haW4gbG9jYWxlcyBpZiB3ZSBhcmUgY3VycmVudGx5IG9uIGEgZG9tYWluIGxvY2FsZVxuLy8gc28gdGhhdCBsb2NhbGUgbGlua3MgYXJlIHN0aWxsIHZpc2l0YWJsZSBpbiBkZXZlbG9wbWVudC9wcmV2aWV3IGVudnNcbmNvbnN0IGxvY2FsZURvbWFpbj1yb3V0ZXImJnJvdXRlci5pc0xvY2FsZURvbWFpbiYmKDAsX3JvdXRlci5nZXREb21haW5Mb2NhbGUpKGFzLGN1ckxvY2FsZSxyb3V0ZXImJnJvdXRlci5sb2NhbGVzLHJvdXRlciYmcm91dGVyLmRvbWFpbkxvY2FsZXMpO2NoaWxkUHJvcHMuaHJlZj1sb2NhbGVEb21haW58fCgwLF9yb3V0ZXIuYWRkQmFzZVBhdGgpKCgwLF9yb3V0ZXIuYWRkTG9jYWxlKShhcyxjdXJMb2NhbGUscm91dGVyJiZyb3V0ZXIuZGVmYXVsdExvY2FsZSkpO31yZXR1cm4vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY2xvbmVFbGVtZW50KGNoaWxkLGNoaWxkUHJvcHMpO312YXIgX2RlZmF1bHQ9TGluaztleHBvcnRzLmRlZmF1bHQ9X2RlZmF1bHQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1saW5rLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2g9cmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2g7ZXhwb3J0cy5ub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaD12b2lkIDA7LyoqXG4gKiBSZW1vdmVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggaWYgdGhlcmUgaXMgb25lLiBQcmVzZXJ2ZXMgdGhlIHJvb3QgcGF0aCBgL2AuXG4gKi9mdW5jdGlvbiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoKXtyZXR1cm4gcGF0aC5lbmRzV2l0aCgnLycpJiZwYXRoIT09Jy8nP3BhdGguc2xpY2UoMCwtMSk6cGF0aDt9LyoqXG4gKiBOb3JtYWxpemVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggYWNjb3JkaW5nIHRvIHRoZSBgdHJhaWxpbmdTbGFzaGAgb3B0aW9uXG4gKiBpbiBgbmV4dC5jb25maWcuanNgLlxuICovY29uc3Qgbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2g9cHJvY2Vzcy5lbnYuX19ORVhUX1RSQUlMSU5HX1NMQVNIP3BhdGg9PntpZigvXFwuW14vXStcXC8/JC8udGVzdChwYXRoKSl7cmV0dXJuIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGgpO31lbHNlIGlmKHBhdGguZW5kc1dpdGgoJy8nKSl7cmV0dXJuIHBhdGg7fWVsc2V7cmV0dXJuIHBhdGgrJy8nO319OnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoO2V4cG9ydHMubm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2g9bm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2g7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1ub3JtYWxpemUtdHJhaWxpbmctc2xhc2guanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5jYW5jZWxJZGxlQ2FsbGJhY2s9ZXhwb3J0cy5yZXF1ZXN0SWRsZUNhbGxiYWNrPXZvaWQgMDtjb25zdCByZXF1ZXN0SWRsZUNhbGxiYWNrPXR5cGVvZiBzZWxmIT09J3VuZGVmaW5lZCcmJnNlbGYucmVxdWVzdElkbGVDYWxsYmFja3x8ZnVuY3Rpb24oY2Ipe2xldCBzdGFydD1EYXRlLm5vdygpO3JldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7Y2Ioe2RpZFRpbWVvdXQ6ZmFsc2UsdGltZVJlbWFpbmluZzpmdW5jdGlvbigpe3JldHVybiBNYXRoLm1heCgwLDUwLShEYXRlLm5vdygpLXN0YXJ0KSk7fX0pO30sMSk7fTtleHBvcnRzLnJlcXVlc3RJZGxlQ2FsbGJhY2s9cmVxdWVzdElkbGVDYWxsYmFjaztjb25zdCBjYW5jZWxJZGxlQ2FsbGJhY2s9dHlwZW9mIHNlbGYhPT0ndW5kZWZpbmVkJyYmc2VsZi5jYW5jZWxJZGxlQ2FsbGJhY2t8fGZ1bmN0aW9uKGlkKXtyZXR1cm4gY2xlYXJUaW1lb3V0KGlkKTt9O2V4cG9ydHMuY2FuY2VsSWRsZUNhbGxiYWNrPWNhbmNlbElkbGVDYWxsYmFjaztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJlcXVlc3QtaWRsZS1jYWxsYmFjay5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjt2YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5tYXJrQXNzZXRFcnJvcj1tYXJrQXNzZXRFcnJvcjtleHBvcnRzLmlzQXNzZXRFcnJvcj1pc0Fzc2V0RXJyb3I7ZXhwb3J0cy5nZXRDbGllbnRCdWlsZE1hbmlmZXN0PWdldENsaWVudEJ1aWxkTWFuaWZlc3Q7ZXhwb3J0cy5kZWZhdWx0PXZvaWQgMDt2YXIgX2dldEFzc2V0UGF0aEZyb21Sb3V0ZT1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGVcIikpO3ZhciBfcmVxdWVzdElkbGVDYWxsYmFjaz1yZXF1aXJlKFwiLi9yZXF1ZXN0LWlkbGUtY2FsbGJhY2tcIik7Ly8gMy44cyB3YXMgYXJiaXRyYXJpbHkgY2hvc2VuIGFzIGl0J3Mgd2hhdCBodHRwczovL3dlYi5kZXYvaW50ZXJhY3RpdmVcbi8vIGNvbnNpZGVycyBhcyBcIkdvb2RcIiB0aW1lLXRvLWludGVyYWN0aXZlLiBXZSBtdXN0IGFzc3VtZSBzb21ldGhpbmcgd2VudFxuLy8gd3JvbmcgYmV5b25kIHRoaXMgcG9pbnQsIGFuZCB0aGVuIGZhbGwtYmFjayB0byBhIGZ1bGwgcGFnZSB0cmFuc2l0aW9uIHRvXG4vLyBzaG93IHRoZSB1c2VyIHNvbWV0aGluZyBvZiB2YWx1ZS5cbmNvbnN0IE1TX01BWF9JRExFX0RFTEFZPTM4MDA7ZnVuY3Rpb24gd2l0aEZ1dHVyZShrZXksbWFwLGdlbmVyYXRvcil7bGV0IGVudHJ5PW1hcC5nZXQoa2V5KTtpZihlbnRyeSl7aWYoJ2Z1dHVyZSdpbiBlbnRyeSl7cmV0dXJuIGVudHJ5LmZ1dHVyZTt9cmV0dXJuIFByb21pc2UucmVzb2x2ZShlbnRyeSk7fWxldCByZXNvbHZlcjtjb25zdCBwcm9tPW5ldyBQcm9taXNlKHJlc29sdmU9PntyZXNvbHZlcj1yZXNvbHZlO30pO21hcC5zZXQoa2V5LGVudHJ5PXtyZXNvbHZlOnJlc29sdmVyLGZ1dHVyZTpwcm9tfSk7cmV0dXJuIGdlbmVyYXRvcj8vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VxdWVuY2VzXG5nZW5lcmF0b3IoKS50aGVuKHZhbHVlPT4ocmVzb2x2ZXIodmFsdWUpLHZhbHVlKSk6cHJvbTt9ZnVuY3Rpb24gaGFzUHJlZmV0Y2gobGluayl7dHJ5e2xpbms9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpO3JldHVybigvLyBkZXRlY3QgSUUxMSBzaW5jZSBpdCBzdXBwb3J0cyBwcmVmZXRjaCBidXQgaXNuJ3QgZGV0ZWN0ZWRcbi8vIHdpdGggcmVsTGlzdC5zdXBwb3J0XG4hIXdpbmRvdy5NU0lucHV0TWV0aG9kQ29udGV4dCYmISFkb2N1bWVudC5kb2N1bWVudE1vZGV8fGxpbmsucmVsTGlzdC5zdXBwb3J0cygncHJlZmV0Y2gnKSk7fWNhdGNoKF91bnVzZWQpe3JldHVybiBmYWxzZTt9fWNvbnN0IGNhblByZWZldGNoPWhhc1ByZWZldGNoKCk7ZnVuY3Rpb24gcHJlZmV0Y2hWaWFEb20oaHJlZixhcyxsaW5rKXtyZXR1cm4gbmV3IFByb21pc2UoKHJlcyxyZWopPT57aWYoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgbGlua1tyZWw9XCJwcmVmZXRjaFwiXVtocmVmXj1cIiR7aHJlZn1cIl1gKSl7cmV0dXJuIHJlcygpO31saW5rPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTsvLyBUaGUgb3JkZXIgb2YgcHJvcGVydHkgYXNzaWdubWVudCBoZXJlIGlzIGludGVudGlvbmFsOlxuaWYoYXMpbGluay5hcz1hcztsaW5rLnJlbD1gcHJlZmV0Y2hgO2xpbmsuY3Jvc3NPcmlnaW49cHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTjtsaW5rLm9ubG9hZD1yZXM7bGluay5vbmVycm9yPXJlajsvLyBgaHJlZmAgc2hvdWxkIGFsd2F5cyBiZSBsYXN0OlxubGluay5ocmVmPWhyZWY7ZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChsaW5rKTt9KTt9Y29uc3QgQVNTRVRfTE9BRF9FUlJPUj1TeW1ib2woJ0FTU0VUX0xPQURfRVJST1InKTsvLyBUT0RPOiB1bmV4cG9ydFxuZnVuY3Rpb24gbWFya0Fzc2V0RXJyb3IoZXJyKXtyZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGVycixBU1NFVF9MT0FEX0VSUk9SLHt9KTt9ZnVuY3Rpb24gaXNBc3NldEVycm9yKGVycil7cmV0dXJuIGVyciYmQVNTRVRfTE9BRF9FUlJPUiBpbiBlcnI7fWZ1bmN0aW9uIGFwcGVuZFNjcmlwdChzcmMsc2NyaXB0KXtyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUscmVqZWN0KT0+e3NjcmlwdD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTsvLyBUaGUgb3JkZXIgb2YgcHJvcGVydHkgYXNzaWdubWVudCBoZXJlIGlzIGludGVudGlvbmFsLlxuLy8gMS4gU2V0dXAgc3VjY2Vzcy9mYWlsdXJlIGhvb2tzIGluIGNhc2UgdGhlIGJyb3dzZXIgc3luY2hyb25vdXNseVxuLy8gICAgZXhlY3V0ZXMgd2hlbiBgc3JjYCBpcyBzZXQuXG5zY3JpcHQub25sb2FkPXJlc29sdmU7c2NyaXB0Lm9uZXJyb3I9KCk9PnJlamVjdChtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHNjcmlwdDogJHtzcmN9YCkpKTsvLyAyLiBDb25maWd1cmUgdGhlIGNyb3NzLW9yaWdpbiBhdHRyaWJ1dGUgYmVmb3JlIHNldHRpbmcgYHNyY2AgaW4gY2FzZSB0aGVcbi8vICAgIGJyb3dzZXIgYmVnaW5zIHRvIGZldGNoLlxuc2NyaXB0LmNyb3NzT3JpZ2luPXByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU47Ly8gMy4gRmluYWxseSwgc2V0IHRoZSBzb3VyY2UgYW5kIGluamVjdCBpbnRvIHRoZSBET00gaW4gY2FzZSB0aGUgY2hpbGRcbi8vICAgIG11c3QgYmUgYXBwZW5kZWQgZm9yIGZldGNoaW5nIHRvIHN0YXJ0Llxuc2NyaXB0LnNyYz1zcmM7ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JpcHQpO30pO30vLyBSZXNvbHZlIGEgcHJvbWlzZSB0aGF0IHRpbWVzIG91dCBhZnRlciBnaXZlbiBhbW91bnQgb2YgbWlsbGlzZWNvbmRzLlxuZnVuY3Rpb24gcmVzb2x2ZVByb21pc2VXaXRoVGltZW91dChwLG1zLGVycil7cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLHJlamVjdCk9PntsZXQgY2FuY2VsbGVkPWZhbHNlO3AudGhlbihyPT57Ly8gUmVzb2x2ZWQsIGNhbmNlbCB0aGUgdGltZW91dFxuY2FuY2VsbGVkPXRydWU7cmVzb2x2ZShyKTt9KS5jYXRjaChyZWplY3QpOygwLF9yZXF1ZXN0SWRsZUNhbGxiYWNrLnJlcXVlc3RJZGxlQ2FsbGJhY2spKCgpPT5zZXRUaW1lb3V0KCgpPT57aWYoIWNhbmNlbGxlZCl7cmVqZWN0KGVycik7fX0sbXMpKTt9KTt9Ly8gVE9ETzogc3RvcCBleHBvcnRpbmcgb3IgY2FjaGUgdGhlIGZhaWx1cmVcbi8vIEl0J2QgYmUgYmVzdCB0byBzdG9wIGV4cG9ydGluZyB0aGlzLiBJdCdzIGFuIGltcGxlbWVudGF0aW9uIGRldGFpbC4gV2UncmVcbi8vIG9ubHkgZXhwb3J0aW5nIGl0IGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbHR5IHdpdGggdGhlIGBwYWdlLWxvYWRlcmAuXG4vLyBPbmx5IGNhY2hlIHRoaXMgcmVzcG9uc2UgYXMgYSBsYXN0IHJlc29ydCBpZiB3ZSBjYW5ub3QgZWxpbWluYXRlIGFsbCBvdGhlclxuLy8gY29kZSBicmFuY2hlcyB0aGF0IHVzZSB0aGUgQnVpbGQgTWFuaWZlc3QgQ2FsbGJhY2sgYW5kIHB1c2ggdGhlbSB0aHJvdWdoXG4vLyB0aGUgUm91dGUgTG9hZGVyIGludGVyZmFjZS5cbmZ1bmN0aW9uIGdldENsaWVudEJ1aWxkTWFuaWZlc3QoKXtpZihzZWxmLl9fQlVJTERfTUFOSUZFU1Qpe3JldHVybiBQcm9taXNlLnJlc29sdmUoc2VsZi5fX0JVSUxEX01BTklGRVNUKTt9Y29uc3Qgb25CdWlsZE1hbmlmZXN0PW5ldyBQcm9taXNlKHJlc29sdmU9PnsvLyBNYW5kYXRvcnkgYmVjYXVzZSB0aGlzIGlzIG5vdCBjb25jdXJyZW50IHNhZmU6XG5jb25zdCBjYj1zZWxmLl9fQlVJTERfTUFOSUZFU1RfQ0I7c2VsZi5fX0JVSUxEX01BTklGRVNUX0NCPSgpPT57cmVzb2x2ZShzZWxmLl9fQlVJTERfTUFOSUZFU1QpO2NiJiZjYigpO307fSk7cmV0dXJuIHJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQob25CdWlsZE1hbmlmZXN0LE1TX01BWF9JRExFX0RFTEFZLG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcignRmFpbGVkIHRvIGxvYWQgY2xpZW50IGJ1aWxkIG1hbmlmZXN0JykpKTt9ZnVuY3Rpb24gZ2V0RmlsZXNGb3JSb3V0ZShhc3NldFByZWZpeCxyb3V0ZSl7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlY9PT0nZGV2ZWxvcG1lbnQnKXtyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHtzY3JpcHRzOlthc3NldFByZWZpeCsnL19uZXh0L3N0YXRpYy9jaHVua3MvcGFnZXMnK2VuY29kZVVSSSgoMCxfZ2V0QXNzZXRQYXRoRnJvbVJvdXRlLmRlZmF1bHQpKHJvdXRlLCcuanMnKSldLC8vIFN0eWxlcyBhcmUgaGFuZGxlZCBieSBgc3R5bGUtbG9hZGVyYCBpbiBkZXZlbG9wbWVudDpcbmNzczpbXX0pO31yZXR1cm4gZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpLnRoZW4obWFuaWZlc3Q9PntpZighKHJvdXRlIGluIG1hbmlmZXN0KSl7dGhyb3cgbWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBGYWlsZWQgdG8gbG9va3VwIHJvdXRlOiAke3JvdXRlfWApKTt9Y29uc3QgYWxsRmlsZXM9bWFuaWZlc3Rbcm91dGVdLm1hcChlbnRyeT0+YXNzZXRQcmVmaXgrJy9fbmV4dC8nK2VuY29kZVVSSShlbnRyeSkpO3JldHVybntzY3JpcHRzOmFsbEZpbGVzLmZpbHRlcih2PT52LmVuZHNXaXRoKCcuanMnKSksY3NzOmFsbEZpbGVzLmZpbHRlcih2PT52LmVuZHNXaXRoKCcuY3NzJykpfTt9KTt9ZnVuY3Rpb24gY3JlYXRlUm91dGVMb2FkZXIoYXNzZXRQcmVmaXgpe2NvbnN0IGVudHJ5cG9pbnRzPW5ldyBNYXAoKTtjb25zdCBsb2FkZWRTY3JpcHRzPW5ldyBNYXAoKTtjb25zdCBzdHlsZVNoZWV0cz1uZXcgTWFwKCk7Y29uc3Qgcm91dGVzPW5ldyBNYXAoKTtmdW5jdGlvbiBtYXliZUV4ZWN1dGVTY3JpcHQoc3JjKXtsZXQgcHJvbT1sb2FkZWRTY3JpcHRzLmdldChzcmMpO2lmKHByb20pe3JldHVybiBwcm9tO30vLyBTa2lwIGV4ZWN1dGluZyBzY3JpcHQgaWYgaXQncyBhbHJlYWR5IGluIHRoZSBET006XG5pZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBzY3JpcHRbc3JjXj1cIiR7c3JjfVwiXWApKXtyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7fWxvYWRlZFNjcmlwdHMuc2V0KHNyYyxwcm9tPWFwcGVuZFNjcmlwdChzcmMpKTtyZXR1cm4gcHJvbTt9ZnVuY3Rpb24gZmV0Y2hTdHlsZVNoZWV0KGhyZWYpe2xldCBwcm9tPXN0eWxlU2hlZXRzLmdldChocmVmKTtpZihwcm9tKXtyZXR1cm4gcHJvbTt9c3R5bGVTaGVldHMuc2V0KGhyZWYscHJvbT1mZXRjaChocmVmKS50aGVuKHJlcz0+e2lmKCFyZXMub2spe3Rocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3R5bGVzaGVldDogJHtocmVmfWApO31yZXR1cm4gcmVzLnRleHQoKS50aGVuKHRleHQ9Pih7aHJlZjpocmVmLGNvbnRlbnQ6dGV4dH0pKTt9KS5jYXRjaChlcnI9Pnt0aHJvdyBtYXJrQXNzZXRFcnJvcihlcnIpO30pKTtyZXR1cm4gcHJvbTt9cmV0dXJue3doZW5FbnRyeXBvaW50KHJvdXRlKXtyZXR1cm4gd2l0aEZ1dHVyZShyb3V0ZSxlbnRyeXBvaW50cyk7fSxvbkVudHJ5cG9pbnQocm91dGUsZXhlY3V0ZSl7UHJvbWlzZS5yZXNvbHZlKGV4ZWN1dGUpLnRoZW4oZm49PmZuKCkpLnRoZW4oZXhwb3J0cz0+KHtjb21wb25lbnQ6ZXhwb3J0cyYmZXhwb3J0cy5kZWZhdWx0fHxleHBvcnRzLGV4cG9ydHM6ZXhwb3J0c30pLGVycj0+KHtlcnJvcjplcnJ9KSkudGhlbihpbnB1dD0+e2NvbnN0IG9sZD1lbnRyeXBvaW50cy5nZXQocm91dGUpO2VudHJ5cG9pbnRzLnNldChyb3V0ZSxpbnB1dCk7aWYob2xkJiYncmVzb2x2ZSdpbiBvbGQpb2xkLnJlc29sdmUoaW5wdXQpO30pO30sbG9hZFJvdXRlKHJvdXRlKXtyZXR1cm4gd2l0aEZ1dHVyZShyb3V0ZSxyb3V0ZXMsYXN5bmMoKT0+e3RyeXtjb25zdHtzY3JpcHRzLGNzc309YXdhaXQgZ2V0RmlsZXNGb3JSb3V0ZShhc3NldFByZWZpeCxyb3V0ZSk7Y29uc3RbLHN0eWxlc109YXdhaXQgUHJvbWlzZS5hbGwoW2VudHJ5cG9pbnRzLmhhcyhyb3V0ZSk/W106UHJvbWlzZS5hbGwoc2NyaXB0cy5tYXAobWF5YmVFeGVjdXRlU2NyaXB0KSksUHJvbWlzZS5hbGwoY3NzLm1hcChmZXRjaFN0eWxlU2hlZXQpKV0pO2NvbnN0IGVudHJ5cG9pbnQ9YXdhaXQgcmVzb2x2ZVByb21pc2VXaXRoVGltZW91dCh0aGlzLndoZW5FbnRyeXBvaW50KHJvdXRlKSxNU19NQVhfSURMRV9ERUxBWSxtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoYFJvdXRlIGRpZCBub3QgY29tcGxldGUgbG9hZGluZzogJHtyb3V0ZX1gKSkpO2NvbnN0IHJlcz1PYmplY3QuYXNzaWduKHtzdHlsZXN9LGVudHJ5cG9pbnQpO3JldHVybidlcnJvcidpbiBlbnRyeXBvaW50P2VudHJ5cG9pbnQ6cmVzO31jYXRjaChlcnIpe3JldHVybntlcnJvcjplcnJ9O319KTt9LHByZWZldGNoKHJvdXRlKXsvLyBodHRwczovL2dpdGh1Yi5jb20vR29vZ2xlQ2hyb21lTGFicy9xdWlja2xpbmsvYmxvYi80NTNhNjYxZmExZmE5NDBlMmQyZTA0NDQ1MjM5OGUzOGM2N2E5OGZiL3NyYy9pbmRleC5tanMjTDExNS1MMTE4XG4vLyBMaWNlbnNlOiBBcGFjaGUgMi4wXG5sZXQgY247aWYoY249bmF2aWdhdG9yLmNvbm5lY3Rpb24pey8vIERvbid0IHByZWZldGNoIGlmIHVzaW5nIDJHIG9yIGlmIFNhdmUtRGF0YSBpcyBlbmFibGVkLlxuaWYoY24uc2F2ZURhdGF8fC8yZy8udGVzdChjbi5lZmZlY3RpdmVUeXBlKSlyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7fXJldHVybiBnZXRGaWxlc0ZvclJvdXRlKGFzc2V0UHJlZml4LHJvdXRlKS50aGVuKG91dHB1dD0+UHJvbWlzZS5hbGwoY2FuUHJlZmV0Y2g/b3V0cHV0LnNjcmlwdHMubWFwKHNjcmlwdD0+cHJlZmV0Y2hWaWFEb20oc2NyaXB0LCdzY3JpcHQnKSk6W10pKS50aGVuKCgpPT57KDAsX3JlcXVlc3RJZGxlQ2FsbGJhY2sucmVxdWVzdElkbGVDYWxsYmFjaykoKCk9PnRoaXMubG9hZFJvdXRlKHJvdXRlKSk7fSkuY2F0Y2goLy8gc3dhbGxvdyBwcmVmZXRjaCBlcnJvcnNcbigpPT57fSk7fX07fXZhciBfZGVmYXVsdD1jcmVhdGVSb3V0ZUxvYWRlcjtleHBvcnRzLmRlZmF1bHQ9X2RlZmF1bHQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yb3V0ZS1sb2FkZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkPXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmRcIik7dmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMudXNlUm91dGVyPXVzZVJvdXRlcjtleHBvcnRzLm1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZT1tYWtlUHVibGljUm91dGVySW5zdGFuY2U7ZXhwb3J0cy5jcmVhdGVSb3V0ZXI9ZXhwb3J0cy53aXRoUm91dGVyPWV4cG9ydHMuZGVmYXVsdD12b2lkIDA7dmFyIF9yZWFjdD1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7dmFyIF9yb3V0ZXIyPV9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlclwiKSk7ZXhwb3J0cy5Sb3V0ZXI9X3JvdXRlcjIuZGVmYXVsdDtleHBvcnRzLk5leHRSb3V0ZXI9X3JvdXRlcjIuTmV4dFJvdXRlcjt2YXIgX3JvdXRlckNvbnRleHQ9cmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dFwiKTt2YXIgX3dpdGhSb3V0ZXI9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi93aXRoLXJvdXRlclwiKSk7ZXhwb3J0cy53aXRoUm91dGVyPV93aXRoUm91dGVyLmRlZmF1bHQ7LyogZ2xvYmFsIHdpbmRvdyAqL2NvbnN0IHNpbmdsZXRvblJvdXRlcj17cm91dGVyOm51bGwsLy8gaG9sZHMgdGhlIGFjdHVhbCByb3V0ZXIgaW5zdGFuY2VcbnJlYWR5Q2FsbGJhY2tzOltdLHJlYWR5KGNiKXtpZih0aGlzLnJvdXRlcilyZXR1cm4gY2IoKTtpZih0eXBlb2Ygd2luZG93IT09J3VuZGVmaW5lZCcpe3RoaXMucmVhZHlDYWxsYmFja3MucHVzaChjYik7fX19Oy8vIENyZWF0ZSBwdWJsaWMgcHJvcGVydGllcyBhbmQgbWV0aG9kcyBvZiB0aGUgcm91dGVyIGluIHRoZSBzaW5nbGV0b25Sb3V0ZXJcbmNvbnN0IHVybFByb3BlcnR5RmllbGRzPVsncGF0aG5hbWUnLCdyb3V0ZScsJ3F1ZXJ5JywnYXNQYXRoJywnY29tcG9uZW50cycsJ2lzRmFsbGJhY2snLCdiYXNlUGF0aCcsJ2xvY2FsZScsJ2xvY2FsZXMnLCdkZWZhdWx0TG9jYWxlJywnaXNSZWFkeScsJ2lzUHJldmlldycsJ2lzTG9jYWxlRG9tYWluJ107Y29uc3Qgcm91dGVyRXZlbnRzPVsncm91dGVDaGFuZ2VTdGFydCcsJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywncm91dGVDaGFuZ2VFcnJvcicsJ2hhc2hDaGFuZ2VTdGFydCcsJ2hhc2hDaGFuZ2VDb21wbGV0ZSddO2NvbnN0IGNvcmVNZXRob2RGaWVsZHM9WydwdXNoJywncmVwbGFjZScsJ3JlbG9hZCcsJ2JhY2snLCdwcmVmZXRjaCcsJ2JlZm9yZVBvcFN0YXRlJ107Ly8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwnZXZlbnRzJyx7Z2V0KCl7cmV0dXJuIF9yb3V0ZXIyLmRlZmF1bHQuZXZlbnRzO319KTt1cmxQcm9wZXJ0eUZpZWxkcy5mb3JFYWNoKGZpZWxkPT57Ly8gSGVyZSB3ZSBuZWVkIHRvIHVzZSBPYmplY3QuZGVmaW5lUHJvcGVydHkgYmVjYXVzZSwgd2UgbmVlZCB0byByZXR1cm5cbi8vIHRoZSBwcm9wZXJ0eSBhc3NpZ25lZCB0byB0aGUgYWN0dWFsIHJvdXRlclxuLy8gVGhlIHZhbHVlIG1pZ2h0IGdldCBjaGFuZ2VkIGFzIHdlIGNoYW5nZSByb3V0ZXMgYW5kIHRoaXMgaXMgdGhlXG4vLyBwcm9wZXIgd2F5IHRvIGFjY2VzcyBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlcixmaWVsZCx7Z2V0KCl7Y29uc3Qgcm91dGVyPWdldFJvdXRlcigpO3JldHVybiByb3V0ZXJbZmllbGRdO319KTt9KTtjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goZmllbGQ9PnsvLyBXZSBkb24ndCByZWFsbHkga25vdyB0aGUgdHlwZXMgaGVyZSwgc28gd2UgYWRkIHRoZW0gbGF0ZXIgaW5zdGVhZFxuO3NpbmdsZXRvblJvdXRlcltmaWVsZF09KC4uLmFyZ3MpPT57Y29uc3Qgcm91dGVyPWdldFJvdXRlcigpO3JldHVybiByb3V0ZXJbZmllbGRdKC4uLmFyZ3MpO307fSk7cm91dGVyRXZlbnRzLmZvckVhY2goZXZlbnQ9PntzaW5nbGV0b25Sb3V0ZXIucmVhZHkoKCk9Pntfcm91dGVyMi5kZWZhdWx0LmV2ZW50cy5vbihldmVudCwoLi4uYXJncyk9Pntjb25zdCBldmVudEZpZWxkPWBvbiR7ZXZlbnQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCl9JHtldmVudC5zdWJzdHJpbmcoMSl9YDtjb25zdCBfc2luZ2xldG9uUm91dGVyPXNpbmdsZXRvblJvdXRlcjtpZihfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKXt0cnl7X3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSguLi5hcmdzKTt9Y2F0Y2goZXJyKXtjb25zb2xlLmVycm9yKGBFcnJvciB3aGVuIHJ1bm5pbmcgdGhlIFJvdXRlciBldmVudDogJHtldmVudEZpZWxkfWApO2NvbnNvbGUuZXJyb3IoYCR7ZXJyLm1lc3NhZ2V9XFxuJHtlcnIuc3RhY2t9YCk7fX19KTt9KTt9KTtmdW5jdGlvbiBnZXRSb3V0ZXIoKXtpZighc2luZ2xldG9uUm91dGVyLnJvdXRlcil7Y29uc3QgbWVzc2FnZT0nTm8gcm91dGVyIGluc3RhbmNlIGZvdW5kLlxcbicrJ1lvdSBzaG91bGQgb25seSB1c2UgXCJuZXh0L3JvdXRlclwiIGluc2lkZSB0aGUgY2xpZW50IHNpZGUgb2YgeW91ciBhcHAuXFxuJzt0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7fXJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyO30vLyBFeHBvcnQgdGhlIHNpbmdsZXRvblJvdXRlciBhbmQgdGhpcyBpcyB0aGUgcHVibGljIEFQSS5cbnZhciBfZGVmYXVsdD1zaW5nbGV0b25Sb3V0ZXI7Ly8gUmVleHBvcnQgdGhlIHdpdGhSb3V0ZSBIT0NcbmV4cG9ydHMuZGVmYXVsdD1fZGVmYXVsdDtmdW5jdGlvbiB1c2VSb3V0ZXIoKXtyZXR1cm4gX3JlYWN0LmRlZmF1bHQudXNlQ29udGV4dChfcm91dGVyQ29udGV4dC5Sb3V0ZXJDb250ZXh0KTt9Ly8gSU5URVJOQUwgQVBJU1xuLy8gLS0tLS0tLS0tLS0tLVxuLy8gKGRvIG5vdCB1c2UgZm9sbG93aW5nIGV4cG9ydHMgaW5zaWRlIHRoZSBhcHApXG4vLyBDcmVhdGUgYSByb3V0ZXIgYW5kIGFzc2lnbiBpdCBhcyB0aGUgc2luZ2xldG9uIGluc3RhbmNlLlxuLy8gVGhpcyBpcyB1c2VkIGluIGNsaWVudCBzaWRlIHdoZW4gd2UgYXJlIGluaXRpbGl6aW5nIHRoZSBhcHAuXG4vLyBUaGlzIHNob3VsZCAqKm5vdCoqIHVzZSBpbnNpZGUgdGhlIHNlcnZlci5cbmNvbnN0IGNyZWF0ZVJvdXRlcj0oLi4uYXJncyk9PntzaW5nbGV0b25Sb3V0ZXIucm91dGVyPW5ldyBfcm91dGVyMi5kZWZhdWx0KC4uLmFyZ3MpO3NpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcy5mb3JFYWNoKGNiPT5jYigpKTtzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3M9W107cmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXI7fTsvLyBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gY3JlYXRlIHRoZSBgd2l0aFJvdXRlcmAgcm91dGVyIGluc3RhbmNlXG5leHBvcnRzLmNyZWF0ZVJvdXRlcj1jcmVhdGVSb3V0ZXI7ZnVuY3Rpb24gbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlKHJvdXRlcil7Y29uc3QgX3JvdXRlcj1yb3V0ZXI7Y29uc3QgaW5zdGFuY2U9e307Zm9yKGNvbnN0IHByb3BlcnR5IG9mIHVybFByb3BlcnR5RmllbGRzKXtpZih0eXBlb2YgX3JvdXRlcltwcm9wZXJ0eV09PT0nb2JqZWN0Jyl7aW5zdGFuY2VbcHJvcGVydHldPU9iamVjdC5hc3NpZ24oQXJyYXkuaXNBcnJheShfcm91dGVyW3Byb3BlcnR5XSk/W106e30sX3JvdXRlcltwcm9wZXJ0eV0pOy8vIG1ha2VzIHN1cmUgcXVlcnkgaXMgbm90IHN0YXRlZnVsXG5jb250aW51ZTt9aW5zdGFuY2VbcHJvcGVydHldPV9yb3V0ZXJbcHJvcGVydHldO30vLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5pbnN0YW5jZS5ldmVudHM9X3JvdXRlcjIuZGVmYXVsdC5ldmVudHM7Y29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKGZpZWxkPT57aW5zdGFuY2VbZmllbGRdPSguLi5hcmdzKT0+e3JldHVybiBfcm91dGVyW2ZpZWxkXSguLi5hcmdzKTt9O30pO3JldHVybiBpbnN0YW5jZTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yb3V0ZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy51c2VJbnRlcnNlY3Rpb249dXNlSW50ZXJzZWN0aW9uO3ZhciBfcmVhY3Q9cmVxdWlyZShcInJlYWN0XCIpO3ZhciBfcmVxdWVzdElkbGVDYWxsYmFjaz1yZXF1aXJlKFwiLi9yZXF1ZXN0LWlkbGUtY2FsbGJhY2tcIik7Y29uc3QgaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXI9dHlwZW9mIEludGVyc2VjdGlvbk9ic2VydmVyIT09J3VuZGVmaW5lZCc7ZnVuY3Rpb24gdXNlSW50ZXJzZWN0aW9uKHtyb290TWFyZ2luLGRpc2FibGVkfSl7Y29uc3QgaXNEaXNhYmxlZD1kaXNhYmxlZHx8IWhhc0ludGVyc2VjdGlvbk9ic2VydmVyO2NvbnN0IHVub2JzZXJ2ZT0oMCxfcmVhY3QudXNlUmVmKSgpO2NvbnN0W3Zpc2libGUsc2V0VmlzaWJsZV09KDAsX3JlYWN0LnVzZVN0YXRlKShmYWxzZSk7Y29uc3Qgc2V0UmVmPSgwLF9yZWFjdC51c2VDYWxsYmFjaykoZWw9PntpZih1bm9ic2VydmUuY3VycmVudCl7dW5vYnNlcnZlLmN1cnJlbnQoKTt1bm9ic2VydmUuY3VycmVudD11bmRlZmluZWQ7fWlmKGlzRGlzYWJsZWR8fHZpc2libGUpcmV0dXJuO2lmKGVsJiZlbC50YWdOYW1lKXt1bm9ic2VydmUuY3VycmVudD1vYnNlcnZlKGVsLGlzVmlzaWJsZT0+aXNWaXNpYmxlJiZzZXRWaXNpYmxlKGlzVmlzaWJsZSkse3Jvb3RNYXJnaW59KTt9fSxbaXNEaXNhYmxlZCxyb290TWFyZ2luLHZpc2libGVdKTsoMCxfcmVhY3QudXNlRWZmZWN0KSgoKT0+e2lmKCFoYXNJbnRlcnNlY3Rpb25PYnNlcnZlcil7aWYoIXZpc2libGUpe2NvbnN0IGlkbGVDYWxsYmFjaz0oMCxfcmVxdWVzdElkbGVDYWxsYmFjay5yZXF1ZXN0SWRsZUNhbGxiYWNrKSgoKT0+c2V0VmlzaWJsZSh0cnVlKSk7cmV0dXJuKCk9PigwLF9yZXF1ZXN0SWRsZUNhbGxiYWNrLmNhbmNlbElkbGVDYWxsYmFjaykoaWRsZUNhbGxiYWNrKTt9fX0sW3Zpc2libGVdKTtyZXR1cm5bc2V0UmVmLHZpc2libGVdO31mdW5jdGlvbiBvYnNlcnZlKGVsZW1lbnQsY2FsbGJhY2ssb3B0aW9ucyl7Y29uc3R7aWQsb2JzZXJ2ZXIsZWxlbWVudHN9PWNyZWF0ZU9ic2VydmVyKG9wdGlvbnMpO2VsZW1lbnRzLnNldChlbGVtZW50LGNhbGxiYWNrKTtvYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQpO3JldHVybiBmdW5jdGlvbiB1bm9ic2VydmUoKXtlbGVtZW50cy5kZWxldGUoZWxlbWVudCk7b2JzZXJ2ZXIudW5vYnNlcnZlKGVsZW1lbnQpOy8vIERlc3Ryb3kgb2JzZXJ2ZXIgd2hlbiB0aGVyZSdzIG5vdGhpbmcgbGVmdCB0byB3YXRjaDpcbmlmKGVsZW1lbnRzLnNpemU9PT0wKXtvYnNlcnZlci5kaXNjb25uZWN0KCk7b2JzZXJ2ZXJzLmRlbGV0ZShpZCk7fX07fWNvbnN0IG9ic2VydmVycz1uZXcgTWFwKCk7ZnVuY3Rpb24gY3JlYXRlT2JzZXJ2ZXIob3B0aW9ucyl7Y29uc3QgaWQ9b3B0aW9ucy5yb290TWFyZ2lufHwnJztsZXQgaW5zdGFuY2U9b2JzZXJ2ZXJzLmdldChpZCk7aWYoaW5zdGFuY2Upe3JldHVybiBpbnN0YW5jZTt9Y29uc3QgZWxlbWVudHM9bmV3IE1hcCgpO2NvbnN0IG9ic2VydmVyPW5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihlbnRyaWVzPT57ZW50cmllcy5mb3JFYWNoKGVudHJ5PT57Y29uc3QgY2FsbGJhY2s9ZWxlbWVudHMuZ2V0KGVudHJ5LnRhcmdldCk7Y29uc3QgaXNWaXNpYmxlPWVudHJ5LmlzSW50ZXJzZWN0aW5nfHxlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbz4wO2lmKGNhbGxiYWNrJiZpc1Zpc2libGUpe2NhbGxiYWNrKGlzVmlzaWJsZSk7fX0pO30sb3B0aW9ucyk7b2JzZXJ2ZXJzLnNldChpZCxpbnN0YW5jZT17aWQsb2JzZXJ2ZXIsZWxlbWVudHN9KTtyZXR1cm4gaW5zdGFuY2U7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLWludGVyc2VjdGlvbi5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjt2YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5kZWZhdWx0PXdpdGhSb3V0ZXI7dmFyIF9yZWFjdD1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7dmFyIF9yb3V0ZXI9cmVxdWlyZShcIi4vcm91dGVyXCIpO2Z1bmN0aW9uIHdpdGhSb3V0ZXIoQ29tcG9zZWRDb21wb25lbnQpe2Z1bmN0aW9uIFdpdGhSb3V0ZXJXcmFwcGVyKHByb3BzKXtyZXR1cm4vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChDb21wb3NlZENvbXBvbmVudCxPYmplY3QuYXNzaWduKHtyb3V0ZXI6KDAsX3JvdXRlci51c2VSb3V0ZXIpKCl9LHByb3BzKSk7fVdpdGhSb3V0ZXJXcmFwcGVyLmdldEluaXRpYWxQcm9wcz1Db21wb3NlZENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMvLyBUaGlzIGlzIG5lZWRlZCB0byBhbGxvdyBjaGVja2luZyBmb3IgY3VzdG9tIGdldEluaXRpYWxQcm9wcyBpbiBfYXBwXG47V2l0aFJvdXRlcldyYXBwZXIub3JpZ0dldEluaXRpYWxQcm9wcz1Db21wb3NlZENvbXBvbmVudC5vcmlnR2V0SW5pdGlhbFByb3BzO2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXtjb25zdCBuYW1lPUNvbXBvc2VkQ29tcG9uZW50LmRpc3BsYXlOYW1lfHxDb21wb3NlZENvbXBvbmVudC5uYW1lfHwnVW5rbm93bic7V2l0aFJvdXRlcldyYXBwZXIuZGlzcGxheU5hbWU9YHdpdGhSb3V0ZXIoJHtuYW1lfSlgO31yZXR1cm4gV2l0aFJvdXRlcldyYXBwZXI7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9d2l0aC1yb3V0ZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vKipcbiAqIFRva2VuaXplIGlucHV0IHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gbGV4ZXIoc3RyKSB7XG4gICAgdmFyIHRva2VucyA9IFtdO1xuICAgIHZhciBpID0gMDtcbiAgICB3aGlsZSAoaSA8IHN0ci5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGNoYXIgPSBzdHJbaV07XG4gICAgICAgIGlmIChjaGFyID09PSBcIipcIiB8fCBjaGFyID09PSBcIitcIiB8fCBjaGFyID09PSBcIj9cIikge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIk1PRElGSUVSXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCJcXFxcXCIpIHtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJFU0NBUEVEX0NIQVJcIiwgaW5kZXg6IGkrKywgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwie1wiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiT1BFTlwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwifVwiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiQ0xPU0VcIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIjpcIikge1xuICAgICAgICAgICAgdmFyIG5hbWUgPSBcIlwiO1xuICAgICAgICAgICAgdmFyIGogPSBpICsgMTtcbiAgICAgICAgICAgIHdoaWxlIChqIDwgc3RyLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHZhciBjb2RlID0gc3RyLmNoYXJDb2RlQXQoaik7XG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIC8vIGAwLTlgXG4gICAgICAgICAgICAgICAgKGNvZGUgPj0gNDggJiYgY29kZSA8PSA1NykgfHxcbiAgICAgICAgICAgICAgICAgICAgLy8gYEEtWmBcbiAgICAgICAgICAgICAgICAgICAgKGNvZGUgPj0gNjUgJiYgY29kZSA8PSA5MCkgfHxcbiAgICAgICAgICAgICAgICAgICAgLy8gYGEtemBcbiAgICAgICAgICAgICAgICAgICAgKGNvZGUgPj0gOTcgJiYgY29kZSA8PSAxMjIpIHx8XG4gICAgICAgICAgICAgICAgICAgIC8vIGBfYFxuICAgICAgICAgICAgICAgICAgICBjb2RlID09PSA5NSkge1xuICAgICAgICAgICAgICAgICAgICBuYW1lICs9IHN0cltqKytdO1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIW5hbWUpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk1pc3NpbmcgcGFyYW1ldGVyIG5hbWUgYXQgXCIgKyBpKTtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJOQU1FXCIsIGluZGV4OiBpLCB2YWx1ZTogbmFtZSB9KTtcbiAgICAgICAgICAgIGkgPSBqO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwiKFwiKSB7XG4gICAgICAgICAgICB2YXIgY291bnQgPSAxO1xuICAgICAgICAgICAgdmFyIHBhdHRlcm4gPSBcIlwiO1xuICAgICAgICAgICAgdmFyIGogPSBpICsgMTtcbiAgICAgICAgICAgIGlmIChzdHJbal0gPT09IFwiP1wiKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlBhdHRlcm4gY2Fubm90IHN0YXJ0IHdpdGggXFxcIj9cXFwiIGF0IFwiICsgaik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3aGlsZSAoaiA8IHN0ci5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBpZiAoc3RyW2pdID09PSBcIlxcXFxcIikge1xuICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuICs9IHN0cltqKytdICsgc3RyW2orK107XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoc3RyW2pdID09PSBcIilcIikge1xuICAgICAgICAgICAgICAgICAgICBjb3VudC0tO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY291bnQgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGorKztcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHN0cltqXSA9PT0gXCIoXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0cltqICsgMV0gIT09IFwiP1wiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2FwdHVyaW5nIGdyb3VwcyBhcmUgbm90IGFsbG93ZWQgYXQgXCIgKyBqKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwYXR0ZXJuICs9IHN0cltqKytdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNvdW50KVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJVbmJhbGFuY2VkIHBhdHRlcm4gYXQgXCIgKyBpKTtcbiAgICAgICAgICAgIGlmICghcGF0dGVybilcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiTWlzc2luZyBwYXR0ZXJuIGF0IFwiICsgaSk7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiUEFUVEVSTlwiLCBpbmRleDogaSwgdmFsdWU6IHBhdHRlcm4gfSk7XG4gICAgICAgICAgICBpID0gajtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJDSEFSXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgfVxuICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJFTkRcIiwgaW5kZXg6IGksIHZhbHVlOiBcIlwiIH0pO1xuICAgIHJldHVybiB0b2tlbnM7XG59XG4vKipcbiAqIFBhcnNlIGEgc3RyaW5nIGZvciB0aGUgcmF3IHRva2Vucy5cbiAqL1xuZnVuY3Rpb24gcGFyc2Uoc3RyLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgdG9rZW5zID0gbGV4ZXIoc3RyKTtcbiAgICB2YXIgX2EgPSBvcHRpb25zLnByZWZpeGVzLCBwcmVmaXhlcyA9IF9hID09PSB2b2lkIDAgPyBcIi4vXCIgOiBfYTtcbiAgICB2YXIgZGVmYXVsdFBhdHRlcm4gPSBcIlteXCIgKyBlc2NhcGVTdHJpbmcob3B0aW9ucy5kZWxpbWl0ZXIgfHwgXCIvIz9cIikgKyBcIl0rP1wiO1xuICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICB2YXIga2V5ID0gMDtcbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIHBhdGggPSBcIlwiO1xuICAgIHZhciB0cnlDb25zdW1lID0gZnVuY3Rpb24gKHR5cGUpIHtcbiAgICAgICAgaWYgKGkgPCB0b2tlbnMubGVuZ3RoICYmIHRva2Vuc1tpXS50eXBlID09PSB0eXBlKVxuICAgICAgICAgICAgcmV0dXJuIHRva2Vuc1tpKytdLnZhbHVlO1xuICAgIH07XG4gICAgdmFyIG11c3RDb25zdW1lID0gZnVuY3Rpb24gKHR5cGUpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gdHJ5Q29uc3VtZSh0eXBlKTtcbiAgICAgICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIHZhciBfYSA9IHRva2Vuc1tpXSwgbmV4dFR5cGUgPSBfYS50eXBlLCBpbmRleCA9IF9hLmluZGV4O1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiVW5leHBlY3RlZCBcIiArIG5leHRUeXBlICsgXCIgYXQgXCIgKyBpbmRleCArIFwiLCBleHBlY3RlZCBcIiArIHR5cGUpO1xuICAgIH07XG4gICAgdmFyIGNvbnN1bWVUZXh0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcmVzdWx0ID0gXCJcIjtcbiAgICAgICAgdmFyIHZhbHVlO1xuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgd2hpbGUgKCh2YWx1ZSA9IHRyeUNvbnN1bWUoXCJDSEFSXCIpIHx8IHRyeUNvbnN1bWUoXCJFU0NBUEVEX0NIQVJcIikpKSB7XG4gICAgICAgICAgICByZXN1bHQgKz0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuICAgIHdoaWxlIChpIDwgdG9rZW5zLmxlbmd0aCkge1xuICAgICAgICB2YXIgY2hhciA9IHRyeUNvbnN1bWUoXCJDSEFSXCIpO1xuICAgICAgICB2YXIgbmFtZSA9IHRyeUNvbnN1bWUoXCJOQU1FXCIpO1xuICAgICAgICB2YXIgcGF0dGVybiA9IHRyeUNvbnN1bWUoXCJQQVRURVJOXCIpO1xuICAgICAgICBpZiAobmFtZSB8fCBwYXR0ZXJuKSB7XG4gICAgICAgICAgICB2YXIgcHJlZml4ID0gY2hhciB8fCBcIlwiO1xuICAgICAgICAgICAgaWYgKHByZWZpeGVzLmluZGV4T2YocHJlZml4KSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICBwYXRoICs9IHByZWZpeDtcbiAgICAgICAgICAgICAgICBwcmVmaXggPSBcIlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHBhdGgpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChwYXRoKTtcbiAgICAgICAgICAgICAgICBwYXRoID0gXCJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBuYW1lIHx8IGtleSsrLFxuICAgICAgICAgICAgICAgIHByZWZpeDogcHJlZml4LFxuICAgICAgICAgICAgICAgIHN1ZmZpeDogXCJcIixcbiAgICAgICAgICAgICAgICBwYXR0ZXJuOiBwYXR0ZXJuIHx8IGRlZmF1bHRQYXR0ZXJuLFxuICAgICAgICAgICAgICAgIG1vZGlmaWVyOiB0cnlDb25zdW1lKFwiTU9ESUZJRVJcIikgfHwgXCJcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgdmFsdWUgPSBjaGFyIHx8IHRyeUNvbnN1bWUoXCJFU0NBUEVEX0NIQVJcIik7XG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgcGF0aCArPSB2YWx1ZTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwYXRoKSB7XG4gICAgICAgICAgICByZXN1bHQucHVzaChwYXRoKTtcbiAgICAgICAgICAgIHBhdGggPSBcIlwiO1xuICAgICAgICB9XG4gICAgICAgIHZhciBvcGVuID0gdHJ5Q29uc3VtZShcIk9QRU5cIik7XG4gICAgICAgIGlmIChvcGVuKSB7XG4gICAgICAgICAgICB2YXIgcHJlZml4ID0gY29uc3VtZVRleHQoKTtcbiAgICAgICAgICAgIHZhciBuYW1lXzEgPSB0cnlDb25zdW1lKFwiTkFNRVwiKSB8fCBcIlwiO1xuICAgICAgICAgICAgdmFyIHBhdHRlcm5fMSA9IHRyeUNvbnN1bWUoXCJQQVRURVJOXCIpIHx8IFwiXCI7XG4gICAgICAgICAgICB2YXIgc3VmZml4ID0gY29uc3VtZVRleHQoKTtcbiAgICAgICAgICAgIG11c3RDb25zdW1lKFwiQ0xPU0VcIik7XG4gICAgICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogbmFtZV8xIHx8IChwYXR0ZXJuXzEgPyBrZXkrKyA6IFwiXCIpLFxuICAgICAgICAgICAgICAgIHBhdHRlcm46IG5hbWVfMSAmJiAhcGF0dGVybl8xID8gZGVmYXVsdFBhdHRlcm4gOiBwYXR0ZXJuXzEsXG4gICAgICAgICAgICAgICAgcHJlZml4OiBwcmVmaXgsXG4gICAgICAgICAgICAgICAgc3VmZml4OiBzdWZmaXgsXG4gICAgICAgICAgICAgICAgbW9kaWZpZXI6IHRyeUNvbnN1bWUoXCJNT0RJRklFUlwiKSB8fCBcIlwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIG11c3RDb25zdW1lKFwiRU5EXCIpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuZXhwb3J0cy5wYXJzZSA9IHBhcnNlO1xuLyoqXG4gKiBDb21waWxlIGEgc3RyaW5nIHRvIGEgdGVtcGxhdGUgZnVuY3Rpb24gZm9yIHRoZSBwYXRoLlxuICovXG5mdW5jdGlvbiBjb21waWxlKHN0ciwgb3B0aW9ucykge1xuICAgIHJldHVybiB0b2tlbnNUb0Z1bmN0aW9uKHBhcnNlKHN0ciwgb3B0aW9ucyksIG9wdGlvbnMpO1xufVxuZXhwb3J0cy5jb21waWxlID0gY29tcGlsZTtcbi8qKlxuICogRXhwb3NlIGEgbWV0aG9kIGZvciB0cmFuc2Zvcm1pbmcgdG9rZW5zIGludG8gdGhlIHBhdGggZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIHRva2Vuc1RvRnVuY3Rpb24odG9rZW5zLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgcmVGbGFncyA9IGZsYWdzKG9wdGlvbnMpO1xuICAgIHZhciBfYSA9IG9wdGlvbnMuZW5jb2RlLCBlbmNvZGUgPSBfYSA9PT0gdm9pZCAwID8gZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHg7IH0gOiBfYSwgX2IgPSBvcHRpb25zLnZhbGlkYXRlLCB2YWxpZGF0ZSA9IF9iID09PSB2b2lkIDAgPyB0cnVlIDogX2I7XG4gICAgLy8gQ29tcGlsZSBhbGwgdGhlIHRva2VucyBpbnRvIHJlZ2V4cHMuXG4gICAgdmFyIG1hdGNoZXMgPSB0b2tlbnMubWFwKGZ1bmN0aW9uICh0b2tlbikge1xuICAgICAgICBpZiAodHlwZW9mIHRva2VuID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFJlZ0V4cChcIl4oPzpcIiArIHRva2VuLnBhdHRlcm4gKyBcIikkXCIsIHJlRmxhZ3MpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIHZhciBwYXRoID0gXCJcIjtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0b2tlbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciB0b2tlbiA9IHRva2Vuc1tpXTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdG9rZW4gPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICBwYXRoICs9IHRva2VuO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHZhbHVlID0gZGF0YSA/IGRhdGFbdG9rZW4ubmFtZV0gOiB1bmRlZmluZWQ7XG4gICAgICAgICAgICB2YXIgb3B0aW9uYWwgPSB0b2tlbi5tb2RpZmllciA9PT0gXCI/XCIgfHwgdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiO1xuICAgICAgICAgICAgdmFyIHJlcGVhdCA9IHRva2VuLm1vZGlmaWVyID09PSBcIipcIiB8fCB0b2tlbi5tb2RpZmllciA9PT0gXCIrXCI7XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXJlcGVhdCkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBub3QgcmVwZWF0LCBidXQgZ290IGFuIGFycmF5XCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodmFsdWUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb25hbClcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBub3QgYmUgZW1wdHlcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdmFsdWUubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNlZ21lbnQgPSBlbmNvZGUodmFsdWVbal0sIHRva2VuKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbGlkYXRlICYmICFtYXRjaGVzW2ldLnRlc3Qoc2VnbWVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBhbGwgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBtYXRjaCBcXFwiXCIgKyB0b2tlbi5wYXR0ZXJuICsgXCJcXFwiLCBidXQgZ290IFxcXCJcIiArIHNlZ21lbnQgKyBcIlxcXCJcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcGF0aCArPSB0b2tlbi5wcmVmaXggKyBzZWdtZW50ICsgdG9rZW4uc3VmZml4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIgfHwgdHlwZW9mIHZhbHVlID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICAgICAgdmFyIHNlZ21lbnQgPSBlbmNvZGUoU3RyaW5nKHZhbHVlKSwgdG9rZW4pO1xuICAgICAgICAgICAgICAgIGlmICh2YWxpZGF0ZSAmJiAhbWF0Y2hlc1tpXS50ZXN0KHNlZ21lbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIG1hdGNoIFxcXCJcIiArIHRva2VuLnBhdHRlcm4gKyBcIlxcXCIsIGJ1dCBnb3QgXFxcIlwiICsgc2VnbWVudCArIFwiXFxcIlwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcGF0aCArPSB0b2tlbi5wcmVmaXggKyBzZWdtZW50ICsgdG9rZW4uc3VmZml4O1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG9wdGlvbmFsKVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgdmFyIHR5cGVPZk1lc3NhZ2UgPSByZXBlYXQgPyBcImFuIGFycmF5XCIgOiBcImEgc3RyaW5nXCI7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBiZSBcIiArIHR5cGVPZk1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwYXRoO1xuICAgIH07XG59XG5leHBvcnRzLnRva2Vuc1RvRnVuY3Rpb24gPSB0b2tlbnNUb0Z1bmN0aW9uO1xuLyoqXG4gKiBDcmVhdGUgcGF0aCBtYXRjaCBmdW5jdGlvbiBmcm9tIGBwYXRoLXRvLXJlZ2V4cGAgc3BlYy5cbiAqL1xuZnVuY3Rpb24gbWF0Y2goc3RyLCBvcHRpb25zKSB7XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICB2YXIgcmUgPSBwYXRoVG9SZWdleHAoc3RyLCBrZXlzLCBvcHRpb25zKTtcbiAgICByZXR1cm4gcmVnZXhwVG9GdW5jdGlvbihyZSwga2V5cywgb3B0aW9ucyk7XG59XG5leHBvcnRzLm1hdGNoID0gbWF0Y2g7XG4vKipcbiAqIENyZWF0ZSBhIHBhdGggbWF0Y2ggZnVuY3Rpb24gZnJvbSBgcGF0aC10by1yZWdleHBgIG91dHB1dC5cbiAqL1xuZnVuY3Rpb24gcmVnZXhwVG9GdW5jdGlvbihyZSwga2V5cywgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIF9hID0gb3B0aW9ucy5kZWNvZGUsIGRlY29kZSA9IF9hID09PSB2b2lkIDAgPyBmdW5jdGlvbiAoeCkgeyByZXR1cm4geDsgfSA6IF9hO1xuICAgIHJldHVybiBmdW5jdGlvbiAocGF0aG5hbWUpIHtcbiAgICAgICAgdmFyIG0gPSByZS5leGVjKHBhdGhuYW1lKTtcbiAgICAgICAgaWYgKCFtKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB2YXIgcGF0aCA9IG1bMF0sIGluZGV4ID0gbS5pbmRleDtcbiAgICAgICAgdmFyIHBhcmFtcyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgIHZhciBfbG9vcF8xID0gZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgICAgICAgICAgaWYgKG1baV0gPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJjb250aW51ZVwiO1xuICAgICAgICAgICAgdmFyIGtleSA9IGtleXNbaSAtIDFdO1xuICAgICAgICAgICAgaWYgKGtleS5tb2RpZmllciA9PT0gXCIqXCIgfHwga2V5Lm1vZGlmaWVyID09PSBcIitcIikge1xuICAgICAgICAgICAgICAgIHBhcmFtc1trZXkubmFtZV0gPSBtW2ldLnNwbGl0KGtleS5wcmVmaXggKyBrZXkuc3VmZml4KS5tYXAoZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkZWNvZGUodmFsdWUsIGtleSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBwYXJhbXNba2V5Lm5hbWVdID0gZGVjb2RlKG1baV0sIGtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgbS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgX2xvb3BfMShpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBwYXRoOiBwYXRoLCBpbmRleDogaW5kZXgsIHBhcmFtczogcGFyYW1zIH07XG4gICAgfTtcbn1cbmV4cG9ydHMucmVnZXhwVG9GdW5jdGlvbiA9IHJlZ2V4cFRvRnVuY3Rpb247XG4vKipcbiAqIEVzY2FwZSBhIHJlZ3VsYXIgZXhwcmVzc2lvbiBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIGVzY2FwZVN0cmluZyhzdHIpIHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoLyhbLisqPz1eIToke30oKVtcXF18L1xcXFxdKS9nLCBcIlxcXFwkMVwiKTtcbn1cbi8qKlxuICogR2V0IHRoZSBmbGFncyBmb3IgYSByZWdleHAgZnJvbSB0aGUgb3B0aW9ucy5cbiAqL1xuZnVuY3Rpb24gZmxhZ3Mob3B0aW9ucykge1xuICAgIHJldHVybiBvcHRpb25zICYmIG9wdGlvbnMuc2Vuc2l0aXZlID8gXCJcIiA6IFwiaVwiO1xufVxuLyoqXG4gKiBQdWxsIG91dCBrZXlzIGZyb20gYSByZWdleHAuXG4gKi9cbmZ1bmN0aW9uIHJlZ2V4cFRvUmVnZXhwKHBhdGgsIGtleXMpIHtcbiAgICBpZiAoIWtleXMpXG4gICAgICAgIHJldHVybiBwYXRoO1xuICAgIC8vIFVzZSBhIG5lZ2F0aXZlIGxvb2thaGVhZCB0byBtYXRjaCBvbmx5IGNhcHR1cmluZyBncm91cHMuXG4gICAgdmFyIGdyb3VwcyA9IHBhdGguc291cmNlLm1hdGNoKC9cXCgoPyFcXD8pL2cpO1xuICAgIGlmIChncm91cHMpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBncm91cHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGtleXMucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogaSxcbiAgICAgICAgICAgICAgICBwcmVmaXg6IFwiXCIsXG4gICAgICAgICAgICAgICAgc3VmZml4OiBcIlwiLFxuICAgICAgICAgICAgICAgIG1vZGlmaWVyOiBcIlwiLFxuICAgICAgICAgICAgICAgIHBhdHRlcm46IFwiXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBwYXRoO1xufVxuLyoqXG4gKiBUcmFuc2Zvcm0gYW4gYXJyYXkgaW50byBhIHJlZ2V4cC5cbiAqL1xuZnVuY3Rpb24gYXJyYXlUb1JlZ2V4cChwYXRocywga2V5cywgb3B0aW9ucykge1xuICAgIHZhciBwYXJ0cyA9IHBhdGhzLm1hcChmdW5jdGlvbiAocGF0aCkgeyByZXR1cm4gcGF0aFRvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpLnNvdXJjZTsgfSk7XG4gICAgcmV0dXJuIG5ldyBSZWdFeHAoXCIoPzpcIiArIHBhcnRzLmpvaW4oXCJ8XCIpICsgXCIpXCIsIGZsYWdzKG9wdGlvbnMpKTtcbn1cbi8qKlxuICogQ3JlYXRlIGEgcGF0aCByZWdleHAgZnJvbSBzdHJpbmcgaW5wdXQuXG4gKi9cbmZ1bmN0aW9uIHN0cmluZ1RvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdG9rZW5zVG9SZWdleHAocGFyc2UocGF0aCwgb3B0aW9ucyksIGtleXMsIG9wdGlvbnMpO1xufVxuLyoqXG4gKiBFeHBvc2UgYSBmdW5jdGlvbiBmb3IgdGFraW5nIHRva2VucyBhbmQgcmV0dXJuaW5nIGEgUmVnRXhwLlxuICovXG5mdW5jdGlvbiB0b2tlbnNUb1JlZ2V4cCh0b2tlbnMsIGtleXMsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciBfYSA9IG9wdGlvbnMuc3RyaWN0LCBzdHJpY3QgPSBfYSA9PT0gdm9pZCAwID8gZmFsc2UgOiBfYSwgX2IgPSBvcHRpb25zLnN0YXJ0LCBzdGFydCA9IF9iID09PSB2b2lkIDAgPyB0cnVlIDogX2IsIF9jID0gb3B0aW9ucy5lbmQsIGVuZCA9IF9jID09PSB2b2lkIDAgPyB0cnVlIDogX2MsIF9kID0gb3B0aW9ucy5lbmNvZGUsIGVuY29kZSA9IF9kID09PSB2b2lkIDAgPyBmdW5jdGlvbiAoeCkgeyByZXR1cm4geDsgfSA6IF9kO1xuICAgIHZhciBlbmRzV2l0aCA9IFwiW1wiICsgZXNjYXBlU3RyaW5nKG9wdGlvbnMuZW5kc1dpdGggfHwgXCJcIikgKyBcIl18JFwiO1xuICAgIHZhciBkZWxpbWl0ZXIgPSBcIltcIiArIGVzY2FwZVN0cmluZyhvcHRpb25zLmRlbGltaXRlciB8fCBcIi8jP1wiKSArIFwiXVwiO1xuICAgIHZhciByb3V0ZSA9IHN0YXJ0ID8gXCJeXCIgOiBcIlwiO1xuICAgIC8vIEl0ZXJhdGUgb3ZlciB0aGUgdG9rZW5zIGFuZCBjcmVhdGUgb3VyIHJlZ2V4cCBzdHJpbmcuXG4gICAgZm9yICh2YXIgX2kgPSAwLCB0b2tlbnNfMSA9IHRva2VuczsgX2kgPCB0b2tlbnNfMS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgdmFyIHRva2VuID0gdG9rZW5zXzFbX2ldO1xuICAgICAgICBpZiAodHlwZW9mIHRva2VuID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICByb3V0ZSArPSBlc2NhcGVTdHJpbmcoZW5jb2RlKHRva2VuKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YXIgcHJlZml4ID0gZXNjYXBlU3RyaW5nKGVuY29kZSh0b2tlbi5wcmVmaXgpKTtcbiAgICAgICAgICAgIHZhciBzdWZmaXggPSBlc2NhcGVTdHJpbmcoZW5jb2RlKHRva2VuLnN1ZmZpeCkpO1xuICAgICAgICAgICAgaWYgKHRva2VuLnBhdHRlcm4pIHtcbiAgICAgICAgICAgICAgICBpZiAoa2V5cylcbiAgICAgICAgICAgICAgICAgICAga2V5cy5wdXNoKHRva2VuKTtcbiAgICAgICAgICAgICAgICBpZiAocHJlZml4IHx8IHN1ZmZpeCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodG9rZW4ubW9kaWZpZXIgPT09IFwiK1wiIHx8IHRva2VuLm1vZGlmaWVyID09PSBcIipcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1vZCA9IHRva2VuLm1vZGlmaWVyID09PSBcIipcIiA/IFwiP1wiIDogXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBwcmVmaXggKyBcIigoPzpcIiArIHRva2VuLnBhdHRlcm4gKyBcIikoPzpcIiArIHN1ZmZpeCArIHByZWZpeCArIFwiKD86XCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpKSopXCIgKyBzdWZmaXggKyBcIilcIiArIG1vZDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBwcmVmaXggKyBcIihcIiArIHRva2VuLnBhdHRlcm4gKyBcIilcIiArIHN1ZmZpeCArIFwiKVwiICsgdG9rZW4ubW9kaWZpZXI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKFwiICsgdG9rZW4ucGF0dGVybiArIFwiKVwiICsgdG9rZW4ubW9kaWZpZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIHByZWZpeCArIHN1ZmZpeCArIFwiKVwiICsgdG9rZW4ubW9kaWZpZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKGVuZCkge1xuICAgICAgICBpZiAoIXN0cmljdClcbiAgICAgICAgICAgIHJvdXRlICs9IGRlbGltaXRlciArIFwiP1wiO1xuICAgICAgICByb3V0ZSArPSAhb3B0aW9ucy5lbmRzV2l0aCA/IFwiJFwiIDogXCIoPz1cIiArIGVuZHNXaXRoICsgXCIpXCI7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB2YXIgZW5kVG9rZW4gPSB0b2tlbnNbdG9rZW5zLmxlbmd0aCAtIDFdO1xuICAgICAgICB2YXIgaXNFbmREZWxpbWl0ZWQgPSB0eXBlb2YgZW5kVG9rZW4gPT09IFwic3RyaW5nXCJcbiAgICAgICAgICAgID8gZGVsaW1pdGVyLmluZGV4T2YoZW5kVG9rZW5bZW5kVG9rZW4ubGVuZ3RoIC0gMV0pID4gLTFcbiAgICAgICAgICAgIDogLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgICAgICAgICAgZW5kVG9rZW4gPT09IHVuZGVmaW5lZDtcbiAgICAgICAgaWYgKCFzdHJpY3QpIHtcbiAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBkZWxpbWl0ZXIgKyBcIig/PVwiICsgZW5kc1dpdGggKyBcIikpP1wiO1xuICAgICAgICB9XG4gICAgICAgIGlmICghaXNFbmREZWxpbWl0ZWQpIHtcbiAgICAgICAgICAgIHJvdXRlICs9IFwiKD89XCIgKyBkZWxpbWl0ZXIgKyBcInxcIiArIGVuZHNXaXRoICsgXCIpXCI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG5ldyBSZWdFeHAocm91dGUsIGZsYWdzKG9wdGlvbnMpKTtcbn1cbmV4cG9ydHMudG9rZW5zVG9SZWdleHAgPSB0b2tlbnNUb1JlZ2V4cDtcbi8qKlxuICogTm9ybWFsaXplIHRoZSBnaXZlbiBwYXRoIHN0cmluZywgcmV0dXJuaW5nIGEgcmVndWxhciBleHByZXNzaW9uLlxuICpcbiAqIEFuIGVtcHR5IGFycmF5IGNhbiBiZSBwYXNzZWQgaW4gZm9yIHRoZSBrZXlzLCB3aGljaCB3aWxsIGhvbGQgdGhlXG4gKiBwbGFjZWhvbGRlciBrZXkgZGVzY3JpcHRpb25zLiBGb3IgZXhhbXBsZSwgdXNpbmcgYC91c2VyLzppZGAsIGBrZXlzYCB3aWxsXG4gKiBjb250YWluIGBbeyBuYW1lOiAnaWQnLCBkZWxpbWl0ZXI6ICcvJywgb3B0aW9uYWw6IGZhbHNlLCByZXBlYXQ6IGZhbHNlIH1dYC5cbiAqL1xuZnVuY3Rpb24gcGF0aFRvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpIHtcbiAgICBpZiAocGF0aCBpbnN0YW5jZW9mIFJlZ0V4cClcbiAgICAgICAgcmV0dXJuIHJlZ2V4cFRvUmVnZXhwKHBhdGgsIGtleXMpO1xuICAgIGlmIChBcnJheS5pc0FycmF5KHBhdGgpKVxuICAgICAgICByZXR1cm4gYXJyYXlUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKTtcbiAgICByZXR1cm4gc3RyaW5nVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucyk7XG59XG5leHBvcnRzLnBhdGhUb1JlZ2V4cCA9IHBhdGhUb1JlZ2V4cDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZGV0ZWN0RG9tYWluTG9jYWxlPWRldGVjdERvbWFpbkxvY2FsZTtmdW5jdGlvbiBkZXRlY3REb21haW5Mb2NhbGUoZG9tYWluSXRlbXMsaG9zdG5hbWUsZGV0ZWN0ZWRMb2NhbGUpe2xldCBkb21haW5JdGVtO2lmKGRvbWFpbkl0ZW1zKXtpZihkZXRlY3RlZExvY2FsZSl7ZGV0ZWN0ZWRMb2NhbGU9ZGV0ZWN0ZWRMb2NhbGUudG9Mb3dlckNhc2UoKTt9Zm9yKGNvbnN0IGl0ZW0gb2YgZG9tYWluSXRlbXMpe3ZhciBfaXRlbSRkb21haW4sX2l0ZW0kbG9jYWxlczsvLyByZW1vdmUgcG9ydCBpZiBwcmVzZW50XG5jb25zdCBkb21haW5Ib3N0bmFtZT0oX2l0ZW0kZG9tYWluPWl0ZW0uZG9tYWluKT09bnVsbD92b2lkIDA6X2l0ZW0kZG9tYWluLnNwbGl0KCc6JylbMF0udG9Mb3dlckNhc2UoKTtpZihob3N0bmFtZT09PWRvbWFpbkhvc3RuYW1lfHxkZXRlY3RlZExvY2FsZT09PWl0ZW0uZGVmYXVsdExvY2FsZS50b0xvd2VyQ2FzZSgpfHwoX2l0ZW0kbG9jYWxlcz1pdGVtLmxvY2FsZXMpIT1udWxsJiZfaXRlbSRsb2NhbGVzLnNvbWUobG9jYWxlPT5sb2NhbGUudG9Mb3dlckNhc2UoKT09PWRldGVjdGVkTG9jYWxlKSl7ZG9tYWluSXRlbT1pdGVtO2JyZWFrO319fXJldHVybiBkb21haW5JdGVtO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRldGVjdC1kb21haW4tbG9jYWxlLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMubm9ybWFsaXplTG9jYWxlUGF0aD1ub3JtYWxpemVMb2NhbGVQYXRoO2Z1bmN0aW9uIG5vcm1hbGl6ZUxvY2FsZVBhdGgocGF0aG5hbWUsbG9jYWxlcyl7bGV0IGRldGVjdGVkTG9jYWxlOy8vIGZpcnN0IGl0ZW0gd2lsbCBiZSBlbXB0eSBzdHJpbmcgZnJvbSBzcGxpdHRpbmcgYXQgZmlyc3QgY2hhclxuY29uc3QgcGF0aG5hbWVQYXJ0cz1wYXRobmFtZS5zcGxpdCgnLycpOyhsb2NhbGVzfHxbXSkuc29tZShsb2NhbGU9PntpZihwYXRobmFtZVBhcnRzWzFdLnRvTG93ZXJDYXNlKCk9PT1sb2NhbGUudG9Mb3dlckNhc2UoKSl7ZGV0ZWN0ZWRMb2NhbGU9bG9jYWxlO3BhdGhuYW1lUGFydHMuc3BsaWNlKDEsMSk7cGF0aG5hbWU9cGF0aG5hbWVQYXJ0cy5qb2luKCcvJyl8fCcvJztyZXR1cm4gdHJ1ZTt9cmV0dXJuIGZhbHNlO30pO3JldHVybntwYXRobmFtZSxkZXRlY3RlZExvY2FsZX07fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bm9ybWFsaXplLWxvY2FsZS1wYXRoLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZGVmYXVsdD1taXR0Oy8qXG5NSVQgTGljZW5zZVxuXG5Db3B5cmlnaHQgKGMpIEphc29uIE1pbGxlciAoaHR0cHM6Ly9qYXNvbmZvcm1hdC5jb20vKVxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4qLyAvLyBUaGlzIGZpbGUgaXMgYmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL2RldmVsb3BpdC9taXR0L2Jsb2IvdjEuMS4zL3NyYy9pbmRleC5qc1xuLy8gSXQncyBiZWVuIGVkaXRlZCBmb3IgdGhlIG5lZWRzIG9mIHRoaXMgc2NyaXB0XG4vLyBTZWUgdGhlIExJQ0VOU0UgYXQgdGhlIHRvcCBvZiB0aGUgZmlsZVxuZnVuY3Rpb24gbWl0dCgpe2NvbnN0IGFsbD1PYmplY3QuY3JlYXRlKG51bGwpO3JldHVybntvbih0eXBlLGhhbmRsZXIpezsoYWxsW3R5cGVdfHwoYWxsW3R5cGVdPVtdKSkucHVzaChoYW5kbGVyKTt9LG9mZih0eXBlLGhhbmRsZXIpe2lmKGFsbFt0eXBlXSl7YWxsW3R5cGVdLnNwbGljZShhbGxbdHlwZV0uaW5kZXhPZihoYW5kbGVyKT4+PjAsMSk7fX0sZW1pdCh0eXBlLC4uLmV2dHMpey8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbjsoYWxsW3R5cGVdfHxbXSkuc2xpY2UoKS5tYXAoaGFuZGxlcj0+e2hhbmRsZXIoLi4uZXZ0cyk7fSk7fX07fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bWl0dC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmdldERvbWFpbkxvY2FsZT1nZXREb21haW5Mb2NhbGU7ZXhwb3J0cy5hZGRMb2NhbGU9YWRkTG9jYWxlO2V4cG9ydHMuZGVsTG9jYWxlPWRlbExvY2FsZTtleHBvcnRzLmhhc0Jhc2VQYXRoPWhhc0Jhc2VQYXRoO2V4cG9ydHMuYWRkQmFzZVBhdGg9YWRkQmFzZVBhdGg7ZXhwb3J0cy5kZWxCYXNlUGF0aD1kZWxCYXNlUGF0aDtleHBvcnRzLmlzTG9jYWxVUkw9aXNMb2NhbFVSTDtleHBvcnRzLmludGVycG9sYXRlQXM9aW50ZXJwb2xhdGVBcztleHBvcnRzLnJlc29sdmVIcmVmPXJlc29sdmVIcmVmO2V4cG9ydHMuZGVmYXVsdD12b2lkIDA7dmFyIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoPXJlcXVpcmUoXCIuLi8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoXCIpO3ZhciBfcm91dGVMb2FkZXI9cmVxdWlyZShcIi4uLy4uLy4uL2NsaWVudC9yb3V0ZS1sb2FkZXJcIik7dmFyIF9kZW5vcm1hbGl6ZVBhZ2VQYXRoPXJlcXVpcmUoXCIuLi8uLi9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoXCIpO3ZhciBfbm9ybWFsaXplTG9jYWxlUGF0aD1yZXF1aXJlKFwiLi4vaTE4bi9ub3JtYWxpemUtbG9jYWxlLXBhdGhcIik7dmFyIF9taXR0PV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL21pdHRcIikpO3ZhciBfdXRpbHM9cmVxdWlyZShcIi4uL3V0aWxzXCIpO3ZhciBfaXNEeW5hbWljPXJlcXVpcmUoXCIuL3V0aWxzL2lzLWR5bmFtaWNcIik7dmFyIF9wYXJzZVJlbGF0aXZlVXJsPXJlcXVpcmUoXCIuL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybFwiKTt2YXIgX3F1ZXJ5c3RyaW5nPXJlcXVpcmUoXCIuL3V0aWxzL3F1ZXJ5c3RyaW5nXCIpO3ZhciBfcmVzb2x2ZVJld3JpdGVzPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlc1wiKSk7dmFyIF9yb3V0ZU1hdGNoZXI9cmVxdWlyZShcIi4vdXRpbHMvcm91dGUtbWF0Y2hlclwiKTt2YXIgX3JvdXRlUmVnZXg9cmVxdWlyZShcIi4vdXRpbHMvcm91dGUtcmVnZXhcIik7ZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmope3JldHVybiBvYmomJm9iai5fX2VzTW9kdWxlP29iajp7ZGVmYXVsdDpvYmp9O30vKiBnbG9iYWwgX19ORVhUX0RBVEFfXyAqLyAvLyB0c2xpbnQ6ZGlzYWJsZTpuby1jb25zb2xlXG5sZXQgZGV0ZWN0RG9tYWluTG9jYWxlO2lmKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpe2RldGVjdERvbWFpbkxvY2FsZT1yZXF1aXJlKCcuLi9pMThuL2RldGVjdC1kb21haW4tbG9jYWxlJykuZGV0ZWN0RG9tYWluTG9jYWxlO31jb25zdCBiYXNlUGF0aD1wcm9jZXNzLmVudi5fX05FWFRfUk9VVEVSX0JBU0VQQVRIfHwnJztmdW5jdGlvbiBidWlsZENhbmNlbGxhdGlvbkVycm9yKCl7cmV0dXJuIE9iamVjdC5hc3NpZ24obmV3IEVycm9yKCdSb3V0ZSBDYW5jZWxsZWQnKSx7Y2FuY2VsbGVkOnRydWV9KTt9ZnVuY3Rpb24gYWRkUGF0aFByZWZpeChwYXRoLHByZWZpeCl7cmV0dXJuIHByZWZpeCYmcGF0aC5zdGFydHNXaXRoKCcvJyk/cGF0aD09PScvJz8oMCxfbm9ybWFsaXplVHJhaWxpbmdTbGFzaC5ub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCkocHJlZml4KTpgJHtwcmVmaXh9JHtwYXRoTm9RdWVyeUhhc2gocGF0aCk9PT0nLyc/cGF0aC5zdWJzdHJpbmcoMSk6cGF0aH1gOnBhdGg7fWZ1bmN0aW9uIGdldERvbWFpbkxvY2FsZShwYXRoLGxvY2FsZSxsb2NhbGVzLGRvbWFpbkxvY2FsZXMpe2lmKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpe2xvY2FsZT1sb2NhbGV8fCgwLF9ub3JtYWxpemVMb2NhbGVQYXRoLm5vcm1hbGl6ZUxvY2FsZVBhdGgpKHBhdGgsbG9jYWxlcykuZGV0ZWN0ZWRMb2NhbGU7Y29uc3QgZGV0ZWN0ZWREb21haW49ZGV0ZWN0RG9tYWluTG9jYWxlKGRvbWFpbkxvY2FsZXMsdW5kZWZpbmVkLGxvY2FsZSk7aWYoZGV0ZWN0ZWREb21haW4pe3JldHVybmBodHRwJHtkZXRlY3RlZERvbWFpbi5odHRwPycnOidzJ306Ly8ke2RldGVjdGVkRG9tYWluLmRvbWFpbn0ke2Jhc2VQYXRofHwnJ30ke2xvY2FsZT09PWRldGVjdGVkRG9tYWluLmRlZmF1bHRMb2NhbGU/Jyc6YC8ke2xvY2FsZX1gfSR7cGF0aH1gO31yZXR1cm4gZmFsc2U7fXJldHVybiBmYWxzZTt9ZnVuY3Rpb24gYWRkTG9jYWxlKHBhdGgsbG9jYWxlLGRlZmF1bHRMb2NhbGUpe2lmKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpe3JldHVybiBsb2NhbGUmJmxvY2FsZSE9PWRlZmF1bHRMb2NhbGUmJiFwYXRoLnN0YXJ0c1dpdGgoJy8nK2xvY2FsZSsnLycpJiZwYXRoIT09Jy8nK2xvY2FsZT9hZGRQYXRoUHJlZml4KHBhdGgsJy8nK2xvY2FsZSk6cGF0aDt9cmV0dXJuIHBhdGg7fWZ1bmN0aW9uIGRlbExvY2FsZShwYXRoLGxvY2FsZSl7aWYocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCl7cmV0dXJuIGxvY2FsZSYmKHBhdGguc3RhcnRzV2l0aCgnLycrbG9jYWxlKycvJyl8fHBhdGg9PT0nLycrbG9jYWxlKT9wYXRoLnN1YnN0cihsb2NhbGUubGVuZ3RoKzEpfHwnLyc6cGF0aDt9cmV0dXJuIHBhdGg7fWZ1bmN0aW9uIHBhdGhOb1F1ZXJ5SGFzaChwYXRoKXtjb25zdCBxdWVyeUluZGV4PXBhdGguaW5kZXhPZignPycpO2NvbnN0IGhhc2hJbmRleD1wYXRoLmluZGV4T2YoJyMnKTtpZihxdWVyeUluZGV4Pi0xfHxoYXNoSW5kZXg+LTEpe3BhdGg9cGF0aC5zdWJzdHJpbmcoMCxxdWVyeUluZGV4Pi0xP3F1ZXJ5SW5kZXg6aGFzaEluZGV4KTt9cmV0dXJuIHBhdGg7fWZ1bmN0aW9uIGhhc0Jhc2VQYXRoKHBhdGgpe3BhdGg9cGF0aE5vUXVlcnlIYXNoKHBhdGgpO3JldHVybiBwYXRoPT09YmFzZVBhdGh8fHBhdGguc3RhcnRzV2l0aChiYXNlUGF0aCsnLycpO31mdW5jdGlvbiBhZGRCYXNlUGF0aChwYXRoKXsvLyB3ZSBvbmx5IGFkZCB0aGUgYmFzZXBhdGggb24gcmVsYXRpdmUgdXJsc1xucmV0dXJuIGFkZFBhdGhQcmVmaXgocGF0aCxiYXNlUGF0aCk7fWZ1bmN0aW9uIGRlbEJhc2VQYXRoKHBhdGgpe3BhdGg9cGF0aC5zbGljZShiYXNlUGF0aC5sZW5ndGgpO2lmKCFwYXRoLnN0YXJ0c1dpdGgoJy8nKSlwYXRoPWAvJHtwYXRofWA7cmV0dXJuIHBhdGg7fS8qKlxuICogRGV0ZWN0cyB3aGV0aGVyIGEgZ2l2ZW4gdXJsIGlzIHJvdXRhYmxlIGJ5IHRoZSBOZXh0LmpzIHJvdXRlciAoYnJvd3NlciBvbmx5KS5cbiAqL2Z1bmN0aW9uIGlzTG9jYWxVUkwodXJsKXsvLyBwcmV2ZW50IGEgaHlkcmF0aW9uIG1pc21hdGNoIG9uIGhyZWYgZm9yIHVybCB3aXRoIGFuY2hvciByZWZzXG5pZih1cmwuc3RhcnRzV2l0aCgnLycpfHx1cmwuc3RhcnRzV2l0aCgnIycpKXJldHVybiB0cnVlO3RyeXsvLyBhYnNvbHV0ZSB1cmxzIGNhbiBiZSBsb2NhbCBpZiB0aGV5IGFyZSBvbiB0aGUgc2FtZSBvcmlnaW5cbmNvbnN0IGxvY2F0aW9uT3JpZ2luPSgwLF91dGlscy5nZXRMb2NhdGlvbk9yaWdpbikoKTtjb25zdCByZXNvbHZlZD1uZXcgVVJMKHVybCxsb2NhdGlvbk9yaWdpbik7cmV0dXJuIHJlc29sdmVkLm9yaWdpbj09PWxvY2F0aW9uT3JpZ2luJiZoYXNCYXNlUGF0aChyZXNvbHZlZC5wYXRobmFtZSk7fWNhdGNoKF8pe3JldHVybiBmYWxzZTt9fWZ1bmN0aW9uIGludGVycG9sYXRlQXMocm91dGUsYXNQYXRobmFtZSxxdWVyeSl7bGV0IGludGVycG9sYXRlZFJvdXRlPScnO2NvbnN0IGR5bmFtaWNSZWdleD0oMCxfcm91dGVSZWdleC5nZXRSb3V0ZVJlZ2V4KShyb3V0ZSk7Y29uc3QgZHluYW1pY0dyb3Vwcz1keW5hbWljUmVnZXguZ3JvdXBzO2NvbnN0IGR5bmFtaWNNYXRjaGVzPS8vIFRyeSB0byBtYXRjaCB0aGUgZHluYW1pYyByb3V0ZSBhZ2FpbnN0IHRoZSBhc1BhdGhcbihhc1BhdGhuYW1lIT09cm91dGU/KDAsX3JvdXRlTWF0Y2hlci5nZXRSb3V0ZU1hdGNoZXIpKGR5bmFtaWNSZWdleCkoYXNQYXRobmFtZSk6JycpfHwvLyBGYWxsIGJhY2sgdG8gcmVhZGluZyB0aGUgdmFsdWVzIGZyb20gdGhlIGhyZWZcbi8vIFRPRE86IHNob3VsZCB0aGlzIHRha2UgcHJpb3JpdHk7IGFsc28gbmVlZCB0byBjaGFuZ2UgaW4gdGhlIHJvdXRlci5cbnF1ZXJ5O2ludGVycG9sYXRlZFJvdXRlPXJvdXRlO2NvbnN0IHBhcmFtcz1PYmplY3Qua2V5cyhkeW5hbWljR3JvdXBzKTtpZighcGFyYW1zLmV2ZXJ5KHBhcmFtPT57bGV0IHZhbHVlPWR5bmFtaWNNYXRjaGVzW3BhcmFtXXx8Jyc7Y29uc3R7cmVwZWF0LG9wdGlvbmFsfT1keW5hbWljR3JvdXBzW3BhcmFtXTsvLyBzdXBwb3J0IHNpbmdsZS1sZXZlbCBjYXRjaC1hbGxcbi8vIFRPRE86IG1vcmUgcm9idXN0IGhhbmRsaW5nIGZvciB1c2VyLWVycm9yIChwYXNzaW5nIGAvYClcbmxldCByZXBsYWNlZD1gWyR7cmVwZWF0PycuLi4nOicnfSR7cGFyYW19XWA7aWYob3B0aW9uYWwpe3JlcGxhY2VkPWAkeyF2YWx1ZT8nLyc6Jyd9WyR7cmVwbGFjZWR9XWA7fWlmKHJlcGVhdCYmIUFycmF5LmlzQXJyYXkodmFsdWUpKXZhbHVlPVt2YWx1ZV07cmV0dXJuKG9wdGlvbmFsfHxwYXJhbSBpbiBkeW5hbWljTWF0Y2hlcykmJigvLyBJbnRlcnBvbGF0ZSBncm91cCBpbnRvIGRhdGEgVVJMIGlmIHByZXNlbnRcbmludGVycG9sYXRlZFJvdXRlPWludGVycG9sYXRlZFJvdXRlLnJlcGxhY2UocmVwbGFjZWQscmVwZWF0P3ZhbHVlLm1hcCgvLyB0aGVzZSB2YWx1ZXMgc2hvdWxkIGJlIGZ1bGx5IGVuY29kZWQgaW5zdGVhZCBvZiBqdXN0XG4vLyBwYXRoIGRlbGltaXRlciBlc2NhcGVkIHNpbmNlIHRoZXkgYXJlIGJlaW5nIGluc2VydGVkXG4vLyBpbnRvIHRoZSBVUkwgYW5kIHdlIGV4cGVjdCBVUkwgZW5jb2RlZCBzZWdtZW50c1xuLy8gd2hlbiBwYXJzaW5nIGR5bmFtaWMgcm91dGUgcGFyYW1zXG5zZWdtZW50PT5lbmNvZGVVUklDb21wb25lbnQoc2VnbWVudCkpLmpvaW4oJy8nKTplbmNvZGVVUklDb21wb25lbnQodmFsdWUpKXx8Jy8nKTt9KSl7aW50ZXJwb2xhdGVkUm91dGU9Jyc7Ly8gZGlkIG5vdCBzYXRpc2Z5IGFsbCByZXF1aXJlbWVudHNcbi8vIG4uYi4gV2UgaWdub3JlIHRoaXMgZXJyb3IgYmVjYXVzZSB3ZSBoYW5kbGUgd2FybmluZyBmb3IgdGhpcyBjYXNlIGluXG4vLyBkZXZlbG9wbWVudCBpbiB0aGUgYDxMaW5rPmAgY29tcG9uZW50IGRpcmVjdGx5LlxufXJldHVybntwYXJhbXMscmVzdWx0OmludGVycG9sYXRlZFJvdXRlfTt9ZnVuY3Rpb24gb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LHBhcmFtcyl7Y29uc3QgZmlsdGVyZWRRdWVyeT17fTtPYmplY3Qua2V5cyhxdWVyeSkuZm9yRWFjaChrZXk9PntpZighcGFyYW1zLmluY2x1ZGVzKGtleSkpe2ZpbHRlcmVkUXVlcnlba2V5XT1xdWVyeVtrZXldO319KTtyZXR1cm4gZmlsdGVyZWRRdWVyeTt9LyoqXG4gKiBSZXNvbHZlcyBhIGdpdmVuIGh5cGVybGluayB3aXRoIGEgY2VydGFpbiByb3V0ZXIgc3RhdGUgKGJhc2VQYXRoIG5vdCBpbmNsdWRlZCkuXG4gKiBQcmVzZXJ2ZXMgYWJzb2x1dGUgdXJscy5cbiAqL2Z1bmN0aW9uIHJlc29sdmVIcmVmKGN1cnJlbnRQYXRoLGhyZWYscmVzb2x2ZUFzKXsvLyB3ZSB1c2UgYSBkdW1teSBiYXNlIHVybCBmb3IgcmVsYXRpdmUgdXJsc1xuY29uc3QgYmFzZT1uZXcgVVJMKGN1cnJlbnRQYXRoLCdodHRwOi8vbicpO2NvbnN0IHVybEFzU3RyaW5nPXR5cGVvZiBocmVmPT09J3N0cmluZyc/aHJlZjooMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKGhyZWYpOy8vIFJldHVybiBiZWNhdXNlIGl0IGNhbm5vdCBiZSByb3V0ZWQgYnkgdGhlIE5leHQuanMgcm91dGVyXG5pZighaXNMb2NhbFVSTCh1cmxBc1N0cmluZykpe3JldHVybiByZXNvbHZlQXM/W3VybEFzU3RyaW5nXTp1cmxBc1N0cmluZzt9dHJ5e2NvbnN0IGZpbmFsVXJsPW5ldyBVUkwodXJsQXNTdHJpbmcsYmFzZSk7ZmluYWxVcmwucGF0aG5hbWU9KDAsX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gubm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gpKGZpbmFsVXJsLnBhdGhuYW1lKTtsZXQgaW50ZXJwb2xhdGVkQXM9Jyc7aWYoKDAsX2lzRHluYW1pYy5pc0R5bmFtaWNSb3V0ZSkoZmluYWxVcmwucGF0aG5hbWUpJiZmaW5hbFVybC5zZWFyY2hQYXJhbXMmJnJlc29sdmVBcyl7Y29uc3QgcXVlcnk9KDAsX3F1ZXJ5c3RyaW5nLnNlYXJjaFBhcmFtc1RvVXJsUXVlcnkpKGZpbmFsVXJsLnNlYXJjaFBhcmFtcyk7Y29uc3R7cmVzdWx0LHBhcmFtc309aW50ZXJwb2xhdGVBcyhmaW5hbFVybC5wYXRobmFtZSxmaW5hbFVybC5wYXRobmFtZSxxdWVyeSk7aWYocmVzdWx0KXtpbnRlcnBvbGF0ZWRBcz0oMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHtwYXRobmFtZTpyZXN1bHQsaGFzaDpmaW5hbFVybC5oYXNoLHF1ZXJ5Om9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSxwYXJhbXMpfSk7fX0vLyBpZiB0aGUgb3JpZ2luIGRpZG4ndCBjaGFuZ2UsIGl0IG1lYW5zIHdlIHJlY2VpdmVkIGEgcmVsYXRpdmUgaHJlZlxuY29uc3QgcmVzb2x2ZWRIcmVmPWZpbmFsVXJsLm9yaWdpbj09PWJhc2Uub3JpZ2luP2ZpbmFsVXJsLmhyZWYuc2xpY2UoZmluYWxVcmwub3JpZ2luLmxlbmd0aCk6ZmluYWxVcmwuaHJlZjtyZXR1cm4gcmVzb2x2ZUFzP1tyZXNvbHZlZEhyZWYsaW50ZXJwb2xhdGVkQXN8fHJlc29sdmVkSHJlZl06cmVzb2x2ZWRIcmVmO31jYXRjaChfKXtyZXR1cm4gcmVzb2x2ZUFzP1t1cmxBc1N0cmluZ106dXJsQXNTdHJpbmc7fX1mdW5jdGlvbiBzdHJpcE9yaWdpbih1cmwpe2NvbnN0IG9yaWdpbj0oMCxfdXRpbHMuZ2V0TG9jYXRpb25PcmlnaW4pKCk7cmV0dXJuIHVybC5zdGFydHNXaXRoKG9yaWdpbik/dXJsLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKTp1cmw7fWZ1bmN0aW9uIHByZXBhcmVVcmxBcyhyb3V0ZXIsdXJsLGFzKXsvLyBJZiB1cmwgYW5kIGFzIHByb3ZpZGVkIGFzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbixcbi8vIHdlJ2xsIGZvcm1hdCB0aGVtIGludG8gdGhlIHN0cmluZyB2ZXJzaW9uIGhlcmUuXG5sZXRbcmVzb2x2ZWRIcmVmLHJlc29sdmVkQXNdPXJlc29sdmVIcmVmKHJvdXRlci5wYXRobmFtZSx1cmwsdHJ1ZSk7Y29uc3Qgb3JpZ2luPSgwLF91dGlscy5nZXRMb2NhdGlvbk9yaWdpbikoKTtjb25zdCBocmVmSGFkT3JpZ2luPXJlc29sdmVkSHJlZi5zdGFydHNXaXRoKG9yaWdpbik7Y29uc3QgYXNIYWRPcmlnaW49cmVzb2x2ZWRBcyYmcmVzb2x2ZWRBcy5zdGFydHNXaXRoKG9yaWdpbik7cmVzb2x2ZWRIcmVmPXN0cmlwT3JpZ2luKHJlc29sdmVkSHJlZik7cmVzb2x2ZWRBcz1yZXNvbHZlZEFzP3N0cmlwT3JpZ2luKHJlc29sdmVkQXMpOnJlc29sdmVkQXM7Y29uc3QgcHJlcGFyZWRVcmw9aHJlZkhhZE9yaWdpbj9yZXNvbHZlZEhyZWY6YWRkQmFzZVBhdGgocmVzb2x2ZWRIcmVmKTtjb25zdCBwcmVwYXJlZEFzPWFzP3N0cmlwT3JpZ2luKHJlc29sdmVIcmVmKHJvdXRlci5wYXRobmFtZSxhcykpOnJlc29sdmVkQXN8fHJlc29sdmVkSHJlZjtyZXR1cm57dXJsOnByZXBhcmVkVXJsLGFzOmFzSGFkT3JpZ2luP3ByZXBhcmVkQXM6YWRkQmFzZVBhdGgocHJlcGFyZWRBcyl9O31mdW5jdGlvbiByZXNvbHZlRHluYW1pY1JvdXRlKHBhdGhuYW1lLHBhZ2VzKXtjb25zdCBjbGVhblBhdGhuYW1lPSgwLF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKSgoMCxfZGVub3JtYWxpemVQYWdlUGF0aC5kZW5vcm1hbGl6ZVBhZ2VQYXRoKShwYXRobmFtZSkpO2lmKGNsZWFuUGF0aG5hbWU9PT0nLzQwNCd8fGNsZWFuUGF0aG5hbWU9PT0nL19lcnJvcicpe3JldHVybiBwYXRobmFtZTt9Ly8gaGFuZGxlIHJlc29sdmluZyBocmVmIGZvciBkeW5hbWljIHJvdXRlc1xuaWYoIXBhZ2VzLmluY2x1ZGVzKGNsZWFuUGF0aG5hbWUpKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG5wYWdlcy5zb21lKHBhZ2U9PntpZigoMCxfaXNEeW5hbWljLmlzRHluYW1pY1JvdXRlKShwYWdlKSYmKDAsX3JvdXRlUmVnZXguZ2V0Um91dGVSZWdleCkocGFnZSkucmUudGVzdChjbGVhblBhdGhuYW1lKSl7cGF0aG5hbWU9cGFnZTtyZXR1cm4gdHJ1ZTt9fSk7fXJldHVybigwLF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKShwYXRobmFtZSk7fWNvbnN0IG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uPXByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04mJnR5cGVvZiB3aW5kb3chPT0ndW5kZWZpbmVkJyYmJ3Njcm9sbFJlc3RvcmF0aW9uJ2luIHdpbmRvdy5oaXN0b3J5JiYhIWZ1bmN0aW9uKCl7dHJ5e2xldCB2PSdfX25leHQnOy8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZXF1ZW5jZXNcbnJldHVybiBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKHYsdiksc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbSh2KSx0cnVlO31jYXRjaChuKXt9fSgpO2NvbnN0IFNTR19EQVRBX05PVF9GT1VORD1TeW1ib2woJ1NTR19EQVRBX05PVF9GT1VORCcpO2Z1bmN0aW9uIGZldGNoUmV0cnkodXJsLGF0dGVtcHRzKXtyZXR1cm4gZmV0Y2godXJsLHsvLyBDb29raWVzIGFyZSByZXF1aXJlZCB0byBiZSBwcmVzZW50IGZvciBOZXh0LmpzJyBTU0cgXCJQcmV2aWV3IE1vZGVcIi5cbi8vIENvb2tpZXMgbWF5IGFsc28gYmUgcmVxdWlyZWQgZm9yIGBnZXRTZXJ2ZXJTaWRlUHJvcHNgLlxuLy9cbi8vID4gYGZldGNoYCB3b27igJl0IHNlbmQgY29va2llcywgdW5sZXNzIHlvdSBzZXQgdGhlIGNyZWRlbnRpYWxzIGluaXRcbi8vID4gb3B0aW9uLlxuLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZldGNoX0FQSS9Vc2luZ19GZXRjaFxuLy9cbi8vID4gRm9yIG1heGltdW0gYnJvd3NlciBjb21wYXRpYmlsaXR5IHdoZW4gaXQgY29tZXMgdG8gc2VuZGluZyAmXG4vLyA+IHJlY2VpdmluZyBjb29raWVzLCBhbHdheXMgc3VwcGx5IHRoZSBgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidgXG4vLyA+IG9wdGlvbiBpbnN0ZWFkIG9mIHJlbHlpbmcgb24gdGhlIGRlZmF1bHQuXG4vLyBodHRwczovL2dpdGh1Yi5jb20vZ2l0aHViL2ZldGNoI2NhdmVhdHNcbmNyZWRlbnRpYWxzOidzYW1lLW9yaWdpbid9KS50aGVuKHJlcz0+e2lmKCFyZXMub2spe2lmKGF0dGVtcHRzPjEmJnJlcy5zdGF0dXM+PTUwMCl7cmV0dXJuIGZldGNoUmV0cnkodXJsLGF0dGVtcHRzLTEpO31pZihyZXMuc3RhdHVzPT09NDA0KXtyZXR1cm4gcmVzLmpzb24oKS50aGVuKGRhdGE9PntpZihkYXRhLm5vdEZvdW5kKXtyZXR1cm57bm90Rm91bmQ6U1NHX0RBVEFfTk9UX0ZPVU5EfTt9dGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKTt9KTt9dGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKTt9cmV0dXJuIHJlcy5qc29uKCk7fSk7fWZ1bmN0aW9uIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsaXNTZXJ2ZXJSZW5kZXIpe3JldHVybiBmZXRjaFJldHJ5KGRhdGFIcmVmLGlzU2VydmVyUmVuZGVyPzM6MSkuY2F0Y2goZXJyPT57Ly8gV2Ugc2hvdWxkIG9ubHkgdHJpZ2dlciBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb24gaWYgdGhpcyB3YXMgY2F1c2VkXG4vLyBvbiBhIGNsaWVudC1zaWRlIHRyYW5zaXRpb24uIE90aGVyd2lzZSwgd2UnZCBnZXQgaW50byBhbiBpbmZpbml0ZVxuLy8gbG9vcC5cbmlmKCFpc1NlcnZlclJlbmRlcil7KDAsX3JvdXRlTG9hZGVyLm1hcmtBc3NldEVycm9yKShlcnIpO310aHJvdyBlcnI7fSk7fWNsYXNzIFJvdXRlcnsvKipcbiAgICogTWFwIG9mIGFsbCBjb21wb25lbnRzIGxvYWRlZCBpbiBgUm91dGVyYFxuICAgKi8gLy8gU3RhdGljIERhdGEgQ2FjaGVcbi8vIEluLWZsaWdodCBTZXJ2ZXIgRGF0YSBSZXF1ZXN0cywgZm9yIGRlZHVwaW5nXG5jb25zdHJ1Y3RvcihfcGF0aG5hbWUsX3F1ZXJ5LF9hcyx7aW5pdGlhbFByb3BzLHBhZ2VMb2FkZXIsQXBwLHdyYXBBcHAsQ29tcG9uZW50LGVycixzdWJzY3JpcHRpb24saXNGYWxsYmFjayxsb2NhbGUsbG9jYWxlcyxkZWZhdWx0TG9jYWxlLGRvbWFpbkxvY2FsZXMsaXNQcmV2aWV3fSl7dGhpcy5yb3V0ZT12b2lkIDA7dGhpcy5wYXRobmFtZT12b2lkIDA7dGhpcy5xdWVyeT12b2lkIDA7dGhpcy5hc1BhdGg9dm9pZCAwO3RoaXMuYmFzZVBhdGg9dm9pZCAwO3RoaXMuY29tcG9uZW50cz12b2lkIDA7dGhpcy5zZGM9e307dGhpcy5zZHI9e307dGhpcy5zdWI9dm9pZCAwO3RoaXMuY2xjPXZvaWQgMDt0aGlzLnBhZ2VMb2FkZXI9dm9pZCAwO3RoaXMuX2Jwcz12b2lkIDA7dGhpcy5ldmVudHM9dm9pZCAwO3RoaXMuX3dyYXBBcHA9dm9pZCAwO3RoaXMuaXNTc3I9dm9pZCAwO3RoaXMuaXNGYWxsYmFjaz12b2lkIDA7dGhpcy5faW5GbGlnaHRSb3V0ZT12b2lkIDA7dGhpcy5fc2hhbGxvdz12b2lkIDA7dGhpcy5sb2NhbGU9dm9pZCAwO3RoaXMubG9jYWxlcz12b2lkIDA7dGhpcy5kZWZhdWx0TG9jYWxlPXZvaWQgMDt0aGlzLmRvbWFpbkxvY2FsZXM9dm9pZCAwO3RoaXMuaXNSZWFkeT12b2lkIDA7dGhpcy5pc1ByZXZpZXc9dm9pZCAwO3RoaXMuaXNMb2NhbGVEb21haW49dm9pZCAwO3RoaXMuX2lkeD0wO3RoaXMub25Qb3BTdGF0ZT1lPT57Y29uc3Qgc3RhdGU9ZS5zdGF0ZTtpZighc3RhdGUpey8vIFdlIGdldCBzdGF0ZSBhcyB1bmRlZmluZWQgZm9yIHR3byByZWFzb25zLlxuLy8gIDEuIFdpdGggb2xkZXIgc2FmYXJpICg8IDgpIGFuZCBvbGRlciBjaHJvbWUgKDwgMzQpXG4vLyAgMi4gV2hlbiB0aGUgVVJMIGNoYW5nZWQgd2l0aCAjXG4vL1xuLy8gSW4gdGhlIGJvdGggY2FzZXMsIHdlIGRvbid0IG5lZWQgdG8gcHJvY2VlZCBhbmQgY2hhbmdlIHRoZSByb3V0ZS5cbi8vIChhcyBpdCdzIGFscmVhZHkgY2hhbmdlZClcbi8vIEJ1dCB3ZSBjYW4gc2ltcGx5IHJlcGxhY2UgdGhlIHN0YXRlIHdpdGggdGhlIG5ldyBjaGFuZ2VzLlxuLy8gQWN0dWFsbHksIGZvciAoMSkgd2UgZG9uJ3QgbmVlZCB0byBub3RoaW5nLiBCdXQgaXQncyBoYXJkIHRvIGRldGVjdCB0aGF0IGV2ZW50LlxuLy8gU28sIGRvaW5nIHRoZSBmb2xsb3dpbmcgZm9yICgxKSBkb2VzIG5vIGhhcm0uXG5jb25zdHtwYXRobmFtZSxxdWVyeX09dGhpczt0aGlzLmNoYW5nZVN0YXRlKCdyZXBsYWNlU3RhdGUnLCgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikoe3BhdGhuYW1lOmFkZEJhc2VQYXRoKHBhdGhuYW1lKSxxdWVyeX0pLCgwLF91dGlscy5nZXRVUkwpKCkpO3JldHVybjt9aWYoIXN0YXRlLl9fTil7cmV0dXJuO31sZXQgZm9yY2VkU2Nyb2xsO2NvbnN0e3VybCxhcyxvcHRpb25zLGlkeH09c3RhdGU7aWYocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTil7aWYobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pe2lmKHRoaXMuX2lkeCE9PWlkeCl7Ly8gU25hcHNob3QgY3VycmVudCBzY3JvbGwgcG9zaXRpb246XG50cnl7c2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnX19uZXh0X3Njcm9sbF8nK3RoaXMuX2lkeCxKU09OLnN0cmluZ2lmeSh7eDpzZWxmLnBhZ2VYT2Zmc2V0LHk6c2VsZi5wYWdlWU9mZnNldH0pKTt9Y2F0Y2goX3VudXNlZCl7fS8vIFJlc3RvcmUgb2xkIHNjcm9sbCBwb3NpdGlvbjpcbnRyeXtjb25zdCB2PXNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ19fbmV4dF9zY3JvbGxfJytpZHgpO2ZvcmNlZFNjcm9sbD1KU09OLnBhcnNlKHYpO31jYXRjaChfdW51c2VkMil7Zm9yY2VkU2Nyb2xsPXt4OjAseTowfTt9fX19dGhpcy5faWR4PWlkeDtjb25zdHtwYXRobmFtZX09KDAsX3BhcnNlUmVsYXRpdmVVcmwucGFyc2VSZWxhdGl2ZVVybCkodXJsKTsvLyBNYWtlIHN1cmUgd2UgZG9uJ3QgcmUtcmVuZGVyIG9uIGluaXRpYWwgbG9hZCxcbi8vIGNhbiBiZSBjYXVzZWQgYnkgbmF2aWdhdGluZyBiYWNrIGZyb20gYW4gZXh0ZXJuYWwgc2l0ZVxuaWYodGhpcy5pc1NzciYmYXM9PT10aGlzLmFzUGF0aCYmcGF0aG5hbWU9PT10aGlzLnBhdGhuYW1lKXtyZXR1cm47fS8vIElmIHRoZSBkb3duc3RyZWFtIGFwcGxpY2F0aW9uIHJldHVybnMgZmFsc3ksIHJldHVybi5cbi8vIFRoZXkgd2lsbCB0aGVuIGJlIHJlc3BvbnNpYmxlIGZvciBoYW5kbGluZyB0aGUgZXZlbnQuXG5pZih0aGlzLl9icHMmJiF0aGlzLl9icHMoc3RhdGUpKXtyZXR1cm47fXRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLHVybCxhcyxPYmplY3QuYXNzaWduKHt9LG9wdGlvbnMse3NoYWxsb3c6b3B0aW9ucy5zaGFsbG93JiZ0aGlzLl9zaGFsbG93LGxvY2FsZTpvcHRpb25zLmxvY2FsZXx8dGhpcy5kZWZhdWx0TG9jYWxlfSksZm9yY2VkU2Nyb2xsKTt9Oy8vIHJlcHJlc2VudHMgdGhlIGN1cnJlbnQgY29tcG9uZW50IGtleVxudGhpcy5yb3V0ZT0oMCxfbm9ybWFsaXplVHJhaWxpbmdTbGFzaC5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCkoX3BhdGhuYW1lKTsvLyBzZXQgdXAgdGhlIGNvbXBvbmVudCBjYWNoZSAoYnkgcm91dGUga2V5cylcbnRoaXMuY29tcG9uZW50cz17fTsvLyBXZSBzaG91bGQgbm90IGtlZXAgdGhlIGNhY2hlLCBpZiB0aGVyZSdzIGFuIGVycm9yXG4vLyBPdGhlcndpc2UsIHRoaXMgY2F1c2UgaXNzdWVzIHdoZW4gd2hlbiBnb2luZyBiYWNrIGFuZFxuLy8gY29tZSBhZ2FpbiB0byB0aGUgZXJyb3JlZCBwYWdlLlxuaWYoX3BhdGhuYW1lIT09Jy9fZXJyb3InKXt0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV09e0NvbXBvbmVudCxpbml0aWFsOnRydWUscHJvcHM6aW5pdGlhbFByb3BzLGVycixfX05fU1NHOmluaXRpYWxQcm9wcyYmaW5pdGlhbFByb3BzLl9fTl9TU0csX19OX1NTUDppbml0aWFsUHJvcHMmJmluaXRpYWxQcm9wcy5fX05fU1NQfTt9dGhpcy5jb21wb25lbnRzWycvX2FwcCddPXtDb21wb25lbnQ6QXBwLHN0eWxlU2hlZXRzOlsvKiAvX2FwcCBkb2VzIG5vdCBuZWVkIGl0cyBzdHlsZXNoZWV0cyBtYW5hZ2VkICovXX07Ly8gQmFja3dhcmRzIGNvbXBhdCBmb3IgUm91dGVyLnJvdXRlci5ldmVudHNcbi8vIFRPRE86IFNob3VsZCBiZSByZW1vdmUgdGhlIGZvbGxvd2luZyBtYWpvciB2ZXJzaW9uIGFzIGl0IHdhcyBuZXZlciBkb2N1bWVudGVkXG50aGlzLmV2ZW50cz1Sb3V0ZXIuZXZlbnRzO3RoaXMucGFnZUxvYWRlcj1wYWdlTG9hZGVyO3RoaXMucGF0aG5hbWU9X3BhdGhuYW1lO3RoaXMucXVlcnk9X3F1ZXJ5Oy8vIGlmIGF1dG8gcHJlcmVuZGVyZWQgYW5kIGR5bmFtaWMgcm91dGUgd2FpdCB0byB1cGRhdGUgYXNQYXRoXG4vLyB1bnRpbCBhZnRlciBtb3VudCB0byBwcmV2ZW50IGh5ZHJhdGlvbiBtaXNtYXRjaFxuY29uc3QgYXV0b0V4cG9ydER5bmFtaWM9KDAsX2lzRHluYW1pYy5pc0R5bmFtaWNSb3V0ZSkoX3BhdGhuYW1lKSYmc2VsZi5fX05FWFRfREFUQV9fLmF1dG9FeHBvcnQ7dGhpcy5hc1BhdGg9YXV0b0V4cG9ydER5bmFtaWM/X3BhdGhuYW1lOl9hczt0aGlzLmJhc2VQYXRoPWJhc2VQYXRoO3RoaXMuc3ViPXN1YnNjcmlwdGlvbjt0aGlzLmNsYz1udWxsO3RoaXMuX3dyYXBBcHA9d3JhcEFwcDsvLyBtYWtlIHN1cmUgdG8gaWdub3JlIGV4dHJhIHBvcFN0YXRlIGluIHNhZmFyaSBvbiBuYXZpZ2F0aW5nXG4vLyBiYWNrIGZyb20gZXh0ZXJuYWwgc2l0ZVxudGhpcy5pc1Nzcj10cnVlO3RoaXMuaXNGYWxsYmFjaz1pc0ZhbGxiYWNrO3RoaXMuaXNSZWFkeT0hIShzZWxmLl9fTkVYVF9EQVRBX18uZ3NzcHx8c2VsZi5fX05FWFRfREFUQV9fLmdpcHx8IWF1dG9FeHBvcnREeW5hbWljJiYhc2VsZi5sb2NhdGlvbi5zZWFyY2gpO3RoaXMuaXNQcmV2aWV3PSEhaXNQcmV2aWV3O3RoaXMuaXNMb2NhbGVEb21haW49ZmFsc2U7aWYocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCl7dGhpcy5sb2NhbGU9bG9jYWxlO3RoaXMubG9jYWxlcz1sb2NhbGVzO3RoaXMuZGVmYXVsdExvY2FsZT1kZWZhdWx0TG9jYWxlO3RoaXMuZG9tYWluTG9jYWxlcz1kb21haW5Mb2NhbGVzO3RoaXMuaXNMb2NhbGVEb21haW49ISFkZXRlY3REb21haW5Mb2NhbGUoZG9tYWluTG9jYWxlcyxzZWxmLmxvY2F0aW9uLmhvc3RuYW1lKTt9aWYodHlwZW9mIHdpbmRvdyE9PSd1bmRlZmluZWQnKXsvLyBtYWtlIHN1cmUgXCJhc1wiIGRvZXNuJ3Qgc3RhcnQgd2l0aCBkb3VibGUgc2xhc2hlcyBvciBlbHNlIGl0IGNhblxuLy8gdGhyb3cgYW4gZXJyb3IgYXMgaXQncyBjb25zaWRlcmVkIGludmFsaWRcbmlmKF9hcy5zdWJzdHIoMCwyKSE9PScvLycpey8vIGluIG9yZGVyIGZvciBgZS5zdGF0ZWAgdG8gd29yayBvbiB0aGUgYG9ucG9wc3RhdGVgIGV2ZW50XG4vLyB3ZSBoYXZlIHRvIHJlZ2lzdGVyIHRoZSBpbml0aWFsIHJvdXRlIHVwb24gaW5pdGlhbGl6YXRpb25cbnRoaXMuY2hhbmdlU3RhdGUoJ3JlcGxhY2VTdGF0ZScsKDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKSh7cGF0aG5hbWU6YWRkQmFzZVBhdGgoX3BhdGhuYW1lKSxxdWVyeTpfcXVlcnl9KSwoMCxfdXRpbHMuZ2V0VVJMKSgpLHtsb2NhbGV9KTt9d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJyx0aGlzLm9uUG9wU3RhdGUpOy8vIGVuYWJsZSBjdXN0b20gc2Nyb2xsIHJlc3RvcmF0aW9uIGhhbmRsaW5nIHdoZW4gYXZhaWxhYmxlXG4vLyBvdGhlcndpc2UgZmFsbGJhY2sgdG8gYnJvd3NlcidzIGRlZmF1bHQgaGFuZGxpbmdcbmlmKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pe2lmKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKXt3aW5kb3cuaGlzdG9yeS5zY3JvbGxSZXN0b3JhdGlvbj0nbWFudWFsJzt9fX19cmVsb2FkKCl7d2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO30vKipcbiAgICogR28gYmFjayBpbiBoaXN0b3J5XG4gICAqL2JhY2soKXt3aW5kb3cuaGlzdG9yeS5iYWNrKCk7fS8qKlxuICAgKiBQZXJmb3JtcyBhIGBwdXNoU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9wdXNoKHVybCxhcyxvcHRpb25zPXt9KXtpZihwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKXsvLyBUT0RPOiByZW1vdmUgaW4gdGhlIGZ1dHVyZSB3aGVuIHdlIHVwZGF0ZSBoaXN0b3J5IGJlZm9yZSByb3V0ZSBjaGFuZ2Vcbi8vIGlzIGNvbXBsZXRlLCBhcyB0aGUgcG9wc3RhdGUgZXZlbnQgc2hvdWxkIGhhbmRsZSB0aGlzIGNhcHR1cmUuXG5pZihtYW51YWxTY3JvbGxSZXN0b3JhdGlvbil7dHJ5ey8vIFNuYXBzaG90IHNjcm9sbCBwb3NpdGlvbiByaWdodCBiZWZvcmUgbmF2aWdhdGluZyB0byBhIG5ldyBwYWdlOlxuc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnX19uZXh0X3Njcm9sbF8nK3RoaXMuX2lkeCxKU09OLnN0cmluZ2lmeSh7eDpzZWxmLnBhZ2VYT2Zmc2V0LHk6c2VsZi5wYWdlWU9mZnNldH0pKTt9Y2F0Y2goX3VudXNlZDMpe319fTsoe3VybCxhc309cHJlcGFyZVVybEFzKHRoaXMsdXJsLGFzKSk7cmV0dXJuIHRoaXMuY2hhbmdlKCdwdXNoU3RhdGUnLHVybCxhcyxvcHRpb25zKTt9LyoqXG4gICAqIFBlcmZvcm1zIGEgYHJlcGxhY2VTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL3JlcGxhY2UodXJsLGFzLG9wdGlvbnM9e30pezsoe3VybCxhc309cHJlcGFyZVVybEFzKHRoaXMsdXJsLGFzKSk7cmV0dXJuIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLHVybCxhcyxvcHRpb25zKTt9YXN5bmMgY2hhbmdlKG1ldGhvZCx1cmwsYXMsb3B0aW9ucyxmb3JjZWRTY3JvbGwpe3ZhciBfb3B0aW9ucyRzY3JvbGw7aWYoIWlzTG9jYWxVUkwodXJsKSl7d2luZG93LmxvY2F0aW9uLmhyZWY9dXJsO3JldHVybiBmYWxzZTt9Ly8gZm9yIHN0YXRpYyBwYWdlcyB3aXRoIHF1ZXJ5IHBhcmFtcyBpbiB0aGUgVVJMIHdlIGRlbGF5XG4vLyBtYXJraW5nIHRoZSByb3V0ZXIgcmVhZHkgdW50aWwgYWZ0ZXIgdGhlIHF1ZXJ5IGlzIHVwZGF0ZWRcbmlmKG9wdGlvbnMuX2gpe3RoaXMuaXNSZWFkeT10cnVlO30vLyBEZWZhdWx0IHRvIHNjcm9sbCByZXNldCBiZWhhdmlvciB1bmxlc3MgZXhwbGljaXRseSBzcGVjaWZpZWQgdG8gYmVcbi8vIGBmYWxzZWAhIFRoaXMgbWFrZXMgdGhlIGJlaGF2aW9yIGJldHdlZW4gdXNpbmcgYFJvdXRlciNwdXNoYCBhbmQgYVxuLy8gYDxMaW5rIC8+YCBjb25zaXN0ZW50Llxub3B0aW9ucy5zY3JvbGw9ISEoKF9vcHRpb25zJHNjcm9sbD1vcHRpb25zLnNjcm9sbCkhPW51bGw/X29wdGlvbnMkc2Nyb2xsOnRydWUpO2xldCBsb2NhbGVDaGFuZ2U9b3B0aW9ucy5sb2NhbGUhPT10aGlzLmxvY2FsZTtpZihwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKXt0aGlzLmxvY2FsZT1vcHRpb25zLmxvY2FsZT09PWZhbHNlP3RoaXMuZGVmYXVsdExvY2FsZTpvcHRpb25zLmxvY2FsZXx8dGhpcy5sb2NhbGU7aWYodHlwZW9mIG9wdGlvbnMubG9jYWxlPT09J3VuZGVmaW5lZCcpe29wdGlvbnMubG9jYWxlPXRoaXMubG9jYWxlO31jb25zdCBwYXJzZWRBcz0oMCxfcGFyc2VSZWxhdGl2ZVVybC5wYXJzZVJlbGF0aXZlVXJsKShoYXNCYXNlUGF0aChhcyk/ZGVsQmFzZVBhdGgoYXMpOmFzKTtjb25zdCBsb2NhbGVQYXRoUmVzdWx0PSgwLF9ub3JtYWxpemVMb2NhbGVQYXRoLm5vcm1hbGl6ZUxvY2FsZVBhdGgpKHBhcnNlZEFzLnBhdGhuYW1lLHRoaXMubG9jYWxlcyk7aWYobG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZSl7dGhpcy5sb2NhbGU9bG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZTtwYXJzZWRBcy5wYXRobmFtZT1hZGRCYXNlUGF0aChwYXJzZWRBcy5wYXRobmFtZSk7YXM9KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKShwYXJzZWRBcyk7dXJsPWFkZEJhc2VQYXRoKCgwLF9ub3JtYWxpemVMb2NhbGVQYXRoLm5vcm1hbGl6ZUxvY2FsZVBhdGgpKGhhc0Jhc2VQYXRoKHVybCk/ZGVsQmFzZVBhdGgodXJsKTp1cmwsdGhpcy5sb2NhbGVzKS5wYXRobmFtZSk7fWxldCBkaWROYXZpZ2F0ZT1mYWxzZTsvLyB3ZSBuZWVkIHRvIHdyYXAgdGhpcyBpbiB0aGUgZW52IGNoZWNrIGFnYWluIHNpbmNlIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbi8vIG1vdmVzIHRoaXMgb24gaXRzIG93biBkdWUgdG8gdGhlIHJldHVyblxuaWYocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCl7dmFyIF90aGlzJGxvY2FsZXM7Ly8gaWYgdGhlIGxvY2FsZSBpc24ndCBjb25maWd1cmVkIGhhcmQgbmF2aWdhdGUgdG8gc2hvdyA0MDQgcGFnZVxuaWYoISgoX3RoaXMkbG9jYWxlcz10aGlzLmxvY2FsZXMpIT1udWxsJiZfdGhpcyRsb2NhbGVzLmluY2x1ZGVzKHRoaXMubG9jYWxlKSkpe3BhcnNlZEFzLnBhdGhuYW1lPWFkZExvY2FsZShwYXJzZWRBcy5wYXRobmFtZSx0aGlzLmxvY2FsZSk7d2luZG93LmxvY2F0aW9uLmhyZWY9KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKShwYXJzZWRBcyk7Ly8gdGhpcyB3YXMgcHJldmlvdXNseSBhIHJldHVybiBidXQgd2FzIHJlbW92ZWQgaW4gZmF2b3Jcbi8vIG9mIGJldHRlciBkZWFkIGNvZGUgZWxpbWluYXRpb24gd2l0aCByZWdlbmVyYXRvciBydW50aW1lXG5kaWROYXZpZ2F0ZT10cnVlO319Y29uc3QgZGV0ZWN0ZWREb21haW49ZGV0ZWN0RG9tYWluTG9jYWxlKHRoaXMuZG9tYWluTG9jYWxlcyx1bmRlZmluZWQsdGhpcy5sb2NhbGUpOy8vIHdlIG5lZWQgdG8gd3JhcCB0aGlzIGluIHRoZSBlbnYgY2hlY2sgYWdhaW4gc2luY2UgcmVnZW5lcmF0b3IgcnVudGltZVxuLy8gbW92ZXMgdGhpcyBvbiBpdHMgb3duIGR1ZSB0byB0aGUgcmV0dXJuXG5pZihwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKXsvLyBpZiB3ZSBhcmUgbmF2aWdhdGluZyB0byBhIGRvbWFpbiBsb2NhbGUgZW5zdXJlIHdlIHJlZGlyZWN0IHRvIHRoZVxuLy8gY29ycmVjdCBkb21haW5cbmlmKCFkaWROYXZpZ2F0ZSYmZGV0ZWN0ZWREb21haW4mJnRoaXMuaXNMb2NhbGVEb21haW4mJnNlbGYubG9jYXRpb24uaG9zdG5hbWUhPT1kZXRlY3RlZERvbWFpbi5kb21haW4pe2NvbnN0IGFzTm9CYXNlUGF0aD1kZWxCYXNlUGF0aChhcyk7d2luZG93LmxvY2F0aW9uLmhyZWY9YGh0dHAke2RldGVjdGVkRG9tYWluLmh0dHA/Jyc6J3MnfTovLyR7ZGV0ZWN0ZWREb21haW4uZG9tYWlufSR7YWRkQmFzZVBhdGgoYCR7dGhpcy5sb2NhbGU9PT1kZXRlY3RlZERvbWFpbi5kZWZhdWx0TG9jYWxlPycnOmAvJHt0aGlzLmxvY2FsZX1gfSR7YXNOb0Jhc2VQYXRoPT09Jy8nPycnOmFzTm9CYXNlUGF0aH1gfHwnLycpfWA7Ly8gdGhpcyB3YXMgcHJldmlvdXNseSBhIHJldHVybiBidXQgd2FzIHJlbW92ZWQgaW4gZmF2b3Jcbi8vIG9mIGJldHRlciBkZWFkIGNvZGUgZWxpbWluYXRpb24gd2l0aCByZWdlbmVyYXRvciBydW50aW1lXG5kaWROYXZpZ2F0ZT10cnVlO319aWYoZGlkTmF2aWdhdGUpe3JldHVybiBuZXcgUHJvbWlzZSgoKT0+e30pO319aWYoIW9wdGlvbnMuX2gpe3RoaXMuaXNTc3I9ZmFsc2U7fS8vIG1hcmtpbmcgcm91dGUgY2hhbmdlcyBhcyBhIG5hdmlnYXRpb24gc3RhcnQgZW50cnlcbmlmKF91dGlscy5TVCl7cGVyZm9ybWFuY2UubWFyaygncm91dGVDaGFuZ2UnKTt9Y29uc3R7c2hhbGxvdz1mYWxzZX09b3B0aW9ucztjb25zdCByb3V0ZVByb3BzPXtzaGFsbG93fTtpZih0aGlzLl9pbkZsaWdodFJvdXRlKXt0aGlzLmFib3J0Q29tcG9uZW50TG9hZCh0aGlzLl9pbkZsaWdodFJvdXRlLHJvdXRlUHJvcHMpO31hcz1hZGRCYXNlUGF0aChhZGRMb2NhbGUoaGFzQmFzZVBhdGgoYXMpP2RlbEJhc2VQYXRoKGFzKTphcyxvcHRpb25zLmxvY2FsZSx0aGlzLmRlZmF1bHRMb2NhbGUpKTtjb25zdCBjbGVhbmVkQXM9ZGVsTG9jYWxlKGhhc0Jhc2VQYXRoKGFzKT9kZWxCYXNlUGF0aChhcyk6YXMsdGhpcy5sb2NhbGUpO3RoaXMuX2luRmxpZ2h0Um91dGU9YXM7Ly8gSWYgdGhlIHVybCBjaGFuZ2UgaXMgb25seSByZWxhdGVkIHRvIGEgaGFzaCBjaGFuZ2Vcbi8vIFdlIHNob3VsZCBub3QgcHJvY2VlZC4gV2Ugc2hvdWxkIG9ubHkgY2hhbmdlIHRoZSBzdGF0ZS5cbi8vIFdBUk5JTkc6IGBfaGAgaXMgYW4gaW50ZXJuYWwgb3B0aW9uIGZvciBoYW5kaW5nIE5leHQuanMgY2xpZW50LXNpZGVcbi8vIGh5ZHJhdGlvbi4gWW91ciBhcHAgc2hvdWxkIF9uZXZlcl8gdXNlIHRoaXMgcHJvcGVydHkuIEl0IG1heSBjaGFuZ2UgYXRcbi8vIGFueSB0aW1lIHdpdGhvdXQgbm90aWNlLlxuaWYoIW9wdGlvbnMuX2gmJnRoaXMub25seUFIYXNoQ2hhbmdlKGNsZWFuZWRBcykpe3RoaXMuYXNQYXRoPWNsZWFuZWRBcztSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VTdGFydCcsYXMscm91dGVQcm9wcyk7Ly8gVE9ETzogZG8gd2UgbmVlZCB0aGUgcmVzb2x2ZWQgaHJlZiB3aGVuIG9ubHkgYSBoYXNoIGNoYW5nZT9cbnRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLHVybCxhcyxvcHRpb25zKTt0aGlzLnNjcm9sbFRvSGFzaChjbGVhbmVkQXMpO3RoaXMubm90aWZ5KHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSxudWxsKTtSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VDb21wbGV0ZScsYXMscm91dGVQcm9wcyk7cmV0dXJuIHRydWU7fWxldCBwYXJzZWQ9KDAsX3BhcnNlUmVsYXRpdmVVcmwucGFyc2VSZWxhdGl2ZVVybCkodXJsKTtsZXR7cGF0aG5hbWUscXVlcnl9PXBhcnNlZDsvLyBUaGUgYnVpbGQgbWFuaWZlc3QgbmVlZHMgdG8gYmUgbG9hZGVkIGJlZm9yZSBhdXRvLXN0YXRpYyBkeW5hbWljIHBhZ2VzXG4vLyBnZXQgdGhlaXIgcXVlcnkgcGFyYW1ldGVycyB0byBhbGxvdyBlbnN1cmluZyB0aGV5IGNhbiBiZSBwYXJzZWQgcHJvcGVybHlcbi8vIHdoZW4gcmV3cml0dGVuIHRvXG5sZXQgcGFnZXMscmV3cml0ZXM7dHJ5e3BhZ2VzPWF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpOyh7X19yZXdyaXRlczpyZXdyaXRlc309YXdhaXQoMCxfcm91dGVMb2FkZXIuZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCkoKSk7fWNhdGNoKGVycil7Ly8gSWYgd2UgZmFpbCB0byByZXNvbHZlIHRoZSBwYWdlIGxpc3Qgb3IgY2xpZW50LWJ1aWxkIG1hbmlmZXN0LCB3ZSBtdXN0XG4vLyBkbyBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb246XG53aW5kb3cubG9jYXRpb24uaHJlZj1hcztyZXR1cm4gZmFsc2U7fS8vIElmIGFza2VkIHRvIGNoYW5nZSB0aGUgY3VycmVudCBVUkwgd2Ugc2hvdWxkIHJlbG9hZCB0aGUgY3VycmVudCBwYWdlXG4vLyAobm90IGxvY2F0aW9uLnJlbG9hZCgpIGJ1dCByZWxvYWQgZ2V0SW5pdGlhbFByb3BzIGFuZCBvdGhlciBOZXh0LmpzIHN0dWZmcylcbi8vIFdlIGFsc28gbmVlZCB0byBzZXQgdGhlIG1ldGhvZCA9IHJlcGxhY2VTdGF0ZSBhbHdheXNcbi8vIGFzIHRoaXMgc2hvdWxkIG5vdCBnbyBpbnRvIHRoZSBoaXN0b3J5IChUaGF0J3MgaG93IGJyb3dzZXJzIHdvcmspXG4vLyBXZSBzaG91bGQgY29tcGFyZSB0aGUgbmV3IGFzUGF0aCB0byB0aGUgY3VycmVudCBhc1BhdGgsIG5vdCB0aGUgdXJsXG5pZighdGhpcy51cmxJc05ldyhjbGVhbmVkQXMpJiYhbG9jYWxlQ2hhbmdlKXttZXRob2Q9J3JlcGxhY2VTdGF0ZSc7fS8vIHdlIG5lZWQgdG8gcmVzb2x2ZSB0aGUgYXMgdmFsdWUgdXNpbmcgcmV3cml0ZXMgZm9yIGR5bmFtaWMgU1NHXG4vLyBwYWdlcyB0byBhbGxvdyBidWlsZGluZyB0aGUgZGF0YSBVUkwgY29ycmVjdGx5XG5sZXQgcmVzb2x2ZWRBcz1hczsvLyB1cmwgYW5kIGFzIHNob3VsZCBhbHdheXMgYmUgcHJlZml4ZWQgd2l0aCBiYXNlUGF0aCBieSB0aGlzXG4vLyBwb2ludCBieSBlaXRoZXIgbmV4dC9saW5rIG9yIHJvdXRlci5wdXNoL3JlcGxhY2Ugc28gc3RyaXAgdGhlXG4vLyBiYXNlUGF0aCBmcm9tIHRoZSBwYXRobmFtZSB0byBtYXRjaCB0aGUgcGFnZXMgZGlyIDEtdG8tMVxucGF0aG5hbWU9cGF0aG5hbWU/KDAsX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gpKGRlbEJhc2VQYXRoKHBhdGhuYW1lKSk6cGF0aG5hbWU7aWYocGF0aG5hbWUhPT0nL19lcnJvcicpe2lmKHByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMmJmFzLnN0YXJ0c1dpdGgoJy8nKSl7Y29uc3QgcmV3cml0ZXNSZXN1bHQ9KDAsX3Jlc29sdmVSZXdyaXRlcy5kZWZhdWx0KShhZGRCYXNlUGF0aChhZGRMb2NhbGUoZGVsQmFzZVBhdGgoYXMpLHRoaXMubG9jYWxlKSkscGFnZXMscmV3cml0ZXMscXVlcnkscD0+cmVzb2x2ZUR5bmFtaWNSb3V0ZShwLHBhZ2VzKSx0aGlzLmxvY2FsZXMpO3Jlc29sdmVkQXM9cmV3cml0ZXNSZXN1bHQuYXNQYXRoO2lmKHJld3JpdGVzUmVzdWx0Lm1hdGNoZWRQYWdlJiZyZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWYpey8vIGlmIHRoaXMgZGlyZWN0bHkgbWF0Y2hlcyBhIHBhZ2Ugd2UgbmVlZCB0byB1cGRhdGUgdGhlIGhyZWYgdG9cbi8vIGFsbG93IHRoZSBjb3JyZWN0IHBhZ2UgY2h1bmsgdG8gYmUgbG9hZGVkXG5wYXRobmFtZT1yZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWY7cGFyc2VkLnBhdGhuYW1lPXBhdGhuYW1lO3VybD0oMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHBhcnNlZCk7fX1lbHNle3BhcnNlZC5wYXRobmFtZT1yZXNvbHZlRHluYW1pY1JvdXRlKHBhdGhuYW1lLHBhZ2VzKTtpZihwYXJzZWQucGF0aG5hbWUhPT1wYXRobmFtZSl7cGF0aG5hbWU9cGFyc2VkLnBhdGhuYW1lO3VybD0oMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHBhcnNlZCk7fX19Y29uc3Qgcm91dGU9KDAsX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gpKHBhdGhuYW1lKTtpZighaXNMb2NhbFVSTChhcykpe2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXt0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgaHJlZjogXCIke3VybH1cIiBhbmQgYXM6IFwiJHthc31cIiwgcmVjZWl2ZWQgcmVsYXRpdmUgaHJlZiBhbmQgZXh0ZXJuYWwgYXNgK2BcXG5TZWUgbW9yZSBpbmZvOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9pbnZhbGlkLXJlbGF0aXZlLXVybC1leHRlcm5hbC1hc2ApO313aW5kb3cubG9jYXRpb24uaHJlZj1hcztyZXR1cm4gZmFsc2U7fXJlc29sdmVkQXM9ZGVsTG9jYWxlKGRlbEJhc2VQYXRoKHJlc29sdmVkQXMpLHRoaXMubG9jYWxlKTtpZigoMCxfaXNEeW5hbWljLmlzRHluYW1pY1JvdXRlKShyb3V0ZSkpe2NvbnN0IHBhcnNlZEFzPSgwLF9wYXJzZVJlbGF0aXZlVXJsLnBhcnNlUmVsYXRpdmVVcmwpKHJlc29sdmVkQXMpO2NvbnN0IGFzUGF0aG5hbWU9cGFyc2VkQXMucGF0aG5hbWU7Y29uc3Qgcm91dGVSZWdleD0oMCxfcm91dGVSZWdleC5nZXRSb3V0ZVJlZ2V4KShyb3V0ZSk7Y29uc3Qgcm91dGVNYXRjaD0oMCxfcm91dGVNYXRjaGVyLmdldFJvdXRlTWF0Y2hlcikocm91dGVSZWdleCkoYXNQYXRobmFtZSk7Y29uc3Qgc2hvdWxkSW50ZXJwb2xhdGU9cm91dGU9PT1hc1BhdGhuYW1lO2NvbnN0IGludGVycG9sYXRlZEFzPXNob3VsZEludGVycG9sYXRlP2ludGVycG9sYXRlQXMocm91dGUsYXNQYXRobmFtZSxxdWVyeSk6e307aWYoIXJvdXRlTWF0Y2h8fHNob3VsZEludGVycG9sYXRlJiYhaW50ZXJwb2xhdGVkQXMucmVzdWx0KXtjb25zdCBtaXNzaW5nUGFyYW1zPU9iamVjdC5rZXlzKHJvdXRlUmVnZXguZ3JvdXBzKS5maWx0ZXIocGFyYW09PiFxdWVyeVtwYXJhbV0pO2lmKG1pc3NpbmdQYXJhbXMubGVuZ3RoPjApe2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXtjb25zb2xlLndhcm4oYCR7c2hvdWxkSW50ZXJwb2xhdGU/YEludGVycG9sYXRpbmcgaHJlZmA6YE1pc21hdGNoaW5nIFxcYGFzXFxgIGFuZCBcXGBocmVmXFxgYH0gZmFpbGVkIHRvIG1hbnVhbGx5IHByb3ZpZGUgYCtgdGhlIHBhcmFtczogJHttaXNzaW5nUGFyYW1zLmpvaW4oJywgJyl9IGluIHRoZSBcXGBocmVmXFxgJ3MgXFxgcXVlcnlcXGBgKTt9dGhyb3cgbmV3IEVycm9yKChzaG91bGRJbnRlcnBvbGF0ZT9gVGhlIHByb3ZpZGVkIFxcYGhyZWZcXGAgKCR7dXJsfSkgdmFsdWUgaXMgbWlzc2luZyBxdWVyeSB2YWx1ZXMgKCR7bWlzc2luZ1BhcmFtcy5qb2luKCcsICcpfSkgdG8gYmUgaW50ZXJwb2xhdGVkIHByb3Blcmx5LiBgOmBUaGUgcHJvdmlkZWQgXFxgYXNcXGAgdmFsdWUgKCR7YXNQYXRobmFtZX0pIGlzIGluY29tcGF0aWJsZSB3aXRoIHRoZSBcXGBocmVmXFxgIHZhbHVlICgke3JvdXRlfSkuIGApK2BSZWFkIG1vcmU6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzLyR7c2hvdWxkSW50ZXJwb2xhdGU/J2hyZWYtaW50ZXJwb2xhdGlvbi1mYWlsZWQnOidpbmNvbXBhdGlibGUtaHJlZi1hcyd9YCk7fX1lbHNlIGlmKHNob3VsZEludGVycG9sYXRlKXthcz0oMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKE9iamVjdC5hc3NpZ24oe30scGFyc2VkQXMse3BhdGhuYW1lOmludGVycG9sYXRlZEFzLnJlc3VsdCxxdWVyeTpvbWl0UGFybXNGcm9tUXVlcnkocXVlcnksaW50ZXJwb2xhdGVkQXMucGFyYW1zKX0pKTt9ZWxzZXsvLyBNZXJnZSBwYXJhbXMgaW50byBgcXVlcnlgLCBvdmVyd3JpdGluZyBhbnkgc3BlY2lmaWVkIGluIHNlYXJjaFxuT2JqZWN0LmFzc2lnbihxdWVyeSxyb3V0ZU1hdGNoKTt9fVJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VTdGFydCcsYXMscm91dGVQcm9wcyk7dHJ5e3ZhciBfc2VsZiRfX05FWFRfREFUQV9fJHAsX3NlbGYkX19ORVhUX0RBVEFfXyRwMjtsZXQgcm91dGVJbmZvPWF3YWl0IHRoaXMuZ2V0Um91dGVJbmZvKHJvdXRlLHBhdGhuYW1lLHF1ZXJ5LGFzLHJlc29sdmVkQXMscm91dGVQcm9wcyk7bGV0e2Vycm9yLHByb3BzLF9fTl9TU0csX19OX1NTUH09cm91dGVJbmZvOy8vIGhhbmRsZSByZWRpcmVjdCBvbiBjbGllbnQtdHJhbnNpdGlvblxuaWYoKF9fTl9TU0d8fF9fTl9TU1ApJiZwcm9wcyl7aWYocHJvcHMucGFnZVByb3BzJiZwcm9wcy5wYWdlUHJvcHMuX19OX1JFRElSRUNUKXtjb25zdCBkZXN0aW5hdGlvbj1wcm9wcy5wYWdlUHJvcHMuX19OX1JFRElSRUNUOy8vIGNoZWNrIGlmIGRlc3RpbmF0aW9uIGlzIGludGVybmFsIChyZXNvbHZlcyB0byBhIHBhZ2UpIGFuZCBhdHRlbXB0XG4vLyBjbGllbnQtbmF2aWdhdGlvbiBpZiBpdCBpcyBmYWxsaW5nIGJhY2sgdG8gaGFyZCBuYXZpZ2F0aW9uIGlmXG4vLyBpdCdzIG5vdFxuaWYoZGVzdGluYXRpb24uc3RhcnRzV2l0aCgnLycpKXtjb25zdCBwYXJzZWRIcmVmPSgwLF9wYXJzZVJlbGF0aXZlVXJsLnBhcnNlUmVsYXRpdmVVcmwpKGRlc3RpbmF0aW9uKTtwYXJzZWRIcmVmLnBhdGhuYW1lPXJlc29sdmVEeW5hbWljUm91dGUocGFyc2VkSHJlZi5wYXRobmFtZSxwYWdlcyk7aWYocGFnZXMuaW5jbHVkZXMocGFyc2VkSHJlZi5wYXRobmFtZSkpe2NvbnN0e3VybDpuZXdVcmwsYXM6bmV3QXN9PXByZXBhcmVVcmxBcyh0aGlzLGRlc3RpbmF0aW9uLGRlc3RpbmF0aW9uKTtyZXR1cm4gdGhpcy5jaGFuZ2UobWV0aG9kLG5ld1VybCxuZXdBcyxvcHRpb25zKTt9fXdpbmRvdy5sb2NhdGlvbi5ocmVmPWRlc3RpbmF0aW9uO3JldHVybiBuZXcgUHJvbWlzZSgoKT0+e30pO310aGlzLmlzUHJldmlldz0hIXByb3BzLl9fTl9QUkVWSUVXOy8vIGhhbmRsZSBTU0cgZGF0YSA0MDRcbmlmKHByb3BzLm5vdEZvdW5kPT09U1NHX0RBVEFfTk9UX0ZPVU5EKXtsZXQgbm90Rm91bmRSb3V0ZTt0cnl7YXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudCgnLzQwNCcpO25vdEZvdW5kUm91dGU9Jy80MDQnO31jYXRjaChfKXtub3RGb3VuZFJvdXRlPScvX2Vycm9yJzt9cm91dGVJbmZvPWF3YWl0IHRoaXMuZ2V0Um91dGVJbmZvKG5vdEZvdW5kUm91dGUsbm90Rm91bmRSb3V0ZSxxdWVyeSxhcyxyZXNvbHZlZEFzLHtzaGFsbG93OmZhbHNlfSk7fX1Sb3V0ZXIuZXZlbnRzLmVtaXQoJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLGFzLHJvdXRlUHJvcHMpO3RoaXMuY2hhbmdlU3RhdGUobWV0aG9kLHVybCxhcyxvcHRpb25zKTtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7Y29uc3QgYXBwQ29tcD10aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50O3dpbmRvdy5uZXh0LmlzUHJlcmVuZGVyZWQ9YXBwQ29tcC5nZXRJbml0aWFsUHJvcHM9PT1hcHBDb21wLm9yaWdHZXRJbml0aWFsUHJvcHMmJiFyb3V0ZUluZm8uQ29tcG9uZW50LmdldEluaXRpYWxQcm9wczt9Ly8gc2hhbGxvdyByb3V0aW5nIGlzIG9ubHkgYWxsb3dlZCBmb3Igc2FtZSBwYWdlIFVSTCBjaGFuZ2VzLlxuY29uc3QgaXNWYWxpZFNoYWxsb3dSb3V0ZT1vcHRpb25zLnNoYWxsb3cmJnRoaXMucm91dGU9PT1yb3V0ZTtpZihvcHRpb25zLl9oJiZwYXRobmFtZT09PScvX2Vycm9yJyYmKChfc2VsZiRfX05FWFRfREFUQV9fJHA9c2VsZi5fX05FWFRfREFUQV9fLnByb3BzKT09bnVsbD92b2lkIDA6KF9zZWxmJF9fTkVYVF9EQVRBX18kcDI9X3NlbGYkX19ORVhUX0RBVEFfXyRwLnBhZ2VQcm9wcyk9PW51bGw/dm9pZCAwOl9zZWxmJF9fTkVYVF9EQVRBX18kcDIuc3RhdHVzQ29kZSk9PT01MDAmJnByb3BzIT1udWxsJiZwcm9wcy5wYWdlUHJvcHMpey8vIGVuc3VyZSBzdGF0dXNDb2RlIGlzIHN0aWxsIGNvcnJlY3QgZm9yIHN0YXRpYyA1MDAgcGFnZVxuLy8gd2hlbiB1cGRhdGluZyBxdWVyeSBpbmZvcm1hdGlvblxucHJvcHMucGFnZVByb3BzLnN0YXR1c0NvZGU9NTAwO31hd2FpdCB0aGlzLnNldChyb3V0ZSxwYXRobmFtZSxxdWVyeSxjbGVhbmVkQXMscm91dGVJbmZvLGZvcmNlZFNjcm9sbHx8KGlzVmFsaWRTaGFsbG93Um91dGV8fCFvcHRpb25zLnNjcm9sbD9udWxsOnt4OjAseTowfSkpLmNhdGNoKGU9PntpZihlLmNhbmNlbGxlZCllcnJvcj1lcnJvcnx8ZTtlbHNlIHRocm93IGU7fSk7aWYoZXJyb3Ipe1JvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsZXJyb3IsY2xlYW5lZEFzLHJvdXRlUHJvcHMpO3Rocm93IGVycm9yO31pZihwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKXtpZih0aGlzLmxvY2FsZSl7ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50Lmxhbmc9dGhpcy5sb2NhbGU7fX1Sb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLGFzLHJvdXRlUHJvcHMpO3JldHVybiB0cnVlO31jYXRjaChlcnIpe2lmKGVyci5jYW5jZWxsZWQpe3JldHVybiBmYWxzZTt9dGhyb3cgZXJyO319Y2hhbmdlU3RhdGUobWV0aG9kLHVybCxhcyxvcHRpb25zPXt9KXtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7aWYodHlwZW9mIHdpbmRvdy5oaXN0b3J5PT09J3VuZGVmaW5lZCcpe2NvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5IGlzIG5vdCBhdmFpbGFibGUuYCk7cmV0dXJuO31pZih0eXBlb2Ygd2luZG93Lmhpc3RvcnlbbWV0aG9kXT09PSd1bmRlZmluZWQnKXtjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeS4ke21ldGhvZH0gaXMgbm90IGF2YWlsYWJsZWApO3JldHVybjt9fWlmKG1ldGhvZCE9PSdwdXNoU3RhdGUnfHwoMCxfdXRpbHMuZ2V0VVJMKSgpIT09YXMpe3RoaXMuX3NoYWxsb3c9b3B0aW9ucy5zaGFsbG93O3dpbmRvdy5oaXN0b3J5W21ldGhvZF0oe3VybCxhcyxvcHRpb25zLF9fTjp0cnVlLGlkeDp0aGlzLl9pZHg9bWV0aG9kIT09J3B1c2hTdGF0ZSc/dGhpcy5faWR4OnRoaXMuX2lkeCsxfSwvLyBNb3N0IGJyb3dzZXJzIGN1cnJlbnRseSBpZ25vcmVzIHRoaXMgcGFyYW1ldGVyLCBhbHRob3VnaCB0aGV5IG1heSB1c2UgaXQgaW4gdGhlIGZ1dHVyZS5cbi8vIFBhc3NpbmcgdGhlIGVtcHR5IHN0cmluZyBoZXJlIHNob3VsZCBiZSBzYWZlIGFnYWluc3QgZnV0dXJlIGNoYW5nZXMgdG8gdGhlIG1ldGhvZC5cbi8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9IaXN0b3J5L3JlcGxhY2VTdGF0ZVxuJycsYXMpO319YXN5bmMgaGFuZGxlUm91dGVJbmZvRXJyb3IoZXJyLHBhdGhuYW1lLHF1ZXJ5LGFzLHJvdXRlUHJvcHMsbG9hZEVycm9yRmFpbCl7aWYoZXJyLmNhbmNlbGxlZCl7Ly8gYnViYmxlIHVwIGNhbmNlbGxhdGlvbiBlcnJvcnNcbnRocm93IGVycjt9aWYoKDAsX3JvdXRlTG9hZGVyLmlzQXNzZXRFcnJvcikoZXJyKXx8bG9hZEVycm9yRmFpbCl7Um91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJyxlcnIsYXMscm91dGVQcm9wcyk7Ly8gSWYgd2UgY2FuJ3QgbG9hZCB0aGUgcGFnZSBpdCBjb3VsZCBiZSBvbmUgb2YgZm9sbG93aW5nIHJlYXNvbnNcbi8vICAxLiBQYWdlIGRvZXNuJ3QgZXhpc3RzXG4vLyAgMi4gUGFnZSBkb2VzIGV4aXN0IGluIGEgZGlmZmVyZW50IHpvbmVcbi8vICAzLiBJbnRlcm5hbCBlcnJvciB3aGlsZSBsb2FkaW5nIHRoZSBwYWdlXG4vLyBTbywgZG9pbmcgYSBoYXJkIHJlbG9hZCBpcyB0aGUgcHJvcGVyIHdheSB0byBkZWFsIHdpdGggdGhpcy5cbndpbmRvdy5sb2NhdGlvbi5ocmVmPWFzOy8vIENoYW5naW5nIHRoZSBVUkwgZG9lc24ndCBibG9jayBleGVjdXRpbmcgdGhlIGN1cnJlbnQgY29kZSBwYXRoLlxuLy8gU28gbGV0J3MgdGhyb3cgYSBjYW5jZWxsYXRpb24gZXJyb3Igc3RvcCB0aGUgcm91dGluZyBsb2dpYy5cbnRocm93IGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKTt9dHJ5e2xldCBDb21wb25lbnQ7bGV0IHN0eWxlU2hlZXRzO2xldCBwcm9wcztpZih0eXBlb2YgQ29tcG9uZW50PT09J3VuZGVmaW5lZCd8fHR5cGVvZiBzdHlsZVNoZWV0cz09PSd1bmRlZmluZWQnKXs7KHtwYWdlOkNvbXBvbmVudCxzdHlsZVNoZWV0c309YXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudCgnL19lcnJvcicpKTt9Y29uc3Qgcm91dGVJbmZvPXtwcm9wcyxDb21wb25lbnQsc3R5bGVTaGVldHMsZXJyLGVycm9yOmVycn07aWYoIXJvdXRlSW5mby5wcm9wcyl7dHJ5e3JvdXRlSW5mby5wcm9wcz1hd2FpdCB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQse2VycixwYXRobmFtZSxxdWVyeX0pO31jYXRjaChnaXBFcnIpe2NvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGVycm9yIHBhZ2UgYGdldEluaXRpYWxQcm9wc2A6ICcsZ2lwRXJyKTtyb3V0ZUluZm8ucHJvcHM9e307fX1yZXR1cm4gcm91dGVJbmZvO31jYXRjaChyb3V0ZUluZm9FcnIpe3JldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKHJvdXRlSW5mb0VycixwYXRobmFtZSxxdWVyeSxhcyxyb3V0ZVByb3BzLHRydWUpO319YXN5bmMgZ2V0Um91dGVJbmZvKHJvdXRlLHBhdGhuYW1lLHF1ZXJ5LGFzLHJlc29sdmVkQXMscm91dGVQcm9wcyl7dHJ5e2NvbnN0IGV4aXN0aW5nUm91dGVJbmZvPXRoaXMuY29tcG9uZW50c1tyb3V0ZV07aWYocm91dGVQcm9wcy5zaGFsbG93JiZleGlzdGluZ1JvdXRlSW5mbyYmdGhpcy5yb3V0ZT09PXJvdXRlKXtyZXR1cm4gZXhpc3RpbmdSb3V0ZUluZm87fWNvbnN0IGNhY2hlZFJvdXRlSW5mbz1leGlzdGluZ1JvdXRlSW5mbyYmJ2luaXRpYWwnaW4gZXhpc3RpbmdSb3V0ZUluZm8/dW5kZWZpbmVkOmV4aXN0aW5nUm91dGVJbmZvO2NvbnN0IHJvdXRlSW5mbz1jYWNoZWRSb3V0ZUluZm8/Y2FjaGVkUm91dGVJbmZvOmF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQocm91dGUpLnRoZW4ocmVzPT4oe0NvbXBvbmVudDpyZXMucGFnZSxzdHlsZVNoZWV0czpyZXMuc3R5bGVTaGVldHMsX19OX1NTRzpyZXMubW9kLl9fTl9TU0csX19OX1NTUDpyZXMubW9kLl9fTl9TU1B9KSk7Y29uc3R7Q29tcG9uZW50LF9fTl9TU0csX19OX1NTUH09cm91dGVJbmZvO2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXtjb25zdHtpc1ZhbGlkRWxlbWVudFR5cGV9PXJlcXVpcmUoJ3JlYWN0LWlzJyk7aWYoIWlzVmFsaWRFbGVtZW50VHlwZShDb21wb25lbnQpKXt0aHJvdyBuZXcgRXJyb3IoYFRoZSBkZWZhdWx0IGV4cG9ydCBpcyBub3QgYSBSZWFjdCBDb21wb25lbnQgaW4gcGFnZTogXCIke3BhdGhuYW1lfVwiYCk7fX1sZXQgZGF0YUhyZWY7aWYoX19OX1NTR3x8X19OX1NTUCl7ZGF0YUhyZWY9dGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKCgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikoe3BhdGhuYW1lLHF1ZXJ5fSkscmVzb2x2ZWRBcyxfX05fU1NHLHRoaXMubG9jYWxlKTt9Y29uc3QgcHJvcHM9YXdhaXQgdGhpcy5fZ2V0RGF0YSgoKT0+X19OX1NTRz90aGlzLl9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmKTpfX05fU1NQP3RoaXMuX2dldFNlcnZlckRhdGEoZGF0YUhyZWYpOnRoaXMuZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwvLyB3ZSBwcm92aWRlIEFwcFRyZWUgbGF0ZXIgc28gdGhpcyBuZWVkcyB0byBiZSBgYW55YFxue3BhdGhuYW1lLHF1ZXJ5LGFzUGF0aDphc30pKTtyb3V0ZUluZm8ucHJvcHM9cHJvcHM7dGhpcy5jb21wb25lbnRzW3JvdXRlXT1yb3V0ZUluZm87cmV0dXJuIHJvdXRlSW5mbzt9Y2F0Y2goZXJyKXtyZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihlcnIscGF0aG5hbWUscXVlcnksYXMscm91dGVQcm9wcyk7fX1zZXQocm91dGUscGF0aG5hbWUscXVlcnksYXMsZGF0YSxyZXNldFNjcm9sbCl7dGhpcy5pc0ZhbGxiYWNrPWZhbHNlO3RoaXMucm91dGU9cm91dGU7dGhpcy5wYXRobmFtZT1wYXRobmFtZTt0aGlzLnF1ZXJ5PXF1ZXJ5O3RoaXMuYXNQYXRoPWFzO3JldHVybiB0aGlzLm5vdGlmeShkYXRhLHJlc2V0U2Nyb2xsKTt9LyoqXG4gICAqIENhbGxiYWNrIHRvIGV4ZWN1dGUgYmVmb3JlIHJlcGxhY2luZyByb3V0ZXIgc3RhdGVcbiAgICogQHBhcmFtIGNiIGNhbGxiYWNrIHRvIGJlIGV4ZWN1dGVkXG4gICAqL2JlZm9yZVBvcFN0YXRlKGNiKXt0aGlzLl9icHM9Y2I7fW9ubHlBSGFzaENoYW5nZShhcyl7aWYoIXRoaXMuYXNQYXRoKXJldHVybiBmYWxzZTtjb25zdFtvbGRVcmxOb0hhc2gsb2xkSGFzaF09dGhpcy5hc1BhdGguc3BsaXQoJyMnKTtjb25zdFtuZXdVcmxOb0hhc2gsbmV3SGFzaF09YXMuc3BsaXQoJyMnKTsvLyBNYWtlcyBzdXJlIHdlIHNjcm9sbCB0byB0aGUgcHJvdmlkZWQgaGFzaCBpZiB0aGUgdXJsL2hhc2ggYXJlIHRoZSBzYW1lXG5pZihuZXdIYXNoJiZvbGRVcmxOb0hhc2g9PT1uZXdVcmxOb0hhc2gmJm9sZEhhc2g9PT1uZXdIYXNoKXtyZXR1cm4gdHJ1ZTt9Ly8gSWYgdGhlIHVybHMgYXJlIGNoYW5nZSwgdGhlcmUncyBtb3JlIHRoYW4gYSBoYXNoIGNoYW5nZVxuaWYob2xkVXJsTm9IYXNoIT09bmV3VXJsTm9IYXNoKXtyZXR1cm4gZmFsc2U7fS8vIElmIHRoZSBoYXNoIGhhcyBjaGFuZ2VkLCB0aGVuIGl0J3MgYSBoYXNoIG9ubHkgY2hhbmdlLlxuLy8gVGhpcyBjaGVjayBpcyBuZWNlc3NhcnkgdG8gaGFuZGxlIGJvdGggdGhlIGVudGVyIGFuZFxuLy8gbGVhdmUgaGFzaCA9PT0gJycgY2FzZXMuIFRoZSBpZGVudGl0eSBjYXNlIGZhbGxzIHRocm91Z2hcbi8vIGFuZCBpcyB0cmVhdGVkIGFzIGEgbmV4dCByZWxvYWQuXG5yZXR1cm4gb2xkSGFzaCE9PW5ld0hhc2g7fXNjcm9sbFRvSGFzaChhcyl7Y29uc3RbLGhhc2hdPWFzLnNwbGl0KCcjJyk7Ly8gU2Nyb2xsIHRvIHRvcCBpZiB0aGUgaGFzaCBpcyBqdXN0IGAjYCB3aXRoIG5vIHZhbHVlIG9yIGAjdG9wYFxuLy8gVG8gbWlycm9yIGJyb3dzZXJzXG5pZihoYXNoPT09Jyd8fGhhc2g9PT0ndG9wJyl7d2luZG93LnNjcm9sbFRvKDAsMCk7cmV0dXJuO30vLyBGaXJzdCB3ZSBjaGVjayBpZiB0aGUgZWxlbWVudCBieSBpZCBpcyBmb3VuZFxuY29uc3QgaWRFbD1kb2N1bWVudC5nZXRFbGVtZW50QnlJZChoYXNoKTtpZihpZEVsKXtpZEVsLnNjcm9sbEludG9WaWV3KCk7cmV0dXJuO30vLyBJZiB0aGVyZSdzIG5vIGVsZW1lbnQgd2l0aCB0aGUgaWQsIHdlIGNoZWNrIHRoZSBgbmFtZWAgcHJvcGVydHlcbi8vIFRvIG1pcnJvciBicm93c2Vyc1xuY29uc3QgbmFtZUVsPWRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKGhhc2gpWzBdO2lmKG5hbWVFbCl7bmFtZUVsLnNjcm9sbEludG9WaWV3KCk7fX11cmxJc05ldyhhc1BhdGgpe3JldHVybiB0aGlzLmFzUGF0aCE9PWFzUGF0aDt9LyoqXG4gICAqIFByZWZldGNoIHBhZ2UgY29kZSwgeW91IG1heSB3YWl0IGZvciB0aGUgZGF0YSBkdXJpbmcgcGFnZSByZW5kZXJpbmcuXG4gICAqIFRoaXMgZmVhdHVyZSBvbmx5IHdvcmtzIGluIHByb2R1Y3Rpb24hXG4gICAqIEBwYXJhbSB1cmwgdGhlIGhyZWYgb2YgcHJlZmV0Y2hlZCBwYWdlXG4gICAqIEBwYXJhbSBhc1BhdGggdGhlIGFzIHBhdGggb2YgdGhlIHByZWZldGNoZWQgcGFnZVxuICAgKi9hc3luYyBwcmVmZXRjaCh1cmwsYXNQYXRoPXVybCxvcHRpb25zPXt9KXtsZXQgcGFyc2VkPSgwLF9wYXJzZVJlbGF0aXZlVXJsLnBhcnNlUmVsYXRpdmVVcmwpKHVybCk7bGV0e3BhdGhuYW1lfT1wYXJzZWQ7aWYocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCl7aWYob3B0aW9ucy5sb2NhbGU9PT1mYWxzZSl7cGF0aG5hbWU9KDAsX25vcm1hbGl6ZUxvY2FsZVBhdGgubm9ybWFsaXplTG9jYWxlUGF0aCkocGF0aG5hbWUsdGhpcy5sb2NhbGVzKS5wYXRobmFtZTtwYXJzZWQucGF0aG5hbWU9cGF0aG5hbWU7dXJsPSgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikocGFyc2VkKTtsZXQgcGFyc2VkQXM9KDAsX3BhcnNlUmVsYXRpdmVVcmwucGFyc2VSZWxhdGl2ZVVybCkoYXNQYXRoKTtjb25zdCBsb2NhbGVQYXRoUmVzdWx0PSgwLF9ub3JtYWxpemVMb2NhbGVQYXRoLm5vcm1hbGl6ZUxvY2FsZVBhdGgpKHBhcnNlZEFzLnBhdGhuYW1lLHRoaXMubG9jYWxlcyk7cGFyc2VkQXMucGF0aG5hbWU9bG9jYWxlUGF0aFJlc3VsdC5wYXRobmFtZTtvcHRpb25zLmxvY2FsZT1sb2NhbGVQYXRoUmVzdWx0LmRldGVjdGVkTG9jYWxlfHx0aGlzLmRlZmF1bHRMb2NhbGU7YXNQYXRoPSgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikocGFyc2VkQXMpO319Y29uc3QgcGFnZXM9YXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KCk7bGV0IHJlc29sdmVkQXM9YXNQYXRoO2lmKHByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMmJmFzUGF0aC5zdGFydHNXaXRoKCcvJykpe2xldCByZXdyaXRlczsoe19fcmV3cml0ZXM6cmV3cml0ZXN9PWF3YWl0KDAsX3JvdXRlTG9hZGVyLmdldENsaWVudEJ1aWxkTWFuaWZlc3QpKCkpO2NvbnN0IHJld3JpdGVzUmVzdWx0PSgwLF9yZXNvbHZlUmV3cml0ZXMuZGVmYXVsdCkoYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGFzUGF0aCx0aGlzLmxvY2FsZSkpLHBhZ2VzLHJld3JpdGVzLHBhcnNlZC5xdWVyeSxwPT5yZXNvbHZlRHluYW1pY1JvdXRlKHAscGFnZXMpLHRoaXMubG9jYWxlcyk7cmVzb2x2ZWRBcz1kZWxMb2NhbGUoZGVsQmFzZVBhdGgocmV3cml0ZXNSZXN1bHQuYXNQYXRoKSx0aGlzLmxvY2FsZSk7aWYocmV3cml0ZXNSZXN1bHQubWF0Y2hlZFBhZ2UmJnJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZil7Ly8gaWYgdGhpcyBkaXJlY3RseSBtYXRjaGVzIGEgcGFnZSB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGUgaHJlZiB0b1xuLy8gYWxsb3cgdGhlIGNvcnJlY3QgcGFnZSBjaHVuayB0byBiZSBsb2FkZWRcbnBhdGhuYW1lPXJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZjtwYXJzZWQucGF0aG5hbWU9cGF0aG5hbWU7dXJsPSgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikocGFyc2VkKTt9fWVsc2V7cGFyc2VkLnBhdGhuYW1lPXJlc29sdmVEeW5hbWljUm91dGUocGFyc2VkLnBhdGhuYW1lLHBhZ2VzKTtpZihwYXJzZWQucGF0aG5hbWUhPT1wYXRobmFtZSl7cGF0aG5hbWU9cGFyc2VkLnBhdGhuYW1lO3VybD0oMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHBhcnNlZCk7fX1jb25zdCByb3V0ZT0oMCxfbm9ybWFsaXplVHJhaWxpbmdTbGFzaC5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCkocGF0aG5hbWUpOy8vIFByZWZldGNoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gZGV2ZWxvcG1lbnQgbW9kZSBiZWNhdXNlIGl0IHdvdWxkIHRyaWdnZXIgb24tZGVtYW5kLWVudHJpZXNcbmlmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXtyZXR1cm47fWF3YWl0IFByb21pc2UuYWxsKFt0aGlzLnBhZ2VMb2FkZXIuX2lzU3NnKHJvdXRlKS50aGVuKGlzU3NnPT57cmV0dXJuIGlzU3NnP3RoaXMuX2dldFN0YXRpY0RhdGEodGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKHVybCxyZXNvbHZlZEFzLHRydWUsdHlwZW9mIG9wdGlvbnMubG9jYWxlIT09J3VuZGVmaW5lZCc/b3B0aW9ucy5sb2NhbGU6dGhpcy5sb2NhbGUpKTpmYWxzZTt9KSx0aGlzLnBhZ2VMb2FkZXJbb3B0aW9ucy5wcmlvcml0eT8nbG9hZFBhZ2UnOidwcmVmZXRjaCddKHJvdXRlKV0pO31hc3luYyBmZXRjaENvbXBvbmVudChyb3V0ZSl7bGV0IGNhbmNlbGxlZD1mYWxzZTtjb25zdCBjYW5jZWw9dGhpcy5jbGM9KCk9PntjYW5jZWxsZWQ9dHJ1ZTt9O2NvbnN0IGNvbXBvbmVudFJlc3VsdD1hd2FpdCB0aGlzLnBhZ2VMb2FkZXIubG9hZFBhZ2Uocm91dGUpO2lmKGNhbmNlbGxlZCl7Y29uc3QgZXJyb3I9bmV3IEVycm9yKGBBYm9ydCBmZXRjaGluZyBjb21wb25lbnQgZm9yIHJvdXRlOiBcIiR7cm91dGV9XCJgKTtlcnJvci5jYW5jZWxsZWQ9dHJ1ZTt0aHJvdyBlcnJvcjt9aWYoY2FuY2VsPT09dGhpcy5jbGMpe3RoaXMuY2xjPW51bGw7fXJldHVybiBjb21wb25lbnRSZXN1bHQ7fV9nZXREYXRhKGZuKXtsZXQgY2FuY2VsbGVkPWZhbHNlO2NvbnN0IGNhbmNlbD0oKT0+e2NhbmNlbGxlZD10cnVlO307dGhpcy5jbGM9Y2FuY2VsO3JldHVybiBmbigpLnRoZW4oZGF0YT0+e2lmKGNhbmNlbD09PXRoaXMuY2xjKXt0aGlzLmNsYz1udWxsO31pZihjYW5jZWxsZWQpe2NvbnN0IGVycj1uZXcgRXJyb3IoJ0xvYWRpbmcgaW5pdGlhbCBwcm9wcyBjYW5jZWxsZWQnKTtlcnIuY2FuY2VsbGVkPXRydWU7dGhyb3cgZXJyO31yZXR1cm4gZGF0YTt9KTt9X2dldFN0YXRpY0RhdGEoZGF0YUhyZWYpe2NvbnN0e2hyZWY6Y2FjaGVLZXl9PW5ldyBVUkwoZGF0YUhyZWYsd2luZG93LmxvY2F0aW9uLmhyZWYpO2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WPT09J3Byb2R1Y3Rpb24nJiYhdGhpcy5pc1ByZXZpZXcmJnRoaXMuc2RjW2NhY2hlS2V5XSl7cmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLnNkY1tjYWNoZUtleV0pO31yZXR1cm4gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZix0aGlzLmlzU3NyKS50aGVuKGRhdGE9Pnt0aGlzLnNkY1tjYWNoZUtleV09ZGF0YTtyZXR1cm4gZGF0YTt9KTt9X2dldFNlcnZlckRhdGEoZGF0YUhyZWYpe2NvbnN0e2hyZWY6cmVzb3VyY2VLZXl9PW5ldyBVUkwoZGF0YUhyZWYsd2luZG93LmxvY2F0aW9uLmhyZWYpO2lmKHRoaXMuc2RyW3Jlc291cmNlS2V5XSl7cmV0dXJuIHRoaXMuc2RyW3Jlc291cmNlS2V5XTt9cmV0dXJuIHRoaXMuc2RyW3Jlc291cmNlS2V5XT1mZXRjaE5leHREYXRhKGRhdGFIcmVmLHRoaXMuaXNTc3IpLnRoZW4oZGF0YT0+e2RlbGV0ZSB0aGlzLnNkcltyZXNvdXJjZUtleV07cmV0dXJuIGRhdGE7fSkuY2F0Y2goZXJyPT57ZGVsZXRlIHRoaXMuc2RyW3Jlc291cmNlS2V5XTt0aHJvdyBlcnI7fSk7fWdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsY3R4KXtjb25zdHtDb21wb25lbnQ6QXBwfT10aGlzLmNvbXBvbmVudHNbJy9fYXBwJ107Y29uc3QgQXBwVHJlZT10aGlzLl93cmFwQXBwKEFwcCk7Y3R4LkFwcFRyZWU9QXBwVHJlZTtyZXR1cm4oMCxfdXRpbHMubG9hZEdldEluaXRpYWxQcm9wcykoQXBwLHtBcHBUcmVlLENvbXBvbmVudCxyb3V0ZXI6dGhpcyxjdHh9KTt9YWJvcnRDb21wb25lbnRMb2FkKGFzLHJvdXRlUHJvcHMpe2lmKHRoaXMuY2xjKXtSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSxhcyxyb3V0ZVByb3BzKTt0aGlzLmNsYygpO3RoaXMuY2xjPW51bGw7fX1ub3RpZnkoZGF0YSxyZXNldFNjcm9sbCl7cmV0dXJuIHRoaXMuc3ViKGRhdGEsdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudCxyZXNldFNjcm9sbCk7fX1leHBvcnRzLmRlZmF1bHQ9Um91dGVyO1JvdXRlci5ldmVudHM9KDAsX21pdHQuZGVmYXVsdCkoKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJvdXRlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmZvcm1hdFVybD1mb3JtYXRVcmw7dmFyIHF1ZXJ5c3RyaW5nPV9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCIuL3F1ZXJ5c3RyaW5nXCIpKTtmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKXtpZih0eXBlb2YgV2Vha01hcCE9PVwiZnVuY3Rpb25cIilyZXR1cm4gbnVsbDt2YXIgY2FjaGU9bmV3IFdlYWtNYXAoKTtfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGU9ZnVuY3Rpb24oKXtyZXR1cm4gY2FjaGU7fTtyZXR1cm4gY2FjaGU7fWZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iail7aWYob2JqJiZvYmouX19lc01vZHVsZSl7cmV0dXJuIG9iajt9aWYob2JqPT09bnVsbHx8dHlwZW9mIG9iaiE9PVwib2JqZWN0XCImJnR5cGVvZiBvYmohPT1cImZ1bmN0aW9uXCIpe3JldHVybntkZWZhdWx0Om9ian07fXZhciBjYWNoZT1fZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTtpZihjYWNoZSYmY2FjaGUuaGFzKG9iaikpe3JldHVybiBjYWNoZS5nZXQob2JqKTt9dmFyIG5ld09iaj17fTt2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yPU9iamVjdC5kZWZpbmVQcm9wZXJ0eSYmT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtmb3IodmFyIGtleSBpbiBvYmope2lmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosa2V5KSl7dmFyIGRlc2M9aGFzUHJvcGVydHlEZXNjcmlwdG9yP09iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLGtleSk6bnVsbDtpZihkZXNjJiYoZGVzYy5nZXR8fGRlc2Muc2V0KSl7T2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaixrZXksZGVzYyk7fWVsc2V7bmV3T2JqW2tleV09b2JqW2tleV07fX19bmV3T2JqLmRlZmF1bHQ9b2JqO2lmKGNhY2hlKXtjYWNoZS5zZXQob2JqLG5ld09iaik7fXJldHVybiBuZXdPYmo7fS8vIEZvcm1hdCBmdW5jdGlvbiBtb2RpZmllZCBmcm9tIG5vZGVqc1xuLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5jb25zdCBzbGFzaGVkUHJvdG9jb2xzPS9odHRwcz98ZnRwfGdvcGhlcnxmaWxlLztmdW5jdGlvbiBmb3JtYXRVcmwodXJsT2JqKXtsZXR7YXV0aCxob3N0bmFtZX09dXJsT2JqO2xldCBwcm90b2NvbD11cmxPYmoucHJvdG9jb2x8fCcnO2xldCBwYXRobmFtZT11cmxPYmoucGF0aG5hbWV8fCcnO2xldCBoYXNoPXVybE9iai5oYXNofHwnJztsZXQgcXVlcnk9dXJsT2JqLnF1ZXJ5fHwnJztsZXQgaG9zdD1mYWxzZTthdXRoPWF1dGg/ZW5jb2RlVVJJQ29tcG9uZW50KGF1dGgpLnJlcGxhY2UoLyUzQS9pLCc6JykrJ0AnOicnO2lmKHVybE9iai5ob3N0KXtob3N0PWF1dGgrdXJsT2JqLmhvc3Q7fWVsc2UgaWYoaG9zdG5hbWUpe2hvc3Q9YXV0aCsofmhvc3RuYW1lLmluZGV4T2YoJzonKT9gWyR7aG9zdG5hbWV9XWA6aG9zdG5hbWUpO2lmKHVybE9iai5wb3J0KXtob3N0Kz0nOicrdXJsT2JqLnBvcnQ7fX1pZihxdWVyeSYmdHlwZW9mIHF1ZXJ5PT09J29iamVjdCcpe3F1ZXJ5PVN0cmluZyhxdWVyeXN0cmluZy51cmxRdWVyeVRvU2VhcmNoUGFyYW1zKHF1ZXJ5KSk7fWxldCBzZWFyY2g9dXJsT2JqLnNlYXJjaHx8cXVlcnkmJmA/JHtxdWVyeX1gfHwnJztpZihwcm90b2NvbCYmcHJvdG9jb2wuc3Vic3RyKC0xKSE9PSc6Jylwcm90b2NvbCs9JzonO2lmKHVybE9iai5zbGFzaGVzfHwoIXByb3RvY29sfHxzbGFzaGVkUHJvdG9jb2xzLnRlc3QocHJvdG9jb2wpKSYmaG9zdCE9PWZhbHNlKXtob3N0PScvLycrKGhvc3R8fCcnKTtpZihwYXRobmFtZSYmcGF0aG5hbWVbMF0hPT0nLycpcGF0aG5hbWU9Jy8nK3BhdGhuYW1lO31lbHNlIGlmKCFob3N0KXtob3N0PScnO31pZihoYXNoJiZoYXNoWzBdIT09JyMnKWhhc2g9JyMnK2hhc2g7aWYoc2VhcmNoJiZzZWFyY2hbMF0hPT0nPycpc2VhcmNoPSc/JytzZWFyY2g7cGF0aG5hbWU9cGF0aG5hbWUucmVwbGFjZSgvWz8jXS9nLGVuY29kZVVSSUNvbXBvbmVudCk7c2VhcmNoPXNlYXJjaC5yZXBsYWNlKCcjJywnJTIzJyk7cmV0dXJuYCR7cHJvdG9jb2x9JHtob3N0fSR7cGF0aG5hbWV9JHtzZWFyY2h9JHtoYXNofWA7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Zm9ybWF0LXVybC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmlzRHluYW1pY1JvdXRlPWlzRHluYW1pY1JvdXRlOy8vIElkZW50aWZ5IC9bcGFyYW1dLyBpbiByb3V0ZSBzdHJpbmdcbmNvbnN0IFRFU1RfUk9VVEU9L1xcL1xcW1teL10rP1xcXSg/PVxcL3wkKS87ZnVuY3Rpb24gaXNEeW5hbWljUm91dGUocm91dGUpe3JldHVybiBURVNUX1JPVVRFLnRlc3Qocm91dGUpO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWlzLWR5bmFtaWMuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5wYXJzZVJlbGF0aXZlVXJsPXBhcnNlUmVsYXRpdmVVcmw7dmFyIF91dGlscz1yZXF1aXJlKFwiLi4vLi4vdXRpbHNcIik7dmFyIF9xdWVyeXN0cmluZz1yZXF1aXJlKFwiLi9xdWVyeXN0cmluZ1wiKTsvKipcbiAqIFBhcnNlcyBwYXRoLXJlbGF0aXZlIHVybHMgKGUuZy4gYC9oZWxsby93b3JsZD9mb289YmFyYCkuIElmIHVybCBpc24ndCBwYXRoLXJlbGF0aXZlXG4gKiAoZS5nLiBgLi9oZWxsb2ApIHRoZW4gYXQgbGVhc3QgYmFzZSBtdXN0IGJlLlxuICogQWJzb2x1dGUgdXJscyBhcmUgcmVqZWN0ZWQgd2l0aCBvbmUgZXhjZXB0aW9uLCBpbiB0aGUgYnJvd3NlciwgYWJzb2x1dGUgdXJscyB0aGF0IGFyZSBvblxuICogdGhlIGN1cnJlbnQgb3JpZ2luIHdpbGwgYmUgcGFyc2VkIGFzIHJlbGF0aXZlXG4gKi9mdW5jdGlvbiBwYXJzZVJlbGF0aXZlVXJsKHVybCxiYXNlKXtjb25zdCBnbG9iYWxCYXNlPW5ldyBVUkwodHlwZW9mIHdpbmRvdz09PSd1bmRlZmluZWQnPydodHRwOi8vbic6KDAsX3V0aWxzLmdldExvY2F0aW9uT3JpZ2luKSgpKTtjb25zdCByZXNvbHZlZEJhc2U9YmFzZT9uZXcgVVJMKGJhc2UsZ2xvYmFsQmFzZSk6Z2xvYmFsQmFzZTtjb25zdHtwYXRobmFtZSxzZWFyY2hQYXJhbXMsc2VhcmNoLGhhc2gsaHJlZixvcmlnaW59PW5ldyBVUkwodXJsLHJlc29sdmVkQmFzZSk7aWYob3JpZ2luIT09Z2xvYmFsQmFzZS5vcmlnaW4pe3Rocm93IG5ldyBFcnJvcihgaW52YXJpYW50OiBpbnZhbGlkIHJlbGF0aXZlIFVSTCwgcm91dGVyIHJlY2VpdmVkICR7dXJsfWApO31yZXR1cm57cGF0aG5hbWUscXVlcnk6KDAsX3F1ZXJ5c3RyaW5nLnNlYXJjaFBhcmFtc1RvVXJsUXVlcnkpKHNlYXJjaFBhcmFtcyksc2VhcmNoLGhhc2gsaHJlZjpocmVmLnNsaWNlKGdsb2JhbEJhc2Uub3JpZ2luLmxlbmd0aCl9O31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBhcnNlLXJlbGF0aXZlLXVybC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLnBhdGhUb1JlZ2V4cD1leHBvcnRzLmRlZmF1bHQ9ZXhwb3J0cy5jdXN0b21Sb3V0ZU1hdGNoZXJPcHRpb25zPWV4cG9ydHMubWF0Y2hlck9wdGlvbnM9dm9pZCAwO3ZhciBwYXRoVG9SZWdleHA9X2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcIm5leHQvZGlzdC9jb21waWxlZC9wYXRoLXRvLXJlZ2V4cFwiKSk7ZXhwb3J0cy5wYXRoVG9SZWdleHA9cGF0aFRvUmVnZXhwO2Z1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpe2lmKHR5cGVvZiBXZWFrTWFwIT09XCJmdW5jdGlvblwiKXJldHVybiBudWxsO3ZhciBjYWNoZT1uZXcgV2Vha01hcCgpO19nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZT1mdW5jdGlvbigpe3JldHVybiBjYWNoZTt9O3JldHVybiBjYWNoZTt9ZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKXtpZihvYmomJm9iai5fX2VzTW9kdWxlKXtyZXR1cm4gb2JqO31pZihvYmo9PT1udWxsfHx0eXBlb2Ygb2JqIT09XCJvYmplY3RcIiYmdHlwZW9mIG9iaiE9PVwiZnVuY3Rpb25cIil7cmV0dXJue2RlZmF1bHQ6b2JqfTt9dmFyIGNhY2hlPV9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpO2lmKGNhY2hlJiZjYWNoZS5oYXMob2JqKSl7cmV0dXJuIGNhY2hlLmdldChvYmopO312YXIgbmV3T2JqPXt9O3ZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3I9T2JqZWN0LmRlZmluZVByb3BlcnR5JiZPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO2Zvcih2YXIga2V5IGluIG9iail7aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaixrZXkpKXt2YXIgZGVzYz1oYXNQcm9wZXJ0eURlc2NyaXB0b3I/T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosa2V5KTpudWxsO2lmKGRlc2MmJihkZXNjLmdldHx8ZGVzYy5zZXQpKXtPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLGtleSxkZXNjKTt9ZWxzZXtuZXdPYmpba2V5XT1vYmpba2V5XTt9fX1uZXdPYmouZGVmYXVsdD1vYmo7aWYoY2FjaGUpe2NhY2hlLnNldChvYmosbmV3T2JqKTt9cmV0dXJuIG5ld09iajt9Y29uc3QgbWF0Y2hlck9wdGlvbnM9e3NlbnNpdGl2ZTpmYWxzZSxkZWxpbWl0ZXI6Jy8nfTtleHBvcnRzLm1hdGNoZXJPcHRpb25zPW1hdGNoZXJPcHRpb25zO2NvbnN0IGN1c3RvbVJvdXRlTWF0Y2hlck9wdGlvbnM9ey4uLm1hdGNoZXJPcHRpb25zLHN0cmljdDp0cnVlfTtleHBvcnRzLmN1c3RvbVJvdXRlTWF0Y2hlck9wdGlvbnM9Y3VzdG9tUm91dGVNYXRjaGVyT3B0aW9uczt2YXIgX2RlZmF1bHQ9KGN1c3RvbVJvdXRlPWZhbHNlKT0+e3JldHVybiBwYXRoPT57Y29uc3Qga2V5cz1bXTtjb25zdCBtYXRjaGVyUmVnZXg9cGF0aFRvUmVnZXhwLnBhdGhUb1JlZ2V4cChwYXRoLGtleXMsY3VzdG9tUm91dGU/Y3VzdG9tUm91dGVNYXRjaGVyT3B0aW9uczptYXRjaGVyT3B0aW9ucyk7Y29uc3QgbWF0Y2hlcj1wYXRoVG9SZWdleHAucmVnZXhwVG9GdW5jdGlvbihtYXRjaGVyUmVnZXgsa2V5cyk7cmV0dXJuKHBhdGhuYW1lLHBhcmFtcyk9Pntjb25zdCByZXM9cGF0aG5hbWU9PW51bGw/ZmFsc2U6bWF0Y2hlcihwYXRobmFtZSk7aWYoIXJlcyl7cmV0dXJuIGZhbHNlO31pZihjdXN0b21Sb3V0ZSl7Zm9yKGNvbnN0IGtleSBvZiBrZXlzKXsvLyB1bm5hbWVkIHBhcmFtcyBzaG91bGQgYmUgcmVtb3ZlZCBhcyB0aGV5XG4vLyBhcmUgbm90IGFsbG93ZWQgdG8gYmUgdXNlZCBpbiB0aGUgZGVzdGluYXRpb25cbmlmKHR5cGVvZiBrZXkubmFtZT09PSdudW1iZXInKXtkZWxldGUgcmVzLnBhcmFtc1trZXkubmFtZV07fX19cmV0dXJuey4uLnBhcmFtcywuLi5yZXMucGFyYW1zfTt9O307fTtleHBvcnRzLmRlZmF1bHQ9X2RlZmF1bHQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1wYXRoLW1hdGNoLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMubWF0Y2hIYXM9bWF0Y2hIYXM7ZXhwb3J0cy5jb21waWxlTm9uUGF0aD1jb21waWxlTm9uUGF0aDtleHBvcnRzLmRlZmF1bHQ9cHJlcGFyZURlc3RpbmF0aW9uO2V4cG9ydHMuZ2V0U2FmZVBhcmFtTmFtZT12b2lkIDA7dmFyIF9xdWVyeXN0cmluZz1yZXF1aXJlKFwiLi9xdWVyeXN0cmluZ1wiKTt2YXIgX3BhcnNlUmVsYXRpdmVVcmw9cmVxdWlyZShcIi4vcGFyc2UtcmVsYXRpdmUtdXJsXCIpO3ZhciBwYXRoVG9SZWdleHA9X2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcIm5leHQvZGlzdC9jb21waWxlZC9wYXRoLXRvLXJlZ2V4cFwiKSk7ZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCl7aWYodHlwZW9mIFdlYWtNYXAhPT1cImZ1bmN0aW9uXCIpcmV0dXJuIG51bGw7dmFyIGNhY2hlPW5ldyBXZWFrTWFwKCk7X2dldFJlcXVpcmVXaWxkY2FyZENhY2hlPWZ1bmN0aW9uKCl7cmV0dXJuIGNhY2hlO307cmV0dXJuIGNhY2hlO31mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmope2lmKG9iaiYmb2JqLl9fZXNNb2R1bGUpe3JldHVybiBvYmo7fWlmKG9iaj09PW51bGx8fHR5cGVvZiBvYmohPT1cIm9iamVjdFwiJiZ0eXBlb2Ygb2JqIT09XCJmdW5jdGlvblwiKXtyZXR1cm57ZGVmYXVsdDpvYmp9O312YXIgY2FjaGU9X2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7aWYoY2FjaGUmJmNhY2hlLmhhcyhvYmopKXtyZXR1cm4gY2FjaGUuZ2V0KG9iaik7fXZhciBuZXdPYmo9e307dmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvcj1PYmplY3QuZGVmaW5lUHJvcGVydHkmJk9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7Zm9yKHZhciBrZXkgaW4gb2JqKXtpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLGtleSkpe3ZhciBkZXNjPWhhc1Byb3BlcnR5RGVzY3JpcHRvcj9PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaixrZXkpOm51bGw7aWYoZGVzYyYmKGRlc2MuZ2V0fHxkZXNjLnNldCkpe09iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosa2V5LGRlc2MpO31lbHNle25ld09ialtrZXldPW9ialtrZXldO319fW5ld09iai5kZWZhdWx0PW9iajtpZihjYWNoZSl7Y2FjaGUuc2V0KG9iaixuZXdPYmopO31yZXR1cm4gbmV3T2JqO30vLyBlbnN1cmUgb25seSBhLXpBLVogYXJlIHVzZWQgZm9yIHBhcmFtIG5hbWVzIGZvciBwcm9wZXIgaW50ZXJwb2xhdGluZ1xuLy8gd2l0aCBwYXRoLXRvLXJlZ2V4cFxuY29uc3QgZ2V0U2FmZVBhcmFtTmFtZT1wYXJhbU5hbWU9PntsZXQgbmV3UGFyYW1OYW1lPScnO2ZvcihsZXQgaT0wO2k8cGFyYW1OYW1lLmxlbmd0aDtpKyspe2NvbnN0IGNoYXJDb2RlPXBhcmFtTmFtZS5jaGFyQ29kZUF0KGkpO2lmKGNoYXJDb2RlPjY0JiZjaGFyQ29kZTw5MXx8Ly8gQS1aXG5jaGFyQ29kZT45NiYmY2hhckNvZGU8MTIzLy8gYS16XG4pe25ld1BhcmFtTmFtZSs9cGFyYW1OYW1lW2ldO319cmV0dXJuIG5ld1BhcmFtTmFtZTt9O2V4cG9ydHMuZ2V0U2FmZVBhcmFtTmFtZT1nZXRTYWZlUGFyYW1OYW1lO2Z1bmN0aW9uIG1hdGNoSGFzKHJlcSxoYXMscXVlcnkpe2NvbnN0IHBhcmFtcz17fTtjb25zdCBhbGxNYXRjaD1oYXMuZXZlcnkoaGFzSXRlbT0+e2xldCB2YWx1ZTtsZXQga2V5PWhhc0l0ZW0ua2V5O3N3aXRjaChoYXNJdGVtLnR5cGUpe2Nhc2UnaGVhZGVyJzp7a2V5PWtleS50b0xvd2VyQ2FzZSgpO3ZhbHVlPXJlcS5oZWFkZXJzW2tleV07YnJlYWs7fWNhc2UnY29va2llJzp7dmFsdWU9cmVxLmNvb2tpZXNbaGFzSXRlbS5rZXldO2JyZWFrO31jYXNlJ3F1ZXJ5Jzp7dmFsdWU9cXVlcnlba2V5XTticmVhazt9Y2FzZSdob3N0Jzp7Y29uc3R7aG9zdH09KHJlcT09bnVsbD92b2lkIDA6cmVxLmhlYWRlcnMpfHx7fTsvLyByZW1vdmUgcG9ydCBmcm9tIGhvc3QgaWYgcHJlc2VudFxuY29uc3QgaG9zdG5hbWU9aG9zdD09bnVsbD92b2lkIDA6aG9zdC5zcGxpdCgnOicpWzBdLnRvTG93ZXJDYXNlKCk7dmFsdWU9aG9zdG5hbWU7YnJlYWs7fWRlZmF1bHQ6e2JyZWFrO319aWYoIWhhc0l0ZW0udmFsdWUmJnZhbHVlKXtwYXJhbXNbZ2V0U2FmZVBhcmFtTmFtZShrZXkpXT12YWx1ZTtyZXR1cm4gdHJ1ZTt9ZWxzZSBpZih2YWx1ZSl7Y29uc3QgbWF0Y2hlcj1uZXcgUmVnRXhwKGBeJHtoYXNJdGVtLnZhbHVlfSRgKTtjb25zdCBtYXRjaGVzPXZhbHVlLm1hdGNoKG1hdGNoZXIpO2lmKG1hdGNoZXMpe2lmKG1hdGNoZXMuZ3JvdXBzKXtPYmplY3Qua2V5cyhtYXRjaGVzLmdyb3VwcykuZm9yRWFjaChncm91cEtleT0+e2NvbnN0IHNhZmVLZXk9Z2V0U2FmZVBhcmFtTmFtZShncm91cEtleSk7aWYoc2FmZUtleSYmbWF0Y2hlcy5ncm91cHNbZ3JvdXBLZXldKXtwYXJhbXNbc2FmZUtleV09bWF0Y2hlcy5ncm91cHNbZ3JvdXBLZXldO319KTt9ZWxzZXtwYXJhbXNbZ2V0U2FmZVBhcmFtTmFtZShrZXl8fCdob3N0JyldPW1hdGNoZXNbMF07fXJldHVybiB0cnVlO319cmV0dXJuIGZhbHNlO30pO2lmKGFsbE1hdGNoKXtyZXR1cm4gcGFyYW1zO31yZXR1cm4gZmFsc2U7fWZ1bmN0aW9uIGNvbXBpbGVOb25QYXRoKHZhbHVlLHBhcmFtcyl7aWYoIXZhbHVlLmluY2x1ZGVzKCc6Jykpe3JldHVybiB2YWx1ZTt9Zm9yKGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyhwYXJhbXMpKXtpZih2YWx1ZS5pbmNsdWRlcyhgOiR7a2V5fWApKXt2YWx1ZT12YWx1ZS5yZXBsYWNlKG5ldyBSZWdFeHAoYDoke2tleX1cXFxcKmAsJ2cnKSxgOiR7a2V5fS0tRVNDQVBFRF9QQVJBTV9BU1RFUklTS1NgKS5yZXBsYWNlKG5ldyBSZWdFeHAoYDoke2tleX1cXFxcP2AsJ2cnKSxgOiR7a2V5fS0tRVNDQVBFRF9QQVJBTV9RVUVTVElPTmApLnJlcGxhY2UobmV3IFJlZ0V4cChgOiR7a2V5fVxcXFwrYCwnZycpLGA6JHtrZXl9LS1FU0NBUEVEX1BBUkFNX1BMVVNgKS5yZXBsYWNlKG5ldyBSZWdFeHAoYDoke2tleX0oPyFcXFxcdylgLCdnJyksYC0tRVNDQVBFRF9QQVJBTV9DT0xPTiR7a2V5fWApO319dmFsdWU9dmFsdWUucmVwbGFjZSgvKDp8XFwqfFxcP3xcXCt8XFwofFxcKXxcXHt8XFx9KS9nLCdcXFxcJDEnKS5yZXBsYWNlKC8tLUVTQ0FQRURfUEFSQU1fUExVUy9nLCcrJykucmVwbGFjZSgvLS1FU0NBUEVEX1BBUkFNX0NPTE9OL2csJzonKS5yZXBsYWNlKC8tLUVTQ0FQRURfUEFSQU1fUVVFU1RJT04vZywnPycpLnJlcGxhY2UoLy0tRVNDQVBFRF9QQVJBTV9BU1RFUklTS1MvZywnKicpOy8vIHRoZSB2YWx1ZSBuZWVkcyB0byBzdGFydCB3aXRoIGEgZm9yd2FyZC1zbGFzaCB0byBiZSBjb21waWxlZFxuLy8gY29ycmVjdGx5XG5yZXR1cm4gcGF0aFRvUmVnZXhwLmNvbXBpbGUoYC8ke3ZhbHVlfWAse3ZhbGlkYXRlOmZhbHNlfSkocGFyYW1zKS5zdWJzdHIoMSk7fWZ1bmN0aW9uIHByZXBhcmVEZXN0aW5hdGlvbihkZXN0aW5hdGlvbixwYXJhbXMscXVlcnksYXBwZW5kUGFyYW1zVG9RdWVyeSl7bGV0IHBhcnNlZERlc3RpbmF0aW9uPXt9Oy8vIGNsb25lIHF1ZXJ5IHNvIHdlIGRvbid0IG1vZGlmeSB0aGUgb3JpZ2luYWxcbnF1ZXJ5PU9iamVjdC5hc3NpZ24oe30scXVlcnkpO2NvbnN0IGhhZExvY2FsZT1xdWVyeS5fX25leHRMb2NhbGU7ZGVsZXRlIHF1ZXJ5Ll9fbmV4dExvY2FsZTtkZWxldGUgcXVlcnkuX19uZXh0RGVmYXVsdExvY2FsZTtpZihkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykpe3BhcnNlZERlc3RpbmF0aW9uPSgwLF9wYXJzZVJlbGF0aXZlVXJsLnBhcnNlUmVsYXRpdmVVcmwpKGRlc3RpbmF0aW9uKTt9ZWxzZXtjb25zdHtwYXRobmFtZSxzZWFyY2hQYXJhbXMsaGFzaCxob3N0bmFtZSxwb3J0LHByb3RvY29sLHNlYXJjaCxocmVmfT1uZXcgVVJMKGRlc3RpbmF0aW9uKTtwYXJzZWREZXN0aW5hdGlvbj17cGF0aG5hbWUscXVlcnk6KDAsX3F1ZXJ5c3RyaW5nLnNlYXJjaFBhcmFtc1RvVXJsUXVlcnkpKHNlYXJjaFBhcmFtcyksaGFzaCxwcm90b2NvbCxob3N0bmFtZSxwb3J0LHNlYXJjaCxocmVmfTt9Y29uc3QgZGVzdFF1ZXJ5PXBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5O2NvbnN0IGRlc3RQYXRoPWAke3BhcnNlZERlc3RpbmF0aW9uLnBhdGhuYW1lfSR7cGFyc2VkRGVzdGluYXRpb24uaGFzaHx8Jyd9YDtjb25zdCBkZXN0UGF0aFBhcmFtS2V5cz1bXTtwYXRoVG9SZWdleHAucGF0aFRvUmVnZXhwKGRlc3RQYXRoLGRlc3RQYXRoUGFyYW1LZXlzKTtjb25zdCBkZXN0UGF0aFBhcmFtcz1kZXN0UGF0aFBhcmFtS2V5cy5tYXAoa2V5PT5rZXkubmFtZSk7bGV0IGRlc3RpbmF0aW9uQ29tcGlsZXI9cGF0aFRvUmVnZXhwLmNvbXBpbGUoZGVzdFBhdGgsLy8gd2UgZG9uJ3QgdmFsaWRhdGUgd2hpbGUgY29tcGlsaW5nIHRoZSBkZXN0aW5hdGlvbiBzaW5jZSB3ZSBzaG91bGRcbi8vIGhhdmUgYWxyZWFkeSB2YWxpZGF0ZWQgYmVmb3JlIHdlIGdvdCB0byB0aGlzIHBvaW50IGFuZCB2YWxpZGF0aW5nXG4vLyBicmVha3MgY29tcGlsaW5nIGRlc3RpbmF0aW9ucyB3aXRoIG5hbWVkIHBhdHRlcm4gcGFyYW1zIGZyb20gdGhlIHNvdXJjZVxuLy8gZS5nLiAvc29tZXRoaW5nOmhlbGxvKC4qKSAtPiAvYW5vdGhlci86aGVsbG8gaXMgYnJva2VuIHdpdGggdmFsaWRhdGlvblxuLy8gc2luY2UgY29tcGlsZSB2YWxpZGF0aW9uIGlzIG1lYW50IGZvciByZXZlcnNpbmcgYW5kIG5vdCBmb3IgaW5zZXJ0aW5nXG4vLyBwYXJhbXMgZnJvbSBhIHNlcGFyYXRlIHBhdGgtcmVnZXggaW50byBhbm90aGVyXG57dmFsaWRhdGU6ZmFsc2V9KTtsZXQgbmV3VXJsOy8vIHVwZGF0ZSBhbnkgcGFyYW1zIGluIHF1ZXJ5IHZhbHVlc1xuZm9yKGNvbnN0W2tleSxzdHJPckFycmF5XW9mIE9iamVjdC5lbnRyaWVzKGRlc3RRdWVyeSkpe2xldCB2YWx1ZT1BcnJheS5pc0FycmF5KHN0ck9yQXJyYXkpP3N0ck9yQXJyYXlbMF06c3RyT3JBcnJheTtpZih2YWx1ZSl7Ly8gdGhlIHZhbHVlIG5lZWRzIHRvIHN0YXJ0IHdpdGggYSBmb3J3YXJkLXNsYXNoIHRvIGJlIGNvbXBpbGVkXG4vLyBjb3JyZWN0bHlcbnZhbHVlPWNvbXBpbGVOb25QYXRoKHZhbHVlLHBhcmFtcyk7fWRlc3RRdWVyeVtrZXldPXZhbHVlO30vLyBhZGQgcGF0aCBwYXJhbXMgdG8gcXVlcnkgaWYgaXQncyBub3QgYSByZWRpcmVjdCBhbmQgbm90XG4vLyBhbHJlYWR5IGRlZmluZWQgaW4gZGVzdGluYXRpb24gcXVlcnkgb3IgcGF0aFxubGV0IHBhcmFtS2V5cz1PYmplY3Qua2V5cyhwYXJhbXMpOy8vIHJlbW92ZSBpbnRlcm5hbCBwYXJhbSBmb3IgaTE4blxuaWYoaGFkTG9jYWxlKXtwYXJhbUtleXM9cGFyYW1LZXlzLmZpbHRlcihuYW1lPT5uYW1lIT09J25leHRJbnRlcm5hbExvY2FsZScpO31pZihhcHBlbmRQYXJhbXNUb1F1ZXJ5JiYhcGFyYW1LZXlzLnNvbWUoa2V5PT5kZXN0UGF0aFBhcmFtcy5pbmNsdWRlcyhrZXkpKSl7Zm9yKGNvbnN0IGtleSBvZiBwYXJhbUtleXMpe2lmKCEoa2V5IGluIGRlc3RRdWVyeSkpe2Rlc3RRdWVyeVtrZXldPXBhcmFtc1trZXldO319fXRyeXtuZXdVcmw9ZGVzdGluYXRpb25Db21waWxlcihwYXJhbXMpO2NvbnN0W3BhdGhuYW1lLGhhc2hdPW5ld1VybC5zcGxpdCgnIycpO3BhcnNlZERlc3RpbmF0aW9uLnBhdGhuYW1lPXBhdGhuYW1lO3BhcnNlZERlc3RpbmF0aW9uLmhhc2g9YCR7aGFzaD8nIyc6Jyd9JHtoYXNofHwnJ31gO2RlbGV0ZSBwYXJzZWREZXN0aW5hdGlvbi5zZWFyY2g7fWNhdGNoKGVycil7aWYoZXJyLm1lc3NhZ2UubWF0Y2goL0V4cGVjdGVkIC4qPyB0byBub3QgcmVwZWF0LCBidXQgZ290IGFuIGFycmF5Lykpe3Rocm93IG5ldyBFcnJvcihgVG8gdXNlIGEgbXVsdGktbWF0Y2ggaW4gdGhlIGRlc3RpbmF0aW9uIHlvdSBtdXN0IGFkZCBcXGAqXFxgIGF0IHRoZSBlbmQgb2YgdGhlIHBhcmFtIG5hbWUgdG8gc2lnbmlmeSBpdCBzaG91bGQgcmVwZWF0LiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9pbnZhbGlkLW11bHRpLW1hdGNoYCk7fXRocm93IGVycjt9Ly8gUXVlcnkgbWVyZ2Ugb3JkZXIgbG93ZXN0IHByaW9yaXR5IHRvIGhpZ2hlc3Rcbi8vIDEuIGluaXRpYWwgVVJMIHF1ZXJ5IHZhbHVlc1xuLy8gMi4gcGF0aCBzZWdtZW50IHZhbHVlc1xuLy8gMy4gZGVzdGluYXRpb24gc3BlY2lmaWVkIHF1ZXJ5IHZhbHVlc1xucGFyc2VkRGVzdGluYXRpb24ucXVlcnk9ey4uLnF1ZXJ5LC4uLnBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5fTtyZXR1cm57bmV3VXJsLHBhcnNlZERlc3RpbmF0aW9ufTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1wcmVwYXJlLWRlc3RpbmF0aW9uLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuc2VhcmNoUGFyYW1zVG9VcmxRdWVyeT1zZWFyY2hQYXJhbXNUb1VybFF1ZXJ5O2V4cG9ydHMudXJsUXVlcnlUb1NlYXJjaFBhcmFtcz11cmxRdWVyeVRvU2VhcmNoUGFyYW1zO2V4cG9ydHMuYXNzaWduPWFzc2lnbjtmdW5jdGlvbiBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KHNlYXJjaFBhcmFtcyl7Y29uc3QgcXVlcnk9e307c2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLGtleSk9PntpZih0eXBlb2YgcXVlcnlba2V5XT09PSd1bmRlZmluZWQnKXtxdWVyeVtrZXldPXZhbHVlO31lbHNlIGlmKEFycmF5LmlzQXJyYXkocXVlcnlba2V5XSkpeztxdWVyeVtrZXldLnB1c2godmFsdWUpO31lbHNle3F1ZXJ5W2tleV09W3F1ZXJ5W2tleV0sdmFsdWVdO319KTtyZXR1cm4gcXVlcnk7fWZ1bmN0aW9uIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0ocGFyYW0pe2lmKHR5cGVvZiBwYXJhbT09PSdzdHJpbmcnfHx0eXBlb2YgcGFyYW09PT0nbnVtYmVyJyYmIWlzTmFOKHBhcmFtKXx8dHlwZW9mIHBhcmFtPT09J2Jvb2xlYW4nKXtyZXR1cm4gU3RyaW5nKHBhcmFtKTt9ZWxzZXtyZXR1cm4nJzt9fWZ1bmN0aW9uIHVybFF1ZXJ5VG9TZWFyY2hQYXJhbXModXJsUXVlcnkpe2NvbnN0IHJlc3VsdD1uZXcgVVJMU2VhcmNoUGFyYW1zKCk7T2JqZWN0LmVudHJpZXModXJsUXVlcnkpLmZvckVhY2goKFtrZXksdmFsdWVdKT0+e2lmKEFycmF5LmlzQXJyYXkodmFsdWUpKXt2YWx1ZS5mb3JFYWNoKGl0ZW09PnJlc3VsdC5hcHBlbmQoa2V5LHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0oaXRlbSkpKTt9ZWxzZXtyZXN1bHQuc2V0KGtleSxzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKHZhbHVlKSk7fX0pO3JldHVybiByZXN1bHQ7fWZ1bmN0aW9uIGFzc2lnbih0YXJnZXQsLi4uc2VhcmNoUGFyYW1zTGlzdCl7c2VhcmNoUGFyYW1zTGlzdC5mb3JFYWNoKHNlYXJjaFBhcmFtcz0+e0FycmF5LmZyb20oc2VhcmNoUGFyYW1zLmtleXMoKSkuZm9yRWFjaChrZXk9PnRhcmdldC5kZWxldGUoa2V5KSk7c2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLGtleSk9PnRhcmdldC5hcHBlbmQoa2V5LHZhbHVlKSk7fSk7cmV0dXJuIHRhcmdldDt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1xdWVyeXN0cmluZy5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmRlZmF1bHQ9cmVzb2x2ZVJld3JpdGVzO3ZhciBfcGF0aE1hdGNoPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vcGF0aC1tYXRjaFwiKSk7dmFyIF9wcmVwYXJlRGVzdGluYXRpb249X2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcIi4vcHJlcGFyZS1kZXN0aW5hdGlvblwiKSk7dmFyIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoPXJlcXVpcmUoXCIuLi8uLi8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoXCIpO3ZhciBfbm9ybWFsaXplTG9jYWxlUGF0aD1yZXF1aXJlKFwiLi4vLi4vaTE4bi9ub3JtYWxpemUtbG9jYWxlLXBhdGhcIik7dmFyIF9wYXJzZVJlbGF0aXZlVXJsPXJlcXVpcmUoXCIuL3BhcnNlLXJlbGF0aXZlLXVybFwiKTt2YXIgX3JvdXRlcj1yZXF1aXJlKFwiLi4vcm91dGVyXCIpO2Z1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpe2lmKHR5cGVvZiBXZWFrTWFwIT09XCJmdW5jdGlvblwiKXJldHVybiBudWxsO3ZhciBjYWNoZT1uZXcgV2Vha01hcCgpO19nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZT1mdW5jdGlvbigpe3JldHVybiBjYWNoZTt9O3JldHVybiBjYWNoZTt9ZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKXtpZihvYmomJm9iai5fX2VzTW9kdWxlKXtyZXR1cm4gb2JqO31pZihvYmo9PT1udWxsfHx0eXBlb2Ygb2JqIT09XCJvYmplY3RcIiYmdHlwZW9mIG9iaiE9PVwiZnVuY3Rpb25cIil7cmV0dXJue2RlZmF1bHQ6b2JqfTt9dmFyIGNhY2hlPV9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpO2lmKGNhY2hlJiZjYWNoZS5oYXMob2JqKSl7cmV0dXJuIGNhY2hlLmdldChvYmopO312YXIgbmV3T2JqPXt9O3ZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3I9T2JqZWN0LmRlZmluZVByb3BlcnR5JiZPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO2Zvcih2YXIga2V5IGluIG9iail7aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaixrZXkpKXt2YXIgZGVzYz1oYXNQcm9wZXJ0eURlc2NyaXB0b3I/T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosa2V5KTpudWxsO2lmKGRlc2MmJihkZXNjLmdldHx8ZGVzYy5zZXQpKXtPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLGtleSxkZXNjKTt9ZWxzZXtuZXdPYmpba2V5XT1vYmpba2V5XTt9fX1uZXdPYmouZGVmYXVsdD1vYmo7aWYoY2FjaGUpe2NhY2hlLnNldChvYmosbmV3T2JqKTt9cmV0dXJuIG5ld09iajt9ZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmope3JldHVybiBvYmomJm9iai5fX2VzTW9kdWxlP29iajp7ZGVmYXVsdDpvYmp9O31jb25zdCBjdXN0b21Sb3V0ZU1hdGNoZXI9KDAsX3BhdGhNYXRjaC5kZWZhdWx0KSh0cnVlKTtmdW5jdGlvbiByZXNvbHZlUmV3cml0ZXMoYXNQYXRoLHBhZ2VzLHJld3JpdGVzLHF1ZXJ5LHJlc29sdmVIcmVmLGxvY2FsZXMpe2xldCBtYXRjaGVkUGFnZT1mYWxzZTtsZXQgcGFyc2VkQXM9KDAsX3BhcnNlUmVsYXRpdmVVcmwucGFyc2VSZWxhdGl2ZVVybCkoYXNQYXRoKTtsZXQgZnNQYXRobmFtZT0oMCxfbm9ybWFsaXplVHJhaWxpbmdTbGFzaC5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCkoKDAsX25vcm1hbGl6ZUxvY2FsZVBhdGgubm9ybWFsaXplTG9jYWxlUGF0aCkoKDAsX3JvdXRlci5kZWxCYXNlUGF0aCkocGFyc2VkQXMucGF0aG5hbWUpLGxvY2FsZXMpLnBhdGhuYW1lKTtsZXQgcmVzb2x2ZWRIcmVmO2NvbnN0IGhhbmRsZVJld3JpdGU9cmV3cml0ZT0+e2NvbnN0IG1hdGNoZXI9Y3VzdG9tUm91dGVNYXRjaGVyKHJld3JpdGUuc291cmNlKTtsZXQgcGFyYW1zPW1hdGNoZXIocGFyc2VkQXMucGF0aG5hbWUpO2lmKHJld3JpdGUuaGFzJiZwYXJhbXMpe2NvbnN0IGhhc1BhcmFtcz0oMCxfcHJlcGFyZURlc3RpbmF0aW9uLm1hdGNoSGFzKSh7aGVhZGVyczp7aG9zdDpkb2N1bWVudC5sb2NhdGlvbi5ob3N0bmFtZX0sY29va2llczpPYmplY3QuZnJvbUVudHJpZXMoZG9jdW1lbnQuY29va2llLnNwbGl0KCc7ICcpLm1hcChpdGVtPT57Y29uc3Rba2V5LC4uLnZhbHVlXT1pdGVtLnNwbGl0KCc9Jyk7cmV0dXJuW2tleSx2YWx1ZS5qb2luKCc9JyldO30pKX0scmV3cml0ZS5oYXMscGFyc2VkQXMucXVlcnkpO2lmKGhhc1BhcmFtcyl7T2JqZWN0LmFzc2lnbihwYXJhbXMsaGFzUGFyYW1zKTt9ZWxzZXtwYXJhbXM9ZmFsc2U7fX1pZihwYXJhbXMpe2lmKCFyZXdyaXRlLmRlc3RpbmF0aW9uKXsvLyB0aGlzIGlzIGEgcHJveGllZCByZXdyaXRlIHdoaWNoIGlzbid0IGhhbmRsZWQgb24gdGhlIGNsaWVudFxucmV0dXJuIHRydWU7fWNvbnN0IGRlc3RSZXM9KDAsX3ByZXBhcmVEZXN0aW5hdGlvbi5kZWZhdWx0KShyZXdyaXRlLmRlc3RpbmF0aW9uLHBhcmFtcyxxdWVyeSx0cnVlKTtwYXJzZWRBcz1kZXN0UmVzLnBhcnNlZERlc3RpbmF0aW9uO2FzUGF0aD1kZXN0UmVzLm5ld1VybDtPYmplY3QuYXNzaWduKHF1ZXJ5LGRlc3RSZXMucGFyc2VkRGVzdGluYXRpb24ucXVlcnkpO2ZzUGF0aG5hbWU9KDAsX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gpKCgwLF9ub3JtYWxpemVMb2NhbGVQYXRoLm5vcm1hbGl6ZUxvY2FsZVBhdGgpKCgwLF9yb3V0ZXIuZGVsQmFzZVBhdGgpKGFzUGF0aCksbG9jYWxlcykucGF0aG5hbWUpO2lmKHBhZ2VzLmluY2x1ZGVzKGZzUGF0aG5hbWUpKXsvLyBjaGVjayBpZiB3ZSBub3cgbWF0Y2ggYSBwYWdlIGFzIHRoaXMgbWVhbnMgd2UgYXJlIGRvbmVcbi8vIHJlc29sdmluZyB0aGUgcmV3cml0ZXNcbm1hdGNoZWRQYWdlPXRydWU7cmVzb2x2ZWRIcmVmPWZzUGF0aG5hbWU7cmV0dXJuIHRydWU7fS8vIGNoZWNrIGlmIHdlIG1hdGNoIGEgZHluYW1pYy1yb3V0ZSwgaWYgc28gd2UgYnJlYWsgdGhlIHJld3JpdGVzIGNoYWluXG5yZXNvbHZlZEhyZWY9cmVzb2x2ZUhyZWYoZnNQYXRobmFtZSk7aWYocmVzb2x2ZWRIcmVmIT09YXNQYXRoJiZwYWdlcy5pbmNsdWRlcyhyZXNvbHZlZEhyZWYpKXttYXRjaGVkUGFnZT10cnVlO3JldHVybiB0cnVlO319fTtsZXQgZmluaXNoZWQ9ZmFsc2U7Zm9yKGxldCBpPTA7aTxyZXdyaXRlcy5iZWZvcmVGaWxlcy5sZW5ndGg7aSsrKXtjb25zdCByZXdyaXRlPXJld3JpdGVzLmJlZm9yZUZpbGVzW2ldO2lmKGhhbmRsZVJld3JpdGUocmV3cml0ZSkpe2ZpbmlzaGVkPXRydWU7YnJlYWs7fX1pZighcGFnZXMuaW5jbHVkZXMoZnNQYXRobmFtZSkpe2lmKCFmaW5pc2hlZCl7Zm9yKGxldCBpPTA7aTxyZXdyaXRlcy5hZnRlckZpbGVzLmxlbmd0aDtpKyspe2NvbnN0IHJld3JpdGU9cmV3cml0ZXMuYWZ0ZXJGaWxlc1tpXTtpZihoYW5kbGVSZXdyaXRlKHJld3JpdGUpKXtmaW5pc2hlZD10cnVlO2JyZWFrO319fS8vIGNoZWNrIGR5bmFtaWMgcm91dGUgYmVmb3JlIHByb2Nlc3NpbmcgZmFsbGJhY2sgcmV3cml0ZXNcbmlmKCFmaW5pc2hlZCl7cmVzb2x2ZWRIcmVmPXJlc29sdmVIcmVmKGZzUGF0aG5hbWUpO21hdGNoZWRQYWdlPXBhZ2VzLmluY2x1ZGVzKHJlc29sdmVkSHJlZik7ZmluaXNoZWQ9bWF0Y2hlZFBhZ2U7fWlmKCFmaW5pc2hlZCl7Zm9yKGxldCBpPTA7aTxyZXdyaXRlcy5mYWxsYmFjay5sZW5ndGg7aSsrKXtjb25zdCByZXdyaXRlPXJld3JpdGVzLmZhbGxiYWNrW2ldO2lmKGhhbmRsZVJld3JpdGUocmV3cml0ZSkpe2ZpbmlzaGVkPXRydWU7YnJlYWs7fX19fXJldHVybnthc1BhdGgscGFyc2VkQXMsbWF0Y2hlZFBhZ2UscmVzb2x2ZWRIcmVmfTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yZXNvbHZlLXJld3JpdGVzLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZ2V0Um91dGVNYXRjaGVyPWdldFJvdXRlTWF0Y2hlcjtmdW5jdGlvbiBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleCl7Y29uc3R7cmUsZ3JvdXBzfT1yb3V0ZVJlZ2V4O3JldHVybiBwYXRobmFtZT0+e2NvbnN0IHJvdXRlTWF0Y2g9cmUuZXhlYyhwYXRobmFtZSk7aWYoIXJvdXRlTWF0Y2gpe3JldHVybiBmYWxzZTt9Y29uc3QgZGVjb2RlPXBhcmFtPT57dHJ5e3JldHVybiBkZWNvZGVVUklDb21wb25lbnQocGFyYW0pO31jYXRjaChfKXtjb25zdCBlcnI9bmV3IEVycm9yKCdmYWlsZWQgdG8gZGVjb2RlIHBhcmFtJyk7ZXJyLmNvZGU9J0RFQ09ERV9GQUlMRUQnO3Rocm93IGVycjt9fTtjb25zdCBwYXJhbXM9e307T2JqZWN0LmtleXMoZ3JvdXBzKS5mb3JFYWNoKHNsdWdOYW1lPT57Y29uc3QgZz1ncm91cHNbc2x1Z05hbWVdO2NvbnN0IG09cm91dGVNYXRjaFtnLnBvc107aWYobSE9PXVuZGVmaW5lZCl7cGFyYW1zW3NsdWdOYW1lXT1+bS5pbmRleE9mKCcvJyk/bS5zcGxpdCgnLycpLm1hcChlbnRyeT0+ZGVjb2RlKGVudHJ5KSk6Zy5yZXBlYXQ/W2RlY29kZShtKV06ZGVjb2RlKG0pO319KTtyZXR1cm4gcGFyYW1zO307fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cm91dGUtbWF0Y2hlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmdldFJvdXRlUmVnZXg9Z2V0Um91dGVSZWdleDsvLyB0aGlzIGlzbid0IGltcG9ydGluZyB0aGUgZXNjYXBlLXN0cmluZy1yZWdleCBtb2R1bGVcbi8vIHRvIHJlZHVjZSBieXRlc1xuZnVuY3Rpb24gZXNjYXBlUmVnZXgoc3RyKXtyZXR1cm4gc3RyLnJlcGxhY2UoL1t8XFxcXHt9KClbXFxdXiQrKj8uLV0vZywnXFxcXCQmJyk7fWZ1bmN0aW9uIHBhcnNlUGFyYW1ldGVyKHBhcmFtKXtjb25zdCBvcHRpb25hbD1wYXJhbS5zdGFydHNXaXRoKCdbJykmJnBhcmFtLmVuZHNXaXRoKCddJyk7aWYob3B0aW9uYWwpe3BhcmFtPXBhcmFtLnNsaWNlKDEsLTEpO31jb25zdCByZXBlYXQ9cGFyYW0uc3RhcnRzV2l0aCgnLi4uJyk7aWYocmVwZWF0KXtwYXJhbT1wYXJhbS5zbGljZSgzKTt9cmV0dXJue2tleTpwYXJhbSxyZXBlYXQsb3B0aW9uYWx9O31mdW5jdGlvbiBnZXRSb3V0ZVJlZ2V4KG5vcm1hbGl6ZWRSb3V0ZSl7Y29uc3Qgc2VnbWVudHM9KG5vcm1hbGl6ZWRSb3V0ZS5yZXBsYWNlKC9cXC8kLywnJyl8fCcvJykuc2xpY2UoMSkuc3BsaXQoJy8nKTtjb25zdCBncm91cHM9e307bGV0IGdyb3VwSW5kZXg9MTtjb25zdCBwYXJhbWV0ZXJpemVkUm91dGU9c2VnbWVudHMubWFwKHNlZ21lbnQ9PntpZihzZWdtZW50LnN0YXJ0c1dpdGgoJ1snKSYmc2VnbWVudC5lbmRzV2l0aCgnXScpKXtjb25zdHtrZXksb3B0aW9uYWwscmVwZWF0fT1wYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsLTEpKTtncm91cHNba2V5XT17cG9zOmdyb3VwSW5kZXgrKyxyZXBlYXQsb3B0aW9uYWx9O3JldHVybiByZXBlYXQ/b3B0aW9uYWw/Jyg/Oi8oLis/KSk/JzonLyguKz8pJzonLyhbXi9dKz8pJzt9ZWxzZXtyZXR1cm5gLyR7ZXNjYXBlUmVnZXgoc2VnbWVudCl9YDt9fSkuam9pbignJyk7Ly8gZGVhZCBjb2RlIGVsaW1pbmF0ZSBmb3IgYnJvd3NlciBzaW5jZSBpdCdzIG9ubHkgbmVlZGVkXG4vLyB3aGlsZSBnZW5lcmF0aW5nIHJvdXRlcy1tYW5pZmVzdFxuaWYodHlwZW9mIHdpbmRvdz09PSd1bmRlZmluZWQnKXtsZXQgcm91dGVLZXlDaGFyQ29kZT05NztsZXQgcm91dGVLZXlDaGFyTGVuZ3RoPTE7Ly8gYnVpbGRzIGEgbWluaW1hbCByb3V0ZUtleSB1c2luZyBvbmx5IGEteiBhbmQgbWluaW1hbCBudW1iZXIgb2YgY2hhcmFjdGVyc1xuY29uc3QgZ2V0U2FmZVJvdXRlS2V5PSgpPT57bGV0IHJvdXRlS2V5PScnO2ZvcihsZXQgaT0wO2k8cm91dGVLZXlDaGFyTGVuZ3RoO2krKyl7cm91dGVLZXkrPVN0cmluZy5mcm9tQ2hhckNvZGUocm91dGVLZXlDaGFyQ29kZSk7cm91dGVLZXlDaGFyQ29kZSsrO2lmKHJvdXRlS2V5Q2hhckNvZGU+MTIyKXtyb3V0ZUtleUNoYXJMZW5ndGgrKztyb3V0ZUtleUNoYXJDb2RlPTk3O319cmV0dXJuIHJvdXRlS2V5O307Y29uc3Qgcm91dGVLZXlzPXt9O2xldCBuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZT1zZWdtZW50cy5tYXAoc2VnbWVudD0+e2lmKHNlZ21lbnQuc3RhcnRzV2l0aCgnWycpJiZzZWdtZW50LmVuZHNXaXRoKCddJykpe2NvbnN0e2tleSxvcHRpb25hbCxyZXBlYXR9PXBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwtMSkpOy8vIHJlcGxhY2UgYW55IG5vbi13b3JkIGNoYXJhY3RlcnMgc2luY2UgdGhleSBjYW4gYnJlYWtcbi8vIHRoZSBuYW1lZCByZWdleFxubGV0IGNsZWFuZWRLZXk9a2V5LnJlcGxhY2UoL1xcVy9nLCcnKTtsZXQgaW52YWxpZEtleT1mYWxzZTsvLyBjaGVjayBpZiB0aGUga2V5IGlzIHN0aWxsIGludmFsaWQgYW5kIGZhbGxiYWNrIHRvIHVzaW5nIGEga25vd25cbi8vIHNhZmUga2V5XG5pZihjbGVhbmVkS2V5Lmxlbmd0aD09PTB8fGNsZWFuZWRLZXkubGVuZ3RoPjMwKXtpbnZhbGlkS2V5PXRydWU7fWlmKCFpc05hTihwYXJzZUludChjbGVhbmVkS2V5LnN1YnN0cigwLDEpKSkpe2ludmFsaWRLZXk9dHJ1ZTt9aWYoaW52YWxpZEtleSl7Y2xlYW5lZEtleT1nZXRTYWZlUm91dGVLZXkoKTt9cm91dGVLZXlzW2NsZWFuZWRLZXldPWtleTtyZXR1cm4gcmVwZWF0P29wdGlvbmFsP2AoPzovKD88JHtjbGVhbmVkS2V5fT4uKz8pKT9gOmAvKD88JHtjbGVhbmVkS2V5fT4uKz8pYDpgLyg/PCR7Y2xlYW5lZEtleX0+W14vXSs/KWA7fWVsc2V7cmV0dXJuYC8ke2VzY2FwZVJlZ2V4KHNlZ21lbnQpfWA7fX0pLmpvaW4oJycpO3JldHVybntyZTpuZXcgUmVnRXhwKGBeJHtwYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGApLGdyb3Vwcyxyb3V0ZUtleXMsbmFtZWRSZWdleDpgXiR7bmFtZWRQYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGB9O31yZXR1cm57cmU6bmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxncm91cHN9O31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJvdXRlLXJlZ2V4LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZXhlY09uY2U9ZXhlY09uY2U7ZXhwb3J0cy5nZXRMb2NhdGlvbk9yaWdpbj1nZXRMb2NhdGlvbk9yaWdpbjtleHBvcnRzLmdldFVSTD1nZXRVUkw7ZXhwb3J0cy5nZXREaXNwbGF5TmFtZT1nZXREaXNwbGF5TmFtZTtleHBvcnRzLmlzUmVzU2VudD1pc1Jlc1NlbnQ7ZXhwb3J0cy5sb2FkR2V0SW5pdGlhbFByb3BzPWxvYWRHZXRJbml0aWFsUHJvcHM7ZXhwb3J0cy5mb3JtYXRXaXRoVmFsaWRhdGlvbj1mb3JtYXRXaXRoVmFsaWRhdGlvbjtleHBvcnRzLlNUPWV4cG9ydHMuU1A9ZXhwb3J0cy51cmxPYmplY3RLZXlzPXZvaWQgMDt2YXIgX2Zvcm1hdFVybD1yZXF1aXJlKFwiLi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybFwiKTsvKipcbiAqIFV0aWxzXG4gKi9mdW5jdGlvbiBleGVjT25jZShmbil7bGV0IHVzZWQ9ZmFsc2U7bGV0IHJlc3VsdDtyZXR1cm4oLi4uYXJncyk9PntpZighdXNlZCl7dXNlZD10cnVlO3Jlc3VsdD1mbiguLi5hcmdzKTt9cmV0dXJuIHJlc3VsdDt9O31mdW5jdGlvbiBnZXRMb2NhdGlvbk9yaWdpbigpe2NvbnN0e3Byb3RvY29sLGhvc3RuYW1lLHBvcnR9PXdpbmRvdy5sb2NhdGlvbjtyZXR1cm5gJHtwcm90b2NvbH0vLyR7aG9zdG5hbWV9JHtwb3J0Pyc6Jytwb3J0OicnfWA7fWZ1bmN0aW9uIGdldFVSTCgpe2NvbnN0e2hyZWZ9PXdpbmRvdy5sb2NhdGlvbjtjb25zdCBvcmlnaW49Z2V0TG9jYXRpb25PcmlnaW4oKTtyZXR1cm4gaHJlZi5zdWJzdHJpbmcob3JpZ2luLmxlbmd0aCk7fWZ1bmN0aW9uIGdldERpc3BsYXlOYW1lKENvbXBvbmVudCl7cmV0dXJuIHR5cGVvZiBDb21wb25lbnQ9PT0nc3RyaW5nJz9Db21wb25lbnQ6Q29tcG9uZW50LmRpc3BsYXlOYW1lfHxDb21wb25lbnQubmFtZXx8J1Vua25vd24nO31mdW5jdGlvbiBpc1Jlc1NlbnQocmVzKXtyZXR1cm4gcmVzLmZpbmlzaGVkfHxyZXMuaGVhZGVyc1NlbnQ7fWFzeW5jIGZ1bmN0aW9uIGxvYWRHZXRJbml0aWFsUHJvcHMoQXBwLGN0eCl7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe3ZhciBfQXBwJHByb3RvdHlwZTtpZigoX0FwcCRwcm90b3R5cGU9QXBwLnByb3RvdHlwZSkhPW51bGwmJl9BcHAkcHJvdG90eXBlLmdldEluaXRpYWxQcm9wcyl7Y29uc3QgbWVzc2FnZT1gXCIke2dldERpc3BsYXlOYW1lKEFwcCl9LmdldEluaXRpYWxQcm9wcygpXCIgaXMgZGVmaW5lZCBhcyBhbiBpbnN0YW5jZSBtZXRob2QgLSB2aXNpdCBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9nZXQtaW5pdGlhbC1wcm9wcy1hcy1hbi1pbnN0YW5jZS1tZXRob2QgZm9yIG1vcmUgaW5mb3JtYXRpb24uYDt0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7fX0vLyB3aGVuIGNhbGxlZCBmcm9tIF9hcHAgYGN0eGAgaXMgbmVzdGVkIGluIGBjdHhgXG5jb25zdCByZXM9Y3R4LnJlc3x8Y3R4LmN0eCYmY3R4LmN0eC5yZXM7aWYoIUFwcC5nZXRJbml0aWFsUHJvcHMpe2lmKGN0eC5jdHgmJmN0eC5Db21wb25lbnQpey8vIEB0cy1pZ25vcmUgcGFnZVByb3BzIGRlZmF1bHRcbnJldHVybntwYWdlUHJvcHM6YXdhaXQgbG9hZEdldEluaXRpYWxQcm9wcyhjdHguQ29tcG9uZW50LGN0eC5jdHgpfTt9cmV0dXJue307fWNvbnN0IHByb3BzPWF3YWl0IEFwcC5nZXRJbml0aWFsUHJvcHMoY3R4KTtpZihyZXMmJmlzUmVzU2VudChyZXMpKXtyZXR1cm4gcHJvcHM7fWlmKCFwcm9wcyl7Y29uc3QgbWVzc2FnZT1gXCIke2dldERpc3BsYXlOYW1lKEFwcCl9LmdldEluaXRpYWxQcm9wcygpXCIgc2hvdWxkIHJlc29sdmUgdG8gYW4gb2JqZWN0LiBCdXQgZm91bmQgXCIke3Byb3BzfVwiIGluc3RlYWQuYDt0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7fWlmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXtpZihPYmplY3Qua2V5cyhwcm9wcykubGVuZ3RoPT09MCYmIWN0eC5jdHgpe2NvbnNvbGUud2FybihgJHtnZXREaXNwbGF5TmFtZShBcHApfSByZXR1cm5lZCBhbiBlbXB0eSBvYmplY3QgZnJvbSBcXGBnZXRJbml0aWFsUHJvcHNcXGAuIFRoaXMgZGUtb3B0aW1pemVzIGFuZCBwcmV2ZW50cyBhdXRvbWF0aWMgc3RhdGljIG9wdGltaXphdGlvbi4gaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvZW1wdHktb2JqZWN0LWdldEluaXRpYWxQcm9wc2ApO319cmV0dXJuIHByb3BzO31jb25zdCB1cmxPYmplY3RLZXlzPVsnYXV0aCcsJ2hhc2gnLCdob3N0JywnaG9zdG5hbWUnLCdocmVmJywncGF0aCcsJ3BhdGhuYW1lJywncG9ydCcsJ3Byb3RvY29sJywncXVlcnknLCdzZWFyY2gnLCdzbGFzaGVzJ107ZXhwb3J0cy51cmxPYmplY3RLZXlzPXVybE9iamVjdEtleXM7ZnVuY3Rpb24gZm9ybWF0V2l0aFZhbGlkYXRpb24odXJsKXtpZihwcm9jZXNzLmVudi5OT0RFX0VOVj09PSdkZXZlbG9wbWVudCcpe2lmKHVybCE9PW51bGwmJnR5cGVvZiB1cmw9PT0nb2JqZWN0Jyl7T2JqZWN0LmtleXModXJsKS5mb3JFYWNoKGtleT0+e2lmKHVybE9iamVjdEtleXMuaW5kZXhPZihrZXkpPT09LTEpe2NvbnNvbGUud2FybihgVW5rbm93biBrZXkgcGFzc2VkIHZpYSB1cmxPYmplY3QgaW50byB1cmwuZm9ybWF0OiAke2tleX1gKTt9fSk7fX1yZXR1cm4oMCxfZm9ybWF0VXJsLmZvcm1hdFVybCkodXJsKTt9Y29uc3QgU1A9dHlwZW9mIHBlcmZvcm1hbmNlIT09J3VuZGVmaW5lZCc7ZXhwb3J0cy5TUD1TUDtjb25zdCBTVD1TUCYmdHlwZW9mIHBlcmZvcm1hbmNlLm1hcms9PT0nZnVuY3Rpb24nJiZ0eXBlb2YgcGVyZm9ybWFuY2UubWVhc3VyZT09PSdmdW5jdGlvbic7ZXhwb3J0cy5TVD1TVDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXV0aWxzLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMubm9ybWFsaXplUGF0aFNlcD1ub3JtYWxpemVQYXRoU2VwO2V4cG9ydHMuZGVub3JtYWxpemVQYWdlUGF0aD1kZW5vcm1hbGl6ZVBhZ2VQYXRoO2Z1bmN0aW9uIG5vcm1hbGl6ZVBhdGhTZXAocGF0aCl7cmV0dXJuIHBhdGgucmVwbGFjZSgvXFxcXC9nLCcvJyk7fWZ1bmN0aW9uIGRlbm9ybWFsaXplUGFnZVBhdGgocGFnZSl7cGFnZT1ub3JtYWxpemVQYXRoU2VwKHBhZ2UpO2lmKHBhZ2Uuc3RhcnRzV2l0aCgnL2luZGV4LycpKXtwYWdlPXBhZ2Uuc2xpY2UoNik7fWVsc2UgaWYocGFnZT09PScvaW5kZXgnKXtwYWdlPScvJzt9cmV0dXJuIHBhZ2U7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzLm1hcCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9saW5rJylcbiIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2ZcIik7XG5cbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsO1xuICB2YXIgY2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuXG4gIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgICByZXR1cm4gY2FjaGU7XG4gIH07XG5cbiAgcmV0dXJuIGNhY2hlO1xufVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHtcbiAgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkge1xuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICBpZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgXCJkZWZhdWx0XCI6IG9ialxuICAgIH07XG4gIH1cblxuICB2YXIgY2FjaGUgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTtcblxuICBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHtcbiAgICByZXR1cm4gY2FjaGUuZ2V0KG9iaik7XG4gIH1cblxuICB2YXIgbmV3T2JqID0ge307XG4gIHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgIHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsO1xuXG4gICAgICBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdPYmpba2V5XSA9IG9ialtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7XG5cbiAgaWYgKGNhY2hlKSB7XG4gICAgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTtcbiAgfVxuXG4gIHJldHVybiBuZXdPYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuY29uc3QgR28gPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPExpbmsgaHJlZj0nL2JveCcgYXM9e2AvYm94YH0+XG4gICAgICA8YVxuICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICdhYnNvbHV0ZSB6LTIwIHAtMiBtLTIgdGV4dC1ncmF5LTEwMCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZydcbiAgICAgICAgfVxuICAgICAgPlxuICAgICAgICBOZXh0IHBhZ2VcbiAgICAgIDwvYT5cbiAgICA8L0xpbms+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgR29cbiIsImltcG9ydCBjcmVhdGUgZnJvbSAnenVzdGFuZCdcblxuY29uc3QgdXNlU3RvcmUgPSBjcmVhdGUoKHNldCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHJvdXRlcjoge30sXG4gICAgZXZlbnRzOiBudWxsLFxuICAgIHNldEV2ZW50czogKGV2ZW50cykgPT4ge1xuICAgICAgc2V0KHsgZXZlbnRzIH0pXG4gICAgfSxcbiAgfVxufSlcblxuZXhwb3J0IGRlZmF1bHQgdXNlU3RvcmVcbiIsImltcG9ydCB1c2VTdG9yZSBmcm9tICdAL2hlbHBlcnMvc3RvcmUnXG5pbXBvcnQgZHluYW1pYyBmcm9tICduZXh0L2R5bmFtaWMnXG5pbXBvcnQgR28gZnJvbSAnQC9jb21wb25lbnRzL2RvbS9nbydcblxuY29uc3QgVHVyYmluZVNjZW5lID0gZHluYW1pYygoKSA9PiBpbXBvcnQoJ0AvY29tcG9uZW50cy9jYW52YXMvVHVyYmluZVNjZW5lJyksIHtcbiAgc3NyOiBmYWxzZSxcbn0pXG5cbmNvbnN0IFBhZ2UgPSAoeyB0aXRsZSB9KSA9PiB7XG4gIHVzZVN0b3JlLnNldFN0YXRlKHsgdGl0bGUgfSlcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPFR1cmJpbmVTY2VuZSByM2YgLz5cbiAgICAgIDxHbyAvPlxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFBhZ2VcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICB0aXRsZTogJ1R1cmJpbmVTY2VuZScsXG4gICAgfSxcbiAgfVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHJlYWN0LXNwcmluZy90aHJlZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAcmVhY3QtdGhyZWUvYTExeVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAcmVhY3QtdGhyZWUvZHJlaVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAcmVhY3QtdGhyZWUvZmliZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9keW5hbWljXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWlzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRocmVlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRocmVlL2V4YW1wbGVzL2pzbS91dGlscy9Ta2VsZXRvblV0aWxzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInp1c3RhbmRcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==