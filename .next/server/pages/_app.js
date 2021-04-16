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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/layout/_canvas.js":
/*!******************************************!*\
  !*** ./src/components/layout/_canvas.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(React) {/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @react-three/fiber */ "@react-three/fiber");
/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_react_three_fiber__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var r3f_perf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! r3f-perf */ "r3f-perf");
/* harmony import */ var r3f_perf__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(r3f_perf__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helpers_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/helpers/store */ "./src/helpers/store.js");
/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @react-three/drei */ "@react-three/drei");
/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_react_three_drei__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _react_spring_three__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @react-spring/three */ "@react-spring/three");
/* harmony import */ var _react_spring_three__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_react_spring_three__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _react_three_a11y__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @react-three/a11y */ "@react-three/a11y");
/* harmony import */ var _react_three_a11y__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_react_three_a11y__WEBPACK_IMPORTED_MODULE_5__);






const LCanvas = ({children}) => {
  const router = Object(_helpers_store__WEBPACK_IMPORTED_MODULE_2__["default"])((state) => state.router);
  const {bg} = Object(_react_spring_three__WEBPACK_IMPORTED_MODULE_4__["useSpring"])({
    bg: router && router.route !== "/box" ? 0 : 23 / 255
  });
  return /* @__PURE__ */ React.createElement(_react_spring_three__WEBPACK_IMPORTED_MODULE_4__["animated"].group, null, /* @__PURE__ */ React.createElement("div", {
    style: {
      background: "linear-gradient(0deg, rgba(0,7,43,1) 0%, rgba(1,17,64,1) 40%, rgba(9,49,121,0.9192810913427871) 100%)"
    }
  }, /* @__PURE__ */ React.createElement(_react_three_fiber__WEBPACK_IMPORTED_MODULE_0__["Canvas"], {
    style: {
      position: "inherit",
      top: 0
    },
    onCreated: ({events}) => {
      _helpers_store__WEBPACK_IMPORTED_MODULE_2__["default"].setState({events});
    }
  }, /* @__PURE__ */ React.createElement("fog", {
    attach: "fog",
    args: ["rgb(1,17,64)", 0, 50]
  }), /* @__PURE__ */ React.createElement(_react_three_a11y__WEBPACK_IMPORTED_MODULE_5__["A11yUserPreferences"], null, /* @__PURE__ */ React.createElement(_react_three_drei__WEBPACK_IMPORTED_MODULE_3__["Preload"], {
    all: true
  }), /* @__PURE__ */ React.createElement(r3f_perf__WEBPACK_IMPORTED_MODULE_1__["Perf"], {
    openByDefault: true,
    trackGPU: true,
    position: "bottom-right"
  }), /* @__PURE__ */ React.createElement(_react_three_drei__WEBPACK_IMPORTED_MODULE_3__["OrbitControls"], null), children))));
};
/* harmony default export */ __webpack_exports__["default"] = (LCanvas);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "react")))

/***/ }),

/***/ "./src/components/layout/_dom.js":
/*!***************************************!*\
  !*** ./src/components/layout/_dom.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(React) {/* harmony import */ var _helpers_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/helpers/store */ "./src/helpers/store.js");
/* harmony import */ var _pmndrs_branding__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @pmndrs/branding */ "@pmndrs/branding");
/* harmony import */ var _pmndrs_branding__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_pmndrs_branding__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-spring */ "react-spring");
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_spring__WEBPACK_IMPORTED_MODULE_3__);
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




const Header = () => {
  const title = Object(_helpers_store__WEBPACK_IMPORTED_MODULE_0__["default"])((s) => s.title);
  return /* @__PURE__ */ React.createElement(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, null, /* @__PURE__ */ React.createElement("title", null, title));
};
const Dom = ({dom}) => {
  const events = Object(_helpers_store__WEBPACK_IMPORTED_MODULE_0__["default"])((s) => s.events);
  return /* @__PURE__ */ React.createElement("div", __assign({
    className: "absolute top-0 left-0 right-0 z-20 dom"
  }, events), /* @__PURE__ */ React.createElement(Header, null), dom, /* @__PURE__ */ React.createElement("h1", {
    className: "absolute w-full text-xs tracking-wider text-center text-gray-100 md:mt-56 mt-28 top-1/2 sm:subpixel-antialiased md:antialiased"
  }, "ARCHIMEDES SCREW"), /* @__PURE__ */ React.createElement("div", {
    className: "absolute p-2 m-2 right-4 z-index-30"
  }, /* @__PURE__ */ React.createElement(_pmndrs_branding__WEBPACK_IMPORTED_MODULE_1__["Badge"], null)));
};
/* harmony default export */ __webpack_exports__["default"] = (Dom);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "react")))

/***/ }),

/***/ "./src/config.js":
/*!***********************!*\
  !*** ./src/config.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(React) {/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);

const title = "React Three Next Starter";
const url = "https://react-three-next.vercel.app/";
const description = "The easiest and fastest way to create a 3D website using React Three Fiber and NextJS";
const author = "Author";
const Header = () => {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(next_head__WEBPACK_IMPORTED_MODULE_0___default.a, null, /* @__PURE__ */ React.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "language",
    content: "english"
  }), /* @__PURE__ */ React.createElement("meta", {
    httpEquiv: "content-type",
    content: "text/html"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "author",
    content: author
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "designer",
    content: author
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "publisher",
    content: author
  }), /* @__PURE__ */ React.createElement("title", null, title), /* @__PURE__ */ React.createElement("meta", {
    name: "description",
    content: description
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "keywords",
    content: "Software Engineer,Product Manager,Project Manager,Data Scientist,Computer Scientist"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "robots",
    content: "index,follow"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "distribution",
    content: "web"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "og:title",
    content: title
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "og:type",
    content: "site"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "og:url",
    content: url
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "og:image",
    content: "/icons/share.png"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "og:site_name",
    content: title
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "og:description",
    content: description
  }), /* @__PURE__ */ React.createElement("link", {
    rel: "apple-touch-icon",
    href: "/icons/apple-touch-icon.png"
  }), /* @__PURE__ */ React.createElement("link", {
    rel: "apple-touch-icon",
    sizes: "16x16",
    href: "/icons/favicon-16x16.png"
  }), /* @__PURE__ */ React.createElement("link", {
    rel: "apple-touch-icon",
    sizes: "32x32",
    href: "/icons/favicon-32x32.png"
  }), /* @__PURE__ */ React.createElement("link", {
    rel: "apple-touch-icon",
    sizes: "180x180",
    href: "/icons/apple-touch-icon.png"
  }), /* @__PURE__ */ React.createElement("link", {
    rel: "manifest",
    href: "/manifest.json"
  }), /* @__PURE__ */ React.createElement("link", {
    rel: "mask-icon",
    color: "#000000",
    href: "/icons/safari-pinned-tab.svg"
  }), /* @__PURE__ */ React.createElement("link", {
    rel: "apple-touch-startup-image",
    href: "/startup.png"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "viewport",
    content: "width=device-width, minimum-scale=1, initial-scale=1.0"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "theme-color",
    content: "#000"
  }), /* @__PURE__ */ React.createElement("link", {
    rel: "shortcut icon",
    href: "/icons/favicon.ico"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "twitter:card",
    content: "summary"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "twitter:site",
    content: "@onirenaud"
  })));
};
/* harmony default export */ __webpack_exports__["default"] = (Header);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "react")))

/***/ }),

/***/ "./src/examples/canvas/canvas_transition.js":
/*!**************************************************!*\
  !*** ./src/examples/canvas/canvas_transition.js ***!
  \**************************************************/
/*! exports provided: CanvasTransition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(React) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanvasTransition", function() { return CanvasTransition; });
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-spring */ "react-spring");
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_spring__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _react_spring_three__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @react-spring/three */ "@react-spring/three");
/* harmony import */ var _react_spring_three__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_react_spring_three__WEBPACK_IMPORTED_MODULE_1__);
var __defProp = Object.defineProperty;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, {enumerable: true, configurable: true, writable: true, value}) : obj[key] = value;
var __assign = (a2, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a2, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a2, prop, b[prop]);
    }
  return a2;
};


const CanvasTransition = ({items, canvas}) => {
  return /* @__PURE__ */ React.createElement(react_spring__WEBPACK_IMPORTED_MODULE_0__["Transition"], {
    items,
    keys: (item) => item.id,
    from: {
      position: [0, 0, -20],
      rotation: [0, Math.PI, 0],
      scale: [0, 0, 0]
    },
    enter: {position: [0, 0, 0], rotation: [0, 0, 0], scale: [1, 1, 1]},
    leave: {
      position: [0, 0, -10],
      rotation: [0, -Math.PI, 0],
      scale: [0, 0, 0]
    },
    config: () => (n) => n !== "scale" && _react_spring_three__WEBPACK_IMPORTED_MODULE_1__["config"].slow
  }, (styles, {pageProps, Component}) => /* @__PURE__ */ React.createElement(_react_spring_three__WEBPACK_IMPORTED_MODULE_1__["a"].group, __assign(__assign({}, styles), pageProps), canvas));
};

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

/***/ "./src/pages/_app.jsx":
/*!****************************!*\
  !*** ./src/pages/_app.jsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(React) {/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/helpers/store */ "./src/helpers/store.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config */ "./src/config.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/dynamic */ "next/dynamic");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_layout_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/layout/_dom */ "./src/components/layout/_dom.js");
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-spring */ "react-spring");
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_spring__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _react_spring_three__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @react-spring/three */ "@react-spring/three");
/* harmony import */ var _react_spring_three__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_react_spring_three__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/styles/index.css */ "./src/styles/index.css");
/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_index_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _examples_canvas_canvas_transition__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../examples/canvas/canvas_transition */ "./src/examples/canvas/canvas_transition.js");
var __defProp = Object.defineProperty;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, {enumerable: true, configurable: true, writable: true, value}) : obj[key] = value;
var __assign = (a2, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a2, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a2, prop, b[prop]);
    }
  return a2;
};










let LCanvas = null;
if (false) {} else {
  LCanvas = __webpack_require__(/*! @/components/layout/_canvas */ "./src/components/layout/_canvas.js").default;
}
function SplitApp({canvas, dom}) {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(_config__WEBPACK_IMPORTED_MODULE_3__["default"], null), dom && /* @__PURE__ */ React.createElement(_components_layout_dom__WEBPACK_IMPORTED_MODULE_5__["default"], {
    dom
  }), /* @__PURE__ */ React.createElement(LCanvas, null, canvas && /* @__PURE__ */ React.createElement("group", null, canvas)));
}
function MyApp({Component, pageProps}) {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_0__["useRouter"])();
  let r3fArr = [];
  let compArr = [];
  react__WEBPACK_IMPORTED_MODULE_2__["Children"].forEach(Component(pageProps).props.children, (child) => {
    if (child.props && child.props.r3f) {
      r3fArr.push(child);
    } else {
      compArr.push(child);
    }
  });
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    _helpers_store__WEBPACK_IMPORTED_MODULE_1__["default"].setState({router});
  }, [router]);
  return r3fArr.length > 0 ? /* @__PURE__ */ React.createElement(SplitApp, {
    canvas: r3fArr,
    dom: compArr
  }) : /* @__PURE__ */ React.createElement(Component, __assign({}, pageProps));
}
/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "react")))

/***/ }),

/***/ "./src/styles/index.css":
/*!******************************!*\
  !*** ./src/styles/index.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi private-next-pages/_app.jsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.jsx */"./src/pages/_app.jsx");


/***/ }),

/***/ "@pmndrs/branding":
/*!***********************************!*\
  !*** external "@pmndrs/branding" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@pmndrs/branding");

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

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "r3f-perf":
/*!***************************!*\
  !*** external "r3f-perf" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("r3f-perf");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-spring":
/*!*******************************!*\
  !*** external "react-spring" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-spring");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbGF5b3V0L19jYW52YXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbGF5b3V0L19kb20uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZXhhbXBsZXMvY2FudmFzL2NhbnZhc190cmFuc2l0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9oZWxwZXJzL3N0b3JlLmpzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9fYXBwLmpzeCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAcG1uZHJzL2JyYW5kaW5nXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHJlYWN0LXNwcmluZy90aHJlZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkByZWFjdC10aHJlZS9hMTF5XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHJlYWN0LXRocmVlL2RyZWlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAcmVhY3QtdGhyZWUvZmliZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2R5bmFtaWNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInIzZi1wZXJmXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1zcHJpbmdcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ6dXN0YW5kXCIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFD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V0FBVyxNQUFNLFVBQVUsQ0FBQyxVQUFVO0FBQy9ELFFBQUksTUFBTSxTQUFTLE1BQU0sTUFBTSxLQUFLO0FBQ2xDLGFBQU8sS0FBSztBQUFBLFdBQ1A7QUFDTCxjQUFRLEtBQUs7QUFBQTtBQUFBO0FBSWpCLHlEQUFTLENBQUMsTUFBTTtBQUNkLDBEQUFRLENBQUMsU0FBUyxDQUFFO0FBQUEsS0FDbkIsQ0FBQztBQUVKLFNBQU8sT0FBTyxTQUFTLElBQ3JCLG9DQUFDLFVBQUQ7QUFBQSxJQUFVLFFBQVE7QUFBQSxJQUFRLEtBQUs7QUFBQSxPQUUvQixvQ0FBQyxXQUFELGFBQWU7QUFBQTtBQUlKLG9FQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2RHBCLDZDOzs7Ozs7Ozs7OztBQ0FBLGdEOzs7Ozs7Ozs7OztBQ0FBLDhDOzs7Ozs7Ozs7OztBQ0FBLDhDOzs7Ozs7Ozs7OztBQ0FBLCtDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLHFDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLG9DIiwiZmlsZSI6InBhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJpbXBvcnQgeyBDYW52YXMgfSBmcm9tICdAcmVhY3QtdGhyZWUvZmliZXInXG5pbXBvcnQgeyBQZXJmIH0gZnJvbSAncjNmLXBlcmYnXG5pbXBvcnQgdXNlU3RvcmUgZnJvbSAnQC9oZWxwZXJzL3N0b3JlJ1xuaW1wb3J0IHsgT3JiaXRDb250cm9scywgUHJlbG9hZCB9IGZyb20gJ0ByZWFjdC10aHJlZS9kcmVpJ1xuaW1wb3J0IHsgYW5pbWF0ZWQsIHVzZVNwcmluZyB9IGZyb20gJ0ByZWFjdC1zcHJpbmcvdGhyZWUnXG5pbXBvcnQgeyBBMTF5VXNlclByZWZlcmVuY2VzIH0gZnJvbSAnQHJlYWN0LXRocmVlL2ExMXknXG5cbi8qIGNvbnN0IEJnID0gKCkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VTdG9yZSgoc3RhdGUpID0+IHN0YXRlLnJvdXRlcilcbiAgY29uc3QgeyBiZyB9ID0gdXNlU3ByaW5nKHtcbiAgICBiZzogcm91dGVyICYmIHJvdXRlci5yb3V0ZSAhPT0gJy9ib3gnID8gMCA6IDB4MTcgLyAyNTUsXG4gIH0pXG4gIHJldHVybiA8YS5jb2xvciBhdHRhY2g9J2JhY2tncm91bmQnIHI9e2JnfSBnPXtiZ30gYj17Ymd9IC8+XG59ICovXG5jb25zdCBMQ2FudmFzID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VTdG9yZSgoc3RhdGUpID0+IHN0YXRlLnJvdXRlcilcbiAgY29uc3QgeyBiZyB9ID0gdXNlU3ByaW5nKHtcbiAgICBiZzogcm91dGVyICYmIHJvdXRlci5yb3V0ZSAhPT0gJy9ib3gnID8gMCA6IDB4MTcgLyAyNTUsXG4gIH0pXG4gIHJldHVybiAoXG4gICAgPGFuaW1hdGVkLmdyb3VwPlxuICAgICAgPGRpdlxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIGJhY2tncm91bmQ6XG4gICAgICAgICAgICAnbGluZWFyLWdyYWRpZW50KDBkZWcsIHJnYmEoMCw3LDQzLDEpIDAlLCByZ2JhKDEsMTcsNjQsMSkgNDAlLCByZ2JhKDksNDksMTIxLDAuOTE5MjgxMDkxMzQyNzg3MSkgMTAwJSknLFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8Q2FudmFzXG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIHBvc2l0aW9uOiAnaW5oZXJpdCcsXG4gICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgfX1cbiAgICAgICAgICBvbkNyZWF0ZWQ9eyh7IGV2ZW50cyB9KSA9PiB7XG4gICAgICAgICAgICB1c2VTdG9yZS5zZXRTdGF0ZSh7IGV2ZW50cyB9KVxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICA8Zm9nIGF0dGFjaD0nZm9nJyBhcmdzPXtbJ3JnYigxLDE3LDY0KScsIDAsIDUwXX0gLz5cbiAgICAgICAgICA8QTExeVVzZXJQcmVmZXJlbmNlcz5cbiAgICAgICAgICAgIDxQcmVsb2FkIGFsbCAvPlxuICAgICAgICAgICAgey8qIDxCZyAvPiAqL31cbiAgICAgICAgICAgIDxQZXJmIG9wZW5CeURlZmF1bHQgdHJhY2tHUFU9e3RydWV9IHBvc2l0aW9uPXsnYm90dG9tLXJpZ2h0J30gLz5cbiAgICAgICAgICAgIDxPcmJpdENvbnRyb2xzXG4gICAgICAgICAgICAvLyBhdXRvUm90YXRlIGF1dG9Sb3RhdGVTcGVlZD17MC45fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgICA8L0ExMXlVc2VyUHJlZmVyZW5jZXM+XG4gICAgICAgIDwvQ2FudmFzPlxuICAgICAgPC9kaXY+XG4gICAgPC9hbmltYXRlZC5ncm91cD5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBMQ2FudmFzXG4iLCJpbXBvcnQgdXNlU3RvcmUgZnJvbSAnQC9oZWxwZXJzL3N0b3JlJ1xuaW1wb3J0IHsgQmFkZ2UgfSBmcm9tICdAcG1uZHJzL2JyYW5kaW5nJ1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IHsgdXNlU3ByaW5nLCBhbmltYXRlZCB9IGZyb20gJ3JlYWN0LXNwcmluZydcblxuY29uc3QgSGVhZGVyID0gKCkgPT4ge1xuICBjb25zdCB0aXRsZSA9IHVzZVN0b3JlKChzKSA9PiBzLnRpdGxlKVxuICByZXR1cm4gKFxuICAgIDxIZWFkPlxuICAgICAgPHRpdGxlPnt0aXRsZX08L3RpdGxlPlxuICAgIDwvSGVhZD5cbiAgKVxufVxuY29uc3QgRG9tID0gKHsgZG9tIH0pID0+IHtcbiAgY29uc3QgZXZlbnRzID0gdXNlU3RvcmUoKHMpID0+IHMuZXZlbnRzKVxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdhYnNvbHV0ZSB0b3AtMCBsZWZ0LTAgcmlnaHQtMCB6LTIwIGRvbScgey4uLmV2ZW50c30+XG4gICAgICA8SGVhZGVyIC8+XG4gICAgICB7ZG9tfVxuICAgICAgPGgxIGNsYXNzTmFtZT0nYWJzb2x1dGUgdy1mdWxsIHRleHQteHMgdHJhY2tpbmctd2lkZXIgdGV4dC1jZW50ZXIgdGV4dC1ncmF5LTEwMCBtZDptdC01NiBtdC0yOCB0b3AtMS8yIHNtOnN1YnBpeGVsLWFudGlhbGlhc2VkIG1kOmFudGlhbGlhc2VkJz5cbiAgICAgICAgQVJDSElNRURFUyBTQ1JFV1xuICAgICAgPC9oMT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdhYnNvbHV0ZSBwLTIgbS0yIHJpZ2h0LTQgei1pbmRleC0zMCc+XG4gICAgICAgIDxCYWRnZSAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRG9tXG4iLCJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5cbmNvbnN0IHRpdGxlID0gJ1JlYWN0IFRocmVlIE5leHQgU3RhcnRlcidcbmNvbnN0IHVybCA9ICdodHRwczovL3JlYWN0LXRocmVlLW5leHQudmVyY2VsLmFwcC8nXG5jb25zdCBkZXNjcmlwdGlvbiA9XG4gICdUaGUgZWFzaWVzdCBhbmQgZmFzdGVzdCB3YXkgdG8gY3JlYXRlIGEgM0Qgd2Vic2l0ZSB1c2luZyBSZWFjdCBUaHJlZSBGaWJlciBhbmQgTmV4dEpTJ1xuY29uc3QgYXV0aG9yID0gJ0F1dGhvcidcblxuY29uc3QgSGVhZGVyID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgey8qIFJlY29tbWVuZGVkIE1ldGEgVGFncyAqL31cbiAgICAgICAgPG1ldGEgY2hhclNldD0ndXRmLTgnIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9J2xhbmd1YWdlJyBjb250ZW50PSdlbmdsaXNoJyAvPlxuICAgICAgICA8bWV0YSBodHRwRXF1aXY9J2NvbnRlbnQtdHlwZScgY29udGVudD0ndGV4dC9odG1sJyAvPlxuICAgICAgICA8bWV0YSBuYW1lPSdhdXRob3InIGNvbnRlbnQ9e2F1dGhvcn0gLz5cbiAgICAgICAgPG1ldGEgbmFtZT0nZGVzaWduZXInIGNvbnRlbnQ9e2F1dGhvcn0gLz5cbiAgICAgICAgPG1ldGEgbmFtZT0ncHVibGlzaGVyJyBjb250ZW50PXthdXRob3J9IC8+XG5cbiAgICAgICAgey8qIFNlYXJjaCBFbmdpbmUgT3B0aW1pemF0aW9uIE1ldGEgVGFncyAqL31cbiAgICAgICAgPHRpdGxlPnt0aXRsZX08L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPSdkZXNjcmlwdGlvbicgY29udGVudD17ZGVzY3JpcHRpb259IC8+XG4gICAgICAgIDxtZXRhXG4gICAgICAgICAgbmFtZT0na2V5d29yZHMnXG4gICAgICAgICAgY29udGVudD0nU29mdHdhcmUgRW5naW5lZXIsUHJvZHVjdCBNYW5hZ2VyLFByb2plY3QgTWFuYWdlcixEYXRhIFNjaWVudGlzdCxDb21wdXRlciBTY2llbnRpc3QnXG4gICAgICAgIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9J3JvYm90cycgY29udGVudD0naW5kZXgsZm9sbG93JyAvPlxuICAgICAgICA8bWV0YSBuYW1lPSdkaXN0cmlidXRpb24nIGNvbnRlbnQ9J3dlYicgLz5cbiAgICAgICAgey8qIFxuICAgICAgRmFjZWJvb2sgT3BlbiBHcmFwaCBtZXRhIHRhZ3NcbiAgICAgICAgZG9jdW1lbnRhdGlvbjogaHR0cHM6Ly9kZXZlbG9wZXJzLmZhY2Vib29rLmNvbS9kb2NzL3NoYXJpbmcvb3BlbmdyYXBoICovfVxuICAgICAgICA8bWV0YSBuYW1lPSdvZzp0aXRsZScgY29udGVudD17dGl0bGV9IC8+XG4gICAgICAgIDxtZXRhIG5hbWU9J29nOnR5cGUnIGNvbnRlbnQ9J3NpdGUnIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9J29nOnVybCcgY29udGVudD17dXJsfSAvPlxuICAgICAgICA8bWV0YSBuYW1lPSdvZzppbWFnZScgY29udGVudD17Jy9pY29ucy9zaGFyZS5wbmcnfSAvPlxuICAgICAgICA8bWV0YSBuYW1lPSdvZzpzaXRlX25hbWUnIGNvbnRlbnQ9e3RpdGxlfSAvPlxuICAgICAgICA8bWV0YSBuYW1lPSdvZzpkZXNjcmlwdGlvbicgY29udGVudD17ZGVzY3JpcHRpb259IC8+XG5cbiAgICAgICAgPGxpbmsgcmVsPSdhcHBsZS10b3VjaC1pY29uJyBocmVmPScvaWNvbnMvYXBwbGUtdG91Y2gtaWNvbi5wbmcnIC8+XG4gICAgICAgIDxsaW5rXG4gICAgICAgICAgcmVsPSdhcHBsZS10b3VjaC1pY29uJ1xuICAgICAgICAgIHNpemVzPScxNngxNidcbiAgICAgICAgICBocmVmPScvaWNvbnMvZmF2aWNvbi0xNngxNi5wbmcnXG4gICAgICAgIC8+XG4gICAgICAgIDxsaW5rXG4gICAgICAgICAgcmVsPSdhcHBsZS10b3VjaC1pY29uJ1xuICAgICAgICAgIHNpemVzPSczMngzMidcbiAgICAgICAgICBocmVmPScvaWNvbnMvZmF2aWNvbi0zMngzMi5wbmcnXG4gICAgICAgIC8+XG4gICAgICAgIDxsaW5rXG4gICAgICAgICAgcmVsPSdhcHBsZS10b3VjaC1pY29uJ1xuICAgICAgICAgIHNpemVzPScxODB4MTgwJ1xuICAgICAgICAgIGhyZWY9Jy9pY29ucy9hcHBsZS10b3VjaC1pY29uLnBuZydcbiAgICAgICAgLz5cbiAgICAgICAgPGxpbmsgcmVsPSdtYW5pZmVzdCcgaHJlZj0nL21hbmlmZXN0Lmpzb24nIC8+XG4gICAgICAgIDxsaW5rXG4gICAgICAgICAgcmVsPSdtYXNrLWljb24nXG4gICAgICAgICAgY29sb3I9JyMwMDAwMDAnXG4gICAgICAgICAgaHJlZj0nL2ljb25zL3NhZmFyaS1waW5uZWQtdGFiLnN2ZydcbiAgICAgICAgLz5cbiAgICAgICAgPGxpbmsgcmVsPSdhcHBsZS10b3VjaC1zdGFydHVwLWltYWdlJyBocmVmPScvc3RhcnR1cC5wbmcnIC8+XG5cbiAgICAgICAgey8qIE1ldGEgVGFncyBmb3IgSFRNTCBwYWdlcyBvbiBNb2JpbGUgKi99XG4gICAgICAgIHsvKiA8bWV0YSBuYW1lPVwiZm9ybWF0LWRldGVjdGlvblwiIGNvbnRlbnQ9XCJ0ZWxlcGhvbmU9eWVzXCIvPlxuICAgICAgICA8bWV0YSBuYW1lPVwiSGFuZGhlbGRGcmllbmRseVwiIGNvbnRlbnQ9XCJ0cnVlXCIvPiAgKi99XG4gICAgICAgIDxtZXRhXG4gICAgICAgICAgbmFtZT0ndmlld3BvcnQnXG4gICAgICAgICAgY29udGVudD0nd2lkdGg9ZGV2aWNlLXdpZHRoLCBtaW5pbXVtLXNjYWxlPTEsIGluaXRpYWwtc2NhbGU9MS4wJ1xuICAgICAgICAvPlxuICAgICAgICA8bWV0YSBuYW1lPSd0aGVtZS1jb2xvcicgY29udGVudD0nIzAwMCcgLz5cbiAgICAgICAgPGxpbmsgcmVsPSdzaG9ydGN1dCBpY29uJyBocmVmPScvaWNvbnMvZmF2aWNvbi5pY28nIC8+XG5cbiAgICAgICAgey8qIFxuICAgICAgVHdpdHRlciBTdW1tYXJ5IGNhcmRcbiAgICAgICAgZG9jdW1lbnRhdGlvbjogaHR0cHM6Ly9kZXYudHdpdHRlci5jb20vY2FyZHMvZ2V0dGluZy1zdGFydGVkXG4gICAgICAgIEJlIHN1cmUgdmFsaWRhdGUgeW91ciBUd2l0dGVyIGNhcmQgbWFya3VwIG9uIHRoZSBkb2N1bWVudGF0aW9uIHNpdGUuICovfVxuICAgICAgICA8bWV0YSBuYW1lPSd0d2l0dGVyOmNhcmQnIGNvbnRlbnQ9J3N1bW1hcnknIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9J3R3aXR0ZXI6c2l0ZScgY29udGVudD0nQG9uaXJlbmF1ZCcgLz5cbiAgICAgIDwvSGVhZD5cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXJcbiIsImltcG9ydCB7IFRyYW5zaXRpb24gfSBmcm9tICdyZWFjdC1zcHJpbmcnXG5pbXBvcnQgeyBhLCBjb25maWcgfSBmcm9tICdAcmVhY3Qtc3ByaW5nL3RocmVlJ1xuXG5leHBvcnQgY29uc3QgQ2FudmFzVHJhbnNpdGlvbiA9ICh7IGl0ZW1zLCBjYW52YXMgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxUcmFuc2l0aW9uXG4gICAgICBpdGVtcz17aXRlbXN9XG4gICAgICBrZXlzPXsoaXRlbSkgPT4gaXRlbS5pZH1cbiAgICAgIGZyb209e3tcbiAgICAgICAgcG9zaXRpb246IFswLCAwLCAtMjBdLFxuICAgICAgICByb3RhdGlvbjogWzAsIE1hdGguUEksIDBdLFxuICAgICAgICBzY2FsZTogWzAsIDAsIDBdLFxuICAgICAgfX1cbiAgICAgIGVudGVyPXt7IHBvc2l0aW9uOiBbMCwgMCwgMF0sIHJvdGF0aW9uOiBbMCwgMCwgMF0sIHNjYWxlOiBbMSwgMSwgMV0gfX1cbiAgICAgIGxlYXZlPXt7XG4gICAgICAgIHBvc2l0aW9uOiBbMCwgMCwgLTEwXSxcbiAgICAgICAgcm90YXRpb246IFswLCAtTWF0aC5QSSwgMF0sXG4gICAgICAgIHNjYWxlOiBbMCwgMCwgMF0sXG4gICAgICB9fVxuICAgICAgY29uZmlnPXsoKSA9PiAobikgPT4gbiAhPT0gJ3NjYWxlJyAmJiBjb25maWcuc2xvd31cbiAgICA+XG4gICAgICB7KHN0eWxlcywgeyBwYWdlUHJvcHMsIENvbXBvbmVudCB9KSA9PiAoXG4gICAgICAgIDxhLmdyb3VwIHsuLi5zdHlsZXN9IHsuLi5wYWdlUHJvcHN9PlxuICAgICAgICAgIHtjYW52YXN9XG4gICAgICAgIDwvYS5ncm91cD5cbiAgICAgICl9XG4gICAgPC9UcmFuc2l0aW9uPlxuICApXG59XG4iLCJpbXBvcnQgY3JlYXRlIGZyb20gJ3p1c3RhbmQnXG5cbmNvbnN0IHVzZVN0b3JlID0gY3JlYXRlKChzZXQpID0+IHtcbiAgcmV0dXJuIHtcbiAgICByb3V0ZXI6IHt9LFxuICAgIGV2ZW50czogbnVsbCxcbiAgICBzZXRFdmVudHM6IChldmVudHMpID0+IHtcbiAgICAgIHNldCh7IGV2ZW50cyB9KVxuICAgIH0sXG4gIH1cbn0pXG5cbmV4cG9ydCBkZWZhdWx0IHVzZVN0b3JlXG4iLCJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCB1c2VTdG9yZSBmcm9tICdAL2hlbHBlcnMvc3RvcmUnXG5pbXBvcnQgeyB1c2VFZmZlY3QsIENoaWxkcmVuIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbmZpZydcbmltcG9ydCBkeW5hbWljIGZyb20gJ25leHQvZHluYW1pYydcbmltcG9ydCBEb20gZnJvbSAnQC9jb21wb25lbnRzL2xheW91dC9fZG9tJ1xuaW1wb3J0IHsgVHJhbnNpdGlvbiB9IGZyb20gJ3JlYWN0LXNwcmluZydcbmltcG9ydCB7IGEsIGNvbmZpZyB9IGZyb20gJ0ByZWFjdC1zcHJpbmcvdGhyZWUnXG5pbXBvcnQgJ0Avc3R5bGVzL2luZGV4LmNzcydcbmltcG9ydCBDYW52YXNUcmFuc2l0aW9uIGZyb20gJy4uL2V4YW1wbGVzL2NhbnZhcy9jYW52YXNfdHJhbnNpdGlvbidcblxubGV0IExDYW52YXMgPSBudWxsXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBMQ2FudmFzID0gZHluYW1pYygoKSA9PiBpbXBvcnQoJ0AvY29tcG9uZW50cy9sYXlvdXQvX2NhbnZhcycpLCB7XG4gICAgc3NyOiBmYWxzZSxcbiAgfSlcbn0gZWxzZSB7XG4gIExDYW52YXMgPSByZXF1aXJlKCdAL2NvbXBvbmVudHMvbGF5b3V0L19jYW52YXMnKS5kZWZhdWx0XG59XG5cbmZ1bmN0aW9uIFNwbGl0QXBwKHsgY2FudmFzLCBkb20gfSkge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZGVyIC8+XG4gICAgICB7ZG9tICYmIDxEb20gZG9tPXtkb219IC8+fVxuXG4gICAgICA8TENhbnZhcz57Y2FudmFzICYmIDxncm91cD57Y2FudmFzfTwvZ3JvdXA+fTwvTENhbnZhcz5cbiAgICA8Lz5cbiAgKVxufVxuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcblxuICBsZXQgcjNmQXJyID0gW11cbiAgbGV0IGNvbXBBcnIgPSBbXVxuICBDaGlsZHJlbi5mb3JFYWNoKENvbXBvbmVudChwYWdlUHJvcHMpLnByb3BzLmNoaWxkcmVuLCAoY2hpbGQpID0+IHtcbiAgICBpZiAoY2hpbGQucHJvcHMgJiYgY2hpbGQucHJvcHMucjNmKSB7XG4gICAgICByM2ZBcnIucHVzaChjaGlsZClcbiAgICB9IGVsc2Uge1xuICAgICAgY29tcEFyci5wdXNoKGNoaWxkKVxuICAgIH1cbiAgfSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHVzZVN0b3JlLnNldFN0YXRlKHsgcm91dGVyIH0pXG4gIH0sIFtyb3V0ZXJdKVxuXG4gIHJldHVybiByM2ZBcnIubGVuZ3RoID4gMCA/IChcbiAgICA8U3BsaXRBcHAgY2FudmFzPXtyM2ZBcnJ9IGRvbT17Y29tcEFycn0gLz5cbiAgKSA6IChcbiAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHBcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBwbW5kcnMvYnJhbmRpbmdcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHJlYWN0LXNwcmluZy90aHJlZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAcmVhY3QtdGhyZWUvYTExeVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAcmVhY3QtdGhyZWUvZHJlaVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAcmVhY3QtdGhyZWUvZmliZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9keW5hbWljXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyM2YtcGVyZlwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1zcHJpbmdcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwienVzdGFuZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9