webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MyApp; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "./node_modules/@material-ui/core/esm/CssBaseline/index.js");
/* harmony import */ var _src_theme__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../src/theme */ "./src/theme.js");
/* harmony import */ var _components_context_context__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/context/context */ "./components/context/context.js");








var _jsxFileName = "/Users/StephenReiser/Desktop/SteveProject/dfs-results/pages/_app.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;








var MyApp =
/*#__PURE__*/
function (_App) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(MyApp, _App);

  function MyApp() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, MyApp);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(MyApp)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "state", {
      dfsRes: 'Test'
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(MyApp, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // Remove the server-side injected CSS.
      var jssStyles = document.querySelector('#jss-server-side');

      if (jssStyles) {
        jssStyles.parentElement.removeChild(jssStyles);
      }
    }
  }, {
    key: "updateDfsRes",
    value: function updateDfsRes(data) {
      console.log(data); // this.setState({
      //   dfsRes: data
      // })
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          Component = _this$props.Component,
          pageProps = _this$props.pageProps;
      return __jsx(_components_context_context__WEBPACK_IMPORTED_MODULE_14__["default"].Provider, {
        value: {
          dfsRes: this.state.dfsRes,
          updateDfsRes: this.updateDfsRes
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_10___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, __jsx("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, "My page"), __jsx("meta", {
        name: "viewport",
        content: "minimum-scale=1, initial-scale=1, width=device-width",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      })), __jsx(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_11__["ThemeProvider"], {
        theme: _src_theme__WEBPACK_IMPORTED_MODULE_13__["default"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, __jsx(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_12__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }), __jsx(Component, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageProps, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }))));
    }
  }]);

  return MyApp;
}(next_app__WEBPACK_IMPORTED_MODULE_9___default.a);



/***/ })

})
//# sourceMappingURL=_app.js.2607e03e4c026bb3ac17.hot-update.js.map