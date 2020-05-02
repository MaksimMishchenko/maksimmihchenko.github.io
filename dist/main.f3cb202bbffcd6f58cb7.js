/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/render-cards.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/render-cards.js":
/*!****************************!*\
  !*** ./js/render-cards.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_site_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/site.scss */ \"./scss/site.scss\");\n/* harmony import */ var _scss_site_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_site_scss__WEBPACK_IMPORTED_MODULE_0__);\n\r\n\r\n\r\nwindow.addEventListener('load', () => {\r\n\r\n\r\n    function renderCard(obj, selector) {\r\n\r\n        sendRequest(\"GET\", \"/dist/assets/html-templates/project-card.html\")\r\n        .then(response => {\r\n            let template = Handlebars.compile(response)(obj);\r\n\r\n            document.querySelector(\"#for-template\").innerHTML = template;\r\n        });\r\n\r\n    }\r\n\r\n   \r\n    function sendRequest(method, url, body = null) {\r\n\r\n        return new Promise((resolve, reject) => {\r\n\r\n            let xhr = new XMLHttpRequest();\r\n\r\n            xhr.open(method, url);\r\n            xhr.setRequestHeader(\"Content-Type\", \"application/json\");\r\n\r\n            xhr.onload = () => {\r\n                if(xhr.status >= 400) {\r\n                    reject(xhr.response);\r\n                } else {\r\n                    resolve(xhr.response);\r\n                }\r\n            }\r\n\r\n            xhr.onerror = () => {\r\n                reject(xhr.response);\r\n            }\r\n\r\n            xhr.send(JSON.stringify(body));\r\n        });\r\n    }\r\n\r\n    sendRequest(\"GET\", \"/dist/assets/myDB/cardsinfo.json\")\r\n    .then(data => {\r\n        renderCard(JSON.parse(data), \"#for-template\");\r\n    })\r\n    .catch(err => console.log(err));\r\n\r\n    \r\n\r\n   \r\n\r\n\r\n   \r\n\r\n\r\n});\n\n//# sourceURL=webpack:///./js/render-cards.js?");

/***/ }),

/***/ "./scss/site.scss":
/*!************************!*\
  !*** ./scss/site.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./scss/site.scss?");

/***/ })

/******/ });