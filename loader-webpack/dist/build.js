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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./loaders/css-loader.js!./loaders/less-loader.js!./src/index.less":
/*!*************************************************************************!*\
  !*** ./loaders/css-loader.js!./loaders/less-loader.js!./src/index.less ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

let list = []
list.push("body {\n  background-color: pink;\n  background: ")
list.push('url(' + __webpack_require__(/*! ./favicon.png */ "./src/favicon.png")+ ')')
list.push(";\n}\n")
module.exports = list.join('')

/***/ }),

/***/ "./src/3.png":
/*!*******************!*\
  !*** ./src/3.png ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports="c37db236193aee8b40d02663e017ce1a.png"

/***/ }),

/***/ "./src/favicon.png":
/*!*************************!*\
  !*** ./src/favicon.png ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAB6VBMVEUAAAD///+zii2zii2zii2zii2zii2zii2zii2zii2zii2zii2zii2zii2zii2zii2zii2zii2zii2zii2zii2zii2zii2zii2zii2zii2zii2zii2zii2zii2zii2zii2zii2zii2zii2zii2zii2zii2zii2zii2zii2zii2zii2zii2zii2zii2zii2zii2zii2zii2zii2zii2zii2zii2zii2zii2zii2zii2zii2zii2zii2zii2zii2zii2zii2zii2zii2zii2zii2zii2zii2zii2zii2zii2zii2zii2zii2zii2zii2zii2zii2zii2zii2zii2zii2zii2zii2zii2zii2zii2zii2zii2zii2zii2zii2zii2zii2zii2zii2zii2zii2zii2zii2zii2zii2zii2zii2zii2zii2zii2zii2zii2zii2zii2zii2zii2zii2zii2zii2zii2zii2zii2zii2zii2zii2zii2zii2zii2zii2zii2zii2zii2zii2zii2zii2zii2zii2zii2zii2zii2zii2zii2zii2zii2zii2zii2zii2zii2zii2zii2zii2zii2zii2zii2zii2zii2zii2zii2zii2zii2zii2zii2zii2xt/KSAAAAonRSTlMAAAECAwQFBgcICQsMDQ8QERITFBUXGBkbHB0eIyQlJigrLC4wMTc4OTo7Pj9AQkVGR0hKS0xOUFFUVlhbX2BlZ2hpamtsbnBydHV2d3h5e3x9gIKDhIWHiIqPkJGSlJeYmZ+goaKjpKWnqKytsLGys7S2t7i6u72+v8DBw8XGyMnLzc/U1dvc3t/i5ebn6Onq6+zu7/Dx8vT19vf4+vv8/f6JxeC9AAAE3UlEQVR42u2baVcUVxCGKzMTUUQxojGJG9G4CxqyjPvSKsZdR8XWLBg1CSYxJO77qKhxwyUqIjIC95fq6PGAWMt76Z42H6Y+cc70vfWch6H7dlVBH7znoDJAGaAMUAbo/3HBY5dU/MMC3Eosv+tjATYlB3CSBahITkEdC0Crk8p/lniAxBTUCQDUmJQACaCy3Xuz3u6hCJAAaL3PPv/+uHT6qJeLJsxff+SpnwARAFfQsa+WBkTV8jYfASIAquDJ1pE0KFKLbmJrz5EGgCk48RkxUfkDBNCgAkAKmtLEx5Iue3GedABAwXckRl0HJkABsBU0kRILC5AADcBScDytAdBaSIAGYCjo+IT0+AsRoALoCrYa+enTLkCACqAqaK+yAGgnIEAH0BTsMPPTuGe2AB1AUdA30Qagg7YAA0BWcAbIT1/ZAgwAWcEWBGD4M1OABVB5V9hiJgJAF0wBFgBt4Xd4noEAfjIFmABV/7Fb3IDy02ZTgAkgKDiNASwzBdgAvIIjGEDWFGAD8Ar+xgCWmgIAAFbBRQxgjSkAAGAV3McA9poCEABWwUcQwDFTAALAKliM5P+w0xQAAXAKDiIA9bYACIBT8GQ0APCrLQAD4BRssPNP6LYFYACcgtsjTYBmQAAIwCnYY+X/ogcQAAJwCnpm6/lHXEUEoACcglvjVYADDhGAArD3gsva12C7gwTAAFVc7fL0cDF/4DABMADluB1bh/nk5wTgANVs+bYlg+dnBeAAvALXkoLzswI8AHgFrjkF5ucFeAAICt4lCJyHAB8AQcFggsD5CPABkBS8TRA4LwFeAJKCgQSB8xPgBSAq6CcInKcAPwBRgfslo+cXBfgByApe35EC5y3AE0BW4FrStMr5C/AE4A45b2Lb573iZ3dScQHslwEaP34ofnY/XfpfQUg0Uy7PZqnUX8Kw+LFM0JYq8Z9h+PoCmSBLJb0RhW+uEAlEBbHcir/vv0YkyFJCDyOJQFIQ/+N4bpeXghIcSOq7fBSU4kgmEGQjAuTQ/BIBryDisbyZ98oTZCMB5DzyE31TQBWgAKyAn+WH3LcFUAEKwAn4M+NZpeUUgACcgGt6jWQ3pgAEYAQUpukFisx5SAEGwAlosko0k7sRBRgAI+BBpVmkCt9ddWVoAJwAoGlU3RlXmY4R8LwGKFQidToEgBMANQxmxVSq5e4B6xCA9INYitXsTXA6VK5vjaVczwnoGQYB7IyjYcEKuI51TFbG0bLJ+b1svhUrYmha8eeAUxEAPNt2ORfBwJrojUvhJHh76F0zz9at9C4wCgL4I3LzWnwZmgMBtEdu34tvgxuR/LVAxUYHkF+HzyIAjZFHOOR6QC8yxHIp6hCLUhCxD0REM4A5Jh0gp+zw2O4e/x51kKlaHTHfZwroizrKldOnaGcZp+J81GG2GmMm8cZYFWBH5HG+0BpoPFWh5F/UG3WgsabTHMpsldt2C+yhUmuk0xRQHCWRmqcrCvZiY6gVEFB8Kn7NpR99IIax3tBhcXjS4PQVwT1saV4DwAS8ekk9PG9gKbp21x14tLtBAQidR9w9tHbe1DHjptQHv930WZeXAXABkaJBBAgTyV9UwAMkJKCogAdISEBRAQuQmADnvmQB9ieW3x1lAZLL7x69b4B8+f8NywBlgDLA/wjgBRUqJrL0xZ2sAAAAAElFTkSuQmCC"

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _3_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./3.png */ "./src/3.png");
/* harmony import */ var _3_png__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_3_png__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.less */ "./src/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_1__);
/**`lihao923@163.com`**/// console.log('hello loader!');
// -! 不会让文件再去通过pre + normal loader来处理了
// ! 没有normal
// !! 什么都不要
// let str = require('!!inline-loader!./a.js');

// loader默认是由两部分组成 pitch normal

// class ZF {
//     constructor() {
//         this.name = 'zf'
//     }
//
//     getName() {
//         return this.name;
//     }
// }
//  let zf = new ZF();
// console.log(zf.getName());


let img = document.createElement('img');
img.src = _3_png__WEBPACK_IMPORTED_MODULE_0___default.a;
document.body.appendChild(img);
















/***/ }),

/***/ "./src/index.less":
/*!************************!*\
  !*** ./src/index.less ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


        let style = document.createElement('style');
        style.innerHTML = __webpack_require__(/*! !../loaders/css-loader.js!../loaders/less-loader.js!./index.less */ "./loaders/css-loader.js!./loaders/less-loader.js!./src/index.less");
        document.head.appendChild(style);
    

/***/ })

/******/ });
//# sourceMappingURL=build.js.map