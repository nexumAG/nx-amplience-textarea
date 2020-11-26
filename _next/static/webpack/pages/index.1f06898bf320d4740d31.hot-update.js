webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Textarea.tsx":
/*!*********************************!*\
  !*** ./components/Textarea.tsx ***!
  \*********************************/
/*! exports provided: ExtensionContext, Textarea */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ExtensionContext\", function() { return ExtensionContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Textarea\", function() { return Textarea; });\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n\n\n\n\nvar _s = $RefreshSig$(),\n    _s2 = $RefreshSig$();\n\n\n\nvar ExtensionContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_2__[\"createContext\"])(null);\n\nfunction updateTranslated(locale, value) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(defaultValues(availableLocales, initalValue)),\n      translated = _useState[0],\n      setTranslated = _useState[1];\n\n  var updated = Object.assign({}, translated, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, locale, value));\n  setTranslated(updated);\n}\n\n_s(updateTranslated, \"Zu7raVhUU+j9EAadx5JYIvJQV5o=\");\n\nfunction Textarea(_ref) {\n  _s2();\n\n  var _sdk$field$schema2;\n\n  var sdk = _ref.sdk,\n      initialData = _ref.initialData,\n      required = _ref.required;\n  react__WEBPACK_IMPORTED_MODULE_2___default.a.useEffect(function () {\n    sdk.field.setValue(initialData);\n  }, [sdk]);\n\n  var handleChange = function handleChange(ev) {\n    sdk.field.setValue(ev.target.value);\n  };\n\n  var locales = sdk.locales,\n      params = sdk.params;\n  var installation = params.installation;\n  var availableLocales = locales.available;\n  console.log(availableLocales);\n  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxs\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"FormControl\"], {\n    fullWidth: true,\n    children: [locales.map(function (_ref2) {\n      var _sdk$field$schema, _jsx2;\n\n      var locale = _ref2.locale;\n      return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"TextField\"], (_jsx2 = {\n        label: locale,\n        onChange: function onChange(e) {\n          return updateTranslated(locale, e.target.value);\n        },\n        rows: 3,\n        defaultValue: initialData,\n        id: \"textarea-label-id\"\n      }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_jsx2, \"onChange\", handleChange), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_jsx2, \"multiline\", true), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_jsx2, \"label\", (_sdk$field$schema = sdk.field.schema) === null || _sdk$field$schema === void 0 ? void 0 : _sdk$field$schema.title), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_jsx2, \"required\", required), _jsx2), locale);\n    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"FormHelperText\"], {\n      children: (_sdk$field$schema2 = sdk.field.schema) === null || _sdk$field$schema2 === void 0 ? void 0 : _sdk$field$schema2.description\n    })]\n  });\n}\n\n_s2(Textarea, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n\n_c = Textarea;\n\nvar _c;\n\n$RefreshReg$(_c, \"Textarea\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9UZXh0YXJlYS50c3g/YjY3MyJdLCJuYW1lcyI6WyJFeHRlbnNpb25Db250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVwZGF0ZVRyYW5zbGF0ZWQiLCJsb2NhbGUiLCJ2YWx1ZSIsInVzZVN0YXRlIiwiZGVmYXVsdFZhbHVlcyIsImF2YWlsYWJsZUxvY2FsZXMiLCJpbml0YWxWYWx1ZSIsInRyYW5zbGF0ZWQiLCJzZXRUcmFuc2xhdGVkIiwidXBkYXRlZCIsIk9iamVjdCIsImFzc2lnbiIsIlRleHRhcmVhIiwic2RrIiwiaW5pdGlhbERhdGEiLCJyZXF1aXJlZCIsIlJlYWN0IiwidXNlRWZmZWN0IiwiZmllbGQiLCJzZXRWYWx1ZSIsImhhbmRsZUNoYW5nZSIsImV2IiwidGFyZ2V0IiwibG9jYWxlcyIsInBhcmFtcyIsImluc3RhbGxhdGlvbiIsImF2YWlsYWJsZSIsImNvbnNvbGUiLCJsb2ciLCJtYXAiLCJlIiwic2NoZW1hIiwidGl0bGUiLCJkZXNjcmlwdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFRTyxJQUFNQSxnQkFBZ0IsZ0JBQUdDLDJEQUFhLENBQUMsSUFBRCxDQUF0Qzs7QUFFUCxTQUFTQyxnQkFBVCxDQUEwQkMsTUFBMUIsRUFBa0NDLEtBQWxDLEVBQXlDO0FBQUE7O0FBQUEsa0JBQ0hDLHNEQUFRLENBQzFDQyxhQUFhLENBQUNDLGdCQUFELEVBQW1CQyxXQUFuQixDQUQ2QixDQURMO0FBQUEsTUFDaENDLFVBRGdDO0FBQUEsTUFDcEJDLGFBRG9COztBQUl2QyxNQUFNQyxPQUFPLEdBQUdDLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjLEVBQWQsRUFBa0JKLFVBQWxCLGdHQUFpQ04sTUFBakMsRUFBMENDLEtBQTFDLEVBQWhCO0FBRUFNLGVBQWEsQ0FBQ0MsT0FBRCxDQUFiO0FBQ0Q7O0dBUFFULGdCOztBQVNGLFNBQVNZLFFBQVQsT0FRSjtBQUFBOztBQUFBOztBQUFBLE1BUERDLEdBT0MsUUFQREEsR0FPQztBQUFBLE1BTkRDLFdBTUMsUUFOREEsV0FNQztBQUFBLE1BTERDLFFBS0MsUUFMREEsUUFLQztBQUNEQyw4Q0FBSyxDQUFDQyxTQUFOLENBQWdCLFlBQU07QUFDcEJKLE9BQUcsQ0FBQ0ssS0FBSixDQUFVQyxRQUFWLENBQW1CTCxXQUFuQjtBQUNELEdBRkQsRUFFRyxDQUFDRCxHQUFELENBRkg7O0FBSUEsTUFBTU8sWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsRUFBRCxFQUErQztBQUNsRVIsT0FBRyxDQUFDSyxLQUFKLENBQVVDLFFBQVYsQ0FBbUJFLEVBQUUsQ0FBQ0MsTUFBSCxDQUFVcEIsS0FBN0I7QUFDRCxHQUZEOztBQUxDLE1BU09xQixPQVRQLEdBUzJCVixHQVQzQixDQVNPVSxPQVRQO0FBQUEsTUFTZ0JDLE1BVGhCLEdBUzJCWCxHQVQzQixDQVNnQlcsTUFUaEI7QUFBQSxNQVVPQyxZQVZQLEdBVXdCRCxNQVZ4QixDQVVPQyxZQVZQO0FBQUEsTUFXa0JwQixnQkFYbEIsR0FXdUNrQixPQVh2QyxDQVdPRyxTQVhQO0FBYURDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZdkIsZ0JBQVo7QUFFQSxzQkFDRSwrREFBQyw2REFBRDtBQUFhLGFBQVMsTUFBdEI7QUFBQSxlQUNHa0IsT0FBTyxDQUFDTSxHQUFSLENBQVksaUJBQXFCO0FBQUE7O0FBQUEsVUFBbEI1QixNQUFrQixTQUFsQkEsTUFBa0I7QUFDaEMsMEJBQ0UsOERBQUMsMkRBQUQ7QUFFRSxhQUFLLEVBQUVBLE1BRlQ7QUFHRSxnQkFBUSxFQUFFLGtCQUFDNkIsQ0FBRDtBQUFBLGlCQUFPOUIsZ0JBQWdCLENBQUNDLE1BQUQsRUFBUzZCLENBQUMsQ0FBQ1IsTUFBRixDQUFTcEIsS0FBbEIsQ0FBdkI7QUFBQSxTQUhaO0FBSUUsWUFBSSxFQUFFLENBSlI7QUFLRSxvQkFBWSxFQUFFWSxXQUxoQjtBQU1FLFVBQUUsRUFBQztBQU5MLHNIQU9ZTSxZQVBaLHVQQVNTUCxHQUFHLENBQUNLLEtBQUosQ0FBVWEsTUFUbkIsc0RBU1Msa0JBQWtCQyxLQVQzQixnSEFVWWpCLFFBVlosV0FDT2QsTUFEUCxDQURGO0FBY0QsS0FmQSxDQURILGVBaUJFLDhEQUFDLGdFQUFEO0FBQUEsc0NBQWlCWSxHQUFHLENBQUNLLEtBQUosQ0FBVWEsTUFBM0IsdURBQWlCLG1CQUFrQkU7QUFBbkMsTUFqQkY7QUFBQSxJQURGO0FBcUJEOztJQTVDZXJCLFE7O0tBQUFBLFEiLCJmaWxlIjoiLi9jb21wb25lbnRzL1RleHRhcmVhLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtcbiAgRm9ybUNvbnRyb2wsXG4gIEZvcm1IZWxwZXJUZXh0LFxuICBJbnB1dExhYmVsLFxuICBUZXh0RmllbGQsXG59IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xuaW1wb3J0IHsgdXNlTG9jYWxlcyB9IGZyb20gJy4uL2hvb2tzL3VzZUxvY2FsZXMnXG5cbmV4cG9ydCBjb25zdCBFeHRlbnNpb25Db250ZXh0ID0gY3JlYXRlQ29udGV4dChudWxsKVxuXG5mdW5jdGlvbiB1cGRhdGVUcmFuc2xhdGVkKGxvY2FsZSwgdmFsdWUpIHtcbiAgY29uc3QgW3RyYW5zbGF0ZWQsIHNldFRyYW5zbGF0ZWRdID0gdXNlU3RhdGUoXG4gICAgZGVmYXVsdFZhbHVlcyhhdmFpbGFibGVMb2NhbGVzLCBpbml0YWxWYWx1ZSksXG4gIClcbiAgY29uc3QgdXBkYXRlZCA9IE9iamVjdC5hc3NpZ24oe30sIHRyYW5zbGF0ZWQsIHsgW2xvY2FsZV06IHZhbHVlIH0pXG5cbiAgc2V0VHJhbnNsYXRlZCh1cGRhdGVkKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gVGV4dGFyZWEoe1xuICBzZGssXG4gIGluaXRpYWxEYXRhLFxuICByZXF1aXJlZCxcbn06IHtcbiAgc2RrOiBhbnlcbiAgaW5pdGlhbERhdGE6IGFueVxuICByZXF1aXJlZDogYm9vbGVhblxufSkge1xuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNkay5maWVsZC5zZXRWYWx1ZShpbml0aWFsRGF0YSlcbiAgfSwgW3Nka10pXG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGV2OiBSZWFjdC5DaGFuZ2VFdmVudDx7IHZhbHVlOiB1bmtub3duIH0+KSA9PiB7XG4gICAgc2RrLmZpZWxkLnNldFZhbHVlKGV2LnRhcmdldC52YWx1ZSlcbiAgfVxuXG4gIGNvbnN0IHsgbG9jYWxlcywgcGFyYW1zIH0gPSBzZGtcbiAgY29uc3QgeyBpbnN0YWxsYXRpb24gfSA9IHBhcmFtc1xuICBjb25zdCB7IGF2YWlsYWJsZTogYXZhaWxhYmxlTG9jYWxlcyB9ID0gbG9jYWxlc1xuXG4gIGNvbnNvbGUubG9nKGF2YWlsYWJsZUxvY2FsZXMpXG5cbiAgcmV0dXJuIChcbiAgICA8Rm9ybUNvbnRyb2wgZnVsbFdpZHRoPlxuICAgICAge2xvY2FsZXMubWFwKCh7IGxvY2FsZSB9OiBhbnkpID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICBrZXk9e2xvY2FsZX1cbiAgICAgICAgICAgIGxhYmVsPXtsb2NhbGV9XG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHVwZGF0ZVRyYW5zbGF0ZWQobG9jYWxlLCBlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICByb3dzPXszfVxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtpbml0aWFsRGF0YX1cbiAgICAgICAgICAgIGlkPVwidGV4dGFyZWEtbGFiZWwtaWRcIlxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIG11bHRpbGluZVxuICAgICAgICAgICAgbGFiZWw9e3Nkay5maWVsZC5zY2hlbWE/LnRpdGxlfVxuICAgICAgICAgICAgcmVxdWlyZWQ9e3JlcXVpcmVkfVxuICAgICAgICAgIC8+XG4gICAgICAgIClcbiAgICAgIH0pfVxuICAgICAgPEZvcm1IZWxwZXJUZXh0PntzZGsuZmllbGQuc2NoZW1hPy5kZXNjcmlwdGlvbn08L0Zvcm1IZWxwZXJUZXh0PlxuICAgIDwvRm9ybUNvbnRyb2w+XG4gIClcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Textarea.tsx\n");

/***/ })

})