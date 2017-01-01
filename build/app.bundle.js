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
/***/ function(module, exports) {

	
	"use strict";

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	(function () {

	    var startTimer = performance.now();

	    function intersect() {
	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }

	        var searchList = args.filter(function (argument) {
	            return Array.isArray(argument);
	        }) // mb it is not an Array ?
	        .map(function (element) {
	            return [].concat(_toConsumableArray(new Set(element)));
	        }) // unification
	        .sort(function (a, b) {
	            return a.length - b.length;
	        }); // first array is the smallest

	        return searchList.shift().filter(function (v) {
	            return searchList.every(function (a) {
	                return a.indexOf(v) !== -1;
	            });
	        }); // check if every array contains elements of first array
	    }

	    var res = intersect([3, 4, 5, 6, 2, 2], [3, 2, 3], [2, 4, 8, 9, 2, 3, 3, 3, 4]);

	    console.log('result:', res);

	    var stopTimer = performance.now();

	    console.log('It took ' + (stopTimer - startTimer) + ' ms.');
	})();

/***/ }
/******/ ]);