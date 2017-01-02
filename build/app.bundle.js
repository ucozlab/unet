/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	
	"use strict";

	var _rectangleApp = __webpack_require__(3);

	(function () {

	    var rectangleCount = 20,
	        btn = document.getElementById('renderBtn'),
	        canvas = document.getElementById('canvas'),
	        code = document.getElementById('codeBlock');

	    btn.addEventListener('click', function () {
	        return new _rectangleApp.RectangleApp(rectangleCount, canvas, code);
	    });
	})();

/***/ },
/* 1 */,
/* 2 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Rectangle = exports.Rectangle = function Rectangle() {
	    _classCallCheck(this, Rectangle);
	};

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.RectangleApp = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _rectangle = __webpack_require__(2);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var RectangleApp = exports.RectangleApp = function () {
	    function RectangleApp(rectangleCount, canvas, code) {
	        _classCallCheck(this, RectangleApp);

	        this.rectangleCount = rectangleCount;
	        this.canvas = canvas;
	        this.code = code;

	        this.buildApp();
	    }

	    _createClass(RectangleApp, [{
	        key: 'buildApp',
	        value: function buildApp() {

	            this.arrays = this.generateArrays();
	            this.code.innerHTML = this.buildString();

	            this.renderCanvas();
	        }
	    }, {
	        key: 'generateArrays',
	        value: function generateArrays() {

	            var i = 0,
	                array = [];

	            while (i < this.rectangleCount) {
	                array.push(this.generateArray());
	                i++;
	            }

	            return array;
	        }
	    }, {
	        key: 'generateArray',
	        value: function generateArray() {

	            var firstCoord = Math.floor(Math.random() * 100 + 1);

	            return [Math.floor(Math.random() * 100 + 1), Math.floor(Math.random() * 100 + 1), Math.floor(Math.random() * 100 + 1), Math.floor(Math.random() * 100 + 1), Math.floor(Math.random() * 360 + 1)];
	        }
	    }, {
	        key: 'buildString',
	        value: function buildString() {

	            var string = '';

	            this.arrays.forEach(function (val, index) {

	                string += '[' + val + ']\n';

	                if ((index + 1) % 2 === 0) {
	                    string += '\n';
	                }
	            });

	            return string;
	        }
	    }]);

	    return RectangleApp;
	}();

/***/ }
/******/ ]);