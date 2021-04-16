exports.ids = [0];
exports.modules = {

/***/ "./src/components/canvas/Buoy.jsx":
/*!****************************************!*\
  !*** ./src/components/canvas/Buoy.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @react-three/drei */ "@react-three/drei");
/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_react_three_drei__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three */ "three");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(three__WEBPACK_IMPORTED_MODULE_2__);



function Buoy(props) {
  const color = Object(_react_three_drei__WEBPACK_IMPORTED_MODULE_1__["useTexture"])("/waves.png");
  const [buoyMat] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(new three__WEBPACK_IMPORTED_MODULE_2__["MeshStandardMaterial"]({
    metalness: 0.5,
    map: color
  }));
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("group", {
    name: "bouy"
  }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("mesh", {
    position: [0, props.height + 1, 0],
    material: buoyMat,
    scale: [1, 1.5, 1]
  }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("sphereBufferGeometry", {
    attach: "geometry",
    args: [0.3, 32, 32]
  })), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("mesh", {
    position: [0, props.height, 0],
    material: buoyMat,
    scale: [1, 1, 1]
  }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("cylinderBufferGeometry", {
    attach: "geometry",
    args: [0.3, 0.3, 2, 50]
  })), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("mesh", {
    position: [0, props.height - 1, 0],
    material: buoyMat,
    scale: [1, 1.5, 1]
  }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("sphereBufferGeometry", {
    attach: "geometry",
    args: [0.3, 32, 32]
  })));
}
/* harmony default export */ __webpack_exports__["default"] = (Buoy);


/***/ }),

/***/ "./src/components/canvas/Dolphin2.js":
/*!*******************************************!*\
  !*** ./src/components/canvas/Dolphin2.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Model; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @react-three/drei */ "@react-three/drei");
/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_react_three_drei__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var three_examples_jsm_utils_SkeletonUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three/examples/jsm/utils/SkeletonUtils */ "three/examples/jsm/utils/SkeletonUtils");
/* harmony import */ var three_examples_jsm_utils_SkeletonUtils__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(three_examples_jsm_utils_SkeletonUtils__WEBPACK_IMPORTED_MODULE_2__);
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



function Model(props) {
  const group = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  const {nodes, materials, animations} = Object(_react_three_drei__WEBPACK_IMPORTED_MODULE_1__["useGLTF"])("/Dolphin2.glb");
  const {actions} = Object(_react_three_drei__WEBPACK_IMPORTED_MODULE_1__["useAnimations"])(animations, group);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    actions["Action.001"].play();
    actions["Action.001"].setDuration(2);
    group.current.position.z = props.pos[2];
    group.current.position.x = props.pos[0];
  });
  const clonedScene = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => {
    return three_examples_jsm_utils_SkeletonUtils__WEBPACK_IMPORTED_MODULE_2__["SkeletonUtils"].clone(nodes);
  }, [nodes]);
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("group", __assign(__assign({
    ref: group
  }, props), {
    dispose: null
  }), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("group", {
    name: "Scene"
  }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("group", {
    name: "Armature"
  }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("primitive", {
    object: clonedScene.MAIN
  }), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("group", {
    name: "Mesh"
  }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("skinnedMesh", {
    name: "Circle002",
    geometry: clonedScene.Circle002.geometry,
    material: materials["Dolphin Body"],
    skeleton: clonedScene.Circle002.skeleton
  }), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("skinnedMesh", {
    name: "Circle002_1",
    geometry: clonedScene.Circle002_1.geometry,
    material: materials["Dolphin Eyes"],
    skeleton: clonedScene.Circle002_1.skeleton
  })))));
}
_react_three_drei__WEBPACK_IMPORTED_MODULE_1__["useGLTF"].preload("/Dolphin2.glb");


/***/ }),

/***/ "./src/components/canvas/Turbine.jsx":
/*!*******************************************!*\
  !*** ./src/components/canvas/Turbine.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Model; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @react-three/drei */ "@react-three/drei");
/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_react_three_drei__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @react-three/fiber */ "@react-three/fiber");
/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_react_three_fiber__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! three */ "three");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(three__WEBPACK_IMPORTED_MODULE_3__);
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




function Model(props) {
  const group = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  const {nodes, materials} = Object(_react_three_drei__WEBPACK_IMPORTED_MODULE_1__["useGLTF"])("/Spinner.glb");
  Object(_react_three_fiber__WEBPACK_IMPORTED_MODULE_2__["useFrame"])(() => {
    if (group.current)
      group.current.rotation.z += 2 * Math.PI / 1800 * 2 / 1.75;
  });
  const [concrete] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(new three__WEBPACK_IMPORTED_MODULE_3__["MeshStandardMaterial"]({
    color: "#575757",
    lightMapIntensity: 0.1
  }));
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("group", __assign(__assign({
    ref: group
  }, props), {
    dispose: null
  }), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("group", null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("mesh", {
    scale: [8e-5, 8e-5, 8e-5],
    position: [0, 0, -0.4],
    rotation: [Math.PI / 2, -Math.PI / 2, -Math.PI / 2],
    name: "Asset3DLoadersceneRoot",
    geometry: nodes.Asset3DLoadersceneRoot.geometry,
    material: concrete,
    receiveShadow: false,
    castShadow: false
  })));
}
_react_three_drei__WEBPACK_IMPORTED_MODULE_1__["useGLTF"].preload("/Spinner.glb");


/***/ }),

/***/ "./src/components/canvas/TurbineScene.jsx":
/*!************************************************!*\
  !*** ./src/components/canvas/TurbineScene.jsx ***!
  \************************************************/
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
/* harmony import */ var _helpers_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/helpers/store */ "./src/helpers/store.js");
/* harmony import */ var _Turbine__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Turbine */ "./src/components/canvas/Turbine.jsx");
/* harmony import */ var _Buoy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Buoy */ "./src/components/canvas/Buoy.jsx");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! three */ "three");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(three__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Dolphin2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Dolphin2 */ "./src/components/canvas/Dolphin2.js");
/* harmony import */ var _react_three_a11y__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @react-three/a11y */ "@react-three/a11y");
/* harmony import */ var _react_three_a11y__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_react_three_a11y__WEBPACK_IMPORTED_MODULE_8__);









const M = Object(_react_spring_three__WEBPACK_IMPORTED_MODULE_2__["a"])(_react_three_drei__WEBPACK_IMPORTED_MODULE_1__["MeshDistortMaterial"]);
const DarkSphere = () => {
  const {a11yPrefersState} = Object(_react_three_a11y__WEBPACK_IMPORTED_MODULE_8__["useUserPreferences"])();
  const a11y = Object(_react_three_a11y__WEBPACK_IMPORTED_MODULE_8__["useA11y"])();
  const {color} = Object(_react_spring_three__WEBPACK_IMPORTED_MODULE_2__["useSpring"])({
    color: a11y.focus || a11y.hover ? "#272727" : "black"
  });
  return /* @__PURE__ */ React.createElement(_react_three_drei__WEBPACK_IMPORTED_MODULE_1__["Sphere"], {
    args: [1, 32, 32]
  }, /* @__PURE__ */ React.createElement(M, {
    distort: a11yPrefersState.prefersReducedMotion ? 0 : 0.4,
    color
  }));
};
const TurbineScene = () => {
  const router = Object(_helpers_store__WEBPACK_IMPORTED_MODULE_3__["default"])((s) => s.router);
  const [wireMat] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(new three__WEBPACK_IMPORTED_MODULE_6__["MeshStandardMaterial"]({color: "#081018", metalness: 0.5}));
  return /* @__PURE__ */ React.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Suspense"], {
    fallback: null
  }, /* @__PURE__ */ React.createElement(_Turbine__WEBPACK_IMPORTED_MODULE_4__["default"], null), /* @__PURE__ */ React.createElement("mesh", {
    position: [0, 5, 0]
  }, /* @__PURE__ */ React.createElement(_Turbine__WEBPACK_IMPORTED_MODULE_4__["default"], null)), /* @__PURE__ */ React.createElement(_Buoy__WEBPACK_IMPORTED_MODULE_5__["default"], {
    height: 5
  }), /* @__PURE__ */ React.createElement("mesh", {
    material: wireMat
  }, /* @__PURE__ */ React.createElement("cylinderBufferGeometry", {
    attach: "geometry",
    args: [0.03, 0.03, 50]
  })), /* @__PURE__ */ React.createElement(_react_three_drei__WEBPACK_IMPORTED_MODULE_1__["Environment"], {
    preset: "sunset"
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (TurbineScene);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "react")))

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jYW52YXMvQnVveS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvY2FudmFzL0RvbHBoaW4yLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2NhbnZhcy9UdXJiaW5lLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jYW52YXMvVHVyYmluZVNjZW5lLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUEsY0FBYyxPQUFPO0FBQ25CLFFBQU0sUUFBUSxvRUFBVSxDQUFDO0FBQ3pCLFFBQU0sQ0FBQyxXQUFXLHNEQUFRLENBQ3hCLElBQUksMERBQTBCLENBQUM7QUFBQSxJQUM3QixXQUFXO0FBQUEsSUFDWCxLQUFLO0FBQUE7QUFRVCxTQUNFLDJFQUFDLFNBQUQ7QUFBQSxJQUFPLE1BQUs7QUFBQSxLQUNWLDJFQUFDLFFBQUQ7QUFBQSxJQUNFLFVBQVUsQ0FBQyxHQUFHLE1BQU0sU0FBUyxHQUFHO0FBQUEsSUFDaEMsVUFBVTtBQUFBLElBQ1YsT0FBTyxDQUFDLEdBQUcsS0FBSztBQUFBLEtBRWhCLDJFQUFDLHdCQUFEO0FBQUEsSUFBc0IsUUFBTztBQUFBLElBQVcsTUFBTSxDQUFDLEtBQUssSUFBSTtBQUFBLE9BRzFELDJFQUFDLFFBQUQ7QUFBQSxJQUNFLFVBQVUsQ0FBQyxHQUFHLE1BQU0sUUFBUTtBQUFBLElBQzVCLFVBQVU7QUFBQSxJQUNWLE9BQU8sQ0FBQyxHQUFHLEdBQUc7QUFBQSxLQUVkLDJFQUFDLDBCQUFEO0FBQUEsSUFBd0IsUUFBTztBQUFBLElBQVcsTUFBTSxDQUFDLEtBQUssS0FBSyxHQUFHO0FBQUEsT0FHaEUsMkVBQUMsUUFBRDtBQUFBLElBQ0UsVUFBVSxDQUFDLEdBQUcsTUFBTSxTQUFTLEdBQUc7QUFBQSxJQUNoQyxVQUFV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QUMscUVBQW1CO0FBcUIvQixNQUFNLGFBQWEsTUFBTTtBQUN2QixRQUFNLENBQUUsb0JBQXFCLDRFQUFrQjtBQUMvQyxRQUFNLE9BQU8saUVBQU87QUFDcEIsUUFBTSxDQUFFLFNBQVUscUVBQVMsQ0FBQztBQUFBLElBQzFCLE9BQU8sS0FBSyxTQUFTLEtBQUssUUFBUSxZQUFZO0FBQUE7QUFHaEQsU0FDRSxvQ0FBQyx3REFBTSxFQUFQO0FBQUEsSUFBUSxNQUFNLENBQUMsR0FBRyxJQUFJO0FBQUEsS0FDcEIsb0NBQUMsR0FBRDtBQUFBLElBQ0UsU0FBUyxpQkFBaUIsdUJBQXVCLElBQUk7QUFBQSxJQUNyRDtBQUFBO0FBQUE7QUFNUixNQUFNLGVBQWUsTUFBTTtBQUN6QixRQUFNLFNBQVMsOERBQVEsQ0FBQyxDQUFDLE1BQU0sRUFBRTtBQUNqQyxRQUFNLENBQUMsV0FBVyxzREFBUSxDQUN4QixJQUFJLDBEQUEwQixDQUFDLENBQUUsT0FBTyxXQUFXLFdBQVc7QUFHaEUsU0FDRSxvQ0FBQyw4Q0FBUSxFQUFUO0FBQUEsSUFBVSxVQUFVO0FBQUEsS0FhbEIsb0NBQUMsZ0RBQU8sRUFBUixPQUNBLG9DQUFDLFFBQUQ7QUFBQSxJQUFNLFVBQVUsQ0FBQyxHQUFHLEdBQUc7QUFBQSxLQUNyQixvQ0FBQyxnREFBTyxFQUFSLFFBR0Ysb0NBQUMsNkNBQUksRUFBTDtBQUFBLElBQU0sUUFBUTtBQUFBLE1BQ2Qsb0NBQUMsUUFBRDtBQUFBLElBQU0sVUFBVTtBQUFBLEtBQ2Qsb0NBQUMsMEJBQUQ7QUFBQSxJQUF3QixRQUFPO0FBQUEsSUFBVyxNQUFNLENBQUMsTUFBTSxNQUFNO0FBQUEsT0FFL0Qsb0NBQUMsNkRBQVcsRUFBWjtBQUFBLElBQWEsUUFBUTtBQUFBO0FBQUE7QUFLWiwyRUFBWSIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3MgKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlUmVmLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVRleHR1cmUgfSBmcm9tICdAcmVhY3QtdGhyZWUvZHJlaSdcbmltcG9ydCAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJ1xuXG5mdW5jdGlvbiBCdW95KHByb3BzKSB7XG4gIGNvbnN0IGNvbG9yID0gdXNlVGV4dHVyZSgnL3dhdmVzLnBuZycpXG4gIGNvbnN0IFtidW95TWF0XSA9IHVzZVN0YXRlKFxuICAgIG5ldyBUSFJFRS5NZXNoU3RhbmRhcmRNYXRlcmlhbCh7XG4gICAgICBtZXRhbG5lc3M6IDAuNSxcbiAgICAgIG1hcDogY29sb3IsXG4gICAgfSlcbiAgKVxuXG4gIC8qICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGdyb3VwLmN1cnJlbnQucG9zaXRpb24ueSA9IHByb3BzLmhlaWdodFxuICB9LCBbcHJvcHMuaGVpZ2h0XSkgKi9cblxuICByZXR1cm4gKFxuICAgIDxncm91cCBuYW1lPSdib3V5Jz5cbiAgICAgIDxtZXNoXG4gICAgICAgIHBvc2l0aW9uPXtbMCwgcHJvcHMuaGVpZ2h0ICsgMSwgMF19XG4gICAgICAgIG1hdGVyaWFsPXtidW95TWF0fVxuICAgICAgICBzY2FsZT17WzEsIDEuNSwgMV19XG4gICAgICA+XG4gICAgICAgIDxzcGhlcmVCdWZmZXJHZW9tZXRyeSBhdHRhY2g9J2dlb21ldHJ5JyBhcmdzPXtbMC4zLCAzMiwgMzJdfSAvPlxuICAgICAgPC9tZXNoPlxuXG4gICAgICA8bWVzaFxuICAgICAgICBwb3NpdGlvbj17WzAsIHByb3BzLmhlaWdodCwgMF19XG4gICAgICAgIG1hdGVyaWFsPXtidW95TWF0fVxuICAgICAgICBzY2FsZT17WzEsIDEsIDFdfVxuICAgICAgPlxuICAgICAgICA8Y3lsaW5kZXJCdWZmZXJHZW9tZXRyeSBhdHRhY2g9J2dlb21ldHJ5JyBhcmdzPXtbMC4zLCAwLjMsIDIsIDUwXX0gLz5cbiAgICAgIDwvbWVzaD5cblxuICAgICAgPG1lc2hcbiAgICAgICAgcG9zaXRpb249e1swLCBwcm9wcy5oZWlnaHQgLSAxLCAwXX1cbiAgICAgICAgbWF0ZXJpYWw9e2J1b3lNYXR9XG4gICAgICAgIHNjYWxlPXtbMSwgMS41LCAxXX1cbiAgICAgID5cbiAgICAgICAgPHNwaGVyZUJ1ZmZlckdlb21ldHJ5IGF0dGFjaD0nZ2VvbWV0cnknIGFyZ3M9e1swLjMsIDMyLCAzMl19IC8+XG4gICAgICA8L21lc2g+XG4gICAgPC9ncm91cD5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBCdW95XG4iLCIvKlxuQXV0by1nZW5lcmF0ZWQgYnk6IGh0dHBzOi8vZ2l0aHViLmNvbS9wbW5kcnMvZ2x0ZmpzeFxuKi9cblxuaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiwgdXNlRWZmZWN0LCB1c2VNZW1vIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VHTFRGLCB1c2VBbmltYXRpb25zIH0gZnJvbSAnQHJlYWN0LXRocmVlL2RyZWknXG5pbXBvcnQgeyBTa2VsZXRvblV0aWxzIH0gZnJvbSAndGhyZWUvZXhhbXBsZXMvanNtL3V0aWxzL1NrZWxldG9uVXRpbHMnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1vZGVsKHByb3BzKSB7XG4gIGNvbnN0IGdyb3VwID0gdXNlUmVmKClcbiAgY29uc3QgeyBub2RlcywgbWF0ZXJpYWxzLCBhbmltYXRpb25zIH0gPSB1c2VHTFRGKCcvRG9scGhpbjIuZ2xiJylcbiAgY29uc3QgeyBhY3Rpb25zIH0gPSB1c2VBbmltYXRpb25zKGFuaW1hdGlvbnMsIGdyb3VwKVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGFjdGlvbnNbJ0FjdGlvbi4wMDEnXS5wbGF5KClcbiAgICBhY3Rpb25zWydBY3Rpb24uMDAxJ10uc2V0RHVyYXRpb24oMilcbiAgICBncm91cC5jdXJyZW50LnBvc2l0aW9uLnogPSBwcm9wcy5wb3NbMl1cbiAgICBncm91cC5jdXJyZW50LnBvc2l0aW9uLnggPSBwcm9wcy5wb3NbMF1cbiAgfSlcbiAgY29uc3QgY2xvbmVkU2NlbmUgPSB1c2VNZW1vKCgpID0+IHtcbiAgICByZXR1cm4gU2tlbGV0b25VdGlscy5jbG9uZShub2RlcylcbiAgfSwgW25vZGVzXSlcblxuICByZXR1cm4gKFxuICAgIDxncm91cCByZWY9e2dyb3VwfSB7Li4ucHJvcHN9IGRpc3Bvc2U9e251bGx9PlxuICAgICAgPGdyb3VwIG5hbWU9J1NjZW5lJz5cbiAgICAgICAgPGdyb3VwIG5hbWU9J0FybWF0dXJlJz5cbiAgICAgICAgICA8cHJpbWl0aXZlIG9iamVjdD17Y2xvbmVkU2NlbmUuTUFJTn0gLz5cbiAgICAgICAgICA8Z3JvdXAgbmFtZT0nTWVzaCc+XG4gICAgICAgICAgICA8c2tpbm5lZE1lc2hcbiAgICAgICAgICAgICAgbmFtZT0nQ2lyY2xlMDAyJ1xuICAgICAgICAgICAgICBnZW9tZXRyeT17Y2xvbmVkU2NlbmUuQ2lyY2xlMDAyLmdlb21ldHJ5fVxuICAgICAgICAgICAgICBtYXRlcmlhbD17bWF0ZXJpYWxzWydEb2xwaGluIEJvZHknXX1cbiAgICAgICAgICAgICAgc2tlbGV0b249e2Nsb25lZFNjZW5lLkNpcmNsZTAwMi5za2VsZXRvbn1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8c2tpbm5lZE1lc2hcbiAgICAgICAgICAgICAgbmFtZT0nQ2lyY2xlMDAyXzEnXG4gICAgICAgICAgICAgIGdlb21ldHJ5PXtjbG9uZWRTY2VuZS5DaXJjbGUwMDJfMS5nZW9tZXRyeX1cbiAgICAgICAgICAgICAgbWF0ZXJpYWw9e21hdGVyaWFsc1snRG9scGhpbiBFeWVzJ119XG4gICAgICAgICAgICAgIHNrZWxldG9uPXtjbG9uZWRTY2VuZS5DaXJjbGUwMDJfMS5za2VsZXRvbn1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9ncm91cD5cbiAgICAgICAgPC9ncm91cD5cbiAgICAgIDwvZ3JvdXA+XG4gICAgPC9ncm91cD5cbiAgKVxufVxuXG51c2VHTFRGLnByZWxvYWQoJy9Eb2xwaGluMi5nbGInKVxuIiwiLypcbkF1dG8tZ2VuZXJhdGVkIGJ5OiBodHRwczovL2dpdGh1Yi5jb20vcG1uZHJzL2dsdGZqc3hcbiovXG5cbmltcG9ydCBSZWFjdCwgeyB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VHTFRGIH0gZnJvbSAnQHJlYWN0LXRocmVlL2RyZWknXG5pbXBvcnQgeyB1c2VGcmFtZSB9IGZyb20gJ0ByZWFjdC10aHJlZS9maWJlcidcbmltcG9ydCAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNb2RlbChwcm9wcykge1xuICBjb25zdCBncm91cCA9IHVzZVJlZigpXG4gIGNvbnN0IHsgbm9kZXMsIG1hdGVyaWFscyB9ID0gdXNlR0xURignL1NwaW5uZXIuZ2xiJylcbiAgdXNlRnJhbWUoKCkgPT4ge1xuICAgIGlmIChncm91cC5jdXJyZW50KVxuICAgICAgZ3JvdXAuY3VycmVudC5yb3RhdGlvbi56ICs9ICgoKDIgKiBNYXRoLlBJKSAvIDE4MDApICogMikgLyAxLjc1XG4gIH0pXG4gIGNvbnN0IFtjb25jcmV0ZV0gPSB1c2VTdGF0ZShcbiAgICBuZXcgVEhSRUUuTWVzaFN0YW5kYXJkTWF0ZXJpYWwoe1xuICAgICAgY29sb3I6ICcjNTc1NzU3JyxcbiAgICAgIGxpZ2h0TWFwSW50ZW5zaXR5OiAwLjEsXG4gICAgfSlcbiAgKVxuICByZXR1cm4gKFxuICAgIDxncm91cCByZWY9e2dyb3VwfSB7Li4ucHJvcHN9IGRpc3Bvc2U9e251bGx9PlxuICAgICAgPGdyb3VwPlxuICAgICAgICA8bWVzaFxuICAgICAgICAgIHNjYWxlPXtbMC4wMDAwOCwgMC4wMDAwOCwgMC4wMDAwOF19XG4gICAgICAgICAgcG9zaXRpb249e1swLCAwLCAtMC40XX1cbiAgICAgICAgICByb3RhdGlvbj17W01hdGguUEkgLyAyLCAtTWF0aC5QSSAvIDIsIC1NYXRoLlBJIC8gMl19XG4gICAgICAgICAgbmFtZT0nQXNzZXQzRExvYWRlcnNjZW5lUm9vdCdcbiAgICAgICAgICBnZW9tZXRyeT17bm9kZXMuQXNzZXQzRExvYWRlcnNjZW5lUm9vdC5nZW9tZXRyeX1cbiAgICAgICAgICBtYXRlcmlhbD17Y29uY3JldGV9XG4gICAgICAgICAgcmVjZWl2ZVNoYWRvdz17ZmFsc2V9XG4gICAgICAgICAgY2FzdFNoYWRvdz17ZmFsc2V9XG4gICAgICAgIC8+XG4gICAgICA8L2dyb3VwPlxuICAgIDwvZ3JvdXA+XG4gIClcbn1cblxudXNlR0xURi5wcmVsb2FkKCcvU3Bpbm5lci5nbGInKVxuIiwiaW1wb3J0IHsgU3VzcGVuc2UsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQge1xuICBFbnZpcm9ubWVudCxcbiAgTWVzaERpc3RvcnRNYXRlcmlhbCxcbiAgU3BoZXJlLFxuICB1c2VUZXh0dXJlLFxuICBQbGFuZSxcbn0gZnJvbSAnQHJlYWN0LXRocmVlL2RyZWknXG5pbXBvcnQgeyBhLCB1c2VTcHJpbmcgfSBmcm9tICdAcmVhY3Qtc3ByaW5nL3RocmVlJ1xuaW1wb3J0IHVzZVN0b3JlIGZyb20gJ0AvaGVscGVycy9zdG9yZSdcbmltcG9ydCBUdXJiaW5lIGZyb20gJy4vVHVyYmluZSdcbmltcG9ydCBCdW95IGZyb20gJy4vQnVveSdcbmltcG9ydCAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJ1xuXG5pbXBvcnQgRG9scGhpbiBmcm9tICcuL0RvbHBoaW4yJ1xuaW1wb3J0IHsgQTExeSwgdXNlQTExeSwgdXNlVXNlclByZWZlcmVuY2VzIH0gZnJvbSAnQHJlYWN0LXRocmVlL2ExMXknXG5cbmNvbnN0IE0gPSBhKE1lc2hEaXN0b3J0TWF0ZXJpYWwpXG4vKiBjb25zdCBUZXJyYWluID0gKCkgPT4ge1xuICBjb25zdCBlbGV2YXRpb24gPSB1c2VUZXh0dXJlKCcvdGVycmFpbi5wbmcnKVxuICBjb25zdCBub3JtYWwgPSB1c2VUZXh0dXJlKCcvdGVycmFpbnNwZWMucG5nJylcbiAgY29uc3QgY29sb3IgPSB1c2VUZXh0dXJlKCcvb2NlYW5mbG9vci5wbmcnKVxuICByZXR1cm4gKFxuICAgIDxQbGFuZVxuICAgICAgcm90YXRpb249e1stTWF0aC5QSSAvIDIsIDAsIE1hdGguUEkgLyAyXX1cbiAgICAgIHBvc2l0aW9uPXtbLTEwMCwgLTEwLCAwXX1cbiAgICAgIGFyZ3M9e1syNTYsIDI1NiwgNTEyLCA1MTJdfVxuICAgID5cbiAgICAgIDxtZXNoU3RhbmRhcmRNYXRlcmlhbFxuICAgICAgICBhdHRhY2g9J21hdGVyaWFsJ1xuICAgICAgICBjb2xvcj0nd2hpdGUnXG4gICAgICAgIGRpc3BsYWNlbWVudE1hcD17ZWxldmF0aW9ufVxuICAgICAgICBub3JtYWxNYXA9e25vcm1hbH1cbiAgICAgICAgbWFwPXtjb2xvcn1cbiAgICAgIC8+XG4gICAgPC9QbGFuZT5cbiAgKVxufSAqL1xuY29uc3QgRGFya1NwaGVyZSA9ICgpID0+IHtcbiAgY29uc3QgeyBhMTF5UHJlZmVyc1N0YXRlIH0gPSB1c2VVc2VyUHJlZmVyZW5jZXMoKVxuICBjb25zdCBhMTF5ID0gdXNlQTExeSgpXG4gIGNvbnN0IHsgY29sb3IgfSA9IHVzZVNwcmluZyh7XG4gICAgY29sb3I6IGExMXkuZm9jdXMgfHwgYTExeS5ob3ZlciA/ICcjMjcyNzI3JyA6ICdibGFjaycsXG4gIH0pXG5cbiAgcmV0dXJuIChcbiAgICA8U3BoZXJlIGFyZ3M9e1sxLCAzMiwgMzJdfT5cbiAgICAgIDxNXG4gICAgICAgIGRpc3RvcnQ9e2ExMXlQcmVmZXJzU3RhdGUucHJlZmVyc1JlZHVjZWRNb3Rpb24gPyAwIDogMC40fVxuICAgICAgICBjb2xvcj17Y29sb3J9XG4gICAgICAvPlxuICAgIDwvU3BoZXJlPlxuICApXG59XG5cbmNvbnN0IFR1cmJpbmVTY2VuZSA9ICgpID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlU3RvcmUoKHMpID0+IHMucm91dGVyKVxuICBjb25zdCBbd2lyZU1hdF0gPSB1c2VTdGF0ZShcbiAgICBuZXcgVEhSRUUuTWVzaFN0YW5kYXJkTWF0ZXJpYWwoeyBjb2xvcjogJyMwODEwMTgnLCBtZXRhbG5lc3M6IDAuNSB9KVxuICApXG5cbiAgcmV0dXJuIChcbiAgICA8U3VzcGVuc2UgZmFsbGJhY2s9e251bGx9PlxuICAgICAgey8qICA8QTExeVxuICAgICAgICByb2xlPSdsaW5rJ1xuICAgICAgICBocmVmPScvYm94J1xuICAgICAgICBhY3Rpb25DYWxsPXsoKSA9PiB7XG4gICAgICAgICAgcm91dGVyLnB1c2goYC9ib3hgKVxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8VHVyYmluZSAvPlxuICAgICAgPC9BMTF5PiAqL31cblxuICAgICAgey8qIDxEb2xwaGluIHBvcz17WzAsIDgsIDVdfSAvPiAqL31cblxuICAgICAgPFR1cmJpbmUgLz5cbiAgICAgIDxtZXNoIHBvc2l0aW9uPXtbMCwgNSwgMF19PlxuICAgICAgICA8VHVyYmluZSAvPlxuICAgICAgPC9tZXNoPlxuXG4gICAgICA8QnVveSBoZWlnaHQ9ezV9IC8+XG4gICAgICA8bWVzaCBtYXRlcmlhbD17d2lyZU1hdH0+XG4gICAgICAgIDxjeWxpbmRlckJ1ZmZlckdlb21ldHJ5IGF0dGFjaD0nZ2VvbWV0cnknIGFyZ3M9e1swLjAzLCAwLjAzLCA1MF19IC8+XG4gICAgICA8L21lc2g+XG4gICAgICA8RW52aXJvbm1lbnQgcHJlc2V0PXsnc3Vuc2V0J30gLz5cbiAgICA8L1N1c3BlbnNlPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFR1cmJpbmVTY2VuZVxuIl0sInNvdXJjZVJvb3QiOiIifQ==