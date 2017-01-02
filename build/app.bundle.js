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

	var _rectangleApp = __webpack_require__(1);

	(function () {

	    var rectangleCount = 10,
	        btn = document.getElementById('renderBtn'),
	        canvas = document.getElementById('canvas'),
	        code = document.getElementById('codeBlock');

	    btn.addEventListener('click', function () {
	        return new _rectangleApp.RectangleApp(rectangleCount, canvas, code);
	    });
	})();

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.RectangleApp = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _rectangle = __webpack_require__(2);

	var _canvas = __webpack_require__(3);

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

	            return new _canvas.RenderCanvas(this.canvas, this.arrays);
	        }
	    }, {
	        key: 'generateArrays',
	        value: function generateArrays() {

	            var i = 0,
	                array = [];

	            while (i < this.rectangleCount) {
	                array.push(new _rectangle.Rectangle());
	                i++;
	            }

	            return array;
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

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Rectangle = exports.Rectangle = function () {
	    function Rectangle() {
	        _classCallCheck(this, Rectangle);

	        this.maxSize = 20;
	        return this.generateArray();
	    }

	    _createClass(Rectangle, [{
	        key: "generateArray",
	        value: function generateArray() {

	            var startX = this.randomIntFromInterval(0, 860 - this.maxSize),
	                startY = this.randomIntFromInterval(0, 640 - this.maxSize),
	                endX = this.randomIntFromInterval(startX, startX + this.maxSize),
	                endY = this.randomIntFromInterval(startY, startY + this.maxSize),
	                angle = this.randomIntFromInterval(0, 360);

	            return [startX, startY, endX, endY, angle];
	        }
	    }, {
	        key: "randomIntFromInterval",
	        value: function randomIntFromInterval(min, max) {
	            return Math.floor(Math.random() * (max - min + 1) + min);
	        }
	    }]);

	    return Rectangle;
	}();

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var RenderCanvas = exports.RenderCanvas = function () {
	    function RenderCanvas(canvas, rectangles) {
	        _classCallCheck(this, RenderCanvas);

	        this.context = canvas.getContext('2d');
	        this.width = canvas.width;
	        this.height = canvas.height;
	        this.rectangles = rectangles;

	        this.clearCanvas();
	        this.renderRectangles();
	    }

	    _createClass(RenderCanvas, [{
	        key: 'clearCanvas',
	        value: function clearCanvas() {
	            this.context.clearRect(0, 0, this.width, this.height);
	            this.context.beginPath();
	        }
	        // cv.clearRect(0, 0, w, h);
	        // cv.fillStyle = 'rgba(0, 255, 0, 1.0)';
	        // cv.fillRect(0, 0, w, h);

	    }, {
	        key: 'renderRectangles',
	        value: function renderRectangles() {
	            var _this = this;

	            this.rectangles.forEach(function (rectangle) {
	                var _ref = [].concat(_toConsumableArray(rectangle)),
	                    startX = _ref[0],
	                    startY = _ref[1],
	                    endX = _ref[2],
	                    endY = _ref[3],
	                    angle = _ref[4];

	                _this.context.rect(startX, startY, endX, endY);
	                _this.context.stroke();
	            });
	        }
	    }]);

	    return RenderCanvas;
	}();

/***/ }
/******/ ]);