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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJzaWduSW5Gb3JtU2NoZW1hIiwieXVwIiwic2hhcGUiLCJlbWFpbCIsInJlcXVpcmVkIiwicGFzc3dvcmQiLCJTaWduSW4iLCJ1c2VGb3JtIiwicmVzb2x2ZXIiLCJ5dXBSZXNvbHZlciIsInJlZ2lzdGVyIiwiaGFuZGxlU3VibWl0IiwiZm9ybVN0YXRlIiwiZXJyb3JzIiwiaXNTdWJtaXR0aW5nIiwiaGFuZGxlU2lnbkluIiwidmFsdWVzIiwiUHJvbWlzZSIsInJlc29sdmUiLCJzZXRUaW1lb3V0IiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBT0EsSUFBTUEsZ0JBQWdCLEdBQUdDLDBDQUFBLEdBQWFDLEtBQWIsQ0FBbUI7QUFDMUNDLE9BQUssRUFBRUYsMENBQUEsR0FBYUcsUUFBYixDQUFzQixvQkFBdEIsRUFBNENELEtBQTVDLENBQWtELGlCQUFsRCxDQURtQztBQUUxQ0UsVUFBUSxFQUFFSiwwQ0FBQSxHQUFhRyxRQUFiLENBQXNCLG1CQUF0QjtBQUZnQyxDQUFuQixDQUF6QjtBQUtlLFNBQVNFLE1BQVQsR0FBa0I7QUFBQTs7QUFBQSxpQkFDeUNDLCtEQUFPLENBQWlCO0FBQzlGQyxZQUFRLEVBQUVDLDJFQUFXLENBQUNULGdCQUFEO0FBRHlFLEdBQWpCLENBRGhEO0FBQUEsTUFDdkJVLFFBRHVCLFlBQ3ZCQSxRQUR1QjtBQUFBLE1BQ2JDLFlBRGEsWUFDYkEsWUFEYTtBQUFBLG9DQUNDQyxTQUREO0FBQUEsTUFDY0MsTUFEZCxzQkFDY0EsTUFEZDtBQUFBLE1BQ3NCQyxZQUR0QixzQkFDc0JBLFlBRHRCOztBQUsvQixNQUFNQyxZQUEyQztBQUFBLDBXQUFHLGlCQUFPQyxNQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUM1QyxJQUFJQyxPQUFKLENBQVksVUFBQUMsT0FBTztBQUFBLHVCQUFJQyxVQUFVLENBQUNELE9BQUQsRUFBVSxJQUFWLENBQWQ7QUFBQSxlQUFuQixDQUQ0Qzs7QUFBQTtBQUdsREUscUJBQU8sQ0FBQ0MsR0FBUixDQUFZTCxNQUFaOztBQUhrRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUEzQ0QsWUFBMkM7QUFBQTtBQUFBO0FBQUEsS0FBakQ7O0FBTUEsc0JBQ0UscUVBQUMscURBQUQ7QUFDRSxLQUFDLEVBQUMsT0FESjtBQUVFLEtBQUMsRUFBQyxPQUZKO0FBR0UsU0FBSyxFQUFDLFFBSFI7QUFJRSxXQUFPLEVBQUMsUUFKVjtBQUFBLDJCQU1FLHFFQUFDLHFEQUFEO0FBQ0UsUUFBRSxFQUFDLE1BREw7QUFFRSxPQUFDLEVBQUMsTUFGSjtBQUdFLGNBQVEsRUFBRSxHQUhaO0FBSUUsUUFBRSxFQUFDLFVBSkw7QUFLRSxPQUFDLEVBQUMsR0FMSjtBQU1FLGtCQUFZLEVBQUUsQ0FOaEI7QUFPRSxhQUFPLEVBQUMsUUFQVjtBQVFFLGNBQVEsRUFBRUosWUFBWSxDQUFDSSxZQUFELENBUnhCO0FBQUEsOEJBVUUscUVBQUMscURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FWRixlQVdFLHFFQUFDLHNEQUFEO0FBQU8sZUFBTyxFQUFDLEdBQWY7QUFBQSxnQ0FDRSxxRUFBQyw0REFBRDtBQUNFLGNBQUksRUFBQyxPQURQO0FBRUUsY0FBSSxFQUFDLE9BRlA7QUFHRSxlQUFLLEVBQUMsUUFIUjtBQUlFLGVBQUssRUFBRUYsTUFBTSxDQUFDVjtBQUpoQixXQUtNTyxRQUFRLENBQUMsT0FBRCxDQUxkO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFTRSxxRUFBQyw0REFBRDtBQUNFLGNBQUksRUFBQyxVQURQO0FBRUUsY0FBSSxFQUFDLFVBRlA7QUFHRSxlQUFLLEVBQUMsT0FIUjtBQUlFLGVBQUssRUFBRUcsTUFBTSxDQUFDUjtBQUpoQixXQUtNSyxRQUFRLENBQUMsVUFBRCxDQUxkO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBWEYsZUE2QkUscUVBQUMsdURBQUQ7QUFDRSxZQUFJLEVBQUMsUUFEUDtBQUVFLFVBQUUsRUFBQyxHQUZMO0FBR0UsbUJBQVcsRUFBQyxNQUhkO0FBSUUsWUFBSSxFQUFDLElBSlA7QUFLRSxpQkFBUyxFQUFFSSxZQUxiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBN0JGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWdERDs7R0EzRHVCUixNO1VBQ2tEQyx1RDs7O0tBRGxERCxNIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjY0NjFmMDJmMjUyZDQxMDc0Nzk1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGbGV4LCBCdXR0b24sIFN0YWNrLCBUZXh0IH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcbmltcG9ydCB7IFN1Ym1pdEhhbmRsZXIsIHVzZUZvcm0gfSBmcm9tICdyZWFjdC1ob29rLWZvcm0nXG5pbXBvcnQgKiBhcyB5dXAgZnJvbSAneXVwJ1xuaW1wb3J0IHsgeXVwUmVzb2x2ZXIgfSBmcm9tICdAaG9va2Zvcm0vcmVzb2x2ZXJzL3l1cCdcblxuaW1wb3J0IHsgSW5wdXQgfSBmcm9tICcuLi9jb21wb25lbnRzL0Zvcm0vSW5wdXQnO1xuXG50eXBlIFNpZ25JbkZvcm1EYXRhID0ge1xuICBlbWFpbDogc3RyaW5nO1xuICBwYXNzd29yZDogc3RyaW5nO1xufVxuXG5jb25zdCBzaWduSW5Gb3JtU2NoZW1hID0geXVwLm9iamVjdCgpLnNoYXBlKHtcbiAgZW1haWw6IHl1cC5zdHJpbmcoKS5yZXF1aXJlZCgnRS1tYWlsIG9icmlnYXTDs3JpbycpLmVtYWlsKCdFLW1haWwgaW52w6FsaWRvJyksXG4gIHBhc3N3b3JkOiB5dXAuc3RyaW5nKCkucmVxdWlyZWQoJ1NlbmhhIG9icmlnYXTDs3JpYScpXG59KVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaWduSW4oKSB7XG4gIGNvbnN0IHsgcmVnaXN0ZXIsIGhhbmRsZVN1Ym1pdCwgZm9ybVN0YXRlOiB7IGVycm9ycywgaXNTdWJtaXR0aW5nIH0gfSA9IHVzZUZvcm08U2lnbkluRm9ybURhdGE+KHtcbiAgICByZXNvbHZlcjogeXVwUmVzb2x2ZXIoc2lnbkluRm9ybVNjaGVtYSlcbiAgfSlcblxuICBjb25zdCBoYW5kbGVTaWduSW46IFN1Ym1pdEhhbmRsZXI8U2lnbkluRm9ybURhdGE+ID0gYXN5bmMgKHZhbHVlcykgPT4ge1xuICAgIGF3YWl0IG5ldyBQcm9taXNlKHJlc29sdmUgPT4gc2V0VGltZW91dChyZXNvbHZlLCAyMDAwKSlcbiAgICBcbiAgICBjb25zb2xlLmxvZyh2YWx1ZXMpXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxGbGV4XG4gICAgICB3PScxMDB2dydcbiAgICAgIGg9JzEwMHZoJ1xuICAgICAgYWxpZ249J2NlbnRlcidcbiAgICAgIGp1c3RpZnk9J2NlbnRlcidcbiAgICA+XG4gICAgICA8RmxleFxuICAgICAgICBhcz0nZm9ybSdcbiAgICAgICAgdz0nMTAwJSdcbiAgICAgICAgbWF4V2lkdGg9ezM2MH1cbiAgICAgICAgYmc9J2dyYXkuODAwJ1xuICAgICAgICBwPSc4J1xuICAgICAgICBib3JkZXJSYWRpdXM9ezh9XG4gICAgICAgIGZsZXhEaXI9J2NvbHVtbidcbiAgICAgICAgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdChoYW5kbGVTaWduSW4pfVxuICAgICAgPlxuICAgICAgICA8VGV4dD4gTG9naW4gPC9UZXh0PlxuICAgICAgICA8U3RhY2sgc3BhY2luZz0nNCc+XG4gICAgICAgICAgPElucHV0IFxuICAgICAgICAgICAgbmFtZT0nZW1haWwnIFxuICAgICAgICAgICAgdHlwZT0nZW1haWwnIFxuICAgICAgICAgICAgbGFiZWw9J0UtbWFpbCdcbiAgICAgICAgICAgIGVycm9yPXtlcnJvcnMuZW1haWx9XG4gICAgICAgICAgICB7Li4ucmVnaXN0ZXIoJ2VtYWlsJyl9IFxuICAgICAgICAgIC8+XG5cbiAgICAgICAgICA8SW5wdXQgXG4gICAgICAgICAgICBuYW1lPSdwYXNzd29yZCcgXG4gICAgICAgICAgICB0eXBlPSdwYXNzd29yZCcgXG4gICAgICAgICAgICBsYWJlbD0nU2VuaGEnXG4gICAgICAgICAgICBlcnJvcj17ZXJyb3JzLnBhc3N3b3JkfVxuICAgICAgICAgICAgey4uLnJlZ2lzdGVyKCdwYXNzd29yZCcpfSBcbiAgICAgICAgICAvPlxuICAgICAgICA8L1N0YWNrPlxuXG4gICAgICAgIDxCdXR0b24gXG4gICAgICAgICAgdHlwZT0nc3VibWl0JyBcbiAgICAgICAgICBtdD0nNicgXG4gICAgICAgICAgY29sb3JTY2hlbWU9J3BpbmsnIFxuICAgICAgICAgIHNpemU9J2xnJ1xuICAgICAgICAgIGlzTG9hZGluZz17aXNTdWJtaXR0aW5nfVxuICAgICAgICA+XG4gICAgICAgICAgRW50cmFyXG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgPC9GbGV4PlxuICAgIDwvRmxleD5cbiAgKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==