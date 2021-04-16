webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/components/layout/_canvas.js":
/*!******************************************!*\
  !*** ./src/components/layout/_canvas.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(React, module) {/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @react-three/fiber */ "./node_modules/@react-three/fiber/dist/react-three-fiber.esm.js");
/* harmony import */ var r3f_perf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! r3f-perf */ "./node_modules/r3f-perf/dist/r3f-perf.esm.js");
/* harmony import */ var _helpers_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/helpers/store */ "./src/helpers/store.js");
/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @react-three/drei */ "./node_modules/@react-three/drei/index.js");
/* harmony import */ var _react_spring_three__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @react-spring/three */ "./node_modules/@react-spring/three/index.js");
/* harmony import */ var _react_three_a11y__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @react-three/a11y */ "./node_modules/@react-three/a11y/dist/a11y.esm.js");






const LCanvas = ({children}) => {
  return /* @__PURE__ */ React.createElement(_react_spring_three__WEBPACK_IMPORTED_MODULE_4__["a"].div, {
    class: "container",
    style: {
      backgroundColor: x.to([0, 1], ["#c9ffed", "#ff2558"]),
      color: x.to([0, 1], ["#7fffd4", "#c70f46"])
    }
  }, /* @__PURE__ */ React.createElement(_react_three_fiber__WEBPACK_IMPORTED_MODULE_0__["Canvas"], {
    style: {
      position: "absolute",
      top: 0,
      background: "linear-gradient(0deg, rgba(0,7,43,1) 0%, rgba(1,17,64,1) 40%, rgba(9,49,121,0.9192810913427871) 100%);"
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
  }), /* @__PURE__ */ React.createElement(_react_three_drei__WEBPACK_IMPORTED_MODULE_3__["OrbitControls"], null), children)));
};
/* harmony default export */ __webpack_exports__["default"] = (LCanvas);


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvbGF5b3V0L19jYW52YXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBU0EsTUFBTSxVQUFVLENBQUMsQ0FBRSxjQUFlO0FBQ2hDLFNBQ0Usb0NBQUMscURBQUMsQ0FBQyxLQUFIO0FBQUEsSUFDRSxPQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsTUFDTCxpQkFBaUIsRUFBRSxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsV0FBVztBQUFBLE1BQzFDLE9BQU8sRUFBRSxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsV0FBVztBQUFBO0FBQUEsS0FHbEMsb0NBQUMseURBQU0sRUFBUDtBQUFBLElBQ0UsT0FBTztBQUFBLE1BQ0wsVUFBVTtBQUFBLE1BQ1YsS0FBSztBQUFBLE1BQ0wsWUFDRTtBQUFBO0FBQUEsSUFFSixXQUFXLENBQUMsQ0FBRSxZQUFhO0FBQ3pCLDREQUFRLENBQUMsU0FBUyxDQUFFO0FBQUE7QUFBQSxLQUd0QixvQ0FBQyxPQUFEO0FBQUEsSUFBSyxRQUFPO0FBQUEsSUFBTSxNQUFNLENBQUMsZ0JBQWdCLEdBQUc7QUFBQSxNQUM1QyxvQ0FBQyxxRUFBbUIsRUFBcEIsTUFDRSxvQ0FBQyx5REFBTyxFQUFSO0FBQUEsSUFBUyxLQUFHO0FBQUEsTUFFWixvQ0FBQyw2Q0FBSSxFQUFMO0FBQUEsSUFBTSxlQUFhO0FBQUEsSUFBQyxVQUFVO0FBQUEsSUFBTSxVQUFVO0FBQUEsTUFDOUMsb0NBQUMsK0RBQWEsRUFBZCxPQUdDO0FBQUE7QUFPSSxzRUFBTyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjg1YmRlNjU3YTQxODRlYjZkMTc5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDYW52YXMgfSBmcm9tICdAcmVhY3QtdGhyZWUvZmliZXInXG5pbXBvcnQgeyBQZXJmIH0gZnJvbSAncjNmLXBlcmYnXG5pbXBvcnQgdXNlU3RvcmUgZnJvbSAnQC9oZWxwZXJzL3N0b3JlJ1xuaW1wb3J0IHsgT3JiaXRDb250cm9scywgUHJlbG9hZCB9IGZyb20gJ0ByZWFjdC10aHJlZS9kcmVpJ1xuaW1wb3J0IHsgYSwgdXNlU3ByaW5nIH0gZnJvbSAnQHJlYWN0LXNwcmluZy90aHJlZSdcbmltcG9ydCB7IEExMXlVc2VyUHJlZmVyZW5jZXMgfSBmcm9tICdAcmVhY3QtdGhyZWUvYTExeSdcblxuLyogY29uc3QgQmcgPSAoKSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVN0b3JlKChzdGF0ZSkgPT4gc3RhdGUucm91dGVyKVxuICBjb25zdCB7IGJnIH0gPSB1c2VTcHJpbmcoe1xuICAgIGJnOiByb3V0ZXIgJiYgcm91dGVyLnJvdXRlICE9PSAnL2JveCcgPyAwIDogMHgxNyAvIDI1NSxcbiAgfSlcbiAgcmV0dXJuIDxhLmNvbG9yIGF0dGFjaD0nYmFja2dyb3VuZCcgcj17Ymd9IGc9e2JnfSBiPXtiZ30gLz5cbn0gKi9cbmNvbnN0IExDYW52YXMgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGEuZGl2XG4gICAgICBjbGFzcz0nY29udGFpbmVyJ1xuICAgICAgc3R5bGU9e3tcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiB4LnRvKFswLCAxXSwgWycjYzlmZmVkJywgJyNmZjI1NTgnXSksXG4gICAgICAgIGNvbG9yOiB4LnRvKFswLCAxXSwgWycjN2ZmZmQ0JywgJyNjNzBmNDYnXSksXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxDYW52YXNcbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgYmFja2dyb3VuZDpcbiAgICAgICAgICAgICdsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiYSgwLDcsNDMsMSkgMCUsIHJnYmEoMSwxNyw2NCwxKSA0MCUsIHJnYmEoOSw0OSwxMjEsMC45MTkyODEwOTEzNDI3ODcxKSAxMDAlKTsnLFxuICAgICAgICB9fVxuICAgICAgICBvbkNyZWF0ZWQ9eyh7IGV2ZW50cyB9KSA9PiB7XG4gICAgICAgICAgdXNlU3RvcmUuc2V0U3RhdGUoeyBldmVudHMgfSlcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPGZvZyBhdHRhY2g9J2ZvZycgYXJncz17WydyZ2IoMSwxNyw2NCknLCAwLCA1MF19IC8+XG4gICAgICAgIDxBMTF5VXNlclByZWZlcmVuY2VzPlxuICAgICAgICAgIDxQcmVsb2FkIGFsbCAvPlxuICAgICAgICAgIHsvKiA8QmcgLz4gKi99XG4gICAgICAgICAgPFBlcmYgb3BlbkJ5RGVmYXVsdCB0cmFja0dQVT17dHJ1ZX0gcG9zaXRpb249eydib3R0b20tcmlnaHQnfSAvPlxuICAgICAgICAgIDxPcmJpdENvbnRyb2xzXG4gICAgICAgICAgLy8gYXV0b1JvdGF0ZSBhdXRvUm90YXRlU3BlZWQ9ezAuOX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9BMTF5VXNlclByZWZlcmVuY2VzPlxuICAgICAgPC9DYW52YXM+XG4gICAgPC9hLmRpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBMQ2FudmFzXG4iXSwic291cmNlUm9vdCI6IiJ9