/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style/index.scss */ \"./style/index.scss\");\n/* harmony import */ var _assets_logo_w_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/logo-w.png */ \"./assets/logo-w.png\");\n/* harmony import */ var _assets_logo_g_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/logo-g.png */ \"./assets/logo-g.png\");\n/* harmony import */ var _assets_instagram_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/instagram.png */ \"./assets/instagram.png\");\n/* harmony import */ var _assets_telegram_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/telegram.png */ \"./assets/telegram.png\");\n/* harmony import */ var _assets_whatsapp_header_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/whatsapp-header.png */ \"./assets/whatsapp-header.png\");\n/* harmony import */ var _assets_whatsapp_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/whatsapp.png */ \"./assets/whatsapp.png\");\n/* harmony import */ var _assets_doctor_working_table_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/doctor-working-table.png */ \"./assets/doctor-working-table.png\");\n/* harmony import */ var _assets_trapezoid_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../assets/trapezoid.png */ \"./assets/trapezoid.png\");\n/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./slider */ \"./src/slider.js\");\n/* harmony import */ var _mobile_burger__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./mobile-burger */ \"./src/mobile-burger.js\");\n\n\n\n\n\n\n\n\n\n\n\nnew _slider__WEBPACK_IMPORTED_MODULE_9__.Slider(document.querySelector('.slider')).start();\nnew _mobile_burger__WEBPACK_IMPORTED_MODULE_10__.MobileBurger(document.querySelector('.header__burger'), document.querySelector('.mobile-navigation'), 'header__burger_open', 'mobile-navigation_open');\n\n//# sourceURL=webpack://my-webpack-project/./src/index.js?");

/***/ }),

/***/ "./src/mobile-burger.js":
/*!******************************!*\
  !*** ./src/mobile-burger.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   MobileBurger: () => (/* binding */ MobileBurger)\n/* harmony export */ });\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\nvar MobileBurger = /*#__PURE__*/function () {\n  function MobileBurger(burgerBtn, el, classNameBtn, classNameEl) {\n    _classCallCheck(this, MobileBurger);\n    _defineProperty(this, \"_burgerButton\", null);\n    _defineProperty(this, \"_mobileOpenEl\", null);\n    _defineProperty(this, \"_toggleBtnClass\", null);\n    _defineProperty(this, \"_toggleElClass\", null);\n    this._burgerButton = burgerBtn;\n    this._mobileOpenEl = el;\n    this._toggleBtnClass = classNameBtn;\n    this._toggleElClass = classNameEl;\n    this.initEvents();\n  }\n  return _createClass(MobileBurger, [{\n    key: \"initEvents\",\n    value: function initEvents() {\n      var _this = this;\n      this._burgerButton.addEventListener('click', function () {\n        _this._mobileOpenEl.classList.toggle(_this._toggleElClass);\n        _this._burgerButton.classList.toggle(_this._toggleBtnClass);\n      });\n    }\n  }]);\n}();\n\n//# sourceURL=webpack://my-webpack-project/./src/mobile-burger.js?");

/***/ }),

/***/ "./src/slider.js":
/*!***********************!*\
  !*** ./src/slider.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Slider: () => (/* binding */ Slider)\n/* harmony export */ });\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\nvar Slider = /*#__PURE__*/function () {\n  function Slider(root) {\n    _classCallCheck(this, Slider);\n    _defineProperty(this, \"_sliderRoot\", null);\n    _defineProperty(this, \"_itemsList\", null);\n    _defineProperty(this, \"_sliderPages\", null);\n    _defineProperty(this, \"_leftArrow\", null);\n    _defineProperty(this, \"_rightArrow\", null);\n    _defineProperty(this, \"_INDEX_ATTR\", 'data-slider-item-index');\n    _defineProperty(this, \"_ACTIVE_ATTR\", 'data-slider-item-active');\n    this._sliderRoot = root;\n    this._itemsList = this._sliderRoot.querySelector('.slider__items');\n    this._sliderPages = this._sliderRoot.querySelector('.slider__pages');\n    this._leftArrow = this._sliderRoot.querySelector('.slider__arrow_left');\n    this._rightArrow = this._sliderRoot.querySelector('.slider__arrow_right');\n  }\n  return _createClass(Slider, [{\n    key: \"getActiveElement\",\n    value: function getActiveElement() {\n      var el = this._itemsList.querySelector(\"[\".concat(this._ACTIVE_ATTR, \"]\"));\n      return {\n        element: el,\n        index: Number(el.getAttribute(this._INDEX_ATTR))\n      };\n    }\n  }, {\n    key: \"setNextEl\",\n    value: function setNextEl(oldIndex, nextIndex) {\n      var nextEl = this._itemsList.querySelector(\"[\".concat(this._INDEX_ATTR, \"=\\\"\").concat(nextIndex, \"\\\"]\"));\n      var old = this._itemsList.querySelector(\"[\".concat(this._INDEX_ATTR, \"=\\\"\").concat(oldIndex, \"\\\"]\"));\n      old.removeAttribute(this._ACTIVE_ATTR);\n      nextEl.setAttribute(this._ACTIVE_ATTR, true);\n    }\n  }, {\n    key: \"onLeft\",\n    value: function onLeft() {\n      var _this$getActiveElemen = this.getActiveElement(),\n        element = _this$getActiveElemen.element,\n        index = _this$getActiveElemen.index;\n      var nextI = index;\n      if (index === 0) {\n        nextI = this._itemsList.children.length - 1;\n      } else {\n        nextI -= 1;\n      }\n      this.setNextEl(index, nextI);\n    }\n  }, {\n    key: \"onRight\",\n    value: function onRight() {\n      var _this$getActiveElemen2 = this.getActiveElement(),\n        element = _this$getActiveElemen2.element,\n        index = _this$getActiveElemen2.index;\n      var nextI = index;\n      if (index === this._itemsList.children.length - 1) {\n        nextI = 0;\n      } else {\n        nextI += 1;\n      }\n      this.setNextEl(index, nextI);\n    }\n  }, {\n    key: \"initItems\",\n    value: function initItems() {\n      var items = this._itemsList.children;\n      for (var i = 0; i < items.length; ++i) {\n        items[i].setAttribute(this._INDEX_ATTR, i);\n        if (i === 0) {\n          items[i].setAttribute(this._ACTIVE_ATTR, true);\n        }\n      }\n    }\n  }, {\n    key: \"initPagination\",\n    value: function initPagination() {\n      var currentNumEl = this._sliderPages.querySelector('[data-slider-current-page]');\n      var totalPagesEl = this._sliderPages.querySelector('[data-slider-total-pages]');\n      currentNumEl.innerHTML = this.getActiveElement().index + 1;\n      totalPagesEl.innerHTML = \"/\".concat(this._itemsList.children.length);\n    }\n  }, {\n    key: \"updPage\",\n    value: function updPage() {\n      var currentNumEl = this._sliderPages.querySelector('[data-slider-current-page]');\n      currentNumEl.innerHTML = this.getActiveElement().index + 1;\n    }\n  }, {\n    key: \"initEvents\",\n    value: function initEvents() {\n      var _this = this;\n      this._leftArrow.addEventListener('click', function () {\n        _this.onLeft();\n        _this.updPage();\n      });\n      this._rightArrow.addEventListener('click', function () {\n        _this.onRight();\n        _this.updPage();\n      });\n    }\n  }, {\n    key: \"start\",\n    value: function start() {\n      this.initItems();\n      this.initPagination();\n      this.initEvents();\n    }\n  }]);\n}();\n\n//# sourceURL=webpack://my-webpack-project/./src/slider.js?");

/***/ }),

/***/ "./style/index.scss":
/*!**************************!*\
  !*** ./style/index.scss ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://my-webpack-project/./style/index.scss?");

/***/ }),

/***/ "./assets/doctor-working-table.png":
/*!*****************************************!*\
  !*** ./assets/doctor-working-table.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/doctor-working-table.png\";\n\n//# sourceURL=webpack://my-webpack-project/./assets/doctor-working-table.png?");

/***/ }),

/***/ "./assets/instagram.png":
/*!******************************!*\
  !*** ./assets/instagram.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/instagram.png\";\n\n//# sourceURL=webpack://my-webpack-project/./assets/instagram.png?");

/***/ }),

/***/ "./assets/logo-g.png":
/*!***************************!*\
  !*** ./assets/logo-g.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/logo-g.png\";\n\n//# sourceURL=webpack://my-webpack-project/./assets/logo-g.png?");

/***/ }),

/***/ "./assets/logo-w.png":
/*!***************************!*\
  !*** ./assets/logo-w.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/logo-w.png\";\n\n//# sourceURL=webpack://my-webpack-project/./assets/logo-w.png?");

/***/ }),

/***/ "./assets/telegram.png":
/*!*****************************!*\
  !*** ./assets/telegram.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/telegram.png\";\n\n//# sourceURL=webpack://my-webpack-project/./assets/telegram.png?");

/***/ }),

/***/ "./assets/trapezoid.png":
/*!******************************!*\
  !*** ./assets/trapezoid.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/trapezoid.png\";\n\n//# sourceURL=webpack://my-webpack-project/./assets/trapezoid.png?");

/***/ }),

/***/ "./assets/whatsapp-header.png":
/*!************************************!*\
  !*** ./assets/whatsapp-header.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/whatsapp-header.png\";\n\n//# sourceURL=webpack://my-webpack-project/./assets/whatsapp-header.png?");

/***/ }),

/***/ "./assets/whatsapp.png":
/*!*****************************!*\
  !*** ./assets/whatsapp.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/whatsapp.png\";\n\n//# sourceURL=webpack://my-webpack-project/./assets/whatsapp.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/";
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;