module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Link.js":
/*!****************************!*\
  !*** ./components/Link.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_server_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-server/config */ "next-server/config");
/* harmony import */ var next_server_config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_server_config__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "D:\\projects\\new-portfolio\\components\\Link.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/**
 * Higher order component, which is based on 'next/link'
 * When app is deployed on github pages repository which is not the main one
 * e.g https://username.github.io/repository/
 * standard 'next/link' is not wokring properly, it doesn't add the 'reporsitory'
 * to url so instead of expected 'https://username.github.io/repository/about',
 * it would be 'https://username.github.io/about/
 * This HOC solves the problem, by adding the prefix (which is defined in next.config.js)
 * to 'as' property
 */


const {
  publicRuntimeConfig
} = next_server_config__WEBPACK_IMPORTED_MODULE_1___default()();
const linkPrefix = publicRuntimeConfig.linkPrefix;

const PrefixedLink = ({
  href,
  as = href,
  children
}) => __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: href,
  as: `${linkPrefix}${as}`,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18
  },
  __self: undefined
}, children);

/* harmony default export */ __webpack_exports__["default"] = (PrefixedLink);

/***/ }),

/***/ "./components/PortModal.js":
/*!*********************************!*\
  !*** ./components/PortModal.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\projects\\new-portfolio\\components\\PortModal.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


class PortModal extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  render() {
    return __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2790990276", [this.props.modalstate]]]) + " " + "port-modal",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, __jsx("h1", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2790990276", [this.props.modalstate]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, "close", __jsx("a", {
      onClick: this.props.closemodal,
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2790990276", [this.props.modalstate]]]) + " " + 'close-button',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, "[x]")), __jsx("img", {
      src: this.props.projectimage,
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2790990276", [this.props.modalstate]]]) + " " + "port-image",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }), __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2790990276", [this.props.modalstate]]]) + " " + "desc-panel",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, __jsx("h2", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2790990276", [this.props.modalstate]]]) + " " + "desc-header",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, this.props.projectname, __jsx("a", {
      style: {
        fontSize: '70%',
        fontWeight: "bold",
        paddingLeft: "0.5em",
        textTransform: 'lowercase'
      },
      href: this.props.projectlink,
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2790990276", [this.props.modalstate]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, this.props.projectlink)), __jsx("h2", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2790990276", [this.props.modalstate]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, this.props.projectdesc_s)), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "2790990276",
      dynamic: [this.props.modalstate],
      __self: this
    }, `.port-modal.__jsx-style-dynamic-selector{display:${this.props.modalstate};position:fixed;top:50%;left:50%;height:90vh;width:70vw;margin-left:-35vw;margin-top:-45vh;border-left:1px solid black;border-right:1px solid black;border-bottom:1px solid black;box-shadow:0 5pt 10pt rgba(0,0,0,0.2);z-index:999;background:slategray;border-radius:5px 5px 0 0;overflow:hidden;}.port-image.__jsx-style-dynamic-selector{width:100%;height:100%;object-fit:cover;}h1.__jsx-style-dynamic-selector{margin:0;position:relative;text-align:left;padding:5px 0 5px 20px;font-size:1.8em;font-family:'Major Mono Display',monospace;top:0;color:whitesmoke;background:rgb(0,25,0);border-radius:5px 5px 0 0;z-index:10;}.desc-panel.__jsx-style-dynamic-selector{background:whitesmoke;float:left;position:absolute;bottom:0;width:100%;padding:2em;border-left:5pt solid slateblue;}.desc-header.__jsx-style-dynamic-selector{font-weight:bolder;text-transform:capitalize;font-size:1.8em;}h2.__jsx-style-dynamic-selector{color:black;font-size:1.5em;font-family:'Livvic',sans-serif;font-weight:200;}h1.__jsx-style-dynamic-selector .close-button.__jsx-style-dynamic-selector{padding-left:1rem;cursor:pointer;color:red;fontWeight:bolder;-webkit-transition:0.1s ease-in;transition:0.1s ease-in;}h1.__jsx-style-dynamic-selector .close-button.__jsx-style-dynamic-selector:hover{-webkit-filter:drop-shadow(0 1px 0 red)  drop-shadow(0 -1px 0 red) drop-shadow(1px 0 0 red) drop-shadow(-1px 0 0 red);filter:drop-shadow(0 1px 0 red)  drop-shadow(0 -1px 0 red) drop-shadow(1px 0 0 red) drop-shadow(-1px 0 0 red);}@media only screen and (max-width:600px){.port-modal.__jsx-style-dynamic-selector{height:50vh;margin-top:-25vh;width:95vw;margin-left:-47.5vw;}h1.__jsx-style-dynamic-selector{font-size:1em;}h2.__jsx-style-dynamic-selector{font-size:1em;}.desc-panel.__jsx-style-dynamic-selector{padding:0.5em;}.desc-header.__jsx-style-dynamic-selector{font-size:1.5em;}}@media only screen and (device-width:768px),only screen and (device-width:1024px){.port-modal.__jsx-style-dynamic-selector{height:50vh;margin-top:-25vh;width:95vw;margin-left:-47.5vw;}}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxwcm9qZWN0c1xcbmV3LXBvcnRmb2xpb1xcY29tcG9uZW50c1xcUG9ydE1vZGFsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdCNEIsQUFHOEQsQUFrQjFCLEFBS0YsQUFjYSxBQVNILEFBS1AsQUFNTSxBQVVlLEFBS2pCLEFBTUUsQUFHQSxBQUdBLEFBR0UsQUFNSixTQXJFRSxFQUxOLENBaUNJLEFBcUJLLEFBcUJBLEVBZnJCLEFBR0EsQUFHQSxFQUdBLEVBOUJlLENBWFcsR0FUZixDQWxCTSxJQUtELENBNEJpQixDQXFCbEIsQUFxQkEsSUF4REcsQUFvQlIsSUExREssR0FvQm5CLEFBc0Q0QixBQXFCQSxHQXRFRCxBQWtDTCxFQVh2QixNQVRjLENBdENELFFBQ0MsQUFzQ0UsQUFhSyxBQXNCaEIsQUFxQkEsQ0FoREosQUFZNEIsS0FsQ1IsR0F2QkosRUFzQ0EsS0FhaEIsS0FsRGUsQ0F1QmlDLENBZVosU0FyQ2Qsa0JBQ0QsS0FxQ3JCLEVBa0JBLFFBakNVLEVBckJzQixJQXNCWCxpQkFDUSxPQXRCSSxnQkF1QkgsYUF0QkksYUF1Qm5CLFdBRWYsTUF4QjZDLGNBeUQ3Qyx3QkF4RGUsWUFDVSxxQkFDSywwQkFDVixnQkFDcEIiLCJmaWxlIjoiRDpcXHByb2plY3RzXFxuZXctcG9ydGZvbGlvXFxjb21wb25lbnRzXFxQb3J0TW9kYWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cblxuY2xhc3MgUG9ydE1vZGFsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICAgIHJlbmRlcigpe1xuICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcnQtbW9kYWxcIj5cbiAgICAgICAgICAgICAgICA8aDE+Y2xvc2UgXG4gICAgICAgICAgICAgICAgICAgIDxhIFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdjbG9zZS1idXR0b24nIFxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5wcm9wcy5jbG9zZW1vZGFsfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbeF1cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e3RoaXMucHJvcHMucHJvamVjdGltYWdlfSBjbGFzc05hbWU9XCJwb3J0LWltYWdlXCIvPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVzYy1wYW5lbFwiPlxuICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiZGVzYy1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLnByb2plY3RuYW1lfSBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIHN0eWxlPXt7Zm9udFNpemU6JzcwJScsIGZvbnRXZWlnaHQ6XCJib2xkXCIsIHBhZGRpbmdMZWZ0OiBcIjAuNWVtXCIsIHRleHRUcmFuc2Zvcm06ICdsb3dlcmNhc2UnfX1ocmVmPXt0aGlzLnByb3BzLnByb2plY3RsaW5rfT57dGhpcy5wcm9wcy5wcm9qZWN0bGlua308L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICAgICAgICAgIDxoMj57dGhpcy5wcm9wcy5wcm9qZWN0ZGVzY19zfTwvaDI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgICAgIC5wb3J0LW1vZGFsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICR7dGhpcy5wcm9wcy5tb2RhbHN0YXRlfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA5MHZoO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDcwdnc7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogLTM1dnc7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAtNDV2aDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgYmxhY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBibGFjaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgNXB0IDEwcHQgcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDo5OTk7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBzbGF0ZWdyYXk7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHggNXB4IDAgMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLnBvcnQtaW1hZ2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBoMSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogNXB4IDAgNXB4IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuOGVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdNYWpvciBNb25vIERpc3BsYXknLCBtb25vc3BhY2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGVzbW9rZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYigwLCAyNSwgMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHggNXB4IDAgMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDEwO1xuXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLmRlc2MtcGFuZWwge1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGVzbW9rZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItbGVmdDogNXB0IHNvbGlkIHNsYXRlYmx1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuZGVzYy1oZWFkZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjhlbVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGgyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41ZW07XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ0xpdnZpYycsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogMjAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGgxIC5jbG9zZS1idXR0b24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHJlZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IGJvbGRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuMXMgZWFzZS1pbjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBoMSAuY2xvc2UtYnV0dG9uOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcjogZHJvcC1zaGFkb3coMCAxcHggMCByZWQpIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkcm9wLXNoYWRvdygwIC0xcHggMCByZWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRyb3Atc2hhZG93KDFweCAwIDAgcmVkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkcm9wLXNoYWRvdygtMXB4IDAgMCByZWQpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLnBvcnQtbW9kYWwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNTB2aDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAtMjV2aDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogOTV2dztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogLTQ3LjV2dztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGgxIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDFlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGgyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDFlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5kZXNjLXBhbmVsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLjVlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5kZXNjLWhlYWRlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjVlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKGRldmljZS13aWR0aDogNzY4cHgpLCBvbmx5IHNjcmVlbiBhbmQgKGRldmljZS13aWR0aDogMTAyNHB4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAucG9ydC1tb2RhbCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1MHZoO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IC0yNXZoO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA5NXZ3O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtNDcuNXZ3O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICApXG4gICAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IFBvcnRNb2RhbDsiXX0= */
/*@ sourceURL=D:\projects\new-portfolio\components\PortModal.js */`));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (PortModal);

/***/ }),

/***/ "./components/Portcards/PortCard.js":
/*!******************************************!*\
  !*** ./components/Portcards/PortCard.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Link */ "./components/Link.js");
/* harmony import */ var _PortModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../PortModal */ "./components/PortModal.js");

var _jsxFileName = "D:\\projects\\new-portfolio\\components\\Portcards\\PortCard.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;




class PortCard extends react__WEBPACK_IMPORTED_MODULE_2___default.a.Component {
  constructor(...args) {
    super(...args);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "state", {
      cards: this.props.cardlist,
      cardmodal: "",
      modalvis: 'none'
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "loadModal", card => {
      this.setState({
        cardmodal: card
      });
      this.setState({
        modalvis: 'inline-block'
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "hideModal", () => {
      this.setState({
        modalvis: 'none'
      });
    });
  }

  render() {
    return __jsx("div", {
      className: "jsx-3686956710" + " " + 'cardcontainer',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-3686956710",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, __jsx(_PortModal__WEBPACK_IMPORTED_MODULE_4__["default"], {
      projectname: this.state.cardmodal.header,
      projectimage: this.state.cardmodal.image,
      projectdesc_s: this.state.cardmodal.desc_s,
      projectlink: this.state.cardmodal.href,
      modalstate: this.state.modalvis,
      closemodal: this.hideModal,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    })), this.state.cards.map(card => __jsx(_Link__WEBPACK_IMPORTED_MODULE_3__["default"], {
      href: "#" + card.header.split(" ").join("-"),
      key: card.key,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }, __jsx("div", {
      title: card.header,
      style: {
        backgroundImage: `url(${card.image})`
      },
      onClick: () => this.loadModal(card),
      className: "jsx-3686956710" + " " + "homecard",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, __jsx("h1", {
      className: "jsx-3686956710",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, card.header), __jsx("div", {
      className: "jsx-3686956710" + " " + "hovercontainer",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, __jsx("h2", {
      style: {
        visibility: 'hidden'
      },
      className: "jsx-3686956710",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, __jsx("span", {
      className: "jsx-3686956710",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, card.desc_s)))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "3686956710",
      __self: this
    }, ".cardcontainer.jsx-3686956710{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.homecard.jsx-3686956710{display:block;overflow:hidden;wrap:flex;background:slategray;box-shadow:0 5px 5px slategray;margin:10px;width:437px;height:270px;cursor:-webkit-zoom-in;cursor:-moz-zoom-in;cursor:zoom-in;border-radius:5px 5px 0 0;line-height:240px;background-position:center;background-repeat:no-repeat;background-size:cover;}.homecard.jsx-3686956710:hover{box-shadow:0 5px 5pt slategray;-webkit-transform:scale(1.1);-ms-transform:scale(1.1);transform:scale(1.1);border-bottom:5pt solid white;-webkit-transition:0.3s ease-out;transition:0.3s ease-out;z-index:50;background-position:center;background-repeat:no-repeat;background-size:cover;}.homecard.jsx-3686956710:hover h1.jsx-3686956710{color:rgb(0,25,0);background:whitesmoke;text-shadow:0 0.5px 0 rgb(0,25,0), 0.5px 0 0 rgb(0,25,0), 0 -0.5px 0 rgb(0,25,0), -0.5px 0 0 rgb(0,25,0);}.homecard.jsx-3686956710:hover .hovercontainer.jsx-3686956710{background:rgba(115,124,201,0.8);background-size:cover;}.homecard.jsx-3686956710:hover h2.jsx-3686956710 span.jsx-3686956710{visibility:visible;text-shadow:0pt 1pt 0pt black,0pt 0pt 5pt black;-webkit-filter:none;filter:none;z-index:1;}h1.jsx-3686956710{margin:0;position:relative;text-align:left;padding:5px 0 5px 20px;font-size:1.5em;font-family:'Major Mono Display',monospace;top:0;color:whitesmoke;background:rgb(0,25,0);border-radius:5px 5px 0 0;z-index:10;}h2.jsx-3686956710{color:whitesmoke;font-size:1.5em;font-family:'Livvic',sans-serif;font-weight:200;text-align:center;position:relative;}span.jsx-3686956710{display:inline-block;vertical-align:middle;padding-top:3em;padding-left:1em;padding-right:1em;height:240px;}@media only screen and (max-width:600px){.homecard.jsx-3686956710{height:30vh;}span.jsx-3686956710{padding:2em;}h1.jsx-3686956710{font-size:1em;}h2.jsx-3686956710{font-size:1em;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxwcm9qZWN0c1xcbmV3LXBvcnRmb2xpb1xcY29tcG9uZW50c1xcUG9ydGNhcmRzXFxQb3J0Q2FyZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2QzRCLEFBR3NDLEFBS0MsQUFnQmlCLEFBWVgsQUFTZ0IsQUFJakIsQUFNVixBQWNRLEFBUUksQUFXTCxBQUdBLEFBR0UsQUFHQSxTQXpDQSxHQWlDbEIsQUFHQSxFQW5GZ0IsQUFzRmhCLEFBR0EsR0E1QmdCLENBakNNLENBYTJCLEVBNEIzQixNQXJCTixHQS9DTixDQWVXLEVBcUJDLEFBeUJXLE9BNURaLEFBOEJnQixHQWlCZCxBQXFCUCxZQWhDcEIsSUFpQ3FCLEVBcEVjLElBNERmLENBYkEsQ0FSSixPQS9DRyxFQTZFRyxLQVJBLENBYjBCLFVBL0NoQyxFQXFFQyxLQTlCSCxBQXNCUSxLQTVETixFQVlrQixDQXlEbEMsRUE5QkEsT0F0Q2lCLENBNERqQixRQWRVLElBN0NTLEVBWFEsQUF5RE4sS0FsQ1EsU0FjN0IsR0FxQjZCLHVCQUNDLGdCQS9DQSxPQVlmLEdBb0NBLFFBbENnQixHQW9DL0IsS0FqRHNCLGlCQVp0QixDQWErQixDQWFDLDBCQVpBLEVBYU4sc0JBQzFCLElBYjBCLHNCQUMxQiIsImZpbGUiOiJEOlxccHJvamVjdHNcXG5ldy1wb3J0Zm9saW9cXGNvbXBvbmVudHNcXFBvcnRjYXJkc1xcUG9ydENhcmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnLi4vTGluayc7XG5pbXBvcnQgUG9ydE1vZGFsIGZyb20gJy4uL1BvcnRNb2RhbCdcblxuXG5jbGFzcyBQb3J0Q2FyZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgc3RhdGUgPSB7XG4gICAgICAgIGNhcmRzOiB0aGlzLnByb3BzLmNhcmRsaXN0LFxuICAgICAgICBjYXJkbW9kYWw6IFwiXCIsXG4gICAgICAgIG1vZGFsdmlzOiAnbm9uZSdcblxuICAgIH1cblxuICAgIGxvYWRNb2RhbCA9IChjYXJkKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2NhcmRtb2RhbDogY2FyZH0pXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe21vZGFsdmlzOiAnaW5saW5lLWJsb2NrJ30pXG4gICAgfVxuXG4gICAgaGlkZU1vZGFsID0gKCkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHttb2RhbHZpczogJ25vbmUnfSlcbiAgICB9XG5cbiAgICByZW5kZXIoKXtcbiAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhcmRjb250YWluZXInPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxQb3J0TW9kYWxcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RuYW1lPXt0aGlzLnN0YXRlLmNhcmRtb2RhbC5oZWFkZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0aW1hZ2U9e3RoaXMuc3RhdGUuY2FyZG1vZGFsLmltYWdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdGRlc2Nfcz17dGhpcy5zdGF0ZS5jYXJkbW9kYWwuZGVzY19zfVxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdGxpbms9e3RoaXMuc3RhdGUuY2FyZG1vZGFsLmhyZWZ9XG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RhbHN0YXRlPXt0aGlzLnN0YXRlLm1vZGFsdmlzfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xvc2Vtb2RhbD17dGhpcy5oaWRlTW9kYWx9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuY2FyZHMubWFwKChjYXJkKSA9PlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtcIiNcIiArIGNhcmQuaGVhZGVyLnNwbGl0KFwiIFwiKS5qb2luKFwiLVwiKX0ga2V5PXtjYXJkLmtleX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvbWVjYXJkXCIgdGl0bGU9e2NhcmQuaGVhZGVyfSBzdHlsZT17e2JhY2tncm91bmRJbWFnZTogYHVybCgke2NhcmQuaW1hZ2V9KWB9fSBvbkNsaWNrPXsoKSA9PiB0aGlzLmxvYWRNb2RhbChjYXJkKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxPntjYXJkLmhlYWRlcn08L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaG92ZXJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIHN0eWxlPXt7dmlzaWJpbGl0eTonaGlkZGVuJ319PjxzcGFuPntjYXJkLmRlc2Nfc308L3NwYW4+PC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgICAgIC5jYXJkY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuaG9tZWNhcmQge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICAgICAgICAgICAgd3JhcDogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHNsYXRlZ3JheTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgNXB4IDVweCBzbGF0ZWdyYXk7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDM3cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDI3MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiB6b29tLWluO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4IDVweCAwIDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjQwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLmhvbWVjYXJkOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgNXB4IDVwdCBzbGF0ZWdyYXk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiA1cHQgc29saWQgd2hpdGU7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuM3MgZWFzZS1vdXQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiA1MDtcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyOyBcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7IFxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLmhvbWVjYXJkOmhvdmVyIGgxIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiByZ2IoMCwgMjUsIDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGVzbW9rZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiAwIDAuNXB4IDAgcmdiKDAsIDI1LCAwKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMC41cHggMCAwIHJnYigwLCAyNSwgMCksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDAgLTAuNXB4IDAgcmdiKDAsIDI1LCAwKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLTAuNXB4IDAgMCByZ2IoMCwgMjUsIDApOyAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5ob21lY2FyZDpob3ZlciAuaG92ZXJjb250YWluZXJ7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDExNSwgMTI0LCAyMDEsIDAuOCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5ob21lY2FyZDpob3ZlciBoMiBzcGFuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogMHB0IDFwdCAwcHQgYmxhY2ssIDBwdCAwcHQgNXB0IGJsYWNrO1xuICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBoMSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogNXB4IDAgNXB4IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNWVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdNYWpvciBNb25vIERpc3BsYXknLCBtb25vc3BhY2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGVzbW9rZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYigwLCAyNSwgMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHggNXB4IDAgMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDEwO1xuXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaDIge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlc21va2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNWVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdMaXZ2aWMnLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogM2VtO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxZW07XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxZW07XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDI0MHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAuaG9tZWNhcmQge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzB2aDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGgxIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDFlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGgyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDFlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQb3J0Q2FyZDsiXX0= */\n/*@ sourceURL=D:\\projects\\new-portfolio\\components\\Portcards\\PortCard.js */"));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (PortCard);

/***/ }),

/***/ "./components/Portcards/cardlist.js":
/*!******************************************!*\
  !*** ./components/Portcards/cardlist.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const portcards = {
  major: [{
    header: "hot drop",
    image: "../../static/portfolio/portfolio6.jpg",
    href: "https://www.hotdrop.games/",
    desc_s: "A proof of concept video game search, news, and video website.",
    key: 1
  }, {
    header: "duckery",
    image: "../static/portfolio/portfolio11.jpg",
    href: "https://duckery.herokuapp.com/",
    desc_s: "A character creator for an... attempted site.",
    key: 2
  }],
  minor: [{
    header: "hangman",
    image: "../../static/portfolio/portfolio1.jpg",
    href: "https://robwbutler.github.io/Word-Guess-Game",
    desc_s: "A rough hangman game. One of my first projects.",
    key: 3
  }, {
    header: "mario rpg",
    image: "../../static/portfolio/portfolio2.jpg",
    href: "https://robwbutler.github.io/unit-4-game",
    desc_s: "A simple RPG made entirely with JS.",
    key: 4
  }, {
    header: "trivia",
    image: "../../static/portfolio/portfolio3.jpg",
    href: "https://robwbutler.github.io/TriviaGame",
    desc_s: "A trivia game based on paleontology and human evolution.",
    key: 5
  }, {
    header: "giphy",
    image: "../../static/portfolio/portfolio4.jpg",
    href: "https://robwbutler.github.io/giphy/giphy.html",
    desc_s: "A simple Giphy API search app.",
    key: 6
  }, {
    header: "train schedule",
    image: "../../static/portfolio/portfolio5.jpg",
    href: "https://robwbutler.github.io/Train-Schedule/",
    desc_s: "Using Google Firebase to search and add things to a database.",
    key: 7
  }, {
    header: "liri",
    image: "../../static/portfolio/portfolio7.jpg",
    href: "https://github.com/RobWButler/liri-node-app",
    desc_s: "A Node command line app for searching media.",
    key: 8
  }, {
    header: "bamazon",
    image: "../static/portfolio/portfolio8.jpg",
    href: "https://github.com/RobWButler/bamazon",
    desc_s: "A proof of concept command line inventory management app.",
    key: 9
  }, {
    header: "friend finder",
    image: "../static/portfolio/portfolio9.jpg",
    href: "https://young-crag-32749.herokuapp.com/",
    desc_s: "A simple quiz and match.",
    key: 10
  }, {
    header: "eat the burger",
    image: "../static/portfolio/portfolio10.jpg",
    href: "https://rocky-caverns-81386.herokuapp.com/",
    desc_s: "A database and templating app.",
    key: 11
  }, {
    header: "clicky game",
    image: "../static/portfolio/portfolio12.jpg",
    href: "https://robwbutler.github.io/clickygame/",
    desc_s: "A simple clicking game made in React.",
    key: 12
  }, {
    header: "google books reader",
    image: "../static/portfolio/portfolio13.jpg",
    href: "https://radiant-eyrie-63694.herokuapp.com/",
    desc_s: "A React based site for searching for books and adding them to a reading list.",
    key: 13
  }]
};
/* harmony default export */ __webpack_exports__["default"] = (portcards);

/***/ }),

/***/ "./layouts/main.js":
/*!*************************!*\
  !*** ./layouts/main.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "D:\\projects\\new-portfolio\\layouts\\main.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



const Page = () => {
  return __jsx("div", {
    className: "jsx-2556559940",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, __jsx("a", {
    name: "top",
    className: "jsx-2556559940",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }), __jsx("meta", {
    name: "viewport",
    content: "width=device-width, height=device-height, initial-scale=1.0, user-scalable=0, minimum-scale=1.0, maximum-scale=1.0",
    key: "viewport",
    className: "jsx-2556559940",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }), __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, __jsx("title", {
    className: "jsx-2556559940",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, "Robert Butler Web Design"), __jsx("link", {
    rel: "stylesheet",
    href: "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css",
    integrity: "sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T",
    crossorigin: "anonymous",
    className: "jsx-2556559940",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }), __jsx("link", {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css?family=Livvic:200,400|Major+Mono+Display|Nova+Mono|Share+Tech+Mono&display=swap",
    className: "jsx-2556559940",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2556559940",
    __self: undefined
  }, "html{background:linear-gradient(90deg,rgb(0,0,15) -75%,whitesmoke 25% 75%,rgb(0,0,15) 175%);height:100;-webkit-flex:1;-ms-flex:1;flex:1;}body{background:transparent;}.jumbotron{position:fixed;background:black;color:white;float:left;width:auto;margin:2rem;box-shadow:0 5px 5pt darkslateblue;border-radius:0;border-top:5pt solid slateblue;z-index:999;}.jumbohead{background:darkslateblue;color:whitesmoke;font-size:28px;font-family:'Major Mono Display',monospace;font-weight:bold;padding:0.5rem;text-align:center;position:relative;}.jumbolink{color:slateblue;font-size:20px;font-family:'Major Mono Display',monospace;font-weight:600;cursor:pointer;-webkit-transition:0.05s linear;transition:0.05s linear;}.jumbolink:hover{color:skyblue;border-left:5pt solid slateblue;padding-left:1pt;}.current{color:black;background:whitesmoke;cursor:default;border-left:5pt solid slateblue;padding-left:1pt;}.current:hover{color:black;}.content{padding:10pt;border-top:25pt solid rgb(0,25,0);background:darkturquoise;box-shadow:0 5px 5pt slategray;border-radius:5px 5px 0 0;color:whitesmoke;margin-bottom:10pt;width:100%;float:right;}@media only screen and (max-width:600px){.jumbotron{position:fixed;top:0;z-index:9999;float:none;width:100%;padding:0 0 5pt 0;margin:0;box-shadow:0 0 0;}.jumbolink{padding:5pt;font-size:90%;font-weight:600;float:left;-webkit-flex:1;-ms-flex:1;flex:1;margin-left:1rem;}.container{float:left;}.content{margin-top:10vh;width:100%;}}@media only screen and (device-width:768px),only screen and (device-width:1024px){.jumbotron{position:fixed;top:0;z-index:9999;float:none;width:100%;padding:0 0 5pt 0;margin:0;box-shadow:0 0 0;}.jumbolink{padding:5pt;font-size:120%;font-weight:600;float:left;-webkit-flex:1;-ms-flex:1;flex:1;margin-left:1rem;}.content{margin-top:10vh;width:100%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxwcm9qZWN0c1xcbmV3LXBvcnRmb2xpb1xcbGF5b3V0c1xcbWFpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrQitCLEFBR21ILEFBS3ZFLEFBR1IsQUFZVSxBQVVULEFBU0YsQUFLRixBQU9BLEFBR0MsQUFhTSxBQVVILEFBUUQsQUFHSyxBQU9ELEFBVUgsQUFRSSxXQTNCcEIsQ0F6Q3NCLEFBTzFCLEFBMEJzQixBQTRCQyxDQW5EaUIsQ0FmSixDQS9CZixBQTJEUCxBQTRCQSxDQWpFSyxBQTBEQSxBQXlCQSxLQTdDRSxBQTRCQSxFQTNGckIsRUFlcUIsQ0EwREcsQ0FXcEIsQUFpQm9CLEFBUXBCLElBbkY0QyxDQXRCaEMsRUFvQ0csQUF3QkEsQUE0QkEsUUE1RUEsQUEwREEsQ0E0QkEsQ0FqR0osQ0E0REksQUE0QkEsQ0ExREUsQ0FlUSxFQVRPLElBa0NyQixDQTRCQSxDQWpHQSxDQTREVyxBQTRCQSxDQTdFc0IsTUFtQmhELEdBN0JnQixNQTRDbUIsRUF4QmYsQUF3Q0gsQUE0QkEsSUF2RnNCLEdBa0NsQixFQTBCSSxBQTRCQSxHQXBCQSxDQWpGVixBQTZHVSxHQTVFTixRQWhDUixBQStDWCxFQXpCcUIsQUFtRGpCLEFBNEJBLEdBN0MwQixBQXlCMUIsQ0E0QkEsQ0EzRXdCLFFBckJSLElBVUQsWUFUZ0IsQUEyQ2QsRUF4RHJCLENBdUJzQixjQWtDQyxJQWpDRCxVQVZOLENBb0JoQixJQXdCZSxHQWpDZixJQVZBLElBNENnQixZQUNoQiIsImZpbGUiOiJEOlxccHJvamVjdHNcXG5ldy1wb3J0Zm9saW9cXGxheW91dHNcXG1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcblxuY29uc3QgUGFnZSA9ICgpID0+IHtcbiAgIHJldHVybiggIFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGEgbmFtZT1cInRvcFwiPjwvYT5cbiAgICAgICAgICAgIDxtZXRhXG4gICAgICAgICAgICAgICAgbmFtZT1cInZpZXdwb3J0XCJcbiAgICAgICAgICAgICAgICBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBoZWlnaHQ9ZGV2aWNlLWhlaWdodCwgaW5pdGlhbC1zY2FsZT0xLjAsIHVzZXItc2NhbGFibGU9MCwgbWluaW11bS1zY2FsZT0xLjAsIG1heGltdW0tc2NhbGU9MS4wXCJcbiAgICAgICAgICAgICAgICBrZXk9XCJ2aWV3cG9ydFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICAgICAgPHRpdGxlPlJvYmVydCBCdXRsZXIgV2ViIERlc2lnbjwvdGl0bGU+XG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL3N0YWNrcGF0aC5ib290c3RyYXBjZG4uY29tL2Jvb3RzdHJhcC80LjMuMS9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIiBpbnRlZ3JpdHk9XCJzaGEzODQtZ2dPeVIwaVhDYk1RdjNYaXBtYTM0TUQrZEgvMWZRNzg0L2o2Y1kvaUpUUVVPaGNXcjd4OUp2b1J4VDJNWncxVFwiIGNyb3Nzb3JpZ2luPVwiYW5vbnltb3VzXCI+PC9saW5rPlxuICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUxpdnZpYzoyMDAsNDAwfE1ham9yK01vbm8rRGlzcGxheXxOb3ZhK01vbm98U2hhcmUrVGVjaCtNb25vJmRpc3BsYXk9c3dhcFwiPjwvbGluaz5cbiAgICAgICAgICAgIDwvSGVhZD5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgICAgICAgICBodG1sIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2IoMCwgMCwgMTUpIC03NSUsIHdoaXRlc21va2UgMjUlIDc1JSwgcmdiKDAsIDAsIDE1KSAxNzUlKTtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDA7XG4gICAgICAgICAgICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJvZHkge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmp1bWJvdHJvbiB7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogYmxhY2s7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDJyZW07XG4gICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgNXB4IDVwdCBkYXJrc2xhdGVibHVlO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItdG9wOiA1cHQgc29saWQgc2xhdGVibHVlO1xuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiA5OTk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5qdW1ib2hlYWQge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBkYXJrc2xhdGVibHVlO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGVzbW9rZTtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyOHB4O1xuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ01ham9yIE1vbm8gRGlzcGxheScsIG1vbm9zcGFjZTtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAuNXJlbTtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5qdW1ib2xpbmsge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogc2xhdGVibHVlO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnTWFqb3IgTW9ubyBEaXNwbGF5JywgbW9ub3NwYWNlO1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMC4wNXMgbGluZWFyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuanVtYm9saW5rOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHNreWJsdWU7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1sZWZ0OiA1cHQgc29saWQgc2xhdGVibHVlO1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDFwdDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmN1cnJlbnQge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlc21va2U7XG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDVwdCBzb2xpZCBzbGF0ZWJsdWU7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMXB0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuY3VycmVudDpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmNvbnRlbnQge1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB0O1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItdG9wOiAyNXB0IHNvbGlkIHJnYigwLCAyNSwgMCk7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGRhcmt0dXJxdW9pc2U7XG4gICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgNXB4IDVwdCBzbGF0ZWdyYXk7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweCA1cHggMCAwO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGVzbW9rZTtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBwdDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgICAgICAgICAgICAgICAgIC5qdW1ib3Ryb24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogOTk5OTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsb2F0OiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDAgNXB0IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuanVtYm9saW5rIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVwdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogOTAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgICAgICAgICAgICAgICAgZmxleDogMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLmNvbnRlbnQge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTB2aDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAoZGV2aWNlLXdpZHRoOiA3NjhweCksIG9ubHkgc2NyZWVuIGFuZCAoZGV2aWNlLXdpZHRoOiAxMDI0cHgpIHtcbiAgICAgICAgICAgICAgICAgICAgLmp1bWJvdHJvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiA5OTk5O1xuICAgICAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMCA1cHQgMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5qdW1ib2xpbmsge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogNXB0O1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMjAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgICAgICAgICAgICAgICAgZmxleDogMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5jb250ZW50IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwdmg7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvZGl2PlxuKSAgIFxufVxuXG5leHBvcnQgZGVmYXVsdCBQYWdlOyJdfQ== */\n/*@ sourceURL=D:\\projects\\new-portfolio\\layouts\\main.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Page);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/map.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/map.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/map */ "core-js/library/fn/map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/extends.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/extends.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__(/*! ../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

function _extends() {
  module.exports = _extends = _Object$assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = _Object$defineProperty && _Object$getOwnPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            _Object$defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _map = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/map */ "./node_modules/@babel/runtime-corejs2/core-js/map.js"));

var _url = __webpack_require__(/*! url */ "url");

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _rewriteUrlForExport = __webpack_require__(/*! next-server/dist/lib/router/rewrite-url-for-export */ "next-server/dist/lib/router/rewrite-url-for-export");

var _utils = __webpack_require__(/*! next-server/dist/lib/utils */ "next-server/dist/lib/utils");
/* global __NEXT_DATA__ */


function isLocal(href) {
  const url = (0, _url.parse)(href, false, true);
  const origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  let lastHref = null;
  let lastAs = null;
  let lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    const result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

let observer;
const listeners = new _map.default();
const IntersectionObserver = false ? undefined : null;

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    observer.unobserve(el);
    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      // @ts-ignore target exists on currentTarget
      const {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      let {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      const {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      let {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      this.cleanUpListeners = listenToIntersections(ref, () => {
        this.prefetch();
      });
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch() {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    const {
      pathname
    } = window.location;
    const {
      href: parsedHref
    } = this.formatUrls(this.props.href, this.props.as);
    const href = (0, _url.resolve)(pathname, parsedHref);

    _router.default.prefetch(href);
  }

  render() {
    let {
      children
    } = this.props;
    const {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    const child = _react.Children.only(children);

    const props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch();
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

    };

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) {}

    return _react.default.cloneElement(child, props);
  }

}

Link.propTypes = void 0;

if (true) {
  const warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  const exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]).isRequired,
    as: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
    prefetch: _propTypes.default.bool,
    replace: _propTypes.default.bool,
    shallow: _propTypes.default.bool,
    passHref: _propTypes.default.bool,
    scroll: _propTypes.default.bool,
    children: _propTypes.default.oneOfType([_propTypes.default.element, (props, propName) => {
      const value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _defineProperty = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! next-server/dist/lib/router/router */ "next-server/dist/lib/router/router"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! next-server/dist/lib/router-context */ "next-server/dist/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

(0, _defineProperty.default)(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  (0, _defineProperty.default)(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    const router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      const eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = (0, _extends2.default)({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

function withRouter(ComposedComponent) {
  class WithRouteWrapper extends _react.default.Component {
    constructor() {
      super(...arguments);
      this.context = void 0;
    }

    render() {
      return _react.default.createElement(ComposedComponent, (0, _extends2.default)({
        router: this.context.router
      }, this.props));
    }

  }

  WithRouteWrapper.displayName = void 0;
  WithRouteWrapper.getInitialProps = void 0;
  WithRouteWrapper.contextTypes = {
    router: _propTypes.default.object
  };
  WithRouteWrapper.getInitialProps = ComposedComponent.getInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouteWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouteWrapper;
}

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/portfolio.js":
/*!****************************!*\
  !*** ./pages/portfolio.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Link */ "./components/Link.js");
/* harmony import */ var _layouts_main__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../layouts/main */ "./layouts/main.js");
/* harmony import */ var _components_Portcards_PortCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Portcards/PortCard */ "./components/Portcards/PortCard.js");
/* harmony import */ var _components_Portcards_cardlist__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Portcards/cardlist */ "./components/Portcards/cardlist.js");

var _jsxFileName = "D:\\projects\\new-portfolio\\pages\\portfolio.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;






class Portfolio extends react__WEBPACK_IMPORTED_MODULE_2___default.a.Component {
  constructor(...args) {
    super(...args);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "state", {
      cards: _components_Portcards_cardlist__WEBPACK_IMPORTED_MODULE_6__["default"]
    });
  }

  render() {
    return __jsx("div", {
      className: "jsx-2846999522",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, __jsx(_layouts_main__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }), __jsx("div", {
      className: "jsx-2846999522" + " " + "jumbotron",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, __jsx("h2", {
      className: "jsx-2846999522" + " " + "jumbohead",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, "portfolio"), __jsx(_components_Link__WEBPACK_IMPORTED_MODULE_3__["default"], {
      href: "/about",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, __jsx("h2", {
      className: "jsx-2846999522" + " " + "jumbolink",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, "about")), __jsx(_components_Link__WEBPACK_IMPORTED_MODULE_3__["default"], {
      href: "#top",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, __jsx("h2", {
      className: "jsx-2846999522" + " " + "jumbolink current",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, "portfolio")), __jsx(_components_Link__WEBPACK_IMPORTED_MODULE_3__["default"], {
      href: "/contact",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, __jsx("h2", {
      className: "jsx-2846999522" + " " + "jumbolink",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, "contact"))), __jsx("div", {
      className: "jsx-2846999522" + " " + "container mt-5",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-2846999522" + " " + "content",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-2846999522" + " " + "port-section",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, __jsx("h2", {
      className: "jsx-2846999522",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, "major projects"), __jsx(_components_Portcards_PortCard__WEBPACK_IMPORTED_MODULE_5__["default"], {
      cardlist: this.state.cards.major,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    })), __jsx("div", {
      className: "jsx-2846999522" + " " + "port-section",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, __jsx("h2", {
      className: "jsx-2846999522",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, "other"), __jsx(_components_Portcards_PortCard__WEBPACK_IMPORTED_MODULE_5__["default"], {
      cardlist: this.state.cards.minor,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "2846999522",
      __self: this
    }, ".content.jsx-2846999522 h2.jsx-2846999522{background:darkslateblue;color:whitesmoke;font-size:28px;font-family:'Major Mono Display',monospace;font-weight:bold;padding:0.5rem;text-align:left;}.port-section.jsx-2846999522{margin-bottom:1rem;}.port-section.jsx-2846999522:hover h2.jsx-2846999522{border-left:5pt solid slateblue;color:darkslateblue;background:whitesmoke;text-shadow:0 0.5px 0 darkslateblue, 0.5px 0 0 darkslateblue, 0 -0.5px 0 darkslateblue, -0.5px 0 0 darkslateblue;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxwcm9qZWN0c1xcbmV3LXBvcnRmb2xpb1xccGFnZXNcXHBvcnRmb2xpby5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1Q29CLEFBR3NDLEFBU04sQUFHYSxtQkFGbEMsTUFUbUIsT0FZRyxVQVhMLFVBWU8sS0FYc0IsaUJBZU4sMEJBZHJCLGlCQUNGLGVBQ0MsZ0JBQ2xCLHVDQVlBIiwiZmlsZSI6IkQ6XFxwcm9qZWN0c1xcbmV3LXBvcnRmb2xpb1xccGFnZXNcXHBvcnRmb2xpby5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBMaW5rIGZyb20gJy4uL2NvbXBvbmVudHMvTGluayc7XG5pbXBvcnQgUGFnZSBmcm9tICcuLi9sYXlvdXRzL21haW4nO1xuaW1wb3J0IFBvcnRDYXJkIGZyb20gJy4uL2NvbXBvbmVudHMvUG9ydGNhcmRzL1BvcnRDYXJkJ1xuaW1wb3J0IENhcmRsaXN0IGZyb20gXCIuLi9jb21wb25lbnRzL1BvcnRjYXJkcy9jYXJkbGlzdFwiO1xuXG5jbGFzcyBQb3J0Zm9saW8gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0ZSA9IHtcbiAgICBjYXJkczogQ2FyZGxpc3RcbiAgfVxuICBcbiAgcmVuZGVyKCl7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxQYWdlLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJqdW1ib3Ryb25cIj5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwianVtYm9oZWFkXCI+cG9ydGZvbGlvPC9oMj5cbiAgICAgICAgICA8TGluayBocmVmPVwiL2Fib3V0XCI+PGgyIGNsYXNzTmFtZT1cImp1bWJvbGlua1wiPmFib3V0PC9oMj48L0xpbms+IFxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIjdG9wXCI+PGgyIGNsYXNzTmFtZT1cImp1bWJvbGluayBjdXJyZW50XCI+cG9ydGZvbGlvPC9oMj48L0xpbms+XG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9jb250YWN0XCI+PGgyIGNsYXNzTmFtZT1cImp1bWJvbGlua1wiPmNvbnRhY3Q8L2gyPjwvTGluaz5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXQtNVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3J0LXNlY3Rpb25cIj5cbiAgICAgICAgICAgICAgICA8aDI+bWFqb3IgcHJvamVjdHM8L2gyPlxuICAgICAgICAgICAgICA8UG9ydENhcmRcbiAgICAgICAgICAgICAgICBjYXJkbGlzdD17dGhpcy5zdGF0ZS5jYXJkcy5tYWpvcn0vPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9ydC1zZWN0aW9uXCI+XG4gICAgICAgICAgICAgIDxoMj5vdGhlcjwvaDI+XG4gICAgICAgICAgICAgIDxQb3J0Q2FyZFxuICAgICAgICAgICAgICAgIGNhcmRsaXN0PXt0aGlzLnN0YXRlLmNhcmRzLm1pbm9yfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAuY29udGVudCBoMiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBkYXJrc2xhdGVibHVlO1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlc21va2U7XG4gICAgICAgICAgICBmb250LXNpemU6IDI4cHg7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJ01ham9yIE1vbm8gRGlzcGxheScsIG1vbm9zcGFjZTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgcGFkZGluZzogMC41cmVtO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnBvcnQtc2VjdGlvbiB7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgICAgICAgIH1cbiAgICAgICAgICAucG9ydC1zZWN0aW9uOmhvdmVyIGgyIHtcbiAgICAgICAgICAgIGJvcmRlci1sZWZ0OiA1cHQgc29saWQgc2xhdGVibHVlO1xuICAgICAgICAgICAgY29sb3I6IGRhcmtzbGF0ZWJsdWU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZXNtb2tlO1xuICAgICAgICAgICAgdGV4dC1zaGFkb3c6ICAwIDAuNXB4IDAgZGFya3NsYXRlYmx1ZSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDAuNXB4IDAgMCBkYXJrc2xhdGVibHVlLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMCAtMC41cHggMCBkYXJrc2xhdGVibHVlLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLTAuNXB4IDAgMCBkYXJrc2xhdGVibHVlOyAgICBcbiAgICAgICAgICB9XG4gICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBvcnRmb2xpb1xuIl19 */\n/*@ sourceURL=D:\\projects\\new-portfolio\\pages\\portfolio.js */"));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Portfolio);

/***/ }),

/***/ 6:
/*!**********************************!*\
  !*** multi ./pages/portfolio.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\projects\new-portfolio\pages\portfolio.js */"./pages/portfolio.js");


/***/ }),

/***/ "core-js/library/fn/map":
/*!*****************************************!*\
  !*** external "core-js/library/fn/map" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/map");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "next-server/config":
/*!*************************************!*\
  !*** external "next-server/config" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/config");

/***/ }),

/***/ "next-server/dist/lib/router-context":
/*!******************************************************!*\
  !*** external "next-server/dist/lib/router-context" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router-context");

/***/ }),

/***/ "next-server/dist/lib/router/rewrite-url-for-export":
/*!*********************************************************************!*\
  !*** external "next-server/dist/lib/router/rewrite-url-for-export" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router/rewrite-url-for-export");

/***/ }),

/***/ "next-server/dist/lib/router/router":
/*!*****************************************************!*\
  !*** external "next-server/dist/lib/router/router" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router/router");

/***/ }),

/***/ "next-server/dist/lib/utils":
/*!*********************************************!*\
  !*** external "next-server/dist/lib/utils" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=portfolio.js.map