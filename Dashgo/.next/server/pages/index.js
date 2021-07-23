module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/Form/Input.tsx":
/*!***************************************!*\
  !*** ./src/components/Form/Input.tsx ***!
  \***************************************/
/*! exports provided: Input */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return Input; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\DVBLIW\\Desktop\\Projeto Ignite\\Projeto 4 - Dashgo\\src\\components\\Form\\Input.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const InputBase = (_ref, ref) => {
  let {
    name,
    label,
    error = null
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["name", "label", "error"]);

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["FormControl"], {
    isInvalid: !!error,
    children: [!!label && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["FormLabel"], {
      htmlFor: name,
      children: label
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 20
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Input"], _objectSpread({
      id: name,
      name: name,
      ref: ref,
      focusBorderColor: "pink.500",
      bgColor: "gray.900",
      variant: "filled",
      _hover: {
        bgColor: 'gray.900'
      },
      size: "lg"
    }, rest), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, undefined), !!error && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["FormErrorMessage"], {
      children: error.message
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 5
  }, undefined);
};

const Input = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(InputBase);

/***/ }),

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SignIn; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hook-form */ "react-hook-form");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_hook_form__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! yup */ "yup");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @hookform/resolvers/yup */ "@hookform/resolvers/yup");
/* harmony import */ var _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Form_Input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Form/Input */ "./src/components/Form/Input.tsx");

var _jsxFileName = "C:\\Users\\DVBLIW\\Desktop\\Projeto Ignite\\Projeto 4 - Dashgo\\src\\pages\\index.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const signInFormSchema = yup__WEBPACK_IMPORTED_MODULE_3__["object"]().shape({
  email: yup__WEBPACK_IMPORTED_MODULE_3__["string"]().required('E-mail obrigatório').email('E-mail inválido'),
  password: yup__WEBPACK_IMPORTED_MODULE_3__["string"]().required('Senha obrigatória')
});
function SignIn() {
  const {
    register,
    handleSubmit,
    formState: {
      errors,
      isSubmitting
    }
  } = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_2__["useForm"])({
    resolver: Object(_hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_4__["yupResolver"])(signInFormSchema)
  });

  const handleSignIn = async values => {
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log(values);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    w: "100vw",
    h: "100vh",
    align: "center",
    justify: "center",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
      as: "form",
      w: "100%",
      maxWidth: 360,
      bg: "gray.800",
      p: "8",
      borderRadius: 8,
      flexDir: "column",
      onSubmit: handleSubmit(handleSignIn),
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
        fontSize: "2xl",
        align: "center",
        children: " Login "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Stack"], {
        spacing: "4",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Form_Input__WEBPACK_IMPORTED_MODULE_5__["Input"], _objectSpread({
          name: "email",
          type: "email",
          label: "E-mail",
          error: errors.email
        }, register('email')), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Form_Input__WEBPACK_IMPORTED_MODULE_5__["Input"], _objectSpread({
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
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
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

/***/ }),

/***/ "@chakra-ui/react":
/*!***********************************!*\
  !*** external "@chakra-ui/react" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@chakra-ui/react");

/***/ }),

/***/ "@hookform/resolvers/yup":
/*!******************************************!*\
  !*** external "@hookform/resolvers/yup" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@hookform/resolvers/yup");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-hook-form":
/*!**********************************!*\
  !*** external "react-hook-form" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-hook-form");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "yup":
/*!**********************!*\
  !*** external "yup" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("yup");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvRm9ybS9JbnB1dC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAY2hha3JhLXVpL3JlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGhvb2tmb3JtL3Jlc29sdmVycy95dXBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWhvb2stZm9ybVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInl1cFwiIl0sIm5hbWVzIjpbIklucHV0QmFzZSIsInJlZiIsIm5hbWUiLCJsYWJlbCIsImVycm9yIiwicmVzdCIsImJnQ29sb3IiLCJtZXNzYWdlIiwiSW5wdXQiLCJmb3J3YXJkUmVmIiwic2lnbkluRm9ybVNjaGVtYSIsInl1cCIsInNoYXBlIiwiZW1haWwiLCJyZXF1aXJlZCIsInBhc3N3b3JkIiwiU2lnbkluIiwicmVnaXN0ZXIiLCJoYW5kbGVTdWJtaXQiLCJmb3JtU3RhdGUiLCJlcnJvcnMiLCJpc1N1Ym1pdHRpbmciLCJ1c2VGb3JtIiwicmVzb2x2ZXIiLCJ5dXBSZXNvbHZlciIsImhhbmRsZVNpZ25JbiIsInZhbHVlcyIsIlByb21pc2UiLCJyZXNvbHZlIiwic2V0VGltZW91dCIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtR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QTtBQUFBLFVBREY7QUFnREQsQzs7Ozs7Ozs7Ozs7QUM1RUQsNkM7Ozs7Ozs7Ozs7O0FDQUEsb0Q7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsNEM7Ozs7Ozs7Ozs7O0FDQUEsa0Q7Ozs7Ozs7Ozs7O0FDQUEsZ0MiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9wYWdlcy9pbmRleC50c3hcIik7XG4iLCJpbXBvcnQgeyBmb3J3YXJkUmVmLCBGb3J3YXJkUmVmUmVuZGVyRnVuY3Rpb24gfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEZpZWxkRXJyb3IgfSBmcm9tICdyZWFjdC1ob29rLWZvcm0nXG5pbXBvcnQgeyBJbnB1dCBhcyBDaGFrcmFJbnB1dCwgRm9ybUxhYmVsLCBGb3JtQ29udHJvbCwgSW5wdXRQcm9wcyBhcyBDaGFrcmFJbnB1dFByb3BzLCBGb3JtRXJyb3JNZXNzYWdlIH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcblxuaW50ZXJmYWNlIElucHV0UHJvcHMgZXh0ZW5kcyBDaGFrcmFJbnB1dFByb3BzIHtcbiAgbmFtZTogc3RyaW5nO1xuICBsYWJlbD86IHN0cmluZztcbiAgZXJyb3I/OiBGaWVsZEVycm9yO1xufVxuXG5jb25zdCBJbnB1dEJhc2U6IEZvcndhcmRSZWZSZW5kZXJGdW5jdGlvbjxIVE1MSW5wdXRFbGVtZW50LCBJbnB1dFByb3BzPiBcbiAgPSAoeyBuYW1lLCBsYWJlbCwgZXJyb3IgPSBudWxsLCAuLi5yZXN0IH0sIHJlZikgPT4ge1xuICByZXR1cm4gKFxuICAgIDxGb3JtQ29udHJvbCBpc0ludmFsaWQ9eyEhZXJyb3J9PlxuICAgICAgeyAhIWxhYmVsICYmIDxGb3JtTGFiZWwgaHRtbEZvcj17bmFtZX0+e2xhYmVsfTwvRm9ybUxhYmVsPn1cblxuICAgICAgPENoYWtyYUlucHV0IFxuICAgICAgICBpZD17bmFtZX0gXG4gICAgICAgIG5hbWU9e25hbWV9XG4gICAgICAgIHJlZj17cmVmfVxuICAgICAgICBmb2N1c0JvcmRlckNvbG9yPSdwaW5rLjUwMCdcbiAgICAgICAgYmdDb2xvcj0nZ3JheS45MDAnXG4gICAgICAgIHZhcmlhbnQ9J2ZpbGxlZCdcbiAgICAgICAgX2hvdmVyPXt7XG4gICAgICAgICAgYmdDb2xvcjogJ2dyYXkuOTAwJ1xuICAgICAgICB9fVxuICAgICAgICBzaXplPSdsZydcbiAgICAgICAgey4uLnJlc3R9XG4gICAgICAvPlxuXG4gICAgICB7ISFlcnJvciAmJiAoXG4gICAgICAgIDxGb3JtRXJyb3JNZXNzYWdlPlxuICAgICAgICAgIHtlcnJvci5tZXNzYWdlfVxuICAgICAgICA8L0Zvcm1FcnJvck1lc3NhZ2U+XG4gICAgICApfVxuICAgIDwvRm9ybUNvbnRyb2w+XG4gIClcbn1cblxuZXhwb3J0IGNvbnN0IElucHV0ID0gZm9yd2FyZFJlZihJbnB1dEJhc2UpXG4iLCJpbXBvcnQgeyBGbGV4LCBCdXR0b24sIFN0YWNrLCBUZXh0IH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcbmltcG9ydCB7IFN1Ym1pdEhhbmRsZXIsIHVzZUZvcm0gfSBmcm9tICdyZWFjdC1ob29rLWZvcm0nXG5pbXBvcnQgKiBhcyB5dXAgZnJvbSAneXVwJ1xuaW1wb3J0IHsgeXVwUmVzb2x2ZXIgfSBmcm9tICdAaG9va2Zvcm0vcmVzb2x2ZXJzL3l1cCdcblxuaW1wb3J0IHsgSW5wdXQgfSBmcm9tICcuLi9jb21wb25lbnRzL0Zvcm0vSW5wdXQnO1xuXG50eXBlIFNpZ25JbkZvcm1EYXRhID0ge1xuICBlbWFpbDogc3RyaW5nO1xuICBwYXNzd29yZDogc3RyaW5nO1xufVxuXG5jb25zdCBzaWduSW5Gb3JtU2NoZW1hID0geXVwLm9iamVjdCgpLnNoYXBlKHtcbiAgZW1haWw6IHl1cC5zdHJpbmcoKS5yZXF1aXJlZCgnRS1tYWlsIG9icmlnYXTDs3JpbycpLmVtYWlsKCdFLW1haWwgaW52w6FsaWRvJyksXG4gIHBhc3N3b3JkOiB5dXAuc3RyaW5nKCkucmVxdWlyZWQoJ1NlbmhhIG9icmlnYXTDs3JpYScpXG59KVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaWduSW4oKSB7XG4gIGNvbnN0IHsgcmVnaXN0ZXIsIGhhbmRsZVN1Ym1pdCwgZm9ybVN0YXRlOiB7IGVycm9ycywgaXNTdWJtaXR0aW5nIH0gfSA9IHVzZUZvcm08U2lnbkluRm9ybURhdGE+KHtcbiAgICByZXNvbHZlcjogeXVwUmVzb2x2ZXIoc2lnbkluRm9ybVNjaGVtYSlcbiAgfSlcblxuICBjb25zdCBoYW5kbGVTaWduSW46IFN1Ym1pdEhhbmRsZXI8U2lnbkluRm9ybURhdGE+ID0gYXN5bmMgKHZhbHVlcykgPT4ge1xuICAgIGF3YWl0IG5ldyBQcm9taXNlKHJlc29sdmUgPT4gc2V0VGltZW91dChyZXNvbHZlLCAyMDAwKSlcbiAgICBcbiAgICBjb25zb2xlLmxvZyh2YWx1ZXMpXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxGbGV4XG4gICAgICB3PScxMDB2dydcbiAgICAgIGg9JzEwMHZoJ1xuICAgICAgYWxpZ249J2NlbnRlcidcbiAgICAgIGp1c3RpZnk9J2NlbnRlcidcbiAgICA+XG4gICAgICA8RmxleFxuICAgICAgICBhcz0nZm9ybSdcbiAgICAgICAgdz0nMTAwJSdcbiAgICAgICAgbWF4V2lkdGg9ezM2MH1cbiAgICAgICAgYmc9J2dyYXkuODAwJ1xuICAgICAgICBwPSc4J1xuICAgICAgICBib3JkZXJSYWRpdXM9ezh9XG4gICAgICAgIGZsZXhEaXI9J2NvbHVtbidcbiAgICAgICAgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdChoYW5kbGVTaWduSW4pfVxuICAgICAgPlxuICAgICAgICA8VGV4dCBmb250U2l6ZT1cIjJ4bFwiIGFsaWduPVwiY2VudGVyXCI+IExvZ2luIDwvVGV4dD5cbiAgICAgICAgPFN0YWNrIHNwYWNpbmc9JzQnPlxuICAgICAgICAgIDxJbnB1dCBcbiAgICAgICAgICAgIG5hbWU9J2VtYWlsJyBcbiAgICAgICAgICAgIHR5cGU9J2VtYWlsJyBcbiAgICAgICAgICAgIGxhYmVsPSdFLW1haWwnXG4gICAgICAgICAgICBlcnJvcj17ZXJyb3JzLmVtYWlsfVxuICAgICAgICAgICAgey4uLnJlZ2lzdGVyKCdlbWFpbCcpfSBcbiAgICAgICAgICAvPlxuXG4gICAgICAgICAgPElucHV0IFxuICAgICAgICAgICAgbmFtZT0ncGFzc3dvcmQnIFxuICAgICAgICAgICAgdHlwZT0ncGFzc3dvcmQnIFxuICAgICAgICAgICAgbGFiZWw9J1NlbmhhJ1xuICAgICAgICAgICAgZXJyb3I9e2Vycm9ycy5wYXNzd29yZH1cbiAgICAgICAgICAgIHsuLi5yZWdpc3RlcigncGFzc3dvcmQnKX0gXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9TdGFjaz5cblxuICAgICAgICA8QnV0dG9uIFxuICAgICAgICAgIHR5cGU9J3N1Ym1pdCcgXG4gICAgICAgICAgbXQ9JzYnIFxuICAgICAgICAgIGNvbG9yU2NoZW1lPSdwaW5rJyBcbiAgICAgICAgICBzaXplPSdsZydcbiAgICAgICAgICBpc0xvYWRpbmc9e2lzU3VibWl0dGluZ31cbiAgICAgICAgPlxuICAgICAgICAgIEVudHJhclxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgIDwvRmxleD5cbiAgICA8L0ZsZXg+XG4gIClcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBjaGFrcmEtdWkvcmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGhvb2tmb3JtL3Jlc29sdmVycy95dXBcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaG9vay1mb3JtXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ5dXBcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==