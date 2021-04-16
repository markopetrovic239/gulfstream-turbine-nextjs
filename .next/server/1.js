exports.ids = [1];
exports.modules = {

/***/ "./src/components/canvas/Box.jsx":
/*!***************************************!*\
  !*** ./src/components/canvas/Box.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(React) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @react-three/drei */ "@react-three/drei");
/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_react_three_drei__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _react_spring_three__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @react-spring/three */ "@react-spring/three");
/* harmony import */ var _react_spring_three__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_react_spring_three__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var three_examples_jsm_geometries_RoundedBoxGeometry__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! three/examples/jsm/geometries/RoundedBoxGeometry */ "three/examples/jsm/geometries/RoundedBoxGeometry");
/* harmony import */ var three_examples_jsm_geometries_RoundedBoxGeometry__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(three_examples_jsm_geometries_RoundedBoxGeometry__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @react-three/fiber */ "@react-three/fiber");
/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_react_three_fiber__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _helpers_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/helpers/store */ "./src/helpers/store.js");
/* harmony import */ var _react_three_a11y__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @react-three/a11y */ "@react-three/a11y");
/* harmony import */ var _react_three_a11y__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_react_three_a11y__WEBPACK_IMPORTED_MODULE_6__);







const M = Object(_react_spring_three__WEBPACK_IMPORTED_MODULE_2__["a"])(_react_three_drei__WEBPACK_IMPORTED_MODULE_1__["MeshDistortMaterial"]);
Object(_react_three_fiber__WEBPACK_IMPORTED_MODULE_4__["extend"])({RoundedBoxGeometry: three_examples_jsm_geometries_RoundedBoxGeometry__WEBPACK_IMPORTED_MODULE_3__["RoundedBoxGeometry"]});
const RoundedDarkBox = () => {
  const {a11yPrefersState} = Object(_react_three_a11y__WEBPACK_IMPORTED_MODULE_6__["useUserPreferences"])();
  const a11y = Object(_react_three_a11y__WEBPACK_IMPORTED_MODULE_6__["useA11y"])();
  const {color} = Object(_react_spring_three__WEBPACK_IMPORTED_MODULE_2__["useSpring"])({
    color: a11y.focus || a11y.hover ? "#494949" : "#272727"
  });
  return /* @__PURE__ */ React.createElement("mesh", {
    rotation: [45, 45, 45]
  }, /* @__PURE__ */ React.createElement("roundedBoxGeometry", {
    args: [1.5, 1.5, 1.5, 10, 0.1]
  }), /* @__PURE__ */ React.createElement(M, {
    distort: a11yPrefersState.prefersReducedMotion ? 0 : 0.4,
    color
  }));
};
const BoxComponent = () => {
  const router = Object(_helpers_store__WEBPACK_IMPORTED_MODULE_5__["default"])((s) => s.router);
  return /* @__PURE__ */ React.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Suspense"], {
    fallback: null
  }, /* @__PURE__ */ React.createElement(_react_three_a11y__WEBPACK_IMPORTED_MODULE_6__["A11y"], {
    role: "link",
    href: "/",
    actionCall: () => {
      router.push(`/`);
    }
  }, /* @__PURE__ */ React.createElement(RoundedDarkBox, null)), /* @__PURE__ */ React.createElement(_react_three_drei__WEBPACK_IMPORTED_MODULE_1__["Environment"], {
    preset: "studio"
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (BoxComponent);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "react")))

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jYW52YXMvQm94LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLE1BQU0sSUFBSSw2REFBQyxDQUFDLHFFQUFtQjtBQUMvQixpRUFBTSxDQUFDLENBQUUsdUhBQWtCO0FBRTNCLE1BQU0saUJBQWlCLE1BQU07QUFDM0IsUUFBTSxDQUFFLG9CQUFxQiw0RUFBa0I7QUFDL0MsUUFBTSxPQUFPLGlFQUFPO0FBQ3BCLFFBQU0sQ0FBRSxTQUFVLHFFQUFTLENBQUM7QUFBQSxJQUMxQixPQUFPLEtBQUssU0FBUyxLQUFLLFFBQVEsWUFBWTtBQUFBO0FBR2hELFNBQ0Usb0NBQUMsUUFBRDtBQUFBLElBQU0sVUFBVSxDQUFDLElBQUksSUFBSTtBQUFBLEtBQ3ZCLG9DQUFDLHNCQUFEO0FBQUEsSUFBb0IsTUFBTSxDQUFDLEtBQUssS0FBSyxLQUFLLElBQUk7QUFBQSxNQUM5QyxvQ0FBQyxHQUFEO0FBQUEsSUFDRSxTQUFTLGlCQUFpQix1QkFBdUIsSUFBSTtBQUFBLElBQ3JEO0FBQUE7QUFBQTtBQU1SLE1BQU0sZUFBZSxNQUFNO0FBQ3pCLFFBQU0sU0FBUyw4REFBUSxDQUFDLENBQUMsTUFBTSxFQUFFO0FBQ2pDLFNBQ0Usb0NBQUMsOENBQVEsRUFBVDtBQUFBLElBQVUsVUFBVTtBQUFBLEtBQ2xCLG9DQUFDLHNEQUFJLEVBQUw7QUFBQSxJQUNFLE1BQUs7QUFBQSxJQUNMLE1BQUs7QUFBQSxJQUNMLFlBQVksTUFBTTtBQUNoQixhQUFPLEtBQUs7QUFBQTtBQUFBLEtBR2Qsb0NBQUMsZ0JBQUQsUUFFRixvQ0FBQyw2REFBVyxFQUFaO0FBQUEsSUFBYSxRQUFRO0FBQUE7QUFBQTtBQUlaLDJFQUFZIiwiZmlsZSI6IjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdXNwZW5zZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgRW52aXJvbm1lbnQsIE1lc2hEaXN0b3J0TWF0ZXJpYWwgfSBmcm9tICdAcmVhY3QtdGhyZWUvZHJlaSdcbmltcG9ydCB7IGEsIHVzZVNwcmluZyB9IGZyb20gJ0ByZWFjdC1zcHJpbmcvdGhyZWUnXG5pbXBvcnQgeyBSb3VuZGVkQm94R2VvbWV0cnkgfSBmcm9tICd0aHJlZS9leGFtcGxlcy9qc20vZ2VvbWV0cmllcy9Sb3VuZGVkQm94R2VvbWV0cnknXG5pbXBvcnQgeyBleHRlbmQgfSBmcm9tICdAcmVhY3QtdGhyZWUvZmliZXInXG5pbXBvcnQgdXNlU3RvcmUgZnJvbSAnQC9oZWxwZXJzL3N0b3JlJ1xuaW1wb3J0IHsgQTExeSwgdXNlQTExeSwgdXNlVXNlclByZWZlcmVuY2VzIH0gZnJvbSAnQHJlYWN0LXRocmVlL2ExMXknXG5cbmNvbnN0IE0gPSBhKE1lc2hEaXN0b3J0TWF0ZXJpYWwpXG5leHRlbmQoeyBSb3VuZGVkQm94R2VvbWV0cnkgfSlcblxuY29uc3QgUm91bmRlZERhcmtCb3ggPSAoKSA9PiB7XG4gIGNvbnN0IHsgYTExeVByZWZlcnNTdGF0ZSB9ID0gdXNlVXNlclByZWZlcmVuY2VzKClcbiAgY29uc3QgYTExeSA9IHVzZUExMXkoKVxuICBjb25zdCB7IGNvbG9yIH0gPSB1c2VTcHJpbmcoe1xuICAgIGNvbG9yOiBhMTF5LmZvY3VzIHx8IGExMXkuaG92ZXIgPyAnIzQ5NDk0OScgOiAnIzI3MjcyNycsXG4gIH0pXG5cbiAgcmV0dXJuIChcbiAgICA8bWVzaCByb3RhdGlvbj17WzQ1LCA0NSwgNDVdfT5cbiAgICAgIDxyb3VuZGVkQm94R2VvbWV0cnkgYXJncz17WzEuNSwgMS41LCAxLjUsIDEwLCAwLjFdfSAvPlxuICAgICAgPE1cbiAgICAgICAgZGlzdG9ydD17YTExeVByZWZlcnNTdGF0ZS5wcmVmZXJzUmVkdWNlZE1vdGlvbiA/IDAgOiAwLjR9XG4gICAgICAgIGNvbG9yPXtjb2xvcn1cbiAgICAgIC8+XG4gICAgPC9tZXNoPlxuICApXG59XG5cbmNvbnN0IEJveENvbXBvbmVudCA9ICgpID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlU3RvcmUoKHMpID0+IHMucm91dGVyKVxuICByZXR1cm4gKFxuICAgIDxTdXNwZW5zZSBmYWxsYmFjaz17bnVsbH0+XG4gICAgICA8QTExeVxuICAgICAgICByb2xlPSdsaW5rJ1xuICAgICAgICBocmVmPScvJ1xuICAgICAgICBhY3Rpb25DYWxsPXsoKSA9PiB7XG4gICAgICAgICAgcm91dGVyLnB1c2goYC9gKVxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8Um91bmRlZERhcmtCb3ggLz5cbiAgICAgIDwvQTExeT5cbiAgICAgIDxFbnZpcm9ubWVudCBwcmVzZXQ9eydzdHVkaW8nfSAvPlxuICAgIDwvU3VzcGVuc2U+XG4gIClcbn1cbmV4cG9ydCBkZWZhdWx0IEJveENvbXBvbmVudFxuIl0sInNvdXJjZVJvb3QiOiIifQ==