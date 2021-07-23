webpackHotUpdate_N_E("pages/index",{

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SignIn; });
/* harmony import */ var C_Users_DVBLIW_Desktop_Projeto_Ignite_Projeto_4_Dashgo_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_DVBLIW_Desktop_Projeto_Ignite_Projeto_4_Dashgo_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_DVBLIW_Desktop_Projeto_Ignite_Projeto_4_Dashgo_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(C_Users_DVBLIW_Desktop_Projeto_Ignite_Projeto_4_Dashgo_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var C_Users_DVBLIW_Desktop_Projeto_Ignite_Projeto_4_Dashgo_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/esm/index.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
/* harmony import */ var _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @hookform/resolvers/yup */ "./node_modules/@hookform/resolvers/yup/dist/yup.module.js");
/* harmony import */ var _components_Form_Input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Form/Input */ "./src/components/Form/Input.tsx");





var _jsxFileName = "C:\\Users\\DVBLIW\\Desktop\\Projeto Ignite\\Projeto 4 - Dashgo\\src\\pages\\index.tsx",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_DVBLIW_Desktop_Projeto_Ignite_Projeto_4_Dashgo_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






var signInFormSchema = yup__WEBPACK_IMPORTED_MODULE_6__["object"]().shape({
  email: yup__WEBPACK_IMPORTED_MODULE_6__["string"]().required('E-mail obrigatório').email('E-mail inválido'),
  password: yup__WEBPACK_IMPORTED_MODULE_6__["string"]().required('Senha obrigatória')
});
function SignIn() {
  _s();

  var _useForm = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_5__["useForm"])({
    resolver: Object(_hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_7__["yupResolver"])(signInFormSchema)
  }),
      register = _useForm.register,
      handleSubmit = _useForm.handleSubmit,
      _useForm$formState = _useForm.formState,
      errors = _useForm$formState.errors,
      isSubmitting = _useForm$formState.isSubmitting;

  var handleSignIn = /*#__PURE__*/function () {
    var _ref = Object(C_Users_DVBLIW_Desktop_Projeto_Ignite_Projeto_4_Dashgo_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/C_Users_DVBLIW_Desktop_Projeto_Ignite_Projeto_4_Dashgo_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee(values) {
      return C_Users_DVBLIW_Desktop_Projeto_Ignite_Projeto_4_Dashgo_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return new Promise(function (resolve) {
                return setTimeout(resolve, 2000);
              });

            case 2:
              console.log(values);

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleSignIn(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__["Flex"], {
    w: "100vw",
    h: "100vh",
    align: "center",
    justify: "center",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__["Flex"], {
      as: "form",
      w: "100%",
      maxWidth: 360,
      bg: "gray.800",
      p: "8",
      borderRadius: 8,
      flexDir: "column",
      onSubmit: handleSubmit(handleSignIn),
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__["Text"], {
        fontSize: "2xl",
        align: "center",
        children: " Login "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__["Stack"], {
        spacing: "4",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_Form_Input__WEBPACK_IMPORTED_MODULE_8__["Input"], _objectSpread({
          name: "email",
          type: "email",
          label: "E-mail",
          error: errors.email
        }, register('email')), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_Form_Input__WEBPACK_IMPORTED_MODULE_8__["Input"], _objectSpread({
          name: "password",
          type: "password",
          label: "Senha",
          error: errors.password
        }, register('password')), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__["Button"], {
        type: "submit",
        mt: "6",
        colorScheme: "pink",
        size: "lg",
        isLoading: isSubmitting,
        children: "Entrar"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 5
  }, this);
}

_s(SignIn, "denEv8l6qBl5VC+3iUzM3F9Wbsc=", false, function () {
  return [react_hook_form__WEBPACK_IMPORTED_MODULE_5__["useForm"]];
});

_c = SignIn;

var _c;

$RefreshReg$(_c, "SignIn");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJzaWduSW5Gb3JtU2NoZW1hIiwieXVwIiwic2hhcGUiLCJlbWFpbCIsInJlcXVpcmVkIiwicGFzc3dvcmQiLCJTaWduSW4iLCJ1c2VGb3JtIiwicmVzb2x2ZXIiLCJ5dXBSZXNvbHZlciIsInJlZ2lzdGVyIiwiaGFuZGxlU3VibWl0IiwiZm9ybVN0YXRlIiwiZXJyb3JzIiwiaXNTdWJtaXR0aW5nIiwiaGFuZGxlU2lnbkluIiwidmFsdWVzIiwiUHJvbWlzZSIsInJlc29sdmUiLCJzZXRUaW1lb3V0IiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBT0EsSUFBTUEsZ0JBQWdCLEdBQUdDLDBDQUFBLEdBQWFDLEtBQWIsQ0FBbUI7QUFDMUNDLE9BQUssRUFBRUYsMENBQUEsR0FBYUcsUUFBYixDQUFzQixvQkFBdEIsRUFBNENELEtBQTVDLENBQWtELGlCQUFsRCxDQURtQztBQUUxQ0UsVUFBUSxFQUFFSiwwQ0FBQSxHQUFhRyxRQUFiLENBQXNCLG1CQUF0QjtBQUZnQyxDQUFuQixDQUF6QjtBQUtlLFNBQVNFLE1BQVQsR0FBa0I7QUFBQTs7QUFBQSxpQkFDeUNDLCtEQUFPLENBQWlCO0FBQzlGQyxZQUFRLEVBQUVDLDJFQUFXLENBQUNULGdCQUFEO0FBRHlFLEdBQWpCLENBRGhEO0FBQUEsTUFDdkJVLFFBRHVCLFlBQ3ZCQSxRQUR1QjtBQUFBLE1BQ2JDLFlBRGEsWUFDYkEsWUFEYTtBQUFBLG9DQUNDQyxTQUREO0FBQUEsTUFDY0MsTUFEZCxzQkFDY0EsTUFEZDtBQUFBLE1BQ3NCQyxZQUR0QixzQkFDc0JBLFlBRHRCOztBQUsvQixNQUFNQyxZQUEyQztBQUFBLDBXQUFHLGlCQUFPQyxNQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUM1QyxJQUFJQyxPQUFKLENBQVksVUFBQUMsT0FBTztBQUFBLHVCQUFJQyxVQUFVLENBQUNELE9BQUQsRUFBVSxJQUFWLENBQWQ7QUFBQSxlQUFuQixDQUQ0Qzs7QUFBQTtBQUdsREUscUJBQU8sQ0FBQ0MsR0FBUixDQUFZTCxNQUFaOztBQUhrRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUEzQ0QsWUFBMkM7QUFBQTtBQUFBO0FBQUEsS0FBakQ7O0FBTUEsc0JBQ0UscUVBQUMscURBQUQ7QUFDRSxLQUFDLEVBQUMsT0FESjtBQUVFLEtBQUMsRUFBQyxPQUZKO0FBR0UsU0FBSyxFQUFDLFFBSFI7QUFJRSxXQUFPLEVBQUMsUUFKVjtBQUFBLDJCQU1FLHFFQUFDLHFEQUFEO0FBQ0UsUUFBRSxFQUFDLE1BREw7QUFFRSxPQUFDLEVBQUMsTUFGSjtBQUdFLGNBQVEsRUFBRSxHQUhaO0FBSUUsUUFBRSxFQUFDLFVBSkw7QUFLRSxPQUFDLEVBQUMsR0FMSjtBQU1FLGtCQUFZLEVBQUUsQ0FOaEI7QUFPRSxhQUFPLEVBQUMsUUFQVjtBQVFFLGNBQVEsRUFBRUosWUFBWSxDQUFDSSxZQUFELENBUnhCO0FBQUEsOEJBVUUscUVBQUMscURBQUQ7QUFBTSxnQkFBUSxFQUFDLEtBQWY7QUFBcUIsYUFBSyxFQUFDLFFBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBVkYsZUFXRSxxRUFBQyxzREFBRDtBQUFPLGVBQU8sRUFBQyxHQUFmO0FBQUEsZ0NBQ0UscUVBQUMsNERBQUQ7QUFDRSxjQUFJLEVBQUMsT0FEUDtBQUVFLGNBQUksRUFBQyxPQUZQO0FBR0UsZUFBSyxFQUFDLFFBSFI7QUFJRSxlQUFLLEVBQUVGLE1BQU0sQ0FBQ1Y7QUFKaEIsV0FLTU8sUUFBUSxDQUFDLE9BQUQsQ0FMZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBU0UscUVBQUMsNERBQUQ7QUFDRSxjQUFJLEVBQUMsVUFEUDtBQUVFLGNBQUksRUFBQyxVQUZQO0FBR0UsZUFBSyxFQUFDLE9BSFI7QUFJRSxlQUFLLEVBQUVHLE1BQU0sQ0FBQ1I7QUFKaEIsV0FLTUssUUFBUSxDQUFDLFVBQUQsQ0FMZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVhGLGVBNkJFLHFFQUFDLHVEQUFEO0FBQ0UsWUFBSSxFQUFDLFFBRFA7QUFFRSxVQUFFLEVBQUMsR0FGTDtBQUdFLG1CQUFXLEVBQUMsTUFIZDtBQUlFLFlBQUksRUFBQyxJQUpQO0FBS0UsaUJBQVMsRUFBRUksWUFMYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQTdCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFORjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFnREQ7O0dBM0R1QlIsTTtVQUNrREMsdUQ7OztLQURsREQsTSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5kZjU5MTVhNTJhYzRjMjJlNzhmOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRmxleCwgQnV0dG9uLCBTdGFjaywgVGV4dCB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnXG5pbXBvcnQgeyBTdWJtaXRIYW5kbGVyLCB1c2VGb3JtIH0gZnJvbSAncmVhY3QtaG9vay1mb3JtJ1xuaW1wb3J0ICogYXMgeXVwIGZyb20gJ3l1cCdcbmltcG9ydCB7IHl1cFJlc29sdmVyIH0gZnJvbSAnQGhvb2tmb3JtL3Jlc29sdmVycy95dXAnXG5cbmltcG9ydCB7IElucHV0IH0gZnJvbSAnLi4vY29tcG9uZW50cy9Gb3JtL0lucHV0JztcblxudHlwZSBTaWduSW5Gb3JtRGF0YSA9IHtcbiAgZW1haWw6IHN0cmluZztcbiAgcGFzc3dvcmQ6IHN0cmluZztcbn1cblxuY29uc3Qgc2lnbkluRm9ybVNjaGVtYSA9IHl1cC5vYmplY3QoKS5zaGFwZSh7XG4gIGVtYWlsOiB5dXAuc3RyaW5nKCkucmVxdWlyZWQoJ0UtbWFpbCBvYnJpZ2F0w7NyaW8nKS5lbWFpbCgnRS1tYWlsIGludsOhbGlkbycpLFxuICBwYXNzd29yZDogeXVwLnN0cmluZygpLnJlcXVpcmVkKCdTZW5oYSBvYnJpZ2F0w7NyaWEnKVxufSlcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2lnbkluKCkge1xuICBjb25zdCB7IHJlZ2lzdGVyLCBoYW5kbGVTdWJtaXQsIGZvcm1TdGF0ZTogeyBlcnJvcnMsIGlzU3VibWl0dGluZyB9IH0gPSB1c2VGb3JtPFNpZ25JbkZvcm1EYXRhPih7XG4gICAgcmVzb2x2ZXI6IHl1cFJlc29sdmVyKHNpZ25JbkZvcm1TY2hlbWEpXG4gIH0pXG5cbiAgY29uc3QgaGFuZGxlU2lnbkluOiBTdWJtaXRIYW5kbGVyPFNpZ25JbkZvcm1EYXRhPiA9IGFzeW5jICh2YWx1ZXMpID0+IHtcbiAgICBhd2FpdCBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgMjAwMCkpXG4gICAgXG4gICAgY29uc29sZS5sb2codmFsdWVzKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8RmxleFxuICAgICAgdz0nMTAwdncnXG4gICAgICBoPScxMDB2aCdcbiAgICAgIGFsaWduPSdjZW50ZXInXG4gICAgICBqdXN0aWZ5PSdjZW50ZXInXG4gICAgPlxuICAgICAgPEZsZXhcbiAgICAgICAgYXM9J2Zvcm0nXG4gICAgICAgIHc9JzEwMCUnXG4gICAgICAgIG1heFdpZHRoPXszNjB9XG4gICAgICAgIGJnPSdncmF5LjgwMCdcbiAgICAgICAgcD0nOCdcbiAgICAgICAgYm9yZGVyUmFkaXVzPXs4fVxuICAgICAgICBmbGV4RGlyPSdjb2x1bW4nXG4gICAgICAgIG9uU3VibWl0PXtoYW5kbGVTdWJtaXQoaGFuZGxlU2lnbkluKX1cbiAgICAgID5cbiAgICAgICAgPFRleHQgZm9udFNpemU9XCIyeGxcIiBhbGlnbj1cImNlbnRlclwiPiBMb2dpbiA8L1RleHQ+XG4gICAgICAgIDxTdGFjayBzcGFjaW5nPSc0Jz5cbiAgICAgICAgICA8SW5wdXQgXG4gICAgICAgICAgICBuYW1lPSdlbWFpbCcgXG4gICAgICAgICAgICB0eXBlPSdlbWFpbCcgXG4gICAgICAgICAgICBsYWJlbD0nRS1tYWlsJ1xuICAgICAgICAgICAgZXJyb3I9e2Vycm9ycy5lbWFpbH1cbiAgICAgICAgICAgIHsuLi5yZWdpc3RlcignZW1haWwnKX0gXG4gICAgICAgICAgLz5cblxuICAgICAgICAgIDxJbnB1dCBcbiAgICAgICAgICAgIG5hbWU9J3Bhc3N3b3JkJyBcbiAgICAgICAgICAgIHR5cGU9J3Bhc3N3b3JkJyBcbiAgICAgICAgICAgIGxhYmVsPSdTZW5oYSdcbiAgICAgICAgICAgIGVycm9yPXtlcnJvcnMucGFzc3dvcmR9XG4gICAgICAgICAgICB7Li4ucmVnaXN0ZXIoJ3Bhc3N3b3JkJyl9IFxuICAgICAgICAgIC8+XG4gICAgICAgIDwvU3RhY2s+XG5cbiAgICAgICAgPEJ1dHRvbiBcbiAgICAgICAgICB0eXBlPSdzdWJtaXQnIFxuICAgICAgICAgIG10PSc2JyBcbiAgICAgICAgICBjb2xvclNjaGVtZT0ncGluaycgXG4gICAgICAgICAgc2l6ZT0nbGcnXG4gICAgICAgICAgaXNMb2FkaW5nPXtpc1N1Ym1pdHRpbmd9XG4gICAgICAgID5cbiAgICAgICAgICBFbnRyYXJcbiAgICAgICAgPC9CdXR0b24+XG4gICAgICA8L0ZsZXg+XG4gICAgPC9GbGV4PlxuICApXG59XG4iXSwic291cmNlUm9vdCI6IiJ9