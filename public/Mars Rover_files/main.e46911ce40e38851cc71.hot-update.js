webpackHotUpdate("main",{

/***/ "./src/app.jsx":
/*!*********************!*\
  !*** ./src/app.jsx ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.css */ "./src/app.css");
/* harmony import */ var _app_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_app_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");
/* harmony import */ var _photos__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./photos */ "./src/photos.jsx");
var _jsxFileName = "/Users/clementine/Desktop/Code-Bits/ReactJS/nasa-api/src/app.jsx";





class App extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(args) {
    super(args);
    this.state = {
      query: '',
      earth_date: null,
      error: null,
      isLoaded: false,
      items: []
    };
  } // Methods


  search() {
    const base_url = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?";
    const fetch_url = "".concat(base_url, "earth_date=").concat(this.state.query, "&api_key=DEMO_KEY");
    console.log('fetch url', fetch_url);
    fetch(fetch_url, {
      method: "GET"
    }).then(res => res.json()).then(result => {
      this.setState({
        isLoaded: true,
        items: result.items
      });
    }, error => {
      this.setState({
        isLoaded: true,
        error
      });
    });
    console.log(this.state);
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "app",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "app-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: "./curiosity-rover-patch.png",
      alt: "null",
      className: "logo",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "app-body",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: "",
      alt: "",
      className: "rover-img",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["FormGroup"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["InputGroup"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["FormControl"], {
      type: "date",
      value: this.state.query,
      onChange: event => {
        this.setState({
          query: event.target.value
        });
      },
      onKeyPress: event => {
        if (event.key === 'Enter') {
          this.search();
        }
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "input-group-text",
      onClick: () => this.search(),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fas fa-search",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_photos__WEBPACK_IMPORTED_MODULE_3__["default"], {
      photos: this.state.photos,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ })

})
//# sourceMappingURL=main.e46911ce40e38851cc71.hot-update.js.map