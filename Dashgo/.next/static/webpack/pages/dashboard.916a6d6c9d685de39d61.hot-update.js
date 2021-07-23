webpackHotUpdate_N_E("pages/dashboard",{

/***/ "./src/pages/dashboard.tsx":
/*!*********************************!*\
  !*** ./src/pages/dashboard.tsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Dashboard; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/esm/index.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Header */ "./src/components/Header/index.tsx");
/* harmony import */ var _components_Sidebar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Sidebar */ "./src/components/Sidebar/index.tsx");

var _jsxFileName = "C:\\Users\\DVBLIW\\Desktop\\Projeto Ignite\\Projeto 4 - Dashgo\\src\\pages\\dashboard.tsx";


var Chart = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(_c = function _c() {
  return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.t.bind(null, /*! react-apexcharts */ "./node_modules/react-apexcharts/dist/react-apexcharts.min.js", 7));
}, {
  ssr: false,
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! react-apexcharts */ "./node_modules/react-apexcharts/dist/react-apexcharts.min.js")];
    },
    modules: ['react-apexcharts']
  }
});
_c2 = Chart;


var options = {
  chart: {
    toolbar: {
      show: false
    },
    zoom: {
      enabled: false
    },
    foreColor: _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["theme"].colors.gray[500]
  },
  grid: {
    show: false
  },
  dataLabels: {
    enabled: false
  },
  tooltip: {
    enabled: false
  },
  xaxis: {
    type: 'datetime',
    axisBorder: {
      color: _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["theme"].colors.gray[600]
    },
    axisTicks: {
      color: _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["theme"].colors.gray[600]
    },
    categories: ['2021-05-13T00:00:00.000z', '2021-05-14T00:00:00.000z', '2021-05-15T00:00:00.000z', '2021-05-16T00:00:00.000z', '2021-05-17T00:00:00.000z', '2021-05-18T00:00:00.000z', '2021-05-19T00:00:00.000z']
  },
  fill: {
    opacity: 0.3,
    type: 'gradient',
    gradient: {
      shade: 'dark',
      opacityFrom: 0.7,
      opacityTo: 0.3
    }
  }
};
var series = [{
  name: 'series1',
  data: [20, 60, 10, 82, 93, 14, 120]
}];
function Dashboard() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    direction: "column",
    h: "100vh",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Header__WEBPACK_IMPORTED_MODULE_3__["Header"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
      w: "100%",
      my: "6",
      maxWidth: 1480,
      mx: "auto",
      px: "6",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Sidebar__WEBPACK_IMPORTED_MODULE_4__["Sidebar"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["SimpleGrid"], {
        flex: "1",
        gap: "4",
        minChildWidth: "320px",
        align: "flex-start",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Box"], {
          p: ['6', '8'],
          bg: "gray.800",
          borderRadius: "8",
          pb: "4",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
            fontSize: "lg",
            mb: "4",
            children: "Inscritos da semana"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Chart, {
            options: options,
            series: series,
            type: "area",
            height: 160
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Box"], {
          p: ['6', '8'],
          bg: "gray.800",
          borderRadius: "8",
          pb: "4",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
            fontSize: "lg",
            mb: "4",
            children: "Taxa de abertura"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Chart, {
            options: options,
            series: series,
            type: "area",
            height: 160
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 97,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 68,
    columnNumber: 5
  }, this);
}
_c3 = Dashboard;

var _c, _c2, _c3;

$RefreshReg$(_c, "Chart$dynamic");
$RefreshReg$(_c2, "Chart");
$RefreshReg$(_c3, "Dashboard");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2Rhc2hib2FyZC50c3giXSwibmFtZXMiOlsiQ2hhcnQiLCJkeW5hbWljIiwic3NyIiwib3B0aW9ucyIsImNoYXJ0IiwidG9vbGJhciIsInNob3ciLCJ6b29tIiwiZW5hYmxlZCIsImZvcmVDb2xvciIsInRoZW1lIiwiY29sb3JzIiwiZ3JheSIsImdyaWQiLCJkYXRhTGFiZWxzIiwidG9vbHRpcCIsInhheGlzIiwidHlwZSIsImF4aXNCb3JkZXIiLCJjb2xvciIsImF4aXNUaWNrcyIsImNhdGVnb3JpZXMiLCJmaWxsIiwib3BhY2l0eSIsImdyYWRpZW50Iiwic2hhZGUiLCJvcGFjaXR5RnJvbSIsIm9wYWNpdHlUbyIsInNlcmllcyIsIm5hbWUiLCJkYXRhIiwiRGFzaGJvYXJkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUEsSUFBTUEsS0FBSyxHQUFHQyxtREFBTyxNQUFDO0FBQUEsU0FBTSwwS0FBTjtBQUFBLENBQUQsRUFBbUM7QUFDdERDLEtBQUcsRUFBRSxLQURpRDtBQUFBO0FBQUE7QUFBQSxrQ0FBckIsc0ZBQXFCO0FBQUE7QUFBQSxjQUFyQixrQkFBcUI7QUFBQTtBQUFBLENBQW5DLENBQXJCO01BQU1GLEs7QUFJTjtBQUNBO0FBRUEsSUFBTUcsT0FBTyxHQUFHO0FBQ2RDLE9BQUssRUFBRTtBQUNMQyxXQUFPLEVBQUU7QUFDUEMsVUFBSSxFQUFFO0FBREMsS0FESjtBQUlMQyxRQUFJLEVBQUU7QUFDSkMsYUFBTyxFQUFFO0FBREwsS0FKRDtBQU9MQyxhQUFTLEVBQUVDLHNEQUFLLENBQUNDLE1BQU4sQ0FBYUMsSUFBYixDQUFrQixHQUFsQjtBQVBOLEdBRE87QUFVZEMsTUFBSSxFQUFFO0FBQ0pQLFFBQUksRUFBRTtBQURGLEdBVlE7QUFhZFEsWUFBVSxFQUFFO0FBQ1ZOLFdBQU8sRUFBRTtBQURDLEdBYkU7QUFnQmRPLFNBQU8sRUFBRTtBQUNQUCxXQUFP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QUE7QUFBQTtBQUFBLGdCQWhCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXlDRDtNQTFDdUJHLFMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZGFzaGJvYXJkLjkxNmE2ZDZjOWQ2ODVkZTM5ZDYxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb3gsIEZsZXgsIFNpbXBsZUdyaWQsIFRleHQsIHRoZW1lIH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcbmltcG9ydCBkeW5hbWljIGZyb20gJ25leHQvZHluYW1pYyc7XG5cbmNvbnN0IENoYXJ0ID0gZHluYW1pYygoKSA9PiBpbXBvcnQoJ3JlYWN0LWFwZXhjaGFydHMnKSwge1xuICBzc3I6IGZhbHNlXG59KTsgXG5cbmltcG9ydCB7IEhlYWRlciB9IGZyb20gXCIuLi9jb21wb25lbnRzL0hlYWRlclwiO1xuaW1wb3J0IHsgU2lkZWJhciB9IGZyb20gXCIuLi9jb21wb25lbnRzL1NpZGViYXJcIjtcblxuY29uc3Qgb3B0aW9ucyA9IHtcbiAgY2hhcnQ6IHtcbiAgICB0b29sYmFyOiB7XG4gICAgICBzaG93OiBmYWxzZSxcbiAgICB9LFxuICAgIHpvb206IHtcbiAgICAgIGVuYWJsZWQ6IGZhbHNlLFxuICAgIH0sXG4gICAgZm9yZUNvbG9yOiB0aGVtZS5jb2xvcnMuZ3JheVs1MDBdXG4gIH0sXG4gIGdyaWQ6IHtcbiAgICBzaG93OiBmYWxzZSxcbiAgfSxcbiAgZGF0YUxhYmVsczoge1xuICAgIGVuYWJsZWQ6IGZhbHNlLFxuICB9LFxuICB0b29sdGlwOiB7XG4gICAgZW5hYmxlZDogZmFsc2UsXG4gIH0sXG4gIHhheGlzOiB7XG4gICAgdHlwZTogJ2RhdGV0aW1lJyxcbiAgICBheGlzQm9yZGVyOiB7XG4gICAgICBjb2xvcjogdGhlbWUuY29sb3JzLmdyYXlbNjAwXVxuICAgIH0sXG4gICAgYXhpc1RpY2tzOiB7XG4gICAgICBjb2xvcjogdGhlbWUuY29sb3JzLmdyYXlbNjAwXVxuICAgIH0sXG4gICAgY2F0ZWdvcmllczogW1xuICAgICAgJzIwMjEtMDUtMTNUMDA6MDA6MDAuMDAweicsXG4gICAgICAnMjAyMS0wNS0xNFQwMDowMDowMC4wMDB6JyxcbiAgICAgICcyMDIxLTA1LTE1VDAwOjAwOjAwLjAwMHonLFxuICAgICAgJzIwMjEtMDUtMTZUMDA6MDA6MDAuMDAweicsXG4gICAgICAnMjAyMS0wNS0xN1QwMDowMDowMC4wMDB6JyxcbiAgICAgICcyMDIxLTA1LTE4VDAwOjAwOjAwLjAwMHonLFxuICAgICAgJzIwMjEtMDUtMTlUMDA6MDA6MDAuMDAweicsXG4gICAgXVxuICB9LFxuICBmaWxsOiB7XG4gICAgb3BhY2l0eTogMC4zLFxuICAgIHR5cGU6ICdncmFkaWVudCcsXG4gICAgZ3JhZGllbnQ6IHtcbiAgICAgIHNoYWRlOiAnZGFyaycsXG4gICAgICBvcGFjaXR5RnJvbTogMC43LFxuICAgICAgb3BhY2l0eVRvOiAwLjMsXG4gICAgfVxuICB9XG59XG5cbmNvbnN0IHNlcmllcyA9IFtcbiAge1xuICAgIG5hbWU6ICdzZXJpZXMxJywgXG4gICAgZGF0YTogWzIwLCA2MCwgMTAsIDgyLCA5MywgMTQsIDEyMF1cbiAgfVxuXVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEYXNoYm9hcmQoKSB7XG4gIHJldHVybiAoXG4gICAgPEZsZXggZGlyZWN0aW9uPSdjb2x1bW4nIGg9JzEwMHZoJz5cbiAgICAgIDxIZWFkZXIgLz5cblxuICAgICAgPEZsZXggdz0nMTAwJScgbXk9JzYnIG1heFdpZHRoPXsxNDgwfSBteD0nYXV0bycgcHg9JzYnPlxuICAgICAgICA8U2lkZWJhciAvPlxuXG4gICAgICAgIDxTaW1wbGVHcmlkIGZsZXg9JzEnIGdhcD0nNCcgbWluQ2hpbGRXaWR0aD0nMzIwcHgnIGFsaWduPSdmbGV4LXN0YXJ0Jz5cbiAgICAgICAgICA8Qm94XG4gICAgICAgICAgICBwPXtbJzYnLCAnOCddfVxuICAgICAgICAgICAgYmc9J2dyYXkuODAwJ1xuICAgICAgICAgICAgYm9yZGVyUmFkaXVzPSc4J1xuICAgICAgICAgICAgcGI9JzQnXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPFRleHQgZm9udFNpemU9J2xnJyBtYj0nNCc+SW5zY3JpdG9zIGRhIHNlbWFuYTwvVGV4dD5cbiAgICAgICAgICAgIDxDaGFydFxuICAgICAgICAgICAgICBvcHRpb25zPXtvcHRpb25zfVxuICAgICAgICAgICAgICBzZXJpZXM9e3Nlcmllc30gXG4gICAgICAgICAgICAgIHR5cGU9J2FyZWEnXG4gICAgICAgICAgICAgIGhlaWdodD17MTYwfSBcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9Cb3g+XG5cbiAgICAgICAgICA8Qm94XG4gICAgICAgICAgICBwPXtbJzYnLCAnOCddfVxuICAgICAgICAgICAgYmc9J2dyYXkuODAwJ1xuICAgICAgICAgICAgYm9yZGVyUmFkaXVzPSc4J1xuICAgICAgICAgICAgcGI9JzQnXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPFRleHQgZm9udFNpemU9J2xnJyBtYj0nNCc+VGF4YSBkZSBhYmVydHVyYTwvVGV4dD5cbiAgICAgICAgICAgIDxDaGFydFxuICAgICAgICAgICAgICBvcHRpb25zPXtvcHRpb25zfVxuICAgICAgICAgICAgICBzZXJpZXM9e3Nlcmllc30gXG4gICAgICAgICAgICAgIHR5cGU9J2FyZWEnXG4gICAgICAgICAgICAgIGhlaWdodD17MTYwfSBcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgIDwvU2ltcGxlR3JpZD5cbiAgICAgIDwvRmxleD5cbiAgICA8L0ZsZXg+XG4gIClcbn0iXSwic291cmNlUm9vdCI6IiJ9