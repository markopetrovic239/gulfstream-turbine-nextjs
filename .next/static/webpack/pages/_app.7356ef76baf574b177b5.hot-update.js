webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/pages/_app.jsx":
/*!****************************!*\
  !*** ./src/pages/_app.jsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(React, module) {/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/helpers/store */ "./src/helpers/store.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config */ "./src/config.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_layout_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/layout/_dom */ "./src/components/layout/_dom.js");
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-spring */ "./node_modules/react-spring/web.js");
/* harmony import */ var _react_spring_three__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @react-spring/three */ "./node_modules/@react-spring/three/index.js");
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/react/index.js"), __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL19hcHAuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFJLFVBQVU7QUFDZCxJQUFJLEtBQXlCLEVBQWMsRUFFbEMsTUFFRjtBQUNMLFlBQVUsbUJBQU8sQ0FBQyx5RUFBK0I7QUFBQTtBQUduRCxrQkFBa0IsQ0FBRSxRQUFRLE1BQU87QUFDakMsU0FDRSwwREFDRSxvQ0FBQywrQ0FBTSxFQUFQLE9BQ0MsT0FBTyxvQ0FBQyw4REFBRyxFQUFKO0FBQUEsSUFBSztBQUFBLE1BRWIsb0NBQUMsU0FBRCxNQUFVLFVBQVUsb0NBQUMsU0FBRCxNQUFRO0FBQUE7QUFLbEMsZUFBZSxDQUFFLFdBQVcsWUFBYTtBQUN2QyxRQUFNLFNBQVMsNkRBQVM7QUFFeEIsTUFBSSxTQUFTO0FBQ2IsTUFBSSxVQUFVO0FBQ2QsZ0RBQVEsQ0FBQyxRQUFRLFVBQVUsV0FBVyxNQUFNLFVBQVUsQ0FBQyxVQUFVO0FBQy9ELFFBQUksTUFBTSxTQUFTLE1BQU0sTUFBTSxLQUFLO0FBQ2xDLGFBQU8sS0FBSztBQUFBLFdBQ1A7QUFDTCxjQUFRLEtBQUs7QUFBQTtBQUFBO0FBSWpCLHlEQUFTLENBQUMsTUFBTTtBQUNkLDBEQUFRLENBQUMsU0FBUyxDQUFFO0FBQUEsS0FDbkIsQ0FBQztBQUVKLFNBQU8sT0FBTyxTQUFTLElBQ3JCLG9DQUFDLFVBQUQ7QUFBQSxJQUFVLFFBQVE7QUFBQSxJQUFRLEtBQUs7QUFBQSxPQUUvQixvQ0FBQyxXQUFELGFBQWU7QUFBQTtBQUlKLG9FQUFLIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuNzM1NmVmNzZiYWY1NzRiMTc3YjUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IHVzZVN0b3JlIGZyb20gJ0AvaGVscGVycy9zdG9yZSdcbmltcG9ydCB7IHVzZUVmZmVjdCwgQ2hpbGRyZW4gfSBmcm9tICdyZWFjdCdcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29uZmlnJ1xuaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJ1xuaW1wb3J0IERvbSBmcm9tICdAL2NvbXBvbmVudHMvbGF5b3V0L19kb20nXG5pbXBvcnQgeyBUcmFuc2l0aW9uIH0gZnJvbSAncmVhY3Qtc3ByaW5nJ1xuaW1wb3J0IHsgYSwgY29uZmlnIH0gZnJvbSAnQHJlYWN0LXNwcmluZy90aHJlZSdcbmltcG9ydCAnQC9zdHlsZXMvaW5kZXguY3NzJ1xuaW1wb3J0IENhbnZhc1RyYW5zaXRpb24gZnJvbSAnLi4vZXhhbXBsZXMvY2FudmFzL2NhbnZhc190cmFuc2l0aW9uJ1xuXG5sZXQgTENhbnZhcyA9IG51bGxcbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIExDYW52YXMgPSBkeW5hbWljKCgpID0+IGltcG9ydCgnQC9jb21wb25lbnRzL2xheW91dC9fY2FudmFzJyksIHtcbiAgICBzc3I6IGZhbHNlLFxuICB9KVxufSBlbHNlIHtcbiAgTENhbnZhcyA9IHJlcXVpcmUoJ0AvY29tcG9uZW50cy9sYXlvdXQvX2NhbnZhcycpLmRlZmF1bHRcbn1cblxuZnVuY3Rpb24gU3BsaXRBcHAoeyBjYW52YXMsIGRvbSB9KSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkZXIgLz5cbiAgICAgIHtkb20gJiYgPERvbSBkb209e2RvbX0gLz59XG5cbiAgICAgIDxMQ2FudmFzPntjYW52YXMgJiYgPGdyb3VwPntjYW52YXN9PC9ncm91cD59PC9MQ2FudmFzPlxuICAgIDwvPlxuICApXG59XG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuXG4gIGxldCByM2ZBcnIgPSBbXVxuICBsZXQgY29tcEFyciA9IFtdXG4gIENoaWxkcmVuLmZvckVhY2goQ29tcG9uZW50KHBhZ2VQcm9wcykucHJvcHMuY2hpbGRyZW4sIChjaGlsZCkgPT4ge1xuICAgIGlmIChjaGlsZC5wcm9wcyAmJiBjaGlsZC5wcm9wcy5yM2YpIHtcbiAgICAgIHIzZkFyci5wdXNoKGNoaWxkKVxuICAgIH0gZWxzZSB7XG4gICAgICBjb21wQXJyLnB1c2goY2hpbGQpXG4gICAgfVxuICB9KVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgdXNlU3RvcmUuc2V0U3RhdGUoeyByb3V0ZXIgfSlcbiAgfSwgW3JvdXRlcl0pXG5cbiAgcmV0dXJuIHIzZkFyci5sZW5ndGggPiAwID8gKFxuICAgIDxTcGxpdEFwcCBjYW52YXM9e3IzZkFycn0gZG9tPXtjb21wQXJyfSAvPlxuICApIDogKFxuICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcFxuIl0sInNvdXJjZVJvb3QiOiIifQ==