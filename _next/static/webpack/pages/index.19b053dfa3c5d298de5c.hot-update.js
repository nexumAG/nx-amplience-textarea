webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Textarea.tsx":
/*!*********************************!*\
  !*** ./components/Textarea.tsx ***!
  \*********************************/
/*! exports provided: ExtensionContext, Textarea */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ExtensionContext\", function() { return ExtensionContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Textarea\", function() { return Textarea; });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n\n\n\nvar _s = $RefreshSig$();\n\n\n\nvar ExtensionContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__[\"createContext\"])(null);\nfunction Textarea(_ref) {\n  _s();\n\n  var _sdk$field$schema, _sdk$field$schema2;\n\n  var sdk = _ref.sdk,\n      initialData = _ref.initialData,\n      required = _ref.required;\n  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(function () {\n    sdk.field.setValue(initialData);\n  }, [sdk]);\n\n  var handleChange = function handleChange(ev) {\n    sdk.field.setValue(ev.target.value);\n  };\n\n  var locales = sdk.locales,\n      params = sdk.params;\n  var installation = params.installation;\n  var availableLocales = locales.available;\n  console.log(availableLocales);\n  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxs\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"FormControl\"], {\n    fullWidth: true,\n    children: [locales.map(function (_ref2) {\n      var locale = _ref2.locale;\n      return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(Input, {\n        label: locale,\n        value: getTranslated(locale),\n        multiline: true,\n        onChange: function onChange(e) {\n          return updateTranslated(locale, e.target.value, locked);\n        },\n        InputProps: {\n          endAdornment: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(Lock, {\n            locked: locked,\n            onClick: setLockedLocale(locale)\n          })\n        }\n      }, locale);\n    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"TextField\"], {\n      rows: 3,\n      defaultValue: initialData,\n      id: \"textarea-label-id\",\n      onChange: handleChange,\n      multiline: true,\n      label: (_sdk$field$schema = sdk.field.schema) === null || _sdk$field$schema === void 0 ? void 0 : _sdk$field$schema.title,\n      required: required\n    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"FormHelperText\"], {\n      children: (_sdk$field$schema2 = sdk.field.schema) === null || _sdk$field$schema2 === void 0 ? void 0 : _sdk$field$schema2.description\n    })]\n  });\n}\n\n_s(Textarea, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n\n_c = Textarea;\n\nvar _c;\n\n$RefreshReg$(_c, \"Textarea\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9UZXh0YXJlYS50c3g/YjY3MyJdLCJuYW1lcyI6WyJFeHRlbnNpb25Db250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIlRleHRhcmVhIiwic2RrIiwiaW5pdGlhbERhdGEiLCJyZXF1aXJlZCIsIlJlYWN0IiwidXNlRWZmZWN0IiwiZmllbGQiLCJzZXRWYWx1ZSIsImhhbmRsZUNoYW5nZSIsImV2IiwidGFyZ2V0IiwidmFsdWUiLCJsb2NhbGVzIiwicGFyYW1zIiwiaW5zdGFsbGF0aW9uIiwiYXZhaWxhYmxlTG9jYWxlcyIsImF2YWlsYWJsZSIsImNvbnNvbGUiLCJsb2ciLCJtYXAiLCJsb2NhbGUiLCJnZXRUcmFuc2xhdGVkIiwiZSIsInVwZGF0ZVRyYW5zbGF0ZWQiLCJsb2NrZWQiLCJlbmRBZG9ybm1lbnQiLCJzZXRMb2NrZWRMb2NhbGUiLCJzY2hlbWEiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQVFPLElBQU1BLGdCQUFnQixnQkFBR0MsMkRBQWEsQ0FBQyxJQUFELENBQXRDO0FBRUEsU0FBU0MsUUFBVCxPQVFKO0FBQUE7O0FBQUE7O0FBQUEsTUFQREMsR0FPQyxRQVBEQSxHQU9DO0FBQUEsTUFOREMsV0FNQyxRQU5EQSxXQU1DO0FBQUEsTUFMREMsUUFLQyxRQUxEQSxRQUtDO0FBQ0RDLDhDQUFLLENBQUNDLFNBQU4sQ0FBZ0IsWUFBTTtBQUNwQkosT0FBRyxDQUFDSyxLQUFKLENBQVVDLFFBQVYsQ0FBbUJMLFdBQW5CO0FBQ0QsR0FGRCxFQUVHLENBQUNELEdBQUQsQ0FGSDs7QUFJQSxNQUFNTyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxFQUFELEVBQStDO0FBQ2xFUixPQUFHLENBQUNLLEtBQUosQ0FBVUMsUUFBVixDQUFtQkUsRUFBRSxDQUFDQyxNQUFILENBQVVDLEtBQTdCO0FBQ0QsR0FGRDs7QUFMQyxNQVNPQyxPQVRQLEdBUzJCWCxHQVQzQixDQVNPVyxPQVRQO0FBQUEsTUFTZ0JDLE1BVGhCLEdBUzJCWixHQVQzQixDQVNnQlksTUFUaEI7QUFBQSxNQVVPQyxZQVZQLEdBVXdCRCxNQVZ4QixDQVVPQyxZQVZQO0FBQUEsTUFXa0JDLGdCQVhsQixHQVd1Q0gsT0FYdkMsQ0FXT0ksU0FYUDtBQWFEQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUgsZ0JBQVo7QUFFQSxzQkFDRSwrREFBQyw2REFBRDtBQUFhLGFBQVMsTUFBdEI7QUFBQSxlQUNHSCxPQUFPLENBQUNPLEdBQVIsQ0FBWSxpQkFBZ0I7QUFBQSxVQUFiQyxNQUFhLFNBQWJBLE1BQWE7QUFFL0IsMEJBQ0UsOERBQUMsS0FBRDtBQUVFLGFBQUssRUFBRUEsTUFGVDtBQUdFLGFBQUssRUFBRUMsYUFBYSxDQUFDRCxNQUFELENBSHRCO0FBSUUsaUJBQVMsRUFBRSxJQUpiO0FBS0UsZ0JBQVEsRUFBRSxrQkFBQ0UsQ0FBRDtBQUFBLGlCQUFPQyxnQkFBZ0IsQ0FBQ0gsTUFBRCxFQUFTRSxDQUFDLENBQUNaLE1BQUYsQ0FBU0MsS0FBbEIsRUFBeUJhLE1BQXpCLENBQXZCO0FBQUEsU0FMWjtBQU1FLGtCQUFVLEVBQUU7QUFDVkMsc0JBQVksZUFDViw4REFBQyxJQUFEO0FBQU0sa0JBQU0sRUFBRUQsTUFBZDtBQUFzQixtQkFBTyxFQUFFRSxlQUFlLENBQUNOLE1BQUQ7QUFBOUM7QUFGUTtBQU5kLFNBQ09BLE1BRFAsQ0FERjtBQWNELEtBaEJJLENBREgsZUFrQkUsOERBQUMsMkRBQUQ7QUFDRSxVQUFJLEVBQUUsQ0FEUjtBQUVFLGtCQUFZLEVBQUVsQixXQUZoQjtBQUdFLFFBQUUsRUFBQyxtQkFITDtBQUlFLGNBQVEsRUFBRU0sWUFKWjtBQUtFLGVBQVMsTUFMWDtBQU1FLFdBQUssdUJBQUVQLEdBQUcsQ0FBQ0ssS0FBSixDQUFVcUIsTUFBWixzREFBRSxrQkFBa0JDLEtBTjNCO0FBT0UsY0FBUSxFQUFFekI7QUFQWixNQWxCRixlQTJCRSw4REFBQyxnRUFBRDtBQUFBLHNDQUFpQkYsR0FBRyxDQUFDSyxLQUFKLENBQVVxQixNQUEzQix1REFBaUIsbUJBQWtCRTtBQUFuQyxNQTNCRjtBQUFBLElBREY7QUFnQ0Q7O0dBdkRlN0IsUTs7S0FBQUEsUSIsImZpbGUiOiIuL2NvbXBvbmVudHMvVGV4dGFyZWEudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZUNvbnRleHQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7XG4gIEZvcm1Db250cm9sLFxuICBGb3JtSGVscGVyVGV4dCxcbiAgSW5wdXRMYWJlbCxcbiAgVGV4dEZpZWxkLFxufSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcbmltcG9ydCB7IHVzZUxvY2FsZXMgfSBmcm9tICcuLi9ob29rcy91c2VMb2NhbGVzJ1xuXG5leHBvcnQgY29uc3QgRXh0ZW5zaW9uQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQobnVsbClcblxuZXhwb3J0IGZ1bmN0aW9uIFRleHRhcmVhKHtcbiAgc2RrLFxuICBpbml0aWFsRGF0YSxcbiAgcmVxdWlyZWQsXG59OiB7XG4gIHNkazogYW55XG4gIGluaXRpYWxEYXRhOiBhbnlcbiAgcmVxdWlyZWQ6IGJvb2xlYW5cbn0pIHtcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZGsuZmllbGQuc2V0VmFsdWUoaW5pdGlhbERhdGEpXG4gIH0sIFtzZGtdKVxuXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChldjogUmVhY3QuQ2hhbmdlRXZlbnQ8eyB2YWx1ZTogdW5rbm93biB9PikgPT4ge1xuICAgIHNkay5maWVsZC5zZXRWYWx1ZShldi50YXJnZXQudmFsdWUpXG4gIH1cblxuICBjb25zdCB7IGxvY2FsZXMsIHBhcmFtcyB9ID0gc2RrXG4gIGNvbnN0IHsgaW5zdGFsbGF0aW9uIH0gPSBwYXJhbXNcbiAgY29uc3QgeyBhdmFpbGFibGU6IGF2YWlsYWJsZUxvY2FsZXMgfSA9IGxvY2FsZXNcblxuICBjb25zb2xlLmxvZyhhdmFpbGFibGVMb2NhbGVzKVxuXG4gIHJldHVybiAoXG4gICAgPEZvcm1Db250cm9sIGZ1bGxXaWR0aD5cbiAgICAgIHtsb2NhbGVzLm1hcCgoeyBsb2NhbGUgfSkgPT4ge1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxJbnB1dFxuICAgICAgICBrZXk9e2xvY2FsZX1cbiAgICAgICAgbGFiZWw9e2xvY2FsZX1cbiAgICAgICAgdmFsdWU9e2dldFRyYW5zbGF0ZWQobG9jYWxlKX1cbiAgICAgICAgbXVsdGlsaW5lPXt0cnVlfVxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IHVwZGF0ZVRyYW5zbGF0ZWQobG9jYWxlLCBlLnRhcmdldC52YWx1ZSwgbG9ja2VkKX1cbiAgICAgICAgSW5wdXRQcm9wcz17e1xuICAgICAgICAgIGVuZEFkb3JubWVudDogKFxuICAgICAgICAgICAgPExvY2sgbG9ja2VkPXtsb2NrZWR9IG9uQ2xpY2s9e3NldExvY2tlZExvY2FsZShsb2NhbGUpfSAvPlxuICAgICAgICAgICksXG4gICAgICAgIH19XG4gICAgICAvPlxuICAgIClcbiAgfSl9XG4gICAgICA8VGV4dEZpZWxkXG4gICAgICAgIHJvd3M9ezN9XG4gICAgICAgIGRlZmF1bHRWYWx1ZT17aW5pdGlhbERhdGF9XG4gICAgICAgIGlkPVwidGV4dGFyZWEtbGFiZWwtaWRcIlxuICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICBtdWx0aWxpbmVcbiAgICAgICAgbGFiZWw9e3Nkay5maWVsZC5zY2hlbWE/LnRpdGxlfVxuICAgICAgICByZXF1aXJlZD17cmVxdWlyZWR9XG4gICAgICAvPlxuICAgICAgPEZvcm1IZWxwZXJUZXh0PntzZGsuZmllbGQuc2NoZW1hPy5kZXNjcmlwdGlvbn08L0Zvcm1IZWxwZXJUZXh0PlxuICAgIDwvRm9ybUNvbnRyb2w+XG4gIClcbiAgXG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Textarea.tsx\n");

/***/ })

})