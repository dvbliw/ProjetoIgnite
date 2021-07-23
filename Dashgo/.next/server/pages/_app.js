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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/contexts/SidebarDrawerContext.tsx":
/*!***********************************************!*\
  !*** ./src/contexts/SidebarDrawerContext.tsx ***!
  \***********************************************/
/*! exports provided: SidebarDrawerProvider, useSidebarDrawer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarDrawerProvider", function() { return SidebarDrawerProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useSidebarDrawer", function() { return useSidebarDrawer; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\DVBLIW\\Desktop\\Projeto Ignite\\Projeto 4 - Dashgo\\src\\contexts\\SidebarDrawerContext.tsx";



const SidebarDrawerContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])({});
function SidebarDrawerProvider({
  children
}) {
  const disclosure = Object(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["useDisclosure"])();
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    disclosure.onClose();
  }, [router.asPath]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(SidebarDrawerContext.Provider, {
    value: disclosure,
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 5
  }, this);
}
const useSidebarDrawer = () => Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(SidebarDrawerContext);

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-query */ "react-query");
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_query_devtools__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-query/devtools */ "react-query/devtools");
/* harmony import */ var react_query_devtools__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_query_devtools__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/theme */ "./src/styles/theme.ts");
/* harmony import */ var _contexts_SidebarDrawerContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../contexts/SidebarDrawerContext */ "./src/contexts/SidebarDrawerContext.tsx");
/* harmony import */ var _services_mirage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/mirage */ "./src/services/mirage/index.ts");
/* harmony import */ var _services_queryClient__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/queryClient */ "./src/services/queryClient.ts");

var _jsxFileName = "C:\\Users\\DVBLIW\\Desktop\\Projeto Ignite\\Projeto 4 - Dashgo\\src\\pages\\_app.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









if (true) {
  Object(_services_mirage__WEBPACK_IMPORTED_MODULE_6__["makeServer"])();
}

function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_query__WEBPACK_IMPORTED_MODULE_2__["QueryClientProvider"], {
    client: _services_queryClient__WEBPACK_IMPORTED_MODULE_7__["queryClient"],
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["ChakraProvider"], {
      theme: _styles_theme__WEBPACK_IMPORTED_MODULE_4__["theme"],
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_contexts_SidebarDrawerContext__WEBPACK_IMPORTED_MODULE_5__["SidebarDrawerProvider"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Component, _objectSpread({}, pageProps), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_query_devtools__WEBPACK_IMPORTED_MODULE_3__["ReactQueryDevtools"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "./src/services/mirage/index.ts":
/*!**************************************!*\
  !*** ./src/services/mirage/index.ts ***!
  \**************************************/
/*! exports provided: makeServer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeServer", function() { return makeServer; });
/* harmony import */ var miragejs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! miragejs */ "miragejs");
/* harmony import */ var miragejs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(miragejs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! faker */ "faker");
/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(faker__WEBPACK_IMPORTED_MODULE_1__);


function makeServer() {
  const server = Object(miragejs__WEBPACK_IMPORTED_MODULE_0__["createServer"])({
    serializers: {
      application: miragejs__WEBPACK_IMPORTED_MODULE_0__["ActiveModelSerializer"]
    },
    models: {
      user: miragejs__WEBPACK_IMPORTED_MODULE_0__["Model"].extend({})
    },
    factories: {
      user: miragejs__WEBPACK_IMPORTED_MODULE_0__["Factory"].extend({
        name(i) {
          return `User ${i + 1}`;
        },

        email() {
          return faker__WEBPACK_IMPORTED_MODULE_1___default.a.internet.email().toLowerCase();
        },

        createdAt() {
          return faker__WEBPACK_IMPORTED_MODULE_1___default.a.date.recent(10);
        }

      })
    },

    seeds(server) {
      server.createList('user', 200);
    },

    routes() {
      this.namespace = 'api';
      this.timing = 750;
      this.get('/users', function (schema, req) {
        const {
          page = 1,
          per_page = 10
        } = req.queryParams;
        const total = schema.all('user').length;
        const pageStart = (Number(page) - 1) * Number(per_page);
        const pageEnd = pageStart + Number(per_page);
        const users = this.serialize(schema.all('user')).users.slice(pageStart, pageEnd);
        return new miragejs__WEBPACK_IMPORTED_MODULE_0__["Response"](200, {
          'x-total-count': String(total)
        }, {
          users
        });
      });
      this.get('/users/:id');
      this.post('/users');
      this.namespace = '';
      this.passthrough();
    }

  });
  return server;
}

/***/ }),

/***/ "./src/services/queryClient.ts":
/*!*************************************!*\
  !*** ./src/services/queryClient.ts ***!
  \*************************************/
/*! exports provided: queryClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queryClient", function() { return queryClient; });
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-query */ "react-query");
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_0__);

const queryClient = new react_query__WEBPACK_IMPORTED_MODULE_0__["QueryClient"]();

/***/ }),

/***/ "./src/styles/theme.ts":
/*!*****************************!*\
  !*** ./src/styles/theme.ts ***!
  \*****************************/
/*! exports provided: theme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "theme", function() { return theme; });
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__);

const theme = Object(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__["extendTheme"])({
  colors: {
    gray: {
      "900": "#181B23",
      "800": "#1F2029",
      "700": "#353646",
      "600": "#4B4D63",
      "500": "#616480",
      "400": "#797D9A",
      "300": "#9699B0",
      "200": "#B3B5C6",
      "100": "#D1D2DC",
      "50": "#EEEEF2"
    }
  },
  fonts: {
    heading: 'Roboto',
    body: 'Roboto'
  },
  styles: {
    global: {
      body: {
        bg: 'gray.900',
        color: 'gray.50'
      }
    }
  }
});

/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi private-next-pages/_app.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.tsx */"./src/pages/_app.tsx");


/***/ }),

/***/ "@chakra-ui/react":
/*!***********************************!*\
  !*** external "@chakra-ui/react" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@chakra-ui/react");

/***/ }),

/***/ "faker":
/*!************************!*\
  !*** external "faker" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("faker");

/***/ }),

/***/ "miragejs":
/*!***************************!*\
  !*** external "miragejs" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("miragejs");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-query":
/*!******************************!*\
  !*** external "react-query" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-query");

/***/ }),

/***/ "react-query/devtools":
/*!***************************************!*\
  !*** external "react-query/devtools" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-query/devtools");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRleHRzL1NpZGViYXJEcmF3ZXJDb250ZXh0LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvX2FwcC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL21pcmFnZS9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvcXVlcnlDbGllbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy90aGVtZS50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAY2hha3JhLXVpL3JlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZmFrZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtaXJhZ2Vqc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1xdWVyeVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXF1ZXJ5L2RldnRvb2xzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiU2lkZWJhckRyYXdlckNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiU2lkZWJhckRyYXdlclByb3ZpZGVyIiwiY2hpbGRyZW4iLCJkaXNjbG9zdXJlIiwidXNlRGlzY2xvc3VyZSIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZUVmZmVjdCIsIm9uQ2xvc2UiLCJhc1BhdGgiLCJ1c2VTaWRlYmFyRHJhd2VyIiwidXNlQ29udGV4dCIsIm1ha2VTZXJ2ZXIiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInF1ZXJ5Q2xpZW50IiwidGhlbWUiLCJzZXJ2ZXIiLCJjcmVhdGVTZXJ2ZXIiLCJzZXJpYWxpemVycyIsImFwcGxpY2F0aW9uIiwiQWN0aXZlTW9kZWxTZXJpYWxpemVyIiwibW9kZWxzIiwidXNlciIsIk1vZGVsIiwiZXh0ZW5kIiwiZmFjdG9yaWVzIiwiRmFjdG9yeSIsIm5hbWUiLCJpIiwiZW1haWwiLCJmYWtlciIsImludGVybmV0IiwidG9Mb3dlckNhc2UiLCJjcmVhdGVkQXQiLCJkYXRlIiwicmVjZW50Iiwic2VlZHMiLCJjcmVhdGVMaXN0Iiwicm91dGVzIiwibmFtZXNwYWNlIiwidGltaW5nIiwiZ2V0Iiwic2NoZW1hIiwicmVxIiwicGFnZSIsInBlcl9wYWdlIiwicXVlcnlQYXJhbXMiLCJ0b3RhbCIsImFsbCIsImxlbmd0aCIsInBhZ2VTdGFydCIsIk51bWJlciIsInBhZ2VFbmQiLCJ1c2VycyIsInNlcmlhbGl6ZSIsInNsaWNlIiwiUmVzcG9uc2UiLCJTdHJpbmciLCJwb3N0IiwicGFzc3Rocm91Z2giLCJRdWVyeUNsaWVudCIsImV4dGVuZFRoZW1lIiwiY29sb3JzIiwiZ3JheSIsImZvbnRzIiwiaGVhZGluZyIsImJvZHkiLCJzdHlsZXMiLCJnbG9iYWwiLCJiZyIsImNvbG9yIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtR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QU8sU0FISDtBQUlKLGFBQU8sU0FKSDtBQUtKLGFBQU8sU0FMSDtBQU1KLGFBQU8sU0FOSDtBQU9KLGFBQU8sU0FQSDtBQVFKLGFBQU8sU0FSSDtBQVNKLGFBQU8sU0FUSDtBQVVKLFlBQU07QUFWRjtBQURBLEdBRHVCO0FBZS9CQyxPQUFLLEVBQUU7QUFDTEMsV0FBTyxFQUFFLFFBREo7QUFFTEMsUUFBSSxFQUFFO0FBRkQsR0Fmd0I7QUFtQi9CQyxRQUFNLEVBQUU7QUFDTkMsVUFBTSxFQUFFO0FBQ05GLFVBQUksRUFBRTtBQUNKRyxVQUFFLEVBQUUsVUFEQTtBQUVKQyxhQUFLLEVBQUU7QUFGSDtBQURBO0FBREY7QUFuQnVCLENBQUQsQ0FBekIsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGUCw2Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxxQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxpRDs7Ozs7Ozs7Ozs7QUNBQSxrRCIsImZpbGUiOiJwYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgUmVhY3ROb2RlLCB1c2VDb250ZXh0LCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZURpc2Nsb3N1cmUsIFVzZURpc2Nsb3N1cmVSZXR1cm4gfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0JztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcblxuaW50ZXJmYWNlIFNpZGViYXJEcmF3ZXJQcm92aWRlclByb3BzIHtcbiAgY2hpbGRyZW46IFJlYWN0Tm9kZTtcbn1cblxudHlwZSBTaWRlYmFyRHJhd2VyQ29udGV4dERhdGEgPSBVc2VEaXNjbG9zdXJlUmV0dXJuO1xuXG5jb25zdCBTaWRlYmFyRHJhd2VyQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe30gYXMgU2lkZWJhckRyYXdlckNvbnRleHREYXRhKTtcblxuZXhwb3J0IGZ1bmN0aW9uIFNpZGViYXJEcmF3ZXJQcm92aWRlcih7IGNoaWxkcmVuIH06IFNpZGViYXJEcmF3ZXJQcm92aWRlclByb3BzKSB7XG4gIGNvbnN0IGRpc2Nsb3N1cmUgPSB1c2VEaXNjbG9zdXJlKClcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGRpc2Nsb3N1cmUub25DbG9zZSgpXG4gIH0sIFtyb3V0ZXIuYXNQYXRoXSlcblxuICByZXR1cm4gKFxuICAgIDxTaWRlYmFyRHJhd2VyQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17ZGlzY2xvc3VyZX0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9TaWRlYmFyRHJhd2VyQ29udGV4dC5Qcm92aWRlcj5cbiAgKVxufVxuXG5leHBvcnQgY29uc3QgdXNlU2lkZWJhckRyYXdlciA9ICgpID0+IHVzZUNvbnRleHQoU2lkZWJhckRyYXdlckNvbnRleHQpOyIsImltcG9ydCB7IEFwcFByb3BzIH0gZnJvbSAnbmV4dC9hcHAnXG5pbXBvcnQgeyBDaGFrcmFQcm92aWRlciB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnXG5pbXBvcnQgeyBRdWVyeUNsaWVudFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcXVlcnknXG5pbXBvcnQgeyBSZWFjdFF1ZXJ5RGV2dG9vbHMgfSBmcm9tICdyZWFjdC1xdWVyeS9kZXZ0b29scydcblxuaW1wb3J0IHsgdGhlbWUgfSBmcm9tICcuLi9zdHlsZXMvdGhlbWUnXG5cbmltcG9ydCB7IFNpZGViYXJEcmF3ZXJQcm92aWRlciB9IGZyb20gJy4uL2NvbnRleHRzL1NpZGViYXJEcmF3ZXJDb250ZXh0J1xuXG5pbXBvcnQgeyBtYWtlU2VydmVyIH0gZnJvbSAnLi4vc2VydmljZXMvbWlyYWdlJ1xuaW1wb3J0IHsgcXVlcnlDbGllbnQgfSBmcm9tICcuLi9zZXJ2aWNlcy9xdWVyeUNsaWVudCdcblxuaWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgbWFrZVNlcnZlcigpO1xufVxuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IEFwcFByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPFF1ZXJ5Q2xpZW50UHJvdmlkZXIgY2xpZW50PXtxdWVyeUNsaWVudH0+XG4gICAgICA8Q2hha3JhUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cbiAgICAgICAgPFNpZGViYXJEcmF3ZXJQcm92aWRlcj5cbiAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICAgIDwvU2lkZWJhckRyYXdlclByb3ZpZGVyPlxuICAgICAgPC9DaGFrcmFQcm92aWRlcj5cblxuICAgICAgPFJlYWN0UXVlcnlEZXZ0b29scyAvPlxuICAgIDwvUXVlcnlDbGllbnRQcm92aWRlcj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcFxuIiwiaW1wb3J0IHsgY3JlYXRlU2VydmVyLCBGYWN0b3J5LCBNb2RlbCwgUmVzcG9uc2UsIEFjdGl2ZU1vZGVsU2VyaWFsaXplciB9IGZyb20gJ21pcmFnZWpzJ1xuaW1wb3J0IGZha2VyIGZyb20gJ2Zha2VyJ1xuXG50eXBlIFVzZXIgPSB7XG4gIG5hbWU6IHN0cmluZztcbiAgZW1haWw6IHN0cmluZztcbiAgY3JlYXRlZF9hdDogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWFrZVNlcnZlcigpIHtcbiAgY29uc3Qgc2VydmVyID0gY3JlYXRlU2VydmVyKHtcbiAgICBzZXJpYWxpemVyczoge1xuICAgICAgYXBwbGljYXRpb246IEFjdGl2ZU1vZGVsU2VyaWFsaXplcixcbiAgICB9LFxuXG4gICAgbW9kZWxzOiB7XG4gICAgICB1c2VyOiBNb2RlbC5leHRlbmQ8UGFydGlhbDxVc2VyPj4oe30pXG4gICAgfSxcblxuICAgIGZhY3Rvcmllczoge1xuICAgICAgdXNlcjogRmFjdG9yeS5leHRlbmQoe1xuICAgICAgICBuYW1lKGk6IG51bWJlcikge1xuICAgICAgICAgIHJldHVybiBgVXNlciAke2kgKyAxfWBcbiAgICAgICAgfSxcbiAgICAgICAgZW1haWwoKSB7XG4gICAgICAgICAgcmV0dXJuIGZha2VyLmludGVybmV0LmVtYWlsKCkudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgfSxcbiAgICAgICAgY3JlYXRlZEF0KCkge1xuICAgICAgICAgIHJldHVybiBmYWtlci5kYXRlLnJlY2VudCgxMCk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSxcblxuICAgIHNlZWRzKHNlcnZlcikge1xuICAgICAgc2VydmVyLmNyZWF0ZUxpc3QoJ3VzZXInLCAyMDApXG4gICAgfSxcblxuICAgIHJvdXRlcygpIHtcbiAgICAgIHRoaXMubmFtZXNwYWNlID0gJ2FwaSc7XG4gICAgICB0aGlzLnRpbWluZyA9IDc1MDtcblxuICAgICAgdGhpcy5nZXQoJy91c2VycycsIGZ1bmN0aW9uKHNjaGVtYSwgcmVxKSB7XG4gICAgICAgIGNvbnN0IHsgcGFnZSA9IDEsIHBlcl9wYWdlID0gMTAgfSA9IHJlcS5xdWVyeVBhcmFtc1xuXG4gICAgICAgIGNvbnN0IHRvdGFsID0gc2NoZW1hLmFsbCgndXNlcicpLmxlbmd0aFxuXG4gICAgICAgIGNvbnN0IHBhZ2VTdGFydCA9IChOdW1iZXIocGFnZSkgLSAxKSAqIE51bWJlcihwZXJfcGFnZSlcbiAgICAgICAgY29uc3QgcGFnZUVuZCA9IHBhZ2VTdGFydCArIE51bWJlcihwZXJfcGFnZSlcblxuICAgICAgICBjb25zdCB1c2VycyA9IHRoaXMuc2VyaWFsaXplKHNjaGVtYS5hbGwoJ3VzZXInKSlcbiAgICAgICAgICAudXNlcnMuc2xpY2UocGFnZVN0YXJ0LCBwYWdlRW5kKVxuXG4gICAgICAgIHJldHVybiBuZXcgUmVzcG9uc2UoXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIHsgJ3gtdG90YWwtY291bnQnOiBTdHJpbmcodG90YWwpIH0sXG4gICAgICAgICAgeyB1c2VycyB9XG4gICAgICAgIClcbiAgICAgIH0pO1xuICAgICAgXG4gICAgICB0aGlzLmdldCgnL3VzZXJzLzppZCcpO1xuICAgICAgdGhpcy5wb3N0KCcvdXNlcnMnKTtcblxuICAgICAgdGhpcy5uYW1lc3BhY2UgPSAnJztcbiAgICAgIHRoaXMucGFzc3Rocm91Z2goKTtcbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIHNlcnZlcjtcbn0iLCJpbXBvcnQgeyBRdWVyeUNsaWVudCB9IGZyb20gJ3JlYWN0LXF1ZXJ5J1xuXG5leHBvcnQgY29uc3QgcXVlcnlDbGllbnQgPSBuZXcgUXVlcnlDbGllbnQoKSIsImltcG9ydCB7IGV4dGVuZFRoZW1lIH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcblxuZXhwb3J0IGNvbnN0IHRoZW1lID0gZXh0ZW5kVGhlbWUoe1xuICBjb2xvcnM6IHtcbiAgICBncmF5OiB7XG4gICAgICBcIjkwMFwiOiBcIiMxODFCMjNcIixcbiAgICAgIFwiODAwXCI6IFwiIzFGMjAyOVwiLFxuICAgICAgXCI3MDBcIjogXCIjMzUzNjQ2XCIsXG4gICAgICBcIjYwMFwiOiBcIiM0QjRENjNcIixcbiAgICAgIFwiNTAwXCI6IFwiIzYxNjQ4MFwiLFxuICAgICAgXCI0MDBcIjogXCIjNzk3RDlBXCIsXG4gICAgICBcIjMwMFwiOiBcIiM5Njk5QjBcIixcbiAgICAgIFwiMjAwXCI6IFwiI0IzQjVDNlwiLFxuICAgICAgXCIxMDBcIjogXCIjRDFEMkRDXCIsXG4gICAgICBcIjUwXCI6IFwiI0VFRUVGMlwiLFxuICAgIH1cbiAgfSxcbiAgZm9udHM6IHtcbiAgICBoZWFkaW5nOiAnUm9ib3RvJyxcbiAgICBib2R5OiAnUm9ib3RvJ1xuICB9LFxuICBzdHlsZXM6IHtcbiAgICBnbG9iYWw6IHtcbiAgICAgIGJvZHk6IHtcbiAgICAgICAgYmc6ICdncmF5LjkwMCcsXG4gICAgICAgIGNvbG9yOiAnZ3JheS41MCdcbiAgICAgIH1cbiAgICB9XG4gIH1cbn0pIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGNoYWtyYS11aS9yZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmYWtlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtaXJhZ2Vqc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1xdWVyeVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1xdWVyeS9kZXZ0b29sc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==