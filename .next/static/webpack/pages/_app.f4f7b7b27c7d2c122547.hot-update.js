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
  const router = Object(_helpers_store__WEBPACK_IMPORTED_MODULE_2__["default"])((state) => state.router);
  const {bg} = Object(_react_spring_three__WEBPACK_IMPORTED_MODULE_4__["useSpring"])({
    bg: router && router.route !== "/box" ? 0 : 23 / 255
  });
  return /* @__PURE__ */ React.createElement(_react_spring_three__WEBPACK_IMPORTED_MODULE_4__["animated"].group, null, /* @__PURE__ */ React.createElement("div", {
    style: {
      background: `linear-gradient(0deg, rgba(${bg},7,43,1) 0%, rgba(1,17,${bg},1) 40%, rgba(9,49,121,0.9192810913427871) 100%)`
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvbGF5b3V0L19jYW52YXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBU0EsTUFBTSxVQUFVLENBQUMsQ0FBRSxjQUFlO0FBQ2hDLFFBQU0sU0FBUyw4REFBUSxDQUFDLENBQUMsVUFBVSxNQUFNO0FBQ3pDLFFBQU0sQ0FBRSxNQUFPLHFFQUFTLENBQUM7QUFBQSxJQUN2QixJQUFJLFVBQVUsT0FBTyxVQUFVLFNBQVMsSUFBSSxLQUFPO0FBQUE7QUFFckQsU0FDRSxvQ0FBQyw0REFBUSxDQUFDLE9BQVYsTUFDRSxvQ0FBQyxPQUFEO0FBQUEsSUFDRSxPQUFPO0FBQUEsTUFDTCxZQUFZLDhCQUE4Qiw0QkFBNEI7QUFBQTtBQUFBLEtBR3hFLG9DQUFDLHlEQUFNLEVBQVA7QUFBQSxJQUNFLE9BQU87QUFBQSxNQUNMLFVBQVU7QUFBQSxNQUNWLEtBQUs7QUFBQTtBQUFBLElBRVAsV0FBVyxDQUFDLENBQUUsWUFBYTtBQUN6Qiw0REFBUSxDQUFDLFNBQVMsQ0FBRTtBQUFBO0FBQUEsS0FHdEIsb0NBQUMsT0FBRDtBQUFBLElBQUssUUFBTztBQUFBLElBQU0sTUFBTSxDQUFDLGdCQUFnQixHQUFHO0FBQUEsTUFDNUMsb0NBQUMscUVBQW1CLEVBQXBCLE1BQ0Usb0NBQUMseURBQU8sRUFBUjtBQUFBLElBQVMsS0FBRztBQUFBLE1BRVosb0NBQUMsNkNBQUksRUFBTDtBQUFBLElBQU0sZUFBYTtBQUFBLElBQUMsVUFBVTtBQUFBLElBQU0sVUFBVTtBQUFBLE1BQzlDLG9DQUFDLCtEQUFhLEVBQWQsT0FHQztBQUFBO0FBUUUsc0VBQU8iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5mNGY3YjdiMjdjN2QyYzEyMjU0Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2FudmFzIH0gZnJvbSAnQHJlYWN0LXRocmVlL2ZpYmVyJ1xuaW1wb3J0IHsgUGVyZiB9IGZyb20gJ3IzZi1wZXJmJ1xuaW1wb3J0IHVzZVN0b3JlIGZyb20gJ0AvaGVscGVycy9zdG9yZSdcbmltcG9ydCB7IE9yYml0Q29udHJvbHMsIFByZWxvYWQgfSBmcm9tICdAcmVhY3QtdGhyZWUvZHJlaSdcbmltcG9ydCB7IGFuaW1hdGVkLCB1c2VTcHJpbmcgfSBmcm9tICdAcmVhY3Qtc3ByaW5nL3RocmVlJ1xuaW1wb3J0IHsgQTExeVVzZXJQcmVmZXJlbmNlcyB9IGZyb20gJ0ByZWFjdC10aHJlZS9hMTF5J1xuXG4vKiBjb25zdCBCZyA9ICgpID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlU3RvcmUoKHN0YXRlKSA9PiBzdGF0ZS5yb3V0ZXIpXG4gIGNvbnN0IHsgYmcgfSA9IHVzZVNwcmluZyh7XG4gICAgYmc6IHJvdXRlciAmJiByb3V0ZXIucm91dGUgIT09ICcvYm94JyA/IDAgOiAweDE3IC8gMjU1LFxuICB9KVxuICByZXR1cm4gPGEuY29sb3IgYXR0YWNoPSdiYWNrZ3JvdW5kJyByPXtiZ30gZz17Ymd9IGI9e2JnfSAvPlxufSAqL1xuY29uc3QgTENhbnZhcyA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlU3RvcmUoKHN0YXRlKSA9PiBzdGF0ZS5yb3V0ZXIpXG4gIGNvbnN0IHsgYmcgfSA9IHVzZVNwcmluZyh7XG4gICAgYmc6IHJvdXRlciAmJiByb3V0ZXIucm91dGUgIT09ICcvYm94JyA/IDAgOiAweDE3IC8gMjU1LFxuICB9KVxuICByZXR1cm4gKFxuICAgIDxhbmltYXRlZC5ncm91cD5cbiAgICAgIDxkaXZcbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBgbGluZWFyLWdyYWRpZW50KDBkZWcsIHJnYmEoJHtiZ30sNyw0MywxKSAwJSwgcmdiYSgxLDE3LCR7Ymd9LDEpIDQwJSwgcmdiYSg5LDQ5LDEyMSwwLjkxOTI4MTA5MTM0Mjc4NzEpIDEwMCUpYCxcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPENhbnZhc1xuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBwb3NpdGlvbjogJ2luaGVyaXQnLFxuICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgIH19XG4gICAgICAgICAgb25DcmVhdGVkPXsoeyBldmVudHMgfSkgPT4ge1xuICAgICAgICAgICAgdXNlU3RvcmUuc2V0U3RhdGUoeyBldmVudHMgfSlcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPGZvZyBhdHRhY2g9J2ZvZycgYXJncz17WydyZ2IoMSwxNyw2NCknLCAwLCA1MF19IC8+XG4gICAgICAgICAgPEExMXlVc2VyUHJlZmVyZW5jZXM+XG4gICAgICAgICAgICA8UHJlbG9hZCBhbGwgLz5cbiAgICAgICAgICAgIHsvKiA8QmcgLz4gKi99XG4gICAgICAgICAgICA8UGVyZiBvcGVuQnlEZWZhdWx0IHRyYWNrR1BVPXt0cnVlfSBwb3NpdGlvbj17J2JvdHRvbS1yaWdodCd9IC8+XG4gICAgICAgICAgICA8T3JiaXRDb250cm9sc1xuICAgICAgICAgICAgLy8gYXV0b1JvdGF0ZSBhdXRvUm90YXRlU3BlZWQ9ezAuOX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgPC9BMTF5VXNlclByZWZlcmVuY2VzPlxuICAgICAgICA8L0NhbnZhcz5cbiAgICAgIDwvZGl2PlxuICAgIDwvYW5pbWF0ZWQuZ3JvdXA+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTENhbnZhc1xuIl0sInNvdXJjZVJvb3QiOiIifQ==