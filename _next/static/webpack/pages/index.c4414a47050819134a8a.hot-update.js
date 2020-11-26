webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Textarea.tsx":
/*!*********************************!*\
  !*** ./components/Textarea.tsx ***!
  \*********************************/
/*! exports provided: ExtensionContext, Textarea */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ExtensionContext\", function() { return ExtensionContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Textarea\", function() { return Textarea; });\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n\n\n\n\nvar _s = $RefreshSig$();\n\n\n\nvar ExtensionContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_2__[\"createContext\"])(null);\nfunction Textarea(_ref) {\n  _s();\n\n  var _sdk$field$schema2;\n\n  var sdk = _ref.sdk,\n      initialData = _ref.initialData,\n      required = _ref.required;\n  react__WEBPACK_IMPORTED_MODULE_2___default.a.useEffect(function () {\n    sdk.field.setValue(initialData);\n  }, [sdk]);\n\n  var handleChange = function handleChange(ev) {\n    sdk.field.setValue(ev.target.value);\n  };\n\n  var locales = sdk.locales,\n      params = sdk.params;\n  var installation = params.installation;\n  var availableLocales = locales.available;\n  console.log(availableLocales);\n  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxs\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"FormControl\"], {\n    fullWidth: true,\n    children: [locales.map(function (_ref2) {\n      var _sdk$field$schema, _jsx2;\n\n      var locale = _ref2.locale;\n      return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"TextField\"], (_jsx2 = {\n        label: locale,\n        onChange: function onChange(e) {\n          return updateTranslated(locale, e.target.value, locked);\n        },\n        rows: 3,\n        defaultValue: initialData,\n        id: \"textarea-label-id\"\n      }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_jsx2, \"onChange\", handleChange), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_jsx2, \"multiline\", true), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_jsx2, \"label\", (_sdk$field$schema = sdk.field.schema) === null || _sdk$field$schema === void 0 ? void 0 : _sdk$field$schema.title), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_jsx2, \"required\", required), _jsx2), locale);\n    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"FormHelperText\"], {\n      children: (_sdk$field$schema2 = sdk.field.schema) === null || _sdk$field$schema2 === void 0 ? void 0 : _sdk$field$schema2.description\n    })]\n  });\n}\n\n_s(Textarea, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n\n_c = Textarea;\n\nvar _c;\n\n$RefreshReg$(_c, \"Textarea\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9UZXh0YXJlYS50c3g/YjY3MyJdLCJuYW1lcyI6WyJFeHRlbnNpb25Db250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIlRleHRhcmVhIiwic2RrIiwiaW5pdGlhbERhdGEiLCJyZXF1aXJlZCIsIlJlYWN0IiwidXNlRWZmZWN0IiwiZmllbGQiLCJzZXRWYWx1ZSIsImhhbmRsZUNoYW5nZSIsImV2IiwidGFyZ2V0IiwidmFsdWUiLCJsb2NhbGVzIiwicGFyYW1zIiwiaW5zdGFsbGF0aW9uIiwiYXZhaWxhYmxlTG9jYWxlcyIsImF2YWlsYWJsZSIsImNvbnNvbGUiLCJsb2ciLCJtYXAiLCJsb2NhbGUiLCJlIiwidXBkYXRlVHJhbnNsYXRlZCIsImxvY2tlZCIsInNjaGVtYSIsInRpdGxlIiwiZGVzY3JpcHRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFRTyxJQUFNQSxnQkFBZ0IsZ0JBQUdDLDJEQUFhLENBQUMsSUFBRCxDQUF0QztBQUVBLFNBQVNDLFFBQVQsT0FRSjtBQUFBOztBQUFBOztBQUFBLE1BUERDLEdBT0MsUUFQREEsR0FPQztBQUFBLE1BTkRDLFdBTUMsUUFOREEsV0FNQztBQUFBLE1BTERDLFFBS0MsUUFMREEsUUFLQztBQUNEQyw4Q0FBSyxDQUFDQyxTQUFOLENBQWdCLFlBQU07QUFDcEJKLE9BQUcsQ0FBQ0ssS0FBSixDQUFVQyxRQUFWLENBQW1CTCxXQUFuQjtBQUNELEdBRkQsRUFFRyxDQUFDRCxHQUFELENBRkg7O0FBSUEsTUFBTU8sWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsRUFBRCxFQUErQztBQUNsRVIsT0FBRyxDQUFDSyxLQUFKLENBQVVDLFFBQVYsQ0FBbUJFLEVBQUUsQ0FBQ0MsTUFBSCxDQUFVQyxLQUE3QjtBQUNELEdBRkQ7O0FBTEMsTUFTT0MsT0FUUCxHQVMyQlgsR0FUM0IsQ0FTT1csT0FUUDtBQUFBLE1BU2dCQyxNQVRoQixHQVMyQlosR0FUM0IsQ0FTZ0JZLE1BVGhCO0FBQUEsTUFVT0MsWUFWUCxHQVV3QkQsTUFWeEIsQ0FVT0MsWUFWUDtBQUFBLE1BV2tCQyxnQkFYbEIsR0FXdUNILE9BWHZDLENBV09JLFNBWFA7QUFhREMsU0FBTyxDQUFDQyxHQUFSLENBQVlILGdCQUFaO0FBRUEsc0JBQ0UsK0RBQUMsNkRBQUQ7QUFBYSxhQUFTLE1BQXRCO0FBQUEsZUFDR0gsT0FBTyxDQUFDTyxHQUFSLENBQVksaUJBQXFCO0FBQUE7O0FBQUEsVUFBbEJDLE1BQWtCLFNBQWxCQSxNQUFrQjtBQUNoQywwQkFDRSw4REFBQywyREFBRDtBQUVFLGFBQUssRUFBRUEsTUFGVDtBQUdFLGdCQUFRLEVBQUUsa0JBQUNDLENBQUQ7QUFBQSxpQkFBT0MsZ0JBQWdCLENBQUNGLE1BQUQsRUFBU0MsQ0FBQyxDQUFDWCxNQUFGLENBQVNDLEtBQWxCLEVBQXlCWSxNQUF6QixDQUF2QjtBQUFBLFNBSFo7QUFJRSxZQUFJLEVBQUUsQ0FKUjtBQUtFLG9CQUFZLEVBQUVyQixXQUxoQjtBQU1FLFVBQUUsRUFBQztBQU5MLHNIQU9ZTSxZQVBaLHVQQVNTUCxHQUFHLENBQUNLLEtBQUosQ0FBVWtCLE1BVG5CLHNEQVNTLGtCQUFrQkMsS0FUM0IsZ0hBVVl0QixRQVZaLFdBQ09pQixNQURQLENBREY7QUFjRCxLQWZBLENBREgsZUFpQkUsOERBQUMsZ0VBQUQ7QUFBQSxzQ0FBaUJuQixHQUFHLENBQUNLLEtBQUosQ0FBVWtCLE1BQTNCLHVEQUFpQixtQkFBa0JFO0FBQW5DLE1BakJGO0FBQUEsSUFERjtBQXFCRDs7R0E1Q2UxQixROztLQUFBQSxRIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9UZXh0YXJlYS50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgY3JlYXRlQ29udGV4dCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtcbiAgRm9ybUNvbnRyb2wsXG4gIEZvcm1IZWxwZXJUZXh0LFxuICBJbnB1dExhYmVsLFxuICBUZXh0RmllbGQsXG59IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xuaW1wb3J0IHsgdXNlTG9jYWxlcyB9IGZyb20gJy4uL2hvb2tzL3VzZUxvY2FsZXMnXG5cbmV4cG9ydCBjb25zdCBFeHRlbnNpb25Db250ZXh0ID0gY3JlYXRlQ29udGV4dChudWxsKVxuXG5leHBvcnQgZnVuY3Rpb24gVGV4dGFyZWEoe1xuICBzZGssXG4gIGluaXRpYWxEYXRhLFxuICByZXF1aXJlZCxcbn06IHtcbiAgc2RrOiBhbnlcbiAgaW5pdGlhbERhdGE6IGFueVxuICByZXF1aXJlZDogYm9vbGVhblxufSkge1xuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNkay5maWVsZC5zZXRWYWx1ZShpbml0aWFsRGF0YSlcbiAgfSwgW3Nka10pXG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGV2OiBSZWFjdC5DaGFuZ2VFdmVudDx7IHZhbHVlOiB1bmtub3duIH0+KSA9PiB7XG4gICAgc2RrLmZpZWxkLnNldFZhbHVlKGV2LnRhcmdldC52YWx1ZSlcbiAgfVxuXG4gIGNvbnN0IHsgbG9jYWxlcywgcGFyYW1zIH0gPSBzZGtcbiAgY29uc3QgeyBpbnN0YWxsYXRpb24gfSA9IHBhcmFtc1xuICBjb25zdCB7IGF2YWlsYWJsZTogYXZhaWxhYmxlTG9jYWxlcyB9ID0gbG9jYWxlc1xuXG4gIGNvbnNvbGUubG9nKGF2YWlsYWJsZUxvY2FsZXMpXG5cbiAgcmV0dXJuIChcbiAgICA8Rm9ybUNvbnRyb2wgZnVsbFdpZHRoPlxuICAgICAge2xvY2FsZXMubWFwKCh7IGxvY2FsZSB9OiBhbnkpID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICBrZXk9e2xvY2FsZX1cbiAgICAgICAgICAgIGxhYmVsPXtsb2NhbGV9XG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHVwZGF0ZVRyYW5zbGF0ZWQobG9jYWxlLCBlLnRhcmdldC52YWx1ZSwgbG9ja2VkKX1cbiAgICAgICAgICAgIHJvd3M9ezN9XG4gICAgICAgICAgICBkZWZhdWx0VmFsdWU9e2luaXRpYWxEYXRhfVxuICAgICAgICAgICAgaWQ9XCJ0ZXh0YXJlYS1sYWJlbC1pZFwiXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgbXVsdGlsaW5lXG4gICAgICAgICAgICBsYWJlbD17c2RrLmZpZWxkLnNjaGVtYT8udGl0bGV9XG4gICAgICAgICAgICByZXF1aXJlZD17cmVxdWlyZWR9XG4gICAgICAgICAgLz5cbiAgICAgICAgKVxuICAgICAgfSl9XG4gICAgICA8Rm9ybUhlbHBlclRleHQ+e3Nkay5maWVsZC5zY2hlbWE/LmRlc2NyaXB0aW9ufTwvRm9ybUhlbHBlclRleHQ+XG4gICAgPC9Gb3JtQ29udHJvbD5cbiAgKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Textarea.tsx\n");

/***/ })

})