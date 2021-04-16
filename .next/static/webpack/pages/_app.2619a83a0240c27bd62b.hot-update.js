webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/components/layout/_dom.js":
/*!***************************************!*\
  !*** ./src/components/layout/_dom.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(React, module) {/* harmony import */ var _helpers_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/helpers/store */ "./src/helpers/store.js");
/* harmony import */ var _pmndrs_branding__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @pmndrs/branding */ "./node_modules/@pmndrs/branding/dist/index.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-spring */ "./node_modules/react-spring/web.js");
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
  return /* @__PURE__ */ React.createElement(react_spring__WEBPACK_IMPORTED_MODULE_3__["animated"].div, __assign(__assign({
    className: "absolute top-0 left-0 right-0 z-20 dom"
  }, events), {
    style: {
      background: "rgb(0,7,43)"
    }
  }), /* @__PURE__ */ React.createElement(Header, null), dom, /* @__PURE__ */ React.createElement("h1", {
    className: "absolute w-full text-xs tracking-wider text-center text-gray-100 md:mt-56 mt-28 top-1/2 sm:subpixel-antialiased md:antialiased"
  }, "ARCHIMEDES SCREW"), /* @__PURE__ */ React.createElement("div", {
    className: "absolute p-2 m-2 right-4 z-index-30"
  }, /* @__PURE__ */ React.createElement(_pmndrs_branding__WEBPACK_IMPORTED_MODULE_1__["Badge"], null)));
};
/* harmony default export */ __webpack_exports__["default"] = (Dom);


;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/react/index.js"), __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvbGF5b3V0L19kb20uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLE1BQU0sU0FBUyxNQUFNO0FBQ25CLFFBQU0sUUFBUSw4REFBUSxDQUFDLENBQUMsTUFBTSxFQUFFO0FBQ2hDLFNBQ0Usb0NBQUMsZ0RBQUksRUFBTCxNQUNFLG9DQUFDLFNBQUQsTUFBUTtBQUFBO0FBSWQsTUFBTSxNQUFNLENBQUMsQ0FBRSxTQUFVO0FBQ3ZCLFFBQU0sU0FBUyw4REFBUSxDQUFDLENBQUMsTUFBTSxFQUFFO0FBQ2pDLFNBQ0Usb0NBQUMscURBQVEsQ0FBQyxLQUFWO0FBQUEsSUFDRSxXQUFVO0FBQUEsS0FDTixTQUZOO0FBQUEsSUFHRSxPQUFPO0FBQUEsTUFDTCxZQUFZO0FBQUE7QUFBQSxNQUdkLG9DQUFDLFFBQUQsT0FDQyxLQUNELG9DQUFDLE1BQUQ7QUFBQSxJQUFJLFdBQVU7QUFBQSxLQUFpSSxxQkFHL0ksb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Isb0NBQUMsc0RBQUssRUFBTjtBQUFBO0FBTU8sa0VBQUciLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC4yNjE5YTgzYTAyNDBjMjdiZDYyYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHVzZVN0b3JlIGZyb20gJ0AvaGVscGVycy9zdG9yZSdcbmltcG9ydCB7IEJhZGdlIH0gZnJvbSAnQHBtbmRycy9icmFuZGluZydcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCB7IHVzZVNwcmluZywgYW5pbWF0ZWQgfSBmcm9tICdyZWFjdC1zcHJpbmcnXG5cbmNvbnN0IEhlYWRlciA9ICgpID0+IHtcbiAgY29uc3QgdGl0bGUgPSB1c2VTdG9yZSgocykgPT4gcy50aXRsZSlcbiAgcmV0dXJuIChcbiAgICA8SGVhZD5cbiAgICAgIDx0aXRsZT57dGl0bGV9PC90aXRsZT5cbiAgICA8L0hlYWQ+XG4gIClcbn1cbmNvbnN0IERvbSA9ICh7IGRvbSB9KSA9PiB7XG4gIGNvbnN0IGV2ZW50cyA9IHVzZVN0b3JlKChzKSA9PiBzLmV2ZW50cylcbiAgcmV0dXJuIChcbiAgICA8YW5pbWF0ZWQuZGl2XG4gICAgICBjbGFzc05hbWU9J2Fic29sdXRlIHRvcC0wIGxlZnQtMCByaWdodC0wIHotMjAgZG9tJ1xuICAgICAgey4uLmV2ZW50c31cbiAgICAgIHN0eWxlPXt7XG4gICAgICAgIGJhY2tncm91bmQ6ICdyZ2IoMCw3LDQzKScsXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxIZWFkZXIgLz5cbiAgICAgIHtkb219XG4gICAgICA8aDEgY2xhc3NOYW1lPSdhYnNvbHV0ZSB3LWZ1bGwgdGV4dC14cyB0cmFja2luZy13aWRlciB0ZXh0LWNlbnRlciB0ZXh0LWdyYXktMTAwIG1kOm10LTU2IG10LTI4IHRvcC0xLzIgc206c3VicGl4ZWwtYW50aWFsaWFzZWQgbWQ6YW50aWFsaWFzZWQnPlxuICAgICAgICBBUkNISU1FREVTIFNDUkVXXG4gICAgICA8L2gxPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2Fic29sdXRlIHAtMiBtLTIgcmlnaHQtNCB6LWluZGV4LTMwJz5cbiAgICAgICAgPEJhZGdlIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2FuaW1hdGVkLmRpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBEb21cbiJdLCJzb3VyY2VSb290IjoiIn0=