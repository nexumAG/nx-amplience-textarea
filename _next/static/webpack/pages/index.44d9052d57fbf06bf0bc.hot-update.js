webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Textarea.tsx":
/*!*********************************!*\
  !*** ./components/Textarea.tsx ***!
  \*********************************/
/*! exports provided: Textarea */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Textarea\", function() { return Textarea; });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var _hooks_useTranslate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/useTranslate */ \"./hooks/useTranslate.ts\");\n/* harmony import */ var _hooks_useLocales__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/useLocales */ \"./hooks/useLocales.ts\");\n\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Textarea(_ref) {\n  _s();\n\n  var _sdk$field$schema;\n\n  var sdk = _ref.sdk,\n      initialData = _ref.initialData,\n      required = _ref.required;\n\n  var _useTranslation = Object(_hooks_useTranslate__WEBPACK_IMPORTED_MODULE_3__[\"useTranslation\"])(initialData),\n      translated = _useTranslation.translated,\n      updateTranslated = _useTranslation.updateTranslated;\n\n  Object(_hooks_useLocales__WEBPACK_IMPORTED_MODULE_4__[\"useLocales\"])(translated);\n  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(function () {\n    sdk.field.setValue(initialData);\n  }, [sdk]);\n\n  var handleChange = function handleChange(locale) {\n    return function (ev) {\n      updateTranslated(locale, ev.target.value);\n    };\n  };\n\n  var locales = sdk.locales;\n  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxs\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"FormControl\"], {\n    fullWidth: true,\n    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(Typography, {\n      variant: \"body1\",\n      gutterBottom: true,\n      children: (_sdk$field$schema = sdk.field.schema) === null || _sdk$field$schema === void 0 ? void 0 : _sdk$field$schema.title\n    }), locales.available.map(function (_ref2) {\n      var _sdk$field$schema2, _initialData$values$f, _sdk$field$schema3;\n\n      var locale = _ref2.locale;\n      return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxs\"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {\n        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"TextField\"], {\n          onChange: handleChange(locale),\n          rows: 3,\n          id: \"textarea-label-id\",\n          multiline: true,\n          label: \"\".concat((_sdk$field$schema2 = sdk.field.schema) === null || _sdk$field$schema2 === void 0 ? void 0 : _sdk$field$schema2.title, \" \").concat(locale),\n          required: required,\n          defaultValue: initialData === null || initialData === void 0 ? void 0 : (_initialData$values$f = initialData.values.find(function (t) {\n            return t.locale === locale;\n          })) === null || _initialData$values$f === void 0 ? void 0 : _initialData$values$f.value\n        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"FormHelperText\"], {\n          children: \"\".concat((_sdk$field$schema3 = sdk.field.schema) === null || _sdk$field$schema3 === void 0 ? void 0 : _sdk$field$schema3.description, \" \").concat(locale)\n        })]\n      }, locale);\n    })]\n  });\n}\n\n_s(Textarea, \"aT4Bd4ZXiNtl8eSUI6NOkIgjkxU=\", false, function () {\n  return [_hooks_useTranslate__WEBPACK_IMPORTED_MODULE_3__[\"useTranslation\"], _hooks_useLocales__WEBPACK_IMPORTED_MODULE_4__[\"useLocales\"]];\n});\n\n_c = Textarea;\n\nvar _c;\n\n$RefreshReg$(_c, \"Textarea\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9UZXh0YXJlYS50c3g/YjY3MyJdLCJuYW1lcyI6WyJUZXh0YXJlYSIsInNkayIsImluaXRpYWxEYXRhIiwicmVxdWlyZWQiLCJ1c2VUcmFuc2xhdGlvbiIsInRyYW5zbGF0ZWQiLCJ1cGRhdGVUcmFuc2xhdGVkIiwidXNlTG9jYWxlcyIsIlJlYWN0IiwidXNlRWZmZWN0IiwiZmllbGQiLCJzZXRWYWx1ZSIsImhhbmRsZUNoYW5nZSIsImxvY2FsZSIsImV2IiwidGFyZ2V0IiwidmFsdWUiLCJsb2NhbGVzIiwic2NoZW1hIiwidGl0bGUiLCJhdmFpbGFibGUiLCJtYXAiLCJ2YWx1ZXMiLCJmaW5kIiwidCIsImRlc2NyaXB0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRU8sU0FBU0EsUUFBVCxPQVFKO0FBQUE7O0FBQUE7O0FBQUEsTUFQREMsR0FPQyxRQVBEQSxHQU9DO0FBQUEsTUFOREMsV0FNQyxRQU5EQSxXQU1DO0FBQUEsTUFMREMsUUFLQyxRQUxEQSxRQUtDOztBQUFBLHdCQUN3Q0MsMEVBQWMsQ0FBQ0YsV0FBRCxDQUR0RDtBQUFBLE1BQ09HLFVBRFAsbUJBQ09BLFVBRFA7QUFBQSxNQUNtQkMsZ0JBRG5CLG1CQUNtQkEsZ0JBRG5COztBQUVEQyxzRUFBVSxDQUFDRixVQUFELENBQVY7QUFFQUcsOENBQUssQ0FBQ0MsU0FBTixDQUFnQixZQUFNO0FBQ3BCUixPQUFHLENBQUNTLEtBQUosQ0FBVUMsUUFBVixDQUFtQlQsV0FBbkI7QUFDRCxHQUZELEVBRUcsQ0FBQ0QsR0FBRCxDQUZIOztBQUlBLE1BQU1XLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLE1BQUQ7QUFBQSxXQUFpQixVQUNwQ0MsRUFEb0MsRUFFakM7QUFDSFIsc0JBQWdCLENBQUNPLE1BQUQsRUFBU0MsRUFBRSxDQUFDQyxNQUFILENBQVVDLEtBQW5CLENBQWhCO0FBQ0QsS0FKb0I7QUFBQSxHQUFyQjs7QUFSQyxNQWNPQyxPQWRQLEdBY21CaEIsR0FkbkIsQ0FjT2dCLE9BZFA7QUFnQkQsc0JBQ0UsK0RBQUMsNkRBQUQ7QUFBYSxhQUFTLE1BQXRCO0FBQUEsNEJBQ0UsOERBQUMsVUFBRDtBQUFZLGFBQU8sRUFBQyxPQUFwQjtBQUE0QixrQkFBWSxNQUF4QztBQUFBLHFDQUNFaEIsR0FBRyxDQUFDUyxLQUFKLENBQVVRLE1BRFosc0RBQ0Usa0JBQWtCQztBQURwQixNQURGLEVBSUdGLE9BQU8sQ0FBQ0csU0FBUixDQUFrQkMsR0FBbEIsQ0FBc0IsaUJBQXFCO0FBQUE7O0FBQUEsVUFBbEJSLE1BQWtCLFNBQWxCQSxNQUFrQjtBQUMxQywwQkFDRSwrREFBQyw0Q0FBRCxDQUFPLFFBQVA7QUFBQSxnQ0FDRSw4REFBQywyREFBRDtBQUNFLGtCQUFRLEVBQUVELFlBQVksQ0FBQ0MsTUFBRCxDQUR4QjtBQUVFLGNBQUksRUFBRSxDQUZSO0FBR0UsWUFBRSxFQUFDLG1CQUhMO0FBSUUsbUJBQVMsTUFKWDtBQUtFLGVBQUssa0NBQUtaLEdBQUcsQ0FBQ1MsS0FBSixDQUFVUSxNQUFmLHVEQUFLLG1CQUFrQkMsS0FBdkIsY0FBZ0NOLE1BQWhDLENBTFA7QUFNRSxrQkFBUSxFQUFFVixRQU5aO0FBT0Usc0JBQVksRUFDVkQsV0FEVSxhQUNWQSxXQURVLGdEQUNWQSxXQUFXLENBQUVvQixNQUFiLENBQW9CQyxJQUFwQixDQUF5QixVQUFDQyxDQUFEO0FBQUEsbUJBQVlBLENBQUMsQ0FBQ1gsTUFBRixLQUFhQSxNQUF6QjtBQUFBLFdBQXpCLENBRFUsMERBQ1Ysc0JBQTJERztBQVIvRCxVQURGLGVBWUUsOERBQUMsZ0VBQUQ7QUFBQSxvREFDTWYsR0FBRyxDQUFDUyxLQUFKLENBQVVRLE1BRGhCLHVEQUNNLG1CQUFrQk8sV0FEeEIsY0FDdUNaLE1BRHZDO0FBQUEsVUFaRjtBQUFBLFNBQXFCQSxNQUFyQixDQURGO0FBa0JELEtBbkJBLENBSkg7QUFBQSxJQURGO0FBMkJEOztHQW5EZWIsUTtVQVMyQkksa0UsRUFDekNHLDREOzs7S0FWY1AsUSIsImZpbGUiOiIuL2NvbXBvbmVudHMvVGV4dGFyZWEudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgRm9ybUNvbnRyb2wsIEZvcm1IZWxwZXJUZXh0LCBUZXh0RmllbGQgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAnLi4vaG9va3MvdXNlVHJhbnNsYXRlJ1xuaW1wb3J0IHsgdXNlTG9jYWxlcyB9IGZyb20gJy4uL2hvb2tzL3VzZUxvY2FsZXMnXG5cbmV4cG9ydCBmdW5jdGlvbiBUZXh0YXJlYSh7XG4gIHNkayxcbiAgaW5pdGlhbERhdGEsXG4gIHJlcXVpcmVkLFxufToge1xuICBzZGs6IGFueVxuICBpbml0aWFsRGF0YTogYW55XG4gIHJlcXVpcmVkOiBib29sZWFuXG59KSB7XG4gIGNvbnN0IHsgdHJhbnNsYXRlZCwgdXBkYXRlVHJhbnNsYXRlZCB9ID0gdXNlVHJhbnNsYXRpb24oaW5pdGlhbERhdGEpXG4gIHVzZUxvY2FsZXModHJhbnNsYXRlZClcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNkay5maWVsZC5zZXRWYWx1ZShpbml0aWFsRGF0YSlcbiAgfSwgW3Nka10pXG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGxvY2FsZTogYW55KSA9PiAoXG4gICAgZXY6IFJlYWN0LkNoYW5nZUV2ZW50PHsgdmFsdWU6IHVua25vd24gfT4sXG4gICkgPT4ge1xuICAgIHVwZGF0ZVRyYW5zbGF0ZWQobG9jYWxlLCBldi50YXJnZXQudmFsdWUpXG4gIH1cblxuICBjb25zdCB7IGxvY2FsZXMgfSA9IHNka1xuXG4gIHJldHVybiAoXG4gICAgPEZvcm1Db250cm9sIGZ1bGxXaWR0aD5cbiAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MVwiIGd1dHRlckJvdHRvbT5cbiAgICAgICB7c2RrLmZpZWxkLnNjaGVtYT8udGl0bGV9XG4gICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICB7bG9jYWxlcy5hdmFpbGFibGUubWFwKCh7IGxvY2FsZSB9OiBhbnkpID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQga2V5PXtsb2NhbGV9PlxuICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlKGxvY2FsZSl9XG4gICAgICAgICAgICAgIHJvd3M9ezN9XG4gICAgICAgICAgICAgIGlkPVwidGV4dGFyZWEtbGFiZWwtaWRcIlxuICAgICAgICAgICAgICBtdWx0aWxpbmVcbiAgICAgICAgICAgICAgbGFiZWw9e2Ake3Nkay5maWVsZC5zY2hlbWE/LnRpdGxlfSAke2xvY2FsZX1gfVxuICAgICAgICAgICAgICByZXF1aXJlZD17cmVxdWlyZWR9XG4gICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17XG4gICAgICAgICAgICAgICAgaW5pdGlhbERhdGE/LnZhbHVlcy5maW5kKCh0OiBhbnkpID0+IHQubG9jYWxlID09PSBsb2NhbGUpPy52YWx1ZVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPEZvcm1IZWxwZXJUZXh0PlxuICAgICAgICAgICAgICB7YCR7c2RrLmZpZWxkLnNjaGVtYT8uZGVzY3JpcHRpb259ICR7bG9jYWxlfWB9XG4gICAgICAgICAgICA8L0Zvcm1IZWxwZXJUZXh0PlxuICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgIClcbiAgICAgIH0pfVxuICAgIDwvRm9ybUNvbnRyb2w+XG4gIClcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Textarea.tsx\n");

/***/ })

})