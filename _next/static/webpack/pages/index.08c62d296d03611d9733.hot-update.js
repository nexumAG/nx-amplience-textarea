webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Textarea.tsx":
/*!*********************************!*\
  !*** ./components/Textarea.tsx ***!
  \*********************************/
/*! exports provided: ExtensionContext, Textarea */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ExtensionContext\", function() { return ExtensionContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Textarea\", function() { return Textarea; });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var _hooks_useTranslate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/useTranslate */ \"./hooks/useTranslate.ts\");\n\n\n\nvar _s = $RefreshSig$();\n\n\n\n\nvar ExtensionContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__[\"createContext\"])(null);\nfunction Textarea(_ref) {\n  _s();\n\n  var sdk = _ref.sdk,\n      initialData = _ref.initialData,\n      required = _ref.required;\n  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(function () {\n    sdk.field.setValue(initialData);\n  }, [sdk]);\n\n  var _useTranslation = Object(_hooks_useTranslate__WEBPACK_IMPORTED_MODULE_3__[\"useTranslation\"])(initialData),\n      updateTraslated = _useTranslation.actions.updateTraslated;\n\n  var handleChange = function handleChange(ev) {\n    updateTraslated(locale, ev.target.value);\n  };\n\n  var locales = sdk.locales;\n  console.log(locales);\n  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"FormControl\"], {\n    fullWidth: true,\n    children: locales.available.map(function (_ref2) {\n      var _sdk$field$schema, _sdk$field$schema2;\n\n      var locale = _ref2.locale;\n      return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxs\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Box\"], {\n        width: \"100%\",\n        mb: \"1rem\",\n        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"TextField\"], {\n          onChange: handleChange,\n          rows: 3,\n          defaultValue: initialData,\n          id: \"textarea-label-id\",\n          multiline: true,\n          label: \"\".concat((_sdk$field$schema = sdk.field.schema) === null || _sdk$field$schema === void 0 ? void 0 : _sdk$field$schema.title, \" \").concat(locale),\n          required: required\n        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"FormHelperText\"], {\n          children: \"\".concat((_sdk$field$schema2 = sdk.field.schema) === null || _sdk$field$schema2 === void 0 ? void 0 : _sdk$field$schema2.description, \" \").concat(locale)\n        })]\n      }, locale);\n    })\n  });\n}\n\n_s(Textarea, \"AiyFwHaJi7BqxWnxBXIbLvPm528=\", false, function () {\n  return [_hooks_useTranslate__WEBPACK_IMPORTED_MODULE_3__[\"useTranslation\"]];\n});\n\n_c = Textarea;\n\nvar _c;\n\n$RefreshReg$(_c, \"Textarea\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9UZXh0YXJlYS50c3g/YjY3MyJdLCJuYW1lcyI6WyJFeHRlbnNpb25Db250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIlRleHRhcmVhIiwic2RrIiwiaW5pdGlhbERhdGEiLCJyZXF1aXJlZCIsIlJlYWN0IiwidXNlRWZmZWN0IiwiZmllbGQiLCJzZXRWYWx1ZSIsInVzZVRyYW5zbGF0aW9uIiwidXBkYXRlVHJhc2xhdGVkIiwiYWN0aW9ucyIsImhhbmRsZUNoYW5nZSIsImV2IiwibG9jYWxlIiwidGFyZ2V0IiwidmFsdWUiLCJsb2NhbGVzIiwiY29uc29sZSIsImxvZyIsImF2YWlsYWJsZSIsIm1hcCIsInNjaGVtYSIsInRpdGxlIiwiZGVzY3JpcHRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRU8sSUFBTUEsZ0JBQWdCLGdCQUFHQywyREFBYSxDQUFDLElBQUQsQ0FBdEM7QUFFQSxTQUFTQyxRQUFULE9BUUo7QUFBQTs7QUFBQSxNQVBEQyxHQU9DLFFBUERBLEdBT0M7QUFBQSxNQU5EQyxXQU1DLFFBTkRBLFdBTUM7QUFBQSxNQUxEQyxRQUtDLFFBTERBLFFBS0M7QUFDREMsOENBQUssQ0FBQ0MsU0FBTixDQUFnQixZQUFNO0FBQ3BCSixPQUFHLENBQUNLLEtBQUosQ0FBVUMsUUFBVixDQUFtQkwsV0FBbkI7QUFDRCxHQUZELEVBRUcsQ0FBQ0QsR0FBRCxDQUZIOztBQURDLHdCQVNHTywwRUFBYyxDQUFDTixXQUFELENBVGpCO0FBQUEsTUFRWU8sZUFSWixtQkFRQ0MsT0FSRCxDQVFZRCxlQVJaOztBQVVELE1BQU1FLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLEVBQUQsRUFBK0M7QUFDbEVILG1CQUFlLENBQUNJLE1BQUQsRUFBU0QsRUFBRSxDQUFDRSxNQUFILENBQVVDLEtBQW5CLENBQWY7QUFDRCxHQUZEOztBQVZDLE1BY09DLE9BZFAsR0FjbUJmLEdBZG5CLENBY09lLE9BZFA7QUFnQkRDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZRixPQUFaO0FBRUEsc0JBQ0UsOERBQUMsNkRBQUQ7QUFBYSxhQUFTLE1BQXRCO0FBQUEsY0FDR0EsT0FBTyxDQUFDRyxTQUFSLENBQWtCQyxHQUFsQixDQUFzQixpQkFBcUI7QUFBQTs7QUFBQSxVQUFsQlAsTUFBa0IsU0FBbEJBLE1BQWtCO0FBQzFDLDBCQUNFLCtEQUFDLHFEQUFEO0FBQUssYUFBSyxFQUFDLE1BQVg7QUFBa0IsVUFBRSxFQUFDLE1BQXJCO0FBQUEsZ0NBQ0UsOERBQUMsMkRBQUQ7QUFDRSxrQkFBUSxFQUFFRixZQURaO0FBRUUsY0FBSSxFQUFFLENBRlI7QUFHRSxzQkFBWSxFQUFFVCxXQUhoQjtBQUlFLFlBQUUsRUFBQyxtQkFKTDtBQUtFLG1CQUFTLE1BTFg7QUFNRSxlQUFLLGlDQUFLRCxHQUFHLENBQUNLLEtBQUosQ0FBVWUsTUFBZixzREFBSyxrQkFBa0JDLEtBQXZCLGNBQWdDVCxNQUFoQyxDQU5QO0FBT0Usa0JBQVEsRUFBRVY7QUFQWixVQURGLGVBVUUsOERBQUMsZ0VBQUQ7QUFBQSxvREFDTUYsR0FBRyxDQUFDSyxLQUFKLENBQVVlLE1BRGhCLHVEQUNNLG1CQUFrQkUsV0FEeEIsY0FDdUNWLE1BRHZDO0FBQUEsVUFWRjtBQUFBLFNBQWlDQSxNQUFqQyxDQURGO0FBZ0JELEtBakJBO0FBREgsSUFERjtBQXNCRDs7R0FoRGViLFE7VUFpQlZRLGtFOzs7S0FqQlVSLFEiLCJmaWxlIjoiLi9jb21wb25lbnRzL1RleHRhcmVhLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBCb3gsIEZvcm1Db250cm9sLCBGb3JtSGVscGVyVGV4dCwgVGV4dEZpZWxkIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJy4uL2hvb2tzL3VzZVRyYW5zbGF0ZSdcblxuZXhwb3J0IGNvbnN0IEV4dGVuc2lvbkNvbnRleHQgPSBjcmVhdGVDb250ZXh0KG51bGwpXG5cbmV4cG9ydCBmdW5jdGlvbiBUZXh0YXJlYSh7XG4gIHNkayxcbiAgaW5pdGlhbERhdGEsXG4gIHJlcXVpcmVkLFxufToge1xuICBzZGs6IGFueVxuICBpbml0aWFsRGF0YTogYW55XG4gIHJlcXVpcmVkOiBib29sZWFuXG59KSB7XG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2RrLmZpZWxkLnNldFZhbHVlKGluaXRpYWxEYXRhKVxuICB9LCBbc2RrXSlcblxuICBcblxuICBjb25zdCB7XG4gICAgYWN0aW9uczogeyB1cGRhdGVUcmFzbGF0ZWQgfSxcbiAgfSA9IHVzZVRyYW5zbGF0aW9uKGluaXRpYWxEYXRhKVxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZXY6IFJlYWN0LkNoYW5nZUV2ZW50PHsgdmFsdWU6IHVua25vd24gfT4pID0+IHtcbiAgICB1cGRhdGVUcmFzbGF0ZWQobG9jYWxlLCBldi50YXJnZXQudmFsdWUpXG4gIH1cblxuICBjb25zdCB7IGxvY2FsZXMgfSA9IHNka1xuXG4gIGNvbnNvbGUubG9nKGxvY2FsZXMpXG5cbiAgcmV0dXJuIChcbiAgICA8Rm9ybUNvbnRyb2wgZnVsbFdpZHRoPlxuICAgICAge2xvY2FsZXMuYXZhaWxhYmxlLm1hcCgoeyBsb2NhbGUgfTogYW55KSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPEJveCB3aWR0aD1cIjEwMCVcIiBtYj1cIjFyZW1cIiBrZXk9e2xvY2FsZX0+XG4gICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgIHJvd3M9ezN9XG4gICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17aW5pdGlhbERhdGF9XG4gICAgICAgICAgICAgIGlkPVwidGV4dGFyZWEtbGFiZWwtaWRcIlxuICAgICAgICAgICAgICBtdWx0aWxpbmVcbiAgICAgICAgICAgICAgbGFiZWw9e2Ake3Nkay5maWVsZC5zY2hlbWE/LnRpdGxlfSAke2xvY2FsZX1gfVxuICAgICAgICAgICAgICByZXF1aXJlZD17cmVxdWlyZWR9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPEZvcm1IZWxwZXJUZXh0PlxuICAgICAgICAgICAgICB7YCR7c2RrLmZpZWxkLnNjaGVtYT8uZGVzY3JpcHRpb259ICR7bG9jYWxlfWB9XG4gICAgICAgICAgICA8L0Zvcm1IZWxwZXJUZXh0PlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICApXG4gICAgICB9KX1cbiAgICA8L0Zvcm1Db250cm9sPlxuICApXG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Textarea.tsx\n");

/***/ })

})